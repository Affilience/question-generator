import Stripe from 'stripe';

// Lazy-initialized server-side Stripe instance
let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    });
  }
  return stripeInstance;
}

// Subscription tier types
export type SubscriptionTier = 'free' | 'student_plus' | 'exam_pro' | 'exam_season';

// Feature limits by tier
export const TIER_LIMITS: Record<SubscriptionTier, {
  questionsPerDay: number | null; // null = unlimited
  papersPerWeek: number | null;
  difficultyControl: boolean;
  timedExamMode: boolean;
  pdfDownloads: boolean;
  examinerCommentary: boolean;
  synopticPapers: boolean;
  priorityGeneration: boolean;
  saveHistory: boolean;
  bookmarks: boolean;
}> = {
  free: {
    questionsPerDay: 15,
    papersPerWeek: 0,
    difficultyControl: false,
    timedExamMode: false,
    pdfDownloads: false,
    examinerCommentary: false,
    synopticPapers: false,
    priorityGeneration: false,
    saveHistory: false,
    bookmarks: false,
  },
  student_plus: {
    questionsPerDay: null, // unlimited
    papersPerWeek: 3,
    difficultyControl: true,
    timedExamMode: false,
    pdfDownloads: false,
    examinerCommentary: false,
    synopticPapers: false,
    priorityGeneration: false,
    saveHistory: true,
    bookmarks: true,
  },
  exam_pro: {
    questionsPerDay: null,
    papersPerWeek: null, // unlimited
    difficultyControl: true,
    timedExamMode: true,
    pdfDownloads: true,
    examinerCommentary: true,
    synopticPapers: true,
    priorityGeneration: true,
    saveHistory: true,
    bookmarks: true,
  },
  exam_season: {
    // Same as exam_pro
    questionsPerDay: null,
    papersPerWeek: null,
    difficultyControl: true,
    timedExamMode: true,
    pdfDownloads: true,
    examinerCommentary: true,
    synopticPapers: true,
    priorityGeneration: true,
    saveHistory: true,
    bookmarks: true,
  },
};

// Price IDs - these should match your Stripe dashboard
// Replace with actual Stripe price IDs after creating products in Stripe
export const STRIPE_PRICES = {
  student_plus_monthly: process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY || 'price_student_plus_monthly',
  student_plus_annual: process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL || 'price_student_plus_annual',
  exam_pro_monthly: process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY || 'price_exam_pro_monthly',
  exam_pro_annual: process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL || 'price_exam_pro_annual',
  exam_season_pass: process.env.STRIPE_PRICE_EXAM_SEASON_PASS || 'price_exam_season_pass',
};

// Map Stripe price IDs to tiers
export function getTierFromPriceId(priceId: string): SubscriptionTier {
  if (priceId.includes('student_plus')) return 'student_plus';
  if (priceId.includes('exam_pro')) return 'exam_pro';
  if (priceId.includes('exam_season')) return 'exam_season';
  return 'free';
}

// Get or create a Stripe customer for a user
export async function getOrCreateStripeCustomer(
  userId: string,
  email: string,
  name?: string
): Promise<string> {
  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Check if user already has a Stripe customer ID
  const { data: subscription } = await supabase
    .from('user_subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', userId)
    .not('stripe_customer_id', 'is', null)
    .single();

  if (subscription?.stripe_customer_id) {
    return subscription.stripe_customer_id;
  }

  // Create new Stripe customer
  const customer = await getStripe().customers.create({
    email,
    name: name || undefined,
    metadata: {
      supabase_user_id: userId,
    },
  });

  return customer.id;
}

// Create a checkout session
export async function createCheckoutSession({
  userId,
  email,
  priceId,
  successUrl,
  cancelUrl,
  trialDays,
}: {
  userId: string;
  email: string;
  priceId: string;
  successUrl: string;
  cancelUrl: string;
  trialDays?: number;
}): Promise<Stripe.Checkout.Session> {
  const customerId = await getOrCreateStripeCustomer(userId, email);

  // Check if this is a one-time payment (exam season pass)
  const isOneTime = priceId.includes('exam_season');

  const sessionConfig: Stripe.Checkout.SessionCreateParams = {
    customer: customerId,
    mode: isOneTime ? 'payment' : 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: {
      user_id: userId,
      price_id: priceId,
    },
    allow_promotion_codes: true,
  };

  // Add trial period for subscriptions (not one-time payments)
  if (!isOneTime && trialDays) {
    sessionConfig.subscription_data = {
      trial_period_days: trialDays,
      metadata: {
        user_id: userId,
      },
    };
  }

  // For one-time payments, add metadata
  if (isOneTime) {
    sessionConfig.payment_intent_data = {
      metadata: {
        user_id: userId,
        price_id: priceId,
      },
    };
  }

  return getStripe().checkout.sessions.create(sessionConfig);
}

// Create a customer portal session for managing subscriptions
export async function createPortalSession(
  customerId: string,
  returnUrl: string
): Promise<Stripe.BillingPortal.Session> {
  return getStripe().billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
}

// Cancel a subscription
export async function cancelSubscription(
  subscriptionId: string,
  cancelAtPeriodEnd: boolean = true
): Promise<Stripe.Subscription> {
  if (cancelAtPeriodEnd) {
    return getStripe().subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
  }
  return getStripe().subscriptions.cancel(subscriptionId);
}

// Reactivate a canceled subscription
export async function reactivateSubscription(
  subscriptionId: string
): Promise<Stripe.Subscription> {
  return getStripe().subscriptions.update(subscriptionId, {
    cancel_at_period_end: false,
  });
}

// Get subscription details
export async function getSubscription(
  subscriptionId: string
): Promise<Stripe.Subscription> {
  return getStripe().subscriptions.retrieve(subscriptionId);
}

// Construct webhook event
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  return getStripe().webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}
