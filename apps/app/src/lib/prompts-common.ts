import { Difficulty, Topic } from '@/types';
import { DiagramSpec } from '@/types/diagram';

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
} {
  const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  return {
    format: randomChoice(VARIETY_DIMENSIONS.questionFormat),
    context: randomChoice(VARIETY_DIMENSIONS.contextType),
    direction: randomChoice(VARIETY_DIMENSIONS.reasoningDirection),
    infoFormat: randomChoice(VARIETY_DIMENSIONS.informationFormat),
    commandWord: randomChoice(VARIETY_DIMENSIONS.commandWords),
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

  return `## VARIETY REQUIREMENTS FOR THIS QUESTION

You MUST follow these specific variety parameters to ensure this question is structurally different from others:

**Question Format:** Generate ${formatDescriptions[variety.format] || variety.format}

**Context Theme:** ${variety.context !== 'none_pure_maths' ? `Use a context involving ${contextDescriptions[variety.context] || variety.context}` : 'Use pure mathematics without real-world context'}

**Reasoning Direction:** ${directionDescriptions[variety.direction] || variety.direction}

**Information Presentation:** ${infoDescriptions[variety.infoFormat] || variety.infoFormat}

**Suggested Command Word:** Consider using "${variety.commandWord.replace('_', ' ')}" (but use what's most appropriate)

IMPORTANT: Do NOT generate a generic or commonly-seen question structure. Create something that feels fresh while still being mathematically valid and appropriate for GCSE level.`;
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

/**
 * Diagram schema documentation for prompts.
 */
export const DIAGRAM_SCHEMA_DOCS = `## DIAGRAM SPECIFICATION

If your question requires a diagram, include a "diagram" field in your JSON response. The diagram will be rendered as an SVG.

### Common Diagram Types:

**Triangle/Polygon:**
\`\`\`json
{
  "diagram": {
    "width": 10,
    "height": 8,
    "showNotAccurate": true,
    "elements": [
      {
        "type": "polygon",
        "vertices": [
          {"x": 1, "y": 1, "label": "A", "labelPosition": "bottom-left"},
          {"x": 9, "y": 1, "label": "B", "labelPosition": "bottom-right"},
          {"x": 5, "y": 7, "label": "C", "labelPosition": "top"}
        ],
        "sideLabels": [
          {"fromIndex": 0, "toIndex": 1, "label": "8 cm"},
          {"fromIndex": 1, "toIndex": 2, "label": "6 cm"}
        ]
      },
      {
        "type": "angle-marker",
        "vertex": {"x": 9, "y": 1},
        "ray1End": {"x": 1, "y": 1},
        "ray2End": {"x": 5, "y": 7},
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
    "elements": [
      {
        "type": "circle",
        "center": {"x": 5, "y": 5, "label": "O"},
        "radius": 4,
        "radiusLabel": "7 cm"
      }
    ]
  }
}
\`\`\`

**Coordinate Graph:**
\`\`\`json
{
  "diagram": {
    "elements": [
      {"type": "axes", "xMin": -5, "xMax": 5, "yMin": -5, "yMax": 10, "showNumbers": true, "xLabel": "x", "yLabel": "y"},
      {"type": "grid", "xMin": -5, "xMax": 5, "yMin": -5, "yMax": 10},
      {"type": "curve", "fn": "x^2", "stroke": "#3b82f6"},
      {"type": "point", "position": {"x": 2, "y": 4, "label": "P"}, "style": "dot"}
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

### Important:
- Set "showNotAccurate": true for geometry diagrams
- Coordinates should be in logical units (they will be scaled)
- Use labelPosition for vertex labels: "top", "bottom", "left", "right", "top-left", etc.
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

**Simple Cell:**
\`\`\`json
{"diagram":{"width":10,"height":10,"showNotAccurate":true,"elements":[
  {"type":"circle","center":{"x":5,"y":5},"radius":4},
  {"type":"circle","center":{"x":5,"y":5},"radius":1.5},
  {"type":"text","position":{"x":5,"y":5},"content":"Nucleus"},
  {"type":"text","position":{"x":5,"y":9.5},"content":"Cell membrane"}
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

/**
 * Parse JSON response from AI model.
 */
export function parseQuestionResponse(response: string): {
  content: string;
  marks: number;
  solution: string;
  markScheme: string[];
  diagram?: DiagramSpec;
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

    return {
      content: parsed.content,
      marks: typeof parsed.marks === 'number' ? parsed.marks : 3,
      solution: parsed.solution || '',
      markScheme: Array.isArray(parsed.markScheme) ? parsed.markScheme : [],
      diagram: parsed.diagram || undefined,
    };
  } catch (error) {
    console.error('Failed to parse question response:', error);
    throw new Error('Failed to parse AI response');
  }
}
