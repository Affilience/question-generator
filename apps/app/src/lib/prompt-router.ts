/**
 * Prompt Router Module
 *
 * Centralizes prompt building logic for question generation.
 * Used by both the live generation API and pre-generation scripts.
 */

import { Difficulty, ExamBoard, QualificationLevel, Subject, Topic } from '../types';
import { getEnhancedSystemPrompt } from './prompts/system-prompts';
import { DIAGRAM_SCHEMA_DOCS } from './prompts-common';
import {
  getQuestionConfig,
  getRandomQuestionFormat,
  getRandomScienceQuestionType,
  getRandomMathsQuestionType,
  isScienceSubject,
  isMathsSubject,
  EssayQuestionConfig,
  QuestionFormat
} from './essay-subject-config';

// ============================================================================
// EXPORTED FUNCTIONS FOR PRE-GENERATION SCRIPT
// ============================================================================

/**
 * Get system prompt for a subject/level/board combination.
 * This is the same prompt used by live generation.
 */
export function getSystemPromptForSubject(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  _topic: Topic,
  _difficulty: Difficulty,
  _subtopic: string
): string {
  return getEnhancedSystemPrompt(subject, board, level);
}

/**
 * Get user prompt for a subject/level/board/topic combination.
 * This is the same prompt used by live generation.
 */
export function getUserPromptForSubject(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topic: Topic,
  difficulty: Difficulty,
  subtopic: string
): string {
  return buildPrompt(subject, level, board, topic.name, subtopic, difficulty);
}

// ============================================================================
// INTERNAL HELPER FUNCTIONS
// ============================================================================

function getMarkRange(difficulty: Difficulty, subject: Subject, level: QualificationLevel, board?: ExamBoard): { min: number; max: number } {
  const config = getQuestionConfig(subject, level, difficulty, board);
  if (config) {
    const marks = config.totalMarks;
    return { min: marks, max: marks };
  }
  
  // Subject-specific fallback mark allocation
  return getSubjectSpecificMarkRange(difficulty, subject, level);
}

export function getSubjectSpecificMarkRange(difficulty: Difficulty, subject: Subject, level: QualificationLevel): { min: number; max: number } {
  // Maths and Further Maths - typically have more granular mark ranges
  if (subject === 'maths' || subject === 'further-maths') {
    if (level === 'gcse') {
      switch (difficulty) {
        case 'easy': return { min: 1, max: 2 };     // Basic arithmetic, recall
        case 'medium': return { min: 3, max: 5 };   // Multi-step calculations, application
        case 'hard': return { min: 6, max: 9 };     // Problem solving, reasoning
      }
    } else { // A-Level
      switch (difficulty) {
        case 'easy': return { min: 1, max: 4 };     // FIXED: Include 1-mark simple questions (e.g., "State the formula for...")
        case 'medium': return { min: 5, max: 7 };   // Multi-step, combines topics
        case 'hard': return { min: 8, max: 12 };    // Problem solving, proof questions
      }
    }
  }
  
  // Combined Science - mirrors individual science subjects
  if (subject === 'combined-science') {
    switch (difficulty) {
      case 'easy': return { min: 1, max: 3 };       // Short answer/recall questions
      case 'medium': return { min: 4, max: 6 };     // Application and explanation questions  
      case 'hard': return { min: 6, max: 9 };       // Extended response and analysis
    }
  }
  
  // Generic fallback for any remaining quantitative subjects
  switch (difficulty) {
    case 'easy': return { min: 1, max: 3 };
    case 'medium': return { min: 4, max: 6 };
    case 'hard': return { min: 7, max: 10 };
    default: return { min: 4, max: 6 };
  }
}

function getQuantitativeFormatGuidance(format: QuestionFormat, subject: Subject): {
  typeDescription: string;
  requirements: string;
  commandWords: string[];
} {
  switch (format) {
    case 'calculation':
      return {
        typeDescription: 'CALCULATION/PROBLEM-SOLVING',
        requirements: `
- Numerical calculation or algebraic manipulation required
- Include realistic values and units
- May require formula application
- Show working for method marks`,
        commandWords: ['Calculate', 'Work out', 'Find', 'Determine', 'Show that']
      };

    case 'explain':
      return {
        typeDescription: 'EXPLAIN/DESCRIBE',
        requirements: `
- Requires explanation using subject terminology
- Chain of reasoning (because -> therefore)
- May link concepts to phenomena
- Use specific examples where relevant`,
        commandWords: ['Explain', 'Describe', 'Why does', 'How does', 'Suggest why']
      };

    case 'data_response':
      return {
        typeDescription: 'GRAPH/DATA ANALYSIS',
        requirements: `
- MUST include actual data visualization or clear data description in question
- If using command words like "What does the graph show", MUST provide a detailed graph description
- For table data: provide actual data table with numerical values
- For graph data: describe graph type, axes, trends, and key values clearly
- Requires interpretation of the provided data
- May ask to identify patterns/trends
- Link data analysis to concepts`,
        commandWords: ['Using the data', 'What does the graph show', 'Describe the trend', 'Analyse']
      };

    case 'analyse':
      return {
        typeDescription: 'COMPARE/EVALUATE',
        requirements: `
- Compare two or more items/methods/situations
- Identify similarities AND differences
- May require evaluation of advantages/disadvantages
- Use comparative language`,
        commandWords: ['Compare', 'Contrast', 'Evaluate', 'Discuss the advantages']
      };

    case 'short_essay':
      return {
        typeDescription: 'EXTENDED RESPONSE (6 marks - LEVEL-BASED)',
        requirements: `
- Longer response requiring structured answer (6 marks)
- Multiple points linked together
- For ${subject}: use appropriate ${subject === 'physics' ? 'physics concepts and formulas' : subject === 'chemistry' ? 'chemical equations and terminology' : 'mathematical reasoning'}
- Quality of written communication assessed

IMPORTANT: 6-mark extended response uses LEVEL-BASED marking, NOT individual mark points:
- Level 3 (5-6 marks): Detailed, coherent explanation linking all relevant points; uses correct scientific terminology throughout; clear logical structure
- Level 2 (3-4 marks): Explanation links some points; uses some scientific terminology; mostly logical structure
- Level 1 (1-2 marks): Simple statements; limited terminology; lacks clear structure

The markScheme array for 6-mark questions MUST include:
["Level 3 (5-6 marks): Detailed coherent explanation with correct terminology and logical structure",
 "Level 2 (3-4 marks): Links some points with some terminology",
 "Level 1 (1-2 marks): Simple statements with limited terminology",
 "Indicative content: [list 5-6 specific points students might include for this topic]"]`,
        commandWords: ['Explain in detail', 'Describe and explain', 'Discuss']
      };

    case 'diagram':
    default:
      return {
        typeDescription: 'GRAPH/DIAGRAM INTERPRETATION',
        requirements: `
- MUST provide clear description of any diagram/graph referenced in question
- For sketching questions: clearly specify what type of graph and key features to include
- For interpretation questions: provide detailed description of the graph/diagram
- Link graph/diagram features to ${subject} concepts
- For ${subject}: use appropriate graph types and terminology`,
        commandWords: ['Sketch', 'Draw', 'Using the diagram', 'Describe the shape of']
      };
  }
}

function getFormatGuidance(format: QuestionFormat, config: EssayQuestionConfig, subject: Subject, level: QualificationLevel, topicName: string, subtopic: string): {
  questionGuidance: string;
  solutionGuidance: string;
  commandWords: string[];
} {
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  switch (format) {
    case 'definition':
      return {
        questionGuidance: `
QUESTION TYPE: DEFINITION/STATE (${config.totalMarks} marks)
- Use command words: "Define", "State", "What is meant by", "Give the meaning of"
- Requires precise, accurate definition using subject terminology
- May ask for examples to demonstrate understanding
- Clear, unambiguous wording`,
        solutionGuidance: `
MODEL ANSWER:
- Provide precise definition with key terminology
- Include example if appropriate
- Brief but complete`,
        commandWords: ['Define', 'State', 'What is meant by', 'Give the meaning of']
      };

    case 'calculation':
      return {
        questionGuidance: `
QUESTION TYPE: CALCULATION/DATA (${config.totalMarks} marks)
- Requires numerical calculation or data interpretation
- Include realistic data/figures in the question
- Show units in question and expect them in answer
- For ${subject}: use appropriate formulas and realistic values`,
        solutionGuidance: `
MODEL ANSWER:
- Show all working clearly
- Include correct formula
- Present final answer with units
- Note key steps`,
        commandWords: ['Calculate', 'Work out', 'Using the data', 'Determine']
      };

    case 'short_answer':
      return {
        questionGuidance: `
QUESTION TYPE: SHORT ANSWER (${config.totalMarks} marks)
- Tests factual recall with brief response
- Use command words: "Identify", "Name", "Give", "State", "Outline"
- Clear, specific question
- One mark per valid point typically`,
        solutionGuidance: `
MODEL ANSWER:
- Concise, precise answers
- Key terminology used correctly
- Point-by-point format acceptable`,
        commandWords: ['Identify', 'Name', 'Give', 'State', 'Outline']
      };

    case 'explain':
      return {
        questionGuidance: `
QUESTION TYPE: EXPLAIN (${config.totalMarks} marks)
- Requires causal reasoning with subject terminology
- Must show clear cause-effect relationships
- Use command words: "Explain", "Why", "How does"
- Need depth and precision`,
        solutionGuidance: `
MODEL ANSWER:
- Clear causal chain (because -> therefore)
- Use subject-specific terminology
- May include examples
- Structured explanation`,
        commandWords: ['Explain', 'Why', 'How does', 'Suggest why']
      };

    case 'analyse':
      return {
        questionGuidance: `
QUESTION TYPE: ANALYSE/EVALUATE (${config.totalMarks} marks)
- Break down into components
- Examine relationships and patterns
- May require weighing evidence
- Use command words: "Analyse", "Evaluate", "To what extent"`,
        solutionGuidance: `
MODEL ANSWER:
- Structured analysis
- Consider multiple perspectives
- Support with evidence/examples
- Clear conclusion where appropriate`,
        commandWords: ['Analyse', 'Evaluate', 'To what extent', 'Assess']
      };

    case 'data_response':
      return {
        questionGuidance: `
QUESTION TYPE: DATA/SOURCE RESPONSE (${config.totalMarks} marks)
- Based on provided data, extract, or source material
- Requires interpretation and analysis
- May need to identify patterns, trends, or significance
- Link evidence to knowledge`,
        solutionGuidance: `
MODEL ANSWER:
- Direct reference to data/source
- Accurate interpretation
- Link to wider knowledge
- Evaluate where appropriate`,
        commandWords: ['Using the data', 'What does the source suggest', 'Interpret']
      };

    case 'short_essay':
      return {
        questionGuidance: `
QUESTION TYPE: SHORT ESSAY (${config.totalMarks} marks)
- Extended but focused response
- Clear argument structure
- Subject-specific evidence
- May be level-marked`,
        solutionGuidance: `
MODEL ANSWER:
- Clear structure with introduction
- Developed points with evidence
- Subject terminology
- Focused conclusion`,
        commandWords: ['Explain', 'Describe', 'Outline the importance of']
      };

    case 'extended_essay':
    default:
      return {
        questionGuidance: `
QUESTION TYPE: EXTENDED ESSAY (${config.totalMarks} marks)
- Full essay response
- Detailed analysis and evaluation
- Multiple perspectives considered
- Strong evidence base
- Level-based marking`,
        solutionGuidance: `
MODEL ANSWER:
- Full essay structure
- Thesis/argument established early
- Multiple paragraphs with topic sentences
- Extensive evidence and examples
- Evaluative conclusion`,
        commandWords: ['Evaluate', 'Discuss', 'To what extent', 'Assess the significance']
      };
  }
}

/**
 * Build prompt for essay-style subjects (History, English Literature, etc.)
 */
function buildEssayPrompt(
  config: EssayQuestionConfig,
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();

  // Get a random question format from allowed formats for variety
  const selectedFormat = getRandomQuestionFormat(config);
  const formatGuidance = getFormatGuidance(selectedFormat, config, subject, level, topicName, subtopic);
  const commandWord = formatGuidance.commandWords[Math.floor(Math.random() * formatGuidance.commandWords.length)];

  // Format assessment objectives for the prompt
  const aoBreakdown = config.assessmentObjectives
    .map(ao => `- ${ao.code} (${ao.marks} marks): ${ao.description}`)
    .join('\n');

  // Format level descriptors for the mark scheme
  const levelDescriptors = config.levelDescriptors
    .sort((a, b) => b.level - a.level)
    .map(ld => {
      const chars = ld.characteristics.slice(0, 3).join('; ');
      return `Level ${ld.level} (${ld.minMarks}-${ld.maxMarks} marks): ${chars}`;
    })
    .join('\n');

  // Check if this subject uses SPaG marks (History essays)
  const usesSPaG = subject === 'history' && config.totalMarks >= 16;
  const spagNote = usesSPaG ? '\n\n**Additional SPaG marks (4 marks):**\n- High (4): Sophisticated vocabulary including specialist terms; accurate spelling and punctuation; effective grammar\n- Intermediate (2-3): Generally accurate with some errors\n- Threshold (1): Basic accuracy; frequent errors' : '';

  // Build mark scheme guidance based on format
  let markSchemeGuidance = '';
  if (selectedFormat === 'calculation') {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- Award method marks (M) for correct process
- Award accuracy marks (A) for correct answer
- Award marks for correct units where applicable`;
  } else if (selectedFormat === 'definition' || selectedFormat === 'short_answer') {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- List specific points that earn marks
- Award 1 mark per valid point typically
- Include acceptable alternative answers`;
  } else if (config.totalMarks >= 8) {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
This question is worth ${config.totalMarks} marks, allocated as:
${aoBreakdown}
${spagNote}

The mark scheme MUST follow this EXACT structure in the markScheme array:

1. **AO BREAKDOWN** (first entry): "AO Breakdown: ${config.assessmentObjectives.map(ao => `${ao.code}=${ao.marks}`).join(', ')}"

2. **LEVEL DESCRIPTORS** (one entry per level, highest first):
${levelDescriptors}
Format each as: "Level X (Y-Z marks): [descriptor characteristics]"

3. **INDICATIVE CONTENT** (specific points students might include):
- Start with "Indicative content:"
- List 6-10 specific points, examples, or pieces of evidence students might use
- Include specific terminology, dates, quotations, case studies, or theorists as appropriate for ${subject}
- Points should be relevant to the specific topic: ${topicName} - ${subtopic}

EXAMPLE markScheme array format:
[
  "AO Breakdown: ${config.assessmentObjectives.map(ao => `${ao.code}=${ao.marks}`).join(', ')}",
  "Level 4 (13-16 marks): Complex analysis; sustained judgement; well-selected evidence",
  "Level 3 (9-12 marks): Developed explanation; clear judgement; relevant evidence",
  "Level 2 (5-8 marks): Simple explanation; partial judgement; some evidence",
  "Level 1 (1-4 marks): Basic points; limited or no judgement",
  "Indicative content: Students may include: [specific point 1]; [specific point 2]; [specific point 3]; [quotation or statistic]; [case study or example]; [counterargument]; [evaluation point]"${usesSPaG ? ',\n  "SPaG (4 marks): High (4)=sophisticated vocabulary and accurate throughout; Intermediate (2-3)=generally accurate; Threshold (1)=basic accuracy"' : ''}
]`;
  } else {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- List specific points for marking
- Include assessment objective allocation: ${aoBreakdown}
- Include indicative content with specific examples for ${subtopic}`;
  }

  // Include diagram schema for diagram-type questions
  const needsDiagram = selectedFormat === 'diagram' || selectedFormat === 'data_response';
  const diagramInstructions = needsDiagram ? `

${DIAGRAM_SCHEMA_DOCS}

IMPORTANT: For this question type, you SHOULD include a "diagram" field in your JSON response following the schema above.` : '';

  // JSON structure with optional diagram field
  const jsonStructure = needsDiagram
    ? `{
  "content": "The full question text using the command word '${commandWord}'",
  "marks": ${config.totalMarks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", "..."],
  "diagram": {"width": 10, "height": 8, "elements": [...]}
}`
    : `{
  "content": "The full question text using the command word '${commandWord}'",
  "marks": ${config.totalMarks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", "..."]
}`;

  return `Generate a ${boardUpper} ${levelDisplay} ${subject.replace('-', ' ')} exam question. Return ONLY valid JSON, no markdown.

TOPIC: ${topicName} - ${subtopic}
MARKS: ${config.totalMarks}
DIFFICULTY: ${difficulty.toUpperCase()}
SELECTED FORMAT: ${selectedFormat.toUpperCase()}
${formatGuidance.questionGuidance}

Command word to use: "${commandWord}"
${markSchemeGuidance}
${formatGuidance.solutionGuidance}
${diagramInstructions}

${config.totalMarks >= 8 ? 'CRITICAL: The mark scheme must use LEVEL-BASED DESCRIPTORS as shown above, not just a list of points.' : ''}

Use \\n for line breaks in strings.

Return exactly this JSON structure (no markdown code blocks):
${jsonStructure}`;
}

/**
 * Build prompt for quantitative (non-essay) subjects
 */
function buildQuantitativePrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  const markRange = getMarkRange(difficulty, subject, level, board);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();
  // Generate random mark value from the range instead of always using the average
  const targetMarks = Math.floor(Math.random() * (markRange.max - markRange.min + 1)) + markRange.min;

  // Select question type based on subject
  let selectedFormat: QuestionFormat;
  if (isScienceSubject(subject)) {
    selectedFormat = getRandomScienceQuestionType();
  } else if (isMathsSubject(subject)) {
    selectedFormat = getRandomMathsQuestionType();
  } else {
    selectedFormat = 'calculation'; // Default
  }

  const formatGuidance = getQuantitativeFormatGuidance(selectedFormat, subject);
  const commandWord = formatGuidance.commandWords[Math.floor(Math.random() * formatGuidance.commandWords.length)];

  const difficultyDesc = difficulty === 'easy'
    ? 'Simple, 1-2 steps, grades 1-3'
    : difficulty === 'medium'
    ? 'Moderate, 2-3 steps, grades 4-5'
    : 'Challenging, multi-step, grades 6-9';

  // Include diagram schema for diagram-type questions
  const needsDiagram = selectedFormat === 'diagram' || selectedFormat === 'data_response';
  const diagramInstructions = needsDiagram ? `

${DIAGRAM_SCHEMA_DOCS}

IMPORTANT: For this question type, you SHOULD include a "diagram" field in your JSON response following the schema above.` : '';

  // JSON structure with optional diagram field
  const jsonExample = needsDiagram
    ? `{"content":"Question text using '${commandWord}'","marks":${targetMarks},"solution":"**Step 1:** [action] (M1)\\n**Step 2:** [calculation] (A1)\\n**Answer:** [final answer with units]","markScheme":["M1: Correct method/formula","A1 ft: Correct substitution/calculation","A1: cao Final answer"],"diagram":{"width":10,"height":8,"elements":[...]}}`
    : `{"content":"Question text using '${commandWord}'","marks":${targetMarks},"solution":"**Step 1:** [action] (M1)\\n**Step 2:** [calculation] (A1)\\n**Answer:** [final answer with units]","markScheme":["M1: Correct method/formula","A1 ft: Correct calculation","A1: cao Final answer"]}`;

  return `Generate a ${boardUpper} ${levelDisplay} ${subject} exam question. Return ONLY valid JSON, no markdown.

Topic: ${topicName} - ${subtopic}
Difficulty: ${difficultyDesc}
Marks: ${markRange.min}-${markRange.max}
QUESTION TYPE: ${formatGuidance.typeDescription}

Use command word: "${commandWord}"
${formatGuidance.requirements}

Requirements:
- Original question matching ${boardUpper} exam style
- Clear, unambiguous wording
- Worked solution with steps showing each mark point

MARK SCHEME FORMAT (CRITICAL - use proper notation):
Mark types:
- **M1, M2**: Method marks for correct approach/setup (awarded even with arithmetic errors)
- **A1, A2**: Accuracy marks for correct execution (depend on preceding M marks)
- **B1**: Independent marks for correct statements, values, or conclusions
- **ft**: Follow-through mark (credit given despite earlier errors if method is correct)
- **dep**: Dependent mark (requires previous mark to be awarded)
- **oe**: Or equivalent (accept equivalent correct forms)
- **cao**: Correct answer only (no follow-through)

For multi-part questions, prefix with part: "(a) M1:", "(b) A1:"
**CRITICAL: If your question has parts (a), (b), (c), etc., your markScheme MUST include marks for EVERY part. NO exceptions.**

EXAMPLE markScheme formats:
3-mark question: ["M1: Sets up equation correctly", "M1 dep: Solves to find $x$", "A1: cao $x = 5$"]
4-mark question: ["M1: Uses correct formula", "A1 ft: Substitutes values correctly", "M1 dep: Rearranges for final variable", "A1: cao Final answer with units"]
Multi-part: ["(a) B1: Correct value", "(b) M1: Identifies relationship", "(b) A1 ft: Calculates result"]
Multi-part 3 parts: ["(a) M1: Correct setup", "(a) A1: cao answer", "(b) M1: Uses result from (a)", "(b) A1: cao calculation", "(c) B1: Correct interpretation"]

LaTeX/Math Formatting (CRITICAL - Enhanced Guidelines):
**FUNDAMENTAL RULES:**
- ALWAYS wrap ALL math expressions in $...$ delimiters
- NEVER use Unicode symbols (°, ×, ≤, etc.) - use LaTeX commands instead
- Add proper spacing: $a + b = c$ not $a+b=c$
- Use \\, for thin spaces before units: $5\\,\\text{m}$

**VARIABLES AND FUNCTIONS:**
- Variables: $x$, $y$, $v$, $F$
- Functions: $\\sin x$, $\\cos 30°$, $\\log_2 x$, $\\ln(x+1)$
- Subscripts: $F_{\\text{net}}$, $v_{\\text{initial}}$, $x_1$, $x_2$ 
- Superscripts: $x^2$, $m^{-1}$, $s^{-2}$, $10^{-3}$

**MATHEMATICAL EXPRESSIONS:**
- Fractions: $\\frac{1}{2}$, $\\frac{a+b}{c-d}$, $\\dfrac{dy}{dx}$ (display)
- Roots: $\\sqrt{3}$, $\\sqrt[3]{x}$, $\\sqrt{x^2 + y^2}$
- Absolute values: $|x|$, $\\left|\\frac{a}{b}\\right|$
- Integrals: $\\int_0^1 x^2\\,dx$, $\\oint \\mathbf{F} \\cdot d\\mathbf{r}$

**SYMBOLS (Use LaTeX, NOT Unicode):**
- Greek: $\\alpha$, $\\beta$, $\\gamma$, $\\delta$, $\\theta$, $\\lambda$, $\\mu$, $\\pi$, $\\sigma$, $\\phi$, $\\omega$
- Operations: $\\times$ (not ×), $\\div$, $\\cdot$, $\\pm$, $\\mp$ 
- Relations: $\\leq$, $\\geq$, $\\neq$, $\\approx$, $\\equiv$, $\\propto$
- Arrows: $\\rightarrow$, $\\leftarrow$, $\\leftrightarrow$, $\\Rightarrow$
- Sets: $\\in$, $\\notin$, $\\subset$, $\\cup$, $\\cap$, $\\emptyset$
- Special: $\\infty$, $\\partial$, $\\nabla$, $\\degree$ (not °)

**UNITS AND MEASUREMENTS:**
- Always use \\text{} for units: $5\\,\\text{m}$, $9.8\\,\\text{m s}^{-2}$
- Compound units: $\\text{kg m}^{-2}$, $\\text{J mol}^{-1}\\text{K}^{-1}$
- Temperature: $25\\,\\degree\\text{C}$, $298\\,\\text{K}$
- Percentages: $75\\%$ or $75\\,\\text{percent}$

**CHEMISTRY NOTATION (for science subjects):**
- Chemical formulas: $\\text{H}_2\\text{O}$, $\\text{CO}_2$, $\\text{CaCO}_3$, $\\text{C}_6\\text{H}_{12}\\text{O}_6$
- Ions: $\\text{Na}^+$, $\\text{OH}^-$, $\\text{SO}_4^{2-}$, $\\text{Fe}^{3+}$
- Reaction arrows: $\\rightarrow$, $\\leftrightharpoons$ (equilibrium)
- State symbols: (s), (l), (g), (aq) - in regular parentheses
- Isotopes: $\\text{C}^{14}$, $\\text{U}^{235}$
- Electron configurations: $\\text{1s}^2\\text{2s}^2\\text{2p}^6$

**PHYSICS NOTATION:**
- Vectors: $\\vec{v}$, $\\mathbf{F}$, $\\hat{i}$ (unit vectors)
- Magnitudes: $|\\vec{v}|$ or just $v$ (scalar)
- Dot product: $\\vec{a} \\cdot \\vec{b}$, cross product: $\\vec{a} \\times \\vec{b}$
- Standard form: $3.0 \\times 10^8$, $6.67 \\times 10^{-11}$
- Derivatives: $\\frac{dv}{dt}$, $\\frac{\\partial U}{\\partial x}$
- Integrals: $\\int F\\,dx$, $\\oint \\mathbf{E} \\cdot d\\mathbf{A}$

**COMMON PHYSICS CONSTANTS (use proper formatting):**
- $c = 3.0 \\times 10^8\\,\\text{m s}^{-1}$
- $g = 9.8\\,\\text{m s}^{-2}$ 
- $h = 6.63 \\times 10^{-34}\\,\\text{J s}$
- $k_B = 1.38 \\times 10^{-23}\\,\\text{J K}^{-1}$
${diagramInstructions}

IMPORTANT: The AI will generate JSON responses with properly escaped LaTeX (double backslashes).
Use \\n for line breaks in strings

Return exactly this JSON structure (no markdown code blocks):
${jsonExample}`;
}

/**
 * Main prompt builder - routes to essay or quantitative prompt
 */
function buildPrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  // Check if this is an essay subject and get its configuration (now board-specific)
  const essayConfig = getQuestionConfig(subject, level, difficulty, board);

  if (essayConfig) {
    return buildEssayPrompt(essayConfig, subject, level, board, topicName, subtopic, difficulty);
  }

  return buildQuantitativePrompt(subject, level, board, topicName, subtopic, difficulty);
}
