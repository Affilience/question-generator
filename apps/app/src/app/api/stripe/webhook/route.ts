import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import { constructWebhookEvent, getTierFromPriceId, STRIPE_PRICES } from '@/lib/stripe';

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

/**
 * Extracts the optional "student's account email" checkout field, normalized,
 * or null when absent/implausible. Treated as a match hint only — it's typed
 * by the payer and never verified.
 */
function extractStudentEmail(session: Stripe.Checkout.Session): string | null {
  const raw = session.custom_fields?.find((f) => f.key === 'student_email')?.text?.value;
  if (!raw) return null;
  const normalized = raw.trim().toLowerCase();
  if (normalized.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return null;
  }
  return normalized;
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  let userId = session.metadata?.user_id;
  const customerId = session.customer as string;
  const priceKey = session.metadata?.price_key;
  const customerEmail = session.customer_details?.email;
  const studentEmail = extractStudentEmail(session);

  console.log('Processing checkout.session.completed:', {
    sessionId: session.id,
    userId,
    customerId,
    customerEmail,
    studentEmail,
    priceKey,
    mode: session.mode,
    subscriptionId: session.subscription
  });

  // No user_id in metadata: try to auto-link by email before falling back to pending.
  // This avoids the failure mode where a customer pays, never returns to /signup?from=checkout,
  // and ends up paying Stripe while the app thinks they're on a free trial.
  if (!userId && customerEmail) {
    let matchedUserId = await findUserIdByEmail(customerEmail);

    if (matchedUserId) {
      console.log('Auto-linked anonymous checkout to existing user by email:', { customerEmail, userId: matchedUserId });
    } else if (studentEmail && studentEmail !== customerEmail.toLowerCase()) {
      matchedUserId = await findUserIdByEmail(studentEmail);
      if (matchedUserId) {
        console.log('Auto-linked anonymous checkout via student email field:', { studentEmail, userId: matchedUserId });
      }
    }

    if (matchedUserId) {
      userId = matchedUserId;
    }

    // Always record in pending_subscriptions for audit. If we matched a user, mark it claimed inline.
    const { error: pendingError } = await supabase
      .from('pending_subscriptions')
      .insert({
        session_id: session.id,
        email: customerEmail.toLowerCase(),
        alt_email: studentEmail,
        stripe_customer_id: customerId,
        stripe_subscription_id: session.subscription as string,
        price_key: priceKey,
        created_at: new Date().toISOString(),
        metadata: {
          customer_name: session.customer_details?.name,
          payment_status: session.payment_status,
        },
        ...(matchedUserId && {
          claimed_by: matchedUserId,
          claimed_at: new Date().toISOString(),
        }),
      });

    if (pendingError) {
      console.error('Error storing pending subscription:', pendingError);
    } else {
      console.log('Pending subscription stored:', { email: customerEmail, autoClaimed: !!matchedUserId });
    }

    // If we couldn't auto-link, stop here — claim-pending will pick it up at signup/login.
    if (!userId) {
      return;
    }
  }

  if (!userId) {
    console.error('No user_id and no email in checkout session');
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
  
  // Extract user_id from subscription metadata (for new subscriptions)
  const userIdFromMetadata = subscription.metadata?.user_id;

  // Try to find existing subscription by customer ID first
  const { data: existingSub } = await supabase
    .from('user_subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .single();

  // Determine user_id: use existing subscription's user_id or metadata
  let userId = existingSub?.user_id || userIdFromMetadata;

  // Fallback: try to find user by Stripe customer ID
  if (!userId) {
    const { data: customerUser } = await supabase
      .from('user_subscriptions')
      .select('user_id')
      .eq('stripe_customer_id', customerId)
      .limit(1)
      .single();
    
    userId = customerUser?.user_id;
  }

  if (!userId) {
    console.error('No user_id found for subscription after all fallback attempts:', {
      subscriptionId: subscription.id,
      customerId,
      hasMetadata: !!userIdFromMetadata,
      hasExistingSub: !!existingSub,
      attemptedCustomerLookup: true
    });
    throw new Error(`Could not determine user_id for subscription ${subscription.id}`);
  }

  console.log('Processing subscription update:', {
    subscriptionId: subscription.id,
    userId,
    customerId,
    source: existingSub ? 'existing_sub' : 'metadata'
  });

  const rawPriceId = subscription.items.data[0]?.price.id;
  
  if (!rawPriceId) {
    console.error('No price ID found in subscription:', {
      subscriptionId: subscription.id,
      items: subscription.items.data.length
    });
    throw new Error('No price ID found in subscription');
  }
  
  // Map Stripe price ID to database price ID
  // Create reverse lookup from STRIPE_PRICES to find the key (database format)
  const dbPriceId = (() => {
    for (const [dbKey, stripePriceId] of Object.entries(STRIPE_PRICES)) {
      if (stripePriceId === rawPriceId) {
        return `price_${dbKey}`; // Convert to database format
      }
    }
    // Fallback to the old mapping for backwards compatibility
    const oldMapping = Object.entries(PRICE_KEY_TO_DB_ID).find(
      ([_, stripePriceId]) => stripePriceId === rawPriceId
    )?.[1];
    return oldMapping || rawPriceId;
  })();

  console.log('Price mapping:', {
    rawPriceId,
    dbPriceId,
    availablePrices: Object.entries(STRIPE_PRICES)
  });

  // Access subscription period from the raw object (these exist at runtime)
  const subData = subscription as Stripe.Subscription & {
    current_period_start: number;
    current_period_end: number;
  };

  const { error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      price_id: dbPriceId,
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
    console.error('Error updating subscription:', {
      error,
      subscriptionId: subscription.id,
      userId,
      customerId,
      dbPriceId,
      rawPriceId,
      errorCode: error.code,
      errorMessage: error.message
    });
    throw error; // Re-throw to ensure proper error response
  } else {
    console.log('Successfully processed subscription:', {
      subscriptionId: subscription.id,
      userId,
      status: subscription.status,
      dbPriceId
    });
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

async function findUserIdByEmail(email: string): Promise<string | null> {
  // Service-role client can read auth.users via the admin API.
  // Page through results because listUsers paginates; in practice an exam-prep app
  // user base is small enough that the first page is almost always enough.
  const normalized = email.toLowerCase();
  let page = 1;
  const perPage = 1000;
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage });
    if (error) {
      console.error('findUserIdByEmail: listUsers failed', error);
      return null;
    }
    const match = data.users.find(u => u.email?.toLowerCase() === normalized);
    if (match) return match.id;
    if (data.users.length < perPage) return null;
    page += 1;
  }
}
