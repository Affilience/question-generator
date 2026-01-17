import { SubtopicData } from '../bulk-seo-insert';

export const alevelMathsStatistics: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'normal-distribution',
      title: 'Normal Distribution | A-Level Maths',
      meta_description: 'Master the normal distribution including standardisation, probability calculations, and the standard normal table for A-Level Maths success.',
      introduction: `The normal distribution is a continuous probability distribution that describes many naturally occurring phenomena. Understanding normal distributions is essential for A-Level Mathematics, as it underpins statistical inference and hypothesis testing.

The normal distribution is characterised by its bell-shaped, symmetric curve centred on the mean μ. The spread is determined by the standard deviation σ. Approximately 68% of data lies within one standard deviation of the mean, 95% within two standard deviations, and 99.7% within three standard deviations.

Any normal distribution X ~ N(μ, σ²) can be standardised to the standard normal distribution Z ~ N(0, 1) using the transformation Z = (X - μ)/σ. This allows probabilities to be found using standard normal tables or calculator functions.

Probability calculations involve finding areas under the normal curve. P(X < a) represents the probability that X takes a value less than a. For ranges, P(a < X < b) = P(X < b) - P(X < a). The symmetry of the curve means P(X > μ) = P(X < μ) = 0.5.

Inverse normal problems require finding the value that corresponds to a given probability. If P(X < k) = p, then k = μ + σ × z, where z is the standard normal value corresponding to probability p. These calculations are essential for setting thresholds and determining confidence intervals.

The normal distribution approximates the binomial distribution when n is large and p is not too close to 0 or 1, with μ = np and σ = √(npq).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'The heights of adult males in a population are normally distributed with mean 175 cm and standard deviation 8 cm. Find the probability that a randomly selected male has a height less than 180 cm.',
        solution: 'X ~ N(175, 8²). Standardise: Z = (180 - 175)/8 = 0.625 (1 mark). P(X < 180) = P(Z < 0.625) (1 mark). Using tables or calculator: P(Z < 0.625) = 0.734 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The masses of apples from an orchard follow a normal distribution with mean 150 g and standard deviation 20 g. Find the proportion of apples with masses between 140 g and 170 g.',
        solution: 'X ~ N(150, 20²). Standardise both values: Z₁ = (140 - 150)/20 = -0.5, Z₂ = (170 - 150)/20 = 1.0 (1 mark). P(140 < X < 170) = P(-0.5 < Z < 1.0) (1 mark). = P(Z < 1.0) - P(Z < -0.5) = 0.8413 - 0.3085 (1 mark). = 0.533 or 53.3% (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The time taken to complete a task is normally distributed with mean μ minutes and standard deviation 5 minutes. Given that 15% of people take longer than 45 minutes, find the value of μ.',
        solution: 'Let X ~ N(μ, 25). P(X > 45) = 0.15, so P(X < 45) = 0.85 (1 mark). Find z such that P(Z < z) = 0.85. From tables, z = 1.036 (1 mark). Using Z = (X - μ)/σ: 1.036 = (45 - μ)/5 (1 mark). 45 - μ = 5.18 (1 mark). μ = 45 - 5.18 = 39.8 minutes (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'hypothesis-testing',
      title: 'Hypothesis Testing | A-Level Maths',
      meta_description: 'Learn hypothesis testing procedures including null and alternative hypotheses, significance levels, and critical regions for A-Level Maths.',
      introduction: `Hypothesis testing is a formal procedure for using sample data to make decisions about population parameters. Mastering hypothesis testing is essential for A-Level Mathematics, as it provides a rigorous framework for statistical inference.

A hypothesis test begins with two hypotheses: the null hypothesis H₀, which represents the default position or claim to be tested, and the alternative hypothesis H₁, which represents what we're trying to find evidence for. The alternative may be one-tailed (testing for increase or decrease) or two-tailed (testing for any change).

The significance level α is the probability of incorrectly rejecting a true null hypothesis (Type I error). Common values are 5% (0.05), 1% (0.01), and 10% (0.10). The critical region contains values that would lead to rejecting H₀.

For binomial hypothesis tests, we calculate the probability of obtaining a result at least as extreme as the observed value, assuming H₀ is true. If this probability is less than the significance level, we reject H₀.

For normal distribution tests, we compare the test statistic (standardised sample value) to critical values from the standard normal distribution. For a two-tailed 5% test, critical values are ±1.96.

The p-value represents the probability of obtaining a result at least as extreme as the observed value, given that H₀ is true. A small p-value (less than α) indicates strong evidence against H₀.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A coin is suspected of being biased towards heads. In 20 tosses, 15 heads are obtained. State suitable null and alternative hypotheses for testing whether the coin is biased.',
        solution: 'Let p = probability of getting heads on one toss (1 mark). H₀: p = 0.5 (the coin is fair) (1 mark). H₁: p > 0.5 (the coin is biased towards heads) - one-tailed test (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'A manufacturer claims that 30% of their chocolates contain nuts. A random sample of 50 chocolates contains 20 with nuts. Test at the 5% significance level whether the proportion is higher than claimed.',
        solution: 'H₀: p = 0.3, H₁: p > 0.3 (one-tailed test) (1 mark). Under H₀: X ~ B(50, 0.3). Using normal approximation: μ = 50 × 0.3 = 15, σ = √(50 × 0.3 × 0.7) = 3.24 (1 mark). Test statistic: z = (20 - 15)/3.24 = 1.54 (1 mark). Critical value at 5% one-tailed: z = 1.645 (1 mark). Since 1.54 < 1.645, we do not reject H₀. There is insufficient evidence at the 5% level that the proportion with nuts is higher than 30% (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'The mean breaking strength of a type of rope is claimed to be 200 N with standard deviation 15 N. A sample of 36 ropes has mean breaking strength 195 N. Test at the 1% significance level whether the mean has decreased.',
        solution: 'H₀: μ = 200, H₁: μ < 200 (one-tailed test) (1 mark). Under H₀, sample means follow X̄ ~ N(200, 15²/36) = N(200, 6.25) (1 mark). Standard error = 15/√36 = 2.5 (1 mark). Test statistic: z = (195 - 200)/2.5 = -2.0 (1 mark). Critical value at 1% one-tailed: z = -2.326 (1 mark). Since -2.0 > -2.326, we do not reject H₀. There is insufficient evidence at the 1% level that the mean breaking strength has decreased (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'binomial-distribution',
      title: 'Binomial Distribution | A-Level Maths',
      meta_description: 'Master the binomial distribution including probability calculations, mean and variance, and applications for A-Level Maths examination success.',
      introduction: `The binomial distribution models the number of successes in a fixed number of independent trials. Understanding binomial probabilities is fundamental to A-Level Mathematics statistics.

A binomial distribution applies when there are a fixed number n of independent trials, each trial has exactly two outcomes (success or failure), the probability of success p is constant for each trial, and we count the total number of successes X.

The probability of exactly r successes in n trials is P(X = r) = C(n,r) × p^r × (1-p)^(n-r), where C(n,r) = n!/(r!(n-r)!) is the number of combinations. This formula can be used directly or obtained from statistical tables or calculators.

The mean (expected value) of a binomial distribution is E(X) = np, and the variance is Var(X) = np(1-p) = npq where q = 1-p. The standard deviation is σ = √(npq).

Cumulative probabilities P(X ≤ r) can be found by summing individual probabilities or using cumulative binomial tables. P(X > r) = 1 - P(X ≤ r) and P(X ≥ r) = 1 - P(X ≤ r-1).

For large n, the binomial distribution can be approximated by the normal distribution N(np, npq), particularly useful when np > 5 and nq > 5. A continuity correction of ±0.5 should be applied.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A fair coin is tossed 10 times. Find the probability of obtaining exactly 6 heads.',
        solution: 'X ~ B(10, 0.5). P(X = 6) = C(10,6) × 0.5⁶ × 0.5⁴ (1 mark). = 210 × 0.5¹⁰ (1 mark). = 210 × 0.000977 = 0.205 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A multiple choice test has 20 questions, each with 5 options. If a student guesses randomly, find the mean and standard deviation of the number of correct answers.',
        solution: 'X ~ B(20, 0.2) where p = 1/5 = 0.2 (1 mark). Mean = np = 20 × 0.2 = 4 correct answers (1 mark). Variance = npq = 20 × 0.2 × 0.8 = 3.2 (1 mark). Standard deviation = √3.2 = 1.79 correct answers (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A machine produces items with a 5% defect rate. In a batch of 100 items, find the probability that there are more than 7 defective items, using a suitable approximation.',
        solution: 'X ~ B(100, 0.05). Use normal approximation since n is large (1 mark). μ = np = 100 × 0.05 = 5, σ² = npq = 100 × 0.05 × 0.95 = 4.75, σ = 2.18 (1 mark). P(X > 7) ≈ P(Y > 7.5) using continuity correction, where Y ~ N(5, 4.75) (1 mark). z = (7.5 - 5)/2.18 = 1.15 (1 mark). P(Z > 1.15) = 1 - 0.8749 = 0.125 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'probability',
      title: 'Probability | A-Level Maths',
      meta_description: 'Master probability concepts including Venn diagrams, tree diagrams, and the addition and multiplication rules for A-Level Maths success.',
      introduction: `Probability theory provides the mathematical framework for quantifying uncertainty. A-Level Mathematics requires proficiency in calculating probabilities using various methods and understanding key probability concepts.

Probability measures the likelihood of an event occurring, expressed as a number between 0 (impossible) and 1 (certain). For equally likely outcomes, P(A) = number of favourable outcomes / total number of outcomes.

The addition rule for mutually exclusive events (events that cannot occur simultaneously) is P(A or B) = P(A) + P(B). For non-mutually exclusive events: P(A or B) = P(A) + P(B) - P(A and B).

The multiplication rule for independent events (where one event doesn't affect the other) is P(A and B) = P(A) × P(B). For dependent events, we use conditional probability: P(A and B) = P(A) × P(B|A).

Conditional probability P(A|B) is the probability of A given that B has occurred: P(A|B) = P(A and B) / P(B). This is fundamental to understanding how information updates probabilities.

Tree diagrams systematically display all possible outcomes and their probabilities. Probabilities are multiplied along branches and added for alternative routes to the same outcome. They are particularly useful for sequential events or sampling problems.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Two fair dice are rolled. Find the probability that the sum is 7 or 11.',
        solution: 'Total outcomes = 6 × 6 = 36 (1 mark). Sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 ways. Sum of 11: (5,6), (6,5) = 2 ways (1 mark). P(sum is 7 or 11) = (6 + 2)/36 = 8/36 = 2/9 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'In a class, 60% of students study French, 50% study Spanish, and 30% study both. Find the probability that a randomly selected student studies at least one of these languages.',
        solution: 'Let F = studies French, S = studies Spanish (1 mark). P(F) = 0.6, P(S) = 0.5, P(F and S) = 0.3 (1 mark). P(F or S) = P(F) + P(S) - P(F and S) (addition rule for non-mutually exclusive events) (1 mark). P(F or S) = 0.6 + 0.5 - 0.3 = 0.8 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Using a tree diagram or otherwise, find the probability that the balls are different colours.',
        solution: 'First draw: P(R) = 5/8, P(B) = 3/8 (1 mark). If first red: P(B|R) = 3/7. If first blue: P(R|B) = 5/7 (1 mark). P(RB) = 5/8 × 3/7 = 15/56 (1 mark). P(BR) = 3/8 × 5/7 = 15/56 (1 mark). P(different colours) = P(RB) + P(BR) = 15/56 + 15/56 = 30/56 = 15/28 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'statistical-sampling',
      title: 'Statistical Sampling | A-Level Maths',
      meta_description: 'Learn about sampling methods including simple random, stratified, and systematic sampling for A-Level Maths examination success.',
      introduction: `Statistical sampling involves selecting a subset of a population to make inferences about the whole population. Understanding different sampling methods and their applications is essential for A-Level Mathematics.

A population is the entire group being studied, while a sample is a subset selected from it. A sampling frame is a list of all members of the population from which the sample will be drawn. Good sampling aims to produce a representative sample that reflects population characteristics.

Simple random sampling gives each member of the population an equal probability of being selected. This can be achieved using random number generators or tables. While unbiased, it may not represent subgroups proportionally.

Systematic sampling selects every kth item from a list, where k = N/n (population size divided by sample size). A random starting point between 1 and k is chosen. It's easier to implement than simple random sampling but may miss periodic patterns.

Stratified sampling divides the population into distinct subgroups (strata) and samples from each stratum in proportion to its size in the population. This ensures all groups are represented and can improve precision for stratified populations.

Opportunity sampling uses readily available subjects, while quota sampling sets targets for different groups. Both are non-random and may introduce bias, but are practical when random sampling is impractical.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A factory has 500 employees. Explain how to select a simple random sample of 50 employees using random numbers.',
        solution: 'Number all 500 employees from 001 to 500 (1 mark). Use a random number generator or table to generate three-digit numbers between 001 and 500 (1 mark). Select employees corresponding to each random number, ignoring repeats and numbers outside the range, until 50 unique employees are selected (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A school has 800 students: 300 in Year 10, 280 in Year 11, and 220 in Year 12. Describe how to take a stratified sample of 80 students.',
        solution: 'Calculate the sampling fraction: 80/800 = 1/10 or 10% (1 mark). Year 10: 300 × (80/800) = 30 students (1 mark). Year 11: 280 × (80/800) = 28 students. Year 12: 220 × (80/800) = 22 students (1 mark). Randomly select the required number of students from each year group (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A company wants to survey its 2000 customers. Compare systematic sampling with stratified sampling for this purpose, explaining advantages and disadvantages of each method.',
        solution: 'Systematic sampling: select every kth customer (k = 2000/n) from a list after choosing a random start (1 mark). Advantage: easy to implement, no need to number all customers or use random number tables repeatedly (1 mark). Disadvantage: may introduce bias if there is a pattern in the list that coincides with the sampling interval (1 mark). Stratified sampling: divide customers into strata (e.g., by age, location, or purchase frequency) and sample proportionally from each (1 mark). Advantage: ensures all subgroups are represented, often more precise than simple random sampling. Disadvantage: requires knowledge of population characteristics to form strata, and need a sampling frame that identifies stratum membership (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'data-presentation',
      title: 'Data Presentation | A-Level Maths',
      meta_description: 'Master data presentation methods including histograms, cumulative frequency, and box plots for A-Level Maths statistical analysis.',
      introduction: `Effective data presentation allows patterns and trends to be visualised and communicated. A-Level Mathematics requires proficiency in creating and interpreting various statistical diagrams.

Histograms display continuous data grouped into class intervals. The key feature is that area represents frequency, so frequency density = frequency / class width is plotted on the y-axis. This allows fair comparison of unequal class intervals. Unlike bar charts, there are no gaps between bars.

Cumulative frequency diagrams plot cumulative frequency against the upper class boundary. The resulting S-shaped curve allows estimation of medians, quartiles, and percentiles. The median corresponds to the 50% point, Q1 to 25%, and Q3 to 75%.

Box plots (box and whisker diagrams) display the five-number summary: minimum, lower quartile (Q1), median (Q2), upper quartile (Q3), and maximum. The interquartile range (IQR = Q3 - Q1) measures spread. Outliers may be shown as separate points, typically defined as values more than 1.5 × IQR from the quartiles.

Comparing distributions involves examining location (central tendency), spread (dispersion), and shape (skewness). Side-by-side box plots effectively compare distributions, while back-to-back stem-and-leaf diagrams show detailed distribution shapes.

Choosing appropriate diagrams depends on data type and purpose: histograms for continuous distributions, pie charts for proportions, scatter graphs for relationships between variables.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'The masses of 40 parcels are grouped in a histogram. The class 5-10 kg has frequency 12 and the class 10-20 kg has frequency 20. Calculate the frequency density for each class.',
        solution: 'For class 5-10 kg: class width = 10 - 5 = 5 kg, frequency density = 12/5 = 2.4 per kg (1 mark). For class 10-20 kg: class width = 20 - 10 = 10 kg, frequency density = 20/10 = 2.0 per kg (1 mark). The 5-10 kg class has higher frequency density despite lower frequency because of its narrower class width (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'From a cumulative frequency diagram, the following values are read: minimum = 10, Q1 = 25, median = 35, Q3 = 50, maximum = 80. Sketch a box plot and calculate the interquartile range.',
        solution: 'Box plot: Draw a number line from 10 to 80. Draw whisker from 10 to 25, box from 25 to 50 with median line at 35, whisker from 50 to 80 (1 mark for correct box, 1 mark for correct whiskers and median). IQR = Q3 - Q1 = 50 - 25 = 25 (1 mark). This shows the spread of the middle 50% of the data (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Two datasets have box plots showing: Dataset A (min=20, Q1=35, median=45, Q3=60, max=85) and Dataset B (min=30, Q1=40, median=50, Q3=55, max=65). Compare these distributions in terms of location, spread, and skewness.',
        solution: 'Location: Dataset B has higher median (50 vs 45) and higher Q1 and Q3, suggesting generally higher values (1 mark). Spread: Dataset A has IQR = 60-35 = 25 and range = 85-20 = 65. Dataset B has IQR = 55-40 = 15 and range = 65-30 = 35. Dataset A has greater spread/variability (1 mark). Skewness for A: median - Q1 = 10, Q3 - median = 15; upper half is more spread so positive skew (1 mark). Skewness for B: median - Q1 = 10, Q3 - median = 5; lower half is more spread so negative skew (1 mark). Overall: Dataset B is higher on average but more consistent, while Dataset A is lower with more variation and positive skew (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'regression',
      title: 'Linear Regression | A-Level Maths',
      meta_description: 'Learn about linear regression, least squares method, and making predictions using regression lines for A-Level Maths examination success.',
      introduction: `Linear regression finds the best-fitting straight line through bivariate data, enabling predictions of one variable from another. Understanding regression analysis is essential for A-Level Mathematics applied statistics.

The regression line of y on x has equation y = a + bx, where x is the explanatory (independent) variable and y is the response (dependent) variable. The line passes through the point (x̄, ȳ) where x̄ and ȳ are the means.

The gradient b measures how much y changes for each unit increase in x. It's calculated as b = Sxy/Sxx, where Sxy = Σxy - (ΣxΣy)/n and Sxx = Σx² - (Σx)²/n. The intercept a = ȳ - bx̄.

The least squares method minimises the sum of squared vertical distances (residuals) between data points and the regression line. This gives the best linear unbiased estimate of the relationship between variables.

Regression lines should only be used for interpolation (predictions within the range of the original data) as extrapolation (predictions beyond this range) is unreliable. The strength of the relationship affects prediction reliability - stronger correlation means more accurate predictions.

Residuals (actual - predicted values) should be examined to check if a linear model is appropriate. Patterns in residuals may indicate non-linear relationships or other issues with the model.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A regression line has equation y = 12 + 3.5x. Interpret the gradient and intercept in context if x is hours studied and y is exam score.',
        solution: 'The gradient 3.5 means that for each additional hour studied, the predicted exam score increases by 3.5 marks (1 mark). The intercept 12 means that the predicted exam score for 0 hours studied is 12 marks (1 mark). This represents the baseline score without any studying, though interpretation may be limited if x = 0 is outside the data range (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'For 8 data points: Σx = 40, Σy = 120, Σxy = 680, Σx² = 220. Calculate the equation of the regression line y = a + bx.',
        solution: 'Calculate means: x̄ = 40/8 = 5, ȳ = 120/8 = 15 (1 mark). Sxy = 680 - (40 × 120)/8 = 680 - 600 = 80 (1 mark). Sxx = 220 - (40)²/8 = 220 - 200 = 20 (1 mark). b = 80/20 = 4, a = 15 - 4(5) = -5. Equation: y = -5 + 4x (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A regression line for predicting weight (y kg) from height (x cm) is y = -50 + 0.8x, based on data for adults with heights between 150 cm and 190 cm. Discuss the reliability of using this equation to predict the weight of (a) an adult 175 cm tall, and (b) a child 100 cm tall.',
        solution: 'For (a) 175 cm: y = -50 + 0.8(175) = -50 + 140 = 90 kg. This is interpolation as 175 cm is within the original data range (150-190 cm), so the prediction is reliable (1 mark). The relationship established from the data should apply reasonably well at this height (1 mark). For (b) 100 cm: y = -50 + 0.8(100) = -50 + 80 = 30 kg. This is extrapolation far outside the original data range (1 mark). The prediction is unreliable because: the relationship may not be linear outside the observed range; children have different body proportions to adults; the data was collected from adults not children (1 mark). Extrapolation should be avoided or treated with extreme caution (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'correlation',
      title: 'Correlation | A-Level Maths',
      meta_description: 'Master correlation including the product moment correlation coefficient and its interpretation for A-Level Maths statistical analysis.',
      introduction: `Correlation measures the strength and direction of the linear relationship between two variables. Understanding correlation is essential for A-Level Mathematics when analysing bivariate data.

The product moment correlation coefficient (PMCC), denoted r, measures linear correlation on a scale from -1 to +1. A value of +1 indicates perfect positive linear correlation, -1 indicates perfect negative linear correlation, and 0 indicates no linear correlation.

The formula is r = Sxy / √(Sxx × Syy), where Sxy = Σxy - (ΣxΣy)/n, Sxx = Σx² - (Σx)²/n, and Syy = Σy² - (Σy)²/n. Values close to ±1 indicate strong correlation; values close to 0 indicate weak or no linear correlation.

Interpreting correlation: |r| > 0.9 is usually considered very strong, 0.7-0.9 strong, 0.4-0.7 moderate, 0.2-0.4 weak, and < 0.2 very weak or no correlation. However, context matters - a lower correlation may be significant in some fields.

Correlation does not imply causation. A strong correlation between variables may be due to: direct causation, reverse causation, a common underlying cause (confounding variable), or coincidence. Scatter diagrams should always be examined as r only measures linear relationships - a strong non-linear relationship may have r ≈ 0.

Hypothesis testing for correlation tests H₀: ρ = 0 (no correlation in population) against H₁: ρ ≠ 0 or ρ > 0 or ρ < 0, using critical values from statistical tables.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A scatter diagram shows data points falling closely around a line sloping downward from left to right. Describe the correlation and estimate a possible value for r.',
        solution: 'The correlation is negative (downward slope indicates as x increases, y decreases) (1 mark). The correlation is strong (points fall closely around the line) (1 mark). A reasonable estimate for r would be between -0.8 and -0.95 (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'For 10 data points: Sxx = 200, Syy = 50, Sxy = -80. Calculate the product moment correlation coefficient and interpret it.',
        solution: 'r = Sxy / √(Sxx × Syy) (1 mark). r = -80 / √(200 × 50) = -80 / √10000 = -80 / 100 (1 mark). r = -0.8 (1 mark). This indicates a strong negative linear correlation between the variables - as one increases, the other tends to decrease (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A study finds a correlation of r = 0.85 between ice cream sales and drowning incidents. Explain why this does not show that ice cream causes drowning, and suggest what might explain this correlation.',
        solution: 'Correlation does not imply causation - even a strong correlation like 0.85 does not prove that one variable causes changes in the other (1 mark). There is likely a confounding variable affecting both: hot weather / summer temperature (1 mark). Hot weather causes more ice cream sales (people want cold treats) and more drowning incidents (more people swimming) (1 mark). The two variables are correlated because they share a common cause, not because one causes the other (1 mark). This is a classic example of spurious correlation - the apparent relationship disappears when the confounding variable is controlled for (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'maths',
      exam_board: 'aqa',
      topic_slug: 'statistics',
      subtopic_slug: 'conditional-probability',
      title: 'Conditional Probability | A-Level Maths',
      meta_description: 'Learn conditional probability including Bayes\' theorem and independence testing for A-Level Maths examination success.',
      introduction: `Conditional probability measures how the probability of an event changes when we know that another event has occurred. Mastering conditional probability is essential for A-Level Mathematics and has applications in medical testing, quality control, and decision making.

The conditional probability of A given B is P(A|B) = P(A and B) / P(B). This can be rearranged to the multiplication rule: P(A and B) = P(B) × P(A|B).

Two events are independent if P(A|B) = P(A), meaning knowing B has occurred doesn't change the probability of A. Equivalently, P(A and B) = P(A) × P(B) for independent events.

The formula for total probability allows calculation of P(A) by considering all ways A can occur: P(A) = P(A|B)P(B) + P(A|B')P(B'), where B and B' are complementary events.

Bayes' theorem reverses conditional probabilities: P(B|A) = P(A|B)P(B) / P(A). This is particularly useful when we know P(A|B) but need P(B|A), common in diagnostic testing where we know test accuracy but want probability of disease given positive result.

Tree diagrams are especially useful for conditional probability problems, with probabilities on branches and multiplication along paths. The denominators in conditional probability often come from adding appropriate branch products.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'P(A) = 0.4, P(B) = 0.5, and P(A and B) = 0.2. Calculate P(A|B) and determine whether A and B are independent.',
        solution: 'P(A|B) = P(A and B) / P(B) = 0.2 / 0.5 = 0.4 (1 mark). For independence, P(A|B) should equal P(A) (1 mark). Since P(A|B) = 0.4 = P(A), events A and B are independent (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'In a factory, Machine A produces 60% of items and Machine B produces 40%. Machine A has a 2% defect rate and Machine B has a 5% defect rate. Find the probability that a randomly selected item is defective.',
        solution: 'Let D = defective, A = from Machine A, B = from Machine B (1 mark). P(D) = P(D|A)P(A) + P(D|B)P(B) (total probability formula) (1 mark). P(D) = 0.02 × 0.6 + 0.05 × 0.4 (1 mark). P(D) = 0.012 + 0.020 = 0.032 or 3.2% (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A medical test for a disease has 95% sensitivity (correctly identifies those with disease) and 90% specificity (correctly identifies those without disease). If 1% of the population has the disease, find the probability that a person who tests positive actually has the disease.',
        solution: 'Let D = has disease, T = tests positive. Given: P(D) = 0.01, P(T|D) = 0.95, P(T\'|D\') = 0.90 so P(T|D\') = 0.10 (1 mark). Need P(D|T) using Bayes\' theorem (1 mark). First find P(T): P(T) = P(T|D)P(D) + P(T|D\')P(D\') = 0.95 × 0.01 + 0.10 × 0.99 (1 mark). P(T) = 0.0095 + 0.099 = 0.1085 (1 mark). P(D|T) = P(T|D)P(D) / P(T) = (0.95 × 0.01) / 0.1085 (1 mark). P(D|T) = 0.0095 / 0.1085 = 0.0876 ≈ 8.8% (1 mark). Despite a positive test, there\'s only about 9% chance of having the disease.',
        display_order: 3
      }
    ]
  }
];

export default alevelMathsStatistics;
