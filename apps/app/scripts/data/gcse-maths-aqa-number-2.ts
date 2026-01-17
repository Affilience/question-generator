import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'equivalent-fractions',
      title: 'AQA GCSE Maths: Equivalent Fractions Practice Questions',
      meta_description: 'Master equivalent fractions with AQA GCSE Maths practice questions. Learn to simplify fractions and find common denominators.',
      introduction: `Equivalent fractions have the same value but different numerators and denominators. You create equivalent fractions by multiplying or dividing both the top and bottom by the same number: 1/2 = 2/4 = 3/6 = 50/100.

To simplify a fraction, divide both numerator and denominator by their highest common factor (HCF). For example, 12/18: HCF of 12 and 18 is 6, so 12÷6/18÷6 = 2/3. A fraction is in its simplest form when the HCF is 1.

Finding equivalent fractions is essential for adding and subtracting fractions with different denominators. You need to find a common denominator, which means expressing both fractions with the same bottom number.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: '(a) Write 3/4 as an equivalent fraction with denominator 20.\n(b) Simplify 15/25 to its simplest form.', solution: '(a) 3/4 = ?/20\n4 × 5 = 20, so multiply top by 5:\n3 × 5 = 15\n**3/4 = 15/20** ✓\n\n(b) 15/25\nHCF of 15 and 25 is 5\n15 ÷ 5 = 3\n25 ÷ 5 = 5\n**15/25 = 3/5** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Write these fractions in order from smallest to largest:\n\n2/3, 5/8, 3/4', solution: 'Find common denominator. LCM of 3, 8, 4 is 24.\n\n2/3 = 16/24 (×8)\n5/8 = 15/24 (×3)\n3/4 = 18/24 (×6)\n\nNow compare: 15/24 < 16/24 < 18/24\n\n**Order: 5/8, 2/3, 3/4** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Simplify fully:\n\n   72\n   ──\n   108', solution: 'Find HCF of 72 and 108.\n\n72 = 2³ × 3²\n108 = 2² × 3³\n\nHCF = 2² × 3² = 4 × 9 = 36\n\n72 ÷ 36 = 2\n108 ÷ 36 = 3\n\n**72/108 = 2/3** ✓\n\n(Or simplify step by step: 72/108 → 36/54 → 18/27 → 6/9 → 2/3)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'adding-and-subtracting-fractions',
      title: 'AQA GCSE Maths: Adding and Subtracting Fractions Practice Questions',
      meta_description: 'Practice adding and subtracting fractions with AQA GCSE Maths questions. Master finding common denominators.',
      introduction: `To add or subtract fractions, they must have the same denominator. If they don't, find the lowest common denominator (LCD), convert both fractions, then add or subtract the numerators. The denominator stays the same.

For example: 2/3 + 1/4. The LCD of 3 and 4 is 12. Convert: 2/3 = 8/12 and 1/4 = 3/12. Then 8/12 + 3/12 = 11/12.

With mixed numbers, you can either convert to improper fractions first, or deal with the whole numbers and fractions separately. Always simplify your final answer if possible.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 2/5 + 1/5\n(b) 7/8 - 3/8', solution: '(a) Same denominator, just add numerators:\n2/5 + 1/5 = (2+1)/5\n= **3/5** ✓\n\n(b) Same denominator, subtract numerators:\n7/8 - 3/8 = (7-3)/8\n= **4/8 = 1/2** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Work out:\n\n2/3 + 3/4\n\nGive your answer as a mixed number.', solution: 'Find common denominator.\nLCD of 3 and 4 = 12\n\n2/3 = 8/12 (×4)\n3/4 = 9/12 (×3)\n\n8/12 + 9/12 = 17/12\n\nConvert to mixed number:\n17 ÷ 12 = 1 remainder 5\n\n**17/12 = 1 5/12** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Work out:\n\n3 2/5 - 1 3/4\n\nGive your answer as a mixed number in its simplest form.', solution: 'Convert to improper fractions:\n3 2/5 = (3×5 + 2)/5 = 17/5\n1 3/4 = (1×4 + 3)/4 = 7/4\n\nFind LCD of 5 and 4 = 20:\n17/5 = 68/20\n7/4 = 35/20\n\nSubtract:\n68/20 - 35/20 = 33/20\n\nConvert to mixed number:\n33 ÷ 20 = 1 remainder 13\n\n**33/20 = 1 13/20** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'multiplying-and-dividing-fractions',
      title: 'AQA GCSE Maths: Multiplying and Dividing Fractions Practice Questions',
      meta_description: 'Master multiplying and dividing fractions with AQA GCSE Maths practice questions. Learn the rules and shortcut methods.',
      introduction: `Multiplying fractions is straightforward: multiply the numerators together and multiply the denominators together. You don't need common denominators. For example, 2/3 × 4/5 = 8/15.

Dividing by a fraction means multiplying by its reciprocal (flip it upside down). So 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. Remember: Keep, Change, Flip - keep the first fraction, change ÷ to ×, flip the second fraction.

With mixed numbers, always convert to improper fractions first before multiplying or dividing. Simplify your answer and convert back to a mixed number if the question asks for it.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 2/3 × 4/5\n(b) 3/4 ÷ 2', solution: '(a) Multiply tops, multiply bottoms:\n2/3 × 4/5 = (2×4)/(3×5)\n= **8/15** ✓\n\n(b) Write 2 as 2/1, then flip:\n3/4 ÷ 2/1 = 3/4 × 1/2\n= 3/8\n**= 3/8** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Work out:\n\n3/5 ÷ 9/10\n\nGive your answer in its simplest form.', solution: 'Keep, Change, Flip:\n3/5 ÷ 9/10 = 3/5 × 10/9\n\nMultiply:\n= (3 × 10)/(5 × 9)\n= 30/45\n\nSimplify (HCF = 15):\n= **2/3** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Work out:\n\n2 1/4 × 1 2/3\n\nGive your answer as a mixed number in its simplest form.', solution: 'Convert to improper fractions:\n2 1/4 = (2×4 + 1)/4 = 9/4\n1 2/3 = (1×3 + 2)/3 = 5/3\n\nMultiply:\n9/4 × 5/3 = (9 × 5)/(4 × 3)\n= 45/12\n\nSimplify (HCF = 3):\n= 15/4\n\nConvert to mixed number:\n15 ÷ 4 = 3 remainder 3\n\n**= 3 3/4** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'mixed-numbers-and-improper-fractions',
      title: 'AQA GCSE Maths: Mixed Numbers and Improper Fractions Practice Questions',
      meta_description: 'Convert between mixed numbers and improper fractions with AQA GCSE Maths practice questions. Master this essential skill.',
      introduction: `A mixed number has a whole number part and a fraction part, like 2 3/4. An improper fraction has a numerator larger than its denominator, like 11/4. These are two ways of writing the same value.

To convert a mixed number to an improper fraction: multiply the whole number by the denominator, add the numerator, put over the same denominator. For 2 3/4: (2×4 + 3)/4 = 11/4.

To convert an improper fraction to a mixed number: divide the numerator by the denominator. The quotient is the whole number, the remainder goes over the original denominator. For 11/4: 11÷4 = 2 remainder 3, so 11/4 = 2 3/4.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: '(a) Convert 3 2/5 to an improper fraction.\n(b) Convert 17/4 to a mixed number.', solution: '(a) 3 2/5\n= (3 × 5 + 2)/5\n= (15 + 2)/5\n= **17/5** ✓\n\n(b) 17/4\n17 ÷ 4 = 4 remainder 1\n= **4 1/4** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Convert to improper fractions and then calculate:\n\n2 1/3 + 1 5/6\n\nGive your answer as a mixed number.', solution: 'Convert to improper fractions:\n2 1/3 = 7/3\n1 5/6 = 11/6\n\nFind common denominator (6):\n7/3 = 14/6\n\nAdd:\n14/6 + 11/6 = 25/6\n\nConvert to mixed number:\n25 ÷ 6 = 4 remainder 1\n\n**= 4 1/6** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Write 4.375 as:\n\n(a) an improper fraction in its simplest form\n(b) a mixed number', solution: '(a) 4.375 = 4375/1000\n\nSimplify step by step:\n4375/1000 = 875/200 = 175/40 = 35/8\n\n**= 35/8** ✓\n\n(b) 35 ÷ 8 = 4 remainder 3\n\n**= 4 3/8** ✓\n\n(Or: 4.375 = 4 + 0.375 = 4 + 3/8 = 4 3/8)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'fractions-of-amounts',
      title: 'AQA GCSE Maths: Fractions of Amounts Practice Questions',
      meta_description: 'Practice finding fractions of amounts with AQA GCSE Maths questions. Master this essential skill for exam success.',
      introduction: `To find a fraction of an amount, divide by the denominator and multiply by the numerator. For example, to find 3/4 of £80: divide 80 by 4 to get 20, then multiply by 3 to get £60.

The word "of" in maths means multiply. So "3/4 of 80" means 3/4 × 80 = (3 × 80) ÷ 4 = 240 ÷ 4 = 60. Either method works.

When working with money, always check your answer makes sense. Finding 3/4 of something should give you more than half but less than the whole. Finding 2/5 of something should give you less than half.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 2/5 of 35\n(b) 3/4 of £60', solution: '(a) 2/5 of 35\n= 35 ÷ 5 × 2\n= 7 × 2\n= **14** ✓\n\n(b) 3/4 of £60\n= 60 ÷ 4 × 3\n= 15 × 3\n= **£45** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A school has 840 students.\n2/7 of the students are in Year 7.\n3/5 of the Year 7 students are girls.\n\nHow many Year 7 girls are there?', solution: 'Step 1: Find Year 7 students\n2/7 of 840 = 840 ÷ 7 × 2\n= 120 × 2\n= 240 students\n\nStep 2: Find Year 7 girls\n3/5 of 240 = 240 ÷ 5 × 3\n= 48 × 3\n= **144 girls** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Tom spends 2/5 of his money on a book and 1/3 of his money on food. He has £16 left.\n\nHow much money did he start with?', solution: 'Find fraction spent:\n2/5 + 1/3 = 6/15 + 5/15 = 11/15\n\nFraction remaining:\n1 - 11/15 = 15/15 - 11/15 = 4/15\n\nSo 4/15 of original = £16\n\n1/15 of original = £16 ÷ 4 = £4\n\nOriginal amount = 15 × £4 = **£60** ✓\n\nCheck: 2/5 of 60 = 24, 1/3 of 60 = 20\n60 - 24 - 20 = 16 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'decimals',
      title: 'AQA GCSE Maths: Decimals Practice Questions',
      meta_description: 'Practice decimal operations with AQA GCSE Maths questions. Master adding, subtracting, multiplying and dividing decimals.',
      introduction: `Decimals use place value columns after the decimal point: tenths, hundredths, thousandths, and so on. Understanding place value is key to all decimal operations.

For addition and subtraction, line up the decimal points and fill in zeros where needed. For multiplication, multiply as with whole numbers, then count total decimal places in both numbers and put that many in the answer.

For division, if dividing by a decimal, multiply both numbers by a power of 10 to make the divisor a whole number. For example, 4.8 ÷ 0.6 = 48 ÷ 6 = 8.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 3.45 + 12.8\n(b) 7.2 - 4.85', solution: '(a) Line up decimal points:\n   3.45\n+ 12.80\n-------\n**16.25** ✓\n\n(b) Line up decimal points:\n  7.20\n- 4.85\n------\n**2.35** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Work out:\n\n(a) 0.4 × 0.7\n(b) 2.5 × 0.08', solution: '(a) 0.4 × 0.7\n4 × 7 = 28\nTotal decimal places: 1 + 1 = 2\n**= 0.28** ✓\n\n(b) 2.5 × 0.08\n25 × 8 = 200\nTotal decimal places: 1 + 2 = 3\n**= 0.200 = 0.2** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Work out:\n\n(a) 7.2 ÷ 0.09\n(b) 0.0084 ÷ 0.12', solution: '(a) 7.2 ÷ 0.09\nMultiply both by 100:\n= 720 ÷ 9\n= **80** ✓\n\n(b) 0.0084 ÷ 0.12\nMultiply both by 100:\n= 0.84 ÷ 12\n= 84 ÷ 1200\n= **0.07** ✓\n\n(Or: 0.84 ÷ 12 = 0.07)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'converting-between-fractions-and-decimals',
      title: 'AQA GCSE Maths: Converting Fractions and Decimals Practice Questions',
      meta_description: 'Master converting between fractions and decimals with AQA GCSE Maths practice questions. Learn key equivalents.',
      introduction: `To convert a fraction to a decimal, divide the numerator by the denominator. For example, 3/8 = 3 ÷ 8 = 0.375. Some fractions give terminating decimals (like 3/8), others give recurring decimals (like 1/3 = 0.333...).

To convert a terminating decimal to a fraction, use place value. 0.375 = 375/1000, then simplify. For common decimals, memorise the equivalents: 0.5 = 1/2, 0.25 = 1/4, 0.75 = 3/4, 0.2 = 1/5, 0.125 = 1/8.

Knowing these common equivalents helps you work faster in non-calculator papers. For example, knowing 0.125 = 1/8 means you don't have to divide each time.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: '(a) Convert 5/8 to a decimal.\n(b) Convert 0.35 to a fraction in its simplest form.', solution: '(a) 5/8 = 5 ÷ 8\n= **0.625** ✓\n\n(b) 0.35 = 35/100\nSimplify: HCF of 35 and 100 is 5\n= **7/20** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Without using a calculator, convert these fractions to decimals:\n\n(a) 7/8\n(b) 2/9\n(c) 5/6', solution: '(a) 7/8\nKnow that 1/8 = 0.125\nSo 7/8 = 7 × 0.125 = **0.875** ✓\n\n(b) 2/9\n1/9 = 0.111... = 0.1̇\nSo 2/9 = **0.2̇** or **0.222...** ✓\n\n(c) 5/6\n5 ÷ 6 = 0.8333...\n= **0.83̇** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Write 0.0625 as a fraction in its simplest form.\n\nShow your working.', solution: '0.0625 = 625/10000\n\nSimplify by finding HCF:\n625 = 5⁴\n10000 = 10⁴ = 2⁴ × 5⁴\n\nHCF = 5⁴ = 625\n\n625 ÷ 625 = 1\n10000 ÷ 625 = 16\n\n**0.0625 = 1/16** ✓\n\n(Check: 1 ÷ 16 = 0.0625 ✓)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'percentage-of-an-amount',
      title: 'AQA GCSE Maths: Percentage of an Amount Practice Questions',
      meta_description: 'Practice finding percentages of amounts with AQA GCSE Maths questions. Master multiple methods for quick calculations.',
      introduction: `There are several ways to find a percentage of an amount. The most reliable method is to convert the percentage to a decimal and multiply. For example, 35% of £80 = 0.35 × 80 = £28.

For mental maths, find easy percentages and combine them. To find 35%: find 10% (divide by 10), then multiply by 3 to get 30%, then add 5% (half of 10%). So 35% of 80 = 8 + 8 + 8 + 4 = 28.

When using a calculator, remember that "percent" means "per hundred" or "÷100". So 35% = 35 ÷ 100 = 0.35. Always check your answer is sensible - 35% should be about a third.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out:\n\n(a) 20% of £45\n(b) 15% of 80 kg', solution: '(a) 20% of £45\n10% = £4.50\n20% = 2 × £4.50\n= **£9** ✓\n\n(b) 15% of 80 kg\n10% = 8 kg\n5% = 4 kg\n15% = 8 + 4\n= **12 kg** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A laptop costs £650 plus VAT at 20%.\n\nWork out the total cost of the laptop.', solution: 'Method 1 - Find VAT then add:\nVAT = 20% of £650\n10% = £65\n20% = £130\n\nTotal = £650 + £130 = **£780** ✓\n\nMethod 2 - Multiplier:\n100% + 20% = 120% = 1.2\nTotal = £650 × 1.2 = **£780** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'In a sale, all prices are reduced by 35%.\nA jacket originally cost £85.\n\n(a) Work out the sale price of the jacket.\n(b) After the sale, the price increases by 35%. Is this the same as the original price? Explain.', solution: '(a) Reduction = 35% of £85\n= 0.35 × 85 = £29.75\n\nSale price = £85 - £29.75\n= **£55.25** ✓\n\nOr: 65% of £85 = 0.65 × 85 = £55.25\n\n(b) New price after 35% increase:\n= £55.25 × 1.35\n= **£74.59** (to nearest penny)\n\n**No, it is NOT the same as the original price** ✓\n\nExplanation: 35% of a smaller amount (£55.25) is less than 35% of the original (£85), so the increase doesn\'t restore the original price. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'percentage-increase-and-decrease',
      title: 'AQA GCSE Maths: Percentage Increase and Decrease Practice Questions',
      meta_description: 'Master percentage increase and decrease with AQA GCSE Maths practice questions. Learn multiplier methods for quick solutions.',
      introduction: `For percentage increase, multiply by (100 + percentage)%. For example, to increase by 25%, multiply by 125% = 1.25. For percentage decrease, multiply by (100 - percentage)%. To decrease by 25%, multiply by 75% = 0.75.

Using multipliers is faster than calculating the increase/decrease and then adding/subtracting. It's especially useful for repeated percentage changes and calculator questions.

Common multipliers to memorise: increase by 10% → ×1.1, increase by 20% → ×1.2, decrease by 10% → ×0.9, decrease by 25% → ×0.75, increase by 5% → ×1.05.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Increase £80 by 15%.', solution: 'Method 1 - Find increase and add:\n15% of £80 = £12\n£80 + £12 = **£92** ✓\n\nMethod 2 - Multiplier:\n100% + 15% = 115% = 1.15\n£80 × 1.15 = **£92** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A car is worth £12,500.\nIts value decreases by 18% each year.\n\nWork out its value after 1 year.', solution: 'Decrease by 18%:\nMultiplier = 100% - 18% = 82% = 0.82\n\nValue after 1 year:\n= £12,500 × 0.82\n= **£10,250** ✓\n\n(Or: 18% of 12500 = 2250\n12500 - 2250 = £10,250)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A population increases by 12% one year and then decreases by 8% the next year.\n\nIf the starting population was 25,000, what is the population after 2 years?', solution: 'Year 1: Increase by 12%\nMultiplier = 1.12\nAfter year 1 = 25,000 × 1.12 = 28,000\n\nYear 2: Decrease by 8%\nMultiplier = 0.92\nAfter year 2 = 28,000 × 0.92 = **25,760** ✓\n\nOr combined:\n25,000 × 1.12 × 0.92 = 25,000 × 1.0304 = **25,760** ✓\n\nNote: The population is higher than it started because 12% of a larger number is more than 8% of that larger number.', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'reverse-percentages',
      title: 'AQA GCSE Maths: Reverse Percentages Practice Questions',
      meta_description: 'Master reverse percentage calculations with AQA GCSE Maths practice questions. Find original values from sale prices.',
      introduction: `Reverse percentages find the original value before a percentage change. If you know the final amount after a percentage increase or decrease, you can work backwards to find the original.

The key is to identify what percentage the final amount represents. After a 20% increase, the new amount is 120% of the original. After a 20% decrease, it's 80% of the original.

For example, a sale price of £60 after a 25% discount: £60 represents 75% of the original. So 75% = £60, meaning 1% = £0.80, and 100% = £80. The original price was £80.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'After a 20% increase, a number becomes 180.\n\nWhat was the original number?', solution: 'After 20% increase:\nNew amount = 120% of original\n\n120% = 180\n1% = 180 ÷ 120 = 1.5\n100% = 1.5 × 100 = **150** ✓\n\nCheck: 150 × 1.2 = 180 ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'In a sale, prices are reduced by 35%.\nA coat costs £52 in the sale.\n\nWork out the original price of the coat.', solution: 'After 35% reduction:\nSale price = 65% of original\n\n65% = £52\n1% = £52 ÷ 65 = £0.80\n100% = £0.80 × 100\n= **£80** ✓\n\nCheck: £80 × 0.65 = £52 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A car\'s value decreased by 15% in its first year and then by 12% in its second year. After 2 years, the car is worth £14,586.\n\nWork out the original value of the car.', solution: 'Work backwards through both changes.\n\nAfter year 2 (12% decrease):\n88% of year 1 value = £14,586\nYear 1 value = £14,586 ÷ 0.88 = £16,575\n\nAfter year 1 (15% decrease):\n85% of original = £16,575\nOriginal = £16,575 ÷ 0.85\n= **£19,500** ✓\n\nCheck: £19,500 × 0.85 × 0.88\n= £19,500 × 0.748 = £14,586 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'percentage-change',
      title: 'AQA GCSE Maths: Percentage Change Practice Questions',
      meta_description: 'Calculate percentage change with AQA GCSE Maths practice questions. Master the formula for profit, loss, and growth.',
      introduction: `Percentage change measures how much something has increased or decreased as a percentage of the original. The formula is: Percentage change = (Change ÷ Original) × 100.

If the result is positive, it's a percentage increase. If negative, it's a percentage decrease. Always divide by the ORIGINAL value, not the new value - this is a common mistake.

Percentage change is used for profit/loss calculations, population growth, price changes, and comparing data over time. For example, if a share price goes from £50 to £65, the change is £15, so percentage change = (15 ÷ 50) × 100 = 30% increase.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A shop buys a jacket for £40 and sells it for £52.\n\nWork out the percentage profit.', solution: 'Profit = £52 - £40 = £12\n\nPercentage profit = (Profit ÷ Cost price) × 100\n= (12 ÷ 40) × 100\n= 0.3 × 100\n= **30%** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The population of a town was 45,000 in 2020.\nIn 2023, the population was 51,300.\n\nWork out the percentage increase.', solution: 'Change = 51,300 - 45,000 = 6,300\n\nPercentage change = (Change ÷ Original) × 100\n= (6,300 ÷ 45,000) × 100\n= 0.14 × 100\n= **14%** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Amy bought a car for £8,500.\nAfter 3 years, she sold it for £4,930.\n\n(a) Calculate the percentage decrease in the car\'s value.\n(b) If the car lost the same percentage of its value each year, what was the annual percentage decrease?', solution: '(a) Decrease = £8,500 - £4,930 = £3,570\n\nPercentage decrease = (3,570 ÷ 8,500) × 100\n= 0.42 × 100\n= **42%** ✓\n\n(b) Let annual multiplier = r\nAfter 3 years: 8500 × r³ = 4930\n\nr³ = 4930 ÷ 8500 = 0.58\nr = ∛0.58 = 0.834 (approximately)\n\nAnnual decrease = 1 - 0.834 = 0.166\n= **16.6% per year** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'error-intervals',
      title: 'AQA GCSE Maths: Error Intervals Practice Questions',
      meta_description: 'Master error intervals with AQA GCSE Maths practice questions. Learn to write bounds for rounded and truncated values.',
      introduction: `When a number is rounded, we lose precision. Error intervals show the range of possible original values. If 35 is the result of rounding to the nearest integer, the original could be anywhere from 34.5 (inclusive) up to 35.5 (exclusive).

We write this as: 34.5 ≤ x < 35.5. Note the inclusive lower bound (≤) and exclusive upper bound (<). The lower bound rounds up to 35, and anything from 35.5 would round up to 36.

For different levels of rounding, adjust the bounds accordingly. If 3.5 is rounded to 1 decimal place, the error interval is 3.45 ≤ x < 3.55. If 400 is rounded to the nearest 100, the error interval is 350 ≤ x < 450.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A length is measured as 8 cm, correct to the nearest centimetre.\n\nWrite down the error interval for the length.', solution: 'Rounded to nearest 1 cm.\n\nLower bound: 8 - 0.5 = 7.5 cm\nUpper bound: 8 + 0.5 = 8.5 cm\n\n**Error interval: 7.5 ≤ length < 8.5 cm** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A number x is rounded to 2 decimal places.\nThe result is 3.47.\n\n(a) Write down the error interval for x.\n(b) What is the largest possible value of x?', solution: '(a) Rounded to 2 d.p. means nearest 0.01\n\nLower bound: 3.47 - 0.005 = 3.465\nUpper bound: 3.47 + 0.005 = 3.475\n\n**Error interval: 3.465 ≤ x < 3.475** ✓\n\n(b) The upper bound is 3.475 but this rounds to 3.48.\n\nLargest possible value is any value just below 3.475, or we say:\n\n**x < 3.475** (so 3.4749999... or 3.474̅9̅) ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A rectangle has length 12.4 cm and width 5.8 cm, both measured correct to 1 decimal place.\n\nCalculate the lower bound and upper bound for the perimeter of the rectangle.', solution: 'Error intervals:\nLength: 12.35 ≤ L < 12.45\nWidth: 5.75 ≤ W < 5.85\n\nPerimeter = 2(L + W)\n\nLower bound (use lower bounds of both):\n= 2 × (12.35 + 5.75)\n= 2 × 18.1\n= **36.2 cm** ✓\n\nUpper bound (use upper bounds of both):\n= 2 × (12.45 + 5.85)\n= 2 × 18.3\n= **36.6 cm** ✓\n\nError interval: 36.2 ≤ P < 36.6 cm', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'converting-to-and-from-standard-form',
      title: 'AQA GCSE Maths: Converting to and from Standard Form Practice Questions',
      meta_description: 'Master standard form conversions with AQA GCSE Maths practice questions. Learn to write very large and small numbers.',
      introduction: `Standard form (scientific notation) writes numbers as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer. It's useful for very large numbers (like 93,000,000 = 9.3 × 10⁷) and very small numbers (like 0.00045 = 4.5 × 10⁻⁴).

To convert TO standard form: move the decimal point until you have a number between 1 and 10. Count how many places you moved - this is the power. Positive power for large numbers, negative for small.

To convert FROM standard form: the power tells you how many places to move the decimal point. Positive power moves right (makes bigger), negative power moves left (makes smaller).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Write in standard form:\n\n(a) 45,000,000\n(b) 0.0000072', solution: '(a) 45,000,000\nMove decimal 7 places left: 4.5\nPower is positive (large number)\n**= 4.5 × 10⁷** ✓\n\n(b) 0.0000072\nMove decimal 6 places right: 7.2\nPower is negative (small number)\n**= 7.2 × 10⁻⁶** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Write as ordinary numbers:\n\n(a) 3.5 × 10⁵\n(b) 8.1 × 10⁻⁴\n(c) 6.02 × 10⁸', solution: '(a) 3.5 × 10⁵\nMove decimal 5 places right\n**= 350,000** ✓\n\n(b) 8.1 × 10⁻⁴\nMove decimal 4 places left\n**= 0.00081** ✓\n\n(c) 6.02 × 10⁸\nMove decimal 8 places right\n**= 602,000,000** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 3, content: 'Write in standard form:\n\n(a) 0.4 × 10⁵\n(b) 32 × 10⁻³\n(c) 560 × 10⁴', solution: '(a) 0.4 × 10⁵\n0.4 is not between 1 and 10\n0.4 = 4 × 10⁻¹\nSo 0.4 × 10⁵ = 4 × 10⁻¹ × 10⁵\n**= 4 × 10⁴** ✓\n\n(b) 32 × 10⁻³\n32 = 3.2 × 10¹\nSo 32 × 10⁻³ = 3.2 × 10¹ × 10⁻³\n**= 3.2 × 10⁻²** ✓\n\n(c) 560 × 10⁴\n560 = 5.6 × 10²\nSo 560 × 10⁴ = 5.6 × 10² × 10⁴\n**= 5.6 × 10⁶** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'number',
      subtopic_slug: 'calculations-in-standard-form',
      title: 'AQA GCSE Maths: Calculations in Standard Form Practice Questions',
      meta_description: 'Practice standard form calculations with AQA GCSE Maths questions. Master multiplication, division, addition and subtraction.',
      introduction: `For multiplication in standard form: multiply the numbers and add the powers. (3 × 10⁴) × (2 × 10⁵) = 6 × 10⁹. If the result isn't in standard form, adjust it.

For division: divide the numbers and subtract the powers. (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴.

For addition and subtraction, the powers must be the same. Convert one number so both have the same power, then add or subtract the front numbers. For example: 3 × 10⁵ + 4 × 10⁴ = 3 × 10⁵ + 0.4 × 10⁵ = 3.4 × 10⁵.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Work out, giving your answer in standard form:\n\n(a) (3 × 10⁴) × (4 × 10⁵)\n(b) (8 × 10⁷) ÷ (2 × 10³)', solution: '(a) (3 × 10⁴) × (4 × 10⁵)\n= (3 × 4) × 10⁴⁺⁵\n= 12 × 10⁹\n= 1.2 × 10¹ × 10⁹\n**= 1.2 × 10¹⁰** ✓\n\n(b) (8 × 10⁷) ÷ (2 × 10³)\n= (8 ÷ 2) × 10⁷⁻³\n**= 4 × 10⁴** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Work out:\n\n(5 × 10⁶) + (3 × 10⁵)\n\nGive your answer in standard form.', solution: 'Make powers the same.\n\nConvert 3 × 10⁵ to same power as 10⁶:\n3 × 10⁵ = 0.3 × 10⁶\n\nNow add:\n5 × 10⁶ + 0.3 × 10⁶\n= (5 + 0.3) × 10⁶\n**= 5.3 × 10⁶** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A virus has a diameter of 2.8 × 10⁻⁷ m.\nA grain of sand has a diameter of 7 × 10⁻⁴ m.\n\nHow many times larger is the grain of sand than the virus?\n\nGive your answer in standard form.', solution: 'Divide sand diameter by virus diameter:\n\n(7 × 10⁻⁴) ÷ (2.8 × 10⁻⁷)\n\n= (7 ÷ 2.8) × 10⁻⁴⁻⁽⁻⁷⁾\n= 2.5 × 10⁻⁴⁺⁷\n= 2.5 × 10³\n\n**The grain of sand is 2.5 × 10³ (or 2500) times larger** ✓', display_order: 3 }
    ]
  }
];

export default data;
