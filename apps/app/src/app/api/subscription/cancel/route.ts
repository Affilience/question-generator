import { NextResponse } from 'next/server';
import { createClient as createServerAuthClient } from '@/lib/supabase/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { cancelSubscription } from '@/lib/stripe';

// Stripe SDK needs the Node runtime.
export const runtime = 'nodejs';

// Service-role client for privileged reads/writes AFTER we have authenticated
// the caller from their session cookie.
const admin = createServiceClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * In-app subscription cancellation — an alternative to the Stripe hosted
 * Customer Portal. It cancels directly via the Stripe API and mirrors the
 * result into our database immediately, so it works even if the portal is not
 * configured and even if the `customer.subscription.updated` webhook is not
 * wired up.
 *
 * We cancel at period end (not immediately): the customer keeps the access they
 * already paid for until the current period ends, then it does not renew. This
 * matches the no-refund policy.
 */
export async function POST() {
  try {
    // 1. Authenticate from the session cookie. We deliberately do NOT accept a
    //    userId from the request body — that would let anyone cancel anyone's
    //    subscription.
    const authClient = await createServerAuthClient();
    const {
      data: { user },
      error: authError,
    } = await authClient.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
    }

    // 2. Find the caller's own active Stripe subscription.
    const { data: rows, error: subError } = await admin
      .from('user_subscriptions')
      .select('id, stripe_subscription_id, status, cancel_at_period_end, current_period_end')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
      .not('stripe_subscription_id', 'is', null)
      .order('created_at', { ascending: false });

    if (subError) {
      console.error('Cancel: failed to load subscription for', user.id, subError);
      return NextResponse.json({ error: 'Failed to load subscription' }, { status: 500 });
    }

    const sub = rows?.[0];
    if (!sub?.stripe_subscription_id) {
      return NextResponse.json({ error: 'No active subscription to cancel' }, { status: 404 });
    }

    // Already scheduled to cancel — treat as success so the UI is consistent.
    if (sub.cancel_at_period_end) {
      return NextResponse.json({
        success: true,
        alreadyCanceling: true,
        currentPeriodEnd: sub.current_period_end,
      });
    }

    // 3. Cancel in Stripe at period end.
    const stripeSub = await cancelSubscription(sub.stripe_subscription_id, true);

    // 4. Reflect it in our DB right away (don't wait on the webhook).
    const { error: updateError } = await admin
      .from('user_subscriptions')
      .update({
        cancel_at_period_end: true,
        canceled_at: stripeSub.canceled_at
          ? new Date(stripeSub.canceled_at * 1000).toISOString()
          : null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', sub.id);

    if (updateError) {
      // Stripe has already accepted the cancellation; the webhook will reconcile
      // our DB. Log, but don't fail the user's action.
      console.error('Cancel: Stripe cancelled but DB update failed for', sub.id, updateError);
    }

    return NextResponse.json({ success: true, currentPeriodEnd: sub.current_period_end });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Cancel subscription error:', message);
    return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 500 });
  }
}
