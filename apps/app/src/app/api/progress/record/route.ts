import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { processQuestionAnswer } from '@/lib/supabase';
import { getAuthenticatedUser } from '@/lib/api/auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const DIFFICULTIES = new Set(['easy', 'medium', 'hard']);

export async function POST(request: NextRequest) {
  try {
    // Authenticate before touching anything. This handler writes with the
    // service-role key, which bypasses row-level security, so taking a user id
    // from the body let anyone award XP, raise levels, forge question attempts
    // and move streaks on any account they knew the id of.
    const user = await getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }
    const userId = user.id;

    const body = await request.json();
    const {
      topicId,
      subtopic,
      difficulty,
      correct,
      questionContent,
      questionSolution,
      subject = 'maths',
      examBoard = 'aqa',
      qualification = 'gcse',
      correctStreak = 0,
    } = body;

    if (!topicId || !subtopic || !difficulty || correct === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!DIFFICULTIES.has(difficulty)) {
      return NextResponse.json(
        { error: 'Invalid difficulty' },
        { status: 400 }
      );
    }

    // Bound the streak the client reports; it only feeds achievement checks,
    // but an arbitrary value would unlock every streak achievement at once.
    const reportedStreak = Number.isFinite(Number(correctStreak))
      ? Math.max(0, Math.min(1000, Math.floor(Number(correctStreak))))
      : 0;

    // Record the attempt
    const { data: attemptData, error: attemptError } = await supabase.from('question_attempts').insert({
      user_id: userId,
      topic_id: topicId,
      subtopic,
      difficulty,
      question_content: questionContent || '',
      question_solution: questionSolution || null,
      is_correct: correct,
      subject,
      exam_board: examBoard,
      qualification,
    });

    if (attemptError) {
      console.error('Error inserting question attempt:', attemptError);
      return NextResponse.json(
        { error: 'Failed to record question attempt', details: attemptError.message },
        { status: 500 }
      );
    }

    console.log('Successfully recorded question attempt:', attemptData);

    // Update topic progress
    const { data: existing } = await supabase
      .from('user_topic_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .eq('subtopic', subtopic)
      .eq('subject', subject)
      .eq('exam_board', examBoard)
      .eq('qualification', qualification)
      .single();

    if (existing) {
      await supabase
        .from('user_topic_progress')
        .update({
          attempted: existing.attempted + 1,
          correct: existing.correct + (correct ? 1 : 0),
          last_practiced_at: new Date().toISOString(),
        })
        .eq('id', existing.id);
    } else {
      await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: topicId,
        subtopic,
        attempted: 1,
        correct: correct ? 1 : 0,
        subject,
        exam_board: examBoard,
        qualification,
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

    // Process XP and achievements
    const xpResult = await processQuestionAnswer(
      userId,
      difficulty as 'easy' | 'medium' | 'hard',
      correct,
      reportedStreak,
      supabase
    );

    return NextResponse.json({
      success: true,
      xpGained: xpResult.xpGained,
      totalXP: xpResult.totalXP,
      leveledUp: xpResult.leveledUp,
      newLevel: xpResult.newLevel,
      newAchievements: xpResult.newAchievements,
      correctStreak: correct ? reportedStreak + 1 : 0,
    });
  } catch (error) {
    console.error('Error recording progress:', error);
    return NextResponse.json(
      { error: 'Failed to record progress' },
      { status: 500 }
    );
  }
}
