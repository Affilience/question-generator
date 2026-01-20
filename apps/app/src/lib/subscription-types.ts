// Subscription tier types - shared between client and server
export type SubscriptionTier = 'free' | 'student_plus' | 'exam_pro' | 'exam_season';

// Feature limits by tier
export const TIER_LIMITS: Record<SubscriptionTier, {
  questionsPerDay: number | null; // null = unlimited
  papersPerWeek: number | null;
  difficultyControl: boolean;
  timedExamMode: boolean;
  pdfDownloads: boolean;
  examinerCommentary: boolean;
  synopticPapers: boolean;
  priorityGeneration: boolean;
  saveHistory: boolean;
  bookmarks: boolean;
}> = {
  free: {
    questionsPerDay: 15,
    papersPerWeek: 0,
    difficultyControl: false,
    timedExamMode: false,
    pdfDownloads: false,
    examinerCommentary: false,
    synopticPapers: false,
    priorityGeneration: false,
    saveHistory: false,
    bookmarks: false,
  },
  student_plus: {
    questionsPerDay: null, // unlimited
    papersPerWeek: 3,
    difficultyControl: true,
    timedExamMode: false,
    pdfDownloads: false,
    examinerCommentary: false,
    synopticPapers: false,
    priorityGeneration: false,
    saveHistory: true,
    bookmarks: true,
  },
  exam_pro: {
    questionsPerDay: null,
    papersPerWeek: null, // unlimited
    difficultyControl: true,
    timedExamMode: true,
    pdfDownloads: true,
    examinerCommentary: true,
    synopticPapers: true,
    priorityGeneration: true,
    saveHistory: true,
    bookmarks: true,
  },
  exam_season: {
    // Same as exam_pro
    questionsPerDay: null,
    papersPerWeek: null,
    difficultyControl: true,
    timedExamMode: true,
    pdfDownloads: true,
    examinerCommentary: true,
    synopticPapers: true,
    priorityGeneration: true,
    saveHistory: true,
    bookmarks: true,
  },
};

// Map Stripe price IDs to tiers
export function getTierFromPriceId(priceId: string): SubscriptionTier {
  if (priceId.includes('student_plus')) return 'student_plus';
  if (priceId.includes('exam_pro')) return 'exam_pro';
  if (priceId.includes('exam_season')) return 'exam_season';
  return 'free';
}
