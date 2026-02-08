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
- Creating multi-part questions with parts labeled a), b), c), d) as per exam conventions

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

### DIAGRAMS - REQUIRED for Physics:
You MUST include a diagram specification for questions involving:
- Circuit diagrams (with components, ammeters, voltmeters)
- Force diagrams (arrows with labels, angles)
- Ray diagrams (mirrors, lenses, refraction)
- Wave diagrams (wavelength, amplitude labeled)
- Motion graphs (distance-time, velocity-time)
- Field patterns (magnetic, electric, gravitational)

### DIAGRAM SIZE AND POSITIONING STANDARDS:
Follow these EXACT specifications for all diagrams:

**Canvas Sizing:**
- Set width/height to match actual element bounds (e.g., if elements span x: 0-12, y: 0-10, use width: 12, height: 10)
- NEVER use arbitrary large values like width: 240, height: 220

**Element Sizing:**
- Circles: radius: 1 (standard), radius: 0.5 (small details)
- Rectangles: width: 2, height: 1.5 (standard), width: 1.5, height: 1 (compact)
- Text: fontSize: 10 (standard), fontSize: 9 (small), fontSize: 12 (headings)

**Text Positioning:**
- Position text AWAY from shape centers to avoid overlap
- For circles at (x, y), place labels at (x, y-1.5) or (x+1.2, y)
- Use anchor: 'middle' for centered text, 'start'/'end' for aligned text

**Spacing Requirements:**
- Minimum 2 units between adjacent elements
- Minimum 1.5 units between text and shapes
- Leave 1 unit margin from canvas edges

**Triangle Example:**
- Triangle with vertices at (2,8), (8,8), (5,3)
- Labels A, B, C positioned away from vertices to avoid overlap
- Canvas size: width 10, height 9 (matching element bounds 1.5-8.5 horizontally, 2.5-8.5 vertically)
- Text positioned outside the triangle at (1.5,8.5), (8.5,8.5), (5,2.5)

### DIFFICULTY LEVELS FOR GCSE PHYSICS:

**EASY (Grades 1-3):**
- Single equation calculations (e.g., V = IR, P = IV)
- Direct substitution with values given
- Basic recall of definitions
- Identifying components or phenomena
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Two-step calculations (e.g., find current then power)
- Rearranging equations before substituting
- Describing processes with some reasoning
- Interpreting graphs to find values
- Unit conversions required
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Multi-step problems combining 2-3 equations
- Unfamiliar contexts requiring physics application
- Explaining phenomena with multiple linked factors
- "Show that..." calculations with algebraic manipulation
- Evaluating experimental methods and suggesting improvements
- Analyzing and explaining graph shapes
- Synoptic questions linking different topics
- 4-6 marks typically

Example GCSE HARD question (6 marks):
"A 2 kW kettle is used to heat 1.5 kg of water from 20°C.
(a) Calculate the energy needed to raise the water temperature to 100°C. [2 marks]
(b) Calculate the minimum time to boil the water. [2 marks]
(c) The actual time taken is longer. Explain why, with reference to energy transfers. [2 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL PHYSICS:

**EASY (E/D grade):**
- Direct application of single equations
- Standard calculations with clear method
- Basic recall of theory
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Multi-step calculations
- Selecting appropriate equations
- Explaining phenomena with physics principles
- Graph analysis with calculations
- 4-6 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex multi-stage problems (4+ steps)
- Combining equations from different topics
- Deriving relationships from first principles
- "Show that..." proofs with algebraic manipulation
- Synoptic questions spanning mechanics, fields, waves, etc.
- Unfamiliar contexts requiring physics modeling
- Evaluating experimental procedures critically
- Resolving vectors in complex scenarios
- Calculus-based problems (rates of change, areas)
- 6-12 marks typically

Example A-Level HARD questions:

Mechanics (10 marks):
"A ball is projected from ground level with speed u at angle θ to the horizontal.
(a) Show that the maximum height reached is u²sin²θ/2g [3 marks]
(b) Show that the horizontal range is u²sin2θ/g [3 marks]
(c) For a fixed initial speed u, find the angle that gives maximum range. [2 marks]
(d) A ball is thrown at 25 m/s. Find two possible angles to hit a target 50 m away at the same height. [2 marks]"

Fields (8 marks):
"A charged oil drop of mass 9.79 × 10⁻¹⁵ kg is held stationary between two horizontal parallel plates separated by 5 mm with a p.d. of 500 V.
(a) Calculate the charge on the drop and express it in terms of e. [4 marks]
(b) The p.d. is suddenly removed. Describe and explain the subsequent motion of the drop, including any assumptions you make. [4 marks]"

Waves (6 marks):
"Light of wavelength 600 nm passes through a double slit with separation 0.5 mm. A screen is placed 2 m from the slits.
(a) Calculate the fringe spacing. [2 marks]
(b) One slit is covered with a thin film that reduces intensity by 50%. Describe and explain the effect on the interference pattern. [4 marks]"
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

### DIAGRAMS - REQUIRED for Chemistry:
You MUST include a diagram specification for questions involving:
- Dot-and-cross diagrams (bonding)
- Structural formulas (organic compounds)
- Apparatus setups (distillation, titration, electrolysis)
- Energy level diagrams (enthalpy changes)
- Graphs (rate curves, titration curves)

### DIAGRAM SIZE AND POSITIONING STANDARDS:
Follow these EXACT specifications for all diagrams:

**Canvas Sizing:**
- Set width/height to match actual element bounds (e.g., if elements span x: 0-12, y: 0-10, use width: 12, height: 10)
- NEVER use arbitrary large values like width: 240, height: 220

**Element Sizing:**
- Circles: radius: 1 (standard), radius: 0.5 (small details)
- Rectangles: width: 2, height: 1.5 (standard), width: 1.5, height: 1 (compact)
- Text: fontSize: 10 (standard), fontSize: 9 (small), fontSize: 12 (headings)

**Text Positioning:**
- Position text AWAY from shape centers to avoid overlap
- For circles at (x, y), place labels at (x, y-1.5) or (x+1.2, y)
- Use anchor: 'middle' for centered text, 'start'/'end' for aligned text

**Spacing Requirements:**
- Minimum 2 units between adjacent elements
- Minimum 1.5 units between text and shapes
- Leave 1 unit margin from canvas edges

**Triangle Example:**
- Triangle with vertices at (2,8), (8,8), (5,3)
- Labels A, B, C positioned away from vertices to avoid overlap
- Canvas size: width 10, height 9 (matching element bounds 1.5-8.5 horizontally, 2.5-8.5 vertically)
- Text positioned outside the triangle at (1.5,8.5), (8.5,8.5), (5,2.5)

### DIFFICULTY LEVELS FOR GCSE CHEMISTRY:

**EASY (Grades 1-3):**
- Basic recall of facts and definitions
- Simple balancing of equations
- Identifying elements, compounds, mixtures
- Reading values from periodic table
- Single-step calculations (Mr, simple moles)
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Balancing more complex equations
- Explaining reactions with some reasoning
- Moles calculations with formula manipulation
- Describing trends in periodic table
- Predicting products of reactions
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Multi-step moles calculations (mass → moles → volume → concentration)
- Limiting reagent calculations
- Explaining observations with particle-level detail
- Evaluating experimental methods and suggesting improvements
- Comparing and explaining trends across groups/periods
- Deducing unknown substances from experimental results
- Extended writing with QWC (quality of written communication)
- 4-6 marks typically

Example GCSE HARD question (6 marks):
"25.0 cm³ of 0.10 mol/dm³ sodium hydroxide solution exactly neutralises 20.0 cm³ of sulfuric acid.
(a) Calculate the concentration of the sulfuric acid in mol/dm³. [3 marks]
(b) Calculate the mass of sodium sulfate produced. [2 marks]
(c) The student repeated the experiment and obtained a lower value. Suggest one source of error. [1 mark]"

### DIFFICULTY LEVELS FOR A-LEVEL CHEMISTRY:

**EASY (E/D grade):**
- Direct application of formulas
- Simple moles calculations
- Basic organic nomenclature
- Recall of standard reactions
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Multi-step calculations
- Explaining mechanisms with curly arrows
- Predicting products and conditions
- Interpreting spectra with guidance
- 4-6 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex multi-step calculations (Kp, Kc, electrode potentials)
- Deriving rate equations from experimental data
- Multi-step organic synthesis with reagents and conditions
- Interpreting combined spectroscopic data (IR, MS, NMR)
- Evaluating experimental procedures and errors
- Explaining anomalies in trends
- Synoptic questions linking organic, inorganic, and physical
- Unfamiliar contexts requiring chemistry application
- 6-12 marks typically

Example A-Level HARD questions:

Equilibrium (9 marks):
"Nitrogen dioxide dimerises according to: 2NO₂(g) ⇌ N₂O₄(g)
At 400 K, a flask of volume 1.0 dm³ initially contains 0.20 mol NO₂ at equilibrium with N₂O₄.
The total pressure at equilibrium is 250 kPa.
(a) Calculate the partial pressure of each gas. [3 marks]
(b) Calculate Kp for this reaction, stating its units. [3 marks]
(c) The temperature is increased. Explain the effect on Kp and the position of equilibrium. [3 marks]"

Organic Synthesis (10 marks):
"Devise a synthesis of CH₃CH(OH)CH₂NH₂ starting from propan-1-ol.
For each step:
- State the reagents and conditions
- Draw the structural formula of each intermediate
- Name the type of reaction occurring
[10 marks]"

Electrochemistry (8 marks):
"Using standard electrode potentials:
Cu²⁺/Cu = +0.34 V, Fe³⁺/Fe²⁺ = +0.77 V, MnO₄⁻/Mn²⁺ = +1.51 V
(a) Explain why acidified potassium manganate(VII) oxidises Fe²⁺ but not Cu. [3 marks]
(b) Calculate the EMF of a cell constructed from Cu²⁺/Cu and Fe³⁺/Fe²⁺ half-cells. [2 marks]
(c) Write the overall cell reaction and predict what you would observe. [3 marks]"
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

### DIAGRAMS - REQUIRED for Biology:
You MUST include a diagram specification for questions involving:
- Cell structures (labeled organelles)
- Organ systems (heart, kidney, lung diagrams)
- Genetic crosses (Punnett squares)
- Graphs (enzyme activity, population growth)
- Food webs and pyramids
- Microscope images (cell structures)

### DIAGRAM SIZE AND POSITIONING STANDARDS:
Follow these EXACT specifications for all diagrams:

**Canvas Sizing:**
- Set width/height to match actual element bounds (e.g., if elements span x: 0-12, y: 0-10, use width: 12, height: 10)
- NEVER use arbitrary large values like width: 240, height: 220

**Element Sizing:**
- Circles: radius: 1 (standard), radius: 0.5 (small details)
- Rectangles: width: 2, height: 1.5 (standard), width: 1.5, height: 1 (compact)
- Text: fontSize: 10 (standard), fontSize: 9 (small), fontSize: 12 (headings)

**Text Positioning:**
- Position text AWAY from shape centers to avoid overlap
- For circles at (x, y), place labels at (x, y-1.5) or (x+1.2, y)
- Use anchor: 'middle' for centered text, 'start'/'end' for aligned text

**Spacing Requirements:**
- Minimum 2 units between adjacent elements
- Minimum 1.5 units between text and shapes
- Leave 1 unit margin from canvas edges

**Triangle Example:**
- Triangle with vertices at (2,8), (8,8), (5,3)
- Labels A, B, C positioned away from vertices to avoid overlap
- Canvas size: width 10, height 9 (matching element bounds 1.5-8.5 horizontally, 2.5-8.5 vertically)
- Text positioned outside the triangle at (1.5,8.5), (8.5,8.5), (5,2.5)

### DIFFICULTY LEVELS FOR GCSE BIOLOGY:

**EASY (Grades 1-3):**
- Basic recall of structures and functions
- Labeling diagrams
- Simple definitions
- Identifying cell types or organs
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Describing processes with steps
- Completing genetic crosses (single trait)
- Interpreting data from graphs/tables
- Explaining adaptations
- Comparing structures or processes
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Explaining complex multi-step processes (e.g., kidney filtration and reabsorption)
- Analyzing experimental data and drawing conclusions
- Evaluating experimental methods
- Complex genetics (dihybrid, codominance, sex-linkage)
- Linking multiple body systems together
- Extended writing explaining disease, treatment, and prevention
- Applying knowledge to unfamiliar contexts
- 4-6 marks typically

Example GCSE HARD question (6 marks):
"The graph shows how blood glucose concentration changes after a meal in a healthy person and a person with Type 2 diabetes.
(a) Describe the differences in blood glucose concentration between the two people over the 3-hour period. [2 marks]
(b) Explain why the diabetic person's blood glucose stays higher for longer. [2 marks]
(c) Suggest why doctors recommend diabetic patients eat foods with a low glycaemic index. [2 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL BIOLOGY:

**EASY (E/D grade):**
- Recall of facts and definitions
- Basic process descriptions
- Simple calculations (magnification, percentage change)
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Explaining processes with detail
- Interpreting experimental data
- Application to familiar contexts
- Genetic calculations (Hardy-Weinberg with guidance)
- 4-6 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Statistical analysis (chi-squared, t-tests, standard error)
- Complex genetics with multiple alleles or epistasis
- Evaluating research methodology critically
- Synoptic essays linking multiple topics
- Designing valid experiments with controls
- Analyzing unfamiliar data and suggesting explanations
- Extended responses requiring structured argument
- Applying principles to novel biological contexts
- 6-15 marks typically

Example A-Level HARD questions:

Genetics (10 marks):
"In a species of plant, flower colour is controlled by two genes. Gene A controls pigment production (A = pigment, a = no pigment). Gene B controls pigment deposition (B = deposited in petals, b = not deposited).
(a) Explain why this is an example of epistasis. [2 marks]
(b) A cross between two AaBb plants produced 240 offspring. Calculate the expected number of each phenotype. [3 marks]
(c) The actual results were: 135 coloured, 105 white. Perform a chi-squared test to determine if the results differ significantly from expected (critical value at p=0.05 is 3.84). [5 marks]"

Physiology (8 marks):
"The graph shows action potentials recorded from a neuron at different temperatures.
(a) Describe and explain the effect of decreasing temperature on the action potential. [4 marks]
(b) Suggest why nerve conduction velocity decreases at lower temperatures. [2 marks]
(c) Explain why this has implications for patients undergoing cardiac surgery with induced hypothermia. [2 marks]"

Ecology (12 marks - Extended Response):
"Discuss the factors affecting the distribution and abundance of organisms in a named ecosystem you have studied. Your answer should include:
- Abiotic factors and their effects
- Biotic interactions
- How these factors interact
- Evidence from fieldwork techniques
[12 marks]"
`;

// ============================================================================
// COMBINED SCIENCE ACCURACY CONSTRAINTS (GCSE ONLY)
// ============================================================================

export const COMBINED_SCIENCE_ACCURACY_CONSTRAINTS = `
## COMBINED SCIENCE REQUIREMENTS

Combined Science (Trilogy/Synergy) covers Biology, Chemistry, and Physics in a double-award GCSE.
Questions should follow the same accuracy requirements as the individual sciences.

### General Rules
1. **Use correct scientific terminology** appropriate to each discipline
2. **Equations must be correct** - all physics equations and chemical equations must balance
3. **Units must be correct** - SI units with proper conversions shown
4. **Diagrams required** for circuits, cells, apparatus, forces, etc.

### Physics Constants (use these values)
- g = 9.8 N/kg (or 10 N/kg if specified)
- Speed of light = 3 × 10⁸ m/s
- Speed of sound in air = 330-340 m/s

### Chemistry Rules
- All equations must balance (atoms and charges)
- Include state symbols (s), (l), (g), (aq)
- Use IUPAC naming conventions

### Biology Rules
- Use correct terminology (mitochondria, not "powerhouse")
- Accurate chromosome numbers (human = 46)
- Correct process descriptions (photosynthesis, respiration)

### DIFFICULTY LEVELS FOR GCSE COMBINED SCIENCE:

**EASY (Grades 1-3):**
- Single-step calculations with formula given
- Basic recall of definitions and facts
- Identifying structures or components
- Simple descriptions
- Reading values from tables/graphs
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Two-step calculations
- Rearranging equations before substituting
- Explaining processes with reasoning
- Describing trends and patterns
- Comparing structures or methods
- Unit conversions required
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Multi-step problems combining concepts
- Explaining phenomena with linked factors
- Evaluating experimental methods
- Analyzing data and drawing conclusions
- Extended writing with scientific reasoning
- Unfamiliar contexts requiring application
- "Explain why" with multiple linked points
- 4-6 marks typically

Example GCSE HARD question - Physics (6 marks):
"A 2.5 kW kettle is used to heat 1.2 kg of water from 18°C to boiling point.
(a) Calculate the energy required to heat the water. (Specific heat capacity of water = 4200 J/kg°C) [2 marks]
(b) Calculate the minimum time needed to boil the water. [2 marks]
(c) Explain why the actual time taken is longer than your calculated value. [2 marks]"

Example GCSE HARD question - Chemistry (6 marks):
"A student titrates 25.0 cm³ of sodium hydroxide solution with 0.10 mol/dm³ hydrochloric acid. The mean titre is 22.5 cm³.
(a) Write the balanced equation for this reaction. [1 mark]
(b) Calculate the concentration of the sodium hydroxide solution in mol/dm³. [3 marks]
(c) Suggest one way the student could improve the accuracy of their results. [2 marks]"

Example GCSE HARD question - Biology (6 marks):
"The graph shows blood glucose levels after eating in a healthy person and a person with Type 2 diabetes.
(a) Describe the differences between the two people's blood glucose levels over 3 hours. [2 marks]
(b) Explain why the diabetic person's blood glucose remains higher for longer. [2 marks]
(c) Explain how lifestyle changes could help manage Type 2 diabetes. [2 marks]"
`;

// ============================================================================
// MATHS-SPECIFIC ACCURACY CONSTRAINTS
// ============================================================================

export const MATHS_ACCURACY_CONSTRAINTS = `
## CRITICAL: NUMBER VARIETY REQUIREMENTS
MANDATORY: Use different numbers in every question to ensure variety:
- For surds: AVOID √72, √18, √50, √8, √12, √32, √324 (these are overused)
- For surds: USE varied values like √20, √27, √28, √45, √63, √75, √80, √98, √108, √125, √147, √180, √200
- For money: AVOID £18 - use different amounts like £24, £45, £63, £80, £125
- For fractions: vary denominators and numerators
- For coordinates: avoid (0,0), (1,1), (2,3) - use varied coordinate pairs
- For measurements: use different scales, units, and values
- EVERY mathematical value must be fresh and different from typical examples

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

### DIAGRAM SIZE AND POSITIONING STANDARDS:
Follow these EXACT specifications for all diagrams:

**Canvas Sizing:**
- Set width/height to match actual element bounds (e.g., if elements span x: 0-12, y: 0-10, use width: 12, height: 10)
- NEVER use arbitrary large values like width: 240, height: 220

**Element Sizing:**
- Circles: radius: 1 (standard), radius: 0.5 (small details)
- Rectangles: width: 2, height: 1.5 (standard), width: 1.5, height: 1 (compact)
- Text: fontSize: 10 (standard), fontSize: 9 (small), fontSize: 12 (headings)

**Text Positioning:**
- Position text AWAY from shape centers to avoid overlap
- For circles at (x, y), place labels at (x, y-1.5) or (x+1.2, y)
- Use anchor: 'middle' for centered text, 'start'/'end' for aligned text

**Spacing Requirements:**
- Minimum 2 units between adjacent elements
- Minimum 1.5 units between text and shapes
- Leave 1 unit margin from canvas edges

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
// COMPUTER SCIENCE ACCURACY CONSTRAINTS
// ============================================================================

export const COMPUTER_SCIENCE_ACCURACY_CONSTRAINTS = `
## COMPUTER SCIENCE REQUIREMENTS

### Rules
1. **Code accuracy**: All code must be syntactically correct and produce the expected output
2. **Algorithm correctness**: Algorithms must be logically sound and efficient
3. **Terminology**: Use correct technical terms (e.g., "iteration" not "looping through")
4. **Binary/Hex**: All conversions must be mathematically correct
5. **Data structures**: Correctly represent arrays, lists, stacks, queues, trees

### Code Style
- Use clear variable names
- Include comments where helpful
- Follow standard conventions for the language (Python, pseudocode)
- Show trace tables for algorithm tracing questions

### DIFFICULTY LEVELS FOR GCSE COMPUTER SCIENCE:

**EASY (Grades 1-3):**
- Binary/hex conversions (simple)
- Identifying input/output/process
- Basic algorithm tracing with simple variables
- Recalling definitions (RAM, CPU, etc.)
- Simple code completion (fill in blanks)
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Writing simple programs with loops
- Binary arithmetic (addition, shifts)
- Tracing code with arrays
- Explaining how hardware/software works
- Identifying errors in code
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Writing algorithms for complex problems (sorting, searching)
- Tracing recursive functions
- Designing efficient solutions with justification
- Analyzing code for time/space complexity (conceptual)
- Evaluating different approaches to a problem
- Complex binary operations (two's complement, floating point concepts)
- Multi-part programming tasks with validation
- SQL queries with multiple conditions and joins
- 4-8 marks typically

Example GCSE HARD question (8 marks):
"A program needs to search for a value in a sorted list of 1000 items.
(a) Write a binary search algorithm in pseudocode. [4 marks]
(b) Explain why binary search is more efficient than linear search for this task. [2 marks]
(c) State one limitation of binary search. [1 mark]
(d) Calculate the maximum number of comparisons needed to find any item. [1 mark]"

### DIFFICULTY LEVELS FOR A-LEVEL COMPUTER SCIENCE:

**EASY (E/D grade):**
- Simple algorithm implementation
- Basic Big O identification
- Straightforward data structure operations
- Recall of theory
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Implementing sorting/searching algorithms
- Analyzing algorithm efficiency
- OOP concepts with simple class design
- Network protocol explanations
- 4-6 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex algorithm design (graph traversal, dynamic programming)
- Proving algorithm correctness
- Detailed Big O analysis with justification
- Complex OOP with inheritance, polymorphism, encapsulation
- Functional programming concepts (map, filter, reduce, recursion)
- Low-level programming (assembly concepts, memory management)
- Database normalisation with complex schemas
- Analyzing computational problems (decidability, complexity classes)
- 8-15 marks typically

Example A-Level HARD questions:

Algorithms (10 marks):
"(a) Write a recursive algorithm to perform a depth-first traversal of a binary tree, outputting node values in pre-order. [4 marks]
(b) Trace your algorithm on the given tree, showing the order of nodes visited. [3 marks]
(c) Analyze the time and space complexity of your algorithm, justifying your answer. [3 marks]"

Data Structures (8 marks):
"A hash table uses chaining to handle collisions. The table has 10 slots and uses the hash function h(k) = k mod 10.
(a) Show the state of the hash table after inserting: 23, 44, 13, 67, 33, 24 [3 marks]
(b) Calculate the average number of comparisons needed to find an item. [2 marks]
(c) Suggest a modification to improve performance and explain why it would help. [3 marks]"

Theory (9 marks):
"(a) Explain the difference between a Turing machine and a finite state machine. [3 marks]
(b) Prove that a language that can be recognised by a finite state machine can also be recognised by a Turing machine. [3 marks]
(c) Give an example of a problem that is computable but intractable, and explain why. [3 marks]"
`;

// ============================================================================
// ECONOMICS ACCURACY CONSTRAINTS
// ============================================================================

export const ECONOMICS_ACCURACY_CONSTRAINTS = `
## ECONOMICS REQUIREMENTS

### Rules
1. **Diagrams**: Economic diagrams must be correctly labeled with axes, curves, and equilibrium points
2. **Terminology**: Use precise economic terms (e.g., "aggregate demand" not "total demand")
3. **Causation**: Show clear chains of reasoning (A causes B which leads to C)
4. **Data**: Use realistic economic data and percentages

### Diagram Requirements
- Always label axes (Price/Quantity, Price Level/Real GDP, etc.)
- Show shifts vs movements along curves correctly
- Mark equilibrium points clearly
- Use arrows to show direction of changes

### DIFFICULTY LEVELS FOR GCSE ECONOMICS:

**EASY (Grades 1-3):**
- Defining key terms
- Identifying factors of production
- Simple supply and demand concepts
- Basic calculation (percentage change)
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining shifts in supply/demand
- Drawing and interpreting diagrams
- Describing government economic policies
- Calculating PED/YED with guidance
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Evaluating economic policies with multiple perspectives
- Using diagrams to support complex analysis
- Chains of reasoning with 3+ links
- Analyzing data and drawing conclusions
- Extended writing assessing economic decisions
- Comparing different stakeholder viewpoints
- 4-9 marks typically

Example GCSE HARD question (9 marks):
"The government is considering introducing a minimum price on alcohol.
(a) Using a supply and demand diagram, explain how a minimum price above equilibrium would affect the market. [4 marks]
(b) Evaluate whether this policy would be effective in reducing alcohol consumption. Consider different stakeholder perspectives. [5 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL ECONOMICS:

**EASY (E/D grade):**
- Defining concepts
- Drawing basic diagrams
- Simple explanations
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Explaining with diagrams
- Chains of reasoning
- Application to case studies
- Calculating multipliers, elasticities
- 4-8 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex diagram analysis (AD/AS with multiple shifts)
- Evaluating macroeconomic policies with conflicting objectives
- Mathematical economics (multiplier derivation, utility maximisation)
- Critical evaluation of economic models and assumptions
- Synoptic analysis linking micro and macro
- Extended essays with sustained argument and judgment
- Analyzing real-world data and policy effectiveness
- 15-25 marks for essays typically

Example A-Level HARD questions:

Microeconomics (15 marks):
"(a) Using diagrams, explain why a profit-maximising monopolist produces at a level of output where price exceeds marginal cost. [6 marks]
(b) Evaluate the view that monopolies are always against the public interest. [9 marks]"

Macroeconomics (25 marks):
"Evaluate the effectiveness of fiscal policy in achieving the government's macroeconomic objectives during a recession.
You should include:
- An analysis of how fiscal policy works through the multiplier
- Diagrams to support your analysis
- Consideration of time lags, crowding out, and other limitations
- A balanced conclusion with justified judgment
[25 marks]"

Data Response (12 marks):
"Extract: 'Inflation rose to 5.4% while unemployment fell to 3.8%. The Bank of England raised interest rates to 1.25%.'
(a) Using an AD/AS diagram, analyse the likely causes of the inflation described. [6 marks]
(b) Evaluate whether raising interest rates is the most appropriate policy response. [6 marks]"
`;

// ============================================================================
// BUSINESS ACCURACY CONSTRAINTS
// ============================================================================

export const BUSINESS_ACCURACY_CONSTRAINTS = `
## BUSINESS REQUIREMENTS

### Rules
1. **Calculations**: All financial calculations must be mathematically correct
2. **Terminology**: Use correct business terms (e.g., "revenue" vs "profit")
3. **Frameworks**: Apply business models correctly (SWOT, PESTLE, Boston Matrix, etc.)
4. **Context**: Apply theory to realistic business scenarios

### Financial Calculations
- Profit = Revenue - Costs
- Gross Profit Margin = (Gross Profit / Revenue) × 100
- Net Profit Margin = (Net Profit / Revenue) × 100
- Break-even = Fixed Costs / (Selling Price - Variable Cost)
- ARR = (Average Annual Profit / Initial Investment) × 100

### DIFFICULTY LEVELS FOR GCSE BUSINESS:

**EASY (Grades 1-3):**
- Defining key terms
- Identifying stakeholders
- Simple calculations (revenue, profit)
- Recognizing business types
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining business concepts
- Break-even calculations
- Analyzing business decisions
- Applying frameworks (basic SWOT)
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Strategic analysis using multiple frameworks
- Evaluating business decisions with evidence
- Complex financial analysis (ratios, investment appraisal)
- Extended writing with recommendations
- Considering multiple stakeholder perspectives
- Applying concepts to unfamiliar business contexts
- 6-12 marks typically

Example GCSE HARD question (12 marks):
"TechStart Ltd is a small business considering expanding into a new market. Extract shows: Current revenue £500,000, 20% profit margin, expansion costs £200,000.
(a) Calculate the current annual profit. [2 marks]
(b) Analyze two factors TechStart should consider before expanding. [4 marks]
(c) Evaluate whether TechStart should expand. Justify your recommendation. [6 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL BUSINESS:

**EASY (E/D grade):**
- Defining terms
- Basic calculations
- Simple explanations
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Analyzing business situations
- Applying theories and models
- Investment appraisal calculations (payback, ARR)
- 4-8 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex case study analysis
- Strategic recommendations with full justification
- Advanced financial analysis (NPV, ratio analysis)
- Evaluating conflicting strategic options
- Synoptic questions linking multiple business areas
- Extended responses with sustained argument
- Critically evaluating business theories
- 16-20 marks for essays typically

Example A-Level HARD questions:

Strategy (20 marks):
"GlobalTech plc is a multinational considering entering the Chinese market through either a joint venture or wholly-owned subsidiary.
Evaluate which entry strategy GlobalTech should adopt. You should consider:
- Financial implications
- Strategic fit
- Risk assessment
- Stakeholder impact
Justify your recommendation. [20 marks]"

Finance (12 marks):
"Project A: Initial cost £100,000, cash flows Year 1: £40,000, Year 2: £50,000, Year 3: £60,000
Project B: Initial cost £80,000, cash flows Year 1: £30,000, Year 2: £35,000, Year 3: £40,000
(a) Calculate the payback period for both projects. [4 marks]
(b) Calculate the ARR for both projects. [4 marks]
(c) Using your calculations and other factors, recommend which project the business should choose. [4 marks]"
`;

// ============================================================================
// PSYCHOLOGY ACCURACY CONSTRAINTS
// ============================================================================

export const PSYCHOLOGY_ACCURACY_CONSTRAINTS = `
## PSYCHOLOGY REQUIREMENTS

### Rules
1. **Studies**: Accurately represent research studies (researcher names, dates, findings)
2. **Terminology**: Use correct psychological terms (e.g., "operationalised" not "made measurable")
3. **Evaluation**: Balance strengths and limitations
4. **Ethics**: Correctly apply ethical guidelines (BPS, informed consent, deception, etc.)

### Research Methods
- Clearly distinguish between experimental, correlational, and observational studies
- Correctly identify IV, DV, controls, and extraneous variables
- Apply statistical concepts accurately

### DIFFICULTY LEVELS FOR GCSE PSYCHOLOGY:

**EASY (Grades 1-3):**
- Defining key terms
- Identifying research methods
- Describing study procedures
- Basic recall of findings
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining psychological concepts
- Describing studies in detail
- Applying theories to scenarios
- Evaluating with one strength/limitation
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Evaluating studies with multiple points
- Comparing different explanations
- Designing valid research studies
- Extended writing linking theory to evidence
- Applying psychology to unfamiliar contexts
- Analyzing research methodology critically
- 6-12 marks typically

Example GCSE HARD question (12 marks):
"Discuss the multi-store model of memory.
In your answer you should:
- Outline the model
- Describe evidence that supports it
- Evaluate the model, including alternative explanations
[12 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL PSYCHOLOGY:

**EASY (E/D grade):**
- Defining terms
- Describing studies
- Basic evaluation points
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Explaining theories in depth
- Evaluating with elaboration
- Applying to scenarios
- Research design with guidance
- 4-8 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Critical evaluation with methodological issues
- Comparing competing theories/explanations
- Debates (nature/nurture, free will/determinism)
- Designing complex research with controls
- Statistical analysis (chi-squared, correlations, significance)
- Synoptic essays linking multiple topic areas
- Sustained analysis with psychological terminology
- 16 marks for essays typically

Example A-Level HARD questions:

Approaches (16 marks):
"Discuss the cognitive approach in psychology.
Refer to:
- Assumptions of the approach
- Relevant research evidence
- Comparison with at least one other approach
- Strengths and limitations
[16 marks]"

Research Methods (12 marks):
"A psychologist wants to investigate whether caffeine affects reaction time.
(a) Write a suitable directional hypothesis for this study. [2 marks]
(b) Describe how you would conduct this experiment, including design, procedure, and controls. [6 marks]
(c) The results showed p < 0.05. Explain what this means and what conclusion can be drawn. [2 marks]
(d) Discuss one ethical issue relevant to this study and how it could be addressed. [2 marks]"

Issues and Debates (8 marks):
"Using examples from psychological research, discuss the extent to which behaviour is determined by nature or nurture. [8 marks]"
`;

// ============================================================================
// GEOGRAPHY ACCURACY CONSTRAINTS
// ============================================================================

export const GEOGRAPHY_ACCURACY_CONSTRAINTS = `
## GEOGRAPHY REQUIREMENTS

### Rules
1. **Data accuracy**: Use realistic geographical data and statistics
2. **Terminology**: Use correct geographical terms
3. **Case studies**: Reference real places and events accurately
4. **Map skills**: Correctly interpret OS maps, GIS data, satellite images

### Diagram Requirements
- Label axes on graphs correctly
- Use appropriate scales
- Include map keys where relevant
- Show geographical features accurately

### DIFFICULTY LEVELS FOR GCSE GEOGRAPHY:

**EASY (Grades 1-3):**
- Defining key terms
- Identifying features on maps/diagrams
- Basic description of patterns
- Simple map skills (grid references, scale)
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining geographical processes
- Describing patterns from data
- Comparing places or features
- Applying concepts to case studies
- 2-4 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Extended writing linking physical and human factors
- Evaluating management strategies
- Using data to support arguments
- Assessing sustainability of solutions
- Linking local and global scales
- Synoptic questions connecting different topics
- 6-9 marks typically

Example GCSE HARD question (9 marks):
"For a named coastal area you have studied:
(a) Explain the physical processes causing coastal erosion at this location. [4 marks]
(b) Evaluate the effectiveness of management strategies used to protect the coastline. [5 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL GEOGRAPHY:

**EASY (E/D grade):**
- Defining terms
- Describing processes
- Basic data interpretation
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Explaining processes in depth
- Analyzing data patterns
- Applying theories to case studies
- 4-8 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Synoptic essays linking physical and human geography
- Critical evaluation of geographical theories
- Complex data analysis (statistical techniques)
- Independent investigation skills
- Assessing competing perspectives on issues
- Extended responses with sustained argument
- Evaluating sustainability at multiple scales
- 20 marks for essays typically

Example A-Level HARD questions:

Physical Geography (20 marks):
"To what extent do tectonic hazards have a greater impact on people in developing countries compared to developed countries?
You should refer to:
- Specific examples of tectonic events
- Physical and human factors affecting vulnerability
- Responses at different scales
[20 marks]"

Human Geography (20 marks):
"Evaluate the view that globalisation has created more problems than benefits for people in developing countries. [20 marks]"

Fieldwork (9 marks):
"During fieldwork, you collected data on river channel characteristics at multiple sites.
(a) Describe one sampling technique you used and justify why it was appropriate. [3 marks]
(b) Explain how you ensured your data collection was reliable. [3 marks]
(c) Evaluate the limitations of your methodology and suggest improvements. [3 marks]"
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

### DIFFICULTY LEVELS FOR GCSE HISTORY:

**EASY (Grades 1-3):**
- Identifying features of a period
- Basic recall of key events and dates
- Describing a source's content
- Simple factual questions (who, what, when)
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining causes or consequences (2-3 factors)
- Describing the usefulness of a source
- Making inferences from sources
- Comparing features of different periods
- 4-8 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Extended writing with sustained argument
- Evaluating the significance of events/individuals
- Assessing the extent of change or continuity
- Analyzing sources for reliability and utility with context
- Reaching substantiated judgments
- Multi-factor explanations with linking and prioritizing
- Comparing interpretations and explaining why they differ
- 12-16 marks for essays typically

Example GCSE HARD question (16 marks):
"'The main reason for the success of the Nazi Party by 1933 was the weakness of the Weimar Republic.'
How far do you agree with this statement?
In your answer you should:
- Explain the weaknesses of the Weimar Republic
- Explain other factors that contributed to Nazi success
- Reach a substantiated conclusion
[16 marks + 4 SPaG]"

Example GCSE HARD source question (8 marks):
"Source A is from a speech by [historical figure] in [year].
How useful is this source to a historian studying [topic]?
In your answer you should refer to:
- The content of the source
- The provenance of the source (NOP)
- Your own contextual knowledge
[8 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL HISTORY:

**EASY (E/D grade):**
- Identifying key features
- Basic factual recall
- Describing source content
- 2-4 marks typically

**MEDIUM (C/B grade):**
- Explaining causation with multiple factors
- Analyzing sources with some evaluation
- Comparing different factors or periods
- 8-12 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Complex essay writing with sustained analytical argument
- Evaluating historiographical interpretations
- Synoptic questions spanning multiple topics/periods
- Source analysis requiring contextual challenge
- Reaching fully substantiated judgments with nuanced conclusions
- Balancing multiple interpretations with own argument
- Assessing relative significance with clear criteria
- 20-25 marks for essays typically

Example A-Level HARD questions:

Essay (25 marks):
"'Economic factors were the main cause of the English Civil War.'
Assess the validity of this view.
You should consider:
- Economic factors (financial disputes, Ship Money, etc.)
- Religious factors (Laudian reforms, Puritanism)
- Political factors (Personal Rule, Parliamentary grievances)
- The relative significance of each factor
[25 marks]"

Source Analysis (30 marks):
"Using your understanding of the historical context, assess how convincing the arguments in these three extracts are in relation to [historical debate].
[30 marks]"

Interpretation Question (20 marks):
"Historians have disagreed about the extent to which [event/period] represented revolutionary change.
Analyze the strengths and limitations of this interpretation, referring to different historical perspectives.
[20 marks]"
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

### DIFFICULTY LEVELS FOR GCSE ENGLISH LITERATURE:

**EASY (Grades 1-3):**
- Identifying simple literary techniques
- Describing what happens in an extract
- Basic character description
- Simple retrieval from text
- 1-2 marks typically

**MEDIUM (Grades 4-5):**
- Explaining how writers use language (AO2)
- Describing character development
- Identifying and explaining themes
- Making simple comments on context
- 4-8 marks typically

**HARD (Grades 6-9) - MUST include these characteristics:**
- Sophisticated analysis of language, form, and structure
- Evaluating writers' choices with critical terminology
- Exploring alternative interpretations
- Sustained comparison across texts (for comparison questions)
- Integrating contextual understanding convincingly
- Extended writing with analytical argument
- Using precise quotations with embedded analysis
- Addressing conceptual aspects of texts
- 30-40 marks for essays typically

Example GCSE HARD question - Extract (30 marks):
"Starting with this extract, explore how Shakespeare presents the theme of power in Macbeth.
Write about:
- How power is presented in this extract
- How power is presented in the play as a whole
[30 marks + 4 AO4]"

Example GCSE HARD question - Character (30 marks):
"How does Priestley present the character of Mr Birling in An Inspector Calls?
Write about:
- How Priestley presents Mr Birling
- How Priestley uses Mr Birling to convey his ideas about social responsibility
[30 marks + 4 AO4]"

Example GCSE HARD question - Comparison (36 marks):
"Compare how poets present ideas about conflict in 'Exposure' and one other poem from the Power and Conflict anthology.
[36 marks]"

### DIFFICULTY LEVELS FOR A-LEVEL ENGLISH LITERATURE:

**EASY (E/D grade):**
- Identifying techniques with some explanation
- Basic textual reference
- Simple thematic points
- 4-8 marks typically

**MEDIUM (C/B grade):**
- Analyzing language and structure
- Making connections across texts
- Incorporating relevant context
- Developing analytical argument
- 12-16 marks typically

**HARD (A/A* grade) - MUST include these characteristics:**
- Sophisticated literary analysis with precise terminology
- Engaging with critics and alternative readings
- Exploring ambiguity and complexity in texts
- Sustained comparative analysis across multiple texts
- Critical evaluation of writers' craft
- Integrating genre, context, and critical theory
- Independent interpretations with originality
- Extended discursive essays with academic register
- 25 marks for essays typically

Example A-Level HARD questions:

Single Text (25 marks):
"'Tragedy depends upon the protagonist's fatal flaw leading inevitably to their downfall.'
Explore the significance of Othello's hamartia in light of this view.
You should consider:
- Shakespeare's presentation of Othello's character
- The role of other factors in his downfall
- Critical perspectives on tragic heroes
[25 marks]"

Comparison (25 marks):
"Compare how Keats and Duffy explore the relationship between love and mortality in their poetry.
You should consider:
- The poets' use of language, imagery, and form
- How context shapes their presentation of these themes
[25 marks]"

Unseen Poetry (25 marks):
"Analyze how the poet presents ideas about memory and loss in this poem.
Consider the poet's use of:
- Language and imagery
- Structure and form
- Tone and voice
[25 marks]"

Coursework-style (3000 words):
"How do writers of your chosen texts explore the conflict between individual desire and social expectation?
Your response should:
- Offer close textual analysis
- Consider relevant contextual factors
- Engage with critical perspectives
- Develop a sustained comparative argument"
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
// MULTI-PART QUESTION CONSTRAINTS
// ============================================================================

export const MULTI_PART_QUESTION_CONSTRAINTS = `
## CRITICAL: MULTI-PART QUESTION REQUIREMENTS

When generating multi-part questions, you must follow these STRICT formatting and marking rules:

### Content Structure Requirements
1. **Part Labeling**: Use standard exam notation: (a), (b), (c), (d)
   - Place each part on a separate line
   - Include mark allocation after each part: [X marks]
   - Example: 
     "(a) Calculate the velocity. [2 marks]
      (b) Find the acceleration. [3 marks]"

2. **Logical Progression**: Each part should:
   - Build logically on previous parts where appropriate
   - Have clear, distinct requirements
   - Progress in difficulty (a = easiest, d = hardest typically)

3. **Clear Separation**: Use proper formatting:
   - Line breaks between parts
   - Clear mark allocations for each part
   - Distinct instructions for each part

### Mark Scheme Requirements (CRITICAL)
For multi-part questions, the mark scheme MUST label each part:

**CORRECT Format:**
- "(a) M1: Uses correct formula for velocity"
- "(a) A1: Substitutes values correctly"
- "(b) M1: Uses a = (v-u)/t"
- "(b) A1: Calculates acceleration = 2.5 m/s²"

**INCORRECT Format (DO NOT USE):**
- "M1: Uses correct formula" (missing part label)
- "Uses correct formula for velocity" (missing mark type and part)

### Mark Distribution Guidelines
- 2-3 parts maximum for short questions (≤8 marks)
- Up to 4 parts for extended questions (≥10 marks) 
- Each part should have 1-4 marks typically
- Total marks = sum of all part marks

### Solution Format for Multi-Part
Organize solution by parts:
"(a) Step 1: [method]
     Answer: [result]
 (b) Step 1: [method building on part a]
     Answer: [result]"

### Common Multi-Part Patterns
- **Calculation progression**: Calculate → Use result → Evaluate
- **Analysis sequence**: State → Explain → Evaluate
- **Data interpretation**: Read → Calculate → Compare → Conclude

NEVER create multi-part questions where the mark scheme lacks proper part labeling!
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
   - Include only if question requires visual representation for REFERENCE or CONTEXT
   - Follow the diagram specification schema
   - **CRITICAL**: For "draw/sketch/plot" questions where students must create a diagram:
     * DO NOT include a diagram field (this would show the answer)
     * Describe what to draw in the question content text
     * Describe the expected answer in the solution text only

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

${MULTI_PART_QUESTION_CONSTRAINTS}

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
    'combined-science': COMBINED_SCIENCE_ACCURACY_CONSTRAINTS,
    'maths': MATHS_ACCURACY_CONSTRAINTS,
    'further-maths': MATHS_ACCURACY_CONSTRAINTS,
    'computer-science': COMPUTER_SCIENCE_ACCURACY_CONSTRAINTS,
    'economics': ECONOMICS_ACCURACY_CONSTRAINTS,
    'business': BUSINESS_ACCURACY_CONSTRAINTS,
    'psychology': PSYCHOLOGY_ACCURACY_CONSTRAINTS,
    'geography': GEOGRAPHY_ACCURACY_CONSTRAINTS,
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
