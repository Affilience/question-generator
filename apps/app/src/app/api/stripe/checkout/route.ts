import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createCheckoutSession, STRIPE_PRICES } from '@/lib/stripe';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceKey, userId } = body as {
      priceKey: keyof typeof STRIPE_PRICES;
      userId: string;
    };

    if (!priceKey || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: priceKey and userId' },
        { status: 400 }
      );
    }

    // Verify the price key is valid
    const priceId = STRIPE_PRICES[priceKey];
    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid price key' },
        { status: 400 }
      );
    }

    // Get user email from Supabase
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('email, name')
      .eq('id', userId)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Build success and cancel URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const successUrl = `${origin}/subscription/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/pricing?canceled=true`;

    // Create checkout session
    const session = await createCheckoutSession({
      userId,
      email: user.email,
      priceId,
      successUrl,
      cancelUrl,
      trialDays: priceKey.includes('monthly') ? 7 : undefined, // 7-day trial for monthly plans
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
