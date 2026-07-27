import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import * as Sentry from '@sentry/nextjs';
import { planNameFromPriceKey } from '@/lib/subscription/claim';
import { sendUnclaimedPurchasesAlert, UnclaimedPurchaseSummary } from '@/lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error('[Unclaimed Cron] CRON_SECRET is not configured');
    return false;
  }
  const header = request.headers.get('authorization') || '';
  const provided = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : '';
  if (!provided) return false;
  const a = crypto.createHash('sha256').update(provided).digest();
  const b = crypto.createHash('sha256').update(secret).digest();
  return crypto.timingSafeEqual(a, b);
}

/**
 * Daily support alert: paid purchases sitting unclaimed for over an hour,
 * usually a checkout/account email mismatch. Emails a digest once per new
 * purchase (re-listing older stragglers for context), so a quiet day sends
 * nothing. Triggered by pg_cron via pg_net.
 */
async function handle(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { data: unclaimed, error } = await supabase
      .from('pending_subscriptions')
      .select('id, email, price_key, created_at, admin_notified_at, metadata')
      .is('claimed_by', null)
      .lt('created_at', oneHourAgo)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Filter unpaid in JS: a SQL neq on the JSON field would also drop rows
    // where payment_status is missing entirely, and those deserve attention
    const rows = (unclaimed ?? []).filter((r) => {
      const status =
        typeof r.metadata === 'object' && r.metadata !== null
          ? (r.metadata as Record<string, unknown>).payment_status
          : null;
      return status !== 'unpaid';
    });
    const newRows = rows.filter((r) => !r.admin_notified_at);

    if (rows.length === 0 || newRows.length === 0) {
      return NextResponse.json({
        unclaimed: rows.length,
        new: 0,
        emailed: false,
      });
    }

    const purchases: UnclaimedPurchaseSummary[] = rows.map((r) => ({
      email: r.email,
      customerName:
        typeof r.metadata === 'object' && r.metadata !== null
          ? ((r.metadata as Record<string, unknown>).customer_name as string | null) ?? null
          : null,
      planName: planNameFromPriceKey(r.price_key),
      createdAt: r.created_at,
      isNew: !r.admin_notified_at,
    }));

    const alertTo = process.env.ADMIN_ALERT_EMAIL || 'support@past-papers.co.uk';
    await sendUnclaimedPurchasesAlert(alertTo, purchases);

    const { error: markError } = await supabase
      .from('pending_subscriptions')
      .update({ admin_notified_at: new Date().toISOString() })
      .in('id', newRows.map((r) => r.id));

    if (markError) {
      // Alert went out; worst case tomorrow's digest re-flags the same rows as new
      console.error('[Unclaimed Cron] Failed to mark rows notified:', markError);
    }

    console.log('[Unclaimed Cron] Digest sent:', {
      to: alertTo,
      unclaimed: rows.length,
      new: newRows.length,
    });

    return NextResponse.json({
      unclaimed: rows.length,
      new: newRows.length,
      emailed: true,
    });
  } catch (error) {
    console.error('[Unclaimed Cron] Unexpected error:', error);
    Sentry.captureException(error, {
      extra: { route: '/api/cron/unclaimed-subscriptions' },
    });
    return NextResponse.json({ error: 'Cron run failed' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  return handle(request);
}

// GET supported so the run can be triggered manually in a browser/curl for testing
export async function GET(request: NextRequest) {
  return handle(request);
}
