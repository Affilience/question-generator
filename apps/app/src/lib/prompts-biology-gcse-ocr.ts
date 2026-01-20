// OCR Gateway GCSE Biology A (J247) Question Generation Prompts
// Tailored to OCR Gateway specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Biology mark ranges based on OCR Gateway specification
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
// OCR GATEWAY GCSE BIOLOGY A SPECIFICATION DETAILS (J247)
// Based on official OCR Gateway specification and past paper analysis
// ============================================================================

const OCR_BIOLOGY_ASSESSMENT_OBJECTIVES = `
## OCR Gateway GCSE Biology A Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, scientific techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas, scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 200 marks for Biology)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1/3** | Topics B1-B3 (Cell Level, Scaling Up, Organism Level) + B7 Practical Skills | 1h 45m | 100 | 50% |
| **Paper 2/4** | Topics B4-B6 (Community Level, Genes/Inheritance, Global Challenges) + B7 Practical Skills | 1h 45m | 100 | 50% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5
- **Higher tier**: Grades 4-9
- Papers 1 and 2 are Foundation tier
- Papers 3 and 4 are Higher tier
- Higher tier content marked with (H) in specification

### Mathematical Skills: 10% minimum
Biology papers assess mathematical skills including:
- Arithmetic and numerical computation
- Handling data (means, percentages, ratios)
- Algebra (simple substitution into formulas)
- Graphs (plotting, interpreting, drawing tangents)
`;

const OCR_BIOLOGY_PRACTICAL_ACTIVITY_GROUPS = `
## OCR Gateway GCSE Biology Practical Activity Groups (PAGs)

OCR uses a flexible approach where schools choose activities to meet the skill requirements.
Typical activities include:

| PAG | Skills Focus | Example Activities |
|-----|-------------|-------------------|
| **PAG 1** | Microscopy | Using light microscopes, preparing slides, measuring cells |
| **PAG 2** | Sampling | Using quadrats, transects, estimating population size |
| **PAG 3** | Rate of Reaction | Investigating enzyme activity, photosynthesis rate |
| **PAG 4** | Osmosis | Investigating osmosis in plant tissue |
| **PAG 5** | Qualitative Testing | Testing for biological molecules |
| **PAG 6** | Physiological Response | Investigating reaction time, pulse rate |

### Practical Assessment in Exams
- At least **15%** of marks assess practical skills
- Questions test: planning, implementing, analysing, evaluating
- OCR often uses unfamiliar practical contexts
- Common question types:
  - Describe a method for...
  - Explain how to improve accuracy/reliability
  - Calculate results from experimental data
  - Identify sources of error
  - Suggest improvements to method
`;

const OCR_BIOLOGY_COMMAND_WORDS = `
## OCR Gateway GCSE Biology Command Words (Official Definitions)

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Express in clear terms | 1 |
| **Give / Name** | Produce an answer from recall | 1 |
| **Identify** | Provide an answer from a number of possibilities | 1 |
| **Define** | Give the meaning of a word or phrase | 1-2 |
| **Label** | Add labels to a diagram | 1 |
| **List** | Give a number of points | 1-2 |

### Application Commands (AO2)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Obtain a numerical answer, showing relevant working | 2-4 |
| **Determine** | Use given data or information to obtain an answer | 2-3 |
| **Describe** | Give a detailed account of | 2-4 |
| **Explain** | Set out purposes or reasons; make relationships clear | 2-4 |
| **Suggest** | Apply knowledge and understanding to a new situation | 2-3 |
| **Predict** | Give an expected result | 1-2 |
| **Outline** | Set out main characteristics | 2-3 |

### Analysis Commands (AO3)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Compare** | Identify similarities and differences | 2-4 |
| **Evaluate** | Make a judgement based on evidence | 3-6 |
| **Justify** | Support a case with evidence | 2-4 |
| **Design / Plan** | Set out how something will be done | 3-6 |
| **Sketch** | Make a simple drawing | 1-2 |
| **Draw** | Produce a diagram | 1-2 |
| **Estimate** | Assign an approximate value | 1-2 |
| **Discuss** | Present key points about different ideas | 3-6 |
`;

const OCR_BIOLOGY_MARK_SCHEME_CONVENTIONS = `
## OCR Gateway GCSE Biology Mark Scheme Conventions

### Mark Types
| Symbol | Meaning |
|--------|---------|
| **1** | 1 mark |
| **✓** | Accept this answer |
| **✗** | Reject this answer |
| **(AW)** | Alternative wording acceptable |
| **(ORA)** | Or reverse argument |
| **ALLOW** | Accept this answer |
| **IGNORE** | Disregard this if stated |
| **NOT** | Do not accept |
| **DO NOT ALLOW** | Answer negates the mark |

### Calculation Marking
Standard approach for calculations:
1. Correct method/equation (1 mark)
2. Correct substitution (1 mark)
3. Correct answer with units (1 mark)
- Consequential marking may apply

### Level of Response (6-mark questions)
OCR uses Levels of Response for extended questions:
**Level 3 (5-6 marks):** Detailed scientific understanding, correct terminology, well-structured
**Level 2 (3-4 marks):** Good understanding with some omissions, mostly correct terminology
**Level 1 (1-2 marks):** Basic understanding, limited terminology, lacks structure
**Level 0 (0 marks):** No response or no relevant content

### OCR Gateway-Specific Patterns
- "Gateway" approach emphasises real-world applications
- Extended response questions often include context
- Practical questions may test unfamiliar procedures
- Diagrams and graphs frequently used in questions
`;

// ============================================================================
// OCR GATEWAY GCSE BIOLOGY REFERENCE DATA
// ============================================================================

const OCR_BIOLOGY_REFERENCE_DATA = `
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
| dm³ | cm³ | × 1000 |

### Photosynthesis and Respiration
**Photosynthesis word equation:**
carbon dioxide + water → glucose + oxygen (light energy required)

**Photosynthesis symbol equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂

**Aerobic respiration word equation:**
glucose + oxygen → carbon dioxide + water (+ energy released)

**Aerobic respiration symbol equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O

**Anaerobic respiration (animals):**
glucose → lactic acid (+ energy released)

**Anaerobic respiration (yeast/fermentation):**
glucose → ethanol + carbon dioxide (+ energy released)

### Standard Calculations
- Percentage change = ((final - initial) / initial) × 100
- Mean = sum of values / number of values
- Rate = change / time
- Surface area to volume ratio = SA / V
`;

// OCR Gateway GCSE Biology guiding principles
const OCR_BIOLOGY_PRINCIPLES = `
OCR Gateway GCSE Biology Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

OCR Gateway GCSE Biology Command Words:
- Calculate: Obtain a numerical answer, showing working
- Compare: Identify similarities and/or differences
- Describe: Give a detailed account including characteristics
- Determine: Use given data to obtain an answer
- Discuss: Present key points about different ideas
- Draw: Produce a diagram
- Estimate: Assign an approximate value
- Evaluate: Make a judgement based on evidence
- Explain: Set out purposes or reasons, make relationships clear
- Give/Name/State: Produce an answer from recall
- Identify: Provide an answer from possibilities
- Justify: Support a case with evidence
- Outline: Set out main characteristics
- Plan: Set out how something will be done
- Predict: Give an expected result
- Suggest: Apply knowledge to new situations

OCR Gateway Mark Scheme Conventions:
- 1 mark per valid point unless stated otherwise
- Calculations: method, substitution, answer with units
- 6-mark questions: Levels of Response marking
  - Level 3 (5-6 marks): Detailed, well-structured, correct terminology
  - Level 2 (3-4 marks): Good understanding with some omissions
  - Level 1 (1-2 marks): Basic understanding, limited terminology
- OCR Gateway emphasises real-world contexts
- (AW) = Alternative wording acceptable
- (ORA) = Or reverse argument

## CRITICAL: Mark Scheme Patterns for Worded Answers

### Essential Word Rules
- **Underlined** text is ESSENTIAL for the mark
- (AW) means alternative wording is acceptable
- NOT means specific words/ideas must not be present
- Each contradiction NEGATES one correct response

### Required Biology Definitions (MUST USE THESE EXACT PHRASES)

**Cell Biology:**
- Mitosis: "cell division producing two genetically identical daughter cells"
- Meiosis: "cell division producing four genetically different gametes" (H)
- Diffusion: "net movement of particles from high to low concentration"
- Osmosis: "movement of water from dilute to concentrated solution through partially permeable membrane"
- Active transport: "movement against concentration gradient requiring energy from respiration"

**Organisation:**
- Enzyme: "biological catalyst that speeds up reactions without being used up"
- Tissue: "group of similar cells working together"
- Organ: "group of different tissues working together to perform a function"

**Nervous System:**
- Neurone: "nerve cell that transmits electrical impulses"
- Reflex: "automatic, rapid response that does not involve conscious thought"
- Synapse: "gap between neurones where neurotransmitter diffuses across"

**Homeostasis:**
- Homeostasis: "maintenance of a constant internal environment"
- Negative feedback: "response that reverses a change to restore normal conditions"
- Hormone: "chemical messenger transported in blood to target organs"

**Genetics:**
- Gene: "section of DNA that codes for a protein"
- Allele: "different versions of the same gene"
- Genotype: "the alleles present for a particular gene"
- Phenotype: "the observable characteristics of an organism"
- Dominant: "allele that is expressed when heterozygous"
- Recessive: "allele only expressed when homozygous"

**Ecology:**
- Population: "organisms of the same species in an area"
- Community: "all the populations in an area"
- Ecosystem: "community plus its abiotic environment"
- Biodiversity: "variety of different species in an area"

### Standard Biology Explanation Patterns

**Transport Explanations:**
- "particles move from high to low concentration / down concentration gradient"
- "net movement until equilibrium / concentrations equal"
- "diffusion and osmosis are passive / require no energy"
- "active transport requires energy from respiration"

**Enzyme Explanations:**
- "substrate binds to active site"
- "active site has complementary shape to substrate"
- "lock and key model"
- "denaturation at high temperatures"
- "active site changes shape so substrate cannot bind"

**Homeostasis Explanations:**
- "receptor detects stimulus / change"
- "coordination centre processes information"
- "effector produces response"
- "negative feedback restores normal level"

Practical Activity Groups (PAGs):
- PAG 1: Microscopy - using light microscopes, preparing slides
- PAG 2: Sampling - quadrats, transects, population estimation
- PAG 3: Rate of reaction - enzyme activity, photosynthesis
- PAG 4: Osmosis - investigating osmosis in plant tissue
- PAG 5: Qualitative testing - food tests
- PAG 6: Physiological response - reaction time, pulse rate
`;

// Topic-specific guidance for OCR Gateway GCSE Biology
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-gcse-biology-cell-level-systems': `
Topic B1: Cell Level Systems (Paper 1/3):
- Cell structures: eukaryotic vs prokaryotic, plant vs animal cells
- Microscopy: magnification, resolution, preparing slides
- Enzymes: lock and key model, factors affecting activity (pH, temperature)
- Respiration: aerobic (in mitochondria) and anaerobic equations
- Photosynthesis: equation, factors affecting rate, limiting factors
- PAG: Microscopy, enzyme investigations, photosynthesis rate

OCR often tests: magnification calculations, enzyme graphs, comparing cell types
`,
  'ocr-gcse-biology-scaling-up': `
Topic B2: Scaling Up (Paper 1/3):
- Cell cycle: interphase, mitosis, cytokinesis
- Meiosis: producing gametes, genetic variation (H)
- Growth: cell division, differentiation, elongation
- Percentile charts: interpreting growth data
- Stem cells: embryonic vs adult, uses and ethical issues
- Differentiation: specialised cells, tissues, organs, organ systems
- Plant cloning: using meristems

OCR often tests: comparing mitosis and meiosis, stem cell applications
`,
  'ocr-gcse-biology-organism-level': `
Topic B3: Organism Level Systems (Paper 1/3):
- Nervous system: CNS, neurones, reflex arc, synapses
- Eye structure: parts and functions, accommodation
- Endocrine system: glands, hormones, comparing with nervous system
- Homeostasis: maintaining constant internal environment
- Negative feedback: how it works in different systems
- Blood glucose control: insulin, glucagon, diabetes types
- Water balance: kidneys, ADH, filtration and reabsorption (H)
- Reproductive hormones: menstrual cycle, contraception, fertility treatments

OCR often tests: reflex arc pathway, blood glucose regulation, comparing nervous and hormonal
`,
  'ocr-gcse-biology-community': `
Topic B4: Community Level Systems (Paper 2/4):
- Ecosystems: communities, populations, habitats
- Interdependence: food chains, food webs
- Abiotic and biotic factors: effects on organisms
- Competition: inter- and intraspecific
- Adaptations: structural, behavioural, functional
- Energy transfer: biomass, efficiency, energy losses
- Carbon cycle: processes involved
- Water cycle: stages
- Nitrogen cycle: bacteria roles (H)
- Biodiversity: importance, human impacts, conservation
- PAG: Sampling techniques

OCR often tests: energy transfer calculations, interpreting food webs, cycles
`,
  'ocr-gcse-biology-genes-inheritance': `
Topic B5: Genes, Inheritance and Selection (Paper 2/4):
- DNA structure: double helix, nucleotides, base pairs
- Genes and chromosomes: relationship to proteins
- Genome: Human Genome Project significance
- Genetic inheritance: alleles, dominant/recessive
- Punnett squares: predicting offspring
- Inherited disorders: cystic fibrosis, polydactyly
- Sex determination: XX and XY
- Variation: genetic, environmental, continuous, discontinuous
- Natural selection: Darwin's theory, evidence
- Evolution: fossil evidence, antibiotic resistance
- Selective breeding: process, advantages and problems
- Genetic engineering: process, uses, ethical considerations
- Classification: Linnaean system, three-domain system

OCR often tests: Punnett squares, explaining natural selection, genetic engineering
`,
  'ocr-gcse-biology-global-challenges': `
Topic B6: Global Challenges (Paper 2/4):
- Health: definition, lifestyle factors
- Non-communicable diseases: cancer, cardiovascular disease, obesity
- Communicable diseases: pathogens (bacteria, viruses, fungi, protists)
- Viral diseases: HIV, influenza, TMV
- Bacterial diseases: TB, salmonella, chlamydia
- Other pathogens: malaria (protist), athlete's foot (fungus)
- Human defences: physical barriers, immune system
- White blood cells: phagocytes, lymphocytes, antibodies
- Vaccination: how it works, herd immunity
- Antibiotics: how they work, resistance
- Drug development: testing stages, clinical trials
- Plant diseases: defences, detection
- Food production: food security, farming methods
- Sustainable food production: biological control, GM crops

OCR often tests: immune response, antibiotic resistance, food security
`,
  'ocr-gcse-biology-practical-skills': `
Topic B7: Practical Skills (Both Papers):
- Planning investigations: hypotheses, variables
- Variables: independent, dependent, control
- Fair testing: controlling variables
- Accuracy, precision, resolution, reproducibility
- Recording data: tables, appropriate precision
- Graphs: choosing type, scales, plotting, lines of best fit
- Analysis: identifying trends, anomalies
- Evaluation: limitations, improvements
- Mathematical skills: percentages, means, ratios, standard form

OCR often tests: planning methods, analysing data, evaluating investigations
`
};

// Generate compact prompt for auto/standard questions
export function getOCRBiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR Gateway GCSE Biology examiner creating an exam-style question.

${OCR_BIOLOGY_PRINCIPLES}

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
1. Uses authentic OCR Gateway GCSE Biology language
2. Tests understanding appropriate to GCSE level
3. Has a mark allocation between ${markRange.min}-${markRange.max} marks (REQUIRED)
4. Matches the ${difficulty} difficulty level
5. May include real-world context (Gateway approach)

Return a JSON object with this exact structure:
{
  "content": "The full question text including mark allocation [X marks]",
  "marks": <number between ${markRange.min} and ${markRange.max}>,
  "solution": "Full worked answer with clear reasoning",
  "markScheme": ["Mark point 1", "Mark point 2", ...]
}`;
}

// Generate extended response question prompt
export function getOCRBiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a 6-mark extended response question.

${OCR_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, detailed response
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Evaluate, Compare, Discuss)
4. Includes real-world context (Gateway approach)

The question should be assessed using Levels of Response marking:
Level 3 (5-6 marks): Detailed scientific understanding, correct terminology, well-structured
Level 2 (3-4 marks): Good understanding with some omissions, mostly correct terminology
Level 1 (1-2 marks): Basic understanding, limited terminology, lacks structure

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question with context]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer demonstrating excellent biology understanding]`;
}

// Generate multiple choice question prompt
export function getOCRBiologyMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a multiple choice question.

${OCR_BIOLOGY_PRINCIPLES}

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
export function getOCRBiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a calculation question.

${OCR_BIOLOGY_PRINCIPLES}

${OCR_BIOLOGY_REFERENCE_DATA}

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
- Surface area to volume ratio
- Ratios from Punnett squares
- Population estimates using sampling data
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
export function getOCRBiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating an explanation question.

${OCR_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of biology principles
2. Requires linking cause and effect
3. Uses appropriate command words (Explain, Describe and explain)
4. May include practical or real-world contexts (Gateway approach)

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
export function getOCRBiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a graph or data analysis question.

${OCR_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data or graphs
2. May require plotting, reading values, or identifying trends
3. Tests understanding of relationships between variables
4. Uses realistic biology data

Common graph types in OCR GCSE Biology:
- Rate of photosynthesis vs light intensity/CO₂/temperature
- Enzyme activity vs temperature/pH
- Osmosis results (mass change vs concentration)
- Population growth curves
- Heart rate during exercise
- Percentile growth charts

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation and conclusions]

**Explanation:**
[Model answer showing how to analyse the data correctly]`;
}

// Generate compare question prompt
export function getOCRBiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a comparison question.

${OCR_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biology concepts, structures, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of underlying principles
4. Uses the command word 'Compare' appropriately

Possible comparisons in OCR GCSE Biology:
- Mitosis vs meiosis
- Aerobic vs anaerobic respiration
- Diffusion vs osmosis vs active transport
- Plant vs animal cells
- Nervous vs hormonal control
- Type 1 vs Type 2 diabetes
- Sexual vs asexual reproduction
- Prokaryotic vs eukaryotic cells
- Selective breeding vs genetic engineering

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// Generate discuss question prompt (OCR Gateway uses this frequently)
export function getOCRBiologyDiscussPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR Gateway GCSE Biology examiner creating a 'discuss' question.

${OCR_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 'discuss' question (typically 6 marks) that:
1. Requires consideration of different viewpoints or factors
2. Tests understanding of advantages AND disadvantages
3. May involve ethical, social, or environmental considerations
4. Uses real-world context (Gateway approach)

Possible discussion topics in OCR GCSE Biology:
- Stem cell research
- Genetic modification
- Vaccination programmes
- Antibiotic resistance
- Contraception methods
- Conservation methods
- Food production methods
- Climate change impacts

OUTPUT FORMAT (use exact headers):
**Question:**
[Discuss question with context and mark allocation]

**Mark Scheme:**
[Level descriptors and points for both sides of argument]

**Explanation:**
[Model answer presenting balanced discussion with conclusion]`;
}

// ============================================================================
// PRACTICAL ACTIVITY GROUP (PAG) PROMPTS FOR BIOLOGY
// ============================================================================

/**
 * PAG question prompt for OCR Biology.
 */
export function getOCRBiologyPAGPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  // Get subtopic-specific guidance
  const subtopicGuidance = getBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${OCR_BIOLOGY_PRINCIPLES}

---

## Practical Activity Group Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this OCR Gateway GCSE Biology PAG.

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

Generate a genuinely original PAG ${subtopic} question now:`;
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
- "Name the independent variable" [1]
- "What is the dependent variable?" [1]
- "Name TWO variables that must be controlled" [2]
- "Explain why [variable] must be kept constant" [2]`;

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
- Magnification = Image size / Actual size
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
- "Give ONE hazard and a suitable precaution" [2]
- "Explain why safety goggles must be worn"
- "Why should hands be washed after handling [specimen]?"`;

    default:
      return '';
  }
}
