import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import * as Sentry from '@sentry/nextjs';
import { findPendingByClaimToken, planNameFromPriceKey } from '@/lib/subscription/claim';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * Read-only preview for the payer-facing approval page: which plan would be
 * linked to which account. Requires the single-use token from the email link.
 */
export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token') || '';
    const result = await findPendingByClaimToken(supabase, token);

    if (!result.valid) {
      return NextResponse.json({ valid: false, reason: result.reason });
    }

    const { pending } = result;

    let accountEmail: string | null = null;
    if (pending.claim_requested_by) {
      const { data } = await supabase.auth.admin.getUserById(pending.claim_requested_by);
      accountEmail = data?.user?.email ?? null;
    }

    if (!accountEmail) {
      // Requesting account vanished between request and approval
      return NextResponse.json({ valid: false, reason: 'invalid' });
    }

    return NextResponse.json({
      valid: true,
      planName: planNameFromPriceKey(pending.price_key),
      purchaseDate: pending.created_at,
      accountEmail,
    });
  } catch (error) {
    console.error('[Claim Info] Unexpected error:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/subscription/claim-info' },
    });
    return NextResponse.json({ valid: false, reason: 'invalid' }, { status: 500 });
  }
}
