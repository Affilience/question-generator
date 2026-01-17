import { SubtopicData } from '../bulk-seo-insert';

export const data: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'mean-median-mode',
      title: 'GCSE Maths: Mean, Median and Mode Practice Questions',
      meta_description: 'Master the three averages with GCSE Maths practice. Learn when to use mean, median, and mode.',
      introduction: `The three averages each measure the "middle" of data differently. Mean = sum of values ÷ number of values. Median = middle value when sorted. Mode = most frequent value. Each has advantages: mean uses all data, median isn't affected by outliers, mode shows the most common value.

To find the median, arrange values in order and find the middle one. With an even number of values, the median is the mean of the two middle values. For grouped data, find the median class by locating where the cumulative frequency passes half the total.

The range (highest - lowest) measures spread, not average. In exam questions, you might need to compare two data sets using both an average and the range.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Here are the ages of 7 people:\n\n23, 18, 25, 18, 30, 22, 18\n\nFind:\n(a) the mean\n(b) the median\n(c) the mode', solution: '(a) **Mean:**\nSum = 23 + 18 + 25 + 18 + 30 + 22 + 18 = 154\nMean = 154 ÷ 7 = **22** ✓\n\n(b) **Median:**\nArrange in order: 18, 18, 18, 22, 23, 25, 30\n7 values → middle is the 4th value\n**Median = 22** ✓\n\n(c) **Mode:**\n18 appears 3 times (most frequent)\n**Mode = 18** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'The mean of 5 numbers is 12.\nFour of the numbers are 8, 10, 15, and 9.\n\nFind the fifth number.', solution: '**Mean = Sum ÷ Count**\n\nIf mean is 12 and there are 5 numbers:\nSum = 12 × 5 = 60\n\n**Sum of known numbers:**\n8 + 10 + 15 + 9 = 42\n\n**Fifth number:**\n60 - 42 = 18\n\n**The fifth number is 18** ✓\n\nCheck: (8 + 10 + 15 + 9 + 18) ÷ 5 = 60 ÷ 5 = 12 ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Class A has 20 students with a mean score of 65.\nClass B has 30 students with a mean score of 72.\n\nFind the mean score of all 50 students.', solution: '**Find total scores for each class:**\n\nClass A: Total = 20 × 65 = 1300\nClass B: Total = 30 × 72 = 2160\n\n**Combined total:**\n1300 + 2160 = 3460\n\n**Combined mean:**\n3460 ÷ 50 = 69.2\n\n**Mean score = 69.2** ✓\n\nNote: This is NOT simply (65 + 72) ÷ 2 because the classes have different sizes.', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'histograms',
      title: 'GCSE Maths: Histograms Practice Questions (Higher)',
      meta_description: 'Master histograms with GCSE Maths Higher practice. Learn frequency density and interpreting unequal class widths.',
      introduction: `Histograms show frequency using area, not height, making them useful for continuous data with unequal class widths. The key formula is: frequency density = frequency ÷ class width. So frequency = frequency density × class width.

To draw a histogram, calculate frequency density for each class and plot bars with no gaps. The bars touch because the data is continuous. To read a histogram, find the area of each bar to get the frequency.

Common mistakes include using height instead of area, and forgetting that class width matters. For "10 ≤ x < 20", the class width is 10.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A class has width 5 and frequency 20.\n\nCalculate the frequency density.', solution: '**Formula:** Frequency density = Frequency ÷ Class width\n\nFrequency density = 20 ÷ 5 = 4\n\n**Frequency density = 4** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'On a histogram, a bar has:\n- Class interval 20 ≤ x < 35\n- Frequency density 2.4\n\nFind the frequency for this class.', solution: '**Find class width:**\nWidth = 35 - 20 = 15\n\n**Use formula:**\nFrequency = Frequency density × Class width\nFrequency = 2.4 × 15 = 36\n\n**Frequency = 36** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The table shows waiting times at a doctor\'s surgery.\n\nTime (t mins) | Frequency\n0 ≤ t < 5     | 10\n5 ≤ t < 10    | 25\n10 ≤ t < 20   | 30\n20 ≤ t < 40   | 16\n\nCalculate the frequency density for each class and draw a histogram.', solution: '**Calculate frequency densities:**\n\n0 ≤ t < 5: Width = 5\nFD = 10 ÷ 5 = **2**\n\n5 ≤ t < 10: Width = 5\nFD = 25 ÷ 5 = **5**\n\n10 ≤ t < 20: Width = 10\nFD = 30 ÷ 10 = **3**\n\n20 ≤ t < 40: Width = 20\nFD = 16 ÷ 20 = **0.8**\n\n**For the histogram:**\n- x-axis: Time (minutes)\n- y-axis: Frequency density\n- Bars at heights 2, 5, 3, 0.8\n- Bars with widths 5, 5, 10, 20 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'cumulative-frequency',
      title: 'GCSE Maths: Cumulative Frequency Practice Questions',
      meta_description: 'Master cumulative frequency with GCSE Maths practice. Learn to draw graphs and find medians and quartiles.',
      introduction: `Cumulative frequency is a running total of frequencies. To create a cumulative frequency table, add each frequency to the total of all previous frequencies. Plot cumulative frequency against the upper class boundary to draw a cumulative frequency curve.

From the curve, read off the median (at n/2), lower quartile (at n/4), and upper quartile (at 3n/4), where n is the total frequency. The interquartile range = UQ - LQ, measuring the spread of the middle 50% of data.

Cumulative frequency curves are S-shaped (ogive). They always start at zero (at the lowest value) and end at the total frequency.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Complete this cumulative frequency table:\n\nScore | Frequency | Cumulative Frequency\n0-10  |     5     |      5\n11-20 |     8     |      ?\n21-30 |    12     |      ?\n31-40 |     7     |      ?', solution: '**Add each frequency to the running total:**\n\n0-10: CF = 5\n11-20: CF = 5 + 8 = **13**\n21-30: CF = 13 + 12 = **25**\n31-40: CF = 25 + 7 = **32** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A cumulative frequency curve has:\n- Total frequency = 80\n- Median = 45\n- Lower quartile = 38\n- Upper quartile = 56\n\nFind the interquartile range.', solution: '**Interquartile range = UQ - LQ**\n\nIQR = 56 - 38 = 18\n\n**Interquartile range = 18** ✓\n\nNote: The total frequency (80) tells us where to read the quartiles:\n- LQ at 80 ÷ 4 = 20th value\n- Median at 80 ÷ 2 = 40th value\n- UQ at 3 × 80 ÷ 4 = 60th value', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'From a cumulative frequency graph, the following values are read:\n- Total = 100 students\n- Lower quartile = 52 marks\n- Median = 64 marks\n- Upper quartile = 73 marks\n\n(a) How many students scored more than 73 marks?\n(b) How many students scored between 52 and 73 marks?', solution: '(a) **Students scoring more than UQ:**\nUQ is at the 75th value (3n/4)\n100 - 75 = 25 students\n\n**25 students scored more than 73 marks** ✓\n\n(b) **Students between LQ and UQ:**\nLQ is at the 25th value (n/4)\nUQ is at the 75th value (3n/4)\n\nNumber between = 75 - 25 = 50 students\n\n**50 students scored between 52 and 73 marks** ✓\n\n(This is always 50% of the data, between the quartiles)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'box-plots',
      title: 'GCSE Maths: Box Plots Practice Questions',
      meta_description: 'Master box plots with GCSE Maths practice. Learn to draw, interpret, and compare box-and-whisker diagrams.',
      introduction: `Box plots (box-and-whisker diagrams) display five key values: minimum, lower quartile (LQ), median, upper quartile (UQ), and maximum. The box spans from LQ to UQ (the interquartile range), with a line at the median. Whiskers extend to the minimum and maximum.

Box plots are excellent for comparing distributions. A longer box means more spread in the middle 50% of data. If the median line is off-centre within the box, the data is skewed.

To draw a box plot, you need the five-figure summary. From a cumulative frequency curve, read LQ at n/4, median at n/2, UQ at 3n/4. The minimum and maximum are often given directly.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A box plot has:\n- Minimum = 15\n- Lower quartile = 28\n- Median = 35\n- Upper quartile = 44\n- Maximum = 62\n\nFind the interquartile range and the range.', solution: '**Interquartile range:**\nIQR = UQ - LQ = 44 - 28 = 16\n\n**Range:**\nRange = Maximum - Minimum = 62 - 15 = 47\n\n**IQR = 16, Range = 47** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'Two classes took the same test. Their box plots show:\n\nClass A: Median = 58, IQR = 20\nClass B: Median = 52, IQR = 12\n\nCompare the two distributions. Give two comparisons.', solution: '**Comparison 1 (average):**\nClass A has a higher median (58) than Class B (52), so on average, Class A scored better.\n\n**Comparison 2 (spread):**\nClass A has a larger IQR (20) than Class B (12), so Class A\'s scores are more spread out / less consistent.\n\n**Alternative comparison:**\nThe middle 50% of Class B (IQR = 12) is more tightly grouped, suggesting more consistent performance. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'The box plot for a set of data shows:\n- Minimum = 10\n- LQ = 25\n- Median = 35\n- UQ = 50\n- Maximum = 80\n\nThere are 60 values in the data set.\n\n(a) How many values are between 25 and 50?\n(b) How many values are less than 35?', solution: '(a) **Values between LQ and UQ:**\nThe IQR contains the middle 50% of data.\n50% of 60 = 30 values\n\n**30 values are between 25 and 50** ✓\n\n(b) **Values less than the median:**\nThe median is the middle value, so 50% are below.\n50% of 60 = 30 values\n\n**30 values are less than 35** ✓\n\nNote: 25% of values (15) are below LQ\n25% of values (15) are between LQ and median\n25% of values (15) are between median and UQ\n25% of values (15) are above UQ', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'scatter-graphs',
      title: 'GCSE Maths: Scatter Graphs Practice Questions',
      meta_description: 'Master scatter graphs with GCSE Maths practice. Learn correlation, lines of best fit, and making predictions.',
      introduction: `Scatter graphs show the relationship between two variables by plotting paired data as points. The pattern reveals correlation: positive (both variables increase together), negative (one increases as the other decreases), or no correlation (no clear pattern).

Correlation can be strong (points close to a line) or weak (points more scattered). Correlation does NOT prove causation - two things may be linked without one causing the other.

A line of best fit passes through the data showing the general trend. It should have roughly equal numbers of points above and below. Use it to estimate values within the data range (interpolation), but be cautious about extrapolating beyond the data.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'Describe the correlation shown by a scatter graph where:\n- As temperature increases, ice cream sales increase\n- The points are close to a straight line', solution: '**Type of correlation:**\nPositive correlation\n(Both variables increase together)\n\n**Strength:**\nStrong correlation\n(Points are close to a line)\n\n**Answer: Strong positive correlation** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A line of best fit on a scatter graph has equation y = 2x + 5.\n\nThe x values in the data range from 10 to 50.\n\n(a) Estimate y when x = 30.\n(b) Explain why using the line to predict y when x = 100 may be unreliable.', solution: '(a) **Substitute x = 30:**\ny = 2(30) + 5 = 65\n\n**Estimated y = 65** ✓\n\n(b) **Why x = 100 is unreliable:**\nx = 100 is outside the range of the data (10 to 50). This is extrapolation.\n\nWe cannot assume the linear relationship continues beyond the data we have. The pattern might change for larger values. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A study finds strong positive correlation between hours of TV watched and exam grades.\n\nA newspaper headline claims: "Watching TV improves exam results!"\n\n(a) Explain why this claim may be incorrect.\n(b) Suggest an alternative explanation for the correlation.', solution: '(a) **Why the claim may be incorrect:**\nCorrelation does not prove causation. Just because two variables are linked doesn\'t mean one causes the other.\n\nThe study shows the variables are related, but doesn\'t prove that watching TV directly improves grades. ✓\n\n(b) **Alternative explanation:**\nThere could be a third variable (confounding factor) affecting both:\n\n- Students with more free time (finished homework quickly) might watch more TV AND get better grades because they understand the material faster.\n\n- Wealthier families might have more TVs AND provide more educational support.\n\n- The causation could be reversed: students who get good grades feel less stressed and watch more TV as a reward. ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'correlation',
      title: 'GCSE Maths: Correlation Practice Questions',
      meta_description: 'Master correlation with GCSE Maths practice. Learn to identify and describe relationships between variables.',
      introduction: `Correlation describes the relationship between two variables. Positive correlation: as one increases, so does the other (e.g., height and shoe size). Negative correlation: as one increases, the other decreases (e.g., price and demand). No correlation: no clear relationship.

The strength of correlation ranges from weak (scattered points) to strong (points close to a line). A perfect correlation would have all points exactly on a line. In real data, some scatter is normal.

When describing correlation, state both the type (positive/negative/none) and strength (strong/moderate/weak). For example: "strong positive correlation" or "weak negative correlation".`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'For each pair of variables, state whether you would expect positive correlation, negative correlation, or no correlation:\n\n(a) Age and height of children\n(b) Temperature and number of coats sold', solution: '(a) **Age and height of children:**\nAs age increases, height generally increases.\n**Positive correlation** ✓\n\n(b) **Temperature and coats sold:**\nAs temperature increases, fewer coats are sold.\n**Negative correlation** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A scatter graph shows the relationship between hours of exercise per week and resting heart rate.\n\nThe graph shows points that slope downward from left to right, with most points close to a straight line.\n\nDescribe the correlation and suggest a reason for it.', solution: '**Description of correlation:**\nStrong negative correlation.\n\n(Negative because the line slopes downward; strong because points are close to the line)\n\n**Reason:**\nPeople who exercise more tend to have stronger, more efficient hearts. A fitter heart can pump more blood per beat, so it doesn\'t need to beat as often at rest. Therefore, more exercise leads to a lower resting heart rate. ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Two variables have a correlation coefficient of -0.85.\n\n(a) Describe the correlation between the variables.\n(b) If the correlation coefficient was 0.15, how would your description change?', solution: '(a) **Correlation coefficient = -0.85:**\n- The negative sign indicates negative correlation\n- 0.85 is close to -1, indicating strong correlation\n\n**Description: Strong negative correlation** ✓\n\n(As one variable increases, the other tends to decrease, and this relationship is consistent)\n\n(b) **Correlation coefficient = 0.15:**\n- The positive sign indicates positive correlation\n- 0.15 is close to 0, indicating weak correlation\n\n**Description: Weak positive correlation (or very weak/almost no correlation)** ✓\n\n(There is a slight tendency for both to increase together, but the relationship is not reliable)', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'sampling',
      title: 'GCSE Maths: Sampling Practice Questions',
      meta_description: 'Master sampling methods with GCSE Maths practice. Learn random, systematic, and stratified sampling.',
      introduction: `Sampling means selecting a subset of a population to study. A good sample should be representative - reflecting the characteristics of the whole population. The main sampling methods are: random (every member has equal chance), systematic (select every nth item), and stratified (proportional representation of subgroups).

Random sampling avoids bias but may miss subgroups by chance. Systematic sampling is easy to implement but can miss patterns that match the sampling interval. Stratified sampling ensures subgroups are represented proportionally.

For stratified sampling: number from subgroup = (subgroup size / population size) × sample size. Always round sensibly - you can't sample half a person!`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'A school has 800 students. A sample of 50 is to be taken.\n\nDescribe how to take a simple random sample.', solution: '**Method for random sample:**\n\n1. Give each of the 800 students a unique number (001 to 800)\n\n2. Use a random number generator (or random number table) to generate 50 different numbers between 001 and 800\n\n3. Select the students whose numbers are generated\n\n**This ensures every student has an equal chance of being selected.** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: 'A factory produces 2000 items per day. Quality control tests a sample of 100.\n\nDescribe how to take a systematic sample.', solution: '**Method for systematic sample:**\n\n1. Calculate the sampling interval:\n2000 ÷ 100 = 20\nSo select every 20th item.\n\n2. Choose a random starting point between 1 and 20 (e.g., 7)\n\n3. Select items 7, 27, 47, 67, 87, ... and so on\n\n4. Continue until you have 100 items\n\n**This gives an evenly spread sample through the production run.** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A company has:\n- 120 managers\n- 280 office staff\n- 600 factory workers\n\nA stratified sample of 50 is to be taken.\n\nCalculate how many of each type of worker should be in the sample.', solution: '**Total population:** 120 + 280 + 600 = 1000\n\n**Managers:**\n(120 / 1000) × 50 = 6 managers ✓\n\n**Office staff:**\n(280 / 1000) × 50 = 14 office staff ✓\n\n**Factory workers:**\n(600 / 1000) × 50 = 30 factory workers ✓\n\n**Check:** 6 + 14 + 30 = 50 ✓\n\nThis ensures each group is represented in proportion to their size in the company.', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'pie-charts',
      title: 'GCSE Maths: Pie Charts Practice Questions',
      meta_description: 'Master pie charts with GCSE Maths practice. Learn to draw, interpret, and calculate angles and frequencies.',
      introduction: `Pie charts show proportions of a whole using sectors. The total is always 360°. To find the angle for a category: angle = (frequency / total) × 360°. To find frequency from an angle: frequency = (angle / 360°) × total.

When drawing a pie chart, calculate all angles first (check they sum to 360°), draw a circle, mark the centre, and use a protractor to draw each sector accurately. Label each sector clearly.

Pie charts work well for showing proportions but are harder to read for exact values. They're best when you have a few distinct categories and want to show how each compares to the whole.`
    },
    questions: [
      { difficulty: 'easy', marks: 2, content: 'In a pie chart, the "Car" sector has an angle of 90°.\n\nThe total number of people surveyed was 200.\n\nHow many people travel by car?', solution: '**Formula:** Frequency = (Angle / 360°) × Total\n\nFrequency = (90° / 360°) × 200\nFrequency = 0.25 × 200\nFrequency = 50\n\n**50 people travel by car** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 3, content: '60 students were asked about their favourite sport.\n\n- Football: 20 students\n- Tennis: 15 students\n- Swimming: 18 students\n- Other: 7 students\n\nCalculate the angle for each sector.', solution: '**Formula:** Angle = (Frequency / Total) × 360°\n\n**Football:**\n(20/60) × 360° = 120° ✓\n\n**Tennis:**\n(15/60) × 360° = 90° ✓\n\n**Swimming:**\n(18/60) × 360° = 108° ✓\n\n**Other:**\n(7/60) × 360° = 42° ✓\n\n**Check:** 120° + 90° + 108° + 42° = 360° ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'A pie chart shows the results of a survey. The angles are:\n- Yes: 150°\n- No: 120°\n- Don\'t know: 90°\n\nIf 25 more people had said "Yes", the "Yes" angle would have been 180°.\n\nFind the original number of people surveyed.', solution: '**Let original total = n**\n\n**Original "Yes":**\nAngle 150° → Frequency = (150/360) × n = 5n/12\n\n**After 25 more "Yes":**\nNew total = n + 25\nNew "Yes" = 5n/12 + 25\nNew angle = 180°\n\n**Set up equation:**\n(5n/12 + 25) / (n + 25) = 180/360 = 1/2\n\n**Solve:**\n5n/12 + 25 = (n + 25)/2\n\nMultiply by 12:\n5n + 300 = 6(n + 25)\n5n + 300 = 6n + 150\n300 - 150 = 6n - 5n\n150 = n\n\n**Original number = 150 people** ✓\n\nCheck: Original Yes = 150 × 150/360 = 62.5... \nActually let me recalculate...5(150)/12 = 62.5\nNew Yes = 62.5 + 25 = 87.5\nNew total = 175\n87.5/175 = 0.5 = 180/360 ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'frequency-tables',
      title: 'GCSE Maths: Frequency Tables Practice Questions',
      meta_description: 'Master frequency tables with GCSE Maths practice. Learn to calculate averages from grouped and ungrouped data.',
      introduction: `Frequency tables organise data by showing how often each value (or range of values) occurs. For ungrouped data, list each value and its frequency. For grouped data, use class intervals like 10-19, 20-29, etc.

To find the mean from a frequency table: multiply each value by its frequency, add these products, then divide by the total frequency. For grouped data, use the midpoint of each class as the value.

The modal class is the class with the highest frequency. For the median class, find n/2 and locate which class contains this position using cumulative frequency.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Score | Frequency\n  1   |    4\n  2   |    6\n  3   |    8\n  4   |    2\n\nFind the mean score.', solution: '**Calculate sum of (score × frequency):**\n\n1 × 4 = 4\n2 × 6 = 12\n3 × 8 = 24\n4 × 2 = 8\n\nTotal = 4 + 12 + 24 + 8 = 48\n\n**Total frequency:**\n4 + 6 + 8 + 2 = 20\n\n**Mean:**\n48 ÷ 20 = 2.4\n\n**Mean score = 2.4** ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Time (mins) | Frequency\n  0 - 10    |    5\n 10 - 20    |   12\n 20 - 30    |   18\n 30 - 40    |   15\n\nEstimate the mean time.', solution: '**Use midpoints for grouped data:**\n\nClass 0-10: midpoint = 5\nClass 10-20: midpoint = 15\nClass 20-30: midpoint = 25\nClass 30-40: midpoint = 35\n\n**Calculate sum of (midpoint × frequency):**\n5 × 5 = 25\n15 × 12 = 180\n25 × 18 = 450\n35 × 15 = 525\n\nTotal = 25 + 180 + 450 + 525 = 1180\n\n**Total frequency:**\n5 + 12 + 18 + 15 = 50\n\n**Estimated mean:**\n1180 ÷ 50 = 23.6 minutes\n\n**Estimated mean = 23.6 minutes** ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Height (cm)  | Frequency\n140 ≤ h < 150|    8\n150 ≤ h < 160|   15\n160 ≤ h < 170|   22\n170 ≤ h < 180|   12\n180 ≤ h < 190|    3\n\n(a) Find the modal class.\n(b) Find the class containing the median.', solution: '(a) **Modal class:**\nThe class with highest frequency is 160 ≤ h < 170 (frequency 22)\n\n**Modal class = 160 ≤ h < 170** ✓\n\n(b) **Median class:**\nTotal frequency = 8 + 15 + 22 + 12 + 3 = 60\n\nMedian position = 60 ÷ 2 = 30th value\n\n**Build cumulative frequency:**\n140-150: 8 (positions 1-8)\n150-160: 8+15 = 23 (positions 9-23)\n160-170: 23+22 = 45 (positions 24-45)\n\nThe 30th value is in the 160-170 class.\n\n**Median class = 160 ≤ h < 170** ✓', display_order: 3 }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'comparing-distributions',
      title: 'GCSE Maths: Comparing Distributions Practice Questions',
      meta_description: 'Master comparing distributions with GCSE Maths practice. Learn to compare averages and measures of spread.',
      introduction: `When comparing two sets of data, always compare an average (mean, median, or mode) AND a measure of spread (range, IQR, or standard deviation). This gives a complete picture of how the data sets differ.

For your comparison: state which measure you're using, give the values for both data sets, and interpret what this means in context. For example: "The median for group A (45) is higher than for group B (38), showing group A typically scored better."

Common phrases: "on average" (for mean/median), "more consistent/varied" (for spread), "typically" (for any average). Always relate back to the context of the question.`
    },
    questions: [
      { difficulty: 'easy', marks: 3, content: 'Two classes took the same test:\n\nClass X: Mean = 65, Range = 40\nClass Y: Mean = 58, Range = 25\n\nCompare the two distributions. Make two comparisons.', solution: '**Comparison 1 (average):**\nClass X has a higher mean (65) than Class Y (58). This shows that on average, Class X performed better on the test.\n\n**Comparison 2 (spread):**\nClass X has a larger range (40) than Class Y (25). This shows that Class X\'s scores were more spread out, while Class Y performed more consistently. ✓', display_order: 1 },
      { difficulty: 'medium', marks: 4, content: 'Shop A and Shop B recorded daily sandwich sales.\n\nShop A: Median = 45, IQR = 12\nShop B: Median = 52, IQR = 28\n\nCompare the distributions and suggest which shop has more predictable sales.', solution: '**Comparison of average:**\nShop B has a higher median (52 sandwiches) than Shop A (45 sandwiches). This means Shop B typically sells more sandwiches per day.\n\n**Comparison of spread:**\nShop A has a smaller IQR (12) than Shop B (28). This means the middle 50% of Shop A\'s sales are less spread out.\n\n**Which is more predictable:**\n**Shop A has more predictable sales** because:\n- The IQR is smaller, so daily sales vary less\n- Shop B\'s large IQR (28) means sales fluctuate more, making it harder to predict\n\n(Shop A would find it easier to plan stock levels) ✓', display_order: 2 },
      { difficulty: 'hard', marks: 4, content: 'Two athletes recorded their 100m times (seconds):\n\nAthlete P: Mean = 11.2, Standard deviation = 0.15\nAthlete Q: Mean = 11.0, Standard deviation = 0.45\n\nThe coach must choose one athlete for an important race.\n\nWho should be chosen? Use the data to justify your answer.', solution: '**Analysis of averages:**\nAthlete Q has a lower mean time (11.0s vs 11.2s), so on average, Q runs faster.\n\n**Analysis of spread:**\nAthlete P has a smaller standard deviation (0.15 vs 0.45), meaning P\'s times are more consistent and predictable.\n\n**Recommendation:**\n**It depends on the situation:**\n\n**Choose Athlete Q if:**\nYou need the best possible time. Q\'s average is 0.2 seconds faster, which could make the difference.\n\n**Choose Athlete P if:**\nConsistency matters more. P is more reliable and unlikely to have a bad race. Q\'s high standard deviation means Q could run anywhere from ~10s to ~12s.\n\n**Most likely recommendation: Athlete P** for an important race, as consistency reduces risk. ✓', display_order: 3 }
    ]
  }
];

export default data;
