import { Topic } from '@/types';

/**
 * OCR A Level Mathematics A (H240) Specification Topics
 *
 * Three papers, each 2 hours, 100 marks:
 * - Paper 1 (H240/01): Pure Mathematics only
 * - Paper 2 (H240/02): Pure Mathematics and Statistics
 * - Paper 3 (H240/03): Pure Mathematics and Mechanics
 *
 * Content areas:
 * - Pure Mathematics (1.01-1.10): All three papers
 * - Statistics (2.01-2.05): Paper 2 only
 * - Mechanics (3.01-3.04): Paper 3 only
 *
 * All papers are calculator papers.
 * Large Data Set: Students must be familiar with the OCR pre-release large data set.
 *
 * Assessment Objectives:
 * - AO1 (50%): Use and apply standard techniques
 * - AO2 (25%): Reason, interpret, and communicate mathematically
 * - AO3 (25%): Solve problems in mathematics and other contexts
 *
 * Total: 19 content areas
 */

export const ocrALevelTopics: Topic[] = [
  // ============================================
  // PURE MATHEMATICS (1.01-1.10) - Papers 1, 2, 3
  // ============================================

  {
    id: 'proof',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Proof',
    description: 'Mathematical proof including proof by deduction, exhaustion, and contradiction',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.01 Proof
      'Understanding mathematical structure and syntax',
      'Constructing mathematical proofs',
      'Proof by deduction',
      'Proof by exhaustion (finite cases)',
      'Disproof by counter-example',
      'Proof by contradiction',
      'Proving statements involving irrational numbers',
      'Proving statements about infinitely many primes',
      'Critique and analysis of mathematical arguments',
      'Understanding necessity and sufficiency',
    ],
  },

  {
    id: 'algebra',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Algebra and Functions',
    description: 'Indices, surds, quadratics, polynomials, partial fractions, functions, and graph transformations',
    icon: '📐',
    color: 'bg-purple-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.02a-c: Laws of indices and surds
      'Laws of indices (integer, fractional, negative)',
      'Simplifying expressions with indices',
      'Manipulating surds',
      'Rationalising denominators (simple)',
      'Rationalising denominators (compound)',
      // 1.02d-f: Quadratic functions
      'Quadratic functions and their graphs',
      'Completing the square',
      'Solving quadratic equations by factorisation',
      'Solving quadratic equations by completing the square',
      'Solving quadratic equations using the formula',
      'Discriminant and nature of roots',
      'Conditions for real, equal, or no real roots',
      // 1.02g-h: Simultaneous equations and inequalities
      'Solving simultaneous equations (two linear)',
      'Solving simultaneous equations (one linear, one quadratic)',
      'Solving linear inequalities',
      'Solving quadratic inequalities',
      'Representing inequalities graphically',
      'Set notation for solutions',
      // 1.02i-k: Polynomials
      'Manipulating polynomials algebraically',
      'Expanding brackets and collecting terms',
      'Factorising polynomials',
      'Algebraic (polynomial) division',
      'Factor theorem',
      'Remainder theorem',
      // 1.02l: Modulus function
      'Modulus function |x| and |f(x)|',
      'Graphs of y = |f(x)| and y = f(|x|)',
      'Solving equations involving modulus',
      'Solving inequalities involving modulus',
      // 1.02m-o: Graphs and transformations
      'Graphs of linear, quadratic, cubic functions',
      'Graphs of quartic and reciprocal functions',
      'Graphs involving y = 1/x and y = 1/x²',
      'Asymptotes',
      'Points of intersection of graphs',
      'Translations: y = f(x) + a, y = f(x + a)',
      'Stretches: y = af(x), y = f(ax)',
      'Reflections: y = -f(x), y = f(-x)',
      'Combined transformations',
      // 1.02p-r: Functions
      'Function notation f(x)',
      'Domain and range',
      'Composite functions fg(x)',
      'Inverse functions f⁻¹(x)',
      'Relationship between f and f⁻¹ graphs',
      // 1.02s: Partial fractions
      'Partial fractions with linear factors',
      'Partial fractions with repeated linear factors',
      'Partial fractions with improper fractions',
      // 1.02t: Modelling
      'Using algebra in modelling contexts',
    ],
  },

  {
    id: 'geometry',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Coordinate Geometry',
    description: 'Straight lines, circles, and parametric equations in the x-y plane',
    icon: '📍',
    color: 'bg-blue-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.03a-d: Straight lines
      'Equation of a straight line: y = mx + c',
      'Equation of a straight line: y - y₁ = m(x - x₁)',
      'Gradient from two points',
      'Length of a line segment',
      'Midpoint of a line segment',
      'Parallel lines (equal gradients)',
      'Perpendicular lines (m₁m₂ = -1)',
      'Finding equations of parallel and perpendicular lines',
      // 1.03e-g: Circles
      'Equation of a circle: (x - a)² + (y - b)² = r²',
      'Equation of a circle: x² + y² + 2gx + 2fy + c = 0',
      'Finding centre and radius from equation',
      'Completing the square for circle equations',
      'Circle properties involving tangents and radii',
      'Circle properties involving chords',
      'Finding tangent equations to circles',
      'Finding normal equations to circles',
      'Intersection of lines and circles',
      // 1.03h-j: Parametric equations
      'Parametric equations of curves',
      'Converting parametric to Cartesian form',
      'Sketching parametric curves',
      'Points of intersection with parametric curves',
      'Domain restrictions for parametric equations',
    ],
  },

  {
    id: 'series',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Sequences and Series',
    description: 'Binomial expansion, arithmetic and geometric sequences, and sigma notation',
    icon: '🔢',
    color: 'bg-cyan-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.04a-c: Binomial expansion (positive integer)
      'Pascal\'s triangle',
      'Factorial notation n!',
      'Binomial coefficients ⁿCᵣ',
      'Binomial expansion of (a + b)ⁿ for positive integer n',
      'Finding specific terms and coefficients',
      'Binomial expansion for estimation',
      // 1.04d-f: Sequences
      'Definitions of sequences',
      'nth term formulae',
      'Recurrence relations',
      'Increasing, decreasing, and periodic sequences',
      // 1.04g-i: Arithmetic sequences and series
      'Arithmetic sequences: uₙ = a + (n-1)d',
      'Arithmetic series: Sₙ = n/2[2a + (n-1)d]',
      'Arithmetic series: Sₙ = n/2(a + l)',
      'Sum of first n natural numbers',
      // 1.04j-l: Geometric sequences and series
      'Geometric sequences: uₙ = arⁿ⁻¹',
      'Geometric series: Sₙ = a(1 - rⁿ)/(1 - r)',
      'Sum to infinity: S∞ = a/(1 - r) for |r| < 1',
      'Convergence conditions',
      // 1.04m: Sigma notation
      'Sigma notation for sums',
      'Evaluating sums using sigma notation',
      // 1.04n-o: Binomial expansion (rational)
      'Binomial expansion of (1 + x)ⁿ for rational n',
      'Binomial expansion of (a + bx)ⁿ for rational n',
      'Range of validity |x| < 1',
      'Using binomial expansion for approximations',
      // 1.04p: Modelling
      'Modelling with sequences and series',
    ],
  },

  {
    id: 'trigonometry',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Trigonometry',
    description: 'Trigonometric functions, identities, equations, and inverse functions',
    icon: '📐',
    color: 'bg-orange-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.05a-c: Basic trigonometry
      'Sine, cosine, and tangent ratios',
      'Exact values for 0°, 30°, 45°, 60°, 90°',
      'Sine rule: a/sin A = b/sin B',
      'Cosine rule: a² = b² + c² - 2bc cos A',
      'Area of triangle: ½ab sin C',
      // 1.05d-e: Radians
      'Radian measure',
      'Converting between degrees and radians',
      'Arc length: s = rθ',
      'Sector area: A = ½r²θ',
      'Segment area calculations',
      // 1.05f: Small angle approximations
      'sin θ ≈ θ (θ in radians)',
      'cos θ ≈ 1 - θ²/2',
      'tan θ ≈ θ',
      // 1.05g-h: Graphs and transformations
      'Graphs of sin x, cos x, tan x',
      'Period, amplitude, and phase',
      'Transformations of trigonometric graphs',
      // 1.05i-j: Identities
      'tan θ = sin θ/cos θ',
      'sin²θ + cos²θ = 1',
      'sec θ, cosec θ, cot θ definitions',
      'Graphs of sec, cosec, cot',
      '1 + tan²θ = sec²θ',
      '1 + cot²θ = cosec²θ',
      // 1.05k-l: Compound angle formulae
      'sin(A ± B) formulae',
      'cos(A ± B) formulae',
      'tan(A ± B) formulae',
      'Double angle formulae: sin 2A',
      'Double angle formulae: cos 2A (three forms)',
      'Double angle formulae: tan 2A',
      // 1.05m: R-formula
      'a sin θ + b cos θ = R sin(θ + α)',
      'a cos θ + b sin θ = R cos(θ - α)',
      'Finding R and α',
      'Using R-formula for equations',
      'Using R-formula for max/min',
      // 1.05n-o: Inverse functions
      'arcsin, arccos, arctan functions',
      'Principal values',
      'Domains and ranges of inverse trig functions',
      // 1.05p: Solving equations
      'Solving trigonometric equations',
      'Finding all solutions in a given range',
      'Using identities to solve equations',
      'Quadratic equations in sin/cos/tan',
      // 1.05q: Applications
      'Trigonometry in context and modelling',
    ],
  },

  {
    id: 'logarithms',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Exponentials and Logarithms',
    description: 'Exponential and logarithmic functions, laws of logarithms, and modelling',
    icon: '📈',
    color: 'bg-emerald-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.06a-c: Exponential functions
      'Exponential functions y = aˣ',
      'Graphs of exponential functions',
      'The natural exponential e ≈ 2.718',
      'The function y = eˣ and its properties',
      'Graphs of y = eᵏˣ',
      // 1.06d-f: Logarithms
      'Definition: logₐx = y ⟺ aʸ = x',
      'Natural logarithm ln x = logₑx',
      'Graphs of logarithmic functions',
      'Relationship between eˣ and ln x',
      // 1.06g-i: Laws of logarithms
      'log(xy) = log x + log y',
      'log(x/y) = log x - log y',
      'log(xⁿ) = n log x',
      'Change of base formula',
      // 1.06j-k: Solving equations
      'Solving equations using logarithms',
      'Solving equations of form aˣ = b',
      'Equations reducible to quadratics in eˣ',
      // 1.06l-m: Modelling
      'Exponential growth and decay models',
      'Using logarithms to linearise data',
      'Determining constants from experimental data',
      'Comparing exponential models',
    ],
  },

  {
    id: 'differentiation',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Differentiation',
    description: 'Derivatives, chain rule, product rule, quotient rule, and applications',
    icon: '📉',
    color: 'bg-red-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.07a-b: From first principles
      'Differentiation from first principles',
      'Understanding derivative as gradient of tangent',
      'Understanding derivative as rate of change',
      // 1.07c-f: Standard derivatives
      'Differentiating xⁿ for all rational n',
      'Differentiating eᵏˣ',
      'Differentiating aˣ',
      'Differentiating ln x',
      'Differentiating sin kx, cos kx, tan kx',
      'Differentiating sec x, cosec x, cot x',
      // 1.07g-i: Differentiation rules
      'Sum and difference rules',
      'Chain rule',
      'Product rule',
      'Quotient rule',
      // 1.07j-k: Further techniques
      'Implicit differentiation',
      'Second derivatives',
      'Higher order derivatives',
      // 1.07l: Parametric differentiation
      'Differentiating parametric equations',
      'Finding dy/dx = (dy/dt)/(dx/dt)',
      'Second derivatives parametrically',
      // 1.07m-n: Applications
      'Equations of tangents to curves',
      'Equations of normals to curves',
      'Stationary points',
      'Classifying stationary points (1st derivative test)',
      'Classifying stationary points (2nd derivative test)',
      'Points of inflection',
      // 1.07o-p: Optimisation and rates
      'Optimisation problems',
      'Rates of change',
      'Connected rates of change',
      'Related rates problems',
      // 1.07q: Modelling
      'Differentiation in modelling contexts',
    ],
  },

  {
    id: 'integration',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Integration',
    description: 'Integration techniques, definite integrals, areas, and differential equations',
    icon: '∫',
    color: 'bg-pink-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.08a-b: Basic integration
      'Integration as reverse of differentiation',
      'Integrating xⁿ (n ≠ -1)',
      'Constant of integration',
      'Finding functions from derivatives',
      // 1.08c-e: Standard integrals
      'Integrating eᵏˣ',
      'Integrating 1/x',
      'Integrating sin kx, cos kx',
      'Integrating sec²kx',
      'Integrating cosec²x, sec x tan x, cosec x cot x',
      // 1.08f-g: Integration techniques
      'Integrating f(ax + b) by recognition',
      'Reverse chain rule',
      'Using trigonometric identities',
      'Integration by substitution',
      'Integration by parts',
      'Integrating using partial fractions',
      // 1.08h-i: Definite integrals
      'Definite integration',
      'Evaluating definite integrals',
      'Properties of definite integrals',
      // 1.08j-l: Areas
      'Area under a curve',
      'Area between curve and x-axis',
      'Area between curve and y-axis',
      'Area between two curves',
      'Areas with negative regions',
      'Areas with parametric curves',
      // 1.08m: Numerical integration
      'Trapezium rule',
      'Improving accuracy with more strips',
      'Understanding over/underestimates',
      // 1.08n-o: Differential equations
      'Solving dy/dx = f(x)',
      'Separation of variables',
      'General and particular solutions',
      'Using initial/boundary conditions',
      'Modelling with differential equations',
    ],
  },

  {
    id: 'methods',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Numerical Methods',
    description: 'Locating roots, iteration, and the Newton-Raphson method',
    icon: '≈',
    color: 'bg-slate-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.09a-b: Locating roots
      'Locating roots by change of sign',
      'Sign change in continuous functions',
      'Interval containing a root',
      'When sign change method fails',
      // 1.09c-e: Iteration
      'Fixed point iteration: xₙ₊₁ = g(xₙ)',
      'Rearranging f(x) = 0 to x = g(x)',
      'Different rearrangements of same equation',
      'Cobweb diagrams',
      'Staircase diagrams',
      'Convergence and divergence',
      // 1.09f-g: Newton-Raphson
      'Newton-Raphson method',
      'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
      'Graphical interpretation',
      'Rate of convergence',
      'Cases where Newton-Raphson fails',
      // 1.09h: Problem solving
      'Choosing appropriate numerical methods',
      'Comparing methods',
      'Accuracy and error bounds',
    ],
  },

  {
    id: 'vectors',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Vectors',
    description: 'Vectors in 2D and 3D, magnitude, direction, and geometric applications',
    icon: '→',
    color: 'bg-violet-600',
    paperRestriction: 'Papers 1, 2, 3',
    subtopics: [
      // 1.10a-c: Vector basics
      'Vectors in 2D',
      'Vectors in 3D',
      'Column vector notation',
      'i, j, k unit vector notation',
      'Magnitude of a vector |a|',
      'Direction of a vector',
      'Unit vectors',
      // 1.10d-f: Vector operations
      'Adding and subtracting vectors',
      'Scalar multiplication',
      'Parallel vectors',
      // 1.10g-i: Position and displacement
      'Position vectors',
      'Displacement vectors',
      'Distance between points',
      'Midpoint of line segment',
      'Dividing a line in a given ratio',
      // 1.10j-k: Geometric applications
      'Using vectors in geometry',
      'Proving collinearity',
      'Geometric proofs with vectors',
      // 1.10l-n: Scalar product
      'Scalar (dot) product: a · b',
      'a · b = |a||b| cos θ',
      'a · b = x₁x₂ + y₁y₂ + z₁z₂',
      'Finding angles between vectors',
      'Perpendicular vectors: a · b = 0',
      'Applications of scalar product',
    ],
  },

  // ============================================
  // STATISTICS (2.01-2.05) - Paper 2 only
  // ============================================

  {
    id: 'sampling',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Statistical Sampling',
    description: 'Populations, samples, sampling methods, and the large data set',
    icon: '📊',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 2.01a-c: Populations and samples
      'Population and sample definitions',
      'Census vs sample survey',
      'Advantages and disadvantages of sampling',
      'Sampling frame',
      // 2.01d-f: Sampling methods
      'Simple random sampling',
      'Systematic sampling',
      'Stratified sampling',
      'Quota sampling',
      'Opportunity (convenience) sampling',
      'Cluster sampling',
      // 2.01g: Bias
      'Sources of bias',
      'Reducing bias',
      'Non-response bias',
      // 2.01h: Large data set
      'Working with the OCR large data set',
      'Understanding the data set context',
      'Using technology to explore data',
      'Interpreting questions on the large data set',
    ],
  },

  {
    id: 'presentation',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Data Presentation and Interpretation',
    description: 'Representing data, measures of location and spread, correlation and regression',
    icon: '📈',
    color: 'bg-yellow-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 2.02a-c: Representing data
      'Histograms',
      'Frequency density',
      'Frequency polygons',
      'Cumulative frequency diagrams',
      'Box plots (box and whisker)',
      'Stem and leaf diagrams',
      'Comparing distributions',
      // 2.02d-f: Measures of location
      'Mean from raw data',
      'Mean from grouped data',
      'Median from raw data',
      'Median from grouped data (interpolation)',
      'Mode and modal class',
      'Choosing appropriate measure',
      // 2.02g-i: Measures of spread
      'Range',
      'Interquartile range (IQR)',
      'Percentiles',
      'Variance',
      'Standard deviation',
      'Calculating from raw data',
      'Calculating from grouped data',
      'Var(X) = E(X²) - [E(X)]²',
      // 2.02j: Outliers
      'Identifying outliers',
      'Using Q₁ - 1.5×IQR and Q₃ + 1.5×IQR',
      'Cleaning data',
      'Anomalies',
      // 2.02k: Coding
      'Linear coding: y = ax + b',
      'Effect of coding on mean',
      'Effect of coding on variance',
      'Effect of coding on standard deviation',
      // 2.02l-n: Bivariate data
      'Scatter diagrams',
      'Describing correlation',
      'Product moment correlation coefficient (PMCC)',
      'Calculating and interpreting PMCC',
      'Correlation vs causation',
      // 2.02o-p: Regression
      'Regression lines',
      'Equation of regression line y = a + bx',
      'Least squares regression',
      'Using regression for prediction',
      'Interpolation vs extrapolation',
      'Non-linear regression (logarithmic)',
    ],
  },

  {
    id: 'probability',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Probability',
    description: 'Probability laws, Venn diagrams, tree diagrams, and conditional probability',
    icon: '🎲',
    color: 'bg-lime-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 2.03a-b: Basic probability
      'Calculating probabilities',
      'Equally likely outcomes',
      'Sample space diagrams',
      'Relative frequency',
      // 2.03c-d: Set notation and Venn diagrams
      'Set notation: A∩B, A∪B, A\'',
      'Venn diagrams for two events',
      'Venn diagrams for three events',
      'Two-way tables',
      // 2.03e-f: Probability laws
      'Mutually exclusive events',
      'P(A∪B) = P(A) + P(B) - P(A∩B)',
      'Independent events',
      'P(A∩B) = P(A) × P(B) for independent events',
      // 2.03g-h: Tree diagrams
      'Tree diagrams',
      'Dependent events (without replacement)',
      'Independent events (with replacement)',
      'Calculating probabilities from trees',
      // 2.03i-j: Conditional probability
      'Conditional probability P(A|B)',
      'P(A|B) = P(A∩B)/P(B)',
      'Testing for independence using P(A|B) = P(A)',
      'Conditional probability with Venn diagrams',
      'Conditional probability with tree diagrams',
      'Problems involving conditional probability',
    ],
  },

  {
    id: 'distributions',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Statistical Distributions',
    description: 'Discrete and continuous distributions including binomial and normal',
    icon: '🔔',
    color: 'bg-teal-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 2.04a-c: Discrete random variables
      'Discrete random variables',
      'Probability distributions as tables',
      'Sum of probabilities equals 1',
      'Expected value E(X) = Σx·P(X=x)',
      'Variance Var(X) = E(X²) - [E(X)]²',
      'Standard deviation',
      'E(aX + b) and Var(aX + b)',
      // 2.04d-f: Binomial distribution
      'Binomial distribution X ~ B(n, p)',
      'Conditions for binomial model',
      'Calculating P(X = r) = ⁿCᵣpʳ(1-p)ⁿ⁻ʳ',
      'Mean E(X) = np',
      'Variance Var(X) = np(1-p)',
      'Cumulative binomial probabilities',
      'Using calculator for binomial',
      // 2.04g-i: Normal distribution
      'Normal distribution X ~ N(μ, σ²)',
      'Properties of normal distribution',
      'Standard normal Z ~ N(0, 1)',
      'Standardising: Z = (X - μ)/σ',
      'Finding probabilities P(X < a)',
      'Using normal tables',
      'Using calculator for normal probabilities',
      'Inverse normal calculations',
      'Finding μ or σ from probabilities',
      // 2.04j: Approximations
      'Selecting appropriate distributions',
      'Normal approximation to binomial',
      'Continuity correction',
    ],
  },

  {
    id: 'testing',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Statistical Hypothesis Testing',
    description: 'Hypothesis tests for proportions, means, and correlation',
    icon: '📋',
    color: 'bg-rose-600',
    paperRestriction: 'Paper 2 only',
    subtopics: [
      // 2.05a-c: Fundamentals
      'Null hypothesis H₀',
      'Alternative hypothesis H₁',
      'Significance level',
      'One-tailed and two-tailed tests',
      'Test statistic',
      'Critical region and critical values',
      'p-value interpretation',
      // 2.05d-f: Binomial hypothesis tests
      'Hypothesis test for proportion p',
      'Setting up binomial hypothesis test',
      'Finding critical region',
      'Actual significance level',
      'Interpreting results in context',
      // 2.05g-i: Normal hypothesis tests
      'Sample mean distribution: X̄ ~ N(μ, σ²/n)',
      'Hypothesis test for population mean μ',
      'Test statistic z = (x̄ - μ)/(σ/√n)',
      'One-sample z-test',
      'Finding critical values',
      'Interpreting normal test results',
      // 2.05j-k: Correlation tests
      'Hypothesis test for correlation coefficient ρ',
      'H₀: ρ = 0 (no correlation)',
      'Using critical values from tables',
      'Sample size and critical values',
      'Interpreting correlation test results',
      // 2.05l: Conclusions
      'Drawing conclusions from tests',
      'Interpreting in context',
      'Type I errors',
      'Type II errors',
    ],
  },

  // ============================================
  // MECHANICS (3.01-3.04) - Paper 3 only
  // ============================================

  {
    id: 'units',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Quantities and Units in Mechanics',
    description: 'SI units, scalars, vectors, and modelling assumptions',
    icon: '📏',
    color: 'bg-stone-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // 3.01a-b: Quantities and units
      'SI base units: m, kg, s',
      'Derived units: N, m/s, m/s²',
      'Fundamental and derived quantities',
      'Dimensional consistency',
      // 3.01c-d: Scalars and vectors
      'Scalar quantities (mass, time, speed, distance, energy)',
      'Vector quantities (displacement, velocity, acceleration, force, momentum)',
      'Magnitude and direction',
      'Representing vectors',
      // 3.01e-f: Modelling
      'Mathematical modelling in mechanics',
      'Particle model',
      'Rigid body model',
      'Modelling assumptions',
      'Smooth and rough surfaces',
      'Light and inextensible strings',
      'Limitations of models',
    ],
  },

  {
    id: 'kinematics',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Kinematics',
    description: 'Motion in a straight line, projectiles, and variable acceleration',
    icon: '→',
    color: 'bg-sky-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // 3.02a-c: Graphs
      'Displacement-time graphs',
      'Velocity-time graphs',
      'Acceleration-time graphs',
      'Gradient of displacement-time = velocity',
      'Gradient of velocity-time = acceleration',
      'Area under velocity-time = displacement',
      'Drawing and interpreting travel graphs',
      // 3.02d-g: SUVAT equations
      'v = u + at',
      's = ut + ½at²',
      's = vt - ½at²',
      'v² = u² + 2as',
      's = ½(u + v)t',
      'Deriving SUVAT equations',
      'Choosing appropriate SUVAT equation',
      'Multi-stage motion problems',
      // 3.02h-i: Vertical motion
      'Motion under gravity (g = 9.8 m/s²)',
      'Objects falling freely',
      'Objects thrown vertically upward',
      'Maximum height',
      'Time to highest point',
      // 3.02j-l: Variable acceleration
      'Using calculus: v = ds/dt',
      'Using calculus: a = dv/dt = d²s/dt²',
      'Displacement from velocity: s = ∫v dt',
      'Velocity from acceleration: v = ∫a dt',
      'Problems with variable acceleration',
      // 3.02m-o: Projectiles
      'Projectile motion',
      'Horizontal and vertical components',
      'Independence of horizontal and vertical motion',
      'Time of flight',
      'Maximum height',
      'Horizontal range',
      'Trajectory equation',
      'Projectile problems',
      // 3.02p-q: Motion in 2D
      'Position vectors in kinematics',
      'Velocity vectors',
      'Acceleration vectors',
      'Motion in 2D using vectors',
      'SUVAT in 2D with vectors',
    ],
  },

  {
    id: 'newtons-laws',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Forces and Newton\'s Laws',
    description: 'Force diagrams, Newton\'s laws, friction, and connected particles',
    icon: '⚖️',
    color: 'bg-orange-700',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // 3.03a-c: Types of forces
      'Weight: W = mg',
      'Normal reaction force',
      'Tension in strings and ropes',
      'Thrust/compression in rods',
      'Friction force',
      'Air resistance and drag',
      // 3.03d-f: Force diagrams
      'Drawing force diagrams',
      'Labelling forces correctly',
      'Free body diagrams',
      'Resolving forces into components',
      'Resultant force',
      // 3.03g-i: Equilibrium
      'Equilibrium in 1D',
      'Equilibrium in 2D',
      'Forces in equilibrium',
      'Resolving in perpendicular directions',
      // 3.03j-l: Newton\'s laws
      'Newton\'s first law',
      'Newton\'s second law: F = ma',
      'Newton\'s third law',
      'Applying F = ma in 1D',
      'Applying F = ma in 2D',
      'F = ma with vectors',
      // 3.03m-o: Friction
      'Coefficient of friction μ',
      'Limiting friction: F = μR',
      'Static friction: F ≤ μR',
      'Determining if object moves',
      'Objects on rough horizontal surfaces',
      // 3.03p-r: Inclined planes
      'Resolving on inclined planes',
      'Motion on smooth inclined planes',
      'Motion on rough inclined planes',
      'Equilibrium on inclined planes',
      // 3.03s-u: Connected particles
      'Particles connected by strings',
      'Tow bars and rigid connections',
      'Two particles over a pulley',
      'Connected particles on tables',
      'Finding acceleration and tension',
      'Lifts with acceleration',
    ],
  },

  {
    id: 'moments',
    examBoard: 'ocr',
    qualification: 'a-level',
    name: 'Moments',
    description: 'Moments of forces, equilibrium of rigid bodies, and centres of mass',
    icon: '⟳',
    color: 'bg-fuchsia-600',
    paperRestriction: 'Paper 3 only',
    subtopics: [
      // 3.04a-c: Moment basics
      'Moment of a force',
      'Moment = Force × perpendicular distance',
      'Clockwise and anticlockwise moments',
      'Units of moments (N m)',
      'Calculating moments',
      // 3.04d-f: Equilibrium
      'Principle of moments',
      'Sum of clockwise = Sum of anticlockwise',
      'Equilibrium conditions for rigid bodies',
      'Sum of forces = 0',
      'Sum of moments about any point = 0',
      'Choosing the pivot point',
      // 3.04g-i: Rigid bodies
      'Uniform beams and rods',
      'Centre of mass of uniform bodies',
      'Non-uniform rods',
      'Reactions at supports',
      'Multiple supports',
      // 3.04j-l: Tilting and toppling
      'Tilting problems',
      'On point of tilting',
      'Reaction becomes zero when tilting',
      'Finding maximum loads',
      // 3.04m-n: Ladders and hinges
      'Ladder problems',
      'Ladder against smooth wall',
      'Ladder against rough wall',
      'Finding reactions and friction',
      'Hinged bodies',
    ],
  },
];

export function getOCRALevelTopicById(id: string): Topic | undefined {
  return ocrALevelTopics.find((topic) => topic.id === id);
}

export function getOCRALevelTopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  switch (paper) {
    case 1:
      // Paper 1: Pure only
      return ocrALevelTopics.filter(t => t.paperRestriction?.includes('1'));
    case 2:
      // Paper 2: Pure + Statistics
      return ocrALevelTopics.filter(t =>
        t.paperRestriction?.includes('2') || t.paperRestriction?.includes('Paper 2')
      );
    case 3:
      // Paper 3: Pure + Mechanics
      return ocrALevelTopics.filter(t =>
        t.paperRestriction?.includes('3') || t.paperRestriction?.includes('Paper 3')
      );
    default:
      return ocrALevelTopics;
  }
}

export function getOCRALevelStatisticsTopics(): Topic[] {
  return ocrALevelTopics.filter(t =>
    t.paperRestriction?.includes('Paper 2 only')
  );
}

export function getOCRALevelMechanicsTopics(): Topic[] {
  return ocrALevelTopics.filter(t =>
    t.paperRestriction?.includes('Paper 3 only')
  );
}

export function getOCRALevelPureTopics(): Topic[] {
  return ocrALevelTopics.filter(t =>
    t.paperRestriction?.includes('Papers 1, 2, 3')
  );
}
