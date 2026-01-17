import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'simultaneous-equations',
      title: 'GCSE Maths: Simultaneous Equations Practice Questions',
      meta_description: 'Practice simultaneous equations with GCSE Maths questions. Master elimination and substitution methods with step-by-step solutions.',
      introduction: `Simultaneous equations are two or more equations that share the same variables. The solution is the set of values that satisfy all equations at the same time. In GCSE Maths, you'll mainly solve pairs of linear equations using elimination or substitution.

The elimination method works by adding or subtracting equations to remove one variable. If you have 2x + y = 7 and x + y = 4, subtracting eliminates y, giving x = 3. Then substitute back to find y = 1.

The substitution method rearranges one equation to make a variable the subject, then substitutes into the other equation. Choose the method that looks easiest based on the coefficients. For Higher tier, you may need to solve a linear equation simultaneously with a quadratic.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Solve the simultaneous equations:\n\nx + y = 8\nx - y = 2', solution: '**Method: Elimination (add equations)**\n\nAdd the equations to eliminate y:\n(x + y) + (x - y) = 8 + 2\n2x = 10\nx = 5\n\nSubstitute x = 5 into first equation:\n5 + y = 8\ny = 3\n\n**Solution: x = 5, y = 3** ✓\n\nCheck in second equation: 5 - 3 = 2 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Solve the simultaneous equations:\n\n3x + 2y = 19\n2x - y = 1', solution: '**Method: Elimination**\n\nMultiply second equation by 2 to match y coefficients:\n3x + 2y = 19\n4x - 2y = 2\n\nAdd equations:\n7x = 21\nx = 3\n\nSubstitute into 2x - y = 1:\n6 - y = 1\ny = 5\n\n**Solution: x = 3, y = 5** ✓\n\nCheck: 3(3) + 2(5) = 9 + 10 = 19 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'Solve the simultaneous equations:\n\n4x + 3y = 17\n3x - 4y = -6', solution: '**Method: Elimination (make coefficients match)**\n\nMultiply first equation by 4: 16x + 12y = 68\nMultiply second equation by 3: 9x - 12y = -18\n\nAdd equations:\n25x = 50\nx = 2\n\nSubstitute into 4x + 3y = 17:\n8 + 3y = 17\n3y = 9\ny = 3\n\n**Solution: x = 2, y = 3** ✓\n\nCheck: 3(2) - 4(3) = 6 - 12 = -6 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'quadratic-equations',
      title: 'GCSE Maths: Quadratic Equations Practice Questions',
      meta_description: 'Master solving quadratic equations with GCSE Maths practice. Learn factorising, formula, and completing the square methods.',
      introduction: `Quadratic equations have the form ax² + bx + c = 0, where a ≠ 0. They can have two solutions, one solution, or no real solutions. The three main solving methods are factorising, using the quadratic formula, and completing the square.

Factorising is quickest when it works. For x² + 5x + 6 = 0, find two numbers that multiply to 6 and add to 5. These are 2 and 3, so (x + 2)(x + 3) = 0, giving x = -2 or x = -3.

The quadratic formula x = (-b ± √(b² - 4ac)) / 2a works for any quadratic. The discriminant b² - 4ac tells you about solutions: if positive, two distinct solutions; if zero, one repeated solution; if negative, no real solutions.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Solve by factorising:\n\nx² + 7x + 12 = 0', solution: '**Find two numbers that:**\n- Multiply to give 12\n- Add to give 7\n\nThe numbers are 3 and 4.\n\nFactorise:\n(x + 3)(x + 4) = 0\n\nEither x + 3 = 0, so x = -3\nOr x + 4 = 0, so x = -4\n\n**Solutions: x = -3 or x = -4** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Solve by factorising:\n\n2x² - 5x - 3 = 0', solution: '**For ax² + bx + c, find numbers that multiply to ac and add to b**\n\nac = 2 × (-3) = -6\nb = -5\n\nNumbers: -6 and 1 (multiply to -6, add to -5)\n\nRewrite middle term:\n2x² - 6x + x - 3 = 0\n\nFactor by grouping:\n2x(x - 3) + 1(x - 3) = 0\n(2x + 1)(x - 3) = 0\n\nEither 2x + 1 = 0, so x = -½\nOr x - 3 = 0, so x = 3\n\n**Solutions: x = -½ or x = 3** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Solve using the quadratic formula:\n\n3x² + 7x - 2 = 0\n\nGive your answers to 2 decimal places.', solution: '**Quadratic formula:** x = (-b ± √(b² - 4ac)) / 2a\n\na = 3, b = 7, c = -2\n\nb² - 4ac = 49 - 4(3)(-2) = 49 + 24 = 73\n\nx = (-7 ± √73) / 6\n\nx = (-7 + √73) / 6 = (-7 + 8.544) / 6 = 1.544/6 = 0.26\n\nx = (-7 - √73) / 6 = (-7 - 8.544) / 6 = -15.544/6 = -2.59\n\n**Solutions: x = 0.26 or x = -2.59** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'quadratic-formula',
      title: 'GCSE Maths: Quadratic Formula Practice Questions',
      meta_description: 'Practice using the quadratic formula with GCSE Maths questions. Learn when and how to apply this essential solving method.',
      introduction: `The quadratic formula solves any equation of the form ax² + bx + c = 0. The formula is x = (-b ± √(b² - 4ac)) / 2a. Memorise this formula - it's given on the exam paper, but knowing it saves time.

The expression under the square root, b² - 4ac, is called the discriminant. It determines the nature of solutions: when positive, there are two distinct real solutions; when zero, one repeated solution; when negative, no real solutions exist.

Always identify a, b, and c carefully before substituting. Remember that c could be negative, and the formula has -b (not +b) at the start. Work through systematically, calculating b² - 4ac first, then the full formula.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Use the quadratic formula to solve:\n\nx² + 5x + 4 = 0', solution: '**Identify:** a = 1, b = 5, c = 4\n\n**Calculate discriminant:**\nb² - 4ac = 25 - 4(1)(4) = 25 - 16 = 9\n\n**Apply formula:**\nx = (-5 ± √9) / 2(1)\nx = (-5 ± 3) / 2\n\nx = (-5 + 3) / 2 = -2/2 = -1\nx = (-5 - 3) / 2 = -8/2 = -4\n\n**Solutions: x = -1 or x = -4** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Solve using the quadratic formula:\n\n2x² - 3x - 5 = 0', solution: '**Identify:** a = 2, b = -3, c = -5\n\n**Calculate discriminant:**\nb² - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49\n\n**Apply formula:**\nx = (3 ± √49) / 4\nx = (3 ± 7) / 4\n\nx = (3 + 7) / 4 = 10/4 = 2.5\nx = (3 - 7) / 4 = -4/4 = -1\n\n**Solutions: x = 2.5 or x = -1** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'The equation 3x² + kx + 12 = 0 has exactly one solution.\n\nFind the possible values of k.', solution: '**For exactly one solution, discriminant = 0**\n\nb² - 4ac = 0\nk² - 4(3)(12) = 0\nk² - 144 = 0\nk² = 144\nk = ±12\n\n**Check:**\nIf k = 12: 3x² + 12x + 12 = 0\nDiscriminant = 144 - 144 = 0 ✓\n\nIf k = -12: 3x² - 12x + 12 = 0\nDiscriminant = 144 - 144 = 0 ✓\n\n**Possible values: k = 12 or k = -12** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'factorising-quadratics',
      title: 'GCSE Maths: Factorising Quadratics Practice Questions',
      meta_description: 'Practice factorising quadratic expressions with GCSE Maths questions. Master finding factors and checking your answers.',
      introduction: `Factorising quadratics is the reverse of expanding brackets. For x² + bx + c, find two numbers that multiply to c and add to b. For example, x² + 7x + 10 factorises to (x + 2)(x + 5) because 2 × 5 = 10 and 2 + 5 = 7.

When factorising ax² + bx + c where a ≠ 1, find two numbers that multiply to ac and add to b. Then use grouping or trial and improvement. For example, 2x² + 7x + 3: ac = 6, find 1 and 6. Rewrite as 2x² + 6x + x + 3, then factor as 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).

Always check your answer by expanding. This catches sign errors and confirms your factorisation is correct.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Factorise:\n\nx² + 9x + 20', solution: '**Find two numbers that:**\n- Multiply to give 20\n- Add to give 9\n\nFactor pairs of 20: 1×20, 2×10, 4×5\n4 + 5 = 9 ✓\n\n**x² + 9x + 20 = (x + 4)(x + 5)** ✓\n\nCheck: (x + 4)(x + 5) = x² + 5x + 4x + 20 = x² + 9x + 20 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 2, content: 'Factorise:\n\nx² - 2x - 15', solution: '**Find two numbers that:**\n- Multiply to give -15\n- Add to give -2\n\nFactor pairs of -15: -5×3, 5×(-3), -15×1, 15×(-1)\n-5 + 3 = -2 ✓\n\n**x² - 2x - 15 = (x - 5)(x + 3)** ✓\n\nCheck: (x - 5)(x + 3) = x² + 3x - 5x - 15 = x² - 2x - 15 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Factorise:\n\n3x² + 11x + 6', solution: '**For 3x² + 11x + 6:**\nac = 3 × 6 = 18\n\nFind two numbers that multiply to 18 and add to 11:\n2 and 9 (2 × 9 = 18, 2 + 9 = 11) ✓\n\nRewrite the middle term:\n3x² + 2x + 9x + 6\n\nFactor by grouping:\nx(3x + 2) + 3(3x + 2)\n= (x + 3)(3x + 2)\n\n**3x² + 11x + 6 = (x + 3)(3x + 2)** ✓\n\nCheck: (x + 3)(3x + 2) = 3x² + 2x + 9x + 6 = 3x² + 11x + 6 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'completing-the-square',
      title: 'GCSE Maths: Completing the Square Practice Questions',
      meta_description: 'Master completing the square with GCSE Maths practice. Essential for solving quadratics and finding turning points.',
      introduction: `Completing the square rewrites a quadratic expression in the form (x + p)² + q. This form reveals the minimum (or maximum) point of the quadratic graph and helps solve quadratic equations.

For x² + bx + c, the process is: halve the coefficient of x, square it, then adjust. So x² + 6x + 5 becomes (x + 3)² - 9 + 5 = (x + 3)² - 4. The minimum point is (-3, -4).

When a ≠ 1, first factor out a from the x² and x terms, complete the square inside the bracket, then simplify. This is a Higher tier skill that requires careful work with coefficients.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Write in completed square form:\n\nx² + 8x', solution: '**Halve the coefficient of x:** 8 ÷ 2 = 4\n\n**Write as (x + 4)² and adjust:**\n(x + 4)² = x² + 8x + 16\n\nWe want x² + 8x, so subtract 16:\nx² + 8x = (x + 4)² - 16\n\n**Answer: (x + 4)² - 16** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Write x² + 6x + 2 in the form (x + p)² + q.\n\nState the values of p and q.', solution: '**Complete the square:**\nx² + 6x + 2\n\nHalve 6: 6 ÷ 2 = 3\n(x + 3)² = x² + 6x + 9\n\nSo x² + 6x = (x + 3)² - 9\n\nTherefore:\nx² + 6x + 2 = (x + 3)² - 9 + 2\n= (x + 3)² - 7\n\n**Answer: (x + 3)² - 7**\n**p = 3, q = -7** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'By completing the square, solve:\n\nx² - 4x - 3 = 0\n\nGive your answers in surd form.', solution: '**Complete the square:**\nx² - 4x - 3 = 0\n\nHalve -4: -4 ÷ 2 = -2\n(x - 2)² = x² - 4x + 4\n\nSo x² - 4x = (x - 2)² - 4\n\nRewrite equation:\n(x - 2)² - 4 - 3 = 0\n(x - 2)² - 7 = 0\n(x - 2)² = 7\n\nTake square root:\nx - 2 = ±√7\nx = 2 ± √7\n\n**Solutions: x = 2 + √7 or x = 2 - √7** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'linear-graphs',
      title: 'GCSE Maths: Linear Graphs Practice Questions',
      meta_description: 'Practice plotting and interpreting linear graphs with GCSE Maths questions. Master y = mx + c and gradient calculations.',
      introduction: `Linear graphs are straight lines. The equation y = mx + c tells you everything: m is the gradient (steepness) and c is the y-intercept (where the line crosses the y-axis). A positive gradient slopes upward; a negative gradient slopes downward.

To plot a linear graph, create a table of values by substituting x values into the equation, plot the points, and draw a straight line through them. You only need two points for a straight line, but three provides a useful check.

To find the gradient between two points, use the formula: gradient = (change in y) / (change in x) = (y₂ - y₁) / (x₂ - x₁). The gradient represents the rate of change - how much y increases for each unit increase in x.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'The equation of a line is y = 3x - 2.\n\n(a) What is the gradient of the line?\n(b) What is the y-intercept?', solution: '**For y = mx + c:**\n- m is the gradient\n- c is the y-intercept\n\n**y = 3x - 2**\n\n(a) Gradient = **3** ✓\n\n(b) y-intercept = **-2** ✓\n(The line crosses the y-axis at (0, -2))', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A line passes through points (1, 4) and (3, 10).\n\nFind the equation of the line in the form y = mx + c.', solution: '**Step 1: Find the gradient**\nm = (y₂ - y₁)/(x₂ - x₁)\nm = (10 - 4)/(3 - 1)\nm = 6/2 = 3\n\n**Step 2: Find c using y = mx + c**\nUsing point (1, 4):\n4 = 3(1) + c\n4 = 3 + c\nc = 1\n\n**Equation: y = 3x + 1** ✓\n\nCheck with (3, 10): y = 3(3) + 1 = 10 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Line L has equation 2y - 4x = 6.\n\n(a) Rearrange the equation into the form y = mx + c.\n(b) Find the equation of the line parallel to L that passes through (2, -1).', solution: '(a) **Rearrange 2y - 4x = 6:**\n2y = 4x + 6\ny = 2x + 3\n\n**Equation: y = 2x + 3** ✓\n\n(b) **Parallel lines have the same gradient**\nGradient of L = 2\n\nParallel line: y = 2x + c\n\nPasses through (2, -1):\n-1 = 2(2) + c\n-1 = 4 + c\nc = -5\n\n**Parallel line: y = 2x - 5** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'inequalities',
      title: 'GCSE Maths: Inequalities Practice Questions',
      meta_description: 'Practice solving and representing inequalities with GCSE Maths questions. Master number lines and algebraic methods.',
      introduction: `Inequalities use symbols to show that one quantity is greater or less than another: < (less than), > (greater than), ≤ (less than or equal to), ≥ (greater than or equal to). Unlike equations, inequalities often have multiple solutions.

Solve inequalities like equations, but remember: when multiplying or dividing by a negative number, reverse the inequality sign. For example, if -2x > 6, dividing by -2 gives x < -3 (sign flips).

On number lines, show solutions using circles and shading: open circles (○) for < or > (not including the value), filled circles (●) for ≤ or ≥ (including the value). Shade the region that contains all valid solutions.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Solve the inequality:\n\n3x + 4 < 16', solution: '**Solve like an equation:**\n3x + 4 < 16\n3x < 16 - 4\n3x < 12\nx < 4\n\n**Solution: x < 4** ✓\n\nThis means x can be any value less than 4 (not including 4).', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Solve the inequality:\n\n5 - 2x ≥ 11\n\nShow your solution on a number line.', solution: '**Solve:**\n5 - 2x ≥ 11\n-2x ≥ 11 - 5\n-2x ≥ 6\n\n**Divide by -2 (flip the sign!):**\nx ≤ -3\n\n**Solution: x ≤ -3** ✓\n\n**Number line:**\n←●━━━━━━━━━━━━━━\n  -3  -2  -1   0\n\n(Filled circle at -3, shaded to the left)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Find the integer values of n that satisfy:\n\n-3 < 2n - 1 ≤ 7', solution: '**Solve the compound inequality:**\n\n-3 < 2n - 1 ≤ 7\n\n**Add 1 to all parts:**\n-3 + 1 < 2n ≤ 7 + 1\n-2 < 2n ≤ 8\n\n**Divide all parts by 2:**\n-1 < n ≤ 4\n\n**This means:** n is greater than -1 AND less than or equal to 4.\n\n**Integer values:**\nn = 0, 1, 2, 3, 4\n\n**Answer: n = 0, 1, 2, 3, 4** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'sequences',
      title: 'GCSE Maths: Sequences Practice Questions',
      meta_description: 'Practice recognising and working with sequences in GCSE Maths. Master arithmetic, geometric, and other sequence types.',
      introduction: `A sequence is an ordered list of numbers following a pattern. Arithmetic sequences add a constant (common difference) each time: 2, 5, 8, 11... adds 3. Geometric sequences multiply by a constant (common ratio) each time: 3, 6, 12, 24... multiplies by 2.

The nth term formula gives any term directly from its position. For arithmetic sequences, if the common difference is d and the first term is a, the nth term is a + (n-1)d, often simplified to dn + (a-d).

Quadratic sequences have second differences that are constant. Fibonacci-type sequences add previous terms: each term is the sum of the two before it.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Here is a sequence: 4, 7, 10, 13, 16...\n\n(a) Find the next two terms.\n(b) Describe the rule for continuing this sequence.', solution: '(a) **Find the pattern:**\n7 - 4 = 3\n10 - 7 = 3\n13 - 10 = 3\n\nThe common difference is +3.\n\n16 + 3 = 19\n19 + 3 = 22\n\n**Next two terms: 19, 22** ✓\n\n(b) **Rule: Add 3 to the previous term** ✓\n(Or: "Start at 4, add 3 each time")', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The nth term of a sequence is 4n - 3.\n\n(a) Find the first 4 terms.\n(b) Is 87 a term in this sequence? Show your working.', solution: '(a) **Substitute n = 1, 2, 3, 4:**\nn = 1: 4(1) - 3 = 1\nn = 2: 4(2) - 3 = 5\nn = 3: 4(3) - 3 = 9\nn = 4: 4(4) - 3 = 13\n\n**First 4 terms: 1, 5, 9, 13** ✓\n\n(b) **Set 4n - 3 = 87:**\n4n - 3 = 87\n4n = 90\nn = 22.5\n\nSince n must be a whole number, **87 is NOT a term in this sequence** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The first four terms of a quadratic sequence are:\n\n3, 10, 21, 36\n\nFind the nth term of this sequence.', solution: '**Find differences:**\nFirst differences: 7, 11, 15 (not constant)\nSecond differences: 4, 4 (constant!)\n\n**For quadratic sequences:**\nCoefficient of n² = ½ × second difference = ½ × 4 = 2\n\nSo nth term starts with 2n².\n\n**Compare 2n² with sequence:**\n2n²: 2, 8, 18, 32\nSequence: 3, 10, 21, 36\nDifference: 1, 2, 3, 4 (this is n!)\n\n**So nth term = 2n² + n**\n\nCheck: n=1: 2+1=3 ✓\nn=2: 8+2=10 ✓\nn=3: 18+3=21 ✓\nn=4: 32+4=36 ✓\n\n**nth term = 2n² + n** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'nth-term',
      title: 'GCSE Maths: Nth Term Practice Questions',
      meta_description: 'Master finding the nth term of sequences with GCSE Maths practice. Essential for arithmetic and quadratic sequences.',
      introduction: `The nth term formula lets you find any term in a sequence without listing all previous terms. For an arithmetic sequence with first term a and common difference d, the nth term is dn + (a - d). Simply put: multiply the common difference by n, then adjust.

To find the nth term of 5, 9, 13, 17...: the common difference is 4, so start with 4n. When n = 1, 4n = 4, but the first term is 5, so add 1. The nth term is 4n + 1.

You can verify by checking: 4(1) + 1 = 5 ✓, 4(2) + 1 = 9 ✓, 4(3) + 1 = 13 ✓. Always check at least the first three terms to confirm your formula.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Find the nth term of the sequence:\n\n7, 12, 17, 22, 27...', solution: '**Find the common difference:**\n12 - 7 = 5\n17 - 12 = 5\n\nCommon difference = 5\n\n**Start with 5n:**\nWhen n = 1: 5(1) = 5\nBut first term is 7\nSo add 2\n\n**nth term = 5n + 2** ✓\n\nCheck:\nn = 1: 5 + 2 = 7 ✓\nn = 2: 10 + 2 = 12 ✓\nn = 3: 15 + 2 = 17 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The nth term of a sequence is 3n + 5.\n\nThe nth term of a different sequence is 50 - 2n.\n\n(a) Find the value of n when both sequences have the same term.\n(b) What is this common term?', solution: '(a) **Set expressions equal:**\n3n + 5 = 50 - 2n\n3n + 2n = 50 - 5\n5n = 45\nn = 9\n\n**n = 9** ✓\n\n(b) **Substitute n = 9 into either formula:**\n3(9) + 5 = 27 + 5 = 32\n\nOr check: 50 - 2(9) = 50 - 18 = 32 ✓\n\n**Common term = 32** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Here are the first 5 terms of an arithmetic sequence:\n\n-3, 1, 5, 9, 13\n\n(a) Find the nth term.\n(b) Which term of the sequence equals 117?\n(c) Prove that 200 is not a term in this sequence.', solution: '(a) **Common difference:**\n1 - (-3) = 4\n\nnth term = 4n + c\nWhen n = 1: 4(1) + c = -3\n4 + c = -3\nc = -7\n\n**nth term = 4n - 7** ✓\n\n(b) **Solve 4n - 7 = 117:**\n4n = 124\nn = 31\n\n**117 is the 31st term** ✓\n\n(c) **Solve 4n - 7 = 200:**\n4n = 207\nn = 51.75\n\nSince n must be a positive integer, and 51.75 is not an integer, **200 is not a term in this sequence** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'expanding-brackets',
      title: 'GCSE Maths: Expanding Brackets Practice Questions',
      meta_description: 'Practice expanding single and double brackets with GCSE Maths questions. Master multiplication and simplification.',
      introduction: `Expanding brackets means multiplying out to remove the brackets. For a single bracket like 3(x + 4), multiply each term inside by 3: 3x + 12. Remember to multiply both the coefficient and the sign of each term.

For double brackets like (x + 3)(x + 5), multiply each term in the first bracket by each term in the second. Using FOIL: First (x × x = x²), Outside (x × 5 = 5x), Inside (3 × x = 3x), Last (3 × 5 = 15). Then collect like terms: x² + 8x + 15.

Watch out for negative signs - they're the most common source of errors. (-2)(x - 3) = -2x + 6, not -2x - 6. The minus times minus gives a plus.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Expand and simplify:\n\n3(2x + 5) + 2(x - 3)', solution: '**Expand each bracket:**\n3(2x + 5) = 6x + 15\n2(x - 3) = 2x - 6\n\n**Combine:**\n6x + 15 + 2x - 6\n\n**Collect like terms:**\n6x + 2x + 15 - 6\n= 8x + 9\n\n**Answer: 8x + 9** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Expand and simplify:\n\n(x + 4)(x + 7)', solution: '**Use FOIL or grid method:**\n\n(x + 4)(x + 7)\n\nFirst: x × x = x²\nOutside: x × 7 = 7x\nInside: 4 × x = 4x\nLast: 4 × 7 = 28\n\n**Combine:**\nx² + 7x + 4x + 28\n\n**Collect like terms:**\nx² + 11x + 28\n\n**Answer: x² + 11x + 28** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Expand and simplify:\n\n(2x - 3)(x + 5) - (x - 2)²', solution: '**Expand (2x - 3)(x + 5):**\n= 2x² + 10x - 3x - 15\n= 2x² + 7x - 15\n\n**Expand (x - 2)²:**\n= (x - 2)(x - 2)\n= x² - 2x - 2x + 4\n= x² - 4x + 4\n\n**Subtract:**\n(2x² + 7x - 15) - (x² - 4x + 4)\n= 2x² + 7x - 15 - x² + 4x - 4\n\n**Collect like terms:**\n= x² + 11x - 19\n\n**Answer: x² + 11x - 19** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'algebraic-fractions',
      title: 'GCSE Maths: Algebraic Fractions Practice Questions (Higher)',
      meta_description: 'Master algebraic fractions with GCSE Maths Higher practice. Learn to simplify, add, subtract, multiply and divide.',
      introduction: `Algebraic fractions have variables in the numerator and/or denominator. To simplify, factorise the numerator and denominator, then cancel common factors. For example, (x² - 4)/(x + 2) = (x-2)(x+2)/(x+2) = x - 2.

To add or subtract algebraic fractions, find a common denominator (usually the product of the denominators if they share no common factors, or their LCM if they do). Convert each fraction, then combine the numerators.

To multiply, multiply numerators together and denominators together, then simplify. To divide, flip the second fraction and multiply. Always check if you can cancel before multiplying to keep numbers small.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Simplify:\n\n   12xy\n   ────\n   4x²', solution: '**Cancel common factors:**\n\n12xy     12 × x × y\n──── = ────────────\n4x²      4 × x × x\n\nCancel 4 from 12/4 = 3\nCancel one x from top and bottom\n\n= 3y/x\n\n**Answer: 3y/x** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Simplify:\n\n   x² - 9\n   ─────────\n   x² + 5x + 6', solution: '**Factorise numerator (difference of two squares):**\nx² - 9 = (x + 3)(x - 3)\n\n**Factorise denominator:**\nx² + 5x + 6 = (x + 2)(x + 3)\n\n**Simplify:**\n(x + 3)(x - 3)\n───────────────\n(x + 2)(x + 3)\n\nCancel (x + 3):\n\n= (x - 3)/(x + 2)\n\n**Answer: (x - 3)/(x + 2)** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Write as a single fraction in its simplest form:\n\n   3         2\n   ───── - ─────\n   x + 1    x - 2', solution: '**Common denominator:** (x + 1)(x - 2)\n\n**Convert each fraction:**\n   3        3(x - 2)\n───── = ─────────────\nx + 1   (x + 1)(x - 2)\n\n   2        2(x + 1)\n───── = ─────────────\nx - 2   (x + 1)(x - 2)\n\n**Subtract:**\n3(x - 2) - 2(x + 1)\n───────────────────\n  (x + 1)(x - 2)\n\n**Expand numerator:**\n3x - 6 - 2x - 2\n─────────────────\n(x + 1)(x - 2)\n\n=    x - 8\n  ─────────────\n  (x + 1)(x - 2)\n\n**Answer: (x - 8)/((x + 1)(x - 2))** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'rearranging-formulae',
      title: 'GCSE Maths: Rearranging Formulae Practice Questions',
      meta_description: 'Practice rearranging formulae with GCSE Maths questions. Make different variables the subject using inverse operations.',
      introduction: `Rearranging formulae means changing the subject (the variable on its own). Apply inverse operations in reverse order to isolate the desired variable. Whatever you do to one side, you must do to the other.

When the subject appears inside a fraction, multiply both sides by the denominator first. When it's under a square root, square both sides. When it's squared, take the square root (remembering ± for some contexts).

For more complex formulae where the subject appears twice, collect all terms containing that variable on one side, factor it out, then isolate. For example, to make x the subject of ax + b = cx + d: get ax - cx = d - b, then x(a - c) = d - b, so x = (d - b)/(a - c).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Make x the subject of:\n\ny = 5x - 3', solution: '**Rearrange step by step:**\n\ny = 5x - 3\n\nAdd 3 to both sides:\ny + 3 = 5x\n\nDivide both sides by 5:\n(y + 3)/5 = x\n\n**x = (y + 3)/5** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Make r the subject of:\n\nV = πr²h', solution: '**Rearrange to isolate r:**\n\nV = πr²h\n\nDivide both sides by πh:\nV/(πh) = r²\n\nTake the square root:\n√(V/(πh)) = r\n\n**r = √(V/(πh))** ✓\n\n(Note: r is positive as it represents a radius)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Make x the subject of:\n\n     ax + 5\ny = ────────\n     x - 2', solution: '**Multiply both sides by (x - 2):**\ny(x - 2) = ax + 5\n\n**Expand:**\nxy - 2y = ax + 5\n\n**Collect x terms on one side:**\nxy - ax = 5 + 2y\n\n**Factor out x:**\nx(y - a) = 5 + 2y\n\n**Divide by (y - a):**\n\n**x = (5 + 2y)/(y - a)** ✓\n\n(Or equivalently: x = (2y + 5)/(y - a))', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'substitution',
      title: 'GCSE Maths: Substitution Practice Questions',
      meta_description: 'Practice substituting values into expressions and formulae with GCSE Maths questions. Essential algebraic skill.',
      introduction: `Substitution means replacing letters with numbers. When substituting, use brackets around negative numbers to avoid sign errors. For example, if x = -3 and you need x², write (-3)² = 9, not -3² = -9.

Follow BIDMAS when evaluating after substitution. Work through powers first, then multiplication and division, then addition and subtraction. Show each step clearly to earn method marks.

In formula questions, identify what you're given and what you need to find. Substitute the known values, then solve for the unknown. Always check your answer makes sense in context.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'If a = 4 and b = -2, find the value of:\n\n(a) 3a + 2b\n(b) a² - b', solution: '(a) **Substitute a = 4, b = -2:**\n3a + 2b\n= 3(4) + 2(-2)\n= 12 + (-4)\n= 12 - 4\n= **8** ✓\n\n(b) **Substitute:**\na² - b\n= (4)² - (-2)\n= 16 - (-2)\n= 16 + 2\n= **18** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The formula for the area of a trapezium is:\n\nA = ½(a + b)h\n\nFind A when a = 8, b = 12, and h = 5.', solution: '**Substitute the values:**\n\nA = ½(a + b)h\nA = ½(8 + 12) × 5\n\n**Work through using BIDMAS:**\nA = ½(20) × 5\nA = 10 × 5\n\n**A = 50 square units** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Given that x = -2, y = 3, and z = -1, find the value of:\n\n   x³ - 2y²\n   ─────────\n      4z', solution: '**Calculate numerator:**\nx³ = (-2)³ = -8\n2y² = 2 × (3)² = 2 × 9 = 18\nx³ - 2y² = -8 - 18 = -26\n\n**Calculate denominator:**\n4z = 4 × (-1) = -4\n\n**Divide:**\n-26 ÷ (-4) = 26/4 = 6.5\n\n**Answer: 6.5 (or 13/2)** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'simplifying-expressions',
      title: 'GCSE Maths: Simplifying Expressions Practice Questions',
      meta_description: 'Practice simplifying algebraic expressions with GCSE Maths questions. Master collecting like terms and index laws.',
      introduction: `Simplifying expressions means writing them in the shortest equivalent form. Collect like terms (terms with identical letter parts) by adding or subtracting their coefficients. 3x + 5x = 8x, but 3x + 5y cannot be simplified further.

For terms with powers, remember that only identical powers can be combined: 2x² + 3x² = 5x², but 2x² + 3x stays as is. When multiplying, add the powers: x³ × x² = x⁵. When dividing, subtract powers: x⁵ ÷ x² = x³.

Watch for hidden like terms: 4ab and 3ba are like terms because ab = ba (multiplication is commutative). Similarly, -2xy and 5yx can be combined to give 3xy.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Simplify:\n\n5x + 3y - 2x + 7y', solution: '**Group like terms:**\n5x - 2x + 3y + 7y\n\n**Combine:**\n(5 - 2)x + (3 + 7)y\n= 3x + 10y\n\n**Answer: 3x + 10y** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 2, content: 'Simplify:\n\n4a²b × 3ab³', solution: '**Multiply coefficients:**\n4 × 3 = 12\n\n**Multiply like variables (add powers):**\na² × a = a³\nb × b³ = b⁴\n\n**Combine:**\n12a³b⁴\n\n**Answer: 12a³b⁴** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Simplify fully:\n\n   18x⁴y²\n   ────────\n   6x²y⁵', solution: '**Divide coefficients:**\n18 ÷ 6 = 3\n\n**Divide like variables (subtract powers):**\nx⁴ ÷ x² = x^(4-2) = x²\ny² ÷ y⁵ = y^(2-5) = y⁻³ = 1/y³\n\n**Combine:**\n3 × x² × 1/y³\n= 3x²/y³\n\n**Answer: 3x²/y³** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'solving-equations',
      title: 'GCSE Maths: Solving Equations Practice Questions',
      meta_description: 'Practice solving linear equations with GCSE Maths questions. Build confidence with one-step to multi-step problems.',
      introduction: `Solving equations means finding the value of the unknown that makes the equation true. Use inverse operations to isolate the variable: undo addition with subtraction, multiplication with division, and vice versa. What you do to one side must be done to the other.

For equations with the unknown on both sides, collect variable terms on one side and number terms on the other. For 5x + 3 = 2x + 15, subtract 2x from both sides to get 3x + 3 = 15, then subtract 3 to get 3x = 12, so x = 4.

Always check your answer by substituting back into the original equation. Both sides should give the same value. This catches arithmetic errors and confirms your solution.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Solve:\n\n4x - 7 = 13', solution: '**Add 7 to both sides:**\n4x - 7 + 7 = 13 + 7\n4x = 20\n\n**Divide both sides by 4:**\nx = 20 ÷ 4\nx = 5\n\n**Answer: x = 5** ✓\n\nCheck: 4(5) - 7 = 20 - 7 = 13 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Solve:\n\n5(x - 2) = 3x + 6', solution: '**Expand brackets:**\n5x - 10 = 3x + 6\n\n**Subtract 3x from both sides:**\n2x - 10 = 6\n\n**Add 10 to both sides:**\n2x = 16\n\n**Divide by 2:**\nx = 8\n\n**Answer: x = 8** ✓\n\nCheck: 5(8-2) = 5(6) = 30\n3(8) + 6 = 24 + 6 = 30 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Solve:\n\n   x + 3     x - 1\n   ───── = ─────\n     4         3', solution: '**Multiply both sides by 12 (LCM of 4 and 3):**\n\n12 × (x + 3)/4 = 12 × (x - 1)/3\n3(x + 3) = 4(x - 1)\n\n**Expand:**\n3x + 9 = 4x - 4\n\n**Subtract 3x from both sides:**\n9 = x - 4\n\n**Add 4 to both sides:**\n13 = x\n\n**Answer: x = 13** ✓\n\nCheck: (13+3)/4 = 16/4 = 4\n(13-1)/3 = 12/3 = 4 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'linear-equations',
      title: 'GCSE Maths: Linear Equations Practice Questions',
      meta_description: 'Master linear equations with GCSE Maths practice. Learn systematic solving methods for all equation types.',
      introduction: `Linear equations contain variables to the power of 1 only (no x², x³, etc.). They always have exactly one solution. The goal is to isolate the variable by performing the same operation on both sides.

Work systematically: expand any brackets first, collect like terms, then use inverse operations. For equations involving fractions, multiply through by the common denominator to clear fractions early - this often makes the calculation easier.

Real-world problems often require forming equations from words. Identify the unknown, write expressions for the quantities described, set up the equation based on the given relationship, then solve.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Solve:\n\n3x + 8 = 2x + 15', solution: '**Subtract 2x from both sides:**\n3x - 2x + 8 = 15\nx + 8 = 15\n\n**Subtract 8 from both sides:**\nx = 15 - 8\nx = 7\n\n**Answer: x = 7** ✓\n\nCheck: 3(7) + 8 = 29\n2(7) + 15 = 29 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A rectangle has length (2x + 5) cm and width (x + 1) cm.\nThe perimeter is 42 cm.\n\nFind the value of x.', solution: '**Perimeter = 2(length + width)**\n42 = 2[(2x + 5) + (x + 1)]\n42 = 2[3x + 6]\n42 = 6x + 12\n\n**Subtract 12:**\n30 = 6x\n\n**Divide by 6:**\nx = 5\n\n**Answer: x = 5** ✓\n\nCheck: Length = 2(5) + 5 = 15 cm\nWidth = 5 + 1 = 6 cm\nPerimeter = 2(15 + 6) = 42 cm ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Solve:\n\n2(3x - 1) - 5(x - 4) = 3(x + 2)', solution: '**Expand all brackets:**\n6x - 2 - 5x + 20 = 3x + 6\n\n**Simplify left side:**\nx + 18 = 3x + 6\n\n**Subtract x from both sides:**\n18 = 2x + 6\n\n**Subtract 6:**\n12 = 2x\n\n**Divide by 2:**\nx = 6\n\n**Answer: x = 6** ✓\n\nCheck:\nLeft: 2(18-1) - 5(6-4) = 2(17) - 5(2) = 34 - 10 = 24\nRight: 3(6+2) = 3(8) = 24 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'quadratic-graphs',
      title: 'GCSE Maths: Quadratic Graphs Practice Questions',
      meta_description: 'Practice plotting and interpreting quadratic graphs with GCSE Maths questions. Understand parabolas, turning points, and roots.',
      introduction: `Quadratic graphs are parabolas - smooth U-shaped curves. For y = ax² + bx + c: if a > 0, the parabola opens upward (minimum point); if a < 0, it opens downward (maximum point). The larger |a|, the steeper the curve.

The turning point (vertex) is where the graph changes direction. You can find it by completing the square: y = (x + p)² + q has its turning point at (-p, q). The line of symmetry passes through the turning point.

The roots (or solutions) are where the graph crosses the x-axis, found by solving ax² + bx + c = 0. A parabola can have two roots, one root (touching the axis), or no real roots (entirely above or below the axis).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'The graph of y = x² - 4x + 3 crosses the x-axis at two points.\n\nFind the x-coordinates of these points.', solution: '**Where the graph crosses the x-axis, y = 0:**\nx² - 4x + 3 = 0\n\n**Factorise:**\n(x - 1)(x - 3) = 0\n\nEither x - 1 = 0, so x = 1\nOr x - 3 = 0, so x = 3\n\n**The graph crosses at x = 1 and x = 3** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'A parabola has equation y = x² - 6x + 5.\n\n(a) Find where the graph crosses the y-axis.\n(b) Find the coordinates of the turning point.\n(c) Sketch the graph.', solution: '(a) **y-axis: substitute x = 0:**\ny = 0² - 6(0) + 5 = 5\n**Crosses y-axis at (0, 5)** ✓\n\n(b) **Complete the square:**\ny = x² - 6x + 5\ny = (x - 3)² - 9 + 5\ny = (x - 3)² - 4\n\n**Turning point: (3, -4)** ✓\n(minimum since coefficient of x² is positive)\n\n(c) **Key features for sketch:**\n- U-shaped parabola (a > 0)\n- Minimum at (3, -4)\n- y-intercept at (0, 5)\n- Roots at x = 1 and x = 5 (from solving x² - 6x + 5 = 0)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The graph y = -x² + 2x + k passes through the point (3, 2).\n\n(a) Find the value of k.\n(b) Find the maximum value of y.', solution: '(a) **Substitute (3, 2):**\n2 = -(3)² + 2(3) + k\n2 = -9 + 6 + k\n2 = -3 + k\nk = 5\n\n**k = 5** ✓\n\n(b) **Complete the square for y = -x² + 2x + 5:**\ny = -(x² - 2x) + 5\ny = -[(x - 1)² - 1] + 5\ny = -(x - 1)² + 1 + 5\ny = -(x - 1)² + 6\n\n**Maximum y = 6** ✓\n(occurs when x = 1)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'functions',
      title: 'GCSE Maths: Functions Practice Questions (Higher)',
      meta_description: 'Master functions with GCSE Maths Higher practice. Learn function notation, composite functions, and inverse functions.',
      introduction: `A function is a rule that maps each input to exactly one output. In function notation, f(x) = 2x + 3 means "f is the function that doubles x and adds 3." To find f(5), substitute x = 5: f(5) = 2(5) + 3 = 13.

Composite functions combine two functions: fg(x) means apply g first, then f to the result. If f(x) = x + 2 and g(x) = 3x, then fg(x) = f(g(x)) = f(3x) = 3x + 2. Note that fg(x) ≠ gf(x) in general - order matters!

The inverse function f⁻¹ reverses what f does. To find it: write y = f(x), swap x and y, then solve for y. For f(x) = 2x + 3: y = 2x + 3, swap to get x = 2y + 3, solve to get y = (x - 3)/2, so f⁻¹(x) = (x - 3)/2.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'f(x) = 3x - 5\n\nFind:\n(a) f(4)\n(b) f(-2)', solution: '(a) **Substitute x = 4:**\nf(4) = 3(4) - 5\nf(4) = 12 - 5\n**f(4) = 7** ✓\n\n(b) **Substitute x = -2:**\nf(-2) = 3(-2) - 5\nf(-2) = -6 - 5\n**f(-2) = -11** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'f(x) = 2x + 1 and g(x) = x²\n\nFind:\n(a) fg(3)\n(b) gf(3)', solution: '(a) **fg(3) means apply g first, then f:**\ng(3) = 3² = 9\nfg(3) = f(9) = 2(9) + 1 = 19\n**fg(3) = 19** ✓\n\n(b) **gf(3) means apply f first, then g:**\nf(3) = 2(3) + 1 = 7\ngf(3) = g(7) = 7² = 49\n**gf(3) = 49** ✓\n\nNote: fg(3) ≠ gf(3)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'f(x) = (4x - 3)/2\n\n(a) Find f⁻¹(x).\n(b) Solve f(x) = f⁻¹(x).', solution: '(a) **Find the inverse:**\nLet y = (4x - 3)/2\n\nSwap x and y:\nx = (4y - 3)/2\n\nSolve for y:\n2x = 4y - 3\n2x + 3 = 4y\ny = (2x + 3)/4\n\n**f⁻¹(x) = (2x + 3)/4** ✓\n\n(b) **Solve f(x) = f⁻¹(x):**\n(4x - 3)/2 = (2x + 3)/4\n\nMultiply both sides by 4:\n2(4x - 3) = 2x + 3\n8x - 6 = 2x + 3\n6x = 9\nx = 1.5\n\n**x = 1.5 (or 3/2)** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'proof',
      title: 'GCSE Maths: Algebraic Proof Practice Questions',
      meta_description: 'Master algebraic proof with GCSE Maths questions. Learn to prove statements using logical algebraic arguments.',
      introduction: `Algebraic proof uses algebra to show that a statement is always true. You must use general terms (like n for any integer) rather than specific examples. Showing something works for a few values is NOT a proof - it might fail for other values.

For proofs involving integers, use: n for any integer, 2n for even numbers, 2n + 1 for odd numbers, 3n for multiples of 3, and so on. Consecutive integers are n, n + 1, n + 2, etc.

Structure your proof clearly: state what you're proving, define your terms, show the algebraic manipulation, and conclude with what you've shown. For example, to prove odd + odd = even: (2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1), which is even.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Prove that the sum of any two even numbers is always even.', solution: '**Let the two even numbers be 2a and 2b**\n(where a and b are any integers)\n\n**Add them:**\n2a + 2b\n= 2(a + b)\n\n**This is 2 × (a + b)**\n\nSince (a + b) is an integer, 2(a + b) is divisible by 2.\n\n**Therefore, the sum of any two even numbers is always even.** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Prove that the product of any two consecutive integers is always even.', solution: '**Let the consecutive integers be n and n + 1**\n\n**Their product is:**\nn(n + 1)\n= n² + n\n\n**Consider two cases:**\n\n**Case 1:** If n is even, say n = 2k\nn(n + 1) = 2k(2k + 1)\n= 2 × k(2k + 1)\nThis is even. ✓\n\n**Case 2:** If n is odd, then n + 1 is even, say n + 1 = 2m\nn(n + 1) = n × 2m\n= 2 × nm\nThis is even. ✓\n\n**In both cases, n(n + 1) is even.**\n\n**Therefore, the product of any two consecutive integers is always even.** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'Prove that the difference between the squares of any two consecutive odd numbers is always a multiple of 8.', solution: '**Let the consecutive odd numbers be (2n - 1) and (2n + 1)**\n\n**Find the difference of their squares:**\n(2n + 1)² - (2n - 1)²\n\n**Expand each square:**\n= (4n² + 4n + 1) - (4n² - 4n + 1)\n= 4n² + 4n + 1 - 4n² + 4n - 1\n= 8n\n\n**Since 8n = 8 × n, this is divisible by 8 for any integer n.**\n\n**Therefore, the difference between the squares of any two consecutive odd numbers is always a multiple of 8.** ✓\n\nExample check: 5² - 3² = 25 - 9 = 16 = 8 × 2 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'algebra',
      subtopic_slug: 'iteration',
      title: 'GCSE Maths: Iteration Practice Questions (Higher)',
      meta_description: 'Master iteration with GCSE Maths Higher practice. Learn to use iterative formulae to find solutions to equations.',
      introduction: `Iteration is a method for finding approximate solutions to equations. You start with an initial value (x₀), apply a formula to get the next value (x₁), then repeat. If the values converge (get closer together), they approach the solution.

To use iteration: rearrange the equation into the form x = g(x), start with an initial estimate x₀, calculate x₁ = g(x₀), then x₂ = g(x₁), and continue until values stabilize to the required accuracy.

Different rearrangements of the same equation can give different iterative formulae. Some converge quickly, some slowly, and some don't converge at all. In exam questions, you'll be given the formula to use.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Use the iterative formula:\n\nxₙ₊₁ = (xₙ² + 3) / 4\n\nwith x₀ = 1 to find x₁, x₂, and x₃.\n\nGive answers to 4 decimal places.', solution: '**Starting with x₀ = 1:**\n\nx₁ = (1² + 3) / 4\n   = 4 / 4\n   = **1.0000**\n\nx₂ = (1² + 3) / 4\n   = 4 / 4\n   = **1.0000**\n\nx₃ = (1² + 3) / 4\n   = 4 / 4\n   = **1.0000**\n\n**x₁ = 1.0000, x₂ = 1.0000, x₃ = 1.0000** ✓\n\n(The sequence has already converged!)', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'The equation x³ - 3x - 5 = 0 has a solution between 2 and 3.\n\nUsing the iterative formula:\n\nxₙ₊₁ = ∛(3xₙ + 5)\n\nwith x₀ = 2, find the solution correct to 2 decimal places.', solution: '**Start with x₀ = 2:**\n\nx₁ = ∛(3(2) + 5) = ∛11 = 2.2240\n\nx₂ = ∛(3(2.2240) + 5) = ∛11.672 = 2.2614\n\nx₃ = ∛(3(2.2614) + 5) = ∛11.7842 = 2.2686\n\nx₄ = ∛(3(2.2686) + 5) = ∛11.8058 = 2.2699\n\nx₅ = ∛(3(2.2699) + 5) = ∛11.8097 = 2.2702\n\nx₆ = ∛(3(2.2702) + 5) = ∛11.8106 = 2.2703\n\n**To 2 d.p., the solution is x = 2.27** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'The equation x³ + 2x - 9 = 0 can be rearranged to give:\n\nx = (9 - x³) / 2\n\n(a) Starting with x₀ = 1.5, use iteration to find x₄. Give your answer to 4 decimal places.\n\n(b) Explain what this tells you about a solution to the equation.', solution: '(a) **Using xₙ₊₁ = (9 - xₙ³) / 2:**\n\nx₀ = 1.5\n\nx₁ = (9 - 1.5³) / 2 = (9 - 3.375) / 2 = 2.8125\n\nx₂ = (9 - 2.8125³) / 2 = (9 - 22.247) / 2 = -6.6235\n\nx₃ = (9 - (-6.6235)³) / 2 = (9 + 290.72) / 2 = 149.86\n\nx₄ = (9 - 149.86³) / 2 = very large negative\n\n**x₄ ≈ -1,682,500** (diverging rapidly)\n\n(b) **The iteration is diverging** - the values are getting larger and larger rather than converging.\n\nThis tells us that this particular rearrangement does not lead to a solution using this starting value. A different rearrangement or starting point would be needed. ✓', display_order: 3 }
    ]
  }
];

export default data;
