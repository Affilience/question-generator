// OCR GCSE Chemistry Gateway (J248) Question Generation Prompts
// Tailored to OCR specification style and assessment objectives

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import {
  getRandomVarietyInstructions,
} from './prompts-common';


// GCSE Chemistry mark ranges based on OCR Gateway specification
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
// OCR GCSE CHEMISTRY GATEWAY SPECIFICATION DETAILS (J248)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_CHEMISTRY_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Chemistry Gateway Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 40% |
| **AO2** | Apply knowledge and understanding of scientific ideas and scientific enquiry, techniques and procedures | 40% |
| **AO3** | Analyse information and ideas to interpret and evaluate, make judgements and draw conclusions, develop and improve experimental procedures | 20% |

### Paper Structure (Total: 180 marks) - LOWER than AQA/Edexcel (200)
| Paper | Content | Time | Marks | Weighting |
|-------|---------|------|-------|-----------|
| **Paper 1 (Breadth)** | Topics C1-C3: Particles, Elements, Chemical Reactions | 1h 45m | 90 | 50% |
| **Paper 2 (Depth)** | Topics C4-C6: Predicting, Monitoring, Global Challenges | 1h 45m | 90 | 50% |

### Tiers and Grade Availability
- **Foundation tier**: Grades 1-5 (Papers 01 and 02)
- **Higher tier**: Grades 4-9 (Papers 03 and 04)
- OCR uses "Breadth" and "Depth" paper model (unique among exam boards)
- Paper 1 tests breadth of knowledge; Paper 2 requires deeper understanding

### Mathematical Skills: 20% minimum
OCR Chemistry papers assess mathematical skills including:
- Use of ratios and percentages
- Change the subject of equations
- Calculate with standard form
- Plot and interpret graphs
`;

const OCR_CHEMISTRY_PAGS = `
## OCR GCSE Chemistry PAGs (Practical Activity Groups)

OCR uses flexible PAGs rather than fixed Required Practicals. Centres can choose how to demonstrate practical skills.

| PAG | Name | Key Skills Tested | Linked Topics |
|-----|------|-------------------|---------------|
| **PAG C1** | Analysis | Flame tests, NaOH precipitates, gas tests | C4: Predicting |
| **PAG C2** | Titration | Accurate volumes, concordant results, calculations | C3, C4 |
| **PAG C3** | Electrolysis | Products at electrodes, half equations | C3: Reactions |
| **PAG C4** | Preparing Salts | Crystallisation, filtration, purity | C3: Reactions |
| **PAG C5** | Rates of Reaction | Variables, measuring change over time | C5: Monitoring |
| **PAG C6** | Energy Changes | Temperature change, exo/endothermic | C5: Monitoring |
| **PAG C7** | Separation | Chromatography, distillation | C2: Elements |
| **PAG C8** | Dissolving | Solubility, factors affecting dissolving | C2: Elements |

### Practical Assessment in Exams
- At least **15%** of marks assess practical skills
- Questions test knowledge derived from PAG activities
- PAGs are flexible - centres choose specific experiments within groups
- Practical endorsement is separate (pass/fail) for A-Level progression
`;

const OCR_CHEMISTRY_COMMAND_WORDS = `
## OCR GCSE Chemistry Command Words (Board-Specific Preferences)

**OCR Preferred Style:** Context-driven interpretive questions. Emphasizes "suggest", "discuss" and "outline" requiring application to unfamiliar scenarios.

### Knowledge Commands (AO1)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **State** | Express briefly without explanation | 1 |
| **Give / Name** | Short answer; recall facts | 1 |
| **Identify** | Name from options or context | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Write** | Produce an equation or formula | 1-2 |
| **Complete** | Add missing information | 1-2 |

### Application Commands (AO2)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Work out an answer showing working | 2-4 |
| **Determine** | Use data or information to obtain answer | 2-3 |
| **Show (that)** | Provide evidence for given conclusion | 2-3 |
| **Describe** | State features without explanation | 2-3 |
| **Explain** | Give reasons linking cause and effect | 2-4 |
| **Suggest** | Apply knowledge to new situations | 2-3 |
| **Predict** | Give expected result with reasoning | 1-2 |

### Analysis Commands (AO3)
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Compare** | Identify similarities AND differences | 2-4 |
| **Evaluate** | Review evidence and reach judgement | 3-6 |
| **Justify** | Give reasons supporting a conclusion | 2-4 |
| **Plan / Design** | Set out an investigation method | 3-6 |
| **Sketch** | Draw showing main features only | 1-2 |
| **Draw** | Produce accurate diagram/graph | 1-3 |
| **Estimate** | Give approximate value with reasoning | 1-2 |
`;

const OCR_CHEMISTRY_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE Chemistry Mark Scheme Conventions

### Mark Indicators
| Symbol | Meaning |
|--------|---------|
| **[n]** | Total marks for question (in square brackets) |
| **✓** | Correct/acceptable answer |
| **✗** | Incorrect answer |
| **ORA** | Or reverse argument acceptable |
| **ALLOW** | Alternative acceptable answer |
| **IGNORE** | Do not credit or penalise |
| **NOT** | Do not accept this answer |
| **ecf** | Error carried forward |
| **AW** | Alternative wording acceptable |

### Calculation Marking (Typical 3-4 marks)
1. Correct equation/formula (1)
2. Correct substitution with values (1)
3. Correct calculation (1)
4. Answer with correct units (1)

### Extended Response (6-mark) - Marked with Asterisk (*)
OCR emphasises LOGICAL STRUCTURE over content lists:
**Level 3 (5-6 marks):** "Well-developed line of reasoning which is clear and logically structured. The information presented is relevant and substantiated."
**Level 2 (3-4 marks):** "Line of reasoning is supported by some evidence and there is a basic logical structure."
**Level 1 (1-2 marks):** "Basic line of reasoning is presented with limited evidence and structure."

### Important OCR Conventions
- **Quality of extended response**: Asterisked questions assess quality of argument
- **First answer only**: If multiple answers given, only first is marked
- **Logical structure**: OCR rewards coherent reasoning over bullet points
- **Lower total marks**: 180 vs 200 for AQA/Edexcel means questions must be efficient
`;

// ============================================================================
// COMPLETE OCR GCSE CHEMISTRY REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const OCR_CHEMISTRY_REFERENCE_DATA = `
## Key Values and Constants (MUST USE THESE)

### Relative Atomic Masses (Ar) - From OCR Data Sheet
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

### Avogadro Constant
- **6.02 × 10²³** particles per mole

### Molar Gas Volume at RTP
- **24 dm³** per mole (or 24,000 cm³)
- RTP = Room Temperature and Pressure

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
| Propene | C₃H₆ | 42 |
| Ethanol | C₂H₅OH | 46 |
| Ethanoic acid | CH₃COOH | 60 |
| Hydrochloric acid | HCl | 36.5 |
| Sulfuric acid | H₂SO₄ | 98 |
| Nitric acid | HNO₃ | 63 |
| Sodium hydroxide | NaOH | 40 |
| Calcium hydroxide | Ca(OH)₂ | 74 |
| Sodium chloride | NaCl | 58.5 |
| Calcium carbonate | CaCO₃ | 100 |
| Magnesium oxide | MgO | 40 |
| Copper oxide | CuO | 80 |
| Iron(III) oxide | Fe₂O₃ | 160 |
| Aluminium oxide | Al₂O₃ | 102 |
| Copper sulfate | CuSO₄ | 160 |
| Magnesium sulfate | MgSO₄ | 120 |

### Reactivity Series (MUST MEMORISE)
**Most reactive → Least reactive:**
Potassium > Sodium > Lithium > Calcium > Magnesium > Aluminium > (Carbon) > Zinc > Iron > (Hydrogen) > Copper > Silver > Gold

Key applications:
- Above carbon: extracted by electrolysis
- Below carbon: extracted by reduction with carbon
- Above hydrogen: react with dilute acids to give hydrogen
- Below hydrogen: do NOT react with dilute acids

### Common Bond Energies (kJ/mol) - For Higher Tier
| Bond | Energy |
|------|--------|
| H-H | 436 |
| C-H | 413 |
| C-C | 347 |
| C=C | 614 |
| O-H | 464 |
| O=O | 498 |
| C-O | 358 |
| C=O | 805 |
| N≡N | 945 |
| N-H | 391 |
`;

const OCR_CHEMISTRY_EQUATIONS = `
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
| Number of particles | N = n × 6.02 × 10²³ | particles |

### Percentage Calculations
| Equation | When to Use |
|----------|-------------|
| % by mass = (Ar × number of atoms / Mr) × 100 | Finding % of element in compound |
| % yield = (actual yield / theoretical yield) × 100 | Comparing actual to expected mass |
| Atom economy = (Mr of desired product / sum of Mr of all products) × 100 | Evaluating efficiency |

### Chromatography
| Equation | Notes |
|----------|-------|
| Rf = distance moved by substance / distance moved by solvent | Both measured from origin/baseline |

### Energy Calculations (Higher Tier)
| Equation | When Positive/Negative |
|----------|------------------------|
| Energy change = Σ(bond energies broken) − Σ(bond energies made) | + = endothermic, − = exothermic |
`;

const OCR_CHEMISTRY_REACTIONS = `
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

### Electrolysis Products
| Electrolyte | At Cathode (−) | At Anode (+) |
|-------------|----------------|--------------|
| Molten NaCl | Sodium metal | Chlorine gas |
| Molten PbBr₂ | Lead metal | Bromine |
| Molten Al₂O₃ | Aluminium metal | Oxygen gas |
| Aq. NaCl (concentrated) | Hydrogen gas | Chlorine gas |
| Aq. NaCl (dilute) | Hydrogen gas | Oxygen gas |
| Aq. CuSO₄ (inert electrodes) | Copper metal | Oxygen gas |
| Aq. H₂SO₄ | Hydrogen gas | Oxygen gas |

### Group 1 Reactions with Water
| Metal | Products | Observations |
|-------|----------|--------------|
| Lithium | LiOH + H₂ | Floats, fizzes gently |
| Sodium | NaOH + H₂ | Floats, fizzes, melts to ball |
| Potassium | KOH + H₂ | Floats, fizzes violently, lilac flame |

### Halogen Displacement
| More reactive halogen displaces less reactive halide |
| Cl₂ + 2KBr → 2KCl + Br₂ (colourless → orange) |
| Cl₂ + 2KI → 2KCl + I₂ (colourless → brown) |
| Br₂ + 2KI → 2KBr + I₂ (orange → brown) |

### Thermal Decomposition
| Type | Products | Example |
|------|----------|---------|
| Metal carbonate | Metal oxide + CO₂ | CaCO₃ → CaO + CO₂ |
| Metal hydroxide | Metal oxide + H₂O | Cu(OH)₂ → CuO + H₂O |

### Combustion Reactions
| Type | Products |
|------|----------|
| Complete | CO₂ + H₂O |
| Incomplete | CO and/or C (soot) + H₂O |
`;

const OCR_CHEMISTRY_WORKED_EXAMPLES = `
## Worked Calculation Examples (OCR Style)

### Example 1: Calculate Mr
**Q:** Calculate the relative formula mass (Mr) of magnesium sulfate, MgSO₄. [2]

**Working:**
- Ar values: Mg = 24, S = 32, O = 16
- Mr = 24 + 32 + (16 × 4)
- Mr = 24 + 32 + 64
- **Mr = 120** ✓✓

---

### Example 2: Moles from Mass
**Q:** Calculate the number of moles in 11.2 g of calcium oxide, CaO. [2]

**Working:**
- Mr of CaO = 40 + 16 = 56
- n = m / Mr ✓
- n = 11.2 / 56
- **n = 0.2 mol** ✓

---

### Example 3: Reacting Masses
**Q:** Calcium carbonate decomposes on heating:
CaCO₃ → CaO + CO₂
Calculate the mass of calcium oxide produced from 25 g of calcium carbonate. [3]

**Working:**
- Moles of CaCO₃ = 25 / 100 = 0.25 mol ✓
- From equation: 1 mol CaCO₃ → 1 mol CaO
- Moles of CaO = 0.25 mol ✓
- Mass of CaO = 0.25 × 56 = **14 g** ✓

---

### Example 4: Volume of Gas at RTP
**Q:** Calculate the volume of hydrogen produced at RTP when 0.48 g of magnesium reacts with excess hydrochloric acid. [3]
Mg + 2HCl → MgCl₂ + H₂

**Working:**
- Moles of Mg = 0.48 / 24 = 0.02 mol ✓
- From equation: 1 mol Mg → 1 mol H₂
- Moles of H₂ = 0.02 mol
- Volume = n × 24 = 0.02 × 24 ✓
- **Volume = 0.48 dm³** ✓

---

### Example 5: Concentration Calculation
**Q:** A student dissolves 8.0 g of sodium hydroxide in water to make 250 cm³ of solution.
Calculate the concentration in mol/dm³. [3]

**Working:**
- Moles of NaOH = 8.0 / 40 = 0.2 mol ✓
- Volume = 250 cm³ = 0.25 dm³ ✓
- Concentration = n / V = 0.2 / 0.25
- **Concentration = 0.8 mol/dm³** ✓

---

### Example 6: Percentage by Mass
**Q:** Calculate the percentage by mass of oxygen in sulfuric acid, H₂SO₄. [3]

**Working:**
- Mr of H₂SO₄ = 2 + 32 + 64 = 98 ✓
- Mass of O = 16 × 4 = 64 ✓
- % O = (64 / 98) × 100
- **% O = 65.3%** ✓

---

### Example 7: Percentage Yield
**Q:** A reaction should produce 12.0 g of copper. A student obtained 9.6 g.
Calculate the percentage yield. [2]

**Working:**
- % yield = (actual / theoretical) × 100 ✓
- % yield = (9.6 / 12.0) × 100
- **% yield = 80%** ✓

---

### Example 8: Atom Economy
**Q:** Calculate the atom economy for making ammonia in the Haber process:
N₂ + 3H₂ → 2NH₃ [3]

**Working:**
- Mr of desired product (2NH₃) = 2 × 17 = 34 ✓
- Mr of all products = 34 (only ammonia formed) ✓
- Atom economy = (34 / 34) × 100
- **Atom economy = 100%** ✓

---

### Example 9: Rf Value
**Q:** In a chromatography experiment, the solvent front moved 10.0 cm. A spot of dye moved 6.5 cm.
Calculate the Rf value. [2]

**Working:**
- Rf = distance of spot / distance of solvent ✓
- Rf = 6.5 / 10.0
- **Rf = 0.65** ✓

---

### Example 10: Bond Energy Calculation (Higher Tier)
**Q:** Use the bond energies to calculate the energy change for:
CH₄ + 2O₂ → CO₂ + 2H₂O
Bond energies: C-H = 413 kJ/mol, O=O = 498 kJ/mol, C=O = 805 kJ/mol, O-H = 464 kJ/mol [4]

**Working:**
- Bonds broken: 4 × C-H + 2 × O=O = (4 × 413) + (2 × 498) = 1652 + 996 = 2648 kJ ✓
- Bonds made: 2 × C=O + 4 × O-H = (2 × 805) + (4 × 464) = 1610 + 1856 = 3466 kJ ✓
- Energy change = bonds broken − bonds made = 2648 − 3466 ✓
- **Energy change = −818 kJ/mol** (exothermic) ✓
`;

const OCR_CHEMISTRY_DEFINITIONS = `
## Required Definitions (OCR Mark Scheme Wording)

### Structure and Bonding
- **Ion**: An atom or group of atoms with a positive or negative charge (due to loss/gain of electrons)
- **Ionic bonding**: The electrostatic attraction between oppositely charged ions
- **Covalent bonding**: A shared pair of electrons between atoms
- **Metallic bonding**: The attraction between positive metal ions and delocalised electrons
- **Isotopes**: Atoms of the same element with the same number of protons but different numbers of neutrons
- **Relative atomic mass (Ar)**: The weighted mean mass of an atom relative to 1/12 the mass of carbon-12
- **Relative formula mass (Mr)**: The sum of the relative atomic masses of all atoms in a formula
- **Allotropes**: Different structural forms of the same element in the same physical state

### Chemical Changes
- **Oxidation**: Loss of electrons / gain of oxygen / increase in oxidation number
- **Reduction**: Gain of electrons / loss of oxygen / decrease in oxidation number
- **Acid**: A substance that releases H⁺ ions when dissolved in water
- **Alkali**: A base that dissolves in water to release OH⁻ ions
- **Base**: A substance that reacts with an acid to form a salt and water only
- **Neutralisation**: The reaction between an acid and a base to form salt and water
- **Salt**: An ionic compound formed when the H⁺ ion of an acid is replaced by a metal ion or ammonium ion

### Rates and Energy
- **Rate of reaction**: The change in concentration of reactant or product per unit time
- **Activation energy**: The minimum energy required for a reaction to occur
- **Catalyst**: A substance that increases the rate of a reaction without being used up / provides alternative pathway with lower activation energy
- **Exothermic reaction**: A reaction that releases energy to the surroundings (temperature increases)
- **Endothermic reaction**: A reaction that absorbs energy from the surroundings (temperature decreases)

### Equilibrium (Higher Tier)
- **Reversible reaction**: A reaction that can proceed in both forward and reverse directions
- **Dynamic equilibrium**: When the rate of forward reaction equals the rate of reverse reaction (in a closed system)
- **Le Chatelier's principle**: When a system at equilibrium is disturbed, it adjusts to minimise the change

### Organic Chemistry
- **Hydrocarbon**: A compound containing hydrogen and carbon atoms only
- **Saturated**: A molecule containing only single covalent bonds
- **Unsaturated**: A molecule containing at least one double covalent bond
- **Homologous series**: A series of compounds with the same functional group and general formula
- **Functional group**: An atom or group of atoms responsible for the characteristic reactions of a compound
- **Polymer**: A large molecule made from many small repeating units (monomers) joined together
- **Addition polymerisation**: When unsaturated monomers join to form a polymer with no other product
`;

const OCR_CHEMISTRY_EXPLANATION_PATTERNS = `
## Explanation Patterns for Full Marks (OCR emphasises logical structure)

### Explaining Rate Changes
**Pattern**: [Change made] → [Effect on particles] → [Effect on collisions] → [Effect on rate]

Example: "Explain why increasing concentration increases rate of reaction"
✓ "More particles per unit volume (1)"
✓ "Particles are closer together / collide more frequently (1)"
✓ "More successful collisions per second (1)"
✓ "Rate increases (1)"

### Explaining Properties from Structure
**Pattern**: [Type of structure] → [Type of bonding/forces] → [Energy required] → [Property explained]

Example: "Explain why diamond has a high melting point"
✓ "Giant covalent structure (1)"
✓ "Strong covalent bonds between all carbon atoms (1)"
✓ "Many strong bonds throughout structure (1)"
✓ "Large amount of energy needed to break these bonds (1)"

### Explaining Group Trends
**Pattern**: [Trend observation] → [Atomic structure change] → [Effect on electrons] → [Effect on property]

Example: "Explain why reactivity decreases down Group 7"
✓ "Atoms get larger / more electron shells down the group (1)"
✓ "Outer shell is further from nucleus (1)"
✓ "Weaker attraction for incoming electrons / more shielding (1)"
✓ "Harder to gain an electron, so less reactive (1)"

### Explaining Electrolysis
**Pattern**: [Ions present] → [Movement] → [Discharge] → [Products]

Example: "Explain what happens at the electrodes during electrolysis of molten sodium chloride"
✓ "Na⁺ ions attracted to cathode (negative electrode) (1)"
✓ "Na⁺ gains electron: Na⁺ + e⁻ → Na (reduction) (1)"
✓ "Cl⁻ ions attracted to anode (positive electrode) (1)"
✓ "Cl⁻ loses electrons: 2Cl⁻ → Cl₂ + 2e⁻ (oxidation) (1)"

### Comparing Structures
**Pattern**: [Structure A feature] → [Structure B feature] → [Reason for difference]

Example: "Compare ionic and covalent compounds in terms of conductivity"
✓ "Ionic compounds conduct when molten or in solution (1)"
✓ "Simple covalent compounds do not conduct (1)"
✓ "Ionic: ions are free to move and carry charge (1)"
✓ "Covalent: no ions / no charged particles present (1)"
`;

// OCR GCSE Chemistry guiding principles
const OCR_CHEMISTRY_PRINCIPLES = `
OCR GCSE Chemistry Gateway Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, techniques and procedures (40%)
- AO2: Apply knowledge and understanding of scientific ideas and techniques (40%)
- AO3: Analyse information and ideas to interpret and evaluate (20%)

OCR GCSE Chemistry Command Words:
- Calculate: Work out a numerical answer
- Compare: Identify similarities and/or differences
- Complete: Add missing information
- Define: State the meaning of a term
- Describe: Give an account in words
- Determine: Use data to reach a conclusion
- Draw: Produce a diagram or graph
- Estimate: Give an approximate value
- Evaluate: Review and reach a conclusion
- Explain: Give reasons for something
- Give/Name/State: Recall one or more pieces of information
- Identify: Name from given options
- Justify: Support with evidence
- Plan: Write a method
- Predict: Give an expected result
- Sketch: Draw approximately
- Suggest: Apply knowledge to new situations
- Write: Produce an equation or formula

OCR Mark Scheme Conventions:
- Total marks: 180 (90 per paper) - LOWER than AQA/Edexcel (200)
- One mark per valid point unless otherwise stated
- Calculations: equation (1), substitution (1), answer with units (1)
- 6-mark questions marked with ASTERISK (*) - "Quality of extended response"
  - Level 3 (5-6 marks): "Well-developed line of reasoning which is clear and logically structured"
  - Level 2 (3-4 marks): "Line of reasoning is supported by some evidence"
  - Level 1 (1-2 marks): "Basic line of reasoning with limited evidence"
  - OCR emphasises LOGICAL STRUCTURE and REASONING over content lists
- Chemical equations must be balanced with correct formulae
- Accept correct alternatives unless specific wording required
- Higher tier content indicated with (HT)
- If multiple responses given, only FIRST response is marked

Practical Activity Groups (PAGs) - More flexible than AQA/Edexcel:
- PAG C1: Analysis - identifying ions (flame tests, precipitates, gas tests)
- PAG C2: Titration - acid-base with indicator
- PAG C3: Electrolysis - investigating products at electrodes
- PAG C4: Preparing salts - making pure crystals
- PAG C5: Rates of reaction - investigating factors
- PAG C6: Endothermic and exothermic reactions - temperature changes
Note: PAGs are SUGGESTED activities - centres have flexibility in how they demonstrate competency
`;

// Topic-specific guidance for OCR GCSE Chemistry
const CHEMISTRY_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-gcse-chemistry-particles': `
Topic C1: Particles:
- Particle model: solids (fixed, vibrate), liquids (slide past), gases (random, fast)
- Changes of state do not change the particles, only arrangement and energy
- Atomic structure: protons (+1, mass 1), neutrons (0, mass 1), electrons (-1, negligible)
- Isotopes: same protons, different neutrons; RAM calculated from abundances
- Electron shells: 2, 8, 8... configuration determines position in periodic table
- Ionic bonding: metal loses electrons, non-metal gains, electrostatic attraction
- Covalent bonding: shared pairs of electrons, strong bonds within molecules
- Metallic bonding: positive ions in sea of delocalised electrons
- Carbon allotropes: diamond (hard), graphite (layers, conducts), graphene (single layer)
OCR often tests: dot and cross diagrams, explaining properties from structure
`,
  'ocr-gcse-chemistry-elements-compounds': `
Topic C2: Elements, Compounds and Mixtures:
- Pure substances have fixed melting/boiling points; impurities broaden range
- Formulations: mixtures designed for purpose (medicines, paints, alloys)
- Separation: filtration (insoluble), crystallisation (dissolved), distillation (liquids)
- Chromatography: Rf = distance of spot / distance of solvent front
- Group 1: soft, low density, react with water → hydroxide + H₂, reactivity increases down
- Group 7: coloured, diatomic, reactivity decreases down, displacement reactions
- Group 0: full outer shells, unreactive, boiling points increase down
- Transition metals: coloured compounds, catalysts, multiple oxidation states
- Nanoparticles (1-100 nm): high surface area:volume ratio, unique properties
OCR often tests: explaining group trends, separation methods, chromatogram analysis
`,
  'ocr-gcse-chemistry-reactions': `
Topic C3: Chemical Reactions:
- Conservation of mass: atoms rearranged, not created or destroyed
- Moles: n = m/Mr, Avogadro = 6.02 × 10²³
- Reacting masses use mole ratios from balanced equations
- pH scale: 0-14, acids < 7, neutral = 7, alkalis > 7
- Neutralisation: acid + base → salt + water; H⁺ + OH⁻ → H₂O
- Acid reactions: +metal → salt + H₂; +carbonate → salt + CO₂ + H₂O
- Strong acids fully ionise; weak acids partially ionise (HT)
- Electrolysis: positive ions to cathode, negative to anode
- Exothermic: energy out, temperature rises; endothermic: energy in, temperature falls
- Bond energy calculations: energy change = bonds broken − bonds formed (HT)
OCR often tests: mole calculations, balancing equations, electrolysis products, energy profiles
`,
  'ocr-gcse-chemistry-predicting': `
Topic C4: Predicting and Identifying Reactions and Products:
- Reactivity series: K, Na, Li, Ca, Mg, Al, Zn, Fe, Cu, Ag, Au
- More reactive metals displace less reactive from compounds
- Oxidation = loss of electrons, Reduction = gain of electrons (OILRIG)
- Metals above carbon extracted by electrolysis; below carbon by reduction
- Flame tests: Li (red), Na (yellow), K (lilac), Ca (orange-red), Cu (green)
- NaOH precipitates: Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (brown)
- Halide tests with AgNO₃: Cl⁻ (white), Br⁻ (cream), I⁻ (yellow)
- Sulfate test: BaCl₂ gives white precipitate
- Gas tests: H₂ (squeaky pop), O₂ (relights splint), CO₂ (limewater), Cl₂ (bleaches)
OCR often tests: predicting products, ionic equations, identifying unknowns
`,
  'ocr-gcse-chemistry-monitoring': `
Topic C5: Monitoring and Controlling Chemical Reactions:
- Rate = amount of product ÷ time (or reactant used ÷ time)
- Factors: concentration, temperature, surface area, catalyst, pressure (gases)
- Collision theory: more frequent and energetic collisions = faster rate
- Catalysts lower activation energy, provide alternative pathway, unchanged at end
- Reversible reactions: ⇌ symbol, both directions occur
- Dynamic equilibrium: rates equal, concentrations constant (closed system) (HT)
- Le Chatelier's principle: system opposes changes (HT)
- Haber process: N₂ + 3H₂ ⇌ 2NH₃, 450°C, 200 atm, iron catalyst (compromise)
OCR often tests: rate graphs, collision theory explanations, equilibrium shifts (HT)
`,
  'ocr-gcse-chemistry-global': `
Topic C6: Global Challenges:
- Crude oil: mixture of hydrocarbons, separated by fractional distillation
- Alkanes: CₙH₂ₙ₊₂, saturated; alkenes: CₙH₂ₙ, unsaturated, C=C
- Longer chains: higher boiling point, more viscous, less flammable
- Complete combustion: CO₂ + H₂O; incomplete: CO and/or C (soot)
- Cracking: large alkanes → smaller alkanes + alkenes (thermal or catalytic)
- Polymers from alkenes by addition polymerisation
- Alcohols (-OH): fuels and solvents; carboxylic acids (-COOH): weak acids
- Esters from alcohol + carboxylic acid (+ acid catalyst)
- Atmosphere evolved: early CO₂ → O₂ from photosynthesis
- Greenhouse effect: CO₂, CH₄, H₂O vapour trap IR radiation
- Climate change: rising temperatures, sea levels, extreme weather
- Potable water: sedimentation → filtration → chlorination
OCR often tests: organic structures, combustion products, atmosphere evolution, sustainability
`
};

// Generate compact prompt for auto/standard questions
export function getOCRChemistryCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating an exam-style question.

## OCR QUESTION STYLE
- Use **context-led scenarios** with real-world chemistry applications
- Require **application of knowledge to unfamiliar situations**
- Include **interpretive and analytical elements** in questions
- Use **breadth and depth assessment approach**
- Present chemistry in **practical, applied contexts**

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_CHEMISTRY_REFERENCE_DATA}

${OCR_CHEMISTRY_EQUATIONS}

${OCR_CHEMISTRY_DEFINITIONS}

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
You MUST ONLY test content that is in the OCR GCSE Chemistry specification.

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
1. Uses authentic OCR GCSE Chemistry language and command words
2. Tests understanding appropriate to GCSE level
3. Has a mark allocation between ${markRange.min}-${markRange.max} marks (REQUIRED)
4. Matches the ${difficulty} difficulty level
5. Uses ONLY the Ar and Mr values from the reference data above
6. For calculations, follows the exact working pattern shown in worked examples

${varietyInstructions}

Return a JSON object with this exact structure:
{
  "content": "The full question text including mark allocation [X marks]",
  "marks": <number between ${markRange.min} and ${markRange.max}>,
  "solution": "Full worked answer with clear reasoning, showing all calculation steps",
  "markScheme": ["Mark point 1", "Mark point 2", ...]
}`;
}

// Generate extended response question prompt
export function getOCRChemistryExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a 6-mark extended response question.

${OCR_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, detailed response
2. Tests understanding across multiple aspects of the topic
3. Uses appropriate command words (Explain, Evaluate, Compare, Describe)
4. May include practical contexts or applications

${varietyInstructions}

Assessed using levels of response:
Level 3 (5-6 marks): Comprehensive answer with clear logic and terminology
Level 2 (3-4 marks): Good coverage but may lack detail or have minor gaps
Level 1 (1-2 marks): Limited response with basic relevant points

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question with context]

**Mark Scheme:**
[Level descriptors and indicative content]

**Explanation:**
[Model Level 3 answer demonstrating excellent understanding]`;
}

// Generate multiple choice question prompt
export function getOCRChemistryMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a multiple choice question.

${OCR_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE multiple choice question that:
1. Has exactly 4 options (A, B, C, D)
2. Has ONE correct answer
3. Includes plausible distractors based on common misconceptions
4. Tests understanding at GCSE level

${varietyInstructions}

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
export function getOCRChemistryCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a calculation question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_CHEMISTRY_REFERENCE_DATA}

${OCR_CHEMISTRY_EQUATIONS}

${OCR_CHEMISTRY_WORKED_EXAMPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty} (${markRange.min}-${markRange.max} marks)

${topicGuidance}

CALCULATION TYPES FOR OCR GCSE CHEMISTRY:
- Relative formula mass (Mr) - 2 marks
- Moles from mass: n = m/Mr - 2-3 marks
- Reacting mass calculations - 3-4 marks
- Percentage yield and atom economy - 2-3 marks
- Concentration in g/dm³ or mol/dm³ - 3 marks
- Rf value calculations - 2 marks
- Gas volumes at RTP (HT) - 3 marks
- Bond energy calculations (HT) - 4 marks

CRITICAL:
- ONLY use Ar values from the reference data above
- Follow the exact working pattern shown in the worked examples
- OCR awards marks for: equation stated (1), correct substitution (1), answer with correct units (1)

Create ONE calculation question that:
1. Uses ONLY the Ar values provided in the reference data
2. Provides realistic numerical data that gives sensible answers
3. Has a clear, structured calculation with marks allocated
4. Uses appropriate significant figures (usually 2-3)
5. Follows OCR mark scheme conventions exactly

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with data and mark allocation in [n] format]

**Mark Scheme:**
[Step-by-step marking points - one per mark, showing where each mark is awarded]

**Explanation:**
[Complete worked solution following the pattern in worked examples, with every step shown]`;
}

// Generate explain question prompt
export function getOCRChemistryExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating an explanation question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_CHEMISTRY_DEFINITIONS}

${OCR_CHEMISTRY_EXPLANATION_PATTERNS}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty} (${markRange.min}-${markRange.max} marks)

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of chemistry principles
2. Requires linking cause and effect using the patterns shown above
3. Uses appropriate OCR command words (Explain, Describe and explain)
4. May include practical or real-world contexts
5. Uses the exact definition wording when relevant

DIFFICULTY GUIDE:
- Easy: Explain a single concept [2]
- Medium: Explain a process or observation [3-4]
- Hard: Explain a complex phenomenon linking multiple ideas [4-6]

CRITICAL: OCR emphasises LOGICAL STRUCTURE. Follow the explanation patterns - marks are awarded for each linked point in the chain of reasoning.

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with mark allocation in [n] format]

**Mark Scheme:**
[Key points required for full marks - one point per mark, following explanation patterns]

**Explanation:**
[Model answer using correct scientific terminology and following explanation patterns]`;
}

// Generate graph/data analysis question prompt
export function getOCRChemistryGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a graph or data analysis question.

${OCR_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpreting chemical data or graphs
2. May require plotting, reading values, or calculating from data
3. Tests understanding of relationships
4. Uses realistic chemistry data

${varietyInstructions}

Common graph types in OCR GCSE Chemistry:
- Rate of reaction curves
- Heating and cooling curves
- Chromatograms
- Energy profiles
- Titration curves

OUTPUT FORMAT (use exact headers):
**Question:**
[Data analysis question with table/graph description and mark allocation]

**Mark Scheme:**
[Marking points for data interpretation]

**Explanation:**
[Model answer showing correct analysis]`;
}

// Generate compare question prompt
export function getOCRChemistryComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = CHEMISTRY_TOPIC_GUIDANCE[topic.id] || '';

  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a comparison question.

${OCR_CHEMISTRY_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Compares two related chemistry concepts, substances, or processes
2. Requires identifying similarities AND differences
3. Tests deeper understanding of principles
4. Uses the command word 'Compare' appropriately

${varietyInstructions}

Possible comparisons in OCR GCSE Chemistry:
- Ionic vs covalent bonding
- Diamond vs graphite
- Alkanes vs alkenes
- Exothermic vs endothermic
- Strong vs weak acids
- Metals vs non-metals
- Electrolysis of molten vs aqueous

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with mark allocation]

**Mark Scheme:**
[Key similarities and differences required]

**Explanation:**
[Model answer with clear, organised comparisons]`;
}

// ============================================================================
// PRACTICAL-SPECIFIC PROMPTS FOR OCR PAGs (Practical Activity Groups)
// ============================================================================

const OCR_PAGS_DATA = `
## OCR GCSE Chemistry PAGs (Practical Activity Groups)

Note: OCR PAGs are more flexible than AQA Required Practicals - centres have flexibility in how they demonstrate practical competency.

### PAG C1: Analysis - Identifying Ions
- Tests: Flame tests, precipitate tests with NaOH, gas tests
- Flame test colours: Li (red), Na (yellow), K (lilac), Ca (orange-red), Cu (green)
- NaOH precipitates: Cu²⁺ (blue), Fe²⁺ (green), Fe³⁺ (brown), Ca²⁺ (white), Mg²⁺ (white)
- Halide tests with AgNO₃: Cl⁻ (white), Br⁻ (cream), I⁻ (yellow)
- Gas tests: H₂ (squeaky pop), O₂ (relights splint), CO₂ (limewater), Cl₂ (bleaches)

### PAG C2: Titration
- Equipment: Burette (0.10 cm³ resolution), pipette (25.0 cm³), conical flask, white tile
- Indicators: Phenolphthalein (colourless → pink), methyl orange (red → yellow)
- Method: Record titre, repeat until concordant (within 0.10 cm³)
- Calculations: Use mean of concordant results, n = c × V

### PAG C3: Electrolysis
- Equipment: Power pack, electrodes (graphite or copper), beaker, wires, crocodile clips
- Products depend on: molten vs aqueous, concentration, electrode material
- Tests: Test gases produced, observe electrode changes, weigh electrodes

### PAG C4: Preparing Salts
- Insoluble base + acid method: Add excess base, filter, crystallise
- Equipment: Bunsen, tripod, gauze, evaporating basin, filter funnel and paper
- Key points: Use excess base so no acid remains, heat gently to point of crystallisation

### PAG C5: Rates of Reaction
- Variables: Concentration, temperature, surface area, catalyst
- Methods: Gas collection (syringe), mass loss, colour change (cross disappearing)
- Equipment: Gas syringe, stopwatch, balance, conical flask

### PAG C6: Endothermic and Exothermic Reactions
- Equipment: Polystyrene cup (insulation), thermometer, measuring cylinder
- Examples: Neutralisation (exothermic), displacement (exothermic), dissolving (varies)
- Key points: Measure initial temperature, final temperature, calculate change
`;

// Generate PAG method question prompt
export function getOCRChemistryPracticalMethodPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a PAG (Practical Activity Group) question.

## OCR PAG PRACTICAL STYLE  
**OCR PAG Approach:** Flexible practical activity groups allowing teacher discretion. Emphasizes application to unfamiliar contexts and interpretive analysis.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_PAGS_DATA}

Practical: ${practical.name}
Focus: Method / Procedure
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about the METHOD of this PAG that:
1. Tests understanding of the procedure and why each step is important
2. May ask students to describe, explain, or evaluate the method
3. Uses authentic OCR language
4. Could ask about: equipment choices, step-by-step procedure, safety precautions

${varietyInstructions}

Question types to consider:
- "Describe how you would..." (method recall)
- "Explain why..." (understanding of method)
- "A student carried out... Suggest improvements" (evaluation)
- "What equipment would you use to..." (equipment selection)

OUTPUT FORMAT (use exact headers):
**Question:**
[Practical method question with mark allocation in [n] format]

**Mark Scheme:**
[Key procedural points - one per mark]

**Explanation:**
[Model answer demonstrating full understanding of the method]`;
}

// Generate PAG variables question prompt
export function getOCRChemistryPracticalVariablesPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a PAG question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_PAGS_DATA}

Practical: ${practical.name}
Focus: Variables
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about the VARIABLES in this PAG that:
1. Tests understanding of independent, dependent, and control variables
2. May ask students to identify, explain, or evaluate variable control
3. Uses authentic OCR language

Key terminology:
- Independent variable: What you deliberately change
- Dependent variable: What you measure
- Control variables: What you keep the same to ensure a fair test

Question types:
- "Identify the independent/dependent variable in this investigation"
- "Explain why it is important to control..."
- "Suggest one variable that should be kept constant and explain why"

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Variables question with mark allocation in [n] format]

**Mark Scheme:**
[Key points about variables - one per mark]

**Explanation:**
[Model answer demonstrating understanding of variables]`;
}

// Generate PAG results/analysis question prompt
export function getOCRChemistryPracticalResultsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a PAG question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_CHEMISTRY_REFERENCE_DATA}

${OCR_CHEMISTRY_EQUATIONS}

${OCR_PAGS_DATA}

Practical: ${practical.name}
Focus: Results and Analysis
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about ANALYSING RESULTS from this PAG that:
1. Provides realistic data for students to analyse
2. May require calculations, graph interpretation, or pattern identification
3. Uses authentic OCR language
4. Tests ability to draw conclusions from evidence

Question types:
- "Use the data to calculate..." (quantitative analysis)
- "Describe the pattern shown in the results" (qualitative analysis)
- "Explain what the results show about..." (drawing conclusions)
- "Plot a graph of... and use it to..." (graphical analysis)

CRITICAL: Use realistic numerical values that match typical experimental results.

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Results/analysis question with data table or graph description and mark allocation]

**Mark Scheme:**
[Key analytical points - one per mark, including correct numerical answers]

**Explanation:**
[Model answer showing full analysis with all working]`;
}

// Generate PAG errors/improvements question prompt
export function getOCRChemistryPracticalErrorsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a PAG question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_PAGS_DATA}

Practical: ${practical.name}
Focus: Errors, Accuracy, and Improvements
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about ERRORS AND IMPROVEMENTS for this PAG that:
1. Tests understanding of experimental errors and how to minimise them
2. May ask about systematic vs random errors
3. Uses authentic OCR language

Key concepts:
- Random error: Unpredictable variations, reduced by repeating and averaging
- Systematic error: Consistent in one direction (e.g., zero error on balance)
- Precision: Closeness of repeated measurements to each other
- Accuracy: Closeness of result to true value
- Resolution: Smallest measurable increment of equipment

Question types:
- "Suggest one source of error in this experiment"
- "Explain how the student could improve the accuracy/precision"
- "The student's results were lower than expected. Suggest a reason"
- "Why is it important to repeat the experiment and calculate a mean?"

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Error/improvement question with mark allocation in [n] format]

**Mark Scheme:**
[Key points about errors/improvements - one per mark]

**Explanation:**
[Model answer demonstrating understanding of experimental errors]`;
}

// Generate PAG safety question prompt
export function getOCRChemistryPracticalSafetyPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  // Add global variety system for systematic question variation
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Chemistry examiner creating a PAG question.

${OCR_CHEMISTRY_PRINCIPLES}

${OCR_PAGS_DATA}

Practical: ${practical.name}
Focus: Safety and Risk Assessment
Difficulty: ${difficulty}
${subtopic ? `Aspect: ${subtopic}` : ''}

Create ONE exam-style question about SAFETY in this PAG that:
1. Tests understanding of hazards and precautions
2. May ask students to identify risks and explain how to minimise them
3. Uses authentic OCR language

Key terminology:
- Hazard: Something with potential to cause harm
- Risk: Likelihood of harm occurring combined with severity
- Control measure: Action taken to reduce risk

Common chemistry hazards:
- Corrosive substances (acids, alkalis): Wear goggles, avoid skin contact
- Flammable substances: Keep away from naked flames, use in well-ventilated area
- Toxic/harmful substances: Work in fume cupboard, avoid inhalation
- Hot apparatus: Use tongs, allow to cool before handling
- Electrical equipment: Keep away from water, check for damage

Question types:
- "Identify one hazard and describe a precaution to reduce the risk"
- "Explain why the student should wear safety goggles"
- "Give a risk assessment for this practical"

${varietyInstructions}

OUTPUT FORMAT (use exact headers):
**Question:**
[Safety question with mark allocation in [n] format]

**Mark Scheme:**
[Key safety points - one per mark]

**Explanation:**
[Model answer demonstrating understanding of safety]`;
}
