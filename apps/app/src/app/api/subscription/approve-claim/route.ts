import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';
import {
  claimPendingSubscription,
  findPendingByClaimToken,
  planNameFromPriceKey,
} from '@/lib/subscription/claim';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * The purchaser clicked the approval link we emailed to the checkout address.
 * Possession of the single-use token IS the authorization — the payer may not
 * have an account of their own, so no session is required.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = typeof body?.token === 'string' ? body.token : '';

    const result = await findPendingByClaimToken(supabase, token);
    if (!result.valid) {
      return NextResponse.json({ linked: false, reason: result.reason }, { status: 400 });
    }

    const { pending } = result;
    const requesterId = pending.claim_requested_by;
    if (!requesterId) {
      return NextResponse.json({ linked: false, reason: 'invalid' }, { status: 400 });
    }

    const { data: requester } = await supabase.auth.admin.getUserById(requesterId);
    if (!requester?.user) {
      return NextResponse.json({ linked: false, reason: 'invalid' }, { status: 400 });
    }

    const claim = await claimPendingSubscription(
      supabase,
      pending,
      requesterId,
      'email_verification'
    );

    if (!claim.ok) {
      console.error('[Approve Claim] Claim failed:', claim.error);
      return NextResponse.json(
        { linked: false, reason: 'error' },
        { status: 500 }
      );
    }

    console.log('[Approve Claim] Purchase linked:', {
      pendingId: pending.id,
      userId: requesterId,
    });

    return NextResponse.json({
      linked: true,
      planName: planNameFromPriceKey(pending.price_key),
      accountEmail: requester.user.email,
    });
  } catch (error) {
    console.error('[Approve Claim] Unexpected error:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/subscription/approve-claim' },
    });
    return NextResponse.json({ linked: false, reason: 'error' }, { status: 500 });
  }
}
