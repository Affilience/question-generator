import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';


/**
 * OCR A-Level Further Mathematics A (H245) Question Generation Prompts.
 * Based on official OCR specification.
 *
 * Sources:
 * - https://www.ocr.org.uk/qualifications/as-and-a-level/further-mathematics-a-h235-h245-from-2017/
 */

// ============================================================================
// OCR A-LEVEL FURTHER MATHS COGNITIVE CHALLENGE
// ============================================================================

const OCR_ALEVEL_FURTHER_MATHS_COGNITIVE_CHALLENGE = `
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
// OCR A-LEVEL FURTHER MATHS KEY CONTENT
// ============================================================================

const OCR_FM_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Further Mathematics Assessment Objectives

Assessment objectives are set by Ofqual and are the same across all A-Level Further Mathematics specifications,
but applied at a more demanding level than standard A-Level Mathematics.

### AO1: Use and Apply Standard Techniques (50%)
Students should be able to:
- Select and correctly carry out routine procedures at Further Mathematics level
- Accurately recall facts, terminology and definitions for advanced mathematical content
- Use notation correctly for complex mathematical structures
- Execute multi-step algebraic manipulations accurately

**AO1 Question Characteristics:**
- Direct application of advanced techniques (matrix operations, complex number manipulation)
- Standard differentiation/integration of hyperbolic functions
- Applying De Moivre's theorem to find roots and derive identities
- Using polar coordinate conversions and calculus
- Solving second-order differential equations with standard methods
- Performing operations with vectors in 3D including cross products

### AO2: Reason, Interpret and Communicate Mathematically (25%)
Students should be able to:
- Construct rigorous mathematical arguments (including proofs)
- Make deductions and inferences at an advanced level
- Assess the validity of mathematical arguments
- Explain their reasoning using precise mathematical language
- Use mathematical language and notation correctly at Further Maths level

**AO2 Question Characteristics:**
- Proof by induction for sequences, series, divisibility, and matrix results
- "Show that" questions requiring multi-step algebraic manipulation
- Geometric interpretation of complex number operations
- Proving properties of matrices and transformations
- Constructing logical arguments in abstract contexts
- Interpreting the geometric meaning of vector equations

### AO3: Solve Problems Within Mathematics and Other Contexts (25%)
Students should be able to:
- Translate complex problems into sophisticated mathematical processes
- Interpret solutions in context and evaluate their accuracy
- Translate abstract situations into mathematical models
- Make connections between different areas of mathematics
- Evaluate modelling outcomes and refine models

**AO3 Question Characteristics:**
- Extended problems combining multiple Further Maths topics
- Modelling with differential equations
- Optimization using calculus techniques
- Mechanics problems requiring advanced mathematical techniques
- Statistical inference in complex contexts
- Discrete mathematics applications to real-world scenarios

### Weighting by Paper
| Paper | Content | Duration | Marks | AO1 | AO2 | AO3 |
|-------|---------|----------|-------|-----|-----|-----|
| Paper 1 (Y540) | Pure Core | 1hr 30min | 75 | ~50% | ~25% | ~25% |
| Paper 2 (Y541) | Pure Core | 1hr 30min | 75 | ~50% | ~25% | ~25% |
| Paper 3 | Optional | 1hr 30min | 75 | ~50% | ~25% | ~25% |
| Paper 4 | Optional | 1hr 30min | 75 | ~50% | ~25% | ~25% |
| **Overall** | | **6 hours** | **300 marks** | **50%** | **25%** | **25%** |

### Mathematical Skills Requirement
- At least 50% of marks require mathematical skills equivalent to Level 3 or above
- Problems require synthesis of multiple mathematical concepts
- Extended chains of reasoning are expected
- Precise use of mathematical notation throughout
`;

// ============================================================================
// OCR FURTHER MATHS EXAM STRUCTURE
// ============================================================================

const OCR_FM_EXAM_STRUCTURE = `
## OCR A-Level Further Mathematics Exam Structure (H245)

### Overview
OCR A-Level Further Mathematics A consists of four papers:
- Two compulsory Pure Core papers
- Two optional papers (students choose from available options)

### Paper 1: Pure Core 1 (Y540)
- **Duration:** 1 hour 30 minutes
- **Marks:** 75
- **Content:**
  - Proof by induction
  - Complex numbers (Argand diagrams, modulus-argument form)
  - Matrices (2×2 and 3×3)
  - Further algebra and series
  - Further calculus
  - Vectors (3D)
- **Calculator:** Yes
- **Formulae booklet:** Yes

### Paper 2: Pure Core 2 (Y541)
- **Duration:** 1 hour 30 minutes
- **Marks:** 75
- **Content:**
  - Complex numbers (De Moivre, roots, loci)
  - Matrices (eigenvalues, diagonalisation)
  - Hyperbolic functions
  - Polar coordinates
  - Differential equations
  - Further calculus (Maclaurin, improper integrals)
- **Calculator:** Yes
- **Formulae booklet:** Yes

### Optional Papers (Choose 2 from the following)

**Statistics (Y542)**
- Content: Probability distributions, hypothesis testing, chi-squared tests, probability generating functions, continuous distributions

**Mechanics (Y543)**
- Content: Dimensional analysis, work-energy, collisions, circular motion, centres of mass, SHM

**Discrete Mathematics (Y544)**
- Content: Graphs and networks, algorithms, critical path analysis, linear programming, game theory

**Additional Pure Mathematics (Y545)**
- Content: Number theory, groups, further matrix algebra, further complex numbers, recurrence relations

### Total Assessment
- **Total Marks:** 300 (4 papers × 75 marks)
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

**IMPORTANT:** Many Further Maths formulae must be memorised and are NOT in the booklet.
`;

// ============================================================================
// OCR MARK SCHEME CONVENTIONS
// ============================================================================

const OCR_FM_MARK_SCHEME = `
## OCR A-Level Further Mathematics Mark Scheme Conventions

### Mark Types
| Mark | Type | Description |
|------|------|-------------|
| **M** | Method | Awarded for knowing and attempting to apply a correct method |
| **A** | Accuracy | Can only be awarded if relevant M marks have been earned |
| **B** | Independent | Unconditional accuracy marks, independent of M marks |
| **E** | Explanation | Awarded for explanation or reasoning |
| **SC** | Special Case | Marks for partially correct approaches |

### Important Rules
- M marks are awarded for correct method, even with arithmetic errors
- A marks depend on preceding M marks being awarded
- B marks stand alone and do not depend on other marks
- Marks should NOT be subdivided
- Follow-through marks apply where indicated

### Common Abbreviations
| Abbreviation | Meaning |
|--------------|---------|
| **cao** | Correct answer only (no follow-through) |
| **ft** | Follow through from earlier error |
| **o.e.** | Or equivalent |
| **awrt** | Answers which round to |
| **cso** | Correct solution only (no errors in working) |
| **isw** | Ignore subsequent working |
| **soi** | Seen or implied |
| **www** | Without wrong working |

### Special Conventions for Further Maths
- Complex number answers may be accepted in multiple forms (Cartesian, modulus-argument, exponential)
- Matrix answers should have elements in exact form unless otherwise stated
- Proof by induction must include all required steps for full marks
- Vector equations may be expressed in different equivalent parametric forms
- Hyperbolic function answers may use inverse notation (arsinh, arcosh) or logarithmic form

### Worked Examples with Mark Schemes

**Example 1: Complex Number Roots (5 marks)**
*Question:* Find the cube roots of z = 8i, expressing answers in the form re^(iθ)

*Mark Scheme:*
- B1: Writes 8i = 8e^(iπ/2) (modulus-argument form)
- M1: Applies z^(1/3) = 8^(1/3) × e^(i(π/2 + 2kπ)/3) for k = 0, 1, 2
- A1: First root: 2e^(iπ/6)
- A1: Second root: 2e^(i5π/6)
- A1: Third root: 2e^(i3π/2) or 2e^(-iπ/2) (all three roots cao)

**Example 2: Vectors and Planes (6 marks)**
*Question:* Find the shortest distance from point P(1, 2, 3) to the plane 2x - y + 2z = 9

*Mark Scheme:*
- B1: Identifies normal vector n = (2, -1, 2)
- M1: Uses formula d = |ax₀ + by₀ + cz₀ - d|/√(a² + b² + c²)
- A1: Substitutes: |2(1) - 1(2) + 2(3) - 9|/√(4 + 1 + 4)
- A1: Numerator = |2 - 2 + 6 - 9| = |-3| = 3
- A1: Denominator = √9 = 3
- A1: Distance = 1 unit (cao)

**Example 3: Maclaurin Series (6 marks)**
*Question:* Find the Maclaurin series for ln(1 + x) up to and including the term in x⁴

*Mark Scheme:*
- M1: Differentiates f(x) = ln(1 + x) repeatedly
- A1: f'(x) = 1/(1+x), f''(x) = -1/(1+x)², f'''(x) = 2/(1+x)³, f⁽⁴⁾(x) = -6/(1+x)⁴
- B1: States f(0) = 0
- A1: Evaluates f'(0) = 1, f''(0) = -1, f'''(0) = 2, f⁽⁴⁾(0) = -6
- M1: Applies Maclaurin formula
- A1: ln(1 + x) = x - x²/2 + x³/3 - x⁴/4 + ... (cao)

**Example 4: Differential Equations (8 marks)**
*Question:* Solve dy/dx + y tan(x) = sec(x), given y = 2 when x = 0

*Mark Scheme:*
- M1: Identifies as first-order linear, finds integrating factor
- A1: I.F. = e^∫tan(x)dx = sec(x)
- M1: Multiplies through by I.F.
- A1: d/dx(y sec(x)) = sec²(x)
- M1: Integrates both sides
- A1: y sec(x) = tan(x) + C
- M1: Applies boundary condition y(0) = 2
- A1: C = 2, giving y = sin(x) + 2cos(x) (cao)

### Alternative Method Guidance
- Vector distance: parametric line method equally valid
- Complex roots: De Moivre's theorem or direct approach both accepted
- Integration: substitution and parts may both be valid depending on integral
- Differential equations: separation of variables where applicable equally valid

### Misread Rule
For misreading which does not alter the character of a question or materially simplify it:
- Deduct TWO from any A or B marks gained
- Do not deduct from M marks
- Apply this only once per question

### OCR-Specific Characteristics
- Clean, well-structured questions
- Good range of difficulty within each paper
- "Show that" and "Hence" used appropriately
- Multi-part questions with logical progression
- Balance of calculation and reasoning
`;

const OCR_FM_KEY_FORMULAE = `## Key Further Maths Formulae (OCR)

These formulae are essential for OCR A-Level Further Mathematics. Many must be memorised as they
are NOT provided in the formula booklet.

### Complex Numbers (MUST KNOW)
| Formula | Description |
|---------|-------------|
| $i^2 = -1$ | Definition of imaginary unit |
| $|z| = \\sqrt{x^2 + y^2}$ | Modulus of $z = x + iy$ |
| $\\arg(z) = \\arctan(y/x)$ | Argument (in appropriate quadrant) |
| $z\\bar{z} = |z|^2$ | Product with conjugate |
| $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ | Euler's formula |
| $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ | De Moivre's theorem |
| $z_k = r^{1/n}e^{i(\\theta + 2k\\pi)/n}$ | nth roots formula |

### Complex Number Loci
| Locus | Equation | Description |
|-------|----------|-------------|
| Circle | $|z - a| = k$ | Circle centre $a$, radius $k$ |
| Perpendicular bisector | $|z - a| = |z - b|$ | Points equidistant from $a$ and $b$ |
| Half-line | $\\arg(z - a) = \\theta$ | Half-line from $a$ at angle $\\theta$ |
| Arc | $\\arg\\left(\\frac{z-a}{z-b}\\right) = \\alpha$ | Arc of circle through $a$ and $b$ |

### Matrices (MUST KNOW)
| Formula | Description |
|---------|-------------|
| $\\det\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc$ | 2×2 determinant |
| $A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$ | 2×2 inverse |
| $\\det(AB) = \\det(A)\\det(B)$ | Determinant product rule |
| $(AB)^{-1} = B^{-1}A^{-1}$ | Inverse product rule |
| $\\det(A - \\lambda I) = 0$ | Characteristic equation |

### 3×3 Matrix Operations
| Formula | Description |
|---------|-------------|
| $\\det(A) = a(ei-fh) - b(di-fg) + c(dh-eg)$ | Cofactor expansion |
| $A^{-1} = \\frac{1}{\\det A}\\text{adj}(A)$ | Inverse via adjugate |
| $\\text{adj}(A) = C^T$ | Adjugate is transpose of cofactor matrix |

### Eigenvalues and Eigenvectors
- Characteristic equation: $\\det(A - \\lambda I) = 0$
- For eigenvalue $\\lambda$: $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$
- Sum of eigenvalues = trace(A)
- Product of eigenvalues = det(A)
- Cayley-Hamilton: Every matrix satisfies its own characteristic equation

### Standard Transformations (2D)
| Transformation | Matrix |
|----------------|--------|
| Rotation by $\\theta$ anticlockwise | $\\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$ |
| Reflection in $y = x\\tan\\alpha$ | $\\begin{pmatrix}\\cos 2\\alpha & \\sin 2\\alpha \\\\ \\sin 2\\alpha & -\\cos 2\\alpha\\end{pmatrix}$ |
| Reflection in x-axis | $\\begin{pmatrix}1 & 0 \\\\ 0 & -1\\end{pmatrix}$ |
| Reflection in y-axis | $\\begin{pmatrix}-1 & 0 \\\\ 0 & 1\\end{pmatrix}$ |
| Reflection in $y = x$ | $\\begin{pmatrix}0 & 1 \\\\ 1 & 0\\end{pmatrix}$ |
| Stretch factor $k$ parallel to x-axis | $\\begin{pmatrix}k & 0 \\\\ 0 & 1\\end{pmatrix}$ |
| Enlargement factor $k$ | $\\begin{pmatrix}k & 0 \\\\ 0 & k\\end{pmatrix}$ |
| Shear parallel to x-axis | $\\begin{pmatrix}1 & k \\\\ 0 & 1\\end{pmatrix}$ |

### Hyperbolic Functions (MUST KNOW)
| Function | Definition | Inverse Form |
|----------|------------|--------------|
| $\\sinh x$ | $\\frac{e^x - e^{-x}}{2}$ | $\\text{arsinh } x = \\ln(x + \\sqrt{x^2 + 1})$ |
| $\\cosh x$ | $\\frac{e^x + e^{-x}}{2}$ | $\\text{arcosh } x = \\ln(x + \\sqrt{x^2 - 1})$, $x \\geq 1$ |
| $\\tanh x$ | $\\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}$ | $\\text{artanh } x = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$, $|x| < 1$ |

### Hyperbolic Identities
| Identity |
|----------|
| $\\cosh^2 x - \\sinh^2 x = 1$ |
| $1 - \\tanh^2 x = \\text{sech}^2 x$ |
| $\\coth^2 x - 1 = \\text{cosech}^2 x$ |
| $\\sinh 2x = 2\\sinh x \\cosh x$ |
| $\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x$ |

### Hyperbolic Derivatives and Integrals
| Function | Derivative | Integral |
|----------|------------|----------|
| $\\sinh x$ | $\\cosh x$ | $\\cosh x + c$ |
| $\\cosh x$ | $\\sinh x$ | $\\sinh x + c$ |
| $\\tanh x$ | $\\text{sech}^2 x$ | $\\ln(\\cosh x) + c$ |
| $\\text{arsinh } x$ | $\\frac{1}{\\sqrt{x^2+1}}$ | $x\\text{arsinh } x - \\sqrt{x^2+1} + c$ |
| $\\text{arcosh } x$ | $\\frac{1}{\\sqrt{x^2-1}}$ | $x\\text{arcosh } x - \\sqrt{x^2-1} + c$ |

### Standard Integrals (Further Maths)
| Integral | Result |
|----------|--------|
| $\\int \\frac{1}{\\sqrt{a^2 - x^2}} dx$ | $\\arcsin\\frac{x}{a} + c$ |
| $\\int \\frac{1}{a^2 + x^2} dx$ | $\\frac{1}{a}\\arctan\\frac{x}{a} + c$ |
| $\\int \\frac{1}{\\sqrt{x^2 + a^2}} dx$ | $\\text{arsinh}\\frac{x}{a} + c = \\ln(x + \\sqrt{x^2+a^2}) + c$ |
| $\\int \\frac{1}{\\sqrt{x^2 - a^2}} dx$ | $\\text{arcosh}\\frac{x}{a} + c = \\ln(x + \\sqrt{x^2-a^2}) + c$ |
| $\\int \\frac{1}{a^2 - x^2} dx$ | $\\frac{1}{2a}\\ln\\left|\\frac{a+x}{a-x}\\right| + c$ |

### Vectors (3D)
| Formula | Description |
|---------|-------------|
| $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$ | Scalar product |
| $\\mathbf{a} \\times \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta \\, \\hat{\\mathbf{n}}$ | Vector product |
| $\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3\\end{vmatrix}$ | Cross product formula |
| $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$ | Scalar triple product (volume) |
| $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$ | Vector equation of line |
| $\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$ | Vector equation of plane |
| $d = \\frac{|\\mathbf{n} \\cdot (\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}$ | Distance from point to plane |

### Polar Coordinates
| Formula | Description |
|---------|-------------|
| $x = r\\cos\\theta$, $y = r\\sin\\theta$ | Conversion to Cartesian |
| $r = \\sqrt{x^2 + y^2}$, $\\theta = \\arctan(y/x)$ | Conversion to polar |
| $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 \\, d\\theta$ | Area in polar coordinates |
| $\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$ | Gradient in polar |

### Series (MUST KNOW)
| Sum | Formula |
|-----|---------|
| $\\sum_{r=1}^n r$ | $\\frac{n(n+1)}{2}$ |
| $\\sum_{r=1}^n r^2$ | $\\frac{n(n+1)(2n+1)}{6}$ |
| $\\sum_{r=1}^n r^3$ | $\\frac{n^2(n+1)^2}{4}$ |

### Maclaurin Series
| Function | Series |
|----------|--------|
| $e^x$ | $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$ |
| $\\sin x$ | $x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$ |
| $\\cos x$ | $1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$ |
| $\\ln(1+x)$ | $x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$, $-1 < x \\leq 1$ |
| $(1+x)^n$ | $1 + nx + \\frac{n(n-1)}{2!}x^2 + \\cdots$, $|x| < 1$ |
| $\\sinh x$ | $x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\cdots$ |
| $\\cosh x$ | $1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} + \\cdots$ |

### Differential Equations
| Type | Solution Method |
|------|-----------------|
| $\\frac{d^2y}{dx^2} + b\\frac{dy}{dx} + cy = 0$ | Auxiliary equation $m^2 + bm + c = 0$ |
| Real distinct roots $m_1, m_2$ | $y = Ae^{m_1x} + Be^{m_2x}$ |
| Repeated root $m$ | $y = (A + Bx)e^{mx}$ |
| Complex roots $p \\pm qi$ | $y = e^{px}(A\\cos qx + B\\sin qx)$ |

### Further Mechanics Formulae
| Formula | Description |
|---------|-------------|
| $I = \\int F \\, dt = mv - mu$ | Impulse-momentum |
| $e = \\frac{v_2 - v_1}{u_1 - u_2}$ | Coefficient of restitution |
| $T = \\frac{\\lambda x}{l}$ | Hooke's law for elastic strings |
| $EPE = \\frac{\\lambda x^2}{2l}$ | Elastic potential energy |
| $\\omega = \\frac{v}{r}$ | Angular velocity |
| $a = r\\omega^2 = \\frac{v^2}{r}$ | Centripetal acceleration |
| $\\ddot{x} = -\\omega^2 x$ | SHM equation |

### Further Statistics Formulae
| Formula | Description |
|---------|-------------|
| $P(X = r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}$ | Poisson distribution |
| $P(X = r) = p(1-p)^{r-1}$ | Geometric distribution |
| $G_X(t) = E(t^X)$ | Probability generating function |
| $E(X) = G'_X(1)$ | Mean from PGF |
| $\\text{Var}(X) = G''_X(1) + G'_X(1) - [G'_X(1)]^2$ | Variance from PGF |
| $\\chi^2 = \\sum\\frac{(O-E)^2}{E}$ | Chi-squared test statistic |
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 1 (Complex Numbers)
// ============================================================================

const OCR_FM_COMPLEX_EXAMPLES = `## Further Maths Worked Examples: Complex Numbers (OCR Style)

### COMPLEX NUMBERS - De Moivre for Trig Identity
**Q:** Use De Moivre's theorem to express $\\cos 4\\theta$ in terms of $\\cos\\theta$. [5 marks]
**Solution:**
- By De Moivre: $(\\cos\\theta + i\\sin\\theta)^4 = \\cos 4\\theta + i\\sin 4\\theta$
- Expand LHS using binomial: $(c + is)^4$ where $c = \\cos\\theta$, $s = \\sin\\theta$
- $= c^4 + 4c^3(is) + 6c^2(is)^2 + 4c(is)^3 + (is)^4$
- $= c^4 + 4ic^3s - 6c^2s^2 - 4ics^3 + s^4$
- $= (c^4 - 6c^2s^2 + s^4) + i(4c^3s - 4cs^3)$
- Equating real parts: $\\cos 4\\theta = c^4 - 6c^2s^2 + s^4$
- Using $s^2 = 1 - c^2$:
- $= c^4 - 6c^2(1-c^2) + (1-c^2)^2$
- $= c^4 - 6c^2 + 6c^4 + 1 - 2c^2 + c^4$
- **$\\cos 4\\theta = 8\\cos^4\\theta - 8\\cos^2\\theta + 1$** ✓

**Mark Scheme:**
- M1: Correct application of De Moivre's theorem
- A1: Correct binomial expansion
- M1: Separating real and imaginary parts
- M1: Using $\\sin^2\\theta = 1 - \\cos^2\\theta$
- A1: Final simplified form

---

### COMPLEX NUMBERS - nth Roots of Unity
**Q:** Find the five fifth roots of unity and show they sum to zero. [6 marks]
**Solution:**
- Fifth roots of unity are solutions to $z^5 = 1$
- Write $1 = e^{i \\cdot 2k\\pi}$ for integer $k$
- So $z = e^{i \\cdot 2k\\pi/5}$ for $k = 0, 1, 2, 3, 4$
- $z_0 = e^{i \\cdot 0} = 1$
- $z_1 = e^{i \\cdot 2\\pi/5} = \\cos\\frac{2\\pi}{5} + i\\sin\\frac{2\\pi}{5}$
- $z_2 = e^{i \\cdot 4\\pi/5} = \\cos\\frac{4\\pi}{5} + i\\sin\\frac{4\\pi}{5}$
- $z_3 = e^{i \\cdot 6\\pi/5} = \\cos\\frac{6\\pi}{5} + i\\sin\\frac{6\\pi}{5}$
- $z_4 = e^{i \\cdot 8\\pi/5} = \\cos\\frac{8\\pi}{5} + i\\sin\\frac{8\\pi}{5}$
- Sum: Using geometric series formula:
- $\\sum_{k=0}^{4} z_k = \\sum_{k=0}^{4} e^{i \\cdot 2k\\pi/5} = \\frac{1 - e^{i \\cdot 2\\pi}}{1 - e^{i \\cdot 2\\pi/5}} = \\frac{1-1}{1-e^{i \\cdot 2\\pi/5}} = 0$ ✓
- **The five fifth roots are $1, e^{2\\pi i/5}, e^{4\\pi i/5}, e^{6\\pi i/5}, e^{8\\pi i/5}$, and their sum is 0** ✓

**Mark Scheme:**
- B1: $z = e^{2k\\pi i/5}$ or equivalent
- M1: Using formula for nth roots
- A1: All five roots correctly identified
- M1: Method for summing (geometric series or direct)
- A1: Showing sum = 0
- A1: Clear conclusion

---

### COMPLEX NUMBERS - Loci on Argand Diagram
**Q:** Sketch and describe the locus given by $|z - 3 - 4i| = |z + 1 - 2i|$. Find the Cartesian equation. [5 marks]
**Solution:**
- This represents points equidistant from $A(3, 4)$ and $B(-1, 2)$
- The locus is the perpendicular bisector of $AB$
- Midpoint of $AB$: $M = \\left(\\frac{3-1}{2}, \\frac{4+2}{2}\\right) = (1, 3)$
- Gradient of $AB$: $m_{AB} = \\frac{4-2}{3-(-1)} = \\frac{2}{4} = \\frac{1}{2}$
- Gradient of perpendicular: $m = -2$
- Equation: $y - 3 = -2(x - 1)$
- **Cartesian equation: $y = -2x + 5$ or $2x + y = 5$** ✓
- **The locus is a straight line passing through $(1, 3)$ perpendicular to the line joining $(3, 4)$ and $(-1, 2)$** ✓

**Mark Scheme:**
- M1: Recognising as perpendicular bisector
- A1: Correct midpoint (1, 3)
- A1: Correct gradient of AB
- M1: Finding perpendicular gradient
- A1: Correct Cartesian equation

---

### COMPLEX NUMBERS - Cube Roots of Complex Number
**Q:** Find the three cube roots of $-8i$, giving your answers in the form $re^{i\\theta}$ where $-\\pi < \\theta \\leq \\pi$. [6 marks]
**Solution:**
- First express $-8i$ in exponential form
- $-8i$ has modulus $|-8i| = 8$ and argument $\\arg(-8i) = -\\frac{\\pi}{2}$
- So $-8i = 8e^{-i\\pi/2}$
- For cube roots: $z = 8^{1/3}e^{i(-\\pi/2 + 2k\\pi)/3}$ for $k = 0, 1, 2$
- $z = 2e^{i(-\\pi/6 + 2k\\pi/3)}$
- For $k = 0$: $z_0 = 2e^{-i\\pi/6}$
- For $k = 1$: $z_1 = 2e^{i(-\\pi/6 + 2\\pi/3)} = 2e^{i\\pi/2}$
- For $k = 2$: $z_2 = 2e^{i(-\\pi/6 + 4\\pi/3)} = 2e^{i7\\pi/6}$
- Adjusting $z_2$ to principal argument: $2e^{i(7\\pi/6 - 2\\pi)} = 2e^{-i5\\pi/6}$
- **Cube roots: $2e^{-i\\pi/6}$, $2e^{i\\pi/2}$, $2e^{-i5\\pi/6}$** ✓

**Mark Scheme:**
- B1: $-8i = 8e^{-i\\pi/2}$ correctly
- M1: Using nth roots formula
- A1: Correct form $2e^{i(-\\pi/6 + 2k\\pi/3)}$
- A1: First root correct
- A1: Second root correct
- A1: Third root correct (in principal argument range)

---

### COMPLEX NUMBERS - Using Complex Numbers to Sum Series
**Q:** Use $z = \\cos\\theta + i\\sin\\theta$ to find $\\sum_{r=0}^{n-1}\\cos r\\theta$. [6 marks]
**Solution:**
- Consider $S = \\sum_{r=0}^{n-1} z^r$ where $z = e^{i\\theta}$
- This is a geometric series: $S = \\frac{1-z^n}{1-z} = \\frac{1-e^{in\\theta}}{1-e^{i\\theta}}$
- Multiply numerator and denominator by $e^{-i\\theta/2}$:
- $S = \\frac{e^{-in\\theta/2}(e^{in\\theta/2}-e^{-in\\theta/2})}{e^{-i\\theta/2}(e^{i\\theta/2}-e^{-i\\theta/2})}$
- $= \\frac{e^{i(n-1)\\theta/2} \\cdot 2i\\sin(n\\theta/2)}{2i\\sin(\\theta/2)}$
- $= \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} \\cdot e^{i(n-1)\\theta/2}$
- Taking real part:
- **$\\sum_{r=0}^{n-1}\\cos r\\theta = \\frac{\\sin(n\\theta/2)}{\\sin(\\theta/2)} \\cos\\frac{(n-1)\\theta}{2}$** ✓

**Mark Scheme:**
- M1: Setting up geometric series with $z = e^{i\\theta}$
- A1: Correct sum formula
- M1: Manipulation to separate real/imaginary parts
- M1: Using $e^{ix} - e^{-ix} = 2i\\sin x$
- A1: Correct simplification
- A1: Final answer for real part

---

### COMPLEX NUMBERS - Argument of Product/Quotient
**Q:** Given $z_1 = 1 + i\\sqrt{3}$ and $z_2 = \\sqrt{3} - i$, find $\\arg(z_1z_2)$ and $\\arg(z_1/z_2)$ in exact form. [5 marks]
**Solution:**
- For $z_1 = 1 + i\\sqrt{3}$: $|z_1| = \\sqrt{1+3} = 2$, $\\arg(z_1) = \\arctan(\\sqrt{3}/1) = \\frac{\\pi}{3}$
- For $z_2 = \\sqrt{3} - i$: $|z_2| = \\sqrt{3+1} = 2$, $\\arg(z_2) = \\arctan(-1/\\sqrt{3}) = -\\frac{\\pi}{6}$
- $\\arg(z_1z_2) = \\arg(z_1) + \\arg(z_2) = \\frac{\\pi}{3} + (-\\frac{\\pi}{6}) = \\frac{\\pi}{6}$ ✓
- $\\arg(z_1/z_2) = \\arg(z_1) - \\arg(z_2) = \\frac{\\pi}{3} - (-\\frac{\\pi}{6}) = \\frac{\\pi}{2}$ ✓

**Mark Scheme:**
- B1: $\\arg(z_1) = \\pi/3$
- B1: $\\arg(z_2) = -\\pi/6$
- M1: Using argument rules for products
- A1: $\\arg(z_1z_2) = \\pi/6$
- A1: $\\arg(z_1/z_2) = \\pi/2$

---

### COMPLEX NUMBERS - Complex Conjugate Roots
**Q:** Given that $2 + 3i$ is a root of $z^3 - 6z^2 + 21z - 26 = 0$, find all roots. [5 marks]
**Solution:**
- Since coefficients are real, $2 - 3i$ is also a root
- Sum of these two roots: $(2+3i) + (2-3i) = 4$
- Product of these two roots: $(2+3i)(2-3i) = 4 + 9 = 13$
- Quadratic factor: $z^2 - 4z + 13$
- Dividing: $z^3 - 6z^2 + 21z - 26 = (z^2 - 4z + 13)(z - 2)$
- Third root: $z = 2$
- **Roots are $2 + 3i$, $2 - 3i$, and $2$** ✓

**Mark Scheme:**
- B1: Recognising $2-3i$ is also a root
- M1: Forming quadratic factor
- A1: Correct quadratic $z^2 - 4z + 13$
- M1: Dividing to find linear factor
- A1: All three roots correct
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 2 (Matrices)
// ============================================================================

const OCR_FM_MATRICES_EXAMPLES = `## Further Maths Worked Examples: Matrices (OCR Style)

### MATRICES - Finding Eigenvalues and Eigenvectors
**Q:** For matrix $A = \\begin{pmatrix}4 & 2 \\\\ 3 & 3\\end{pmatrix}$, find the eigenvalues and corresponding eigenvectors. [7 marks]
**Solution:**
- Characteristic equation: $\\det(A - \\lambda I) = 0$
- $\\det\\begin{pmatrix}4-\\lambda & 2 \\\\ 3 & 3-\\lambda\\end{pmatrix} = (4-\\lambda)(3-\\lambda) - 6 = 0$
- $12 - 4\\lambda - 3\\lambda + \\lambda^2 - 6 = 0$
- $\\lambda^2 - 7\\lambda + 6 = 0$
- $(\\lambda - 1)(\\lambda - 6) = 0$
- **Eigenvalues: $\\lambda_1 = 1$ and $\\lambda_2 = 6$** ✓

- For $\\lambda_1 = 1$: $(A - I)\\mathbf{v} = 0$
- $\\begin{pmatrix}3 & 2 \\\\ 3 & 2\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 0\\end{pmatrix}$
- $3x + 2y = 0 \\Rightarrow y = -\\frac{3x}{2}$
- Taking $x = 2$: **Eigenvector $\\mathbf{v}_1 = \\begin{pmatrix}2 \\\\ -3\\end{pmatrix}$** ✓

- For $\\lambda_2 = 6$: $(A - 6I)\\mathbf{v} = 0$
- $\\begin{pmatrix}-2 & 2 \\\\ 3 & -3\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}0 \\\\ 0\\end{pmatrix}$
- $-2x + 2y = 0 \\Rightarrow y = x$
- Taking $x = 1$: **Eigenvector $\\mathbf{v}_2 = \\begin{pmatrix}1 \\\\ 1\\end{pmatrix}$** ✓

**Mark Scheme:**
- M1: Setting up characteristic equation
- A1: Correct expansion
- A1: Both eigenvalues correct: $\\lambda = 1, 6$
- M1: Setting up $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$
- A1: Eigenvector for $\\lambda = 1$ correct
- A1: Eigenvector for $\\lambda = 6$ correct
- A1: All answers clearly stated

---

### MATRICES - Diagonalisation
**Q:** Given $A = \\begin{pmatrix}5 & 4 \\\\ 2 & 3\\end{pmatrix}$, express $A$ in the form $PDP^{-1}$ where $D$ is diagonal. Hence find $A^n$. [9 marks]
**Solution:**
- Eigenvalues: $\\det(A - \\lambda I) = (5-\\lambda)(3-\\lambda) - 8 = 0$
- $\\lambda^2 - 8\\lambda + 7 = 0 \\Rightarrow (\\lambda-1)(\\lambda-7) = 0$
- **$\\lambda_1 = 1$, $\\lambda_2 = 7$** ✓

- For $\\lambda = 1$: $\\begin{pmatrix}4 & 4 \\\\ 2 & 2\\end{pmatrix}\\mathbf{v} = \\mathbf{0}$ gives $\\mathbf{v}_1 = \\begin{pmatrix}1 \\\\ -1\\end{pmatrix}$
- For $\\lambda = 7$: $\\begin{pmatrix}-2 & 4 \\\\ 2 & -4\\end{pmatrix}\\mathbf{v} = \\mathbf{0}$ gives $\\mathbf{v}_2 = \\begin{pmatrix}2 \\\\ 1\\end{pmatrix}$

- $P = \\begin{pmatrix}1 & 2 \\\\ -1 & 1\\end{pmatrix}$, $D = \\begin{pmatrix}1 & 0 \\\\ 0 & 7\\end{pmatrix}$

- $P^{-1} = \\frac{1}{1+2}\\begin{pmatrix}1 & -2 \\\\ 1 & 1\\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix}1 & -2 \\\\ 1 & 1\\end{pmatrix}$

- **$A = PDP^{-1}$** ✓

- For $A^n$: $A^n = PD^nP^{-1}$
- $D^n = \\begin{pmatrix}1 & 0 \\\\ 0 & 7^n\\end{pmatrix}$
- **$A^n = \\frac{1}{3}\\begin{pmatrix}1 & 2 \\\\ -1 & 1\\end{pmatrix}\\begin{pmatrix}1 & 0 \\\\ 0 & 7^n\\end{pmatrix}\\begin{pmatrix}1 & -2 \\\\ 1 & 1\\end{pmatrix}$**
- **$A^n = \\frac{1}{3}\\begin{pmatrix}1 + 2 \\cdot 7^n & -2 + 2 \\cdot 7^n \\\\ -1 + 7^n & 2 + 7^n\\end{pmatrix}$** ✓

**Mark Scheme:**
- M1: Finding eigenvalues
- A1: $\\lambda = 1, 7$
- A1: Both eigenvectors correct
- B1: P correct
- B1: D correct
- M1: Method for $P^{-1}$
- A1: $P^{-1}$ correct
- M1: Using $A^n = PD^nP^{-1}$
- A1: Final answer correct

---

### MATRICES - 3×3 Determinant and Inverse
**Q:** Find the determinant and inverse of $A = \\begin{pmatrix}1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 1 & 0 & 1\\end{pmatrix}$. [7 marks]
**Solution:**
- Using cofactor expansion along row 1:
- $\\det(A) = 1 \\cdot \\begin{vmatrix}1 & 2 \\\\ 0 & 1\\end{vmatrix} - 2 \\cdot \\begin{vmatrix}0 & 2 \\\\ 1 & 1\\end{vmatrix} + 1 \\cdot \\begin{vmatrix}0 & 1 \\\\ 1 & 0\\end{vmatrix}$
- $= 1(1-0) - 2(0-2) + 1(0-1)$
- $= 1 + 4 - 1$
- **$\\det(A) = 4$** ✓

- Cofactor matrix:
- $C = \\begin{pmatrix}1 & 2 & -1 \\\\ -2 & 0 & 2 \\\\ 3 & -2 & 1\\end{pmatrix}$
- Adjugate (transpose of cofactor): $\\text{adj}(A) = C^T = \\begin{pmatrix}1 & -2 & 3 \\\\ 2 & 0 & -2 \\\\ -1 & 2 & 1\\end{pmatrix}$
- **$A^{-1} = \\frac{1}{4}\\begin{pmatrix}1 & -2 & 3 \\\\ 2 & 0 & -2 \\\\ -1 & 2 & 1\\end{pmatrix}$** ✓

**Mark Scheme:**
- M1: Setting up cofactor expansion
- A1: Correct evaluation of 2×2 determinants
- A1: $\\det(A) = 4$
- M1: Finding cofactor matrix
- A1: Correct cofactor matrix
- M1: Transposing for adjugate
- A1: Correct inverse matrix

---

### MATRICES - Linear Transformation
**Q:** The matrix $M = \\begin{pmatrix}2 & 1 \\\\ 4 & 2\\end{pmatrix}$ represents a linear transformation. Describe the transformation geometrically and find the image of the line $y = 2x + 1$. [6 marks]
**Solution:**
- $\\det(M) = 4 - 4 = 0$, so $M$ is singular
- This means the transformation maps the plane onto a line (dimension reduces)
- All points map to scalar multiples of any column: image is the line through $\\begin{pmatrix}2 \\\\ 4\\end{pmatrix}$
- **The transformation maps the entire plane onto the line $y = 2x$** ✓

- For line $y = 2x + 1$: point $(t, 2t+1)$ maps to:
- $\\begin{pmatrix}2 & 1 \\\\ 4 & 2\\end{pmatrix}\\begin{pmatrix}t \\\\ 2t+1\\end{pmatrix} = \\begin{pmatrix}2t + 2t + 1 \\\\ 4t + 4t + 2\\end{pmatrix} = \\begin{pmatrix}4t+1 \\\\ 8t+2\\end{pmatrix}$
- This gives points $(4t+1, 8t+2) = (4t+1, 2(4t+1))$
- **The image of $y = 2x + 1$ is the line $y = 2x$** (the whole line, since different $t$ give different points on $y = 2x$) ✓

**Mark Scheme:**
- B1: Recognising $\\det(M) = 0$
- B1: Understanding transformation is singular
- M1: Finding image direction
- A1: Image is line $y = 2x$
- M1: Applying transformation to general point on line
- A1: Correct image

---

### MATRICES - Systems of Equations
**Q:** For what value of $k$ does the system have infinitely many solutions? Find the general solution.
$x + 2y + 3z = 1$
$2x + 3y + 4z = 2$
$3x + 5y + 7z = k$ [6 marks]
**Solution:**
- Write in matrix form and row reduce:
$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 2 & 3 & 4 & | & 2 \\\\ 3 & 5 & 7 & | & k\\end{pmatrix}$

- $R_2 - 2R_1$, $R_3 - 3R_1$:
$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 0 & -1 & -2 & | & 0 \\\\ 0 & -1 & -2 & | & k-3\\end{pmatrix}$

- $R_3 - R_2$:
$\\begin{pmatrix}1 & 2 & 3 & | & 1 \\\\ 0 & -1 & -2 & | & 0 \\\\ 0 & 0 & 0 & | & k-3\\end{pmatrix}$

- For infinitely many solutions: $k - 3 = 0$, so **$k = 3$** ✓

- From row 2: $-y - 2z = 0$, so $y = -2z$
- From row 1: $x + 2(-2z) + 3z = 1$, so $x = 1 - z$
- Let $z = t$ (parameter)
- **General solution: $x = 1-t$, $y = -2t$, $z = t$** ✓

**Mark Scheme:**
- M1: Setting up augmented matrix
- M1: Row reduction
- A1: Correct reduced form
- A1: $k = 3$
- M1: Back-substitution
- A1: General solution correct

---

### MATRICES - Cayley-Hamilton Theorem
**Q:** Given $A = \\begin{pmatrix}3 & 1 \\\\ 2 & 2\\end{pmatrix}$, use the Cayley-Hamilton theorem to express $A^3$ in terms of $A$ and $I$. [5 marks]
**Solution:**
- Characteristic equation: $\\det(A - \\lambda I) = 0$
- $(3-\\lambda)(2-\\lambda) - 2 = 0$
- $\\lambda^2 - 5\\lambda + 4 = 0$
- By Cayley-Hamilton: $A^2 - 5A + 4I = 0$
- So $A^2 = 5A - 4I$
- $A^3 = A \\cdot A^2 = A(5A - 4I) = 5A^2 - 4A$
- $= 5(5A - 4I) - 4A = 25A - 20I - 4A$
- **$A^3 = 21A - 20I$** ✓

**Mark Scheme:**
- M1: Finding characteristic equation
- A1: $\\lambda^2 - 5\\lambda + 4 = 0$
- M1: Applying Cayley-Hamilton
- M1: Finding $A^3$ from $A^2$
- A1: $A^3 = 21A - 20I$
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 3 (Proof by Induction)
// ============================================================================

const OCR_FM_PROOF_EXAMPLES = `## Further Maths Worked Examples: Proof by Induction (OCR Style)

### PROOF BY INDUCTION - Summation Formula
**Q:** Prove by induction that $\\sum_{r=1}^n r \\cdot r! = (n+1)! - 1$ for all positive integers $n$. [5 marks]
**Solution:**
- **Base case ($n = 1$):**
- LHS: $\\sum_{r=1}^1 r \\cdot r! = 1 \\cdot 1! = 1$
- RHS: $(1+1)! - 1 = 2! - 1 = 2 - 1 = 1$ ✓
- Base case verified ✓

- **Inductive hypothesis:** Assume true for $n = k$:
- $\\sum_{r=1}^k r \\cdot r! = (k+1)! - 1$

- **Inductive step:** Prove true for $n = k + 1$:
- $\\sum_{r=1}^{k+1} r \\cdot r! = \\sum_{r=1}^k r \\cdot r! + (k+1) \\cdot (k+1)!$
- $= [(k+1)! - 1] + (k+1) \\cdot (k+1)!$ (using hypothesis)
- $= (k+1)![1 + (k+1)] - 1$
- $= (k+1)!(k+2) - 1$
- $= (k+2)! - 1$
- This is the formula with $n = k + 1$ ✓

- **Conclusion:** By mathematical induction, the formula holds for all positive integers $n$ ✓

**Mark Scheme:**
- B1: Base case verified
- M1: Stating inductive hypothesis clearly
- M1: Adding $(k+1)$th term
- A1: Using hypothesis and simplifying
- A1: Correct conclusion

---

### PROOF BY INDUCTION - Divisibility
**Q:** Prove that $8^n - 3^n$ is divisible by 5 for all positive integers $n$. [5 marks]
**Solution:**
- **Base case ($n = 1$):**
- $8^1 - 3^1 = 8 - 3 = 5$
- $5 \\div 5 = 1$ ✓, so divisible by 5 ✓

- **Inductive hypothesis:** Assume $8^k - 3^k = 5m$ for some integer $m$

- **Inductive step:** For $n = k + 1$:
- $8^{k+1} - 3^{k+1} = 8 \\cdot 8^k - 3 \\cdot 3^k$
- $= 8 \\cdot 8^k - 8 \\cdot 3^k + 8 \\cdot 3^k - 3 \\cdot 3^k$
- $= 8(8^k - 3^k) + 3^k(8 - 3)$
- $= 8(8^k - 3^k) + 5 \\cdot 3^k$
- $= 8 \\cdot 5m + 5 \\cdot 3^k$ (using hypothesis)
- $= 5(8m + 3^k)$
- This is divisible by 5 ✓

- **Conclusion:** By mathematical induction, $8^n - 3^n$ is divisible by 5 for all $n \\geq 1$ ✓

**Mark Scheme:**
- B1: Base case correct
- M1: Clear inductive hypothesis
- M1: Algebraic manipulation to separate terms
- A1: Correct factorisation
- A1: Clear conclusion

---

### PROOF BY INDUCTION - Matrix Powers
**Q:** Given $M = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, prove by induction that $M^n = \\begin{pmatrix}1 & n \\\\ 0 & 1\\end{pmatrix}$ for all positive integers $n$. [6 marks]
**Solution:**
- **Base case ($n = 1$):**
- $M^1 = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix} = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ ✓

- **Inductive hypothesis:** Assume $M^k = \\begin{pmatrix}1 & k \\\\ 0 & 1\\end{pmatrix}$

- **Inductive step:** For $n = k + 1$:
- $M^{k+1} = M^k \\cdot M$
- $= \\begin{pmatrix}1 & k \\\\ 0 & 1\\end{pmatrix}\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$
- $= \\begin{pmatrix}1 \\cdot 1 + k \\cdot 0 & 1 \\cdot 1 + k \\cdot 1 \\\\ 0 \\cdot 1 + 1 \\cdot 0 & 0 \\cdot 1 + 1 \\cdot 1\\end{pmatrix}$
- $= \\begin{pmatrix}1 & k+1 \\\\ 0 & 1\\end{pmatrix}$ ✓

- **Conclusion:** By mathematical induction, $M^n = \\begin{pmatrix}1 & n \\\\ 0 & 1\\end{pmatrix}$ for all $n \\geq 1$ ✓

**Mark Scheme:**
- B1: Base case verified
- M1: Clear hypothesis statement
- M1: Setting up $M^{k+1} = M^k \\cdot M$
- A1: Correct matrix multiplication
- A1: Correct result
- A1: Clear conclusion

---

### PROOF BY INDUCTION - Inequality
**Q:** Prove by induction that $2^n > n^2$ for all integers $n \\geq 5$. [6 marks]
**Solution:**
- **Base case ($n = 5$):**
- LHS: $2^5 = 32$
- RHS: $5^2 = 25$
- $32 > 25$ ✓

- **Inductive hypothesis:** Assume $2^k > k^2$ for some $k \\geq 5$

- **Inductive step:** Prove $2^{k+1} > (k+1)^2$
- $2^{k+1} = 2 \\cdot 2^k > 2k^2$ (using hypothesis)
- Need to show: $2k^2 > (k+1)^2 = k^2 + 2k + 1$
- $2k^2 > k^2 + 2k + 1$
- $k^2 - 2k - 1 > 0$
- $k^2 - 2k - 1 = (k-1)^2 - 2$
- For $k \\geq 5$: $(k-1)^2 \\geq 16 > 2$, so $k^2 - 2k - 1 > 0$ ✓
- Therefore $2^{k+1} > (k+1)^2$ ✓

- **Conclusion:** By mathematical induction, $2^n > n^2$ for all $n \\geq 5$ ✓

**Mark Scheme:**
- B1: Base case verified
- M1: Clear hypothesis
- M1: Using hypothesis to get $2^{k+1} > 2k^2$
- M1: Showing $2k^2 > (k+1)^2$
- A1: Correct algebraic justification
- A1: Clear conclusion

---

### PROOF BY INDUCTION - Sequence Definition
**Q:** A sequence is defined by $u_1 = 2$, $u_{n+1} = 3u_n - 2$. Prove by induction that $u_n = 3^{n-1} + 1$. [5 marks]
**Solution:**
- **Base case ($n = 1$):**
- $u_1 = 2$ (given)
- Formula: $3^{1-1} + 1 = 3^0 + 1 = 1 + 1 = 2$ ✓

- **Inductive hypothesis:** Assume $u_k = 3^{k-1} + 1$

- **Inductive step:** For $n = k + 1$:
- $u_{k+1} = 3u_k - 2$ (from definition)
- $= 3(3^{k-1} + 1) - 2$ (using hypothesis)
- $= 3^k + 3 - 2$
- $= 3^k + 1$
- $= 3^{(k+1)-1} + 1$ ✓

- **Conclusion:** By mathematical induction, $u_n = 3^{n-1} + 1$ for all $n \\geq 1$ ✓

**Mark Scheme:**
- B1: Base case verified
- M1: Clear hypothesis
- M1: Using recurrence relation
- A1: Correct simplification
- A1: Clear conclusion
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 4 (Vectors & Differential Equations)
// ============================================================================

const OCR_FM_VECTORS_DE_EXAMPLES = `## Further Maths Worked Examples: Vectors & Differential Equations (OCR Style)

### VECTORS - Distance Between Skew Lines
**Q:** Find the shortest distance between the lines:
$L_1: \\mathbf{r} = \\begin{pmatrix}1 \\\\ 2 \\\\ 3\\end{pmatrix} + \\lambda\\begin{pmatrix}1 \\\\ -1 \\\\ 2\\end{pmatrix}$ and $L_2: \\mathbf{r} = \\begin{pmatrix}4 \\\\ 0 \\\\ 1\\end{pmatrix} + \\mu\\begin{pmatrix}2 \\\\ 1 \\\\ -1\\end{pmatrix}$ [6 marks]
**Solution:**
- Direction vectors: $\\mathbf{d}_1 = \\begin{pmatrix}1 \\\\ -1 \\\\ 2\\end{pmatrix}$, $\\mathbf{d}_2 = \\begin{pmatrix}2 \\\\ 1 \\\\ -1\\end{pmatrix}$
- $\\mathbf{d}_1 \\times \\mathbf{d}_2 = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & -1 & 2 \\\\ 2 & 1 & -1\\end{vmatrix}$
- $= \\mathbf{i}(1-2) - \\mathbf{j}(-1-4) + \\mathbf{k}(1+2)$
- $= \\begin{pmatrix}-1 \\\\ 5 \\\\ 3\\end{pmatrix}$
- $|\\mathbf{d}_1 \\times \\mathbf{d}_2| = \\sqrt{1 + 25 + 9} = \\sqrt{35}$

- Vector connecting points on lines: $\\mathbf{a}_2 - \\mathbf{a}_1 = \\begin{pmatrix}4-1 \\\\ 0-2 \\\\ 1-3\\end{pmatrix} = \\begin{pmatrix}3 \\\\ -2 \\\\ -2\\end{pmatrix}$

- Distance $= \\frac{|(\\mathbf{a}_2 - \\mathbf{a}_1) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2)|}{|\\mathbf{d}_1 \\times \\mathbf{d}_2|}$
- $(\\mathbf{a}_2 - \\mathbf{a}_1) \\cdot (\\mathbf{d}_1 \\times \\mathbf{d}_2) = (3)(-1) + (-2)(5) + (-2)(3) = -3 - 10 - 6 = -19$
- **Distance $= \\frac{|-19|}{\\sqrt{35}} = \\frac{19}{\\sqrt{35}} = \\frac{19\\sqrt{35}}{35}$ units** ✓

**Mark Scheme:**
- M1: Finding cross product
- A1: Correct cross product
- M1: Finding vector between points
- M1: Using distance formula
- A1: Correct calculation
- A1: Final simplified answer

---

### VECTORS - Angle Between Line and Plane
**Q:** Find the acute angle between the line $\\mathbf{r} = \\begin{pmatrix}1 \\\\ 0 \\\\ 2\\end{pmatrix} + t\\begin{pmatrix}3 \\\\ 4 \\\\ 0\\end{pmatrix}$ and the plane $2x - y + 2z = 5$. [4 marks]
**Solution:**
- Direction of line: $\\mathbf{d} = \\begin{pmatrix}3 \\\\ 4 \\\\ 0\\end{pmatrix}$
- Normal to plane: $\\mathbf{n} = \\begin{pmatrix}2 \\\\ -1 \\\\ 2\\end{pmatrix}$
- $|\\mathbf{d}| = \\sqrt{9 + 16} = 5$
- $|\\mathbf{n}| = \\sqrt{4 + 1 + 4} = 3$
- $\\mathbf{d} \\cdot \\mathbf{n} = 6 - 4 + 0 = 2$

- Angle between line and normal: $\\cos\\phi = \\frac{|\\mathbf{d} \\cdot \\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|} = \\frac{2}{15}$
- Angle between line and plane: $\\theta = 90° - \\phi$
- $\\sin\\theta = \\cos\\phi = \\frac{2}{15}$
- **Acute angle $\\theta = \\arcsin\\left(\\frac{2}{15}\\right) \\approx 7.66°$** ✓

**Mark Scheme:**
- B1: Identifying direction and normal vectors
- M1: Using $\\sin\\theta = \\frac{|\\mathbf{d} \\cdot \\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}$
- A1: Correct calculation
- A1: Final answer

---

### VECTORS - Intersection of Line and Plane
**Q:** Find the point of intersection of the line $\\mathbf{r} = \\begin{pmatrix}2 \\\\ -1 \\\\ 3\\end{pmatrix} + \\lambda\\begin{pmatrix}1 \\\\ 2 \\\\ -1\\end{pmatrix}$ with the plane $x + y + z = 6$. [4 marks]
**Solution:**
- Parametric equations: $x = 2 + \\lambda$, $y = -1 + 2\\lambda$, $z = 3 - \\lambda$
- Substitute into plane equation:
- $(2 + \\lambda) + (-1 + 2\\lambda) + (3 - \\lambda) = 6$
- $4 + 2\\lambda = 6$
- $\\lambda = 1$
- Point: $x = 3$, $y = 1$, $z = 2$
- **Point of intersection: $(3, 1, 2)$** ✓

**Mark Scheme:**
- M1: Writing parametric equations
- M1: Substituting into plane
- A1: Finding $\\lambda = 1$
- A1: Correct point

---

### VECTORS - Equation of Plane Through Three Points
**Q:** Find the equation of the plane through points $A(1, 2, 0)$, $B(3, 1, 1)$, and $C(0, 1, 2)$. [5 marks]
**Solution:**
- $\\vec{AB} = \\begin{pmatrix}2 \\\\ -1 \\\\ 1\\end{pmatrix}$, $\\vec{AC} = \\begin{pmatrix}-1 \\\\ -1 \\\\ 2\\end{pmatrix}$
- Normal: $\\mathbf{n} = \\vec{AB} \\times \\vec{AC} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 2 & -1 & 1 \\\\ -1 & -1 & 2\\end{vmatrix}$
- $= \\mathbf{i}(-2+1) - \\mathbf{j}(4+1) + \\mathbf{k}(-2-1)$
- $= \\begin{pmatrix}-1 \\\\ -5 \\\\ -3\\end{pmatrix}$ or $\\begin{pmatrix}1 \\\\ 5 \\\\ 3\\end{pmatrix}$
- Using point $A(1, 2, 0)$: $1(1) + 5(2) + 3(0) = 11$
- **Equation: $x + 5y + 3z = 11$** ✓

**Mark Scheme:**
- M1: Finding two direction vectors
- M1: Computing cross product
- A1: Correct normal
- M1: Using $\\mathbf{r} \\cdot \\mathbf{n} = \\mathbf{a} \\cdot \\mathbf{n}$
- A1: Correct equation

---

### DIFFERENTIAL EQUATIONS - Second Order Homogeneous (Complex Roots)
**Q:** Solve $\\frac{d^2y}{dx^2} + 2\\frac{dy}{dx} + 5y = 0$. [4 marks]
**Solution:**
- Auxiliary equation: $m^2 + 2m + 5 = 0$
- $m = \\frac{-2 \\pm \\sqrt{4-20}}{2} = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i$
- Complex roots: $\\alpha = -1$, $\\beta = 2$
- **General solution: $y = e^{-x}(A\\cos 2x + B\\sin 2x)$** ✓

**Mark Scheme:**
- M1: Setting up auxiliary equation
- A1: Correct quadratic
- M1: Solving to get complex roots
- A1: Correct general solution form

---

### DIFFERENTIAL EQUATIONS - Second Order Non-Homogeneous
**Q:** Solve $\\frac{d^2y}{dx^2} - 4\\frac{dy}{dx} + 3y = 6x + 1$. [7 marks]
**Solution:**
- **Complementary function:**
- Auxiliary: $m^2 - 4m + 3 = 0 \\Rightarrow (m-1)(m-3) = 0$
- $m = 1$ or $m = 3$
- CF: $y_c = Ae^x + Be^{3x}$

- **Particular integral:**
- RHS is linear, try $y_p = ax + b$
- $y_p' = a$, $y_p'' = 0$
- Substitute: $0 - 4a + 3(ax + b) = 6x + 1$
- $3ax + (3b - 4a) = 6x + 1$
- Comparing: $3a = 6 \\Rightarrow a = 2$
- $3b - 4(2) = 1 \\Rightarrow 3b = 9 \\Rightarrow b = 3$
- PI: $y_p = 2x + 3$

- **General solution: $y = Ae^x + Be^{3x} + 2x + 3$** ✓

**Mark Scheme:**
- M1: Finding CF
- A1: Correct CF
- M1: Appropriate trial for PI
- M1: Substituting and comparing coefficients
- A1: Correct PI
- A1: Correct general solution

---

### DIFFERENTIAL EQUATIONS - With Initial Conditions
**Q:** Solve $\\frac{d^2y}{dx^2} - 5\\frac{dy}{dx} + 6y = 0$, given $y(0) = 2$ and $y'(0) = 5$. [6 marks]
**Solution:**
- Auxiliary equation: $m^2 - 5m + 6 = 0$
- $(m - 2)(m - 3) = 0$
- $m = 2$ or $m = 3$ (real distinct roots)
- General solution: $y = Ae^{2x} + Be^{3x}$

- Apply initial conditions:
- $y(0) = 2$: $A + B = 2$ ... (1)
- $y' = 2Ae^{2x} + 3Be^{3x}$
- $y'(0) = 5$: $2A + 3B = 5$ ... (2)
- From (1): $A = 2 - B$
- Substitute in (2): $2(2-B) + 3B = 5$
- $4 - 2B + 3B = 5 \\Rightarrow B = 1$
- $A = 2 - 1 = 1$
- **$y = e^{2x} + e^{3x}$** ✓

**Mark Scheme:**
- M1: Solving auxiliary equation
- A1: Correct CF
- M1: Applying first initial condition
- M1: Differentiating and applying second condition
- A1: Correct values of A and B
- A1: Final particular solution

---

### DIFFERENTIAL EQUATIONS - Trig RHS (Resonance Case)
**Q:** Solve $\\frac{d^2y}{dx^2} + 9y = \\cos 3x$. [8 marks]
**Solution:**
- **Complementary function:**
- Auxiliary: $m^2 + 9 = 0 \\Rightarrow m = \\pm 3i$
- CF: $y_c = A\\cos 3x + B\\sin 3x$

- **Particular integral:**
- RHS is $\\cos 3x$, but $3i$ IS a root, so try $y_p = x(p\\cos 3x + q\\sin 3x)$
- $y_p = px\\cos 3x + qx\\sin 3x$
- $y_p' = p\\cos 3x - 3px\\sin 3x + q\\sin 3x + 3qx\\cos 3x$
- $y_p'' = -6p\\sin 3x - 9px\\cos 3x + 6q\\cos 3x - 9qx\\sin 3x$
- Substitute into $y_p'' + 9y_p$:
- $(-6p\\sin 3x - 9px\\cos 3x + 6q\\cos 3x - 9qx\\sin 3x) + 9(px\\cos 3x + qx\\sin 3x)$
- $= -6p\\sin 3x + 6q\\cos 3x = \\cos 3x$
- Comparing: $6q = 1 \\Rightarrow q = \\frac{1}{6}$, $-6p = 0 \\Rightarrow p = 0$
- PI: $y_p = \\frac{x\\sin 3x}{6}$

- **General solution: $y = A\\cos 3x + B\\sin 3x + \\frac{x\\sin 3x}{6}$** ✓

**Mark Scheme:**
- M1: Finding CF
- A1: Correct CF
- M1: Recognising resonance case
- M1: Correct trial for PI with extra x factor
- M1: Differentiating and substituting
- A1: Correct values of p and q
- A1: Correct PI
- A1: Full general solution
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 5 (Hyperbolic & Polar)
// ============================================================================

const OCR_FM_HYPERBOLIC_POLAR_EXAMPLES = `## Further Maths Worked Examples: Hyperbolic Functions & Polar Coordinates (OCR Style)

### HYPERBOLIC - Solving Equations
**Q:** Solve $\\cosh x = 2$, giving your answer in logarithmic form. [4 marks]
**Solution:**
- Using the definition: $\\cosh x = \\frac{e^x + e^{-x}}{2} = 2$
- $e^x + e^{-x} = 4$
- Multiply by $e^x$: $(e^x)^2 + 1 = 4e^x$
- $(e^x)^2 - 4e^x + 1 = 0$
- Let $u = e^x$: $u^2 - 4u + 1 = 0$
- $u = \\frac{4 \\pm \\sqrt{16 - 4}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3}$
- Since $e^x > 0$, both solutions are valid:
- $e^x = 2 + \\sqrt{3}$ or $e^x = 2 - \\sqrt{3}$
- **$x = \\ln(2 + \\sqrt{3})$ or $x = \\ln(2 - \\sqrt{3}) = -\\ln(2 + \\sqrt{3})$** ✓
- So $x = \\pm\\ln(2 + \\sqrt{3})$

**Mark Scheme:**
- M1: Using definition and forming quadratic
- A1: Correct quadratic in $u$
- A1: Correct solutions for $u$
- A1: Both solutions for $x$ in logarithmic form

---

### HYPERBOLIC - Proving Identities
**Q:** Prove that $\\sinh 2x = 2\\sinh x \\cosh x$. [3 marks]
**Solution:**
- LHS: $\\sinh 2x = \\frac{e^{2x} - e^{-2x}}{2}$
- RHS: $2\\sinh x \\cosh x = 2 \\cdot \\frac{e^x - e^{-x}}{2} \\cdot \\frac{e^x + e^{-x}}{2}$
- $= \\frac{(e^x - e^{-x})(e^x + e^{-x})}{2}$
- $= \\frac{e^{2x} - e^{-2x}}{2}$ (difference of squares)
- $= $ LHS ✓

**Mark Scheme:**
- M1: Writing expressions using exponential definitions
- A1: Correct manipulation
- A1: Showing LHS = RHS

---

### HYPERBOLIC - Integration
**Q:** Find $\\int \\frac{1}{\\sqrt{x^2 + 9}} \\, dx$. [4 marks]
**Solution:**
- Use substitution $x = 3\\sinh u$, so $dx = 3\\cosh u \\, du$
- $\\sqrt{x^2 + 9} = \\sqrt{9\\sinh^2 u + 9} = 3\\sqrt{\\sinh^2 u + 1} = 3\\cosh u$
- (using $\\cosh^2 u - \\sinh^2 u = 1$)
- $\\int \\frac{1}{\\sqrt{x^2 + 9}} dx = \\int \\frac{3\\cosh u}{3\\cosh u} du = \\int 1 \\, du = u + C$
- Convert back: $u = \\text{arsinh}\\frac{x}{3}$
- **$\\int \\frac{1}{\\sqrt{x^2 + 9}} dx = \\text{arsinh}\\frac{x}{3} + c = \\ln(x + \\sqrt{x^2 + 9}) + c$** ✓

**Mark Scheme:**
- M1: Appropriate substitution
- A1: Correct simplification
- A1: Correct integration
- A1: Final answer in terms of $x$

---

### HYPERBOLIC - Differentiation of Inverse
**Q:** Given $y = \\text{artanh}(2x)$, find $\\frac{dy}{dx}$ and state the domain. [4 marks]
**Solution:**
- Using chain rule: $\\frac{d}{dx}(\\text{artanh } u) = \\frac{1}{1-u^2} \\cdot \\frac{du}{dx}$
- $\\frac{dy}{dx} = \\frac{1}{1-(2x)^2} \\cdot 2 = \\frac{2}{1-4x^2}$
- **Domain:** artanh requires $|2x| < 1$, so $|x| < \\frac{1}{2}$
- **$\\frac{dy}{dx} = \\frac{2}{1-4x^2}$, Domain: $-\\frac{1}{2} < x < \\frac{1}{2}$** ✓

**Mark Scheme:**
- M1: Appropriate differentiation method
- A1: Correct derivative $\\frac{2}{1-4x^2}$
- M1: Finding domain restriction
- A1: Correct domain

---

### POLAR - Converting and Sketching
**Q:** Convert $x^2 + y^2 = 4x$ to polar form and sketch. [4 marks]
**Solution:**
- Using $x = r\\cos\\theta$, $y = r\\sin\\theta$, $x^2 + y^2 = r^2$:
- $r^2 = 4r\\cos\\theta$
- $r = 4\\cos\\theta$ (dividing by $r$, valid for $r \\neq 0$)
- This is a circle:
- When $\\theta = 0$: $r = 4$ (point at $(4, 0)$)
- When $\\theta = \\frac{\\pi}{2}$: $r = 0$ (passes through origin)
- **Polar equation: $r = 4\\cos\\theta$**
- **Circle with diameter 4, passing through origin, centred at $(2, 0)$** ✓

**Mark Scheme:**
- M1: Substituting polar relationships
- A1: $r = 4\\cos\\theta$
- B1: Circle through origin
- B1: Correct position and size

---

### POLAR - Area Enclosed
**Q:** Find the area enclosed by one loop of $r = \\cos 2\\theta$. [5 marks]
**Solution:**
- The curve $r = \\cos 2\\theta$ is a four-petalled rose
- One loop occurs when $r \\geq 0$, i.e., when $\\cos 2\\theta \\geq 0$
- For first loop: $-\\frac{\\pi}{4} \\leq \\theta \\leq \\frac{\\pi}{4}$
- Area = $\\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} r^2 d\\theta = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4} \\cos^2 2\\theta \\, d\\theta$
- Using $\\cos^2 2\\theta = \\frac{1 + \\cos 4\\theta}{2}$:
- $= \\frac{1}{4}\\int_{-\\pi/4}^{\\pi/4} (1 + \\cos 4\\theta) d\\theta$
- $= \\frac{1}{4}\\left[\\theta + \\frac{\\sin 4\\theta}{4}\\right]_{-\\pi/4}^{\\pi/4}$
- $= \\frac{1}{4}\\left[(\\frac{\\pi}{4} + 0) - (-\\frac{\\pi}{4} + 0)\\right] = \\frac{1}{4} \\cdot \\frac{\\pi}{2}$
- **Area $= \\frac{\\pi}{8}$** ✓

**Mark Scheme:**
- B1: Correct limits
- M1: Setting up area integral
- M1: Using double angle formula
- A1: Correct integration
- A1: Final answer

---

### POLAR - Cardioid Area
**Q:** Find the area enclosed by the cardioid $r = 2(1 + \\cos\\theta)$. [5 marks]
**Solution:**
- Area = $\\frac{1}{2}\\int_0^{2\\pi} r^2 \\, d\\theta = \\frac{1}{2}\\int_0^{2\\pi} 4(1+\\cos\\theta)^2 \\, d\\theta$
- $= 2\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\cos^2\\theta) \\, d\\theta$
- Using $\\cos^2\\theta = \\frac{1+\\cos 2\\theta}{2}$:
- $= 2\\int_0^{2\\pi} (1 + 2\\cos\\theta + \\frac{1+\\cos 2\\theta}{2}) \\, d\\theta$
- $= 2\\int_0^{2\\pi} (\\frac{3}{2} + 2\\cos\\theta + \\frac{\\cos 2\\theta}{2}) \\, d\\theta$
- $= 2[\\frac{3\\theta}{2} + 2\\sin\\theta + \\frac{\\sin 2\\theta}{4}]_0^{2\\pi}$
- $= 2(3\\pi + 0 + 0 - 0 - 0 - 0) = 6\\pi$
- **Area $= 6\\pi$** ✓

**Mark Scheme:**
- M1: Setting up area integral
- M1: Expanding $(1+\\cos\\theta)^2$
- M1: Using double angle formula
- A1: Correct integration
- A1: Final answer $6\\pi$

---

### POLAR - Tangent at the Pole
**Q:** Find where the curve $r = 1 + 2\\cos\\theta$ passes through the pole and the direction of the tangent there. [4 marks]
**Solution:**
- At the pole, $r = 0$:
- $1 + 2\\cos\\theta = 0$
- $\\cos\\theta = -\\frac{1}{2}$
- $\\theta = \\frac{2\\pi}{3}$ or $\\theta = \\frac{4\\pi}{3}$
- The tangent at the pole is in the direction $\\theta$ when the curve passes through
- **Tangent directions: $\\theta = \\frac{2\\pi}{3}$ and $\\theta = \\frac{4\\pi}{3}$** ✓
- In Cartesian: lines $y = -\\sqrt{3}x$ and $y = \\sqrt{3}x$

**Mark Scheme:**
- M1: Setting $r = 0$
- A1: Correct values of $\\theta$
- B1: Understanding tangent direction at pole
- B1: Correct Cartesian form
`;

// ============================================================================
// OCR FM WORKED EXAMPLES - PART 6 (Mechanics & Statistics)
// ============================================================================

const OCR_FM_MECHANICS_STATS_EXAMPLES = `## Further Maths Worked Examples: Mechanics & Statistics (OCR Style)

### MECHANICS - Coefficient of Restitution
**Q:** A ball of mass 0.2 kg moving at 5 m/s collides with a stationary ball of mass 0.3 kg. After collision, the first ball moves at 1 m/s in the same direction. Find the velocity of the second ball and the coefficient of restitution. [6 marks]
**Solution:**
- Conservation of momentum: $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$
- $0.2(5) + 0.3(0) = 0.2(1) + 0.3(v_2)$
- $1 = 0.2 + 0.3v_2$
- $0.3v_2 = 0.8$
- **$v_2 = \\frac{8}{3}$ m/s** ✓

- Coefficient of restitution: $e = \\frac{\\text{separation speed}}{\\text{approach speed}} = \\frac{v_2 - v_1}{u_1 - u_2}$
- $e = \\frac{\\frac{8}{3} - 1}{5 - 0} = \\frac{\\frac{5}{3}}{5} = \\frac{1}{3}$
- **$e = \\frac{1}{3}$** ✓

**Mark Scheme:**
- M1: Conservation of momentum equation
- A1: Correct equation with values
- A1: $v_2 = \\frac{8}{3}$ m/s
- M1: Formula for coefficient of restitution
- A1: Correct substitution
- A1: $e = \\frac{1}{3}$

---

### MECHANICS - Elastic Strings (Hooke's Law)
**Q:** An elastic string of natural length 2 m and modulus of elasticity 40 N is stretched to a length of 2.5 m. Find the tension in the string and the elastic potential energy stored. [4 marks]
**Solution:**
- Extension $x = 2.5 - 2 = 0.5$ m
- Natural length $l = 2$ m, modulus $\\lambda = 40$ N
- Tension: $T = \\frac{\\lambda x}{l} = \\frac{40 \\times 0.5}{2} = \\frac{20}{2}$
- **Tension $T = 10$ N** ✓

- Elastic potential energy: $EPE = \\frac{\\lambda x^2}{2l} = \\frac{40 \\times 0.25}{2 \\times 2} = \\frac{10}{4}$
- **$EPE = 2.5$ J** ✓

**Mark Scheme:**
- B1: Correct extension
- M1: Using Hooke's Law formula
- A1: Tension = 10 N
- A1: EPE = 2.5 J

---

### MECHANICS - Simple Harmonic Motion
**Q:** A particle moves in SHM with period 4 seconds and amplitude 3 m. Find the maximum speed and maximum acceleration. [4 marks]
**Solution:**
- Period $T = 4$ s, so $\\omega = \\frac{2\\pi}{T} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$ rad/s
- Amplitude $A = 3$ m
- Maximum speed: $v_{max} = A\\omega = 3 \\times \\frac{\\pi}{2} = \\frac{3\\pi}{2}$ m/s ✓
- Maximum acceleration: $a_{max} = A\\omega^2 = 3 \\times \\frac{\\pi^2}{4} = \\frac{3\\pi^2}{4}$ m/s² ✓

**Mark Scheme:**
- B1: $\\omega = \\frac{\\pi}{2}$
- M1: Using $v_{max} = A\\omega$
- A1: $v_{max} = \\frac{3\\pi}{2}$ m/s
- A1: $a_{max} = \\frac{3\\pi^2}{4}$ m/s²

---

### MECHANICS - Circular Motion (Vertical)
**Q:** A particle of mass 0.5 kg is attached to a string of length 0.8 m and whirled in a vertical circle. Find the minimum speed at the top for the string to remain taut. [4 marks]
**Solution:**
- At the top, for string just taut: $T = 0$
- Centripetal force = weight: $\\frac{mv_{top}^2}{r} = mg$
- $v_{top}^2 = gr = 9.8 \\times 0.8 = 7.84$
- **$v_{top} = 2.8$ m/s** ✓

**Mark Scheme:**
- M1: Setting $T = 0$ at top
- M1: Equating centripetal force to weight
- A1: $v^2 = gr$
- A1: Correct numerical answer

---

### STATISTICS - Poisson Distribution
**Q:** The number of calls to a helpline follows a Poisson distribution with mean 4 per hour. Find: (a) P(exactly 3 calls in an hour), (b) P(more than 5 calls in an hour). [5 marks]
**Solution:**
- $X \\sim \\text{Po}(4)$

(a) $P(X = 3) = \\frac{e^{-4} \\times 4^3}{3!} = \\frac{e^{-4} \\times 64}{6} = \\frac{32e^{-4}}{3}$
- $\\approx 0.195$ ✓

(b) $P(X > 5) = 1 - P(X \\leq 5)$
- $P(X \\leq 5) = e^{-4}(1 + 4 + 8 + \\frac{32}{3} + \\frac{32}{3} + \\frac{128}{15})$
- Using tables or calculator: $P(X \\leq 5) \\approx 0.785$
- **$P(X > 5) \\approx 0.215$** ✓

**Mark Scheme:**
(a) M1: Correct Poisson formula
A1: $P(X = 3) \\approx 0.195$

(b) M1: Using complement
A1: Correct cumulative probability
A1: $P(X > 5) \\approx 0.215$

---

### STATISTICS - Chi-Squared Goodness of Fit
**Q:** A die is rolled 120 times with results: 1→18, 2→22, 3→15, 4→25, 5→21, 6→19. Test at 5% significance whether the die is fair. [6 marks]
**Solution:**
- $H_0$: Die is fair (each outcome has probability $\\frac{1}{6}$)
- $H_1$: Die is not fair
- Expected frequency for each: $E = \\frac{120}{6} = 20$

| Outcome | O | E | $(O-E)^2/E$ |
|---------|---|---|-------------|
| 1 | 18 | 20 | 0.2 |
| 2 | 22 | 20 | 0.2 |
| 3 | 15 | 20 | 1.25 |
| 4 | 25 | 20 | 1.25 |
| 5 | 21 | 20 | 0.05 |
| 6 | 19 | 20 | 0.05 |

- $\\chi^2 = 0.2 + 0.2 + 1.25 + 1.25 + 0.05 + 0.05 = 3.0$
- Degrees of freedom: $\\nu = 6 - 1 = 5$
- Critical value at 5%: $\\chi^2_{5, 0.05} = 11.07$
- Since $3.0 < 11.07$, we do not reject $H_0$
- **Conclusion: Insufficient evidence to suggest the die is not fair** ✓

**Mark Scheme:**
- B1: Correct hypotheses
- M1: Finding expected frequencies
- M1: Calculating $\\chi^2$
- A1: $\\chi^2 = 3.0$
- A1: Correct comparison with critical value
- A1: Correct conclusion

---

### STATISTICS - Probability Generating Functions
**Q:** A random variable $X$ has PGF $G_X(t) = \\frac{1}{8}(1 + t)^3$. Find $E(X)$ and $\\text{Var}(X)$. [5 marks]
**Solution:**
- $G_X(t) = \\frac{1}{8}(1 + t)^3$
- Check: $G_X(1) = \\frac{1}{8}(8) = 1$ ✓
- $G'_X(t) = \\frac{3}{8}(1 + t)^2$
- $E(X) = G'_X(1) = \\frac{3}{8} \\times 4 = \\frac{3}{2} = 1.5$ ✓

- $G''_X(t) = \\frac{6}{8}(1 + t) = \\frac{3}{4}(1 + t)$
- $G''_X(1) = \\frac{3}{4} \\times 2 = 1.5$
- $\\text{Var}(X) = G''_X(1) + G'_X(1) - [G'_X(1)]^2$
- $= 1.5 + 1.5 - 2.25 = 0.75$ ✓

**Mark Scheme:**
- M1: Finding $G'_X(t)$
- A1: $E(X) = 1.5$
- M1: Finding $G''_X(t)$
- M1: Using variance formula
- A1: $\\text{Var}(X) = 0.75$
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const OCR_FM_TOPIC_GUIDANCE: Record<string, string> = {
  'fm-alevel-ocr-proof': `## Proof by Induction (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 1 (Y540)
- Typically 5-7 marks per question

### Key Requirements for Full Marks
Every proof by induction MUST include these four clearly labelled parts:

1. **BASE CASE:** Verify P(n) is true for the starting value (usually n = 1)
   - Show LHS and RHS separately
   - State explicitly that they are equal

2. **INDUCTIVE HYPOTHESIS:** State assumption clearly
   - "Assume P(k) is true for some integer k >= 1"
   - Write out exactly what this means algebraically

3. **INDUCTIVE STEP:** Show P(k) implies P(k+1)
   - Start with P(k+1) and work towards the required form
   - Clearly indicate where the inductive hypothesis is used
   - Show all algebraic steps

4. **CONCLUSION:** Complete the argument
   - "True for n = 1, and P(k) => P(k+1)"
   - "Therefore, by mathematical induction, P(n) is true for all n >= 1"

### Common OCR Applications
- Summation formulae (Sigma r, Sigma r^2, Sigma r^3, Sigma r(r+1))
- Divisibility results (e.g., "6 divides n^3 - n", "9 divides 4^n - 1")
- Matrix powers (e.g., A^n for 2x2 matrices)
- Recurrence relations
- Inequalities (e.g., 2^n > n^2 for n >= 5)
- De Moivre's theorem applications

### OCR Style Notes
- Marks deducted for missing base case or conclusion
- Full algebraic manipulation required in inductive step
- Calculator may be used but working must be shown`,

  'fm-alevel-ocr-complex1': `## Complex Numbers Core (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 1 (Y540)
- Foundation topics for more advanced work

### Arithmetic Operations
- Addition, subtraction (add/subtract real and imaginary parts separately)
- Multiplication: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$
- Division: Multiply by conjugate of denominator
- Complex conjugates: $(a + bi)^* = a - bi$

### Argand Diagrams
- Modulus: $|z| = \\sqrt{x^2 + y^2}$
- Argument: $\\arg(z) = \\arctan(y/x)$ (in appropriate quadrant)
- Principal argument: $-\\pi < \\arg(z) \\leq \\pi$
- Modulus-argument form: $z = r(\\cos\\theta + i\\sin\\theta)$

### Geometric Interpretations
- Addition = vector addition (parallelogram rule)
- Multiplication by $e^{i\\theta}$ = rotation by $\\theta$
- Multiplication by $r$ = enlargement factor $r$
- Conjugation = reflection in real axis

### Loci
- $|z - a| = r$: Circle centre $a$, radius $r$
- $|z - a| = |z - b|$: Perpendicular bisector of segment $ab$
- $\\arg(z - a) = \\theta$: Half-line from $a$ at angle $\\theta$
- $\\arg\\left(\\frac{z-a}{z-b}\\right) = \\theta$: Arc of circle through $a$ and $b$

### OCR Style Notes
- Exact values expected (not decimal approximations)
- Diagrams must show key features clearly
- State quadrant when finding argument`,

  'fm-alevel-ocr-complex2': `## Complex Numbers Advanced (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 2 (Y541)
- More advanced applications

### Euler's Formula
- $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$
- Exponential form: $z = re^{i\\theta}$
- Properties: $e^{i\\pi} + 1 = 0$ (Euler's identity)
- Multiplication: $r_1e^{i\\theta_1} \\cdot r_2e^{i\\theta_2} = r_1r_2 e^{i(\\theta_1 + \\theta_2)}$

### De Moivre's Theorem
- $(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta$
- Applications:
  * Finding $\\cos n\\theta$ and $\\sin n\\theta$ in terms of powers
  * Simplifying powers of complex numbers
  * Deriving multiple angle formulae

### Roots of Complex Numbers
- nth roots of unity: $z_k = e^{2\\pi ik/n}$ for $k = 0, 1, ..., n-1$
- Properties of roots of unity:
  * Sum = 0
  * Product = $(-1)^{n+1}$
  * Form regular n-gon on unit circle
- nth roots of any complex number $w = re^{i\\theta}$:
  * $z_k = r^{1/n}e^{i(\\theta + 2\\pi k)/n}$ for $k = 0, 1, ..., n-1$

### Solving Equations
- Complex conjugate roots theorem (for real coefficients)
- Factor theorems for complex roots
- Forming polynomials with given complex roots

### OCR Style Notes
- Multiple answer forms accepted (exponential, mod-arg, Cartesian)
- Principal argument must be specified when required
- Geometric interpretation of roots often asked`,

  'fm-alevel-ocr-matrices': `## Matrices (OCR Further Maths)

### Paper Context
- Core concepts in Pure Core Paper 1 (Y540)
- Eigenvalues/eigenvectors in Pure Core Paper 2 (Y541)

### Matrix Operations
- Addition and scalar multiplication
- Matrix multiplication (row × column)
- Non-commutativity: $AB \\neq BA$ in general

### Determinants
- 2×2: $\\det\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = ad - bc$
- 3×3: Cofactor expansion along any row or column
- Properties:
  * $\\det(AB) = \\det(A)\\det(B)$
  * $\\det(A^{-1}) = 1/\\det(A)$
  * $\\det(kA) = k^n\\det(A)$ for n×n matrix

### Inverses
- 2×2: $A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$
- 3×3: Use adjugate matrix method or row reduction
- $(AB)^{-1} = B^{-1}A^{-1}$
- Singular matrices have no inverse

### Linear Transformations
- Standard matrices for rotation, reflection, stretch, shear
- Combined transformations: Read right to left
- Finding transformation from images of basis vectors
- Invariant points: $T(\\mathbf{x}) = \\mathbf{x}$
- Invariant lines: Lines mapped to themselves

### Systems of Equations
- Matrix form: $A\\mathbf{x} = \\mathbf{b}$
- Unique solution when $\\det(A) \\neq 0$
- No solution or infinitely many when $\\det(A) = 0$
- Geometric interpretation (planes in 3D)

### Eigenvalues and Eigenvectors
- Definition: $A\\mathbf{v} = \\lambda\\mathbf{v}$
- Characteristic equation: $\\det(A - \\lambda I) = 0$
- Finding eigenvectors: $(A - \\lambda I)\\mathbf{v} = \\mathbf{0}$
- Sum of eigenvalues = trace(A)
- Product of eigenvalues = det(A)

### Diagonalisation
- $A = PDP^{-1}$ where P has eigenvector columns
- Powers: $A^n = PD^nP^{-1}$
- Not all matrices can be diagonalised

### Cayley-Hamilton Theorem
- Every matrix satisfies its own characteristic equation
- Use to express powers of matrices

### OCR Style Notes
- Exact answers required
- State any matrix that cannot be inverted
- Show all working in matrix calculations`,

  'fm-alevel-ocr-vectors': `## Vectors in 3D (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 1 (Y540)
- Often combined with matrices topics

### Vector Product (Cross Product)
- $\\mathbf{a} \\times \\mathbf{b}$ is perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}$
- $|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$
- Direction by right-hand rule
- Determinant formula for calculation
- Anti-commutative: $\\mathbf{a} \\times \\mathbf{b} = -\\mathbf{b} \\times \\mathbf{a}$

### Scalar Triple Product
- $\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})$ = volume of parallelepiped
- If zero, vectors are coplanar
- Equal to 3×3 determinant

### Lines in 3D
- Vector form: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{d}$
- Parametric form: $x = a_1 + \\lambda d_1$, etc.
- Cartesian form: $\\frac{x-a_1}{d_1} = \\frac{y-a_2}{d_2} = \\frac{z-a_3}{d_3}$
- Types of line pairs: parallel, intersecting, skew

### Planes
- Vector form: $\\mathbf{r} \\cdot \\mathbf{n} = d$
- Cartesian form: $ax + by + cz = d$
- Finding equation from three points or two lines

### Distances
- Point to line: Use $\\frac{|\\mathbf{AP} \\times \\mathbf{d}|}{|\\mathbf{d}|}$
- Point to plane: $\\frac{|\\mathbf{n} \\cdot (\\mathbf{p} - \\mathbf{a})|}{|\\mathbf{n}|}$
- Between parallel planes
- Between skew lines: Use scalar triple product

### Angles
- Between two lines: $\\cos\\theta = \\frac{|\\mathbf{d}_1 \\cdot \\mathbf{d}_2|}{|\\mathbf{d}_1||\\mathbf{d}_2|}$
- Between line and plane: $\\sin\\theta = \\frac{|\\mathbf{d} \\cdot \\mathbf{n}|}{|\\mathbf{d}||\\mathbf{n}|}$
- Between two planes: Angle between normals

### OCR Style Notes
- Vector and Cartesian forms both accepted
- Exact answers (surds) preferred
- Diagrams helpful but not always required`,

  'fm-alevel-ocr-hyperbolic': `## Hyperbolic Functions (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 2 (Y541)

### Definitions
- $\\sinh x = \\frac{e^x - e^{-x}}{2}$ (odd function)
- $\\cosh x = \\frac{e^x + e^{-x}}{2}$ (even function)
- $\\tanh x = \\frac{\\sinh x}{\\cosh x}$ (odd function)
- Reciprocals: sech, cosech, coth

### Key Identities
- $\\cosh^2 x - \\sinh^2 x = 1$ (MUST MEMORISE)
- $1 - \\tanh^2 x = \\text{sech}^2 x$
- $\\coth^2 x - 1 = \\text{cosech}^2 x$
- Double angle: $\\sinh 2x = 2\\sinh x \\cosh x$
- $\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1$

### Osborn's Rule
- Convert trig identities to hyperbolic
- Replace cos → cosh, sin → sinh
- Change sign when product of two sines appears
- Example: $\\cos^2 + \\sin^2 = 1$ becomes $\\cosh^2 - \\sinh^2 = 1$

### Inverse Functions (Logarithmic Forms)
- $\\text{arsinh } x = \\ln(x + \\sqrt{x^2 + 1})$, all $x$
- $\\text{arcosh } x = \\ln(x + \\sqrt{x^2 - 1})$, $x \\geq 1$
- $\\text{artanh } x = \\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)$, $|x| < 1$

### Calculus
- $\\frac{d}{dx}(\\sinh x) = \\cosh x$
- $\\frac{d}{dx}(\\cosh x) = \\sinh x$
- $\\frac{d}{dx}(\\tanh x) = \\text{sech}^2 x$
- Standard integrals for $1/\\sqrt{x^2 \\pm a^2}$

### OCR Style Notes
- Both arsinh/arcosh and sinh^{-1}/cosh^{-1} notation accepted
- Logarithmic form often required
- Show working when using definitions`,

  'fm-alevel-ocr-diff-equations': `## Differential Equations (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 2 (Y541)
- Often substantial questions (8+ marks)

### First Order Linear
- Form: $\\frac{dy}{dx} + P(x)y = Q(x)$
- Integrating factor: $\\mu = e^{\\int P(x)dx}$
- Multiply through, recognise LHS as $\\frac{d}{dx}(\\mu y)$

### Second Order Homogeneous
- Form: $a\\frac{d^2y}{dx^2} + b\\frac{dy}{dx} + cy = 0$
- Auxiliary equation: $am^2 + bm + c = 0$
- Solutions depend on nature of roots:
  * Distinct real: $y = Ae^{m_1x} + Be^{m_2x}$
  * Repeated: $y = (A + Bx)e^{mx}$
  * Complex $p \\pm qi$: $y = e^{px}(A\\cos qx + B\\sin qx)$

### Second Order Non-Homogeneous
- General solution = CF + PI
- Finding particular integral by trial:
  * Polynomial RHS: try polynomial of same degree
  * Exponential RHS: try $\\lambda e^{kx}$
  * Trig RHS: try $\\lambda\\sin kx + \\mu\\cos kx$
- If trial appears in CF, multiply by $x$ (or $x^2$)

### Boundary/Initial Conditions
- Use conditions to find constants A and B
- Differentiate general solution if $y'$ conditions given

### OCR Style Notes
- CF must be stated before PI
- Show all steps in finding PI
- State general solution before applying conditions`,

  'fm-alevel-ocr-polar': `## Polar Coordinates (OCR Further Maths)

### Paper Context
- Examined in Pure Core Paper 2 (Y541)

### Coordinate Conversion
- $x = r\\cos\\theta$, $y = r\\sin\\theta$
- $r^2 = x^2 + y^2$, $\\tan\\theta = y/x$

### Standard Curves
- $r = a$ (circle radius $a$)
- $r = a\\cos\\theta$ (circle through origin)
- $r = a(1 + \\cos\\theta)$ (cardioid)
- $r = a\\cos n\\theta$ (rose, n petals if n odd, 2n if n even)
- $r = a\\theta$ (Archimedean spiral)
- $r^2 = a^2\\cos 2\\theta$ (lemniscate)

### Sketching Polar Curves
- Find where $r = 0$
- Find maximum/minimum $r$
- Use symmetry (replace $\\theta$ with $-\\theta$ for x-axis symmetry)
- Plot key points

### Area in Polar Coordinates
- $A = \\frac{1}{2}\\int_{\\alpha}^{\\beta} r^2 d\\theta$
- Careful with limits (where does curve start/end?)
- For loops: integrate over one complete loop only

### Tangents
- At pole: tangent direction is $\\theta$ where $r = 0$
- General: $\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$
- Horizontal when numerator = 0
- Vertical when denominator = 0

### OCR Style Notes
- Exact answers required (in terms of $\\pi$)
- Sketch should show key features
- State limits clearly in area integrals`,

  'fm-alevel-ocr-statistics': `## Further Statistics (OCR Further Maths)

### Paper Context
- Optional paper Statistics (Y542)

### Discrete Distributions
- **Poisson** Po($\\lambda$): $P(X = r) = \\frac{e^{-\\lambda}\\lambda^r}{r!}$
  * $E(X) = Var(X) = \\lambda$
  * Sum of independent Poissons is Poisson
- **Geometric** Geo(p): $P(X = r) = p(1-p)^{r-1}$
  * $E(X) = 1/p$
  * Memoryless property
- **Negative Binomial**: Trials to r successes

### Continuous Distributions
- **Uniform** U(a,b): $f(x) = 1/(b-a)$
- **Exponential** Exp($\\lambda$): $f(x) = \\lambda e^{-\\lambda x}$
  * Memoryless: $P(X > s+t | X > s) = P(X > t)$

### Probability Generating Functions
- $G_X(t) = E(t^X) = \\sum t^x P(X = x)$
- $E(X) = G'(1)$
- $Var(X) = G''(1) + G'(1) - [G'(1)]^2$
- $G_{X+Y}(t) = G_X(t) \\cdot G_Y(t)$ for independent X, Y

### Hypothesis Testing
- Chi-squared goodness of fit
- Chi-squared test for independence
- Degrees of freedom calculations

### Confidence Intervals
- For mean (known/unknown variance)
- For proportion
- Using t-distribution for small samples

### OCR Style Notes
- Tables provided in exam
- Show hypothesis clearly
- State significance level and conclusion in context`,

  'fm-alevel-ocr-mechanics': `## Further Mechanics (OCR Further Maths)

### Paper Context
- Optional paper Mechanics (Y543)

### Impulse and Momentum
- $I = \\int F dt = mv - mu$
- Conservation of momentum in collisions

### Coefficient of Restitution
- $e = \\frac{\\text{separation speed}}{\\text{approach speed}}$
- For direct collision: $e = \\frac{v_2 - v_1}{u_1 - u_2}$
- Newton's experimental law
- $0 \\leq e \\leq 1$ (e = 1 perfectly elastic)

### Elastic Strings and Springs
- Hooke's Law: $T = \\frac{\\lambda x}{l}$ or $T = kx$
- Elastic potential energy: $EPE = \\frac{\\lambda x^2}{2l}$
- Energy methods for problems with elastic components

### Circular Motion
- Angular velocity: $\\omega = v/r$
- Centripetal acceleration: $a = r\\omega^2 = v^2/r$
- Centripetal force: $F = mr\\omega^2$
- Vertical circles: tension varies with position

### Simple Harmonic Motion
- Defining equation: $\\ddot{x} = -\\omega^2 x$
- Solutions: $x = A\\cos(\\omega t + \\phi)$
- $v^2 = \\omega^2(A^2 - x^2)$
- Period $T = 2\\pi/\\omega$
- Mass on spring: $T = 2\\pi\\sqrt{m/k}$
- Simple pendulum: $T = 2\\pi\\sqrt{l/g}$

### Energy in SHM
- $KE = \\frac{1}{2}m\\omega^2(A^2 - x^2)$
- $PE = \\frac{1}{2}m\\omega^2 x^2$
- Total energy = $\\frac{1}{2}m\\omega^2 A^2$ (constant)

### OCR Style Notes
- Direction signs must be consistent
- State principle used (momentum, energy)
- Draw diagrams showing forces`,

  'fm-alevel-ocr-discrete': `## Discrete Mathematics (OCR Further Maths)

### Paper Context
- Optional paper Discrete Mathematics (Y544)

### Graph Theory
- Terminology: vertex, edge, degree, path, cycle
- Handshaking lemma: $\\sum deg(v) = 2|E|$
- Eulerian: all vertices even degree
- Semi-Eulerian: exactly two odd vertices
- Hamiltonian: visits every vertex once

### Network Algorithms
- **Kruskal's**: Add shortest edge not forming cycle
- **Prim's**: Grow tree from start vertex
- **Dijkstra's**: Shortest path from source
- **Chinese Postman**: Repeat edges to make all vertices even

### Critical Path Analysis
- Activity networks
- Forward/backward pass
- Float = LS - ES = LF - EF
- Critical path: activities with zero float

### Linear Programming
- Formulating problems
- Graphical method (2 variables)
- Simplex algorithm (larger problems)
- Integer programming considerations

### Game Theory
- Zero-sum games
- Payoff matrices
- Saddle points (pure strategies)
- Mixed strategies

### OCR Style Notes
- Show algorithm steps clearly
- Draw diagrams where helpful
- State optimal solution and value`,

  'fm-alevel-ocr-additional-pure': `## Additional Pure Mathematics (OCR Further Maths)

### Paper Context
- Optional paper Additional Pure (Y545)

### Number Theory
- Division algorithm
- Euclidean algorithm for GCD
- Bezout's identity
- Modular arithmetic
- Fermat's Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$
- Chinese Remainder Theorem

### Group Theory
- Definition: closure, associativity, identity, inverses
- Order of element and group
- Subgroups
- Cyclic groups
- Lagrange's theorem
- Isomorphisms

### Further Matrix Algebra
- Complex eigenvalues
- Diagonalisation of matrices
- Applications to coupled differential equations
- Cayley-Hamilton theorem

### Recurrence Relations
- First order linear
- Second order linear homogeneous
- Characteristic equation method

### OCR Style Notes
- Proofs must be rigorous
- State definitions when used
- Group tables must be complete`,
};

// ============================================================================
// QUESTION PRINCIPLES
// ============================================================================

const OCR_FM_QUESTION_PRINCIPLES = `# OCR A-Level Further Mathematics: Question Construction

${OCR_FM_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_FURTHER_MATHS_COGNITIVE_CHALLENGE}

${OCR_FM_EXAM_STRUCTURE}

${OCR_FM_MARK_SCHEME}

## OCR Further Maths Characteristics

### Question Style
- Clean, well-structured presentation
- Progressive difficulty within multi-part questions
- "Show that" questions require rigorous proof
- Results from (a) often essential for (b), (c)
- Balance of technique and understanding
- Appropriate use of "Hence" and "Hence, or otherwise"

### Mark Distribution
| Marks | Characteristics | Question Type |
|-------|-----------------|---------------|
| 2-3 | Single technique | Direct calculation, simple proof |
| 4-6 | Two-stage problem | Short proof, multi-step calculation |
| 7-10 | Multi-step synthesis | Extended calculation, proof by induction |
| 10-15 | Complex reasoning | Major proof, extended modelling problem |

### Command Words (OCR Specific)
| Command | Meaning |
|---------|---------|
| **Find** | Calculate and show working |
| **Show that** | Prove the given result |
| **Hence** | Must use previous result |
| **Hence, or otherwise** | Previous result helpful but not required |
| **Verify** | Substitute to confirm |
| **Sketch** | Show key features, not necessarily to scale |
| **Prove** | Formal logical argument required |
| **Determine** | Find with justification |
| **State** | Give answer without working |
| **Deduce** | Reach conclusion from given information |

### Typical Question Structures

**Single-Part Questions (2-5 marks):**
- Direct application of technique
- Simple "show that" or calculation
- Example: "Find the eigenvalues of matrix A"

**Multi-Part Questions (6-12 marks):**
- Part (a) establishes a result
- Parts (b), (c) build on this
- Progressive difficulty within question
- Example: (a) Find eigenvalues, (b) Find eigenvectors, (c) Diagonalise

**Extended Questions (12-16 marks):**
- Complex setup requiring interpretation
- Multiple mathematical techniques
- Often combines different topic areas
- Clear scaffolding through parts
`;

// ============================================================================
// EXPORTED FUNCTIONS
// ============================================================================

function getFMDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Standard Further Maths (Grades D-C):**
- Direct application of advanced techniques
- Single concept tested
- 2-5 marks typically
- Clear method progression
- Familiar contexts and setups
- Standard calculations without unexpected twists`;

    case 'medium':
      return `**Challenging Further Maths (Grades C-B):**
- Synthesis of 2-3 concepts
- Some strategic thinking required
- 5-9 marks typically
- May combine topics
- "Show that" questions common
- Multi-step problems with clear progression`;

    case 'hard':
      return `**Demanding Further Maths (Grades B-A*):**
- Extended reasoning required
- Complex proofs or modelling
- 8-14+ marks typically
- Minimal scaffolding
- Unfamiliar contexts or combinations
- Requires insight and mathematical fluency`;
  }
}

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
 * System prompt for OCR A-Level Further Maths.
 */
export function getOCRALevelFurtherMathsSystemPrompt(): string {
  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR A-Level Further Mathematics examiner and question writer with extensive experience setting papers for the H245 specification.

${OCR_FM_QUESTION_PRINCIPLES}

${OCR_FM_KEY_FORMULAE}

## Worked Examples by Topic

${OCR_FM_COMPLEX_EXAMPLES}

${OCR_FM_MATRICES_EXAMPLES}

${OCR_FM_PROOF_EXAMPLES}

${OCR_FM_VECTORS_DE_EXAMPLES}

${OCR_FM_HYPERBOLIC_POLAR_EXAMPLES}

${OCR_FM_MECHANICS_STATS_EXAMPLES}

You 
${varietyInstructions}

generate original, high-quality Further Mathematics questions that:
1. Match OCR specification and style precisely
2. Are mathematically rigorous and accurate
3. Have appropriate difficulty for A-Level Further Maths
4. Include complete worked solutions with all steps shown
5. Have detailed mark schemes using M/A/B notation
6. Test understanding, not just technique

CRITICAL: Further Maths requires genuine mathematical sophistication beyond standard A-Level. Questions should reflect this higher level of abstraction and rigour.`;
}

/**
 * Question prompt for OCR A-Level Further Maths.
 */
export function getOCRALevelFurtherMathsQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_FM_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getFMDifficultyGuidance(difficulty);
  const markRange = getFMMarkRange(difficulty);
  const varietyInstructions = getRandomVarietyInstructions();

  const paperContext = topic.paperRestriction
    ? `\n**Paper:** This topic appears on ${topic.paperRestriction}.`
    : '';

  return `## OCR A-LEVEL FURTHER MATHEMATICS STYLE
**OCR's Rigorous Approach:** Higher algebraic complexity with unique geometric and advanced content areas.
- **Challenging algebraic manipulation** requiring sophisticated mathematical techniques
- **Area between curve and y-axis** - unique to OCR geometric interpretation
- **2-dimensional moments problems** and advanced statistical mechanics
- **Mathematical rigor emphasis** with proof-based reasoning

${OCR_FM_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL OCR A-Level Further Mathematics question:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}${paperContext}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** This must be a fresh question not from past papers - create something new
2. **FURTHER MATHS STANDARD:** Genuine sophistication beyond standard A-Level
3. **MATHEMATICAL RIGOUR:** Complete, correct solutions with all steps shown
4. **APPROPRIATE DIFFICULTY:** Match cognitive demand to mark allocation
5. **COMPLETE MARK SCHEME:** Every mark has clear criteria using M/A/B notation
6. **OCR STYLE:** Clean, progressive structure matching OCR exam papers

## Response Format (JSON)

{
  "content": "Question text with LaTeX using $...$ for inline math",
  "marks": <total marks as integer>,
  "solution": "Step-by-step solution with full working",
  "markScheme": ["M1: description", "A1: description", "B1: description"],
  "diagram": <optional diagram spec object>
}

${DIAGRAM_SCHEMA_DOCS}

## Formatting Guidelines

### Question Content:
1. Context/setup information FIRST
2. Each part (a), (b), (c) on separate lines
3. Mark allocations: (X marks) or [X] at end of each part
4. Use $...$ for LaTeX math
5. Use \\n for newlines

### Mark Scheme Format:
1. One mark per array element
2. Use M1, A1, B1 labels (M=method, A=accuracy, B=independent)
3. For multi-part: "(a) M1:", "(b) A1:"
4. Include "cao" where exact answer required
5. Include "ft" where follow-through allowed
6. Show alternative methods where applicable

Generate an original OCR A-Level Further Mathematics question now:`;
}

/**
 * Compact prompt for fast generation.
 */
export function getOCRALevelFurtherMathsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getFMMarkRange(difficulty);

  return `Generate an OCR A-Level Further Maths question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${OCR_FM_KEY_FORMULAE}

Requirements:
- Original Further Maths standard
- Complete solution with all steps
- Mark scheme with M/A/B marks
- Use $...$ for LaTeX

Return: {"content":"...","marks":N,"solution":"...","markScheme":["..."]}`;
}

/**
 * Multi-part question prompt.
 */
export function getOCRALevelFurtherMathsMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const difficultyGuidance = getFMDifficultyGuidance(difficulty);

  return `${OCR_FM_QUESTION_PRINCIPLES}

## Your Task

Generate a ${numParts}-part OCR A-Level Further Mathematics question.

**Topic:** ${topic.name}
**Difficulty:**
${difficultyGuidance}

## Multi-Part Principles

- Part (a) accessible independently
- Later parts build on earlier work
- Total marks: 9-15
- Logical progression

## Response Format (JSON)

{
  "content": "Question with parts (a), (b), (c)...",
  "marks": <total>,
  "solution": "Solution for each part",
  "markScheme": ["(a) M1: ...", "(a) A1: ...", "(b) M1: ..."]
}

Generate an original multi-part OCR Further Maths question now:`;
}

/**
 * Proof question prompt.
 */
export function getOCRALevelFurtherMathsProofPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getFMMarkRange(difficulty);

  return `${OCR_FM_QUESTION_PRINCIPLES}

## Your Task

Generate an OCR A-Level Further Mathematics PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Proof Requirements

- Mathematical induction structure
- Clear base case
- Explicit inductive hypothesis
- Rigorous inductive step
- Formal conclusion

## Response Format (JSON)

{
  "content": "Prove by induction that... [X marks]",
  "marks": <total marks>,
  "solution": "Complete proof",
  "markScheme": ["B1: Base case", "M1: Assume P(k)", "M1: Inductive step", "A1: Complete", "A1: Conclusion"]
}

Generate an original OCR Further Maths proof question now:`;
}
