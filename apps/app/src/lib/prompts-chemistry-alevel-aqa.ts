// AQA A-Level Chemistry (7405) Question Generation Prompts
// Tailored to AQA A-Level specification style and assessment objectives
//
// Sources:
// - https://www.aqa.org.uk/subjects/chemistry/a-level/chemistry-7405/specification
// - https://filestore.aqa.org.uk/resources/chemistry/AQA-7404-7405-PHBK.PDF
// - Past papers 2019-2024

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  DIAGRAM_SCHEMA_DOCS,
  getDiagramDocsForSubject,
} from './prompts-common';


// Local mark range function for A-Level Chemistry
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

const AQA_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE = `
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
// AQA A-LEVEL CHEMISTRY ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Chemistry Assessment Objectives

### AO1: Knowledge and Understanding (25-30%)
Demonstrate knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures

**AO1 Question Characteristics:**
- "State", "Define", "Name", "Write down", "Give" commands
- Recall of definitions, laws, mechanisms
- Drawing structures
- Writing equations

### AO2: Application (40-45%)
Apply knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures
- In theoretical and practical contexts
- When handling qualitative and quantitative data

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Show that", "Explain" commands
- Using equations in calculations
- Applying concepts to new contexts
- Analysing data and graphs
- Planning investigations

### AO3: Analysis and Evaluation (25-30%)
Analyse, interpret and evaluate:
- Scientific information, ideas and evidence
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Discuss", "Comment" commands
- Drawing conclusions from experimental data
- Identifying and explaining sources of error
- Suggesting improvements to experiments
- Evaluating scientific claims

### Assessment Weighting Summary
| Objective | Weighting | Focus |
|-----------|-----------|-------|
| AO1 | 25-30% | Knowledge and understanding |
| AO2 | 40-45% | Application |
| AO3 | 25-30% | Analysis and evaluation |

### Additional Requirements
- **20%** of marks require mathematical skills at Level 2 or above
- **15%** of marks assess practical skills (CPAC - Common Practical Assessment Criteria)
- Practical endorsement assessed separately (Pass/Not classified)

### Paper-Specific AO Weightings
| Paper | AO1 | AO2 | AO3 | Total Marks |
|-------|-----|-----|-----|-------------|
| Paper 1 (Inorganic + Physical) | 28-34% | 36-42% | 28-34% | 105 |
| Paper 2 (Organic + Physical) | 28-34% | 36-42% | 28-34% | 105 |
| Paper 3 (All Content) | 22-28% | 42-48% | 28-34% | 90 |

### AO1 Question Indicators
- Questions starting with "State", "Define", "Name", "Write", "Draw"
- Recall of standard definitions (e.g., "Define the term 'oxidation state'")
- Writing balanced equations including state symbols
- Drawing displayed formulae and mechanisms
- Naming organic compounds using IUPAC nomenclature
- Recalling conditions for reactions

### AO2 Question Indicators
- Questions requiring calculations with given data
- Applying Le Chatelier's principle to unfamiliar equilibria
- Using rate equations to predict rate changes
- Interpreting spectra (IR, NMR, mass spectrometry)
- Planning investigations and selecting apparatus
- Making predictions based on periodic trends
- Multi-step calculations (titrations, Hess's Law, pH)

### AO3 Question Indicators
- Evaluating experimental procedures and suggesting improvements
- Analysing data to identify patterns and anomalies
- Drawing and justifying conclusions from experimental results
- Evaluating the validity of conclusions
- Comparing experimental values with theoretical values
- Discussing sources of error and their effects
- Critiquing experimental methodology
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY EXAM STRUCTURE
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_EXAM_STRUCTURE = `
## AQA A-Level Chemistry Exam Structure (7405)

### Overview
AQA A-Level Chemistry (7405) is a linear qualification with three written papers taken at the end of the course.
All papers must be taken in the same series. There is no AS content requirement for A-Level.

### Paper 1: Inorganic and Physical Chemistry (7405/1)
- **Duration:** 2 hours
- **Marks:** 105 marks (35% of A-Level)
- **Content:**
  - Physical Chemistry Topics 1-10 (excluding electrode potentials if not in inorganic context)
  - Inorganic Chemistry Topics 1-6
  - Relevant practical skills

**Question Types:**
- Short answer questions
- Extended response questions (6 marks)
- Calculation questions
- Data analysis questions

**Topics Covered:**
- Atomic structure
- Amount of substance
- Bonding
- Energetics (including Born-Haber cycles)
- Kinetics (including rate equations)
- Chemical equilibria, Le Chatelier's principle
- Oxidation, reduction and redox equations
- Thermodynamics
- Periodicity
- Group 2 and Group 7
- Period 3 elements and oxides
- Transition metals
- Reactions of ions in aqueous solution

### Paper 2: Organic and Physical Chemistry (7405/2)
- **Duration:** 2 hours
- **Marks:** 105 marks (35% of A-Level)
- **Content:**
  - Physical Chemistry Topics 1-10
  - Organic Chemistry Topics 1-16
  - Relevant practical skills

**Question Types:**
- Short answer questions
- Extended response questions (6 marks)
- Organic synthesis and retrosynthesis
- Spectroscopy interpretation (IR, NMR, Mass Spec)
- Mechanism questions

**Topics Covered:**
- All Physical Chemistry topics
- Introduction to organic chemistry
- Alkanes
- Halogenoalkanes
- Alkenes
- Alcohols
- Organic analysis
- Optical isomerism
- Aldehydes and ketones
- Carboxylic acids and derivatives
- Aromatic chemistry
- Amines
- Polymers
- Amino acids, proteins and DNA
- Organic synthesis
- NMR spectroscopy
- Chromatography

### Paper 3: Synoptic Paper (7405/3)
- **Duration:** 2 hours
- **Marks:** 90 marks (30% of A-Level)
- **Content:**
  - ALL specification content from Physical, Inorganic and Organic Chemistry
  - Practical skills assessed throughout
  - Emphasis on synoptic assessment

**Question Types:**
- Multiple choice questions (Section A: 40 marks)
- Short and extended answer questions (Section B: 50 marks)
- Questions linking concepts across different topics
- Data analysis and practical-based questions

**Synoptic Requirements:**
- Questions require knowledge from multiple areas
- May combine organic reactions with equilibrium concepts
- Rate equations applied to organic mechanisms
- Thermodynamics linked to industrial processes
- Spectroscopy for structure determination

### Calculator Policy
- Scientific calculator permitted in all papers
- Calculators must not have:
  - Computer algebra systems (CAS)
  - Graphing capabilities
  - Symbolic algebra manipulation

### Data and Formulae Booklet
Students receive a Data and Formulae Booklet containing:
- Periodic Table with relative atomic masses
- Standard electrode potentials
- Standard enthalpies of formation
- Bond enthalpies
- Infrared absorption frequencies
- NMR chemical shift data
- Ka and Kb values

### Practical Endorsement (Non-Exam Assessment)
- Reported separately on certificate as "Pass" or "Not classified"
- Assessed through 12 Required Practicals
- Does NOT contribute to A-Level grade
- Assesses 5 CPAC competencies:
  1. Follows written procedures
  2. Applies investigative approaches and methods
  3. Safely uses a range of practical equipment and materials
  4. Makes and records observations
  5. Researches, references and reports

### Grade Boundaries (Typical)
| Grade | Raw marks (approx %) |
|-------|---------------------|
| A* | 80%+ |
| A | 70%+ |
| B | 60%+ |
| C | 50%+ |
| D | 40%+ |
| E | 30%+ |
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY 12 REQUIRED PRACTICALS
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_REQUIRED_PRACTICALS = `
## AQA A-Level Chemistry Required Practicals (12) - Detailed Guide

### Year 1 (AS) Practicals

**RP01: Make up a volumetric solution and carry out a simple acid-base titration**

**Purpose:** Prepare a standard solution and use it to find the concentration of an unknown solution.

**Key Apparatus:**
- Volumetric flask (250 cm³)
- Pipette (25.0 cm³) with pipette filler
- Burette (50.0 cm³)
- Conical flask (250 cm³)
- White tile
- Balance (±0.01 g)

**Procedure for Standard Solution:**
1. Calculate mass of solid needed using n = c × V and m = n × Mr
2. Weigh solid accurately using balance
3. Transfer to beaker and dissolve in deionised water
4. Transfer quantitatively to volumetric flask using funnel
5. Make up to mark, adding last drops with teat pipette
6. Stopper and invert several times to mix

**Titration Procedure:**
1. Rinse burette with solution to be used, fill and remove air bubble
2. Rinse pipette with solution, then pipette into conical flask
3. Add 2-3 drops of suitable indicator
4. Add solution from burette, swirling constantly
5. Near endpoint, add dropwise until colour change
6. Record initial and final readings to ±0.05 cm³
7. Repeat until concordant (within 0.10 cm³)

**Sources of Error:**
- Incomplete transfer of solid → lower concentration
- Overshooting endpoint → higher titre value
- Meniscus reading errors
- Solution splashing out of flask

**Exam Questions May Ask:**
- Calculate concentration of unknown solution
- Explain why concordant results are needed
- Suggest improvements to accuracy

---

**RP02: Measurement of an enthalpy change**

**Purpose:** Determine the enthalpy change of a reaction using calorimetry.

**Types of Reaction Measured:**
- Neutralisation (acid + alkali)
- Combustion (spirit burner method)
- Displacement (metal + metal salt solution)
- Dissolution (salt in water)

**Key Equipment:**
- Polystyrene cup (insulated container)
- Thermometer (±0.5°C) or temperature probe
- Measuring cylinder (50 cm³)
- Balance

**Key Equations:**
- q = mcΔT (energy transferred)
- ΔH = -q/n (enthalpy change per mole, negative for exothermic)
- c = 4.18 J g⁻¹ K⁻¹ for dilute aqueous solutions
- Assume density = 1.0 g cm⁻³

**Procedure:**
1. Measure volumes of solutions accurately
2. Record initial temperature of each solution
3. Mix solutions and stir
4. Record maximum/minimum temperature
5. Calculate ΔT and hence q
6. Calculate moles of limiting reagent
7. Calculate ΔH per mole

**Sources of Error:**
- Heat loss to surroundings → ΔT too small → |ΔH| too small
- Incomplete reaction
- Heat absorbed by calorimeter
- Errors in temperature measurement

**Improvements:**
- Use lid on calorimeter
- Use temperature-time plot extrapolation
- Use more insulation
- Calibrate calorimeter

---

**RP03: Investigation of how rate of reaction changes with temperature**

**Purpose:** Investigate the effect of temperature on rate; may calculate activation energy.

**Common Reactions Used:**
- Sodium thiosulfate + acid (disappearing cross)
- Iodine clock reaction (at different temperatures)

**Procedure (Thiosulfate Method):**
1. Place marked cross under conical flask
2. Mix sodium thiosulfate solution with acid
3. Start stopwatch immediately
4. Time until cross disappears (sulfur precipitate obscures it)
5. Rate ∝ 1/time
6. Repeat at different temperatures (water bath control)

**Key Theory:**
- Rate increases with temperature due to:
  - More frequent collisions
  - Greater proportion of molecules have E ≥ Ea
- Rate approximately doubles for 10°C rise (rule of thumb)

**To Calculate Activation Energy:**
- Plot ln k against 1/T
- Gradient = -Ea/R
- Ea = -gradient × R

**Sources of Error:**
- Subjective endpoint (judging when cross disappears)
- Temperature changes during reaction
- Difficulty maintaining constant temperature

---

**RP04: Carry out simple test-tube reactions to identify cations and anions**

**Cation Tests:**

| Cation | Flame Test Colour | NaOH(aq) | Excess NaOH(aq) | NH₃(aq) | Excess NH₃(aq) |
|--------|------------------|----------|-----------------|---------|----------------|
| Li⁺ | Red (crimson) | - | - | - | - |
| Na⁺ | Yellow/orange | - | - | - | - |
| K⁺ | Lilac | - | - | - | - |
| Ca²⁺ | Orange-red | White ppt | No change | White ppt | No change |
| Ba²⁺ | Apple green | White ppt | No change | White ppt | No change |
| Cu²⁺ | Blue-green | Blue ppt | No change | Blue ppt | Deep blue solution |
| Fe²⁺ | - | Green ppt | No change | Green ppt | No change |
| Fe³⁺ | - | Red-brown ppt | No change | Red-brown ppt | No change |
| Al³⁺ | - | White ppt | Dissolves (colourless) | White ppt | No change |
| Zn²⁺ | - | White ppt | Dissolves (colourless) | White ppt | Dissolves (colourless) |

**Anion Tests:**

| Anion | Test | Positive Result |
|-------|------|-----------------|
| CO₃²⁻ | Add dilute acid | Effervescence, gas turns limewater milky |
| SO₄²⁻ | Add dilute HCl then BaCl₂ | White precipitate (insoluble in HCl) |
| Cl⁻ | Add dilute HNO₃ then AgNO₃ | White precipitate (soluble in dilute NH₃) |
| Br⁻ | Add dilute HNO₃ then AgNO₃ | Cream precipitate (soluble in conc NH₃) |
| I⁻ | Add dilute HNO₃ then AgNO₃ | Yellow precipitate (insoluble in NH₃) |

---

**RP05: Distillation of a product from a reaction**

**Purpose:** Purify a liquid product by distillation.

**Apparatus:**
- Round-bottomed flask
- Fractionating column (if required)
- Liebig condenser
- Still head with thermometer
- Receiving flask
- Heating mantle or water bath
- Anti-bumping granules

**Procedure:**
1. Add mixture to round-bottomed flask with anti-bumping granules
2. Assemble apparatus with water flowing into condenser at bottom
3. Heat gently, monitoring thermometer
4. Collect distillate in correct temperature range
5. Change receiving flask for different fractions

**Key Points:**
- Thermometer bulb level with side arm
- Condenser water in at bottom, out at top
- Correct boiling range indicates purity
- Anti-bumping granules prevent violent boiling

**Calculating Yield:**
- Percentage yield = (actual mass/theoretical mass) × 100
- Theoretical mass calculated from limiting reagent

---

**RP06: Tests for alcohol, aldehyde, alkene and carboxylic acid**

**Alkene Test:**
- Add bromine water (or Br₂ in hexane)
- Positive: Orange/brown → colourless (addition reaction)

**Primary/Secondary Alcohol Test:**
- Add acidified potassium dichromate(VI)
- Heat gently
- Primary: Orange → green (to aldehyde, then acid)
- Secondary: Orange → green (to ketone)
- Tertiary: No colour change

**Distinguishing Aldehyde from Ketone:**

| Test | Aldehyde Result | Ketone Result |
|------|-----------------|---------------|
| Tollens' reagent (AgNO₃/NH₃) | Silver mirror forms | No reaction |
| Fehling's solution | Red-brown precipitate (Cu₂O) | No reaction |
| Acidified K₂Cr₂O₇ | Orange → green | No reaction |

**Carboxylic Acid Test:**
- Add sodium carbonate solution
- Positive: Effervescence (CO₂ produced)
- Test pH: acidic (pH 2-4)

---

### Year 2 (A2) Practicals

**RP07: Measuring the rate of reaction by an initial rate method**

**Purpose:** Determine the order of reaction with respect to each reactant.

**Common Reaction:** Iodine clock (reaction between iodate(V) and sulfite ions)
IO₃⁻ + 3HSO₃⁻ → I⁻ + 3SO₄²⁻ + 3H⁺
Then: IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O (when sulfite exhausted)

**Procedure:**
1. Mix reactants with starch indicator
2. Start timing when mixed
3. Record time for blue-black colour to appear (fixed amount of I₂ formed)
4. Rate ∝ 1/t
5. Vary concentration of ONE reactant, keeping others constant
6. Plot graphs to determine order

**Determining Order:**
- Plot [A] vs rate: straight line through origin = first order
- Plot [A] vs rate: curve upward = second order
- Plot [A]² vs rate: straight line = second order
- Constant rate regardless of [A] = zero order

**Calculations:**
- If doubling [A] doubles rate: first order in A
- If doubling [A] quadruples rate: second order in A
- If doubling [A] has no effect: zero order in A

---

**RP08: Measuring the EMF of an electrochemical cell**

**Purpose:** Construct electrochemical cells and measure their EMF.

**Apparatus:**
- Two half-cells (metal electrode in metal ion solution)
- Salt bridge (filter paper soaked in KNO₃ or glass tube with KNO₃)
- High resistance voltmeter
- Connecting wires

**Standard Conditions:**
- Concentration: 1.0 mol dm⁻³
- Temperature: 298 K
- Pressure: 100 kPa

**Procedure:**
1. Set up two half-cells with electrodes in their ion solutions
2. Connect with salt bridge
3. Connect electrodes to high resistance voltmeter
4. Read EMF (no current flows → no voltage drop)

**Calculating EMF:**
E°cell = E°(more positive half-cell) - E°(less positive half-cell)

**Sources of Error:**
- Concentrations not exactly 1.0 mol dm⁻³
- Temperature not exactly 298 K
- Using low resistance voltmeter (current flows)
- Contaminated electrodes

---

**RP09: Investigate how pH changes when weak acid reacts with strong base**

**Purpose:** Plot a pH curve for titration and determine Ka.

**Apparatus:**
- pH meter (calibrated) or universal indicator with colour chart
- Burette, pipette, conical flask
- Magnetic stirrer (optional)

**Procedure:**
1. Calibrate pH meter with buffer solutions
2. Pipette weak acid into conical flask
3. Add base from burette in small increments
4. Record pH after each addition
5. Plot pH against volume of base added

**Key Features of pH Curve:**
- Initial pH (from weak acid concentration)
- Buffer region (relatively flat section)
- Half-equivalence point: pH = pKa
- Equivalence point: steep rise in pH
- Final pH (excess strong base)

**Determining Ka:**
- At half-equivalence point, [HA] = [A⁻]
- So pH = pKa (from Henderson-Hasselbalch)
- Ka = 10⁻ᵖᴷᵃ

---

**RP10: Preparation of organic solids and liquids**

**Techniques Required:**
- Reflux (heating without losing volatile substances)
- Distillation (purifying liquids)
- Recrystallisation (purifying solids)
- Melting point determination (checking purity)

**Reflux:**
1. Set up apparatus with condenser vertical above flask
2. Heat reaction mixture
3. Vapours condense and return to flask
4. React for required time

**Recrystallisation:**
1. Dissolve impure solid in minimum hot solvent
2. Filter hot to remove insoluble impurities
3. Cool slowly (slow crystallisation = larger, purer crystals)
4. Filter under reduced pressure (Buchner filtration)
5. Wash with cold solvent
6. Dry crystals

**Melting Point:**
- Pure substances have sharp melting point
- Impurities lower and broaden melting point range
- Compare with literature value

---

**RP11: Carry out simple test-tube reactions to identify transition metal ions**

**Observations Table:**

| Ion | Colour in Solution | NaOH(aq) | Excess NaOH | NH₃(aq) | Excess NH₃ |
|-----|-------------------|----------|-------------|---------|------------|
| Fe²⁺ | Pale green | Green ppt | Green ppt (→brown on standing) | Green ppt | Green ppt |
| Fe³⁺ | Yellow/orange-brown | Red-brown ppt | Red-brown ppt | Red-brown ppt | Red-brown ppt |
| Cu²⁺ | Blue | Blue ppt | Blue ppt | Blue ppt | Deep blue solution [Cu(NH₃)₄(H₂O)₂]²⁺ |
| Cr³⁺ | Green/violet | Grey-green ppt | Green solution [Cr(OH)₄]⁻ | Grey-green ppt | Purple solution [Cr(NH₃)₆]³⁺ |
| Co²⁺ | Pink | Blue ppt (→pink) | Blue ppt | Blue ppt | Straw/brown [Co(NH₃)₆]²⁺ |

**Key Points:**
- Fe(OH)₂ oxidises to Fe(OH)₃ in air (green → red-brown)
- Cu(OH)₂ is amphoteric but only dissolves in excess NH₃, not NaOH
- Cr(OH)₃ is amphoteric (dissolves in excess NaOH and NH₃)
- Colour of complex depends on ligand

---

**RP12: Separation of species by thin-layer chromatography**

**Apparatus:**
- TLC plate (silica on glass or plastic backing)
- Developing chamber with lid
- Capillary tubes or micropipettes
- Ruler and pencil
- UV lamp or visualising agent

**Procedure:**
1. Draw baseline in pencil (not pen) 1 cm from bottom of plate
2. Spot samples on baseline using capillary
3. Allow spots to dry
4. Place plate in chamber with solvent level below baseline
5. Cover and allow to develop until solvent near top
6. Remove and mark solvent front immediately
7. Allow to dry
8. Visualise spots (UV or iodine vapour)

**Calculations:**
Rf = distance travelled by spot / distance travelled by solvent front

**Key Points:**
- Rf values depend on: solvent, temperature, stationary phase
- Compare Rf values with standards to identify unknowns
- Low Rf = more attracted to stationary phase (polar compounds on silica)
- High Rf = more attracted to mobile phase
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY COMMAND WORDS
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_COMMAND_WORDS = `
## AQA A-Level Chemistry Command Words

### Calculation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Calculate** | Use numbers to work out an answer | Show working, include units |
| **Determine** | Use data/graph to find an answer | May involve calculation or reading |
| **Show that** | Prove a given answer is correct | Quote to 1 more s.f. than given |
| **Estimate** | Make an approximate calculation | Use sensible assumptions |
| **Deduce** | Draw conclusions from information | May not require calculation |

### Knowledge Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **State** | Brief answer, no explanation | Typically 1 mark |
| **Define** | Give the meaning of a term | Precise chemistry definition |
| **Write** | Give an equation or formula | Balance if chemical equation |
| **Name/Identify** | Use correct chemistry term | Specific terminology |
| **Describe** | Give an account of something | Sequence or features |
| **Draw** | Produce a diagram, mechanism or structure | Full details required |

### Explanation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Explain** | Give reasons using chemistry | Use "because", link cause to effect |
| **Suggest** | Apply knowledge to new context | Multiple valid answers possible |
| **Compare** | Identify similarities AND differences | Must do both |
| **Justify** | Give reasons for a conclusion | Use evidence |
| **Outline** | Give main features of a mechanism | Key steps only |

### Analysis Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Analyse** | Examine data for patterns | Quote specific values |
| **Evaluate** | Judge advantages and disadvantages | Reach a conclusion |
| **Discuss** | Consider different aspects | Extended response |
| **Predict** | Use knowledge to suggest outcome | Based on trends/patterns |

### Chemistry-Specific Command Word Examples

**Calculate Examples:**
- "Calculate the mass of sodium hydroxide needed to prepare 250 cm³ of 0.100 mol dm⁻³ solution."
- "Calculate the enthalpy change for this reaction using the bond enthalpies given."
- "Calculate the pH of a 0.050 mol dm⁻³ solution of ethanoic acid (Ka = 1.8 × 10⁻⁵ mol dm⁻³)."

**State Examples:**
- "State the type of bonding in sodium chloride."
- "State the conditions needed for the reaction between ethene and hydrogen."
- "State the colour change observed when chlorine water is added to potassium bromide solution."

**Define Examples:**
- "Define the term 'first ionisation energy'."
- "Define the term 'standard enthalpy of formation'."
- "Define the term 'rate of reaction'."

**Explain Examples:**
- "Explain why the first ionisation energy of sodium is less than that of magnesium."
- "Explain, in terms of structure and bonding, why diamond has a high melting point."
- "Explain why the equilibrium shifts to the right when pressure is increased."

**Draw Examples:**
- "Draw the mechanism for the nucleophilic substitution reaction between 1-bromobutane and aqueous sodium hydroxide."
- "Draw the displayed formula of propan-2-ol."
- "Draw the dot-and-cross diagram for ammonia."

**Suggest Examples:**
- "Suggest why the experimental enthalpy change is less exothermic than the theoretical value."
- "Suggest a suitable indicator for the titration of a weak acid with a strong base."
- "Suggest why this reaction is slow at room temperature."

**Compare Examples:**
- "Compare the reactions of Group 2 metals with water."
- "Compare the structures of diamond and graphite."
- "Compare the basicity of ammonia and ethylamine."

**Predict Examples:**
- "Predict the products of the reaction between but-2-ene and hydrogen bromide."
- "Predict how the equilibrium position will change when temperature is increased."
- "Predict the shape and bond angle of the PCl₄⁺ ion."

**Outline Examples:**
- "Outline the mechanism for the electrophilic addition of bromine to propene."
- "Outline how the rate constant k varies with temperature."
- "Outline the steps in the Born-Haber cycle for sodium chloride."

### Mark Scheme Notation

**M marks (Method marks)**
- Awarded for correct method, even if final answer is wrong
- M1, M2, M3 indicate complexity of method
- Example: M1 for correct formula, M2 for correct substitution

**A marks (Accuracy/Answer marks)**
- Dependent on earning associated M marks
- A1 ft means "follow through" from previous error
- Example: A1 for correct numerical answer with units

**B marks (Independent marks)**
- Awarded independently of method
- Often for stating facts or observations
- Example: B1 for naming the product

**E marks (Explanation marks)**
- For quality of written communication
- Required in extended response questions

**Special Notations:**
- **oe** = "or equivalent" (accept alternative correct answers)
- **awrt** = "answers which round to" (for decimal answers)
- **cao** = "correct answer only" (no follow through)
- **ecf** = "error carried forward"
- **ora** = "or reverse argument"
- **ignore** = this statement does not gain or lose marks
- **reject** = this answer is wrong and scores no marks

### Multi-Method Questions: Equal Credit for Valid Approaches

Chemistry calculations often have multiple valid solution paths. Award full marks for ANY correct method.

**Example 1: Enthalpy calculations**
*Question:* Calculate the enthalpy change for: C(s) + O₂(g) → CO₂(g)
Given: CO(g) + ½O₂(g) → CO₂(g), ΔH = -283 kJ mol⁻¹
       C(s) + ½O₂(g) → CO(g), ΔH = -111 kJ mol⁻¹

*Method A (Hess's Law - algebraic manipulation):*
- M1: Target = Equation 2 + Equation 1
- A1: ΔH = -111 + (-283) = -394 kJ mol⁻¹

*Method B (Hess's Law - cycle diagram):*
- M1: Draws correct energy cycle
- M1: Correct route identification
- A1: ΔH = -394 kJ mol⁻¹

**Both methods receive full credit.**

**Example 2: Concentration calculations**
*Question:* Calculate pH of 0.1 mol dm⁻³ ethanoic acid (Ka = 1.8 × 10⁻⁵)

*Method A (using Ka expression directly):*
- M1: Ka = [H⁺]²/[HA], assumes [H⁺]² << 0.1
- M1: [H⁺] = √(Ka × c) = √(1.8 × 10⁻⁶)
- A1: pH = -log(1.34 × 10⁻³) = 2.87

*Method B (quadratic solution):*
- M1: Ka = x²/(0.1-x)
- M1: Solves quadratic
- A1: pH = 2.87

**Full marks for either approach.**

**Example 3: Rate calculations**
*Question:* Determine rate constant from half-life data.

*Method A (using t₁/₂ = ln2/k):*
- Accept direct application of integrated rate equation

*Method B (graphical - ln[A] vs t):*
- Accept gradient method from first-order plot

**Example 4: Yield calculations**
For percentage yield problems, accept:
- Method A: (actual/theoretical) × 100
- Method B: Working backwards from limiting reagent
- Method C: Using atom economy combined with mass data

**Example 5: Titration calculations**
Accept any valid route:
- Moles → concentration
- Concentration → moles → mass
- Direct ratio method using balanced equation
`;

// ============================================================================
// A-LEVEL CHEMISTRY DATA SHEET
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_DATA_SHEET = `## AQA A-Level Chemistry Data Sheet (PROVIDED IN EXAM)

### Physical Constants
| Quantity | Symbol | Value |
|----------|--------|-------|
| Avogadro constant | Nₐ | 6.022 × 10²³ mol⁻¹ |
| Gas constant | R | 8.314 J K⁻¹ mol⁻¹ |
| Faraday constant | F | 96 485 C mol⁻¹ |
| Planck constant | h | 6.626 × 10⁻³⁴ J s |
| Speed of light | c | 2.998 × 10⁸ m s⁻¹ |
| Ionic product of water | Kw | 1.00 × 10⁻¹⁴ mol² dm⁻⁶ (at 298 K) |

### Standard Conditions
- Temperature: 298 K (25°C)
- Pressure: 100 kPa
- Concentration: 1 mol dm⁻³

### Molar Gas Volume
- At RTP (298 K, 100 kPa): 24.0 dm³ mol⁻¹
- At STP (273 K, 100 kPa): 22.7 dm³ mol⁻¹

### Common Ar Values (Relative Atomic Mass)
| Element | Ar | Element | Ar |
|---------|-----|---------|-----|
| H | 1.0 | Na | 23.0 |
| C | 12.0 | Mg | 24.3 |
| N | 14.0 | Al | 27.0 |
| O | 16.0 | S | 32.1 |
| F | 19.0 | Cl | 35.5 |
| Si | 28.1 | K | 39.1 |
| P | 31.0 | Ca | 40.1 |
| Fe | 55.8 | Cu | 63.5 |
| Br | 79.9 | I | 126.9 |
`;

const AQA_ALEVEL_CHEMISTRY_FORMULAE = `## AQA A-Level Chemistry Formulae (Many PROVIDED IN EXAM)

### Amount of Substance
| Formula | Use |
|---------|-----|
| n = m/M | Moles from mass and molar mass |
| c = n/V | Concentration in mol dm⁻³ |
| pV = nRT | Ideal gas equation |
| n = V/Vm | Moles of gas from volume (Vm = 24.0 dm³ at RTP) |
| % yield = (actual/theoretical) × 100 | Percentage yield |
| Atom economy = (Mr product/Σ Mr reactants) × 100 | Atom economy |

### Energetics
| Formula | Use |
|---------|-----|
| q = mcΔT | Heat energy calculation |
| ΔH = q/n | Enthalpy change per mole |
| ΔH = Σ(bonds broken) - Σ(bonds formed) | From bond enthalpies |
| ΔH = Σ ΔfH°(products) - Σ ΔfH°(reactants) | From enthalpies of formation |
| ΔH = Σ ΔcH°(reactants) - Σ ΔcH°(products) | From enthalpies of combustion |
| ΔG = ΔH - TΔS | Gibbs free energy |
| ΔS = Σ S°(products) - Σ S°(reactants) | Entropy change |

### Kinetics
| Formula | Use |
|---------|-----|
| Rate = k[A]ᵐ[B]ⁿ | Rate equation |
| ln k = ln A - Eₐ/RT | Arrhenius equation |
| k = Ae^(-Eₐ/RT) | Arrhenius equation (exponential form) |
| t½ = ln 2 / k = 0.693/k | Half-life (first order only) |
| Rate = Δ[product]/Δt = -Δ[reactant]/Δt | Rate definition |

### Equilibria
| Formula | Use |
|---------|-----|
| Kc = [products]^n/[reactants]^m | Equilibrium constant (concentrations) |
| Kp = p(products)^n/p(reactants)^m | Equilibrium constant (partial pressures) |
| pₐ = xₐ × Ptotal | Partial pressure |
| xₐ = nₐ/ntotal | Mole fraction |

### Acids and Bases
| Formula | Use |
|---------|-----|
| pH = -log₁₀[H⁺] | pH calculation |
| [H⁺] = 10^(-pH) | H⁺ from pH |
| pOH = -log₁₀[OH⁻] | pOH calculation |
| pH + pOH = 14 (at 25°C) | Relationship at 298 K |
| Kₐ = [H⁺][A⁻]/[HA] | Acid dissociation constant |
| pKₐ = -log₁₀ Kₐ | pKa |
| Kb = [BH⁺][OH⁻]/[B] | Base dissociation constant |
| Kₐ × Kb = Kw | Relationship for conjugate acid-base pairs |
| pH = pKₐ + log₁₀([A⁻]/[HA]) | Henderson-Hasselbalch equation |
| Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ | Ionic product of water (at 25°C) |
| [H⁺] = √(Kₐ × [HA]) | For weak acid (approximation) |
| [OH⁻] = √(Kb × [B]) | For weak base (approximation) |

### Electrochemistry
| Formula | Use |
|---------|-----|
| E°cell = E°(reduction at cathode) - E°(reduction at anode) | Cell EMF |
| E°cell = E°(more positive) - E°(less positive) | Alternative form |
| ΔG° = -nFE°cell | Gibbs energy from cell EMF |

### Born-Haber Cycle Components
| Term | Definition |
|------|------------|
| ΔfH° (formation) | Enthalpy change when 1 mole of compound forms from elements in standard states |
| ΔatH° (atomisation) | Enthalpy change when 1 mole of gaseous atoms forms from element in standard state |
| IE₁ (1st ionisation) | Energy to remove 1 mole of electrons from 1 mole of gaseous atoms |
| EA₁ (1st electron affinity) | Enthalpy change when 1 mole of gaseous atoms gains 1 mole of electrons |
| ΔlattH° (lattice enthalpy) | Enthalpy change when 1 mole of ionic compound forms from gaseous ions |
| ΔhydH° (hydration) | Enthalpy change when 1 mole of gaseous ions becomes hydrated |
| ΔsolH° (solution) | Enthalpy change when 1 mole of solute dissolves in water |

### Titration Calculations
| Formula | Use |
|---------|-----|
| n = c × V/1000 | Moles from concentration (mol dm⁻³) and volume (cm³) |
| c₁V₁/n₁ = c₂V₂/n₂ | Titration relationship (n = stoichiometric coefficient) |
| Mass = n × Mr | Mass from moles |

### Gas Law Relationships
| Formula | Use |
|---------|-----|
| pV = nRT | Ideal gas equation |
| p₁V₁/T₁ = p₂V₂/T₂ | Combined gas law |
| p₁V₁ = p₂V₂ | Boyle's Law (constant T) |
| V₁/T₁ = V₂/T₂ | Charles's Law (constant p) |

### Key Constants
| Constant | Value |
|----------|-------|
| R (gas constant) | 8.314 J K⁻¹ mol⁻¹ |
| F (Faraday constant) | 96485 C mol⁻¹ |
| Nₐ (Avogadro constant) | 6.022 × 10²³ mol⁻¹ |
| c (specific heat of water) | 4.18 J g⁻¹ K⁻¹ |
| Vm at RTP (298 K, 100 kPa) | 24.0 dm³ mol⁻¹ |
| Kw at 298 K | 1.00 × 10⁻¹⁴ mol² dm⁻⁶ |
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY KEY EQUATIONS (MUST BE KNOWN)
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_KEY_EQUATIONS = `
## Key Chemical Equations (Commonly Tested)

### Group 2 Reactions
**With Water:**
- Mg + 2H₂O → Mg(OH)₂ + H₂ (steam, not cold water effectively)
- Ca + 2H₂O → Ca(OH)₂ + H₂
- Sr + 2H₂O → Sr(OH)₂ + H₂
- Ba + 2H₂O → Ba(OH)₂ + H₂

**With Oxygen:**
- 2Mg + O₂ → 2MgO
- 2Ca + O₂ → 2CaO

### Group 7 Reactions
**Displacement:**
- Cl₂ + 2KBr → 2KCl + Br₂
- Cl₂ + 2KI → 2KCl + I₂
- Br₂ + 2KI → 2KBr + I₂

**Chlorine Disproportionation:**
- Cl₂ + 2NaOH → NaCl + NaClO + H₂O (cold, dilute)
- 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (hot, concentrated)

**Halide Ion Reactions with H₂SO₄:**
- NaCl + H₂SO₄ → NaHSO₄ + HCl
- NaBr + H₂SO₄ → NaHSO₄ + HBr, then 2HBr + H₂SO₄ → Br₂ + SO₂ + 2H₂O
- NaI + H₂SO₄ → NaHSO₄ + HI, then 8HI + H₂SO₄ → 4I₂ + H₂S + 4H₂O

### Period 3 Oxides with Water
- Na₂O + H₂O → 2NaOH (pH 14)
- MgO + H₂O → Mg(OH)₂ (pH 9-10)
- Al₂O₃ + H₂O → no reaction
- SiO₂ + H₂O → no reaction
- P₄O₁₀ + 6H₂O → 4H₃PO₄ (pH 0-1)
- SO₃ + H₂O → H₂SO₄ (pH 0-1)

### Transition Metal Reactions
**With NaOH(aq):**
- Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s) [green precipitate]
- Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s) [red-brown precipitate]
- Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s) [blue precipitate]
- Cr³⁺(aq) + 3OH⁻(aq) → Cr(OH)₃(s) [green precipitate]

**Ligand Substitution:**
- [Cu(H₂O)₆]²⁺ + 4Cl⁻ ⇌ [CuCl₄]²⁻ + 6H₂O
- [Cu(H₂O)₆]²⁺ + 4NH₃ ⇌ [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O

### Organic Reactions
**Combustion:**
- CₙH₂ₙ₊₂ + ((3n+1)/2)O₂ → nCO₂ + (n+1)H₂O

**Halogenoalkane Reactions:**
- CH₃CH₂Br + NaOH(aq) → CH₃CH₂OH + NaBr (nucleophilic substitution)
- CH₃CH₂Br + KOH(ethanolic) → CH₂=CH₂ + KBr + H₂O (elimination)
- CH₃CH₂Br + KCN → CH₃CH₂CN + KBr (nucleophilic substitution)
- CH₃CH₂Br + 2NH₃ → CH₃CH₂NH₂ + NH₄Br (nucleophilic substitution)

**Alkene Reactions:**
- CH₂=CH₂ + H₂ → CH₃CH₃ (Ni catalyst, 150°C)
- CH₂=CH₂ + Br₂ → CH₂BrCH₂Br
- CH₂=CH₂ + HBr → CH₃CH₂Br
- CH₂=CH₂ + H₂O → CH₃CH₂OH (H₃PO₄ catalyst, 300°C, 60 atm)

**Alcohol Reactions:**
- CH₃CH₂OH + [O] → CH₃CHO + H₂O (reflux with acidified K₂Cr₂O₇, distil)
- CH₃CHO + [O] → CH₃COOH (reflux with excess acidified K₂Cr₂O₇)
- (CH₃)₂CHOH + [O] → (CH₃)₂C=O + H₂O (ketone, no further oxidation)
- CH₃CH₂OH → CH₂=CH₂ + H₂O (Al₂O₃ catalyst, 300°C or conc H₂SO₄, 170°C)

**Ester Formation:**
- CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O (conc H₂SO₄ catalyst, reflux)
- CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl (room temperature)

**Benzene Reactions:**
- C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (conc H₂SO₄, 50°C)
- C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl (AlCl₃ catalyst, reflux)
- C₆H₆ + Cl₂ → C₆H₅Cl + HCl (AlCl₃ or FeCl₃ catalyst, reflux)
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY COMMON MISCONCEPTIONS
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_MISCONCEPTIONS = `
## Common Misconceptions in A-Level Chemistry

### Atomic Structure and Bonding

**Misconception:** Electrons orbit the nucleus like planets orbit the sun.
**Correct:** Electrons exist in probability clouds (orbitals) where there's a high chance of finding them.

**Misconception:** Covalent bonds involve electron sharing equally between atoms.
**Correct:** Unless the atoms are identical, bonding electrons are shared unequally due to different electronegativities.

**Misconception:** Ionic compounds have stronger bonds than covalent compounds.
**Correct:** Bond strength depends on the specific compounds. Many covalent bonds are very strong. The distinction is the type of bonding, not necessarily the strength.

**Misconception:** Metallic bonding is just metal atoms touching each other.
**Correct:** Metallic bonding involves delocalised electrons shared by a lattice of positive metal ions.

**Misconception:** Hydrogen bonds are a type of covalent bond.
**Correct:** Hydrogen bonds are intermolecular forces (between molecules), not intramolecular bonds.

**Misconception:** Van der Waals forces only exist in non-polar molecules.
**Correct:** London dispersion forces (van der Waals) exist in ALL molecules, including polar ones. They're just often weaker than other intermolecular forces.

### Energetics

**Misconception:** Breaking bonds releases energy.
**Correct:** Breaking bonds REQUIRES energy (endothermic). Forming bonds RELEASES energy (exothermic).

**Misconception:** ΔH and q are the same thing.
**Correct:** q is the heat energy transferred; ΔH is the enthalpy change per mole under standard conditions.

**Misconception:** If ΔH is negative, the reaction will happen spontaneously.
**Correct:** Spontaneity depends on ΔG = ΔH - TΔS. An endothermic reaction can be spontaneous if ΔS is sufficiently positive.

**Misconception:** Lattice enthalpy is always exothermic.
**Correct:** FORMATION of lattice (ions come together) is exothermic. DISSOCIATION of lattice is endothermic. Be clear about the direction.

**Misconception:** Bond enthalpies are exact values.
**Correct:** Bond enthalpies are averages. The actual bond energy depends on the molecular environment.

### Kinetics

**Misconception:** Catalysts provide more energy for reactions.
**Correct:** Catalysts provide an alternative reaction pathway with lower activation energy. They don't provide energy.

**Misconception:** Increasing temperature increases the number of collisions, which is why rate increases.
**Correct:** While collision frequency does increase, the main reason rate increases is that MORE particles have energy ≥ Ea (Maxwell-Boltzmann distribution shifts).

**Misconception:** The order of reaction can be determined from the stoichiometric equation.
**Correct:** Order must be determined experimentally. It may not match stoichiometric coefficients.

**Misconception:** Half-life is only constant for first-order reactions.
**Correct:** While half-life is concentration-independent only for first-order reactions, other orders do have half-lives (just not constant).

**Misconception:** Rate constant k is always constant.
**Correct:** k is constant only at constant temperature. It varies with temperature (Arrhenius equation).

### Equilibria

**Misconception:** At equilibrium, concentrations of reactants and products are equal.
**Correct:** At equilibrium, the RATE of forward reaction equals rate of backward reaction. Concentrations depend on K.

**Misconception:** Adding a catalyst shifts the equilibrium position.
**Correct:** Catalysts speed up BOTH forward and backward reactions equally. They don't change equilibrium position or K.

**Misconception:** Kc changes when concentration changes.
**Correct:** Kc only changes with temperature. Changing concentration causes the position to shift until Kc is restored.

**Misconception:** In Kp calculations, partial pressure equals concentration.
**Correct:** Partial pressure = mole fraction × total pressure. It has different units than concentration.

### Acids and Bases

**Misconception:** pH can only be between 0 and 14.
**Correct:** pH can be negative (very concentrated strong acids) or greater than 14 (very concentrated strong bases).

**Misconception:** All acids release H⁺ ions completely.
**Correct:** Only STRONG acids fully dissociate. Weak acids partially dissociate (determined by Ka).

**Misconception:** A buffer solution resists ALL pH changes.
**Correct:** Buffers resist SMALL additions of acid or base. Large additions will overwhelm the buffer capacity.

**Misconception:** At the equivalence point of a weak acid-strong base titration, pH = 7.
**Correct:** At equivalence, only the conjugate base remains, which is basic. pH > 7.

**Misconception:** pH = pKa only at the start of a buffer titration.
**Correct:** pH = pKa at the HALF-equivalence point, when [HA] = [A⁻].

### Organic Chemistry

**Misconception:** Markovnikov's rule always gives the major product with HX.
**Correct:** Markovnikov's rule predicts the major product for ELECTROPHILIC addition. Free radical addition gives anti-Markovnikov products.

**Misconception:** All alcohols can be oxidised to carboxylic acids.
**Correct:** Only PRIMARY alcohols can be oxidised to carboxylic acids. Secondary → ketones (no further oxidation). Tertiary → no oxidation.

**Misconception:** SN1 and SN2 are determined by the nucleophile.
**Correct:** The mechanism is determined by the HALOGENOALKANE structure. Primary → SN2, Tertiary → SN1, Secondary → mixture.

**Misconception:** Curly arrows represent electron movement one electron at a time.
**Correct:** Curly arrows represent movement of an ELECTRON PAIR. Half-arrows (fishhooks) show single electron movement.

**Misconception:** Benzene undergoes addition reactions like alkenes.
**Correct:** Benzene's stability means it favours SUBSTITUTION reactions that preserve the aromatic ring.

### Transition Metals

**Misconception:** All transition metals form coloured compounds.
**Correct:** Colour requires partially filled d orbitals. Scandium(III) and zinc(II) compounds are colourless.

**Misconception:** Ligand exchange always changes the colour of a complex.
**Correct:** Colour change depends on the ligand's effect on d-orbital splitting. Similar ligands may give similar colours.

**Misconception:** All complexes with the same metal have the same shape.
**Correct:** Shape depends on coordination number and ligand type. [CuCl₄]²⁻ is tetrahedral while [Cu(H₂O)₆]²⁺ is octahedral.

### Electrochemistry

**Misconception:** A more positive electrode potential means the reaction is faster.
**Correct:** Electrode potential indicates thermodynamic feasibility, NOT rate. Kinetic factors control rate.

**Misconception:** Electrons flow through the salt bridge.
**Correct:** IONS flow through the salt bridge to maintain electrical neutrality. Electrons flow through the external wire.

**Misconception:** The reaction with most positive E°cell value will always occur.
**Correct:** Kinetics may prevent thermodynamically favourable reactions. Overpotential effects are also important.

### Mathematical Errors

**Misconception:** When pH changes by 1, [H⁺] changes by 1.
**Correct:** pH is logarithmic. A change of 1 pH unit = 10-fold change in [H⁺].

**Misconception:** In pV = nRT, any units can be used.
**Correct:** Units MUST be consistent: p in Pa, V in m³, T in K, or p in kPa, V in dm³.

**Misconception:** Percentage yield and atom economy are the same.
**Correct:** % yield = (actual/theoretical) × 100 (practical efficiency)
Atom economy = (Mr of desired product / Σ Mr of all products) × 100 (inherent to reaction)
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY MATHEMATICAL SKILLS
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_MATHEMATICAL_SKILLS = `
## Mathematical Skills Required for A-Level Chemistry

### Overview
20% of marks in A-Level Chemistry require mathematical skills at Level 2 or above.

### Key Mathematical Operations

**1. Standard Form (Scientific Notation)**
- Express very large or small numbers
- Example: 6.022 × 10²³, 1.6 × 10⁻¹⁹
- Adding/subtracting: convert to same power of 10 first
- Multiplying: add indices
- Dividing: subtract indices

**2. Logarithms**
- pH = -log₁₀[H⁺]
- pKa = -log₁₀(Ka)
- ln k = ln A - Ea/RT
- ln(x × y) = ln x + ln y
- ln(x/y) = ln x - ln y
- ln(xⁿ) = n ln x
- log₁₀ x = ln x / ln 10 = ln x / 2.303

**3. Significant Figures**
- Answer should match precision of least precise data
- For logs: decimal places in log = s.f. in original number
- Examples:
  - pH = 2.30 (2 d.p.) comes from [H⁺] = 5.0 × 10⁻³ (2 s.f.)
  - 23.5 × 1.2 = 28 (not 28.2)

**4. Rearranging Equations**
Common rearrangements needed:
- n = m/Mr → m = nMr, Mr = m/n
- c = n/V → n = cV, V = n/c
- pV = nRT → V = nRT/p, T = pV/nR
- ΔG = ΔH - TΔS → T = (ΔH - ΔG)/ΔS
- Ka = [H⁺][A⁻]/[HA] → [H⁺] = √(Ka × [HA])

**5. Gradients and Intercepts**
- Gradient = (y₂ - y₁)/(x₂ - x₁)
- From Arrhenius: plot ln k vs 1/T
  - Gradient = -Ea/R
  - Intercept = ln A
- Must use points ON THE LINE, not data points

**6. Unit Conversions**
| Conversion | Factor |
|------------|--------|
| cm³ to dm³ | ÷ 1000 |
| dm³ to cm³ | × 1000 |
| dm³ to m³ | ÷ 1000 |
| g to kg | ÷ 1000 |
| kPa to Pa | × 1000 |
| kJ to J | × 1000 |
| °C to K | + 273 |

### Common Chemistry Calculations

**Amount of Substance:**
\`\`\`
n = m/Mr          moles from mass
n = cV            moles from concentration (V in dm³)
n = cV/1000       moles from concentration (V in cm³)
n = V/Vm          moles of gas (Vm = 24.0 dm³ at RTP)
n = pV/RT         moles from ideal gas equation
\`\`\`

**Titration Calculations:**
\`\`\`
1. Calculate moles of known solution: n = cV/1000
2. Use molar ratio from equation
3. Calculate concentration of unknown: c = n/(V/1000)
\`\`\`
[VARIETY EXAMPLE: Use different volumes (20.0-30.0 cm³), different concentrations (0.080-0.150 mol dm⁻³), different acid-base pairs]

**Enthalpy Calculations:**
\`\`\`
q = mcΔT          energy transferred (J)
m = mass of solution (g), usually = volume if aqueous
c = 4.18 J g⁻¹ K⁻¹ for water
ΔH = -q/n         enthalpy change per mole (kJ mol⁻¹)
\`\`\`
Example:
50 cm³ of 1.0 mol dm⁻³ HCl + 50 cm³ of 1.0 mol dm⁻³ NaOH
Temperature rose from 20.0°C to 26.5°C
- ΔT = 6.5 K
- m = 100 g (assume density = 1 g cm⁻³)
- q = 100 × 4.18 × 6.5 = 2717 J = 2.717 kJ
- n = 0.05 mol (limiting)
- ΔH = -2.717/0.05 = -54.3 kJ mol⁻¹

**pH Calculations:**

Strong acid:
\`\`\`
[H⁺] = c (for monobasic acid)
pH = -log₁₀[H⁺]
\`\`\`

Weak acid:
\`\`\`
Ka = [H⁺][A⁻]/[HA]
Assume [H⁺] = [A⁻] and [HA] ≈ initial concentration
[H⁺] = √(Ka × [HA])
pH = -log₁₀[H⁺]
\`\`\`

Buffer:
\`\`\`
pH = pKa + log₁₀([A⁻]/[HA])
\`\`\`

**Equilibrium Calculations (Kc and Kp):**
\`\`\`
1. Write equilibrium expression
2. Set up ICE table (Initial, Change, Equilibrium)
3. Substitute equilibrium concentrations
4. Solve for unknown
\`\`\`

**Rate Calculations:**
\`\`\`
Rate = k[A]ᵐ[B]ⁿ
- Determine orders from data (see how rate changes with concentration)
- Calculate k from any experiment using determined orders
- Units of k depend on overall order
\`\`\`

**Arrhenius Equation:**
\`\`\`
ln k = ln A - Ea/RT
Plot ln k (y-axis) vs 1/T (x-axis)
Gradient = -Ea/R
Ea = -gradient × 8.314 J mol⁻¹
\`\`\`

**Electrode Potential:**
\`\`\`
E°cell = E°(cathode) - E°(anode)
E°cell = E°(more positive) - E°(less positive)
Positive E°cell = feasible reaction
\`\`\`

### Error Analysis

**Percentage Error:**
\`\`\`
% error = (uncertainty / measurement) × 100
\`\`\`

**Combining Errors:**
- Adding/subtracting: add absolute uncertainties
- Multiplying/dividing: add percentage uncertainties

**Percentage Difference:**
\`\`\`
% difference = |experimental - theoretical| / theoretical × 100
\`\`\`
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY ORGANIC REACTION MECHANISMS
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_MECHANISMS = `
## Organic Reaction Mechanisms - A-Level Chemistry

### Key Mechanism Terminology

**Curly Arrow Conventions:**
- Full curly arrow (↷): Movement of electron PAIR
- Half curly arrow (⇀): Movement of single electron (radicals only)
- Arrow starts from electron pair (bond, lone pair)
- Arrow points to where electrons go (atom or between atoms)

**Species Types:**
- **Nucleophile:** Electron pair donor, attacks δ+ carbon. Examples: OH⁻, CN⁻, NH₃, H₂O
- **Electrophile:** Electron pair acceptor, attacks regions of high electron density. Examples: H⁺, NO₂⁺, Br⁺
- **Radical:** Species with unpaired electron. Examples: Cl•, CH₃•

---

### 1. FREE RADICAL SUBSTITUTION (Alkanes)

**Reaction:** CH₄ + Cl₂ → CH₃Cl + HCl (UV light)

**Mechanism:**

**Initiation:**
\`\`\`
Cl-Cl  →  Cl• + Cl•
        UV light
(Homolytic fission - each atom gets one electron)
\`\`\`

**Propagation (chain reaction):**
\`\`\`
Step 1: Cl• + CH₄  →  •CH₃ + HCl
        (Cl radical abstracts H atom)

Step 2: •CH₃ + Cl₂  →  CH₃Cl + Cl•
        (Methyl radical attacks Cl₂, regenerating Cl radical)
\`\`\`

**Termination (radicals combine):**
\`\`\`
Cl• + Cl•  →  Cl₂
•CH₃ + Cl•  →  CH₃Cl
•CH₃ + •CH₃  →  C₂H₆
\`\`\`

**Key Points:**
- UV light provides energy to break Cl-Cl bond
- Chain reaction continues until radicals are used up
- Multiple substitution possible (CH₂Cl₂, CHCl₃, CCl₄)
- NOT selective - any H can be replaced

---

### 2. NUCLEOPHILIC SUBSTITUTION (Halogenoalkanes)

**SN2 Mechanism (Primary halogenoalkanes)**

**Reaction:** CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻

**Mechanism:**
\`\`\`
     δ-    δ+
HO⁻ → C-Br  →  HO-C + Br⁻
      |          |
     (single step, curly arrow from OH lone pair to C)
     (curly arrow from C-Br bond to Br)
\`\`\`

**Features:**
- One step (concerted)
- Nucleophile attacks from opposite side to leaving group
- Rate = k[halogenoalkane][nucleophile] (second order)
- Inversion of stereochemistry if chiral

**SN1 Mechanism (Tertiary halogenoalkanes)**

**Reaction:** (CH₃)₃CBr + OH⁻ → (CH₃)₃COH + Br⁻

**Mechanism:**
\`\`\`
Step 1 (slow): (CH₃)₃C-Br  →  (CH₃)₃C⁺ + Br⁻
               (Heterolytic fission, carbocation forms)

Step 2 (fast): (CH₃)₃C⁺ + OH⁻  →  (CH₃)₃COH
               (Nucleophile attacks carbocation)
\`\`\`

**Features:**
- Two steps
- Rate = k[halogenoalkane] (first order)
- Carbocation is planar - attack from either side
- Racemisation if chiral

**Other Nucleophiles:**

**With CN⁻ (nitrile formation):**
\`\`\`
CH₃CH₂Br + CN⁻  →  CH₃CH₂CN + Br⁻
(Increases carbon chain by 1)
Conditions: Heat with KCN in ethanol
\`\`\`

**With NH₃ (amine formation):**
\`\`\`
CH₃CH₂Br + NH₃  →  CH₃CH₂NH₂ + HBr
Then: CH₃CH₂NH₂ + HBr  →  CH₃CH₂NH₃⁺Br⁻
Overall: CH₃CH₂Br + 2NH₃  →  CH₃CH₂NH₂ + NH₄Br
Conditions: Heat with excess conc NH₃ in sealed tube
\`\`\`

---

### 3. ELIMINATION (Halogenoalkanes)

**Reaction:** CH₃CH₂Br + KOH (ethanolic) → CH₂=CH₂ + KBr + H₂O

**Mechanism:**
\`\`\`
      H  H                    H
      |  |                    |
OH⁻ → C--C--Br  →  H₂O + C=C + Br⁻
      |  |                |
      H  H                H

(Curly arrow from OH to H)
(Curly arrow from C-H bond to C=C)
(Curly arrow from C-Br to Br)
\`\`\`

**Key Points:**
- Strong base in hot ethanolic solution
- Removes H from carbon adjacent to C-Br
- Forms alkene (dehydrohalogenation)
- Competes with substitution

**Factors favouring elimination:**
- Hot ethanolic conditions
- Strong base
- Tertiary halogenoalkane

---

### 4. ELECTROPHILIC ADDITION (Alkenes)

**Reaction with Br₂:** CH₂=CH₂ + Br₂ → CH₂BrCH₂Br

**Mechanism:**
\`\`\`
Step 1:
       δ+  δ-
    Br--Br                     H   H
       |                       |   |
   C==C    →    Br⁺ attached, C---C   + Br⁻
   |  |         carbocation   |   |
   H  H                      Br⁺  H

(Arrow from C=C to Br⁺)
(Arrow from Br-Br to Br⁻)

Step 2:
Br⁻ attacks carbocation from opposite side
    →  CH₂Br-CH₂Br
\`\`\`

**Reaction with HBr:** CH₃CH=CH₂ + HBr → CH₃CHBrCH₃ (major)

**Mechanism:**
\`\`\`
Step 1:
       δ+  δ-
    H--Br
       |
   C==C       →    CH₃-CH⁺-CH₃ + Br⁻
   |  |            (secondary carbocation - more stable)
  CH₃ H

Step 2:
Br⁻ attacks carbocation
    →  CH₃CHBrCH₃
\`\`\`

**Markovnikov's Rule:**
- Hydrogen adds to carbon with more H atoms already
- Forms more stable carbocation intermediate
- 3° carbocation > 2° carbocation > 1° carbocation (stability)

**Reaction with H₂O (H₃PO₄ catalyst):** Hydration
\`\`\`
CH₃CH=CH₂ + H₂O  →  CH₃CH(OH)CH₃
(Follows Markovnikov's rule)
\`\`\`

---

### 5. NUCLEOPHILIC ADDITION (Aldehydes/Ketones)

**Reaction with HCN:** CH₃CHO + HCN → CH₃CH(OH)CN

**Mechanism:**
\`\`\`
Step 1: HCN ⇌ H⁺ + CN⁻ (in presence of base catalyst)

Step 2: Nucleophilic attack
            O                O⁻
            ||               |
    CN⁻ →  C-H      →    C-H
           |               |
          CH₃            CH₃
                          |
                         CN

(Curly arrow from CN lone pair to carbonyl C)
(Curly arrow from C=O to O)

Step 3: Protonation
     O⁻                OH
     |                 |
     C-H  + H⁺  →     C-H
     |                 |
    CH₃               CH₃
     |                 |
    CN                CN
\`\`\`

**Key Points:**
- CN⁻ (nucleophile) attacks δ+ carbonyl carbon
- Forms cyanohydrin
- Chiral centre formed → racemic mixture (attack from both sides)
- Product: 2-hydroxypropanenitrile from ethanal

**Reduction with NaBH₄:**
\`\`\`
Aldehyde → Primary alcohol
Ketone → Secondary alcohol

(H⁻ from NaBH₄ acts as nucleophile attacking carbonyl carbon)
\`\`\`

---

### 6. ELECTROPHILIC SUBSTITUTION (Benzene)

**Why substitution not addition?**
- Addition would destroy aromatic stability
- Substitution preserves the delocalised π system

**Nitration:** C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O

**Generation of electrophile:**
\`\`\`
HNO₃ + H₂SO₄  →  NO₂⁺ + HSO₄⁻ + H₂O
(Nitronium ion is the electrophile)
\`\`\`

**Mechanism:**
\`\`\`
Step 1: Attack by electrophile
         NO₂⁺
          ↓
    [benzene ring]  →  [intermediate with H and NO₂]⁺

(Arrow from delocalised ring to NO₂⁺)
(Intermediate has positive charge, H still attached)

Step 2: Elimination of H⁺
[intermediate]⁺  →  [nitrobenzene] + H⁺

(Arrow from C-H bond back into ring)
(H⁺ regenerates H₂SO₄ catalyst)
\`\`\`

**Conditions:** Conc HNO₃ + conc H₂SO₄, 50°C (water bath)

**Friedel-Crafts Acylation:** C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl

**Generation of electrophile:**
\`\`\`
CH₃COCl + AlCl₃  →  CH₃CO⁺ + AlCl₄⁻
(Acylium ion is the electrophile)
\`\`\`

**Mechanism follows same pattern as nitration**

**Conditions:** AlCl₃ catalyst, reflux, anhydrous conditions

**Halogenation:** C₆H₆ + Cl₂ → C₆H₅Cl + HCl

**Conditions:** AlCl₃ or FeCl₃ catalyst (halogen carrier), reflux
\`\`\`
Cl₂ + AlCl₃  →  Cl⁺ + AlCl₄⁻
(Cl⁺ is the electrophile)
\`\`\`

---

### 7. ACYL CHLORIDE REACTIONS (Addition-Elimination)

**Reaction with alcohol:** CH₃COCl + CH₃OH → CH₃COOCH₃ + HCl

**Mechanism:**
\`\`\`
Step 1: Nucleophilic addition
    O                    O⁻
    ||                   |
CH₃-C-Cl  ← :OCH₃  →  CH₃-C-Cl
    H                    |
                       :OCH₃
                         H

Step 2: Elimination
    O⁻                   O
    |                    ||
CH₃-C-Cl    →      CH₃-C-OCH₃  + H⁺ + Cl⁻
    |
  :OCH₃
    H
\`\`\`

**Similar reactions with:**
- Water → carboxylic acid + HCl
- Ammonia → amide + HCl (then HCl + NH₃ → NH₄Cl)
- Amine → N-substituted amide + HCl

**Key advantage:** More reactive than carboxylic acids, proceeds at room temperature

---

### 8. ESTERIFICATION AND HYDROLYSIS

**Ester Formation (from carboxylic acid):**
\`\`\`
CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O
Conditions: Conc H₂SO₄ catalyst, reflux
(Reversible reaction - equilibrium)
\`\`\`

**Ester Hydrolysis:**

**Acid hydrolysis (reversible):**
\`\`\`
CH₃COOCH₂CH₃ + H₂O ⇌ CH₃COOH + CH₃CH₂OH
Conditions: Dilute acid, reflux
\`\`\`

**Base hydrolysis (irreversible):**
\`\`\`
CH₃COOCH₂CH₃ + NaOH → CH₃COO⁻Na⁺ + CH₃CH₂OH
Conditions: NaOH(aq), reflux
(Salt of carboxylic acid formed - reaction goes to completion)
\`\`\`

---

### Summary Table: Mechanisms Required for A-Level

| Mechanism | Reaction Type | Key Species | Conditions |
|-----------|---------------|-------------|------------|
| Free radical substitution | Alkane + halogen | Cl•, CH₃• | UV light |
| Nucleophilic substitution (SN2) | 1° halogenoalkane + nucleophile | OH⁻, CN⁻, NH₃ | Reflux |
| Nucleophilic substitution (SN1) | 3° halogenoalkane + nucleophile | Carbocation | Reflux |
| Elimination | Halogenoalkane + base | OH⁻ | Hot ethanolic KOH |
| Electrophilic addition | Alkene + HX or X₂ | H⁺, Br⁺ | Room temp |
| Nucleophilic addition | Aldehyde/ketone + HCN | CN⁻ | NaCN + HCl or KCN(aq) |
| Electrophilic substitution | Benzene + electrophile | NO₂⁺, RCO⁺ | Catalyst, reflux |
| Addition-elimination | Acyl chloride + nucleophile | OH⁻, NH₃, ROH | Room temp |
`;

const AQA_ALEVEL_CHEMISTRY_WORKED_EXAMPLES = `## A-Level Chemistry Worked Examples (Comprehensive Collection)

### 1. AMOUNT OF SUBSTANCE - Moles from Mass
**Q:** Calculate the number of moles in 5.85 g of sodium chloride. [2 marks]

**Solution:**
- Mr of NaCl = 23.0 + 35.5 = 58.5 ✓
- n = m/Mr = 5.85/58.5 = **0.100 mol** ✓

**Mark Scheme:**
- M1: Correct Mr calculation
- A1: Correct answer with appropriate s.f.

---

### 2. AMOUNT OF SUBSTANCE - Empirical Formula
**Q:** A hydrocarbon contains 82.8% carbon by mass. Determine its empirical formula. [3 marks]

**Solution:**
- Mass of C = 82.8 g, Mass of H = 100 - 82.8 = 17.2 g
- Moles of C = 82.8/12.0 = 6.90 mol
- Moles of H = 17.2/1.0 = 17.2 mol
- Ratio C:H = 6.90 : 17.2 = 1 : 2.49 ≈ 2 : 5
- **Empirical formula = C₂H₅** ✓

**Mark Scheme:**
- M1: Correct masses or moles of each element
- M1: Dividing by smallest to find ratio
- A1: Correct empirical formula

---

### 3. AMOUNT OF SUBSTANCE - Ideal Gas Equation
**Q:** Calculate the volume occupied by 0.250 mol of an ideal gas at 50°C and 120 kPa. [3 marks]

**Solution:**
- T = 50 + 273 = 323 K ✓
- pV = nRT
- V = nRT/p = (0.250 × 8.314 × 323)/(120 × 1000)
- V = 671.4/120000 = 5.59 × 10⁻³ m³
- **V = 5.59 dm³** ✓

**Mark Scheme:**
- M1: Conversion to Kelvin (or correct p, V units)
- M1: Correct substitution into pV = nRT
- A1: Correct answer with units

---

### 4. AMOUNT OF SUBSTANCE - Titration Calculation
**Q:** 25.0 cm³ of sodium hydroxide solution required 23.40 cm³ of 0.100 mol dm⁻³ sulfuric acid for complete neutralisation. Calculate the concentration of the sodium hydroxide. [4 marks]

**Solution:**
- n(H₂SO₄) = c × V/1000 = 0.100 × 23.40/1000 = 2.34 × 10⁻³ mol ✓
- H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O
- n(NaOH) = 2 × n(H₂SO₄) = 2 × 2.34 × 10⁻³ = 4.68 × 10⁻³ mol ✓
- c(NaOH) = n/V = (4.68 × 10⁻³)/(25.0/1000)
- **c(NaOH) = 0.187 mol dm⁻³** ✓

**Mark Scheme:**
- M1: Correct moles of H₂SO₄
- M1: Using 2:1 ratio from equation
- M1: Correct moles of NaOH
- A1: Correct concentration with units

---

### 5. ENERGETICS - Calorimetry
**Q:** When 50 cm³ of 1.0 mol dm⁻³ HCl was added to 50 cm³ of 1.0 mol dm⁻³ NaOH, the temperature rose from 21.2°C to 27.8°C. Calculate the enthalpy of neutralisation. [4 marks]

**Solution:**
- ΔT = 27.8 - 21.2 = 6.6 K ✓
- Total mass = 50 + 50 = 100 g (assuming density = 1 g cm⁻³)
- q = mcΔT = 100 × 4.18 × 6.6 = 2759 J = 2.759 kJ ✓
- n(HCl) = n(NaOH) = 0.05 mol (limiting)
- ΔH = -q/n = -2.759/0.05 = **-55.2 kJ mol⁻¹** ✓

**Mark Scheme:**
- M1: Correct ΔT or q calculation
- M1: q = mcΔT with correct substitution
- M1: Calculating moles reacting
- A1: Correct ΔH with sign and units

---

### 6. ENERGETICS - Hess's Law
**Q:** Using the enthalpy changes of combustion below, calculate the enthalpy change of formation of ethanol.
ΔcH°(C) = -394 kJ mol⁻¹
ΔcH°(H₂) = -286 kJ mol⁻¹
ΔcH°(C₂H₅OH) = -1367 kJ mol⁻¹ [4 marks]

**Solution:**
- Target: 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l)
- Using Hess's Law cycle via combustion products:
- ΔfH = Σ ΔcH(elements) - ΔcH(compound)
- ΔfH = 2(-394) + 3(-286) - (-1367)
- ΔfH = -788 - 858 + 1367
- **ΔfH = -279 kJ mol⁻¹** ✓

**Mark Scheme:**
- M1: Correct equation for formation
- M1: Using correct Hess's Law relationship
- M1: Correct substitution
- A1: Correct answer with sign

---

### 7. ENERGETICS - Born-Haber Cycle
**Q:** Use the data below to calculate the lattice enthalpy of calcium chloride.
ΔfH°(CaCl₂) = -795 kJ mol⁻¹
ΔatH°(Ca) = +178 kJ mol⁻¹
IE₁(Ca) = +590 kJ mol⁻¹
IE₂(Ca) = +1145 kJ mol⁻¹
ΔatH°(Cl) = +122 kJ mol⁻¹ (per mole of Cl atoms)
EA₁(Cl) = -349 kJ mol⁻¹ [5 marks]

**Solution:**
- Born-Haber cycle: ΔfH = ΔatH(Ca) + IE₁ + IE₂ + 2ΔatH(Cl) + 2EA₁(Cl) + ΔlattH
- -795 = 178 + 590 + 1145 + 2(122) + 2(-349) + ΔlattH
- -795 = 178 + 590 + 1145 + 244 - 698 + ΔlattH
- -795 = 1459 + ΔlattH
- **ΔlattH = -2254 kJ mol⁻¹** ✓

**Mark Scheme:**
- M1: Setting up Born-Haber cycle
- M1: Including 2× for atomisation of Cl
- M1: Including 2× for electron affinity of Cl
- M1: Correct signs throughout
- A1: Correct lattice enthalpy value

---

### 8. KINETICS - Rate Equation from Data
**Q:** The following data were obtained for the reaction A + B → products.
| Experiment | [A]/mol dm⁻³ | [B]/mol dm⁻³ | Rate/mol dm⁻³ s⁻¹ |
|------------|--------------|--------------|-------------------|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 8.0 × 10⁻⁴ |
| 3 | 0.20 | 0.20 | 1.6 × 10⁻³ |

Determine the rate equation and calculate the rate constant k. [5 marks]

**Solution:**
- Comparing experiments 1 and 2: [A] doubles, [B] constant
- Rate increases by factor of 4 (8.0/2.0)
- Therefore order with respect to A = 2 ✓
- Comparing experiments 2 and 3: [B] doubles, [A] constant
- Rate doubles (1.6/0.8 = 2)
- Therefore order with respect to B = 1 ✓
- **Rate = k[A]²[B]** ✓
- Using experiment 1: 2.0 × 10⁻⁴ = k × (0.10)² × (0.10)
- k = 2.0 × 10⁻⁴ / (0.01 × 0.10) = 2.0 × 10⁻⁴ / 0.001
- **k = 0.20 mol⁻² dm⁶ s⁻¹** ✓

**Mark Scheme:**
- M1: Correct order with respect to A
- M1: Correct order with respect to B
- A1: Correct rate equation
- M1: Substitution to find k
- A1: Correct k value with units

---

### 9. KINETICS - Arrhenius Equation
**Q:** The rate constant for a reaction at 300 K is 2.5 × 10⁻³ s⁻¹ and at 310 K is 7.5 × 10⁻³ s⁻¹. Calculate the activation energy. [4 marks]

**Solution:**
- Using ln k = ln A - Ea/RT at two temperatures:
- ln k₁ - ln k₂ = -Ea/R × (1/T₁ - 1/T₂)
- ln(2.5 × 10⁻³) - ln(7.5 × 10⁻³) = -Ea/8.314 × (1/300 - 1/310)
- -5.991 - (-4.893) = -Ea/8.314 × (0.00333 - 0.00323)
- -1.099 = -Ea/8.314 × 0.000107
- Ea = 1.099 × 8.314 / 0.000107
- **Ea = 85.4 kJ mol⁻¹** ✓

**Mark Scheme:**
- M1: Using Arrhenius equation correctly
- M1: Correct temperature handling (1/T)
- M1: Correct mathematical manipulation
- A1: Correct Ea value

---

### 10. EQUILIBRIUM - Kc Calculation
**Q:** At equilibrium, a 2.0 dm³ vessel contains 0.20 mol H₂, 0.20 mol I₂ and 1.60 mol HI at 450°C. Calculate Kc for H₂(g) + I₂(g) ⇌ 2HI(g). [3 marks]

**Solution:**
- [H₂] = 0.20/2.0 = 0.10 mol dm⁻³
- [I₂] = 0.20/2.0 = 0.10 mol dm⁻³
- [HI] = 1.60/2.0 = 0.80 mol dm⁻³ ✓
- Kc = [HI]²/([H₂][I₂])
- Kc = (0.80)²/((0.10)(0.10))
- **Kc = 64** (no units - same moles on each side) ✓

**Mark Scheme:**
- M1: Converting moles to concentrations
- M1: Correct Kc expression
- A1: Correct Kc value (no units)

---

### 11. EQUILIBRIUM - Kp Calculation
**Q:** At equilibrium, a mixture of N₂O₄ and NO₂ at 1.0 atm total pressure contains 0.20 mol N₂O₄ and 0.80 mol NO₂. Calculate Kp for N₂O₄(g) ⇌ 2NO₂(g). [4 marks]

**Solution:**
- Total moles = 0.20 + 0.80 = 1.00 mol
- Mole fraction of N₂O₄ = 0.20/1.00 = 0.20
- Mole fraction of NO₂ = 0.80/1.00 = 0.80 ✓
- p(N₂O₄) = 0.20 × 1.0 = 0.20 atm
- p(NO₂) = 0.80 × 1.0 = 0.80 atm ✓
- Kp = p(NO₂)²/p(N₂O₄)
- Kp = (0.80)²/(0.20) = 0.64/0.20
- **Kp = 3.2 atm** ✓

**Mark Scheme:**
- M1: Calculating mole fractions
- M1: Calculating partial pressures
- M1: Correct Kp expression
- A1: Correct Kp with units

---

### 12. ACIDS AND BASES - Strong Acid pH
**Q:** Calculate the pH of 0.025 mol dm⁻³ HCl. [2 marks]

**Solution:**
- HCl is a strong acid, fully dissociates
- [H⁺] = 0.025 mol dm⁻³ ✓
- pH = -log₁₀[H⁺] = -log₁₀(0.025)
- **pH = 1.60** ✓

**Mark Scheme:**
- M1: Recognising [H⁺] = concentration for strong acid
- A1: Correct pH

---

### 13. ACIDS AND BASES - Weak Acid pH
**Q:** Calculate the pH of 0.050 mol dm⁻³ ethanoic acid (Ka = 1.8 × 10⁻⁵ mol dm⁻³). [3 marks]

**Solution:**
- For weak acid: Ka = [H⁺]²/[HA] (assuming [H⁺] << [HA])
- [H⁺]² = Ka × [HA] = 1.8 × 10⁻⁵ × 0.050 = 9.0 × 10⁻⁷ ✓
- [H⁺] = √(9.0 × 10⁻⁷) = 9.49 × 10⁻⁴ mol dm⁻³ ✓
- pH = -log₁₀(9.49 × 10⁻⁴)
- **pH = 3.02** ✓

**Mark Scheme:**
- M1: Using Ka expression correctly
- M1: Correct [H⁺] calculation
- A1: Correct pH

---

### 14. ACIDS AND BASES - Buffer pH
**Q:** A buffer solution contains 0.10 mol dm⁻³ ethanoic acid and 0.15 mol dm⁻³ sodium ethanoate. Calculate the pH. (Ka = 1.8 × 10⁻⁵ mol dm⁻³) [3 marks]

**Solution:**
- pKa = -log(1.8 × 10⁻⁵) = 4.74 ✓
- Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])
- pH = 4.74 + log(0.15/0.10) ✓
- pH = 4.74 + log(1.5) = 4.74 + 0.18
- **pH = 4.92** ✓

**Mark Scheme:**
- M1: Calculating pKa (or using Ka correctly)
- M1: Correct substitution into Henderson-Hasselbalch
- A1: Correct pH

---

### 15. ACIDS AND BASES - Titration Curve Ka
**Q:** A titration curve for a weak acid titrated with strong base shows pH = 4.50 at the half-equivalence point. Calculate Ka for the weak acid. [2 marks]

**Solution:**
- At half-equivalence point: [HA] = [A⁻]
- Therefore pH = pKa ✓
- pKa = 4.50
- Ka = 10⁻⁴·⁵⁰ = **3.2 × 10⁻⁵ mol dm⁻³** ✓

**Mark Scheme:**
- M1: Recognising pH = pKa at half-equivalence
- A1: Correct Ka value

---

### 16. ELECTRODE POTENTIALS - Cell EMF
**Q:** Calculate the EMF of a cell made from Zn²⁺/Zn and Cu²⁺/Cu half-cells under standard conditions.
E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V [2 marks]

**Solution:**
- Cu²⁺/Cu is more positive, so is the cathode (reduction)
- Zn²⁺/Zn is less positive, so is the anode (oxidation)
- E°cell = E°(cathode) - E°(anode) ✓
- E°cell = +0.34 - (-0.76) = **+1.10 V** ✓

**Mark Scheme:**
- M1: Correct identification of cathode/anode or using formula correctly
- A1: Correct EMF value

---

### 17. ELECTRODE POTENTIALS - Feasibility
**Q:** Using the electrode potentials below, predict whether Br₂ can oxidise Fe²⁺ to Fe³⁺.
E°(Br₂/Br⁻) = +1.09 V
E°(Fe³⁺/Fe²⁺) = +0.77 V [3 marks]

**Solution:**
- For reaction to be feasible, E°cell must be positive
- Br₂ acts as oxidising agent (reduced to Br⁻) - cathode
- Fe²⁺ is oxidised to Fe³⁺ - anode ✓
- E°cell = E°(reduction) - E°(oxidation)
- E°cell = +1.09 - (+0.77) = +0.32 V ✓
- Positive E°cell means reaction is **thermodynamically feasible** ✓

**Mark Scheme:**
- M1: Identifying which species is reduced/oxidised
- M1: Correct E°cell calculation
- A1: Correct conclusion with reasoning

---

### 18. THERMODYNAMICS - Gibbs Energy and Feasibility
**Q:** For a reaction, ΔH = -50 kJ mol⁻¹ and ΔS = +100 J K⁻¹ mol⁻¹. Calculate ΔG at 298 K and determine whether the reaction is feasible. [3 marks]

**Solution:**
- ΔG = ΔH - TΔS
- Note: ΔS must be in kJ: 100 J K⁻¹ mol⁻¹ = 0.100 kJ K⁻¹ mol⁻¹ ✓
- ΔG = -50 - (298 × 0.100)
- ΔG = -50 - 29.8 = **-79.8 kJ mol⁻¹** ✓
- ΔG is negative, so reaction is **feasible at 298 K** ✓

**Mark Scheme:**
- M1: Converting units to be consistent
- M1: Correct substitution
- A1: Correct ΔG and feasibility statement

---

### 19. THERMODYNAMICS - Temperature for Feasibility
**Q:** For a reaction, ΔH = +80 kJ mol⁻¹ and ΔS = +200 J K⁻¹ mol⁻¹. Calculate the minimum temperature at which the reaction becomes feasible. [3 marks]

**Solution:**
- Reaction is feasible when ΔG ≤ 0
- At the boundary: ΔG = 0, so ΔH = TΔS ✓
- T = ΔH/ΔS = 80000/200 (using consistent units: J) ✓
- T = 400 K
- **Minimum temperature = 400 K (or 127°C)** ✓

**Mark Scheme:**
- M1: Setting ΔG = 0 for boundary condition
- M1: Rearranging and using consistent units
- A1: Correct temperature

---

### 20. BONDING - Shapes and Bond Angles
**Q:** Predict the shape and bond angle of the SF₆ molecule. [2 marks]

**Solution:**
- S has 6 bonding pairs, 0 lone pairs ✓
- VSEPR predicts **octahedral shape**
- **Bond angle = 90°** ✓

**Mark Scheme:**
- B1: Correct shape (octahedral)
- B1: Correct bond angle (90°)

---

### 21. ATOMIC STRUCTURE - Ionisation Energy Trend
**Q:** Explain why the first ionisation energy of sulfur is lower than that of phosphorus. [3 marks]

**Solution:**
- Phosphorus: 1s² 2s² 2p⁶ 3s² 3p³ (half-filled 3p subshell) ✓
- Sulfur: 1s² 2s² 2p⁶ 3s² 3p⁴ (one 3p orbital has paired electrons) ✓
- In sulfur, the electron being removed experiences electron-electron repulsion with the other electron in the same orbital
- This makes it easier to remove, so IE₁ is lower ✓

**Mark Scheme:**
- M1: Reference to electron configurations or subshells
- M1: Reference to pairing/repulsion in sulfur's 3p
- A1: Clear explanation linking to lower IE

---

### 22. PERIODIC TABLE - Group 7 Reactions
**Q:** Explain why iodine cannot displace chlorine from sodium chloride solution. [2 marks]

**Solution:**
- Iodine is a weaker oxidising agent than chlorine ✓
- Chlorine has a more positive E° (more readily gains electrons)
- Therefore iodine cannot oxidise chloride ions to chlorine
- **No displacement occurs** ✓

**Mark Scheme:**
- M1: Reference to oxidising power or electrode potentials
- A1: Correct explanation of why no reaction

---

### 23. TRANSITION METALS - Complex Ion Colours
**Q:** Explain why [Cu(H₂O)₆]²⁺ is blue while [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue. [3 marks]

**Solution:**
- Both contain Cu²⁺ with partially filled 3d orbitals ✓
- d-d electronic transitions occur when light is absorbed
- NH₃ is a stronger field ligand than H₂O ✓
- This causes greater splitting of d-orbitals, so different wavelength absorbed
- Different frequency absorbed → different colour transmitted ✓

**Mark Scheme:**
- M1: Reference to d-d transitions or d-orbital splitting
- M1: Comparison of ligand field strength
- A1: Link between splitting and colour difference

---

### 24. ORGANIC - Naming and Structure
**Q:** Give the IUPAC name and draw the structural formula of the compound formed when but-2-ene reacts with hydrogen bromide. [3 marks]

**Solution:**
- But-2-ene: CH₃CH=CHCH₃
- Following Markovnikov's rule, H adds to carbon with more H atoms
- Product: CH₃CHBrCH₂CH₃ or CH₃CH₂CHBrCH₃ ✓
- **IUPAC name: 2-bromobutane** ✓
- (Both products are equivalent due to symmetry of but-2-ene)

**Mark Scheme:**
- M1: Correct understanding of reaction
- A1: Correct structural formula
- A1: Correct IUPAC name

---

### 25. ORGANIC - Oxidation of Alcohols
**Q:** Describe how you would distinguish between propan-1-ol and propan-2-ol using chemical tests. [4 marks]

**Solution:**
- Add acidified potassium dichromate to each and warm
- Both turn from orange to green (both can be oxidised) ✓
- Distil off the product immediately
- For propan-1-ol: product is propanal (aldehyde)
- For propan-2-ol: product is propanone (ketone) ✓
- Add Tollens' reagent (silver nitrate in ammonia) to each product
- Propanal gives silver mirror (aldehyde is oxidised)
- Propanone gives no reaction ✓
- **Propan-1-ol produces an aldehyde; propan-2-ol produces a ketone** ✓

**Mark Scheme:**
- M1: Using dichromate to oxidise both
- M1: Identifying different products (aldehyde vs ketone)
- M1: Using Tollens' (or Fehling's) to distinguish
- A1: Correct observations and conclusion

---

### 26. ORGANIC - Mechanism Question
**Q:** Draw the mechanism for the reaction between 1-bromobutane and aqueous sodium hydroxide. Name the type of reaction and mechanism. [4 marks]

**Solution:**
- **Reaction type:** Nucleophilic substitution ✓
- **Mechanism type:** SN2 (primary halogenoalkane) ✓

**Mechanism:**
- OH⁻ (nucleophile) has lone pair of electrons
- Curly arrow from lone pair on O of OH⁻ to δ+ carbon attached to Br ✓
- Curly arrow from C-Br bond to Br atom
- Product: butan-1-ol + Br⁻ ✓

**Mark Scheme:**
- B1: Correct reaction type
- B1: Correct mechanism type
- M1: Correct curly arrows showing attack and leaving group
- A1: Correct products

---

### 27. ORGANIC - Electrophilic Addition
**Q:** Explain why the addition of HBr to propene gives mainly 2-bromopropane and not 1-bromopropane. [3 marks]

**Solution:**
- The electrophile (H⁺) attacks the C=C double bond ✓
- H⁺ can add to either carbon
- If H adds to CH₂ end: forms CH₃CH⁺CH₃ (secondary carbocation)
- If H adds to CH end: forms CH₃CH₂CH₂⁺ (primary carbocation) ✓
- Secondary carbocation is more stable (alkyl groups stabilise +ve charge)
- More stable intermediate forms faster → **2-bromopropane is major product** ✓

**Mark Scheme:**
- M1: Reference to carbocation intermediate
- M1: Comparison of stability of carbocations
- A1: Link between stability and major product

---

### 28. ORGANIC - Benzene Nitration
**Q:** Give the reagents, conditions, and equation for the nitration of benzene. Explain the role of the catalyst. [5 marks]

**Solution:**
- **Reagents:** Concentrated nitric acid and concentrated sulfuric acid ✓
- **Conditions:** Temperature 50°C (water bath), reflux ✓
- **Equation:** C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O ✓
- **Role of H₂SO₄:** Acts as catalyst by generating the nitronium ion electrophile
- HNO₃ + H₂SO₄ → NO₂⁺ + HSO₄⁻ + H₂O ✓
- NO₂⁺ is the active electrophile that attacks the benzene ring ✓

**Mark Scheme:**
- B1: Both reagents correct
- B1: Correct temperature
- B1: Balanced equation
- M1: Generation of NO₂⁺
- A1: Explanation of electrophile role

---

### 29. ORGANIC - Ester Hydrolysis
**Q:** Describe the acid-catalysed and base-catalysed hydrolysis of ethyl ethanoate, including equations. Explain why base hydrolysis goes to completion. [4 marks]

**Solution:**
**Acid hydrolysis (reversible):**
- CH₃COOCH₂CH₃ + H₂O ⇌ CH₃COOH + CH₃CH₂OH ✓
- Conditions: dilute HCl, reflux

**Base hydrolysis (irreversible):**
- CH₃COOCH₂CH₃ + NaOH → CH₃COO⁻Na⁺ + CH₃CH₂OH ✓
- Conditions: NaOH(aq), reflux

**Why base hydrolysis is irreversible:**
- The carboxylic acid produced immediately reacts with excess base to form sodium ethanoate (salt) ✓
- This removes the carboxylic acid from the equilibrium
- Le Chatelier's principle drives reaction to completion ✓

**Mark Scheme:**
- B1: Correct equation for acid hydrolysis
- B1: Correct equation for base hydrolysis
- M1: Salt formation explanation
- A1: Link to equilibrium/Le Chatelier's

---

### 30. ORGANIC - NMR Interpretation
**Q:** A compound with molecular formula C₃H₆O₂ shows the following ¹H NMR spectrum:
- δ 1.2 (triplet, 3H)
- δ 4.1 (quartet, 2H)
- δ 8.1 (singlet, 1H, exchanges with D₂O)
Identify the compound. [4 marks]

**Solution:**
- δ 8.1: singlet that exchanges with D₂O indicates -COOH (carboxylic acid) ✓
- δ 4.1: quartet suggests -CH₂- adjacent to CH₃ ✓
- δ 1.2: triplet suggests -CH₃ adjacent to CH₂ ✓
- Integration 3:2:1 matches CH₃CH₂COOH
- **Compound is propanoic acid** ✓

**Mark Scheme:**
- M1: Identifying COOH from D₂O exchange
- M1: Identifying CH₂ from quartet splitting
- M1: Identifying CH₃ from triplet splitting
- A1: Correct compound name

---

### 31. SPECTROSCOPY - IR Interpretation
**Q:** How would you use infrared spectroscopy to distinguish between ethanol (C₂H₅OH) and ethanal (CH₃CHO)? [3 marks]

**Solution:**
- Both contain C-H bonds (around 2900-3000 cm⁻¹) - not distinctive
- **Ethanol:** Broad O-H absorption around 3230-3550 cm⁻¹ (hydrogen bonded) ✓
- **Ethanal:** Strong C=O absorption around 1700-1750 cm⁻¹ ✓
- Ethanal has no O-H absorption; ethanol has no C=O absorption ✓

**Mark Scheme:**
- B1: Ethanol shows broad O-H peak (with approximate position)
- B1: Ethanal shows C=O peak (with approximate position)
- B1: Clear distinction between the two spectra

---

### 32. PRACTICAL - Sources of Error in Enthalpy
**Q:** In an experiment to measure the enthalpy of neutralisation, the experimental value was -52 kJ mol⁻¹ compared to the literature value of -57 kJ mol⁻¹. Suggest two reasons for this difference and one improvement. [3 marks]

**Solution:**
**Reasons for lower experimental value:**
- Heat loss to surroundings during the experiment ✓
- Heat absorbed by the calorimeter (polystyrene cup) not accounted for ✓
- Other valid reasons: incomplete mixing, evaporation, heat loss during transfer

**Improvement:**
- Use a lid on the calorimeter / better insulation ✓
- Use temperature-time graph extrapolation to find true ΔT
- Calibrate the calorimeter to find its heat capacity

**Mark Scheme:**
- B1: First valid reason
- B1: Second valid reason
- B1: Valid improvement linked to a reason

---

### 33. PRACTICAL - Percentage Yield
**Q:** 5.0 g of benzene was converted to nitrobenzene. The actual mass of nitrobenzene obtained was 6.5 g. Calculate the percentage yield. [3 marks]

**Solution:**
- Mr(C₆H₆) = 78, Mr(C₆H₅NO₂) = 123 ✓
- n(benzene) = 5.0/78 = 0.0641 mol
- From equation, 1:1 ratio, so theoretical n(nitrobenzene) = 0.0641 mol
- Theoretical mass = 0.0641 × 123 = 7.88 g ✓
- Percentage yield = (actual/theoretical) × 100 = (6.5/7.88) × 100
- **Percentage yield = 82.5%** ✓

**Mark Scheme:**
- M1: Calculating moles of benzene or theoretical moles of product
- M1: Calculating theoretical mass of product
- A1: Correct percentage yield

---

### 34. SYNOPTIC - Multi-step Synthesis
**Q:** Starting from ethene, outline how you would prepare ethylamine. Give reagents and conditions for each step. [6 marks]

**Solution:**
**Step 1: Ethene → Bromoethane**
- React with HBr (or Br₂/HBr) ✓
- Electrophilic addition at room temperature

**Step 2: Bromoethane → Ethylamine**
- React with excess concentrated ammonia ✓
- In a sealed tube, heated ✓
- Nucleophilic substitution mechanism

**Overall route:**
CH₂=CH₂ + HBr → CH₃CH₂Br
CH₃CH₂Br + 2NH₃ → CH₃CH₂NH₂ + NH₄Br ✓

**Mark Scheme:**
- M1: Correct reagent for step 1
- A1: Correct conditions for step 1
- M1: Correct reagent for step 2 (excess NH₃)
- A1: Correct conditions for step 2 (sealed tube, heat)
- A1: Correct intermediate (bromoethane)
- A1: Correct product (ethylamine)

---

### 35. SYNOPTIC - Industrial Process Evaluation
**Q:** The Haber process operates at 450°C and 200 atm with an iron catalyst.
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = -92 kJ mol⁻¹
Explain why these conditions are used rather than lower temperature and higher pressure. [6 marks]

**Solution:**
**Temperature:**
- Lower temperature would favour forward reaction (exothermic) - higher yield ✓
- But rate would be too slow at low temperature ✓
- 450°C is a compromise: reasonable rate and acceptable yield ✓

**Pressure:**
- Higher pressure favours forward reaction (fewer moles of gas) ✓
- Very high pressures are expensive (equipment, energy costs) ✓
- 200 atm is economic compromise between yield and cost ✓

**Catalyst:**
- Speeds up both forward and reverse reactions equally
- Does NOT affect equilibrium position
- Allows acceptable rate to be achieved at lower temperature than would otherwise be needed

**Mark Scheme:**
- M1: Low T favours forward reaction
- M1: But low T gives slow rate
- A1: 450°C is compromise
- M1: High pressure favours forward reaction
- M1: Very high pressure too expensive
- A1: 200 atm is economic compromise
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY SYNOPTIC ASSESSMENT GUIDANCE
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_SYNOPTIC = `
## Synoptic Assessment Guidance for A-Level Chemistry

### What is Synoptic Assessment?
Synoptic assessment tests the ability to draw together knowledge, understanding and skills from across the full specification. It requires students to make connections between different areas of chemistry.

### Paper 3 - The Synoptic Paper
Paper 3 is explicitly synoptic, worth 30% of the total A-Level marks. It assesses:
- All content from Physical, Inorganic and Organic Chemistry
- Practical skills in a written context
- Mathematical skills
- Making connections across topics

### Common Synoptic Combinations

**1. Energetics + Equilibria**
- Le Chatelier's principle applied to industrial processes
- Effect of temperature on equilibrium position linked to ΔH
- Gibbs free energy and spontaneity of reactions

**Example:** "Explain why the Haber process uses 450°C even though the reaction is exothermic."
- Must link: Thermodynamics (ΔH), Equilibria (K vs temperature), Kinetics (rate)

**2. Kinetics + Organic Chemistry**
- Rate-determining step and mechanism
- SN1 vs SN2 linked to rate equations
- Effect of temperature on organic reaction rates

**Example:** "The rate equation for hydrolysis of (CH₃)₃CBr is Rate = k[(CH₃)₃CBr]. Suggest the mechanism and explain why."
- Must link: Rate equations (first order), Organic mechanisms (SN1), Carbocation stability

**3. Acids-Bases + Organic Chemistry**
- Carboxylic acid acidity
- Basicity of amines
- Buffer calculations with organic acids

**Example:** "Explain why phenol is more acidic than ethanol."
- Must link: Acid dissociation, Delocalisation in phenoxide ion, Structure and bonding

**4. Electrode Potentials + Transition Metals**
- Feasibility of redox reactions
- Vanadium chemistry and reduction reactions
- Electrochemical cells using transition metal ions

**Example:** "Using the E° values, explain the colour changes when zinc is added to V₃⁺(aq)."
- Must link: Electrode potentials, Transition metal oxidation states, Colour of complexes

**5. Spectroscopy + Organic Synthesis**
- Structure determination combining IR, NMR, Mass Spec
- Identifying products of reactions
- Quality control in synthesis

**Example:** "Compound X (C₄H₈O₂) is an ester. Given IR and NMR data, identify X and suggest how it could be synthesised."
- Must link: Functional group identification, NMR interpretation, Organic synthesis routes

**6. Thermodynamics + Inorganic Chemistry**
- Born-Haber cycles
- Lattice enthalpy trends
- Solubility of ionic compounds

**Example:** "Explain why magnesium oxide has a higher melting point than sodium chloride."
- Must link: Lattice enthalpy factors (charge, radius), Ionic bonding, Structure

**7. Amount of Substance + Any Quantitative Topic**
- Titration calculations
- Percentage yield in synthesis
- Gas volume calculations
- Equilibrium calculations

### Key Skills for Synoptic Questions

**1. Making Connections**
- Identify which topics are relevant
- See how concepts from different areas link together
- Explain relationships between different phenomena

**2. Extended Response Questions (6 marks)**
These often require synoptic thinking:
- Use level descriptors (not point marking)
- Must show breadth and depth of knowledge
- Quality of written communication matters
- Must include relevant terminology

**Level 3 (5-6 marks):** Comprehensive and coherent, accurate throughout
**Level 2 (3-4 marks):** Mostly accurate, some gaps or errors
**Level 1 (1-2 marks):** Basic points only, may contain errors

**3. Problem-Solving**
- Apply knowledge to unfamiliar contexts
- Use data provided to reach conclusions
- Evaluate experimental results

### Synoptic Question Types

**Type 1: Multi-step calculations**
- Require knowledge from multiple topics
- Example: Calculate pH of solution formed when excess acid is added to buffer

**Type 2: Extended explanations**
- "Explain why..." requiring concepts from different areas
- Example: Explain observations when sodium is added to ethanol vs when added to water

**Type 3: Compare and contrast**
- Identify similarities and differences across topics
- Example: Compare the reactions of Group 2 hydroxides with carbon dioxide

**Type 4: Practical-based**
- Plan or evaluate experiments
- Apply multiple techniques
- Example: Describe how you would determine the Mr of an unknown carboxylic acid

**Type 5: Industrial/environmental context**
- Real-world applications
- Economic and environmental factors
- Example: Discuss the factors affecting the choice of conditions for manufacturing sulfuric acid

### Common Synoptic Topics

**Physical Chemistry connections:**
- Atomic structure → Electronic configuration → Bonding
- Energetics → Equilibrium constant → Feasibility
- Kinetics → Mechanisms → Rate-determining step
- Equilibria → Industrial processes → Economics

**Inorganic Chemistry connections:**
- Periodicity → Group trends → Reactions
- Transition metals → Complex formation → Colour
- Electrode potentials → Feasibility → Extraction

**Organic Chemistry connections:**
- Structure → Reactivity → Mechanisms
- Functional groups → Reactions → Synthesis routes
- Isomerism → Chirality → Biological activity
- Spectroscopy → Structure determination → Quality control

### Tips for Synoptic Questions

1. **Read carefully** - Identify all the topics involved
2. **Plan your answer** - Note the key points before writing
3. **Use correct terminology** - Technical terms score marks
4. **Show connections explicitly** - Make links clear in your answer
5. **Check units** - Especially in calculations
6. **Answer the question asked** - Don't just write everything you know
7. **Use data given** - Quote specific values from tables/graphs
`;

// ============================================================================
// AQA A-LEVEL CHEMISTRY GUIDING PRINCIPLES
// ============================================================================

const AQA_ALEVEL_CHEMISTRY_PRINCIPLES = `
AQA A-Level Chemistry Assessment Objectives:
- AO1: Demonstrate knowledge and understanding (25-30%)
- AO2: Apply knowledge and understanding (40-45%)
- AO3: Analyse, interpret and evaluate (25-30%)

AQA A-Level Chemistry Command Words:
- Calculate: Obtain a numerical answer showing working
- Compare: Identify similarities and/or differences
- Define: Give precise meaning of a term
- Describe: Give an account of features or process
- Determine: Use given data to obtain answer
- Discuss: Present key points about ideas or strengths/weaknesses
- Draw: Produce diagram, mechanism or structure
- Explain: Give reasons using chemistry
- Justify: Give reasons to support a conclusion
- Outline: Set out main points (of a mechanism)
- Predict: Give expected result based on knowledge
- Show that: Verify statement using given information
- State: Express in clear terms
- Suggest: Apply knowledge to unfamiliar context
- Write: Give equation or formula

AQA A-Level Mark Scheme Conventions:
- Working must be shown for calculation questions
- Units required unless given in question
- Significant figures should match data (usually 2-3 sf)
- Accept equivalent correct answers
- 6-mark extended questions use level descriptors
- Mechanisms must show curly arrows correctly
- State symbols only required if specified

**AQA A-Level Chemistry Characteristics:**
- 12 Required Practicals assessed in written papers
- Strong emphasis on practical skills (15% of marks)
- 20% mathematical requirement
- Paper 1: Physical + Inorganic Chemistry
- Paper 2: Physical + Organic Chemistry
- Paper 3: Synoptic assessment of all content
- Mechanisms must show all curly arrows and charges
- Extended response questions (6 marks) use level descriptors
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const ALEVEL_CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'alevel-chemistry-atomic-structure': `
Section 3.1.1 Atomic Structure:

**Key Content:**
- Mass spectrometry: TOF (time of flight), calculating Ar, fragmentation patterns
- Electronic configurations: s, p, d orbitals, Aufbau principle, Hund's rule, Pauli exclusion
- Ionisation energies: trends across periods and down groups
- Evidence from ionisation energies for electron shells and subshells

**Mass Spectrometry:**
- TOF: ions accelerated by electric field, separated by m/z
- Ar = Σ(isotopic mass × relative abundance)/100
- Fragmentation patterns: molecular ion peak at Mr, loss of common fragments

**Electronic Configuration Rules:**
- Aufbau: fill lowest energy orbitals first
- Hund's rule: electrons fill orbitals singly before pairing
- Pauli exclusion: max 2 electrons per orbital, opposite spins
- Order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d...

**Ionisation Energy Trends:**
- Across period: INCREASES (greater nuclear charge, same shielding)
- Down group: DECREASES (more shells, greater shielding, weaker attraction)
- Anomalies: Mg→Al (3p higher energy than 3s), P→S (electron pairing in 3p)

AQA Common Questions:
- Calculate Ar from mass spectrum data
- Explain why IE₁(Na) < IE₁(Mg) but IE₁(Mg) > IE₁(Al)
- Explain evidence for subshells from successive ionisation energies
- Interpret TOF mass spectra
`,
  'alevel-chemistry-amount-substance': `
Section 3.1.2 Amount of Substance:

**Key Content:**
- Molar calculations: n = m/M, c = n/V, pV = nRT
- Empirical and molecular formulae from experimental data
- Reacting mass calculations, limiting reagent identification
- Percentage yield and atom economy
- Titration calculations

**Key Formulae:**
- n = m/Mr (moles from mass)
- n = c × V (moles from concentration, V in dm³)
- n = pV/RT (ideal gas equation)
- n = V/Vm (gas at RTP, Vm = 24 dm³)
- % yield = (actual/theoretical) × 100
- Atom economy = (Mr of desired product/Σ Mr all products) × 100

**Titration Process:**
1. Calculate moles of known solution
2. Use molar ratio from equation
3. Calculate concentration/mass of unknown

**Empirical Formula Method:**
1. Assume 100g sample, convert % to grams
2. Convert grams to moles (÷ Ar)
3. Divide all by smallest number
4. Multiply to get whole number ratio

**Limiting Reagent:**
- Calculate moles of each reactant
- Divide by coefficient in equation
- Smallest value = limiting reagent

AQA Common Questions:
- Multi-step calculations involving gases at non-RTP
- Back titrations
- Percentage yield in organic synthesis
- Atom economy comparison of reactions
`,
  'alevel-chemistry-bonding': `
Section 3.1.3 Bonding:

**Key Content:**
- Ionic, covalent, metallic bonding explained
- VSEPR theory and molecular shapes
- Electronegativity and bond polarity
- Intermolecular forces: London, dipole-dipole, hydrogen bonding

**Ionic Bonding:**
- Transfer of electrons from metal to non-metal
- Electrostatic attraction between oppositely charged ions
- Giant ionic lattice structure
- Properties: high mp, conducts when molten/dissolved, brittle

**Covalent Bonding:**
- Sharing of electron pairs between non-metals
- Single, double, triple bonds
- Dative (coordinate) covalent: both electrons from one atom

**VSEPR Shapes:**
| Bonding pairs | Lone pairs | Shape | Bond angle | Example |
|---------------|------------|-------|------------|---------|
| 2 | 0 | Linear | 180° | CO₂, BeCl₂ |
| 3 | 0 | Trigonal planar | 120° | BF₃, AlCl₃ |
| 3 | 1 | Trigonal pyramidal | 107° | NH₃, PCl₃ |
| 4 | 0 | Tetrahedral | 109.5° | CH₄, NH₄⁺ |
| 4 | 2 | Bent | 104.5° | H₂O |
| 6 | 0 | Octahedral | 90° | SF₆ |

**Intermolecular Forces (weakest to strongest):**
1. London forces (induced dipole-dipole): ALL molecules
2. Permanent dipole-dipole: polar molecules
3. Hydrogen bonding: H bonded to N, O, or F

**Metallic Bonding:**
- Positive metal ions in sea of delocalised electrons
- Properties: good conductors, malleable, ductile

AQA Common Questions:
- Predict shape and bond angle of species
- Explain differences in boiling points using IMFs
- Draw dot-and-cross diagrams
- Explain properties in terms of structure and bonding
`,
  'alevel-chemistry-energetics': `
Section 3.1.4 Energetics:

**Key Content:**
- Standard enthalpy changes: ΔcH, ΔfH, ΔneutH, ΔatH
- Hess's Law calculations
- Bond enthalpy calculations
- Calorimetry: q = mcΔT

**Standard Enthalpy Definitions:**
- ΔfH°: Formation of 1 mol compound from elements in standard states
- ΔcH°: Complete combustion of 1 mol substance
- ΔneutH°: Formation of 1 mol H₂O from neutralisation
- ΔatH°: Formation of 1 mol gaseous atoms from element

**Hess's Law Methods:**
- Via formation enthalpies: ΔrH = Σ ΔfH(products) - Σ ΔfH(reactants)
- Via combustion enthalpies: ΔrH = Σ ΔcH(reactants) - Σ ΔcH(products)
- Via bond enthalpies: ΔrH = Σ(bonds broken) - Σ(bonds formed)

**Calorimetry:**
- q = mcΔT (energy in J)
- c = 4.18 J g⁻¹ K⁻¹ for water
- ΔH = -q/n (enthalpy per mole)
- Negative for exothermic, positive for endothermic

AQA Common Questions:
- Draw Hess's Law cycles and calculate unknown enthalpy
- Calculate enthalpy of neutralisation from experimental data
- Explain why experimental values differ from theoretical
- Calculate enthalpy change from bond enthalpies
`,
  'alevel-chemistry-kinetics': `
Section 3.1.5 Kinetics:

**Key Content:**
- Collision theory and activation energy
- Maxwell-Boltzmann distribution
- Factors affecting rate explained using collision theory
- Measuring rates of reaction

**Collision Theory:**
For reaction to occur:
1. Particles must collide
2. With energy ≥ activation energy (Ea)
3. With correct orientation

**Maxwell-Boltzmann Distribution:**
- Shows distribution of molecular energies at temperature T
- Area under curve = total number of molecules
- Area beyond Ea = molecules with enough energy to react
- Higher T: peak shifts right and flattens, more molecules > Ea

**Effect of Factors on Rate:**
| Factor | Effect | Explanation |
|--------|--------|-------------|
| Temperature ↑ | Rate ↑ | More molecules have E ≥ Ea |
| Concentration ↑ | Rate ↑ | More frequent collisions |
| Pressure (gas) ↑ | Rate ↑ | More frequent collisions |
| Surface area ↑ | Rate ↑ | More collisions per unit time |
| Catalyst | Rate ↑ | Lower Ea, alternative pathway |

**Catalyst Effect:**
- Provides alternative reaction pathway
- Lower activation energy
- More molecules have E ≥ Ea at same temperature
- Not used up in reaction

AQA Common Questions:
- Label Maxwell-Boltzmann distributions
- Explain temperature effect on rate in terms of M-B distribution
- Explain catalyst effect using collision theory
- Describe methods for measuring rate
`,
  'alevel-chemistry-equilibria': `
Section 3.1.6 Chemical Equilibria:

**Key Content:**
- Dynamic equilibrium characteristics
- Le Chatelier's principle applications
- Kc expressions and calculations
- Industrial applications and compromise conditions

**Dynamic Equilibrium:**
- Rate of forward reaction = rate of backward reaction
- Concentrations remain constant (but not equal)
- Closed system
- Both reactions still occurring

**Le Chatelier's Principle:**
When a system at equilibrium is disturbed, it shifts to oppose the change.

| Change | Effect on Position | Effect on K |
|--------|-------------------|-------------|
| ↑ Concentration of reactant | Shifts right | No change |
| ↑ Pressure (fewer moles side) | Shifts to fewer moles | No change |
| ↑ Temperature (exothermic) | Shifts left | K decreases |
| ↑ Temperature (endothermic) | Shifts right | K increases |
| Catalyst | No change | No change |

**Kc Expression:**
For aA + bB ⇌ cC + dD:
Kc = [C]^c[D]^d / [A]^a[B]^b

**Industrial Compromise Conditions:**
- Haber Process (NH₃): 450°C, 200 atm, Fe catalyst
- Contact Process (H₂SO₄): 450°C, 1-2 atm, V₂O₅ catalyst
- Balance between yield, rate, and economics

AQA Common Questions:
- Predict effect of changing conditions on equilibrium
- Calculate Kc from equilibrium concentrations
- Explain industrial conditions using kinetics and equilibria
- Write Kc expressions for reactions
`,
  'alevel-chemistry-redox': `
Section 3.1.7 Oxidation, Reduction and Redox:
- Oxidation state rules and assignment
- Half-equations: balancing and combining
- Identifying oxidising and reducing agents
- Disproportionation reactions
AQA often tests: assigning oxidation states, writing half-equations
`,
  'alevel-chemistry-thermodynamics': `
Section 3.1.8 Thermodynamics (A2):
- Born-Haber cycles for ionic compounds
- Lattice enthalpy: comparing theoretical and experimental
- Enthalpy of solution and hydration
- Entropy and Gibbs free energy: ΔG = ΔH - TΔS
AQA often tests: Born-Haber calculations, predicting feasibility
`,
  'alevel-chemistry-rate-equations': `
Section 3.1.9 Rate Equations (A2):
- Rate = k[A]ᵐ[B]ⁿ, determining orders
- Initial rates method, continuous monitoring
- Arrhenius equation: ln k = ln A - Ea/RT
- Rate-determining step and mechanisms
AQA often tests: determining orders from data, activation energy from graphs
`,
  'alevel-chemistry-kp': `
Section 3.1.10 Equilibrium Constant Kp (A2):
- Partial pressures and mole fractions
- Writing Kp expressions
- Calculating Kp and partial pressures
AQA often tests: Kp calculations, effect of conditions on Kp
`,
  'alevel-chemistry-electrode-potentials': `
Section 3.1.11 Electrode Potentials (A2):
- Standard electrode potentials and SHE
- Electrochemical cells and cell EMF
- Predicting feasibility of reactions
- Fuel cells and storage cells
AQA often tests: calculating cell EMF, predicting reactions
`,
  'alevel-chemistry-acids-bases': `
Section 3.1.12 Acids and Bases (A2):
- Brønsted-Lowry theory, conjugate pairs
- pH calculations: strong acids, weak acids (Ka)
- Buffer solutions and Henderson-Hasselbalch
- Titration curves and indicator selection
AQA often tests: pH calculations, buffer calculations, titration curves
`,
  'alevel-chemistry-periodicity': `
Section 3.2.1 Periodicity:
- s, p, d, f block classification
- Periodic trends: atomic radius, ionisation energy, electronegativity
- Melting point trend in Period 3
AQA often tests: explaining trends using atomic structure
`,
  'alevel-chemistry-group2': `
Section 3.2.2 Group 2:
- Reactions with water and oxygen
- Trend in reactivity down group
- Solubility trends: hydroxides increase, sulfates decrease
- Uses of Group 2 compounds
AQA often tests: writing equations, explaining trends
`,
  'alevel-chemistry-group7': `
Section 3.2.3 Group 7:
- Trends in physical properties and reactivity
- Displacement reactions
- Disproportionation of chlorine
- Reactions of halide ions with H₂SO₄
- Silver nitrate test for halides
AQA often tests: displacement equations, halide reactions with H₂SO₄
`,
  'alevel-chemistry-period3': `
Section 3.2.4 Period 3 Elements and Oxides (A2):
- Reactions of Period 3 elements with oxygen
- Structures of Period 3 oxides
- Reactions of oxides with water
- Acid-base character of oxides
AQA often tests: equations for oxide reactions, explaining acid-base character
`,
  'alevel-chemistry-transition-metals': `
Section 3.2.5 Transition Metals (A2):
- Definition and properties of transition metals
- Complex ions: ligands, coordination number, shapes
- Colour in complexes and d-orbital splitting
- Ligand exchange reactions
- Vanadium chemistry: V⁵⁺ to V²⁺
- Reactions of aqueous ions with NaOH and NH₃
AQA often tests: complex ion formulae, explaining colours, precipitation reactions
`,
  'alevel-chemistry-ions-aqueous': `
Section 3.2.6 Reactions of Ions in Aqueous Solution (A2):
- Tests for metal cations (flame tests, precipitates)
- Tests for anions
- Redox titrations with manganate(VII)
AQA often tests: identifying ions, titration calculations
`,
  'alevel-chemistry-organic-intro': `
Section 3.3.1 Introduction to Organic Chemistry:
- IUPAC nomenclature
- Structural, displayed and skeletal formulae
- Isomerism: structural and E/Z
- Reaction mechanisms: curly arrows, nucleophiles, electrophiles
AQA often tests: naming compounds, drawing isomers, mechanism basics
`,
  'alevel-chemistry-alkanes': `
Section 3.3.2 Alkanes:
- Combustion (complete and incomplete)
- Fractional distillation of crude oil
- Cracking: thermal and catalytic
- Free radical substitution mechanism
AQA often tests: free radical mechanism, cracking equations
`,
  'alevel-chemistry-halogenoalkanes': `
Section 3.3.3 Halogenoalkanes:
- Nucleophilic substitution with OH⁻, CN⁻, NH₃
- Elimination with ethanolic KOH
- Rates of hydrolysis (C-X bond strength)
- CFCs and ozone depletion
AQA often tests: mechanisms, comparing rates of hydrolysis
`,
  'alevel-chemistry-alkenes': `
Section 3.3.4 Alkenes:
- Electrophilic addition mechanism
- Reactions: H₂, halogens, hydrogen halides, water
- Markovnikov's rule
- Addition polymerisation
AQA often tests: electrophilic addition mechanisms, predicting products
`,
  'alevel-chemistry-alcohols': `
Section 3.3.5 Alcohols:
- Classification: primary, secondary, tertiary
- Oxidation reactions with acidified dichromate
- Elimination (dehydration) to alkenes
- Fermentation vs hydration of ethene
AQA often tests: oxidation products, distinguishing alcohol types
`,
  'alevel-chemistry-organic-analysis': `
Section 3.3.6 Organic Analysis:
- Test-tube reactions for functional groups
- Infrared spectroscopy: characteristic absorptions
AQA often tests: identifying functional groups from IR, test results
`,
  'alevel-chemistry-optical-isomerism': `
Section 3.3.7 Optical Isomerism (A2):
- Chiral centres and asymmetric carbon atoms
- Enantiomers and their properties
- Optical activity and racemic mixtures
AQA often tests: identifying chiral centres, explaining optical activity
`,
  'alevel-chemistry-aldehydes-ketones': `
Section 3.3.8 Aldehydes and Ketones (A2):
- Oxidation of aldehydes (Tollens', Fehling's)
- Reduction with NaBH₄
- Nucleophilic addition mechanism with HCN
AQA often tests: distinguishing aldehydes/ketones, nucleophilic addition mechanism
`,
  'alevel-chemistry-carboxylic-acids': `
Section 3.3.9 Carboxylic Acids and Derivatives (A2):
- Reactions of carboxylic acids
- Ester formation and hydrolysis
- Acyl chloride reactions and mechanism
AQA often tests: ester equations, acyl chloride mechanisms
`,
  'alevel-chemistry-aromatics': `
Section 3.3.10 Aromatic Chemistry (A2):
- Benzene structure and stability
- Electrophilic substitution mechanisms
- Nitration, Friedel-Crafts acylation/alkylation
AQA often tests: electrophilic substitution mechanisms, explaining benzene stability
`,
  'alevel-chemistry-amines': `
Section 3.3.11 Amines (A2):
- Preparation of amines
- Basicity of amines (comparing aliphatic, aromatic, ammonia)
- Reactions of amines
AQA often tests: comparing basicity, preparation routes
`,
  'alevel-chemistry-polymers': `
Section 3.3.12 Polymers (A2):
- Condensation polymerisation
- Polyesters and polyamides
- Drawing repeat units
- Biodegradability
AQA often tests: drawing polymer structures, identifying monomers
`,
  'alevel-chemistry-amino-acids': `
Section 3.3.13 Amino Acids, Proteins and DNA (A2):
- Amino acid structure and zwitterions
- Peptide bond formation
- Protein structure levels
AQA often tests: drawing peptides, explaining protein structures
`,
  'alevel-chemistry-organic-synthesis': `
Section 3.3.14 Organic Synthesis (A2):
- Planning synthetic routes
- Retrosynthetic analysis
- Practical techniques
AQA often tests: planning multi-step syntheses
`,
  'alevel-chemistry-nmr': `
Section 3.3.15 NMR Spectroscopy (A2):
- Chemical shift and environments
- Integration and peak ratios
- Spin-spin coupling (n+1 rule)
- Interpreting spectra for structure determination
AQA often tests: interpreting NMR spectra, combined spectroscopy problems
`,
  'alevel-chemistry-chromatography': `
Section 3.3.16 Chromatography (A2):
- TLC and Rf values
- Column chromatography
- Gas chromatography and GC-MS
AQA often tests: Rf calculations, interpreting chromatograms
`,
};

// ============================================================================
// PROMPT FUNCTIONS
// ============================================================================

// Standard compact prompt for most questions
export function getAQAALevelChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  const difficultyGuide = {
    easy: 'AS standard, 2-3 marks, single concept, direct recall or straightforward application',
    medium: 'Full A-Level, 4-5 marks, combines multiple concepts, multi-step reasoning required',
    hard: 'Challenging A-Level, 6-8 marks, synoptic thinking across topics, unfamiliar contexts, requires extended analysis, evaluation or synthesis'
  };

  return `Generate an AQA A-Level Chemistry question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${AQA_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE}
${topicGuidance}

${AQA_ALEVEL_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Paper: ${topic.paperRestriction || 'Not specified'}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA A-Level Chemistry specification.

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

Requirements:
- Match AQA A-Level exam style and command words
- Use appropriate chemical terminology
- Include realistic chemistry context
- Provide clear mark allocation
- Show all working in solution
- Include units where appropriate

${varietyInstructions}

Respond with JSON:
{
  "content": "Question text with parts labelled (a), (b), (c) etc if needed",
  "solution": "Complete worked solution with all steps",
  "marks": <total marks as number>,
  "markScheme": "Point-by-point mark allocation",
  "diagram": <optional DiagramSpec - include when question has stimulus diagram shown WITH the question>,
  "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>
}

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('chemistry')}`;
}

// Enhanced prompt with all reference data
export function getAQAALevelChemistryEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `
${varietyInstructions}

Generate a detailed AQA A-Level Chemistry question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${AQA_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE}
${topicGuidance}

## Reference Data (USE FOR ACCURATE CALCULATIONS)
${AQA_ALEVEL_CHEMISTRY_DATA_SHEET}

${AQA_ALEVEL_CHEMISTRY_FORMULAE}

## Worked Example Patterns
${AQA_ALEVEL_CHEMISTRY_WORKED_EXAMPLES}

Topic: ${topic.name}
Subtopic: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Create a question that:
- Uses authentic AQA A-Level command words
- Tests deep understanding, not just recall
- Includes appropriate chemistry context
- Has clear, unambiguous wording
- Is appropriately challenging for ${difficulty} level
- Could appear on ${topic.paperRestriction || 'any paper'}
- Uses correct constants and values from reference data

Respond with JSON:
{
  "content": "Full question text",
  "solution": "Detailed worked solution with explanations",
  "marks": <total marks>,
  "markScheme": "Detailed mark scheme"
}`;
}

// Extended response (6-mark) questions
export function getAQAALevelChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `Generate a 6-mark extended response AQA A-Level Chemistry question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

${varietyInstructions}

AQA 6-mark extended response questions:
- Require detailed, structured answers
- Test ability to construct scientific arguments
- May ask to explain, evaluate, discuss, or compare
- Marked using level descriptors (0, 1-2, 3-4, 5-6)

Level Descriptors:
- Level 3 (5-6 marks): Detailed, coherent, well-structured, accurate chemistry
- Level 2 (3-4 marks): Mostly accurate, some structure, may lack detail
- Level 1 (1-2 marks): Basic points, limited structure, some inaccuracies

Respond with JSON:
{
  "content": "Question text (clearly requiring extended response)",
  "solution": "Model answer demonstrating Level 3 response",
  "marks": 6,
  "markScheme": "Level-based descriptors with indicative content"
}`;
}

// Calculation questions
export function getAQAALevelChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry calculation question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${AQA_ALEVEL_CHEMISTRY_DATA_SHEET}
${AQA_ALEVEL_CHEMISTRY_FORMULAE}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Calculation Requirements:
- Provide all necessary data with appropriate precision
- Use realistic chemistry values
- ${difficulty === 'easy' ? 'Single-step calculation' : difficulty === 'medium' ? 'Multi-step calculation' : 'Complex multi-step with unit conversions'}
- Require proper units in answer
- Solution must show clear working

Mark Allocation for Calculations:
- 1 mark: Correct equation/formula
- 1 mark: Correct substitution
- 1 mark: Correct answer with units

Respond with JSON:
{
  "content": "Calculation question with all data provided",
  "solution": "Step-by-step working with equations",
  "marks": <3-6 marks>,
  "markScheme": "Equation [1], Substitution [1], Answer [1], etc."
}`;
}

// Explain/describe questions
export function getAQAALevelChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry explanation question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Explanation Question Types:
- "Explain why..." (give chemical reasons)
- "Describe how..." (account of process)
- "Explain how..." (reasons and process)
- "Discuss..." (present arguments)

${difficulty === 'easy' ? 'Require 2-3 marks of explanation' : difficulty === 'medium' ? 'Require 3-4 marks of explanation' : 'Require 4-6 marks of detailed explanation'}

Respond with JSON:
{
  "content": "Explain/Describe question",
  "solution": "Full explanation with all marking points",
  "marks": <2-6>,
  "markScheme": "Point 1 [1]\\nPoint 2 [1]\\netc."
}`;
}

// Graph/data analysis questions
export function getAQAALevelChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry graph or data analysis question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Graph/Data Analysis Types:
- Rate-concentration graphs
- pH curves
- Enthalpy diagrams/cycles
- Arrhenius plots
- Maxwell-Boltzmann distributions
- NMR/IR/Mass spectra interpretation

Question should include:
- Clear data description or graph
- Specific questions about the data
- ${difficulty === 'hard' ? 'Gradient calculations, uncertainty analysis' : 'Key features and interpretation'}

Respond with JSON:
{
  "content": "Data/graph description followed by questions",
  "solution": "How to analyse the data with answers",
  "marks": <3-6>,
  "markScheme": "Reading [1], Calculation [1-2], Interpretation [1-2]"
}`;
}

// Compare/contrast questions
export function getAQAALevelChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry comparison question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Comparison Guidelines:
- Use "Compare", "Compare and contrast"
- Require at least one similarity AND one difference
- Points should be paired/linked
- Technical chemistry terminology required

${difficulty === 'easy' ? '2-3 marks: basic comparison' : difficulty === 'medium' ? '3-4 marks: detailed comparison' : '4-6 marks: comprehensive comparison with explanations'}

Respond with JSON:
{
  "content": "Compare question",
  "solution": "Structured comparison with similarities and differences",
  "marks": <2-6>,
  "markScheme": "Similarity [1], Difference 1 [1], etc."
}`;
}

// Mechanism questions (organic chemistry)
export function getAQAALevelChemistryMechanismPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry mechanism question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Mechanism Requirements (AQA Specific):
- Show curly arrows correctly
- Show all species including intermediates
- Show formal charges where appropriate
- Use correct terminology (nucleophile, electrophile, carbocation)

Common A-Level Mechanisms:
- Free radical substitution (alkanes)
- Nucleophilic substitution (halogenoalkanes)
- Elimination (halogenoalkanes)
- Electrophilic addition (alkenes)
- Nucleophilic addition (aldehydes/ketones with HCN)
- Electrophilic substitution (benzene)
- Addition-elimination (acyl chlorides)

Respond with JSON:
{
  "content": "Mechanism question with context",
  "solution": "Full mechanism with all steps, curly arrows, charges",
  "marks": <3-5>,
  "markScheme": "Step 1 [1], Curly arrows [1], Intermediate [1], etc."
}`;
}

// Practical/experimental questions
export function getAQAALevelChemistryPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an AQA A-Level Chemistry practical/experimental question.
${AQA_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${AQA_ALEVEL_CHEMISTRY_REQUIRED_PRACTICALS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Practical Skills Assessed:
- Planning investigations
- Apparatus selection and use
- Making accurate measurements
- Recording and processing data
- Drawing conclusions
- Evaluating procedures

Question Types:
- Describe experimental method
- Analyse given experimental data
- Evaluate experimental procedures
- Suggest improvements
- Explain sources of error

Respond with JSON:
{
  "content": "Practical/experimental question",
  "solution": "Complete answer addressing practical skills",
  "marks": <3-6>,
  "markScheme": "Method [1-2], Analysis [1-2], Evaluation [1-2]"
}`;
}
