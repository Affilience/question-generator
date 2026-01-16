import { TopicProgress } from '@/types';
import {
  calculateXP,
  getLevelForXP,
  getLocalXP,
  saveLocalXP,
  getLocalCorrectStreak,
  saveLocalCorrectStreak,
  addLocalTopicPracticed,
  getLocalUnlockedAchievements,
  saveLocalUnlockedAchievements,
  getLocalTopicsPracticed,
  checkTimeBasedAchievements,
  type Difficulty,
  type LevelInfo,
} from './gamification';

const STORAGE_KEY = 'question-generator-progress';

export interface AnswerResult {
  xpGained: number;
  newTotalXP: number;
  leveledUp: boolean;
  previousLevel: LevelInfo;
  newLevel: LevelInfo;
  correctStreak: number;
  newAchievements: string[];
  totalQuestions: number;
}

export function getAllProgress(): Record<string, TopicProgress> {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getTopicProgress(topicId: string): TopicProgress | null {
  const all = getAllProgress();
  return all[topicId] || null;
}

export function updateProgress(topicId: string, correct: boolean): void {
  if (typeof window === 'undefined') return;

  const all = getAllProgress();
  const existing = all[topicId] || {
    topicId,
    attempted: 0,
    correct: 0,
    lastPracticed: new Date().toISOString(),
  };

  existing.attempted += 1;
  if (correct) {
    existing.correct += 1;
  }
  existing.lastPracticed = new Date().toISOString();

  all[topicId] = existing;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    console.error('Failed to save progress to localStorage');
  }
}

export function getTotalStats(): { attempted: number; correct: number } {
  const all = getAllProgress();
  return Object.values(all).reduce(
    (acc, progress) => ({
      attempted: acc.attempted + progress.attempted,
      correct: acc.correct + progress.correct,
    }),
    { attempted: 0, correct: 0 }
  );
}

/**
 * Record an answer with full gamification support
 * Returns XP gained, level info, and any new achievements
 */
export function recordAnswer(
  topicId: string,
  isCorrect: boolean,
  difficulty: Difficulty = 'medium'
): AnswerResult {
  // Update topic progress
  updateProgress(topicId, isCorrect);

  // Get current XP state
  const currentXP = getLocalXP();
  const currentCorrectStreak = getLocalCorrectStreak();

  // Calculate XP gained
  const xpGained = calculateXP(difficulty, isCorrect);
  const newTotalXP = currentXP + xpGained;

  // Update correct streak
  const newCorrectStreak = isCorrect ? currentCorrectStreak + 1 : 0;

  // Check for level up
  const previousLevel = getLevelForXP(currentXP);
  const newLevel = getLevelForXP(newTotalXP);
  const leveledUp = newLevel.level > previousLevel.level;

  // Save XP and streak
  saveLocalXP(newTotalXP);
  saveLocalCorrectStreak(newCorrectStreak);
  addLocalTopicPracticed(topicId);

  // Get total questions
  const stats = getTotalStats();

  // Check for new achievements
  const unlockedAchievements = getLocalUnlockedAchievements();
  const newAchievements: string[] = [];

  // Question milestones
  const questionMilestones: Record<number, string> = {
    1: 'first_question',
    10: 'ten_questions',
    50: 'fifty_questions',
    100: 'century',
    500: 'five_hundred',
    1000: 'thousand',
  };

  for (const [milestone, code] of Object.entries(questionMilestones)) {
    if (stats.attempted >= parseInt(milestone) && !unlockedAchievements.includes(code)) {
      newAchievements.push(code);
    }
  }

  // Correct streak milestones
  const streakMilestones: Record<number, string> = {
    5: 'perfect_5',
    10: 'perfect_10',
    20: 'perfect_20',
  };

  for (const [milestone, code] of Object.entries(streakMilestones)) {
    if (newCorrectStreak >= parseInt(milestone) && !unlockedAchievements.includes(code)) {
      newAchievements.push(code);
    }
  }

  // Topics practiced milestones
  const topicsPracticed = getLocalTopicsPracticed().size;
  const topicMilestones: Record<number, string> = {
    5: 'topic_starter',
    10: 'topic_explorer',
  };

  for (const [milestone, code] of Object.entries(topicMilestones)) {
    if (topicsPracticed >= parseInt(milestone) && !unlockedAchievements.includes(code)) {
      newAchievements.push(code);
    }
  }

  // Time-based achievements
  const hour = new Date().getHours();
  const timeAchievements = checkTimeBasedAchievements(hour);
  for (const code of timeAchievements) {
    if (!unlockedAchievements.includes(code)) {
      newAchievements.push(code);
    }
  }

  // Save new achievements
  if (newAchievements.length > 0) {
    saveLocalUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
  }

  return {
    xpGained,
    newTotalXP,
    leveledUp,
    previousLevel,
    newLevel,
    correctStreak: newCorrectStreak,
    newAchievements,
    totalQuestions: stats.attempted,
  };
}

/**
 * Get the current user's gamification stats
 */
export function getGamificationStats() {
  const xp = getLocalXP();
  const level = getLevelForXP(xp);
  const correctStreak = getLocalCorrectStreak();
  const topicsPracticed = getLocalTopicsPracticed().size;
  const unlockedAchievements = getLocalUnlockedAchievements();
  const stats = getTotalStats();

  return {
    xp,
    level,
    correctStreak,
    topicsPracticed,
    unlockedAchievements,
    questionsAttempted: stats.attempted,
    questionsCorrect: stats.correct,
    accuracy: stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0,
  };
}
