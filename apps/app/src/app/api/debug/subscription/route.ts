import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();

    // Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({
        authenticated: false,
        error: userError?.message || 'No user found',
      });
    }

    // Fetch subscription
    const { data: subscription, error: subError } = await supabase
      .from('user_subscriptions')
      .select('*, subscription_prices(product_id, subscription_products(metadata))')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (subError && subError.code !== 'PGRST116') {
      return NextResponse.json({
        authenticated: true,
        userId: user.id,
        email: user.email,
        subscriptionError: subError.message,
        errorCode: subError.code,
      });
    }

    const tier = subscription?.subscription_prices?.subscription_products?.metadata?.tier
      || (subscription?.price_id?.includes('student_plus') ? 'student_plus' : 'free');

    return NextResponse.json({
      authenticated: true,
      userId: user.id,
      email: user.email,
      hasSubscription: !!subscription,
      tier,
      subscriptionStatus: subscription?.status,
      priceId: subscription?.price_id,
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
