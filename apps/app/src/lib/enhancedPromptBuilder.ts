/**
 * Enhanced Prompt Builder with Pattern Tracking and Exam-Realistic Difficulty
 * Ensures questions accurately reflect what students face in real exams
 */

import { Subject, Difficulty, QuestionType, ExamBoard, QualificationLevel } from '@/types';
import { getPatternTracker } from './questionPatternTracker';

interface ExamDifficultyProfile {
  marks: { min: number; typical: number; max: number };
  complexity: string[];
  skills: string[];
  timeExpectation: number; // minutes
  typicalCommands: string[];
  markSchemeStyle: 'points' | 'levels' | 'mixed';
}

/**
 * Get exam-realistic difficulty profiles
 * Based on actual exam paper analysis
 */
export function getExamDifficultyProfile(
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty
): ExamDifficultyProfile {
  const profiles: Record<string, Record<Difficulty, ExamDifficultyProfile>> = {
    'gcse': {
      easy: {
        marks: { min: 1, typical: 2, max: 4 },
        complexity: ['recall', 'identify', 'state', 'simple calculation'],
        skills: ['AO1 - Knowledge recall', 'Basic understanding'],
        timeExpectation: 2,
        typicalCommands: ['State', 'Name', 'Give', 'What is', 'Calculate (simple)'],
        markSchemeStyle: 'points',
      },
      medium: {
        marks: { min: 3, typical: 4, max: 6 },
        complexity: ['explain', 'describe', 'multi-step calculation', 'apply knowledge'],
        skills: ['AO2 - Application', 'AO1/AO2 combination'],
        timeExpectation: 4,
        typicalCommands: ['Explain', 'Describe', 'Calculate', 'Show that', 'Compare'],
        markSchemeStyle: 'points',
      },
      hard: {
        marks: { min: 5, typical: 6, max: 9 },
        complexity: ['evaluate', 'justify', 'complex problem-solving', 'synthesis'],
        skills: ['AO3 - Analysis/Evaluation', 'Multiple skills combined'],
        timeExpectation: 7,
        typicalCommands: ['Evaluate', 'Discuss', 'To what extent', 'Analyse', 'Justify'],
        markSchemeStyle: 'mixed',
      },
    },
    'a-level': {
      easy: {
        marks: { min: 2, typical: 3, max: 5 },
        complexity: ['recall', 'state', 'routine calculation', 'standard procedure'],
        skills: ['AO1 - Knowledge', 'Routine application'],
        timeExpectation: 3,
        typicalCommands: ['State', 'Define', 'Calculate', 'Show that', 'Derive'],
        markSchemeStyle: 'points',
      },
      medium: {
        marks: { min: 4, typical: 6, max: 10 },
        complexity: ['multi-step problem', 'explain reasoning', 'apply to novel context'],
        skills: ['AO2 - Application', 'Problem-solving'],
        timeExpectation: 6,
        typicalCommands: ['Explain', 'Prove', 'Determine', 'Analyse', 'Compare and contrast'],
        markSchemeStyle: 'mixed',
      },
      hard: {
        marks: { min: 8, typical: 12, max: 20 },
        complexity: ['critical evaluation', 'complex synthesis', 'extended response', 'novel problems'],
        skills: ['AO3 - Analysis/Evaluation', 'Synoptic assessment'],
        timeExpectation: 12,
        typicalCommands: ['Critically evaluate', 'Assess', 'To what extent', 'Discuss', 'Essay'],
        markSchemeStyle: 'levels',
      },
    },
  };

  const levelProfiles = profiles[level] || profiles['gcse'];
  return levelProfiles[difficulty];
}

/**
 * Generate exam-board specific question constraints
 */
export function getExamBoardConstraints(
  board: ExamBoard,
  subject: Subject,
  level: QualificationLevel
): string {
  const boardConstraints: Record<ExamBoard, string> = {
    aqa: `
AQA SPECIFIC REQUIREMENTS:
- Use AQA command word glossary precisely
- Include "AO" (Assessment Objective) breakdown in mark scheme
- For ${level === 'a-level' ? 'A-Level' : 'GCSE'}: Follow AQA mark allocation patterns
- Include "ft" (follow through) marks where appropriate
- Use AQA-style mathematical notation
- For extended responses: Use level descriptors (Level 1/2/3)`,
    
    edexcel: `
EDEXCEL (PEARSON) SPECIFIC REQUIREMENTS:
- Follow Edexcel command word definitions strictly
- Use Pearson marking abbreviations (B1, M1, A1 for maths/science)
- Include "dep" (dependent) marks where chains of reasoning required
- For ${level === 'a-level' ? 'A-Level' : 'GCSE'}: Match Edexcel's typical mark distributions
- Use Edexcel-style question numbering if multi-part`,
    
    ocr: `
OCR SPECIFIC REQUIREMENTS:
- Apply OCR command verb definitions
- Use OCR mark scheme notation
- Include "POT" (Proof of Technique) marks where applicable
- For ${level === 'a-level' ? 'A-Level' : 'GCSE'}: Follow OCR's structured question style
- Include synoptic elements for A-Level`,
    
    // wjec: `
// WJEC/EDUQAS SPECIFIC REQUIREMENTS:
// - Follow WJEC command word interpretations
// - Include bilingual considerations if applicable
// - Use WJEC mark scheme format
// - For ${level === 'a-level' ? 'A-Level' : 'GCSE'}: Match WJEC question styles
// - Include "QWC" (Quality of Written Communication) marks where appropriate`,
    
    // ib: `
// IB SPECIFIC REQUIREMENTS:
// - Use IB command terms precisely
// - Include criterion-based assessment where applicable
// - Reference IB learner profile traits if relevant
// - Use international contexts and examples
// - Include TOK (Theory of Knowledge) connections for extended responses`,
  };

  return boardConstraints[board] || boardConstraints['aqa'];
}

/**
 * Generate enhanced prompt with pattern tracking
 */
export function buildEnhancedPrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty,
  excludeContent?: string[]
): string {
  // Get pattern tracker for variety
  const tracker = getPatternTracker();
  const patternData = tracker.generateUniquePattern(
    subject,
    subtopic,
    'general' as QuestionType,
    difficulty
  );

  // Get exam-realistic difficulty profile
  const difficultyProfile = getExamDifficultyProfile(subject, level, difficulty);
  
  // Get exam board constraints
  const boardConstraints = getExamBoardConstraints(board, subject, level);

  // Build the enhanced prompt
  const prompt = `
Generate an EXAM-REALISTIC ${board.toUpperCase()} ${level === 'a-level' ? 'A-Level' : 'GCSE'} ${subject} question.

CRITICAL: This question MUST accurately reflect what students face in real ${board.toUpperCase()} exams.

TOPIC: ${topicName} - ${subtopic}
DIFFICULTY: ${difficulty.toUpperCase()}
MARKS: ${difficultyProfile.marks.typical} marks (range: ${difficultyProfile.marks.min}-${difficultyProfile.marks.max})

EXAM-REALISTIC DIFFICULTY REQUIREMENTS FOR ${difficulty.toUpperCase()}:
- Complexity: ${difficultyProfile.complexity.join(', ')}
- Skills tested: ${difficultyProfile.skills.join(', ')}
- Expected completion time: ${difficultyProfile.timeExpectation} minutes
- Use command word from: ${difficultyProfile.typicalCommands.join(', ')}
- Mark scheme style: ${difficultyProfile.markSchemeStyle}

PATTERN VARIETY (CRITICAL - AVOID REPETITION):
- Use this pattern structure: "${patternData.pattern}"
- Apply this scenario context: "${patternData.scenario}"
- Focus on this aspect: ${patternData.variations[Math.floor(Math.random() * patternData.variations.length)]}
- AVOID these recent patterns: ${patternData.avoidPatterns.join(', ')}

${boardConstraints}

SUBJECT-SPECIFIC REQUIREMENTS FOR ${subject.toUpperCase()}:
${getSubjectSpecificRequirements(subject, level, difficulty)}

${excludeContent && excludeContent.length > 0 ? `
EXCLUDE CONTENT:
Do NOT include questions about: ${excludeContent.join(', ')}
` : ''}

MARK SCHEME REQUIREMENTS:
${getMarkSchemeRequirements(difficultyProfile, subject, level)}

QUALITY CRITERIA:
1. Question must be unambiguous and clearly worded
2. Difficulty must genuinely reflect ${difficulty} level (not just mark count)
3. Mark allocation must match question demand
4. Include all information needed to answer (no missing data)
5. Use correct technical terminology for ${subject}
6. Format appropriately for ${board} ${level}

Return ONLY valid JSON with this structure:
{
  "question": "The question text",
  "markScheme": ["Point 1", "Point 2", ...],
  "marks": ${difficultyProfile.marks.typical},
  "solution": "Detailed worked solution",
  "diagram": null or diagram object if needed
}`;

  return prompt;
}

/**
 * Get subject-specific requirements for exam realism
 */
function getSubjectSpecificRequirements(
  subject: Subject,
  level: QualificationLevel,
  difficulty: Difficulty
): string {
  const requirements: Record<Subject, string> = {
    'maths': `
- Include proper mathematical notation using LaTeX
- Show clear progression in difficulty through question parts
- ${difficulty === 'hard' ? 'Include proof or "show that" elements' : ''}
- ${level === 'a-level' ? 'May include connections between topics (synoptic)' : ''}
- Provide context if word problem (realistic values)`,
    
    'physics': `
- Include realistic physical scenarios and values
- Specify units clearly in question and expect in answer
- ${difficulty === 'hard' ? 'May require derivation or explanation of principles' : ''}
- ${level === 'a-level' ? 'Can include calculus-based approaches' : ''}
- Consider including diagram for forces/circuits/waves`,
    
    'chemistry': `
- Use correct chemical nomenclature and formulae
- Include balanced equations where relevant
- ${difficulty === 'hard' ? 'May require multi-step calculations or mechanisms' : ''}
- ${level === 'a-level' ? 'Can include organic synthesis or complex equilibria' : ''}
- Specify conditions (temperature, pressure, catalyst) if relevant`,
    
    'biology': `
- Use precise biological terminology
- ${difficulty === 'hard' ? 'Include data interpretation or experimental design' : ''}
- ${level === 'a-level' ? 'May include statistics or synoptic links' : ''}
- Consider including diagrams for structures/processes
- Reference real biological examples`,
    
    'economics': `
- Use current economic terminology correctly
- Include realistic economic data/scenarios
- ${difficulty === 'hard' ? 'Require evaluation of policies or theories' : ''}
- ${level === 'a-level' ? 'Include diagram drawing/interpretation' : ''}
- Reference real-world examples where appropriate`,
    
    'history': `
- Specify time period and historical context clearly
- ${difficulty === 'hard' ? 'Include source analysis or historiography' : ''}
- ${level === 'a-level' ? 'Require sustained analytical writing' : ''}
- Use appropriate historical terminology
- May include primary/secondary sources`,
    
    'english-literature': `
- Reference specific texts from curriculum
- ${difficulty === 'hard' ? 'Require critical analysis and evaluation' : ''}
- ${level === 'a-level' ? 'Include theoretical perspectives' : ''}
- Focus on literary techniques and their effects
- May include extract for analysis`,
    
    'psychology': `
- Reference specific studies and researchers
- Use correct psychological terminology
- ${difficulty === 'hard' ? 'Include research methods evaluation' : ''}
- ${level === 'a-level' ? 'May require statistical analysis' : ''}
- Include application to real scenarios`,
    
    'computer-science': `
- Include code snippets or algorithms where relevant
- Use appropriate programming concepts
- ${difficulty === 'hard' ? 'May require algorithm analysis or design' : ''}
- ${level === 'a-level' ? 'Can include Big O notation or complex data structures' : ''}
- Provide trace tables or pseudocode as needed`,
    
    'geography': `
- Include real places and case studies
- ${difficulty === 'hard' ? 'Require evaluation of management strategies' : ''}
- ${level === 'a-level' ? 'Include synoptic elements' : ''}
- May include maps, graphs, or fieldwork data
- Use correct geographical terminology`,
    
    'business': `
- Use current business terminology
- Include realistic business scenarios
- ${difficulty === 'hard' ? 'Require strategic evaluation' : ''}
- ${level === 'a-level' ? 'Include financial calculations' : ''}
- Reference business theories and models`,
    
    'further-maths': `
- Include advanced mathematical topics
- Require rigorous proof techniques
- Use complex notation appropriately
- Include multi-part problems building complexity
- May require connections between pure and applied`,
    
    'combined-science': `
- Cover biology, chemistry, and physics concepts
- Ensure appropriate depth for combined award
- Include practical-based questions
- Balance across three sciences
- Use interdisciplinary examples where possible`,
  };

  return requirements[subject] || `
- Use correct subject terminology
- Ensure appropriate depth for ${level}
- Follow standard exam question styles`;
}

/**
 * Get mark scheme requirements based on difficulty
 */
function getMarkSchemeRequirements(
  profile: ExamDifficultyProfile,
  subject: Subject,
  level: QualificationLevel
): string {
  if (profile.markSchemeStyle === 'levels') {
    return `
Use LEVEL DESCRIPTORS for marking:
- Level 3 (${profile.marks.max - 1}-${profile.marks.max} marks): Comprehensive, well-structured, evaluative
- Level 2 (${Math.ceil(profile.marks.typical / 2)}-${profile.marks.max - 2} marks): Clear, mostly accurate, some analysis
- Level 1 (1-${Math.floor(profile.marks.typical / 2)} marks): Basic, limited accuracy, mostly descriptive
- Level 0 (0 marks): Nothing worthy of credit

Include indicative content listing key points expected.`;
  } else if (profile.markSchemeStyle === 'mixed') {
    return `
Use MIXED MARKING APPROACH:
- Award marks for specific content points (1 mark each)
- Include method marks (M) for procedures/working
- Include accuracy marks (A) for correct final answers
- Use "ft" for follow-through marks
- Total: ${profile.marks.typical} marks`;
  } else {
    return `
Use POINT-BASED MARKING:
- 1 mark per valid point/step
- Clear allocation for each mark
- Include alternative acceptable answers
- Use "or" for equivalent responses
- Total: ${profile.marks.typical} marks`;
  }
}