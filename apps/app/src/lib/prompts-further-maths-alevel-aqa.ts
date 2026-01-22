import { Difficulty, Topic } from '@/types';
import {
  getVarietyParameters,
  getVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
  getVisualInstructions,
} from './prompts-common';

/**
 * AQA A-Level Further Mathematics (7367) Question Generation Prompts.
 * Based on official AQA specification and past papers.
 *
 * Specification Reference: https://www.aqa.org.uk/subjects/mathematics/a-level/further-mathematics-7367
 *
 * This file contains comprehensive guidance for generating authentic AQA A-Level
 * Further Mathematics questions across all specification topics including:
 * - Core Pure Mathematics (Papers 1 & 2)
 * - Optional: Further Pure Mathematics
 * - Optional: Further Statistics
 * - Optional: Further Mechanics
 * - Optional: Discrete Mathematics
 */

// ============================================================================
// AQA A-LEVEL FURTHER MATHS COGNITIVE CHALLENGE
// ============================================================================

const AQA_ALEVEL_FURTHER_MATHS_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, standard methods, single-step | Apply standard procedures, single concept, routine calculations |
| **Medium** | Multi-step problem solving, method selection | Chain multiple techniques, select appropriate methods, prove standard results |
| **Hard** | Proof construction, novel applications, synthesis | Construct proofs from first principles, apply to unfamiliar contexts, synthesise across topics |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires constructing mathematical proofs with logical rigour
- Demands selection and combination of techniques from across the specification
- Must handle abstract concepts and generalise to unfamiliar cases
- Requires extended chains of mathematical reasoning
- No single approach - student must devise their own proof strategy

**Easy (2-4 marks):** Standard calculations and routine procedures
**Medium (5-8 marks):** Multi-step problems and standard proofs
**Hard (9-15 marks):** Proof construction and novel problem-solving
`;

// ============================================================================
// AQA A-LEVEL FURTHER MATHS ASSESSMENT OBJECTIVES
// ============================================================================

const AQA_FM_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Further Mathematics Assessment Objectives

The same Assessment Objectives apply as for A-Level Mathematics, but are applied to
more advanced and abstract mathematical content. Further Mathematics requires deeper
understanding, more sophisticated proof techniques, and the ability to synthesise
multiple advanced concepts.

### AO1: Use and Apply Standard Techniques (50%)
Students should be able to:
- Select and correctly carry out routine procedures at Further Maths level
- Accurately recall facts, terminology and definitions for advanced topics
- Use notation and symbols correctly in complex mathematical contexts
- Execute multi-step algebraic manipulations accurately
- Apply standard techniques for:
  * Complex number arithmetic and manipulation
  * Matrix operations including finding inverses and eigenvalues
  * Advanced differentiation and integration techniques
  * Solving differential equations
  * Vector operations in 3D including cross products
  * Hyperbolic function manipulation
  * Polar coordinate conversions and calculus

### AO2: Reason, Interpret and Communicate Mathematically (25%)
Students should be able to:
- Construct rigorous mathematical arguments including formal proofs
- Make deductions and inferences from mathematical information
- Use mathematical language and notation correctly at an advanced level
- Present arguments and proofs logically and coherently
- Interpret solutions in context and evaluate their validity
- Key proof techniques required:
  * Proof by mathematical induction
  * Proof by contradiction
  * Direct proof with rigorous logical steps
  * Proof involving limits and convergence
  * Geometric proofs using vectors
  * Algebraic proof for polynomial relationships

### AO3: Solve Problems Within Mathematics and Other Contexts (25%)
Students should be able to:
- Translate problems in mathematical and non-mathematical contexts into mathematical processes
- Make and use connections between different parts of mathematics
- Interpret results in the context of the given problem
- Evaluate methods used and results obtained
- Evaluate solutions to identify limitations of models
- Applications include:
  * Modelling physical systems with differential equations
  * Geometric problems in 3D using vectors
  * Optimisation problems
  * Statistical modelling and inference
  * Mechanics problems with advanced techniques
  * Network optimisation in discrete mathematics

### Weighting Across Papers
| Assessment Objective | Paper 1 | Paper 2 | Paper 3 | Paper 4 | Overall |
|---------------------|---------|---------|---------|---------|---------|
| AO1 | ~50% | ~50% | ~50% | ~50% | 50% |
| AO2 | ~25% | ~25% | ~25% | ~25% | 25% |
| AO3 | ~25% | ~25% | ~25% | ~25% | 25% |
`;

// ============================================================================
// EXAM STRUCTURE AND PAPER INFORMATION
// ============================================================================

const AQA_FM_EXAM_STRUCTURE = `
## AQA A-Level Further Mathematics Exam Structure (7367)

### Overview
AQA A-Level Further Mathematics consists of four papers:
- Two compulsory Core papers
- Two optional papers (students choose from four options)

### Paper 1: Compulsory Core (7367/1)
- **Duration:** 1 hour 30 minutes
- **Marks:** 75
- **Content:**
  - Proof by induction
  - Complex numbers
  - Matrices
  - Further algebra and functions
  - Further calculus
  - Further vectors

### Paper 2: Compulsory Core (7367/2)
- **Duration:** 1 hour 30 minutes
- **Marks:** 75
- **Content:**
  - Polar coordinates
  - Hyperbolic functions
  - Differential equations
  - Further trigonometry
  - Numerical methods

### Paper 3: Optional Application 1 (7367/3)
Choose ONE from:
- **Option A:** Further Pure Mathematics
- **Option B:** Further Statistics
- **Option C:** Further Mechanics
- **Option D:** Discrete Mathematics

**Duration:** 1 hour 30 minutes | **Marks:** 75

### Paper 4: Optional Application 2 (7367/4)
Choose ONE from remaining options (A, B, C, or D)
**Duration:** 1 hour 30 minutes | **Marks:** 75

### Total Assessment
- **Total Marks:** 300 (4 papers x 75 marks)
- **Total Duration:** 6 hours
- **Weighting:** Each paper is 25% of total A-Level

### Calculator Policy
- All papers allow use of a scientific or graphical calculator
- Calculators must not have computer algebra system (CAS) functionality

### Formula Booklet
Students are provided with the standard formula booklet containing:
- Standard integrals and derivatives
- Trigonometric and hyperbolic identities
- Statistical tables and formulae
- Mechanics formulae

IMPORTANT: Many Further Maths formulae must be memorised and are NOT in the booklet.
`;

// ============================================================================
// COMMAND WORDS AND MARK SCHEME CONVENTIONS
// ============================================================================

const AQA_FM_COMMAND_WORDS = `
## Command Words in AQA Further Mathematics

### Primary Command Words

**Show that**
- The answer is given; students must provide complete rigorous proof
- ALL steps must be shown with clear logical progression
- No marks for just stating the result
- Example: "Show that the roots of z³ = 8 lie on a circle of radius 2"

**Prove**
- Formal mathematical proof required
- Must include clear statement of method (e.g., "Proof by induction")
- Logical steps must be explicit and justified
- Conclusion must be clearly stated
- Example: "Prove by induction that Σr² = n(n+1)(2n+1)/6"

**Hence**
- MUST use the result from the previous part
- Alternative methods receive zero marks
- Links parts together in extended questions
- Example: "Hence find the exact value of the integral"

**Hence or otherwise**
- Using previous result is suggested but not required
- Alternative valid methods receive full credit
- Previous result usually provides the most efficient approach

**Find**
- Calculate and present the answer
- Working must be shown for method marks
- Exact form usually expected unless stated otherwise
- Example: "Find the eigenvalues of matrix A"

**Determine**
- Find with mathematical justification
- May require consideration of multiple cases
- Reasoning should support the answer
- Example: "Determine whether the series converges"

**Verify**
- Confirm by substitution or direct calculation
- Usually checking a given result is correct
- Show that conditions are satisfied

**Express**
- Write in a specified form
- Example: "Express in partial fractions"

**Sketch**
- Accurate representation showing key features
- Need not be to scale but proportions reasonable
- Must label axes, intercepts, asymptotes, turning points as relevant

**State**
- Brief answer without detailed working
- Usually 1 mark
- Precise mathematical language required

### Mark Scheme Notation

**M marks (Method marks)**
- Awarded for correct method, even if arithmetic errors occur
- Can be implied by correct subsequent working
- M1, M2, M3 indicate complexity of method

**A marks (Accuracy marks)**
- Awarded for correct answers following correct method
- Usually dependent on earning associated M mark
- A1 ft means "follow through" from previous error

**B marks (Independent marks)**
- Awarded independently of method
- Often for stating key facts or making observations
- Can be earned even if other parts incorrect

**E marks (Explanation marks)**
- For quality of mathematical argument/communication
- Required for proofs and "explain" questions

**Special Notations**
- oe: "or equivalent" - accept equivalent forms
- awrt: "answers which round to" - for numerical answers
- isw: "ignore subsequent working" - don't penalise extra work
- cao: "correct answer only" - no follow through
- dep: dependent on previous mark(s)

### Worked Examples with Mark Schemes

**Example 1: Complex Numbers (5 marks)**
*Question:* Express (2 + 3i)/(1 - i) in the form a + bi where a, b are real.

*Mark Scheme:*
- M1: Multiplies numerator and denominator by conjugate (1 + i)
- A1: Correct numerator expansion: (2 + 3i)(1 + i) = 2 + 2i + 3i + 3i² = 2 + 5i - 3 = -1 + 5i
- A1: Correct denominator: (1 - i)(1 + i) = 1 - i² = 2
- M1: Divides to find a and b
- A1: Final answer: -1/2 + 5i/2 (cao)

**Example 2: Proof by Induction (6 marks)**
*Question:* Prove by induction that Σ(r=1 to n) r² = n(n+1)(2n+1)/6

*Mark Scheme:*
- B1: Base case: n = 1, LHS = 1, RHS = 1(2)(3)/6 = 1 ✓
- M1: Assumes result true for n = k (inductive hypothesis)
- M1: Considers n = k + 1, adds (k+1)² to both sides
- A1: Correct algebra: k(k+1)(2k+1)/6 + (k+1)² = (k+1)[k(2k+1) + 6(k+1)]/6
- A1: Simplifies to (k+1)(k+2)(2k+3)/6
- E1: Conclusion: states result true for n = 1 and if true for k then true for k+1, so true for all n ∈ ℕ by induction

**Example 3: Matrices and Eigenvalues (7 marks)**
*Question:* Find the eigenvalues and corresponding eigenvectors of A = ((3, 1), (1, 3))

*Mark Scheme:*
- M1: Forms characteristic equation det(A - λI) = 0
- A1: (3-λ)² - 1 = 0, so λ² - 6λ + 8 = 0
- A1: λ = 2 or λ = 4 (both eigenvalues correct)
- M1: Substitutes λ = 2 into (A - λI)v = 0
- A1: Eigenvector for λ = 2: v = k(1, -1) or equivalent
- M1: Substitutes λ = 4 into (A - λI)v = 0
- A1: Eigenvector for λ = 4: v = k(1, 1) or equivalent

**Example 4: Differential Equations (8 marks)**
*Question:* Solve d²y/dx² + 4dy/dx + 4y = e^(-2x), given y = 0 and dy/dx = 1 when x = 0

*Mark Scheme:*
- M1: Forms auxiliary equation m² + 4m + 4 = 0
- A1: m = -2 (repeated root)
- A1: Complementary function: y_c = (A + Bx)e^(-2x)
- M1: Tries particular integral y_p = Cx²e^(-2x) (due to repeated root)
- A1: Correctly finds C = 1/2, so y_p = (1/2)x²e^(-2x)
- M1: Applies boundary conditions to general solution
- A1: Correct value of A = 0
- A1: Correct value of B = 1, giving y = (x + x²/2)e^(-2x) (cao)

### Alternative Methods
- For complex number division, polar form methods are equally valid
- Matrix eigenvalue problems can use row reduction or cofactors for larger matrices
- Differential equations may be solved using integrating factors where applicable
- In proofs, logical equivalent statements are acceptable if mathematically rigorous
`;

// ============================================================================
// KEY FORMULAE (MUST BE MEMORISED - NOT IN FORMULA BOOKLET)
// ============================================================================

const AQA_FM_KEY_FORMULAE = `
## Key Further Maths Formulae (MUST BE MEMORISED)

These formulae are NOT provided in the formula booklet and must be recalled from memory.

### Complex Numbers

**Basic Properties:**
- $i^2 = -1$, $i^3 = -i$, $i^4 = 1$
- For $z = x + iy$: $\\bar{z} = x - iy$ (complex conjugate)
- $z\\bar{z} = |z|^2 = x^2 + y^2$
- $\\text{Re}(z) = x$, $\\text{Im}(z) = y$

**Modulus and Argument:**
- $|z| = \\sqrt{x^2 + y^2}$ (modulus)
- $\\arg(z) = \\arctan\\left(\\frac{y}{x}\\right)$ (adjusted for quadrant)
- Principal argument: $-\\pi < \\arg(z) \\leq \\pi$

**Forms of Complex Numbers:**
- Cartesian: $z = x + iy$
- Modulus-argument: $z = r(\\cos\\theta + i\\sin\\theta)$
- Exponential: $z = re^{i\\theta}$

**De Moivre's Theorem:**
- $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$
- $[re^{i\\theta}]^n = r^n e^{in\\theta}$

**Roots of Unity:**
- The nth roots of unity are: $e^{2\\pi ik/n}$ for $k = 0, 1, 2, ..., n-1$
- They form a regular n-gon on the unit circle
- Sum of all nth roots of unity = 0

**nth Roots of Complex Numbers:**
- The nth roots of $w = Re^{i\\phi}$ are: $R^{1/n}e^{i(\\phi + 2\\pi k)/n}$ for $k = 0, 1, ..., n-1$

### Matrices

**2×2 Matrix Inverse:**
$$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$$

**3×3 Determinant:**
$$\\det\\begin{pmatrix}a & b & c \\\\ d & e & f \\\\ g & h & i\\end{pmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)$$

**Matrix Properties:**
- $\\det(AB) = \\det(A)\\det(B)$
- $\\det(A^{-1}) = \\frac{1}{\\det(A)}$
- $\\det(kA) = k^n\\det(A)$ for n×n matrix
- $(AB)^{-1} = B^{-1}A^{-1}$
- $(A^T)^{-1} = (A^{-1})^T$

**Eigenvalues and Eigenvectors:**
- Characteristic equation: $\\det(A - \\lambda I) = 0$
- For eigenvalue $\\lambda$: $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$
- Sum of eigenvalues = trace(A)
- Product of eigenvalues = det(A)

**Cayley-Hamilton Theorem:**
- Every square matrix satisfies its own characteristic equation

### Vectors in 3D

**Cross Product (Vector Product):**
$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3\\end{vmatrix}$$

- $|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$
- $\\mathbf{a} \\times \\mathbf{b} = -\\mathbf{b} \\times \\mathbf{a}$ (anti-commutative)
- $\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}$

**Triple Scalar Product:**
- $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c}) = $ Volume of parallelepiped
- $= \\det\\begin{pmatrix}a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3\\end{pmatrix}$

**Lines in 3D:**
- Vector form: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$
- Parametric: $x = a_1 + \\lambda d_1$, etc.

**Planes:**
- Vector form: $\\mathbf{r} \\cdot \\mathbf{n} = d$
- Cartesian: $ax + by + cz = d$ where $\\mathbf{n} = (a, b, c)$

**Distance Formulae:**
- Point $(x_0, y_0, z_0)$ to plane $ax + by + cz = d$:
$$\\text{Distance} = \\frac{|ax_0 + by_0 + cz_0 - d|}{\\sqrt{a^2 + b^2 + c^2}}$$

- Shortest distance between skew lines:
$$\\text{Distance} = \\frac{|(\\mathbf{a}_1 - \\mathbf{a}_2) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}$$

### Hyperbolic Functions

**Definitions:**
- $\\sinh x = \\frac{e^x - e^{-x}}{2}$
- $\\cosh x = \\frac{e^x + e^{-x}}{2}$
- $\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$

**Reciprocal Functions:**
- $\\text{sech } x = \\frac{1}{\\cosh x}$
- $\\text{cosech } x = \\frac{1}{\\sinh x}$
- $\\text{coth } x = \\frac{1}{\\tanh x}$

**Fundamental Identity:**
- $\\cosh^2 x - \\sinh^2 x = 1$
- $1 - \\tanh^2 x = \\text{sech}^2 x$
- $\\coth^2 x - 1 = \\text{cosech}^2 x$

**Derivatives:**
- $\\frac{d}{dx}(\\sinh x) = \\cosh x$
- $\\frac{d}{dx}(\\cosh x) = \\sinh x$
- $\\frac{d}{dx}(\\tanh x) = \\text{sech}^2 x$

**Inverse Hyperbolic Functions:**
- $\\text{arsinh } x = \\ln(x + \\sqrt{x^2 + 1})$, all $x$
- $\\text{arcosh } x = \\ln(x + \\sqrt{x^2 - 1})$, $x \\geq 1$
- $\\text{artanh } x = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$, $|x| < 1$

**Osborn's Rule:**
To convert trig identities to hyperbolic: replace cos→cosh, sin→sinh,
but change sign when product of two sines appears.

### Polar Coordinates

**Conversion:**
- $x = r\\cos\\theta$, $y = r\\sin\\theta$
- $r = \\sqrt{x^2 + y^2}$, $\\theta = \\arctan(y/x)$

**Area in Polar Coordinates:**
$$A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 \\, d\\theta$$

**Arc Length:**
$$s = \\int_{\\alpha}^{\\beta} \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} \\, d\\theta$$

### Series and Summations

**Standard Sums (MUST KNOW):**
- $\\sum_{r=1}^n 1 = n$
- $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$
- $\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$
- $\\sum_{r=1}^n r^3 = \\frac{n^2(n+1)^2}{4} = \\left[\\frac{n(n+1)}{2}\\right]^2$

**Maclaurin Series (from first principles):**
$$f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + ...$$

**Standard Series Expansions:**
- $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ...$
- $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - ...$
- $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ...$
- $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - ...$ for $|x| < 1$
- $(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + ...$ (binomial)

### Differential Equations

**First Order Linear:**
For $\\frac{dy}{dx} + P(x)y = Q(x)$:
- Integrating factor: $\\mu = e^{\\int P(x) dx}$
- Solution: $y = \\frac{1}{\\mu}\\int \\mu Q(x) dx$

**Second Order Homogeneous:**
For $a\\frac{d^2y}{dx^2} + b\\frac{dy}{dx} + cy = 0$:
- Auxiliary equation: $am^2 + bm + c = 0$
- Distinct real roots $m_1, m_2$: $y = Ae^{m_1x} + Be^{m_2x}$
- Repeated root $m$: $y = (A + Bx)e^{mx}$
- Complex roots $p \\pm qi$: $y = e^{px}(A\\cos qx + B\\sin qx)$

**Simple Harmonic Motion:**
- $\\ddot{x} = -\\omega^2 x$
- Solution: $x = A\\cos(\\omega t) + B\\sin(\\omega t)$ or $x = R\\cos(\\omega t - \\phi)$
- Period: $T = \\frac{2\\pi}{\\omega}$

### Roots of Polynomials

**Relationships for Cubic $ax^3 + bx^2 + cx + d = 0$ with roots $\\alpha, \\beta, \\gamma$:**
- $\\alpha + \\beta + \\gamma = -\\frac{b}{a}$
- $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}$
- $\\alpha\\beta\\gamma = -\\frac{d}{a}$

**Relationships for Quartic $ax^4 + bx^3 + cx^2 + dx + e = 0$ with roots $\\alpha, \\beta, \\gamma, \\delta$:**
- $\\sum \\alpha = -\\frac{b}{a}$
- $\\sum \\alpha\\beta = \\frac{c}{a}$
- $\\sum \\alpha\\beta\\gamma = -\\frac{d}{a}$
- $\\alpha\\beta\\gamma\\delta = \\frac{e}{a}$
`;

// ============================================================================
// FURTHER MECHANICS FORMULAE (Option C)
// ============================================================================

const AQA_FM_MECHANICS_FORMULAE = `
## Further Mechanics Key Formulae

### Momentum and Impulse
- Momentum: $\\mathbf{p} = m\\mathbf{v}$
- Impulse: $\\mathbf{J} = \\int \\mathbf{F} \\, dt = \\Delta\\mathbf{p}$
- Conservation: $m_1\\mathbf{u}_1 + m_2\\mathbf{u}_2 = m_1\\mathbf{v}_1 + m_2\\mathbf{v}_2$

### Coefficient of Restitution
- Newton's Law of Restitution: $e = \\frac{\\text{speed of separation}}{\\text{speed of approach}}$
- For direct collision: $v_2 - v_1 = -e(u_2 - u_1)$
- $0 \\leq e \\leq 1$ ($e = 0$ perfectly inelastic, $e = 1$ perfectly elastic)

### Kinetic Energy in Collisions
- KE lost = $\\frac{1}{2}m_1u_1^2 + \\frac{1}{2}m_2u_2^2 - \\frac{1}{2}m_1v_1^2 - \\frac{1}{2}m_2v_2^2$
- For perfectly elastic collision: KE conserved

### Circular Motion
- Angular velocity: $\\omega = \\frac{d\\theta}{dt}$
- Linear speed: $v = r\\omega$
- Centripetal acceleration: $a = \\frac{v^2}{r} = r\\omega^2$
- Centripetal force: $F = \\frac{mv^2}{r} = mr\\omega^2$

### Simple Harmonic Motion
- Defining equation: $\\ddot{x} = -\\omega^2 x$
- General solution: $x = A\\cos(\\omega t + \\phi)$
- Velocity: $v = -A\\omega\\sin(\\omega t + \\phi)$
- Alternative: $v^2 = \\omega^2(A^2 - x^2)$
- Maximum speed: $v_{max} = A\\omega$ (at equilibrium)
- Maximum acceleration: $a_{max} = A\\omega^2$ (at extremes)
- Period: $T = \\frac{2\\pi}{\\omega}$

### Elastic Strings and Springs (Hooke's Law)
- Tension: $T = \\frac{\\lambda x}{l}$ where $\\lambda$ = modulus, $l$ = natural length, $x$ = extension
- Elastic potential energy: $EPE = \\frac{\\lambda x^2}{2l}$
- Spring constant: $k = \\frac{\\lambda}{l}$, so $T = kx$ and $EPE = \\frac{1}{2}kx^2$

### Work and Energy
- Work done by variable force: $W = \\int \\mathbf{F} \\cdot d\\mathbf{r}$
- Power: $P = \\mathbf{F} \\cdot \\mathbf{v}$

### Oblique Impact (with wall)
- Component parallel to wall unchanged
- Component perpendicular: $v_\\perp = eu_\\perp$
- Angle of reflection: $\\tan\\beta = e\\tan\\alpha$
`;

// ============================================================================
// FURTHER STATISTICS FORMULAE (Option B)
// ============================================================================

const AQA_FM_STATISTICS_FORMULAE = `
## Further Statistics Key Formulae

### Probability Distributions

**Discrete Uniform Distribution:**
- $P(X = x) = \\frac{1}{n}$ for $x = 1, 2, ..., n$
- $E(X) = \\frac{n+1}{2}$
- $Var(X) = \\frac{n^2 - 1}{12}$

**Poisson Distribution Po(λ):**
- $P(X = r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}$
- $E(X) = \\lambda$
- $Var(X) = \\lambda$
- Additive: If $X \\sim Po(\\lambda_1)$ and $Y \\sim Po(\\lambda_2)$, then $X + Y \\sim Po(\\lambda_1 + \\lambda_2)$

**Geometric Distribution Geo(p):**
- $P(X = r) = p(1-p)^{r-1}$ for $r = 1, 2, 3, ...$
- $E(X) = \\frac{1}{p}$
- $Var(X) = \\frac{1-p}{p^2}$

**Negative Binomial NB(r, p):**
- Number of trials to get r successes
- $P(X = x) = \\binom{x-1}{r-1}p^r(1-p)^{x-r}$
- $E(X) = \\frac{r}{p}$

### Continuous Distributions

**Continuous Uniform U(a, b):**
- $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$
- $E(X) = \\frac{a+b}{2}$
- $Var(X) = \\frac{(b-a)^2}{12}$

**Exponential Distribution Exp(λ):**
- $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$
- $F(x) = 1 - e^{-\\lambda x}$
- $E(X) = \\frac{1}{\\lambda}$
- $Var(X) = \\frac{1}{\\lambda^2}$
- Memoryless property: $P(X > s + t | X > s) = P(X > t)$

### Probability Generating Functions (PGFs)

**Definition:**
- $G_X(t) = E(t^X) = \\sum_{x=0}^{\\infty} P(X = x)t^x$

**Properties:**
- $G_X(1) = 1$
- $E(X) = G'_X(1)$
- $E(X(X-1)) = G''_X(1)$
- $Var(X) = G''_X(1) + G'_X(1) - [G'_X(1)]^2$

**Sum of Independent Variables:**
- $G_{X+Y}(t) = G_X(t) \\cdot G_Y(t)$

**Standard PGFs:**
- Binomial B(n, p): $G(t) = (1 - p + pt)^n$
- Poisson Po(λ): $G(t) = e^{\\lambda(t-1)}$
- Geometric Geo(p): $G(t) = \\frac{pt}{1 - (1-p)t}$

### Estimation

**Method of Moments:**
- Equate sample moments to population moments
- $\\bar{x} = E(X)$, $\\frac{1}{n}\\sum x^2 = E(X^2)$

**Maximum Likelihood Estimation:**
- Likelihood: $L(\\theta) = \\prod_{i=1}^n f(x_i; \\theta)$
- Log-likelihood: $\\ell(\\theta) = \\sum_{i=1}^n \\ln f(x_i; \\theta)$
- MLE: $\\frac{d\\ell}{d\\theta} = 0$

### Hypothesis Testing

**Chi-Squared Test for Goodness of Fit:**
- $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$
- Degrees of freedom: (categories - 1 - parameters estimated)

**Chi-Squared Test for Independence:**
- Expected frequency: $E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}$
- Degrees of freedom: $(r-1)(c-1)$

### Confidence Intervals

**For Mean (large sample or known σ):**
- $\\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}}$

**For Mean (small sample, unknown σ, normal population):**
- $\\bar{x} \\pm t_{n-1, \\alpha/2} \\frac{s}{\\sqrt{n}}$

**For Proportion:**
- $\\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$
`;

// ============================================================================
// DISCRETE MATHEMATICS FORMULAE (Option D)
// ============================================================================

const AQA_FM_DISCRETE_FORMULAE = `
## Discrete Mathematics Key Formulae and Concepts

### Graph Theory

**Terminology:**
- Order of graph: number of vertices
- Size of graph: number of edges
- Degree of vertex: number of edges meeting at vertex
- Handshaking lemma: $\\sum deg(v) = 2|E|$

**Special Graphs:**
- Complete graph $K_n$: every vertex connected to every other
- Bipartite graph: vertices split into two sets, edges only between sets
- Tree: connected graph with no cycles

**Eulerian Graphs:**
- Eulerian (contains Eulerian circuit): all vertices have even degree
- Semi-Eulerian (contains Eulerian path): exactly two vertices have odd degree
- Chinese Postman: repeat edges connecting odd-degree vertices

**Hamiltonian Graphs:**
- Contains a Hamiltonian cycle (visits every vertex exactly once)
- No simple test exists (NP-complete problem)

**Planarity:**
- Euler's formula for planar graphs: $V - E + F = 2$
- $K_5$ and $K_{3,3}$ are not planar
- Kuratowski's theorem: non-planar iff contains subdivision of $K_5$ or $K_{3,3}$

### Network Algorithms

**Minimum Spanning Tree:**
- Kruskal's algorithm: Add cheapest edge that doesn't create cycle
- Prim's algorithm: Grow tree from starting vertex, add cheapest edge to new vertex
- Both give MST with total weight = sum of edge weights

**Shortest Path (Dijkstra):**
- From single source to all vertices
- Works for non-negative edge weights only
- Complexity: O(V²) or O(E log V) with priority queue

**Chinese Postman Problem:**
1. Identify vertices of odd degree
2. Find minimum weight matching of odd vertices
3. Add these edges to graph
4. Find Eulerian circuit
5. Total = sum of all edges + matching weight

**Travelling Salesman Problem:**
- Lower bound: Delete vertex, find MST, add two shortest edges to deleted vertex
- Upper bound: Use nearest neighbour or MST-based heuristic

### Linear Programming

**Standard Form:**
Maximise/minimise: $Z = c_1x_1 + c_2x_2 + ... + c_nx_n$
Subject to: Linear inequality constraints
Non-negativity: $x_i \\geq 0$

**Graphical Method (2 variables):**
1. Graph constraint inequalities
2. Identify feasible region
3. Find vertices of feasible region
4. Evaluate objective function at each vertex
5. Optimal solution at a vertex

**Simplex Algorithm:**
- Convert to standard form with slack variables
- Pivot to move between vertices
- Continue until all coefficients in objective row non-negative

### Recurrence Relations

**First Order Linear:**
- $u_{n+1} = au_n + b$
- Solution: $u_n = a^n u_0 + b\\frac{a^n - 1}{a - 1}$ for $a \\neq 1$
- Or: $u_n = u_0 + bn$ for $a = 1$

**Second Order Linear (Homogeneous):**
- $u_{n+2} + pu_{n+1} + qu_n = 0$
- Auxiliary equation: $m^2 + pm + q = 0$
- Distinct roots $m_1, m_2$: $u_n = Am_1^n + Bm_2^n$
- Repeated root $m$: $u_n = (A + Bn)m^n$
- Complex roots: Use $r^n(A\\cos n\\theta + B\\sin n\\theta)$

**Particular Solution (Non-homogeneous):**
- $u_{n+2} + pu_{n+1} + qu_n = f(n)$
- General solution = complementary function + particular integral
`;

// ============================================================================
// WORKED EXAMPLES - COMPLEX NUMBERS
// ============================================================================

const AQA_FM_COMPLEX_NUMBERS_EXAMPLES = `
## Complex Numbers Worked Examples

### Example 1: De Moivre's Theorem for Trigonometric Identities
**Q:** Use De Moivre's theorem to show that $\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$. [4 marks]

**Solution:**
By De Moivre's theorem: $(\\cos\\theta + i\\sin\\theta)^3 = \\cos 3\\theta + i\\sin 3\\theta$

Expanding the LHS using binomial expansion:
$(\\cos\\theta + i\\sin\\theta)^3 = \\cos^3\\theta + 3\\cos^2\\theta(i\\sin\\theta) + 3\\cos\\theta(i\\sin\\theta)^2 + (i\\sin\\theta)^3$

$= \\cos^3\\theta + 3i\\cos^2\\theta\\sin\\theta - 3\\cos\\theta\\sin^2\\theta - i\\sin^3\\theta$

$= (\\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta) + i(3\\cos^2\\theta\\sin\\theta - \\sin^3\\theta)$

Comparing real parts:
$\\cos 3\\theta = \\cos^3\\theta - 3\\cos\\theta\\sin^2\\theta$

$= \\cos^3\\theta - 3\\cos\\theta(1 - \\cos^2\\theta)$

$= \\cos^3\\theta - 3\\cos\\theta + 3\\cos^3\\theta$

$= 4\\cos^3\\theta - 3\\cos\\theta$ as required ✓

**Mark Scheme:**
- M1: Correct expansion of $(\\cos\\theta + i\\sin\\theta)^3$
- A1: Correct simplification using $i^2 = -1$
- M1: Equating real parts and using $\\sin^2\\theta = 1 - \\cos^2\\theta$
- A1: Correct final form $4\\cos^3\\theta - 3\\cos\\theta$

---

### Example 2: Finding nth Roots of Complex Numbers
**Q:** Find the cube roots of $z = -8$ and represent them on an Argand diagram. [6 marks]

**Solution:**
Write $-8$ in exponential form:
$-8 = 8e^{i\\pi}$ (modulus 8, argument $\\pi$)

The cube roots are: $z_k = 8^{1/3}e^{i(\\pi + 2\\pi k)/3}$ for $k = 0, 1, 2$

$z_0 = 2e^{i\\pi/3} = 2(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}) = 2(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) = 1 + i\\sqrt{3}$

$z_1 = 2e^{i\\pi} = 2(\\cos\\pi + i\\sin\\pi) = -2$

$z_2 = 2e^{i5\\pi/3} = 2(\\cos\\frac{5\\pi}{3} + i\\sin\\frac{5\\pi}{3}) = 2(\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}) = 1 - i\\sqrt{3}$

The three roots are: $1 + i\\sqrt{3}$, $-2$, $1 - i\\sqrt{3}$

They lie on a circle of radius 2 centered at origin, equally spaced at angles of $\\frac{2\\pi}{3}$.

**Mark Scheme:**
- B1: $-8 = 8e^{i\\pi}$ or $8(\\cos\\pi + i\\sin\\pi)$
- M1: Using formula for nth roots
- A1: Correct expression for general root
- A1: First root $1 + i\\sqrt{3}$
- A1: All three roots correct
- B1: Correct Argand diagram showing circle and equal spacing

---

### Example 3: Loci in the Complex Plane
**Q:** Sketch the locus of points satisfying $|z - 3 - 4i| = |z + 1|$. [4 marks]

**Solution:**
The equation $|z - 3 - 4i| = |z + 1|$ means: distance from $(3, 4)$ = distance from $(-1, 0)$

This is the perpendicular bisector of the line segment joining $(3, 4)$ and $(-1, 0)$.

Midpoint: $\\left(\\frac{3+(-1)}{2}, \\frac{4+0}{2}\\right) = (1, 2)$

Gradient of line joining the points: $\\frac{4-0}{3-(-1)} = \\frac{4}{4} = 1$

Gradient of perpendicular bisector: $-1$

Equation: $y - 2 = -1(x - 1)$, i.e., $y = -x + 3$ or $x + y = 3$

In complex form: $\\text{Re}(z) + \\text{Im}(z) = 3$

**Mark Scheme:**
- M1: Recognising as perpendicular bisector
- A1: Correct midpoint (1, 2)
- A1: Correct gradient of perpendicular (-1)
- A1: Correct equation $x + y = 3$ and sketch

---

### Example 4: Complex Numbers and Geometry
**Q:** The complex numbers $z_1 = 2 + i$ and $z_2 = -1 + 3i$ represent two vertices of an equilateral triangle. Find the possible complex numbers representing the third vertex. [6 marks]

**Solution:**
For an equilateral triangle, the third vertex is obtained by rotating $z_2 - z_1$ by $\\pm\\frac{\\pi}{3}$ about $z_1$.

$z_2 - z_1 = (-1 + 3i) - (2 + i) = -3 + 2i$

Rotation by $\\frac{\\pi}{3}$: multiply by $e^{i\\pi/3} = \\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3} = \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$

$(-3 + 2i)(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) = -\\frac{3}{2} + i\\frac{-3\\sqrt{3}}{2} + i + i^2\\sqrt{3}$
$= -\\frac{3}{2} - \\sqrt{3} + i(1 - \\frac{3\\sqrt{3}}{2})$
$= \\frac{-3 - 2\\sqrt{3}}{2} + i\\frac{2 - 3\\sqrt{3}}{2}$

$z_3 = z_1 + $ rotated vector $= (2 + i) + \\frac{-3 - 2\\sqrt{3}}{2} + i\\frac{2 - 3\\sqrt{3}}{2}$
$= \\frac{1 - 2\\sqrt{3}}{2} + i\\frac{4 - 3\\sqrt{3}}{2}$

Similarly for rotation by $-\\frac{\\pi}{3}$:
$z_3' = \\frac{1 + 2\\sqrt{3}}{2} + i\\frac{4 + 3\\sqrt{3}}{2}$

**Mark Scheme:**
- M1: Recognising rotation method
- A1: Correct $z_2 - z_1 = -3 + 2i$
- M1: Multiplying by $e^{\\pm i\\pi/3}$
- A1: Correct rotation calculation
- A1: First third vertex correct
- A1: Second third vertex correct
`;

// ============================================================================
// WORKED EXAMPLES - MATRICES
// ============================================================================

const AQA_FM_MATRICES_EXAMPLES = `
## Matrices Worked Examples

### Example 1: Finding Eigenvalues and Eigenvectors
**Q:** Find the eigenvalues and corresponding eigenvectors of $A = \\begin{pmatrix}4 & 1 \\\\ 2 & 3\\end{pmatrix}$. [8 marks]

**Solution:**
**Finding eigenvalues:**
Characteristic equation: $\\det(A - \\lambda I) = 0$

$\\det\\begin{pmatrix}4-\\lambda & 1 \\\\ 2 & 3-\\lambda\\end{pmatrix} = 0$

$(4-\\lambda)(3-\\lambda) - 2 = 0$

$12 - 7\\lambda + \\lambda^2 - 2 = 0$

$\\lambda^2 - 7\\lambda + 10 = 0$

$(\\lambda - 5)(\\lambda - 2) = 0$

**Eigenvalues: $\\lambda_1 = 5$ and $\\lambda_2 = 2$**

**Finding eigenvectors:**

For $\\lambda_1 = 5$: $(A - 5I)\\mathbf{v} = \\mathbf{0}$

$\\begin{pmatrix}-1 & 1 \\\\ 2 & -2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 0\\end{pmatrix}$

$-x + y = 0$, so $y = x$

**Eigenvector: $\\mathbf{v}_1 = \\begin{pmatrix}1 \\\\ 1\\end{pmatrix}$ (or any scalar multiple)**

For $\\lambda_2 = 2$: $(A - 2I)\\mathbf{v} = \\mathbf{0}$

$\\begin{pmatrix}2 & 1 \\\\ 2 & 1\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 0\\end{pmatrix}$

$2x + y = 0$, so $y = -2x$

**Eigenvector: $\\mathbf{v}_2 = \\begin{pmatrix}1 \\\\ -2\\end{pmatrix}$ (or any scalar multiple)**

**Mark Scheme:**
- M1: Setting up characteristic equation
- A1: Correct expansion $(4-\\lambda)(3-\\lambda) - 2 = 0$
- A1: Correct quadratic $\\lambda^2 - 7\\lambda + 10 = 0$
- A1: Both eigenvalues correct: $\\lambda = 5, 2$
- M1: Setting up $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$
- A1: Eigenvector for $\\lambda = 5$ correct
- A1: Eigenvector for $\\lambda = 2$ correct
- A1: All answers clearly stated

---

### Example 2: Diagonalisation
**Q:** Given $A = \\begin{pmatrix}4 & 1 \\\\ 2 & 3\\end{pmatrix}$ with eigenvalues 5 and 2, and corresponding eigenvectors $\\begin{pmatrix}1 \\\\ 1\\end{pmatrix}$ and $\\begin{pmatrix}1 \\\\ -2\\end{pmatrix}$:

(a) Find matrices $P$ and $D$ such that $A = PDP^{-1}$ [4 marks]
(b) Hence find $A^{10}$ [4 marks]

**Solution:**

(a) $P = \\begin{pmatrix}1 & 1 \\\\ 1 & -2\\end{pmatrix}$ (eigenvectors as columns)

$D = \\begin{pmatrix}5 & 0 \\\\ 0 & 2\\end{pmatrix}$ (eigenvalues on diagonal)

$P^{-1} = \\frac{1}{-2-1}\\begin{pmatrix}-2 & -1 \\\\ -1 & 1\\end{pmatrix} = \\frac{1}{-3}\\begin{pmatrix}-2 & -1 \\\\ -1 & 1\\end{pmatrix} = \\begin{pmatrix}\\frac{2}{3} & \\frac{1}{3} \\\\ \\frac{1}{3} & -\\frac{1}{3}\\end{pmatrix}$

(b) $A^{10} = PD^{10}P^{-1}$

$D^{10} = \\begin{pmatrix}5^{10} & 0 \\\\ 0 & 2^{10}\\end{pmatrix} = \\begin{pmatrix}9765625 & 0 \\\\ 0 & 1024\\end{pmatrix}$

$A^{10} = \\begin{pmatrix}1 & 1 \\\\ 1 & -2\\end{pmatrix}\\begin{pmatrix}9765625 & 0 \\\\ 0 & 1024\\end{pmatrix}\\begin{pmatrix}\\frac{2}{3} & \\frac{1}{3} \\\\ \\frac{1}{3} & -\\frac{1}{3}\\end{pmatrix}$

$= \\begin{pmatrix}9765625 & 1024 \\\\ 9765625 & -2048\\end{pmatrix}\\begin{pmatrix}\\frac{2}{3} & \\frac{1}{3} \\\\ \\frac{1}{3} & -\\frac{1}{3}\\end{pmatrix}$

$= \\begin{pmatrix}\\frac{2(9765625) + 1024}{3} & \\frac{9765625 - 1024}{3} \\\\ \\frac{2(9765625) - 2048}{3} & \\frac{9765625 + 2048}{3}\\end{pmatrix}$

$= \\begin{pmatrix}6511082 & 3254867 \\\\ 6510734 & 3255891\\end{pmatrix}$

**Mark Scheme:**
(a)
- B1: P correct
- B1: D correct
- M1: Method for $P^{-1}$
- A1: $P^{-1}$ correct

(b)
- M1: Using $A^n = PD^nP^{-1}$
- A1: $D^{10}$ correct
- M1: Matrix multiplication
- A1: Final answer correct

---

### Example 3: Matrix Transformations
**Q:** The matrix $M = \\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$ represents a transformation in 2D.

(a) Describe the geometric transformation represented by $M$. [2 marks]
(b) Find the matrix representing the transformation $M$ followed by enlargement scale factor 2 about the origin. [2 marks]
(c) Find the image of the point $(3, 1)$ under this combined transformation. [2 marks]

**Solution:**

(a) $M$ represents a rotation of 90° anticlockwise about the origin.

Check: $M\\begin{pmatrix}1 \\\\ 0\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 1\\end{pmatrix}$ (i maps to j)
$M\\begin{pmatrix}0 \\\\ 1\\end{pmatrix} = \\begin{pmatrix}-1 \\\\ 0\\end{pmatrix}$ (j maps to -i)

(b) Enlargement matrix: $E = \\begin{pmatrix}2 & 0 \\\\ 0 & 2\\end{pmatrix}$

Combined transformation (M first, then E): $EM = \\begin{pmatrix}2 & 0 \\\\ 0 & 2\\end{pmatrix}\\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix} = \\begin{pmatrix}0 & -2 \\\\ 2 & 0\\end{pmatrix}$

(c) Image of $(3, 1)$:
$\\begin{pmatrix}0 & -2 \\\\ 2 & 0\\end{pmatrix}\\begin{pmatrix}3 \\\\ 1\\end{pmatrix} = \\begin{pmatrix}-2 \\\\ 6\\end{pmatrix}$

The image is $(-2, 6)$.

**Mark Scheme:**
(a) B2: Rotation 90° anticlockwise (or equivalent description)

(b) M1: Correct order EM (not ME)
A1: Correct combined matrix

(c) M1: Matrix multiplication
A1: Correct image (-2, 6)

---

### Example 4: Systems of Equations and Geometric Interpretation
**Q:** Consider the system of equations:
$x + 2y + 3z = 1$
$2x + 3y + 4z = 2$
$3x + 5y + 7z = k$

(a) For what value of $k$ does this system have solutions? [4 marks]
(b) Interpret geometrically the case when there are no solutions. [2 marks]

**Solution:**

(a) Write in matrix form and row reduce:

$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 2 & 3 & 4 & | & 2 \\\\ 3 & 5 & 7 & | & k\\end{pmatrix}$

$R_2 - 2R_1, R_3 - 3R_1$:

$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 0 & -1 & -2 & | & 0 \\\\ 0 & -1 & -2 & | & k-3\\end{pmatrix}$

$R_3 - R_2$:

$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 0 & -1 & -2 & | & 0 \\\\ 0 & 0 & 0 & | & k-3\\end{pmatrix}$

For solutions to exist: $k - 3 = 0$, so $k = 3$

(b) When $k \\neq 3$, the three planes do not all pass through a common line.
The third equation represents a plane parallel to (but not coincident with) the line of intersection of the first two planes.
The three planes form a "triangular prism" shape with no common point.

**Mark Scheme:**
(a)
- M1: Setting up augmented matrix
- M1: Row reduction
- A1: Final row echelon form
- A1: $k = 3$

(b)
- B1: Reference to planes
- B1: Correct geometric description
`;

// ============================================================================
// WORKED EXAMPLES - PROOF BY INDUCTION
// ============================================================================

const AQA_FM_PROOF_EXAMPLES = `
## Proof by Induction Worked Examples

### Example 1: Summation Formula
**Q:** Prove by induction that $\\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}$. [5 marks]

**Solution:**

**Base case (n = 1):**
LHS: $\\sum_{r=1}^1 r^2 = 1^2 = 1$
RHS: $\\frac{1(1+1)(2(1)+1)}{6} = \\frac{1 \\times 2 \\times 3}{6} = 1$ ✓

**Inductive hypothesis:**
Assume true for $n = k$, i.e., assume $\\sum_{r=1}^k r^2 = \\frac{k(k+1)(2k+1)}{6}$

**Inductive step:**
Prove true for $n = k + 1$:

$\\sum_{r=1}^{k+1} r^2 = \\sum_{r=1}^k r^2 + (k+1)^2$

$= \\frac{k(k+1)(2k+1)}{6} + (k+1)^2$ (using inductive hypothesis)

$= \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6}$

$= \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$

$= \\frac{(k+1)[2k^2 + k + 6k + 6]}{6}$

$= \\frac{(k+1)[2k^2 + 7k + 6]}{6}$

$= \\frac{(k+1)(k+2)(2k+3)}{6}$

$= \\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$

This is the formula with $n = k + 1$. ✓

**Conclusion:**
The statement is true for $n = 1$, and if true for $n = k$ then true for $n = k + 1$.
Therefore, by the principle of mathematical induction, the statement is true for all positive integers $n$.

**Mark Scheme:**
- B1: Base case verified correctly
- M1: Stating inductive hypothesis clearly
- M1: Showing working towards $P(k+1)$
- A1: Correct algebraic manipulation to obtain required form
- A1: Clear conclusion statement

---

### Example 2: Divisibility Proof
**Q:** Prove by induction that $5^n + 8^n + 3$ is divisible by 4 for all positive integers $n$. [6 marks]

**Solution:**

Let $P(n)$ be the proposition "$4 | (5^n + 8^n + 3)$"

**Base case (n = 1):**
$5^1 + 8^1 + 3 = 5 + 8 + 3 = 16 = 4 \\times 4$ ✓
16 is divisible by 4, so $P(1)$ is true.

**Inductive hypothesis:**
Assume $P(k)$ is true for some $k \\geq 1$, i.e., $5^k + 8^k + 3 = 4m$ for some integer $m$.

**Inductive step:**
Consider $5^{k+1} + 8^{k+1} + 3$:

$= 5 \\cdot 5^k + 8 \\cdot 8^k + 3$

$= 5 \\cdot 5^k + 8 \\cdot 8^k + 3 + 4 \\cdot 8^k - 4 \\cdot 8^k$

$= 5 \\cdot 5^k + 4 \\cdot 8^k + 4 \\cdot 8^k + 3$ ... rearranging

Actually, better approach:
$5^{k+1} + 8^{k+1} + 3 = 5(5^k + 8^k + 3) - 5 \\cdot 8^k + 8 \\cdot 8^k - 5 \\cdot 3 + 3$

Let me restart with cleaner approach:
$5^{k+1} + 8^{k+1} + 3 = 5 \\cdot 5^k + 8 \\cdot 8^k + 3$

$= 5(5^k + 8^k + 3) - 5 \\cdot 8^k - 15 + 8 \\cdot 8^k + 3$

$= 5(5^k + 8^k + 3) + 3 \\cdot 8^k - 12$

$= 5(5^k + 8^k + 3) + 3 \\cdot 8^k - 12$

Since $8^k$ is even (always), $3 \\cdot 8^k$ is divisible by...

Better method:
$5^{k+1} + 8^{k+1} + 3 = 5 \\cdot 5^k + 8 \\cdot 8^k + 3$

$= 4 \\cdot 5^k + 5^k + 4 \\cdot 8^k + 4 \\cdot 8^k + 3$

$= 4(5^k + 2 \\cdot 8^k) + (5^k + 8^k + 3)$

$= 4(5^k + 2 \\cdot 8^k) + 4m$ (by inductive hypothesis)

$= 4(5^k + 2 \\cdot 8^k + m)$

This is divisible by 4. ✓

**Conclusion:**
True for $n = 1$, and $P(k) \\Rightarrow P(k+1)$.
By mathematical induction, true for all positive integers $n$.

**Mark Scheme:**
- B1: Base case correctly verified
- M1: Clear statement of inductive hypothesis
- M1: Expressing $5^{k+1} + 8^{k+1} + 3$ in useful form
- A1: Successfully linking to inductive hypothesis
- A1: Expression shown to be 4 × integer
- A1: Clear conclusion

---

### Example 3: Matrix Power Induction
**Q:** Let $A = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$. Prove by induction that $A^n = \\begin{pmatrix}1 & 2n \\\\ 0 & 1\\end{pmatrix}$ for all positive integers $n$. [5 marks]

**Solution:**

**Base case (n = 1):**
$A^1 = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$

Formula gives: $\\begin{pmatrix}1 & 2(1) \\\\ 0 & 1\\end{pmatrix} = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$ ✓

**Inductive hypothesis:**
Assume true for $n = k$: $A^k = \\begin{pmatrix}1 & 2k \\\\ 0 & 1\\end{pmatrix}$

**Inductive step:**
$A^{k+1} = A^k \\cdot A$

$= \\begin{pmatrix}1 & 2k \\\\ 0 & 1\\end{pmatrix}\\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$

$= \\begin{pmatrix}1 \\cdot 1 + 2k \\cdot 0 & 1 \\cdot 2 + 2k \\cdot 1 \\\\ 0 \\cdot 1 + 1 \\cdot 0 & 0 \\cdot 2 + 1 \\cdot 1\\end{pmatrix}$

$= \\begin{pmatrix}1 & 2 + 2k \\\\ 0 & 1\\end{pmatrix}$

$= \\begin{pmatrix}1 & 2(k+1) \\\\ 0 & 1\\end{pmatrix}$

This is the formula with $n = k + 1$. ✓

**Conclusion:**
True for $n = 1$, and if true for $n = k$ then true for $n = k + 1$.
By mathematical induction, true for all positive integers $n$.

**Mark Scheme:**
- B1: Base case verified
- M1: Stating inductive hypothesis with matrix
- M1: Computing $A^{k+1} = A^k \\cdot A$
- A1: Correct matrix multiplication
- A1: Conclusion and result in required form

---

### Example 4: Inequality Proof
**Q:** Prove by induction that $2^n > n^2$ for all integers $n \\geq 5$. [6 marks]

**Solution:**

**Base case (n = 5):**
$2^5 = 32$
$5^2 = 25$
$32 > 25$ ✓

**Inductive hypothesis:**
Assume true for $n = k$ where $k \\geq 5$: $2^k > k^2$

**Inductive step:**
We need to show $2^{k+1} > (k+1)^2$

$2^{k+1} = 2 \\cdot 2^k > 2k^2$ (using inductive hypothesis)

We need to show $2k^2 > (k+1)^2 = k^2 + 2k + 1$

$2k^2 - (k^2 + 2k + 1) = k^2 - 2k - 1$

For $k \\geq 5$: $k^2 - 2k - 1 = k(k-2) - 1$

When $k = 5$: $5(3) - 1 = 14 > 0$ ✓
When $k \\geq 5$: $k - 2 \\geq 3$, so $k(k-2) \\geq 5 \\cdot 3 = 15 > 1$

Therefore $k^2 - 2k - 1 > 0$ for all $k \\geq 5$

This means $2k^2 > k^2 + 2k + 1 = (k+1)^2$

So $2^{k+1} > 2k^2 > (k+1)^2$ ✓

**Conclusion:**
True for $n = 5$, and if true for $n = k$ ($k \\geq 5$) then true for $n = k + 1$.
By mathematical induction, $2^n > n^2$ for all integers $n \\geq 5$.

**Mark Scheme:**
- B1: Base case $n = 5$ verified
- M1: Clear inductive hypothesis
- M1: Using hypothesis to get $2^{k+1} > 2k^2$
- M1: Comparing $2k^2$ with $(k+1)^2$
- A1: Showing $k^2 - 2k - 1 > 0$ for $k \\geq 5$
- A1: Clear conclusion
`;

// ============================================================================
// WORKED EXAMPLES - FURTHER VECTORS
// ============================================================================

const AQA_FM_VECTORS_EXAMPLES = `
## Further Vectors Worked Examples

### Example 1: Shortest Distance Between Skew Lines
**Q:** Find the shortest distance between the lines:
$L_1: \\mathbf{r} = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix} + \\lambda\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$
$L_2: \\mathbf{r} = \\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix} + \\mu\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$ [6 marks]

**Solution:**
Points on lines: $\\mathbf{a}_1 = (1, 2, 3)$, $\\mathbf{a}_2 = (0, 1, 0)$
Direction vectors: $\\mathbf{d}_1 = (1, 1, 0)$, $\\mathbf{d}_2 = (0, 1, 1)$

First, check lines are skew (not parallel, don't intersect):
$\\mathbf{d}_1 \\neq k\\mathbf{d}_2$, so not parallel ✓

For intersection: $1 + \\lambda = 0$, $2 + \\lambda = 1 + \\mu$, $3 = \\mu$
From first: $\\lambda = -1$. From third: $\\mu = 3$
Check in second: $2 + (-1) = 1 \\neq 1 + 3 = 4$. No intersection. ✓

Cross product:
$\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1\\end{vmatrix}$

$= \\mathbf{i}(1 \\cdot 1 - 0 \\cdot 1) - \\mathbf{j}(1 \\cdot 1 - 0 \\cdot 0) + \\mathbf{k}(1 \\cdot 1 - 1 \\cdot 0)$
$= \\mathbf{i}(1) - \\mathbf{j}(1) + \\mathbf{k}(1)$
$= (1, -1, 1)$

$|\\mathbf{d}_1 \\times \\mathbf{d}_2| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$

Vector connecting points on lines:
$\\mathbf{a}_1 - \\mathbf{a}_2 = (1 - 0, 2 - 1, 3 - 0) = (1, 1, 3)$

Shortest distance:
$d = \\frac{|(\\mathbf{a}_1 - \\mathbf{a}_2) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}$

$(\\mathbf{a}_1 - \\mathbf{a}_2) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2) = (1)(1) + (1)(-1) + (3)(1) = 1 - 1 + 3 = 3$

$d = \\frac{|3|}{\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$

**Mark Scheme:**
- M1: Identifying correct formula to use
- A1: Correct cross product $(1, -1, 1)$
- A1: Correct magnitude $\\sqrt{3}$
- M1: Computing $(\\mathbf{a}_1 - \\mathbf{a}_2)$
- A1: Correct dot product = 3
- A1: Final answer $\\sqrt{3}$

---

### Example 2: Line-Plane Intersection
**Q:** Find the point of intersection of the line $\\mathbf{r} = \\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix} + t\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}$ with the plane $2x - y + 3z = 7$. [4 marks]

**Solution:**
Parametric form of line:
$x = 2 + t$
$y = -1 + 2t$
$z = 3 - t$

Substitute into plane equation:
$2(2 + t) - (-1 + 2t) + 3(3 - t) = 7$

$4 + 2t + 1 - 2t + 9 - 3t = 7$

$14 - 3t = 7$

$3t = 7$

$t = \\frac{7}{3}$

Point of intersection:
$x = 2 + \\frac{7}{3} = \\frac{13}{3}$
$y = -1 + 2 \\cdot \\frac{7}{3} = -1 + \\frac{14}{3} = \\frac{11}{3}$
$z = 3 - \\frac{7}{3} = \\frac{2}{3}$

**Point of intersection: $\\left(\\frac{13}{3}, \\frac{11}{3}, \\frac{2}{3}\\right)$**

**Mark Scheme:**
- M1: Substituting parametric equations into plane equation
- A1: Correct equation in $t$
- A1: $t = \\frac{7}{3}$
- A1: Correct coordinates of intersection point

---

### Example 3: Angle Between Line and Plane
**Q:** Find the acute angle between the line $\\mathbf{r} = \\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix} + \\lambda\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$ and the plane $x + 2y - 2z = 5$. [4 marks]

**Solution:**
Direction vector of line: $\\mathbf{d} = (2, 1, -1)$
Normal vector of plane: $\\mathbf{n} = (1, 2, -2)$

The angle $\\theta$ between the line and the plane is related to the angle $\\phi$ between $\\mathbf{d}$ and $\\mathbf{n}$ by:
$\\theta = 90° - \\phi$ (or $\\phi - 90°$ depending on orientation)

So $\\sin\\theta = |\\cos\\phi| = \\frac{|\\mathbf{d} \\cdot \\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}$

$\\mathbf{d} \\cdot \\mathbf{n} = (2)(1) + (1)(2) + (-1)(-2) = 2 + 2 + 2 = 6$

$|\\mathbf{d}| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$
$|\\mathbf{n}| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$

$\\sin\\theta = \\frac{6}{\\sqrt{6} \\cdot 3} = \\frac{6}{3\\sqrt{6}} = \\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$

$\\theta = \\arcsin\\left(\\frac{\\sqrt{6}}{3}\\right) \\approx 54.7°$

**Mark Scheme:**
- M1: Using formula involving sine for line-plane angle
- A1: Correct dot product = 6
- A1: Correct magnitudes
- A1: Correct angle (exact or to 3 s.f.)

---

### Example 4: Volume of Tetrahedron
**Q:** Find the volume of the tetrahedron with vertices at $A(1, 0, 0)$, $B(0, 2, 0)$, $C(0, 0, 3)$, and $D(1, 1, 1)$. [5 marks]

**Solution:**
Using A as base point:
$\\overrightarrow{AB} = (-1, 2, 0)$
$\\overrightarrow{AC} = (-1, 0, 3)$
$\\overrightarrow{AD} = (0, 1, 1)$

Volume of tetrahedron = $\\frac{1}{6}|\\overrightarrow{AB} \\cdot (\\overrightarrow{AC} \\times \\overrightarrow{AD})|$

First, find $\\overrightarrow{AC} \\times \\overrightarrow{AD}$:

$\\overrightarrow{AC} \\times \\overrightarrow{AD} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ -1 & 0 & 3 \\\\ 0 & 1 & 1\\end{vmatrix}$

$= \\mathbf{i}(0 - 3) - \\mathbf{j}(-1 - 0) + \\mathbf{k}(-1 - 0)$
$= (-3, 1, -1)$

Triple scalar product:
$\\overrightarrow{AB} \\cdot (\\overrightarrow{AC} \\times \\overrightarrow{AD}) = (-1)(-3) + (2)(1) + (0)(-1)$
$= 3 + 2 + 0 = 5$

Volume = $\\frac{1}{6}|5| = \\frac{5}{6}$ cubic units

**Mark Scheme:**
- M1: Setting up vectors from one vertex
- M1: Using triple scalar product formula
- A1: Correct cross product $(-3, 1, -1)$
- A1: Correct triple scalar product = 5
- A1: Correct volume $\\frac{5}{6}$
`;

// ============================================================================
// WORKED EXAMPLES - DIFFERENTIAL EQUATIONS
// ============================================================================

const AQA_FM_DIFF_EQ_EXAMPLES = `
## Differential Equations Worked Examples

### Example 1: Second Order Homogeneous (Distinct Real Roots)
**Q:** Solve $\\frac{d^2y}{dx^2} - 5\\frac{dy}{dx} + 6y = 0$, given $y(0) = 1$ and $y'(0) = 1$. [6 marks]

**Solution:**
**Step 1: Auxiliary equation**
$m^2 - 5m + 6 = 0$
$(m - 2)(m - 3) = 0$
$m = 2$ or $m = 3$ (distinct real roots)

**Step 2: General solution**
$y = Ae^{2x} + Be^{3x}$

**Step 3: Apply initial conditions**
$y(0) = 1$: $A + B = 1$ ... (1)

$y' = 2Ae^{2x} + 3Be^{3x}$
$y'(0) = 1$: $2A + 3B = 1$ ... (2)

**Step 4: Solve simultaneous equations**
From (1): $A = 1 - B$
Substitute into (2): $2(1 - B) + 3B = 1$
$2 - 2B + 3B = 1$
$B = -1$
$A = 1 - (-1) = 2$

**Solution: $y = 2e^{2x} - e^{3x}$**

**Mark Scheme:**
- M1: Forming auxiliary equation
- A1: Correct roots $m = 2, 3$
- A1: Correct general solution form
- M1: Differentiating and applying initial conditions
- A1: Correct simultaneous equations
- A1: Correct particular solution $y = 2e^{2x} - e^{3x}$

---

### Example 2: Second Order Homogeneous (Complex Roots)
**Q:** Solve $\\frac{d^2y}{dx^2} + 4\\frac{dy}{dx} + 13y = 0$. [4 marks]

**Solution:**
**Auxiliary equation:**
$m^2 + 4m + 13 = 0$

Using quadratic formula:
$m = \\frac{-4 \\pm \\sqrt{16 - 52}}{2} = \\frac{-4 \\pm \\sqrt{-36}}{2} = \\frac{-4 \\pm 6i}{2} = -2 \\pm 3i$

Complex roots: $p = -2$, $q = 3$

**General solution:**
$y = e^{-2x}(A\\cos 3x + B\\sin 3x)$

**Mark Scheme:**
- M1: Forming auxiliary equation
- A1: Correct complex roots $-2 \\pm 3i$
- M1: Identifying $p = -2$, $q = 3$
- A1: Correct general solution

---

### Example 3: Second Order Non-Homogeneous
**Q:** Solve $\\frac{d^2y}{dx^2} - 3\\frac{dy}{dx} + 2y = 4e^{3x}$. [7 marks]

**Solution:**
**Step 1: Complementary Function (CF)**
Auxiliary equation: $m^2 - 3m + 2 = 0$
$(m - 1)(m - 2) = 0$
$m = 1$ or $m = 2$

$y_{CF} = Ae^x + Be^{2x}$

**Step 2: Particular Integral (PI)**
Since RHS is $4e^{3x}$ and $e^{3x}$ is not in CF, try $y_{PI} = ke^{3x}$

$\\frac{dy}{dx} = 3ke^{3x}$
$\\frac{d^2y}{dx^2} = 9ke^{3x}$

Substitute:
$9ke^{3x} - 3(3ke^{3x}) + 2(ke^{3x}) = 4e^{3x}$
$9ke^{3x} - 9ke^{3x} + 2ke^{3x} = 4e^{3x}$
$2ke^{3x} = 4e^{3x}$
$k = 2$

$y_{PI} = 2e^{3x}$

**Step 3: General Solution**
$y = y_{CF} + y_{PI} = Ae^x + Be^{2x} + 2e^{3x}$

**Mark Scheme:**
- M1: Finding auxiliary equation
- A1: Correct CF $y = Ae^x + Be^{2x}$
- M1: Correct trial function for PI
- M1: Substituting and equating coefficients
- A1: $k = 2$
- A1: Correct PI $y_{PI} = 2e^{3x}$
- A1: Correct general solution

---

### Example 4: First Order with Integrating Factor
**Q:** Solve $\\frac{dy}{dx} + \\frac{2y}{x} = x^2$, given $y = 2$ when $x = 1$. [6 marks]

**Solution:**
This is in standard form $\\frac{dy}{dx} + P(x)y = Q(x)$ where $P(x) = \\frac{2}{x}$, $Q(x) = x^2$

**Step 1: Integrating Factor**
$\\mu = e^{\\int P(x) dx} = e^{\\int \\frac{2}{x} dx} = e^{2\\ln|x|} = e^{\\ln x^2} = x^2$

**Step 2: Multiply through by integrating factor**
$x^2\\frac{dy}{dx} + 2xy = x^4$

LHS is $\\frac{d}{dx}(x^2 y)$

$\\frac{d}{dx}(x^2 y) = x^4$

**Step 3: Integrate both sides**
$x^2 y = \\int x^4 dx = \\frac{x^5}{5} + C$

$y = \\frac{x^3}{5} + \\frac{C}{x^2}$

**Step 4: Apply initial condition**
$y(1) = 2$: $\\frac{1}{5} + C = 2$
$C = 2 - \\frac{1}{5} = \\frac{9}{5}$

**Solution: $y = \\frac{x^3}{5} + \\frac{9}{5x^2}$ or $y = \\frac{x^5 + 9}{5x^2}$**

**Mark Scheme:**
- M1: Identifying integrating factor method
- A1: Correct integrating factor $x^2$
- M1: Recognising $\\frac{d}{dx}(x^2 y)$
- A1: Correct integration
- M1: Applying initial condition
- A1: Correct particular solution

---

### Example 5: Coupled First Order (SHM Derivation)
**Q:** A particle performs SHM about a point O. At time $t$ seconds, its displacement from O is $x$ metres. Given that $\\frac{d^2x}{dt^2} = -16x$, and initially $x = 0$ and $\\frac{dx}{dt} = 8$, find:
(a) $x$ in terms of $t$ [5 marks]
(b) The amplitude and period of the motion [2 marks]

**Solution:**

(a) $\\frac{d^2x}{dt^2} = -16x$

This is SHM with $\\omega^2 = 16$, so $\\omega = 4$

General solution: $x = A\\cos 4t + B\\sin 4t$

Applying initial conditions:
$x(0) = 0$: $A = 0$

$\\frac{dx}{dt} = -4A\\sin 4t + 4B\\cos 4t$
$\\frac{dx}{dt}(0) = 8$: $4B = 8$, so $B = 2$

**$x = 2\\sin 4t$**

(b) Amplitude = coefficient of trig function = 2 metres

Period $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$ seconds

**Mark Scheme:**
(a)
- B1: Identifying $\\omega = 4$
- A1: Correct general solution form
- M1: Applying initial conditions
- A1: $A = 0$, $B = 2$
- A1: $x = 2\\sin 4t$

(b)
- B1: Amplitude = 2
- B1: Period = $\\frac{\\pi}{2}$
`;

// ============================================================================
// WORKED EXAMPLES - HYPERBOLIC FUNCTIONS
// ============================================================================

const AQA_FM_HYPERBOLIC_EXAMPLES = `
## Hyperbolic Functions Worked Examples

### Example 1: Solving Hyperbolic Equations
**Q:** Solve $\\cosh x = 2$, giving your answer in logarithmic form. [4 marks]

**Solution:**
Using the definition: $\\cosh x = \\frac{e^x + e^{-x}}{2} = 2$

$e^x + e^{-x} = 4$

Multiply by $e^x$:
$(e^x)^2 + 1 = 4e^x$

$(e^x)^2 - 4e^x + 1 = 0$

Let $u = e^x$:
$u^2 - 4u + 1 = 0$

$u = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$

Since $e^x > 0$, both solutions are valid:
$e^x = 2 + \\sqrt{3}$ or $e^x = 2 - \\sqrt{3}$

$x = \\ln(2 + \\sqrt{3})$ or $x = \\ln(2 - \\sqrt{3})$

Note: $\\ln(2 - \\sqrt{3}) = \\ln\\left(\\frac{1}{2 + \\sqrt{3}}\\right) = -\\ln(2 + \\sqrt{3})$

**Solutions: $x = \\pm\\ln(2 + \\sqrt{3})$**

This matches the formula: $\\text{arcosh } 2 = \\ln(2 + \\sqrt{3})$

**Mark Scheme:**
- M1: Using definition and forming quadratic
- A1: Correct quadratic $u^2 - 4u + 1 = 0$
- A1: Correct solutions for $u$
- A1: Both solutions for $x$ in logarithmic form

---

### Example 2: Proving Hyperbolic Identities
**Q:** Prove that $\\sinh 2x = 2\\sinh x \\cosh x$. [3 marks]

**Solution:**
**Method 1: From definitions**
LHS: $\\sinh 2x = \\frac{e^{2x} - e^{-2x}}{2}$

RHS: $2\\sinh x \\cosh x = 2 \\cdot \\frac{e^x - e^{-x}}{2} \\cdot \\frac{e^x + e^{-x}}{2}$

$= \\frac{(e^x - e^{-x})(e^x + e^{-x})}{2}$

$= \\frac{e^{2x} - e^{-2x}}{2}$ (difference of squares)

$= $ LHS ✓

**Mark Scheme:**
- M1: Writing expressions using exponential definitions
- A1: Correct manipulation
- A1: Showing LHS = RHS

---

### Example 3: Integration Involving Hyperbolic Functions
**Q:** Find $\\int \\frac{1}{\\sqrt{x^2 + 9}} dx$. [4 marks]

**Solution:**
Use substitution $x = 3\\sinh u$, so $dx = 3\\cosh u \\, du$

$\\sqrt{x^2 + 9} = \\sqrt{9\\sinh^2 u + 9} = 3\\sqrt{\\sinh^2 u + 1} = 3\\cosh u$

(using $\\cosh^2 u - \\sinh^2 u = 1$, so $\\sinh^2 u + 1 = \\cosh^2 u$)

$\\int \\frac{1}{\\sqrt{x^2 + 9}} dx = \\int \\frac{3\\cosh u}{3\\cosh u} du = \\int 1 \\, du = u + C$

Convert back: $u = \\text{arsinh}\\frac{x}{3}$

Using $\\text{arsinh } t = \\ln(t + \\sqrt{t^2 + 1})$:

$u = \\ln\\left(\\frac{x}{3} + \\sqrt{\\frac{x^2}{9} + 1}\\right) = \\ln\\left(\\frac{x + \\sqrt{x^2 + 9}}{3}\\right)$

**$\\int \\frac{1}{\\sqrt{x^2 + 9}} dx = \\text{arsinh}\\frac{x}{3} + C = \\ln\\left(\\frac{x + \\sqrt{x^2 + 9}}{3}\\right) + C$**

Or equivalently: $\\ln(x + \\sqrt{x^2 + 9}) + C$ (absorbing $-\\ln 3$ into constant)

**Mark Scheme:**
- M1: Appropriate substitution
- A1: Correct simplification of $\\sqrt{x^2 + 9}$
- A1: Correct integration
- A1: Final answer in terms of $x$

---

### Example 4: Differentiation of Inverse Hyperbolic Functions
**Q:** Given $y = \\text{artanh}(2x)$, find $\\frac{dy}{dx}$ and state the domain. [4 marks]

**Solution:**
**Method 1: Using logarithmic form**
$y = \\text{artanh}(2x) = \\frac{1}{2}\\ln\\left(\\frac{1 + 2x}{1 - 2x}\\right)$

$\\frac{dy}{dx} = \\frac{1}{2} \\cdot \\frac{1}{\\frac{1+2x}{1-2x}} \\cdot \\frac{2(1-2x) - (1+2x)(-2)}{(1-2x)^2}$

$= \\frac{1}{2} \\cdot \\frac{1-2x}{1+2x} \\cdot \\frac{2 - 4x + 2 + 4x}{(1-2x)^2}$

$= \\frac{1}{2} \\cdot \\frac{1}{1+2x} \\cdot \\frac{4}{1-2x}$

$= \\frac{2}{(1+2x)(1-2x)} = \\frac{2}{1-4x^2}$

**Method 2: Chain rule with standard derivative**
$\\frac{d}{dx}(\\text{artanh } u) = \\frac{1}{1-u^2} \\cdot \\frac{du}{dx}$

$\\frac{dy}{dx} = \\frac{1}{1-(2x)^2} \\cdot 2 = \\frac{2}{1-4x^2}$

**Domain:** artanh requires $|2x| < 1$, so $|x| < \\frac{1}{2}$

Domain: $-\\frac{1}{2} < x < \\frac{1}{2}$

**Mark Scheme:**
- M1: Appropriate differentiation method
- A1: Correct derivative $\\frac{2}{1-4x^2}$
- M1: Finding domain restriction
- A1: Correct domain
`;

// ============================================================================
// WORKED EXAMPLES - POLAR COORDINATES
// ============================================================================

const AQA_FM_POLAR_EXAMPLES = `
## Polar Coordinates Worked Examples

### Example 1: Converting and Sketching
**Q:**
(a) Convert the Cartesian equation $x^2 + y^2 = 4x$ to polar form. [2 marks]
(b) Sketch the curve. [2 marks]

**Solution:**

(a) Using $x = r\\cos\\theta$, $y = r\\sin\\theta$, $x^2 + y^2 = r^2$:

$r^2 = 4r\\cos\\theta$
$r = 4\\cos\\theta$ (dividing by $r$, valid for $r \\neq 0$)

(b) This is a circle:
- When $\\theta = 0$: $r = 4$ (point at $(4, 0)$)
- When $\\theta = \\frac{\\pi}{2}$: $r = 0$ (passes through origin)
- When $\\theta = \\pi$: $r = -4$ (same as $\\theta = 0$)

The curve is a circle with diameter 4, passing through the origin, centered at $(2, 0)$.

**Mark Scheme:**
(a)
- M1: Substituting polar relationships
- A1: $r = 4\\cos\\theta$

(b)
- B1: Circle through origin
- B1: Correct position and size

---

### Example 2: Area Enclosed by Polar Curve
**Q:** Find the area enclosed by one loop of the curve $r = \\cos 2\\theta$. [5 marks]

**Solution:**
The curve $r = \\cos 2\\theta$ is a four-petalled rose.

One loop occurs when $r \\geq 0$, i.e., when $\\cos 2\\theta \\geq 0$
This happens for $-\\frac{\\pi}{4} \\leq \\theta \\leq \\frac{\\pi}{4}$

Area = $\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} r^2 d\\theta$

$= \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\cos^2 2\\theta \\, d\\theta$

Using $\\cos^2 2\\theta = \\frac{1 + \\cos 4\\theta}{2}$:

$= \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\frac{1 + \\cos 4\\theta}{2} d\\theta$

$= \\frac{1}{4}\\left[\\theta + \\frac{\\sin 4\\theta}{4}\\right]_{-\\pi/4}^{\\pi/4}$

$= \\frac{1}{4}\\left[\\left(\\frac{\\pi}{4} + \\frac{\\sin \\pi}{4}\\right) - \\left(-\\frac{\\pi}{4} + \\frac{\\sin(-\\pi)}{4}\\right)\\right]$

$= \\frac{1}{4}\\left[\\frac{\\pi}{4} + 0 + \\frac{\\pi}{4} - 0\\right]$

$= \\frac{1}{4} \\cdot \\frac{\\pi}{2} = \\frac{\\pi}{8}$

**Mark Scheme:**
- B1: Correct limits $-\\frac{\\pi}{4}$ to $\\frac{\\pi}{4}$
- M1: Setting up area integral
- M1: Using double angle formula for $\\cos^2$
- A1: Correct integration
- A1: Final answer $\\frac{\\pi}{8}$

---

### Example 3: Tangents to Polar Curves
**Q:** For the curve $r = 1 + \\cos\\theta$, find the equations of the tangent lines at the pole. [5 marks]

**Solution:**
The curve passes through the pole when $r = 0$:
$1 + \\cos\\theta = 0$
$\\cos\\theta = -1$
$\\theta = \\pi$

At the pole, the tangent line has equation $\\theta = \\pi$ (a half-line from origin)

In Cartesian form, this is the negative $x$-axis: $y = 0, x < 0$

Actually, for a cardioid $r = 1 + \\cos\\theta$, there is only one tangent at the pole.

For general tangent analysis, we can find $\\frac{dy}{dx}$:

$x = r\\cos\\theta = (1 + \\cos\\theta)\\cos\\theta$
$y = r\\sin\\theta = (1 + \\cos\\theta)\\sin\\theta$

$\\frac{dx}{d\\theta} = -\\sin\\theta\\cos\\theta + (1+\\cos\\theta)(-\\sin\\theta) = -\\sin\\theta(2\\cos\\theta + 1)$

$\\frac{dy}{d\\theta} = -\\sin\\theta\\sin\\theta + (1+\\cos\\theta)\\cos\\theta = \\cos\\theta + \\cos^2\\theta - \\sin^2\\theta$
$= \\cos\\theta + 2\\cos^2\\theta - 1 = (2\\cos\\theta - 1)(\\cos\\theta + 1)$

At $\\theta = \\pi$: both $\\frac{dx}{d\\theta} = 0$ and $\\frac{dy}{d\\theta} = 0$

This confirms the curve has a cusp at the pole, with tangent along $\\theta = \\pi$.

**Mark Scheme:**
- M1: Finding where $r = 0$
- A1: $\\theta = \\pi$
- M1: Method for finding tangent direction
- A1: Identifying cusp
- A1: Tangent equation $y = 0$ (or $\\theta = \\pi$)

---

### Example 4: Converting Polar to Cartesian
**Q:** Convert $r = \\frac{6}{2 - \\cos\\theta}$ to Cartesian form and identify the curve. [5 marks]

**Solution:**
$r(2 - \\cos\\theta) = 6$
$2r - r\\cos\\theta = 6$
$2r - x = 6$ (since $x = r\\cos\\theta$)
$2r = x + 6$
$4r^2 = (x + 6)^2$
$4(x^2 + y^2) = x^2 + 12x + 36$ (since $r^2 = x^2 + y^2$)
$4x^2 + 4y^2 = x^2 + 12x + 36$
$3x^2 + 4y^2 - 12x - 36 = 0$
$3(x^2 - 4x) + 4y^2 = 36$
$3(x - 2)^2 - 12 + 4y^2 = 36$
$3(x - 2)^2 + 4y^2 = 48$
$\\frac{(x-2)^2}{16} + \\frac{y^2}{12} = 1$

This is an **ellipse** with center $(2, 0)$, semi-major axis $a = 4$ (along $x$-axis), semi-minor axis $b = 2\\sqrt{3}$.

**Mark Scheme:**
- M1: Multiplying by $r$ and substituting
- A1: $2r = x + 6$
- M1: Squaring and substituting $r^2 = x^2 + y^2$
- A1: Correct Cartesian form
- B1: Identifying as ellipse with correct parameters
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const AQA_FM_TOPIC_GUIDANCE: Record<string, string> = {
  'fm-alevel-aqa-proof': `## Further Proof Topic Structure

**Proof by Induction - Standard Structure:**
Every proof by induction MUST include these four clearly labelled parts:

1. **BASE CASE:** Verify P(n) is true for the starting value (usually n = 1)
   - Show LHS and RHS separately
   - State explicitly that they are equal

2. **INDUCTIVE HYPOTHESIS:** State assumption clearly
   - "Assume P(k) is true for some integer k ≥ 1"
   - Write out exactly what this means algebraically

3. **INDUCTIVE STEP:** Show P(k) implies P(k+1)
   - Start with P(k+1) and work towards the required form
   - Clearly indicate where the inductive hypothesis is used
   - Show all algebraic steps

4. **CONCLUSION:** Complete the argument
   - "True for n = 1, and P(k) ⟹ P(k+1)"
   - "Therefore, by the principle of mathematical induction, P(n) is true for all positive integers n"

**Common Induction Applications:**
- Summation formulae (Σr, Σr², Σr³, Σr(r+1), etc.)
- Divisibility results (e.g., "6 divides n³ - n", "9 divides 4ⁿ - 1")
- Matrix powers (e.g., Aⁿ for 2×2 matrices)
- Recurrence relations
- Inequalities (e.g., 2ⁿ > n² for n ≥ 5, n! > 2ⁿ for n ≥ 4)
- De Moivre's theorem applications

**Other Proof Techniques at Further Maths Level:**
- Proof by contradiction
- Direct proof with rigorous logical steps
- Proof by exhaustion
- Counter-example to disprove`,

  'fm-alevel-aqa-complex-numbers': `## Complex Numbers Topic Structure

**Arithmetic Operations:**
- Addition, subtraction, multiplication, division
- Complex conjugates and their properties
- Solving quadratics with complex roots
- Forming equations with given complex roots

**Argand Diagram:**
- Plotting complex numbers as points/position vectors
- Modulus |z| = √(x² + y²)
- Argument arg(z) = arctan(y/x) (adjusted for quadrant)
- Principal argument: -π < arg(z) ≤ π
- Geometric interpretation of operations

**Forms of Complex Numbers:**
- Cartesian form: z = x + iy
- Modulus-argument form: z = r(cos θ + i sin θ)
- Exponential form: z = re^(iθ)
- Converting between forms

**De Moivre's Theorem:**
- Statement: (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)
- Proving trigonometric identities (cos nθ, sin nθ in terms of powers)
- Finding powers of complex numbers

**Roots of Complex Numbers:**
- nth roots of unity: e^(2πik/n) for k = 0, 1, ..., n-1
- Properties: sum = 0, form regular n-gon
- nth roots of any complex number
- Solving equations like zⁿ = w

**Loci in the Complex Plane:**
- |z - a| = r (circle center a, radius r)
- |z - a| = |z - b| (perpendicular bisector)
- arg(z - a) = θ (half-line from a)
- arg((z-a)/(z-b)) = θ (arc of circle)
- Regions defined by inequalities`,

  'fm-alevel-aqa-matrices': `## Matrices Topic Structure

**Matrix Operations:**
- Addition, scalar multiplication, multiplication
- Determinants (2×2 and 3×3)
- Inverses (2×2 formula, 3×3 using cofactors/adjugate)
- Properties: det(AB) = det(A)det(B), (AB)⁻¹ = B⁻¹A⁻¹

**Linear Transformations in 2D:**
- Standard matrices: rotation, reflection, stretch, shear, enlargement
- Combining transformations (order matters!)
- Finding transformation from images of unit vectors
- Invariant points and invariant lines

**Systems of Linear Equations:**
- Matrix representation Ax = b
- Solving using inverse matrices
- Row reduction to echelon form
- Geometric interpretation:
  * Unique solution: planes meet at a point
  * Infinitely many solutions: planes meet along a line
  * No solution: planes form prism (inconsistent)

**Eigenvalues and Eigenvectors:**
- Definition: Av = λv
- Finding eigenvalues: det(A - λI) = 0
- Finding eigenvectors: (A - λI)v = 0
- Properties:
  * Sum of eigenvalues = trace(A)
  * Product of eigenvalues = det(A)

**Diagonalisation:**
- Conditions: matrix must have n linearly independent eigenvectors
- Process: A = PDP⁻¹ where P = eigenvector matrix, D = diagonal eigenvalue matrix
- Application: Computing matrix powers Aⁿ = PDⁿP⁻¹

**Cayley-Hamilton Theorem:**
- Every matrix satisfies its own characteristic equation
- Use for expressing powers of matrices`,

  'fm-alevel-aqa-further-vectors': `## Further Vectors Topic Structure

**Vector Product (Cross Product):**
- Definition using determinant form
- Geometric meaning: a × b is perpendicular to both a and b
- Magnitude: |a × b| = |a||b|sin θ = area of parallelogram
- Properties:
  * Anti-commutative: a × b = -b × a
  * a × a = 0
  * Not associative

**Triple Products:**
- Scalar triple product: a · (b × c) = volume of parallelepiped
- Equal to determinant of 3×3 matrix
- If zero, vectors are coplanar

**Lines in 3D:**
- Vector equation: r = a + λd
- Parametric form: x = a₁ + λd₁, etc.
- Cartesian form (symmetric equations)
- Types of line pairs: parallel, intersecting, skew
- Finding intersection of two lines
- Angle between lines

**Planes:**
- Vector equation: r · n = d (or r · n = a · n)
- Cartesian form: ax + by + cz = d
- Finding equation from:
  * Normal and point
  * Three points
  * Two lines

**Distances:**
- Point to line (using cross product)
- Point to plane formula
- Shortest distance between parallel planes
- Shortest distance between skew lines

**Intersections:**
- Line-plane intersection
- Two planes intersection (gives a line)
- Three planes: point, line, or no common intersection

**Angles:**
- Angle between two lines
- Angle between line and plane (use sin θ)
- Angle between two planes (dihedral angle)`,

  'fm-alevel-aqa-hyperbolic': `## Hyperbolic Functions Topic Structure

**Definitions:**
- sinh x = (eˣ - e⁻ˣ)/2
- cosh x = (eˣ + e⁻ˣ)/2
- tanh x = sinh x / cosh x
- Reciprocals: sech, cosech, coth

**Key Identities:**
- cosh²x - sinh²x = 1
- 1 - tanh²x = sech²x
- coth²x - 1 = cosech²x
- Addition formulae (similar to trig)
- Double angle formulae

**Osborn's Rule:**
- Convert trig identities to hyperbolic
- Replace cos → cosh, sin → sinh
- Change sign when product of two sines appears
- Example: cos²θ + sin²θ = 1 becomes cosh²x - sinh²x = 1

**Graphs and Properties:**
- sinh x: odd function, domain ℝ, range ℝ
- cosh x: even function, domain ℝ, range [1, ∞)
- tanh x: odd function, horizontal asymptotes at ±1

**Derivatives:**
- d/dx(sinh x) = cosh x
- d/dx(cosh x) = sinh x
- d/dx(tanh x) = sech²x

**Inverse Hyperbolic Functions:**
- arsinh x = ln(x + √(x² + 1)), all x
- arcosh x = ln(x + √(x² - 1)), x ≥ 1
- artanh x = ½ln((1+x)/(1-x)), |x| < 1

**Integration:**
- Standard results involving √(x² + a²), √(x² - a²), 1/(a² - x²)
- Using hyperbolic substitutions`,

  'fm-alevel-aqa-diff-equations': `## Differential Equations Topic Structure

**First Order Linear:**
Form: dy/dx + P(x)y = Q(x)

Method: Integrating factor μ = e^∫P(x)dx
- Multiply through by μ
- Recognize LHS as d/dx(μy)
- Integrate both sides

**Second Order Homogeneous:**
Form: a(d²y/dx²) + b(dy/dx) + cy = 0

Auxiliary equation: am² + bm + c = 0
- Distinct real roots m₁, m₂: y = Ae^(m₁x) + Be^(m₂x)
- Repeated root m: y = (A + Bx)e^(mx)
- Complex roots p ± qi: y = e^(px)(A cos qx + B sin qx)

**Second Order Non-Homogeneous:**
Form: a(d²y/dx²) + b(dy/dx) + cy = f(x)

General solution = Complementary Function + Particular Integral

Finding PI by trial:
- f(x) = polynomial: try polynomial of same degree
- f(x) = e^(kx): try λe^(kx)
- f(x) = sin/cos: try λ sin(kx) + μ cos(kx)

If trial form appears in CF, multiply by x (or x² if needed)

**Boundary Value Problems:**
- Use initial/boundary conditions to find A, B

**Applications:**
- Simple Harmonic Motion: ẍ = -ω²x
- Damped oscillations
- Electrical circuits (RLC)
- Population models`,

  'fm-alevel-aqa-polar': `## Polar Coordinates Topic Structure

**Fundamentals:**
- Conversion: x = r cos θ, y = r sin θ
- r = √(x² + y²), θ = arctan(y/x)
- Plotting polar curves

**Standard Curves:**
- r = a (circle centered at origin)
- r = a cos θ (circle through origin on x-axis)
- r = a sin θ (circle through origin on y-axis)
- r = a(1 + cos θ) (cardioid)
- r = a + b cos θ (limaçon): inner loop if b > a
- r = a cos nθ (rose curves: n petals if n odd, 2n if n even)
- r² = a² cos 2θ (lemniscate)
- r = aθ (Archimedean spiral)

**Calculus in Polar Coordinates:**
- Area: A = ½∫[α to β] r² dθ
- Arc length: s = ∫√(r² + (dr/dθ)²) dθ
- Finding dy/dx using parametric derivatives

**Tangents:**
- Tangent at pole: direction θ where r = 0
- General tangent: convert to parametric, find dy/dx

**Converting Equations:**
- Polar to Cartesian and vice versa
- Identifying conics in polar form`,

  'fm-alevel-aqa-further-calculus': `## Further Calculus Topic Structure

**Improper Integrals:**
- Definition and convergence
- Type 1: Infinite limits
- Type 2: Discontinuous integrand
- Evaluating using limits

**Maclaurin and Taylor Series:**
- Maclaurin: f(x) = f(0) + f'(0)x + f''(0)x²/2! + ...
- Taylor: f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...
- Standard series: eˣ, sin x, cos x, ln(1+x), (1+x)ⁿ
- Finding series by substitution, differentiation, integration
- Range of validity

**Limits and L'Hôpital's Rule:**
- Indeterminate forms: 0/0, ∞/∞
- L'Hôpital: lim f/g = lim f'/g'
- Other forms: 0·∞, ∞-∞, 0⁰, 1^∞, ∞⁰

**Reduction Formulae:**
- Deriving recurrence relations for integrals
- Common examples: Iₙ = ∫xⁿeˣdx, ∫sinⁿx dx, ∫cosⁿx dx

**Arc Length and Surface Area:**
- Cartesian: s = ∫√(1 + (dy/dx)²) dx
- Parametric: s = ∫√((dx/dt)² + (dy/dt)²) dt
- Polar: s = ∫√(r² + (dr/dθ)²) dθ`,

  'fm-alevel-aqa-further-algebra': `## Further Algebra Topic Structure

**Roots of Polynomials:**
Cubic with roots α, β, γ:
- Sum: α + β + γ = -b/a
- Sum of products pairs: αβ + βγ + γα = c/a
- Product: αβγ = -d/a

Quartic with roots α, β, γ, δ:
- ∑α = -b/a
- ∑αβ = c/a
- ∑αβγ = -d/a
- αβγδ = e/a

**Applications:**
- Finding symmetric functions of roots
- Forming equations with related roots
- Linear transformations of roots

**Method of Differences:**
- Expressing sums as telescoping series
- Using partial fractions for summation

**Summation of Series:**
- Standard sums: Σr, Σr², Σr³
- Method of differences
- Using partial fractions`,

  'fm-alevel-aqa-further-mechanics': `## Further Mechanics Topic Structure (Option C)

**Momentum and Impulse:**
- p = mv
- Impulse J = ∫F dt = Δp
- Conservation of momentum
- Explosions and coalescence

**Collisions and Coefficient of Restitution:**
- Newton's Law: e = (v₂ - v₁)/(u₁ - u₂) = separation speed/approach speed
- Direct impact: solving simultaneous equations
- Oblique impact with wall: component parallel unchanged, perpendicular × e
- Loss of kinetic energy in collisions

**Circular Motion:**
- Angular velocity ω = dθ/dt
- v = rω, a = rω² = v²/r
- Horizontal circles: tension/friction provides centripetal force
- Vertical circles: varying tension/normal reaction
- Conical pendulum

**Simple Harmonic Motion:**
- Defining equation: ẍ = -ω²x
- General solution: x = A cos(ωt + φ)
- v² = ω²(A² - x²)
- Maximum speed at equilibrium, maximum acceleration at extremes
- Period T = 2π/ω

**Elastic Strings and Springs:**
- Hooke's Law: T = λx/l (or T = kx)
- Elastic potential energy: EPE = λx²/(2l)
- SHM with springs: ω² = k/m = λ/(ml)
- Energy methods for oscillation problems`,

  'fm-alevel-aqa-further-stats': `## Further Statistics Topic Structure (Option B)

**Discrete Distributions:**
- Poisson: Po(λ) - mean = variance = λ
- Geometric: Geo(p) - trials until first success
- Negative binomial: trials until rth success

**Continuous Distributions:**
- Continuous uniform U(a,b)
- Exponential Exp(λ) - memoryless property
- Chi-squared distribution

**Probability Generating Functions:**
- Definition: G(t) = E(tˣ)
- Finding E(X), Var(X) from PGF
- PGF for sum of independent variables: G_{X+Y}(t) = G_X(t)G_Y(t)
- Standard PGFs for binomial, Poisson, geometric

**Estimation:**
- Method of moments
- Maximum likelihood estimation
- Properties of estimators: unbiased, consistent, efficient

**Hypothesis Testing:**
- Chi-squared tests for goodness of fit
- Chi-squared tests for independence
- Degrees of freedom

**Confidence Intervals:**
- For mean (known and unknown variance)
- For proportion
- Using t-distribution for small samples`,

  'fm-alevel-aqa-discrete': `## Discrete Mathematics Topic Structure (Option D)

**Graph Theory:**
- Terminology: vertices, edges, degree, paths, cycles
- Handshaking lemma: Σdeg(v) = 2|E|
- Special graphs: complete, bipartite, trees
- Eulerian (all even degree) and semi-Eulerian (exactly 2 odd)
- Hamiltonian graphs
- Planarity: Euler's formula V - E + F = 2

**Network Algorithms:**
- Minimum spanning tree: Kruskal's, Prim's algorithms
- Shortest path: Dijkstra's algorithm
- Chinese Postman Problem
- Travelling Salesman Problem (bounds)

**Linear Programming:**
- Formulating problems
- Graphical solution (2 variables)
- Simplex algorithm
- Integer programming

**Recurrence Relations:**
- First order: uₙ₊₁ = auₙ + b
- Second order homogeneous
- Second order non-homogeneous
- Solving using auxiliary equations

**Network Flows:**
- Maximum flow problems
- Ford-Fulkerson algorithm
- Minimum cut theorem`,

  'fm-alevel-aqa-numerical': `## Numerical Methods Topic Structure

**Numerical Solutions of Equations:**
- Interval bisection
- Newton-Raphson: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
- Convergence and failure conditions
- Comparing methods

**Numerical Integration:**
- Mid-ordinate rule
- Simpson's rule (requires odd number of ordinates)
- Trapezium rule
- Error analysis and improving accuracy

**Numerical Differentiation:**
- Forward difference approximation
- Central difference approximation

**Step-by-step Methods for Differential Equations:**
- Euler's method: yₙ₊₁ = yₙ + hf(xₙ, yₙ)
- Improved Euler (Heun's method)
- Error accumulation`
};

// ============================================================================
// MAIN QUESTION CONSTRUCTION PRINCIPLES
// ============================================================================

const AQA_FM_QUESTION_PRINCIPLES = `# AQA A-Level Further Mathematics: Question Construction

${AQA_FM_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_FURTHER_MATHS_COGNITIVE_CHALLENGE}

${AQA_FM_EXAM_STRUCTURE}

${AQA_FM_COMMAND_WORDS}

## Question Characteristics

Further Mathematics questions are significantly more demanding than standard A-Level:
- Extended proofs and derivations requiring multiple steps
- Multi-step abstract reasoning without scaffolding
- Synthesis of multiple advanced techniques
- Less guidance than A-Level questions - students must select appropriate methods
- Higher demand for mathematical rigour and precision
- More use of "show that" and "prove" questions

## Mark Allocation Guidelines (Further Maths)

| Marks | Characteristics |
|-------|----------------|
| 2-3 | Single advanced technique, direct application |
| 4-5 | Two-stage calculation or short proof |
| 6-8 | Multi-step problem or complete proof |
| 9-12 | Extended problem with multiple synthesis elements |
| 12+ | Complex modelling or extended proof with justification |

## Proof Questions

Further Maths requires rigorous proof technique:
- Mathematical induction must follow strict 4-part structure
- "Show that" questions require complete working
- Proofs must have clear logical progression
- Conclusions must be explicitly stated
`;

// ============================================================================
// EXPORTED FUNCTIONS
// ============================================================================

/**
 * Get difficulty guidance for Further Maths questions.
 */
function getFMDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Standard Further Maths (Grades D-C):**
- Direct application of single advanced techniques
- 2-5 marks typically
- Familiar setups with some algebraic complexity
- May include straightforward matrix/complex number calculations
- Standard form manipulations without synthesis
- Following a given method or applying a formula directly
- Questions similar to textbook examples`;

    case 'medium':
      return `**Challenging Further Maths (Grades C-B):**
- Synthesis of 2-3 advanced concepts
- 5-9 marks typically
- Multi-step calculations with clear progression
- May require choosing appropriate advanced method
- Some interpretation or modelling required
- Problems where the approach is suggested but requires adaptation
- Standard proof by induction with familiar structure`;

    case 'hard':
      return `**Demanding Further Maths (Grades B-A*):**
- Extended multi-step reasoning with minimal guidance
- 8-14+ marks typically
- Complex proofs and rigorous justification
- Minimal scaffolding - students must plan their own approach
- May involve novel applications of theory
- Synthesis across multiple topic areas
- Unfamiliar contexts requiring significant interpretation
- Non-standard induction proofs or proofs requiring insight`;
  }
}

/**
 * Get mark range for difficulty.
 */
function getFMMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 5 };
    case 'medium':
      return { min: 5, max: 9 };
    case 'hard':
      return { min: 8, max: 14 };
  }
}

/**
 * System prompt for AQA A-Level Further Maths question generation.
 */
export function getAQAALevelFurtherMathsSystemPrompt(): string {
  return `You are an expert AQA A-Level Further Mathematics examiner and question writer with extensive experience in setting papers for the AQA 7367 specification.

${AQA_FM_QUESTION_PRINCIPLES}

${AQA_FM_KEY_FORMULAE}

${AQA_FM_MECHANICS_FORMULAE}

${AQA_FM_STATISTICS_FORMULAE}

${AQA_FM_COMPLEX_NUMBERS_EXAMPLES}

${AQA_FM_MATRICES_EXAMPLES}

${AQA_FM_PROOF_EXAMPLES}

${AQA_FM_VECTORS_EXAMPLES}

${AQA_FM_DIFF_EQ_EXAMPLES}

${AQA_FM_HYPERBOLIC_EXAMPLES}

${AQA_FM_POLAR_EXAMPLES}

You generate original, high-quality Further Mathematics questions that:
1. Match AQA specification and examination style precisely
2. Are mathematically rigorous and completely accurate
3. Have appropriate difficulty for A-Level Further Maths (significantly harder than standard A-Level)
4. Include complete, correct worked solutions with all steps shown
5. Have detailed mark schemes using M/A/B notation that reflect AQA conventions
6. Test genuine mathematical understanding, not just procedural skills

CRITICAL REQUIREMENTS:
- Further Maths is substantially more demanding than standard A-Level - ensure questions require genuine mathematical sophistication
- Proofs must be rigorous with clear logical progression
- Mark schemes must be precise and follow AQA conventions
- Solutions must be mathematically complete with no steps skipped
- Questions should be original and not direct copies of past paper questions`;
}

/**
 * Question prompt for AQA A-Level Further Maths.
 */
export function getAQAALevelFurtherMathsQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_FM_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getFMDifficultyGuidance(difficulty);
  const markRange = getFMMarkRange(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);
  const visualInstructions = getVisualInstructions('further-maths', 'a-level', selectedSubtopic);

  const paperContext = topic.paperRestriction
    ? `\n**Paper:** This topic appears on ${topic.paperRestriction}.`
    : '';

  return `${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL AQA A-Level Further Mathematics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}${paperContext}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** Create a fresh question that could NOT be found in past papers - vary numbers, contexts, and structure
2. **FURTHER MATHS STANDARD:** This is beyond A-Level, requires advanced techniques and genuine mathematical maturity
3. **MATHEMATICAL RIGOUR:** Solutions must be complete, correct, and show all necessary working
4. **APPROPRIATE DIFFICULTY:** Cognitive demand must match the mark allocation and difficulty level
5. **COMPLETE MARK SCHEME:** Every mark must have clear, unambiguous earning criteria using M/A/B notation

## Response Format (JSON)

You MUST respond with valid JSON only. No text before or after the JSON object.

{
  "content": "Question text with proper LaTeX formatting using $...$ for inline math and $$...$$ for display equations",
  "marks": <total marks as integer>,
  "solution": "Complete step-by-step worked solution showing ALL working",
  "markScheme": ["M1: description of first method mark", "A1: description of first accuracy mark", "..."],
  "diagram": <optional diagram specification object if needed>
}

${DIAGRAM_SCHEMA_DOCS}
${visualInstructions}
## Formatting Rules

### Question Content:
1. Context/setup FIRST (if any)
2. Blank line before question parts (\\n\\n)
3. Each part (a), (b), (c) on NEW LINE
4. Mark allocations: [X marks] at end of each part
5. Use $...$ for inline LaTeX, $$...$$ for display equations
6. Use precise mathematical language and correct notation

### Solution:
1. Show ALL steps - do not skip algebraic manipulations
2. Clearly label each part if multi-part question
3. State answers clearly with appropriate accuracy/form
4. Include verification where appropriate

### Mark Scheme:
1. One mark per array element
2. Use M1, A1, B1 labels consistently
3. For multi-part: "(a) M1:", "(a) A1:", "(b) M1:", etc.
4. M marks for method (can be implied by correct answer)
5. A marks for accuracy (usually depend on earning M mark)
6. B marks for independent facts/observations

Generate a genuinely original AQA A-Level Further Mathematics question now:`;
}

/**
 * Compact prompt for fast question generation.
 */
export function getAQAALevelFurtherMathsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getFMMarkRange(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Standard FM (Grades D-C): Single advanced technique, 2-5 marks.'
    : difficulty === 'medium'
    ? 'Challenging FM (Grades C-B): 2-3 concepts synthesised, 5-9 marks.'
    : 'Demanding FM (Grades B-A*): Complex multi-step, extended reasoning, 8-14 marks.';

  return `Generate an AQA A-Level Further Maths question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${AQA_FM_KEY_FORMULAE}

Requirements:
- Original Further Maths standard question (beyond standard A-Level)
- Include complete worked solution showing all steps
- Include mark scheme using M=method, A=accuracy, B=independent marks
- Use $...$ for LaTeX math
- Use \\n for newlines in strings
- All solutions must be mathematically rigorous

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First mark","A1: Second mark"]}`;
}

/**
 * Multi-part question prompt for extended questions.
 */
export function getAQAALevelFurtherMathsMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const topicGuidance = AQA_FM_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getFMDifficultyGuidance(difficulty);

  return `${AQA_FM_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate a multi-part AQA A-Level Further Mathematics question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles

- Part (a) should be achievable independently and set up later parts
- Later parts often build on earlier results using "Hence" or "Using your answer to part (a)"
- Total marks should be 9-15 for a ${numParts}-part Further Maths question
- Each part should test a distinct skill while maintaining thematic coherence
- Progression from concrete to abstract is common
- Final part often requires synthesis or extension

## Response Format (JSON)

{
  "content": "Question text with parts on separate lines, each with [X marks]",
  "marks": <total marks as integer>,
  "solution": "Complete worked solution for each part, clearly labelled",
  "markScheme": ["(a) M1: mark", "(a) A1: mark", "(b) M1: mark", ...]
}

Generate a genuinely original multi-part AQA A-Level Further Mathematics question now:`;
}

/**
 * Proof question prompt for Further Maths.
 */
export function getAQAALevelFurtherMathsProofPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getFMMarkRange(difficulty);

  return `${AQA_FM_QUESTION_PRINCIPLES}

${AQA_FM_PROOF_EXAMPLES}

---

## Your Task

Generate an AQA A-Level Further Mathematics PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Proof Question Requirements

Further Maths proof questions require:

**For Proof by Induction:**
1. Clear statement of what is to be proved (proposition P(n))
2. BASE CASE: Verify P(1) (or appropriate starting value) explicitly
3. INDUCTIVE HYPOTHESIS: "Assume P(k) is true for some k ≥ 1"
4. INDUCTIVE STEP: Show P(k) implies P(k+1) with full working
5. CONCLUSION: "True for n = 1, and P(k) ⟹ P(k+1), therefore true for all n ≥ 1 by induction"

**For Other Proofs:**
- Clear logical progression
- All steps justified
- Mathematical rigour throughout
- Explicit conclusion statement

**Induction Proof Types:**
- Summation formulae (Σr, Σr², Σr³, Σr(r+1), etc.)
- Divisibility results (e.g., "9 divides 4ⁿ - 1")
- Matrix powers (Aⁿ for 2×2 matrices)
- Inequalities (e.g., 2ⁿ > n² for n ≥ 5)
- Recurrence relations
- De Moivre's theorem applications

## Response Format (JSON)

{
  "content": "Prove by induction that... [X marks]",
  "marks": <total marks>,
  "solution": "Complete proof with all four parts clearly shown and labelled",
  "markScheme": ["B1: Base case verified", "M1: Inductive hypothesis stated", "M1: Working towards P(k+1)", "A1: Completing inductive step", "A1: Conclusion statement"]
}

Generate an original AQA A-Level Further Mathematics proof question now:`;
}

// ============================================================================
// WORKED EXAMPLES - FURTHER MECHANICS (Option C)
// ============================================================================

const AQA_FM_FURTHER_MECHANICS_EXAMPLES = `
## Further Mechanics Worked Examples

### Example 1: Direct Collision with Coefficient of Restitution
**Q:** Two particles A and B, of masses 3 kg and 2 kg respectively, are moving towards each other along a straight line on a smooth horizontal surface. A has speed 4 m/s and B has speed 1 m/s. Given that the coefficient of restitution between the particles is 0.6:

(a) Find the speeds of A and B after the collision. [5 marks]
(b) Find the kinetic energy lost in the collision. [2 marks]

**Solution:**

(a) Taking rightward as positive:
Initial: A moves at 4 m/s right, B moves at 1 m/s left (so -1 m/s)

**Conservation of momentum:**
$3(4) + 2(-1) = 3v_A + 2v_B$
$12 - 2 = 3v_A + 2v_B$
$3v_A + 2v_B = 10$ ... (1)

**Newton's Law of Restitution:**
$v_B - v_A = -e(u_B - u_A)$
$v_B - v_A = -0.6(-1 - 4)$
$v_B - v_A = -0.6(-5) = 3$ ... (2)

From (2): $v_B = v_A + 3$

Substitute into (1): $3v_A + 2(v_A + 3) = 10$
$5v_A + 6 = 10$
$v_A = 0.8$ m/s

$v_B = 0.8 + 3 = 3.8$ m/s

**A moves at 0.8 m/s and B moves at 3.8 m/s (both rightward)**

(b) Initial KE = $\\frac{1}{2}(3)(4)^2 + \\frac{1}{2}(2)(1)^2 = 24 + 1 = 25$ J

Final KE = $\\frac{1}{2}(3)(0.8)^2 + \\frac{1}{2}(2)(3.8)^2 = 0.96 + 14.44 = 15.4$ J

**KE lost = 25 - 15.4 = 9.6 J**

**Mark Scheme:**
(a)
- M1: Correct momentum equation
- M1: Correct restitution equation with signs
- A1: Both equations correct
- M1: Solving simultaneously
- A1: Both velocities correct: $v_A = 0.8$, $v_B = 3.8$

(b)
- M1: Finding KE before and after
- A1: KE lost = 9.6 J

---

### Example 2: Circular Motion - Conical Pendulum
**Q:** A particle P of mass 0.5 kg is attached to one end of a light inextensible string of length 0.4 m. The other end is fixed at O. P moves in a horizontal circle with the string making an angle of 30 degrees with the downward vertical through O.

(a) Find the tension in the string. [3 marks]
(b) Find the angular velocity of P. [3 marks]

**Solution:**

(a) Resolving vertically for P:
$T\\cos 30^{\\circ} = mg$
$T \\cdot \\frac{\\sqrt{3}}{2} = 0.5 \\times 9.8$
$T = \\frac{0.5 \\times 9.8 \\times 2}{\\sqrt{3}} = \\frac{9.8}{\\sqrt{3}} = \\frac{9.8\\sqrt{3}}{3} \\approx 5.66$ N

**Tension = $\\frac{9.8\\sqrt{3}}{3}$ N (approx 5.66 N)**

(b) Radius of circle: $r = L\\sin 30^{\\circ} = 0.4 \\times 0.5 = 0.2$ m

Resolving horizontally (centripetal force):
$T\\sin 30^{\\circ} = mr\\omega^2$
$\\frac{9.8\\sqrt{3}}{3} \\times \\frac{1}{2} = 0.5 \\times 0.2 \\times \\omega^2$
$\\frac{9.8\\sqrt{3}}{6} = 0.1\\omega^2$
$\\omega^2 = \\frac{9.8\\sqrt{3}}{0.6} = \\frac{49\\sqrt{3}}{3}$
$\\omega = \\sqrt{\\frac{49\\sqrt{3}}{3}} \\approx 5.33$ rad/s

**Angular velocity omega approx 5.33 rad/s**

**Mark Scheme:**
(a)
- M1: Resolving vertically
- A1: Correct equation
- A1: T = 5.66 N (or exact form)

(b)
- M1: Finding radius
- M1: Resolving horizontally for centripetal force
- A1: omega approx 5.33 rad/s

---

### Example 3: Simple Harmonic Motion with Spring
**Q:** A particle of mass 2 kg rests on a smooth horizontal table and is attached to one end of a light elastic spring of natural length 1 m and modulus of elasticity 72 N. The other end is fixed. The particle is pulled 0.25 m from equilibrium and released.

(a) Show that the particle moves with simple harmonic motion and find the period. [4 marks]
(b) Find the maximum speed of the particle. [2 marks]
(c) Find the speed when the particle is 0.1 m from equilibrium. [2 marks]

**Solution:**

(a) Extension from equilibrium = x
Spring force (restoring) = $\\frac{\\lambda x}{l} = \\frac{72x}{1} = 72x$ (towards equilibrium)

By Newton's second law: $ma = -72x$
$2\\ddot{x} = -72x$
$\\ddot{x} = -36x$

This is SHM with $\\omega^2 = 36$, so $\\omega = 6$ rad/s

**Period T = $\\frac{2\\pi}{\\omega} = \\frac{2\\pi}{6} = \\frac{\\pi}{3}$ seconds**

(b) Amplitude A = 0.25 m (initial displacement)

Maximum speed = $A\\omega = 0.25 \\times 6 = 1.5$ m/s

(c) Using $v^2 = \\omega^2(A^2 - x^2)$:
$v^2 = 36(0.25^2 - 0.1^2) = 36(0.0625 - 0.01) = 36(0.0525) = 1.89$
$v = \\sqrt{1.89} \\approx 1.37$ m/s

**Mark Scheme:**
(a)
- M1: Setting up equation of motion
- A1: $\\ddot{x} = -36x$
- M1: Identifying as SHM with $\\omega = 6$
- A1: Period = $\\frac{\\pi}{3}$ s

(b)
- M1: Using $v_{max} = A\\omega$
- A1: 1.5 m/s

(c)
- M1: Using $v^2 = \\omega^2(A^2 - x^2)$
- A1: v approx 1.37 m/s
`;

// ============================================================================
// WORKED EXAMPLES - FURTHER STATISTICS (Option B)
// ============================================================================

const AQA_FM_FURTHER_STATISTICS_EXAMPLES = `
## Further Statistics Worked Examples

### Example 1: Probability Generating Function
**Q:** A discrete random variable X has probability generating function $G_X(t) = \\frac{1}{8}(1 + t)^3$.

(a) Find P(X = 0), P(X = 1), P(X = 2), and P(X = 3). [4 marks]
(b) Find E(X) and Var(X). [4 marks]

**Solution:**

(a) Expand $(1 + t)^3$:
$(1 + t)^3 = 1 + 3t + 3t^2 + t^3$

$G_X(t) = \\frac{1}{8}(1 + 3t + 3t^2 + t^3)$

Coefficient of $t^r$ gives $P(X = r)$:

$P(X = 0) = \\frac{1}{8}$
$P(X = 1) = \\frac{3}{8}$
$P(X = 2) = \\frac{3}{8}$
$P(X = 3) = \\frac{1}{8}$

Check: $\\frac{1}{8} + \\frac{3}{8} + \\frac{3}{8} + \\frac{1}{8} = 1$ (verified)

(b) $G'_X(t) = \\frac{1}{8} \\cdot 3(1 + t)^2 = \\frac{3}{8}(1 + t)^2$
$G'_X(1) = \\frac{3}{8}(4) = \\frac{3}{2}$
**E(X) = 1.5**

$G''_X(t) = \\frac{3}{8} \\cdot 2(1 + t) = \\frac{3}{4}(1 + t)$
$G''_X(1) = \\frac{3}{4}(2) = \\frac{3}{2}$

$E(X(X-1)) = G''_X(1) = \\frac{3}{2}$
$E(X^2) = E(X(X-1)) + E(X) = \\frac{3}{2} + \\frac{3}{2} = 3$
$Var(X) = E(X^2) - [E(X)]^2 = 3 - \\frac{9}{4} = \\frac{3}{4}$

**Var(X) = 0.75**

**Mark Scheme:**
(a)
- M1: Expanding the PGF
- A1: Identifying coefficients as probabilities
- A1: All probabilities correct
- A1: Verified sum = 1

(b)
- M1: Finding G'(1) for E(X)
- A1: E(X) = 1.5
- M1: Using G''(1) for E(X(X-1))
- A1: Var(X) = 0.75

---

### Example 2: Poisson Distribution
**Q:** The number of customers arriving at a shop follows a Poisson distribution with mean 4 per hour.

(a) Find the probability that exactly 3 customers arrive in a 30-minute period. [3 marks]
(b) Find the probability that more than 10 customers arrive in a 2-hour period. [3 marks]

**Solution:**

(a) In 30 minutes: lambda = 4 times 0.5 = 2
$P(X = 3) = \\frac{e^{-2} \\cdot 2^3}{3!} = \\frac{8e^{-2}}{6} = \\frac{4e^{-2}}{3} \\approx 0.180$

(b) In 2 hours: lambda = 4 times 2 = 8
$P(X > 10) = 1 - P(X \\leq 10)$

Using Poisson tables or calculator:
$P(X \\leq 10) \\approx 0.8159$

$P(X > 10) \\approx 1 - 0.8159 = 0.184$

**Mark Scheme:**
(a)
- M1: Correct lambda = 2
- M1: Using Poisson formula
- A1: approx 0.180

(b)
- M1: Correct lambda = 8
- M1: Using complement
- A1: approx 0.184

---

### Example 3: Chi-Squared Goodness of Fit
**Q:** A die is rolled 120 times with the following results:

| Face | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Frequency | 15 | 22 | 18 | 24 | 25 | 16 |

Test at the 5% significance level whether the die is fair. [6 marks]

**Solution:**

$H_0$: Die is fair (each face has probability 1/6)
$H_1$: Die is not fair

Expected frequency for each face: $\\frac{120}{6} = 20$

| Face | O | E | O - E | (O-E)^2 | (O-E)^2/E |
|------|---|---|-------|---------|-----------|
| 1 | 15 | 20 | -5 | 25 | 1.25 |
| 2 | 22 | 20 | 2 | 4 | 0.20 |
| 3 | 18 | 20 | -2 | 4 | 0.20 |
| 4 | 24 | 20 | 4 | 16 | 0.80 |
| 5 | 25 | 20 | 5 | 25 | 1.25 |
| 6 | 16 | 20 | -4 | 16 | 0.80 |

$\\chi^2 = \\sum \\frac{(O-E)^2}{E} = 1.25 + 0.20 + 0.20 + 0.80 + 1.25 + 0.80 = 4.50$

Degrees of freedom = 6 - 1 = 5

Critical value at 5% level: $\\chi^2_{5, 0.05} = 11.07$

Since 4.50 < 11.07, we do not reject H0.

**Conclusion:** There is insufficient evidence at the 5% level to suggest the die is not fair.

**Mark Scheme:**
- B1: Correct hypotheses
- M1: Expected frequencies = 20
- M1: Calculating chi-squared contributions
- A1: chi-squared = 4.50
- A1: Correct degrees of freedom and critical value
- A1: Correct conclusion in context
`;

// ============================================================================
// WORKED EXAMPLES - NUMERICAL METHODS
// ============================================================================

const AQA_FM_NUMERICAL_METHODS_EXAMPLES = `
## Numerical Methods Worked Examples

### Example 1: Newton-Raphson Method
**Q:** Use the Newton-Raphson method to find the root of $f(x) = x^3 - 2x - 5$ near $x = 2$, giving your answer correct to 4 decimal places. [5 marks]

**Solution:**

Newton-Raphson formula: $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$

$f(x) = x^3 - 2x - 5$
$f'(x) = 3x^2 - 2$

Starting with $x_0 = 2$:

$f(2) = 8 - 4 - 5 = -1$
$f'(2) = 12 - 2 = 10$
$x_1 = 2 - \\frac{-1}{10} = 2 + 0.1 = 2.1$

$f(2.1) = 9.261 - 4.2 - 5 = 0.061$
$f'(2.1) = 13.23 - 2 = 11.23$
$x_2 = 2.1 - \\frac{0.061}{11.23} = 2.1 - 0.00543 = 2.09457$

$f(2.09457) = 9.1908 - 4.1891 - 5 = 0.0017$
$f'(2.09457) = 13.168 - 2 = 11.168$
$x_3 = 2.09457 - \\frac{0.0017}{11.168} = 2.09442$

**Root = 2.0944 (4 d.p.)**

**Mark Scheme:**
- B1: Correct derivative $f'(x) = 3x^2 - 2$
- M1: Correct Newton-Raphson formula set up
- A1: Correct $x_1 = 2.1$
- M1: Continuing iteration
- A1: Final answer 2.0944 to 4 d.p.

---

### Example 2: Simpson's Rule
**Q:** Use Simpson's rule with 5 ordinates to estimate $\\int_0^2 \\sqrt{1 + x^3} \\, dx$, giving your answer to 4 significant figures. [5 marks]

**Solution:**

With 5 ordinates, we have 4 strips, so $h = \\frac{2 - 0}{4} = 0.5$

x-values: 0, 0.5, 1, 1.5, 2

| x | $\\sqrt{1 + x^3}$ |
|---|-------------------|
| 0 | 1.0000 |
| 0.5 | 1.0607 |
| 1 | 1.4142 |
| 1.5 | 2.0917 |
| 2 | 3.0000 |

Simpson's rule:
$\\int \\approx \\frac{h}{3}[y_0 + 4(y_1 + y_3) + 2(y_2) + y_4]$

$= \\frac{0.5}{3}[1.0000 + 4(1.0607 + 2.0917) + 2(1.4142) + 3.0000]$

$= \\frac{0.5}{3}[1.0000 + 4(3.1524) + 2.8284 + 3.0000]$

$= \\frac{0.5}{3}[1.0000 + 12.6096 + 2.8284 + 3.0000]$

$= \\frac{0.5}{3}[19.4380]$

$= \\frac{9.7190}{3} = 3.240$ (4 s.f.)

**Estimate = 3.240**

**Mark Scheme:**
- B1: Correct h = 0.5
- M1: Correct function values
- M1: Correct Simpson's formula structure
- A1: Correct arithmetic
- A1: Final answer 3.240

---

### Example 3: Euler's Method for Differential Equations
**Q:** Use Euler's method with step size h = 0.1 to estimate y(0.3) for the differential equation $\\frac{dy}{dx} = x + y$ with initial condition y(0) = 1. [5 marks]

**Solution:**

Euler's method: $y_{n+1} = y_n + hf(x_n, y_n)$

where $f(x, y) = x + y$ and $h = 0.1$

Starting: $x_0 = 0$, $y_0 = 1$

**Step 1:** $x_1 = 0.1$
$f(0, 1) = 0 + 1 = 1$
$y_1 = 1 + 0.1(1) = 1.1$

**Step 2:** $x_2 = 0.2$
$f(0.1, 1.1) = 0.1 + 1.1 = 1.2$
$y_2 = 1.1 + 0.1(1.2) = 1.22$

**Step 3:** $x_3 = 0.3$
$f(0.2, 1.22) = 0.2 + 1.22 = 1.42$
$y_3 = 1.22 + 0.1(1.42) = 1.362$

**y(0.3) approx 1.362**

**Mark Scheme:**
- B1: Correct Euler formula
- M1: First step correct
- A1: $y_1 = 1.1$
- M1: Continuing iterations correctly
- A1: Final answer $y(0.3) \\approx 1.362$
`;

// ============================================================================
// WORKED EXAMPLES - SERIES AND SUMMATION
// ============================================================================

const AQA_FM_SERIES_EXAMPLES = `
## Series and Summation Worked Examples

### Example 1: Maclaurin Series from First Principles
**Q:** Find the Maclaurin series for $f(x) = \\ln(1 + \\sin x)$ up to and including the term in $x^3$. [6 marks]

**Solution:**

$f(x) = \\ln(1 + \\sin x)$
$f(0) = \\ln(1 + 0) = \\ln 1 = 0$

$f'(x) = \\frac{\\cos x}{1 + \\sin x}$
$f'(0) = \\frac{1}{1 + 0} = 1$

$f''(x) = \\frac{-\\sin x(1 + \\sin x) - \\cos x \\cdot \\cos x}{(1 + \\sin x)^2}$
$= \\frac{-\\sin x - \\sin^2 x - \\cos^2 x}{(1 + \\sin x)^2}$
$= \\frac{-\\sin x - 1}{(1 + \\sin x)^2} = \\frac{-(1 + \\sin x)}{(1 + \\sin x)^2} = \\frac{-1}{1 + \\sin x}$

$f''(0) = \\frac{-1}{1} = -1$

$f'''(x) = \\frac{\\cos x}{(1 + \\sin x)^2}$
$f'''(0) = \\frac{1}{1} = 1$

Maclaurin series:
$f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + ...$

$= 0 + 1 \\cdot x + \\frac{-1}{2}x^2 + \\frac{1}{6}x^3 + ...$

$\\ln(1 + \\sin x) = x - \\frac{x^2}{2} + \\frac{x^3}{6} + ...$

**Mark Scheme:**
- B1: f(0) = 0
- M1: Finding f'(x) and f'(0) = 1
- M1: Finding f''(x) correctly
- A1: f''(0) = -1
- A1: f'''(0) = 1
- A1: Correct series $x - \\frac{x^2}{2} + \\frac{x^3}{6}$

---

### Example 2: Method of Differences
**Q:** Using partial fractions, find $\\sum_{r=1}^n \\frac{1}{r(r+1)}$. [5 marks]

**Solution:**

Express in partial fractions:
$\\frac{1}{r(r+1)} = \\frac{A}{r} + \\frac{B}{r+1}$

$1 = A(r+1) + Br$

When $r = 0$: $1 = A$, so $A = 1$
When $r = -1$: $1 = -B$, so $B = -1$

$\\frac{1}{r(r+1)} = \\frac{1}{r} - \\frac{1}{r+1}$

$\\sum_{r=1}^n \\frac{1}{r(r+1)} = \\sum_{r=1}^n \\left(\\frac{1}{r} - \\frac{1}{r+1}\\right)$

Write out terms:
$= \\left(\\frac{1}{1} - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + ... + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$

This is a telescoping series. Most terms cancel:

$= 1 - \\frac{1}{n+1} = \\frac{n+1-1}{n+1} = \\frac{n}{n+1}$

**Mark Scheme:**
- M1: Setting up partial fractions correctly
- A1: $\\frac{1}{r} - \\frac{1}{r+1}$
- M1: Recognising telescoping sum
- M1: Writing out and cancelling terms
- A1: Final answer $\\frac{n}{n+1}$
`;

// ============================================================================
// ADDITIONAL EXPORTS FOR EXTENDED USE
// ============================================================================

/**
 * Get the full knowledge base for AQA Further Maths.
 */
export function getAQAALevelFurtherMathsKnowledgeBase(): string {
  return `
${AQA_FM_ASSESSMENT_OBJECTIVES}

${AQA_FM_EXAM_STRUCTURE}

${AQA_FM_KEY_FORMULAE}

${AQA_FM_MECHANICS_FORMULAE}

${AQA_FM_STATISTICS_FORMULAE}

${AQA_FM_DISCRETE_FORMULAE}
`;
}

/**
 * Get all worked examples for review purposes.
 */
export function getAQAALevelFurtherMathsExamples(): string {
  return `
${AQA_FM_COMPLEX_NUMBERS_EXAMPLES}

${AQA_FM_MATRICES_EXAMPLES}

${AQA_FM_PROOF_EXAMPLES}

${AQA_FM_VECTORS_EXAMPLES}

${AQA_FM_DIFF_EQ_EXAMPLES}

${AQA_FM_HYPERBOLIC_EXAMPLES}

${AQA_FM_POLAR_EXAMPLES}

${AQA_FM_FURTHER_MECHANICS_EXAMPLES}

${AQA_FM_FURTHER_STATISTICS_EXAMPLES}

${AQA_FM_NUMERICAL_METHODS_EXAMPLES}

${AQA_FM_SERIES_EXAMPLES}
`;
}

/**
 * Get topic-specific guidance for a given topic ID.
 */
export function getAQAALevelFurtherMathsTopicGuidance(topicId: string): string {
  return AQA_FM_TOPIC_GUIDANCE[topicId] || '';
}
