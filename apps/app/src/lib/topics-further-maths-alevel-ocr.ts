import { Topic } from '@/types';

/**
 * OCR A Level Further Mathematics A (H245) Specification Topics
 *
 * Assessment structure:
 * - Paper 1: Pure Core 1 (Y541) - 1hr 30min, 75 marks
 * - Paper 2: Pure Core 2 (Y542) - 1hr 30min, 75 marks
 * - Paper 3: Choose one optional paper (1hr 30min, 75 marks)
 * - Paper 4: Choose one optional paper (1hr 30min, 75 marks)
 *
 * Optional papers:
 * - Statistics (Y543)
 * - Mechanics (Y544)
 * - Discrete (Y545)
 * - Additional Pure (Y546)
 *
 * Prerequisites: A Level Mathematics
 */

export const ocrALevelFurtherMathsTopics: Topic[] = [
  // ============================================
  // PURE CORE 1 (Y541) - Compulsory
  // ============================================

  {
    id: 'fm-alevel-ocr-proof',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Proof',
    description: 'Proof by induction and further proof techniques',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Pure Core 1 (Compulsory)',
    subtopics: [
      'Proof by mathematical induction',
      'Induction for sums of series',
      'Induction for divisibility',
      'Induction for matrix products',
      'Induction for recurrence relations',
      'Induction for inequalities',
      'Constructing inductive proofs',
    ],
  },

  {
    id: 'fm-alevel-ocr-complex1',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Complex Numbers',
    description: 'Fundamentals of complex numbers and Argand diagrams',
    icon: '🔢',
    color: 'bg-purple-600',
    paperRestriction: 'Pure Core 1 (Compulsory)',
    subtopics: [
      // Basics
      'Imaginary unit i where i² = -1',
      'Real and imaginary parts',
      'Complex conjugate',
      'Arithmetic of complex numbers',
      'Division of complex numbers',
      // Equations
      'Solving equations with complex roots',
      'Complex conjugate pairs',
      'Polynomials with real coefficients',
      // Argand diagrams
      'Argand diagram representation',
      'Modulus of z: |z|',
      'Argument of z: arg(z)',
      'Modulus-argument form',
      'Multiplication and division geometrically',
      // Loci
      'Circles: |z - a| = k',
      'Perpendicular bisectors: |z - a| = |z - b|',
      'Half-lines: arg(z - a) = θ',
      'Regions in the complex plane',
    ],
  },

  {
    id: 'fm-alevel-ocr-matrices1',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Matrices and Linear Transformations',
    description: 'Matrix algebra and geometric transformations',
    icon: '📊',
    color: 'bg-blue-600',
    paperRestriction: 'Pure Core 1 (Compulsory)',
    subtopics: [
      // Matrix algebra
      'Matrix operations',
      'Matrix multiplication',
      'Identity matrix',
      'Determinant of 2×2 matrix',
      'Inverse of 2×2 matrix',
      'Singular matrices',
      // 3×3 matrices
      'Determinant of 3×3 matrix',
      'Inverse of 3×3 matrix',
      'Properties of determinants',
      // Linear transformations
      'Transformation matrices',
      'Rotations',
      'Reflections',
      'Stretches and shears',
      'Area scale factor = |det|',
      'Combining transformations',
      'Finding transformation from images',
      // Systems of equations
      'Matrix representation of systems',
      'Solving using inverse matrices',
      'Geometric interpretation',
      'Unique solution, no solution, infinite solutions',
    ],
  },

  {
    id: 'fm-alevel-ocr-vectors',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Vectors',
    description: 'Vector geometry in 3D space',
    icon: '→',
    color: 'bg-violet-600',
    paperRestriction: 'Pure Core 1 (Compulsory)',
    subtopics: [
      // Vector equations of lines
      'Vector equation of line: r = a + λd',
      'Parametric form',
      'Cartesian form',
      'Parallel lines',
      'Intersecting lines',
      'Skew lines',
      'Angle between lines',
      // Planes
      'Vector equation: r.n = d',
      'Cartesian equation',
      'Normal vector',
      'Finding plane through three points',
      // Intersections and angles
      'Line-plane intersection',
      'Angle between line and plane',
      'Angle between planes',
      'Line of intersection of planes',
      // Distances
      'Distance from point to line',
      'Distance from point to plane',
      'Shortest distance between skew lines',
    ],
  },

  {
    id: 'fm-alevel-ocr-algebra',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Algebra and Series',
    description: 'Roots of polynomials and summation of series',
    icon: '∑',
    color: 'bg-cyan-600',
    paperRestriction: 'Pure Core 1 (Compulsory)',
    subtopics: [
      // Roots and coefficients
      'Sum of roots',
      'Sum of products of pairs',
      'Product of roots',
      'Symmetric functions',
      'Transformations of roots',
      // Series
      'Sum of natural numbers',
      'Sum of squares',
      'Sum of cubes',
      'Method of differences',
    ],
  },

  // ============================================
  // PURE CORE 2 (Y542) - Compulsory
  // ============================================

  {
    id: 'fm-alevel-ocr-complex2',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Complex Numbers (Further)',
    description: 'De Moivre\'s theorem and roots of unity',
    icon: '🌀',
    color: 'bg-purple-700',
    paperRestriction: 'Pure Core 2 (Compulsory)',
    subtopics: [
      // Exponential form
      'Euler\'s formula',
      'Exponential form z = re^iθ',
      'Operations in exponential form',
      // De Moivre\'s theorem
      'De Moivre\'s theorem',
      'Powers of complex numbers',
      'Trigonometric identities from De Moivre',
      'cos nθ and sin nθ expansions',
      // Roots
      'nth roots of unity',
      'nth roots of complex numbers',
      'Geometric distribution of roots',
    ],
  },

  {
    id: 'fm-alevel-ocr-hyperbolic',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Hyperbolic Functions',
    description: 'Hyperbolic functions and their calculus',
    icon: '〰️',
    color: 'bg-emerald-600',
    paperRestriction: 'Pure Core 2 (Compulsory)',
    subtopics: [
      // Definitions
      'sinh, cosh, tanh definitions',
      'sech, cosech, coth',
      'Graphs of hyperbolic functions',
      // Identities
      'Fundamental identity: cosh²x - sinh²x = 1',
      'Other Osborn identities',
      'Addition formulae',
      // Inverse functions
      'arsinh, arcosh, artanh',
      'Logarithmic forms',
      // Calculus
      'Derivatives of hyperbolic functions',
      'Derivatives of inverse hyperbolics',
      'Integration with hyperbolics',
      'Standard integrals involving inverse hyperbolics',
    ],
  },

  {
    id: 'fm-alevel-ocr-calculus',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Further Calculus',
    description: 'Advanced integration and differential equations',
    icon: '∫',
    color: 'bg-red-600',
    paperRestriction: 'Pure Core 2 (Compulsory)',
    subtopics: [
      // Integration
      'Volumes of revolution',
      'Mean value of function',
      'Improper integrals',
      'Arc length',
      'Surface area of revolution',
      // Maclaurin series
      'Maclaurin series',
      'Standard series',
      'Series for compound functions',
      'Range of validity',
      // Differential equations
      'Second order linear: ay" + by\' + cy = 0',
      'Auxiliary equation',
      'Real distinct roots',
      'Repeated roots',
      'Complex roots',
      'Particular integrals',
      'General solution = CF + PI',
      'Boundary conditions',
    ],
  },

  {
    id: 'fm-alevel-ocr-polar',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Polar Coordinates',
    description: 'Polar curves and integration',
    icon: 'θ',
    color: 'bg-orange-600',
    paperRestriction: 'Pure Core 2 (Compulsory)',
    subtopics: [
      // Basics
      'Polar coordinates (r, θ)',
      'Conversion to/from Cartesian',
      // Curves
      'Sketching polar curves',
      'Standard curves',
      'Finding tangent directions',
      // Integration
      'Area: A = ½∫r²dθ',
      'Area between curves',
    ],
  },

  // ============================================
  // OPTIONAL: STATISTICS (Y543)
  // ============================================

  {
    id: 'fm-alevel-ocr-statistics',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Statistics',
    description: 'Further probability distributions and inference',
    icon: 'σ',
    color: 'bg-amber-600',
    paperRestriction: 'Statistics (Option)',
    subtopics: [
      // Distributions
      'Discrete distributions',
      'Poisson distribution',
      'Properties of Poisson',
      'Geometric distribution',
      'Continuous uniform distribution',
      'Exponential distribution',
      // Estimation
      'Unbiased estimators',
      't-distribution',
      'Confidence intervals',
      // Hypothesis testing
      't-tests',
      'Paired t-test',
      'Two-sample tests',
      // Chi-squared
      'Chi-squared distribution',
      'Goodness of fit',
      'Contingency tables',
      // Probability generating functions
      'PGF definition',
      'Finding mean and variance',
      'PGF of sum',
    ],
  },

  // ============================================
  // OPTIONAL: MECHANICS (Y544)
  // ============================================

  {
    id: 'fm-alevel-ocr-mechanics',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Mechanics',
    description: 'Advanced mechanics topics',
    icon: 'ω',
    color: 'bg-sky-600',
    paperRestriction: 'Mechanics (Option)',
    subtopics: [
      // Dimensional analysis
      'Dimensions of quantities',
      'Dimensional consistency',
      'Deriving formulae',
      // Momentum and collisions
      'Impulse and momentum',
      'Conservation of momentum',
      'Coefficient of restitution',
      'Direct collisions',
      'Oblique collisions',
      // Circular motion
      'Angular velocity',
      'Centripetal acceleration',
      'Horizontal circles',
      'Vertical circles',
      'Conical pendulum',
      // Work and energy
      'Work as integral',
      'Elastic strings (Hooke\'s law)',
      'Elastic potential energy',
      'Conservation of energy',
      // SHM
      'SHM equation ẍ = -ω²x',
      'Period and amplitude',
      'Velocity in SHM',
      'Energy in SHM',
      'Springs and pendulums',
      // Centres of mass
      'Centre of mass by integration',
      'Standard results',
      'Composite bodies',
    ],
  },

  // ============================================
  // OPTIONAL: DISCRETE (Y545)
  // ============================================

  {
    id: 'fm-alevel-ocr-discrete',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Discrete Mathematics',
    description: 'Algorithms, graphs, and combinatorics',
    icon: '🔗',
    color: 'bg-rose-600',
    paperRestriction: 'Discrete (Option)',
    subtopics: [
      // Graphs
      'Graph terminology',
      'Trees and forests',
      'Spanning trees',
      'Eulerian and Hamiltonian graphs',
      'Planar graphs',
      // Algorithms
      'Sorting algorithms',
      'Searching algorithms',
      'Complexity',
      // Spanning trees
      'Kruskal\'s algorithm',
      'Prim\'s algorithm',
      // Shortest paths
      'Dijkstra\'s algorithm',
      // Route inspection
      'Chinese postman problem',
      // TSP
      'Travelling salesperson',
      'Upper and lower bounds',
      'Nearest neighbour',
      // Network flows
      'Maximum flow',
      'Minimum cut',
      'Flow augmentation',
      // Linear programming
      'Graphical method',
      'Simplex method',
      // Critical path analysis
      'Activity networks',
      'Critical path',
      'Float times',
      // Recurrence relations
      'First and second order',
      'Solving recurrence relations',
    ],
  },

  // ============================================
  // OPTIONAL: ADDITIONAL PURE (Y546)
  // ============================================

  {
    id: 'fm-alevel-ocr-additional-pure',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Additional Pure Mathematics',
    description: 'Further pure topics including groups and number theory',
    icon: '∞',
    color: 'bg-slate-600',
    paperRestriction: 'Additional Pure (Option)',
    subtopics: [
      // Number theory
      'Euclidean algorithm',
      'Bezout\'s identity',
      'Linear Diophantine equations',
      'Modular arithmetic',
      'Solving congruences',
      'Fermat\'s little theorem',
      'Wilson\'s theorem',
      // Groups
      'Binary operations',
      'Group axioms',
      'Abelian groups',
      'Order of group and elements',
      'Subgroups',
      'Cyclic groups',
      'Generators',
      'Isomorphisms',
      'Cayley tables',
      // Further matrices
      'Eigenvalues and eigenvectors',
      'Characteristic equation',
      'Diagonalisation',
      'Powers of matrices',
      'Cayley-Hamilton theorem',
      // Further vectors
      'Vector product',
      'Triple products',
      'Applications',
      // Further integration
      'Reduction formulae',
      'Wallis\'s formulae',
    ],
  },
];

export function getOCRALevelFurtherMathsTopicById(id: string): Topic | undefined {
  return ocrALevelFurtherMathsTopics.find((topic) => topic.id === id);
}

export function getOCRALevelFurtherMathsCompulsoryTopics(): Topic[] {
  return ocrALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Compulsory')
  );
}

export function getOCRALevelFurtherMathsOptionalTopics(): Topic[] {
  return ocrALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Option')
  );
}
