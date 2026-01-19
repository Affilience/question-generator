/**
 * Essay Subject Configuration - EXAM BOARD SPECIFIC
 *
 * Based on research into actual UK exam board specifications and mark schemes.
 * Each exam board has different mark allocations and assessment structures.
 *
 * KEY DIFFERENCES BY BOARD (A-Level Hard/Extended Essay marks):
 *
 * HISTORY:
 * - AQA: 25 marks (Section B evaluative essay)
 * - Edexcel: 20 marks (depth essay, choice of 2)
 * - OCR: 20 marks (long essay, choice of 2)
 *
 * ECONOMICS (Mixed format - short answers + essays):
 * - AQA: 25 marks (Section A data response final Q + Section B essay)
 * - Edexcel: 25 marks (Section C essay, choice of 2)
 * - OCR: 25 marks (extended essay)
 * Easy: definitions, calculations (2-4 marks)
 * Medium: explain/analyse (9-12 marks)
 *
 * BUSINESS (Mixed format - short answers + essays):
 * - AQA: 25 marks (two essay questions in Sections C and D)
 * - Edexcel: 20 marks (Paper 3 synoptic essay)
 * - OCR: 20 marks (extended essay, choice of 2)
 * Easy: definitions, calculations (4 marks)
 * Medium: analyse/explain (9-10 marks)
 *
 * PSYCHOLOGY (Mixed format - short answers + essays):
 * - AQA: 16 marks (6 AO1 + 10 AO3, or 6/6/4 for application)
 * - Edexcel: 20 marks (Paper 3 extended response)
 * - OCR: 18 marks (essay with evaluation)
 * Easy: definitions, short answers (4 marks)
 * Medium: explain/describe (8 marks)
 *
 * GEOGRAPHY (Mixed format - short answers + essays):
 * - AQA: 20 marks (evaluate/assess questions on Papers 1 & 2)
 * - Edexcel: 20 marks (Paper 1&2), 24 marks (Paper 3 synoptic)
 * - OCR: 33 marks (extended essay on Paper 3)
 * Easy: short answer, diagram interpretation (4-6 marks)
 * Medium: explain with evidence (9-16 marks depending on board)
 *
 * ENGLISH LITERATURE (Essay-only subject):
 * - AQA: 25 marks (Section A Shakespeare, Literature A)
 * - Edexcel: 40 marks per section (each section out of 40)
 * - OCR: 30 marks (Task 1 close reading, Task 2 comparative essay)
 *
 * BIOLOGY (Mixed format - extended writing varies by board):
 * - AQA: 25 marks (Paper 3 synoptic essay - draws from 4+ topic areas)
 * - Edexcel: 6 marks (extended response questions, no synoptic essay)
 * - OCR: 6 marks (extended response, synoptic through Unified Biology paper)
 * Easy: definitions, calculations (2-3 marks)
 * Medium: explain with data (4-6 marks)
 *
 * COMPUTER SCIENCE (Extended response essays):
 * - AQA: 12 marks (Paper 2 extended response, ethics/impact topics)
 * - Edexcel: 12 marks (extended response essays)
 * - OCR: 12 marks (asterisked questions requiring structured response)
 * Easy: definitions, calculations (2-3 marks)
 * Medium: explain algorithms/processes (6 marks)
 *
 * QUANTITATIVE SUBJECTS (Maths, Physics, Chemistry):
 * - Physics/Chemistry: 6-mark extended response only (level of response)
 * - Maths/Further Maths: No extended writing component
 * - These use quantitative question prompts, not essay configs
 */

import { Subject, QualificationLevel, ExamBoard, Difficulty } from '@/types';

// ============================================
// QUESTION FORMAT TYPES
// ============================================
// Defines the type of question format for mixed-format subjects
export type QuestionFormat =
  | 'definition'           // Define terms, state examples (1-4 marks)
  | 'calculation'          // Mathematical calculations, data interpretation
  | 'short_answer'         // Brief knowledge recall, outline, identify
  | 'diagram'              // Draw/label/explain diagrams
  | 'data_response'        // Analyse/interpret given data/extract
  | 'explain'              // Explain concepts, reasons, processes (medium marks)
  | 'analyse'              // Analyse with chains of reasoning
  | 'short_essay'          // Shorter evaluative response (8-15 marks)
  | 'extended_essay';      // Full essay with sustained argument (16+ marks)

// Assessment Objective definitions by subject
export interface AssessmentObjective {
  code: string;
  name: string;
  description: string;
  marks: number;
}

export interface LevelDescriptor {
  level: number;
  minMarks: number;
  maxMarks: number;
  description: string;
  characteristics: string[];
}

export interface EssayQuestionConfig {
  totalMarks: number;
  assessmentObjectives: AssessmentObjective[];
  levelDescriptors: LevelDescriptor[];
  commandWords: string[];
  questionStems: string[];
  requiresSustainedJudgement: boolean;
  requiresEvidence: boolean;
  requiresCounterArgument: boolean;
  // New fields for mixed-format subjects
  questionFormat?: QuestionFormat;        // The type of question format
  allowedFormats?: QuestionFormat[];      // Multiple formats allowed at this difficulty
  typicalTimeMinutes?: number;            // Suggested time allocation
  wordCountGuidance?: {                   // Word count guidance for essays
    min: number;
    max: number;
  };
  requiresDiagram?: boolean;              // Whether a diagram is typically required
  requiresCalculation?: boolean;          // Whether calculation may be involved
  requiresDataAnalysis?: boolean;         // Whether data/extract analysis is needed
  requiresCaseStudy?: boolean;            // Whether case study reference is needed
}

export interface DifficultyConfigs {
  easy: EssayQuestionConfig;
  medium: EssayQuestionConfig;
  hard: EssayQuestionConfig;
}

export interface BoardLevelConfig {
  gcse: DifficultyConfigs;
  alevel: DifficultyConfigs;
}

// Main config type: subject -> board -> level -> difficulty
export type SubjectBoardConfigs = {
  [board in ExamBoard]?: BoardLevelConfig;
};

// Legacy type for backwards compatibility with old configs
export interface SubjectEssayConfig {
  subject: Subject;
  gcse: DifficultyConfigs;
  alevel: DifficultyConfigs;
}

// ============================================
// HISTORY CONFIGURATION - BOARD SPECIFIC
// ============================================
// Shared GCSE config (similar across boards)
const historyGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],  // Includes source inference questions
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of key features', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Relevant detail'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Limited knowledge', 'General statements'] }
    ],
    commandWords: ['Describe', 'Give two features of', 'What can you infer'],
    questionStems: [
      'Describe two features of [historical event/period].',
      'Give two things you can infer from Source A about [topic].',
      'What can you learn from Source A about [aspect]?'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 8,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'data_response', 'analyse'],  // Source analysis + explanation
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 },
      { code: 'AO2', name: 'Explanation', description: 'Explain and analyse', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 7, maxMarks: 8, description: 'Complex', characteristics: ['Analytical explanation', 'Developed reasoning'] },
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Developed', characteristics: ['Explained analysis', 'Some developed points'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Simple', characteristics: ['Basic explanation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Generalised'] }
    ],
    commandWords: ['Explain why', 'Explain the importance of', 'How useful is Source A'],
    questionStems: [
      'Explain why [event happened/change occurred].',
      'Explain the importance of [event/person] for [consequence].',
      'How useful is Source A for an enquiry into [topic]? Explain your answer using Source A and your own knowledge.'
    ],
    typicalTimeMinutes: 10,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 16,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay', 'short_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 8 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse and evaluate to reach substantiated judgement', marks: 8 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Complex', characteristics: ['Sustained analytical focus', 'Substantiated judgement', 'Balanced argument'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Developed', characteristics: ['Some analytical focus', 'Supported judgement'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Simple', characteristics: ['Limited analysis', 'Partial judgement'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Basic', characteristics: ['Generalised statements', 'No clear judgement'] }
    ],
    commandWords: ['How far do you agree', 'To what extent'],
    questionStems: [
      '"[Statement]." How far do you agree with this statement?',
      'To what extent was [factor] the main reason for [event]?'
    ],
    typicalTimeMinutes: 20,
    wordCountGuidance: { min: 400, max: 600 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA History: 25-mark essays at A-Level
const historyAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 5,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],  // Source questions included
    assessmentObjectives: [{ code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 5 }],
    levelDescriptors: [
      { level: 3, minMarks: 4, maxMarks: 5, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Partial', characteristics: ['Some knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Limited', characteristics: ['Limited knowledge'] }
    ],
    commandWords: ['Outline', 'Identify', 'What can you learn from Source A'],
    questionStems: [
      'Outline two reasons why [event occurred].',
      'What can you learn from Source A about [topic]?'
    ],
    typicalTimeMinutes: 6,
    requiresSustainedJudgement: false, requiresEvidence: true, requiresCounterArgument: false
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'data_response', 'analyse'],  // Source analysis + explanation
    assessmentObjectives: [{ code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 10 }],
    levelDescriptors: [
      { level: 4, minMarks: 9, maxMarks: 10, description: 'Very Good', characteristics: ['Well-selected knowledge'] },
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Relevant knowledge'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Partial', characteristics: ['Some knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Limited knowledge'] }
    ],
    commandWords: ['Explain', 'Outline the significance of', 'How useful is Source A'],
    questionStems: [
      'Explain the significance of [event/person/change].',
      'How useful is Source A for an historian studying [topic]?'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false, requiresEvidence: true, requiresCounterArgument: false
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge & Understanding', description: 'Analyse and evaluate key features, making substantiated judgements exploring cause, consequence, change, continuity, similarity, difference and significance', marks: 25 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Very Good', characteristics: ['Very good understanding of full demands', 'Well-organised', 'Well-selected specific information', 'Fully analytical', 'Well-substantiated judgement'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good understanding', 'Well-organised', 'Analytical style'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Satisfactory', characteristics: ['Satisfactory understanding', 'Some analytical qualities'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Partial understanding', 'Descriptive approach'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Very limited understanding'] }
    ],
    commandWords: ['To what extent', 'Assess the validity of this view', 'How far do you agree'],
    questionStems: [
      '"[Historical interpretation spanning 20+ years]." Assess the validity of this view.',
      'To what extent was [factor] responsible for [major development]?',
      '"[Historian quote]." How far do you agree with this assessment?'
    ],
    typicalTimeMinutes: 40,
    wordCountGuidance: { min: 800, max: 1200 },
    requiresSustainedJudgement: true, requiresEvidence: true, requiresCounterArgument: true
  }
};

// Edexcel History: 20-mark essays at A-Level
const historyEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],  // Source questions included
    assessmentObjectives: [{ code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 }],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Give', 'Identify', 'What can you infer from Source A'],
    questionStems: [
      'Give one reason why [event occurred].',
      'What can you infer from Source A about [topic]?'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false, requiresEvidence: true, requiresCounterArgument: false
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'data_response', 'analyse'],  // Source analysis + explanation
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 5 },
      { code: 'AO2', name: 'Analysis', description: 'Analysis using second-order concepts', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 9, maxMarks: 10, description: 'Very Good', characteristics: ['Analytical and well-supported'] },
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Some analysis'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Partial', characteristics: ['Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Descriptive'] }
    ],
    commandWords: ['Explain why', 'Analyse', 'How useful is this source'],
    questionStems: [
      'Explain why [event] happened.',
      'How useful is this source for studying [topic]?'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false, requiresEvidence: true, requiresCounterArgument: false
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Accurate and relevant knowledge', marks: 10 },
      { code: 'AO2', name: 'Analysis', description: 'Analysis and evaluation reaching substantiated judgement', marks: 10 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Sustained analytical focus', 'Convincing argument', 'Substantiated judgement'] },
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Good', characteristics: ['Analytical with clear argument', 'Supported judgement'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Satisfactory', characteristics: ['Some analysis', 'Some judgement'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Limited', characteristics: ['Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Basic', characteristics: ['Descriptive only'] }
    ],
    commandWords: ['How far do you agree', 'To what extent', 'Assess'],
    questionStems: [
      'How far do you agree that [factor] was the main cause of [event]?',
      'To what extent was [development] successful?',
      '"[Statement]." How far do you agree with this view?'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: true, requiresEvidence: true, requiresCounterArgument: true
  }
};

// OCR History: 20-mark essays at A-Level (plus 10-mark short essay)
const historyOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 5,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],  // Source questions included
    assessmentObjectives: [{ code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 5 }],
    levelDescriptors: [
      { level: 3, minMarks: 4, maxMarks: 5, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Partial', characteristics: ['Some knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Limited', characteristics: ['Limited knowledge'] }
    ],
    commandWords: ['Identify', 'State', 'What does Source A suggest'],
    questionStems: [
      'Identify key features of [historical event/period].',
      'What does Source A suggest about [topic]?'
    ],
    typicalTimeMinutes: 6,
    requiresSustainedJudgement: false, requiresEvidence: true, requiresCounterArgument: false
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'data_response', 'explain'],  // Source analysis + comparison
    assessmentObjectives: [{ code: 'AO1', name: 'Analysis', description: 'Analysis and evaluation reaching supported judgement', marks: 10 }],
    levelDescriptors: [
      { level: 5, minMarks: 9, maxMarks: 10, description: 'Very Good', characteristics: ['Clear judgement', 'Well-supported'] },
      { level: 4, minMarks: 7, maxMarks: 8, description: 'Good', characteristics: ['Supported judgement'] },
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Satisfactory', characteristics: ['Some judgement'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Limited', characteristics: ['Limited judgement'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['No clear judgement'] }
    ],
    commandWords: ['Which was more significant', 'Compare the importance of', 'How far do Sources A and B agree'],
    questionStems: [
      'Which of the following was more significant: [A] or [B]? Explain your answer.',
      'How far do Sources A and B agree about [topic]?'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: true, requiresEvidence: true, requiresCounterArgument: false
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [{ code: 'AO1', name: 'Analysis & Evaluation', description: 'Analysis and evaluation reaching supported judgement on historical issues', marks: 20 }],
    levelDescriptors: [
      { level: 6, minMarks: 18, maxMarks: 20, description: 'Excellent', characteristics: ['Focused analytical discussion', 'Convincing substantiated judgement', 'Synthesis across period'] },
      { level: 5, minMarks: 15, maxMarks: 17, description: 'Very Good', characteristics: ['Focused analysis', 'Substantiated judgement'] },
      { level: 4, minMarks: 11, maxMarks: 14, description: 'Good', characteristics: ['Clear analysis', 'Supported judgement'] },
      { level: 3, minMarks: 7, maxMarks: 10, description: 'Satisfactory', characteristics: ['Some analysis', 'Some judgement'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Limited', characteristics: ['Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Minimal analysis'] }
    ],
    commandWords: ['To what extent', 'Assess', 'How far'],
    questionStems: [
      'To what extent was [factor] the main cause of [development] in the period [dates]?',
      'Assess the view that [interpretation] during [period].',
      'How far do you agree that [statement about change over time]?'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: true, requiresEvidence: true, requiresCounterArgument: true
  }
};

const historyConfigs: SubjectBoardConfigs = {
  aqa: { gcse: historyGcseShared, alevel: historyAqaAlevel },
  edexcel: { gcse: historyGcseShared, alevel: historyEdexcelAlevel },
  ocr: { gcse: historyGcseShared, alevel: historyOcrAlevel }
};

// ============================================
// ECONOMICS CONFIGURATION - BOARD SPECIFIC
// ============================================
// Research summary:
// - Edexcel: MCQs + short answer (easy), 5-12 mark data response (medium), 15-25 mark essays (hard)
// - AQA: 2-4 mark questions (easy), 9 mark diagram/explanation (medium), 15-25 mark essays (hard)
// - OCR: Short answer up to 4 marks (easy), 8-12 mark analysis (medium), 25 mark essays (hard)

// Shared GCSE Economics config (similar structure across boards)
const economicsGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 2,
    questionFormat: 'definition',
    allowedFormats: ['definition', 'short_answer', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terms, concepts and theories', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 2, description: 'Full', characteristics: ['Accurate definition', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Partial', characteristics: ['Partial understanding', 'Basic definition'] }
    ],
    commandWords: ['Define', 'State', 'Identify', 'Calculate', 'What is meant by'],
    questionStems: [
      'Define the term [economic concept].',
      'State one example of [economic concept].',
      'Calculate [economic measure] from the data.',
      'What is meant by [economic term]?'
    ],
    typicalTimeMinutes: 2,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'data_response', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge to context', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse economic issues', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Clear knowledge', 'Effective application', 'Developed analysis with chains of reasoning'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Limited application'] }
    ],
    commandWords: ['Explain', 'Using the data, explain', 'Analyse', 'Using a diagram, explain'],
    questionStems: [
      'Explain how [economic factor] affects [economic outcome].',
      'Using the data in Figure 1, explain [economic relationship].',
      'Analyse the impact of [policy/change] on [stakeholder/market].',
      'Using a diagram, explain the effect of [economic change] on [market].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDiagram: true,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 12,
    questionFormat: 'short_essay',
    allowedFormats: ['short_essay', 'analyse'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse', marks: 3 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluate and make judgements', marks: 3 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Good', characteristics: ['Sound knowledge', 'Effective application', 'Developed analysis with clear chains', 'Supported evaluation with judgement'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis', 'Some evaluation'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Limited', characteristics: ['Limited knowledge', 'Limited application', 'Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge only', 'Little development'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss'],
    questionStems: [
      'Evaluate the likely effects of [economic policy] on [economic outcome].',
      'Assess whether [economic change] is beneficial for [stakeholder].',
      'To what extent is [economic policy] likely to achieve [economic goal]?',
      'Discuss whether [government/business] should [economic decision].'
    ],
    typicalTimeMinutes: 15,
    wordCountGuidance: { min: 300, max: 500 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA A-Level Economics
const economicsAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'calculation', 'short_answer', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terminology and concepts', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Apply to data or context', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear calculation/interpretation', 'Relevant terminology'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Some errors', 'Partial calculation'] }
    ],
    commandWords: ['Calculate', 'Using the data', 'Explain', 'State', 'Identify'],
    questionStems: [
      'Calculate [economic measure] using the data. Show your working.',
      'Using the data in Extract A, identify [economic feature].',
      'Explain what is meant by [economic term].',
      'State two features of [economic concept].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true,
    requiresDataAnalysis: true
  },
  medium: {
    totalMarks: 9,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'diagram', 'analyse'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse with chains of reasoning', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge with few errors', 'Good application to context', 'Well-focused analysis with clear logical chains'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Satisfactory knowledge', 'Reasonable application', 'Some analysis with basic chains of reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Weak application', 'Limited analysis'] }
    ],
    commandWords: ['Using a diagram, explain', 'Analyse', 'Explain'],
    questionStems: [
      'Using an appropriate diagram, explain how [economic change] would affect [market/economy].',
      'Analyse the likely effects of [economic policy] on [economic outcome].',
      'Explain how [economic factor] might affect [economic indicator].'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDiagram: true
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terminology, concepts and principles', marks: 5 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding to various economic contexts', marks: 5 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse economic issues using appropriate concepts with well-developed chains of reasoning', marks: 7 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluate economic arguments, evidence and policies, making substantiated judgements', marks: 8 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Excellent response fully focused on key demands', 'Depth and range of knowledge precise and well-selected', 'Effective application with good use of data', 'Well-developed analysis with clear logical chains', 'Supported evaluation throughout with well-substantiated judgement'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good response focused on many demands', 'Good knowledge with few errors', 'Good application to context', 'Good analysis with clear chains', 'Evaluation with supported judgements'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Satisfactory', characteristics: ['Satisfactory focus on relevant issues', 'Satisfactory knowledge with some weaknesses', 'Reasonable application', 'Some reasonable analysis', 'Some evaluation but may be superficial'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Some focus on question', 'Limited knowledge with errors', 'Weak application', 'Limited analysis', 'Little or no evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Poor', characteristics: ['Limited understanding', 'Inaccurate knowledge', 'Very limited analysis', 'No evaluation'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss', 'Using the data and your knowledge, evaluate'],
    questionStems: [
      'Using the data in the extracts and your knowledge of economics, evaluate [economic policy/outcome].',
      'To what extent do you agree that [economic statement/policy]?',
      'Assess the likely impact of [economic policy/change] on [stakeholder/outcome].',
      'Evaluate the view that [economic argument].',
      '"[Quote about economic issue]." Discuss this statement with reference to the data.'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 800, max: 1200 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresDataAnalysis: true
  }
};

// Edexcel A-Level Economics
const economicsEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'calculation', 'short_answer', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application of knowledge', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Correct calculation', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Partially correct', 'Some errors'] }
    ],
    commandWords: ['Define', 'Calculate', 'State', 'Identify', 'What is', 'Draw'],
    requiresDiagram: true,
    questionStems: [
      'Define the term [economic concept].',
      'Calculate [economic measure]. Show your working.',
      'State two characteristics of [economic concept].',
      'Identify the type of [economic feature] shown in the data.'
    ],
    typicalTimeMinutes: 4,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'analyse',
    allowedFormats: ['explain', 'analyse', 'data_response', 'diagram'],
    assessmentObjectives: [
      { code: 'KAA', name: 'Knowledge, Application, Analysis', description: 'Knowledge, application and analysis', marks: 6 },
      { code: 'E', name: 'Evaluation', description: 'Evaluation', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 9, maxMarks: 10, description: 'Good', characteristics: ['Good knowledge', 'Effective application to context', 'Developed analysis', 'Some evaluation'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis', 'Limited evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Limited knowledge', 'Basic application', 'Undeveloped points'] }
    ],
    commandWords: ['Explain', 'With reference to the data, analyse', 'Examine', 'Using a diagram, explain'],
    questionStems: [
      'With reference to the data, analyse [economic issue].',
      'Explain how [economic factor] might affect [economic outcome].',
      'Examine the possible consequences of [economic change].',
      'Using an appropriate diagram, explain the effect of [economic change] on [market].'
    ],
    typicalTimeMinutes: 15,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true,
    requiresDiagram: true
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'KAA', name: 'Knowledge, Application, Analysis', description: 'Knowledge, application and chains of reasoning', marks: 15 },
      { code: 'E', name: 'Evaluation', description: 'Evaluation and substantiated judgement', marks: 10 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Excellent knowledge', 'Sophisticated application', 'Well-developed analytical chains', 'Balanced evaluation', 'Substantiated judgement throughout'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Clear analytical chains', 'Good evaluation with judgement'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analytical chains', 'Some evaluation'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Limited knowledge', 'Limited application', 'Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Basic knowledge', 'Minimal development'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss'],
    questionStems: [
      'Evaluate the likely effects of [economic policy] on [UK economy/specific sector].',
      'Assess whether [economic measure] is the most effective way to achieve [economic goal].',
      'To what extent do you agree that [economic argument]?',
      'Discuss whether the government should [economic policy decision].'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// OCR A-Level Economics
const economicsOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'calculation', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
    ],
    commandWords: ['Define', 'State', 'Explain briefly', 'Identify', 'Draw'],
    questionStems: [
      'Define [economic term].',
      'State two features of [economic concept].',
      'Briefly explain what is meant by [economic principle].',
      'Draw a diagram to show [economic concept].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresDiagram: true
  },
  medium: {
    totalMarks: 12,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis with evaluation', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Good', characteristics: ['Accurate knowledge', 'Well-applied', 'Clear analysis with judgement'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Reasonable', characteristics: ['Sound knowledge', 'Some application', 'Some analysis'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Limited', characteristics: ['Basic knowledge', 'Limited application'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Minimal knowledge'] }
    ],
    commandWords: ['Analyse', 'Explain', 'Using the data, explain', 'Using a diagram, explain'],
    questionStems: [
      'Analyse the likely effects of [economic change] on [market/economy].',
      'Explain how [economic policy] might affect [economic indicator].',
      'Using the data, explain [economic relationship].',
      'Using an appropriate diagram, analyse [economic concept/change].'
    ],
    typicalTimeMinutes: 20,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true,
    requiresDiagram: true
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 6 },
      { code: 'AO2', name: 'Application', description: 'Application to context', marks: 6 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis and evaluation', marks: 13 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Comprehensive knowledge', 'Sophisticated application', 'Thorough analysis', 'Evaluative throughout with substantiated conclusion'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Good analysis', 'Clear evaluation'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Sound', characteristics: ['Sound knowledge', 'Some application', 'Sound analysis', 'Some evaluation'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Limited knowledge', 'Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Basic knowledge only'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'Discuss', 'To what extent'],
    questionStems: [
      'Evaluate [economic policy] as a means of achieving [economic objective].',
      'Assess the view that [economic argument].',
      'Discuss the likely impact of [economic change] on [stakeholders].',
      'To what extent is [economic intervention] justified?'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

const economicsConfigs: SubjectBoardConfigs = {
  aqa: { gcse: economicsGcseShared, alevel: economicsAqaAlevel },
  edexcel: { gcse: economicsGcseShared, alevel: economicsEdexcelAlevel },
  ocr: { gcse: economicsGcseShared, alevel: economicsOcrAlevel }
};

// ============================================
// LEGACY ECONOMICS CONFIGURATION (kept for reference)
// ============================================
const economicsConfig: SubjectEssayConfig = {
  subject: 'economics',
  gcse: {
    easy: {
      totalMarks: 2,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terms and concepts', marks: 2 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 2, maxMarks: 2, description: 'Full', characteristics: ['Accurate definition', 'Clear understanding'] },
        { level: 1, minMarks: 1, maxMarks: 1, description: 'Partial', characteristics: ['Partial understanding', 'Basic definition'] }
      ],
      commandWords: ['Define', 'State', 'Identify'],
      questionStems: ['Define the term...', 'State one example of...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 6,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 2 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge to context', marks: 2 },
        { code: 'AO3', name: 'Analysis', description: 'Analyse economic issues', marks: 2 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Clear knowledge', 'Effective application', 'Developed analysis'] },
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Limited application'] }
      ],
      commandWords: ['Explain', 'Analyse', 'Using the data, explain'],
      questionStems: ['Explain how... affects...', 'Analyse the impact of... on...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 12,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
        { code: 'AO3', name: 'Analysis', description: 'Analyse', marks: 3 },
        { code: 'AO4', name: 'Evaluation', description: 'Evaluate and make judgements', marks: 3 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 10, maxMarks: 12, description: 'Good', characteristics: ['Sound knowledge', 'Effective application', 'Developed analysis', 'Supported evaluation with judgement'] },
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis', 'Some evaluation'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Limited', characteristics: ['Limited knowledge', 'Limited application', 'Limited analysis'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge only', 'Little development'] }
      ],
      commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss'],
      questionStems: ['Evaluate the likely effects of...', 'Assess whether... is beneficial for...', 'To what extent is... likely to...'],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  },
  alevel: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terminology and concepts', marks: 4 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding', 'Relevant terminology'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Some errors'] }
      ],
      commandWords: ['Define', 'Explain', 'Using a diagram, show'],
      questionStems: ['Define the term...', 'Explain what is meant by...', 'Using a diagram, show the effect of...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 9,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
        { code: 'AO3', name: 'Analysis', description: 'Analyse with chains of reasoning', marks: 3 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge with few errors', 'Good application to context', 'Well-focused analysis with clear reasoning'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Satisfactory knowledge', 'Reasonable application', 'Some analysis with basic chains of reasoning'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Weak application', 'Limited analysis'] }
      ],
      commandWords: ['Explain', 'Analyse', 'Using Extract, analyse'],
      questionStems: ['Explain how... might affect...', 'Analyse the likely impact of... on...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 25,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of economic terminology, concepts and principles', marks: 5 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding to various contexts', marks: 5 },
        { code: 'AO3', name: 'Analysis', description: 'Analyse economic issues using appropriate concepts with well-developed chains of reasoning', marks: 7 },
        { code: 'AO4', name: 'Evaluation', description: 'Evaluate economic arguments, evidence and policies, making substantiated judgements', marks: 8 }
      ],
      levelDescriptors: [
        { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Excellent response fully focused on key demands', 'Depth and range of knowledge that is precise and well-selected', 'Effective application to context with good use of data', 'Well-developed analysis with clear logical chains of reasoning', 'Supported evaluation throughout with well-substantiated judgement in conclusion'] },
        { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good response focused on many demands', 'Good knowledge and understanding with few errors', 'Good application to context', 'Good analysis with clear chains of reasoning', 'Evaluation with supported judgements'] },
        { level: 3, minMarks: 11, maxMarks: 15, description: 'Satisfactory', characteristics: ['Satisfactory focus on relevant issues', 'Satisfactory knowledge with some weaknesses', 'Reasonable application', 'Some reasonable analysis', 'Some evaluation but may be superficial'] },
        { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Some focus on question', 'Limited knowledge with errors', 'Weak application', 'Limited analysis', 'Little or no evaluation'] },
        { level: 1, minMarks: 1, maxMarks: 5, description: 'Poor', characteristics: ['Limited understanding', 'Inaccurate knowledge', 'Very limited analysis', 'No evaluation'] }
      ],
      commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss', 'Using the data in the extracts and your knowledge of economics, assess'],
      questionStems: [
        'Using the data in the extracts and your knowledge of economics, evaluate [economic policy/outcome].',
        'To what extent do you agree that [economic statement/policy recommendation]?',
        'Assess the likely impact of [economic policy/change] on [stakeholder/outcome].',
        'Evaluate the view that [economic argument].',
        '"[Quote about economic issue]." Discuss this statement.'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  }
};

// ============================================
// ENGLISH LITERATURE CONFIGURATION
// ============================================
const englishLiteratureConfig: SubjectEssayConfig = {
  subject: 'english-literature',
  gcse: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Read, understand and respond to texts', marks: 2 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse language and structure', marks: 2 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Clear understanding', 'Relevant textual reference'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Simple', characteristics: ['Simple awareness', 'Basic reference'] }
      ],
      commandWords: ['How does the writer present', 'What impression do you get of'],
      questionStems: ['In this extract, how does the writer present...?', 'What do you learn about... in this extract?'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 15,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Read, understand and respond with relevant references', marks: 5 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse language, form and structure', marks: 5 },
        { code: 'AO3', name: 'Context', description: 'Show understanding of contexts', marks: 5 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 12, maxMarks: 15, description: 'Perceptive', characteristics: ['Perceptive understanding', 'Judicious references', 'Sophisticated analysis'] },
        { level: 3, minMarks: 8, maxMarks: 11, description: 'Clear', characteristics: ['Clear understanding', 'Apt references', 'Clear analysis'] },
        { level: 2, minMarks: 4, maxMarks: 7, description: 'Supported', characteristics: ['Supported reference', 'Some valid analysis'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Simple', characteristics: ['Simple comments', 'Limited reference'] }
      ],
      commandWords: ['How does the writer present', 'Explore how'],
      questionStems: ['How does [author] present [theme/character] in [text]?', 'Explore how [author] presents [idea] in this extract and elsewhere in the novel.'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 30,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Informed personal response with apt references', marks: 12 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse methods using subject terminology', marks: 12 },
        { code: 'AO3', name: 'Context', description: 'Show understanding of relationships between texts and contexts', marks: 6 }
      ],
      levelDescriptors: [
        { level: 6, minMarks: 26, maxMarks: 30, description: 'Convincing', characteristics: ['Critical, exploratory response', 'Judicious, well-integrated references', 'Sophisticated analysis of methods', 'Convincing exploration of context'] },
        { level: 5, minMarks: 21, maxMarks: 25, description: 'Thoughtful', characteristics: ['Thoughtful, developed response', 'Apt, integrated references', 'Thoughtful analysis', 'Thoughtful consideration of context'] },
        { level: 4, minMarks: 16, maxMarks: 20, description: 'Clear', characteristics: ['Clear response', 'Effective references', 'Clear analysis', 'Clear understanding of context'] },
        { level: 3, minMarks: 11, maxMarks: 15, description: 'Explained', characteristics: ['Explained response', 'Effective use of references', 'Explained, relevant analysis'] },
        { level: 2, minMarks: 6, maxMarks: 10, description: 'Supported', characteristics: ['Supported reference to text', 'Some valid analysis', 'Some awareness of context'] },
        { level: 1, minMarks: 1, maxMarks: 5, description: 'Simple', characteristics: ['Simple comments', 'Limited references', 'Limited context'] }
      ],
      commandWords: ['How does the writer present', 'Explore how', 'To what extent do you agree'],
      questionStems: [
        'Starting with this extract, explore how [author] presents [theme/character/relationship].',
        'How does [author] use [technique/character/setting] to explore ideas about [theme]?',
        '"[Critical statement about text]." To what extent do you agree with this view?'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  },
  alevel: {
    easy: {
      totalMarks: 8,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Articulate informed response using terminology', marks: 4 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 4 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Informed response', 'Effective use of terminology', 'Developed analysis'] },
        { level: 2, minMarks: 3, maxMarks: 5, description: 'Developing', characteristics: ['Some understanding', 'Some relevant terminology', 'Some analysis'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited response', 'Basic expression'] }
      ],
      commandWords: ['How does the writer present', 'Examine'],
      questionStems: ['How does [author] present [element] in this passage?'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 20,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Informed, personal response with associated terminology', marks: 5 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 5 },
        { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of contexts', marks: 5 },
        { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 5 }
      ],
      levelDescriptors: [
        { level: 5, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Perceptive, personal engagement', 'Sophisticated terminology', 'Illuminating analysis', 'Excellent understanding of contexts'] },
        { level: 4, minMarks: 13, maxMarks: 16, description: 'Good', characteristics: ['Engaged response', 'Effective terminology', 'Well-developed analysis', 'Good understanding of contexts'] },
        { level: 3, minMarks: 9, maxMarks: 12, description: 'Sound', characteristics: ['Sound response', 'Appropriate terminology', 'Sound analysis', 'Sound understanding'] },
        { level: 2, minMarks: 5, maxMarks: 8, description: 'Developing', characteristics: ['Some engagement', 'Some terminology', 'Some analysis'] },
        { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Limited engagement', 'Limited analysis'] }
      ],
      commandWords: ['Explore how', 'Examine', 'Analyse'],
      questionStems: ['Explore how [author] presents [theme/character] in [text].', 'Examine the significance of [element] in [text].'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 25,
      assessmentObjectives: [
        { code: 'AO1', name: 'Response', description: 'Articulate informed, personal and creative responses using associated concepts and terminology, and coherent, accurate written expression', marks: 5 },
        { code: 'AO2', name: 'Analysis', description: 'Analyse ways in which meanings are shaped in literary texts', marks: 5 },
        { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of the significance and influence of contexts', marks: 5 },
        { code: 'AO4', name: 'Connections', description: 'Explore connections across literary texts', marks: 5 },
        { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 5 }
      ],
      levelDescriptors: [
        { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Perceptive, sophisticated argument', 'Assured use of terminology', 'Penetrating analysis of how meanings are shaped', 'Excellent evaluation of contextual factors', 'Illuminating connections across texts', 'Confident engagement with different readings'] },
        { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Coherent, well-developed argument', 'Effective use of terminology', 'Well-developed analysis', 'Good evaluation of contexts', 'Effective connections', 'Good engagement with interpretations'] },
        { level: 3, minMarks: 11, maxMarks: 15, description: 'Sound', characteristics: ['Clear argument', 'Appropriate terminology', 'Sound analysis', 'Sound evaluation of contexts', 'Some connections', 'Some engagement with interpretations'] },
        { level: 2, minMarks: 6, maxMarks: 10, description: 'Developing', characteristics: ['Some structure', 'Some appropriate terminology', 'Some analysis', 'Some awareness of context'] },
        { level: 1, minMarks: 1, maxMarks: 5, description: 'Limited', characteristics: ['Limited structure', 'Limited terminology', 'Limited analysis'] }
      ],
      commandWords: ['Compare', 'To what extent do you agree', 'Examine', 'Explore', 'Analyse'],
      questionStems: [
        'Compare how [authors] present [theme] in [texts].',
        '"[Critical quotation]." In the light of this statement, explore connections between [texts] in your paired texts.',
        'To what extent do you agree that [critical statement about text/s]?',
        'Examine the view that [interpretation] in [text/s].',
        'Explore the significance of [element] in [texts], considering the ways in which [authors] shape meaning.'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  }
};

// ============================================
// ENGLISH LITERATURE BOARD-SPECIFIC CONFIGS
// ============================================
// English Literature is essay-only (no mixed format) but boards have different mark allocations

// Shared GCSE config (all boards use similar structure)
const englishLitGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],  // Extract-based questions
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Read, understand and respond to texts', marks: 2 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse language and structure', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Clear understanding', 'Relevant textual reference'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Simple', characteristics: ['Simple awareness', 'Basic reference'] }
    ],
    commandWords: ['How does the writer present', 'What impression do you get of', 'What do you learn from this extract'],
    questionStems: [
      'In this extract, how does the writer present [character/theme]?',
      'What do you learn about [character/setting] in this extract?',
      'Read the following extract. What impression do you get of [character]?'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 15,
    questionFormat: 'short_essay',
    allowedFormats: ['short_essay', 'explain', 'analyse'],  // Analysis questions
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Read, understand and respond with relevant references', marks: 5 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse language, form and structure', marks: 5 },
      { code: 'AO3', name: 'Context', description: 'Show understanding of contexts', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 12, maxMarks: 15, description: 'Perceptive', characteristics: ['Perceptive understanding', 'Judicious references', 'Sophisticated analysis'] },
      { level: 3, minMarks: 8, maxMarks: 11, description: 'Clear', characteristics: ['Clear understanding', 'Apt references', 'Clear analysis'] },
      { level: 2, minMarks: 4, maxMarks: 7, description: 'Supported', characteristics: ['Supported reference', 'Some valid analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Simple', characteristics: ['Simple comments', 'Limited reference'] }
    ],
    commandWords: ['How does the writer present', 'Explore how', 'Explain how'],
    questionStems: [
      'How does [author] present [theme/character] in [text]?',
      'Explore how [author] presents [idea] in this extract and elsewhere in the novel.',
      'Explain how [author] uses [technique] to create effects in [text].'
    ],
    typicalTimeMinutes: 20,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 30,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Informed personal response with apt references', marks: 12 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse methods using subject terminology', marks: 12 },
      { code: 'AO3', name: 'Context', description: 'Show understanding of relationships between texts and contexts', marks: 6 }
    ],
    levelDescriptors: [
      { level: 6, minMarks: 26, maxMarks: 30, description: 'Convincing', characteristics: ['Critical, exploratory response', 'Judicious, well-integrated references', 'Sophisticated analysis of methods', 'Convincing exploration of context'] },
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Thoughtful', characteristics: ['Thoughtful, developed response', 'Apt, integrated references', 'Thoughtful analysis', 'Thoughtful consideration of context'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Clear', characteristics: ['Clear response', 'Effective references', 'Clear analysis', 'Clear understanding of context'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Explained', characteristics: ['Explained response', 'Effective use of references', 'Explained, relevant analysis'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Supported', characteristics: ['Supported reference to text', 'Some valid analysis', 'Some awareness of context'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Simple', characteristics: ['Simple comments', 'Limited references', 'Limited context'] }
    ],
    commandWords: ['How does the writer present', 'Explore how', 'To what extent do you agree'],
    questionStems: [
      'Starting with this extract, explore how [author] presents [theme/character/relationship].',
      'How does [author] use [technique/character/setting] to explore ideas about [theme]?',
      '"[Critical statement about text]." To what extent do you agree with this view?'
    ],
    typicalTimeMinutes: 45,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA A-Level English Literature - 25 marks for extended essays
const englishLitAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 8,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed response using terminology', marks: 4 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Informed response', 'Effective use of terminology', 'Developed analysis'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Developing', characteristics: ['Some understanding', 'Some relevant terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited response', 'Basic expression'] }
    ],
    commandWords: ['How does the writer present', 'Examine'],
    questionStems: ['How does [author] present [element] in this passage?'],
    questionFormat: 'short_answer',
    typicalTimeMinutes: 10,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 15,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Informed, personal response with associated terminology', marks: 4 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 4 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of contexts', marks: 4 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 3 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 12, maxMarks: 15, description: 'Good', characteristics: ['Engaged response', 'Effective terminology', 'Well-developed analysis', 'Good understanding of contexts'] },
      { level: 3, minMarks: 8, maxMarks: 11, description: 'Sound', characteristics: ['Sound response', 'Appropriate terminology', 'Sound analysis', 'Sound understanding'] },
      { level: 2, minMarks: 4, maxMarks: 7, description: 'Developing', characteristics: ['Some engagement', 'Some terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited engagement', 'Limited analysis'] }
    ],
    commandWords: ['Explore how', 'Examine', 'Analyse'],
    questionStems: ['Explore how [author] presents [theme/character] in [text].', 'Examine the significance of [element] in [text].'],
    questionFormat: 'short_essay',
    typicalTimeMinutes: 25,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 25,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed, personal and creative responses using associated concepts and terminology, and coherent, accurate written expression', marks: 5 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways in which meanings are shaped in literary texts', marks: 5 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of the significance and influence of contexts', marks: 5 },
      { code: 'AO4', name: 'Connections', description: 'Explore connections across literary texts', marks: 5 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 5 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Perceptive, sophisticated argument', 'Assured use of terminology', 'Penetrating analysis of how meanings are shaped', 'Excellent evaluation of contextual factors', 'Illuminating connections across texts', 'Confident engagement with different readings'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Coherent, well-developed argument', 'Effective use of terminology', 'Well-developed analysis', 'Good evaluation of contexts', 'Effective connections', 'Good engagement with interpretations'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Sound', characteristics: ['Clear argument', 'Appropriate terminology', 'Sound analysis', 'Sound evaluation of contexts', 'Some connections', 'Some engagement with interpretations'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Developing', characteristics: ['Some structure', 'Some appropriate terminology', 'Some analysis', 'Some awareness of context'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Limited', characteristics: ['Limited structure', 'Limited terminology', 'Limited analysis'] }
    ],
    commandWords: ['Compare', 'To what extent do you agree', 'Examine', 'Explore', 'Analyse'],
    questionStems: [
      'Compare how [authors] present [theme] in [texts].',
      '"[Critical quotation]." In the light of this statement, explore connections between [texts].',
      'To what extent do you agree that [critical statement about text/s]?',
      'Examine the view that [interpretation] in [text/s].'
    ],
    questionFormat: 'extended_essay',
    typicalTimeMinutes: 45,
    wordCountGuidance: { min: 800, max: 1100 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// Edexcel A-Level English Literature - 40 marks for extended essays
const englishLitEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 10,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed response using terminology', marks: 5 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 5 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 8, maxMarks: 10, description: 'Good', characteristics: ['Informed response', 'Effective use of terminology', 'Developed analysis'] },
      { level: 2, minMarks: 4, maxMarks: 7, description: 'Developing', characteristics: ['Some understanding', 'Some relevant terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited response', 'Basic expression'] }
    ],
    commandWords: ['How does the writer present', 'Examine', 'Analyse'],
    questionStems: ['How does [author] present [element] in this extract?', 'Analyse the ways in which [author] creates [effect] in this passage.'],
    questionFormat: 'short_answer',
    typicalTimeMinutes: 15,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 20,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Informed, personal response with associated terminology', marks: 5 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 5 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of contexts', marks: 5 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 5 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Perceptive, personal engagement', 'Sophisticated terminology', 'Illuminating analysis', 'Excellent understanding of contexts'] },
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Good', characteristics: ['Engaged response', 'Effective terminology', 'Well-developed analysis', 'Good understanding of contexts'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Sound', characteristics: ['Sound response', 'Appropriate terminology', 'Sound analysis', 'Sound understanding'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Developing', characteristics: ['Some engagement', 'Some terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Limited engagement', 'Limited analysis'] }
    ],
    commandWords: ['Explore how', 'Examine', 'Analyse', 'How far'],
    questionStems: ['Explore how [author] presents [theme/character] in [text].', 'Examine the significance of [element] in [text].', 'How far do you agree that [critical statement]?'],
    questionFormat: 'short_essay',
    typicalTimeMinutes: 30,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 40,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed, personal and creative responses using associated concepts and terminology, and coherent, accurate written expression', marks: 8 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways in which meanings are shaped in literary texts', marks: 8 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of the significance and influence of contexts', marks: 8 },
      { code: 'AO4', name: 'Connections', description: 'Explore connections across literary texts', marks: 8 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 8 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 33, maxMarks: 40, description: 'Excellent', characteristics: ['Perceptive, sophisticated argument', 'Assured use of terminology', 'Penetrating analysis of how meanings are shaped', 'Excellent evaluation of contextual factors', 'Illuminating connections across texts', 'Confident engagement with different readings'] },
      { level: 4, minMarks: 25, maxMarks: 32, description: 'Good', characteristics: ['Coherent, well-developed argument', 'Effective use of terminology', 'Well-developed analysis', 'Good evaluation of contexts', 'Effective connections', 'Good engagement with interpretations'] },
      { level: 3, minMarks: 17, maxMarks: 24, description: 'Sound', characteristics: ['Clear argument', 'Appropriate terminology', 'Sound analysis', 'Sound evaluation of contexts', 'Some connections', 'Some engagement with interpretations'] },
      { level: 2, minMarks: 9, maxMarks: 16, description: 'Developing', characteristics: ['Some structure', 'Some appropriate terminology', 'Some analysis', 'Some awareness of context'] },
      { level: 1, minMarks: 1, maxMarks: 8, description: 'Limited', characteristics: ['Limited structure', 'Limited terminology', 'Limited analysis'] }
    ],
    commandWords: ['Compare', 'To what extent do you agree', 'Examine', 'Explore', 'Analyse', 'How far do you agree'],
    questionStems: [
      'Compare how [authors] present [theme] in [texts].',
      '"[Critical quotation]." In the light of this statement, explore connections between the texts you have studied.',
      'To what extent do you agree that [critical statement about text/s]?',
      'Examine the significance of [element] in [text] and [comparison text].',
      'How far do you agree that [critical view] is central to [text]?'
    ],
    questionFormat: 'extended_essay',
    typicalTimeMinutes: 60,
    wordCountGuidance: { min: 1000, max: 1400 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// OCR A-Level English Literature - 30 marks for comparative essays
const englishLitOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 8,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed response using terminology', marks: 4 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Informed response', 'Effective use of terminology', 'Developed analysis'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Developing', characteristics: ['Some understanding', 'Some relevant terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited response', 'Basic expression'] }
    ],
    commandWords: ['How does the writer present', 'Examine', 'Analyse'],
    questionStems: ['How does [author] present [element] in this passage?', 'Examine the ways in which [author] uses [technique] in this extract.'],
    questionFormat: 'short_answer',
    typicalTimeMinutes: 10,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 15,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Informed, personal response with associated terminology', marks: 4 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways meanings are shaped', marks: 4 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of contexts', marks: 4 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 3 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 12, maxMarks: 15, description: 'Good', characteristics: ['Engaged response', 'Effective terminology', 'Well-developed analysis', 'Good understanding of contexts'] },
      { level: 3, minMarks: 8, maxMarks: 11, description: 'Sound', characteristics: ['Sound response', 'Appropriate terminology', 'Sound analysis', 'Sound understanding'] },
      { level: 2, minMarks: 4, maxMarks: 7, description: 'Developing', characteristics: ['Some engagement', 'Some terminology', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited engagement', 'Limited analysis'] }
    ],
    commandWords: ['Explore how', 'Examine', 'Analyse'],
    questionStems: ['Explore how [author] presents [theme/character] in [text].', 'Examine the significance of [element] in [text].'],
    questionFormat: 'short_essay',
    typicalTimeMinutes: 25,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 30,
    assessmentObjectives: [
      { code: 'AO1', name: 'Response', description: 'Articulate informed, personal and creative responses using associated concepts and terminology, and coherent, accurate written expression', marks: 6 },
      { code: 'AO2', name: 'Analysis', description: 'Analyse ways in which meanings are shaped in literary texts', marks: 6 },
      { code: 'AO3', name: 'Context', description: 'Demonstrate understanding of the significance and influence of contexts', marks: 6 },
      { code: 'AO4', name: 'Connections', description: 'Explore connections across literary texts', marks: 6 },
      { code: 'AO5', name: 'Interpretation', description: 'Explore literary texts informed by different interpretations', marks: 6 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 25, maxMarks: 30, description: 'Excellent', characteristics: ['Perceptive, sophisticated argument', 'Assured use of terminology', 'Penetrating analysis of how meanings are shaped', 'Excellent evaluation of contextual factors', 'Illuminating connections across texts', 'Confident engagement with different readings'] },
      { level: 4, minMarks: 19, maxMarks: 24, description: 'Good', characteristics: ['Coherent, well-developed argument', 'Effective use of terminology', 'Well-developed analysis', 'Good evaluation of contexts', 'Effective connections', 'Good engagement with interpretations'] },
      { level: 3, minMarks: 13, maxMarks: 18, description: 'Sound', characteristics: ['Clear argument', 'Appropriate terminology', 'Sound analysis', 'Sound evaluation of contexts', 'Some connections', 'Some engagement with interpretations'] },
      { level: 2, minMarks: 7, maxMarks: 12, description: 'Developing', characteristics: ['Some structure', 'Some appropriate terminology', 'Some analysis', 'Some awareness of context'] },
      { level: 1, minMarks: 1, maxMarks: 6, description: 'Limited', characteristics: ['Limited structure', 'Limited terminology', 'Limited analysis'] }
    ],
    commandWords: ['Compare', 'To what extent do you agree', 'Examine', 'Explore', 'Discuss'],
    questionStems: [
      'Compare how [authors] present [theme] in [texts].',
      '"[Critical quotation]." Discuss this view with reference to two texts you have studied.',
      'To what extent do you agree that [critical statement about text/s]?',
      'Examine the view that [interpretation] in your comparative texts.'
    ],
    questionFormat: 'extended_essay',
    typicalTimeMinutes: 45,
    wordCountGuidance: { min: 800, max: 1200 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

const englishLitConfigs: SubjectBoardConfigs = {
  aqa: { gcse: englishLitGcseShared, alevel: englishLitAqaAlevel },
  edexcel: { gcse: englishLitGcseShared, alevel: englishLitEdexcelAlevel },
  ocr: { gcse: englishLitGcseShared, alevel: englishLitOcrAlevel }
};

// ============================================
// PSYCHOLOGY CONFIGURATION
// ============================================
const psychologyConfig: SubjectEssayConfig = {
  subject: 'psychology',
  gcse: {
    easy: {
      totalMarks: 2,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of psychological concepts', marks: 2 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 2, maxMarks: 2, description: 'Accurate', characteristics: ['Accurate description'] },
        { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Basic understanding'] }
      ],
      commandWords: ['Define', 'State', 'Identify', 'Outline'],
      questionStems: ['Define what is meant by...', 'State one feature of...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 6,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
        { code: 'AO3', name: 'Evaluation', description: 'Analyse and evaluate', marks: 3 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Accurate knowledge', 'Effective evaluation'] },
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some evaluation'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Limited evaluation'] }
      ],
      commandWords: ['Explain', 'Describe and evaluate'],
      questionStems: ['Explain one strength and one limitation of...', 'Describe and evaluate...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 12,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 6 },
        { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate', marks: 6 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Accurate, well-detailed knowledge', 'Thorough, effective evaluation', 'Clear, coherent, focused'] },
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Good evaluation', 'Mostly clear'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some evaluation', 'Some clarity'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Limited knowledge', 'Limited evaluation'] }
      ],
      commandWords: ['Describe and evaluate', 'Discuss', 'Evaluate'],
      questionStems: ['Describe and evaluate [theory/study/approach].', 'Discuss [psychological concept/debate].'],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  },
  alevel: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of scientific ideas', marks: 4 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Accurate', characteristics: ['Accurate, detailed knowledge', 'Clear understanding'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
      ],
      commandWords: ['Outline', 'Describe', 'Explain'],
      questionStems: ['Outline one...', 'Describe what is meant by...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 8,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 4 },
        { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate', marks: 4 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 7, maxMarks: 8, description: 'Clear', characteristics: ['Accurate, detailed knowledge', 'Effective evaluation', 'Clear, coherent'] },
        { level: 3, minMarks: 5, maxMarks: 6, description: 'Reasonable', characteristics: ['Knowledge evident', 'Reasonable evaluation', 'Mostly clear'] },
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Basic', characteristics: ['Basic knowledge', 'Some evaluation'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited knowledge', 'Little evaluation'] }
      ],
      commandWords: ['Outline and evaluate', 'Briefly discuss'],
      questionStems: ['Outline and evaluate research into...', 'Briefly discuss...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 16,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures', marks: 6 },
        { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate scientific information, ideas and evidence to make judgements and reach conclusions', marks: 10 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 13, maxMarks: 16, description: 'Excellent', characteristics: ['Knowledge is accurate and generally well detailed', 'Discussion is thorough and effective', 'Minor detail and/or expansion of argument sometimes lacking', 'Clear, coherent and focused', 'Specialist terminology used effectively'] },
        { level: 3, minMarks: 9, maxMarks: 12, description: 'Good', characteristics: ['Knowledge is evident', 'Some occasional inaccuracies', 'Discussion is apparent and mostly effective', 'Mostly clear and organised', 'Specialist terminology mostly used effectively', 'Lacks focus in places'] },
        { level: 2, minMarks: 5, maxMarks: 8, description: 'Reasonable', characteristics: ['Knowledge is present', 'Significant inaccuracy evident', 'Discussion is limited', 'Lacks clarity, accuracy and organisation in places', 'Specialist terminology sometimes used effectively'] },
        { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Knowledge is limited', 'Discussion is limited, poorly focused or absent', 'Specialist terminology either absent or inappropriately used'] }
      ],
      commandWords: ['Discuss', 'Outline and evaluate', 'Describe and evaluate'],
      questionStems: [
        'Discuss [psychological explanation/theory/debate]. Refer to evidence in your answer.',
        'Outline and evaluate [psychological explanation/research] for [behaviour/phenomenon].',
        '[Stem providing scenario] Using your knowledge of psychology, discuss [topic related to scenario].'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  }
};

// ============================================
// GEOGRAPHY CONFIGURATION
// ============================================
const geographyConfig: SubjectEssayConfig = {
  subject: 'geography',
  gcse: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of locations, places, processes', marks: 4 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Accurate knowledge', 'Clear understanding'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
      ],
      commandWords: ['Describe', 'State', 'Define'],
      questionStems: ['Describe the distribution of...', 'Define the term...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 6,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge to interpret, analyse', marks: 3 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 5, maxMarks: 6, description: 'Detailed', characteristics: ['Detailed knowledge', 'Thorough application'] },
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Clear knowledge', 'Some application'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] }
      ],
      commandWords: ['Explain', 'Suggest reasons for'],
      questionStems: ['Explain how...', 'Suggest reasons why...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 9,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
        { code: 'AO3', name: 'Evaluation', description: 'Evaluate information and construct arguments', marks: 3 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Detailed', characteristics: ['Detailed knowledge with place-specific detail', 'Thorough application', 'Well-developed evaluation with reasoned conclusion'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Clear', characteristics: ['Clear knowledge', 'Some application', 'Some evaluation'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application', 'Limited evaluation'] }
      ],
      commandWords: ['To what extent', 'Assess', 'Evaluate', 'Discuss'],
      questionStems: ['To what extent do you agree with this statement?', 'Assess the effectiveness of...', 'Evaluate the advantages and disadvantages of...'],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  },
  alevel: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Accurate knowledge', 'Clear understanding'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
      ],
      commandWords: ['Explain', 'Describe', 'Outline'],
      questionStems: ['Explain the process of...', 'Outline the characteristics of...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 9,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 5 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 4 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Detailed', characteristics: ['Accurate, detailed knowledge', 'Thorough application', 'Well-developed explanation'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Clear', characteristics: ['Clear knowledge', 'Some application'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] }
      ],
      commandWords: ['Explain', 'Analyse', 'Examine'],
      questionStems: ['Explain how... affects...', 'Analyse the factors that...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 20,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change, at a variety of scales', marks: 10 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues', marks: 10 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 16, maxMarks: 20, description: 'Excellent', characteristics: ['Detailed, accurate knowledge with well-chosen examples', 'Sophisticated understanding of concepts', 'Thorough application to context', 'Well-developed evaluation leading to clear, substantiated conclusion'] },
        { level: 3, minMarks: 11, maxMarks: 15, description: 'Good', characteristics: ['Good knowledge with some detailed examples', 'Good understanding of concepts', 'Clear application', 'Clear evaluation with supported conclusion'] },
        { level: 2, minMarks: 6, maxMarks: 10, description: 'Reasonable', characteristics: ['Some knowledge and understanding', 'Some application', 'Limited evaluation'] },
        { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Basic knowledge', 'Weak application', 'Little or no evaluation'] }
      ],
      commandWords: ['To what extent', 'Assess', 'Evaluate', '"Quote." Discuss.'],
      questionStems: [
        'To what extent do [factors] influence [geographical process/pattern]?',
        'Assess the view that [statement about geographical issue].',
        '"[Statement about geographical issue]." With reference to a [location/case study], evaluate this view.',
        'Evaluate the success of [strategy/approach] in addressing [geographical challenge].'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  }
};

// ============================================
// BUSINESS CONFIGURATION
// ============================================
const businessConfig: SubjectEssayConfig = {
  subject: 'business',
  gcse: {
    easy: {
      totalMarks: 2,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of business terms and concepts', marks: 2 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 2, maxMarks: 2, description: 'Full', characteristics: ['Accurate knowledge'] },
        { level: 1, minMarks: 1, maxMarks: 1, description: 'Partial', characteristics: ['Basic knowledge'] }
      ],
      commandWords: ['Define', 'State', 'Identify'],
      questionStems: ['Define the term...', 'State one reason why...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 6,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
        { code: 'AO2', name: 'Application', description: 'Application', marks: 2 },
        { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 2 }
      ],
      levelDescriptors: [
        { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Developed analysis'] },
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
      ],
      commandWords: ['Explain', 'Analyse'],
      questionStems: ['Explain how... might affect...', 'Analyse the impact of...'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 12,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
        { code: 'AO2', name: 'Application', description: 'Application', marks: 2 },
        { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 4 },
        { code: 'AO4', name: 'Evaluation', description: 'Evaluation', marks: 4 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Sound knowledge', 'Effective application', 'Developed analysis', 'Evaluation with supported judgement'] },
        { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Good analysis', 'Some evaluation'] },
        { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
        { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited development'] }
      ],
      commandWords: ['Evaluate', 'Justify', 'Recommend', 'Do you think'],
      questionStems: ['Evaluate whether...', 'Justify why [business] should...', 'Do you think [strategy] is the best option for [business]? Justify your answer.'],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  },
  alevel: {
    easy: {
      totalMarks: 4,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of business terms, concepts, theories', marks: 4 }
      ],
      levelDescriptors: [
        { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
        { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge'] }
      ],
      commandWords: ['Define', 'State', 'Explain'],
      questionStems: ['Define...', 'Explain what is meant by...'],
      requiresSustainedJudgement: false,
      requiresEvidence: false,
      requiresCounterArgument: false
    },
    medium: {
      totalMarks: 10,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
        { code: 'AO2', name: 'Application', description: 'Application', marks: 2 },
        { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 6 }
      ],
      levelDescriptors: [
        { level: 4, minMarks: 8, maxMarks: 10, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Well-developed analysis'] },
        { level: 3, minMarks: 5, maxMarks: 7, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis'] },
        { level: 2, minMarks: 2, maxMarks: 4, description: 'Basic', characteristics: ['Basic knowledge', 'Limited analysis'] },
        { level: 1, minMarks: 1, maxMarks: 1, description: 'Limited', characteristics: ['Very limited response'] }
      ],
      commandWords: ['Analyse', 'Explain'],
      questionStems: ['Analyse the benefits to [business] of...', 'Explain the importance of... for [business].'],
      requiresSustainedJudgement: false,
      requiresEvidence: true,
      requiresCounterArgument: false
    },
    hard: {
      totalMarks: 25,
      assessmentObjectives: [
        { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of terms, concepts, theories, methods and models', marks: 5 },
        { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding to various business contexts', marks: 4 },
        { code: 'AO3', name: 'Analysis', description: 'Analyse issues within business using appropriate concepts', marks: 6 },
        { code: 'AO4', name: 'Evaluation', description: 'Evaluate quantitative and qualitative information to make informed judgements', marks: 10 }
      ],
      levelDescriptors: [
        { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Excellent response fully focused on key demands', 'Depth and range of knowledge that is precise and well-selected', 'Effective application to context', 'Well-developed analysis applied to context', 'Judgements built effectively on analysis, show balance, clear focus throughout'] },
        { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good response focused on many demands', 'Good knowledge and understanding', 'Good application', 'Good analysis with clear chains of reasoning', 'Evaluative comments supported with some balance'] },
        { level: 3, minMarks: 11, maxMarks: 15, description: 'Reasonable', characteristics: ['Reasonable response with some relevant issues', 'Reasonable knowledge', 'Some application', 'Some analysis but not sustained', 'Some evaluative comment'] },
        { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Limited focus on question', 'Limited knowledge', 'Limited application', 'Some limited analysis', 'Limited evaluative comment'] },
        { level: 1, minMarks: 1, maxMarks: 5, description: 'Poor', characteristics: ['Little or no understanding', 'Minimal application', 'Little analysis', 'No evaluation'] }
      ],
      commandWords: ['Evaluate', 'To what extent', 'Assess', 'Recommend', 'Justify'],
      questionStems: [
        'Evaluate the likely impact of [business decision/change] on [business/stakeholders].',
        'To what extent do you agree that [business strategy/factor] is the most important factor in [business success/outcome]?',
        'Assess the case for and against [business/strategic decision].',
        '[Business scenario provided] Recommend whether [business] should [strategic option]. Justify your answer.'
      ],
      requiresSustainedJudgement: true,
      requiresEvidence: true,
      requiresCounterArgument: true
    }
  }
};

// ============================================
// BUSINESS CONFIGURATION - BOARD SPECIFIC
// ============================================
// Research summary:
// - AQA: MCQs + 4 marks (easy), 9-16 mark analyse (medium), 20-25 mark evaluate essays (hard)
// - Edexcel: 4-6 mark definitions (easy), 8-10 mark analyse (medium), 12-20 mark evaluate (hard)
// - OCR: Similar to AQA structure

// Shared GCSE Business config
const businessGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 2,
    questionFormat: 'definition',
    allowedFormats: ['definition', 'short_answer', 'calculation'],  // Added calculation
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of business terms and concepts', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 2, description: 'Full', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Partial', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Define', 'State', 'Identify', 'Give', 'Calculate'],
    questionStems: [
      'Define the term [business concept].',
      'State one reason why [business decision].',
      'Identify two features of [business concept].',
      'Calculate the [profit/revenue/percentage] from the data.'
    ],
    typicalTimeMinutes: 2,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse', 'calculation', 'data_response'],  // Added data_response for case studies
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application to context', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Developed analysis'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Explain', 'Analyse', 'Calculate', 'Using the information'],
    questionStems: [
      'Explain how [business factor] might affect [business].',
      'Analyse the impact of [business change] on [stakeholder].',
      'Calculate [business measure] and explain its significance.',
      'Using the information in the case study, explain [business issue].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresCalculation: true,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 9,
    questionFormat: 'short_essay',
    allowedFormats: ['short_essay', 'analyse', 'data_response'],  // Added data_response
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 2 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluation', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Sound knowledge', 'Effective application', 'Developed analysis', 'Supported evaluation with judgement'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited development'] }
    ],
    commandWords: ['Justify', 'Recommend', 'Evaluate', 'Do you think', 'Using the case study'],
    questionStems: [
      'Justify why [business] should [business decision].',
      'Recommend whether [business] should [strategic option]. Give reasons for your answer.',
      'Do you think [business strategy] is the best option for [business]? Justify your answer.',
      'Using the case study, evaluate whether [business] should [strategic decision].'
    ],
    typicalTimeMinutes: 12,
    wordCountGuidance: { min: 200, max: 350 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA A-Level Business
const businessAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge of business terms, concepts, theories', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Define', 'State', 'Explain', 'Calculate'],
    questionStems: [
      'Define the term [business concept].',
      'State two features of [business concept].',
      'Explain what is meant by [business term].',
      'Calculate [business ratio/measure] using the data.'
    ],
    typicalTimeMinutes: 4,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 9,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application to business context', marks: 3 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis with chains of reasoning', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Effective application to context', 'Well-developed analysis with clear chains'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Limited analysis'] }
    ],
    commandWords: ['Analyse', 'Explain the importance of', 'Examine'],
    questionStems: [
      'Analyse the benefits to [business] of [business strategy/change].',
      'Explain the importance of [business concept] for [business].',
      'Examine how [business factor] might affect [business outcome].'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge of business terms, concepts, theories', marks: 5 },
      { code: 'AO2', name: 'Application', description: 'Application to business context', marks: 4 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis with appropriate concepts', marks: 6 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluation to make informed judgements', marks: 10 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Excellent response fully focused', 'Precise, well-selected knowledge', 'Effective application to context', 'Well-developed analysis', 'Judgements built effectively, show balance'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good response focused on many demands', 'Good knowledge', 'Good application', 'Good analysis with clear chains', 'Evaluative comments with some balance'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Reasonable', characteristics: ['Reasonable response', 'Reasonable knowledge', 'Some application', 'Some analysis', 'Some evaluative comment'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Limited focus', 'Limited knowledge', 'Limited application', 'Some limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Poor', characteristics: ['Little understanding', 'Minimal application', 'Little analysis', 'No evaluation'] }
    ],
    commandWords: ['Evaluate', 'To what extent', 'Assess', 'Recommend', 'Justify'],
    questionStems: [
      'Evaluate the likely impact of [business decision/change] on [business/stakeholders].',
      'To what extent do you agree that [business strategy] is the most important factor in [business success]?',
      'Assess the case for and against [strategic decision].',
      '[Business scenario] Recommend whether [business] should [strategic option]. Justify your answer.'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

// Edexcel A-Level Business
const businessEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1a', name: 'Knowledge', description: 'Knowledge of business terms', marks: 2 },
      { code: 'AO1b', name: 'Understanding', description: 'Understanding of business concepts', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic knowledge', 'Some understanding'] }
    ],
    commandWords: ['Define', 'State', 'Calculate', 'Identify'],
    questionStems: [
      'Define the term [business concept].',
      'Calculate [business measure]. Show your working.',
      'State two examples of [business concept].'
    ],
    typicalTimeMinutes: 4,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response'],
    assessmentObjectives: [
      { code: 'AO2', name: 'Application', description: 'Application to business context', marks: 3 },
      { code: 'AO3a', name: 'Analysis', description: 'Analysis with chains of reasoning', marks: 4 },
      { code: 'AO3b', name: 'Evaluation', description: 'Evaluation', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 8, maxMarks: 10, description: 'Good', characteristics: ['Thorough knowledge', 'Effective application', 'Well-developed analysis', 'Some evaluation'] },
      { level: 2, minMarks: 4, maxMarks: 7, description: 'Reasonable', characteristics: ['Good knowledge', 'Some application', 'Some analysis', 'Awareness of counter-arguments'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Basic application', 'Undeveloped analysis'] }
    ],
    commandWords: ['Analyse', 'Explain', 'Assess'],
    questionStems: [
      'Analyse the impact of [business change] on [stakeholder/business].',
      'Explain the likely effects of [business decision] on [business].',
      'Assess the importance of [business factor] for [business].'
    ],
    typicalTimeMinutes: 15,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 },
      { code: 'AO2', name: 'Application', description: 'Application to context', marks: 4 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis with chains of reasoning', marks: 6 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluation with supported judgement', marks: 6 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Excellent knowledge', 'Sophisticated application', 'Well-developed analytical chains', 'Balanced evaluation with substantiated judgement'] },
      { level: 3, minMarks: 12, maxMarks: 16, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Clear analytical chains', 'Good evaluation with judgement'] },
      { level: 2, minMarks: 7, maxMarks: 11, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 6, description: 'Limited', characteristics: ['Limited knowledge', 'Limited application', 'Undeveloped analysis'] }
    ],
    commandWords: ['Evaluate', 'To what extent', 'Discuss', 'Recommend'],
    questionStems: [
      'Evaluate the likely effects of [business strategy] on [business/stakeholders].',
      'To what extent is [business factor] the most important influence on [business outcome]?',
      'Discuss whether [business] should [strategic option].',
      '[Scenario] Recommend the best course of action for [business]. Justify your answer.'
    ],
    typicalTimeMinutes: 30,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

// OCR A-Level Business (similar to AQA)
const businessOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Define', 'State', 'Explain briefly', 'Calculate'],
    questionStems: [
      'Define [business term].',
      'State two features of [business concept].',
      'Calculate [business measure] from the data.'
    ],
    typicalTimeMinutes: 4,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 3 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 9, maxMarks: 10, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Well-developed analysis'] },
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Limited', characteristics: ['Limited knowledge', 'Limited analysis'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge only'] }
    ],
    commandWords: ['Analyse', 'Explain', 'Examine'],
    questionStems: [
      'Analyse the benefits of [business strategy] for [business].',
      'Explain how [business factor] might affect [business outcome].',
      'Examine the importance of [business concept] for [business].'
    ],
    typicalTimeMinutes: 15,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 5 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 5 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 5 },
      { code: 'AO4', name: 'Evaluation', description: 'Evaluation', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Excellent', characteristics: ['Comprehensive knowledge', 'Effective application', 'Thorough analysis', 'Evaluative throughout with substantiated conclusion'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Good analysis', 'Clear evaluation'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some analysis', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Limited', characteristics: ['Limited knowledge', 'Limited analysis'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'Discuss', 'To what extent'],
    questionStems: [
      'Evaluate [business strategy] as a means of achieving [business objective].',
      'Assess the view that [business argument].',
      'Discuss the likely impact of [business change] on [stakeholders].',
      'To what extent should [business] pursue [strategic option]?'
    ],
    typicalTimeMinutes: 30,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

const businessConfigs: SubjectBoardConfigs = {
  aqa: { gcse: businessGcseShared, alevel: businessAqaAlevel },
  edexcel: { gcse: businessGcseShared, alevel: businessEdexcelAlevel },
  ocr: { gcse: businessGcseShared, alevel: businessOcrAlevel }
};

// ============================================
// PSYCHOLOGY CONFIGURATION - BOARD SPECIFIC
// ============================================
// Research summary:
// - AQA: 2-4 marks (easy), 6-8 mark discuss (medium), 16 mark essays (hard)
// - Edexcel: 2-4 marks (easy), 8 mark discuss (medium), 12-20 mark essays (hard)
// - OCR: Similar structure to AQA

// Shared GCSE Psychology config
const psychologyGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 2,
    questionFormat: 'definition',
    allowedFormats: ['definition', 'short_answer', 'calculation'],  // Added calculation for research methods
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of psychological concepts', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 2, description: 'Accurate', characteristics: ['Accurate description'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Basic understanding'] }
    ],
    commandWords: ['Define', 'State', 'Identify', 'Outline', 'Calculate'],
    questionStems: [
      'Define what is meant by [psychological term].',
      'State one feature of [psychological concept].',
      'Identify [psychological feature/factor].',
      'Calculate the [mean/mode/median/percentage] from the following data.'
    ],
    typicalTimeMinutes: 2,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse', 'data_response', 'calculation'],  // Added data_response and calculation
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
      { code: 'AO3', name: 'Evaluation', description: 'Analyse and evaluate', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Accurate knowledge', 'Effective evaluation'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some knowledge', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Limited evaluation'] }
    ],
    commandWords: ['Explain', 'Describe and evaluate', 'Briefly discuss', 'Using the data'],
    questionStems: [
      'Explain one strength and one limitation of [psychological study/theory].',
      'Describe and evaluate [psychological concept/study].',
      'Briefly discuss [psychological issue].',
      'Using the data in the table, explain what the results suggest about [hypothesis].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 12,
    questionFormat: 'short_essay',
    allowedFormats: ['short_essay', 'data_response'],  // Added data_response for research methods
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 6 },
      { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate', marks: 6 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Accurate, well-detailed knowledge', 'Thorough, effective evaluation', 'Clear, coherent, focused'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Good evaluation', 'Mostly clear'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some evaluation', 'Some clarity'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Limited knowledge', 'Limited evaluation'] }
    ],
    commandWords: ['Describe and evaluate', 'Discuss', 'Evaluate', 'Using the data provided'],
    questionStems: [
      'Describe and evaluate [psychological theory/study/approach].',
      'Discuss [psychological concept/debate].',
      'Evaluate [psychological explanation/research].',
      'A psychologist conducted a study... Using the data, discuss [findings and implications].'
    ],
    typicalTimeMinutes: 15,
    wordCountGuidance: { min: 300, max: 500 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA A-Level Psychology
const psychologyAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'calculation'],  // Added calculation for research methods
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of scientific ideas', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Accurate', characteristics: ['Accurate, detailed knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
    ],
    commandWords: ['Outline', 'Describe', 'Explain', 'Identify', 'Calculate'],
    questionStems: [
      'Outline what is meant by [psychological term].',
      'Describe one feature of [psychological concept].',
      'Explain how [psychological process] works.',
      'Identify two characteristics of [psychological phenomenon].',
      'Calculate the [statistical measure] from the data provided.'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 8,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response', 'calculation'],  // Added data_response and calculation
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 7, maxMarks: 8, description: 'Clear', characteristics: ['Accurate, detailed knowledge', 'Effective evaluation', 'Clear, coherent'] },
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Reasonable', characteristics: ['Knowledge evident', 'Reasonable evaluation', 'Mostly clear'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Basic', characteristics: ['Basic knowledge', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited knowledge', 'Little evaluation'] }
    ],
    commandWords: ['Outline and evaluate', 'Briefly discuss', 'Explain', 'Using the data provided'],
    questionStems: [
      'Outline and evaluate research into [psychological phenomenon].',
      'Briefly discuss [psychological explanation/theory].',
      'Explain one limitation of [research/theory] and suggest how it could be addressed.',
      'Using the data in Table 1, explain what the results suggest about [hypothesis].'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 16,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures', marks: 6 },
      { code: 'AO3', name: 'Evaluation', description: 'Analyse, interpret and evaluate scientific information, ideas and evidence to make judgements and reach conclusions', marks: 10 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Excellent', characteristics: ['Knowledge is accurate and generally well detailed', 'Discussion is thorough and effective', 'Clear, coherent and focused', 'Specialist terminology used effectively'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Good', characteristics: ['Knowledge is evident', 'Some occasional inaccuracies', 'Discussion is apparent and mostly effective', 'Mostly clear and organised', 'Lacks focus in places'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Reasonable', characteristics: ['Knowledge is present', 'Significant inaccuracy evident', 'Discussion is limited', 'Lacks clarity and organisation in places'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Knowledge is limited', 'Discussion is limited, poorly focused or absent', 'Specialist terminology absent or inappropriately used'] }
    ],
    commandWords: ['Discuss', 'Outline and evaluate', 'Describe and evaluate'],
    questionStems: [
      'Discuss [psychological explanation/theory/debate]. Refer to evidence in your answer.',
      'Outline and evaluate [psychological explanation/research] for [behaviour/phenomenon].',
      '[Scenario provided] Using your knowledge of psychology, discuss [topic related to scenario].',
      'Describe and evaluate two or more explanations for [psychological phenomenon].'
    ],
    typicalTimeMinutes: 25,
    wordCountGuidance: { min: 500, max: 800 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// Edexcel A-Level Psychology
const psychologyEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
    ],
    commandWords: ['Define', 'Outline', 'Describe', 'Explain'],
    questionStems: [
      'Define the term [psychological concept].',
      'Outline what is meant by [psychological term].',
      'Describe one feature of [psychological study/theory].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 8,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 },
      { code: 'AO2', name: 'Application', description: 'Application of knowledge', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 7, maxMarks: 8, description: 'Good', characteristics: ['Accurate knowledge', 'Effective application', 'Clear and coherent'] },
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Reasonable', characteristics: ['Sound knowledge', 'Some application', 'Mostly clear'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Limited knowledge'] }
    ],
    commandWords: ['Discuss', 'Explain', 'Describe and explain'],
    questionStems: [
      'Discuss how [psychological concept] could be applied to [scenario].',
      'Explain one strength and one weakness of [research method/study].',
      'Describe and explain [psychological phenomenon] with reference to [theory].'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 6 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis, interpretation and evaluation', marks: 10 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Thorough knowledge', 'Excellent application', 'Thorough and effective analysis and evaluation', 'Coherent and well-organised'] },
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Good analysis and evaluation', 'Clear and organised'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some analysis and evaluation'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application', 'Limited evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Limited knowledge', 'No clear application or evaluation'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'Discuss', 'To what extent'],
    questionStems: [
      'Evaluate [psychological theory/explanation] as an account of [behaviour/phenomenon].',
      'Assess the contribution of [psychological approach] to our understanding of [topic].',
      'Discuss the extent to which [psychological research] supports [conclusion].',
      'To what extent does [psychological evidence] support [theoretical claim]?'
    ],
    typicalTimeMinutes: 30,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// OCR A-Level Psychology (similar to AQA)
const psychologyOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Define', 'Outline', 'Describe', 'State'],
    questionStems: [
      'Define the term [psychological concept].',
      'Outline [psychological process/feature].',
      'State two characteristics of [psychological phenomenon].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 10,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 4 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 3 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluation', marks: 3 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 9, maxMarks: 10, description: 'Good', characteristics: ['Good knowledge', 'Effective application', 'Clear evaluation'] },
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Reasonable', characteristics: ['Reasonable knowledge', 'Some application', 'Some evaluation'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Limited', characteristics: ['Limited knowledge', 'Limited application'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge only'] }
    ],
    commandWords: ['Explain', 'Discuss', 'Outline and evaluate'],
    questionStems: [
      'Explain the contribution of [psychological research] to [field].',
      'Discuss [psychological debate/issue].',
      'Outline and evaluate one explanation for [behaviour].'
    ],
    typicalTimeMinutes: 15,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 18,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 6 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis and evaluation', marks: 8 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 15, maxMarks: 18, description: 'Excellent', characteristics: ['Thorough knowledge', 'Effective application', 'Thorough evaluation', 'Well-organised'] },
      { level: 3, minMarks: 10, maxMarks: 14, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Good evaluation'] },
      { level: 2, minMarks: 5, maxMarks: 9, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Limited', characteristics: ['Limited knowledge', 'Limited evaluation'] }
    ],
    commandWords: ['Evaluate', 'Discuss', 'Assess', 'To what extent'],
    questionStems: [
      'Evaluate [psychological theory/research] as an explanation of [behaviour].',
      'Discuss the strengths and weaknesses of [research method] in psychology.',
      'Assess the view that [psychological claim].',
      'To what extent can [psychological factors] explain [behaviour]?'
    ],
    typicalTimeMinutes: 25,
    wordCountGuidance: { min: 550, max: 850 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

const psychologyConfigs: SubjectBoardConfigs = {
  aqa: { gcse: psychologyGcseShared, alevel: psychologyAqaAlevel },
  edexcel: { gcse: psychologyGcseShared, alevel: psychologyEdexcelAlevel },
  ocr: { gcse: psychologyGcseShared, alevel: psychologyOcrAlevel }
};

// ============================================
// GEOGRAPHY CONFIGURATION - BOARD SPECIFIC
// ============================================
// Research summary:
// - AQA: 4-6 marks (easy), 9 mark extended prose (medium), 20 mark essays (hard)
// - Edexcel: 4-6 marks (easy), 8-12 marks (medium), 18-24 mark essays (hard)
// - OCR: 6 marks (easy), 10-16 marks (medium), 33 mark essays (hard)

// Shared GCSE Geography config
const geographyGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['definition', 'short_answer', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge of locations, places, processes', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Some understanding'] }
    ],
    commandWords: ['Describe', 'State', 'Define', 'Give', 'Identify'],
    questionStems: [
      'Describe the distribution of [geographical feature].',
      'Define the term [geographical term].',
      'Give two examples of [geographical concept].',
      'Identify [geographical feature] from Figure 1.'
    ],
    typicalTimeMinutes: 4,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'data_response', 'diagram'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge to interpret, analyse', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Detailed', characteristics: ['Detailed knowledge', 'Thorough application'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Clear knowledge', 'Some application'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] }
    ],
    commandWords: ['Explain', 'Suggest reasons for', 'Using Figure 1, describe'],
    questionStems: [
      'Explain how [geographical process] leads to [outcome].',
      'Suggest reasons why [geographical pattern/distribution].',
      'Using Figure 1, describe the changes in [geographical feature].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 9,
    questionFormat: 'short_essay',
    allowedFormats: ['short_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 3 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluate information and construct arguments', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Detailed', characteristics: ['Detailed knowledge with place-specific detail', 'Thorough application', 'Well-developed evaluation with reasoned conclusion'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Clear', characteristics: ['Clear knowledge', 'Some application', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application', 'Limited evaluation'] }
    ],
    commandWords: ['To what extent', 'Assess', 'Evaluate', 'Discuss'],
    questionStems: [
      '"[Statement about geographical issue]." To what extent do you agree with this statement? Use a case study.',
      'Assess the effectiveness of [management strategy] in [location].',
      'Evaluate the advantages and disadvantages of [geographical approach/strategy].'
    ],
    typicalTimeMinutes: 12,
    wordCountGuidance: { min: 250, max: 400 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

// AQA A-Level Geography
const geographyAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Clear', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Outline', 'Explain', 'Describe'],
    questionStems: [
      'Outline how [geographical process] affects [outcome].',
      'Explain one reason for [geographical pattern].',
      'Describe the characteristics of [geographical feature].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 9,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 5 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Detailed', characteristics: ['Accurate, detailed knowledge', 'Thorough application', 'Well-developed explanation'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Clear', characteristics: ['Clear knowledge', 'Some application'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] }
    ],
    commandWords: ['Explain', 'Analyse', 'Examine', 'Using Figure 1, analyse'],
    questionStems: [
      'Explain how [geographical factor] affects [outcome] in different contexts.',
      'Analyse the factors that influence [geographical process].',
      'Using Figure 1, analyse the pattern shown and suggest reasons for it.'
    ],
    typicalTimeMinutes: 13,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change', marks: 10 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information', marks: 10 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Excellent', characteristics: ['Detailed, accurate knowledge with well-chosen examples', 'Sophisticated understanding of concepts', 'Thorough application to context', 'Well-developed evaluation with substantiated conclusion'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Good', characteristics: ['Good knowledge with some detailed examples', 'Good understanding', 'Clear application', 'Clear evaluation with supported conclusion'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Reasonable', characteristics: ['Some knowledge and understanding', 'Some application', 'Limited evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Basic knowledge', 'Weak application', 'Little or no evaluation'] }
    ],
    commandWords: ['To what extent', 'Assess', 'Evaluate', '"Quote." Discuss.'],
    questionStems: [
      'To what extent do [factors] influence [geographical process/pattern]?',
      'Assess the view that [statement about geographical issue].',
      '"[Statement about geographical issue]." With reference to [case study], evaluate this view.',
      'Evaluate the success of [strategy/approach] in addressing [geographical challenge].'
    ],
    typicalTimeMinutes: 30,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

// Edexcel A-Level Geography
const geographyEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 4,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'data_response'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 4 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Explain', 'Describe', 'Outline', 'Suggest'],
    questionStems: [
      'Explain one reason for [geographical pattern/process].',
      'Describe the characteristics of [geographical feature].',
      'Suggest one impact of [geographical change].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 12,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 4 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluation', marks: 4 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Thorough knowledge', 'Effective application', 'Evaluative insight'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Some evaluation'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Explain', 'Analyse', 'Assess', 'Examine'],
    questionStems: [
      'Explain how [geographical process] leads to [outcome].',
      'Analyse the factors that contribute to [geographical pattern].',
      'Assess the importance of [factor] in explaining [geographical issue].'
    ],
    typicalTimeMinutes: 18,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 20,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 5 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 5 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluation', marks: 10 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 17, maxMarks: 20, description: 'Excellent', characteristics: ['Thorough knowledge', 'Effective application', 'Evaluative insight throughout', 'Balanced and substantiated conclusion'] },
      { level: 3, minMarks: 12, maxMarks: 16, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Clear evaluation with supported conclusion'] },
      { level: 2, minMarks: 7, maxMarks: 11, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application', 'Some evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 6, description: 'Basic', characteristics: ['Basic knowledge', 'Limited application'] }
    ],
    commandWords: ['Evaluate', 'Assess', 'To what extent', 'Discuss'],
    questionStems: [
      'Evaluate the view that [geographical argument].',
      'Assess the extent to which [factor] is responsible for [geographical outcome].',
      'To what extent can [strategy/approach] address [geographical challenge]?',
      'Discuss the impacts of [geographical change] on [people/environment].'
    ],
    typicalTimeMinutes: 30,
    wordCountGuidance: { min: 600, max: 900 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

// OCR A-Level Geography (with 33 mark hard questions)
const geographyOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 6,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 6 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Accurate knowledge', 'Clear explanation'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Sound knowledge', 'Some explanation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Explain', 'Describe', 'Outline'],
    questionStems: [
      'Explain one way in which [geographical process] affects [outcome].',
      'Describe the main features of [geographical concept].',
      'Outline the factors that influence [geographical pattern].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false
  },
  medium: {
    totalMarks: 16,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 6 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 5 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis and evaluation', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 13, maxMarks: 16, description: 'Excellent', characteristics: ['Thorough knowledge', 'Effective application', 'Clear analysis with some evaluation'] },
      { level: 3, minMarks: 9, maxMarks: 12, description: 'Good', characteristics: ['Good knowledge', 'Good application', 'Some analysis'] },
      { level: 2, minMarks: 5, maxMarks: 8, description: 'Reasonable', characteristics: ['Some knowledge', 'Some application'] },
      { level: 1, minMarks: 1, maxMarks: 4, description: 'Basic', characteristics: ['Basic knowledge'] }
    ],
    commandWords: ['Examine', 'Explain', 'Analyse', 'Assess'],
    questionStems: [
      'Examine the role of [factor] in [geographical process/outcome].',
      'Explain how [geographical factors] interact to produce [outcome].',
      'Assess the significance of [geographical factor] in [context].'
    ],
    typicalTimeMinutes: 22,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresCaseStudy: true
  },
  hard: {
    totalMarks: 33,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 10 },
      { code: 'AO2', name: 'Application', description: 'Application of knowledge', marks: 10 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis, interpretation and evaluation', marks: 13 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 28, maxMarks: 33, description: 'Excellent', characteristics: ['Comprehensive knowledge', 'Sophisticated application', 'Thorough, balanced evaluation', 'Convincing, substantiated conclusion'] },
      { level: 4, minMarks: 22, maxMarks: 27, description: 'Good', characteristics: ['Thorough knowledge', 'Effective application', 'Good evaluation with clear judgement'] },
      { level: 3, minMarks: 15, maxMarks: 21, description: 'Reasonable', characteristics: ['Good knowledge', 'Sound application', 'Some evaluation'] },
      { level: 2, minMarks: 8, maxMarks: 14, description: 'Limited', characteristics: ['Some knowledge', 'Limited application', 'Limited evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 7, description: 'Basic', characteristics: ['Basic knowledge', 'Minimal analysis'] }
    ],
    commandWords: ['Evaluate', 'To what extent', 'Assess', '"Quote." Discuss.'],
    questionStems: [
      'Evaluate the extent to which [geographical argument/theory].',
      'To what extent can [geographical approach] address [global challenge]?',
      '"[Statement about geographical issue]." Discuss this view with reference to examples.',
      'Assess the view that [statement about geographical change/impact].'
    ],
    typicalTimeMinutes: 45,
    wordCountGuidance: { min: 900, max: 1300 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true,
    requiresCaseStudy: true
  }
};

const geographyConfigs: SubjectBoardConfigs = {
  aqa: { gcse: geographyGcseShared, alevel: geographyAqaAlevel },
  edexcel: { gcse: geographyGcseShared, alevel: geographyEdexcelAlevel },
  ocr: { gcse: geographyGcseShared, alevel: geographyOcrAlevel }
};

// ============================================
// BIOLOGY CONFIGURATION - BOARD SPECIFIC
// ============================================
// AQA has unique 25-mark synoptic essay on Paper 3
// Edexcel and OCR have 6-mark extended response questions only

// Shared GCSE config (all boards have 6-mark extended response max)
const biologyGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 2,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],  // Added calculation for magnification, SA:V, etc.
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 2, description: 'Good', characteristics: ['Accurate recall', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some recall'] }
    ],
    commandWords: ['State', 'Name', 'Define', 'Give', 'Calculate'],
    questionStems: [
      'State the function of [biological structure].',
      'Name the process by which [biological event].',
      'Define the term [biological term].',
      'Calculate the magnification of [specimen] using the formula.'
    ],
    typicalTimeMinutes: 2,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 4,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer', 'calculation', 'data_response', 'diagram'],  // Full range
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge to contexts', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Clear explanation', 'Linked points'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Some explanation'] }
    ],
    commandWords: ['Explain', 'Describe', 'Compare', 'Calculate', 'Using the data', 'Draw'],
    questionStems: [
      'Explain how [biological process] occurs.',
      'Describe the role of [biological structure] in [function].',
      'Compare [biological concept A] with [biological concept B].',
      'Calculate the percentage change in mass of the potato cylinders.',
      'Using the data in the table, describe the pattern shown.',
      'Draw a labelled diagram of [biological structure].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresCalculation: true,
    requiresDataAnalysis: true,
    requiresDiagram: true
  },
  hard: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse', 'data_response'],  // Added data_response
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse and evaluate', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation', 'Clear scientific reasoning', 'Logical structure'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation', 'Partial reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points', 'Limited reasoning'] }
    ],
    commandWords: ['Explain', 'Describe and explain', 'Evaluate', 'Using the data provided'],
    questionStems: [
      'Explain the importance of [biological process] in [context].',
      'Describe and explain how [biological adaptation] helps [organism] survive.',
      'Evaluate the evidence for [biological theory/concept].',
      'Using the data provided, explain what the results suggest about [biological process].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  }
};

// AQA A-Level Biology - includes 25-mark synoptic essay on Paper 3
const biologyAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Name', 'Calculate', 'Give'],
    questionStems: [
      'State the role of [molecule/structure] in [process].',
      'Calculate [biological measure] from the data provided.',
      'Name the type of [biological classification].'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse', 'data_response'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application of knowledge', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis and evaluation', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed, coherent explanation', 'Clear scientific reasoning', 'Logically structured'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some relevant explanation', 'Partial reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points', 'Limited structure'] }
    ],
    commandWords: ['Explain', 'Describe', 'Suggest', 'Compare'],
    questionStems: [
      'Explain how [biological process] is controlled by [mechanism].',
      'Describe and explain the relationship between [structure] and [function].',
      'Suggest why [biological phenomenon] occurs in [context].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresDataAnalysis: true
  },
  hard: {
    totalMarks: 25,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures', marks: 13 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding to scientific and practical contexts', marks: 12 }
    ],
    levelDescriptors: [
      { level: 5, minMarks: 21, maxMarks: 25, description: 'Excellent', characteristics: ['Comprehensive and relevant knowledge from across the specification', 'Excellent understanding of principles', 'Material from 4+ different areas effectively synthesised', 'Clear, coherent, well-organised scientific writing'] },
      { level: 4, minMarks: 16, maxMarks: 20, description: 'Good', characteristics: ['Good knowledge from several areas', 'Good understanding shown', 'Material from 3-4 areas synthesised', 'Clear scientific writing with good organisation'] },
      { level: 3, minMarks: 11, maxMarks: 15, description: 'Reasonable', characteristics: ['Reasonable knowledge from some areas', 'Understanding shown', 'Some synthesis of material', 'Scientific writing mostly clear'] },
      { level: 2, minMarks: 6, maxMarks: 10, description: 'Limited', characteristics: ['Limited knowledge', 'Limited understanding', 'Little synthesis', 'Writing lacks clarity in places'] },
      { level: 1, minMarks: 1, maxMarks: 5, description: 'Basic', characteristics: ['Basic knowledge only', 'Little understanding shown', 'No synthesis', 'Poor organisation'] }
    ],
    commandWords: ['Write an essay on', 'Discuss', 'Describe and explain'],
    questionStems: [
      'Write an essay on the importance of [biological concept] in living organisms.',
      'The importance of [biological process/molecule] in biology.',
      'Cycles in biology.',
      'The role of [biological mechanism] in organisms.',
      'How structure is related to function in [biological context].'
    ],
    typicalTimeMinutes: 35,
    wordCountGuidance: { min: 700, max: 1000 },
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  }
};

// Edexcel A-Level Biology - 6-mark extended response max (no synoptic essay)
const biologyEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge', 'Clear understanding'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Name', 'Calculate', 'Give', 'Define'],
    questionStems: [
      'State the function of [biological structure].',
      'Calculate [value] using the data provided.',
      'Define [biological term].'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 4,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Clear explanation', 'Linked points'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Some explanation'] }
    ],
    commandWords: ['Explain', 'Describe', 'Suggest'],
    questionStems: [
      'Explain how [biological process] occurs.',
      'Describe the role of [structure] in [function].',
      'Suggest why [biological observation].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analyse and evaluate', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation', 'Clear scientific reasoning', 'Logical structure'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation', 'Partial reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points', 'Limited reasoning'] }
    ],
    commandWords: ['Explain', 'Describe and explain', 'Evaluate', 'Discuss'],
    questionStems: [
      'Explain the importance of [biological process] in [context].',
      'Describe and explain how [biological mechanism] works.',
      'Evaluate the use of [biological technique] in [application].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  }
};

// OCR A-Level Biology - 6-mark extended response max (synoptic through Unified Biology paper)
const biologyOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Name', 'Calculate', 'Define'],
    questionStems: [
      'State the role of [molecule] in [process].',
      'Calculate [measure] from the data.',
      'Define [biological term].'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 4,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Clear explanation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Some explanation'] }
    ],
    commandWords: ['Explain', 'Describe', 'Outline'],
    questionStems: [
      'Explain how [process] is controlled.',
      'Describe the structure and function of [organelle].',
      'Outline the stages of [biological process].'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'analyse'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 2 },
      { code: 'AO3', name: 'Analysis', description: 'Analysis', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation', 'Clear reasoning', 'Logical structure'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation', 'Partial reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points'] }
    ],
    commandWords: ['Explain', 'Describe and explain', 'Evaluate', 'Analyse'],
    questionStems: [
      'Explain the importance of [process] in maintaining [homeostatic condition].',
      'Analyse the data and explain the conclusions that can be drawn.',
      'Evaluate the experimental method used to investigate [biological phenomenon].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  }
};

const biologyConfigs: SubjectBoardConfigs = {
  aqa: { gcse: biologyGcseShared, alevel: biologyAqaAlevel },
  edexcel: { gcse: biologyGcseShared, alevel: biologyEdexcelAlevel },
  ocr: { gcse: biologyGcseShared, alevel: biologyOcrAlevel }
};

// ============================================
// COMPUTER SCIENCE CONFIGURATION - BOARD SPECIFIC
// ============================================
// AQA has 12-mark extended response on Paper 2
// OCR has 8-12 mark extended response (asterisked questions)
// Edexcel has similar structure

// Shared GCSE config (all boards have 6-8 mark extended response max)
const computerScienceGcseShared: DifficultyConfigs = {
  easy: {
    totalMarks: 2,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],  // Added calculation for binary/hex
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 2, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Define', 'Give', 'Name', 'Convert', 'Calculate'],
    questionStems: [
      'State what is meant by [computing term].',
      'Define [computing concept].',
      'Give one example of [computing technology].',
      'Convert the binary number [binary] to denary.',
      'Convert the hexadecimal value [hex] to binary.'
    ],
    typicalTimeMinutes: 2,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 4,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer', 'calculation', 'data_response'],  // Added calculation and data_response
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application and analysis', marks: 2 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Good', characteristics: ['Clear explanation', 'Technical accuracy'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Basic', characteristics: ['Some explanation'] }
    ],
    commandWords: ['Explain', 'Describe', 'Compare', 'Calculate', 'Trace through'],
    questionStems: [
      'Explain how [computing process] works.',
      'Describe the purpose of [computing component].',
      'Compare [technology A] with [technology B].',
      'Calculate the storage required for [data].',
      'Trace through the algorithm and show the output.'
    ],
    typicalTimeMinutes: 5,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  hard: {
    totalMarks: 8,
    questionFormat: 'analyse',
    allowedFormats: ['analyse', 'explain', 'data_response'],  // Added data_response for algorithm analysis
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 3 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis and evaluation', marks: 3 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 6, maxMarks: 8, description: 'Good', characteristics: ['Detailed response', 'Clear reasoning', 'Well-structured'] },
      { level: 2, minMarks: 3, maxMarks: 5, description: 'Reasonable', characteristics: ['Some detail', 'Partial reasoning'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points'] }
    ],
    commandWords: ['Explain', 'Discuss', 'Evaluate', 'Analyse the code'],
    questionStems: [
      'Explain how [system/algorithm] handles [situation].',
      'Discuss the advantages and disadvantages of [technology/approach].',
      'Evaluate the suitability of [solution] for [context].',
      'Analyse the given code and explain what improvements could be made.'
    ],
    typicalTimeMinutes: 12,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// AQA A-Level Computer Science - 12-mark extended response on Paper 2
const computerScienceAqaAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of computing principles', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge', 'Correct terminology'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Define', 'Give', 'Calculate', 'Name'],
    questionStems: [
      'State two characteristics of [computing concept].',
      'Define the term [computing term].',
      'Calculate [value] from the given data.'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer', 'analyse'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application of knowledge and understanding', marks: 2 },
      { code: 'AO3', name: 'Evaluation', description: 'Analysis and evaluation', marks: 2 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation', 'Technical accuracy', 'Logical structure'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation', 'Generally accurate'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points', 'Limited accuracy'] }
    ],
    commandWords: ['Explain', 'Describe', 'Compare', 'Analyse'],
    questionStems: [
      'Explain how [algorithm/data structure] works.',
      'Describe the process of [computing operation].',
      'Compare the efficiency of [algorithm A] with [algorithm B].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 12,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding of computing principles and concepts', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Apply knowledge and understanding to analyse problems and design solutions', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Design, program and evaluate computer systems, making reasoned judgements', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Comprehensive knowledge', 'Thorough analysis', 'Well-reasoned evaluation', 'Coherent, logically structured response', 'Balanced consideration of issues'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Clear analysis', 'Sound evaluation', 'Structured response'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some analysis', 'Partial evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Little analysis', 'Weak structure'] }
    ],
    commandWords: ['Discuss', 'Evaluate', 'Analyse', 'Compare and contrast'],
    questionStems: [
      'Discuss the ethical implications of [computing technology/practice].',
      'Evaluate the impact of [technology] on [stakeholder/society].',
      'Discuss the legal and privacy issues related to [data collection/system].',
      'Compare and contrast [approach A] with [approach B] for [computing problem].',
      'Analyse the benefits and drawbacks of [computing methodology] in [context].'
    ],
    typicalTimeMinutes: 18,
    wordCountGuidance: { min: 400, max: 600 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// OCR A-Level Computer Science - 8-12 mark extended response (asterisked questions)
const computerScienceOcrAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Define', 'Give', 'Calculate'],
    questionStems: [
      'State what is meant by [computing term].',
      'Define [computing concept].',
      'Calculate [value].'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application and analysis', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation', 'Technical accuracy'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points'] }
    ],
    commandWords: ['Explain', 'Describe', 'Outline'],
    questionStems: [
      'Explain how [process/algorithm] works.',
      'Describe the role of [component] in [system].',
      'Outline the steps involved in [computing process].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 12,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge and understanding', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Application and analysis', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluation and making reasoned judgements', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Comprehensive and accurate knowledge', 'Thorough analysis of the problem', 'Well-reasoned evaluation', 'Clear and logically structured', 'Substantiated conclusions'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Good analysis', 'Sound evaluation', 'Structured response'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Some analysis', 'Limited evaluation'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge', 'Little analysis'] }
    ],
    commandWords: ['Discuss', 'Evaluate', 'Analyse', 'Compare'],
    questionStems: [
      'Discuss the ethical issues surrounding [computing technology].',
      'Evaluate the environmental impact of [computing practice].',
      'Discuss the social implications of [technology development].',
      'Analyse the positive and negative impacts of [computing system] on [stakeholders].'
    ],
    typicalTimeMinutes: 18,
    wordCountGuidance: { min: 400, max: 600 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

// Edexcel A-Level Computer Science - similar to OCR structure
const computerScienceEdexcelAlevel: DifficultyConfigs = {
  easy: {
    totalMarks: 3,
    questionFormat: 'short_answer',
    allowedFormats: ['short_answer', 'definition', 'calculation'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Demonstrate knowledge and understanding', marks: 3 }
    ],
    levelDescriptors: [
      { level: 2, minMarks: 2, maxMarks: 3, description: 'Good', characteristics: ['Accurate knowledge'] },
      { level: 1, minMarks: 1, maxMarks: 1, description: 'Basic', characteristics: ['Some knowledge'] }
    ],
    commandWords: ['State', 'Define', 'Give', 'Calculate'],
    questionStems: [
      'State the purpose of [computing component].',
      'Define the term [computing term].',
      'Calculate [value] from the data.'
    ],
    typicalTimeMinutes: 3,
    requiresSustainedJudgement: false,
    requiresEvidence: false,
    requiresCounterArgument: false,
    requiresCalculation: true
  },
  medium: {
    totalMarks: 6,
    questionFormat: 'explain',
    allowedFormats: ['explain', 'short_answer'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 2 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 }
    ],
    levelDescriptors: [
      { level: 3, minMarks: 5, maxMarks: 6, description: 'Good', characteristics: ['Detailed explanation'] },
      { level: 2, minMarks: 3, maxMarks: 4, description: 'Reasonable', characteristics: ['Some explanation'] },
      { level: 1, minMarks: 1, maxMarks: 2, description: 'Limited', characteristics: ['Basic points'] }
    ],
    commandWords: ['Explain', 'Describe', 'Compare'],
    questionStems: [
      'Explain how [algorithm/process] works.',
      'Describe the advantages of [technology/approach].',
      'Compare [method A] with [method B].'
    ],
    typicalTimeMinutes: 8,
    requiresSustainedJudgement: false,
    requiresEvidence: true,
    requiresCounterArgument: false
  },
  hard: {
    totalMarks: 12,
    questionFormat: 'extended_essay',
    allowedFormats: ['extended_essay'],
    assessmentObjectives: [
      { code: 'AO1', name: 'Knowledge', description: 'Knowledge', marks: 3 },
      { code: 'AO2', name: 'Application', description: 'Application', marks: 4 },
      { code: 'AO3', name: 'Evaluation', description: 'Evaluation', marks: 5 }
    ],
    levelDescriptors: [
      { level: 4, minMarks: 10, maxMarks: 12, description: 'Excellent', characteristics: ['Comprehensive knowledge', 'Thorough analysis', 'Balanced evaluation', 'Logically structured'] },
      { level: 3, minMarks: 7, maxMarks: 9, description: 'Good', characteristics: ['Good knowledge', 'Clear analysis', 'Sound evaluation'] },
      { level: 2, minMarks: 4, maxMarks: 6, description: 'Reasonable', characteristics: ['Some knowledge', 'Partial analysis'] },
      { level: 1, minMarks: 1, maxMarks: 3, description: 'Limited', characteristics: ['Limited knowledge'] }
    ],
    commandWords: ['Discuss', 'Evaluate', 'Analyse'],
    questionStems: [
      'Discuss the ethical considerations of [computing technology].',
      'Evaluate the impact of [technology] on [context].',
      'Analyse the benefits and risks of [computing approach].'
    ],
    typicalTimeMinutes: 18,
    wordCountGuidance: { min: 400, max: 600 },
    requiresSustainedJudgement: true,
    requiresEvidence: true,
    requiresCounterArgument: true
  }
};

const computerScienceConfigs: SubjectBoardConfigs = {
  aqa: { gcse: computerScienceGcseShared, alevel: computerScienceAqaAlevel },
  edexcel: { gcse: computerScienceGcseShared, alevel: computerScienceEdexcelAlevel },
  ocr: { gcse: computerScienceGcseShared, alevel: computerScienceOcrAlevel }
};

// ============================================
// BOARD-SPECIFIC CONFIGURATION MAP
// ============================================
// Maps subject -> board -> level -> difficulty configs
const boardSpecificConfigs: Record<Subject, SubjectBoardConfigs | null> = {
  'history': historyConfigs,
  'economics': economicsConfigs,  // Board-specific with mixed format
  'business': businessConfigs,  // Board-specific with mixed format
  'english-literature': englishLitConfigs,  // Board-specific (essay-only subject)
  'psychology': psychologyConfigs,  // Board-specific with mixed format
  'geography': geographyConfigs,  // Board-specific with mixed format
  'biology': biologyConfigs,  // AQA has 25-mark essay, others have 6-mark extended
  'computer-science': computerScienceConfigs,  // 12-mark extended response essays
  // Quantitative subjects with no extended writing
  'maths': null,
  'further-maths': null,
  'physics': null,  // 6-mark extended response only (not full essay)
  'chemistry': null,  // 6-mark extended response only (not full essay)
  'combined-science': null,  // 6-mark extended response only (not full essay)
};

// Legacy configs for subjects not yet converted to board-specific
// These will be used as fallback when board-specific config is not available
const legacyConfigs: Record<Subject, { gcse: DifficultyConfigs; alevel: DifficultyConfigs } | null> = {
  'history': null,  // Now using board-specific
  'economics': null,  // Now using board-specific
  'business': null,  // Now using board-specific
  'english-literature': null,  // Now using board-specific
  'psychology': null,  // Now using board-specific
  'geography': null,  // Now using board-specific
  'biology': null,  // Now using board-specific
  'computer-science': null,  // Now using board-specific
  'maths': null,
  'further-maths': null,
  'physics': null,
  'chemistry': null,
  'combined-science': null,  // 6-mark extended response only (not full essay)
};

/**
 * Get specific question configuration for subject/level/difficulty/board
 * Now supports exam board-specific configurations
 */
export function getQuestionConfig(
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty,
  board?: ExamBoard
): EssayQuestionConfig | null {
  // First try board-specific config
  const boardConfigs = boardSpecificConfigs[subject];
  if (boardConfigs && board) {
    const boardConfig = boardConfigs[board];
    if (boardConfig) {
      const levelConfig = level === 'a-level' ? boardConfig.alevel : boardConfig.gcse;
      return levelConfig[difficulty];
    }
  }

  // Fall back to legacy config (for subjects not yet converted)
  const legacy = legacyConfigs[subject];
  if (legacy) {
    const levelConfig = level === 'a-level' ? legacy.alevel : legacy.gcse;
    return levelConfig[difficulty];
  }

  return null;
}

// Simple map indicating which subjects have extended writing components
// Used by isEssaySubject and getEssaySubjects helper functions
// Note: Biology and CS now included as they have significant extended writing:
// - AQA Biology: 25-mark synoptic essay
// - Computer Science: 12-mark extended response essays
const essayConfigs: Record<Subject, boolean> = {
  'history': true,
  'economics': true,
  'business': true,
  'english-literature': true,
  'psychology': true,
  'geography': true,
  'biology': true,  // AQA has 25-mark essay, others have 6-mark extended
  'computer-science': true,  // 12-mark extended response essays
  // Quantitative subjects with no extended writing or only 6-mark responses
  'maths': false,
  'further-maths': false,
  'physics': false,  // 6-mark extended response only
  'chemistry': false,  // 6-mark extended response only
  'combined-science': false,  // 6-mark extended response only
};

/**
 * Check if a subject is an essay-based subject
 */
export function isEssaySubject(subject: Subject): boolean {
  return essayConfigs[subject] === true;
}

/**
 * Get all essay subjects
 */
export function getEssaySubjects(): Subject[] {
  return Object.entries(essayConfigs)
    .filter(([_, isEssay]) => isEssay === true)
    .map(([subject]) => subject as Subject);
}

/**
 * Generate a random question stem for the given configuration
 */
export function getRandomQuestionStem(config: EssayQuestionConfig): string {
  const stems = config.questionStems;
  return stems[Math.floor(Math.random() * stems.length)];
}

/**
 * Get a random command word for the given configuration
 */
export function getRandomCommandWord(config: EssayQuestionConfig): string {
  const words = config.commandWords;
  return words[Math.floor(Math.random() * words.length)];
}

/**
 * Format level descriptors for mark scheme
 */
export function formatLevelDescriptors(config: EssayQuestionConfig): string {
  return config.levelDescriptors
    .sort((a, b) => b.level - a.level) // Highest level first
    .map(level => {
      const characteristics = level.characteristics.join('; ');
      return `Level ${level.level} (${level.minMarks}-${level.maxMarks} marks): ${level.description} - ${characteristics}`;
    })
    .join('\n');
}

/**
 * Format assessment objectives for mark scheme
 */
export function formatAssessmentObjectives(config: EssayQuestionConfig): string {
  return config.assessmentObjectives
    .map(ao => `${ao.code} (${ao.marks} marks): ${ao.description}`)
    .join('\n');
}

/**
 * Get a random question format from the allowed formats for this config.
 * This enables variation in question types at the same difficulty level.
 */
export function getRandomQuestionFormat(config: EssayQuestionConfig): QuestionFormat {
  const formats = config.allowedFormats || [config.questionFormat || 'explain'];
  return formats[Math.floor(Math.random() * formats.length)];
}

/**
 * Get weighted random question type for science subjects.
 * Returns format based on typical exam paper distribution.
 */
export function getRandomScienceQuestionType(): QuestionFormat {
  const random = Math.random() * 100;
  // Science exam papers typically have:
  // ~35% calculation questions
  // ~30% explain/describe questions
  // ~15% graph/data analysis questions
  // ~10% compare questions
  // ~10% extended response (6-mark)
  if (random < 35) return 'calculation';
  if (random < 65) return 'explain';
  if (random < 80) return 'data_response';  // graph/data
  if (random < 90) return 'analyse';         // compare/analyse
  return 'short_essay';                      // extended
}

/**
 * Get weighted random question type for maths subjects.
 * Returns format based on typical exam paper distribution.
 */
export function getRandomMathsQuestionType(): QuestionFormat {
  const random = Math.random() * 100;
  // Maths exam papers typically have:
  // ~50% standard calculation/problem-solving
  // ~20% show-that/proof questions (treated as calculation)
  // ~15% graph/interpretation questions
  // ~10% multi-step problems
  // ~5% compare/evaluate
  if (random < 70) return 'calculation';     // calculation + show-that
  if (random < 85) return 'diagram';         // graph
  if (random < 95) return 'explain';         // multi-step with explanation
  return 'analyse';                          // compare/evaluate
}

/**
 * Check if a subject is a science subject (physics, chemistry, biology).
 */
export function isScienceSubject(subject: Subject): boolean {
  return ['physics', 'chemistry', 'biology'].includes(subject);
}

/**
 * Check if a subject is a maths subject (maths, further-maths).
 */
export function isMathsSubject(subject: Subject): boolean {
  return ['maths', 'further-maths'].includes(subject);
}
