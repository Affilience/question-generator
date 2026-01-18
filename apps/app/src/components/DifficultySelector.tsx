'use client';

import Link from 'next/link';
import { Difficulty } from '@/types';
import { useSubscription } from '@/contexts/SubscriptionContext';

interface DifficultySelectorProps {
  selected: Difficulty;
  onChange: (difficulty: Difficulty) => void;
  disabled?: boolean;
}

const difficulties: { value: Difficulty; label: string; color: string; glow: string }[] = [
  { value: 'easy', label: 'Easy', color: 'bg-green-500', glow: 'shadow-[0_0_15px_var(--color-success-glow)]' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500', glow: 'shadow-[0_0_15px_var(--color-warning-glow)]' },
  { value: 'hard', label: 'Hard', color: 'bg-red-500', glow: 'shadow-[0_0_15px_var(--color-error-glow)]' },
];

export function DifficultySelector({ selected, onChange, disabled }: DifficultySelectorProps) {
  const { canControlDifficulty, loading } = useSubscription();

  // Show locked state for free users
  if (!loading && !canControlDifficulty) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex gap-2 opacity-50">
          {difficulties.map(({ value, label }) => (
            <div
              key={value}
              className="px-4 py-2 rounded-lg font-medium text-sm bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)] cursor-not-allowed"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="text-[var(--color-text-muted)]">Random difficulty</span>
          <Link href="/pricing" className="text-[var(--color-accent)] hover:underline">
            Upgrade
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {difficulties.map(({ value, label, color, glow }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          disabled={disabled}
          className={`
            px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300
            ${selected === value
              ? `${color} text-white ${glow} scale-105`
              : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-visible)] hover:text-[var(--color-text-primary)]'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-95'}
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
