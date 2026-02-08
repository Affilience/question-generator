import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDifficultyGuidance,
  DIAGRAM_SCHEMA_DOCS,
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
 * OCR GCSE Mathematics (J560) Question Generation Prompts.
 * Based on analysis of OCR past papers, mark schemes, and examiner reports.
 *
 * Sources:
 * - https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/
 * - https://www.ocr.org.uk/Images/599710-command-words-specific-mathematical-meaning-poster-web.pdf
 * - OCR examiner reports and mark scheme guidance
 *
 * Key OCR characteristics:
 * - 100 marks per paper (vs 80 for AQA/Edexcel) = more method mark opportunities
 * - Non-calculator paper is Paper 2 (middle), not Paper 1
 * - More analytical, "wordy" questions requiring explanation
 * - Emphasis on understanding principles and reasoning
 * - "Tick box" questions with reasoning prompts
 * - Sentence prompts within answer spaces to scaffold responses
 */

// ============================================================================
// OCR ASSESSMENT OBJECTIVES
// ============================================================================

const OCR_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Mathematics Assessment Objectives

### AO1: Use and Apply Standard Techniques (Foundation: 50%, Higher: 40%)
Students should be able to:
- Accurately recall facts, terminology and definitions
- Use and interpret notation correctly
- Accurately carry out routine procedures
- Accurately carry out set tasks requiring multi-step solutions

**AO1 Question Characteristics:**
- Direct calculation questions
- "Work out", "Calculate", "Find" commands
- Standard procedures with clear method

### AO2: Reason, Interpret and Communicate Mathematically (Foundation: 25%, Higher: 30%)
Students should be able to:
- Make deductions, inferences and draw conclusions
- Construct chains of reasoning to achieve a given result
- Interpret and communicate information accurately
- Present arguments and proofs
- Assess validity of arguments

**AO2 Question Characteristics:**
- "Explain", "Show that", "Prove", "Give a reason" commands
- Questions requiring mathematical justification
- Interpretation of diagrams, graphs, statistical data
- OCR particularly values clear communication in these questions

### AO3: Solve Problems Within Mathematics and Other Contexts (Foundation: 25%, Higher: 30%)
Students should be able to:
- Translate problems into mathematical processes
- Make connections between different parts of mathematics
- Interpret results in context
- Evaluate methods and results

**AO3 Question Characteristics:**
- Unfamiliar contexts
- Multi-step problems requiring strategy selection
- Real-world applications
- OCR aims for authentic contexts relevant to daily life

### Weighting Summary
| Tier | AO1 | AO2 | AO3 |
|------|-----|-----|-----|
| Foundation | 50% | 25% | 25% |
| Higher | 40% | 30% | 30% |
`;

// ============================================================================
// OCR OFFICIAL COMMAND WORDS
// ============================================================================

const OCR_COMMAND_WORDS = `
## OCR GCSE Mathematics Command Words (Official)

### Calculation Commands
| Command | Meaning | Working Required? |
|---------|---------|-------------------|
| **Work out** | Calculate using mathematical methods | Yes - show method |
| **Calculate** | Use mathematical methods with working | Yes - show key steps |
| **Find** | Determine through calculation or deduction | Depends on context |
| **Write down** | Give the answer without calculation | No - direct answer |
| **Estimate** | Round values FIRST, then calculate | Yes - show rounded values |

### Algebraic/Manipulation Commands
| Command | Meaning |
|---------|---------|
| **Expand** | Remove brackets by multiplying out |
| **Simplify** | Make an expression/fraction/ratio as simple as possible |
| **Factorise** | Write as a product of factors |
| **Solve** | Find the value(s) that satisfy the equation |
| **Rearrange** | Change the subject of a formula |
| **Round** | Write values correct to the specified accuracy |

### Reasoning Commands (OCR emphasises these)
| Command | Meaning |
|---------|---------|
| **Show that** | Prove the given result using clear logical steps (cannot work backwards) |
| **Prove** | Provide a formal mathematical argument |
| **Explain** | Give a mathematical explanation using correct vocabulary |
| **Give a reason** | Justify your answer with a mathematical statement |
| **Justify** | Provide evidence (calculation or explanation) to support your answer |

### Diagram/Graph Commands
| Command | Meaning |
|---------|---------|
| **Draw** | Produce an accurate diagram/graph |
| **Construct** | Use compasses and straight edge; show all arcs and lines |
| **Sketch** | Show key features without need for accuracy |
| **Transform** | Carry out the requested transformation |
| **Plot** | Mark points accurately |

### Comparison/Analysis Commands
| Command | Meaning |
|---------|---------|
| **Compare** | Identify and explain similarities and differences |
| **Describe** | State the mathematical features or properties |
| **Interpret** | Explain the meaning in context |

### Special OCR Instructions
| Instruction | Meaning |
|-------------|---------|
| **Hence** | Use the previous result in your working |
| **Hence, or otherwise** | Can use previous result or alternative method |
| **You must show your working** | Method marks available; answer alone insufficient |
| **Give a reason for your answer** | Mathematical justification required |
`;

// ============================================================================
// OCR-SPECIFIC EXAM CHARACTERISTICS
// ============================================================================

const OCR_EXAM_CHARACTERISTICS = `
## OCR-Specific Exam Characteristics

### Paper Structure (Different from AQA/Edexcel!)
- **Paper 1**: Calculator - Foundation OR Higher - 100 marks
- **Paper 2**: NON-CALCULATOR (middle paper!) - Foundation OR Higher - 100 marks
- **Paper 3**: Calculator - Foundation OR Higher - 100 marks
- **TOTAL**: 300 marks (vs 240 for AQA/Edexcel)

**Why 100 marks?** OCR states this allows more scope for awarding method marks and rewarding students for each correct step.

### Question Style (OCR vs Others)
| Feature | OCR Style |
|---------|-----------|
| **Wording** | More analytical, detailed - encourages deeper understanding |
| **Explanations** | OCR particularly values explaining reasoning |
| **Contexts** | Authentic, relevant to daily life |
| **Scaffolding** | Often uses sentence prompts in answer spaces |
| **Tick boxes** | Frequently uses "tick and explain" format |

### Answer Scaffolding Examples
OCR often provides sentence starters to guide responses:
- "The shape is a _______ because _______"
- "Alice is wrong because _______"
- "Yes/No because _______"

### Tick Box with Reasoning
Common OCR format:
"Tick (✓) the correct statement.
□ Statement A
□ Statement B
□ Statement C
Give a reason for your choice. [2]"

### Specification Organisation
OCR organises content into:
- **Initial** - Basic foundation content
- **Foundation** - Additional foundation content
- **Higher** - Higher tier only content
(Similar to AQA's Basic foundation/Additional foundation/Higher structure)
`;

const OCR_QUESTION_PRINCIPLES = `# OCR GCSE Mathematics (J560): Question Construction Principles

${OCR_ASSESSMENT_OBJECTIVES}

${OCR_COMMAND_WORDS}

${OCR_EXAM_CHARACTERISTICS}

You are generating an original GCSE Mathematics question for the OCR J560 specification. The question must be genuinely original and exhibit authentic OCR characteristics.

## OCR Philosophy

OCR emphasises **understanding of mathematical principles** and **explaining reasoning**. Questions should:
- Require students to demonstrate conceptual understanding
- Include prompts for mathematical explanations
- Present problems in analytical, sometimes wordy contexts
- Reward logical thinking and clear communication

**OCR-Specific Characteristics:**
- 3 papers × 90 minutes × 100 marks = 300 TOTAL MARKS (higher than AQA/Edexcel's 240)
- Paper 2 is NON-CALCULATOR (middle paper, unlike AQA/Edexcel Paper 1)
- More marks = MORE METHOD MARK OPPORTUNITIES
- OPEN SPACE for working (like Edexcel)
- MORE ANALYTICAL, WORDY questions requiring explanation
- Uses tick-box questions with SENTENCE PROMPTS to scaffold responses
- Encourages DEEPER UNDERSTANDING and explaining thinking, not just solving
- Has alternative/shadow papers for re-sit preparation

## OCR Distinctive Features

| Aspect | OCR Style |
|--------|-----------|
| Question wording | More analytical, detailed explanations required |
| Answer format | Often includes sentence prompts to scaffold responses |
| Tick boxes | May use tick box format with reasoning component |
| Mark allocation | 100 marks per paper = more method mark opportunities |
| Working space | Open space for working (not lines like AQA) |
| Paper order | Non-calculator is Paper 2 (middle), not Paper 1 |

## Mark Types (OCR Conventions)

- **M marks**: Method mark - awarded for correct mathematical process, even with arithmetic errors
- **A marks**: Accuracy mark - for correct final answer, dependent on preceding M marks
- **B marks**: Independent accuracy mark - for correct value/feature regardless of method
- **E marks**: Explanation mark - for correct mathematical explanation or reasoning
- **U marks**: Units mark - for correct units in answer
- **G marks**: Graph mark - for correct feature on a graph
- **SC marks**: Special case marks - for worthy partial credit

## Mark Scheme Abbreviations

| Code | Meaning | Application |
|------|---------|-------------|
| oe | Or equivalent | Alternative valid forms accepted |
| ft | Follow through | Credit for correct method on earlier error |
| dep | Dependent | Requires previous mark to be awarded |
| cao | Correct answer only | No partial credit |
| isw | Ignore subsequent working | Correct answer not penalised by later errors |
| soi | Seen or implied | Evidence can be from working or answer |
| www | Without wrong working | Full marks only if no incorrect method shown |
| rot | Rounded or truncated | Either form acceptable |
| figs | Figures only | Accept these digits in any arrangement |

## Important OCR Marking Rules

1. **Alternative methods**: Give equivalent marks for equivalent work (bar models, ratio tables accepted)
2. **Contradictory responses**: No mark awarded if contradictory answers given
3. **No working shown**: Correct answers get full marks; incorrect answers get zero
4. **Explaining questions**: Require mathematical vocabulary with justification
5. **"Show that" questions**: Must show logical forward reasoning to given result

## Question Formatting Conventions

### Working Requirements
OCR often uses specific prompts:
- "Explain why..." (requires mathematical reasoning)
- "You must show your working" (method marks available)
- "Give a reason for your answer" (justification required)
- "Show that..." (prove the given result)

### Mark Allocation
Show marks in brackets at end of question:
- Single question: "Work out the area. [3]"
- Multi-part: "(a) Find the value of x. [2]" "(b) Hence find..." [3]"

### Answer Scaffolding
OCR often provides sentence starters:
- "The shape is a _______ because _______"
- "Alice is wrong because _______"

### Tick Box Questions
OCR uses tick box format where students select an answer then explain:
- Tick the correct statement
- Give a reason for your choice

## Multi-Part Question Structure

OCR questions often build in complexity:
- Part (a): Accessible entry point, often calculation
- Part (b): Use or extend result from (a)
- Part (c): Higher-level reasoning or proof (Higher tier)

## Command Words (OCR-specific)

| Command | Student Action |
|---------|---------------|
| Work out | Calculate with working shown |
| Calculate | Use mathematical methods, show key steps |
| Find | Determine through calculation or deduction |
| Write down | No working needed, answer only |
| Show that | Prove the given result with clear reasoning |
| Explain | Give mathematical reasons using vocabulary |
| Give a reason | Justify your answer mathematically |
| Describe | State the mathematical features or process |
| Compare | Identify similarities and differences |
| Estimate | Round first, then calculate |`;

const OCR_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-number': `## OCR Number Topic Guidance (from Examiner Reports)

**Percentages (Common Errors):**
- Reverse percentage: Students often add/subtract percentage instead of using multiplier
- Compound interest: Confusing with simple interest is very common
- Students must show understanding of the multiplicative nature of percentages

**Standard Form (Examiner Report):**
- Many students struggle with calculations in standard form
- Common error: Not maintaining standard form format in answers
- Addition/subtraction requires same power of 10

**Bounds and Accuracy (H):**
- Students often confuse upper and lower bounds
- Must understand error intervals from rounding vs truncation
- Calculations with bounds: maximum uses upper/lower strategically

**Estimation Questions:**
- OCR expects clear rounding shown before calculation
- Must round to 1 significant figure unless otherwise stated
- Common error: Calculating exactly then rounding answer`,

  'ocr-algebra': `## OCR Algebra Topic Guidance (from Examiner Reports)

**Factorising (Common Weakness):**
- "Factorise fully" requires COMPLETE factorisation
- Difference of two squares often missed
- Non-unitary coefficient quadratics cause major problems
- Students must check by expanding

**Simultaneous Equations:**
- OCR questions often require forming equations from context
- Graphical solutions: intersection point must be clearly identified
- For quadratic simultaneous: substitute linear into quadratic

**Sequences:**
- nth term questions: many students write term-to-term rule instead
- Quadratic sequences (H): must recognise second difference pattern
- Geometric sequences (H): common ratio must be identified

**Graphs:**
- Real-life graph interpretation is heavily tested
- Gradient as rate of change requires contextual understanding
- Area under velocity-time graph = distance (H)`,

  'ocr-geometry': `## OCR Geometry Topic Guidance (from Examiner Reports)

**Angles:**
- Must give geometric REASONS, not just calculations
- Use correct vocabulary: "alternate angles", "corresponding angles"
- Circle theorems (H): must state theorem name or describe property

**Transformations (Major Issue):**
- Enlargement: students often confuse stretch/shear with enlargement
- Centre of enlargement must be identified for full marks
- Describing transformations: must include all required elements

**Pythagoras and Trigonometry:**
- Don't assume 90° - check if it's stated or shown
- Choose correct ratio (SOHCAHTOA) - many students use wrong one
- 3D problems (H): identify the right-angled triangle first

**Bearings:**
- Must be three-figure (045° not 45°)
- Common error: finding distance instead of bearing
- Diagram interpretation is critical

**Units:**
- Common error: wrong units (cm vs cm² vs cm³)
- Conversion between units often poorly done`,

  'ocr-statistics': `## OCR Statistics Topic Guidance (from Examiner Reports)

**Averages:**
- Mean from grouped data: use MIDPOINTS
- Estimated mean: stress this is an ESTIMATE in explanations
- Comparing distributions: must compare average AND spread

**Data Representation:**
- Histograms (H): frequency = frequency density × class width
- First step: always find the scale on frequency density axis
- Cumulative frequency: plot at UPPER boundary
- Box plots: must show median, quartiles correctly

**Stem and Leaf:**
- OCR tests this on both Foundation and Higher
- Key must be given (e.g., "3|7 means 37")
- Finding median: count leaves carefully

**Correlation:**
- Must describe in context, not just state "positive/negative"
- Lines of best fit should pass through mean point
- Extrapolation: acknowledge it may be unreliable`,

  'ocr-probability': `## OCR Probability Topic Guidance (from Examiner Reports)

**Probability Basics:**
- Answers accepted as fraction, decimal (2+ d.p.), or percentage
- Sum of probabilities must equal 1
- "Not happening" = 1 - P(happening)

**Tree Diagrams:**
- Label ALL branches with probabilities
- Multiply along branches (AND)
- Add final probabilities (OR)
- Without replacement: denominator decreases

**Combined Events:**
- Sample space diagrams: systematic listing required
- Two-way tables: careful reading of row/column totals
- Venn diagrams: understand intersection and union

**Conditional Probability (H):**
- Read questions carefully for dependent events
- Use tree diagrams or two-way tables
- Formula: P(A|B) = P(A and B) / P(B)`,

  'ocr-ratio': `## OCR Ratio, Proportion & Rates Guidance (from Examiner Reports)

**Ratio Problems:**
- Dividing in a ratio: common to divide by wrong number
- Given difference: work out value of "1 part" first
- Link to fractions: ratio 2:3 means fractions 2/5 and 3/5

**Best Buy:**
- Must compare like-for-like (price per unit OR quantity per pound)
- Show calculations for BOTH options
- State conclusion clearly

**Compound Measures:**
- Speed, density, pressure: know all three formulae
- Units must be consistent
- Multi-step problems: work systematically

**Proportion Equations (H):**
- Direct: y = kx (find k first)
- Inverse: y = k/x
- Recognise from tables and graphs`,
};

// ============================================================================
// OCR GCSE MATHS WORKED EXAMPLES
// These show exact working patterns for common question types
// ============================================================================

const OCR_MATHS_WORKED_EXAMPLES = `
## Worked Examples (OCR Style - Use These Patterns)

### NUMBER - Percentage Change
**Q:** A shop reduces all prices by 15%. The original price was £80. Work out the sale price. [2]

**Working:**
- Sale price = 80 × 0.85 ✓
- Sale price = **£68** ✓

---

### NUMBER - Reverse Percentage
**Q:** After a 20% reduction, a jacket costs £56. Work out the original price. [3]

**Working:**
- 100% - 20% = 80% ✓
- 80% = £56
- 1% = 56 ÷ 80 = 0.70
- 100% = 0.70 × 100 = **£70** ✓

OR using multiplier:
- Multiplier = 0.8 ✓
- Original × 0.8 = 56
- Original = 56 ÷ 0.8 = **£70** ✓

---

### NUMBER - Compound Interest
**Q:** £3000 is invested at 2.5% compound interest per year. Work out the value after 3 years. [3]

**Working:**
- Multiplier = 1.025 ✓
- Value = 3000 × 1.025³ ✓
- Value = 3000 × 1.0769... = **£3230.67** ✓

---

### NUMBER - Standard Form
**Q:** Work out (3.2 × 10⁵) × (4 × 10³). Give your answer in standard form. [2]

**Working:**
- Multiply numbers: 3.2 × 4 = 12.8 ✓
- Add powers: 10⁵ × 10³ = 10⁸
- Convert: 12.8 × 10⁸ = **1.28 × 10⁹** ✓

---

### ALGEBRA - Expanding Double Brackets
**Q:** Expand and simplify (x + 4)(x - 7) [2]

**Working:**
- x² - 7x + 4x - 28 ✓
- **x² - 3x - 28** ✓

---

### ALGEBRA - Factorising Quadratics
**Q:** Factorise x² - 5x - 24 [2]

**Working:**
- Find factors of -24 that sum to -5: -8 and +3 ✓
- **(x - 8)(x + 3)** ✓

---

### ALGEBRA - Solving Quadratic (Factorising)
**Q:** Solve x² + 2x - 15 = 0 [3]

**Working:**
- Factorise: (x + 5)(x - 3) = 0 ✓
- x + 5 = 0 or x - 3 = 0 ✓
- **x = -5 or x = 3** ✓

---

### ALGEBRA - Quadratic Formula
**Q:** Solve 3x² + 7x - 2 = 0. Give answers to 2 decimal places. [3]

**Working:**
- x = (-7 ± √(49 + 24)) / 6 ✓
- x = (-7 ± √73) / 6 ✓
- **x = 0.26 or x = -2.59** ✓

---

### ALGEBRA - Simultaneous Equations
**Q:** Solve: 2x + 3y = 11 and 4x - y = 9 [4]

**Working:**
- Multiply equation (1) by 2: 4x + 6y = 22 ✓
- Subtract: (4x + 6y) - (4x - y) = 22 - 9
- 7y = 13, y = 13/7 ✓
- Sub back: 4x - 13/7 = 9
- x = (9 + 13/7) / 4 = **x = 76/28 = 19/7, y = 13/7** ✓

---

### ALGEBRA - nth Term
**Q:** Find the nth term of the sequence 5, 8, 11, 14, ... [2]

**Working:**
- Common difference = 3 ✓
- nth term = 3n + c
- When n = 1: 3(1) + c = 5, so c = 2
- **nth term = 3n + 2** ✓

---

### GEOMETRY - Pythagoras
**Q:** In triangle ABC, angle B = 90°, AB = 5 cm, BC = 12 cm. Find AC. [2]

**Working:**
- AC² = AB² + BC² = 25 + 144 = 169 ✓
- **AC = 13 cm** ✓

---

### GEOMETRY - Trigonometry (Finding Side)
**Q:** In triangle PQR, angle P = 35°, PR = 10 cm, angle R = 90°. Find QR. [3]

**Working:**
- tan 35° = QR/10 (opposite/adjacent) ✓
- QR = 10 × tan 35° ✓
- **QR = 7.00 cm** (3 s.f.) ✓

---

### GEOMETRY - Trigonometry (Finding Angle)
**Q:** In right-angled triangle, opposite = 8 cm, adjacent = 15 cm. Find the angle. [2]

**Working:**
- tan θ = 8/15 ✓
- θ = tan⁻¹(8/15) = **28.1°** ✓

---

### GEOMETRY - Sine Rule
**Q:** In triangle ABC, angle A = 48°, angle B = 63°, AB = 15 cm. Find AC. [3]

**Working:**
- Angle C = 180° - 48° - 63° = 69° ✓
- AC/sin B = AB/sin C
- AC/sin 63° = 15/sin 69° ✓
- AC = 15 × sin 63°/sin 69° = **14.3 cm** ✓

---

### GEOMETRY - Cosine Rule (Finding Side)
**Q:** In triangle PQR, PQ = 8 cm, PR = 11 cm, angle P = 54°. Find QR. [3]

**Working:**
- QR² = 8² + 11² - 2(8)(11)cos 54° ✓
- QR² = 64 + 121 - 103.5 = 81.5 ✓
- **QR = 9.03 cm** ✓

---

### GEOMETRY - Area Using Sine
**Q:** Find the area of triangle with sides 7 cm and 9 cm, included angle 72°. [2]

**Working:**
- Area = ½ × 7 × 9 × sin 72° ✓
- **Area = 29.9 cm²** ✓

---

### GEOMETRY - Angles with Reasons
**Q:** Find angle x. Give a reason. (Parallel lines with transversal, x and 65° are alternate) [2]

**Working:**
- x = 65° ✓
- Reason: **"Alternate angles are equal"** (or "alternate angles between parallel lines") ✓

---

### STATISTICS - Mean from Frequency Table
**Q:** Find the mean. Score: 1,2,3,4 | Frequency: 4,7,5,4 [3]

**Working:**
- Σf = 4+7+5+4 = 20 ✓
- Σfx = (1×4)+(2×7)+(3×5)+(4×4) = 4+14+15+16 = 49 ✓
- Mean = 49/20 = **2.45** ✓

---

### STATISTICS - Histogram Reading
**Q:** The histogram shows times. Class 10-20 has frequency density 1.5 and width 10. Find the frequency. [2]

**Working:**
- Frequency = fd × width ✓
- Frequency = 1.5 × 10 = **15** ✓

---

### PROBABILITY - Tree Diagram (Replacement)
**Q:** A bag has 4 red and 6 blue. Two balls taken with replacement. P(both same colour)? [3]

**Working:**
- P(RR) = 4/10 × 4/10 = 16/100 ✓
- P(BB) = 6/10 × 6/10 = 36/100 ✓
- P(same) = 16/100 + 36/100 = **52/100 = 13/25** ✓

---

### PROBABILITY - Without Replacement
**Q:** 5 red, 3 blue balls. Two taken without replacement. P(one of each colour)? [4]

**Working:**
- P(RB) = 5/8 × 3/7 = 15/56 ✓
- P(BR) = 3/8 × 5/7 = 15/56 ✓
- P(one of each) = 15/56 + 15/56 = **30/56 = 15/28** ✓

---

### RATIO - Sharing
**Q:** Share £450 in the ratio 2:3:4 [3]

**Working:**
- Total parts = 2 + 3 + 4 = 9 ✓
- One part = 450 ÷ 9 = 50 ✓
- **£100, £150, £200** ✓

---

### RATIO - Best Buy
**Q:** Which is better value? 500ml for £1.80 or 750ml for £2.55? [3]

**Working:**
- 500ml: 1.80 ÷ 500 = 0.36p per ml ✓
- 750ml: 2.55 ÷ 750 = 0.34p per ml ✓
- **750ml is better value** (lower price per ml) ✓

---

### PROPORTION - Direct
**Q:** y is proportional to x. When x = 5, y = 35. Find y when x = 8. [3]

**Working:**
- y = kx, so 35 = 5k, k = 7 ✓
- y = 7x ✓
- y = 7 × 8 = **y = 56** ✓

---

### PROPORTION - Inverse
**Q:** y is inversely proportional to x. When x = 4, y = 15. Find y when x = 10. [3]

**Working:**
- y = k/x, so 15 = k/4, k = 60 ✓
- y = 60/x ✓
- y = 60/10 = **y = 6** ✓
`;

const OCR_MATHS_KEY_FORMULAE = `
## Key Formulae (OCR - Same as Edexcel/AQA)

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
 * Compact prompt for fast OCR question generation.
 */
export function getOCRCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 1-3): Single-step only, 1-2 marks, like Q1-8. May use multiple choice.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 4-5): 2-3 steps, 3-4 marks, like Q9-16. Standard methods.'
    : 'Final paper (Grades 6-9): Complex multi-step, 5-8 marks, like Q17-25. Extended reasoning, proofs.';

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `
${varietyInstructions}

Generate an OCR GCSE Maths question (J560 specification). Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## OCR Style (CRITICAL)
- Analytical, sometimes wordy questions requiring understanding
- May include "Explain why..." or "Give a reason..." prompts
- Mark allocation at end: e.g., "[3]" in square brackets
- Multi-part: "(a)... [2]  (b)... [3]"
- Can include tick box format with reasoning component

## Mark Scheme Format (CRITICAL - MUST FOLLOW)
- ALWAYS use M1/A1/B1/E1 notation - never plain text bullet points
- M1: Method mark (correct process, even with arithmetic errors)
- A1: Accuracy mark (correct answer following method) - MUST have M1 before A1
- B1: Independent mark (correct value without needing method shown)
- E1: Explanation mark (mathematical reasoning stated)

## Mark Scheme Rules
- Calculation questions MUST have at least M1 (method) + A1 (accuracy)
- Multi-part questions: prefix with "(a) M1:", "(b) A1:" etc.
- Include "oe" (or equivalent), "ft" (follow through) where appropriate
- Match number of marks to mark scheme entries

${topicGuidance ? topicGuidance.slice(0, 400) : ''}

Return this exact JSON structure (markScheme MUST use M1/A1/B1/E1 format):
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: Correct method shown","A1: Correct final answer"]}`;
}

/**
 * Enhanced prompt for high-quality OCR question generation.
 */
export function getOCREnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';
  const varietyInstructions = getRandomVarietyInstructions();

  const difficultyGuidance = difficulty === 'easy'
    ? `**Early Paper Questions (Grades 1-3) - Like Q1-8:**
- Single-step problems ONLY (one calculation or recall)
- "Write down" or "State" command words
- Numbers are simple integers or basic fractions
- No interpretation needed—direct and obvious
- May be multiple choice or tick-box format
- Very familiar contexts
- 1-2 marks MAXIMUM`
    : difficulty === 'medium'
    ? `**Middle Paper Questions (Grades 4-5) - Like Q9-16:**
- Two to three step problems
- Requires some method selection
- May need to extract info from context
- May require brief explanation of method
- Standard application of taught methods
- 3-4 marks typical`
    : `**Final Paper Questions (Grades 6-9) - Like Q17-25:**
- Complex analytical problems requiring extended reasoning
- Minimal scaffolding—student plans approach
- Synthesis of multiple concepts required
- "Explain why", "Show that", "Prove" common
- May have multiple connected parts
- Reasoning and proof expected
- 5-8 marks typical`;

  return `${OCR_QUESTION_PRINCIPLES}

${OCR_MATHS_KEY_FORMULAE}

${OCR_MATHS_WORKED_EXAMPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL OCR GCSE Mathematics (J560) question with these specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** Fresh question not found in past papers
2. **OCR STYLE:** Analytical, may require explanation/reasoning
3. **SCAFFOLDING:** Consider sentence prompts for explanation questions
4. **MARKS:** Use OCR format "[3]" in square brackets

## Response Format (JSON)

{
  "content": "Question text with OCR formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional diagram spec object - include if question needs a visual>
}

${DIAGRAM_SCHEMA_DOCS}

## OCR Formatting Rules

### Question Content:
1. Context clearly stated at the start
2. Working prompts where appropriate: "You must show your working"
3. Explanation prompts: "Give a reason for your answer"
4. Marks at end of each part: [X] in square brackets
5. For tick box: "Tick (✓) the correct answer. Give a reason for your choice."

Example:
"Tom says that 0.35 is greater than 0.4\\\\nTom is wrong.\\\\n\\\\nExplain why. [2]"

Example multi-part:
"Here is a sequence: 3, 7, 11, 15, ...\\\\n\\\\n(a) Find the next term in the sequence. [1]\\\\n\\\\n(b) Find the nth term of this sequence. [2]\\\\n\\\\n(c) Is 103 a term in this sequence? You must show your working. [2]"

### Mark Scheme:
1. One mark per array element
2. Use M1, A1, B1, E1 labels appropriately
3. Include "oe" for equivalent answers
4. Include "ft" where follow-through applies
5. For explanation marks: specify what reasoning is required

Generate a genuinely original OCR question now:`;
}

/**
 * Multi-part question prompt for OCR.
 */
export function getOCRMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const difficultyGuidance = getDifficultyGuidance(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';
  const varietyInstructions = getRandomVarietyInstructions();

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part OCR GCSE Mathematics (J560) question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles

- Part (a) should be accessible and build confidence
- Part (b) may extend or apply result from (a)
- Part (c) often requires higher-level reasoning (Higher tier)
- Include "Hence" or "Hence, or otherwise" to connect parts
- Total marks: 5-8 for a ${numParts}-part question

## Response Format (JSON)

{
  "content": "Question with parts and OCR formatting",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark oe", "(a) A1: mark", "(b) M1: mark ft"]
}

Generate a genuinely original multi-part OCR question now:`;
}

/**
 * Multiple choice question prompt for OCR GCSE Maths.
 * OCR GCSE Maths does include some multiple-choice style questions.
 */
export function getOCRMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an OCR-style MULTIPLE CHOICE question (1 mark).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty:** ${difficulty === 'easy' ? 'Foundation' : difficulty === 'medium' ? 'Crossover' : 'Higher'}

## OCR Multiple Choice Notes

- 4 options (A, B, C, D)
- Distractors based on common misconceptions
- OCR emphasises understanding over recall

## Response Format (JSON)

{
  "content": "Question stem\\n\\nA  Option A\\nB  Option B\\nC  Option C\\nD  Option D\\n\\n[1]",
  "marks": 1,
  "solution": "Full working and explanation",
  "markScheme": ["B1: [Correct letter]"],
  "correctAnswer": "A/B/C/D"
}

Generate an original OCR multiple choice question now:`;
}

/**
 * "Show that" / Proof question prompt for OCR GCSE Maths.
 * OCR particularly values logical reasoning and proof skills.
 */
export function getOCRShowThatPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-6';

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an OCR-style "SHOW THAT" or PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## OCR "Show That" and Proof Characteristics

OCR particularly values logical structure and analytical reasoning:
- Clear, step-by-step progression required
- Each logical step must be justified
- Cannot work backwards from given answer
- Variables must be clearly defined

**OCR mark scheme conventions:**
- E1 marks for explanation/reasoning
- Communication marks for quality of argument
- "oe" for or equivalent accepted

## Response Format (JSON)

{
  "content": "Context...\\n\\nShow that [result]. [${markRange.split('-')[0]}]",
  "marks": ${parseInt(markRange.split('-')[0])},
  "solution": "Step-by-step proof with clear reasoning",
  "markScheme": ["M1: First logical step", "M1: Second step", "A1: Correct conclusion"]
}

Generate an original OCR "show that" question now:`;
}

/**
 * Graph question prompt for OCR GCSE Maths.
 */
export function getOCRGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-5' : '5-7';

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

${DIAGRAM_SCHEMA_DOCS}

---

## Your Task

Generate an OCR-style GRAPH question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## OCR Graph Question Types

- Reading and plotting coordinates
- Gradient interpretation (rate of change in context)
- Real-world graph interpretation
- Sketching standard curves
- Graph transformations (Higher)

OCR emphasises interpretation and explanation of graphical features.

## Response Format (JSON)

{
  "content": "Graph question...\\n\\n[${markRange.split('-')[0]}]",
  "marks": ${parseInt(markRange.split('-')[0])},
  "solution": "Step-by-step solution with interpretation",
  "markScheme": ["M1: Method", "A1: Accuracy", "E1: Explanation"],
  "diagram": { "type": "coordinate", "data": { ... } }
}

Generate an original OCR graph question now:`;
}

/**
 * Extended response question prompt for OCR GCSE Maths.
 * OCR is known for wordy, analytical questions.
 */
export function getOCRExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an OCR-style EXTENDED RESPONSE question (5-6 marks).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## OCR Extended Response Characteristics

OCR is known for MORE ANALYTICAL, WORDY questions:
- Require explanation and reasoning
- Multiple approaches often possible
- Context needs interpretation
- Answer must be justified
- Quality of mathematical communication assessed

## Response Format (JSON)

{
  "content": "Extended context with analytical requirements...\\n\\n[Question] [5]",
  "marks": 5,
  "solution": "Complete solution with reasoning throughout",
  "markScheme": ["M1: Approach", "M1: Development", "A1: Intermediate", "M1: Continuation", "A1: Final answer with justification"]
}

Generate an original OCR extended response question now:`;
}

/**
 * Compare question prompt for OCR GCSE Maths.
 */
export function getOCRComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `${OCR_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an OCR-style COMPARISON question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Marks:** 2-3

## OCR Comparison Requirements

OCR values analytical comparison:
- Specific numerical evidence required
- Compare BOTH average AND spread (for stats)
- Use correct terminology
- Relate findings to context
- Explain the significance of differences

## Response Format (JSON)

{
  "content": "Data for comparison...\\n\\nCompare [aspect]. [2]",
  "marks": 2,
  "solution": "Model comparison with specific values and context",
  "markScheme": ["E1: Comparison of average with values", "E1: Comparison of spread with interpretation"]
}

Generate an original OCR comparison question now:`;
}
