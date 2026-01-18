'use client';

import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';

const TIER_DISPLAY = {
  free: { name: 'Free', color: 'text-white/60', bg: 'bg-white/10' },
  student_plus: { name: 'Student Plus', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  exam_pro: { name: 'Exam Pro', color: 'text-purple-400', bg: 'bg-purple-500/20' },
  exam_season: { name: 'Exam Season', color: 'text-orange-400', bg: 'bg-orange-500/20' },
};

export function SubscriptionStatus() {
  const { tier, subscription, dailyUsage, limits, openPortal, loading } = useSubscription();

  if (loading) {
    return (
      <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4 animate-pulse">
        <div className="h-5 w-24 bg-white/10 rounded mb-2" />
        <div className="h-4 w-32 bg-white/10 rounded" />
      </div>
    );
  }

  const display = TIER_DISPLAY[tier];
  const isFreeTier = tier === 'free';
  const questionsUsed = dailyUsage.questionsGenerated;
  const questionsLimit = limits.questionsPerDay;
  const isUnlimited = questionsLimit === null;

  // Calculate days remaining for subscription
  let daysRemaining: number | null = null;
  if (subscription?.currentPeriodEnd) {
    const endDate = new Date(subscription.currentPeriodEnd);
    const now = new Date();
    daysRemaining = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="bg-[#111] border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${display.bg} ${display.color}`}>
              {display.name}
            </span>
            {subscription?.cancelAtPeriodEnd && (
              <span className="text-xs text-yellow-400">Canceling</span>
            )}
          </div>

          {isFreeTier ? (
            <p className="text-white/40 text-sm">
              {questionsUsed}/{questionsLimit} questions today
            </p>
          ) : isUnlimited ? (
            <p className="text-white/60 text-sm">
              Unlimited questions
              {daysRemaining !== null && daysRemaining <= 7 && (
                <span className="text-yellow-400 ml-2">
                  {daysRemaining} days left
                </span>
              )}
            </p>
          ) : (
            <p className="text-white/60 text-sm">
              {questionsUsed} questions generated today
            </p>
          )}
        </div>

        {isFreeTier ? (
          <Link
            href="/pricing"
            className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors"
          >
            Upgrade
          </Link>
        ) : (
          <button
            onClick={() => openPortal()}
            className="text-xs text-white/40 hover:text-white/60 transition-colors"
          >
            Manage
          </button>
        )}
      </div>

      {/* Usage bar for free tier */}
      {!isUnlimited && questionsLimit && (
        <div className="mt-3">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                questionsUsed >= questionsLimit
                  ? 'bg-red-500'
                  : questionsUsed >= questionsLimit * 0.8
                  ? 'bg-yellow-500'
                  : 'bg-blue-500'
              }`}
              style={{ width: `${Math.min(100, (questionsUsed / questionsLimit) * 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Upgrade prompt for free tier */}
      {isFreeTier && questionsUsed >= (questionsLimit || 5) && (
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/60 mb-2">
            Want unlimited questions? Upgrade to Student Plus!
          </p>
          <Link
            href="/pricing"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium"
          >
            View plans →
          </Link>
        </div>
      )}
    </div>
  );
}
