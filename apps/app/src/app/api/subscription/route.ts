import { createClient } from '@/lib/supabase/server';
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
      });
    }

    const today = new Date().toISOString().split('T')[0];

    // Run both queries in parallel
    const [subResult, usageResult] = await Promise.all([
      supabase
        .from('user_subscriptions')
        .select('*, subscription_prices(product_id, subscription_products(metadata))')
        .eq('user_id', user.id)
        .in('status', ['active', 'trialing'])
        .order('created_at', { ascending: false })
        .limit(1)
        .single(),
      supabase
        .from('daily_usage')
        .select('questions_generated, papers_generated')
        .eq('user_id', user.id)
        .eq('date', today)
        .single(),
    ]);

    const { data: subData } = subResult;
    const { data: usageData } = usageResult;

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
        questionsGenerated: usageData?.questions_generated || 0,
        papersGenerated: usageData?.papers_generated || 0,
      },
    });
  } catch (error) {
    console.error('Error fetching subscription:', error);
    return NextResponse.json({
      subscription: null,
      dailyUsage: { questionsGenerated: 0, papersGenerated: 0 },
    }, { status: 500 });
  }
}
