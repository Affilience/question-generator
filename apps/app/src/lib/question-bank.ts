import { createClient } from '@supabase/supabase-js';
import { Subject, ExamBoard, QualificationLevel, Difficulty, QuestionType } from '@/types';

// Get Supabase admin client
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export interface BankQuestion {
  id: string;
  subject: string;
  exam_board: string;
  qualification: string;
  topic_id: string;
  subtopic: string;
  difficulty: string;
  question_type: string | null;
  content: string;
  solution: string;
  mark_scheme: string[];
  marks: number;
  diagram: Record<string, unknown> | null;
  times_served: number;
}

export interface QuestionCriteria {
  subject: Subject;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  topicId: string;
  subtopic: string;
  difficulty: Difficulty;
  questionType?: QuestionType;
  marks?: number;
}

/**
 * Find an existing question in the bank that the user hasn't seen
 */
export async function findExistingQuestion(
  criteria: QuestionCriteria,
  userId: string | null
): Promise<BankQuestion | null> {
  const supabase = getSupabaseAdmin();

  // Build query for matching questions
  let query = supabase
    .from('question_bank')
    .select('*')
    .eq('subject', criteria.subject)
    .eq('exam_board', criteria.examBoard)
    .eq('qualification', criteria.qualification)
    .eq('topic_id', criteria.topicId)
    .eq('difficulty', criteria.difficulty);

  // Optionally filter by subtopic if specified
  if (criteria.subtopic) {
    query = query.eq('subtopic', criteria.subtopic);
  }

  // Optionally filter by marks if specified (with ±1 tolerance)
  if (criteria.marks) {
    query = query.gte('marks', criteria.marks - 1).lte('marks', criteria.marks + 1);
  }

  // Order by times_served to prefer less-used questions
  query = query.order('times_served', { ascending: true });

  const { data: questions, error } = await query.limit(50);

  if (error || !questions || questions.length === 0) {
    return null;
  }

  // If user is logged in, filter out questions they've already seen
  if (userId) {
    const { data: seenQuestions } = await supabase
      .from('user_question_history')
      .select('question_id')
      .eq('user_id', userId);

    const seenIds = new Set(seenQuestions?.map(sq => sq.question_id) || []);
    const unseenQuestions = questions.filter(q => !seenIds.has(q.id));

    if (unseenQuestions.length > 0) {
      // Return a random unseen question (with bias towards less-served ones)
      const index = Math.floor(Math.random() * Math.min(5, unseenQuestions.length));
      return unseenQuestions[index] as BankQuestion;
    }

    // If all questions have been seen, return least-served one anyway
    // (better to repeat than to fail)
    return questions[0] as BankQuestion;
  }

  // For anonymous users, just return the least-served question
  return questions[0] as BankQuestion;
}

/**
 * Store a newly generated question in the bank
 */
export async function storeQuestion(
  criteria: QuestionCriteria,
  content: string,
  solution: string,
  markScheme: string[],
  marks: number,
  diagram?: Record<string, unknown> | null
): Promise<string | null> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from('question_bank')
    .insert({
      subject: criteria.subject,
      exam_board: criteria.examBoard,
      qualification: criteria.qualification,
      topic_id: criteria.topicId,
      subtopic: criteria.subtopic,
      difficulty: criteria.difficulty,
      question_type: criteria.questionType || null,
      content,
      solution,
      mark_scheme: markScheme,
      marks,
      diagram: diagram || null,
    })
    .select('id')
    .single();

  if (error) {
    // Likely a duplicate, which is fine
    console.log('Could not store question (may be duplicate):', error.message);
    return null;
  }

  return data?.id || null;
}

/**
 * Record that a user has been served a question
 */
export async function recordQuestionServed(
  questionId: string,
  userId: string | null,
  context: 'practice' | 'paper' = 'practice'
): Promise<void> {
  const supabase = getSupabaseAdmin();

  // Increment times_served counter
  await supabase.rpc('increment_times_served', { question_id: questionId });

  // Record in user history if logged in
  if (userId) {
    await supabase
      .from('user_question_history')
      .upsert(
        {
          user_id: userId,
          question_id: questionId,
          context,
          served_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,question_id' }
      );
  }
}

/**
 * Get statistics about the question bank
 */
export async function getQuestionBankStats(): Promise<{
  totalQuestions: number;
  bySubject: Record<string, number>;
  byDifficulty: Record<string, number>;
}> {
  const supabase = getSupabaseAdmin();

  const { count: totalQuestions } = await supabase
    .from('question_bank')
    .select('*', { count: 'exact', head: true });

  const { data: subjectCounts } = await supabase
    .from('question_bank')
    .select('subject')
    .then(result => {
      const counts: Record<string, number> = {};
      result.data?.forEach(q => {
        counts[q.subject] = (counts[q.subject] || 0) + 1;
      });
      return { data: counts };
    });

  const { data: difficultyCounts } = await supabase
    .from('question_bank')
    .select('difficulty')
    .then(result => {
      const counts: Record<string, number> = {};
      result.data?.forEach(q => {
        counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
      });
      return { data: counts };
    });

  return {
    totalQuestions: totalQuestions || 0,
    bySubject: subjectCounts || {},
    byDifficulty: difficultyCounts || {},
  };
}
