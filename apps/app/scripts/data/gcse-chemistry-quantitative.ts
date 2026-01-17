import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryQuantitative: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'relative-formula-mass',
      title: 'Relative Formula Mass | GCSE Chemistry',
      meta_description: 'Learn to calculate relative formula mass (Mr) for compounds. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Relative formula mass (Mr) is the sum of all the relative atomic masses of the atoms in a formula. This calculation is fundamental to quantitative chemistry and is used in almost every mole calculation you'll encounter.

To calculate Mr, you need to know the relative atomic masses (Ar) of each element, which are given in the periodic table. For each element in the formula, multiply its Ar by the number of atoms of that element present, then add all these values together.

When dealing with brackets in formulas, remember to multiply everything inside the bracket by the subscript number outside. For example, in Ca(OH)₂, the subscript 2 means there are 2 oxygen atoms and 2 hydrogen atoms along with 1 calcium atom.

The Mr has no units because it is a relative mass—it tells us how heavy a formula unit is compared to 1/12 of a carbon-12 atom. However, the Mr is numerically equal to the molar mass in grams per mole (g/mol), which is incredibly useful for converting between mass and moles.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Calculate the relative formula mass (Mr) of water, H₂O. (Ar: H = 1, O = 16)',
        solution: `To find Mr, add up all the atomic masses:

H₂O contains:
- 2 hydrogen atoms: 2 × 1 = 2
- 1 oxygen atom: 1 × 16 = 16

Mr = 2 + 16 = **18**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Calculate the relative formula mass (Mr) of calcium hydroxide, Ca(OH)₂. (Ar: Ca = 40, O = 16, H = 1)',
        solution: `The formula Ca(OH)₂ means:
- 1 calcium atom
- 2 × (OH) groups = 2 oxygen atoms and 2 hydrogen atoms

Calculating Mr:
- Ca: 1 × 40 = 40
- O: 2 × 16 = 32
- H: 2 × 1 = 2

Mr = 40 + 32 + 2 = **74**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A compound has the formula X₂(SO₄)₃ and a relative formula mass of 400. Calculate the relative atomic mass of element X and suggest what element X might be. (Ar: S = 32, O = 16)',
        solution: `**Step 1: Calculate the mass from SO₄ groups**
The formula X₂(SO₄)₃ contains 3 sulfate groups:
- S: 3 × 32 = 96
- O: 12 × 16 = 192 (3 groups × 4 oxygen atoms)
- Total from SO₄: 96 + 192 = 288

**Step 2: Find the mass from X atoms**
Mass from X = Total Mr - Mass from SO₄
Mass from X = 400 - 288 = 112

**Step 3: Calculate Ar of X**
There are 2 atoms of X in the formula
Ar of X = 112 ÷ 2 = **56**

**Step 4: Identify element X**
An element with Ar = 56 is **iron (Fe)**

The compound is iron(III) sulfate, Fe₂(SO₄)₃.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'moles',
      title: 'Moles | GCSE Chemistry',
      meta_description: 'Master mole calculations and the Avogadro constant. GCSE Chemistry practice questions with detailed worked solutions.',
      introduction: `The mole is the unit chemists use to count particles. Because atoms and molecules are incredibly small, we need to work with very large numbers of them. One mole of any substance contains exactly 6.02 × 10²³ particles—this number is called the Avogadro constant.

The beauty of the mole is that one mole of any substance has a mass in grams equal to its relative formula mass. One mole of carbon (Ar = 12) has a mass of 12 g. One mole of water (Mr = 18) has a mass of 18 g. This connection makes converting between mass and number of particles straightforward.

The key equation for mole calculations is: number of moles = mass ÷ relative formula mass, or n = m/Mr. This can be rearranged to find mass (m = n × Mr) or to find the amount when you know the mass.

Understanding moles is essential for all quantitative chemistry. They allow us to work out how much reactant we need, how much product we can make, and to compare amounts of different substances on an equal footing. Whether you're doing reacting masses, concentrations, or gas volumes, moles are the foundation.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Calculate the number of moles in 44 g of carbon dioxide, CO₂. (Ar: C = 12, O = 16)',
        solution: `**Step 1: Calculate Mr of CO₂**
Mr = 12 + (2 × 16) = 12 + 32 = 44

**Step 2: Calculate moles**
Using n = m/Mr
n = 44 ÷ 44
n = **1 mole**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Calculate the mass of 0.25 moles of sodium hydroxide, NaOH. (Ar: Na = 23, O = 16, H = 1)',
        solution: `**Step 1: Calculate Mr of NaOH**
Mr = 23 + 16 + 1 = 40

**Step 2: Calculate mass**
Using m = n × Mr
m = 0.25 × 40
m = **10 g**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A sample contains 1.2 × 10²⁴ molecules of water. Calculate the number of moles and the mass of water in the sample. (Ar: H = 1, O = 16, Avogadro constant = 6.0 × 10²³)',
        solution: `**Step 1: Calculate number of moles**
Number of moles = Number of particles ÷ Avogadro constant
n = (1.2 × 10²⁴) ÷ (6.0 × 10²³)
n = 2 moles

**Step 2: Calculate Mr of water (H₂O)**
Mr = (2 × 1) + 16 = 18

**Step 3: Calculate mass**
m = n × Mr
m = 2 × 18
m = **36 g**

**Summary:**
- Number of moles = **2 mol**
- Mass = **36 g**`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'percentage-composition',
      title: 'Percentage Composition | GCSE Chemistry',
      meta_description: 'Calculate percentage by mass of elements in compounds. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Percentage composition tells us what fraction of a compound's mass comes from each element. This is useful for comparing different compounds and for working out formulas from experimental data.

To calculate the percentage of an element in a compound, find the total mass of that element in one formula unit, divide by the relative formula mass, and multiply by 100. The formula is: % of element = (total Ar of element ÷ Mr of compound) × 100.

For example, to find the percentage of oxygen in water (H₂O, Mr = 18): oxygen contributes 16 to the Mr, so the percentage is (16 ÷ 18) × 100 = 88.9%.

Percentage composition is particularly useful in agriculture and industry for comparing the nitrogen content of different fertilisers or the metal content of different ores. The sum of all percentage compositions in a compound should always equal 100%.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Calculate the percentage of carbon in methane, CH₄. (Ar: C = 12, H = 1)',
        solution: `**Step 1: Calculate Mr of CH₄**
Mr = 12 + (4 × 1) = 16

**Step 2: Calculate percentage of carbon**
% of C = (Ar of C ÷ Mr) × 100
% of C = (12 ÷ 16) × 100
% of C = **75%**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Calculate the percentage of nitrogen in ammonium nitrate, NH₄NO₃. (Ar: N = 14, H = 1, O = 16)',
        solution: `**Step 1: Calculate Mr of NH₄NO₃**
- N: 2 × 14 = 28
- H: 4 × 1 = 4
- O: 3 × 16 = 48
- Mr = 28 + 4 + 48 = 80

**Step 2: Calculate percentage of nitrogen**
Total mass of N = 2 × 14 = 28
% of N = (28 ÷ 80) × 100
% of N = **35%**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Two fertilisers contain nitrogen: ammonium sulfate (NH₄)₂SO₄ and urea CO(NH₂)₂. Calculate the percentage of nitrogen in each and determine which is the more economical source of nitrogen. (Ar: N = 14, H = 1, S = 32, O = 16, C = 12)',
        solution: `**Ammonium sulfate (NH₄)₂SO₄:**
- Mr = (2 × 14) + (8 × 1) + 32 + (4 × 16)
- Mr = 28 + 8 + 32 + 64 = 132
- N atoms = 2, mass of N = 28
- % N = (28 ÷ 132) × 100 = **21.2%**

**Urea CO(NH₂)₂:**
- Mr = 12 + 16 + (2 × 14) + (4 × 1)
- Mr = 12 + 16 + 28 + 4 = 60
- N atoms = 2, mass of N = 28
- % N = (28 ÷ 60) × 100 = **46.7%**

**Comparison:**
Urea contains a higher percentage of nitrogen (46.7% vs 21.2%).

**Conclusion:** **Urea is the more economical source of nitrogen** because:
- Per kg of fertiliser, you get more than twice as much nitrogen
- Less fertiliser needs to be transported and applied
- Lower transport costs per unit of nitrogen delivered`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'empirical-formula',
      title: 'Empirical Formula | GCSE Chemistry',
      meta_description: 'Learn to calculate empirical formulas from percentage composition. GCSE Chemistry practice questions with worked solutions.',
      introduction: `The empirical formula shows the simplest whole number ratio of atoms of each element in a compound. It may or may not be the same as the molecular formula, which shows the actual number of atoms in a molecule.

To find an empirical formula from percentage composition or mass data, divide each element's mass (or percentage) by its relative atomic mass to find the number of moles of each element. Then divide all values by the smallest to get the simplest ratio, and round to whole numbers if necessary.

For example, if a compound contains 40% carbon and 60% oxygen: moles of C = 40/12 = 3.33, moles of O = 60/16 = 3.75. Dividing by the smaller value: C = 3.33/3.33 = 1, O = 3.75/3.33 = 1.13 ≈ 1. So the empirical formula is CO.

Sometimes you may need to multiply to get whole numbers. If you get a ratio like 1:1.5, multiply both by 2 to get 2:3. Common fractions to look for are 0.5 (×2), 0.33 (×3), 0.25 (×4), and 0.2 (×5).`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A compound contains 2.4 g of carbon and 6.4 g of oxygen. Calculate the empirical formula. (Ar: C = 12, O = 16)',
        solution: `**Step 1: Calculate moles of each element**
Moles of C = 2.4 ÷ 12 = 0.2 mol
Moles of O = 6.4 ÷ 16 = 0.4 mol

**Step 2: Find the simplest ratio**
Divide by the smallest value (0.2):
C = 0.2 ÷ 0.2 = 1
O = 0.4 ÷ 0.2 = 2

**Empirical formula = CO₂**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A hydrocarbon contains 85.7% carbon and 14.3% hydrogen by mass. Determine its empirical formula. (Ar: C = 12, H = 1)',
        solution: `**Step 1: Assume 100 g of compound**
Mass of C = 85.7 g
Mass of H = 14.3 g

**Step 2: Calculate moles**
Moles of C = 85.7 ÷ 12 = 7.14 mol
Moles of H = 14.3 ÷ 1 = 14.3 mol

**Step 3: Find the simplest ratio**
Divide by the smallest (7.14):
C = 7.14 ÷ 7.14 = 1
H = 14.3 ÷ 7.14 = 2

**Empirical formula = CH₂**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A compound contains 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Its relative molecular mass is 180. Find the empirical formula and the molecular formula. (Ar: C = 12, H = 1, O = 16)',
        solution: `**Step 1: Calculate moles (assume 100 g)**
Moles of C = 40.0 ÷ 12 = 3.33 mol
Moles of H = 6.7 ÷ 1 = 6.7 mol
Moles of O = 53.3 ÷ 16 = 3.33 mol

**Step 2: Find simplest ratio**
Divide by smallest (3.33):
C = 3.33 ÷ 3.33 = 1
H = 6.7 ÷ 3.33 = 2
O = 3.33 ÷ 3.33 = 1

**Empirical formula = CH₂O**

**Step 3: Calculate Mr of empirical formula**
Mr = 12 + 2 + 16 = 30

**Step 4: Find molecular formula**
Multiplier = Molecular mass ÷ Empirical mass
Multiplier = 180 ÷ 30 = 6

**Molecular formula = C₆H₁₂O₆** (glucose)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'reacting-masses',
      title: 'Reacting Masses | GCSE Chemistry',
      meta_description: 'Master reacting mass calculations using balanced equations. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Reacting mass calculations allow you to work out how much product you can make from a given amount of reactant, or how much reactant you need to make a specific amount of product. These calculations are fundamental to chemistry and essential in industrial processes.

The key to reacting masses is the balanced equation. The coefficients in a balanced equation tell you the ratio of moles of each substance. For example, in 2H₂ + O₂ → 2H₂O, 2 moles of hydrogen react with 1 mole of oxygen to form 2 moles of water.

The calculation process is: (1) write the balanced equation, (2) calculate the moles of the substance you know, (3) use the ratio from the equation to find the moles of the substance you want, (4) convert moles back to mass if required.

This same approach works for all stoichiometry calculations, whether you're finding masses, volumes, or concentrations. Always start with what you know, convert to moles, use the ratio, then convert to whatever the question asks for.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Magnesium burns in oxygen: 2Mg + O₂ → 2MgO. Calculate the mass of magnesium oxide formed when 2.4 g of magnesium burns completely. (Ar: Mg = 24, O = 16)',
        solution: `**Step 1: Calculate moles of Mg**
Moles of Mg = 2.4 ÷ 24 = 0.1 mol

**Step 2: Use the ratio from the equation**
2Mg : 2MgO = 1:1
So moles of MgO = 0.1 mol

**Step 3: Calculate mass of MgO**
Mr of MgO = 24 + 16 = 40
Mass = 0.1 × 40 = **4.0 g**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Iron oxide reacts with carbon: 2Fe₂O₃ + 3C → 4Fe + 3CO₂. Calculate the mass of iron produced from 32 g of iron oxide. (Ar: Fe = 56, O = 16, C = 12)',
        solution: `**Step 1: Calculate moles of Fe₂O₃**
Mr of Fe₂O₃ = (2 × 56) + (3 × 16) = 112 + 48 = 160
Moles of Fe₂O₃ = 32 ÷ 160 = 0.2 mol

**Step 2: Use the ratio from the equation**
2Fe₂O₃ : 4Fe = 2:4 = 1:2
Moles of Fe = 0.2 × 2 = 0.4 mol

**Step 3: Calculate mass of Fe**
Mass = 0.4 × 56 = **22.4 g**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Calcium carbonate decomposes when heated: CaCO₃ → CaO + CO₂. A student heats 25 g of calcium carbonate and collects 13.2 g of calcium oxide. Calculate the percentage yield. (Ar: Ca = 40, C = 12, O = 16)',
        solution: `**Step 1: Calculate theoretical yield**
Mr of CaCO₃ = 40 + 12 + (3 × 16) = 100
Moles of CaCO₃ = 25 ÷ 100 = 0.25 mol

From equation: 1 CaCO₃ : 1 CaO (1:1 ratio)
Moles of CaO = 0.25 mol

Mr of CaO = 40 + 16 = 56
Theoretical mass of CaO = 0.25 × 56 = 14 g

**Step 2: Calculate percentage yield**
Percentage yield = (actual yield ÷ theoretical yield) × 100
Percentage yield = (13.2 ÷ 14) × 100
Percentage yield = **94.3%**

**Note:** The yield is less than 100% possibly due to:
- Incomplete reaction
- Loss during transfer
- Side reactions`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'quantitative-chemistry',
      subtopic_slug: 'concentration',
      title: 'Concentration | GCSE Chemistry',
      meta_description: 'Calculate concentration in g/dm³ and mol/dm³. GCSE Chemistry practice questions with detailed worked solutions.',
      introduction: `Concentration describes how much solute is dissolved in a given volume of solution. In chemistry, we use two main units: grams per cubic decimetre (g/dm³) and moles per cubic decimetre (mol/dm³). One cubic decimetre (1 dm³) equals 1 litre or 1000 cm³.

Concentration in g/dm³ tells us the mass of solute dissolved in each dm³ of solution. The formula is: concentration (g/dm³) = mass (g) ÷ volume (dm³). Remember to convert cm³ to dm³ by dividing by 1000.

Concentration in mol/dm³ (sometimes called molarity) tells us the number of moles of solute in each dm³. The formula is: concentration (mol/dm³) = moles ÷ volume (dm³). This is often more useful in chemistry because reactions depend on the number of particles, not their mass.

To convert between the two concentration units, remember that concentration (g/dm³) = concentration (mol/dm³) × Mr. This allows you to move between mass-based and mole-based concentrations when needed for calculations.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'A solution contains 40 g of sodium hydroxide dissolved in 500 cm³ of water. Calculate the concentration in g/dm³.',
        solution: `**Step 1: Convert volume to dm³**
Volume = 500 cm³ = 500 ÷ 1000 = 0.5 dm³

**Step 2: Calculate concentration**
Concentration = mass ÷ volume
Concentration = 40 ÷ 0.5
Concentration = **80 g/dm³**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Calculate the concentration in mol/dm³ of a solution containing 5.85 g of sodium chloride in 250 cm³ of solution. (Ar: Na = 23, Cl = 35.5)',
        solution: `**Step 1: Calculate moles of NaCl**
Mr of NaCl = 23 + 35.5 = 58.5
Moles = 5.85 ÷ 58.5 = 0.1 mol

**Step 2: Convert volume to dm³**
Volume = 250 cm³ = 0.25 dm³

**Step 3: Calculate concentration**
Concentration = moles ÷ volume
Concentration = 0.1 ÷ 0.25
Concentration = **0.4 mol/dm³**`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A student needs to prepare 250 cm³ of 0.2 mol/dm³ sodium carbonate solution. Calculate the mass of sodium carbonate needed. (Ar: Na = 23, C = 12, O = 16)',
        solution: `**Step 1: Calculate moles needed**
Volume = 250 cm³ = 0.25 dm³
Moles = concentration × volume
Moles = 0.2 × 0.25 = 0.05 mol

**Step 2: Calculate Mr of Na₂CO₃**
Mr = (2 × 23) + 12 + (3 × 16)
Mr = 46 + 12 + 48 = 106

**Step 3: Calculate mass**
Mass = moles × Mr
Mass = 0.05 × 106
Mass = **5.3 g**

**Method to prepare:**
1. Weigh out 5.3 g of sodium carbonate
2. Dissolve in some distilled water in a beaker
3. Transfer to a 250 cm³ volumetric flask
4. Add distilled water up to the 250 cm³ mark
5. Stopper and invert to mix`,
        display_order: 3
      }
    ]
  }
];
