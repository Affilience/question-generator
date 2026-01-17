import { Topic } from '@/types';

/**
 * OCR FSMQ Additional Mathematics (6993) Topics
 *
 * Single paper examination:
 * - 2 hours
 * - 100 marks
 * - Calculator allowed
 *
 * This Free Standing Mathematics Qualification (FSMQ) is designed to bridge
 * the gap between GCSE and A-Level Mathematics, covering introductory calculus
 * and more advanced algebra.
 *
 * Equivalent to Level 3 but taken alongside GCSE
 *
 * Prerequisite: GCSE Mathematics (Higher tier)
 */

export const ocrGCSEFurtherMathsTopics: Topic[] = [
  // ============================================
  // ALGEBRA
  // ============================================

  {
    id: 'fm-gcse-ocr-algebra',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Algebra',
    description: 'Advanced algebraic techniques including polynomials and identities',
    icon: '📐',
    color: 'bg-purple-600',
    subtopics: [
      // Manipulation
      'Simplification of algebraic expressions',
      'Expanding brackets (including cubic)',
      'Factorisation techniques',
      // Surds
      'Simplifying surds',
      'Operations with surds',
      'Rationalising denominators',
      // Indices
      'Laws of indices',
      'Negative and fractional indices',
      'Solving equations with indices',
      // Polynomials
      'Factor theorem',
      'Remainder theorem',
      'Algebraic division',
      // Algebraic fractions
      'Simplifying algebraic fractions',
      'Operations with algebraic fractions',
    ],
  },

  {
    id: 'fm-gcse-ocr-equations',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Equations and Inequalities',
    description: 'Solving equations of various types and working with inequalities',
    icon: '=',
    color: 'bg-blue-600',
    subtopics: [
      // Quadratics
      'Solving quadratics by factorisation',
      'Completing the square',
      'Quadratic formula',
      'Discriminant',
      'Nature of roots',
      // Simultaneous equations
      'Linear simultaneous equations',
      'One linear, one quadratic',
      'Geometric interpretation',
      // Inequalities
      'Linear inequalities',
      'Quadratic inequalities',
      'Graphical representation',
      // Other equations
      'Equations with algebraic fractions',
      'Equations reducible to quadratics',
    ],
  },

  // ============================================
  // COORDINATE GEOMETRY
  // ============================================

  {
    id: 'fm-gcse-ocr-straight-lines',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Coordinate Geometry of Straight Lines',
    description: 'Properties and equations of straight lines',
    icon: '📍',
    color: 'bg-orange-600',
    subtopics: [
      // Line equations
      'Gradient of a line',
      'y = mx + c form',
      'ax + by + c = 0 form',
      'Finding equations from conditions',
      // Parallel and perpendicular
      'Parallel lines (same gradient)',
      'Perpendicular lines (m₁m₂ = -1)',
      'Finding perpendicular lines',
      // Points and lines
      'Distance between two points',
      'Midpoint of line segment',
      'Point dividing line in ratio',
      // Intersection
      'Intersection of two lines',
      'Collinear points',
    ],
  },

  {
    id: 'fm-gcse-ocr-circles',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Coordinate Geometry of Circles',
    description: 'Equations of circles and their properties',
    icon: '⭕',
    color: 'bg-cyan-600',
    subtopics: [
      // Circle equations
      'Equation (x - a)² + (y - b)² = r²',
      'Expanded form x² + y² + 2gx + 2fy + c = 0',
      'Finding centre and radius',
      'Centre (-g, -f), radius √(g² + f² - c)',
      // Properties
      'Tangent perpendicular to radius',
      'Perpendicular from centre bisects chord',
      // Tangents
      'Equation of tangent at a point',
      'Tangent from external point',
      // Intersection
      'Intersection of line and circle',
      'Using discriminant for tangency',
      'Chord length',
    ],
  },

  // ============================================
  // TRIGONOMETRY
  // ============================================

  {
    id: 'fm-gcse-ocr-trigonometry',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Trigonometry',
    description: 'Trigonometric functions, equations and identities',
    icon: '📐',
    color: 'bg-violet-600',
    subtopics: [
      // Ratios and graphs
      'Trigonometric ratios',
      'Graphs of sin x, cos x, tan x',
      'Period and amplitude',
      'Transformations of trig graphs',
      // Exact values
      'Exact values for standard angles',
      'Using exact values in calculations',
      // Identities
      'tan θ = sin θ / cos θ',
      'sin²θ + cos²θ = 1',
      'Simplifying using identities',
      'Proving identities',
      // Equations
      'Solving basic trig equations',
      'Principal and secondary values',
      'Solutions in specified range',
      'Using identities to solve equations',
      // Triangle geometry
      'Sine rule',
      'Cosine rule',
      'Area = ½ab sin C',
    ],
  },

  // ============================================
  // CALCULUS
  // ============================================

  {
    id: 'fm-gcse-ocr-differentiation',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Differentiation',
    description: 'Introduction to differential calculus',
    icon: '📉',
    color: 'bg-red-600',
    subtopics: [
      // Basic differentiation
      'Derivative as gradient function',
      'Differentiation of x^n',
      'Differentiation of polynomials',
      'Notation: dy/dx and f\'(x)',
      // Rules
      'Constant multiple rule',
      'Sum and difference rules',
      // Applications to curves
      'Finding gradient at a point',
      'Equation of tangent',
      'Equation of normal',
      // Stationary points
      'Finding stationary points',
      'Maximum and minimum',
      'Second derivative test',
      'Points of inflection (awareness)',
      // Problems
      'Optimisation problems',
      'Maximum/minimum in context',
      'Rate of change problems',
    ],
  },

  {
    id: 'fm-gcse-ocr-integration',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Integration',
    description: 'Introduction to integral calculus',
    icon: '∫',
    color: 'bg-pink-600',
    subtopics: [
      // Basic integration
      'Integration as reverse of differentiation',
      'Integrating x^n',
      'Integrating polynomials',
      'Constant of integration',
      // Definite integration
      'Definite integrals',
      'Evaluating with limits',
      // Area
      'Area under curve',
      'Area above x-axis',
      'Area below x-axis (negative)',
      'Area between curve and x-axis',
      // Finding functions
      'Finding f(x) from f\'(x)',
      'Using initial conditions',
    ],
  },

  // ============================================
  // EXPONENTIALS AND LOGARITHMS
  // ============================================

  {
    id: 'fm-gcse-ocr-exponentials',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Exponentials and Logarithms',
    description: 'Exponential and logarithmic functions and their properties',
    icon: '📈',
    color: 'bg-emerald-600',
    subtopics: [
      // Exponential functions
      'Graphs of y = a^x',
      'Properties of exponential functions',
      'Growth and decay',
      // Logarithms
      'Definition of logarithm',
      'Converting between forms: a^x = b ⟺ x = log_a b',
      'Common logarithm (log₁₀)',
      'Natural logarithm (ln)',
      // Laws of logarithms
      'log(xy) = log x + log y',
      'log(x/y) = log x - log y',
      'log(x^n) = n log x',
      // Solving equations
      'Solving exponential equations using logs',
      'Solving logarithmic equations',
      // Applications
      'Exponential growth models',
      'Exponential decay models',
    ],
  },

  // ============================================
  // BINOMIAL EXPANSION
  // ============================================

  {
    id: 'fm-gcse-ocr-binomial',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Binomial Expansion',
    description: 'Expanding expressions using the binomial theorem',
    icon: '(a+b)ⁿ',
    color: 'bg-amber-600',
    subtopics: [
      // Pascal's triangle
      'Pascal\'s triangle',
      'Generating binomial coefficients',
      // Binomial expansion
      'Expansion of (a + b)^n for positive integer n',
      'Binomial coefficients: nCr = n!/(r!(n-r)!)',
      'General term in expansion',
      // Finding terms
      'Finding specific terms',
      'Finding coefficient of x^r',
      'Terms independent of x',
      // Applications
      'Approximations using binomial expansion',
      'Estimating values',
    ],
  },

  // ============================================
  // SEQUENCES AND SERIES
  // ============================================

  {
    id: 'fm-gcse-ocr-sequences',
    examBoard: 'ocr',
    qualification: 'gcse',
    name: 'Sequences and Series',
    description: 'Arithmetic and geometric sequences with their sums',
    icon: '📈',
    color: 'bg-slate-600',
    subtopics: [
      // Arithmetic sequences
      'Arithmetic sequences and common difference',
      'nth term: a + (n-1)d',
      'Sum of arithmetic series',
      'Sum formula: Sn = n/2(2a + (n-1)d)',
      // Geometric sequences
      'Geometric sequences and common ratio',
      'nth term: ar^(n-1)',
      'Sum of geometric series',
      'Sum formula: Sn = a(1-r^n)/(1-r)',
      // Convergence
      'Convergent geometric series',
      'Condition |r| < 1',
      'Sum to infinity: S∞ = a/(1-r)',
      // Applications
      'Modelling with sequences',
      'Financial applications (compound interest)',
    ],
  },
];

export function getOCRGCSEFurtherMathsTopicById(id: string): Topic | undefined {
  return ocrGCSEFurtherMathsTopics.find((topic) => topic.id === id);
}
