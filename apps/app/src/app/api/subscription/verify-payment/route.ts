import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getStripe } from '@/lib/stripe';
import { getAuthenticatedUser } from '@/lib/api/auth';

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
    // Authenticate first. This route writes an active subscription with the
    // service-role key, so it must never take a user id from the body: doing so
    // let anyone with any paid checkout session id mint subscriptions on
    // arbitrary accounts, repeatedly, from a single payment.
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const userId = user.id;

    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing sessionId' },
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

    // Bind the checkout session to this account. Accept it only when Stripe's
    // own record says it belongs to the caller — either by the user id we set
    // in metadata at checkout, or by a verified email match.
    const sessionUserId = session.metadata?.user_id;
    const sessionEmail = (
      session.customer_details?.email ||
      session.customer_email ||
      ''
    ).toLowerCase();
    const callerEmail = (user.email || '').toLowerCase();

    const belongsToCaller =
      (sessionUserId && sessionUserId === userId) ||
      (!!sessionEmail && !!callerEmail && sessionEmail === callerEmail);

    if (!belongsToCaller) {
      console.warn('verify-payment: session does not belong to caller', {
        sessionId,
        userId,
        sessionUserId,
        hasSessionEmail: !!sessionEmail,
      });
      return NextResponse.json(
        {
          error:
            'This payment was made with a different email address. Use "Link a purchase" to connect it to your account.',
        },
        { status: 403 }
      );
    }

    // Check if subscription already exists
    const { data: existingSub } = await supabase
      .from('user_subscriptions')
      .select('id, status')
      .eq('user_id', userId)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

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

    // Upsert, not insert: keyed on the Stripe subscription id (or a stable
    // id derived from the session) so replaying the same session can only ever
    // produce one row, whichever of the webhook or this fallback runs first.
    const { error } = await supabase
      .from('user_subscriptions')
      .upsert({
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
      }, {
        onConflict: 'stripe_subscription_id',
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