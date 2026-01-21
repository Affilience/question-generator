/**
 * Global Constraints Module
 *
 * Contains critical constraints that must be included in ALL question generation prompts:
 * - Copyright prevention
 * - Fact accuracy requirements
 * - Safety boundaries
 * - Output format specifications
 */

// ============================================================================
// COPYRIGHT PREVENTION CONSTRAINTS
// ============================================================================

export const COPYRIGHT_CONSTRAINTS = `
## CRITICAL: ORIGINALITY REQUIREMENTS

You must NEVER reproduce questions from real exam papers. Follow these rules strictly:

1. **NO COPYING**: Do not reproduce questions from past papers, specimen papers, practice papers, or any published exam materials.

2. **NOVEL CONTENT**: Generate entirely new scenarios, contexts, numbers, and wordings. Even if a question type is common (e.g., "calculate speed"), the specific context must be original.

3. **STRUCTURAL LEARNING ONLY**: You may follow exam board conventions for structure (command words, mark allocations, part labeling), but the actual question content must be your own creation.

4. **RECOGNITION CHECK**: If a question feels familiar from your training data as a real past paper question, generate something completely different instead.

5. **NO VERBATIM TEXT**: Never use exact phrases or sentences from published mark schemes, examiner reports, or official exam board materials.

Examples of what IS allowed:
- Following the pattern: "[Context]. Calculate the [quantity]." with original values
- Using official command words like "Calculate", "Explain", "Evaluate"
- Matching mark allocation conventions (e.g., 1 mark for recall, 3-4 for explanation)

Examples of what is NOT allowed:
- Copying specific scenarios from past papers (e.g., "A train travels from London to Manchester...")
- Using exact numerical values from known past paper questions
- Reproducing famous or well-known exam questions even with minor modifications
`;

// ============================================================================
// FACT ACCURACY CONSTRAINTS
// ============================================================================

export const FACT_ACCURACY_CONSTRAINTS = `
## CRITICAL: FACTUAL ACCURACY REQUIREMENTS

You must ensure 100% factual accuracy. Follow these rules:

1. **USE PROVIDED DATA ONLY**: When reference data (equations, constants, values) is provided in this prompt, use ONLY those values. Do not invent or estimate values.

2. **NO INVENTED FACTS**: Never invent:
   - Scientific constants or values
   - Historical dates or events
   - Chemical formulas or reactions
   - Biological processes or structures
   - Statistical data or research findings
   - Quotes or attributions

3. **UNCERTAINTY HANDLING**: If you are uncertain about a specific fact:
   - For calculations: Focus on the method rather than specific values
   - For sciences: Use only well-established, universally-known facts
   - For humanities: Frame questions around analysis rather than obscure facts

4. **VERIFIABLE CONTENT**: All factual claims in questions must be verifiable and accurate to the relevant specification level.

5. **SPECIFICATION BOUNDARIES**: Do not include facts or concepts beyond the specification level (e.g., don't include A-Level content in GCSE questions).
`;

// ============================================================================
// SCIENCE-SPECIFIC ACCURACY CONSTRAINTS
// ============================================================================

export const PHYSICS_ACCURACY_CONSTRAINTS = `
## PHYSICS ACCURACY REQUIREMENTS

Use ONLY these values (from AQA/Edexcel/OCR data sheets):

### Constants
| Constant | Value | Use for |
|----------|-------|---------|
| g (gravitational field strength) | 9.8 N/kg (or 10 N/kg if told) | Weight, GPE |
| Speed of light | 3 × 10⁸ m/s | EM waves |
| Speed of sound in air | 330-340 m/s | Sound calculations |
| Specific heat capacity of water | 4200 J/kg°C | Heating water |
| Specific heat capacity of aluminium | 900 J/kg°C | Heating aluminium |
| Specific heat capacity of copper | 390 J/kg°C | Heating copper |
| Specific latent heat of fusion (water) | 334,000 J/kg | Melting ice |
| Specific latent heat of vaporisation (water) | 2,260,000 J/kg | Boiling water |
| Density of water | 1000 kg/m³ | Density calculations |
| UK mains voltage | 230 V | Electrical |
| UK mains frequency | 50 Hz | AC electricity |

### Rules
- Always include units in answers
- Use 2-3 significant figures for final answers
- Show unit conversions explicitly in solutions
- Numerical answers must be physically reasonable
`;

export const CHEMISTRY_ACCURACY_CONSTRAINTS = `
## CHEMISTRY ACCURACY REQUIREMENTS

### Rules
1. **Equations must balance**: All chemical equations must have equal atoms on both sides
2. **State symbols**: Include (s), (l), (g), (aq) where appropriate
3. **Charges must balance**: Ionic equations must have equal charges
4. **Use IUPAC naming**: Follow systematic nomenclature
5. **Periodic table values**: Use values consistent with provided data sheets
6. **Organic mechanisms**: Must follow accepted arrow-pushing conventions

### Common Values
| Property | Value |
|----------|-------|
| Avogadro's number | 6.02 × 10²³ mol⁻¹ |
| Molar volume at RTP | 24 dm³ mol⁻¹ |
| Standard pressure | 100 kPa |
| Standard temperature | 298 K (25°C) |

### Do NOT:
- Invent reaction products
- Create impossible reactions
- Use incorrect oxidation states
- Misrepresent equilibrium positions
`;

export const BIOLOGY_ACCURACY_CONSTRAINTS = `
## BIOLOGY ACCURACY REQUIREMENTS

### Rules
1. **Terminology**: Use correct scientific terminology (e.g., "mitochondria" not "powerhouse")
2. **Processes**: Describe processes accurately (e.g., correct stages of mitosis)
3. **Structures**: Label structures correctly
4. **Numbers**: Use accurate values for:
   - Chromosome numbers (human = 46, gametes = 23)
   - Enzyme optimal temperatures/pH
   - Blood glucose levels (normal: 4-7 mmol/L)

### Do NOT:
- Invent species or organisms
- Create fictional biological processes
- Misrepresent genetic inheritance patterns
- Use outdated terminology
`;

// ============================================================================
// MATHS-SPECIFIC ACCURACY CONSTRAINTS
// ============================================================================

export const MATHS_ACCURACY_CONSTRAINTS = `
## MATHEMATICS QUESTION REQUIREMENTS

### CRITICAL: Question Style
Maths exam questions are PROCEDURAL, not CONCEPTUAL. Students must CALCULATE or FIND answers, not explain concepts.

### CORRECT Command Words for Maths:
- "Calculate..." (with numerical answer expected)
- "Find..." (e.g., "Find the area under the curve")
- "Work out..." (numerical result)
- "Evaluate..." (e.g., "Evaluate the integral")
- "Solve..." (for equations)
- "Show that..." (with algebraic working)
- "Hence, find..." (use previous answer)
- "Sketch..." (for graphs with key features)

### INCORRECT Question Types - DO NOT USE:
- "Why does..." questions (conceptual - NOT exam style)
- "Explain why..." questions about mathematical concepts
- "What does X represent..." questions
- "Suggest why..." questions
- Questions asking students to justify mathematical definitions
- Philosophy of mathematics questions

### Examples of CORRECT maths questions:
✓ "Find the area between the curve y=x² and the x-axis from x=0 to x=2." [4 marks]
✓ "Calculate the definite integral of 3x² + 2x from x=1 to x=4." [3 marks]
✓ "A region R is bounded by y=x², the x-axis, and x=3. Find the area of R." [4 marks]
✓ "Show that the derivative of sin(2x) is 2cos(2x)." [2 marks]
✓ "Solve the equation x² - 5x + 6 = 0." [2 marks]

### Examples of INCORRECT maths questions (DO NOT GENERATE):
✗ "Why does the area between the curve represent the integral?" - This is conceptual, not exam-style
✗ "Explain why integration is the reverse of differentiation" - This is teaching, not testing
✗ "What does the gradient of a line represent?" - Too conceptual
✗ "Suggest why these functions are defined this way" - Conceptual, not procedural

### DIAGRAMS - REQUIRED for Geometry/Trigonometry:
You MUST include a diagram specification for questions involving:
- Triangles (with labeled sides, angles, vertices)
- Circles (with labeled center, radius, points)
- Coordinate geometry (axes, points, lines, curves)
- Shapes with measurements (rectangles, polygons, etc.)
- Vectors (with arrows, labeled components)
- Any spatial/geometric scenario

Example diagram for triangle question:
"diagram": {
  "type": "geometry",
  "elements": [
    {"type": "triangle", "vertices": ["A", "B", "C"]},
    {"type": "label", "text": "7 cm", "position": "side_AB"},
    {"type": "label", "text": "10 cm", "position": "side_BC"},
    {"type": "angle", "vertex": "B", "label": "30°"}
  ]
}

### DIFFICULTY LEVELS FOR GCSE MATHS:

**EASY (Grades 1-3):**
- Single-step calculations
- Direct formula application
- Simple substitution
- Basic recall

**MEDIUM (Grades 4-5):**
- 2-3 step problems
- Formula rearrangement needed
- Some reasoning required
- Standard contexts

**HARD (Grades 6-9) - MUST include these characteristics:**
- Multi-step problem solving (4+ steps)
- Unfamiliar contexts requiring mathematical modeling
- "Show that..." proofs requiring algebraic manipulation
- Combining multiple topics (e.g., trigonometry + algebra + surds)
- Problems where the method is not obvious
- Parts that build on each other: (a) → (b) → hence (c)
- Worth 5-6+ marks typically
- May require setting up equations from word problems
- Require students to choose and justify their approach

Example GCSE HARD question (6 marks):
"A cone has base radius r and height h. The curved surface area is 100π cm².
(a) Show that h = √(10000/r² - r²) [3 marks]
(b) Hence find the value of r that maximises the volume of the cone. [3 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL MATHS:

**EASY (E/D grade):**
- Direct application of standard techniques
- Single-method problems
- Clear structure with obvious approach
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Requires selecting appropriate method
- 2-3 techniques combined
- Some algebraic manipulation
- Standard problem types with variations
- 4-6 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex multi-stage problems (5+ steps)
- Requires creative problem-solving approach
- Method not immediately obvious - student must strategize
- Combines multiple areas (e.g., calculus + trigonometry + algebra)
- Proofs requiring insight and elegant manipulation
- "Show that..." followed by "Hence, or otherwise..." questions
- Unfamiliar contexts requiring mathematical modeling
- May require working backwards or using substitutions
- Worth 8-15 marks typically
- Multi-part questions where later parts depend on earlier results
- Questions that test deep understanding, not just technique

Example A-Level HARD questions:

Pure Maths (10 marks):
"(a) Use the substitution u = √(x+1) to find ∫ x/√(x+1) dx [5 marks]
(b) The region R is bounded by the curve y = x/√(x+1), the x-axis, and the lines x=0 and x=3.
Find the exact volume of the solid formed when R is rotated 2π radians about the x-axis. [5 marks]"

Mechanics (9 marks):
"Two particles P and Q, of masses 3m and 2m respectively, are connected by a light inextensible string passing over a smooth pulley. Initially P is held at rest on a rough horizontal surface (μ = 0.4) and Q hangs freely 2m above the ground.
(a) When P is released, show that the acceleration of the system is g/10 [5 marks]
(b) Find the speed of Q when it hits the ground [2 marks]
(c) Find how much further P travels before coming to rest [2 marks]"

Statistics (8 marks):
"A random variable X follows a continuous uniform distribution on [a, b] where a < b.
(a) Given that E(X) = 5 and Var(X) = 3, find the values of a and b [4 marks]
(b) Find P(X > 6 | X > 4) [2 marks]
(c) The random variable Y = 2X - 3. Find E(Y²) [2 marks]"

### Mark Scheme Format for Maths:
- M1: Method mark (correct approach/formula)
- A1: Accuracy mark (correct numerical answer)
- B1: Independent mark (correct statement/value)
- Use "cao" for "correct answer only"
- Use "ft" for "follow through" (if previous error carried forward correctly)

### Numerical Accuracy:
- Give final answers to 3 significant figures unless otherwise specified
- Show exact values where appropriate (fractions, surds, π)
- Include units where applicable
- Use proper mathematical notation (LaTeX)
`;

// ============================================================================
// HUMANITIES ACCURACY CONSTRAINTS
// ============================================================================

export const HISTORY_ACCURACY_CONSTRAINTS = `
## HISTORY ACCURACY REQUIREMENTS

### Rules
1. **Dates**: Only use dates you are certain of. If creating practice questions, use well-known events.
2. **Events**: Do not invent historical events or misattribute actions
3. **Quotes**: Do not fabricate quotes from historical figures
4. **Causation**: Present historically-accepted cause-effect relationships
5. **Interpretation**: Acknowledge historiographical debates where relevant

### For Source Questions
- Clearly describe the source type and provenance
- Do not invent "primary sources" - describe what a real source would contain
- Frame questions around analysis skills, not obscure factual recall
`;

export const ENGLISH_LIT_ACCURACY_CONSTRAINTS = `
## ENGLISH LITERATURE ACCURACY REQUIREMENTS

### Rules
1. **Quotations**: Do not reproduce copyrighted text. Instead:
   - Describe the passage/extract context
   - Reference what happens in that section
   - State "In this extract, [character] does [action]..."

2. **Author/Text attribution**: Ensure correct author-text pairings

3. **Plot accuracy**: Accurately represent plot events, characters, themes

4. **Context**: Use historically accurate contextual information

### Question Framing
- For extract questions: "In this extract from [Act/Chapter], [brief context]..."
- Focus on analytical skills rather than recall of specific lines
`;

// ============================================================================
// SAFETY CONSTRAINTS
// ============================================================================

export const SAFETY_CONSTRAINTS = `
## SAFETY REQUIREMENTS

1. **No harmful content**: Do not generate questions involving:
   - Violence or harm
   - Illegal activities
   - Dangerous experiments (without safety warnings)
   - Discriminatory scenarios

2. **Inclusive contexts**: Use diverse, inclusive scenarios:
   - Varied names from different cultures
   - Gender-neutral contexts where appropriate
   - Accessible scenarios (not assuming physical abilities)
   - Avoid stereotypes

3. **Age-appropriate**: Content must be appropriate for:
   - GCSE: 14-16 year olds
   - A-Level: 16-18 year olds

4. **Science safety**: When describing experiments:
   - Include relevant safety precautions
   - Don't encourage unsafe practices
   - Mention appropriate PPE where relevant
`;

// ============================================================================
// OUTPUT FORMAT CONSTRAINTS
// ============================================================================

export const OUTPUT_FORMAT_CONSTRAINTS = `
## OUTPUT FORMAT REQUIREMENTS

You MUST return valid JSON matching this exact structure:

\`\`\`json
{
  "content": "Question text here",
  "marks": <integer>,
  "solution": "Step-by-step solution",
  "markScheme": ["M1: First mark", "A1: Second mark", ...],
  "diagram": <optional diagram specification object>
}
\`\`\`

### Field Requirements

1. **content** (required, string):
   - The question text with proper formatting
   - Use \\n for newlines
   - Use $...$ for LaTeX math
   - Parts labeled (a), (b), (c) on separate lines
   - Mark allocations: [X marks] or [X mark] at end of each part

2. **marks** (required, integer):
   - Total marks for the question
   - Must match sum of mark scheme entries

3. **solution** (required, string):
   - Complete worked solution
   - Step-by-step working shown
   - Final answer clearly stated with units

4. **markScheme** (required, array of strings):
   - One entry per mark
   - Format: "M1: method mark description" or "A1: accuracy mark description" or "B1: independent mark"
   - For multi-part: "(a) M1: description"
   - Length must equal marks value

5. **diagram** (optional, object):
   - Include only if question requires visual representation
   - Follow the diagram specification schema

### Do NOT:
- Include any text outside the JSON
- Use markdown code blocks around the JSON
- Include comments in the JSON
- Use trailing commas
`;

// ============================================================================
// COMBINED CONSTRAINTS FUNCTIONS
// ============================================================================

/**
 * Get all global constraints that should be included in every prompt.
 */
export function getGlobalConstraints(): string {
  return `${COPYRIGHT_CONSTRAINTS}

${FACT_ACCURACY_CONSTRAINTS}

${SAFETY_CONSTRAINTS}

${OUTPUT_FORMAT_CONSTRAINTS}`;
}

/**
 * Get subject-specific accuracy constraints.
 */
export function getSubjectAccuracyConstraints(subject: string): string {
  const constraints: Record<string, string> = {
    'physics': PHYSICS_ACCURACY_CONSTRAINTS,
    'chemistry': CHEMISTRY_ACCURACY_CONSTRAINTS,
    'biology': BIOLOGY_ACCURACY_CONSTRAINTS,
    'maths': MATHS_ACCURACY_CONSTRAINTS,
    'further-maths': MATHS_ACCURACY_CONSTRAINTS,
    'history': HISTORY_ACCURACY_CONSTRAINTS,
    'english-literature': ENGLISH_LIT_ACCURACY_CONSTRAINTS,
  };

  return constraints[subject] || '';
}

/**
 * Get combined constraints for a specific subject.
 */
export function getAllConstraints(subject: string): string {
  const globalConstraints = getGlobalConstraints();
  const subjectConstraints = getSubjectAccuracyConstraints(subject);

  if (subjectConstraints) {
    return `${globalConstraints}

${subjectConstraints}`;
  }

  return globalConstraints;
}
