'use client';

import { motion } from 'framer-motion';
import { getLevelForXP, type LevelInfo } from '@/lib/gamification';

interface LevelBadgeProps {
  xp?: number;
  level?: LevelInfo;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  animated?: boolean;
}

export function LevelBadge({
  xp,
  level: providedLevel,
  size = 'md',
  showName = false,
  animated = false,
}: LevelBadgeProps) {
  const level = providedLevel || (xp !== undefined ? getLevelForXP(xp) : null);

  if (!level) return null;

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-lg',
  };

  const badgeStyle = {
    backgroundColor: level.color,
    boxShadow: `0 0 12px ${level.color}40`,
  };

  if (animated) {
    return (
      <div className="flex items-center gap-2">
        <motion.div
          className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white shadow-lg`}
          style={badgeStyle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          {level.level}
        </motion.div>
        {showName && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{level.name}</span>
            <span className="text-xs text-[#666666]">Level {level.level}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white shadow-lg`}
        style={badgeStyle}
      >
        {level.level}
      </div>
      {showName && (
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white">{level.name}</span>
          <span className="text-xs text-[#666666]">Level {level.level}</span>
        </div>
      )}
    </div>
  );
}
