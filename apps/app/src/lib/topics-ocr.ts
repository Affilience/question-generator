import { Topic } from '@/types';

/**
 * OCR GCSE Mathematics J560 Specification Topics
 *
 * Aligned to the official OCR J560 specification content areas.
 * OCR uses 'Initial', 'Foundation', and 'Higher' tier headings.
 *
 * Key OCR characteristics:
 * - 3 papers × 100 marks each (more marks for method mark opportunities)
 * - Non-calculator paper is Paper 2 (middle), not Paper 1
 * - Questions tend to be more "wordy" and analytical
 * - Emphasis on understanding principles and explaining reasoning
 * - "Tick box" questions with reasoning prompts
 * - Sentence prompts within answer spaces
 *
 * (I) = Initial content, (F) = Foundation only, (H) = Higher only
 */

export const ocrTopics: Topic[] = [
  {
    id: 'ocr-number',
    name: 'Number',
    description: 'Calculations, fractions, decimals, percentages, powers and roots',
    icon: '🔢',
    color: 'bg-blue-500',
    examBoard: 'ocr',
    subtopics: [
      // Initial content - Structure and calculation
      'Place value (I)',
      'Ordering positive and negative integers',
      'Addition and subtraction of integers',
      'Multiplication and division of integers',
      'Order of operations (BIDMAS)',
      'Inverse operations',
      // Factors, multiples and primes
      'Factors and multiples',
      'Prime numbers',
      'Prime factorisation',
      'HCF and LCM',
      'HCF and LCM from prime factors',
      'HCF and LCM from Venn diagrams',
      // Powers and roots
      'Squares, cubes and their roots',
      'Index notation',
      'Laws of indices',
      'Zero and negative indices (H)',
      'Fractional indices (H)',
      'Standard form',
      'Calculations in standard form',
      // Surds (H)
      'Simplifying surds (H)',
      'Rationalising denominators (H)',
      'Expanding brackets with surds (H)',
      // Fractions
      'Equivalent fractions',
      'Simplifying fractions',
      'Ordering fractions',
      'Adding and subtracting fractions',
      'Multiplying fractions',
      'Dividing fractions',
      'Mixed numbers and improper fractions',
      'Fractions of amounts',
      // Decimals
      'Ordering decimals',
      'Adding and subtracting decimals',
      'Multiplying and dividing decimals',
      'Converting fractions to decimals',
      'Converting decimals to fractions',
      'Recurring decimals (H)',
      // Percentages
      'Percentage of an amount',
      'Writing one number as a percentage of another',
      'Percentage increase and decrease',
      'Reverse percentages',
      'Repeated percentage change',
      'Compound interest',
      'Depreciation',
      // Approximation and accuracy
      'Rounding to decimal places',
      'Rounding to significant figures',
      'Estimation',
      'Truncation',
      'Error intervals',
      'Upper and lower bounds (H)',
      'Bounds in calculations (H)',
    ],
  },
  {
    id: 'ocr-algebra',
    name: 'Algebra',
    description: 'Expressions, equations, formulae, sequences, graphs and functions',
    icon: '📐',
    color: 'bg-purple-500',
    examBoard: 'ocr',
    subtopics: [
      // Notation and manipulation
      'Algebraic notation',
      'Collecting like terms',
      'Multiplying algebraic terms',
      'Expanding single brackets',
      'Expanding double brackets',
      'Expanding triple brackets (H)',
      'Factorising into single brackets',
      'Factorising quadratics',
      'Difference of two squares',
      'Completing the square (H)',
      // Algebraic fractions (H)
      'Simplifying algebraic fractions (H)',
      'Multiplying and dividing algebraic fractions (H)',
      'Adding and subtracting algebraic fractions (H)',
      // Substitution
      'Substitution into expressions',
      'Substitution into formulae',
      // Formulae
      'Writing formulae from words',
      'Rearranging formulae',
      'Rearranging with subject appearing twice (H)',
      // Expressions and identities
      'Expressions, equations and identities',
      'Algebraic proof (H)',
      // Coordinates
      'Coordinates in four quadrants',
      'Midpoint of a line segment',
      'Distance between two points (H)',
      // Linear graphs
      'Plotting straight line graphs',
      'Gradient of a line',
      'y-intercept',
      'Equation y = mx + c',
      'Finding equation of a line',
      'Parallel and perpendicular lines (H)',
      // Other graphs
      'Quadratic graphs',
      'Cubic graphs',
      'Reciprocal graphs',
      'Exponential graphs (H)',
      'Trigonometric graphs (H)',
      'Graph transformations (H)',
      // Real-life graphs
      'Distance-time graphs',
      'Velocity-time graphs (H)',
      'Interpreting real-life graphs',
      'Gradients as rates of change',
      'Area under a curve (H)',
      // Sequences
      'Term-to-term rules',
      'Position-to-term rules',
      'nth term of arithmetic sequences',
      'nth term of quadratic sequences (H)',
      'Fibonacci sequences',
      'Geometric sequences (H)',
      // Linear equations
      'Solving one-step equations',
      'Solving two-step equations',
      'Equations with brackets',
      'Equations with unknowns on both sides',
      'Forming and solving equations',
      // Quadratic equations
      'Solving by factorising',
      'Solving using the quadratic formula (H)',
      'Solving by completing the square (H)',
      'Solving graphically',
      // Simultaneous equations
      'Simultaneous equations - graphical',
      'Simultaneous equations - elimination',
      'Simultaneous equations - substitution',
      'Linear and quadratic simultaneous (H)',
      // Inequalities
      'Solving linear inequalities',
      'Number lines for inequalities',
      'Quadratic inequalities (H)',
      'Graphing inequalities (H)',
      'Identifying regions',
      // Functions (H)
      'Function notation (H)',
      'Composite functions (H)',
      'Inverse functions (H)',
      'Iteration (H)',
    ],
  },
  {
    id: 'ocr-geometry',
    name: 'Geometry & Measures',
    description: 'Properties of shapes, mensuration, trigonometry, vectors',
    icon: '📏',
    color: 'bg-green-500',
    examBoard: 'ocr',
    subtopics: [
      // Angle properties
      'Angles at a point and on a line',
      'Vertically opposite angles',
      'Angles in triangles',
      'Angles in quadrilaterals',
      'Angles in polygons',
      'Interior and exterior angles',
      'Angles in parallel lines',
      // Properties of shapes
      'Properties of triangles',
      'Properties of quadrilaterals',
      'Properties of regular polygons',
      'Line symmetry',
      'Rotational symmetry',
      // Circles
      'Parts of a circle',
      'Circle theorems (H)',
      'Tangent properties (H)',
      'Cyclic quadrilaterals (H)',
      'Alternate segment theorem (H)',
      // Constructions
      'Constructing triangles',
      'Perpendicular bisector',
      'Angle bisector',
      'Perpendicular from a point',
      'Loci',
      // Congruence and similarity
      'Congruent shapes',
      'Congruent triangles',
      'Similar shapes',
      'Similar triangles',
      'Scale factors for length, area, volume (H)',
      // Perimeter, area, volume
      'Perimeter of 2D shapes',
      'Area of rectangles and parallelograms',
      'Area of triangles',
      'Area of trapeziums',
      'Area of compound shapes',
      'Circumference of circles',
      'Area of circles',
      'Arc length and sector area',
      'Volume of cuboids',
      'Volume of prisms',
      'Volume of cylinders',
      'Volume of pyramids and cones (H)',
      'Volume of spheres (H)',
      'Surface area of 3D shapes',
      // Pythagoras and trigonometry
      'Pythagoras theorem',
      'Pythagoras in context',
      'Pythagoras in 3D (H)',
      'Trigonometry - finding sides',
      'Trigonometry - finding angles',
      'Exact trig values (H)',
      'Sine rule (H)',
      'Cosine rule (H)',
      'Area using sine (H)',
      '3D trigonometry (H)',
      // Transformations
      'Translations',
      'Reflections',
      'Rotations',
      'Enlargements',
      'Negative scale factors (H)',
      'Describing transformations',
      'Combined transformations (H)',
      // Bearings
      'Three-figure bearings',
      'Bearings problems',
      // Vectors
      'Column vectors',
      'Vector addition and subtraction',
      'Scalar multiplication',
      'Vector geometry (H)',
    ],
  },
  {
    id: 'ocr-statistics',
    name: 'Statistics',
    description: 'Collecting, representing and analysing data',
    icon: '📊',
    color: 'bg-orange-500',
    examBoard: 'ocr',
    subtopics: [
      // Data collection
      'Types of data',
      'Sampling methods',
      'Stratified sampling (H)',
      'Bias in sampling',
      'Designing questionnaires',
      // Representing data
      'Pictograms and bar charts',
      'Pie charts',
      'Line graphs',
      'Frequency tables',
      'Grouped frequency tables',
      'Two-way tables',
      'Stem and leaf diagrams',
      'Frequency polygons',
      'Scatter graphs',
      'Cumulative frequency',
      'Box plots',
      'Histograms (H)',
      // Averages and spread
      'Mean',
      'Median',
      'Mode and modal class',
      'Range',
      'Mean from frequency tables',
      'Estimated mean from grouped data',
      'Quartiles and IQR',
      'Comparing distributions',
      // Correlation
      'Types of correlation',
      'Lines of best fit',
      'Interpolation and extrapolation',
    ],
  },
  {
    id: 'ocr-probability',
    name: 'Probability',
    description: 'Single events, combined events, tree diagrams',
    icon: '🎲',
    color: 'bg-red-500',
    examBoard: 'ocr',
    subtopics: [
      // Basic probability
      'Probability scale',
      'Calculating probability',
      'Probability as fractions/decimals/percentages',
      'Mutually exclusive events',
      'Exhaustive events',
      // Experimental probability
      'Relative frequency',
      'Expected frequency',
      'Comparing theoretical and experimental',
      // Combined events
      'Sample space diagrams',
      'Two-way tables for probability',
      'Tree diagrams',
      'And rule (multiplication)',
      'Or rule (addition)',
      'Independent events',
      'Dependent events',
      'Conditional probability (H)',
      'Venn diagrams',
      'Set notation (H)',
    ],
  },
  {
    id: 'ocr-ratio',
    name: 'Ratio, Proportion & Rates',
    description: 'Ratio, proportion, rates of change, growth and decay',
    icon: '⚖️',
    color: 'bg-teal-500',
    examBoard: 'ocr',
    subtopics: [
      // Ratio
      'Writing ratios',
      'Simplifying ratios',
      'Equivalent ratios',
      'Dividing in a ratio',
      'Ratio and fractions',
      '1:n form',
      // Proportion
      'Direct proportion',
      'Inverse proportion',
      'Proportion equations (H)',
      'Graphs of proportional relationships',
      // Percentages
      'Percentage change',
      'Reverse percentages',
      'Compound interest',
      'Depreciation',
      // Units and conversion
      'Metric units',
      'Time calculations',
      'Currency conversion',
      'Scale drawings and maps',
      // Compound measures
      'Speed, distance, time',
      'Density, mass, volume',
      'Pressure (H)',
      'Unit pricing',
      'Best buy problems',
      // Rates of change (H)
      'Gradient as rate of change (H)',
      'Instantaneous rate of change (H)',
      // Growth and decay
      'Exponential growth',
      'Exponential decay',
      'Iteration (H)',
    ],
  },
];

export function getOCRTopicById(id: string): Topic | undefined {
  return ocrTopics.find((topic) => topic.id === id);
}
