import { Difficulty, Topic } from '@/types';
import {
  getVarietyParameters,
  getVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';

/**
 * A-Level Maths mark ranges.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 4 };
    case 'medium':
      return { min: 5, max: 8 };
    case 'hard':
      return { min: 8, max: 12 };
    default:
      return { min: 2, max: 8 };
  }
}

/**
 * AQA A-Level Mathematics (7357) Question Generation Prompts.
 * Based on analysis of AQA past papers and official specification documents.
 *
 * Sources:
 * - https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification
 * - https://filestore.aqa.org.uk/resources/mathematics/AQA-7366-7357-7366-7367-NG-MARKING-GUIDANCE.PDF
 * - https://filestore.aqa.org.uk/resources/mathematics/AQA-7356-7357-CW.PDF
 */

// ============================================================================
// AQA A-LEVEL ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const AQA_ALEVEL_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Mathematics Assessment Objectives

Assessment objectives are set by Ofqual and are the same across all A-level Mathematics specifications.

### AO1: Use and Apply Standard Techniques (50%)
Students should be able to:
- Select and correctly carry out routine procedures
- Accurately recall facts, terminology and definitions

**AO1 Question Characteristics:**
- Direct application of standard techniques
- "Find", "Calculate", "Work out", "Write down" commands
- Straightforward use of formulas from the booklet
- Standard differentiation, integration, equation solving

### AO2: Reason, Interpret and Communicate Mathematically (25%)
Students should be able to:
- Construct rigorous mathematical arguments (including proofs)
- Make deductions and inferences
- Assess the validity of mathematical arguments
- Explain their reasoning
- Use mathematical language and notation correctly

**AO2 Question Characteristics:**
- "Prove", "Show that", "Explain", "Justify" commands
- Constructing mathematical arguments
- Interpreting results and explaining reasoning
- Questions requiring justification

### AO3: Solve Problems Within Mathematics and Other Contexts (25%)
Students should be able to:
- Translate problems in mathematical and non-mathematical contexts into mathematical processes
- Interpret solutions in context and evaluate their accuracy
- Translate situations into mathematical models
- Evaluate the outcomes of modelling and refine models

**AO3 Question Characteristics:**
- Modelling problems (mechanics, statistics)
- Unfamiliar contexts requiring interpretation
- Multi-step problems requiring strategy selection
- Questions where students must form equations from context

### Weighting by Paper
| Paper | AO1 | AO2 | AO3 | Total |
|-------|-----|-----|-----|-------|
| Paper 1 (Pure) | 50% | 25% | 25% | 100 marks |
| Paper 2 (Pure + Mechanics) | 50% | 25% | 25% | 100 marks |
| Paper 3 (Pure + Statistics) | 50% | 25% | 25% | 100 marks |
| **Overall** | **50%** | **25%** | **25%** | **300 marks** |
`;

// ============================================================================
// AQA A-LEVEL COMMAND WORDS (OFFICIAL)
// ============================================================================

const AQA_ALEVEL_COMMAND_WORDS = `
## AQA A-Level Mathematics Command Words (Official)

### Calculation Commands
| Command | Definition | Marks | Working? |
|---------|-----------|-------|----------|
| **Find** | Calculate with working shown | 2+ | Yes - method marks available |
| **Calculate** | Explicit numerical computation | 2+ | Yes - show key steps |
| **Work out** | Determine the value | 2+ | Yes - show method |
| **Write down** | Answer alone suffices | 1 | No - no working expected |
| **State** | Direct answer | 1 | No - no justification needed |
| **Evaluate** | Find a numerical value | 2+ | Yes - substitution and calculation |

### Proof and Reasoning Commands
| Command | Definition |
|---------|-----------|
| **Show that** | Answer is PROVIDED; prove it correct. Cannot work backwards. Full method required. |
| **Prove** | Formal mathematical argument required. Must be rigorous with concluding statement. |
| **Verify** | Confirm a given result by substitution or direct check |
| **Explain** | Mathematical reasoning with vocabulary; "because" needs justification |
| **Justify** | Give mathematical reasons for your answer |
| **Deduce** | Derive directly from earlier work without full re-working |

### Linking Commands
| Command | Definition |
|---------|-----------|
| **Hence** | MUST use the previous result; alternative methods may not earn full marks |
| **Hence or otherwise** | Previous result is helpful but alternatives accepted with full working |
| **Using your answer to part (a)** | Previous result should be used but not mandatory |

### Sketch and Graph Commands
| Command | Definition |
|---------|-----------|
| **Sketch** | Show key features (intercepts, asymptotes, shape) without precision |
| **Draw** | Accurate diagram required |
| **On the same axes** | Both graphs must be shown together for comparison |

### Special Instructions
- Questions are always instructions, never written as questions
- Each marking instruction is linked to an assessment objective (AO)
- Credit should be given to any valid method
- Accuracy marks depend on preceding method marks
`;

// ============================================================================
// AQA A-LEVEL MARK SCHEME CONVENTIONS
// ============================================================================

const AQA_ALEVEL_MARK_SCHEME = `
## AQA A-Level Mark Scheme Conventions

### Mark Types
| Mark | Type | Description |
|------|------|-------------|
| **M** | Method | Correct approach, even with arithmetic errors |
| **A** | Accuracy | Correct execution, dependent on preceding M mark(s) |
| **B** | Independent | Specific correct value, not dependent on method |
| **E** | Explanation | For reasoning or explanation marks |

### Mark Dependencies
- A marks require preceding M marks (M0 A1 is not possible)
- "dep" marks require the previous mark in the chain
- Follow-through (ft) allows credit for correct method on earlier error

### Key Marking Principles
1. **Credit valid methods**: Any approach that could lead to correct answer earns M marks
2. **Typical solution**: Mark schemes show typical, not best, solutions - alternatives accepted
3. **Accuracy and rounding**: Generally acceptable to give greater accuracy than requested, including exact values
4. **Modelling questions**: Answers must be given in context
5. **Reasoning marks**: Usually linked to AO2.1 "Construct rigorous mathematical arguments"

### Common Abbreviations
| Abbreviation | Meaning |
|--------------|---------|
| oe | Or equivalent |
| ft | Follow through |
| cao | Correct answer only |
| isw | Ignore subsequent working |
| awrt | Answers which round to |
| soi | Seen or implied |
`;

// =============================================================================
// A-LEVEL MATHS REFERENCE DATA - Formula Booklet & Key Values
// =============================================================================

const AQA_ALEVEL_FORMULA_BOOKLET = `## AQA A-Level Maths Formula Booklet (PROVIDED IN EXAM)

### Pure Mathematics

#### Mensuration
| Surface area of sphere | $4\\pi r^2$ |
| Area of curved surface of cone | $\\pi r \\times$ slant height |

#### Binomial Series
$(a + b)^n = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + ... + b^n$ where $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$

$(1 + x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + ... + \\frac{n(n-1)...(n-r+1)}{r!}x^r + ...$, $|x| < 1$, $n \\in \\mathbb{R}$

#### Logarithms and Exponentials
$\\log_a x = \\frac{\\log_b x}{\\log_b a}$

#### Arithmetic Series
$S_n = \\frac{n}{2}(a + l) = \\frac{n}{2}[2a + (n-1)d]$

#### Geometric Series
$S_n = \\frac{a(1 - r^n)}{1 - r}$

$S_\\infty = \\frac{a}{1 - r}$ for $|r| < 1$

#### Trigonometric Identities
$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$
$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$
$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$, $A \\pm B \\neq (k + \\frac{1}{2})\\pi$

$\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$
$\\sin A - \\sin B = 2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}$
$\\cos A + \\cos B = 2\\cos\\frac{A+B}{2}\\cos\\frac{A-B}{2}$
$\\cos A - \\cos B = -2\\sin\\frac{A+B}{2}\\sin\\frac{A-B}{2}$

#### Small Angle Approximations (θ in radians)
$\\sin\\theta \\approx \\theta$, $\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}$, $\\tan\\theta \\approx \\theta$

#### Differentiation
| $f(x)$ | $f'(x)$ |
|--------|---------|
| $\\tan kx$ | $k\\sec^2 kx$ |
| $\\sec x$ | $\\sec x \\tan x$ |
| $\\cot x$ | $-\\cosec^2 x$ |
| $\\cosec x$ | $-\\cosec x \\cot x$ |
| $\\sin^{-1} x$ | $\\frac{1}{\\sqrt{1-x^2}}$ |
| $\\cos^{-1} x$ | $\\frac{-1}{\\sqrt{1-x^2}}$ |
| $\\tan^{-1} x$ | $\\frac{1}{1+x^2}$ |

#### Integration (+ constant)
| $f(x)$ | $\\int f(x)\\,dx$ |
|--------|-----------------|
| $\\sec^2 kx$ | $\\frac{1}{k}\\tan kx$ |
| $\\tan x$ | $\\ln|\\sec x|$ |
| $\\cot x$ | $\\ln|\\sin x|$ |
| $\\cosec x$ | $-\\ln|\\cosec x + \\cot x|$ or $\\ln|\\tan(\\frac{x}{2})|$ |
| $\\sec x$ | $\\ln|\\sec x + \\tan x|$ or $\\ln|\\tan(\\frac{x}{2} + \\frac{\\pi}{4})|$ |
| $\\frac{1}{\\sqrt{a^2-x^2}}$ | $\\sin^{-1}\\frac{x}{a}$ |
| $\\frac{1}{a^2+x^2}$ | $\\frac{1}{a}\\tan^{-1}\\frac{x}{a}$ |

### Mechanics

#### Kinematics (constant acceleration)
$v = u + at$
$s = ut + \\frac{1}{2}at^2$
$s = vt - \\frac{1}{2}at^2$
$v^2 = u^2 + 2as$
$s = \\frac{1}{2}(u + v)t$

### Statistics

#### Probability
$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
$P(A \\cap B) = P(A) \\times P(B|A)$

#### Discrete Distributions
| Distribution | Mean | Variance |
|-------------|------|----------|
| Binomial $B(n, p)$ | $np$ | $np(1-p)$ |

#### Continuous Distributions
| Distribution | PDF | Mean | Variance |
|--------------|-----|------|----------|
| Normal $N(\\mu, \\sigma^2)$ | $\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ | $\\mu$ | $\\sigma^2$ |

#### Standard Normal Distribution
$\\Phi(z) = P(Z \\leq z)$ where $Z \\sim N(0, 1)$`;

const AQA_ALEVEL_KEY_VALUES = `## Key Values for A-Level Maths (MUST MEMORISE)

### Exact Trigonometric Values
| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|-------|---------|---------|---------|
| $0°$ (0) | 0 | 1 | 0 |
| $30°$ ($\\frac{\\pi}{6}$) | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$ |
| $45°$ ($\\frac{\\pi}{4}$) | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | 1 |
| $60°$ ($\\frac{\\pi}{3}$) | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
| $90°$ ($\\frac{\\pi}{2}$) | 1 | 0 | undefined |

### Key Derivatives (MUST RECALL - Not in booklet)
| $y$ | $\\frac{dy}{dx}$ |
|-----|-----------------|
| $x^n$ | $nx^{n-1}$ |
| $e^{kx}$ | $ke^{kx}$ |
| $\\ln x$ | $\\frac{1}{x}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $a^x$ | $a^x \\ln a$ |

### Key Integrals (MUST RECALL - Not in booklet)
| $f(x)$ | $\\int f(x)\\,dx$ |
|--------|-----------------|
| $x^n$ | $\\frac{x^{n+1}}{n+1}$ ($n \\neq -1$) |
| $\\frac{1}{x}$ | $\\ln|x|$ |
| $e^x$ | $e^x$ |
| $\\sin x$ | $-\\cos x$ |
| $\\cos x$ | $\\sin x$ |
| $e^{kx}$ | $\\frac{1}{k}e^{kx}$ |
| $\\cos kx$ | $\\frac{1}{k}\\sin kx$ |
| $\\sin kx$ | $-\\frac{1}{k}\\cos kx$ |

### Trigonometric Identities (MUST RECALL - Not in booklet)
- $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$
- $\\sin^2\\theta + \\cos^2\\theta = 1$
- $1 + \\tan^2\\theta = \\sec^2\\theta$
- $1 + \\cot^2\\theta = \\cosec^2\\theta$

### Double Angle Formulae (MUST RECALL)
- $\\sin 2A = 2\\sin A\\cos A$
- $\\cos 2A = \\cos^2 A - \\sin^2 A = 2\\cos^2 A - 1 = 1 - 2\\sin^2 A$
- $\\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}$

### Key Logarithm Laws
- $\\log_a(xy) = \\log_a x + \\log_a y$
- $\\log_a(\\frac{x}{y}) = \\log_a x - \\log_a y$
- $\\log_a(x^n) = n\\log_a x$
- $\\log_a 1 = 0$
- $\\log_a a = 1$

### Mechanics Constants
- $g = 9.8 \\text{ m/s}^2$ (or 10 m/s² if stated)

### Statistics Values
- For Normal distribution: 68% within 1σ, 95% within 2σ, 99.7% within 3σ`;

const AQA_ALEVEL_WORKED_EXAMPLES = `## A-Level Maths Worked Examples (USE THESE PATTERNS)

### PROOF - Proof by Contradiction
**Q:** Prove that √2 is irrational. [4 marks]
**Solution:**
- Assume √2 is rational
- Then √2 = a/b where a, b are integers with no common factors (HCF = 1)
- Squaring: 2 = a²/b² → a² = 2b²
- So a² is even → a is even → a = 2k for some integer k
- Substituting: (2k)² = 2b² → 4k² = 2b² → b² = 2k²
- So b² is even → b is even
- **Contradiction:** Both a and b are even, so HCF(a,b) ≥ 2, not 1
- **Therefore √2 is irrational** ✓

### ALGEBRA - Partial Fractions
**Q:** Express $\\frac{3x+5}{(x-1)(x+2)}$ in partial fractions. [3 marks]
**Solution:**
- Let $\\frac{3x+5}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$
- Multiply by $(x-1)(x+2)$: $3x + 5 = A(x+2) + B(x-1)$
- Let x = 1: 8 = 3A → **A = 8/3**
- Let x = -2: -1 = -3B → **B = 1/3**
- **Answer:** $\\frac{8/3}{x-1} + \\frac{1/3}{x+2}$ or $\\frac{8}{3(x-1)} + \\frac{1}{3(x+2)}$ ✓

### COORDINATE GEOMETRY - Circle Tangent
**Q:** Find the equation of the tangent to the circle $(x-3)^2 + (y+1)^2 = 25$ at the point (7, 2). [4 marks]
**Solution:**
- Centre: (3, -1), Point: (7, 2)
- Gradient of radius = $\\frac{2-(-1)}{7-3} = \\frac{3}{4}$
- Gradient of tangent = $-\\frac{4}{3}$ (perpendicular)
- Using y - y₁ = m(x - x₁): $y - 2 = -\\frac{4}{3}(x - 7)$
- $3y - 6 = -4x + 28$
- **Answer:** $4x + 3y - 34 = 0$ ✓

### SEQUENCES - Geometric Sum to Infinity
**Q:** A geometric series has first term 6 and common ratio 0.4. Find the sum to infinity. [2 marks]
**Solution:**
- $S_\\infty = \\frac{a}{1-r} = \\frac{6}{1-0.4} = \\frac{6}{0.6}$
- **Answer:** $S_\\infty = 10$ ✓

### TRIGONOMETRY - R-formula
**Q:** Express $3\\sin\\theta + 4\\cos\\theta$ in the form $R\\sin(\\theta + \\alpha)$. [4 marks]
**Solution:**
- $R\\sin(\\theta + \\alpha) = R\\sin\\theta\\cos\\alpha + R\\cos\\theta\\sin\\alpha$
- Comparing: $R\\cos\\alpha = 3$, $R\\sin\\alpha = 4$
- $R = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$
- $\\tan\\alpha = \\frac{4}{3}$ → $\\alpha = \\tan^{-1}(\\frac{4}{3}) = 53.1°$ or 0.927 radians
- **Answer:** $5\\sin(\\theta + 53.1°)$ or $5\\sin(\\theta + 0.927)$ ✓

### EXPONENTIALS - Solving Equations
**Q:** Solve $e^{2x} - 5e^x + 6 = 0$. [4 marks]
**Solution:**
- Let $y = e^x$: $y^2 - 5y + 6 = 0$
- Factorising: $(y - 2)(y - 3) = 0$
- $y = 2$ or $y = 3$
- $e^x = 2$ → $x = \\ln 2$
- $e^x = 3$ → $x = \\ln 3$
- **Answer:** $x = \\ln 2$ or $x = \\ln 3$ ✓

### DIFFERENTIATION - Chain Rule
**Q:** Differentiate $y = (3x^2 + 1)^5$. [3 marks]
**Solution:**
- Let $u = 3x^2 + 1$, so $y = u^5$
- $\\frac{du}{dx} = 6x$, $\\frac{dy}{du} = 5u^4$
- $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx} = 5u^4 \\times 6x$
- **Answer:** $\\frac{dy}{dx} = 30x(3x^2 + 1)^4$ ✓

### DIFFERENTIATION - Product Rule
**Q:** Differentiate $y = x^3 e^{2x}$. [3 marks]
**Solution:**
- Using product rule: $\\frac{dy}{dx} = u\\frac{dv}{dx} + v\\frac{du}{dx}$
- $u = x^3$, $v = e^{2x}$
- $\\frac{du}{dx} = 3x^2$, $\\frac{dv}{dx} = 2e^{2x}$
- $\\frac{dy}{dx} = x^3 \\times 2e^{2x} + e^{2x} \\times 3x^2$
- **Answer:** $\\frac{dy}{dx} = e^{2x}(2x^3 + 3x^2)$ or $x^2e^{2x}(2x + 3)$ ✓

### INTEGRATION - By Substitution
**Q:** Find $\\int x\\sqrt{x+1}\\,dx$ using the substitution $u = x + 1$. [4 marks]
**Solution:**
- If $u = x + 1$, then $x = u - 1$ and $\\frac{du}{dx} = 1$
- $\\int x\\sqrt{x+1}\\,dx = \\int (u-1)\\sqrt{u}\\,du = \\int (u^{3/2} - u^{1/2})\\,du$
- $= \\frac{u^{5/2}}{5/2} - \\frac{u^{3/2}}{3/2} + c = \\frac{2u^{5/2}}{5} - \\frac{2u^{3/2}}{3} + c$
- **Answer:** $\\frac{2(x+1)^{5/2}}{5} - \\frac{2(x+1)^{3/2}}{3} + c$ ✓

### INTEGRATION - By Parts
**Q:** Find $\\int x\\cos x\\,dx$. [3 marks]
**Solution:**
- Using $\\int u\\frac{dv}{dx}dx = uv - \\int v\\frac{du}{dx}dx$
- Let $u = x$ (differentiates to simpler), $\\frac{dv}{dx} = \\cos x$
- $\\frac{du}{dx} = 1$, $v = \\sin x$
- $\\int x\\cos x\\,dx = x\\sin x - \\int \\sin x\\,dx$
- **Answer:** $x\\sin x + \\cos x + c$ ✓

### VECTORS - Scalar Product
**Q:** Find the angle between vectors $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j} - \\mathbf{k}$ and $\\mathbf{b} = \\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}$. [4 marks]
**Solution:**
- $\\mathbf{a} \\cdot \\mathbf{b} = (2)(1) + (3)(-2) + (-1)(2) = 2 - 6 - 2 = -6$
- $|\\mathbf{a}| = \\sqrt{4 + 9 + 1} = \\sqrt{14}$
- $|\\mathbf{b}| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$
- $\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|} = \\frac{-6}{3\\sqrt{14}}$
- **Answer:** $\\theta = \\cos^{-1}\\left(\\frac{-6}{3\\sqrt{14}}\\right) = 122.3°$ or 2.13 radians ✓

### KINEMATICS - Variable Acceleration
**Q:** A particle moves with velocity $v = 3t^2 - 12t + 9$ m/s. Find when the particle is at rest and its acceleration at these times. [5 marks]
**Solution:**
- At rest: $v = 0$ → $3t^2 - 12t + 9 = 0$
- $t^2 - 4t + 3 = 0$ → $(t-1)(t-3) = 0$
- **At rest when t = 1s and t = 3s** ✓
- Acceleration: $a = \\frac{dv}{dt} = 6t - 12$
- At t = 1: $a = 6(1) - 12 = -6$ m/s²
- At t = 3: $a = 6(3) - 12 = 6$ m/s²
- **Acceleration = -6 m/s² at t = 1, and 6 m/s² at t = 3** ✓

### STATISTICS - Hypothesis Testing (Normal)
**Q:** A factory claims mean weight of packets is 500g. A sample of 25 packets has mean 496g. Given σ = 15g, test at 5% significance whether the mean is less than 500g. [5 marks]
**Solution:**
- H₀: μ = 500, H₁: μ < 500 (one-tailed)
- Under H₀: $\\bar{X} \\sim N(500, \\frac{15^2}{25}) = N(500, 9)$
- Test statistic: $z = \\frac{496 - 500}{\\sqrt{9}} = \\frac{-4}{3} = -1.33$
- Critical value at 5%: z = -1.645
- Since -1.33 > -1.645, **do not reject H₀**
- **Conclusion:** Insufficient evidence at 5% level to conclude mean is less than 500g ✓`;

const AQA_ALEVEL_QUESTION_PRINCIPLES = `# AQA A-Level Mathematics: Question Construction Principles

${AQA_ALEVEL_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_COMMAND_WORDS}

${AQA_ALEVEL_MARK_SCHEME}

You are generating an original A-Level Mathematics question that could plausibly appear on a future AQA exam. The question must be genuinely original—not a copy of a past paper question with different numbers, but a fresh application of mathematical concepts that exhibits authentic AQA characteristics.

## Exam Structure

AQA A-Level Mathematics (7357) consists of three papers:
- Paper 1 (7357/1): Pure Mathematics only - 2 hours, 100 marks
- Paper 2 (7357/2): Pure Mathematics AND Mechanics - 2 hours, 100 marks
- Paper 3 (7357/3): Pure Mathematics AND Statistics - 2 hours, 100 marks

All papers are calculator papers. Students have access to the AQA Formulae Booklet.

**AQA-Specific Characteristics (vs Edexcel/OCR):**
- MULTIPLE CHOICE questions at START of papers (Q1-4, 1 mark each)
- Paper structure: Pure mixed with Applied (unlike Edexcel's pure-only Papers 1&2)
- Moments problems in 1-D only (unlike Edexcel/OCR A which include 2-D ladders)
- Includes infinite sums of iterative sequences
- Linear coding directly examinable in statistics
- Includes discrete uniform distribution (unique to AQA)
- EXCLUDES normal approximation to binomial distribution
- Uses large data sets for real-world statistical analysis
- More structured and traditional layout
- Mark schemes considered more accessible/flexible

## Question Type Distribution

| Question Range | Type | Marks per Q | Format |
|---------------|------|-------------|--------|
| Q1-4 | Multiple Choice | 1 mark | "Circle your answer" or "Tick one box" with 4 options |
| Q5-8 | Short Answer | 3-6 marks | Working required, single concept |
| Q9-12 | Multi-part Medium | 8-9 marks | 2-4 sub-parts, linked concepts |
| Q13-16+ | Multi-part Extended | 9-14 marks | Complex synthesis, modelling |

## Command Word Semantics

**Calculation commands:**
- "Find" — Calculate with working shown; method marks available
- "Calculate" — Explicit numerical computation required
- "Write down" — No working expected; answer alone suffices (1 mark)
- "State" — Direct answer, typically 1 mark, no justification needed

**Proof/Reasoning commands:**
- "Show that" — Answer is PROVIDED; must prove it's correct; cannot work backwards; full method required
- "Prove" — Formal mathematical argument required
- "Verify" — Confirm a given result by substitution or direct check
- "Explain" — Mathematical reasoning with vocabulary; "because" needs justification
- "Justify" — Give mathematical reasons for your answer

**Linking commands:**
- "Hence" — MUST use previous result; alternative methods may lose marks
- "Hence or otherwise" — Previous result is helpful but alternatives accepted
- "Deduce" — Derive directly from earlier work without full re-working

## Mark Allocation Logic (A-Level)

| Marks | Characteristics |
|-------|----------------|
| 1 | Single recall, recognition, or MCQ selection |
| 2-3 | Two-step calculation or simple "show that" |
| 4-5 | Multi-step with method + accuracy, or proof |
| 6-7 | Extended proof or complex multi-step process |
| 8+ | Extended problem solving with multiple synthesis steps |

## Mark Scheme Construction

**Mark types:**
- M marks (Method): Correct approach, even with arithmetic errors
- A marks (Accuracy): Correct execution, dependent on M marks
- B marks (Independent): Specific correct values, not dependent on method

**Dependency rules:**
- A marks require preceding M marks
- "dep" marks require previous mark in chain
- Follow-through (ft) allows credit despite earlier errors

## Difficulty Calibration

**Early Questions (Q1-8):**
- Direct application of single techniques
- Familiar setups and standard procedures
- Numbers typically work out cleanly
- Grade 4-6 standard

**Middle Questions (Q9-12):**
- Synthesis of 2-3 concepts
- Some unfamiliar setups
- May require strategic thinking
- Grade 6-8 standard

**Late Questions (Q13+):**
- Extended multi-step reasoning
- Proof and justification required
- Complex modelling scenarios
- Less scaffolding provided
- Grade 7-9 standard`;

const AQA_ALEVEL_TOPIC_GUIDANCE: Record<string, string> = {
  'alevel-proof': `## Proof Topic Structure

**Proof by Deduction:**
- Logical chain of reasoning from known facts
- Use algebraic manipulation to establish results
- Clear statements linking each step

**Proof by Exhaustion:**
- Test all possible cases systematically
- Common: "for all integers n where 1 ≤ n ≤ 4"
- Must show work for EVERY case

**Proof by Contradiction:**
- Assume opposite is true
- Derive logical contradiction
- Classic examples: √2 is irrational, infinitely many primes
- State assumption clearly at start

**Disproof by Counter-example:**
- Find single case that violates statement
- Often 1-mark MCQ or short answer
- "Which of the following is a counter-example to..."`,

  'alevel-algebra': `## Algebra and Functions Topic Structure

**Indices and Surds:**
- All laws including fractional and negative indices
- Rationalising denominators (single and double term)
- Simplifying complex surd expressions

**Quadratics:**
- Completing the square: a(x + p)² + q form
- Discriminant b² - 4ac for nature of roots
- Solving by factorising, formula, completing square

**Simultaneous Equations:**
- One linear, one quadratic: substitution method
- May involve circles or other curves

**Inequalities:**
- Linear and quadratic inequalities
- Set notation for solutions
- Graphical representation on number line

**Polynomials:**
- Factor theorem: f(a) = 0 ⟹ (x - a) is factor
- Algebraic division
- Remainder theorem

**Partial Fractions:**
- Linear factors: A/(x-a) + B/(x-b)
- Repeated factors: A/(x-a) + B/(x-a)²
- Use for integration

**Modulus Function:**
- |f(x)| graphs: reflect negative parts
- Solving |f(x)| = g(x)
- Modulus inequalities

**Functions:**
- Domain and range
- Composite functions: fg(x) = f(g(x))
- Inverse functions: swap x and y, rearrange
- Graph of inverse is reflection in y = x`,

  'alevel-coordinate-geometry': `## Coordinate Geometry Topic Structure

**Straight Lines:**
- y - y₁ = m(x - x₁) point-gradient form
- Parallel lines: same gradient
- Perpendicular lines: product of gradients = -1
- Length and midpoint formulae

**Circles:**
- (x - a)² + (y - b)² = r² standard form
- Finding centre and radius from expanded form
- Tangent perpendicular to radius at point of contact
- Perpendicular from centre bisects chord
- Finding tangent/normal equations

**Parametric Equations:**
- Converting parametric to Cartesian: eliminate parameter
- Sketching parametric curves
- Finding gradients: dy/dx = (dy/dt)/(dx/dt)
- Finding intersections with axes`,

  'alevel-sequences-series': `## Sequences and Series Topic Structure

**Binomial Expansion:**
- (1 + x)ⁿ for positive integer n: Pascal's triangle or formula
- (1 + x)ⁿ for rational n: first few terms, |x| < 1
- (a + bx)ⁿ: factor out aⁿ first
- Approximations using first few terms

**Arithmetic Sequences:**
- nth term: uₙ = a + (n-1)d
- Sum: Sₙ = n/2(2a + (n-1)d) = n/2(first + last)
- Finding n when given Sₙ

**Geometric Sequences:**
- nth term: uₙ = arⁿ⁻¹
- Sum: Sₙ = a(1 - rⁿ)/(1 - r)
- Sum to infinity: S∞ = a/(1 - r) when |r| < 1

**Sigma Notation:**
- Σ notation for sums
- Standard results: Σr, Σr², Σr³
- Method of differences`,

  'alevel-trigonometry': `## Trigonometry Topic Structure

**Exact Values:**
- sin, cos, tan for 0°, 30°, 45°, 60°, 90°
- Related angles using CAST diagram

**Radians:**
- Convert: radians = degrees × π/180
- Arc length: s = rθ
- Sector area: A = ½r²θ

**Identities:**
- tan θ = sin θ / cos θ
- sin²θ + cos²θ = 1
- 1 + tan²θ = sec²θ
- 1 + cot²θ = cosec²θ

**Compound Angle Formulae:**
- sin(A ± B), cos(A ± B), tan(A ± B)
- Double angle: sin 2A, cos 2A, tan 2A

**R-Formula:**
- a sin θ + b cos θ = R sin(θ + α)
- R = √(a² + b²), tan α = b/a
- For max/min and solving equations

**Inverse Functions:**
- arcsin, arccos, arctan principal values
- Domains and ranges

**Small Angle Approximations:**
- sin θ ≈ θ, cos θ ≈ 1 - θ²/2, tan θ ≈ θ (θ in radians)`,

  'alevel-exponentials-logarithms': `## Exponentials and Logarithms Topic Structure

**Exponential Functions:**
- y = aˣ graphs through (0, 1)
- e = 2.718... natural exponential
- Growth and decay: y = Ae^(kt)

**Logarithms:**
- log_a(x) = y ⟺ aʸ = x
- ln x = log_e(x)

**Laws of Logarithms:**
- log(xy) = log x + log y
- log(x/y) = log x - log y
- log(xⁿ) = n log x
- Change of base: log_a(x) = log_b(x)/log_b(a)

**Solving Equations:**
- aˣ = b ⟹ x = log_a(b) = ln b / ln a
- Equations reducible to quadratics in eˣ

**Modelling:**
- Exponential growth/decay contexts
- Using logarithms to linearise: log y vs x or log y vs log x`,

  'alevel-differentiation': `## Differentiation Topic Structure

**From First Principles:**
- f'(x) = lim[h→0] (f(x+h) - f(x))/h
- Understanding derivative as gradient

**Standard Derivatives:**
- d/dx(xⁿ) = nxⁿ⁻¹ for all rational n
- d/dx(eˣ) = eˣ, d/dx(e^(kx)) = ke^(kx)
- d/dx(ln x) = 1/x
- d/dx(sin x) = cos x, d/dx(cos x) = -sin x
- d/dx(tan x) = sec²x

**Differentiation Rules:**
- Chain rule: dy/dx = dy/du × du/dx
- Product rule: d/dx(uv) = u(dv/dx) + v(du/dx)
- Quotient rule: d/dx(u/v) = (v(du/dx) - u(dv/dx))/v²

**Implicit Differentiation:**
- Differentiate both sides with respect to x
- Remember d/dx(y²) = 2y(dy/dx)

**Parametric Differentiation:**
- dy/dx = (dy/dt)/(dx/dt)

**Applications:**
- Tangents and normals
- Stationary points and their nature (second derivative test)
- Optimisation problems
- Rates of change and connected rates`,

  'alevel-integration': `## Integration Topic Structure

**Standard Integrals:**
- ∫xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ -1)
- ∫1/x dx = ln|x| + c
- ∫eˣ dx = eˣ + c
- ∫sin x dx = -cos x + c
- ∫cos x dx = sin x + c
- ∫sec²x dx = tan x + c

**Integration by Substitution:**
- Substitute u = g(x), du = g'(x)dx
- Change limits for definite integrals

**Integration by Parts:**
- ∫u(dv/dx)dx = uv - ∫v(du/dx)dx
- LIATE rule for choosing u

**Partial Fractions:**
- Split rational functions before integrating

**Applications:**
- Area under curve: ∫[a to b] y dx
- Area between curves
- Volume of revolution: π∫y² dx

**Differential Equations:**
- Separation of variables: dy/dx = f(x)g(y)
- ∫(1/g(y))dy = ∫f(x)dx
- Finding particular solutions with initial conditions`,

  'alevel-numerical-methods': `## Numerical Methods Topic Structure

**Locating Roots:**
- Change of sign in continuous function indicates root
- Interval containing root: f(a) and f(b) have opposite signs

**Iteration:**
- Rearrange f(x) = 0 to x = g(x)
- x_{n+1} = g(x_n) iterative formula
- Cobweb and staircase diagrams
- Convergence: |g'(x)| < 1 near root

**Newton-Raphson:**
- x_{n+1} = x_n - f(x_n)/f'(x_n)
- Faster convergence than simple iteration
- May fail if f'(x) ≈ 0`,

  'alevel-vectors': `## Vectors Topic Structure

**Vector Basics:**
- Column vectors and i, j, k notation
- Position vectors and displacement vectors
- Magnitude: |a| = √(x² + y² + z²)
- Unit vectors: â = a/|a|

**Operations:**
- Addition and subtraction
- Scalar multiplication
- Parallel vectors: a = λb

**Geometric Applications:**
- Finding midpoint
- Dividing line in given ratio
- Proving points collinear

**Scalar Product:**
- a · b = |a||b|cos θ = x₁x₂ + y₁y₂ + z₁z₂
- Perpendicular vectors: a · b = 0
- Finding angles between vectors`,

  'alevel-statistical-sampling': `## Statistical Sampling Topic Structure

**Population and Sample:**
- Census vs sample: advantages and disadvantages
- Sampling frame

**Sampling Methods:**
- Simple random sampling
- Systematic sampling
- Stratified sampling: proportional to strata sizes
- Quota sampling
- Opportunity/convenience sampling

**Bias:**
- Sources of bias
- How to reduce bias`,

  'alevel-data-presentation': `## Data Presentation and Interpretation Topic Structure

**Single Variable:**
- Histograms: frequency density = frequency/class width
- Cumulative frequency diagrams
- Box plots

**Measures of Location:**
- Mean, median, mode
- From grouped data: use midpoints
- Interpolation for median

**Measures of Spread:**
- Range, IQR
- Variance: Var(X) = E(X²) - [E(X)]²
- Standard deviation

**Outliers:**
- Q₁ - 1.5×IQR and Q₃ + 1.5×IQR

**Coding:**
- If y = ax + b then ȳ = ax̄ + b and σ_y = |a|σ_x

**Bivariate Data:**
- Scatter diagrams
- PMCC (r): -1 ≤ r ≤ 1
- Regression lines
- Interpolation vs extrapolation`,

  'alevel-probability': `## Probability Topic Structure

**Basic Probability:**
- P(A') = 1 - P(A)
- Sample space diagrams

**Set Notation:**
- A ∩ B (intersection), A ∪ B (union)
- Venn diagrams

**Laws:**
- Addition: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
- Mutually exclusive: P(A ∩ B) = 0
- Independent: P(A ∩ B) = P(A) × P(B)

**Conditional Probability:**
- P(A|B) = P(A ∩ B)/P(B)
- Independence: P(A|B) = P(A)

**Tree Diagrams:**
- With and without replacement
- Multiply along branches, add outcomes`,

  'alevel-statistical-distributions': `## Statistical Distributions Topic Structure

**Discrete Random Variables:**
- E(X) = Σx·P(X=x)
- Var(X) = E(X²) - [E(X)]²
- E(aX + b) = aE(X) + b
- Var(aX + b) = a²Var(X)

**Binomial Distribution B(n, p):**
- Conditions: fixed n, independent, constant p, two outcomes
- P(X = r) = ⁿCᵣ pʳ(1-p)ⁿ⁻ʳ
- E(X) = np, Var(X) = np(1-p)

**Normal Distribution N(μ, σ²):**
- Standardise: Z = (X - μ)/σ
- Z ~ N(0, 1)
- Using tables/calculator for probabilities
- Inverse normal: finding values from probabilities`,

  'alevel-hypothesis-testing': `## Hypothesis Testing Topic Structure

**Fundamentals:**
- Null hypothesis H₀ and alternative H₁
- Significance level (1%, 5%, 10%)
- One-tailed vs two-tailed tests
- p-value interpretation

**Binomial Tests:**
- Testing proportion p
- Finding critical region
- Stating conclusions in context

**Normal Tests:**
- Testing mean μ when σ known
- Sample mean: X̄ ~ N(μ, σ²/n)
- Test statistic: z = (x̄ - μ)/(σ/√n)

**Correlation Tests:**
- H₀: ρ = 0 (no correlation)
- Using critical values table

**Conclusions:**
- "Reject H₀" or "Do not reject H₀"
- Interpret in context
- Type I and Type II errors`,

  'alevel-quantities-units': `## Quantities and Units in Mechanics Topic Structure

**SI Units:**
- Base units: m, kg, s
- Derived units: N, m/s, m/s²

**Scalars and Vectors:**
- Scalars: mass, speed, time, distance
- Vectors: displacement, velocity, acceleration, force

**Fundamental Quantities:**
- Displacement, velocity, acceleration
- Force, weight, mass
- Momentum`,

  'alevel-kinematics': `## Kinematics Topic Structure

**Graphs:**
- Displacement-time: gradient = velocity
- Velocity-time: gradient = acceleration, area = displacement

**SUVAT Equations (constant acceleration):**
- v = u + at
- s = ut + ½at²
- s = vt - ½at²
- v² = u² + 2as
- s = ½(u + v)t

**Variable Acceleration:**
- v = ds/dt, a = dv/dt = d²s/dt²
- s = ∫v dt, v = ∫a dt

**Projectiles:**
- Horizontal: constant velocity
- Vertical: acceleration g = 9.8 m/s²
- Components independent
- Time of flight, range, maximum height`,

  'alevel-forces-newtons-laws': `## Forces and Newton's Laws Topic Structure

**Types of Forces:**
- Weight: W = mg
- Normal reaction
- Tension, compression
- Friction: F ≤ μR

**Force Diagrams:**
- Show all forces acting on body
- Resolve into components if needed

**Newton's Laws:**
1. Object at rest or constant velocity if ΣF = 0
2. F = ma (resultant force = mass × acceleration)
3. Action and reaction are equal and opposite

**Friction:**
- F ≤ μR (limiting friction F = μR)
- On inclined planes: resolve perpendicular and parallel

**Connected Particles:**
- Pulleys: same tension in string, same acceleration
- On tables with strings over pulleys
- Multiple particles in contact`,

  'alevel-moments': `## Moments Topic Structure

**Moment Definition:**
- Moment = Force × perpendicular distance from pivot
- Clockwise and anticlockwise

**Equilibrium:**
- Sum of clockwise moments = sum of anticlockwise moments
- Sum of forces in any direction = 0

**Rigid Bodies:**
- Uniform rod: weight acts at centre
- Non-uniform: centre of mass specified
- Reactions at supports/pivots

**Tilting and Toppling:**
- On point of tilting: reaction at one support = 0
- Finding limiting positions`,
};

/**
 * Get difficulty guidance for A-Level questions.
 */
function getALevelDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Early Paper Questions (Grades 4-6):**
- Direct application of single techniques
- 1-4 marks typically
- MCQ format (1 mark) or short answer (2-4 marks)
- Familiar setups, numbers work out cleanly
- May include "Write down" or straightforward "Find" questions`;

    case 'medium':
      return `**Middle Paper Questions (Grades 6-8):**
- Synthesis of 2-3 concepts
- 4-7 marks typically
- Multi-step calculations with clear progression
- Some algebraic manipulation required
- May require choosing an appropriate method`;

    case 'hard':
      return `**Late Paper Questions (Grades 7-9):**
- Extended multi-step reasoning
- 6-12+ marks typically
- Proof and rigorous justification required
- Complex modelling scenarios
- Less scaffolding, students choose approach
- May involve "Show that" or "Prove" with multi-part structure`;
  }
}

/**
 * Get mark range for A-Level difficulty.
 */
function getALevelMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 4 };
    case 'medium':
      return { min: 4, max: 7 };
    case 'hard':
      return { min: 6, max: 12 };
  }
}

/**
 * Compact prompt for fast AQA A-Level question generation.
 */
export function getAQAALevelCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getALevelMarkRange(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 4-6): Single-step or short multi-step, 1-4 marks, like Q1-8. May use MCQ format.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 6-8): 2-3 concepts synthesised, 4-7 marks, like Q9-12. Clear progression.'
    : 'Late paper (Grades 7-9): Complex multi-step, proof, or modelling, 6-12 marks, like Q13+. Extended reasoning.';

  // Include paper context if available
  const paperContext = topic.paperRestriction
    ? `This topic appears on ${topic.paperRestriction}.`
    : 'This is a Pure Mathematics topic appearing on all papers.';

  return `Generate an AQA A-Level Maths question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
${paperContext}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${AQA_ALEVEL_KEY_VALUES}

Requirements:
- Original A-Level standard question (not GCSE)
- University preparation level mathematics
- Include worked solution showing all steps using correct formulas and values
- Include mark scheme (M=method, A=accuracy, B=independent marks)
- Use $...$ for LaTeX math
- Use \\n for newlines in strings

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First mark","A1: Second mark"]}`;
}

/**
 * Enhanced prompt for high-quality AQA A-Level question generation.
 */
export function getAQAALevelEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getALevelDifficultyGuidance(difficulty);
  const markRange = getALevelMarkRange(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  // Include paper context if available
  const paperContext = topic.paperRestriction
    ? `\n**Paper:** This topic appears on ${topic.paperRestriction}.`
    : '';

  // Include reference data for calculation accuracy
  const referenceSection = `
---

## Reference Data (USE THESE FOR ACCURACY)

${AQA_ALEVEL_FORMULA_BOOKLET}

${AQA_ALEVEL_KEY_VALUES}

${AQA_ALEVEL_WORKED_EXAMPLES}
`;

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

${referenceSection}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL AQA A-Level Mathematics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}${paperContext}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** This must be a fresh question that could NOT be found in past papers.
2. **A-LEVEL STANDARD:** This is university preparation level, NOT GCSE.
3. **AUTHENTICITY:** The question should feel like a natural A-Level mathematical task.
4. **APPROPRIATE DIFFICULTY:** The cognitive demand must match the mark allocation.
5. **COMPLETE MARK SCHEME:** Every mark must have clear earning criteria.
6. **CALCULATION ACCURACY:** Use the reference data above to ensure all calculations use correct formulas and values.

## Response Format (JSON)

{
  "content": "Question text with proper formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional diagram spec object - include if question needs a visual>
}

${DIAGRAM_SCHEMA_DOCS}

## AQA A-Level Formatting Rules

### Question Content:
1. Context/information FIRST
2. Blank line before questions (\\n\\n)
3. Each part (a), (b), (c) on NEW LINE
4. Mark allocations: [X marks] at end of each part
5. Use $...$ for LaTeX math (fractions, integrals, etc.)

### Mark Scheme:
1. One mark per array element
2. Use M1, A1, B1 labels
3. For multi-part: "(a) M1:", "(b) A1:"

Generate a genuinely original AQA A-Level question now:`;
}

/**
 * Multi-part question prompt for AQA A-Level.
 */
export function getAQAALevelMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getALevelDifficultyGuidance(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part AQA A-Level Mathematics question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles

- Part (a) should be achievable independently
- Later parts may build on earlier results OR explore different aspects
- Use "Hence" only when students MUST use the previous result
- Total marks should be 8-14 for a ${numParts}-part A-Level question
- Each part should test a distinct skill while maintaining thematic coherence

## Response Format (JSON)

{
  "content": "Question text with parts on separate lines",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark", "(a) A1: mark", "(b) M1: mark"]
}

Generate a genuinely original multi-part AQA A-Level question now:`;
}

/**
 * Multiple choice question prompt for AQA A-Level Maths.
 * AQA A-Level has ~4 multiple choice questions at the start of each paper.
 */
export function getAQAALevelMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA A-Level style MULTIPLE CHOICE question (1 mark).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## AQA A-Level Multiple Choice Characteristics

AQA A-Level Maths includes ~4 multiple choice questions at the START of each paper (Q1-4):
- 1 mark each
- 4 options (A, B, C, D)
- Test quick recognition and understanding
- Distractors based on common misconceptions at A-Level

**Common A-Level distractors:**
- Differentiation vs integration confusion
- Sign errors in chain rule/product rule
- Forgetting +C in indefinite integration
- Confusing sin and cos values
- Incorrect domain/range reasoning

## Response Format (JSON)

{
  "content": "Question stem\\n\\nA  Option A\\nB  Option B\\nC  Option C\\nD  Option D\\n\\n[1 mark]",
  "marks": 1,
  "solution": "Full working showing why correct answer is correct",
  "markScheme": ["B1: Correct answer is [X]"],
  "correctAnswer": "A/B/C/D"
}

Generate an original AQA A-Level multiple choice question now:`;
}

/**
 * Proof question prompt for AQA A-Level Maths.
 * Proof is a core part of A-Level Maths.
 */
export function getAQAALevelProofPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '3-4' : difficulty === 'medium' ? '4-6' : '6-8';

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA A-Level style PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## A-Level Proof Question Types

**Proof by deduction:**
- Algebraic manipulation to establish result
- Using known results to derive new ones

**Proof by exhaustion:**
- Testing all possible cases
- Often for integer problems

**Proof by contradiction:**
- Assume opposite, derive contradiction
- Classic examples: √2 irrational, infinite primes

**Counter-example:**
- Find ONE example that disproves a statement
- Must be specific and verifiable

**Show that questions:**
- Result given, must demonstrate validity
- Every step must be shown and justified

## Response Format (JSON)

{
  "content": "Context...\\n\\n[Prove/Show that statement] [X marks]",
  "marks": <total marks>,
  "solution": "Complete proof with every step justified",
  "markScheme": ["M1: Key step 1", "M1: Key step 2", "A1: Correct conclusion with full justification"]
}

Generate an original AQA A-Level proof question now:`;
}

/**
 * Graph/Curve question prompt for AQA A-Level Maths.
 */
export function getAQAALevelGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '3-5' : difficulty === 'medium' ? '5-8' : '8-12';

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

${DIAGRAM_SCHEMA_DOCS}

---

## Your Task

Generate an AQA A-Level style GRAPH/CURVE question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## A-Level Graph Question Types

**Curve sketching:**
- Identify key features (intercepts, stationary points, asymptotes)
- Show correct behaviour at infinity
- Mark coordinates of key points

**Graph transformations:**
- f(x + a), f(x) + a, af(x), f(ax)
- Combinations of transformations
- Describe the transformation precisely

**Intersection problems:**
- Points of intersection with lines/other curves
- Tangent problems
- Normal problems

**Area and integration:**
- Area under curve
- Area between curves
- Area involving x-axis crossings

## Response Format (JSON)

{
  "content": "Graph/curve question...\\n\\n[X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step analysis and sketching guidance",
  "markScheme": ["M1: Key feature identified", "A1: Correct calculation", "B1: Sketch with all features"],
  "diagram": { "type": "coordinate", "data": { ... } }
}

Generate an original AQA A-Level graph question now:`;
}

/**
 * Extended response question prompt for AQA A-Level Maths.
 * These are the longer, multi-step problems worth 8+ marks.
 */
export function getAQAALevelExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA A-Level style EXTENDED RESPONSE question (8-12 marks).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## A-Level Extended Response Characteristics

These appear towards the end of papers and require:
- Multi-stage problem solving
- Combining multiple techniques
- Setting up equations from context
- Interpretation and conclusion

**Common structures:**
- Modelling problem → solve → interpret
- Prove result → use result → extend
- Multiple calculus operations in sequence
- Applied context requiring mathematical modelling

## Response Format (JSON)

{
  "content": "Extended problem context...\\n\\n[Multi-part question without scaffolding] [10 marks]",
  "marks": 10,
  "solution": "Complete solution showing all stages",
  "markScheme": ["M1: Setup/model", "A1: Correct equation", "M1: Technique", "A1: Solution", "M1: Interpretation"]
}

Generate an original AQA A-Level extended response question now:`;
}

/**
 * Applied Maths (Mechanics/Statistics) question prompt for AQA A-Level.
 * Paper 2 is Pure + Mechanics, Paper 3 is Pure + Statistics.
 */
export function getAQAALevelAppliedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  paperType: 'mechanics' | 'statistics',
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '4-6' : difficulty === 'medium' ? '6-10' : '10-14';

  const paperGuidance = paperType === 'mechanics'
    ? `## Mechanics (Paper 2) Characteristics

- Models simplified from reality (assumptions stated)
- Diagrams often required
- SUVAT, forces, momentum, moments
- AQA: Moments in 1-D only (no 2-D ladders)
- g = 9.8 m/s² unless stated otherwise
- Clear force diagrams expected`
    : `## Statistics (Paper 3) Characteristics

- Large Data Set context questions
- Hypothesis testing (binomial and normal)
- AQA includes discrete uniform distribution
- AQA EXCLUDES normal approximation to binomial
- Context interpretation essential
- State hypotheses clearly`;

  return `${AQA_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

${paperGuidance}

---

## Your Task

Generate an AQA A-Level ${paperType === 'mechanics' ? 'MECHANICS' : 'STATISTICS'} question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## Response Format (JSON)

{
  "content": "${paperType === 'mechanics' ? 'Mechanics' : 'Statistics'} question in context...\\n\\n[X marks]",
  "marks": <total marks>,
  "solution": "Complete solution with clear working",
  "markScheme": ["M1: Model/setup", "A1: Correct application", "A1: Answer with units/context"]
}

Generate an original AQA A-Level ${paperType} question now:`;
}
