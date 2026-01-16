// OCR FSMQ Additional Mathematics (6993) Question Generation Prompts
// Based on official OCR specification and past paper analysis
// Reference: https://www.ocr.org.uk/qualifications/fsmq/additional-mathematics-6993/

import { Difficulty, Topic } from '@/types';
import {
  getVarietyParameters,
  getVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';

// ============================================================================
// OCR FSMQ ADDITIONAL MATHEMATICS SPECIFICATION DETAILS (6993)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_FSMQ_ASSESSMENT_OBJECTIVES = `
## OCR FSMQ Additional Mathematics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Use and apply standard techniques | 40-50% |
| **AO2** | Reason, interpret and communicate mathematically | 25-35% |
| **AO3** | Solve problems within mathematics and in other contexts | 20-30% |

### AO1: Use and Apply Standard Techniques (40-50%)
Learners should be able to:
- Select and correctly carry out routine procedures
- Accurately recall facts, terminology and definitions
- Use and interpret notation correctly
- Accurately carry out set tasks requiring multi-step solutions

**What this means in practice:**
- Fluent manipulation of algebraic expressions
- Correct application of differentiation and integration rules
- Accurate use of trigonometric identities
- Proper application of coordinate geometry formulae
- Correct use of logarithm laws
- Accurate binomial expansion calculations

### AO2: Reason, Interpret and Communicate Mathematically (25-35%)
Learners should be able to:
- Construct rigorous mathematical arguments (including proofs)
- Make deductions and inferences
- Assess the validity of mathematical arguments
- Explain their reasoning
- Use correct mathematical notation and terminology

**What this means in practice:**
- "Show that" questions requiring logical steps
- Proofs using factor theorem or completing the square
- Justifying why a stationary point is maximum/minimum
- Explaining why equations have certain numbers of solutions
- Interpreting discriminant conditions

### AO3: Solve Problems Within Mathematics and in Other Contexts (20-30%)
Learners should be able to:
- Translate problems into mathematical processes
- Make connections between different mathematical areas
- Interpret results in the context of the problem
- Evaluate methods used and results obtained
- Evaluate solutions to identify how they may have been affected by assumptions

**What this means in practice:**
- Optimisation problems (finding maximum area, minimum cost)
- Kinematics problems using calculus
- Finding areas between curves
- Real-world applications of exponential growth/decay
- Problems requiring multiple mathematical techniques

### Paper Structure
| Component | Details |
|-----------|---------|
| **Paper Code** | 6993 |
| **Duration** | 2 hours |
| **Total Marks** | 100 |
| **Calculator** | Scientific calculator allowed |
| **Format** | Mix of short and extended response questions |

### Grade Boundaries (Typical)
| Grade | Marks (approx) |
|-------|----------------|
| A | 70-80+ |
| B | 55-70 |
| C | 45-55 |
| D | 35-45 |
| E | 25-35 |

### Question Distribution
- Questions 1-6: Typically 2-4 marks each (basic techniques)
- Questions 7-12: Typically 4-7 marks each (standard applications)
- Questions 13-16: Typically 7-12 marks each (extended problems)
`;

// ============================================================================
// KEY FORMULAE - COMPREHENSIVE REFERENCE
// ============================================================================

const OCR_FSMQ_KEY_FORMULAE = `
## Complete Formula Reference for OCR Additional Mathematics

### ALGEBRA

#### Quadratic Functions
- **Standard form:** $ax^2 + bx + c = 0$
- **Quadratic formula:** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- **Discriminant:** $\\Delta = b^2 - 4ac$
  - $\\Delta > 0$: Two distinct real roots
  - $\\Delta = 0$: One repeated real root (line touches curve)
  - $\\Delta < 0$: No real roots (line misses curve)
- **Completed square form:** $a(x + p)^2 + q$ where vertex is $(-p, q)$
- **Sum of roots:** $\\alpha + \\beta = -\\frac{b}{a}$
- **Product of roots:** $\\alpha\\beta = \\frac{c}{a}$

#### Factor Theorem and Remainder Theorem
- **Factor Theorem:** If $f(a) = 0$, then $(x - a)$ is a factor of $f(x)$
- **Remainder Theorem:** When $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$
- **For divisor $(ax - b)$:** Remainder is $f(\\frac{b}{a})$

#### Polynomial Division
- If $f(x) = (x - a) \\cdot q(x) + r$
- Where $q(x)$ is the quotient and $r$ is the remainder
- Degree of quotient = degree of $f(x)$ - 1

#### Algebraic Fractions
- **Addition/Subtraction:** Find common denominator
- **Multiplication:** $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$
- **Division:** $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$

#### Indices Laws
- $a^m \\times a^n = a^{m+n}$
- $a^m \\div a^n = a^{m-n}$
- $(a^m)^n = a^{mn}$
- $a^0 = 1$
- $a^{-n} = \\frac{1}{a^n}$
- $a^{\\frac{1}{n}} = \\sqrt[n]{a}$
- $a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$

### COORDINATE GEOMETRY

#### Straight Lines
- **Gradient:** $m = \\frac{y_2 - y_1}{x_2 - x_1}$
- **Distance:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
- **Midpoint:** $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$
- **Equation forms:**
  - Gradient-intercept: $y = mx + c$
  - Point-gradient: $y - y_1 = m(x - x_1)$
  - General form: $ax + by + c = 0$
- **Parallel lines:** Same gradient ($m_1 = m_2$)
- **Perpendicular lines:** $m_1 \\times m_2 = -1$

#### Circles
- **Standard form:** $(x - a)^2 + (y - b)^2 = r^2$
  - Centre: $(a, b)$
  - Radius: $r$
- **General form:** $x^2 + y^2 + 2gx + 2fy + c = 0$
  - Centre: $(-g, -f)$
  - Radius: $\\sqrt{g^2 + f^2 - c}$
  - Exists only if $g^2 + f^2 - c > 0$

#### Circle Properties
- Tangent is perpendicular to radius at point of contact
- Perpendicular from centre to chord bisects the chord
- Angle in semicircle is 90°

### TRIGONOMETRY

#### Basic Ratios
- $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$
- $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$
- $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{\\sin\\theta}{\\cos\\theta}$

#### Fundamental Identity
- $\\sin^2\\theta + \\cos^2\\theta = 1$
- Rearranged: $\\sin^2\\theta = 1 - \\cos^2\\theta$
- Rearranged: $\\cos^2\\theta = 1 - \\sin^2\\theta$

#### Sine Rule
- $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
- Use when you know:
  - Two angles and one side (AAS)
  - Two sides and non-included angle (SSA) - ambiguous case possible

#### Cosine Rule
- **Finding a side:** $a^2 = b^2 + c^2 - 2bc\\cos A$
- **Finding an angle:** $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$
- Use when you know:
  - Two sides and included angle (SAS)
  - Three sides (SSS)

#### Area of Triangle
- $\\text{Area} = \\frac{1}{2}ab\\sin C$
- (Half × two sides × sine of included angle)

#### Exact Values
| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|-------|---------|---------|---------|
| 0° | 0 | 1 | 0 |
| 30° | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |
| 45° | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | 1 |
| 60° | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |
| 90° | 1 | 0 | undefined |

#### CAST Diagram
- **A**ll positive in 1st quadrant (0° to 90°)
- **S**in positive in 2nd quadrant (90° to 180°)
- **T**an positive in 3rd quadrant (180° to 270°)
- **C**os positive in 4th quadrant (270° to 360°)

### CALCULUS

#### Differentiation
- **Power rule:** $\\frac{d}{dx}(x^n) = nx^{n-1}$
- **Constant multiple:** $\\frac{d}{dx}(kf(x)) = k\\frac{d}{dx}f(x)$
- **Sum/Difference:** $\\frac{d}{dx}(f(x) \\pm g(x)) = f'(x) \\pm g'(x)$
- **Constant:** $\\frac{d}{dx}(c) = 0$

#### Applications of Differentiation
- **Gradient of curve:** $\\frac{dy}{dx}$ at a point
- **Tangent equation:** $y - y_1 = m(x - x_1)$ where $m = \\frac{dy}{dx}$
- **Normal equation:** Gradient $= -\\frac{1}{m}$
- **Stationary points:** Where $\\frac{dy}{dx} = 0$
- **Nature of stationary points:**
  - $\\frac{d^2y}{dx^2} > 0$: Minimum
  - $\\frac{d^2y}{dx^2} < 0$: Maximum
  - $\\frac{d^2y}{dx^2} = 0$: Test inconclusive (use gradient test)

#### Integration
- **Power rule:** $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + c$ (where $n \\neq -1$)
- **Constant multiple:** $\\int kf(x) \\, dx = k\\int f(x) \\, dx$
- **Sum/Difference:** $\\int (f(x) \\pm g(x)) \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$
- **Constant:** $\\int k \\, dx = kx + c$

#### Definite Integration
- $\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$
- **Area under curve:** $\\int_a^b y \\, dx$ (positive when above x-axis)
- **Area between curves:** $\\int_a^b (f(x) - g(x)) \\, dx$ where $f(x) > g(x)$

#### Kinematics
- **Velocity:** $v = \\frac{ds}{dt}$
- **Acceleration:** $a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$
- **Displacement from velocity:** $s = \\int v \\, dt$
- **Velocity from acceleration:** $v = \\int a \\, dt$

### EXPONENTIALS AND LOGARITHMS

#### Exponential Functions
- $a^x$ where $a > 0$, $a \\neq 1$
- $y = a^x$ passes through $(0, 1)$
- Asymptote at $y = 0$ for $a > 1$

#### Logarithms
- Definition: $a^x = b \\Leftrightarrow x = \\log_a b$
- $\\log_a 1 = 0$ (since $a^0 = 1$)
- $\\log_a a = 1$ (since $a^1 = a$)

#### Logarithm Laws
- $\\log_a(xy) = \\log_a x + \\log_a y$
- $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$
- $\\log_a(x^n) = n\\log_a x$
- **Change of base:** $\\log_a x = \\frac{\\log_b x}{\\log_b a}$

#### Solving Exponential Equations
- Method 1: Take logarithms of both sides
- Method 2: Change to same base if possible
- For $a^{f(x)} = b$: $f(x) = \\log_a b = \\frac{\\ln b}{\\ln a}$

### SEQUENCES AND SERIES

#### Arithmetic Sequences
- **nth term:** $u_n = a + (n-1)d$
  - $a$ = first term
  - $d$ = common difference
- **Sum of n terms:** $S_n = \\frac{n}{2}(2a + (n-1)d) = \\frac{n}{2}(a + l)$
  - $l$ = last term

#### Geometric Sequences
- **nth term:** $u_n = ar^{n-1}$
  - $a$ = first term
  - $r$ = common ratio
- **Sum of n terms:** $S_n = \\frac{a(1-r^n)}{1-r} = \\frac{a(r^n-1)}{r-1}$
- **Sum to infinity:** $S_\\infty = \\frac{a}{1-r}$ (only when $|r| < 1$)

### BINOMIAL EXPANSION

#### Binomial Theorem
$(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$

#### Binomial Coefficients
$\\binom{n}{r} = \\frac{n!}{r!(n-r)!} = ^nC_r$

#### Pascal's Triangle
Row n gives coefficients for $(a+b)^n$:
- Row 0: 1
- Row 1: 1, 1
- Row 2: 1, 2, 1
- Row 3: 1, 3, 3, 1
- Row 4: 1, 4, 6, 4, 1
- Row 5: 1, 5, 10, 10, 5, 1

#### General Term
The $(r+1)$th term in $(a+b)^n$ is $\\binom{n}{r}a^{n-r}b^r$

### INEQUALITIES

#### Linear Inequalities
- Solve like equations BUT reverse inequality when multiplying/dividing by negative

#### Quadratic Inequalities
1. Factorise and find roots
2. Sketch parabola
3. Identify required region
- $ax^2 + bx + c > 0$: Above x-axis
- $ax^2 + bx + c < 0$: Below x-axis
`;

// ============================================================================
// TOPIC-SPECIFIC DETAILED GUIDANCE
// ============================================================================

const OCR_FSMQ_TOPIC_GUIDANCE: Record<string, string> = {
  'fm-gcse-ocr-algebra': `## Algebra - Comprehensive Topic Guidance

### Factor Theorem
**Definition:** If $f(a) = 0$, then $(x - a)$ is a factor of $f(x)$

**Application Process:**
1. Substitute the value into the polynomial
2. If result is zero, confirm $(x - a)$ is a factor
3. Use to find factors systematically

**Common Question Types:**
- "Show that $(x - 2)$ is a factor of $f(x) = x^3 - 5x^2 + 2x + 8$"
- "Given that $(x + 1)$ is a factor of $x^3 + ax^2 - x - 6$, find $a$"
- "Factorise $f(x)$ completely given that $f(2) = 0$"

**Systematic Factor Finding:**
Try factors of the constant term. For $x^3 + 2x^2 - 5x - 6$:
- Constant term is -6
- Try $x = \\pm1, \\pm2, \\pm3, \\pm6$
- $f(1) = 1 + 2 - 5 - 6 = -8 \\neq 0$
- $f(-1) = -1 + 2 + 5 - 6 = 0$ ✓
- So $(x + 1)$ is a factor

### Remainder Theorem
**Definition:** When $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$

**For Linear Divisors $(ax + b)$:**
- Remainder when dividing by $(ax + b)$ is $f(-\\frac{b}{a})$

**Common Question Types:**
- "Find the remainder when $x^3 + 2x^2 - x + 3$ is divided by $(x - 2)$"
- "Given that the remainder is 5, find the value of $k$"

### Polynomial Division
**Method - Algebraic Long Division:**
1. Divide leading term of dividend by leading term of divisor
2. Multiply divisor by this result
3. Subtract from dividend
4. Repeat with remainder

**Method - Comparing Coefficients:**
If $x^3 + 2x^2 - 5x - 6 = (x + 1)(ax^2 + bx + c)$
- Expand right side
- Compare coefficients of each power of x
- Solve for a, b, c

### Algebraic Manipulation
**Simplifying Algebraic Fractions:**
1. Factorise numerator and denominator
2. Cancel common factors
3. State any restrictions on x

**Adding/Subtracting Algebraic Fractions:**
1. Find common denominator (usually product or LCM)
2. Express each fraction with common denominator
3. Add/subtract numerators
4. Simplify result

**Solving Equations with Algebraic Fractions:**
1. Multiply through by common denominator
2. Solve resulting equation
3. Check solutions don't make denominator zero

### Indices and Surds
**Manipulating Surds:**
- $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$
- $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$
- $(\\sqrt{a})^2 = a$

**Rationalising Denominators:**
- For $\\frac{1}{\\sqrt{a}}$: Multiply by $\\frac{\\sqrt{a}}{\\sqrt{a}}$
- For $\\frac{1}{a + \\sqrt{b}}$: Multiply by $\\frac{a - \\sqrt{b}}{a - \\sqrt{b}}$
- For $\\frac{1}{\\sqrt{a} + \\sqrt{b}}$: Multiply by $\\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}}$

### Common Errors to Avoid
- Forgetting to check all potential factors systematically
- Sign errors in factor theorem: $(x - 2)$ means substitute $x = 2$, not $x = -2$
- Not fully factorising (stopping at one factor)
- Division errors in polynomial division
- Forgetting restrictions when cancelling algebraic fractions`,

  'fm-gcse-ocr-equations': `## Equations - Comprehensive Topic Guidance

### Quadratic Equations
**Three Main Methods:**

**1. Factorisation:**
- Works when factors are "nice" integers or simple fractions
- Set each factor equal to zero
- Example: $x^2 - 5x + 6 = 0 \\Rightarrow (x-2)(x-3) = 0 \\Rightarrow x = 2$ or $x = 3$

**2. Completing the Square:**
- Always works, gives exact answers
- Process: $ax^2 + bx + c = a(x + \\frac{b}{2a})^2 - \\frac{b^2}{4a} + c$
- Useful for finding vertex of parabola
- Required for deriving circle equations

**3. Quadratic Formula:**
- Always works: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$
- Use when factorisation is not obvious
- Essential when discriminant is not a perfect square

### The Discriminant
**Definition:** $\\Delta = b^2 - 4ac$

**Interpretation:**
| Discriminant | Nature of Roots | Graphical Meaning |
|--------------|-----------------|-------------------|
| $\\Delta > 0$ | Two distinct real roots | Parabola crosses x-axis twice |
| $\\Delta = 0$ | One repeated real root | Parabola touches x-axis once |
| $\\Delta < 0$ | No real roots | Parabola doesn't cross x-axis |

**Applications:**
- Finding conditions for tangency (line touches curve)
- Determining when equations have solutions
- "Show that the equation has no real roots"
- "Find values of k for which..."

**Setting Up Discriminant Problems:**
1. Form the equation (often by equating line and curve)
2. Rearrange to standard form $ax^2 + bx + c = 0$
3. Identify a, b, c (may contain parameter k)
4. Apply discriminant condition
5. Solve resulting inequality or equation

### Simultaneous Equations
**Linear and Quadratic:**
1. From linear equation, express one variable in terms of other
2. Substitute into quadratic equation
3. Solve resulting quadratic
4. Find corresponding values of other variable

**Two Quadratics:**
1. Eliminate one variable by subtraction
2. Solve resulting equation
3. Substitute back

**Interpreting Solutions:**
- Two solutions: Line crosses curve at two points
- One (repeated) solution: Line is tangent to curve
- No real solutions: Line doesn't meet curve

### Forming Equations
**From Word Problems:**
1. Define variables clearly
2. Form expressions from given information
3. Set up equation or system
4. Solve and interpret in context

**Quadratic from Roots:**
- If roots are $\\alpha$ and $\\beta$:
- $x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0$

### Disguised Quadratics
**Recognition:**
- $x^4 - 5x^2 + 4 = 0$ (let $u = x^2$)
- $2^{2x} - 5 \\times 2^x + 4 = 0$ (let $u = 2^x$)
- $\\sin^2\\theta - \\sin\\theta - 2 = 0$ (let $u = \\sin\\theta$)

**Process:**
1. Identify substitution
2. Solve quadratic in new variable
3. Substitute back
4. Solve for original variable

### Common Errors to Avoid
- Forgetting to find both values when solving simultaneous equations
- Sign errors in completing the square
- Forgetting $\\pm$ when taking square roots
- Not checking solutions in original equations
- Errors in identifying a, b, c from rearranged equations`,

  'fm-gcse-ocr-straight-lines': `## Straight Lines - Comprehensive Topic Guidance

### Finding Gradient
**From Two Points:**
$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$

**From Equation $y = mx + c$:**
- Gradient is the coefficient of x

**From Equation $ax + by + c = 0$:**
- Rearrange to $y = mx + c$ form
- Or use $m = -\\frac{a}{b}$

### Equation of a Line
**Given gradient m and point $(x_1, y_1)$:**
$y - y_1 = m(x - x_1)$

**Given two points:**
1. Find gradient using gradient formula
2. Use point-gradient form with either point

**Given gradient and y-intercept:**
$y = mx + c$ directly

### Parallel and Perpendicular Lines
**Parallel Lines:**
- Same gradient: $m_1 = m_2$
- Example: Line parallel to $y = 2x + 3$ has gradient 2

**Perpendicular Lines:**
- Product of gradients is -1: $m_1 \\times m_2 = -1$
- Or: $m_2 = -\\frac{1}{m_1}$ (negative reciprocal)
- Example: Line perpendicular to $y = 2x + 3$ has gradient $-\\frac{1}{2}$

### Distance and Midpoint
**Distance Between Points:**
$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

**Midpoint:**
$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$

### Finding Intersections
**Line with Line:**
- Solve simultaneous equations
- If parallel (same gradient), no intersection or infinite (same line)

**Line with Curve:**
- Substitute line equation into curve equation
- Solve resulting equation
- Find corresponding coordinates

### Common Problem Types

**1. Finding Perpendicular Bisector:**
- Find midpoint of two points
- Find gradient of line joining points
- Perpendicular gradient = negative reciprocal
- Use point-gradient form with midpoint

**2. Finding Equation of Tangent to Circle:**
- Tangent is perpendicular to radius at point of contact
- Find gradient of radius (centre to point)
- Perpendicular gradient for tangent
- Use point-gradient form

**3. Finding Where Lines Meet Axes:**
- x-intercept: Set $y = 0$, solve for x
- y-intercept: Set $x = 0$, solve for y

**4. Area of Triangle with Vertices:**
- Use $\\text{Area} = \\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$
- Or use base × height with coordinate geometry

### Common Errors to Avoid
- Confusing gradient formula (rise/run vs run/rise)
- Sign errors in negative reciprocal
- Using wrong point when finding equation
- Forgetting that vertical lines have undefined gradient
- Arithmetic errors with fractions in gradients`,

  'fm-gcse-ocr-circles': `## Circles - Comprehensive Topic Guidance

### Circle Equations
**Standard Form:** $(x - a)^2 + (y - b)^2 = r^2$
- Centre: $(a, b)$
- Radius: $r$

**General Form:** $x^2 + y^2 + 2gx + 2fy + c = 0$
- Centre: $(-g, -f)$
- Radius: $\\sqrt{g^2 + f^2 - c}$

**Converting General to Standard:**
1. Group x terms and y terms
2. Complete the square for each
3. Rearrange to standard form
4. Identify centre and radius

**Example:**
$x^2 + y^2 - 4x + 6y - 12 = 0$
$(x^2 - 4x) + (y^2 + 6y) = 12$
$(x - 2)^2 - 4 + (y + 3)^2 - 9 = 12$
$(x - 2)^2 + (y + 3)^2 = 25$
Centre $(2, -3)$, radius $5$

### Circle and Line Intersections
**Method:**
1. Substitute line equation into circle equation
2. Solve resulting quadratic
3. Interpret discriminant:
   - $\\Delta > 0$: Two intersection points
   - $\\Delta = 0$: Line is tangent (one point)
   - $\\Delta < 0$: Line doesn't meet circle

### Tangent to Circle
**Key Property:** Tangent is perpendicular to radius at point of contact

**Finding Tangent Equation:**
1. Find gradient of radius (centre to point)
2. Tangent gradient = negative reciprocal
3. Use point-gradient form with point of contact

**Finding Point of Contact:**
- If tangent from external point: Use perpendicular distance = radius
- Or substitute tangent equation, use $\\Delta = 0$

### Normal to Circle
- Normal passes through centre
- Normal gradient = radius gradient
- Use point-gradient form

### Finding Tangent from External Point
**Method 1 - Using Perpendicular Distance:**
1. Let tangent have equation $y - y_1 = m(x - x_1)$
2. Distance from centre to line = radius
3. Solve for m (two solutions usually)

**Method 2 - Using Circle Geometry:**
1. Let P be external point, C be centre
2. Tangent length = $\\sqrt{PC^2 - r^2}$
3. Use this with coordinates to find tangent points

### Chord Properties
**Perpendicular Bisector of Chord:**
- Passes through centre
- Useful for finding centre given chord

**Chord Length:**
- Use Pythagoras with radius and perpendicular distance from centre

### Common Problem Types

**1. Show a line is tangent:**
- Substitute into circle equation
- Show discriminant = 0

**2. Find tangent at given point:**
- Verify point is on circle
- Find gradient using perpendicular to radius
- Write equation

**3. Find centre/radius from three points:**
- All three points satisfy circle equation
- Set up three equations
- Solve simultaneously

**4. Circle through origin:**
- $c = 0$ in general form
- Equation: $x^2 + y^2 + 2gx + 2fy = 0$

### Common Errors to Avoid
- Sign errors when reading centre from standard form: $(x - a)^2$ means centre has x-coordinate $+a$
- Forgetting to take square root for radius
- Errors in completing the square
- Using radius gradient for tangent instead of perpendicular`,

  'fm-gcse-ocr-trigonometry': `## Trigonometry - Comprehensive Topic Guidance

### Trigonometric Identities
**Fundamental Identity:**
$\\sin^2\\theta + \\cos^2\\theta = 1$

**Derived Forms:**
- $\\sin^2\\theta = 1 - \\cos^2\\theta$
- $\\cos^2\\theta = 1 - \\sin^2\\theta$

**Quotient Identity:**
$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$

**Using Identities to Simplify:**
- Replace $\\sin^2\\theta$ with $1 - \\cos^2\\theta$ to get equation in $\\cos$ only
- Replace $\\cos^2\\theta$ with $1 - \\sin^2\\theta$ to get equation in $\\sin$ only
- Replace $\\tan\\theta$ with $\\frac{\\sin\\theta}{\\cos\\theta}$ and multiply through

### Solving Trigonometric Equations

**Basic Equations ($\\sin\\theta = k$, etc.):**
1. Find principal value using inverse function
2. Use CAST diagram or symmetry for other solutions
3. Add/subtract periods to find all solutions in range

**Symmetry Properties:**
- $\\sin(180° - \\theta) = \\sin\\theta$
- $\\cos(360° - \\theta) = \\cos\\theta$
- $\\tan(180° + \\theta) = \\tan\\theta$

**CAST Diagram:**
- Quadrant 1 (0°-90°): All positive
- Quadrant 2 (90°-180°): Sin positive
- Quadrant 3 (180°-270°): Tan positive
- Quadrant 4 (270°-360°): Cos positive

**Quadratic Trigonometric Equations:**
1. Recognise quadratic form (may need identity first)
2. Let $u = \\sin\\theta$ (or cos/tan)
3. Solve quadratic in $u$
4. Convert back: solve $\\sin\\theta = $ each solution
5. Check solutions are valid (e.g., $-1 \\leq \\sin\\theta \\leq 1$)

### Sine and Cosine Rules

**Sine Rule:**
$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$

**When to Use Sine Rule:**
- Two angles and one side (AAS)
- Two sides and non-included angle (SSA) - beware ambiguous case

**Cosine Rule:**
- Finding side: $a^2 = b^2 + c^2 - 2bc\\cos A$
- Finding angle: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$

**When to Use Cosine Rule:**
- Two sides and included angle (SAS)
- Three sides (SSS)

### Area of Triangle
$\\text{Area} = \\frac{1}{2}ab\\sin C$

**Interpretation:** Half × two sides × sine of included angle

### Ambiguous Case (SSA)
When given two sides and non-included angle:
- May have 0, 1, or 2 possible triangles
- Use sine rule and check if angle could be obtuse or acute

### Bearings
- Measured clockwise from North
- Always three figures (e.g., 045°, 270°)
- Draw clear diagrams with North lines

### Problem-Solving with Trigonometry
**General Approach:**
1. Draw clear diagram
2. Mark known sides and angles
3. Identify what to find
4. Choose appropriate rule
5. Calculate and check reasonableness

**3D Problems:**
- Often involve right-angled triangles within the figure
- Work in stages: find intermediate values
- Pythagoras and basic trig often sufficient

### Common Errors to Avoid
- Calculator in wrong mode (degrees vs radians)
- Missing solutions in given range
- Not recognising quadratic form
- Choosing wrong rule for given information
- Sign errors with CAST diagram
- Forgetting ambiguous case with sine rule`,

  'fm-gcse-ocr-differentiation': `## Differentiation - Comprehensive Topic Guidance

### Basic Differentiation Rules

**Power Rule:**
$\\frac{d}{dx}(x^n) = nx^{n-1}$

**Applies to any power including:**
- Positive integers: $\\frac{d}{dx}(x^5) = 5x^4$
- Negative integers: $\\frac{d}{dx}(x^{-2}) = -2x^{-3}$
- Fractions: $\\frac{d}{dx}(x^{\\frac{1}{2}}) = \\frac{1}{2}x^{-\\frac{1}{2}}$
- Zero: $\\frac{d}{dx}(x^0) = \\frac{d}{dx}(1) = 0$

**Constant Multiple Rule:**
$\\frac{d}{dx}(kf(x)) = k\\frac{d}{dx}(f(x))$

**Sum/Difference Rule:**
$\\frac{d}{dx}(f(x) \\pm g(x)) = \\frac{d}{dx}(f(x)) \\pm \\frac{d}{dx}(g(x))$

### Preparing Functions for Differentiation
Before differentiating, rewrite in the form $ax^n$:

- $\\frac{3}{x^2} = 3x^{-2}$
- $\\sqrt{x} = x^{\\frac{1}{2}}$
- $\\frac{5}{\\sqrt{x}} = 5x^{-\\frac{1}{2}}$
- $\\frac{x^2 + 3x}{x} = x + 3$ (simplify first)

### Gradient of a Curve
The derivative $\\frac{dy}{dx}$ gives the gradient of the curve at any point.

**To find gradient at specific point:**
1. Differentiate to find $\\frac{dy}{dx}$
2. Substitute the x-coordinate
3. Result is the gradient at that point

### Equations of Tangent and Normal

**Tangent:**
- Gradient = $\\frac{dy}{dx}$ at the point
- Equation: $y - y_1 = m(x - x_1)$

**Normal:**
- Gradient = $-\\frac{1}{m}$ (perpendicular to tangent)
- Equation: $y - y_1 = -\\frac{1}{m}(x - x_1)$

### Stationary Points

**Finding Stationary Points:**
1. Differentiate to find $\\frac{dy}{dx}$
2. Set $\\frac{dy}{dx} = 0$
3. Solve for x
4. Find corresponding y values

**Determining Nature:**

**Second Derivative Test:**
1. Find $\\frac{d^2y}{dx^2}$
2. Substitute x-coordinate of stationary point
3. Interpret:
   - $\\frac{d^2y}{dx^2} > 0$: Minimum
   - $\\frac{d^2y}{dx^2} < 0$: Maximum
   - $\\frac{d^2y}{dx^2} = 0$: Test inconclusive

**First Derivative Test (when second derivative is 0):**
- Check sign of $\\frac{dy}{dx}$ either side of stationary point
- +ve to -ve: Maximum
- -ve to +ve: Minimum
- Same sign both sides: Point of inflection

### Increasing and Decreasing Functions
- Function is increasing where $\\frac{dy}{dx} > 0$
- Function is decreasing where $\\frac{dy}{dx} < 0$

### Optimisation Problems

**General Method:**
1. Define variables and write expression for quantity to optimise
2. Use constraints to write in terms of one variable
3. Differentiate and set equal to zero
4. Solve for critical values
5. Verify maximum/minimum (second derivative or context)
6. Answer the question (often need to find other quantities)

**Common Contexts:**
- Maximum area for given perimeter
- Minimum surface area for given volume
- Maximum volume for given material
- Minimum cost problems

### Connected Rates of Change
Using chain rule principle:
$\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$

### Common Errors to Avoid
- Forgetting to bring down the power
- Not reducing the power by 1
- Errors with negative and fractional indices
- Forgetting to differentiate the constant term (gives 0)
- Not simplifying before differentiating
- Confusing gradient of curve with gradient of tangent (they're the same!)
- Sign errors in second derivative test interpretation`,

  'fm-gcse-ocr-integration': `## Integration - Comprehensive Topic Guidance

### Basic Integration Rules

**Power Rule:**
$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + c$ (where $n \\neq -1$)

**Important:** Integration is the reverse of differentiation

**Constant Multiple Rule:**
$\\int kf(x) \\, dx = k\\int f(x) \\, dx$

**Sum/Difference Rule:**
$\\int (f(x) \\pm g(x)) \\, dx = \\int f(x) \\, dx \\pm \\int g(x) \\, dx$

### Preparing Functions for Integration
Rewrite in the form $ax^n$ before integrating:

- $\\frac{4}{x^3} = 4x^{-3} \\rightarrow \\int 4x^{-3} dx = \\frac{4x^{-2}}{-2} + c = -\\frac{2}{x^2} + c$
- $3\\sqrt{x} = 3x^{\\frac{1}{2}} \\rightarrow \\int 3x^{\\frac{1}{2}} dx = \\frac{3x^{\\frac{3}{2}}}{\\frac{3}{2}} + c = 2x^{\\frac{3}{2}} + c$

### The Constant of Integration
- Indefinite integrals always include $+ c$
- Represents vertical translation of the family of curves
- Can find $c$ if given a point on the curve

**Finding the Constant:**
If $\\frac{dy}{dx} = 2x$ and the curve passes through $(1, 5)$:
$y = \\int 2x \\, dx = x^2 + c$
$5 = 1^2 + c$
$c = 4$
So $y = x^2 + 4$

### Definite Integration

**Notation and Calculation:**
$\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$

**Process:**
1. Integrate to find $F(x)$ (no $+ c$ needed)
2. Substitute upper limit: $F(b)$
3. Substitute lower limit: $F(a)$
4. Subtract: $F(b) - F(a)$

### Area Under a Curve

**Basic Formula:**
Area $= \\int_a^b y \\, dx$ (where $y \\geq 0$)

**Important Considerations:**
- Area below x-axis gives negative integral
- Take absolute value for actual area
- Split integral at x-intercepts if curve crosses axis

**Area Below x-axis:**
$\\text{Area} = \\left|\\int_a^b y \\, dx\\right|$

### Area Between Curves

**Formula:**
Area $= \\int_a^b (f(x) - g(x)) \\, dx$

where $f(x) > g(x)$ (upper curve minus lower curve)

**Process:**
1. Find intersection points (set $f(x) = g(x)$)
2. Identify which curve is upper/lower in the region
3. Set up integral: $\\int$ (upper $-$ lower) $dx$
4. Evaluate

### Area Between Curve and y-axis

**Method 1:** Use $x = f(y)$ and integrate with respect to $y$
$\\text{Area} = \\int_{y_1}^{y_2} x \\, dy$

**Method 2:** Use areas of rectangles minus area under curve

### Integration in Kinematics

**From velocity to displacement:**
$s = \\int v \\, dt$

**From acceleration to velocity:**
$v = \\int a \\, dt$

**Finding constants:**
- Use initial conditions (at $t = 0$)
- Or other given information

### Common Problem Types

**1. Find equation of curve given gradient function:**
- Integrate $\\frac{dy}{dx}$
- Use given point to find $c$

**2. Calculate enclosed area:**
- Find limits (intersections)
- Set up appropriate integral
- Evaluate

**3. Show area equals given value:**
- Work through calculation
- Verify final answer matches

**4. Kinematics problems:**
- Identify what's given (a, v, or s)
- Integrate or differentiate as needed
- Apply initial/boundary conditions

### Common Errors to Avoid
- Forgetting $+ c$ in indefinite integration
- Adding 1 to the power but forgetting to divide by new power
- Sign errors in definite integration (especially with negatives)
- Not handling areas below x-axis correctly
- Errors with fractional and negative indices
- Forgetting to find limits of integration`,

  'fm-gcse-ocr-exponentials': `## Exponentials and Logarithms - Comprehensive Topic Guidance

### Exponential Functions

**Definition:** Functions of the form $y = a^x$ where $a > 0$, $a \\neq 1$

**Key Properties of $y = a^x$ (for $a > 1$):**
- Passes through $(0, 1)$ since $a^0 = 1$
- Asymptote at $y = 0$ (x-axis)
- Always positive ($y > 0$ for all real $x$)
- Increasing function
- As $x \\to \\infty$, $y \\to \\infty$
- As $x \\to -\\infty$, $y \\to 0$

**For $0 < a < 1$:**
- Decreasing function
- Reflection of $y = (\\frac{1}{a})^x$

### Logarithms - Definition

**Definition:** $\\log_a b = c$ means $a^c = b$

**In words:** "The logarithm base $a$ of $b$ is the power to which $a$ must be raised to give $b$"

**Key Values:**
- $\\log_a 1 = 0$ (since $a^0 = 1$)
- $\\log_a a = 1$ (since $a^1 = a$)
- $\\log_a a^n = n$
- $a^{\\log_a x} = x$

### Laws of Logarithms

**Multiplication Law:**
$\\log_a(xy) = \\log_a x + \\log_a y$

**Division Law:**
$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$

**Power Law:**
$\\log_a(x^n) = n\\log_a x$

**Change of Base:**
$\\log_a x = \\frac{\\log_b x}{\\log_b a}$

Commonly: $\\log_a x = \\frac{\\ln x}{\\ln a} = \\frac{\\log_{10} x}{\\log_{10} a}$

### Solving Exponential Equations

**Type 1: Same Base Possible**
$8^x = 32$
$2^{3x} = 2^5$
$3x = 5$
$x = \\frac{5}{3}$

**Type 2: Taking Logarithms**
$3^x = 20$
$x \\log 3 = \\log 20$
$x = \\frac{\\log 20}{\\log 3} = 2.727...$ (3 s.f.)

**Type 3: Quadratic in Disguise**
$4^x - 3 \\times 2^x - 4 = 0$
Let $u = 2^x$, so $4^x = (2^2)^x = u^2$
$u^2 - 3u - 4 = 0$
$(u-4)(u+1) = 0$
$u = 4$ or $u = -1$

Since $2^x > 0$: $2^x = 4$, so $x = 2$

### Solving Logarithmic Equations

**Type 1: Single Logarithm**
$\\log_2 x = 5$
$x = 2^5 = 32$

**Type 2: Using Log Laws to Combine**
$\\log_3 x + \\log_3 4 = 2$
$\\log_3(4x) = 2$
$4x = 3^2 = 9$
$x = \\frac{9}{4}$

**Type 3: Logarithms on Both Sides**
$2\\log_5 x = \\log_5(x + 6)$
$\\log_5 x^2 = \\log_5(x + 6)$
$x^2 = x + 6$
$x^2 - x - 6 = 0$
$(x-3)(x+2) = 0$
$x = 3$ or $x = -2$

Check: $x = -2$ invalid (can't take log of negative)
So $x = 3$

### Applications

**Exponential Growth/Decay:**
$y = Ae^{kt}$ or $y = Ab^t$
- $A$ = initial value
- $k$ or $b$ = growth/decay rate
- $t$ = time

**Half-life Problems:**
$A = A_0 \\times 2^{-\\frac{t}{T}}$
where $T$ = half-life

**Compound Interest:**
$A = P(1 + \\frac{r}{100})^n$

### Common Errors to Avoid
- Thinking $\\log(a + b) = \\log a + \\log b$ (WRONG!)
- Forgetting to check solutions in domain
- Calculator errors with log bases
- Sign errors in power rule
- Not converting to same base when possible
- Forgetting that $a^x > 0$ always`,

  'fm-gcse-ocr-binomial': `## Binomial Expansion - Comprehensive Topic Guidance

### The Binomial Theorem

**Statement:**
$(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$

**Expanded Form:**
$(a + b)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + ... + \\binom{n}{n}b^n$

### Binomial Coefficients

**Notation:**
$\\binom{n}{r} = ^nC_r = \\frac{n!}{r!(n-r)!}$

**Formula Calculation:**
$\\binom{n}{r} = \\frac{n!}{r!(n-r)!} = \\frac{n \\times (n-1) \\times ... \\times (n-r+1)}{r!}$

**Example:**
$\\binom{7}{3} = \\frac{7!}{3!4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$

**Key Properties:**
- $\\binom{n}{0} = \\binom{n}{n} = 1$
- $\\binom{n}{1} = \\binom{n}{n-1} = n$
- $\\binom{n}{r} = \\binom{n}{n-r}$ (symmetry)

### Pascal's Triangle

Each number is the sum of the two numbers above it:
\`\`\`
Row 0:           1
Row 1:          1 1
Row 2:         1 2 1
Row 3:        1 3 3 1
Row 4:       1 4 6 4 1
Row 5:      1 5 10 10 5 1
Row 6:     1 6 15 20 15 6 1
\`\`\`

Row $n$ gives coefficients for $(a+b)^n$

### The General Term

**The $(r+1)$th term in $(a + b)^n$ is:**
$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$

**Finding Specific Terms:**

**Example:** Find the term in $x^3$ in $(2 + 3x)^5$

General term: $\\binom{5}{r} (2)^{5-r} (3x)^r = \\binom{5}{r} 2^{5-r} 3^r x^r$

For $x^3$: $r = 3$

$T_4 = \\binom{5}{3} \\times 2^2 \\times 3^3 \\times x^3 = 10 \\times 4 \\times 27 \\times x^3 = 1080x^3$

Coefficient is $1080$

### Standard Expansions

**$(1 + x)^n$:**
$= 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + ...$

**$(1 - x)^n$:**
$= 1 - nx + \\frac{n(n-1)}{2!}x^2 - \\frac{n(n-1)(n-2)}{3!}x^3 + ...$

(Signs alternate)

### Common Problem Types

**1. Full Expansion:**
Expand $(2x - 3)^4$ completely

**2. Specific Term:**
Find the coefficient of $x^5$ in $(1 + 2x)^8$

**3. Constant Term:**
Find the constant term in $(x + \\frac{2}{x})^6$

**4. Term Independent of x:**
Same as finding constant term - identify when powers cancel

**5. Sum of Coefficients:**
Substitute $x = 1$ (gives $(1 + a)^n$ or similar)

### Special Cases

**$(1 + x)^n$ coefficient pattern:**
Coefficient of $x^r$ is $\\binom{n}{r}$

**Negative Sign in Binomial:**
$(a - b)^n$: alternating signs in expansion
Powers of $-b$ give: $(-b)^0 = 1$, $(-b)^1 = -b$, $(-b)^2 = b^2$, etc.

### Finding the Greatest Coefficient

**Method:**
- Ratio of consecutive terms: $\\frac{T_{r+1}}{T_r}$
- When ratio = 1, coefficients are equal
- Greatest coefficient often near middle term

### Common Errors to Avoid
- Forgetting coefficient attached to variable (e.g., $(2x)^3 = 8x^3$, not $2x^3$)
- Sign errors with $(a - b)^n$
- Miscounting which term you want ($r = 0$ gives first term)
- Calculating $\\binom{n}{r}$ incorrectly
- Forgetting to include the coefficient $a$ when asked for coefficient
- Using wrong value of $r$ for desired term`,

  'fm-gcse-ocr-sequences': `## Sequences and Series - Comprehensive Topic Guidance

### Arithmetic Sequences

**Definition:** Constant difference between consecutive terms

**nth Term Formula:**
$u_n = a + (n-1)d$

where:
- $a$ = first term
- $d$ = common difference
- $n$ = term number

**Common Difference:**
$d = u_{n+1} - u_n$ (any term minus previous term)

**Sum of First n Terms:**
$S_n = \\frac{n}{2}(2a + (n-1)d) = \\frac{n}{2}(a + l)$

where $l$ = last term

### Geometric Sequences

**Definition:** Constant ratio between consecutive terms

**nth Term Formula:**
$u_n = ar^{n-1}$

where:
- $a$ = first term
- $r$ = common ratio
- $n$ = term number

**Common Ratio:**
$r = \\frac{u_{n+1}}{u_n}$ (any term divided by previous term)

**Sum of First n Terms:**
$S_n = \\frac{a(1-r^n)}{1-r} = \\frac{a(r^n-1)}{r-1}$ (for $r \\neq 1$)

**Sum to Infinity (Convergent Series):**
$S_\\infty = \\frac{a}{1-r}$ (only when $|r| < 1$)

### Recognising Sequence Type

**Arithmetic:**
- Differences are constant
- Linear pattern when plotted
- Example: 3, 7, 11, 15, ... (d = 4)

**Geometric:**
- Ratios are constant
- Exponential pattern when plotted
- Example: 2, 6, 18, 54, ... (r = 3)

**Neither:**
- Check for other patterns
- May be quadratic ($u_n = an^2 + bn + c$)
- May be Fibonacci-type (each term sum of previous two)

### Problem Types

**1. Finding Terms:**
Given $a$ and $d$ (or $r$), find specific term

**2. Finding Position:**
Given a term value, find what position it is

**3. Finding Parameters:**
Given two terms, find $a$ and $d$ (or $r$)

**4. Sum Problems:**
Find sum of first $n$ terms, or find $n$ given sum

**5. Convergence:**
Determine if geometric series converges, find sum to infinity

### Sigma Notation

**Notation:** $\\sum_{r=1}^{n} f(r)$ means sum $f(1) + f(2) + ... + f(n)$

**Examples:**
- $\\sum_{r=1}^{5} r = 1 + 2 + 3 + 4 + 5 = 15$
- $\\sum_{r=1}^{4} 2^r = 2 + 4 + 8 + 16 = 30$
- $\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}$

### Applications

**Arithmetic:**
- Linear growth/depreciation
- Simple interest
- Regular payments

**Geometric:**
- Exponential growth/decay
- Compound interest
- Population growth
- Half-life problems

### Setting Up Equations

**From Two Terms (Arithmetic):**
If $u_3 = 11$ and $u_7 = 23$:
- $a + 2d = 11$
- $a + 6d = 23$
- Subtract: $4d = 12$, so $d = 3$
- Therefore $a = 5$

**From Two Terms (Geometric):**
If $u_2 = 6$ and $u_5 = 162$:
- $ar = 6$
- $ar^4 = 162$
- Divide: $r^3 = 27$, so $r = 3$
- Therefore $a = 2$

### Proof by Sequences

**Sum of Arithmetic Series:**
$S_n = a + (a+d) + (a+2d) + ... + (a+(n-1)d)$
$S_n = (a+(n-1)d) + (a+(n-2)d) + ... + a$ (written backwards)
$2S_n = n(2a + (n-1)d)$
$S_n = \\frac{n}{2}(2a + (n-1)d)$

### Common Errors to Avoid
- Confusing $u_n$ (nth term) with $S_n$ (sum of n terms)
- Using $n$ instead of $n-1$ in formulas
- Not checking $|r| < 1$ before using sum to infinity
- Sign errors in arithmetic sequences with negative common difference
- Using sum formula for geometric when $r = 1$
- Forgetting that $r$ can be negative or fractional`
};

// ============================================================================
// COMPREHENSIVE WORKED EXAMPLES
// ============================================================================

const OCR_FSMQ_WORKED_EXAMPLES = `## Comprehensive Worked Examples for OCR Additional Mathematics

### ALGEBRA EXAMPLES

---

#### Example 1: Factor Theorem [6 marks]
**Question:**
$f(x) = 2x^3 + x^2 - 13x + 6$
(a) Show that $(x - 2)$ is a factor of $f(x)$. [2]
(b) Hence factorise $f(x)$ completely. [4]

**Solution:**

**(a)** Testing $f(2)$:
$f(2) = 2(2)^3 + (2)^2 - 13(2) + 6$ **[M1]**
$= 2(8) + 4 - 26 + 6$
$= 16 + 4 - 26 + 6$
$= 0$ **[A1]**

Since $f(2) = 0$, by the Factor Theorem, $(x - 2)$ is a factor. ✓

**(b)** Dividing $f(x)$ by $(x - 2)$:

Using algebraic division or inspection:
$2x^3 + x^2 - 13x + 6 = (x - 2)(2x^2 + ax + b)$

Comparing coefficients:
- $x^3$: $2 = 2$ ✓
- Constant: $6 = -2b$, so $b = -3$ **[M1]**
- $x^2$: $1 = a - 4$, so $a = 5$ **[A1]**

So $f(x) = (x - 2)(2x^2 + 5x - 3)$

Factorising the quadratic:
$2x^2 + 5x - 3 = (2x - 1)(x + 3)$ **[M1]**

Therefore: $f(x) = (x - 2)(2x - 1)(x + 3)$ **[A1]** ✓

---

#### Example 2: Remainder Theorem [4 marks]
**Question:**
When $f(x) = x^3 + ax^2 - 3x + b$ is divided by $(x - 1)$, the remainder is 4.
When $f(x)$ is divided by $(x + 2)$, the remainder is -5.
Find the values of $a$ and $b$.

**Solution:**

By the Remainder Theorem:
$f(1) = 4$ and $f(-2) = -5$

$f(1) = 1 + a - 3 + b = 4$
$a + b = 6$ ... (1) **[M1]**

$f(-2) = -8 + 4a + 6 + b = -5$
$4a + b = -3$ ... (2) **[M1]**

Subtracting (1) from (2):
$3a = -9$
$a = -3$ **[A1]**

Substituting into (1):
$-3 + b = 6$
$b = 9$ **[A1]** ✓

---

### EQUATIONS EXAMPLES

---

#### Example 3: Discriminant Application [5 marks]
**Question:**
The line $y = kx + 3$ is a tangent to the curve $y = x^2 + 2x + 1$.
Find the value of $k$.

**Solution:**

For tangency, the line touches the curve at exactly one point.
Setting equal: $kx + 3 = x^2 + 2x + 1$ **[M1]**

Rearranging: $x^2 + 2x - kx + 1 - 3 = 0$
$x^2 + (2-k)x - 2 = 0$ **[A1]**

For tangency, discriminant = 0: **[M1]**
$b^2 - 4ac = 0$
$(2-k)^2 - 4(1)(-2) = 0$
$(2-k)^2 + 8 = 0$

Wait - this gives $(2-k)^2 = -8$, which has no real solution.

Let me recalculate:
$x^2 + (2-k)x - 2 = 0$
$a = 1$, $b = (2-k)$, $c = -2$

$(2-k)^2 - 4(1)(-2) = 0$
$(2-k)^2 = -8$

This is impossible, so let me recheck the original:

$kx + 3 = x^2 + 2x + 1$
$x^2 + (2-k)x + (1-3) = 0$
$x^2 + (2-k)x - 2 = 0$

Discriminant: $(2-k)^2 - 4(1)(-2) = (2-k)^2 + 8$

For this to equal zero, $(2-k)^2 = -8$, which is impossible.

**Correction:** The line cannot be tangent to this curve for any real $k$. Let me reconsider the problem setup with a different curve.

**Revised Question:**
The line $y = kx - 1$ is a tangent to the curve $y = x^2 - 4x + 5$.
Find the possible values of $k$.

**Solution:**
Setting equal: $kx - 1 = x^2 - 4x + 5$ **[M1]**
$x^2 - 4x - kx + 6 = 0$
$x^2 - (4+k)x + 6 = 0$ **[A1]**

For tangency, discriminant = 0:
$(4+k)^2 - 4(1)(6) = 0$ **[M1]**
$(4+k)^2 = 24$
$4 + k = \\pm\\sqrt{24} = \\pm 2\\sqrt{6}$ **[A1]**
$k = -4 + 2\\sqrt{6}$ or $k = -4 - 2\\sqrt{6}$ **[A1]** ✓

---

#### Example 4: Simultaneous Equations (Linear and Quadratic) [6 marks]
**Question:**
Solve the simultaneous equations:
$y = 2x + 1$
$x^2 + y^2 = 10$

**Solution:**

Substituting the linear equation into the circle equation: **[M1]**
$x^2 + (2x + 1)^2 = 10$
$x^2 + 4x^2 + 4x + 1 = 10$ **[A1]**
$5x^2 + 4x - 9 = 0$ **[A1]**

Using the quadratic formula or factorising:
$(5x + 9)(x - 1) = 0$ **[M1]**
$x = 1$ or $x = -\\frac{9}{5}$

When $x = 1$: $y = 2(1) + 1 = 3$ **[A1]**
When $x = -\\frac{9}{5}$: $y = 2(-\\frac{9}{5}) + 1 = -\\frac{18}{5} + 1 = -\\frac{13}{5}$ **[A1]**

Solutions: $(1, 3)$ and $(-\\frac{9}{5}, -\\frac{13}{5})$ ✓

---

### COORDINATE GEOMETRY EXAMPLES

---

#### Example 5: Circle and Tangent [8 marks]
**Question:**
A circle has equation $(x - 3)^2 + (y + 2)^2 = 25$.
(a) Write down the centre and radius of the circle. [2]
(b) Find the equation of the tangent to the circle at the point $(7, 1)$. [4]
(c) Show that the point $(6, -6)$ lies outside the circle. [2]

**Solution:**

**(a)** Centre: $(3, -2)$ **[B1]**
Radius: $5$ **[B1]** ✓

**(b)** Gradient of radius from $(3, -2)$ to $(7, 1)$:
$m_{radius} = \\frac{1 - (-2)}{7 - 3} = \\frac{3}{4}$ **[M1]**

Tangent is perpendicular to radius:
$m_{tangent} = -\\frac{4}{3}$ **[A1]**

Equation of tangent through $(7, 1)$:
$y - 1 = -\\frac{4}{3}(x - 7)$ **[M1]**
$3y - 3 = -4x + 28$
$4x + 3y = 31$ or $y = -\\frac{4}{3}x + \\frac{31}{3}$ **[A1]** ✓

**(c)** Distance from centre $(3, -2)$ to $(6, -6)$:
$d = \\sqrt{(6-3)^2 + (-6-(-2))^2}$ **[M1]**
$= \\sqrt{9 + 16} = \\sqrt{25} = 5$

Wait - this equals the radius, so the point is ON the circle.

**Revised:** Show $(6, -7)$ lies outside:
$d = \\sqrt{(6-3)^2 + (-7-(-2))^2}$
$= \\sqrt{9 + 25} = \\sqrt{34}$ **[A1]**

Since $\\sqrt{34} > 5$ (radius), the point lies outside the circle. ✓

---

#### Example 6: Circle - Finding Equation [6 marks]
**Question:**
The points $A(1, 3)$ and $B(7, -1)$ are the ends of a diameter of a circle.
(a) Find the equation of the circle. [4]
(b) Verify that the point $(4, -2)$ lies on the circle. [2]

**Solution:**

**(a)** Centre is midpoint of diameter:
$C = \\left(\\frac{1+7}{2}, \\frac{3+(-1)}{2}\\right) = (4, 1)$ **[M1, A1]**

Radius is half the diameter length:
$|AB| = \\sqrt{(7-1)^2 + (-1-3)^2} = \\sqrt{36 + 16} = \\sqrt{52}$ **[M1]**
$r = \\frac{\\sqrt{52}}{2} = \\frac{2\\sqrt{13}}{2} = \\sqrt{13}$

Equation: $(x - 4)^2 + (y - 1)^2 = 13$ **[A1]** ✓

**(b)** Substituting $(4, -2)$:
$(4 - 4)^2 + (-2 - 1)^2 = 0 + 9 = 9 \\neq 13$ **[M1]**

The point does NOT lie on the circle. **[A1]**

Let me verify with a point that does: Try $(7, -1)$ (point B):
$(7-4)^2 + (-1-1)^2 = 9 + 4 = 13$ ✓

---

### TRIGONOMETRY EXAMPLES

---

#### Example 7: Trigonometric Equation [7 marks]
**Question:**
Solve $2\\sin^2\\theta - \\cos\\theta - 1 = 0$ for $0° \\leq \\theta \\leq 360°$.

**Solution:**

Using the identity $\\sin^2\\theta = 1 - \\cos^2\\theta$: **[M1]**
$2(1 - \\cos^2\\theta) - \\cos\\theta - 1 = 0$
$2 - 2\\cos^2\\theta - \\cos\\theta - 1 = 0$
$-2\\cos^2\\theta - \\cos\\theta + 1 = 0$
$2\\cos^2\\theta + \\cos\\theta - 1 = 0$ **[A1]**

Let $c = \\cos\\theta$:
$2c^2 + c - 1 = 0$
$(2c - 1)(c + 1) = 0$ **[M1]**
$c = \\frac{1}{2}$ or $c = -1$ **[A1]**

For $\\cos\\theta = \\frac{1}{2}$:
$\\theta = 60°$ or $\\theta = 360° - 60° = 300°$ **[A1]**

For $\\cos\\theta = -1$:
$\\theta = 180°$ **[A1]**

Solutions: $\\theta = 60°, 180°, 300°$ **[A1]** ✓

---

#### Example 8: Sine and Cosine Rules [8 marks]
**Question:**
In triangle $ABC$, $AB = 8$ cm, $BC = 6$ cm, and angle $ABC = 50°$.
(a) Calculate the area of the triangle. [2]
(b) Calculate the length of $AC$. [3]
(c) Calculate the size of angle $BAC$. [3]

**Solution:**

**(a)** Area = $\\frac{1}{2} \\times AB \\times BC \\times \\sin(ABC)$ **[M1]**
$= \\frac{1}{2} \\times 8 \\times 6 \\times \\sin 50°$
$= 24 \\times 0.766...$
$= 18.4$ cm² (3 s.f.) **[A1]** ✓

**(b)** Using the Cosine Rule to find $AC$:
$AC^2 = AB^2 + BC^2 - 2 \\times AB \\times BC \\times \\cos(ABC)$ **[M1]**
$= 64 + 36 - 2 \\times 8 \\times 6 \\times \\cos 50°$
$= 100 - 96 \\times 0.643...$ **[A1]**
$= 100 - 61.7... = 38.3...$
$AC = \\sqrt{38.3} = 6.19$ cm (3 s.f.) **[A1]** ✓

**(c)** Using the Sine Rule:
$\\frac{BC}{\\sin(BAC)} = \\frac{AC}{\\sin(ABC)}$ **[M1]**
$\\frac{6}{\\sin(BAC)} = \\frac{6.19}{\\sin 50°}$
$\\sin(BAC) = \\frac{6 \\times \\sin 50°}{6.19}$ **[A1]**
$= \\frac{6 \\times 0.766}{6.19} = 0.742...$
$BAC = \\sin^{-1}(0.742) = 47.9°$ (3 s.f.) **[A1]** ✓

---

### CALCULUS EXAMPLES

---

#### Example 9: Differentiation and Tangent [7 marks]
**Question:**
A curve has equation $y = x^3 - 6x^2 + 9x + 2$.
(a) Find $\\frac{dy}{dx}$. [2]
(b) Find the coordinates of the stationary points. [3]
(c) Determine the nature of each stationary point. [2]

**Solution:**

**(a)** $\\frac{dy}{dx} = 3x^2 - 12x + 9$ **[M1, A1]** ✓

**(b)** At stationary points, $\\frac{dy}{dx} = 0$:
$3x^2 - 12x + 9 = 0$
$x^2 - 4x + 3 = 0$ **[M1]**
$(x - 1)(x - 3) = 0$
$x = 1$ or $x = 3$ **[A1]**

When $x = 1$: $y = 1 - 6 + 9 + 2 = 6$
When $x = 3$: $y = 27 - 54 + 27 + 2 = 2$

Stationary points: $(1, 6)$ and $(3, 2)$ **[A1]** ✓

**(c)** $\\frac{d^2y}{dx^2} = 6x - 12$ **[M1]**

At $x = 1$: $\\frac{d^2y}{dx^2} = 6 - 12 = -6 < 0$ → Maximum
At $x = 3$: $\\frac{d^2y}{dx^2} = 18 - 12 = 6 > 0$ → Minimum **[A1]** ✓

---

#### Example 10: Optimisation [9 marks]
**Question:**
A farmer has 100 metres of fencing to enclose a rectangular pen against an existing wall. The wall forms one side of the rectangle.
(a) If the width of the pen (perpendicular to wall) is $x$ metres, show that the area, $A$, is given by $A = 100x - 2x^2$. [2]
(b) Find the value of $x$ that gives the maximum area. [4]
(c) Find the maximum area. [2]
(d) Verify this is a maximum. [1]

**Solution:**

**(a)** Let width = $x$, then length along wall = $100 - 2x$ **[M1]**
(since fence covers two widths and one length)
$A = x(100 - 2x) = 100x - 2x^2$ **[A1]** ✓

**(b)** $\\frac{dA}{dx} = 100 - 4x$ **[M1]**

For maximum: $\\frac{dA}{dx} = 0$
$100 - 4x = 0$ **[M1]**
$x = 25$ **[A1]**

Check: $x$ must be positive and $100 - 2x > 0$, so $x < 50$ ✓ **[A1]**

**(c)** $A = 100(25) - 2(25)^2$ **[M1]**
$= 2500 - 1250 = 1250$ m² **[A1]** ✓

**(d)** $\\frac{d^2A}{dx^2} = -4 < 0$ → Maximum confirmed **[B1]** ✓

---

#### Example 11: Integration - Area Under Curve [8 marks]
**Question:**
The curve $y = x^2 - 4x + 3$ crosses the x-axis at $x = 1$ and $x = 3$.
(a) Sketch the curve for $0 \\leq x \\leq 4$. [2]
(b) Calculate the area enclosed between the curve and the x-axis. [4]
(c) Calculate the total area enclosed between the curve and the line $y = 3$. [2]

**Solution:**

**(a)** Parabola, minimum at $x = 2$, $y = 4 - 8 + 3 = -1$
Crosses y-axis at $(0, 3)$, crosses x-axis at $(1, 0)$ and $(3, 0)$
[Sketch showing U-shaped parabola below x-axis between 1 and 3] **[B2]** ✓

**(b)** Area = $\\left|\\int_1^3 (x^2 - 4x + 3) \\, dx\\right|$ **[M1]**

$= \\left|\\left[\\frac{x^3}{3} - 2x^2 + 3x\\right]_1^3\\right|$ **[A1]**

$= \\left|\\left(9 - 18 + 9\\right) - \\left(\\frac{1}{3} - 2 + 3\\right)\\right|$ **[M1]**

$= \\left|0 - \\frac{4}{3}\\right| = \\frac{4}{3}$ square units **[A1]** ✓

**(c)** Line $y = 3$ intersects curve where $x^2 - 4x + 3 = 3$
$x^2 - 4x = 0$
$x(x - 4) = 0$
$x = 0$ or $x = 4$

Area = $\\int_0^4 [3 - (x^2 - 4x + 3)] \\, dx$ **[M1]**
$= \\int_0^4 (4x - x^2) \\, dx$
$= \\left[2x^2 - \\frac{x^3}{3}\\right]_0^4$
$= 32 - \\frac{64}{3} = \\frac{96 - 64}{3} = \\frac{32}{3}$ square units **[A1]** ✓

---

### EXPONENTIALS AND LOGARITHMS EXAMPLES

---

#### Example 12: Solving Exponential Equations [6 marks]
**Question:**
(a) Solve $5^{2x-1} = 8$, giving your answer to 3 significant figures. [3]
(b) Solve $3^{2x} - 10 \\times 3^x + 9 = 0$. [3]

**Solution:**

**(a)** Taking logs of both sides:
$(2x - 1)\\log 5 = \\log 8$ **[M1]**
$2x - 1 = \\frac{\\log 8}{\\log 5}$ **[A1]**
$2x - 1 = \\frac{0.903}{0.699} = 1.292$
$2x = 2.292$
$x = 1.15$ (3 s.f.) **[A1]** ✓

**(b)** Let $u = 3^x$, then $3^{2x} = u^2$:
$u^2 - 10u + 9 = 0$ **[M1]**
$(u - 1)(u - 9) = 0$
$u = 1$ or $u = 9$ **[A1]**

$3^x = 1 \\Rightarrow x = 0$
$3^x = 9 = 3^2 \\Rightarrow x = 2$

Solutions: $x = 0$ and $x = 2$ **[A1]** ✓

---

#### Example 13: Logarithmic Equations [5 marks]
**Question:**
Solve $\\log_2(x + 3) + \\log_2(x - 3) = 4$.

**Solution:**

Using the addition law for logarithms: **[M1]**
$\\log_2[(x + 3)(x - 3)] = 4$
$\\log_2(x^2 - 9) = 4$ **[A1]**

Converting to exponential form:
$x^2 - 9 = 2^4 = 16$ **[M1]**
$x^2 = 25$
$x = \\pm 5$ **[A1]**

Checking validity: For $\\log_2(x - 3)$ to exist, we need $x > 3$
So $x = -5$ is rejected.

Solution: $x = 5$ **[A1]** ✓

---

### BINOMIAL EXPANSION EXAMPLES

---

#### Example 14: Finding Specific Term [5 marks]
**Question:**
(a) Find the coefficient of $x^4$ in the expansion of $(2 - 3x)^7$. [3]
(b) Find the term independent of $x$ in the expansion of $(x^2 + \\frac{2}{x})^6$. [2]

**Solution:**

**(a)** General term: $\\binom{7}{r}(2)^{7-r}(-3x)^r = \\binom{7}{r}2^{7-r}(-3)^r x^r$

For $x^4$: $r = 4$ **[M1]**

$T_5 = \\binom{7}{4} \\times 2^3 \\times (-3)^4 \\times x^4$ **[A1]**
$= 35 \\times 8 \\times 81 \\times x^4$
$= 22680x^4$

Coefficient: $22680$ **[A1]** ✓

**(b)** General term: $\\binom{6}{r}(x^2)^{6-r}(\\frac{2}{x})^r = \\binom{6}{r}x^{12-2r} \\times 2^r x^{-r}$
$= \\binom{6}{r} \\times 2^r \\times x^{12-3r}$ **[M1]**

For term independent of $x$: $12 - 3r = 0$, so $r = 4$

$T_5 = \\binom{6}{4} \\times 2^4 = 15 \\times 16 = 240$ **[A1]** ✓

---

### SEQUENCES EXAMPLES

---

#### Example 15: Arithmetic and Geometric Sequences [7 marks]
**Question:**
The first three terms of a geometric sequence are also the 1st, 4th, and 6th terms of an arithmetic sequence.
The first term of both sequences is 2 and all terms are positive.
(a) Find the common ratio of the geometric sequence. [4]
(b) Find the sum of the first 10 terms of the arithmetic sequence. [3]

**Solution:**

**(a)** Let the geometric sequence have first term $a = 2$ and ratio $r$.
Terms are: $2, 2r, 2r^2, ...$

In the arithmetic sequence with first term $2$ and difference $d$:
- 1st term: $2$
- 4th term: $2 + 3d$
- 6th term: $2 + 5d$

So: $2r = 2 + 3d$ ... (1) **[M1]**
And: $2r^2 = 2 + 5d$ ... (2)

From (1): $d = \\frac{2r - 2}{3} = \\frac{2(r-1)}{3}$

Substituting into (2):
$2r^2 = 2 + 5 \\times \\frac{2(r-1)}{3}$ **[M1]**
$6r^2 = 6 + 10(r - 1)$
$6r^2 = 6 + 10r - 10$
$6r^2 - 10r + 4 = 0$
$3r^2 - 5r + 2 = 0$ **[A1]**
$(3r - 2)(r - 1) = 0$
$r = \\frac{2}{3}$ or $r = 1$

Since we need distinct terms, $r = \\frac{2}{3}$ **[A1]** ✓

**(b)** $d = \\frac{2(\\frac{2}{3} - 1)}{3} = \\frac{2 \\times (-\\frac{1}{3})}{3} = -\\frac{2}{9}$ **[M1]**

$S_{10} = \\frac{10}{2}(2 \\times 2 + 9 \\times (-\\frac{2}{9}))$ **[M1]**
$= 5(4 - 2)$
$= 5 \\times 2 = 10$ **[A1]** ✓

---

#### Example 16: Sum to Infinity [5 marks]
**Question:**
A geometric series has first term 24 and common ratio $\\frac{2}{3}$.
(a) Find the sum to infinity of the series. [2]
(b) The sum of the first $n$ terms exceeds 71. Find the least value of $n$. [3]

**Solution:**

**(a)** $S_\\infty = \\frac{a}{1-r} = \\frac{24}{1 - \\frac{2}{3}} = \\frac{24}{\\frac{1}{3}} = 72$ **[M1, A1]** ✓

**(b)** $S_n = \\frac{24(1 - (\\frac{2}{3})^n)}{1 - \\frac{2}{3}} = 72(1 - (\\frac{2}{3})^n)$ **[M1]**

We need $S_n > 71$:
$72(1 - (\\frac{2}{3})^n) > 71$
$1 - (\\frac{2}{3})^n > \\frac{71}{72}$
$(\\frac{2}{3})^n < \\frac{1}{72}$ **[A1]**

Taking logs:
$n \\log(\\frac{2}{3}) < \\log(\\frac{1}{72})$
$n > \\frac{\\log(\\frac{1}{72})}{\\log(\\frac{2}{3})}$ (inequality reverses as $\\log(\\frac{2}{3}) < 0$)
$n > \\frac{-1.857}{-0.176} = 10.5...$

So $n = 11$ (least integer) **[A1]** ✓
`;

// ============================================================================
// MARK SCHEME CONVENTIONS
// ============================================================================

const OCR_FSMQ_MARK_SCHEME = `
## OCR FSMQ Additional Mathematics Mark Scheme Conventions

### Mark Types

| Mark | Description | Example |
|------|-------------|---------|
| **M** | Method mark | Setting up equation correctly |
| **A** | Accuracy mark | Correct numerical answer |
| **B** | Independent mark | Stating a fact or result |

### Dependency Rules
- **A marks** require preceding M marks to be earned
- **B marks** are independent (earned regardless of other marks)
- Follow-through (ft) allows marks for correct method with wrong values

### Accuracy Requirements
- Exact answers preferred unless otherwise stated
- If rounding required, typically 3 significant figures
- Angles: degrees unless radians specified
- Show clear evidence of method even for calculator use

### Common Marking Points

**Algebra:**
- M1: Correct substitution into formula
- M1: Setting up correct equation
- A1: Correct factorisation
- A1: Correct solution(s)

**Calculus:**
- M1: Correct differentiation/integration attempt
- A1: Correct derivative/integral
- M1: Setting derivative to zero
- A1: Correct x-value(s)
- A1: Correct y-value(s)

**Trigonometry:**
- M1: Correct use of identity
- M1: Correct use of sine/cosine rule
- A1: Correct intermediate value
- A1: All solutions in range

**Coordinate Geometry:**
- M1: Correct gradient calculation
- A1: Correct gradient value
- M1: Correct equation form
- A1: Correct final equation

### Quality of Written Communication (QWC)
Extended response questions assess:
- Clear mathematical reasoning
- Appropriate use of notation
- Logical structure of argument
- Accuracy in calculation

### Presentation Standards
- Working should be shown clearly
- Final answers should be clearly identified
- Units should be included where appropriate
- Exact form preferred (e.g., $\\sqrt{3}$ not $1.732$)

### Common Errors and Penalties
- Sign errors: Usually lose accuracy mark only
- Missing constant of integration: Lose A mark
- Wrong units: Usually lose final A mark
- Rounding too early: May lose accuracy
`;

// ============================================================================
// QUESTION CONSTRUCTION PRINCIPLES
// ============================================================================

const OCR_FSMQ_QUESTION_PRINCIPLES = `
## OCR FSMQ Additional Mathematics: Question Construction Principles

${OCR_FSMQ_ASSESSMENT_OBJECTIVES}

### Bridging GCSE to A-Level

OCR Additional Mathematics is designed as a transition qualification:

**Beyond GCSE:**
- Introduces calculus (not in GCSE)
- More sophisticated algebra (factor theorem, polynomial division)
- Exponentials and logarithms
- More complex trigonometry with identities
- Binomial expansion for positive integer powers

**Preparing for A-Level:**
- Builds familiarity with A-Level concepts
- Develops algebraic fluency
- Introduces mathematical proof and reasoning
- Provides calculus foundation

### Question Characteristics by Mark Range

**2-3 marks: Single Technique**
- Direct application of one method
- "Find", "Calculate", "Simplify"
- Example: Differentiate $y = 3x^4 - 2x^2 + 5x$

**4-5 marks: Two-Stage Problem**
- Requires two connected steps
- May need to identify method first
- Example: Find stationary point and determine its nature

**6-8 marks: Multi-Step Problem**
- Three or more connected steps
- Requires method selection
- May combine different topic areas
- Example: Form and solve equation from geometric situation

**9-12 marks: Extended Problem Solving**
- Complex multi-step reasoning
- "Show that" or proof required
- Real-world application/modelling
- Requires full solution with justification
- Example: Optimisation problem with proof of maximum/minimum

### Calculator Usage
- Scientific calculator permitted
- Questions designed so that:
  - Method can be shown even with calculator
  - Exact answers often expected
  - Some numerical answers require interpretation

### Question Stems and Command Words

| Command | Expectation |
|---------|-------------|
| "Find" | Calculate and state answer |
| "Show that" | Prove given result with working |
| "Hence" | Use previous result |
| "Hence or otherwise" | Previous result helps but alternatives accepted |
| "Determine" | Find with justification |
| "Verify" | Substitute and confirm |
| "Sketch" | Show key features (intercepts, shape, asymptotes) |
| "State" | Give answer without working |
| "Explain" | Give mathematical reasoning in words |
`;

// ============================================================================
// DIFFICULTY GUIDANCE
// ============================================================================

function getDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Standard Level (Grades D-C equivalent):**
- Direct application of single technique
- "Find", "Calculate", "Simplify" questions
- Familiar contexts with clear method
- Numbers work out to exact values
- 2-4 marks typical

**Examples:**
- Differentiate a polynomial
- Solve a quadratic equation
- Find gradient between two points
- Basic binomial coefficient calculation
- Simple trigonometric equation (single solution)`;

    case 'medium':
      return `**Intermediate Level (Grades C-B equivalent):**
- Two or three stage problems
- Requires some method selection
- May need to form equation from context
- Interpretation of results expected
- 4-6 marks typical

**Examples:**
- Find equation of tangent to curve
- Solve trigonometric equation (multiple solutions)
- Use factor theorem to factorise cubic
- Find area under curve
- Circle and line intersection`;

    case 'hard':
      return `**Advanced Level (Grades B-A equivalent):**
- Multi-step reasoning required
- "Show that" and proof questions
- Synthesis of multiple techniques
- Real-world modelling/optimisation
- Unfamiliar contexts
- Full justification expected
- 6-10+ marks typical

**Examples:**
- Optimisation with proof of maximum/minimum
- Complex trigonometric proof using identities
- Area between curves
- Problems combining calculus with coordinate geometry
- Exponential growth/decay with logarithmic solution`;
  }
}

function getMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 4 };
    case 'medium':
      return { min: 4, max: 6 };
    case 'hard':
      return { min: 6, max: 10 };
  }
}

// ============================================================================
// VARIETY HELPERS
// ============================================================================

function getFurtherMathsVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const mathContexts = [
    'pure algebraic manipulation',
    'geometric measurement problem',
    'rate of change application',
    'area/volume calculation',
    'optimisation scenario',
    'population growth/decay',
    'financial mathematics',
    'physics/mechanics context',
    'trigonometric modelling'
  ];

  const randomContext = mathContexts[Math.floor(Math.random() * mathContexts.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Mathematical Context:** Set the question in a ${randomContext} context

**Question Structure:** Consider using:
- Direct calculation
- "Show that" proof
- Multi-part building problem
- Given information with deduction
- Real-world application

**Approach Variety:**
- Algebraic vs numerical
- Graphical interpretation included
- Working backwards from answer
- Combining multiple techniques

IMPORTANT: Create an original question that could realistically appear on an OCR FSMQ Additional Mathematics paper. Ensure mathematical accuracy and appropriate difficulty for the specified level.`;
}

// ============================================================================
// EXPORTED FUNCTIONS
// ============================================================================

/**
 * System prompt for OCR FSMQ Additional Mathematics.
 */
export function getOCRGCSEFurtherMathsSystemPrompt(): string {
  return `You are an expert OCR FSMQ Additional Mathematics (6993) examiner and question writer with extensive experience in:
- Writing questions that bridge GCSE and A-Level mathematics
- Creating problems that test calculus, advanced algebra, and trigonometry
- Developing mark schemes following OCR conventions
- Ensuring mathematical accuracy and appropriate difficulty

${OCR_FSMQ_QUESTION_PRINCIPLES}

${OCR_FSMQ_KEY_FORMULAE}

${OCR_FSMQ_WORKED_EXAMPLES}

${OCR_FSMQ_MARK_SCHEME}

## Your Core Responsibilities

1. **Generate original, high-quality questions** that:
   - Match OCR FSMQ specification precisely
   - Test appropriate assessment objectives
   - Use correct mathematical notation
   - Have complete, accurate solutions

2. **Create authentic mark schemes** that:
   - Use M/A/B notation correctly
   - Specify method and accuracy marks clearly
   - Include alternative acceptable methods
   - Indicate where follow-through applies

3. **Ensure mathematical rigor**:
   - All working must be mathematically correct
   - Solutions must be complete and clear
   - Exact answers where appropriate
   - Proper use of mathematical terminology`;
}

/**
 * Question prompt for OCR FSMQ Additional Mathematics.
 */
export function getOCRGCSEFurtherMathsQuestionPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_FSMQ_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getDifficultyGuidance(difficulty);
  const markRange = getMarkRange(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getFurtherMathsVarietyInstructions(variety);

  return `${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate an ORIGINAL OCR FSMQ Additional Mathematics question:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** Create a fresh question not copied from past papers
2. **FSMQ STANDARD:** Beyond GCSE level, appropriate bridge to A-Level
3. **MATHEMATICAL ACCURACY:** Complete, correct solutions with all steps shown
4. **APPROPRIATE DIFFICULTY:** Match the specified mark allocation
5. **COMPLETE MARK SCHEME:** Clear criteria for every mark using M/A/B notation
6. **PROPER NOTATION:** Use LaTeX for all mathematical expressions

## Response Format (JSON)

Return a valid JSON object with these fields:

{
  "content": "Question text with LaTeX notation (use $...$ for inline, $$...$$ for display)",
  "marks": <total marks as integer>,
  "solution": "Complete step-by-step solution with all working shown",
  "markScheme": ["M1: description", "A1: description", ...],
  "diagram": <optional diagram specification - include if question requires visual>
}

${DIAGRAM_SCHEMA_DOCS}

Generate an original OCR Additional Mathematics question now:`;
}

/**
 * Compact prompt for fast generation.
 */
export function getOCRGCSEFurtherMathsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRange(difficulty);

  return `Generate an OCR FSMQ Additional Mathematics (6993) question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Difficulty: ${difficulty}
Marks: ${markRange.min}-${markRange.max}

## Key Formulae Reference
${OCR_FSMQ_KEY_FORMULAE}

## Requirements
- FSMQ standard (bridging GCSE to A-Level)
- Complete worked solution
- Mark scheme with M/A/B marks
- Use $...$ for LaTeX mathematics
- Mathematically accurate

Return JSON:
{
  "content": "question text here",
  "marks": <integer>,
  "solution": "step-by-step solution",
  "markScheme": ["M1: ...", "A1: ...", ...]
}`;
}

// ============================================================================
// ADDITIONAL WORKED EXAMPLES - ADVANCED TOPICS
// ============================================================================

const OCR_FSMQ_ADDITIONAL_EXAMPLES = `
## Additional Worked Examples - Advanced Problem Types

### KINEMATICS EXAMPLES

---

#### Example 17: Kinematics with Calculus [8 marks]
**Question:**
A particle moves in a straight line. At time $t$ seconds, its velocity $v$ m/s is given by $v = 3t^2 - 12t + 9$.
(a) Find the acceleration when $t = 2$. [3]
(b) Find the times when the particle is at rest. [2]
(c) Find the total distance travelled in the first 3 seconds. [3]

**Solution:**

**(a)** Acceleration $a = \\frac{dv}{dt}$
$a = 6t - 12$ **[M1]**

When $t = 2$:
$a = 6(2) - 12 = 12 - 12 = 0$ m/s² **[A1, A1]** ✓

**(b)** At rest when $v = 0$:
$3t^2 - 12t + 9 = 0$
$t^2 - 4t + 3 = 0$ **[M1]**
$(t - 1)(t - 3) = 0$
$t = 1$ s and $t = 3$ s **[A1]** ✓

**(c)** Displacement $s = \\int v \\, dt = \\int (3t^2 - 12t + 9) \\, dt$
$s = t^3 - 6t^2 + 9t + c$

Taking $s = 0$ when $t = 0$: $c = 0$
So $s = t^3 - 6t^2 + 9t$

At $t = 1$: $s = 1 - 6 + 9 = 4$ m
At $t = 3$: $s = 27 - 54 + 27 = 0$ m **[M1]**

The particle moves 4 m forward (0 to 1 s), then 4 m back (1 to 3 s).
Total distance = $4 + 4 = 8$ m **[A1, A1]** ✓

---

#### Example 18: Variable Acceleration [7 marks]
**Question:**
A particle starts from rest at the origin. Its acceleration at time $t$ seconds is $a = 4 - 2t$ m/s².
(a) Find the velocity as a function of time. [2]
(b) Find the maximum velocity and the time at which it occurs. [3]
(c) Find the displacement when $t = 4$. [2]

**Solution:**

**(a)** $v = \\int a \\, dt = \\int (4 - 2t) \\, dt$
$v = 4t - t^2 + c$ **[M1]**

When $t = 0$, $v = 0$ (starts from rest):
$0 = 0 - 0 + c$, so $c = 0$
$v = 4t - t^2$ **[A1]** ✓

**(b)** Maximum velocity when $\\frac{dv}{dt} = 0$:
$\\frac{dv}{dt} = 4 - 2t = 0$ **[M1]**
$t = 2$ s **[A1]**

$v_{max} = 4(2) - (2)^2 = 8 - 4 = 4$ m/s **[A1]** ✓

**(c)** $s = \\int v \\, dt = \\int (4t - t^2) \\, dt$
$s = 2t^2 - \\frac{t^3}{3} + c$

When $t = 0$, $s = 0$: $c = 0$
$s = 2t^2 - \\frac{t^3}{3}$ **[M1]**

When $t = 4$:
$s = 2(16) - \\frac{64}{3} = 32 - \\frac{64}{3} = \\frac{96 - 64}{3} = \\frac{32}{3}$ m **[A1]** ✓

---

### ADVANCED ALGEBRA EXAMPLES

---

#### Example 19: Algebraic Fractions [6 marks]
**Question:**
(a) Simplify $\\frac{x^2 - 4}{x^2 + 4x + 4} \\div \\frac{x - 2}{x + 2}$. [3]
(b) Hence solve $\\frac{x^2 - 4}{x^2 + 4x + 4} \\div \\frac{x - 2}{x + 2} = 3$. [3]

**Solution:**

**(a)** Factorising:
$\\frac{(x-2)(x+2)}{(x+2)^2} \\div \\frac{x-2}{x+2}$ **[M1]**

$= \\frac{(x-2)(x+2)}{(x+2)^2} \\times \\frac{x+2}{x-2}$ **[M1]**

$= \\frac{(x-2)(x+2)(x+2)}{(x+2)^2(x-2)}$

$= 1$ (for $x \\neq \\pm 2$) **[A1]** ✓

**(b)** From part (a): $1 = 3$

This is a contradiction, so there is **no solution**. **[M1, A1, A1]** ✓

---

#### Example 20: Completing the Square - Advanced [5 marks]
**Question:**
(a) Express $2x^2 - 12x + 23$ in the form $a(x + b)^2 + c$. [3]
(b) Hence state the minimum value of $2x^2 - 12x + 23$ and the value of $x$ at which it occurs. [2]

**Solution:**

**(a)** $2x^2 - 12x + 23$
$= 2(x^2 - 6x) + 23$ **[M1]**
$= 2(x^2 - 6x + 9 - 9) + 23$
$= 2((x - 3)^2 - 9) + 23$ **[M1]**
$= 2(x - 3)^2 - 18 + 23$
$= 2(x - 3)^2 + 5$ **[A1]** ✓

**(b)** Since $(x - 3)^2 \\geq 0$ for all real $x$,
minimum value of $2(x - 3)^2 + 5$ is $5$ **[A1]**
occurring when $x = 3$ **[A1]** ✓

---

### ADVANCED COORDINATE GEOMETRY

---

#### Example 21: Perpendicular Bisector and Circle [8 marks]
**Question:**
Points $A(2, 1)$ and $B(6, 5)$ lie on a circle with centre $C$.
The perpendicular bisector of $AB$ passes through $C$.
(a) Find the equation of the perpendicular bisector of $AB$. [4]
(b) Given that $C$ lies on the line $y = x + 1$, find the coordinates of $C$. [2]
(c) Find the equation of the circle. [2]

**Solution:**

**(a)** Midpoint of $AB$: $M = \\left(\\frac{2+6}{2}, \\frac{1+5}{2}\\right) = (4, 3)$ **[M1]**

Gradient of $AB$: $m_{AB} = \\frac{5-1}{6-2} = \\frac{4}{4} = 1$ **[M1]**

Perpendicular gradient: $m_{perp} = -1$ **[A1]**

Equation through $M(4, 3)$:
$y - 3 = -1(x - 4)$
$y = -x + 7$ or $x + y = 7$ **[A1]** ✓

**(b)** Centre $C$ lies on both $y = -x + 7$ and $y = x + 1$:
$x + 1 = -x + 7$ **[M1]**
$2x = 6$
$x = 3$, $y = 4$

$C = (3, 4)$ **[A1]** ✓

**(c)** Radius = distance from $C(3, 4)$ to $A(2, 1)$:
$r = \\sqrt{(3-2)^2 + (4-1)^2} = \\sqrt{1 + 9} = \\sqrt{10}$ **[M1]**

Equation: $(x - 3)^2 + (y - 4)^2 = 10$ **[A1]** ✓

---

### ADVANCED TRIGONOMETRY

---

#### Example 22: Proving Identities [6 marks]
**Question:**
Prove that $\\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta} = \\frac{2}{\\sin\\theta}$.

**Solution:**

LHS $= \\frac{\\sin\\theta}{1 + \\cos\\theta} + \\frac{1 + \\cos\\theta}{\\sin\\theta}$ **[M1]**

$= \\frac{\\sin^2\\theta + (1 + \\cos\\theta)^2}{\\sin\\theta(1 + \\cos\\theta)}$ **[M1]**

$= \\frac{\\sin^2\\theta + 1 + 2\\cos\\theta + \\cos^2\\theta}{\\sin\\theta(1 + \\cos\\theta)}$ **[A1]**

Using $\\sin^2\\theta + \\cos^2\\theta = 1$:
$= \\frac{1 + 1 + 2\\cos\\theta}{\\sin\\theta(1 + \\cos\\theta)}$ **[M1]**

$= \\frac{2 + 2\\cos\\theta}{\\sin\\theta(1 + \\cos\\theta)}$ **[A1]**

$= \\frac{2(1 + \\cos\\theta)}{\\sin\\theta(1 + \\cos\\theta)}$

$= \\frac{2}{\\sin\\theta}$ = RHS **[A1]** ✓

---

#### Example 23: 3D Trigonometry [7 marks]
**Question:**
A vertical mast $AB$ stands on horizontal ground. From a point $C$ on the ground, 50 m due east of $B$, the angle of elevation of $A$ is 35°. From a point $D$ on the ground, 40 m due south of $B$, the angle of elevation of $A$ is $\\theta$.
(a) Calculate the height of the mast. [2]
(b) Calculate the angle $\\theta$. [2]
(c) Calculate the angle of elevation of $A$ from a point $E$, which is 30 m due west of $B$. [3]

**Solution:**

**(a)** In triangle $ABC$:
$\\tan 35° = \\frac{AB}{50}$ **[M1]**
$AB = 50 \\tan 35° = 50 \\times 0.700 = 35.0$ m **[A1]** ✓

**(b)** In triangle $ABD$:
$\\tan\\theta = \\frac{AB}{40} = \\frac{35.0}{40}$ **[M1]**
$\\theta = \\tan^{-1}(0.875) = 41.2°$ **[A1]** ✓

**(c)** In triangle $ABE$:
$\\tan\\phi = \\frac{AB}{30} = \\frac{35.0}{30}$ **[M1]**
$= 1.167$ **[A1]**
$\\phi = \\tan^{-1}(1.167) = 49.4°$ **[A1]** ✓

---

### ADVANCED INTEGRATION

---

#### Example 24: Area Between Curves [9 marks]
**Question:**
The curves $y = x^2$ and $y = 6x - x^2$ intersect at two points.
(a) Find the coordinates of the points of intersection. [3]
(b) Sketch both curves on the same axes. [2]
(c) Find the area enclosed between the two curves. [4]

**Solution:**

**(a)** Setting equal: $x^2 = 6x - x^2$ **[M1]**
$2x^2 - 6x = 0$
$2x(x - 3) = 0$
$x = 0$ or $x = 3$ **[A1]**

When $x = 0$: $y = 0$
When $x = 3$: $y = 9$

Points: $(0, 0)$ and $(3, 9)$ **[A1]** ✓

**(b)** [Sketch showing $y = x^2$ (U-shaped) and $y = 6x - x^2$ (inverted parabola through origin and (6, 0)), intersecting at (0, 0) and (3, 9)] **[B2]** ✓

**(c)** For $0 < x < 3$: $6x - x^2 > x^2$
So upper curve is $y = 6x - x^2$

Area $= \\int_0^3 [(6x - x^2) - x^2] \\, dx$ **[M1]**
$= \\int_0^3 (6x - 2x^2) \\, dx$ **[A1]**
$= \\left[3x^2 - \\frac{2x^3}{3}\\right]_0^3$ **[M1]**
$= (27 - 18) - 0$
$= 9$ square units **[A1]** ✓

---

#### Example 25: Integration with Surds [6 marks]
**Question:**
Given that $\\frac{dy}{dx} = \\frac{3}{\\sqrt{x}} - 2\\sqrt{x}$ and that $y = 10$ when $x = 4$, find $y$ in terms of $x$.

**Solution:**

$\\frac{dy}{dx} = 3x^{-\\frac{1}{2}} - 2x^{\\frac{1}{2}}$ **[M1]**

$y = \\int (3x^{-\\frac{1}{2}} - 2x^{\\frac{1}{2}}) \\, dx$ **[M1]**

$= 3 \\times \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} - 2 \\times \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + c$

$= 6x^{\\frac{1}{2}} - \\frac{4}{3}x^{\\frac{3}{2}} + c$

$= 6\\sqrt{x} - \\frac{4}{3}x\\sqrt{x} + c$ **[A1]**

When $x = 4$, $y = 10$:
$10 = 6(2) - \\frac{4}{3}(4)(2) + c$ **[M1]**
$10 = 12 - \\frac{32}{3} + c$
$10 = \\frac{36 - 32}{3} + c$
$10 = \\frac{4}{3} + c$
$c = \\frac{26}{3}$ **[A1]**

$y = 6\\sqrt{x} - \\frac{4}{3}x\\sqrt{x} + \\frac{26}{3}$ **[A1]** ✓

---

### ADVANCED EXPONENTIALS AND LOGARITHMS

---

#### Example 26: Exponential Growth Model [8 marks]
**Question:**
The population $P$ of a colony of bacteria at time $t$ hours is modelled by $P = 500e^{0.2t}$.
(a) Find the initial population. [1]
(b) Find the population after 5 hours. [2]
(c) Find the time taken for the population to double. [3]
(d) Find the rate of growth of the population when $t = 10$. [2]

**Solution:**

**(a)** When $t = 0$: $P = 500e^0 = 500$ **[B1]** ✓

**(b)** When $t = 5$: $P = 500e^{0.2 \\times 5} = 500e^1 = 500e$ **[M1]**
$\\approx 1359$ (or $500e$) **[A1]** ✓

**(c)** For doubling: $1000 = 500e^{0.2t}$
$2 = e^{0.2t}$ **[M1]**
$\\ln 2 = 0.2t$ **[M1]**
$t = \\frac{\\ln 2}{0.2} = 5\\ln 2 \\approx 3.47$ hours **[A1]** ✓

**(d)** $\\frac{dP}{dt} = 500 \\times 0.2 \\times e^{0.2t} = 100e^{0.2t}$ **[M1]**

When $t = 10$:
$\\frac{dP}{dt} = 100e^{2} \\approx 739$ bacteria per hour **[A1]** ✓

---

#### Example 27: Logarithmic Graphs [6 marks]
**Question:**
(a) Sketch the graph of $y = \\log_2 x$, showing any asymptotes and key points. [3]
(b) The curve $y = \\log_2 x$ is transformed to give $y = \\log_2(x - 3) + 2$. Describe the transformations. [2]
(c) State the equation of the asymptote of the transformed curve. [1]

**Solution:**

**(a)** [Sketch showing:
- Curve through (1, 0), (2, 1), (4, 2)
- Vertical asymptote at $x = 0$
- Curve increasing, concave down] **[B3]** ✓

**(b)** Translation 3 units to the right **[B1]**
Translation 2 units up **[B1]** ✓

**(c)** Asymptote: $x = 3$ **[B1]** ✓

---

### COMPLEX BINOMIAL PROBLEMS

---

#### Example 28: Binomial with Negative Powers [7 marks]
**Question:**
In the expansion of $(2 + kx)(1 - 2x)^5$, the coefficient of $x^2$ is 24.
Find the possible values of $k$.

**Solution:**

First, expand $(1 - 2x)^5$:
General term: $\\binom{5}{r}(1)^{5-r}(-2x)^r = \\binom{5}{r}(-2)^r x^r$ **[M1]**

Coefficient of $x^0$: $\\binom{5}{0}(-2)^0 = 1$
Coefficient of $x^1$: $\\binom{5}{1}(-2)^1 = -10$
Coefficient of $x^2$: $\\binom{5}{2}(-2)^2 = 10 \\times 4 = 40$ **[A1]**

Now $(2 + kx)(1 - 2x)^5$:
$x^2$ term comes from:
- $2 \\times$ (coeff of $x^2$ in expansion) = $2 \\times 40 = 80$ **[M1]**
- $kx \\times$ (coeff of $x^1$ in expansion) = $k \\times (-10) = -10k$ **[M1]**

Total coefficient of $x^2$: $80 - 10k$ **[A1]**

Given this equals 24:
$80 - 10k = 24$
$10k = 56$
$k = 5.6$ **[A1, A1]** ✓

---

### PROBLEM-SOLVING EXAMPLES

---

#### Example 29: Connected Problem [10 marks]
**Question:**
A curve has equation $y = x^3 - 3x^2 - 9x + 5$.
(a) Find the coordinates of the stationary points and determine their nature. [6]
(b) Find the equation of the normal to the curve at the point where $x = 2$. [4]

**Solution:**

**(a)** $\\frac{dy}{dx} = 3x^2 - 6x - 9$ **[M1]**

Stationary points: $3x^2 - 6x - 9 = 0$
$x^2 - 2x - 3 = 0$
$(x - 3)(x + 1) = 0$
$x = 3$ or $x = -1$ **[A1]**

When $x = 3$: $y = 27 - 27 - 27 + 5 = -22$
When $x = -1$: $y = -1 - 3 + 9 + 5 = 10$ **[A1]**

$\\frac{d^2y}{dx^2} = 6x - 6$ **[M1]**

At $x = 3$: $\\frac{d^2y}{dx^2} = 12 > 0$ → Minimum at $(3, -22)$
At $x = -1$: $\\frac{d^2y}{dx^2} = -12 < 0$ → Maximum at $(-1, 10)$ **[A1, A1]** ✓

**(b)** When $x = 2$:
$y = 8 - 12 - 18 + 5 = -17$
$\\frac{dy}{dx} = 12 - 12 - 9 = -9$ **[M1]**

Normal gradient = $\\frac{1}{9}$ **[A1]**

Normal equation:
$y - (-17) = \\frac{1}{9}(x - 2)$ **[M1]**
$9y + 153 = x - 2$
$x - 9y - 155 = 0$ or $y = \\frac{1}{9}x - \\frac{155}{9}$ **[A1]** ✓

---

#### Example 30: Real-World Application [9 marks]
**Question:**
The profit $P$ (in £1000s) made by a company in month $t$ is modelled by
$P = 20 + 15\\sin\\left(\\frac{\\pi t}{6}\\right)$
where $t = 0$ corresponds to January.
(a) Find the profit in April. [2]
(b) Find the months when the profit is £27,500. [4]
(c) Find the maximum and minimum profit, stating when they occur. [3]

**Solution:**

**(a)** April: $t = 3$
$P = 20 + 15\\sin\\left(\\frac{3\\pi}{6}\\right) = 20 + 15\\sin\\left(\\frac{\\pi}{2}\\right)$ **[M1]**
$= 20 + 15(1) = 35$ (£35,000) **[A1]** ✓

**(b)** $27.5 = 20 + 15\\sin\\left(\\frac{\\pi t}{6}\\right)$
$7.5 = 15\\sin\\left(\\frac{\\pi t}{6}\\right)$
$\\sin\\left(\\frac{\\pi t}{6}\\right) = 0.5$ **[M1]**

$\\frac{\\pi t}{6} = \\frac{\\pi}{6}$ or $\\frac{\\pi t}{6} = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ **[M1]**

$t = 1$ (February) or $t = 5$ (June) **[A1, A1]** ✓

**(c)** Since $-1 \\leq \\sin\\theta \\leq 1$:
Maximum $P = 20 + 15(1) = 35$ (£35,000) when $\\sin = 1$
i.e., $\\frac{\\pi t}{6} = \\frac{\\pi}{2}$, so $t = 3$ (April) **[B1]**

Minimum $P = 20 + 15(-1) = 5$ (£5,000) when $\\sin = -1$
i.e., $\\frac{\\pi t}{6} = \\frac{3\\pi}{2}$, so $t = 9$ (October) **[B1, B1]** ✓
`;

// ============================================================================
// EXAM TECHNIQUE AND COMMON MISTAKES
// ============================================================================

const OCR_FSMQ_EXAM_TECHNIQUE = `
## Exam Technique for OCR Additional Mathematics

### Time Management
- Total time: 2 hours for 100 marks
- Approximately 1.2 minutes per mark
- Don't spend too long on one question
- Return to difficult questions at the end

### Reading Questions Carefully
**Watch for:**
- "Hence" vs "Hence or otherwise" - "Hence" means you must use the previous result
- "Show that" - you must prove the given result, not verify it
- "Exact form" - don't use decimals
- "State" vs "Explain" - different levels of justification needed
- "Find" vs "Calculate" - essentially the same
- Mark allocation - guides expected length/difficulty

### Presentation Standards

**Always show:**
- Clear working for method marks
- Intermediate steps (not just final answer)
- Substitution into formulae before calculation
- Units in final answers where appropriate

**For calculus:**
- Write $\\frac{dy}{dx} = $ before the derivative
- Include $+ c$ for indefinite integrals
- Show limit substitution for definite integrals

**For trigonometry:**
- State which rule/identity you're using
- Show all solutions in the given range
- Check calculator is in degrees mode

### Common Mistakes to Avoid

#### Algebra
- Sign errors in factorisation
- Forgetting to find both roots of quadratics
- Not simplifying final answers
- Errors in polynomial division

#### Coordinate Geometry
- Mixing up gradient formula (rise/run)
- Sign errors in perpendicular gradients
- Forgetting square root for radius from $r^2$
- Confusing centre signs in $(x-a)^2 + (y-b)^2 = r^2$

#### Trigonometry
- Calculator in wrong mode (degrees/radians)
- Missing solutions in given range
- Incorrect use of CAST diagram
- Not recognising quadratic in trig form

#### Calculus
- Forgetting to reduce power by 1 in differentiation
- Forgetting to increase power by 1 in integration
- Missing $+ c$ in indefinite integrals
- Sign errors in definite integration
- Not simplifying before differentiating/integrating

#### Exponentials and Logarithms
- Thinking $\\log(a + b) = \\log a + \\log b$ (WRONG!)
- Forgetting to check domain of logarithms
- Calculator errors with different log bases

#### Sequences
- Confusing $u_n$ (nth term) with $S_n$ (sum)
- Using $n$ instead of $(n-1)$ in formulas
- Forgetting $|r| < 1$ for sum to infinity

### Checking Your Work

**Quick checks:**
- Substitute answer back into equation
- Check reasonableness of numerical answers
- Verify units are consistent
- Ensure answer matches question requirements

**For show that questions:**
- Final line should match what you're proving
- Working should flow logically from start to finish

### When Stuck

1. Re-read the question carefully
2. Draw a diagram if appropriate
3. Write down what you know and what you need
4. Look for connections to previous parts
5. Try a different approach
6. Move on and return later
`;

// ============================================================================
// QUESTION TYPE TEMPLATES
// ============================================================================

const OCR_FSMQ_QUESTION_TYPES = `
## Common Question Types in OCR Additional Mathematics

### Type 1: Pure Calculation (2-3 marks)
**Format:** "Find...", "Calculate...", "Simplify..."
**Example:** Differentiate $y = 3x^4 - 2x^{-1} + 5$

### Type 2: Show That (3-5 marks)
**Format:** "Show that...", "Prove that..."
**Example:** Show that $(x-2)$ is a factor of $x^3 - 7x + 6$

### Type 3: Multi-Part Building (6-10 marks)
**Format:** (a) Find... (b) Hence... (c) Therefore...
**Example:**
(a) Differentiate $y = x^3 - 3x^2$
(b) Find the stationary points
(c) Determine their nature

### Type 4: Word Problem (5-8 marks)
**Format:** Real-world context requiring modelling
**Example:** A rectangle has perimeter 40 cm. Find dimensions for maximum area.

### Type 5: Given-Hence (4-6 marks)
**Format:** Given information, deduce further results
**Example:** Given $\\log_2 x = 3$, find $\\log_2 (8x)$

### Type 6: Simultaneous Problems (5-7 marks)
**Format:** Multiple equations to solve together
**Example:** Solve $y = 2x + 1$ and $y = x^2 - 3$

### Type 7: Graphical Interpretation (3-5 marks)
**Format:** Using graph properties, intersections, areas
**Example:** Find where the curve meets the x-axis and calculate enclosed area

### Type 8: Proof/Verification (4-6 marks)
**Format:** Prove an identity or verify a result
**Example:** Prove that $\\frac{1 - \\cos^2\\theta}{\\cos\\theta} = \\sin\\theta\\tan\\theta$

### Type 9: Extended Application (8-12 marks)
**Format:** Complex problem requiring multiple techniques
**Example:** Optimisation with differentiation and justification
`;

// ============================================================================
// SPECIFICATION CONTENT REFERENCE
// ============================================================================

const OCR_FSMQ_SPECIFICATION_CONTENT = `
## OCR FSMQ Additional Mathematics Specification Content

### Algebra
- Factor theorem and remainder theorem
- Algebraic division of polynomials
- Algebraic manipulation including surds
- Solving quadratic equations (all methods)
- Completing the square
- Discriminant and nature of roots
- Simultaneous equations (linear and quadratic)
- Inequalities (linear and quadratic)

### Coordinate Geometry
- Distance between two points
- Midpoint of a line segment
- Gradient of a line
- Equation of a line (various forms)
- Parallel and perpendicular lines
- Equation of a circle
- Properties of circles (tangent perpendicular to radius)
- Intersection of lines and curves

### Trigonometry
- Sine and cosine rules
- Area of a triangle using $\\frac{1}{2}ab\\sin C$
- Trigonometric identities: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\sin^2\\theta + \\cos^2\\theta = 1$
- Solving trigonometric equations in given intervals
- Using exact values

### Calculus
- Differentiation of polynomials
- Finding gradients, tangents, and normals
- Stationary points and their nature
- Increasing and decreasing functions
- Integration as reverse of differentiation
- Indefinite integration (including constant)
- Definite integration
- Area under a curve
- Simple kinematics applications

### Exponentials and Logarithms
- Laws of indices (revision and extension)
- Exponential functions and their graphs
- Definition and laws of logarithms
- Solving exponential equations
- Solving logarithmic equations
- Change of base formula

### Sequences and Series
- Arithmetic sequences and series
- Geometric sequences and series
- Sum to infinity of convergent geometric series
- Sigma notation

### Binomial Expansion
- Binomial theorem for positive integer $n$
- Pascal's triangle
- Binomial coefficients $\\binom{n}{r}$
- Finding specific terms
`;

// Export additional content for extended prompts
export const getAdditionalExamples = (): string => OCR_FSMQ_ADDITIONAL_EXAMPLES;
export const getExamTechnique = (): string => OCR_FSMQ_EXAM_TECHNIQUE;
export const getQuestionTypes = (): string => OCR_FSMQ_QUESTION_TYPES;
export const getSpecificationContent = (): string => OCR_FSMQ_SPECIFICATION_CONTENT;
