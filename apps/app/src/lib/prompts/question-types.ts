/**
 * Question Type Templates
 *
 * Standardized templates for different question types across all subjects.
 * These ensure consistent structure while allowing subject-specific variations.
 */

import { QuestionType, Difficulty } from '@/types';

// ============================================================================
// QUESTION TYPE DESCRIPTIONS
// ============================================================================

export const QUESTION_TYPE_DESCRIPTIONS: Record<QuestionType, string> = {
  'multiple-choice': 'a multiple choice question with 4 options (A, B, C, D) where exactly ONE is correct',
  'short-answer': 'a short answer question requiring a brief response (1-3 sentences or a calculation)',
  'calculation': 'a calculation/numerical problem that requires showing working steps',
  'explain': 'an explain/describe question testing conceptual understanding',
  'extended': 'an extended response question requiring detailed analysis and evaluation',
  'data-analysis': 'a data analysis question involving interpretation of tables, graphs, or datasets',
  'graph': 'a question involving drawing, completing, or analyzing a graph',
  'compare': 'a compare/contrast question analyzing similarities and differences',
  'proof': 'a mathematical proof question requiring logical reasoning and justification',
  'show-that': 'a show-that question where answer is given and working must be shown',
  'essay': 'a long-form essay question requiring structured argument and analysis',
  'source-analysis': 'an essay question analyzing historical sources or documents',
  'interpretation': 'an essay question interpreting texts, themes, or significance',
  'extract-analysis': 'a question analyzing an extract or passage from economics/literature',
  // Mathematics-specific question types (calculation-focused)
  'construction': 'a geometric construction using compass and straightedge to create specific shapes or lines',
  'loci': 'a calculation question finding loci/paths of points satisfying given mathematical conditions',
  'algebraic-manipulation': 'an algebraic calculation requiring simplification, expansion, factorisation, or rearrangement',
  'simultaneous-equations': 'a calculation solving systems of linear or non-linear equations',
  'optimization': 'a calculus calculation finding maximum or minimum values using differentiation',
  'differential-equations': 'a calculation solving differential equations using analytical methods',
  'integration-by-parts': 'an integration calculation using the integration by parts method',
  'statistical-hypothesis': 'a statistical calculation involving hypothesis testing and significance levels',
  'sequence-series': 'a calculation involving arithmetic/geometric sequences, series, or sigma notation',
  'transformation-geometry': 'a calculation involving coordinate transformations, matrices, or geometric mapping',
  // Physics-specific question types
  'practical-method': 'a question describing experimental method, variables, and procedure for physics practicals',
  'practical-analysis': 'a question analyzing experimental data, graphs, and evaluating practical results',
  'circuit-design': 'a question involving electrical circuit analysis, design, or component behavior',
  'wave-calculation': 'a calculation involving wave properties, interference, diffraction, or wave optics',
  'nuclear-decay': 'a calculation involving radioactive decay, half-life, or nuclear reactions',
  'energy-transfer': 'a calculation involving energy transformations, conservation, or efficiency',
  // Chemistry-specific question types
  'chemical-equation': 'a question writing balanced chemical equations with state symbols',
  'structure-drawing': 'a question drawing chemical structures, functional groups, or molecular shapes',
  'titration-calculation': 'a calculation involving titration data, moles, and concentration analysis',
  'organic-mechanism': 'a question showing reaction mechanisms with curly arrows and intermediates',
  'inorganic-analysis': 'a question involving qualitative/quantitative analysis of inorganic compounds',
  'bonding-structure': 'a question analyzing chemical bonding, molecular geometry, or intermolecular forces',
  // Biology-specific question types
  'microscopy-drawing': 'a question involving observation and drawing of microscopic specimens',
  'lifecycle-diagram': 'a question creating or analyzing biological lifecycle diagrams',
  'food-web-analysis': 'a question analyzing feeding relationships and energy flow in ecosystems',
  'genetics-calculation': 'a calculation involving inheritance patterns, ratios, and genetic crosses',
  'plant-adaptation': 'a question analyzing plant structural and functional adaptations',
  'human-physiology': 'a question analyzing human organ systems and physiological processes',
  // Computer Science-specific question types
  'algorithm-design': 'a question designing algorithms using flowcharts, pseudocode, or structured programming',
  'code-analysis': 'a question analyzing existing program code for functionality, errors, or efficiency',
  'data-structure': 'a question involving arrays, lists, stacks, queues, or other data organization methods',
  'pseudocode-writing': 'a question writing structured pseudocode to solve computational problems',
  'trace-table': 'a question tracing through algorithm execution showing variable values step by step',
  'system-design': 'a question designing computer systems, networks, or software architectures',
  // Economics-specific question types
  'data-response': 'a question analyzing economic data from extracts, graphs, and statistical information',
  'diagram-analysis': 'a question drawing or interpreting economic diagrams like supply/demand curves',
  'economic-calculation': 'a calculation involving economic formulas, ratios, and quantitative analysis',
  'case-study-analysis': 'a question analyzing real-world economic scenarios and business cases',
  // Remaining subject-specific question types
  'business-calculation': 'a calculation involving profit, loss, ratios, and business financial analysis',
  'stakeholder-analysis': 'a question analyzing the interests and influence of different business stakeholders',
  'research-methods': 'a question evaluating psychological research designs, methods, and validity',
  'study-evaluation': 'a question critically evaluating psychological studies and their conclusions',
  'map-analysis': 'a question interpreting geographical maps, scales, and spatial data',
  'fieldwork-method': 'a question describing geographical fieldwork methods and data collection techniques',
  'chronology-analysis': 'a question analyzing historical sequences, timelines, and cause-effect relationships',
  'historical-significance': 'a question evaluating the importance and impact of historical events or figures',
  'poetry-comparison': 'a question comparing themes, techniques, and meanings across different poems',
  'character-analysis': 'a question analyzing character development, motivation, and literary techniques',
};

// ============================================================================
// COMMAND WORDS BY QUESTION TYPE
// ============================================================================

export const COMMAND_WORDS_BY_TYPE: Record<QuestionType, string[]> = {
  'multiple-choice': ['Which', 'What', 'Select'],
  'short-answer': ['State', 'Name', 'Give', 'Write', 'Identify'],
  'calculation': ['Calculate', 'Work out', 'Find', 'Determine'],
  'explain': ['Explain', 'Describe', 'Outline', 'Suggest'],
  'extended': ['Evaluate', 'Discuss', 'Analyse', 'Assess', 'To what extent'],
  'data-analysis': ['Describe the pattern', 'What trend', 'Calculate from the data', 'Analyse'],
  'graph': ['Draw', 'Sketch', 'Plot', 'Complete', 'Use the graph to'],
  'compare': ['Compare', 'Contrast', 'Distinguish between', 'What are the similarities and differences'],
  'proof': ['Prove', 'Show that', 'Prove by induction', 'Demonstrate'],
  'show-that': ['Show that', 'Verify that', 'Confirm that'],
  'essay': ['Evaluate', 'Assess', 'To what extent', 'Discuss', 'Analyse'],
  'source-analysis': ['Analyse', 'Evaluate', 'How useful', 'To what extent'],
  'interpretation': ['Explore', 'Analyse', 'Discuss', 'How does'],
  'extract-analysis': ['Analyse', 'Evaluate', 'Assess', 'To what extent'],
  // Mathematics-specific command words
  'construction': ['Construct', 'Draw accurately', 'Using compasses and ruler'],
  'loci': ['Find the locus', 'Draw the locus', 'Calculate the equation of the locus'],
  'algebraic-manipulation': ['Simplify', 'Expand', 'Factorise', 'Rearrange', 'Solve'],
  'simultaneous-equations': ['Solve simultaneously', 'Find the values', 'Solve the system'],
  'optimization': ['Find the maximum', 'Find the minimum', 'Optimize'],
  'differential-equations': ['Solve the differential equation', 'Find the general solution'],
  'integration-by-parts': ['Integrate', 'Find the integral', 'Evaluate'],
  'statistical-hypothesis': ['Test the hypothesis', 'Calculate the test statistic', 'Determine significance'],
  'sequence-series': ['Find the nth term', 'Calculate the sum', 'Determine the series'],
  'transformation-geometry': ['Transform', 'Find the image', 'Calculate the matrix', 'Determine the coordinates'],
  // Physics-specific command words
  'practical-method': ['Describe the method', 'Plan an investigation', 'Identify variables'],
  'practical-analysis': ['Analyse the results', 'Evaluate the method', 'Calculate from the graph'],
  'circuit-design': ['Design a circuit', 'Calculate the current', 'Determine the resistance'],
  'wave-calculation': ['Calculate the frequency', 'Find the wavelength', 'Determine the wave speed'],
  'nuclear-decay': ['Calculate the half-life', 'Determine the activity', 'Find the decay constant'],
  'energy-transfer': ['Calculate the efficiency', 'Determine the energy transferred', 'Find the power'],
  // Chemistry-specific command words
  'chemical-equation': ['Write the equation', 'Balance the equation', 'Complete the equation'],
  'structure-drawing': ['Draw the structure', 'Show the structure', 'Draw the displayed formula'],
  'titration-calculation': ['Calculate the concentration', 'Find the molarity', 'Determine the titre'],
  'organic-mechanism': ['Show the mechanism', 'Draw the mechanism', 'Outline the mechanism'],
  'inorganic-analysis': ['Identify the ions', 'Determine the compound', 'Test for the presence of'],
  'bonding-structure': ['Explain the bonding', 'Draw the shape', 'Describe the structure'],
  // Biology-specific command words
  'microscopy-drawing': ['Draw what you observe', 'Make a labelled drawing', 'Sketch the specimen'],
  'lifecycle-diagram': ['Draw the lifecycle', 'Complete the lifecycle', 'Label the stages'],
  'food-web-analysis': ['Construct a food web', 'Analyse the food chain', 'Predict the effect'],
  'genetics-calculation': ['Calculate the probability', 'Determine the ratio', 'Work out the percentage'],
  'plant-adaptation': ['Explain how the plant is adapted', 'Describe the adaptations', 'Suggest how'],
  'human-physiology': ['Explain how the system works', 'Describe the function', 'Analyse the process'],
};

// ============================================================================
// MARK RANGES BY QUESTION TYPE
// ============================================================================

export const MARK_RANGES_BY_TYPE: Record<QuestionType, { min: number; max: number }> = {
  'multiple-choice': { min: 1, max: 1 },
  'short-answer': { min: 1, max: 3 },
  'calculation': { min: 2, max: 5 },
  'explain': { min: 2, max: 4 },
  'extended': { min: 6, max: 12 },
  'data-analysis': { min: 3, max: 6 },
  'graph': { min: 2, max: 4 },
  'compare': { min: 3, max: 6 },
  'proof': { min: 4, max: 8 },
  'show-that': { min: 3, max: 6 },
  'essay': { min: 20, max: 30 },
  'source-analysis': { min: 25, max: 30 },
  'interpretation': { min: 25, max: 30 },
  'extract-analysis': { min: 15, max: 25 },
  // Mathematics-specific mark ranges
  'construction': { min: 2, max: 4 },
  'loci': { min: 3, max: 6 },
  'algebraic-manipulation': { min: 2, max: 4 },
  'simultaneous-equations': { min: 3, max: 5 },
  'optimization': { min: 4, max: 8 },
  'differential-equations': { min: 4, max: 8 },
  'integration-by-parts': { min: 3, max: 6 },
  'statistical-hypothesis': { min: 4, max: 8 },
  'sequence-series': { min: 3, max: 6 },
  'transformation-geometry': { min: 3, max: 6 },
  // Physics-specific mark ranges
  'practical-method': { min: 4, max: 6 },
  'practical-analysis': { min: 3, max: 6 },
  'circuit-design': { min: 3, max: 5 },
  'wave-calculation': { min: 3, max: 5 },
  'nuclear-decay': { min: 3, max: 5 },
  'energy-transfer': { min: 3, max: 5 },
  // Chemistry-specific mark ranges
  'chemical-equation': { min: 1, max: 3 },
  'structure-drawing': { min: 2, max: 4 },
  'titration-calculation': { min: 3, max: 6 },
  'organic-mechanism': { min: 3, max: 6 },
  'inorganic-analysis': { min: 2, max: 4 },
  'bonding-structure': { min: 3, max: 5 },
  // Biology-specific mark ranges
  'microscopy-drawing': { min: 3, max: 5 },
  'lifecycle-diagram': { min: 3, max: 5 },
  'food-web-analysis': { min: 4, max: 6 },
  'genetics-calculation': { min: 3, max: 5 },
  'plant-adaptation': { min: 4, max: 6 },
  'human-physiology': { min: 4, max: 6 },
};

// ============================================================================
// QUESTION TYPE TEMPLATES
// ============================================================================

/**
 * Template for multiple choice questions
 */
export const MULTIPLE_CHOICE_TEMPLATE = `
## MULTIPLE CHOICE QUESTION REQUIREMENTS

Generate a multiple choice question with these characteristics:
- Exactly 4 options labeled A, B, C, D
- Exactly ONE correct answer
- Three plausible distractors based on common misconceptions or errors
- Clear, unambiguous stem (question)

### Distractor Strategies
Create distractors that reflect real student errors:
- Common calculation mistakes (wrong operation, unit errors)
- Conceptual misconceptions
- Partial understanding (right approach, wrong execution)
- Related but incorrect terms

### Format
"Question stem here

A. First option
B. Second option
C. Third option
D. Fourth option"

### Mark Scheme
Return exactly: ["B1: [Correct letter]"]
`;

/**
 * Template for calculation questions
 */
export const CALCULATION_TEMPLATE = `
## CALCULATION QUESTION REQUIREMENTS

Generate a calculation question with these characteristics:
- Clear context with all values needed
- Explicit or implicit equation/formula requirement
- Sensible numerical answer (2-3 significant figures)
- Units required in the answer

### Structure
1. Context/scenario with given values
2. Clear question asking for a specific quantity
3. State whether formula is given or must be recalled
4. Specify units expected in the answer

### Mark Scheme Pattern (Mathematics-specific)
- M1: States correct formula/equation (e.g., "Uses v = u + at" or equivalent)
- A1: Correct substitution with given values (award even with arithmetic errors)
- M1: Correct rearrangement/manipulation (if required)
- A1: Correct final numerical answer with appropriate units (cao)

### Mark Scheme Notation Guide:
- M1, M2: Method marks (correct approach, award even if arithmetic wrong)
- A1, A2: Accuracy marks (dependent on method marks)
- B1, B2: Working marks (when method and answer inseparable)
- ft: Follow through from previous error
- dep: Dependent on previous mark being scored
- cao: Correct answer only (no follow through)
- awrt: Answer which rounds to (accept range)
- oe: Or equivalent acceptable form
- isw: Ignore subsequent working

### Working Example Format
"Step 1: Write the equation: [formula]
Step 2: Substitute values: [substitution]
Step 3: Calculate: [calculation]
Answer = [value] [unit]"
`;

/**
 * Template for explain questions
 */
export const EXPLAIN_TEMPLATE = `
## EXPLAIN QUESTION REQUIREMENTS

Generate an explain/describe question with these characteristics:
- Tests understanding, not just recall
- Requires linking cause and effect
- Uses appropriate command word for the marks

### Command Word Guide
- "State" (1 mark) = Brief fact, no explanation
- "Describe" (2-3 marks) = What happens, in sequence
- "Explain" (2-4 marks) = Why it happens, with reasoning
- "Suggest" (2-3 marks) = Apply to unfamiliar context

### Mark Scheme Pattern
- Each distinct point = 1 mark
- "Because" statements linking cause to effect
- Correct use of scientific/subject-specific terminology

### Response Quality Indicators
Low: Just states facts without connection
Medium: Describes process with some reasoning
High: Full causal chain with terminology
`;

/**
 * Template for extended response questions
 */
export const EXTENDED_RESPONSE_TEMPLATE = `
## EXTENDED RESPONSE QUESTION REQUIREMENTS

Generate an extended response question (6+ marks) with these characteristics:
- Open-ended requiring analysis and evaluation
- Multiple valid approaches possible
- Requires structured, coherent argument
- Tests higher-order thinking (AO3/AO4)

### Command Words for Extended Response
- "Evaluate" = Judge significance, weigh pros/cons, reach conclusion
- "Discuss" = Present multiple perspectives with evidence
- "Analyse" = Break down, identify patterns, explain relationships
- "To what extent" = Evaluate degree/scope with justification

### Level-Based Marking (Example 6-mark)
**Level 3 (5-6 marks)**: Detailed, well-organised, clear reasoning
- Comprehensive analysis with detailed explanations
- Well-developed line of reasoning, logically structured
- Uses appropriate subject-specific terminology throughout
- Links ideas coherently with clear conclusions

**Level 2 (3-4 marks)**: Some detail, mostly organised, some reasoning
- Adequate analysis with some explanations
- Generally logical structure with some development
- Some appropriate terminology
- Makes some connections between ideas

**Level 1 (1-2 marks)**: Basic points, limited organisation, minimal reasoning
- Limited analysis with basic points only
- Little logical structure or development
- Minimal subject terminology
- Few or no connections between ideas

### Indicative Content Format
List the key points students should cover, but accept alternative valid responses.
`;

/**
 * Template for data analysis questions
 */
export const DATA_ANALYSIS_TEMPLATE = `
## DATA ANALYSIS QUESTION REQUIREMENTS

Generate a data analysis question with these characteristics:
- Includes a table, graph data, or dataset (described in text)
- Requires interpretation and calculation
- Tests ability to draw conclusions from evidence

### Data Presentation
Use the diagram rendering system to include:
- Tables with clear headers and units
- Graphs with labeled axes and data points
- Charts showing trends and patterns
- Mark any anomalous data points clearly

### Question Types
- "Describe the pattern/trend shown..."
- "Calculate the [value] from the data..."
- "What conclusion can be drawn about..."
- "Suggest a reason for the anomaly at..."

### Mark Scheme Pattern
- B1: Identifies correct trend/pattern
- M1: Correct method for calculation
- A1: Correct value from data
- A1: Valid conclusion supported by data
`;

/**
 * Template for compare questions
 */
export const COMPARE_TEMPLATE = `
## COMPARE QUESTION REQUIREMENTS

Generate a compare/contrast question with these characteristics:
- Two items, concepts, or processes to compare
- Requires BOTH similarities AND differences (unless specified)
- Clear criteria for comparison

### Structure
"Compare [Item A] and [Item B] in terms of [criteria]." [X marks]

### Mark Scheme Pattern
For "Compare" questions, require:
- At least one similarity point
- At least one difference point
- Comparative language ("both", "whereas", "however")

### Response Quality
Low: Lists features separately without comparison
Medium: Some comparative statements
High: Integrated comparison with clear criteria
`;

/**
 * Template for construction questions
 */
export const CONSTRUCTION_TEMPLATE = `
## CONSTRUCTION QUESTION REQUIREMENTS

Generate a geometric construction question with these characteristics:
- Requires compass and straightedge only
- Clear step-by-step construction process
- Accurate geometric principles

### Construction Types
- Perpendicular bisectors
- Angle bisectors  
- Perpendicular from point to line
- Parallel lines
- Regular polygons
- Circle constructions

### Mark Scheme Pattern
- M1: Correct arc construction
- M1: Accurate use of compass/ruler
- A1: Correct final construction
- A1: Construction lines shown/labels

### Format Requirements
"Construct [geometric object] using only a ruler and compasses.
You must show all construction lines clearly."
`;

/**
 * Template for algebraic manipulation questions
 */
export const ALGEBRAIC_MANIPULATION_TEMPLATE = `
## ALGEBRAIC MANIPULATION QUESTION REQUIREMENTS

Generate an algebraic manipulation question with these characteristics:
- Clear algebraic expression to manipulate
- Specific instruction (simplify/expand/factorise/rearrange)
- Sensible coefficients and variables

### Manipulation Types
- Simplification (collecting like terms)
- Expansion (multiplying brackets)
- Factorisation (common factors, quadratics)
- Rearranging (making x the subject)

### Mark Scheme Pattern (Algebraic)
- M1: Shows correct algebraic method (e.g., collects like terms, expands brackets)
- A1: Each significant algebraic step correct (may ft previous error)
- A1: Final answer in required form (simplified/factorised/expanded as requested)
- B1: Alternative: Award B1 for direct correct answer with no working shown

### Algebraic Mark Scheme Examples:
- Expansion: "M1: Attempts to expand (x+3)(x-2) A1: x² + x - 6 (cao)"
- Factorisation: "M1: Attempts factorisation M1: Finds correct factors A1: (x+4)(x-3) cao"
- Simplification: "B2: 3x + 7 cao OR M1: Combines like terms A1: 3x + 7"

### Working Requirements
Show each algebraic step clearly with proper notation.
`;

/**
 * Template for simultaneous equations
 */
export const SIMULTANEOUS_EQUATIONS_TEMPLATE = `
## SIMULTANEOUS EQUATIONS QUESTION REQUIREMENTS

Generate a simultaneous equations question with these characteristics:
- Two equations with two unknowns
- Integer or simple fractional solutions
- Context may be included for word problems

### Solution Methods
- Elimination method
- Substitution method
- Graphical method (for GCSE)
- Matrix methods (A-Level only)

### Mark Scheme Pattern (Simultaneous Equations)
- M1: Attempts elimination or substitution method correctly
- M1: Eliminates one variable successfully (or correct substitution)
- A1: Finds correct value for first variable
- A1ft: Finds correct value for second variable (ft from first variable)
- (A1): Optional verification mark if requested in question

### Detailed Marking Examples:
- Elimination: "M1: Multiplies equation to eliminate variable M1: Eliminates successfully A1: x = 3 A1ft: y = 2"
- Substitution: "M1: Rearranges one equation M1: Substitutes into other equation A1: First variable correct A1ft: Second variable"
- Error handling: "Award ft for arithmetic errors but penalise algebraic errors in method marks"

### Format
Give clear equations and ask to "Solve simultaneously" or "Find the values of x and y"
`;

/**
 * Template for practical method questions
 */
export const PRACTICAL_METHOD_TEMPLATE = `
## PRACTICAL METHOD QUESTION REQUIREMENTS

Generate a practical method question with these characteristics:
- Focus on experimental procedure and technique
- Include variables (independent, dependent, control)
- Address safety considerations where relevant
- Test knowledge of required practicals

### Method Components
- Clear step-by-step procedure
- Equipment list and justification
- Variable identification and control
- Safety precautions
- Measurement techniques

### Mark Scheme Pattern (Level-based for 6-mark questions)
**Level 3 (5-6 marks)**: Comprehensive method with all key elements:
- Clearly identifies all variables (independent, dependent, control)
- Detailed measurement procedures with appropriate apparatus
- Safety considerations and risk management
- Logical sequence with precise scientific terminology
- Well-developed line of reasoning, clear and logically structured

**Level 2 (3-4 marks)**: Adequate method with most elements:
- Identifies most variables or describes most procedures
- Some measurement details and basic safety awareness
- Generally logical with some scientific terminology
- Line of reasoning with some structure, mostly relevant

**Level 1 (1-2 marks)**: Basic method with limited elements:
- Limited identification of variables or basic procedures only
- Minimal safety awareness or measurement detail
- Basic scientific language with limited reasoning

### Format Requirements
"Describe a method to investigate [relationship/property].
Your method should include variables, measurements, and safety."
`;

/**
 * Template for practical analysis questions
 */
export const PRACTICAL_ANALYSIS_TEMPLATE = `
## PRACTICAL ANALYSIS QUESTION REQUIREMENTS

Generate a practical analysis question with these characteristics:
- Data interpretation and graph analysis
- Error evaluation and improvement suggestions
- Calculation from experimental data
- Assessment of method validity

### Analysis Components
- Graph plotting and interpretation
- Gradient/intercept calculations
- Error analysis (systematic/random)
- Method evaluation
- Improvement suggestions

### Mark Scheme Pattern (Physics Practical Analysis)
**For calculations (2-3 marks):**
- M1: Uses correct equation/relationship (e.g., gradient = Δy/Δx)
- A1: Correct numerical calculation with appropriate units
- A1: Answer to appropriate significant figures

**For evaluation (4-6 marks, level-based):**
**Level 3 (5-6 marks)**: Comprehensive evaluation
- Identifies multiple sources of error (systematic and random)
- Suggests specific, practical improvements with justification
- Evaluates overall method reliability with scientific reasoning
- Uses precise scientific terminology throughout

**Level 2 (3-4 marks)**: Adequate evaluation
- Identifies some sources of error
- Suggests improvements with limited justification
- Some evaluation of method reliability
- Generally appropriate scientific language

**Level 1 (1-2 marks)**: Basic evaluation
- Limited identification of errors or improvements
- Basic evaluation without detailed reasoning
- Minimal scientific terminology

### Graph/Diagram Requirements
- Include graphs as diagrams using the diagram rendering system
- Show experimental data points with error bars where appropriate
- Include axes labels with units
- Mark any anomalous points clearly
- Show trend lines or best fit lines where relevant

### Data Presentation Format
Use the diagram system to create:
- Scatter plots with data points
- Line graphs with trend lines
- Bar charts for discrete data
- Circuit diagrams for electrical experiments
`;

/**
 * Template for structure drawing questions
 */
export const STRUCTURE_DRAWING_TEMPLATE = `
## STRUCTURE DRAWING QUESTION REQUIREMENTS

Generate a structure drawing question with these characteristics:
- Clear instruction on what type of structure to draw
- Specify the compound or formula given
- Use diagram system for visual representation
- Include functional groups or specific features

### Structure Types
- Displayed formula (showing all bonds)
- Skeletal formula (organic compounds)
- 3D shapes and molecular geometry
- Lewis structures with lone pairs
- Structural isomers

### Mark Scheme Pattern (Chemistry Structure Drawing)
**For displayed formulae (2-3 marks):**
- A1: Correct molecular framework with all atoms shown
- A1: All bonds correctly shown (including C-H bonds when required)
- A1: Correct functional groups and bond arrangements

**For organic mechanisms (3-4 marks):**
- A1: Correct starting structure drawn
- A1: Curly arrows correctly drawn showing electron movement
- A1: Correct intermediate or product structure
- A1: All atoms and bonds clearly shown (C-H bonds essential in mechanisms)

**Special Considerations:**
- "Sticks" to represent C-H bonds acceptable EXCEPT in mechanisms and elimination reactions
- Skeletal structures acceptable unless displayed formula specifically requested
- Award marks for correct stereochemistry when relevant to question

### Format Requirements
Use diagram system to show:
- Chemical structures with proper bonding
- 3D molecular shapes
- Electron arrangements
- Functional group highlighting
`;

/**
 * Template for titration calculation questions
 */
export const TITRATION_CALCULATION_TEMPLATE = `
## TITRATION CALCULATION QUESTION REQUIREMENTS

Generate a titration calculation question with these characteristics:
- Provide experimental data (burette readings, concentrations)
- Require calculation of unknown concentration or amount
- Include balanced chemical equation
- May include diagram of titration setup

### Calculation Types
- Concentration calculations (mol/dm³, g/dm³)
- Moles calculations from titration data
- Percentage purity or composition
- Relative atomic mass determinations

### Mark Scheme Pattern (Chemistry Titration)
**For concentration calculations (4-5 marks):**
- M1: Uses correct balanced chemical equation (or given equation correctly)
- M1: Calculates moles of known substance correctly (n = cV or n = m/Mr)
- M1: Uses molar ratio from equation to find moles of unknown
- A1: Calculates concentration correctly (c = n/V)
- A1: Final answer with correct units (mol dm⁻³ or g dm⁻³) and appropriate significant figures

**For percentage purity (5-6 marks):**
- M1: Calculates moles from titration data
- M1: Finds mass of pure substance
- M1: Uses percentage purity formula
- A1: Correct numerical answer
- A1: Appropriate significant figures and units (%)

**Error Analysis:**
- Accept follow through on arithmetic errors
- Award method marks even if previous calculation wrong
- Units must be consistent for full marks

### Data Format
Provide experimental data:
- Initial/final burette readings
- Titre volumes (rough and accurate)
- Known concentrations
- Volume measurements
`;

/**
 * Subject-specific mark scheme enhancements for all remaining subjects
 */
export const ENHANCED_MARKING_CRITERIA = `
## ALL SUBJECTS MARK SCHEME ENHANCEMENTS

### Biology Extended Response (6-mark)
Level 3 (5-6 marks): Uses detailed biological knowledge with precise terminology
Level 2 (3-4 marks): Shows good biological understanding with appropriate terms
Level 1 (1-2 marks): Basic biological knowledge with limited terminology

### English Literature Analysis (30-mark)
Level 6 (26-30): Perceptive analysis with sophisticated language analysis
Level 5 (21-25): Thoughtful analysis with clear textual understanding
Level 4 (16-20): Clear analysis with relevant textual references

### History Essays (25-mark + 5 SPaG)
Level 5 (21-25): Sustained analysis with comprehensive historical knowledge
Level 4 (16-20): Developed analysis with accurate historical knowledge
Level 3 (11-15): Some analysis with generally accurate knowledge

### Computer Science (Programming/Algorithm questions)
Method marks: Correct algorithm design or programming approach
Accuracy marks: Correct syntax, logic, and final working solution
Efficiency marks: Consideration of time/space complexity where relevant

### Psychology/Business/Geography Extended Response
Uses assessment objectives AO1 (Knowledge), AO2 (Application), AO3 (Analysis), AO4 (Evaluation)
Level-based marking with emphasis on quality of reasoning and use of evidence
`;

// ============================================================================
// GET TEMPLATE BY TYPE
// ============================================================================

export function getQuestionTypeTemplate(type: QuestionType): string {
  const templates: Record<QuestionType, string> = {
    'multiple-choice': MULTIPLE_CHOICE_TEMPLATE,
    'calculation': CALCULATION_TEMPLATE,
    'short-answer': EXPLAIN_TEMPLATE, // Uses same template as explain for short answers
    'explain': EXPLAIN_TEMPLATE,
    'extended': EXTENDED_RESPONSE_TEMPLATE,
    'data-analysis': DATA_ANALYSIS_TEMPLATE,
    'graph': DATA_ANALYSIS_TEMPLATE, // Similar structure
    'compare': COMPARE_TEMPLATE,
    'proof': CALCULATION_TEMPLATE, // Similar to calculation but with proof structure
    'show-that': CALCULATION_TEMPLATE, // Similar to calculation but with given answer
    'essay': EXTENDED_RESPONSE_TEMPLATE, // Essays use extended response template
    'source-analysis': EXTENDED_RESPONSE_TEMPLATE, // Historical source analysis
    'interpretation': EXTENDED_RESPONSE_TEMPLATE, // Literary interpretation
    'extract-analysis': EXTENDED_RESPONSE_TEMPLATE, // Economics extract analysis
    // Mathematics-specific templates
    'construction': CONSTRUCTION_TEMPLATE,
    'loci': CALCULATION_TEMPLATE, // Uses calculation template with loci context
    'algebraic-manipulation': ALGEBRAIC_MANIPULATION_TEMPLATE,
    'simultaneous-equations': SIMULTANEOUS_EQUATIONS_TEMPLATE,
    'optimization': CALCULATION_TEMPLATE, // Calculus calculation
    'differential-equations': CALCULATION_TEMPLATE, // Advanced calculation
    'integration-by-parts': CALCULATION_TEMPLATE, // Integration calculation
    'statistical-hypothesis': CALCULATION_TEMPLATE, // Statistical calculation
    'sequence-series': CALCULATION_TEMPLATE, // Sequence calculation
    'transformation-geometry': CALCULATION_TEMPLATE, // Coordinate geometry calculation
    // Physics-specific templates
    'practical-method': PRACTICAL_METHOD_TEMPLATE,
    'practical-analysis': PRACTICAL_ANALYSIS_TEMPLATE,
    'circuit-design': CALCULATION_TEMPLATE, // Circuit calculation
    'wave-calculation': CALCULATION_TEMPLATE, // Wave calculation
    'nuclear-decay': CALCULATION_TEMPLATE, // Nuclear calculation
    'energy-transfer': CALCULATION_TEMPLATE, // Energy calculation
    // Chemistry-specific templates
    'chemical-equation': EXPLAIN_TEMPLATE, // Equation writing with explanation
    'structure-drawing': STRUCTURE_DRAWING_TEMPLATE,
    'titration-calculation': TITRATION_CALCULATION_TEMPLATE,
    'organic-mechanism': STRUCTURE_DRAWING_TEMPLATE, // Similar visual requirements
    'inorganic-analysis': EXPLAIN_TEMPLATE, // Analysis with explanation
    'bonding-structure': EXPLAIN_TEMPLATE, // Structure explanation
    // Biology-specific templates
    'microscopy-drawing': STRUCTURE_DRAWING_TEMPLATE, // Similar drawing requirements
    'lifecycle-diagram': STRUCTURE_DRAWING_TEMPLATE, // Diagram creation
    'food-web-analysis': DATA_ANALYSIS_TEMPLATE, // Analysis and interpretation
    'genetics-calculation': CALCULATION_TEMPLATE, // Genetic calculations
    'plant-adaptation': EXPLAIN_TEMPLATE, // Explanation of adaptations
    'human-physiology': EXPLAIN_TEMPLATE, // Physiological explanations
  };

  return templates[type] || EXPLAIN_TEMPLATE;
}

// ============================================================================
// DIFFICULTY MODIFIERS FOR QUESTION TYPES
// ============================================================================

export function getDifficultyModifierForType(type: QuestionType, difficulty: Difficulty): string {
  const baseModifier: Record<Difficulty, Record<QuestionType, string>> = {
    easy: {
      'multiple-choice': 'Test basic recall. Distractors should be clearly different from correct answer.',
      'short-answer': 'Brief response requiring basic recall.',
      'calculation': 'Single-step calculation. Values given directly. Simple numbers.',
      'explain': 'Simple description or single reason required.',
      'extended': 'Not typically used for easy difficulty.',
      'data-analysis': 'Read a single value from data. Identify obvious trend.',
      'graph': 'Read a single value. Identify basic shape.',
      'compare': 'List basic similarities OR differences (not both required).',
      'proof': 'Simple proof with direct application of basic theorem.',
      'show-that': 'Straightforward verification with simple substitution.',
      'essay': 'Straightforward essay with clear structure required. Basic analysis.',
      'source-analysis': 'Basic source analysis with obvious strengths/limitations.',
      'interpretation': 'Clear interpretation of obvious themes or meanings.',
      'extract-analysis': 'Simple analysis of extract with basic economic concepts.',
    },
    medium: {
      'multiple-choice': 'Test application. Distractors based on common errors.',
      'short-answer': 'Brief response with some reasoning or calculation.',
      'calculation': '2-3 step calculation. May need to rearrange formula.',
      'explain': 'Explain with reasoning. Link cause and effect.',
      'extended': 'Structured argument with some evaluation.',
      'data-analysis': 'Calculate from data. Identify patterns and suggest reasons.',
      'graph': 'Calculate gradient or read multiple values. Interpret meaning.',
      'compare': 'Compare with clear similarities AND differences.',
      'proof': 'Multi-step proof requiring logical reasoning.',
      'show-that': 'Show working with intermediate steps and reasoning.',
      'essay': 'Well-structured essay with balanced analysis and evaluation.',
      'source-analysis': 'Detailed source analysis considering context and purpose.',
      'interpretation': 'Nuanced interpretation with multiple perspectives.',
      'extract-analysis': 'Thorough analysis linking extract to economic theory.',
    },
    hard: {
      'multiple-choice': 'Test deeper understanding. Subtle distractors requiring careful analysis.',
      'short-answer': 'Concise but sophisticated response requiring synthesis.',
      'calculation': 'Multi-step. May combine multiple concepts. Unit conversions required.',
      'explain': 'Full causal explanation with multiple linked points.',
      'extended': 'Sophisticated evaluation with balanced argument and justified conclusion.',
      'data-analysis': 'Complex analysis. Evaluate reliability. Draw nuanced conclusions.',
      'graph': 'Analyse shape, calculate gradient, extrapolate, and evaluate.',
      'compare': 'Analytical comparison with evaluation of significance.',
      'proof': 'Complex proof using multiple methods or requiring creative insight.',
      'show-that': 'Sophisticated verification with non-obvious approach.',
      'essay': 'Complex essay requiring synthesis, critical evaluation, and sophisticated argument.',
      'source-analysis': 'Critical evaluation of source value with historiographical awareness.',
      'interpretation': 'Complex interpretation considering multiple layers of meaning.',
      'extract-analysis': 'Advanced analysis synthesizing multiple economic theories and concepts.',
      // Mathematics-specific difficulty modifiers
      'construction': 'Complex construction requiring multiple steps and advanced geometric insight.',
      'loci': 'Complex loci involving multiple constraints and advanced coordinate geometry.',
      'algebraic-manipulation': 'Multi-step manipulation with complex expressions and advanced techniques.',
      'simultaneous-equations': 'Non-linear systems or systems with parameters requiring sophisticated methods.',
      'optimization': 'Complex optimization with constraints and advanced calculus techniques.',
      'differential-equations': 'Advanced differential equations requiring multiple solution methods.',
      'integration-by-parts': 'Complex integration requiring multiple applications and substitutions.',
      'statistical-hypothesis': 'Advanced hypothesis testing with complex statistical concepts.',
      'sequence-series': 'Advanced sequences involving complex patterns and proof techniques.',
      'transformation-geometry': 'Complex transformations involving composition and advanced matrix operations.',
    },
  };

  // Add mathematics-specific difficulty modifiers for easy and medium
  baseModifier.easy = {
    ...baseModifier.easy,
    'construction': 'Basic construction with clear steps. Standard geometric shapes.',
    'loci': 'Simple loci with single constraint. Basic coordinate geometry.',
    'algebraic-manipulation': 'Single-step manipulation. Simple coefficients and expressions.',
    'simultaneous-equations': 'Linear equations with integer solutions. Clear elimination method.',
    'optimization': 'Not typically used at easy level.',
    'differential-equations': 'Not typically used at easy level.',
    'integration-by-parts': 'Not typically used at easy level.',
    'statistical-hypothesis': 'Not typically used at easy level.',
    'sequence-series': 'Basic arithmetic or geometric sequences with simple patterns.',
    'transformation-geometry': 'Single transformations with simple coordinates.',
  };

  baseModifier.medium = {
    ...baseModifier.medium,
    'construction': 'Multi-step construction requiring geometric reasoning.',
    'loci': 'Loci with multiple conditions or coordinate equations.',
    'algebraic-manipulation': '2-3 step manipulation with fractional coefficients.',
    'simultaneous-equations': 'Mix of linear equations or simple non-linear systems.',
    'optimization': 'Basic max/min problems with clear constraints.',
    'differential-equations': 'Simple separable equations or first-order linear.',
    'integration-by-parts': 'Standard integration by parts with polynomial/exponential.',
    'statistical-hypothesis': 'Basic hypothesis tests with normal distribution.',
    'sequence-series': 'Sequences requiring nth term formula or sum derivation.',
    'transformation-geometry': 'Combined transformations or matrix calculations.',
    // Physics-specific medium difficulty
    'practical-method': 'Standard practical with clear variables and method.',
    'practical-analysis': 'Graph analysis with calculation and simple evaluation.',
    'circuit-design': 'Series/parallel circuits with 2-3 components.',
    'wave-calculation': 'Standard wave equation calculations with given values.',
    'nuclear-decay': 'Half-life calculations with simple exponential decay.',
    'energy-transfer': 'Energy calculations with clear conservation principles.',
    // Chemistry-specific medium difficulty
    'chemical-equation': 'Multi-step reactions with state symbols required.',
    'structure-drawing': 'Organic structures with functional groups clearly shown.',
    'titration-calculation': 'Standard acid-base titrations with concentration calculations.',
    'organic-mechanism': 'Single-step mechanisms with curly arrows.',
    'inorganic-analysis': 'Qualitative tests with reasoning for results.',
    'bonding-structure': 'Molecular shapes with bond angles and explanations.',
  };

  return baseModifier[difficulty][type] || '';
}
