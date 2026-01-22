/**
 * AI Output Validation for Question Generation
 *
 * Validates AI-generated questions across all subjects to catch structural issues,
 * format violations, and quality problems before questions reach users.
 */

import { z } from 'zod';
import { Subject, ExamBoard, QualificationLevel, Difficulty } from '@/types';

// ============================================================================
// Types & Interfaces
// ============================================================================

export type ValidationSeverity = 'error' | 'warning';

export interface ValidationIssue {
  code: string;
  message: string;
  field?: string;
  severity: ValidationSeverity;
}

export interface QuestionValidationResult {
  valid: boolean;
  data?: QuestionOutput;
  errors: ValidationIssue[];
  warnings: ValidationIssue[];
  shouldRegenerate: boolean;
}

export interface ValidationContext {
  subject: Subject;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  difficulty: Difficulty;
}

export interface QuestionOutput {
  content: string;
  solution: string;
  marks: number;
  markScheme: string[];
  diagram?: unknown;
  solutionDiagram?: unknown;
}

// ============================================================================
// Zod Schemas
// ============================================================================

export const DiagramSpecSchema = z.object({
  width: z.number().optional(),
  height: z.number().optional(),
  showNotAccurate: z.boolean().optional(),
  elements: z.array(z.record(z.string(), z.unknown())).optional(),
}).passthrough().optional();

export const BaseQuestionSchema = z.object({
  content: z.string().min(10, 'Question content must be at least 10 characters'),
  solution: z.string().min(5, 'Solution must be at least 5 characters'),
  marks: z.number().int().min(1, 'Marks must be at least 1').max(50, 'Marks cannot exceed 50'),
  markScheme: z.array(z.string()).min(1, 'Mark scheme must have at least 1 item'),
  diagram: DiagramSpecSchema,
  solutionDiagram: DiagramSpecSchema,
});

// ============================================================================
// Subject-Specific Mark Ranges
// ============================================================================

interface MarkRange {
  min: number;
  max: number;
}

type SubjectMarkRanges = {
  [level in QualificationLevel]?: {
    [difficulty in Difficulty]?: MarkRange;
  };
};

const MARK_RANGES: Record<string, SubjectMarkRanges> = {
  maths: {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 3, max: 5 }, hard: { min: 5, max: 8 } },
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 15 } },
  },
  'further-maths': {
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 15 } },
  },
  physics: {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 3, max: 5 }, hard: { min: 5, max: 6 } },
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 25 } },
  },
  chemistry: {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 3, max: 5 }, hard: { min: 5, max: 6 } },
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 25 } },
  },
  biology: {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 3, max: 5 }, hard: { min: 5, max: 6 } },
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 25 } },
  },
  'combined-science': {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 3, max: 5 }, hard: { min: 5, max: 6 } },
  },
  'computer-science': {
    gcse: { easy: { min: 1, max: 3 }, medium: { min: 4, max: 6 }, hard: { min: 6, max: 8 } },
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 5, max: 8 }, hard: { min: 8, max: 12 } },
  },
  'english-literature': {
    gcse: { easy: { min: 4, max: 8 }, medium: { min: 15, max: 20 }, hard: { min: 30, max: 34 } },
    'a-level': { easy: { min: 8, max: 15 }, medium: { min: 20, max: 25 }, hard: { min: 25, max: 40 } },
  },
  history: {
    gcse: { easy: { min: 4, max: 4 }, medium: { min: 8, max: 12 }, hard: { min: 16, max: 20 } },
    'a-level': { easy: { min: 5, max: 8 }, medium: { min: 12, max: 15 }, hard: { min: 20, max: 25 } },
  },
  geography: {
    gcse: { easy: { min: 4, max: 6 }, medium: { min: 6, max: 9 }, hard: { min: 9, max: 15 } },
    'a-level': { easy: { min: 4, max: 6 }, medium: { min: 9, max: 12 }, hard: { min: 16, max: 20 } },
  },
  psychology: {
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 6, max: 8 }, hard: { min: 12, max: 16 } },
  },
  economics: {
    'a-level': { easy: { min: 2, max: 4 }, medium: { min: 8, max: 15 }, hard: { min: 20, max: 25 } },
  },
  business: {
    gcse: { easy: { min: 2, max: 4 }, medium: { min: 6, max: 9 }, hard: { min: 12, max: 15 } },
    'a-level': { easy: { min: 4, max: 8 }, medium: { min: 12, max: 20 }, hard: { min: 20, max: 30 } },
  },
};

// ============================================================================
// Subject Classification Helpers
// ============================================================================

const QUANTITATIVE_SUBJECTS: Subject[] = [
  'maths',
  'further-maths',
  'physics',
  'chemistry',
  'biology',
  'combined-science',
];

const ESSAY_SUBJECTS: Subject[] = [
  'english-literature',
  'history',
  'geography',
  'psychology',
  'economics',
  'business',
];

const LATEX_SUBJECTS: Subject[] = [
  'maths',
  'further-maths',
  'physics',
  'chemistry',
];

function isQuantitativeSubject(subject: Subject): boolean {
  return QUANTITATIVE_SUBJECTS.includes(subject);
}

function isEssaySubject(subject: Subject): boolean {
  return ESSAY_SUBJECTS.includes(subject);
}

function isLatexSubject(subject: Subject): boolean {
  return LATEX_SUBJECTS.includes(subject);
}

function isComputerScience(subject: Subject): boolean {
  return subject === 'computer-science';
}

// ============================================================================
// Validators
// ============================================================================

/**
 * Validates structure using Zod schema
 */
function validateStructure(raw: unknown): {
  valid: boolean;
  data?: QuestionOutput;
  issues: ValidationIssue[];
} {
  const result = BaseQuestionSchema.safeParse(raw);

  if (result.success) {
    return { valid: true, data: result.data as QuestionOutput, issues: [] };
  }

  const issues: ValidationIssue[] = result.error.issues.map((issue) => ({
    code: 'SCHEMA_VALIDATION_FAILED',
    message: `${issue.path.join('.')}: ${issue.message}`,
    field: issue.path.join('.'),
    severity: 'error' as ValidationSeverity,
  }));

  return { valid: false, issues };
}

/**
 * Validates mark ranges based on subject, difficulty, and qualification level
 */
function validateMarks(
  marks: number,
  context: ValidationContext
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const subjectRanges = MARK_RANGES[context.subject];

  if (!subjectRanges) {
    // Unknown subject - just validate absolute bounds
    if (marks < 1) {
      issues.push({
        code: 'MARKS_TOO_LOW',
        message: 'Marks must be at least 1',
        field: 'marks',
        severity: 'error',
      });
    }
    if (marks > 50) {
      issues.push({
        code: 'MARKS_TOO_HIGH',
        message: 'Marks cannot exceed 50',
        field: 'marks',
        severity: 'error',
      });
    }
    return issues;
  }

  const levelRanges = subjectRanges[context.qualification];
  if (!levelRanges) {
    return issues; // No specific range for this level
  }

  const difficultyRange = levelRanges[context.difficulty];
  if (!difficultyRange) {
    return issues; // No specific range for this difficulty
  }

  if (marks < difficultyRange.min || marks > difficultyRange.max) {
    issues.push({
      code: 'MARKS_OUT_OF_EXPECTED_RANGE',
      message: `Marks (${marks}) outside expected range [${difficultyRange.min}-${difficultyRange.max}] for ${context.subject} ${context.qualification} ${context.difficulty}`,
      field: 'marks',
      severity: 'warning',
    });
  }

  return issues;
}

/**
 * Validates LaTeX delimiters for quantitative subjects
 */
function validateLatex(content: string, context: ValidationContext): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!isLatexSubject(context.subject)) {
    return issues;
  }

  // Check for balanced $ delimiters (inline math)
  const dollarCount = (content.match(/(?<!\\)\$/g) || []).length;
  if (dollarCount % 2 !== 0) {
    issues.push({
      code: 'LATEX_UNBALANCED_INLINE',
      message: 'Unbalanced $ delimiters in LaTeX (odd number found)',
      field: 'content',
      severity: 'warning',
    });
  }

  // Check for balanced $$ delimiters (display math)
  const doubleDollarMatches = content.match(/\$\$/g) || [];
  if (doubleDollarMatches.length % 2 !== 0) {
    issues.push({
      code: 'LATEX_UNBALANCED_DISPLAY',
      message: 'Unbalanced $$ delimiters in LaTeX (odd number found)',
      field: 'content',
      severity: 'warning',
    });
  }

  // Check for balanced braces in LaTeX contexts
  const latexContent = content.replace(/[^$]*(?:\$[^$]*\$[^$]*)*/g, (match) => {
    // Count braces only within $ delimiters
    const openBraces = (match.match(/\{/g) || []).length;
    const closeBraces = (match.match(/\}/g) || []).length;
    if (openBraces !== closeBraces) {
      issues.push({
        code: 'LATEX_UNBALANCED_BRACES',
        message: `Unbalanced braces in LaTeX: ${openBraces} open, ${closeBraces} close`,
        field: 'content',
        severity: 'warning',
      });
    }
    return match;
  });

  // Warning if no math content in maths/physics questions
  if (['maths', 'further-maths', 'physics'].includes(context.subject)) {
    const hasMathContent = /\$[^$]+\$/.test(content) || /\\[a-zA-Z]+/.test(content);
    if (!hasMathContent) {
      issues.push({
        code: 'MISSING_MATH_CONTENT',
        message: `Expected mathematical content (LaTeX) in ${context.subject} question`,
        field: 'content',
        severity: 'warning',
      });
    }
  }

  return issues;
}

/**
 * Validates code blocks for Computer Science questions
 */
function validateCodeBlocks(
  content: string,
  solution: string,
  markScheme: string[],
  context: ValidationContext
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!isComputerScience(context.subject)) {
    return issues;
  }

  const fullText = `${content}\n${solution}\n${markScheme.join('\n')}`;

  // Check for triple backtick code blocks when code is expected
  const codeKeywords = [
    'write a program',
    'write code',
    'write an algorithm',
    'write a function',
    'write a subroutine',
    'write a procedure',
    'complete the code',
    'pseudocode',
    'trace table',
  ];

  const expectsCode = codeKeywords.some((kw) =>
    content.toLowerCase().includes(kw)
  );

  if (expectsCode) {
    const hasCodeBlock = /```[\s\S]*?```/.test(fullText);
    if (!hasCodeBlock) {
      issues.push({
        code: 'MISSING_CODE_BLOCK',
        message: 'Expected code block (triple backticks) for code/algorithm question',
        field: 'content',
        severity: 'warning',
      });
    }
  }

  // Check for AQA pseudocode keywords (if present, should have matching END keywords)
  const pseudocodePatterns = [
    { start: /\bIF\b/i, end: /\bENDIF\b/i, name: 'IF/ENDIF' },
    { start: /\bWHILE\b/i, end: /\bENDWHILE\b/i, name: 'WHILE/ENDWHILE' },
    { start: /\bFOR\b/i, end: /\bENDFOR\b|NEXT\b/i, name: 'FOR/ENDFOR' },
    { start: /\bSUBROUTINE\b/i, end: /\bENDSUBROUTINE\b/i, name: 'SUBROUTINE/ENDSUBROUTINE' },
  ];

  for (const pattern of pseudocodePatterns) {
    const hasStart = pattern.start.test(fullText);
    const hasEnd = pattern.end.test(fullText);
    if (hasStart && !hasEnd) {
      issues.push({
        code: 'PSEUDOCODE_MISSING_END',
        message: `Pseudocode has ${pattern.name.split('/')[0]} but missing ${pattern.name.split('/')[1]}`,
        field: 'content',
        severity: 'warning',
      });
    }
  }

  // Check trace tables use markdown format
  if (/trace table/i.test(content)) {
    const hasMarkdownTable = /\|.*\|/.test(solution) || /\|.*\|/.test(markScheme.join('\n'));
    if (!hasMarkdownTable) {
      issues.push({
        code: 'TRACE_TABLE_FORMAT',
        message: 'Trace table should use markdown table format',
        field: 'solution',
        severity: 'warning',
      });
    }
  }

  return issues;
}

/**
 * Validates mark scheme format based on subject type
 */
function validateMarkScheme(
  markScheme: string[],
  marks: number,
  context: ValidationContext
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const markSchemeText = markScheme.join('\n');

  // Check for M/A/B notation in quantitative subjects
  if (isQuantitativeSubject(context.subject)) {
    const hasMABNotation = /\b[MAB]\d\b/.test(markSchemeText);
    const hasCommonNotation = /\b(ft|cao|oe|owtte|isw|awrt|dep)\b/i.test(markSchemeText);

    if (!hasMABNotation && marks >= 2) {
      issues.push({
        code: 'MISSING_MAB_NOTATION',
        message: 'Mark scheme for quantitative subject should use M/A/B notation (M1, A1, B1)',
        field: 'markScheme',
        severity: 'warning',
      });
    }
  }

  // Check for level descriptors in essay subjects with 6+ marks
  if (isEssaySubject(context.subject) && marks >= 6) {
    const hasLevelDescriptors = /Level\s+\d/i.test(markSchemeText) ||
      /\(\d+-\d+\s*marks?\)/i.test(markSchemeText);

    if (!hasLevelDescriptors) {
      issues.push({
        code: 'MISSING_LEVEL_DESCRIPTORS',
        message: 'Extended response (6+ marks) should have level descriptors',
        field: 'markScheme',
        severity: 'warning',
      });
    }

    // Check for indicative content
    const hasIndicativeContent = /indicative content/i.test(markSchemeText) ||
      /students may include/i.test(markSchemeText) ||
      /answers may include/i.test(markSchemeText) ||
      markScheme.length >= 3; // At least 3 points suggests indicative content

    if (!hasIndicativeContent) {
      issues.push({
        code: 'MISSING_INDICATIVE_CONTENT',
        message: 'Extended response should include indicative content section',
        field: 'markScheme',
        severity: 'warning',
      });
    }
  }

  // Computer Science: M/A/B for calculations, level descriptors for extended
  if (isComputerScience(context.subject) && marks >= 8) {
    const hasLevelDescriptors = /Level\s+\d/i.test(markSchemeText);
    if (!hasLevelDescriptors) {
      issues.push({
        code: 'CS_MISSING_LEVEL_DESCRIPTORS',
        message: 'Extended CS response (8+ marks) should have level descriptors',
        field: 'markScheme',
        severity: 'warning',
      });
    }
  }

  return issues;
}

/**
 * Validates content quality metrics
 */
function validateContentQuality(
  content: string,
  solution: string,
  marks: number,
  context: ValidationContext
): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  // Check minimum content length relative to marks
  const expectedMinLength = marks * 10; // ~10 chars per mark minimum
  if (content.length < expectedMinLength) {
    issues.push({
      code: 'CONTENT_TOO_SHORT',
      message: `Content (${content.length} chars) may be too short for ${marks} marks (expected ~${expectedMinLength}+ chars)`,
      field: 'content',
      severity: 'warning',
    });
  }

  // Check for presence of question (should end with ? or have command word)
  const hasQuestion = content.includes('?');
  const commandWords = [
    'calculate',
    'find',
    'determine',
    'work out',
    'show that',
    'prove',
    'explain',
    'describe',
    'evaluate',
    'analyse',
    'analyze',
    'compare',
    'contrast',
    'discuss',
    'state',
    'give',
    'write',
    'draw',
    'sketch',
    'complete',
    'solve',
    'simplify',
    'factorise',
    'factorize',
    'expand',
  ];
  const hasCommandWord = commandWords.some((word) =>
    content.toLowerCase().includes(word)
  );

  if (!hasQuestion && !hasCommandWord) {
    issues.push({
      code: 'MISSING_QUESTION_INDICATOR',
      message: 'Content should contain a question mark or command word',
      field: 'content',
      severity: 'warning',
    });
  }

  // Check solution length is reasonable
  const minSolutionLength = Math.max(20, marks * 5);
  if (solution.length < minSolutionLength) {
    issues.push({
      code: 'SOLUTION_TOO_SHORT',
      message: `Solution (${solution.length} chars) may be too short for ${marks} marks`,
      field: 'solution',
      severity: 'warning',
    });
  }

  return issues;
}

// ============================================================================
// Main Validation Function
// ============================================================================

/**
 * Validates AI-generated question output
 *
 * @param raw - Raw AI output (should be parsed JSON object)
 * @param context - Validation context (subject, exam board, qualification, difficulty)
 * @returns Validation result with errors, warnings, and whether to regenerate
 */
export function validateQuestionOutput(
  raw: unknown,
  context: ValidationContext
): QuestionValidationResult {
  const errors: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];

  // 1. Validate structure
  const structureResult = validateStructure(raw);
  if (!structureResult.valid || !structureResult.data) {
    return {
      valid: false,
      errors: structureResult.issues,
      warnings: [],
      shouldRegenerate: true,
    };
  }

  const data = structureResult.data;

  // 2. Validate marks
  const markIssues = validateMarks(data.marks, context);
  for (const issue of markIssues) {
    if (issue.severity === 'error') {
      errors.push(issue);
    } else {
      warnings.push(issue);
    }
  }

  // 3. Validate LaTeX (for quantitative subjects)
  const latexIssues = validateLatex(data.content, context);
  warnings.push(...latexIssues);

  // 4. Validate code blocks (for CS)
  const codeIssues = validateCodeBlocks(
    data.content,
    data.solution,
    data.markScheme,
    context
  );
  warnings.push(...codeIssues);

  // 5. Validate mark scheme format
  const markSchemeIssues = validateMarkScheme(data.markScheme, data.marks, context);
  warnings.push(...markSchemeIssues);

  // 6. Validate content quality
  const qualityIssues = validateContentQuality(
    data.content,
    data.solution,
    data.marks,
    context
  );
  warnings.push(...qualityIssues);

  const valid = errors.length === 0;
  const shouldRegenerate = errors.length > 0;

  return {
    valid,
    data,
    errors,
    warnings,
    shouldRegenerate,
  };
}

// ============================================================================
// Utility Exports
// ============================================================================

export { isQuantitativeSubject, isEssaySubject, isLatexSubject, isComputerScience };
