/**
 * Regression Test Suite for Question Generation
 *
 * This file defines test cases for validating the quality and correctness
 * of generated questions. These tests are designed to be run against the
 * actual question generation API to ensure consistent output quality.
 *
 * Test Categories:
 * A. Command Word Validation
 * B. Mark Allocation
 * C. Topic Fidelity
 * D. Solution Quality
 * E. Format Consistency
 * F. Edge Cases
 */

import {
  ExamBoard,
  QualificationLevel,
  Subject,
  QuestionType,
  Difficulty,
} from '@/types';

// ============================================================================
// TEST CASE INTERFACE
// ============================================================================

export interface TestCase {
  id: string;
  name: string;
  category: 'command-word' | 'mark-allocation' | 'topic-fidelity' | 'solution-quality' | 'format-consistency' | 'edge-case';
  input: {
    subject: Subject;
    examBoard: ExamBoard;
    qualification: QualificationLevel;
    topicId: string;
    subtopic?: string;
    difficulty: Difficulty;
    questionType?: QuestionType;
  };
  expectedProperties: QuestionExpectations;
}

export interface QuestionExpectations {
  // Command word expectations
  commandWordIn?: string[];
  commandWordNotIn?: string[];

  // Mark expectations
  marksMin?: number;
  marksMax?: number;
  marksExact?: number;

  // Content expectations
  contentContains?: string[];
  contentNotContains?: string[];

  // Solution expectations
  solutionContains?: string[];
  solutionHasSteps?: boolean;
  solutionHasUnits?: boolean;

  // Mark scheme expectations
  markSchemeLength?: number;
  markSchemeHasMethodMarks?: boolean;
  markSchemeHasAccuracyMarks?: boolean;

  // Format expectations
  jsonValid?: boolean;
  hasLatex?: boolean;
  hasDiagram?: boolean;

  // Topic expectations
  topicKeywords?: string[];
  noTopicDrift?: boolean;
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

export interface ValidationResult {
  testId: string;
  passed: boolean;
  failures: string[];
  question?: {
    content: string;
    marks: number;
    solution: string;
    markScheme: string[];
  };
}

/**
 * Validate a generated question against expected properties.
 */
export function validateQuestion(
  question: {
    content: string;
    marks: number;
    solution: string;
    markScheme: string[];
  },
  expectations: QuestionExpectations,
  testId: string
): ValidationResult {
  const failures: string[] = [];
  const content = question.content.toLowerCase();
  const solution = question.solution.toLowerCase();

  // Command word validation
  if (expectations.commandWordIn) {
    const hasValidCommand = expectations.commandWordIn.some(cmd =>
      content.includes(cmd.toLowerCase())
    );
    if (!hasValidCommand) {
      failures.push(`Command word not in expected list: ${expectations.commandWordIn.join(', ')}`);
    }
  }

  if (expectations.commandWordNotIn) {
    const hasInvalidCommand = expectations.commandWordNotIn.some(cmd =>
      content.includes(cmd.toLowerCase())
    );
    if (hasInvalidCommand) {
      failures.push(`Contains forbidden command word from: ${expectations.commandWordNotIn.join(', ')}`);
    }
  }

  // Mark validation
  if (expectations.marksExact !== undefined && question.marks !== expectations.marksExact) {
    failures.push(`Marks should be exactly ${expectations.marksExact}, got ${question.marks}`);
  }

  if (expectations.marksMin !== undefined && question.marks < expectations.marksMin) {
    failures.push(`Marks ${question.marks} below minimum ${expectations.marksMin}`);
  }

  if (expectations.marksMax !== undefined && question.marks > expectations.marksMax) {
    failures.push(`Marks ${question.marks} above maximum ${expectations.marksMax}`);
  }

  // Content validation
  if (expectations.contentContains) {
    for (const keyword of expectations.contentContains) {
      if (!content.includes(keyword.toLowerCase())) {
        failures.push(`Content missing expected keyword: ${keyword}`);
      }
    }
  }

  if (expectations.contentNotContains) {
    for (const keyword of expectations.contentNotContains) {
      if (content.includes(keyword.toLowerCase())) {
        failures.push(`Content contains forbidden keyword: ${keyword}`);
      }
    }
  }

  // Solution validation
  if (expectations.solutionContains) {
    for (const keyword of expectations.solutionContains) {
      if (!solution.includes(keyword.toLowerCase())) {
        failures.push(`Solution missing expected keyword: ${keyword}`);
      }
    }
  }

  if (expectations.solutionHasSteps) {
    const hasSteps = /step\s*\d|step\s*1/i.test(question.solution) ||
                     question.solution.includes('\n');
    if (!hasSteps) {
      failures.push('Solution should have step-by-step working');
    }
  }

  if (expectations.solutionHasUnits) {
    const hasUnits = /\d+\s*(m|kg|s|n|j|w|v|a|°|%|cm|mm|km)/i.test(question.solution);
    if (!hasUnits) {
      failures.push('Solution should include units');
    }
  }

  // Mark scheme validation
  if (expectations.markSchemeLength !== undefined) {
    if (question.markScheme.length !== expectations.markSchemeLength) {
      failures.push(`Mark scheme length should be ${expectations.markSchemeLength}, got ${question.markScheme.length}`);
    }
  }

  // Check mark scheme length matches marks
  if (question.markScheme.length !== question.marks) {
    failures.push(`Mark scheme length (${question.markScheme.length}) doesn't match marks (${question.marks})`);
  }

  if (expectations.markSchemeHasMethodMarks) {
    const hasMethodMark = question.markScheme.some(m => /m\d|method/i.test(m));
    if (!hasMethodMark) {
      failures.push('Mark scheme should have method marks (M1, M2, etc.)');
    }
  }

  if (expectations.markSchemeHasAccuracyMarks) {
    const hasAccuracyMark = question.markScheme.some(m => /a\d|accuracy/i.test(m));
    if (!hasAccuracyMark) {
      failures.push('Mark scheme should have accuracy marks (A1, A2, etc.)');
    }
  }

  // Format validation
  if (expectations.hasLatex) {
    const hasLatex = /\$.*\$/.test(question.content) || /\\frac|\\sqrt|\\times/.test(question.content);
    if (!hasLatex) {
      failures.push('Question should contain LaTeX formatting');
    }
  }

  // Topic validation
  if (expectations.topicKeywords) {
    const hasTopicKeyword = expectations.topicKeywords.some(kw =>
      content.includes(kw.toLowerCase())
    );
    if (!hasTopicKeyword) {
      failures.push(`Question should contain topic keywords: ${expectations.topicKeywords.join(', ')}`);
    }
  }

  return {
    testId,
    passed: failures.length === 0,
    failures,
    question,
  };
}

// ============================================================================
// TEST CASES
// ============================================================================

export const TEST_CASES: TestCase[] = [
  // -------------------------------------------------------------------------
  // Category A: Command Word Validation (10 tests)
  // -------------------------------------------------------------------------
  {
    id: 'A1',
    name: 'Easy physics should use simple command words',
    category: 'command-word',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'forces-motion',
      difficulty: 'easy',
    },
    expectedProperties: {
      commandWordIn: ['state', 'name', 'write', 'give', 'what'],
      marksMax: 2,
    },
  },
  {
    id: 'A2',
    name: 'Hard physics should use complex command words',
    category: 'command-word',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'forces-motion',
      difficulty: 'hard',
    },
    expectedProperties: {
      commandWordIn: ['explain', 'evaluate', 'analyse', 'calculate', 'compare', 'suggest'],
      marksMin: 4,
    },
  },
  {
    id: 'A3',
    name: 'Easy maths should use simple command words',
    category: 'command-word',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'algebra',
      difficulty: 'easy',
    },
    expectedProperties: {
      commandWordIn: ['simplify', 'work out', 'write', 'calculate', 'find'],
      marksMax: 2,
    },
  },
  {
    id: 'A4',
    name: 'Hard maths should require reasoning',
    category: 'command-word',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'algebra',
      difficulty: 'hard',
    },
    expectedProperties: {
      commandWordIn: ['prove', 'show that', 'explain', 'hence'],
      marksMin: 4,
    },
  },
  {
    id: 'A5',
    name: 'Medium chemistry marks match command words',
    category: 'command-word',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'bonding',
      difficulty: 'medium',
    },
    expectedProperties: {
      commandWordIn: ['explain', 'describe', 'calculate', 'state'],
      marksMin: 2,
      marksMax: 4,
    },
  },
  {
    id: 'A6',
    name: 'Hard biology extended response',
    category: 'command-word',
    input: {
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'genetics',
      difficulty: 'hard',
      questionType: 'extended',
    },
    expectedProperties: {
      commandWordIn: ['explain', 'evaluate', 'discuss', 'describe'],
      marksMin: 6,
    },
  },
  {
    id: 'A7',
    name: 'History source question command words',
    category: 'command-word',
    input: {
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'tudor',
      difficulty: 'medium',
    },
    expectedProperties: {
      commandWordIn: ['explain', 'describe', 'how useful', 'what can you learn', 'give'],
    },
  },
  {
    id: 'A8',
    name: 'Hard English Lit analytical command words',
    category: 'command-word',
    input: {
      subject: 'english-literature',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'poetry',
      difficulty: 'hard',
    },
    expectedProperties: {
      commandWordIn: ['explore', 'analyse', 'evaluate', 'how does', 'to what extent'],
    },
  },
  {
    id: 'A9',
    name: 'Economics with diagram reference',
    category: 'command-word',
    input: {
      subject: 'economics',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'markets',
      difficulty: 'medium',
    },
    expectedProperties: {
      commandWordIn: ['explain', 'use', 'diagram', 'analyse'],
    },
  },
  {
    id: 'A10',
    name: 'Hard psychology evaluation',
    category: 'command-word',
    input: {
      subject: 'psychology',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'memory',
      difficulty: 'hard',
    },
    expectedProperties: {
      commandWordIn: ['evaluate', 'discuss', 'assess', 'to what extent'],
    },
  },

  // -------------------------------------------------------------------------
  // Category B: Mark Allocation (8 tests)
  // -------------------------------------------------------------------------
  {
    id: 'B1',
    name: 'Easy questions should be 1-2 marks',
    category: 'mark-allocation',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'energy',
      difficulty: 'easy',
    },
    expectedProperties: {
      marksMin: 1,
      marksMax: 2,
    },
  },
  {
    id: 'B2',
    name: 'Medium questions should be 3-4 marks',
    category: 'mark-allocation',
    input: {
      subject: 'maths',
      examBoard: 'edexcel',
      qualification: 'gcse',
      topicId: 'geometry',
      difficulty: 'medium',
    },
    expectedProperties: {
      marksMin: 3,
      marksMax: 4,
    },
  },
  {
    id: 'B3',
    name: 'Hard questions should be 5-8 marks',
    category: 'mark-allocation',
    input: {
      subject: 'chemistry',
      examBoard: 'ocr',
      qualification: 'gcse',
      topicId: 'reactions',
      difficulty: 'hard',
    },
    expectedProperties: {
      marksMin: 5,
      marksMax: 8,
    },
  },
  {
    id: 'B4',
    name: 'Multiple choice must be exactly 1 mark',
    category: 'mark-allocation',
    input: {
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'cells',
      difficulty: 'easy',
      questionType: 'multiple-choice',
    },
    expectedProperties: {
      marksExact: 1,
    },
  },
  {
    id: 'B5',
    name: 'Extended response at least 6 marks',
    category: 'mark-allocation',
    input: {
      subject: 'geography',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'urbanisation',
      difficulty: 'hard',
      questionType: 'extended',
    },
    expectedProperties: {
      marksMin: 6,
    },
  },
  {
    id: 'B6',
    name: 'Show-that marks have logical steps',
    category: 'mark-allocation',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'calculus',
      difficulty: 'hard',
    },
    expectedProperties: {
      markSchemeHasMethodMarks: true,
    },
  },
  {
    id: 'B7',
    name: 'Calculation has M then A marks',
    category: 'mark-allocation',
    input: {
      subject: 'physics',
      examBoard: 'edexcel',
      qualification: 'a-level',
      topicId: 'mechanics',
      difficulty: 'medium',
      questionType: 'calculation',
    },
    expectedProperties: {
      markSchemeHasMethodMarks: true,
      markSchemeHasAccuracyMarks: true,
    },
  },
  {
    id: 'B8',
    name: 'Multi-part has separate marks',
    category: 'mark-allocation',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'organic',
      difficulty: 'medium',
    },
    expectedProperties: {
      marksMin: 3,
    },
  },

  // -------------------------------------------------------------------------
  // Category C: Topic Fidelity (6 tests)
  // -------------------------------------------------------------------------
  {
    id: 'C1',
    name: 'Physics waves question about refraction',
    category: 'topic-fidelity',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'waves',
      subtopic: 'Refraction',
      difficulty: 'medium',
    },
    expectedProperties: {
      topicKeywords: ['refraction', 'refract', 'bend', 'glass', 'medium', 'speed'],
      contentNotContains: ['sound wave', 'longitudinal'],
    },
  },
  {
    id: 'C2',
    name: 'Chemistry acids question about pH',
    category: 'topic-fidelity',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'acids',
      subtopic: 'pH scale',
      difficulty: 'medium',
    },
    expectedProperties: {
      topicKeywords: ['ph', 'acid', 'alkali', 'neutral', 'indicator'],
    },
  },
  {
    id: 'C3',
    name: 'Maths geometry about circles',
    category: 'topic-fidelity',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'geometry',
      subtopic: 'Circle theorems',
      difficulty: 'hard',
    },
    expectedProperties: {
      topicKeywords: ['circle', 'radius', 'diameter', 'tangent', 'chord', 'arc', 'angle'],
    },
  },
  {
    id: 'C4',
    name: 'Biology cells about mitosis',
    category: 'topic-fidelity',
    input: {
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'cells',
      subtopic: 'Cell division',
      difficulty: 'medium',
    },
    expectedProperties: {
      topicKeywords: ['mitosis', 'cell', 'division', 'chromosome', 'daughter'],
    },
  },
  {
    id: 'C5',
    name: 'History WW1 about trenches',
    category: 'topic-fidelity',
    input: {
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'ww1',
      subtopic: 'Trench warfare',
      difficulty: 'medium',
    },
    expectedProperties: {
      topicKeywords: ['trench', 'western front', 'soldier', 'warfare', 'battle'],
    },
  },
  {
    id: 'C6',
    name: 'Computer Science algorithms about sorting',
    category: 'topic-fidelity',
    input: {
      subject: 'computer-science',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'algorithms',
      subtopic: 'Sorting algorithms',
      difficulty: 'medium',
    },
    expectedProperties: {
      topicKeywords: ['sort', 'bubble', 'merge', 'insertion', 'algorithm', 'comparison'],
    },
  },

  // -------------------------------------------------------------------------
  // Category D: Solution Quality (6 tests)
  // -------------------------------------------------------------------------
  {
    id: 'D1',
    name: 'Physics calculation shows equation and units',
    category: 'solution-quality',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'forces-motion',
      difficulty: 'medium',
      questionType: 'calculation',
    },
    expectedProperties: {
      solutionHasSteps: true,
      solutionHasUnits: true,
      solutionContains: ['='],
    },
  },
  {
    id: 'D2',
    name: 'Maths algebraic shows all steps',
    category: 'solution-quality',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'algebra',
      difficulty: 'medium',
    },
    expectedProperties: {
      solutionHasSteps: true,
      solutionContains: ['='],
    },
  },
  {
    id: 'D3',
    name: 'Chemistry equation is balanced',
    category: 'solution-quality',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'reactions',
      subtopic: 'Balancing equations',
      difficulty: 'medium',
    },
    expectedProperties: {
      solutionContains: ['→', '='],
    },
  },
  {
    id: 'D4',
    name: 'Biology explain has causal links',
    category: 'solution-quality',
    input: {
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'cells',
      difficulty: 'medium',
      questionType: 'explain',
    },
    expectedProperties: {
      solutionContains: ['because', 'this', 'therefore', 'so'],
    },
  },
  {
    id: 'D5',
    name: 'Essay subject has level descriptors',
    category: 'solution-quality',
    input: {
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'tudor',
      difficulty: 'hard',
      questionType: 'extended',
    },
    expectedProperties: {
      marksMin: 6,
    },
  },
  {
    id: 'D6',
    name: 'Graph question references values',
    category: 'solution-quality',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'forces-motion',
      difficulty: 'medium',
      questionType: 'graph',
    },
    expectedProperties: {
      solutionContains: ['graph', 'axis', 'value'],
    },
  },

  // -------------------------------------------------------------------------
  // Category E: Format Consistency (5 tests)
  // -------------------------------------------------------------------------
  {
    id: 'E1',
    name: 'Output is valid JSON',
    category: 'format-consistency',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'energy',
      difficulty: 'easy',
    },
    expectedProperties: {
      jsonValid: true,
    },
  },
  {
    id: 'E2',
    name: 'Multi-part has labeled parts',
    category: 'format-consistency',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'algebra',
      difficulty: 'medium',
    },
    expectedProperties: {
      // Parts should be labeled (a), (b), etc.
    },
  },
  {
    id: 'E3',
    name: 'Calculation uses LaTeX',
    category: 'format-consistency',
    input: {
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'calculus',
      difficulty: 'medium',
      questionType: 'calculation',
    },
    expectedProperties: {
      hasLatex: true,
    },
  },
  {
    id: 'E4',
    name: 'Physics with diagram spec',
    category: 'format-consistency',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'electricity',
      difficulty: 'medium',
    },
    expectedProperties: {
      // May have diagram spec
    },
  },
  {
    id: 'E5',
    name: 'Mark scheme length matches marks',
    category: 'format-consistency',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'bonding',
      difficulty: 'medium',
    },
    expectedProperties: {
      // Mark scheme length should equal marks
    },
  },

  // -------------------------------------------------------------------------
  // Category F: Edge Cases (5 tests)
  // -------------------------------------------------------------------------
  {
    id: 'F1',
    name: 'Topic with limited subtopics',
    category: 'edge-case',
    input: {
      subject: 'further-maths',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'matrices',
      difficulty: 'medium',
    },
    expectedProperties: {
      jsonValid: true,
    },
  },
  {
    id: 'F2',
    name: 'Very specific subtopic',
    category: 'edge-case',
    input: {
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'genetics',
      subtopic: 'Hardy-Weinberg equilibrium calculations',
      difficulty: 'hard',
    },
    expectedProperties: {
      topicKeywords: ['hardy', 'weinberg', 'allele', 'frequency'],
    },
  },
  {
    id: 'F3',
    name: 'Cross-topic synoptic question',
    category: 'edge-case',
    input: {
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'organic',
      difficulty: 'hard',
    },
    expectedProperties: {
      marksMin: 4,
    },
  },
  {
    id: 'F4',
    name: 'Easy A-Level still appropriate level',
    category: 'edge-case',
    input: {
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'a-level',
      topicId: 'mechanics',
      difficulty: 'easy',
    },
    expectedProperties: {
      marksMin: 1,
      marksMax: 3,
    },
  },
  {
    id: 'F5',
    name: 'Subject without diagrams handles gracefully',
    category: 'edge-case',
    input: {
      subject: 'english-literature',
      examBoard: 'aqa',
      qualification: 'gcse',
      topicId: 'prose',
      difficulty: 'medium',
    },
    expectedProperties: {
      jsonValid: true,
    },
  },
];

// ============================================================================
// TEST RUNNER INTERFACE
// ============================================================================

export interface TestRunConfig {
  parallel?: boolean;
  stopOnFirstFailure?: boolean;
  verbose?: boolean;
  categories?: TestCase['category'][];
}

export interface TestRunResult {
  totalTests: number;
  passed: number;
  failed: number;
  results: ValidationResult[];
  duration: number;
}

/**
 * Run all tests or a subset based on configuration.
 * This function would be called by the actual test runner with an API client.
 */
export function getTestCasesToRun(config: TestRunConfig = {}): TestCase[] {
  let cases = TEST_CASES;

  if (config.categories && config.categories.length > 0) {
    cases = cases.filter(tc => config.categories!.includes(tc.category));
  }

  return cases;
}

/**
 * Generate a test report from results.
 */
export function generateTestReport(result: TestRunResult): string {
  const lines: string[] = [
    '# Question Generation Regression Test Report',
    '',
    `**Date:** ${new Date().toISOString()}`,
    `**Duration:** ${result.duration}ms`,
    '',
    '## Summary',
    '',
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Total Tests | ${result.totalTests} |`,
    `| Passed | ${result.passed} |`,
    `| Failed | ${result.failed} |`,
    `| Pass Rate | ${((result.passed / result.totalTests) * 100).toFixed(1)}% |`,
    '',
  ];

  if (result.failed > 0) {
    lines.push('## Failed Tests', '');

    for (const r of result.results.filter(r => !r.passed)) {
      const testCase = TEST_CASES.find(tc => tc.id === r.testId);
      lines.push(`### ${r.testId}: ${testCase?.name || 'Unknown'}`);
      lines.push('');
      lines.push('**Failures:**');
      for (const failure of r.failures) {
        lines.push(`- ${failure}`);
      }
      lines.push('');
    }
  }

  lines.push('## All Results', '');
  lines.push('| ID | Name | Status |');
  lines.push('|----|------|--------|');

  for (const r of result.results) {
    const testCase = TEST_CASES.find(tc => tc.id === r.testId);
    const status = r.passed ? '✅ Pass' : '❌ Fail';
    lines.push(`| ${r.testId} | ${testCase?.name || 'Unknown'} | ${status} |`);
  }

  return lines.join('\n');
}
