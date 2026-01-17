import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryEnergyChanges: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'energy-changes',
      subtopic_slug: 'exothermic-endothermic',
      title: 'Exothermic and Endothermic Reactions | GCSE Chemistry',
      meta_description: 'Master exothermic and endothermic reactions with examples. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Chemical reactions involve the breaking and making of bonds, which requires or releases energy. Reactions are classified as exothermic or endothermic depending on whether they release energy to or absorb energy from the surroundings.

Exothermic reactions release energy to the surroundings, usually in the form of heat, causing the temperature of the surroundings to increase. Common examples include combustion (burning fuels), neutralisation reactions between acids and alkalis, and many oxidation reactions. In exothermic reactions, the energy released when new bonds form is greater than the energy required to break existing bonds.

Endothermic reactions absorb energy from the surroundings, causing the temperature of the surroundings to decrease. Examples include thermal decomposition reactions (like heating calcium carbonate), the reaction between citric acid and sodium hydrogencarbonate, and photosynthesis in plants. In endothermic reactions, more energy is required to break existing bonds than is released when new bonds form.

Exothermic reactions are important in everyday life. Hand warmers use exothermic reactions (often the oxidation of iron) to generate heat. Self-heating cans for drinks use exothermic reactions between chemicals in a separate compartment. Combustion of fuels provides the energy for heating, transport, and electricity generation.

Endothermic reactions also have practical applications. Chemical cold packs used for treating sports injuries contain chemicals that undergo an endothermic reaction when mixed, absorbing heat from the injured area. Some reactions used in instant ice packs involve dissolving ammonium nitrate in water, which is endothermic and causes rapid cooling.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State what is meant by an exothermic reaction and give two examples.',
        solution: `**Definition of exothermic reaction:**
A reaction that transfers energy/heat to the surroundings [1 mark]
(Temperature of surroundings increases)

**Two examples:**
Any two of: [1 mark each]
- Combustion/burning fuels
- Neutralisation reactions (acid + alkali)
- Respiration
- Oxidation reactions
- Hand warmers`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A student adds citric acid solution to sodium hydrogencarbonate solution in a beaker. The temperature of the mixture decreases from 22°C to 14°C. Explain why this temperature change occurs.',
        solution: `**Observation:**
The temperature decreased by 8°C [1 mark]

**This is an endothermic reaction:**
- The reaction absorbs energy from the surroundings [1 mark]
- Energy is transferred from the mixture to the reactants
- This causes the temperature to decrease [1 mark]

**Energy explanation:**
- More energy is needed to break the bonds in the reactants
- Than is released when bonds in the products form
- The difference comes from thermal energy in the surroundings [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare exothermic and endothermic reactions in terms of energy transfer and bond energies. Include examples of everyday applications for each type.',
        solution: `**Energy transfer comparison:**

**Exothermic reactions:**
- Release energy to surroundings [1 mark]
- Temperature of surroundings increases
- Energy is given out

**Endothermic reactions:**
- Absorb energy from surroundings [1 mark]
- Temperature of surroundings decreases
- Energy is taken in

**Bond energy comparison:**

**Exothermic:**
- Energy released forming bonds > Energy needed to break bonds [1 mark]
- Overall energy is released

**Endothermic:**
- Energy needed to break bonds > Energy released forming bonds [1 mark]
- Overall energy is absorbed

**Everyday applications:**

**Exothermic examples:**
- Hand warmers (iron oxidation provides heat)
- Self-heating cans (chemical reaction heats contents)
- Combustion of fuels for heating and transport

**Endothermic examples:**
- Sports injury cold packs (absorb heat from injury) [1 mark]
- Cooking/thermal decomposition (requires heat input)
- Industrial processes that need controlled cooling`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'energy-changes',
      subtopic_slug: 'reaction-profiles',
      title: 'Reaction Profiles | GCSE Chemistry',
      meta_description: 'Master reaction profiles and activation energy diagrams. GCSE Chemistry practice questions with solutions.',
      introduction: `Reaction profiles (also called energy level diagrams or enthalpy diagrams) are graphical representations showing the energy changes that occur during a chemical reaction. They plot energy against the progress of the reaction, showing the relative energy levels of reactants and products.

For an exothermic reaction, the products have less energy than the reactants. The reaction profile shows the products at a lower energy level than the reactants, and the difference represents the energy released to the surroundings. The overall energy change (ΔH) is negative for exothermic reactions.

For an endothermic reaction, the products have more energy than the reactants. The reaction profile shows the products at a higher energy level, and the difference represents the energy absorbed from the surroundings. The overall energy change (ΔH) is positive for endothermic reactions.

Both types of reaction profile show a peak in energy between reactants and products. This peak represents the activation energy - the minimum amount of energy that colliding particles must have for a successful reaction to occur. Particles must have enough energy to overcome this energy barrier for bonds to break and new bonds to form.

Catalysts work by providing an alternative reaction pathway with a lower activation energy. On a reaction profile, a catalysed reaction shows a lower peak while the starting and ending energy levels remain the same. Because more particles have sufficient energy to react, the reaction rate increases, though the overall energy change of the reaction remains unchanged.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'On a reaction profile, describe how you can identify whether a reaction is exothermic or endothermic.',
        solution: `**For an exothermic reaction:**
- Products are at a lower energy level than reactants [1 mark]
- The arrow or line goes DOWN from reactants to products
- ΔH is negative

**For an endothermic reaction:**
- Products are at a higher energy level than reactants [1 mark]
- The arrow or line goes UP from reactants to products
- ΔH is positive [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Define activation energy and explain why all reactions, even exothermic ones, require activation energy to start.',
        solution: `**Definition of activation energy:**
The minimum amount of energy that colliding particles must have for a successful reaction to occur [1 mark]
(Or: the energy needed to start a reaction / break initial bonds)

**Why all reactions need activation energy:**
- Bonds in the reactants must be broken before new bonds can form [1 mark]
- Breaking bonds requires energy input
- Even in exothermic reactions, initial bonds must be broken first [1 mark]
- Only particles with energy ≥ activation energy can react successfully
- The activation energy barrier must be overcome for any reaction to occur [1 mark]

This is why many exothermic reactions (like combustion) need initial energy input (a spark/flame) to start, even though they release energy overall.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Draw and label reaction profiles for both a catalysed and uncatalysed exothermic reaction on the same axes. Explain what these diagrams show about how catalysts work.',
        solution: `**Drawing requirements:**
[Sketch should show:]
- X-axis labeled "Progress of reaction" [1 mark]
- Y-axis labeled "Energy"
- Reactants on left at higher energy level
- Products on right at lower energy level
- Two peaks: higher for uncatalysed, lower for catalysed [1 mark]
- ΔH arrow showing energy released (same for both)

**Key features to label:**
- Reactants, Products
- Activation energy (uncatalysed) - larger
- Activation energy (catalysed) - smaller [1 mark]
- Overall energy change (ΔH) - same for both

**How this shows catalysts work:**

1. **Lower activation energy:** [1 mark]
- Catalysed reaction has lower peak
- Less energy needed for reaction to occur
- More particles have sufficient energy to react

2. **Alternative pathway:**
- Catalyst provides different route for reaction
- Same reactants → same products
- But via lower energy intermediate

3. **Same overall energy change:** [1 mark]
- Start and end points are identical
- ΔH is unchanged by catalyst
- Catalyst only affects rate, not energy released/absorbed`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'energy-changes',
      subtopic_slug: 'bond-energies',
      title: 'Bond Energies | GCSE Chemistry',
      meta_description: 'Master bond energy calculations for energy changes. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Bond energy is the amount of energy needed to break one mole of a particular type of bond in gaseous molecules. The same amount of energy is released when that bond forms. Bond energies are measured in kJ/mol and can be used to calculate the overall energy change in a chemical reaction.

During a chemical reaction, bonds in the reactants must be broken (this requires energy, so is endothermic) and new bonds in the products are formed (this releases energy, so is exothermic). The overall energy change of a reaction depends on the balance between these two processes.

To calculate the energy change of a reaction using bond energies, you follow these steps: First, identify all the bonds broken in the reactants and add up their bond energies - this gives the total energy absorbed. Then, identify all the bonds formed in the products and add up their bond energies - this gives the total energy released. Finally, subtract energy released from energy absorbed.

If more energy is released forming bonds than is required to break bonds, the reaction is exothermic and the energy change is negative. If more energy is required to break bonds than is released forming them, the reaction is endothermic and the energy change is positive.

Bond energy values are averages because the actual energy of a specific bond depends on its molecular environment. For example, the C-H bond in methane has a slightly different strength than the C-H bond in ethanol. Despite this limitation, average bond energies give useful estimates of reaction energy changes.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State whether energy is released or absorbed when (a) bonds are broken and (b) bonds are formed.',
        solution: `**(a) When bonds are broken:**
Energy is absorbed / taken in / required [1 mark]
(This is an endothermic process)

**(b) When bonds are formed:**
Energy is released / given out [1 mark]
(This is an exothermic process)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The reaction between hydrogen and chlorine to form hydrogen chloride is shown below.\n\nH₂ + Cl₂ → 2HCl\n\nUsing the bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol, calculate the energy change for this reaction.',
        solution: `**Step 1: Calculate energy to break bonds (absorbed):**
- 1 × H-H bond = 1 × 436 = 436 kJ [1 mark]
- 1 × Cl-Cl bond = 1 × 242 = 242 kJ
- Total energy absorbed = 436 + 242 = 678 kJ

**Step 2: Calculate energy released forming bonds:**
- 2 × H-Cl bonds = 2 × 431 = 862 kJ [1 mark]
- Total energy released = 862 kJ

**Step 3: Calculate overall energy change:**
Energy change = Energy absorbed - Energy released [1 mark]
Energy change = 678 - 862 = -184 kJ/mol

**Answer: -184 kJ/mol** [1 mark]

The negative value shows this is an exothermic reaction (more energy released than absorbed).`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Methane burns in oxygen according to the equation:\n\nCH₄ + 2O₂ → CO₂ + 2H₂O\n\nUsing bond energies: C-H = 413 kJ/mol, O=O = 498 kJ/mol, C=O = 805 kJ/mol, O-H = 464 kJ/mol, calculate the energy change and explain why combustion reactions are useful as energy sources.',
        solution: `**Step 1: Count bonds in reactants:**
- CH₄: 4 × C-H bonds
- 2O₂: 2 × O=O bonds [1 mark]

**Step 2: Calculate energy absorbed (breaking bonds):**
- 4 × C-H = 4 × 413 = 1652 kJ
- 2 × O=O = 2 × 498 = 996 kJ
- Total absorbed = 1652 + 996 = 2648 kJ [1 mark]

**Step 3: Count bonds in products:**
- CO₂: 2 × C=O bonds
- 2H₂O: 4 × O-H bonds (2 per water molecule)

**Step 4: Calculate energy released (forming bonds):**
- 2 × C=O = 2 × 805 = 1610 kJ
- 4 × O-H = 4 × 464 = 1856 kJ
- Total released = 1610 + 1856 = 3466 kJ [1 mark]

**Step 5: Calculate energy change:**
Energy change = 2648 - 3466 = **-818 kJ/mol** [1 mark]

**Why combustion is useful as energy source:**
- Large negative energy change means lots of energy is released
- This energy can be used for heating, generating electricity, or powering vehicles
- Fuels store chemical energy that is easily released by burning [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'energy-changes',
      subtopic_slug: 'cells-batteries',
      title: 'Cells and Batteries | GCSE Chemistry',
      meta_description: 'Master chemical cells and batteries including electrochemical reactions. GCSE Chemistry practice questions with solutions.',
      introduction: `Chemical cells (commonly called batteries, though technically a battery is multiple cells connected together) convert chemical energy into electrical energy through electrochemical reactions. They provide portable, convenient sources of electricity for countless devices from phones to electric vehicles.

A simple cell can be made by placing two different metals in an electrolyte (a solution that conducts electricity). The more reactive metal loses electrons more easily, becoming the negative terminal. These electrons flow through an external circuit to the less reactive metal (positive terminal), creating an electric current. The greater the difference in reactivity between the metals, the higher the voltage produced.

The voltage of a cell depends on the materials used and their position in the reactivity series. Cells using metals far apart in the reactivity series (like zinc and copper) produce higher voltages than those using metals close together. The electrolyte also affects performance - it must allow ions to move to complete the circuit within the cell.

Non-rechargeable cells (primary cells) use irreversible reactions. Once the chemicals are used up, the cell is "dead" and cannot be recharged. Alkaline batteries used in torches and TV remotes are examples. Rechargeable cells (secondary cells) use reversible reactions - passing current through them in the opposite direction reverses the chemical reactions, restoring the original chemicals.

Rechargeable batteries like lithium-ion cells are increasingly important as we move towards electric vehicles and renewable energy storage. They can be charged and discharged hundreds of times before their performance degrades significantly. However, they still have limitations in terms of energy density, charging time, and eventual degradation, driving ongoing research into better battery technologies.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how a simple cell can be made using two metals and an electrolyte.',
        solution: `**Making a simple cell:**

1. **Two different metals** [1 mark]
- Place two different metals into a solution
- The metals must have different reactivities

2. **Electrolyte** [1 mark]
- Place the metals in an electrolyte solution (e.g., salt solution, acid)
- The electrolyte conducts electricity by allowing ions to move

3. **Connection**
- Connect the metals with a wire
- Electrons flow from the more reactive metal to the less reactive metal [1 mark]
- This creates an electric current`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why a cell made with zinc and copper electrodes produces a higher voltage than one made with zinc and iron electrodes.',
        solution: `**Explanation:**

**Reactivity series (relevant metals):**
Zinc > Iron > Copper

**Effect on voltage:**
- The voltage depends on the difference in reactivity between the two metals [1 mark]
- More reactive metal loses electrons more readily
- Less reactive metal accepts electrons more readily

**Zinc-Copper cell:**
- Large difference in reactivity [1 mark]
- Greater tendency for electrons to flow from zinc to copper
- Higher voltage produced

**Zinc-Iron cell:**
- Smaller difference in reactivity [1 mark]
- Less driving force for electron transfer
- Lower voltage produced [1 mark]

**Conclusion:** The greater the gap in the reactivity series, the higher the voltage.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Compare rechargeable and non-rechargeable cells in terms of the chemical reactions involved and discuss the advantages and disadvantages of each type.',
        solution: `**Chemical reactions comparison:**

**Non-rechargeable (primary cells):**
- Use irreversible chemical reactions [1 mark]
- Once chemicals are used up, reaction cannot be reversed
- Cell is discarded when flat

**Rechargeable (secondary cells):**
- Use reversible chemical reactions [1 mark]
- Passing current in reverse direction restores original chemicals
- Can be recharged many times

**Advantages of non-rechargeable:**
- Cheaper initial cost
- Hold charge for longer when not in use (lower self-discharge)
- No need for charger
- Good for low-drain devices [1 mark]

**Disadvantages of non-rechargeable:**
- Must be replaced when flat (ongoing cost)
- Create more waste
- Worse for environment

**Advantages of rechargeable:**
- Can be reused hundreds of times [1 mark]
- Lower long-term cost
- Better for environment (less waste)
- Suitable for high-drain devices

**Disadvantages of rechargeable:**
- Higher initial cost (plus charger)
- Gradually lose capacity over time
- Self-discharge when stored [1 mark]
- Eventually stop holding charge and need replacement`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'energy-changes',
      subtopic_slug: 'fuel-cells',
      title: 'Fuel Cells | GCSE Chemistry',
      meta_description: 'Master fuel cells including hydrogen fuel cells and their applications. GCSE Chemistry practice questions with solutions.',
      introduction: `Fuel cells are electrochemical cells that convert chemical energy from a fuel directly into electrical energy through a continuous reaction with an oxidant (usually oxygen). Unlike batteries, fuel cells don't store energy internally - they produce electricity as long as fuel is supplied.

The most common type is the hydrogen fuel cell, which combines hydrogen and oxygen to produce electricity and water. At the negative electrode (anode), hydrogen molecules lose electrons to form hydrogen ions: 2H₂ → 4H⁺ + 4e⁻. These electrons flow through an external circuit (producing current) to the positive electrode (cathode), where they combine with oxygen and hydrogen ions to form water: O₂ + 4H⁺ + 4e⁻ → 2H₂O.

The overall reaction in a hydrogen fuel cell is simply: 2H₂ + O₂ → 2H₂O. This is essentially the same as burning hydrogen, but instead of releasing all the energy as heat, the fuel cell converts much of it directly to electrical energy. The only waste product is water, making fuel cells attractive for clean energy applications.

Fuel cells have several advantages over conventional power sources. They are more efficient than combustion engines because they convert chemical energy directly to electrical energy without intermediate heat and mechanical stages. They produce no local pollution - a hydrogen fuel cell only emits water. They are quiet in operation and can be scaled from small portable devices to large power plants.

However, fuel cells face challenges. Hydrogen is difficult to store and transport safely (it's highly flammable and must be compressed or liquefied). Most hydrogen is currently produced from natural gas, which involves carbon dioxide emissions. The fuel cells themselves are expensive due to the need for platinum catalysts. Despite these challenges, fuel cells are increasingly used in buses, forklifts, and backup power systems.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the overall equation for the reaction in a hydrogen fuel cell and name the product.',
        solution: `**Overall equation:**
2H₂ + O₂ → 2H₂O [1 mark]
(Or: hydrogen + oxygen → water)

**Product:**
Water (H₂O) [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe how a hydrogen fuel cell produces electricity. Include the reactions at both electrodes.',
        solution: `**How a hydrogen fuel cell works:**

**At the negative electrode (anode):**
- Hydrogen gas is supplied [1 mark]
- Hydrogen loses electrons (oxidation)
- Equation: 2H₂ → 4H⁺ + 4e⁻ [1 mark]
- Electrons flow through external circuit to positive electrode

**At the positive electrode (cathode):**
- Oxygen gas is supplied
- Electrons combine with oxygen and hydrogen ions [1 mark]
- Equation: O₂ + 4H⁺ + 4e⁻ → 2H₂O

**Electricity production:**
- Electrons flowing through the external circuit create an electric current [1 mark]
- This current can power devices
- The only product is water`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Evaluate the use of hydrogen fuel cells as an alternative to petrol engines for vehicles.',
        solution: `**Advantages of hydrogen fuel cells:**

1. **Environmental benefits:**
- Only product is water - no direct CO₂ or pollutant emissions [1 mark]
- No local air pollution in cities
- Reduces greenhouse gas emissions if hydrogen is made renewably

2. **Efficiency:**
- More efficient than combustion engines [1 mark]
- Direct conversion of chemical energy to electrical energy
- Less energy wasted as heat

3. **Operation:**
- Quiet operation
- Good range compared to battery electric vehicles
- Quick refuelling (similar to petrol)

**Disadvantages of hydrogen fuel cells:**

1. **Hydrogen production:**
- Most hydrogen currently made from natural gas (produces CO₂) [1 mark]
- Electrolysis using renewable electricity is expensive
- Energy is needed to produce hydrogen

2. **Storage and infrastructure:**
- Hydrogen is difficult to store (compressed or liquefied)
- Highly flammable - safety concerns [1 mark]
- Few hydrogen refuelling stations exist
- Expensive infrastructure needed

3. **Cost:**
- Fuel cells are expensive (platinum catalysts)
- Hydrogen fuel currently expensive
- Vehicles cost more than conventional cars [1 mark]

**Conclusion:** Fuel cells offer promise for clean transport but require infrastructure development and cheaper green hydrogen production.`,
        display_order: 3
      }
    ]
  }
];
