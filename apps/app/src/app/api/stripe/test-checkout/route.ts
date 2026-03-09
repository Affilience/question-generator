import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

/**
 * Simplified test checkout endpoint for debugging
 */
export async function POST(request: NextRequest) {
  console.log('[TEST-CHECKOUT] Starting test checkout session');
  
  // Manual environment variable checks
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  
  if (!secretKey) {
    console.error('[TEST-CHECKOUT] No STRIPE_SECRET_KEY found');
    return NextResponse.json({
      error: 'Stripe not configured',
      debug: {
        hasSecretKey: false,
        hasPublishableKey: !!publishableKey,
        nodeEnv: process.env.NODE_ENV,
      }
    }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { priceKey } = body;
    
    console.log('[TEST-CHECKOUT] Request:', { priceKey });
    
    // Hardcoded price mapping for testing
    const priceMap: Record<string, string> = {
      'student_plus_monthly': process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY || '',
      'student_plus_annual': process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL || '',
      'exam_pro_monthly': process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY || '',
      'exam_pro_annual': process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL || '',
    };
    
    const priceId = priceMap[priceKey];
    
    console.log('[TEST-CHECKOUT] Price lookup:', {
      priceKey,
      priceId,
      hasPriceEnvVar: !!process.env[`STRIPE_PRICE_${priceKey.toUpperCase()}`],
    });
    
    if (!priceId) {
      return NextResponse.json({
        error: 'Price not configured',
        debug: {
          requestedKey: priceKey,
          availableKeys: Object.keys(priceMap),
          priceEnvVars: {
            STRIPE_PRICE_STUDENT_PLUS_MONTHLY: !!process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY,
            STRIPE_PRICE_STUDENT_PLUS_ANNUAL: !!process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL,
            STRIPE_PRICE_EXAM_PRO_MONTHLY: !!process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY,
            STRIPE_PRICE_EXAM_PRO_ANNUAL: !!process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL,
          }
        }
      }, { status: 400 });
    }

    // Initialize Stripe with minimal config
    console.log('[TEST-CHECKOUT] Initializing Stripe');
    const stripe = new Stripe(secretKey, {
      typescript: true,
    });
    
    // Create minimal checkout session
    console.log('[TEST-CHECKOUT] Creating session with price:', priceId);
    
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
                   (process.env.NODE_ENV === 'production' 
                     ? 'https://www.past-papers.co.uk' 
                     : 'http://localhost:3000');
    
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      success_url: `${baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
      // For embedded checkout
      ui_mode: 'embedded',
      return_url: `${baseUrl}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      customer_creation: 'always',
    });
    
    console.log('[TEST-CHECKOUT] Session created:', {
      id: session.id,
      hasClientSecret: !!session.client_secret,
      url: session.url,
    });
    
    return NextResponse.json({
      success: true,
      sessionId: session.id,
      clientSecret: session.client_secret,
      url: session.url,
    });
    
  } catch (error: any) {
    console.error('[TEST-CHECKOUT] Error:', error);
    
    // Detailed error response
    return NextResponse.json({
      error: 'Checkout creation failed',
      details: {
        message: error.message,
        type: error.type,
        statusCode: error.statusCode,
        code: error.code,
        // Include raw error in dev
        ...(process.env.NODE_ENV === 'development' && {
          raw: {
            message: error.raw?.message,
            param: error.raw?.param,
            type: error.raw?.type,
          }
        })
      }
    }, { status: 500 });
  }
}