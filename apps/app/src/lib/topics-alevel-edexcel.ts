import { Topic } from '@/types';

/**
 * Edexcel (Pearson) A Level Mathematics 9MA0 Specification Topics
 *
 * Three papers, each 2 hours, 100 marks:
 * - Paper 1 (9MA0/01): Pure Mathematics 1
 * - Paper 2 (9MA0/02): Pure Mathematics 2
 * - Paper 3 (9MA0/03): Statistics and Mechanics
 *   - Section A: Statistics (approx 50 marks)
 *   - Section B: Mechanics (approx 50 marks)
 *
 * Content areas:
 * - Pure Mathematics (Topics 1-10): Papers 1 and 2
 * - Statistics (Topics 11-15): Paper 3 Section A
 * - Mechanics (Topics 16-19): Paper 3 Section B
 *
 * All papers are calculator papers.
 * Large Data Set: Students must be familiar with the Edexcel large data set.
 *
 * Total: 19 content areas (same structure as AQA, different paper distribution)
 */

export const edexcelALevelTopics: Topic[] = [
  // ============================================
  // PURE MATHEMATICS (Topics 1-10) - Papers 1 & 2
  // ============================================

  {
    id: 'edexcel-alevel-proof',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Proof',
    description: 'Mathematical proof including proof by deduction, exhaustion, and contradiction',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1/AS content
      'Understanding mathematical structure',
      'Constructing mathematical arguments',
      'Using mathematical language precisely',
      'Proof by deduction',
      'Proof by exhaustion',
      'Disproof by counter-example',
      // Year 2 content
      'Proof by contradiction',
      'Proving irrationality (e.g., √2)',
      'Proving infinitely many primes',
      'Critique and analysis of mathematical arguments',
      'Following logical arguments to conclusions',
    ],
  },

  {
    id: 'edexcel-alevel-algebra',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Algebra and Functions',
    description: 'Laws of indices, surds, quadratics, simultaneous equations, inequalities, polynomials, partial fractions, and functions',
    icon: '📐',
    color: 'bg-purple-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Algebraic Expressions
      'Laws of indices (integer, fractional, negative)',
      'Expanding brackets and simplifying',
      'Factorising quadratics and cubics',
      'Manipulating surds',
      'Rationalising denominators (single and compound)',
      // Year 1 - Quadratics
      'Quadratic functions and graphs',
      'Completing the square',
      'Solving quadratic equations (factorise, formula, complete square)',
      'Discriminant and nature of roots',
      'Quadratic inequalities',
      // Year 1 - Equations and Inequalities
      'Solving linear simultaneous equations',
      'Solving simultaneous equations (one linear, one quadratic)',
      'Linear inequalities',
      'Representing inequalities graphically',
      'Set notation for solutions',
      // Year 1 - Graphs and Transformations
      'Graphs of cubic functions',
      'Graphs of quartic functions',
      'Graphs of reciprocal functions y = k/x and y = k/x²',
      'Points of intersection of graphs',
      'Translations: y = f(x + a), y = f(x) + a',
      'Stretches: y = f(ax), y = af(x)',
      'Reflections: y = f(-x), y = -f(x)',
      'Combined transformations',
      // Year 1 - Algebraic Methods
      'Algebraic fractions (simplifying, adding, subtracting)',
      'Polynomial division',
      'Factor theorem: f(a) = 0 implies (x - a) is a factor',
      'Remainder theorem',
      // Year 2 - Functions
      'Function notation and definitions',
      'Domain and range',
      'Composite functions: fg(x) = f(g(x))',
      'Inverse functions and their graphs',
      'Modulus function |x| and |f(x)|',
      'Graphs of y = |f(x)| and y = f(|x|)',
      'Solving modulus equations',
      'Solving modulus inequalities',
      // Year 2 - Partial Fractions
      'Partial fractions with linear factors',
      'Partial fractions with repeated linear factors',
      'Partial fractions with improper fractions',
    ],
  },

  {
    id: 'edexcel-alevel-coordinate-geometry',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Coordinate Geometry',
    description: 'Straight lines, circles, parametric equations, and coordinate geometry in the (x, y) plane',
    icon: '📍',
    color: 'bg-blue-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Straight Line Graphs
      'Equation of a line: y = mx + c and y - y₁ = m(x - x₁)',
      'Gradient of a line from two points',
      'Length of a line segment',
      'Midpoint of a line segment',
      'Parallel lines (same gradient)',
      'Perpendicular lines (m₁m₂ = -1)',
      'Finding equations of parallel/perpendicular lines',
      // Year 1 - Circles
      'Equation of a circle: (x - a)² + (y - b)² = r²',
      'Finding centre and radius from equation',
      'Completing the square to find centre and radius',
      'Circle properties: tangent perpendicular to radius',
      'Circle properties: perpendicular bisector of chord passes through centre',
      'Finding tangent equations to circles',
      'Finding normal equations to circles',
      'Intersection of lines and circles',
      // Year 2 - Parametric Equations
      'Parametric equations of curves',
      'Converting parametric to Cartesian form',
      'Sketching parametric curves',
      'Finding intersections of parametric curves',
      'Domain restrictions with parametric equations',
    ],
  },

  {
    id: 'edexcel-alevel-sequences-series',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Sequences and Series',
    description: 'Arithmetic and geometric sequences, sigma notation, and binomial expansion',
    icon: '🔢',
    color: 'bg-cyan-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Binomial Expansion
      'Pascal\'s triangle',
      'Factorial notation and nCr',
      'Binomial expansion of (a + b)ⁿ for positive integer n',
      'Finding specific terms in binomial expansions',
      'Binomial coefficient calculations',
      'Binomial estimation and approximations',
      // Year 2 - Sequences and Series
      'Arithmetic sequences: nth term uₙ = a + (n-1)d',
      'Arithmetic series: Sₙ = n/2(2a + (n-1)d)',
      'Arithmetic series: Sₙ = n/2(a + l)',
      'Sum of first n natural numbers',
      'Geometric sequences: nth term uₙ = arⁿ⁻¹',
      'Geometric series: Sₙ = a(1 - rⁿ)/(1 - r)',
      'Sum to infinity: S∞ = a/(1 - r) for |r| < 1',
      'Convergence condition |r| < 1',
      'Sigma notation (Σ)',
      'Recurrence relations: uₙ₊₁ = f(uₙ)',
      'Increasing, decreasing, and periodic sequences',
      // Year 2 - Extended Binomial
      'Binomial expansion of (1 + x)ⁿ for rational n',
      'Binomial expansion of (a + bx)ⁿ for rational n',
      'Range of validity for binomial expansions',
      'Using binomial expansion for approximations',
    ],
  },

  {
    id: 'edexcel-alevel-trigonometry',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Trigonometry',
    description: 'Trigonometric functions, identities, equations, and inverse functions',
    icon: '📐',
    color: 'bg-orange-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Basic Trigonometry
      'Sine, cosine, and tangent ratios',
      'Exact values for 0°, 30°, 45°, 60°, 90°',
      'Sine rule: a/sin A = b/sin B = c/sin C',
      'Cosine rule: a² = b² + c² - 2bc cos A',
      'Area of triangle: ½ab sin C',
      'Solving problems involving triangles',
      // Year 1 - Graphs and Transformations
      'Graphs of sin x, cos x, tan x',
      'Amplitude, period, and phase',
      'Transformations of trigonometric graphs',
      // Year 1 - Identities and Equations
      'CAST diagram for signs in quadrants',
      'Principal values',
      'tan θ = sin θ / cos θ',
      'sin²θ + cos²θ = 1',
      'Solving trigonometric equations in given range',
      // Year 2 - Radians
      'Radian measure',
      'Converting between degrees and radians',
      'Arc length: s = rθ',
      'Sector area: A = ½r²θ',
      'Segment area calculations',
      // Year 2 - Small Angle Approximations
      'sin θ ≈ θ (θ in radians)',
      'cos θ ≈ 1 - θ²/2',
      'tan θ ≈ θ',
      // Year 2 - Reciprocal and Inverse Functions
      'sec θ = 1/cos θ',
      'cosec θ = 1/sin θ',
      'cot θ = 1/tan θ = cos θ/sin θ',
      'Graphs of sec, cosec, cot',
      '1 + tan²θ = sec²θ',
      '1 + cot²θ = cosec²θ',
      'arcsin, arccos, arctan functions',
      'Domains and ranges of inverse trig functions',
      // Year 2 - Compound and Double Angle
      'sin(A ± B) formulae',
      'cos(A ± B) formulae',
      'tan(A ± B) formulae',
      'sin 2A = 2 sin A cos A',
      'cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A',
      'tan 2A = 2tan A/(1 - tan²A)',
      // Year 2 - R-formula
      'a sin θ + b cos θ = R sin(θ + α)',
      'a cos θ + b sin θ = R cos(θ - α)',
      'Finding R and α',
      'Using R-formula to solve equations',
      'Using R-formula to find max/min values',
      // Year 2 - Proving Identities
      'Proving trigonometric identities',
      'Solving complex trigonometric equations',
    ],
  },

  {
    id: 'edexcel-alevel-exponentials-logarithms',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Exponentials and Logarithms',
    description: 'Exponential and logarithmic functions, laws of logarithms, and modelling',
    icon: 'e',
    color: 'bg-emerald-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Exponential Functions
      'Exponential functions y = aˣ',
      'Graphs of exponential functions',
      'The natural number e = 2.718...',
      'The function y = eˣ and its graph',
      // Year 1 - Logarithms
      'Logarithms as inverse of exponentials',
      'Converting between exponential and log form',
      'Laws of logarithms: log(xy) = log x + log y',
      'Laws of logarithms: log(x/y) = log x - log y',
      'Laws of logarithms: log(xⁿ) = n log x',
      'Natural logarithms: ln x = logₑ x',
      'Graphs of logarithmic functions',
      'Solving equations using logarithms',
      // Year 1 - Modelling
      'Exponential growth and decay',
      'Modelling with y = Aeᵏᵗ',
      'Using logarithms to linearise data',
      // Year 2 - Extended Content
      'Change of base formula',
      'Equations with logs of different bases',
      'Equations reducible to quadratics in eˣ or ln x',
      'Modelling real-world exponential processes',
      'Finding constants from experimental data',
    ],
  },

  {
    id: 'edexcel-alevel-differentiation',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Differentiation',
    description: 'Derivatives, chain rule, product rule, quotient rule, implicit and parametric differentiation',
    icon: 'd/dx',
    color: 'bg-red-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - From First Principles
      'Differentiation from first principles',
      'Understanding derivative as gradient of tangent',
      'Understanding derivative as rate of change',
      // Year 1 - Basic Differentiation
      'Differentiating xⁿ for all rational n',
      'Differentiating sums and differences',
      'Differentiating polynomials',
      // Year 1 - Applications
      'Equations of tangents to curves',
      'Equations of normals to curves',
      'Finding stationary points',
      'Classifying stationary points (first derivative test)',
      'Second derivative test for max/min',
      'Sketching curves using calculus',
      'Optimisation problems',
      // Year 2 - Chain Rule
      'Chain rule: dy/dx = (dy/du)(du/dx)',
      'Differentiating composite functions',
      'Differentiating f(ax + b)',
      // Year 2 - Standard Derivatives
      'Differentiating eˣ and e^(kx)',
      'Differentiating aˣ',
      'Differentiating ln x and ln(f(x))',
      'Differentiating sin x, cos x, tan x',
      'Differentiating sin(kx), cos(kx), tan(kx)',
      'Differentiating sec x, cosec x, cot x',
      // Year 2 - Product and Quotient Rules
      'Product rule: d/dx(uv) = u(dv/dx) + v(du/dx)',
      'Quotient rule: d/dx(u/v) = (v(du/dx) - u(dv/dx))/v²',
      // Year 2 - Implicit Differentiation
      'Implicit differentiation',
      'Finding dy/dx from implicit equations',
      'Tangents and normals to implicit curves',
      // Year 2 - Parametric Differentiation
      'Parametric differentiation: dy/dx = (dy/dt)/(dx/dt)',
      'Tangents and normals to parametric curves',
      'Second derivatives of parametric curves',
      // Year 2 - Connected Rates
      'Related rates of change',
      'Using chain rule for connected rates',
      'Modelling with rates of change',
    ],
  },

  {
    id: 'edexcel-alevel-integration',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Integration',
    description: 'Integration techniques, definite integrals, areas, volumes, and differential equations',
    icon: '∫',
    color: 'bg-pink-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Basic Integration
      'Integration as reverse of differentiation',
      'Integrating xⁿ (n ≠ -1)',
      'Integrating polynomials',
      'Finding functions from derivatives',
      'Constant of integration',
      // Year 1 - Definite Integration
      'Definite integrals and evaluation',
      'Area under a curve',
      'Area between curve and x-axis',
      'Areas involving negative regions',
      // Year 2 - Standard Integrals
      'Integrating eˣ and e^(kx)',
      'Integrating 1/x (giving ln|x|)',
      'Integrating sin(kx) and cos(kx)',
      'Integrating sec²(kx)',
      'Integrating cosec²x, sec x tan x, cosec x cot x',
      // Year 2 - Integration Techniques
      'Integrating f(ax + b) using recognition',
      'Reverse chain rule patterns',
      'Using trigonometric identities for integration',
      'Integration by substitution',
      'Integration by parts',
      'Integrating using partial fractions',
      // Year 2 - Applications
      'Area under parametric curves',
      'Area between two curves',
      'Trapezium rule for numerical integration',
      'Improving accuracy with more strips',
      // Year 2 - Differential Equations
      'Solving dy/dx = f(x)',
      'Separation of variables',
      'General and particular solutions',
      'Initial conditions and boundary conditions',
      'Modelling with differential equations',
      'Exponential growth and decay models',
    ],
  },

  {
    id: 'edexcel-alevel-numerical-methods',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Numerical Methods',
    description: 'Locating roots, iteration, and the Newton-Raphson method',
    icon: '≈',
    color: 'bg-slate-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Root Finding
      'Locating roots by change of sign',
      'Sign change in continuous functions',
      'Interval containing a root',
      'Limitations of sign change methods',
      // Iteration
      'Fixed point iteration: xₙ₊₁ = g(xₙ)',
      'Rearranging f(x) = 0 to x = g(x)',
      'Different rearrangements for same equation',
      'Cobweb diagrams for iteration',
      'Staircase diagrams for iteration',
      'Convergence and divergence of iterations',
      // Newton-Raphson
      'Newton-Raphson method: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
      'Graphical interpretation of Newton-Raphson',
      'Rate of convergence',
      'Cases where Newton-Raphson fails',
      // Comparison
      'Comparing iterative methods',
      'Error bounds and accuracy',
      'Choosing appropriate methods',
    ],
  },

  {
    id: 'edexcel-alevel-vectors',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Vectors',
    description: 'Vectors in 2D and 3D, magnitude, direction, and geometric applications',
    icon: '→',
    color: 'bg-violet-600',
    paperRestriction: 'Papers 1 & 2',
    subtopics: [
      // Year 1 - Vector Basics
      'Vectors in 2D: column notation and i, j notation',
      'Magnitude of a vector: |a| = √(x² + y²)',
      'Direction of a vector',
      'Unit vectors',
      'Position vectors',
      'Displacement vectors',
      // Year 1 - Vector Operations
      'Adding and subtracting vectors',
      'Scalar multiplication',
      'Parallel vectors',
      // Year 1 - Geometric Problems
      'Using vectors for geometric proofs',
      'Finding position vectors',
      'Showing points are collinear',
      'Finding ratios in which points divide lines',
      // Year 2 - 3D Vectors
      'Vectors in 3D: column notation and i, j, k notation',
      'Magnitude in 3D: |a| = √(x² + y² + z²)',
      'Distance between points in 3D',
      'Midpoints in 3D',
      // Year 2 - Scalar Product
      'Scalar (dot) product: a · b',
      'a · b = |a||b| cos θ',
      'a · b = x₁x₂ + y₁y₂ + z₁z₂',
      'Finding angles between vectors',
      'Perpendicular vectors: a · b = 0',
      'Applications of scalar product',
    ],
  },

  // ============================================
  // STATISTICS (Topics 11-15) - Paper 3 Section A
  // ============================================

  {
    id: 'edexcel-alevel-statistical-sampling',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Statistical Sampling',
    description: 'Populations, samples, sampling methods, and the large data set',
    icon: '📊',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 3 (Statistics)',
    subtopics: [
      // Populations and Samples
      'Population and sample definitions',
      'Census vs sample survey',
      'Advantages of sampling',
      'Sampling frame',
      // Sampling Methods
      'Simple random sampling',
      'Systematic sampling',
      'Stratified sampling',
      'Quota sampling',
      'Opportunity (convenience) sampling',
      'Cluster sampling',
      // Bias
      'Sources of bias in sampling',
      'Reducing bias',
      'Non-response bias',
      // Large Data Set
      'Working with the Edexcel large data set',
      'Context and variables in the large data set',
      'Using technology to explore large data',
      'Interpreting large data set questions',
    ],
  },

  {
    id: 'edexcel-alevel-data-presentation',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Data Presentation and Interpretation',
    description: 'Representing data, measures of location and spread, correlation and regression',
    icon: '📈',
    color: 'bg-yellow-600',
    paperRestriction: 'Paper 3 (Statistics)',
    subtopics: [
      // Year 1 - Data Presentation
      'Histograms (frequency density)',
      'Frequency polygons',
      'Cumulative frequency diagrams',
      'Box plots (box and whisker)',
      'Stem and leaf diagrams',
      'Comparing distributions',
      // Year 1 - Measures of Location
      'Mean from raw data',
      'Mean from grouped data (midpoints)',
      'Median from raw data',
      'Median from grouped data (interpolation)',
      'Mode and modal class',
      'Choosing appropriate measure',
      // Year 1 - Measures of Spread
      'Range',
      'Interquartile range (IQR)',
      'Percentiles',
      'Variance from raw data',
      'Variance from grouped data',
      'Standard deviation',
      'Var(X) = E(X²) - [E(X)]²',
      // Year 1 - Outliers
      'Identifying outliers using IQR',
      'Q₁ - 1.5×IQR and Q₃ + 1.5×IQR',
      'Anomalies and data cleaning',
      // Year 1 - Coding
      'Linear coding: y = ax + b',
      'Effect of coding on mean',
      'Effect of coding on standard deviation',
      // Year 1 - Bivariate Data
      'Scatter diagrams',
      'Describing correlation',
      'Linear regression',
      'Equation of regression line y = a + bx',
      'Using regression for prediction',
      'Interpolation vs extrapolation',
      // Year 2 - Correlation
      'Product moment correlation coefficient (PMCC)',
      'Calculating PMCC',
      'Interpreting PMCC values',
      'Correlation vs causation',
      'Hypothesis test for correlation',
    ],
  },

  {
    id: 'edexcel-alevel-probability',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Probability',
    description: 'Probability laws, Venn diagrams, tree diagrams, and conditional probability',
    icon: 'P',
    color: 'bg-lime-600',
    paperRestriction: 'Paper 3 (Statistics)',
    subtopics: [
      // Year 1 - Basic Probability
      'Calculating probabilities',
      'Probability from equally likely outcomes',
      'Sample space diagrams',
      // Year 1 - Venn Diagrams
      'Venn diagrams',
      'Set notation: A∩B, A∪B, A\'',
      'Two-way tables',
      // Year 1 - Events
      'Mutually exclusive events',
      'Independent events',
      'P(A∪B) = P(A) + P(B) - P(A∩B)',
      'P(A∩B) = P(A) × P(B) for independent events',
      // Year 1 - Tree Diagrams
      'Tree diagrams',
      'Dependent events (without replacement)',
      'Independent events (with replacement)',
      'Calculating probabilities from trees',
      // Year 2 - Conditional Probability
      'Conditional probability P(A|B)',
      'P(A|B) = P(A∩B)/P(B)',
      'Testing for independence using P(A|B) = P(A)',
      'Conditional probability with Venn diagrams',
      'Conditional probability with tree diagrams',
      'Problems involving conditional probability',
    ],
  },

  {
    id: 'edexcel-alevel-statistical-distributions',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Statistical Distributions',
    description: 'Discrete and continuous distributions including binomial and normal',
    icon: '🔔',
    color: 'bg-teal-600',
    paperRestriction: 'Paper 3 (Statistics)',
    subtopics: [
      // Year 1 - Discrete Random Variables
      'Discrete random variables',
      'Probability distributions as tables',
      'Sum of probabilities equals 1',
      'Expected value E(X) = Σx·P(X=x)',
      'Variance Var(X) = E(X²) - [E(X)]²',
      'Standard deviation',
      // Year 1 - Binomial Distribution
      'Binomial distribution X ~ B(n, p)',
      'Conditions for binomial',
      'Calculating P(X = r) = ⁿCᵣpʳ(1-p)ⁿ⁻ʳ',
      'Mean E(X) = np',
      'Variance Var(X) = np(1-p)',
      'Cumulative binomial probabilities',
      'Using binomial tables/calculator',
      // Year 2 - Normal Distribution
      'Normal distribution X ~ N(μ, σ²)',
      'Properties of normal distribution',
      'Standard normal Z ~ N(0, 1)',
      'Standardising: Z = (X - μ)/σ',
      'Finding probabilities using normal distribution',
      'Using normal tables',
      'Using calculator for normal probabilities',
      'Inverse normal: finding x from probability',
      'Finding μ or σ from given probability',
      // Year 2 - Approximations
      'Selecting appropriate distributions',
      'Normal approximation to binomial',
      'Continuity correction',
    ],
  },

  {
    id: 'edexcel-alevel-hypothesis-testing',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Statistical Hypothesis Testing',
    description: 'Hypothesis tests for proportions, means, and correlation',
    icon: 'H₀',
    color: 'bg-rose-600',
    paperRestriction: 'Paper 3 (Statistics)',
    subtopics: [
      // Year 1 - Fundamentals
      'Null hypothesis H₀',
      'Alternative hypothesis H₁',
      'Significance level (1%, 5%, 10%)',
      'One-tailed and two-tailed tests',
      'Test statistic',
      'Critical region and critical values',
      'p-value interpretation',
      // Year 1 - Binomial Tests
      'Hypothesis test for proportion p',
      'Setting up binomial hypothesis test',
      'Finding critical region for binomial',
      'Actual significance level',
      'Interpreting results in context',
      // Year 2 - Normal Tests
      'Sample mean distribution: X̄ ~ N(μ, σ²/n)',
      'Hypothesis test for mean μ',
      'Test statistic for mean',
      'One-sample z-test',
      'Finding critical values',
      // Year 2 - Correlation Tests
      'Hypothesis test for correlation coefficient ρ',
      'H₀: ρ = 0 (no correlation)',
      'Using critical values from tables',
      'Sample size and critical values',
      'Interpreting correlation test results',
      // Conclusions
      'Drawing conclusions from tests',
      'Interpreting in context',
      'Type I errors',
      'Type II errors',
    ],
  },

  // ============================================
  // MECHANICS (Topics 16-19) - Paper 3 Section B
  // ============================================

  {
    id: 'edexcel-alevel-quantities-units',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Quantities and Units in Mechanics',
    description: 'SI units, scalars, vectors, and modelling assumptions',
    icon: 'SI',
    color: 'bg-stone-600',
    paperRestriction: 'Paper 3 (Mechanics)',
    subtopics: [
      // SI Units
      'SI base units: m, kg, s',
      'Derived units: N, m/s, m/s²',
      'Dimensional analysis',
      // Scalars and Vectors
      'Scalar quantities (mass, time, speed, distance)',
      'Vector quantities (displacement, velocity, acceleration, force)',
      'Magnitude and direction',
      // Modelling
      'Mathematical modelling in mechanics',
      'Modelling assumptions',
      'Particle model',
      'Rigid body model',
      'Smooth and rough surfaces',
      'Light and inextensible strings',
      'Limitations of models',
    ],
  },

  {
    id: 'edexcel-alevel-kinematics',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Kinematics',
    description: 'Motion in a straight line, projectiles, and variable acceleration',
    icon: '→',
    color: 'bg-sky-600',
    paperRestriction: 'Paper 3 (Mechanics)',
    subtopics: [
      // Year 1 - Graphs
      'Displacement-time graphs',
      'Velocity-time graphs',
      'Gradient of displacement-time = velocity',
      'Gradient of velocity-time = acceleration',
      'Area under velocity-time = displacement',
      // Year 1 - SUVAT
      'v = u + at',
      's = ut + ½at²',
      's = vt - ½at²',
      'v² = u² + 2as',
      's = ½(u + v)t',
      'Using SUVAT equations',
      'Choosing appropriate SUVAT equation',
      // Year 1 - Vertical Motion
      'Motion under gravity (g = 9.8 m/s²)',
      'Objects falling freely',
      'Objects thrown vertically upward',
      'Maximum height and time of flight',
      // Year 1 - Variable Acceleration
      'Using calculus: v = ds/dt',
      'Using calculus: a = dv/dt',
      'Displacement from velocity: s = ∫v dt',
      'Velocity from acceleration: v = ∫a dt',
      'Problems with variable acceleration',
      // Year 2 - Projectiles
      'Projectile motion',
      'Horizontal and vertical components',
      'Independence of horizontal and vertical motion',
      'Time of flight',
      'Maximum height',
      'Horizontal range',
      'Trajectory equation: y = x tan θ - gx²/(2u²cos²θ)',
      'Projectiles on inclined planes',
      // Year 2 - 2D Motion with Vectors
      'Position vectors',
      'Velocity vectors',
      'Acceleration vectors',
      'Motion in 2D using vectors',
    ],
  },

  {
    id: 'edexcel-alevel-forces-newtons-laws',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Forces and Newton\'s Laws',
    description: 'Force diagrams, Newton\'s laws, friction, and connected particles',
    icon: 'F',
    color: 'bg-orange-700',
    paperRestriction: 'Paper 3 (Mechanics)',
    subtopics: [
      // Year 1 - Types of Forces
      'Weight: W = mg',
      'Normal reaction force',
      'Tension in strings',
      'Compression in rods',
      'Friction force',
      'Air resistance and drag',
      // Year 1 - Force Diagrams
      'Drawing force diagrams',
      'Labelling forces correctly',
      'Resolving forces into components',
      'Resultant forces',
      // Year 1 - Newton\'s Laws
      'Newton\'s first law (equilibrium)',
      'Newton\'s second law: F = ma',
      'Newton\'s third law (action-reaction)',
      'Applying F = ma to motion problems',
      // Year 1 - Connected Particles
      'Particles connected by strings',
      'Pulleys (smooth)',
      'Two particles, one string over pulley',
      'Finding acceleration and tension',
      // Year 2 - Friction
      'Coefficient of friction μ',
      'Limiting friction: F = μR',
      'Static friction: F ≤ μR',
      'Objects on rough inclined planes',
      'Finding whether object moves or not',
      // Year 2 - Inclined Planes
      'Resolving forces on inclined planes',
      'Motion up and down inclined planes',
      'Equilibrium on inclined planes',
      // Year 2 - Advanced Connected Particles
      'Towing problems',
      'Lifts with acceleration',
      'Particles in contact',
      'Multiple connected bodies',
    ],
  },

  {
    id: 'edexcel-alevel-moments',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Moments',
    description: 'Moments of forces, equilibrium of rigid bodies, and centres of mass',
    icon: '⟳',
    color: 'bg-fuchsia-600',
    paperRestriction: 'Paper 3 (Mechanics)',
    subtopics: [
      // Moments Basics
      'Moment of a force',
      'Moment = Force × perpendicular distance',
      'Clockwise and anticlockwise moments',
      'Units of moments (N m)',
      // Equilibrium
      'Principle of moments',
      'Sum of clockwise = Sum of anticlockwise',
      'Conditions for equilibrium',
      'Sum of forces = 0',
      'Sum of moments about any point = 0',
      // Rigid Bodies
      'Uniform beams and rods',
      'Weight acting at centre of uniform body',
      'Non-uniform rods with given centre of mass',
      'Reactions at supports',
      'Multiple supports',
      // Ladders and Leaning
      'Ladder problems',
      'Leaning against smooth walls',
      'Leaning against rough walls',
      'Finding reactions and friction',
      // Tilting
      'On point of tilting',
      'Reaction at one support = 0 when tilting',
      'Finding maximum loads before tilting',
      'Suspended bodies',
    ],
  },
];

export function getEdexcelALevelTopicById(id: string): Topic | undefined {
  return edexcelALevelTopics.find((topic) => topic.id === id);
}

export function getEdexcelALevelTopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  switch (paper) {
    case 1:
    case 2:
      // Papers 1 & 2: Pure Mathematics only
      return edexcelALevelTopics.filter(t =>
        t.paperRestriction?.includes('Papers 1 & 2') ||
        t.paperRestriction?.includes('Pure')
      );
    case 3:
      // Paper 3: Statistics and Mechanics
      return edexcelALevelTopics.filter(t =>
        t.paperRestriction?.includes('Paper 3') ||
        t.paperRestriction?.includes('Statistics') ||
        t.paperRestriction?.includes('Mechanics')
      );
    default:
      return edexcelALevelTopics;
  }
}

export function getEdexcelALevelStatisticsTopics(): Topic[] {
  return edexcelALevelTopics.filter(t =>
    t.paperRestriction?.includes('Statistics')
  );
}

export function getEdexcelALevelMechanicsTopics(): Topic[] {
  return edexcelALevelTopics.filter(t =>
    t.paperRestriction?.includes('Mechanics')
  );
}

export function getEdexcelALevelPureTopics(): Topic[] {
  return edexcelALevelTopics.filter(t =>
    t.paperRestriction?.includes('Papers 1 & 2')
  );
}
