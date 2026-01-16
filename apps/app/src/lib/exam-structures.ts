/**
 * Comprehensive exam structure data for all supported subjects, exam boards, and levels.
 * This data is used by the past paper generator to create realistic exam papers.
 *
 * Research sources:
 * - AQA: https://www.aqa.org.uk
 * - Edexcel/Pearson: https://qualifications.pearson.com
 * - OCR: https://www.ocr.org.uk
 */

import { ExamBoard, QualificationLevel, Subject } from '@/types';

export interface PaperStructure {
  paperNumber: number;
  name: string;
  duration: number; // minutes
  marks: number;
  calculator: boolean;
  topics?: string[]; // Topic codes/names this paper covers
  weighting?: number; // Percentage of total qualification
  questionTypes?: QuestionType[];
  notes?: string[]; // Additional notes about the paper
}

export interface QuestionType {
  type: 'multiple-choice' | 'short-answer' | 'structured' | 'extended-response' | 'essay' | 'calculation' | 'practical';
  marksRange: [number, number]; // min, max marks per question
  count?: number; // typical number of this type
  description?: string;
}

export interface ExamStructure {
  examBoard: ExamBoard;
  level: QualificationLevel;
  subject: Subject;
  specCode: string;
  totalMarks: number;
  totalDuration: number; // minutes
  papers: PaperStructure[];
  tiers?: ('foundation' | 'higher')[];
  practicalEndorsement?: boolean;
  neaComponent?: {
    marks: number;
    weighting: number;
  };
  notes?: string[];
}

// =============================================================================
// GCSE MATHEMATICS
// =============================================================================

const gcseMathsAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'gcse',
  subject: 'maths',
  specCode: '8300',
  totalMarks: 240,
  totalDuration: 270, // 4h 30m
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (Non-Calculator)',
      duration: 90,
      marks: 80,
      calculator: false,
      weighting: 33.33,
      questionTypes: [
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'structured', marksRange: [3, 6] },
        { type: 'extended-response', marksRange: [4, 6] },
      ],
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Calculator)',
      duration: 90,
      marks: 80,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 3,
      name: 'Paper 3 (Calculator)',
      duration: 90,
      marks: 80,
      calculator: true,
      weighting: 33.33,
    },
  ],
};

const gcseMathsEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'gcse',
  subject: 'maths',
  specCode: '1MA1',
  totalMarks: 240,
  totalDuration: 270,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (Non-Calculator)',
      duration: 90,
      marks: 80,
      calculator: false,
      weighting: 33.33,
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Calculator)',
      duration: 90,
      marks: 80,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 3,
      name: 'Paper 3 (Calculator)',
      duration: 90,
      marks: 80,
      calculator: true,
      weighting: 33.33,
    },
  ],
};

const gcseMathsOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'gcse',
  subject: 'maths',
  specCode: 'J560',
  totalMarks: 300, // OCR uses 100 marks per paper
  totalDuration: 270,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 90,
      marks: 100,
      calculator: true, // OCR allows calculator on all papers
      weighting: 33.33,
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 90,
      marks: 100,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 3,
      name: 'Paper 3',
      duration: 90,
      marks: 100,
      calculator: true,
      weighting: 33.33,
    },
  ],
  notes: ['OCR allows calculators on all three papers, unlike AQA and Edexcel'],
};

// =============================================================================
// A-LEVEL MATHEMATICS
// =============================================================================

const aLevelMathsAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'a-level',
  subject: 'maths',
  specCode: '7357',
  totalMarks: 300,
  totalDuration: 360, // 6 hours
  papers: [
    {
      paperNumber: 1,
      name: 'Pure Mathematics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      topics: ['proof', 'algebra', 'coordinate-geometry', 'sequences', 'trigonometry', 'exponentials', 'differentiation', 'integration', 'numerical-methods'],
    },
    {
      paperNumber: 2,
      name: 'Mechanics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      topics: ['kinematics', 'forces', 'newtons-laws', 'moments'],
    },
    {
      paperNumber: 3,
      name: 'Statistics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      topics: ['sampling', 'data-presentation', 'probability', 'distributions', 'hypothesis-testing'],
    },
  ],
};

const aLevelMathsEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'a-level',
  subject: 'maths',
  specCode: '9MA0',
  totalMarks: 300,
  totalDuration: 360,
  papers: [
    {
      paperNumber: 1,
      name: 'Pure Mathematics 1',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 2,
      name: 'Pure Mathematics 2',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 3,
      name: 'Statistics and Mechanics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      topics: ['statistics', 'mechanics'],
      notes: ['Section A: Statistics (50 marks)', 'Section B: Mechanics (50 marks)'],
    },
  ],
};

const aLevelMathsOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'a-level',
  subject: 'maths',
  specCode: 'H240',
  totalMarks: 300,
  totalDuration: 360,
  papers: [
    {
      paperNumber: 1,
      name: 'Pure Mathematics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
    },
    {
      paperNumber: 2,
      name: 'Pure Mathematics and Statistics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      notes: ['~50 marks Pure, ~50 marks Statistics'],
    },
    {
      paperNumber: 3,
      name: 'Pure Mathematics and Mechanics',
      duration: 120,
      marks: 100,
      calculator: true,
      weighting: 33.33,
      notes: ['~50 marks Pure, ~50 marks Mechanics'],
    },
  ],
};

// =============================================================================
// GCSE PHYSICS
// =============================================================================

const gcsePhysicsAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'gcse',
  subject: 'physics',
  specCode: '8463',
  totalMarks: 200,
  totalDuration: 210, // 3h 30m
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['energy', 'electricity', 'particle-model', 'atomic-structure'],
      questionTypes: [
        { type: 'multiple-choice', marksRange: [1, 1], count: 21 },
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'structured', marksRange: [3, 6] },
        { type: 'extended-response', marksRange: [6, 6], count: 1 },
      ],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['forces', 'waves', 'magnetism', 'space'],
    },
  ],
};

const gcsePhysicsEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'gcse',
  subject: 'physics',
  specCode: '1PH0',
  totalMarks: 200,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['key-concepts', 'motion', 'conservation', 'waves', 'light', 'radioactivity', 'astronomy'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['energy', 'forces', 'electricity', 'magnetism', 'particle-model', 'forces-2'],
    },
  ],
};

const gcsePhysicsOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'gcse',
  subject: 'physics',
  specCode: 'J249',
  totalMarks: 180, // 90 per paper
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (Breadth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
      topics: ['matter', 'forces', 'electricity', 'magnetism', 'practical-skills'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Depth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
      topics: ['waves', 'radioactivity', 'energy', 'global-challenges', 'practical-skills'],
    },
  ],
};

// =============================================================================
// A-LEVEL PHYSICS
// =============================================================================

const aLevelPhysicsAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'a-level',
  subject: 'physics',
  specCode: '7408',
  totalMarks: 250,
  totalDuration: 360,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 120,
      marks: 85,
      calculator: true,
      weighting: 34,
      topics: ['measurements', 'particles', 'waves', 'mechanics', 'materials'],
      questionTypes: [
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'structured', marksRange: [6, 12] },
        { type: 'extended-response', marksRange: [6, 6], count: 1 },
      ],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 120,
      marks: 85,
      calculator: true,
      weighting: 34,
      topics: ['thermal', 'fields', 'nuclear'],
    },
    {
      paperNumber: 3,
      name: 'Paper 3',
      duration: 120,
      marks: 80,
      calculator: true,
      weighting: 32,
      topics: ['practical', 'optional-topic'],
      notes: ['Section A: Compulsory - Practical skills & data analysis', 'Section B: Optional topic'],
    },
  ],
};

const aLevelPhysicsEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'a-level',
  subject: 'physics',
  specCode: '9PH0',
  totalMarks: 300,
  totalDuration: 375, // 6h 15m
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Advanced Physics I',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
      topics: ['mechanics', 'electric-circuits', 'further-mechanics', 'electric-magnetic-fields', 'nuclear-particle'],
    },
    {
      paperNumber: 2,
      name: 'Advanced Physics II',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
      topics: ['materials', 'waves', 'thermodynamics', 'space', 'nuclear-radiation', 'gravitational-fields', 'oscillations'],
    },
    {
      paperNumber: 3,
      name: 'General and Practical Principles',
      duration: 150,
      marks: 120,
      calculator: true,
      weighting: 40,
      notes: ['Synoptic paper drawing on all topics', 'Includes practical-based questions'],
    },
  ],
};

const aLevelPhysicsOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'a-level',
  subject: 'physics',
  specCode: 'H556',
  totalMarks: 270,
  totalDuration: 420, // 7 hours
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Modelling Physics',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 2,
      name: 'Exploring Physics',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 3,
      name: 'Unified Physics',
      duration: 90,
      marks: 70,
      calculator: true,
      weighting: 26,
      notes: ['Synoptic paper covering all content'],
    },
  ],
};

// =============================================================================
// GCSE CHEMISTRY
// =============================================================================

const gcseChemistryAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'gcse',
  subject: 'chemistry',
  specCode: '8462',
  totalMarks: 200,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['atomic-structure', 'bonding', 'quantitative', 'chemical-changes', 'energy-changes'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['rates', 'organic', 'chemical-analysis', 'atmosphere', 'resources'],
    },
  ],
};

const gcseChemistryEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'gcse',
  subject: 'chemistry',
  specCode: '1CH0',
  totalMarks: 200,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
    },
  ],
};

const gcseChemistryOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'gcse',
  subject: 'chemistry',
  specCode: 'J248',
  totalMarks: 180,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (Breadth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
      topics: ['particles', 'elements', 'chemical-reactions', 'practical-skills'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Depth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
      topics: ['predicting-chemistry', 'global-challenges', 'practical-skills'],
    },
  ],
};

// =============================================================================
// A-LEVEL CHEMISTRY
// =============================================================================

const aLevelChemistryAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'a-level',
  subject: 'chemistry',
  specCode: '7405',
  totalMarks: 300,
  totalDuration: 360,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Inorganic and Physical Chemistry',
      duration: 120,
      marks: 105,
      calculator: true,
      weighting: 35,
      topics: ['physical-chemistry', 'inorganic-chemistry'],
      questionTypes: [
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'structured', marksRange: [6, 15] },
        { type: 'extended-response', marksRange: [6, 6], count: 1 },
      ],
    },
    {
      paperNumber: 2,
      name: 'Organic and Physical Chemistry',
      duration: 120,
      marks: 105,
      calculator: true,
      weighting: 35,
      topics: ['physical-chemistry', 'organic-chemistry'],
    },
    {
      paperNumber: 3,
      name: 'Synoptic',
      duration: 120,
      marks: 90,
      calculator: true,
      weighting: 30,
      notes: ['Covers all content', 'Multiple choice section', 'Practical-based questions'],
    },
  ],
};

const aLevelChemistryEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'a-level',
  subject: 'chemistry',
  specCode: '9CH0',
  totalMarks: 300,
  totalDuration: 375,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Advanced Inorganic and Physical Chemistry',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
    },
    {
      paperNumber: 2,
      name: 'Advanced Organic and Physical Chemistry',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
    },
    {
      paperNumber: 3,
      name: 'General and Practical Principles',
      duration: 150,
      marks: 120,
      calculator: true,
      weighting: 40,
      notes: ['Synoptic paper', 'Includes practical-based questions'],
    },
  ],
};

const aLevelChemistryOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'a-level',
  subject: 'chemistry',
  specCode: 'H432',
  totalMarks: 270,
  totalDuration: 360,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Periodic Table, Elements and Physical Chemistry',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 2,
      name: 'Synthesis and Analytical Techniques',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 3,
      name: 'Unified Chemistry',
      duration: 90,
      marks: 70,
      calculator: true,
      weighting: 26,
    },
  ],
};

// =============================================================================
// GCSE BIOLOGY
// =============================================================================

const gcseBiologyAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'gcse',
  subject: 'biology',
  specCode: '8461',
  totalMarks: 200,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['cell-biology', 'organisation', 'infection', 'bioenergetics'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
      topics: ['homeostasis', 'inheritance', 'variation', 'ecology'],
    },
  ],
};

const gcseBiologyEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'gcse',
  subject: 'biology',
  specCode: '1BI0',
  totalMarks: 200,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 105,
      marks: 100,
      calculator: true,
      weighting: 50,
    },
  ],
};

const gcseBiologyOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'gcse',
  subject: 'biology',
  specCode: 'J247',
  totalMarks: 180,
  totalDuration: 210,
  tiers: ['foundation', 'higher'],
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (Breadth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Depth)',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
    },
  ],
};

// =============================================================================
// A-LEVEL BIOLOGY
// =============================================================================

const aLevelBiologyAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'a-level',
  subject: 'biology',
  specCode: '7402',
  totalMarks: 260,
  totalDuration: 360,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1',
      duration: 120,
      marks: 91,
      calculator: true,
      weighting: 35,
      topics: ['biological-molecules', 'cells', 'organisms-exchange', 'genetic-information'],
      questionTypes: [
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'structured', marksRange: [6, 12] },
        { type: 'extended-response', marksRange: [6, 6], count: 1 },
      ],
    },
    {
      paperNumber: 2,
      name: 'Paper 2',
      duration: 120,
      marks: 91,
      calculator: true,
      weighting: 35,
      topics: ['energy-transfers', 'organisms-respond', 'genetics', 'control-genomes'],
    },
    {
      paperNumber: 3,
      name: 'Paper 3',
      duration: 120,
      marks: 78,
      calculator: true,
      weighting: 30,
      notes: ['Synoptic paper', 'Includes 25-mark essay question', 'Practical-based questions'],
      questionTypes: [
        { type: 'structured', marksRange: [3, 12] },
        { type: 'essay', marksRange: [25, 25], count: 1, description: 'Extended essay from choice of two' },
      ],
    },
  ],
};

const aLevelBiologyEdexcel: ExamStructure = {
  examBoard: 'edexcel',
  level: 'a-level',
  subject: 'biology',
  specCode: '9BI0',
  totalMarks: 300,
  totalDuration: 375,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Advanced Biochemistry, Microbiology and Genetics',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
      topics: ['biological-molecules', 'cells', 'classification', 'exchange', 'energy', 'microbiology', 'genetics'],
    },
    {
      paperNumber: 2,
      name: 'Advanced Physiology, Evolution and Ecology',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 30,
      topics: ['genetic-variation', 'control-systems', 'ecosystems'],
    },
    {
      paperNumber: 3,
      name: 'General and Practical Principles',
      duration: 150,
      marks: 120,
      calculator: true,
      weighting: 40,
      notes: ['Synoptic paper covering all topics'],
    },
  ],
};

const aLevelBiologyOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'a-level',
  subject: 'biology',
  specCode: 'H420',
  totalMarks: 270,
  totalDuration: 420,
  practicalEndorsement: true,
  papers: [
    {
      paperNumber: 1,
      name: 'Biological Processes',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 2,
      name: 'Biological Diversity',
      duration: 135,
      marks: 100,
      calculator: true,
      weighting: 37,
    },
    {
      paperNumber: 3,
      name: 'Unified Biology',
      duration: 90,
      marks: 70,
      calculator: true,
      weighting: 26,
    },
  ],
};

// =============================================================================
// GCSE COMPUTER SCIENCE
// =============================================================================

const gcseComputerScienceAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'gcse',
  subject: 'computer-science' as Subject,
  specCode: '8525',
  totalMarks: 180,
  totalDuration: 225,
  papers: [
    {
      paperNumber: 1,
      name: 'Computational Thinking and Programming',
      duration: 120,
      marks: 90,
      calculator: true,
      weighting: 50,
      questionTypes: [
        { type: 'short-answer', marksRange: [1, 4] },
        { type: 'calculation', marksRange: [2, 6] },
        { type: 'extended-response', marksRange: [8, 12] },
      ],
    },
    {
      paperNumber: 2,
      name: 'Computing Concepts',
      duration: 105,
      marks: 90,
      calculator: true,
      weighting: 50,
    },
  ],
};

const gcseComputerScienceOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'gcse',
  subject: 'computer-science' as Subject,
  specCode: 'J277',
  totalMarks: 160,
  totalDuration: 180,
  papers: [
    {
      paperNumber: 1,
      name: 'Computer Systems',
      duration: 90,
      marks: 80,
      calculator: false,
      weighting: 50,
    },
    {
      paperNumber: 2,
      name: 'Computational Thinking, Algorithms and Programming',
      duration: 90,
      marks: 80,
      calculator: false,
      weighting: 50,
    },
  ],
};

// =============================================================================
// A-LEVEL COMPUTER SCIENCE
// =============================================================================

const aLevelComputerScienceAQA: ExamStructure = {
  examBoard: 'aqa',
  level: 'a-level',
  subject: 'computer-science' as Subject,
  specCode: '7517',
  totalMarks: 275,
  totalDuration: 300,
  neaComponent: {
    marks: 75,
    weighting: 20,
  },
  papers: [
    {
      paperNumber: 1,
      name: 'Paper 1 (On-screen)',
      duration: 150,
      marks: 100,
      calculator: true,
      weighting: 40,
      notes: ['On-screen exam with pre-release skeleton code', 'Programming-based questions'],
    },
    {
      paperNumber: 2,
      name: 'Paper 2 (Written)',
      duration: 150,
      marks: 100,
      calculator: true,
      weighting: 40,
    },
  ],
};

const aLevelComputerScienceOCR: ExamStructure = {
  examBoard: 'ocr',
  level: 'a-level',
  subject: 'computer-science' as Subject,
  specCode: 'H446',
  totalMarks: 280,
  totalDuration: 300,
  neaComponent: {
    marks: 70,
    weighting: 20,
  },
  papers: [
    {
      paperNumber: 1,
      name: 'Computer Systems',
      duration: 150,
      marks: 140,
      calculator: true,
      weighting: 40,
    },
    {
      paperNumber: 2,
      name: 'Algorithms and Programming',
      duration: 150,
      marks: 140,
      calculator: true,
      weighting: 40,
    },
  ],
};

// =============================================================================
// EXPORTS
// =============================================================================

export const examStructures: ExamStructure[] = [
  // GCSE Maths
  gcseMathsAQA,
  gcseMathsEdexcel,
  gcseMathsOCR,
  // A-Level Maths
  aLevelMathsAQA,
  aLevelMathsEdexcel,
  aLevelMathsOCR,
  // GCSE Physics
  gcsePhysicsAQA,
  gcsePhysicsEdexcel,
  gcsePhysicsOCR,
  // A-Level Physics
  aLevelPhysicsAQA,
  aLevelPhysicsEdexcel,
  aLevelPhysicsOCR,
  // GCSE Chemistry
  gcseChemistryAQA,
  gcseChemistryEdexcel,
  gcseChemistryOCR,
  // A-Level Chemistry
  aLevelChemistryAQA,
  aLevelChemistryEdexcel,
  aLevelChemistryOCR,
  // GCSE Biology
  gcseBiologyAQA,
  gcseBiologyEdexcel,
  gcseBiologyOCR,
  // A-Level Biology
  aLevelBiologyAQA,
  aLevelBiologyEdexcel,
  aLevelBiologyOCR,
  // GCSE Computer Science
  gcseComputerScienceAQA,
  gcseComputerScienceOCR,
  // A-Level Computer Science
  aLevelComputerScienceAQA,
  aLevelComputerScienceOCR,
];

/**
 * Get exam structure for a specific subject, board, and level
 */
export function getExamStructure(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): ExamStructure | undefined {
  return examStructures.find(
    (s) => s.subject === subject && s.examBoard === examBoard && s.level === level
  );
}

/**
 * Get all available paper configurations for a subject/board/level
 */
export function getAvailablePapers(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): PaperStructure[] {
  const structure = getExamStructure(subject, examBoard, level);
  return structure?.papers ?? [];
}

/**
 * Calculate suggested time based on marks (roughly 1 mark = 1 minute)
 */
export function calculateSuggestedTime(totalMarks: number): number {
  return Math.round(totalMarks * 1.1); // Add 10% buffer for reading
}

/**
 * Get mark distribution for different question types
 */
export function getMarkDistribution(
  totalMarks: number,
  difficulty: { easy: number; medium: number; hard: number }
): { easy: number; medium: number; hard: number } {
  return {
    easy: Math.round(totalMarks * (difficulty.easy / 100)),
    medium: Math.round(totalMarks * (difficulty.medium / 100)),
    hard: Math.round(totalMarks * (difficulty.hard / 100)),
  };
}

/**
 * Common question mark values by difficulty
 */
export const QUESTION_MARKS = {
  easy: [1, 2, 3],
  medium: [3, 4, 5, 6],
  hard: [6, 8, 10, 12],
  extendedResponse: [6, 8, 12, 15, 25],
} as const;

/**
 * Typical mark allocations for assessment objectives
 */
export const ASSESSMENT_OBJECTIVES = {
  AO1: { name: 'Knowledge and Understanding', typicalWeight: 30 },
  AO2: { name: 'Application', typicalWeight: 40 },
  AO3: { name: 'Analysis and Evaluation', typicalWeight: 30 },
} as const;
