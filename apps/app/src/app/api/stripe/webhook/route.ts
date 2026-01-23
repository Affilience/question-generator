import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { constructWebhookEvent, getTierFromPriceId } from '@/lib/stripe';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Disable body parsing - we need raw body for webhook verification
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    console.log('Webhook received:', {
      hasSignature: !!signature,
      bodyLength: body.length,
      timestamp: new Date().toISOString()
    });

    if (!signature) {
      console.error('Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = constructWebhookEvent(body, signature);
      console.log('Webhook event verified:', { type: event.type, id: event.id });
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Handling checkout.session.completed');
        await handleCheckoutCompleted(session);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Handling subscription event:', event.type);
        await handleSubscriptionUpdate(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Handling subscription deletion');
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Handling invoice payment succeeded');
        await handleInvoicePaymentSucceeded(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Handling invoice payment failed');
        await handleInvoicePaymentFailed(invoice);
        break;
      }

      case 'payment_intent.succeeded': {
        // Handle one-time payments (Exam Season Pass)
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Handling payment intent succeeded');
        await handleOneTimePayment(paymentIntent);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    console.log('Webhook processed successfully:', event.type);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

// Map price_key to database price_id
const PRICE_KEY_TO_DB_ID: Record<string, string> = {
  student_plus_monthly: 'price_student_plus_monthly',
  student_plus_annual: 'price_student_plus_annual',
  exam_pro_monthly: 'price_exam_pro_monthly',
  exam_pro_annual: 'price_exam_pro_annual',
};

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id;
  const customerId = session.customer as string;
  const priceKey = session.metadata?.price_key;

  console.log('Processing checkout.session.completed:', {
    sessionId: session.id,
    userId,
    customerId,
    priceKey,
    mode: session.mode,
    subscriptionId: session.subscription
  });

  if (!userId) {
    console.error('No user_id in checkout session metadata');
    return;
  }

  // Convert price_key to database price_id
  const priceId = priceKey ? PRICE_KEY_TO_DB_ID[priceKey] : null;
  
  if (!priceId) {
    console.error('Could not map price_key to database price_id:', priceKey);
    return;
  }

  console.log('Mapped price_key to priceId:', { priceKey, priceId });

  // Calculate proper period end based on plan type
  const isAnnual = priceKey?.includes('annual');
  const periodEndDate = isAnnual 
    ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
    : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 1 month

  // First check if subscription already exists
  const { data: existing } = await supabase
    .from('user_subscriptions')
    .select('id')
    .eq('user_id', userId)
    .eq('status', 'active')
    .single();

  if (existing) {
    console.log('Active subscription already exists for user:', userId);
    // Update existing subscription
    const { error } = await supabase
      .from('user_subscriptions')
      .update({
        stripe_customer_id: customerId,
        stripe_subscription_id: session.subscription as string || `checkout_${session.id}`,
        price_id: priceId,
        current_period_start: new Date().toISOString(),
        current_period_end: periodEndDate.toISOString(),
        updated_at: new Date().toISOString(),
        metadata: {
          checkout_session_id: session.id,
          payment_method: 'stripe',
          subscription_type: isAnnual ? 'annual' : 'monthly'
        }
      })
      .eq('id', existing.id);

    if (error) {
      console.error('Error updating existing subscription:', error);
    } else {
      console.log('Successfully updated existing subscription for user:', userId);
    }
  } else {
    // Create new subscription
    const { error } = await supabase
      .from('user_subscriptions')
      .insert({
        user_id: userId,
        stripe_customer_id: customerId,
        stripe_subscription_id: session.subscription as string || `checkout_${session.id}`,
        status: 'active',
        price_id: priceId,
        current_period_start: new Date().toISOString(),
        current_period_end: periodEndDate.toISOString(),
        metadata: {
          checkout_session_id: session.id,
          payment_method: 'stripe',
          subscription_type: isAnnual ? 'annual' : 'monthly'
        }
      });

    if (error) {
      console.error('Error creating new subscription:', error);
    } else {
      console.log('Successfully created new subscription for user:', userId);
    }
  }
}

async function handleSubscriptionUpdate(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  // Find user by customer ID
  const { data: existingSub } = await supabase
    .from('user_subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (!existingSub) {
    console.error('No user found for customer:', customerId);
    return;
  }

  const priceId = subscription.items.data[0]?.price.id;

  // Access subscription period from the raw object (these exist at runtime)
  const subData = subscription as Stripe.Subscription & {
    current_period_start: number;
    current_period_end: number;
  };

  const { error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: existingSub.user_id,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      price_id: priceId,
      status: subscription.status,
      current_period_start: new Date(subData.current_period_start * 1000).toISOString(),
      current_period_end: new Date(subData.current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      canceled_at: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000).toISOString()
        : null,
      trial_start: subscription.trial_start
        ? new Date(subscription.trial_start * 1000).toISOString()
        : null,
      trial_end: subscription.trial_end
        ? new Date(subscription.trial_end * 1000).toISOString()
        : null,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'stripe_subscription_id',
    });

  if (error) {
    console.error('Error updating subscription:', error);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: 'canceled',
      canceled_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id);

  if (error) {
    console.error('Error canceling subscription:', error);
  }
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  // Subscription renewals are handled by subscription.updated
  console.log('Invoice payment succeeded:', invoice.id);
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  const customerId = invoice.customer as string;

  // Find subscription by customer
  const { error } = await supabase
    .from('user_subscriptions')
    .update({
      status: 'past_due',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_customer_id', customerId)
    .eq('status', 'active');

  if (error) {
    console.error('Error updating subscription to past_due:', error);
  }
}

// Note: One-time payments are no longer supported - all plans are subscriptions
async function handleOneTimePayment(paymentIntent: Stripe.PaymentIntent) {
  console.log('One-time payment received but not processed (deprecated):', paymentIntent.id);
}
