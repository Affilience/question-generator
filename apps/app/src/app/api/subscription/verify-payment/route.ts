import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getStripe } from '@/lib/stripe';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const PRICE_KEY_TO_DB_ID: Record<string, string> = {
  student_plus_monthly: 'price_student_plus_monthly',
  student_plus_annual: 'price_student_plus_annual',
  exam_pro_monthly: 'price_exam_pro_monthly',
  exam_pro_annual: 'price_exam_pro_annual',
};

export async function POST(request: NextRequest) {
  try {
    const { sessionId, userId } = await request.json();

    if (!sessionId || !userId) {
      return NextResponse.json(
        { error: 'Missing sessionId or userId' },
        { status: 400 }
      );
    }

    console.log('Verifying payment for session:', sessionId, 'user:', userId);

    // Get the session from Stripe
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      );
    }

    // Check if payment was successful
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }

    // Check if subscription already exists
    const { data: existingSub } = await supabase
      .from('user_subscriptions')
      .select('id, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    if (existingSub) {
      console.log('Subscription already exists for user:', userId);
      return NextResponse.json({ success: true, message: 'Subscription already exists' });
    }

    // Get price information from session metadata
    const priceKey = session.metadata?.price_key;
    const priceId = priceKey ? PRICE_KEY_TO_DB_ID[priceKey] : null;

    if (!priceId) {
      console.error('Could not determine price ID from session:', { priceKey, sessionId });
      return NextResponse.json(
        { error: 'Could not determine subscription plan' },
        { status: 400 }
      );
    }

    // Calculate proper period end based on plan type
    const isAnnual = priceKey?.includes('annual');
    const periodEndDate = isAnnual 
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 1 month

    console.log('Creating fallback subscription:', { 
      priceKey, 
      priceId, 
      isAnnual, 
      periodEnd: periodEndDate.toISOString() 
    });

    // Create subscription record as fallback
    const { error } = await supabase
      .from('user_subscriptions')
      .insert({
        user_id: userId,
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: session.subscription as string || `fallback_${session.id}`,
        status: 'active',
        price_id: priceId,
        current_period_start: new Date().toISOString(),
        current_period_end: periodEndDate.toISOString(),
        metadata: {
          created_by: 'fallback_api',
          session_id: sessionId,
          subscription_type: isAnnual ? 'annual' : 'monthly',
          payment_method: 'stripe',
          timestamp: new Date().toISOString()
        }
      });

    if (error) {
      console.error('Error creating fallback subscription:', error);
      return NextResponse.json(
        { error: 'Failed to create subscription record' },
        { status: 500 }
      );
    }

    console.log('Successfully created fallback subscription for user:', userId);
    return NextResponse.json({ 
      success: true, 
      message: 'Subscription created successfully',
      method: 'fallback'
    });

  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}