import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsPureExpanded: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'pure',
      subtopic_slug: 'differentiation',
      title: 'Differentiation | A-Level Maths',
      meta_description: 'Master differentiation techniques including first principles, standard derivatives and applications for A-Level Mathematics.',
      introduction: `Differentiation is a fundamental calculus technique that finds the rate of change of a function. The derivative dy/dx represents the gradient of the curve at any point. Understanding differentiation is essential for A-Level Mathematics and has wide applications in science and engineering.

From first principles, the derivative is defined as the limit: dy/dx = lim(δx→0) [f(x+δx) - f(x)]/δx. This measures the gradient of the chord as the chord length approaches zero, giving the gradient of the tangent at that point.

For polynomial functions, the power rule states that if y = xⁿ, then dy/dx = nxⁿ⁻¹. For example: y = x³ gives dy/dx = 3x², and y = x⁻² gives dy/dx = -2x⁻³. Constants differentiate to zero since they have no rate of change.

The sum rule allows differentiation of each term separately: if y = f(x) + g(x), then dy/dx = f\'(x) + g\'(x). Combined with the power rule, this enables differentiation of any polynomial: y = 3x⁴ - 2x² + 5x - 1 gives dy/dx = 12x³ - 4x + 5.

Standard derivatives must be memorised: d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x, d/dx(sin x) = cos x, d/dx(cos x) = -sin x. These form the building blocks for more complex differentiation using chain, product, and quotient rules.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Differentiate y = 4x³ - 2x² + 7x - 3 with respect to x.',
        solution: 'Using the power rule on each term: dy/dx = 12x² (from 4x³) (1 mark) - 4x (from -2x²) + 7 (from 7x) (1 mark). The constant -3 differentiates to 0. Final answer: dy/dx = 12x² - 4x + 7 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the gradient of the curve y = x³ - 4x + 2 at the point (2, 2). Hence find the equation of the tangent at this point.',
        solution: 'dy/dx = 3x² - 4 (1 mark). At x = 2: gradient = 3(2)² - 4 = 12 - 4 = 8 (1 mark). Tangent equation: y - 2 = 8(x - 2) (1 mark). Simplifying: y = 8x - 14 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Use differentiation from first principles to show that if y = x², then dy/dx = 2x.',
        solution: 'f(x) = x², so f(x + δx) = (x + δx)² = x² + 2xδx + (δx)² (1 mark). f(x + δx) - f(x) = x² + 2xδx + (δx)² - x² = 2xδx + (δx)² (1 mark). [f(x + δx) - f(x)]/δx = (2xδx + (δx)²)/δx = 2x + δx (1 mark). As δx → 0: dy/dx = lim(δx→0)(2x + δx) = 2x (1 mark). Therefore if y = x², dy/dx = 2x as required (1 mark).',
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
      subtopic_slug: 'integration',
      title: 'Integration | A-Level Maths',
      meta_description: 'Learn integration techniques including indefinite and definite integrals, areas under curves for A-Level Mathematics.',
      introduction: `Integration is the reverse process of differentiation. While differentiation finds rates of change, integration finds the function from its derivative. It is also used to calculate areas under curves and solve differential equations.

The indefinite integral ∫xⁿ dx = xⁿ⁺¹/(n+1) + c (where n ≠ -1) reverses the power rule. The constant c (constant of integration) is essential because differentiation of any constant gives zero, so infinitely many functions have the same derivative.

For n = -1, the special case ∫x⁻¹ dx = ∫(1/x) dx = ln|x| + c. Other standard integrals: ∫eˣ dx = eˣ + c, ∫cos x dx = sin x + c, ∫sin x dx = -cos x + c.

Definite integrals have limits and give a numerical value. ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a), where F(x) is the integral of f(x). This calculates the area between the curve, the x-axis, and the lines x = a and x = b.

When finding areas, pay attention to sign. Areas below the x-axis give negative values, so for total area, integrate separately and take absolute values. For area between two curves, integrate the difference of the functions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find ∫(3x² + 4x - 5) dx.',
        solution: 'Integrating term by term: ∫3x² dx = x³ (1 mark). ∫4x dx = 2x² (1 mark). ∫-5 dx = -5x. Final answer: x³ + 2x² - 5x + c (1 mark for correct answer with constant).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Evaluate ∫₁³ (2x + 1) dx and interpret the result geometrically.',
        solution: '∫(2x + 1) dx = x² + x + c (1 mark). [x² + x]₁³ = (9 + 3) - (1 + 1) = 12 - 2 = 10 (1 mark for evaluation, 1 mark for correct answer). Geometrically, this represents the area under the line y = 2x + 1 between x = 1 and x = 3 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find the area enclosed between the curve y = x² - 4 and the x-axis.',
        solution: 'First find where curve crosses x-axis: x² - 4 = 0, so x = ±2 (1 mark). Between x = -2 and x = 2, the curve is below the x-axis (1 mark). Area = |∫₋₂² (x² - 4) dx| (1 mark). ∫(x² - 4) dx = x³/3 - 4x. [x³/3 - 4x]₋₂² = (8/3 - 8) - (-8/3 + 8) = -16/3 - 16/3 = -32/3 (1 mark). Area = |-32/3| = 32/3 square units (1 mark).',
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
      subtopic_slug: 'algebra',
      title: 'Algebra | A-Level Maths',
      meta_description: 'Master algebraic techniques including surds, indices, quadratics and algebraic manipulation for A-Level Mathematics.',
      introduction: `A-Level algebra builds on GCSE foundations with more sophisticated techniques. Proficiency in algebraic manipulation is essential for success across all topics in A-Level Mathematics.

Surds are irrational numbers left in root form. Rules include: √(ab) = √a × √b, √(a/b) = √a/√b. Rationalising denominators removes surds from the denominator: 1/√a = √a/a, and 1/(a + √b) multiplied by (a - √b)/(a - √b) gives a rational denominator.

Index laws extend to fractional and negative indices: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a, a^(m/n) = (ⁿ√a)ᵐ. These are essential for calculus.

Quadratic equations can be solved by factorising, completing the square, or using the formula x = (-b ± √(b² - 4ac))/2a. The discriminant b² - 4ac determines the nature of roots: positive means two distinct real roots, zero means one repeated root, negative means no real roots.

Completing the square transforms ax² + bx + c into a(x + p)² + q form. This reveals the vertex of the parabola at (-p, q) and is essential for solving quadratics, finding minimum/maximum points, and integrating.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Simplify √48 + √27, giving your answer in the form a√3 where a is an integer.',
        solution: '√48 = √(16 × 3) = 4√3 (1 mark). √27 = √(9 × 3) = 3√3 (1 mark). 4√3 + 3√3 = 7√3 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Express x² + 6x + 2 in the form (x + a)² + b. Hence state the minimum value of the expression.',
        solution: 'x² + 6x + 2 = (x + 3)² - 9 + 2 (1 mark for completing square). = (x + 3)² - 7 (1 mark). So a = 3, b = -7 (1 mark). The minimum value is -7, occurring when x = -3 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Rationalise the denominator of 3/(2 + √5) and express your answer in the form a + b√5.',
        solution: 'Multiply numerator and denominator by (2 - √5): 3(2 - √5)/[(2 + √5)(2 - √5)] (1 mark). Denominator: (2 + √5)(2 - √5) = 4 - 5 = -1 (1 mark). Numerator: 3(2 - √5) = 6 - 3√5 (1 mark). Result: (6 - 3√5)/(-1) = -6 + 3√5 (1 mark). Answer: -6 + 3√5 or 3√5 - 6 (1 mark).',
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
      subtopic_slug: 'functions',
      title: 'Functions | A-Level Maths',
      meta_description: 'Learn about functions including domain, range, composite and inverse functions for A-Level Mathematics.',
      introduction: `A function is a mapping where each input value produces exactly one output value. Functions are written as f(x) or f: x → expression. Understanding functions is fundamental to A-Level Mathematics and essential for later topics.

The domain is the set of input values for which the function is defined. The range is the set of all possible output values. For example, f(x) = √x has domain x ≥ 0 (cannot take square root of negative) and range f(x) ≥ 0.

Composite functions combine two or more functions. If f(x) = 2x + 1 and g(x) = x², then fg(x) = f(g(x)) = f(x²) = 2x² + 1. Note that fg(x) ≠ gf(x) in general - the order matters.

Inverse functions reverse the effect of the original function. If f(x) = y, then f⁻¹(y) = x. To find an inverse: write y = f(x), rearrange to make x the subject, then swap x and y. The domain of f becomes the range of f⁻¹ and vice versa.

A function only has an inverse if it is one-to-one (each output comes from exactly one input). Graphically, the inverse is a reflection of the original in the line y = x. The composition ff⁻¹(x) = f⁻¹f(x) = x.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Given f(x) = 3x - 2 and g(x) = x², find fg(x) and gf(x).',
        solution: 'fg(x) = f(g(x)) = f(x²) = 3x² - 2 (1 mark). gf(x) = g(f(x)) = g(3x - 2) = (3x - 2)² (1 mark). This expands to 9x² - 12x + 4 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The function f is defined by f(x) = 2x + 5 for x ∈ ℝ. Find f⁻¹(x) and state its domain.',
        solution: 'Let y = 2x + 5 (1 mark). Rearranging: y - 5 = 2x, so x = (y - 5)/2 (1 mark). Therefore f⁻¹(x) = (x - 5)/2 (1 mark). Domain of f⁻¹ is x ∈ ℝ (same as range of f) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The function f is defined by f(x) = x² - 4x + 7 for x ≥ 2. Show that f has an inverse and find f⁻¹(x).',
        solution: 'Completing the square: f(x) = (x - 2)² + 3 (1 mark). For x ≥ 2, this is one-to-one (minimum at x = 2) so inverse exists (1 mark). Let y = (x - 2)² + 3. Then y - 3 = (x - 2)² (1 mark). x - 2 = √(y - 3) (positive root only as x ≥ 2), so x = 2 + √(y - 3) (1 mark). Therefore f⁻¹(x) = 2 + √(x - 3), domain x ≥ 3 (1 mark).',
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
      subtopic_slug: 'modulus',
      title: 'Modulus Function | A-Level Maths',
      meta_description: 'Master the modulus function including graphs, equations and inequalities for A-Level Mathematics.',
      introduction: `The modulus (absolute value) of a number is its magnitude regardless of sign. Written |x|, it gives the distance from zero on the number line. For example, |5| = 5 and |-5| = 5.

The modulus function is defined as: |x| = x if x ≥ 0, and |x| = -x if x < 0. This means the modulus of a negative number is its positive value. The graph of y = |x| is V-shaped with vertex at the origin.

For y = |f(x)|, the graph is obtained by reflecting any parts of y = f(x) that are below the x-axis to above it. For y = f(|x|), the graph for x ≥ 0 is the same as y = f(x), and for x < 0 it is the reflection in the y-axis.

Solving modulus equations requires consideration of different cases. For |x - a| = b, either x - a = b or x - a = -b, giving x = a + b or x = a - b. For |f(x)| = |g(x)|, either f(x) = g(x) or f(x) = -g(x).

Modulus inequalities are solved graphically or by considering cases. |x - a| < b means x is within distance b of a, so a - b < x < a + b. |x - a| > b means x is further than distance b from a, so x < a - b or x > a + b.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Solve the equation |2x - 3| = 7.',
        solution: 'Either 2x - 3 = 7 or 2x - 3 = -7 (1 mark). From 2x - 3 = 7: 2x = 10, x = 5 (1 mark). From 2x - 3 = -7: 2x = -4, x = -2 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Sketch the graph of y = |x² - 4|, showing the coordinates of any turning points and intersections with the axes.',
        solution: 'Start with y = x² - 4, a parabola with minimum at (0, -4) crossing x-axis at (-2, 0) and (2, 0) (1 mark). For |x² - 4|, reflect the part below the x-axis (between x = -2 and x = 2) above the x-axis (1 mark). This gives a W-shape with turning points at (0, 4), (-2, 0) and (2, 0) (1 mark). Y-intercept at (0, 4) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Solve the inequality |3x - 1| > |x + 5|.',
        solution: 'Method: Consider cases based on where each expression is positive/negative, or square both sides (1 mark). Squaring: (3x - 1)² > (x + 5)² (valid as both sides positive) (1 mark). 9x² - 6x + 1 > x² + 10x + 25. 8x² - 16x - 24 > 0 (1 mark). x² - 2x - 3 > 0. (x - 3)(x + 1) > 0 (1 mark). Solution: x < -1 or x > 3 (1 mark).',
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
      subtopic_slug: 'coordinate-geometry',
      title: 'Coordinate Geometry | A-Level Maths',
      meta_description: 'Master coordinate geometry including circles, parametric equations and intersection problems for A-Level Mathematics.',
      introduction: `Coordinate geometry connects algebra with geometric properties of lines, curves, and circles. A-Level extends GCSE knowledge to include circles, tangents, normals, and parametric representations.

The equation of a circle with centre (a, b) and radius r is (x - a)² + (y - b)² = r². The general form x² + y² + 2gx + 2fy + c = 0 has centre (-g, -f) and radius √(g² + f² - c), provided g² + f² - c > 0.

A tangent to a circle is perpendicular to the radius at the point of contact. To find the tangent at point P on a circle with centre C: find the gradient of CP, then the tangent gradient is the negative reciprocal. Use y - y₁ = m(x - x₁).

The intersection of a line and circle is found by substituting the line equation into the circle equation. This gives a quadratic - two solutions means two intersection points, one solution (discriminant = 0) means the line is tangent, no solutions means the line misses the circle.

Problems often involve finding where two circles intersect, or finding the equation of a circle through three given points. Setting up and solving simultaneous equations is key. The perpendicular bisector of a chord passes through the centre.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Write down the equation of the circle with centre (3, -2) and radius 5.',
        solution: 'Using (x - a)² + (y - b)² = r² (1 mark). Centre (3, -2) so a = 3, b = -2, and r = 5 (1 mark). Equation: (x - 3)² + (y + 2)² = 25 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the centre and radius of the circle x² + y² - 6x + 4y - 12 = 0.',
        solution: 'Completing the square: (x² - 6x) + (y² + 4y) = 12 (1 mark). (x - 3)² - 9 + (y + 2)² - 4 = 12 (1 mark). (x - 3)² + (y + 2)² = 25 (1 mark). Centre is (3, -2) and radius is √25 = 5 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The line y = 2x + c is a tangent to the circle x² + y² = 5. Find the possible values of c.',
        solution: 'Substitute y = 2x + c into x² + y² = 5: x² + (2x + c)² = 5 (1 mark). x² + 4x² + 4cx + c² = 5. 5x² + 4cx + (c² - 5) = 0 (1 mark). For tangent, discriminant = 0: (4c)² - 4(5)(c² - 5) = 0 (1 mark). 16c² - 20c² + 100 = 0. -4c² + 100 = 0 (1 mark). c² = 25, so c = ±5 (1 mark).',
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
      subtopic_slug: 'sequences-series',
      title: 'Sequences and Series | A-Level Maths',
      meta_description: 'Master sequences and series including arithmetic and geometric progressions, sigma notation for A-Level Mathematics.',
      introduction: `A sequence is an ordered list of numbers following a rule. A series is the sum of the terms in a sequence. Understanding these concepts is essential for A-Level Mathematics, with applications in finance, physics, and computing.

A sequence can be defined by a formula for the nth term (position-to-term rule), e.g., uₙ = 3n + 1 gives 4, 7, 10, 13, ... Or by a recurrence relation (term-to-term rule), e.g., uₙ₊₁ = 2uₙ - 1 with u₁ = 3 gives 3, 5, 9, 17, ...

Sigma notation (Σ) represents sums concisely. Σᵢ₌₁ⁿ f(i) means the sum of f(i) for i = 1, 2, ..., n. For example, Σᵢ₌₁⁵ i² = 1² + 2² + 3² + 4² + 5² = 55.

Standard series results: Σᵢ₌₁ⁿ 1 = n, Σᵢ₌₁ⁿ i = n(n+1)/2, Σᵢ₌₁ⁿ i² = n(n+1)(2n+1)/6. These formulas can be proved by induction and are used to evaluate complex series.

An increasing sequence has uₙ₊₁ > uₙ for all n; a decreasing sequence has uₙ₊₁ < uₙ. A periodic sequence repeats after a fixed number of terms. Understanding the behaviour of sequences helps analyse convergence and solve real-world problems.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A sequence is defined by uₙ = 4n - 1. Find the first three terms and the 20th term.',
        solution: 'u₁ = 4(1) - 1 = 3 (1 mark). u₂ = 4(2) - 1 = 7. u₃ = 4(3) - 1 = 11 (1 mark). u₂₀ = 4(20) - 1 = 79 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A sequence is defined by uₙ₊₁ = 3uₙ - 2, with u₁ = 4. Find u₂, u₃, and u₄.',
        solution: 'u₂ = 3u₁ - 2 = 3(4) - 2 = 10 (1 mark). u₃ = 3u₂ - 2 = 3(10) - 2 = 28 (1 mark). u₄ = 3u₃ - 2 = 3(28) - 2 = 82 (1 mark). Pattern shows rapid growth (1 mark for correct answers).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find Σᵣ₌₁²⁰ (3r + 2).',
        solution: 'Σᵣ₌₁²⁰ (3r + 2) = 3Σᵣ₌₁²⁰ r + Σᵣ₌₁²⁰ 2 (1 mark). = 3 × [20 × 21/2] + 2 × 20 (1 mark). = 3 × 210 + 40 (1 mark). = 630 + 40 (1 mark). = 670 (1 mark).',
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
      subtopic_slug: 'arithmetic-series',
      title: 'Arithmetic Series | A-Level Maths',
      meta_description: 'Master arithmetic sequences and series including finding terms, sums and solving problems for A-Level Mathematics.',
      introduction: `An arithmetic sequence has a constant difference between consecutive terms. If the first term is a and the common difference is d, then the sequence is a, a + d, a + 2d, a + 3d, ...

The nth term formula is uₙ = a + (n - 1)d. This allows you to find any term directly without calculating all previous terms. Given two terms, you can set up simultaneous equations to find a and d.

The sum of the first n terms of an arithmetic series is Sₙ = n/2[2a + (n - 1)d] or equivalently Sₙ = n/2[a + l] where l is the last term. These formulas are derived from pairing terms from each end of the series.

To prove the sum formula: write Sₙ = a + (a + d) + (a + 2d) + ... + [a + (n-1)d], then write it in reverse order and add. Each pair sums to 2a + (n-1)d, and there are n such pairs, giving 2Sₙ = n[2a + (n-1)d].

Applications include financial calculations (regular payments), counting problems, and modelling situations with constant rate of change. Problems may involve finding n given the sum, or finding the number of terms needed to exceed a given total.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'An arithmetic sequence has first term 5 and common difference 3. Find the 15th term and the sum of the first 15 terms.',
        solution: 'u₁₅ = a + (n-1)d = 5 + 14(3) = 5 + 42 = 47 (1 mark). S₁₅ = n/2[2a + (n-1)d] = 15/2[10 + 42] (1 mark). = 15/2 × 52 = 390 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The 3rd term of an arithmetic sequence is 11 and the 8th term is 31. Find the first term and common difference.',
        solution: 'u₃ = a + 2d = 11 ... (1) (1 mark). u₈ = a + 7d = 31 ... (2) (1 mark). Subtracting (1) from (2): 5d = 20, so d = 4 (1 mark). Substituting into (1): a + 8 = 11, so a = 3 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The sum of the first n terms of an arithmetic series is Sₙ = 2n² + 5n. Find the first term, common difference, and the 10th term.',
        solution: 'First term a = S₁ = 2(1)² + 5(1) = 7 (1 mark). S₂ = 2(4) + 10 = 18, so u₂ = S₂ - S₁ = 18 - 7 = 11 (1 mark). Common difference d = 11 - 7 = 4 (1 mark). u₁₀ = a + 9d = 7 + 36 = 43 (1 mark). Alternatively, uₙ = Sₙ - Sₙ₋₁ = 4n + 3, giving u₁₀ = 43 (1 mark for verification or alternative method).',
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
      subtopic_slug: 'geometric-series',
      title: 'Geometric Series | A-Level Maths',
      meta_description: 'Master geometric sequences and series including sum to infinity and convergence for A-Level Mathematics.',
      introduction: `A geometric sequence has a constant ratio between consecutive terms. If the first term is a and the common ratio is r, then the sequence is a, ar, ar², ar³, ... The nth term is uₙ = arⁿ⁻¹.

The sum of the first n terms is Sₙ = a(1 - rⁿ)/(1 - r) for r ≠ 1, or equivalently Sₙ = a(rⁿ - 1)/(r - 1). This is derived by multiplying Sₙ by r and subtracting.

For |r| < 1, the terms decrease in magnitude and the series converges to a finite sum as n → ∞. The sum to infinity is S∞ = a/(1 - r). This is used extensively in financial mathematics and probability.

For |r| ≥ 1, the series diverges - the partial sums grow without bound (or oscillate). The condition |r| < 1 is essential for convergence and must be stated when using the sum to infinity formula.

Applications include compound interest calculations, population growth models, and summing infinite recurring decimals. Many real-world phenomena exhibit geometric growth or decay.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A geometric sequence has first term 2 and common ratio 3. Find the 6th term.',
        solution: 'Using uₙ = arⁿ⁻¹ (1 mark). u₆ = 2 × 3⁵ (1 mark). = 2 × 243 = 486 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The first three terms of a geometric sequence are 8, 4, 2. Find the sum to infinity.',
        solution: 'First term a = 8 (1 mark). Common ratio r = 4/8 = 1/2 (1 mark). Since |r| = 1/2 < 1, the series converges (1 mark). S∞ = a/(1-r) = 8/(1 - 1/2) = 8/(1/2) = 16 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A geometric series has sum to infinity 40 and the sum of the first two terms is 32. Given that all terms are positive, find the first term and common ratio.',
        solution: 'S∞ = a/(1-r) = 40, so a = 40(1-r) ... (1) (1 mark). S₂ = a + ar = a(1+r) = 32 ... (2) (1 mark). Substituting (1) into (2): 40(1-r)(1+r) = 32. 40(1-r²) = 32 (1 mark). 1 - r² = 32/40 = 4/5. r² = 1/5, so r = 1/√5 (positive) (1 mark). a = 40(1 - 1/√5) = 40 - 40/√5 = 40 - 8√5 (1 mark).',
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
      subtopic_slug: 'product-rule',
      title: 'Product Rule | A-Level Maths',
      meta_description: 'Master the product rule for differentiating products of functions for A-Level Mathematics with worked examples.',
      introduction: `The product rule is used to differentiate the product of two functions. If y = uv where u and v are both functions of x, then dy/dx = u(dv/dx) + v(du/dx), often written as (uv)\' = uv\' + vu\'.

This rule is essential when you cannot simply expand the product. For example, y = x²sin(x) cannot be expanded, so we use the product rule with u = x² and v = sin(x).

To apply the product rule: identify u and v, find du/dx and dv/dx separately, then combine using the formula. For y = x²sin(x): du/dx = 2x, dv/dx = cos(x), so dy/dx = x²cos(x) + 2x·sin(x).

The product rule can be extended to three or more functions: (uvw)\' = u\'vw + uv\'w + uvw\'. However, it is often easier to apply the rule twice: first differentiate uv as a single function multiplied by w.

Common mistakes include forgetting one of the terms, or incorrectly differentiating u or v. Always clearly identify your u, v, du/dx, and dv/dx before combining. Check your answer by considering whether the result has the expected form.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Using the product rule, differentiate y = x³eˣ.',
        solution: 'Let u = x³ and v = eˣ (1 mark). du/dx = 3x² and dv/dx = eˣ (1 mark). dy/dx = u(dv/dx) + v(du/dx) = x³eˣ + 3x²eˣ = eˣ(x³ + 3x²) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Differentiate y = (2x + 1)sin(x).',
        solution: 'Let u = 2x + 1 and v = sin(x) (1 mark). du/dx = 2 and dv/dx = cos(x) (1 mark). dy/dx = (2x + 1)cos(x) + 2sin(x) (1 mark). This can be left as is or written as: (2x + 1)cos(x) + 2sin(x) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find the derivative of y = x²ln(x) and hence find the coordinates of the stationary point.',
        solution: 'Let u = x² and v = ln(x). du/dx = 2x, dv/dx = 1/x (1 mark). dy/dx = x²(1/x) + ln(x)(2x) = x + 2x·ln(x) = x(1 + 2ln(x)) (1 mark). At stationary point, dy/dx = 0: x(1 + 2ln(x)) = 0 (1 mark). Since x > 0 (domain of ln), 1 + 2ln(x) = 0, ln(x) = -1/2, x = e⁻⁰·⁵ = 1/√e (1 mark). y = (1/√e)²ln(1/√e) = (1/e)(-1/2) = -1/(2e). Point is (1/√e, -1/(2e)) (1 mark).',
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
      subtopic_slug: 'quotient-rule',
      title: 'Quotient Rule | A-Level Maths',
      meta_description: 'Master the quotient rule for differentiating fractions and quotients for A-Level Mathematics.',
      introduction: `The quotient rule differentiates a function that is a ratio of two other functions. If y = u/v where u and v are both functions of x, then dy/dx = [v(du/dx) - u(dv/dx)]/v².

The rule can be remembered as "bottom times derivative of top minus top times derivative of bottom, all over bottom squared", or using the mnemonic "lo d-hi minus hi d-lo over lo-lo" where lo = v and hi = u.

For example, to differentiate y = (x² + 1)/(x - 3): u = x² + 1, v = x - 3, du/dx = 2x, dv/dx = 1. Then dy/dx = [(x - 3)(2x) - (x² + 1)(1)]/(x - 3)² = (2x² - 6x - x² - 1)/(x - 3)² = (x² - 6x - 1)/(x - 3)².

Alternatively, y = u/v can be written as y = u × v⁻¹ and differentiated using the product rule combined with the chain rule. This gives the same result but can be more error-prone.

The quotient rule is essential for differentiating tan(x), sec(x), cosec(x), and cot(x). For example, d/dx(tan x) = d/dx(sin x/cos x) = [cos x·cos x - sin x·(-sin x)]/cos²x = (cos²x + sin²x)/cos²x = 1/cos²x = sec²x.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Use the quotient rule to differentiate y = x²/(x + 1).',
        solution: 'Let u = x² and v = x + 1 (1 mark). du/dx = 2x and dv/dx = 1 (1 mark). dy/dx = [(x + 1)(2x) - x²(1)]/(x + 1)² = (2x² + 2x - x²)/(x + 1)² = (x² + 2x)/(x + 1)² (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Differentiate y = eˣ/(x² + 1).',
        solution: 'Let u = eˣ and v = x² + 1 (1 mark). du/dx = eˣ and dv/dx = 2x (1 mark). dy/dx = [(x² + 1)eˣ - eˣ(2x)]/(x² + 1)² (1 mark). = eˣ(x² + 1 - 2x)/(x² + 1)² = eˣ(x - 1)²/(x² + 1)² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Use the quotient rule to prove that d/dx(cot x) = -cosec²x.',
        solution: 'cot x = cos x/sin x, so u = cos x, v = sin x (1 mark). du/dx = -sin x, dv/dx = cos x (1 mark). d/dx(cot x) = [sin x(-sin x) - cos x(cos x)]/sin²x (1 mark). = (-sin²x - cos²x)/sin²x = -(sin²x + cos²x)/sin²x (1 mark). = -1/sin²x = -cosec²x as required (1 mark).',
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
      subtopic_slug: 'chain-rule',
      title: 'Chain Rule | A-Level Maths',
      meta_description: 'Master the chain rule for differentiating composite functions for A-Level Mathematics with detailed examples.',
      introduction: `The chain rule differentiates composite functions - functions of functions. If y is a function of u and u is a function of x, then dy/dx = (dy/du) × (du/dx).

For y = f(g(x)), think of the outer function f and inner function g. Differentiate the outer function (keeping the inner unchanged) and multiply by the derivative of the inner function.

For example, y = (3x + 1)⁵: the outer function is ( )⁵ and inner is 3x + 1. So dy/dx = 5(3x + 1)⁴ × 3 = 15(3x + 1)⁴.

Standard forms: d/dx[f(x)]ⁿ = n[f(x)]ⁿ⁻¹ × f\'(x), d/dx[eᶠ⁽ˣ⁾] = eᶠ⁽ˣ⁾ × f\'(x), d/dx[ln(f(x))] = f\'(x)/f(x), d/dx[sin(f(x))] = cos(f(x)) × f\'(x).

The chain rule is fundamental and combines with the product and quotient rules for complex expressions. When differentiating, identify whether product, quotient, or chain rule (or a combination) is needed.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Differentiate y = (2x - 3)⁴.',
        solution: 'Using chain rule: outer function is ( )⁴, inner function is 2x - 3 (1 mark). dy/dx = 4(2x - 3)³ × 2 (1 mark). = 8(2x - 3)³ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find dy/dx if y = e^(3x² + 1).',
        solution: 'Let u = 3x² + 1, so y = eᵘ (1 mark). dy/du = eᵘ = e^(3x² + 1) and du/dx = 6x (1 mark). dy/dx = (dy/du)(du/dx) = e^(3x² + 1) × 6x (1 mark). = 6xe^(3x² + 1) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Differentiate y = ln(sin(2x)).',
        solution: 'This requires chain rule twice. Outer: ln( ), middle: sin( ), inner: 2x (1 mark). d/dx[ln(f)] = f\'/f (1 mark). d/dx[sin(2x)] = 2cos(2x) by chain rule (1 mark). dy/dx = 2cos(2x)/sin(2x) (1 mark). = 2cot(2x) (1 mark).',
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
      subtopic_slug: 'implicit-differentiation',
      title: 'Implicit Differentiation | A-Level Maths',
      meta_description: 'Master implicit differentiation for curves defined by equations for A-Level Mathematics.',
      introduction: `Implicit differentiation is used when y cannot easily be expressed explicitly as a function of x. Instead of rearranging to get y = f(x), we differentiate both sides of the equation with respect to x.

When differentiating terms involving y with respect to x, use the chain rule. For y², d/dx(y²) = 2y × dy/dx. For any function of y, d/dx(f(y)) = f\'(y) × dy/dx.

For example, to find dy/dx for x² + y² = 25: differentiate both sides with respect to x. 2x + 2y(dy/dx) = 0, so dy/dx = -x/y.

Product terms like xy require the product rule: d/dx(xy) = x(dy/dx) + y(1) = x(dy/dx) + y.

Implicit differentiation is essential for curves like circles, ellipses, and other relations where expressing y in terms of x is difficult or produces multiple branches. It is also used for finding tangents and normals to implicitly defined curves.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find dy/dx for the curve x² + y² = 16.',
        solution: 'Differentiating implicitly with respect to x: 2x + 2y(dy/dx) = 0 (1 mark). 2y(dy/dx) = -2x (1 mark). dy/dx = -x/y (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find dy/dx for the curve x³ + y³ = 3xy.',
        solution: 'Differentiating: 3x² + 3y²(dy/dx) = 3[x(dy/dx) + y] using product rule on RHS (1 mark). 3x² + 3y²(dy/dx) = 3x(dy/dx) + 3y (1 mark). 3y²(dy/dx) - 3x(dy/dx) = 3y - 3x² (1 mark). dy/dx(3y² - 3x) = 3y - 3x², so dy/dx = (y - x²)/(y² - x) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The curve C has equation x² - xy + y² = 7. Find the equation of the tangent to C at the point (1, 3).',
        solution: 'Differentiating: 2x - [x(dy/dx) + y] + 2y(dy/dx) = 0 (1 mark). 2x - y = x(dy/dx) - 2y(dy/dx) = dy/dx(x - 2y) (1 mark). dy/dx = (2x - y)/(x - 2y). At (1, 3): dy/dx = (2 - 3)/(1 - 6) = -1/-5 = 1/5 (1 mark). Tangent: y - 3 = (1/5)(x - 1) (1 mark). 5y - 15 = x - 1, so x - 5y + 14 = 0 (1 mark).',
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
      subtopic_slug: 'trigonometric-identities',
      title: 'Trigonometric Identities | A-Level Maths',
      meta_description: 'Master trigonometric identities including double angle, addition and factor formulae for A-Level Mathematics.',
      introduction: `Trigonometric identities are equations involving trig functions that are true for all values where both sides are defined. They are essential tools for simplifying expressions and solving equations in A-Level Mathematics.

The Pythagorean identity sin²x + cos²x = 1 leads to tan²x + 1 = sec²x and 1 + cot²x = cosec²x. These are used to simplify expressions and change between different trig functions.

Addition formulae: sin(A ± B) = sinA·cosB ± cosA·sinB and cos(A ± B) = cosA·cosB ∓ sinA·sinB. These enable expansion of compound angles and are used in solving equations and integrating products of trig functions.

Double angle formulae (from addition formulae with B = A): sin2A = 2sinA·cosA, cos2A = cos²A - sin²A = 2cos²A - 1 = 1 - 2sin²A. The cos2A forms are particularly useful for integration.

The R-formula expresses asinx + bcosx in the form Rsin(x + α) or Rcos(x + α), where R = √(a² + b²). This is essential for finding maximum/minimum values and solving equations like asinx + bcosx = c.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Simplify (1 - cos²x)/sin x.',
        solution: 'Using sin²x + cos²x = 1, we have 1 - cos²x = sin²x (1 mark). So (1 - cos²x)/sin x = sin²x/sin x (1 mark). = sin x (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Show that cos2x can be written as 1 - 2sin²x.',
        solution: 'Start with cos2x = cos²x - sin²x (from addition formula or given) (1 mark). Using sin²x + cos²x = 1, we have cos²x = 1 - sin²x (1 mark). Substituting: cos2x = (1 - sin²x) - sin²x (1 mark). = 1 - 2sin²x as required (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Express 3sinx + 4cosx in the form Rsin(x + α), where R > 0 and 0 < α < 90°. Hence find the maximum value of 3sinx + 4cosx.',
        solution: 'Rsin(x + α) = R[sinx·cosα + cosx·sinα] (1 mark). Comparing: Rcosα = 3 and Rsinα = 4 (1 mark). R² = 3² + 4² = 25, so R = 5 (1 mark). tanα = 4/3, so α = arctan(4/3) ≈ 53.1° (1 mark). Maximum value of 5sin(x + α) is 5, when sin(x + α) = 1 (1 mark).',
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
      subtopic_slug: 'radians',
      title: 'Radians | A-Level Maths',
      meta_description: 'Master radian measure, arc length and sector area calculations for A-Level Mathematics.',
      introduction: `Radians are an alternative unit for measuring angles. One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius. This makes radians the natural unit for calculus involving trigonometric functions.

The relationship is π radians = 180°, so 1 radian ≈ 57.3°. To convert: degrees to radians, multiply by π/180; radians to degrees, multiply by 180/π. Key values: 90° = π/2, 60° = π/3, 45° = π/4, 30° = π/6.

Arc length is s = rθ where θ is in radians. This elegant formula arises because θ radians corresponds to arc length θ times the radius. For a full circle, θ = 2π gives s = 2πr (circumference).

Sector area is A = ½r²θ where θ is in radians. This can be derived from the proportion of the full circle: (θ/2π) × πr² = ½r²θ. For a full circle, θ = 2π gives A = πr².

At A-Level, trigonometric functions in calculus use radians. The derivatives d/dx(sin x) = cos x and d/dx(cos x) = -sin x only hold when x is in radians. This is why radians are essential for advanced mathematics.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Convert 150° to radians, leaving your answer in terms of π.',
        solution: 'To convert degrees to radians, multiply by π/180 (1 mark). 150° = 150 × π/180 (1 mark). = 150π/180 = 5π/6 radians (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A sector of a circle has radius 6 cm and angle 2π/3 radians. Find the arc length and the area of the sector.',
        solution: 'Arc length s = rθ = 6 × 2π/3 (1 mark). = 4π cm (1 mark). Area A = ½r²θ = ½ × 36 × 2π/3 (1 mark). = 12π cm² (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A sector has area 48 cm² and perimeter 28 cm. Find the radius and the angle in radians.',
        solution: 'Area A = ½r²θ = 48, so r²θ = 96 ... (1) (1 mark). Perimeter = 2r + rθ = 28 ... (2) (1 mark). From (2): rθ = 28 - 2r. Substituting into (1): r(28 - 2r) = 96. 28r - 2r² = 96 (1 mark). r² - 14r + 48 = 0. (r - 6)(r - 8) = 0, so r = 6 or r = 8 (1 mark). If r = 6: θ = 96/36 = 8/3 rad. If r = 8: θ = 96/64 = 3/2 rad. Both are valid solutions (1 mark).',
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
      subtopic_slug: 'small-angle-approximations',
      title: 'Small Angle Approximations | A-Level Maths',
      meta_description: 'Master small angle approximations for sin, cos and tan for A-Level Mathematics applications.',
      introduction: `For small angles measured in radians, trigonometric functions can be approximated by simpler expressions. These approximations are useful for solving problems in physics and engineering where angles are small.

The small angle approximations are: sin θ ≈ θ, tan θ ≈ θ, and cos θ ≈ 1 - θ²/2 (or simply cos θ ≈ 1 for very small angles). These become more accurate as θ approaches zero.

These approximations come from Taylor series expansions: sin θ = θ - θ³/6 + θ⁵/120 - ..., cos θ = 1 - θ²/2 + θ⁴/24 - ..., tan θ = θ + θ³/3 + .... Keeping only the leading terms gives the approximations.

The approximations work well for θ < 0.1 radians (about 6°). For example, sin(0.1) = 0.0998... ≈ 0.1, and cos(0.1) = 0.995... ≈ 1 - 0.005 = 0.995.

Applications include the simple pendulum (where sin θ ≈ θ simplifies the equation of motion), lens equations in optics, and approximating complex expressions in physics. Remember: these only work when θ is in radians.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Using small angle approximations, find approximate values for sin(0.05), cos(0.05), and tan(0.05).',
        solution: 'For small θ in radians: sin θ ≈ θ, so sin(0.05) ≈ 0.05 (1 mark). cos θ ≈ 1 - θ²/2, so cos(0.05) ≈ 1 - 0.0025/2 = 1 - 0.00125 = 0.99875 (1 mark). tan θ ≈ θ, so tan(0.05) ≈ 0.05 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Using small angle approximations, simplify (1 - cos 2θ)/sin θ for small θ.',
        solution: 'For small θ: cos 2θ ≈ 1 - (2θ)²/2 = 1 - 2θ² (1 mark). So 1 - cos 2θ ≈ 1 - (1 - 2θ²) = 2θ² (1 mark). sin θ ≈ θ (1 mark). Therefore (1 - cos 2θ)/sin θ ≈ 2θ²/θ = 2θ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Show that for small θ, sin 3θ ≈ 3θ - 9θ³/2, and hence estimate sin(0.12) to 3 decimal places.',
        solution: 'Using sin(A + B) = sinA cosB + cosA sinB with A = 2θ, B = θ (1 mark). sin 3θ = sin 2θ cos θ + cos 2θ sin θ. Using approximations: sin 2θ ≈ 2θ, cos θ ≈ 1 - θ²/2, cos 2θ ≈ 1 - 2θ², sin θ ≈ θ (1 mark). sin 3θ ≈ 2θ(1 - θ²/2) + (1 - 2θ²)θ = 2θ - θ³ + θ - 2θ³ (1 mark). = 3θ - 3θ³ ≈ 3θ (to first order) or 3θ - 9θ³/2 if including θ³ term properly (1 mark). For sin(0.12): let 3θ = 0.12, θ = 0.04. sin(0.12) ≈ 0.12 - 9(0.04)³/2 ≈ 0.12 - 0.00029 ≈ 0.120 (1 mark).',
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
      subtopic_slug: 'integration-by-parts',
      title: 'Integration by Parts | A-Level Maths',
      meta_description: 'Master integration by parts technique for products of functions in A-Level Mathematics.',
      introduction: `Integration by parts is used to integrate products of functions. It is derived from the product rule for differentiation and is essential for A-Level Mathematics.

The formula is: ∫u(dv/dx)dx = uv - ∫v(du/dx)dx, often written as ∫u dv = uv - ∫v du. Choose u to be the function that simplifies when differentiated, and dv/dx to be the function easily integrated.

The LIATE rule helps choose u: Logarithms, Inverse trig, Algebraic (polynomials), Trigonometric, Exponential. Functions earlier in the list should generally be u.

For ∫xe^x dx: let u = x (simplifies to 1 when differentiated) and dv/dx = e^x (easy to integrate). Then du/dx = 1 and v = e^x. So ∫xe^x dx = xe^x - ∫e^x dx = xe^x - e^x + c.

Some integrals require integration by parts twice, or lead to the original integral appearing on the right-hand side, which can be solved algebraically. For ∫e^x sin x dx, two applications lead to an equation for the integral.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Find ∫x cos x dx using integration by parts.',
        solution: 'Let u = x and dv/dx = cos x (1 mark). Then du/dx = 1 and v = sin x (1 mark). ∫x cos x dx = x sin x - ∫sin x dx = x sin x + cos x + c (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find ∫x²e^x dx.',
        solution: 'Let u = x² and dv/dx = e^x. du/dx = 2x, v = e^x (1 mark). ∫x²e^x dx = x²e^x - 2∫xe^x dx (1 mark). For ∫xe^x dx, use parts again: = xe^x - e^x (1 mark). So ∫x²e^x dx = x²e^x - 2(xe^x - e^x) + c = e^x(x² - 2x + 2) + c (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Find ∫e^x sin x dx.',
        solution: 'Let I = ∫e^x sin x dx. First application: u = sin x, dv = e^x dx (1 mark). I = e^x sin x - ∫e^x cos x dx (1 mark). Second application on ∫e^x cos x dx: u = cos x, dv = e^x dx. = e^x cos x + ∫e^x sin x dx = e^x cos x + I (1 mark). Substituting: I = e^x sin x - (e^x cos x + I). I = e^x sin x - e^x cos x - I (1 mark). 2I = e^x(sin x - cos x). I = ½e^x(sin x - cos x) + c (1 mark).',
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
      subtopic_slug: 'integration-by-substitution',
      title: 'Integration by Substitution | A-Level Maths',
      meta_description: 'Master integration by substitution technique for composite functions in A-Level Mathematics.',
      introduction: `Integration by substitution is the reverse of the chain rule for differentiation. It transforms a difficult integral into a simpler one by changing the variable.

The method involves: (1) Choose a substitution u = g(x), (2) Find du/dx and hence express dx in terms of du, (3) Replace all x terms with u terms, (4) Integrate with respect to u, (5) Substitute back to get the answer in terms of x.

For ∫2x(x² + 1)⁵ dx, let u = x² + 1. Then du/dx = 2x, so du = 2x dx. The integral becomes ∫u⁵ du = u⁶/6 + c = (x² + 1)⁶/6 + c.

Trigonometric substitutions are useful for integrals involving √(a² - x²), √(a² + x²), or √(x² - a²). For √(a² - x²), use x = a sin θ; for √(a² + x²), use x = a tan θ.

For definite integrals, either change the limits when you substitute (recommended) or substitute back and use the original limits. If u = g(x), when x = a, u = g(a) and when x = b, u = g(b).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Using the substitution u = 2x + 1, find ∫6(2x + 1)² dx.',
        solution: 'Let u = 2x + 1, then du/dx = 2, so dx = du/2 (1 mark). ∫6(2x + 1)² dx = ∫6u² × (du/2) = ∫3u² du (1 mark). = u³ + c = (2x + 1)³ + c (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Using a suitable substitution, find ∫x√(x + 3) dx.',
        solution: 'Let u = x + 3, so x = u - 3 and dx = du (1 mark). ∫x√(x + 3) dx = ∫(u - 3)√u du = ∫(u^(3/2) - 3u^(1/2)) du (1 mark). = (2/5)u^(5/2) - 2u^(3/2) + c (1 mark). = (2/5)(x + 3)^(5/2) - 2(x + 3)^(3/2) + c (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Evaluate ∫₀¹ x/√(1 - x²) dx using the substitution x = sin θ.',
        solution: 'Let x = sin θ, then dx = cos θ dθ (1 mark). When x = 0, θ = 0; when x = 1, θ = π/2 (1 mark). √(1 - x²) = √(1 - sin²θ) = cos θ. Integral becomes ∫₀^(π/2) (sin θ/cos θ) × cos θ dθ = ∫₀^(π/2) sin θ dθ (1 mark). = [-cos θ]₀^(π/2) = -cos(π/2) + cos(0) (1 mark). = 0 + 1 = 1 (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelMathsPureExpanded;
