/**
 * Client-side API for recording progress
 * This calls the server API which handles XP, achievements, and database updates
 */

export interface RecordProgressParams {
  userId: string;
  topicId: string;
  subtopic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  correct: boolean;
  questionContent?: string;
  questionSolution?: string;
  subject?: string;
  examBoard?: string;
  qualification?: string;
  correctStreak?: number;
}

export interface RecordProgressResult {
  success: boolean;
  xpGained: number;
  totalXP: number;
  leveledUp: boolean;
  previousLevel: number;
  newLevel: number;
  newAchievements: Array<{
    id: string;
    code: string;
    name: string;
    description: string | null;
    icon: string | null;
    xp_reward: number;
  }>;
  correctStreak: number;
  error?: string;
}

/**
 * Record a question answer to the database
 * Awards XP, checks achievements, updates streaks
 */
export async function recordProgress(params: RecordProgressParams): Promise<RecordProgressResult> {
  try {
    const response = await fetch('/api/progress/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: params.userId,
        topicId: params.topicId,
        subtopic: params.subtopic,
        difficulty: params.difficulty,
        correct: params.correct,
        questionContent: params.questionContent || '',
        questionSolution: params.questionSolution || null,
        subject: params.subject || 'maths',
        examBoard: params.examBoard || 'aqa',
        qualification: params.qualification || 'gcse',
        correctStreak: params.correctStreak || 0,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to record progress');
    }

    const data = await response.json();

    return {
      success: true,
      xpGained: data.xpGained || 0,
      totalXP: data.totalXP || 0,
      leveledUp: data.leveledUp || false,
      previousLevel: data.previousLevel || 1,
      newLevel: data.newLevel || 1,
      newAchievements: data.newAchievements || [],
      correctStreak: data.correctStreak || 0,
    };
  } catch (error) {
    console.error('Failed to record progress:', error);
    return {
      success: false,
      xpGained: 0,
      totalXP: 0,
      leveledUp: false,
      previousLevel: 1,
      newLevel: 1,
      newAchievements: [],
      correctStreak: 0,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
