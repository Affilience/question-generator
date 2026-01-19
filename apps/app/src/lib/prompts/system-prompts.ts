/**
 * Enhanced System Prompts Module
 *
 * Exam board-specific system prompts that include:
 * - Board-specific examiner role
 * - Specification reference
 * - Key conventions
 * - Global constraints (copyright, accuracy, safety)
 */

import { ExamBoard, QualificationLevel, Subject } from '@/types';
import { COPYRIGHT_CONSTRAINTS, SAFETY_CONSTRAINTS, OUTPUT_FORMAT_CONSTRAINTS } from './global-constraints';

// ============================================================================
// EXAM BOARD SPECIFICATIONS
// ============================================================================

const EXAM_BOARD_SPECS: Record<string, string> = {
  // Physics specifications
  'physics-gcse-aqa': '8463',
  'physics-gcse-edexcel': '1PH0',
  'physics-gcse-ocr': 'J249',
  'physics-a-level-aqa': '7408',
  'physics-a-level-edexcel': '9PH0',
  'physics-a-level-ocr': 'H556',

  // Chemistry specifications
  'chemistry-gcse-aqa': '8462',
  'chemistry-gcse-edexcel': '1CH0',
  'chemistry-gcse-ocr': 'J248',
  'chemistry-a-level-aqa': '7405',
  'chemistry-a-level-edexcel': '9CH0',
  'chemistry-a-level-ocr': 'H432',

  // Biology specifications
  'biology-gcse-aqa': '8461',
  'biology-gcse-edexcel': '1BI0',
  'biology-gcse-ocr': 'J247',
  'biology-a-level-aqa': '7402',
  'biology-a-level-edexcel': '9BI0',
  'biology-a-level-ocr': 'H420',

  // Maths specifications
  'maths-gcse-aqa': '8300',
  'maths-gcse-edexcel': '1MA1',
  'maths-gcse-ocr': 'J560',
  'maths-a-level-aqa': '7357',
  'maths-a-level-edexcel': '9MA0',
  'maths-a-level-ocr': 'H240',

  // Computer Science specifications
  'computer-science-gcse-aqa': '8525',
  'computer-science-gcse-edexcel': '1CP2',
  'computer-science-gcse-ocr': 'J277',
  'computer-science-a-level-aqa': '7517',
  'computer-science-a-level-ocr': 'H446',

  // Economics specifications
  'economics-gcse-aqa': '8136',
  'economics-gcse-ocr': 'J205',
  'economics-a-level-aqa': '7136',
  'economics-a-level-edexcel': '9EC0',
  'economics-a-level-ocr': 'H460',

  // Business specifications
  'business-gcse-aqa': '8132',
  'business-gcse-edexcel': '1BS0',
  'business-gcse-ocr': 'J204',
  'business-a-level-aqa': '7132',
  'business-a-level-edexcel': '9BS0',
  'business-a-level-ocr': 'H431',

  // Psychology specifications
  'psychology-gcse-aqa': '8182',
  'psychology-gcse-edexcel': '1PS0',
  'psychology-gcse-ocr': 'J203',
  'psychology-a-level-aqa': '7182',
  'psychology-a-level-edexcel': '9PS0',
  'psychology-a-level-ocr': 'H567',

  // Geography specifications
  'geography-gcse-aqa': '8035',
  'geography-gcse-edexcel': '1GA0',
  'geography-gcse-ocr': 'J383',
  'geography-a-level-aqa': '7037',
  'geography-a-level-edexcel': '9GE0',
  'geography-a-level-ocr': 'H481',

  // History specifications
  'history-gcse-aqa': '8145',
  'history-gcse-edexcel': '1HI0',
  'history-gcse-ocr': 'J410',
  'history-a-level-aqa': '7042',
  'history-a-level-edexcel': '9HI0',
  'history-a-level-ocr': 'H505',

  // English Literature specifications
  'english-literature-gcse-aqa': '8702',
  'english-literature-gcse-edexcel': '1ET0',
  'english-literature-gcse-ocr': 'J352',
  'english-literature-a-level-aqa': '7712',
  'english-literature-a-level-edexcel': '9ET0',
  'english-literature-a-level-ocr': 'H472',

  // Further Maths specifications
  'further-maths-gcse-aqa': '8365',
  'further-maths-gcse-ocr': '6993',
  'further-maths-a-level-aqa': '7367',
  'further-maths-a-level-edexcel': '9FM0',
  'further-maths-a-level-ocr': 'H245',
};

// ============================================================================
// BOARD-SPECIFIC CONVENTIONS
// ============================================================================

const BOARD_CONVENTIONS: Record<ExamBoard, string> = {
  aqa: `
AQA-SPECIFIC CONVENTIONS:
- Mark scheme uses M (method), A (accuracy), B (independent) marks
- Command words: Calculate, Determine, Explain, State, Describe, Evaluate, Compare, Justify
- 6-mark questions often use "levels of response" marking
- Required practicals are explicitly testable
- Papers typically progress easy → hard within each section`,

  edexcel: `
EDEXCEL-SPECIFIC CONVENTIONS:
- Mark scheme uses M, A, B marks similar to AQA
- Command words: Calculate, Work out, Explain, State, Describe, Evaluate, Assess
- "Quality of Written Communication" assessed in extended responses
- Tend to have more structured questions with scaffolding
- Data response questions common in sciences`,

  ocr: `
OCR-SPECIFIC CONVENTIONS:
- Mark scheme uses marks with annotations (✓, AO1, AO2, etc.)
- Command words: Calculate, Explain, State, Describe, Evaluate, Analyse, Compare, Discuss
- "Synoptic" questions linking multiple topics (especially A-Level)
- Gateway and Twenty First Century strands (GCSE Science)
- Level of response marking for extended answers`,
};

// ============================================================================
// CONCISE GLOBAL CONSTRAINTS (for system prompt inclusion)
// ============================================================================

const CONCISE_CONSTRAINTS = `
CRITICAL RULES:
1. NEVER reproduce real past paper questions - generate original content only
2. Use ONLY factual information you are certain is correct
3. Follow the command word → marks relationship strictly
4. Return valid JSON only - no additional text
5. Use BRITISH ENGLISH spelling throughout (e.g., colour, behaviour, analyse, organisation, centre, travelled, programme)`;

// ============================================================================
// SYSTEM PROMPT BUILDERS
// ============================================================================

/**
 * Generate an enhanced system prompt for a specific subject/board/level combination.
 */
export function getEnhancedSystemPrompt(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  const specKey = `${subject}-${qualification}-${examBoard}`;
  const specCode = EXAM_BOARD_SPECS[specKey] || '';
  const boardConventions = BOARD_CONVENTIONS[examBoard];

  const levelName = qualification === 'gcse' ? 'GCSE' : 'A-Level';
  const boardName = examBoard.toUpperCase();
  const subjectName = formatSubjectName(subject);

  const specReference = specCode ? ` (${specCode})` : '';

  return `You are an expert ${boardName} ${levelName} ${subjectName}${specReference} examiner generating authentic exam-style questions.

${CONCISE_CONSTRAINTS}

${boardConventions}

MARK ALLOCATION RULES:
- "State", "Name", "Give", "Write down" = 1 mark
- "Describe", "Explain" = 2-4 marks
- "Calculate" with working = 2-4 marks
- "Evaluate", "Analyse", "Compare", "Discuss" = 3-6 marks
- Extended response / essay = 6+ marks

OUTPUT: Valid JSON only with structure: {"content": "...", "marks": N, "solution": "...", "markScheme": [...]}`;
}

/**
 * Get the full system prompt with all constraints (for detailed prompting).
 */
export function getFullSystemPrompt(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  const basePrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

  return `${basePrompt}

${COPYRIGHT_CONSTRAINTS}

${SAFETY_CONSTRAINTS}

${OUTPUT_FORMAT_CONSTRAINTS}`;
}

/**
 * Format subject name for display.
 */
function formatSubjectName(subject: Subject): string {
  const names: Record<Subject, string> = {
    'maths': 'Mathematics',
    'physics': 'Physics',
    'chemistry': 'Chemistry',
    'biology': 'Biology',
    'computer-science': 'Computer Science',
    'economics': 'Economics',
    'business': 'Business',
    'psychology': 'Psychology',
    'geography': 'Geography',
    'history': 'History',
    'english-literature': 'English Literature',
    'further-maths': 'Further Mathematics',
  };
  return names[subject] || subject;
}

/**
 * Get specification code for a subject/board/level.
 */
export function getSpecificationCode(
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string | undefined {
  const specKey = `${subject}-${qualification}-${examBoard}`;
  return EXAM_BOARD_SPECS[specKey];
}

// ============================================================================
// LEGACY COMPATIBILITY
// ============================================================================

/**
 * Get system prompt using the old key format (for backward compatibility).
 */
export function getSystemPromptByKey(key: string): string {
  // Parse the key (e.g., "physics-gcse" or "maths-a-level")
  const parts = key.split('-');

  if (parts.length < 2) {
    // Fallback to generic
    return getEnhancedSystemPrompt('maths', 'aqa', 'gcse');
  }

  // Handle subject names with hyphens
  let subject: Subject;
  let qualification: QualificationLevel;

  if (parts[parts.length - 1] === 'level' && parts[parts.length - 2] === 'a') {
    // A-Level
    qualification = 'a-level';
    subject = parts.slice(0, -2).join('-') as Subject;
  } else {
    // GCSE
    qualification = parts[parts.length - 1] as QualificationLevel;
    subject = parts.slice(0, -1).join('-') as Subject;
  }

  return getEnhancedSystemPrompt(subject, 'aqa', qualification);
}

// ============================================================================
// SYSTEM PROMPTS RECORD (for direct access)
// ============================================================================

/**
 * Pre-generated system prompts for common combinations.
 * Use getEnhancedSystemPrompt() for dynamic generation.
 */
export const ENHANCED_SYSTEM_PROMPTS: Record<string, string> = {
  // Maths
  'maths-gcse': getEnhancedSystemPrompt('maths', 'aqa', 'gcse'),
  'maths-a-level': getEnhancedSystemPrompt('maths', 'aqa', 'a-level'),

  // Physics
  'physics-gcse': getEnhancedSystemPrompt('physics', 'aqa', 'gcse'),
  'physics-a-level': getEnhancedSystemPrompt('physics', 'aqa', 'a-level'),

  // Chemistry
  'chemistry-gcse': getEnhancedSystemPrompt('chemistry', 'aqa', 'gcse'),
  'chemistry-a-level': getEnhancedSystemPrompt('chemistry', 'aqa', 'a-level'),

  // Biology
  'biology-gcse': getEnhancedSystemPrompt('biology', 'aqa', 'gcse'),
  'biology-a-level': getEnhancedSystemPrompt('biology', 'aqa', 'a-level'),

  // Computer Science
  'computer-science-gcse': getEnhancedSystemPrompt('computer-science', 'aqa', 'gcse'),
  'computer-science-a-level': getEnhancedSystemPrompt('computer-science', 'aqa', 'a-level'),

  // Economics
  'economics-gcse': getEnhancedSystemPrompt('economics', 'aqa', 'gcse'),
  'economics-a-level': getEnhancedSystemPrompt('economics', 'aqa', 'a-level'),

  // Business
  'business-gcse': getEnhancedSystemPrompt('business', 'aqa', 'gcse'),
  'business-a-level': getEnhancedSystemPrompt('business', 'aqa', 'a-level'),

  // Psychology
  'psychology-gcse': getEnhancedSystemPrompt('psychology', 'aqa', 'gcse'),
  'psychology-a-level': getEnhancedSystemPrompt('psychology', 'aqa', 'a-level'),

  // Geography
  'geography-gcse': getEnhancedSystemPrompt('geography', 'aqa', 'gcse'),
  'geography-a-level': getEnhancedSystemPrompt('geography', 'aqa', 'a-level'),

  // History
  'history-gcse': getEnhancedSystemPrompt('history', 'aqa', 'gcse'),
  'history-a-level': getEnhancedSystemPrompt('history', 'aqa', 'a-level'),

  // English Literature
  'english-literature-gcse': getEnhancedSystemPrompt('english-literature', 'aqa', 'gcse'),
  'english-literature-a-level': getEnhancedSystemPrompt('english-literature', 'aqa', 'a-level'),

  // Further Maths
  'further-maths-gcse': getEnhancedSystemPrompt('further-maths', 'aqa', 'gcse'),
  'further-maths-a-level': getEnhancedSystemPrompt('further-maths', 'aqa', 'a-level'),
};
