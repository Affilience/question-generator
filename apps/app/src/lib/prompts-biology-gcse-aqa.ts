// AQA GCSE Biology (8461) Question Generation Prompts
// Tailored to AQA specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Biology mark ranges based on AQA specification
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
// AQA GCSE BIOLOGY SPECIFICATION DETAILS (8461)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_BIOLOGY_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Biology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas and scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 200 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** | Topics 1-4: Cell Biology, Organisation, Infection and Response, Bioenergetics | 1h 45m | 100 | 50% |
| **Paper 2** | Topics 5-7: Homeostasis and Response, Inheritance and Evolution, Ecology | 1h 45m | 100 | 50% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5
- **Higher tier**: Grades 4-9
- Questions may target grades (e.g., 01.1 Foundation only, 02.3 Higher only)
- 30% of marks are common between Foundation and Higher papers

### Mathematical Skills: 10% minimum
Biology papers assess mathematical skills including:
- Arithmetic and numerical computation
- Handling data (means, percentages, ratios)
- Algebra (simple substitution into formulas)
- Graphs (plotting, interpreting, lines of best fit)
`;

const AQA_BIOLOGY_REQUIRED_PRACTICALS = `
## AQA GCSE Biology Required Practicals (10 total)

| RP | Name | Key Skills Tested | Topic |
|----|------|-------------------|-------|
| **RP1** | Microscopy | Using light microscopes, preparing slides | 1: Cell Biology |
| **RP2** | Osmosis | Measuring mass change in plant tissue | 1: Cell Biology |
| **RP3** | Food Tests | Testing for sugars, starch, protein, lipids | 2: Organisation |
| **RP4** | Enzymes | Effect of pH on enzyme activity | 2: Organisation |
| **RP5** | Photosynthesis | Effect of light intensity on rate | 4: Bioenergetics |
| **RP6** | Reaction Time | Investigating response times | 5: Homeostasis |
| **RP7** | Plant Responses | Effect of light/gravity on plant growth | 5: Homeostasis |
| **RP8** | Sampling | Using quadrats and transects | 7: Ecology |
| **RP9** | Field Investigation | Measuring population size | 7: Ecology |
| **RP10** | Decay | Factors affecting rate of decomposition | 7: Ecology |

### Practical Assessment in Exams
- At least **15%** of marks assess practical skills
- Questions test: planning, implementing, analysing, evaluating
- Common question types:
  - Describe a method for...
  - Explain how to improve accuracy/reliability
  - Calculate results from experimental data
  - Identify sources of error
  - Suggest improvements to method
`;

const AQA_BIOLOGY_COMMAND_WORDS = `
## AQA GCSE Biology Command Words (Official Definitions)

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Express in clear terms; recall facts without explanation | 1 |
| **Give / Name** | Recall one or more pieces of information | 1 |
| **Identify** | Name or otherwise characterise | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Label** | Name parts on a diagram | 1 |

### Application Commands (AO2)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Work out the value of something using numbers; show working | 2-4 |
| **Determine** | Use given data to obtain an answer | 2-3 |
| **Show that** | Provide structured evidence to verify given statement | 2-3 |
| **Describe** | Give an account in words; state features of a process | 2-3 |
| **Explain** | Give reasons; say why something happens using scientific ideas | 2-4 |
| **Suggest** | Apply knowledge to unfamiliar contexts; propose an idea | 2-3 |
| **Predict** | Give an expected result based on scientific knowledge | 1-2 |

### Analysis Commands (AO3)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Compare** | Describe similarities and/or differences | 2-4 |
| **Evaluate** | Use evidence to judge and reach a conclusion | 3-6 |
| **Justify** | Use evidence to support a conclusion or decision | 2-4 |
| **Design / Plan** | Set out the key features of an investigation | 3-6 |
| **Sketch** | Draw approximately, showing key features | 1-2 |
| **Draw** | Produce an accurate representation | 1-2 |
| **Estimate** | Assign an approximate value | 1-2 |
`;

const AQA_BIOLOGY_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Biology Mark Scheme Conventions

### Mark Types
| Symbol | Meaning |
|--------|---------|
| **1** | 1 mark |
| **✓** | Accept this answer |
| **✗** | Do not accept |
| **(oe)** | Or equivalent wording acceptable |
| **(owtte)** | Or words to that effect |
| **ALLOW** | Alternative answer acceptable |
| **IGNORE** | Ignore if stated (neither gains nor loses marks) |
| **DO NOT ALLOW** | This answer negates the mark |

### Calculation Marking
Standard approach for 3-4 mark calculations:
1. Correct equation selected (1 mark)
2. Correct substitution with units (1 mark)
3. Correct calculation and answer (1 mark)
4. Correct units on final answer (1 mark)

### Error Carried Forward (ECF)
- If a student makes an error but continues correctly with their wrong answer
- Subsequent marks can still be awarded
- Mark scheme will indicate "ECF from (a)" etc.

### Level of Response (6-mark questions)
**Level 3 (5-6 marks):** Relevant points clearly organised, uses scientific terminology correctly
**Level 2 (3-4 marks):** Some relevant points, mostly correct terminology, may lack detail
**Level 1 (1-2 marks):** Simple relevant statements, limited use of terminology

### Common Biology Mark Patterns
- **Definitions**: Underlined words are ESSENTIAL for the mark
- **Explanations**: Cause AND effect both required
- **Processes**: Sequential steps must be in correct order
- **Diagrams**: Labels must be accurate and clearly point to correct structure
`;

// ============================================================================
// COMPLETE AQA GCSE BIOLOGY REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const AQA_BIOLOGY_REFERENCE_DATA = `
## Key Values and Constants (MUST USE THESE)

### Magnification Calculations
| Equation | Units |
|----------|-------|
| Magnification = Image size / Actual size | No units (ratio) |
| Actual size = Image size / Magnification | Same as image size |
| Image size = Actual size × Magnification | Same as actual size |

### Unit Conversions
| From | To | Conversion |
|------|-----|------------|
| mm | μm | × 1000 |
| μm | mm | ÷ 1000 |
| cm | mm | × 10 |
| mm | cm | ÷ 10 |
| m | cm | × 100 |
| cm | m | ÷ 100 |

### Standard Cell Sizes
| Cell Type | Typical Size |
|-----------|--------------|
| Animal cell | 10-30 μm |
| Plant cell | 10-100 μm |
| Bacterial cell | 1-10 μm |
| Red blood cell | ~7 μm diameter |
| Mitochondrion | 1-10 μm |
| Chloroplast | 2-10 μm |

### Photosynthesis and Respiration
**Photosynthesis word equation:**
carbon dioxide + water → glucose + oxygen (light energy and chlorophyll required)

**Photosynthesis symbol equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

**Aerobic respiration word equation:**
glucose + oxygen → carbon dioxide + water (+ energy)

**Aerobic respiration symbol equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O

**Anaerobic respiration (animals):**
glucose → lactic acid (+ some energy)

**Anaerobic respiration (yeast/fermentation):**
glucose → ethanol + carbon dioxide (+ some energy)

### Percentage and Ratio Calculations
- Percentage change = (change / original) × 100
- Mean = sum of values / number of values
- Ratio = simplify to smallest whole numbers
`;

const AQA_BIOLOGY_KEY_DIAGRAMS = `
## Key Diagrams Students Must Know

### Cell Structures
- Animal cell (nucleus, cell membrane, cytoplasm, mitochondria, ribosomes)
- Plant cell (all animal cell parts + cell wall, chloroplasts, vacuole)
- Bacterial cell (cell wall, cell membrane, cytoplasm, plasmid, chromosomal DNA, flagellum)

### Body Systems
- The heart (4 chambers, blood vessels, valves)
- The digestive system (organs and their functions)
- The lungs (bronchi, bronchioles, alveoli)
- The kidney (nephron structure for Higher)
- The eye (cornea, iris, lens, retina, optic nerve)

### Biological Processes
- Mitosis (stages showing chromosome behaviour)
- Meiosis (showing how genetic variation arises)
- DNA structure (double helix, base pairs)
- Neurone structure (sensory, relay, motor)
- Reflex arc

### Ecology
- Food chains and food webs (arrows showing energy flow)
- Carbon cycle (showing stores and processes)
- Water cycle
`;

// AQA GCSE Biology guiding principles
const AQA_BIOLOGY_PRINCIPLES = `
AQA GCSE Biology Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

AQA GCSE Biology Command Words:
- Calculate: Work out a numerical answer, showing working
- Compare: Identify similarities and/or differences
- Describe: Give an account of features or events
- Design: Plan or invent a procedure to investigate
- Determine: Use data to work out a value
- Draw: Produce a diagram using a pencil
- Estimate: Give an approximate value
- Evaluate: Judge from available evidence
- Explain: Give reasons for scientific phenomena
- Give/Name/State: Short answer, no explanation needed
- Identify: Name or select from given options
- Justify: Use evidence to support a conclusion
- Plan: Write a method for an investigation
- Predict: Give a likely outcome based on knowledge
- Show that: Demonstrate a mathematical relationship
- Sketch: Draw a graph or diagram showing key features
- Suggest: Apply knowledge to unfamiliar contexts

AQA GCSE Mark Scheme Conventions:
- 1 mark for each correct scientific point
- Calculations: 1 mark for correct equation, 1 mark for substitution, 1 mark for answer with units
- 6-mark questions: QWC (Quality of Written Communication) using level of response marking
  - Level 3 (5-6 marks): Detailed, coherent answer with correct scientific terminology
  - Level 2 (3-4 marks): Some relevant points, may lack detail or have minor errors
  - Level 1 (1-2 marks): Simple statements with limited relevance
  - QWC questions assess BOTH scientific content AND quality of English
- AQA mark schemes are relatively flexible - accept correct alternatives and equivalent answers
- Higher tier content marked with (HT) in specification
- 30% of marks common between Foundation and Higher tiers

## CRITICAL: Mark Scheme Patterns for Worded Answers

### Essential Word Rules
- **Underlined** text in mark schemes is ESSENTIAL - exact word must appear
- Bold **and** means BOTH parts required for the mark
- "or" / "oe" indicates acceptable alternatives
- Each error/contradiction NEGATES one correct response

### Required Biology Definitions (MUST USE THESE EXACT PHRASES)

**Cell Biology:**
- Mitosis: "cell division that produces two genetically identical daughter cells"
- Meiosis: "cell division that produces four genetically different gametes" (Higher)
- Diffusion: "movement of particles from high to low concentration"
- Osmosis: "movement of water from dilute to concentrated solution through a partially permeable membrane"
- Active transport: "movement against concentration gradient using energy from respiration"

**Organisation:**
- Enzyme: "biological catalyst that speeds up reactions without being used up"
- Tissue: "group of similar cells working together to carry out a function"
- Organ: "group of different tissues working together"

**Infection and Response:**
- Pathogen: "microorganism that causes disease"
- Antibiotic: "chemical that kills bacteria or stops bacterial growth"
- Vaccination: "injection of dead/inactive pathogens to stimulate antibody production"
- Antibody: "protein produced by white blood cells that binds to specific antigens"

**Homeostasis:**
- Homeostasis: "maintaining a constant internal environment"
- Negative feedback: "response that reverses a change to return to normal"
- Hormone: "chemical messenger carried in the blood"

**Inheritance:**
- Gene: "section of DNA that codes for a protein"
- Allele: "different versions of the same gene"
- Genotype: "the combination of alleles an organism has"
- Phenotype: "the physical characteristics shown by an organism"

**Ecology:**
- Population: "all organisms of one species in an area"
- Community: "all the populations in an area"
- Ecosystem: "the community and its physical environment"
- Biodiversity: "the variety of living organisms in an area"

### Standard Biology Explanation Patterns

**Transport Explanations:**
- "particles move from high to low concentration (down concentration gradient)"
- "net movement continues until equilibrium is reached"
- "no energy required for diffusion/osmosis"
- "active transport requires energy from respiration to move against gradient"

**Enzyme Explanations:**
- "substrate binds to active site"
- "enzyme is specific because active site has complementary shape to substrate"
- "at high temperatures enzyme is denatured"
- "active site changes shape so substrate cannot bind"

**Homeostasis Explanations:**
- "receptor detects stimulus"
- "coordination centre processes information"
- "effector brings about response"
- "negative feedback returns level to normal"

**Inheritance Explanations:**
- "alleles separate during meiosis"
- "dominant allele is expressed when heterozygous"
- "recessive allele only expressed when homozygous"

Required Practicals (10 total for separate Biology):
1. Microscopy - using a light microscope to observe and draw cells
2. Osmosis - effect of concentration on plant tissue mass
3. Food tests - testing for starch, sugars, proteins, lipids
4. Enzymes - effect of pH on enzyme activity
5. Photosynthesis - effect of light intensity on rate
6. Reaction time - measuring response to a stimulus
7. Plant responses - effect of light or gravity on plant growth
8. Sampling - using quadrats and transects
9. Field investigation - measuring population size
10. Decay - effect of temperature on rate of decomposition
`;

// Topic-specific guidance for GCSE Biology
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-gcse-biology-cell-biology': `
Topic 1: Cell Biology:
- Cell structure: differences between plant, animal, and bacterial cells
- Light and electron microscopes: magnification and resolution
- Calculating magnification: M = I / A (must be able to rearrange)
- Cell transport: diffusion, osmosis, active transport
- Cell cycle: interphase (growth and DNA replication), mitosis
- Stem cells: embryonic vs adult, ethical considerations
- Cancer: uncontrolled cell division, treatments

AQA often tests: microscopy calculations, comparing cell types, explaining transport mechanisms
Required Practical 1: Using microscopes to observe cells
Required Practical 2: Osmosis in plant tissue
`,
  'aqa-gcse-biology-organisation': `
Topic 2: Organisation:
- Levels of organisation: cells → tissues → organs → organ systems → organisms
- Digestive system: mechanical and chemical digestion, enzymes
- Enzymes: lock and key model, factors affecting activity (temperature, pH)
- Heart structure: four chambers, blood vessels, cardiac cycle
- Blood components: red cells, white cells, platelets, plasma
- Blood vessels: arteries (thick walls, pulse), veins (valves, thin walls), capillaries (thin walls for exchange)
- Cardiovascular disease: stents, statins, transplants, lifestyle factors
- Plant tissues: xylem (water), phloem (sugars), transpiration, translocation

AQA often tests: enzyme investigations, heart structure and function, comparing blood vessels
Required Practical 3: Food tests
Required Practical 4: Effect of pH on enzyme activity
`,
  'aqa-gcse-biology-infection-response': `
Topic 3: Infection and Response:
- Pathogens: bacteria, viruses, fungi, protists - how they spread and cause disease
- Viral diseases: measles, HIV, TMV
- Bacterial diseases: salmonella, gonorrhoea
- Fungal diseases: rose black spot
- Protist diseases: malaria (vector = mosquito)
- Human defences: skin, mucus, cilia, stomach acid
- White blood cells: phagocytosis, antibodies, antitoxins
- Vaccination: herd immunity, pros and cons
- Antibiotics: only work on bacteria, resistance development
- Drug development: preclinical, clinical trials, placebo, double-blind
- Monoclonal antibodies (HT): production and uses

AQA often tests: explaining immune response, antibiotic resistance, vaccination
`,
  'aqa-gcse-biology-bioenergetics': `
Topic 4: Bioenergetics:
- Photosynthesis equation: CO₂ + H₂O → glucose + O₂ (light and chlorophyll needed)
- Uses of glucose: respiration, cellulose, starch storage, lipids, proteins
- Factors affecting photosynthesis: light intensity, CO₂, temperature, limiting factors
- Inverse square law for light intensity (HT)
- Aerobic respiration: glucose + O₂ → CO₂ + H₂O (in mitochondria)
- Anaerobic respiration: glucose → lactic acid (muscles) or ethanol + CO₂ (yeast)
- Oxygen debt: lactic acid broken down, requires extra oxygen
- Response to exercise: increased heart rate, breathing rate, why muscles fatigue

AQA often tests: photosynthesis rate graphs, limiting factors, comparing aerobic and anaerobic
Required Practical 5: Effect of light intensity on photosynthesis
`,
  'aqa-gcse-biology-homeostasis': `
Topic 5: Homeostasis and Response:
- Homeostasis: maintaining constant internal environment
- Negative feedback: changes reversed to restore normal level
- Nervous system: CNS (brain + spinal cord), neurones, synapses
- Reflex arc: stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response
- Endocrine system: glands produce hormones, carried in blood
- Blood glucose control: insulin (reduces), glucagon (increases), diabetes types
- Kidney function (HT): filtration, reabsorption, ADH and water balance
- Reproductive hormones: FSH, LH, oestrogen, progesterone
- Menstrual cycle: how hormones control
- Contraception: hormonal and non-hormonal methods
- Fertility treatments: clomifene, IVF
- Plant hormones: auxins, phototropism, gravitropism

AQA often tests: reflex arcs, blood glucose regulation, menstrual cycle
Required Practical 6: Reaction time
Required Practical 7: Plant growth responses
`,
  'aqa-gcse-biology-inheritance': `
Topic 6: Inheritance, Variation and Evolution:
- Sexual vs asexual reproduction: advantages and disadvantages
- Meiosis: produces gametes, genetic variation through crossing over and independent assortment
- DNA structure: double helix, base pairs (A-T, C-G)
- Genome: entire genetic material, Human Genome Project significance
- Genetic inheritance: alleles, dominant/recessive, homozygous/heterozygous
- Punnett squares: predicting offspring genotypes and phenotypes
- Genetic disorders: cystic fibrosis (recessive), polydactyly (dominant)
- Sex determination: XX female, XY male
- Variation: genetic, environmental, continuous, discontinuous
- Evolution: natural selection, Darwin's theory, Wallace's contribution
- Evidence for evolution: fossils, antibiotic resistance
- Selective breeding: advantages and problems
- Genetic engineering: making insulin, GM crops, pros and cons
- Classification: Linnaeus system, three-domain system

AQA often tests: Punnett squares, explaining natural selection, comparing selective breeding and GM
`,
  'aqa-gcse-biology-ecology': `
Topic 7: Ecology:
- Ecosystems: community + physical environment
- Biotic factors: predation, competition, disease
- Abiotic factors: light, temperature, water, pH, mineral ions
- Adaptations: structural, behavioural, functional
- Food chains and webs: arrows show energy flow
- Pyramids of biomass: always pyramid shape
- Energy transfer: only ~10% passes to next level, rest lost as heat
- The carbon cycle: photosynthesis, respiration, combustion, decomposition
- The water cycle: evaporation, condensation, precipitation
- Decomposition: bacteria and fungi, optimal conditions
- Human impacts: pollution, deforestation, global warming
- Biodiversity: importance, conservation methods, gene banks
- Food security: increasing demand, sustainable methods
- Farming techniques: hydroponics, biological control

AQA often tests: sampling techniques, calculating population size, explaining biodiversity importance
Required Practical 8: Sampling with quadrats
Required Practical 9: Field investigation
Required Practical 10: Decay rates
`
};

// Generate compact prompt for auto/standard questions
export function getAQABiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert AQA GCSE Biology examiner creating an exam-style question.

${AQA_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY AND MARK ALLOCATION:
- Easy: 1-3 marks (Recall, definitions, simple identifications)
- Medium: 4-6 marks (Application, calculations, explanations)
- Hard: 6-9 marks (Multi-step problems, extended explanations, data analysis)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this ${difficulty} difficulty question.

Create ONE exam-style question that:
1. Uses authentic AQA GCSE Biology language
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
export function getAQABiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating a 6-mark extended response question.

${AQA_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, detailed response
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Evaluate, Compare, Describe)
4. Could include practical applications or real-world contexts

The question should be assessed using level of response marking:
Level 3 (5-6 marks): Detailed, well-structured answer covering all key points
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
export function getAQABiologyMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating a multiple choice question.

${AQA_BIOLOGY_PRINCIPLES}

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
export function getAQABiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating a calculation question.

${AQA_BIOLOGY_PRINCIPLES}

${AQA_BIOLOGY_REFERENCE_DATA}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## CRITICAL: Biology Calculation Types
Common calculation types:
- Magnification: M = I / A (image size / actual size)
- Percentage change: (change / original) × 100
- Mean: sum of values / number of values
- Ratios from Punnett squares
- Population size using capture-recapture
- Percentage of energy transferred between trophic levels

Create ONE calculation question that:
1. Provides realistic numerical data
2. Tests quantitative biology skills
3. Has a clear, structured calculation
4. Produces a sensible numerical answer

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking: equation (1), substitution (1), answer with units (1)]

**Explanation:**
[Complete worked solution with every step shown]`;
}

// Generate explain question prompt
export function getAQABiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating an explanation question.

${AQA_BIOLOGY_PRINCIPLES}

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
export function getAQABiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating a graph or data analysis question.

${AQA_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data or graphs
2. May require plotting, reading values, or identifying trends
3. Tests understanding of relationships between variables
4. Uses realistic biology data

Common graph types in GCSE Biology:
- Rate of photosynthesis vs light intensity
- Enzyme activity vs temperature/pH
- Population growth curves
- Transpiration rates
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
export function getAQABiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Biology examiner creating a comparison question.

${AQA_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biology concepts, structures, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of underlying principles
4. Uses the command word 'Compare' appropriately

Possible comparisons in GCSE Biology:
- Mitosis vs meiosis
- Aerobic vs anaerobic respiration
- Diffusion vs osmosis vs active transport
- Plant vs animal cells
- Arteries vs veins vs capillaries
- Nervous vs hormonal coordination
- Type 1 vs Type 2 diabetes
- Sexual vs asexual reproduction
- Selective breeding vs genetic engineering

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// ============================================================================
// REQUIRED PRACTICAL PROMPTS FOR BIOLOGY
// ============================================================================

/**
 * Required Practical question prompt for AQA Biology.
 */
export function getAQABiologyRequiredPracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  // Get subtopic-specific guidance
  const subtopicGuidance = getBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${AQA_BIOLOGY_PRINCIPLES}

---

## Required Practical Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this AQA GCSE Biology Required Practical.

**Difficulty:** ${difficulty}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Response Format (JSON)

{
  "content": "Question about ${subtopic.toLowerCase()} for ${practical.name}",
  "marks": <total marks as integer>,
  "solution": "Detailed answer with practical knowledge",
  "markScheme": ["B1/M1: mark description", "A1: mark description"],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

\${getDiagramDocsForSubject('biology')}

Generate a genuinely original Required Practical ${subtopic} question now:`;
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
- "Name the independent variable" [1 mark]
- "What is the dependent variable?" [1 mark]
- "Name TWO variables that must be controlled" [2 marks]
- "Explain why [variable] must be kept constant" [2 marks]`;

    case 'Equipment':
      return `## Equipment Questions

Focus on:
- Naming appropriate equipment
- Explaining why specific equipment is chosen
- Accuracy and precision of equipment
- Alternatives and their limitations

**Biology-specific equipment:**
- Light microscope (magnification, resolution)
- Measuring cylinder (less accurate) vs pipette (more accurate)
- Electronic balance (accuracy)
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
- Magnification = Image size / Actual size
- Percentage change = (change / original) × 100
- Mean = sum of values / number of values
- Rate = amount / time

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
- Chemicals: irritants, corrosives, toxins - wear goggles, gloves
- Sharp objects: scalpels, glass slides - careful handling, dispose properly
- Hot water baths: avoid burns
- Stains: iodine can stain skin, methylene blue is irritant
- Fieldwork: be aware of surroundings, wash hands after

**For this practical:**
${practical.safety?.map(s => `- ${s}`).join('\n') || '- Follow standard lab safety procedures'}

**Common question patterns:**
- "Name ONE hazard and describe a precaution" [2 marks]
- "Explain why safety goggles must be worn"
- "Why should hands be washed after handling [specimen]?"`;

    default:
      return '';
  }
}
