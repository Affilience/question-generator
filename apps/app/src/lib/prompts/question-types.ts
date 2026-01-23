/**
 * Question Type Templates
 *
 * Standardized templates for different question types across all subjects.
 * These ensure consistent structure while allowing subject-specific variations.
 */

import { QuestionType, Difficulty } from '@/types';

// ============================================================================
// QUESTION TYPE DESCRIPTIONS
// ============================================================================

export const QUESTION_TYPE_DESCRIPTIONS: Record<QuestionType, string> = {
  'multiple-choice': 'a multiple choice question with 4 options (A, B, C, D) where exactly ONE is correct',
  'short-answer': 'a short answer question requiring a brief response (1-3 sentences or a calculation)',
  'calculation': 'a calculation/numerical problem that requires showing working steps',
  'explain': 'an explain/describe question testing conceptual understanding',
  'extended': 'an extended response question requiring detailed analysis and evaluation',
  'data-analysis': 'a data analysis question involving interpretation of tables, graphs, or datasets',
  'graph': 'a question involving drawing, completing, or analyzing a graph',
  'compare': 'a compare/contrast question analyzing similarities and differences',
  'proof': 'a mathematical proof question requiring logical reasoning and justification',
  'show-that': 'a show-that question where answer is given and working must be shown',
};

// ============================================================================
// COMMAND WORDS BY QUESTION TYPE
// ============================================================================

export const COMMAND_WORDS_BY_TYPE: Record<QuestionType, string[]> = {
  'multiple-choice': ['Which', 'What', 'Select'],
  'short-answer': ['State', 'Name', 'Give', 'Write', 'Identify'],
  'calculation': ['Calculate', 'Work out', 'Find', 'Determine'],
  'explain': ['Explain', 'Describe', 'Outline', 'Suggest'],
  'extended': ['Evaluate', 'Discuss', 'Analyse', 'Assess', 'To what extent'],
  'data-analysis': ['Describe the pattern', 'What trend', 'Calculate from the data', 'Analyse'],
  'graph': ['Draw', 'Sketch', 'Plot', 'Complete', 'Use the graph to'],
  'compare': ['Compare', 'Contrast', 'Distinguish between', 'What are the similarities and differences'],
  'proof': ['Prove', 'Show that', 'Prove by induction', 'Demonstrate'],
  'show-that': ['Show that', 'Verify that', 'Confirm that'],
};

// ============================================================================
// MARK RANGES BY QUESTION TYPE
// ============================================================================

export const MARK_RANGES_BY_TYPE: Record<QuestionType, { min: number; max: number }> = {
  'multiple-choice': { min: 1, max: 1 },
  'short-answer': { min: 1, max: 3 },
  'calculation': { min: 2, max: 5 },
  'explain': { min: 2, max: 4 },
  'extended': { min: 6, max: 12 },
  'data-analysis': { min: 3, max: 6 },
  'graph': { min: 2, max: 4 },
  'compare': { min: 3, max: 6 },
  'proof': { min: 4, max: 8 },
  'show-that': { min: 3, max: 6 },
};

// ============================================================================
// QUESTION TYPE TEMPLATES
// ============================================================================

/**
 * Template for multiple choice questions
 */
export const MULTIPLE_CHOICE_TEMPLATE = `
## MULTIPLE CHOICE QUESTION REQUIREMENTS

Generate a multiple choice question with these characteristics:
- Exactly 4 options labeled A, B, C, D
- Exactly ONE correct answer
- Three plausible distractors based on common misconceptions or errors
- Clear, unambiguous stem (question)

### Distractor Strategies
Create distractors that reflect real student errors:
- Common calculation mistakes (wrong operation, unit errors)
- Conceptual misconceptions
- Partial understanding (right approach, wrong execution)
- Related but incorrect terms

### Format
"Question stem here

A. First option
B. Second option
C. Third option
D. Fourth option"

### Mark Scheme
Return exactly: ["B1: [Correct letter]"]
`;

/**
 * Template for calculation questions
 */
export const CALCULATION_TEMPLATE = `
## CALCULATION QUESTION REQUIREMENTS

Generate a calculation question with these characteristics:
- Clear context with all values needed
- Explicit or implicit equation/formula requirement
- Sensible numerical answer (2-3 significant figures)
- Units required in the answer

### Structure
1. Context/scenario with given values
2. Clear question asking for a specific quantity
3. State whether formula is given or must be recalled
4. Specify units expected in the answer

### Mark Scheme Pattern
- M1: Correct equation/formula selected
- M1: Correct rearrangement (if needed)
- A1: Correct substitution with values
- A1: Correct numerical answer with unit

### Working Example Format
"Step 1: Write the equation: [formula]
Step 2: Substitute values: [substitution]
Step 3: Calculate: [calculation]
Answer = [value] [unit]"
`;

/**
 * Template for explain questions
 */
export const EXPLAIN_TEMPLATE = `
## EXPLAIN QUESTION REQUIREMENTS

Generate an explain/describe question with these characteristics:
- Tests understanding, not just recall
- Requires linking cause and effect
- Uses appropriate command word for the marks

### Command Word Guide
- "State" (1 mark) = Brief fact, no explanation
- "Describe" (2-3 marks) = What happens, in sequence
- "Explain" (2-4 marks) = Why it happens, with reasoning
- "Suggest" (2-3 marks) = Apply to unfamiliar context

### Mark Scheme Pattern
- Each distinct point = 1 mark
- "Because" statements linking cause to effect
- Correct use of scientific/subject-specific terminology

### Response Quality Indicators
Low: Just states facts without connection
Medium: Describes process with some reasoning
High: Full causal chain with terminology
`;

/**
 * Template for extended response questions
 */
export const EXTENDED_RESPONSE_TEMPLATE = `
## EXTENDED RESPONSE QUESTION REQUIREMENTS

Generate an extended response question (6+ marks) with these characteristics:
- Open-ended requiring analysis and evaluation
- Multiple valid approaches possible
- Requires structured, coherent argument
- Tests higher-order thinking (AO3/AO4)

### Command Words for Extended Response
- "Evaluate" = Judge significance, weigh pros/cons, reach conclusion
- "Discuss" = Present multiple perspectives with evidence
- "Analyse" = Break down, identify patterns, explain relationships
- "To what extent" = Evaluate degree/scope with justification

### Level-Based Marking (Example 6-mark)
Level 3 (5-6 marks): Detailed, well-organised, clear scientific reasoning
Level 2 (3-4 marks): Some detail, mostly organised, some reasoning
Level 1 (1-2 marks): Basic points, limited organisation, minimal reasoning

### Indicative Content Format
List the key points students should cover, but accept alternative valid responses.
`;

/**
 * Template for data analysis questions
 */
export const DATA_ANALYSIS_TEMPLATE = `
## DATA ANALYSIS QUESTION REQUIREMENTS

Generate a data analysis question with these characteristics:
- Includes a table, graph data, or dataset (described in text)
- Requires interpretation and calculation
- Tests ability to draw conclusions from evidence

### Data Presentation
Since we cannot include actual images, describe:
- Type of data (table/graph/chart)
- Variables and their units
- Key data points or trends
- Any notable features

### Question Types
- "Describe the pattern/trend shown..."
- "Calculate the [value] from the data..."
- "What conclusion can be drawn about..."
- "Suggest a reason for the anomaly at..."

### Mark Scheme Pattern
- B1: Identifies correct trend/pattern
- M1: Correct method for calculation
- A1: Correct value from data
- A1: Valid conclusion supported by data
`;

/**
 * Template for compare questions
 */
export const COMPARE_TEMPLATE = `
## COMPARE QUESTION REQUIREMENTS

Generate a compare/contrast question with these characteristics:
- Two items, concepts, or processes to compare
- Requires BOTH similarities AND differences (unless specified)
- Clear criteria for comparison

### Structure
"Compare [Item A] and [Item B] in terms of [criteria]." [X marks]

### Mark Scheme Pattern
For "Compare" questions, require:
- At least one similarity point
- At least one difference point
- Comparative language ("both", "whereas", "however")

### Response Quality
Low: Lists features separately without comparison
Medium: Some comparative statements
High: Integrated comparison with clear criteria
`;

// ============================================================================
// GET TEMPLATE BY TYPE
// ============================================================================

export function getQuestionTypeTemplate(type: QuestionType): string {
  const templates: Record<QuestionType, string> = {
    'multiple-choice': MULTIPLE_CHOICE_TEMPLATE,
    'calculation': CALCULATION_TEMPLATE,
    'short-answer': EXPLAIN_TEMPLATE, // Uses same template as explain for short answers
    'explain': EXPLAIN_TEMPLATE,
    'extended': EXTENDED_RESPONSE_TEMPLATE,
    'data-analysis': DATA_ANALYSIS_TEMPLATE,
    'graph': DATA_ANALYSIS_TEMPLATE, // Similar structure
    'compare': COMPARE_TEMPLATE,
    'proof': CALCULATION_TEMPLATE, // Similar to calculation but with proof structure
    'show-that': CALCULATION_TEMPLATE, // Similar to calculation but with given answer
  };

  return templates[type] || EXPLAIN_TEMPLATE;
}

// ============================================================================
// DIFFICULTY MODIFIERS FOR QUESTION TYPES
// ============================================================================

export function getDifficultyModifierForType(type: QuestionType, difficulty: Difficulty): string {
  const baseModifier: Record<Difficulty, Record<QuestionType, string>> = {
    easy: {
      'multiple-choice': 'Test basic recall. Distractors should be clearly different from correct answer.',
      'short-answer': 'Brief response requiring basic recall.',
      'calculation': 'Single-step calculation. Values given directly. Simple numbers.',
      'explain': 'Simple description or single reason required.',
      'extended': 'Not typically used for easy difficulty.',
      'data-analysis': 'Read a single value from data. Identify obvious trend.',
      'graph': 'Read a single value. Identify basic shape.',
      'compare': 'List basic similarities OR differences (not both required).',
      'proof': 'Simple proof with direct application of basic theorem.',
      'show-that': 'Straightforward verification with simple substitution.',
    },
    medium: {
      'multiple-choice': 'Test application. Distractors based on common errors.',
      'short-answer': 'Brief response with some reasoning or calculation.',
      'calculation': '2-3 step calculation. May need to rearrange formula.',
      'explain': 'Explain with reasoning. Link cause and effect.',
      'extended': 'Structured argument with some evaluation.',
      'data-analysis': 'Calculate from data. Identify patterns and suggest reasons.',
      'graph': 'Calculate gradient or read multiple values. Interpret meaning.',
      'compare': 'Compare with clear similarities AND differences.',
      'proof': 'Multi-step proof requiring logical reasoning.',
      'show-that': 'Show working with intermediate steps and reasoning.',
    },
    hard: {
      'multiple-choice': 'Test deeper understanding. Subtle distractors requiring careful analysis.',
      'short-answer': 'Concise but sophisticated response requiring synthesis.',
      'calculation': 'Multi-step. May combine multiple concepts. Unit conversions required.',
      'explain': 'Full causal explanation with multiple linked points.',
      'extended': 'Sophisticated evaluation with balanced argument and justified conclusion.',
      'data-analysis': 'Complex analysis. Evaluate reliability. Draw nuanced conclusions.',
      'graph': 'Analyse shape, calculate gradient, extrapolate, and evaluate.',
      'compare': 'Analytical comparison with evaluation of significance.',
      'proof': 'Complex proof using multiple methods or requiring creative insight.',
      'show-that': 'Sophisticated verification with non-obvious approach.',
    },
  };

  return baseModifier[difficulty][type] || '';
}
