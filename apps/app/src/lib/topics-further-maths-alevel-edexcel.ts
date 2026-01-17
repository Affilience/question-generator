import { Topic } from '@/types';

/**
 * Edexcel A Level Further Mathematics 9FM0 Specification Topics
 *
 * Four papers:
 * - Paper 1 (9FM0/01): Core Pure Mathematics 1 (1hr 30min, 75 marks)
 * - Paper 2 (9FM0/02): Core Pure Mathematics 2 (1hr 30min, 75 marks)
 * - Paper 3: Optional paper (choose one)
 * - Paper 4: Optional paper (choose one, different from Paper 3)
 *
 * Optional papers:
 * - 3A/4A: Further Pure Mathematics 1
 * - 3B/4B: Further Pure Mathematics 2
 * - 3C/4C: Further Statistics 1
 * - 3D/4D: Further Statistics 2
 * - 3E/4E: Further Mechanics 1
 * - 3F/4F: Further Mechanics 2
 * - 3G/4G: Decision Mathematics 1
 * - 3H/4H: Decision Mathematics 2
 *
 * Prerequisites: A Level Mathematics
 */

export const edexcelALevelFurtherMathsTopics: Topic[] = [
  // ============================================
  // CORE PURE MATHEMATICS 1 - Paper 1 (Compulsory)
  // ============================================

  {
    id: 'fm-alevel-edexcel-proof',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Proof by Induction',
    description: 'Mathematical induction for series, divisibility, and matrices',
    icon: '🔍',
    color: 'bg-indigo-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      'Structure of proof by induction',
      'Base case verification',
      'Inductive hypothesis',
      'Inductive step',
      'Conclusion statement',
      'Induction for summation formulae',
      'Induction for divisibility',
      'Induction for matrix results',
      'Induction for inequalities',
      'Induction for sequences',
    ],
  },

  {
    id: 'fm-alevel-edexcel-complex1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Complex Numbers',
    description: 'Complex number arithmetic, Argand diagrams, and modulus-argument form',
    icon: '🔢',
    color: 'bg-purple-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      // Basics
      'Definition of i = √(-1)',
      'Real and imaginary parts',
      'Complex conjugate z*',
      'Addition and subtraction',
      'Multiplication of complex numbers',
      'Division using conjugates',
      'Square roots of complex numbers',
      // Equations
      'Solving quadratics with complex roots',
      'Complex conjugate root theorem',
      'Solving cubic equations',
      'Solving quartic equations',
      // Argand diagrams
      'Representing z on Argand diagram',
      'Modulus |z| = √(x² + y²)',
      'Argument arg(z)',
      'Modulus-argument form: r(cos θ + i sin θ)',
      'Multiplying and dividing in mod-arg form',
      // Loci
      '|z - z₁| = r (circle)',
      '|z - z₁| = |z - z₂| (perpendicular bisector)',
      'arg(z - z₁) = θ (half-line)',
      'Regions in the Argand diagram',
    ],
  },

  {
    id: 'fm-alevel-edexcel-matrices1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Matrices',
    description: 'Matrix operations, inverses, and transformations',
    icon: '📊',
    color: 'bg-blue-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      // Matrix arithmetic
      'Addition and subtraction',
      'Scalar multiplication',
      'Matrix multiplication',
      'Conformability',
      'Identity matrix I',
      // Determinants and inverses
      'Determinant of 2×2 matrix',
      'Determinant of 3×3 matrix',
      'Singular and non-singular matrices',
      'Inverse of 2×2 matrix',
      'Inverse of 3×3 matrix',
      'Properties: (AB)⁻¹ = B⁻¹A⁻¹',
      // Linear transformations
      'Matrices representing transformations',
      'Rotations about origin',
      'Reflections in lines through origin',
      'Stretches and enlargements',
      'Shears',
      'Combined transformations',
      'Invariant lines and points',
      // Systems of equations
      'Simultaneous equations as matrices',
      'Solving using inverse matrix',
      'Geometric interpretation',
    ],
  },

  {
    id: 'fm-alevel-edexcel-further-algebra',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Algebra and Functions',
    description: 'Roots of polynomials, series, and method of differences',
    icon: '∑',
    color: 'bg-cyan-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      // Roots and coefficients
      'Relationship between roots and coefficients',
      'Sum of roots α + β + γ',
      'Sum of products αβ + βγ + γα',
      'Product of roots αβγ',
      'Symmetric functions of roots',
      'Finding equations with transformed roots',
      // Series
      'Sum of r from 1 to n',
      'Sum of r² from 1 to n',
      'Sum of r³ from 1 to n',
      'Method of differences',
      'Partial fractions for series',
      // Maclaurin series
      'Maclaurin series definition',
      'Standard Maclaurin series: eˣ',
      'Standard Maclaurin series: sin x',
      'Standard Maclaurin series: cos x',
      'Standard Maclaurin series: ln(1+x)',
      'Standard Maclaurin series: (1+x)ⁿ',
      'Finding series by differentiation',
      'Finding series by integration',
      'Range of validity',
    ],
  },

  {
    id: 'fm-alevel-edexcel-further-calculus1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Calculus',
    description: 'Volumes of revolution and mean values',
    icon: '∫',
    color: 'bg-red-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      // Volumes of revolution
      'Volume about x-axis: π∫y² dx',
      'Volume about y-axis: π∫x² dy',
      'Volumes from parametric equations',
      'Adding and subtracting volumes',
      // Improper integrals
      'Integrals with infinite limits',
      'Integrals with discontinuities',
      'Determining convergence',
      // Mean value
      'Mean value of a function',
      'Mean value = (1/(b-a))∫f(x)dx',
    ],
  },

  {
    id: 'fm-alevel-edexcel-further-vectors1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Vectors',
    description: 'Vector equations of lines and planes',
    icon: '→',
    color: 'bg-violet-600',
    paperRestriction: 'Paper 1 (Core Pure 1)',
    subtopics: [
      // Lines in 3D
      'Vector equation r = a + λd',
      'Parametric form of line',
      'Cartesian form of line',
      'Parallel lines',
      'Intersection of lines',
      'Skew lines',
      'Angle between lines',
      // Planes
      'Vector equation r.n = k',
      'Cartesian equation ax + by + cz = d',
      'Normal to a plane',
      'Finding equation of plane',
      'Plane through three points',
      // Intersections
      'Line and plane intersection',
      'Angle between line and plane',
      'Angle between two planes',
      'Line of intersection of planes',
      // Distances
      'Distance from point to line',
      'Distance from point to plane',
      'Shortest distance between skew lines',
    ],
  },

  // ============================================
  // CORE PURE MATHEMATICS 2 - Paper 2 (Compulsory)
  // ============================================

  {
    id: 'fm-alevel-edexcel-complex2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Complex Numbers (Further)',
    description: 'De Moivre\'s theorem, exponential form, and nth roots',
    icon: '🌀',
    color: 'bg-purple-700',
    paperRestriction: 'Paper 2 (Core Pure 2)',
    subtopics: [
      // Exponential form
      'Euler\'s formula: e^(iθ) = cos θ + i sin θ',
      'Exponential form: z = re^(iθ)',
      'Multiplication in exponential form',
      'Division in exponential form',
      // De Moivre\'s theorem
      'De Moivre\'s theorem: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)',
      'Proof by induction',
      'Applications to trigonometric identities',
      'Expressing cos(nθ) in terms of cos θ',
      'Expressing sin(nθ) in terms of sin θ',
      // Roots
      'nth roots of unity',
      'Roots of z^n = w',
      'Geometric properties of roots',
      'Sum of nth roots of unity',
      // Advanced loci
      'Transformations w = f(z)',
      'Loci under transformations',
    ],
  },

  {
    id: 'fm-alevel-edexcel-hyperbolic',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Hyperbolic Functions',
    description: 'Definitions, identities, and calculus of hyperbolic functions',
    icon: '〰️',
    color: 'bg-emerald-600',
    paperRestriction: 'Paper 2 (Core Pure 2)',
    subtopics: [
      // Definitions
      'sinh x = (eˣ - e⁻ˣ)/2',
      'cosh x = (eˣ + e⁻ˣ)/2',
      'tanh x = sinh x / cosh x',
      'sech x, cosech x, coth x',
      // Graphs
      'Graphs of hyperbolic functions',
      'Domain and range',
      'Even/odd properties',
      // Identities
      'cosh²x - sinh²x = 1',
      '1 - tanh²x = sech²x',
      'coth²x - 1 = cosech²x',
      'Addition formulae',
      'Double angle formulae',
      'Osborn\'s rule',
      // Inverse functions
      'arsinh x = ln(x + √(x²+1))',
      'arcosh x = ln(x + √(x²-1)), x ≥ 1',
      'artanh x = ½ln((1+x)/(1-x)), |x| < 1',
      // Calculus
      'd/dx(sinh x) = cosh x',
      'd/dx(cosh x) = sinh x',
      'd/dx(tanh x) = sech²x',
      'Derivatives of inverse hyperbolics',
      '∫1/√(x²+a²)dx = arsinh(x/a) + c',
      '∫1/√(x²-a²)dx = arcosh(x/a) + c',
      'Integration with hyperbolic substitutions',
    ],
  },

  {
    id: 'fm-alevel-edexcel-further-calculus2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Calculus (Advanced)',
    description: 'Reduction formulae, arc length, and intrinsic coordinates',
    icon: '∫∫',
    color: 'bg-red-700',
    paperRestriction: 'Paper 2 (Core Pure 2)',
    subtopics: [
      // Reduction formulae
      'Deriving reduction formulae',
      'Using reduction formulae',
      'Integration by parts repeatedly',
      'Wallis\'s formulae',
      // Arc length
      'Arc length in Cartesian form: ∫√(1+(dy/dx)²)dx',
      'Arc length in parametric form',
      'Surface area of revolution',
      // Intrinsic coordinates (if applicable)
      'Intrinsic equations of curves',
    ],
  },

  {
    id: 'fm-alevel-edexcel-polar',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Polar Coordinates',
    description: 'Polar curves, tangents, and areas',
    icon: 'θ',
    color: 'bg-orange-600',
    paperRestriction: 'Paper 2 (Core Pure 2)',
    subtopics: [
      // Basics
      'Polar coordinates (r, θ)',
      'Converting to Cartesian',
      'Converting from Cartesian',
      // Curves
      'Sketching polar curves',
      'r = a: circle centered at origin',
      'θ = α: half-line from origin',
      'r = a cos θ, r = a sin θ: circles',
      'r = a(1 + cos θ): cardioid',
      'r = a + b cos θ: limaçon',
      'r² = a² cos 2θ: lemniscate',
      'r = a cos nθ: rose curves',
      'r = aθ: spiral',
      // Calculus
      'Finding tangent to polar curve',
      'Points where tangent is parallel/perpendicular to initial line',
      'Area enclosed by polar curve: ½∫r²dθ',
      'Area between polar curves',
    ],
  },

  {
    id: 'fm-alevel-edexcel-diff-equations',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Differential Equations',
    description: 'First and second order differential equations',
    icon: '📉',
    color: 'bg-pink-600',
    paperRestriction: 'Paper 2 (Core Pure 2)',
    subtopics: [
      // First order
      'Integrating factor method',
      'Solving dy/dx + Py = Q',
      'Finding integrating factor',
      // Second order homogeneous
      'ay" + by\' + cy = 0',
      'Auxiliary equation',
      'Two distinct real roots',
      'Repeated roots',
      'Complex conjugate roots',
      // Second order non-homogeneous
      'Complementary function',
      'Particular integral',
      'y = CF + PI',
      'Trial functions for PI',
      'PI for polynomials',
      'PI for exponentials',
      'PI for trig functions',
      // Applications
      'Modelling with differential equations',
      'Simple harmonic motion',
      'Damped harmonic motion',
      'Forced oscillations',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER PURE 1 - Paper 3A/4A
  // ============================================

  {
    id: 'fm-alevel-edexcel-fp1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Pure Mathematics 1',
    description: 'Advanced pure topics including t-substitution and further integration',
    icon: '∞',
    color: 'bg-slate-600',
    paperRestriction: 'Paper 3A or 4A (Option)',
    subtopics: [
      // Further trigonometric integration
      'Weierstrass substitution t = tan(x/2)',
      'Integrating rational trig functions',
      'Further trigonometric identities',
      // Further calculus
      'Leibniz theorem for nth derivatives',
      'L\'Hôpital\'s rule',
      'Taylor series',
      'Taylor series for approximations',
      // Further differential equations
      'Auxiliary equations with complex roots',
      'Systems of differential equations',
      'Substitution methods',
      // Inequalities
      'Proving algebraic inequalities',
      'AM-GM inequality',
      'Cauchy-Schwarz inequality',
      // Vectors
      'Further vector geometry',
      'Triple scalar product applications',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER PURE 2 - Paper 3B/4B
  // ============================================

  {
    id: 'fm-alevel-edexcel-fp2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Pure Mathematics 2',
    description: 'Groups, number theory, and further topics',
    icon: '🔗',
    color: 'bg-slate-700',
    paperRestriction: 'Paper 3B or 4B (Option)',
    subtopics: [
      // Groups
      'Binary operations',
      'Groups: definition and axioms',
      'Abelian groups',
      'Order of group and elements',
      'Cyclic groups and generators',
      'Subgroups',
      'Isomorphisms',
      'Cayley tables',
      // Number theory
      'Euclidean algorithm',
      'Modular arithmetic',
      'Divisibility tests',
      'Linear congruences',
      'Fermat\'s little theorem',
      'Wilson\'s theorem',
      // Further matrix algebra
      'Further eigenvalue applications',
      'Diagonalisation',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER STATISTICS 1 - Paper 3C/4C
  // ============================================

  {
    id: 'fm-alevel-edexcel-fs1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Statistics 1',
    description: 'Discrete distributions and hypothesis testing',
    icon: 'σ',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 3C or 4C (Option)',
    subtopics: [
      // Discrete distributions
      'Discrete uniform distribution',
      'Geometric distribution Geo(p)',
      'Mean and variance of geometric',
      'Negative binomial distribution',
      'Poisson distribution Po(λ)',
      'Mean and variance of Poisson',
      'Poisson as limit of binomial',
      'Sum of Poisson variables',
      // Hypothesis testing
      'Hypothesis test for Poisson mean',
      'Critical regions',
      'Actual significance level',
      // Chi-squared tests
      'Chi-squared distribution',
      'Goodness of fit test',
      'Contingency tables',
      'Yates\' correction',
      // Probability generating functions
      'PGF: G_X(t) = E(t^X)',
      'Mean and variance from PGF',
      'PGFs of standard distributions',
      'PGF of sum of variables',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER STATISTICS 2 - Paper 3D/4D
  // ============================================

  {
    id: 'fm-alevel-edexcel-fs2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Statistics 2',
    description: 'Continuous distributions and statistical inference',
    icon: 'χ²',
    color: 'bg-amber-700',
    paperRestriction: 'Paper 3D or 4D (Option)',
    subtopics: [
      // Continuous distributions
      'Continuous uniform distribution',
      'Exponential distribution',
      'Normal distribution (further)',
      // Estimation
      'Unbiased estimators',
      'Confidence intervals',
      'CI for mean (known variance)',
      'CI for mean (unknown variance)',
      't-distribution',
      // Hypothesis testing
      't-tests',
      'One-sample t-test',
      'Two-sample t-test',
      'Paired t-test',
      // Correlation and regression
      'Product moment correlation coefficient',
      'Hypothesis test for ρ',
      'Spearman\'s rank correlation',
      // Further inference
      'Type I and Type II errors',
      'Power of a test',
      'Chi-squared test for variance',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER MECHANICS 1 - Paper 3E/4E
  // ============================================

  {
    id: 'fm-alevel-edexcel-fm1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Mechanics 1',
    description: 'Momentum, work-energy, and elastic collisions',
    icon: '🎯',
    color: 'bg-sky-600',
    paperRestriction: 'Paper 3E or 4E (Option)',
    subtopics: [
      // Momentum and impulse
      'Momentum in 2D',
      'Impulse = change in momentum',
      'Conservation of momentum',
      // Collisions
      'Coefficient of restitution e',
      'Newton\'s law of restitution: v₂ - v₁ = -e(u₂ - u₁)',
      'Direct collisions',
      'Collisions with walls',
      'Successive collisions',
      'Loss of kinetic energy',
      // Work and energy
      'Work done by variable force: W = ∫F dx',
      'Kinetic energy',
      'Potential energy',
      'Conservation of mechanical energy',
      'Work-energy theorem',
      // Elastic strings and springs
      'Hooke\'s law: T = λx/l',
      'Elastic potential energy: EPE = λx²/(2l)',
      'Problems with elastic strings',
      'Energy methods with springs',
      // Power
      'Power = Fv',
      'Power problems',
    ],
  },

  // ============================================
  // OPTIONAL: FURTHER MECHANICS 2 - Paper 3F/4F
  // ============================================

  {
    id: 'fm-alevel-edexcel-fm2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Further Mechanics 2',
    description: 'Circular motion, SHM, and centres of mass',
    icon: 'ω',
    color: 'bg-sky-700',
    paperRestriction: 'Paper 3F or 4F (Option)',
    subtopics: [
      // Circular motion
      'Angular velocity ω',
      'Angular acceleration',
      'Centripetal acceleration a = v²/r',
      'Centripetal force',
      'Horizontal circular motion',
      'Vertical circular motion',
      'Conical pendulum',
      'Motion in vertical circle',
      'Condition for completing circle',
      // Simple harmonic motion
      'SHM equation: ẍ = -ω²x',
      'Solutions x = A cos(ωt + φ)',
      'Velocity in SHM',
      'Period T = 2π/ω',
      'Energy in SHM',
      'Simple pendulum (small angles)',
      'Vertical springs and SHM',
      // Centres of mass
      'Centre of mass of particles',
      'Centre of mass using integration',
      'Standard results for laminas',
      'Composite bodies',
      'Equilibrium of rigid bodies',
      'Toppling and sliding',
      // Oblique collisions
      'Oblique impact with wall',
      'Oblique collision of spheres',
      'Components parallel and perpendicular',
    ],
  },

  // ============================================
  // OPTIONAL: DECISION MATHS 1 - Paper 3G/4G
  // ============================================

  {
    id: 'fm-alevel-edexcel-dm1',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Decision Mathematics 1',
    description: 'Algorithms, graphs, and networks',
    icon: '🔗',
    color: 'bg-rose-600',
    paperRestriction: 'Paper 3G or 4G (Option)',
    subtopics: [
      // Algorithms
      'Bubble sort',
      'Quick sort',
      'Binary search',
      'Bin packing: first fit, first fit decreasing',
      // Graph theory
      'Graphs and networks terminology',
      'Trees and spanning trees',
      'Minimum spanning trees',
      'Kruskal\'s algorithm',
      'Prim\'s algorithm (matrix form)',
      // Shortest paths
      'Dijkstra\'s algorithm',
      'Shortest path problems',
      // Route inspection
      'Eulerian graphs',
      'Chinese postman problem',
      'Finding optimal route',
      // Travelling salesman
      'Hamiltonian cycles',
      'Upper bounds (nearest neighbour)',
      'Lower bounds (deleted vertex)',
      'Improving tours',
      // Matchings
      'Bipartite graphs',
      'Matchings and augmenting paths',
      'Maximum matching algorithm',
    ],
  },

  // ============================================
  // OPTIONAL: DECISION MATHS 2 - Paper 3H/4H
  // ============================================

  {
    id: 'fm-alevel-edexcel-dm2',
    examBoard: 'edexcel',
    qualification: 'a-level',
    name: 'Decision Mathematics 2',
    description: 'Linear programming, critical path analysis, and game theory',
    icon: '📈',
    color: 'bg-rose-700',
    paperRestriction: 'Paper 3H or 4H (Option)',
    subtopics: [
      // Linear programming
      'Formulating LP problems',
      'Graphical solution',
      'Simplex algorithm',
      'Slack variables',
      'Reading solution from tableau',
      'Two-stage simplex',
      'Big M method',
      'Integer programming',
      // Network flows
      'Capacity and flow',
      'Cuts and their capacity',
      'Maximum flow-minimum cut theorem',
      'Labelling algorithm',
      'Super sources and sinks',
      'Upper and lower capacities',
      // Critical path analysis
      'Activity networks',
      'Precedence tables',
      'Critical path',
      'Float times',
      'Gantt charts',
      'Resource histograms',
      'Scheduling',
      // Game theory
      'Two-player zero-sum games',
      'Pay-off matrices',
      'Dominance',
      'Optimal mixed strategies',
      'Converting to LP problem',
      // Recurrence relations
      'Solving first order recurrence',
      'Second order recurrence relations',
      'Characteristic equation method',
    ],
  },
];

export function getEdexcelALevelFurtherMathsTopicById(id: string): Topic | undefined {
  return edexcelALevelFurtherMathsTopics.find((topic) => topic.id === id);
}

export function getEdexcelALevelFurtherMathsCompulsoryTopics(): Topic[] {
  return edexcelALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Core Pure')
  );
}

export function getEdexcelALevelFurtherMathsOptionalTopics(): Topic[] {
  return edexcelALevelFurtherMathsTopics.filter(t =>
    t.paperRestriction?.includes('Option')
  );
}
