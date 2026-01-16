import { Difficulty, Topic } from '@/types';
import {
  getVarietyParameters,
  getVarietyInstructions,
  getDifficultyGuidance,
  getMarkRangeForDifficulty,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';

// ============================================================================
// COMPLETE AQA GCSE MATHS REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const AQA_MATHS_FORMULA_SHEET = `
## GCSE Maths Formula Sheet (PROVIDED IN EXAM)

### Area Formulas
| Shape | Formula |
|-------|---------|
| Rectangle | A = l × w |
| Triangle | A = ½ × b × h |
| Parallelogram | A = b × h |
| Trapezium | A = ½(a + b) × h |
| Circle | A = πr² |

### Volume Formulas
| Shape | Formula |
|-------|---------|
| Cuboid | V = l × w × h |
| Prism | V = Area of cross-section × length |
| Cylinder | V = πr²h |
| Sphere | V = (4/3)πr³ |
| Cone | V = (1/3)πr²h |
| Pyramid | V = (1/3) × base area × h |

### Surface Area
| Shape | Formula |
|-------|---------|
| Sphere | SA = 4πr² |
| Cone (curved) | SA = πrl (l = slant height) |

### Trigonometry
| Formula | Use |
|---------|-----|
| sin θ = opp/hyp | Right-angled triangles |
| cos θ = adj/hyp | Right-angled triangles |
| tan θ = opp/adj | Right-angled triangles |
| a/sin A = b/sin B = c/sin C | Sine rule (any triangle) |
| a² = b² + c² - 2bc cos A | Cosine rule (any triangle) |
| Area = ½ab sin C | Area of any triangle |

### Quadratic Formula
x = (-b ± √(b² - 4ac)) / 2a

### Compound Interest
Total = P × (1 + r/100)ⁿ

### Pythagoras' Theorem
a² + b² = c² (c is hypotenuse)
`;

const AQA_MATHS_KEY_VALUES = `
## Key Mathematical Values (MUST KNOW)

### π (Pi)
- Exact: π
- Approximate: 3.14159... or use calculator
- Common: 3.14 or 22/7 for estimates

### Exact Trigonometric Values (MUST MEMORISE)
| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | 1/√3 = √3/3 |
| 45° | √2/2 = 1/√2 | √2/2 = 1/√2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | undefined |

### Square Numbers (1-15)
1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225

### Cube Numbers (1-10)
1, 8, 27, 64, 125, 216, 343, 512, 729, 1000

### Prime Numbers (1-50)
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47

### Powers of 2
2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024

### Fraction-Decimal-Percentage Equivalents
| Fraction | Decimal | Percentage |
|----------|---------|------------|
| 1/2 | 0.5 | 50% |
| 1/4 | 0.25 | 25% |
| 3/4 | 0.75 | 75% |
| 1/5 | 0.2 | 20% |
| 1/3 | 0.333... | 33.3...% |
| 2/3 | 0.666... | 66.6...% |
| 1/8 | 0.125 | 12.5% |
| 1/10 | 0.1 | 10% |

### Unit Conversions
| From | To | Multiply by |
|------|-----|-------------|
| km | m | × 1000 |
| m | cm | × 100 |
| cm | mm | × 10 |
| kg | g | × 1000 |
| litres | ml | × 1000 |
| m² | cm² | × 10,000 |
| m³ | cm³ | × 1,000,000 |
| hours | minutes | × 60 |
| minutes | seconds | × 60 |
`;

const AQA_MATHS_WORKED_EXAMPLES = `
## Worked Examples by Topic

### NUMBER - Percentage Change
**Q:** A coat costs £80. It is reduced by 15% in a sale. Calculate the sale price. [2 marks]

**Solution:**
- Method 1: 15% of £80 = 0.15 × 80 = £12, Sale price = £80 - £12 = **£68** ✓
- Method 2 (multiplier): £80 × 0.85 = **£68** ✓

---

### NUMBER - Reverse Percentage
**Q:** After a 20% increase, a price is £72. Find the original price. [3 marks]

**Solution:**
- £72 represents 120% (100% + 20%)
- 1% = £72 ÷ 120 = £0.60
- 100% = £0.60 × 100 = **£60** ✓

---

### NUMBER - Compound Interest
**Q:** £2000 is invested at 3% compound interest per year. Calculate the value after 4 years. [3 marks]

**Solution:**
- Total = P × (1 + r/100)ⁿ
- Total = 2000 × (1.03)⁴
- Total = 2000 × 1.1255...
- **Total = £2251.02** (to nearest penny) ✓

---

### ALGEBRA - Solving Quadratic
**Q:** Solve x² + 5x - 14 = 0 [3 marks]

**Solution:**
- Factorise: (x + 7)(x - 2) = 0
- x + 7 = 0 or x - 2 = 0
- **x = -7 or x = 2** ✓

---

### ALGEBRA - Quadratic Formula
**Q:** Solve 2x² + 3x - 7 = 0. Give answers to 2 decimal places. [3 marks]

**Solution:**
- a = 2, b = 3, c = -7
- x = (-3 ± √(9 + 56)) / 4
- x = (-3 ± √65) / 4
- x = (-3 + 8.062) / 4 = 1.27 or x = (-3 - 8.062) / 4 = -2.77
- **x = 1.27 or x = -2.77** ✓

---

### ALGEBRA - Simultaneous Equations
**Q:** Solve: 3x + 2y = 12 and x - y = 1 [4 marks]

**Solution:**
- From equation 2: x = y + 1
- Substitute into equation 1: 3(y + 1) + 2y = 12
- 3y + 3 + 2y = 12
- 5y = 9, y = 1.8
- x = 1.8 + 1 = 2.8
- **x = 2.8, y = 1.8** ✓

---

### GEOMETRY - Pythagoras
**Q:** A right-angled triangle has legs of 5 cm and 12 cm. Find the hypotenuse. [2 marks]

**Solution:**
- c² = a² + b²
- c² = 5² + 12² = 25 + 144 = 169
- c = √169 = **13 cm** ✓

---

### GEOMETRY - Trigonometry (SOHCAHTOA)
**Q:** In a right-angled triangle, the opposite side is 8 cm and the hypotenuse is 17 cm. Find angle θ. [2 marks]

**Solution:**
- sin θ = opp/hyp = 8/17
- θ = sin⁻¹(8/17)
- **θ = 28.1°** (1 d.p.) ✓

---

### GEOMETRY - Circle Theorems
**Q:** A tangent meets a radius at point P on a circle. The angle between the tangent and a chord PQ is 55°. Find angle POQ at the centre. [2 marks]

**Solution:**
- Angle between tangent and radius = 90°
- Angle OPQ = 90° - 55° = 35°
- Triangle OPQ is isosceles (OP = OQ = radius)
- Angle OQP = 35°
- Angle POQ = 180° - 35° - 35° = **110°** ✓

---

### GEOMETRY - Area of Triangle (Sine Rule)
**Q:** Find the area of triangle ABC where AB = 8 cm, AC = 6 cm, and angle A = 50°. [2 marks]

**Solution:**
- Area = ½ × a × b × sin C
- Area = ½ × 8 × 6 × sin 50°
- Area = 24 × 0.766...
- **Area = 18.4 cm²** (3 s.f.) ✓

---

### STATISTICS - Mean from Frequency Table
**Q:** Calculate the mean from this data:
| Score | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|
| Frequency | 3 | 7 | 12 | 5 | 3 |
[3 marks]

**Solution:**
- Total frequency = 3 + 7 + 12 + 5 + 3 = 30
- Σfx = (1×3) + (2×7) + (3×12) + (4×5) + (5×3) = 3 + 14 + 36 + 20 + 15 = 88
- Mean = 88 ÷ 30 = **2.93** (3 s.f.) ✓

---

### PROBABILITY - Tree Diagrams
**Q:** A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement. Find P(both red). [3 marks]

**Solution:**
- P(1st red) = 3/8
- P(2nd red | 1st red) = 2/7
- P(both red) = 3/8 × 2/7 = 6/56 = **3/28** ✓

---

### RATIO - Sharing in a Ratio
**Q:** Share £240 in the ratio 3:5 [2 marks]

**Solution:**
- Total parts = 3 + 5 = 8
- One part = £240 ÷ 8 = £30
- First share = 3 × £30 = £90
- Second share = 5 × £30 = £150
- **£90 and £150** ✓
`;

// ============================================================================
// AQA GCSE MATHS COMMAND WORDS (OFFICIAL AQA DEFINITIONS)
// From: https://www.aqa.org.uk/resources/mathematics/gcse/mathematics-8300/teach/command-words
// ============================================================================

const AQA_COMMAND_WORDS = `
## AQA GCSE Mathematics Official Command Words

### Calculation Commands
| Command | Meaning | Marks | Working Required? |
|---------|---------|-------|-------------------|
| **Work out** | Calculate using mathematical processes | 2+ | Yes, show method |
| **Calculate** | Use a calculator and show working | 2+ | Yes, show method |
| **Write down** | Answer obtainable without calculation | 1 | No |
| **Find** | May involve deduction, not just calculation | 1-3 | Depends on context |
| **Estimate** | Round FIRST (usually to 1 s.f.), then calculate | 2-3 | Yes, show rounded values |

### Algebraic Commands
| Command | Meaning | Notes |
|---------|---------|-------|
| **Simplify (fully)** | Reduce completely | "Fully" means multiple steps may be needed |
| **Factorise (fully)** | Extract factors | "Fully" requires complete factorisation |
| **Expand and simplify** | Multiply out brackets, collect like terms | |
| **Solve** | Find ALL values satisfying the equation | State all solutions |
| **Make x the subject** | Rearrange so x is isolated | |
| **Multiply out** | Remove brackets | May also say "and simplify" |
| **Express...as** | Convert between forms (Higher) | e.g., fractions, standard form |

### Reasoning Commands
| Command | Meaning | Notes |
|---------|---------|-------|
| **Show that** | Answer is PROVIDED; prove it's correct | Cannot work backwards; show ALL steps |
| **Prove** | Formal mathematical argument | Define variables; each step justified |
| **Explain** | Mathematical vocabulary required | "Because" needs justification |
| **Give reasons** | Name theorems/properties explicitly | |
| **Verify** | Check by substitution or calculation | |

### Diagram/Graph Commands
| Command | Meaning | Notes |
|---------|---------|-------|
| **Draw** | Accurate depiction required | Use appropriate tools |
| **Sketch** | Show important features | Precision not required |
| **Construct** | Use compasses/ruler only | All arcs must be shown |
| **Plot** | Mark points with crosses | |
| **Label** | Identify regions, lengths, axis labels | |
| **Shade** | Indicate regions by colouring | |

### Transformation Commands (MUST include ALL components)
| Transformation | Required Information |
|---------------|---------------------|
| **Reflection** | Type + equation of line |
| **Rotation** | Type + centre + angle + direction |
| **Translation** | Type + column vector |
| **Enlargement** | Type + scale factor + centre |

### Comparison/Analysis Commands
| Command | Meaning |
|---------|---------|
| **Compare...and/to/with** | Identify values and determine which is larger/smaller with context |
| **Does the data support...** | Use calculations and statistical measures to make a decision |
| **Evaluate** | Identify incorrect components or explain correctness (Higher) |
| **Is...correct?** | State yes/no with justification |

### Format Commands
| Command | Meaning |
|---------|---------|
| **Give your answer as/in the form** | Present in specified format |
| **Give your answer in its simplest form** | Cancel fractions, collect like terms |
| **Give your answer in terms of π** | Use π not decimal approximation |
| **Give your answer to...d.p./s.f.** | Show full working, round final answer only |
| **Circle your answer** | Multiple choice - mark one option |
| **State the units** | Include correct units for full marks |

### Special Instructions
| Instruction | Meaning |
|------------|---------|
| **You must show your working** | No marks for answer alone |
| **Do not use a graphical method** | Algebraic approach required |
| **Hence** | MUST use the previous result |
| **Hence or otherwise** | Can use previous result OR alternative method |
| **Using part...** | Reference earlier answer but alternatives exist |
| **You may use...to help you** | Optional aid provided |
`;

// ============================================================================
// AQA ASSESSMENT OBJECTIVES
// ============================================================================

const AQA_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Mathematics Assessment Objectives

### AO1: Use and Apply Standard Techniques
- Accurately recall facts, terminology, and definitions
- Use and interpret notation correctly
- Carry out routine procedures or set tasks requiring multi-step solutions

### AO2: Reason, Interpret, and Communicate Mathematically
- Make deductions, inferences, and draw conclusions from mathematical information
- Construct chains of reasoning to achieve a given result
- Interpret and communicate information accurately
- Present arguments and proofs
- Assess validity of arguments and critically evaluate

### AO3: Solve Problems Within Mathematics and Other Contexts
- Translate problems into mathematical processes
- Make and use connections between different parts of mathematics
- Interpret results in context of the problem
- Evaluate methods and results
- Select appropriate concepts, methods, and techniques

### Weighting by Tier

| Tier | AO1 | AO2 | AO3 |
|------|-----|-----|-----|
| Foundation | 50% | 25% | 25% |
| Higher | 40% | 30% | 30% |

### Question Distribution by AO
- **AO1 questions**: Direct calculation, recall, standard procedures
- **AO2 questions**: Reasoning, explanation, proof, interpretation
- **AO3 questions**: Problem solving, unfamiliar contexts, multi-step reasoning

### Timing Guidance
- Approximately 1 mark per minute
- 80 marks in 90 minutes = slight buffer for checking
- Easy questions (1-2 marks): 1-2 minutes
- Medium questions (3-4 marks): 3-4 minutes
- Hard questions (5-8 marks): 5-8 minutes
`;

// ============================================================================
// AQA MARK SCHEME CONVENTIONS
// ============================================================================

const AQA_MARK_SCHEME_CONVENTIONS = `
## AQA Mark Scheme Conventions

### Mark Types
| Mark | Meaning | Notes |
|------|---------|-------|
| **M** | Method mark | Correct approach, even with arithmetic errors |
| **A** | Accuracy mark | Correct execution, depends on preceding M mark |
| **B** | Independent mark | Specific correct value, not dependent on method |
| **dep** | Dependent mark | Requires previous mark in chain to be awarded |
| **ft** | Follow through | Credit given despite earlier errors if method is correct |
| **SC** | Special case | Marks for common misinterpretation |
| **oe** | Or equivalent | Accept equivalent correct answers |
| **cao** | Correct answer only | No follow-through allowed |
| **awrt** | Answers which round to | Accept if rounds to given value |
| **isw** | Ignore subsequent working | Don't penalise extra (even wrong) work after correct answer |

### Key Marking Principles
1. **Reward valid methods**: Any approach that could lead to correct answer earns M marks
2. **Correct answers**: Full marks unless "show working" specified
3. **Misread rule**: Max 2 A/B marks lost for genuine misreads
4. **Multiple attempts**: Mark each; award highest marks but can't mix methods
5. **Rounding errors**: Only penalise if significantly affects answer
6. **Units**: Usually required unless context makes it obvious

### Multi-Part Question Marking
- Each part marked independently unless "hence" is used
- Follow-through applies within parts and sometimes between parts
- Arithmetic errors: penalise once, then ft
- Miscopying own work: treat as arithmetic error (ft)
`;

/**
 * AQA GCSE Mathematics (8300) Question Generation Prompts.
 * Based on analysis of official AQA past papers, mark schemes, and guidance documents.
 * Sources:
 * - https://www.aqa.org.uk/resources/mathematics/gcse/mathematics-8300/teach/command-words
 * - https://filestore.aqa.org.uk/resources/mathematics/AQA-8300-NG-MARKING-GUIDANCE.PDF
 * - https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/scheme-of-assessment
 */

const AQA_QUESTION_PRINCIPLES = `# AQA GCSE Mathematics: Question Construction Principles

${AQA_ASSESSMENT_OBJECTIVES}

${AQA_COMMAND_WORDS}

${AQA_MARK_SCHEME_CONVENTIONS}

You are generating an original GCSE Mathematics question that could plausibly appear on a future AQA exam. The question must be genuinely original—not a copy of a past paper question with different numbers, but a fresh application of mathematical concepts that exhibits authentic AQA characteristics.

## Core Philosophy

AQA questions test **mathematical proficiency**, not recall. Every question should:
- Be accessible (students can make meaningful progress)
- Be discriminating (stronger students demonstrate deeper understanding)
- Feel authentic (a natural mathematical task, not a contrived puzzle)
- Reward understanding (partial credit for method even when answers are wrong)

**AQA-Specific Characteristics:**
- 3 papers × 90 minutes × 80 marks = 240 TOTAL MARKS
- Paper 1 is NON-CALCULATOR; Papers 2 & 3 are calculator
- Includes ~5 MULTIPLE-CHOICE questions (1 mark each) distributed throughout papers
- Provides DESIGNATED LINES for student working (unlike Edexcel/OCR open space)
- Starts with accessible content to ease students into exams
- Uses tick-box questions requiring reasoned explanations
- Mark schemes considered more flexible than other boards

## Command Word Semantics

Each command word has specific implications. Use them precisely:

**Calculation commands:**
- "Work out" / "Calculate" — Method must be shown; M marks available for approach
- "Write down" — No working needed; 1 mark only; answer alone suffices
- "Find" — May involve deduction, not just calculation
- "Estimate" — Round FIRST, then calculate (not calculate then round)

**Algebraic commands:**
- "Simplify" / "Simplify fully" — Reduce completely; partial simplification loses marks
- "Factorise" / "Factorise fully" — Complete factorisation required
- "Expand and simplify" — Multiply out then collect like terms
- "Solve" — Find ALL values; state all solutions
- "Make x the subject" — Isolate x completely

**Reasoning commands:**
- "Show that" — Answer is PROVIDED; prove it's correct; cannot work backwards
- "Prove" — Formal mathematical argument with variables defined
- "Explain" — Mathematical vocabulary required; "because" needs justification
- "Give reasons for your answer" — Name theorems/properties explicitly

## Mark Allocation Logic

Marks correlate with **cognitive demand**, not just step count:

| Marks | Characteristics |
|-------|----------------|
| 1 | Single recall, recognition, or one-step calculation |
| 2 | Two-step calculation OR one-step with reasoning |
| 3 | Multi-step with clear progression OR calculation + interpretation |
| 4 | Complex multi-step OR synthesis of concepts |
| 5+ | Extended problem solving, proof, or multi-part with synthesis |

## Mark Scheme Construction

**Mark types:**
- M marks (Method): Correct approach, even with arithmetic errors
- A marks (Accuracy): Correct execution, dependent on M marks
- B marks (Independent): Specific correct values, not dependent on method

**Dependency rules:**
- A marks require preceding M marks
- "dep" marks require previous mark in chain
- Follow-through (ft) allows credit despite earlier errors

## Question Architecture

**Single-part structure:** Context → Information → Task → Format requirement

**Multi-part structure:**
- Part (a) achievable independently
- Later parts may use earlier results
- "Hence" means MUST use previous result
- "Hence or otherwise" allows alternatives

## Difficulty Calibration

**Foundation Tier (Grades 1-5):**
- Familiar, well-structured problems
- Numbers work out cleanly
- Scaffolded multi-part questions
- Context aids understanding
- Method selection implicit in structure

**Higher Tier (Grades 4-9):**
- Less familiar setups
- Algebraic generalisation often required
- Less scaffolding—students choose approach
- Context may require interpretation
- Synthesis of multiple concepts`;

const AQA_TOPIC_GUIDANCE: Record<string, string> = {
  number: `## Number Topic Structure (N1-N16)

**Ordering and Comparing (N1):**
- Use inequality symbols correctly: students should understand ≤ vs <
- Include negative numbers, decimals, and fractions in comparisons
- "Write these in order" questions: specify ascending/descending

**Four Operations (N2):**
- BIDMAS questions test order of operations; include negative numbers
- Mixed number operations: conversion marks + operation marks + simplification marks
- Context: household finance vocabulary (profit, loss, VAT, interest)

**Factors, Multiples, Primes (N3):**
- HCF/LCM: product of prime factors method OR listing method both valid
- Venn diagram method for HCF/LCM: standard approach for Higher
- Prime factorisation: express using index notation

**Powers and Roots (N4-N5):**
- Index laws: each law application typically earns one mark
- Negative indices (Higher): rewrite as reciprocal
- Fractional indices (Higher): root first, then power typically easier
- Surds (Higher): simplifying, rationalising denominators

**Fractions and Decimals (N7-N9):**
- Fraction operations: test conceptual understanding, not just algorithms
- Fractions of amounts: forward (find fraction) and reverse (find total)
- Recurring decimals (Higher): algebraic proof required for conversion

**Percentages (N10-N12):**
- Forward: find X% of Y (2 marks typical)
- Reverse: Y is result after X% change, find original (3 marks - must identify multiplier)
- Compound changes: multiplier method or step-by-step both valid
- Simple vs compound interest: ensure question specifies clearly

**Accuracy and Bounds (N15-N16):**
- Rounding: distinguish decimal places vs significant figures
- Error intervals: use inequality notation
- Upper/lower bounds (Higher): apply to calculations, usually 3-4 marks

**Standard Form (N8):**
- Conversion questions: 1-2 marks
- Calculations: show working in standard form throughout
- Context: very large/very small numbers in science contexts`,

  algebra: `## Algebra Topic Structure (A1-A25)

**Notation and Manipulation (A1-A4):**
- Collecting like terms: include negative coefficients
- Expanding brackets: single (1-2 marks), double (2-3 marks), triple (Higher, 3 marks)
- Factorising: "fully" requires complete factorisation; partial work earns partial credit
- Algebraic fractions (Higher): simplifying, adding/subtracting with common denominators

**Substitution (A2):**
- Include negative values and order of operations challenges
- Formulae from other subjects: physics, science contexts

**Equations (A19-A21):**
- Linear: range from single-step to unknowns on both sides
- Formation from context: separate marks for forming vs solving
- Quadratic: factorising, formula (Higher), completing square (Higher)
- Simultaneous: graphical, elimination, substitution methods all acceptable

**Inequalities (A22-A23):**
- Number line representation: open circle for strict, closed for inclusive
- Graphical representation: dashed line for strict, solid for inclusive
- Quadratic inequalities (Higher): solve as equation first, then determine solution set

**Sequences (A16-A18):**
- Linear nth term: find difference → coefficient of n → adjustment
- Quadratic nth term (Higher): second difference method
- "Is X in the sequence?": requires equation solving; negative/non-integer results mean no

**Graphs (A9-A15):**
- y = mx + c: gradient and intercept identification
- Parallel lines: same gradient
- Perpendicular lines (Higher): product of gradients = -1
- Real-life graphs: gradient represents rate of change in context
- Transformations (Higher): f(x) + a, f(x + a), af(x), f(ax)

**Rearranging (A24):**
- Subject appearing once: 2-3 marks
- Subject appearing twice (Higher): 4 marks typically; collect, factorise, divide

**Functions (A25 - Higher):**
- Function notation: f(x) means substitute x
- Composite: fg(x) means "do g first, then f"
- Inverse: swap x and y, rearrange`,

  geometry: `## Geometry Topic Structure (G1-G25)

**Angle Properties (G1-G2, G6):**
- ALWAYS require reasons named explicitly
- Colloquial terms (Z angles, F angles) NOT acceptable
- Multi-step chains: each angle earns marks even if final is wrong
- Polygon angles: use (n-2)×180° or exterior angles sum to 360°

**Properties of Shapes (G3):**
- Name specific properties: "isosceles triangle has two equal angles"
- Symmetry: lines of symmetry AND rotational symmetry order
- Quadrilateral properties: diagonals, parallel sides, equal angles

**Circle Theorems (G4-G5, G9 - Higher):**
- Must state theorem by name or property
- Common theorems: angle at centre, angles in same segment, tangent perpendicular to radius
- Arc length and sector area: proportion of full circle
- Segment area (Higher): sector minus triangle

**Similarity and Congruence (G7-G8):**
- Congruent triangles: SSS, SAS, ASA, RHS (name the condition)
- Similar shapes: corresponding sides in same ratio
- Area scale factor = (length scale factor)²
- Volume scale factor = (length scale factor)³ (Higher)

**Constructions and Loci (G10):**
- Compass and ruler only (no protractor)
- Standard constructions: perpendicular bisector, angle bisector, 60° angle
- Loci: distance from point, equidistant from two points/lines

**Area and Volume (G11-G14):**
- Compound shapes: decomposition strategy, show individual calculations
- Prisms: cross-section area × length
- Cones, pyramids, spheres (Higher): formula often given
- Surface area: account for all faces

**Pythagoras and Trigonometry (G15-G21):**
- Pythagoras: identify right angle, label sides correctly
- SOHCAHTOA: identify opposite, adjacent, hypotenuse relative to angle
- Exact values (Higher): sin 30° = 0.5, cos 45° = 1/√2, etc.
- Sine/cosine rule (Higher): for non-right triangles
- 3D problems (Higher): identify the right-angled triangle in the shape

**Bearings (G22):**
- Three-figure bearings: always three digits (045° not 45°)
- Measured clockwise from North

**Transformations (G23):**
- Full descriptions require ALL components:
  - Reflection: type + line equation
  - Rotation: type + centre + angle + direction
  - Translation: type + column vector
  - Enlargement: type + scale factor + centre
- Negative scale factor (Higher): inverts through centre

**Vectors (G24-G25):**
- Column vector notation for translations
- Vector arithmetic: addition, subtraction, scalar multiplication
- Geometric proofs (Higher): express vectors in terms of a and b`,

  statistics: `## Statistics Topic Structure (S1-S6)

**Data Types and Sampling (S1):**
- Primary vs secondary data; discrete vs continuous
- Sampling: random, stratified (Higher)
- Bias: questions should address how to avoid/recognise bias
- Stratified sampling: proportional to population subgroups

**Data Representation (S2):**
- Pictograms: include key
- Pie charts: angles proportional to frequency (360° total)
- Frequency tables: reading and constructing
- Cumulative frequency: running total, plot at upper boundary
- Box plots: median, quartiles, minimum, maximum
- Histograms (Higher): frequency density = frequency ÷ class width

**Averages and Spread (S4):**
- From raw data: mean (sum ÷ count), median (middle), mode (most frequent)
- From frequency tables: mean requires Σfx ÷ Σf
- From grouped data: mean is ESTIMATE using midpoints
- Modal CLASS for grouped data (not mode)
- Quartiles: Q1 = n/4 position, Q2 = median, Q3 = 3n/4 position
- IQR = Q3 - Q1

**Comparing Distributions (S3-S4):**
- MUST reference specific statistics from BOTH distributions
- Compare average AND spread
- Generic statements ("higher", "more spread out") insufficient without values
- Relate to context where appropriate

**Scatter Graphs and Correlation (S6):**
- Types: positive, negative, no correlation
- Line of best fit: passes through mean point
- Interpolation (within data range): reliable
- Extrapolation (beyond data range): less reliable`,

  probability: `## Probability Topic Structure (P1-P9)

**Single Event Probability (P1-P3):**
- P = favourable outcomes ÷ total outcomes
- Accept fraction, decimal, or percentage unless specified
- Probabilities sum to 1 for all outcomes
- P(not A) = 1 - P(A)

**Expected Frequency (P4):**
- Expected = probability × number of trials
- Compare expected with actual results

**Relative Frequency (P5):**
- Estimated probability from experiments
- More trials → more reliable estimate

**Listing Outcomes (P6):**
- Sample spaces: systematic listing
- Two-way tables: all combinations
- "At least one": often easier to calculate 1 - P(none)

**Tree Diagrams (P7):**
- Structure: branches from left to right
- Probabilities on branches
- AND: multiply along branches
- OR: add final outcomes
- With/without replacement: changes subsequent probabilities

**Combined Events (P8):**
- Independent events: P(A and B) = P(A) × P(B)
- Mutually exclusive: P(A or B) = P(A) + P(B)
- Not mutually exclusive: P(A or B) = P(A) + P(B) - P(A and B)

**Conditional Probability (P9 - Higher):**
- P(A given B) ≠ P(A and B)
- Venn diagrams: intersections, unions
- Set notation: ∩ (intersection), ∪ (union), ∅ (empty set)
- Two-way tables for conditional probability`,

  ratio: `## Ratio, Proportion & Rates of Change Topic Structure (R1-R16)

**Unit Conversions (R1):**
- Metric units: length, mass, capacity
- Time: seconds, minutes, hours, days
- Area conversions: square the scale factor
- Volume conversions: cube the scale factor

**Scale (R2):**
- Map scales: 1:n means 1 unit on map = n units in real life
- Scale drawings: calculate real measurements from scaled diagram

**Ratio (R3-R8):**
- Simplifying: divide by HCF
- 1:n form: divide both parts by smaller part
- Sharing in ratio (given total): find value of one part, multiply
- Sharing in ratio (given difference): set up equation
- Ratio to fraction: part/total

**Percentages (R9):**
- Multiplier method: 1.15 for 15% increase, 0.85 for 15% decrease
- Reverse percentage: divide by multiplier
- Compound change: multiply by (multiplier)^n or iterate

**Direct and Inverse Proportion (R10, R13):**
- Direct: y = kx; as x increases, y increases
- Inverse: y = k/x; as x increases, y decreases
- Recognising relationship type from context
- Algebraic expressions (Higher): y ∝ x², y ∝ 1/x, etc.

**Compound Measures (R11):**
- Speed = distance ÷ time
- Density = mass ÷ volume
- Pressure = force ÷ area (Higher)
- Unit pricing: calculate cost per unit for comparison

**Best Buy Problems:**
- Calculate comparable units for BOTH options
- Conclusion without calculations loses marks
- Show clear comparison and justify answer

**Similar Shapes (R12):**
- Length ratio = scale factor
- Area ratio = (scale factor)²
- Volume ratio = (scale factor)³

**Rates of Change (R14-R15 - Higher):**
- Gradient of straight line = rate of change
- Gradient at point on curve = instantaneous rate of change
- Interpret gradient in context (e.g., speed, rate of flow)

**Growth and Decay (R16):**
- Compound interest: A = P(1 + r/100)^n
- Depreciation: multiply by (1 - rate)^n
- Growth/decay problems in context
- Iteration (Higher): repeated application of formula`,
};

/**
 * Compact prompt for fast AQA question generation.
 */
export function getAQACompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 1-3): Single-step only, 1-2 marks, like Q1-8. May use multiple choice.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 4-5): 2-3 steps, 3-4 marks, like Q9-16. Standard methods.'
    : 'Final paper (Grades 6-9): Complex multi-step, 5-8 marks, like Q17-25. Extended reasoning, proofs.';

  return `Generate an AQA GCSE Maths question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
Marks: ${markRange.min}-${markRange.max}

Requirements:
- Original question (not a past paper copy)
- Realistic context OR pure maths
- Include worked solution
- Include mark scheme (M=method, A=accuracy marks)
- Use $...$ for LaTeX math
- Use \\n for newlines in strings

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First mark","A1: Second mark"]}`;
}

/**
 * Enhanced prompt for high-quality AQA question generation.
 */
export function getAQAEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getDifficultyGuidance(difficulty);
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL AQA GCSE Mathematics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** This must be a fresh question that could NOT be found in past papers.
2. **AUTHENTICITY:** The question should feel like a natural mathematical task.
3. **APPROPRIATE DIFFICULTY:** The cognitive demand must match the mark allocation.
4. **COMPLETE MARK SCHEME:** Every mark must have clear earning criteria.

## Response Format (JSON)

{
  "content": "Question text with proper formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional diagram spec object - include if question needs a visual>
}

${DIAGRAM_SCHEMA_DOCS}

## AQA Formatting Rules

### Question Content:
1. Context/information FIRST
2. Blank line before questions (\\n\\n)
3. Each part (a), (b), (c) on NEW LINE
4. Mark allocations: [X marks] at end of each part
5. Use $...$ for LaTeX math

Example:
"A shop sells coffee at £8.50 per bag.\\n\\n(a) Work out the cost of 3 bags. [2 marks]\\n\\n(b) Sarah has £50. How many bags can she buy? [2 marks]"

### Mark Scheme:
1. One mark per array element
2. Use M1, A1, B1 labels
3. For multi-part: "(a) M1:", "(b) A1:"

Generate a genuinely original AQA question now:`;
}

/**
 * Multi-part question prompt for AQA.
 */
export function getAQAMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const difficultyGuidance = getDifficultyGuidance(difficulty);
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part AQA GCSE Mathematics question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles

- Part (a) should be achievable independently
- Later parts may build on earlier results OR explore different aspects
- Use "Hence" only when students MUST use the previous result
- Total marks should be 5-8 for a ${numParts}-part question
- Each part should test a distinct skill while maintaining thematic coherence

## Response Format (JSON)

{
  "content": "Question text with parts on separate lines",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark", "(a) A1: mark", "(b) M1: mark"]
}

Generate a genuinely original multi-part AQA question now:`;
}

/**
 * Multiple choice question prompt for AQA GCSE Maths.
 * AQA papers typically include ~5 multiple-choice questions (1 mark each).
 */
export function getAQAMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyLevel = difficulty === 'easy'
    ? 'Foundation (Grades 1-3): Basic recall or simple recognition'
    : difficulty === 'medium'
    ? 'Foundation-Higher crossover (Grades 4-5): Standard application'
    : 'Higher (Grades 6-9): Requires careful reasoning to avoid traps';

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA-style MULTIPLE CHOICE question (1 mark).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty:** ${difficultyLevel}

## AQA Multiple Choice Characteristics

AQA GCSE Maths includes ~5 multiple choice questions per paper, typically:
- 1 mark each
- 4 options (A, B, C, D)
- Distractors based on common misconceptions/errors
- Often placed early in the paper (Foundation) or testing nuanced concepts (Higher)

**Common distractor strategies:**
- Sign errors (especially with negatives)
- Order of operations errors (BIDMAS)
- Unit confusion (mixing cm and m)
- Forgetting to square/cube in area/volume
- Rounding errors
- Using wrong formula variant

## Response Format (JSON)

{
  "content": "Question stem\\n\\nA: Option A\\nB: Option B\\nC: Option C\\nD: Option D",
  "marks": 1,
  "solution": "Full working showing why correct answer is correct and why each distractor is wrong",
  "markScheme": ["B1: Correct answer is [X]"],
  "correctAnswer": "A/B/C/D"
}

Generate an original AQA multiple choice question now:`;
}

/**
 * "Show that" / Proof question prompt for AQA GCSE Maths.
 * These are common on Higher tier papers.
 */
export function getAQAShowThatPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-6';

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA-style "SHOW THAT" or PROOF question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## AQA "Show That" and Proof Characteristics

**"Show that" questions:**
- Answer is GIVEN in the question
- Students must demonstrate WHY it is true
- Cannot work backwards from the answer
- Each logical step earns marks
- Must show ALL working, not just the final line

**Algebraic proof questions (Higher):**
- "Prove that..." requires formal mathematical argument
- Define variables clearly
- Each step must follow logically
- Common types: prove expression always odd/even, prove inequality, prove geometric relationship

**Command word meanings:**
- "Show that" - Prove the given result is correct
- "Prove" - Formal mathematical argument required
- "Verify" - Check by substitution or calculation
- "Hence show" - Must use the previous result

**Common "Show that" contexts:**
- Algebraic identities: (n+1)² - n² = 2n + 1
- Geometric proofs: sum of angles, similarity ratios
- Number proofs: product of consecutive integers
- Statistical: show mean equals given value

## Response Format (JSON)

{
  "content": "Context and setup...\\n\\nShow that [result to prove]. [X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step proof with clear logical progression",
  "markScheme": ["M1: First key step", "M1: Second key step", "A1: Arrives at given answer with no errors"]
}

Generate an original AQA "show that" or proof question now:`;
}

/**
 * Graph interpretation/sketching question prompt for AQA GCSE Maths.
 */
export function getAQAGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-5' : '5-7';

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

${DIAGRAM_SCHEMA_DOCS}

---

## Your Task

Generate an AQA-style GRAPH question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## AQA Graph Question Types

**Graph interpretation:**
- Reading coordinates from graphs
- Finding gradient (rate of change in context)
- Finding y-intercept (meaning in context)
- Area under graph (if applicable - e.g., velocity-time)
- Comparing two graphs

**Graph sketching:**
- "Sketch the graph of y = ..."
- Transformations of known graphs (Higher)
- Key features: intercepts, turning points, asymptotes
- Shape recognition: linear, quadratic, cubic, reciprocal, exponential

**Real-life graphs:**
- Distance-time graphs (gradient = speed)
- Velocity-time graphs (gradient = acceleration, area = distance)
- Conversion graphs
- Cost/pricing graphs

**Key marking points:**
- Label axes correctly
- Mark key coordinates
- Show correct shape/curvature
- Identify key features (max, min, roots)

## Response Format (JSON)

{
  "content": "Question involving graph interpretation or sketching...\\n\\n[X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step solution explaining the graph analysis",
  "markScheme": ["M1: Method mark", "A1: Accuracy mark"],
  "diagram": {
    "type": "coordinate",
    "data": { ... }
  }
}

Generate an original AQA graph question now:`;
}

/**
 * Extended response / Problem solving question prompt for AQA GCSE Maths.
 * These are the 5-6 mark "wordy" questions that appear near the end of papers.
 */
export function getAQAExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA-style EXTENDED RESPONSE / PROBLEM SOLVING question (5-6 marks).

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** 5-6 marks

## AQA Extended Response Characteristics

These appear near the end of papers (Q20-25) and require:
- Multiple steps with no scaffolding
- Students must decide their own approach
- Often set in real-world contexts
- Require interpretation of the answer in context
- May need to combine multiple topic areas

**Common features:**
- More text/context than typical questions
- No part labels (a), (b), (c) - one extended task
- Student chooses method
- Answer must be interpreted (e.g., "Is it possible?", "Does she have enough?")
- Quality of Written Communication may be assessed

**Context types:**
- Financial: budgeting, cost comparisons, value for money
- Geometric: designing layouts, calculating materials
- Statistical: analysing data to make decisions
- Algebraic: setting up and solving real problems

**Mark scheme structure:**
- M marks for each stage of method
- A marks for correct execution
- Often includes ft (follow-through) for consequent working
- Final mark often for interpretation/conclusion

## Response Format (JSON)

{
  "content": "Extended context setting up a realistic scenario...\\n\\n[Question requiring extended reasoning] [5 marks]",
  "marks": 5,
  "solution": "Complete step-by-step solution with interpretation",
  "markScheme": ["M1: First method step", "M1: Second method step", "A1: Correct intermediate value", "M1: Final calculation", "A1: Correct answer with appropriate conclusion"]
}

Generate an original AQA extended response question now:`;
}

/**
 * Compare / Data analysis question prompt for AQA GCSE Maths.
 * Common in statistics - comparing distributions, datasets, or methods.
 */
export function getAQAComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = difficulty === 'easy' ? '2' : difficulty === 'medium' ? '2-3' : '3-4';

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate an AQA-style COMPARISON question.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange} marks

## AQA Comparison Question Characteristics

**Statistical comparisons (most common):**
- "Compare the distributions of..."
- MUST quote specific values from BOTH datasets
- Compare BOTH average AND spread
- Relate to context

**Required structure for full marks:**
1. Comparative statement using correct terminology
2. Specific numerical evidence from BOTH sets
3. Interpretation in context (if applicable)

**Common comparison types:**
- Comparing means: "On average, [Group A] scored [X] more/less than [Group B]"
- Comparing spreads: "The range/IQR for [Group A] is [X] compared to [Y] for [Group B], showing..."
- Box plot comparisons: medians, quartiles, ranges
- Scatter graph comparisons: correlation strength, outliers

**What loses marks:**
- Generic statements without numbers ("Group A did better")
- Only comparing one measure (only average OR only spread)
- Not referencing context
- Not comparing both datasets

**Non-statistical comparisons:**
- "Compare method A and method B for solving..."
- "Compare using exact values vs calculator"
- Pros and cons of different approaches

## Response Format (JSON)

{
  "content": "Data/context for two groups or methods to compare...\\n\\nCompare the [aspect] of [Group A] and [Group B]. [X marks]",
  "marks": <total marks>,
  "solution": "Model comparison with specific values and context",
  "markScheme": ["B1: Correct comparison of average with values", "B1: Correct comparison of spread with values", "B1: Interpretation in context (if applicable)"]
}

Generate an original AQA comparison question now:`;
}

/**
 * Calculator vs Non-calculator specific prompt.
 * Generates questions appropriate for Paper 1 (non-calc) or Paper 2/3 (calc).
 */
export function getAQACalculatorPrompt(
  topic: Topic,
  difficulty: Difficulty,
  isCalculatorAllowed: boolean,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  const calcGuidance = isCalculatorAllowed
    ? `## Calculator Paper (Paper 2 or 3) Guidelines

- Numbers can be "messy" - decimals, large numbers OK
- Trigonometry questions can use any angle
- More complex calculations are appropriate
- Can include questions using trial and improvement
- Iterative methods acceptable (Higher)
- Statistical calculations with larger datasets`
    : `## Non-Calculator Paper (Paper 1) Guidelines

- Numbers should work out "nicely" without a calculator
- Use integers, simple fractions, or terminating decimals
- Trigonometry limited to exact values: sin/cos/tan of 0°, 30°, 45°, 60°, 90°
- Mental arithmetic should be manageable
- Show working for even simple calculations
- Emphasis on understanding over calculation`;

  return `${AQA_QUESTION_PRINCIPLES}

${topicGuidance}

${calcGuidance}

---

## Your Task

Generate an AQA question suitable for a ${isCalculatorAllowed ? 'CALCULATOR' : 'NON-CALCULATOR'} paper.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Mark Range:** ${markRange.min}-${markRange.max} marks
**Calculator:** ${isCalculatorAllowed ? 'ALLOWED' : 'NOT ALLOWED'}

${!isCalculatorAllowed ? `
**Non-calculator number guidance:**
- Products: multiples of 5, 10, simple factors
- Divisions: ensure clean division
- Fractions: use denominators 2, 3, 4, 5, 8, 10
- Percentages: 10%, 25%, 50%, or combinations
- Square roots: perfect squares (4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144)
` : ''}

## Response Format (JSON)

{
  "content": "Question appropriate for ${isCalculatorAllowed ? 'calculator' : 'non-calculator'} paper",
  "marks": <total marks>,
  "solution": "Step-by-step solution",
  "markScheme": ["Mark allocations"]
}

Generate an original AQA ${isCalculatorAllowed ? 'calculator' : 'non-calculator'} question now:`;
}
