/**
 * Mark validation and consistency utilities
 * Ensures marks displayed match between question.marks and markScheme
 */

// Parse mark scheme point to extract mark type and value
export function parseMarkSchemePoint(point: string): { markType: string; value: number; description: string } {
  // Match patterns like "M1:", "(a) M2:", "A3:", "B1:", "SC1:"
  const match = point.match(/^(?:\([a-z]\)\s*)?(M\d+|A\d+|B\d+|SC\d*):?\s*(.*)$/i);
  if (match) {
    const markType = match[1].toUpperCase();
    const description = match[2];
    
    // Extract number from mark type (M1=1, A2=2, B1=1, etc.)
    const numMatch = markType.match(/\d+/);
    const value = numMatch ? parseInt(numMatch[0], 10) : 1;
    
    return { markType, value, description };
  }
  
  // Fallback for non-standard format - treat as 1 mark
  return { markType: '', value: 1, description: point };
}

// Calculate total marks from mark scheme
export function calculateMarksFromScheme(markScheme: string[]): number {
  let totalMarks = 0;
  for (const point of markScheme) {
    const { value } = parseMarkSchemePoint(point);
    totalMarks += value;
  }
  return totalMarks;
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
    const match = point.match(/^\(([a-z]|[ivxlcdm]+|\d+)\)/i);
    if (match) {
      parts.push(match[0].toLowerCase());
    }
  }
  return [...new Set(parts)].sort();
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
  validationMessage?: string;
} {
  const questionParts = extractQuestionParts(question.content);
  const markSchemeParts = extractMarkSchemeParts(question.markScheme);
  const hasMultipleParts = questionParts.length > 1;
  
  if (!hasMultipleParts) {
    return {
      isComplete: true,
      questionParts,
      markSchemeParts,
      missingParts: [],
      hasMultipleParts: false
    };
  }
  
  const missingParts = questionParts.filter(part => !markSchemeParts.includes(part));
  const isComplete = missingParts.length === 0;
  
  let validationMessage: string | undefined;
  if (!isComplete) {
    validationMessage = `Mark scheme missing for parts: ${missingParts.join(', ')}. Question has parts: ${questionParts.join(', ')}, but mark scheme only covers: ${markSchemeParts.join(', ') || 'none'}`;
  }
  
  return {
    isComplete,
    questionParts,
    markSchemeParts,
    missingParts,
    hasMultipleParts,
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