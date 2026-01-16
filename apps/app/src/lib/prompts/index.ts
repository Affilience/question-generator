/**
 * Prompts Module
 *
 * Centralized prompt management for the question generation platform.
 * This module exports all prompt-related utilities and constraints.
 *
 * Architecture:
 * - Layer 1: Global constraints (copyright, accuracy, safety)
 * - Layer 2: Exam board context (conventions, AOs)
 * - Layer 3: Subject specifics (equations, constants)
 * - Layer 4: Question type templates
 * - Layer 5: Instance parameters (topic, difficulty, marks)
 */

// Global constraints (copyright, accuracy, safety, output format)
export {
  COPYRIGHT_CONSTRAINTS,
  FACT_ACCURACY_CONSTRAINTS,
  PHYSICS_ACCURACY_CONSTRAINTS,
  CHEMISTRY_ACCURACY_CONSTRAINTS,
  BIOLOGY_ACCURACY_CONSTRAINTS,
  HISTORY_ACCURACY_CONSTRAINTS,
  ENGLISH_LIT_ACCURACY_CONSTRAINTS,
  SAFETY_CONSTRAINTS,
  OUTPUT_FORMAT_CONSTRAINTS,
  getGlobalConstraints,
  getSubjectAccuracyConstraints,
  getAllConstraints,
} from './global-constraints';

// Enhanced system prompts (exam board-specific)
export {
  getEnhancedSystemPrompt,
  getFullSystemPrompt,
  getSpecificationCode,
  getSystemPromptByKey,
  ENHANCED_SYSTEM_PROMPTS,
} from './system-prompts';

// Question type templates and utilities
export {
  QUESTION_TYPE_DESCRIPTIONS,
  COMMAND_WORDS_BY_TYPE,
  MARK_RANGES_BY_TYPE,
  getQuestionTypeTemplate,
  getDifficultyModifierForType,
  MULTIPLE_CHOICE_TEMPLATE,
  CALCULATION_TEMPLATE,
  EXPLAIN_TEMPLATE,
  EXTENDED_RESPONSE_TEMPLATE,
  DATA_ANALYSIS_TEMPLATE,
  COMPARE_TEMPLATE,
} from './question-types';

// Prompt builder utilities
export {
  buildQuestionPrompt,
  buildCompactPrompt,
  buildPaperQuestionPrompt,
  buildValidationPrompt,
  estimateTokenCount,
  type PromptLayers,
  type QuestionGenerationParams,
  type PaperQuestionParams,
} from './prompt-builder';
