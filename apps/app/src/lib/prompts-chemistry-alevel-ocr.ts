// OCR A-Level Chemistry A (H432) Question Generation Prompts
// Comprehensive resource for OCR A-Level Chemistry A specification
// Tailored to OCR specification style and assessment objectives
//
// Sources:
// - https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/
// - Official specification and past papers 2019-2024
// - OCR Data Sheet for Chemistry A (H432)
// - Practical Activity Groups (PAG) guidance documents
//
// Last updated: 2024

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';


// Ranges are non-overlapping to ensure consistent difficulty progression
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy': return { min: 2, max: 3 };   // Short answer, single concept, direct recall
    case 'medium': return { min: 4, max: 5 }; // Multi-step, combines concepts, application
    case 'hard': return { min: 6, max: 8 };   // Extended response, synoptic, unfamiliar contexts
    default: return { min: 2, max: 5 };
  }
}

// ============================================================================
// COGNITIVE CHALLENGE BY DIFFICULTY LEVEL
// ============================================================================

const OCR_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, basic calculation, identification | State definitions, draw simple structures, balance equations, identify functional groups |
| **Medium** | Application, multi-step calculation, explanation | Apply concepts to novel reactions, multi-step calculations (titrations, Hess cycles), explain trends and mechanisms |
| **Hard** | Analysis, evaluation, synthesis, extended response | Analyse spectroscopic data, evaluate synthetic routes, design experiments, synoptic problem-solving |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires integration of concepts across multiple topics (e.g., combining thermodynamics with kinetics)
- Demands analysis of unfamiliar reaction contexts or experimental data
- Must evaluate practical methods and suggest quantitative improvements
- Requires extended calculation chains with multiple conversions
- Requires mechanism reasoning in unfamiliar contexts
- No single approach - student must select and justify methodology

**Easy (2-3 marks):** Knowledge recall, simple structure drawing, single-step calculations
**Medium (4-5 marks):** Multi-step calculations, mechanism drawing, application to new contexts
**Hard (6-8 marks):** Extended response with analysis, synthesis route design, or spectroscopic interpretation
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const OCR_ALEVEL_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Chemistry A Assessment Objectives

### AO1: Demonstrate Knowledge and Understanding (26-30%)
Demonstrate knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures

**AO1 Question Characteristics:**
- "State", "Define", "Name", "Write", "Give" command words
- Recall of definitions, laws, mechanisms, equations
- Drawing structures, electron configurations
- Writing and balancing equations
- Stating conditions for reactions

**Examples of AO1 Questions:**
- "State the reagents and conditions for..."
- "Define the term standard enthalpy of formation"
- "Write the electron configuration of chromium"
- "Name the type of reaction occurring"

### AO2: Apply Knowledge and Understanding (38-42%)
Apply knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures
- In theoretical and practical contexts
- When handling qualitative and quantitative data

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Show that", "Explain" command words
- Using equations in calculations
- Applying concepts to new contexts
- Analysing experimental data
- Planning investigations
- Predicting products and outcomes

**Examples of AO2 Questions:**
- "Calculate the pH of a 0.10 mol dm⁻³ solution of..."
- "Explain why the boiling point increases down Group 7"
- "Determine the order of reaction with respect to..."
- "Show that the enthalpy change is approximately -75 kJ mol⁻¹"

### AO3: Analyse, Interpret and Evaluate (28-32%)
Analyse, interpret and evaluate:
- Scientific information, ideas and evidence
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Discuss", "Comment" command words
- Drawing conclusions from experimental data
- Identifying and explaining sources of error
- Suggesting improvements to experiments
- Evaluating scientific claims and models
- Making predictions based on trends

**Examples of AO3 Questions:**
- "Evaluate the experimental procedure used to determine..."
- "Suggest why the percentage yield was lower than expected"
- "Analyse the data to determine the activation energy"
- "Discuss the validity of the model used to explain..."

### Assessment Weighting Summary
| Objective | Weighting | Focus |
|-----------|-----------|-------|
| AO1 | 26-30% | Knowledge and understanding |
| AO2 | 38-42% | Application |
| AO3 | 28-32% | Analysis and evaluation |

### Additional Requirements
- **Minimum 20%** of marks require Level 2 mathematical skills
- **Minimum 15%** of marks assess practical skills
- Practical Endorsement assessed separately (Pass/Not classified)
- Extended response questions (6 marks) use levels of response
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY PAPER STRUCTURE
// ============================================================================

const OCR_ALEVEL_CHEMISTRY_PAPER_STRUCTURE = `
## OCR A-Level Chemistry A Paper Structure (H432)

### Component 01: Periodic Table, Elements and Physical Chemistry
| Aspect | Detail |
|--------|--------|
| Duration | 2 hours 15 minutes |
| Marks | 100 |
| Weighting | 37% of total A-Level |
| Format | Short and extended answer questions |

**Content Assessed:**
- Module 1: Development of practical skills (assessed throughout)
- Module 2: Foundations of chemistry
- Module 3: Periodic table and energy
- Module 5: Physical chemistry and transition elements

**Question Types:**
- Short answer (1-4 marks)
- Calculations (3-6 marks)
- Extended response (6 marks)
- Data analysis questions
- Graph interpretation

### Component 02: Synthesis and Analytical Techniques
| Aspect | Detail |
|--------|--------|
| Duration | 2 hours 15 minutes |
| Marks | 100 |
| Weighting | 37% of total A-Level |
| Format | Short and extended answer questions |

**Content Assessed:**
- Module 1: Development of practical skills (assessed throughout)
- Module 2: Foundations of chemistry
- Module 4: Core organic chemistry
- Module 6: Organic chemistry and analysis

**Question Types:**
- Mechanism questions (3-5 marks)
- Organic synthesis routes (4-6 marks)
- Spectroscopy interpretation (4-8 marks)
- Practical technique questions
- Extended response (6 marks)

### Component 03: Unified Chemistry
| Aspect | Detail |
|--------|--------|
| Duration | 1 hour 30 minutes |
| Marks | 70 |
| Weighting | 26% of total A-Level |
| Format | Short and extended answer questions |

**Content Assessed:**
- ALL content from Modules 1-6
- Synoptic assessment linking topics
- Application to unfamiliar contexts

**Question Types:**
- Context-based questions
- Synoptic problem-solving
- Multi-step calculations
- Extended response questions
- Data interpretation from experiments

### Mark Distribution Across Papers
| Paper | AO1 | AO2 | AO3 |
|-------|-----|-----|-----|
| Paper 1 | 31 marks | 41 marks | 28 marks |
| Paper 2 | 28 marks | 44 marks | 28 marks |
| Paper 3 | 13 marks | 27 marks | 30 marks |
| Total | 72 marks | 112 marks | 86 marks |

### Levels of Response (6-mark questions)
**Level 3 (5-6 marks):**
- Demonstrates a thorough understanding
- Arguments are clear and coherent
- Uses appropriate scientific terminology
- Provides detailed explanations with correct chemistry

**Level 2 (3-4 marks):**
- Demonstrates reasonable understanding
- Some structure to response
- Some use of scientific terminology
- Some correct chemistry but may lack detail

**Level 1 (1-2 marks):**
- Demonstrates limited understanding
- Lacks structure
- Limited use of scientific terminology
- Some relevant points but significant gaps
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY COMMAND WORDS (COMPREHENSIVE)
// ============================================================================

const OCR_ALEVEL_CHEMISTRY_COMMAND_WORDS = `
## OCR A-Level Chemistry Command Words

### Calculation Commands
| Command | Definition | Marks Guide | Example |
|---------|------------|-------------|---------|
| **Calculate** | Use numbers in a given context to work out an answer | 2-5 marks | "Calculate the pH of a 0.050 mol dm⁻³ solution of propanoic acid (Ka = 1.3 × 10⁻⁵ mol dm⁻³)" |
| **Determine** | Use data from graph/table/experiment to find answer | 2-4 marks | "Determine the activation energy from the graph" |
| **Show that** | Use data to prove a given answer is correct | 2-4 marks | "Show that the enthalpy change is approximately -57 kJ mol⁻¹" (Quote to 1 more s.f.) |
| **Estimate** | Make an approximate calculation using assumptions | 2-3 marks | "Estimate the concentration of the solution" |
| **Deduce** | Draw conclusions from given information | 1-3 marks | "Deduce the oxidation state of manganese in the product" |

### Knowledge Commands
| Command | Definition | Marks Guide | Example |
|---------|------------|-------------|---------|
| **State** | Brief answer with no explanation needed | 1-2 marks | "State the reagent used in this reaction" |
| **Define** | Give the precise meaning of a term | 1-2 marks | "Define the term lattice enthalpy" |
| **Write** | Give an equation, formula, or expression | 1-2 marks | "Write the equation for the reaction between..." |
| **Name** | Identify using correct chemical term | 1 mark | "Name the type of isomerism shown" |
| **Identify** | Recognise and state something specific | 1-2 marks | "Identify the functional group present" |
| **Give** | Provide a short answer | 1-2 marks | "Give the electron configuration of Fe³⁺" |
| **Draw** | Produce a diagram, mechanism, or structure | 2-4 marks | "Draw the mechanism for the reaction" |

### Explanation Commands
| Command | Definition | Marks Guide | Example |
|---------|------------|-------------|---------|
| **Explain** | Give reasons using chemistry knowledge | 2-4 marks | "Explain why copper(II) sulfate solution is blue" |
| **Describe** | Give an account of features or process | 2-4 marks | "Describe how to carry out a titration" |
| **Outline** | Set out main features/mechanism steps | 2-4 marks | "Outline the mechanism for electrophilic substitution" |
| **Suggest** | Apply knowledge to unfamiliar context | 2-4 marks | "Suggest why the reaction rate decreased" |
| **Justify** | Give evidence to support a conclusion | 2-3 marks | "Justify your choice of indicator" |

### Analysis Commands
| Command | Definition | Marks Guide | Example |
|---------|------------|-------------|---------|
| **Compare** | Identify similarities AND differences | 2-4 marks | "Compare the reactivity of chlorine and bromine" |
| **Analyse** | Examine data/information systematically | 3-6 marks | "Analyse the spectral data to identify..." |
| **Evaluate** | Judge advantages and disadvantages | 4-6 marks | "Evaluate the sustainability of this process" |
| **Discuss** | Consider different aspects of a topic | 4-6 marks | "Discuss the factors affecting equilibrium" |
| **Predict** | Use patterns/knowledge to suggest outcome | 2-3 marks | "Predict the products of the reaction" |
| **Comment** | Make observations with explanations | 2-3 marks | "Comment on the shape of the pH curve" |

### OCR-Specific Mark Scheme Conventions
1. **Working must be shown** for calculation questions
2. **Units required** unless already given in the question
3. **Significant figures**: Answer to same or one fewer s.f. than data given
4. **"Show that" questions**: Quote answer to 1 more s.f. than given value
5. **ECF (Error Carried Forward)**: Applied when method is correct
6. **Alternative correct answers**: Credited with annotation 'AW'
7. **Correct chemistry in wrong context**: May gain partial credit
8. **State symbols**: Only required when specifically asked
`;

const OCR_ALEVEL_CHEMISTRY_PRINCIPLES = `
OCR A-Level Chemistry A Assessment Objectives:
- AO1: Demonstrate knowledge and understanding (26-30%)
- AO2: Apply knowledge and understanding (38-42%)
- AO3: Analyse, interpret and evaluate (28-32%)

OCR A-Level Chemistry Command Words:
- Calculate: Use numbers to work out value
- Compare: Identify similarities and/or differences
- Define: State meaning of a term
- Describe: Give account of features
- Determine: Use data to obtain answer
- Discuss: Present key points
- Draw: Produce diagram/structure
- Evaluate: Judge merits/disadvantages
- Explain: Give reasons
- Justify: Use evidence to support
- Outline: Set out main points
- Predict: Use knowledge to suggest outcome
- Show that: Use data to verify statement
- State: Brief answer
- Suggest: Apply to unfamiliar context

OCR Mark Scheme Conventions:
- Working required for calculations
- Units needed in answers
- 6-mark questions use levels of response
- Mechanisms need correct curly arrows
- Credit alternative correct approaches
- ECF (error carried forward) applied

**OCR-Specific Characteristics:**
- 12 PAGs (Practical Activity Groups) - flexible approach
- Module-based structure (6 modules)
- Paper 1: Periodic table, elements, physical chemistry (37%)
- Paper 2: Synthesis and analytical techniques (37%)
- Paper 3: Unified chemistry - synoptic (26%)
- Emphasis on practical skills throughout
- Strong focus on synoptic assessment in Paper 3
- Context-based questions common
- Multi-step calculations expected

### Multi-Method Questions: Equal Credit for Valid Approaches

Chemistry calculations often have multiple valid solution paths. Award full marks for ANY correct method.

**Example 1: Enthalpy calculations**
Accept both:
- Hess's Law algebraic manipulation
- Energy cycle diagram method

**Example 2: Buffer pH calculations**
Accept both:
- Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA])
- Direct Ka expression manipulation

**Example 3: Titration calculations**
Accept any valid route:
- n = c × V then use mole ratio
- Direct ratio method from balanced equation
- Working via mass calculation

**Example 4: Rate constant determination**
Accept both:
- Graphical method (gradient of appropriate plot)
- Direct calculation from integrated rate equation

**Example 5: Born-Haber cycles**
Accept:
- Diagram-based approach
- Algebraic manipulation of enthalpy terms
- Either direction around the cycle
`;

const OCR_CHEMISTRY_PAGS = `
## OCR A-Level Chemistry PAGs (12 Practical Activity Groups)

### Practical Endorsement Overview
The Practical Endorsement is assessed through PAGs and is reported separately as Pass/Not Classified.
Students must demonstrate competence in practical skills across the 12 PAGs.

### PAG 1: Moles Determination
**Skills Assessed:**
- Calculating moles from mass measurements
- Using titration data to determine moles
- Gas volume measurements (using gas syringes)
- Determining percentage purity

**Example Experiments:**
- Determine the formula of a hydrated salt by heating
- Find the relative atomic mass of a metal by displacement
- Determine the percentage of calcium carbonate in eggshell

**Key Techniques:**
- Accurate mass measurement using balance (±0.001 g)
- Handling hot crucibles and apparatus
- Recording repeated readings

### PAG 2: Acid-Base and Redox Titrations
**Skills Assessed:**
- Volumetric technique
- Concordant titre determination
- Calculations from titration data
- Indicator selection

**Example Experiments:**
- Titrate a standard solution of sodium carbonate with hydrochloric acid
- Determine concentration of ethanoic acid in vinegar
- Redox titration with potassium manganate(VII)

**Key Techniques:**
- Preparation of standard solutions
- Use of volumetric flask, pipette, burette
- Reading meniscus correctly (±0.05 cm³)
- Achieving concordant results (within 0.10 cm³)

### PAG 3: Enthalpy Changes
**Skills Assessed:**
- Calorimetry technique
- Temperature measurement accuracy
- Heat loss minimisation
- Enthalpy calculations using q = mcΔT

**Example Experiments:**
- Determine enthalpy of neutralisation
- Measure enthalpy of combustion of alcohols
- Determine enthalpy of reaction using Hess's Law

**Key Techniques:**
- Using polystyrene cups as calorimeter
- Drawing cooling curves
- Extrapolation to find maximum temperature
- Calculating percentage errors

### PAG 4: Rates of Reaction
**Skills Assessed:**
- Initial rate method
- Continuous monitoring method
- Graphical analysis
- Order of reaction determination

**Example Experiments:**
- Iodine clock reaction
- Thiosulfate-acid reaction (disappearing cross)
- Catalysed decomposition of hydrogen peroxide

**Key Techniques:**
- Timing reactions accurately
- Controlling variables
- Processing rate data graphically
- Calculating rate constants

### PAG 5: Electrochemical Cells
**Skills Assessed:**
- Setting up electrochemical cells
- Measuring EMF
- Understanding electrode potentials
- Salt bridge preparation

**Example Experiments:**
- Measure EMF of metal/metal ion cells
- Investigate effect of concentration on EMF
- Set up and measure cell potentials

**Key Techniques:**
- High resistance voltmeter use
- Salt bridge preparation
- Standard conditions maintenance
- Polarity determination

### PAG 6: Organic Synthesis (Reflux, Distillation)
**Skills Assessed:**
- Heating under reflux
- Distillation apparatus setup
- Separation techniques
- Product purification

**Example Experiments:**
- Oxidation of alcohols to aldehydes/ketones/acids
- Esterification reactions
- Hydrolysis of esters

**Key Techniques:**
- Setting up reflux apparatus safely
- Distillation and fraction collection
- Anti-bumping granules
- Boiling point determination

### PAG 7: Qualitative Tests (Organic and Inorganic)
**Skills Assessed:**
- Test tube reactions
- Observation recording
- Ion identification
- Functional group tests

**Inorganic Tests:**
- Flame tests for metal cations
- Precipitation reactions for cations with NaOH/NH₃
- Tests for anions (carbonate, sulfate, halides)

**Organic Tests:**
- Bromine water for alkenes
- Acidified dichromate for alcohols
- Tollens' reagent for aldehydes
- 2,4-DNP for carbonyls

### PAG 8: Preparation of Organic Solids
**Skills Assessed:**
- Recrystallisation technique
- Filtration (vacuum and gravity)
- Melting point determination
- Yield calculations

**Example Experiments:**
- Preparation of aspirin
- Preparation of organic crystals
- Purification by recrystallisation

**Key Techniques:**
- Dissolving in minimum hot solvent
- Slow cooling for crystal formation
- Buchner filtration
- Drying crystals

### PAG 9: Preparation of Organic Liquids
**Skills Assessed:**
- Liquid-liquid separation
- Use of separating funnel
- Drying agents
- Distillation for purification

**Example Experiments:**
- Preparation of esters
- Preparation of halogenoalkanes
- Extraction of organic products

**Key Techniques:**
- Separating funnel technique
- Using anhydrous salts as drying agents
- Simple and fractional distillation
- Measuring boiling points

### PAG 10: Transition Metal Chemistry
**Skills Assessed:**
- Complex ion preparation
- Ligand exchange reactions
- Colour observations
- Redox reactions of transition metals

**Example Experiments:**
- Prepare complexes of copper and cobalt
- Investigate ligand exchange reactions
- Observe colour changes in vanadium chemistry

**Key Techniques:**
- Recording colour observations accurately
- Observing precipitate formation
- Working with concentrated solutions safely

### PAG 11: pH Curves and Buffers
**Skills Assessed:**
- pH measurement using meter
- Titration curve plotting
- Buffer preparation
- Ka/pKa determination

**Example Experiments:**
- Plot pH curve for strong acid-strong base
- Determine Ka of a weak acid
- Prepare and test buffer solutions

**Key Techniques:**
- pH meter calibration
- Continuous pH monitoring during titration
- Identifying equivalence point and half-equivalence point
- Buffer capacity testing

### PAG 12: Chromatography and Spectroscopy
**Skills Assessed:**
- TLC technique
- Rf value calculation
- Column chromatography (optional)
- Spectroscopy interpretation

**Example Experiments:**
- Separate plant pigments by TLC
- Analyse amino acids in hydrolysed protein
- Use Rf values for identification

**Key Techniques:**
- Preparing TLC plates
- Developing in appropriate solvent
- Calculating and comparing Rf values
- UV detection if required
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY COMPLETE DATA SHEET
// ============================================================================

const OCR_CHEMISTRY_DATA_SHEET_EXTENDED = `## OCR A-Level Chemistry Complete Data Sheet

### Physical Constants
| Constant | Symbol | Value |
|----------|--------|-------|
| Avogadro constant | L or Nₐ | 6.022 × 10²³ mol⁻¹ |
| Gas constant | R | 8.314 J K⁻¹ mol⁻¹ |
| Faraday constant | F | 96 485 C mol⁻¹ |
| Planck constant | h | 6.63 × 10⁻³⁴ J s |
| Speed of light | c | 3.00 × 10⁸ m s⁻¹ |
| Ionic product of water | Kw | 1.00 × 10⁻¹⁴ mol² dm⁻⁶ (at 298 K) |
| Specific heat capacity of water | c | 4.18 J g⁻¹ K⁻¹ |
| Density of water | - | 1.00 g cm⁻³ |

### Standard Conditions
- Standard temperature: 298 K (25°C)
- Standard pressure: 100 kPa (1 bar)
- Standard concentration: 1 mol dm⁻³
- Standard state: Most stable form at 298 K and 100 kPa

### Molar Gas Volumes
- At RTP (298 K, 100 kPa): 24.0 dm³ mol⁻¹
- At STP (273 K, 100 kPa): 22.7 dm³ mol⁻¹

### Common Relative Atomic Masses (Ar)
| Element | Symbol | Ar | Element | Symbol | Ar |
|---------|--------|-----|---------|--------|-----|
| Hydrogen | H | 1.0 | Potassium | K | 39.1 |
| Carbon | C | 12.0 | Calcium | Ca | 40.1 |
| Nitrogen | N | 14.0 | Manganese | Mn | 54.9 |
| Oxygen | O | 16.0 | Iron | Fe | 55.8 |
| Fluorine | F | 19.0 | Copper | Cu | 63.5 |
| Sodium | Na | 23.0 | Zinc | Zn | 65.4 |
| Magnesium | Mg | 24.3 | Bromine | Br | 79.9 |
| Aluminium | Al | 27.0 | Silver | Ag | 107.9 |
| Silicon | Si | 28.1 | Iodine | I | 126.9 |
| Phosphorus | P | 31.0 | Barium | Ba | 137.3 |
| Sulfur | S | 32.1 | Lead | Pb | 207.2 |
| Chlorine | Cl | 35.5 | - | - | - |

### Bond Enthalpies (Average values at 298 K) / kJ mol⁻¹
| Bond | Enthalpy | Bond | Enthalpy | Bond | Enthalpy |
|------|----------|------|----------|------|----------|
| H-H | 436 | C-C | 348 | O=O | 496 |
| C-H | 412 | C=C | 612 | N≡N | 944 |
| N-H | 388 | C≡C | 837 | C=O (in CO₂) | 805 |
| O-H | 463 | C-O | 360 | C=O (carbonyl) | 743 |
| F-H | 562 | C=O | 743 | C≡N | 890 |
| Cl-H | 431 | C-N | 305 | C-Cl | 338 |
| Br-H | 366 | C=N | 613 | C-Br | 276 |
| I-H | 298 | N=N | 409 | C-I | 238 |

### Standard Electrode Potentials (E°) at 298 K
| Half-equation | E° / V |
|---------------|--------|
| Li⁺(aq) + e⁻ → Li(s) | -3.04 |
| K⁺(aq) + e⁻ → K(s) | -2.92 |
| Ca²⁺(aq) + 2e⁻ → Ca(s) | -2.87 |
| Na⁺(aq) + e⁻ → Na(s) | -2.71 |
| Mg²⁺(aq) + 2e⁻ → Mg(s) | -2.37 |
| Al³⁺(aq) + 3e⁻ → Al(s) | -1.66 |
| Zn²⁺(aq) + 2e⁻ → Zn(s) | -0.76 |
| Fe²⁺(aq) + 2e⁻ → Fe(s) | -0.44 |
| Ni²⁺(aq) + 2e⁻ → Ni(s) | -0.25 |
| Sn²⁺(aq) + 2e⁻ → Sn(s) | -0.14 |
| Pb²⁺(aq) + 2e⁻ → Pb(s) | -0.13 |
| 2H⁺(aq) + 2e⁻ → H₂(g) | 0.00 |
| Cu²⁺(aq) + 2e⁻ → Cu(s) | +0.34 |
| I₂(aq) + 2e⁻ → 2I⁻(aq) | +0.54 |
| Ag⁺(aq) + e⁻ → Ag(s) | +0.80 |
| Br₂(aq) + 2e⁻ → 2Br⁻(aq) | +1.09 |
| Cl₂(aq) + 2e⁻ → 2Cl⁻(aq) | +1.36 |
| MnO₄⁻(aq) + 8H⁺ + 5e⁻ → Mn²⁺(aq) + 4H₂O(l) | +1.51 |
| F₂(g) + 2e⁻ → 2F⁻(aq) | +2.87 |

### Lattice Enthalpies (ΔLE) / kJ mol⁻¹
| Compound | ΔLE | Compound | ΔLE |
|----------|-----|----------|-----|
| NaF | -918 | MgO | -3850 |
| NaCl | -780 | MgCl₂ | -2523 |
| NaBr | -742 | CaO | -3513 |
| NaI | -705 | CaCl₂ | -2258 |
| KCl | -711 | BaO | -3054 |
| KBr | -679 | BaCl₂ | -2018 |

### First Ionisation Energies / kJ mol⁻¹
| Element | IE₁ | Element | IE₁ |
|---------|-----|---------|-----|
| H | 1312 | Na | 496 |
| He | 2372 | Mg | 738 |
| Li | 520 | Al | 578 |
| Be | 900 | Si | 786 |
| B | 801 | P | 1012 |
| C | 1086 | S | 1000 |
| N | 1402 | Cl | 1251 |
| O | 1314 | Ar | 1521 |
| F | 1681 | K | 419 |
| Ne | 2081 | Ca | 590 |

### Enthalpy Changes of Formation (ΔfH°) / kJ mol⁻¹ at 298 K
| Compound | ΔfH° | Compound | ΔfH° |
|----------|------|----------|------|
| H₂O(l) | -286 | CO₂(g) | -394 |
| H₂O(g) | -242 | CO(g) | -111 |
| HCl(g) | -92 | CH₄(g) | -75 |
| HBr(g) | -36 | C₂H₆(g) | -85 |
| NH₃(g) | -46 | C₂H₄(g) | +52 |
| NO(g) | +90 | C₂H₂(g) | +227 |
| NO₂(g) | +33 | CH₃OH(l) | -239 |
| SO₂(g) | -297 | C₂H₅OH(l) | -277 |
| SO₃(g) | -395 | NaCl(s) | -411 |

### Standard Entropies (S°) / J K⁻¹ mol⁻¹ at 298 K
| Substance | S° | Substance | S° |
|-----------|-----|-----------|-----|
| H₂(g) | 131 | H₂O(l) | 70 |
| O₂(g) | 205 | H₂O(g) | 189 |
| N₂(g) | 192 | CO₂(g) | 214 |
| C(graphite) | 6 | NH₃(g) | 193 |
| C(diamond) | 2 | NaCl(s) | 72 |
| Na(s) | 51 | CaCO₃(s) | 93 |
| Cl₂(g) | 223 | CaO(s) | 40 |

### Infrared Absorption Frequencies
| Bond | Wavenumber / cm⁻¹ | Type |
|------|-------------------|------|
| O-H (alcohols) | 3200-3600 (broad) | Stretch |
| O-H (carboxylic acids) | 2500-3300 (very broad) | Stretch |
| N-H | 3300-3500 | Stretch |
| C-H | 2850-3100 | Stretch |
| C=O (aldehydes) | 1720-1740 | Stretch |
| C=O (ketones) | 1705-1725 | Stretch |
| C=O (carboxylic acids) | 1700-1725 | Stretch |
| C=O (esters) | 1735-1750 | Stretch |
| C=O (amides) | 1630-1690 | Stretch |
| C=C | 1620-1680 | Stretch |
| C-O | 1000-1300 | Stretch |
| C-X | 500-800 | Stretch |

### NMR Chemical Shift Values (δ / ppm)
**¹H NMR:**
| Type of Proton | δ / ppm |
|----------------|---------|
| R-CH₃ | 0.7-1.2 |
| R-CH₂-R | 1.2-1.4 |
| R₃CH | 1.4-2.0 |
| R-CH₂-X (X = halogen) | 3.0-4.0 |
| R-O-CH₃ | 3.3-3.9 |
| R-CHO | 9.0-10.0 |
| R-COOH | 10.0-12.0 |
| Ar-H | 6.5-8.0 |
| R-OH | 1.0-6.0 (variable) |
| R-NH₂ | 1.0-5.0 (variable) |

**¹³C NMR:**
| Type of Carbon | δ / ppm |
|----------------|---------|
| C-C | 5-40 |
| C-Cl | 35-80 |
| C-O (alcohols, ethers) | 50-90 |
| C=C | 115-140 |
| Aromatic C | 125-150 |
| C=O (aldehydes, ketones) | 190-220 |
| C=O (acids, esters) | 160-185 |
`;

const OCR_CHEMISTRY_DATA_SHEET = `## OCR A-Level Chemistry Data Sheet

### Constants
| Constant | Symbol | Value |
|----------|--------|-------|
| Avogadro constant | L | 6.022 × 10²³ mol⁻¹ |
| Gas constant | R | 8.314 J K⁻¹ mol⁻¹ |
| Faraday constant | F | 96 485 C mol⁻¹ |
| Ionic product of water | Kw | 1.00 × 10⁻¹⁴ mol² dm⁻⁶ (298 K) |
| Planck constant | h | 6.63 × 10⁻³⁴ J s |

### Molar Gas Volume
- At RTP (298 K, 101 kPa): 24.0 dm³ mol⁻¹

### Common Ar Values
H: 1.0, C: 12.0, N: 14.0, O: 16.0, F: 19.0, Na: 23.0,
Mg: 24.3, Al: 27.0, Si: 28.1, P: 31.0, S: 32.1, Cl: 35.5,
K: 39.1, Ca: 40.1, Mn: 54.9, Fe: 55.8, Cu: 63.5, Br: 79.9,
Ag: 107.9, I: 126.9

### Key Equations
- n = m/M, c = n/V, pV = nRT
- pH = -log[H⁺], pKa = -log Ka
- ΔG = ΔH - TΔS
- ln k = ln A - Ea/RT
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY KEY FORMULAE AND EQUATIONS
// ============================================================================

const OCR_CHEMISTRY_FORMULAE = `## OCR A-Level Chemistry Key Formulae

### Amount of Substance
| Formula | Description | Units |
|---------|-------------|-------|
| n = m/M | Moles from mass and molar mass | mol |
| c = n/V | Concentration | mol dm⁻³ |
| pV = nRT | Ideal gas equation | p in Pa, V in m³ |
| n = V/24.0 | Moles of gas at RTP | mol |
| n = pV/RT | Moles from gas data | mol |

**Unit Conversions:**
- 1 dm³ = 1000 cm³ = 10⁻³ m³
- 1 kPa = 1000 Pa
- Temperature in Kelvin: T(K) = T(°C) + 273

### Energetics
| Formula | Description |
|---------|-------------|
| q = mcΔT | Heat energy (c = 4.18 J g⁻¹ K⁻¹ for water) |
| ΔH = Σ(bonds broken) - Σ(bonds formed) | Enthalpy from bond enthalpies |
| ΔH = Σ ΔfH°(products) - Σ ΔfH°(reactants) | Enthalpy from formation data |
| ΔH = Σ ΔcH°(reactants) - Σ ΔcH°(products) | Enthalpy from combustion data |

### Kinetics
| Formula | Description |
|---------|-------------|
| Rate = k[A]ᵐ[B]ⁿ | Rate equation |
| t½ = ln 2 / k = 0.693 / k | Half-life (first order only) |
| ln k = ln A - Ea/RT | Arrhenius equation (linear form) |
| k = Ae^(-Ea/RT) | Arrhenius equation (exponential form) |
| ln(k₂/k₁) = Ea/R × (1/T₁ - 1/T₂) | Arrhenius equation for two temperatures |

**Arrhenius Plot:**
- Plot ln k against 1/T
- Gradient = -Ea/R
- Intercept = ln A

### Equilibrium
| Formula | Description |
|---------|-------------|
| Kc = [products]ⁿ/[reactants]ᵐ | Equilibrium constant (concentrations) |
| Kp = (partial pressures of products)/(partial pressures of reactants) | Equilibrium constant (pressures) |
| pA = xA × Ptotal | Partial pressure |
| xA = moles of A / total moles | Mole fraction |

### Acids and Bases
| Formula | Description |
|---------|-------------|
| pH = -log₁₀[H⁺] | pH definition |
| [H⁺] = 10⁻ᵖᴴ | H⁺ concentration from pH |
| pOH = -log₁₀[OH⁻] | pOH definition |
| pH + pOH = 14 | Relationship at 298 K |
| Ka = [H⁺][A⁻]/[HA] | Acid dissociation constant |
| pKa = -log₁₀Ka | pKa definition |
| Kw = [H⁺][OH⁻] = 10⁻¹⁴ mol² dm⁻⁶ | Ionic product of water (298 K) |
| pH = pKa + log₁₀([A⁻]/[HA]) | Henderson-Hasselbalch equation |

**Weak Acid Approximation:**
- For weak acid HA: Ka ≈ [H⁺]²/[HA]initial
- Therefore [H⁺] ≈ √(Ka × [HA])

**Buffer Solutions:**
- Acidic buffer: weak acid + its conjugate base (salt)
- pH = pKa + log([salt]/[acid])
- At half-equivalence point: pH = pKa

### Thermodynamics
| Formula | Description |
|---------|-------------|
| ΔG = ΔH - TΔS | Gibbs free energy |
| ΔS = Σ S°(products) - Σ S°(reactants) | Entropy change |
| ΔG = -RT ln K | Gibbs energy and equilibrium |

**Feasibility:**
- ΔG < 0: Reaction is feasible (spontaneous)
- ΔG = 0: At equilibrium
- ΔG > 0: Reaction not feasible in forward direction

### Electrochemistry
| Formula | Description |
|---------|-------------|
| E°cell = E°(reduced) - E°(oxidised) | Standard cell EMF |
| E°cell = E°(+) - E°(-) | Alternative form |
| ΔG° = -nFE°cell | Gibbs energy from EMF |

**Predicting Reactions:**
- Positive E°cell: Reaction feasible
- The more positive species is reduced
- The more negative species is oxidised

### Percentage Calculations
| Formula | Description |
|---------|-------------|
| % yield = (actual yield / theoretical yield) × 100 | Percentage yield |
| Atom economy = (Mr of desired product / Mr of all reactants) × 100 | Atom economy |
| % purity = (mass of pure substance / total mass) × 100 | Percentage purity |
| % error = (|experimental - accepted| / accepted) × 100 | Percentage error |
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY MATHEMATICAL SKILLS
// ============================================================================

const OCR_CHEMISTRY_MATHEMATICAL_SKILLS = `## Mathematical Skills for OCR A-Level Chemistry

### Level 2 Mathematical Requirements (Minimum 20% of marks)

#### Arithmetic and Numerical Computation
- Use standard form (scientific notation)
- Use significant figures appropriately
- Calculate percentage changes and percentage yields
- Use ratios, fractions and percentages
- Estimate results

#### Handling Data
- Use an appropriate number of significant figures
- Find arithmetic means
- Construct and interpret frequency tables, diagrams, bar charts and histograms
- Understand the principles of sampling as applied to scientific data
- Identify uncertainties in measurements
- Calculate and use percentage errors

#### Algebra
- Understand and use the symbols: =, <, >, ~, ∝
- Rearrange and change the subject of an equation
- Solve algebraic equations
- Use logarithms and exponentials (ln x and e^x)
- Substitute numerical values into algebraic equations

#### Graphs
- Plot two variables from experimental data
- Understand that y = mx + c represents a linear relationship
- Determine the gradient and intercept of a linear graph
- Draw and use the line of best fit
- Understand the physical significance of area between a curve and the x-axis (e.g., rate curves)

#### Geometry and Trigonometry
- Use angles and shapes in regular 2D and 3D structures
- Visualise and represent 3D forms including tetrahedral, octahedral shapes

### Common Calculation Types in OCR Chemistry

#### 1. Moles and Concentration
**Standard approach:**
1. Write the equation (if needed)
2. Calculate moles of known substance: n = m/M or n = cV
3. Use mole ratio to find moles of unknown
4. Calculate required quantity

**Example calculation:**
Calculate the mass of sodium chloride needed to make 250 cm³ of 0.500 mol dm⁻³ solution.
- n = c × V = 0.500 × (250/1000) = 0.125 mol
- m = n × M = 0.125 × 58.5 = 7.31 g

#### 2. Titration Calculations
**Standard approach:**
1. Write balanced equation
2. Calculate moles of titre: n = cV
3. Use mole ratio
4. Calculate concentration or mass

**Example calculation:**
25.0 cm³ of NaOH required 22.50 cm³ of 0.100 mol dm⁻³ HCl for neutralisation.
- Moles HCl = 0.100 × (22.50/1000) = 2.25 × 10⁻³ mol
- Mole ratio 1:1, so moles NaOH = 2.25 × 10⁻³ mol
- [NaOH] = 2.25 × 10⁻³ / (25.0/1000) = 0.0900 mol dm⁻³

#### 3. pH Calculations
**Strong acid:**
[H⁺] = [acid] (for monobasic)
pH = -log[H⁺]

**Weak acid:**
Ka = [H⁺]²/[HA]
[H⁺] = √(Ka × [HA])
pH = -log[H⁺]

**Buffer:**
pH = pKa + log([A⁻]/[HA])

#### 4. Enthalpy Calculations
**From calorimetry:**
q = mcΔT
ΔH = q/n (with correct sign)

**From bond enthalpies:**
ΔH = Σ(bonds broken) - Σ(bonds formed)

**From Hess's Law:**
Construct cycle and sum appropriate routes

#### 5. Equilibrium Calculations (Kc)
**Standard approach:**
1. Set up ICE table (Initial, Change, Equilibrium)
2. Express equilibrium concentrations in terms of x
3. Substitute into Kc expression
4. Solve for x

#### 6. Rate Calculations
**From initial rates:**
- Compare experiments where one concentration changes
- Rate ∝ [X]ⁿ where n is the order

**From graphs:**
- Rate = gradient of concentration-time graph
- Or rate = 1/time for 'clock' reactions

#### 7. Arrhenius Equation
**From ln k vs 1/T graph:**
- Gradient = -Ea/R
- Ea = -gradient × R

**From two data points:**
ln(k₂/k₁) = Ea/R × (1/T₁ - 1/T₂)

### Significant Figures Guide
| Type of data | Significant figures |
|--------------|---------------------|
| Mass (3 d.p. balance) | 4 s.f. |
| Volume (burette) | 4 s.f. |
| Temperature | 3 s.f. |
| pH | 2-3 s.f. |
| Ka, Kc, Kp | 2-3 s.f. |
| Final answer | Same as least precise data |

### Units to Remember
| Quantity | SI Units | Common Units |
|----------|----------|--------------|
| Concentration | mol m⁻³ | mol dm⁻³ |
| Volume | m³ | dm³, cm³ |
| Pressure | Pa | kPa, atm |
| Enthalpy | J mol⁻¹ | kJ mol⁻¹ |
| Entropy | J K⁻¹ mol⁻¹ | J K⁻¹ mol⁻¹ |
| Rate | mol dm⁻³ s⁻¹ | varies |
| Rate constant | depends on order | varies |
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY COMPLETE MODULE COVERAGE
// ============================================================================

const OCR_CHEMISTRY_MODULE_CONTENT = `## OCR A-Level Chemistry A Complete Module Coverage

### Module 1: Development of Practical Skills in Chemistry
This module is assessed throughout all components.

**Practical Skills:**
- Planning experiments
- Implementing procedures safely
- Analysing results
- Evaluating conclusions

**Key Practical Techniques:**
- Volumetric analysis (titrations)
- Qualitative analysis
- Heating under reflux
- Distillation (simple and fractional)
- Filtration and recrystallisation
- Use of separating funnel
- Melting point determination
- TLC and chromatography

### Module 2: Foundations of Chemistry

**2.1 Atoms, Ions and Compounds**
- Atomic structure: protons, neutrons, electrons
- Mass number, atomic number, isotopes
- Mass spectrometry: operation and interpretation
- Calculating relative atomic mass from mass spectra
- Formulae of ionic and covalent compounds
- Constructing equations from formulae

**2.2 Amount of Substance**
- The mole and Avogadro constant
- Molar mass calculations
- Empirical and molecular formulae
- Balanced equations and mole ratios
- Reacting masses and gas volumes
- Ideal gas equation (pV = nRT)
- Concentration and solution calculations
- Percentage yield and atom economy
- Limiting reagent calculations

**2.3 Acid-Base and Redox Reactions**
- Acids and bases: definitions
- Neutralisation and salt formation
- Oxidation states: rules and assignment
- Redox reactions: identification
- Half-equations: writing and balancing
- Constructing ionic equations

**2.4 Electrons, Bonding and Structure**
- Electron configuration: 1s, 2s, 2p notation
- Ionisation energy: definition and trends
- Ionic bonding and properties
- Covalent bonding and properties
- Metallic bonding and properties
- VSEPR theory: predicting shapes
- Bond polarity and electronegativity
- Intermolecular forces: London, dipole-dipole, hydrogen bonding

### Module 3: Periodic Table and Energy

**3.1 The Periodic Table**
- Periodicity: trends across Period 3
- Group 2: reactions with water, oxygen
- Group 2: hydroxide and sulfate solubility trends
- Group 17 (Halogens): physical properties and trends
- Group 17: reactions with metals, non-metals
- Halide reactions: displacement
- Halide reactions with concentrated sulfuric acid
- Tests for halide ions (silver nitrate)
- Disproportionation of chlorine

**3.2 Physical Chemistry**
*Enthalpy Changes:*
- Standard enthalpy changes: ΔfH, ΔcH, ΔneutH
- Hess's Law and enthalpy cycles
- Bond enthalpy calculations
- Calorimetry: q = mcΔT

*Reaction Rates:*
- Factors affecting rate
- Collision theory
- Maxwell-Boltzmann distribution
- Effect of temperature on distribution
- Catalysts: heterogeneous and homogeneous

*Chemical Equilibrium:*
- Dynamic equilibrium characteristics
- Le Chatelier's principle
- Equilibrium constant Kc
- Writing Kc expressions
- Calculating Kc from concentration data

### Module 4: Core Organic Chemistry

**4.1 Basic Concepts**
- Nomenclature: IUPAC naming
- Functional groups
- Structural, displayed, skeletal formulae
- Structural isomerism
- Stereoisomerism: E/Z isomerism
- Reaction mechanisms: curly arrows
- Types: nucleophile, electrophile, radical

**4.2 Alkanes**
- Properties of alkanes
- Combustion reactions
- Free radical substitution mechanism
- Initiation, propagation, termination steps
- Cracking: thermal and catalytic

**4.3 Alkenes**
- Structure and bonding in alkenes
- E/Z isomerism in alkenes
- Addition reactions: H₂, HX, X₂, H₂O
- Electrophilic addition mechanism
- Markovnikov's rule
- Addition polymerisation

**4.4 Alcohols**
- Classification: primary, secondary, tertiary
- Oxidation reactions with acidified dichromate
- Dehydration (elimination) to alkenes
- Substitution reactions with halogenating agents
- Biofuels: ethanol production

**4.5 Halogenoalkanes**
- Properties and uses
- Nucleophilic substitution: SN1 and SN2
- Reactions with OH⁻, CN⁻, NH₃
- Elimination with KOH in ethanol
- Relative hydrolysis rates (bond strength)
- Environmental impact: CFCs and ozone

**4.6 Organic Synthesis (AS)**
- Practical techniques: reflux, distillation
- Separation and purification
- Yield calculations
- IR spectroscopy: identifying functional groups
- Mass spectrometry: M+ peak, fragmentation

### Module 5: Physical Chemistry and Transition Elements

**5.1 Reaction Rates**
- Rate of reaction: definition
- Rate equations: Rate = k[A]ᵐ[B]ⁿ
- Orders of reaction: 0, 1, 2
- Determining orders from experimental data
- Initial rates method
- Half-life for first order reactions
- Rate-determining step and mechanism
- Arrhenius equation: k = Ae^(-Ea/RT)
- Calculating activation energy from data

**5.2 Equilibrium**
- Equilibrium constant Kp
- Partial pressures and mole fractions
- Effect of conditions on Kp
- Brønsted-Lowry acids and bases
- Conjugate acid-base pairs
- pH calculations: strong acids and bases
- Ka and weak acid calculations
- Buffer solutions: how they work
- Buffer calculations
- pH curves and indicators
- Selecting appropriate indicators

**5.3 Enthalpy and Entropy**
- Lattice enthalpy: definition and trends
- Born-Haber cycles
- Enthalpy of hydration and solution
- Entropy: definition and standard entropy
- Calculating entropy changes
- Gibbs free energy: ΔG = ΔH - TΔS
- Predicting feasibility

**5.4 Redox and Electrode Potentials**
- Standard electrode potentials
- Standard hydrogen electrode
- Electrochemical series
- Calculating cell EMF
- Predicting reaction feasibility
- Storage cells and fuel cells
- Electrochemical cells in industry

**5.5 Transition Elements**
- Definition and electronic configurations
- Properties: variable oxidation states, catalysis
- Complex ions: coordination number, ligands
- Naming complexes
- Shapes of complexes
- Colour in complexes: d-d transitions
- Ligand exchange reactions
- Precipitation reactions: NaOH, NH₃
- Catalysis: heterogeneous and homogeneous

### Module 6: Organic Chemistry and Analysis

**6.1 Aromatic Compounds**
- Benzene structure: Kekulé vs delocalised model
- Evidence for delocalised structure
- Electrophilic substitution: general mechanism
- Nitration mechanism
- Friedel-Crafts acylation and alkylation
- Phenol reactions: acidity, bromination

**6.2 Carbonyl Compounds**
- Aldehydes and ketones: structure
- Reduction with NaBH₄
- Nucleophilic addition mechanism (HCN)
- Tests: 2,4-DNP, Tollens', Fehling's
- Distinguishing aldehydes from ketones

**6.3 Carboxylic Acids and Derivatives**
- Properties of carboxylic acids
- Reactions: with bases, carbonates, alcohols
- Ester formation: esterification
- Ester hydrolysis: acid and base
- Acyl chlorides: preparation and reactions
- Acyl chloride mechanisms

**6.4 Amines**
- Naming and classification
- Preparation of amines
- Reactions of amines as bases and nucleophiles
- Comparing basicity: aliphatic, aromatic, ammonia
- Azo dyes formation

**6.5 Polymers**
- Addition polymerisation: mechanism
- Condensation polymerisation
- Polyesters: formation and structure
- Polyamides: formation and structure
- Drawing repeat units
- Biodegradability and recycling

**6.6 Amino Acids, Proteins and DNA**
- Amino acid structure
- Zwitterions and isoelectric point
- Peptide bond formation
- Protein structure: primary, secondary, tertiary, quaternary
- Enzyme action and active sites
- DNA structure and base pairing

**6.7 Organic Synthesis**
- Multi-step synthesis planning
- Retrosynthetic analysis
- Functional group interconversions
- Carbon chain length modification
- Protecting groups
- Chiral centres and stereoselectivity
- Optical isomerism

**6.8 Chromatography and Spectroscopy**
- TLC and column chromatography
- Rf values and identification
- Gas chromatography
- GC-MS coupling
- ¹H NMR: chemical shift, integration, splitting
- ¹³C NMR: chemical shift
- Combined spectroscopic techniques
- Structure determination from spectra
`;

// Topic-specific guidance
const OCR_CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-chemistry-atoms-compounds': `
Module 2.1: Atoms, Ions and Compounds (AS):

**Key Content:**
- Atomic structure: protons, neutrons, electrons
- Mass number (A) and atomic number (Z)
- Isotopes: same Z, different A
- Time of flight mass spectrometry
- Calculating relative atomic mass from mass spectra
- Formulae: ionic compounds use charges, covalent use ratios
- Writing balanced equations including state symbols

**OCR Exam Focus:**
- Calculating Ar from mass spectrum data
- Interpreting mass spectra peaks
- Deducing formulae of ionic compounds from charges
- Writing balanced equations from word descriptions

**Common Question Types:**
- "Calculate the relative atomic mass from the mass spectrum shown" (3-4 marks)
- "Deduce the formula of the compound formed between..." (2 marks)
- "Write a balanced equation for the reaction between..." (2 marks)

**Key Skills:**
- Reading percentage abundance from mass spectra
- Using Ar = Σ(mass × abundance) / Σ(abundance)
- Balancing equations systematically
`,
  'ocr-alevel-chemistry-amount-substance': `
Module 2.2: Amount of Substance (AS):

**Key Content:**
- The mole: amount containing 6.022 × 10²³ particles
- Molar mass (M): mass of one mole in g mol⁻¹
- n = m/M for moles from mass
- c = n/V for concentration (V in dm³)
- Ideal gas equation: pV = nRT
- Molar gas volume at RTP = 24.0 dm³ mol⁻¹
- Empirical formula from percentage composition
- Molecular formula from empirical formula and Mr
- Percentage yield = (actual/theoretical) × 100
- Atom economy = (Mr desired product / Σ Mr all reactants) × 100
- Limiting reagent determination

**OCR Exam Focus:**
- Multi-step moles calculations
- Titration calculations
- Gas law calculations using pV = nRT
- Yield and atom economy in context

**Common Question Types:**
- "Calculate the concentration of..." (3-4 marks)
- "A student found that 25.0 cm³ of solution A required..." (4-5 marks)
- "Calculate the percentage yield for this reaction" (3 marks)
- "Calculate the atom economy for this process" (2-3 marks)

**Key Skills:**
- Converting units (cm³ to dm³, kPa to Pa)
- Using mole ratios from balanced equations
- Identifying limiting reagent from given masses
`,
  'ocr-alevel-chemistry-acids-redox': `
Module 2.3: Acids, Bases and Redox (AS):

**Key Content:**
- Acids as H⁺ donors, bases as H⁺ acceptors
- Strong acids: fully dissociated
- Neutralisation: acid + base → salt + water
- Oxidation states: rules for assignment
- Redox: oxidation is loss of electrons, reduction is gain
- Half-equations: show electron transfer
- Combining half-equations for overall equation
- Disproportionation: same element oxidised and reduced

**OCR Exam Focus:**
- Assigning oxidation states in compounds and ions
- Writing and balancing half-equations
- Identifying oxidising and reducing agents
- Recognising disproportionation reactions

**Common Question Types:**
- "State the oxidation state of X in..." (1-2 marks)
- "Write a half-equation for the reduction of..." (2 marks)
- "Identify the oxidising agent in this reaction" (1 mark)
- "Explain why this is a disproportionation reaction" (2 marks)

**Key Skills:**
- Applying oxidation state rules systematically
- Balancing half-equations using H₂O and H⁺
- Multiplying half-equations to balance electrons
`,
  'ocr-alevel-chemistry-bonding': `
Module 2.4: Electrons, Bonding and Structure (AS):

**Key Content:**
- Electron configuration: 1s², 2s², 2p⁶, etc.
- Ionisation energy: energy to remove 1 mole of electrons
- First IE trends across periods and down groups
- Ionic bonding: electrostatic attraction between ions
- Covalent bonding: shared electron pairs
- Dative covalent: both electrons from one atom
- Metallic bonding: delocalised electrons
- VSEPR: predicting shapes from electron pairs
- Bond angles: linear (180°), trigonal planar (120°), tetrahedral (109.5°)
- Electronegativity: ability to attract bonding electrons
- Bond polarity: difference in electronegativity
- Intermolecular forces: London, permanent dipole, hydrogen bonding

**OCR Exam Focus:**
- Explaining ionisation energy trends
- Predicting and explaining molecular shapes
- Linking structure/bonding to physical properties
- Explaining variations in boiling points

**Common Question Types:**
- "Explain why the first ionisation energy of oxygen is less than nitrogen" (3 marks)
- "State the shape and bond angle of..." (2 marks)
- "Explain why water has a higher boiling point than hydrogen sulfide" (3 marks)
- "Draw a dot-and-cross diagram for..." (2 marks)

**Key Skills:**
- Writing electron configurations including d-block anomalies
- Using VSEPR to predict shapes
- Identifying types of intermolecular forces present
`,
  'ocr-alevel-chemistry-periodic-table': `
Module 3.1: The Periodic Table (AS):

**Key Content:**
- Periodicity: trends in atomic radius, IE, electronegativity
- Period 3 elements: properties across the period
- Group 2: reactions with water and oxygen
- Group 2 hydroxide solubility: increases down group
- Group 2 sulfate solubility: decreases down group
- Group 17 (Halogens): physical properties and trends
- Halogen displacement reactions
- Halide reactions with concentrated H₂SO₄
- Halide tests with AgNO₃ and NH₃
- Chlorine disproportionation in water and alkali

**OCR Exam Focus:**
- Explaining trends in Group 2 reactivity
- Writing equations for halide + H₂SO₄ reactions
- Identifying halides using silver nitrate test
- Understanding chlorine's uses and reactions

**Common Question Types:**
- "Describe and explain the trend in reactivity down Group 2" (3-4 marks)
- "Write equations for the reactions of NaBr and NaI with concentrated H₂SO₄" (4 marks)
- "Describe the test you would use to distinguish between chloride and iodide ions" (3 marks)
- "Explain why chlorine undergoes disproportionation in water" (3 marks)

**Key Skills:**
- Writing equations for Group 2 reactions
- Explaining halide reducing power trends
- Describing observations in qualitative tests
`,
  'ocr-alevel-chemistry-physical1': `
Module 3.2: Physical Chemistry (AS):

**Key Content:**
*Enthalpy:*
- Standard enthalpy of formation ΔfH°
- Standard enthalpy of combustion ΔcH°
- Standard enthalpy of neutralisation ΔneutH°
- Hess's Law: ΔH is independent of route
- Bond enthalpy calculations
- Experimental determination: q = mcΔT

*Reaction Rates:*
- Factors affecting rate: concentration, temperature, surface area, catalyst
- Collision theory: successful collisions
- Maxwell-Boltzmann distribution
- Effect of temperature: shifts distribution
- Catalyst: provides alternative pathway with lower Ea

*Equilibrium:*
- Dynamic equilibrium: rates equal, concentrations constant
- Le Chatelier's principle
- Effect of concentration, pressure, temperature
- Equilibrium constant Kc
- Writing Kc expressions
- Calculating Kc from equilibrium concentrations

**OCR Exam Focus:**
- Constructing and using Hess cycles
- Drawing and interpreting M-B distributions
- Predicting equilibrium shifts
- Calculating Kc values and units

**Common Question Types:**
- "Use the data to calculate the enthalpy change for..." (3-4 marks)
- "Draw a Maxwell-Boltzmann distribution showing the effect of..." (3 marks)
- "Predict and explain the effect on the position of equilibrium of..." (3 marks)
- "Calculate Kc for this equilibrium" (3-4 marks)

**Key Skills:**
- Setting up Hess cycle diagrams
- Sketching M-B curves with correct features
- Working out Kc units from the expression
`,
  'ocr-alevel-chemistry-organic-basics': `
Module 4.1: Basic Organic Concepts (AS):

**Key Content:**
- Nomenclature: IUPAC systematic naming
- Functional groups: identification and naming
- Structural formulae: showing all atoms and bonds
- Displayed formulae: all bonds shown
- Skeletal formulae: carbon skeleton only
- Structural isomerism: same formula, different structure
- E/Z isomerism: restricted rotation around C=C
- Curly arrows: showing electron pair movement
- Nucleophile: electron pair donor
- Electrophile: electron pair acceptor
- Radical: species with unpaired electron

**OCR Exam Focus:**
- Naming branched chain compounds
- Drawing different isomers
- Identifying functional groups
- Drawing mechanisms with curly arrows

**Common Question Types:**
- "Name the following compound..." (1-2 marks)
- "Draw the displayed formula of..." (2 marks)
- "Draw two structural isomers of C₄H₁₀O" (2 marks)
- "Explain why but-2-ene shows E/Z isomerism" (2 marks)

**Key Skills:**
- Applying IUPAC naming rules
- Drawing skeletal formulae
- Identifying chiral centres and E/Z possibilities
`,
  'ocr-alevel-chemistry-alkanes': `
Module 4.2: Alkanes (AS):

**Key Content:**
- General formula: CnH₂n+₂
- Properties: non-polar, insoluble in water
- Uses as fuels
- Combustion: complete and incomplete
- Free radical substitution mechanism
- Initiation: homolytic fission, radical formation
- Propagation: chain-carrying steps
- Termination: radicals combine
- Cracking: thermal and catalytic
- Products: shorter alkanes + alkenes

**OCR Exam Focus:**
- Writing complete mechanism with all steps
- Explaining how radicals form
- Writing propagation equations correctly
- Comparing thermal and catalytic cracking

**Common Question Types:**
- "Draw the mechanism for the reaction between methane and chlorine" (4 marks)
- "Write equations for two different propagation steps" (2 marks)
- "Explain why a mixture of products is formed" (2 marks)
- "Compare thermal and catalytic cracking" (3 marks)

**Key Skills:**
- Using half-headed arrows for homolytic fission
- Writing chain reactions correctly
- Understanding radical stability
`,
  'ocr-alevel-chemistry-alkenes': `
Module 4.3: Alkenes (AS):

**Key Content:**
- General formula: CnH₂n
- Structure: C=C double bond, planar around C=C
- E/Z isomerism: different groups on each carbon
- Addition reactions: H₂, X₂, HX, H₂O
- Electrophilic addition mechanism
- Formation of carbocation intermediate
- Markovnikov's rule: H goes to C with more H's
- Addition polymerisation
- Structure of polymers: repeat units

**OCR Exam Focus:**
- Drawing electrophilic addition mechanisms
- Predicting major products using Markovnikov's rule
- Explaining carbocation stability
- Drawing polymer repeat units

**Common Question Types:**
- "Draw the mechanism for the reaction between propene and HBr" (3-4 marks)
- "Predict the major product and explain your answer" (3 marks)
- "Draw the repeat unit of the polymer formed from..." (2 marks)
- "Explain why this reaction is called electrophilic addition" (2 marks)

**Key Skills:**
- Drawing curly arrows from π bond to electrophile
- Showing carbocation intermediate
- Identifying Markovnikov product
`,
  'ocr-alevel-chemistry-alcohols': `
Module 4.4: Alcohols (AS):

**Key Content:**
- Classification: primary, secondary, tertiary
- Physical properties: hydrogen bonding affects boiling point
- Combustion: use as biofuels
- Oxidation with acidified dichromate (Cr₂O₇²⁻/H⁺):
  - Primary → aldehyde (distil) or carboxylic acid (reflux)
  - Secondary → ketone
  - Tertiary → no oxidation
- Dehydration: forms alkenes with concentrated H₂SO₄ or Al₂O₃
- Esterification: with carboxylic acids
- Halogenation: substitution with HX or PX₃/PX₅

**OCR Exam Focus:**
- Classifying alcohols from structure
- Writing oxidation products and conditions
- Explaining why tertiary alcohols don't oxidise
- Describing dehydration conditions

**Common Question Types:**
- "Classify this alcohol as primary, secondary or tertiary" (1 mark)
- "State the product and conditions for oxidising butan-1-ol to..." (3 marks)
- "Explain why 2-methylpropan-2-ol cannot be oxidised" (2 marks)
- "Write an equation for the dehydration of propan-2-ol" (2 marks)

**Key Skills:**
- Identifying alcohol classification from structure
- Writing [O] equations for oxidation
- Predicting elimination products
`,
  'ocr-alevel-chemistry-halogenoalkanes': `
Module 4.5: Halogenoalkanes (AS):

**Key Content:**
- Naming: halo- prefix with position number
- Physical properties: polar C-X bond
- Nucleophilic substitution reactions:
  - With OH⁻: forms alcohol
  - With CN⁻: forms nitrile (lengthens chain)
  - With NH₃: forms amine
- Mechanisms: SN1 and SN2
- Elimination with KOH in ethanol
- Relative hydrolysis rates: C-I > C-Br > C-Cl (bond strength)
- Environmental concerns: CFCs and ozone depletion

**OCR Exam Focus:**
- Drawing nucleophilic substitution mechanisms
- Comparing SN1 and SN2 pathways
- Explaining relative hydrolysis rates
- Understanding CFC environmental impact

**Common Question Types:**
- "Draw the mechanism for the reaction between bromoethane and OH⁻" (3 marks)
- "Explain why iodoalkanes hydrolyse faster than chloroalkanes" (2-3 marks)
- "State the conditions for elimination of HBr from bromoethane" (2 marks)
- "Explain how CFCs damage the ozone layer" (3 marks)

**Key Skills:**
- Drawing curly arrow from nucleophile to C
- Comparing bond enthalpies
- Writing elimination equations
`,
  'ocr-alevel-chemistry-synthesis-as': `
Module 4.6: Organic Synthesis and Analysis (AS):

**Key Content:**
- Practical techniques:
  - Heating under reflux
  - Distillation
  - Separation using separating funnel
  - Drying with anhydrous salt
  - Purification by recrystallisation
- Yield calculations
- IR spectroscopy:
  - Characteristic absorptions
  - Identifying functional groups
- Mass spectrometry:
  - Molecular ion peak (M+)
  - Fragmentation patterns
  - Identifying fragments

**OCR Exam Focus:**
- Describing practical procedures
- Interpreting IR spectra
- Using MS for structure determination
- Calculating percentage yields

**Common Question Types:**
- "Describe how you would purify the organic product" (3-4 marks)
- "The IR spectrum shows absorptions at... What functional groups are present?" (2-3 marks)
- "The mass spectrum shows peaks at m/z = ... Suggest identities" (3 marks)
- "Calculate the percentage yield" (3 marks)

**Key Skills:**
- Knowing key IR absorption regions
- Identifying M+ and common fragment peaks
- Linking spectra to structure
`,
  'ocr-alevel-chemistry-rates': `
Module 5.1: Reaction Rates (A2):

**Key Content:**
- Rate of reaction: change in concentration per unit time
- Rate equation: Rate = k[A]ᵐ[B]ⁿ
- Order of reaction: power to which concentration is raised
- Overall order: sum of individual orders
- Rate constant k: units depend on overall order
- Half-life: time for concentration to halve
- First order: constant half-life, t½ = ln2/k
- Determining orders from experimental data
- Initial rates method
- Rate-determining step: slowest step in mechanism
- Arrhenius equation: k = Ae^(-Ea/RT)
- Calculating activation energy from gradient

**OCR Exam Focus:**
- Determining orders from initial rates data
- Calculating rate constants
- Using half-life for first order reactions
- Finding Ea from Arrhenius plots

**Common Question Types:**
- "Use the data to determine the order with respect to each reactant" (4-5 marks)
- "Calculate the rate constant and give its units" (3 marks)
- "The half-life of the reaction is 45 s. Calculate the rate constant" (2 marks)
- "Use the graph to calculate the activation energy" (3-4 marks)

**Key Skills:**
- Setting up rate comparisons between experiments
- Working out rate constant units
- Using ln k vs 1/T graphs
`,
  'ocr-alevel-chemistry-equilibrium': `
Module 5.2: Equilibrium (A2):

**Key Content:**
- Kp: equilibrium constant in terms of partial pressures
- Partial pressure: pA = xA × Ptotal
- Mole fraction: xA = moles A / total moles
- Effect of conditions on Kp (only temperature changes K)
- Brønsted-Lowry theory: acids donate H⁺, bases accept
- Conjugate acid-base pairs
- Strong and weak acids/bases
- Ka: acid dissociation constant
- pH calculations for strong and weak acids
- pKa = -log Ka
- Buffer solutions: resist pH changes
- Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])
- pH curves for titrations
- Indicator selection: pKa near equivalence point pH

**OCR Exam Focus:**
- Kp calculations with mole fractions
- pH calculations for weak acids
- Buffer calculations
- Interpreting pH curves

**Common Question Types:**
- "Calculate Kp for this equilibrium" (4-5 marks)
- "Calculate the pH of a 0.10 mol dm⁻³ solution of ethanoic acid" (3-4 marks)
- "Calculate the pH of a buffer containing..." (3-4 marks)
- "Sketch the pH curve and suggest a suitable indicator" (4 marks)

**Key Skills:**
- Using mole fractions to find partial pressures
- Using Ka ≈ [H⁺]²/[HA] for weak acids
- Applying Henderson-Hasselbalch equation
`,
  'ocr-alevel-chemistry-thermodynamics': `
Module 5.3: Enthalpy and Entropy (A2):

**Key Content:**
- Lattice enthalpy: energy to separate ions to infinity
- Born-Haber cycles: applying Hess's Law to ionic compounds
- Enthalpy of atomisation
- First and second ionisation energies
- First and second electron affinities
- Theoretical vs experimental lattice enthalpies
- Entropy: measure of disorder
- Standard entropy values
- Entropy changes: ΔS = ΣS°(products) - ΣS°(reactants)
- Gibbs free energy: ΔG = ΔH - TΔS
- Predicting feasibility: ΔG < 0

**OCR Exam Focus:**
- Constructing and using Born-Haber cycles
- Comparing lattice enthalpies
- Calculating entropy changes
- Predicting feasibility from ΔG

**Common Question Types:**
- "Use the Born-Haber cycle to calculate the lattice enthalpy" (4-5 marks)
- "Explain why the experimental lattice enthalpy differs from theoretical" (3 marks)
- "Calculate the entropy change for this reaction" (2-3 marks)
- "Calculate ΔG and determine if the reaction is feasible at 298 K" (4 marks)

**Key Skills:**
- Drawing Born-Haber cycles with correct signs
- Understanding trend in lattice enthalpy with ion size/charge
- Calculating temperature at which ΔG = 0
`,
  'ocr-alevel-chemistry-redox2': `
Module 5.4: Redox and Electrode Potentials (A2):

**Key Content:**
- Standard electrode potential E°
- Standard hydrogen electrode (SHE): E° = 0.00 V
- Electrochemical series
- Cell EMF: E°cell = E°(+) - E°(-)
- Predicting feasibility from E° values
- Positive E°cell = feasible reaction
- Limitations of using E° values
- Storage cells: rechargeable batteries
- Fuel cells: hydrogen-oxygen fuel cell
- Advantages of fuel cells

**OCR Exam Focus:**
- Calculating cell EMF
- Using E° to predict reaction feasibility
- Writing cell diagrams
- Understanding fuel cell operation

**Common Question Types:**
- "Calculate the EMF of a cell made from Zn²⁺/Zn and Cu²⁺/Cu" (2-3 marks)
- "Use E° values to predict whether the reaction is feasible" (3 marks)
- "Write a cell diagram for this electrochemical cell" (2 marks)
- "Explain how a hydrogen fuel cell works" (4-6 marks)

**Key Skills:**
- Identifying positive and negative electrodes
- Writing cell notation correctly
- Understanding that more positive species is reduced
`,
  'ocr-alevel-chemistry-transition-metals': `
Module 5.5: Transition Elements (A2):

**Key Content:**
- Definition: d-block element with incomplete d subshell in ion
- Characteristic properties:
  - Variable oxidation states
  - Form coloured compounds
  - Catalytic activity
  - Form complex ions
- Complex ions: central metal ion + ligands
- Coordination number: number of coordinate bonds
- Ligands: molecules/ions that donate electron pairs
- Common ligands: H₂O, NH₃, Cl⁻, CN⁻, OH⁻
- Shapes: octahedral (6), tetrahedral (4), square planar (4), linear (2)
- Colour: d-d electronic transitions
- Crystal field splitting
- Ligand exchange reactions
- Precipitation reactions with NaOH and NH₃

**OCR Exam Focus:**
- Writing formulae and names of complexes
- Explaining colour in terms of d-d transitions
- Predicting products of ligand exchange
- Describing precipitation reactions and observations

**Common Question Types:**
- "Write the formula of the complex formed when..." (2 marks)
- "Explain why [Cu(H₂O)₆]²⁺ is blue" (3-4 marks)
- "Describe and explain what is observed when excess NH₃ is added to..." (4 marks)
- "Explain why transition metals are good catalysts" (3 marks)

**Key Skills:**
- Determining coordination number from formula
- Using IUPAC naming for complexes
- Describing colour changes in ligand exchange
`,
  'ocr-alevel-chemistry-aromatics': `
Module 6.1: Aromatic Compounds (A2):

**Key Content:**
- Benzene structure: delocalised ring of electrons
- Evidence: equal bond lengths, enthalpy of hydrogenation
- Kekulé model limitations
- Electrophilic substitution: general mechanism
- Nitration: HNO₃ + H₂SO₄ (generates NO₂⁺)
- Friedel-Crafts acylation: RCOCl + AlCl₃
- Friedel-Crafts alkylation: RCl + AlCl₃
- Why substitution not addition: preserves stability
- Phenol: reactions and relative acidity
- Directing effects of substituents

**OCR Exam Focus:**
- Drawing electrophilic substitution mechanisms
- Explaining why benzene undergoes substitution
- Writing conditions for each reaction type
- Understanding phenol chemistry

**Common Question Types:**
- "Draw the mechanism for the nitration of benzene" (4-5 marks)
- "Explain why benzene undergoes substitution rather than addition" (3 marks)
- "State the reagents and conditions for Friedel-Crafts acylation" (2-3 marks)
- "Explain why phenol is more acidic than ethanol" (3 marks)

**Key Skills:**
- Drawing delocalised π system
- Showing electrophile attack and regeneration of aromaticity
- Understanding role of catalyst in Friedel-Crafts
`,
  'ocr-alevel-chemistry-carbonyls': `
Module 6.2: Carbonyl Compounds (A2):

**Key Content:**
- Aldehydes and ketones: C=O functional group
- Physical properties: polar, hydrogen bonding with water
- Reduction with NaBH₄: forms alcohols
- Nucleophilic addition mechanism with HCN
- Step 1: CN⁻ attacks δ+ carbon
- Step 2: H⁺ protonates O⁻
- Tests:
  - 2,4-DNP: orange precipitate with all carbonyls
  - Tollens' reagent: silver mirror with aldehydes
  - Fehling's solution: red precipitate with aldehydes
- Distinguishing aldehydes from ketones

**OCR Exam Focus:**
- Drawing nucleophilic addition mechanism
- Describing test procedures and observations
- Explaining why only aldehydes react with Tollens'/Fehling's

**Common Question Types:**
- "Draw the mechanism for the reaction between propanone and HCN" (4 marks)
- "Describe how you would distinguish between propanal and propanone" (3-4 marks)
- "Name the organic product of reducing butanone with NaBH₄" (2 marks)
- "Explain why only aldehydes give a positive Tollens' test" (2 marks)

**Key Skills:**
- Showing curly arrows from CN⁻ to carbonyl carbon
- Knowing test conditions and observations
- Understanding oxidation of aldehydes
`,
  'ocr-alevel-chemistry-carboxylic-acids': `
Module 6.3: Carboxylic Acids and Derivatives (A2):

**Key Content:**
- Carboxylic acid properties: weak acids, hydrogen bonding
- Reactions as acids: with bases, carbonates, metals
- Esterification: with alcohols (H₂SO₄ catalyst)
- Ester hydrolysis: acid or base catalysed
- Acyl chlorides: highly reactive
- Acyl chloride reactions:
  - With water → carboxylic acid + HCl
  - With alcohols → ester + HCl
  - With ammonia → amide + HCl
  - With amines → substituted amide + HCl
- Mechanism: nucleophilic addition-elimination

**OCR Exam Focus:**
- Writing esterification equations and conditions
- Drawing acyl chloride mechanisms
- Comparing acyl chloride and carboxylic acid reactivity
- Understanding ester hydrolysis mechanisms

**Common Question Types:**
- "Write an equation for the formation of ethyl ethanoate" (2 marks)
- "Draw the mechanism for the reaction between ethanoyl chloride and methanol" (4 marks)
- "Explain why acyl chlorides are more reactive than carboxylic acids" (3 marks)
- "State the conditions for base hydrolysis of an ester" (2 marks)

**Key Skills:**
- Writing ester names and structures
- Drawing addition-elimination mechanism
- Understanding tetrahedral intermediate
`,
  'ocr-alevel-chemistry-amines': `
Module 6.4: Amines (A2):

**Key Content:**
- Classification: primary, secondary, tertiary, quaternary
- Physical properties: hydrogen bonding, smell
- Preparation of amines:
  - From halogenoalkanes + NH₃ (excess)
  - From nitriles + reducing agent
  - From nitro compounds + reducing agent
- Basicity of amines
- Relative basicity: aliphatic > ammonia > aromatic
- Amines as nucleophiles
- Formation of amides from acyl chlorides
- Azo dyes: diazotisation and coupling

**OCR Exam Focus:**
- Writing preparation equations
- Explaining relative basicity
- Describing azo dye formation
- Drawing amine reactions with acyl chlorides

**Common Question Types:**
- "Describe how you would prepare ethylamine from bromoethane" (3 marks)
- "Explain why methylamine is a stronger base than ammonia" (3 marks)
- "Explain why phenylamine is a weaker base than ammonia" (3 marks)
- "Describe the formation of an azo dye from phenylamine" (4-5 marks)

**Key Skills:**
- Understanding electron-donating/withdrawing effects
- Writing equations for diazonium salt formation
- Explaining coupling reactions
`,
  'ocr-alevel-chemistry-polymers': `
Module 6.5: Polymers (A2):

**Key Content:**
- Addition polymerisation: review from AS
- Condensation polymerisation:
  - Two functional groups react
  - Small molecule eliminated
- Polyesters:
  - From diol + dicarboxylic acid (or diol + diester)
  - Ester links, water eliminated
  - Example: PET from ethane-1,2-diol + benzene-1,4-dicarboxylic acid
- Polyamides:
  - From diamine + dicarboxylic acid (or diamine + diacyl chloride)
  - Amide (peptide) links, water (or HCl) eliminated
  - Example: nylon-6,6
- Drawing repeat units
- Biodegradability and recycling issues

**OCR Exam Focus:**
- Drawing condensation polymer repeat units
- Identifying monomers from polymer structure
- Understanding linking groups
- Environmental considerations

**Common Question Types:**
- "Draw the repeat unit of the polyester formed from..." (3 marks)
- "Identify the monomers used to make this polyamide" (2 marks)
- "Explain the difference between addition and condensation polymerisation" (3 marks)
- "Discuss the environmental issues with polymer disposal" (4-6 marks)

**Key Skills:**
- Drawing structures showing link formation
- Identifying -COO- and -CONH- links
- Understanding hydrolysis of condensation polymers
`,
  'ocr-alevel-chemistry-amino-acids': `
Module 6.6: Amino Acids, Proteins and DNA (A2):

**Key Content:**
- Amino acid structure: -NH₂ and -COOH on same carbon
- Zwitterions: internal salt at isoelectric point
- Isoelectric point: pH where net charge = 0
- Peptide bond formation: condensation reaction
- Peptide bond hydrolysis: acid or enzyme
- Protein structure levels:
  - Primary: sequence of amino acids
  - Secondary: α-helix, β-pleated sheet (H-bonds)
  - Tertiary: overall 3D shape (various interactions)
  - Quaternary: multiple polypeptide chains
- Enzyme action: active site, specificity
- DNA structure: double helix, base pairing (A-T, G-C)

**OCR Exam Focus:**
- Drawing amino acids at different pH values
- Writing peptide bond formation equations
- Explaining protein structure levels
- Understanding enzyme-substrate interaction

**Common Question Types:**
- "Draw the structure of glycine at pH 7" (2 marks)
- "Explain what is meant by the isoelectric point" (2 marks)
- "Describe how a peptide bond is formed" (3 marks)
- "Explain the difference between secondary and tertiary structure" (4 marks)

**Key Skills:**
- Drawing zwitterion structures
- Showing peptide link formation
- Understanding forces in protein structure
`,
  'ocr-alevel-chemistry-synthesis': `
Module 6.7: Organic Synthesis (A2):

**Key Content:**
- Planning multi-step syntheses
- Retrosynthetic analysis: working backwards
- Functional group interconversions
- Key transformations:
  - Alkene to alcohol (hydration)
  - Alcohol to halogenoalkane (HX, PX₃)
  - Halogenoalkane to alcohol (NaOH/H₂O)
  - Halogenoalkane to nitrile (KCN)
  - Nitrile to carboxylic acid (H₃O⁺)
  - Nitrile to amine (LiAlH₄)
  - Alcohol to aldehyde/ketone (oxidation)
  - Aldehyde to carboxylic acid (oxidation)
- Carbon chain length changes:
  - Increase: use CN⁻ then hydrolyse/reduce
  - Decrease: use oxidation

**OCR Exam Focus:**
- Planning synthetic routes
- Identifying reagents and conditions
- Understanding chirality in synthesis
- Maximising yield and atom economy

**Common Question Types:**
- "Suggest a synthetic route to convert... to..." (4-6 marks)
- "For each step, state the reagents and conditions" (3-4 marks)
- "Explain why step 2 produces a racemic mixture" (2 marks)
- "Calculate the atom economy for this synthesis" (2 marks)

**Key Skills:**
- Working backwards from target molecule
- Knowing key reagents for each transformation
- Understanding when chiral centres form
`,
  'ocr-alevel-chemistry-analysis': `
Module 6.8: Chromatography and Spectroscopy (A2):

**Key Content:**
- TLC: Rf values, identification
- Gas chromatography: separation and retention times
- GC-MS: combined technique
- Mass spectrometry: M+ peak, fragmentation
- Common fragment ions: 15 (CH₃⁺), 29 (CHO⁺/C₂H₅⁺), 43 (CH₃CO⁺), 45 (CHO₂⁺)
- IR spectroscopy: functional group identification
- ¹H NMR:
  - Chemical shift (δ): environment of H
  - Integration: ratio of H atoms
  - Splitting (n+1 rule): adjacent H atoms
  - D₂O shake: removes O-H/N-H signals
- ¹³C NMR:
  - Chemical shift: carbon environment
  - Number of peaks = number of carbon environments
- Combined techniques for structure determination

**OCR Exam Focus:**
- Interpreting NMR spectra
- Using multiple spectra together
- Deducing structures from spectral data
- Understanding splitting patterns

**Common Question Types:**
- "Use the spectra to deduce the structure of compound X" (6-8 marks)
- "Explain why the ¹H NMR shows a quartet at δ 2.4" (2 marks)
- "The IR spectrum shows a broad absorption at 2500-3300 cm⁻¹. What does this indicate?" (2 marks)
- "Suggest the identities of the fragments at m/z = 43 and m/z = 29" (2 marks)

**Key Skills:**
- Using chemical shift tables
- Applying n+1 rule for splitting
- Integrating information from multiple spectra
`,
};

// ============================================================================
// OCR A-LEVEL CHEMISTRY WORKED EXAMPLES (25+ QUESTIONS)
// ============================================================================

const OCR_CHEMISTRY_WORKED_EXAMPLES = `## OCR A-Level Chemistry Worked Examples

### WORKED EXAMPLE 1: Relative Atomic Mass from Mass Spectrum
**Q:** A sample of boron contains two isotopes. The mass spectrum shows peaks at m/z = 10 (relative abundance 20%) and m/z = 11 (relative abundance 80%). Calculate the relative atomic mass of boron. [2 marks]

**Solution:**
- Ar = (10 × 20 + 11 × 80) / (20 + 80)
- Ar = (200 + 880) / 100
- Ar = 1080 / 100
- **Ar = 10.8** ✓

**Mark Scheme:**
- Correct method with weighted average [1]
- Correct answer 10.8 [1]

---

### WORKED EXAMPLE 2: Moles and Gas Volume Calculation
**Q:** Calculate the volume of carbon dioxide produced at RTP when 2.10 g of sodium hydrogencarbonate decomposes completely according to: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ [3 marks]

**Solution:**
- Mr of NaHCO₃ = 23 + 1 + 12 + (3 × 16) = 84
- Moles of NaHCO₃ = 2.10 / 84 = 0.025 mol
- From equation: 2 mol NaHCO₃ produces 1 mol CO₂
- Moles of CO₂ = 0.025 / 2 = 0.0125 mol
- Volume at RTP = 0.0125 × 24.0 = **0.300 dm³** ✓

**Mark Scheme:**
- Moles of NaHCO₃ calculated correctly [1]
- Mole ratio used correctly [1]
- Volume calculated with units [1]

---

### WORKED EXAMPLE 3: Titration Calculation
**Q:** 25.0 cm³ of sulfuric acid was neutralised by 28.50 cm³ of 0.200 mol dm⁻³ sodium hydroxide solution. Calculate the concentration of the sulfuric acid. [3 marks]

H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O

**Solution:**
- Moles of NaOH = 0.200 × (28.50/1000) = 5.70 × 10⁻³ mol
- From equation: 1 mol H₂SO₄ reacts with 2 mol NaOH
- Moles of H₂SO₄ = 5.70 × 10⁻³ / 2 = 2.85 × 10⁻³ mol
- Concentration = 2.85 × 10⁻³ / (25.0/1000)
- **[H₂SO₄] = 0.114 mol dm⁻³** ✓

**Mark Scheme:**
- Moles of NaOH [1]
- Correct mole ratio used [1]
- Concentration with units [1]

---

### WORKED EXAMPLE 4: Ideal Gas Equation
**Q:** Calculate the volume occupied by 0.500 mol of an ideal gas at 100 kPa and 350 K. (R = 8.314 J K⁻¹ mol⁻¹) [3 marks]

**Solution:**
- pV = nRT
- V = nRT/p
- V = (0.500 × 8.314 × 350) / (100 × 1000)
- V = 1455 / 100000
- V = 0.01455 m³
- **V = 14.6 dm³** ✓

**Mark Scheme:**
- Correct rearrangement of pV = nRT [1]
- Correct substitution (p in Pa) [1]
- Correct answer with units [1]

---

### WORKED EXAMPLE 5: Enthalpy Change from Hess's Law
**Q:** Use the following data to calculate the enthalpy of formation of ethanol, C₂H₅OH.
ΔcH°[C₂H₅OH(l)] = -1367 kJ mol⁻¹
ΔcH°[C(s)] = -394 kJ mol⁻¹
ΔcH°[H₂(g)] = -286 kJ mol⁻¹ [3 marks]

**Solution:**
- Target: 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)
- Using Hess's Law via combustion route:
- ΔfH° = Σ ΔcH°[reactants] - Σ ΔcH°[products]
- ΔfH° = [2(-394) + 3(-286)] - (-1367)
- ΔfH° = [-788 - 858] - (-1367)
- ΔfH° = -1646 + 1367
- **ΔfH° = -279 kJ mol⁻¹** ✓

**Mark Scheme:**
- Correct Hess's Law approach [1]
- Correct substitution with coefficients [1]
- Correct answer with sign and units [1]

---

### WORKED EXAMPLE 6: Bond Enthalpy Calculation
**Q:** Calculate the enthalpy change for: CH₄ + 2O₂ → CO₂ + 2H₂O
Using bond enthalpies: C-H = 412, O=O = 496, C=O = 805, O-H = 463 kJ mol⁻¹ [4 marks]

**Solution:**
- Bonds broken: 4 × C-H + 2 × O=O = 4(412) + 2(496) = 1648 + 992 = 2640 kJ
- Bonds formed: 2 × C=O + 4 × O-H = 2(805) + 4(463) = 1610 + 1852 = 3462 kJ
- ΔH = bonds broken - bonds formed
- ΔH = 2640 - 3462
- **ΔH = -822 kJ mol⁻¹** ✓

**Mark Scheme:**
- Correct bonds broken identified [1]
- Correct bonds formed identified [1]
- Correct calculation method [1]
- Correct answer with sign [1]

---

### WORKED EXAMPLE 7: Equilibrium Constant Kc
**Q:** At equilibrium, a 2.0 dm³ vessel contains 0.40 mol N₂, 0.60 mol H₂ and 0.20 mol NH₃. Calculate Kc for: N₂ + 3H₂ ⇌ 2NH₃ [4 marks]

**Solution:**
- [N₂] = 0.40/2.0 = 0.20 mol dm⁻³
- [H₂] = 0.60/2.0 = 0.30 mol dm⁻³
- [NH₃] = 0.20/2.0 = 0.10 mol dm⁻³
- Kc = [NH₃]²/([N₂][H₂]³)
- Kc = (0.10)²/((0.20)(0.30)³)
- Kc = 0.01/(0.20 × 0.027)
- Kc = 0.01/0.0054
- **Kc = 1.85 mol⁻² dm⁶** ✓

**Mark Scheme:**
- Concentrations calculated [1]
- Correct Kc expression [1]
- Correct numerical value [1]
- Correct units [1]

---

### WORKED EXAMPLE 8: pH of Weak Acid
**Q:** Calculate the pH of a 0.100 mol dm⁻³ solution of ethanoic acid. Ka = 1.74 × 10⁻⁵ mol dm⁻³ [3 marks]

**Solution:**
- For weak acid: Ka = [H⁺]²/[HA]
- [H⁺]² = Ka × [HA] = 1.74 × 10⁻⁵ × 0.100
- [H⁺]² = 1.74 × 10⁻⁶
- [H⁺] = √(1.74 × 10⁻⁶) = 1.32 × 10⁻³ mol dm⁻³
- pH = -log(1.32 × 10⁻³)
- **pH = 2.88** ✓

**Mark Scheme:**
- Correct use of Ka expression [1]
- Correct [H⁺] calculation [1]
- Correct pH [1]

---

### WORKED EXAMPLE 9: Buffer pH Calculation
**Q:** Calculate the pH of a buffer solution containing 0.15 mol dm⁻³ ethanoic acid and 0.25 mol dm⁻³ sodium ethanoate. Ka = 1.74 × 10⁻⁵ mol dm⁻³ [3 marks]

**Solution:**
- pKa = -log(1.74 × 10⁻⁵) = 4.76
- Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])
- pH = 4.76 + log(0.25/0.15)
- pH = 4.76 + log(1.67)
- pH = 4.76 + 0.22
- **pH = 4.98** ✓

**Mark Scheme:**
- Correct use of Henderson-Hasselbalch equation [1]
- Correct substitution [1]
- Correct answer [1]

---

### WORKED EXAMPLE 10: Kp Calculation
**Q:** In the equilibrium N₂O₄ ⇌ 2NO₂, at equilibrium there are 0.20 mol N₂O₄ and 0.80 mol NO₂ at a total pressure of 200 kPa. Calculate Kp. [4 marks]

**Solution:**
- Total moles = 0.20 + 0.80 = 1.00 mol
- Mole fraction N₂O₄ = 0.20/1.00 = 0.20
- Mole fraction NO₂ = 0.80/1.00 = 0.80
- Partial pressure N₂O₄ = 0.20 × 200 = 40 kPa
- Partial pressure NO₂ = 0.80 × 200 = 160 kPa
- Kp = p(NO₂)²/p(N₂O₄) = 160²/40 = 25600/40
- **Kp = 640 kPa** ✓

**Mark Scheme:**
- Mole fractions calculated [1]
- Partial pressures calculated [1]
- Correct Kp expression [1]
- Correct answer with units [1]

---

### WORKED EXAMPLE 11: Born-Haber Cycle
**Q:** Use the following data to calculate the lattice enthalpy of sodium chloride.
ΔfH°[NaCl] = -411 kJ mol⁻¹
ΔatH°[Na] = +107 kJ mol⁻¹
IE₁[Na] = +496 kJ mol⁻¹
ΔatH°[½Cl₂] = +122 kJ mol⁻¹
EA₁[Cl] = -349 kJ mol⁻¹ [4 marks]

**Solution:**
- Using Born-Haber cycle:
- ΔfH° = ΔatH°[Na] + IE₁[Na] + ΔatH°[Cl] + EA₁[Cl] + ΔLE
- -411 = 107 + 496 + 122 + (-349) + ΔLE
- -411 = 376 + ΔLE
- **ΔLE = -787 kJ mol⁻¹** ✓

**Mark Scheme:**
- Correct Born-Haber cycle set up [1]
- All values included with correct signs [1]
- Correct rearrangement [1]
- Correct answer [1]

---

### WORKED EXAMPLE 12: Gibbs Free Energy
**Q:** For the reaction CaCO₃(s) → CaO(s) + CO₂(g):
ΔH° = +178 kJ mol⁻¹, ΔS° = +165 J K⁻¹ mol⁻¹
(a) Calculate ΔG at 298 K [2 marks]
(b) Calculate the temperature at which ΔG = 0 [2 marks]

**Solution:**
(a) ΔG = ΔH - TΔS
- ΔG = 178000 - (298 × 165) [convert kJ to J]
- ΔG = 178000 - 49170
- **ΔG = +129 kJ mol⁻¹** (not feasible at 298 K) ✓

(b) When ΔG = 0: ΔH = TΔS
- T = ΔH/ΔS = 178000/165
- **T = 1079 K (or 806°C)** ✓

**Mark Scheme:**
(a) Correct substitution [1], correct answer [1]
(b) Correct rearrangement [1], correct temperature [1]

---

### WORKED EXAMPLE 13: Cell EMF Calculation
**Q:** Calculate the EMF of a cell made from these half-cells:
Zn²⁺(aq) + 2e⁻ → Zn(s) E° = -0.76 V
Cu²⁺(aq) + 2e⁻ → Cu(s) E° = +0.34 V [2 marks]

**Solution:**
- Cu has more positive E°, so Cu is the positive electrode
- E°cell = E°(+) - E°(-)
- E°cell = +0.34 - (-0.76)
- **E°cell = +1.10 V** ✓

**Mark Scheme:**
- Correct identification of positive electrode [1]
- Correct EMF [1]

---

### WORKED EXAMPLE 14: Rate Equation Orders
**Q:** The following data were obtained for the reaction A + B → C:

| Expt | [A] / mol dm⁻³ | [B] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|------|----------------|----------------|------------------------------|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 8.0 × 10⁻⁴ |
| 3 | 0.10 | 0.20 | 4.0 × 10⁻⁴ |

Determine the order with respect to A and B, and calculate k. [5 marks]

**Solution:**
- Order w.r.t. A: Compare Expt 1 and 2 (B constant)
  - [A] doubles: 0.10 → 0.20 (×2)
  - Rate quadruples: 2.0 × 10⁻⁴ → 8.0 × 10⁻⁴ (×4 = 2²)
  - **Order w.r.t. A = 2** ✓

- Order w.r.t. B: Compare Expt 1 and 3 (A constant)
  - [B] doubles: 0.10 → 0.20 (×2)
  - Rate doubles: 2.0 × 10⁻⁴ → 4.0 × 10⁻⁴ (×2)
  - **Order w.r.t. B = 1** ✓

- Rate = k[A]²[B]
- Using Expt 1: 2.0 × 10⁻⁴ = k × (0.10)² × 0.10
- 2.0 × 10⁻⁴ = k × 0.001
- **k = 0.20 mol⁻² dm⁶ s⁻¹** ✓

**Mark Scheme:**
- Order w.r.t. A with reasoning [1]
- Order w.r.t. B with reasoning [1]
- Rate equation [1]
- k value [1]
- k units [1]

---

### WORKED EXAMPLE 15: Arrhenius Equation
**Q:** The rate constant for a reaction is 2.5 × 10⁻³ s⁻¹ at 300 K and 1.2 × 10⁻² s⁻¹ at 320 K. Calculate the activation energy. (R = 8.314 J K⁻¹ mol⁻¹) [4 marks]

**Solution:**
- Using ln(k₂/k₁) = Ea/R × (1/T₁ - 1/T₂)
- ln(1.2 × 10⁻²/2.5 × 10⁻³) = Ea/8.314 × (1/300 - 1/320)
- ln(4.8) = Ea/8.314 × (0.00333 - 0.003125)
- 1.569 = Ea/8.314 × 0.000208
- Ea = 1.569 × 8.314 / 0.000208
- **Ea = 62700 J mol⁻¹ = 62.7 kJ mol⁻¹** ✓

**Mark Scheme:**
- Correct equation used [1]
- Correct substitution [1]
- Correct calculation [1]
- Correct answer with units [1]

---

### WORKED EXAMPLE 16: Percentage Yield and Atom Economy
**Q:** Aspirin (Mr = 180) is made from salicylic acid (Mr = 138) and ethanoic anhydride (Mr = 102).
C₇H₆O₃ + C₄H₆O₃ → C₉H₈O₄ + CH₃COOH

A student started with 5.00 g of salicylic acid and obtained 4.80 g of aspirin.
(a) Calculate the percentage yield [3 marks]
(b) Calculate the atom economy [2 marks]

**Solution:**
(a) Moles of salicylic acid = 5.00/138 = 0.0362 mol
- Theoretical moles of aspirin = 0.0362 mol (1:1 ratio)
- Theoretical mass = 0.0362 × 180 = 6.52 g
- % yield = (4.80/6.52) × 100 = **73.6%** ✓

(b) Atom economy = (Mr of aspirin / Σ Mr of reactants) × 100
- Atom economy = (180 / (138 + 102)) × 100
- Atom economy = (180/240) × 100 = **75.0%** ✓

**Mark Scheme:**
(a) Theoretical yield calculated [1], correct method [1], correct answer [1]
(b) Correct expression [1], correct answer [1]

---

### WORKED EXAMPLE 17: Complex Ion Colour
**Q:** Explain why [Cu(H₂O)₆]²⁺ is blue but [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue/violet. [4 marks]

**Solution:**
- Copper(II) has partially filled 3d orbitals ✓
- Ligands cause d-orbital splitting ✓
- Electrons absorb light energy and are promoted to higher d orbital ✓
- [Cu(H₂O)₆]²⁺ absorbs orange/red light, transmits blue ✓
- NH₃ is a stronger field ligand, causes greater splitting ✓
- [Cu(NH₃)₄(H₂O)₂]²⁺ absorbs different wavelength, appears deeper blue ✓

**Mark Scheme:**
- d-d transitions mentioned [1]
- Electron promotion [1]
- Complementary colour transmitted [1]
- Different ligand field strength [1]

---

### WORKED EXAMPLE 18: Entropy Calculation
**Q:** Calculate the entropy change for: 2H₂(g) + O₂(g) → 2H₂O(l)
Given: S°[H₂(g)] = 131, S°[O₂(g)] = 205, S°[H₂O(l)] = 70 J K⁻¹ mol⁻¹ [2 marks]

**Solution:**
- ΔS = Σ S°(products) - Σ S°(reactants)
- ΔS = 2(70) - [2(131) + 205]
- ΔS = 140 - [262 + 205]
- ΔS = 140 - 467
- **ΔS = -327 J K⁻¹ mol⁻¹** ✓

**Mark Scheme:**
- Correct calculation method [1]
- Correct answer with sign and units [1]

---

### WORKED EXAMPLE 19: Half-Equation Balancing
**Q:** Write a balanced half-equation for the reduction of manganate(VII) ions in acidic solution to Mn²⁺ ions. [3 marks]

**Solution:**
- Start: MnO₄⁻ → Mn²⁺
- Balance O with H₂O: MnO₄⁻ → Mn²⁺ + 4H₂O
- Balance H with H⁺: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O
- Balance charge with e⁻: **MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O** ✓

**Mark Scheme:**
- Correct formula [1]
- Correct number of H⁺ and H₂O [1]
- Correct number of electrons [1]

---

### WORKED EXAMPLE 20: Isomerism
**Q:** Draw and name all the structural isomers of C₄H₁₀O that are alcohols. [4 marks]

**Solution:**
1. **Butan-1-ol:** CH₃CH₂CH₂CH₂OH ✓
2. **Butan-2-ol:** CH₃CH(OH)CH₂CH₃ ✓
3. **2-methylpropan-1-ol:** (CH₃)₂CHCH₂OH ✓
4. **2-methylpropan-2-ol:** (CH₃)₃COH ✓

**Mark Scheme:**
- Each correct isomer [1] × 4
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY ORGANIC MECHANISMS
// ============================================================================

const OCR_CHEMISTRY_ORGANIC_MECHANISMS = `## OCR A-Level Chemistry Organic Mechanisms

### Key Mechanism Requirements
- All curly arrows must start from electron source (bond or lone pair)
- Curly arrows must end at electron sink (atom or bond)
- Show all intermediates and charges
- Include relevant dipoles (δ+ and δ-)

### 1. FREE RADICAL SUBSTITUTION (Alkanes)
**Example:** CH₄ + Cl₂ → CH₃Cl + HCl (UV light)

**Initiation:**
- Cl-Cl → 2Cl• (homolytic fission, UV light)
- Half-headed arrows from bond to each Cl

**Propagation (chain reactions):**
- Cl• + CH₄ → HCl + CH₃• (H abstraction)
- CH₃• + Cl₂ → CH₃Cl + Cl• (regenerates Cl•)

**Termination (any two radicals combine):**
- Cl• + Cl• → Cl₂
- CH₃• + CH₃• → C₂H₆
- CH₃• + Cl• → CH₃Cl

**Mark scheme points:**
- Initiation with half-headed arrows [1]
- Both propagation steps [1] each
- Termination step(s) [1]

### 2. NUCLEOPHILIC SUBSTITUTION (Halogenoalkanes)
**Example:** CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻

**SN2 Mechanism (one-step, primary/methyl):**
- Show δ+ on carbon, δ- on Br
- Curly arrow from lone pair on OH⁻ to δ+ C
- Curly arrow from C-Br bond to Br
- Products: ethanol + Br⁻

**SN1 Mechanism (two-step, tertiary):**
Step 1: C-Br bond breaks (heterolytic fission)
- Curly arrow from C-Br to Br
- Forms carbocation + Br⁻

Step 2: Nucleophile attacks
- Curly arrow from lone pair on OH⁻ to C⁺
- Forms alcohol

**Mark scheme points:**
- Dipoles shown [1]
- Curly arrow from nucleophile [1]
- Curly arrow showing bond breaking [1]
- Correct products [1]

### 3. ELIMINATION (Halogenoalkanes)
**Example:** CH₃CH₂Br + KOH (ethanol) → CH₂=CH₂ + H₂O + KBr

**Mechanism:**
- Curly arrow from lone pair on OH⁻ to H on C adjacent to C-Br
- Curly arrow from C-H bond to form C=C
- Curly arrow from C-Br bond to Br
- Products: alkene + water + halide

**Conditions:** KOH in ethanol, heat

### 4. ELECTROPHILIC ADDITION (Alkenes)
**Example:** CH₂=CH₂ + HBr → CH₃CH₂Br

**Mechanism:**
Step 1:
- Show δ+ on H, δ- on Br in H-Br
- Curly arrow from C=C π bond to H
- Curly arrow from H-Br bond to Br
- Forms carbocation + Br⁻

Step 2:
- Curly arrow from lone pair on Br⁻ to C⁺
- Forms bromoalkane

**With unsymmetrical alkenes (Markovnikov's rule):**
- H adds to carbon with more H atoms
- More stable (secondary/tertiary) carbocation forms

### 5. ELECTROPHILIC SUBSTITUTION (Benzene)
**General pattern:**
1. Generation of electrophile (E⁺)
2. Attack on benzene ring
3. Loss of H⁺ to restore aromaticity

**NITRATION:**
Reagents: Conc. HNO₃ + conc. H₂SO₄, 50°C

Electrophile generation:
- HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O

Mechanism:
- Curly arrow from π system to NO₂⁺
- Intermediate with + charge on ring
- Curly arrow from C-H bond to ring (restores aromaticity)
- H⁺ released, regenerates H₂SO₄

**FRIEDEL-CRAFTS ACYLATION:**
Reagents: RCOCl + AlCl₃ catalyst, reflux

Electrophile generation:
- RCOCl + AlCl₃ → RCO⁺ + AlCl₄⁻

Mechanism:
- Curly arrow from π system to RCO⁺
- Intermediate with + charge on ring
- Loss of H⁺, regenerates AlCl₃

### 6. NUCLEOPHILIC ADDITION (Carbonyls)
**Example:** CH₃CHO + HCN → CH₃CH(OH)CN

**Mechanism:**
Step 1:
- Show δ+ on carbonyl C, δ- on O
- Curly arrow from lone pair on CN⁻ to δ+ C
- Curly arrow from C=O π bond to O
- Forms intermediate with O⁻

Step 2:
- Curly arrow from HCN to O⁻
- Protonation gives -OH group
- Regenerates CN⁻

**Products:** Cyanohydrin (hydroxynitrile)

### 7. ADDITION-ELIMINATION (Acyl Chlorides)
**Example:** CH₃COCl + CH₃OH → CH₃COOCH₃ + HCl

**Mechanism:**
Step 1 (Addition):
- Curly arrow from lone pair on O of CH₃OH to carbonyl C
- Curly arrow from C=O to O
- Tetrahedral intermediate formed

Step 2 (Elimination):
- Curly arrow from O⁻ to reform C=O
- Curly arrow from C-Cl to Cl
- Cl⁻ leaves
- H⁺ transferred to give HCl

### Summary of Mechanism Types by Topic
| Topic | Mechanism | Type |
|-------|-----------|------|
| Alkanes | Free radical substitution | Radical |
| Alkenes | Electrophilic addition | Ionic |
| Halogenoalkanes | Nucleophilic substitution | Ionic |
| Halogenoalkanes | Elimination | Ionic |
| Alcohols | Oxidation | Ionic |
| Carbonyls | Nucleophilic addition | Ionic |
| Acyl chlorides | Addition-elimination | Ionic |
| Benzene | Electrophilic substitution | Ionic |
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY COMMON MISCONCEPTIONS
// ============================================================================

const OCR_CHEMISTRY_COMMON_MISCONCEPTIONS = `## Common Misconceptions in OCR A-Level Chemistry

### Module 2: Foundations of Chemistry

**Misconception 1: Relative atomic mass is always a whole number**
- Reality: Ar is a weighted average of isotopes, usually NOT a whole number
- Example: Chlorine Ar = 35.5 (due to ³⁵Cl and ³⁷Cl mixture)

**Misconception 2: The mole is a number**
- Reality: The mole is an amount of substance containing 6.022 × 10²³ particles
- It's a unit like 'dozen' but for atoms/molecules

**Misconception 3: Oxidation always involves oxygen**
- Reality: Oxidation is LOSS of electrons (OIL RIG)
- Can occur without oxygen, e.g., 2Na + Cl₂ → 2NaCl

**Misconception 4: Covalent compounds always have low melting points**
- Reality: Giant covalent structures (diamond, SiO₂) have very high melting points
- Only simple molecular covalent compounds have low melting points

### Module 3: Periodic Table and Energy

**Misconception 5: Group 2 reactivity decreases down the group**
- Reality: Reactivity INCREASES down Group 2
- Easier to lose outer electrons as atomic radius increases

**Misconception 6: All enthalpy changes are exothermic**
- Reality: Endothermic reactions have ΔH > 0
- Bond breaking is always endothermic

**Misconception 7: Catalysts are used up in reactions**
- Reality: Catalysts are regenerated unchanged at the end
- They provide alternative pathway with lower activation energy

**Misconception 8: Equilibrium means reactions stop**
- Reality: Dynamic equilibrium - both forward and reverse reactions continue
- Rates are equal, concentrations remain constant

### Module 4: Organic Chemistry

**Misconception 9: Tertiary alcohols can be oxidised to ketones**
- Reality: Tertiary alcohols CANNOT be oxidised
- No H on C bonded to OH, so cannot form C=O

**Misconception 10: All isomers have different physical properties**
- Reality: Optical isomers have identical physical properties
- Only differ in rotation of plane-polarised light

**Misconception 11: SN1 and SN2 are alternatives for all halogenoalkanes**
- Reality: Structure determines pathway
- Primary → mainly SN2, Tertiary → mainly SN1

**Misconception 12: Addition polymers release small molecules**
- Reality: Addition polymerisation only involves C=C → C-C
- NO small molecule released (unlike condensation)

### Module 5: Physical Chemistry

**Misconception 13: Rate constant k changes with concentration**
- Reality: k only changes with temperature
- Rate equation: Rate = k[A]ᵐ[B]ⁿ (k is constant at fixed T)

**Misconception 14: pH 7 is always neutral**
- Reality: pH 7 is only neutral at 25°C
- At higher temperatures, Kw increases, neutral pH < 7

**Misconception 15: Adding more reactant increases Kc**
- Reality: Kc only changes with temperature
- Adding reactant shifts equilibrium but Kc stays constant

**Misconception 16: Positive E°cell always means reaction occurs**
- Reality: Positive E°cell indicates thermodynamic feasibility
- Reaction may be kinetically slow (need catalyst/activation energy)

**Misconception 17: Transition metals always form coloured compounds**
- Reality: Colour requires partially filled d orbitals in the ion
- Sc³⁺ (d⁰) and Zn²⁺ (d¹⁰) form colourless compounds

### Module 6: Organic Chemistry and Analysis

**Misconception 18: All carbonyls give positive Tollens' test**
- Reality: Only ALDEHYDES give silver mirror
- Ketones cannot be oxidised, don't react with Tollens'

**Misconception 19: NMR peaks always split according to n+1 rule**
- Reality: n+1 rule only applies to non-equivalent adjacent protons
- Equivalent protons don't split each other

**Misconception 20: IR absorption at 1700 cm⁻¹ means it's an aldehyde**
- Reality: 1700 cm⁻¹ is C=O stretch - could be aldehyde, ketone, acid, or ester
- Need to look at other peaks to distinguish

### Calculation Errors to Avoid

**Error 1: Forgetting to convert units**
- dm³ to cm³ (×1000)
- kPa to Pa (×1000)
- kJ to J (×1000)
- °C to K (+273)

**Error 2: Using wrong mole ratio**
- Always check coefficients in balanced equation
- e.g., N₂ + 3H₂ → 2NH₃ (1:3:2 ratio)

**Error 3: Confusing Kc and Kp**
- Kc uses concentrations (mol dm⁻³)
- Kp uses partial pressures (Pa or kPa)

**Error 4: Sign errors in enthalpy calculations**
- Bond breaking is endothermic (+)
- Bond making is exothermic (-)
- ΔH = broken - formed

**Error 5: Incorrect pH calculations**
- For strong acids: [H⁺] = [acid]
- For weak acids: [H⁺] = √(Ka × [acid])
- Don't use strong acid formula for weak acids
`;

// ============================================================================
// OCR A-LEVEL CHEMISTRY SYNOPTIC ASSESSMENT PREPARATION
// ============================================================================

const OCR_CHEMISTRY_SYNOPTIC = `## OCR A-Level Chemistry Synoptic Assessment (Paper 3)

### Understanding Synoptic Assessment
Paper 3 (Unified Chemistry) is a synoptic paper that:
- Tests content from ALL modules (1-6)
- Requires linking concepts across topics
- Uses unfamiliar contexts to test understanding
- Includes 26% of total A-Level marks (70 marks)
- Has higher proportion of AO3 marks (analysis/evaluation)

### Common Synoptic Connections

#### Physical Chemistry Links
1. **Kinetics + Equilibrium + Thermodynamics**
   - Rate affects how quickly equilibrium is reached
   - Equilibrium position depends on ΔH (Le Chatelier)
   - ΔG determines feasibility: ΔG = ΔH - TΔS

2. **Electrode Potentials + Thermodynamics**
   - ΔG° = -nFE°cell
   - Links electrochemistry to feasibility

3. **Acids/Bases + Equilibrium**
   - Ka is an equilibrium constant
   - Buffer action explained by Le Chatelier

#### Organic Chemistry Links
1. **Functional Groups + Mechanisms**
   - Same mechanism type for similar functional groups
   - Nucleophilic addition for all carbonyls
   - Nucleophilic substitution for all halogenoalkanes

2. **Synthesis Routes**
   - Chain of reactions connecting functional groups
   - Alcohol ↔ Halogenoalkane ↔ Nitrile ↔ Carboxylic acid

3. **Spectroscopy + Structure Determination**
   - Combine IR, MS, NMR to identify unknown compounds
   - Functional group tests confirm spectroscopy evidence

#### Practical Skills Links
1. **Calculations Across Topics**
   - Titration data → concentration → moles → enthalpy
   - Rate data → orders → mechanism

2. **Error Analysis**
   - Systematic vs random errors
   - Calculating percentage uncertainty
   - Suggesting improvements

### Typical Synoptic Question Styles

**Style 1: Multi-step Calculations**
Example: A question might require:
- Titration calculation to find concentration
- Use concentration to calculate moles
- Apply rate equation with the concentration
- Calculate activation energy

**Style 2: Unfamiliar Context**
- Uses industrial process or research context
- Tests understanding, not memorised facts
- May give unfamiliar molecules/reactions
- Principles remain the same

**Style 3: Compare and Link**
Example question types:
- "Explain why compound A is more acidic than compound B"
- "Compare the mechanisms of reaction X and reaction Y"
- "Explain how principles of thermodynamics apply to this industrial process"

**Style 4: Extended Response (6 marks)**
- Requires structured, coherent answer
- Links multiple concepts
- Uses appropriate scientific terminology
- Examples:
  - "Discuss the factors that make this reaction feasible"
  - "Evaluate the environmental and economic aspects of this process"

### Preparation Strategies for Paper 3

#### 1. Build a Concept Map
Connect topics by identifying:
- Which equations appear in multiple topics
- Which concepts explain multiple phenomena
- Where practical skills apply across topics

#### 2. Practice Application Questions
- Work through past papers under timed conditions
- Focus on questions with unfamiliar contexts
- Identify which topics are being tested

#### 3. Review Mathematical Skills
- Unit conversions
- Logarithmic calculations
- Graph analysis (gradients, intercepts)
- Error calculations

#### 4. Know Your Practical Techniques
- Be able to describe procedures
- Explain why each step is done
- Identify sources of error
- Suggest improvements

#### 5. Master Extended Writing
- Structure answers clearly
- Use key terminology
- Link cause to effect
- Provide examples where relevant

### Sample Synoptic Connections

| Topic A | Topic B | Connection |
|---------|---------|------------|
| Rate equations | Mechanism | RDS matches rate equation |
| Ka | pH curves | Half-equivalence point gives pKa |
| Born-Haber | Ionic bonding | Lattice enthalpy depends on ionic character |
| E° values | Redox reactions | Predict feasibility and direction |
| IR spectroscopy | Functional groups | Identify compounds |
| Electrode potentials | ΔG | Link via ΔG° = -nFE° |
| Catalysts | Activation energy | Reduce Ea, increase rate |
| Hydrogen bonding | Protein structure | Secondary structure formation |
| Benzene stability | Mechanism | Substitution preferred over addition |
| Chirality | Drug design | Enantiomers may have different effects |

### Answering Synoptic Questions: Checklist

For calculation questions:
□ Identify all relevant data given
□ Plan your approach before starting
□ Show all working clearly
□ Check units at each step
□ Give appropriate significant figures
□ Include units in final answer

For explanation questions:
□ Identify which topics are involved
□ Use correct scientific terminology
□ Explain causes and effects
□ Use specific examples where possible
□ Link back to the question context

For evaluation questions:
□ Consider multiple viewpoints
□ Use evidence to support points
□ Reach a justified conclusion
□ Consider limitations
□ Suggest improvements where appropriate
`;

// ============================================================================
// PROMPT FUNCTIONS
// ============================================================================

// Standard compact prompt for most questions
export function getOCRALevelChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  const difficultyGuide = {
    easy: 'AS standard, 2-3 marks, single concept, direct recall or straightforward application',
    medium: 'Full A-Level, 4-5 marks, combines multiple concepts, multi-step reasoning required',
    hard: 'Challenging A-Level, 6-8 marks, synoptic thinking across topics, unfamiliar contexts, requires extended analysis, evaluation or synthesis'
  };

  return `Generate an OCR A-Level Chemistry A question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${OCR_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE}
${topicGuidance}

${OCR_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Paper: ${topic.paperRestriction || 'Any'}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR A-Level Chemistry A specification.

**DO NOT include Biology concepts such as:**
- Enzyme function, enzyme kinetics in biological systems, or metabolic pathways
- Photosynthesis, respiration, glycolysis, or other biochemical cycles
- Biological applications of proteins (e.g., antibodies, hormones, structural proteins)
- DNA replication, transcription, translation, or protein synthesis
- Cell biology, organelles, or biological membranes
- Ecological or physiological applications

**When testing amino acids and proteins, focus ONLY on:**
- Structural properties, zwitterionic nature, isoelectric points
- Acid-base chemistry of amino acids
- Peptide bond formation and hydrolysis (chemical mechanism)
- Chromatography and electrophoresis techniques
- NOT biological function or enzyme activity

**For the topic "${topic.name}", test ONLY the chemistry content in the specification.**

${varietyInstructions}

Requirements:
- Match OCR exam style
- Use appropriate command words
- Include realistic context
- Clear mark allocation

Respond with JSON:
{
  "content": "Question text",
  "solution": "Complete worked solution",
  "marks": <total marks>,
  "markScheme": "Mark-by-mark allocation",
  "diagram": <optional DiagramSpec - include when question has stimulus diagram shown WITH the question>,
  "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>
}

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('chemistry')}`;
}

export function getOCRALevelChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate a 6-mark extended response OCR A-Level Chemistry A question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

${varietyInstructions}

Level Descriptors:
- Level 3 (5-6): Detailed, coherent, accurate chemistry
- Level 2 (3-4): Some detail, mostly accurate
- Level 1 (1-2): Basic points, limited structure

Respond with JSON:
{
  "content": "Extended response question",
  "solution": "Model Level 3 answer",
  "marks": 6,
  "markScheme": "Level descriptors with indicative content"
}`;
}

export function getOCRALevelChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A calculation question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${OCR_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Requirements:
- Provide all necessary data
- Use realistic values
- ${difficulty === 'hard' ? 'Multi-step with rearrangement' : 'Clear calculation'}

Respond with JSON:
{
  "content": "Calculation question",
  "solution": "Step-by-step working",
  "marks": <3-6>,
  "markScheme": "Equation [1], Working [1], Answer [1]"
}`;
}

export function getOCRALevelChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A explanation question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Respond with JSON:
{
  "content": "Explain/Describe question",
  "solution": "Full explanation",
  "marks": <2-5>,
  "markScheme": "Point-by-point marks"
}`;
}

export function getOCRALevelChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A graph/data question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Include graph or data table with analysis questions.

Respond with JSON:
{
  "content": "Graph/data question",
  "solution": "Analysis with answers",
  "marks": <3-6>,
  "markScheme": "Reading, calculation, interpretation"
}`;
}

export function getOCRALevelChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A comparison question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Require both similarities AND differences.

Respond with JSON:
{
  "content": "Compare question",
  "solution": "Structured comparison",
  "marks": <2-6>,
  "markScheme": "Similarities and differences"
}`;
}

export function getOCRALevelChemistryMechanismPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A mechanism question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Requirements:
- Correct curly arrows
- All intermediates
- Charges shown

Respond with JSON:
{
  "content": "Mechanism question",
  "solution": "Full mechanism",
  "marks": <3-5>,
  "markScheme": "Arrow, intermediate, product marks"
}`;
}

export function getOCRALevelChemistryPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate an OCR A-Level Chemistry A practical question.
${OCR_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${OCR_CHEMISTRY_PAGS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${varietyInstructions}

Assess practical skills from relevant PAG.

Respond with JSON:
{
  "content": "Practical question",
  "solution": "Complete answer",
  "marks": <3-6>,
  "markScheme": "Method, analysis, evaluation"
}`;
}
