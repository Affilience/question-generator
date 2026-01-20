// Edexcel A-Level Chemistry (9CH0) Question Generation Prompts
// Tailored to Pearson Edexcel specification style and assessment objectives
//
// Sources:
// - https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/chemistry-2015.html
// - Official specification and past papers 2019-2024

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

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

const EDEXCEL_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE = `
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
// EDEXCEL A-LEVEL CHEMISTRY ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const EDEXCEL_ALEVEL_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Chemistry Assessment Objectives (9CH0)

### AO1: Demonstrate Knowledge and Understanding (25-30%)
Demonstrate knowledge and understanding of:
- Scientific ideas
- Scientific processes and procedures
- Scientific techniques

**AO1 Question Characteristics:**
- "State", "Define", "Name", "Write", "Give" command words
- Recall of definitions, laws, principles
- Drawing structures (displayed, skeletal, 3D)
- Writing balanced equations with state symbols
- Naming compounds using IUPAC nomenclature
- Describing standard procedures

**AO1 Mark Allocation:**
- Typically 1-2 marks per point
- No explanation required for "state" questions
- Precision in definitions is essential

### AO2: Apply Knowledge and Understanding (40-45%)
Apply knowledge and understanding of:
- Scientific ideas
- Scientific processes, procedures and techniques
- In a theoretical context
- In a practical context
- When handling qualitative data
- When handling quantitative data

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Show that", "Explain" commands
- Using equations in multi-step calculations
- Applying concepts to new/unfamiliar contexts
- Analysing graphs, spectra, and data tables
- Making predictions based on chemical principles
- Planning investigations

**AO2 Mark Allocation:**
- Calculation marks: equation [1], substitution [1], answer with units [1]
- "Explain" marks: cause [1], effect [1], link to chemistry [1]

### AO3: Analyse, Interpret and Evaluate (25-30%)
Analyse, interpret and evaluate:
- Scientific information
- Ideas and evidence
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Discuss", "Comment on" commands
- Drawing conclusions from experimental data
- Identifying and explaining sources of error
- Suggesting improvements to experiments
- Evaluating scientific claims and arguments
- Assessing validity of conclusions

**AO3 Mark Allocation:**
- Evaluation: advantage [1], disadvantage [1], reasoned conclusion [1]
- Data analysis: pattern identification [1], explanation [1]
- Error analysis: source [1], effect [1], improvement [1]

### Assessment Weighting by Paper
| Paper | AO1 | AO2 | AO3 |
|-------|-----|-----|-----|
| Paper 1 | 30% | 45% | 25% |
| Paper 2 | 30% | 45% | 25% |
| Paper 3 | 20% | 40% | 40% |
| **Overall** | **25-30%** | **40-45%** | **25-30%** |
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY PAPER STRUCTURE
// ============================================================================

const EDEXCEL_ALEVEL_CHEMISTRY_PAPER_STRUCTURE = `
## Edexcel A-Level Chemistry Paper Structure (9CH0)

### Paper 1: Advanced Inorganic and Physical Chemistry (9CH0/01)
**Duration:** 1 hour 45 minutes
**Total Marks:** 90 (30% of qualification)
**Question Types:**
- Section A: 20 multiple choice questions (20 marks)
- Section B: Short answer and extended response questions (70 marks)

**Content Coverage:**
| Topic | Title |
|-------|-------|
| 1 | Atomic Structure and the Periodic Table |
| 2 | Bonding and Structure (selected content) |
| 3 | Redox I |
| 4 | Inorganic Chemistry and the Periodic Table |
| 5 | Formulae, Equations and Amounts of Substance |
| 8 | Energetics I |
| 10 | Equilibrium I |
| 11 | Equilibrium II |
| 12 | Acid-Base Equilibria |
| 13 | Energetics II |
| 14 | Redox II |
| 15 | Transition Metals |

**Paper 1 Characteristics:**
- Focus on inorganic trends and patterns
- Physical chemistry calculations prominent
- Born-Haber cycles and lattice enthalpies
- Electrode potentials and cell EMF
- pH and buffer calculations
- Equilibrium constant calculations (Kc and Kp)

### Paper 2: Advanced Organic and Physical Chemistry (9CH0/02)
**Duration:** 1 hour 45 minutes
**Total Marks:** 90 (30% of qualification)
**Question Types:**
- Section A: 20 multiple choice questions (20 marks)
- Section B: Short answer and extended response questions (70 marks)

**Content Coverage:**
| Topic | Title |
|-------|-------|
| 2 | Bonding and Structure (selected content) |
| 3 | Redox I (selected content) |
| 5 | Formulae, Equations and Amounts of Substance |
| 6 | Organic Chemistry I |
| 7 | Modern Analytical Techniques I |
| 9 | Kinetics I |
| 16 | Kinetics II |
| 17 | Organic Chemistry II |
| 18 | Organic Chemistry III |
| 19 | Modern Analytical Techniques II |

**Paper 2 Characteristics:**
- Organic synthesis routes and reaction pathways
- Mechanism questions with curly arrows
- NMR, IR, and mass spectrometry interpretation
- Combined spectroscopy problems
- Rate equations and orders of reaction
- Arrhenius equation calculations

### Paper 3: General and Practical Principles in Chemistry (9CH0/03)
**Duration:** 2 hours 30 minutes
**Total Marks:** 120 (40% of qualification)
**Question Types:**
- All questions are short answer and extended response
- No multiple choice

**Content Coverage:**
- ALL 19 topics from the specification
- All 16 Core Practicals may be assessed
- Synoptic questions linking multiple topics
- Extended response questions (6 marks)

**Paper 3 Characteristics:**
- 40% of marks assess experimental methods and data analysis
- Synoptic questions require linking concepts across topics
- Extended calculations are common
- Context-based questions using real-world scenarios
- May include pre-release material questions
- Strong emphasis on practical skills

### Mathematical Requirements
- **Minimum 20%** of marks require mathematical skills
- Use of standard form and significant figures
- Rearranging and solving equations
- Plotting and interpreting graphs
- Calculating gradients and intercepts
- Using logarithms (pH, rate equations, Arrhenius)
- Statistical analysis of data

### Quality of Extended Response (QER)
Extended response questions (typically 6 marks) are marked using level descriptors:
- **Level 3 (5-6 marks):** Detailed, coherent, well-organised, accurate chemistry, appropriate terminology
- **Level 2 (3-4 marks):** Mostly accurate, some structure, may lack detail in places
- **Level 1 (1-2 marks):** Basic relevant points, limited structure, some inaccuracies
- **Level 0 (0 marks):** No relevant content
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY COMMAND WORDS (COMPREHENSIVE)
// ============================================================================

const EDEXCEL_ALEVEL_CHEMISTRY_COMMAND_WORDS = `
## Edexcel A-Level Chemistry Command Words

### Calculation Commands
| Command | Definition | Marking Notes |
|---------|-----------|---------------|
| **Calculate** | Use numbers to work out a numerical answer | Must show working; include units; 2-3 s.f. typically |
| **Determine** | Use given data to find an answer | May involve graph reading, measurement or calculation |
| **Show that** | Prove a given value is correct | Quote to 1 more s.f. than given value |
| **Estimate** | Give an approximate value using sensible assumptions | State assumptions; accept range of answers |
| **Deduce** | Use the information to reach a conclusion | May not require calculation |

### Knowledge Commands
| Command | Definition | Marking Notes |
|---------|-----------|---------------|
| **State** | Give a brief answer with no explanation | Typically 1 mark; concise answer required |
| **Define** | Give the precise meaning of a term | Use exact specification definition |
| **Name** | Give the correct chemical name | IUPAC nomenclature required |
| **Identify** | Recognise or pick out | May involve analysis of data |
| **Write** | Produce an equation, formula, or expression | Balance equations; include state symbols if asked |
| **Give** | Provide a piece of information | Short, specific answer |

### Description Commands
| Command | Definition | Marking Notes |
|---------|-----------|---------------|
| **Describe** | Give an account of key features | May be a process, trend, or observations |
| **Outline** | Set out main features or key points | Less detail than "describe"; key steps only |
| **Sketch** | Draw approximately, showing key features | Doesn't need to be to scale; labels important |
| **Draw** | Produce an accurate diagram or structure | Use correct conventions; full structure required |

### Explanation Commands
| Command | Definition | Marking Notes |
|---------|-----------|---------------|
| **Explain** | Give reasons for or causes of | Link cause and effect; use "because" |
| **Suggest** | Apply knowledge to unfamiliar context | Multiple valid answers possible |
| **Account for** | Explain why something happens | Similar to "explain" but often with data |
| **Justify** | Give reasons to support a conclusion | Use evidence to support answer |
| **Predict** | Give an expected result using knowledge | Based on trends, patterns, or theory |

### Analysis Commands
| Command | Definition | Marking Notes |
|---------|-----------|---------------|
| **Analyse** | Examine data and identify patterns | Quote specific values from data |
| **Compare** | Identify similarities AND differences | Must include both unless "contrast" used |
| **Distinguish** | State differences between | Focus on key distinguishing features |
| **Evaluate** | Judge advantages and disadvantages | Reach a reasoned conclusion |
| **Discuss** | Consider different aspects of a topic | Extended response; multiple viewpoints |
| **Comment on** | Give a view based on the information | May require judgement or opinion |
| **Assess** | Weigh up the relative importance | Similar to "evaluate" |

### Example Command Word Usage

**Calculate Example:**
"Calculate the pH of a 0.10 mol dm⁻³ solution of ethanoic acid (Ka = 1.8 × 10⁻⁵ mol dm⁻³)."
- Requires: equation, substitution, numerical answer with appropriate s.f.

**Explain Example:**
"Explain why the first ionisation energy of magnesium is higher than that of sodium."
- Requires: comparative statement with chemical reasoning

**Evaluate Example:**
"Evaluate the use of hydrogen as a fuel for vehicles."
- Requires: advantages, disadvantages, and a conclusion

**Suggest Example:**
"The rate of reaction increases when the temperature is raised. Suggest a reason for this observation in terms of collision theory."
- Requires: application of collision theory to explain observation
`;

const EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES = `
${EDEXCEL_ALEVEL_CHEMISTRY_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_CHEMISTRY_PAPER_STRUCTURE}

${EDEXCEL_ALEVEL_CHEMISTRY_COMMAND_WORDS}

## Edexcel Mark Scheme Conventions

### General Marking Principles
- **Working must be shown** for calculation questions
- **Units required** in final answer unless stated otherwise
- **2-3 significant figures** typically expected (match data precision)
- **Accept equivalent correct answers** (alternative correct chemistry)
- **Ignore incorrect additional material** unless contradictory
- **State symbols** only required if specifically asked

### Calculation Marking
- Award marks for correct method even with arithmetic error (ECF - Error Carried Forward)
- Units: penalise once per question (not per part)
- Significant figures: only penalise if clearly excessive or insufficient

### Mechanism Marking
- Curly arrows must start from bond or lone pair
- Curly arrows must point to atom or bond being formed
- Charges and lone pairs must be shown where necessary
- Intermediates must be drawn correctly
- Each correct step typically worth 1 mark

### Extended Response Marking (QER)
- Mark holistically against level descriptors
- Consider quality of chemistry, structure, and coherence
- Indicative content is a guide, not a checklist

**Edexcel-Specific Characteristics (vs AQA/OCR):**
- 16 Core Practicals integrated across all topics
- Paper 1: Topics 1-5, 8, 10, 11-15 (Inorganic + Physical)
- Paper 2: Topics 2, 3, 5, 6, 7, 9, 16-19 (Organic + Physical)
- Paper 3: Synoptic, all 19 topics, 40% practical focus
- Strong emphasis on context-based questions
- Multiple choice in Paper 1 and Paper 2 (20 questions each)
- Extended calculations common
- Combined spectroscopy problems in Paper 2 and Paper 3

### Multi-Method Questions: Equal Credit for Valid Approaches

Chemistry calculations often have multiple valid solution paths. Award full marks for ANY correct method.

**Example 1: Enthalpy change via Hess's Law**
Accept both:
- Algebraic manipulation of given equations
- Energy cycle diagram with correct route

**Example 2: Concentration/pH calculations**
Accept both:
- Direct Ka expression with simplifying assumption
- Full quadratic solution without assumption

**Example 3: Electrode potential calculations**
Accept both:
- E°cell = E°(cathode) - E°(anode)
- E°cell = E°(reduction, RHS) - E°(reduction, LHS)

**Example 4: Organic structure determination**
Accept any valid combination of spectroscopic data interpretation that leads to correct structure.

**Example 5: Equilibrium constant calculations**
Accept:
- ICE table method
- Stoichiometric ratio method
- Direct substitution where appropriate
`;

const EDEXCEL_CHEMISTRY_CORE_PRACTICALS = `
## Edexcel A-Level Chemistry Core Practicals (16)

Edexcel has 16 Core Practicals integrated across the specification. Questions on these
can appear in any paper but are particularly prominent in Paper 3 (40% practical focus).

### Year 1 (AS) Core Practicals

---

**CP1: Measuring the Molar Volume of a Gas**
*Topic 5: Formulae, Equations and Amounts*

**Aim:** Determine the molar volume of a gas at room temperature and pressure (RTP)

**Method:**
1. Weigh a sample of magnesium ribbon accurately (e.g., 0.02-0.03 g)
2. Add excess dilute HCl to a gas syringe apparatus
3. Add magnesium, seal apparatus immediately
4. Record volume of hydrogen gas produced when reaction complete
5. Record room temperature and pressure
6. Repeat for reliability

**Key Equations:**
- Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)
- n(Mg) = m/M = m/24.3
- n(H₂) = n(Mg) (1:1 ratio)
- Molar volume = V/n

**Sources of Error:**
- Gas escapes before sealing apparatus
- Magnesium oxide on surface reduces pure Mg mass
- Temperature/pressure variation during experiment
- Gas dissolving in acid

**Expected Result:** ~24.0 dm³ mol⁻¹ at RTP (298 K, 101 kPa)

**Typical Exam Questions:**
- Calculate molar volume from experimental data
- Explain why experimental value differs from theoretical
- Suggest improvements to reduce uncertainty

---

**CP2: Preparation of a Standard Solution from a Solid Acid**
*Topic 5: Formulae, Equations and Amounts*

**Aim:** Prepare a 250 cm³ standard solution of known concentration from a solid

**Method:**
1. Calculate mass of solid required: m = n × M = (c × V) × M
2. Weigh solid accurately on balance (to ±0.001 g if possible)
3. Dissolve in small volume of distilled water in beaker
4. Transfer quantitatively to volumetric flask using wash bottle
5. Rinse all equipment and add washings to flask
6. Add distilled water to just below the mark
7. Use dropping pipette to make up to exactly 250 cm³ mark
8. Stopper and invert several times to mix

**Key Points:**
- Use distilled water (not tap water)
- Read meniscus at eye level
- Bottom of meniscus should touch calibration line
- Temperature affects volume - work at room temperature

**Common Solids Used:**
- Anhydrous sodium carbonate (Na₂CO₃), M = 106.0 g mol⁻¹
- Potassium hydrogen phthalate (C₈H₅KO₄), M = 204.2 g mol⁻¹

**Sources of Error:**
- Solid left on balance pan or beaker
- Not all solid transferred to flask
- Parallax error when reading meniscus
- Temperature variation affecting volume

---

**CP3: Finding the Concentration of a Solution of HCl by Titration**
*Topic 5: Formulae, Equations and Amounts*

**Aim:** Determine the unknown concentration of HCl using a standard solution

**Method:**
1. Use pipette filler to transfer exactly 25.00 cm³ of standard Na₂CO₃ to conical flask
2. Add 2-3 drops of methyl orange indicator
3. Fill burette with HCl (reading to ±0.05 cm³)
4. Titrate HCl into flask, swirling continuously
5. Stop when indicator changes from yellow to orange/red
6. Record final burette reading
7. Repeat until concordant titres (within 0.10 cm³)

**Key Equation:**
- Na₂CO₃(aq) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)

**Calculations:**
- n(Na₂CO₃) = c × V = c × 0.025 dm³
- n(HCl) = 2 × n(Na₂CO₃) (2:1 ratio)
- c(HCl) = n(HCl) / V(HCl)

**Indicator Choice:**
- Methyl orange: yellow → orange → red (pH 3.1-4.4)
- Strong acid + weak base: use methyl orange
- Weak acid + strong base: use phenolphthalein

**Sources of Error:**
- Burette not vertical
- Air bubbles in burette
- Not swirling during titration
- Overshooting end point

---

**CP4: Investigation of Rates of Hydrolysis of Halogenoalkanes**
*Topic 6: Organic Chemistry I*

**Aim:** Compare rates of hydrolysis of primary halogenoalkanes with different halogens

**Method:**
1. Place 2 cm³ of ethanol in 4 test tubes in water bath at 50°C
2. Add 2 drops of each halogenoalkane (1-chlorobutane, 1-bromobutane, 1-iodobutane)
3. Add 1 cm³ of aqueous silver nitrate to each tube simultaneously
4. Start timer and record time for precipitate to appear
5. Note colour of precipitate

**Key Equation:**
- C₄H₉X + H₂O → C₄H₉OH + H⁺ + X⁻
- Ag⁺(aq) + X⁻(aq) → AgX(s)

**Expected Results:**
| Halogenoalkane | Precipitate | Time | Bond Enthalpy |
|----------------|-------------|------|---------------|
| 1-iodobutane | Yellow (AgI) | Fastest | C-I weakest (238 kJ mol⁻¹) |
| 1-bromobutane | Cream (AgBr) | Medium | C-Br (276 kJ mol⁻¹) |
| 1-chlorobutane | White (AgCl) | Slowest | C-Cl strongest (338 kJ mol⁻¹) |

**Explanation:**
- Rate depends on bond strength (not electronegativity)
- Weaker C-X bond = faster hydrolysis
- C-I bond is weakest, so 1-iodobutane reacts fastest

---

**CP5: The Oxidation of Ethanol**
*Topic 6: Organic Chemistry I*

**Aim:** Oxidise ethanol to ethanal (partial) and ethanoic acid (complete)

**Method for Ethanal (Distillation):**
1. Add acidified potassium dichromate(VI) to round-bottomed flask
2. Heat gently with anti-bumping granules
3. Add ethanol dropwise while heating
4. Distil off ethanal as it forms (b.p. 21°C)
5. Collect distillate in ice-cold receiver

**Method for Ethanoic Acid (Reflux):**
1. Add acidified potassium dichromate(VI) and ethanol to flask
2. Heat under reflux for 20 minutes
3. Allow to cool, then distil to collect ethanoic acid

**Key Equations:**
- Partial oxidation: CH₃CH₂OH + [O] → CH₃CHO + H₂O
- Complete oxidation: CH₃CH₂OH + 2[O] → CH₃COOH + H₂O

**Observations:**
- Dichromate changes from orange to green (Cr³⁺)
- Ethanal has characteristic pungent smell
- Ethanoic acid has vinegar smell

**Testing Products:**
- Ethanal: positive Tollens' test (silver mirror), positive Fehling's (red ppt)
- Ethanoic acid: turns blue litmus red, reacts with carbonates (fizzing)

---

**CP6: Chlorination of 2-Methylpropan-2-ol**
*Topic 6: Organic Chemistry I*

**Aim:** Prepare 2-chloro-2-methylpropane from a tertiary alcohol

**Method:**
1. Measure 10 cm³ of 2-methylpropan-2-ol in measuring cylinder
2. Place in separating funnel
3. Add 25 cm³ of concentrated HCl carefully
4. Shake funnel with venting every 30 seconds
5. Allow layers to separate - organic layer floats on top
6. Run off aqueous layer (bottom)
7. Wash organic layer with sodium hydrogencarbonate solution
8. Dry with anhydrous sodium sulfate
9. Distil product (b.p. 51°C)

**Key Equation:**
- (CH₃)₃COH + HCl → (CH₃)₃CCl + H₂O

**Mechanism:** SN1 (via tertiary carbocation intermediate)

**Why Tertiary Works Best:**
- Tertiary carbocation is most stable (3 alkyl groups donate electrons)
- Primary/secondary alcohols need different reagents (SOCl₂, PCl₅)

**Safety:**
- Concentrated HCl is corrosive
- Work in fume cupboard
- 2-chloro-2-methylpropane is flammable and volatile

---

**CP7: Analysis of Inorganic and Organic Unknowns**
*Topic 4 & 7: Inorganic Chemistry / Analytical Techniques*

**Inorganic Tests:**

| Test | Method | Positive Result | Ion Identified |
|------|--------|-----------------|----------------|
| Flame test | Nichrome wire in flame | Lilac | K⁺ |
| Flame test | Nichrome wire in flame | Yellow | Na⁺ |
| Flame test | Nichrome wire in flame | Red | Li⁺, Ca²⁺ |
| Flame test | Nichrome wire in flame | Green | Cu²⁺, Ba²⁺ |
| NaOH (aq) | Add drops | White ppt | Al³⁺, Mg²⁺ |
| Excess NaOH | Add excess | Ppt dissolves | Al³⁺ (not Mg²⁺) |
| NH₃ (aq) | Add drops | Blue solution | Cu²⁺ |
| HNO₃ then AgNO₃ | Add acid first | White ppt | Cl⁻ |
| HNO₃ then AgNO₃ | Add acid first | Cream ppt | Br⁻ |
| HNO₃ then AgNO₃ | Add acid first | Yellow ppt | I⁻ |
| HNO₃ then BaCl₂ | Add acid first | White ppt | SO₄²⁻ |
| HCl | Add acid | Fizzing | CO₃²⁻ |

**Organic Tests:**
| Functional Group | Test | Positive Result |
|-----------------|------|-----------------|
| Alkene (C=C) | Bromine water | Orange → colourless |
| Aldehyde | Tollens' reagent | Silver mirror |
| Aldehyde | Fehling's solution | Red precipitate |
| Carboxylic acid | NaHCO₃ | Fizzing (CO₂) |
| Alcohol (1° or 2°) | K₂Cr₂O₇/H⁺ | Orange → green |

---

**CP8: Determining Enthalpy Change Using Hess's Law**
*Topic 8: Energetics I*

**Aim:** Determine ΔH for a reaction that cannot be measured directly

**Example:** Finding ΔH of formation of MgO
Using: Mg(s) + HCl(aq) → MgCl₂(aq) + H₂(g) ΔH₁
And: MgO(s) + HCl(aq) → MgCl₂(aq) + H₂O(l) ΔH₂

**Method:**
1. Measure 50 cm³ of 2M HCl in polystyrene cup
2. Record initial temperature every 30 seconds for 2 minutes
3. Add weighed sample of Mg (or MgO) at exactly 2 minutes
4. Stir and record temperature every 30 seconds for 5 minutes
5. Plot cooling curve and extrapolate to find ΔT
6. Calculate: q = mcΔT (assume c = 4.18 J g⁻¹ K⁻¹)
7. Convert to ΔH per mole

**Hess Cycle:**
\`\`\`
Mg(s) + ½O₂(g) -------ΔHf-----→ MgO(s)
    ↓ +2HCl               +2HCl ↓
    ΔH₁                        ΔH₂
    ↓                          ↓
MgCl₂(aq) + H₂(g) ←------- MgCl₂(aq) + H₂O(l)
\`\`\`

ΔHf = ΔH₁ - ΔH₂

**Sources of Error:**
- Heat loss to surroundings (main source)
- Heat capacity of apparatus ignored
- Incomplete reaction
- Density assumed to be 1 g cm⁻³

---

### Year 2 (A2) Core Practicals

---

**CP9: Finding Ka Value for a Weak Acid**
*Topic 12: Acid-Base Equilibria*

**Aim:** Determine Ka of a weak acid using pH measurements

**Method 1: pH of Known Concentration**
1. Prepare solutions of weak acid at different concentrations
2. Measure pH of each solution using calibrated pH meter
3. Calculate [H⁺] = 10⁻ᵖᴴ
4. Use Ka = [H⁺]²/[HA] (assuming [H⁺] << [HA])

**Method 2: Half-Neutralisation**
1. Titrate weak acid with strong base, measuring pH throughout
2. At half-equivalence point: [HA] = [A⁻]
3. Therefore pH = pKa at this point
4. Ka = 10⁻ᵖᴷᵃ

**Key Equations:**
- Ka = [H⁺][A⁻]/[HA]
- At half-neutralisation: Ka = [H⁺], so pKa = pH
- Ka = [H⁺]²/[HA] (weak acid approximation)

**Sources of Error:**
- pH meter calibration
- Temperature variation (Ka changes with T)
- Assumption that [H⁺] << [HA] may not be valid for very weak acids

---

**CP10: Investigating Electrochemical Cells**
*Topic 14: Redox II*

**Aim:** Measure cell EMF and compare with standard electrode potentials

**Method:**
1. Set up two half-cells (e.g., Zn/Zn²⁺ and Cu/Cu²⁺)
2. Connect solutions with salt bridge (KNO₃ in agar)
3. Connect electrodes to high-resistance voltmeter
4. Record cell EMF
5. Repeat with different metal combinations

**Key Equations:**
- E°cell = E°(reduction) - E°(oxidation)
- E°cell = E°(more positive) - E°(more negative)

**Standard Half-Cell:**
- 1 mol dm⁻³ solutions
- 298 K (25°C)
- Pure metal electrodes
- Salt bridge with inert electrolyte

**Example:**
Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
- E°(Cu²⁺/Cu) = +0.34 V
- E°(Zn²⁺/Zn) = -0.76 V
- E°cell = +0.34 - (-0.76) = +1.10 V

**Sources of Error:**
- Concentrations not exactly 1 mol dm⁻³
- Temperature not exactly 298 K
- Impure electrodes
- Internal resistance of voltmeter

---

**CP11: Redox Titration**
*Topic 14: Redox II*

**Aim:** Determine concentration of Fe²⁺ using potassium manganate(VII)

**Method:**
1. Pipette 25.00 cm³ of Fe²⁺(aq) into conical flask
2. Add 20 cm³ of dilute H₂SO₄ (to provide H⁺ ions)
3. Fill burette with standardised KMnO₄(aq)
4. Titrate KMnO₄ into flask, swirling continuously
5. End point: first permanent pink colour (self-indicating)
6. Record titre and repeat for concordant results

**Key Equation:**
- MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺
- Purple MnO₄⁻ → colourless Mn²⁺ during titration
- Excess KMnO₄ gives pink colour

**Calculations:**
- n(MnO₄⁻) = c × V
- n(Fe²⁺) = 5 × n(MnO₄⁻) (5:1 ratio)
- c(Fe²⁺) = n(Fe²⁺) / V(Fe²⁺)

**Why No Indicator Needed:**
- KMnO₄ is intensely purple
- When all Fe²⁺ oxidised, excess KMnO₄ gives permanent pink

---

**CP12: Preparation of a Transition Metal Complex**
*Topic 15: Transition Metals*

**Aim:** Prepare a transition metal complex and study ligand exchange

**Example: Preparation of [Cu(NH₃)₄(H₂O)₂]²⁺**

**Method:**
1. Add 10 cm³ of CuSO₄(aq) to beaker
2. Add NH₃(aq) dropwise with stirring
3. Initially: pale blue precipitate forms Cu(OH)₂
4. Continue adding NH₃ until precipitate dissolves
5. Deep blue solution of [Cu(NH₃)₄(H₂O)₂]²⁺ forms

**Observations:**
- CuSO₄(aq): pale blue [Cu(H₂O)₆]²⁺
- + few drops NH₃: pale blue ppt Cu(OH)₂
- + excess NH₃: deep blue [Cu(NH₃)₄(H₂O)₂]²⁺

**Key Equations:**
- [Cu(H₂O)₆]²⁺ + 2OH⁻ → Cu(OH)₂ + 6H₂O
- Cu(OH)₂ + 4NH₃ + 2H₂O → [Cu(NH₃)₄(H₂O)₂]²⁺ + 2OH⁻

**Colour Explanation:**
- d-d transitions absorb visible light
- Colour seen is complementary to colour absorbed
- Stronger ligands (NH₃ vs H₂O) cause greater d-orbital splitting

---

**CP13: Following Rate of Iodine-Propanone Reaction**
*Topic 16: Kinetics II*

**Aim:** Determine the order of reaction with respect to each reactant

**Reaction:** CH₃COCH₃ + I₂ → CH₃COCH₂I + H⁺ + I⁻ (acid catalysed)

**Method:**
1. Mix propanone, sulfuric acid, and iodine solution at time t=0
2. At regular intervals, remove 10 cm³ sample
3. Add to excess NaHCO₃ (quenches acid catalyst, stopping reaction)
4. Titrate with Na₂S₂O₃ using starch indicator
5. Plot [I₂] against time
6. Repeat varying initial concentrations of each reactant

**Analysis:**
- Plot concentration vs time graphs
- Determine order from shape: straight line = zero order in that reactant
- Or use initial rates method

**Expected Results:**
- Rate = k[CH₃COCH₃][H⁺]
- Zero order in iodine (rate independent of [I₂])
- First order in propanone and H⁺

**Why Zero Order in Iodine:**
- Iodine not involved in rate-determining step
- RDS is acid-catalysed enolisation of propanone

---

**CP14: Finding Activation Energy of a Reaction**
*Topic 16: Kinetics II*

**Aim:** Determine activation energy using rate measurements at different temperatures

**Method (Clock Reaction):**
1. Prepare reaction mixture at room temperature
2. Start reaction and measure time for colour change
3. Calculate initial rate (rate ∝ 1/time)
4. Repeat at different temperatures (use water bath)
5. Plot ln(rate) vs 1/T

**Arrhenius Equation:**
- k = Ae^(-Ea/RT)
- ln k = ln A - Ea/RT
- Plot ln k vs 1/T: gradient = -Ea/R, intercept = ln A

**Graph Analysis:**
- Gradient = -Ea/R
- Ea = -gradient × R
- R = 8.314 J K⁻¹ mol⁻¹
- Remember to convert T to Kelvin

**Sources of Error:**
- Difficult to maintain exact temperatures
- Human error in timing
- Temperature change during reaction

---

**CP15: Analysis of Organic Unknowns**
*Topic 19: Modern Analytical Techniques II*

**Aim:** Identify unknown organic compounds using spectroscopy

**Mass Spectrometry Analysis:**
- M⁺ peak gives molecular mass (Mr)
- Fragmentation pattern indicates structure
- Common losses: 15 (CH₃), 17 (OH), 29 (CHO), 45 (OC₂H₅)
- M+1 peak gives number of carbon atoms

**Infrared Spectroscopy:**
| Absorption (cm⁻¹) | Bond | Group |
|-------------------|------|-------|
| 3200-3600 (broad) | O-H | Alcohol, carboxylic acid |
| 2500-3300 (very broad) | O-H | Carboxylic acid |
| 2850-3100 | C-H | Alkane, alkene, arene |
| 1680-1750 | C=O | Carbonyl (aldehyde, ketone, acid, ester) |
| 1620-1680 | C=C | Alkene |

**¹H NMR Analysis:**
- Number of peaks = number of H environments
- Integration ratio = relative number of H atoms
- Chemical shift (δ) indicates environment
- Splitting pattern (n+1 rule) shows adjacent H atoms

**¹³C NMR Analysis:**
- Number of peaks = number of C environments
- No splitting (proton-decoupled)
- Chemical shift indicates C environment
- CDCl₃ solvent peak at δ = 77 ppm

---

**CP16: Preparation of Aspirin**
*Topic 17/18: Organic Chemistry II/III*

**Aim:** Synthesise aspirin (2-acetoxybenzoic acid) from 2-hydroxybenzoic acid

**Method:**
1. Weigh 2.00 g of 2-hydroxybenzoic acid into round-bottom flask
2. Add 4 cm³ of ethanoic anhydride (acylating agent)
3. Add 5 drops of concentrated phosphoric acid (catalyst)
4. Heat under reflux for 15 minutes
5. Allow to cool, add 20 cm³ cold water (hydrolyses excess anhydride)
6. Cool in ice bath until crystals form
7. Filter under reduced pressure (Buchner funnel)
8. Wash with cold water
9. Recrystallise from hot water
10. Determine melting point (expected: 138-140°C)

**Key Equation:**
\`\`\`
2-HOC₆H₄COOH + (CH₃CO)₂O → CH₃COOC₆H₄COOH + CH₃COOH
(salicylic acid) + (ethanoic anhydride) → (aspirin) + (ethanoic acid)
\`\`\`

**Mechanism:** Nucleophilic addition-elimination (acyl substitution)
- OH attacks δ+ carbon of C=O in anhydride
- Tetrahedral intermediate forms
- CH₃COO⁻ leaves as ethanoic acid

**Yield Calculation:**
- Theoretical yield = (mass salicylic acid / Mr) × Mr aspirin
- Mr salicylic acid = 138, Mr aspirin = 180
- % yield = (actual mass / theoretical mass) × 100

**Purity Testing:**
- Melting point (pure: 138-140°C, impure: lower and broader range)
- TLC comparison with standard
- IR spectroscopy

**Safety:**
- Ethanoic anhydride is corrosive and lachrymatory
- Work in fume cupboard
- Phosphoric acid is corrosive
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY DATA SHEET AND FORMULAE
// ============================================================================

const EDEXCEL_CHEMISTRY_DATA_SHEET = `## Edexcel A-Level Chemistry Data Sheet (Provided in Exam)

### Physical Constants
| Constant | Symbol | Value |
|----------|--------|-------|
| Avogadro constant | Nₐ | 6.022 × 10²³ mol⁻¹ |
| Molar gas constant | R | 8.314 J K⁻¹ mol⁻¹ |
| Faraday constant | F | 96 485 C mol⁻¹ |
| Planck constant | h | 6.626 × 10⁻³⁴ J s |
| Speed of light in vacuum | c | 2.998 × 10⁸ m s⁻¹ |
| Ionic product of water | Kw | 1.00 × 10⁻¹⁴ mol² dm⁻⁶ (at 298 K) |
| Specific heat capacity of water | c | 4.18 J g⁻¹ K⁻¹ |

### Molar Gas Volumes
| Conditions | Volume |
|------------|--------|
| RTP (298 K, 101 kPa) | 24.0 dm³ mol⁻¹ |
| STP (273 K, 100 kPa) | 22.7 dm³ mol⁻¹ |

### Standard Conditions
- Temperature: 298 K (25°C)
- Pressure: 100 kPa (or 101.325 kPa for 1 atm)
- Concentration: 1 mol dm⁻³

### Relative Atomic Masses (Ar)
| Element | Symbol | Ar | Element | Symbol | Ar |
|---------|--------|-----|---------|--------|-----|
| Hydrogen | H | 1.0 | Potassium | K | 39.1 |
| Carbon | C | 12.0 | Calcium | Ca | 40.1 |
| Nitrogen | N | 14.0 | Chromium | Cr | 52.0 |
| Oxygen | O | 16.0 | Manganese | Mn | 54.9 |
| Fluorine | F | 19.0 | Iron | Fe | 55.8 |
| Sodium | Na | 23.0 | Cobalt | Co | 58.9 |
| Magnesium | Mg | 24.3 | Nickel | Ni | 58.7 |
| Aluminium | Al | 27.0 | Copper | Cu | 63.5 |
| Silicon | Si | 28.1 | Zinc | Zn | 65.4 |
| Phosphorus | P | 31.0 | Bromine | Br | 79.9 |
| Sulfur | S | 32.1 | Silver | Ag | 107.9 |
| Chlorine | Cl | 35.5 | Iodine | I | 126.9 |
| Argon | Ar | 39.9 | Barium | Ba | 137.3 |

### Bond Enthalpies (Mean Values, kJ mol⁻¹)
| Bond | Enthalpy | Bond | Enthalpy | Bond | Enthalpy |
|------|----------|------|----------|------|----------|
| H-H | 436 | C-H | 413 | O-H | 464 |
| C-C | 347 | C=C | 612 | C≡C | 838 |
| C-O | 358 | C=O | 805 | C≡N | 887 |
| C-Cl | 338 | C-Br | 276 | C-I | 238 |
| N-H | 391 | N-N | 158 | N=N | 418 |
| O-O | 146 | O=O | 498 | S-H | 364 |
| Cl-Cl | 243 | Br-Br | 193 | I-I | 151 |
| H-Cl | 432 | H-Br | 366 | H-I | 298 |

### Standard Electrode Potentials E° (at 298 K) - Selected Values
| Half-Reaction | E° / V |
|---------------|--------|
| Li⁺ + e⁻ ⇌ Li | -3.04 |
| K⁺ + e⁻ ⇌ K | -2.93 |
| Ca²⁺ + 2e⁻ ⇌ Ca | -2.87 |
| Na⁺ + e⁻ ⇌ Na | -2.71 |
| Mg²⁺ + 2e⁻ ⇌ Mg | -2.37 |
| Al³⁺ + 3e⁻ ⇌ Al | -1.66 |
| Zn²⁺ + 2e⁻ ⇌ Zn | -0.76 |
| Fe²⁺ + 2e⁻ ⇌ Fe | -0.44 |
| Ni²⁺ + 2e⁻ ⇌ Ni | -0.25 |
| Sn²⁺ + 2e⁻ ⇌ Sn | -0.14 |
| Pb²⁺ + 2e⁻ ⇌ Pb | -0.13 |
| 2H⁺ + 2e⁻ ⇌ H₂ | 0.00 |
| Cu²⁺ + 2e⁻ ⇌ Cu | +0.34 |
| I₂ + 2e⁻ ⇌ 2I⁻ | +0.54 |
| Ag⁺ + e⁻ ⇌ Ag | +0.80 |
| Br₂ + 2e⁻ ⇌ 2Br⁻ | +1.07 |
| Cl₂ + 2e⁻ ⇌ 2Cl⁻ | +1.36 |
| MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O | +1.51 |
| F₂ + 2e⁻ ⇌ 2F⁻ | +2.87 |

### Infrared Absorption Data (Characteristic Absorptions)
| Bond | Wavenumber / cm⁻¹ | Appearance |
|------|-------------------|------------|
| O-H (alcohol) | 3200-3550 | Broad, strong |
| O-H (carboxylic acid) | 2500-3300 | Very broad |
| N-H | 3300-3500 | Medium, may be 2 peaks |
| C-H (alkane) | 2850-3000 | Medium |
| C-H (aldehyde) | 2700-2900 | Two peaks |
| C≡N | 2200-2260 | Medium, sharp |
| C≡C | 2100-2260 | Weak, sharp |
| C=O (aldehyde/ketone) | 1680-1750 | Strong |
| C=O (carboxylic acid) | 1700-1725 | Strong |
| C=O (ester) | 1735-1750 | Strong |
| C=O (amide) | 1630-1690 | Strong |
| C=C | 1620-1680 | Medium |
| C-O | 1000-1300 | Strong |
| C-Cl | 700-800 | Strong |

### ¹H NMR Chemical Shifts
| Type of Proton | δ / ppm |
|----------------|---------|
| R-CH₃ | 0.7-1.2 |
| R-CH₂-R | 1.2-1.4 |
| R₃C-H | 1.4-2.0 |
| R-C≡C-H | 2.0-3.0 |
| R-CO-CH₃ | 2.0-2.5 |
| R-O-CH₃ | 3.3-4.3 |
| R-CH₂-Cl/Br | 3.0-4.0 |
| R-CH₂-OH | 3.5-4.0 |
| R-CHO | 9.0-10.0 |
| Ar-H | 6.5-8.0 |
| R-COOH | 10.0-12.0 |
| R-OH (alcohol) | 1.0-6.0 (variable) |
| Ar-OH | 4.0-7.0 |

### ¹³C NMR Chemical Shifts
| Type of Carbon | δ / ppm |
|----------------|---------|
| C-C (alkane) | 5-40 |
| C-Cl/Br | 25-50 |
| C-N | 30-65 |
| C-O (alcohol/ether) | 50-90 |
| C≡C | 65-85 |
| C=C (alkene) | 110-150 |
| Benzene ring | 110-160 |
| C=O (aldehyde/ketone) | 190-220 |
| C=O (acid/ester/amide) | 160-185 |
| C≡N | 110-125 |

### Splitting Patterns (¹H NMR)
| Number of Adjacent H | Splitting | Ratio |
|---------------------|-----------|-------|
| 0 | Singlet (s) | 1 |
| 1 | Doublet (d) | 1:1 |
| 2 | Triplet (t) | 1:2:1 |
| 3 | Quartet (q) | 1:3:3:1 |
| 4 | Quintet | 1:4:6:4:1 |
| 5 | Sextet | 1:5:10:10:5:1 |
`;

const EDEXCEL_CHEMISTRY_KEY_FORMULAE = `## Edexcel A-Level Chemistry Key Formulae

### Amount of Substance (Topic 5)
| Formula | Use | Notes |
|---------|-----|-------|
| n = m/M | Moles from mass | M = molar mass (g mol⁻¹) |
| c = n/V | Concentration | V in dm³ |
| n = V/24.0 | Moles of gas at RTP | V in dm³ |
| pV = nRT | Ideal gas equation | p in Pa, V in m³, T in K |
| n = pV/RT | Moles of gas (any conditions) | |

### Energetics (Topics 8 and 13)
| Formula | Use | Notes |
|---------|-----|-------|
| q = mcΔT | Heat energy | m in g, c = 4.18 J g⁻¹ K⁻¹ |
| ΔH = -q/n | Enthalpy change per mole | n = moles of limiting reagent |
| ΔH = Σ(bonds broken) - Σ(bonds formed) | Bond enthalpy calculation | |
| ΔrH = Σ ΔfH(products) - Σ ΔfH(reactants) | From formation enthalpies | |
| ΔrH = Σ ΔcH(reactants) - Σ ΔcH(products) | From combustion enthalpies | |
| ΔG = ΔH - TΔS | Gibbs free energy | T in K, ΔS in J K⁻¹ mol⁻¹ |
| ΔS = Σ S°(products) - Σ S°(reactants) | Entropy change | |

### Born-Haber Cycle Terms
| Term | Definition |
|------|------------|
| ΔfH | Enthalpy of formation |
| ΔatH | Enthalpy of atomisation |
| IE | Ionisation energy |
| EA | Electron affinity |
| ΔlattH | Lattice enthalpy |
| ΔhydH | Enthalpy of hydration |
| ΔsolH | Enthalpy of solution |

### Kinetics (Topics 9 and 16)
| Formula | Use | Notes |
|---------|-----|-------|
| Rate = k[A]ᵐ[B]ⁿ | Rate equation | m, n are orders |
| Rate = -d[A]/dt | Definition of rate | |
| t½ = ln2/k | Half-life (1st order only) | k is rate constant |
| ln k = ln A - Eₐ/RT | Arrhenius equation (linear form) | |
| k = Ae⁻ᴱᵃ/ᴿᵀ | Arrhenius equation | A = pre-exponential factor |
| ln(k₂/k₁) = (Eₐ/R)(1/T₁ - 1/T₂) | Two-point Arrhenius | |

### Equilibria (Topics 10, 11, 12)
| Formula | Use | Notes |
|---------|-----|-------|
| Kc = [products]/[reactants] | Equilibrium constant | Concentrations at equilibrium |
| Kp = p(products)/p(reactants) | Partial pressure form | For gases only |
| pₐ = xₐ × P(total) | Partial pressure | x = mole fraction |
| xₐ = nₐ/n(total) | Mole fraction | |
| Kp = Kc(RT)^Δn | Converting Kc to Kp | Δn = moles gas products - reactants |

### Acid-Base Equilibria (Topic 12)
| Formula | Use | Notes |
|---------|-----|-------|
| pH = -log₁₀[H⁺] | pH from [H⁺] | |
| [H⁺] = 10⁻ᵖᴴ | [H⁺] from pH | |
| pOH = -log₁₀[OH⁻] | pOH definition | |
| pH + pOH = 14 | Relationship at 298 K | |
| Kₐ = [H⁺][A⁻]/[HA] | Acid dissociation constant | |
| pKₐ = -log₁₀Kₐ | pKa | |
| [H⁺] = √(Kₐc) | Weak acid [H⁺] | Assuming [H⁺] << c |
| pH = pKₐ + log([A⁻]/[HA]) | Henderson-Hasselbalch | For buffers |
| Kw = [H⁺][OH⁻] = 10⁻¹⁴ | Ionic product of water (298 K) | |
| [H⁺] = √(Kₐ₁Kₐ₂) | Amphoteric salt pH | |

### Electrochemistry (Topic 14)
| Formula | Use | Notes |
|---------|-----|-------|
| E°cell = E°(cathode) - E°(anode) | Cell EMF | Cathode = reduction |
| E°cell = E°(+) - E°(-) | Alternative form | |
| ΔG = -nFE°cell | Gibbs energy from EMF | n = electrons transferred |
| E°cell > 0 | Spontaneous reaction | ΔG < 0 |

### Transition Metals (Topic 15)
| Concept | Notes |
|---------|-------|
| Coordination number | Number of coordinate bonds to central metal |
| Oxidation state | Charge on central metal ion |
| d-d transition | Electron moves between split d orbitals |
| Ligand exchange | Swap one ligand for another |

### Organic Chemistry Formulae
| Formula | Use |
|---------|-----|
| Degree of unsaturation = (2C + 2 + N - H - X)/2 | Calculate rings + double bonds |
| % yield = (actual mass / theoretical mass) × 100 | Percentage yield |
| Atom economy = (Mr desired product / ΣMr all products) × 100 | Atom economy |
| Rf = distance moved by spot / distance moved by solvent | Retention factor (TLC) |
`;

const EDEXCEL_CHEMISTRY_MATHEMATICAL_SKILLS = `## Edexcel A-Level Chemistry Mathematical Skills

### Calculations with Standard Form
- Express numbers in form a × 10ⁿ where 1 ≤ a < 10
- Example: 0.000034 = 3.4 × 10⁻⁵
- Example: 6022000 = 6.022 × 10⁶
- When multiplying: add indices
- When dividing: subtract indices

### Significant Figures
| Example | Significant Figures |
|---------|---------------------|
| 5.00 | 3 |
| 0.0050 | 2 |
| 500 | Ambiguous (1, 2, or 3) |
| 5.00 × 10² | 3 |
- In calculations: answer should have same s.f. as least precise value
- Edexcel typically expects 2-3 s.f. in final answers

### Logarithms and Exponentials
- pH = -log₁₀[H⁺]
- [H⁺] = 10⁻ᵖᴴ
- ln k = ln A - Eₐ/RT (Arrhenius)
- ln = natural log (base e)
- log = log₁₀ (base 10)
- ln x = 2.303 × log₁₀ x

### Graph Skills

**Plotting Graphs:**
- Choose appropriate scales (use most of graph paper)
- Label axes with quantity and units
- Draw smooth best-fit line or curve
- Use crosses (×) for points

**Calculating Gradients:**
- Draw large triangle on straight line
- gradient = Δy/Δx = (y₂ - y₁)/(x₂ - x₁)
- Include units in gradient

**Common Linear Graphs in A-Level Chemistry:**
| Graph | Gradient | Intercept |
|-------|----------|-----------|
| ln k vs 1/T | -Eₐ/R | ln A |
| [Product] vs time (0th order) | k | [A]₀ |
| ln[A] vs time (1st order) | -k | ln[A]₀ |
| 1/[A] vs time (2nd order) | k | 1/[A]₀ |
| Rate vs [A] (1st order) | k | 0 |
| Rate vs [A]² (2nd order) | k | 0 |
| ln(rate) vs ln[A] | Order n | ln k |
| V (cell) vs I | -r | ε |

### Rearranging Equations
**Example: Ideal Gas Equation**
pV = nRT
- For n: n = pV/RT
- For T: T = pV/nR
- For p: p = nRT/V

**Example: Arrhenius Equation**
k = Ae⁻ᴱᵃ/ᴿᵀ
- Take ln: ln k = ln A - Eₐ/RT
- Rearrange for Eₐ: Eₐ = R × (ln A - ln k) × T

### Unit Conversions
| Conversion | Factor |
|------------|--------|
| cm³ → dm³ | ÷ 1000 |
| dm³ → m³ | ÷ 1000 |
| cm³ → m³ | ÷ 10⁶ |
| kJ → J | × 1000 |
| °C → K | + 273 |
| kPa → Pa | × 1000 |
| g → kg | ÷ 1000 |
| minutes → seconds | × 60 |

### Uncertainty Calculations

**Absolute Uncertainty:**
- Single reading: ± precision of instrument
- Repeated readings: ± range/2 or use standard deviation

**Percentage Uncertainty:**
- % uncertainty = (absolute uncertainty / measured value) × 100

**Combining Uncertainties:**
- Addition/Subtraction: add absolute uncertainties
- Multiplication/Division: add percentage uncertainties
- Powers: multiply percentage uncertainty by power

**Example:**
Volume from burette = (24.50 ± 0.05) cm³
% uncertainty = (0.05/24.50) × 100 = 0.2%

### Percentage Calculations
- Percentage yield = (actual yield / theoretical yield) × 100
- Percentage purity = (mass of pure substance / total mass) × 100
- Percentage error = |(experimental - accepted) / accepted| × 100
- Atom economy = (Mr of desired product / total Mr of products) × 100
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY WORKED EXAMPLES (25+ QUESTIONS)
// ============================================================================

const EDEXCEL_CHEMISTRY_WORKED_EXAMPLES = `## Edexcel A-Level Chemistry Worked Examples

### TOPIC 1: ATOMIC STRUCTURE

---

**Example 1.1: Calculating Ar from Mass Spectrum [3 marks]**

**Question:** A sample of gallium contains two isotopes: ⁶⁹Ga (60.1%) and ⁷¹Ga (39.9%).
Calculate the relative atomic mass of gallium.

**Mark Scheme:**
- Ar = (69 × 60.1 + 71 × 39.9) / 100 [1]
- Ar = (4146.9 + 2832.9) / 100 [1]
- Ar = 69.8 [1]

**Common Error:** Not dividing by 100 (just adding the products)

---

**Example 1.2: Ionisation Energy Trend [4 marks]**

**Question:** Explain why the first ionisation energy of sodium is lower than that of magnesium.

**Mark Scheme:**
- Sodium and magnesium have the same number of electron shells / same shielding [1]
- Magnesium has one more proton in the nucleus / higher nuclear charge [1]
- Magnesium's outer electron experiences greater nuclear attraction [1]
- More energy is needed to remove the outer electron from magnesium [1]

---

### TOPIC 2: BONDING AND STRUCTURE

---

**Example 2.1: VSEPR and Molecular Shapes [3 marks]**

**Question:** Draw the shape of the PF₃ molecule and state the bond angle.
Name the shape and explain how you determined it.

**Mark Scheme:**
- Trigonal pyramidal shape correctly drawn [1]
- Bond angle: approximately 97° (accept 95-100°) [1]
- Explanation: 3 bonding pairs + 1 lone pair = 4 electron pairs around P [1]
- (Lone pair repels bonding pairs more, compressing bond angle below 109.5°)

---

**Example 2.2: Hydrogen Bonding [3 marks]**

**Question:** Explain why water has a higher boiling point than hydrogen sulfide.

**Mark Scheme:**
- Oxygen is more electronegative than sulfur [1]
- Water forms hydrogen bonds between molecules [1]
- H₂S only has van der Waals / London dispersion forces [1]
- Hydrogen bonds are stronger than van der Waals, needing more energy to break [1]
(Max 3 marks)

---

### TOPIC 3: REDOX I

---

**Example 3.1: Oxidation States [2 marks]**

**Question:** State the oxidation state of:
(a) S in H₂SO₄
(b) Mn in MnO₄⁻

**Mark Scheme:**
(a) Let oxidation state of S = x
    2(+1) + x + 4(-2) = 0
    x = +6 [1]

(b) Let oxidation state of Mn = x
    x + 4(-2) = -1
    x = +7 [1]

---

**Example 3.2: Balancing Redox Equations [3 marks]**

**Question:** Balance the following ionic equation:
MnO₄⁻ + Fe²⁺ + H⁺ → Mn²⁺ + Fe³⁺ + H₂O

**Mark Scheme:**
- MnO₄⁻ + 5e⁻ + 8H⁺ → Mn²⁺ + 4H₂O [1]
- Fe²⁺ → Fe³⁺ + e⁻ (×5) [1]
- **MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O** [1]

---

### TOPIC 5: FORMULAE, EQUATIONS AND AMOUNTS

---

**Example 5.1: Ideal Gas Equation [4 marks]**

**Question:** A sample of nitrogen gas occupies 250 cm³ at 25°C and 100 kPa.
Calculate the number of moles of nitrogen. (R = 8.314 J K⁻¹ mol⁻¹)

**Mark Scheme:**
- Convert units: V = 250 × 10⁻⁶ m³ [1]
  T = 25 + 273 = 298 K
  p = 100 × 10³ Pa
- Use pV = nRT [1]
- n = pV/RT = (100 × 10³ × 250 × 10⁻⁶) / (8.314 × 298) [1]
- n = 25 / 2477.6 = 0.0101 mol (or 1.01 × 10⁻² mol) [1]

---

**Example 5.2: Titration Calculation [4 marks]**

**Question:** 25.0 cm³ of 0.100 mol dm⁻³ sodium carbonate solution required 23.5 cm³
of hydrochloric acid for complete neutralisation.
Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂
Calculate the concentration of the hydrochloric acid.

**Mark Scheme:**
- n(Na₂CO₃) = 0.100 × 25.0/1000 = 0.00250 mol [1]
- Mole ratio Na₂CO₃ : HCl = 1 : 2 [1]
- n(HCl) = 2 × 0.00250 = 0.00500 mol [1]
- c(HCl) = 0.00500 / (23.5/1000) = 0.213 mol dm⁻³ [1]

---

**Example 5.3: Percentage Yield and Atom Economy [5 marks]**

**Question:** Ethanol (C₂H₅OH) can be produced by fermentation of glucose:
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

(a) Calculate the atom economy for the production of ethanol. [2]
(b) 100 g of glucose produced 35.2 g of ethanol. Calculate the percentage yield. [3]

**Mark Scheme:**
(a) Mr of ethanol = 46, Mr of CO₂ = 44 [1]
    Atom economy = (2 × 46) / (2 × 46 + 2 × 44) × 100 = 92/180 × 100 = 51.1% [1]

(b) n(glucose) = 100/180 = 0.556 mol [1]
    Theoretical n(ethanol) = 2 × 0.556 = 1.111 mol
    Theoretical mass = 1.111 × 46 = 51.1 g [1]
    % yield = (35.2/51.1) × 100 = 68.9% [1]

---

### TOPIC 8: ENERGETICS I

---

**Example 8.1: Hess's Law Calculation [4 marks]**

**Question:** Calculate the enthalpy of formation of methane using the following data:
C(s) + O₂(g) → CO₂(g)         ΔH = -394 kJ mol⁻¹
H₂(g) + ½O₂(g) → H₂O(l)       ΔH = -286 kJ mol⁻¹
CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)   ΔH = -890 kJ mol⁻¹

**Mark Scheme:**
- Target equation: C(s) + 2H₂(g) → CH₄(g) [1]
- Using Hess's Law (cycle or algebraic method) [1]
- ΔfH = ΔcH[C] + 2×ΔcH[H₂] - ΔcH[CH₄] [1]
- ΔfH = -394 + 2(-286) - (-890) = -394 - 572 + 890 = **-76 kJ mol⁻¹** [1]

---

**Example 8.2: Bond Enthalpy Calculation [4 marks]**

**Question:** Calculate the enthalpy change for the reaction:
CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)

Bond enthalpies (kJ mol⁻¹): C-H = 413, Cl-Cl = 243, C-Cl = 338, H-Cl = 432

**Mark Scheme:**
- Bonds broken: 1 × C-H + 1 × Cl-Cl = 413 + 243 = 656 kJ mol⁻¹ [1]
- Bonds formed: 1 × C-Cl + 1 × H-Cl = 338 + 432 = 770 kJ mol⁻¹ [1]
- ΔH = bonds broken - bonds formed [1]
- ΔH = 656 - 770 = **-114 kJ mol⁻¹** [1]

---

### TOPIC 9/16: KINETICS

---

**Example 9.1: Maxwell-Boltzmann Explanation [4 marks]**

**Question:** Explain, in terms of collision theory and the Maxwell-Boltzmann distribution,
why increasing temperature increases the rate of reaction.

**Mark Scheme:**
- Particles have more kinetic energy at higher temperature [1]
- More particles have energy ≥ Eₐ (activation energy) [1]
- Greater proportion of collisions are successful [1]
- Higher collision frequency also contributes [1]
- Reference to area under M-B curve shifting right [1]
(Max 4 marks)

---

**Example 16.1: Determining Order of Reaction [4 marks]**

**Question:** The following data was obtained for the reaction A + B → Products

| Experiment | [A] / mol dm⁻³ | [B] / mol dm⁻³ | Initial rate / mol dm⁻³ s⁻¹ |
|------------|----------------|----------------|------------------------------|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 8.0 × 10⁻⁴ |
| 3 | 0.10 | 0.20 | 4.0 × 10⁻⁴ |

Determine the order with respect to A and B, and write the rate equation.

**Mark Scheme:**
- Comparing Exp 1 and 2: [A] doubles, rate × 4, so order in A = 2 [1]
- Comparing Exp 1 and 3: [B] doubles, rate × 2, so order in B = 1 [1]
- Rate equation: **rate = k[A]²[B]** [1]
- Using Exp 1: k = rate/[A]²[B] = (2.0 × 10⁻⁴)/(0.10² × 0.10) = **0.20 mol⁻² dm⁶ s⁻¹** [1]

---

**Example 16.2: Arrhenius Equation [5 marks]**

**Question:** The rate constant for a reaction at 300 K is 2.5 × 10⁻³ s⁻¹ and at 320 K is
7.2 × 10⁻³ s⁻¹. Calculate the activation energy for this reaction. (R = 8.314 J K⁻¹ mol⁻¹)

**Mark Scheme:**
- Use ln(k₂/k₁) = (Eₐ/R)(1/T₁ - 1/T₂) [1]
- ln(7.2 × 10⁻³ / 2.5 × 10⁻³) = (Eₐ/8.314)(1/300 - 1/320) [1]
- ln(2.88) = (Eₐ/8.314)(0.003333 - 0.003125) [1]
- 1.058 = (Eₐ/8.314)(2.083 × 10⁻⁴) [1]
- Eₐ = (1.058 × 8.314) / (2.083 × 10⁻⁴) = **42,200 J mol⁻¹ = 42.2 kJ mol⁻¹** [1]

---

### TOPIC 10/11: EQUILIBRIA

---

**Example 10.1: Le Chatelier's Principle [3 marks]**

**Question:** For the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)  ΔH = -92 kJ mol⁻¹

Explain the effect on the position of equilibrium of:
(a) Increasing pressure [2]
(b) Increasing temperature [1]

**Mark Scheme:**
(a) 4 moles of gas on left, 2 moles on right [1]
    Equilibrium shifts RIGHT / towards products to reduce pressure [1]

(b) Forward reaction is exothermic, so equilibrium shifts LEFT / towards reactants
    to absorb the extra heat [1]

---

**Example 11.1: Kp Calculation [5 marks]**

**Question:** At equilibrium, a mixture contains 0.30 mol N₂, 0.90 mol H₂, and 0.20 mol NH₃
at a total pressure of 50 atm.
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
Calculate Kp, stating its units.

**Mark Scheme:**
- Total moles = 0.30 + 0.90 + 0.20 = 1.40 mol [1]
- Mole fractions: xN₂ = 0.30/1.40, xH₂ = 0.90/1.40, xNH₃ = 0.20/1.40 [1]
- Partial pressures: pN₂ = (0.30/1.40) × 50 = 10.7 atm
                     pH₂ = (0.90/1.40) × 50 = 32.1 atm
                     pNH₃ = (0.20/1.40) × 50 = 7.14 atm [1]
- Kp = (pNH₃)² / (pN₂ × (pH₂)³) [1]
- Kp = (7.14)² / (10.7 × (32.1)³) = 51.0 / (10.7 × 33100)
- Kp = 51.0 / 354000 = **1.44 × 10⁻⁴ atm⁻²** [1]

---

### TOPIC 12: ACID-BASE EQUILIBRIA

---

**Example 12.1: pH of Weak Acid [4 marks]**

**Question:** Calculate the pH of a 0.15 mol dm⁻³ solution of propanoic acid.
Ka = 1.3 × 10⁻⁵ mol dm⁻³

**Mark Scheme:**
- Ka = [H⁺]²/[HA] (assuming [H⁺] << [HA]) [1]
- [H⁺]² = Ka × [HA] = 1.3 × 10⁻⁵ × 0.15 = 1.95 × 10⁻⁶ [1]
- [H⁺] = √(1.95 × 10⁻⁶) = 1.40 × 10⁻³ mol dm⁻³ [1]
- pH = -log(1.40 × 10⁻³) = **2.85** [1]

---

**Example 12.2: Buffer Solution [5 marks]**

**Question:** A buffer solution contains 0.20 mol dm⁻³ ethanoic acid and
0.15 mol dm⁻³ sodium ethanoate. Ka = 1.8 × 10⁻⁵ mol dm⁻³

(a) Calculate the pH of the buffer. [3]
(b) Explain how the buffer resists pH change when small amounts of acid are added. [2]

**Mark Scheme:**
(a) Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) [1]
    pKa = -log(1.8 × 10⁻⁵) = 4.74 [1]
    pH = 4.74 + log(0.15/0.20) = 4.74 + log(0.75) = 4.74 - 0.12 = **4.62** [1]

(b) Added H⁺ reacts with the ethanoate ions: H⁺ + CH₃COO⁻ → CH₃COOH [1]
    The ethanoate is in large excess so it removes most of the added H⁺,
    maintaining a relatively constant pH [1]

---

**Example 12.3: Titration Curve [4 marks]**

**Question:** A student titrates 25.0 cm³ of 0.10 mol dm⁻³ ethanoic acid with
0.10 mol dm⁻³ sodium hydroxide.

(a) What is the pH at the half-equivalence point? [2]
(b) What indicator should be used and why? [2]

**Mark Scheme:**
(a) At half-equivalence: [HA] = [A⁻], so pH = pKa [1]
    pH = -log(1.8 × 10⁻⁵) = **4.7** (or 4.74) [1]

(b) Phenolphthalein [1]
    Because equivalence point is in the alkaline region (weak acid + strong base)
    and phenolphthalein changes colour in the range pH 8-10 [1]

---

### TOPIC 13: ENERGETICS II

---

**Example 13.1: Born-Haber Cycle [6 marks]**

**Question:** Use the following data to calculate the lattice enthalpy of sodium chloride.

| Process | ΔH / kJ mol⁻¹ |
|---------|---------------|
| Atomisation of Na | +108 |
| First ionisation energy of Na | +496 |
| Atomisation of Cl | +121 |
| First electron affinity of Cl | -349 |
| Formation of NaCl | -411 |

**Mark Scheme:**
- Correct Born-Haber cycle diagram (or correct Hess's Law expression) [1]
- ΔfH = ΔatH(Na) + IE₁(Na) + ½ΔatH(Cl₂) + EA₁(Cl) + ΔlattH [1]
  (Note: atomisation of Cl = ½ bond enthalpy of Cl₂)
- -411 = +108 + 496 + 121 + (-349) + ΔlattH [1]
- -411 = 376 + ΔlattH [1]
- ΔlattH = -411 - 376 = **-787 kJ mol⁻¹** [1]
- (Negative sign indicates energy released when lattice forms from gaseous ions) [1]

---

**Example 13.2: Gibbs Free Energy [4 marks]**

**Question:** For the reaction: 2NO₂(g) → N₂O₄(g)
ΔH = -57 kJ mol⁻¹ and ΔS = -176 J K⁻¹ mol⁻¹

(a) Calculate ΔG at 298 K and state whether the reaction is spontaneous. [3]
(b) Calculate the temperature at which the reaction becomes non-spontaneous. [1]

**Mark Scheme:**
(a) ΔG = ΔH - TΔS [1]
    ΔG = -57000 - (298 × -176) = -57000 + 52448 [1]
    ΔG = **-4552 J mol⁻¹ = -4.6 kJ mol⁻¹** (spontaneous as ΔG < 0) [1]

(b) At equilibrium/boundary: ΔG = 0, so T = ΔH/ΔS = 57000/176 = **324 K** [1]
    (Above this temperature, reaction becomes non-spontaneous)

---

### TOPIC 14: REDOX II

---

**Example 14.1: Cell EMF [3 marks]**

**Question:** Calculate the EMF of a cell made from the following half-cells:
Zn²⁺(aq) + 2e⁻ ⇌ Zn(s)    E° = -0.76 V
Fe³⁺(aq) + e⁻ ⇌ Fe²⁺(aq)  E° = +0.77 V

**Mark Scheme:**
- Identify more positive electrode as cathode (Fe³⁺/Fe²⁺) [1]
- E°cell = E°(cathode) - E°(anode) = +0.77 - (-0.76) [1]
- E°cell = **+1.53 V** [1]

---

**Example 14.2: Predicting Feasibility [4 marks]**

**Question:** Use electrode potentials to predict whether acidified hydrogen peroxide
will oxidise Fe²⁺ to Fe³⁺.

H₂O₂ + 2H⁺ + 2e⁻ ⇌ 2H₂O    E° = +1.78 V
Fe³⁺ + e⁻ ⇌ Fe²⁺           E° = +0.77 V

**Mark Scheme:**
- For reaction to occur: H₂O₂ must be reduced (accept electrons) [1]
- Fe²⁺ must be oxidised (lose electrons), so reverse the Fe equation [1]
- E°cell = E°(reduction) - E°(oxidation) = +1.78 - (+0.77) = +1.01 V [1]
- E°cell > 0, so reaction is feasible/spontaneous [1]

---

### TOPIC 15: TRANSITION METALS

---

**Example 15.1: Complex Ion Colours [4 marks]**

**Question:** Explain why [Cu(H₂O)₆]²⁺ is blue.

**Mark Scheme:**
- Cu²⁺ has partially filled d orbitals (d⁹ configuration) [1]
- Ligands cause d orbitals to split into two energy levels [1]
- Electrons can absorb visible light and jump to higher d orbital (d-d transition) [1]
- Orange/red light is absorbed; blue light is transmitted/reflected [1]

---

**Example 15.2: Ligand Exchange [4 marks]**

**Question:** When excess ammonia is added to copper(II) sulfate solution, the colour
changes from pale blue to deep blue.

(a) Write the equation for this ligand exchange reaction. [2]
(b) Explain why the colour change occurs. [2]

**Mark Scheme:**
(a) [Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O [2]
    (Allow [Cu(H₂O)₆]²⁺ → [Cu(NH₃)₄(H₂O)₂]²⁺ [1])

(b) NH₃ is a stronger field ligand than H₂O [1]
    Greater d-orbital splitting means different wavelength of light absorbed [1]

---

### TOPIC 17: ORGANIC CHEMISTRY II

---

**Example 17.1: Nucleophilic Addition [4 marks]**

**Question:** Draw the mechanism for the reaction of propanone with hydrogen cyanide.

**Mark Scheme:**
- CN⁻ shown attacking δ+ carbonyl carbon with curly arrow [1]
- Electron pair moves from C=O to oxygen (second curly arrow) [1]
- Tetrahedral intermediate with negative charge on oxygen [1]
- H⁺ (from HCN) protonates oxygen to form 2-hydroxy-2-methylpropanenitrile [1]

---

**Example 17.2: Distinguishing Tests [4 marks]**

**Question:** Describe how you would use chemical tests to distinguish between
propanal (CH₃CH₂CHO) and propanone (CH₃COCH₃).

**Mark Scheme:**
- Test: Tollens' reagent (ammoniacal silver nitrate) / Fehling's solution [1]
- Add reagent and warm gently / heat [1]
- Propanal (aldehyde) gives positive result:
  - Tollens': silver mirror OR Fehling's: brick red precipitate [1]
- Propanone (ketone) gives no reaction / stays blue [1]

---

### TOPIC 18: ORGANIC CHEMISTRY III

---

**Example 18.1: Electrophilic Substitution [5 marks]**

**Question:** Draw the mechanism for the nitration of benzene.

**Mark Scheme:**
- Generation of nitronium ion: HNO₃ + 2H₂SO₄ → NO₂⁺ + 2HSO₄⁻ + H₃O⁺ [1]
- Curly arrow from benzene ring to NO₂⁺ [1]
- Formation of arenium ion (cyclohexadienyl cation) with positive charge [1]
- Curly arrow showing loss of H⁺ to regenerate aromatic ring [1]
- Final product: nitrobenzene [1]

---

**Example 18.2: Multi-Step Synthesis [5 marks]**

**Question:** Outline how you would synthesise phenylamine (C₆H₅NH₂) from benzene.
Include reagents and conditions for each step.

**Mark Scheme:**
- Step 1: Nitration of benzene [1]
  Reagents: conc HNO₃ and conc H₂SO₄, 50°C
  Product: Nitrobenzene (C₆H₅NO₂)

- Step 2: Reduction [1]
  Reagents: Sn/HCl (or H₂/Ni catalyst) [1]
  Followed by NaOH to liberate free amine [1]
  Product: Phenylamine (C₆H₅NH₂) [1]

---

### TOPIC 19: MODERN ANALYTICAL TECHNIQUES II

---

**Example 19.1: NMR Interpretation [5 marks]**

**Question:** A compound C₃H₆O₂ shows the following ¹H NMR spectrum:
- δ 1.2 ppm: triplet, integration 3
- δ 4.1 ppm: quartet, integration 2
- δ 9.8 ppm: singlet, integration 1

Identify the compound and explain your reasoning.

**Mark Scheme:**
- δ 9.8 (singlet, 1H): CHO group / aldehyde [1]
- δ 4.1 (quartet, 2H): CH₂ next to 3H / -OCH₂- [1]
- δ 1.2 (triplet, 3H): CH₃ next to 2H [1]
- Molecular formula C₃H₆O₂ and NMR consistent with ethyl methanoate [1]
- Structure: HCOOCH₂CH₃ [1]

---

**Example 19.2: Combined Spectroscopy [6 marks]**

**Question:** A compound C₄H₈O has the following spectra:
- Mass spectrum: M⁺ = 72, major peak at m/z = 43
- IR: strong absorption at 1715 cm⁻¹
- ¹H NMR: singlet at δ 2.1 (6H), singlet at δ 2.4 (2H)

Identify the compound.

**Mark Scheme:**
- Mr = 72 confirms C₄H₈O [1]
- m/z = 43 = loss of 29 (CHO) OR CH₃CO⁺ fragment [1]
- IR 1715 cm⁻¹: C=O (ketone) [1]
- NMR singlet at δ 2.1 (6H): two equivalent CH₃ groups [1]
- NMR singlet at δ 2.4 (2H): CH₂ between carbonyls [1]
- Structure: CH₃COCH₂COCH₃ / pentan-2,4-dione OR butanone (CH₃COCH₂CH₃) [1]
  (Accept butanone - 6H singlet would be 2 × CH₃)
  Actually: This is butanone. δ 2.1 (3H, CH₃CO), δ 2.4 (2H, CH₂), need another peak for CH₃

---

### SYNOPTIC EXAMPLE [8 marks]

**Question:** A student investigates the enthalpy change for the neutralisation of
ethanoic acid with sodium hydroxide.

25.0 cm³ of 1.00 mol dm⁻³ ethanoic acid was placed in a polystyrene cup.
25.0 cm³ of 1.00 mol dm⁻³ sodium hydroxide at the same temperature was added.
The temperature rose from 22.0°C to 28.5°C.

(a) Calculate the enthalpy of neutralisation. [4]
(b) The accepted value is -56.1 kJ mol⁻¹. Suggest why the experimental value
    differs from this. [2]
(c) Suggest an improvement to obtain a more accurate result. [2]

**Mark Scheme:**
(a) q = mcΔT = 50 × 4.18 × 6.5 = 1358.5 J [1]
    n(acid) = 0.025 × 1.00 = 0.025 mol [1]
    ΔH = -1358.5/0.025 = -54340 J mol⁻¹ [1]
    ΔH = **-54.3 kJ mol⁻¹** [1]

(b) Heat lost to surroundings [1]
    Ethanoic acid is a weak acid so not fully dissociated;
    some energy used to complete dissociation [1]

(c) Use a lid/insulation on the cup [1]
    Plot cooling curve and extrapolate to find true ΔT [1]
    OR use more accurate thermometer / data logger [1]
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY ORGANIC MECHANISMS
// ============================================================================

const EDEXCEL_CHEMISTRY_ORGANIC_MECHANISMS = `## Edexcel A-Level Chemistry Organic Mechanisms

All mechanisms require correct curly arrows showing electron pair movement.

### FREE RADICAL SUBSTITUTION (Alkanes with Halogens)
Example: CH₄ + Cl₂ → CH₃Cl + HCl (UV light)

**Initiation:**
Cl-Cl → 2Cl•
(Homolytic fission - each atom gets one electron)

**Propagation (chain steps):**
Step 1: Cl• + CH₄ → CH₃• + HCl
Step 2: CH₃• + Cl₂ → CH₃Cl + Cl•
(Radical regenerated - chain continues)

**Termination:**
Cl• + Cl• → Cl₂
CH₃• + Cl• → CH₃Cl
CH₃• + CH₃• → C₂H₆

**Mark Scheme Points:**
- Single-headed (fish-hook) arrows for radical mechanisms [1]
- Initiation with UV light / homolytic fission [1]
- Two propagation steps [1]
- Termination examples [1]

---

### ELECTROPHILIC ADDITION (Alkenes)

**1. Addition of HBr to Propene**
CH₃CH=CH₂ + HBr → CH₃CHBrCH₃ (major product)

Mechanism:
- Curly arrow from C=C π bond to H of H-Br [1]
- Curly arrow from H-Br bond to Br [1]
- Carbocation intermediate forms (CH₃CH⁺CH₃ more stable than CH₃CH₂CH₂⁺) [1]
- Curly arrow from Br⁻ to carbocation carbon [1]

**Markovnikov's Rule:** H adds to carbon with MORE hydrogens

**2. Addition of Br₂ to Ethene (test for unsaturation)**
CH₂=CH₂ + Br₂ → CH₂BrCH₂Br

Mechanism:
- Curly arrow from C=C to Br of Br-Br [1]
- Curly arrow from Br-Br bond to terminal Br [1]
- Cyclic bromonium ion intermediate [1]
- Curly arrow from Br⁻ to carbocation from opposite side [1]

---

### NUCLEOPHILIC SUBSTITUTION (Halogenoalkanes)

**SN2 Mechanism (Primary halogenoalkanes)**
Example: CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻

Mechanism:
- Curly arrow from lone pair on OH⁻ to δ+ carbon [1]
- Curly arrow from C-Br bond to Br [1]
- One-step mechanism / transition state shown [1]
- Inversion of stereochemistry [1]

**SN1 Mechanism (Tertiary halogenoalkanes)**
Example: (CH₃)₃CBr + OH⁻ → (CH₃)₃COH + Br⁻

Mechanism:
Step 1: C-Br bond breaks heterolytically forming carbocation [1]
Step 2: OH⁻ attacks carbocation [1]
- Two-step mechanism [1]
- Tertiary carbocation is stable (3 alkyl groups donate electrons) [1]

---

### ELIMINATION (Halogenoalkanes with hot ethanolic KOH)
Example: CH₃CH₂Br + KOH → CH₂=CH₂ + KBr + H₂O
Conditions: hot ethanolic KOH / reflux

Mechanism:
- Curly arrow from OH⁻ to H on carbon adjacent to C-Br [1]
- Curly arrow from C-H bond to form C=C [1]
- Curly arrow from C-Br bond to Br [1]
- Produces alkene + HBr (as KBr + H₂O) [1]

---

### NUCLEOPHILIC ADDITION (Aldehydes/Ketones with HCN)
Example: CH₃COCH₃ + HCN → (CH₃)₂C(OH)CN

Mechanism:
- CN⁻ shown as nucleophile (from NaCN + dilute H₂SO₄) [1]
- Curly arrow from lone pair on CN⁻ to δ+ carbonyl carbon [1]
- Curly arrow from C=O π bond to oxygen [1]
- Tetrahedral intermediate with O⁻ [1]
- Curly arrow showing H⁺ (from HCN) protonating O⁻ [1]
- Product: 2-hydroxypropanenitrile (cyanohydrin) [1]

**Important:** Must show δ+ on C and δ- on O of carbonyl

---

### NUCLEOPHILIC ADDITION-ELIMINATION (Acyl Chlorides)

**With Alcohols (Esterification):**
CH₃COCl + CH₃OH → CH₃COOCH₃ + HCl

Mechanism:
- Curly arrow from O of alcohol to δ+ carbonyl carbon [1]
- Tetrahedral intermediate with positive charge on O [1]
- Curly arrow showing C-Cl bond breaking [1]
- Loss of H⁺ to form ester [1]

**With Ammonia (Amide formation):**
CH₃COCl + 2NH₃ → CH₃CONH₂ + NH₄Cl

Mechanism:
- Lone pair on N of NH₃ attacks carbonyl carbon [1]
- Cl leaves as chloride ion [1]
- H⁺ transferred to second NH₃ molecule [1]

---

### ELECTROPHILIC SUBSTITUTION (Benzene)

**1. Nitration**
C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O
Conditions: conc HNO₃ + conc H₂SO₄, 50°C

Generation of electrophile:
HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻

Mechanism:
- Curly arrow from benzene ring to NO₂⁺ [1]
- Arenium ion (cyclohexadienyl cation) drawn with + charge [1]
- Curly arrow from C-H bond back into ring [1]
- H⁺ lost to regenerate aromatic system [1]

**2. Halogenation**
C₆H₆ + Br₂ → C₆H₅Br + HBr
Catalyst: FeBr₃ or AlBr₃

Generation of electrophile:
Br₂ + FeBr₃ → Br⁺ + FeBr₄⁻

Mechanism similar to nitration with Br⁺ as electrophile

**3. Friedel-Crafts Alkylation**
C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl
Catalyst: AlCl₃

Generation of electrophile:
CH₃Cl + AlCl₃ → CH₃⁺ + AlCl₄⁻

**4. Friedel-Crafts Acylation**
C₆H₆ + CH₃COCl → C₆H₅COCH₃ + HCl
Catalyst: AlCl₃

Generation of electrophile:
CH₃COCl + AlCl₃ → CH₃CO⁺ + AlCl₄⁻

---

### MECHANISM SUMMARY TABLE

| Type | Example Reaction | Nucleophile/Electrophile |
|------|-----------------|-------------------------|
| Free radical substitution | CH₄ + Cl₂ | Cl• radicals |
| Electrophilic addition | C₂H₄ + HBr | H⁺ (electrophile) |
| Nucleophilic substitution (SN1/SN2) | C₂H₅Br + OH⁻ | OH⁻ (nucleophile) |
| Elimination | C₂H₅Br + OH⁻ (hot ethanol) | OH⁻ |
| Nucleophilic addition | CH₃CHO + HCN | CN⁻ (nucleophile) |
| Addition-elimination | CH₃COCl + NH₃ | NH₃ (nucleophile) |
| Electrophilic substitution | C₆H₆ + NO₂⁺ | NO₂⁺ (electrophile) |
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY COMMON MISCONCEPTIONS
// ============================================================================

const EDEXCEL_CHEMISTRY_COMMON_MISCONCEPTIONS = `## Edexcel A-Level Chemistry Common Misconceptions

### TOPIC 1: ATOMIC STRUCTURE

| Misconception | Correct Understanding |
|--------------|----------------------|
| Electrons orbit the nucleus in fixed paths | Electrons are in orbitals (probability regions), not fixed orbits |
| All isotopes are radioactive | Most isotopes are stable; only some are radioactive |
| Mass number = atomic mass | Mass number is for one isotope; Ar is weighted average |
| First ionisation energy always decreases across a period | There are dips at Groups 3 and 6 due to subshell structure |

---

### TOPIC 2: BONDING

| Misconception | Correct Understanding |
|--------------|----------------------|
| Ionic compounds always have high melting points | Some ionic compounds have relatively low m.p. (e.g., LiI) |
| Diamond is the hardest substance | Diamond is hardest natural substance; some synthetic materials are harder |
| Covalent bonds are always weaker than ionic | Bond strength depends on the specific bond; C-C is very strong |
| Hydrogen bonds are actual bonds | Hydrogen bonds are intermolecular attractions, not true bonds |
| All molecules with O-H have hydrogen bonding | Need O-H/N-H/F-H bonded to F/O/N on another molecule |

---

### TOPIC 5: CALCULATIONS

| Misconception | Correct Understanding |
|--------------|----------------------|
| Concentration always equals molarity | Concentration can be in g dm⁻³ or mol dm⁻³ |
| In titrations, volumes are always 25 cm³ | Read the question - volumes vary |
| Molar volume is always 24 dm³ | 24 dm³ mol⁻¹ is at RTP (298K, 101kPa); different at STP |
| Atom economy = percentage yield | Atom economy is theoretical; yield is experimental |

---

### TOPIC 6: ORGANIC CHEMISTRY

| Misconception | Correct Understanding |
|--------------|----------------------|
| Primary/secondary/tertiary refers to carbon chain position | It refers to how many C atoms are attached to the functional group carbon |
| Alkenes are more reactive because C=C is stronger | Reactivity is due to π bond electron density attracting electrophiles |
| E/Z isomers are the same as cis/trans | E/Z uses priority rules; cis/trans only for simple cases |
| All halogenoalkanes react at the same rate | Rate depends on C-X bond strength: iodo > bromo > chloro |

---

### TOPIC 8: ENERGETICS

| Misconception | Correct Understanding |
|--------------|----------------------|
| Exothermic reactions happen spontaneously | Spontaneity depends on ΔG (both ΔH and ΔS) |
| Bond breaking releases energy | Bond breaking is ALWAYS endothermic |
| Activation energy is the energy needed to break bonds | Ea is the minimum energy for a successful collision |
| ΔH = 0 means no reaction occurs | ΔH = 0 is possible (e.g., very slightly exothermic) |

---

### TOPIC 9/16: KINETICS

| Misconception | Correct Understanding |
|--------------|----------------------|
| Catalysts are used up in reactions | Catalysts are regenerated; not consumed |
| Increasing temperature always doubles the rate | Rate increase depends on Ea; "doubles per 10°C" is a rough rule |
| Rate = k | Rate depends on concentrations; k is the rate constant |
| Order = coefficient in balanced equation | Order must be determined experimentally |
| Zero order means no reaction | Zero order means rate is independent of that reactant's concentration |

---

### TOPIC 10/11: EQUILIBRIA

| Misconception | Correct Understanding |
|--------------|----------------------|
| Equilibrium means concentrations are equal | Equilibrium means rates are equal; concentrations often unequal |
| Adding a catalyst shifts equilibrium | Catalysts speed up both forward and reverse reactions equally |
| K changes when concentration changes | K only changes with temperature |
| Increasing pressure always shifts equilibrium | Only if there's a difference in moles of gas |

---

### TOPIC 12: ACIDS AND BASES

| Misconception | Correct Understanding |
|--------------|----------------------|
| Strong acids have high pH | Strong acids have LOW pH (high [H⁺]) |
| pH 7 is always neutral | Only at 25°C; Kw changes with temperature |
| All weak acids have the same Ka | Ka varies widely between different weak acids |
| Buffers keep pH exactly constant | Buffers RESIST pH change; small changes still occur |
| Adding water to a buffer dilutes the pH | pH of buffer stays approximately constant on dilution |

---

### TOPIC 14: ELECTROCHEMISTRY

| Misconception | Correct Understanding |
|--------------|----------------------|
| Positive E° means oxidation occurs | Positive E° means the half-cell is MORE EASILY REDUCED |
| The more reactive metal is always the anode | In an electrochemical cell, more reactive = more negative E° = anode |
| EMF is the same as potential difference | EMF is for zero current; PD allows for internal resistance |

---

### TOPIC 15: TRANSITION METALS

| Misconception | Correct Understanding |
|--------------|----------------------|
| All d-block elements are transition metals | Zn and Sc are not transition metals (no partially filled d orbitals in common ions) |
| Transition metal compounds are always coloured | Some complexes are colourless (e.g., [Zn(H₂O)₆]²⁺) |
| Colour depends only on the metal | Colour depends on metal, oxidation state, and ligands |
| All ligand exchanges are ligand substitution | Some involve coordination number changes |

---

### TOPIC 18: AROMATIC CHEMISTRY

| Misconception | Correct Understanding |
|--------------|----------------------|
| Benzene should react by addition | Benzene undergoes substitution to maintain stability |
| Delocalised electrons are in the plane of the ring | Delocalised electrons are above and below the plane |
| Nitration occurs at any temperature | Temperature must be controlled (50°C) to avoid di/tri-nitration |

---

### PRACTICAL SKILLS

| Misconception | Correct Understanding |
|--------------|----------------------|
| Burette reads from bottom to top | Burettes read from top to bottom (0 at top) |
| Pipettes always measure 25 cm³ | Pipettes come in various sizes |
| More decimal places = more accurate | Accuracy depends on the instrument, not the display |
| Random errors can be eliminated | Random errors can be reduced but not eliminated |
| Repeat readings remove systematic errors | Repeat readings reduce random errors, not systematic |
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY SYNOPTIC LINKS
// ============================================================================

const EDEXCEL_CHEMISTRY_SYNOPTIC_LINKS = `## Edexcel A-Level Chemistry Synoptic Links

Paper 3 specifically tests the ability to link concepts across topics. Here are key
synoptic connections that frequently appear in exam questions.

### PHYSICAL CHEMISTRY LINKS

**Energetics ↔ Equilibria ↔ Kinetics**
| Connection | Example Question |
|------------|-----------------|
| ΔH and equilibrium position | Why does increasing T favour endothermic direction? |
| Ea and rate | How does Ea affect temperature sensitivity of rate? |
| ΔG and equilibrium | When ΔG = 0, system is at equilibrium |
| Catalyst effect | Lowers Ea but doesn't affect K or ΔH |

**Energetics ↔ Bonding ↔ Structure**
| Connection | Example Question |
|------------|-----------------|
| Bond enthalpies and structure | Why is graphite lubricating? (weak interlayer forces) |
| Lattice enthalpy and ionic radius | Why is lattice enthalpy of NaF > NaCl? |
| Intermolecular forces and boiling points | Explain b.p. trends in Group 7 |

**Acids/Bases ↔ Equilibria ↔ Buffers**
| Connection | Example Question |
|------------|-----------------|
| Ka and weak acid pH | Calculate pH from Ka |
| Buffer capacity | What determines buffer effectiveness? |
| Kw and temperature | Why does pH of neutral water change with T? |

---

### INORGANIC CHEMISTRY LINKS

**Atomic Structure ↔ Periodicity ↔ Group Trends**
| Connection | Example Question |
|------------|-----------------|
| Electron config and reactivity | Why does reactivity increase down Group 1? |
| Shielding and ionisation energy | Explain IE trend across Period 3 |
| Electronegativity and bonding | Why is AlCl₃ covalent but NaCl ionic? |

**Redox ↔ Electrode Potentials ↔ Transition Metals**
| Connection | Example Question |
|------------|-----------------|
| E° and reactivity series | Predict which reactions will occur |
| Variable oxidation states | Why can Fe exist as Fe²⁺ and Fe³⁺? |
| d-d transitions and colour | Explain colour changes in redox reactions |

**Transition Metals ↔ Kinetics ↔ Catalysis**
| Connection | Example Question |
|------------|-----------------|
| Variable oxidation states and catalysis | How does V₂O₅ catalyse SO₂ oxidation? |
| Complex formation and ligand strength | Why do different ligands affect catalytic activity? |

---

### ORGANIC CHEMISTRY LINKS

**Structure ↔ Reactivity ↔ Mechanisms**
| Connection | Example Question |
|------------|-----------------|
| Bond polarity and nucleophilic attack | Why is carbonyl C attacked by nucleophiles? |
| Carbocation stability | Why does Markovnikov addition occur? |
| Aromatic stability | Why substitution not addition for benzene? |

**Organic Chemistry ↔ Analysis ↔ Spectroscopy**
| Connection | Example Question |
|------------|-----------------|
| Functional groups and IR peaks | Identify functional groups from spectrum |
| Structure and NMR pattern | Deduce structure from ¹H NMR |
| Fragmentation patterns | Identify molecular ion and key fragments |

**Synthesis ↔ Multiple Topics**
| Pathway | Topics Linked |
|---------|---------------|
| Alkane → Halogenoalkane → Alcohol → Aldehyde → Carboxylic Acid | Free radical, nucleophilic substitution, oxidation |
| Benzene → Nitrobenzene → Phenylamine | Electrophilic substitution, reduction |
| Alkene → Alcohol → Ester | Electrophilic addition, esterification |

---

### PRACTICAL SKILLS LINKS

**Core Practicals ↔ Multiple Topics**
| Core Practical | Topics Linked |
|----------------|---------------|
| CP3 (Titration) | Amounts, acids/bases, equilibria |
| CP8 (Hess's Law) | Energetics, practical skills, error analysis |
| CP11 (Redox Titration) | Redox, transition metals, calculations |
| CP14 (Activation Energy) | Kinetics, Arrhenius, graph skills |
| CP16 (Aspirin) | Organic synthesis, yield calculations, purification |

**Error Analysis ↔ All Practical Topics**
- Calculating percentage uncertainty
- Identifying systematic vs random errors
- Suggesting improvements
- Evaluating experimental design

---

### COMMON SYNOPTIC QUESTION THEMES

**1. Industrial Processes (Haber, Contact)**
Links: Equilibria, kinetics, energetics, catalysis, environmental chemistry

**2. Environmental Chemistry**
Links: Redox, energetics, organic chemistry (CFCs, greenhouse gases)

**3. Electrochemical Cells and Fuel Cells**
Links: Redox, electrode potentials, energetics (ΔG), environmental applications

**4. Transition Metal Catalysis**
Links: d-orbitals, variable oxidation states, kinetics, industrial applications

**5. Organic Synthesis Routes**
Links: Multiple organic reactions, yield calculations, analytical techniques

**6. Biological Chemistry**
Links: Amino acids, proteins, enzymes (biological catalysts), buffers

---

### SYNOPTIC QUESTION STRATEGIES

1. **Identify all relevant topics** - Read question carefully for topic overlap
2. **Use correct terminology** from each topic area
3. **Link cause and effect** across different concepts
4. **Apply quantitative skills** where possible
5. **Consider practical aspects** - sources of error, improvements
6. **Structure extended answers** to cover all linked concepts
`;

// ============================================================================
// EDEXCEL A-LEVEL CHEMISTRY TOPIC-SPECIFIC GUIDANCE (EXPANDED)
// ============================================================================

const EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-alevel-chemistry-atomic-structure': `
## Topic 1: Atomic Structure and the Periodic Table (Paper 1)

### Specification Content:
1.1 Atomic structure (protons, neutrons, electrons)
1.2 Relative masses and charges
1.3 Mass spectrometry (TOF mass spectrometer)
1.4 Electron configurations (s, p, d notation)
1.5 Ionisation energies and trends

### Key Concepts:
- **Mass Spectrometry:** TOF principles, calculating Ar from abundances
- **Electron Configuration:** Aufbau principle, Hund's rule, Pauli exclusion
- **Ionisation Energy:** Definition, trends across periods/down groups
- **Evidence for Subshells:** Successive IE data analysis

### Common Question Types:
- Calculate Ar from mass spectrum data [2-3 marks]
- Write electron configurations [1-2 marks]
- Explain ionisation energy trends [3-4 marks]
- Identify anomalies in IE trends (Groups 3, 6) [3-4 marks]

### Edexcel Exam Tips:
- Always show working in Ar calculations
- Use "shielding" and "nuclear charge" in IE explanations
- Remember 4s fills before 3d but empties first
- Explain Group 3 dip (3p vs 3s) and Group 6 dip (paired vs unpaired)

### Links to Other Topics:
- Topic 2: Electron configurations explain bonding patterns
- Topic 4: Periodic trends in Group 2 and 7
- Topic 15: Transition metal electron configurations
`,

  'edexcel-alevel-chemistry-bonding': `
## Topic 2: Bonding and Structure (Papers 1 and 2)

### Specification Content:
2.1 Ionic bonding and lattice structures
2.2 Covalent bonding and dot-cross diagrams
2.3 Metallic bonding
2.4 VSEPR and shapes of molecules
2.5 Bond polarity and electronegativity
2.6 Intermolecular forces (London, dipole-dipole, H-bonding)
2.7 Giant covalent structures

### Key Concepts:
- **VSEPR Theory:** Predicting shapes from electron pairs
- **Shapes:** Linear (180°), trigonal planar (120°), tetrahedral (109.5°), etc.
- **Electronegativity:** Pauling scale, polar bonds
- **Intermolecular Forces:** Strength order: H-bonding > dipole-dipole > London

### Common Question Types:
- Draw dot-cross diagrams [2 marks]
- Predict and explain molecular shapes [3 marks]
- Explain properties from bonding [4-6 marks]
- Compare boiling points using IMFs [3-4 marks]

### Edexcel Exam Tips:
- Always count ALL electron pairs (including lone pairs)
- Lone pairs reduce bond angles by ~2.5° each
- Hydrogen bonding requires N-H, O-H, or F-H bonded to N, O, or F
- Giant covalent structures have no discrete molecules

### Links to Other Topics:
- Topic 6: Molecular shapes affect reactivity
- Topic 8: Bond enthalpies in energy calculations
- Topic 13: Lattice enthalpy depends on ionic radii
`,

  'edexcel-alevel-chemistry-redox1': `
## Topic 3: Redox I (Papers 1 and 2)

### Specification Content:
3.1 Oxidation states and rules
3.2 Oxidation, reduction, and redox
3.3 Writing half-equations
3.4 Constructing full ionic equations

### Key Concepts:
- **Oxidation:** Loss of electrons, increase in oxidation state
- **Reduction:** Gain of electrons, decrease in oxidation state
- **Oxidation State Rules:** Elements = 0, O = -2 (usually), H = +1 (usually)
- **Half-Equations:** Balance atoms, then electrons

### Common Question Types:
- Assign oxidation states [1-2 marks]
- Identify oxidising/reducing agents [2 marks]
- Write and balance half-equations [2-3 marks]
- Construct ionic equations from half-equations [3 marks]

### Edexcel Exam Tips:
- Sum of oxidation states = overall charge
- In peroxides, O = -1
- In metal hydrides, H = -1
- Balance half-equations: atoms first, then charge with electrons

### Links to Other Topics:
- Topic 4: Group 7 displacement reactions
- Topic 14: Electrode potentials and redox
- Topic 15: Transition metal redox reactions
`,

  'edexcel-alevel-chemistry-inorganic1': `
## Topic 4: Inorganic Chemistry and the Periodic Table (Paper 1)

### Specification Content:
4.1 Group 2 elements and compounds
4.2 Group 2 reactions with water and oxygen
4.3 Group 2 hydroxide and sulfate solubility trends
4.4 Group 7 elements and trends
4.5 Halogen displacement reactions
4.6 Halide ion reactions with H₂SO₄
4.7 Tests for halide ions

### Key Concepts:
- **Group 2 Trends:** Reactivity increases down group
- **Solubility Trends:** Hydroxides increase, sulfates decrease down group
- **Group 7:** Reactivity decreases down group
- **Halide Reactions with H₂SO₄:** Different products for Cl⁻, Br⁻, I⁻

### Common Question Types:
- Write equations for Group 2 reactions [2 marks]
- Explain solubility trends [3 marks]
- Predict halogen displacement reactions [2 marks]
- Explain halide reactions with H₂SO₄ [4-5 marks]
- Describe tests for halide ions [3 marks]

### Edexcel Exam Tips:
- Group 2 reactivity: larger atoms lose electrons more easily
- Chlorides: only HCl produced (not oxidised)
- Bromides: HBr + Br₂ + SO₂ (partially oxidised)
- Iodides: HI + I₂ + H₂S + S (fully oxidised)

### Links to Other Topics:
- Topic 1: Atomic structure explains trends
- Topic 3: Redox in halide reactions
- Topic 5: Calculations in Group 2 reactions
`,

  'edexcel-alevel-chemistry-amounts': `
## Topic 5: Formulae, Equations and Amounts of Substance (Papers 1, 2, 3)

### Specification Content:
5.1 Relative masses (Ar, Mr)
5.2 The mole and Avogadro's constant
5.3 Empirical and molecular formulae
5.4 Balanced equations and state symbols
5.5 Moles of gases and molar volume
5.6 Ideal gas equation pV = nRT
5.7 Concentration and solution calculations
5.8 Titrations
5.9 Percentage yield and atom economy

### Key Concepts:
- **Mole Calculations:** n = m/M, n = cV, n = V/24 (at RTP)
- **Ideal Gas:** pV = nRT (p in Pa, V in m³, T in K)
- **Titrations:** Use mole ratios from balanced equation
- **Atom Economy:** (Mr useful product / Σ Mr all products) × 100

### Common Question Types:
- Multi-step mole calculations [4-6 marks]
- Titration calculations [3-5 marks]
- Ideal gas calculations [3-4 marks]
- Percentage yield and atom economy [3-4 marks]
- Empirical formula from percentage composition [3 marks]

### Edexcel Exam Tips:
- Convert all units before using pV = nRT
- Show all working in multi-step calculations
- Titration: average concordant results only
- Limiting reagent determines theoretical yield

### Core Practicals:
- CP1: Molar volume of a gas
- CP2: Preparation of standard solution
- CP3: Acid-base titration

### Links to Other Topics:
- All topics require mole calculations
- Topic 8: Calculating ΔH from q = mcΔT
- Topic 12: pH and concentration calculations
`,

  'edexcel-alevel-chemistry-organic1': `
## Topic 6: Organic Chemistry I (Paper 2)

### Specification Content:
6.1 Nomenclature and isomerism
6.2 Structural and stereoisomerism (E/Z)
6.3 Alkanes: structure and reactions
6.4 Free radical substitution mechanism
6.5 Alkenes: structure and reactions
6.6 Electrophilic addition mechanism
6.7 Halogenoalkanes: reactions
6.8 Nucleophilic substitution (SN1, SN2)
6.9 Elimination reactions
6.10 Alcohols: reactions

### Key Concepts:
- **Nomenclature:** IUPAC naming rules
- **Isomerism:** Chain, position, functional group; E/Z geometric
- **Free Radical Substitution:** Initiation, propagation, termination
- **Electrophilic Addition:** π bond attacks electrophile
- **Nucleophilic Substitution:** SN1 (tertiary) vs SN2 (primary)

### Common Question Types:
- Draw and name isomers [3 marks]
- Write mechanisms with curly arrows [3-5 marks]
- State conditions and reagents [2 marks]
- Explain differences in reaction rates [3-4 marks]
- Predict products from given reactants [2 marks]

### Edexcel Exam Tips:
- Mechanisms must show curly arrows starting from bonds/lone pairs
- Include all intermediates and charges
- E/Z: use Cahn-Ingold-Prelog priority rules
- Know conditions for substitution vs elimination

### Core Practicals:
- CP4: Rates of hydrolysis of halogenoalkanes
- CP5: Oxidation of ethanol
- CP6: Chlorination of tertiary alcohol

### Links to Other Topics:
- Topic 7: Identifying products using spectroscopy
- Topic 9: Factors affecting reaction rates
- Topic 17/18: Extended organic reactions
`,

  'edexcel-alevel-chemistry-analysis1': `
## Topic 7: Modern Analytical Techniques I (Paper 2)

### Specification Content:
7.1 Mass spectrometry
7.2 Molecular ion peak (M⁺)
7.3 Fragmentation patterns
7.4 Infrared spectroscopy
7.5 Characteristic IR absorptions

### Key Concepts:
- **Mass Spectrometry:** M⁺ gives Mr, fragments indicate structure
- **Common Fragments:** 15 (CH₃), 29 (CHO/C₂H₅), 45 (OC₂H₅)
- **IR Spectroscopy:** Identify functional groups from absorptions
- **Key Absorptions:** O-H broad (3200-3600), C=O sharp (1680-1750)

### Common Question Types:
- Identify compound from mass spectrum [3-4 marks]
- Explain fragmentation pattern [2-3 marks]
- Identify functional groups from IR spectrum [2-3 marks]
- Use spectra to confirm structure [4-5 marks]

### Edexcel Exam Tips:
- M⁺ peak gives molecular mass
- M+1 peak indicates carbon content
- Broad O-H distinguishes alcohol from aldehyde
- Very broad O-H (2500-3300) indicates carboxylic acid

### Links to Other Topics:
- Topic 6: Identifying organic products
- Topic 19: Combined spectroscopy (NMR, IR, MS)
`,

  'edexcel-alevel-chemistry-energetics1': `
## Topic 8: Energetics I (Paper 1)

### Specification Content:
8.1 Enthalpy changes and definitions
8.2 Standard conditions
8.3 Calorimetry: q = mcΔT
8.4 Hess's Law
8.5 Bond enthalpy calculations
8.6 Enthalpy cycles

### Key Concepts:
- **ΔH Definitions:** Formation, combustion, neutralisation
- **Hess's Law:** Enthalpy change is independent of route
- **Calorimetry:** q = mcΔT, ΔH = -q/n
- **Bond Enthalpies:** ΔH = bonds broken - bonds formed

### Common Question Types:
- Calorimetry calculations [3-4 marks]
- Hess's Law cycles [4-5 marks]
- Bond enthalpy calculations [3-4 marks]
- Explain why values differ from data book [2 marks]

### Edexcel Exam Tips:
- ΔH is NEGATIVE for exothermic reactions
- Bond enthalpies are averages (less accurate than Hess)
- Always include sign and units (kJ mol⁻¹)
- Extrapolation improves calorimetry accuracy

### Core Practicals:
- CP8: Determining ΔH using Hess's Law

### Links to Other Topics:
- Topic 5: Mole calculations in energy problems
- Topic 10: Effect of temperature on equilibrium
- Topic 13: Born-Haber cycles, ΔG
`,

  'edexcel-alevel-chemistry-kinetics1': `
## Topic 9: Kinetics I (Paper 2)

### Specification Content:
9.1 Collision theory
9.2 Activation energy
9.3 Maxwell-Boltzmann distribution
9.4 Factors affecting rate
9.5 Effect of catalysts

### Key Concepts:
- **Collision Theory:** Rate depends on collision frequency and energy
- **Activation Energy:** Minimum energy for successful collision
- **Maxwell-Boltzmann:** Shows distribution of molecular energies
- **Catalyst:** Provides alternative route with lower Ea

### Common Question Types:
- Draw and interpret M-B distributions [3-4 marks]
- Explain effect of temperature on rate [3-4 marks]
- Explain how catalysts work [3 marks]
- Describe factors affecting rate [2-3 marks per factor]

### Edexcel Exam Tips:
- M-B curve: area under curve is constant
- Temperature shifts curve right AND spreads it out
- Catalyst does NOT change position of equilibrium
- More molecules exceed Ea = faster rate

### Links to Other Topics:
- Topic 8: Activation energy in energy profiles
- Topic 15: Transition metal catalysts
- Topic 16: Rate equations and Arrhenius
`,

  'edexcel-alevel-chemistry-equilibrium1': `
## Topic 10: Equilibrium I (Paper 1)

### Specification Content:
10.1 Dynamic equilibrium
10.2 Le Chatelier's principle
10.3 Equilibrium constant Kc
10.4 Kc expressions and calculations
10.5 Effect of conditions on position

### Key Concepts:
- **Dynamic Equilibrium:** Forward and reverse rates equal
- **Le Chatelier:** System opposes applied change
- **Kc Expression:** [products]/[reactants], powers = coefficients
- **Kc Value:** Only changes with temperature

### Common Question Types:
- Write Kc expressions [1-2 marks]
- Calculate Kc from equilibrium data [4-5 marks]
- Predict effect of changing conditions [3-4 marks]
- Explain industrial process conditions [4-6 marks]

### Edexcel Exam Tips:
- Kc has no units if Σ powers are equal
- Concentration changes don't affect Kc value
- Catalyst speeds up attainment of equilibrium only
- Include [products] in numerator, [reactants] in denominator

### Links to Other Topics:
- Topic 11: Kp for gaseous equilibria
- Topic 12: Ka for acid-base equilibria
- Topic 8/13: Enthalpy and feasibility
`,

  'edexcel-alevel-chemistry-equilibrium2': `
## Topic 11: Equilibrium II (Paper 1)

### Specification Content:
11.1 Partial pressures
11.2 Mole fractions
11.3 Kp expressions and calculations
11.4 Relationship between Kc and Kp
11.5 Effect of pressure on Kp

### Key Concepts:
- **Partial Pressure:** pA = xA × P(total)
- **Mole Fraction:** xA = nA / n(total)
- **Kp Expression:** Uses partial pressures
- **Kp Units:** Depend on Δn (moles gas products - reactants)

### Common Question Types:
- Calculate partial pressures [2-3 marks]
- Calculate Kp from equilibrium data [4-5 marks]
- State units of Kp [1 mark]
- Explain effect of pressure on equilibrium [3 marks]

### Edexcel Exam Tips:
- Kp = Kc(RT)^Δn for conversion
- Pressure change doesn't affect Kp value
- Include units in all Kp answers
- ICE tables help organise calculations

### Links to Other Topics:
- Topic 5: Mole calculations
- Topic 10: Le Chatelier's principle
`,

  'edexcel-alevel-chemistry-acids-bases': `
## Topic 12: Acid-Base Equilibria (Paper 1)

### Specification Content:
12.1 Brønsted-Lowry theory
12.2 Strong and weak acids/bases
12.3 pH calculations (strong and weak)
12.4 Ka and pKa
12.5 Kw and pKw
12.6 Buffer solutions
12.7 pH curves and indicators

### Key Concepts:
- **pH:** -log₁₀[H⁺]
- **Weak Acid:** Ka = [H⁺]²/[HA] (assuming [H⁺] << [HA])
- **Buffer:** Resists pH change; made from weak acid + conjugate base
- **Henderson-Hasselbalch:** pH = pKa + log([A⁻]/[HA])

### Common Question Types:
- Calculate pH of strong/weak acids [2-4 marks]
- Calculate pH of buffer solutions [3-4 marks]
- Explain how buffers work [3 marks]
- Sketch and interpret titration curves [4-5 marks]
- Choose appropriate indicator [2 marks]

### Edexcel Exam Tips:
- Strong acid pH: -log(concentration)
- Weak acid pH: use Ka approximation
- At half-equivalence: pH = pKa
- Indicator range must include equivalence point pH

### Core Practicals:
- CP9: Finding Ka for weak acid

### Links to Other Topics:
- Topic 10/11: Equilibrium concepts apply to Ka
- Topic 5: Titration calculations
`,

  'edexcel-alevel-chemistry-energetics2': `
## Topic 13: Energetics II (Paper 1)

### Specification Content:
13.1 Born-Haber cycles
13.2 Lattice enthalpy
13.3 Enthalpy of atomisation
13.4 Electron affinity
13.5 Enthalpy of solution and hydration
13.6 Entropy and ΔS
13.7 Gibbs free energy and ΔG

### Key Concepts:
- **Born-Haber Cycle:** Applies Hess's Law to ionic compound formation
- **Lattice Enthalpy:** Energy released when gaseous ions form lattice
- **Entropy:** Measure of disorder; ΔS = Σ S°(products) - Σ S°(reactants)
- **Gibbs Free Energy:** ΔG = ΔH - TΔS; spontaneous if ΔG < 0

### Common Question Types:
- Born-Haber cycle calculations [5-6 marks]
- Calculate entropy change [2-3 marks]
- Calculate ΔG and predict spontaneity [3-4 marks]
- Find temperature at which ΔG = 0 [2 marks]
- Explain discrepancy in lattice enthalpy values [2-3 marks]

### Edexcel Exam Tips:
- Convert ΔS to J K⁻¹ mol⁻¹ before using in ΔG formula
- Experimental lattice enthalpy > theoretical if covalent character
- ΔG = 0 at equilibrium temperature
- Entropy increases: solid → liquid → gas

### Links to Other Topics:
- Topic 2: Ionic bonding and lattice structure
- Topic 8: Hess's Law principles
- Topic 14: ΔG and cell EMF
`,

  'edexcel-alevel-chemistry-redox2': `
## Topic 14: Redox II (Paper 1)

### Specification Content:
14.1 Electrode potentials
14.2 Standard hydrogen electrode
14.3 Standard electrode potentials
14.4 Cell EMF calculations
14.5 Predicting reaction feasibility
14.6 Electrochemical cells

### Key Concepts:
- **Standard Electrode Potential:** E° measured vs SHE at standard conditions
- **Cell EMF:** E°cell = E°(cathode) - E°(anode) = E°(+) - E°(-)
- **Feasibility:** E°cell > 0 means reaction is feasible
- **Limitations:** Thermodynamic feasibility ≠ kinetic feasibility

### Common Question Types:
- Calculate cell EMF [2-3 marks]
- Predict feasibility of reactions [3-4 marks]
- Draw cell diagrams [2-3 marks]
- Explain limitations of E° predictions [2-3 marks]

### Edexcel Exam Tips:
- More positive E° = better oxidising agent
- Cell notation: anode | solution || solution | cathode
- Standard conditions: 298K, 1 mol dm⁻³, 100 kPa
- ΔG = -nFE°cell

### Core Practicals:
- CP10: Investigating electrochemical cells
- CP11: Redox titration

### Links to Other Topics:
- Topic 3: Redox principles
- Topic 13: ΔG calculations
- Topic 15: Transition metal redox
`,

  'edexcel-alevel-chemistry-transition-metals': `
## Topic 15: Transition Metals (Paper 1)

### Specification Content:
15.1 Transition metal definition
15.2 Electron configurations of d-block
15.3 Properties of transition metals
15.4 Complex ions and ligands
15.5 Types of ligands (mono, bi, poly-dentate)
15.6 d-d transitions and colour
15.7 Ligand exchange reactions
15.8 Transition metals as catalysts

### Key Concepts:
- **Definition:** d-block element with incomplete d-orbitals when ionised
- **Complex Ion:** Central metal ion with ligands attached by coordinate bonds
- **Colour:** d-d transitions absorb visible light
- **Ligand Exchange:** Occurs if new ligand bonds more strongly

### Common Question Types:
- Write formulae of complex ions [2 marks]
- Explain colour in terms of d-d transitions [3-4 marks]
- Write equations for ligand exchange [2 marks]
- Explain catalytic activity [3-4 marks]
- Describe tests for metal ions [3-4 marks]

### Edexcel Exam Tips:
- Zn and Sc are NOT transition metals
- Coordination number = total bonds to central metal
- Colour depends on metal, oxidation state, AND ligands
- Variable oxidation states enable catalysis

### Core Practicals:
- CP12: Preparation of transition metal complex

### Links to Other Topics:
- Topic 1: Electron configurations
- Topic 3/14: Redox reactions
- Topic 9/16: Catalysis and kinetics
`,

  'edexcel-alevel-chemistry-kinetics2': `
## Topic 16: Kinetics II (Paper 2)

### Specification Content:
16.1 Rate equations
16.2 Orders of reaction
16.3 Rate constant and units
16.4 Determining orders experimentally
16.5 Rate-determining step
16.6 Arrhenius equation
16.7 Effect of temperature on k

### Key Concepts:
- **Rate Equation:** Rate = k[A]ᵐ[B]ⁿ
- **Order:** Determined experimentally, NOT from stoichiometry
- **Arrhenius:** k = Ae⁻ᴱᵃ/ᴿᵀ; ln k = ln A - Eₐ/RT
- **Rate-Determining Step:** Slowest step; determines rate equation

### Common Question Types:
- Determine orders from initial rates data [4-5 marks]
- Calculate rate constant and units [2-3 marks]
- Calculate activation energy [4-5 marks]
- Deduce mechanism from rate equation [3-4 marks]

### Edexcel Exam Tips:
- Half-life constant only for first order
- Units of k depend on overall order
- Plot ln k vs 1/T: gradient = -Eₐ/R
- Species in rate equation must be in RDS

### Core Practicals:
- CP13: Iodine-propanone reaction
- CP14: Finding activation energy

### Links to Other Topics:
- Topic 9: Collision theory and M-B
- Topic 6/17: Organic reaction mechanisms
`,

  'edexcel-alevel-chemistry-organic2': `
## Topic 17: Organic Chemistry II (Paper 2)

### Specification Content:
17.1 Optical isomerism
17.2 Chiral centres
17.3 Aldehydes and ketones
17.4 Reduction with NaBH₄
17.5 Nucleophilic addition mechanism
17.6 Tests for aldehydes (Tollens', Fehling's)
17.7 Carboxylic acids and derivatives
17.8 Acyl chloride reactions

### Key Concepts:
- **Optical Isomerism:** Chiral carbon = 4 different groups attached
- **Nucleophilic Addition:** CN⁻ attacks δ+ carbonyl carbon
- **Aldehyde Tests:** Tollens' (silver mirror), Fehling's (red ppt)
- **Acyl Chlorides:** Very reactive; addition-elimination mechanism

### Common Question Types:
- Identify chiral centres [1-2 marks]
- Draw nucleophilic addition mechanism [3-4 marks]
- Describe tests to distinguish aldehydes/ketones [3-4 marks]
- Draw products of acyl chloride reactions [2 marks]
- Explain reactivity of acyl chlorides [2-3 marks]

### Edexcel Exam Tips:
- Reduction produces secondary alcohol from ketone, primary from aldehyde
- Cyanohydrin adds extra carbon (useful in synthesis)
- Acyl chlorides react at room temperature (no catalyst)
- Carboxylic acids need acid catalyst + reflux for esterification

### Links to Other Topics:
- Topic 6: Basic organic mechanisms
- Topic 7/19: Spectroscopy identification
- Topic 18: Further organic synthesis
`,

  'edexcel-alevel-chemistry-organic3': `
## Topic 18: Organic Chemistry III (Paper 2)

### Specification Content:
18.1 Benzene structure and stability
18.2 Electrophilic substitution mechanism
18.3 Nitration of benzene
18.4 Friedel-Crafts reactions
18.5 Phenol reactions
18.6 Amines: structure and basicity
18.7 Preparation of amines
18.8 Reactions of amines
18.9 Amino acids and peptides
18.10 Polymerisation (addition and condensation)
18.11 Organic synthesis routes

### Key Concepts:
- **Benzene Stability:** Delocalised π electrons make substitution favoured
- **Electrophilic Substitution:** Electrophile attacks ring, H⁺ lost
- **Amine Basicity:** Aliphatic > NH₃ > aromatic (due to delocalisation)
- **Condensation Polymers:** Polyesters, polyamides, peptides

### Common Question Types:
- Draw electrophilic substitution mechanisms [4-5 marks]
- Compare basicity of amines [3-4 marks]
- Draw structures of polymers [2-3 marks]
- Plan multi-step synthesis routes [5-6 marks]

### Edexcel Exam Tips:
- Generate electrophile first in mechanism
- Phenol more reactive than benzene (OH activates ring)
- Amino acids are zwitterions at isoelectric point
- Synthesis: work backwards from target molecule

### Core Practicals:
- CP16: Preparation of aspirin

### Links to Other Topics:
- Topic 2: Delocalisation in benzene
- Topic 6/17: Foundation organic reactions
- Topic 19: Identifying organic products
`,

  'edexcel-alevel-chemistry-analysis2': `
## Topic 19: Modern Analytical Techniques II (Paper 2)

### Specification Content:
19.1 ¹H NMR spectroscopy
19.2 Chemical shift and environment
19.3 Integration and peak ratios
19.4 Spin-spin coupling (splitting)
19.5 ¹³C NMR spectroscopy
19.6 Combined techniques
19.7 Chromatography (TLC, GC, HPLC)

### Key Concepts:
- **¹H NMR:** Number of peaks = H environments; integration = ratio
- **Splitting:** n+1 rule (n adjacent H gives n+1 peaks)
- **¹³C NMR:** Number of peaks = C environments; no splitting
- **Combined Analysis:** Use all techniques together

### Common Question Types:
- Predict NMR spectrum from structure [3-4 marks]
- Deduce structure from NMR data [4-6 marks]
- Explain splitting patterns [2-3 marks]
- Combined spectroscopy problems [6-8 marks]
- Calculate Rf values from TLC [2 marks]

### Edexcel Exam Tips:
- D₂O exchange removes O-H peak
- Equivalent H atoms give one peak
- Integration ratio = ratio of H atoms
- ¹³C NMR: CDCl₃ peak at δ 77 ppm (ignore in analysis)

### Core Practicals:
- CP15: Analysis of organic unknowns

### Links to Other Topics:
- Topic 7: MS and IR foundations
- All organic topics: Structure determination
`,
};

// ============================================================================
// PROMPT FUNCTIONS
// ============================================================================

export function getEdexcelALevelChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuide = {
    easy: 'AS standard, 2-3 marks, single concept, direct recall or straightforward application',
    medium: 'Full A-Level, 4-5 marks, combines multiple concepts, multi-step reasoning required',
    hard: 'Challenging A-Level, 6-8 marks, synoptic thinking across topics, unfamiliar contexts, requires extended analysis, evaluation or synthesis'
  };

  return `Generate an Edexcel A-Level Chemistry question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${EDEXCEL_ALEVEL_CHEMISTRY_COGNITIVE_CHALLENGE}
${topicGuidance}

${EDEXCEL_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Paper: ${topic.paperRestriction || 'Any'}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Chemistry specification.

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
- Match Edexcel exam style
- Use appropriate command words
- Include realistic chemistry context
- Provide clear mark allocation

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

export function getEdexcelALevelChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate a 6-mark extended response Edexcel A-Level Chemistry question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

Level Descriptors:
- Level 3 (5-6): Detailed, coherent, accurate
- Level 2 (3-4): Some detail, mostly accurate
- Level 1 (1-2): Basic points, limited structure

Respond with JSON:
{
  "content": "Extended response question",
  "solution": "Model Level 3 answer",
  "marks": 6,
  "markScheme": "Level descriptors and indicative content"
}`;
}

export function getEdexcelALevelChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry calculation question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Provide all necessary data
- Use realistic values
- ${difficulty === 'hard' ? 'Multi-step with unit conversions' : 'Clear calculation pathway'}

Respond with JSON:
{
  "content": "Calculation question with data",
  "solution": "Step-by-step working",
  "marks": <3-6>,
  "markScheme": "Equation [1], Substitution [1], Answer [1]"
}`;
}

export function getEdexcelALevelChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry explanation question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Respond with JSON:
{
  "content": "Explain/Describe question",
  "solution": "Full explanation",
  "marks": <2-5>,
  "markScheme": "Point-by-point marks"
}`;
}

export function getEdexcelALevelChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry graph/data question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Include graph description or data table with analysis questions.

Respond with JSON:
{
  "content": "Graph/data question",
  "solution": "Analysis with answers",
  "marks": <3-6>,
  "markScheme": "Reading, calculation, interpretation marks"
}`;
}

export function getEdexcelALevelChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry comparison question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Must require similarities AND differences.

Respond with JSON:
{
  "content": "Compare question",
  "solution": "Structured comparison",
  "marks": <2-6>,
  "markScheme": "Similarities and differences marked"
}`;
}

export function getEdexcelALevelChemistryMechanismPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry mechanism question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_ORGANIC_MECHANISMS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Correct curly arrows starting from bonds or lone pairs
- All intermediates shown with correct charges
- Describe in text where arrows go from/to
- Include partial charges (δ+/δ-) where relevant

Respond with JSON:
{
  "content": "Mechanism question",
  "solution": "Full mechanism with all steps described",
  "marks": <3-5>,
  "markScheme": "Curly arrows [1], intermediates [1], products [1]"
}`;
}

export function getEdexcelALevelChemistryPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry practical question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_CORE_PRACTICALS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Assess practical skills: planning, analysis, evaluation.

Respond with JSON:
{
  "content": "Practical question",
  "solution": "Complete answer",
  "marks": <3-6>,
  "markScheme": "Method, analysis, evaluation marks"
}`;
}

export function getEdexcelALevelChemistrySynopticPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry synoptic question (Paper 3 style).
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_SYNOPTIC_LINKS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Link concepts from at least 2 different topic areas
- Include both calculation and explanation elements
- Could include practical context
- Suitable for Paper 3 (synoptic paper)

Respond with JSON:
{
  "content": "Synoptic question with multiple parts",
  "solution": "Complete answer covering all linked topics",
  "marks": <6-10>,
  "markScheme": "Mark allocation for each part and topic area"
}`;
}

export function getEdexcelALevelChemistrySpectroscopyPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry spectroscopy/analysis question.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- ${difficulty === 'hard' ? 'Combined MS, IR, and NMR data' : 'Single technique (MS, IR, or NMR)'}
- Provide realistic spectral data
- Include structure deduction
- Use correct chemical terminology

Respond with JSON:
{
  "content": "Spectroscopy question with data",
  "solution": "Structure deduction with reasoning",
  "marks": <4-8>,
  "markScheme": "Identification of peaks [1 each], structure [1], reasoning [1]"
}`;
}

export function getEdexcelALevelChemistryMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Chemistry multiple choice question (Paper 1/2 Section A style).
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_COMMON_MISCONCEPTIONS}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Requirements:
- One correct answer and three plausible distractors
- Distractors should represent common misconceptions
- Question should test understanding, not just recall
- Include calculation if appropriate for topic

Respond with JSON:
{
  "content": "Question stem with 4 options (A, B, C, D)",
  "solution": "Correct answer with explanation of why each distractor is wrong",
  "marks": 1,
  "markScheme": "Correct answer: [X]"
}`;
}

export function getEdexcelALevelChemistryWorkedExamplePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel A-Level Chemistry question in the style of official past papers.
${EDEXCEL_ALEVEL_CHEMISTRY_PRINCIPLES}
${topicGuidance}

${EDEXCEL_CHEMISTRY_WORKED_EXAMPLES}

${EDEXCEL_CHEMISTRY_DATA_SHEET}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Match the style of Edexcel mark schemes
- Include appropriate context (industrial, environmental, biological)
- Use realistic data and scenarios
- Clear mark allocation

Respond with JSON:
{
  "content": "Question with appropriate mark allocation shown",
  "solution": "Model answer",
  "marks": <total marks>,
  "markScheme": "Detailed mark-by-mark allocation"
}`;
}
