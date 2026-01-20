// OCR A-Level Biology A (H420) Question Generation Prompts
// Tailored to OCR specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// A-Level Biology mark ranges based on OCR specification
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
// OCR A-LEVEL BIOLOGY A SPECIFICATION DETAILS (H420)
// Based on official OCR specification and past paper analysis
// ============================================================================

// ============================================================================
// REFERENCE DATA AND FORMULAS (OCR A-Level Biology)
// ============================================================================

const OCR_ALEVEL_BIOLOGY_REFERENCE_DATA = `
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

### Water Potential (Ψ)
| Formula | Units |
|---------|-------|
| Ψ = Ψs + Ψp | kPa |
| Water moves from higher to lower Ψ | |

### Cardiac Output
| Formula | Units |
|---------|-------|
| Cardiac output = Stroke volume × Heart rate | dm³/min |

### Respiratory Quotient (RQ)
| Formula | Interpretation |
|---------|----------------|
| RQ = CO₂ produced ÷ O₂ consumed | Ratio |
| RQ = 1.0 | Carbohydrate |
| RQ = 0.7 | Lipid |

### Productivity and Energy Transfer
| Formula | Units |
|---------|-------|
| GPP = NPP + R | kJ m⁻² year⁻¹ |
| NPP = GPP - R | kJ m⁻² year⁻¹ |
| Efficiency = (Energy out / Energy in) × 100 | % |

### Hardy-Weinberg Equations
| Formula | Variables |
|---------|-----------|
| p + q = 1 | Allele frequencies |
| p² + 2pq + q² = 1 | Genotype frequencies |

### Simpson's Index of Diversity (D)
| Formula | Interpretation |
|---------|----------------|
| D = 1 - Σ(n/N)² | Higher = more diverse |

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
| 4 | 9.49 |

### Lincoln Index (Mark-Release-Recapture)
| Formula | Variables |
|---------|-----------|
| N = (n₁ × n₂) ÷ n₃ | N = population estimate |
| n₁ = first sample marked | n₂ = second sample total |
| n₃ = recaptured marked | |

### Student's t-test
| Formula | Usage |
|---------|-------|
| t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂) | Compare two means |
| df = n₁ + n₂ - 2 | |
`;

// ============================================================================
// COMPLETE OCR A-LEVEL BIOLOGY A MODULE SPECIFICATION (H420)
// ============================================================================

const OCR_ALEVEL_BIOLOGY_COMPLETE_SPECIFICATION = `
## OCR A-Level Biology A (H420) Complete Specification

### Qualification Overview
- Qualification Code: H420
- Assessment: 100% external examination
- Total Marks: 300
- Duration: 6 hours total examination time
- Grading: A*-E

### Module 1: Development of Practical Skills in Biology
This module underpins all other modules and is assessed throughout all papers.

**1.1 Practical Skills Assessed in a Written Examination**
- 1.1.1 Planning
  - Experimental design
  - Variable identification and control
  - Risk assessment
  - Equipment selection
  - Hypothesis formation

- 1.1.2 Implementing
  - Following procedures
  - Using apparatus and techniques
  - Making observations and measurements
  - Recording data appropriately

- 1.1.3 Analysis
  - Processing and presenting data
  - Using mathematical skills
  - Identifying patterns and trends
  - Drawing valid conclusions

- 1.1.4 Evaluation
  - Evaluating procedures
  - Identifying sources of error
  - Suggesting improvements
  - Considering accuracy and precision

**1.2 Practical Skills Assessed in the Practical Endorsement**
- CPAC 1: Follows written procedures
- CPAC 2: Applies investigative approaches
- CPAC 3: Safely uses a range of equipment
- CPAC 4: Makes and records observations
- CPAC 5: Researches, references, and reports

### Module 2: Foundations in Biology

**2.1 Cell Structure**
- 2.1.1 Cell structure
  - Microscopy techniques (light and electron)
  - Magnification and resolution calculations
  - Cell fractionation and ultracentrifugation
  - Prokaryotic vs eukaryotic cells
  - Organelle structure and function
  - Viruses as non-cellular structures

- 2.1.2 Biological membranes
  - Fluid mosaic model
  - Phospholipid bilayer structure
  - Membrane proteins (intrinsic and extrinsic)
  - Glycoproteins and glycolipids
  - Cholesterol function
  - Cell signalling

- 2.1.3 Cell division, cell diversity and cellular organisation
  - Mitosis and the cell cycle
  - Stem cells and differentiation
  - Tissue and organ formation
  - Specialised cells

**2.2 Biological Molecules**
- 2.2.1 Monomers and polymers
  - Condensation and hydrolysis reactions
  - Role of water in biological systems

- 2.2.2 Carbohydrates
  - Monosaccharides (α and β glucose)
  - Disaccharides (maltose, sucrose, lactose)
  - Polysaccharides (starch, glycogen, cellulose)
  - Structure-function relationships
  - Benedict's test and iodine test

- 2.2.3 Proteins
  - Amino acid structure
  - Peptide bonds
  - Primary, secondary, tertiary, quaternary structure
  - Globular vs fibrous proteins
  - Biuret test

- 2.2.4 Lipids
  - Triglycerides and phospholipids
  - Saturated vs unsaturated fatty acids
  - Emulsion test
  - Role in energy storage and membranes

- 2.2.5 Nucleic acids
  - DNA and RNA structure
  - Nucleotide structure
  - Base pairing rules
  - DNA replication (semi-conservative)
  - Role of ATP

**2.3 Nucleotides and Nucleic Acids**
- 2.3.1 Nucleotides
  - Structure of nucleotides
  - ATP structure and hydrolysis
  - Phosphorylation reactions

- 2.3.2 Nucleic acids and their functions
  - DNA structure and function
  - mRNA, tRNA, and rRNA
  - Genetic code characteristics
  - Transcription
  - Translation
  - Gene expression

**2.4 Enzymes**
- 2.4.1 Enzyme action
  - Lock and key model
  - Induced fit model
  - Activation energy
  - Enzyme-substrate complex
  - Active site

- 2.4.2 Factors affecting enzyme activity
  - Temperature (Q10)
  - pH
  - Substrate concentration
  - Enzyme concentration
  - Competitive inhibition
  - Non-competitive inhibition
  - Reversible vs irreversible inhibition

- 2.4.3 Enzyme-controlled reactions
  - Enzyme kinetics (Vmax, Km)
  - Michaelis-Menten kinetics
  - Lineweaver-Burk plots
  - Cofactors and coenzymes
  - Prosthetic groups

### Module 3: Exchange and Transport

**3.1 Exchange Surfaces**
- 3.1.1 Exchange surfaces
  - Surface area to volume ratio
  - Factors affecting exchange
  - Fick's law
  - Adaptations for efficient exchange

- 3.1.2 Gas exchange in different organisms
  - Single-celled organisms
  - Fish (gills and counter-current)
  - Insects (tracheal system)
  - Amphibians
  - Plants (stomata and spongy mesophyll)
  - Mammals (lungs)
  - Dissection of fish head and gas exchange system

**3.2 Transport in Animals**
- 3.2.1 Transport in animals
  - Need for transport systems
  - Single vs double circulation
  - Open vs closed systems
  - Heart structure
  - Cardiac cycle
  - Heart rate control
  - Electrocardiograms (ECGs)
  - Cardiac output calculations
  - Dissection of mammalian heart

- 3.2.2 Blood vessels
  - Arteries, arterioles, capillaries, venules, veins
  - Structure-function relationships
  - Tissue fluid formation
  - Role of lymphatic system

- 3.2.3 Blood and blood cells
  - Plasma composition
  - Red blood cells
  - White blood cells (types and functions)
  - Platelets and clotting
  - Haemoglobin structure
  - Oxygen dissociation curves
  - Bohr effect
  - Fetal haemoglobin
  - Carbon dioxide transport

**3.3 Transport in Plants**
- 3.3.1 Transport in plants
  - Xylem structure and function
  - Transpiration stream
  - Cohesion-tension theory
  - Root pressure
  - Water uptake by roots
  - Translocation in phloem
  - Mass flow hypothesis
  - Source and sink
  - Dissection of plant stems

- 3.3.2 Transpiration
  - Factors affecting transpiration
  - Stomatal opening and closing
  - Guard cell mechanism
  - Potometers
  - Xerophyte adaptations

### Module 4: Biodiversity, Evolution and Disease

**4.1 Communicable Diseases**
- 4.1.1 Communicable diseases, disease prevention and the immune system
  - Types of pathogens (bacteria, viruses, fungi, protoctista)
  - Transmission of disease
  - Physical and chemical barriers
  - Non-specific immune response
  - Specific immune response
  - B lymphocytes and antibodies
  - T lymphocytes (helper and killer)
  - Primary and secondary immune response
  - Vaccination
  - Herd immunity
  - Active and passive immunity
  - Antibiotics and antibiotic resistance
  - Antiviral drugs
  - HIV and AIDS
  - Tuberculosis
  - Malaria

**4.2 Biodiversity**
- 4.2.1 Biodiversity
  - Species diversity
  - Genetic diversity
  - Ecosystem diversity
  - Simpson's Index of Diversity
  - Sampling techniques
  - Random sampling
  - Systematic sampling
  - Quadrats and transects
  - Mark-release-recapture
  - Importance of biodiversity
  - Threats to biodiversity

- 4.2.2 Classification and evolution
  - Classification systems
  - Five kingdoms
  - Three domains (Archaea, Bacteria, Eukarya)
  - Binomial nomenclature
  - Phylogeny
  - Molecular phylogenetics
  - DNA/protein sequence comparisons
  - Immunological comparisons

**4.3 Evolution**
- 4.3.1 Evolution
  - Variation
  - Natural selection
  - Types of selection (directional, stabilising, disruptive)
  - Genetic drift
  - Gene flow
  - Evidence for evolution
  - Antibiotic resistance as evolution
  - Speciation
  - Allopatric speciation
  - Sympatric speciation
  - Reproductive isolation mechanisms

### Module 5: Communication, Homeostasis and Energy

**5.1 Communication and Homeostasis**
- 5.1.1 Communication and homeostasis
  - Need for communication systems
  - Negative feedback
  - Positive feedback
  - Hormonal vs nervous communication
  - Cell signalling

- 5.1.2 Nervous communication
  - Neurone structure
  - Sensory, relay, and motor neurones
  - Resting potential
  - Action potential
  - Threshold and all-or-nothing
  - Refractory period
  - Saltatory conduction
  - Factors affecting nerve impulse speed
  - Synaptic transmission
  - Neurotransmitters
  - Excitatory and inhibitory synapses
  - Summation (spatial and temporal)
  - Effects of drugs on synapses

- 5.1.3 Hormonal communication
  - Endocrine glands
  - Hormones and target cells
  - First and second messengers
  - Adrenal glands
  - Adrenaline and noradrenaline
  - Fight or flight response

**5.2 Excretion**
- 5.2.1 Excretion as an example of homeostatic control
  - Definition of excretion
  - Liver structure and function
  - Detoxification
  - Deamination
  - Ornithine cycle
  - Kidney structure
  - Nephron structure
  - Ultrafiltration
  - Selective reabsorption
  - Water reabsorption
  - Loop of Henle
  - Counter-current multiplier
  - ADH and osmoregulation
  - Kidney failure and treatment
  - Dialysis
  - Kidney transplant
  - Dissection of mammalian kidney

**5.3 Neuroreceptors**
- 5.3.1 Sensory receptors
  - Types of receptors
  - Pacinian corpuscle
  - Retina photoreceptors
  - Rods and cones
  - Generator potential
  - Sensory adaptation

**5.4 Photosynthesis**
- 5.4.1 Photosynthesis
  - Site of photosynthesis
  - Chloroplast structure
  - Photosynthetic pigments
  - Absorption and action spectra
  - Light-dependent reactions
  - Photophosphorylation (cyclic and non-cyclic)
  - Photolysis
  - Electron transport chain
  - ATP and NADPH production
  - Light-independent reactions
  - Calvin cycle
  - Carbon fixation by RuBisCO
  - Reduction and regeneration
  - Limiting factors
  - Glasshouse management
  - C4 plants and CAM plants

**5.5 Respiration**
- 5.5.1 Respiration
  - Site of respiration
  - Mitochondria structure
  - Glycolysis
  - Link reaction
  - Krebs cycle
  - Oxidative phosphorylation
  - Electron transport chain
  - Chemiosmosis
  - ATP yield
  - Anaerobic respiration
  - Lactate fermentation
  - Alcoholic fermentation
  - Respiratory quotient (RQ)
  - Respiratory substrates

### Module 6: Genetics, Evolution and Ecosystems

**6.1 Cellular Control**
- 6.1.1 Cellular control
  - Gene mutation
  - Types of mutation (substitution, deletion, insertion)
  - Effects of mutations
  - Regulatory genes
  - Structural genes
  - Lac operon in E. coli
  - Gene regulation in eukaryotes
  - Transcription factors
  - Epigenetics
  - DNA methylation
  - Histone modification
  - Body plans
  - Homeobox genes

**6.2 Patterns of Inheritance**
- 6.2.1 Patterns of inheritance
  - Monohybrid crosses
  - Dihybrid crosses
  - Codominance
  - Multiple alleles
  - Sex linkage
  - Autosomal linkage
  - Epistasis
  - Chi-squared test
  - Continuous variation
  - Polygenic inheritance

**6.3 Manipulating Genomes**
- 6.3.1 Manipulating genomes
  - DNA sequencing
  - Polymerase chain reaction (PCR)
  - Gel electrophoresis
  - Restriction enzymes
  - Ligases
  - Vectors
  - Genetic engineering
  - Recombinant DNA
  - Transformation
  - Gene therapy
  - Somatic vs germ line therapy
  - CRISPR-Cas9
  - Genetic screening
  - Genomics and proteomics
  - Bioinformatics
  - GMO controversies

**6.4 Cloning and Biotechnology**
- 6.4.1 Cloning and biotechnology
  - Reproductive cloning
  - Non-reproductive cloning
  - Somatic cell nuclear transfer
  - Therapeutic cloning
  - Stem cells
  - Microorganisms in biotechnology
  - Fermenters and bioreactors
  - Aseptic technique
  - Batch vs continuous culture
  - Immobilised enzymes
  - Applications of biotechnology

**6.5 Ecosystems**
- 6.5.1 Ecosystems
  - Ecosystem components
  - Food chains and food webs
  - Trophic levels
  - Producers and consumers
  - Energy flow
  - Gross primary productivity (GPP)
  - Net primary productivity (NPP)
  - Respiratory losses
  - Energy transfer efficiency
  - Farming practices and productivity
  - Nutrient cycles
  - Carbon cycle
  - Nitrogen cycle
  - Nitrification, denitrification, nitrogen fixation
  - Role of decomposers
  - Human impacts on ecosystems
  - Climate change
  - Deforestation
  - Eutrophication

**6.6 Populations and Sustainability**
- 6.6.1 Population growth
  - Factors affecting population size
  - Birth rate, death rate, migration
  - Carrying capacity
  - Limiting factors
  - Competition (intraspecific and interspecific)
  - Predator-prey relationships
  - Conservation strategies
  - Sustainability
  - Sustainable resource management
  - In situ and ex situ conservation
`;

// ============================================================================
// COGNITIVE CHALLENGE BY DIFFICULTY LEVEL
// ============================================================================

const OCR_ALEVEL_BIOLOGY_COGNITIVE_CHALLENGE = `
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
// ASSESSMENT OBJECTIVES WITH DETAILED WEIGHTINGS
// ============================================================================

const OCR_ALEVEL_BIOLOGY_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Biology A Assessment Objectives

### AO1: Knowledge and Understanding (30-35%)
Demonstrate knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures

**What this means in practice:**
- Recall definitions accurately
- State facts and principles
- Describe structures and processes
- Name parts and functions
- List characteristics

**Mark allocation:**
- Paper 1: 33-36 marks (33-36%)
- Paper 2: 33-36 marks (33-36%)
- Paper 3: 20-24 marks (28-35%)

**Typical question stems:**
- "State..."
- "Name..."
- "Define..."
- "List..."
- "Describe the structure of..."

### AO2: Application (40-45%)
Apply knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures in familiar and unfamiliar contexts

**What this means in practice:**
- Apply knowledge to new situations
- Use information from graphs and tables
- Perform calculations
- Make predictions based on understanding
- Explain observations using knowledge

**Mark allocation:**
- Paper 1: 40-45 marks (40-45%)
- Paper 2: 40-45 marks (40-45%)
- Paper 3: 28-32 marks (40-45%)

**Typical question stems:**
- "Explain why..."
- "Suggest why..."
- "Calculate..."
- "Using the data..."
- "Describe and explain..."

### AO3: Analysis, Interpretation and Evaluation (25%)
Analyse, interpret and evaluate:
- Scientific information, ideas and evidence
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**What this means in practice:**
- Interpret data from experiments
- Evaluate experimental methods
- Analyse graphs and tables
- Draw conclusions from evidence
- Assess validity and reliability
- Suggest improvements

**Mark allocation:**
- Paper 1: 21-25 marks (21-25%)
- Paper 2: 21-25 marks (21-25%)
- Paper 3: 15-18 marks (21-26%)

**Typical question stems:**
- "Evaluate..."
- "Discuss..."
- "Analyse the data..."
- "What conclusions..."
- "Comment on the validity..."

### Mathematical Skills (Minimum 10%)
Required calculations across all papers:
- Arithmetic and numerical computation
- Handling data
- Algebra
- Graphs
- Statistics

**Specific requirements:**
- Use appropriate units
- Use significant figures appropriately
- Calculate ratios and percentages
- Calculate magnification
- Understand standard form
- Use logarithms
- Plot and interpret graphs
- Calculate rates of change
- Understand correlation vs causation
- Use statistical tests (χ², t-test, Spearman's rank)
- Calculate standard deviation
- Understand probability

### Practical Skills (15%)
Questions based on practical work throughout all papers:
- Experimental design
- Data collection
- Data analysis
- Evaluation
- Safety considerations
`;

// ============================================================================
// PAPER STRUCTURE AND COMPONENT DETAILS
// ============================================================================

const OCR_ALEVEL_BIOLOGY_PAPER_STRUCTURE = `
## OCR A-Level Biology A Paper Structure

### Component 01: Biological Processes (H420/01)
**Duration:** 2 hours 15 minutes
**Total Marks:** 100
**Weighting:** 37% of A-Level

**Content Assessed:**
- Module 1: Development of practical skills (in context)
- Module 2: Foundations in biology
- Module 3: Exchange and transport
- Module 4: Biodiversity, evolution and disease

**Question Types:**
- Multiple choice (15 marks)
- Short answer questions (15-25 marks)
- Structured questions (40-50 marks)
- Extended response questions (20 marks)

**Key Features:**
- Tests fundamental biological processes
- Emphasis on cellular biology
- Exchange mechanisms featured heavily
- Disease and immune response questions
- At least two 6-mark extended responses
- Calculations worth 10-15 marks

**Typical Topics Examined:**
- Cell structure and microscopy
- Enzyme kinetics
- Membrane transport
- Gas exchange mechanisms
- Heart structure and function
- Haemoglobin and oxygen transport
- Immune response
- Biodiversity calculations

### Component 02: Biological Diversity (H420/02)
**Duration:** 2 hours 15 minutes
**Total Marks:** 100
**Weighting:** 37% of A-Level

**Content Assessed:**
- Module 1: Development of practical skills (in context)
- Module 2: Foundations in biology
- Module 5: Communication, homeostasis and energy
- Module 6: Genetics, evolution and ecosystems

**Question Types:**
- Multiple choice (15 marks)
- Short answer questions (15-25 marks)
- Structured questions (40-50 marks)
- Extended response questions (20 marks)

**Key Features:**
- Tests higher-level concepts
- Communication systems featured
- Energy processes (photosynthesis/respiration)
- Genetics and inheritance
- Ecosystem dynamics
- At least two 6-mark extended responses
- Statistical analysis questions

**Typical Topics Examined:**
- Action potentials
- Hormonal control
- Kidney function
- Photosynthesis pathways
- Respiration stages
- Genetic crosses
- Chi-squared tests
- Population ecology
- Nutrient cycles

### Component 03: Unified Biology (H420/03)
**Duration:** 1 hour 30 minutes
**Total Marks:** 70
**Weighting:** 26% of A-Level

**Content Assessed:**
- All modules (1-6) - synoptic assessment

**Question Types:**
- Short answer questions (10-15 marks)
- Structured questions (30-40 marks)
- Extended response questions (15-25 marks)

**Key Features:**
- Synoptic assessment across entire specification
- Questions link content from different modules
- Novel contexts frequently used
- Higher proportion of extended responses
- Tests ability to make connections
- Often uses research-based contexts
- At least one 9-mark extended response

**Synoptic Themes:**
Paper 3 often tests these overarching concepts:
1. Structure and function relationships
2. Energy flow and transformation
3. Communication and control
4. Evolution and adaptation
5. Ecosystems and sustainability
6. Genetic information and variation

**Example Synoptic Links:**
- Membrane structure → nerve impulses → kidney function
- Enzyme action → digestion → respiration → exercise
- DNA → protein synthesis → enzyme function → metabolic pathways
- Natural selection → antibiotic resistance → disease treatment
- Photosynthesis → productivity → energy transfer → ecosystems
`;

// ============================================================================
// COMPREHENSIVE WORKED EXAMPLES (25+ Questions with Full Mark Schemes)
// ============================================================================

const OCR_ALEVEL_BIOLOGY_WORKED_EXAMPLES = `
## Worked Calculation Examples

### Example 1: Hardy-Weinberg
**Q:** 9% of a population is homozygous recessive. Calculate carrier frequency. (3 marks)

**Solution:**
- q² = 0.09, so q = 0.3 ✓
- p = 1 - 0.3 = 0.7 ✓
- Carrier (2pq) = 2 × 0.7 × 0.3 = **0.42 (42%)** ✓

### Example 2: Chi-squared
**Q:** Expected 9:3:3:1 ratio (total 160). Observed: 95, 28, 30, 7. (4 marks)

**Solution:**
- Expected: 90, 30, 30, 10
- χ² = [(95-90)²/90] + [(28-30)²/30] + [(30-30)²/30] + [(7-10)²/10]
- χ² = 0.28 + 0.13 + 0 + 0.9 = **1.31** ✓
- df = 3, critical = 7.81
- 1.31 < 7.81, no significant difference ✓

### Example 3: Lincoln Index
**Q:** First sample: 50 marked. Second sample: 60 caught, 12 marked. Estimate population. (2 marks)

**Solution:**
- N = (n₁ × n₂) ÷ n₃
- N = (50 × 60) ÷ 12
- **N = 250** ✓

### Example 4: Energy Transfer Efficiency
**Q:** Primary consumers receive 8000 kJ. Secondary consumers receive 800 kJ. Calculate efficiency. (2 marks)

**Solution:**
- Efficiency = (800 ÷ 8000) × 100
- **Efficiency = 10%** ✓

### Example 5: Magnification Calculation
**Q:** A mitochondrion measures 2.4 cm in an electron micrograph. The actual length is 4 μm. Calculate the magnification. (2 marks)

**Solution:**
- Convert to same units: 2.4 cm = 24,000 μm ✓
- Magnification = Image size ÷ Actual size
- Magnification = 24,000 ÷ 4 = **×6000** ✓

### Example 6: Cardiac Output
**Q:** An athlete has a stroke volume of 120 cm³ and heart rate of 55 bpm. Calculate their cardiac output in dm³/min. (2 marks)

**Solution:**
- Cardiac output = Stroke volume × Heart rate ✓
- CO = 120 × 55 = 6600 cm³/min
- **CO = 6.6 dm³/min** ✓

### Example 7: Simpson's Index of Diversity
**Q:** A sample contains: Species A: 20, Species B: 15, Species C: 10, Species D: 5. Calculate Simpson's Index. (3 marks)

**Solution:**
- Total N = 50
- D = 1 - Σ(n/N)² ✓
- D = 1 - [(20/50)² + (15/50)² + (10/50)² + (5/50)²]
- D = 1 - [0.16 + 0.09 + 0.04 + 0.01]
- D = 1 - 0.30 = **0.70** ✓

### Example 8: Respiratory Quotient
**Q:** During an experiment, a respiring organism produced 18 cm³ of CO₂ and consumed 24 cm³ of O₂. Calculate the RQ and identify the respiratory substrate. (3 marks)

**Solution:**
- RQ = CO₂ produced ÷ O₂ consumed ✓
- RQ = 18 ÷ 24 = **0.75** ✓
- RQ between 0.7-0.8 indicates **lipid/fat as substrate** ✓

### Example 9: Water Potential Calculation
**Q:** A cell has a solute potential (Ψs) of -800 kPa and pressure potential (Ψp) of 300 kPa. Calculate the water potential and determine if water will enter or leave when placed in a solution with Ψ = -400 kPa. (3 marks)

**Solution:**
- Ψ = Ψs + Ψp ✓
- Ψ = -800 + 300 = **-500 kPa** ✓
- Cell Ψ (-500) < Solution Ψ (-400), water will **enter the cell** ✓

### Example 10: Net Primary Productivity
**Q:** A forest ecosystem has a GPP of 25,000 kJ m⁻² year⁻¹. Plant respiration accounts for 55% of GPP. Calculate the NPP. (2 marks)

**Solution:**
- R = 0.55 × 25,000 = 13,750 kJ m⁻² year⁻¹
- NPP = GPP - R ✓
- NPP = 25,000 - 13,750 = **11,250 kJ m⁻² year⁻¹** ✓

### Example 11: t-test Calculation
**Q:** Two samples of plant heights: Sample 1 (n=10, mean=15.2 cm, SD=2.1) and Sample 2 (n=10, mean=18.6 cm, SD=2.4). Calculate t and determine significance (p=0.05, df=18, critical value=2.10). (4 marks)

**Solution:**
- t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂) ✓
- t = (15.2 - 18.6) ÷ √(4.41/10 + 5.76/10)
- t = -3.4 ÷ √(0.441 + 0.576)
- t = -3.4 ÷ √1.017 = -3.4 ÷ 1.008 = **-3.37** ✓
- |3.37| > 2.10, so **significant difference** ✓
- Reject null hypothesis ✓

### Example 12: Percentage Change
**Q:** A potato cylinder had an initial mass of 2.5 g. After 30 minutes in sucrose solution, its mass was 2.2 g. Calculate the percentage change. (2 marks)

**Solution:**
- Change = 2.2 - 2.5 = -0.3 g
- % change = (change ÷ original) × 100 ✓
- % change = (-0.3 ÷ 2.5) × 100 = **-12%** ✓

### Example 13: Rate of Reaction
**Q:** In an enzyme experiment, 24 cm³ of oxygen was produced in 3 minutes. Calculate the rate of reaction. (1 mark)

**Solution:**
- Rate = volume ÷ time
- Rate = 24 ÷ 3 = **8 cm³ min⁻¹** ✓

### Example 14: Carrying Capacity and Population Growth
**Q:** A population starts at 100 individuals with a growth rate of 15% per year. Calculate the population after 3 years. (3 marks)

**Solution:**
- Year 1: 100 × 1.15 = 115 ✓
- Year 2: 115 × 1.15 = 132.25 ✓
- Year 3: 132.25 × 1.15 = **152** (to nearest whole number) ✓

### Example 15: Genotype Frequencies from Hardy-Weinberg
**Q:** In a population of 10,000 individuals, 100 show the recessive phenotype. Calculate the expected number of heterozygotes. (4 marks)

**Solution:**
- q² = 100/10,000 = 0.01 ✓
- q = √0.01 = 0.1 ✓
- p = 1 - 0.1 = 0.9 ✓
- Heterozygotes (2pq) = 2 × 0.9 × 0.1 = 0.18
- Number = 0.18 × 10,000 = **1800** ✓

## Worked Extended Response Examples

### Example 16: Enzyme Inhibition (6 marks)
**Q:** Describe and explain the effects of competitive and non-competitive inhibitors on enzyme activity. [6]

**Mark Scheme (Indicative content):**
Level 3 (5-6 marks): Detailed comparison with mechanism explained
- Competitive inhibitor has similar shape to substrate
- Binds to active site
- Prevents substrate binding
- Effect overcome by increasing substrate concentration
- Vmax unchanged, Km increased
- Non-competitive binds to allosteric site
- Changes shape of active site
- Substrate cannot bind effectively
- Effect NOT overcome by increasing substrate
- Vmax reduced, Km unchanged

Level 2 (3-4 marks): Good understanding with some omissions
Level 1 (1-2 marks): Basic understanding, limited terminology

**Model Answer:**
Competitive inhibitors are molecules with a similar molecular shape to the substrate. They compete with the substrate for the active site of the enzyme. When bound, the inhibitor blocks the substrate from entering, preventing the enzyme-substrate complex from forming.

The effect of competitive inhibition can be overcome by increasing substrate concentration, as this increases the probability of substrate molecules binding rather than inhibitor molecules. On a Michaelis-Menten graph, Vmax remains unchanged (as it can still be reached at very high substrate concentrations) but Km increases (more substrate needed for half Vmax).

Non-competitive inhibitors bind to an allosteric site, separate from the active site. This causes a conformational change in the enzyme that alters the shape of the active site. The substrate can no longer bind effectively, or the enzyme-substrate complex cannot form products.

Increasing substrate concentration does not overcome non-competitive inhibition because the inhibitor does not compete with the substrate. On a graph, Vmax is reduced (fewer functional enzymes) but Km remains unchanged as the affinity for substrate is unaltered.

### Example 17: Action Potential (6 marks)
**Q:** Describe and explain the events that occur during an action potential in a neurone. [6]

**Mark Scheme (Indicative content):**
- Resting potential of -70mV due to K+ leak channels
- Stimulus causes depolarisation
- Voltage-gated Na+ channels open at threshold (-55mV)
- Na+ influx causes rapid depolarisation to +40mV
- Na+ channels inactivate
- Voltage-gated K+ channels open
- K+ efflux causes repolarisation
- Hyperpolarisation occurs (K+ channels slow to close)
- Na+/K+ pump restores resting potential
- Refractory period prevents backward transmission

### Example 18: Photosynthesis Light Reactions (6 marks)
**Q:** Describe and explain the light-dependent reactions of photosynthesis. [6]

**Mark Scheme (Indicative content):**
- Occurs in thylakoid membrane
- Light absorbed by photosynthetic pigments
- Chlorophyll in photosystems I and II
- Light energy excites electrons
- Electrons passed along electron transport chain
- Carriers include plastoquinone and cytochromes
- Electron flow powers proton pumping into thylakoid space
- Proton gradient drives ATP synthesis (chemiosmosis)
- ATP synthase produces ATP (photophosphorylation)
- NADP reduced to NADPH using electrons
- Photolysis of water provides replacement electrons
- Oxygen released as by-product

### Example 19: Kidney Function (6 marks)
**Q:** Explain how the kidney produces urine that is more concentrated than the blood plasma. [6]

**Mark Scheme (Indicative content):**
- Loop of Henle creates water potential gradient in medulla
- Descending limb permeable to water, not ions
- Water leaves by osmosis
- Ascending limb impermeable to water
- Ascending limb actively pumps Na+ and Cl- out
- Creates low water potential in medulla
- Counter-current multiplier maintains gradient
- Collecting duct passes through medulla
- ADH makes collecting duct permeable to water
- Water reabsorbed by osmosis
- Urea contributes to medullary gradient
- Concentration can reach 1200 mOsm

### Example 20: Natural Selection (6 marks)
**Q:** Explain how natural selection can lead to the evolution of antibiotic resistance in bacteria. [6]

**Mark Scheme (Indicative content):**
- Variation exists in bacterial population
- Due to random mutation
- Some bacteria have alleles for resistance
- Antibiotic acts as selection pressure
- Susceptible bacteria die
- Resistant bacteria survive
- Survive to reproduce
- Pass on resistance alleles
- Allele frequency increases in population
- Over generations, population becomes resistant
- Horizontal gene transfer spreads resistance
- Selection is directional

### Example 21: Immune Response (6 marks)
**Q:** Describe and explain the specific immune response to a viral infection. [6]

**Mark Scheme (Indicative content):**
- Virus displays antigens
- Antigens presented by antigen-presenting cells
- T helper cells recognise antigens
- T helper cells release cytokines
- Cytokines activate B cells and T killer cells
- B cells divide by mitosis (clonal selection)
- Differentiate into plasma cells
- Plasma cells produce antibodies
- Antibodies bind to antigens (neutralisation)
- T killer cells destroy infected cells
- Memory cells formed for secondary response
- Secondary response faster and stronger

### Example 22: Transpiration and Water Movement (6 marks)
**Q:** Explain the movement of water from the soil to the leaves of a plant. [6]

**Mark Scheme (Indicative content):**
- Water enters root hair cells by osmosis
- Root hair cells have lower water potential
- Water moves across cortex
- Apoplast and symplast pathways
- Casparian strip forces water through endodermis
- Water enters xylem
- Cohesion between water molecules
- Adhesion to xylem walls
- Tension created by transpiration
- Evaporation from mesophyll cells
- Water vapour diffuses through stomata
- Creates transpiration pull
- Cohesion-tension theory

### Example 23: Respiration Stages (6 marks)
**Q:** Describe the role of the Krebs cycle in aerobic respiration. [6]

**Mark Scheme (Indicative content):**
- Occurs in mitochondrial matrix
- Acetyl CoA combines with 4C compound (oxaloacetate)
- Forms 6C compound (citrate)
- Series of oxidation reactions
- Carbon removed as CO2 (decarboxylation)
- Hydrogen removed (dehydrogenation)
- NAD reduced to NADH
- FAD reduced to FADH2
- Substrate-level phosphorylation produces ATP
- Oxaloacetate regenerated
- Cycle turns twice per glucose
- Coenzymes carry hydrogen to ETC

### Example 24: Genetic Cross with Epistasis
**Q:** In mice, coat colour is controlled by two genes. Gene A determines whether pigment is deposited (A dominant) or not (aa = albino). Gene B determines pigment colour (B = black, bb = brown). Two heterozygous (AaBb) mice are crossed. Show the expected phenotypic ratio. (4 marks)

**Solution:**
Cross: AaBb × AaBb
Using Punnett square or multiplication:
- A_B_ (pigment, black) = 9/16 ✓
- A_bb (pigment, brown) = 3/16 ✓
- aaB_ (no pigment, albino) = 3/16 ✓
- aabb (no pigment, albino) = 1/16 ✓

**Phenotypic ratio: 9 black : 3 brown : 4 albino** ✓

### Example 25: Synoptic Question - Membrane Structure and Function (9 marks)
**Q:** The fluid mosaic model describes the structure of cell membranes. Explain how the structure of the membrane is related to its functions in:
- Transport of substances
- Cell signalling
- Maintaining internal environment [9]

**Mark Scheme (Indicative content):**
Transport:
- Phospholipid bilayer is hydrophobic barrier
- Prevents water-soluble substances passing
- Channel proteins for ions
- Carrier proteins for larger molecules
- Active transport requires ATP
- Vesicles for large molecules

Cell signalling:
- Receptor proteins span membrane
- Glycoproteins act as receptors
- Hormones bind to receptors
- Triggers intracellular response
- Second messenger systems

Maintaining environment:
- Partially permeable
- Controls what enters/leaves
- Maintains water potential
- Creates electrochemical gradients
- Allows homeostasis

Level 3 (7-9 marks): Detailed links between structure and all three functions
Level 2 (4-6 marks): Good understanding of most aspects
Level 1 (1-3 marks): Basic points, limited terminology

### Example 26: Data Analysis Question
**Q:** The table shows the effect of temperature on the rate of an enzyme-catalysed reaction.

| Temperature (°C) | Rate (mg/min) |
|-----------------|---------------|
| 10 | 2.0 |
| 20 | 4.2 |
| 30 | 8.1 |
| 40 | 14.5 |
| 50 | 12.3 |
| 60 | 3.1 |

(a) Calculate the Q10 for the reaction between 20°C and 30°C. (2 marks)
(b) Explain the change in rate between 40°C and 60°C. (3 marks)

**Solution:**
(a)
- Q10 = Rate at (T+10) ÷ Rate at T ✓
- Q10 = 8.1 ÷ 4.2 = **1.93** ✓

(b)
- Beyond optimum temperature (40°C) ✓
- Increased kinetic energy breaks hydrogen bonds ✓
- Active site changes shape (denatures) ✓
- Substrate no longer complementary ✓
- Enzyme-substrate complex cannot form ✓

### Example 27: Chi-squared with Interpretation
**Q:** A student investigated the inheritance of two characteristics in fruit flies: wing length (normal N or vestigial v) and body colour (grey G or ebony e). The student crossed flies heterozygous for both characteristics (NnGg × NnGg).

Observed results: Normal grey: 112, Normal ebony: 41, Vestigial grey: 38, Vestigial ebony: 9

(a) State the expected ratio. (1 mark)
(b) Calculate the chi-squared value. (3 marks)
(c) The critical value at p=0.05 and df=3 is 7.81. What conclusion can be drawn? (2 marks)

**Solution:**
(a) 9:3:3:1 ✓

(b) Total = 200
Expected: 112.5, 37.5, 37.5, 12.5

χ² = (112-112.5)²/112.5 + (41-37.5)²/37.5 + (38-37.5)²/37.5 + (9-12.5)²/12.5 ✓
χ² = 0.002 + 0.327 + 0.007 + 0.980
χ² = **1.32** ✓

(c) 1.32 < 7.81 ✓
No significant difference between observed and expected ✓
Results support independent assortment / Mendelian ratio ✓

### Example 28: Practical Design Question
**Q:** Describe how you would investigate the effect of light intensity on the rate of photosynthesis using an aquatic plant. Include details of:
- The equipment you would use
- How you would control variables
- How you would ensure reliability (6 marks)

**Mark Scheme:**
Equipment:
- Aquatic plant (e.g., Elodea)
- Lamp at measured distances
- Beaker of water (with NaHCO3)
- Metre rule
- Stopwatch
- Counting oxygen bubbles or collecting gas

Control variables:
- Temperature (water bath)
- CO2 concentration (sodium hydrogencarbonate)
- Same plant/surface area
- Wavelength of light

Reliability:
- Repeats at each distance
- Calculate mean
- Equilibration time before counting
- Use same plant throughout
- Random selection of leaves

### Example 29: Standard Deviation Interpretation
**Q:** Two groups of students measured reaction times. Group A: mean = 0.25 s, SD = 0.02. Group B: mean = 0.31 s, SD = 0.08.

(a) Explain what the standard deviation values indicate about the data. (2 marks)
(b) Suggest which group's data is more reliable. Justify your answer. (2 marks)

**Solution:**
(a)
- SD measures spread of data around mean ✓
- Group B has greater variation in results ✓

(b)
- Group A more reliable ✓
- Smaller SD indicates more consistent measurements / less variation / data points closer to mean ✓

### Example 30: Correlation and Causation
**Q:** A study found a positive correlation between blood pressure and age. Explain why this does not prove that age causes high blood pressure. (3 marks)

**Solution:**
- Correlation does not prove causation ✓
- Other factors could cause both (e.g., diet, exercise, genetics) ✓
- Could be coincidental / confounding variables ✓
- Would need controlled experiment to prove causation ✓

### Example 31: Spearman's Rank Correlation
**Q:** Calculate the Spearman's rank correlation coefficient for the following data showing soil depth and number of earthworms. (4 marks)

| Site | Soil depth (cm) | Earthworms |
|------|-----------------|------------|
| A | 15 | 8 |
| B | 25 | 15 |
| C | 10 | 5 |
| D | 30 | 20 |
| E | 20 | 12 |

**Solution:**
Rank the data:
| Site | Depth Rank | Worm Rank | d | d² |
|------|------------|-----------|---|-----|
| A | 4 | 4 | 0 | 0 |
| B | 2 | 2 | 0 | 0 |
| C | 5 | 5 | 0 | 0 |
| D | 1 | 1 | 0 | 0 |
| E | 3 | 3 | 0 | 0 |

Σd² = 0 ✓
rs = 1 - (6Σd²)/(n(n²-1)) ✓
rs = 1 - (6×0)/(5×24)
rs = 1 - 0 = **+1.0** ✓
Perfect positive correlation ✓

### Example 32: Mendelian Genetics - Multiple Alleles
**Q:** In rabbits, coat colour is controlled by a gene with four alleles: C (full colour), cch (chinchilla), ch (Himalayan), and c (albino). The dominance hierarchy is C > cch > ch > c. A chinchilla rabbit (cchch) is crossed with a Himalayan rabbit (chc). What phenotypic ratio is expected in the offspring? (3 marks)

**Solution:**
Cross: cchch × chc
Gametes: cch, ch × ch, c ✓

Offspring:
- cchch = chinchilla (25%)
- cchc = chinchilla (25%)
- chch = Himalayan (25%)
- chc = Himalayan (25%) ✓

**Ratio: 2 chinchilla : 2 Himalayan (or 1:1)** ✓

### Example 33: Gene Therapy Application
**Q:** Explain how gene therapy could be used to treat cystic fibrosis. Include the role of vectors in your answer. (5 marks)

**Mark Scheme:**
- CF caused by defective CFTR gene ✓
- Normal/functional CFTR gene isolated ✓
- Gene inserted into vector (virus/liposome) ✓
- Vector delivers gene to lung epithelial cells ✓
- Gene integrated into cell/expressed ✓
- Functional CFTR protein produced ✓
- Chloride channels restored ✓
- Treatment not permanent/needs repeating ✓

### Example 34: Succession Question
**Q:** Describe the process of primary succession on bare rock. (6 marks)

**Mark Scheme (Indicative content):**
Level 3 (5-6 marks):
- Pioneer species colonise (lichens)
- Weathering of rock produces soil
- Decomposition adds organic matter
- Conditions allow other species (mosses)
- Soil depth increases
- Larger plants can grow
- More niches available
- Biodiversity increases
- Climax community reached
- Each stage changes environment

Level 2 (3-4 marks): Good sequence with some detail
Level 1 (1-2 marks): Basic understanding of succession

### Example 35: PCR Question
**Q:** Describe how the polymerase chain reaction (PCR) is used to amplify DNA. (5 marks)

**Mark Scheme:**
- DNA sample heated to 94-98°C ✓
- Hydrogen bonds break/DNA denatures ✓
- Temperature lowered to 50-65°C ✓
- Primers anneal to complementary sequences ✓
- Temperature raised to 72°C ✓
- Taq polymerase adds nucleotides ✓
- Process repeated (cycles) ✓
- Exponential amplification ✓
- 2ⁿ copies after n cycles ✓
`;

// ============================================================================
// KEY BIOLOGICAL TERMS AND DEFINITIONS (A-Level Standard)
// ============================================================================

const OCR_ALEVEL_BIOLOGY_KEY_DEFINITIONS = `
## Comprehensive Key Definitions for OCR A-Level Biology

### Module 2: Foundations in Biology

**Cell Biology Terms:**
- **Resolution:** The ability to distinguish between two separate points as distinct objects
- **Magnification:** The number of times larger an image is compared to the actual object
- **Cell fractionation:** The process of breaking up cells and separating organelles by centrifugation
- **Ultracentrifugation:** High-speed centrifugation used to separate cell components
- **Homogenisation:** Breaking open cells using a blender or homogeniser
- **Isotonic solution:** A solution with the same water potential as the cell contents
- **Differential centrifugation:** Separating organelles at different speeds

**Membrane Terms:**
- **Fluid mosaic model:** The accepted model of membrane structure with phospholipids and proteins moving freely
- **Phospholipid bilayer:** Double layer of phospholipids forming the basic membrane structure
- **Intrinsic protein:** Protein embedded within the phospholipid bilayer, spanning the membrane
- **Extrinsic protein:** Protein found on the surface of the membrane
- **Glycoprotein:** Protein with carbohydrate chain attached, involved in cell recognition
- **Glycolipid:** Lipid with carbohydrate chain attached
- **Channel protein:** Protein forming a water-filled pore for ion transport
- **Carrier protein:** Protein that changes shape to transport substances across membrane
- **Facilitated diffusion:** Passive transport of substances via proteins down concentration gradient
- **Active transport:** Movement of substances against concentration gradient using ATP
- **Osmosis:** Net movement of water molecules from higher to lower water potential through a partially permeable membrane
- **Water potential (Ψ):** The tendency of water molecules to move; measured in kPa

**Enzyme Terms:**
- **Enzyme:** Biological catalyst that lowers activation energy without being used up
- **Active site:** Region of enzyme with specific shape complementary to substrate
- **Substrate:** Molecule that binds to enzyme active site
- **Product:** Molecule(s) formed when enzyme catalyses reaction
- **Activation energy:** Minimum energy required for a reaction to occur
- **Enzyme-substrate complex:** Temporary structure formed when substrate binds to active site
- **Induced fit model:** Model where active site changes shape slightly as substrate binds
- **Lock and key model:** Model where active site has fixed shape complementary to substrate
- **Competitive inhibitor:** Molecule similar to substrate that binds to active site
- **Non-competitive inhibitor:** Molecule that binds to allosteric site, changing active site shape
- **Allosteric site:** Site on enzyme other than active site where molecules can bind
- **Vmax:** Maximum rate of reaction when all enzyme active sites are saturated
- **Km:** Substrate concentration at which reaction rate is half Vmax
- **Cofactor:** Non-protein molecule required for enzyme function
- **Coenzyme:** Organic cofactor that temporarily binds to enzyme
- **Prosthetic group:** Cofactor permanently bound to enzyme

**Biological Molecule Terms:**
- **Monomer:** Single unit that can join with others to form a polymer
- **Polymer:** Large molecule made of many repeating monomer units
- **Condensation reaction:** Reaction joining monomers with release of water
- **Hydrolysis:** Reaction breaking polymers using water
- **Peptide bond:** Covalent bond between amino acids
- **Glycosidic bond:** Covalent bond between monosaccharides
- **Ester bond:** Bond between glycerol and fatty acids in lipids
- **Primary structure:** Sequence of amino acids in a polypeptide
- **Secondary structure:** Folding into alpha helix or beta pleated sheet
- **Tertiary structure:** Overall 3D shape of a single polypeptide
- **Quaternary structure:** Arrangement of multiple polypeptide chains
- **Globular protein:** Protein folded into compact spherical shape, usually soluble
- **Fibrous protein:** Protein with elongated shape, usually insoluble

### Module 3: Exchange and Transport

**Gas Exchange Terms:**
- **Ventilation:** Movement of air in and out of gas exchange surface
- **Tidal volume:** Volume of air breathed in or out in one breath
- **Vital capacity:** Maximum volume of air that can be exhaled after maximum inhalation
- **Counter-current flow:** Flow of blood and water in opposite directions maintaining diffusion gradient
- **Surfactant:** Substance reducing surface tension in alveoli
- **Spiracle:** Opening in insect exoskeleton for gas exchange
- **Trachea:** Air tube in insects
- **Tracheole:** Fine air tube in insects delivering oxygen directly to cells

**Circulatory Terms:**
- **Cardiac cycle:** Sequence of events in one heartbeat
- **Systole:** Contraction of heart muscle
- **Diastole:** Relaxation of heart muscle
- **Cardiac output:** Volume of blood pumped by heart per minute
- **Stroke volume:** Volume of blood pumped per beat
- **Sinoatrial node (SAN):** Natural pacemaker initiating heartbeat
- **Atrioventricular node (AVN):** Conducts impulse from atria to ventricles
- **Bundle of His:** Conducts impulse from AVN to apex of heart
- **Purkinje fibres:** Conduct impulse through ventricle walls
- **Electrocardiogram (ECG):** Recording of electrical activity of heart
- **Haemoglobin:** Oxygen-carrying protein in red blood cells
- **Oxygen dissociation curve:** Graph showing relationship between pO2 and haemoglobin saturation
- **Bohr effect:** Shift in dissociation curve due to CO2/pH
- **Partial pressure:** Pressure exerted by individual gas in mixture
- **Tissue fluid:** Fluid bathing cells, formed from blood plasma

**Plant Transport Terms:**
- **Transpiration:** Loss of water vapour from plant leaves through stomata
- **Transpiration stream:** Flow of water through plant from roots to leaves
- **Cohesion-tension theory:** Explanation of water movement involving cohesion and transpiration pull
- **Cohesion:** Attraction between water molecules (hydrogen bonds)
- **Adhesion:** Attraction between water molecules and xylem wall
- **Capillarity:** Movement of water up narrow tubes
- **Translocation:** Movement of organic solutes through phloem
- **Mass flow hypothesis:** Explanation of translocation involving pressure gradients
- **Source:** Region producing or releasing sugars (e.g., leaves)
- **Sink:** Region consuming or storing sugars (e.g., roots)
- **Potometer:** Device for measuring water uptake/transpiration rate
- **Xerophyte:** Plant adapted to dry conditions
- **Hydrophyte:** Plant adapted to aquatic conditions
- **Casparian strip:** Waterproof band in endodermis cell walls

### Module 4: Biodiversity, Evolution and Disease

**Immunology Terms:**
- **Pathogen:** Organism that causes disease
- **Antigen:** Molecule (usually protein) that triggers immune response
- **Antibody:** Protein (immunoglobulin) produced by B cells, specific to antigen
- **Lymphocyte:** White blood cell involved in specific immune response
- **B lymphocyte:** Lymphocyte producing antibodies
- **T helper cell:** Lymphocyte releasing cytokines to coordinate immune response
- **T killer cell:** Lymphocyte destroying infected cells
- **Plasma cell:** Differentiated B cell producing antibodies
- **Memory cell:** Long-lived lymphocyte providing immunological memory
- **Clonal selection:** Selection and multiplication of specific lymphocytes
- **Primary immune response:** First response to antigen, relatively slow
- **Secondary immune response:** Subsequent response, faster and stronger
- **Active immunity:** Immunity from own immune system producing antibodies
- **Passive immunity:** Immunity from receiving antibodies from another organism
- **Vaccination:** Administration of antigen to stimulate immunity
- **Herd immunity:** Protection of unvaccinated individuals when most population is immune
- **Opsonisation:** Coating of pathogen with antibodies to enhance phagocytosis
- **Agglutination:** Clumping of pathogens by antibodies

**Biodiversity Terms:**
- **Species diversity:** Number and abundance of different species in area
- **Genetic diversity:** Variation in alleles within species
- **Ecosystem diversity:** Range of different ecosystems in area
- **Simpson's Index of Diversity:** Statistical measure of biodiversity
- **Quadrat:** Square frame for sampling organisms
- **Transect:** Line along which samples are taken
- **Random sampling:** Sampling where every individual has equal chance of selection
- **Systematic sampling:** Sampling at regular intervals along transect

**Evolution Terms:**
- **Natural selection:** Differential survival and reproduction based on heritable variation
- **Directional selection:** Selection favouring one extreme phenotype
- **Stabilising selection:** Selection favouring intermediate phenotype
- **Disruptive selection:** Selection favouring both extreme phenotypes
- **Genetic drift:** Random changes in allele frequency in small populations
- **Gene flow:** Movement of alleles between populations
- **Speciation:** Formation of new species
- **Allopatric speciation:** Speciation due to geographical isolation
- **Sympatric speciation:** Speciation without geographical isolation
- **Reproductive isolation:** Inability to interbreed and produce fertile offspring
- **Phylogeny:** Evolutionary history of a group of organisms

### Module 5: Communication, Homeostasis and Energy

**Neurophysiology Terms:**
- **Resting potential:** Electrical potential difference across membrane at rest (-70mV)
- **Action potential:** Rapid reversal of membrane potential during nerve impulse
- **Depolarisation:** Change in membrane potential towards positive values
- **Repolarisation:** Return of membrane potential to resting value
- **Hyperpolarisation:** Membrane potential becoming more negative than resting
- **Threshold:** Minimum depolarisation required to trigger action potential
- **All-or-nothing principle:** Action potentials are all same size or don't occur
- **Refractory period:** Time when neurone cannot fire another action potential
- **Saltatory conduction:** Jumping of action potential between nodes of Ranvier
- **Synapse:** Junction between two neurones
- **Neurotransmitter:** Chemical released at synapse (e.g., acetylcholine)
- **Synaptic cleft:** Gap between presynaptic and postsynaptic membranes
- **Summation:** Addition of effects of multiple stimuli

**Homeostasis Terms:**
- **Homeostasis:** Maintenance of constant internal environment
- **Negative feedback:** Response that opposes change, restoring set point
- **Positive feedback:** Response that amplifies change
- **Effector:** Organ or cell that produces response
- **Receptor:** Cell or structure detecting stimulus
- **Set point:** Normal/optimal value maintained by homeostasis
- **Thermoregulation:** Maintenance of body temperature
- **Osmoregulation:** Maintenance of water potential of body fluids
- **Ultrafiltration:** Filtration of blood under pressure in glomerulus
- **Selective reabsorption:** Reabsorption of useful substances in nephron
- **ADH (antidiuretic hormone):** Hormone controlling water reabsorption in kidney
- **Loop of Henle:** Part of nephron creating concentration gradient in medulla
- **Counter-current multiplier:** Mechanism creating concentration gradient in kidney

**Photosynthesis Terms:**
- **Photosynthesis:** Process converting light energy to chemical energy in organic molecules
- **Chloroplast:** Organelle where photosynthesis occurs
- **Thylakoid:** Membrane system inside chloroplast
- **Granum:** Stack of thylakoids
- **Stroma:** Fluid-filled matrix of chloroplast
- **Photosystem:** Cluster of pigment molecules capturing light
- **Light-dependent reaction:** Reactions requiring light (thylakoid)
- **Light-independent reaction:** Reactions not directly requiring light (stroma)
- **Photophosphorylation:** ATP synthesis using light energy
- **Photolysis:** Splitting of water molecules using light energy
- **Calvin cycle:** Cycle of reactions fixing CO2 into organic molecules
- **RuBisCO:** Enzyme catalysing carbon fixation
- **Ribulose bisphosphate (RuBP):** 5C molecule accepting CO2
- **Glycerate 3-phosphate (GP):** 3C molecule formed from carbon fixation
- **Triose phosphate (TP):** 3C molecule formed from GP reduction
- **Limiting factor:** Factor in shortest supply that limits rate of process

**Respiration Terms:**
- **Respiration:** Process releasing energy from organic molecules
- **Glycolysis:** Breakdown of glucose to pyruvate in cytoplasm
- **Link reaction:** Conversion of pyruvate to acetyl CoA
- **Krebs cycle:** Cycle of reactions in mitochondrial matrix
- **Oxidative phosphorylation:** ATP synthesis using electron transport chain
- **Electron transport chain:** Series of carriers transferring electrons
- **Chemiosmosis:** ATP synthesis driven by proton gradient
- **ATP synthase:** Enzyme synthesising ATP from ADP and Pi
- **Substrate-level phosphorylation:** ATP synthesis without electron transport chain
- **Decarboxylation:** Removal of carbon dioxide from molecule
- **Dehydrogenation:** Removal of hydrogen from molecule
- **NAD:** Coenzyme accepting hydrogen in respiration
- **FAD:** Coenzyme accepting hydrogen in Krebs cycle
- **Anaerobic respiration:** Respiration without oxygen
- **Lactate fermentation:** Anaerobic pathway producing lactate
- **Alcoholic fermentation:** Anaerobic pathway producing ethanol and CO2

### Module 6: Genetics, Evolution and Ecosystems

**Genetics Terms:**
- **Gene:** Sequence of DNA nucleotides coding for polypeptide or functional RNA
- **Allele:** Alternative form of a gene
- **Locus:** Position of gene on chromosome
- **Genotype:** Genetic makeup of an organism
- **Phenotype:** Observable characteristics of organism
- **Dominant:** Allele expressed in heterozygote
- **Recessive:** Allele only expressed in homozygote
- **Codominance:** Both alleles equally expressed in heterozygote
- **Sex linkage:** Genes located on sex chromosomes
- **Autosomal linkage:** Genes on same autosome inherited together
- **Epistasis:** Interaction where one gene affects expression of another
- **Polygenic inheritance:** Characteristic controlled by multiple genes
- **Mutation:** Change in DNA base sequence
- **Transcription:** Synthesis of mRNA from DNA template
- **Translation:** Synthesis of polypeptide from mRNA template
- **Codon:** Three-base sequence coding for amino acid
- **Anticodon:** Three-base sequence on tRNA complementary to codon

**Biotechnology Terms:**
- **Restriction enzyme:** Enzyme cutting DNA at specific sequence
- **Ligase:** Enzyme joining DNA fragments
- **Vector:** DNA molecule carrying foreign DNA into cell
- **Plasmid:** Small circular DNA molecule in bacteria
- **Transformation:** Uptake of foreign DNA by cell
- **Recombinant DNA:** DNA containing sequences from different sources
- **PCR:** Technique for amplifying DNA
- **Gel electrophoresis:** Technique for separating DNA fragments by size
- **Gene therapy:** Treatment using genes to treat genetic disorders
- **Genetic screening:** Testing for genetic disorders
- **CRISPR-Cas9:** Gene editing technology

**Ecology Terms:**
- **Ecosystem:** Community of organisms and their abiotic environment
- **Habitat:** Place where organism lives
- **Niche:** Role of organism in ecosystem
- **Trophic level:** Position in food chain
- **Producer:** Organism making organic molecules from inorganic
- **Consumer:** Organism obtaining energy from other organisms
- **Decomposer:** Organism breaking down dead organic matter
- **Food chain:** Sequence showing energy flow through organisms
- **Food web:** Interconnected food chains
- **Gross primary productivity (GPP):** Total energy fixed by producers
- **Net primary productivity (NPP):** Energy available after producer respiration
- **Succession:** Change in community composition over time
- **Pioneer species:** First species to colonise new habitat
- **Climax community:** Stable final stage of succession
- **Carrying capacity:** Maximum population size environment can sustain
- **Eutrophication:** Excessive nutrient enrichment of water body
`;

// ============================================================================
// PRACTICAL ACTIVITY GROUP (PAG) GUIDANCE
// ============================================================================

const OCR_ALEVEL_BIOLOGY_PAG_GUIDANCE = `
## OCR A-Level Biology Practical Activity Groups (PAGs)

### Overview of Practical Endorsement
- Practical endorsement is a separate pass/fail qualification
- Does not contribute to A-Level grade
- Assessed by teachers using CPAC criteria
- Students must demonstrate competency in all 5 CPACs
- 12 PAGs covering the required practical activities

### CPAC Criteria
**CPAC 1:** Follow written procedures
- Correctly follows instructions
- Uses equipment appropriately
- Adapts procedures when necessary

**CPAC 2:** Apply investigative approaches and methods
- Identifies variables
- Designs suitable procedures
- Evaluates methods and suggests improvements

**CPAC 3:** Safely use a range of practical equipment and materials
- Uses appropriate techniques
- Follows safety procedures
- Handles materials correctly

**CPAC 4:** Make and record observations
- Records data accurately
- Uses appropriate units
- Presents data in suitable format

**CPAC 5:** Research, reference and report
- Uses scientific literature
- Provides appropriate references
- Writes formal reports

### PAG 1: Microscopy
**Skills assessed:**
- Use of light microscopes
- Preparation of slides
- Making biological drawings
- Measuring using eyepiece graticule
- Calculating magnification

**Required activities:**
- Observing and drawing cells
- Using stage micrometer to calibrate eyepiece graticule
- Calculating actual size of structures

**Key calculations:**
- Magnification = Image size ÷ Actual size
- Actual size = Image size ÷ Magnification

**Exam questions often ask about:**
- Sources of error in measurements
- Comparing resolution of microscopes
- Drawing conventions
- Artefacts in preparation

### PAG 2: Dissection
**Skills assessed:**
- Safe dissection techniques
- Observation and identification of structures
- Recording observations
- Risk assessment

**Required activities:**
- Dissection of gas exchange system (fish gills or insect)
- Dissection of heart
- Dissection of plant tissue

**Key points:**
- Use of appropriate dissection tools
- Identification of structures
- Recording observations accurately
- Safety considerations (scalpels, biological hazards)

**Exam questions often ask about:**
- Structure-function relationships
- Identifying tissues
- Explaining adaptations

### PAG 3: Sampling Techniques
**Skills assessed:**
- Random and systematic sampling
- Use of quadrats and transects
- Mark-release-recapture
- Calculating biodiversity indices

**Required activities:**
- Random sampling using quadrats
- Belt transect or interrupted belt transect
- Mark-release-recapture for mobile organisms

**Key calculations:**
- Simpson's Index: D = 1 - Σ(n/N)²
- Lincoln Index: N = (n₁ × n₂) ÷ n₃
- Percentage cover
- Species frequency

**Exam questions often ask about:**
- Validity of sampling methods
- Assumptions of mark-release-recapture
- Sample size considerations
- Statistical analysis

### PAG 4: Rates of Enzyme Activity
**Skills assessed:**
- Measuring reaction rates
- Controlling variables
- Continuous and discontinuous monitoring
- Data analysis

**Required activities:**
- Effect of temperature on enzyme activity
- Effect of pH on enzyme activity
- Effect of substrate concentration

**Key calculations:**
- Rate = 1/time or product formed/time
- Q10 = Rate at (T+10) ÷ Rate at T

**Methods:**
- Colorimeter for colour change
- Gas syringe for gas production
- Timing colour change

**Exam questions often ask about:**
- Sources of error
- Improving accuracy
- Explaining results using enzyme theory
- Analysing rate curves

### PAG 5: Colorimetry
**Skills assessed:**
- Use of colorimeter
- Constructing calibration curves
- Quantitative measurements
- Data analysis

**Required activities:**
- Calibration curve construction
- Measuring concentration of unknown solution
- Reducing sugar tests

**Key points:**
- Using appropriate filter
- Blanking colorimeter
- Serial dilution
- Reading from calibration curve

**Exam questions often ask about:**
- Interpreting calibration curves
- Sources of error
- Explaining absorbance values

### PAG 6: Chromatography
**Skills assessed:**
- Paper or thin layer chromatography
- Calculating Rf values
- Identifying substances
- Recording results

**Required activities:**
- Separation of photosynthetic pigments
- Identification using Rf values

**Key calculations:**
- Rf = Distance moved by solute ÷ Distance moved by solvent

**Exam questions often ask about:**
- Explaining separation
- Identifying pigments
- Sources of error

### PAG 7: Transport in and out of Cells
**Skills assessed:**
- Investigating osmosis
- Measuring water potential
- Recording data
- Analysis and interpretation

**Required activities:**
- Effect of solute concentration on plant tissue mass
- Determining water potential of tissue

**Key calculations:**
- Percentage change = (change ÷ original) × 100
- Plotting and interpreting graphs
- Determining water potential from graph

**Exam questions often ask about:**
- Explaining results using osmosis
- Sources of error
- Water potential calculations

### PAG 8: Measuring Rates of Respiration
**Skills assessed:**
- Use of respirometer
- Controlling variables
- Measuring gas exchange
- Data analysis

**Required activities:**
- Using respirometer to measure oxygen consumption
- Comparing respiration rates under different conditions

**Key calculations:**
- Rate of respiration
- Respiratory quotient (RQ)

**Exam questions often ask about:**
- Explaining respirometer design
- Sources of error
- Interpreting RQ values

### PAG 9: Production of Fermentation Products
**Skills assessed:**
- Aseptic technique
- Measuring products
- Controlling variables
- Evaluating results

**Required activities:**
- Investigating fermentation by yeast
- Measuring ethanol or CO2 production

**Key points:**
- Aseptic technique importance
- Controlling temperature
- Measuring products accurately

### PAG 10: Investigation Using a Data Logger
**Skills assessed:**
- Using data logging equipment
- Setting up experiments
- Analysing continuous data
- Recording and presenting data

**Required activities:**
- Heart rate monitoring
- Temperature logging
- pH changes

**Exam questions often ask about:**
- Advantages of data logging
- Analysing continuous data
- Sources of error

### PAG 11: Investigating Plant Responses
**Skills assessed:**
- Setting up controlled experiments
- Measuring plant responses
- Controlling variables
- Analysis and evaluation

**Required activities:**
- Investigating phototropism or gravitropism
- Effect of plant hormones on growth

**Key points:**
- Controlling light direction
- Measuring growth accurately
- Long-term experiments

### PAG 12: Investigating Animal Responses
**Skills assessed:**
- Behavioural observations
- Choice chamber experiments
- Recording data
- Statistical analysis

**Required activities:**
- Taxis or kinesis in invertebrates
- Choice chamber experiments

**Key points:**
- Ethical considerations
- Control experiments
- Statistical analysis of results

### Common Practical Exam Questions

**Planning Questions:**
- Describe how you would investigate...
- Design an experiment to test...
- What control would you use?
- Identify independent, dependent, and control variables

**Analysis Questions:**
- Calculate the rate of...
- Describe the trend shown by...
- Explain the results in terms of...
- What conclusions can be drawn?

**Evaluation Questions:**
- Suggest sources of error
- How could the investigation be improved?
- Comment on the validity of the method
- Discuss the reliability of the results
`;

// ============================================================================
// COMMAND WORDS WITH DETAILED EXPLANATIONS AND EXAMPLES
// ============================================================================

const OCR_ALEVEL_BIOLOGY_COMMAND_WORDS = `
## OCR A-Level Biology Command Words

### Calculate
**Meaning:** Obtain a numerical answer, showing relevant working.

**Requirements:**
- Show all steps of calculation
- Include units in answer
- Use appropriate significant figures

**Example Q:** Calculate the cardiac output if stroke volume is 70 cm³ and heart rate is 75 bpm. [2]

**Model Answer:**
Cardiac output = Stroke volume × Heart rate
= 70 × 75
= 5250 cm³ min⁻¹ (or 5.25 dm³ min⁻¹)

### Compare
**Meaning:** Identify similarities AND differences.

**Requirements:**
- Must include both similarities and differences
- Use comparative language (both, whereas, however)
- Link points clearly

**Example Q:** Compare mitosis and meiosis. [4]

**Model Answer:**
Both mitosis and meiosis involve DNA replication before division. However, mitosis produces two diploid cells whereas meiosis produces four haploid cells. Mitosis involves one division, but meiosis involves two. Crossing over only occurs in meiosis, not mitosis.

### Describe
**Meaning:** Give an account in words; state what is happening.

**Requirements:**
- State observations or facts
- No explanation required
- Be specific and detailed

**Example Q:** Describe the structure of a plasma membrane. [4]

**Model Answer:**
The membrane consists of a phospholipid bilayer with hydrophilic heads facing outward and hydrophobic tails facing inward. Proteins are embedded in the membrane, some spanning the full width (intrinsic) and some on the surface (extrinsic). Cholesterol molecules are interspersed between phospholipids. Carbohydrate chains are attached to some proteins and lipids.

### Describe and Explain
**Meaning:** State what happens AND give reasons why.

**Requirements:**
- State the observations/facts
- Give scientific reasons
- Link cause and effect

**Example Q:** Describe and explain the effect of increasing temperature on enzyme activity. [4]

**Model Answer:**
As temperature increases, enzyme activity increases initially because molecules have more kinetic energy and collide more frequently. Above the optimum temperature, activity decreases because hydrogen bonds break, changing the shape of the active site (denaturation). The substrate can no longer fit, so fewer enzyme-substrate complexes form.

### Discuss
**Meaning:** Present key points about different ideas or arguments.

**Requirements:**
- Consider multiple viewpoints
- Present evidence for each
- May reach a conclusion

**Example Q:** Discuss the advantages and disadvantages of using pesticides in agriculture. [6]

### Evaluate
**Meaning:** Review information and make a judgement.

**Requirements:**
- Consider strengths and weaknesses
- Use evidence to support points
- Reach a reasoned conclusion

**Example Q:** Evaluate the use of GM crops to improve food security. [6]

### Explain
**Meaning:** Give reasons using scientific knowledge and understanding.

**Requirements:**
- State the reason/cause
- Use scientific terminology
- Show understanding of mechanism

**Example Q:** Explain why the loop of Henle is important in producing concentrated urine. [4]

**Model Answer:**
The loop of Henle creates a concentration gradient in the medulla through counter-current multiplication. The descending limb is permeable to water, which leaves by osmosis, concentrating the filtrate. The ascending limb actively pumps out sodium and chloride ions, adding to the gradient. This allows water to be reabsorbed from the collecting duct when ADH is present.

### Justify
**Meaning:** Support a case with evidence and reasoning.

**Requirements:**
- State your position
- Provide evidence/reasons
- Link evidence to conclusion

**Example Q:** A student concluded that enzyme activity doubled when substrate concentration doubled. Justify whether this conclusion is valid. [3]

### Name/State/Give
**Meaning:** Brief answer; no explanation needed.

**Requirements:**
- Short, precise answer
- Correct scientific terminology
- No elaboration needed

**Example Q:** Name the site of the light-dependent reactions. [1]

**Model Answer:** Thylakoid membrane

### Outline
**Meaning:** Set out main points; brief description.

**Requirements:**
- Key points only
- Less detail than "describe"
- Logical sequence

**Example Q:** Outline the process of translation. [4]

**Model Answer:**
mRNA attaches to ribosome. tRNA with anticodon complementary to codon brings amino acid. Peptide bond forms between amino acids. Ribosome moves along mRNA. Process repeats until stop codon reached.

### Suggest
**Meaning:** Apply knowledge to unfamiliar situations; propose an explanation.

**Requirements:**
- Use scientific knowledge
- Apply to new context
- Accept reasonable answers

**Example Q:** Suggest why deep-sea fish have more unsaturated fatty acids in their cell membranes. [2]

**Model Answer:**
Unsaturated fatty acids have lower melting points, keeping the membrane fluid at low temperatures in deep water. This maintains membrane function for transport and communication.

### Use the Data/Information
**Meaning:** Answer must reference the data provided.

**Requirements:**
- Quote specific values from data
- Use data to support answer
- Don't just describe data

**Example Q:** Use the data to explain the trend in enzyme activity. [3]

### Show That
**Meaning:** Provide structured working to reach given answer.

**Requirements:**
- All steps clearly shown
- Must reach the stated answer
- Working must be logical

### What is Meant by
**Meaning:** Give a definition.

**Requirements:**
- Precise definition
- Correct terminology
- Concise answer

**Example Q:** What is meant by the term 'water potential'? [2]

**Model Answer:**
The potential energy of water molecules; the tendency of water to move from one place to another. Measured in kPa, with pure water having a water potential of zero.
`;

// ============================================================================
// COMMON MISCONCEPTIONS IN A-LEVEL BIOLOGY
// ============================================================================

const OCR_ALEVEL_BIOLOGY_MISCONCEPTIONS = `
## Common Misconceptions in OCR A-Level Biology

### Cell Biology Misconceptions

**Misconception:** "All cells have a nucleus"
**Correction:** Prokaryotic cells lack a membrane-bound nucleus. Red blood cells in mammals lose their nucleus.

**Misconception:** "Mitochondria produce energy"
**Correction:** Mitochondria release energy from organic molecules and use it to synthesise ATP. Energy is not created.

**Misconception:** "Osmosis is the movement of water from high to low concentration"
**Correction:** Osmosis is movement of water from higher water potential to lower water potential. Water potential considers both solute concentration and pressure.

**Misconception:** "Active transport always moves substances against a concentration gradient"
**Correction:** Active transport uses ATP, but may move substances in either direction depending on the carrier protein function.

**Misconception:** "Cell membranes are like barriers that block everything"
**Correction:** Cell membranes are selectively permeable. Small non-polar molecules can pass freely. Proteins facilitate transport of other substances.

### Enzyme Misconceptions

**Misconception:** "Enzymes are killed/used up at high temperatures"
**Correction:** Enzymes are denatured (their shape is changed), not killed. They are not alive and cannot die. They are not used up in reactions.

**Misconception:** "Enzymes work faster as temperature keeps increasing"
**Correction:** Enzyme activity increases up to an optimum temperature, then decreases due to denaturation.

**Misconception:** "Non-competitive inhibitors compete with the substrate"
**Correction:** Non-competitive inhibitors bind to a different site (allosteric site), not the active site. They do not compete with substrate.

**Misconception:** "Lock and key model explains how enzymes work"
**Correction:** The induced fit model is now accepted as more accurate. The active site changes shape slightly when substrate binds.

### Genetics Misconceptions

**Misconception:** "Dominant alleles are more common in populations"
**Correction:** Dominant refers to expression, not frequency. Recessive alleles can be more common (e.g., blue eyes in some populations).

**Misconception:** "Evolution means organisms choose to adapt"
**Correction:** Evolution occurs through natural selection of random variations. Organisms cannot choose to develop adaptations.

**Misconception:** "Mutations are always harmful"
**Correction:** Most mutations are neutral. Some are beneficial. Only some are harmful. Context determines effect.

**Misconception:** "Humans evolved from chimpanzees"
**Correction:** Humans and chimpanzees share a common ancestor. Neither evolved from the other.

**Misconception:** "DNA replication produces two identical molecules"
**Correction:** DNA replication aims to produce identical copies, but errors (mutations) can occur.

### Respiration and Photosynthesis Misconceptions

**Misconception:** "Plants only respire at night"
**Correction:** Plants respire continuously, day and night. During the day, photosynthesis may exceed respiration.

**Misconception:** "Photosynthesis is the opposite of respiration"
**Correction:** While the overall equations appear opposite, the processes are different. They occur in different organelles with different enzymes.

**Misconception:** "ATP is produced only in mitochondria"
**Correction:** ATP is also produced in chloroplasts during photosynthesis and in the cytoplasm during glycolysis.

**Misconception:** "Glucose is the only respiratory substrate"
**Correction:** Cells can respire lipids, proteins, and other carbohydrates, not just glucose.

**Misconception:** "Anaerobic respiration does not produce any ATP"
**Correction:** Anaerobic respiration produces 2 ATP per glucose (from glycolysis), just no additional ATP from oxidative phosphorylation.

### Nervous System Misconceptions

**Misconception:** "Nerves conduct electrical signals like wires"
**Correction:** Nerve impulses are electrochemical events involving ion movements, not flow of electrons.

**Misconception:** "Larger action potentials carry more information"
**Correction:** Action potentials are all-or-nothing. Information is coded by frequency of impulses, not size.

**Misconception:** "Neurotransmitters are electrical signals"
**Correction:** Neurotransmitters are chemical messengers that cross the synaptic cleft.

**Misconception:** "Synapses slow down transmission and are therefore bad"
**Correction:** Synapses allow integration, summation, and modulation of signals. They are essential for nervous system function.

### Homeostasis Misconceptions

**Misconception:** "Negative feedback makes things negative"
**Correction:** Negative feedback opposes change, returning values toward the set point. It can increase or decrease values.

**Misconception:** "ADH makes urine more dilute"
**Correction:** ADH causes water reabsorption, making urine more concentrated, not more dilute.

**Misconception:** "The kidney removes urea from the blood"
**Correction:** The kidney filters all small molecules, then selectively reabsorbs useful ones. It doesn't specifically target urea.

### Ecology Misconceptions

**Misconception:** "Food chains show what organisms eat"
**Correction:** Food chains show energy flow, not just feeding relationships. Energy transfer efficiency is key.

**Misconception:** "Ecosystems are in balance/equilibrium"
**Correction:** Ecosystems are dynamic systems that change over time. Succession shows this clearly.

**Misconception:** "Decomposers are at the end of food chains"
**Correction:** Decomposers obtain energy from dead organisms at all trophic levels, not just the end.

**Misconception:** "More biodiversity is always better"
**Correction:** Biodiversity has optimal levels for different ecosystems. Some ecosystems are naturally low in diversity.

### Immune System Misconceptions

**Misconception:** "Antibodies kill pathogens"
**Correction:** Antibodies bind to antigens and may neutralise pathogens, cause agglutination, or mark for destruction by phagocytes.

**Misconception:** "Vaccines contain the disease"
**Correction:** Vaccines contain antigens (often inactivated or parts of pathogens), not the disease itself.

**Misconception:** "Antibiotics kill viruses"
**Correction:** Antibiotics only work against bacteria. Antiviral drugs are needed for viral infections.

### Statistical Misconceptions

**Misconception:** "Correlation proves causation"
**Correction:** Correlation shows a relationship but does not prove one variable causes the other.

**Misconception:** "A significant result proves the hypothesis"
**Correction:** Statistical significance means the result is unlikely due to chance. It doesn't prove the hypothesis is correct.

**Misconception:** "If p > 0.05, there is no effect"
**Correction:** p > 0.05 means we cannot reject the null hypothesis. There may still be an effect that the test couldn't detect.
`;

// ============================================================================
// MATHEMATICAL SKILLS FOR A-LEVEL BIOLOGY
// ============================================================================

const OCR_ALEVEL_BIOLOGY_MATHEMATICAL_SKILLS = `
## Mathematical Skills Required for OCR A-Level Biology

### Arithmetic and Numerical Computation (All Papers)

**Percentages:**
- Percentage change = ((final - initial) ÷ initial) × 100
- Percentage of total = (part ÷ whole) × 100

**Ratios:**
- Expressing ratios (e.g., 9:3:3:1)
- Simplifying ratios
- Using ratios in genetics

**Fractions and Decimals:**
- Converting between forms
- Using in calculations

**Powers and Standard Form:**
- Using powers of 10 (e.g., 10⁶ = 1,000,000)
- Converting to/from standard form
- Calculations with standard form

**Example:** Convert 0.000025 m to standard form
Answer: 2.5 × 10⁻⁵ m

### Handling Data

**Mean, Median, Mode:**
- Mean = sum of values ÷ number of values
- Median = middle value when ordered
- Mode = most frequent value

**Standard Deviation:**
- Measures spread of data around mean
- s = √[Σ(x - x̄)² ÷ (n-1)]
- Larger SD = more spread
- Use for error bars

**Calculating Standard Deviation:**
1. Calculate mean
2. Subtract mean from each value
3. Square each difference
4. Sum the squares
5. Divide by (n-1)
6. Take square root

**Range:**
- Range = maximum - minimum
- Simple measure of spread

**Error Bars:**
- Usually represent ± 1 SD or ± standard error
- Overlapping error bars suggest no significant difference

### Graphs and Charts

**Types Required:**
- Line graphs (continuous data)
- Bar charts (discrete/categorical data)
- Scatter graphs (two variables)
- Histograms (frequency distributions)
- Pie charts (proportions)

**Key Skills:**
- Choosing appropriate scales
- Plotting points accurately
- Drawing lines of best fit
- Calculating gradient/rate from graph
- Reading values from graphs
- Identifying anomalies

**Calculating Rate from Graph:**
- Rate = change in y ÷ change in x
- For curves: draw tangent, calculate gradient

**Example:** Calculate rate of oxygen production from graph
- At 2 min: 8 cm³
- At 4 min: 20 cm³
- Rate = (20 - 8) ÷ (4 - 2) = 6 cm³/min

### Algebra

**Rearranging Equations:**
- Magnification = Image size ÷ Actual size
- ∴ Actual size = Image size ÷ Magnification

**Substitution:**
- Replace variables with values
- Show working clearly

### Statistical Tests

**Chi-Squared Test (χ²):**
Used to compare observed and expected results (categorical data)

Formula: χ² = Σ[(O - E)² ÷ E]

Steps:
1. State null hypothesis
2. Calculate expected values
3. Calculate (O - E)² ÷ E for each category
4. Sum to get χ²
5. Determine degrees of freedom (df = categories - 1)
6. Compare to critical value at p = 0.05
7. If χ² > critical value, reject null hypothesis

**Student's t-test:**
Used to compare two means (continuous data)

Formula: t = (x̄₁ - x̄₂) ÷ √(s₁²/n₁ + s₂²/n₂)

Steps:
1. State null hypothesis (no significant difference)
2. Calculate mean and variance for each sample
3. Substitute into formula
4. Determine df = n₁ + n₂ - 2
5. Compare to critical value
6. If |t| > critical value, reject null hypothesis

**Spearman's Rank Correlation:**
Used to test correlation between two variables

Formula: rs = 1 - [6Σd² ÷ n(n² - 1)]

Steps:
1. Rank both variables
2. Calculate difference (d) between ranks
3. Square differences and sum
4. Substitute into formula
5. Compare to critical value
6. rs closer to +1 or -1 = stronger correlation

**Interpreting Results:**
- p < 0.05: significant result, reject null hypothesis
- p > 0.05: not significant, accept null hypothesis
- Always state conclusion in context

### Biological Calculations

**Magnification:**
M = I ÷ A
- M = magnification
- I = image size
- A = actual size

**Surface Area to Volume Ratio:**
SA:V = Surface area ÷ Volume
- Larger organisms have lower SA:V
- Important for exchange

**Cardiac Output:**
CO = SV × HR
- CO = cardiac output (dm³/min)
- SV = stroke volume (cm³ or dm³)
- HR = heart rate (bpm)

**Water Potential:**
Ψ = Ψs + Ψp
- Ψ = water potential (kPa)
- Ψs = solute potential (always negative)
- Ψp = pressure potential

**Hardy-Weinberg:**
p + q = 1 (allele frequencies)
p² + 2pq + q² = 1 (genotype frequencies)

**Simpson's Index:**
D = 1 - Σ(n/N)²
- D closer to 1 = higher diversity
- n = number of individuals of species
- N = total number of individuals

**Lincoln Index:**
N = (n₁ × n₂) ÷ n₃
- N = population estimate
- n₁ = number marked in first sample
- n₂ = number in second sample
- n₃ = number marked in second sample

**Respiratory Quotient:**
RQ = CO₂ produced ÷ O₂ consumed
- RQ = 1.0: carbohydrate
- RQ ≈ 0.7: lipid
- RQ ≈ 0.8: protein

**Primary Productivity:**
NPP = GPP - R
- NPP = net primary productivity
- GPP = gross primary productivity
- R = respiratory losses

**Percentage Energy Transfer:**
Efficiency = (Energy out ÷ Energy in) × 100

### Units and Conversions

**Length:**
- 1 m = 1000 mm
- 1 mm = 1000 μm
- 1 μm = 1000 nm

**Volume:**
- 1 dm³ = 1000 cm³
- 1 cm³ = 1000 mm³
- 1 dm³ = 1 litre

**Time:**
- 1 hour = 60 minutes
- 1 minute = 60 seconds

**Concentration:**
- mol dm⁻³ (molar)
- g dm⁻³
- % (w/v or v/v)

### Significant Figures

**Rules:**
- Count all digits except leading zeros
- Trailing zeros after decimal point count
- In calculations, use same sf as least precise value

**Example:**
2.5 × 3.14159 = 7.85 (2 sf, matching 2.5)
`;

// ============================================================================
// EXTENDED RESPONSE QUESTION GUIDANCE
// ============================================================================

const OCR_ALEVEL_BIOLOGY_EXTENDED_RESPONSE_GUIDANCE = `
## Extended Response Question Guidance for OCR A-Level Biology

### Understanding Extended Response Questions

**What are extended response questions?**
- Questions worth 6+ marks
- Require detailed, structured answers
- Marked using levels descriptors
- Test depth of understanding
- Assess quality of scientific communication

**Where do they appear?**
- Paper 1: At least two 6-mark questions
- Paper 2: At least two 6-mark questions
- Paper 3: At least one 9-mark question

### Level Descriptors (6-mark questions)

**Level 3 (5-6 marks):**
- Detailed knowledge and understanding
- Accurate use of scientific terminology
- Clear, logical structure
- All key points covered
- Links between concepts explained

**Level 2 (3-4 marks):**
- Good knowledge with some gaps
- Generally correct terminology
- Some structure
- Most key points present
- Some linking of concepts

**Level 1 (1-2 marks):**
- Basic knowledge
- Limited terminology
- Little structure
- Few key points
- Minimal linking

**Level 0 (0 marks):**
- No relevant content

### Strategies for Success

**1. Analyse the Question**
- Identify command word (Describe, Explain, Compare, Discuss)
- Identify topic(s) being tested
- Note mark allocation
- Identify if synoptic (linking topics)

**2. Plan Your Answer**
- Spend 1-2 minutes planning
- List key points
- Decide on structure
- Consider relevant examples

**3. Structure Your Answer**
- Introduction (brief context)
- Main body (organised paragraphs)
- Link between paragraphs
- Conclusion if appropriate

**4. Use Scientific Terminology**
- Use correct terms consistently
- Define key terms where appropriate
- Avoid vague language

**5. Make Clear Links**
- Show cause and effect
- Explain mechanisms
- Connect different concepts

### Common Extended Response Topics

**Module 2-4 (Paper 1):**
- Enzyme inhibition and kinetics
- Membrane transport mechanisms
- Gas exchange adaptations
- Cardiac cycle and control
- Oxygen transport and dissociation curves
- Plant transport mechanisms
- Immune response to pathogens
- Vaccination and immunity
- Natural selection and evolution

**Module 5-6 (Paper 2):**
- Action potentials and nerve transmission
- Synaptic transmission
- Homeostasis (thermoregulation, osmoregulation)
- Kidney function
- Photosynthesis light-dependent/independent reactions
- Respiration stages
- Gene expression and regulation
- Genetic crosses and inheritance
- Ecosystem energy flow
- Nutrient cycling

**Synoptic (Paper 3):**
- Links between membrane structure and function
- ATP synthesis in different organelles
- Control systems (nervous and hormonal)
- Adaptations for different environments
- Evolution and classification
- Human impact on ecosystems

### Example Extended Response with Commentary

**Question:** Describe and explain the light-dependent reactions of photosynthesis. [6]

**Poor Answer (Level 1):**
"Light reactions happen in the chloroplast. Light energy is used to make ATP. Water is split and oxygen is released. NADP is also made."

**Commentary:** Basic understanding, vague terminology, no detail on mechanism, no structure.

**Good Answer (Level 3):**
"The light-dependent reactions occur on the thylakoid membranes within the chloroplast.

Light energy is absorbed by photosynthetic pigments, including chlorophyll a, chlorophyll b, and accessory pigments, in photosystems I and II. This energy excites electrons in the chlorophyll molecules.

In photosystem II, the excited electrons are passed along an electron transport chain, which includes carriers such as plastoquinone and cytochromes. As electrons move through the chain, they release energy that is used to pump hydrogen ions (protons) from the stroma into the thylakoid space, creating a proton gradient.

This proton gradient drives ATP synthesis through chemiosmosis, as protons flow back through ATP synthase. This process is called photophosphorylation.

The electrons lost from photosystem II are replaced by photolysis of water. Water molecules are split using light energy, releasing oxygen as a by-product: 2H₂O → 4H⁺ + 4e⁻ + O₂

In photosystem I, electrons are re-excited by light and passed to NADP reductase, where they combine with protons and NADP⁺ to form NADPH.

The ATP and NADPH produced are used in the light-independent reactions (Calvin cycle) to fix carbon dioxide into organic molecules."

**Commentary:** Detailed and accurate, correct terminology throughout, clear logical structure, mechanisms explained, all key points covered.

### Timing and Mark Allocation

**6-mark question:**
- Allow approximately 10-12 minutes
- Aim for 150-250 words
- Cover 6-8 key points

**9-mark question (Paper 3):**
- Allow approximately 15-18 minutes
- Aim for 250-400 words
- Cover 8-12 key points
- Include synoptic links

### Common Mistakes to Avoid

1. **Not reading the question carefully**
   - Missing part of what's asked
   - Confusing similar topics

2. **Lacking structure**
   - Random list of points
   - No logical flow

3. **Vague or imprecise language**
   - "Stuff moves"
   - "It makes energy"

4. **Missing key terminology**
   - Using everyday words instead of scientific terms

5. **Incomplete explanations**
   - Describing what happens but not why

6. **Going off topic**
   - Including irrelevant information

7. **Running out of time**
   - Not allowing enough time for planning/writing

### Practice Topics

Practice extended responses on these commonly examined topics:

1. Enzyme inhibition mechanisms
2. The cardiac cycle
3. Oxygen dissociation curves and the Bohr effect
4. Immune response to infection
5. Action potential generation and transmission
6. The role of the loop of Henle
7. Light-dependent reactions of photosynthesis
8. Oxidative phosphorylation
9. Gene expression in prokaryotes (lac operon)
10. Energy transfer in ecosystems
`;

// ============================================================================
// SYNOPTIC ASSESSMENT PREPARATION
// ============================================================================

const OCR_ALEVEL_BIOLOGY_SYNOPTIC_PREPARATION = `
## Synoptic Assessment Preparation for OCR A-Level Biology

### What is Synoptic Assessment?

Synoptic assessment tests your ability to:
- Make connections between different areas of biology
- Apply knowledge from multiple modules to new contexts
- Understand overarching biological themes
- Think critically about biological systems

### Paper 3: Unified Biology (H420/03)

**Characteristics:**
- 1 hour 30 minutes
- 70 marks (26% of A-Level)
- All content from Modules 1-6 can be tested
- Higher proportion of extended response questions
- Often uses unfamiliar contexts
- Tests ability to apply and link knowledge

**Question Types:**
- Novel scenarios requiring knowledge application
- Research-based contexts
- Extended responses linking multiple topics
- Data analysis from unfamiliar experiments

### Key Synoptic Themes

**Theme 1: Structure and Function**
All biological structures are adapted for their functions.

Examples of links:
- Protein structure → enzyme function → metabolic pathways
- Membrane structure → transport mechanisms → cell function
- Organelle structure → cellular processes → tissue function
- DNA structure → protein synthesis → phenotype

**Theme 2: Energy Flow and Transformations**
Energy is transferred and transformed in living systems.

Examples of links:
- Light energy → photosynthesis → chemical energy in glucose
- Glucose → respiration → ATP → active processes
- Energy in ecosystems → productivity → food chains
- ATP synthesis in mitochondria ↔ chloroplasts

**Theme 3: Communication and Control**
Living systems require coordination and regulation.

Examples of links:
- Receptors → nervous/hormonal signals → effectors
- Gene regulation → protein synthesis → cell differentiation
- Homeostasis → negative feedback → maintaining conditions
- Cell signalling → membrane receptors → cellular response

**Theme 4: Genetic Information**
DNA carries information that determines characteristics.

Examples of links:
- DNA replication → cell division → inheritance
- Transcription → translation → protein function
- Gene regulation → differential gene expression → cell types
- Mutations → variation → evolution

**Theme 5: Evolution and Adaptation**
All life has evolved through natural selection.

Examples of links:
- Genetic variation → natural selection → adaptation
- Classification → phylogeny → common ancestry
- Antibiotic resistance → selection pressure → evolution
- Speciation → reproductive isolation → biodiversity

### Common Synoptic Combinations

**Membranes Throughout Biology:**
- Cell membrane structure (Module 2)
- Nerve impulse transmission (Module 5)
- Kidney function (Module 5)
- Photosynthesis/respiration electron transport (Module 5)
- Receptor function (Module 5)

**ATP in Different Contexts:**
- ATP structure and role (Module 2)
- Active transport (Module 2/3)
- Muscle contraction (Module 6)
- Photophosphorylation (Module 5)
- Oxidative phosphorylation (Module 5)
- Nitrogen fixation (Module 6)

**Proteins and Enzymes:**
- Protein structure (Module 2)
- Enzyme function (Module 2)
- Antibodies (Module 4)
- Haemoglobin (Module 3)
- Receptor proteins (Module 5)
- Channel and carrier proteins (Module 2/3)

**Control Systems:**
- Nervous system (Module 5)
- Hormonal system (Module 5)
- Homeostasis (Module 5)
- Gene regulation (Module 6)
- Immune system (Module 4)

**Exchange and Transport:**
- Gas exchange systems (Module 3)
- Circulatory system (Module 3)
- Plant transport (Module 3)
- Kidney function (Module 5)
- Digestion and absorption (cross-module)

### Strategies for Synoptic Questions

**1. Identify the Links**
- What topics are involved?
- How do they connect?
- What common themes apply?

**2. Use Your Full Knowledge**
- Don't limit yourself to one module
- Consider relevant content from all areas
- Make explicit links between topics

**3. Apply to New Contexts**
- Use principles, not just facts
- Explain mechanisms clearly
- Show how concepts apply to the situation

**4. Think About Levels of Organisation**
- Molecular → cellular → tissue → organ → system
- Gene → protein → function → phenotype
- Individual → population → community → ecosystem

### Example Synoptic Questions

**Question 1:** (9 marks)
"Explain how the structure of proteins is important in the functioning of the mammalian circulatory system."

**Expected content:**
- Primary structure determines 3D shape
- Haemoglobin quaternary structure
- Active site of enzymes (blood clotting factors)
- Channel proteins in heart muscle
- Collagen in blood vessel walls
- Receptor proteins for hormones (adrenaline)
- Antibodies for immune function

**Question 2:** (9 marks)
"ATP is essential for many biological processes. Describe how ATP is produced in different parts of a plant cell and explain why this ATP is needed."

**Expected content:**
- ATP from photophosphorylation (chloroplast)
- Light-dependent reactions
- ATP from oxidative phosphorylation (mitochondria)
- Glycolysis (cytoplasm)
- Uses: active transport, Calvin cycle, protein synthesis, cell division

**Question 3:** (9 marks)
"Discuss how negative feedback mechanisms maintain homeostasis in mammals, using named examples."

**Expected content:**
- Definition of negative feedback
- Thermoregulation example
- Blood glucose regulation
- Blood water potential (ADH)
- Link to receptors, control centres, effectors
- Importance of maintaining conditions

### Practice Exercises

**Exercise 1: Link Maps**
Choose a biological process and create a map showing connections to other topics.
Example: Start with "active transport" and link to all related concepts.

**Exercise 2: Common Themes**
Take a theme (e.g., "membranes") and list all the places it appears in the specification.

**Exercise 3: Novel Applications**
Practice applying knowledge to unfamiliar contexts:
- How would a deep-sea organism differ from a surface organism?
- How might a drug affect multiple body systems?
- How do human activities affect multiple ecological processes?

**Exercise 4: Extended Response Practice**
Write extended responses that explicitly link multiple modules:
- "Explain the importance of protein structure in living organisms" (links Modules 2, 3, 4, 5, 6)
- "Describe how membranes are involved in ATP production" (links Modules 2, 5)

### Tips for Paper 3 Success

1. **Review all modules before the exam**
   - Don't focus only on Module 6 topics
   - Revise connections between modules

2. **Practice with unfamiliar contexts**
   - Use questions from other exam boards
   - Read scientific articles and apply knowledge

3. **Learn key examples thoroughly**
   - Know specific examples for each concept
   - Be able to apply them to new situations

4. **Think in terms of biological themes**
   - Structure and function
   - Energy flow
   - Communication and control
   - Genetic information

5. **Practice extended writing**
   - Time yourself
   - Check you've covered multiple modules
   - Use correct terminology

6. **Make explicit links in answers**
   - Don't assume the examiner sees connections
   - State how concepts are related
   - Use linking phrases ("This is important because...", "This relates to...")
`;

const OCR_ALEVEL_BIOLOGY_PRINCIPLES = `
OCR A-Level Biology A Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures (30-35%)
- AO2: Apply knowledge and understanding of scientific ideas, processes, techniques and procedures (40-45%)
- AO3: Analyse, interpret and evaluate scientific information, ideas and evidence (25%)

Paper Structure (Total: 300 marks):
- Paper 1 (2h 15m, 100 marks, 37%): Modules 1-4 - Biological Processes
- Paper 2 (2h 15m, 100 marks, 37%): Modules 1, 2, 5, 6 - Biological Diversity
- Paper 3 (1h 30m, 70 marks, 26%): Unified Biology (synoptic)

Mathematical Skills: 10% minimum
- Statistical tests (chi-squared, Student's t-test)
- Standard deviation
- Correlation coefficients
- Logarithmic calculations

Command Words:
- Calculate: Obtain numerical answer with working
- Compare: Identify similarities and differences
- Describe: Give an account in words
- Discuss: Present key points about different ideas
- Evaluate: Review information to make a judgement
- Explain: Give reasons using scientific knowledge
- Justify: Support a case with evidence
- Outline: Set out main points
- State: Brief answer without explanation
- Suggest: Apply knowledge to new situations

Mark Scheme Conventions:
- 1 mark per valid scientific point
- Calculations: method, substitution, answer with units
- Extended response uses levels
  - Level 3 (5-6 marks): Detailed, accurate, well-structured
  - Level 2 (3-4 marks): Good understanding with omissions
  - Level 1 (1-2 marks): Basic understanding, limited terminology
- (AW) = alternative wording acceptable
- (ORA) = or reverse argument

### Multi-Method Questions: Equal Credit for Valid Approaches

Biology calculations and explanations often have multiple valid approaches. Award full marks for ANY correct method.

**Example 1: Magnification and measurement**
Accept:
- Direct formula application
- Rearranged formula application
- Working via scale bar calibration

**Example 2: Photosynthesis rate calculations**
Accept:
- Volume of gas/time
- Number of bubbles/time (with appropriate caveats)
- Rate from graph gradient

**Example 3: Statistical analysis**
Accept:
- Chi-squared: full table OR condensed formula
- Standard deviation: manual calculation OR stated from calculator
- Spearman's rank: full method with tied ranks handled

**Example 4: Genetic ratios**
Accept:
- Punnett square method
- Probability multiplication method
- Chi-squared to test ratios

**Example 5: Hardy-Weinberg calculations**
Accept:
- Working from p² + 2pq + q² = 1
- Working from p + q = 1 first
- Either direction of calculation

## Key Definitions (A-Level Standard)

**Module 2 - Foundations:**
- Enzyme: "biological catalyst that lowers activation energy"
- Induced fit model: "active site changes shape slightly as substrate binds"
- Water potential: "potential energy of water; tendency of water molecules to move"

**Module 3 - Exchange and Transport:**
- Counter-current: "flow of blood and water in opposite directions, maintaining diffusion gradient"
- Transpiration: "loss of water vapour from leaves through stomata"
- Translocation: "movement of organic solutes through phloem from source to sink"

**Module 4 - Biodiversity:**
- Natural selection: "organisms with advantageous traits more likely to survive and reproduce"
- Speciation: "formation of new species when populations become reproductively isolated"

**Module 5 - Communication:**
- Action potential: "reversal of potential difference across neurone membrane due to ion movement"
- Chemiosmosis: "synthesis of ATP using proton gradient across membrane"

**Module 6 - Genetics:**
- Epistasis: "interaction between genes where one masks expression of another"
- Gene regulation: "control of which genes are expressed in a cell"

Practical Activity Groups (PAGs):
- 12 PAGs covering key practical skills
- Skills tested: planning, implementing, analysing, evaluating
- Questions may use familiar or unfamiliar practical contexts
`;

// Topic-specific guidance
const BIOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-biology-foundations': `
Module 2: Foundations in Biology:
- Detailed cell structure and ultrastructure
- Biological molecules in depth
- Enzyme kinetics and inhibition
- Membrane structure and transport
- Cell division mechanisms
- PAGs 1-5
OCR often tests: enzyme graphs, membrane transport, cell structure
`,
  'ocr-alevel-biology-exchange-transport': `
Module 3: Exchange and Transport:
- Surface area to volume ratio
- Comparative gas exchange systems
- Heart structure and function
- Blood vessel structure
- Haemoglobin and oxygen transport
- Plant transport systems
- PAGs 6-8
OCR often tests: dissociation curves, transport mechanisms, cardiac cycle
`,
  'ocr-alevel-biology-biodiversity': `
Module 4: Biodiversity, Evolution and Disease:
- Communicable diseases
- Immune response mechanisms
- Biodiversity measurement
- Classification systems
- Evolution and speciation
- Conservation
- PAG 9
OCR often tests: immune response, classification, natural selection
`,
  'ocr-alevel-biology-communication-homeostasis': `
Module 5: Communication and Homeostasis:
- Nervous communication
- Action potentials
- Synaptic transmission
- Hormonal communication
- Homeostasis mechanisms
- Excretion and kidney function
- PAG 10
OCR often tests: action potentials, homeostasis, kidney function
`,
  'ocr-alevel-biology-energy': `
Module 5: Energy for Biological Processes:
- Photosynthesis mechanisms
- Light-dependent reactions
- Calvin cycle
- Respiration pathways
- ATP synthesis
- PAGs 11-12
OCR often tests: photosynthesis pathway, respiration stages
`,
  'ocr-alevel-biology-genetics': `
Module 6: Genetics and Evolution:
- Gene regulation
- Patterns of inheritance
- Epistasis
- Chi-squared tests
- Genetic technologies
- PCR and gel electrophoresis
- Gene therapy
OCR often tests: genetic crosses, chi-squared, genetic engineering
`,
  'ocr-alevel-biology-ecosystems': `
Module 6: Ecosystems:
- Population ecology
- Energy flow
- Nutrient cycles
- Succession
- Human impacts
- Conservation
OCR often tests: productivity calculations, succession, nitrogen cycle
`,
  'ocr-alevel-biology-control-coordination': `
Module 6: Animal and Plant Responses:
- Muscle structure and contraction
- Brain structure and function
- Plant hormones
- Tropisms
- PAGs for responses
OCR often tests: sliding filament, plant hormone interactions
`
};

// Generate compact prompt for standard questions
export function getOCRALevelBiologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Biology examiner creating an exam-style question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

${OCR_ALEVEL_BIOLOGY_COGNITIVE_CHALLENGE}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY AND MARK ALLOCATION:
- Easy: 2-4 marks (Recall, definitions, simple applications)
- Medium: 6-9 marks (Detailed explanations, data analysis)
- Hard: 15-25 marks (Extended responses with level descriptors, synoptic essays, complex multi-part questions)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this ${difficulty} difficulty question.

Create ONE exam-style question that:
1. Uses authentic OCR A-Level Biology language
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
export function getOCRALevelBiologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Biology examiner creating an extended response question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires detailed scientific explanation
2. Tests understanding across multiple aspects
3. Uses appropriate command words (Explain, Describe, Discuss)
4. May include context or data

Marking using levels:
Level 3 (5-6 marks): Detailed, accurate, well-structured
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
export function getOCRALevelBiologyCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Biology examiner creating a calculation question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

${OCR_ALEVEL_BIOLOGY_REFERENCE_DATA}

${OCR_ALEVEL_BIOLOGY_WORKED_EXAMPLES}

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
export function getOCRALevelBiologyExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Biology examiner creating an explanation question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

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
export function getOCRALevelBiologyGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Biology examiner creating a data analysis question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

${OCR_ALEVEL_BIOLOGY_REFERENCE_DATA}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting biological data or graphs
2. May require statistical analysis
3. Tests understanding of relationships
4. Uses realistic data

Common OCR graph types:
- Enzyme kinetics curves
- Oxygen dissociation curves
- Action potential traces
- Population data
- Sampling results
- Chi-squared interpretation

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with mark allocation]

**Mark Scheme:**
[Marking points for interpretation]

**Explanation:**
[Model answer showing analysis approach]`;
}

// Generate compare question prompt
export function getOCRALevelBiologyComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = BIOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Biology examiner creating a comparison question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related biological concepts
2. Requires similarities AND differences
3. Tests deep understanding
4. Uses 'Compare' command word

OCR Biology comparisons:
- Mitosis vs meiosis
- Aerobic vs anaerobic respiration
- Photosynthesis vs respiration
- Light-dependent vs light-independent
- Nervous vs hormonal control
- Primary vs secondary succession
- DNA vs RNA structure

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences]

**Explanation:**
[Model answer with organised comparison]`;
}

// Generate synoptic question prompt (Paper 3)
export function getOCRALevelBiologySynopticPrompt(
  topic: Topic
): string {
  return `You are an expert OCR A-Level Biology examiner creating a Paper 3 synoptic question.

${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

Topic: ${topic.name}

OCR Paper 3 (Unified Biology):
- Synoptic assessment across all modules
- Links concepts from different areas
- May include unfamiliar contexts
- Tests ability to apply knowledge

Create ONE synoptic question (6-9 marks) that:
1. Links ${topic.name} to concepts from other modules
2. Requires application of knowledge from multiple areas
3. Tests understanding of connections in biology
4. May use novel or unfamiliar context

OUTPUT FORMAT (use exact headers):
**Question:**
[Synoptic question with context]

**Mark Scheme:**
[Indicative content showing links between modules]

**Explanation:**
[Model answer demonstrating synoptic understanding]`;
}

// Generate PAG prompt
export function getOCRALevelBiologyPAGPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  const subtopicGuidance = getOCRALevelBiologyPracticalSubtopicGuidance(subtopic, practical);

  return `${OCR_ALEVEL_BIOLOGY_PRINCIPLES}

---

## PAG Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this OCR A-Level Biology PAG.

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

function getOCRALevelBiologyPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions (A-Level)
Focus on:
- Detailed procedure with specific techniques
- Quantitative methods and measurements
- Statistical validity considerations
- Controls and replication

OCR PAG methods often emphasise:
- Flexibility in approach
- Skill assessment rather than fixed method`;

    case 'Variables':
      return `## Variables Questions (A-Level)
Focus on:
- Precise identification and control
- Standardisation techniques
- Confounding variables
- Continuous vs categorical`;

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
- Statistical analysis (chi-squared, t-test)
- Standard deviation and error bars
- Correlation and causation
- Null hypothesis testing`;

    case 'Graph Skills':
      return `## Graph Skills (A-Level)
Focus on:
- Rate curves and tangent calculations
- Error bars
- Log scales when appropriate
- Lines of best fit`;

    case 'Errors':
      return `## Errors (A-Level)
Focus on:
- Systematic vs random errors
- Percentage uncertainty
- Biological variability
- Sources specific to technique`;

    case 'Improvements':
      return `## Improvements (A-Level)
Focus on:
- Statistical improvements
- Equipment upgrades
- Sample size considerations
- Controlling additional variables`;

    case 'Safety':
      return `## Safety (A-Level)
Focus on:
- Risk assessment
- COSHH considerations
- Ethical considerations

Safety: ${practical.safety?.join('; ') || 'Standard lab safety procedures'}`;

    default:
      return '';
  }
}
