import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryOrganic: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'alkanes',
      title: 'Alkanes | GCSE Chemistry',
      meta_description: 'Learn about alkanes, their structure and properties. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Alkanes are a family of hydrocarbons with only single covalent bonds between carbon atoms. They form a homologous series—a family of compounds with the same general formula, similar chemical properties, and a gradual trend in physical properties. The general formula for alkanes is CₙH₂ₙ₊₂.

The first four alkanes are methane (CH₄), ethane (C₂H₆), propane (C₃H₈), and butane (C₄H₁₀). Each subsequent member differs by CH₂ from the previous one. The names follow a systematic pattern: meth- (1 carbon), eth- (2), prop- (3), but- (4), pent- (5), hex- (6), and so on.

Alkanes are saturated hydrocarbons because all carbon-carbon bonds are single bonds—no more hydrogen atoms can be added. This makes alkanes relatively unreactive, though they do burn well in oxygen. Complete combustion produces carbon dioxide and water: CH₄ + 2O₂ → CO₂ + 2H₂O.

The physical properties of alkanes show gradual trends as the chain length increases. Boiling point increases because longer molecules have stronger intermolecular forces. Viscosity increases because longer chains tangle more. Flammability decreases because larger molecules are harder to vaporise and ignite.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the molecular formula for propane and draw its displayed formula.',
        solution: `**Molecular formula:** C₃H₈

**Displayed formula:**
\`\`\`
    H   H   H
    |   |   |
H - C - C - C - H
    |   |   |
    H   H   H
\`\`\`

Each carbon is bonded to 4 other atoms (either H or C), and each hydrogen is bonded to one carbon.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why the boiling points of alkanes increase as the chain length increases.',
        solution: `**Explanation:**

1. **Intermolecular forces:** Alkane molecules are held together by weak intermolecular forces (van der Waals forces/London dispersion forces)

2. **More electrons = stronger forces:** Longer chain alkanes have:
   - More carbon and hydrogen atoms
   - More electrons
   - A larger surface area

3. **Effect on boiling point:**
   - Larger molecules have **stronger intermolecular forces**
   - More energy is needed to overcome these forces
   - Therefore, **more heat is required** to boil longer alkanes
   - This means higher boiling points

**Example:**
- Methane (CH₄): boiling point -162°C
- Butane (C₄H₁₀): boiling point 0°C
- Octane (C₈H₁₈): boiling point 126°C`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Write balanced equations for the complete and incomplete combustion of methane. Explain why incomplete combustion is dangerous and how it can be prevented.',
        solution: `**Complete combustion:**
CH₄ + 2O₂ → CO₂ + 2H₂O

(Sufficient oxygen present; products are carbon dioxide and water)

**Incomplete combustion:**
2CH₄ + 3O₂ → 2CO + 4H₂O
(or: CH₄ + 1½O₂ → CO + 2H₂O)

With even less oxygen, carbon (soot) can form:
CH₄ + O₂ → C + 2H₂O

**Why incomplete combustion is dangerous:**

1. **Carbon monoxide (CO) is toxic:**
   - It is colourless and odourless (cannot be detected)
   - It binds to haemoglobin in blood more strongly than oxygen
   - This prevents oxygen being carried around the body
   - Can cause death even in small concentrations

2. **Less energy released:**
   - Incomplete combustion releases less energy
   - Fuel is wasted

3. **Soot production:**
   - Carbon particles can cause respiratory problems
   - Creates dirty deposits on surfaces

**Prevention:**
- Ensure adequate ventilation/air supply
- Regular maintenance of boilers and heaters
- Install carbon monoxide detectors
- Service gas appliances annually
- Ensure flues and chimneys are not blocked`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'alkenes',
      title: 'Alkenes | GCSE Chemistry',
      meta_description: 'Master alkenes, their structure and reactions including addition reactions. GCSE Chemistry practice questions with solutions.',
      introduction: `Alkenes are hydrocarbons that contain a carbon-carbon double bond (C=C). This double bond makes them unsaturated—they can add more atoms across the double bond. The general formula for alkenes is CₙH₂ₙ, showing they have two fewer hydrogen atoms than alkanes with the same number of carbons.

The first few alkenes are ethene (C₂H₄), propene (C₃H₆), and butene (C₄H₈). Ethene is the simplest alkene and cannot be made simpler because you need at least two carbons for a C=C double bond.

The double bond in alkenes makes them much more reactive than alkanes. They undergo addition reactions where atoms add across the double bond, breaking it to form a single bond. For example, ethene reacts with bromine: C₂H₄ + Br₂ → C₂H₄Br₂.

The bromine water test distinguishes alkenes from alkanes: bromine water (orange) turns colourless when shaken with an alkene due to the addition reaction. With an alkane, no reaction occurs and the bromine water stays orange.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Draw the displayed formula for ethene and explain what makes alkenes "unsaturated".',
        solution: `**Displayed formula of ethene (C₂H₄):**
\`\`\`
    H       H
     \\     /
      C = C
     /     \\
    H       H
\`\`\`

**Why alkenes are unsaturated:**
- Alkenes contain a **carbon-carbon double bond** (C=C)
- The term "unsaturated" means they are **not saturated with hydrogen**
- They can **add more atoms** across the double bond
- The double bond can open up to form single bonds with additional atoms`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Describe a chemical test to distinguish between hexane (an alkane) and hexene (an alkene). Include what you would observe with each hydrocarbon.',
        solution: `**Test: Bromine water test**

**Method:**
1. Add a few drops of bromine water to separate samples of hexane and hexene
2. Shake the mixtures
3. Observe the colour change

**Results:**

| Hydrocarbon | Observation | Explanation |
|-------------|-------------|-------------|
| **Hexene** (alkene) | Bromine water changes from **orange to colourless** | Addition reaction occurs across the C=C double bond: C₆H₁₂ + Br₂ → C₆H₁₂Br₂ |
| **Hexane** (alkane) | Bromine water **stays orange** | No reaction occurs (hexane is saturated with no C=C bond) |

**Conclusion:** The sample that decolourises bromine water is the alkene (hexene).`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Ethene reacts with steam to form ethanol. Write a balanced equation for this reaction, name the type of reaction, state the conditions required, and explain why this reaction is important industrially.',
        solution: `**Balanced equation:**
C₂H₄ + H₂O → C₂H₅OH

(Or with structural formulas: CH₂=CH₂ + H₂O → CH₃CH₂OH)

**Type of reaction:**
- **Hydration** (addition of water)
- Also called an **addition reaction**

**Conditions:**
- **Temperature:** 300°C (high temperature)
- **Pressure:** 60-70 atmospheres (high pressure)
- **Catalyst:** Phosphoric acid (H₃PO₄)

**Industrial importance:**

1. **Ethanol production:**
   - This is the main industrial method for making ethanol
   - Much faster than fermentation
   - Can be run continuously
   - Produces pure ethanol

2. **Uses of ethanol:**
   - Solvent in industry
   - Fuel (biofuel blends)
   - Making other chemicals
   - Alcoholic drinks (though fermentation is used for this)

3. **Economic factors:**
   - Uses ethene from crude oil cracking
   - More efficient for large-scale production
   - Lower labour costs than fermentation

**Note:** The reaction is reversible, so conditions are chosen to favour the forward reaction.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'alcohols',
      title: 'Alcohols | GCSE Chemistry',
      meta_description: 'Learn about alcohols, their properties and reactions. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Alcohols are a homologous series of organic compounds containing the hydroxyl functional group (-OH) attached to a carbon atom. The general formula is CₙH₂ₙ₊₁OH. The first three alcohols are methanol (CH₃OH), ethanol (C₂H₅OH), and propanol (C₃H₇OH).

Ethanol is the most important alcohol. It can be made by fermentation of sugars using yeast (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) or by hydration of ethene. Each method has advantages: fermentation uses renewable resources and works at low temperatures, while hydration is faster and produces purer ethanol.

Alcohols have several useful properties. They dissolve in water because the -OH group can form hydrogen bonds with water molecules. They burn with a clean flame, making them useful as fuels. Ethanol is used as a solvent, in alcoholic drinks, as a fuel, and as a feedstock for making other chemicals.

Alcohols can be oxidised to form carboxylic acids. This happens slowly in air (wine turning to vinegar) or quickly using oxidising agents. The oxidation of ethanol produces ethanoic acid: C₂H₅OH + 2[O] → CH₃COOH + H₂O.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the molecular formula for ethanol and identify the functional group that makes it an alcohol.',
        solution: `**Molecular formula:** C₂H₅OH (or C₂H₆O)

**Functional group:** The **hydroxyl group (-OH)**

This -OH group is attached to a carbon atom and is what defines a molecule as an alcohol. In ethanol:
- The hydroxyl group is bonded to one of the carbon atoms
- Full structural formula: CH₃CH₂OH`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Ethanol can be produced by fermentation. Write a word equation and balanced symbol equation for this reaction, and state the conditions required.',
        solution: `**Word equation:**
Glucose → Ethanol + Carbon dioxide

**Balanced symbol equation:**
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

**Conditions required:**
1. **Yeast** - provides the enzymes (zymase) to catalyse the reaction
2. **Warm temperature** - around 25-35°C (optimum for enzyme activity)
3. **Absence of oxygen** - anaerobic conditions (oxygen would allow aerobic respiration instead)
4. **Aqueous solution** - sugar dissolved in water

**Additional notes:**
- Fermentation stops when ethanol concentration reaches about 15% (kills yeast)
- The process is slower than industrial hydration
- Uses renewable resources (plant sugars)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Compare the production of ethanol by fermentation and by hydration of ethene. Discuss the advantages and disadvantages of each method.',
        solution: `**Fermentation:**
| Advantages | Disadvantages |
|------------|---------------|
| Uses **renewable resources** (plant sugars) | **Slow process** (batch process, takes days) |
| Low temperatures needed (25-35°C) - **low energy costs** | Produces **impure ethanol** (needs distillation) |
| Simple equipment | Maximum concentration ~15% |
| **Carbon neutral** if crops are replanted | Requires large fermentation vessels |
| Can use waste plant material | **Labour intensive** |

**Hydration of ethene:**
| Advantages | Disadvantages |
|------------|---------------|
| **Fast, continuous process** | Uses **non-renewable** crude oil |
| Produces **pure ethanol** | High temperatures (300°C) and pressures (60 atm) - **high energy costs** |
| Can be done on very large scale | Requires expensive equipment |
| Less labour intensive | **Not carbon neutral** |
| Higher yield | Depends on crude oil supply |

**Summary:**
- **Fermentation** is better for sustainability and when energy costs must be low
- **Hydration** is better for large-scale industrial production of pure ethanol
- Many countries are increasing fermentation capacity for biofuel ethanol due to environmental concerns`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'carboxylic-acids',
      title: 'Carboxylic Acids | GCSE Chemistry',
      meta_description: 'Learn about carboxylic acids and their properties. GCSE Chemistry practice questions with detailed solutions.',
      introduction: `Carboxylic acids are organic compounds containing the carboxyl functional group (-COOH). The general formula is CₙH₂ₙ₊₁COOH. Common examples include methanoic acid (HCOOH, found in ant stings), ethanoic acid (CH₃COOH, the acid in vinegar), and citric acid (found in citrus fruits).

Carboxylic acids are weak acids, meaning they only partially dissociate in water. This makes them less corrosive than strong acids like hydrochloric acid, but they still show typical acid reactions: they react with metals to produce hydrogen, with carbonates to produce carbon dioxide, and with bases to form salts and water.

The salts of carboxylic acids have names ending in "-oate". For example, when ethanoic acid reacts with sodium hydroxide, it forms sodium ethanoate: CH₃COOH + NaOH → CH₃COONa + H₂O.

Carboxylic acids can react with alcohols to form esters in a reaction called esterification. This reaction requires an acid catalyst and is reversible. Esters have pleasant fruity smells and are used in perfumes, food flavourings, and solvents.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Draw the structural formula for ethanoic acid and identify the carboxyl functional group.',
        solution: `**Structural formula for ethanoic acid (CH₃COOH):**
\`\`\`
        O
        ‖
H₃C - C - O - H
\`\`\`

Or displayed as:
\`\`\`
    H   O
    |   ‖
H - C - C - O - H
    |
    H
\`\`\`

**Carboxyl functional group:** -COOH

This group consists of:
- A carbonyl group (C=O)
- A hydroxyl group (-OH)
- Combined as -COOH`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Ethanoic acid reacts with sodium carbonate. Write a balanced equation for this reaction and describe what you would observe.',
        solution: `**Balanced equation:**
2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂

**Word equation:**
Ethanoic acid + Sodium carbonate → Sodium ethanoate + Water + Carbon dioxide

**Observations:**
1. **Effervescence/bubbling** - carbon dioxide gas is produced
2. The sodium carbonate **dissolves**
3. The mixture may feel slightly **warm** (exothermic reaction)
4. If the gas is tested with limewater, it **turns milky/cloudy** (positive test for CO₂)

**Note:** This reaction is similar to the reaction of any acid with a carbonate, but ethanoic acid reacts more slowly than a strong acid because it is a weak acid.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Describe how ethyl ethanoate (an ester) can be made from ethanol and ethanoic acid. Include a balanced equation, the conditions needed, and explain why esters are useful.',
        solution: `**Balanced equation:**
CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O

Ethanoic acid + Ethanol ⇌ Ethyl ethanoate + Water

**Conditions:**
- **Catalyst:** Concentrated sulfuric acid (H₂SO₄)
- **Temperature:** Heated under reflux (warming while preventing vapours escaping)
- The reaction is reversible (⇌)

**Method:**
1. Mix ethanoic acid with ethanol in a flask
2. Add a few drops of concentrated sulfuric acid as catalyst
3. Heat gently under reflux
4. The ester can be separated by distillation

**Uses of esters:**
1. **Perfumes and cosmetics** - pleasant sweet, fruity smells
2. **Food flavourings** - artificial fruit flavours (e.g., pear drops, banana)
3. **Solvents** - in nail varnish remover, paints, and glues
4. **Plasticisers** - make plastics more flexible

**Note:** This reaction is called **esterification**. The sulfuric acid acts as a catalyst AND removes water, pushing the equilibrium towards products.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'polymers',
      title: 'Polymers | GCSE Chemistry',
      meta_description: 'Understand addition and condensation polymerisation. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Polymers are large molecules made by joining many small molecules called monomers. The process of joining monomers is called polymerisation. Polymers can contain thousands of monomer units and have very high molecular masses, giving them useful properties.

Addition polymerisation occurs when unsaturated monomers (containing C=C double bonds) join together. The double bonds open up, allowing monomers to link. No atoms are lost—all the atoms from the monomers end up in the polymer. Poly(ethene) and poly(propene) are examples made from ethene and propene respectively.

Condensation polymerisation occurs when monomers join together with the loss of a small molecule (usually water). This requires monomers with two functional groups that can react with each other. Examples include polyesters (from diols and dicarboxylic acids) and nylon (a polyamide).

The properties of polymers depend on their structure. High-density polymers with regular, closely packed chains are rigid and strong. Low-density polymers with branched chains are more flexible. Thermosoftening polymers can be melted and reshaped; thermosetting polymers have cross-links and cannot be melted without decomposing.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Propene (C₃H₆) can form a polymer. Name this polymer and state what type of polymerisation occurs.',
        solution: `**Name of polymer:** Poly(propene) (or polypropylene)

**Type of polymerisation:** Addition polymerisation

**Explanation:**
- Propene contains a C=C double bond
- Many propene monomers join together
- The double bonds open up to form single bonds
- No atoms are lost in the process
- The repeat unit keeps all atoms from the monomer`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Draw the repeat unit for poly(ethene), showing what happens to the double bond during polymerisation.',
        solution: `**Ethene monomer:**
\`\`\`
    H   H
     \\ /
      C=C
     / \\
    H   H
\`\`\`

**What happens:**
The C=C double bond **opens up** to form single bonds to adjacent monomer units.

**Repeat unit of poly(ethene):**
\`\`\`
    H   H
    |   |
—[ C - C ]—
    |   |
    H   H    n
\`\`\`

Where:
- The dashes at each end connect to adjacent repeat units
- n represents a large number (thousands of repeat units)
- Each repeat unit has the formula -CH₂-CH₂-
- The polymer formula is written as (C₂H₄)ₙ or —(CH₂-CH₂)ₙ—`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A polyester is made from ethane-1,2-diol (HOCH₂CH₂OH) and hexanedioic acid (HOOC(CH₂)₄COOH). Explain how the polymer forms, what small molecule is released, and draw a section showing two repeat units.',
        solution: `**How the polymer forms:**

1. **Condensation polymerisation** occurs
2. The **-OH group** on the diol reacts with the **-COOH group** on the dicarboxylic acid
3. An **ester linkage (-COO-)** forms between them
4. A molecule of **water (H₂O)** is released each time a bond forms
5. Each monomer has **two functional groups**, so chains can continue growing from both ends

**Small molecule released:** Water (H₂O)

**Diagram of two repeat units:**
\`\`\`
        O                   O              O                   O
        ‖                   ‖              ‖                   ‖
—O-CH₂-CH₂-O-C-(CH₂)₄-C-O-CH₂-CH₂-O-C-(CH₂)₄-C—
               ↑                        ↑
        ester link               ester link
\`\`\`

**Key features:**
- Ester linkages (-COO-) connect the monomers
- The pattern alternates: diol unit - acid unit - diol unit - acid unit
- This is how PET (polyethylene terephthalate) forms, used in drinks bottles and clothing fibres`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'organic-chemistry',
      subtopic_slug: 'crude-oil',
      title: 'Crude Oil | GCSE Chemistry',
      meta_description: 'Learn about crude oil, fractional distillation and cracking. GCSE Chemistry practice questions with solutions.',
      introduction: `Crude oil is a finite resource formed from the remains of ancient marine organisms over millions of years. It is a complex mixture of hydrocarbons, mainly alkanes of different chain lengths. Different hydrocarbons have different properties, making crude oil extremely valuable but also requiring separation before use.

Fractional distillation separates crude oil into useful fractions. The crude oil is heated and vaporised, then the vapours rise up a fractionating column. As they rise, they cool, and hydrocarbons condense at heights corresponding to their boiling points. Shorter chains with lower boiling points rise higher before condensing.

The main fractions include: gases (used for domestic heating and cooking), petrol (car fuel), kerosene (jet fuel), diesel (heavy vehicle fuel), fuel oil (ships and power stations), and bitumen (road surfaces). Each fraction is a mixture of hydrocarbons with similar boiling points.

Cracking is used to break down longer, less useful hydrocarbon chains into shorter, more useful ones. There is high demand for petrol but much crude oil consists of longer chains. Cracking uses heat (thermal cracking) or a catalyst (catalytic cracking) to break C-C bonds, producing shorter alkanes for fuel and alkenes for making polymers.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the process used to separate crude oil into useful fractions and explain why it works.',
        solution: `**Process:** Fractional distillation

**Why it works:**
- Crude oil contains hydrocarbons with **different boiling points**
- The oil is heated and **vaporised**
- Vapours rise up the column and **cool down**
- Each hydrocarbon **condenses** when it reaches the temperature equal to its boiling point
- Shorter chains have lower boiling points and condense **higher up** the column
- Longer chains have higher boiling points and condense **lower down**
- This separates the mixture into fractions with similar boiling points`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain the trends in boiling point, viscosity, and flammability of crude oil fractions as the chain length increases.',
        solution: `**As chain length increases:**

| Property | Trend | Explanation |
|----------|-------|-------------|
| **Boiling point** | Increases ↑ | Longer molecules have stronger intermolecular forces; more energy needed to separate them |
| **Viscosity** | Increases ↑ | Longer molecules tangle together more, making the liquid "thicker" and flow less easily |
| **Flammability** | Decreases ↓ | Longer molecules are harder to vaporise; less vapour means harder to ignite |

**Additional trends:**
- Colour: Gets darker (lighter fractions are colourless/pale, bitumen is black)
- Density: Increases (heavier fractions sink)

**Practical implications:**
- Short-chain fractions (gases, petrol) are volatile, easy to ignite, used as fuels
- Long-chain fractions (fuel oil, bitumen) are viscous, harder to burn, need different uses`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A long-chain alkane (C₁₀H₂₂) is cracked to produce octane and another product. Write a balanced equation for this reaction and explain why cracking is economically important.',
        solution: `**Balanced equation:**
C₁₀H₂₂ → C₈H₁₈ + C₂H₄

(Decane → Octane + Ethene)

**Checking the equation:**
- Carbons: 10 = 8 + 2 ✓
- Hydrogens: 22 = 18 + 4 ✓

**Note:** Other products are possible, e.g., C₁₀H₂₂ → C₇H₁₆ + C₃H₆

**Why cracking is economically important:**

1. **Supply and demand mismatch:**
   - Crude oil has more long-chain hydrocarbons than needed
   - There is high demand for short-chain hydrocarbons (especially petrol)
   - Cracking converts surplus long chains into valuable short chains

2. **Makes useful alkenes:**
   - Cracking produces alkenes like ethene and propene
   - Alkenes are monomers for making plastics (polymers)
   - This adds value to the crude oil

3. **Increases profit:**
   - Petrol and alkenes are worth more than heavy fuel oil
   - Cracking increases the value obtained from each barrel of crude oil
   - Without cracking, much of the crude oil would be wasted or sold cheaply

4. **Meets fuel demands:**
   - Modern transport relies heavily on petrol and diesel
   - Cracking ensures sufficient supply of these essential fuels`,
        display_order: 3
      }
    ]
  }
];
