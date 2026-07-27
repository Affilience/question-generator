import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import * as Sentry from '@sentry/nextjs';
import { getAuthenticatedUser } from '@/lib/api/auth';
import { hashClaimToken, planNameFromPriceKey } from '@/lib/subscription/claim';
import { sendClaimApprovalEmail } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Never reveal whether a purchase exists for an email the caller doesn't own.
const GENERIC_RESPONSE = {
  requested: true,
  message:
    "If an unclaimed purchase exists for that email, we've sent it a confirmation link. Ask the purchaser to check their inbox (and spam folder) — the link is valid for 24 hours.",
};

/**
 * A signed-in user asks to link a purchase made with a different email
 * (e.g. a parent paid at checkout). We email the purchase address a
 * single-use approval link; the subscription only moves if its owner clicks it.
 */
export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'You must be signed in to link a purchase' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const purchaseEmail = typeof body?.purchaseEmail === 'string' ? body.purchaseEmail.trim() : '';

    if (!purchaseEmail || purchaseEmail.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(purchaseEmail)) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }
    const normalized = purchaseEmail.toLowerCase();

    // Nothing to link if this account is already subscribed
    const { data: activeSub } = await supabase
      .from('user_subscriptions')
      .select('id')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
      .gt('current_period_end', new Date().toISOString())
      .limit(1)
      .maybeSingle();

    if (activeSub) {
      return NextResponse.json({
        requested: false,
        alreadySubscribed: true,
        message: 'This account already has an active subscription.',
      });
    }

    // Rate limit: max 3 link requests per hour per account
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count: recentRequests } = await supabase
      .from('pending_subscriptions')
      .select('id', { count: 'exact', head: true })
      .eq('claim_requested_by', user.id)
      .gte('claim_requested_at', oneHourAgo);

    if ((recentRequests ?? 0) >= 3) {
      console.warn('[Request Claim] Rate limit hit:', { userId: user.id });
      return NextResponse.json(GENERIC_RESPONSE);
    }

    // Most recent unclaimed purchase for that address (checkout email first,
    // then the optional student-email checkout field)
    let { data: pending } = await supabase
      .from('pending_subscriptions')
      .select('*')
      .eq('email', normalized)
      .is('claimed_by', null)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!pending) {
      const { data: byAlt } = await supabase
        .from('pending_subscriptions')
        .select('*')
        .eq('alt_email', normalized)
        .is('claimed_by', null)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      pending = byAlt;
    }

    if (!pending) {
      console.log('[Request Claim] No unclaimed purchase for requested email');
      return NextResponse.json(GENERIC_RESPONSE);
    }

    // Debounce: if an approval email went out in the last 10 minutes, don't resend
    if (
      pending.claim_requested_at &&
      Date.now() - new Date(pending.claim_requested_at).getTime() < 10 * 60 * 1000
    ) {
      return NextResponse.json(GENERIC_RESPONSE);
    }

    const token = crypto.randomBytes(32).toString('base64url');
    const { error: updateError } = await supabase
      .from('pending_subscriptions')
      .update({
        claim_token_hash: hashClaimToken(token),
        claim_token_expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        claim_requested_by: user.id,
        claim_requested_at: new Date().toISOString(),
      })
      .eq('id', pending.id)
      .is('claimed_by', null);

    if (updateError) {
      console.error('[Request Claim] Failed to store claim token:', updateError);
      throw updateError;
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin;
    // Approval must always come from the checkout email owner, even when the
    // match was on the student-email field
    await sendClaimApprovalEmail({
      to: pending.email,
      approveUrl: `${baseUrl}/subscription/link?token=${token}`,
      planName: planNameFromPriceKey(pending.price_key),
      accountEmail: user.email || 'your account',
      purchaseDate: pending.created_at,
    });

    console.log('[Request Claim] Approval email sent:', {
      pendingId: pending.id,
      requestedBy: user.id,
    });

    return NextResponse.json(GENERIC_RESPONSE);
  } catch (error) {
    console.error('[Request Claim] Unexpected error:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/subscription/request-claim' },
    });
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
