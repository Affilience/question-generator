// Edexcel A-Level Biology A (9BI0) Question Generation Prompts
// Tailored to Pearson Edexcel specification style and assessment objectives
// Comprehensive coverage of all 8 topics with detailed mark schemes

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// A-Level Biology mark ranges based on Edexcel specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 4 };    // Short answer questions
    case 'medium':
      return { min: 6, max: 9 };    // Extended response questions
    case 'hard':
      return { min: 15, max: 25 };  // Essay questions
  }
}

// ============================================================================
// EDEXCEL A-LEVEL BIOLOGY A SPECIFICATION DETAILS (9BI0)
// Based on official Pearson Edexcel specification and past paper analysis
// ============================================================================

// ============================================================================
// COMPLETE SPECIFICATION OVERVIEW
// ============================================================================

const EDEXCEL_BIOLOGY_SPECIFICATION_OVERVIEW = `
## Edexcel A-Level Biology A (Salters-Nuffield) - 9BI0

### Course Structure
The Edexcel A-Level Biology A qualification is a linear course examined at the end of Year 13.
It is based on the Salters-Nuffield Advanced Biology (SNAB) approach, which uses real-life
contexts to teach biological principles.

### Total Assessment: 300 marks (3 papers)

### Grade Boundaries (Typical)
| Grade | Percentage (approx) | UMS |
|-------|---------------------|-----|
| A*    | 80%+                | 270+ |
| A     | 70%+                | 240+ |
| B     | 60%+                | 210+ |
| C     | 50%+                | 180+ |
| D     | 40%+                | 150+ |
| E     | 30%+                | 120+ |

### Qualification Aims
Students will:
- Develop essential knowledge and understanding of biological concepts
- Develop and demonstrate competence in experimental skills
- Understand how advances in biological science relate to society
- Develop mathematical skills for biological contexts
- Sustain and develop interest in biological science
`;

// ============================================================================
// COGNITIVE CHALLENGE BY DIFFICULTY LEVEL
// ============================================================================

const EDEXCEL_ALEVEL_BIOLOGY_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, basic calculation, identification | State definitions, label diagrams, recall processes, simple magnification calculations |
| **Medium** | Application, data interpretation, explanation | Apply concepts to unfamiliar organisms, interpret graphs and tables, explain adaptations and processes |
| **Hard** | Analysis, evaluation, synthesis, essay writing | Analyse experimental data, evaluate methods, design investigations, synoptic essays linking multiple topics |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires integration of concepts across multiple topics (e.g., linking genetics with evolution)
- Demands analysis of unfamiliar experimental data or contexts
- Must evaluate experimental design and suggest improvements
- Requires extended written responses with clear scientific reasoning
- Essay questions requiring synthesis across the specification
- No single approach - student must select and justify methodology

**Easy (2-4 marks):** Knowledge recall, simple labelling, basic calculations
**Medium (6-9 marks):** Data interpretation, explanation questions, application to new contexts
**Hard (15-25 marks):** Extended response essays, experimental evaluation, synoptic analysis
`;

// ============================================================================
// DETAILED ASSESSMENT OBJECTIVES WITH WEIGHTINGS
// ============================================================================

const EDEXCEL_BIOLOGY_ASSESSMENT_OBJECTIVES = `
## Assessment Objectives (AOs) - Detailed Breakdown

### AO1: Demonstrate knowledge and understanding (30-35%)
Students should be able to:
- Recall scientific ideas, processes, techniques and procedures
- Understand scientific ideas, processes, techniques and procedures
- Use appropriate vocabulary, definitions and terminology

**Typical question stems:**
- "State..."
- "Define..."
- "Name..."
- "Describe..."
- "Outline..."

**Mark allocation:** Usually 1-4 marks per question part

### AO2: Apply knowledge and understanding (40-45%)
Students should be able to:
- Apply knowledge and understanding of scientific ideas, processes and procedures
- Apply knowledge in familiar and unfamiliar contexts
- Bring together knowledge from different areas of the specification

**Typical question stems:**
- "Explain..."
- "Suggest..."
- "Calculate..."
- "Apply..."
- "Use your knowledge to..."

**Mark allocation:** Usually 2-6 marks per question part

### AO3: Analyse, interpret and evaluate (25%)
Students should be able to:
- Analyse and interpret scientific information, ideas and evidence
- Evaluate information to make judgments and draw conclusions
- Evaluate methodology, evidence and data
- Make valid conclusions from data

**Typical question stems:**
- "Analyse..."
- "Evaluate..."
- "To what extent..."
- "Justify..."
- "Compare..."
- "Discuss..."

**Mark allocation:** Usually 3-9 marks per question part

### Practical Endorsement
- Separately reported (Pass/Not Classified)
- Assessed by teachers against Common Practical Assessment Criteria (CPAC)
- Must complete minimum of 12 practical activities
- 16 Core Practicals are examined in written papers
`;

// ============================================================================
// PAPER STRUCTURE - DETAILED BREAKDOWN
// ============================================================================

const EDEXCEL_BIOLOGY_PAPER_STRUCTURE = `
## Paper Structure - Detailed Analysis

### Paper 1: The Natural Environment and Species Survival
**Duration:** 1 hour 45 minutes
**Total marks:** 90
**Percentage of A-Level:** 30%

**Content assessed:**
- Topic 1: Lifestyle, Health and Risk
- Topic 2: Genes and Health
- Topic 3: Voice of the Genome
- Topic 4: Biodiversity and Natural Resources

**Question types:**
- Multiple choice questions (15 marks)
- Short open questions
- Open-response questions
- Calculations
- Extended writing (one 6-mark question)

**Mark breakdown (approximate):**
- Section A (MCQ): 15 marks
- Section B (Short answer): 50-55 marks
- Section C (Extended): 20-25 marks

### Paper 2: Energy, Exercise and Coordination
**Duration:** 1 hour 45 minutes
**Total marks:** 90
**Percentage of A-Level:** 30%

**Content assessed:**
- Topic 5: On the Wild Side
- Topic 6: Immunity, Infection and Forensics
- Topic 7: Run for Your Life
- Topic 8: Grey Matter

**Question types:**
- Multiple choice questions (15 marks)
- Short open questions
- Open-response questions
- Calculations
- Extended writing (one 6-mark question)

**Mark breakdown (approximate):**
- Section A (MCQ): 15 marks
- Section B (Short answer): 50-55 marks
- Section C (Extended): 20-25 marks

### Paper 3: General and Practical Principles in Biology
**Duration:** 2 hours 30 minutes
**Total marks:** 120
**Percentage of A-Level:** 40%

**Content assessed:**
- All topics (1-8) - SYNOPTIC
- Practical skills and techniques

**Question types:**
- Short open questions
- Open-response questions
- Extended response questions
- Synoptic essay (25 marks)
- Calculations and data analysis

**Mark breakdown (approximate):**
- Section A (Practical-based): 35-40 marks
- Section B (Applied concepts): 50-55 marks
- Section C (Synoptic essay): 25 marks

### Essay Marking Criteria (Paper 3, Section C)
**Level 5 (21-25 marks):**
- Comprehensive and accurate content
- Excellent breadth and depth
- Precise and logical structure
- Effective synoptic links

**Level 4 (16-20 marks):**
- Good range of content
- Accurate with minor omissions
- Clear logical structure
- Some synoptic links

**Level 3 (11-15 marks):**
- Adequate content
- Some inaccuracies
- Reasonable structure
- Limited synoptic links

**Level 2 (6-10 marks):**
- Limited content
- Significant inaccuracies
- Poor structure
- Weak or no synoptic links

**Level 1 (1-5 marks):**
- Minimal relevant content
- Major inaccuracies
- No clear structure
- No synoptic links
`;

// ============================================================================
// COMMAND WORD DEFINITIONS WITH EXAMPLES
// ============================================================================

const EDEXCEL_BIOLOGY_COMMAND_WORDS = `
## Command Words - Detailed Definitions and Examples

### Calculate
**Definition:** Obtain a numerical answer, showing relevant working. If the answer has a unit, this must be included.
**Example:** "Calculate the percentage change in mass of the potato cylinders." (3 marks)
**Requirements:** Show formula, substitution, answer with units

### Compare
**Definition:** Identify similarities and differences between two or more things.
**Example:** "Compare the structure of arteries and veins." (4 marks)
**Requirements:** Must include BOTH similarities AND differences, use comparative language

### Complete
**Definition:** Add the required information to a table, graph, diagram or other representation.
**Example:** "Complete the diagram to show the structure of a phospholipid." (2 marks)
**Requirements:** Add all missing elements accurately

### Define
**Definition:** Give the meaning of a term.
**Example:** "Define the term 'gene'." (2 marks)
**Requirements:** Precise, scientific definition

### Describe
**Definition:** Give an account in words of what something is like, or what happened.
**Example:** "Describe the changes that occur during the cardiac cycle." (6 marks)
**Requirements:** Detailed account, no explanation of why required

### Determine
**Definition:** Use given data or information to work out the answer.
**Example:** "Determine the genotype of the parent organisms." (2 marks)
**Requirements:** Show reasoning and arrive at specific answer

### Discuss
**Definition:** Consider the different aspects and make reasoned comments.
**Example:** "Discuss the benefits and risks of using stem cells in medicine." (6 marks)
**Requirements:** Multiple viewpoints, balanced argument, conclusion

### Draw
**Definition:** Produce a labelled diagram of something.
**Example:** "Draw and label a diagram of a mitochondrion." (4 marks)
**Requirements:** Clear, accurate, fully labelled

### Estimate
**Definition:** Give an approximate value or quantity.
**Example:** "Estimate the number of cells visible in the field of view." (1 mark)
**Requirements:** Reasonable approximation with working if appropriate

### Evaluate
**Definition:** Review information and then bring it together to make a reasoned judgement.
**Example:** "Evaluate the evidence that smoking causes lung cancer." (6 marks)
**Requirements:** Consider strengths and weaknesses, make supported judgement

### Explain
**Definition:** Give reasons for something, using biological knowledge and understanding.
**Example:** "Explain why the rate of photosynthesis increases as light intensity increases." (3 marks)
**Requirements:** Link cause to effect, use scientific reasoning

### Give / State / Name
**Definition:** Produce an answer from recall or from given information without needing explanation.
**Example:** "State the function of ribosomes." (1 mark)
**Requirements:** Brief, factual answer

### Identify
**Definition:** Recognise and name something.
**Example:** "Identify the organelle shown in the electron micrograph." (1 mark)
**Requirements:** Name or point out specific feature

### Justify
**Definition:** Give evidence to support an answer.
**Example:** "Justify your choice of statistical test." (2 marks)
**Requirements:** Provide clear reasoning and evidence

### Label
**Definition:** Add labels to a diagram, drawing or graph.
**Example:** "Label the parts of the neurone shown." (3 marks)
**Requirements:** Accurate labels with clear lines to features

### Measure
**Definition:** Find an item of data for a given quantity.
**Example:** "Measure the length of the cell in micrometres." (2 marks)
**Requirements:** Accurate measurement with correct units

### Outline
**Definition:** Give a brief account of the main points.
**Example:** "Outline the stages of protein synthesis." (4 marks)
**Requirements:** Key points only, not excessive detail

### Plot
**Definition:** Mark points accurately on a graph or chart.
**Example:** "Plot the data on the grid provided." (3 marks)
**Requirements:** Accurate plotting, appropriate scale, labels

### Predict
**Definition:** Give an expected result based on scientific knowledge.
**Example:** "Predict the effect of increasing enzyme concentration." (2 marks)
**Requirements:** Logical prediction based on understanding

### Show (that)
**Definition:** Provide structured evidence that leads to a given result.
**Example:** "Show that the magnification of the image is x400." (2 marks)
**Requirements:** Clear working leading to stated conclusion

### Sketch
**Definition:** Draw approximately, without need for accurate plotting or scaling.
**Example:** "Sketch a graph to show how enzyme activity varies with temperature." (2 marks)
**Requirements:** Approximate shape showing key features

### Suggest
**Definition:** Apply scientific knowledge and understanding to a new situation.
**Example:** "Suggest why the patient's heart rate increased during exercise." (3 marks)
**Requirements:** Apply knowledge to unfamiliar context

### Use
**Definition:** Apply your knowledge and understanding of the information provided.
**Example:** "Use the data in the table to explain the pattern shown." (4 marks)
**Requirements:** Reference specific data in answer
`;

// ============================================================================
// COMMON MISCONCEPTIONS BY TOPIC
// ============================================================================

const EDEXCEL_BIOLOGY_COMMON_MISCONCEPTIONS = `
## Common Misconceptions - By Topic

### Topic 1: Lifestyle, Health and Risk
| Misconception | Correct Understanding |
|---------------|----------------------|
| "Cholesterol is always bad" | Cholesterol is essential for cell membranes and steroid hormones; only excess LDL is problematic |
| "Correlation proves causation" | Correlation shows association only; other factors may be involved |
| "Heart attacks only happen in the heart" | Atherosclerosis can occur in any artery; stroke is similar in brain |
| "Blood clots are always harmful" | Clotting is essential for wound healing; only inappropriate clots are harmful |
| "Saturated fats directly cause heart disease" | Saturated fats increase LDL, which increases atherosclerosis risk |

### Topic 2: Genes and Health
| Misconception | Correct Understanding |
|---------------|----------------------|
| "Genes make proteins directly" | Genes are transcribed to mRNA, then translated to proteins |
| "All mutations are harmful" | Many mutations are neutral or even beneficial |
| "Recessive alleles are rare" | Some recessive alleles (like blood type O) are very common |
| "Gene therapy replaces faulty genes" | Most gene therapy adds functional copies alongside faulty genes |
| "DNA replication starts at one point" | Multiple replication forks work simultaneously |

### Topic 3: Voice of the Genome
| Misconception | Correct Understanding |
|---------------|----------------------|
| "All cells have different DNA" | All body cells have identical DNA; gene expression differs |
| "Stem cells can become any cell type" | Only totipotent cells can form any cell; pluripotent have limits |
| "Mitosis produces variety" | Mitosis produces identical cells; meiosis creates variation |
| "Cancer is a single disease" | Cancer is many diseases with different causes and treatments |
| "Differentiation is irreversible" | Some cells can dedifferentiate; reprogramming is possible |

### Topic 4: Biodiversity and Natural Resources
| Misconception | Correct Understanding |
|---------------|----------------------|
| "High species number = high biodiversity" | Biodiversity includes evenness and genetic diversity too |
| "Classification is fixed" | Classification changes as new evidence emerges |
| "All bacteria are pathogens" | Most bacteria are harmless or beneficial |
| "Extinction is natural, so not a problem" | Current extinction rate is far above background rate |
| "Plants are a single kingdom" | Some organisms called 'plants' are protists or fungi |

### Topic 5: On the Wild Side
| Misconception | Correct Understanding |
|---------------|----------------------|
| "Photosynthesis only occurs in daylight" | Light-dependent reactions need light; Calvin cycle doesn't |
| "Plants respire only at night" | Plants respire continuously; photosynthesis masks this in day |
| "Energy is recycled in ecosystems" | Energy flows through ecosystems; only nutrients cycle |
| "All climate change is anthropogenic" | Natural factors exist, but current change is primarily human-caused |
| "Carbon dioxide is the only greenhouse gas" | Methane, water vapour, and others are also significant |

### Topic 6: Immunity, Infection and Forensics
| Misconception | Correct Understanding |
|---------------|----------------------|
| "Antibiotics kill viruses" | Antibiotics only work on bacteria |
| "Vaccines contain the disease" | Vaccines contain antigens or weakened/dead pathogens |
| "More antibodies = stronger immunity" | Memory cells provide rapid response, not constant antibody levels |
| "HIV and AIDS are the same" | HIV is the virus; AIDS is the syndrome it causes |
| "Allergies are immune system failures" | Allergies are inappropriate immune responses to harmless antigens |

### Topic 7: Run for Your Life
| Misconception | Correct Understanding |
|---------------|----------------------|
| "Anaerobic respiration produces no ATP" | Anaerobic respiration produces 2 ATP per glucose |
| "Lactic acid causes muscle fatigue" | Lactic acid is a fuel source; hydrogen ions cause fatigue |
| "Muscles get longer during contraction" | Muscles shorten; they can only pull, not push |
| "Exercise damages muscles" | Controlled exercise causes beneficial adaptations |
| "More oxygen = more ATP" | Oxygen is needed for aerobic respiration but rate depends on other factors |

### Topic 8: Grey Matter
| Misconception | Correct Understanding |
|---------------|----------------------|
| "We only use 10% of our brains" | All brain regions have functions and are active |
| "Action potentials vary in size" | Action potentials are all-or-nothing; frequency varies |
| "Synapses are gaps between neurons" | Synaptic cleft is a gap; synapse includes pre- and post-synaptic membranes |
| "Hormones act instantly" | Hormones are slower than nerve impulses; effects last longer |
| "Vision occurs in the eyes" | Eyes detect light; vision is processed in visual cortex |
`;

// ============================================================================
// MATHEMATICAL SKILLS FOR BIOLOGY
// ============================================================================

const EDEXCEL_BIOLOGY_MATHEMATICAL_SKILLS = `
## Mathematical Skills in Biology (10% minimum of assessment)

### Arithmetic and Numerical Computation
**Skills required:**
- Use and manipulate standard form
- Use ratios, fractions and percentages
- Use calculators for complex calculations
- Make order of magnitude calculations
- Use significant figures appropriately

**Biology applications:**
- Magnification calculations
- Percentage change calculations
- Dilution calculations
- Population size estimates

### Handling Data
**Skills required:**
- Use appropriate data units
- Use and interpret frequency tables and diagrams
- Understand the principles of sampling
- Find arithmetic means, medians, modes
- Calculate standard deviation
- Use scatter diagrams and lines of best fit
- Understand correlation vs causation

**Biology applications:**
- Ecological sampling
- Enzyme kinetics
- Population studies
- Physiological measurements

### Algebra
**Skills required:**
- Understand and use symbols
- Substitute numerical values into algebraic equations
- Solve algebraic equations
- Use logarithms in biology contexts

**Biology applications:**
- Hardy-Weinberg equation
- Cardiac output calculations
- Water potential calculations
- Population growth models

### Graphs
**Skills required:**
- Plot and interpret graphs
- Select appropriate scales
- Calculate rates from gradients
- Understand the significance of intercepts
- Sketch and recognise graphs
- Use tangent to find gradient at a point

**Biology applications:**
- Enzyme kinetics curves
- Oxygen dissociation curves
- Growth curves
- Action potential traces
- Absorption spectra

### Geometry and Trigonometry
**Skills required:**
- Calculate areas, volumes, surface areas
- Understand ratios and scaling

**Biology applications:**
- Surface area to volume calculations
- Cell size calculations
- Magnification problems

### Statistical Tests

#### Standard Deviation
Formula: s = √[Σ(x - x̄)² / (n-1)]

**Interpretation:**
- Larger SD = more spread in data
- Used to calculate error bars
- Indicates reliability of mean

#### Chi-squared Test (χ²)
Formula: χ² = Σ[(O - E)² / E]

**When to use:**
- Categorical data
- Testing observed vs expected ratios
- Example: Genetic crosses, habitat associations

**Critical values (p = 0.05):**
| df | Critical χ² |
|----|-------------|
| 1  | 3.84        |
| 2  | 5.99        |
| 3  | 7.81        |
| 4  | 9.49        |
| 5  | 11.07       |

**Interpretation:**
- If calculated χ² > critical value: significant difference (reject null hypothesis)
- If calculated χ² < critical value: no significant difference (accept null hypothesis)

#### Student's t-test
Formula: t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)

**When to use:**
- Comparing means of two groups
- Continuous data
- Normally distributed data
- Example: Comparing enzyme activity at two temperatures

**Interpretation:**
- If calculated t > critical value: significant difference between means
- Degrees of freedom = n₁ + n₂ - 2

#### Spearman's Rank Correlation (rs)
Formula: rs = 1 - [6Σd² / n(n²-1)]

**When to use:**
- Testing correlation between two variables
- Continuous data
- Example: Correlation between light intensity and plant distribution

**Interpretation:**
- rs = +1: perfect positive correlation
- rs = -1: perfect negative correlation
- rs = 0: no correlation
- Compare to critical value for significance

### Error Bars and Confidence Intervals
**Standard error of mean (SEM):** SEM = SD / √n
**95% confidence interval:** Mean ± (1.96 × SEM)

**Interpretation:**
- Overlapping error bars suggest no significant difference
- Non-overlapping bars suggest significant difference (approximately)
`;

// ============================================================================
// KEY BIOLOGICAL TERMS AND DEFINITIONS
// ============================================================================

const EDEXCEL_BIOLOGY_KEY_DEFINITIONS = `
## Key Biological Terms and Definitions

### Topic 1: Lifestyle, Health and Risk

| Term | Definition |
|------|------------|
| Atherosclerosis | Build-up of fatty deposits (plaques) in artery walls, leading to narrowing and reduced blood flow |
| Thrombosis | Formation of a blood clot within a blood vessel |
| Coronary heart disease | Atherosclerosis of coronary arteries, reducing blood supply to heart muscle |
| Risk factor | A variable associated with increased probability of developing a disease |
| Correlation | A statistical relationship between two variables |
| Causation | When one variable directly causes a change in another |
| Antioxidant | A substance that prevents oxidation of other molecules |
| LDL (Low-density lipoprotein) | Transports cholesterol from liver to tissues; contributes to atherosclerosis |
| HDL (High-density lipoprotein) | Transports cholesterol from tissues to liver; protective against atherosclerosis |
| Saturated fatty acid | Fatty acid with no C=C double bonds in hydrocarbon chain |
| Unsaturated fatty acid | Fatty acid with one or more C=C double bonds |
| Monounsaturated | Fatty acid with one C=C double bond |
| Polyunsaturated | Fatty acid with multiple C=C double bonds |
| Phospholipid | Lipid molecule with phosphate head (hydrophilic) and fatty acid tails (hydrophobic) |
| Fluid mosaic model | Model describing cell membrane structure with proteins floating in phospholipid bilayer |

### Topic 2: Genes and Health

| Term | Definition |
|------|------------|
| Gene | A sequence of nucleotides on DNA that codes for a polypeptide |
| Allele | An alternative form of a gene |
| Locus | The specific position of a gene on a chromosome |
| Genotype | The genetic makeup of an organism |
| Phenotype | The observable characteristics of an organism |
| Dominant | An allele that is expressed when present in one or two copies |
| Recessive | An allele only expressed when homozygous |
| Homozygous | Having two identical alleles for a gene |
| Heterozygous | Having two different alleles for a gene |
| Codominance | When both alleles are expressed equally in heterozygote |
| Mutation | A change in the nucleotide sequence of DNA |
| Transcription | Synthesis of mRNA from DNA template |
| Translation | Synthesis of polypeptide at ribosome using mRNA |
| Codon | A sequence of three nucleotides coding for one amino acid |
| Anticodon | Complementary triplet on tRNA that base pairs with mRNA codon |
| Facilitated diffusion | Movement of molecules across membrane via protein channels/carriers, down concentration gradient |
| Active transport | Movement of molecules across membrane against concentration gradient, requiring ATP |
| Osmosis | Net movement of water molecules from higher to lower water potential through partially permeable membrane |
| Water potential (Ψ) | The tendency of water to move from one area to another |
| Cystic fibrosis | Genetic disease caused by faulty CFTR protein affecting chloride ion transport |

### Topic 3: Voice of the Genome

| Term | Definition |
|------|------------|
| Cell cycle | Sequence of events between one cell division and the next |
| Interphase | Period of cell cycle where cell grows and DNA replicates |
| Mitosis | Nuclear division producing two genetically identical nuclei |
| Cytokinesis | Division of cytoplasm following nuclear division |
| Meiosis | Cell division producing four genetically different haploid cells |
| Diploid | Cell containing two complete sets of chromosomes (2n) |
| Haploid | Cell containing one set of chromosomes (n) |
| Homologous chromosomes | Chromosome pairs with same genes at same loci, one from each parent |
| Chromatid | One of two identical copies of a replicated chromosome |
| Centromere | Region where sister chromatids are joined |
| Totipotent | Stem cell able to differentiate into any cell type including placenta |
| Pluripotent | Stem cell able to differentiate into most cell types |
| Multipotent | Stem cell able to differentiate into limited range of cell types |
| Differentiation | Process by which a cell becomes specialised for a particular function |
| Apoptosis | Programmed cell death |
| Oncogene | Gene that when mutated/overexpressed can lead to cancer |
| Tumour suppressor gene | Gene that normally prevents uncontrolled cell division |
| Metastasis | Spread of cancer cells from primary tumour to other body sites |

### Topic 4: Biodiversity and Natural Resources

| Term | Definition |
|------|------------|
| Biodiversity | The variety of life in all its forms, levels and combinations |
| Species | A group of organisms that can interbreed to produce fertile offspring |
| Taxonomy | The classification of organisms into groups based on similarities |
| Phylogeny | The evolutionary history and relationships between species |
| Binomial nomenclature | Two-part naming system using genus and species |
| Simpson's Index of Diversity | A measure of biodiversity accounting for species richness and evenness |
| Species richness | The number of different species in an area |
| Species evenness | How equally distributed organisms are among species |
| Endemic | Species found only in one particular geographic area |
| Keystone species | Species that has disproportionately large effect on ecosystem |
| Conservation | Protection and management of species and habitats |
| Sustainable use | Use of resources in a way that meets current needs without compromising future availability |
| Dichotomous key | Identification tool using pairs of contrasting characteristics |
| Chloroplast | Organelle containing chlorophyll where photosynthesis occurs |
| Cellulose | Polysaccharide forming plant cell walls |
| Lignin | Complex polymer providing structural support in plant tissues |
| Xylem | Tissue transporting water and minerals in plants |
| Phloem | Tissue transporting dissolved sugars in plants |

### Topic 5: On the Wild Side

| Term | Definition |
|------|------------|
| Ecosystem | A community of organisms and their physical environment |
| Community | All the populations of different species living in the same area |
| Population | All the organisms of one species living in an area at the same time |
| Habitat | The place where an organism lives |
| Niche | The role of a species within its ecosystem |
| Producer | Organism that synthesises organic molecules from inorganic molecules |
| Consumer | Organism that obtains energy by feeding on other organisms |
| Decomposer | Organism that breaks down dead organic matter |
| Trophic level | Position in a food chain or web |
| Food chain | Linear sequence showing energy transfer between trophic levels |
| Food web | Network of interconnected food chains |
| GPP (Gross Primary Productivity) | Total rate of energy capture by producers in photosynthesis |
| NPP (Net Primary Productivity) | GPP minus energy lost in respiration by producers |
| Photosynthesis | Conversion of light energy to chemical energy in organic molecules |
| Light-dependent reactions | Stage of photosynthesis using light to produce ATP and reduced NADP |
| Calvin cycle | Light-independent stage of photosynthesis fixing CO₂ into organic molecules |
| Photolysis | Splitting of water using light energy |
| Photophosphorylation | Production of ATP using light energy |
| Limiting factor | Factor that limits the rate of a process when in short supply |
| Climate change | Long-term change in global climate patterns |
| Carbon footprint | Total greenhouse gas emissions caused by an activity or product |

### Topic 6: Immunity, Infection and Forensics

| Term | Definition |
|------|------------|
| Pathogen | An organism that causes disease |
| Antigen | A molecule that triggers an immune response |
| Antibody | Y-shaped protein produced by plasma cells that binds to specific antigen |
| B lymphocyte | White blood cell that differentiates into plasma cells and memory cells |
| T lymphocyte | White blood cell involved in cell-mediated immunity |
| Plasma cell | B cell that produces and secretes antibodies |
| Memory cell | Long-lived lymphocyte that provides rapid response on re-exposure to antigen |
| Primary immune response | First response to an antigen; slow and produces few antibodies |
| Secondary immune response | Response on re-exposure; faster and produces more antibodies |
| Active immunity | Immunity from body's own immune response (natural or artificial) |
| Passive immunity | Immunity from antibodies received from another source |
| Vaccination | Introduction of antigen to stimulate immune response without causing disease |
| Herd immunity | Indirect protection when sufficient proportion of population is immune |
| Antibiotic resistance | Ability of bacteria to survive in presence of antibiotics |
| DNA profiling | Technique comparing DNA samples for identification |
| PCR (Polymerase Chain Reaction) | Technique for amplifying small DNA samples |
| Gel electrophoresis | Technique separating DNA fragments by size |
| Forensic entomology | Use of insect evidence in criminal investigations |

### Topic 7: Run for Your Life

| Term | Definition |
|------|------------|
| Aerobic respiration | Release of energy from glucose using oxygen |
| Anaerobic respiration | Release of energy from glucose without oxygen |
| Glycolysis | First stage of respiration; glucose broken down to pyruvate in cytoplasm |
| Link reaction | Conversion of pyruvate to acetyl CoA in mitochondrial matrix |
| Krebs cycle | Cycle of reactions producing reduced coenzymes in mitochondrial matrix |
| Oxidative phosphorylation | Production of ATP using electron transport chain and chemiosmosis |
| Chemiosmosis | Production of ATP driven by proton gradient across membrane |
| ATP synthase | Enzyme that produces ATP using proton flow |
| Electron transport chain | Series of proteins transferring electrons and pumping protons |
| Respiratory quotient (RQ) | Ratio of CO₂ produced to O₂ consumed |
| Oxygen debt | Extra oxygen needed after exercise to remove lactate |
| Lactate | Product of anaerobic respiration in animals |
| Myofibril | Contractile unit within muscle fibre |
| Sarcomere | Functional unit of muscle contraction between Z-lines |
| Actin | Thin filament protein in muscle |
| Myosin | Thick filament protein in muscle with heads that bind actin |
| Tropomyosin | Protein covering actin binding sites at rest |
| Troponin | Protein that moves tropomyosin when calcium binds |
| Sliding filament theory | Model explaining muscle contraction by filaments sliding past each other |
| VO₂ max | Maximum rate of oxygen consumption during exercise |
| Cardiac output | Volume of blood pumped by heart per minute (HR × SV) |
| Stroke volume | Volume of blood pumped by one ventricle per beat |

### Topic 8: Grey Matter

| Term | Definition |
|------|------------|
| Neurone | Cell specialised for transmitting electrical impulses |
| Sensory neurone | Neurone carrying impulses from receptors to CNS |
| Motor neurone | Neurone carrying impulses from CNS to effectors |
| Relay neurone | Neurone connecting sensory and motor neurones in CNS |
| Synapse | Junction between two neurones |
| Neurotransmitter | Chemical released at synapse to transmit signal |
| Acetylcholine | Neurotransmitter at neuromuscular junctions and in brain |
| Resting potential | Potential difference across resting neurone membrane (about -70mV) |
| Action potential | Rapid reversal and restoration of potential difference |
| Depolarisation | Change in membrane potential to less negative/more positive values |
| Repolarisation | Return of membrane potential to resting value |
| Threshold | Minimum stimulus needed to generate action potential |
| All-or-nothing | Action potentials are always same magnitude or don't occur |
| Refractory period | Time during which neurone cannot be stimulated again |
| Saltatory conduction | Action potential jumping between nodes of Ranvier |
| Myelin sheath | Insulating layer around some axons that speeds conduction |
| Summation | Addition of effects of multiple stimuli |
| Reflex arc | Neural pathway controlling involuntary response |
| Brain | Organ of nervous system that coordinates body activities |
| Cerebrum | Largest part of brain; controls conscious thought and voluntary movement |
| Cerebellum | Part of brain controlling coordination and balance |
| Medulla oblongata | Part of brain controlling involuntary functions |
| Hypothalamus | Part of brain controlling homeostasis and hormone release |
| Hormone | Chemical messenger transported in blood to target cells |
| Receptor | Cell or structure that detects stimuli |
| Effector | Muscle or gland that responds to nerve impulses |
| Homeostasis | Maintenance of constant internal environment |
`;

// ============================================================================
// CORE PRACTICAL GUIDANCE (ALL 16 EDEXCEL CORE PRACTICALS)
// ============================================================================

const EDEXCEL_BIOLOGY_CORE_PRACTICALS = `
## Core Practicals - Complete Guidance

### Core Practical 1: Investigate a factor affecting the initial rate of an enzyme-controlled reaction
**Topic:** Topic 1 - Lifestyle, Health and Risk

**Aim:** Investigate how a named factor affects the initial rate of reaction of an enzyme

**Variables:**
- Independent: Temperature / pH / substrate concentration / enzyme concentration
- Dependent: Rate of reaction (usually time taken for colour change or product formation)
- Control: Other factors held constant, volumes, concentrations

**Equipment:**
- Test tubes and rack
- Water baths at different temperatures
- Stopwatch
- Syringes or pipettes for accurate volumes
- Appropriate enzyme and substrate (e.g., amylase and starch, catalase and hydrogen peroxide)

**Method (example: effect of temperature on amylase):**
1. Prepare water baths at different temperatures (e.g., 10°C, 20°C, 30°C, 40°C, 50°C, 60°C)
2. Place tubes containing starch solution and amylase separately in each water bath
3. Allow 5 minutes for temperature equilibration
4. Add amylase to starch and start timer
5. Test for starch at regular intervals using iodine
6. Record time for starch to be digested (no colour change with iodine)
7. Repeat at least 3 times for each temperature

**Safety:**
- Eye protection required
- Take care with hot water baths
- Amylase may cause sensitisation

**Analysis:**
- Calculate rate = 1/time
- Plot graph of rate against temperature
- Calculate Q₁₀ if appropriate
- Identify optimum temperature

**Common errors:**
- Not allowing temperature equilibration
- Inconsistent mixing
- Not standardising starting concentrations

---

### Core Practical 2: Investigate the effect of temperature on membrane permeability
**Topic:** Topic 2 - Genes and Health

**Aim:** Investigate how temperature affects the permeability of beetroot cell membranes

**Variables:**
- Independent: Temperature
- Dependent: Colour intensity of solution (absorbance/transmission)
- Control: Size of beetroot cylinders, volume of water, time in water

**Equipment:**
- Beetroot cylinders (uniform size, washed until no more pigment released)
- Water baths at different temperatures
- Colorimeter with appropriate filter
- Cuvettes
- Stopwatch

**Method:**
1. Cut beetroot into uniform cylinders using cork borer
2. Wash cylinders thoroughly in distilled water until no more pigment released
3. Place cylinders in labelled test tubes with distilled water
4. Heat tubes to different temperatures (e.g., 20°C, 30°C, 40°C, 50°C, 60°C, 70°C)
5. Leave for set time (e.g., 30 minutes)
6. Remove beetroot and measure absorbance of solution using colorimeter

**Safety:**
- Care with hot water
- Sharp cork borer - cut away from body

**Analysis:**
- Plot absorbance against temperature
- Identify temperature at which membrane becomes permeable
- Explain in terms of membrane protein denaturation and phospholipid fluidity

**Expected results:**
- Low absorbance at low temperatures
- Gradual increase as temperature rises
- Sharp increase around 40-50°C when membrane proteins denature

---

### Core Practical 3: Investigate mitosis in root tip squash
**Topic:** Topic 3 - Voice of the Genome

**Aim:** Observe and count cells at different stages of mitosis

**Variables:**
- Independent: Stage of mitosis being counted
- Dependent: Number of cells at each stage
- Control: Same part of root tip used, same staining procedure

**Equipment:**
- Garlic or onion root tips (actively growing)
- Hydrochloric acid (1M)
- Acetic orcein or toluidine blue stain
- Microscope slides and coverslips
- Microscope
- Water bath at 60°C

**Method:**
1. Cut 1cm from growing root tip
2. Place in 1M HCl at 60°C for 5 minutes (to soften cell walls and separate cells)
3. Wash in cold water
4. Place on microscope slide with drop of stain
5. Leave for 5-10 minutes to allow stain uptake
6. Apply coverslip and squash gently
7. Examine under microscope
8. Count cells at each stage of mitosis in field of view

**Safety:**
- Hydrochloric acid is corrosive - wear goggles and gloves
- Stains may cause staining of skin/clothes

**Analysis:**
- Calculate mitotic index = (number of dividing cells / total cells) × 100
- Identify relative duration of each stage based on proportions
- Draw cells at different stages

**Expected results:**
- Most cells in interphase (longest phase)
- Fewer cells in each mitotic stage
- Prophase often most common mitotic stage visible

---

### Core Practical 4: Use of staining to identify plant cell structures
**Topic:** Topic 4 - Biodiversity and Natural Resources

**Aim:** Use appropriate stains to identify plant cell structures

**Equipment:**
- Plant tissue samples (e.g., celery, rhubarb, stems)
- Scalpel or razor blade for thin sections
- Microscope slides and coverslips
- Various stains (iodine, phloroglucinol/HCl, methylene blue, toluidine blue)
- Microscope

**Staining techniques:**
| Stain | Target structure | Colour produced |
|-------|-----------------|-----------------|
| Iodine | Starch | Blue-black |
| Phloroglucinol + HCl | Lignin | Red/pink |
| Toluidine blue | Lignified walls | Blue-green |
| Sudan red | Lipids | Red |
| Methylene blue | Nuclei | Blue |

**Method:**
1. Cut thin transverse sections of plant tissue
2. Mount on microscope slide in water
3. Apply appropriate stain
4. Leave for required time
5. Remove excess stain if necessary
6. Apply coverslip and observe

**Analysis:**
- Draw and label observed structures
- Compare structures in different plant tissues
- Relate structure to function

---

### Core Practical 5: Investigate the effect of exercise on breathing rate or heart rate
**Topic:** Topic 7 - Run for Your Life

**Aim:** Investigate how exercise affects breathing rate and/or heart rate

**Variables:**
- Independent: Level of exercise / time exercising
- Dependent: Heart rate / breathing rate
- Control: Same person, same type of exercise, same recovery time

**Equipment:**
- Stopwatch
- Heart rate monitor (optional)
- Step for step-ups or area for running

**Method:**
1. Measure resting heart rate and breathing rate (count for 15 seconds, multiply by 4)
2. Subject performs standardised exercise (e.g., step-ups for 2 minutes)
3. Immediately measure heart rate and breathing rate
4. Continue measuring at 1-minute intervals during recovery
5. Repeat with different exercise intensities

**Safety:**
- Screen subjects for health conditions
- Allow adequate warm-up
- Stop if subject feels unwell

**Analysis:**
- Plot heart rate/breathing rate against time
- Calculate recovery time
- Compare different exercise intensities
- Explain changes in terms of oxygen demand and cardiac output

---

### Core Practical 6: Investigate the effect of temperature on respiration rate using a respirometer
**Topic:** Topic 7 - Run for Your Life

**Aim:** Measure the effect of temperature on the rate of aerobic respiration

**Equipment:**
- Simple respirometer (syringe with capillary tubing)
- Germinating seeds, small invertebrates, or yeast
- Soda lime or potassium hydroxide (to absorb CO₂)
- Water baths at different temperatures
- Stopwatch
- Coloured liquid for manometer

**Method:**
1. Set up respirometer with organism and soda lime
2. Allow to equilibrate in water bath
3. Record position of coloured liquid
4. Start timer and record movement of liquid at regular intervals
5. Repeat at different temperatures
6. Include control tube with glass beads (no living material)

**Calculations:**
- Volume of O₂ consumed = distance moved × cross-sectional area of tube
- Rate = volume / time
- Calculate Q₁₀

**Safety:**
- Soda lime is corrosive - handle carefully
- Ensure organisms can be maintained humanely

---

### Core Practical 7: Use a light microscope and graticule to measure cell sizes
**Topic:** Topic 3 - Voice of the Genome

**Aim:** Calibrate an eyepiece graticule and measure cell sizes

**Equipment:**
- Microscope with eyepiece graticule
- Stage micrometer
- Prepared slides or fresh material

**Method:**
1. Place stage micrometer on microscope stage
2. Focus on micrometer scale
3. Align eyepiece graticule with stage micrometer
4. Count how many graticule divisions equal a known distance on stage micrometer
5. Calculate the value of one eyepiece division
6. Replace stage micrometer with specimen
7. Measure cells using calibrated graticule

**Calculations:**
- Calibration: 1 eyepiece division = actual size / number of graticule divisions
- Cell size = number of graticule divisions × calibration value

**Example:**
If 40 eyepiece divisions = 400 μm on stage micrometer:
1 eyepiece division = 400/40 = 10 μm

---

### Core Practical 8: Separate photosynthetic pigments by chromatography
**Topic:** Topic 5 - On the Wild Side

**Aim:** Separate and identify photosynthetic pigments

**Equipment:**
- Leaves (e.g., spinach, nettle)
- Pestle and mortar
- Sand
- Propanone (acetone)
- Chromatography paper or TLC plate
- Capillary tube
- Chromatography solvent (e.g., 9:1 petroleum ether:propanone)
- Ruler

**Method:**
1. Grind leaves with sand and propanone
2. Filter to obtain pigment extract
3. Draw pencil line 2 cm from bottom of chromatography paper
4. Apply small concentrated spot of extract using capillary tube
5. Allow to dry and repeat several times
6. Place paper in solvent (level below origin line)
7. Allow to develop until solvent near top
8. Mark solvent front and pigment positions immediately

**Calculations:**
- Rf value = distance travelled by pigment / distance travelled by solvent

**Expected pigments:**
| Pigment | Rf value (approx) | Colour |
|---------|------------------|--------|
| Carotene | 0.95 | Orange-yellow |
| Phaeophytin | 0.83 | Yellow-grey |
| Chlorophyll a | 0.59 | Blue-green |
| Chlorophyll b | 0.42 | Yellow-green |
| Xanthophyll | 0.35 | Yellow |

---

### Core Practical 9: Investigate factors affecting photosynthesis using an aquatic plant
**Topic:** Topic 5 - On the Wild Side

**Aim:** Investigate the effect of a factor on the rate of photosynthesis

**Variables:**
- Independent: Light intensity / CO₂ concentration / temperature
- Dependent: Volume of oxygen produced / number of bubbles per minute
- Control: Other factors held constant

**Equipment:**
- Elodea (Canadian pondweed)
- Sodium hydrogen carbonate solution (0.5%)
- Light source with known intensities or variable distance
- Stopwatch
- Gas syringe or graduated tube for collecting oxygen
- Thermometer

**Method:**
1. Set up Elodea in sodium hydrogen carbonate solution
2. Position light at measured distance from plant
3. Allow 5 minutes for acclimation
4. Count bubbles for 1 minute or collect gas for 5 minutes
5. Repeat at different light intensities (1/d² relationship)
6. Repeat measurements for reliability

**Analysis:**
- Plot rate against light intensity
- Identify limiting factors
- Explain shape of curve in terms of light-dependent reactions

---

### Core Practical 10: Investigate the effect of temperature on growth of microorganisms
**Topic:** Topic 6 - Immunity, Infection and Forensics

**Aim:** Investigate the effect of temperature on bacterial growth

**Equipment:**
- Sterile nutrient broth
- Bacterial culture (safe species, e.g., Lactobacillus)
- Incubators at different temperatures
- Colorimeter or spectrophotometer
- Cuvettes
- Sterile pipettes

**Method:**
1. Inoculate nutrient broth with bacterial culture (same volume each)
2. Incubate at different temperatures (e.g., 10°C, 20°C, 30°C, 40°C)
3. Measure turbidity (absorbance) at regular intervals using colorimeter
4. Include sterile control (uninoculated broth)

**Safety:**
- Use aseptic technique throughout
- Work near Bunsen flame
- Dispose of cultures appropriately
- Do not open plates after incubation

**Analysis:**
- Plot absorbance against time for each temperature
- Compare growth rates
- Identify optimum temperature for growth

---

### Core Practical 11: Investigate the effect of antibiotics or plant extracts on microbial growth
**Topic:** Topic 6 - Immunity, Infection and Forensics

**Aim:** Compare the effectiveness of antimicrobial substances

**Equipment:**
- Nutrient agar plates
- Bacterial culture (safe species)
- Antibiotic discs or plant extracts
- Filter paper discs
- Sterile forceps
- Incubator (25°C maximum in school)
- Ruler

**Method:**
1. Spread bacterial culture evenly on agar plate using sterile spreader
2. Using sterile forceps, place antibiotic/extract discs on agar
3. Space discs evenly around plate
4. Include control disc (sterile water)
5. Tape lid closed (do not seal completely)
6. Incubate upside down at 25°C for 24-48 hours
7. Measure diameter of clear zones (zones of inhibition)

**Calculations:**
- Calculate area of zone = πr²
- Compare areas rather than diameters for valid comparison

**Safety:**
- Aseptic technique essential
- Do not open plates after incubation
- Incubate at 25°C maximum
- Dispose of plates in autoclave or disinfectant

---

### Core Practical 12: Investigate the structure of muscle
**Topic:** Topic 7 - Run for Your Life

**Aim:** Examine the structure of muscle tissue using microscopy

**Equipment:**
- Prepared slides of skeletal muscle (longitudinal and transverse sections)
- Microscope
- Drawing materials

**Observations:**
- Longitudinal section: striations visible, multiple nuclei, sarcomere structure
- Transverse section: myofibrils visible, peripheral nuclei

**Analysis:**
- Draw and label muscle fibres
- Identify: sarcolemma, sarcoplasm, myofibrils, striations, nuclei
- Relate structure to function in contraction

---

### Core Practical 13: Investigate brain structure using images or preserved tissue
**Topic:** Topic 8 - Grey Matter

**Aim:** Identify and understand the function of different brain regions

**Equipment:**
- Model of human brain or images
- Preserved brain tissue (if available)
- Diagrams and MRI scans

**Structures to identify:**
- Cerebrum (frontal, parietal, temporal, occipital lobes)
- Cerebellum
- Medulla oblongata
- Hypothalamus
- Pituitary gland
- Corpus callosum
- Meninges
- Ventricles

**Analysis:**
- Label diagrams of brain sections
- Match structures to functions
- Compare sizes of regions in different mammals

---

### Core Practical 14: Investigate habituation to a stimulus
**Topic:** Topic 8 - Grey Matter

**Aim:** Investigate habituation in an invertebrate

**Equipment:**
- Snails or woodlice
- Fine paintbrush or dropper for stimulus
- Stopwatch
- Recording sheets

**Method:**
1. Apply stimulus (e.g., gentle touch to tentacle of snail, water drop near woodlouse)
2. Record response (e.g., withdrawal of tentacle, movement away)
3. Wait standard time (e.g., 30 seconds)
4. Repeat stimulus
5. Continue until habituation occurs (no response)
6. Record number of stimuli required for habituation
7. Allow recovery time and test for dishabituation

**Analysis:**
- Calculate mean number of stimuli for habituation
- Compare habituation with different stimuli or organisms
- Explain adaptive significance of habituation

**Ethical considerations:**
- Minimise stress to organisms
- Return organisms to suitable environment
- Use minimum number of organisms

---

### Core Practical 15: Investigate the effect of plant hormones on growth
**Topic:** Topic 8 - Grey Matter

**Aim:** Investigate the effect of plant hormones (e.g., auxins, gibberellins) on plant growth

**Equipment:**
- Seeds (e.g., lettuce, cress, barley)
- Solutions of plant hormones at different concentrations
- Control solution (distilled water)
- Cotton wool or filter paper
- Petri dishes
- Ruler

**Method:**
1. Soak seeds in hormone solutions or water (control)
2. Place on moist cotton wool in petri dishes
3. Incubate in dark at constant temperature
4. Measure root/shoot length after set time (e.g., 5 days)
5. Calculate mean lengths for each treatment

**Analysis:**
- Plot graph of growth against hormone concentration
- Identify optimum concentration
- Explain difference between root and shoot responses (if using auxin)

---

### Core Practical 16: Investigate animal responses using choice chambers or other methods
**Topic:** Topic 8 - Grey Matter

**Aim:** Investigate taxis and kinesis in invertebrates

**Equipment:**
- Woodlice or maggots
- Choice chamber with different conditions (light/dark, dry/humid)
- Timer
- Recording sheets

**Method (for humidity preference):**
1. Set up choice chamber with dry and humid sides
2. Place organisms in centre
3. Allow to settle for 2 minutes
4. Count organisms in each section at 30-second intervals for 10 minutes
5. Record results and calculate percentages

**Analysis:**
- Use chi-squared test to determine if distribution is significantly different from random
- Explain results in terms of taxis or kinesis
- Discuss adaptive significance

**Ethical considerations:**
- Handle organisms carefully
- Return to appropriate environment after experiment
- Minimise stress (short experiment duration)
`;

// ============================================================================
// EXTENDED RESPONSE QUESTION GUIDANCE
// ============================================================================

const EDEXCEL_BIOLOGY_EXTENDED_RESPONSE_GUIDANCE = `
## Extended Response Question Guidance

### Types of Extended Response Questions

#### 6-mark questions (Levels-based marking)
- Appear in Papers 1 and 2
- Usually require detailed explanation of a process or concept
- Marked using level descriptors

#### 9-mark questions
- May appear in Paper 3
- Require more detailed treatment
- Often synoptic, linking multiple topics

#### 25-mark synoptic essay (Paper 3 Section C)
- Choice of two essay titles
- Must demonstrate knowledge from across the specification
- Requires structured, coherent argument

### Level Descriptors (6-mark questions)

**Level 3 (5-6 marks):**
- Demonstrates comprehensive knowledge and understanding
- Content is accurate with no significant omissions
- Logical, well-structured answer
- Appropriate use of scientific terminology
- Few, if any, spelling and grammatical errors

**Level 2 (3-4 marks):**
- Demonstrates good knowledge and understanding
- Content is mostly accurate
- Some structure evident
- Generally appropriate use of terminology
- Some spelling and grammatical errors

**Level 1 (1-2 marks):**
- Demonstrates limited knowledge and understanding
- Content has inaccuracies
- Limited structure
- Limited use of terminology
- Significant spelling and grammatical errors

**Level 0 (0 marks):**
- No response or no relevant content

### Strategies for Success

#### Planning your answer:
1. Read the question carefully - identify command word and focus
2. Underline key terms in the question
3. Spend 1-2 minutes planning (brief notes/spider diagram)
4. Decide on logical order of points
5. Consider relevant examples and data

#### Writing your answer:
1. Start with a clear opening statement
2. Use correct scientific terminology
3. Explain mechanisms, not just describe
4. Include relevant examples
5. Link points logically with connectives
6. Conclude by addressing the question directly

#### Common mistakes to avoid:
- Not reading the question carefully
- Writing everything known about a topic without focusing
- Not using correct terminology
- Missing obvious points through rushing
- Not explaining WHY, just stating WHAT
- Poor handwriting that cannot be read

### Example 6-mark Question and Answer

**Question:** Explain how the structure of haemoglobin enables it to carry oxygen efficiently. (6 marks)

**Model Answer (Level 3):**

Haemoglobin is a quaternary protein consisting of four polypeptide chains (two alpha and two beta subunits), each containing a haem group with an iron(II) ion at its centre. This structure is essential for efficient oxygen transport.

The iron(II) ion in each haem group can reversibly bind one oxygen molecule, meaning each haemoglobin molecule can carry four oxygen molecules. This high capacity ensures maximum oxygen transport per molecule.

The quaternary structure of haemoglobin enables cooperative binding. When the first oxygen molecule binds, it causes a conformational change in the protein structure, making it easier for subsequent oxygen molecules to bind. This is reflected in the sigmoidal shape of the oxygen dissociation curve.

At the lungs where partial pressure of oxygen is high, haemoglobin has high affinity and becomes fully saturated. At respiring tissues where partial pressure is lower and carbon dioxide concentration is higher, haemoglobin releases oxygen due to the Bohr effect (reduced affinity in presence of CO₂/low pH).

This combination of cooperative binding and the Bohr effect ensures efficient loading at the lungs and efficient unloading at tissues, optimising oxygen delivery to cells for aerobic respiration.

**Why this scores Level 3:**
- Comprehensive coverage of structure (quaternary, haem, iron)
- Clear explanation of how structure enables function
- Includes cooperative binding and Bohr effect
- Uses correct terminology throughout
- Logical structure with clear links between points
- Addresses "efficiently" aspect of question

### Synoptic Essay Guidance (25 marks)

**Structure recommended:**
1. Introduction (1-2 paragraphs): Define key terms, outline scope of essay
2. Main body (4-6 paragraphs): Develop arguments with examples from across specification
3. Conclusion (1 paragraph): Summarise and evaluate

**Key requirements:**
- Draw on knowledge from multiple topics
- Show how concepts link together
- Use specific, detailed examples
- Demonstrate understanding of underlying principles
- Write in continuous prose (not bullet points)
- Use appropriate scientific vocabulary

**Mark allocation:**
- Scientific content: up to 20 marks
- Quality of written communication: up to 5 marks

**Example essay titles:**
- "The importance of water in biology"
- "How organisms are adapted for efficient exchange"
- "The role of proteins in living organisms"
- "How DNA determines the features of organisms"
- "The importance of shapes fitting together in biology"
- "How organisms respond to changes in their environment"
`;

// ============================================================================
// SYNOPTIC LINKS BETWEEN TOPICS
// ============================================================================

const EDEXCEL_BIOLOGY_SYNOPTIC_LINKS = `
## Synoptic Links Between Topics

### Cross-Topic Connections

#### Proteins (Links Topics 1-8)
- Topic 1: Enzymes in digestion, collagen in artery walls
- Topic 2: CFTR protein, antibodies, enzyme structure
- Topic 3: Cyclins and kinases in cell cycle
- Topic 4: Cellulose synthase, enzymatic digestion in ruminants
- Topic 5: Photosynthetic proteins (RuBisCO, ATP synthase)
- Topic 6: Antibodies, antigens, enzymes in forensics
- Topic 7: Actin, myosin, respiratory enzymes
- Topic 8: Receptors, neurotransmitters, ion channels

#### Cell Membrane (Links Topics 1-8)
- Topic 1: Cholesterol in membranes, atherosclerosis
- Topic 2: CFTR chloride channel, facilitated diffusion, osmosis
- Topic 3: Cell signalling in development
- Topic 4: Plant cell membrane and transport
- Topic 5: Thylakoid membranes in photosynthesis
- Topic 6: Pathogen entry, immune cell recognition
- Topic 7: Mitochondrial membranes, sarcolemma
- Topic 8: Neurone membrane and action potentials

#### DNA and Genes (Links Topics 2, 3, 4, 6)
- Topic 2: DNA structure, replication, protein synthesis, mutations
- Topic 3: Cell cycle, mitosis, meiosis, gene expression
- Topic 4: Classification based on DNA, genetic diversity
- Topic 6: DNA profiling, PCR, inheritance of immunity genes

#### Energy and ATP (Links Topics 5, 7)
- Topic 5: ATP production in photosynthesis
- Topic 7: ATP production in respiration
- Both: Chemiosmosis, electron transport, oxidative phosphorylation

#### Transport Systems (Links Topics 1, 2, 4, 5, 7)
- Topic 1: Cardiovascular system, blood
- Topic 2: Transport across membranes
- Topic 4: Xylem and phloem in plants
- Topic 5: Carbon cycle, nutrient cycles
- Topic 7: Oxygen transport, cardiac output

#### Homeostasis (Links Topics 7, 8)
- Topic 7: Temperature regulation, blood glucose
- Topic 8: Nervous control, hormonal control, negative feedback

### Example Synoptic Questions

**Question 1:** (Links Topics 2, 7, 8)
"Describe how the structure of ATP is related to its role in biological processes, with reference to respiration, photosynthesis, and muscle contraction."

**Question 2:** (Links Topics 1, 2, 7)
"Explain how understanding of membrane structure has led to treatments for genetic diseases such as cystic fibrosis."

**Question 3:** (Links Topics 3, 4, 6)
"Discuss how DNA technology is used in conservation and forensic science."

**Question 4:** (Links Topics 5, 7)
"Compare and contrast the processes occurring in the inner mitochondrial membrane and the thylakoid membrane."

**Question 5:** (Links Topics 1, 7, 8)
"Explain how the cardiovascular, respiratory and nervous systems work together during exercise."

### Making Synoptic Links

**Strategy for identifying links:**
1. Identify the main concept in the question
2. Think about where else this concept appears in the specification
3. Consider underlying principles (e.g., surface area, diffusion, enzyme function)
4. Link specific examples from different topics
5. Explain WHY the concepts are connected

**Common themes that link topics:**
- Structure and function relationships
- Surface area to volume ratio
- Exchange surfaces
- Transport mechanisms
- Enzyme function
- Protein structure
- Genetic control
- Homeostasis and feedback
- Evolution and adaptation
`;

// ============================================================================
// FULLY WORKED EXAMPLE QUESTIONS WITH COMPLETE MARK SCHEMES
// ============================================================================

const EDEXCEL_BIOLOGY_WORKED_QUESTIONS = `
## Fully Worked Example Questions with Mark Schemes

### TOPIC 1: LIFESTYLE, HEALTH AND RISK

---

#### Question 1 (3 marks)
**The diagram shows the structure of a phospholipid molecule.**

Describe how the structure of a phospholipid relates to its function in cell membranes. (3 marks)

**Mark Scheme:**
1. Phosphate/head is hydrophilic (1 mark)
2. Fatty acid tails are hydrophobic (1 mark)
3. Forms bilayer with hydrophobic core / heads face water, tails face inwards (1 mark)

**Model Answer:**
The phospholipid has a hydrophilic phosphate head which is attracted to water, and two hydrophobic fatty acid tails which are repelled by water. This allows phospholipids to form a bilayer in cell membranes, with the hydrophilic heads facing the aqueous environment on both sides and the hydrophobic tails facing inwards, creating a barrier that prevents water-soluble substances passing through.

---

#### Question 2 (4 marks)
**Atherosclerosis is a condition that can lead to cardiovascular disease.**

Describe the process of atherosclerosis and explain how it can lead to a heart attack. (4 marks)

**Mark Scheme:**
1. Damage to endothelium / artery wall (1 mark)
2. Inflammatory response / white blood cells accumulate (1 mark)
3. Build-up of fatty deposits / cholesterol / plaque / atheroma (1 mark)
4. Narrowing of artery / reduced blood flow / reference to coronary artery (1 mark)
5. Blood clot / thrombus may form (1 mark)
6. Blocks coronary artery / cardiac muscle deprived of oxygen (1 mark)
Max 4 marks

**Model Answer:**
Atherosclerosis begins when the endothelium of an artery is damaged, perhaps by high blood pressure. This triggers an inflammatory response, and white blood cells accumulate at the site. Cholesterol and other fatty materials are deposited under the endothelium, forming an atheroma or plaque. This causes the artery to narrow, reducing blood flow. A blood clot (thrombus) may form on the damaged area. If this occurs in a coronary artery, the blood supply to the heart muscle is blocked, depriving the cardiac muscle of oxygen, leading to a heart attack (myocardial infarction).

---

#### Question 3 (5 marks)
**A study investigated the relationship between saturated fat intake and incidence of cardiovascular disease (CVD) in different populations.**

The data showed a positive correlation between saturated fat intake and CVD.

(a) Explain why this data does not prove that saturated fat causes CVD. (2 marks)

**Mark Scheme:**
1. Correlation does not prove causation (1 mark)
2. Other variables / confounding factors not controlled / examples such as exercise, genetics, stress (1 mark)

(b) Describe one piece of evidence that would strengthen the claim that saturated fat causes CVD. (3 marks)

**Mark Scheme:**
1. Controlled experiment / intervention study (1 mark)
2. Two groups: one with reduced saturated fat, one control (1 mark)
3. Measure CVD incidence over time / compare outcomes (1 mark)

OR

1. Biological mechanism explained (1 mark)
2. Saturated fat increases LDL cholesterol (1 mark)
3. LDL contributes to atherosclerosis (1 mark)

---

### TOPIC 2: GENES AND HEALTH

---

#### Question 4 (6 marks)
**Cystic fibrosis is caused by a mutation in the CFTR gene.**

Describe how a mutation in the CFTR gene leads to the symptoms of cystic fibrosis. (6 marks)

**Mark Scheme:**
1. CFTR gene codes for a chloride ion channel protein (1 mark)
2. Mutation causes faulty/non-functional protein (1 mark)
3. Chloride ions cannot move out of cells (1 mark)
4. Less water moves out by osmosis (1 mark)
5. Mucus becomes thick and sticky (1 mark)
6. Mucus accumulates in lungs/airways/reference to other affected organs (1 mark)
7. Increased risk of infection/difficulty breathing/other symptoms (1 mark)
Max 6 marks

**Model Answer (Level 3):**
The CFTR gene codes for a chloride ion channel protein found in the cell membrane of epithelial cells. A mutation in this gene, most commonly the deletion of three bases causing loss of phenylalanine at position 508, results in a misfolded protein that is not transported to the cell membrane.

Without functional CFTR channels, chloride ions cannot be transported out of the epithelial cells. This means water does not follow by osmosis, as it normally would to balance the ion concentration. Consequently, the mucus produced in the airways, digestive system, and reproductive tract becomes abnormally thick and sticky.

In the lungs, this thick mucus accumulates and cannot be cleared effectively by cilia. This provides an ideal environment for bacterial growth, leading to repeated chest infections. The thick mucus also blocks the pancreatic duct, preventing digestive enzymes from reaching the small intestine and causing malabsorption of nutrients.

---

#### Question 5 (4 marks)
**The table shows part of the genetic code.**

| Codon | Amino acid |
|-------|------------|
| UUU | Phenylalanine |
| UUC | Phenylalanine |
| UCU | Serine |
| UAU | Tyrosine |
| UAA | Stop |

A section of mRNA has the sequence: 5' - AUG UUU UCU UAU UAA - 3'

(a) What is meant by the term 'degenerate' when referring to the genetic code? Use evidence from the table. (2 marks)

**Mark Scheme:**
1. More than one codon codes for the same amino acid (1 mark)
2. UUU and UUC both code for phenylalanine / reference to specific example from table (1 mark)

(b) How many amino acids would be in the polypeptide coded by this mRNA sequence? Explain your answer. (2 marks)

**Mark Scheme:**
1. Four amino acids (1 mark)
2. AUG is start codon / UAA is stop codon so translation stops / five codons but one is stop (1 mark)

---

#### Question 6 (5 marks)
**Describe the process of translation.** (5 marks)

**Mark Scheme:**
1. mRNA attaches to ribosome (1 mark)
2. Codon on mRNA exposed / ribosome reads codons (1 mark)
3. tRNA with complementary anticodon brings amino acid (1 mark)
4. Peptide bond forms between amino acids (1 mark)
5. Ribosome moves along mRNA / reads next codon (1 mark)
6. Process continues until stop codon reached (1 mark)
7. Polypeptide released (1 mark)
Max 5 marks

**Model Answer:**
Translation begins when mRNA binds to a ribosome in the cytoplasm. The ribosome exposes the first codon (AUG, the start codon) on the mRNA. A tRNA molecule with the complementary anticodon (UAC) and carrying the amino acid methionine binds to this codon through complementary base pairing.

The ribosome then moves along the mRNA to expose the next codon. Another tRNA with the complementary anticodon brings the appropriate amino acid, and a peptide bond forms between the two amino acids. This process continues, with the ribosome moving along the mRNA, reading each codon in turn, and tRNA molecules bringing the correct amino acids.

When a stop codon (UAA, UAG, or UGA) is reached, no tRNA can bind, and the completed polypeptide is released from the ribosome.

---

### TOPIC 3: VOICE OF THE GENOME

---

#### Question 7 (6 marks)
**Compare the processes of mitosis and meiosis.** (6 marks)

**Mark Scheme:**

| Feature | Mitosis | Meiosis |
|---------|---------|---------|
| Number of divisions | One | Two (1 mark for comparison) |
| Daughter cells | Two | Four (1 mark for comparison) |
| Chromosome number | Diploid/same as parent | Haploid/half parent (1 mark for comparison) |
| Genetic variation | None/identical to parent | Yes/crossing over/independent assortment (1 mark for comparison) |
| Where occurs | Body cells/somatic | Reproductive cells/gonads (1 mark for comparison) |
| Function | Growth/repair/asexual reproduction | Gamete production (1 mark for comparison) |

Max 6 marks (must compare - not just list)

**Model Answer:**
Both mitosis and meiosis are types of nuclear division that begin with DNA replication during interphase. However, they differ in several key ways.

Mitosis involves one division, producing two daughter cells, while meiosis involves two divisions (meiosis I and meiosis II), producing four daughter cells. The daughter cells from mitosis are diploid (2n) and genetically identical to the parent cell, whereas the daughter cells from meiosis are haploid (n) and genetically different from each other and the parent.

Genetic variation in meiosis arises from crossing over during prophase I, where homologous chromosomes exchange segments, and from independent assortment during metaphase I, where homologous pairs align randomly. Mitosis produces no genetic variation.

Mitosis occurs in somatic (body) cells for growth, repair, and asexual reproduction. Meiosis occurs only in reproductive organs to produce gametes for sexual reproduction.

---

#### Question 8 (4 marks)
**The table shows the results of a root tip squash experiment.**

| Stage | Number of cells |
|-------|----------------|
| Interphase | 180 |
| Prophase | 12 |
| Metaphase | 4 |
| Anaphase | 2 |
| Telophase | 2 |
| Total | 200 |

(a) Calculate the mitotic index. Show your working. (2 marks)

**Mark Scheme:**
1. Correct addition of mitotic stages: 12 + 4 + 2 + 2 = 20 (1 mark)
2. Mitotic index = 20/200 × 100 = 10% OR 20/200 = 0.1 (1 mark)

(b) Explain why the majority of cells are in interphase. (2 marks)

**Mark Scheme:**
1. Interphase is the longest phase / takes most time (1 mark)
2. DNA replication / cell growth / organelle replication takes time (1 mark)

---

#### Question 9 (5 marks)
**Stem cells have potential applications in medicine.**

Discuss the advantages and disadvantages of using embryonic stem cells in medical treatments. (5 marks)

**Mark Scheme:**

Advantages:
1. Pluripotent / can differentiate into many cell types (1 mark)
2. Could treat conditions like Parkinson's, diabetes, spinal injuries (1 mark)
3. Could grow replacement tissues/organs (1 mark)

Disadvantages:
1. Ethical concerns / embryo is destroyed (1 mark)
2. Risk of rejection / need immunosuppressants (1 mark)
3. Risk of forming tumours (1 mark)
4. Technical difficulties in controlling differentiation (1 mark)

Max 5 marks

---

### TOPIC 4: BIODIVERSITY AND NATURAL RESOURCES

---

#### Question 10 (4 marks)
**A student sampled two meadows using random quadrats. The results are shown below.**

Meadow A: Species X = 40, Species Y = 35, Species Z = 25
Meadow B: Species X = 90, Species Y = 8, Species Z = 2

Calculate Simpson's Index of Diversity for each meadow and comment on the results. (4 marks)

**Mark Scheme:**

Meadow A:
N = 100
D = 1 - [(40/100)² + (35/100)² + (25/100)²]
D = 1 - [0.16 + 0.1225 + 0.0625]
D = 1 - 0.345 = **0.655** (1 mark)

Meadow B:
N = 100
D = 1 - [(90/100)² + (8/100)² + (2/100)²]
D = 1 - [0.81 + 0.0064 + 0.0004]
D = 1 - 0.8168 = **0.183** (1 mark)

Comment:
Meadow A has higher diversity (1 mark)
Because species are more evenly distributed / Meadow B dominated by one species (1 mark)

---

#### Question 11 (5 marks)
**Explain how binomial nomenclature and the hierarchical classification system help scientists to classify organisms.** (5 marks)

**Mark Scheme:**
1. Binomial gives unique two-part name / genus and species (1 mark)
2. Internationally recognised / avoids confusion with common names (1 mark)
3. Hierarchical system groups organisms by shared characteristics (1 mark)
4. Shows evolutionary relationships / phylogeny (1 mark)
5. Reference to taxonomic groups (Kingdom, Phylum, Class, etc.) (1 mark)
6. Based on structural/DNA/molecular similarities (1 mark)
Max 5 marks

---

### TOPIC 5: ON THE WILD SIDE

---

#### Question 12 (6 marks)
**Describe the light-dependent reactions of photosynthesis.** (6 marks)

**Mark Scheme:**
1. Takes place in thylakoid membranes (1 mark)
2. Light absorbed by chlorophyll / photosystems (1 mark)
3. Electrons excited / raised to higher energy level (1 mark)
4. Photolysis of water / water split (1 mark)
5. Produces oxygen / protons / electrons (1 mark)
6. Electrons pass along electron transport chain (1 mark)
7. Protons pumped into thylakoid space / chemiosmosis (1 mark)
8. ATP produced by ATP synthase (1 mark)
9. NADP reduced to reduced NADP (1 mark)
Max 6 marks

**Model Answer (Level 3):**
The light-dependent reactions occur on the thylakoid membranes inside chloroplasts. Light energy is absorbed by chlorophyll molecules in photosystem II, causing electrons to become excited and raised to a higher energy level.

These high-energy electrons are passed along an electron transport chain, a series of electron carriers. As they pass along, they release energy which is used to pump protons (H⁺) from the stroma into the thylakoid space, creating a proton gradient.

Meanwhile, water molecules are split in the process of photolysis: 2H₂O → 4H⁺ + 4e⁻ + O₂. This replaces the electrons lost from chlorophyll and releases oxygen as a by-product.

The proton gradient drives protons back through ATP synthase enzymes by chemiosmosis, producing ATP. At photosystem I, light energy excites more electrons, which are used to reduce NADP to reduced NADP (NADPH), using protons from the photolysis of water.

The products ATP and reduced NADP are used in the light-independent reactions (Calvin cycle).

---

#### Question 13 (5 marks)
**The diagram shows energy flow through an ecosystem.**

GPP of producers = 50,000 kJ m⁻² year⁻¹
Respiration by producers = 30,000 kJ m⁻² year⁻¹
Energy transferred to primary consumers = 4,000 kJ m⁻² year⁻¹

(a) Calculate the NPP of the producers. (1 mark)

**Mark Scheme:**
NPP = GPP - R = 50,000 - 30,000 = **20,000 kJ m⁻² year⁻¹** (1 mark)

(b) Calculate the percentage efficiency of energy transfer from producers to primary consumers. Show your working. (2 marks)

**Mark Scheme:**
Efficiency = (Energy to consumers / NPP) × 100 (1 mark)
= (4,000 / 20,000) × 100 = **20%** (1 mark)

(c) Explain why energy transfer between trophic levels is inefficient. (2 marks)

**Mark Scheme:**
1. Not all biomass eaten / parts inedible / remains as waste (1 mark)
2. Energy lost as heat / in respiration (1 mark)
3. Energy lost in excretion / faeces / uneaten material (1 mark)
Max 2 marks

---

#### Question 14 (4 marks)
**Explain how climate change could affect the distribution of a named species.** (4 marks)

**Mark Scheme:**
1. Named species given (1 mark)
2. Temperature change / specific climate factor (1 mark)
3. Effect on species distribution (northward/upward migration) (1 mark)
4. Mechanism explained (e.g., temperature tolerance, food availability) (1 mark)
5. Reference to adaptation or extinction if cannot move (1 mark)
Max 4 marks

**Example Answer:**
The comma butterfly (Polygonia c-album) has expanded its range northward in the UK due to climate change. Rising temperatures mean that previously unsuitable habitats in northern England and Scotland are now warm enough for the butterfly to survive and reproduce. The larvae can now complete development before autumn, and adults can survive milder winters. This represents a range shift of approximately 200km northward over the past 30 years.

---

### TOPIC 6: IMMUNITY, INFECTION AND FORENSICS

---

#### Question 15 (6 marks)
**Describe the role of B lymphocytes in the immune response to a bacterial infection.** (6 marks)

**Mark Scheme:**
1. B cells have specific antibody receptors on surface (1 mark)
2. B cell binds to specific antigen on pathogen (1 mark)
3. B cell activated / clonal selection (1 mark)
4. B cell divides by mitosis / clonal expansion (1 mark)
5. Differentiates into plasma cells and memory cells (1 mark)
6. Plasma cells produce/secrete antibodies (1 mark)
7. Antibodies bind to antigens / agglutinate bacteria (1 mark)
8. Memory cells remain for secondary response (1 mark)
Max 6 marks

**Model Answer (Level 3):**
B lymphocytes are white blood cells that play a crucial role in the humoral immune response. Each B cell has specific antibody receptors on its surface that can recognise and bind to a particular antigen.

When a bacterial pathogen enters the body, a B cell with complementary receptors binds to the bacterial antigen. This activates the B cell in a process called clonal selection. The activated B cell then undergoes rapid mitotic division (clonal expansion), producing many identical copies.

These clones differentiate into two types of cells: plasma cells and memory cells. Plasma cells are short-lived cells that produce and secrete large quantities of specific antibodies. These antibodies circulate in the blood and bind to the antigens on the bacteria, marking them for destruction by phagocytes and causing agglutination (clumping) which prevents the bacteria spreading.

Memory cells are long-lived and remain in the body after the infection is cleared. If the same pathogen is encountered again, memory cells can rapidly divide and differentiate into plasma cells, providing a faster and stronger secondary immune response.

---

#### Question 16 (4 marks)
**PCR (Polymerase Chain Reaction) is used in DNA profiling.**

Describe how PCR amplifies a sample of DNA. (4 marks)

**Mark Scheme:**
1. DNA heated to 95°C to denature / separate strands (1 mark)
2. Cooled to 55°C for primers to anneal / attach (1 mark)
3. Heated to 72°C for DNA polymerase / Taq polymerase to work (1 mark)
4. Free nucleotides added / complementary base pairing (1 mark)
5. Process repeated / cycles (1 mark)
6. Exponential amplification / millions of copies (1 mark)
Max 4 marks

---

#### Question 17 (5 marks)
**Explain how forensic entomology can be used to estimate time of death.** (5 marks)

**Mark Scheme:**
1. Insects colonise bodies in predictable sequence / succession (1 mark)
2. Blowflies typically arrive first (1 mark)
3. Life cycle stages (egg, larva, pupa, adult) have known durations (1 mark)
4. Stage of development indicates time since colonisation (1 mark)
5. Temperature affects development rate (1 mark)
6. Accumulated degree hours/days used for calculation (1 mark)
7. Species succession can indicate longer time periods (1 mark)
Max 5 marks

---

### TOPIC 7: RUN FOR YOUR LIFE

---

#### Question 18 (6 marks)
**Describe the process of aerobic respiration.** (6 marks)

**Mark Scheme:**
1. Glycolysis in cytoplasm (1 mark)
2. Glucose converted to pyruvate (1 mark)
3. Net gain of 2 ATP in glycolysis (1 mark)
4. Link reaction converts pyruvate to acetyl CoA in matrix (1 mark)
5. Krebs cycle in mitochondrial matrix (1 mark)
6. Produces reduced NAD/FAD and ATP (1 mark)
7. Oxidative phosphorylation on inner membrane (1 mark)
8. Electron transport chain / chemiosmosis (1 mark)
9. Oxygen final electron acceptor / combines with H to form water (1 mark)
10. Total ~38 ATP per glucose (1 mark)
Max 6 marks

**Model Answer (Level 3):**
Aerobic respiration occurs in four stages: glycolysis, the link reaction, the Krebs cycle, and oxidative phosphorylation.

Glycolysis takes place in the cytoplasm, where glucose (6C) is converted into two molecules of pyruvate (3C). This process involves phosphorylation using 2 ATP, followed by oxidation which produces 2 reduced NAD. There is a net gain of 2 ATP from substrate-level phosphorylation.

In the presence of oxygen, pyruvate enters the mitochondrial matrix where the link reaction occurs. Pyruvate is decarboxylated (losing CO₂) and combined with coenzyme A to form acetyl CoA (2C), producing another reduced NAD.

Acetyl CoA enters the Krebs cycle, combining with oxaloacetate (4C) to form citrate (6C). Through a series of reactions, citrate is converted back to oxaloacetate, releasing 2 CO₂ and producing 3 reduced NAD, 1 reduced FAD, and 1 ATP per turn (the cycle turns twice per glucose).

Finally, oxidative phosphorylation occurs on the inner mitochondrial membrane. Electrons from reduced NAD and FAD pass along the electron transport chain, releasing energy to pump protons into the intermembrane space. Protons flow back through ATP synthase, driving ATP synthesis. Oxygen acts as the final electron acceptor, combining with protons to form water. This stage produces approximately 34 ATP, giving a total of about 38 ATP per glucose molecule.

---

#### Question 19 (4 marks)
**The table shows data from a respirometer experiment.**

| Organism | O₂ consumed (cm³) | CO₂ produced (cm³) |
|----------|-------------------|-------------------|
| A | 100 | 100 |
| B | 100 | 70 |
| C | 100 | 85 |

(a) Calculate the respiratory quotient (RQ) for each organism. (2 marks)

**Mark Scheme:**
Organism A: RQ = 100/100 = **1.0** (1 mark)
Organism B: RQ = 70/100 = **0.7** (1 mark)
Organism C: RQ = 85/100 = **0.85** (must be shown for full marks)

(b) What substrate is each organism likely to be respiring? Explain your answer for organism B. (2 marks)

**Mark Scheme:**
1. A = carbohydrate, B = lipid, C = protein/mixture (1 mark)
2. Lipids require more oxygen for complete oxidation / have more hydrogen relative to oxygen (1 mark)

---

#### Question 20 (5 marks)
**Describe the sliding filament theory of muscle contraction.** (5 marks)

**Mark Scheme:**
1. Calcium ions released from sarcoplasmic reticulum (1 mark)
2. Calcium binds to troponin (1 mark)
3. Tropomyosin moves to expose binding sites on actin (1 mark)
4. Myosin heads attach to actin forming cross-bridges (1 mark)
5. Myosin heads pivot / power stroke / pull actin (1 mark)
6. ATP required for myosin to detach (1 mark)
7. Process repeats / ratchet mechanism (1 mark)
8. Sarcomere shortens / Z-lines move closer (1 mark)
Max 5 marks

---

### TOPIC 8: GREY MATTER

---

#### Question 21 (6 marks)
**Describe how an action potential is generated and transmitted along a neurone.** (6 marks)

**Mark Scheme:**
1. Stimulus causes sodium ion channels to open (1 mark)
2. Sodium ions enter / depolarisation (1 mark)
3. If threshold reached (-55mV), action potential generated (1 mark)
4. Voltage-gated sodium channels open / rapid influx of Na⁺ (1 mark)
5. Membrane potential reaches +40mV (1 mark)
6. Sodium channels close / potassium channels open (1 mark)
7. Potassium ions leave / repolarisation (1 mark)
8. Hyperpolarisation / below resting potential (1 mark)
9. Sodium-potassium pump restores resting potential (1 mark)
10. Local currents depolarise adjacent membrane (1 mark)
Max 6 marks

**Model Answer (Level 3):**
At rest, a neurone has a resting potential of approximately -70mV due to the unequal distribution of ions, maintained by the sodium-potassium pump.

When a stimulus is received, sodium ion channels open, allowing Na⁺ to enter the cell. If this depolarisation reaches the threshold potential of about -55mV, voltage-gated sodium channels open rapidly, causing a massive influx of sodium ions. This causes rapid depolarisation, with the membrane potential reaching approximately +40mV.

The voltage-gated sodium channels then close and become temporarily inactivated (refractory period), while voltage-gated potassium channels open. Potassium ions rush out of the cell, causing repolarisation. There is often a brief hyperpolarisation where the membrane potential goes below resting potential, before the sodium-potassium pump restores the normal resting potential.

The action potential is propagated along the axon by local currents. The depolarised region causes current to flow to adjacent regions, depolarising them and triggering action potentials there. The refractory period ensures the action potential travels in one direction only.

In myelinated neurones, action potentials jump between nodes of Ranvier in saltatory conduction, which is much faster than continuous conduction in unmyelinated axons.

---

#### Question 22 (4 marks)
**The graph shows the effect of increasing stimulus intensity on a neurone.**

Explain why increasing the stimulus intensity above threshold does not increase the size of the action potential but does increase the frequency of action potentials. (4 marks)

**Mark Scheme:**
1. Action potentials are all-or-nothing (1 mark)
2. Once threshold reached, maximum depolarisation occurs / all Na⁺ channels open (1 mark)
3. Stronger stimulus depolarises more rapidly / threshold reached sooner (1 mark)
4. More action potentials generated per second / higher frequency (1 mark)
5. Refractory period limits maximum frequency (1 mark)
Max 4 marks

---

#### Question 23 (5 marks)
**Describe synaptic transmission at a cholinergic synapse.** (5 marks)

**Mark Scheme:**
1. Action potential arrives at presynaptic membrane (1 mark)
2. Calcium channels open / Ca²⁺ enters (1 mark)
3. Vesicles fuse with presynaptic membrane (1 mark)
4. Acetylcholine released into synaptic cleft (1 mark)
5. ACh binds to receptors on postsynaptic membrane (1 mark)
6. Sodium channels open / depolarisation of postsynaptic membrane (1 mark)
7. ACh broken down by acetylcholinesterase (1 mark)
8. Choline recycled / reuptake (1 mark)
Max 5 marks

---

#### Question 24 (6 marks)
**Explain how the structure of the eye enables focusing on objects at different distances.** (6 marks)

**Mark Scheme:**
1. Light refracted by cornea (1 mark)
2. Fine focusing by lens / changes shape (1 mark)
3. Ciliary muscles control lens shape (1 mark)
4. For distant objects: ciliary muscles relax (1 mark)
5. Suspensory ligaments taut / lens thin/flat (1 mark)
6. For near objects: ciliary muscles contract (1 mark)
7. Suspensory ligaments slack / lens rounded/fat (1 mark)
8. This process called accommodation (1 mark)
Max 6 marks

---

#### Question 25 (4 marks)
**A student investigated habituation in snails by gently touching their tentacles.**

The results are shown in the table.

| Trial number | Response time (s) |
|--------------|------------------|
| 1 | 0.5 |
| 5 | 0.8 |
| 10 | 1.5 |
| 15 | No response |

(a) Explain what is happening at the synapse to cause habituation. (2 marks)

**Mark Scheme:**
1. Less neurotransmitter released with repeated stimulation (1 mark)
2. Fewer calcium ions enter presynaptic neurone / calcium channels less responsive (1 mark)

(b) Suggest the adaptive advantage of habituation. (2 marks)

**Mark Scheme:**
1. Saves energy / conserves resources (1 mark)
2. Allows focus on novel/important stimuli / ignore harmless stimuli (1 mark)

---

### SYNOPTIC QUESTIONS (Paper 3 style)

---

#### Question 26 (9 marks)
**Proteins have many important roles in living organisms.**

Describe the roles of proteins in the cell membrane and in enzyme-catalysed reactions. (9 marks)

**Mark Scheme:**

Cell membrane proteins (max 5):
1. Channel proteins allow ions/water-soluble molecules through (1 mark)
2. Carrier proteins for facilitated diffusion (1 mark)
3. Carrier proteins for active transport / require ATP (1 mark)
4. Receptor proteins for cell signalling (1 mark)
5. Glycoproteins for cell recognition (1 mark)
6. Enzymes for metabolic reactions (1 mark)

Enzymes (max 5):
1. Biological catalysts / speed up reactions (1 mark)
2. Lower activation energy (1 mark)
3. Have specific active site (1 mark)
4. Complementary to substrate shape (1 mark)
5. Induced fit model / active site changes shape (1 mark)
6. Form enzyme-substrate complex (1 mark)
7. Affected by temperature, pH, concentration (1 mark)

Quality of extended response (up to 2 marks for linking/structure)

---

#### Question 27 (6 marks)
**The importance of shapes fitting together in biology.**

Explain how the concept of complementary shapes is important in enzyme action and the immune response. (6 marks)

**Mark Scheme:**

Enzymes:
1. Active site has specific shape (1 mark)
2. Complementary to substrate shape (1 mark)
3. Only specific substrate can bind / specificity (1 mark)
4. Enzyme-substrate complex forms (1 mark)

Immune response:
1. Antibody has specific binding site / variable region (1 mark)
2. Complementary to specific antigen shape (1 mark)
3. Only binds to that antigen / specificity (1 mark)
4. Neutralises / agglutinates pathogen (1 mark)

Max 6 marks with at least 2 from each section

---

#### Question 28 (6 marks)
**Compare and contrast the electron transport chains in photosynthesis and respiration.** (6 marks)

**Mark Scheme:**

Similarities:
1. Both involve series of electron carriers (1 mark)
2. Both use chemiosmosis / proton gradient to make ATP (1 mark)
3. Both involve ATP synthase (1 mark)

Differences:
| Photosynthesis | Respiration |
|----------------|-------------|
| Thylakoid membrane | Inner mitochondrial membrane (1 mark) |
| Light provides energy | Chemical energy from reduced NAD/FAD (1 mark) |
| Final acceptor is NADP | Final acceptor is oxygen (1 mark) |
| Protons pumped into thylakoid space | Protons pumped into intermembrane space (1 mark) |
| Produces reduced NADP | Produces water (1 mark) |

Max 6 marks

---

### EXTENDED RESPONSE QUESTIONS

---

#### Question 29 (6 marks - Levels based)
**Explain how the structure of DNA enables it to carry out its functions.** (6 marks)

**Level 3 (5-6 marks):**
Comprehensive explanation linking structure to multiple functions. Accurate use of terminology. Clear logical structure.

**Level 2 (3-4 marks):**
Good explanation with some structural features linked to functions. Generally accurate.

**Level 1 (1-2 marks):**
Limited explanation. Some relevant points but incomplete links between structure and function.

**Indicative content:**
- Double helix structure provides stability
- Complementary base pairing (A-T, C-G) allows accurate replication
- Hydrogen bonds between bases can be broken for replication/transcription
- Sugar-phosphate backbone provides stability
- Sequence of bases carries genetic code
- Triplet code allows for amino acid coding
- Large molecule can carry large amount of information
- Helix can be unwound by enzymes

---

#### Question 30 (6 marks - Levels based)
**Explain how the mammalian heart and circulatory system are adapted for efficient oxygen delivery to tissues.** (6 marks)

**Level 3 (5-6 marks):**
Comprehensive explanation of heart structure and function linked to efficient oxygen delivery. Includes role of blood and haemoglobin. Well-structured with accurate terminology.

**Level 2 (3-4 marks):**
Good explanation with most key features mentioned. Some omissions or minor inaccuracies.

**Level 1 (1-2 marks):**
Limited explanation. Some relevant points but poorly linked.

**Indicative content:**
- Four-chambered heart separates oxygenated and deoxygenated blood
- Double circulation (pulmonary and systemic) maintains pressure
- Thick left ventricle wall generates high pressure for systemic circulation
- Valves prevent backflow / maintain unidirectional flow
- Coronary arteries supply heart muscle with oxygen
- Red blood cells contain haemoglobin
- Haemoglobin has high affinity for O₂ at lungs
- Bohr effect causes O₂ release at respiring tissues
- Cardiac output can increase during exercise

---

### CALCULATION QUESTIONS

---

#### Question 31 (4 marks)
**A student measured the following heart rates:**

At rest: 72 beats per minute
Stroke volume at rest: 70 cm³

During exercise: 150 beats per minute
Stroke volume during exercise: 110 cm³

(a) Calculate the cardiac output at rest and during exercise. (2 marks)

**Mark Scheme:**
At rest: CO = 72 × 70 = **5040 cm³ per minute** or **5.04 dm³/min** (1 mark)
During exercise: CO = 150 × 110 = **16500 cm³/min** or **16.5 dm³/min** (1 mark)

(b) Calculate the percentage increase in cardiac output during exercise. (2 marks)

**Mark Scheme:**
Increase = 16500 - 5040 = 11460 cm³/min (1 mark)
% increase = (11460/5040) × 100 = **227%** (1 mark)

---

#### Question 32 (3 marks)
**A student counted cells in a root tip squash and obtained the following data:**

Interphase: 450 cells
Prophase: 25 cells
Metaphase: 10 cells
Anaphase: 8 cells
Telophase: 7 cells

If the complete cell cycle takes 24 hours, calculate how long the cell spends in metaphase. Show your working. (3 marks)

**Mark Scheme:**
Total cells = 500 (1 mark)
Time in metaphase = (10/500) × 24 hours (1 mark)
= **0.48 hours** or **28.8 minutes** (1 mark)

---

#### Question 33 (4 marks)
**A chi-squared test was carried out on the results of a genetic cross.**

Expected ratio: 9:3:3:1
Observed: 315, 101, 108, 32 (total = 556)

(a) Calculate the expected numbers for each phenotype. (1 mark)

**Mark Scheme:**
Expected = 556 × 9/16 = 312.75, 556 × 3/16 = 104.25, 104.25, 34.75 (1 mark)

(b) Calculate chi-squared and state whether the results support the expected ratio. The critical value at p=0.05 with 3 degrees of freedom is 7.81. (3 marks)

**Mark Scheme:**
χ² = (315-312.75)²/312.75 + (101-104.25)²/104.25 + (108-104.25)²/104.25 + (32-34.75)²/34.75 (1 mark)
= 0.016 + 0.101 + 0.135 + 0.218 = **0.47** (1 mark)
0.47 < 7.81 so no significant difference / results support expected ratio (1 mark)

---

#### Question 34 (3 marks)
**An image of a cell has a diameter of 48 mm. The actual diameter of the cell is 12 μm.**

(a) Calculate the magnification. (1 mark)

**Mark Scheme:**
Convert: 48 mm = 48000 μm (must show conversion)
Magnification = 48000/12 = **×4000** (1 mark)

(b) Another cell in the image has a diameter of 24 mm. Calculate its actual size in micrometres. (2 marks)

**Mark Scheme:**
Actual size = Image size / Magnification (1 mark)
= 24000 μm / 4000 = **6 μm** (1 mark)

---

#### Question 35 (4 marks)
**In a Spearman's rank correlation test, the following results were obtained:**

| Light intensity (arbitrary units) | Number of daisies per m² |
|-----------------------------------|-------------------------|
| 10 | 2 |
| 20 | 5 |
| 30 | 4 |
| 40 | 8 |
| 50 | 10 |
| 60 | 12 |

(a) Calculate Spearman's rank correlation coefficient. (3 marks)

**Mark Scheme:**
Rank data and calculate d² for each pair (1 mark)
Σd² = (1-1)² + (2-2)² + (3-3)² + (4-4)² + (5-5)² + (6-6)² = 2 (note: 30 and 20 swap ranks for daisies) (1 mark)
rs = 1 - (6 × 2)/(6 × 35) = 1 - 0.057 = **0.943** (1 mark)

(b) The critical value at p=0.05 for n=6 is 0.886. What conclusion can be drawn? (1 mark)

**Mark Scheme:**
rs > critical value so significant positive correlation between light intensity and daisy numbers (1 mark)
`;

// ============================================================================
// REFERENCE DATA AND FORMULAS (Edexcel A-Level Biology)
// ============================================================================

const EDEXCEL_ALEVEL_BIOLOGY_REFERENCE_DATA = `
## A-Level Biology Reference Data and Formulas

### Magnification Calculations
| Formula | Units |
|---------|-------|
| Magnification = Image size ÷ Actual size | No units (ratio) |
| Actual size = Image size ÷ Magnification | μm or mm |

### Unit Conversions
| From | To | Multiply by |
|------|-----|-------------|
| mm | μm | 1000 |
| μm | nm | 1000 |
| m | μm | 1,000,000 |

### Respiratory Quotient (RQ)
| Formula | Interpretation |
|---------|----------------|
| RQ = CO₂ produced ÷ O₂ consumed | No units (ratio) |
| RQ = 1.0 | Carbohydrate |
| RQ = 0.7 | Lipid |
| RQ ≈ 0.9 | Protein |

### Cardiac Output
| Formula | Units |
|---------|-------|
| Cardiac output = Stroke volume × Heart rate | dm³/min |

### Productivity and Energy Transfer
| Formula | Units |
|---------|-------|
| GPP = NPP + R | kJ m⁻² year⁻¹ |
| NPP = GPP - R | kJ m⁻² year⁻¹ |
| Efficiency = (Energy out / Energy in) × 100 | % |

### Simpson's Index of Diversity (D)
| Formula | Interpretation |
|---------|----------------|
| D = 1 - Σ(n/N)² | Higher = more diverse |
| D = 1 - Σ[n(n-1) / N(N-1)] | D ranges 0 to 1 |

### Chi-Squared Test
| Formula | Usage |
|---------|-------|
| χ² = Σ[(O - E)² ÷ E] | Compare observed vs expected |
| df = n - 1 | n = categories |

### Critical Values χ² (p = 0.05)
| df | Critical Value |
|----|----------------|
| 1 | 3.84 |
| 2 | 5.99 |
| 3 | 7.81 |

### Student's t-test
| Formula | Usage |
|---------|-------|
| t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂) | Compare means |
| df = n₁ + n₂ - 2 | |

### Spearman's Rank Correlation
| Formula | Range |
|---------|-------|
| rs = 1 - [6Σd² ÷ n(n²-1)] | -1 to +1 |
`;

const EDEXCEL_ALEVEL_BIOLOGY_WORKED_EXAMPLES = `
## Worked Calculation Examples

### Example 1: Simpson's Index
**Q:** Calculate D for: Species A=25, B=15, C=10 (3 marks)

**Solution:**
- N = 50, D = 1 - [(25/50)² + (15/50)² + (10/50)²]
- D = 1 - [0.25 + 0.09 + 0.04] = 1 - 0.38
- **D = 0.62** ✓

### Example 2: RQ Calculation
**Q:** O₂ consumed = 10 cm³, CO₂ produced = 7 cm³. Calculate RQ. (2 marks)

**Solution:**
- RQ = CO₂ ÷ O₂ = 7 ÷ 10
- **RQ = 0.7** (indicating lipid respiration) ✓

### Example 3: Chi-squared
**Q:** Expected 3:1 ratio from 120 offspring. Observed: 100 dominant, 20 recessive. (3 marks)

**Solution:**
- Expected: 90:30
- χ² = [(100-90)²/90] + [(20-30)²/30] = 1.11 + 3.33
- **χ² = 4.44** > 3.84, so significant difference ✓

### Example 4: NPP Calculation
**Q:** GPP = 15,000 kJ m⁻² year⁻¹, Respiration = 9,000. Calculate NPP and % efficiency. (3 marks)

**Solution:**
- NPP = 15,000 - 9,000 = **6,000 kJ m⁻² year⁻¹** ✓
- Efficiency = (6,000/15,000) × 100 = **40%** ✓
`;

const EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES = `
Edexcel A-Level Biology A Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures (30-35%)
- AO2: Apply knowledge and understanding of scientific ideas, processes, techniques and procedures (40-45%)
- AO3: Analyse, interpret and evaluate scientific information, ideas and evidence (25%)

Paper Structure (Total: 300 marks):
- Paper 1 (1h 45m, 90 marks, 30%): Topics 1-4 - The Natural Environment and Species Survival
- Paper 2 (1h 45m, 90 marks, 30%): Topics 5-6 - Energy, Exercise and Coordination
- Paper 3 (2h 30m, 120 marks, 40%): All topics, synoptic assessment

Mathematical Skills: 10% minimum
- Statistical tests (chi-squared, Student's t-test, Spearman's rank)
- Standard deviation
- Percentage calculations
- Rate calculations

Command Words:
- Calculate: Obtain numerical answer, showing working
- Compare: Identify similarities and differences
- Describe: Give an account in words
- Evaluate: Judge from available evidence
- Explain: Give reasons using scientific knowledge
- Justify: Use evidence to support a conclusion
- Suggest: Apply knowledge to unfamiliar situations
- State: Give brief answer without explanation

Mark Scheme Conventions:
- 1 mark per valid scientific point
- Calculations: method, substitution, answer with units
- Extended open response marked using levels
- Paper 3 includes synoptic essay

### Multi-Method Questions: Equal Credit for Valid Approaches

Biology calculations and explanations often have multiple valid approaches. Award full marks for ANY correct method.

**Example 1: Energy transfer calculations**
Accept:
- Efficiency = (output/input) × 100
- Direct percentage calculation from trophic data
- Working via GPP/NPP where appropriate

**Example 2: Statistical tests**
Accept:
- Chi-squared: table method OR formula method
- Standard deviation: step-by-step OR calculator function (if working shown)
- Simpson's Index: D format OR 1-D format

**Example 3: Magnification**
Accept both:
- M = I/A then rearrange as needed
- Direct application of rearranged formula

**Example 4: Respirometer calculations**
Accept:
- Rate from volume/time
- Rate from distance moved/time (with syringe calibration)

**Example 5: Productivity calculations**
Accept:
- NPP = GPP - R
- Net production = I - (F + R)
- Working forward OR backward through energy flow

## Key Definitions (A-Level Standard)

**Topic 1 - Lifestyle:**
- Atherosclerosis: "build-up of fatty deposits (plaques) in artery walls"
- Risk factor: "something that increases the probability of developing a condition"

**Topic 2 - Genes:**
- Gene: "sequence of bases on DNA that codes for a polypeptide"
- Mutation: "change in base sequence of DNA"
- Induced fit: "change in active site shape as substrate binds"

**Topic 3 - Voice of Genome:**
- Totipotent: "cell that can differentiate into any type of cell"
- Pluripotent: "cell that can differentiate into many types but not all"

**Topic 4 - Biodiversity:**
- Simpson's Index: "measure of biodiversity accounting for richness and evenness"
- Phylogeny: "evolutionary relationships between organisms"

**Topic 5 - On the Wild Side:**
- GPP: "total rate of energy conversion by producers in photosynthesis"
- NPP: "GPP minus respiration by producers; energy available to consumers"

**Topic 6 - Immunity:**
- Antigen: "molecule that triggers immune response"
- Antibody: "Y-shaped protein produced by plasma cells that binds to specific antigen"

**Topic 7 - Run for Your Life:**
- Respiratory quotient: "ratio of CO₂ produced to O₂ consumed"
- VO₂ max: "maximum rate of oxygen consumption during exercise"

**Topic 8 - Grey Matter:**
- Action potential: "reversal of potential difference across neurone membrane"
- Refractory period: "time during which neurone cannot be stimulated"

Core Practicals (16 total):
1. Vitamin C in food samples
2. Cell membrane permeability
3. Mitosis in root tip
4. Staining plant tissue
5-8. Various in Topics 1-4
9. Photosynthesis pigments
10. Respiration rates
11. Bacterial growth
12. Muscle contraction
13. Brain structure
14. Habituation investigation
15. Plant hormones
16. Animal responses
`;

// ============================================================================
// DETAILED TOPIC-BY-TOPIC SPECIFICATION CONTENT
// ============================================================================

const EDEXCEL_BIOLOGY_TOPIC_1_DETAIL = `
## Topic 1: Lifestyle, Health and Risk - Detailed Specification Content

### 1.1 Biological Molecules
**Water:**
- Hydrogen bonding and its consequences
- High specific heat capacity - temperature stability
- High latent heat of vaporisation - cooling effect
- Solvent properties - transport medium
- Cohesion and adhesion - movement in plants

**Carbohydrates:**
- Monosaccharides (glucose, fructose, galactose)
- Alpha and beta glucose structures
- Disaccharides (maltose, sucrose, lactose) - condensation and hydrolysis
- Polysaccharides:
  - Starch (amylose and amylopectin) - energy storage
  - Glycogen - animal energy storage
  - Cellulose - plant cell wall structure
- Glycosidic bonds (1-4 and 1-6)

**Lipids:**
- Triglycerides - structure and formation
- Saturated vs unsaturated fatty acids
- Roles of lipids (energy storage, insulation, membranes)
- Phospholipids - amphipathic nature
- Cholesterol - membrane fluidity and steroid precursor

**Proteins:**
- Amino acid structure
- Peptide bonds - condensation reactions
- Protein structure levels (primary, secondary, tertiary, quaternary)
- Fibrous proteins (collagen, keratin)
- Globular proteins (enzymes, haemoglobin)

### 1.2 The Cardiovascular System
**Heart structure:**
- Four chambers and their functions
- Coronary arteries and cardiac muscle
- Atrioventricular and semilunar valves
- Septum and its importance

**Cardiac cycle:**
- Atrial systole, ventricular systole, diastole
- Pressure changes in chambers
- Opening and closing of valves
- Heart sounds and their causes

**Blood vessels:**
- Arteries - thick walls, elastic fibres, small lumen
- Veins - thin walls, valves, large lumen
- Capillaries - one cell thick, large surface area

**Blood:**
- Plasma composition and functions
- Red blood cells - structure and haemoglobin
- White blood cells - types and functions
- Platelets and blood clotting

### 1.3 Cardiovascular Disease
**Atherosclerosis:**
- Endothelial damage and causes
- Inflammatory response
- Plaque formation and composition
- Consequences - reduced blood flow, increased blood pressure

**Thrombosis:**
- Clot formation mechanism
- Risk factors
- Deep vein thrombosis
- Pulmonary embolism

**Heart attacks and strokes:**
- Coronary heart disease
- Myocardial infarction mechanism
- Stroke types (ischaemic and haemorrhagic)
- Signs, symptoms, and treatment

### 1.4 Risk Factors and Evidence
**Types of risk factors:**
- Modifiable (smoking, diet, exercise, obesity)
- Non-modifiable (age, genetics, sex)

**Correlation vs causation:**
- Epidemiological studies
- Confounding variables
- Control groups
- Statistical significance

**Evidence evaluation:**
- Types of studies (observational, intervention)
- Sample size and reliability
- Peer review process
- Interpreting conflicting evidence

### Common Exam Questions - Topic 1:
- Structure and function of biological molecules
- Linking risk factors to disease mechanisms
- Interpreting epidemiological data
- Explaining atherosclerosis process
- Comparing saturated and unsaturated fats
`;

const EDEXCEL_BIOLOGY_TOPIC_2_DETAIL = `
## Topic 2: Genes and Health - Detailed Specification Content

### 2.1 Gas Exchange
**Structure of gas exchange surface:**
- Alveoli structure and adaptations
- Large surface area
- Thin barrier (one cell thick)
- Good blood supply
- Ventilation mechanism

**Ventilation:**
- Inspiration and expiration mechanisms
- Role of diaphragm and intercostal muscles
- Pressure changes in thorax
- Tidal volume, vital capacity, residual volume

**Gas exchange:**
- Diffusion of oxygen and carbon dioxide
- Partial pressure gradients
- Fick's law of diffusion
- Adaptations for efficient exchange

### 2.2 Cell Membranes
**Fluid mosaic model:**
- Phospholipid bilayer structure
- Membrane proteins (intrinsic and extrinsic)
- Glycoproteins and glycolipids
- Cholesterol and membrane fluidity

**Transport mechanisms:**
- Simple diffusion - small, non-polar molecules
- Facilitated diffusion - channel and carrier proteins
- Osmosis - water potential and movement
- Active transport - ATP requirement
- Endocytosis and exocytosis

**Factors affecting membrane permeability:**
- Temperature - protein denaturation
- Organic solvents - dissolve membrane
- pH - protein structure changes

### 2.3 DNA and Genes
**DNA structure:**
- Nucleotide components (sugar, phosphate, base)
- Complementary base pairing (A-T, G-C)
- Double helix and hydrogen bonds
- Antiparallel strands

**DNA replication:**
- Semi-conservative replication
- DNA helicase - unwinding
- DNA polymerase - adding nucleotides
- Leading and lagging strands
- Evidence from Meselson and Stahl

**Genes and alleles:**
- Gene as coding sequence
- Alleles as variants
- Dominant, recessive, codominant
- Genotype and phenotype

### 2.4 Protein Synthesis
**Transcription:**
- RNA polymerase function
- Template strand and coding strand
- mRNA formation
- Processing (intron removal, exon splicing)

**Translation:**
- Ribosome structure (large and small subunits)
- tRNA structure and anticodons
- Codon recognition
- Peptide bond formation
- Start and stop codons

**Genetic code features:**
- Triplet code
- Degenerate (redundant)
- Universal
- Non-overlapping

### 2.5 Mutations
**Types of mutation:**
- Substitution (silent, missense, nonsense)
- Insertion and deletion (frameshift)
- Chromosomal mutations

**Cystic fibrosis:**
- CFTR gene and protein function
- Common mutations (ΔF508)
- Effects on chloride transport
- Symptoms and organ systems affected

### 2.6 Gene Therapy
**Approaches:**
- Somatic cell gene therapy
- Germ line gene therapy (ethical issues)
- In vivo vs ex vivo delivery

**Vectors:**
- Viral vectors (adenovirus, retrovirus, lentivirus)
- Non-viral methods (liposomes, nanoparticles)
- Advantages and limitations of each

**Challenges:**
- Targeting correct cells
- Expression levels
- Immune response
- Duration of effect

### Common Exam Questions - Topic 2:
- Explaining cystic fibrosis from gene to symptom
- Describing protein synthesis
- Comparing transport mechanisms
- Gene therapy benefits and risks
- DNA replication process
`;

const EDEXCEL_BIOLOGY_TOPIC_3_DETAIL = `
## Topic 3: Voice of the Genome - Detailed Specification Content

### 3.1 Cell Structure
**Eukaryotic cells:**
- Nucleus - nuclear envelope, chromatin, nucleolus
- Mitochondria - double membrane, cristae, matrix
- Ribosomes - 80S, protein synthesis
- Rough ER - protein transport
- Smooth ER - lipid synthesis
- Golgi apparatus - modification and packaging
- Lysosomes - digestive enzymes
- Cell surface membrane

**Prokaryotic cells:**
- No membrane-bound organelles
- Circular DNA (nucleoid region)
- 70S ribosomes
- Cell wall (peptidoglycan)
- Plasmids
- Flagella and pili

**Comparison eukaryotic vs prokaryotic:**
- Size differences (10-100μm vs 1-10μm)
- DNA organisation
- Ribosome size
- Cell division mechanisms

### 3.2 The Cell Cycle
**Interphase:**
- G1 phase - cell growth, protein synthesis
- S phase - DNA replication
- G2 phase - preparation for mitosis
- Checkpoints and regulation

**Mitosis:**
- Prophase - chromatin condenses, spindle forms
- Metaphase - chromosomes align at equator
- Anaphase - sister chromatids separate
- Telophase - nuclear envelope reforms
- Cytokinesis - cytoplasm division

**Cell cycle control:**
- Cyclins and cyclin-dependent kinases
- Checkpoints (G1, G2, metaphase)
- Proto-oncogenes and tumour suppressor genes

### 3.3 Meiosis
**Meiosis I:**
- Homologous chromosomes pair (bivalents)
- Crossing over in prophase I
- Independent assortment in metaphase I
- Separation of homologous chromosomes

**Meiosis II:**
- Similar to mitosis
- Separation of sister chromatids
- Four haploid daughter cells

**Genetic variation:**
- Crossing over - new allele combinations
- Independent assortment - random orientation
- Random fertilisation

### 3.4 Cell Specialisation and Differentiation
**Stem cells:**
- Totipotent - zygote, can form any cell
- Pluripotent - embryonic stem cells, most cell types
- Multipotent - adult stem cells, limited range
- Unipotent - one cell type only

**Differentiation process:**
- Gene expression control
- Transcription factors
- Epigenetic modifications
- Signal molecules

**Applications:**
- Treating degenerative diseases
- Growing replacement tissues
- Research and drug testing

**Ethical considerations:**
- Source of embryonic stem cells
- Status of embryo
- Alternative sources (iPS cells, adult stem cells)

### 3.5 Development
**Early development:**
- Fertilisation and zygote formation
- Cleavage divisions
- Blastocyst formation
- Implantation
- Gastrulation and germ layers

**Gene expression in development:**
- Homeobox genes
- Transcription factors
- Morphogens and gradients
- Cell signalling

### 3.6 Cancer
**Tumour formation:**
- Uncontrolled cell division
- Loss of differentiation
- Benign vs malignant tumours
- Metastasis

**Causes:**
- Oncogenes (accelerator)
- Tumour suppressor genes (brakes)
- Environmental factors (mutagens)
- Lifestyle factors

**Treatment:**
- Surgery
- Chemotherapy
- Radiotherapy
- Targeted therapies

### Common Exam Questions - Topic 3:
- Comparing mitosis and meiosis
- Stem cell applications and ethics
- Cell ultrastructure functions
- Cancer formation mechanism
- Cell cycle regulation
`;

const EDEXCEL_BIOLOGY_TOPIC_4_DETAIL = `
## Topic 4: Biodiversity and Natural Resources - Detailed Specification Content

### 4.1 Classification
**Traditional classification:**
- Linnaeus system
- Kingdom, Phylum, Class, Order, Family, Genus, Species
- Binomial nomenclature rules
- Shared physical characteristics

**Modern classification:**
- Three domain system (Bacteria, Archaea, Eukarya)
- Molecular phylogeny
- DNA and protein sequence comparison
- Cladistics and cladograms

**Five kingdoms:**
- Prokaryota (bacteria)
- Protoctista (single-celled eukaryotes)
- Fungi
- Plantae
- Animalia

### 4.2 Biodiversity
**Levels of biodiversity:**
- Genetic diversity
- Species diversity
- Ecosystem diversity

**Measuring biodiversity:**
- Species richness
- Species evenness
- Simpson's Index of Diversity
- Sampling techniques

**Importance of biodiversity:**
- Ecosystem stability
- Economic value (medicine, agriculture)
- Aesthetic and ethical value
- Ecosystem services

### 4.3 Plant Structure
**Root structure:**
- Root hair cells and water absorption
- Xylem and phloem arrangement
- Endodermis and Casparian strip
- Cortex and epidermis

**Stem structure:**
- Vascular bundles
- Cambium
- Cortex and pith
- Epidermis and cuticle

**Leaf structure:**
- Palisade mesophyll - photosynthesis
- Spongy mesophyll - gas exchange
- Guard cells and stomata
- Vascular bundles (veins)

### 4.4 Plant Transport
**Xylem:**
- Structure - lignified, dead cells
- Water movement (cohesion-tension theory)
- Transpiration stream
- Mineral transport

**Phloem:**
- Structure - sieve tube elements, companion cells
- Translocation
- Source to sink movement
- Mass flow hypothesis

### 4.5 Sustainability
**Conservation:**
- In situ conservation (national parks, reserves)
- Ex situ conservation (zoos, seed banks)
- Species recovery programmes
- Habitat management

**Sustainable use:**
- Sustainable forestry
- Sustainable fishing
- Ecotourism
- Agriculture and biodiversity

**Threats to biodiversity:**
- Habitat destruction
- Overexploitation
- Pollution
- Climate change
- Invasive species

### 4.6 Natural Products
**Drug discovery:**
- Traditional knowledge
- Bioprospecting
- High-throughput screening
- Clinical trials

**Plant-derived drugs:**
- Aspirin (willow bark)
- Digitalis (foxglove)
- Taxol (yew tree)
- Artemisinin (sweet wormwood)

**Sustainability of drug production:**
- Synthetic alternatives
- Plant tissue culture
- Genetic modification

### Common Exam Questions - Topic 4:
- Simpson's Index calculations
- Classification methods comparison
- Plant structure and function
- Conservation strategies
- Biodiversity importance
`;

const EDEXCEL_BIOLOGY_TOPIC_5_DETAIL = `
## Topic 5: On the Wild Side - Detailed Specification Content

### 5.1 Ecosystems
**Ecosystem components:**
- Biotic factors (living organisms)
- Abiotic factors (non-living environment)
- Habitat, niche, community, population

**Ecological relationships:**
- Producer, consumer, decomposer
- Trophic levels
- Food chains and food webs
- Pyramids (numbers, biomass, energy)

### 5.2 Energy Flow
**Primary productivity:**
- GPP (Gross Primary Productivity)
- NPP (Net Primary Productivity)
- NPP = GPP - R
- Factors affecting productivity

**Energy transfer efficiency:**
- Typically 10% between trophic levels
- Energy losses (respiration, excretion, uneaten material)
- Ecological efficiency calculations
- Food chain length limitations

**Secondary productivity:**
- Consumer productivity
- Assimilation efficiency
- Production efficiency

### 5.3 Photosynthesis
**Light-dependent reactions:**
- Thylakoid membranes
- Photosystems I and II
- Electron transport chain
- Photophosphorylation
- Photolysis of water
- ATP and reduced NADP production

**Light-independent reactions (Calvin cycle):**
- Stroma location
- Carbon fixation (RuBisCO)
- Reduction using ATP and reduced NADP
- Regeneration of RuBP
- Products (triose phosphate, glucose)

**Limiting factors:**
- Light intensity
- Carbon dioxide concentration
- Temperature
- Water availability

### 5.4 Nutrient Cycles
**Carbon cycle:**
- Photosynthesis and respiration
- Decomposition
- Combustion of fossil fuels
- Oceanic absorption
- Carbon sinks and sources

**Nitrogen cycle:**
- Nitrogen fixation (bacteria, lightning)
- Nitrification (ammonia to nitrate)
- Denitrification (nitrate to nitrogen gas)
- Decomposition and ammonification
- Role of bacteria

### 5.5 Climate Change
**Evidence:**
- Temperature records
- Ice core data
- Sea level changes
- Species distribution shifts

**Causes:**
- Enhanced greenhouse effect
- CO₂ from fossil fuel combustion
- Methane from agriculture
- Deforestation

**Effects:**
- Rising temperatures
- Sea level rise
- Extreme weather events
- Species distribution changes
- Phenological changes

**Mitigation and adaptation:**
- Reducing emissions
- Carbon capture
- Adaptation strategies
- International agreements

### 5.6 Evolution and Speciation
**Evidence for evolution:**
- Fossil record
- Comparative anatomy
- Molecular evidence (DNA, proteins)
- Biogeography

**Natural selection:**
- Variation in population
- Selection pressure
- Differential survival and reproduction
- Inheritance of favourable traits

**Speciation:**
- Allopatric speciation (geographical isolation)
- Sympatric speciation (ecological isolation)
- Reproductive isolation mechanisms
- Formation of new species

### Common Exam Questions - Topic 5:
- Photosynthesis pathway descriptions
- Energy transfer calculations
- Climate change evidence evaluation
- Nutrient cycle diagrams
- Natural selection explanations
`;

const EDEXCEL_BIOLOGY_TOPIC_6_DETAIL = `
## Topic 6: Immunity, Infection and Forensics - Detailed Specification Content

### 6.1 Pathogens and Disease
**Types of pathogen:**
- Bacteria - prokaryotic cells
- Viruses - non-cellular, require host
- Fungi - eukaryotic, cell walls
- Protists - eukaryotic, single-celled

**Transmission:**
- Direct contact
- Airborne
- Waterborne
- Vector-borne
- Body fluids

**Disease mechanisms:**
- Toxin production
- Cell destruction
- Immune system evasion
- Nutrient competition

### 6.2 Non-specific Immunity
**Physical barriers:**
- Skin - keratinised epithelium
- Mucous membranes
- Cilia
- Stomach acid

**Inflammatory response:**
- Vasodilation
- Increased permeability
- Phagocyte attraction
- Signs of inflammation

**Phagocytosis:**
- Recognition of pathogen
- Engulfment (phagocytosis)
- Phagosome formation
- Lysozyme digestion
- Antigen presentation

### 6.3 Specific Immunity
**B lymphocytes (humoral response):**
- Antigen recognition
- Clonal selection
- Clonal expansion
- Plasma cells and antibodies
- Memory cells

**T lymphocytes (cell-mediated response):**
- Helper T cells (CD4+)
- Cytotoxic T cells (CD8+)
- T regulatory cells
- Activation by antigen presentation

**Antibodies:**
- Structure (Y-shaped, variable regions)
- Functions (neutralisation, agglutination, opsonisation)
- Classes (IgG, IgA, IgM, IgE, IgD)

### 6.4 Immunity Types
**Active immunity:**
- Natural - infection
- Artificial - vaccination
- Long-lasting
- Memory cells produced

**Passive immunity:**
- Natural - maternal antibodies
- Artificial - antiserum injection
- Short-lasting
- No memory cells

### 6.5 Vaccination
**Types of vaccine:**
- Live attenuated
- Inactivated
- Subunit
- Toxoid
- mRNA vaccines

**Herd immunity:**
- Threshold percentages
- Protection of vulnerable individuals
- Elimination of disease

**Vaccination programmes:**
- Childhood immunisation schedules
- Eradication programmes (smallpox)
- Challenges (vaccine hesitancy, mutations)

### 6.6 Antibiotic Resistance
**Mechanisms of resistance:**
- Enzyme degradation of antibiotic
- Altered target site
- Efflux pumps
- Reduced permeability

**Spread of resistance:**
- Vertical transmission
- Horizontal gene transfer (conjugation, transformation, transduction)
- Plasmid-mediated resistance

**Combating resistance:**
- Antibiotic stewardship
- New drug development
- Alternative treatments
- Infection prevention

### 6.7 Forensic Biology
**DNA profiling:**
- STR (Short Tandem Repeats)
- Sample collection
- DNA extraction
- PCR amplification
- Gel electrophoresis
- Database comparison

**PCR (Polymerase Chain Reaction):**
- Denaturation (95°C)
- Annealing (55°C)
- Extension (72°C)
- Taq polymerase
- Exponential amplification

**Gel electrophoresis:**
- Separation by size
- Negative DNA attracted to positive electrode
- Smaller fragments move faster
- Visualisation methods

**Forensic entomology:**
- Succession patterns
- Life cycle stages
- Temperature effects
- Time of death estimation

### Common Exam Questions - Topic 6:
- Immune response descriptions
- PCR process
- Antibiotic resistance evolution
- Vaccination benefits and risks
- DNA profiling applications
`;

const EDEXCEL_BIOLOGY_TOPIC_7_DETAIL = `
## Topic 7: Run for Your Life - Detailed Specification Content

### 7.1 Respiration Overview
**ATP structure and function:**
- Adenine + ribose + 3 phosphate groups
- Energy currency of cells
- Hydrolysis releases energy
- Coupled reactions

**Aerobic vs anaerobic:**
- Oxygen requirement
- ATP yield
- Products
- Location in cell

### 7.2 Glycolysis
**Process:**
- Occurs in cytoplasm
- Glucose (6C) → 2 pyruvate (3C)
- Phosphorylation (2 ATP used)
- Oxidation (2 NAD reduced)
- Substrate-level phosphorylation (4 ATP produced)

**Products:**
- Net gain: 2 ATP
- 2 reduced NAD
- 2 pyruvate

### 7.3 Link Reaction
**Process:**
- Occurs in mitochondrial matrix
- Pyruvate → acetyl CoA (2C)
- Decarboxylation (CO₂ released)
- NAD reduced
- Coenzyme A added

**Products per glucose:**
- 2 acetyl CoA
- 2 CO₂
- 2 reduced NAD

### 7.4 Krebs Cycle
**Process:**
- Occurs in mitochondrial matrix
- Acetyl CoA + oxaloacetate → citrate (6C)
- Series of decarboxylation and oxidation reactions
- Regenerates oxaloacetate

**Products per turn:**
- 2 CO₂
- 3 reduced NAD
- 1 reduced FAD
- 1 ATP

**Products per glucose (2 turns):**
- 4 CO₂
- 6 reduced NAD
- 2 reduced FAD
- 2 ATP

### 7.5 Oxidative Phosphorylation
**Electron transport chain:**
- Inner mitochondrial membrane
- Electron carriers (cytochromes)
- Electrons from reduced NAD and FAD
- Energy release pumps H⁺

**Chemiosmosis:**
- Proton gradient across membrane
- ATP synthase
- Proton flow drives ATP synthesis
- Approximately 34 ATP per glucose

**Final electron acceptor:**
- Oxygen
- Forms water
- Without oxygen, chain stops

### 7.6 Anaerobic Respiration
**In animals (lactate fermentation):**
- Pyruvate → lactate
- NAD regenerated
- 2 ATP only
- Oxygen debt

**In plants and yeast (alcoholic fermentation):**
- Pyruvate → ethanol + CO₂
- NAD regenerated
- 2 ATP only
- Basis of brewing and baking

### 7.7 Respiratory Substrates
**Carbohydrates:**
- RQ = 1.0
- Most efficient energy source

**Lipids:**
- RQ = 0.7
- Higher energy per gram
- More oxygen required

**Proteins:**
- RQ = 0.9
- Usually only used in starvation
- Nitrogen waste produced

### 7.8 Muscle Structure
**Muscle fibre structure:**
- Sarcolemma (cell membrane)
- Sarcoplasm (cytoplasm)
- Sarcoplasmic reticulum
- Multiple nuclei
- Many mitochondria

**Myofibril structure:**
- Sarcomere - functional unit
- A band (dark) - myosin
- I band (light) - actin only
- H zone - myosin only
- Z line - sarcomere boundary
- M line - myosin centre

### 7.9 Sliding Filament Theory
**Contraction mechanism:**
1. Nerve impulse arrives
2. Calcium released from sarcoplasmic reticulum
3. Calcium binds troponin
4. Tropomyosin moves, exposing binding sites
5. Myosin heads attach to actin (cross-bridges)
6. Power stroke pulls actin
7. ATP causes myosin to detach
8. Myosin head resets
9. Process repeats

**Changes during contraction:**
- Sarcomere shortens
- I band shortens
- H zone shortens
- A band unchanged
- Z lines move closer

### 7.10 Exercise Physiology
**Immediate effects:**
- Increased heart rate
- Increased breathing rate
- Increased cardiac output
- Blood redistribution

**Training effects:**
- Increased VO₂ max
- Larger stroke volume
- Lower resting heart rate
- More mitochondria in muscle

**Slow-twitch vs fast-twitch fibres:**
- Slow-twitch: aerobic, endurance, many mitochondria
- Fast-twitch: anaerobic, power, fatigue quickly

### Common Exam Questions - Topic 7:
- Respiration pathway descriptions
- RQ calculations
- Muscle contraction mechanism
- Exercise physiology
- Comparing aerobic and anaerobic respiration
`;

const EDEXCEL_BIOLOGY_TOPIC_8_DETAIL = `
## Topic 8: Grey Matter - Detailed Specification Content

### 8.1 Nervous System Organisation
**Central nervous system:**
- Brain
- Spinal cord

**Peripheral nervous system:**
- Sensory neurones
- Motor neurones
- Somatic nervous system (voluntary)
- Autonomic nervous system (involuntary)

**Autonomic nervous system:**
- Sympathetic (fight or flight)
- Parasympathetic (rest and digest)

### 8.2 Neurone Structure
**Types of neurone:**
- Sensory (receptor to CNS)
- Motor (CNS to effector)
- Relay/interneurone (within CNS)

**Structure:**
- Cell body (soma)
- Dendrites
- Axon
- Myelin sheath
- Nodes of Ranvier
- Schwann cells
- Axon terminals

### 8.3 Resting Potential
**Ion distribution:**
- More Na⁺ outside
- More K⁺ inside
- Organic anions inside

**Sodium-potassium pump:**
- 3 Na⁺ out, 2 K⁺ in
- ATP required
- Maintains concentration gradient

**Resting potential:**
- Approximately -70mV
- Inside negative relative to outside
- Membrane polarised

### 8.4 Action Potential
**Stages:**
1. Stimulus - sodium channels open
2. Depolarisation - Na⁺ enters, threshold reached (-55mV)
3. Rising phase - voltage-gated Na⁺ channels open, +40mV reached
4. Repolarisation - Na⁺ channels close, K⁺ channels open
5. Hyperpolarisation - K⁺ channels slow to close
6. Recovery - resting potential restored

**Properties:**
- All-or-nothing response
- Threshold must be reached
- Refractory period prevents backward transmission

### 8.5 Action Potential Transmission
**Continuous conduction:**
- Unmyelinated neurones
- Local currents depolarise adjacent membrane
- Slower speed

**Saltatory conduction:**
- Myelinated neurones
- Action potentials jump between nodes
- Much faster (up to 100 m/s)
- More energy efficient

**Factors affecting speed:**
- Myelination
- Axon diameter
- Temperature

### 8.6 Synaptic Transmission
**Synapse structure:**
- Presynaptic membrane
- Synaptic cleft
- Postsynaptic membrane
- Vesicles
- Receptors

**Transmission process:**
1. Action potential arrives
2. Ca²⁺ channels open, Ca²⁺ enters
3. Vesicles fuse with membrane
4. Neurotransmitter released
5. Diffuses across cleft
6. Binds to receptors
7. Ion channels open
8. Postsynaptic potential generated
9. Neurotransmitter removed

**Excitatory vs inhibitory:**
- Excitatory - depolarisation (EPSP)
- Inhibitory - hyperpolarisation (IPSP)

**Summation:**
- Spatial summation (multiple synapses)
- Temporal summation (rapid impulses)

### 8.7 Brain Structure
**Cerebrum:**
- Largest part
- Two hemispheres
- Cerebral cortex
- Conscious thought, memory, language

**Cerebellum:**
- Coordination
- Balance
- Fine motor control

**Medulla oblongata:**
- Autonomic functions
- Heart rate, breathing, blood pressure

**Hypothalamus:**
- Homeostasis control
- Body temperature
- Hunger, thirst
- Links to pituitary gland

### 8.8 Vision
**Eye structure:**
- Cornea - refraction
- Iris - light intensity control
- Lens - fine focusing
- Retina - photoreceptors
- Fovea - high acuity
- Optic nerve

**Photoreceptors:**
- Rods - low light, peripheral vision, one pigment
- Cones - bright light, colour vision, three types

**Accommodation:**
- Near objects - ciliary muscles contract, lens fat
- Distant objects - ciliary muscles relax, lens thin

### 8.9 Hormonal Control
**Endocrine system:**
- Glands secrete hormones
- Blood transport
- Target cells with receptors
- Slower but longer-lasting than nervous

**Comparison nervous vs hormonal:**
| Nervous | Hormonal |
|---------|----------|
| Fast | Slow |
| Short-lasting | Long-lasting |
| Local | Widespread |
| Electrical/chemical | Chemical only |

### 8.10 Behaviour
**Innate behaviour:**
- Genetically determined
- Present from birth
- Taxes and kineses
- Reflexes

**Learned behaviour:**
- Habituation
- Classical conditioning
- Operant conditioning
- Imprinting

**Habituation:**
- Decreased response to repeated harmless stimulus
- Fewer Ca²⁺ channels responsive
- Less neurotransmitter released
- Adaptive - saves energy

### Common Exam Questions - Topic 8:
- Action potential generation and transmission
- Synaptic transmission steps
- Brain structure and function
- Comparing nervous and hormonal control
- Habituation mechanism
`;

// Topic-specific guidance (comprehensive version)
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-alevel-biology-lifestyle-health': `
${EDEXCEL_BIOLOGY_TOPIC_1_DETAIL}

## Exam Focus Areas - Topic 1:
- Structure and function relationships of biological molecules
- Cardiovascular disease risk factors and mechanisms
- Correlation vs causation in epidemiological studies
- Interpreting data tables and graphs
- Extended response on atherosclerosis formation

## Core Practical Focus:
Core Practical 1: Investigating vitamin C content
- DCPIP titration method
- Controlled variables
- Calculations and comparisons
`,
  'edexcel-alevel-biology-genes-health': `
${EDEXCEL_BIOLOGY_TOPIC_2_DETAIL}

## Exam Focus Areas - Topic 2:
- DNA replication mechanism
- Protein synthesis (transcription and translation)
- Cystic fibrosis: gene to symptom pathway
- Transport across membranes
- Gene therapy applications and ethics

## Core Practical Focus:
Core Practical 2: Effect of temperature on membrane permeability
- Beetroot pigment release
- Colorimeter use
- Explaining results in terms of membrane structure
`,
  'edexcel-alevel-biology-voice-genome': `
${EDEXCEL_BIOLOGY_TOPIC_3_DETAIL}

## Exam Focus Areas - Topic 3:
- Comparing mitosis and meiosis
- Cell ultrastructure and organelle functions
- Stem cells: types, applications, ethics
- Cell cycle regulation and cancer
- Microscopy calculations

## Core Practical Focus:
Core Practical 3: Investigating mitosis in root tip squash
- Root tip preparation and staining
- Identifying stages of mitosis
- Calculating mitotic index
`,
  'edexcel-alevel-biology-biodiversity': `
${EDEXCEL_BIOLOGY_TOPIC_4_DETAIL}

## Exam Focus Areas - Topic 4:
- Simpson's Index of Diversity calculations
- Classification systems and phylogeny
- Plant structure and function
- Conservation strategies
- Drug development from natural products

## Core Practical Focus:
Core Practical 4: Staining plant tissues
- Different stains for different structures
- Drawing scientific diagrams
- Relating structure to function
`,
  'edexcel-alevel-biology-energy-exercise': `
${EDEXCEL_BIOLOGY_TOPIC_5_DETAIL}

## Exam Focus Areas - Topic 5:
- Photosynthesis light-dependent and light-independent reactions
- Energy transfer and productivity calculations
- Climate change evidence and effects
- Natural selection and speciation
- Nutrient cycles

## Core Practical Focus:
Core Practicals 8-9: Chromatography of pigments and photosynthesis rate
- Rf value calculations
- Investigating limiting factors
- Rate calculations
`,
  'edexcel-alevel-biology-infection-immunity': `
${EDEXCEL_BIOLOGY_TOPIC_6_DETAIL}

## Exam Focus Areas - Topic 6:
- Immune response mechanisms (B and T cells)
- Vaccination benefits and herd immunity
- Antibiotic resistance evolution
- DNA profiling and PCR
- Forensic entomology

## Core Practical Focus:
Core Practicals 10-11: Microbial growth and antibiotics
- Aseptic technique
- Measuring zones of inhibition
- Safety considerations
`,
  'edexcel-alevel-biology-run-for-life': `
${EDEXCEL_BIOLOGY_TOPIC_7_DETAIL}

## Exam Focus Areas - Topic 7:
- Respiration pathways (glycolysis, link, Krebs, oxidative phosphorylation)
- Respiratory quotient calculations
- Muscle structure and sliding filament theory
- Exercise physiology
- Aerobic vs anaerobic respiration

## Core Practical Focus:
Core Practicals 5-6, 12: Exercise effects, respirometer, muscle structure
- Heart rate and breathing rate measurements
- Measuring respiration rate
- Muscle tissue observation
`,
  'edexcel-alevel-biology-grey-matter': `
${EDEXCEL_BIOLOGY_TOPIC_8_DETAIL}

## Exam Focus Areas - Topic 8:
- Action potential generation and propagation
- Synaptic transmission
- Brain structure and function
- Vision and accommodation
- Comparing nervous and hormonal control
- Habituation mechanism

## Core Practical Focus:
Core Practicals 13-16: Brain structure, habituation, plant hormones, animal responses
- Identifying brain regions
- Investigating habituation
- Choice chamber experiments
`
};

// Generate compact prompt for standard questions
export function getEdexcelALevelBiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel A-Level Biology examiner creating an exam-style question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

${EDEXCEL_ALEVEL_BIOLOGY_COGNITIVE_CHALLENGE}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY AND MARK ALLOCATION:
- Easy: 2-4 marks (Recall, definitions, simple applications)
- Medium: 6-9 marks (Detailed explanations, data analysis)
- Hard: 15-25 marks (Extended responses with level descriptors, synoptic essays, complex multi-part questions)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this ${difficulty} difficulty question.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Biology B specification.

**DO NOT include pure Chemistry concepts such as:**
- Detailed organic synthesis or laboratory preparation of compounds
- Quantum mechanical explanations of bonding
- Acid-base equilibria calculations (beyond buffer systems in biology)
- Electrochemistry or redox calculations at chemistry A-Level depth
- Detailed spectroscopy interpretation (IR, NMR, mass spec)

**When testing biochemistry, focus on BIOLOGICAL applications:**
- Enzyme structure and biological function, NOT chemical synthesis
- Metabolic pathways and their biological regulation
- Biological molecules in context of living systems
- Neurotransmitters in terms of biological effects, NOT chemical properties

**DO NOT include Psychology concepts such as:**
- Psychological disorders or their classification
- Cognitive theories, learning theories, or behavioral psychology
- Clinical case studies or therapeutic approaches

**For the topic "${topic.name}", test ONLY the biology content in the specification.**

Create ONE exam-style question that:
1. Uses authentic Edexcel A-Level Biology language
2. Tests understanding appropriate to A-Level standard
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
export function getEdexcelALevelBiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel A-Level Biology examiner creating an extended response question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires detailed scientific explanation
2. Tests understanding across multiple aspects
3. Uses appropriate command words
4. Could include data or context

Marking using levels:
Level 3 (5-6 marks): Comprehensive, accurate, well-structured
Level 2 (3-4 marks): Good understanding, some omissions
Level 1 (1-2 marks): Basic understanding, limited terminology

OUTPUT FORMAT (use exact headers):
**Question:**
[Extended response question]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer]`;
}

// Generate calculation question prompt
export function getEdexcelALevelBiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel A-Level Biology examiner creating a calculation question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

${EDEXCEL_ALEVEL_BIOLOGY_REFERENCE_DATA}

${EDEXCEL_ALEVEL_BIOLOGY_WORKED_EXAMPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## CRITICAL: Use Reference Data Above
- Use EXACT formulas from reference data
- Show all working clearly
- Include correct units
- Use realistic biological values

Create ONE calculation question that:
1. Tests quantitative skills at A-Level
2. Requires clear method and working
3. Has realistic numerical data
4. May involve statistical analysis

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking points]

**Explanation:**
[Complete worked solution with every step shown]`;
}

// Generate explain question prompt
export function getEdexcelALevelBiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel A-Level Biology examiner creating an explanation question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests understanding of biological mechanisms at A-Level
2. Requires linking cause and effect
3. Uses appropriate command words (Explain, Describe and explain)
4. May include unfamiliar contexts

DIFFICULTY GUIDE:
- Easy: Explain single mechanism (2-3 marks)
- Medium: Explain process with steps (4-5 marks)
- Hard: Complex interactions (6+ marks)

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with mark allocation]

**Mark Scheme:**
[Key points required]

**Explanation:**
[Model answer with correct terminology]`;
}

// Generate graph/data analysis question prompt
export function getEdexcelALevelBiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel A-Level Biology examiner creating a data analysis question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

${EDEXCEL_ALEVEL_BIOLOGY_REFERENCE_DATA}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data or graphs
2. May require statistical analysis
3. Tests understanding of relationships
4. Uses realistic data

Common Edexcel graph types:
- Enzyme kinetics curves
- Oxygen dissociation curves
- Action potential traces
- Population data
- Ecological sampling results

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with mark allocation]

**Mark Scheme:**
[Marking points for interpretation]

**Explanation:**
[Model answer showing analysis approach]`;
}

// Generate compare question prompt
export function getEdexcelALevelBiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel A-Level Biology examiner creating a comparison question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biological concepts
2. Requires similarities AND differences
3. Tests deep understanding
4. Uses 'Compare' command word

Edexcel Biology comparisons:
- Mitosis vs meiosis
- Aerobic vs anaerobic respiration
- Nervous vs hormonal control
- Light-dependent vs light-independent reactions
- Type I vs Type II diabetes
- DNA vs RNA

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences]

**Explanation:**
[Model answer with organised comparison]`;
}

// Generate synoptic question prompt
export function getEdexcelALevelBiologySynopticPrompt(
  topic: Topic
): string {
  return `You are an expert Edexcel A-Level Biology examiner creating a synoptic question.

${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}

Edexcel Paper 3 synoptic questions:
- Link concepts across different topics
- May include novel contexts
- Require application of knowledge
- Test depth of understanding

Create ONE synoptic question (6-9 marks) that:
1. Links ${topic.name} to at least one other topic area
2. Requires understanding from multiple parts of the specification
3. Tests ability to make connections
4. May include unfamiliar context

OUTPUT FORMAT (use exact headers):
**Question:**
[Synoptic question]

**Mark Scheme:**
[Indicative content showing links between topics]

**Explanation:**
[Model answer demonstrating synoptic links]`;
}

// Generate core practical prompt
export function getEdexcelALevelBiologyCorePracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  const subtopicGuidance = getEdexcelALevelBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${EDEXCEL_ALEVEL_BIOLOGY_PRINCIPLES}

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

Generate a ${subtopic.toUpperCase()} question for this Edexcel A-Level Biology Core Practical.

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

function getEdexcelALevelBiologyPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions (A-Level)
Focus on:
- Detailed procedure with specific techniques
- Quantitative methods and measurements
- Statistical validity considerations
- Controls and replication`;

    case 'Variables':
      return `## Variables Questions (A-Level)
Focus on:
- Precise identification and control
- Standardisation techniques
- Confounding variables`;

    case 'Equipment':
      return `## Equipment Questions (A-Level)
Focus on:
- Precision and accuracy
- Calibration requirements
- Resolution and sensitivity

Equipment: ${practical.equipment?.join(', ') || 'Standard lab equipment'}`;

    case 'Results Analysis':
      return `## Results Analysis (A-Level)
Focus on:
- Statistical analysis (chi-squared, t-test, Spearman's rank)
- Standard deviation and error bars
- Correlation and causation`;

    case 'Graph Skills':
      return `## Graph Skills (A-Level)
Focus on:
- Rate curves and tangent calculations
- Error bars
- Log scales
- Best fit lines`;

    case 'Errors':
      return `## Errors (A-Level)
Focus on:
- Systematic vs random errors
- Percentage uncertainty
- Biological variability`;

    case 'Improvements':
      return `## Improvements (A-Level)
Focus on:
- Statistical improvements
- Equipment upgrades
- Sample size considerations`;

    case 'Safety':
      return `## Safety (A-Level)
Focus on:
- Risk assessment
- COSHH considerations

Safety: ${practical.safety?.join('; ') || 'Standard lab safety procedures'}`;

    default:
      return '';
  }
}
