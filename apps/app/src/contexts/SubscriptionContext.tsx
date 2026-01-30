'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
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

interface WeeklyPaperUsage {
  papersGenerated: number;
}

interface SubscriptionContextType {
  subscription: Subscription | null;
  loading: boolean;
  tier: SubscriptionTier;
  limits: typeof TIER_LIMITS[SubscriptionTier];
  dailyUsage: DailyUsage;
  weeklyPaperUsage: WeeklyPaperUsage;
  canGenerateQuestion: boolean;
  canGeneratePaper: boolean;
  canControlDifficulty: boolean;
  papersRemaining: number;
  hasFeature: (feature: keyof typeof TIER_LIMITS[SubscriptionTier]) => boolean;
  incrementQuestionUsage: () => Promise<void>;
  incrementPaperUsage: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
  openCheckout: (priceKey: string) => Promise<void>;
  openPortal: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  // Memoize the supabase client to ensure stable reference
  const supabase = useMemo(() => createClient(), []);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [dailyUsage, setDailyUsage] = useState<DailyUsage>({
    questionsGenerated: 0,
    papersGenerated: 0,
  });
  const [weeklyPaperUsage, setWeeklyPaperUsage] = useState<WeeklyPaperUsage>({
    papersGenerated: 0,
  });

  // Determine current tier
  const tier: SubscriptionTier = subscription?.tier || 'free';
  const limits = TIER_LIMITS[tier];

  // Fetch subscription and usage data directly from database (same reliable pattern as dashboard)
  const refreshSubscription = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    try {
      const today = new Date().toISOString().split('T')[0];
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      // Query subscription and usage data directly - same pattern as getUserStats
      const [subResult, usageResult, weeklyPaperResult] = await Promise.all([
        supabase
          .from('user_subscriptions')
          .select('*, subscription_prices(product_id, subscription_products(metadata))')
          .eq('user_id', user.id)
          .in('status', ['active', 'trialing'])
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle(),
        supabase
          .from('daily_usage')
          .select('questions_generated, papers_generated')
          .eq('user_id', user.id)
          .eq('date', today)
          .maybeSingle(),
        supabase
          .from('generated_papers')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .gte('created_at', oneWeekAgo.toISOString()),
      ]);

      // Handle subscription data
      const { data: subData } = subResult;
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
      setSubscription(subscription);

      // Handle usage data - direct from database like dashboard stats
      const { data: usage } = usageResult;
      setDailyUsage({
        questionsGenerated: usage?.questions_generated || 0,
        papersGenerated: usage?.papers_generated || 0,
      });

      // Handle weekly paper count
      const weeklyPaperCount = weeklyPaperResult.count || 0;
      setWeeklyPaperUsage({
        papersGenerated: weeklyPaperCount,
      });
    } catch (error) {
      console.error('Error refreshing subscription:', error);
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  // Helper to extract tier from price ID
  function getTierFromPriceId(priceId: string): SubscriptionTier {
    if (priceId.includes('student_plus')) return 'student_plus';
    if (priceId.includes('exam_pro')) return 'exam_pro';
    return 'free';
  }

  // Check if user can generate a question
  const canGenerateQuestion = limits.questionsPerDay === null ||
    dailyUsage.questionsGenerated < limits.questionsPerDay;

  // Check if user can generate a paper this week (using actual weekly count)
  const canGeneratePaper = limits.papersPerWeek !== null && limits.papersPerWeek > 0 &&
    weeklyPaperUsage.papersGenerated < limits.papersPerWeek;

  // Calculate papers remaining this week
  const papersRemaining = limits.papersPerWeek !== null && limits.papersPerWeek > 0
    ? Math.max(0, limits.papersPerWeek - weeklyPaperUsage.papersGenerated)
    : 0;

  // Check if user can control difficulty
  const canControlDifficulty = limits.difficultyControl;

  // Check if user has a specific feature
  const hasFeature = (feature: keyof typeof TIER_LIMITS[SubscriptionTier]) => {
    return !!limits[feature];
  };

  // Increment question usage - update local state immediately for better UX
  const incrementQuestionUsage = async () => {
    if (!user) return;
    
    // Update local state immediately for better UX
    setDailyUsage(prev => ({
      ...prev,
      questionsGenerated: prev.questionsGenerated + 1,
    }));
    
    try {
      // Call the API to increment usage on server
      await fetch('/api/usage/increment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId: user.id,
          type: 'question'
        }),
      });
      
      // Only refresh from server after API call completes successfully
      // This prevents overwriting our optimistic update with stale data
      refreshSubscription();
    } catch (error) {
      console.error('Failed to increment usage:', error);
      // Revert optimistic update on error
      setDailyUsage(prev => ({
        ...prev,
        questionsGenerated: Math.max(0, prev.questionsGenerated - 1),
      }));
    }
  };

  // Increment paper usage (UI only - server handles DB)
  const incrementPaperUsage = async () => {
    setDailyUsage(prev => ({
      ...prev,
      papersGenerated: prev.papersGenerated + 1,
    }));
    setWeeklyPaperUsage(prev => ({
      ...prev,
      papersGenerated: prev.papersGenerated + 1,
    }));
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
    if (!user) {
      throw new Error('Not signed in');
    }

    const response = await fetch('/api/stripe/portal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to open portal');
    }

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error('No portal URL returned');
    }
  };

  // Fetch subscription on mount and when user changes
  useEffect(() => {
    refreshSubscription();
  }, [refreshSubscription]);

  // Listen for subscription changes in real-time
  useEffect(() => {
    if (!user) return;

    let channel: ReturnType<typeof supabase.channel> | null = null;

    try {
      channel = supabase
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
    } catch (err) {
      console.error('Failed to subscribe to subscription changes:', err);
    }

    return () => {
      if (channel) {
        try {
          supabase.removeChannel(channel);
        } catch (err) {
          console.error('Error removing subscription channel:', err);
        }
      }
    };
  }, [user, supabase, refreshSubscription]);

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        loading,
        tier,
        limits,
        dailyUsage,
        weeklyPaperUsage,
        canGenerateQuestion,
        canGeneratePaper,
        canControlDifficulty,
        papersRemaining,
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
