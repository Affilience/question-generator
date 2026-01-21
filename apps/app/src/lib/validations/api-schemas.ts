/**
 * Zod validation schemas for API routes
 * Provides type-safe input validation with helpful error messages
 */

import { z } from 'zod';

// ============================================================================
// Common Enums
// ============================================================================

export const ExamBoardSchema = z.enum(['aqa', 'edexcel', 'ocr']);
export const QualificationSchema = z.enum(['gcse', 'a-level']);
export const DifficultySchema = z.enum(['easy', 'medium', 'hard']);
export const SubjectSchema = z.enum([
  'maths',
  'physics',
  'chemistry',
  'biology',
  'computer-science',
  'economics',
  'business',
  'psychology',
  'geography',
  'history',
  'english-literature',
  'further-maths',
  'combined-science',
]);

// ============================================================================
// Question Generation
// ============================================================================

export const QuestionTypeSchema = z.enum([
  'auto',
  'multiple-choice',
  'short-answer',
  'calculation',
  'explain',
  'extended',
  'data-analysis',
  'graph',
  'compare',
]);

export const GenerateQuestionRequestSchema = z.object({
  topicId: z.string().min(1).max(200).optional(),
  practicalId: z.string().min(1).max(200).optional(),
  isPractical: z.boolean().optional().default(false),
  difficulty: DifficultySchema,
  subtopic: z.string().min(1).max(200).optional(),
  skipCache: z.boolean().optional(),
  examBoard: ExamBoardSchema.optional().default('aqa'),
  qualification: QualificationSchema.optional().default('gcse'),
  subject: SubjectSchema.optional().default('maths'),
  questionType: QuestionTypeSchema.optional().default('auto'),
  excludeContent: z.union([z.string(), z.array(z.string())]).optional(),
}).refine(
  (data) => data.topicId || data.practicalId,
  { message: 'Either topicId or practicalId is required' }
);

export type GenerateQuestionRequest = z.infer<typeof GenerateQuestionRequestSchema>;

// ============================================================================
// Paper Generation
// ============================================================================

export const PaperSectionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(100),
  instructions: z.string().max(500),
  questionTypes: z.array(z.string()).min(1),
  targetMarks: z.number().int().min(1).max(200),
  order: z.number().int().min(0),
});

export const DifficultyDistributionSchema = z.object({
  easy: z.number().min(0).max(100),
  medium: z.number().min(0).max(100),
  hard: z.number().min(0).max(100),
}).refine(
  (data) => data.easy + data.medium + data.hard === 100,
  { message: 'Difficulty percentages must sum to 100' }
);

export const QuestionTypeDistributionSchema = z.object({
  calculation: z.number().min(0).max(100),
  explain: z.number().min(0).max(100),
  dataAnalysis: z.number().min(0).max(100),
  extended: z.number().min(0).max(100),
  multipleChoice: z.number().min(0).max(100),
});

export const PaperSettingsSchema = z.object({
  includeFormulaSheet: z.boolean(),
  includeDataBooklet: z.boolean(),
  showMarks: z.boolean(),
  calculatorAllowed: z.boolean(),
  examConditions: z.boolean(),
});

export const PaperConfigSchema = z.object({
  totalMarks: z.number().int().min(10).max(300),
  timeLimit: z.number().int().min(10).max(300).nullable(),
  sections: z.array(PaperSectionSchema).min(1).max(10),
  selectedTopics: z.array(z.string()).min(1),
  selectedSubtopics: z.record(z.string(), z.array(z.string())),
  topicWeights: z.record(z.string(), z.number()).optional(),
  difficultyDistribution: DifficultyDistributionSchema,
  questionTypeDistribution: QuestionTypeDistributionSchema,
  settings: PaperSettingsSchema,
});

export const StartPaperRequestSchema = z.object({
  examBoard: ExamBoardSchema,
  qualification: QualificationSchema,
  subject: SubjectSchema,
  paperName: z.string().min(1).max(200).optional(),
  config: PaperConfigSchema,
});

export type StartPaperRequest = z.infer<typeof StartPaperRequestSchema>;

// ============================================================================
// Stripe / Payments
// ============================================================================

export const CreateCheckoutRequestSchema = z.object({
  priceKey: z.enum([
    'student_plus_monthly',
    'student_plus_annual',
    'exam_pro_monthly',
    'exam_pro_annual',
  ]),
  userId: z.string().uuid().optional(),
  returnUrl: z.string().url().optional(),
});

export type CreateCheckoutRequest = z.infer<typeof CreateCheckoutRequestSchema>;

// ============================================================================
// Progress Recording
// ============================================================================

export const RecordProgressRequestSchema = z.object({
  questionId: z.string().min(1).max(100),
  topicId: z.string().min(1).max(100),
  subtopic: z.string().min(1).max(200),
  subject: SubjectSchema,
  examBoard: ExamBoardSchema,
  qualification: QualificationSchema,
  isCorrect: z.boolean(),
  difficulty: DifficultySchema,
  marks: z.number().int().min(0).max(30),
  marksAwarded: z.number().int().min(0).max(30),
  timeSpent: z.number().int().min(0).max(3600).optional(), // Max 1 hour in seconds
});

export type RecordProgressRequest = z.infer<typeof RecordProgressRequestSchema>;

// ============================================================================
// Validation Helper
// ============================================================================

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: z.ZodIssue[];
}

/**
 * Validate request body against a Zod schema
 * Returns a standardized result object
 */
export function validateRequest<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  // Format error message
  const firstError = result.error.issues[0];
  const errorPath = firstError.path.join('.');
  const errorMessage = errorPath
    ? `${errorPath}: ${firstError.message}`
    : firstError.message;

  return {
    success: false,
    error: errorMessage,
    details: result.error.issues,
  };
}
