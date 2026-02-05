// Subscription tier types - shared between client and server
export type SubscriptionTier = 'free' | 'student_plus' | 'exam_pro';

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
  print_worksheets: boolean;
  print_papers: boolean;
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
    print_worksheets: false,
    print_papers: false,
  },
  student_plus: {
    questionsPerDay: 50,
    papersPerWeek: 3,
    difficultyControl: true,
    timedExamMode: false,
    pdfDownloads: false,
    examinerCommentary: false,
    synopticPapers: false,
    priorityGeneration: false,
    saveHistory: true,
    bookmarks: true,
    print_worksheets: true,
    print_papers: false,
  },
  exam_pro: {
    questionsPerDay: null, // unlimited
    papersPerWeek: 7, // 7 papers per week
    difficultyControl: true,
    timedExamMode: true,
    pdfDownloads: false, // Not implemented yet
    examinerCommentary: false, // Not implemented yet
    synopticPapers: false, // Not implemented yet
    priorityGeneration: false, // Not implemented yet
    saveHistory: true,
    bookmarks: true,
    print_worksheets: true,
    print_papers: true,
  },
};

// Map Stripe price IDs to tiers
export function getTierFromPriceId(priceId: string): SubscriptionTier {
  if (priceId.includes('student_plus')) return 'student_plus';
  if (priceId.includes('exam_pro')) return 'exam_pro';
  return 'free';
}
