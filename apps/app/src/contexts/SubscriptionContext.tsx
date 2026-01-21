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
  // Memoize the supabase client to ensure stable reference
  const supabase = useMemo(() => createClient(), []);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [dailyUsage, setDailyUsage] = useState<DailyUsage>({
    questionsGenerated: 0,
    papersGenerated: 0,
  });

  // Determine current tier
  const tier: SubscriptionTier = subscription?.tier || 'free';
  const limits = TIER_LIMITS[tier];

  // Fetch subscription data via server API (more reliable than client-side queries)
  const refreshSubscription = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/subscription');
      const data = await response.json();

      if (data.subscription) {
        setSubscription({
          id: data.subscription.id,
          status: data.subscription.status,
          tier: data.subscription.tier as SubscriptionTier,
          priceId: data.subscription.priceId,
          currentPeriodEnd: data.subscription.currentPeriodEnd
            ? new Date(data.subscription.currentPeriodEnd)
            : null,
          cancelAtPeriodEnd: data.subscription.cancelAtPeriodEnd || false,
          isTrialing: data.subscription.isTrialing || false,
        });
      } else {
        setSubscription(null);
      }

      setDailyUsage({
        questionsGenerated: data.dailyUsage?.questionsGenerated || 0,
        papersGenerated: data.dailyUsage?.papersGenerated || 0,
      });
    } catch (error) {
      console.error('Error refreshing subscription:', error);
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Helper to extract tier from price ID
  function getTierFromPriceId(priceId: string): SubscriptionTier {
    if (priceId.includes('student_plus')) return 'student_plus';
    if (priceId.includes('exam_pro')) return 'exam_pro';
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
