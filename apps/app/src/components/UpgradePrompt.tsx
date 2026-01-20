'use client';

import Link from 'next/link';
import { useSubscription } from '@/contexts/SubscriptionContext';

interface UpgradePromptProps {
  /** The reason for showing the prompt */
  reason: 'daily_limit' | 'difficulty_control' | 'papers' | 'bookmarks' | 'history';
  /** Custom message to show */
  message?: string;
  /** Whether to show as a modal overlay */
  modal?: boolean;
  /** Callback when dismissed (for modal) */
  onDismiss?: () => void;
}

const PROMPT_CONFIG = {
  daily_limit: {
    title: "You've reached your daily limit",
    description: "Free accounts can generate 15 questions per day. Upgrade to Student Plus for unlimited questions!",
    highlight: 'Unlimited questions',
    icon: '⚡',
  },
  difficulty_control: {
    title: 'Unlock difficulty control',
    description: "Choose your own difficulty level instead of random. Perfect for targeted revision!",
    highlight: 'Choose easy, medium, or hard',
    icon: '🎯',
  },
  papers: {
    title: 'Create custom papers',
    description: "Generate full practice papers with multiple questions. Great for exam preparation!",
    highlight: 'Up to unlimited papers/week',
    icon: '📝',
  },
  bookmarks: {
    title: 'Save questions for later',
    description: "Bookmark tricky questions to revisit. Build your own revision collection!",
    highlight: 'Unlimited bookmarks',
    icon: '🔖',
  },
  history: {
    title: 'Track your progress',
    description: "See all your past questions and answers. Monitor your improvement over time!",
    highlight: 'Full question history',
    icon: '📊',
  },
};

export function UpgradePrompt({ reason, message, modal = false, onDismiss }: UpgradePromptProps) {
  const { tier } = useSubscription();
  const config = PROMPT_CONFIG[reason];

  // Don't show if user is already on a paid plan
  if (tier !== 'free') return null;

  const content = (
    <div className={`bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 ${modal ? 'max-w-md w-full' : ''}`}>
      <div className="flex items-start gap-4">
        <div className="text-3xl">{config.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">{config.title}</h3>
          <p className="text-white/60 text-sm mb-4">
            {message || config.description}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/80 text-sm">{config.highlight}</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              View Plans
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            {modal && onDismiss && (
              <button
                onClick={onDismiss}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Maybe later
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Price teaser */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-white/40 text-xs">Student Plus from</span>
        <div className="flex items-baseline gap-1">
          <span className="text-white font-semibold">£3.33</span>
          <span className="text-white/40 text-xs">/month (billed annually)</span>
        </div>
      </div>
    </div>
  );

  if (modal) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        {content}
      </div>
    );
  }

  return content;
}

/**
 * Inline upgrade banner for smaller prompts
 */
export function UpgradeBanner({ reason, className = '' }: { reason: UpgradePromptProps['reason']; className?: string }) {
  const { tier } = useSubscription();
  const config = PROMPT_CONFIG[reason];

  if (tier !== 'free') return null;

  return (
    <Link
      href="/pricing"
      className={`flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 hover:border-blue-500/40 transition-colors group ${className}`}
    >
      <span className="text-xl">{config.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-white/80 text-sm truncate">{config.title}</p>
      </div>
      <span className="text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-colors whitespace-nowrap">
        Upgrade →
      </span>
    </Link>
  );
}

/**
 * Usage indicator showing remaining questions
 */
export function UsageIndicator() {
  const { tier, dailyUsage, limits } = useSubscription();

  // Don't show for unlimited plans
  if (limits.questionsPerDay === null) return null;

  const used = dailyUsage.questionsGenerated;
  const total = limits.questionsPerDay;
  const remaining = Math.max(0, total - used);
  const percentage = (used / total) * 100;

  return (
    <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-xl p-4 min-w-[200px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[var(--color-text-secondary)] text-sm font-medium">Daily questions</span>
        <span className={`text-sm font-semibold ${remaining === 0 ? 'text-red-400' : remaining <= 3 ? 'text-yellow-400' : 'text-[var(--color-text-primary)]'}`}>
          {remaining} / {total}
        </span>
      </div>
      <div className="h-2 bg-[var(--color-bg-deepest)] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            remaining === 0 ? 'bg-red-500' : remaining <= 3 ? 'bg-yellow-500' : 'bg-[var(--color-accent)]'
          }`}
          style={{ width: `${Math.min(100, percentage)}%` }}
        />
      </div>
      {remaining <= 3 && remaining > 0 && (
        <p className="text-[var(--color-text-muted)] text-xs mt-2">
          Running low on questions today
        </p>
      )}
      {remaining === 0 && (
        <Link href="/pricing" className="text-[var(--color-accent)] text-sm mt-3 inline-flex items-center gap-1 hover:underline font-medium">
          Upgrade for unlimited
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
