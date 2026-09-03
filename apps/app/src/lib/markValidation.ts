/**
 * Mark validation and consistency utilities
 * Ensures marks displayed match between question.marks and markScheme
 */

/**
 * Parse one mark-scheme point.
 *
 * Mark codes are ORDINALS, not values: in every UK exam board's scheme M1 is
 * "the first method mark", A2 is "the second accuracy mark". Each labelled
 * point is worth exactly one mark. Reading the digit as a value (M2 -> 2)
 * inflated totals across the whole question bank — measured at 1,166 of 2,441
 * stored questions whose recorded total equalled the sum of their label digits.
 *
 * A point may still declare a larger value explicitly, e.g. "B2 (2 marks):" or
 * "M1 [2]"; those are honoured.
 */
export function parseMarkSchemePoint(point: string): { markType: string; value: number; description: string } {
  // Match patterns like "M1:", "(a) M2:", "A3:", "B1:", "SC1:"
  const match = point.match(/^(?:\([a-z]\)\s*)?(M\d+|A\d+|B\d+|SC\d*):?\s*(.*)$/i);
  if (match) {
    const markType = match[1].toUpperCase();
    const description = match[2];

    return { markType, value: extractExplicitMarks(point) ?? 1, description };
  }

  // Fallback for non-standard format - treat as 1 mark
  return { markType: '', value: extractExplicitMarks(point) ?? 1, description: point };
}

/**
 * Read an explicitly stated mark value, e.g. "(2 marks)", "[3]", "2 marks".
 * Returns null when the point does not state one.
 */
function extractExplicitMarks(point: string): number | null {
  const parenthesised = point.match(/\(\s*(\d+)\s*marks?\s*\)/i);
  if (parenthesised) return clampMarks(parseInt(parenthesised[1], 10));

  const bracketed = point.match(/\[\s*(\d+)\s*\]/);
  if (bracketed) return clampMarks(parseInt(bracketed[1], 10));

  const bare = point.match(/(?:^|\s)(\d+)\s*marks?\b/i);
  if (bare) return clampMarks(parseInt(bare[1], 10));

  return null;
}

function clampMarks(n: number): number | null {
  if (!Number.isFinite(n) || n < 1) return null;
  return Math.min(n, 30);
}

/**
 * True for lines that describe a scheme rather than earn a mark: level
 * descriptors ("Level 3 (5-6 marks): ..."), assessment-objective breakdowns,
 * and indicative-content lists. These carry mark ranges that must never be
 * summed — they are how a 6-point essay scheme became a "30 mark" question.
 */
function isNonScoringLine(point: string): boolean {
  return /^\s*(?:level\s*\d+\b|ao\s*breakdown\b|indicative\s+content\b|guidance\b|note\b|accept\b|reject\b|allow\b|ignore\b|or\b\s*:)/i.test(
    point
  );
}

// Calculate total marks from mark scheme
export function calculateMarksFromScheme(markScheme: string[]): number {
  const scoring = markScheme.filter(
    point => typeof point === 'string' && point.trim().length > 0 && !isNonScoringLine(point)
  );

  // A level-descriptor scheme has no per-point marks to count. Take the top of
  // the highest band instead of summing anything.
  if (scoring.length === 0) {
    return highestLevelBand(markScheme) ?? 0;
  }

  let totalMarks = 0;
  for (const point of scoring) {
    const { value } = parseMarkSchemePoint(point);
    totalMarks += value;
  }
  return totalMarks;
}

/** Highest upper bound across "Level n (x-y marks)" descriptors, if any. */
function highestLevelBand(markScheme: string[]): number | null {
  let best: number | null = null;
  for (const point of markScheme) {
    if (typeof point !== 'string') continue;
    const band = point.match(/level\s*\d+\s*\(\s*\d+\s*[-–]\s*(\d+)\s*marks?\s*\)/i);
    if (band) {
      const upper = parseInt(band[1], 10);
      if (Number.isFinite(upper) && (best === null || upper > best)) best = upper;
    }
  }
  return best;
}

/**
 * Decide the mark total to serve and store, given what the model stated and
 * what the mark scheme actually supports.
 *
 * The scheme is the better authority when the two agree closely, because the
 * model routinely states a round number and then writes a scheme of a
 * different length. But when they diverge wildly the scheme is usually the
 * thing that is malformed (truncated, or all guidance), so the model's stated
 * total is the safer answer. Never return 0 — a question worth no marks is
 * unusable.
 */
export function reconcileMarks(
  statedMarks: unknown,
  calculatedMarks: number
): number {
  const stated =
    typeof statedMarks === 'number' && Number.isFinite(statedMarks) && statedMarks > 0
      ? Math.min(Math.round(statedMarks), 30)
      : null;

  if (calculatedMarks <= 0) return stated ?? 3;
  if (stated === null) return Math.min(calculatedMarks, 30);

  // Within one mark, or within 50%: trust the scheme, which is what the
  // student is actually marked against.
  const difference = Math.abs(stated - calculatedMarks);
  if (difference <= 1 || difference <= stated * 0.5) {
    return Math.min(calculatedMarks, 30);
  }

  // Wildly apart — the scheme is probably malformed. Keep the stated total.
  return stated;
}

// Validate mark consistency between question.marks and markScheme
export function validateMarkConsistency(question: { marks: number; markScheme: string[] }): {
  isConsistent: boolean;
  expectedMarks: number;
  calculatedMarks: number;
  discrepancy: number;
} {
  const expectedMarks = question.marks;
  const calculatedMarks = calculateMarksFromScheme(question.markScheme);
  const discrepancy = Math.abs(expectedMarks - calculatedMarks);
  
  return {
    isConsistent: discrepancy === 0,
    expectedMarks,
    calculatedMarks,
    discrepancy
  };
}

// Get validated marks - always use question.marks as authoritative source
export function getValidatedMarks(question: { marks: number; markScheme: string[] }): {
  marks: number;
  hasDiscrepancy: boolean;
  warningMessage?: string;
} {
  const validation = validateMarkConsistency(question);
  
  if (!validation.isConsistent) {
    console.warn(`Mark discrepancy detected: Expected ${validation.expectedMarks}, calculated ${validation.calculatedMarks}`);
    return {
      marks: question.marks, // Always use question.marks as authoritative
      hasDiscrepancy: true,
      warningMessage: `Mark scheme total (${validation.calculatedMarks}) doesn't match question marks (${validation.expectedMarks})`
    };
  }
  
  return {
    marks: question.marks,
    hasDiscrepancy: false
  };
}

// Format marks display consistently
export function formatMarksDisplay(marks: number): string {
  return `${marks} ${marks === 1 ? 'mark' : 'marks'}`;
}

// Extract question parts from content (a), (b), (c), etc.
export function extractQuestionParts(content: string): string[] {
  const partRegex = /\(([a-z]|[ivxlcdm]+|\d+)\)/gi;
  const matches = content.match(partRegex);
  if (!matches) return [];
  
  return [...new Set(matches.map(match => match.toLowerCase()))].sort();
}

// Extract parts covered in mark scheme
export function extractMarkSchemeParts(markScheme: string[]): string[] {
  const parts: string[] = [];
  for (const point of markScheme) {
    // Match patterns like "(a) M1:", "(b) A1:", etc.
    const partMatch = point.match(/^\(([a-z]|[ivxlcdm]+|\d+)\)/i);
    if (partMatch) {
      parts.push(partMatch[0].toLowerCase());
    }
    
    // Also match step patterns like "Step 1:", "Step 2:", etc.
    const stepMatch = point.match(/^step\s+(\d+)/i);
    if (stepMatch) {
      // Convert step numbers to part letters (Step 1 -> (a), Step 2 -> (b), etc.)
      const stepNum = parseInt(stepMatch[1], 10);
      const partLetter = String.fromCharCode(96 + stepNum); // 97 = 'a', 98 = 'b', etc.
      parts.push(`(${partLetter})`);
    }
    
    // Match numbered patterns like "1.", "2.", etc. at start of line
    const numberMatch = point.match(/^(\d+)\./);
    if (numberMatch) {
      const stepNum = parseInt(numberMatch[1], 10);
      const partLetter = String.fromCharCode(96 + stepNum); // 97 = 'a', 98 = 'b', etc.
      parts.push(`(${partLetter})`);
    }
  }
  return [...new Set(parts)].sort();
}

// Check if mark scheme uses alternative numbering (steps, numbers) instead of parts
export function hasAlternativeNumbering(markScheme: string[]): boolean {
  const hasSteps = markScheme.some(point => /^step\s+\d+/i.test(point));
  const hasNumbers = markScheme.some(point => /^\d+\./.test(point));
  const hasParts = markScheme.some(point => /^\([a-z]\)/i.test(point));
  
  return (hasSteps || hasNumbers) && !hasParts;
}

// Validate multi-part question completeness
export function validateMultiPartMarkScheme(question: { 
  content: string; 
  markScheme: string[]; 
  marks: number 
}): {
  isComplete: boolean;
  questionParts: string[];
  markSchemeParts: string[];
  missingParts: string[];
  hasMultipleParts: boolean;
  usesAlternativeNumbering: boolean;
  validationMessage?: string;
} {
  const questionParts = extractQuestionParts(question.content);
  const markSchemeParts = extractMarkSchemeParts(question.markScheme);
  const hasMultipleParts = questionParts.length > 1;
  const usesAlternativeNumbering = hasAlternativeNumbering(question.markScheme);
  
  if (!hasMultipleParts) {
    return {
      isComplete: true,
      questionParts,
      markSchemeParts,
      missingParts: [],
      hasMultipleParts: false,
      usesAlternativeNumbering: false
    };
  }
  
  // If mark scheme uses alternative numbering (steps/numbers), be more lenient
  let isComplete: boolean;
  let missingParts: string[];
  let validationMessage: string | undefined;
  
  if (usesAlternativeNumbering) {
    // For alternative numbering, check if we have roughly the same number of parts/steps
    const markSchemeStepsOrNumbers = question.markScheme.filter(point => 
      /^(step\s+\d+|\d+\.)/i.test(point)
    ).length;
    
    // Consider complete if we have at least as many steps/numbers as question parts
    isComplete = markSchemeStepsOrNumbers >= questionParts.length;
    missingParts = isComplete ? [] : [`Alternative numbering detected: ${markSchemeStepsOrNumbers} steps/numbers for ${questionParts.length} parts`];
    
    if (!isComplete) {
      validationMessage = `Mark scheme uses alternative numbering (steps/numbers) but has fewer items (${markSchemeStepsOrNumbers}) than question parts (${questionParts.length}): ${questionParts.join(', ')}`;
    }
  } else {
    // Standard validation for part-based mark schemes
    missingParts = questionParts.filter(part => !markSchemeParts.includes(part));
    isComplete = missingParts.length === 0;
    
    if (!isComplete) {
      validationMessage = `Mark scheme missing for parts: ${missingParts.join(', ')}. Question has parts: ${questionParts.join(', ')}, but mark scheme only covers: ${markSchemeParts.join(', ') || 'none'}`;
    }
  }
  
  return {
    isComplete,
    questionParts,
    markSchemeParts,
    missingParts,
    hasMultipleParts,
    usesAlternativeNumbering,
    validationMessage
  };
}

// Comprehensive validation function
export function validateQuestionCompleteness(question: { 
  content: string; 
  markScheme: string[]; 
  marks: number 
}): {
  markConsistency: ReturnType<typeof validateMarkConsistency>;
  multiPartValidation: ReturnType<typeof validateMultiPartMarkScheme>;
  overallValid: boolean;
  issues: string[];
} {
  const markConsistency = validateMarkConsistency(question);
  const multiPartValidation = validateMultiPartMarkScheme(question);
  
  const issues: string[] = [];
  
  if (!markConsistency.isConsistent) {
    issues.push(`Mark total mismatch: Expected ${markConsistency.expectedMarks}, calculated ${markConsistency.calculatedMarks}`);
  }
  
  if (multiPartValidation.hasMultipleParts && !multiPartValidation.isComplete) {
    issues.push(multiPartValidation.validationMessage!);
  }
  
  const overallValid = markConsistency.isConsistent && 
    (!multiPartValidation.hasMultipleParts || multiPartValidation.isComplete);
  
  return {
    markConsistency,
    multiPartValidation,
    overallValid,
    issues
  };
}