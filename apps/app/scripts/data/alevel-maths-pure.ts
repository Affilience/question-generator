import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsPure: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'trigonometry',
      title: 'Trigonometry | A-Level Maths',
      meta_description: 'Master A-Level trigonometry including identities, equations, and graphs. Learn advanced trig functions and their applications.',
      introduction: `A-Level trigonometry extends beyond SOHCAHTOA to include radians, trigonometric identities, and solving complex equations. Mastering these concepts is fundamental to success in A-Level Mathematics.

The reciprocal trigonometric functions are cosec θ = 1/sin θ, sec θ = 1/cos θ, and cot θ = 1/tan θ. These functions have their own graphs and properties, with vertical asymptotes where the original functions equal zero.

Key identities include the Pythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = cosec²θ. These are used extensively in simplifying expressions and solving equations.

Compound angle formulae allow expansion of sin(A±B), cos(A±B), and tan(A±B). Double angle formulae are special cases: sin 2A = 2sin A cos A, cos 2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A, and tan 2A = 2tan A/(1 - tan²A).

The R-formula transforms expressions like a sin θ + b cos θ into R sin(θ + α) or R cos(θ + α), where R = √(a² + b²). This is useful for finding maximum and minimum values and solving equations.

Inverse trigonometric functions (arcsin, arccos, arctan) have restricted domains to ensure they are functions. Understanding their graphs and principal value ranges is essential for solving equations.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Prove that (1 - cos²θ)/sin θ = sin θ.',
        solution: 'Using the identity sin²θ + cos²θ = 1, we have sin²θ = 1 - cos²θ (1 mark). Therefore (1 - cos²θ)/sin θ = sin²θ/sin θ (1 mark). = sin θ as required (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Solve the equation 2cos²x - 3sin x = 3 for 0 ≤ x ≤ 2π.',
        solution: 'Using cos²x = 1 - sin²x: 2(1 - sin²x) - 3sin x = 3 (1 mark). 2 - 2sin²x - 3sin x - 3 = 0, so 2sin²x + 3sin x + 1 = 0 (1 mark). (2sin x + 1)(sin x + 1) = 0, giving sin x = -1/2 or sin x = -1 (1 mark). Solutions: x = 7π/6, 11π/6 (from sin x = -1/2) and x = 3π/2 (from sin x = -1) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Express 3sin θ + 4cos θ in the form R sin(θ + α), where R > 0 and 0 < α < π/2. Hence find the maximum value of 3sin θ + 4cos θ and the smallest positive value of θ for which this maximum occurs.',
        solution: 'R sin(θ + α) = R sin θ cos α + R cos θ sin α (1 mark). Comparing: R cos α = 3 and R sin α = 4, so R² = 9 + 16 = 25, R = 5 (1 mark). tan α = 4/3, so α = 0.927 radians (53.1°) (1 mark). Maximum value = R = 5 (1 mark). Maximum occurs when sin(θ + α) = 1, i.e., θ + α = π/2, so θ = π/2 - 0.927 = 0.644 radians (36.9°) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'exponentials-logarithms',
      title: 'Exponentials and Logarithms | A-Level Maths',
      meta_description: 'Master exponential and logarithmic functions including natural logs, the laws of logarithms, and solving equations for A-Level Maths.',
      introduction: `Exponential and logarithmic functions are fundamental to A-Level Mathematics, with applications ranging from compound interest to radioactive decay. Understanding their properties and the laws governing them is essential.

An exponential function has the form y = aˣ, where a is a positive constant called the base. The most important exponential function is y = eˣ, where e ≈ 2.718 is Euler's number. The function eˣ has the unique property that it equals its own derivative.

Logarithms are the inverse of exponentials: if y = aˣ, then x = logₐy. The natural logarithm (ln x) is the logarithm to base e. The relationship eˡⁿˣ = x and ln(eˣ) = x connects these functions.

The laws of logarithms are: log(xy) = log x + log y, log(x/y) = log x - log y, log(xⁿ) = n log x, and logₐa = 1, logₐ1 = 0. These laws enable manipulation and simplification of logarithmic expressions.

To solve exponential equations like 2ˣ = 5, take logs of both sides: x log 2 = log 5, so x = log 5/log 2. For equations involving e, natural logs are most convenient.

Exponential growth and decay are modelled by y = Aeᵏᵗ, where A is the initial value and k is the growth rate (positive for growth, negative for decay). The half-life is the time for the quantity to halve: t½ = ln 2/|k|.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Solve the equation 3ˣ = 20, giving your answer to 3 significant figures.',
        solution: 'Taking logs of both sides: x log 3 = log 20 (1 mark). x = log 20/log 3 (1 mark). x = 1.301/0.477 = 2.73 (3 s.f.) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Express as a single logarithm: 2 log₃x - log₃(x + 1) + log₃9.',
        solution: 'Using laws: 2 log₃x = log₃x² (1 mark). log₃9 = log₃3² = 2 (1 mark). Expression = log₃x² - log₃(x + 1) + 2 = log₃(x²/(x + 1)) + log₃9 (1 mark). = log₃(9x²/(x + 1)) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The number of bacteria in a culture grows according to N = 500e⁰·⁰⁴ᵗ, where t is time in hours. Find (a) the initial population, (b) the time to double, and (c) the population after 24 hours.',
        solution: '(a) Initial population (t = 0): N = 500e⁰ = 500 bacteria (1 mark). (b) Doubling: 1000 = 500e⁰·⁰⁴ᵗ, so 2 = e⁰·⁰⁴ᵗ (1 mark). ln 2 = 0.04t, t = ln 2/0.04 = 17.3 hours (1 mark). (c) After 24 hours: N = 500e⁰·⁰⁴ˣ²⁴ = 500e⁰·⁹⁶ (1 mark). N = 500 × 2.61 = 1306 bacteria (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'binomial-expansion',
      title: 'Binomial Expansion | A-Level Maths',
      meta_description: 'Master the binomial expansion for positive integers and general exponents. Learn to find specific terms and approximations for A-Level Maths.',
      introduction: `The binomial expansion provides a way to expand expressions of the form (a + b)ⁿ. A-Level Mathematics covers both the expansion for positive integer n and the general binomial expansion for any rational n.

For positive integer n, the binomial expansion is (a + b)ⁿ = Σᵣ₌₀ⁿ C(n,r) aⁿ⁻ʳ bʳ, where C(n,r) = n!/(r!(n-r)!) is the binomial coefficient, also written as ⁿCᵣ or (n r). Pascal's triangle provides an alternative way to find these coefficients.

The general binomial expansion for (1 + x)ⁿ where n is any rational number is: (1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + n(n-1)(n-2)x³/3! + ... This expansion is valid only when |x| < 1.

To expand (a + bx)ⁿ for non-integer n, first factor out aⁿ: aⁿ(1 + bx/a)ⁿ, then apply the general expansion to (1 + bx/a)ⁿ with the validity condition |bx/a| < 1.

The binomial expansion is useful for approximations. For example, √(1 + x) ≈ 1 + x/2 - x²/8 for small x. The more terms used, the better the approximation within the range of validity.

Specific terms can be found using the general term formula. In (a + b)ⁿ, the (r+1)th term is C(n,r) aⁿ⁻ʳ bʳ.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find the first four terms of the expansion of (1 + 2x)⁵ in ascending powers of x.',
        solution: '(1 + 2x)⁵ = 1 + 5(2x) + 10(2x)² + 10(2x)³ + ... (1 mark). = 1 + 10x + 40x² + 80x³ + ... (1 mark for coefficients, 1 mark for correct form).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the first three terms of the expansion of (1 - 3x)⁻² and state the range of values of x for which the expansion is valid.',
        solution: '(1 + (-3x))⁻² = 1 + (-2)(-3x) + (-2)(-3)(-3x)²/2! + ... (1 mark). = 1 + 6x + (-2)(-3)(9x²)/2 (1 mark). = 1 + 6x + 27x² (1 mark). Valid for |-3x| < 1, i.e., |x| < 1/3 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find the coefficient of x³ in the expansion of (2 + x)²(1 - x)⁶.',
        solution: '(2 + x)² = 4 + 4x + x² (1 mark). (1 - x)⁶: terms up to x³ are 1 - 6x + 15x² - 20x³ (1 mark). For x³ coefficient, multiply: 4 × (-20x³) + 4x × 15x² + x² × (-6x) (1 mark). = -80x³ + 60x³ - 6x³ = -26x³ (1 mark). Coefficient of x³ is -26 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'proof',
      title: 'Mathematical Proof | A-Level Maths',
      meta_description: 'Learn proof techniques including direct proof, proof by contradiction, and proof by exhaustion for A-Level Maths.',
      introduction: `Mathematical proof establishes the truth of statements beyond doubt using logical reasoning. A-Level Mathematics requires understanding of several proof techniques and the ability to construct rigorous arguments.

Direct proof (or proof by deduction) starts from known facts and uses logical steps to reach the conclusion. Each step must follow logically from previous steps or known results. This is the most common type of proof.

Proof by contradiction assumes the statement is false and shows this leads to a logical impossibility. For example, to prove √2 is irrational, assume it equals p/q in lowest terms, then derive a contradiction (both p and q must be even, contradicting "lowest terms").

Proof by exhaustion verifies the statement for all possible cases when there are finitely many. For example, proving a statement about single-digit prime numbers by checking 2, 3, 5, and 7 individually.

Disproof by counterexample shows a statement is false by finding one example where it fails. Only one counterexample is needed to disprove a general statement.

Proof by induction proves statements about natural numbers by: (1) proving the base case (usually n = 1), and (2) proving that if the statement holds for n = k, it holds for n = k + 1. This establishes the result for all natural numbers.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Prove that the sum of two consecutive integers is always odd.',
        solution: 'Let the consecutive integers be n and n + 1 (1 mark). Sum = n + (n + 1) = 2n + 1 (1 mark). 2n is even (divisible by 2), so 2n + 1 is odd (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Prove by contradiction that there is no largest prime number.',
        solution: 'Assume there is a largest prime, call it p (1 mark). Consider N = (2 × 3 × 5 × ... × p) + 1, the product of all primes up to p, plus 1 (1 mark). N is not divisible by any prime ≤ p (leaves remainder 1), so either N is prime (contradicting p is largest) or N has a prime factor > p (also contradicting p is largest) (1 mark). This contradiction proves there is no largest prime (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Prove by induction that Σᵣ₌₁ⁿ r² = n(n+1)(2n+1)/6 for all positive integers n.',
        solution: 'Base case (n = 1): LHS = 1² = 1. RHS = 1(2)(3)/6 = 1. ✓ (1 mark). Assume true for n = k: Σᵣ₌₁ᵏ r² = k(k+1)(2k+1)/6 (1 mark). For n = k+1: Σᵣ₌₁ᵏ⁺¹ r² = k(k+1)(2k+1)/6 + (k+1)² (1 mark). = (k+1)[k(2k+1)/6 + (k+1)] = (k+1)[k(2k+1) + 6(k+1)]/6 = (k+1)(2k² + 7k + 6)/6 (1 mark). = (k+1)(k+2)(2k+3)/6 = (k+1)((k+1)+1)(2(k+1)+1)/6. True for n = k+1 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'partial-fractions',
      title: 'Partial Fractions | A-Level Maths',
      meta_description: 'Master partial fraction decomposition for integration and algebraic manipulation in A-Level Maths.',
      introduction: `Partial fractions decompose complex algebraic fractions into simpler components. This technique is essential for A-Level Mathematics, particularly for integration of rational functions.

A proper fraction (numerator degree less than denominator degree) can be decomposed into partial fractions. If the denominator factorises into linear factors, each factor contributes a term of the form A/(ax + b).

For example, (2x + 1)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2). To find A and B, multiply through by the denominator and either compare coefficients or substitute convenient values of x.

Repeated linear factors require multiple terms. For example, 1/((x - 1)²(x + 1)) = A/(x - 1) + B/(x - 1)² + C/(x + 1). Each power of the repeated factor appears as a separate term.

Irreducible quadratic factors (that don't factorise over real numbers) contribute terms of the form (Ax + B)/(x² + px + q). The numerator is linear because the denominator is quadratic.

Improper fractions (numerator degree ≥ denominator degree) must first be divided using polynomial long division to obtain a polynomial plus a proper fraction. The proper fraction part is then decomposed into partial fractions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Express (3x + 5)/((x + 1)(x + 3)) in partial fractions.',
        solution: 'Let (3x + 5)/((x+1)(x+3)) = A/(x+1) + B/(x+3) (1 mark). 3x + 5 = A(x+3) + B(x+1). Put x = -1: 2 = 2A, A = 1. Put x = -3: -4 = -2B, B = 2 (1 mark). Result: 1/(x+1) + 2/(x+3) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Express (x² + 2)/((x - 1)(x + 1)²) in partial fractions.',
        solution: 'Let (x² + 2)/((x-1)(x+1)²) = A/(x-1) + B/(x+1) + C/(x+1)² (1 mark). x² + 2 = A(x+1)² + B(x-1)(x+1) + C(x-1). Put x = 1: 3 = 4A, A = 3/4. Put x = -1: 3 = -2C, C = -3/2 (1 mark). Compare x² coefficients: 1 = A + B, so B = 1 - 3/4 = 1/4 (1 mark). Result: (3/4)/(x-1) + (1/4)/(x+1) - (3/2)/(x+1)² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Express (2x³ + x² + 1)/(x² + x) in partial fractions.',
        solution: 'This is improper (degree 3 over degree 2), so divide first (1 mark). 2x³ + x² + 1 = (x² + x)(2x - 1) + (x + 1). So fraction = 2x - 1 + (x + 1)/(x² + x) (1 mark). Factor denominator: x² + x = x(x + 1). (x + 1)/(x(x+1)) = A/x + B/(x+1) (1 mark). x + 1 = A(x+1) + Bx. Put x = 0: A = 1. Put x = -1: B = 0 (1 mark). Final answer: 2x - 1 + 1/x (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'parametric-equations',
      title: 'Parametric Equations | A-Level Maths',
      meta_description: 'Master parametric equations including differentiation, conversion to Cartesian form, and sketching curves for A-Level Maths.',
      introduction: `Parametric equations express coordinates in terms of a third variable (parameter), typically t. This representation is essential for A-Level Mathematics when describing curves that are difficult to express as y = f(x).

In parametric form, both x and y are given as functions of t: x = f(t) and y = g(t). Each value of t gives a point (x, y) on the curve. The parameter often represents time in physics applications.

To convert parametric equations to Cartesian form, eliminate the parameter. This usually involves expressing t in terms of x (or y) from one equation and substituting into the other. Trigonometric identities like sin²t + cos²t = 1 are useful when the parameter appears in trig functions.

Differentiation of parametric curves uses the chain rule: dy/dx = (dy/dt)/(dx/dt). This gives the gradient at any point in terms of the parameter. The second derivative d²y/dx² = (d/dt(dy/dx))/(dx/dt).

Common parametric curves include the circle (x = r cos t, y = r sin t), the ellipse (x = a cos t, y = b sin t), and various spirals and cycloids that are difficult to express in Cartesian form.

Parametric equations are used extensively in computer graphics, physics (describing motion), and engineering design.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A curve has parametric equations x = 2t, y = t² - 1. Find the Cartesian equation of the curve.',
        solution: 'From x = 2t, we get t = x/2 (1 mark). Substituting into y = t² - 1: y = (x/2)² - 1 (1 mark). y = x²/4 - 1, or 4y = x² - 4 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A curve has parametric equations x = 3 cos t, y = 4 sin t. Find dy/dx in terms of t and find the gradient at the point where t = π/3.',
        solution: 'dx/dt = -3 sin t, dy/dt = 4 cos t (1 mark). dy/dx = (dy/dt)/(dx/dt) = 4 cos t/(-3 sin t) = -4 cot t/3 (1 mark). At t = π/3: dy/dx = -4 cos(π/3)/(3 sin(π/3)) = -4(1/2)/(3(√3/2)) (1 mark). = -2/(3√3/2) = -4/(3√3) = -4√3/9 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A curve has parametric equations x = t + 1/t, y = t - 1/t for t > 0. Find the Cartesian equation of the curve and identify what type of curve it is.',
        solution: 'x + y = 2t and x - y = 2/t (1 mark). (x + y)(x - y) = 2t × 2/t = 4 (1 mark). x² - y² = 4 (1 mark). This is a rectangular hyperbola (1 mark). Rearranging: x²/4 - y²/4 = 1, confirming hyperbola with a = b = 2 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'numerical-methods',
      title: 'Numerical Methods | A-Level Maths',
      meta_description: 'Learn numerical methods including iteration, Newton-Raphson, and the trapezium rule for A-Level Maths.',
      introduction: `Numerical methods provide approximate solutions to problems that cannot be solved exactly. These techniques are essential for A-Level Mathematics and form the basis of computational mathematics.

The change of sign method locates roots of f(x) = 0 by finding intervals where f(x) changes sign. If f(a) and f(b) have opposite signs and f is continuous, then there is at least one root between a and b. The interval can be repeatedly bisected to refine the approximation.

Iteration uses a formula xₙ₊₁ = g(xₙ) to generate a sequence that converges to a root. Starting from an initial estimate x₀, successive values are calculated. Convergence occurs when |g'(x)| < 1 near the root. Different rearrangements of the same equation may converge or diverge.

The Newton-Raphson method is a powerful iterative technique: xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ). It uses the tangent line at each point to estimate where the curve crosses the x-axis. Convergence is usually rapid but may fail if starting point is poorly chosen.

The trapezium rule approximates definite integrals using trapeziums: ∫ₐᵇf(x)dx ≈ (h/2)[y₀ + 2(y₁ + y₂ + ... + yₙ₋₁) + yₙ], where h = (b-a)/n is the strip width. More strips give better accuracy.

These methods are implemented in calculators and computers for solving real-world problems where exact solutions don't exist.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Show that the equation x³ - 3x + 1 = 0 has a root between x = 0 and x = 1.',
        solution: 'Let f(x) = x³ - 3x + 1 (1 mark). f(0) = 0 - 0 + 1 = 1 > 0. f(1) = 1 - 3 + 1 = -1 < 0 (1 mark). Since f(0) > 0 and f(1) < 0, and f is continuous, there is a root between 0 and 1 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Use the Newton-Raphson method with x₀ = 2 to find the root of x³ - 5 = 0 to 3 decimal places.',
        solution: 'f(x) = x³ - 5, f\'(x) = 3x² (1 mark). Formula: xₙ₊₁ = xₙ - (xₙ³ - 5)/(3xₙ²) (1 mark). x₁ = 2 - (8-5)/12 = 2 - 0.25 = 1.75 (1 mark). x₂ = 1.75 - (5.359-5)/(9.1875) = 1.75 - 0.039 = 1.711. x₃ ≈ 1.710. Root = 1.710 (3 d.p.) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Use the trapezium rule with 4 strips to estimate ∫₀² e^(x²) dx. Give your answer to 3 significant figures.',
        solution: 'h = (2-0)/4 = 0.5 (1 mark). x values: 0, 0.5, 1, 1.5, 2. y values: e⁰ = 1, e⁰·²⁵ = 1.284, e¹ = 2.718, e²·²⁵ = 9.488, e⁴ = 54.60 (1 mark). Trapezium rule: (0.5/2)[1 + 2(1.284 + 2.718 + 9.488) + 54.60] (1 mark). = 0.25[1 + 26.98 + 54.60] = 0.25 × 82.58 (1 mark). = 20.6 (3 s.f.) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'differential-equations',
      title: 'Differential Equations | A-Level Maths',
      meta_description: 'Learn to solve first-order differential equations using separation of variables and integrating factors for A-Level Maths.',
      introduction: `Differential equations relate a function to its derivatives and are fundamental to modelling real-world phenomena. A-Level Mathematics covers first-order differential equations and their applications.

A first-order differential equation involves dy/dx (or equivalent). The general solution contains an arbitrary constant; the particular solution is found by applying initial or boundary conditions.

Separation of variables works when the equation can be written as f(y)dy = g(x)dx. Integrate both sides separately: ∫f(y)dy = ∫g(x)dx + C. This technique handles equations where variables can be separated to opposite sides.

For example, dy/dx = xy can be rewritten as (1/y)dy = x dx, giving ln|y| = x²/2 + C, so y = Ae^(x²/2).

Some differential equations model growth and decay: dy/dt = ky gives y = Ae^(kt). Positive k gives exponential growth; negative k gives exponential decay. Population growth, radioactive decay, and cooling processes follow this pattern.

More complex models include logistic growth (with a carrying capacity) and Newton's law of cooling. These equations often require more sophisticated solution techniques but can sometimes be solved by separation of variables.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Solve the differential equation dy/dx = 3y, given that y = 2 when x = 0.',
        solution: '(1/y)dy = 3dx. Integrating: ln|y| = 3x + C (1 mark). y = Ae^(3x) where A = e^C (1 mark). When x = 0, y = 2: 2 = Ae⁰ = A. So y = 2e^(3x) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Solve the differential equation dy/dx = xy², given that y = 1 when x = 0.',
        solution: '(1/y²)dy = x dx. Integrating: -1/y = x²/2 + C (1 mark). When x = 0, y = 1: -1 = 0 + C, so C = -1 (1 mark). -1/y = x²/2 - 1 (1 mark). y = 1/(1 - x²/2) = 2/(2 - x²) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A cup of coffee cools according to the equation dT/dt = -k(T - 20), where T is the temperature in °C and t is time in minutes. Initially the coffee is at 80°C and after 5 minutes it is at 60°C. Find the temperature after 10 minutes.',
        solution: 'Separate: dT/(T-20) = -k dt. Integrate: ln|T-20| = -kt + C (1 mark). T - 20 = Ae^(-kt). At t = 0, T = 80: 60 = A, so T = 20 + 60e^(-kt) (1 mark). At t = 5, T = 60: 40 = 60e^(-5k), e^(-5k) = 2/3 (1 mark). -5k = ln(2/3), k = -ln(2/3)/5 = 0.0811 (1 mark). At t = 10: T = 20 + 60e^(-10k) = 20 + 60(2/3)² = 20 + 60(4/9) = 46.7°C (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'vectors',
      title: 'Vectors | A-Level Maths',
      meta_description: 'Master vector operations including scalar product, equations of lines, and geometric applications for A-Level Maths.',
      introduction: `Vectors have both magnitude and direction, making them essential for representing quantities in physics and geometry. A-Level Mathematics extends vector work to include 3D vectors and their applications.

Vectors can be written in column form or using i, j, k notation. In 3D, a vector a = (a₁, a₂, a₃) = a₁i + a₂j + a₃k. The magnitude is |a| = √(a₁² + a₂² + a₃²).

Vector addition and subtraction work component-wise. Scalar multiplication multiplies each component. The position vector of a point P is the vector from the origin O to P.

The scalar (dot) product of vectors a and b is a·b = |a||b|cos θ = a₁b₁ + a₂b₂ + a₃b₃, where θ is the angle between them. If a·b = 0, the vectors are perpendicular.

The equation of a line through point A with direction vector d is r = a + λd, where λ is a parameter. In Cartesian form, this gives (x - a₁)/d₁ = (y - a₂)/d₂ = (z - a₃)/d₃.

To find where two lines intersect, equate their position vectors and solve for the parameters. If no solution exists, the lines are skew (don't meet) in 3D.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find the magnitude of the vector a = 2i - 3j + 6k and find the unit vector in the direction of a.',
        solution: '|a| = √(4 + 9 + 36) = √49 = 7 (1 mark). Unit vector = a/|a| = (2i - 3j + 6k)/7 (1 mark). = (2/7)i - (3/7)j + (6/7)k (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the angle between the vectors a = 3i + 4j and b = 5i - 12j, giving your answer to the nearest degree.',
        solution: 'a·b = (3)(5) + (4)(-12) = 15 - 48 = -33 (1 mark). |a| = √(9+16) = 5, |b| = √(25+144) = 13 (1 mark). cos θ = a·b/(|a||b|) = -33/(5 × 13) = -33/65 (1 mark). θ = cos⁻¹(-33/65) = 121° (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Line L₁ has equation r = (1, 2, 3) + λ(2, 1, -1). Line L₂ has equation r = (3, 3, 1) + μ(1, -1, 2). Find the point of intersection of the two lines.',
        solution: 'At intersection: (1+2λ, 2+λ, 3-λ) = (3+μ, 3-μ, 1+2μ) (1 mark). From x-components: 1 + 2λ = 3 + μ, so 2λ - μ = 2 (1 mark). From y-components: 2 + λ = 3 - μ, so λ + μ = 1 (1 mark). Adding: 3λ = 3, λ = 1. Then μ = 0 (1 mark). Point of intersection: (1+2, 2+1, 3-1) = (3, 3, 2) (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelMathsPure;
