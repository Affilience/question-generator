'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { triggerAchievement } from '@/lib/celebrations';

interface Achievement {
  code: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
}

// Achievement data - matches database seed
const ACHIEVEMENTS: Record<string, Omit<Achievement, 'code'>> = {
  first_question: { name: 'First Steps', description: 'Complete your first question', icon: '🎯', xpReward: 10 },
  ten_questions: { name: 'Getting Started', description: 'Complete 10 questions', icon: '📚', xpReward: 25 },
  fifty_questions: { name: 'Dedicated Learner', description: 'Complete 50 questions', icon: '🌟', xpReward: 50 },
  century: { name: 'Century', description: 'Complete 100 questions', icon: '💯', xpReward: 100 },
  five_hundred: { name: 'Question Master', description: 'Complete 500 questions', icon: '🏅', xpReward: 250 },
  thousand: { name: 'Legendary', description: 'Complete 1000 questions', icon: '🏆', xpReward: 500 },
  streak_3: { name: 'On a Roll', description: 'Maintain a 3-day streak', icon: '🔥', xpReward: 25 },
  streak_7: { name: 'Week Warrior', description: 'Maintain a 7-day streak', icon: '⚡', xpReward: 75 },
  streak_14: { name: 'Two Week Champion', description: 'Maintain a 14-day streak', icon: '💪', xpReward: 150 },
  streak_30: { name: 'Monthly Master', description: 'Maintain a 30-day streak', icon: '👑', xpReward: 300 },
  perfect_5: { name: 'Sharp Mind', description: 'Get 5 questions correct in a row', icon: '🎯', xpReward: 30 },
  perfect_10: { name: 'Perfect 10', description: 'Get 10 questions correct in a row', icon: '✨', xpReward: 75 },
  perfect_20: { name: 'Unstoppable', description: 'Get 20 questions correct in a row', icon: '🌠', xpReward: 150 },
  topic_starter: { name: 'Explorer', description: 'Practice questions from 5 different topics', icon: '🗺️', xpReward: 40 },
  topic_explorer: { name: 'Adventurer', description: 'Practice questions from 10 different topics', icon: '🧭', xpReward: 80 },
  topic_master: { name: 'Topic Master', description: 'Achieve 80%+ accuracy on a topic', icon: '🎓', xpReward: 100 },
  first_paper: { name: 'Paper Pusher', description: 'Complete your first practice paper', icon: '📝', xpReward: 50 },
  five_papers: { name: 'Exam Ready', description: 'Complete 5 practice papers', icon: '📋', xpReward: 150 },
  early_bird: { name: 'Early Bird', description: 'Practice before 8am', icon: '🌅', xpReward: 20 },
  night_owl: { name: 'Night Owl', description: 'Practice after 10pm', icon: '🦉', xpReward: 20 },
};

interface AchievementToastProps {
  achievementCodes: string[];
  onDismiss: () => void;
}

export function AchievementToast({ achievementCodes, onDismiss }: AchievementToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(achievementCodes.length > 0);

  const currentCode = achievementCodes[currentIndex];
  const achievement = currentCode ? ACHIEVEMENTS[currentCode] : null;

  useEffect(() => {
    if (visible && achievement) {
      // Trigger confetti for each achievement
      triggerAchievement();

      const timer = setTimeout(() => {
        if (currentIndex < achievementCodes.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setVisible(false);
          onDismiss();
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, currentIndex, achievementCodes.length, achievement, onDismiss]);

  if (!achievement) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl border border-yellow-500/30 p-4 shadow-2xl min-w-[280px]">
            <div className="flex items-center gap-3">
              <motion.div
                className="text-4xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.2 }}
              >
                {achievement.icon}
              </motion.div>
              <div className="flex-1">
                <motion.div
                  className="text-xs text-yellow-400 font-medium mb-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Achievement Unlocked!
                </motion.div>
                <motion.div
                  className="text-lg font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {achievement.name}
                </motion.div>
                <motion.div
                  className="text-sm text-[#a1a1a1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {achievement.description}
                </motion.div>
              </div>
              <motion.div
                className="text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-yellow-400 font-bold">+{achievement.xpReward}</div>
                <div className="text-xs text-[#666666]">XP</div>
              </motion.div>
            </div>

            {achievementCodes.length > 1 && (
              <motion.div
                className="flex justify-center gap-1 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {achievementCodes.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === currentIndex ? 'bg-yellow-400' : 'bg-[#333333]'
                    }`}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Hook for managing achievement toasts
 */
export function useAchievementToast() {
  const [pendingAchievements, setPendingAchievements] = useState<string[]>([]);

  const showAchievements = (codes: string[]) => {
    if (codes.length > 0) {
      setPendingAchievements(codes);
    }
  };

  const dismissAchievements = () => {
    setPendingAchievements([]);
  };

  return {
    pendingAchievements,
    showAchievements,
    dismissAchievements,
    AchievementToastComponent: pendingAchievements.length > 0 ? (
      <AchievementToast
        achievementCodes={pendingAchievements}
        onDismiss={dismissAchievements}
      />
    ) : null,
  };
}
