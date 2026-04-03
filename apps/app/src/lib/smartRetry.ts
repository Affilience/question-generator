/**
 * Smart Retry System with Variation
 * Modifies prompts on retry to avoid similar failures and improve variety
 */

import { Difficulty, Subject, ExamBoard, QualificationLevel } from '@/types';

export interface RetryContext {
  attempt: number;
  previousErrors: string[];
  previousQuestions: string[];
  timeoutOccurred: boolean;
  validationFailed: boolean;
  failureReason?: string;
}

export interface RetryStrategy {
  modifiedPrompt: string;
  temperature: number;
  maxTokens: number;
  alternativeModel?: string;
  backoffDelay: number;
}

/**
 * Generate smart retry strategy based on failure context
 */
export function generateRetryStrategy(
  originalPrompt: string,
  context: RetryContext,
  subject: Subject,
  difficulty: Difficulty
): RetryStrategy {
  const strategy: RetryStrategy = {
    modifiedPrompt: originalPrompt,
    temperature: 0.7 + (context.attempt * 0.1), // Increase creativity on retry
    maxTokens: 4000 + (context.attempt * 500), // Allow more tokens on retry
    backoffDelay: Math.min(1000 * Math.pow(2, context.attempt - 1), 5000), // Exponential backoff
  };

  // Modify prompt based on failure reason
  if (context.validationFailed) {
    strategy.modifiedPrompt = enhanceForValidation(originalPrompt, context);
  } else if (context.timeoutOccurred) {
    strategy.modifiedPrompt = simplifyPrompt(originalPrompt, context);
    strategy.maxTokens = Math.min(strategy.maxTokens, 3000); // Reduce for faster response
  } else if (context.previousErrors.includes('json')) {
    strategy.modifiedPrompt = reinforceJsonFormat(originalPrompt);
  } else {
    strategy.modifiedPrompt = addVariationConstraints(originalPrompt, context);
  }

  // Add retry-specific instructions
  strategy.modifiedPrompt = addRetryInstructions(strategy.modifiedPrompt, context);

  // Consider alternative model for persistent failures
  if (context.attempt >= 3) {
    strategy.alternativeModel = getAlternativeModel(subject, difficulty);
  }

  return strategy;
}

/**
 * Enhance prompt for validation failures
 */
function enhanceForValidation(prompt: string, context: RetryContext): string {
  const validationEnhancements = `

CRITICAL VALIDATION REQUIREMENTS (ATTEMPT ${context.attempt}):
- Ensure question text is complete and unambiguous
- Include ALL necessary information for solving
- Mark scheme must have EXACTLY the specified number of mark points
- Solution must be detailed and show all working
- Check mathematical notation is properly formatted
- Verify units are included where needed

PREVIOUS VALIDATION FAILURE: ${context.failureReason || 'Format or content issue'}
FIX THIS ISSUE IN YOUR RESPONSE.`;

  return prompt + validationEnhancements;
}

/**
 * Simplify prompt for timeout issues
 */
function simplifyPrompt(prompt: string, context: RetryContext): string {
  // Remove less critical sections to speed up generation
  let simplified = prompt
    .replace(/EXAMPLE[\s\S]*?(?=\n[A-Z])/g, '') // Remove examples
    .replace(/Alternative[\s\S]*?(?=\n[A-Z])/g, '') // Remove alternatives
    .replace(/Note:[\s\S]*?(?=\n)/g, ''); // Remove notes

  simplified += `

SIMPLIFIED GENERATION (Attempt ${context.attempt}):
- Focus on core question requirements
- Omit extended explanations
- Provide concise but complete response
- Ensure valid JSON structure`;

  return simplified;
}

/**
 * Reinforce JSON format for parsing errors
 */
function reinforceJsonFormat(prompt: string): string {
  const jsonReinforcement = `

CRITICAL JSON FORMAT REQUIREMENTS:
1. Return ONLY valid JSON, no markdown code blocks
2. No trailing commas in arrays or objects
3. All strings must be properly escaped
4. Use \\n for line breaks, not actual line breaks
5. Mathematical expressions: use double backslashes (\\\\) for LaTeX

EXACT FORMAT REQUIRED:
{
  "question": "string",
  "markScheme": ["string", "string"],
  "marks": number,
  "solution": "string",
  "diagram": null or object
}

DO NOT WRAP IN \`\`\`json or any other formatting.`;

  return prompt.replace(/Return.*?JSON.*?structure:/gi, jsonReinforcement);
}

/**
 * Add variation constraints to avoid repetition
 */
function addVariationConstraints(prompt: string, context: RetryContext): string {
  const variations = generateVariationSuggestions(context);
  
  const variationPrompt = `

VARIATION REQUIREMENTS (Attempt ${context.attempt}):
${variations.map((v, i) => `${i + 1}. ${v}`).join('\n')}

AVOID THESE PATTERNS from previous attempts:
${context.previousQuestions.slice(0, 3).map((q, i) => `- Pattern ${i + 1}: ${q.substring(0, 50)}...`).join('\n')}

Use a DIFFERENT approach, scenario, or problem structure.`;

  return prompt + variationPrompt;
}

/**
 * Add retry-specific instructions
 */
function addRetryInstructions(prompt: string, context: RetryContext): string {
  const retryInstructions = `

===== RETRY ATTEMPT ${context.attempt} =====
Previous attempts failed. This time:
1. ${context.attempt === 2 ? 'Use a different question structure' : 'Try a completely novel approach'}
2. ${context.validationFailed ? 'Ensure all validation requirements are met' : 'Double-check format and completeness'}
3. ${context.attempt >= 3 ? 'Simplify if necessary to ensure success' : 'Maintain quality while ensuring validity'}
4. Generate a WORKING response that passes all checks
=================================`;

  return retryInstructions + '\n\n' + prompt;
}

/**
 * Generate variation suggestions based on context
 */
function generateVariationSuggestions(context: RetryContext): string[] {
  const baseSuggestions = [
    'Use a different problem context or scenario',
    'Vary the question structure or format',
    'Apply to a different real-world situation',
    'Change the numerical values significantly',
  ];

  if (context.attempt === 2) {
    return [
      ...baseSuggestions,
      'Use alternative command words',
      'Focus on a different aspect of the topic',
    ];
  } else if (context.attempt >= 3) {
    return [
      'Completely different question type',
      'Novel problem structure not yet attempted',
      'Unique scenario unrelated to previous attempts',
      'Alternative conceptual focus',
      'Different difficulty approach while maintaining level',
    ];
  }

  return baseSuggestions;
}

/**
 * Get alternative model for persistent failures
 */
function getAlternativeModel(subject: Subject, difficulty: Difficulty): string | undefined {
  // Could return different model based on subject/difficulty
  // For now, return undefined to use same model
  return undefined;
}

/**
 * Retry orchestrator with exponential backoff
 */
export async function retryWithStrategy<T>(
  operation: (strategy: RetryStrategy) => Promise<T>,
  validateResult: (result: T) => boolean,
  originalPrompt: string,
  subject: Subject,
  difficulty: Difficulty,
  maxAttempts: number = 3
): Promise<T | null> {
  const context: RetryContext = {
    attempt: 0,
    previousErrors: [],
    previousQuestions: [],
    timeoutOccurred: false,
    validationFailed: false,
  };

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    context.attempt = attempt;
    
    try {
      const strategy = generateRetryStrategy(originalPrompt, context, subject, difficulty);
      
      // Wait with backoff if not first attempt
      if (attempt > 1) {
        await new Promise(resolve => setTimeout(resolve, strategy.backoffDelay));
      }
      
      const result = await operation(strategy);
      
      if (validateResult(result)) {
        return result;
      } else {
        context.validationFailed = true;
        context.failureReason = 'Validation failed';
      }
    } catch (error: any) {
      context.previousErrors.push(error.message || 'Unknown error');
      
      if (error.message?.includes('timeout')) {
        context.timeoutOccurred = true;
      }
      
      if (attempt === maxAttempts) {
        throw new Error(`Failed after ${maxAttempts} attempts: ${error.message}`);
      }
    }
  }
  
  return null;
}

/**
 * Quick retry for simple failures
 */
export async function quickRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 2,
  delay: number = 500
): Promise<T> {
  let lastError: Error | undefined;
  
  for (let i = 0; i < maxAttempts; i++) {
    try {
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, delay * i));
      }
      return await operation();
    } catch (error: any) {
      lastError = error;
    }
  }
  
  throw lastError || new Error('Quick retry failed');
}