/**
 * Enhanced Mark Scheme Generator
 * Creates detailed, exam-board compliant mark schemes with multiple approaches
 */

import { Subject, Difficulty, ExamBoard, QualificationLevel } from '@/types';

export interface MarkPoint {
  mark: string;          // e.g., "M1", "A1", "B1"
  description: string;
  alternatives?: string[];
  dependencies?: string[]; // e.g., ["M1"] means this mark depends on M1
  notes?: string;         // Examiner notes
}

export interface EnhancedMarkScheme {
  totalMarks: number;
  mainScheme: MarkPoint[];
  alternativeApproaches?: AlternativeApproach[];
  levelDescriptors?: LevelDescriptor[];
  commonMisconceptions?: Misconception[];
  examinerNotes?: string;
  indicativeContent?: string[];
  assessmentObjectives?: AOBreakdown[];
}

export interface AlternativeApproach {
  name: string;
  description: string;
  markPoints: MarkPoint[];
}

export interface LevelDescriptor {
  level: number;
  marksRange: [number, number];
  characteristics: string[];
  typicalFeatures: string[];
}

export interface Misconception {
  error: string;
  maxMark: number;
  feedback: string;
}

export interface AOBreakdown {
  objective: string; // e.g., "AO1", "AO2", "AO3"
  marks: number;
  description: string;
}

/**
 * Generate mark types based on subject
 */
export function getMarkTypes(subject: Subject): Record<string, string> {
  const mathsScience = {
    'B': 'Basic mark - for stating facts or simple recall',
    'M': 'Method mark - for using correct method/procedure',
    'A': 'Accuracy mark - for correct answer from correct method',
    'ft': 'Follow through - credit for correct method with wrong value',
    'dep': 'Dependent - only available if previous mark earned',
    'cao': 'Correct answer only - no method marks available',
    'oe': 'Or equivalent - alternative acceptable answers',
  };

  const essaySubjects = {
    'AO1': 'Knowledge and understanding',
    'AO2': 'Application and analysis',
    'AO3': 'Evaluation and synthesis',
    'SPaG': 'Spelling, punctuation and grammar',
    'QWC': 'Quality of written communication',
  };

  if (['maths', 'further-maths', 'physics', 'chemistry', 'biology', 'combined-science'].includes(subject)) {
    return mathsScience;
  } else if (['english-literature', 'history', 'psychology', 'economics', 'business', 'geography'].includes(subject)) {
    return essaySubjects;
  } else {
    return { ...mathsScience, ...essaySubjects };
  }
}

/**
 * Generate enhanced mark scheme based on question type
 */
export function generateEnhancedMarkScheme(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  difficulty: Difficulty,
  totalMarks: number,
  questionType: 'calculation' | 'explain' | 'essay' | 'practical' | 'proof' | 'analysis',
  topic?: string
): EnhancedMarkScheme {
  const markTypes = getMarkTypes(subject);
  
  if (questionType === 'calculation') {
    return generateCalculationMarkScheme(subject, totalMarks, difficulty, markTypes);
  } else if (questionType === 'proof') {
    return generateProofMarkScheme(totalMarks, difficulty);
  } else if (questionType === 'practical') {
    return generatePracticalMarkScheme(subject, totalMarks);
  } else if (questionType === 'essay' || 
             (totalMarks >= 8 && ['history', 'english-literature', 'economics', 'psychology', 'geography', 'business'].includes(subject))) {
    // Only use essay marking for actual essays or high-mark humanities questions
    return generateEssayMarkScheme(subject, level, totalMarks, difficulty);
  } else if (questionType === 'explain') {
    return generateExplanationMarkScheme(subject, totalMarks, difficulty);
  } else {
    return generateStandardMarkScheme(subject, totalMarks, difficulty);
  }
}

/**
 * Generate calculation mark scheme (maths/science)
 */
function generateCalculationMarkScheme(
  subject: Subject,
  totalMarks: number,
  difficulty: Difficulty,
  markTypes: Record<string, string>
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
    commonMisconceptions: [],
    examinerNotes: 'Award method marks even if arithmetic errors present',
  };

  if (difficulty === 'easy' && totalMarks <= 3) {
    scheme.mainScheme = [
      {
        mark: 'M1',
        description: 'Correct formula or method identified',
        alternatives: ['States relevant equation', 'Shows understanding of required process'],
      },
      {
        mark: 'A1',
        description: 'Correct substitution and calculation',
        dependencies: ['M1'],
        notes: 'Accept equivalent forms',
      },
    ];
    if (totalMarks === 3) {
      scheme.mainScheme.push({
        mark: 'A1',
        description: 'Correct final answer with appropriate units',
        dependencies: ['A1'],
        notes: 'Must include units for final mark',
      });
    }
  } else if (difficulty === 'medium') {
    scheme.mainScheme = [
      {
        mark: 'M1',
        description: 'Identifies and states correct approach',
        alternatives: ['Draws appropriate diagram', 'Sets up initial equation'],
      },
      {
        mark: 'M1',
        description: 'Correct method for main calculation',
        notes: 'May be implied by correct working',
      },
      {
        mark: 'A1',
        description: 'Correct intermediate value',
        dependencies: ['M1'],
        notes: 'ft from their method',
      },
    ];
    
    if (totalMarks > 3) {
      scheme.mainScheme.push(
        {
          mark: 'M1',
          description: 'Valid method for final step',
          dependencies: ['A1'],
        },
        {
          mark: 'A1',
          description: 'Correct final answer',
          dependencies: ['M1'],
          notes: 'cao - must be exact',
        }
      );
    }

    // Add alternative approach
    scheme.alternativeApproaches = [{
      name: 'Graphical method',
      description: 'Using graph to solve instead of algebraic approach',
      markPoints: [
        { mark: 'M1', description: 'Correct graph drawn' },
        { mark: 'M1', description: 'Appropriate scale and labels' },
        { mark: 'A1', description: 'Correct reading from graph' },
      ],
    }];
  } else { // hard
    const steps = Math.ceil(totalMarks / 2);
    for (let i = 0; i < steps; i++) {
      scheme.mainScheme.push({
        mark: 'M1',
        description: `Step ${i + 1}: Correct method for ${i === 0 ? 'initial setup' : i === steps - 1 ? 'final calculation' : 'intermediate step'}`,
        dependencies: i > 0 ? [`M${i}`] : undefined,
      });
      if (i < totalMarks - steps) {
        scheme.mainScheme.push({
          mark: 'A1',
          description: `Correct value for step ${i + 1}`,
          dependencies: [`M${i + 1}`],
          notes: 'ft from previous errors',
        });
      }
    }
  }

  // Add common misconceptions
  scheme.commonMisconceptions = [
    {
      error: 'Using wrong formula',
      maxMark: 0,
      feedback: 'No credit for incorrect formula unless shows valid alternative method',
    },
    {
      error: 'Arithmetic error',
      maxMark: totalMarks - 1,
      feedback: 'Lose accuracy marks only, method marks still available',
    },
    {
      error: 'Missing units',
      maxMark: totalMarks - 1,
      feedback: 'Lose final accuracy mark only if units required',
    },
  ];

  return scheme;
}

/**
 * Generate essay mark scheme (humanities/essay subjects)
 */
function generateEssayMarkScheme(
  subject: Subject,
  level: QualificationLevel,
  totalMarks: number,
  difficulty: Difficulty
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
    levelDescriptors: [],
    assessmentObjectives: [],
    indicativeContent: [],
  };

  // Define levels based on marks
  const levels = totalMarks >= 16 ? 4 : totalMarks >= 8 ? 3 : 2;
  const marksPerLevel = Math.ceil(totalMarks / levels);

  for (let i = levels; i > 0; i--) {
    const maxMark = Math.min(i * marksPerLevel, totalMarks);
    const minMark = (i - 1) * marksPerLevel + 1;
    
    scheme.levelDescriptors?.push({
      level: i,
      marksRange: [minMark, maxMark],
      characteristics: getLevelCharacteristics(i, levels, subject, difficulty),
      typicalFeatures: getLevelFeatures(i, levels, subject),
    });
  }

  // Add AO breakdown - ensure marks sum to totalMarks exactly
  if (level === 'a-level') {
    const ao1Marks = Math.floor(totalMarks * 0.3);
    const ao2Marks = Math.floor(totalMarks * 0.4);
    const ao3Marks = totalMarks - ao1Marks - ao2Marks; // Ensure exact sum
    
    scheme.assessmentObjectives = [
      { objective: 'AO1', marks: ao1Marks, description: 'Knowledge and understanding' },
      { objective: 'AO2', marks: ao2Marks, description: 'Application and analysis' },
      { objective: 'AO3', marks: ao3Marks, description: 'Evaluation' },
    ];
  } else {
    const ao1Marks = Math.floor(totalMarks * 0.4);
    const ao2Marks = Math.floor(totalMarks * 0.3);
    const ao3Marks = totalMarks - ao1Marks - ao2Marks; // Ensure exact sum
    
    scheme.assessmentObjectives = [
      { objective: 'AO1', marks: ao1Marks, description: 'Knowledge and understanding' },
      { objective: 'AO2', marks: ao2Marks, description: 'Application' },
      { objective: 'AO3', marks: ao3Marks, description: 'Analysis and evaluation' },
    ];
  }

  // Add indicative content
  scheme.indicativeContent = generateIndicativeContent(subject, difficulty);

  // Add SPaG marks for longer essays
  if (totalMarks >= 16 && ['history', 'english-literature', 'geography'].includes(subject)) {
    scheme.examinerNotes = 'Additional 4 marks available for SPaG (Spelling, Punctuation and Grammar)';
  }

  return scheme;
}

/**
 * Generate explanation mark scheme
 */
function generateExplanationMarkScheme(
  subject: Subject,
  totalMarks: number,
  difficulty: Difficulty
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
  };

  const pointsNeeded = totalMarks;
  const complexityLevel = difficulty === 'hard' ? 'detailed' : difficulty === 'medium' ? 'clear' : 'basic';

  for (let i = 0; i < pointsNeeded; i++) {
    scheme.mainScheme.push({
      mark: 'B1',
      description: `${complexityLevel} explanation point ${i + 1}`,
      alternatives: i === 0 ? ['Alternative starting point', 'Different initial approach'] : undefined,
      notes: `Must show ${complexityLevel} understanding`,
    });
  }

  if (difficulty === 'hard' && totalMarks >= 4) {
    // Add requirement for linked explanation
    scheme.examinerNotes = 'At least two points must be clearly linked for full marks';
    scheme.mainScheme[totalMarks - 1].dependencies = ['B1', 'B2'];
  }

  return scheme;
}

/**
 * Generate proof mark scheme (maths)
 */
function generateProofMarkScheme(
  totalMarks: number,
  difficulty: Difficulty
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
    examinerNotes: 'Proof must be rigorous and complete for full marks',
  };

  if (difficulty === 'easy') {
    scheme.mainScheme = [
      { mark: 'M1', description: 'Correct starting point or initial statement' },
      { mark: 'M1', description: 'Valid logical progression', dependencies: ['M1'] },
      { mark: 'A1', description: 'Reaches correct conclusion', dependencies: ['M1'] },
    ];
  } else if (difficulty === 'medium') {
    scheme.mainScheme = [
      { mark: 'M1', description: 'Identifies appropriate proof technique' },
      { mark: 'M1', description: 'Correct initial setup or base case' },
      { mark: 'M1', description: 'Valid inductive/deductive step', dependencies: ['M1'] },
      { mark: 'A1', description: 'Completes proof with correct conclusion', dependencies: ['M1'] },
    ];
  } else {
    const steps = Math.min(totalMarks - 1, 5);
    for (let i = 0; i < steps; i++) {
      scheme.mainScheme.push({
        mark: 'M1',
        description: `Proof step ${i + 1}: ${getProofStepDescription(i, steps)}`,
        dependencies: i > 0 ? [`M${i}`] : undefined,
      });
    }
    scheme.mainScheme.push({
      mark: 'A1',
      description: 'Complete and rigorous conclusion',
      dependencies: [`M${steps}`],
      notes: 'Must explicitly state what was required to prove',
    });
  }

  return scheme;
}

/**
 * Generate practical mark scheme (sciences)
 */
function generatePracticalMarkScheme(
  subject: Subject,
  totalMarks: number
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
    examinerNotes: 'Credit valid alternative methods and safety considerations',
  };

  const aspects = [
    'Identifies key variables',
    'Describes valid method',
    'Addresses safety/ethics',
    'Explains how to ensure validity',
    'Describes data collection',
    'Identifies sources of error',
    'Suggests improvements',
  ];

  const marksPerAspect = Math.ceil(totalMarks / Math.min(aspects.length, totalMarks));
  
  for (let i = 0; i < Math.min(totalMarks, aspects.length); i++) {
    scheme.mainScheme.push({
      mark: marksPerAspect > 1 ? 'B2' : 'B1',
      description: aspects[i],
      alternatives: [`Alternative approach for ${aspects[i].toLowerCase()}`],
    });
  }

  return scheme;
}

/**
 * Generate standard mark scheme (fallback)
 */
function generateStandardMarkScheme(
  subject: Subject,
  totalMarks: number,
  difficulty: Difficulty
): EnhancedMarkScheme {
  const scheme: EnhancedMarkScheme = {
    totalMarks,
    mainScheme: [],
  };

  for (let i = 0; i < totalMarks; i++) {
    scheme.mainScheme.push({
      mark: 'B1',
      description: `Valid point ${i + 1}`,
      notes: difficulty === 'hard' ? 'Must show depth of understanding' : undefined,
    });
  }

  return scheme;
}

/**
 * Get level characteristics for essay marking
 */
function getLevelCharacteristics(
  level: number,
  maxLevel: number,
  subject: Subject,
  difficulty: Difficulty
): string[] {
  const characteristics: Record<number, string[]> = {
    4: [
      'Comprehensive knowledge and understanding',
      'Sophisticated analysis and evaluation',
      'Well-structured and coherent argument',
      'Precise use of subject terminology',
      'Fully supported conclusions',
    ],
    3: [
      'Good knowledge and understanding',
      'Clear analysis with some evaluation',
      'Generally well-structured response',
      'Good use of subject terminology',
      'Supported conclusions',
    ],
    2: [
      'Some knowledge and understanding',
      'Basic analysis attempted',
      'Some structure to response',
      'Some use of subject terminology',
      'Simple conclusions',
    ],
    1: [
      'Limited knowledge shown',
      'Descriptive rather than analytical',
      'Limited structure',
      'Basic terminology',
      'Unsupported assertions',
    ],
  };

  return characteristics[level] || characteristics[1];
}

/**
 * Get level features for specific subjects
 */
function getLevelFeatures(level: number, maxLevel: number, subject: Subject): string[] {
  if (subject === 'history') {
    return [
      level === maxLevel ? 'Sustained analytical focus' : 'Some analysis present',
      level === maxLevel ? 'Wide range of accurate knowledge' : 'Some accurate knowledge',
      level === maxLevel ? 'Sophisticated evaluation' : 'Basic evaluation attempted',
    ];
  } else if (subject === 'english-literature') {
    return [
      level === maxLevel ? 'Perceptive analysis of language/structure' : 'Some analysis of techniques',
      level === maxLevel ? 'Sophisticated understanding of context' : 'Basic contextual awareness',
      level === maxLevel ? 'Original and creative insights' : 'Some personal response',
    ];
  }
  
  return [
    'Appropriate depth for level',
    'Relevant examples used',
    'Clear communication',
  ];
}

/**
 * Generate indicative content based on subject and difficulty
 */
function generateIndicativeContent(subject: Subject, difficulty: Difficulty): string[] {
  const basePoints = difficulty === 'hard' ? 8 : difficulty === 'medium' ? 6 : 4;
  const content: string[] = [];
  
  for (let i = 0; i < basePoints; i++) {
    content.push(`Key point ${i + 1} with supporting evidence/example`);
  }
  
  if (difficulty === 'hard') {
    content.push('Counter-arguments addressed');
    content.push('Sophisticated evaluation of different perspectives');
  }
  
  return content;
}

/**
 * Get proof step descriptions
 */
function getProofStepDescription(step: number, totalSteps: number): string {
  const descriptions = [
    'Establish initial conditions or assumptions',
    'Develop key relationship or identity',
    'Apply mathematical principle or theorem',
    'Manipulate expressions algebraically',
    'Verify conditions are satisfied',
    'State conclusion follows from previous steps',
  ];
  
  return descriptions[Math.min(step, descriptions.length - 1)];
}