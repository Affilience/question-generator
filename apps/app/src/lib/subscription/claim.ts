import type { SupabaseClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Map price_key (Stripe metadata) to database price_id
export const PRICE_KEY_TO_DB_ID: Record<string, string> = {
  student_plus_monthly: 'price_student_plus_monthly',
  student_plus_annual: 'price_student_plus_annual',
  exam_pro_monthly: 'price_exam_pro_monthly',
  exam_pro_annual: 'price_exam_pro_annual',
};

const PRICE_KEY_DISPLAY_NAMES: Record<string, string> = {
  student_plus_monthly: 'Student Plus (monthly)',
  student_plus_annual: 'Student Plus (annual)',
  exam_pro_monthly: 'Exam Pro (monthly)',
  exam_pro_annual: 'Exam Pro (annual)',
};

export function planNameFromPriceKey(priceKey: string | null | undefined): string {
  return (priceKey && PRICE_KEY_DISPLAY_NAMES[priceKey]) || 'your subscription';
}

export interface PendingSubscriptionRow {
  id: string;
  session_id: string;
  email: string;
  alt_email: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  price_key: string | null;
  created_at: string;
  claimed_at: string | null;
  claimed_by: string | null;
  claim_token_hash: string | null;
  claim_token_expires_at: string | null;
  claim_requested_by: string | null;
  claim_requested_at: string | null;
  metadata: Record<string, unknown> | null;
}

export type ClaimMethod = 'session_id' | 'email' | 'alt_email' | 'email_verification';

export function hashClaimToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export type TokenLookupResult =
  | { valid: true; pending: PendingSubscriptionRow }
  | { valid: false; reason: 'invalid' | 'expired' | 'already_claimed' };

/**
 * Resolves a verified-email claim token to its pending subscription row.
 * Tokens are single-use (cleared on claim) and expire after 24 hours.
 */
export async function findPendingByClaimToken(
  supabase: SupabaseClient,
  token: string
): Promise<TokenLookupResult> {
  // base64url of 32 random bytes; reject anything shaped differently before hashing
  if (!/^[A-Za-z0-9_-]{40,50}$/.test(token)) {
    return { valid: false, reason: 'invalid' };
  }

  const { data: pending, error } = await supabase
    .from('pending_subscriptions')
    .select('*')
    .eq('claim_token_hash', hashClaimToken(token))
    .maybeSingle();

  if (error) {
    console.error('[Claim] Token lookup error:', error);
    return { valid: false, reason: 'invalid' };
  }
  if (!pending) return { valid: false, reason: 'invalid' };
  if (pending.claimed_by) return { valid: false, reason: 'already_claimed' };
  if (
    !pending.claim_token_expires_at ||
    new Date(pending.claim_token_expires_at) < new Date()
  ) {
    return { valid: false, reason: 'expired' };
  }

  return { valid: true, pending: pending as PendingSubscriptionRow };
}

/**
 * Creates the user_subscriptions row for a pending purchase and marks the
 * pending row claimed. The billing period anchors to the original purchase
 * time so the entitlement matches what Stripe is actually billing.
 */
export async function claimPendingSubscription(
  supabase: SupabaseClient,
  pending: PendingSubscriptionRow,
  userId: string,
  claimMethod: ClaimMethod
): Promise<{ ok: true } | { ok: false; error: string }> {
  const priceId = pending.price_key ? PRICE_KEY_TO_DB_ID[pending.price_key] : null;
  if (!priceId) {
    console.error('[Claim] Invalid price key on pending subscription:', pending.price_key);
    return { ok: false, error: 'Invalid subscription configuration' };
  }

  const isAnnual = pending.price_key?.includes('annual');
  const periodStart = new Date(pending.created_at);
  const periodEnd = new Date(
    periodStart.getTime() + (isAnnual ? 365 : 30) * 24 * 60 * 60 * 1000
  );

  // stripe_subscription_id is the real unique constraint on user_subscriptions,
  // so a repeated claim of the same purchase updates in place instead of duplicating.
  const { error: createError } = await supabase
    .from('user_subscriptions')
    .upsert(
      {
        user_id: userId,
        stripe_customer_id: pending.stripe_customer_id,
        stripe_subscription_id: pending.stripe_subscription_id,
        status: 'active',
        price_id: priceId,
        current_period_start: periodStart.toISOString(),
        current_period_end: periodEnd.toISOString(),
        metadata: {
          checkout_session_id: pending.session_id,
          claimed_from_pending: true,
          claim_method: claimMethod,
          original_purchase_date: pending.created_at,
          ...pending.metadata,
        },
      },
      {
        onConflict: 'stripe_subscription_id',
      }
    );

  if (createError) {
    console.error('[Claim] Error creating subscription:', createError);
    return { ok: false, error: createError.message };
  }

  const { error: updateError } = await supabase
    .from('pending_subscriptions')
    .update({
      claimed_by: userId,
      claimed_at: new Date().toISOString(),
      claim_token_hash: null,
      claim_token_expires_at: null,
    })
    .eq('id', pending.id);

  if (updateError) {
    // The subscription row exists at this point; log loudly but don't block the user
    console.error('[Claim] Error marking pending subscription claimed:', updateError);
  }

  return { ok: true };
}
