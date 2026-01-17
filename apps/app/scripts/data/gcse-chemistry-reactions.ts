import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryReactions: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'acids-and-bases',
      title: 'Acids and Bases | GCSE Chemistry',
      meta_description: 'Learn about acids, bases, alkalis and neutralisation reactions. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `Acids and bases are fundamental categories of chemicals with opposite properties. Acids produce hydrogen ions (H⁺) when dissolved in water, while bases are substances that neutralise acids. An alkali is a base that dissolves in water, producing hydroxide ions (OH⁻).

The pH scale measures how acidic or alkaline a solution is, ranging from 0 to 14. Acids have a pH below 7, with lower numbers indicating stronger acids. Pure water and neutral solutions have a pH of 7. Alkalis have a pH above 7, with higher numbers indicating stronger alkalis.

Common acids include hydrochloric acid (HCl), sulfuric acid (H₂SO₄), and nitric acid (HNO₃). These strong acids completely dissociate in water, releasing all their hydrogen ions. Common alkalis include sodium hydroxide (NaOH), potassium hydroxide (KOH), and calcium hydroxide (Ca(OH)₂).

Neutralisation is the reaction between an acid and a base to form a salt and water. The ionic equation for neutralisation is: H⁺ + OH⁻ → H₂O. This exothermic reaction is the basis for treating acid spills, indigestion remedies, and controlling soil pH for agriculture.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'What is the pH range of acids, neutral solutions, and alkalis?',
        solution: `**pH scale:**

- **Acids:** pH 0-6 (below 7)
- **Neutral:** pH 7
- **Alkalis:** pH 8-14 (above 7)

The lower the pH, the more acidic (more H⁺ ions).
The higher the pH, the more alkaline (more OH⁻ ions).`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Write a balanced equation for the reaction between sodium hydroxide and sulfuric acid. Name the salt produced and state its formula.',
        solution: `**Word equation:**
Sodium hydroxide + Sulfuric acid → Sodium sulfate + Water

**Balanced symbol equation:**
2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O

**Salt produced:** Sodium sulfate

**Formula:** Na₂SO₄

**Explanation:**
- Sulfuric acid is diprotic (has 2 H⁺ ions)
- Two NaOH are needed to neutralise one H₂SO₄
- The sulfate ion (SO₄²⁻) combines with two Na⁺ ions`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Explain why adding calcium hydroxide to acidic soil raises the pH, and write equations to show what happens when excess hydrochloric acid reacts with calcium hydroxide solution.',
        solution: `**Why calcium hydroxide raises soil pH:**
- Calcium hydroxide is an alkali (base that dissolves in water)
- When dissolved, it releases hydroxide ions: Ca(OH)₂ → Ca²⁺ + 2OH⁻
- The hydroxide ions neutralise the hydrogen ions in the acidic soil
- H⁺ + OH⁻ → H₂O
- As H⁺ ions are removed, the pH increases (becomes less acidic)

**Equations for reaction with excess HCl:**

**Word equation:**
Calcium hydroxide + Hydrochloric acid → Calcium chloride + Water

**Balanced symbol equation:**
Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O

**Ionic equation:**
Ca²⁺ + 2OH⁻ + 2H⁺ + 2Cl⁻ → Ca²⁺ + 2Cl⁻ + 2H₂O

**Net ionic equation:**
OH⁻ + H⁺ → H₂O

This shows the essential neutralisation reaction where hydroxide ions and hydrogen ions combine to form water.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'reactions-of-acids',
      title: 'Reactions of Acids | GCSE Chemistry',
      meta_description: 'Master acid reactions with metals, carbonates and metal oxides. GCSE Chemistry practice questions with solutions.',
      introduction: `Acids react with several types of substances in characteristic ways. Understanding these reactions allows us to predict products, write equations, and explain observations in experiments. Each type of reaction follows a predictable pattern.

When acids react with metals, hydrogen gas is produced along with a salt. The general equation is: acid + metal → salt + hydrogen. Not all metals react—only those above hydrogen in the reactivity series. The reaction can be tested by holding a lit splint near the gas, which burns with a squeaky pop.

When acids react with metal carbonates, carbon dioxide is produced along with a salt and water. The general equation is: acid + carbonate → salt + water + carbon dioxide. The carbon dioxide can be identified by bubbling it through limewater, which turns milky (cloudy).

When acids react with metal oxides or hydroxides, a neutralisation reaction occurs producing a salt and water only. Metal oxides and hydroxides are bases, so: acid + base → salt + water. The type of salt formed depends on which acid is used: hydrochloric acid produces chlorides, sulfuric acid produces sulfates, and nitric acid produces nitrates.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Magnesium reacts with dilute hydrochloric acid. Write a word equation for this reaction and describe what would be observed.',
        solution: `**Word equation:**
Magnesium + Hydrochloric acid → Magnesium chloride + Hydrogen

**Observations:**
- **Bubbles/effervescence** (hydrogen gas produced)
- The magnesium **dissolves** (it gets smaller/disappears)
- The solution gets **warm** (exothermic reaction)
- If tested with a lit splint, the gas burns with a **squeaky pop**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Write a balanced symbol equation for the reaction between sodium carbonate and dilute sulfuric acid. Describe a test to identify the gas produced.',
        solution: `**Balanced equation:**
Na₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂

**Test for carbon dioxide:**
1. Bubble the gas through **limewater** (calcium hydroxide solution)
2. The limewater turns **cloudy/milky**
3. This is because calcium carbonate (white precipitate) forms:

Ca(OH)₂ + CO₂ → CaCO₃ + H₂O

This positive test confirms the gas is carbon dioxide.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Copper does not react with dilute acids, but copper oxide does. Explain why this is the case and write equations for the reaction between copper oxide and dilute sulfuric acid.',
        solution: `**Why copper doesn't react with dilute acids:**
- Copper is **below hydrogen** in the reactivity series
- It is not reactive enough to displace hydrogen from acids
- The reaction Metal + Acid → Salt + H₂ requires the metal to be more reactive than hydrogen
- Copper cannot reduce H⁺ ions to H₂ gas

**Why copper oxide does react:**
- Copper oxide is a **base** (metal oxide)
- The reaction is **neutralisation**, not a displacement
- No hydrogen gas needs to be produced
- The oxide ions (O²⁻) react with hydrogen ions (H⁺) to form water

**Equations:**

**Word equation:**
Copper oxide + Sulfuric acid → Copper sulfate + Water

**Balanced symbol equation:**
CuO + H₂SO₄ → CuSO₄ + H₂O

**Observations:**
- Black copper oxide dissolves
- Blue solution forms (copper sulfate is blue)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'reactivity-series',
      title: 'Reactivity Series | GCSE Chemistry',
      meta_description: 'Learn the reactivity series and displacement reactions. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `The reactivity series is a list of metals arranged in order of their reactivity, from most reactive to least reactive. This series helps us predict whether reactions will occur and what products will form. The order reflects how easily metals lose electrons to form positive ions.

The reactivity series from most to least reactive is: potassium, sodium, lithium, calcium, magnesium, aluminium, carbon, zinc, iron, hydrogen, copper, silver, gold, platinum. Carbon and hydrogen are included as reference points. Metals above hydrogen react with acids; metals below carbon cannot be extracted by reduction with carbon.

Displacement reactions occur when a more reactive element takes the place of a less reactive element in a compound. For example, if you add iron to copper sulfate solution, the iron displaces the copper: Fe + CuSO₄ → FeSO₄ + Cu. The blue solution turns colourless and copper metal forms.

The reactivity series also determines extraction methods. Highly reactive metals like sodium and aluminium are extracted by electrolysis. Less reactive metals like iron and zinc can be extracted by reduction with carbon in a blast furnace. Unreactive metals like gold are found native (as the element) in nature.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Place these metals in order of reactivity from most to least reactive: copper, magnesium, zinc, iron.',
        solution: `Order from most to least reactive:

1. **Magnesium** (most reactive)
2. **Zinc**
3. **Iron**
4. **Copper** (least reactive)

This can be remembered as part of the series:
Mg → Al → C → Zn → Fe → H → Cu`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Zinc is added to copper sulfate solution. Write a balanced equation for the reaction and explain what would be observed.',
        solution: `**Balanced equation:**
Zn + CuSO₄ → ZnSO₄ + Cu

Or with state symbols:
Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)

**Observations:**
- The **blue solution** turns **colourless** (copper sulfate is blue, zinc sulfate is colourless)
- **Brown/pink solid** forms on the zinc (this is copper metal)
- The **zinc decreases in size** as it dissolves
- The solution may get warm (exothermic reaction)

**Explanation:**
Zinc is more reactive than copper, so it displaces copper from copper sulfate solution.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A student adds a piece of metal X to solutions of copper sulfate, magnesium sulfate, and zinc sulfate. Metal X reacts with copper sulfate but not with magnesium sulfate or zinc sulfate. Identify the position of metal X in the reactivity series and suggest what metal X could be.',
        solution: `**Analysis:**

Metal X reacts with copper sulfate:
- X must be MORE reactive than copper
- X displaces Cu from CuSO₄

Metal X does NOT react with magnesium sulfate:
- X must be LESS reactive than magnesium
- X cannot displace Mg from MgSO₄

Metal X does NOT react with zinc sulfate:
- X must be LESS reactive than zinc
- X cannot displace Zn from ZnSO₄

**Position in reactivity series:**
Metal X is between zinc and copper:
Mg > Zn > **X** > Cu

**Possible identity of X:**

Looking at the reactivity series between zinc and copper:
Zn → Fe → H → Cu

Metal X could be **iron (Fe)**

**Verification:**
- Fe + CuSO₄ → FeSO₄ + Cu ✓ (reaction occurs)
- Fe + MgSO₄ → No reaction ✓
- Fe + ZnSO₄ → No reaction ✓`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'oxidation-and-reduction',
      title: 'Oxidation and Reduction | GCSE Chemistry',
      meta_description: 'Master oxidation and reduction (redox) reactions and electron transfer. GCSE Chemistry practice questions with solutions.',
      introduction: `Oxidation and reduction are complementary processes that always occur together in redox reactions. Originally, oxidation meant adding oxygen and reduction meant removing oxygen, but the definitions have been expanded to include electron transfer.

In terms of oxygen: oxidation is the gain of oxygen, reduction is the loss of oxygen. For example, when copper oxide is reduced by hydrogen, the copper loses oxygen (reduction) and hydrogen gains oxygen (oxidation): CuO + H₂ → Cu + H₂O.

In terms of electrons: oxidation is the loss of electrons, reduction is the gain of electrons. This is remembered by the mnemonic "OIL RIG" (Oxidation Is Loss, Reduction Is Gain). When magnesium burns, magnesium loses electrons (oxidation) while oxygen gains electrons (reduction).

A reducing agent is a substance that causes another substance to be reduced by giving it electrons (the reducing agent is itself oxidised). An oxidising agent causes another substance to be oxidised by taking electrons from it (the oxidising agent is itself reduced). In the thermite reaction, aluminium is the reducing agent and iron oxide is the oxidising agent.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'In the reaction 2Mg + O₂ → 2MgO, which substance is oxidised and which is reduced? Explain your answer.',
        solution: `**Magnesium is oxidised:**
- Magnesium gains oxygen (Mg → MgO)
- Magnesium loses electrons: Mg → Mg²⁺ + 2e⁻

**Oxygen is reduced:**
- Oxygen gains electrons: O₂ + 4e⁻ → 2O²⁻
- Oxygen's oxidation state decreases from 0 to -2

Remember: **OIL RIG**
- Oxidation Is Loss (of electrons)
- Reduction Is Gain (of electrons)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'In the extraction of iron, iron oxide is reduced by carbon monoxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Identify the reducing agent and explain its role.',
        solution: `**The reducing agent is carbon monoxide (CO).**

**Role of the reducing agent:**
1. Carbon monoxide **removes oxygen** from iron oxide
2. This converts Fe₂O₃ to Fe (iron is reduced)
3. The CO gains oxygen to become CO₂
4. CO is **oxidised** in the process (gains oxygen)

**In terms of electrons:**
- Iron ions gain electrons (reduction): Fe³⁺ + 3e⁻ → Fe
- Carbon loses electrons (oxidation) through oxygen transfer

**Key points:**
- A reducing agent causes reduction in another substance
- The reducing agent is itself oxidised
- CO acts as the reducing agent because it has a strong tendency to combine with oxygen`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'When chlorine gas is bubbled through potassium bromide solution, the solution turns orange and bromine is formed: Cl₂ + 2KBr → 2KCl + Br₂. Write ionic equations and identify what is oxidised and what is reduced. Explain why this reaction occurs.',
        solution: `**Full ionic equation:**
Cl₂ + 2K⁺ + 2Br⁻ → 2K⁺ + 2Cl⁻ + Br₂

**Net ionic equation:**
Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂

**What is oxidised:**
- **Bromide ions (Br⁻)** are oxidised
- They lose electrons: 2Br⁻ → Br₂ + 2e⁻
- Oxidation state changes from -1 to 0

**What is reduced:**
- **Chlorine (Cl₂)** is reduced
- It gains electrons: Cl₂ + 2e⁻ → 2Cl⁻
- Oxidation state changes from 0 to -1

**Why the reaction occurs:**
- Chlorine is **more reactive** than bromine (higher in Group 7)
- More reactive halogens displace less reactive halogens from their compounds
- Chlorine has a greater tendency to gain electrons than bromine
- Chlorine is a stronger oxidising agent than bromine
- Therefore Cl₂ takes electrons from Br⁻, forming Cl⁻ and releasing Br₂`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'electrolysis',
      title: 'Electrolysis | GCSE Chemistry',
      meta_description: 'Understand electrolysis of molten and aqueous compounds. GCSE Chemistry practice questions with detailed solutions.',
      introduction: `Electrolysis is the process of using electricity to decompose ionic compounds. It only works when the ions are free to move—either when the compound is molten (melted) or dissolved in water. The electricity provides energy to break the ionic bonds.

During electrolysis, positive ions (cations) move to the negative electrode (cathode) where they gain electrons and are reduced. Negative ions (anions) move to the positive electrode (anode) where they lose electrons and are oxidised. The electrodes are usually made of inert materials like graphite or platinum.

For molten compounds, electrolysis is straightforward: the metal forms at the cathode and the non-metal at the anode. For example, electrolysis of molten sodium chloride produces sodium metal at the cathode and chlorine gas at the anode.

For aqueous solutions, water complicates things because it also contains H⁺ and OH⁻ ions. At the cathode, either the metal or hydrogen is produced depending on reactivity. At the anode, either the non-metal or oxygen is produced depending on concentration and the element involved. Understanding these rules allows us to predict the products of electrolysis.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'During the electrolysis of molten lead bromide, name the products formed at each electrode and state which electrode they form at.',
        solution: `**At the cathode (negative electrode):**
- **Lead** (Pb) is formed
- Lead ions (Pb²⁺) gain electrons and are reduced
- Pb²⁺ + 2e⁻ → Pb

**At the anode (positive electrode):**
- **Bromine** (Br₂) is formed
- Bromide ions (Br⁻) lose electrons and are oxidised
- 2Br⁻ → Br₂ + 2e⁻`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why solid sodium chloride cannot be electrolysed but molten sodium chloride can.',
        solution: `**Solid sodium chloride cannot be electrolysed because:**
- In solid NaCl, ions are held in a **fixed lattice structure**
- The ions **cannot move** - they can only vibrate in position
- For electrolysis to occur, ions must be able to move to the electrodes
- No movement of ions means no flow of charge and no electrolysis

**Molten sodium chloride can be electrolysed because:**
- When heated above its melting point (801°C), the lattice breaks down
- The ions become **free to move**
- Na⁺ ions can move towards the cathode
- Cl⁻ ions can move towards the anode
- This movement of ions allows current to flow and electrolysis to occur

**Key point:** Electrolysis requires mobile ions to carry the charge through the electrolyte.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Dilute sulfuric acid is electrolysed using platinum electrodes. Predict the products at each electrode and write half equations. Explain why these products form rather than sulfate and sulfur.',
        solution: `**Products:**
- **Cathode:** Hydrogen gas (H₂)
- **Anode:** Oxygen gas (O₂)

**Half equations:**

**At cathode (reduction):**
2H⁺ + 2e⁻ → H₂
(or: 4H⁺ + 4e⁻ → 2H₂)

**At anode (oxidation):**
4OH⁻ → O₂ + 2H₂O + 4e⁻
(or: 2H₂O → O₂ + 4H⁺ + 4e⁻)

**Why hydrogen forms instead of nothing:**
- The solution contains H⁺ ions from the acid and from water
- H⁺ ions are discharged at the cathode
- (No metal is present to compete for discharge)

**Why oxygen forms instead of sulfur/sulfate:**
- Sulfate ions (SO₄²⁻) are very stable
- They are harder to oxidise than hydroxide ions
- The OH⁻ ions from water are preferentially discharged
- This releases oxygen gas

**General rule for aqueous electrolysis:**
- At the anode: if the negative ion is from a halide (Cl⁻, Br⁻, I⁻), the halogen is produced
- If not a halide (like SO₄²⁻, NO₃⁻), oxygen is produced from water`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'chemical-changes',
      subtopic_slug: 'exothermic-and-endothermic',
      title: 'Exothermic and Endothermic Reactions | GCSE Chemistry',
      meta_description: 'Learn about energy changes in reactions, bond energies and reaction profiles. GCSE Chemistry practice questions with solutions.',
      introduction: `All chemical reactions involve energy changes. Exothermic reactions release energy to the surroundings, causing the temperature to increase. Endothermic reactions absorb energy from the surroundings, causing the temperature to decrease.

In exothermic reactions, the products have less energy than the reactants. The excess energy is released, usually as heat but sometimes as light or sound. Examples include combustion, neutralisation, and many oxidation reactions. These reactions are represented by energy level diagrams where the products are lower than the reactants.

In endothermic reactions, the products have more energy than the reactants. Energy must be absorbed from the surroundings to make up this difference. Examples include thermal decomposition, photosynthesis, and dissolving ammonium nitrate in water. On energy level diagrams, the products are higher than the reactants.

Energy changes can be explained using bond energies. Breaking bonds requires energy (endothermic), while making bonds releases energy (exothermic). If more energy is released making bonds than is needed to break bonds, the reaction is exothermic overall. If more energy is needed to break bonds, the reaction is endothermic.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State whether combustion is exothermic or endothermic, and describe how you could tell this from a simple experiment.',
        solution: `Combustion is an **exothermic** reaction.

**How to tell from an experiment:**
- Place a thermometer in water surrounding the burning substance
- The temperature of the water **increases**
- This shows that heat energy is being **released** to the surroundings
- The surroundings get warmer

(Or simply: you can feel heat being given off when something burns)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'When ammonium nitrate dissolves in water, the temperature decreases. Explain this observation in terms of energy and describe what this means about the energy content of the products compared to the reactants.',
        solution: `**Observation explanation:**
- The temperature decrease shows that the reaction is **endothermic**
- Energy is being **absorbed from the surroundings** (the water)
- This absorption of heat causes the temperature to drop

**Energy content comparison:**
- In an endothermic reaction, the **products have more energy** than the reactants
- Energy has been transferred from the surroundings into the chemical bonds of the products
- The dissolved ammonium and nitrate ions have more energy than the solid ammonium nitrate

**Energy level diagram:**
- The products would be drawn at a **higher level** than the reactants
- The difference in height represents the energy absorbed
- Energy change (ΔH) is positive for endothermic reactions`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'The reaction H₂ + Cl₂ → 2HCl has these bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol. Calculate the overall energy change and state whether the reaction is exothermic or endothermic.',
        solution: `**Step 1: Calculate energy needed to break bonds**
Bonds broken (reactants):
- 1 × H-H bond: 1 × 436 = 436 kJ
- 1 × Cl-Cl bond: 1 × 242 = 242 kJ
- **Total energy in: 436 + 242 = 678 kJ**

**Step 2: Calculate energy released making bonds**
Bonds formed (products):
- 2 × H-Cl bonds: 2 × 431 = 862 kJ
- **Total energy out: 862 kJ**

**Step 3: Calculate overall energy change**
Energy change = Energy to break bonds - Energy from making bonds
Energy change = 678 - 862 = **-184 kJ/mol**

**Conclusion:**
- The energy change is **negative** (-184 kJ/mol)
- More energy is released making bonds than is needed to break bonds
- The reaction is **exothermic**

**Explanation:** The H-Cl bonds formed are stronger (higher bond energy) than the average of the H-H and Cl-Cl bonds broken, so energy is released overall.`,
        display_order: 3
      }
    ]
  }
];
