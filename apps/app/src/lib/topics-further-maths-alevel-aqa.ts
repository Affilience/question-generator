import { Topic } from '@/types';

/**
 * AQA A Level Further Mathematics 7367 Specification Topics
 *
 * Four papers, each 1 hour 30 mins, 75 marks:
 * - Paper 1 (7367/1): Compulsory Content (core pure)
 * - Paper 2 (7367/2): Compulsory Content (core pure)
 * - Paper 3 (7367/3): Optional Application 1
 * - Paper 4 (7367/4): Optional Application 2
 *
 * Optional papers (choose 2):
 * - A: Further Pure Mathematics
 * - B: Further Statistics
 * - C: Further Mechanics
 * - D: Discrete Mathematics
 *
 * Prerequisites: A Level Mathematics
 */

export const aqaALevelFurtherMathsTopics: Topic[] = [
  // ============================================
  // COMPULSORY CORE PURE MATHEMATICS - Papers 1 & 2
  // ============================================

  {
    id: 'fm-alevel-aqa-proof',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Proof',
    description: 'Advanced proof techniques including proof by induction',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Proof by induction
      'Proof by mathematical induction',
      'Induction for summation formulae',
      'Induction for divisibility',
      'Induction for matrix powers',
      'Induction for recurrence relations',
      'Induction for differential equations',
      'Induction for inequalities',
      // Other proof methods
      'Proof by contradiction (advanced)',
      'Proof using congruence',
      'Proofs involving irrational numbers',
      'Proofs involving prime numbers',
    ],
  },

  {
    id: 'fm-alevel-aqa-complex-numbers',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Complex Numbers',
    description: 'The complex number system, Argand diagrams, and De Moivre\'s theorem',
    icon: '🔢',
    color: 'bg-purple-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Basics
      'Definition of i: i^2 = -1',
      'Real and imaginary parts',
      'Complex conjugates',
      'Addition and subtraction',
      'Multiplication of complex numbers',
      'Division using conjugates',
      // Solving equations
      'Solving quadratics with complex roots',
      'Complex conjugate root theorem',
      'Solving polynomials with complex roots',
      'Finding all roots of polynomials',
      // Argand diagrams
      'Argand diagram representation',
      'Modulus of complex numbers |z|',
      'Argument of complex numbers arg(z)',
      'Modulus-argument form: r(cos θ + i sin θ)',
      'Exponential form: re^(iθ)',
      'Geometric interpretation of operations',
      // De Moivre\'s theorem
      'De Moivre\'s theorem: (cos θ + i sin θ)^n',
      'Proving trigonometric identities',
      'Finding cos(nθ) and sin(nθ)',
      'nth roots of unity',
      'nth roots of complex numbers',
      'Roots on Argand diagram',
      // Loci
      'Locus |z - a| = r (circle)',
      'Locus |z - a| = |z - b| (perpendicular bisector)',
      'Locus arg(z - a) = θ (half-line)',
      'Regions in the complex plane',
      'Transformations w = z + a, w = kz, w = z*',
    ],
  },

  {
    id: 'fm-alevel-aqa-matrices',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Matrices',
    description: 'Matrix algebra, transformations, inverses, and eigenvalues',
    icon: '📊',
    color: 'bg-blue-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Matrix basics
      'Matrix addition and subtraction',
      'Scalar multiplication',
      'Matrix multiplication',
      'Conformability for multiplication',
      'The identity matrix I',
      'Zero matrix',
      // 2x2 matrices
      'Determinant of 2x2 matrix: ad - bc',
      'Inverse of 2x2 matrix',
      'Singular matrices (det = 0)',
      'Solving 2x2 simultaneous equations',
      // 3x3 matrices
      'Determinant of 3x3 matrix',
      'Cofactors and minors',
      'Adjugate matrix',
      'Inverse of 3x3 matrix',
      'Solving 3x3 systems using matrices',
      // Linear transformations
      'Matrices as linear transformations',
      'Transformation matrices in 2D',
      'Rotation matrices',
      'Reflection matrices',
      'Enlargement matrices',
      'Shear matrices',
      'Combining transformations',
      'Inverse transformations',
      'Transformation matrices in 3D',
      // Systems of equations
      'Representing systems as matrix equations',
      'Consistent systems (unique solution)',
      'Inconsistent systems (no solution)',
      'Systems with infinitely many solutions',
      'Geometric interpretation of solutions',
      // Eigenvalues and eigenvectors
      'Characteristic equation',
      'Finding eigenvalues',
      'Finding eigenvectors',
      'Properties of eigenvalues',
      'Diagonalisation',
      'Powers of matrices using diagonalisation',
      'Cayley-Hamilton theorem',
    ],
  },

  {
    id: 'fm-alevel-aqa-further-algebra',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Algebra',
    description: 'Roots of polynomials, series, and inequalities',
    icon: '∑',
    color: 'bg-cyan-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Roots of polynomials
      'Relationship between roots and coefficients',
      'Sum of roots (Vieta\'s formulas)',
      'Product of roots',
      'Sum of products of pairs of roots',
      'Forming equations with related roots',
      'Linear transformation of roots',
      // Method of differences
      'Summing series using differences',
      'Partial fractions for series',
      'Telescoping series',
      // Further series
      'Sum of r, r^2, r^3',
      'Maclaurin series',
      'Taylor series',
      'Standard Maclaurin expansions',
      'Validity of series expansions',
      'Using series for approximations',
      // Inequalities
      'Algebraic manipulation of inequalities',
      'Modulus inequalities',
      'Proving inequalities',
    ],
  },

  {
    id: 'fm-alevel-aqa-further-calculus',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Calculus',
    description: 'Advanced integration techniques and applications',
    icon: '∫',
    color: 'bg-red-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Improper integrals
      'Improper integrals with infinite limits',
      'Improper integrals with discontinuities',
      'Convergence and divergence',
      // Mean value
      'Mean value of a function',
      'Mean value over an interval',
      // Volumes of revolution
      'Volumes about x-axis (review)',
      'Volumes about y-axis (review)',
      'Volumes using parametric equations',
      // Arc length and surface area
      'Arc length in Cartesian form',
      'Arc length in parametric form',
      'Surface area of revolution',
      // Reduction formulae
      'Deriving reduction formulae',
      'Using reduction formulae',
      'Integration by parts repeatedly',
    ],
  },

  {
    id: 'fm-alevel-aqa-further-vectors',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Vectors',
    description: 'Vector equations of lines and planes, and vector products',
    icon: '→',
    color: 'bg-violet-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Vector product
      'Vector (cross) product definition',
      'Calculating cross product',
      'Properties of cross product',
      'Geometric interpretation (area)',
      'Triple scalar product',
      'Volume of parallelepiped',
      // Lines in 3D
      'Vector equation of a line',
      'Parametric equations of lines',
      'Cartesian equations of lines',
      'Intersection of two lines',
      'Parallel and skew lines',
      'Angle between lines',
      'Distance from point to line',
      'Shortest distance between skew lines',
      // Planes
      'Vector equation of a plane r.n = d',
      'Cartesian equation of plane ax + by + cz = d',
      'Normal vector to a plane',
      'Parametric equation of plane',
      'Plane through three points',
      // Relationships
      'Intersection of line and plane',
      'Angle between line and plane',
      'Angle between two planes',
      'Distance from point to plane',
      'Intersection of two planes',
      'Intersection of three planes',
    ],
  },

  {
    id: 'fm-alevel-aqa-polar',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Polar Coordinates',
    description: 'Polar coordinate system, curves, and areas',
    icon: 'θ',
    color: 'bg-orange-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Basics
      'Polar coordinate system (r, θ)',
      'Converting to Cartesian: x = r cos θ, y = r sin θ',
      'Converting from Cartesian',
      'Multiple representations',
      // Curves
      'Sketching polar curves',
      'Polar curves: r = a (circle)',
      'Polar curves: θ = α (line through origin)',
      'Polar curves: r = a cos θ, r = a sin θ',
      'Polar curves: r = a + b cos θ (limaçon)',
      'Polar curves: r = a cos(nθ) (rose curves)',
      'Polar curves: r = aθ (spiral)',
      'Cardioid: r = a(1 + cos θ)',
      // Calculus
      'Tangents to polar curves',
      'Finding dy/dx from polar form',
      'Area enclosed by polar curve',
      'Area formula: A = (1/2)∫r^2 dθ',
      'Area between two polar curves',
    ],
  },

  {
    id: 'fm-alevel-aqa-hyperbolic',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Hyperbolic Functions',
    description: 'Hyperbolic functions, their inverses, and calculus',
    icon: '〰️',
    color: 'bg-emerald-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // Definitions
      'sinh x = (e^x - e^(-x))/2',
      'cosh x = (e^x + e^(-x))/2',
      'tanh x = sinh x / cosh x',
      'sech x, cosech x, coth x',
      // Graphs and properties
      'Graphs of hyperbolic functions',
      'Domain and range',
      'Even and odd properties',
      'Connection to exponentials',
      // Identities
      'cosh^2 x - sinh^2 x = 1',
      'sech^2 x = 1 - tanh^2 x',
      'cosech^2 x = coth^2 x - 1',
      'Addition formulae',
      'Double angle formulae',
      'Osborn\'s rule',
      // Inverse functions
      'arsinh x = ln(x + √(x^2 + 1))',
      'arcosh x = ln(x + √(x^2 - 1))',
      'artanh x = (1/2)ln((1+x)/(1-x))',
      'Deriving inverse formulae',
      'Graphs of inverse hyperbolic functions',
      // Calculus
      'd/dx(sinh x) = cosh x',
      'd/dx(cosh x) = sinh x',
      'd/dx(tanh x) = sech^2 x',
      'Derivatives of inverse hyperbolics',
      'Integration involving hyperbolic functions',
      'Integration using hyperbolic substitution',
      'Standard integrals with inverse hyperbolics',
    ],
  },

  {
    id: 'fm-alevel-aqa-diff-equations',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Differential Equations',
    description: 'First and second order differential equations and their applications',
    icon: '📉',
    color: 'bg-pink-600',
    paperRestriction: 'Papers 1 & 2 (Compulsory)',
    subtopics: [
      // First order
      'Separable equations (review)',
      'Integrating factor method',
      'Solving dy/dx + P(x)y = Q(x)',
      'Finding integrating factor e^∫P dx',
      'Exact equations',
      // Second order homogeneous
      'Second order linear: ay" + by\' + cy = 0',
      'Auxiliary equation',
      'Distinct real roots',
      'Repeated roots',
      'Complex conjugate roots',
      'General solution forms',
      // Second order non-homogeneous
      'Particular integrals',
      'General solution = CF + PI',
      'Finding PI by trial',
      'PI for polynomials',
      'PI for exponentials',
      'PI for trigonometric functions',
      'Modification when PI overlaps CF',
      // Boundary conditions
      'Initial conditions',
      'Boundary value problems',
      'Finding particular solutions',
      // Applications
      'Simple harmonic motion',
      'Damped oscillations',
      'Coupled first order equations',
      'Modelling with differential equations',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER PURE MATHEMATICS - Paper 3/4
  // ============================================

  {
    id: 'fm-alevel-aqa-further-pure',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Pure Mathematics',
    description: 'Additional pure topics including groups, number theory, and further calculus',
    icon: '∞',
    color: 'bg-slate-600',
    paperRestriction: 'Paper 3 or 4 (Option A)',
    subtopics: [
      // Groups
      'Binary operations',
      'Closure, associativity',
      'Identity and inverse elements',
      'Definition of a group',
      'Abelian groups',
      'Order of a group',
      'Order of an element',
      'Subgroups',
      'Cyclic groups',
      'Generators',
      'Isomorphisms between groups',
      'Group tables (Cayley tables)',
      // Number theory
      'Divisibility and prime numbers',
      'Euclidean algorithm',
      'GCD and LCM',
      'Linear Diophantine equations',
      'Modular arithmetic',
      'Congruence classes',
      'Solving linear congruences',
      'Fermat\'s little theorem',
      'Chinese remainder theorem',
      // Further calculus
      'Second order differential equations (extended)',
      'Systems of differential equations',
      'Phase plane analysis',
      // Further matrices
      'Determinant properties',
      'Further applications of eigenvalues',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER STATISTICS - Paper 3/4
  // ============================================

  {
    id: 'fm-alevel-aqa-further-stats',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Statistics',
    description: 'Advanced probability distributions and statistical inference',
    icon: 'σ',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 3 or 4 (Option B)',
    subtopics: [
      // Discrete distributions
      'Discrete uniform distribution',
      'Geometric distribution',
      'Negative binomial distribution',
      'Poisson distribution',
      'Mean and variance of Poisson',
      'Poisson as limit of binomial',
      'Sum of Poisson variables',
      // Continuous distributions
      'Continuous uniform distribution',
      'Exponential distribution',
      'Mean and variance derivations',
      'Normal approximations',
      // Probability generating functions
      'PGF definition: G(t) = E(t^X)',
      'Finding mean and variance from PGF',
      'PGF of common distributions',
      'Sum of independent variables using PGFs',
      // Estimation
      'Unbiased estimators',
      'Bias and efficiency',
      'Confidence intervals',
      'CI for population mean',
      'CI for population proportion',
      'Determining sample size',
      // Hypothesis testing
      'Type I and Type II errors',
      'Power of a test',
      't-distribution',
      't-test for mean',
      'Paired t-test',
      'Two-sample t-test',
      'Chi-squared test for variance',
      'F-test for ratio of variances',
      // Correlation and regression
      'Spearman\'s rank correlation',
      'Testing for correlation',
      'Chi-squared contingency tables',
      'Goodness of fit tests',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER MECHANICS - Paper 3/4
  // ============================================

  {
    id: 'fm-alevel-aqa-further-mechanics',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Further Mechanics',
    description: 'Advanced mechanics including circular motion, SHM, and rotational dynamics',
    icon: 'ω',
    color: 'bg-sky-600',
    paperRestriction: 'Paper 3 or 4 (Option C)',
    subtopics: [
      // Momentum and impulse
      'Momentum in two dimensions',
      'Conservation of momentum (2D)',
      'Impulse-momentum theorem',
      'Coefficient of restitution',
      'Direct collisions',
      'Oblique collisions',
      'Successive collisions',
      // Work, energy, power
      'Work done by variable forces',
      'Work-energy theorem',
      'Kinetic energy in 2D',
      'Potential energy (gravitational)',
      'Elastic potential energy',
      'Conservation of energy',
      'Power = Fv',
      // Circular motion
      'Angular velocity ω',
      'Angular acceleration α',
      'Centripetal acceleration a = v^2/r = ω^2r',
      'Centripetal force',
      'Horizontal circular motion',
      'Vertical circular motion',
      'Conical pendulum',
      'Banking of roads',
      'Motion inside loops',
      // Simple harmonic motion
      'Defining equation: ẍ = -ω^2x',
      'Solutions: x = A cos(ωt + φ)',
      'Period T = 2π/ω',
      'Velocity: v = ±ω√(A^2 - x^2)',
      'Acceleration: a = -ω^2x',
      'Energy in SHM',
      'Springs and SHM',
      'Simple pendulum',
      'Compound pendulum',
      // Elastic strings and springs
      'Hooke\'s law: T = λx/l',
      'Natural length and extension',
      'Elastic potential energy: E = λx^2/(2l)',
      'Problems with elastic strings',
      'Vertical oscillations',
      // Rotational mechanics
      'Moment of inertia',
      'Angular momentum L = Iω',
      'Rotational kinetic energy: (1/2)Iω^2',
      'Torque and angular acceleration: τ = Iα',
      'Conservation of angular momentum',
      'Combined rotational and linear motion',
    ],
  },

  // ============================================
  // OPTIONAL: DISCRETE MATHEMATICS - Paper 3/4
  // ============================================

  {
    id: 'fm-alevel-aqa-discrete',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Discrete Mathematics',
    description: 'Graph theory, algorithms, networks, and combinatorics',
    icon: '🔗',
    color: 'bg-rose-600',
    paperRestriction: 'Paper 3 or 4 (Option D)',
    subtopics: [
      // Graphs
      'Graph terminology: vertices, edges',
      'Directed and undirected graphs',
      'Weighted graphs',
      'Degree of a vertex',
      'Handshaking lemma',
      'Paths and cycles',
      'Connected graphs',
      'Trees and spanning trees',
      'Complete graphs K_n',
      'Bipartite graphs',
      'Planar graphs',
      'Euler\'s formula: V - E + F = 2',
      'Isomorphic graphs',
      // Network algorithms
      'Minimum spanning trees',
      'Kruskal\'s algorithm',
      'Prim\'s algorithm',
      'Dijkstra\'s algorithm',
      'Shortest path problems',
      'Critical path analysis',
      'Network flow',
      'Maximum flow-minimum cut',
      // Matchings
      'Bipartite matching',
      'Maximum matching',
      'Hall\'s theorem',
      // Eulerian and Hamiltonian
      'Eulerian circuits',
      'Eulerian paths',
      'Route inspection problem',
      'Hamiltonian paths and cycles',
      'Travelling salesperson problem',
      'Nearest neighbour algorithm',
      'Lower bounds for TSP',
      // Linear programming
      'Formulating LP problems',
      'Graphical solution',
      'Simplex algorithm',
      'Integer programming',
      // Recurrence relations
      'First order recurrence relations',
      'Second order recurrence relations',
      'Solving linear recurrence relations',
      'Modelling with recurrence relations',
    ],
  },
];

export function getAQAALevelFurtherMathsTopicById(id: string): Topic | undefined {
  return aqaALevelFurtherMathsTopics.find((topic) => topic.id === id);
}

export function getAQAALevelFurtherMathsCompulsoryTopics(): Topic[] {
  return aqaALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Compulsory')
  );
}

export function getAQAALevelFurtherMathsOptionalTopics(): Topic[] {
  return aqaALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Option')
  );
}
