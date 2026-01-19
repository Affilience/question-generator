import { Difficulty, Topic } from '@/types';
import {
  getVarietyParameters,
  getVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';

/**
 * Edexcel (Pearson) A-Level Mathematics (9MA0) Question Generation Prompts.
 * Based on analysis of Edexcel past papers 2018-2024.
 *
 * Sources:
 * - https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html
 * - https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf
 * - Edexcel examiner reports and mark scheme guidance
 */

// ============================================================================
// EDEXCEL A-LEVEL ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const EDEXCEL_ALEVEL_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Mathematics Assessment Objectives

Assessment objectives are set by Ofqual and are the same across all A-level Mathematics specifications.

### AO1: Use and Apply Standard Techniques (50%)
Students should be able to:
- Select and correctly carry out routine procedures
- Accurately recall facts, terminology and definitions

**AO1 Question Characteristics:**
- Direct application of standard techniques
- "Find", "Calculate", "Work out" commands
- Standard differentiation, integration, equation solving
- Using formulas from the booklet correctly

### AO2: Reason, Interpret and Communicate Mathematically (25%)
Students should be able to:
- Construct rigorous mathematical arguments (including proofs)
- Make deductions and inferences
- Assess the validity of mathematical arguments
- Explain their reasoning
- Use mathematical language and notation correctly

**AO2 Question Characteristics:**
- "Prove", "Show that", "Explain", "Justify" commands
- Constructing mathematical arguments
- Interpreting graphs and diagrams
- Questions requiring justification

### AO3: Solve Problems Within Mathematics and Other Contexts (25%)
Students should be able to:
- Translate problems into mathematical processes
- Interpret solutions in context and evaluate accuracy
- Translate situations into mathematical models
- Evaluate modelling outcomes and refine models

**AO3 Question Characteristics:**
- Modelling problems (especially mechanics)
- Large data set context questions
- Unfamiliar contexts requiring interpretation
- Multi-step problems where method selection is required

### Weighting by Paper
| Paper | AO1 | AO2 | AO3 | Total |
|-------|-----|-----|-----|-------|
| Paper 1 (Pure 1) | 50% | 25% | 25% | 100 marks |
| Paper 2 (Pure 2) | 50% | 25% | 25% | 100 marks |
| Paper 3 (Stats & Mech) | 50% | 25% | 25% | 100 marks |
| **Overall** | **50%** | **25%** | **25%** | **300 marks** |
`;

// ============================================================================
// EDEXCEL-SPECIFIC CONTENT (Different from AQA/OCR)
// ============================================================================

const EDEXCEL_ALEVEL_UNIQUE_CONTENT = `
## Edexcel A-Level Specification Content

### Statistics Content:
- **Normal approximation to binomial distribution** with CONTINUITY CORRECTION
  - If X ~ B(n, p) where n is large and p ≈ 0.5, then X ≈ N(np, np(1-p))
  - Use continuity correction: P(X ≤ k) ≈ P(Y ≤ k + 0.5) where Y ~ N(np, np(1-p))
- **Discrete uniform distribution** explicitly named
- **Large Data Set** - questions assume familiarity with weather data from UK and international locations

### Mechanics Content:
- **2-D Moments problems including "ladder against a wall"**
  - Parallel and non-parallel coplanar forces
  - Resting on rough ground against a smooth wall (or vice versa)
  - Forces at angles, not just horizontal/vertical
- **Greater emphasis on modelling** in mechanics contexts

### Paper Structure:
- Paper 1: Pure Mathematics only (2 hours, 100 marks)
- Paper 2: Pure Mathematics only (2 hours, 100 marks)
- Paper 3: Statistics and Mechanics (2 hours, 100 marks)
  - Section A: Statistics
  - Section B: Mechanics
  - Applied content consolidated in one paper, separate sections

### Question Style:
- **Highly predictable and formulaic** - consistent year to year
- **Easier past paper preparation** due to consistent format
- **NO multiple choice questions**
- Box plots identify outliers marked as crosses
`;

// ============================================================================
// EDEXCEL MARK SCHEME CONVENTIONS
// ============================================================================

const EDEXCEL_ALEVEL_MARK_SCHEME = `
## Edexcel A-Level Mark Scheme Conventions

### Mark Types
| Mark | Type | Description |
|------|------|-------------|
| **M** | Method | Awarded for knowing a method and attempting to apply it |
| **A** | Accuracy | Can only be awarded if relevant M marks have been earned |
| **B** | Independent | Unconditional accuracy marks, independent of M marks |
| **dM** | Dependent Method | Requires earlier M mark to have been awarded |

### Important Rules
- Marks should NOT be subdivided
- A marks depend on preceding M marks being awarded
- Alternative methods shown where applicable

### Common Abbreviations
| Abbreviation | Meaning |
|--------------|---------|
| **cao** | Correct answer only (no follow-through) |
| **ft** | Follow through from earlier error |
| **o.e.** | Or equivalent |
| **awrt** | Answers which round to |
| **cso** | Correct solution only (no errors in that part) |
| **isw** | Ignore subsequent working |
| **oe** | Or equivalent |

### Misread Rule
For misreading which does not alter the character of a question or materially simplify it:
- Deduct TWO from any A or B marks gained
- Do not deduct from M marks
`;

const EDEXCEL_ALEVEL_QUESTION_PRINCIPLES = `# Edexcel A-Level Mathematics: Question Construction Principles

${EDEXCEL_ALEVEL_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_UNIQUE_CONTENT}

${EDEXCEL_ALEVEL_MARK_SCHEME}

You are generating an original A-Level Mathematics question that could plausibly appear on a future Pearson Edexcel exam. The question must be genuinely original—not a copy of a past paper question with different numbers, but a fresh application of mathematical concepts that exhibits authentic Edexcel characteristics.

## Exam Structure

Edexcel A-Level Mathematics (9MA0) consists of three papers:
- Paper 1 (9MA0/01): Pure Mathematics 1 - 2 hours, 100 marks
- Paper 2 (9MA0/02): Pure Mathematics 2 - 2 hours, 100 marks
- Paper 3 (9MA0/03): Statistics and Mechanics COMBINED - 2 hours, 100 marks
  - Section A: Statistics (approximately 50 marks)
  - Section B: Mechanics (approximately 50 marks)

All papers are calculator papers. Students have access to the Edexcel Formulae Booklet.

**Edexcel-Specific Characteristics (vs AQA/OCR):**
- Papers 1 & 2 are PURE MATHS ONLY (Applied is separate on Paper 3)
- NO multiple choice questions (unlike AQA)
- Highly FORMULAIC, PREDICTABLE question structure year-to-year
- Greater emphasis on APPLIED MODELLING in mechanics
- Moments problems in 2-D (ladders resting against walls, forces at angles)
- Requires CONTINUITY CORRECTION for normal approximation to binomial
- Box plots identify outliers marked as crosses
- Easier to prepare via past papers due to consistent format
- Statistics and Mechanics are in SAME paper but SEPARATE sections

## Large Data Set

For Statistics questions, students are expected to be familiar with the Edexcel large data set. Questions may assume knowledge of:
- The context and meaning of variables
- How to interpret data from the set
- Common calculations using this data

## Question Type Distribution (Papers 1 & 2)

| Question Range | Type | Marks per Q | Format |
|---------------|------|-------------|--------|
| Q1-4 | Short Answer | 2-5 marks | Single concept, direct calculation |
| Q5-9 | Medium | 5-8 marks | 2-3 steps, some synthesis |
| Q10-13 | Multi-part | 8-12 marks | Connected parts, scaffolded |
| Q14-16 | Extended | 10-16 marks | Complex modelling, proof |

## Question Type Distribution (Paper 3)

Statistics section (Q1-7ish):
- Mix of data analysis and probability questions
- Often include large data set context
- Hypothesis testing in later questions

Mechanics section (Q8-14ish):
- Kinematics and forces problems
- Connected particles and pulleys
- Moments questions toward the end

## Command Word Semantics (Edexcel Specific)

**Calculation commands:**
- "Find" — Calculate with working shown
- "Calculate" — Explicit numerical computation
- "Write down" — No working needed, 1 mark
- "State" — Direct answer, no justification

**Proof/Reasoning commands:**
- "Show that" — Answer given, prove it's correct
- "Prove" — Formal mathematical argument
- "Verify" — Confirm result by substitution
- "Explain" — Give mathematical reasoning
- "Justify" — Support answer with reasons

**Linking commands:**
- "Hence" — MUST use previous result
- "Hence, or otherwise" — Previous result helpful but alternatives OK
- "Using your answer to part (a)" — Explicitly linked
- "Deduce" — Derive from earlier work

## Mark Allocation Logic

| Marks | Characteristics |
|-------|----------------|
| 1 | Single recall, write down, or simple calculation |
| 2-3 | Two-step calculation or basic "show that" |
| 4-5 | Multi-step with method + accuracy |
| 6-7 | Extended calculation or proof |
| 8+ | Complex problem solving, multiple concepts |

## Mark Scheme Construction

**Mark types:**
- M marks (Method): Correct approach, even with arithmetic errors
- A marks (Accuracy): Correct execution, dependent on M marks
- B marks (Independent): Specific correct values, not dependent
- dM marks (Dependent Method): Require earlier M mark

**Edexcel conventions:**
- "cao" = correct answer only (no follow-through)
- "ft" or "o.e." = follow through from earlier error
- "awrt" = answers which round to
- Alternative methods shown where applicable

## Difficulty Calibration

**Early Questions (Q1-4):**
- Direct application of single technique
- Familiar setups with clean numbers
- Grade 4-6 standard
- 2-5 marks

**Middle Questions (Q5-9):**
- Synthesis of 2-3 concepts
- Some unfamiliar contexts
- Requires strategic thinking
- Grade 6-8 standard
- 5-8 marks

**Late Questions (Q10-16):**
- Extended multi-step reasoning
- Proof and modelling
- Less scaffolding
- Grade 7-9 standard
- 8-16 marks`;

const EDEXCEL_ALEVEL_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-alevel-proof': `## Proof Topic Structure (Edexcel)

**Proof by Deduction:**
- Logical chain from known facts to conclusion
- Algebraic manipulation to establish results
- Clear justification at each step

**Proof by Exhaustion:**
- Test all possible cases systematically
- Often small number of cases
- Show work for every case

**Proof by Contradiction:**
- "Assume, for contradiction, that..."
- Derive logical impossibility
- Classic: √2 irrational, infinitely many primes
- Clearly state initial assumption

**Disproof by Counter-example:**
- Single case that violates the statement
- Often quick 1-2 mark questions
- "Find a counter-example to show..."`,

  'edexcel-alevel-algebra': `## Algebra and Functions (Edexcel)

**Indices and Surds:**
- All laws including fractional/negative indices
- Rationalising: (a + b√c) denominators
- Simplifying nested surds

**Quadratics:**
- Completing the square: (x + p)² + q
- Discriminant b² - 4ac analysis
- Graphical interpretation

**Simultaneous Equations:**
- Substitution for linear + quadratic
- May involve circles or other curves

**Partial Fractions:**
- Linear factors: A/(x-a) + B/(x-b)
- Repeated: A/(x-a) + B/(x-a)²
- Improper fractions: divide first
- Essential for integration

**Modulus Function:**
- |f(x)| graphs
- Solving |f(x)| = g(x): two cases
- Modulus inequalities

**Functions:**
- Domain and range
- Composite: fg(x) means "g first, then f"
- Inverse: reflect in y = x`,

  'edexcel-alevel-coordinate-geometry': `## Coordinate Geometry (Edexcel)

**Straight Lines:**
- y - y₁ = m(x - x₁)
- Parallel: m₁ = m₂
- Perpendicular: m₁m₂ = -1
- Midpoint and length formulae

**Circles:**
- (x - a)² + (y - b)² = r²
- Complete square to find centre/radius
- Tangent ⊥ radius at point of contact
- Chord bisector passes through centre

**Parametric Equations:**
- Eliminate parameter for Cartesian
- dy/dx = (dy/dt)/(dx/dt)
- Finding tangent equations`,

  'edexcel-alevel-sequences-series': `## Sequences and Series (Edexcel)

**Binomial Expansion:**
- (a + b)ⁿ for positive integer n
- (1 + x)ⁿ for rational n, |x| < 1
- Finding specific coefficients
- Approximations

**Arithmetic Sequences:**
- uₙ = a + (n-1)d
- Sₙ = n/2[2a + (n-1)d] = n/2(a + l)
- Finding n from given Sₙ

**Geometric Sequences:**
- uₙ = arⁿ⁻¹
- Sₙ = a(1 - rⁿ)/(1 - r)
- S∞ = a/(1 - r) when |r| < 1

**Sigma Notation:**
- Σ notation for sums
- Σr from 1 to n = n(n+1)/2`,

  'edexcel-alevel-trigonometry': `## Trigonometry (Edexcel)

**Exact Values:**
- 0°, 30°, 45°, 60°, 90°
- CAST diagram for quadrants

**Radians:**
- Arc length s = rθ
- Sector area A = ½r²θ
- Segment area = sector - triangle

**Identities:**
- tan θ = sin θ/cos θ
- sin²θ + cos²θ = 1
- 1 + tan²θ = sec²θ
- 1 + cot²θ = cosec²θ

**Compound Angles:**
- sin(A ± B), cos(A ± B), tan(A ± B)
- Double angle formulae

**R-formula:**
- a sin θ + b cos θ = R sin(θ + α)
- R = √(a² + b²)
- For max/min and equations

**Small Angles (radians):**
- sin θ ≈ θ
- cos θ ≈ 1 - θ²/2
- tan θ ≈ θ`,

  'edexcel-alevel-exponentials-logarithms': `## Exponentials and Logarithms (Edexcel)

**Exponential Functions:**
- y = aˣ graphs through (0,1)
- e ≈ 2.718
- Growth/decay: y = Aeᵏᵗ

**Logarithm Laws:**
- log(xy) = log x + log y
- log(x/y) = log x - log y
- log(xⁿ) = n log x
- Change of base

**Solving Equations:**
- aˣ = b gives x = ln b/ln a
- Equations in eˣ or ln x

**Modelling:**
- Exponential processes
- Using logs to linearise
- y = axⁿ gives log y = log a + n log x`,

  'edexcel-alevel-differentiation': `## Differentiation (Edexcel)

**From First Principles:**
- f'(x) = lim[h→0] (f(x+h) - f(x))/h

**Standard Derivatives:**
- xⁿ, eˣ, ln x
- sin x, cos x, tan x
- sec x, cosec x, cot x

**Rules:**
- Chain: dy/dx = (dy/du)(du/dx)
- Product: d(uv)/dx = u(dv/dx) + v(du/dx)
- Quotient: d(u/v)/dx = [v(du/dx) - u(dv/dx)]/v²

**Implicit:**
- d(y²)/dx = 2y(dy/dx)

**Parametric:**
- dy/dx = (dy/dt)/(dx/dt)

**Applications:**
- Tangents and normals
- Stationary points
- Optimisation
- Rates of change`,

  'edexcel-alevel-integration': `## Integration (Edexcel)

**Standard Integrals:**
- ∫xⁿ dx = xⁿ⁺¹/(n+1) + c
- ∫1/x dx = ln|x| + c
- ∫eˣ dx = eˣ + c
- ∫sin x dx = -cos x + c
- ∫cos x dx = sin x + c

**Techniques:**
- Substitution
- By parts: ∫u dv = uv - ∫v du
- Partial fractions
- Trig identities

**Applications:**
- Area under curve
- Area between curves
- Trapezium rule

**Differential Equations:**
- Separation of variables
- General and particular solutions`,

  'edexcel-alevel-numerical-methods': `## Numerical Methods (Edexcel)

**Root Finding:**
- Change of sign in f(x)
- Interval bisection

**Iteration:**
- xₙ₊₁ = g(xₙ)
- Cobweb and staircase diagrams
- Convergence conditions

**Newton-Raphson:**
- xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
- Faster convergence
- May fail at f'(x) ≈ 0`,

  'edexcel-alevel-vectors': `## Vectors (Edexcel)

**Basics:**
- Column vectors and i, j, k notation
- Magnitude |a| = √(x² + y² + z²)
- Unit vectors

**Operations:**
- Addition, subtraction
- Scalar multiplication
- Parallel vectors: a = λb

**Geometry:**
- Midpoint, division in ratio
- Collinear points

**Scalar Product:**
- a · b = |a||b| cos θ
- a · b = x₁x₂ + y₁y₂ + z₁z₂
- Perpendicular: a · b = 0`,

  'edexcel-alevel-statistical-sampling': `## Statistical Sampling (Edexcel)

**Population and Sample:**
- Census vs sample
- Sampling frame
- Advantages of sampling

**Methods:**
- Simple random sampling
- Systematic sampling
- Stratified sampling
- Quota sampling
- Opportunity sampling

**Large Data Set:**
- Edexcel's specific data set
- Variable meanings
- Weather data context`,

  'edexcel-alevel-data-presentation': `## Data Presentation (Edexcel)

**Diagrams:**
- Histograms (frequency density)
- Cumulative frequency
- Box plots

**Measures of Location:**
- Mean, median, mode
- From grouped data

**Measures of Spread:**
- Range, IQR
- Variance, standard deviation
- Var(X) = E(X²) - [E(X)]²

**Outliers:**
- Q₁ - 1.5×IQR and Q₃ + 1.5×IQR

**Coding:**
- y = ax + b effects

**Bivariate Data:**
- PMCC
- Regression lines
- Interpretation`,

  'edexcel-alevel-probability': `## Probability (Edexcel)

**Basic:**
- P(A') = 1 - P(A)
- Sample spaces

**Set Notation:**
- A∩B, A∪B, A'
- Venn diagrams

**Laws:**
- Addition law
- Multiplication law
- Independence: P(A∩B) = P(A)P(B)

**Conditional:**
- P(A|B) = P(A∩B)/P(B)
- Tree diagrams`,

  'edexcel-alevel-statistical-distributions': `## Statistical Distributions (Edexcel)

**Discrete Random Variables:**
- E(X) = Σxp
- Var(X) = E(X²) - [E(X)]²

**Binomial B(n, p):**
- Conditions
- P(X = r) = ⁿCᵣpʳ(1-p)ⁿ⁻ʳ
- E(X) = np
- Var(X) = np(1-p)

**Normal N(μ, σ²):**
- Standardise: Z = (X - μ)/σ
- Tables or calculator
- Inverse normal`,

  'edexcel-alevel-hypothesis-testing': `## Hypothesis Testing (Edexcel)

**Setup:**
- H₀ and H₁
- Significance level
- One/two-tailed

**Binomial Tests:**
- Testing proportion
- Critical region
- Actual significance level

**Normal Tests:**
- X̄ ~ N(μ, σ²/n)
- Test for mean

**Correlation Tests:**
- H₀: ρ = 0
- Critical values from tables

**Conclusions:**
- Reject/Do not reject H₀
- Context interpretation`,

  'edexcel-alevel-quantities-units': `## Quantities and Units (Edexcel)

**SI Units:**
- Base: m, kg, s
- Derived: N (kg m s⁻²)

**Scalars and Vectors:**
- Scalars: mass, time, speed
- Vectors: displacement, velocity, force

**Modelling:**
- Particle model
- Smooth/rough surfaces
- Light strings`,

  'edexcel-alevel-kinematics': `## Kinematics (Edexcel)

**Graphs:**
- s-t, v-t, a-t relationships

**SUVAT:**
- v = u + at
- s = ut + ½at²
- v² = u² + 2as
- s = ½(u + v)t

**Variable Acceleration:**
- v = ds/dt, a = dv/dt
- Integration for s and v

**Projectiles:**
- Horizontal: constant velocity
- Vertical: a = g = 9.8 m/s²
- Time of flight, range, max height`,

  'edexcel-alevel-forces-newtons-laws': `## Forces and Newton's Laws (Edexcel)

**Forces:**
- Weight W = mg
- Normal reaction
- Tension, friction

**Newton's Laws:**
1. ΣF = 0 ⟹ equilibrium
2. F = ma
3. Action = Reaction

**Friction:**
- F ≤ μR
- Limiting: F = μR
- Inclined planes

**Connected Particles:**
- Pulleys
- Tension problems`,

  'edexcel-alevel-moments': `## Moments (Edexcel)

**Definition:**
- Moment = Force × perpendicular distance
- Clockwise/anticlockwise

**Equilibrium:**
- ΣMoments = 0
- ΣForces = 0

**Rigid Bodies:**
- Uniform rods: weight at centre
- Reactions at supports

**Tilting:**
- Reaction at one support = 0
- Finding critical positions`,
};

/**
 * Get difficulty guidance for Edexcel A-Level questions.
 */
function getEdexcelALevelDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Early Paper Questions (Grades 4-6):**
- Direct application of single technique
- 2-5 marks typically
- Familiar setups, clean numbers
- May include "Write down" (1 mark) or simple "Find" questions`;

    case 'medium':
      return `**Middle Paper Questions (Grades 6-8):**
- Synthesis of 2-3 concepts
- 5-8 marks typically
- Multi-step with clear progression
- Requires choosing appropriate method`;

    case 'hard':
      return `**Late Paper Questions (Grades 7-9):**
- Extended multi-step reasoning
- 8-14+ marks typically
- Proof, modelling, or complex synthesis
- Less scaffolding, students choose approach
- May include "Show that" or "Prove" with multi-part structure`;
  }
}

/**
 * Get mark range for Edexcel A-Level difficulty.
 */
function getEdexcelALevelMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 5 };
    case 'medium':
      return { min: 5, max: 8 };
    case 'hard':
      return { min: 8, max: 14 };
  }
}

/**
 * Compact prompt for fast Edexcel A-Level question generation.
 */
export function getEdexcelALevelCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getEdexcelALevelMarkRange(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 4-6): Single-step or short calculation, 2-5 marks. Direct application.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 6-8): 2-3 concepts synthesised, 5-8 marks. Clear progression.'
    : 'Late paper (Grades 7-9): Complex multi-step, proof, or modelling, 8-14 marks. Extended reasoning.';

  // Include paper context
  const paperContext = topic.paperRestriction
    ? `This topic appears on ${topic.paperRestriction}.`
    : 'This is a Pure Mathematics topic appearing on Papers 1 & 2.';

  return `Generate an Edexcel A-Level Maths question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
${paperContext}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Original A-Level standard question (not GCSE)
- University preparation level mathematics
- Include worked solution showing all steps
- Include mark scheme (M=method, A=accuracy, B=independent marks)
- Use $...$ for LaTeX math
- Use \\n for newlines in strings

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First mark","A1: Second mark"]}`;
}

/**
 * Enhanced prompt for high-quality Edexcel A-Level question generation.
 */
export function getEdexcelALevelEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getEdexcelALevelDifficultyGuidance(difficulty);
  const markRange = getEdexcelALevelMarkRange(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  // Include paper context
  const paperContext = topic.paperRestriction
    ? `\n**Paper:** This topic appears on ${topic.paperRestriction}.`
    : '';

  // Include large data set note for statistics
  const largeDataSetNote = topic.paperRestriction?.includes('Statistics')
    ? `\n**Large Data Set:** For statistics questions, you may reference contexts similar to the Edexcel large data set (weather data from various UK and international locations).`
    : '';

  return `${EDEXCEL_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL Edexcel A-Level Mathematics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}${paperContext}${largeDataSetNote}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** This must be a fresh question that could NOT be found in past papers.
2. **A-LEVEL STANDARD:** This is university preparation level, NOT GCSE.
3. **EDEXCEL STYLE:** Follow Edexcel command word conventions and mark scheme format.
4. **APPROPRIATE DIFFICULTY:** The cognitive demand must match the mark allocation.
5. **COMPLETE MARK SCHEME:** Every mark must have clear earning criteria.

## Response Format (JSON)

{
  "content": "Question text with proper formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional diagram spec object - include if question needs a visual>
}

${DIAGRAM_SCHEMA_DOCS}

## Edexcel Formatting Rules

### Question Content:
1. Context/information FIRST
2. Blank line before questions (\\n\\n)
3. Each part (a), (b), (c) on NEW LINE
4. Mark allocations: (X marks) or (X) at end of each part
5. Use $...$ for LaTeX math

### Mark Scheme (Edexcel conventions):
1. One mark per array element
2. Use M1, A1, B1 labels
3. For multi-part: "(a) M1:", "(b) A1:"
4. Include "cao" where exact answer required
5. Include "ft" where follow-through allowed
6. Include "awrt X" for answers which round to X

Generate a genuinely original Edexcel A-Level question now:`;
}

/**
 * Multi-part question prompt for Edexcel A-Level.
 */
export function getEdexcelALevelMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const topicGuidance = EDEXCEL_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getEdexcelALevelDifficultyGuidance(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);

  return `${EDEXCEL_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part Edexcel A-Level Mathematics question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles (Edexcel Style)

- Part (a) tests foundational skill, often 2-4 marks
- Part (b) builds on (a) or explores related concept
- Part (c) may require synthesis or proof
- Use "Hence" only when students MUST use previous result
- Use "Using your answer to part (a)," for explicit linking
- Total marks should be 8-14 for a ${numParts}-part A-Level question
- Each part tests distinct skill while maintaining thematic coherence

## Response Format (JSON)

{
  "content": "Question text with parts on separate lines",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark", "(a) A1: mark", "(b) M1: mark"]
}

Generate a genuinely original multi-part Edexcel A-Level question now:`;
}

/**
 * Get the appropriate prompt for Edexcel A-Level based on context.
 */
export function getEdexcelALevelPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string,
  useEnhanced: boolean = true
): string {
  if (useEnhanced) {
    return getEdexcelALevelEnhancedPrompt(topic, difficulty, subtopic);
  }
  return getEdexcelALevelCompactPrompt(topic, difficulty, subtopic);
}
