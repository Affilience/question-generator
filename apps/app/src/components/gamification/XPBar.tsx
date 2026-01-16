'use client';

import { motion } from 'framer-motion';
import { getLevelForXP, getNextLevel, calculateLevelProgress, formatXP, getXPToNextLevel } from '@/lib/gamification';

interface XPBarProps {
  xp: number;
  showDetails?: boolean;
  compact?: boolean;
}

export function XPBar({ xp, showDetails = true, compact = false }: XPBarProps) {
  const currentLevel = getLevelForXP(xp);
  const nextLevel = getNextLevel(currentLevel.level);
  const progress = calculateLevelProgress(xp);
  const xpToNext = getXPToNextLevel(xp);

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: currentLevel.color }}
        >
          {currentLevel.level}
        </div>
        <div className="flex-1 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: currentLevel.color }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        <span className="text-xs text-[#666666]">{formatXP(xp)} XP</span>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ backgroundColor: currentLevel.color }}
          >
            {currentLevel.level}
          </div>
          <div>
            <div className="text-sm font-medium text-white">{currentLevel.name}</div>
            {showDetails && (
              <div className="text-xs text-[#666666]">Level {currentLevel.level}</div>
            )}
          </div>
        </div>
        <div className="text-right">
          <motion.div
            className="text-lg font-bold text-white"
            key={xp}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatXP(xp)} XP
          </motion.div>
          {showDetails && nextLevel && (
            <div className="text-xs text-[#666666]">
              {formatXP(xpToNext)} to Level {nextLevel.level}
            </div>
          )}
        </div>
      </div>

      <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: currentLevel.color }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {showDetails && nextLevel && (
        <div className="flex justify-between mt-1 text-xs text-[#666666]">
          <span>{currentLevel.name}</span>
          <span>{nextLevel.name}</span>
        </div>
      )}
    </div>
  );
}
