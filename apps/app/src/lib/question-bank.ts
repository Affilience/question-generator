import { createClient } from '@supabase/supabase-js';
import { Subject, ExamBoard, QualificationLevel, Difficulty, QuestionType } from '@/types';

// Get Supabase admin client
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Trigram thresholds calibrated against real near-clone families in the bank
// (see supabase/migrations/20260831_similarity_calibration.sql). Tune here,
// not in SQL — both RPCs take these as parameters.
const SERVE_PREFIX_SIMILARITY = 0.5;
const STORE_SIMILARITY_THRESHOLD = 0.55;

// The RPCs only need the most recent session exclusions; prefixes are capped
// server-side too, but trim here to keep payloads small.
const MAX_EXCLUDE_PREFIXES = 20;
const EXCLUDE_PREFIX_LENGTH = 150;

export type ServeContext = 'practice' | 'paper';

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

function normalizeExcludePrefixes(excludePrefixes: string[]): string[] {
  return excludePrefixes
    .filter(p => typeof p === 'string' && p.trim().length > 0)
    .slice(-MAX_EXCLUDE_PREFIXES)
    .map(p => p.slice(0, EXCLUDE_PREFIX_LENGTH));
}

/**
 * Atomically find a question the user hasn't seen and record the serve.
 *
 * The get_unseen_question RPC does everything in one round trip: exact
 * subtopic/difficulty matching, an anti-join against the user's full history
 * (no client-side fetch, no 1000-row cap), trigram-similarity filtering
 * against this session's excluded prefixes, least-served-first rotation, a
 * times_served bump, and the user_question_history upsert. Because recording
 * happens in the same call, rapid repeat requests can never serve the same
 * question twice.
 */
export async function findExistingQuestion(
  criteria: QuestionCriteria,
  userId: string | null,
  excludePrefixes: string[] = [],
  context: ServeContext = 'practice'
): Promise<BankQuestion | null> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase.rpc('get_unseen_question', {
    p_user_id: userId,
    p_subject: criteria.subject,
    p_exam_board: criteria.examBoard,
    p_qualification: criteria.qualification,
    p_topic_id: criteria.topicId,
    p_subtopic: criteria.subtopic,
    p_difficulty: criteria.difficulty,
    p_exclude_prefixes: normalizeExcludePrefixes(excludePrefixes),
    p_record: true,
    p_prefix_similarity: SERVE_PREFIX_SIMILARITY,
    p_question_type: criteria.questionType ?? null,
    p_marks: criteria.marks ?? null,
    p_context: context,
  });

  if (error) {
    console.error('get_unseen_question failed:', error.message);
    return null;
  }

  const rows = (data ?? []) as BankQuestion[];
  return rows.length > 0 ? rows[0] : null;
}

/**
 * Store a newly generated question in the bank.
 *
 * The store_bank_question RPC rejects near-duplicates (trigram similarity
 * against existing questions in the same subtopic key) instead of only exact
 * content matches, so the bank stops accumulating reworded clones. When the
 * new content is a near-duplicate, the existing question's id is returned and
 * — like on a fresh insert — the generating user's history is recorded
 * against it, which prevents them being served the lookalike later.
 */
export async function storeQuestion(
  criteria: QuestionCriteria,
  content: string,
  solution: string,
  markScheme: string[],
  marks: number,
  diagram?: Record<string, unknown> | null,
  userId?: string | null,
  context: ServeContext = 'practice'
): Promise<string | null> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase.rpc('store_bank_question', {
    p_subject: criteria.subject,
    p_exam_board: criteria.examBoard,
    p_qualification: criteria.qualification,
    p_topic_id: criteria.topicId,
    p_subtopic: criteria.subtopic,
    p_difficulty: criteria.difficulty,
    p_question_type: criteria.questionType ?? null,
    p_content: content,
    p_solution: solution,
    p_mark_scheme: markScheme,
    p_marks: marks,
    p_diagram: diagram ?? null,
    p_user_id: userId ?? null,
    p_similarity_threshold: STORE_SIMILARITY_THRESHOLD,
    p_context: context,
  });

  if (error) {
    console.error('store_bank_question failed:', error.message);
    return null;
  }

  const rows = (data ?? []) as { question_id: string | null; was_duplicate: boolean }[];
  return rows.length > 0 ? rows[0].question_id : null;
}
