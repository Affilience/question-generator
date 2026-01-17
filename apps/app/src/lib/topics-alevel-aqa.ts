import { Topic } from '@/types';

/**
 * AQA A Level Mathematics 7357 Specification Topics
 *
 * Three papers, each 2 hours, 100 marks:
 * - Paper 1 (7357/1): Pure Mathematics only
 * - Paper 2 (7357/2): Pure Mathematics + Mechanics
 * - Paper 3 (7357/3): Pure Mathematics + Statistics
 *
 * Content areas:
 * - Pure Mathematics (A-J): All three papers
 * - Statistics (K-O): Paper 3 only
 * - Mechanics (P-S): Paper 2 only
 *
 * Total: 19 content areas
 */

export const aqaALevelTopics: Topic[] = [
  // ============================================
  // PURE MATHEMATICS (A-J) - Papers 1, 2, and 3
  // ============================================

  {
    id: 'alevel-proof',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Proof',
    description: 'Mathematical proof including proof by deduction, exhaustion, and contradiction',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // OT1: Mathematical argument, language and proof
      'Understanding mathematical structure',
      'Constructing mathematical arguments',
      'Using mathematical language precisely',
      'Proof by deduction',
      'Proof by exhaustion',
      'Proof by counter-example',
      'Disproof by counter-example',
      'Proof by contradiction',
      'Critique of attempted proofs',
      'Following a logical argument',
    ],
  },

  {
    id: 'alevel-algebra',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Algebra and Functions',
    description: 'Laws of indices, surds, quadratics, simultaneous equations, inequalities, polynomials, graphs, and functions',
    icon: '📐',
    color: 'bg-purple-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // OT2: Problem solving
      'Mathematical modelling',
      'Problem solving strategies',
      // A1-A9: Core algebra
      'Laws of indices (including rational exponents)',
      'Use and manipulation of surds',
      'Rationalising denominators',
      'Quadratic functions and graphs',
      'Completing the square',
      'Discriminant and nature of roots',
      'Solving quadratic equations',
      'Solving simultaneous equations (linear and quadratic)',
      'Solving linear and quadratic inequalities',
      'Expressing solutions using set notation',
      'Representing inequalities graphically',
      // Polynomials
      'Manipulating polynomials algebraically',
      'Factor theorem',
      'Polynomial division',
      'Remainder theorem',
      // Graphs
      'Graphs of linear functions',
      'Graphs of quadratic functions',
      'Graphs of cubic functions',
      'Graphs of quartic functions',
      'Graphs of reciprocal functions y = 1/x and y = 1/x^2',
      'Graphs of y = a^x and y = log_a(x)',
      'Graphs of trigonometric functions',
      'Modulus function and its graph',
      'Points of intersection of graphs',
      'Translations of graphs: y = f(x) + a, y = f(x + a)',
      'Stretches of graphs: y = af(x), y = f(ax)',
      'Reflections of graphs',
      'Combined transformations',
      // Functions
      'Function notation and domain/range',
      'Composite functions',
      'Inverse functions and their graphs',
      'Modulus equations and inequalities',
      // Partial fractions
      'Partial fractions (linear factors)',
      'Partial fractions (repeated linear factors)',
      'Partial fractions (irreducible quadratic factors)',
    ],
  },

  {
    id: 'alevel-coordinate-geometry',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Coordinate Geometry',
    description: 'Straight line equations, circles, parametric equations, and coordinate geometry in two dimensions',
    icon: '📍',
    color: 'bg-blue-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Straight lines
      'Equation of a straight line: y - y1 = m(x - x1)',
      'Gradient and y-intercept',
      'Conditions for parallel lines',
      'Conditions for perpendicular lines',
      'Length of a line segment',
      'Midpoint of a line segment',
      // Circles
      'Equation of a circle (x-a)^2 + (y-b)^2 = r^2',
      'Finding centre and radius from equation',
      'Circle properties: tangent perpendicular to radius',
      'Circle properties: perpendicular from centre bisects chord',
      'Finding equations of tangents to circles',
      'Finding equations of normals to circles',
      'Intersection of lines and circles',
      // Parametric equations
      'Parametric equations of curves',
      'Converting between parametric and Cartesian forms',
      'Differentiating parametrically: dy/dx',
      'Sketching parametric curves',
      'Finding points of intersection (parametric)',
    ],
  },

  {
    id: 'alevel-sequences-series',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Sequences and Series',
    description: 'Arithmetic and geometric sequences, sigma notation, and binomial expansion',
    icon: '🔢',
    color: 'bg-cyan-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Binomial expansion
      'Binomial expansion for positive integer n',
      'Binomial coefficients and notation',
      'Using binomial expansion to find coefficients',
      'Approximations using binomial expansion',
      'Binomial expansion for rational n',
      'Range of validity for binomial expansion',
      // Arithmetic sequences
      'nth term of arithmetic sequences: a + (n-1)d',
      'Sum of arithmetic series: Sn = n/2(2a + (n-1)d)',
      'Sum of first n natural numbers',
      'Arithmetic mean',
      // Geometric sequences
      'nth term of geometric sequences: ar^(n-1)',
      'Sum of geometric series: Sn = a(1-r^n)/(1-r)',
      'Sum to infinity (convergent series)',
      'Condition for convergence: |r| < 1',
      'Geometric mean',
      // Sigma notation
      'Sigma notation for sums',
      'Manipulating sigma notation',
      'Recurrence relations',
      'Increasing, decreasing, periodic sequences',
    ],
  },

  {
    id: 'alevel-trigonometry',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Trigonometry',
    description: 'Trigonometric functions, identities, equations, and inverse trigonometric functions',
    icon: '📐',
    color: 'bg-orange-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Basic trigonometry
      'Sine, cosine, tangent definitions',
      'Exact values (0, 30, 45, 60, 90 degrees)',
      'Sine and cosine rules',
      'Area of triangle: (1/2)ab sin C',
      // Radians
      'Radian measure',
      'Converting between degrees and radians',
      'Arc length: s = r theta',
      'Sector area: A = (1/2)r^2 theta',
      // Trigonometric graphs
      'Graphs of sin x, cos x, tan x',
      'Period, amplitude, phase shifts',
      'Transformations of trigonometric graphs',
      // Trigonometric identities
      'tan x = sin x / cos x',
      'sin^2 x + cos^2 x = 1',
      'sec x, cosec x, cot x definitions',
      '1 + tan^2 x = sec^2 x',
      '1 + cot^2 x = cosec^2 x',
      // Compound and double angle formulae
      'sin(A + B) and sin(A - B)',
      'cos(A + B) and cos(A - B)',
      'tan(A + B) and tan(A - B)',
      'sin 2A = 2 sin A cos A',
      'cos 2A (three forms)',
      'tan 2A',
      // R-formula
      'a sin x + b cos x = R sin(x + alpha)',
      'a cos x + b sin x = R cos(x - alpha)',
      // Inverse functions
      'Inverse trigonometric functions: arcsin, arccos, arctan',
      'Principal values and domains',
      // Trigonometric equations
      'Solving trigonometric equations',
      'Multiple solutions in given range',
      'Using identities to solve equations',
      'Small angle approximations',
    ],
  },

  {
    id: 'alevel-exponentials-logarithms',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Exponentials and Logarithms',
    description: 'Exponential and logarithmic functions, laws of logarithms, and natural logarithms',
    icon: '📈',
    color: 'bg-emerald-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Exponential functions
      'Graphs of exponential functions y = a^x',
      'Properties of exponential functions',
      'The exponential function e^x',
      'Natural exponential e = 2.718...',
      'Exponential growth and decay',
      // Logarithms
      'Logarithms and their properties',
      'Converting between exponential and logarithmic form',
      'Natural logarithm ln x',
      'Graphs of logarithmic functions',
      // Laws of logarithms
      'log_a(xy) = log_a(x) + log_a(y)',
      'log_a(x/y) = log_a(x) - log_a(y)',
      'log_a(x^n) = n log_a(x)',
      'Change of base formula',
      // Solving equations
      'Solving equations using logarithms',
      'Solving equations of the form a^x = b',
      'Equations reducible to quadratics in e^x',
      // Modelling
      'Exponential models in context',
      'Using logarithms to linearise data',
      'Determining unknown constants from data',
    ],
  },

  {
    id: 'alevel-differentiation',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Differentiation',
    description: 'Derivatives of standard functions, chain rule, product rule, quotient rule, and applications',
    icon: '📉',
    color: 'bg-red-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // First principles
      'Differentiation from first principles',
      'Understanding derivative as rate of change',
      'Understanding derivative as gradient of tangent',
      // Standard derivatives
      'Differentiating x^n for all rational n',
      'Differentiating e^(kx)',
      'Differentiating a^(kx)',
      'Differentiating ln x',
      'Differentiating sin(kx), cos(kx), tan(kx)',
      'Differentiating sec x, cosec x, cot x',
      // Differentiation rules
      'Sum/difference rule',
      'Chain rule',
      'Product rule',
      'Quotient rule',
      'Implicit differentiation',
      // Higher derivatives
      'Second derivative d^2y/dx^2',
      'Higher order derivatives',
      // Parametric differentiation
      'Differentiation of parametric equations',
      'Finding dy/dx from parametric form',
      // Applications
      'Equations of tangents',
      'Equations of normals',
      'Stationary points and their nature',
      'Points of inflection',
      'Optimisation problems',
      'Rates of change',
      'Connected rates of change',
      'Related rates problems',
    ],
  },

  {
    id: 'alevel-integration',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Integration',
    description: 'Integration as reverse of differentiation, definite integrals, areas, volumes, and methods of integration',
    icon: '∫',
    color: 'bg-pink-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Basic integration
      'Integration as reverse of differentiation',
      'Integrating x^n (n != -1)',
      'Integrating e^(kx)',
      'Integrating 1/x',
      'Integrating sin(kx), cos(kx)',
      'Integrating sec^2(kx)',
      'Integrating cosec x cot x, sec x tan x',
      'Integrating cosec^2 x',
      // Reverse chain rule
      'Integrating functions of the form f(ax + b)',
      'Recognising reverse chain rule patterns',
      // Methods of integration
      'Integration by substitution',
      'Integration by parts',
      'Integrating using partial fractions',
      'Integrating using trigonometric identities',
      'Standard results and formulae',
      // Definite integrals
      'Definite integration',
      'Area under a curve',
      'Area between curve and y-axis',
      'Area between two curves',
      'Areas involving negative regions',
      // Parametric integration
      'Integration of parametric curves',
      // Differential equations
      'Solving first-order differential equations',
      'Separation of variables',
      'General and particular solutions',
      'Initial conditions',
      'Modelling with differential equations',
      // Volumes
      'Volume of revolution about x-axis',
      'Volume of revolution about y-axis',
      // Trapezium rule
      'Numerical integration: trapezium rule',
      'Understanding accuracy of trapezium rule',
    ],
  },

  {
    id: 'alevel-numerical-methods',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Numerical Methods',
    description: 'Locating roots, iteration, and the Newton-Raphson method',
    icon: '~=',
    color: 'bg-slate-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Root finding
      'Locating roots by change of sign',
      'Sign change within an interval',
      'Interval bisection',
      // Iteration
      'Fixed point iteration',
      'Rearranging equations into iterative form',
      'Cobweb and staircase diagrams',
      'Conditions for convergence',
      // Newton-Raphson
      'Newton-Raphson method',
      'Deriving iterative formula',
      'Applying Newton-Raphson',
      'Rate of convergence',
      // Limitations
      'Cases where methods fail',
      'Comparing convergence of methods',
      'Error bounds and accuracy',
    ],
  },

  {
    id: 'alevel-vectors',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Vectors',
    description: 'Vectors in 2D and 3D, magnitude, direction, position vectors, and geometric applications',
    icon: '➡️',
    color: 'bg-violet-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // Vector basics
      'Vectors in 2D and 3D',
      'Column vector notation',
      'i, j, k unit vector notation',
      'Position vectors',
      'Displacement vectors',
      // Operations
      'Adding and subtracting vectors',
      'Scalar multiplication',
      'Finding magnitude of vectors',
      'Unit vectors',
      // Geometric applications
      'Direction vectors',
      'Distance between two points',
      'Midpoint of line segment',
      'Dividing a line in a given ratio',
      'Showing points are collinear',
      // Scalar product
      'Scalar (dot) product definition',
      'Finding angle between vectors',
      'Perpendicular vectors (dot product = 0)',
      'Using scalar product for geometric problems',
    ],
  },

  // ============================================
  // STATISTICS (K-O) - Paper 2 only
  // ============================================

  {
    id: 'alevel-statistical-sampling',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Statistical Sampling',
    description: 'Populations, samples, and sampling methods',
    icon: '🎯',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      'Population and sample',
      'Census vs sample',
      'Advantages and disadvantages of sampling',
      'Simple random sampling',
      'Systematic sampling',
      'Stratified sampling',
      'Quota sampling',
      'Opportunity (convenience) sampling',
      'Bias in sampling',
      'Understanding when to use each method',
      // Large data set
      'Working with the large data set',
      'Using technology to explore data',
      'Familiarity with data set context',
    ],
  },

  {
    id: 'alevel-data-presentation',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Data Presentation and Interpretation',
    description: 'Representing data, measures of central tendency and spread, correlation and regression',
    icon: '📊',
    color: 'bg-yellow-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // Single variable data
      'Interpreting histograms',
      'Frequency polygons',
      'Cumulative frequency diagrams',
      'Box plots (box and whisker)',
      // Measures of location
      'Mean from raw and grouped data',
      'Median from raw and grouped data',
      'Mode and modal class',
      'Interpolation for median',
      'Choosing appropriate average',
      // Measures of spread
      'Range',
      'Interquartile range (IQR)',
      'Percentiles',
      'Variance and standard deviation',
      'Calculating variance: Var(X) = E(X^2) - [E(X)]^2',
      'Standard deviation from raw data',
      'Standard deviation from grouped data',
      // Outliers
      'Identifying outliers',
      'Outliers using IQR (1.5 x IQR rule)',
      'Cleaning data',
      // Coding
      'Linear coding of data',
      'Effect of coding on mean and standard deviation',
      // Bivariate data
      'Scatter diagrams',
      'Correlation: positive, negative, none',
      'Product moment correlation coefficient (PMCC)',
      'Interpreting correlation',
      'Regression lines',
      'Least squares regression line',
      'Equation of regression line',
      'Using regression for prediction',
      'Interpolation vs extrapolation',
    ],
  },

  {
    id: 'alevel-probability',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Probability',
    description: 'Probability laws, tree diagrams, Venn diagrams, and conditional probability',
    icon: '🎲',
    color: 'bg-lime-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // Basic probability
      'Probability from experiments',
      'Probability from equally likely outcomes',
      'Sample space diagrams',
      // Set notation
      "Set notation: A', A intersection B, A union B",
      'Venn diagrams',
      'Mutually exclusive events',
      'Independent events',
      // Probability laws
      'Addition law: P(A or B) = P(A) + P(B) - P(A and B)',
      'Multiplication law: P(A and B) = P(A) x P(B|A)',
      'Complement: P(A\') = 1 - P(A)',
      // Tree diagrams
      'Tree diagrams with and without replacement',
      'Calculating probabilities from tree diagrams',
      // Conditional probability
      'Conditional probability: P(A|B)',
      'P(A|B) = P(A and B) / P(B)',
      'Independence: P(A|B) = P(A)',
      'Problems involving conditional probability',
    ],
  },

  {
    id: 'alevel-statistical-distributions',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Statistical Distributions',
    description: 'Discrete and continuous distributions including binomial and normal',
    icon: '🔔',
    color: 'bg-teal-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // Discrete distributions
      'Discrete random variables',
      'Probability distributions',
      'Expected value E(X)',
      'Variance Var(X)',
      'E(aX + b) and Var(aX + b)',
      // Binomial distribution
      'Binomial distribution: X ~ B(n, p)',
      'Conditions for binomial distribution',
      'Calculating binomial probabilities',
      'Mean of binomial: E(X) = np',
      'Variance of binomial: Var(X) = np(1-p)',
      'Using binomial tables',
      'Cumulative binomial probabilities',
      // Normal distribution
      'Normal distribution: X ~ N(mu, sigma^2)',
      'Standard normal distribution Z ~ N(0, 1)',
      'Properties of normal distribution',
      'Using normal distribution tables',
      'Finding probabilities using normal distribution',
      'Inverse normal: finding x from probability',
      'Standardising: Z = (X - mu)/sigma',
      // Modelling
      'Selecting appropriate distribution',
      'Approximations between distributions',
      'Binomial approximation to normal',
    ],
  },

  {
    id: 'alevel-hypothesis-testing',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Statistical Hypothesis Testing',
    description: 'Hypothesis tests for population parameters using binomial and normal distributions',
    icon: '📋',
    color: 'bg-rose-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // Fundamentals
      'Null hypothesis H0 and alternative hypothesis H1',
      'Significance level',
      'One-tailed and two-tailed tests',
      'Test statistic',
      'Critical region and critical values',
      'p-value interpretation',
      // Binomial hypothesis tests
      'Hypothesis test for proportion using binomial',
      'Setting up binomial hypothesis test',
      'Finding critical region',
      'Interpreting results in context',
      // Normal hypothesis tests
      'Hypothesis test for mean using normal distribution',
      'Z-test for population mean',
      'Test for mean with known variance',
      'Interpreting p-values',
      // Correlation hypothesis test
      'Hypothesis test for correlation coefficient',
      'Test for no correlation (rho = 0)',
      'Using tables of critical values',
      'Interpreting correlation test results',
      // Conclusions
      'Drawing conclusions from hypothesis tests',
      'Type I and Type II errors',
    ],
  },

  // ============================================
  // MECHANICS (P-S) - Paper 2 only
  // ============================================

  {
    id: 'alevel-quantities-units',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Quantities and Units in Mechanics',
    description: 'SI units, scalars, vectors, and fundamental mechanical quantities',
    icon: '📏',
    color: 'bg-stone-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      'SI base units',
      'Derived units',
      'Converting between units',
      'Scalar quantities',
      'Vector quantities',
      'Displacement, velocity, acceleration',
      'Force, weight, mass',
      'Momentum',
      'Understanding dimensions',
    ],
  },

  {
    id: 'alevel-kinematics',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Kinematics',
    description: 'Motion in a straight line and in a plane, including projectiles',
    icon: '🏃',
    color: 'bg-sky-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 1D motion
      'Displacement-time graphs',
      'Velocity-time graphs',
      'Acceleration-time graphs',
      'Area under velocity-time graph',
      'Gradient of displacement-time graph',
      // SUVAT equations
      'v = u + at',
      's = ut + (1/2)at^2',
      's = vt - (1/2)at^2',
      'v^2 = u^2 + 2as',
      's = (1/2)(u + v)t',
      'Deriving and using SUVAT equations',
      // Vertical motion
      'Motion under gravity',
      'Free fall problems',
      'Objects thrown vertically',
      // Variable acceleration
      'Using calculus for variable acceleration',
      'v = ds/dt',
      'a = dv/dt',
      's = integral of v dt',
      'v = integral of a dt',
      // 2D motion
      'Position vectors',
      'Velocity vectors',
      'Acceleration vectors',
      'Resolving motion into components',
      // Projectiles
      'Projectile motion',
      'Horizontal and vertical components',
      'Time of flight',
      'Maximum height',
      'Range',
      'Trajectory equation',
    ],
  },

  {
    id: 'alevel-forces-newtons-laws',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Forces and Newton\'s Laws',
    description: 'Force diagrams, Newton\'s laws, friction, and connected particles',
    icon: '⚖️',
    color: 'bg-orange-700',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // Forces
      'Types of forces',
      'Weight: W = mg',
      'Normal reaction force',
      'Tension in strings',
      'Compression in rods',
      'Friction force',
      'Air resistance',
      // Force diagrams
      'Drawing force diagrams',
      'Resolving forces',
      'Equilibrium of forces',
      // Newton\'s laws
      'Newton\'s first law',
      'Newton\'s second law: F = ma',
      'Newton\'s third law',
      'Application of F = ma',
      // Friction
      'Coefficient of friction: mu',
      'F <= mu R',
      'Limiting equilibrium: F = mu R',
      'Objects on inclined planes',
      'Friction problems on slopes',
      // Connected particles
      'Particles connected by strings',
      'Pulleys',
      'Objects in contact',
      'Towing problems',
      'Lifts and acceleration',
      // Momentum
      'Momentum: p = mv',
      'Conservation of momentum',
      'Impulse: I = Ft = change in momentum',
      'Collisions',
    ],
  },

  {
    id: 'alevel-moments',
    examBoard: 'aqa',
    qualification: 'a-level',
    name: 'Moments',
    description: 'Moments of forces, equilibrium of rigid bodies, and centres of mass',
    icon: '🔄',
    color: 'bg-fuchsia-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // Moments basics
      'Moment of a force',
      'Moment = Force x perpendicular distance',
      'Clockwise and anticlockwise moments',
      'Principle of moments',
      // Equilibrium
      'Conditions for equilibrium',
      'Sum of moments equals zero',
      'Sum of forces equals zero',
      'Equilibrium problems',
      // Rigid bodies
      'Uniform beams and rods',
      'Non-uniform rods',
      'Pivots and supports',
      'Reactions at supports',
      // Centres of mass
      'Centre of mass of particles',
      'Centre of mass of uniform shapes',
      'Composite shapes',
      // Tilting and toppling
      'Tilting problems',
      'Finding tipping points',
      'Equilibrium on slopes',
    ],
  },
];

export function getALevelAQATopicById(id: string): Topic | undefined {
  return aqaALevelTopics.find((topic) => topic.id === id);
}

export function getALevelAQATopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  switch (paper) {
    case 1:
      // Paper 1: Pure only
      return aqaALevelTopics.filter(t => t.paperRestriction?.includes('1'));
    case 2:
      // Paper 2: Pure + Mechanics
      return aqaALevelTopics.filter(t =>
        t.paperRestriction?.includes('2') || t.paperRestriction?.includes('Paper 2')
      );
    case 3:
      // Paper 3: Pure + Statistics
      return aqaALevelTopics.filter(t =>
        t.paperRestriction?.includes('3') || t.paperRestriction?.includes('Paper 3')
      );
    default:
      return aqaALevelTopics;
  }
}
