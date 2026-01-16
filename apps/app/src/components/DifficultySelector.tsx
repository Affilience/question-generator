'use client';

import { Difficulty } from '@/types';

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
