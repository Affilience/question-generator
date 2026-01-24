import { createClient } from '@/lib/supabase/server';
import { getDailyUsage } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({
        subscription: null,
        dailyUsage: { questionsGenerated: 0, papersGenerated: 0 },
        weeklyPaperUsage: { papersGenerated: 0 },
      });
    }

    const today = new Date().toISOString().split('T')[0];

    // Calculate one week ago for paper usage
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    // Run all queries in parallel
    const [subResult, usageResult, weeklyPaperResult] = await Promise.all([
      supabase
        .from('user_subscriptions')
        .select('*, subscription_prices(product_id, subscription_products(metadata))')
        .eq('user_id', user.id)
        .in('status', ['active', 'trialing'])
        .order('created_at', { ascending: false })
        .limit(1)
        .single(),
      // Use the same reliable pattern as Questions Practiced
      getDailyUsage(user.id),
      // Count papers generated in the last 7 days (rolling window)
      supabase
        .from('generated_papers')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .gte('created_at', oneWeekAgo.toISOString()),
    ]);

    const { data: subData } = subResult;
    const usageData = usageResult; // getDailyUsage returns data directly
    const weeklyPaperCount = weeklyPaperResult.count || 0;

    let subscription = null;
    if (subData) {
      const productMetadata = subData.subscription_prices?.subscription_products?.metadata;
      const tierFromMetadata = productMetadata?.tier;
      const tierFromPriceId = subData.price_id?.includes('student_plus') ? 'student_plus'
        : subData.price_id?.includes('exam_pro') ? 'exam_pro'
        : 'free';

      subscription = {
        id: subData.id,
        status: subData.status,
        tier: tierFromMetadata || tierFromPriceId || 'free',
        priceId: subData.price_id,
        currentPeriodEnd: subData.current_period_end,
        cancelAtPeriodEnd: subData.cancel_at_period_end || false,
        isTrialing: subData.status === 'trialing',
      };
    }

    return NextResponse.json({
      subscription,
      dailyUsage: {
        questionsGenerated: usageData.questionsGenerated,
        papersGenerated: usageData.papersGenerated,
      },
      weeklyPaperUsage: {
        papersGenerated: weeklyPaperCount,
      },
    });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json({
      subscription: null,
      dailyUsage: { questionsGenerated: 0, papersGenerated: 0 },
      weeklyPaperUsage: { papersGenerated: 0 },
    }, { status: 500 });
  }
}
