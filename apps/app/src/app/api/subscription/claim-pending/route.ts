import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Claims a pending subscription for a user who purchased before creating an account
 */
export async function POST(request: NextRequest) {
  try {
    const { userId, email } = await request.json();
    
    if (!userId || !email) {
      return NextResponse.json(
        { error: 'User ID and email are required' },
        { status: 400 }
      );
    }

    console.log('[Claim Pending] Checking for pending subscriptions:', { userId, email });

    // Find pending subscription by email
    const { data: pendingSubscription, error: fetchError } = await supabase
      .from('pending_subscriptions')
      .select('*')
      .eq('email', email.toLowerCase())
      .is('claimed_by', null)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (fetchError || !pendingSubscription) {
      console.log('[Claim Pending] No pending subscription found for:', email);
      return NextResponse.json({ 
        claimed: false, 
        message: 'No pending subscription found' 
      });
    }

    console.log('[Claim Pending] Found pending subscription:', {
      sessionId: pendingSubscription.session_id,
      stripeCustomerId: pendingSubscription.stripe_customer_id,
      priceKey: pendingSubscription.price_key
    });

    // Map price_key to database price_id
    const PRICE_KEY_TO_DB_ID: Record<string, string> = {
      student_plus_monthly: 'price_student_plus_monthly',
      student_plus_annual: 'price_student_plus_annual',
      exam_pro_monthly: 'price_exam_pro_monthly',
      exam_pro_annual: 'price_exam_pro_annual',
    };

    const priceId = pendingSubscription.price_key ? 
      PRICE_KEY_TO_DB_ID[pendingSubscription.price_key] : null;

    if (!priceId) {
      console.error('[Claim Pending] Invalid price key:', pendingSubscription.price_key);
      return NextResponse.json(
        { error: 'Invalid subscription configuration' },
        { status: 500 }
      );
    }

    // Calculate period end based on plan type
    const isAnnual = pendingSubscription.price_key?.includes('annual');
    const periodEndDate = isAnnual 
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 1 month

    // Create user subscription
    const { error: createError } = await supabase
      .from('user_subscriptions')
      .upsert({
        user_id: userId,
        stripe_customer_id: pendingSubscription.stripe_customer_id,
        stripe_subscription_id: pendingSubscription.stripe_subscription_id,
        status: 'active',
        price_id: priceId,
        current_period_start: new Date().toISOString(),
        current_period_end: periodEndDate.toISOString(),
        metadata: {
          checkout_session_id: pendingSubscription.session_id,
          claimed_from_pending: true,
          original_purchase_date: pendingSubscription.created_at,
          ...pendingSubscription.metadata
        }
      }, {
        onConflict: 'user_id',
      });

    if (createError) {
      console.error('[Claim Pending] Error creating subscription:', createError);
      throw createError;
    }

    // Mark pending subscription as claimed
    const { error: updateError } = await supabase
      .from('pending_subscriptions')
      .update({
        claimed_by: userId,
        claimed_at: new Date().toISOString()
      })
      .eq('id', pendingSubscription.id);

    if (updateError) {
      console.error('[Claim Pending] Error updating pending subscription:', updateError);
      // Don't throw here as the subscription was created successfully
    }

    console.log('[Claim Pending] Successfully claimed subscription for user:', userId);

    return NextResponse.json({
      claimed: true,
      subscription: {
        tier: pendingSubscription.price_key?.split('_')[0] + '_' + 
              pendingSubscription.price_key?.split('_')[1],
        stripe_customer_id: pendingSubscription.stripe_customer_id
      }
    });

  } catch (error) {
    console.error('[Claim Pending] Error:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/subscription/claim-pending' }
    });
    return NextResponse.json(
      { error: 'Failed to claim subscription' },
      { status: 500 }
    );
  }
}