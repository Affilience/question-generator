'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';

const TIER_DISPLAY = {
  free: { name: 'Free', color: 'text-white/60', bg: 'bg-white/10' },
  student_plus: { name: 'Student Plus', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  exam_pro: { name: 'Exam Pro', color: 'text-purple-400', bg: 'bg-purple-500/20' },
};

export function SubscriptionStatus() {
  const { tier, subscription, dailyUsage, limits, openPortal, cancelMembership, resumeMembership, loading } = useSubscription();
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState<string | null>(null);
  const [membershipBusy, setMembershipBusy] = useState(false);
  const [membershipError, setMembershipError] = useState<string | null>(null);
  const [confirmingCancel, setConfirmingCancel] = useState(false);

  const handleManage = async () => {
    setPortalLoading(true);
    setPortalError(null);
    try {
      await openPortal();
    } catch {
      setPortalError('Unable to open billing portal');
    } finally {
      setPortalLoading(false);
    }
  };

  const handleCancel = async () => {
    setMembershipBusy(true);
    setMembershipError(null);
    try {
      await cancelMembership();
      setConfirmingCancel(false);
    } catch {
      setMembershipError('Could not cancel your membership. Please try again or contact support.');
    } finally {
      setMembershipBusy(false);
    }
  };

  const handleResume = async () => {
    setMembershipBusy(true);
    setMembershipError(null);
    try {
      await resumeMembership();
    } catch {
      setMembershipError('Could not resume your membership. Please try again.');
    } finally {
      setMembershipBusy(false);
    }
  };

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
  const isStudentPlus = tier === 'student_plus';
  const isExamPro = tier === 'exam_pro';
  const canUpgrade = isFreeTier || isStudentPlus;
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

        <div className="flex items-center gap-2">
          {canUpgrade && (
            <Link
              href="/pricing"
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                isFreeTier
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              }`}
            >
              Upgrade
            </Link>
          )}
          {!isFreeTier && (
            <button
              type="button"
              onClick={handleManage}
              disabled={portalLoading}
              className="text-xs text-white/40 hover:text-white/60 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {portalLoading ? 'Loading...' : 'Manage'}
            </button>
          )}
        </div>
      </div>

      {/* Portal error message */}
      {portalError && (
        <p className="mt-2 text-xs text-red-400">{portalError}</p>
      )}

      {/* Membership cancel / resume — in-app, no Stripe portal needed */}
      {!isFreeTier && (
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          {subscription?.cancelAtPeriodEnd ? (
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-white/50">
                {daysRemaining !== null && daysRemaining >= 0
                  ? `Your membership ends in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}. You keep access until then.`
                  : 'Your membership is set to cancel at the end of the period.'}
              </p>
              <button
                type="button"
                onClick={handleResume}
                disabled={membershipBusy}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
              >
                {membershipBusy ? 'Resuming…' : 'Resume'}
              </button>
            </div>
          ) : confirmingCancel ? (
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-white/60">
                Cancel your membership? You&apos;ll keep access until{' '}
                {subscription?.currentPeriodEnd
                  ? new Date(subscription.currentPeriodEnd).toLocaleDateString()
                  : 'the end of your billing period'}
                .
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={membershipBusy}
                  className="text-xs text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
                >
                  {membershipBusy ? 'Canceling…' : 'Yes, cancel'}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingCancel(false)}
                  disabled={membershipBusy}
                  className="text-xs text-white/50 hover:text-white/70 transition-colors cursor-pointer"
                >
                  Keep
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMembershipError(null);
                setConfirmingCancel(true);
              }}
              className="text-xs text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            >
              Cancel membership
            </button>
          )}
          {membershipError && (
            <p className="mt-2 text-xs text-red-400">{membershipError}</p>
          )}
        </div>
      )}

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
            Want more questions? Upgrade to Student Plus!
          </p>
          <Link
            href="/pricing"
            className="text-xs text-blue-400 hover:text-blue-300 font-medium"
          >
            View plans →
          </Link>
        </div>
      )}

      {/* Upgrade prompt for Student Plus */}
      {isStudentPlus && (
        <div className="mt-3 pt-3 border-t border-white/[0.06]">
          <p className="text-xs text-white/60 mb-2">
            Get unlimited questions & 7 papers/week with Exam Pro
          </p>
          <Link
            href="/pricing"
            className="text-xs text-purple-400 hover:text-purple-300 font-medium"
          >
            Upgrade to Exam Pro →
          </Link>
        </div>
      )}
    </div>
  );
}
