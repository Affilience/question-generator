import { NextResponse } from 'next/server';
import { createClient as createServerAuthClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { reactivateSubscription } from '@/lib/stripe';

// Stripe SDK needs the Node runtime.
export const runtime = 'nodejs';

const admin = createServiceClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Undo a scheduled cancellation ("changed my mind"). Clears cancel_at_period_end
 * in Stripe and mirrors it into our DB immediately. Counterpart to
 * /api/subscription/cancel.
 */
export async function POST() {
  try {
    const authClient = await createServerAuthClient();
    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
    }

    // Find the caller's subscription that is scheduled to cancel.
    const { data: rows, error: subError } = await admin
      .from('user_subscriptions')
      .select('id, stripe_subscription_id, status, cancel_at_period_end')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
      .not('stripe_subscription_id', 'is', null)
      .order('created_at', { ascending: false });

    if (subError) {
      console.error('Reactivate: failed to load subscription for', user.id, subError);
      return NextResponse.json({ error: 'Failed to load subscription' }, { status: 500 });
    }

    const sub = rows?.[0];
    if (!sub?.stripe_subscription_id) {
      return NextResponse.json({ error: 'No subscription to resume' }, { status: 404 });
    }

    if (!sub.cancel_at_period_end) {
      // Nothing scheduled to cancel — already active.
      return NextResponse.json({ success: true, alreadyActive: true });
    }

    await reactivateSubscription(sub.stripe_subscription_id);

    const { error: updateError } = await admin
      .from('user_subscriptions')
      .update({
        cancel_at_period_end: false,
        canceled_at: null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', sub.id);

    if (updateError) {
      console.error('Reactivate: Stripe reactivated but DB update failed for', sub.id, updateError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Reactivate subscription error:', message);
    return NextResponse.json({ error: 'Failed to resume subscription' }, { status: 500 });
  }
}
