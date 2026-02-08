import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
} from './prompts-common';


/**
 * OCR A-Level Mathematics A (H240) Question Generation Prompts.
 * Based on analysis of OCR past papers 2018-2024.
 *
 * Sources:
 * - https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/
 * - https://www.ocr.org.uk/Images/308723-specification-accredited-a-level-gce-mathematics-a-h240.pdf
 * - https://www.ocr.org.uk/Images/533967-a-level-maths-command-words-poster-a4-size.pdf
 */

// ============================================================================
// OCR A-LEVEL ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const OCR_ALEVEL_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Mathematics Assessment Objectives

Assessment objectives are set by Ofqual and are the same across all A-level Mathematics specifications.

### AO1: Use and Apply Standard Techniques (~50%)
Students should be able to:
- Select and correctly carry out routine procedures
- Accurately recall facts, terminology and definitions

**AO1 Question Characteristics:**
- Direct application of standard techniques
- "Find", "Calculate", "Write down" commands
- Standard procedures with clear method

### AO2: Reason, Interpret and Communicate Mathematically (~25%)
Students should be able to:
- Construct rigorous mathematical arguments (including proofs)
- Make deductions and inferences
- Assess the validity of mathematical arguments
- Explain their reasoning
- Use mathematical language and notation correctly

**AO2 Question Characteristics:**
- "Prove", "Show that", "Explain", "Verify" commands
- Constructing mathematical arguments
- Questions requiring justification

### AO3: Solve Problems Within Mathematics and Other Contexts (~25%)
Students should be able to:
- Translate problems into mathematical processes
- Interpret solutions in context and evaluate accuracy
- Translate situations into mathematical models
- Evaluate modelling outcomes and refine models

**AO3 Question Characteristics:**
- Modelling problems (mechanics, statistics)
- Unfamiliar contexts requiring interpretation
- Multi-step problems where method selection is required

### Weighting by Paper
| Paper | Content | Total |
|-------|---------|-------|
| Paper 1 (H240/01) | Pure Mathematics | 100 marks |
| Paper 2 (H240/02) | Pure + Statistics | 100 marks |
| Paper 3 (H240/03) | Pure + Mechanics | 100 marks |
| **Overall** | | **300 marks** |
`;

// ============================================================================
// OCR OFFICIAL COMMAND WORDS
// ============================================================================

const OCR_ALEVEL_COMMAND_WORDS = `
## OCR A-Level Mathematics Command Words (Official)

### Calculation Commands
| Command | Definition | Working? |
|---------|-----------|----------|
| **Find** | Calculate with working shown | Yes |
| **Calculate** | Explicit numerical computation | Yes |
| **Write down** | Answer alone suffices | No |
| **State** | Direct answer without justification | No |
| **Determine** | Work out through calculation or reasoning | Yes |
| **Evaluate** | Find a numerical value | Yes |

### Proof and Reasoning Commands
| Command | Definition |
|---------|-----------|
| **Prove** | Provide a formal mathematical argument to demonstrate validity |
| **Show that** | Answer is given; prove it is correct using clear steps |
| **Verify** | Substitute given values to demonstrate the truth of a statement |
| **Explain** | Mathematical reasoning required |
| **Justify** | Support with mathematical reasons |

### Linking Commands
| Command | Definition |
|---------|-----------|
| **Hence** | Next step MUST be based on what has gone before |
| **Hence, or otherwise** | Previous work could form starting point, but alternatives accepted |
| **Deduce** | Derive from earlier work |

### Graph/Diagram Commands
| Command | Definition |
|---------|-----------|
| **Sketch** | Show main features, not accurately plotted |
| **Plot** | Mark points accurately on the graph |
| **Draw** | Accurate diagram required |

### Analysis Commands
| Command | Definition |
|---------|-----------|
| **Interpret** | Explain meaning in context |
| **Comment** | Make relevant mathematical observations |
| **Exact** | Answer must NOT be given in rounded form (use √, e, π) |

### Special Instructions
- **"In this question you must show detailed reasoning"** - Method must be given explicitly
- **"Show"** or **"Determine"** - Method must be given explicitly, even if answer is correct
`;

// ============================================================================
// OCR-SPECIFIC CONTENT (Different from AQA/Edexcel)
// ============================================================================

const OCR_ALEVEL_SPECIFICATION_CONTENT = `
## OCR A-Level Specification Content

### Algebra
- **Challenging algebraic manipulation** required
- **Algebra-heavy exams** requiring strong problem-solving abilities

### Statistics
- **Greater focus on hypothesis testing** in statistics
- **Mean/variance of linear combinations of discrete random variables** is examinable
- **Normal approximation to binomial**: "light-touch" approach (NO continuity correction required)
- **Large Data Set** - questions assume familiarity with OCR's pre-release data set

### Calculus
- **Area between curve and y-axis** explicitly tested
- **Rectangles method** for approximating bounds

### Mechanics
- **Moments problems in 2-D**
- **Emphasis on connected particles and forces**

### Paper Structure
- Paper 1: Pure Mathematics only (2 hours, 100 marks)
- Paper 2: Pure Mathematics and Statistics (2 hours, 100 marks)
- Paper 3: Pure Mathematics and Mechanics (2 hours, 100 marks)
- Pure Mathematics tested on ALL papers throughout
- Statistics and Mechanics on SEPARATE papers
- Applied content always mixed with Pure (not separate sections)
`;

// ============================================================================
// OCR MARK SCHEME CONVENTIONS
// ============================================================================

const OCR_ALEVEL_MARK_SCHEME = `
## OCR A-Level Mark Scheme Conventions

### Mark Types
| Mark | Type | Description |
|------|------|-------------|
| **M** | Method | Correct approach attempted, not lost for numerical errors |
| **A** | Accuracy | Correct execution, dependent on M marks |
| **B** | Independent | Correct result not dependent on method |
| **E** | Explanation | Clear mathematical explanation required |

### Method Mark Rules
- A suitable method has been selected and applied
- Method marks are NOT usually lost for numerical errors, algebraic slips or errors in units
- A method mark may usually be implied by a correct answer unless:
  - The question includes "you must show detailed reasoning"
  - The command words are "Determine" or "Show that"
  - Some other indication that the method must be given explicitly

### Common Abbreviations
| Abbreviation | Meaning |
|--------------|---------|
| **cao** | Correct answer only (no follow-through) |
| **ft** | Follow through from earlier error |
| **oe** | Or equivalent |
| **soi** | Seen or implied |
| **www** | Without wrong working |
| **SC** | Special case |
| **isw** | Ignore subsequent working |
`;

const OCR_ALEVEL_QUESTION_PRINCIPLES = `# OCR A-Level Mathematics A: Question Construction Principles

${OCR_ALEVEL_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_COMMAND_WORDS}

${OCR_ALEVEL_SPECIFICATION_CONTENT}

${OCR_ALEVEL_MARK_SCHEME}

You are generating an original A-Level Mathematics question that could plausibly appear on a future OCR exam. The question must be genuinely original—not a copy of a past paper question with different numbers, but a fresh application of mathematical concepts that exhibits authentic OCR characteristics.

## Exam Structure

OCR A-Level Mathematics A (H240) consists of three papers:
- Paper 1 (H240/01): Pure Mathematics - 2 hours, 100 marks
- Paper 2 (H240/02): Pure Mathematics AND Statistics - 2 hours, 100 marks
- Paper 3 (H240/03): Pure Mathematics AND Mechanics - 2 hours, 100 marks

All papers are calculator papers. Students have access to the OCR Formulae Booklet.

**OCR A-Specific Characteristics (vs AQA/Edexcel):**
- MORE CHALLENGING ALGEBRAIC MANIPULATION than other boards
- Algebra-heavy exams requiring strong problem-solving abilities
- Greater focus on HYPOTHESIS TESTING in statistics
- Mean/variance of linear combinations of discrete random variables is examinable
- Normal approximation to binomial: "light-touch" - NO continuity correction required
- Includes area between curve and y-axis
- Uses rectangles method for approximating bounds
- Moments problems in 2-D (like Edexcel)
- More emphasis on connected particles and forces in mechanics
- Paper structure: Pure mixed with Applied (like AQA, unlike Edexcel)
- Considered more demanding overall due to algebra focus

## Large Data Set

For Statistics questions (Paper 2), students are expected to be familiar with the OCR pre-release large data set. Questions may assume knowledge of:
- The context and meaning of variables in the data set
- How to interpret and analyse data from the set
- Common calculations and comparisons using this data

## Assessment Objectives

- AO1 (50%): Use and apply standard techniques
- AO2 (25%): Reason, interpret, and communicate mathematically
- AO3 (25%): Solve problems in mathematics and other contexts

## Question Type Distribution

| Question Range | Type | Marks per Q | Format |
|---------------|------|-------------|--------|
| Q1-3 | Short Answer | 2-4 marks | Single concept, direct application |
| Q4-7 | Medium | 5-8 marks | 2-3 steps, some reasoning |
| Q8-10 | Multi-part | 8-12 marks | Connected parts, scaffolded |
| Q11-13 | Extended | 10-16 marks | Complex synthesis, modelling, proof |

## OCR Command Word Semantics

**Calculation commands:**
- "Find" — Calculate with working shown
- "Calculate" — Explicit numerical computation
- "Write down" — No working needed, typically 1 mark
- "State" — Direct answer without justification
- "Determine" — Work out through calculation or reasoning

**Proof/Reasoning commands:**
- "Show that" — Answer is given; prove it is correct
- "Prove" — Formal mathematical argument required
- "Verify" — Confirm by substitution or direct check
- "Explain" — Mathematical reasoning required
- "Justify" — Support with mathematical reasons

**Linking commands:**
- "Hence" — MUST use the previous result
- "Hence, or otherwise" — Previous result helpful but alternatives accepted
- "Using your answer to part..." — Explicitly linked
- "Deduce" — Derive from earlier work

**Analysis commands:**
- "Sketch" — Show main features, not accurately plotted
- "Interpret" — Explain meaning in context
- "Comment" — Make relevant mathematical observations

## Mark Allocation Logic

| Marks | Characteristics |
|-------|----------------|
| 1 | Single recall or simple calculation |
| 2-3 | Two-step calculation or basic proof |
| 4-5 | Multi-step with method and accuracy |
| 6-7 | Extended calculation or proof |
| 8+ | Complex problem solving, multiple stages |

## OCR Mark Scheme Conventions

**Mark types:**
- M marks (Method): Correct approach attempted
- A marks (Accuracy): Correct execution, dependent on M
- B marks (Independent): Correct result not dependent on method
- E marks (Explanation): Clear mathematical explanation

**OCR-specific annotations:**
- "cao" = correct answer only
- "ft" = follow through from earlier error
- "oe" = or equivalent
- "soi" = seen or implied
- "www" = without wrong working
- "SC" = special case

## Difficulty Calibration

**Early Questions (Q1-4):**
- Direct application of standard techniques
- Familiar contexts and setups
- Grade 4-6 standard
- 2-5 marks

**Middle Questions (Q5-8):**
- Combining 2-3 concepts
- Some unfamiliar setups
- Requires method selection
- Grade 6-8 standard
- 5-9 marks

**Late Questions (Q9-13):**
- Extended multi-step problems
- Proof and modelling
- Less scaffolding
- Grade 7-9 standard
- 8-16 marks`;

const OCR_ALEVEL_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-proof': `## Proof (OCR Style)

**Proof by Deduction:**
- Logical chain from premises to conclusion
- Each step must be justified
- Algebraic manipulation to establish results

**Proof by Exhaustion:**
- Test all possible cases
- Common: small number of integer cases
- Must show work for EVERY case

**Proof by Contradiction:**
- "Assume, for contradiction, that..."
- Derive logical impossibility
- Classic examples: √2 irrational, infinitely many primes
- State assumption clearly

**Disproof by Counter-example:**
- Single case that violates the statement
- Often 1-2 mark questions`,

  'ocr-alevel-algebra': `## Algebra and Functions (OCR)

**Indices and Surds:**
- All index laws
- Rationalising denominators
- Simplifying surd expressions

**Quadratics:**
- Completing the square
- Discriminant analysis
- Graphical interpretation

**Polynomials:**
- Factor theorem: f(a) = 0 ⟹ (x - a) is factor
- Algebraic division
- Remainder theorem

**Partial Fractions:**
- Linear factors
- Repeated linear factors
- Improper fractions

**Modulus Function:**
- Graphs of |f(x)|
- Solving |f(x)| = g(x)
- Modulus inequalities

**Functions:**
- Domain, range, notation
- Composite functions
- Inverse functions`,

  'ocr-alevel-coordinate-geometry': `## Coordinate Geometry (OCR)

**Straight Lines:**
- y - y₁ = m(x - x₁)
- Parallel: equal gradients
- Perpendicular: m₁m₂ = -1

**Circles:**
- (x - a)² + (y - b)² = r²
- Complete square for centre/radius
- Tangent perpendicular to radius
- Properties of chords

**Parametric Equations:**
- Converting to Cartesian form
- Finding dy/dx parametrically
- Points of intersection`,

  'ocr-alevel-sequences-series': `## Sequences and Series (OCR)

**Binomial Expansion:**
- (a + b)ⁿ for positive integer n
- (1 + x)ⁿ for rational n, |x| < 1
- Finding coefficients
- Approximations

**Arithmetic Series:**
- uₙ = a + (n-1)d
- Sₙ = n/2[2a + (n-1)d]

**Geometric Series:**
- uₙ = arⁿ⁻¹
- Sₙ = a(1 - rⁿ)/(1 - r)
- S∞ = a/(1 - r), |r| < 1

**Sigma Notation:**
- Σ notation for sums
- Standard results`,

  'ocr-alevel-trigonometry': `## Trigonometry (OCR)

**Exact Values:**
- Standard angles: 0°, 30°, 45°, 60°, 90°
- CAST diagram

**Radians:**
- Arc length s = rθ
- Sector area A = ½r²θ

**Identities:**
- tan θ = sin θ/cos θ
- sin²θ + cos²θ = 1
- sec, cosec, cot and their identities

**Compound Angles:**
- sin(A ± B), cos(A ± B), tan(A ± B)
- Double angle formulae

**R-formula:**
- a sin θ + b cos θ = R sin(θ + α)
- Finding max/min and solving equations

**Small Angles:**
- sin θ ≈ θ, cos θ ≈ 1 - θ²/2, tan θ ≈ θ`,

  'ocr-alevel-exponentials-logarithms': `## Exponentials and Logarithms (OCR)

**Exponential Functions:**
- y = aˣ, y = eˣ graphs
- e ≈ 2.718
- Growth and decay

**Logarithm Laws:**
- log(xy) = log x + log y
- log(x/y) = log x - log y
- log(xⁿ) = n log x
- Change of base

**Solving Equations:**
- Using logarithms
- Equations in eˣ

**Modelling:**
- Exponential processes
- Linearising data`,

  'ocr-alevel-differentiation': `## Differentiation (OCR)

**First Principles:**
- f'(x) = lim[h→0] (f(x+h) - f(x))/h

**Standard Derivatives:**
- xⁿ, eˣ, ln x
- sin x, cos x, tan x
- sec x, cosec x, cot x

**Rules:**
- Chain rule
- Product rule
- Quotient rule

**Implicit and Parametric:**
- Implicit differentiation
- dy/dx = (dy/dt)/(dx/dt)

**Applications:**
- Tangents and normals
- Stationary points
- Optimisation
- Rates of change`,

  'ocr-alevel-integration': `## Integration (OCR)

**Standard Integrals:**
- xⁿ, eˣ, 1/x
- sin x, cos x, sec²x

**Techniques:**
- Substitution
- By parts
- Partial fractions
- Trig identities

**Applications:**
- Area under/between curves
- Trapezium rule

**Differential Equations:**
- Separation of variables
- General and particular solutions`,

  'ocr-alevel-numerical-methods': `## Numerical Methods (OCR)

**Locating Roots:**
- Change of sign method
- Sign change in continuous function

**Iteration:**
- xₙ₊₁ = g(xₙ)
- Cobweb/staircase diagrams
- Convergence

**Newton-Raphson:**
- xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
- When it fails`,

  'ocr-alevel-vectors': `## Vectors (OCR)

**Basics:**
- 2D and 3D vectors
- Column and i, j, k notation
- Magnitude and unit vectors

**Operations:**
- Addition, subtraction
- Scalar multiplication
- Parallel vectors

**Geometry:**
- Position vectors
- Midpoint, ratio division
- Collinearity

**Scalar Product:**
- a · b = |a||b| cos θ
- Perpendicular: a · b = 0`,

  'ocr-alevel-statistical-sampling': `## Statistical Sampling (OCR)

**Population and Sample:**
- Census vs sample
- Sampling frame

**Methods:**
- Simple random
- Systematic
- Stratified
- Quota, opportunity

**Large Data Set:**
- OCR's specific data set
- Context familiarity`,

  'ocr-alevel-data-presentation': `## Data Presentation (OCR)

**Diagrams:**
- Histograms
- Cumulative frequency
- Box plots

**Measures:**
- Mean, median, mode
- Variance, standard deviation
- IQR, outliers

**Coding:**
- Linear coding effects

**Bivariate Data:**
- PMCC
- Regression lines`,

  'ocr-alevel-probability': `## Probability (OCR)

**Basic:**
- P(A') = 1 - P(A)
- Sample spaces

**Set Notation:**
- A∩B, A∪B, A'
- Venn diagrams

**Laws:**
- Addition and multiplication laws
- Independence

**Conditional:**
- P(A|B) = P(A∩B)/P(B)
- Tree diagrams`,

  'ocr-alevel-statistical-distributions': `## Statistical Distributions (OCR)

**Discrete Random Variables:**
- E(X), Var(X)

**Binomial B(n, p):**
- Conditions
- P(X = r) formula
- E(X) = np, Var(X) = np(1-p)

**Normal N(μ, σ²):**
- Standardising Z = (X - μ)/σ
- Tables/calculator
- Inverse normal`,

  'ocr-alevel-hypothesis-testing': `## Hypothesis Testing (OCR)

**Setup:**
- H₀ and H₁
- Significance level
- One/two-tailed

**Binomial Tests:**
- Testing proportion
- Critical region

**Normal Tests:**
- X̄ ~ N(μ, σ²/n)
- Test for mean

**Correlation Tests:**
- H₀: ρ = 0
- Critical values

**Conclusions:**
- Context interpretation
- Type I/II errors`,

  'ocr-alevel-quantities-units': `## Quantities and Units (OCR)

**SI Units:**
- Base: m, kg, s
- Derived: N (kg m s⁻²)

**Scalars and Vectors:**
- Distinguishing between them
- Representing vectors

**Modelling:**
- Particle model
- Modelling assumptions`,

  'ocr-alevel-kinematics': `## Kinematics (OCR)

**Graphs:**
- s-t, v-t, a-t relationships
- Gradients and areas

**SUVAT:**
- v = u + at
- s = ut + ½at²
- v² = u² + 2as
- s = ½(u + v)t

**Variable Acceleration:**
- v = ds/dt, a = dv/dt
- Integration

**Projectiles:**
- Component analysis
- Time of flight, range, max height`,

  'ocr-alevel-forces-newtons-laws': `## Forces and Newton's Laws (OCR)

**Forces:**
- Weight W = mg
- Normal reaction, tension
- Friction F ≤ μR

**Newton's Laws:**
1. Equilibrium if ΣF = 0
2. F = ma
3. Action = Reaction

**Friction:**
- Limiting friction F = μR
- Inclined planes

**Connected Particles:**
- Pulleys
- Tow bars`,

  'ocr-alevel-moments': `## Moments (OCR)

**Definition:**
- Moment = Force × perpendicular distance
- Clockwise/anticlockwise

**Equilibrium:**
- Sum of moments = 0
- Principle of moments

**Rigid Bodies:**
- Uniform rods
- Reactions at supports

**Tilting:**
- Finding critical positions
- Ladders and hinges`,
};

/**
 * Get difficulty guidance for OCR A-Level questions.
 */
function getOCRALevelDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Early Paper Questions (Grades 4-6):**
- Direct application of standard techniques
- 2-5 marks typically
- Familiar contexts, clean numbers
- "Write down" or straightforward "Find" questions`;

    case 'medium':
      return `**Middle Paper Questions (Grades 6-8):**
- Combining 2-3 concepts
- 5-9 marks typically
- Multi-step with clear progression
- Some method selection required`;

    case 'hard':
      return `**Late Paper Questions (Grades 7-9):**
- Extended multi-step problems
- 8-16 marks typically
- Proof, modelling, or complex synthesis
- Less scaffolding
- May include extended "Show that" or "Prove"`;
  }
}

/**
 * Get mark range for OCR A-Level difficulty.
 */
function getOCRALevelMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 5 };
    case 'medium':
      return { min: 5, max: 9 };
    case 'hard':
      return { min: 8, max: 16 };
  }
}

/**
 * Compact prompt for fast OCR A-Level question generation.
 */
export function getOCRALevelCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getOCRALevelMarkRange(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 4-6): Single technique, 2-5 marks. Direct application.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 6-8): 2-3 concepts, 5-9 marks. Clear progression.'
    : 'Late paper (Grades 7-9): Complex multi-step, proof, or modelling, 8-16 marks. Extended reasoning.';

  const paperContext = topic.paperRestriction
    ? `This topic appears on ${topic.paperRestriction}.`
    : 'This is a Pure Mathematics topic appearing on Papers 1, 2, and 3.';

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `
${varietyInstructions}

Generate an OCR A-Level Maths question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
${paperContext}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Original A-Level standard question (not GCSE)
- University preparation level mathematics
- Include worked solution showing all steps
- Include mark scheme (M=method, A=accuracy, B=independent, E=explanation marks)
- Use $...$ for LaTeX math
- Use \\n for newlines in strings

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: First mark","A1: Second mark"]}`;
}

/**
 * Enhanced prompt for high-quality OCR A-Level question generation.
 */
export function getOCRALevelEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = OCR_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getOCRALevelDifficultyGuidance(difficulty);
  const markRange = getOCRALevelMarkRange(difficulty);
  const varietyInstructions = getRandomVarietyInstructions();

  const paperContext = topic.paperRestriction
    ? `\n**Paper:** This topic appears on ${topic.paperRestriction}.`
    : '';

  const largeDataSetNote = topic.paperRestriction?.includes('Paper 2')
    ? `\n**Large Data Set:** For statistics questions, you may reference contexts similar to the OCR large data set.`
    : '';

  return `${OCR_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a genuinely ORIGINAL OCR A-Level Mathematics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}${paperContext}${largeDataSetNote}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** This must be a fresh question that could NOT be found in past papers.
2. **A-LEVEL STANDARD:** This is university preparation level, NOT GCSE.
3. **OCR STYLE:** Follow OCR command word conventions and mark scheme format.
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

## OCR Formatting Rules

### Question Content:
1. Context/information FIRST
2. Blank line before questions (\\n\\n)
3. Each part (a), (b), (c) on NEW LINE
4. Mark allocations: [X] at end of each part
5. Use $...$ for LaTeX math

### Mark Scheme (OCR conventions):
1. One mark per array element
2. Use M1, A1, B1, E1 labels
3. For multi-part: "(a) M1:", "(b) A1:"
4. Include "cao" where exact answer required
5. Include "ft" or "oe" where appropriate
6. Include "soi" for seen or implied

Generate a genuinely original OCR A-Level question now:`;
}

/**
 * Multi-part question prompt for OCR A-Level.
 */
export function getOCRALevelMultiPartPrompt(
  topic: Topic,
  difficulty: Difficulty,
  numParts: number = 3
): string {
  const topicGuidance = OCR_ALEVEL_TOPIC_GUIDANCE[topic.id] || '';
  const difficultyGuidance = getOCRALevelDifficultyGuidance(difficulty);
  const varietyInstructions = getRandomVarietyInstructions();

  return `${OCR_ALEVEL_QUESTION_PRINCIPLES}

${topicGuidance}

---

${varietyInstructions}

---

## Your Task

Generate a multi-part OCR A-Level Mathematics question with ${numParts} connected parts.

**Topic:** ${topic.name}
**Difficulty Level:**
${difficultyGuidance}

## Multi-Part Question Principles (OCR Style)

- Part (a) establishes foundation, often 2-4 marks
- Part (b) builds on (a) or explores related concept
- Part (c) may require synthesis, proof, or application
- Use "Hence" only when students MUST use previous result
- Total marks should be 8-14 for a ${numParts}-part A-Level question
- Each part tests distinct skill while maintaining coherence

## Response Format (JSON)

{
  "content": "Question text with parts on separate lines",
  "marks": <total marks as integer>,
  "solution": "Worked solution for each part",
  "markScheme": ["(a) M1: mark", "(a) A1: mark", "(b) M1: mark"]
}

Generate a genuinely original multi-part OCR A-Level question now:`;
}

/**
 * Get the appropriate prompt for OCR A-Level based on context.
 */
export function getOCRALevelPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string,
  useEnhanced: boolean = true
): string {
  if (useEnhanced) {
    return getOCRALevelEnhancedPrompt(topic, difficulty, subtopic);
  }
  return getOCRALevelCompactPrompt(topic, difficulty, subtopic);
}
