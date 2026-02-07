import { Topic, ExamBoard, ExamBoardInfo, QualificationLevel, QualificationInfo, Subject, SubjectInfo } from '@/types';
import { edexcelTopics, getEdexcelTopicById } from './topics-edexcel';
import { ocrTopics, getOCRTopicById } from './topics-ocr';
import { aqaALevelTopics, getALevelAQATopicById } from './topics-alevel-aqa';
import { edexcelALevelTopics, getEdexcelALevelTopicById } from './topics-alevel-edexcel';
import { ocrALevelTopics, getOCRALevelTopicById } from './topics-alevel-ocr';
import { aqaPhysicsTopics, getAQAPhysicsTopicById } from './topics-physics-aqa';
import { edexcelPhysicsTopics, getEdexcelPhysicsTopicById } from './topics-physics-edexcel';
import { ocrPhysicsTopics, getOCRPhysicsTopicById } from './topics-physics-ocr';
import { aqaALevelPhysicsTopics, getAQAALevelPhysicsTopicById } from './topics-physics-alevel-aqa';
import { edexcelALevelPhysicsTopics, getEdexcelALevelPhysicsTopicById } from './topics-physics-alevel-edexcel';
import { ocrALevelPhysicsTopics, getOCRALevelPhysicsTopicById } from './topics-physics-alevel-ocr';
import { aqaChemistryTopics, getAQAChemistryTopicById } from './topics-chemistry-gcse-aqa';
import { edexcelChemistryTopics, getEdexcelChemistryTopicById } from './topics-chemistry-gcse-edexcel';
import { ocrChemistryTopics, getOCRChemistryTopicById } from './topics-chemistry-gcse-ocr';
import { aqaALevelChemistryTopics, getAQAALevelChemistryTopicById } from './topics-chemistry-alevel-aqa';
import { edexcelALevelChemistryTopics, getEdexcelALevelChemistryTopicById } from './topics-chemistry-alevel-edexcel';
import { ocrALevelChemistryTopics, getOCRALevelChemistryTopicById } from './topics-chemistry-alevel-ocr';

// GCSE Biology
import { aqaBiologyTopics, getAQABiologyTopicById } from './topics-biology-gcse-aqa';
import { edexcelBiologyTopics, getEdexcelBiologyTopicById } from './topics-biology-gcse-edexcel';
import { ocrBiologyTopics, getOCRBiologyTopicById } from './topics-biology-gcse-ocr';

// A-Level Biology
import { aqaALevelBiologyTopics, getAQAALevelBiologyTopicById } from './topics-biology-alevel-aqa';
import { edexcelALevelBiologyTopics, getEdexcelALevelBiologyTopicById } from './topics-biology-alevel-edexcel';
import { ocrALevelBiologyTopics, getOCRALevelBiologyTopicById } from './topics-biology-alevel-ocr';

// GCSE Computer Science
import { aqaComputerScienceTopics, getAQAComputerScienceTopicById } from './topics-computerscience-gcse-aqa';
import { ocrComputerScienceTopics, getOCRComputerScienceTopicById } from './topics-computerscience-gcse-ocr';
import { edexcelComputerScienceTopics, getEdexcelComputerScienceTopicById } from './topics-computerscience-gcse-edexcel';

// A-Level Computer Science (AQA and OCR only - Edexcel doesn't offer UK A-Level)
import { aqaALevelComputerScienceTopics, getAQAALevelComputerScienceTopicById } from './topics-computerscience-alevel-aqa';
import { ocrALevelComputerScienceTopics, getOCRALevelComputerScienceTopicById } from './topics-computerscience-alevel-ocr';

// GCSE Economics (AQA and OCR only - Edexcel doesn't offer GCSE Economics)
import { aqaEconomicsTopics, getAQAEconomicsTopicById } from './topics-economics-gcse-aqa';
import { ocrEconomicsTopics, getOCREconomicsTopicById } from './topics-economics-gcse-ocr';

// A-Level Economics (AQA, Edexcel, and OCR)
import { aqaALevelEconomicsTopics, getAQAALevelEconomicsTopicById } from './topics-economics-alevel-aqa';
import { edexcelALevelEconomicsTopics, getEdexcelALevelEconomicsTopicById } from './topics-economics-alevel-edexcel';
import { ocrALevelEconomicsTopics, getOCRALevelEconomicsTopicById } from './topics-economics-alevel-ocr';

// GCSE Business (AQA, Edexcel, and OCR)
import { aqaGCSEBusinessTopics, getAQAGCSEBusinessTopicById } from './topics-business-gcse-aqa';
import { edexcelGCSEBusinessTopics, getEdexcelGCSEBusinessTopicById } from './topics-business-gcse-edexcel';
import { ocrGCSEBusinessTopics, getOCRGCSEBusinessTopicById } from './topics-business-gcse-ocr';

// A-Level Business (AQA, Edexcel, and OCR)
import { aqaALevelBusinessTopics, getAQAALevelBusinessTopicById } from './topics-business-alevel-aqa';
import { edexcelALevelBusinessTopics, getEdexcelALevelBusinessTopicById } from './topics-business-alevel-edexcel';
import { ocrALevelBusinessTopics, getOCRALevelBusinessTopicById } from './topics-business-alevel-ocr';

// GCSE Psychology (AQA, Edexcel, and OCR)
import { aqaGCSEPsychologyTopics, getAQAGCSEPsychologyTopicById } from './topics-psychology-gcse-aqa';
import { edexcelGCSEPsychologyTopics, getEdexcelGCSEPsychologyTopicById } from './topics-psychology-gcse-edexcel';
import { ocrGCSEPsychologyTopics, getOCRGCSEPsychologyTopicById } from './topics-psychology-gcse-ocr';

// A-Level Psychology (AQA, Edexcel, and OCR)
import { aqaALevelPsychologyTopics, getAQAALevelPsychologyTopicById } from './topics-psychology-alevel-aqa';
import { edexcelALevelPsychologyTopics, getEdexcelALevelPsychologyTopicById } from './topics-psychology-alevel-edexcel';
import { ocrALevelPsychologyTopics, getOCRALevelPsychologyTopicById } from './topics-psychology-alevel-ocr';

// GCSE Geography (AQA, Edexcel, and OCR)
import { aqaGCSEGeographyTopics, getAQAGCSEGeographyTopicById } from './topics-geography-gcse-aqa';
import { edexcelGCSEGeographyTopics, getEdexcelGCSEGeographyTopicById } from './topics-geography-gcse-edexcel';
import { ocrGCSEGeographyTopics, getOCRGCSEGeographyTopicById } from './topics-geography-gcse-ocr';

// A-Level Geography (AQA, Edexcel, and OCR)
import { aqaALevelGeographyTopics, getAQAALevelGeographyTopicById } from './topics-geography-alevel-aqa';
import { edexcelALevelGeographyTopics, getEdexcelALevelGeographyTopicById } from './topics-geography-alevel-edexcel';
import { ocrALevelGeographyTopics, getOCRALevelGeographyTopicById } from './topics-geography-alevel-ocr';

// GCSE History (AQA, Edexcel, and OCR)
import { aqaGCSEHistoryTopics, getAQAGCSEHistoryTopicById } from './topics-history-gcse-aqa';
import { edexcelGCSEHistoryTopics, getEdexcelGCSEHistoryTopicById } from './topics-history-gcse-edexcel';
import { ocrGCSEHistoryTopics, getOCRGCSEHistoryTopicById } from './topics-history-gcse-ocr';

// A-Level History (AQA, Edexcel, and OCR)
import { aqaALevelHistoryTopics, getAQAALevelHistoryTopicById } from './topics-history-alevel-aqa';
import { edexcelALevelHistoryTopics, getEdexcelALevelHistoryTopicById } from './topics-history-alevel-edexcel';
import { ocrALevelHistoryTopics, getOCRALevelHistoryTopicById } from './topics-history-alevel-ocr';

// GCSE English Literature (AQA, Edexcel, and OCR)
import { aqaGCSEEnglishLiteratureTopics, getAQAGCSEEnglishLiteratureTopicById } from './topics-english-literature-gcse-aqa';
import { edexcelGCSEEnglishLiteratureTopics, getEdexcelGCSEEnglishLiteratureTopicById } from './topics-english-literature-gcse-edexcel';
import { ocrGCSEEnglishLiteratureTopics, getOCRGCSEEnglishLiteratureTopicById } from './topics-english-literature-gcse-ocr';

// A-Level English Literature (AQA, Edexcel, and OCR)
import { aqaALevelEnglishLiteratureTopics, getAQAALevelEnglishLiteratureTopicById } from './topics-english-literature-alevel-aqa';
import { edexcelALevelEnglishLiteratureTopics, getEdexcelALevelEnglishLiteratureTopicById } from './topics-english-literature-alevel-edexcel';
import { ocrALevelEnglishLiteratureTopics, getOCRALevelEnglishLiteratureTopicById } from './topics-english-literature-alevel-ocr';

// GCSE/Level 2 Further Mathematics (AQA and OCR only - Edexcel doesn't offer this)
import { aqaGCSEFurtherMathsTopics, getAQAGCSEFurtherMathsTopicById } from './topics-further-maths-gcse-aqa';
import { ocrGCSEFurtherMathsTopics, getOCRGCSEFurtherMathsTopicById } from './topics-further-maths-gcse-ocr';

// A-Level Further Mathematics (AQA, Edexcel, and OCR)
import { aqaALevelFurtherMathsTopics, getAQAALevelFurtherMathsTopicById } from './topics-further-maths-alevel-aqa';
import { edexcelALevelFurtherMathsTopics, getEdexcelALevelFurtherMathsTopicById } from './topics-further-maths-alevel-edexcel';
import { ocrALevelFurtherMathsTopics, getOCRALevelFurtherMathsTopicById } from './topics-further-maths-alevel-ocr';

// GCSE Combined Science (AQA, Edexcel, and OCR) - GCSE only, no A-Level equivalent
import { aqaCombinedScienceTopics, getAQACombinedScienceTopicById } from './topics-combined-science-gcse-aqa';
import { edexcelCombinedScienceTopics, getEdexcelCombinedScienceTopicById } from './topics-combined-science-gcse-edexcel';
import { ocrCombinedScienceTopics, getOCRCombinedScienceTopicById } from './topics-combined-science-gcse-ocr';

/**
 * Subject Definitions
 */
export const subjects: SubjectInfo[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    fullName: 'Mathematics',
    description: 'Number, algebra, geometry, statistics and probability',
    icon: '📐',
  },
  {
    id: 'physics',
    name: 'Physics',
    fullName: 'Physics',
    description: 'Energy, forces, waves, electricity, magnetism and space',
    icon: '⚡',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    fullName: 'Chemistry',
    description: 'Atoms, bonding, reactions, organic chemistry and analysis',
    icon: '🧪',
  },
  {
    id: 'biology',
    name: 'Biology',
    fullName: 'Biology',
    description: 'Cells, organisms, ecology, genetics and evolution',
    icon: '🧬',
  },
  {
    id: 'combined-science',
    name: 'Combined Science',
    fullName: 'Combined Science: Trilogy',
    description: 'Biology, chemistry and physics combined - worth two GCSEs',
    icon: '🔬',
  },
  {
    id: 'computer-science',
    name: 'Computer Science',
    fullName: 'Computer Science',
    description: 'Programming, algorithms, data structures, and computer systems',
    icon: '💻',
  },
  {
    id: 'economics',
    name: 'Economics',
    fullName: 'Economics',
    description: 'Microeconomics, macroeconomics, markets, and economic policy',
    icon: '📈',
  },
  {
    id: 'business',
    name: 'Business',
    fullName: 'Business Studies',
    description: 'Business operations, marketing, finance, and human resources',
    icon: '💼',
  },
  {
    id: 'psychology',
    name: 'Psychology',
    fullName: 'Psychology',
    description: 'Cognitive processes, social behaviour, biological psychology, and mental health',
    icon: '🧠',
  },
  {
    id: 'geography',
    name: 'Geography',
    fullName: 'Geography',
    description: 'Physical landscapes, human environments, climate, and fieldwork skills',
    icon: '🌍',
  },
  {
    id: 'history',
    name: 'History',
    fullName: 'History',
    description: 'British, European, and world history, source analysis, and historical interpretations',
    icon: '📜',
  },
  {
    id: 'english-literature',
    name: 'English Literature',
    fullName: 'English Literature',
    description: 'Poetry, prose, drama, literary analysis, and critical interpretation',
    icon: '📖',
  },
  {
    id: 'further-maths',
    name: 'Further Maths',
    fullName: 'Further Mathematics',
    description: 'Advanced mathematics including complex numbers, matrices, further calculus, and mechanics',
    icon: '∑',
  },
];

export function getSubjectInfo(id: Subject): SubjectInfo | undefined {
  return subjects.find((s) => s.id === id);
}

export function getAvailableSubjects(): SubjectInfo[] {
  // Return subjects that have at least one exam board with topics
  return subjects.filter((s) => {
    if (s.id === 'maths') return true; // Maths always available
    if (s.id === 'physics') return true; // Physics available
    if (s.id === 'chemistry') return true; // Chemistry available
    if (s.id === 'biology') return true; // Biology available
    if (s.id === 'combined-science') return true; // Combined Science available (GCSE only)
    if (s.id === 'computer-science') return true; // Computer Science available
    if (s.id === 'economics') return true; // Economics available
    if (s.id === 'business') return true; // Business available
    if (s.id === 'psychology') return true; // Psychology available
    if (s.id === 'geography') return true; // Geography available
    if (s.id === 'history') return true; // History available
    if (s.id === 'english-literature') return true; // English Literature available
    if (s.id === 'further-maths') return true; // Further Maths available
    return false;
  });
}

export function getSubjectsByLevel(level: QualificationLevel): SubjectInfo[] {
  // Return subjects available for the specified level
  return getAvailableSubjects().filter((subject) => {
    // For GCSE, all subjects are available except A-Level specific ones
    if (level === 'gcse') {
      return true; // All available subjects support GCSE
    }
    
    // For A-Level, check if subject has A-Level support
    if (level === 'a-level') {
      // Combined Science is GCSE only
      if (subject.id === 'combined-science') return false;
      return true; // All other subjects support A-Level
    }
    
    return true;
  });
}

/**
 * Qualification Level Definitions
 */
export const qualifications: QualificationInfo[] = [
  {
    id: 'gcse',
    name: 'GCSE',
    fullName: 'General Certificate of Secondary Education',
    description: 'Key Stage 4 qualification for students aged 14-16',
  },
  {
    id: 'a-level',
    name: 'A-Level',
    fullName: 'Advanced Level',
    description: 'Post-16 qualification for university preparation',
  },
];

export function getQualificationInfo(id: QualificationLevel): QualificationInfo | undefined {
  return qualifications.find((q) => q.id === id);
}

/**
 * Exam Board Definitions
 */
export const examBoards: ExamBoardInfo[] = [
  {
    id: 'aqa',
    name: 'AQA',
    fullName: 'Assessment and Qualifications Alliance',
    description: 'One of the largest UK exam boards, known for clear specification structure',
    specCode: '8300',
    qualifications: ['gcse', 'a-level'],
    subjects: ['maths', 'physics', 'chemistry', 'biology', 'combined-science', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'],
  },
  {
    id: 'edexcel',
    name: 'Edexcel',
    fullName: 'Pearson Edexcel',
    description: 'International exam board offering GCSEs and A-Levels worldwide',
    specCode: '1MA1',
    qualifications: ['gcse', 'a-level'],
    subjects: ['maths', 'physics', 'chemistry', 'biology', 'combined-science', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'], // Note: Edexcel only offers A-Level Economics and A-Level Further Maths (not GCSE)
  },
  {
    id: 'ocr',
    name: 'OCR',
    fullName: 'Oxford Cambridge and RSA',
    description: 'Emphasises understanding of principles and analytical reasoning',
    specCode: 'J560',
    qualifications: ['gcse', 'a-level'],
    subjects: ['maths', 'physics', 'chemistry', 'biology', 'combined-science', 'computer-science', 'economics', 'business', 'psychology', 'geography', 'history', 'english-literature', 'further-maths'],
  },
];

export function getExamBoardInfo(id: ExamBoard): ExamBoardInfo | undefined {
  return examBoards.find((board) => board.id === id);
}

export function getExamBoardsByLevel(level: QualificationLevel): ExamBoardInfo[] {
  return examBoards.filter((board) => board.qualifications.includes(level));
}

export function getExamBoardsBySubject(subject: Subject): ExamBoardInfo[] {
  return examBoards.filter((board) => board.subjects?.includes(subject) ?? subject === 'maths');
}

export function getExamBoardsBySubjectAndLevel(subject: Subject, level: QualificationLevel): ExamBoardInfo[] {
  return examBoards.filter(
    (board) =>
      board.qualifications.includes(level) &&
      (board.subjects?.includes(subject) ?? subject === 'maths')
  );
}

/**
 * AQA GCSE Mathematics 8300 Specification Topics
 *
 * Aligned to the official AQA specification content codes:
 * - Number (N1-N16)
 * - Algebra (A1-A25)
 * - Ratio, Proportion and Rates of Change (R1-R16)
 * - Geometry and Measures (G1-G25)
 * - Probability (P1-P9)
 * - Statistics (S1-S6)
 *
 * Each subtopic maps to specific specification content points.
 * (F) = Foundation only, (H) = Higher only, unmarked = both tiers
 */

export const aqaTopics: Topic[] = [
  {
    id: 'number',
    examBoard: 'aqa',
    name: 'Number',
    description: 'Structure, calculation, fractions, decimals, percentages, and numerical reasoning',
    icon: '🔢',
    color: 'bg-blue-500',
    subtopics: [
      // N1: Ordering and comparing
      'Ordering integers, decimals and fractions',
      'Using inequality symbols',
      'Ordering negative numbers',
      // N2: Four operations
      'Addition and subtraction',
      'Multiplication and division',
      'Operations with negative numbers',
      'Order of operations (BIDMAS)',
      // N3: Factors and primes
      'Factors and multiples',
      'Highest common factor (HCF)',
      'Lowest common multiple (LCM)',
      'Prime numbers',
      'Prime factorisation',
      'Product of prime factors',
      // N4: Powers and roots
      'Squares and square roots',
      'Cubes and cube roots',
      'Index notation',
      'Laws of indices',
      'Negative indices (H)',
      'Fractional indices (H)',
      // N5: Surds (H)
      'Simplifying surds (H)',
      'Rationalising denominators (H)',
      'Calculations with surds (H)',
      // N6: Estimation
      'Estimation and approximation',
      'Checking calculations',
      'Using inverse operations',
      // N7-N9: Fractions and decimals
      'Fractions',
      'Equivalent fractions',
      'Adding and subtracting fractions',
      'Multiplying and dividing fractions',
      'Mixed numbers and improper fractions',
      'Fractions of amounts',
      'Decimals',
      'Converting between fractions and decimals',
      'Recurring decimals (H)',
      // N10-N12: Percentages
      'Percentages',
      'Percentage of an amount',
      'Percentage increase and decrease',
      'Reverse percentages',
      'Percentage change',
      'Repeated percentage change',
      'Compound interest',
      'Simple interest',
      // N13-N14: Measures
      'Standard units of measure',
      'Converting units',
      'Time calculations',
      // N15-N16: Accuracy
      'Rounding to decimal places',
      'Rounding to significant figures',
      'Truncation',
      'Error intervals',
      'Upper and lower bounds (H)',
      // N8: Standard form
      'Standard form',
      'Converting to and from standard form',
      'Calculations in standard form',
    ],
  },
  {
    id: 'algebra',
    examBoard: 'aqa',
    name: 'Algebra',
    description: 'Expressions, equations, formulae, graphs, and algebraic reasoning',
    icon: '📐',
    color: 'bg-purple-500',
    subtopics: [
      // A1: Notation
      'Algebraic notation',
      'Using letters to represent unknowns',
      'Collecting like terms',
      // A2: Substitution
      'Substitution into expressions',
      'Substitution into formulae',
      // A3: Vocabulary
      'Expressions, equations and formulae',
      'Terms, factors and coefficients',
      'Identities',
      // A4: Manipulation
      'Simplifying expressions',
      'Expanding single brackets',
      'Expanding double brackets',
      'Expanding triple brackets (H)',
      'Factorising single brackets',
      'Factorising quadratics',
      'Factorising difference of two squares',
      'Completing the square (H)',
      'Algebraic fractions (H)',
      'Simplifying algebraic fractions (H)',
      'Adding and subtracting algebraic fractions (H)',
      // A5-A6: Formulae
      'Using formulae',
      'Deriving formulae',
      'Equations vs identities',
      // A7: Proof
      'Algebraic argument and proof (H)',
      // A8: Coordinates
      'Coordinates in four quadrants',
      'Midpoint of a line segment',
      // A9-A10: Straight line graphs
      'Plotting linear graphs',
      'Gradient of a line',
      'y-intercept',
      'Equation of a straight line (y = mx + c)',
      'Finding equations of lines',
      'Parallel lines',
      'Perpendicular lines (H)',
      // A11-A13: Other graphs
      'Quadratic graphs',
      'Cubic graphs',
      'Reciprocal graphs',
      'Exponential graphs (H)',
      'Trigonometric graphs (H)',
      'Recognising graph shapes',
      'Sketching graphs',
      'Graph transformations (H)',
      // A14-A15: Real-life graphs
      'Distance-time graphs',
      'Velocity-time graphs',
      'Real-life graphs interpretation',
      'Gradients as rates of change',
      'Area under a graph (H)',
      // A16-A18: Sequences
      'Term-to-term rules',
      'Position-to-term rules',
      'Nth term of linear sequences',
      'Nth term of quadratic sequences (H)',
      'Fibonacci-type sequences',
      'Geometric sequences (H)',
      'Recognising sequences',
      // A19: Linear equations
      'Solving one-step equations',
      'Solving two-step equations',
      'Solving equations with brackets',
      'Solving equations with unknowns on both sides',
      'Forming equations',
      // A20: Quadratic equations
      'Solving quadratics by factorising',
      'Solving quadratics using the formula (H)',
      'Solving quadratics by completing the square (H)',
      'Solving quadratics graphically',
      // A21: Simultaneous equations
      'Solving simultaneous equations graphically',
      'Solving simultaneous equations algebraically',
      'Solving linear and quadratic simultaneously (H)',
      // A22-A23: Inequalities
      'Solving linear inequalities',
      'Representing inequalities on a number line',
      'Solving quadratic inequalities (H)',
      'Representing inequalities graphically (H)',
      'Identifying regions',
      // A24: Rearranging
      'Changing the subject of a formula',
      'Rearranging formulae with subject appearing once',
      'Rearranging formulae with subject appearing twice (H)',
      // A25: Functions
      'Function notation (H)',
      'Composite functions (H)',
      'Inverse functions (H)',
      'Iteration (H)',
    ],
  },
  {
    id: 'geometry',
    examBoard: 'aqa',
    name: 'Geometry & Measures',
    description: 'Shapes, angles, constructions, transformations, and mensuration',
    icon: '📏',
    color: 'bg-green-500',
    subtopics: [
      // G1: Angle properties
      'Angles at a point',
      'Angles on a straight line',
      'Vertically opposite angles',
      // G2: Angles in polygons
      'Angles in triangles',
      'Angles in quadrilaterals',
      'Interior angles of polygons',
      'Exterior angles of polygons',
      'Angle sum of polygons',
      // G3: Properties of shapes
      'Properties of triangles',
      'Properties of quadrilaterals',
      'Properties of other polygons',
      'Symmetry',
      'Lines of symmetry',
      'Rotational symmetry',
      // G4-G5: Circles
      'Parts of a circle',
      'Circle theorems (H)',
      'Tangent and radius perpendicular (H)',
      'Angles in the same segment (H)',
      'Angle at centre theorem (H)',
      'Angles in a semicircle (H)',
      'Cyclic quadrilaterals (H)',
      'Alternate segment theorem (H)',
      'Arc length',
      'Sector area',
      'Segment area (H)',
      // G6: Applying angle facts
      'Angles in parallel lines',
      'Corresponding angles',
      'Alternate angles',
      'Co-interior angles',
      // G7-G8: Similarity and congruence
      'Congruent shapes',
      'Congruent triangles',
      'Similar shapes',
      'Scale factors',
      'Length, area and volume scale factors (H)',
      // G9: Circle theorems application (H)
      'Applying circle theorems (H)',
      // G10: Constructions and loci
      'Constructions with ruler and compass',
      'Perpendicular bisector',
      'Angle bisector',
      'Constructing triangles',
      'Constructing 60° and 90° angles',
      'Loci',
      'Loci problems',
      // G11-G14: Area and volume
      'Perimeter of shapes',
      'Area of rectangles',
      'Area of triangles',
      'Area of parallelograms',
      'Area of trapeziums',
      'Area of compound shapes',
      'Circumference of a circle',
      'Area of a circle',
      'Volume of cuboids',
      'Volume of prisms',
      'Volume of cylinders',
      'Volume of pyramids (H)',
      'Volume of cones (H)',
      'Volume of spheres (H)',
      'Volume of frustums (H)',
      'Surface area of 3D shapes',
      'Surface area of cylinders',
      'Surface area of cones (H)',
      'Surface area of spheres (H)',
      // G15-G21: Pythagoras and trigonometry
      'Pythagoras theorem',
      'Pythagoras in 2D',
      'Pythagoras in 3D (H)',
      'Trigonometric ratios (SOHCAHTOA)',
      'Finding sides using trigonometry',
      'Finding angles using trigonometry',
      'Exact trigonometric values (H)',
      'Sine rule (H)',
      'Cosine rule (H)',
      'Area of triangle using sine (H)',
      'Trigonometry in 3D (H)',
      // G22: Bearings
      'Three-figure bearings',
      'Bearings calculations',
      // G23: Transformations
      'Translations',
      'Reflections',
      'Rotations',
      'Enlargements',
      'Negative scale factors (H)',
      'Fractional scale factors',
      'Describing transformations',
      'Combined transformations (H)',
      // G24-G25: Vectors
      'Column vectors',
      'Vector notation',
      'Adding and subtracting vectors',
      'Multiplying vectors by scalars',
      'Geometric proofs using vectors (H)',
      'Position vectors (H)',
    ],
  },
  {
    id: 'statistics',
    examBoard: 'aqa',
    name: 'Statistics',
    description: 'Data collection, representation, analysis, and interpretation',
    icon: '📊',
    color: 'bg-orange-500',
    subtopics: [
      // S1: Data types and sampling
      'Types of data',
      'Primary and secondary data',
      'Discrete and continuous data',
      'Sampling methods',
      'Random sampling',
      'Stratified sampling (H)',
      'Bias in sampling',
      // S2: Representing data
      'Pictograms',
      'Bar charts',
      'Dual bar charts',
      'Pie charts',
      'Line graphs',
      'Frequency tables',
      'Grouped frequency tables',
      'Two-way tables',
      'Stem and leaf diagrams',
      'Frequency polygons',
      'Cumulative frequency diagrams',
      'Box plots',
      'Histograms (H)',
      'Frequency density (H)',
      // S3-S4: Interpreting data
      'Interpreting charts and graphs',
      'Comparing distributions',
      'Mean',
      'Median',
      'Mode',
      'Modal class',
      'Range',
      'Quartiles',
      'Interquartile range',
      'Mean from frequency tables',
      'Estimated mean from grouped data',
      'Comparing data using averages',
      'Outliers',
      // S5: Population
      'Using statistics to describe populations',
      'Making inferences from samples',
      // S6: Scatter graphs
      'Scatter graphs',
      'Correlation',
      'Positive and negative correlation',
      'Lines of best fit',
      'Using lines of best fit',
      'Interpolation and extrapolation',
    ],
  },
  {
    id: 'probability',
    examBoard: 'aqa',
    name: 'Probability',
    description: 'Theoretical and experimental probability, combined events',
    icon: '🎲',
    color: 'bg-red-500',
    subtopics: [
      // P1: Recording outcomes
      'Frequency and relative frequency',
      'Frequency tables for probability',
      'Frequency trees',
      // P2: Single event probability
      'Probability scale',
      'Probability of single events',
      'Calculating simple probability',
      'Probability as fractions, decimals, percentages',
      // P3: Mutually exclusive events
      'Mutually exclusive events',
      'Sum of probabilities equals 1',
      'Probability of event not happening',
      // P4: Expected outcomes
      'Expected frequency',
      'Comparing expected and actual results',
      // P5: Probability from tables
      'Probability from frequency tables',
      'Relative frequency',
      'Estimating probability from experiments',
      // P6: Listing outcomes
      'Sample spaces',
      'Listing all outcomes systematically',
      'Two-way tables for probability',
      // P7: Tree diagrams
      'Tree diagrams',
      'Independent events',
      'Dependent events',
      'With and without replacement',
      // P8: Combined events
      'Combined probability',
      'AND rule (multiplication)',
      'OR rule (addition)',
      // P9: Conditional probability (H)
      'Conditional probability (H)',
      'Venn diagrams for probability',
      'Set notation for probability (H)',
      'Calculating conditional probability (H)',
    ],
  },
  {
    id: 'ratio',
    examBoard: 'aqa',
    name: 'Ratio, Proportion & Rates of Change',
    description: 'Ratio, proportion, percentages as change, and rates',
    icon: '⚖️',
    color: 'bg-teal-500',
    subtopics: [
      // R1: Unit conversions
      'Converting metric units',
      'Converting units of time',
      'Converting units of area',
      'Converting units of volume',
      'Converting compound units',
      // R2: Scale
      'Scale factors',
      'Scale drawings',
      'Maps and scales',
      'Reading scales',
      // R3-R8: Ratio
      'Writing ratios',
      'Simplifying ratios',
      'Equivalent ratios',
      'Ratios and fractions',
      'Dividing in a ratio',
      'Sharing in a ratio given total',
      'Sharing in a ratio given difference',
      'Ratio problems',
      '1:n form of ratio',
      // R9: Percentages
      'Percentages and decimals',
      'Percentages and fractions',
      'Finding percentages',
      'Percentage increase',
      'Percentage decrease',
      'Reverse percentage problems',
      'Repeated percentage change',
      'Compound interest',
      'Depreciation',
      // R10: Direct and inverse proportion
      'Direct proportion',
      'Inverse proportion',
      'Recognising proportional relationships',
      'Direct proportion equations (H)',
      'Inverse proportion equations (H)',
      'Graphs of proportional relationships (H)',
      // R11: Compound units
      'Speed',
      'Distance, speed, time calculations',
      'Density',
      'Mass, density, volume calculations',
      'Pressure (H)',
      'Unit pricing',
      'Best buy problems',
      // R12: Similar shapes and ratio
      'Length ratios in similar shapes',
      'Area ratios in similar shapes (H)',
      'Volume ratios in similar shapes (H)',
      // R13-R15: Rates of change (H)
      'Rate of change',
      'Gradient as rate of change (H)',
      'Interpreting gradient in context (H)',
      'Instantaneous rate of change (H)',
      // R16: Growth and decay
      'Growth and decay problems',
      'Exponential growth',
      'Exponential decay',
      'Iterative processes (H)',
    ],
  },
];

// Legacy export for backwards compatibility (defaults to AQA)
export const topics = aqaTopics;

/**
 * Get all topics for a specific exam board (GCSE only - legacy)
 */
export function getTopicsByExamBoard(examBoard: ExamBoard): Topic[] {
  switch (examBoard) {
    case 'aqa':
      return aqaTopics;
    case 'edexcel':
      return edexcelTopics;
    case 'ocr':
      return ocrTopics;
    default:
      return aqaTopics;
  }
}

/**
 * Get all topics for a specific exam board and qualification level
 * (Defaults to maths for backwards compatibility)
 */
export function getTopicsByExamBoardAndLevel(
  examBoard: ExamBoard,
  level: QualificationLevel
): Topic[] {
  // Default to maths for backwards compatibility
  return getTopicsBySubjectBoardAndLevel('maths', examBoard, level);
}

/**
 * Get all topics for a specific subject, exam board, and qualification level
 */
export function getTopicsBySubjectBoardAndLevel(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): Topic[] {
  // Handle Physics
  if (subject === 'physics') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaPhysicsTopics;
        case 'edexcel':
          return edexcelPhysicsTopics;
        case 'ocr':
          return ocrPhysicsTopics;
        default:
          return [];
      }
    }
    // A-Level Physics
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelPhysicsTopics;
        case 'edexcel':
          return edexcelALevelPhysicsTopics;
        case 'ocr':
          return ocrALevelPhysicsTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Chemistry
  if (subject === 'chemistry') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaChemistryTopics;
        case 'edexcel':
          return edexcelChemistryTopics;
        case 'ocr':
          return ocrChemistryTopics;
        default:
          return [];
      }
    }
    // A-Level Chemistry
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelChemistryTopics;
        case 'edexcel':
          return edexcelALevelChemistryTopics;
        case 'ocr':
          return ocrALevelChemistryTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Biology
  if (subject === 'biology') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaBiologyTopics;
        case 'edexcel':
          return edexcelBiologyTopics;
        case 'ocr':
          return ocrBiologyTopics;
        default:
          return [];
      }
    }
    // A-Level Biology
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelBiologyTopics;
        case 'edexcel':
          return edexcelALevelBiologyTopics;
        case 'ocr':
          return ocrALevelBiologyTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Combined Science (GCSE only - no A-Level equivalent)
  if (subject === 'combined-science') {
    // Combined Science is GCSE only
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaCombinedScienceTopics;
        case 'edexcel':
          return edexcelCombinedScienceTopics;
        case 'ocr':
          return ocrCombinedScienceTopics;
        default:
          return [];
      }
    }
    // No A-Level Combined Science - students take separate sciences
    return [];
  }

  // Handle Computer Science
  if (subject === 'computer-science') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaComputerScienceTopics;
        case 'edexcel':
          return edexcelComputerScienceTopics;
        case 'ocr':
          return ocrComputerScienceTopics;
        default:
          return [];
      }
    }
    // A-Level Computer Science (Note: Edexcel doesn't offer UK A-Level Computer Science)
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelComputerScienceTopics;
        case 'ocr':
          return ocrALevelComputerScienceTopics;
        case 'edexcel':
          return []; // Edexcel doesn't offer UK A-Level Computer Science
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Economics
  if (subject === 'economics') {
    // GCSE Economics (Note: Edexcel doesn't offer GCSE Economics)
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaEconomicsTopics;
        case 'ocr':
          return ocrEconomicsTopics;
        case 'edexcel':
          return []; // Edexcel doesn't offer GCSE Economics
        default:
          return [];
      }
    }
    // A-Level Economics (all three boards offer it)
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelEconomicsTopics;
        case 'edexcel':
          return edexcelALevelEconomicsTopics;
        case 'ocr':
          return ocrALevelEconomicsTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Business (all three boards offer GCSE and A-Level)
  if (subject === 'business') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEBusinessTopics;
        case 'edexcel':
          return edexcelGCSEBusinessTopics;
        case 'ocr':
          return ocrGCSEBusinessTopics;
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelBusinessTopics;
        case 'edexcel':
          return edexcelALevelBusinessTopics;
        case 'ocr':
          return ocrALevelBusinessTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Psychology (all three boards offer GCSE and A-Level)
  if (subject === 'psychology') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEPsychologyTopics;
        case 'edexcel':
          return edexcelGCSEPsychologyTopics;
        case 'ocr':
          return ocrGCSEPsychologyTopics;
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelPsychologyTopics;
        case 'edexcel':
          return edexcelALevelPsychologyTopics;
        case 'ocr':
          return ocrALevelPsychologyTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Geography (all three boards offer GCSE and A-Level)
  if (subject === 'geography') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEGeographyTopics;
        case 'edexcel':
          return edexcelGCSEGeographyTopics;
        case 'ocr':
          return ocrGCSEGeographyTopics;
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelGeographyTopics;
        case 'edexcel':
          return edexcelALevelGeographyTopics;
        case 'ocr':
          return ocrALevelGeographyTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle History (all three boards offer GCSE and A-Level)
  if (subject === 'history') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEHistoryTopics;
        case 'edexcel':
          return edexcelGCSEHistoryTopics;
        case 'ocr':
          return ocrGCSEHistoryTopics;
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelHistoryTopics;
        case 'edexcel':
          return edexcelALevelHistoryTopics;
        case 'ocr':
          return ocrALevelHistoryTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle English Literature (all three boards offer GCSE and A-Level)
  if (subject === 'english-literature') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEEnglishLiteratureTopics;
        case 'edexcel':
          return edexcelGCSEEnglishLiteratureTopics;
        case 'ocr':
          return ocrGCSEEnglishLiteratureTopics;
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelEnglishLiteratureTopics;
        case 'edexcel':
          return edexcelALevelEnglishLiteratureTopics;
        case 'ocr':
          return ocrALevelEnglishLiteratureTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Further Maths (AQA and OCR offer GCSE; all three offer A-Level)
  if (subject === 'further-maths') {
    if (level === 'gcse') {
      switch (examBoard) {
        case 'aqa':
          return aqaGCSEFurtherMathsTopics;
        case 'ocr':
          return ocrGCSEFurtherMathsTopics;
        case 'edexcel':
          return []; // Edexcel doesn't offer GCSE Further Maths
        default:
          return [];
      }
    }
    if (level === 'a-level') {
      switch (examBoard) {
        case 'aqa':
          return aqaALevelFurtherMathsTopics;
        case 'edexcel':
          return edexcelALevelFurtherMathsTopics;
        case 'ocr':
          return ocrALevelFurtherMathsTopics;
        default:
          return [];
      }
    }
    return [];
  }

  // Handle Maths (default)
  if (level === 'a-level') {
    switch (examBoard) {
      case 'aqa':
        return aqaALevelTopics;
      case 'edexcel':
        return edexcelALevelTopics;
      case 'ocr':
        return ocrALevelTopics;
      default:
        return [];
    }
  }

  // GCSE Maths topics
  return getTopicsByExamBoard(examBoard);
}

/**
 * Get a topic by ID (searches all exam boards, levels, and subjects)
 */
export function getTopicById(id: string): Topic | undefined {
  // First check AQA GCSE Maths topics
  const aqaTopic = aqaTopics.find((topic) => topic.id === id);
  if (aqaTopic) return aqaTopic;

  // Check Edexcel GCSE Maths topics
  const edexcelTopic = getEdexcelTopicById(id);
  if (edexcelTopic) return edexcelTopic;

  // Check OCR GCSE Maths topics
  const ocrTopic = getOCRTopicById(id);
  if (ocrTopic) return ocrTopic;

  // Check A-Level AQA Maths topics
  const aLevelAqaTopic = getALevelAQATopicById(id);
  if (aLevelAqaTopic) return aLevelAqaTopic;

  // Check A-Level Edexcel Maths topics
  const aLevelEdexcelTopic = getEdexcelALevelTopicById(id);
  if (aLevelEdexcelTopic) return aLevelEdexcelTopic;

  // Check A-Level OCR Maths topics
  const aLevelOcrTopic = getOCRALevelTopicById(id);
  if (aLevelOcrTopic) return aLevelOcrTopic;

  // Check AQA GCSE Physics topics
  const aqaPhysicsTopic = getAQAPhysicsTopicById(id);
  if (aqaPhysicsTopic) return aqaPhysicsTopic;

  // Check Edexcel GCSE Physics topics
  const edexcelPhysicsTopic = getEdexcelPhysicsTopicById(id);
  if (edexcelPhysicsTopic) return edexcelPhysicsTopic;

  // Check OCR GCSE Physics topics
  const ocrPhysicsTopic = getOCRPhysicsTopicById(id);
  if (ocrPhysicsTopic) return ocrPhysicsTopic;

  // Check AQA A-Level Physics topics
  const aqaALevelPhysicsTopic = getAQAALevelPhysicsTopicById(id);
  if (aqaALevelPhysicsTopic) return aqaALevelPhysicsTopic;

  // Check Edexcel A-Level Physics topics
  const edexcelALevelPhysicsTopic = getEdexcelALevelPhysicsTopicById(id);
  if (edexcelALevelPhysicsTopic) return edexcelALevelPhysicsTopic;

  // Check OCR A-Level Physics topics
  const ocrALevelPhysicsTopic = getOCRALevelPhysicsTopicById(id);
  if (ocrALevelPhysicsTopic) return ocrALevelPhysicsTopic;

  // Check AQA GCSE Chemistry topics
  const aqaChemistryTopic = getAQAChemistryTopicById(id);
  if (aqaChemistryTopic) return aqaChemistryTopic;

  // Check Edexcel GCSE Chemistry topics
  const edexcelChemistryTopic = getEdexcelChemistryTopicById(id);
  if (edexcelChemistryTopic) return edexcelChemistryTopic;

  // Check OCR GCSE Chemistry topics
  const ocrChemistryTopic = getOCRChemistryTopicById(id);
  if (ocrChemistryTopic) return ocrChemistryTopic;

  // Check AQA A-Level Chemistry topics
  const aqaALevelChemistryTopic = getAQAALevelChemistryTopicById(id);
  if (aqaALevelChemistryTopic) return aqaALevelChemistryTopic;

  // Check Edexcel A-Level Chemistry topics
  const edexcelALevelChemistryTopic = getEdexcelALevelChemistryTopicById(id);
  if (edexcelALevelChemistryTopic) return edexcelALevelChemistryTopic;

  // Check OCR A-Level Chemistry topics
  const ocrALevelChemistryTopic = getOCRALevelChemistryTopicById(id);
  if (ocrALevelChemistryTopic) return ocrALevelChemistryTopic;

  // Check AQA GCSE Biology topics
  const aqaBiologyTopic = getAQABiologyTopicById(id);
  if (aqaBiologyTopic) return aqaBiologyTopic;

  // Check Edexcel GCSE Biology topics
  const edexcelBiologyTopic = getEdexcelBiologyTopicById(id);
  if (edexcelBiologyTopic) return edexcelBiologyTopic;

  // Check OCR GCSE Biology topics
  const ocrBiologyTopic = getOCRBiologyTopicById(id);
  if (ocrBiologyTopic) return ocrBiologyTopic;

  // Check AQA A-Level Biology topics
  const aqaALevelBiologyTopic = getAQAALevelBiologyTopicById(id);
  if (aqaALevelBiologyTopic) return aqaALevelBiologyTopic;

  // Check Edexcel A-Level Biology topics
  const edexcelALevelBiologyTopic = getEdexcelALevelBiologyTopicById(id);
  if (edexcelALevelBiologyTopic) return edexcelALevelBiologyTopic;

  // Check OCR A-Level Biology topics
  const ocrALevelBiologyTopic = getOCRALevelBiologyTopicById(id);
  if (ocrALevelBiologyTopic) return ocrALevelBiologyTopic;

  // Check AQA GCSE Combined Science topics
  const aqaCombinedScienceTopic = getAQACombinedScienceTopicById(id);
  if (aqaCombinedScienceTopic) return aqaCombinedScienceTopic;

  // Check Edexcel GCSE Combined Science topics
  const edexcelCombinedScienceTopic = getEdexcelCombinedScienceTopicById(id);
  if (edexcelCombinedScienceTopic) return edexcelCombinedScienceTopic;

  // Check OCR GCSE Combined Science topics
  const ocrCombinedScienceTopic = getOCRCombinedScienceTopicById(id);
  if (ocrCombinedScienceTopic) return ocrCombinedScienceTopic;

  // Check AQA GCSE Computer Science topics
  const aqaComputerScienceTopic = getAQAComputerScienceTopicById(id);
  if (aqaComputerScienceTopic) return aqaComputerScienceTopic;

  // Check Edexcel GCSE Computer Science topics
  const edexcelComputerScienceTopic = getEdexcelComputerScienceTopicById(id);
  if (edexcelComputerScienceTopic) return edexcelComputerScienceTopic;

  // Check OCR GCSE Computer Science topics
  const ocrComputerScienceTopic = getOCRComputerScienceTopicById(id);
  if (ocrComputerScienceTopic) return ocrComputerScienceTopic;

  // Check AQA A-Level Computer Science topics
  const aqaALevelComputerScienceTopic = getAQAALevelComputerScienceTopicById(id);
  if (aqaALevelComputerScienceTopic) return aqaALevelComputerScienceTopic;

  // Check OCR A-Level Computer Science topics
  const ocrALevelComputerScienceTopic = getOCRALevelComputerScienceTopicById(id);
  if (ocrALevelComputerScienceTopic) return ocrALevelComputerScienceTopic;

  // Check AQA GCSE Economics topics
  const aqaGCSEEconomicsTopic = getAQAEconomicsTopicById(id);
  if (aqaGCSEEconomicsTopic) return aqaGCSEEconomicsTopic;

  // Check OCR GCSE Economics topics
  const ocrGCSEEconomicsTopic = getOCREconomicsTopicById(id);
  if (ocrGCSEEconomicsTopic) return ocrGCSEEconomicsTopic;

  // Check AQA A-Level Economics topics
  const aqaALevelEconomicsTopic = getAQAALevelEconomicsTopicById(id);
  if (aqaALevelEconomicsTopic) return aqaALevelEconomicsTopic;

  // Check Edexcel A-Level Economics topics
  const edexcelALevelEconomicsTopic = getEdexcelALevelEconomicsTopicById(id);
  if (edexcelALevelEconomicsTopic) return edexcelALevelEconomicsTopic;

  // Check OCR A-Level Economics topics
  const ocrALevelEconomicsTopic = getOCRALevelEconomicsTopicById(id);
  if (ocrALevelEconomicsTopic) return ocrALevelEconomicsTopic;

  // Check AQA GCSE Business topics
  const aqaGCSEBusinessTopic = getAQAGCSEBusinessTopicById(id);
  if (aqaGCSEBusinessTopic) return aqaGCSEBusinessTopic;

  // Check Edexcel GCSE Business topics
  const edexcelGCSEBusinessTopic = getEdexcelGCSEBusinessTopicById(id);
  if (edexcelGCSEBusinessTopic) return edexcelGCSEBusinessTopic;

  // Check OCR GCSE Business topics
  const ocrGCSEBusinessTopic = getOCRGCSEBusinessTopicById(id);
  if (ocrGCSEBusinessTopic) return ocrGCSEBusinessTopic;

  // Check AQA A-Level Business topics
  const aqaALevelBusinessTopic = getAQAALevelBusinessTopicById(id);
  if (aqaALevelBusinessTopic) return aqaALevelBusinessTopic;

  // Check Edexcel A-Level Business topics
  const edexcelALevelBusinessTopic = getEdexcelALevelBusinessTopicById(id);
  if (edexcelALevelBusinessTopic) return edexcelALevelBusinessTopic;

  // Check OCR A-Level Business topics
  const ocrALevelBusinessTopic = getOCRALevelBusinessTopicById(id);
  if (ocrALevelBusinessTopic) return ocrALevelBusinessTopic;

  // Check AQA GCSE Psychology topics
  const aqaGCSEPsychologyTopic = getAQAGCSEPsychologyTopicById(id);
  if (aqaGCSEPsychologyTopic) return aqaGCSEPsychologyTopic;

  // Check Edexcel GCSE Psychology topics
  const edexcelGCSEPsychologyTopic = getEdexcelGCSEPsychologyTopicById(id);
  if (edexcelGCSEPsychologyTopic) return edexcelGCSEPsychologyTopic;

  // Check OCR GCSE Psychology topics
  const ocrGCSEPsychologyTopic = getOCRGCSEPsychologyTopicById(id);
  if (ocrGCSEPsychologyTopic) return ocrGCSEPsychologyTopic;

  // Check AQA A-Level Psychology topics
  const aqaALevelPsychologyTopic = getAQAALevelPsychologyTopicById(id);
  if (aqaALevelPsychologyTopic) return aqaALevelPsychologyTopic;

  // Check Edexcel A-Level Psychology topics
  const edexcelALevelPsychologyTopic = getEdexcelALevelPsychologyTopicById(id);
  if (edexcelALevelPsychologyTopic) return edexcelALevelPsychologyTopic;

  // Check OCR A-Level Psychology topics
  const ocrALevelPsychologyTopic = getOCRALevelPsychologyTopicById(id);
  if (ocrALevelPsychologyTopic) return ocrALevelPsychologyTopic;

  // Check AQA GCSE Geography topics
  const aqaGCSEGeographyTopic = getAQAGCSEGeographyTopicById(id);
  if (aqaGCSEGeographyTopic) return aqaGCSEGeographyTopic;

  // Check Edexcel GCSE Geography topics
  const edexcelGCSEGeographyTopic = getEdexcelGCSEGeographyTopicById(id);
  if (edexcelGCSEGeographyTopic) return edexcelGCSEGeographyTopic;

  // Check OCR GCSE Geography topics
  const ocrGCSEGeographyTopic = getOCRGCSEGeographyTopicById(id);
  if (ocrGCSEGeographyTopic) return ocrGCSEGeographyTopic;

  // Check AQA A-Level Geography topics
  const aqaALevelGeographyTopic = getAQAALevelGeographyTopicById(id);
  if (aqaALevelGeographyTopic) return aqaALevelGeographyTopic;

  // Check Edexcel A-Level Geography topics
  const edexcelALevelGeographyTopic = getEdexcelALevelGeographyTopicById(id);
  if (edexcelALevelGeographyTopic) return edexcelALevelGeographyTopic;

  // Check OCR A-Level Geography topics
  const ocrALevelGeographyTopic = getOCRALevelGeographyTopicById(id);
  if (ocrALevelGeographyTopic) return ocrALevelGeographyTopic;

  // Check AQA GCSE History topics
  const aqaGCSEHistoryTopic = getAQAGCSEHistoryTopicById(id);
  if (aqaGCSEHistoryTopic) return aqaGCSEHistoryTopic;

  // Check Edexcel GCSE History topics
  const edexcelGCSEHistoryTopic = getEdexcelGCSEHistoryTopicById(id);
  if (edexcelGCSEHistoryTopic) return edexcelGCSEHistoryTopic;

  // Check OCR GCSE History topics
  const ocrGCSEHistoryTopic = getOCRGCSEHistoryTopicById(id);
  if (ocrGCSEHistoryTopic) return ocrGCSEHistoryTopic;

  // Check AQA A-Level History topics
  const aqaALevelHistoryTopic = getAQAALevelHistoryTopicById(id);
  if (aqaALevelHistoryTopic) return aqaALevelHistoryTopic;

  // Check Edexcel A-Level History topics
  const edexcelALevelHistoryTopic = getEdexcelALevelHistoryTopicById(id);
  if (edexcelALevelHistoryTopic) return edexcelALevelHistoryTopic;

  // Check OCR A-Level History topics
  const ocrALevelHistoryTopic = getOCRALevelHistoryTopicById(id);
  if (ocrALevelHistoryTopic) return ocrALevelHistoryTopic;

  // Check AQA GCSE English Literature topics
  const aqaGCSEEnglishLiteratureTopic = getAQAGCSEEnglishLiteratureTopicById(id);
  if (aqaGCSEEnglishLiteratureTopic) return aqaGCSEEnglishLiteratureTopic;

  // Check Edexcel GCSE English Literature topics
  const edexcelGCSEEnglishLiteratureTopic = getEdexcelGCSEEnglishLiteratureTopicById(id);
  if (edexcelGCSEEnglishLiteratureTopic) return edexcelGCSEEnglishLiteratureTopic;

  // Check OCR GCSE English Literature topics
  const ocrGCSEEnglishLiteratureTopic = getOCRGCSEEnglishLiteratureTopicById(id);
  if (ocrGCSEEnglishLiteratureTopic) return ocrGCSEEnglishLiteratureTopic;

  // Check AQA A-Level English Literature topics
  const aqaALevelEnglishLiteratureTopic = getAQAALevelEnglishLiteratureTopicById(id);
  if (aqaALevelEnglishLiteratureTopic) return aqaALevelEnglishLiteratureTopic;

  // Check Edexcel A-Level English Literature topics
  const edexcelALevelEnglishLiteratureTopic = getEdexcelALevelEnglishLiteratureTopicById(id);
  if (edexcelALevelEnglishLiteratureTopic) return edexcelALevelEnglishLiteratureTopic;

  // Check OCR A-Level English Literature topics
  const ocrALevelEnglishLiteratureTopic = getOCRALevelEnglishLiteratureTopicById(id);
  if (ocrALevelEnglishLiteratureTopic) return ocrALevelEnglishLiteratureTopic;

  // Check AQA GCSE Further Maths topics
  const aqaGCSEFurtherMathsTopic = getAQAGCSEFurtherMathsTopicById(id);
  if (aqaGCSEFurtherMathsTopic) return aqaGCSEFurtherMathsTopic;

  // Check OCR GCSE Further Maths topics
  const ocrGCSEFurtherMathsTopic = getOCRGCSEFurtherMathsTopicById(id);
  if (ocrGCSEFurtherMathsTopic) return ocrGCSEFurtherMathsTopic;

  // Check AQA A-Level Further Maths topics
  const aqaALevelFurtherMathsTopic = getAQAALevelFurtherMathsTopicById(id);
  if (aqaALevelFurtherMathsTopic) return aqaALevelFurtherMathsTopic;

  // Check Edexcel A-Level Further Maths topics
  const edexcelALevelFurtherMathsTopic = getEdexcelALevelFurtherMathsTopicById(id);
  if (edexcelALevelFurtherMathsTopic) return edexcelALevelFurtherMathsTopic;

  // Check OCR A-Level Further Maths topics
  const ocrALevelFurtherMathsTopic = getOCRALevelFurtherMathsTopicById(id);
  if (ocrALevelFurtherMathsTopic) return ocrALevelFurtherMathsTopic;

  return undefined;
}

/**
 * Get a topic by ID for a specific exam board (GCSE only - legacy)
 */
export function getTopicByIdAndBoard(id: string, examBoard: ExamBoard): Topic | undefined {
  const topics = getTopicsByExamBoard(examBoard);
  return topics.find((topic) => topic.id === id);
}

/**
 * Get a topic by ID for a specific exam board and level
 * @deprecated Use getTopicByIdSubjectBoardAndLevel instead for multi-subject support
 */
export function getTopicByIdBoardAndLevel(
  id: string,
  examBoard: ExamBoard,
  level: QualificationLevel
): Topic | undefined {
  const topics = getTopicsByExamBoardAndLevel(examBoard, level);
  return topics.find((topic) => topic.id === id);
}

/**
 * Get a topic by ID for a specific subject, exam board, and level
 */
export function getTopicByIdSubjectBoardAndLevel(
  id: string,
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel
): Topic | undefined {
  const topics = getTopicsBySubjectBoardAndLevel(subject, examBoard, level);
  return topics.find((topic) => topic.id === id);
}
