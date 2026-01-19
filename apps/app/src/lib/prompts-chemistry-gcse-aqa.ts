// AQA GCSE Chemistry (8462) Question Generation Prompts
// Tailored to AQA specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Chemistry mark ranges based on AQA specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };    // Short answer/recall questions
    case 'medium':
      return { min: 4, max: 6 };    // Calculation and application questions
    case 'hard':
      return { min: 6, max: 9 };    // Extended response questions
  }
}

// ============================================================================
// AQA GCSE CHEMISTRY SPECIFICATION DETAILS (8462)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Chemistry Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas and scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 200 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** | Topics 1-5: Atomic structure, Bonding, Quantitative, Chemical changes, Energy | 1h 45m | 100 | 50% |
| **Paper 2** | Topics 6-10: Rates, Organic, Analysis, Atmosphere, Resources | 1h 45m | 100 | 50% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5
- **Higher tier**: Grades 4-9
- Questions may target grades (e.g., 01.1 Foundation only, 02.3 Higher only)
- 30% of marks are common between Foundation and Higher papers

### Mathematical Skills: 20% minimum
Chemistry papers assess mathematical skills including:
- Arithmetic and numerical computation
- Handling data (significant figures, standard form)
- Algebra (rearranging equations, solving)
- Graphs (plotting, interpreting, gradients)
`;

const AQA_CHEMISTRY_REQUIRED_PRACTICALS = `
## AQA GCSE Chemistry Required Practicals (8 total)

| RP | Name | Key Skills Tested | Topic |
|----|------|-------------------|-------|
| **RP1** | Making Salts | Crystallisation, filtration, evaporation | 4: Chemical Changes |
| **RP2** | Neutralisation Titration (Triple only) | Accurate volume measurement, using indicator | 4: Chemical Changes |
| **RP3** | Electrolysis | Half equations, identifying products | 4: Chemical Changes |
| **RP4** | Temperature Changes | Measuring temperature change, calculating energy | 5: Energy Changes |
| **RP5** | Rates of Reaction | Measuring gas volume or turbidity over time | 6: Rates |
| **RP6** | Chromatography | Calculating Rf values, separation technique | 8: Analysis |
| **RP7** | Identifying Ions (Triple only) | Flame tests, precipitation reactions | 8: Analysis |
| **RP8** | Water Purification | Distillation, testing pH, dissolved solids | 10: Resources |

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

const AQA_CHEMISTRY_COMMAND_WORDS = `
## AQA GCSE Chemistry Command Words (Official Definitions)

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Express in clear terms; recall facts without explanation | 1 |
| **Give / Name** | Recall one or more pieces of information | 1 |
| **Identify** | Name or otherwise characterise | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Write** | Give a word or symbol equation | 1-2 |

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

const AQA_CHEMISTRY_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Chemistry Mark Scheme Conventions

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

### Common Chemistry Mark Patterns
- **Equations**: Must be balanced for full marks; state symbols only if asked
- **Definitions**: Underlined words are ESSENTIAL for the mark
- **Explanations**: Cause AND effect both required
- **Chemical tests**: Both procedure AND observation needed
`;

// ============================================================================
// COMPLETE AQA GCSE CHEMISTRY REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const AQA_CHEMISTRY_REFERENCE_DATA = `
## Key Values and Constants (MUST USE THESE)

### Relative Atomic Masses (Ar) - Common Elements
| Element | Symbol | Ar |
|---------|--------|-----|
| Hydrogen | H | 1 |
| Carbon | C | 12 |
| Nitrogen | N | 14 |
| Oxygen | O | 16 |
| Sodium | Na | 23 |
| Magnesium | Mg | 24 |
| Aluminium | Al | 27 |
| Sulfur | S | 32 |
| Chlorine | Cl | 35.5 |
| Potassium | K | 39 |
| Calcium | Ca | 40 |
| Iron | Fe | 56 |
| Copper | Cu | 64 |
| Zinc | Zn | 65 |
| Bromine | Br | 80 |
| Silver | Ag | 108 |
| Iodine | I | 127 |

### Avogadro Constant
- **6.02 × 10²³** particles per mole

### Molar Gas Volume at RTP (Room Temperature and Pressure)
- **24 dm³** per mole (or 24,000 cm³)
- RTP = 20°C and 1 atmosphere

### Common Mr Values (Pre-calculated)
| Compound | Formula | Mr |
|----------|---------|-----|
| Water | H₂O | 18 |
| Carbon dioxide | CO₂ | 44 |
| Hydrochloric acid | HCl | 36.5 |
| Sodium hydroxide | NaOH | 40 |
| Sulfuric acid | H₂SO₄ | 98 |
| Sodium chloride | NaCl | 58.5 |
| Calcium carbonate | CaCO₃ | 100 |
| Magnesium oxide | MgO | 40 |
| Copper sulfate | CuSO₄ | 160 |
| Iron(III) oxide | Fe₂O₃ | 160 |

### Reactivity Series (MUST MEMORISE)
**Most reactive → Least reactive:**
K > Na > Ca > Mg > Al > C > Zn > Fe > H > Cu > Ag > Au

- Above carbon: extract by electrolysis
- Below carbon: extract by reduction with carbon
- Above hydrogen: react with water/dilute acid
- Below hydrogen: do not react with dilute acid
`;

const AQA_CHEMISTRY_EQUATIONS = `
## Key Equations for Calculations

### Moles Calculations
| To find | Equation | Units |
|---------|----------|-------|
| Moles from mass | n = m / Mr | mol, g, g/mol |
| Mass from moles | m = n × Mr | g, mol, g/mol |
| Moles of gas | n = V / 24 | mol, dm³ |
| Volume of gas | V = n × 24 | dm³, mol |
| Concentration (g/dm³) | c = m / V | g/dm³, g, dm³ |
| Concentration (mol/dm³) | c = n / V | mol/dm³, mol, dm³ |

### Other Key Equations
| Equation | When to Use |
|----------|-------------|
| % by mass = (Ar × number of atoms / Mr) × 100 | Finding % of element in compound |
| % yield = (actual yield / theoretical yield) × 100 | Yield calculations |
| Atom economy = (Mr of desired product / Mr of all reactants) × 100 | Sustainability questions |
| Rf = distance moved by substance / distance moved by solvent | Chromatography |

### Energy Calculations (Higher)
| Equation | Variables |
|----------|-----------|
| Energy change = Σ(bonds broken) - Σ(bonds made) | Using bond energies |
| Q = mcΔT | Energy from temperature change |
`;

const AQA_CHEMISTRY_REACTIONS = `
## Key Reactions (MUST KNOW PRODUCTS)

### Acid Reactions
| Acid + | Products | Example |
|--------|----------|---------|
| Metal | Salt + Hydrogen | Mg + 2HCl → MgCl₂ + H₂ |
| Metal oxide | Salt + Water | CuO + H₂SO₄ → CuSO₄ + H₂O |
| Metal hydroxide | Salt + Water | NaOH + HCl → NaCl + H₂O |
| Metal carbonate | Salt + Water + CO₂ | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ |

### Naming Salts
| Acid | Salt Name |
|------|-----------|
| Hydrochloric acid (HCl) | Chloride |
| Sulfuric acid (H₂SO₄) | Sulfate |
| Nitric acid (HNO₃) | Nitrate |

### Electrolysis Products
| Electrolyte | At Cathode (-) | At Anode (+) |
|-------------|----------------|--------------|
| Molten NaCl | Sodium metal | Chlorine gas |
| Molten PbBr₂ | Lead metal | Bromine |
| Aqueous NaCl (conc.) | Hydrogen gas | Chlorine gas |
| Aqueous NaCl (dilute) | Hydrogen gas | Oxygen gas |
| Aqueous CuSO₄ | Copper metal | Oxygen gas |
| Aqueous H₂SO₄ | Hydrogen gas | Oxygen gas |

### Thermal Decomposition
| Compound | Products |
|----------|----------|
| Metal carbonates | Metal oxide + CO₂ |
| Metal hydroxides | Metal oxide + H₂O |

### Displacement Reactions
- More reactive metal displaces less reactive metal from its compound
- Halogens: more reactive halogen displaces less reactive halide
  - Cl₂ + 2KBr → 2KCl + Br₂ ✓
  - Br₂ + 2KCl → No reaction ✗
`;

const AQA_CHEMISTRY_WORKED_EXAMPLES = `
## Worked Calculation Examples

### Example 1: Moles from Mass
**Q:** Calculate the number of moles in 4.8 g of magnesium. (Ar of Mg = 24) [2 marks]

**Solution:**
- n = m / Mr
- n = 4.8 / 24
- **n = 0.2 mol** ✓

---

### Example 2: Mass from Moles
**Q:** Calculate the mass of 0.5 moles of sodium hydroxide (NaOH). [3 marks]

**Solution:**
- Mr of NaOH = 23 + 16 + 1 = 40
- m = n × Mr
- m = 0.5 × 40
- **m = 20 g** ✓

---

### Example 3: Reacting Mass Calculation
**Q:** Calculate the mass of magnesium oxide produced when 2.4 g of magnesium burns.
2Mg + O₂ → 2MgO [4 marks]

**Solution:**
- Moles of Mg = 2.4 / 24 = 0.1 mol
- From equation: 2 mol Mg → 2 mol MgO (ratio 1:1)
- Moles of MgO = 0.1 mol
- Mr of MgO = 24 + 16 = 40
- Mass of MgO = 0.1 × 40
- **Mass = 4.0 g** ✓

---

### Example 4: Volume of Gas
**Q:** Calculate the volume of hydrogen gas produced when 0.12 g of magnesium reacts with excess acid at RTP. [3 marks]
Mg + 2HCl → MgCl₂ + H₂

**Solution:**
- Moles of Mg = 0.12 / 24 = 0.005 mol
- From equation: 1 mol Mg → 1 mol H₂
- Moles of H₂ = 0.005 mol
- Volume = n × 24 = 0.005 × 24
- **Volume = 0.12 dm³ (or 120 cm³)** ✓

---

### Example 5: Concentration
**Q:** 25.0 cm³ of sodium hydroxide solution contains 0.002 mol. Calculate the concentration in mol/dm³. [2 marks]

**Solution:**
- Convert: 25.0 cm³ = 0.025 dm³
- c = n / V = 0.002 / 0.025
- **c = 0.08 mol/dm³** ✓

---

### Example 6: Percentage Yield
**Q:** A student expected to produce 10.0 g of copper sulfate but only obtained 7.5 g. Calculate the percentage yield. [2 marks]

**Solution:**
- % yield = (actual / theoretical) × 100
- % yield = (7.5 / 10.0) × 100
- **% yield = 75%** ✓

---

### Example 7: Atom Economy
**Q:** Calculate the atom economy for making hydrogen from the reaction:
Zn + H₂SO₄ → ZnSO₄ + H₂ [3 marks]

**Solution:**
- Mr of desired product (H₂) = 2
- Mr of all products = ZnSO₄ + H₂ = 161 + 2 = 163
- Atom economy = (2 / 163) × 100
- **Atom economy = 1.2%** ✓

---

### Example 8: Percentage by Mass
**Q:** Calculate the percentage by mass of nitrogen in ammonium nitrate (NH₄NO₃). [3 marks]

**Solution:**
- Mr of NH₄NO₃ = 14 + 4 + 14 + 48 = 80
- Mass of N = 14 × 2 = 28
- % N = (28 / 80) × 100
- **% N = 35%** ✓
`;

// AQA GCSE Chemistry guiding principles
const AQA_CHEMISTRY_PRINCIPLES = `
AQA GCSE Chemistry Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

AQA GCSE Chemistry Command Words:
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
- Write: Give a chemical equation

AQA GCSE Mark Scheme Conventions:
- 1 mark for each correct scientific point
- Calculations: 1 mark for correct equation, 1 mark for substitution, 1 mark for answer with units
- 6-mark questions: QWC (Quality of Written Communication) using level of response marking
  - Level 3 (5-6 marks): Detailed, coherent answer with correct scientific terminology
  - Level 2 (3-4 marks): Some relevant points, may lack detail or have minor errors
  - Level 1 (1-2 marks): Simple statements with limited relevance
  - QWC questions assess BOTH scientific content AND quality of English (spelling, punctuation, grammar)
- AQA mark schemes are relatively flexible - accept correct alternatives and equivalent answers
- Chemical equations must be balanced for full marks
- State symbols required when specified in question
- Units must be correct for calculation answers
- Higher tier content marked with (HT) in specification
- 30% of marks common between Foundation and Higher tiers

## CRITICAL: Mark Scheme Patterns for Worded Answers

### Essential Word Rules (same as Physics)
- **Underlined** text in mark schemes is ESSENTIAL - exact word must appear
- Bold **and** means BOTH parts required for the mark
- "or" / "oe" indicates acceptable alternatives
- Each error/contradiction NEGATES one correct response

### Required Chemistry Definitions (MUST USE THESE EXACT PHRASES)

**Bonding:**
- Ionic: "transfer of electrons from metal to non-metal"
- Covalent: "sharing of a pair of electrons"
- Metallic: "positive ions in a sea of delocalised electrons"

**Particles:**
- Ion: "atom or group of atoms that has gained or lost electrons"
- Isotopes: "atoms with same number of protons but different number of neutrons"
- Relative atomic mass: "weighted mean mass compared to 1/12 mass of carbon-12"

**Energy Changes:**
- Exothermic: "energy transferred to the surroundings" / "temperature increases"
- Endothermic: "energy absorbed from surroundings" / "temperature decreases"
- Activation energy: "minimum energy needed for a reaction to occur"

**Rates:**
- Rate: "change in amount of reactant or product per unit time"
- Catalyst: "increases rate without being used up" / "provides alternative pathway with lower activation energy"

**Equilibrium (HT):**
- Dynamic equilibrium: "rate of forward reaction equals rate of backward reaction"
- Le Chatelier: "system acts to oppose the change"

### Standard Chemistry Explanation Patterns

**Electrolysis Explanations:**
- "positive ions (cations) are attracted to negative electrode (cathode)"
- "negative ions (anions) are attracted to positive electrode (anode)"
- At cathode: "ions gain electrons" (reduction) / "M⁺ + e⁻ → M"
- At anode: "ions lose electrons" (oxidation) / "2X⁻ → X₂ + 2e⁻"
- For aqueous solutions: "if metal is more reactive than hydrogen, hydrogen is discharged instead"

**Reactivity Explanations:**
- "more reactive metal displaces less reactive metal from its compound"
- "position in reactivity series determines whether reaction occurs"
- Group 1: "reactivity increases down group because outer electron is further from nucleus / more easily lost"
- Group 7: "reactivity decreases down group because outer shell is further from nucleus / harder to gain electron"

**Rate of Reaction Explanations:**
- "particles must collide with sufficient energy (activation energy)"
- Higher concentration: "more particles per unit volume → more frequent collisions → faster rate"
- Higher temperature: "particles have more kinetic energy → more collisions with energy ≥ activation energy"
- Larger surface area: "more particles exposed → more frequent collisions"
- Catalyst: "provides alternative pathway with lower activation energy"

**Structure and Properties:**
- Ionic: "high melting point because strong electrostatic forces between ions require lots of energy to overcome"
- Covalent simple: "low melting point because weak intermolecular forces (NOT weak covalent bonds)"
- Metals conduct: "delocalised electrons can move through structure carrying charge"
- Graphite: "layers can slide over each other because only weak forces between layers"

### Chemical Tests (MUST INCLUDE BOTH PROCEDURE AND RESULT)

- Hydrogen: "place lighted splint at mouth of tube" → "squeaky pop"
- Oxygen: "place glowing splint in gas" → "splint relights"
- Carbon dioxide: "bubble through limewater" → "turns cloudy/milky"
- Chlorine: "damp blue litmus paper" → "bleaches white"
- Alkenes (unsaturation): "add bromine water" → "orange to colourless"

### Half Equations (HT)
Mark schemes require:
- Correct species with correct charges
- Correct number of electrons
- Balanced for atoms AND charge
- State symbols if requested

Example: "2Cl⁻(aq) → Cl₂(g) + 2e⁻"

Required Practicals (8 total for separate Chemistry):
1. Making salts from acids - crystallisation technique
2. Electrolysis of aqueous solutions using inert electrodes
3. Temperature changes in reacting solutions (neutralisation, displacement, dissolving)
4. Rates of reaction - measuring gas volume or colour change
5. Chromatography - paper chromatography to separate coloured substances
6. Water purification - distillation, testing pH, dissolved solids
7. Identifying ions - flame tests, metal hydroxide precipitates, halide tests
8. Titration (Triple Science only) - acid-alkali with indicator
`;

// Topic-specific guidance for GCSE Chemistry
const CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-gcse-chemistry-atomic-structure': `
Topic 1: Atomic Structure and the Periodic Table:
- Atomic structure: protons, neutrons, electrons and their properties
- Calculating relative atomic mass from isotope data
- Electronic configuration and relationship to periodic table position
- Group trends: Group 1 reactivity increases down, Group 7 decreases
- Transition metals: catalysts, coloured compounds, variable oxidation states (HT)
- Noble gases: full outer shells explain unreactivity
AQA often tests: electronic configurations, explaining group trends, isotope calculations
`,
  'aqa-gcse-chemistry-bonding': `
Topic 2: Bonding, Structure and Properties of Matter:
- Ionic bonding: metal + non-metal, electron transfer, giant lattice
- Covalent bonding: non-metal + non-metal, shared electrons
- Metallic bonding: positive ions, sea of delocalised electrons
- Giant structures: ionic lattices, diamond, graphite, metals
- Simple molecular: weak intermolecular forces, low melting points
- Allotropes of carbon: diamond (hard), graphite (soft, conducts), graphene, fullerenes
- Nanoparticles: high surface area to volume ratio (HT)
AQA often tests: dot and cross diagrams, explaining properties from structure
`,
  'aqa-gcse-chemistry-quantitative': `
Topic 3: Quantitative Chemistry:
- Conservation of mass in reactions
- Relative formula mass (Mr) calculations
- Moles: n = m/Mr, Avogadro constant = 6.02 × 10²³
- Reacting mass calculations using mole ratios
- Limiting reactant determines amount of product
- Concentration: g/dm³ or mol/dm³ (HT)
- Percentage yield = (actual/theoretical) × 100
- Atom economy = (Mr of desired product / Mr of all reactants) × 100
- Molar volume of gas at RTP = 24 dm³ (HT)
AQA often tests: mole calculations, percentage yield, balancing equations
`,
  'aqa-gcse-chemistry-chemical-changes': `
Topic 4: Chemical Changes:
- Reactivity series: K, Na, Ca, Mg, Al, C, Zn, Fe, H, Cu, Ag, Au
- Metals above carbon: extracted by electrolysis
- Metals below carbon: extracted by reduction with carbon
- Oxidation: gain of oxygen or loss of electrons
- Reduction: loss of oxygen or gain of electrons
- Acids react with: metals, oxides, hydroxides, carbonates
- pH scale: 0-14, acids < 7, alkalis > 7
- Strong acids fully dissociate; weak acids partially dissociate (HT)
- Electrolysis: positive ions to cathode, negative ions to anode
AQA often tests: word and symbol equations, predicting products, electrolysis half equations (HT)
`,
  'aqa-gcse-chemistry-energy': `
Topic 5: Energy Changes:
- Exothermic: energy released, temperature rises (combustion, neutralisation)
- Endothermic: energy absorbed, temperature falls (thermal decomposition, citric acid + sodium hydrogencarbonate)
- Reaction profiles show activation energy and overall energy change
- Catalysts lower activation energy
- Bond breaking requires energy (endothermic)
- Bond making releases energy (exothermic)
- Overall energy change = bonds broken - bonds formed (HT)
- Fuel cells: hydrogen + oxygen → water, produces electricity (HT)
AQA often tests: reaction profiles, bond energy calculations (HT), explaining energy changes
`,
  'aqa-gcse-chemistry-rates': `
Topic 6: The Rate and Extent of Chemical Change:
- Rate = amount of reactant used or product formed / time
- Factors affecting rate: concentration, temperature, surface area, catalysts
- Collision theory: particles must collide with sufficient energy
- Higher concentration/pressure = more frequent collisions
- Higher temperature = more energy, more successful collisions
- Greater surface area = more particles exposed to react
- Catalysts provide alternative pathway with lower activation energy
- Reversible reactions: ⇌ symbol, dynamic equilibrium (HT)
- Le Chatelier's principle: system opposes changes (HT)
AQA often tests: explaining rate changes using collision theory, equilibrium shifts (HT)
`,
  'aqa-gcse-chemistry-organic': `
Topic 7: Organic Chemistry:
- Crude oil: mixture of hydrocarbons, separated by fractional distillation
- Alkanes: CₙH₂ₙ₊₂, saturated, single bonds only
- Alkenes: CₙH₂ₙ, unsaturated, contain C=C double bond
- Longer chains: higher boiling point, more viscous, less flammable
- Complete combustion: hydrocarbon + O₂ → CO₂ + H₂O
- Incomplete combustion: produces CO and/or C (soot)
- Cracking: large alkanes → smaller alkanes + alkenes
- Addition polymerisation: alkenes join to form polymers
- Alcohols: -OH functional group, used as fuels and solvents
- Carboxylic acids: -COOH functional group, weak acids
AQA often tests: naming and drawing organic molecules, polymerisation, cracking products
`,
  'aqa-gcse-chemistry-analysis': `
Topic 8: Chemical Analysis:
- Pure substance: single element or compound, sharp melting point
- Formulation: mixture designed for a purpose (medicines, paints, alloys)
- Chromatography: Rf = distance moved by substance / distance moved by solvent
- Gas tests: H₂ (squeaky pop), O₂ (relights splint), CO₂ (limewater cloudy), Cl₂ (bleaches litmus)
- Flame tests: Li (red), Na (yellow), K (lilac), Ca (orange-red), Cu (green)
- Metal ion precipitates with NaOH: Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (brown)
- Carbonate test: add acid → CO₂ (test with limewater)
- Halide tests with silver nitrate: Cl⁻ (white), Br⁻ (cream), I⁻ (yellow)
- Sulfate test: BaCl₂ gives white precipitate with SO₄²⁻
AQA often tests: identifying unknown substances, interpreting chromatograms, flame test colours
`,
  'aqa-gcse-chemistry-atmosphere': `
Topic 9: Chemistry of the Atmosphere:
- Current atmosphere: ~78% N₂, ~21% O₂, ~0.04% CO₂, small amounts of other gases
- Early atmosphere: mainly CO₂ from volcanic activity
- Oxygen increased due to photosynthesis by plants and algae
- CO₂ decreased due to: photosynthesis, dissolving in oceans, formation of fossil fuels and sedimentary rocks
- Greenhouse gases: CO₂, CH₄, water vapour
- Greenhouse effect: radiation absorbed and re-emitted, warming Earth
- Human activities increasing CO₂: burning fossil fuels, deforestation
- Climate change effects: rising temperatures, sea level rise, extreme weather
- Pollutants: CO (toxic), SO₂ and NOₓ (acid rain), particulates (global dimming, health)
AQA often tests: explaining the greenhouse effect, evolution of atmosphere, reducing emissions
`,
  'aqa-gcse-chemistry-resources': `
Topic 10: Using Resources:
- Potable water: safe to drink, not pure (contains dissolved minerals)
- Water treatment: sedimentation → filtration → chlorination/UV/ozone
- Desalination: distillation or reverse osmosis (energy intensive)
- Sewage treatment: screening, settling, biological treatment
- Life cycle assessment (LCA): raw materials → manufacture → use → disposal
- Reduce, reuse, recycle to conserve resources
- The Haber process: N₂ + 3H₂ ⇌ 2NH₃
- Haber conditions: 450°C, 200 atm, iron catalyst (compromise conditions)
- NPK fertilisers: nitrogen, phosphorus, potassium for plant growth
AQA often tests: water treatment stages, Haber process conditions and compromises, LCA evaluation
`
};

// Generate compact prompt for auto/standard questions
export function getAQAChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert AQA GCSE Chemistry examiner creating an exam-style question.

${AQA_CHEMISTRY_PRINCIPLES}

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
1. Uses authentic AQA GCSE Chemistry language
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
export function getAQAChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating a 6-mark extended response question.

${AQA_CHEMISTRY_PRINCIPLES}

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
[Model Level 3 answer demonstrating excellent chemistry understanding]`;
}

// Generate multiple choice question prompt
export function getAQAChemistryMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating a multiple choice question.

${AQA_CHEMISTRY_PRINCIPLES}

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
[Full explanation of the correct answer and chemistry involved]`;
}

// Generate calculation question prompt
export function getAQAChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating a calculation question.

${AQA_CHEMISTRY_PRINCIPLES}

${AQA_CHEMISTRY_REFERENCE_DATA}

${AQA_CHEMISTRY_EQUATIONS}

${AQA_CHEMISTRY_WORKED_EXAMPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## CRITICAL: Use Reference Data Above
- Use EXACT Ar values from the table
- Use EXACT Mr values or calculate correctly
- Use 24 dm³ for molar gas volume at RTP
- Ensure answers come out to sensible values (2-3 sig figs)

Create ONE calculation question that:
1. Provides realistic numerical data using correct Ar/Mr values
2. Tests quantitative chemistry skills
3. Has a clear, structured calculation
4. Produces a sensible numerical answer

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking: equation (1), substitution (1), answer with units (1)]

**Explanation:**
[Complete worked solution with every step shown, using correct values from reference data]`;
}

// Generate explain question prompt
export function getAQAChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating an explanation question.

${AQA_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of chemistry principles
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
export function getAQAChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating a graph or data analysis question.

${AQA_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting chemical data or graphs
2. May require plotting, reading values, or calculating gradients
3. Tests understanding of relationships between variables
4. Uses realistic chemistry data

Common graph types in GCSE Chemistry:
- Rate of reaction graphs (volume vs time, mass vs time)
- Temperature change graphs
- Chromatogram interpretation
- Solubility curves
- Heating/cooling curves

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation and conclusions]

**Explanation:**
[Model answer showing how to analyse the data correctly]`;
}

// Generate compare question prompt
export function getAQAChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Chemistry examiner creating a comparison question.

${AQA_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related chemistry concepts, substances, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of underlying principles
4. Uses the command word 'Compare' appropriately

Possible comparisons in GCSE Chemistry:
- Ionic vs covalent bonding
- Metals vs non-metals
- Strong vs weak acids
- Exothermic vs endothermic reactions
- Diamond vs graphite
- Alkanes vs alkenes
- Different extraction methods

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// ============================================================================
// REQUIRED PRACTICAL PROMPTS FOR CHEMISTRY
// ============================================================================

/**
 * Required Practical question prompt for AQA Chemistry.
 */
export function getAQAChemistryRequiredPracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  // Get subtopic-specific guidance
  const subtopicGuidance = getChemistryPracticalSubtopicGuidance(subtopic, practical);

  return `${AQA_CHEMISTRY_PRINCIPLES}

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

Generate a ${subtopic.toUpperCase()} question for this AQA GCSE Chemistry Required Practical.

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

${getDiagramDocsForSubject('chemistry')}

Generate a genuinely original Required Practical ${subtopic} question now:`;
}

/**
 * Get subtopic-specific guidance for chemistry practicals
 */
function getChemistryPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions

Focus on:
- Step-by-step procedure for this practical
- Specific techniques (e.g., filtration, evaporation, titration)
- How to ensure the product is pure
- How to ensure accurate measurements

**Chemistry-specific method points:**
- When to stop adding reactant (e.g., when no more dissolves/reacts)
- How to ensure complete reaction
- How to separate and collect products
- How to dry and purify products

**Common question patterns:**
- "Describe a method to prepare a pure, dry sample of..."
- "Explain how you would carry out a titration to..."
- "Plan an investigation to determine..."

**Mark scheme patterns:**
- 1 mark per valid step
- Credit specific equipment named
- Credit safety precautions
- Credit techniques for ensuring purity`;

    case 'Variables':
      return `## Variables Questions

Focus on:
- Independent variable (what you change)
- Dependent variable (what you measure)
- Control variables (what you keep the same)

**Chemistry-specific variables:**
- Concentration of solutions
- Temperature of reaction
- Volume of reactants
- Mass of solid reactants
- Surface area of solid
- Catalyst presence

**Common question patterns:**
- "Name the independent variable" [1 mark]
- "What is the dependent variable?" [1 mark]
- "Name TWO variables that must be controlled" [2 marks]
- "Explain why [variable] must be kept constant" [2 marks]`;

    case 'Equipment':
      return `## Equipment Questions

Focus on:
- Naming appropriate glassware and apparatus
- Explaining why specific equipment is chosen
- Accuracy and precision of equipment
- Alternatives and their limitations

**Chemistry-specific equipment:**
- Burette (accurate liquid measurement, ±0.05 cm³)
- Pipette (fixed volume, accurate)
- Measuring cylinder (less accurate than burette)
- Conical flask vs beaker (swirling/mixing)
- Gas syringe (collecting gas)
- Filter funnel and paper (separation)
- Evaporating basin (removing water)

**For this practical:**
${practical.equipment?.map(e => `- ${e}`).join('\n') || '- Standard lab equipment'}`;

    case 'Results Analysis':
      return `## Results Analysis Questions

Focus on:
- Calculating values from experimental data
- Using moles calculations (n = m/Mr, etc.)
- Identifying patterns and trends
- Comparing experimental to theoretical values

**Chemistry calculations in practicals:**
- Moles = mass / Mr
- Concentration = moles / volume (in dm³)
- Percentage yield = (actual/theoretical) × 100
- Atom economy = (Mr of desired product / Mr of all reactants) × 100
- Energy change = mcΔT

**Common question patterns:**
- "Calculate the number of moles of..."
- "Use your results to calculate the concentration..."
- "What is the percentage yield?"
- "Calculate the enthalpy change for this reaction"`;

    case 'Graph Skills':
      return `## Graph Skills Questions

Focus on:
- Plotting reaction rates graphs (volume/mass vs time)
- Identifying when reaction is complete (graph levels off)
- Comparing rates from gradients
- Drawing tangents to curves

**Chemistry graph patterns:**
- Rates: steeper gradient = faster rate
- Gas collection: curve levels off when reaction complete
- Temperature change: initial rate from steepest part
- Titration curves: equivalence point

**Common question patterns:**
- "Plot a graph of volume of gas produced against time"
- "Determine the rate of reaction from the graph"
- "At what time was the reaction complete? Explain how you know."
- "Draw a tangent to find the initial rate"`;

    case 'Errors':
      return `## Errors Questions

Focus on:
- Sources of error specific to chemistry practicals
- Loss of product during transfers
- Incomplete reactions
- Impurities

**Chemistry-specific errors:**
- Loss of product during filtration/transfer
- Spattering during heating
- Not all solid dissolved/reacted
- Water not completely evaporated
- Impurities in product
- Gas escaping before measurement
- Temperature change during reaction

**Common question patterns:**
- "Suggest why the actual yield was less than the theoretical yield"
- "Identify ONE source of error that could affect your results"
- "Explain why the results may not be accurate"`;

    case 'Improvements':
      return `## Improvements Questions

Focus on:
- How to increase yield
- How to improve purity
- How to increase accuracy
- How to make results more reliable

**Chemistry-specific improvements:**
- Use excess of cheap reagent to ensure complete reaction
- Wash precipitate with distilled water
- Dry thoroughly before weighing
- Use more accurate measuring equipment
- Repeat titrations until concordant (within 0.1 cm³)
- Use a lid to prevent gas escaping
- Insulate container to reduce heat loss

**Common question patterns:**
- "Suggest how the yield could be improved"
- "How could you ensure the product is pure?"
- "What could be done to make the results more reliable?"`;

    case 'Safety':
      return `## Safety Questions

Focus on:
- Chemical hazards (corrosive, toxic, flammable, irritant)
- Appropriate precautions
- Why each precaution is necessary

**Chemistry safety considerations:**
- Acids/alkalis: wear goggles, wash spills immediately
- Toxic substances: use fume cupboard, avoid skin contact
- Flammable substances: no naked flames, work away from heat
- Hot solutions: use tongs, allow to cool before handling
- Broken glass: sweep up carefully, dispose in glass bin

**For this practical:**
${practical.safety?.map(s => `- ${s}`).join('\n') || '- Follow standard lab safety procedures'}

**Common question patterns:**
- "Name ONE hazard and describe a precaution" [2 marks]
- "Explain why safety goggles must be worn"
- "Why should this reaction be carried out in a fume cupboard?"`;

    default:
      return '';
  }
}
