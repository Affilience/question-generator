/**
 * Gamification system for XP, levels, and achievements
 */

// XP rewards per question based on difficulty
export const XP_REWARDS = {
  easy: { correct: 10, incorrect: 2 },
  medium: { correct: 25, incorrect: 5 },
  hard: { correct: 50, incorrect: 10 },
} as const;

// Level definitions with XP thresholds
export const LEVELS = [
  { level: 1, name: 'Beginner', xpRequired: 0, color: '#6b7280' },
  { level: 2, name: 'Learner', xpRequired: 100, color: '#22c55e' },
  { level: 3, name: 'Student', xpRequired: 300, color: '#3b82f6' },
  { level: 4, name: 'Scholar', xpRequired: 600, color: '#8b5cf6' },
  { level: 5, name: 'Expert', xpRequired: 1000, color: '#f59e0b' },
  { level: 6, name: 'Master', xpRequired: 2000, color: '#ef4444' },
  { level: 7, name: 'Grandmaster', xpRequired: 5000, color: '#ec4899' },
  { level: 8, name: 'Legend', xpRequired: 10000, color: '#06b6d4' },
] as const;

export type Difficulty = keyof typeof XP_REWARDS;
export type LevelInfo = (typeof LEVELS)[number];

export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
  requirementType: string;
  requirementValue: number;
  unlockedAt?: string;
}

export interface XPGainResult {
  xpGained: number;
  totalXP: number;
  previousLevel: number;
  newLevel: number;
  leveledUp: boolean;
  newAchievements: Achievement[];
}

export interface UserStats {
  totalXP: number;
  currentLevel: number;
  questionsTotal: number;
  questionsCorrect: number;
  currentStreak: number;
  longestStreak: number;
  correctStreak: number;
  topicsPracticed: number;
  papersCompleted: number;
}

/**
 * Calculate XP gained for answering a question
 */
export function calculateXP(difficulty: Difficulty, isCorrect: boolean): number {
  const rewards = XP_REWARDS[difficulty] || XP_REWARDS.medium;
  return isCorrect ? rewards.correct : rewards.incorrect;
}

/**
 * Get level info for a given XP amount
 */
export function getLevelForXP(xp: number): LevelInfo {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

/**
 * Get the next level info (or null if at max level)
 */
export function getNextLevel(currentLevel: number): LevelInfo | null {
  const nextIndex = LEVELS.findIndex((l) => l.level === currentLevel + 1);
  return nextIndex !== -1 ? LEVELS[nextIndex] : null;
}

/**
 * Calculate progress to next level (0-100)
 */
export function calculateLevelProgress(xp: number): number {
  const currentLevel = getLevelForXP(xp);
  const nextLevel = getNextLevel(currentLevel.level);

  if (!nextLevel) return 100; // Max level

  const xpInCurrentLevel = xp - currentLevel.xpRequired;
  const xpNeededForNextLevel = nextLevel.xpRequired - currentLevel.xpRequired;

  return Math.min(100, Math.round((xpInCurrentLevel / xpNeededForNextLevel) * 100));
}

/**
 * Get XP needed for next level
 */
export function getXPToNextLevel(xp: number): number {
  const currentLevel = getLevelForXP(xp);
  const nextLevel = getNextLevel(currentLevel.level);

  if (!nextLevel) return 0; // Max level

  return nextLevel.xpRequired - xp;
}

/**
 * Check if user leveled up after gaining XP
 */
export function checkLevelUp(previousXP: number, newXP: number): boolean {
  const previousLevel = getLevelForXP(previousXP);
  const newLevel = getLevelForXP(newXP);
  return newLevel.level > previousLevel.level;
}

/**
 * Format XP number with commas
 */
export function formatXP(xp: number): string {
  return xp.toLocaleString();
}

/**
 * Get achievement requirements description
 */
export function getAchievementRequirementText(achievement: Achievement): string {
  const { requirementType, requirementValue } = achievement;

  switch (requirementType) {
    case 'questions_total':
      return `Complete ${requirementValue} question${requirementValue !== 1 ? 's' : ''}`;
    case 'streak':
      return `Maintain a ${requirementValue}-day streak`;
    case 'streak_correct':
      return `Get ${requirementValue} correct in a row`;
    case 'topics_practiced':
      return `Practice ${requirementValue} different topics`;
    case 'topic_mastery':
      return `Achieve ${requirementValue}%+ accuracy on a topic`;
    case 'papers_completed':
      return `Complete ${requirementValue} practice paper${requirementValue !== 1 ? 's' : ''}`;
    case 'special':
      return achievement.description;
    default:
      return achievement.description;
  }
}

/**
 * Check which achievements should be unlocked based on user stats
 */
export function checkAchievements(
  stats: UserStats,
  allAchievements: Achievement[],
  unlockedAchievementCodes: string[]
): Achievement[] {
  const newlyUnlocked: Achievement[] = [];

  for (const achievement of allAchievements) {
    // Skip if already unlocked
    if (unlockedAchievementCodes.includes(achievement.code)) {
      continue;
    }

    let shouldUnlock = false;

    switch (achievement.requirementType) {
      case 'questions_total':
        shouldUnlock = stats.questionsTotal >= achievement.requirementValue;
        break;
      case 'streak':
        shouldUnlock = stats.currentStreak >= achievement.requirementValue;
        break;
      case 'streak_correct':
        shouldUnlock = stats.correctStreak >= achievement.requirementValue;
        break;
      case 'topics_practiced':
        shouldUnlock = stats.topicsPracticed >= achievement.requirementValue;
        break;
      case 'topic_mastery':
        // This requires additional context about topic accuracy
        // Will be checked separately when recording attempts
        break;
      case 'papers_completed':
        shouldUnlock = stats.papersCompleted >= achievement.requirementValue;
        break;
      case 'special':
        // Special achievements are handled elsewhere (time-based, etc.)
        break;
    }

    if (shouldUnlock) {
      newlyUnlocked.push(achievement);
    }
  }

  return newlyUnlocked;
}

/**
 * Check for time-based special achievements
 */
export function checkTimeBasedAchievements(hour: number): string[] {
  const achievements: string[] = [];

  if (hour < 8) {
    achievements.push('early_bird');
  }
  if (hour >= 22) {
    achievements.push('night_owl');
  }

  return achievements;
}

/**
 * Local storage keys for gamification
 */
export const GAMIFICATION_STORAGE_KEYS = {
  USER_XP: 'user_xp',
  USER_LEVEL: 'user_level',
  UNLOCKED_ACHIEVEMENTS: 'unlocked_achievements',
  CORRECT_STREAK: 'correct_streak',
  TOPICS_PRACTICED: 'topics_practiced',
} as const;

/**
 * Get user XP from local storage
 */
export function getLocalXP(): number {
  if (typeof window === 'undefined') return 0;
  const stored = localStorage.getItem(GAMIFICATION_STORAGE_KEYS.USER_XP);
  return stored ? parseInt(stored, 10) : 0;
}

/**
 * Save user XP to local storage
 */
export function saveLocalXP(xp: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GAMIFICATION_STORAGE_KEYS.USER_XP, xp.toString());
}

/**
 * Get unlocked achievement codes from local storage
 */
export function getLocalUnlockedAchievements(): string[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(GAMIFICATION_STORAGE_KEYS.UNLOCKED_ACHIEVEMENTS);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Save unlocked achievement codes to local storage
 */
export function saveLocalUnlockedAchievements(codes: string[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GAMIFICATION_STORAGE_KEYS.UNLOCKED_ACHIEVEMENTS, JSON.stringify(codes));
}

/**
 * Get correct streak from local storage
 */
export function getLocalCorrectStreak(): number {
  if (typeof window === 'undefined') return 0;
  const stored = localStorage.getItem(GAMIFICATION_STORAGE_KEYS.CORRECT_STREAK);
  return stored ? parseInt(stored, 10) : 0;
}

/**
 * Save correct streak to local storage
 */
export function saveLocalCorrectStreak(streak: number): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GAMIFICATION_STORAGE_KEYS.CORRECT_STREAK, streak.toString());
}

/**
 * Get topics practiced set from local storage
 */
export function getLocalTopicsPracticed(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  const stored = localStorage.getItem(GAMIFICATION_STORAGE_KEYS.TOPICS_PRACTICED);
  return stored ? new Set(JSON.parse(stored)) : new Set();
}

/**
 * Add a topic to the practiced set in local storage
 */
export function addLocalTopicPracticed(topicId: string): void {
  if (typeof window === 'undefined') return;
  const topics = getLocalTopicsPracticed();
  topics.add(topicId);
  localStorage.setItem(GAMIFICATION_STORAGE_KEYS.TOPICS_PRACTICED, JSON.stringify([...topics]));
}

/**
 * Process a question answer and return XP result
 */
export function processAnswer(
  difficulty: Difficulty,
  isCorrect: boolean,
  topicId: string
): {
  xpGained: number;
  newTotalXP: number;
  leveledUp: boolean;
  previousLevel: LevelInfo;
  newLevel: LevelInfo;
  correctStreak: number;
} {
  // Get current state
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

  // Save to local storage
  saveLocalXP(newTotalXP);
  saveLocalCorrectStreak(newCorrectStreak);
  addLocalTopicPracticed(topicId);

  return {
    xpGained,
    newTotalXP,
    leveledUp,
    previousLevel,
    newLevel,
    correctStreak: newCorrectStreak,
  };
}
