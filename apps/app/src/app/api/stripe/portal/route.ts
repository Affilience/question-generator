import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createPortalSession } from '@/lib/stripe';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body as { userId: string };

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId' },
        { status: 400 }
      );
    }

    // Get the user's Stripe customer ID.
    // A user can legitimately have more than one subscription row (re-subscribe,
    // plan change, historical/canceled rows), so we must NOT use .single() here:
    // it throws when more than one row matches and would wrongly 404 a paying
    // customer, leaving them unable to cancel. Prefer the customer tied to a live
    // subscription, otherwise fall back to the most recent row.
    const { data: rows, error: subError } = await supabase
      .from('user_subscriptions')
      .select('stripe_customer_id, status, created_at')
      .eq('user_id', userId)
      .not('stripe_customer_id', 'is', null)
      .order('created_at', { ascending: false });

    if (subError) {
      console.error('Portal: failed to load subscriptions for user', userId, subError);
      return NextResponse.json(
        { error: 'Failed to load subscription' },
        { status: 500 }
      );
    }

    const customerId =
      rows?.find((r) => r.status === 'active' || r.status === 'trialing')?.stripe_customer_id ||
      rows?.[0]?.stripe_customer_id;

    if (!customerId) {
      return NextResponse.json(
        { error: 'No subscription found for user' },
        { status: 404 }
      );
    }

    // Build return URL
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const returnUrl = `${origin}/dashboard`;

    // Create portal session
    const session = await createPortalSession(customerId, returnUrl);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const stripeMessage = error instanceof Error ? error.message : String(error);
    console.error('Portal session error:', stripeMessage);

    // The Stripe Customer Portal must be activated in each mode (test AND live)
    // before it can be opened. Until then EVERY portal request fails with
    // "No configuration provided", which breaks cancellation for all customers.
    // Surface this specific case loudly so it is unmistakable in the logs.
    if (stripeMessage.includes('No configuration provided')) {
      console.error(
        'STRIPE CUSTOMER PORTAL NOT CONFIGURED — activate it at ' +
          'https://dashboard.stripe.com/settings/billing/portal (do this in LIVE mode).'
      );
      return NextResponse.json(
        { error: 'Billing portal is not configured yet. Please contact support.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create portal session' },
      { status: 500 }
    );
  }
}
