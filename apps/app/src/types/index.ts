import { DiagramSpec } from './diagram';

export type ExamBoard = 'aqa' | 'edexcel' | 'ocr';
export type QualificationLevel = 'gcse' | 'a-level';
export type Subject = 'maths' | 'physics' | 'chemistry' | 'biology' | 'combined-science' | 'computer-science' | 'economics' | 'business' | 'psychology' | 'geography' | 'history' | 'english-literature' | 'further-maths';

export interface SubjectInfo {
  id: Subject;
  name: string;
  fullName: string;
  description: string;
  icon: string;
}

export interface ExamBoardInfo {
  id: ExamBoard;
  name: string;
  fullName: string;
  description: string;
  specCode: string;
  qualifications: QualificationLevel[];
  subjects?: Subject[]; // Subjects this board offers (defaults to ['maths'] for backwards compatibility)
}

export interface QualificationInfo {
  id: QualificationLevel;
  name: string;
  fullName: string;
  description: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  subtopics: string[];
  examBoard?: ExamBoard; // Optional for backwards compatibility
  qualification?: QualificationLevel; // Optional for backwards compatibility (defaults to 'gcse')
  subject?: Subject; // Optional for backwards compatibility (defaults to 'maths')
  paperRestriction?: string; // For A Level or GCSE Science: which paper(s) this topic appears on
}

// Required Practical for science subjects
export interface Practical {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  // Standard subtopics for practical questions
  subtopics: PracticalSubtopic[];
  // Related theory topics that link to this practical
  linkedTopicIds?: string[];
  // Equipment used in this practical
  equipment?: string[];
  // Safety considerations
  safety?: string[];
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
}

// Standard subtopic types for practicals
export type PracticalSubtopic =
  | 'Method'
  | 'Variables'
  | 'Equipment'
  | 'Results Analysis'
  | 'Graph Skills'
  | 'Errors'
  | 'Improvements'
  | 'Safety';

// All standard practical subtopics
export const PRACTICAL_SUBTOPICS: PracticalSubtopic[] = [
  'Method',
  'Variables',
  'Equipment',
  'Results Analysis',
  'Graph Skills',
  'Errors',
  'Improvements',
  'Safety',
];

export interface Question {
  id: string;
  topicId: string;
  difficulty: Difficulty;
  content: string;
  marks: number;
  solution: string;
  markScheme: string[];
  diagram?: DiagramSpec;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TopicProgress {
  topicId: string;
  attempted: number;
  correct: number;
  lastPracticed: string;
}

export interface SessionProgress {
  questionsAttempted: number;
  questionsCorrect: number;
}

// ============================================================================
// PREMIUM PAPER GENERATION TYPES
// ============================================================================

export type QuestionType =
  | 'multiple-choice'
  | 'short-answer'
  | 'calculation'
  | 'explain'
  | 'extended'
  | 'data-analysis'
  | 'graph'
  | 'compare';

export interface PaperSection {
  id: string;
  name: string;
  instructions: string;
  questionTypes: QuestionType[];
  targetMarks: number;
  order: number;
}

export interface DifficultyDistribution {
  easy: number;
  medium: number;
  hard: number;
}

export interface QuestionTypeDistribution {
  calculation: number;
  explain: number;
  dataAnalysis: number;
  extended: number;
  multipleChoice: number;
}

export interface PaperSettings {
  includeFormulaSheet: boolean;
  includeDataBooklet: boolean;
  showMarks: boolean;
  calculatorAllowed: boolean;
  examConditions: boolean;
}

export interface PaperConfig {
  totalMarks: number;
  timeLimit: number | null;
  sections: PaperSection[];
  selectedTopics: string[];
  selectedSubtopics: Record<string, string[]>; // topicId -> subtopicIds[]
  topicWeights?: Record<string, number>;
  difficultyDistribution: DifficultyDistribution;
  questionTypeDistribution: QuestionTypeDistribution;
  settings: PaperSettings;
}

export interface PaperTemplate {
  id: string;
  name: string;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  config: PaperConfig;
  isPublic: boolean;
  isSystem: boolean;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GeneratedQuestion {
  id: string;
  questionNumber: string;
  content: string;
  marks: number;
  difficulty: Difficulty;
  questionType: QuestionType;
  topicId: string;
  subtopic: string;
  solution: string;
  markScheme: string[];
  diagram?: DiagramSpec;
}

export interface GeneratedSection {
  id: string;
  name: string;
  instructions: string;
  questions: GeneratedQuestion[];
  totalMarks: number;
}

export interface GeneratedPaper {
  id: string;
  templateId?: string;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  sections: GeneratedSection[];
  totalMarks: number;
  timeLimit: number | null;
  settings: PaperSettings;
  createdAt: string;
}

export interface PaperAttemptAnswer {
  id: string;
  attemptId: string;
  questionId: string;
  questionNumber: string;
  answer: string;
  marksAwarded?: number;
  marksAvailable: number;
  feedback?: string;
  isCorrect?: boolean;
}

export interface PaperAttempt {
  id: string;
  paperId: string;
  userId: string;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  totalMarks: number;
  score?: number;
  timeTaken?: number;
  answers: PaperAttemptAnswer[];
  completedAt?: string;
  createdAt: string;
}

// Quick-start template presets
export interface PaperTemplatePreset {
  id: string;
  name: string;
  description: string;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  totalMarks: number;
  duration: number;
  sections: Omit<PaperSection, 'id'>[];
  topicIds?: string[];
  calculator: boolean;
  formulaSheet: boolean;
}
