import { Topic } from '@/types';

/**
 * AQA Level 2 Certificate in Further Mathematics (8365) Topics
 *
 * Single paper examination:
 * - Paper 1: Non-calculator (1hr, 40 marks)
 * - Paper 2: Calculator (1hr 30min, 60 marks)
 *
 * Total: 100 marks
 *
 * This qualification bridges the gap between GCSE and A-Level Mathematics,
 * introducing students to concepts that prepare them for further study.
 *
 * Prerequisite: GCSE Mathematics (Higher tier recommended)
 */

export const aqaGCSEFurtherMathsTopics: Topic[] = [
  // ============================================
  // NUMBER
  // ============================================

  {
    id: 'fm-gcse-aqa-number-operations',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Number Operations and Concepts',
    description: 'Advanced number work including manipulation of surds and indices',
    icon: '🔢',
    color: 'bg-indigo-600',
    subtopics: [
      // Surds
      'Simplifying surds',
      'Addition and subtraction of surds',
      'Multiplication of surds',
      'Rationalising denominators',
      'Rationalising with conjugates',
      // Indices
      'Laws of indices (positive)',
      'Laws of indices (negative and fractional)',
      'Solving equations involving indices',
      'Expressing in index form',
      // Number systems
      'Rational and irrational numbers',
      'Properties of irrational numbers',
    ],
  },

  // ============================================
  // ALGEBRA
  // ============================================

  {
    id: 'fm-gcse-aqa-algebra-manipulation',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Algebraic Manipulation',
    description: 'Advanced algebraic techniques beyond GCSE',
    icon: '📐',
    color: 'bg-purple-600',
    subtopics: [
      // Factor theorem
      'Factor theorem',
      'Finding factors of polynomials',
      'Showing (x - a) is a factor',
      // Polynomial division
      'Algebraic division',
      'Dividing polynomials',
      'Finding quotient and remainder',
      // Identities
      'Algebraic identities',
      'Proving identities',
      // Simplification
      'Simplifying algebraic fractions',
      'Adding and subtracting algebraic fractions',
      'Multiplying and dividing algebraic fractions',
    ],
  },

  {
    id: 'fm-gcse-aqa-equations',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Equations and Inequalities',
    description: 'Solving various types of equations and inequalities',
    icon: '=',
    color: 'bg-blue-600',
    subtopics: [
      // Simultaneous equations
      'Simultaneous equations (linear and quadratic)',
      'Solving by substitution',
      'Geometric interpretation',
      // Quadratic equations
      'Solving quadratics by factorisation',
      'Completing the square',
      'Quadratic formula',
      'Discriminant and nature of roots',
      // Inequalities
      'Quadratic inequalities',
      'Representing solutions on number line',
      'Set notation for solutions',
      // Other equations
      'Equations with algebraic fractions',
      'Solving equations involving surds',
    ],
  },

  {
    id: 'fm-gcse-aqa-functions',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Functions',
    description: 'Understanding and working with functions',
    icon: '📈',
    color: 'bg-cyan-600',
    subtopics: [
      // Function basics
      'Function notation',
      'Domain and range',
      'Evaluating functions',
      // Composite functions
      'Composite functions fg(x)',
      'Order of composition',
      'Finding composite functions',
      // Inverse functions
      'Inverse functions',
      'Finding inverses algebraically',
      'Graphs of inverse functions',
      'Domain and range of inverses',
      // Function properties
      'One-to-one functions',
      'Many-to-one functions',
    ],
  },

  // ============================================
  // COORDINATE GEOMETRY
  // ============================================

  {
    id: 'fm-gcse-aqa-coordinate-geometry',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Coordinate Geometry',
    description: 'Lines, curves, and geometric relationships on coordinate axes',
    icon: '📍',
    color: 'bg-orange-600',
    subtopics: [
      // Straight lines
      'Equation of a line y = mx + c',
      'Gradient and intercept',
      'Parallel and perpendicular lines',
      'Finding equations from conditions',
      // Distance and midpoint
      'Distance between two points',
      'Midpoint of line segment',
      // Circles
      'Equation of a circle (x - a)² + (y - b)² = r²',
      'Finding centre and radius',
      'Circle through given points',
      'Tangent to a circle',
      // Intersection
      'Intersection of line and curve',
      'Intersection of line and circle',
      'Using discriminant for tangency',
    ],
  },

  // ============================================
  // CALCULUS
  // ============================================

  {
    id: 'fm-gcse-aqa-differentiation',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Differentiation',
    description: 'Introduction to calculus - finding gradients and rates of change',
    icon: '📉',
    color: 'bg-red-600',
    subtopics: [
      // Basic differentiation
      'Differentiation of x^n',
      'Differentiation of polynomials',
      'Finding gradients at points',
      // Rules
      'Constant rule',
      'Sum rule',
      'Difference rule',
      // Applications
      'Equations of tangents',
      'Equations of normals',
      'Stationary points',
      'Maximum and minimum values',
      'Classifying stationary points',
      'Second derivative test',
      // Practical applications
      'Optimisation problems',
      'Rates of change',
      'Kinematics applications',
    ],
  },

  {
    id: 'fm-gcse-aqa-integration',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Integration',
    description: 'Introduction to integration as the reverse of differentiation',
    icon: '∫',
    color: 'bg-pink-600',
    subtopics: [
      // Basic integration
      'Integration as reverse of differentiation',
      'Integrating x^n',
      'Integrating polynomials',
      'The constant of integration',
      // Definite integrals
      'Definite integration',
      'Evaluating definite integrals',
      // Area
      'Area under a curve',
      'Area between curve and x-axis',
      'Dealing with negative areas',
      // Applications
      'Finding original function from derivative',
      'Kinematics applications',
    ],
  },

  // ============================================
  // MATRICES
  // ============================================

  {
    id: 'fm-gcse-aqa-matrices',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Matrices',
    description: 'Introduction to matrix algebra and transformations',
    icon: '📊',
    color: 'bg-emerald-600',
    subtopics: [
      // Matrix basics
      '2×2 matrices',
      'Addition and subtraction of matrices',
      'Scalar multiplication',
      // Matrix multiplication
      'Matrix multiplication',
      'Non-commutativity',
      'Identity matrix',
      // Determinants and inverses
      'Determinant of 2×2 matrix',
      'Inverse of 2×2 matrix',
      'Singular matrices',
      // Transformations
      'Matrices representing transformations',
      'Rotation matrices',
      'Reflection matrices',
      'Enlargement matrices',
      'Combined transformations',
      'Finding transformation from matrix',
    ],
  },

  // ============================================
  // SEQUENCES
  // ============================================

  {
    id: 'fm-gcse-aqa-sequences',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Sequences',
    description: 'Arithmetic and geometric sequences and series',
    icon: '📈',
    color: 'bg-amber-600',
    subtopics: [
      // Arithmetic sequences
      'nth term of arithmetic sequence',
      'Sum of arithmetic series',
      'Sum formula: Sn = n/2(a + l)',
      'Sum formula: Sn = n/2(2a + (n-1)d)',
      // Geometric sequences
      'nth term of geometric sequence: ar^(n-1)',
      'Sum of geometric series',
      'Sum formula: Sn = a(1-r^n)/(1-r)',
      // Sum to infinity
      'Convergent series',
      'Condition for convergence |r| < 1',
      'Sum to infinity: S∞ = a/(1-r)',
      // Applications
      'Real-world applications',
      'Growth and decay models',
    ],
  },

  // ============================================
  // TRIGONOMETRY
  // ============================================

  {
    id: 'fm-gcse-aqa-trigonometry',
    examBoard: 'aqa',
    qualification: 'gcse',
    name: 'Trigonometry',
    description: 'Extended trigonometric concepts and identities',
    icon: '📐',
    color: 'bg-violet-600',
    subtopics: [
      // Basic trig functions
      'Sine, cosine, tangent functions',
      'Graphs of trig functions',
      'Period and amplitude',
      // Exact values
      'Exact values for 0°, 30°, 45°, 60°, 90°',
      'Using exact values in calculations',
      // Identities
      'tan θ = sin θ / cos θ',
      'sin²θ + cos²θ = 1',
      'Using identities to simplify',
      // Solving equations
      'Solving trig equations in a range',
      'Multiple solutions',
      'Using identities to solve equations',
      // Applications
      'Area of triangle: ½ab sin C',
      'Sine rule',
      'Cosine rule',
    ],
  },
];

export function getAQAGCSEFurtherMathsTopicById(id: string): Topic | undefined {
  return aqaGCSEFurtherMathsTopics.find((topic) => topic.id === id);
}
