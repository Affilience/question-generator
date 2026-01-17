import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsAlgebra: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'algebra',
      subtopic_slug: 'partial-fractions',
      title: 'Partial Fractions | A-Level Maths',
      meta_description: 'Master partial fractions decomposition for integration and series. A-Level Maths practice questions with step-by-step solutions.',
      introduction: `Partial fractions is a technique for breaking down complex algebraic fractions into simpler components. This is particularly useful for integration and for finding sums of series. The method reverses the process of adding fractions with a common denominator.

For linear factors in the denominator, each factor (ax + b) contributes a term A/(ax + b) to the partial fraction decomposition. For repeated linear factors like (ax + b)², you need terms A/(ax + b) + B/(ax + b)².

The process involves: writing the fraction in partial fraction form with unknown constants, multiplying through by the common denominator, and solving for the constants. Constants can be found by substituting convenient values of x or by comparing coefficients.

For example, 1/((x-1)(x+2)) = A/(x-1) + B/(x+2). Multiplying through: 1 = A(x+2) + B(x-1). Setting x = 1 gives A = 1/3. Setting x = -2 gives B = -1/3. So the partial fractions are 1/(3(x-1)) - 1/(3(x+2)).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Express (5x + 1)/((x - 1)(x + 2)) in partial fractions.',
        solution: `**Step 1: Set up partial fractions**
(5x + 1)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2)

**Step 2: Multiply through by (x - 1)(x + 2)**
5x + 1 = A(x + 2) + B(x - 1)

**Step 3: Find A (let x = 1)**
5(1) + 1 = A(1 + 2) + B(0)
6 = 3A
A = 2

**Step 4: Find B (let x = -2)**
5(-2) + 1 = A(0) + B(-2 - 1)
-9 = -3B
B = 3

**Answer: 2/(x - 1) + 3/(x + 2)**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Express (3x² + x + 1)/((x + 1)(x² + 1)) in partial fractions.',
        solution: `**Step 1: Set up partial fractions**
For a linear factor (x + 1) and an irreducible quadratic (x² + 1):
(3x² + x + 1)/((x + 1)(x² + 1)) = A/(x + 1) + (Bx + C)/(x² + 1)

**Step 2: Multiply through by (x + 1)(x² + 1)**
3x² + x + 1 = A(x² + 1) + (Bx + C)(x + 1)

**Step 3: Find A (let x = -1)**
3(-1)² + (-1) + 1 = A(1 + 1) + 0
3 - 1 + 1 = 2A
3 = 2A
A = 3/2

**Step 4: Compare coefficients**
Expand: 3x² + x + 1 = Ax² + A + Bx² + Bx + Cx + C
= (A + B)x² + (B + C)x + (A + C)

Comparing x²: 3 = A + B → B = 3 - 3/2 = 3/2
Comparing constants: 1 = A + C → C = 1 - 3/2 = -1/2

**Answer: (3/2)/(x + 1) + (3x/2 - 1/2)/(x² + 1)**

Or: **3/(2(x + 1)) + (3x - 1)/(2(x² + 1))**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Express (x² + 3x + 4)/((x + 1)²(x - 1)) in partial fractions.',
        solution: `**Step 1: Set up partial fractions**
For repeated factor (x + 1)² and linear factor (x - 1):
= A/(x + 1) + B/(x + 1)² + C/(x - 1)

**Step 2: Multiply through by (x + 1)²(x - 1)**
x² + 3x + 4 = A(x + 1)(x - 1) + B(x - 1) + C(x + 1)²

**Step 3: Find C (let x = 1)**
1 + 3 + 4 = 0 + 0 + C(4)
8 = 4C
C = 2

**Step 4: Find B (let x = -1)**
1 - 3 + 4 = 0 + B(-2) + 0
2 = -2B
B = -1

**Step 5: Find A (let x = 0)**
0 + 0 + 4 = A(1)(-1) + (-1)(-1) + 2(1)
4 = -A + 1 + 2
4 = -A + 3
A = -1

**Check with coefficient of x²:**
A + C = -1 + 2 = 1 ✓

**Answer: -1/(x + 1) - 1/(x + 1)² + 2/(x - 1)**`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'algebra',
      subtopic_slug: 'binomial-expansion',
      title: 'Binomial Expansion | A-Level Maths',
      meta_description: 'Master binomial expansion for positive integers and general powers. A-Level Maths practice questions with solutions.',
      introduction: `The binomial theorem provides a formula for expanding expressions of the form (a + b)ⁿ. For positive integers n, the expansion is finite and uses binomial coefficients (combinations). For non-integer or negative powers, the expansion is infinite and only converges for |x| < 1.

For positive integer n: (a + b)ⁿ = Σ(r=0 to n) ⁿCᵣ aⁿ⁻ʳbʳ, where ⁿCᵣ = n!/(r!(n-r)!). Pascal's triangle provides an alternative way to find the coefficients.

For general n (including fractions and negatives): (1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + n(n-1)(n-2)x³/3! + ... This expansion is valid only when |x| < 1.

The binomial expansion is used for approximations when x is small, for expanding fractions in partial fraction form, and for proving series results. Understanding when the expansion converges is essential for correct application.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Expand (2 + x)⁴, simplifying each term.',
        solution: `**Using binomial expansion: (a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳbʳ**

Here a = 2, b = x, n = 4

(2 + x)⁴ = ⁴C₀(2)⁴(x)⁰ + ⁴C₁(2)³(x)¹ + ⁴C₂(2)²(x)² + ⁴C₃(2)¹(x)³ + ⁴C₄(2)⁰(x)⁴

= 1(16)(1) + 4(8)(x) + 6(4)(x²) + 4(2)(x³) + 1(1)(x⁴)

= 16 + 32x + 24x² + 8x³ + x⁴

**(2 + x)⁴ = 16 + 32x + 24x² + 8x³ + x⁴**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Find the expansion of (1 + 2x)⁻² up to and including the term in x³. State the range of values of x for which the expansion is valid.',
        solution: `**Using (1 + x)ⁿ = 1 + nx + n(n-1)x²/2! + n(n-1)(n-2)x³/3! + ...**

Here we have (1 + 2x)⁻² with n = -2

(1 + 2x)⁻² = 1 + (-2)(2x) + (-2)(-3)(2x)²/2! + (-2)(-3)(-4)(2x)³/3! + ...

= 1 - 4x + (6)(4x²)/2 + (-24)(8x³)/6 + ...

= 1 - 4x + 12x² - 32x³ + ...

**Expansion: 1 - 4x + 12x² - 32x³**

**Validity:**
The expansion is valid when |2x| < 1
Therefore **|x| < 1/2** or **-1/2 < x < 1/2**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Use the binomial expansion to find an approximation for √(1.02), giving your answer to 6 decimal places.',
        solution: `**Step 1: Express as binomial form**
√(1.02) = (1 + 0.02)^(1/2) = (1 + x)^(1/2) where x = 0.02

**Step 2: Apply binomial expansion with n = 1/2**
(1 + x)^(1/2) = 1 + (1/2)x + (1/2)(-1/2)x²/2! + (1/2)(-1/2)(-3/2)x³/3! + ...

= 1 + x/2 - x²/8 + x³/16 - ...

**Step 3: Substitute x = 0.02**
= 1 + 0.02/2 - (0.02)²/8 + (0.02)³/16 - ...
= 1 + 0.01 - 0.0004/8 + 0.000008/16 - ...
= 1 + 0.01 - 0.00005 + 0.0000005 - ...
= 1.0099505...

**Answer: √(1.02) ≈ 1.009950** (to 6 d.p.)

Check: (1.009950)² = 1.019999... ≈ 1.02 ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'algebra',
      subtopic_slug: 'proof',
      title: 'Proof | A-Level Maths',
      meta_description: 'Master mathematical proof techniques including proof by deduction and contradiction. A-Level Maths practice questions.',
      introduction: `Mathematical proof is the cornerstone of mathematics, providing certainty that statements are true in all cases. At A-level, you need to be familiar with several proof techniques: proof by deduction, proof by exhaustion, proof by counter-example, and proof by contradiction.

Proof by deduction uses logical reasoning from known facts or axioms to establish new results. This is the most common form of proof. Each step follows logically from previous steps, leading inevitably to the conclusion.

Proof by exhaustion checks all possible cases. This is useful when there are a finite number of cases to consider. Proof by counter-example disproves a statement by finding a single case where it fails—one counter-example is enough to show a statement is false.

Proof by contradiction assumes the opposite of what you want to prove, then shows this leads to a logical impossibility. This technique is particularly useful for proving statements about irrational numbers or infinitely many cases.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Prove that the sum of any two odd numbers is even.',
        solution: `**Proof by deduction:**

**Step 1: Define odd numbers**
Let the two odd numbers be (2m + 1) and (2n + 1), where m and n are integers.

**Step 2: Add them together**
(2m + 1) + (2n + 1) = 2m + 2n + 2

**Step 3: Factor out 2**
= 2(m + n + 1)

**Step 4: Conclude**
Since m and n are integers, (m + n + 1) is also an integer.

Let k = m + n + 1, where k is an integer.

The sum equals 2k, which is **even** by definition.

**Therefore, the sum of any two odd numbers is even.** ∎`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Prove by contradiction that √2 is irrational.',
        solution: `**Proof by contradiction:**

**Step 1: Assume the opposite**
Assume √2 is rational. Then √2 = a/b where a and b are integers with no common factors (lowest terms).

**Step 2: Square both sides**
2 = a²/b²
a² = 2b²

**Step 3: Deduce a is even**
Since a² = 2b², a² is even.
If a² is even, then a must be even (since odd² = odd).
So a = 2k for some integer k.

**Step 4: Substitute**
(2k)² = 2b²
4k² = 2b²
2k² = b²

**Step 5: Deduce b is even**
Since b² = 2k², b² is even.
Therefore b is even.

**Step 6: Identify contradiction**
Both a and b are even, so they share a common factor of 2.
This contradicts our assumption that a/b was in lowest terms.

**Step 7: Conclude**
Our assumption must be false. Therefore **√2 is irrational.** ∎`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Prove that there are infinitely many prime numbers.',
        solution: `**Proof by contradiction (Euclid's proof):**

**Step 1: Assume the opposite**
Assume there are finitely many prime numbers.
List them as p₁, p₂, p₃, ..., pₙ.

**Step 2: Construct a new number**
Consider N = (p₁ × p₂ × p₃ × ... × pₙ) + 1

This is the product of all primes, plus 1.

**Step 3: Analyze N**
N is either prime or composite.

**Case 1: N is prime**
Then N is a prime not in our list (since N > pₙ).
This contradicts our assumption that we listed all primes.

**Case 2: N is composite**
Then N has a prime factor, call it p.
When we divide N by any prime pᵢ from our list:
N ÷ pᵢ = (p₁ × p₂ × ... × pₙ)/pᵢ + 1/pᵢ
The first term is an integer, but 1/pᵢ is not.
So N leaves remainder 1 when divided by any prime in our list.
Therefore p is not in our list—contradiction.

**Step 4: Conclude**
In both cases, we reach a contradiction.
Therefore our assumption is false.

**There are infinitely many prime numbers.** ∎`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'edexcel',
      topic_slug: 'algebra',
      subtopic_slug: 'exponentials-logarithms',
      title: 'Exponentials and Logarithms | A-Level Maths',
      meta_description: 'Master exponential and logarithmic functions including laws and equations. A-Level Maths practice questions with solutions.',
      introduction: `Exponentials and logarithms are inverse operations. If aˣ = b, then x = logₐb. The most important base is e ≈ 2.718..., giving the natural logarithm ln x = logₑx. The function eˣ has the special property that its derivative equals itself.

Laws of logarithms mirror the laws of indices: logₐ(xy) = logₐx + logₐy, logₐ(x/y) = logₐx - logₐy, logₐ(xⁿ) = n logₐx. The change of base formula logₐx = logᵦx/logᵦa allows conversion between bases.

Exponential equations often require taking logs of both sides. For example, to solve 3ˣ = 20: x = log₃20 = ln20/ln3 ≈ 2.73. Logarithmic equations require combining logs using the laws before converting back to exponential form.

Exponential growth and decay are modelled by y = Aeᵏᵗ, where A is the initial value and k is the growth constant (positive for growth, negative for decay). These models apply to population growth, radioactive decay, compound interest, and cooling.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Solve the equation 5ˣ = 8, giving your answer to 3 significant figures.',
        solution: `**Taking logarithms of both sides:**

5ˣ = 8

log(5ˣ) = log(8)

x log(5) = log(8)

x = log(8)/log(5)

**Using calculator:**
x = 0.903.../0.699...
x = 1.2920...

**x = 1.29** (to 3 s.f.)

Alternative using natural logs:
x = ln(8)/ln(5) = 2.079.../1.609... = 1.29 ✓`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Solve the equation log₂(x + 3) + log₂(x - 1) = 3.',
        solution: `**Step 1: Use the addition law of logs**
log₂(x + 3) + log₂(x - 1) = 3
log₂[(x + 3)(x - 1)] = 3

**Step 2: Convert to exponential form**
(x + 3)(x - 1) = 2³
(x + 3)(x - 1) = 8

**Step 3: Expand and rearrange**
x² + 2x - 3 = 8
x² + 2x - 11 = 0

**Step 4: Solve using the quadratic formula**
x = (-2 ± √(4 + 44))/2
x = (-2 ± √48)/2
x = (-2 ± 4√3)/2
x = -1 ± 2√3

**Step 5: Check validity**
x = -1 + 2√3 ≈ 2.46 ✓ (makes both logs defined)
x = -1 - 2√3 ≈ -4.46 ✗ (makes x - 1 negative)

**Answer: x = -1 + 2√3** (or ≈ 2.46)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The population of bacteria doubles every 30 minutes. Initially there are 1000 bacteria. Find: (a) a formula for the population P after t hours, (b) the population after 4 hours, (c) how long until the population reaches 1 million.',
        solution: `**(a) Finding the formula:**

Since the population doubles every 30 minutes (0.5 hours):
P = P₀ × 2^(t/0.5) where P₀ = 1000

**P = 1000 × 2^(2t)** (or equivalently P = 1000 × 4ᵗ)

**(b) Population after 4 hours:**
P = 1000 × 2^(2×4)
P = 1000 × 2⁸
P = 1000 × 256
**P = 256,000 bacteria**

**(c) Time to reach 1 million:**
1,000,000 = 1000 × 2^(2t)
1000 = 2^(2t)

Taking log₂:
log₂(1000) = 2t
t = log₂(1000)/2
t = ln(1000)/(2 ln 2)
t = 6.908.../1.386...
t = 4.98...

**t ≈ 5 hours** (or 4.98 hours)

Check: After 5 hours: P = 1000 × 2¹⁰ = 1,024,000 ✓`,
        display_order: 3
      }
    ]
  }
];
