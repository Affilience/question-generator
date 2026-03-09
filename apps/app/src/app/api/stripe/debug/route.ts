import { NextRequest, NextResponse } from 'next/server';

/**
 * Debug endpoint to check Stripe configuration
 * Only shows non-sensitive configuration status
 */
export async function GET(request: NextRequest) {
  // Only allow in development or with secret header
  const debugToken = request.headers.get('x-debug-token');
  const isDev = process.env.NODE_ENV === 'development';
  
  if (!isDev && debugToken !== process.env.DEBUG_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const config: any = {
    environment: process.env.NODE_ENV,
    hasStripeSecret: !!process.env.STRIPE_SECRET_KEY,
    stripeSecretPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 7),
    hasStripePublishable: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    stripePublishablePrefix: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.substring(0, 7),
    
    // Check if using test or live keys
    isTestMode: process.env.STRIPE_SECRET_KEY?.includes('_test_'),
    
    // Price configuration
    prices: {
      student_plus_monthly: {
        hasEnvVar: !!process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY,
        value: process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY || 'NOT_SET',
      },
      student_plus_annual: {
        hasEnvVar: !!process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL,
        value: process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL || 'NOT_SET',
      },
      exam_pro_monthly: {
        hasEnvVar: !!process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY,
        value: process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY || 'NOT_SET',
      },
      exam_pro_annual: {
        hasEnvVar: !!process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL,
        value: process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL || 'NOT_SET',
      },
    },
    
    // Webhook configuration
    hasWebhookSecret: !!process.env.STRIPE_WEBHOOK_SECRET,
    
    // Database configuration
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    
    // App URL
    appUrl: process.env.NEXT_PUBLIC_APP_URL || 'NOT_SET',
  };

  // Try to initialize Stripe to check if it works
  let stripeStatus = 'unknown';
  let stripeError = null;
  
  try {
    if (process.env.STRIPE_SECRET_KEY) {
      const Stripe = (await import('stripe')).default;
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        typescript: true,
      });
      
      // Try to list prices to verify API key works
      const prices = await stripe.prices.list({ limit: 1 });
      stripeStatus = 'connected';
      
      // Check if prices exist
      const priceIds = [
        process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY,
        process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL,
        process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY,
        process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL,
      ].filter(Boolean);
      
      const priceChecks = await Promise.all(
        priceIds.map(async (id) => {
          try {
            const price = await stripe.prices.retrieve(id!);
            return { id, exists: true, active: price.active };
          } catch (e) {
            return { id, exists: false, error: 'Price not found' };
          }
        })
      );
      
      config.priceValidation = priceChecks;
    } else {
      stripeStatus = 'no_secret_key';
    }
  } catch (error: any) {
    stripeStatus = 'error';
    stripeError = error.message || 'Failed to connect to Stripe';
  }
  
  config.stripeConnection = {
    status: stripeStatus,
    error: stripeError,
  };

  return NextResponse.json(config, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
    }
  });
}