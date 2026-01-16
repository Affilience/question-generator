/**
 * Prompt Builder
 *
 * Assembles prompts from multiple layers:
 * 1. Global constraints (copyright, accuracy, safety)
 * 2. Exam board context (conventions, AOs)
 * 3. Subject specifics (equations, constants)
 * 4. Question type guidance
 * 5. Instance parameters (topic, difficulty, marks)
 */

import { ExamBoard, QualificationLevel, Subject, QuestionType, Difficulty, Topic } from '@/types';
import { getEnhancedSystemPrompt } from './system-prompts';
import { getAllConstraints, getSubjectAccuracyConstraints } from './global-constraints';
import {
  getQuestionTypeTemplate,
  getDifficultyModifierForType,
  QUESTION_TYPE_DESCRIPTIONS,
  MARK_RANGES_BY_TYPE,
} from './question-types';

// ============================================================================
// PROMPT LAYERS INTERFACE
// ============================================================================

export interface PromptLayers {
  system: string;
  user: string;
}

export interface QuestionGenerationParams {
  subject: Subject;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  topic: Topic;
  subtopic: string;
  difficulty: Difficulty;
  questionType: QuestionType;
  targetMarks?: number;
  additionalContext?: string;
}

// ============================================================================
// MAIN PROMPT BUILDER
// ============================================================================

/**
 * Build a complete prompt for question generation using the layered architecture.
 */
export function buildQuestionPrompt(params: QuestionGenerationParams): PromptLayers {
  const {
    subject,
    examBoard,
    qualification,
    topic,
    subtopic,
    difficulty,
    questionType,
    targetMarks,
    additionalContext,
  } = params;

  // Layer 1 & 2: System prompt with global constraints and exam board context
  const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

  // Layer 3: Subject-specific constraints (equations, constants, accuracy rules)
  const subjectConstraints = getAllConstraints(subject);

  // Layer 4: Question type guidance
  const typeTemplate = getQuestionTypeTemplate(questionType);
  const difficultyModifier = getDifficultyModifierForType(questionType, difficulty);

  // Layer 5: Instance parameters
  const instanceParams = buildInstanceParameters({
    topic,
    subtopic,
    difficulty,
    questionType,
    targetMarks,
    examBoard,
    qualification,
    subject,
  });

  // Assemble user prompt
  const userPrompt = `${subjectConstraints}

${typeTemplate}

## DIFFICULTY GUIDANCE
${difficultyModifier}

${instanceParams}

${additionalContext ? `\n## ADDITIONAL CONTEXT\n${additionalContext}` : ''}

Generate the question now. Return ONLY valid JSON.`;

  return {
    system: systemPrompt,
    user: userPrompt,
  };
}

// ============================================================================
// INSTANCE PARAMETERS BUILDER
// ============================================================================

interface InstanceParams {
  topic: Topic;
  subtopic: string;
  difficulty: Difficulty;
  questionType: QuestionType;
  targetMarks?: number;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
}

function buildInstanceParameters(params: InstanceParams): string {
  const {
    topic,
    subtopic,
    difficulty,
    questionType,
    targetMarks,
    examBoard,
    qualification,
    subject,
  } = params;

  const levelDisplay = qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = examBoard.toUpperCase();

  // Calculate marks if not specified
  const markRange = MARK_RANGES_BY_TYPE[questionType];
  const marks = targetMarks || Math.floor((markRange.min + markRange.max) / 2);

  // Difficulty descriptions
  const difficultyDesc = {
    easy: 'Foundation level (Grades 1-3): Basic recall and simple application',
    medium: 'Standard level (Grades 4-5): Application and some reasoning',
    hard: 'Higher level (Grades 6-9): Complex reasoning and analysis',
  };

  return `## YOUR TASK

Generate ${QUESTION_TYPE_DESCRIPTIONS[questionType]} for ${boardUpper} ${levelDisplay} ${formatSubject(subject)}.

**Specification:** ${boardUpper} ${levelDisplay}
**Topic:** ${topic.name}
**Subtopic:** ${subtopic}
**Difficulty:** ${difficultyDesc[difficulty]}
**Target Marks:** ${marks}
**Question Type:** ${questionType}

## JSON OUTPUT FORMAT

Return this exact structure:
{
  "content": "Question text with proper formatting. Use $...$ for LaTeX math. Use \\n for newlines.",
  "marks": ${marks},
  "solution": "Complete step-by-step solution that would earn full marks",
  "markScheme": ["M1: First mark point", "A1: Second mark point", ...]
}

## FORMATTING REQUIREMENTS

1. **Question content:**
   - Context/information first
   - Blank line before questions (\\n\\n)
   - Parts labeled (a), (b), (c) on separate lines
   - Mark allocations: [X marks] at end

2. **Mark scheme:**
   - One entry per mark
   - M1 = method mark, A1 = accuracy mark, B1 = independent mark
   - For multi-part: "(a) M1: description"
   - Length must equal marks value`;
}

// ============================================================================
// COMPACT PROMPT BUILDER
// ============================================================================

/**
 * Build a minimal prompt for fast generation (fewer tokens).
 * Use for simple questions or when cost is a concern.
 */
export function buildCompactPrompt(params: QuestionGenerationParams): PromptLayers {
  const {
    subject,
    examBoard,
    qualification,
    topic,
    subtopic,
    difficulty,
    questionType,
    targetMarks,
  } = params;

  const levelDisplay = qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = examBoard.toUpperCase();
  const markRange = MARK_RANGES_BY_TYPE[questionType];
  const marks = targetMarks || Math.floor((markRange.min + markRange.max) / 2);

  const systemPrompt = `You are a ${boardUpper} ${levelDisplay} ${formatSubject(subject)} examiner. Generate original exam-style questions. Return ONLY valid JSON.

CRITICAL: Never copy real past paper questions. Generate original content only.`;

  const userPrompt = `Generate ${QUESTION_TYPE_DESCRIPTIONS[questionType]}.

Topic: ${topic.name} - ${subtopic}
Difficulty: ${difficulty}
Marks: ${marks}

Return JSON: {"content":"...","marks":${marks},"solution":"...","markScheme":["M1:...","A1:..."]}`;

  return {
    system: systemPrompt,
    user: userPrompt,
  };
}

// ============================================================================
// PAPER ASSEMBLY PROMPT BUILDER
// ============================================================================

export interface PaperQuestionParams extends QuestionGenerationParams {
  questionNumber: string;
  sectionName: string;
  paperContext: string;
}

/**
 * Build a prompt for generating a question as part of a paper.
 * Includes paper context for coherence.
 */
export function buildPaperQuestionPrompt(params: PaperQuestionParams): PromptLayers {
  const basePrompt = buildQuestionPrompt(params);

  const paperContext = `
## PAPER CONTEXT

This question is part of a full exam paper:
- **Question Number:** ${params.questionNumber}
- **Section:** ${params.sectionName}
- **Paper Context:** ${params.paperContext}

Ensure the question:
- Fits the section's style and difficulty progression
- Does not overlap with other questions in the paper
- Maintains consistent formatting with the rest of the paper`;

  return {
    system: basePrompt.system,
    user: `${paperContext}\n\n${basePrompt.user}`,
  };
}

// ============================================================================
// VALIDATION PROMPT
// ============================================================================

/**
 * Build a prompt to validate a generated question for quality.
 */
export function buildValidationPrompt(
  question: { content: string; marks: number; solution: string; markScheme: string[] },
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  return `Review this ${examBoard.toUpperCase()} ${qualification === 'a-level' ? 'A-Level' : 'GCSE'} ${formatSubject(subject)} question for quality:

QUESTION:
${question.content}

MARKS: ${question.marks}

SOLUTION:
${question.solution}

MARK SCHEME:
${question.markScheme.join('\n')}

---

CHECK FOR:
1. COPYRIGHT: Does this closely resemble any known past paper question? (Yes/No)
2. ACCURACY: Are all facts, values, and equations correct? (Yes/No)
3. COMMAND WORD: Does the command word match the marks and expected response? (Yes/No)
4. CLARITY: Is the question unambiguous? (Yes/No)
5. SOLUTION QUALITY: Would the solution earn full marks? (Yes/No)
6. MARK SCHEME: Does mark scheme length equal marks? (Yes/No)

Return JSON: {"valid": true/false, "issues": ["issue1", "issue2"], "suggestions": ["suggestion1"]}`;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatSubject(subject: Subject): string {
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
 * Estimate token count for a prompt (rough approximation).
 * Useful for cost estimation and deciding between full/compact prompts.
 */
export function estimateTokenCount(prompt: PromptLayers): number {
  const totalChars = prompt.system.length + prompt.user.length;
  // Rough estimate: ~4 characters per token
  return Math.ceil(totalChars / 4);
}
