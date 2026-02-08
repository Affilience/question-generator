import { Difficulty, Topic } from '@/types';
import { DiagramSpec } from '@/types/diagram';
import { validateQuestionOutput, ValidationContext } from '@/lib/validations/question-output';
import { assessDiagramQuality, validateAndSanitizeDiagram } from '@/lib/diagram-utils';

/**
 * Shared utilities for question generation prompts.
 * Used by AQA, Edexcel, and OCR prompt modules.
 */

/**
 * Question variety dimensions to ensure diverse question generation.
 */
export const VARIETY_DIMENSIONS = {
  questionFormat: [
    'pure_calculation',
    'word_problem',
    'show_that',
    'explain_reasoning',
    'multi_step',
    'comparison',
    'error_identification',
    'reverse_problem',
  ],
  contextType: [
    'shopping_money',
    'measurement_practical',
    'data_statistics',
    'time_scheduling',
    'sports_games',
    'travel_distance',
    'cooking_recipes',
    'construction_diy',
    'science_experiment',
    'business_finance',
    'nature_environment',
    'technology_digital',
    'none_pure_maths',
  ],
  reasoningDirection: ['forward', 'reverse', 'bidirectional'],
  informationFormat: [
    'text_only',
    'includes_table',
    'includes_diagram',
    'includes_graph',
    'includes_formula',
    'mixed_representation',
  ],
  commandWords: [
    'work_out',
    'calculate',
    'find',
    'write_down',
    'show_that',
    'prove',
    'explain',
    'estimate',
    'simplify',
    'solve',
    'factorise',
    'expand',
    'describe',
    'compare',
  ],
  numericalVariety: [
    'small_numbers',  // 8-20
    'medium_numbers', // 18-75
    'large_numbers',  // 72-200
    'mixed_range',    // combination
    'prime_factors',  // emphasize different prime factors
    'perfect_squares', // emphasize different perfect square factors
  ],
};

/**
 * Randomly selects variety parameters for question generation.
 */
export function getVarietyParameters(): {
  format: string;
  context: string;
  direction: string;
  infoFormat: string;
  commandWord: string;
  numericalRange: string;
} {
  const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  return {
    format: randomChoice(VARIETY_DIMENSIONS.questionFormat),
    context: randomChoice(VARIETY_DIMENSIONS.contextType),
    direction: randomChoice(VARIETY_DIMENSIONS.reasoningDirection),
    infoFormat: randomChoice(VARIETY_DIMENSIONS.informationFormat),
    commandWord: randomChoice(VARIETY_DIMENSIONS.commandWords),
    numericalRange: randomChoice(VARIETY_DIMENSIONS.numericalVariety),
  };
}

/**
 * Generates variety instruction text based on selected parameters.
 */
export function getVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const formatDescriptions: Record<string, string> = {
    pure_calculation: 'a direct calculation without real-world context',
    word_problem: 'a word problem with realistic context that requires interpretation',
    show_that: 'a "show that" question where the answer is provided and must be proven',
    explain_reasoning: 'a question requiring written mathematical explanation/justification',
    multi_step: 'a multi-step problem requiring several connected calculations',
    comparison: 'a comparison question (which is better/more/greater)',
    error_identification: 'a question where students identify and correct an error',
    reverse_problem: 'a reverse problem (given the result, find the original value)',
  };

  const contextDescriptions: Record<string, string> = {
    shopping_money: 'shopping, prices, or money management',
    measurement_practical: 'practical measurements (building, crafting, etc.)',
    data_statistics: 'surveys or data collection',
    time_scheduling: 'time, schedules, or planning',
    sports_games: 'sports, games, or competitions',
    travel_distance: 'travel, maps, or journeys',
    cooking_recipes: 'cooking, recipes, or food',
    construction_diy: 'construction or DIY projects',
    science_experiment: 'science or experiments',
    business_finance: 'business, wages, or finance',
    nature_environment: 'nature or environmental topics',
    technology_digital: 'technology or digital contexts',
    none_pure_maths: 'no context (pure mathematics)',
  };

  const directionDescriptions: Record<string, string> = {
    forward: 'Given the inputs, students find the result',
    reverse: 'Given the result, students find the original values',
    bidirectional: 'Mix of forward and reverse reasoning across parts',
  };

  const infoDescriptions: Record<string, string> = {
    text_only: 'Present all information in text form (no diagram needed)',
    includes_table: 'Include a table of data that students must interpret',
    includes_diagram: 'Include a diagram (provide diagram spec in JSON)',
    includes_graph: 'Include a graph or chart (provide diagram spec in JSON)',
    includes_formula: 'Provide a formula that students must use',
    mixed_representation: 'Use a combination of text, tables, or diagrams',
  };

  const numericalDescriptions: Record<string, string> = {
    small_numbers: 'Use smaller values (8-20 range) to focus on method',
    medium_numbers: 'Use medium values (18-75 range) for standard practice',
    large_numbers: 'Use larger values (72-200 range) for computational challenge',
    mixed_range: 'Mix different number sizes within the question',
    prime_factors: 'Emphasize different prime factor combinations (2,3,5,7,11,13)',
    perfect_squares: 'Emphasize different perfect square factors (4,9,16,25,36,49,64,81,100)',
  };

  return `## VARIETY REQUIREMENTS FOR THIS QUESTION

You MUST follow these specific variety parameters to ensure this question is structurally different from others:

**Question Format:** Generate ${formatDescriptions[variety.format] || variety.format}

**Context Theme:** ${variety.context !== 'none_pure_maths' ? `Use a context involving ${contextDescriptions[variety.context] || variety.context}` : 'Use pure mathematics without real-world context'}

**Reasoning Direction:** ${directionDescriptions[variety.direction] || variety.direction}

**Information Presentation:** ${infoDescriptions[variety.infoFormat] || variety.infoFormat}

**Suggested Command Word:** Consider using "${variety.commandWord.replace('_', ' ')}" (but use what's most appropriate)

**Numerical Range:** ${numericalDescriptions[variety.numericalRange] || variety.numericalRange}

## ANTI-DUPLICATION REQUIREMENTS

**CRITICAL**: Avoid these commonly overused examples that lead to repetitive questions:
- **Mathematics**: Don't default to √72, √18, √8, √50 for surds
- **Physics**: Avoid copper wire 2.50m + 0.80mm, car 1400kg + 25 m/s, resistive force 600N
- **Chemistry**: Don't always use 25.0 cm³ + 23.5 cm³ titrations, avoid Na₂CO₃ + HCl repeatedly
- **General**: Vary numerical values, contexts, units, materials, and scenarios significantly

IMPORTANT: Do NOT generate a generic or commonly-seen question structure. Create something that feels fresh while still being mathematically valid and appropriate for the level.`;
}

export function getDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `**Early Paper Questions (Grades 1-3) - Like Questions 1-8 on GCSE papers:**
- Single-step problems only (ONE calculation or recall)
- "Write down" or "State" command words common
- Numbers should be simple integers or basic fractions/decimals
- No interpretation needed—question is direct and obvious
- May be multiple choice format or fill-in-the-blank
- Very familiar contexts (basic money, simple shapes, times tables)
- 1-2 marks MAXIMUM per question
- Examples: "Write 0.35 as a fraction", "What is 15% of 80?", "Simplify 3x + 2x"`;

    case 'medium':
      return `**Middle Paper Questions (Grades 4-5) - Like Questions 9-16 on GCSE papers:**
- Two to three step problems
- Requires some method selection or interpretation
- May need to extract information from context
- Scaffolding present but student chooses approach
- Numbers work out reasonably but not always integers
- Standard application of taught methods
- 3-4 marks typical per question
- Examples: Multi-step percentage problems, solving equations, area of compound shapes`;

    case 'hard':
      return `**Final Paper Questions (Grades 6-9) - Like Questions 17-25 on GCSE papers:**
- Complex multi-step problems requiring extended reasoning
- Minimal or no scaffolding—students must plan their approach
- Synthesis of multiple mathematical concepts required
- "Show that", "Prove", "Explain why" questions common
- Unfamiliar contexts requiring careful interpretation
- Algebraic reasoning, generalisation, and proof expected
- May have multiple parts building on each other
- 5-8 marks typical per question
- Numbers may be irrational, require exact form, or surds
- Examples: Algebraic proof, circle theorems with reasoning, optimisation problems, complex probability`;
  }
}

export function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 2 };
    case 'medium':
      return { min: 3, max: 4 };
    case 'hard':
      return { min: 5, max: 8 };
  }
}

// ============================================================================
// MARK SCHEME GUIDANCE - SHARED ACROSS ALL SUBJECTS
// ============================================================================

/**
 * Comprehensive mark scheme conventions used across exam boards.
 */
export const MARK_SCHEME_CONVENTIONS = `
## Mark Scheme Conventions

### Mark Types (Sciences & Maths)
| Mark | Name | Description | Example |
|------|------|-------------|---------|
| **M** | Method | Correct approach/strategy, awarded even with arithmetic errors | M1: Uses v² = u² + 2as |
| **A** | Accuracy | Correct answer/execution, usually depends on earning M mark | A1: Correct substitution and calculation |
| **B** | Independent | Standalone mark, not dependent on method | B1: States correct unit (m/s) |
| **C** | Communication | Quality of written explanation (extended responses) | C1: Logical argument with correct terminology |

### Mark Scheme Symbols
| Symbol | Meaning | Usage |
|--------|---------|-------|
| **oe** | "or equivalent" | Accept mathematically equivalent forms (e.g., 0.5 oe accepts ½) |
| **owtte** | "or words to that effect" | Accept answers conveying the same meaning |
| **cao** | "correct answer only" | No alternatives accepted, must be exact |
| **ft** | "follow through" | Award mark for correct method using incorrect earlier value |
| **ecf** | "error carried forward" | Same as ft - accept consistent errors from earlier parts |
| **isw** | "ignore subsequent working" | Mark correct answer even if student continues incorrectly |
| **awrt** | "answers which round to" | Accept values that round to the given answer |
| **dep** | "dependent" | Mark depends on earning a previous mark |

### Level of Response (Extended Writing)
For 6+ mark questions requiring extended writing:
- **Level 3 (5-6 marks):** Comprehensive, accurate, well-organised with correct terminology
- **Level 2 (3-4 marks):** Reasonable explanation, mostly accurate, some structure
- **Level 1 (1-2 marks):** Basic points, limited accuracy, minimal structure
- **0 marks:** No relevant content
`;

/**
 * Guidance for handling alternative acceptable answers in mark schemes.
 */
export const ALTERNATIVE_ANSWERS_GUIDANCE = `
## Alternative Acceptable Answers

### Principles
1. **Mathematical equivalence:** Accept any mathematically equivalent form
   - Fractions/decimals/percentages: 0.25 = ¼ = 25%
   - Surds: √8 = 2√2
   - Factored forms: x² - 4 = (x+2)(x-2)

2. **Scientific notation:** Accept equivalent representations
   - 0.00045 = 4.5 × 10⁻⁴
   - 2,500,000 = 2.5 × 10⁶

3. **Units:** Accept equivalent units with correct conversion
   - 1500m = 1.5km (if conversion shown or implied)
   - 2 hours 30 minutes = 2.5 hours = 150 minutes

4. **Rounding:** Specify acceptable precision
   - "awrt 3.46" accepts 3.456, 3.4567, etc.
   - State if exact answer required: "Must be 7/3 not 2.33..."

### Mark Scheme Format for Alternatives
\`\`\`
A1: 45 or 9/20 or 0.45 (accept equivalent fractions/decimals)
B1: Increases (accept: goes up, rises, gets larger, gets bigger)
M1: Uses Pythagoras / uses a² + b² = c² (accept any correct rearrangement)
\`\`\`

### Common Alternative Phrasings (Sciences)
- "Particles move faster" = "particles have more kinetic energy" = "particles vibrate more"
- "More collisions" = "higher collision frequency" = "particles collide more often"
- "Reaction speeds up" = "rate increases" = "reaction is faster"
`;

/**
 * Guidance for negative marking and contradiction handling.
 */
export const NEGATIVE_MARKING_GUIDANCE = `
## Negative Marking and Contradictions

### When to Apply Negative Marking
1. **Direct contradiction:** Student gives correct answer then contradicts it
   - "The pH is 7, so it's acidic" → 0 marks (7 is neutral, not acidic)

2. **Multiple answers given:** Student lists several answers hoping one is correct
   - If question asks for ONE answer and student gives multiple, mark FIRST answer only
   - Exception: If ALL answers are correct, award the mark

3. **Correct working, wrong conclusion:**
   - Award method marks but withhold final accuracy mark
   - "x = 4... therefore x = 5" → M marks awarded, A0

### When NOT to Apply Negative Marking
1. **Irrelevant additional information:** Ignore if doesn't contradict
   - "The force is 20N. Forces are measured in Newtons." → Still award mark

2. **Crossed out work:** Do not mark crossed-out work unless no other answer given

3. **Working in margins:** Mark all relevant working wherever written

### Mark Scheme Format
\`\`\`
B1: States temperature increases
    Do NOT award if student also states temperature decreases
    Ignore references to other variables

A1: 42 cao
    If multiple values given, mark first value only
    Do not award if correct answer subsequently changed
\`\`\`
`;

/**
 * Guidance for questions with multiple valid solution methods.
 */
export const MULTI_METHOD_GUIDANCE = `
## Multiple Valid Methods

### Principle
Award full marks for ANY valid mathematical/scientific method that reaches the correct answer, even if different from the "expected" approach.

### Examples

**Simultaneous Equations** - All methods earn equal credit:
- Substitution method: M1 M1 A1
- Elimination method: M1 M1 A1
- Graphical method (if exact): M1 M1 A1
- Matrix method: M1 M1 A1

**Quadratic Solutions** - All methods earn equal credit:
- Factorisation: M1 A1
- Quadratic formula: M1 A1
- Completing the square: M1 A1
- Graphical (if exact values obtainable): M1 A1

**Trigonometry** - Accept:
- Sine rule OR cosine rule (if both applicable)
- Right-angle trig OR general trig
- Area = ½ab sin C OR Area = ½ × base × height

### Mark Scheme Format
\`\`\`
M1: Valid method to find x
    - Substitution into equation 1 or 2 OR
    - Multiply equations to eliminate x or y OR
    - Rearrange to form quadratic OR
    - Any other valid algebraic approach

A1: x = 3 (from correct method)
    Award for correct answer from any valid method
    ft their method if M1 earned
\`\`\`

### Error Carried Forward (ECF) with Multiple Methods
- If student uses an unconventional but valid method, apply ECF to subsequent steps
- Award method marks for correct application even if arithmetic error made earlier
- Final accuracy mark requires correct answer OR correct follow-through

### Special Cases
**"Show that" questions:**
- Method shown must lead logically to given answer
- Alternative valid proofs are acceptable
- Must see sufficient working (not just statement of result)

**Calculator vs Non-calculator:**
- On non-calculator papers, method must be shown for full credit
- On calculator papers, correct answer without working may earn full marks (unless question states "show your working")
`;

/**
 * Get combined mark scheme guidance for prompts.
 */
export function getMarkSchemeGuidance(): string {
  return `${MARK_SCHEME_CONVENTIONS}

${ALTERNATIVE_ANSWERS_GUIDANCE}

${NEGATIVE_MARKING_GUIDANCE}

${MULTI_METHOD_GUIDANCE}`;
}

/**
 * Diagram schema documentation for prompts.
 */
export const DIAGRAM_SCHEMA_DOCS = `## DIAGRAM SPECIFICATION

If your question requires a diagram, include a "diagram" field in your JSON response. The diagram will be rendered as an SVG.

### CRITICAL RULES - READ CAREFULLY:

1. **ALWAYS specify width and height** - Every diagram MUST have explicit width and height values
2. **Coordinate system**: Y-axis increases UPWARD (mathematical convention). Origin (0,0) is at bottom-left.
3. **Keep elements within bounds**: All coordinates must be between 0 and width (for x) and 0 and height (for y)
4. **Leave margins**: Keep elements at least 1 unit from edges to prevent clipping of labels
5. **Use appropriate scale**: For geometry, use width/height of 10-12 units. For graphs, match your axis ranges.

### Common Diagram Types:

**Triangle/Polygon (GEOMETRY):**
\`\`\`json
{
  "diagram": {
    "width": 12,
    "height": 10,
    "showNotAccurate": true,
    "elements": [
      {
        "type": "polygon",
        "vertices": [
          {"x": 2, "y": 2, "label": "A", "labelPosition": "bottom-left"},
          {"x": 10, "y": 2, "label": "B", "labelPosition": "bottom-right"},
          {"x": 6, "y": 8, "label": "C", "labelPosition": "top"}
        ],
        "sideLabels": [
          {"fromIndex": 0, "toIndex": 1, "label": "8 cm"},
          {"fromIndex": 1, "toIndex": 2, "label": "6 cm"}
        ]
      },
      {
        "type": "angle-marker",
        "vertex": {"x": 10, "y": 2},
        "ray1End": {"x": 2, "y": 2},
        "ray2End": {"x": 6, "y": 8},
        "isRightAngle": true
      }
    ]
  }
}
\`\`\`

**Circle:**
\`\`\`json
{
  "diagram": {
    "width": 12,
    "height": 12,
    "showNotAccurate": true,
    "elements": [
      {
        "type": "circle",
        "center": {"x": 6, "y": 6, "label": "O", "labelPosition": "bottom-right"},
        "radius": 4,
        "radiusLabel": "7 cm"
      }
    ]
  }
}
\`\`\`

**Coordinate Graph (axes define the bounds automatically):**
\`\`\`json
{
  "diagram": {
    "elements": [
      {"type": "axes", "xMin": -5, "xMax": 5, "yMin": -2, "yMax": 10, "showNumbers": true, "xLabel": "x", "yLabel": "y"},
      {"type": "grid", "xMin": -5, "xMax": 5, "yMin": -2, "yMax": 10},
      {"type": "curve", "fn": "x^2", "stroke": "#3b82f6"},
      {"type": "point", "position": {"x": 2, "y": 4, "label": "P", "labelPosition": "top-right"}, "style": "dot"}
    ]
  }
}
\`\`\`

**Tree Diagram (Probability):**
\`\`\`json
{
  "diagram": {
    "elements": [
      {
        "type": "tree-diagram",
        "root": {
          "label": "Start",
          "children": [
            {"probability": "1/3", "label": "Red", "node": {"label": "R", "children": [
              {"probability": "1/3", "label": "Red", "node": {"label": "RR"}},
              {"probability": "2/3", "label": "Blue", "node": {"label": "RB"}}
            ]}},
            {"probability": "2/3", "label": "Blue", "node": {"label": "B", "children": [
              {"probability": "1/3", "label": "Red", "node": {"label": "BR"}},
              {"probability": "2/3", "label": "Blue", "node": {"label": "BB"}}
            ]}}
          ]
        }
      }
    ]
  }
}
\`\`\`

**Venn Diagram:**
\`\`\`json
{
  "diagram": {
    "elements": [
      {
        "type": "venn-diagram",
        "sets": [
          {"label": "A", "values": ["1", "3", "5"]},
          {"label": "B", "values": ["4", "6"]}
        ],
        "intersection": ["2", "7"],
        "outsideValues": ["8", "9"],
        "universalLabel": "U"
      }
    ]
  }
}
\`\`\`

**3D Shapes:**
\`\`\`json
{
  "diagram": {
    "elements": [
      {"type": "cylinder-3d", "radius": 3, "height": 8, "labels": {"radius": "3 cm", "height": "8 cm"}}
    ]
  }
}
\`\`\`
Other 3D types: "prism-3d", "cone-3d", "sphere-3d", "pyramid-3d"

**Bar Chart:**
\`\`\`json
{
  "diagram": {
    "elements": [
      {
        "type": "bar-chart",
        "data": [
          {"label": "Mon", "value": 5},
          {"label": "Tue", "value": 8},
          {"label": "Wed", "value": 3}
        ],
        "xLabel": "Day",
        "yLabel": "Frequency"
      }
    ]
  }
}
\`\`\`

**Number Line:**
\`\`\`json
{
  "diagram": {
    "elements": [
      {
        "type": "number-line",
        "min": -5,
        "max": 5,
        "points": [{"value": 2, "label": "x", "style": "dot"}],
        "ranges": [{"from": -2, "to": 3, "inclusive": [true, false]}]
      }
    ]
  }
}
\`\`\`

### Element Types Available:
- polygon (triangles, quadrilaterals, any polygon)
- circle
- arc (for sectors, angles)
- angle-marker (including right angles)
- line (with optional arrows)
- point
- text
- rectangle
- axes, grid
- curve (for function graphs)
- tree-diagram
- venn-diagram
- number-line
- bar-chart, pie-chart, box-plot
- prism-3d, cylinder-3d, cone-3d, sphere-3d, pyramid-3d

### IMPORTANT RULES - FOLLOW EXACTLY:

1. **ALWAYS include width and height** for polygon/circle/geometry diagrams (e.g., "width": 12, "height": 10)
2. **Axes diagrams**: The axes element defines bounds automatically - no need for separate width/height
3. **Coordinate system**: Y increases UPWARD. Point (0,0) is bottom-left, (width, height) is top-right
4. **Margins**: Keep all points at least 1-2 units from edges so labels don't get cut off
5. **Label positions**: Use "labelPosition" for all labels: "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left", "bottom-right"
6. **showNotAccurate**: Set to true for all geometry diagrams (triangles, circles, angles)
7. **Scale appropriately**:
   - Geometry diagrams: width/height of 10-14 units
   - Graphs: Match your axis ranges (xMin to xMax, yMin to yMax)
   - 3D shapes: No width/height needed - they auto-center

### Common Mistakes to AVOID:
- Missing width/height (causes default 10x10 which may clip your diagram)
- Placing vertices at x=0 or y=0 (labels get cut off)
- Forgetting labelPosition (labels appear in wrong places)
- Using coordinates outside the width/height bounds
- Using negative coordinates without an axes element (the diagram will be clipped)
- Putting labels too close together (they will overlap - keep 1.5+ units apart)
- Creating self-intersecting polygons (edges cross each other - invalid geometry)
- Extreme aspect ratios (width:height should be between 1:3 and 3:1)
- Forgetting that Y increases UPWARD (common mistake: placing "top" vertex at low Y value)

### TWO-STAGE THINKING (for complex diagrams):
When creating a diagram, think in two stages:

**Stage 1 - Plan the entities:**
- What objects exist? (triangles, circles, points, lines)
- What labels are needed? (vertex labels A, B, C; side labels "5 cm")
- What relationships exist? (right angle at B, parallel lines)

**Stage 2 - Assign coordinates:**
- Choose appropriate width/height (12x10 for triangles, 12x12 for circles)
- Place vertices with 2+ unit margins from edges
- Ensure labels won't overlap or be clipped

### COORDINATE QUICK REFERENCE:
| Diagram Type | Recommended Size | Margin from Edge |
|--------------|------------------|------------------|
| Triangle | width: 12, height: 10 | 2 units |
| Circle | width: 12, height: 12 | 2 units + radius |
| Quadrilateral | width: 14, height: 12 | 2 units |
| Graph/Axes | Use axes bounds | N/A (axes handles it) |
| 3D shapes | N/A (auto-centered) | N/A |
`;

/**
 * Subject-specific diagram guidance - tells AI when to include diagrams for each subject.
 */
export const SUBJECT_DIAGRAM_GUIDANCE: Record<string, string> = {
  physics: `## WHEN TO INCLUDE DIAGRAMS

For Physics questions, you SHOULD include a diagram when the question involves:
- **Circuit diagrams**: Series/parallel circuits, components (resistors, cells, switches, ammeters, voltmeters)
- **Force diagrams**: Free body diagrams showing all forces with arrows and labels
- **Vector diagrams**: Resultant forces, velocity vectors, momentum
- **Ray diagrams**: Reflection, refraction, lenses, mirrors
- **Wave diagrams**: Transverse/longitudinal waves showing wavelength, amplitude, frequency
- **Motion graphs**: Distance-time, velocity-time, acceleration-time graphs
- **Energy diagrams**: Sankey diagrams, energy transfer representations
- **Field diagrams**: Magnetic field lines, electric field lines, gravitational fields
- **Particle diagrams**: Atomic structure, nuclear reactions`,

  chemistry: `## WHEN TO INCLUDE DIAGRAMS

For Chemistry questions, you SHOULD include a diagram when the question involves:
- **Apparatus setup**: Distillation, titration, electrolysis, filtration, chromatography equipment
- **Particle diagrams**: States of matter, ionic/covalent bonding, metallic bonding
- **Energy profile diagrams**: Activation energy, enthalpy changes, reaction progress
- **Dot-and-cross diagrams**: Electron sharing in covalent bonds, electron transfer in ionic bonds
- **Structural formulas**: Organic molecules, displayed formulas, skeletal formulas
- **Electrochemical cells**: Half-cells, electrode arrangements, electron flow direction
- **Graphs**: Rate of reaction curves, concentration vs time, temperature effects`,

  biology: `## WHEN TO INCLUDE DIAGRAMS

For Biology questions, you SHOULD include a diagram when the question involves:
- **Cell diagrams**: Plant/animal cells, organelles, cell membrane structure
- **Organ system diagrams**: Heart structure, lungs, digestive system, nervous system
- **Graphs**: Population growth curves, enzyme activity, absorption spectra
- **Food webs/chains**: Energy flow, trophic levels, predator-prey relationships
- **Cycles**: Carbon cycle, nitrogen cycle, water cycle
- **Microscope drawings**: Cell structure with labels and scale
- **DNA/genetics**: DNA structure, chromosomes, Punnett squares
- **Transport diagrams**: Osmosis, diffusion, active transport across membranes`,

  computerscience: `## WHEN TO INCLUDE DIAGRAMS

For Computer Science questions, you SHOULD include a diagram when the question involves:
- **Flowcharts**: Algorithm steps, decision points, process flow
- **Logic gate diagrams**: AND, OR, NOT, NAND, NOR, XOR gates and combinations
- **Network topology**: Star, bus, ring, mesh network diagrams
- **Data structure diagrams**: Binary trees, linked lists, stacks, queues
- **Entity-relationship diagrams**: Database tables and relationships
- **State transition diagrams**: Finite state machines, automata
- **Memory diagrams**: Stack frames, heap allocation, pointer references`,

  economics: `## WHEN TO INCLUDE DIAGRAMS

For Economics questions, you SHOULD include a diagram when the question involves:
- **Supply and demand curves**: Market equilibrium, shifts, price elasticity
- **Cost/revenue curves**: MC, AC, AR, MR curves for firms
- **AD/AS diagrams**: Macroeconomic equilibrium, Keynesian vs Classical
- **Production possibility frontiers**: Opportunity cost, economic growth
- **Market structure diagrams**: Perfect competition, monopoly, oligopoly equilibrium
- **Circular flow diagrams**: Income flow between economic agents
- **Phillips curve**: Inflation-unemployment trade-off
- **Lorenz curve**: Income inequality, Gini coefficient`,

  geography: `## WHEN TO INCLUDE DIAGRAMS

For Geography questions, you SHOULD include a diagram when the question involves:
- **Cross-section diagrams**: River profiles, coastal features, landform profiles
- **Climate graphs**: Temperature and precipitation over months
- **Population pyramids**: Age-sex distribution diagrams
- **Annotated landform diagrams**: Erosion features, deposition features
- **Hydrological cycle**: Water cycle stages
- **Plate tectonics**: Boundary types, volcanic/earthquake zones`,

  psychology: `## WHEN TO INCLUDE DIAGRAMS

For Psychology questions, you SHOULD include a diagram when the question involves:
- **Brain diagrams**: Brain regions, lobes, neural structures
- **Experimental design diagrams**: Study structure, control groups, variables
- **Graphs**: Bar charts for study results, scatter plots for correlations
- **Memory model diagrams**: Working memory model, multi-store model
- **Research methodology diagrams**: Sampling methods, experimental layouts`,

  business: `## WHEN TO INCLUDE DIAGRAMS

For Business questions, you SHOULD include a diagram when the question involves:
- **Break-even charts**: Costs, revenue, break-even point
- **Organizational charts**: Hierarchy structures, spans of control
- **Cash flow graphs**: Inflows vs outflows over time
- **Boston Matrix**: Market share vs market growth positioning
- **Product life cycle**: Introduction, growth, maturity, decline stages`,

  history: `## WHEN TO INCLUDE DIAGRAMS

For History questions, diagrams are RARELY needed. Only include when specifically relevant:
- **Timeline diagrams**: Sequence of key historical events
- **Simple maps**: Territorial changes, empire boundaries, battle locations
Note: Most history questions are text-based and do NOT require diagrams.`,

  englishliterature: `## WHEN TO INCLUDE DIAGRAMS

For English Literature questions, diagrams are RARELY needed. Only include when specifically helpful:
- **Character relationship maps**: For complex texts with many characters
- **Timeline of plot events**: If chronology is important to the question
Note: Most English Literature questions are essay-based and do NOT require diagrams.`,
};

/**
 * Subject-specific diagram examples showing how to construct common diagrams.
 */
export const SUBJECT_DIAGRAM_EXAMPLES: Record<string, string> = {
  physics: `
### Physics Diagram Examples:

**Force Diagram (Free Body):**
\`\`\`json
{"diagram":{"width":10,"height":12,"showNotAccurate":true,"elements":[
  {"type":"rectangle","topLeft":{"x":3,"y":5},"width":4,"height":2},
  {"type":"text","position":{"x":5,"y":6},"content":"Box"},
  {"type":"arrow","from":{"x":5,"y":7},"to":{"x":5,"y":10},"label":"Weight (W)"},
  {"type":"arrow","from":{"x":5,"y":5},"to":{"x":5,"y":2},"label":"Normal (N)"},
  {"type":"arrow","from":{"x":7,"y":6},"to":{"x":10,"y":6},"label":"Applied Force (F)"}
]}}
\`\`\`

**Simple Circuit:**
\`\`\`json
{"diagram":{"width":12,"height":10,"elements":[
  {"type":"line","from":{"x":2,"y":2},"to":{"x":10,"y":2}},
  {"type":"line","from":{"x":10,"y":2},"to":{"x":10,"y":8}},
  {"type":"line","from":{"x":10,"y":8},"to":{"x":2,"y":8}},
  {"type":"line","from":{"x":2,"y":8},"to":{"x":2,"y":2}},
  {"type":"rectangle","topLeft":{"x":5,"y":1.5},"width":2,"height":1},
  {"type":"text","position":{"x":6,"y":0.8},"content":"R"},
  {"type":"text","position":{"x":1,"y":5},"content":"Cell"}
]}}
\`\`\``,

  chemistry: `
### Chemistry Diagram Examples:

**Simple Apparatus:**
\`\`\`json
{"diagram":{"width":10,"height":12,"showNotAccurate":true,"elements":[
  {"type":"rectangle","topLeft":{"x":3,"y":4},"width":4,"height":5},
  {"type":"text","position":{"x":5,"y":7},"content":"Beaker"},
  {"type":"line","from":{"x":5,"y":4},"to":{"x":5,"y":1}},
  {"type":"text","position":{"x":6.5,"y":2},"content":"Thermometer"}
]}}
\`\`\`

**Particle Diagram (Solid):**
\`\`\`json
{"diagram":{"width":8,"height":8,"elements":[
  {"type":"point","position":{"x":2,"y":2},"style":"circle"},
  {"type":"point","position":{"x":4,"y":2},"style":"circle"},
  {"type":"point","position":{"x":6,"y":2},"style":"circle"},
  {"type":"point","position":{"x":2,"y":4},"style":"circle"},
  {"type":"point","position":{"x":4,"y":4},"style":"circle"},
  {"type":"point","position":{"x":6,"y":4},"style":"circle"},
  {"type":"point","position":{"x":2,"y":6},"style":"circle"},
  {"type":"point","position":{"x":4,"y":6},"style":"circle"},
  {"type":"point","position":{"x":6,"y":6},"style":"circle"}
]}}
\`\`\``,

  biology: `
### Biology Diagram Examples:

**Simple Animal Cell:**
\`\`\`json
{"diagram":{"width":12,"height":12,"showNotAccurate":true,"elements":[
  {"type":"circle","center":{"x":6,"y":6},"radius":4.2,"stroke":"#000","strokeWidth":2,"fill":"rgba(200,220,255,0.1)"},
  {"type":"circle","center":{"x":6,"y":6},"radius":1.5,"stroke":"#000","strokeWidth":2,"fill":"rgba(150,150,255,0.3)"},
  {"type":"circle","center":{"x":3,"y":3.5},"radius":0.5,"stroke":"#000","strokeWidth":1,"fill":"rgba(255,150,150,0.5)"},
  {"type":"circle","center":{"x":9,"y":8.5},"radius":0.4,"stroke":"#000","strokeWidth":1,"fill":"rgba(150,255,150,0.5)"},
  {"type":"circle","center":{"x":3.5,"y":9},"radius":0.4,"stroke":"#000","strokeWidth":1,"fill":"rgba(255,200,150,0.5)"},
  {"type":"text","position":{"x":6,"y":6},"content":"Nucleus","fontSize":10},
  {"type":"text","position":{"x":3,"y":2.5},"content":"Mitochondria","fontSize":8},
  {"type":"text","position":{"x":9,"y":9.5},"content":"Ribosome","fontSize":8},
  {"type":"text","position":{"x":3.5,"y":10},"content":"Lysosome","fontSize":8},
  {"type":"text","position":{"x":9.5,"y":11.2},"content":"Cell membrane","fontSize":9}
]}}
\`\`\`

**Simple Plant Cell:**
\`\`\`json
{"diagram":{"width":12,"height":12,"showNotAccurate":true,"elements":[
  {"type":"rectangle","topLeft":{"x":1,"y":1},"width":10,"height":10,"stroke":"#000","strokeWidth":3,"fill":"rgba(200,255,200,0.1)"},
  {"type":"rectangle","topLeft":{"x":1.3,"y":1.3},"width":9.4,"height":9.4,"stroke":"#666","strokeWidth":1,"fill":"rgba(220,240,255,0.1)"},
  {"type":"circle","center":{"x":5.5,"y":6},"radius":1.6,"stroke":"#000","strokeWidth":2,"fill":"rgba(150,150,255,0.3)"},
  {"type":"circle","center":{"x":3,"y":4},"radius":0.5,"stroke":"#000","strokeWidth":1,"fill":"rgba(255,150,150,0.5)"},
  {"type":"rectangle","topLeft":{"x":7.5,"y":3.5},"width":1.2,"height":2,"stroke":"#000","strokeWidth":1,"fill":"rgba(100,255,100,0.6)"},
  {"type":"rectangle","topLeft":{"x":8,"y":7},"width":1,"height":1.5,"stroke":"#000","strokeWidth":1,"fill":"rgba(100,255,100,0.6)"},
  {"type":"circle","center":{"x":6.5,"y":8.5},"radius":0.8,"fill":"rgba(240,240,240,0.8)","stroke":"#999","strokeWidth":1},
  {"type":"text","position":{"x":5.5,"y":6},"content":"Nucleus","fontSize":9},
  {"type":"text","position":{"x":3,"y":3},"content":"Mitochondria","fontSize":7},
  {"type":"text","position":{"x":8.1,"y":4.5},"content":"Chloroplast","fontSize":7},
  {"type":"text","position":{"x":6.5,"y":8.5},"content":"Vacuole","fontSize":7},
  {"type":"text","position":{"x":1.5,"y":0.5},"content":"Cell wall","fontSize":8},
  {"type":"text","position":{"x":10.5,"y":11.5},"content":"Cell membrane","fontSize":7}
]}}
\`\`\`

**Food Chain:**
\`\`\`json
{"diagram":{"width":14,"height":4,"elements":[
  {"type":"text","position":{"x":2,"y":2},"content":"Grass"},
  {"type":"arrow","from":{"x":3.5,"y":2},"to":{"x":5,"y":2}},
  {"type":"text","position":{"x":6.5,"y":2},"content":"Rabbit"},
  {"type":"arrow","from":{"x":8,"y":2},"to":{"x":9.5,"y":2}},
  {"type":"text","position":{"x":11,"y":2},"content":"Fox"}
]}}
\`\`\``,

  economics: `
### Economics Diagram Examples:

**Supply and Demand:**
\`\`\`json
{"diagram":{"width":10,"height":10,"elements":[
  {"type":"axes","origin":{"x":1,"y":1},"xLength":8,"yLength":8,"xLabel":"Quantity","yLabel":"Price","showArrows":true},
  {"type":"line","from":{"x":2,"y":8},"to":{"x":8,"y":2},"label":"D"},
  {"type":"line","from":{"x":2,"y":2},"to":{"x":8,"y":8},"label":"S"},
  {"type":"point","position":{"x":5,"y":5,"label":"E"},"style":"dot"}
]}}
\`\`\`

**Cost Curves:**
\`\`\`json
{"diagram":{"width":10,"height":10,"elements":[
  {"type":"axes","origin":{"x":1,"y":1},"xLength":8,"yLength":8,"xLabel":"Output","yLabel":"Cost"},
  {"type":"curve","points":[{"x":2,"y":6},{"x":4,"y":3},{"x":6,"y":2.5},{"x":8,"y":4}],"label":"AC"},
  {"type":"curve","points":[{"x":2,"y":4},{"x":4,"y":2},{"x":6,"y":3},{"x":8,"y":6}],"label":"MC"}
]}}
\`\`\``,

  computerscience: `
### Computer Science Diagram Examples:

**Simple Flowchart:**
\`\`\`json
{"diagram":{"width":10,"height":14,"elements":[
  {"type":"rectangle","topLeft":{"x":3,"y":1},"width":4,"height":2},
  {"type":"text","position":{"x":5,"y":2},"content":"Start"},
  {"type":"arrow","from":{"x":5,"y":3},"to":{"x":5,"y":5}},
  {"type":"rectangle","topLeft":{"x":3,"y":5},"width":4,"height":2},
  {"type":"text","position":{"x":5,"y":6},"content":"Process"},
  {"type":"arrow","from":{"x":5,"y":7},"to":{"x":5,"y":9}},
  {"type":"rectangle","topLeft":{"x":3,"y":9},"width":4,"height":2},
  {"type":"text","position":{"x":5,"y":10},"content":"End"}
]}}
\`\`\`

**Binary Tree:**
\`\`\`json
{"diagram":{"width":12,"height":10,"elements":[
  {"type":"circle","center":{"x":6,"y":2},"radius":0.8},
  {"type":"text","position":{"x":6,"y":2},"content":"5"},
  {"type":"line","from":{"x":5.5,"y":2.6},"to":{"x":3.5,"y":4.4}},
  {"type":"circle","center":{"x":3,"y":5},"radius":0.8},
  {"type":"text","position":{"x":3,"y":5},"content":"3"},
  {"type":"line","from":{"x":6.5,"y":2.6},"to":{"x":8.5,"y":4.4}},
  {"type":"circle","center":{"x":9,"y":5},"radius":0.8},
  {"type":"text","position":{"x":9,"y":5},"content":"8"}
]}}
\`\`\``,

  geography: `
### Geography Diagram Examples:

**River Cross-Section:**
\`\`\`json
{"diagram":{"width":12,"height":8,"showNotAccurate":true,"elements":[
  {"type":"line","from":{"x":1,"y":6},"to":{"x":4,"y":4}},
  {"type":"line","from":{"x":4,"y":4},"to":{"x":8,"y":4}},
  {"type":"line","from":{"x":8,"y":4},"to":{"x":11,"y":6}},
  {"type":"text","position":{"x":6,"y":5},"content":"River channel"},
  {"type":"text","position":{"x":2,"y":5},"content":"Bank"}
]}}
\`\`\``,

  psychology: `
### Psychology Diagram Examples:

**Brain Regions:**
\`\`\`json
{"diagram":{"width":10,"height":8,"showNotAccurate":true,"elements":[
  {"type":"circle","center":{"x":5,"y":4},"radius":3.5},
  {"type":"line","from":{"x":5,"y":0.5},"to":{"x":5,"y":7.5},"dashed":true},
  {"type":"text","position":{"x":3,"y":3},"content":"Left"},
  {"type":"text","position":{"x":7,"y":3},"content":"Right"}
]}}
\`\`\``,

  history: `
### History Diagram Examples:

**Simple Timeline:**
\`\`\`json
{"diagram":{"width":14,"height":6,"showNotAccurate":true,"elements":[
  {"type":"line","from":{"x":2,"y":3},"to":{"x":12,"y":3},"strokeWidth":3},
  {"type":"point","position":{"x":3,"y":3},"style":"dot","size":6},
  {"type":"point","position":{"x":6,"y":3},"style":"dot","size":6},
  {"type":"point","position":{"x":9,"y":3},"style":"dot","size":6},
  {"type":"point","position":{"x":11,"y":3},"style":"dot","size":6},
  {"type":"text","position":{"x":3,"y":1.5},"content":"1914","fontSize":11},
  {"type":"text","position":{"x":6,"y":1.5},"content":"1916","fontSize":11},
  {"type":"text","position":{"x":9,"y":1.5},"content":"1917","fontSize":11},
  {"type":"text","position":{"x":11,"y":1.5},"content":"1918","fontSize":11},
  {"type":"text","position":{"x":3,"y":4.5},"content":"War begins","fontSize":9},
  {"type":"text","position":{"x":6,"y":4.5},"content":"Battle of Somme","fontSize":9},
  {"type":"text","position":{"x":9,"y":4.5},"content":"USA enters","fontSize":9},
  {"type":"text","position":{"x":11,"y":4.5},"content":"War ends","fontSize":9}
]}}
\`\`\``,

  business: `
### Business Diagram Examples:

**Break-Even Chart:**
\`\`\`json
{"diagram":{"width":10,"height":10,"elements":[
  {"type":"axes","origin":{"x":1,"y":1},"xLength":8,"yLength":8,"xLabel":"Output","yLabel":"£"},
  {"type":"line","from":{"x":1,"y":3},"to":{"x":9,"y":3},"label":"FC"},
  {"type":"line","from":{"x":1,"y":3},"to":{"x":9,"y":8},"label":"TC"},
  {"type":"line","from":{"x":1,"y":1},"to":{"x":9,"y":9},"label":"TR"},
  {"type":"point","position":{"x":5,"y":5.5,"label":"BEP"},"style":"dot"}
]}}
\`\`\``,
};

/**
 * Get combined diagram documentation for a specific subject.
 * Includes subject-specific guidance, the base schema, and relevant examples.
 */
export function getDiagramDocsForSubject(subject: string): string {
  // Normalize subject name
  const key = subject.toLowerCase().replace(/[^a-z]/g, '');

  const guidance = SUBJECT_DIAGRAM_GUIDANCE[key];
  const examples = SUBJECT_DIAGRAM_EXAMPLES[key];

  // If no subject-specific guidance, return base schema only
  if (!guidance) {
    return DIAGRAM_SCHEMA_DOCS;
  }

  return `${guidance}

${DIAGRAM_SCHEMA_DOCS}
${examples || ''}

IMPORTANT: When your question would benefit from a visual representation, include a "diagram" field in your JSON response following the schema above. Make diagrams clear, properly labeled, and educationally useful.`;
}

// ============================================================================
// VISUAL REQUIREMENT SYSTEM
// Topics that REQUIRE diagrams, graphs, or tables - questions don't make sense without them
// ============================================================================

/**
 * Subtopics that REQUIRE visual elements (diagrams, graphs, or tables).
 * Organized by subject and level.
 */
export const VISUAL_REQUIRED_SUBTOPICS: Record<string, Set<string>> = {
  // ==================== ECONOMICS ====================
  'economics-a-level': new Set([
    // Microeconomics diagrams
    'Supply and demand',
    'Market equilibrium',
    'Price elasticity of demand',
    'Price elasticity of supply',
    'Income elasticity',
    'Cross elasticity',
    'Consumer surplus',
    'Producer surplus',
    'Market failure diagrams',
    'Externalities',
    'Public goods',
    'Merit goods',
    'Demerit goods',
    // Cost and revenue curves
    'Short-run costs',
    'Long-run costs',
    'Average cost curves',
    'Marginal cost curves',
    'Revenue curves',
    'Profit maximisation',
    'Perfect competition diagrams',
    'Monopoly diagrams',
    'Oligopoly diagrams',
    'Monopolistic competition',
    // Macroeconomics diagrams
    'Aggregate demand',
    'Aggregate supply',
    'AD/AS model',
    'Keynesian model',
    'Classical model',
    'Production possibility frontier',
    'Circular flow of income',
    'Phillips curve',
    'Lorenz curve',
    'Gini coefficient',
    'Economic growth diagrams',
    'Unemployment diagrams',
    'Inflation diagrams',
    // International
    'Exchange rate diagrams',
    'Balance of payments',
    'Terms of trade',
    'Comparative advantage diagrams',
  ]),

  'economics-gcse': new Set([
    'Supply and demand',
    'Market equilibrium',
    'Price changes',
    'Shifts in demand',
    'Shifts in supply',
  ]),

  // ==================== FURTHER MATHS ====================
  'further-maths-a-level': new Set([
    // Complex numbers
    'Argand diagrams',
    'Complex number geometry',
    'Loci in the complex plane',
    'Roots of unity',
    // Matrices
    'Matrix transformations',
    'Linear transformations',
    'Invariant points',
    'Invariant lines',
    // Polar coordinates
    'Polar curves',
    'Polar coordinates',
    'Converting polar to Cartesian',
    // Conic sections
    'Parabola',
    'Ellipse',
    'Hyperbola',
    'Conic sections',
    // Vectors
    'Vector equations of lines',
    'Vector equations of planes',
    '3D geometry',
    'Cross product applications',
    // Differential equations
    'Direction fields',
    'Phase portraits',
    'Slope fields',
    // Mechanics
    'Force diagrams',
    'Projectile motion',
    'Circular motion diagrams',
    'SHM graphs',
    'Momentum diagrams',
  ]),

  'further-maths-gcse': new Set([
    'Matrix transformations',
    'Vectors',
    'Coordinate geometry proofs',
  ]),

  // ==================== PHYSICS ====================
  'physics-a-level': new Set([
    // Mechanics
    'Free body diagrams',
    'Force diagrams',
    'Projectile motion',
    'Circular motion',
    'Simple harmonic motion',
    'SHM graphs',
    'Momentum and collisions',
    // Waves
    'Wave diagrams',
    'Standing waves',
    'Interference patterns',
    'Diffraction patterns',
    'Young\'s double slit',
    'Refraction diagrams',
    'Ray diagrams',
    // Electricity
    'Circuit diagrams',
    'Series circuits',
    'Parallel circuits',
    'Potential dividers',
    'I-V characteristics',
    // Fields
    'Electric field diagrams',
    'Magnetic field diagrams',
    'Gravitational field diagrams',
    'Field lines',
    'Equipotentials',
    // Nuclear
    'Decay diagrams',
    'Binding energy curve',
    // Thermal
    'PV diagrams',
    'Heating curves',
  ]),

  'physics-gcse': new Set([
    'Circuit diagrams',
    'Force diagrams',
    'Ray diagrams',
    'Wave diagrams',
    'Distance-time graphs',
    'Velocity-time graphs',
    'Sankey diagrams',
    'Energy transfer diagrams',
    'Magnetic field patterns',
  ]),

  // ==================== CHEMISTRY ====================
  'chemistry-a-level': new Set([
    'Enthalpy diagrams',
    'Energy profile diagrams',
    'Born-Haber cycles',
    'Hess cycles',
    'Electron configuration diagrams',
    'Molecular orbital diagrams',
    'Dot-and-cross diagrams',
    'Displayed formulas',
    'Structural formulas',
    'Skeletal formulas',
    'Reaction mechanisms',
    'Electrochemical cells',
    'Standard electrode potentials',
    'Rate-concentration graphs',
    'Maxwell-Boltzmann distribution',
    'Equilibrium diagrams',
    'Buffer diagrams',
    'Titration curves',
    'Chromatography diagrams',
    'Mass spectra',
    'IR spectra',
    'NMR spectra',
  ]),

  'chemistry-gcse': new Set([
    'Dot-and-cross diagrams',
    'Particle diagrams',
    'Apparatus diagrams',
    'Electrolysis diagrams',
    'Displayed formulas',
    'Energy level diagrams',
  ]),

  // ==================== BIOLOGY ====================
  'biology-a-level': new Set([
    'Cell ultrastructure',
    'Membrane structure',
    'DNA structure',
    'Chromosome diagrams',
    'Cell division stages',
    'Mitosis diagrams',
    'Meiosis diagrams',
    'Punnett squares',
    'Genetic crosses',
    'Pedigree diagrams',
    'Ecosystem diagrams',
    'Food webs',
    'Energy flow diagrams',
    'Carbon cycle',
    'Nitrogen cycle',
    'Heart structure',
    'Circulation diagrams',
    'Neuron diagrams',
    'Synapse diagrams',
    'Reflex arc',
    'Hormone regulation graphs',
    'Enzyme kinetics graphs',
    'Population growth curves',
    'Succession diagrams',
    'Kidney structure',
    'Nephron diagram',
    'Photosynthesis diagrams',
    'Respiration diagrams',
  ]),

  'biology-gcse': new Set([
    'Cell diagrams',
    'Plant cell diagrams',
    'Animal cell diagrams',
    'Punnett squares',
    'Food chains',
    'Food webs',
    'Heart structure',
    'Digestive system',
    'Leaf structure',
    'Root hair cell',
    'DNA structure',
  ]),

  // ==================== BUSINESS ====================
  'business-a-level': new Set([
    'Break-even charts',
    'Break-even analysis',
    'Cash flow forecasts',
    'Cash flow graphs',
    'Boston Matrix',
    'Ansoff Matrix',
    'Product life cycle',
    'Organizational charts',
    'Decision trees',
    'Investment appraisal graphs',
    'Supply and demand (business context)',
  ]),

  'business-gcse': new Set([
    'Break-even charts',
    'Cash flow forecasts',
    'Organizational charts',
    'Product life cycle',
  ]),

  // ==================== GEOGRAPHY ====================
  'geography-a-level': new Set([
    'Population pyramids',
    'Climate graphs',
    'Hydrographs',
    'Cross-sections',
    'Drainage basin diagrams',
    'Coastal processes diagrams',
    'Glacial landforms',
    'River landforms',
    'Plate boundary diagrams',
    'Demographic transition model',
    'Urban models',
    'Development indicators graphs',
    'Carbon cycle',
    'Water cycle',
    'Globalisation diagrams',
  ]),

  'geography-gcse': new Set([
    'Population pyramids',
    'Climate graphs',
    'Cross-sections',
    'River features diagrams',
    'Coastal features diagrams',
    'Plate boundary diagrams',
    'OS map skills',
    'Hydrographs',
  ]),

  // ==================== COMPUTER SCIENCE ====================
  'computer-science-a-level': new Set([
    'Logic gate diagrams',
    'Truth tables',
    'Flowcharts',
    'Binary tree diagrams',
    'Tree traversal',
    'Graph traversal',
    'Linked list diagrams',
    'Stack diagrams',
    'Queue diagrams',
    'Hash table diagrams',
    'State transition diagrams',
    'Finite state machines',
    'Entity-relationship diagrams',
    'Network topology diagrams',
    'CPU architecture diagrams',
    'Memory diagrams',
    'Fetch-execute cycle',
  ]),

  'computer-science-gcse': new Set([
    'Logic gate diagrams',
    'Truth tables',
    'Flowcharts',
    'Binary tree diagrams',
    'Network topology diagrams',
    'CPU diagrams',
  ]),

  // ==================== PSYCHOLOGY ====================
  'psychology-a-level': new Set([
    'Brain diagrams',
    'Neuron diagrams',
    'Working memory model',
    'Multi-store model',
    'Research design diagrams',
    'Experimental design layouts',
    'Bar charts (results)',
    'Histograms',
    'Scatter graphs',
    'Normal distribution curves',
    'Biological approach diagrams',
  ]),

  // ==================== MATHS (extended from prompts-aqa.ts) ====================
  'maths-gcse': new Set([
    // Circle theorems
    'Circle theorems (H)',
    'Tangent and radius perpendicular (H)',
    'Angles in the same segment (H)',
    'Angle at centre theorem (H)',
    'Angles in a semicircle (H)',
    'Cyclic quadrilaterals (H)',
    'Alternate segment theorem (H)',
    // Transformations
    'Reflections',
    'Rotations',
    'Translations',
    'Enlargements',
    'Combined transformations (H)',
    // Constructions and loci
    'Constructions',
    'Perpendicular bisector',
    'Angle bisector',
    'Loci',
    // Bearings
    'Bearings',
    // Vectors
    'Vectors (H)',
    'Vector geometry (H)',
    // Similar shapes
    'Similar shapes',
    'Similar triangles',
    'Congruent triangles',
  ]),

  'maths-a-level': new Set([
    // Coordinate geometry
    'Circle equations',
    'Parametric equations',
    'Curves and graphs',
    // Vectors
    'Vector geometry',
    '3D vectors',
    // Mechanics
    'Force diagrams',
    'Projectile motion',
    'Kinematics graphs',
  ]),
};

/**
 * Topic IDs that frequently require visual elements.
 * Used when the subtopic is general (e.g., just the topic name).
 */
export const VISUAL_REQUIRED_TOPICS: Record<string, Set<string>> = {
  // Physics topics that often need diagrams
  'physics': new Set([
    'physics-forces',
    'physics-electricity',
    'physics-waves',
    'physics-energy',
    'physics-motion',
    'physics-magnetism',
    'physics-particle-model',
    'physics-atomic-structure',
    'forces',
    'electricity',
    'waves',
    'energy',
    'motion',
    'magnetism',
    'mechanics',
    'circuits',
    'optics',
  ]),
  // Chemistry topics
  'chemistry': new Set([
    'chemistry-atomic-structure',
    'chemistry-bonding',
    'chemistry-organic',
    'chemistry-rates',
    'chemistry-equilibria',
    'chemistry-electrochemistry',
    'atomic-structure',
    'bonding',
    'organic-chemistry',
    'rates-of-reaction',
  ]),
  // Biology topics
  'biology': new Set([
    'biology-cell-biology',
    'biology-organisation',
    'biology-inheritance',
    'biology-ecology',
    'cell-biology',
    'organisation',
    'inheritance',
    'ecology',
    'bioenergetics',
  ]),
  // Maths topics
  'maths': new Set([
    'maths-geometry',
    'maths-transformations',
    'maths-vectors',
    'maths-trigonometry',
    'maths-graphs',
    'maths-coordinate-geometry',
    'geometry',
    'transformations',
    'vectors',
    'trigonometry',
    'graphs',
    'coordinate-geometry',
    'circle-theorems',
    'constructions',
  ]),
  // Economics topics
  'economics': new Set([
    'economics-microeconomics',
    'economics-macroeconomics',
    'microeconomics',
    'macroeconomics',
    'market-structures',
    'market-failure',
    'aggregate-demand',
  ]),
  // Further Maths topics
  'further-maths': new Set([
    'further-maths-complex-numbers',
    'further-maths-matrices',
    'further-maths-polar-coordinates',
    'further-maths-mechanics',
    'complex-numbers',
    'matrices',
    'polar-coordinates',
    'mechanics',
  ]),
  // Geography topics
  'geography': new Set([
    'geography-physical',
    'geography-human',
    'geography-skills',
    'physical-geography',
    'coastal-landscapes',
    'river-landscapes',
    'hazards',
    'ecosystems',
  ]),
};

/**
 * Question types that typically require visual elements
 */
export const VISUAL_REQUIRED_QUESTION_TYPES = new Set([
  'graph',
  'data-analysis',
  'diagram',
  'sketch',
  'draw',
]);

/**
 * Check if a topic (not just subtopic) often requires visuals.
 * Useful when subtopic is general or matches the topic name.
 */
export function topicOftenRequiresVisual(
  subject: string,
  topicId: string
): boolean {
  const subjectKey = subject.toLowerCase().replace(/[^a-z-]/g, '');
  const topicSet = VISUAL_REQUIRED_TOPICS[subjectKey];

  if (!topicSet) return false;

  const topicIdLower = topicId.toLowerCase();

  // Direct match
  if (topicSet.has(topicIdLower)) return true;

  // Partial match - check if topic ID contains any of the required topics
  for (const required of topicSet) {
    if (topicIdLower.includes(required) || required.includes(topicIdLower)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if a question type typically requires visual elements
 */
export function questionTypeRequiresVisual(questionType: string): boolean {
  return VISUAL_REQUIRED_QUESTION_TYPES.has(questionType.toLowerCase());
}

/**
 * Comprehensive check for whether a question should include a visual.
 * Considers subtopic, topic, question type, and subject.
 */
export function shouldIncludeVisual(
  subject: string,
  level: string,
  topicId: string,
  subtopic: string,
  questionType?: string
): boolean {
  // Check 1: Specific subtopic requires visual
  if (subtopicRequiresVisual(subject, level, subtopic)) {
    return true;
  }

  // Check 2: Topic often requires visuals
  if (topicOftenRequiresVisual(subject, topicId)) {
    return true;
  }

  // Check 3: Question type requires visual
  if (questionType && questionTypeRequiresVisual(questionType)) {
    return true;
  }

  // Check 4: Subtopic name suggests visual content
  const visualKeywords = [
    'diagram', 'graph', 'chart', 'curve', 'draw', 'sketch',
    'plot', 'circuit', 'ray', 'force', 'vector', 'shape',
    'triangle', 'circle', 'polygon', 'transformation', 'reflection',
    'rotation', 'translation', 'enlargement', 'construction', 'locus',
    'bearing', 'angle', 'equilibrium', 'supply', 'demand', 'model'
  ];

  const subtopicLower = subtopic.toLowerCase();
  for (const keyword of visualKeywords) {
    if (subtopicLower.includes(keyword)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if a subtopic requires a visual element for a given subject.
 */
export function subtopicRequiresVisual(
  subject: string,
  level: string,
  subtopic: string
): boolean {
  const key = `${subject.toLowerCase()}-${level.toLowerCase()}`;
  const requiredSet = VISUAL_REQUIRED_SUBTOPICS[key];

  if (!requiredSet) return false;

  // Check for exact match first
  if (requiredSet.has(subtopic)) return true;

  const subtopicLower = subtopic.toLowerCase();

  // Check for partial match (subtopic contains or is contained by a required topic)
  for (const required of requiredSet) {
    const requiredLower = required.toLowerCase();

    // Full string containment
    if (subtopicLower.includes(requiredLower) || requiredLower.includes(subtopicLower)) {
      return true;
    }

    // Key word matching - if significant words overlap, it's likely a match
    // Extract significant words (3+ chars, not common words)
    const commonWords = new Set(['the', 'and', 'for', 'with', 'from', 'into', 'using']);
    const getKeyWords = (str: string) =>
      str.toLowerCase()
        .split(/[\s\-\/()]+/)
        .filter((w) => w.length >= 3 && !commonWords.has(w));

    const subtopicWords = getKeyWords(subtopic);
    const requiredWords = getKeyWords(required);

    // If at least 2 key words match (or 1 if there's only 1-2 words), consider it a match
    const matchingWords = subtopicWords.filter((w) =>
      requiredWords.some((rw) => rw.includes(w) || w.includes(rw))
    );

    const minMatchCount = Math.min(2, Math.max(1, Math.min(subtopicWords.length, requiredWords.length)));
    if (matchingWords.length >= minMatchCount) {
      return true;
    }
  }

  return false;
}

/**
 * Get visual (diagram/graph/table) instructions for a subject and subtopic.
 * Returns empty string if no visual is required.
 */
export function getVisualInstructions(
  subject: string,
  level: string,
  subtopic: string
): string {
  if (!subtopicRequiresVisual(subject, level, subtopic)) {
    return '';
  }

  const subjectKey = subject.toLowerCase().replace(/[^a-z]/g, '');
  const examples = SUBJECT_DIAGRAM_EXAMPLES[subjectKey] || '';

  // Determine what type of visual is most appropriate
  const visualType = getRecommendedVisualType(subject, subtopic);

  return `
## VISUAL ELEMENT REQUIRED

This subtopic (${subtopic}) REQUIRES a ${visualType}. The question will not make sense without a visual representation.

${DIAGRAM_SCHEMA_DOCS}
${examples}

You MUST include a "diagram" field in your JSON response. The visual should be:
- Clear and properly labeled
- Appropriately sized for the content
- Educationally useful and accurate

Example structure:
{
  "content": "Question text...",
  "marks": 4,
  "solution": "...",
  "markScheme": [...],
  "diagram": {
    "width": 12,
    "height": 10,
    "showNotAccurate": true,
    "elements": [...]
  }
}
`;
}

/**
 * Determine the most appropriate visual type for a given subject and subtopic.
 */
function getRecommendedVisualType(subject: string, subtopic: string): string {
  const subjectLower = subject.toLowerCase();
  const subtopicLower = subtopic.toLowerCase();

  // Economics - mostly curves and diagrams
  if (subjectLower.includes('economics')) {
    if (subtopicLower.includes('curve')) return 'graph/curve diagram';
    if (subtopicLower.includes('diagram')) return 'diagram';
    if (subtopicLower.includes('model')) return 'economic model diagram';
    return 'economic diagram';
  }

  // Further Maths
  if (subjectLower.includes('further')) {
    if (subtopicLower.includes('argand')) return 'Argand diagram';
    if (subtopicLower.includes('polar')) return 'polar curve diagram';
    if (subtopicLower.includes('matrix')) return 'transformation diagram';
    if (subtopicLower.includes('conic') || subtopicLower.includes('parabola') ||
        subtopicLower.includes('ellipse') || subtopicLower.includes('hyperbola')) {
      return 'conic section graph';
    }
    return 'mathematical diagram';
  }

  // Physics
  if (subjectLower.includes('physics')) {
    if (subtopicLower.includes('circuit')) return 'circuit diagram';
    if (subtopicLower.includes('force')) return 'free body diagram';
    if (subtopicLower.includes('ray')) return 'ray diagram';
    if (subtopicLower.includes('wave')) return 'wave diagram';
    if (subtopicLower.includes('field')) return 'field diagram';
    if (subtopicLower.includes('graph')) return 'graph';
    return 'physics diagram';
  }

  // Chemistry
  if (subjectLower.includes('chemistry')) {
    if (subtopicLower.includes('enthalpy') || subtopicLower.includes('energy')) return 'energy diagram';
    if (subtopicLower.includes('dot') || subtopicLower.includes('cross')) return 'dot-and-cross diagram';
    if (subtopicLower.includes('formula')) return 'structural formula diagram';
    if (subtopicLower.includes('mechanism')) return 'reaction mechanism diagram';
    if (subtopicLower.includes('spectrum') || subtopicLower.includes('spectra')) return 'spectrum diagram';
    return 'chemistry diagram';
  }

  // Biology
  if (subjectLower.includes('biology')) {
    if (subtopicLower.includes('cell')) return 'cell diagram';
    if (subtopicLower.includes('punnett')) return 'Punnett square';
    if (subtopicLower.includes('food') || subtopicLower.includes('web')) return 'food web/chain diagram';
    if (subtopicLower.includes('cycle')) return 'cycle diagram';
    if (subtopicLower.includes('graph')) return 'graph';
    return 'biological diagram';
  }

  // Business
  if (subjectLower.includes('business')) {
    if (subtopicLower.includes('break-even')) return 'break-even chart';
    if (subtopicLower.includes('cash flow')) return 'cash flow graph';
    if (subtopicLower.includes('matrix')) return 'matrix diagram';
    if (subtopicLower.includes('chart') || subtopicLower.includes('organizational')) return 'organizational chart';
    return 'business diagram';
  }

  // Geography
  if (subjectLower.includes('geography')) {
    if (subtopicLower.includes('pyramid')) return 'population pyramid';
    if (subtopicLower.includes('climate')) return 'climate graph';
    if (subtopicLower.includes('cross-section')) return 'cross-section diagram';
    if (subtopicLower.includes('cycle')) return 'cycle diagram';
    return 'geographical diagram';
  }

  // Computer Science
  if (subjectLower.includes('computer')) {
    if (subtopicLower.includes('logic')) return 'logic gate diagram';
    if (subtopicLower.includes('flowchart')) return 'flowchart';
    if (subtopicLower.includes('tree')) return 'tree diagram';
    if (subtopicLower.includes('state')) return 'state transition diagram';
    if (subtopicLower.includes('network')) return 'network topology diagram';
    return 'computing diagram';
  }

  // Psychology
  if (subjectLower.includes('psychology')) {
    if (subtopicLower.includes('brain') || subtopicLower.includes('neuron')) return 'anatomical diagram';
    if (subtopicLower.includes('model')) return 'model diagram';
    if (subtopicLower.includes('graph') || subtopicLower.includes('chart')) return 'statistical graph';
    return 'psychology diagram';
  }

  // Default
  return 'diagram';
}

/**
 * Parse JSON response from AI model.
 * Optionally validates the parsed output against subject-specific rules.
 *
 * @param response - Raw AI response string
 * @param context - Optional validation context for subject-specific validation
 */
export function parseQuestionResponse(
  response: string,
  context?: ValidationContext
): {
  content: string;
  marks: number;
  solution: string;
  markScheme: string[];
  diagram?: DiagramSpec;
  solutionDiagram?: DiagramSpec;
  diagramQualityScore: number;
} {
  try {
    let jsonStr = response;

    // Remove markdown code blocks if present
    const codeBlockMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
      jsonStr = codeBlockMatch[1];
    }

    // Find the JSON object
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    if (!parsed.content || typeof parsed.content !== 'string') {
      throw new Error('Missing or invalid content field');
    }

    // Validate if context provided
    if (context) {
      const validation = validateQuestionOutput(parsed, context);
      if (!validation.valid) {
        console.warn(
          `[Question Validation] Errors for ${context.subject}/${context.qualification}/${context.difficulty}:`,
          validation.errors
        );
      }
      // Log warnings for monitoring
      if (validation.warnings.length > 0) {
        console.info(
          `[Question Validation] Warnings for ${context.subject}/${context.qualification}/${context.difficulty}:`,
          validation.warnings.map((w) => `${w.code}: ${w.message}`)
        );
      }
    }

    // Validate diagram quality if present
    let diagram = parsed.diagram || undefined;
    let solutionDiagram = parsed.solutionDiagram || undefined;
    let diagramQualityScore = 100;

    if (diagram) {
      const quality = assessDiagramQuality(diagram);
      diagramQualityScore = quality.score;

      if (quality.score < 50) {
        console.warn(
          `[Diagram Quality] Low score (${quality.score}/100):`,
          quality.issues
        );
      }

      // Auto-sanitize the diagram
      const { sanitizedSpec } = validateAndSanitizeDiagram(diagram);
      diagram = sanitizedSpec;
    }

    if (solutionDiagram) {
      const { sanitizedSpec } = validateAndSanitizeDiagram(solutionDiagram);
      solutionDiagram = sanitizedSpec;
    }

    return {
      content: parsed.content,
      marks: typeof parsed.marks === 'number' ? parsed.marks : 3,
      solution: parsed.solution || '',
      markScheme: Array.isArray(parsed.markScheme) ? parsed.markScheme : [],
      diagram,
      solutionDiagram,
      diagramQualityScore,
    };
  } catch (error) {
    console.error('Failed to parse question response:', error);
    throw new Error('Failed to parse AI response');
  }
}

// Re-export ValidationContext for convenience
export type { ValidationContext } from '@/lib/validations/question-output';
