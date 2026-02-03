// Edexcel GCSE Biology (1BI0) Question Generation Prompts
// Tailored to Pearson Edexcel specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Biology mark ranges based on Edexcel specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };    // Short answer/recall questions
    case 'medium':
      return { min: 4, max: 6 };    // Application and data questions
    case 'hard':
      return { min: 6, max: 9 };    // Extended response questions
  }
}

// ============================================================================
// EDEXCEL GCSE BIOLOGY SPECIFICATION DETAILS (1BI0)
// Based on official Pearson Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_BIOLOGY_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Biology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, scientific techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas, scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 180 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** | Topics 1-5: Key Concepts, Cells and Control, Genetics, Natural Selection, Health and Disease | 1h 45m | 100 | 55.6% |
| **Paper 2** | Topics 6-9: Plant Structures, Animal Coordination, Exchange, Ecosystems | 1h 45m | 80 | 44.4% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5
- **Higher tier**: Grades 4-9
- Overlapping content allows comparison between tiers
- Some content is Higher tier only (marked HT in specification)

### Mathematical Skills: 10% minimum
Biology papers assess mathematical skills including:
- Arithmetic and numerical computation
- Handling data (means, percentages, ratios)
- Algebra (simple substitution into formulas)
- Graphs (plotting, interpreting, lines of best fit)
`;

const EDEXCEL_BIOLOGY_CORE_PRACTICALS = `
## Edexcel GCSE Biology Core Practicals (8 total)

| CP | Name | Key Skills Tested | Topic |
|----|------|-------------------|-------|
| **CP1** | Microscopy | Using light microscopes, preparing slides, measuring cells | 1: Key Concepts |
| **CP2** | Enzyme Activity | Effect of pH/temperature on enzymes | 1: Key Concepts |
| **CP3** | Osmosis | Investigating osmosis in plant tissue | 1: Key Concepts |
| **CP4** | Reaction Time | Investigating response to a stimulus | 2: Cells and Control |
| **CP5** | Photosynthesis Rate | Effect of light intensity on rate | 6: Plant Structures |
| **CP6** | Transpiration | Investigating factors affecting transpiration | 6: Plant Structures |
| **CP7** | Heart Dissection | Examining the structure of the heart | 8: Exchange |
| **CP8** | Sampling | Investigating population size using quadrats | 9: Ecosystems |

### Practical Assessment in Exams
- At least **15%** of marks assess practical skills
- Questions test: planning, implementing, analysing, evaluating
- Edexcel includes "Practical skills assessed in a practical context" questions
- Common question types:
  - Describe a method for...
  - Explain how to improve accuracy/reliability
  - Calculate results from experimental data
  - Identify sources of error
  - Suggest improvements to method
`;

const EDEXCEL_BIOLOGY_COMMAND_WORDS = `
## Edexcel GCSE Biology Command Words (Official Definitions)

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Give a brief answer without explanation | 1 |
| **Give / Name** | Short answer, no explanation | 1 |
| **Identify** | Select from given information or name something | 1 |
| **Define** | State the meaning of something | 1-2 |
| **Label** | Add labels to a diagram | 1 |

### Application Commands (AO2)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Get a numerical answer showing working | 2-4 |
| **Determine** | Use given data to obtain an answer | 2-3 |
| **Describe** | Give an account including all relevant characteristics | 2-4 |
| **Explain** | Give reasons or provide evidence to support a conclusion | 2-4 |
| **Suggest** | Apply knowledge to new situations or make informed judgements | 2-3 |
| **Predict** | Give an expected result | 1-2 |
| **Use** | Apply knowledge to given information | 2-3 |

### Analysis Commands (AO3)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Compare** | Identify similarities and/or differences | 2-4 |
| **Evaluate** | Review information and then bring it together to form a conclusion | 3-6 |
| **Justify** | Give evidence to support a conclusion | 2-4 |
| **Design / Plan** | Set out how something will be done | 3-6 |
| **Sketch** | Draw approximately | 1-2 |
| **Draw** | Produce a diagram | 1-2 |
| **Estimate** | Obtain an approximate value | 1-2 |
| **Assess** | Give careful consideration to all factors or events | 3-4 |
`;

const EDEXCEL_BIOLOGY_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE Biology Mark Scheme Conventions

### Mark Types
| Symbol | Meaning |
|--------|---------|
| **1** | 1 mark |
| **;** | Separates different marking points (alternatives on same line) |
| **/** | Alternative word or phrase |
| **(1)** | Award this mark independently |
| **ALLOW** | Accept this answer |
| **ACCEPT** | Accept this answer as an alternative |
| **IGNORE** | Disregard if stated |
| **REJECT** | Do not award if this is stated |
| **ora** | Or reverse argument |

### Calculation Marking
Standard approach for calculations:
1. Correct equation or method (1 mark)
2. Correct substitution (1 mark)
3. Correct answer with units (1 mark)
- Error carried forward (ecf) may apply

### Level of Response (6-mark questions)
Edexcel uses specific indicative content but marks holistically:
**Level 3 (5-6 marks):** All relevant points covered, logically structured, correct terminology
**Level 2 (3-4 marks):** Most relevant points, some structure, mostly correct terminology
**Level 1 (1-2 marks):** Some relevant points, limited structure, basic terminology
**Level 0 (0 marks):** No relevant content

### Edexcel-Specific Patterns
- "*" indicates where answers must include particular key terms
- Extended writing questions often marked using levels
- Practical questions often ask for method steps in sequence
- Diagrams require clear labels with lines touching structures
`;

// ============================================================================
// EDEXCEL GCSE BIOLOGY REFERENCE DATA
// ============================================================================

const EDEXCEL_BIOLOGY_REFERENCE_DATA = `
## Key Values and Constants (MUST USE THESE)

### Magnification Calculations
| Equation | Units |
|----------|-------|
| Magnification = Image size / Real size | No units (ratio) |
| Real size = Image size / Magnification | Same as image size |
| Image size = Real size × Magnification | Same as real size |

### Unit Conversions
| From | To | Conversion |
|------|-----|------------|
| mm | μm | × 1000 |
| μm | mm | ÷ 1000 |
| cm | mm | × 10 |
| mm | cm | ÷ 10 |
| m | cm | × 100 |
| dm³ | cm³ | × 1000 |

### Photosynthesis and Respiration
**Photosynthesis word equation:**
carbon dioxide + water → glucose + oxygen

**Photosynthesis symbol equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

**Aerobic respiration word equation:**
glucose + oxygen → carbon dioxide + water (+ energy released)

**Aerobic respiration symbol equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O

**Anaerobic respiration (animals):**
glucose → lactic acid (+ energy released)

**Anaerobic respiration (plants and yeast):**
glucose → ethanol + carbon dioxide (+ energy released)

### Standard Calculations
- Percentage change = ((final - initial) / initial) × 100
- Mean = sum of values / number of values
- Rate = change / time
- Population estimate (capture-recapture) = (first sample × second sample) / number recaptured
`;

// Edexcel GCSE Biology guiding principles
const EDEXCEL_BIOLOGY_PRINCIPLES = `
Edexcel GCSE Biology Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

Edexcel GCSE Biology Command Words:
- Calculate: Obtain a numerical answer, showing relevant working
- Compare: Identify similarities and/or differences
- Describe: Give an account including relevant characteristics
- Determine: Use given data to obtain an answer
- Draw: Produce a diagram
- Estimate: Give an approximate value
- Evaluate: Review information to reach a conclusion
- Explain: Give reasons or cause and effect
- Give/Name/State: Short answer, no explanation
- Identify: Name or select from information
- Justify: Use evidence to support a conclusion
- Plan: Set out how something will be done
- Predict: Give an expected result
- Suggest: Apply knowledge to unfamiliar contexts
- Use: Apply knowledge to given information

Edexcel GCSE Mark Scheme Conventions:
- 1 mark per valid point unless stated otherwise
- Calculations: method, substitution, answer with units
- 6-mark questions: marked using levels with indicative content
  - Level 3 (5-6 marks): Comprehensive, logically structured, correct terminology
  - Level 2 (3-4 marks): Most points covered, some structure
  - Level 1 (1-2 marks): Some relevant points, limited structure
- Edexcel often awards marks for process AND outcome
- "*" indicates essential terminology required
- Extended open-response (6 marks) assesses communication quality

## CRITICAL: Mark Scheme Patterns for Worded Answers

### Essential Word Rules
- Words after "*" are ESSENTIAL for the mark
- ";" separates alternative answers
- "/" indicates alternative wording
- REJECT means answer negates the mark

### Required Biology Definitions (MUST USE THESE EXACT PHRASES)

**Cell Biology:**
- Mitosis: "cell division producing two genetically identical daughter cells"
- Meiosis: "cell division producing four genetically different haploid gametes"
- Diffusion: "net movement of particles from higher to lower concentration"
- Osmosis: "movement of water from dilute to concentrated solution across a partially permeable membrane"
- Active transport: "movement of substances against concentration gradient using energy from respiration"

**Organisation:**
- Enzyme: "biological catalyst that speeds up reactions"
- Tissue: "group of cells working together to perform a function"
- Organ: "group of tissues working together"

**Health and Disease:**
- Pathogen: "microorganism that causes disease"
- Antibiotic: "substance that kills or inhibits growth of bacteria"
- Vaccine: "dead or inactive pathogen that stimulates immune response"
- Antibody: "protein produced by B lymphocytes that binds to specific antigen"
- Antigen: "protein on surface of pathogen that triggers immune response"

**Coordination and Control:**
- Homeostasis: "maintenance of a constant internal environment"
- Negative feedback: "mechanism that reverses a change from the norm"
- Hormone: "chemical messenger transported in blood to target organ"
- Neurone: "nerve cell that transmits electrical impulses"

**Inheritance:**
- Gene: "section of DNA coding for a specific protein"
- Allele: "different forms of the same gene"
- Genotype: "genetic composition / alleles present"
- Phenotype: "observable characteristics"
- Dominant: "allele expressed when heterozygous"
- Recessive: "allele only expressed when homozygous"

**Ecology:**
- Population: "all organisms of one species in an area"
- Community: "all populations of different species in an area"
- Ecosystem: "community and its abiotic environment"
- Biodiversity: "variety of different species in an area"

### Standard Biology Explanation Patterns

**Transport Explanations:**
- "net movement from high to low concentration (down concentration gradient)"
- "continues until equilibrium / concentrations equal"
- "passive process / no energy required"
- "active transport requires ATP/energy from respiration"

**Enzyme Explanations:**
- "specific shape of active site / complementary to substrate"
- "enzyme-substrate complex forms"
- "above optimum temperature enzyme denatures"
- "bonds holding tertiary structure break"
- "active site changes shape / substrate no longer fits"

**Nervous System Explanations:**
- "stimulus detected by receptor"
- "impulse travels along sensory neurone"
- "synapse: neurotransmitter diffuses across gap"
- "impulse travels along motor neurone"
- "effector (muscle/gland) produces response"

Core Practicals (8 total):
1. Microscopy - using light microscope, preparing slides
2. Enzymes - investigating effect of pH or temperature
3. Osmosis - investigating effect of concentration
4. Reaction time - investigating human responses
5. Photosynthesis - effect of light intensity on rate
6. Transpiration - investigating factors affecting water loss
7. Heart dissection - examining heart structure
8. Sampling - using quadrats to estimate population
`;

// Topic-specific guidance for Edexcel GCSE Biology
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-gcse-biology-cells': `
Topic 1: Key Concepts in Biology:
- Cell structure: plant, animal, bacterial - differences and similarities
- Microscopy: light vs electron, magnification calculations
- Enzymes: lock and key model, factors affecting activity
- Transport: diffusion, osmosis, active transport - differences
- Cell division: cell cycle, mitosis, importance of stem cells
- Core Practical 1: Microscopy - preparing slides, using microscope
- Core Practical 2: Enzyme activity - effect of pH or temperature
- Core Practical 3: Osmosis in plant tissue

Edexcel often tests: magnification calculations, explaining transport mechanisms, enzyme graphs
`,
  'edexcel-gcse-biology-systems': `
Topic 2: Cells and Control:
- Cell cycle: stages, importance of mitosis
- DNA replication: why it happens before mitosis
- Cell differentiation: specialised cells and their functions
- Stem cells: embryonic vs adult, uses and ethical issues
- Cancer: uncontrolled cell division
- Nervous system: CNS, PNS, neurones, reflex arc
- Brain structure: cerebral cortex, cerebellum, medulla
- Core Practical 4: Investigating reaction time

Edexcel often tests: stem cell applications, reflex arc pathway, brain function
`,
  'edexcel-gcse-biology-genetics': `
Topic 3: Genetics:
- Sexual vs asexual reproduction: advantages/disadvantages
- Meiosis: producing gametes, genetic variation
- DNA structure: double helix, complementary base pairs
- Protein synthesis: transcription, translation
- Genetic inheritance: alleles, genotype, phenotype
- Punnett squares: monohybrid crosses
- Inherited disorders: cystic fibrosis, polydactyly
- Sex determination: XX and XY chromosomes
- Genetic modification: process, uses, pros and cons
- Selective breeding: process and problems

Edexcel often tests: Punnett squares, explaining genetic engineering, DNA structure
`,
  'edexcel-gcse-biology-health': `
Topic 4: Natural Selection and Genetic Modification:
- Evidence for human evolution: fossils, tools, Ardi, Lucy
- Darwin's theory: natural selection, survival of fittest
- Evidence for evolution: fossil record, antibiotic resistance
- Classification: Linnaean system, three-domain system
- Evolutionary trees: using similarities and differences

Edexcel often tests: explaining natural selection, evidence for evolution, classification
`,
  'edexcel-gcse-biology-health-disease': `
Topic 5: Health, Disease and the Development of Medicines:
- Health definition: complete physical, mental and social wellbeing
- Communicable vs non-communicable diseases
- Pathogens: bacteria, viruses, fungi, protists
- Viral diseases: HIV/AIDS, TMV
- Bacterial diseases: salmonella, gonorrhoea
- Malaria: protist, mosquito vector, prevention
- Human defences: physical barriers, immune system
- White blood cells: phagocytosis, antibodies, antitoxins
- Vaccination: how it works, herd immunity
- Antibiotics: only for bacteria, resistance problem
- Drug development: preclinical, clinical trials
- Monoclonal antibodies: production and uses

Edexcel often tests: immune response, antibiotic resistance, drug testing stages
`,
  'edexcel-gcse-biology-plant-structures': `
Topic 6: Plant Structures and their Functions:
- Photosynthesis: equation, factors affecting rate
- Limiting factors: light, CO₂, temperature
- Uses of glucose: respiration, cellulose, starch, proteins, lipids
- Transport in plants: xylem (water), phloem (sugars)
- Transpiration: process, factors affecting rate
- Translocation: movement of sugars
- Plant hormones: auxins, phototropism, gravitropism
- Uses of plant hormones: rooting powder, weedkillers, fruit ripening
- Core Practical 5: Photosynthesis rate - effect of light intensity
- Core Practical 6: Transpiration - factors affecting rate

Edexcel often tests: photosynthesis graphs, transpiration factors, auxin experiments
`,
  'edexcel-gcse-biology-animal-coordination': `
Topic 7: Animal Coordination, Control and Homeostasis:
- Endocrine system: glands and hormones
- Blood glucose control: insulin, glucagon, diabetes types
- Hormones in reproduction: FSH, LH, oestrogen, progesterone
- Menstrual cycle: hormone control
- Contraception: hormonal and non-hormonal methods
- Fertility treatments: FSH, IVF
- Homeostasis: importance, negative feedback
- Thermoregulation: vasodilation, vasoconstriction, sweating, shivering
- Osmoregulation: kidney structure, ADH, water balance

Edexcel often tests: blood glucose regulation, menstrual cycle hormones, kidney function
`,
  'edexcel-gcse-biology-exchange': `
Topic 8: Exchange and Transport in Animals:
- Gas exchange: lung structure, alveoli adaptations
- Surface area to volume ratio: importance
- Circulatory system: heart structure, blood vessels
- Blood composition: red cells, white cells, platelets, plasma
- Heart: four chambers, double circulation, cardiac cycle
- Blood vessels: arteries, veins, capillaries - differences
- Cardiovascular disease: causes, treatments
- Core Practical 7: Heart dissection

Edexcel often tests: heart structure, comparing blood vessels, alveoli adaptations
`,
  'edexcel-gcse-biology-ecosystems': `
Topic 9: Ecosystems and Material Cycles:
- Ecosystems: biotic and abiotic factors
- Feeding relationships: producers, consumers, food chains/webs
- Competition: inter- and intraspecific
- Adaptations: structural, behavioural, functional
- Pyramids: numbers, biomass, energy
- Energy transfer: efficiency, energy losses
- Carbon cycle: processes involved
- Water cycle: stages
- Nitrogen cycle: bacteria roles
- Human impacts: pollution, deforestation, global warming
- Biodiversity: importance, conservation
- Core Practical 8: Sampling with quadrats

Edexcel often tests: energy transfer calculations, cycles, sampling techniques
`
};

// Generate compact prompt for auto/standard questions
export function getEdexcelBiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel GCSE Biology examiner creating an exam-style question.

## EDEXCEL BIOLOGY QUESTION STYLE
- Emphasize **real-world applications** and practical biology contexts
- Focus on **scientific inquiry** and investigative approaches
- Include **contextual scenarios** linking biology to everyday life
- Use **accessible language** with clear progression of difficulty
- Connect biological concepts to **industry, health, and environment**

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY AND MARK ALLOCATION:
- Easy: 1-3 marks (Recall, definitions, simple identifications)
- Medium: 4-6 marks (Application, calculations, explanations)
- Hard: 6-9 marks (Multi-step problems, extended explanations, data analysis)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this ${difficulty} difficulty question.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel GCSE Biology specification.

**DO NOT include Chemistry concepts such as:**
- Detailed chemical equations beyond basic biological reactions
- Atomic structure or electron configuration
- Chemical bonding theory (ionic, covalent, metallic)
- Detailed organic chemistry mechanisms

**Focus ONLY on GCSE Biology content:**
- Key concepts in biology
- Cells and control
- Genetics
- Natural selection and genetic modification
- Health, disease and development of medicines
- Plant structures and their functions
- Animal coordination, control and homeostasis
- Exchange and transport in animals
- Ecosystems and material cycles

Create ONE exam-style question that:
1. Uses authentic Edexcel GCSE Biology language
2. Tests understanding appropriate to GCSE level
3. Has a mark allocation between ${markRange.min}-${markRange.max} marks (REQUIRED)
4. Matches the ${difficulty} difficulty level

Return a JSON object with this exact structure:
{
  "content": "The full question text including mark allocation [X marks]",
  "marks": <number between ${markRange.min} and ${markRange.max}>,
  "solution": "Full worked answer with clear reasoning",
  "markScheme": ["Mark point 1", "Mark point 2", ...]
}`;
}

// Generate extended response question prompt
export function getEdexcelBiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating a 6-mark extended response question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, detailed response
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Evaluate, Compare, Describe)
4. Could include practical applications or real-world contexts

The question should be assessed using level of response marking:
Level 3 (5-6 marks): Comprehensive answer with detailed explanation and correct terminology
Level 2 (3-4 marks): Good coverage with some detail but may have gaps
Level 1 (1-2 marks): Limited response with basic relevant points

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question with context]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer demonstrating excellent biology understanding]`;
}

// Generate multiple choice question prompt
export function getEdexcelBiologyMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating a multiple choice question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE multiple choice question that:
1. Has exactly 4 options (A, B, C, D)
2. Has ONE correct answer
3. Includes plausible distractors based on common misconceptions
4. Tests understanding at GCSE level

OUTPUT FORMAT (use exact headers):
**Question:**
[Question stem]
A: [Option A]
B: [Option B]
C: [Option C]
D: [Option D]

**Mark Scheme:**
Correct answer: [Letter]
[Why each distractor is wrong]

**Explanation:**
[Full explanation of the correct answer and biology involved]`;
}

// Generate calculation question prompt
export function getEdexcelBiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating a calculation question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

${EDEXCEL_BIOLOGY_REFERENCE_DATA}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## CRITICAL: Biology Calculation Types
Common calculation types:
- Magnification: M = I / A (image size / actual size)
- Percentage change: ((final - initial) / initial) × 100
- Mean: sum of values / number of values
- Rate = change / time
- Ratios from Punnett squares
- Population estimate (capture-recapture)
- Energy transfer efficiency

Create ONE calculation question that:
1. Provides realistic numerical data
2. Tests quantitative biology skills
3. Has a clear, structured calculation
4. Produces a sensible numerical answer

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking: method (1), substitution (1), answer with units (1)]

**Explanation:**
[Complete worked solution with every step shown]`;
}

// Generate explain question prompt
export function getEdexcelBiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating an explanation question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of biology principles
2. Requires linking cause and effect
3. Uses appropriate command words (Explain, Describe and explain)
4. May include practical or real-world contexts

DIFFICULTY GUIDE:
- Easy: Explain a single concept (2 marks)
- Medium: Explain a process or observation (3-4 marks)
- Hard: Explain a complex phenomenon linking multiple ideas (4-6 marks)

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with mark allocation]

**Mark Scheme:**
[Key points required for full marks]

**Explanation:**
[Model answer using correct scientific terminology]`;
}

// Generate graph/data analysis question prompt
export function getEdexcelBiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating a graph or data analysis question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data or graphs
2. May require plotting, reading values, or identifying trends
3. Tests understanding of relationships between variables
4. Uses realistic biology data

Common graph types in Edexcel GCSE Biology:
- Rate of photosynthesis vs light intensity/CO₂/temperature
- Enzyme activity vs temperature/pH
- Transpiration rate vs different conditions
- Population growth curves
- Heart rate during exercise
- Osmosis results (mass change vs concentration)

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation and conclusions]

**Explanation:**
[Model answer showing how to analyse the data correctly]`;
}

// Generate compare question prompt
export function getEdexcelBiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Biology examiner creating a comparison question.

${EDEXCEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biology concepts, structures, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of underlying principles
4. Uses the command word 'Compare' appropriately

Possible comparisons in Edexcel GCSE Biology:
- Mitosis vs meiosis
- Aerobic vs anaerobic respiration
- Diffusion vs osmosis vs active transport
- Plant vs animal cells
- Arteries vs veins vs capillaries
- Nervous vs hormonal coordination
- Type 1 vs Type 2 diabetes
- Sexual vs asexual reproduction
- Light vs electron microscopes
- Xylem vs phloem

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// ============================================================================
// CORE PRACTICAL PROMPTS FOR BIOLOGY
// ============================================================================

/**
 * Core Practical question prompt for Edexcel Biology.
 */
export function getEdexcelBiologyCorePracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  // Get subtopic-specific guidance
  const subtopicGuidance = getBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${EDEXCEL_BIOLOGY_PRINCIPLES}

---

## Core Practical Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this Edexcel GCSE Biology Core Practical.

**Difficulty:** ${difficulty}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Response Format (JSON)

{
  "content": "Question about ${subtopic.toLowerCase()} for ${practical.name}",
  "marks": <total marks as integer>,
  "solution": "Detailed answer with practical knowledge",
  "markScheme": ["1: mark description", "2: mark description"],
  "diagram": <optional DiagramSpec - include when question has stimulus diagram shown WITH the question>,
  "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>
}

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

\${getDiagramDocsForSubject('biology')}

Generate a genuinely original Core Practical ${subtopic} question now:`;
}

/**
 * Get subtopic-specific guidance for biology practicals
 */
function getBiologyPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions

Focus on:
- Step-by-step procedure for this practical
- Specific techniques (e.g., preparing slides, measuring mass)
- How to ensure reliable results
- How to make measurements accurately

**Biology-specific method points:**
- How to set up and use microscopes correctly
- How to prepare specimens/samples
- How to control temperature
- How to measure changes over time
- How to ensure fair testing

**Common question patterns:**
- "Describe a method to investigate..."
- "Explain how you would carry out this practical..."
- "Plan an investigation to determine..."

**Mark scheme patterns:**
- 1 mark per valid step
- Credit specific equipment named
- Credit safety precautions
- Credit techniques for ensuring reliability`;

    case 'Variables':
      return `## Variables Questions

Focus on:
- Independent variable (what you change)
- Dependent variable (what you measure)
- Control variables (what you keep the same)

**Biology-specific variables:**
- Temperature (use water bath)
- Light intensity (change distance or use lamp)
- Concentration of solution
- pH (use buffer solutions)
- Time intervals
- Volume of solution
- Size/mass of tissue samples

**Common question patterns:**
- "Name the independent variable" (1)
- "What is the dependent variable?" (1)
- "Give TWO variables that should be controlled" (2)
- "Explain why [variable] must be kept constant" (2)`;

    case 'Equipment':
      return `## Equipment Questions

Focus on:
- Naming appropriate equipment
- Explaining why specific equipment is chosen
- Accuracy and precision of equipment
- Alternatives and their limitations

**Biology-specific equipment:**
- Light microscope (magnification, resolution)
- Measuring cylinder vs pipette (accuracy)
- Electronic balance
- Water bath (temperature control)
- Colorimeter (measuring colour change)
- Stopwatch/timer
- Quadrat and transect

**For this practical:**
${practical.equipment?.map(e => `- ${e}`).join('\n') || '- Standard lab equipment'}`;

    case 'Results Analysis':
      return `## Results Analysis Questions

Focus on:
- Calculating values from experimental data
- Using means and percentage change
- Identifying patterns and trends
- Drawing valid conclusions

**Biology calculations in practicals:**
- Magnification = Image size / Real size
- Percentage change = ((final - initial) / initial) × 100
- Mean = sum of values / number of values
- Rate = change / time

**Common question patterns:**
- "Calculate the percentage change in mass..."
- "Calculate the mean value..."
- "What is the magnification of this image?"
- "Describe the pattern shown by the results"`;

    case 'Graph Skills':
      return `## Graph Skills Questions

Focus on:
- Plotting appropriate graphs
- Choosing suitable axes and scales
- Drawing lines of best fit
- Identifying trends and anomalies

**Biology graph patterns:**
- Rate graphs: enzyme activity, photosynthesis rate
- Bar charts: comparing categorical data
- Scatter graphs: showing relationships
- Line graphs: showing continuous change over time

**Common question patterns:**
- "Plot a graph of the results"
- "Describe the trend shown by the graph"
- "Use the graph to determine the optimum temperature"
- "Identify the anomalous result"`;

    case 'Errors':
      return `## Errors Questions

Focus on:
- Sources of error specific to biology practicals
- Random vs systematic errors
- How errors affect results
- Limitations of the method

**Biology-specific errors:**
- Uneven samples (different sizes/masses)
- Temperature fluctuations
- Difficulty measuring small changes
- Human reaction time
- Contamination of samples
- Uncontrolled variables
- Reading measuring equipment inaccurately

**Common question patterns:**
- "Suggest ONE source of error that could affect your results"
- "Explain why the results may not be accurate"
- "What is a limitation of this method?"`;

    case 'Improvements':
      return `## Improvements Questions

Focus on:
- How to increase accuracy
- How to improve reliability
- How to reduce errors
- How to extend the investigation

**Biology-specific improvements:**
- Use more repeats and calculate mean
- Use larger sample sizes
- Control temperature more precisely (water bath)
- Use more accurate measuring equipment
- Use a wider range of values for independent variable
- Take measurements at more frequent intervals
- Use a colorimeter instead of visual observation

**Common question patterns:**
- "Suggest how the method could be improved"
- "How could you make the results more reliable?"
- "What could be done to reduce errors?"`;

    case 'Safety':
      return `## Safety Questions

Focus on:
- Biological hazards
- Chemical hazards
- Appropriate precautions
- Why each precaution is necessary

**Biology safety considerations:**
- Handling microorganisms: aseptic technique, handwashing
- Chemicals: irritants, corrosives - wear goggles, gloves
- Sharp objects: scalpels, glass slides - careful handling
- Hot water baths: avoid burns
- Stains: iodine stains skin, methylene blue is irritant
- Fieldwork: be aware of surroundings, wash hands after

**For this practical:**
${practical.safety?.map(s => `- ${s}`).join('\n') || '- Follow standard lab safety procedures'}

**Common question patterns:**
- "Give ONE hazard and a suitable precaution" (2)
- "Explain why safety goggles must be worn"
- "Why should hands be washed after handling [specimen]?"`;

    default:
      return '';
  }
}
