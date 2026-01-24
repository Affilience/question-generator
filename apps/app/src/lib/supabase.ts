import { createClient } from '@/lib/supabase/client';

// Use the singleton client to avoid multiple GoTrueClient instances
const getSupabase = () => createClient();

// For backwards compatibility, expose as a getter
export const supabase = new Proxy({} as ReturnType<typeof createClient>, {
  get: (_, prop) => {
    const client = getSupabase();
    const value = (client as Record<string, unknown>)[prop as string];
    return typeof value === 'function' ? value.bind(client) : value;
  },
});

// Types for our database tables
export interface User {
  id: string;
  display_name: string | null;
  created_at: string;
  last_active_at: string;
}

export interface TopicProgress {
  id: string;
  user_id: string;
  topic_id: string;
  subtopic: string | null;
  attempted: number;
  correct: number;
  last_practiced_at: string;
  created_at: string;
}

export interface QuestionAttempt {
  id: string;
  user_id: string;
  topic_id: string;
  subtopic: string;
  difficulty: string;
  question_content: string;
  question_solution: string | null;
  is_correct: boolean;
  attempted_at: string;
}

export interface UserStreak {
  id: string;
  user_id: string;
  practice_date: string;
  questions_practiced: number;
  created_at: string;
}

// SEO Content types
export interface SEOContent {
  id: string;
  level: string;
  subject: string;
  exam_board: string;
  topic_slug: string;
  subtopic_slug: string;
  title: string;
  meta_description: string;
  introduction: string;
  created_at: string;
  updated_at: string;
}

export interface SampleQuestion {
  id: string;
  subtopic_id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  content: string;
  solution: string;
  marks: number;
  display_order: number;
  created_at: string;
}

// Fetch SEO content for a subtopic
export async function getSEOContent(
  level: string,
  subject: string,
  examBoard: string,
  topicSlug: string,
  subtopicSlug: string
): Promise<SEOContent | null> {
  const { data, error } = await supabase
    .from('seo_content')
    .select('*')
    .eq('level', level)
    .eq('subject', subject)
    .eq('exam_board', examBoard)
    .eq('topic_slug', topicSlug)
    .eq('subtopic_slug', subtopicSlug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as SEOContent;
}

// Fetch sample questions for a subtopic
export async function getSampleQuestionsForSubtopic(
  level: string,
  subject: string,
  examBoard: string,
  topicSlug: string,
  subtopicSlug: string
): Promise<SampleQuestion[]> {
  // First get the seo_content ID
  const { data: seoContent, error: seoError } = await supabase
    .from('seo_content')
    .select('id')
    .eq('level', level)
    .eq('subject', subject)
    .eq('exam_board', examBoard)
    .eq('topic_slug', topicSlug)
    .eq('subtopic_slug', subtopicSlug)
    .single();

  if (seoError || !seoContent) {
    return [];
  }

  // Then fetch the sample questions
  const { data: questions, error: questionsError } = await supabase
    .from('sample_questions')
    .select('*')
    .eq('subtopic_id', seoContent.id)
    .order('display_order', { ascending: true });

  if (questionsError || !questions) {
    return [];
  }

  return questions as SampleQuestion[];
}

// Get or create user from localStorage ID
export async function getOrCreateUser(): Promise<User | null> {
  // Check localStorage for existing user ID
  let userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;

  if (userId) {
    // Try to fetch existing user
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (existingUser) {
      // Update last active
      await supabase
        .from('users')
        .update({ last_active_at: new Date().toISOString() })
        .eq('id', userId);
      return existingUser;
    }
  }

  // Create new user
  const { data: newUser, error } = await supabase
    .from('users')
    .insert({})
    .select()
    .single();

  if (error || !newUser) {
    console.error('Failed to create user:', error);
    return null;
  }

  // Store in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('userId', newUser.id);
  }

  return newUser;
}

// Record a question attempt
export async function recordAttempt(
  userId: string,
  topicId: string,
  subtopic: string,
  difficulty: string,
  questionContent: string,
  questionSolution: string | null,
  isCorrect: boolean,
  subject?: string,
  examBoard?: string,
  qualification?: string
): Promise<void> {
  // Record the attempt with subject context
  await supabase.from('question_attempts').insert({
    user_id: userId,
    topic_id: topicId,
    subtopic,
    difficulty,
    question_content: questionContent,
    question_solution: questionSolution,
    is_correct: isCorrect,
    subject: subject || 'maths',
    exam_board: examBoard || 'aqa',
    qualification: qualification || 'gcse',
  });

  // Update topic progress - now includes subject context
  const { data: existing } = await supabase
    .from('user_topic_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('topic_id', topicId)
    .eq('subtopic', subtopic)
    .eq('subject', subject || 'maths')
    .eq('exam_board', examBoard || 'aqa')
    .eq('qualification', qualification || 'gcse')
    .single();

  if (existing) {
    await supabase
      .from('user_topic_progress')
      .update({
        attempted: existing.attempted + 1,
        correct: existing.correct + (isCorrect ? 1 : 0),
        last_practiced_at: new Date().toISOString(),
      })
      .eq('id', existing.id);
  } else {
    await supabase.from('user_topic_progress').insert({
      user_id: userId,
      topic_id: topicId,
      subtopic,
      attempted: 1,
      correct: isCorrect ? 1 : 0,
      subject: subject || 'maths',
      exam_board: examBoard || 'aqa',
      qualification: qualification || 'gcse',
    });
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0];
  const { data: streakData } = await supabase
    .from('user_streaks')
    .select('*')
    .eq('user_id', userId)
    .eq('practice_date', today)
    .single();

  if (streakData) {
    await supabase
      .from('user_streaks')
      .update({ questions_practiced: streakData.questions_practiced + 1 })
      .eq('id', streakData.id);
  } else {
    await supabase.from('user_streaks').insert({
      user_id: userId,
      practice_date: today,
      questions_practiced: 1,
    });
  }
}

// User topic progress from the database
export interface UserTopicProgress {
  id: string;
  user_id: string;
  topic_id: string;
  subject: string;
  exam_board: string;
  qualification: string;
  subtopic: string | null;
  attempted: number;
  correct: number;
  last_practiced_at: string;
  created_at: string;
}

// Filter options for stats
export interface StatsFilter {
  subject?: string;
  examBoard?: string;
  qualification?: string;
}

// Get user stats for dashboard (optionally filtered by subject/board/level)
export async function getUserStats(userId: string, filter?: StatsFilter) {
  // Build query for topic progress
  let progressQuery = supabase
    .from('user_topic_progress')
    .select('*')
    .eq('user_id', userId);

  // Apply filters if provided
  if (filter?.subject) {
    progressQuery = progressQuery.eq('subject', filter.subject);
  }
  if (filter?.examBoard) {
    progressQuery = progressQuery.eq('exam_board', filter.examBoard);
  }
  if (filter?.qualification) {
    progressQuery = progressQuery.eq('qualification', filter.qualification);
  }

  // Build query for recent wrong answers
  let wrongQuery = supabase
    .from('question_attempts')
    .select('*')
    .eq('user_id', userId)
    .eq('is_correct', false)
    .order('attempted_at', { ascending: false })
    .limit(10);

  if (filter?.subject) {
    wrongQuery = wrongQuery.eq('subject', filter.subject);
  }
  if (filter?.examBoard) {
    wrongQuery = wrongQuery.eq('exam_board', filter.examBoard);
  }
  if (filter?.qualification) {
    wrongQuery = wrongQuery.eq('qualification', filter.qualification);
  }

  // Run all queries in parallel for faster loading
  const [
    { data: progressData },
    { data: streaksData },
    { data: recentWrong }
  ] = await Promise.all([
    progressQuery,
    supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', userId)
      .order('practice_date', { ascending: false })
      .limit(30),
    wrongQuery
  ]);

  // Cast to proper types since Proxy breaks inference
  const progress = progressData as UserTopicProgress[] | null;
  const streaks = streaksData as UserStreak[] | null;

  const totalAttempted = progress?.reduce((sum, p) => sum + p.attempted, 0) || 0;
  const totalCorrect = progress?.reduce((sum, p) => sum + p.correct, 0) || 0;
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const currentStreak = calculateStreak(streaks || []);

  // Get topic coverage
  const topicCoverage = calculateTopicCoverage(progress || []);

  // Get weak areas (topics with <50% accuracy and at least 3 attempts)
  const weakAreas = (progress || [])
    .filter(p => p.attempted >= 3 && (p.correct / p.attempted) < 0.5)
    .sort((a, b) => (a.correct / a.attempted) - (b.correct / b.attempted))
    .slice(0, 5);

  return {
    totalAttempted,
    totalCorrect,
    accuracy,
    currentStreak,
    recentWrong: recentWrong || [],
    topicCoverage,
    weakAreas,
    topicProgress: progress || [],
  };
}

// Get daily usage stats from daily_usage table (tracks questions generated, not just attempted)
export async function getDailyUsage(userId: string) {
  const today = new Date().toISOString().split('T')[0];
  
  // Get today's usage from daily_usage table
  const { data: usage } = await supabase
    .from('daily_usage')
    .select('questions_generated, papers_generated')
    .eq('user_id', userId)
    .eq('date', today)
    .single();

  return {
    questionsGenerated: usage?.questions_generated || 0,
    papersGenerated: usage?.papers_generated || 0,
  };
}

// Calculate current streak from streak data
function calculateStreak(streaks: UserStreak[]): number {
  if (streaks.length === 0) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streak = 0;
  let checkDate = new Date(today);

  for (const s of streaks) {
    const streakDate = new Date(s.practice_date);
    streakDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((checkDate.getTime() - streakDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0 || diffDays === 1) {
      streak++;
      checkDate = streakDate;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

// Calculate topic coverage
function calculateTopicCoverage(progress: TopicProgress[]) {
  const topicMap: Record<string, { attempted: number; correct: number; subtopics: Set<string> }> = {};

  for (const p of progress) {
    if (!topicMap[p.topic_id]) {
      topicMap[p.topic_id] = { attempted: 0, correct: 0, subtopics: new Set() };
    }
    topicMap[p.topic_id].attempted += p.attempted;
    topicMap[p.topic_id].correct += p.correct;
    if (p.subtopic) {
      topicMap[p.topic_id].subtopics.add(p.subtopic);
    }
  }

  return Object.entries(topicMap).map(([topicId, data]) => ({
    topicId,
    attempted: data.attempted,
    correct: data.correct,
    accuracy: data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0,
    subtopicsCovered: data.subtopics.size,
  }));
}

// Bookmark types
export interface BookmarkedQuestion {
  id: string;
  user_id: string;
  topic_id: string;
  subtopic: string;
  difficulty: string;
  question_content: string;
  question_solution: string | null;
  question_marks: number | null;
  mark_scheme: string[] | null;
  notes: string | null;
  bookmarked_at: string;
}

// Add a bookmark
export async function addBookmark(
  userId: string,
  question: {
    topicId: string;
    subtopic: string;
    difficulty: string;
    content: string;
    solution: string;
    marks: number;
    markScheme: string[];
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('bookmarked_questions').insert({
      user_id: userId,
      topic_id: question.topicId,
      subtopic: question.subtopic,
      difficulty: question.difficulty,
      question_content: question.content,
      question_solution: question.solution,
      question_marks: question.marks,
      mark_scheme: question.markScheme,
    });

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'Already bookmarked' };
      }
      throw error;
    }

    return { success: true };
  } catch (err) {
    console.error('Failed to add bookmark:', err);
    return { success: false, error: 'Failed to bookmark' };
  }
}

// Remove a bookmark
export async function removeBookmark(userId: string, bookmarkId: string): Promise<boolean> {
  try {
    await supabase
      .from('bookmarked_questions')
      .delete()
      .eq('id', bookmarkId)
      .eq('user_id', userId);
    return true;
  } catch (err) {
    console.error('Failed to remove bookmark:', err);
    return false;
  }
}

// Check if a question is bookmarked
export async function isBookmarked(userId: string, questionContent: string): Promise<string | null> {
  try {
    const { data } = await supabase
      .from('bookmarked_questions')
      .select('id')
      .eq('user_id', userId)
      .eq('question_content', questionContent)
      .single();

    return data?.id || null;
  } catch {
    return null;
  }
}

// Get all bookmarks for a user
export async function getBookmarks(userId: string): Promise<BookmarkedQuestion[]> {
  try {
    const { data } = await supabase
      .from('bookmarked_questions')
      .select('*')
      .eq('user_id', userId)
      .order('bookmarked_at', { ascending: false });

    return data || [];
  } catch (err) {
    console.error('Failed to get bookmarks:', err);
    return [];
  }
}

// Get bookmark count
export async function getBookmarkCount(userId: string): Promise<number> {
  try {
    const { count } = await supabase
      .from('bookmarked_questions')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId);

    return count || 0;
  } catch {
    return 0;
  }
}

// ============================================
// GAMIFICATION FUNCTIONS
// ============================================

export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string | null;
  icon: string | null;
  xp_reward: number;
  requirement_type: string | null;
  requirement_value: number | null;
  created_at: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  unlocked_at: string;
  achievement?: Achievement;
}

export interface GamificationStats {
  totalXP: number;
  currentLevel: number;
  questionsTotal: number;
  questionsCorrect: number;
  currentStreak: number;
  topicsPracticed: number;
  papersCompleted: number;
}

export interface XPGainResult {
  xpGained: number;
  totalXP: number;
  previousLevel: number;
  newLevel: number;
  leveledUp: boolean;
  newAchievements: Achievement[];
}

// Get user's XP and level
export async function getUserXP(userId: string, customClient?: any): Promise<{ totalXP: number; currentLevel: number }> {
  const client = customClient || supabase;
  const { data } = await client
    .from('users')
    .select('total_xp, current_level')
    .eq('id', userId)
    .single();

  return {
    totalXP: data?.total_xp || 0,
    currentLevel: data?.current_level || 1,
  };
}

// Update user's XP and level
export async function updateUserXP(userId: string, newXP: number, newLevel: number, customClient?: any): Promise<void> {
  const client = customClient || supabase;
  const { error } = await client
    .from('users')
    .update({ total_xp: newXP, current_level: newLevel })
    .eq('id', userId);
  
  if (error) {
    console.error('Error updating user XP:', error);
    throw error;
  }
}

// Get all achievements
export async function getAllAchievements(): Promise<Achievement[]> {
  const { data } = await supabase
    .from('achievements')
    .select('*')
    .order('requirement_value', { ascending: true });

  return data || [];
}

// Get user's unlocked achievements
export async function getUserAchievements(userId: string): Promise<UserAchievement[]> {
  const { data } = await supabase
    .from('user_achievements')
    .select('*, achievement:achievements(*)')
    .eq('user_id', userId)
    .order('unlocked_at', { ascending: false });

  return data || [];
}

// Unlock an achievement for a user
export async function unlockAchievement(
  userId: string,
  achievementId: string
): Promise<boolean> {
  try {
    // Check if already unlocked
    const { data: existing } = await supabase
      .from('user_achievements')
      .select('id')
      .eq('user_id', userId)
      .eq('achievement_id', achievementId)
      .single();

    if (existing) return false; // Already unlocked

    await supabase.from('user_achievements').insert({
      user_id: userId,
      achievement_id: achievementId,
    });

    return true;
  } catch {
    return false;
  }
}

// Get gamification stats for a user (for achievement checking)
export async function getGamificationStats(userId: string): Promise<GamificationStats> {
  // Run all queries in parallel for faster loading
  const [
    xpData,
    { count: questionsTotal },
    { count: questionsCorrect },
    { data: streaks },
    { data: topicData },
    { count: papersCompleted }
  ] = await Promise.all([
    getUserXP(userId),
    supabase
      .from('question_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId),
    supabase
      .from('question_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_correct', true),
    supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', userId)
      .order('practice_date', { ascending: false })
      .limit(30),
    supabase
      .from('user_topic_progress')
      .select('topic_id')
      .eq('user_id', userId),
    supabase
      .from('paper_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .not('completed_at', 'is', null)
  ]);

  // Cast to proper types since Proxy breaks inference
  const typedStreaks = streaks as UserStreak[] | null;
  const typedTopicData = topicData as { topic_id: string }[] | null;

  const currentStreak = calculateStreak(typedStreaks || []);
  const topicsPracticed = new Set(typedTopicData?.map(t => t.topic_id) || []).size;

  return {
    totalXP: xpData.totalXP,
    currentLevel: xpData.currentLevel,
    questionsTotal: questionsTotal || 0,
    questionsCorrect: questionsCorrect || 0,
    currentStreak,
    topicsPracticed,
    papersCompleted: papersCompleted || 0,
  };
}

// Check and unlock achievements based on current stats
export async function checkAndUnlockAchievements(
  userId: string,
  stats: GamificationStats,
  correctStreak: number = 0,
  hour?: number
): Promise<Achievement[]> {
  const allAchievements = await getAllAchievements();
  const userAchievements = await getUserAchievements(userId);
  const unlockedCodes = userAchievements.map(ua => ua.achievement?.code).filter(Boolean);

  const newlyUnlocked: Achievement[] = [];

  for (const achievement of allAchievements) {
    if (unlockedCodes.includes(achievement.code)) continue;

    let shouldUnlock = false;

    switch (achievement.requirement_type) {
      case 'questions_total':
        shouldUnlock = stats.questionsTotal >= (achievement.requirement_value || 0);
        break;
      case 'streak':
        shouldUnlock = stats.currentStreak >= (achievement.requirement_value || 0);
        break;
      case 'streak_correct':
        shouldUnlock = correctStreak >= (achievement.requirement_value || 0);
        break;
      case 'topics_practiced':
        shouldUnlock = stats.topicsPracticed >= (achievement.requirement_value || 0);
        break;
      case 'papers_completed':
        shouldUnlock = stats.papersCompleted >= (achievement.requirement_value || 0);
        break;
      case 'special':
        // Time-based achievements
        if (hour !== undefined) {
          if (achievement.code === 'early_bird' && hour < 8) {
            shouldUnlock = true;
          }
          if (achievement.code === 'night_owl' && hour >= 22) {
            shouldUnlock = true;
          }
        }
        break;
    }

    if (shouldUnlock) {
      const unlocked = await unlockAchievement(userId, achievement.id);
      if (unlocked) {
        newlyUnlocked.push(achievement);
      }
    }
  }

  return newlyUnlocked;
}

// XP calculation constants
const XP_REWARDS = {
  easy: { correct: 10, incorrect: 2 },
  medium: { correct: 25, incorrect: 5 },
  hard: { correct: 50, incorrect: 10 },
} as const;

const LEVELS = [
  { level: 1, xpRequired: 0 },
  { level: 2, xpRequired: 100 },
  { level: 3, xpRequired: 300 },
  { level: 4, xpRequired: 600 },
  { level: 5, xpRequired: 1000 },
  { level: 6, xpRequired: 2000 },
  { level: 7, xpRequired: 5000 },
  { level: 8, xpRequired: 10000 },
] as const;

function getLevelForXP(xp: number): number {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) {
      return LEVELS[i].level;
    }
  }
  return 1;
}

// Process a question answer and award XP + check achievements
export async function processQuestionAnswer(
  userId: string,
  difficulty: 'easy' | 'medium' | 'hard',
  isCorrect: boolean,
  correctStreak: number,
  customClient?: any
): Promise<XPGainResult> {
  // Get current XP
  const { totalXP: currentXP, currentLevel: previousLevel } = await getUserXP(userId, customClient);

  // Calculate XP gained
  const rewards = XP_REWARDS[difficulty] || XP_REWARDS.medium;
  const xpGained = isCorrect ? rewards.correct : rewards.incorrect;
  const newTotalXP = currentXP + xpGained;

  // Calculate new level
  const newLevel = getLevelForXP(newTotalXP);
  const leveledUp = newLevel > previousLevel;

  // Update user XP in database
  await updateUserXP(userId, newTotalXP, newLevel, customClient);

  // Get stats and check achievements
  const stats = await getGamificationStats(userId);
  const hour = new Date().getHours();
  const newCorrectStreak = isCorrect ? correctStreak + 1 : 0;
  const newAchievements = await checkAndUnlockAchievements(userId, stats, newCorrectStreak, hour);

  // Add XP rewards from achievements
  let achievementXP = 0;
  for (const achievement of newAchievements) {
    achievementXP += achievement.xp_reward || 0;
  }

  if (achievementXP > 0) {
    const finalXP = newTotalXP + achievementXP;
    const finalLevel = getLevelForXP(finalXP);
    await updateUserXP(userId, finalXP, finalLevel);

    return {
      xpGained: xpGained + achievementXP,
      totalXP: finalXP,
      previousLevel,
      newLevel: finalLevel,
      leveledUp: finalLevel > previousLevel,
      newAchievements,
    };
  }

  return {
    xpGained,
    totalXP: newTotalXP,
    previousLevel,
    newLevel,
    leveledUp,
    newAchievements,
  };
}

// ============================================
// PAPER ATTEMPTS FUNCTIONS
// ============================================

export interface PaperAttempt {
  id: string;
  user_id: string;
  exam_board: string;
  qualification: string;
  subject: string;
  paper_name: string | null;
  total_marks: number;
  score: number | null;
  time_taken: number | null;
  questions: unknown; // JSONB
  completed_at: string | null;
  created_at: string;
}

// Start a new paper attempt
export async function startPaperAttempt(
  userId: string,
  examBoard: string,
  qualification: string,
  subject: string,
  paperName: string | null,
  totalMarks: number,
  questions: unknown
): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('paper_attempts')
      .insert({
        user_id: userId,
        exam_board: examBoard,
        qualification: qualification,
        subject: subject,
        paper_name: paperName,
        total_marks: totalMarks,
        questions: questions,
      })
      .select('id')
      .single();

    if (error) throw error;
    return data?.id || null;
  } catch (err) {
    console.error('Failed to start paper attempt:', err);
    return null;
  }
}

// Complete a paper attempt
export async function completePaperAttempt(
  paperId: string,
  score: number,
  timeTaken: number,
  questions: unknown
): Promise<boolean> {
  try {
    await supabase
      .from('paper_attempts')
      .update({
        score,
        time_taken: timeTaken,
        questions,
        completed_at: new Date().toISOString(),
      })
      .eq('id', paperId);

    return true;
  } catch (err) {
    console.error('Failed to complete paper attempt:', err);
    return false;
  }
}

// Get user's paper attempts
export async function getUserPaperAttempts(userId: string): Promise<PaperAttempt[]> {
  try {
    const { data } = await supabase
      .from('paper_attempts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    return data || [];
  } catch (err) {
    console.error('Failed to get paper attempts:', err);
    return [];
  }
}

// Get a specific paper attempt
export async function getPaperAttempt(paperId: string): Promise<PaperAttempt | null> {
  try {
    const { data } = await supabase
      .from('paper_attempts')
      .select('*')
      .eq('id', paperId)
      .single();

    return data || null;
  } catch {
    return null;
  }
}
