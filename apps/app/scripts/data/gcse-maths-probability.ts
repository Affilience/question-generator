import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'probability',
      title: 'GCSE Maths: Probability Basics Practice Questions',
      meta_description: 'Master probability fundamentals with GCSE Maths practice. Learn to calculate and express probabilities.',
      introduction: `Probability measures how likely an event is to happen, expressed as a number between 0 (impossible) and 1 (certain). It can be written as a fraction, decimal, or percentage. For equally likely outcomes: P(event) = number of favourable outcomes / total number of outcomes.

The probability of something NOT happening is 1 minus the probability of it happening: P(not A) = 1 - P(A). This is useful when it's easier to calculate what you don't want.

All probabilities of mutually exclusive outcomes must sum to 1. If you're asked to find a missing probability from a list, subtract the known probabilities from 1.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A bag contains 3 red balls, 5 blue balls, and 2 green balls.\n\nA ball is taken at random.\n\nFind the probability of getting a blue ball.', solution: '**Count outcomes:**\nTotal balls = 3 + 5 + 2 = 10\nBlue balls = 5\n\n**Calculate probability:**\nP(blue) = 5/10 = 1/2\n\n**P(blue) = 1/2 (or 0.5 or 50%)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The probability of rain tomorrow is 0.35.\n\n(a) What is the probability it does not rain?\n(b) Is it more likely to rain or not rain? Explain.', solution: '(a) **Use P(not A) = 1 - P(A):**\nP(not rain) = 1 - 0.35 = 0.65\n\n**P(not rain) = 0.65** ✓\n\n(b) **Compare probabilities:**\nP(rain) = 0.35\nP(not rain) = 0.65\n\nSince 0.65 > 0.35:\n**It is more likely NOT to rain** ✓\n\n(0.65 is closer to 1, meaning "not raining" is more likely)', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A spinner has sections coloured red, blue, yellow, and green.\n\nP(red) = 0.25\nP(blue) = 0.4\nP(yellow) = P(green)\n\nFind P(yellow).', solution: '**All probabilities must sum to 1:**\n\nP(red) + P(blue) + P(yellow) + P(green) = 1\n\n**Substitute known values:**\n0.25 + 0.4 + P(yellow) + P(green) = 1\n\n**Since P(yellow) = P(green), let P(yellow) = x:**\n0.65 + x + x = 1\n0.65 + 2x = 1\n2x = 0.35\nx = 0.175\n\n**P(yellow) = 0.175** ✓\n\nCheck: 0.25 + 0.4 + 0.175 + 0.175 = 1 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'tree-diagrams',
      title: 'GCSE Maths: Tree Diagrams Practice Questions',
      meta_description: 'Master tree diagrams with GCSE Maths practice. Learn to calculate probabilities of combined events.',
      introduction: `Tree diagrams show all possible outcomes of a sequence of events. Each branch represents a possible outcome, with probabilities written on branches. To find the probability of a specific path, multiply along the branches.

For independent events, the probabilities don't change. For dependent events (like picking without replacement), adjust probabilities after each selection. The sum of branches from any point must equal 1.

To find "at least one" or "or" situations, identify all relevant paths on the tree and add their probabilities. Alternatively, use P(at least one) = 1 - P(none).`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'A coin is flipped twice.\n\nDraw a tree diagram and find the probability of getting two heads.', solution: '**Tree diagram:**\n        H (0.5) → HH\nH (0.5)\n        T (0.5) → HT\n\n        H (0.5) → TH\nT (0.5)\n        T (0.5) → TT\n\n**P(two heads) = P(HH):**\nMultiply along the branch:\nP(HH) = 0.5 × 0.5 = 0.25\n\n**P(two heads) = 0.25 (or 1/4)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'The probability that it rains on any day is 0.3.\n\nUsing a tree diagram for two days, find:\n(a) P(rain on both days)\n(b) P(rain on exactly one day)', solution: '**(a) P(rain on both days):**\nP(RR) = 0.3 × 0.3 = 0.09\n\n**P(rain both days) = 0.09** ✓\n\n**(b) P(rain on exactly one day):**\nTwo ways: Rain then No rain, OR No rain then Rain\n\nP(RN) = 0.3 × 0.7 = 0.21\nP(NR) = 0.7 × 0.3 = 0.21\n\nP(exactly one day) = 0.21 + 0.21 = 0.42\n\n**P(exactly one day of rain) = 0.42** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'A bag contains 4 red and 3 blue balls. Two balls are drawn without replacement.\n\nFind the probability of getting:\n(a) two red balls\n(b) one of each colour', solution: '**(a) Two red balls:**\n\nFirst draw: P(R) = 4/7\nSecond draw (given first was red): P(R) = 3/6 = 1/2\n\nP(RR) = 4/7 × 1/2 = 4/14 = 2/7\n\n**P(two red) = 2/7** ✓\n\n**(b) One of each colour:**\n\nTwo paths: RB or BR\n\nP(RB) = 4/7 × 3/6 = 12/42 = 2/7\nP(BR) = 3/7 × 4/6 = 12/42 = 2/7\n\nP(one of each) = 2/7 + 2/7 = 4/7\n\n**P(one of each) = 4/7** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'venn-diagrams',
      title: 'GCSE Maths: Venn Diagrams Practice Questions',
      meta_description: 'Master Venn diagrams with GCSE Maths practice. Learn set notation and probability calculations.',
      introduction: `Venn diagrams show relationships between sets using overlapping circles. The intersection (A ∩ B) contains elements in both sets. The union (A ∪ B) contains elements in either or both sets. The complement (A') contains everything not in A.

To find probabilities from a Venn diagram, use: P(event) = number in region / total number. Make sure you count correctly - the intersection is part of both circles, not separate.

When filling in a Venn diagram from data, start with the intersection, then work outwards. The numbers in all regions (including outside all circles) should sum to the total.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'In a class of 30 students:\n- 18 study French (F)\n- 15 study German (G)\n- 8 study both\n\nFind how many study French only.', solution: '**Use a Venn diagram:**\n\nBoth (F ∩ G) = 8\n\nFrench total = 18\nFrench only = 18 - 8 = 10\n\n**10 students study French only** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'A Venn diagram shows:\n- Circle A has 12 elements (including intersection)\n- Circle B has 15 elements (including intersection)\n- A ∩ B has 5 elements\n- Total in universal set = 30\n\nA member is chosen at random. Find:\n(a) P(A only)\n(b) P(A ∪ B)', solution: '**(a) P(A only):**\nA only = A total - intersection = 12 - 5 = 7\n\nP(A only) = 7/30\n\n**P(A only) = 7/30** ✓\n\n**(b) P(A ∪ B):**\nA ∪ B = A only + B only + intersection\n= 7 + (15-5) + 5\n= 7 + 10 + 5 = 22\n\nP(A ∪ B) = 22/30 = 11/15\n\n**P(A ∪ B) = 11/15** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: '50 people were asked about pets. Let C = owns a cat, D = owns a dog.\n- 22 own a cat\n- 28 own a dog  \n- 10 own both\n- The rest own neither\n\nOne person is chosen at random. Find:\n(a) P(owns a cat or a dog or both)\n(b) P(owns a dog given that they own a cat)', solution: '**(a) P(C ∪ D):**\n\nC only = 22 - 10 = 12\nD only = 28 - 10 = 18\nBoth = 10\n\nC ∪ D = 12 + 18 + 10 = 40\n\nP(C ∪ D) = 40/50 = 4/5\n\n**P(cat or dog or both) = 4/5** ✓\n\n**(b) P(D | C) - conditional probability:**\n\nGiven they own a cat, we only consider the 22 cat owners.\n\nOf these, 10 also own a dog.\n\nP(D | C) = 10/22 = 5/11\n\n**P(dog given cat) = 5/11** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'relative-frequency',
      title: 'GCSE Maths: Relative Frequency Practice Questions',
      meta_description: 'Master relative frequency with GCSE Maths practice. Learn experimental probability and estimating outcomes.',
      introduction: `Relative frequency (or experimental probability) is calculated from actual results: relative frequency = frequency of outcome / total number of trials. It estimates the theoretical probability when that's unknown or when testing if an item is fair.

As the number of trials increases, relative frequency gets closer to the theoretical probability. This is the Law of Large Numbers. A few trials might give very different results from the true probability; many trials give a better estimate.

To estimate expected outcomes: expected frequency = probability × number of trials. This gives what we'd expect "on average" - actual results will vary.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A dice is rolled 50 times. It lands on 6 a total of 12 times.\n\nFind the relative frequency of rolling a 6.', solution: '**Relative frequency = Frequency / Total trials**\n\nRelative frequency = 12/50 = 6/25 = 0.24\n\n**Relative frequency = 0.24 (or 6/25)** ✓\n\n(Note: This is higher than the theoretical probability of 1/6 ≈ 0.167)', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A spinner was spun 200 times with results:\n- Red: 45 times\n- Blue: 82 times\n- Green: 73 times\n\n(a) Estimate the probability of landing on blue.\n(b) If the spinner is spun 500 times, estimate how many times it lands on green.', solution: '(a) **Estimate P(blue):**\n\nRelative frequency = 82/200 = 0.41\n\n**P(blue) ≈ 0.41** ✓\n\n(b) **Expected green in 500 spins:**\n\nRelative frequency of green = 73/200 = 0.365\n\nExpected = 0.365 × 500 = 182.5\n\n**Expected green ≈ 182 or 183 times** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A coin is suspected of being biased. It is flipped 100 times and lands on heads 62 times.\n\n(a) Estimate the probability of heads.\n(b) If the coin were fair, how many heads would you expect in 100 flips?\n(c) Does the evidence support the coin being biased? Explain.', solution: '(a) **Estimate P(heads):**\n\nRelative frequency = 62/100 = 0.62\n\n**P(heads) ≈ 0.62** ✓\n\n(b) **Expected heads if fair:**\n\nFair coin: P(heads) = 0.5\nExpected = 0.5 × 100 = 50 heads\n\n**Expected = 50 heads** ✓\n\n(c) **Is the coin biased?**\n\nThe coin gave 62 heads vs expected 50 for a fair coin.\n\n12 more heads than expected could suggest bias TOWARDS heads.\n\nHOWEVER, 100 trials is not very many. Random variation could account for this difference. More trials would be needed to be confident.\n\n**The evidence suggests possible bias, but is not conclusive.** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'independent-events',
      title: 'GCSE Maths: Independent Events Practice Questions',
      meta_description: 'Master independent events with GCSE Maths practice. Learn the multiplication rule for combined probabilities.',
      introduction: `Events are independent if one happening doesn't affect the probability of the other. Coin flips are independent - getting heads doesn't change the probability of the next flip. Drawing with replacement is independent; drawing without replacement is dependent.

For independent events: P(A and B) = P(A) × P(B). This multiplication rule extends to any number of independent events. Simply multiply all the individual probabilities.

Be careful to check independence. If items are selected "without replacement" or one event changes the conditions for another, the events are dependent and require different methods (like adjusted tree diagrams).`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Two fair coins are flipped independently.\n\nFind the probability of getting a head on both coins.', solution: '**For independent events: P(A and B) = P(A) × P(B)**\n\nP(head on coin 1) = 1/2\nP(head on coin 2) = 1/2\n\nP(both heads) = 1/2 × 1/2 = 1/4\n\n**P(both heads) = 1/4 (or 0.25)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A dice is rolled and a card is drawn from a standard pack.\n\nFind the probability of:\n(a) rolling a 6 AND drawing an ace\n(b) rolling an even number AND drawing a heart', solution: '**(a) P(6 AND ace):**\n\nP(rolling 6) = 1/6\nP(ace) = 4/52 = 1/13\n\nP(6 AND ace) = 1/6 × 1/13 = 1/78\n\n**P(6 AND ace) = 1/78** ✓\n\n**(b) P(even AND heart):**\n\nP(even) = 3/6 = 1/2 (rolling 2, 4, or 6)\nP(heart) = 13/52 = 1/4\n\nP(even AND heart) = 1/2 × 1/4 = 1/8\n\n**P(even AND heart) = 1/8** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A machine has a 0.02 probability of producing a faulty item. Three items are produced independently.\n\nFind the probability that:\n(a) all three are faulty\n(b) none are faulty\n(c) at least one is faulty', solution: 'Let P(faulty) = 0.02, so P(not faulty) = 0.98\n\n**(a) All three faulty:**\nP(FFF) = 0.02 × 0.02 × 0.02\n= 0.02³ = 0.000008\n\n**P(all faulty) = 0.000008** ✓\n\n**(b) None faulty:**\nP(NNN) = 0.98 × 0.98 × 0.98\n= 0.98³ = 0.941192\n\n**P(none faulty) = 0.941 (3 d.p.)** ✓\n\n**(c) At least one faulty:**\nP(at least one) = 1 - P(none)\n= 1 - 0.941192\n= 0.058808\n\n**P(at least one faulty) = 0.059 (3 d.p.)** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'conditional-probability',
      title: 'GCSE Maths: Conditional Probability Practice Questions (Higher)',
      meta_description: 'Master conditional probability with GCSE Maths Higher practice. Learn P(A|B) and dependent events.',
      introduction: `Conditional probability is the probability of an event given that another event has already happened. P(A|B) means "probability of A given B." It's calculated as P(A|B) = P(A and B) / P(B).

When events are dependent, the second probability depends on what happened first. For example, when drawing without replacement, the probabilities change after each draw because the total number of items decreases.

Tree diagrams are excellent for conditional probability - the second set of branches shows the adjusted probabilities. Reading "given that" tells you which branch you're already on.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'In a group of 40 students:\n- 25 passed the exam\n- Of the 25 who passed, 18 were girls\n\nA student who passed is chosen at random.\nFind the probability they are a girl.', solution: '**This is conditional probability:**\nWe\'re given they passed, so we only consider the 25 who passed.\n\nOf these, 18 are girls.\n\nP(girl | passed) = 18/25\n\n**P(girl | passed) = 18/25 (or 0.72)** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement.\n\nFind:\n(a) P(second is blue | first was red)\n(b) P(both are blue)', solution: '**(a) P(blue | first red):**\n\nAfter removing a red ball:\n- 4 red and 3 blue remain\n- Total = 7 balls\n\nP(blue | first red) = 3/7\n\n**P(second blue | first red) = 3/7** ✓\n\n**(b) P(both blue):**\n\nP(first blue) = 3/8\nP(second blue | first blue) = 2/7\n\nP(BB) = 3/8 × 2/7 = 6/56 = 3/28\n\n**P(both blue) = 3/28** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 5, content: 'P(A) = 0.4\nP(B) = 0.5\nP(A and B) = 0.15\n\n(a) Find P(A | B)\n(b) Find P(B | A)\n(c) Are A and B independent? Explain.', solution: '**(a) P(A | B):**\n\nP(A | B) = P(A and B) / P(B)\n= 0.15 / 0.5\n= 0.3\n\n**P(A | B) = 0.3** ✓\n\n**(b) P(B | A):**\n\nP(B | A) = P(A and B) / P(A)\n= 0.15 / 0.4\n= 0.375\n\n**P(B | A) = 0.375** ✓\n\n**(c) Are A and B independent?**\n\nFor independence: P(A and B) = P(A) × P(B)\n\nCheck: P(A) × P(B) = 0.4 × 0.5 = 0.2\n\nBut P(A and B) = 0.15 ≠ 0.2\n\n**No, A and B are NOT independent** ✓\n\n(Also: P(A|B) = 0.3 ≠ P(A) = 0.4, confirming dependence)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'expected-frequency',
      title: 'GCSE Maths: Expected Frequency Practice Questions',
      meta_description: 'Master expected frequency with GCSE Maths practice. Calculate how many times events should occur.',
      introduction: `Expected frequency predicts how many times an outcome should occur based on probability. The formula is: Expected frequency = Probability × Number of trials. This gives the theoretical average, not a guarantee.

For example, if P(6) = 1/6 and you roll a dice 60 times, expected sixes = 1/6 × 60 = 10. You might get 8 or 12, but 10 is the expected average over many repetitions.

Expected frequency questions often ask you to work backwards: given results, assess if they match expectations. Large differences suggest the item might not be fair, but small differences are normal random variation.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A fair dice is rolled 120 times.\n\nHow many times would you expect to roll a 3?', solution: '**Expected frequency = Probability × Trials**\n\nP(rolling 3) = 1/6\n\nExpected = 1/6 × 120 = 20\n\n**Expected: 20 times** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A biased coin has P(heads) = 0.65.\n\nThe coin is flipped 200 times.\n\n(a) How many heads would you expect?\n(b) How many tails would you expect?', solution: '(a) **Expected heads:**\nExpected = 0.65 × 200 = 130\n\n**Expected heads = 130** ✓\n\n(b) **Expected tails:**\nP(tails) = 1 - 0.65 = 0.35\nExpected = 0.35 × 200 = 70\n\n**Expected tails = 70** ✓\n\nCheck: 130 + 70 = 200 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A spinner has 4 equal sections: A, B, C, D.\n\nAnna spins it 80 times with results:\nA: 25, B: 15, C: 18, D: 22\n\n(a) What is the expected frequency for each section if the spinner is fair?\n(b) Which section is most likely to be over-represented on the spinner? Explain.', solution: '(a) **Expected for fair spinner:**\n\nP(each section) = 1/4 = 0.25\nExpected for each = 0.25 × 80 = 20\n\n**Expected: 20 for each section** ✓\n\n(b) **Compare actual to expected:**\n\nA: 25 (5 more than expected)\nB: 15 (5 less than expected)\nC: 18 (2 less than expected)\nD: 22 (2 more than expected)\n\n**Section A is most likely over-represented** ✓\n\nIt appeared 25 times vs expected 20, the largest positive difference. This suggests section A might be larger than 1/4 of the spinner.', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'probability',
      subtopic_slug: 'mutually-exclusive',
      title: 'GCSE Maths: Mutually Exclusive Events Practice Questions',
      meta_description: 'Master mutually exclusive events with GCSE Maths practice. Learn the addition rule for "or" probabilities.',
      introduction: `Mutually exclusive events cannot happen at the same time. When rolling a dice, getting a 3 and getting a 5 are mutually exclusive - you can't get both on one roll. For mutually exclusive events: P(A or B) = P(A) + P(B).

If events CAN happen together, they're NOT mutually exclusive. Getting an even number and getting a number less than 4 are NOT mutually exclusive (the number 2 satisfies both). For these: P(A or B) = P(A) + P(B) - P(A and B).

A complete set of mutually exclusive events (covering all possibilities) has probabilities that sum to 1. Use this to find missing probabilities.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A fair dice is rolled.\n\nFind the probability of rolling a 2 or a 5.', solution: '**2 and 5 are mutually exclusive (can\'t be both)**\n\nP(2) = 1/6\nP(5) = 1/6\n\nP(2 or 5) = P(2) + P(5)\n= 1/6 + 1/6\n= 2/6 = 1/3\n\n**P(2 or 5) = 1/3** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A spinner can land on red, blue, green, or yellow.\n\nP(red) = 0.35\nP(blue) = 0.25\nP(green) = 0.15\n\nFind:\n(a) P(yellow)\n(b) P(red or green)', solution: '(a) **All probabilities sum to 1:**\nP(yellow) = 1 - (0.35 + 0.25 + 0.15)\n= 1 - 0.75\n= 0.25\n\n**P(yellow) = 0.25** ✓\n\n(b) **Red and green are mutually exclusive:**\nP(red or green) = P(red) + P(green)\n= 0.35 + 0.15\n= 0.5\n\n**P(red or green) = 0.5** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A card is drawn from a standard pack of 52 cards.\n\nFind the probability that it is:\n(a) a king or a queen (mutually exclusive)\n(b) a heart or a picture card (not mutually exclusive)', solution: '(a) **King or queen (mutually exclusive):**\n\nP(king) = 4/52\nP(queen) = 4/52\n\nP(king or queen) = 4/52 + 4/52 = 8/52 = 2/13\n\n**P(king or queen) = 2/13** ✓\n\n(b) **Heart or picture card (NOT mutually exclusive):**\n\nP(heart) = 13/52\nP(picture) = 12/52 (J, Q, K in 4 suits)\nP(heart AND picture) = 3/52 (J, Q, K of hearts)\n\nP(A or B) = P(A) + P(B) - P(A and B)\n= 13/52 + 12/52 - 3/52\n= 22/52 = 11/26\n\n**P(heart or picture) = 11/26** ✓', display_order: 3 }
    ]
  }
];

export default data;
