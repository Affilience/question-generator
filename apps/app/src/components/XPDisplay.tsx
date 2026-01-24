'use client';

import { useXP } from '@/hooks/useXP';

export function XPDisplay() {
  const { xpData, loading } = useXP();

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-16 h-4 bg-[var(--color-bg-elevated)] rounded animate-pulse"></div>
        <div className="w-8 h-4 bg-[var(--color-bg-elevated)] rounded animate-pulse"></div>
      </div>
    );
  }

  if (!xpData) {
    return null;
  }

  const { currentLevel, xpForCurrentLevel, xpForNextLevel, progressPercent } = xpData;

  return (
    <div className="flex items-center gap-3">
      {/* Level Badge */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-full text-white text-sm font-semibold shadow-lg">
        <span className="text-xs opacity-80">LV</span>
        <span>{currentLevel}</span>
      </div>

      {/* XP Progress Bar */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <div className="relative w-20 h-2 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs text-[var(--color-text-muted)] whitespace-nowrap">
              {xpForCurrentLevel}/{xpForNextLevel} XP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompactXPDisplay() {
  const { xpData, loading } = useXP();

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[var(--color-bg-elevated)] rounded-full animate-pulse"></div>
        <div className="w-12 h-3 bg-[var(--color-bg-elevated)] rounded animate-pulse"></div>
      </div>
    );
  }

  if (!xpData) {
    return null;
  }

  const { currentLevel, progressPercent } = xpData;

  return (
    <div className="flex items-center gap-2">
      {/* Compact Level Badge */}
      <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-full text-white text-xs font-bold shadow-sm">
        {currentLevel}
      </div>

      {/* Mini Progress Bar */}
      <div className="relative w-12 h-1.5 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}