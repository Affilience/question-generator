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
  error?: string;
}

/**
 * Check if a user can generate a question based on their subscription
 */
export async function checkQuestionGenerationAllowed(
  userId: string | null,
  clientIP: string
): Promise<UsageCheckResult> {
  const supabase = getSupabaseAdmin();

  // Get current date for usage tracking
  const today = new Date().toISOString().split('T')[0];

  if (!userId) {
    // Anonymous user - track by IP with free tier limits
    const { data: usage } = await supabase
      .from('daily_usage')
      .select('questions_generated')
      .eq('ip_address', clientIP)
      .eq('date', today)
      .is('user_id', null)
      .single();

    const questionsGenerated = usage?.questions_generated || 0;
    const limit = TIER_LIMITS.free.questionsPerDay!;

    if (questionsGenerated >= limit) {
      return {
        allowed: false,
        tier: 'free',
        remaining: 0,
        error: `Daily limit of ${limit} questions reached. Sign up for unlimited questions!`,
      };
    }

    return {
      allowed: true,
      tier: 'free',
      remaining: limit - questionsGenerated,
    };
  }

  // Authenticated user - check subscription
  const { data: subscription } = await supabase
    .from('user_subscriptions')
    .select('price_id, status, current_period_end')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  // Determine tier
  let tier: SubscriptionTier = 'free';

  if (subscription && subscription.status === 'active' || subscription?.status === 'trialing') {
    // Check if subscription is still valid
    const periodEnd = subscription.current_period_end
      ? new Date(subscription.current_period_end)
      : null;

    if (periodEnd && periodEnd > new Date()) {
      const priceId = subscription.price_id || '';
      if (priceId.includes('student_plus')) {
        tier = 'student_plus';
      } else if (priceId.includes('exam_pro')) {
        tier = 'exam_pro';
      }
    }
  }

  const limits = TIER_LIMITS[tier];

  // Unlimited for exam_pro tier
  if (limits.questionsPerDay === null) {
    return {
      allowed: true,
      tier,
      remaining: null, // null = unlimited
    };
  }

  // Check daily usage for free and student_plus tiers
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
      error: `Daily limit of ${limit} questions reached. ${upgradeMsg}`,
    };
  }

  return {
    allowed: true,
    tier,
    remaining: limit - questionsGenerated,
  };
}

/**
 * Increment question usage for a user or IP
 */
export async function incrementQuestionUsage(
  userId: string | null,
  clientIP: string
): Promise<void> {
  const supabase = getSupabaseAdmin();
  const today = new Date().toISOString().split('T')[0];

  if (!userId) {
    // Anonymous user - track by IP
    const { data: existing } = await supabase
      .from('daily_usage')
      .select('id, questions_generated')
      .eq('ip_address', clientIP)
      .eq('date', today)
      .is('user_id', null)
      .single();

    if (existing) {
      await supabase
        .from('daily_usage')
        .update({
          questions_generated: (existing.questions_generated || 0) + 1,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existing.id);
    } else {
      await supabase
        .from('daily_usage')
        .insert({
          ip_address: clientIP,
          date: today,
          questions_generated: 1,
        });
    }
    return;
  }

  // Authenticated user
  const { data: existing } = await supabase
    .from('daily_usage')
    .select('id, questions_generated')
    .eq('user_id', userId)
    .eq('date', today)
    .single();

  if (existing) {
    await supabase
      .from('daily_usage')
      .update({
        questions_generated: (existing.questions_generated || 0) + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('id', existing.id);
  } else {
    await supabase
      .from('daily_usage')
      .insert({
        user_id: userId,
        date: today,
        questions_generated: 1,
      });
  }
}

/**
 * Check if user can control difficulty (paid feature)
 */
export async function canControlDifficulty(userId: string | null): Promise<boolean> {
  if (!userId) return false;

  const supabase = getSupabaseAdmin();

  const { data: subscription } = await supabase
    .from('user_subscriptions')
    .select('price_id, status, current_period_end')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (!subscription) return false;

  // Check if subscription is still valid
  const periodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end)
    : null;

  if (!periodEnd || periodEnd <= new Date()) return false;

  // Any paid tier can control difficulty
  const priceId = subscription.price_id || '';
  return priceId.includes('student_plus') ||
         priceId.includes('exam_pro');
}

/**
 * Check if a user can generate a paper based on their subscription
 */
export async function checkPaperGenerationAllowed(
  userId: string | null
): Promise<UsageCheckResult> {
  if (!userId) {
    // Anonymous users cannot generate papers
    return {
      allowed: false,
      tier: 'free',
      remaining: 0,
      error: 'You must be signed in to generate practice papers. Sign up for free to get started!',
    };
  }

  const supabase = getSupabaseAdmin();

  // Get subscription
  const { data: subscription } = await supabase
    .from('user_subscriptions')
    .select('price_id, status, current_period_end')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  // Determine tier
  let tier: SubscriptionTier = 'free';

  if (subscription && (subscription.status === 'active' || subscription.status === 'trialing')) {
    const periodEnd = subscription.current_period_end
      ? new Date(subscription.current_period_end)
      : null;

    if (periodEnd && periodEnd > new Date()) {
      const priceId = subscription.price_id || '';
      if (priceId.includes('student_plus')) {
        tier = 'student_plus';
      } else if (priceId.includes('exam_pro')) {
        tier = 'exam_pro';
      }
    }
  }

  const limits = TIER_LIMITS[tier];

  // Free users cannot generate papers
  if (limits.papersPerWeek === 0) {
    return {
      allowed: false,
      tier,
      remaining: 0,
      error: 'Practice paper generation requires a paid plan. Upgrade to Student Plus for 3 papers/week!',
    };
  }

  // Check weekly usage (3 for student_plus, 7 for exam_pro)
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
      error: `Weekly limit of ${weeklyLimit} papers reached.${upgradeMsg} You can generate more next week.`,
    };
  }

  return {
    allowed: true,
    tier,
    remaining: weeklyLimit - papersGenerated,
  };
}

/**
 * Get user's current tier
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
