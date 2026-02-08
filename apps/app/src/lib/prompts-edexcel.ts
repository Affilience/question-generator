import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
  getDifficultyGuidance,
} from './prompts-common';


/**
 * GCSE Maths mark ranges.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };
    case 'medium':
      return { min: 3, max: 5 };
    case 'hard':
      return { min: 5, max: 8 };
    default:
      return { min: 1, max: 5 };
  }
}

/**
 * Edexcel GCSE Mathematics (1MA1) Question Generation Prompts.
 * Based on analysis of Edexcel past papers, mark schemes, and examiner reports.
 *
 * Sources:
 * - https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html
 * - https://www.birchwood-ed.co.uk/post/understanding-the-assessment-objectives-for-foundation-gcse-maths-with-edexcel
 * - Edexcel examiner reports and mark scheme guidance
 */

// ============================================================================
// EDEXCEL ASSESSMENT OBJECTIVES
// ============================================================================

const EDEXCEL_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Mathematics Assessment Objectives

### AO1: Use and Apply Standard Techniques (Foundation: 50%, Higher: 40%)
Students should be able to:
- Accurately recall facts, terminology and definitions
- Use and interpret notation correctly
- Accurately carry out routine procedures
- Accurately carry out set tasks requiring multi-step solutions

**AO1 Question Characteristics:**
- Direct calculation questions
- "Work out", "Calculate", "Find" commands
- Standard procedures applied to given information
- Numbers and contexts are straightforward

### AO2: Reason, Interpret and Communicate Mathematically (Foundation: 25%, Higher: 30%)
Students should be able to:
- Make deductions, inferences and draw conclusions from mathematical information
- Construct chains of reasoning to achieve a given result
- Interpret and communicate information accurately
- Present arguments and proofs
- Assess the validity of an argument and critically evaluate

**AO2 Question Characteristics:**
- "Explain", "Show that", "Prove" commands
- Questions requiring justification or reasoning
- Interpretation of graphs, diagrams, statistical data
- Multi-step logical arguments

### AO3: Solve Problems Within Mathematics and Other Contexts (Foundation: 25%, Higher: 30%)
Students should be able to:
- Translate problems in mathematical or non-mathematical contexts into a process
- Make and use connections between different parts of mathematics
- Interpret results in the context of the given problem
- Evaluate methods used and results obtained
- Evaluate solutions to identify how they may have been affected by assumptions made

**AO3 Question Characteristics:**
- Unfamiliar contexts requiring interpretation
- Multi-step problems without scaffolding
- Real-world applications with decisions required
- Questions where method selection is not obvious
- The question does NOT tell students to "set up and solve" - they must make the link themselves

### Weighting Summary
| Tier | AO1 | AO2 | AO3 |
|------|-----|-----|-----|
| Foundation | 50% | 25% | 25% |
| Higher | 40% | 30% | 30% |
`;

// ============================================================================
// EDEXCEL OFFICIAL COMMAND WORDS
// ============================================================================

const EDEXCEL_COMMAND_WORDS = `
## Edexcel GCSE Mathematics Command Words (Official Definitions)

### Most Common Commands (from examiner reports)
Across Higher tier papers, typical command word frequency:
- "Work out" - ~21 occurrences per paper
- "Find" - ~22 occurrences per paper
- "Write down" - ~5 occurrences per paper

### Calculation Commands
| Command | Definition | Working Required? |
|---------|-----------|-------------------|
| **Work out** | Calculate using mathematical processes | Yes - show method |
| **Calculate** | Use a calculator and show working | Yes - show key steps |
| **Find** | May involve deduction as well as calculation | Depends on context |
| **Write down** | Give the value required (typically no working needed) | No - answer only |
| **Estimate** | Round values FIRST, then calculate | Yes - show rounded values |

### Algebraic Commands
| Command | Definition |
|---------|-----------|
| **Expand** | Remove brackets by multiplying out |
| **Expand and simplify** | Remove brackets, then collect like terms |
| **Factorise** | Insert brackets by taking out common factors |
| **Factorise fully** | Complete factorisation with all common factors extracted |
| **Simplify** | Reduce to simplest form |
| **Solve** | Find ALL values of the unknown that satisfy the equation |
| **Rearrange** / **Make x the subject** | Rewrite formula with different variable isolated |

### Reasoning Commands
| Command | Definition |
|---------|-----------|
| **Show that** | Give every step of a process leading to the required outcome. Solution should contain a concluding statement. |
| **Prove** | Provide a formal mathematical argument with defined variables and justified steps |
| **Explain** | Give a written mathematical justification |
| **Justify** | Show all working AND/OR give a written explanation |
| **Give a reason** | State the mathematical fact that supports your answer |

### Graph/Diagram Commands
| Command | Definition |
|---------|-----------|
| **Draw** | Produce an ACCURATE drawing (unless sketch requested) |
| **Sketch** | Show important features without requiring precision |
| **Plot** | Mark points accurately on a graph |
| **Describe** | Write a sentence giving features of the situation |

### Transformation Commands (Full description required)
| Transformation | MUST include |
|---------------|--------------|
| Reflection | "Reflection" + equation of mirror line |
| Rotation | "Rotation" + centre + angle + direction (clockwise/anticlockwise) |
| Translation | "Translation" + column vector |
| Enlargement | "Enlargement" + scale factor + centre of enlargement |
`;

// ============================================================================
// EDEXCEL-SPECIFIC CONTENT (Not in all exam boards)
// ============================================================================

const EDEXCEL_UNIQUE_CONTENT = `
## Edexcel-Specific Content

### Topics tested on BOTH Foundation and Higher (unlike some other boards):
- **Stem and leaf diagrams** - Reading, interpreting, finding median
- **Frequency polygons** - Plotting at midpoints, connecting with lines
- **Back-to-back stem and leaf** - For comparing distributions

### Higher Tier Unique Content:
- **Capture-Recapture Method (Peterson Method)**
  - Used to estimate population sizes (e.g., fish in a lake, animals in habitat)
  - Formula: N = (M × C) ÷ R
    - N = estimated population
    - M = number marked in first sample
    - C = number caught in second sample (after mixing)
    - R = number of recaptured (marked) in second sample
  - Key assumptions students must state:
    - No deaths or births between samples
    - Marks don't affect animal behaviour or survival
    - Mixing occurs so marked animals spread through population
    - Second sample is representative

### Edexcel Exam Paper Characteristics:
- Questions can feel "wordy" and challenging
- Early questions may require problem-solving approach
- Strong emphasis on unfamiliar contexts
- Known for complex, real-world applications
- Questions are clear and predictable in STRUCTURE but not content
`;

const EDEXCEL_QUESTION_PRINCIPLES = `# Edexcel GCSE Mathematics (1MA1): Question Construction Principles

${EDEXCEL_ASSESSMENT_OBJECTIVES}

${EDEXCEL_COMMAND_WORDS}

${EDEXCEL_UNIQUE_CONTENT}

You are generating an original GCSE Mathematics question for the Pearson Edexcel 1MA1 specification. The question must be genuinely original and exhibit authentic Edexcel characteristics.

## Edexcel Philosophy

Edexcel emphasises **problem-solving in unfamiliar contexts**. Questions should:
- Test mathematical reasoning, not just procedure recall
- Present mathematics in realistic, applied contexts
- Require interpretation before calculation
- Reward clear, logical working

**Edexcel-Specific Characteristics:**
- 3 papers × 90 minutes × 80 marks = 240 TOTAL MARKS
- Paper 1 is NON-CALCULATOR; Papers 2 & 3 are calculator
- MINIMAL multiple-choice questions (unlike AQA's ~5)
- OPEN SPACE for working (no pre-printed lines)
- Known for MORE COMPLEX, REAL-WORLD problem-solving
- Questions are CLEAR and PREDICTABLE in structure
- Mark schemes can be STRICTER - specific wording sometimes required
- Offers Gold/Silver/Bronze themed practice papers for differentiation

## Edexcel Question Characteristics
- Direct, rigorous, traditional question structure
- Complex real-world applications
- Emphasis on unfamiliar problem-solving situations
- Strong emphasis on "Show your working"
- Diagrams always marked "NOT accurately drawn"
- Mark format uses "(3)" not "[3 marks]"

## Mark Types (Edexcel Conventions)

- **M marks**: Method mark - awarded for correct mathematical process, even with arithmetic errors
- **A marks**: Accuracy mark - given only for correct final answer, typically dependent on preceding M marks
- **B marks**: Unconditional accuracy mark - awarded for specific correct values regardless of method
- **P marks**: Process mark - awarded for correct reasoning as part of problem-solving
- **C marks**: Communication mark - awarded for fully correct mathematical statements

## Mark Scheme Abbreviations

| Code | Meaning | Application |
|------|---------|-------------|
| oe | Or equivalent | Alternative valid forms accepted |
| ft | Follow through | Credit for correct method on earlier error |
| dep | Dependent | Requires previous mark to be awarded |
| cao | Correct answer only | No partial credit |
| awrt | Answer which rounds to | Specified rounding tolerance |
| isw | Ignore subsequent working | Correct answer not penalised by later errors |

## Important Marking Rules

1. **Misread/miscopy**: Genuine copying error loses A/B marks only, not M marks
2. **No working shown**: Correct answers score full marks; incorrect answers score zero
3. **Premature approximation**: Penalised by 1 mark if it causes inaccurate final answer
4. **"Show that" questions**: Answer is given; marks for quality of forward reasoning

## Question Formatting Conventions

### Diagrams
Always include: **"Diagram NOT accurately drawn"**

### Working Requirements
Use phrases like:
- "Show your working clearly"
- "You must show your working"
- "Show that..." (when answer is given)

### Mark Allocation
Show marks at end of each part in PARENTHESES (Edexcel style):
- Single part: "Work out the area of the triangle. (3)"
- Multi-part: "(a) Find the value of x. (2)"
- End with: "(Total for Question X is Y marks)"

### Answer Format
Specify when needed:
- "Give your answer correct to 3 significant figures."
- "Give your answer in the form a√b where a and b are integers."
- "Give your answer as a fraction in its simplest form."

## Multi-Part Question Structure

Edexcel favours connected multi-part questions:
- Part (a): Often "Show that" or find an expression
- Part (b): Use result from (a) - may say "Hence" or "Hence, or otherwise"
- Total marks shown at end: "(Total for Question X is Y marks)"

## Command Words (Edexcel-specific)

| Command | Student Action |
|---------|---------------|
| Work out | Calculate with working shown |
| Calculate | Use calculator, show key steps |
| Find | May involve deduction as well as calculation |
| Write down | No working needed, answer only |
| Show that | Prove the given result; cannot work backwards |
| Explain | Mathematical vocabulary with justification |
| Expand | Remove brackets |
| Expand and simplify | Remove brackets, collect like terms |
| Factorise | Insert brackets by taking common factors |
| Simplify | Reduce to simplest form |
| Solve | Find all values of the unknown |
| Estimate | Round values first, then calculate |`;

const EDEXCEL_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-number': `## Edexcel Number Topic Guidance (from Examiner Reports)

**Percentages (EXAMINER REPORT - Major Weakness Area):**
- Reverse percentage: "Reverse percentage problems is a major weakness"
- Common error: Finding X% and adding/subtracting instead of dividing by multiplier
- Only ~13% of candidates answer reverse percentage questions correctly
- Multiplier method: 1.15 for 15% increase, 0.85 for 15% decrease

**Compound Interest (EXAMINER REPORT - Common Errors):**
- CRITICAL: Many students calculate simple interest instead of compound
- Common error: Using 2 instead of 0.02 (not dividing by 100)
- Formula NOT given in exam - students must memorise
- Watch for monthly vs annual rate confusion

**Accuracy:**
- If asked for X decimal places, must give exactly X (e.g., 2.40 not 2.4)
- Premature rounding penalised by 1 mark`,

  'edexcel-algebra': `## Edexcel Algebra Topic Guidance (from Examiner Reports)

**Factorising (EXAMINER REPORT - Poorly Done):**
- "Only about 25% of candidates factorised correctly"
- "Factorise fully" means COMPLETE factorisation
- x(6x + 10) is NOT fully factorised; 2x(3x + 5) IS
- Difference of two squares: only 25% could factorise correctly

**Quadratic Equations (EXAMINER REPORT):**
- "Less than 25% could factorise a three-term quadratic correctly"
- Non-unitary coefficient of x² causes major problems
- Formula errors are common; one mistake usually means zero marks

**Simultaneous Equations:**
- For quadratic simultaneous: substitute linear INTO quadratic
- Do NOT try to substitute quadratic into linear

**Inequalities (EXAMINER REPORT):**
- CRITICAL: "integer" means give INTEGER answer, not decimal`,

  'edexcel-geometry': `## Edexcel Geometry Topic Guidance (from Examiner Reports)

**CRITICAL: Diagrams must ALWAYS state "Diagram NOT accurately drawn"**

**Angles in Parallel Lines (EXAMINER REPORT):**
- "Do NOT use F, Z and C angles otherwise you will LOSE marks!"
- Must use proper names: "alternate angles", "corresponding angles"
- Must give reasons for EACH step in working

**Circle Theorems (EXAMINER REPORT - Poorly Done):**
- "Only 25% gained all marks for tangent-radius question"
- Must state theorem BY NAME or describe the property
- Alternate segment theorem often wrongly applied

**Trigonometry (EXAMINER REPORT - Major Issues):**
- Many incorrectly assume an angle is 90° and use Pythagoras
- "Candidates confused lengths and angles in calculations"
- Do NOT use sine/cosine rule in right-angled triangles

**Bearings (EXAMINER REPORT):**
- Three-figure bearings: ALWAYS three digits (045° not 45°)
- "Many students found distance instead of bearing"`,

  'edexcel-statistics': `## Edexcel Statistics Topic Guidance (from Examiner Reports)

**EDEXCEL ASSUMED KNOWLEDGE (AQA would explain in question):**
- Stem and leaf diagrams - Edexcel expects students to know these
- Frequency polygons - Edexcel expects students to know these

**Stem and Leaf Diagrams:**
- Extract median by counting leaves
- Back-to-back stem and leaf for comparisons
- Key must be provided (e.g., "3|7 means 37")
- Edexcel tests on BOTH Foundation and Higher

**Frequency Polygons:**
- Plot at MIDPOINT of each class interval
- Connect points with straight lines
- Do NOT extend to axis unless instructed
- Edexcel tests on BOTH Foundation and Higher

**Histograms (EXAMINER REPORT - Problematic):**
- "Students struggle because frequency is NOT on an axis"
- FIRST step: find the scale
- Use formula: Frequency = Frequency Density × Class Width

**Comparing Distributions (EXAMINER REPORT):**
- MUST reference specific statistics from BOTH distributions
- Must compare BOTH average AND spread
- Generic statements like "higher" are INSUFFICIENT

**Scatter Graphs and Correlation (EXAMINER REPORT):**
- SAFEST approach: state correlation type AND describe in context
- Use sentence: "As X increases, Y decreases"`,

  'edexcel-probability': `## Edexcel Probability Topic Guidance (from Examiner Reports)

**EDEXCEL-ONLY CONTENT (NOT in AQA specification):**
- Capture-recapture method (Higher tier only)

**Capture-Recapture Method (Higher - EDEXCEL ONLY):**
- Used to estimate population sizes (e.g., fish in a lake)
- Formula: N = (M × C) ÷ R
  - N = estimated population
  - M = number marked in first sample
  - C = number caught in second sample
  - R = number of recaptured (marked) in second sample
- Assumptions: no deaths/births, marks don't affect behaviour, mixing occurs

**Probability Answers:**
- Accept fraction, decimal (2+ d.p.), or percentage
- If decimal, must be at least 2 decimal places (unless tenths)

**Tree Diagrams (EXAMINER REPORT):**
- WITH replacement: denominator stays the same
- WITHOUT replacement: NOT clearly stated - look for "takes another"
- Multiply along branches (AND), add final outcomes (OR)`,

  'edexcel-ratio': `## Edexcel Ratio, Proportion & Rates Guidance (from Examiner Reports)

**Best Buy (EXAMINER REPORT):**
- Calculate comparable units for BOTH options
- "Conclusion without calculations loses marks"

**General Exam Advice (from Examiner Reports):**
- Do NOT round intermediate values on calculator papers
- Read questions FULLY to ensure answering what is asked
- Money: always whole units OR two decimal places`,
};

// ============================================================================
// EDEXCEL GCSE MATHS WORKED EXAMPLES
// These show exact working patterns for common question types
// ============================================================================

const EDEXCEL_MATHS_WORKED_EXAMPLES = `
## Worked Examples (Edexcel Style - Use These Patterns)

### NUMBER - Percentage Increase/Decrease
**Q:** Increase £240 by 15%. (2)

**Working:**
- Multiplier = 1.15 ✓
- 240 × 1.15 = **£276** ✓

---

### NUMBER - Reverse Percentage (EXAMINER REPORT: Major Weakness)
**Q:** After a 20% increase, the price is £84. Find the original price. (3)

**Working:**
- Multiplier for 20% increase = 1.2 ✓
- Original × 1.2 = 84 ✓
- Original = 84 ÷ 1.2 = **£70** ✓

**Common Error:** 84 - 20% of 84 = 84 - 16.80 = 67.20 ✗ (This finds 80% of new price)

---

### NUMBER - Compound Interest
**Q:** £2000 invested at 3% compound interest per year. Find the value after 4 years. (3)

**Working:**
- Multiplier = 1.03 ✓
- Value = 2000 × 1.03⁴ ✓
- Value = 2000 × 1.1255... = **£2251.02** (to nearest penny) ✓

**Common Error:** 2000 × 1.12 = 2240 ✗ (Simple interest error)

---

### ALGEBRA - Factorising Fully
**Q:** Factorise fully 6x² + 10x (2)

**Working:**
- Common factor = 2x ✓
- 6x² + 10x = **2x(3x + 5)** ✓

**Common Error:** x(6x + 10) ✗ (Not fully factorised)

---

### ALGEBRA - Factorising Quadratics (Non-unitary)
**Q:** Factorise 6x² + x - 12 (2)

**Working:**
- Need factors of 6 × -12 = -72 that sum to 1: (9 and -8) ✓
- 6x² + 9x - 8x - 12
- 3x(2x + 3) - 4(2x + 3)
- **(3x - 4)(2x + 3)** ✓

---

### ALGEBRA - Solving Quadratic Equations
**Q:** Solve x² + 5x - 14 = 0 (3)

**Working:**
- Factorise: (x + 7)(x - 2) = 0 ✓
- x + 7 = 0 or x - 2 = 0 ✓
- **x = -7 or x = 2** ✓

---

### ALGEBRA - Quadratic Formula
**Q:** Solve 2x² + 3x - 7 = 0. Give answers to 2 decimal places. (3)

**Working:**
- a = 2, b = 3, c = -7 ✓
- x = (-3 ± √(9 + 56)) / 4
- x = (-3 ± √65) / 4
- **x = 1.27 or x = -2.77** ✓

---

### ALGEBRA - Simultaneous Equations (Linear)
**Q:** Solve: 3x + 2y = 12 and x - y = 1 (3)

**Working:**
- From (2): x = y + 1 ✓
- Sub into (1): 3(y + 1) + 2y = 12
- 3y + 3 + 2y = 12
- 5y = 9, y = 1.8 ✓
- x = 1.8 + 1 = **x = 2.8, y = 1.8** ✓

---

### GEOMETRY - Pythagoras' Theorem
**Q:** Find the length AC. AB = 8 cm, BC = 6 cm, angle ABC = 90°. (2)

**Working:**
- AC² = AB² + BC² (or AC² = 8² + 6²) ✓
- AC² = 64 + 36 = 100
- **AC = 10 cm** ✓

---

### GEOMETRY - Trigonometry (SOHCAHTOA)
**Q:** Find angle θ. Opposite = 5 cm, Hypotenuse = 13 cm. (2)

**Working:**
- sin θ = O/H = 5/13 ✓
- θ = sin⁻¹(5/13)
- **θ = 22.6°** (1 d.p.) ✓

---

### GEOMETRY - Sine Rule
**Q:** In triangle ABC, angle A = 40°, angle B = 75°, a = 8 cm. Find b. (3)

**Working:**
- a/sin A = b/sin B ✓
- 8/sin 40° = b/sin 75° ✓
- b = 8 × sin 75° / sin 40°
- **b = 12.0 cm** (3 s.f.) ✓

---

### GEOMETRY - Cosine Rule (Finding Side)
**Q:** In triangle ABC, a = 7 cm, b = 9 cm, angle C = 65°. Find c. (3)

**Working:**
- c² = a² + b² - 2ab cos C ✓
- c² = 49 + 81 - 2(7)(9)cos 65° ✓
- c² = 130 - 53.26... = 76.74...
- **c = 8.76 cm** ✓

---

### GEOMETRY - Area of Triangle (½absinC)
**Q:** Find the area of triangle PQR. PQ = 8 cm, QR = 11 cm, angle Q = 52°. (2)

**Working:**
- Area = ½ × a × b × sin C ✓
- Area = ½ × 8 × 11 × sin 52°
- **Area = 34.7 cm²** ✓

---

### GEOMETRY - Circle Theorem Reasons
**Q:** Find angle x, giving a reason. (tangent meets radius at P, angle OPQ = 90°) (2)

**Working:**
- x = 90° ✓
- Reason: **"Tangent meets radius at 90°"** (or "angle between tangent and radius is 90°") ✓

---

### STATISTICS - Mean from Frequency Table
**Q:** Find the mean from: Value: 1,2,3,4,5 | Frequency: 3,5,8,6,3 (3)

**Working:**
- Total frequency = 3+5+8+6+3 = 25 ✓
- Σfx = (1×3)+(2×5)+(3×8)+(4×6)+(5×3) = 3+10+24+24+15 = 76 ✓
- Mean = 76/25 = **3.04** ✓

---

### STATISTICS - Histogram (Frequency Density)
**Q:** The histogram shows waiting times. The 0-10 minute bar has frequency density 1.2. There are 18 people. Find the frequency for 10-30 minutes (fd = 0.6). (2)

**Working:**
- Class width = 30 - 10 = 20 ✓
- Frequency = fd × width = 0.6 × 20 = **12 people** ✓

---

### PROBABILITY - Tree Diagram (Without Replacement)
**Q:** A bag has 5 red and 3 blue balls. Two balls are taken without replacement. Find P(both red). (3)

**Working:**
- P(1st red) = 5/8 ✓
- P(2nd red | 1st red) = 4/7 ✓
- P(both red) = 5/8 × 4/7 = **20/56 = 5/14** ✓

---

### RATIO - Sharing in a Ratio
**Q:** Share £240 in the ratio 3:5 (2)

**Working:**
- Total parts = 3 + 5 = 8 ✓
- One part = 240 ÷ 8 = 30
- 3 parts = 90, 5 parts = 150
- **£90 and £150** ✓

---

### RATIO - Best Buy Comparison
**Q:** Pack A: 400g for £1.20. Pack B: 650g for £1.82. Which is better value? (3)

**Working:**
- Pack A: 1.20 ÷ 400 = 0.3p per gram ✓
- Pack B: 1.82 ÷ 650 = 0.28p per gram ✓
- **Pack B is better value because it costs less per gram** ✓

---

### PROPORTION - Direct Proportion
**Q:** y is directly proportional to x. When x = 4, y = 20. Find y when x = 7. (3)

**Working:**
- y = kx ✓
- 20 = k × 4, so k = 5 ✓
- y = 5 × 7 = **y = 35** ✓

---

### PROPORTION - Inverse Proportion
**Q:** y is inversely proportional to x. When x = 2, y = 12. Find y when x = 8. (3)

**Working:**
- y = k/x ✓
- 12 = k/2, so k = 24 ✓
- y = 24/8 = **y = 3** ✓
`;

const EDEXCEL_MATHS_KEY_FORMULAE = `
## Key Formulae (Some Given in Exam, Some Must Be Recalled)

### Given in Exam (Higher Tier Formula Sheet)
- Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
- Sine rule: a/sin A = b/sin B = c/sin C
- Cosine rule: a² = b² + c² - 2bc cos A
- Area of triangle: Area = ½ab sin C
- Cone volume: V = ⅓πr²h
- Sphere volume: V = ⁴⁄₃πr³
- Sphere surface area: A = 4πr²

### MUST BE RECALLED (Not Given)
- Pythagoras: a² + b² = c²
- Trigonometry: sin θ = O/H, cos θ = A/H, tan θ = O/A
- Circle area: A = πr²
- Circle circumference: C = πd or 2πr
- Cylinder volume: V = πr²h
- Prism volume: V = Area of cross section × length
- Speed = Distance / Time
- Density = Mass / Volume
- Compound interest: Final = Initial × (1 + r/100)ⁿ
- Percentage multipliers: increase by x% → multiply by (1 + x/100)
- Gradient = (y₂ - y₁) / (x₂ - x₁)
- y = mx + c (equation of line)
- Mean = Σx/n or Σfx/Σf
- Probability: P(A) = favourable outcomes / total outcomes
`;

/**
 * Compact prompt for fast Edexcel question generation.
 */
export function getEdexcelCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 1-3): Single-step only, 1-2 marks, like Q1-8. May use multiple choice.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 4-5): 2-3 steps, 3-4 marks, like Q9-16. Standard methods.'
    : 'Final paper (Grades 6-9): Complex multi-step, 5-8 marks, like Q17-25. Extended reasoning, proofs.';

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `
${varietyInstructions}

Generate an Edexcel GCSE Maths question (1MA1 specification). Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## Edexcel Style (CRITICAL)
- Problem-solving focus with realistic context
- Diagrams: ALWAYS include "Diagram NOT accurately drawn"
- Include "Show your working clearly" where appropriate
- Mark allocation at end of parts: e.g., "(3)" not "[3 marks]"
- Multi-part: "(a)... (2)\\n(b)... (3)\\n(Total for Question is 5 marks)"

## Mark Types
- M: Method (correct process, even with arithmetic errors)
- A: Accuracy (correct answer after method)
- B: Independent (correct value without method)
- P: Process (reasoning in problem-solving)

## Abbreviations to use
- oe: or equivalent
- ft: follow through
- dep: dependent on previous mark
- cao: correct answer only

${topicGuidance ? topicGuidance.slice(0, 400) : ''}

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First method mark","A1: Accuracy mark"]}`;
}

/**
 * Enhanced prompt for high-quality Edexcel question generation.
 */
export function getEdexcelEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';
  const varietyInstructions = getRandomVarietyInstructions();

  const difficultyGuidance = difficulty === 'easy'
    ? `**Early Paper Questions (Grades 1-3) - Like Q1-8:**
- Single-step problems ONLY (one calculation or recall)
- "Write down" or "State" command words
- Numbers are simple integers or basic fractions
- No interpretation needed—direct and obvious
- May be multiple choice format
- Very familiar contexts
- 1-2 marks MAXIMUM`
    : difficulty === 'medium'
    ? `**Middle Paper Questions (Grades 4-5) - Like Q9-16:**
- Two to three step problems
- Requires some method selection
- May need to extract info from context
- Standard application of taught methods
- Numbers work out reasonably
- 3-4 marks typical`
    : `**Final Paper Questions (Grades 6-9) - Like Q17-25:**
- Complex multi-step problems requiring extended reasoning
- Minimal scaffolding—student plans approach
- Synthesis of multiple concepts required
- "Show that", "Prove", "Explain why" common
- May have multiple connected parts
- Algebraic reasoning and proof expected
- 5-8 marks typical`;

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${EDEXCEL_MATHS_KEY_FORMULAE}

${EDEXCEL_MATHS_WORKED_EXAMPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL Edexcel GCSE Mathematics (1MA1) question with these specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** Fresh question not found in past papers
2. **EDEXCEL STYLE:** Problem-solving focus, realistic contexts
3. **DIAGRAMS:** If included, state "Diagram NOT accurately drawn"
4. **WORKING:** Include "Show your working" where appropriate
5. **MARKS:** Use Edexcel format "(3)" not "[3 marks]"

## Response Format (JSON)

{
  "content": "Question text with Edexcel formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional diagram spec object - include if question needs a visual>
}

${DIAGRAM_SCHEMA_DOCS}

## Edexcel Formatting Rules

### Question Content:
1. Context/information FIRST
2. Blank line before question parts (\\n\\n)
3. Each part on NEW LINE: (a), (b), (c)
4. Marks at end of each part: (X) not [X marks]
5. If diagram: "Diagram NOT accurately drawn"

Example:
"The diagram shows a triangle ABC.\\nDiagram NOT accurately drawn\\n\\nAB = 8 cm, BC = 6 cm, angle ABC = 90°\\n\\n(a) Work out the length of AC. (2)\\n\\n(b) Work out the area of triangle ABC. (2)\\n\\n(Total for Question is 4 marks)"

### Mark Scheme:
1. One mark per array element
2. Use M1, A1, B1, P1 labels
3. Include "oe" for equivalent answers
4. Include "ft" where follow-through applies
5. Prefix multi-part: "(a) M1:", "(b) A1:"

Generate a genuinely original Edexcel question now:`;
}

/**
 * Multi-part question prompt for Edexcel.
 */
export function getEdexcelMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const difficultyGuidance = getDifficultyGuidance(difficulty);
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';
  const varietyInstructions = getRandomVarietyInstructions();

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part Edexcel GCSE Mathematics (1MA1) question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles

- Part (a) should be achievable independently, often "Show that"
- Part (b) may use result from (a) - say "Hence" or "Hence, or otherwise"
- Total marks: 5-8 for a ${numParts}-part question
- End with: "(Total for Question is X marks)"

## Response Format (JSON)

{
  "content": "Question with parts and Edexcel formatting",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark oe", "(a) A1: mark", "(b) M1: mark ft"]
}

Generate a genuinely original multi-part Edexcel question now:`;
}

/**
 * Multiple choice question prompt for Edexcel GCSE Maths.
 * Edexcel has minimal multiple-choice but they do appear occasionally.
 */
export function getEdexcelMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an Edexcel-style MULTIPLE CHOICE question (1 mark).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty:** ${difficulty === 'easy' ? 'Foundation' : difficulty === 'medium' ? 'Crossover' : 'Higher'}

## Edexcel Multiple Choice Notes

While Edexcel has minimal multiple-choice questions (unlike AQA), when they appear:
- 4 options (A, B, C, D)
- Distractors based on common misconceptions
- May involve calculation or recognition

## Response Format (JSON)

{
  "content": "Question stem\\n\\nA  Option A\\nB  Option B\\nC  Option C\\nD  Option D\\n\\n(1)",
  "marks": 1,
  "solution": "Full working and explanation",
  "markScheme": ["B1: [Correct letter] cao"],
  "correctAnswer": "A/B/C/D"
}

Generate an original Edexcel multiple choice question now:`;
}

/**
 * "Show that" / Proof question prompt for Edexcel GCSE Maths.
 */
export function getEdexcelShowThatPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-5';

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an Edexcel-style "SHOW THAT" or PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## Edexcel "Show That" Characteristics

Edexcel "Show that" questions require:
- Clear forward reasoning towards the given answer
- Each logical step shown explicitly
- Working cannot go backwards from the answer
- Often followed by "Hence" parts using the result

**Algebraic proof (Higher):**
- "Prove that..." requires formal argument
- Variables must be defined
- Common: consecutive integers, odd/even proofs

## Response Format (JSON)

{
  "content": "Context...\\n\\nShow that [result]. (${markRange.split('-')[0]})",
  "marks": ${parseInt(markRange.split('-')[0])},
  "solution": "Step-by-step proof",
  "markScheme": ["M1: First step", "M1: Second step", "A1: Arrives at given result with no errors"]
}

Generate an original Edexcel "show that" question now:`;
}

/**
 * Graph question prompt for Edexcel GCSE Maths.
 */
export function getEdexcelGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-5' : '5-7';

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

${DIAGRAM_SCHEMA_DOCS}

---

## Your Task

Generate an Edexcel-style GRAPH question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## Edexcel Graph Question Types

- Graph plotting and reading coordinates
- Finding and interpreting gradient
- Real-life graphs (distance-time, cost, conversion)
- Sketching curves (quadratic, cubic, reciprocal, exponential)
- Graph transformations (Higher)

Always include: **"Diagram NOT accurately drawn"** for geometric figures

## Response Format (JSON)

{
  "content": "Graph question...\\n\\n(${markRange.split('-')[0]})",
  "marks": ${parseInt(markRange.split('-')[0])},
  "solution": "Step-by-step solution",
  "markScheme": ["M1: Method", "A1: Accuracy"],
  "diagram": { "type": "coordinate", "data": { ... } }
}

Generate an original Edexcel graph question now:`;
}

/**
 * Extended response / Problem solving question prompt for Edexcel GCSE Maths.
 */
export function getEdexcelExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an Edexcel-style EXTENDED RESPONSE / PROBLEM SOLVING question (5-6 marks).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## Edexcel Extended Response Characteristics

These are the longer, contextual problems that appear near the end of papers:
- Rich real-world context
- Multiple steps without scaffolding
- Student must interpret and decide approach
- Answer needs contextual conclusion
- May include "Show your working clearly"

## Response Format (JSON)

{
  "content": "Extended context...\\n\\n[Main question] (5)\\n\\n(Total for Question is 5 marks)",
  "marks": 5,
  "solution": "Complete solution with interpretation",
  "markScheme": ["M1: First approach", "M1: Development", "A1: Intermediate", "M1: Final step", "A1: Conclusion in context"]
}

Generate an original Edexcel extended response question now:`;
}

/**
 * Compare question prompt for Edexcel GCSE Maths.
 */
export function getEdexcelComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_TOPIC_GUIDANCE[topic.id] || '';

  return `${EDEXCEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an Edexcel-style COMPARISON question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Marks:** 2-3

## Edexcel Comparison Requirements

For statistical comparisons:
- Reference BOTH datasets with specific values
- Compare average AND spread
- Use correct terminology
- Relate to context

## Response Format (JSON)

{
  "content": "Data for comparison...\\n\\nCompare [aspect]. (2)",
  "marks": 2,
  "solution": "Model comparison",
  "markScheme": ["B1: Comparison of average with values", "B1: Comparison of spread with values"]
}

Generate an original Edexcel comparison question now:`;
}
