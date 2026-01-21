import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { getStripe, STRIPE_PRICES } from '@/lib/stripe';
import { createClient } from '@supabase/supabase-js';
import { CreateCheckoutRequestSchema, validateRequest } from '@/lib/validations/api-schemas';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = validateRequest(CreateCheckoutRequestSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: validation.error },
        { status: 400 }
      );
    }

    const { priceKey, userId, returnUrl } = validation.data!;

    const priceId = STRIPE_PRICES[priceKey as keyof typeof STRIPE_PRICES];
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid price key' }, { status: 400 });
    }

    // Get user email if logged in
    let email: string | undefined;
    let customerId: string | undefined;

    if (userId) {
      const { data: user } = await supabase.auth.admin.getUserById(userId);
      email = user?.user?.email || undefined;

      // Check for existing customer
      const { data: existingSub } = await supabase
        .from('user_subscriptions')
        .select('stripe_customer_id')
        .eq('user_id', userId)
        .not('stripe_customer_id', 'is', null)
        .single();

      if (existingSub?.stripe_customer_id) {
        customerId = existingSub.stripe_customer_id;
      }
    }

    const stripe = getStripe();
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Create checkout session with embedded mode (all plans are subscriptions)
    const sessionParams: Record<string, unknown> = {
      mode: 'subscription',
      ui_mode: 'embedded',
      line_items: [{ price: priceId, quantity: 1 }],
      return_url: `${returnUrl || baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        user_id: userId || '',
        price_key: priceKey,
      },
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { user_id: userId || '' },
      },
    };

    // Add customer or email
    if (customerId) {
      sessionParams.customer = customerId;
    } else if (email) {
      sessionParams.customer_email = email;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session = await stripe.checkout.sessions.create(sessionParams as any);

    return NextResponse.json({
      clientSecret: session.client_secret,
      sessionId: session.id,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/stripe/create-checkout' },
    });
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
