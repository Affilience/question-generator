/**
 * Re-sync user_subscriptions from Stripe.
 *
 * The webhook that handles customer.subscription.created/updated read
 * current_period_end off the Subscription object, but the pinned API version
 * carries it on subscription ITEMS. The value was undefined, the date
 * conversion threw, and Stripe eventually stopped retrying — so no monthly
 * subscription has ever been extended. Every monthly row in production ends
 * 30-31 days after it was created, and getUserTier requires an unexpired
 * period, so those customers were silently dropped to free-tier limits while
 * Stripe kept billing them.
 *
 * The code fix stops it recurring. This repairs the rows that are already
 * wrong, by asking Stripe for the truth.
 *
 *   npx tsx scripts/reconcile-subscriptions.ts            # dry run
 *   npx tsx scripts/reconcile-subscriptions.ts --apply    # write
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

config({ path: '.env.local' });

const APPLY = process.argv.includes('--apply');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

interface Row {
  id: string;
  user_id: string;
  status: string;
  price_id: string | null;
  stripe_subscription_id: string | null;
  current_period_end: string | null;
}

/** Same extraction the webhook now uses. */
function getPeriod(subscription: Stripe.Subscription): { start: string | null; end: string | null } {
  const item = subscription.items?.data?.[0] as
    | (Stripe.SubscriptionItem & { current_period_start?: number; current_period_end?: number })
    | undefined;
  const legacy = subscription as Stripe.Subscription & {
    current_period_start?: number;
    current_period_end?: number;
  };

  const toIso = (seconds: unknown): string | null => {
    if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds <= 0) return null;
    const date = new Date(seconds * 1000);
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  };

  return {
    start: toIso(item?.current_period_start ?? legacy.current_period_start),
    end: toIso(item?.current_period_end ?? legacy.current_period_end),
  };
}

const STRIPE_PRICES: Record<string, string | undefined> = {
  student_plus_monthly: process.env.STRIPE_PRICE_STUDENT_PLUS_MONTHLY,
  student_plus_annual: process.env.STRIPE_PRICE_STUDENT_PLUS_ANNUAL,
  exam_pro_monthly: process.env.STRIPE_PRICE_EXAM_PRO_MONTHLY,
  exam_pro_annual: process.env.STRIPE_PRICE_EXAM_PRO_ANNUAL,
};

function mapPriceId(stripePriceId: string | undefined): string | null {
  if (!stripePriceId) return null;
  for (const [key, configured] of Object.entries(STRIPE_PRICES)) {
    if (configured && configured === stripePriceId) return `price_${key}`;
  }
  return null;
}

async function main() {
  console.log(APPLY ? 'APPLYING changes\n' : 'DRY RUN - no writes\n');

  const { data, error } = await supabase
    .from('user_subscriptions')
    .select('id, user_id, status, price_id, stripe_subscription_id, current_period_end')
    .in('status', ['active', 'trialing', 'past_due']);

  if (error) throw error;
  const rows = (data ?? []) as Row[];

  console.log(`Rows to check: ${rows.length}\n`);

  const changes: string[] = [];
  let unchanged = 0;
  let unfetchable = 0;

  for (const row of rows) {
    if (!row.stripe_subscription_id || row.stripe_subscription_id.startsWith('fallback_') ||
        row.stripe_subscription_id.startsWith('checkout_') || row.stripe_subscription_id.startsWith('test_')) {
      console.log(`SKIP  ${row.id} - no real Stripe subscription id (${row.stripe_subscription_id ?? 'null'})`);
      unfetchable++;
      continue;
    }

    let subscription: Stripe.Subscription;
    try {
      subscription = await stripe.subscriptions.retrieve(row.stripe_subscription_id);
    } catch (err) {
      console.log(`MISS  ${row.stripe_subscription_id} - not found in Stripe (${(err as Error).message})`);
      unfetchable++;
      continue;
    }

    const { start, end } = getPeriod(subscription);
    const mappedPrice = mapPriceId(subscription.items.data[0]?.price.id) ?? row.price_id;

    const needsUpdate =
      end !== row.current_period_end ||
      subscription.status !== row.status ||
      mappedPrice !== row.price_id;

    if (!needsUpdate) {
      unchanged++;
      continue;
    }

    const before = `${row.status}/${row.current_period_end ?? 'null'}/${row.price_id ?? 'null'}`;
    const after = `${subscription.status}/${end ?? 'null'}/${mappedPrice ?? 'null'}`;
    changes.push(`  ${row.stripe_subscription_id}  ${before}  ->  ${after}`);

    if (APPLY) {
      const { error: updateError } = await supabase
        .from('user_subscriptions')
        .update({
          status: subscription.status,
          price_id: mappedPrice,
          current_period_start: start,
          current_period_end: end,
          cancel_at_period_end: subscription.cancel_at_period_end,
          canceled_at: subscription.canceled_at
            ? new Date(subscription.canceled_at * 1000).toISOString()
            : null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', row.id);

      if (updateError) console.error(`  failed: ${updateError.message}`);
    }
  }

  console.log(`\nUnchanged:   ${unchanged}`);
  console.log(`Unfetchable: ${unfetchable}`);
  console.log(`Changed:     ${changes.length}`);
  if (changes.length > 0) {
    console.log('\nstatus / period_end / price_id:');
    console.log(changes.join('\n'));
  }

  if (!APPLY) console.log('\nRe-run with --apply to write these changes.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
