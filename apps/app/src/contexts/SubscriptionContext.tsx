'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { createClient } from '@/lib/supabase/client';
import { SubscriptionTier, TIER_LIMITS } from '@/lib/subscription-types';

interface Subscription {
  id: string;
  status: string;
  tier: SubscriptionTier;
  priceId: string | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  isTrialing: boolean;
}

interface DailyUsage {
  questionsGenerated: number;
  papersGenerated: number;
}

interface SubscriptionContextType {
  subscription: Subscription | null;
  loading: boolean;
  tier: SubscriptionTier;
  limits: typeof TIER_LIMITS[SubscriptionTier];
  dailyUsage: DailyUsage;
  canGenerateQuestion: boolean;
  canGeneratePaper: boolean;
  canControlDifficulty: boolean;
  hasFeature: (feature: keyof typeof TIER_LIMITS[SubscriptionTier]) => boolean;
  incrementQuestionUsage: () => Promise<void>;
  incrementPaperUsage: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
  openCheckout: (priceKey: string) => Promise<void>;
  openPortal: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user, session } = useAuth();
  const supabase = createClient();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [dailyUsage, setDailyUsage] = useState<DailyUsage>({
    questionsGenerated: 0,
    papersGenerated: 0,
  });

  // Determine current tier
  const tier: SubscriptionTier = subscription?.tier || 'free';
  const limits = TIER_LIMITS[tier];

  // Fetch subscription data
  const refreshSubscription = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    try {
      // Fetch active subscription
      const { data: subData, error: subError } = await supabase
        .from('user_subscriptions')
        .select('*, subscription_prices(product_id, subscription_products(metadata))')
        .eq('user_id', user.id)
        .in('status', ['active', 'trialing'])
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (subError && subError.code !== 'PGRST116') {
        console.error('Error fetching subscription:', subError);
      }

      if (subData) {
        // Extract tier from product metadata or price ID
        const productMetadata = subData.subscription_prices?.subscription_products?.metadata;
        const tierFromMetadata = productMetadata?.tier as SubscriptionTier;
        const tierFromPriceId = getTierFromPriceId(subData.price_id || '');

        setSubscription({
          id: subData.id,
          status: subData.status,
          tier: tierFromMetadata || tierFromPriceId || 'free',
          priceId: subData.price_id,
          currentPeriodEnd: subData.current_period_end
            ? new Date(subData.current_period_end)
            : null,
          cancelAtPeriodEnd: subData.cancel_at_period_end || false,
          isTrialing: subData.status === 'trialing',
        });
      } else {
        setSubscription(null);
      }

      // Fetch daily usage
      const today = new Date().toISOString().split('T')[0];
      const { data: usageData } = await supabase
        .from('daily_usage')
        .select('questions_generated, papers_generated')
        .eq('user_id', user.id)
        .eq('date', today)
        .single();

      if (usageData) {
        setDailyUsage({
          questionsGenerated: usageData.questions_generated || 0,
          papersGenerated: usageData.papers_generated || 0,
        });
      } else {
        setDailyUsage({ questionsGenerated: 0, papersGenerated: 0 });
      }
    } catch (error) {
      console.error('Error refreshing subscription:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Helper to extract tier from price ID
  function getTierFromPriceId(priceId: string): SubscriptionTier {
    if (priceId.includes('student_plus')) return 'student_plus';
    if (priceId.includes('exam_pro')) return 'exam_pro';
    if (priceId.includes('exam_season')) return 'exam_season';
    return 'free';
  }

  // Check if user can generate a question
  const canGenerateQuestion = limits.questionsPerDay === null ||
    dailyUsage.questionsGenerated < limits.questionsPerDay;

  // Check if user can generate a paper this week
  const canGeneratePaper = limits.papersPerWeek === null ||
    dailyUsage.papersGenerated < (limits.papersPerWeek / 7); // Rough daily estimate

  // Check if user can control difficulty
  const canControlDifficulty = limits.difficultyControl;

  // Check if user has a specific feature
  const hasFeature = (feature: keyof typeof TIER_LIMITS[SubscriptionTier]) => {
    return !!limits[feature];
  };

  // Increment question usage
  const incrementQuestionUsage = async () => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];

    const { error } = await supabase
      .from('daily_usage')
      .upsert({
        user_id: user.id,
        date: today,
        questions_generated: dailyUsage.questionsGenerated + 1,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,date',
      });

    if (!error) {
      setDailyUsage(prev => ({
        ...prev,
        questionsGenerated: prev.questionsGenerated + 1,
      }));
    }
  };

  // Increment paper usage
  const incrementPaperUsage = async () => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];

    const { error } = await supabase
      .from('daily_usage')
      .upsert({
        user_id: user.id,
        date: today,
        papers_generated: dailyUsage.papersGenerated + 1,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id,date',
      });

    if (!error) {
      setDailyUsage(prev => ({
        ...prev,
        papersGenerated: prev.papersGenerated + 1,
      }));
    }
  };

  // Open Stripe checkout
  const openCheckout = async (priceKey: string) => {
    if (!user) {
      // Redirect to login with return URL
      window.location.href = `/login?redirect=/pricing`;
      return;
    }

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceKey,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error opening checkout:', error);
    }
  };

  // Open Stripe customer portal
  const openPortal = async () => {
    if (!user) return;

    try {
      const response = await fetch('/api/stripe/portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No portal URL returned');
      }
    } catch (error) {
      console.error('Error opening portal:', error);
    }
  };

  // Fetch subscription on mount and when user changes
  useEffect(() => {
    refreshSubscription();
  }, [refreshSubscription]);

  // Listen for subscription changes in real-time
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel('subscription_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_subscriptions',
          filter: `user_id=eq.${user.id}`,
        },
        () => {
          refreshSubscription();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, refreshSubscription]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        loading,
        tier,
        limits,
        dailyUsage,
        canGenerateQuestion,
        canGeneratePaper,
        canControlDifficulty,
        hasFeature,
        incrementQuestionUsage,
        incrementPaperUsage,
        refreshSubscription,
        openCheckout,
        openPortal,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}
