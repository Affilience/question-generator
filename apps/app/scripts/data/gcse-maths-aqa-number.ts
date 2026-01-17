import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'ordering-negative-numbers',
      title: 'AQA GCSE Maths: Ordering Negative Numbers Practice Questions',
      meta_description: 'Practice ordering negative numbers with AQA GCSE Maths questions. Master comparing and arranging negative integers and decimals.',
      introduction: `Ordering negative numbers requires understanding that numbers get smaller as they move further left on the number line. A common mistake is thinking that -10 is greater than -2 because 10 is greater than 2, but actually -2 is greater because it's closer to zero.

When ordering negative numbers, visualise a number line or think about temperature: -5°C is warmer than -15°C. The key rule is that any positive number is greater than any negative number, and for negative numbers, the one with the smaller absolute value is greater.

In AQA GCSE Maths, you'll order lists of negative integers, compare negative decimals and fractions, and use inequality symbols correctly with negative numbers. You may also need to order numbers in context, such as temperatures, bank balances, or sea depths.`
    },
    questions: [
      { difficulty: 'easy', marks: 1, content: 'Put these numbers in order from smallest to largest:\n\n-3, 5, -7, 0, -1', solution: 'On a number line, numbers increase from left to right.\n\n-7 is furthest left (smallest)\n-3 is next\n-1 is next\n0 is next\n5 is furthest right (largest)\n\n**Answer: -7, -3, -1, 0, 5**', display_order: 1 },
      { difficulty: 'medium', marks: 2, content: 'Write these temperatures in order from coldest to warmest:\n\n-2.5°C, -8°C, 3°C, -2.8°C, 0°C', solution: 'Convert to easier comparison: -8 is coldest.\n\nComparing -2.5 and -2.8: Since -2.8 is further from zero, -2.8 < -2.5\n\nOrder from coldest: -8°C, -2.8°C, -2.5°C, 0°C, 3°C\n\n**Answer: -8°C, -2.8°C, -2.5°C, 0°C, 3°C**', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Insert the correct inequality symbol (< or >) between each pair:\n\n(a) -4 ___ -9\n(b) -0.5 ___ -0.05\n(c) -2/3 ___ -3/4', solution: '(a) -4 is closer to zero than -9, so -4 is greater.\n**-4 > -9** ✓\n\n(b) -0.5 = -0.50, comparing with -0.05: 0.50 > 0.05, so -0.50 < -0.05\n**-0.5 < -0.05** ✓\n\n(c) Convert to decimals: -2/3 ≈ -0.667, -3/4 = -0.75\nSince -0.667 > -0.75 (closer to zero)\n**-2/3 > -3/4** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'operations-with-negative-numbers',
      title: 'AQA GCSE Maths: Operations with Negative Numbers Practice Questions',
      meta_description: 'Master adding, subtracting, multiplying and dividing negative numbers with AQA GCSE Maths practice questions and worked solutions.',
      introduction: `Operations with negative numbers follow specific rules that you must memorise. For addition and subtraction, think of movement on a number line: adding a positive moves right, adding a negative moves left, subtracting a positive moves left, and subtracting a negative moves right.

For multiplication and division, the sign rules are: same signs give a positive result, different signs give a negative result. So positive × positive = positive, negative × negative = positive, but positive × negative = negative.

A useful trick for subtraction: subtracting a negative is the same as adding a positive. So 5 - (-3) = 5 + 3 = 8. Think of it as "two negatives make a positive" but only when they're directly next to each other in this way.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Calculate:\n\n(a) -6 + 4\n(b) -3 - 5\n(c) -8 × 2\n(d) -20 ÷ -4', solution: '(a) -6 + 4 = -2 (start at -6, move 4 right) ✓\n\n(b) -3 - 5 = -8 (start at -3, move 5 left) ✓\n\n(c) -8 × 2 = -16 (different signs = negative) ✓\n\n(d) -20 ÷ -4 = 5 (same signs = positive) ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Calculate:\n\n(a) -7 - (-3)\n(b) (-4)² \n(c) -5 × (-2) × (-3)', solution: '(a) -7 - (-3) = -7 + 3 = -4 ✓\n(Subtracting negative = adding positive)\n\n(b) (-4)² = (-4) × (-4) = 16 ✓\n(Negative × negative = positive)\n\n(c) -5 × (-2) × (-3)\n= 10 × (-3) (first two: neg × neg = pos)\n= -30 ✓\n(Three negatives = negative result)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The temperature at midnight was -8°C. By 6am it had dropped by 5°C. By noon it had risen by 17°C. By 6pm it had dropped by 9°C.\n\n(a) What was the temperature at 6pm?\n(b) What was the total change in temperature from midnight to 6pm?', solution: '(a) Start: -8°C\nAfter drop of 5°C: -8 - 5 = -13°C\nAfter rise of 17°C: -13 + 17 = 4°C\nAfter drop of 9°C: 4 - 9 = -5°C\n\n**Temperature at 6pm: -5°C** ✓\n\n(b) Total change = Final - Initial\n= -5 - (-8)\n= -5 + 8\n= 3°C\n\n**Total change: 3°C rise** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'order-of-operations-bidmas',
      title: 'AQA GCSE Maths: Order of Operations (BIDMAS) Practice Questions',
      meta_description: 'Master BIDMAS/BODMAS with AQA GCSE Maths practice questions. Learn the correct order of operations for complex calculations.',
      introduction: `BIDMAS (or BODMAS) tells you the order in which to perform mathematical operations: Brackets, Indices (powers), Division and Multiplication (left to right), Addition and Subtraction (left to right).

A common mistake is thinking multiplication always comes before division, or addition before subtraction. Actually, multiplication and division have equal priority and are done left to right, as are addition and subtraction.

In AQA GCSE Maths exams, BIDMAS questions often appear as "calculator not allowed" questions where you must show clear working. Always work through calculations step by step, dealing with operations in the correct order. Show each step clearly to earn method marks even if you make an arithmetic error.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Calculate:\n\n(a) 3 + 4 × 5\n(b) (3 + 4) × 5', solution: '(a) 3 + 4 × 5\nMultiplication first: 4 × 5 = 20\nThen addition: 3 + 20 = **23** ✓\n\n(b) (3 + 4) × 5\nBrackets first: 3 + 4 = 7\nThen multiplication: 7 × 5 = **35** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Calculate:\n\n24 ÷ 4 + 2 × 3²', solution: 'Apply BIDMAS:\n\n**Step 1 - Indices:** 3² = 9\nExpression becomes: 24 ÷ 4 + 2 × 9\n\n**Step 2 - Division and Multiplication (left to right):**\n24 ÷ 4 = 6\n2 × 9 = 18\nExpression becomes: 6 + 18\n\n**Step 3 - Addition:**\n6 + 18 = **24** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Calculate:\n\n(5 + 3)² - 4 × (12 - 2³)\n─────────────────────\n          8', solution: 'Work out the numerator first:\n\n**Brackets and indices:**\n- (5 + 3)² = 8² = 64\n- 2³ = 8, so (12 - 2³) = (12 - 8) = 4\n\n**Multiplication:**\n4 × 4 = 16\n\n**Subtraction in numerator:**\n64 - 16 = 48\n\n**Final division:**\n48 ÷ 8 = **6** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'factors-and-multiples',
      title: 'AQA GCSE Maths: Factors and Multiples Practice Questions',
      meta_description: 'Practice finding factors and multiples with AQA GCSE Maths questions. Learn systematic methods for listing all factors of a number.',
      introduction: `Factors are numbers that divide exactly into another number. Multiples are numbers in a times table. For example, factors of 12 are 1, 2, 3, 4, 6, 12, while multiples of 12 are 12, 24, 36, 48...

To find all factors of a number systematically, start with 1 and work up, testing each number. Factors come in pairs that multiply to give your number. For 24: 1×24, 2×12, 3×8, 4×6, so factors are 1, 2, 3, 4, 6, 8, 12, 24.

A quick check: every number has 1 and itself as factors. Even numbers always have 2 as a factor. Numbers ending in 0 or 5 have 5 as a factor. The digit sum rule works for 3 and 9: if digits sum to a multiple of 3 (or 9), the number is divisible by 3 (or 9).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: '(a) List all the factors of 18.\n(b) Write down the first five multiples of 7.', solution: '(a) Find factor pairs of 18:\n1 × 18 = 18 ✓\n2 × 9 = 18 ✓\n3 × 6 = 18 ✓\n\n**Factors of 18: 1, 2, 3, 6, 9, 18** ✓\n\n(b) Multiples of 7: 7×1, 7×2, 7×3, 7×4, 7×5\n\n**First five multiples: 7, 14, 21, 28, 35** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A number has exactly four factors: 1, 2, 4, and itself.\n\nWhat is the number?', solution: 'If the factors are 1, 2, 4, and the number itself, we need to find what number has exactly these factors.\n\nThe factor pairs must multiply to give our number:\n- 1 × ? = the number\n- 2 × ? = the number\n- 4 × ? = the number\n\nSince 4 is a factor, and the only factors are 1, 2, 4, and the number, the pair for 4 must be... checking if 4 × 2 = 8:\n\nFactors of 8: 1, 2, 4, 8 ✓\n\n**The number is 8** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Find the smallest number that is:\n- a multiple of 6\n- a factor of 180\n- greater than 20', solution: 'First, find factors of 180:\n180 = 1×180, 2×90, 3×60, 4×45, 5×36, 6×30, 9×20, 10×18, 12×15\n\nFactors: 1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 18, 20, 30, 36, 45, 60, 90, 180\n\nMultiples of 6 from this list: 6, 12, 18, 30, 36, 60, 90, 180\n\nGreater than 20: 30, 36, 60, 90, 180\n\n**Smallest number: 30** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'highest-common-factor-hcf',
      title: 'AQA GCSE Maths: Highest Common Factor (HCF) Practice Questions',
      meta_description: 'Master finding the HCF with AQA GCSE Maths practice questions. Learn listing and prime factorisation methods for HCF problems.',
      introduction: `The Highest Common Factor (HCF) is the largest number that divides exactly into two or more numbers. There are two main methods: listing factors or using prime factorisation.

For smaller numbers, list all factors of each number and find the largest one they share. For example, factors of 12 are 1, 2, 3, 4, 6, 12 and factors of 18 are 1, 2, 3, 6, 9, 18. Common factors are 1, 2, 3, 6, so HCF = 6.

For larger numbers, prime factorisation is more efficient. Write each number as a product of primes, then multiply together the primes that appear in ALL numbers, using the lowest power of each. HCF is useful for simplifying fractions and solving problems about dividing items into equal groups.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Find the highest common factor (HCF) of 24 and 36.', solution: '**Method: List factors**\n\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\n\nCommon factors: 1, 2, 3, 4, 6, 12\n\n**HCF = 12** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Using prime factorisation, find the HCF of 84 and 120.', solution: '**Prime factorise each number:**\n\n84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7\n\n120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15\n= 2³ × 3 × 5\n\n**Find common primes with lowest powers:**\n- 2: lowest power is 2² (from 84)\n- 3: lowest power is 3¹ (both have 3¹)\n- 7 and 5 are not in both\n\n**HCF = 2² × 3 = 4 × 3 = 12** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A florist has 48 roses and 72 tulips. She wants to make identical bouquets using all the flowers, with no flowers left over.\n\n(a) What is the maximum number of bouquets she can make?\n(b) How many of each flower will be in each bouquet?', solution: '(a) The number of bouquets must divide both 48 and 72 exactly.\nMaximum bouquets = HCF of 48 and 72\n\n48 = 2⁴ × 3\n72 = 2³ × 3²\n\nHCF = 2³ × 3 = 8 × 3 = 24\n\n**Maximum bouquets: 24** ✓\n\n(b) Roses per bouquet: 48 ÷ 24 = 2\nTulips per bouquet: 72 ÷ 24 = 3\n\n**Each bouquet: 2 roses and 3 tulips** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'lowest-common-multiple-lcm',
      title: 'AQA GCSE Maths: Lowest Common Multiple (LCM) Practice Questions',
      meta_description: 'Practice finding the LCM with AQA GCSE Maths questions. Master listing multiples and prime factorisation methods.',
      introduction: `The Lowest Common Multiple (LCM) is the smallest number that is a multiple of two or more numbers. For smaller numbers, list multiples of each until you find the first one they share.

For larger numbers, use prime factorisation: write each number as a product of primes, then multiply together ALL primes that appear, using the highest power of each. This is the opposite of HCF where you use the lowest powers.

LCM is useful for adding fractions (finding common denominators), scheduling problems (when will events coincide?), and problems about repeating patterns. Remember: HCF × LCM = product of the two numbers, which can be a useful check.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Find the lowest common multiple (LCM) of 6 and 8.', solution: '**Method: List multiples**\n\nMultiples of 6: 6, 12, 18, 24, 30...\nMultiples of 8: 8, 16, 24, 32...\n\nFirst common multiple: 24\n\n**LCM = 24** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Using prime factorisation, find the LCM of 18 and 24.', solution: '**Prime factorise each number:**\n\n18 = 2 × 9 = 2 × 3²\n\n24 = 8 × 3 = 2³ × 3\n\n**Take each prime with its highest power:**\n- 2: highest power is 2³ (from 24)\n- 3: highest power is 3² (from 18)\n\n**LCM = 2³ × 3² = 8 × 9 = 72** ✓\n\nCheck: 72 ÷ 18 = 4 ✓, 72 ÷ 24 = 3 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Two buses leave the station at 9:00 am. Bus A returns every 12 minutes. Bus B returns every 18 minutes.\n\n(a) At what time will both buses next be at the station together?\n(b) How many times will they be at the station together between 9:00 am and 12:00 noon (including 9:00 am)?', solution: '(a) Find when both schedules coincide:\nLCM of 12 and 18\n\n12 = 2² × 3\n18 = 2 × 3²\nLCM = 2² × 3² = 4 × 9 = 36 minutes\n\n9:00 am + 36 minutes = **9:36 am** ✓\n\n(b) They meet every 36 minutes.\n9:00 to 12:00 = 180 minutes\n180 ÷ 36 = 5\n\nTimes: 9:00, 9:36, 10:12, 10:48, 11:24, 12:00\n\n**6 times** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'prime-numbers',
      title: 'AQA GCSE Maths: Prime Numbers Practice Questions',
      meta_description: 'Master prime numbers with AQA GCSE Maths practice questions. Learn to identify primes and use them in problem-solving.',
      introduction: `A prime number has exactly two factors: 1 and itself. The first few primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29... Note that 1 is NOT prime (it only has one factor), and 2 is the only even prime.

To test if a number is prime, check if it's divisible by any prime up to its square root. For example, to test 97: √97 ≈ 9.8, so test primes 2, 3, 5, 7. None divide 97, so it's prime.

Prime numbers are the building blocks of all integers - every whole number greater than 1 can be written as a unique product of primes. This is called the Fundamental Theorem of Arithmetic and is the basis for prime factorisation.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'From this list, write down all the prime numbers:\n\n1, 2, 9, 11, 15, 17, 21, 23, 27', solution: 'Check each number:\n- 1: Only one factor, NOT prime\n- 2: Factors 1 and 2, PRIME ✓\n- 9: Factors 1, 3, 9, NOT prime\n- 11: Factors 1 and 11, PRIME ✓\n- 15: Factors 1, 3, 5, 15, NOT prime\n- 17: Factors 1 and 17, PRIME ✓\n- 21: Factors 1, 3, 7, 21, NOT prime\n- 23: Factors 1 and 23, PRIME ✓\n- 27: Factors 1, 3, 9, 27, NOT prime\n\n**Prime numbers: 2, 11, 17, 23**', display_order: 1 },
      { difficulty: 'medium', marks: 2, content: 'Explain why 91 is not a prime number.', solution: '91 is not prime because it has factors other than 1 and itself.\n\n91 = 7 × 13\n\nTo find this: test prime divisors up to √91 ≈ 9.5\n- Not divisible by 2 (odd number)\n- Not divisible by 3 (9+1=10, not divisible by 3)\n- Not divisible by 5 (doesn\'t end in 0 or 5)\n- Divisible by 7: 91 ÷ 7 = 13 ✓\n\n**91 = 7 × 13, so it has 4 factors (1, 7, 13, 91) and is not prime** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Find two prime numbers that:\n- have a sum of 40\n- have a product of 391', solution: 'Let the primes be p and q.\np + q = 40\np × q = 391\n\nFrom p + q = 40: q = 40 - p\nSubstitute: p(40 - p) = 391\n40p - p² = 391\np² - 40p + 391 = 0\n\nUsing the quadratic formula or factoring:\n(p - 17)(p - 23) = 0\np = 17 or p = 23\n\nCheck: 17 + 23 = 40 ✓\n17 × 23 = 391 ✓\nBoth 17 and 23 are prime ✓\n\n**The two primes are 17 and 23**', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'prime-factorisation',
      title: 'AQA GCSE Maths: Prime Factorisation Practice Questions',
      meta_description: 'Master prime factorisation with AQA GCSE Maths practice questions. Learn factor trees and division methods.',
      introduction: `Prime factorisation means writing a number as a product of its prime factors. Every number greater than 1 has a unique prime factorisation. There are two common methods: factor trees and repeated division.

For factor trees, split the number into any two factors, then split those factors, continuing until all branches end in primes. For repeated division, divide by the smallest prime that works, and keep dividing until you reach 1.

In AQA GCSE Maths, you should write your answer using index notation. For example, 72 = 2 × 2 × 2 × 3 × 3 should be written as 72 = 2³ × 3². Prime factorisation is essential for finding HCF and LCM efficiently.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Write 60 as a product of its prime factors.\n\nGive your answer in index form.', solution: 'Using factor tree or division:\n\n60 = 2 × 30\n   = 2 × 2 × 15\n   = 2 × 2 × 3 × 5\n\nOr by division:\n60 ÷ 2 = 30\n30 ÷ 2 = 15\n15 ÷ 3 = 5\n5 ÷ 5 = 1\n\n**60 = 2² × 3 × 5** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Write 504 as a product of its prime factors.\n\nShow your working using a factor tree or repeated division.', solution: '**Using repeated division:**\n\n504 ÷ 2 = 252\n252 ÷ 2 = 126\n126 ÷ 2 = 63\n63 ÷ 3 = 21\n21 ÷ 3 = 7\n7 ÷ 7 = 1\n\nPrime factors: 2, 2, 2, 3, 3, 7\n\n**504 = 2³ × 3² × 7** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The prime factorisation of a number N is 2³ × 3² × 5.\n\n(a) Work out the value of N.\n(b) Find the smallest number you must multiply N by to give a perfect square.', solution: '(a) N = 2³ × 3² × 5\n    = 8 × 9 × 5\n    = 72 × 5\n    **N = 360** ✓\n\n(b) For a perfect square, all prime powers must be even.\n\nCurrent factorisation: 2³ × 3² × 5¹\n\n- Power of 2 is 3 (odd) → need one more 2\n- Power of 3 is 2 (even) → OK\n- Power of 5 is 1 (odd) → need one more 5\n\nMultiplier = 2 × 5 = **10** ✓\n\nCheck: 360 × 10 = 3600 = 60² ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'squares-and-square-roots',
      title: 'AQA GCSE Maths: Squares and Square Roots Practice Questions',
      meta_description: 'Practice squares and square roots with AQA GCSE Maths questions. Master perfect squares and estimating non-perfect square roots.',
      introduction: `A square number is the result of multiplying a number by itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100... You should memorise squares up to 15² = 225 for your GCSE exam.

The square root is the inverse operation - it asks "what number multiplied by itself gives this?" The symbol √ means the positive square root. Every positive number has two square roots (positive and negative), but √ refers only to the positive one.

For non-perfect squares, estimate by finding which perfect squares it lies between. For example, √50 lies between √49 = 7 and √64 = 8, closer to 7 since 50 is closer to 49. More precisely, √50 ≈ 7.07.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 13²\n(b) √144', solution: '(a) 13² = 13 × 13 = **169** ✓\n\n(b) √144 = **12** ✓\n(because 12 × 12 = 144)', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Without using a calculator:\n\n(a) Estimate √75 to one decimal place.\n(b) Explain your method.', solution: '(a) Find perfect squares either side of 75:\n√64 = 8 and √81 = 9\n\nSo √75 is between 8 and 9.\n\n75 is 11 away from 64, and 6 away from 81.\n75 is closer to 81 than to 64.\n\nEstimate: √75 ≈ **8.7** ✓\n\n(b) I found the two consecutive perfect squares that 75 lies between (64 and 81), then estimated where 75 falls in this interval. Since 75 is closer to 81, the answer is closer to 9 than to 8. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Simplify fully: √(2² × 3⁴ × 5²)', solution: 'Use the rule: √(a × b) = √a × √b\n\n√(2² × 3⁴ × 5²)\n= √(2²) × √(3⁴) × √(5²)\n= 2 × 3² × 5\n= 2 × 9 × 5\n= **90** ✓\n\nAlternatively:\n2² × 3⁴ × 5² = 4 × 81 × 25 = 8100\n√8100 = 90 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'cubes-and-cube-roots',
      title: 'AQA GCSE Maths: Cubes and Cube Roots Practice Questions',
      meta_description: 'Master cubes and cube roots with AQA GCSE Maths practice questions. Learn perfect cubes and cube root calculations.',
      introduction: `A cube number is the result of multiplying a number by itself three times: 1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 10³ = 1000. You should memorise cubes up to 10³ for your GCSE.

The cube root (∛) asks "what number multiplied by itself three times gives this?" Unlike square roots, cube roots can be negative: ∛(-8) = -2 because (-2) × (-2) × (-2) = -8.

Cubes grow much faster than squares. While 10² = 100, we have 10³ = 1000. This is why cube numbers appear in volume calculations (since volume involves three dimensions).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 4³\n(b) ∛216', solution: '(a) 4³ = 4 × 4 × 4 = 16 × 4 = **64** ✓\n\n(b) ∛216 = **6** ✓\n(because 6 × 6 × 6 = 216)', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Work out:\n\n(a) (-3)³\n(b) ∛(-125)\n(c) What is the difference between (-3)³ and -3³?', solution: '(a) (-3)³ = (-3) × (-3) × (-3)\n= 9 × (-3)\n= **-27** ✓\n\n(b) ∛(-125) = **-5** ✓\n(because (-5) × (-5) × (-5) = -125)\n\n(c) (-3)³ means cube negative 3: (-3)³ = -27\n\n-3³ means the negative of 3 cubed: -(3³) = -(27) = -27\n\nIn this case they give the same answer, but the meaning is different. The brackets matter when the base is negative. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'A cube has volume 343 cm³.\n\nFind the surface area of the cube.', solution: 'Volume of cube = side³ = 343 cm³\n\nSide length = ∛343 = 7 cm\n(Check: 7 × 7 × 7 = 343 ✓)\n\nSurface area = 6 × (side)²\n= 6 × 7²\n= 6 × 49\n= **294 cm²** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'index-notation',
      title: 'AQA GCSE Maths: Index Notation Practice Questions',
      meta_description: 'Master index notation with AQA GCSE Maths practice questions. Learn to read and write numbers using powers and indices.',
      introduction: `Index notation is a shorthand for repeated multiplication. In the expression 2⁵, the base is 2 and the index (or power/exponent) is 5. It means 2 × 2 × 2 × 2 × 2 = 32.

Any number to the power of 1 equals itself: 5¹ = 5. Any number to the power of 0 equals 1: 5⁰ = 1 (this is a key rule to remember). The power tells you how many times to multiply the base by itself.

Index notation is essential for writing large numbers efficiently (like 10⁶ = 1,000,000) and for expressing prime factorisations neatly. It also connects to the laws of indices which you'll use extensively in algebra.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 3⁴\n(b) 10⁵', solution: '(a) 3⁴ = 3 × 3 × 3 × 3\n= 9 × 9\n= **81** ✓\n\n(b) 10⁵ = 10 × 10 × 10 × 10 × 10\n= **100,000** ✓\n(or: count 5 zeros after the 1)', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Write each calculation as a single power:\n\n(a) 2 × 2 × 2 × 2 × 2 × 2 × 2\n(b) 5 × 5 × 5 × 5\n(c) 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7 × 7', solution: '(a) Count the 2s: seven 2s multiplied\n**2⁷** ✓\n\n(b) Count the 5s: four 5s multiplied\n**5⁴** ✓\n\n(c) Count the 7s: nine 7s multiplied\n**7⁹** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Without a calculator, work out the value of:\n\n(a) 2⁶ + 3³\n(b) 4³ ÷ 2⁴', solution: '(a) 2⁶ = 2×2×2×2×2×2 = 64\n3³ = 3×3×3 = 27\n\n2⁶ + 3³ = 64 + 27 = **91** ✓\n\n(b) 4³ = 4×4×4 = 64\n2⁴ = 2×2×2×2 = 16\n\n4³ ÷ 2⁴ = 64 ÷ 16 = **4** ✓\n\n(Alternative: 4³ = (2²)³ = 2⁶\nSo 2⁶ ÷ 2⁴ = 2² = 4)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'laws-of-indices',
      title: 'AQA GCSE Maths: Laws of Indices Practice Questions',
      meta_description: 'Master the laws of indices with AQA GCSE Maths practice questions. Learn multiplication, division, and power rules for exponents.',
      introduction: `The laws of indices are rules for simplifying expressions with powers. For Foundation tier, you need three main laws:

1. When multiplying with the same base, add the powers: aᵐ × aⁿ = aᵐ⁺ⁿ
2. When dividing with the same base, subtract the powers: aᵐ ÷ aⁿ = aᵐ⁻ⁿ
3. When raising a power to another power, multiply the powers: (aᵐ)ⁿ = aᵐⁿ

These laws only work when the bases are the same. You cannot simplify 2³ × 3² using these laws because the bases (2 and 3) are different. Always check the base before applying any law.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Simplify:\n\n(a) x³ × x⁴\n(b) y⁸ ÷ y²', solution: '(a) x³ × x⁴\nMultiplying: add the powers\n= x³⁺⁴\n= **x⁷** ✓\n\n(b) y⁸ ÷ y²\nDividing: subtract the powers\n= y⁸⁻²\n= **y⁶** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Simplify:\n\n(a) (m³)⁴\n(b) (2n²)³\n(c) p⁵ × p³ ÷ p²', solution: '(a) (m³)⁴\nPower to a power: multiply\n= m³ˣ⁴\n= **m¹²** ✓\n\n(b) (2n²)³\nRaise everything inside to power 3:\n= 2³ × (n²)³\n= 8 × n⁶\n= **8n⁶** ✓\n\n(c) p⁵ × p³ ÷ p²\n= p⁵⁺³ ÷ p²\n= p⁸ ÷ p²\n= p⁸⁻²\n= **p⁶** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Simplify fully:\n\n   6a⁵b³ × 4a²b\n   ─────────────\n       8a⁴b²', solution: 'First simplify the numerator:\n6a⁵b³ × 4a²b = 24a⁷b⁴\n\nNow divide:\n24a⁷b⁴\n────────\n8a⁴b²\n\nNumbers: 24 ÷ 8 = 3\n\nLetters using laws of indices:\na⁷ ÷ a⁴ = a³\nb⁴ ÷ b² = b²\n\n**Answer: 3a³b²** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'estimation-and-approximation',
      title: 'AQA GCSE Maths: Estimation and Approximation Practice Questions',
      meta_description: 'Practice estimation with AQA GCSE Maths questions. Learn to round numbers and estimate calculations without a calculator.',
      introduction: `Estimation means finding an approximate answer by rounding numbers to make calculations easier. The key is rounding to one significant figure (or sometimes convenient numbers) before calculating.

For example, to estimate 4.87 × 19.2, round to 5 × 20 = 100. The actual answer is 93.504, so our estimate is reasonably close. Always show your rounded values clearly in your working.

Estimation is useful for checking calculator answers - if your calculator says 4.87 × 19.2 = 935.04, your estimate of 100 tells you something is wrong (you probably pressed an extra key). In exams, estimation questions are usually non-calculator.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Estimate the value of:\n\n   48.7 × 21.3\n   ───────────\n      5.12', solution: 'Round each number to 1 significant figure:\n\n48.7 ≈ 50\n21.3 ≈ 20\n5.12 ≈ 5\n\nEstimate = 50 × 20 ÷ 5\n        = 1000 ÷ 5\n        = **200** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The length of a rectangle is 18.7 cm and the width is 9.3 cm.\n\n(a) Estimate the area of the rectangle.\n(b) Is your estimate an overestimate or underestimate? Explain why.', solution: '(a) Round to 1 significant figure:\n18.7 ≈ 20\n9.3 ≈ 9 (or 10)\n\nEstimate = 20 × 9 = **180 cm²** ✓\n(or 20 × 10 = 200 cm²)\n\n(b) Using 20 × 9:\n- 18.7 rounded UP to 20\n- 9.3 rounded DOWN to 9\n\nActual = 18.7 × 9.3 = 173.91\nEstimate = 180\n\nThis is an **overestimate** because rounding 18.7 up to 20 has a bigger effect than rounding 9.3 down to 9. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Estimate the value of:\n\n   √(99.7 × 4.13)\n   ──────────────\n      0.487²', solution: 'Round to 1 significant figure:\n\n99.7 ≈ 100\n4.13 ≈ 4\n0.487 ≈ 0.5\n\nNumerator: √(100 × 4) = √400 = 20\n\nDenominator: 0.5² = 0.25\n\nEstimate = 20 ÷ 0.25\n        = 20 × 4\n        = **80** ✓\n\n(Actual value ≈ 85.6)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'rounding-to-decimal-places',
      title: 'AQA GCSE Maths: Rounding to Decimal Places Practice Questions',
      meta_description: 'Master rounding to decimal places with AQA GCSE Maths practice questions. Learn the rules for rounding up and down.',
      introduction: `Decimal places (d.p.) count the digits after the decimal point. To round to a given number of decimal places, look at the next digit: if it's 5 or more, round up; if it's 4 or less, round down.

For example, to round 3.4567 to 2 d.p., look at the third decimal digit (6). Since 6 ≥ 5, round up the second decimal place from 5 to 6. Answer: 3.46.

Be careful with numbers like 2.995 rounded to 2 d.p. The third digit is 5, so round up, but this causes a chain: 2.995 → 3.00 (not 2.100). Always check your answer has the correct number of decimal places, including trailing zeros like 3.40 or 5.00.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Round each number to 2 decimal places:\n\n(a) 4.6273\n(b) 15.998', solution: '(a) 4.6273\nLook at 3rd decimal place: 7\n7 ≥ 5, so round up\n**4.63** ✓\n\n(b) 15.998\nLook at 3rd decimal place: 8\n8 ≥ 5, so round up\n15.99 → 16.00\n**16.00** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A calculator shows: 7 ÷ 3 = 2.333333333\n\n(a) Write this answer to 1 decimal place.\n(b) Write this answer to 4 decimal places.\n(c) Write 7/3 as a recurring decimal using dot notation.', solution: '(a) 2.333333...\nLook at 2nd decimal: 3\n3 < 5, round down\n**2.3** ✓\n\n(b) 2.333333...\nLook at 5th decimal: 3\n3 < 5, round down\n**2.3333** ✓\n\n(c) The 3 repeats forever:\n**2.3̇** or **2.̅3** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'The answer to a calculation is 0.004962.\n\nRound this answer to:\n(a) 2 decimal places\n(b) 3 decimal places\n(c) 1 significant figure', solution: '(a) 0.004962 to 2 d.p.\n2 decimal places means: 0.00\nLook at 3rd decimal (4): 4 < 5\n**0.00** ✓\n\n(b) 0.004962 to 3 d.p.\n3 decimal places means: 0.00?\nLook at 4th decimal (9): 9 ≥ 5\n**0.005** ✓\n\n(c) 0.004962 to 1 s.f.\nFirst significant figure is 4\nLook at next digit (9): 9 ≥ 5\n**0.005** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'rounding-to-significant-figures',
      title: 'AQA GCSE Maths: Rounding to Significant Figures Practice Questions',
      meta_description: 'Practice rounding to significant figures with AQA GCSE Maths questions. Master this essential skill for estimation and approximation.',
      introduction: `Significant figures (s.f.) count the important digits in a number, starting from the first non-zero digit. Leading zeros are never significant; they're just placeholders.

In 0.00345, there are 3 significant figures: 3, 4, and 5. The zeros before the 3 are not significant. In 3450, there are probably 3 s.f., but it's ambiguous - we can't tell if the 0 is significant or just a placeholder. Using standard form (3.45 × 10³) removes this ambiguity.

To round to n significant figures, find the first n significant digits, then look at the next digit to decide whether to round up or down. Remember to include placeholder zeros when needed: 4567 to 2 s.f. is 4600, not 46.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Round each number to 2 significant figures:\n\n(a) 4567\n(b) 0.03842', solution: '(a) 4567\nFirst 2 s.f.: 4, 5\nNext digit: 6 ≥ 5, round up\n45 → 46, then add placeholder zeros\n**4600** ✓\n\n(b) 0.03842\nFirst 2 s.f.: 3, 8\nNext digit: 4 < 5, round down\n**0.038** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Round each number to 3 significant figures:\n\n(a) 45678\n(b) 0.0099876\n(c) 1.0045', solution: '(a) 45678\nFirst 3 s.f.: 4, 5, 6\nNext digit: 7 ≥ 5, round up\n456 → 457, add placeholders\n**45700** ✓\n\n(b) 0.0099876\nFirst 3 s.f.: 9, 9, 8\nNext digit: 7 ≥ 5, round up\n998 → 999\n**0.00999** ✓\n\n(c) 1.0045\nFirst 3 s.f.: 1, 0, 0 (the zeros after 1 ARE significant)\nNext digit: 4 < 5, round down\n**1.00** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'A number rounded to 2 significant figures is 4500.\n\n(a) What is the smallest the original number could have been?\n(b) What is the largest the original number could have been?', solution: 'When rounded to 2 s.f., the answer is 4500.\n\nThis means the first 2 significant figures rounded to 45.\n\n(a) **Smallest value:**\nThe original rounds UP to 4500\nSmallest that rounds up = 4450\n**4450** ✓\n\n(b) **Largest value:**\nThe original rounds DOWN to 4500\nLargest that rounds down is just below 4550\n**4549.999...** or **4549** (as an integer)\n\nOr express as: 4450 ≤ x < 4550 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'simple-interest',
      title: 'AQA GCSE Maths: Simple Interest Practice Questions',
      meta_description: 'Practice simple interest calculations with AQA GCSE Maths questions. Learn the formula and master interest rate problems.',
      introduction: `Simple interest is calculated only on the original amount (principal), not on accumulated interest. The formula is: Simple Interest = (Principal × Rate × Time) ÷ 100, or I = PRT/100.

Unlike compound interest, simple interest gives the same amount of interest each year. If you invest £1000 at 5% simple interest for 3 years, you get £50 interest each year, giving £150 total interest.

To find the total amount after simple interest, add the interest to the principal: Total = Principal + Interest. Simple interest is less common in real life than compound interest, but it's easier to calculate and appears in GCSE exam questions.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: '£500 is invested at 4% simple interest per year.\n\nHow much interest is earned after 3 years?', solution: 'Simple Interest = (P × R × T) ÷ 100\n\nP = £500\nR = 4%\nT = 3 years\n\nI = (500 × 4 × 3) ÷ 100\nI = 6000 ÷ 100\n**I = £60** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Ben invests £2400 at 3.5% simple interest per year.\n\n(a) Calculate the interest earned after 5 years.\n(b) What is the total value of his investment after 5 years?', solution: '(a) I = (P × R × T) ÷ 100\n\nI = (2400 × 3.5 × 5) ÷ 100\nI = 42000 ÷ 100\n**I = £420** ✓\n\n(b) Total = Principal + Interest\nTotal = £2400 + £420\n**Total = £2820** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Sarah invests some money at 6% simple interest per year. After 4 years, she earns £192 in interest.\n\nHow much did she invest?', solution: 'Use I = (P × R × T) ÷ 100\n\nWe know:\nI = £192\nR = 6%\nT = 4 years\nFind P\n\n192 = (P × 6 × 4) ÷ 100\n192 = 24P ÷ 100\n192 × 100 = 24P\n19200 = 24P\nP = 19200 ÷ 24\n\n**P = £800** ✓\n\nCheck: (800 × 6 × 4) ÷ 100 = 192 ✓', display_order: 3 }
    ]
  }
];

export default data;
