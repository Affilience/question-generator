// Edexcel GCSE Chemistry (1CH0) Question Generation Prompts
// Tailored to Edexcel specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Chemistry mark ranges based on Edexcel specification
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
// EDEXCEL GCSE CHEMISTRY SPECIFICATION DETAILS (1CH0)
// Based on official Pearson Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Chemistry Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas and scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 200 marks)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1** | Topics 1-5: Key concepts, States & mixtures, Chemical changes, Extracting metals & equilibria, Separate Chemistry 1 | 1h 45m | 100 | 50% |
| **Paper 2** | Topics 6-9: Groups in periodic table, Rates & energy, Fuels & earth science, Separate Chemistry 2 | 1h 45m | 100 | 50% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5 (Papers 1F and 2F)
- **Higher tier**: Grades 4-9 (Papers 1H and 2H)
- Questions often start easier and become progressively harder within each section

### Mathematical Skills: 20% minimum
Edexcel Chemistry papers assess mathematical skills including:
- Use ratios, fractions and percentages
- Make calculations using standard form
- Change the subject of an equation
- Plot graphs and calculate gradients
`;

const EDEXCEL_CHEMISTRY_CORE_PRACTICALS = `
## Edexcel GCSE Chemistry Core Practicals (8 total)

| CP | Name | Key Skills Tested | Topic |
|----|------|-------------------|-------|
| **CP1** | pH Changes | Measuring pH with probe/indicator, neutralisation | 3: Chemical Changes |
| **CP2** | Temperature Changes | Measuring energy changes in reactions | 7: Rates & Energy |
| **CP3** | Rates of Reaction | Variables affecting rate, measuring gas/mass change | 7: Rates & Energy |
| **CP4** | Electrolysis | Products at electrodes, inert vs copper electrodes | 3: Chemical Changes |
| **CP5** | Making Crystals | Preparing pure copper sulfate crystals | 3: Chemical Changes |
| **CP6** | Separation | Paper chromatography, simple distillation | 2: States & Mixtures |
| **CP7** | Identifying Ions | Flame tests, NaOH precipitates, gas tests | 6: Groups |
| **CP8** | Titration (Triple only) | Accurate volume measurement, concordant results | 5: Separate Chem 1 |

### Practical Assessment in Exams
- Questions test knowledge derived from the 8 core practicals
- At least **15%** of marks assess practical skills
- Students must complete all 8 core practicals to certify
- Practical Science Statement submitted by centres
`;

const EDEXCEL_CHEMISTRY_COMMAND_WORDS = `
## Edexcel GCSE Chemistry Command Words (Official Definitions)

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Express briefly; no explanation needed | 1 |
| **Give / Name** | Short answer; recall one or more pieces of information | 1 |
| **Identify** | Name or otherwise indicate the answer | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Write** | Provide an equation (word or symbol) | 1-2 |
| **Complete** | Add missing information to a table, diagram or equation | 1-2 |

### Application Commands (AO2)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Work out an answer using mathematical skills; show working | 2-4 |
| **Determine** | Use given data or information to obtain an answer | 2-3 |
| **Show (that)** | Provide evidence leading to given conclusion | 2-3 |
| **Describe** | State the main features of something | 2-3 |
| **Explain** | Give reasons for something; link cause and effect | 2-4 |
| **Suggest** | Apply knowledge to unfamiliar situations | 2-3 |
| **Predict** | Give an expected result based on knowledge | 1-2 |

### Analysis Commands (AO3)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Compare** | Identify similarities AND differences | 2-4 |
| **Evaluate** | Review information and make a judgement | 3-6 |
| **Justify** | Give reasons to support a conclusion | 2-4 |
| **Plan / Design** | Set out key features of an investigation | 3-6 |
| **Sketch** | Draw approximately, showing key features | 1-2 |
| **Draw** | Produce a diagram with accuracy | 1-3 |
| **Estimate** | Give an approximate value | 1-2 |
`;

const EDEXCEL_CHEMISTRY_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE Chemistry Mark Scheme Conventions

### Mark Indicators
| Symbol | Meaning |
|--------|---------|
| **(1)** | 1 mark available for this point |
| **;** | Separates marking points (each worth 1 mark) |
| **/** | Alternative acceptable answers |
| **ACCEPT** | Alternative wording acceptable |
| **ALLOW** | Additional credit for this point |
| **IGNORE** | Do not penalise if stated |
| **DO NOT ACCEPT** | This answer is wrong |
| **NOT** | Common wrong answer |
| **ecf** | Error carried forward (from previous part) |

### Calculation Marking (Typical 3-4 marks)
1. Correct equation/formula stated (1)
2. Correct substitution with units (1)
3. Correct calculation/working (1)
4. Answer with correct units (1)

### Extended Response (6-mark) Marking
**Level 3 (5-6 marks):** Comprehensive answer, logically structured, uses scientific terminology correctly
**Level 2 (3-4 marks):** Mostly correct, some gaps in detail or structure
**Level 1 (1-2 marks):** Limited response, basic points, may lack clarity

### Important Conventions
- **Data heavy**: Edexcel often provides more data than AQA - students must select relevant information
- **Tables to complete**: Common question format - fill in products, observations, etc.
- **Stricter wording**: Edexcel mark schemes are often more prescriptive than AQA
- **Show that questions**: Working must be shown; just stating the answer = 0 marks
- **Sig figs**: Final answers usually 2-3 significant figures
`;

// ============================================================================
// COMPLETE EDEXCEL GCSE CHEMISTRY REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const EDEXCEL_CHEMISTRY_REFERENCE_DATA = `
## Key Values and Constants (MUST USE THESE)

### Relative Atomic Masses (Ar) - From Edexcel Data Sheet
| Element | Symbol | Ar |
|---------|--------|-----|
| Hydrogen | H | 1 |
| Carbon | C | 12 |
| Nitrogen | N | 14 |
| Oxygen | O | 16 |
| Fluorine | F | 19 |
| Sodium | Na | 23 |
| Magnesium | Mg | 24 |
| Aluminium | Al | 27 |
| Silicon | Si | 28 |
| Phosphorus | P | 31 |
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
| Barium | Ba | 137 |
| Lead | Pb | 207 |

### Molar Gas Volume at RTP
- **24 dm³** per mole (or 24,000 cm³)
- RTP = Room Temperature and Pressure (approximately 20°C and 1 atm)

### Common Mr Values (Pre-calculated for Accuracy)
| Compound | Formula | Mr |
|----------|---------|-----|
| Water | H₂O | 18 |
| Ammonia | NH₃ | 17 |
| Carbon dioxide | CO₂ | 44 |
| Carbon monoxide | CO | 28 |
| Methane | CH₄ | 16 |
| Ethane | C₂H₆ | 30 |
| Propane | C₃H₈ | 44 |
| Ethene | C₂H₄ | 28 |
| Ethanol | C₂H₅OH | 46 |
| Hydrochloric acid | HCl | 36.5 |
| Sulfuric acid | H₂SO₄ | 98 |
| Nitric acid | HNO₃ | 63 |
| Sodium hydroxide | NaOH | 40 |
| Potassium hydroxide | KOH | 56 |
| Calcium hydroxide | Ca(OH)₂ | 74 |
| Sodium chloride | NaCl | 58.5 |
| Sodium carbonate | Na₂CO₃ | 106 |
| Calcium carbonate | CaCO₃ | 100 |
| Magnesium oxide | MgO | 40 |
| Calcium oxide | CaO | 56 |
| Copper oxide | CuO | 80 |
| Iron(III) oxide | Fe₂O₃ | 160 |
| Copper sulfate | CuSO₄ | 160 |
| Copper sulfate pentahydrate | CuSO₄·5H₂O | 250 |
| Magnesium sulfate | MgSO₄ | 120 |
| Zinc sulfate | ZnSO₄ | 161 |
| Silver nitrate | AgNO₃ | 170 |

### Reactivity Series (MUST MEMORISE)
**Most reactive → Least reactive:**
Potassium > Sodium > Lithium > Calcium > Magnesium > Aluminium > (Carbon) > Zinc > Iron > (Hydrogen) > Copper > Silver > Gold

Key points:
- Above carbon: extract by electrolysis (too reactive for carbon reduction)
- Below carbon: extract by reduction with carbon/carbon monoxide
- Above hydrogen: react with dilute acids to produce hydrogen gas
- Below hydrogen: do NOT react with dilute acids
`;

const EDEXCEL_CHEMISTRY_EQUATIONS = `
## Key Equations for Calculations

### Moles Calculations (LEARN THESE)
| To find | Equation | Units |
|---------|----------|-------|
| Moles from mass | n = m / Mr | mol = g / g mol⁻¹ |
| Mass from moles | m = n × Mr | g = mol × g mol⁻¹ |
| Moles of gas (at RTP) | n = V / 24 | mol = dm³ / dm³ mol⁻¹ |
| Volume of gas (at RTP) | V = n × 24 | dm³ = mol × dm³ mol⁻¹ |
| Concentration (g/dm³) | c = m / V | g dm⁻³ = g / dm³ |
| Concentration (mol/dm³) | c = n / V | mol dm⁻³ = mol / dm³ |
| Moles from concentration | n = c × V | mol = mol dm⁻³ × dm³ |

### Percentage Calculations
| Equation | When to Use |
|----------|-------------|
| % by mass = (Ar × number of atoms / Mr) × 100 | Finding % of element in compound |
| % yield = (actual yield / theoretical yield) × 100 | Comparing actual to expected mass |
| Atom economy = (Mr of desired product / sum of Mr of all products) × 100 | Evaluating efficiency |

### Chromatography
| Equation | Variables |
|----------|-----------|
| Rf = distance moved by substance / distance moved by solvent | Both measured from origin |

### Energy Calculations (Higher Tier)
| Equation | Variables |
|----------|-----------|
| Energy change = Σ(bond energies broken) − Σ(bond energies made) | Using bond energy values |
| ΔH = mcΔT | Energy change from temperature (J = g × J/g/°C × °C) |

### Titration Calculations
| Step | Method |
|------|--------|
| 1 | Calculate moles of known solution: n = c × V (convert cm³ to dm³) |
| 2 | Use equation ratio to find moles of unknown |
| 3 | Calculate concentration: c = n / V |
`;

const EDEXCEL_CHEMISTRY_REACTIONS = `
## Key Reactions (MUST KNOW PRODUCTS)

### Acid Reactions
| Acid + | Products | Example Equation |
|--------|----------|------------------|
| Metal (reactive) | Salt + Hydrogen | Mg + 2HCl → MgCl₂ + H₂ |
| Metal oxide | Salt + Water | CuO + H₂SO₄ → CuSO₄ + H₂O |
| Metal hydroxide | Salt + Water | NaOH + HCl → NaCl + H₂O |
| Metal carbonate | Salt + Water + CO₂ | CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂ |
| Ammonia | Ammonium salt | NH₃ + HNO₃ → NH₄NO₃ |

### Naming Salts from Acids
| Acid | Salt Produced |
|------|---------------|
| Hydrochloric acid (HCl) | Chloride |
| Sulfuric acid (H₂SO₄) | Sulfate |
| Nitric acid (HNO₃) | Nitrate |
| Phosphoric acid (H₃PO₄) | Phosphate |

### Electrolysis Products (Edexcel Favourite!)
| Electrolyte | At Cathode (−) | At Anode (+) | Notes |
|-------------|----------------|--------------|-------|
| Molten NaCl | Sodium metal | Chlorine gas | Pure ionic compound |
| Molten PbBr₂ | Lead metal | Bromine | Pure ionic compound |
| Molten Al₂O₃ | Aluminium metal | Oxygen gas | Industrial process |
| Aq. NaCl (concentrated) | Hydrogen gas | Chlorine gas | H⁺ easier to discharge than Na⁺ |
| Aq. NaCl (dilute) | Hydrogen gas | Oxygen gas | OH⁻ discharged instead |
| Aq. CuSO₄ (inert electrodes) | Copper metal | Oxygen gas | Cu²⁺ easier than H⁺ |
| Aq. CuSO₄ (copper electrodes) | Copper deposited | Copper dissolves | Purification/electroplating |
| Aq. H₂SO₄ | Hydrogen gas | Oxygen gas | Tests for gases |

### Group 1 Reactions
| Reaction | Products | Observations |
|----------|----------|--------------|
| Li + H₂O | LiOH + H₂ | Floats, fizzes gently |
| Na + H₂O | NaOH + H₂ | Floats, fizzes, melts into ball |
| K + H₂O | KOH + H₂ | Floats, fizzes violently, lilac flame |

### Halogen Displacement
| Reaction | Happens? | Colour Change |
|----------|----------|---------------|
| Cl₂ + 2KBr → 2KCl + Br₂ | Yes | Colourless → orange/brown |
| Cl₂ + 2KI → 2KCl + I₂ | Yes | Colourless → brown |
| Br₂ + 2KI → 2KBr + I₂ | Yes | Orange → brown |
| Br₂ + 2KCl | No reaction | - |
| I₂ + 2KBr | No reaction | - |
| I₂ + 2KCl | No reaction | - |

### Thermal Decomposition
| Compound Type | Products | Example |
|---------------|----------|---------|
| Metal carbonates | Metal oxide + CO₂ | CaCO₃ → CaO + CO₂ |
| Metal hydroxides | Metal oxide + H₂O | Cu(OH)₂ → CuO + H₂O |
| Metal nitrates (Group 1) | Metal nitrite + O₂ | 2NaNO₃ → 2NaNO₂ + O₂ |
| Metal nitrates (others) | Metal oxide + NO₂ + O₂ | 2Cu(NO₃)₂ → 2CuO + 4NO₂ + O₂ |

### Organic Reactions
| Reaction Type | General Equation | Example |
|---------------|------------------|---------|
| Complete combustion | Hydrocarbon + O₂ → CO₂ + H₂O | CH₄ + 2O₂ → CO₂ + 2H₂O |
| Incomplete combustion | Hydrocarbon + O₂ → CO/C + H₂O | 2CH₄ + 3O₂ → 2CO + 4H₂O |
| Addition (alkene + H₂) | Alkene + H₂ → Alkane | C₂H₄ + H₂ → C₂H₆ |
| Addition (alkene + H₂O) | Alkene + H₂O → Alcohol | C₂H₄ + H₂O → C₂H₅OH |
| Addition (alkene + Br₂) | Alkene + Br₂ → Dibromoalkane | C₂H₄ + Br₂ → C₂H₄Br₂ |
| Esterification | Alcohol + Carboxylic acid → Ester + H₂O | - |
| Addition polymerisation | n(alkene) → poly(alkene) | n(C₂H₄) → (C₂H₄)ₙ |
`;

const EDEXCEL_CHEMISTRY_WORKED_EXAMPLES = `
## Worked Calculation Examples (Edexcel Style)

### Example 1: Calculate Mr
**Q:** Calculate the relative formula mass (Mr) of calcium hydroxide, Ca(OH)₂. [2 marks]

**Working:**
- Ar values: Ca = 40, O = 16, H = 1
- Mr = 40 + (16 + 1) × 2
- Mr = 40 + 34
- **Mr = 74** ✓✓

---

### Example 2: Moles from Mass
**Q:** Calculate the number of moles in 7.3 g of hydrogen chloride, HCl. [2 marks]

**Working:**
- Mr of HCl = 1 + 35.5 = 36.5
- n = m / Mr
- n = 7.3 / 36.5
- **n = 0.2 mol** ✓✓

---

### Example 3: Reacting Masses
**Q:** Magnesium reacts with hydrochloric acid:
Mg + 2HCl → MgCl₂ + H₂
Calculate the mass of magnesium chloride produced when 4.8 g of magnesium reacts completely. [4 marks]

**Working:**
- Moles of Mg = 4.8 / 24 = 0.2 mol ✓
- From equation: 1 mol Mg → 1 mol MgCl₂ (ratio 1:1) ✓
- Moles of MgCl₂ = 0.2 mol
- Mr of MgCl₂ = 24 + (35.5 × 2) = 95
- Mass = 0.2 × 95 ✓
- **Mass = 19 g** ✓

---

### Example 4: Volume of Gas at RTP
**Q:** Calculate the volume of carbon dioxide produced at RTP when 5.0 g of calcium carbonate reacts with excess hydrochloric acid. [3 marks]
CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂

**Working:**
- Moles of CaCO₃ = 5.0 / 100 = 0.05 mol ✓
- From equation: 1 mol CaCO₃ → 1 mol CO₂
- Moles of CO₂ = 0.05 mol
- Volume = n × 24 = 0.05 × 24 ✓
- **Volume = 1.2 dm³** ✓

---

### Example 5: Concentration Calculation
**Q:** A solution contains 4.0 g of sodium hydroxide dissolved in 500 cm³ of water.
Calculate the concentration of the solution in mol/dm³. [3 marks]

**Working:**
- Moles of NaOH = 4.0 / 40 = 0.1 mol ✓
- Volume = 500 cm³ = 0.5 dm³ ✓
- Concentration = n / V = 0.1 / 0.5
- **Concentration = 0.2 mol/dm³** ✓

---

### Example 6: Percentage by Mass
**Q:** Calculate the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃. [3 marks]

**Working:**
- Mr of NH₄NO₃ = 14 + 4 + 14 + 48 = 80 ✓
- Mass of N = 14 × 2 = 28 ✓
- % N = (28 / 80) × 100
- **% N = 35%** ✓

---

### Example 7: Percentage Yield
**Q:** A student reacted zinc with copper sulfate solution. They calculated that 6.4 g of copper should be produced. The actual mass of copper obtained was 5.4 g.
Calculate the percentage yield. [2 marks]

**Working:**
- % yield = (actual / theoretical) × 100 ✓
- % yield = (5.4 / 6.4) × 100
- **% yield = 84.4% (or 84%)** ✓

---

### Example 8: Atom Economy
**Q:** Iron is extracted from iron(III) oxide using carbon monoxide:
Fe₂O₃ + 3CO → 2Fe + 3CO₂
Calculate the atom economy for producing iron in this reaction. [3 marks]

**Working:**
- Mr of desired product = 2 × 56 = 112 (for 2Fe) ✓
- Mr of all products = 112 + (3 × 44) = 112 + 132 = 244 ✓
- Atom economy = (112 / 244) × 100
- **Atom economy = 45.9%** ✓

---

### Example 9: Rf Value
**Q:** A student analysed a food colouring using paper chromatography. The solvent travelled 8.0 cm from the origin. One dye in the colouring travelled 5.2 cm.
Calculate the Rf value for this dye. [2 marks]

**Working:**
- Rf = distance moved by substance / distance moved by solvent ✓
- Rf = 5.2 / 8.0
- **Rf = 0.65** ✓

---

### Example 10: Titration Calculation
**Q:** 25.0 cm³ of sodium hydroxide solution was neutralised by 20.0 cm³ of 0.10 mol/dm³ hydrochloric acid.
Calculate the concentration of the sodium hydroxide solution in mol/dm³. [3 marks]
NaOH + HCl → NaCl + H₂O

**Working:**
- Moles of HCl = c × V = 0.10 × (20.0/1000) = 0.002 mol ✓
- From equation: 1 mol HCl reacts with 1 mol NaOH
- Moles of NaOH = 0.002 mol ✓
- Concentration of NaOH = n / V = 0.002 / (25.0/1000) = 0.002 / 0.025
- **Concentration = 0.08 mol/dm³** ✓
`;

const EDEXCEL_CHEMISTRY_DEFINITIONS = `
## Required Definitions (Edexcel Mark Scheme Wording)

### Bonding and Structure
- **Ion**: An atom or group of atoms that has lost or gained electrons (and so has a charge)
- **Ionic bonding**: Electrostatic attraction between oppositely charged ions
- **Covalent bonding**: A shared pair of electrons between atoms
- **Metallic bonding**: Electrostatic attraction between positive metal ions and delocalised electrons
- **Isotopes**: Atoms of the same element with the same number of protons but different numbers of neutrons
- **Relative atomic mass (Ar)**: The weighted mean mass of an atom compared to 1/12 the mass of a carbon-12 atom
- **Relative formula mass (Mr)**: The sum of the relative atomic masses of all atoms in a formula

### Chemical Changes
- **Oxidation**: Loss of electrons / gain of oxygen / increase in oxidation state
- **Reduction**: Gain of electrons / loss of oxygen / decrease in oxidation state
- **Acid**: A substance that produces H⁺ ions in aqueous solution
- **Alkali**: A soluble base that produces OH⁻ ions in aqueous solution
- **Salt**: A compound formed when the H⁺ ion from an acid is replaced by a metal ion or ammonium ion
- **Neutralisation**: The reaction between an acid and a base to form a salt and water (H⁺ + OH⁻ → H₂O)

### Rates and Energy
- **Rate of reaction**: The change in amount (or concentration) of reactant or product per unit time
- **Activation energy**: The minimum energy that colliding particles must have for a reaction to occur
- **Catalyst**: A substance that increases the rate of a reaction without being used up / provides an alternative pathway with lower activation energy
- **Exothermic reaction**: A reaction that transfers energy to the surroundings (temperature of surroundings increases)
- **Endothermic reaction**: A reaction that takes in energy from the surroundings (temperature of surroundings decreases)

### Equilibrium (Higher Tier)
- **Dynamic equilibrium**: When the rate of the forward reaction equals the rate of the backward reaction, and concentrations remain constant
- **Le Chatelier's principle**: When a system at equilibrium is subjected to a change, the system will act to oppose that change

### Organic Chemistry
- **Hydrocarbon**: A compound containing hydrogen and carbon only
- **Saturated**: Contains only single carbon-carbon bonds
- **Unsaturated**: Contains at least one carbon-carbon double bond
- **Homologous series**: A family of compounds with the same general formula and similar chemical properties
- **Functional group**: The atom or group of atoms responsible for the characteristic reactions of a compound
- **Polymer**: A long chain molecule made from many small repeating units (monomers)
- **Addition polymerisation**: When many unsaturated monomer molecules join together to form a polymer with no other substance formed

### Quantitative Chemistry
- **Mole**: The amount of substance that contains 6.02 × 10²³ particles
- **Concentration**: The amount of solute dissolved in a given volume of solution
- **Percentage yield**: (Actual yield / Theoretical yield) × 100
- **Atom economy**: (Mr of desired product / Sum of Mr of all products) × 100
`;

const EDEXCEL_CHEMISTRY_EXPLANATION_PATTERNS = `
## Explanation Patterns for Full Marks

### Explaining Rate Increases
**Pattern**: [Factor change] → [Effect on particles] → [Effect on collisions] → [Effect on rate]

Example: "Increasing temperature increases rate because..."
✓ "...particles have more kinetic energy (1)"
✓ "...particles move faster and collide more frequently (1)"
✓ "...more particles have energy ≥ activation energy (1)"
✓ "...more collisions are successful, so rate increases (1)"

### Explaining Electrolysis Products
**Pattern**: [Ion movement] → [At electrode] → [Reason for discharge]

Example: "During electrolysis of copper sulfate solution with inert electrodes..."
✓ "Cu²⁺ ions are attracted to the cathode (negative electrode) (1)"
✓ "Cu²⁺ ions gain electrons: Cu²⁺ + 2e⁻ → Cu (1)"
✓ "Copper is deposited because Cu²⁺ is less reactive than H⁺ / easier to discharge (1)"
✓ "At the anode, OH⁻ ions lose electrons: 4OH⁻ → O₂ + 2H₂O + 4e⁻ (1)"
✓ "Oxygen gas is produced because OH⁻ is easier to discharge than SO₄²⁻ (1)"

### Explaining Trends in Groups
**Pattern**: [Observation] → [Atomic structure reason] → [Effect on property]

Example: "Reactivity increases down Group 1 because..."
✓ "Atoms get larger down the group / more electron shells (1)"
✓ "Outer electron is further from the nucleus (1)"
✓ "Less attraction between nucleus and outer electron / more shielding (1)"
✓ "Outer electron is lost more easily (1)"

### Explaining Properties from Structure
**Pattern**: [Type of structure] → [Type of bonding/forces] → [Strength of forces] → [Property]

Example: "Explain why sodium chloride has a high melting point..."
✓ "Sodium chloride has a giant ionic lattice structure (1)"
✓ "Strong electrostatic forces of attraction between Na⁺ and Cl⁻ ions (1)"
✓ "These forces act in all directions throughout the structure (1)"
✓ "A lot of energy is needed to overcome these strong forces (1)"

### Comparing Substances
**Pattern**: [Statement about A] → [Comparative statement about B] → [Reason for difference]

Example: "Compare the electrical conductivity of sodium chloride and graphite..."
✓ "Solid NaCl does not conduct; graphite does conduct (1)"
✓ "In solid NaCl, ions are fixed in position and cannot move (1)"
✓ "In graphite, there are delocalised electrons that can move through the structure (1)"
✓ "Molten NaCl conducts because ions are free to move (1)"
`;

// Edexcel GCSE Chemistry guiding principles
const EDEXCEL_CHEMISTRY_PRINCIPLES = `
Edexcel GCSE Chemistry Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

Edexcel GCSE Chemistry Command Words:
- Calculate: Work out an answer using mathematical skills
- Compare: Identify similarities and differences
- Complete: Add missing information
- Define: State the meaning of something
- Describe: Give an account in words
- Determine: Use data to work out an answer
- Draw: Produce a diagram, graph or image
- Estimate: Give an approximate answer
- Evaluate: Review and reach a conclusion
- Explain: Give reasons for something
- Give/Name/State: Recall one or more pieces of information
- Identify: Name or select from given options
- Justify: Support a conclusion using evidence
- Plan: Write a method or procedure
- Predict: Give an expected result
- Sketch: Draw approximately
- Suggest: Apply knowledge to a new situation
- Write: Give an equation or formula

Edexcel Mark Scheme Conventions:
- Marks shown as (1) for each point
- Calculations require equation, substitution, and answer with units
- 6-mark questions: Extended open response using levels of response marking
  - Level 3 (5-6 marks): Comprehensive, logically structured answer with scientific terminology
  - Level 2 (3-4 marks): Mostly correct with some gaps in detail or structure
  - Level 1 (1-2 marks): Basic points with limited development
  - Indicative content is a GUIDE, not a checklist - credit valid alternatives
- Edexcel questions often MORE DATA-HEAVY than other boards
- Tables to complete are common (e.g., products at electrodes)
- Mark schemes are stricter than AQA - specific wording often required
- Chemical equations must be balanced with correct formulae
- State symbols required when question asks for them
- Higher tier content marked (HT)
- Consistent ramping of difficulty within questions (easy parts first)

Core Practicals (8 total):
1. Investigate change in pH on adding powdered calcium hydroxide/calcium oxide to HCl
2. Investigate temperature changes in reactions (neutralisation, displacement)
3. Investigate rate of reaction (surface area, concentration, temperature)
4. Investigate electrolysis of copper sulfate with BOTH inert AND copper electrodes
5. Prepare pure, dry sample of hydrated copper sulfate crystals
6. Separate mixture using paper chromatography AND simple distillation (inks)
7. Identify ions using chemical tests (flame tests, precipitates, gas tests)
8. Titration (Triple Science only)
`;

// Topic-specific guidance for Edexcel GCSE Chemistry
const CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-gcse-chemistry-key-concepts': `
Topic 1: Key Concepts in Chemistry:
- Atomic structure: protons (+1, mass 1), neutrons (0, mass 1), electrons (-1, negligible mass)
- Isotopes: same protons, different neutrons, calculate RAM from abundances
- Periodic table: groups = similar properties, periods = electron shells
- Ionic bonding: metal + non-metal, electron transfer, formulae like NaCl, MgO
- Covalent bonding: non-metals, shared electrons, simple molecular and giant covalent
- Metallic bonding: positive ions, delocalised electrons, explains conductivity
- Calculations: Mr, moles = mass/Mr, concentration = mass/volume
Edexcel often tests: dot and cross diagrams, explaining properties, mole calculations
`,
  'edexcel-gcse-chemistry-states-mixtures': `
Topic 2: States of Matter and Mixtures:
- Particle model: solids (fixed, vibrate), liquids (slide), gases (random, fast)
- Changes of state: melting, freezing, boiling, condensing, sublimation
- Pure substances have sharp melting/boiling points
- Separation: filtration (insoluble), crystallisation (dissolved solid), distillation (liquid)
- Chromatography: Rf = distance moved by spot / distance moved by solvent
- Rf values identify substances; pure substances give one spot
Edexcel often tests: explaining separation methods, Rf calculations, interpreting chromatograms
`,
  'edexcel-gcse-chemistry-chemical-changes': `
Topic 3: Chemical Changes:
- pH scale: 0-14, acids < 7, neutral = 7, alkalis > 7
- Neutralisation: acid + base → salt + water
- Reactions of acids: metal → salt + H₂; oxide/hydroxide → salt + H₂O; carbonate → salt + H₂O + CO₂
- Reactivity series: K, Na, Li, Ca, Mg, Al, Zn, Fe, Cu, Ag, Au
- Oxidation = loss of electrons, Reduction = gain of electrons (OILRIG)
- Electrolysis: positive ions to cathode (−), negative ions to anode (+)
- At cathode: metal or hydrogen formed; at anode: non-metal or oxygen
Edexcel often tests: predicting products of reactions, writing equations, electrolysis products
`,
  'edexcel-gcse-chemistry-metals-equilibria': `
Topic 4: Extracting Metals and Equilibria:
- Extraction method depends on reactivity: above C = electrolysis, below C = reduction
- Iron blast furnace: C + O₂ → CO₂, CO₂ + C → 2CO, Fe₂O₃ + 3CO → 2Fe + 3CO₂
- Biological extraction: phytomining (plants), bioleaching (bacteria)
- LCA stages: raw materials → manufacturing → use → disposal
- Reversible reactions: forward and backward occur simultaneously
- Dynamic equilibrium: rates equal, concentrations constant (HT)
- Le Chatelier: system opposes changes to temperature, pressure, concentration (HT)
Edexcel often tests: extraction methods, LCA comparisons, equilibrium shifts (HT)
`,
  'edexcel-gcse-chemistry-separate1': `
Topic 5: Separate Chemistry 1:
- Transition metals: coloured compounds, catalysts, variable oxidation states
- Alloys: mixtures of metals, harder than pure metals (different sized atoms)
- Rusting: iron + oxygen + water → hydrated iron(III) oxide
- Prevention: painting, oiling, coating, galvanising, sacrificial protection
- Titrations: accurate technique for finding unknown concentration
- Molar volume at RTP = 24 dm³/mol, n = V/24
Edexcel often tests: titration calculations, gas volume calculations, corrosion prevention
`,
  'edexcel-gcse-chemistry-groups': `
Topic 6: Groups in the Periodic Table:
- Group 1: soft metals, low density, react with water → hydroxide + H₂, reactivity increases down
- Group 7: coloured, diatomic molecules, reactivity decreases down, displacement reactions
- Halogen colours: F₂ (pale yellow), Cl₂ (green), Br₂ (red-brown), I₂ (grey/purple)
- Group 0: full outer shells, unreactive, boiling points increase down group
- Flame tests: Li (red), Na (yellow), K (lilac), Ca (orange-red), Cu (green)
- Precipitate tests with NaOH: Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (brown)
Edexcel often tests: explaining group trends, displacement reactions, identifying ions
`,
  'edexcel-gcse-chemistry-rates-energy': `
Topic 7: Rates of Reaction and Energy Changes:
- Rate = amount of product formed ÷ time (or reactant used ÷ time)
- Factors: concentration, temperature, surface area, catalyst, pressure (gases)
- Collision theory: more collisions = faster rate; higher energy = more successful
- Catalysts: lower activation energy, unchanged at end, provide alternative pathway
- Exothermic: energy released, temperature rises (combustion, neutralisation)
- Endothermic: energy absorbed, temperature falls (thermal decomposition, photosynthesis)
- Bond breaking = endothermic, bond making = exothermic
- Energy change = bonds broken − bonds formed (HT)
Edexcel often tests: explaining rate changes, reaction profiles, bond energy calculations (HT)
`,
  'edexcel-gcse-chemistry-fuels-earth': `
Topic 8: Fuels and Earth Science:
- Crude oil: mixture of hydrocarbons, separated by fractional distillation
- Alkanes: CₙH₂ₙ₊₂, saturated, single bonds, methane to decane
- Longer chain = higher boiling point, more viscous, less flammable
- Complete combustion: hydrocarbon + O₂ → CO₂ + H₂O
- Incomplete: produces CO (toxic) and/or C (soot/particulates)
- Pollutants: CO, SO₂ (acid rain), NOₓ (acid rain), particulates (health/dimming)
- Greenhouse gases: CO₂, CH₄, H₂O vapour trap heat
- Climate change: rising temperatures, sea levels, extreme weather
Edexcel often tests: naming/drawing alkanes, combustion equations, explaining greenhouse effect
`,
  'edexcel-gcse-chemistry-separate2': `
Topic 9: Separate Chemistry 2:
- Alkenes: CₙH₂ₙ, unsaturated, C=C double bond, decolourise bromine water
- Addition reactions: hydrogenation (+ H₂), hydration (+ H₂O), halogenation (+ halogen)
- Alcohols: -OH group, methanol, ethanol, propanol; fuels and solvents
- Carboxylic acids: -COOH group, weak acids, react with alcohols → esters
- Esters: fruity smells, used in perfumes and flavourings
- Polymers: addition (alkenes) or condensation (with small molecule released)
- Nanoparticles: 1-100 nm, high surface area to volume ratio, special properties
Edexcel often tests: organic functional groups, polymer structures, nanoparticle uses/risks
`
};

// Generate compact prompt for auto/standard questions
export function getEdexcelChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel GCSE Chemistry examiner creating an exam-style question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CHEMISTRY_REFERENCE_DATA}

${EDEXCEL_CHEMISTRY_EQUATIONS}

${EDEXCEL_CHEMISTRY_DEFINITIONS}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty} (${markRange.min}-${markRange.max} marks)

${topicGuidance}

DIFFICULTY AND MARK ALLOCATION:
- Easy: 1-3 marks (Recall, definitions, simple identifications)
- Medium: 4-6 marks (Application, calculations, explanations)
- Hard: 6-9 marks (Multi-step problems, extended explanations, data analysis)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this ${difficulty} difficulty question.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel GCSE Chemistry specification.

**DO NOT include Biology concepts such as:**
- Enzyme function or metabolic pathways (photosynthesis details, respiration steps)
- Biological applications of molecules beyond basic nutrition
- Cell biology, organelles, or biological membranes
- Ecological applications beyond basic environmental chemistry

**Focus ONLY on GCSE Chemistry content:**
- Chemical reactions, equations, and calculations
- Atomic structure and the periodic table
- Bonding, structure, and properties of matter
- Chemical analysis and practical techniques
- Energy changes, rates, and equilibrium
- Organic chemistry basics

Create ONE exam-style question that:
1. Uses authentic Edexcel GCSE Chemistry language and command words
2. Tests understanding appropriate to GCSE level
3. Has a mark allocation between ${markRange.min}-${markRange.max} marks (REQUIRED)
4. Matches the ${difficulty} difficulty level
5. Uses ONLY the Ar and Mr values from the reference data above
6. For calculations, follows the exact working pattern shown in worked examples

Return a JSON object with this exact structure:
{
  "content": "The full question text including mark allocation [X marks]",
  "marks": <number between ${markRange.min} and ${markRange.max}>,
  "solution": "Full worked answer with clear reasoning, showing all calculation steps",
  "markScheme": ["Mark point 1", "Mark point 2", ...]
}`;
}

// Generate extended response question prompt
export function getEdexcelChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Chemistry examiner creating a 6-mark extended response question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, detailed response
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Evaluate, Compare, Describe)
4. May include practical applications or real-world contexts

Assessed using levels of response:
Level 3 (5-6 marks): Comprehensive answer with clear logic and scientific terminology
Level 2 (3-4 marks): Good coverage but may lack detail or have minor errors
Level 1 (1-2 marks): Limited response with basic relevant points

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question with context]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer with excellent chemistry understanding]`;
}

// Generate multiple choice question prompt
export function getEdexcelChemistryMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Chemistry examiner creating a multiple choice question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

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
[Full explanation of the correct answer]`;
}

// Generate calculation question prompt
export function getEdexcelChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel GCSE Chemistry examiner creating a calculation question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CHEMISTRY_REFERENCE_DATA}

${EDEXCEL_CHEMISTRY_EQUATIONS}

${EDEXCEL_CHEMISTRY_WORKED_EXAMPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty} (${markRange.min}-${markRange.max} marks)

${topicGuidance}

CALCULATION TYPES FOR EDEXCEL GCSE CHEMISTRY:
- Relative formula mass (Mr) - 2-3 marks
- Moles from mass: n = m/Mr - 2-3 marks
- Mass from moles: m = n × Mr - 2-3 marks
- Reacting mass calculations - 3-4 marks
- Percentage yield and atom economy - 2-3 marks
- Concentration calculations (g/dm³ or mol/dm³) - 3 marks
- Rf value calculations - 2 marks
- Gas volume at RTP (HT): V = n × 24 - 3 marks
- Titration calculations - 4-5 marks

CRITICAL:
- ONLY use Ar values from the reference data above
- Follow the exact working pattern shown in the worked examples
- Award marks for: equation stated (1), correct substitution (1), answer with correct units (1)

Create ONE calculation question that:
1. Uses ONLY the Ar values provided in the reference data
2. Provides realistic numerical data that gives sensible answers
3. Has a clear, structured calculation with marks allocated
4. Uses appropriate significant figures (usually 2-3)
5. Follows Edexcel mark scheme conventions exactly

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation]

**Mark Scheme:**
[Step-by-step marking points - one per mark, showing where each mark is awarded]

**Explanation:**
[Complete worked solution following the pattern in worked examples, with every step shown]`;
}

// Generate explain question prompt
export function getEdexcelChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel GCSE Chemistry examiner creating an explanation question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CHEMISTRY_DEFINITIONS}

${EDEXCEL_CHEMISTRY_EXPLANATION_PATTERNS}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty} (${markRange.min}-${markRange.max} marks)

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of chemistry principles
2. Requires linking cause and effect using the patterns shown above
3. Uses appropriate Edexcel command words (Explain, Describe and explain)
4. May include practical or real-world contexts
5. Uses the exact definition wording from the mark scheme when relevant

DIFFICULTY GUIDE:
- Easy: Explain a single concept (2 marks)
- Medium: Explain a process or observation (3-4 marks)
- Hard: Explain a complex phenomenon linking multiple ideas (4-6 marks)

CRITICAL: Follow the explanation patterns shown above - marks are awarded for each linked point in the chain of reasoning.

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with mark allocation]

**Mark Scheme:**
[Key points required for full marks - one point per mark, following explanation patterns]

**Explanation:**
[Model answer using correct scientific terminology and following explanation patterns]`;
}

// Generate graph/data analysis question prompt
export function getEdexcelChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Chemistry examiner creating a graph or data analysis question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting chemical data or graphs
2. May require plotting, reading values, or calculating from graphs
3. Tests understanding of relationships between variables
4. Uses realistic chemistry data

Common graph types in Edexcel GCSE Chemistry:
- Rate of reaction graphs (volume/mass vs time)
- Temperature change graphs
- Chromatograms
- Solubility curves
- Heating/cooling curves

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation and conclusions]

**Explanation:**
[Model answer showing correct data analysis]`;
}

// Generate compare question prompt
export function getEdexcelChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Chemistry examiner creating a comparison question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related chemistry concepts, substances, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of underlying principles
4. Uses the command word 'Compare' appropriately

Possible comparisons in Edexcel GCSE Chemistry:
- Ionic vs covalent bonding
- Metals vs non-metals
- Simple molecular vs giant covalent
- Alkanes vs alkenes
- Exothermic vs endothermic
- Strong vs weak acids
- Addition vs condensation polymerisation

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// ============================================================================
// PRACTICAL-SPECIFIC PROMPTS FOR EDEXCEL CORE PRACTICALS
// ============================================================================

const EDEXCEL_CORE_PRACTICALS_DATA = `
## Edexcel GCSE Chemistry Core Practicals

### CP1: Investigate change in pH when adding calcium hydroxide/oxide to HCl
- Equipment: pH probe/universal indicator, measuring cylinder, beakers
- Variables: IV = amount of calcium hydroxide/oxide added, DV = pH
- Key points: pH increases from ~1 to 7 (neutralisation) then >7 (excess alkali)

### CP2: Investigate temperature changes in reactions
- Equipment: Polystyrene cup, thermometer, measuring cylinder
- Types: Neutralisation (exothermic), displacement (exothermic)
- Key points: Polystyrene insulates, take initial and final temperatures

### CP3: Investigate rate of reaction
- Equipment: Gas syringe/inverted measuring cylinder, stopwatch, balance
- Variables: surface area, concentration, temperature
- Methods: measure volume of gas produced OR measure mass loss over time

### CP4: Investigate electrolysis of copper sulfate
- Equipment: Power pack, electrodes (inert AND copper), beakers, wires
- With inert electrodes: Cu deposited at cathode, O₂ at anode
- With copper electrodes: Cu deposited at cathode, Cu dissolves at anode

### CP5: Prepare pure, dry sample of hydrated copper sulfate crystals
- Method: Add excess copper oxide to warm sulfuric acid, filter, crystallise
- Key points: Filter off excess, evaporate slowly to point of crystallisation

### CP6: Separate mixtures using chromatography and distillation
- Chromatography: Paper, baseline in pencil, suitable solvent
- Distillation: Liebig condenser, collecting vessel, thermometer at side-arm

### CP7: Identify ions using chemical tests
- Flame tests: Li (red), Na (yellow), K (lilac), Ca (orange-red), Cu (green)
- NaOH precipitates: Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (brown)
- Gas tests: CO₂ (limewater), H₂ (squeaky pop), O₂ (glowing splint), Cl₂ (bleaches)
- Halide tests: Add AgNO₃ - Cl⁻ (white), Br⁻ (cream), I⁻ (yellow)

### CP8: Titration (Triple Science only)
- Equipment: Burette, pipette (25.0 cm³), conical flask, white tile
- Method: Use indicator, add titrant drop by drop near endpoint, repeat for concordant results
`;

// Generate practical method question prompt
export function getEdexcelChemistryPracticalMethodPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `You are an expert Edexcel GCSE Chemistry examiner creating a Core Practical question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Focus: Method / Procedure
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about the METHOD of this core practical that:
1. Tests understanding of the procedure and why each step is important
2. May ask students to describe, explain, or evaluate the method
3. Uses authentic Edexcel language
4. Could ask about: equipment choices, step-by-step procedure, safety precautions

Question types to consider:
- "Describe how you would..." (method recall)
- "Explain why..." (understanding of method)
- "A student carried out... Suggest improvements" (evaluation)
- "What equipment would you use to..." (equipment selection)

OUTPUT FORMAT (use exact headers):
**Question:**
[Practical method question with mark allocation]

**Mark Scheme:**
[Key procedural points - one per mark]

**Explanation:**
[Model answer demonstrating full understanding of the method]`;
}

// Generate practical variables question prompt
export function getEdexcelChemistryPracticalVariablesPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `You are an expert Edexcel GCSE Chemistry examiner creating a Core Practical question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Focus: Variables
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about the VARIABLES in this core practical that:
1. Tests understanding of independent, dependent, and control variables
2. May ask students to identify, explain, or evaluate variable control
3. Uses authentic Edexcel language

Key terminology:
- Independent variable (IV): What you deliberately change
- Dependent variable (DV): What you measure
- Control variables: What you keep the same to ensure a fair test

Question types:
- "Identify the independent/dependent variable in this investigation"
- "Explain why it is important to control..."
- "Suggest one variable that should be kept constant and explain why"

OUTPUT FORMAT (use exact headers):
**Question:**
[Variables question with mark allocation]

**Mark Scheme:**
[Key points about variables - one per mark]

**Explanation:**
[Model answer demonstrating understanding of variables]`;
}

// Generate practical results/analysis question prompt
export function getEdexcelChemistryPracticalResultsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `You are an expert Edexcel GCSE Chemistry examiner creating a Core Practical question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CHEMISTRY_REFERENCE_DATA}

${EDEXCEL_CHEMISTRY_EQUATIONS}

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Focus: Results and Analysis
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about ANALYSING RESULTS from this core practical that:
1. Provides realistic data for students to analyse
2. May require calculations, graph interpretation, or pattern identification
3. Uses authentic Edexcel language
4. Tests ability to draw conclusions from evidence

Question types:
- "Use the data to calculate..." (quantitative analysis)
- "Describe the pattern shown in the results" (qualitative analysis)
- "Explain what the results show about..." (drawing conclusions)
- "Plot a graph of... and use it to..." (graphical analysis)

CRITICAL: Use realistic numerical values that match typical experimental results.

OUTPUT FORMAT (use exact headers):
**Question:**
[Results/analysis question with data table or graph description and mark allocation]

**Mark Scheme:**
[Key analytical points - one per mark, including correct numerical answers]

**Explanation:**
[Model answer showing full analysis with all working]`;
}

// Generate practical errors/improvements question prompt
export function getEdexcelChemistryPracticalErrorsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `You are an expert Edexcel GCSE Chemistry examiner creating a Core Practical question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Focus: Errors, Accuracy, and Improvements
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about ERRORS AND IMPROVEMENTS for this core practical that:
1. Tests understanding of experimental errors and how to minimise them
2. May ask about systematic vs random errors
3. Uses authentic Edexcel language

Key concepts:
- Random error: Affects precision, reduced by repeating and averaging
- Systematic error: Affects accuracy, same direction each time (e.g., zero error)
- Precision: How close repeated measurements are to each other
- Accuracy: How close the result is to the true value
- Resolution: Smallest change detectable by measuring instrument

Question types:
- "Suggest one source of error in this experiment"
- "Explain how the student could improve the accuracy/precision of their results"
- "The student's results were not accurate. Suggest a reason for this"
- "Why is it important to repeat the experiment?"

OUTPUT FORMAT (use exact headers):
**Question:**
[Error/improvement question with mark allocation]

**Mark Scheme:**
[Key points about errors/improvements - one per mark]

**Explanation:**
[Model answer demonstrating understanding of experimental errors]`;
}

// Generate practical safety question prompt
export function getEdexcelChemistryPracticalSafetyPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `You are an expert Edexcel GCSE Chemistry examiner creating a Core Practical question.

${EDEXCEL_CHEMISTRY_PRINCIPLES}

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Focus: Safety and Risk Assessment
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about SAFETY in this core practical that:
1. Tests understanding of hazards and precautions
2. May ask students to identify risks and explain how to minimise them
3. Uses authentic Edexcel language

Key terminology:
- Hazard: Something that could cause harm (e.g., corrosive acid)
- Risk: The likelihood of harm occurring
- Precaution: Action taken to reduce risk (e.g., wear goggles)

Common chemistry hazards:
- Acids/alkalis: Corrosive - wear goggles, avoid skin contact
- Flammable substances: Keep away from flames
- Toxic substances: Work in fume cupboard, avoid inhalation
- Hot apparatus: Allow to cool, use tongs
- Electrical equipment: Keep away from water

Question types:
- "Give one hazard and one precaution for this experiment"
- "Explain why the student should wear safety goggles"
- "Describe the safety precautions needed when..."

OUTPUT FORMAT (use exact headers):
**Question:**
[Safety question with mark allocation]

**Mark Scheme:**
[Key safety points - one per mark]

**Explanation:**
[Model answer demonstrating understanding of safety]`;
}
