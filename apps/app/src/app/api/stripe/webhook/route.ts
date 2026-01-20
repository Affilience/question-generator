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

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    try {
      event = constructWebhookEvent(body, signature);
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
        await handleCheckoutCompleted(session);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdate(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentSucceeded(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice);
        break;
      }

      case 'payment_intent.succeeded': {
        // Handle one-time payments (Exam Season Pass)
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handleOneTimePayment(paymentIntent);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

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
  exam_season_pass: 'price_exam_season_pass',
};

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.user_id;
  const customerId = session.customer as string;
  const priceKey = session.metadata?.price_key;

  if (!userId) {
    console.error('No user_id in checkout session metadata');
    return;
  }

  // Convert price_key to database price_id
  const priceId = priceKey ? PRICE_KEY_TO_DB_ID[priceKey] : null;

  // Update or create subscription record with customer ID
  const { error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: session.subscription as string || `one_time_${session.id}`,
      status: session.mode === 'subscription' ? 'active' : 'active',
      price_id: priceId,
      current_period_start: new Date().toISOString(),
      current_period_end: session.mode === 'subscription'
        ? undefined // Will be set by subscription.updated event
        : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days for one-time
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'user_id,stripe_subscription_id',
    });

  if (error) {
    console.error('Error updating subscription:', error);
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
      onConflict: 'user_id,stripe_subscription_id',
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

async function handleOneTimePayment(paymentIntent: Stripe.PaymentIntent) {
  const userId = paymentIntent.metadata?.user_id;
  const priceId = paymentIntent.metadata?.price_id;

  if (!userId || !priceId) {
    console.error('Missing metadata in payment intent');
    return;
  }

  // For Exam Season Pass - 30 days access
  const tier = getTierFromPriceId(priceId);
  if (tier === 'exam_season') {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const { error } = await supabase
      .from('user_subscriptions')
      .upsert({
        user_id: userId,
        stripe_customer_id: paymentIntent.customer as string,
        stripe_subscription_id: `exam_season_${paymentIntent.id}`,
        price_id: priceId,
        status: 'active',
        current_period_start: new Date().toISOString(),
        current_period_end: endDate.toISOString(),
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,stripe_subscription_id',
      });

    if (error) {
      console.error('Error creating exam season subscription:', error);
    }
  }
}
