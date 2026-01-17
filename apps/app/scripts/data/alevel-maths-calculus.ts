import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsCalculus: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'calculus',
      subtopic_slug: 'differentiation',
      title: 'Differentiation | A-Level Maths',
      meta_description: 'Master differentiation techniques including chain rule, product rule and quotient rule. A-Level Maths practice questions with solutions.',
      introduction: `Differentiation is one of the two fundamental operations in calculus, allowing us to find the rate of change of a function at any point. The derivative of a function gives us the gradient of the tangent to the curve at any point, which has countless applications in mathematics, physics, economics, and engineering.

For polynomial functions, differentiation follows the power rule: if y = xⁿ, then dy/dx = nxⁿ⁻¹. This can be extended to sums and differences of terms. For example, if y = 3x⁴ - 2x² + 5x, then dy/dx = 12x³ - 4x + 5.

More complex functions require special rules. The chain rule handles composite functions: if y = f(g(x)), then dy/dx = f'(g(x)) × g'(x). The product rule handles products of functions: if y = uv, then dy/dx = u(dv/dx) + v(du/dx). The quotient rule handles fractions: if y = u/v, then dy/dx = (v(du/dx) - u(dv/dx))/v².

Applications of differentiation include finding stationary points, determining the nature of maxima and minima, sketching curves, and solving optimisation problems. The second derivative provides information about the concavity of curves and helps identify points of inflection.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Differentiate y = 4x³ - 2x² + 7x - 3 with respect to x.',
        solution: `Using the power rule: d/dx(xⁿ) = nxⁿ⁻¹

For each term:
- d/dx(4x³) = 4 × 3x² = 12x²
- d/dx(-2x²) = -2 × 2x = -4x
- d/dx(7x) = 7
- d/dx(-3) = 0

Therefore:
**dy/dx = 12x² - 4x + 7**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Use the product rule to differentiate y = x²sin(x).',
        solution: `Using the product rule: if y = uv, then dy/dx = u(dv/dx) + v(du/dx)

Let u = x² and v = sin(x)

Then:
- du/dx = 2x
- dv/dx = cos(x)

Applying the product rule:
dy/dx = x² × cos(x) + sin(x) × 2x

**dy/dx = x²cos(x) + 2xsin(x)**

Or factorised: dy/dx = x(xcos(x) + 2sin(x))`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find the stationary points of y = x³ - 6x² + 9x + 1 and determine their nature.',
        solution: `**Step 1: Find dy/dx**
y = x³ - 6x² + 9x + 1
dy/dx = 3x² - 12x + 9

**Step 2: Find stationary points (dy/dx = 0)**
3x² - 12x + 9 = 0
x² - 4x + 3 = 0
(x - 1)(x - 3) = 0
x = 1 or x = 3

**Step 3: Find y-coordinates**
At x = 1: y = 1 - 6 + 9 + 1 = 5, so point (1, 5)
At x = 3: y = 27 - 54 + 27 + 1 = 1, so point (3, 1)

**Step 4: Determine nature using d²y/dx²**
d²y/dx² = 6x - 12

At x = 1: d²y/dx² = 6 - 12 = -6 < 0 → **Maximum at (1, 5)**
At x = 3: d²y/dx² = 18 - 12 = 6 > 0 → **Minimum at (3, 1)**`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'calculus',
      subtopic_slug: 'integration',
      title: 'Integration | A-Level Maths',
      meta_description: 'Learn integration techniques including substitution and by parts. A-Level Maths practice questions with step-by-step solutions.',
      introduction: `Integration is the reverse of differentiation and is used to find areas, volumes, and the original function when given its derivative. The integral of a function represents the area under its curve between specified limits.

For polynomial functions, integration reverses the power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + c (where n ≠ -1). The constant of integration c is added because the derivative of any constant is zero. Definite integrals have limits and give numerical values representing areas.

Integration by substitution is used for composite functions, essentially reversing the chain rule. If the integrand contains a function and its derivative, substitution can simplify it. Integration by parts reverses the product rule: ∫u(dv/dx)dx = uv - ∫v(du/dx)dx, and is useful for products involving logarithms, exponentials, and trigonometric functions.

Standard results must be memorised: ∫eˣ dx = eˣ + c, ∫1/x dx = ln|x| + c, ∫sin(x) dx = -cos(x) + c, ∫cos(x) dx = sin(x) + c. These form the building blocks for more complex integrals.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find ∫(6x² - 4x + 3) dx.',
        solution: `Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + c

For each term:
- ∫6x² dx = 6x³/3 = 2x³
- ∫-4x dx = -4x²/2 = -2x²
- ∫3 dx = 3x

Therefore:
**∫(6x² - 4x + 3) dx = 2x³ - 2x² + 3x + c**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Evaluate ∫₁³ (2x + 1)³ dx using substitution.',
        solution: `**Step 1: Set up substitution**
Let u = 2x + 1
Then du/dx = 2, so dx = du/2

**Step 2: Change limits**
When x = 1: u = 2(1) + 1 = 3
When x = 3: u = 2(3) + 1 = 7

**Step 3: Substitute and integrate**
∫₁³ (2x + 1)³ dx = ∫₃⁷ u³ × (1/2) du
= (1/2) × [u⁴/4]₃⁷
= (1/8)[u⁴]₃⁷
= (1/8)[7⁴ - 3⁴]
= (1/8)[2401 - 81]
= (1/8) × 2320
= **290**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Use integration by parts to find ∫x·eˣ dx.',
        solution: `**Using integration by parts: ∫u(dv/dx)dx = uv - ∫v(du/dx)dx**

**Step 1: Choose u and dv/dx**
Let u = x, so du/dx = 1
Let dv/dx = eˣ, so v = eˣ

**Step 2: Apply the formula**
∫x·eˣ dx = x·eˣ - ∫eˣ·1 dx
= x·eˣ - ∫eˣ dx
= x·eˣ - eˣ + c

**Step 3: Factorise**
= eˣ(x - 1) + c

**∫x·eˣ dx = eˣ(x - 1) + c** or equivalently **xeˣ - eˣ + c**

**Check by differentiating:**
d/dx[eˣ(x - 1)] = eˣ(x - 1) + eˣ(1) = eˣx - eˣ + eˣ = xeˣ ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'calculus',
      subtopic_slug: 'chain-rule',
      title: 'Chain Rule | A-Level Maths',
      meta_description: 'Master the chain rule for differentiating composite functions. A-Level Maths practice questions with detailed solutions.',
      introduction: `The chain rule is essential for differentiating composite functions—functions of functions. When a function y depends on u, which in turn depends on x, the chain rule allows us to find dy/dx by multiplying dy/du by du/dx.

In function notation, if y = f(g(x)), then dy/dx = f'(g(x)) × g'(x). This means we differentiate the "outer" function while keeping the "inner" function unchanged, then multiply by the derivative of the inner function.

Common applications include differentiating powers of functions like (3x + 2)⁵, trigonometric functions like sin(2x), exponential functions like e^(x²), and logarithmic functions like ln(x² + 1). The chain rule extends naturally to chains of three or more functions.

For example, to differentiate y = (2x + 3)⁴:
- Let u = 2x + 3 (inner function), so y = u⁴
- dy/du = 4u³ and du/dx = 2
- Therefore dy/dx = 4u³ × 2 = 8u³ = 8(2x + 3)³

The chain rule is also crucial for implicit differentiation and parametric differentiation.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Differentiate y = (5x - 2)⁶ using the chain rule.',
        solution: `**Using the chain rule: dy/dx = dy/du × du/dx**

Let u = 5x - 2, so y = u⁶

dy/du = 6u⁵
du/dx = 5

Therefore:
dy/dx = 6u⁵ × 5 = 30u⁵

Substituting back u = 5x - 2:

**dy/dx = 30(5x - 2)⁵**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the derivative of y = e^(3x²).',
        solution: `**Using the chain rule: dy/dx = f'(g(x)) × g'(x)**

Here y = e^(3x²) is a composite function where:
- Outer function: f(u) = eᵘ, so f'(u) = eᵘ
- Inner function: g(x) = 3x², so g'(x) = 6x

Applying the chain rule:
dy/dx = e^(3x²) × 6x

**dy/dx = 6xe^(3x²)**

Or equivalently: **dy/dx = 6x·e^(3x²)**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Differentiate y = ln(sin²x) and simplify your answer.',
        solution: `**Method: Apply chain rule twice**

y = ln(sin²x)

**Step 1: First application of chain rule**
Let u = sin²x, so y = ln(u)
dy/du = 1/u = 1/sin²x
Now find du/dx...

**Step 2: Second application for sin²x**
u = sin²x = (sin x)²
Let v = sin x, so u = v²
du/dv = 2v = 2sin x
dv/dx = cos x
So du/dx = 2sin x × cos x = 2sin x cos x = sin(2x)

**Step 3: Combine**
dy/dx = dy/du × du/dx
dy/dx = (1/sin²x) × sin(2x)
dy/dx = sin(2x)/sin²x
dy/dx = (2sin x cos x)/sin²x
dy/dx = 2cos x/sin x

**dy/dx = 2cot x**

Alternative method: Use ln(sin²x) = 2ln(sin x), then differentiate:
dy/dx = 2 × (cos x/sin x) = 2cot x ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'calculus',
      subtopic_slug: 'differential-equations',
      title: 'Differential Equations | A-Level Maths',
      meta_description: 'Solve first-order differential equations by separation of variables. A-Level Maths practice questions with worked solutions.',
      introduction: `A differential equation is an equation involving a function and its derivatives. They model real-world phenomena where the rate of change of a quantity depends on the quantity itself, such as population growth, radioactive decay, and cooling of objects.

First-order differential equations involve only the first derivative (dy/dx). Many can be solved by separation of variables, where all terms involving y are collected on one side and all terms involving x on the other, then both sides are integrated.

For example, dy/dx = ky (exponential growth/decay) can be separated: (1/y)dy = k dx. Integrating: ln|y| = kx + c, giving y = Ae^(kx) where A = e^c. Initial conditions allow us to find the specific solution.

Differential equations arise in many contexts: Newton's law of cooling (dT/dt = -k(T - Tₛ)), population growth (dP/dt = kP), and motion problems. Understanding how to form and solve these equations is essential for applications in physics, biology, and economics.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Solve the differential equation dy/dx = 3y, given that y = 2 when x = 0.',
        solution: `**Step 1: Separate variables**
dy/dx = 3y
(1/y) dy = 3 dx

**Step 2: Integrate both sides**
∫(1/y) dy = ∫3 dx
ln|y| = 3x + c

**Step 3: Solve for y**
|y| = e^(3x + c) = e^c × e^(3x)
y = Ae^(3x) where A = ±e^c

**Step 4: Apply initial condition (y = 2 when x = 0)**
2 = Ae^(3×0)
2 = A × 1
A = 2

**Solution: y = 2e^(3x)**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Solve the differential equation dy/dx = xy, given that y = 1 when x = 0.',
        solution: `**Step 1: Separate variables**
dy/dx = xy
(1/y) dy = x dx

**Step 2: Integrate both sides**
∫(1/y) dy = ∫x dx
ln|y| = x²/2 + c

**Step 3: Solve for y**
|y| = e^(x²/2 + c)
y = Ae^(x²/2) where A = ±e^c

**Step 4: Apply initial condition (y = 1 when x = 0)**
1 = Ae^(0²/2)
1 = A × e^0
1 = A × 1
A = 1

**Solution: y = e^(x²/2)**

Or equivalently: y = e^(½x²)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The rate of cooling of a cup of coffee is modelled by dT/dt = -0.1(T - 20), where T is the temperature in °C and t is time in minutes. If the initial temperature is 90°C, find T in terms of t.',
        solution: `**Step 1: Separate variables**
dT/dt = -0.1(T - 20)

Let u = T - 20, so du/dT = 1, meaning du = dT
When T = 90, u = 70

du/dt = -0.1u
(1/u) du = -0.1 dt

**Step 2: Integrate both sides**
∫(1/u) du = ∫-0.1 dt
ln|u| = -0.1t + c

**Step 3: Solve for u**
|u| = e^(-0.1t + c)
u = Ae^(-0.1t)

**Step 4: Substitute back u = T - 20**
T - 20 = Ae^(-0.1t)
T = 20 + Ae^(-0.1t)

**Step 5: Apply initial condition (T = 90 when t = 0)**
90 = 20 + Ae^0
90 = 20 + A
A = 70

**Solution: T = 20 + 70e^(-0.1t)**

This shows the coffee approaches room temperature (20°C) as t → ∞`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'calculus',
      subtopic_slug: 'area-under-curve',
      title: 'Area Under a Curve | A-Level Maths',
      meta_description: 'Calculate areas under curves and between curves using integration. A-Level Maths practice questions with solutions.',
      introduction: `Definite integration allows us to calculate the exact area between a curve and the x-axis. The area from x = a to x = b under the curve y = f(x) is given by ∫ₐᵇ f(x) dx, provided f(x) ≥ 0 in this interval.

When a curve goes below the x-axis, the integral gives a negative value. To find the total area enclosed, you must identify where the curve crosses the x-axis, integrate each section separately, and add the absolute values.

The area between two curves y = f(x) and y = g(x) from x = a to x = b is given by ∫ₐᵇ |f(x) - g(x)| dx. In practice, you subtract the lower curve from the upper curve and integrate. If the curves cross, split into sections.

Finding areas has many applications including calculating the work done by a variable force, finding the volume of solids of revolution, and computing probabilities in statistics. The trapezium rule provides an approximation method when analytical integration is difficult.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find the area bounded by the curve y = x², the x-axis, and the lines x = 1 and x = 3.',
        solution: `**Using definite integration:**

Area = ∫₁³ x² dx

= [x³/3]₁³

= (3³/3) - (1³/3)

= 27/3 - 1/3

= 9 - 1/3

= 26/3

**Area = 26/3 square units** (or 8⅔ square units)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the area enclosed between the curve y = x² - 4x and the x-axis.',
        solution: `**Step 1: Find where the curve crosses the x-axis**
x² - 4x = 0
x(x - 4) = 0
x = 0 or x = 4

**Step 2: Determine if curve is above or below x-axis**
At x = 2: y = 4 - 8 = -4 < 0
So the curve is below the x-axis between x = 0 and x = 4

**Step 3: Calculate the integral**
∫₀⁴ (x² - 4x) dx = [x³/3 - 2x²]₀⁴
= (64/3 - 32) - (0)
= 64/3 - 96/3
= -32/3

**Step 4: Take absolute value for area**
The integral is negative because the curve is below the x-axis.
Area = |-32/3| = **32/3 square units** (or 10⅔ square units)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find the area enclosed between the curves y = x² and y = 2x.',
        solution: `**Step 1: Find intersection points**
x² = 2x
x² - 2x = 0
x(x - 2) = 0
x = 0 or x = 2

**Step 2: Determine which curve is higher**
At x = 1: y = x² = 1 and y = 2x = 2
So y = 2x is above y = x² between the intersection points.

**Step 3: Set up the integral**
Area = ∫₀² (upper - lower) dx
Area = ∫₀² (2x - x²) dx

**Step 4: Evaluate**
= [x² - x³/3]₀²
= (4 - 8/3) - (0 - 0)
= 4 - 8/3
= 12/3 - 8/3
= 4/3

**Area = 4/3 square units** (or 1⅓ square units)`,
        display_order: 3
      }
    ]
  }
];
