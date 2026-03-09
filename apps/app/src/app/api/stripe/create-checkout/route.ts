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
  console.log('[API] Create checkout session started');
  
  try {
    const body = await request.json();
    console.log('[API] Request body:', { 
      priceKey: body.priceKey, 
      hasUserId: !!body.userId,
      returnUrl: body.returnUrl 
    });

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
    console.log('[API] Price mapping:', { priceKey, priceId, availablePrices: Object.keys(STRIPE_PRICES) });
    
    if (!priceId) {
      console.error('[API] Invalid price key:', priceKey);
      return NextResponse.json({ 
        error: 'Invalid price key',
        details: `Price key "${priceKey}" not found in configuration` 
      }, { status: 400 });
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
      payment_method_types: ['card'],  // Explicitly set payment methods
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
    } else {
      // For anonymous users, let Stripe collect the email
      sessionParams.customer_creation = 'always';
      // Add field to collect phone for better conversion
      sessionParams.phone_number_collection = { enabled: false };
    }

    console.log('[API] Creating Stripe session with params:', {
      mode: sessionParams.mode,
      ui_mode: sessionParams.ui_mode,
      hasCustomer: !!sessionParams.customer,
      hasEmail: !!sessionParams.customer_email,
      lineItems: sessionParams.line_items,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session = await stripe.checkout.sessions.create(sessionParams as any);

    console.log('[API] Stripe session created:', {
      sessionId: session.id,
      hasClientSecret: !!session.client_secret,
      mode: session.mode,
      status: session.status,
    });

    if (!session.client_secret) {
      console.error('[API] No client secret in session:', session);
      throw new Error('Stripe session created but no client secret returned');
    }

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
