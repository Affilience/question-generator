import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';
import {
  claimPendingSubscription,
  ClaimMethod,
  PendingSubscriptionRow,
} from '@/lib/subscription/claim';
import { getAuthenticatedUser } from '@/lib/api/auth';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Claims a pending subscription for a user who purchased before creating an account.
 *
 * Matching is deliberately conservative:
 * - by checkout session id (unguessable, carried through the post-payment flow), or
 * - by the account's OWN email as verified server-side — never an email supplied
 *   in the request body, so a caller can only ever match purchases made with
 *   the email of the account being claimed into.
 * Cross-email linking requires payer approval via /api/subscription/request-claim.
 */
export async function POST(request: NextRequest) {
  try {
    // Authenticate. The session-id branch matched on the checkout id alone, so
    // anyone who learned a session id could claim that purchase onto their own
    // account before the buyer signed up. The user id now comes from the
    // session and any id in the body is ignored.
    const authedUser = await getAuthenticatedUser(request);
    if (!authedUser) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const userId = authedUser.id;

    const { sessionId } = await request.json().catch(() => ({ sessionId: undefined }));

    console.log('[Claim Pending] Starting claim check:', {
      userId,
      sessionId,
      timestamp: new Date().toISOString()
    });

    // Resolve the account's real email server-side; a body email is never
    // trusted for matching.
    const { data: targetUser, error: userError } = await supabase.auth.admin.getUserById(userId);
    if (userError || !targetUser?.user) {
      console.warn('[Claim Pending] Unknown user id:', userId);
      return NextResponse.json({ error: 'Unknown user' }, { status: 400 });
    }
    const accountEmail = targetUser.user.email?.toLowerCase() ?? null;

    if (!accountEmail && !sessionId) {
      return NextResponse.json(
        { error: 'No account email or session id to match on' },
        { status: 400 }
      );
    }

    // Check if user already has an active subscription
    const { data: existingSubscription } = await supabase
      .from('user_subscriptions')
      .select('id, status, price_id')
      .eq('user_id', userId)
      .eq('status', 'active')
      .limit(1)
      .maybeSingle();

    if (existingSubscription) {
      console.log('[Claim Pending] User already has active subscription:', existingSubscription);
      return NextResponse.json({
        claimed: false,
        message: 'User already has an active subscription',
        hasActiveSubscription: true
      });
    }

    // Match by checkout session id first — it's unguessable and works no matter
    // which email the account was created with (payer email often differs from
    // the student's account email). Fall back to the verified account email,
    // then to the student-email field captured at checkout.
    let pendingSubscription: PendingSubscriptionRow | null = null;
    let claimMethod: ClaimMethod = 'email';

    if (sessionId) {
      const { data, error: sessionFetchError } = await supabase
        .from('pending_subscriptions')
        .select('*')
        .eq('session_id', sessionId)
        .is('claimed_by', null)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (sessionFetchError) {
        console.error('[Claim Pending] Session lookup error:', sessionFetchError);
        throw sessionFetchError;
      }
      if (data) {
        pendingSubscription = data;
        claimMethod = 'session_id';
      }
    }

    if (!pendingSubscription && accountEmail) {
      const { data, error: emailFetchError } = await supabase
        .from('pending_subscriptions')
        .select('*')
        .eq('email', accountEmail)
        .is('claimed_by', null)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (emailFetchError) {
        console.error('[Claim Pending] Email lookup error:', emailFetchError);
        throw emailFetchError;
      }
      pendingSubscription = data;
    }

    if (!pendingSubscription && accountEmail) {
      const { data, error: altFetchError } = await supabase
        .from('pending_subscriptions')
        .select('*')
        .eq('alt_email', accountEmail)
        .is('claimed_by', null)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (altFetchError) {
        console.error('[Claim Pending] Alt email lookup error:', altFetchError);
        throw altFetchError;
      }
      if (data) {
        pendingSubscription = data;
        claimMethod = 'alt_email';
      }
    }

    if (!pendingSubscription) {
      console.log('[Claim Pending] No pending subscription found for:', { accountEmail, sessionId });
      return NextResponse.json({
        claimed: false,
        message: 'No pending subscription found'
      });
    }

    console.log('[Claim Pending] Found pending subscription:', {
      sessionId: pendingSubscription.session_id,
      stripeCustomerId: pendingSubscription.stripe_customer_id,
      priceKey: pendingSubscription.price_key,
      claimMethod
    });

    const claim = await claimPendingSubscription(supabase, pendingSubscription, userId, claimMethod);

    if (!claim.ok) {
      return NextResponse.json(
        { error: claim.error },
        { status: 500 }
      );
    }

    console.log('[Claim Pending] Successfully claimed subscription:', {
      userId,
      subscriptionId: pendingSubscription.stripe_subscription_id,
      priceKey: pendingSubscription.price_key,
      claimMethod,
      claimedAt: new Date().toISOString()
    });

    return NextResponse.json({
      claimed: true,
      subscription: {
        tier: pendingSubscription.price_key?.split('_')[0] + '_' +
              pendingSubscription.price_key?.split('_')[1],
        stripe_customer_id: pendingSubscription.stripe_customer_id,
        stripe_subscription_id: pendingSubscription.stripe_subscription_id
      }
    });

  } catch (error) {
    console.error('[Claim Pending] Unexpected error:', error);
    Sentry.captureException(error, {
      extra: {
        route: '/api/subscription/claim-pending',
        error: error instanceof Error ? error.message : String(error)
      }
    });
    return NextResponse.json(
      {
        error: 'Failed to claim subscription',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
