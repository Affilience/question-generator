import { createClient } from '@supabase/supabase-js';
import { TIER_LIMITS, SubscriptionTier } from '@/lib/subscription-types';

// Create Supabase admin client for server-side operations
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

interface UsageCheckResult {
  allowed: boolean;
  tier: SubscriptionTier;
  remaining: number | null;
  canControlDifficulty: boolean;
  error?: string;
}

/**
 * Owner accounts get unlimited access. Configured via the OWNER_EMAILS env
 * var (comma-separated, case-insensitive); the email comes from the caller's
 * verified auth session, so this costs no extra lookup.
 */
function isOwnerEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const owners = (process.env.OWNER_EMAILS || '')
    .split(',')
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);
  return owners.includes(email.toLowerCase());
}

/**
 * Resolve a user's subscription tier (single source of truth).
 */
export async function getUserTier(userId: string | null): Promise<SubscriptionTier> {
  if (!userId) return 'free';

  const supabase = getSupabaseAdmin();

  const { data: subscription } = await supabase
    .from('user_subscriptions')
    .select('price_id, status, current_period_end')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (!subscription) return 'free';

  const periodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end)
    : null;

  if (!periodEnd || periodEnd <= new Date()) return 'free';

  const priceId = subscription.price_id || '';
  if (priceId.includes('student_plus')) return 'student_plus';
  if (priceId.includes('exam_pro')) return 'exam_pro';

  return 'free';
}

/**
 * Check if a user can generate a question based on their subscription.
 * Pass the session user's email so owner accounts are recognised without an
 * extra admin API round trip.
 */
export async function checkQuestionGenerationAllowed(
  userId: string | null,
  clientIP: string,
  isAdmin: boolean = false,
  userEmail?: string | null
): Promise<UsageCheckResult> {
  // Admin/owner bypass - always allow with unlimited tier
  if (isAdmin || isOwnerEmail(userEmail)) {
    return {
      allowed: true,
      tier: 'exam_pro',
      remaining: null,
      canControlDifficulty: true,
    };
  }

  if (!userId) {
    // Anonymous users must sign up to generate questions
    return {
      allowed: false,
      tier: 'free',
      remaining: 0,
      canControlDifficulty: false,
      error: 'Please sign up to generate questions. Free accounts get 15 questions per day!',
    };
  }

  const tier = await getUserTier(userId);
  const limits = TIER_LIMITS[tier];
  const canControlDifficulty = limits.difficultyControl;

  // Unlimited for exam_pro tier
  if (limits.questionsPerDay === null) {
    return {
      allowed: true,
      tier,
      remaining: null, // null = unlimited
      canControlDifficulty,
    };
  }

  // Check daily usage for free and student_plus tiers
  const supabase = getSupabaseAdmin();
  const today = new Date().toISOString().split('T')[0];
  const { data: usage } = await supabase
    .from('daily_usage')
    .select('questions_generated')
    .eq('user_id', userId)
    .eq('date', today)
    .maybeSingle();

  const questionsGenerated = usage?.questions_generated || 0;
  const limit = limits.questionsPerDay;

  if (questionsGenerated >= limit) {
    const upgradeMsg = tier === 'free'
      ? 'Upgrade to Student Plus for 50 questions/day or Exam Pro for unlimited!'
      : 'Upgrade to Exam Pro for unlimited questions!';
    return {
      allowed: false,
      tier,
      remaining: 0,
      canControlDifficulty,
      error: `Daily limit of ${limit} questions reached. ${upgradeMsg}`,
    };
  }

  return {
    allowed: true,
    tier,
    remaining: limit - questionsGenerated,
    canControlDifficulty,
  };
}

/**
 * Increment question usage for a user. Atomic upsert via RPC, so concurrent
 * requests can't lose counts. This is the ONLY place usage is incremented —
 * clients must never call an increment endpoint themselves.
 */
export async function incrementQuestionUsage(
  userId: string | null,
  clientIP: string,
  isAdmin: boolean = false
): Promise<void> {
  // Skip usage tracking for admin operations and anonymous users (anonymous
  // requests are already blocked at the check stage)
  if (isAdmin || !userId) {
    return;
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.rpc('increment_daily_usage', { p_user_id: userId });
  if (error) {
    console.error('increment_daily_usage failed:', error.message);
  }
}

/**
 * Check if a user can generate a paper based on their subscription
 */
export async function checkPaperGenerationAllowed(
  userId: string | null,
  userEmail?: string | null
): Promise<UsageCheckResult> {
  if (!userId) {
    // Anonymous users cannot generate papers
    return {
      allowed: false,
      tier: 'free',
      remaining: 0,
      canControlDifficulty: false,
      error: 'You must be signed in to generate practice papers. Sign up for free to get started!',
    };
  }

  if (isOwnerEmail(userEmail)) {
    return {
      allowed: true,
      tier: 'exam_pro',
      remaining: null,
      canControlDifficulty: true,
    };
  }

  const tier = await getUserTier(userId);
  const limits = TIER_LIMITS[tier];

  // Free users cannot generate papers
  if (limits.papersPerWeek === 0) {
    return {
      allowed: false,
      tier,
      remaining: 0,
      canControlDifficulty: limits.difficultyControl,
      error: 'Practice paper generation requires a paid plan. Upgrade to Student Plus for 3 papers/week!',
    };
  }

  // Check weekly usage (3 for student_plus, 7 for exam_pro)
  const supabase = getSupabaseAdmin();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const { count } = await supabase
    .from('generated_papers')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', userId)
    .gte('created_at', oneWeekAgo.toISOString());

  const papersGenerated = count || 0;
  const weeklyLimit = limits.papersPerWeek!; // Non-null since we checked for 0 above

  if (papersGenerated >= weeklyLimit) {
    const upgradeMsg = tier === 'student_plus'
      ? ' Upgrade to Exam Pro for 7 papers/week!'
      : '';
    return {
      allowed: false,
      tier,
      remaining: 0,
      canControlDifficulty: limits.difficultyControl,
      error: `Weekly limit of ${weeklyLimit} papers reached.${upgradeMsg} You can generate more next week.`,
    };
  }

  return {
    allowed: true,
    tier,
    remaining: weeklyLimit - papersGenerated,
    canControlDifficulty: limits.difficultyControl,
  };
}
