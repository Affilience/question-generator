import { SubtopicData } from '../bulk-seo-insert';

export const alevelChemistryPhysical: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'atomic-structure',
      title: 'Atomic Structure | A-Level Chemistry',
      meta_description: 'Master advanced atomic structure including electron configurations, orbitals, and ionisation energies. Essential A-Level Chemistry topic with practice questions.',
      introduction: `Advanced atomic structure builds upon GCSE knowledge to explore the quantum mechanical model of the atom. Understanding electron orbitals and configurations is fundamental to A-Level Chemistry, as it explains chemical bonding, reactivity, and periodic trends.

Electrons occupy atomic orbitals, which are regions of space where there is a high probability of finding an electron. The four types of orbital (s, p, d, f) have distinctive shapes: s orbitals are spherical, p orbitals are dumbbell-shaped, d orbitals have more complex shapes. Each orbital can hold a maximum of two electrons with opposite spins, following the Pauli exclusion principle.

Electron configuration follows specific rules. The Aufbau principle states that electrons fill orbitals in order of increasing energy: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, and so on. Hund's rule requires that electrons occupy orbitals singly before pairing up, maximising total spin. These rules explain the structure of the periodic table.

Ionisation energy is the energy required to remove one mole of electrons from one mole of gaseous atoms or ions. First ionisation energy increases across a period due to increasing nuclear charge with similar shielding. It decreases down a group as electron shells increase, with greater shielding and distance from the nucleus.

Successive ionisation energies provide evidence for electron shells and subshells. Large jumps in ionisation energy occur when electrons are removed from a shell closer to the nucleus, confirming the shell model of atomic structure.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the full electron configuration for a sulfur atom (atomic number 16) and identify its position in the periodic table.',
        solution: '1s² 2s² 2p⁶ 3s² 3p⁴ (1 mark). Sulfur is in Period 3 (highest principal quantum number is 3) and Group 16/6 (6 electrons in outer shell) (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why the first ionisation energy of aluminium (577 kJ mol⁻¹) is lower than that of magnesium (736 kJ mol⁻¹), despite aluminium having a higher nuclear charge.',
        solution: 'Magnesium electron configuration: 1s² 2s² 2p⁶ 3s². Aluminium: 1s² 2s² 2p⁶ 3s² 3p¹ (1 mark). In aluminium, the outer electron is in a 3p orbital, which is higher in energy/further from nucleus than the 3s orbital in magnesium (1 mark). The 3p electron is also shielded by the 3s² electrons in addition to the inner shells (1 mark). Therefore less energy is required to remove the 3p electron from aluminium than to remove a 3s electron from magnesium (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The successive ionisation energies of an element X are: 786, 1580, 3230, 4360, 16000, 20000 kJ mol⁻¹. Identify the group of element X and explain your reasoning using the data provided.',
        solution: 'Element X is in Group 4/14 (1 mark). There is a large increase between the 4th (4360 kJ mol⁻¹) and 5th (16000 kJ mol⁻¹) ionisation energies (1 mark). The ratio of IE5/IE4 = 16000/4360 ≈ 3.7, which is much larger than typical successive increases (1 mark). This indicates that the 5th electron is being removed from a shell closer to the nucleus, where electrons are more strongly held (1 mark). Therefore, there are 4 electrons in the outer shell before the large jump, placing the element in Group 4 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'bonding',
      title: 'Chemical Bonding | A-Level Chemistry',
      meta_description: 'Explore advanced bonding concepts including orbital hybridisation, bond polarity, and intermolecular forces for A-Level Chemistry examination success.',
      introduction: `A-Level Chemistry extends bonding concepts to include more sophisticated models that explain molecular shapes, bond angles, and physical properties. Understanding these concepts is essential for predicting and explaining chemical behaviour.

Covalent bonds form when atomic orbitals overlap to share electrons. Sigma (σ) bonds form by direct head-on overlap of orbitals and allow free rotation. Pi (π) bonds form by sideways overlap of p orbitals above and below the bond axis, preventing rotation. Double bonds consist of one σ and one π bond; triple bonds have one σ and two π bonds.

Electronegativity differences between bonded atoms create bond polarity. Polar bonds have unequal electron distribution, creating partial charges (δ+ and δ-). Highly polar bonds approach ionic character. The overall polarity of a molecule depends on both bond polarities and molecular shape - symmetric molecules may be non-polar despite having polar bonds.

Intermolecular forces determine physical properties such as boiling points and solubility. London dispersion forces (temporary dipole-induced dipole) exist between all molecules. Permanent dipole-dipole interactions occur between polar molecules. Hydrogen bonding, the strongest intermolecular force, occurs when hydrogen bonded to N, O, or F interacts with a lone pair on another N, O, or F atom.

The strength of intermolecular forces depends on molecular size, shape, and polarity. These forces explain why water has anomalously high boiling point, why ice floats, and why proteins fold into specific shapes.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe the types of intermolecular forces present between molecules of water (H₂O) and explain why water has a higher boiling point than hydrogen sulfide (H₂S).',
        solution: 'Water has hydrogen bonds between molecules, as hydrogen is bonded to the highly electronegative oxygen and can interact with lone pairs on other oxygen atoms (1 mark). Water also has permanent dipole-dipole forces and London dispersion forces (1 mark). H₂S only has permanent dipole-dipole and London forces as H-S bonds do not form hydrogen bonds (sulfur is not electronegative enough). Hydrogen bonds are stronger, so more energy is needed to separate water molecules, giving a higher boiling point (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why carbon dioxide (CO₂) is a non-polar molecule despite containing polar C=O bonds, while water (H₂O) is polar.',
        solution: 'In CO₂, the two C=O bonds are polar with electron density pulled towards the oxygen atoms (1 mark). However, CO₂ is linear (180° bond angle), so the two bond dipoles are equal and opposite, cancelling out to give no overall molecular dipole (1 mark). In H₂O, the O-H bonds are polar with δ+ on hydrogen and δ- on oxygen (1 mark). Water is bent/angular (104.5° bond angle) due to two lone pairs on oxygen, so the bond dipoles do not cancel and there is a net dipole moment making the molecule polar (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Ethanol (C₂H₅OH) has a boiling point of 78°C while dimethyl ether (CH₃OCH₃), which has the same molecular formula, boils at -24°C. Explain this difference in terms of bonding and intermolecular forces.',
        solution: 'Both compounds have the same molecular mass and same types of atoms (1 mark). Ethanol contains an O-H group which can form hydrogen bonds with other ethanol molecules - hydrogen is bonded directly to the electronegative oxygen (1 mark). Dimethyl ether has no O-H bonds; both hydrogens on adjacent carbons are bonded to carbon, so it cannot form hydrogen bonds as a donor (1 mark). Dimethyl ether only has weaker dipole-dipole forces and London dispersion forces between molecules (1 mark). Hydrogen bonds are significantly stronger than dipole-dipole forces, so much more energy is required to separate ethanol molecules, resulting in the much higher boiling point (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'energetics',
      title: 'Energetics and Enthalpy | A-Level Chemistry',
      meta_description: 'Master enthalpy changes, Hess\'s Law, and bond enthalpies. Learn calorimetry calculations and energy cycles for A-Level Chemistry success.',
      introduction: `Energetics studies energy changes in chemical reactions. A-Level Chemistry requires understanding of enthalpy concepts, Hess's Law, and their applications to calculate energy changes that cannot be measured directly.

Enthalpy (H) is the heat content of a system at constant pressure. Enthalpy change (ΔH) is the heat energy transferred during a reaction. Standard enthalpy changes (ΔH°) are measured under standard conditions: 100 kPa pressure, stated temperature (usually 298 K), and all substances in their standard states.

Key standard enthalpy changes include: formation (ΔfH°) - forming one mole of compound from elements in standard states; combustion (ΔcH°) - completely burning one mole of substance in excess oxygen; neutralisation (ΔnH°) - reacting an acid with a base to form one mole of water.

Hess's Law states that the total enthalpy change for a reaction is independent of the route taken, provided initial and final conditions are the same. This allows calculation of enthalpy changes that cannot be measured directly by constructing enthalpy cycles using measurable reactions.

Bond enthalpy is the energy required to break one mole of a specific bond in gaseous molecules. Mean bond enthalpies are averages across different compounds and can be used to estimate reaction enthalpies. However, calculations using mean bond enthalpies are less accurate than those using formation or combustion data because bond strengths vary with molecular environment.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Define standard enthalpy of formation and write an equation representing the standard enthalpy of formation of ethanol (C₂H₅OH).',
        solution: 'Standard enthalpy of formation is the enthalpy change when one mole of a compound is formed from its elements in their standard states under standard conditions (1 mark). Equation: 2C(s) + 3H₂(g) + ½O₂(g) → C₂H₅OH(l) (1 mark for correct equation with state symbols and fractional coefficients if needed) (1 mark for correct stoichiometry showing formation of 1 mole).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Use the following data to calculate the enthalpy change for the reaction: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)\n\nΔfH° values (kJ mol⁻¹): CH₄(g) = -75, CO₂(g) = -394, H₂O(l) = -286',
        solution: 'Using Hess\'s Law: ΔrH° = Σ ΔfH°(products) - Σ ΔfH°(reactants) (1 mark). ΔrH° = [(-394) + 2(-286)] - [(-75) + 0] (1 mark for correct setup). ΔrH° = [-394 - 572] - [-75] = -966 + 75 (1 mark). ΔrH° = -891 kJ mol⁻¹ (1 mark for correct answer with units).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'The enthalpy of combustion of propan-1-ol (C₃H₇OH) is -2021 kJ mol⁻¹. Using the enthalpies of combustion of carbon (-394 kJ mol⁻¹) and hydrogen (-286 kJ mol⁻¹), calculate the enthalpy of formation of propan-1-ol. Construct a suitable Hess cycle to support your answer.',
        solution: 'The formation equation: 3C(s) + 4H₂(g) + ½O₂(g) → C₃H₇OH(l) (1 mark). Hess cycle: The elements and propan-1-ol can both be combusted to give 3CO₂ + 4H₂O (1 mark). Route 1: Elements → propan-1-ol → combustion products. Route 2: Elements → combustion products directly (1 mark). ΔfH° + ΔcH°(propan-1-ol) = 3×ΔcH°(C) + 4×ΔcH°(H₂) (1 mark). ΔfH° + (-2021) = 3(-394) + 4(-286) = -1182 - 1144 = -2326 (1 mark). ΔfH° = -2326 + 2021 = -305 kJ mol⁻¹ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'kinetics',
      title: 'Chemical Kinetics | A-Level Chemistry',
      meta_description: 'Learn about reaction rates, rate equations, and the Arrhenius equation. Master kinetics calculations and mechanisms for A-Level Chemistry.',
      introduction: `Chemical kinetics studies the rates of chemical reactions and the factors affecting them. A-Level Chemistry requires understanding of rate equations, orders of reaction, and how experimental data is used to determine reaction mechanisms.

The rate of reaction is the change in concentration of a reactant or product per unit time. Rate equations express rate as a function of reactant concentrations: rate = k[A]^m[B]^n, where k is the rate constant, and m and n are the orders with respect to each reactant. The overall order is the sum of individual orders.

Orders of reaction must be determined experimentally; they cannot be deduced from the stoichiometric equation. A zero-order reaction has constant rate regardless of concentration. First-order reactions have rate proportional to concentration, with a characteristic half-life that remains constant throughout. Second-order reactions have rate proportional to concentration squared.

The rate-determining step is the slowest step in a multi-step mechanism and determines the overall rate. The rate equation depends only on species involved in or before the rate-determining step, which allows mechanisms to be proposed or validated using kinetic data.

The Arrhenius equation relates the rate constant to temperature: k = Ae^(-Ea/RT), where A is the pre-exponential factor, Ea is activation energy, R is the gas constant, and T is absolute temperature. Plotting ln(k) against 1/T gives a straight line with gradient -Ea/R, allowing activation energy to be determined.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'For a first-order reaction with rate constant k = 0.025 s⁻¹, calculate the half-life and explain why this value remains constant throughout the reaction.',
        solution: 'For a first-order reaction, t½ = ln2/k = 0.693/0.025 = 27.7 s (1 mark). The half-life is constant because the rate is proportional to concentration (1 mark). When concentration halves, the rate also halves, so the time taken for concentration to halve again is the same (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'The reaction between substances A and B was studied and the following data obtained:\n\nExperiment 1: [A] = 0.1 M, [B] = 0.1 M, rate = 3.0 × 10⁻³ mol dm⁻³ s⁻¹\nExperiment 2: [A] = 0.2 M, [B] = 0.1 M, rate = 6.0 × 10⁻³ mol dm⁻³ s⁻¹\nExperiment 3: [A] = 0.1 M, [B] = 0.2 M, rate = 1.2 × 10⁻² mol dm⁻³ s⁻¹\n\nDetermine the rate equation and calculate the rate constant k.',
        solution: 'Comparing experiments 1 and 2: [A] doubles while [B] constant, rate doubles. Therefore first order with respect to A (1 mark). Comparing experiments 1 and 3: [B] doubles while [A] constant, rate quadruples (×4). Therefore second order with respect to B (1 mark). Rate equation: rate = k[A][B]² (1 mark). Using experiment 1: 3.0 × 10⁻³ = k × 0.1 × (0.1)² (1 mark). k = 3.0 × 10⁻³ / (0.1 × 0.01) = 3.0 mol⁻² dm⁶ s⁻¹ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'The rate constant for a reaction was measured at different temperatures:\n\nAt 300 K: k = 2.5 × 10⁻⁴ s⁻¹\nAt 350 K: k = 4.0 × 10⁻² s⁻¹\n\nUsing the Arrhenius equation, calculate the activation energy for this reaction. (R = 8.31 J K⁻¹ mol⁻¹)',
        solution: 'Using ln(k) = ln(A) - Ea/RT, we can write: ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂) (1 mark). ln(4.0 × 10⁻²/2.5 × 10⁻⁴) = ln(160) = 5.08 (1 mark). 1/T₁ - 1/T₂ = 1/300 - 1/350 = (350-300)/(300×350) = 50/105000 = 4.76 × 10⁻⁴ K⁻¹ (1 mark). 5.08 = (Ea/8.31) × 4.76 × 10⁻⁴ (1 mark). Ea = 5.08 × 8.31 / (4.76 × 10⁻⁴) (1 mark). Ea = 88700 J mol⁻¹ = 88.7 kJ mol⁻¹ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'equilibria',
      title: 'Chemical Equilibria | A-Level Chemistry',
      meta_description: 'Master equilibrium constants Kc and Kp, Le Chatelier\'s principle, and equilibrium calculations for A-Level Chemistry examination success.',
      introduction: `Chemical equilibria occur when the rates of forward and reverse reactions are equal. A-Level Chemistry requires quantitative understanding of equilibrium through equilibrium constants and their applications to predict how systems respond to changes.

The equilibrium constant Kc expresses the ratio of product concentrations to reactant concentrations at equilibrium, each raised to the power of their stoichiometric coefficients. For aA + bB ⇌ cC + dD: Kc = [C]^c[D]^d / [A]^a[B]^b. The value of Kc depends only on temperature, not on initial concentrations or catalysts.

For gaseous equilibria, Kp uses partial pressures instead of concentrations: Kp = p(C)^c × p(D)^d / p(A)^a × p(B)^b. Partial pressure is related to mole fraction: pA = xA × Ptotal. The relationship between Kp and Kc involves the change in moles of gas: Kp = Kc(RT)^Δn.

Le Chatelier's principle predicts that a system at equilibrium will respond to oppose any change. Temperature changes affect both position and value of equilibrium constant - only increasing temperature for an endothermic reaction increases K. Pressure and concentration changes affect position but not K.

The magnitude of K indicates equilibrium position: K >> 1 means products predominate; K << 1 means reactants predominate. Changes in K with temperature can be used to determine whether reactions are exothermic or endothermic.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Write the expression for Kc for the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) and state how the value of Kc would change if the temperature increased. The forward reaction is exothermic.',
        solution: 'Kc = [NH₃]²/([N₂][H₂]³) (1 mark). If temperature increases, the equilibrium shifts to oppose this by favouring the endothermic/reverse direction (1 mark). This produces more reactants and less products, so Kc decreases (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'At 500 K, 1.0 mol of PCl₅ is placed in a 1.0 dm³ container and allowed to reach equilibrium:\nPCl₅(g) ⇌ PCl₃(g) + Cl₂(g)\n\nAt equilibrium, 0.6 mol of PCl₅ remains. Calculate Kc and state its units.',
        solution: 'Moles of PCl₅ reacted = 1.0 - 0.6 = 0.4 mol (1 mark). From stoichiometry: moles of PCl₃ = moles of Cl₂ = 0.4 mol (1 mark). Equilibrium concentrations: [PCl₅] = 0.6 M, [PCl₃] = 0.4 M, [Cl₂] = 0.4 M (1 mark). Kc = [PCl₃][Cl₂]/[PCl₅] = (0.4)(0.4)/(0.6) = 0.27 (1 mark). Units: (mol dm⁻³)(mol dm⁻³)/(mol dm⁻³) = mol dm⁻³ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'For the equilibrium: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Kp = 1.8 × 10⁶ kPa⁻¹ at 600 K.\n\nA mixture at equilibrium has a total pressure of 500 kPa and contains SO₃ with a mole fraction of 0.80. Calculate the partial pressures of all species and verify that these values are consistent with the given Kp.',
        solution: 'Partial pressure of SO₃ = 0.80 × 500 = 400 kPa (1 mark). Let mole fraction of SO₂ = x, then mole fraction of O₂ = (0.20 - x) since total = 1 (1 mark). From stoichiometry: for every 2 mol SO₂ consumed, 1 mol O₂ consumed and 2 mol SO₃ formed. If y = mole fraction SO₂, then O₂ = y/2 (since ratio 2:1). So: x + x/2 = 0.20, giving 1.5x = 0.20, x = 0.133 (1 mark). p(SO₂) = 0.133 × 500 = 66.7 kPa, p(O₂) = 0.067 × 500 = 33.3 kPa (1 mark). Check: Kp = (p(SO₃))²/((p(SO₂))² × p(O₂)) = (400)²/((66.7)² × 33.3) (1 mark). Kp = 160000/148000 = 1.08 × 10⁶ ≈ 1.8 × 10⁶ kPa⁻¹ (consistent within experimental error) (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'redox',
      title: 'Redox Reactions | A-Level Chemistry',
      meta_description: 'Master oxidation states, redox equations, and electron transfer. Learn to balance redox equations using half-equations for A-Level Chemistry.',
      introduction: `Redox reactions involve the transfer of electrons between species. A-Level Chemistry requires proficiency in assigning oxidation states, identifying oxidation and reduction, and balancing complex redox equations using half-equations.

Oxidation is the loss of electrons, increase in oxidation state, or gain of oxygen. Reduction is the gain of electrons, decrease in oxidation state, or loss of oxygen. The mnemonic OILRIG (Oxidation Is Loss, Reduction Is Gain) helps remember electron transfer. In any redox reaction, one species is oxidised while another is reduced.

Oxidation states are assigned using specific rules: elements have oxidation state 0; monatomic ions have oxidation state equal to their charge; in compounds, oxygen is usually -2 (except in peroxides), hydrogen is usually +1 (except in metal hydrides); and oxidation states sum to zero for neutral compounds or to the charge for ions.

Half-equations separate oxidation and reduction processes. To balance redox equations: write separate half-equations, balance atoms other than H and O, balance oxygen using water, balance hydrogen using H⁺, balance charges using electrons, then combine half-equations ensuring electrons cancel.

Disproportionation reactions involve a single element being simultaneously oxidised and reduced. For example, chlorine in water: Cl₂ + H₂O → HClO + HCl, where chlorine (0) becomes +1 in HClO and -1 in HCl.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Determine the oxidation state of manganese in KMnO₄ and state whether manganese is oxidised or reduced when KMnO₄ reacts to form Mn²⁺ ions.',
        solution: 'In KMnO₄: K is +1, O is -2, so Mn + 1 + 4(-2) = 0, giving Mn = +7 (1 mark). Mn goes from +7 in KMnO₄ to +2 in Mn²⁺ (1 mark). This is a decrease in oxidation state, so manganese is reduced (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Balance the following redox equation using half-equations:\nFe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺ (in acidic solution)',
        solution: 'Oxidation half-equation: Fe²⁺ → Fe³⁺ + e⁻ (1 mark). Reduction half-equation: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (1 mark). Multiply oxidation half-equation by 5 to balance electrons: 5Fe²⁺ → 5Fe³⁺ + 5e⁻ (1 mark). Combined equation: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'When chlorine gas is bubbled through cold dilute sodium hydroxide solution, a disproportionation reaction occurs producing sodium chloride and sodium chlorate(I). Write the balanced equation for this reaction, identify the oxidation state changes, and explain why this is a disproportionation reaction.',
        solution: 'Equation: Cl₂ + 2NaOH → NaCl + NaClO + H₂O (1 mark). In Cl₂, chlorine has oxidation state 0 (1 mark). In NaCl, chlorine has oxidation state -1 (reduced) (1 mark). In NaClO, chlorine has oxidation state +1 (oxidised) (1 mark). This is disproportionation because the same element (chlorine) is simultaneously oxidised (0 to +1) and reduced (0 to -1) in the same reaction (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'thermodynamics',
      title: 'Thermodynamics | A-Level Chemistry',
      meta_description: 'Learn entropy, Gibbs free energy, and spontaneity of reactions. Master thermodynamics calculations for A-Level Chemistry examination success.',
      introduction: `Thermodynamics extends beyond enthalpy to explain why some reactions occur spontaneously while others do not. A-Level Chemistry requires understanding of entropy, Gibbs free energy, and their roles in determining reaction feasibility.

Entropy (S) is a measure of the disorder or randomness of a system. The Second Law of Thermodynamics states that the total entropy of the universe increases in any spontaneous process. Systems naturally tend towards greater disorder: solids have lowest entropy, gases have highest; entropy increases with temperature and number of particles.

Standard entropy change (ΔS°) can be calculated from standard molar entropies: ΔS° = Σ S°(products) - Σ S°(reactants). Reactions that produce more gas molecules, dissolve solids, or increase temperature have positive entropy changes.

Gibbs free energy (G) combines enthalpy and entropy: ΔG = ΔH - TΔS. For a reaction to be thermodynamically feasible (spontaneous), ΔG must be negative. The temperature affects which term dominates: exothermic reactions with positive ΔS are always spontaneous; endothermic reactions with negative ΔS are never spontaneous; others depend on temperature.

The relationship ΔG° = -RT ln K connects free energy to equilibrium constants. A more negative ΔG° corresponds to a larger K, indicating products are more favoured at equilibrium. At equilibrium itself, ΔG = 0.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'State what is meant by entropy and predict, with explanation, how the entropy of a system changes when ice melts to form liquid water.',
        solution: 'Entropy is a measure of the disorder/randomness of a system (1 mark). When ice melts, entropy increases (1 mark). This is because molecules in liquid water are more disordered/have more freedom of movement than the fixed positions in solid ice crystal lattice (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 5,
        content: 'For the reaction: CaCO₃(s) → CaO(s) + CO₂(g)\nΔH° = +178 kJ mol⁻¹ and ΔS° = +165 J K⁻¹ mol⁻¹\n\nCalculate ΔG° at 298 K and determine the minimum temperature at which this reaction becomes thermodynamically feasible.',
        solution: 'ΔG° = ΔH° - TΔS° (1 mark). Convert units: ΔS° = 165 J K⁻¹ mol⁻¹ = 0.165 kJ K⁻¹ mol⁻¹ (1 mark). At 298 K: ΔG° = 178 - (298 × 0.165) = 178 - 49.2 = +128.8 kJ mol⁻¹ (1 mark). Reaction becomes feasible when ΔG° = 0: 0 = 178 - T(0.165), T = 178/0.165 (1 mark). Minimum temperature = 1079 K (or 806°C) (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'The standard Gibbs free energy change for a reaction at 298 K is -85.7 kJ mol⁻¹. Calculate the equilibrium constant K for this reaction at 298 K. Comment on the position of equilibrium. (R = 8.31 J K⁻¹ mol⁻¹)',
        solution: 'Using ΔG° = -RT ln K (1 mark). -85700 = -8.31 × 298 × ln K (1 mark). ln K = 85700/(8.31 × 298) = 85700/2476 = 34.6 (1 mark). K = e^34.6 (1 mark). K = 1.1 × 10¹⁵ (1 mark). This very large value of K indicates that equilibrium lies far to the right/products are heavily favoured/reaction goes essentially to completion (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'electrochemistry',
      title: 'Electrochemistry | A-Level Chemistry',
      meta_description: 'Master electrode potentials, electrochemical cells, and their applications. Learn to calculate EMF and predict reactions for A-Level Chemistry.',
      introduction: `Electrochemistry studies the relationship between electrical energy and chemical reactions. A-Level Chemistry requires understanding of electrode potentials, electrochemical cells, and how to use standard electrode potentials to predict reaction feasibility.

Half-cells consist of an element in contact with its ions. When two half-cells are connected, electrons flow from the more reactive metal to the less reactive, creating an electrochemical cell. The electromotive force (EMF) is the maximum potential difference between the electrodes.

Standard electrode potential (E°) is measured against the standard hydrogen electrode (SHE), assigned E° = 0.00 V by convention. Conditions are 298 K, 100 kPa for gases, and 1.0 mol dm⁻³ solutions. More positive E° indicates greater tendency to be reduced; more negative E° indicates greater tendency to be oxidised.

Cell EMF is calculated as E°cell = E°(reduction) - E°(oxidation), or equivalently, E°(cathode) - E°(anode). The reaction is thermodynamically feasible if E°cell is positive. A larger E°cell indicates a more favourable reaction.

The relationship ΔG° = -nFE° connects electrochemistry to thermodynamics, where n is the number of electrons transferred and F is the Faraday constant (96500 C mol⁻¹). This allows EMF measurements to determine free energy changes and equilibrium constants.

Electrochemical series applications include predicting corrosion, designing batteries, and understanding biological electron transport chains.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A cell is made from zinc (E° = -0.76 V) and copper (E° = +0.34 V) half-cells. Calculate the EMF of this cell and identify which electrode is the anode.',
        solution: 'E°cell = E°(cathode) - E°(anode) = E°(more positive) - E°(more negative) (1 mark). E°cell = +0.34 - (-0.76) = +1.10 V (1 mark). Zinc is the anode because it has the more negative electrode potential, so it is oxidised (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Using standard electrode potentials, predict whether the following reaction is feasible under standard conditions:\n\nFe³⁺(aq) + I⁻(aq) → Fe²⁺(aq) + ½I₂(s)\n\nE° values: Fe³⁺/Fe²⁺ = +0.77 V; I₂/I⁻ = +0.54 V',
        solution: 'Fe³⁺ is reduced to Fe²⁺ (E° = +0.77 V) (1 mark). I⁻ is oxidised to I₂ (oxidation, so use -E° = -0.54 V) (1 mark). E°cell = E°(reduction) - E°(oxidation) = +0.77 - (+0.54) = +0.23 V (1 mark). Since E°cell is positive, the reaction is thermodynamically feasible under standard conditions (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'Calculate the standard Gibbs free energy change and equilibrium constant at 298 K for the cell reaction:\n\nZn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\n\nE° values: Zn²⁺/Zn = -0.76 V; Cu²⁺/Cu = +0.34 V\nF = 96500 C mol⁻¹, R = 8.31 J K⁻¹ mol⁻¹',
        solution: 'E°cell = +0.34 - (-0.76) = +1.10 V (1 mark). Number of electrons transferred n = 2 (1 mark). ΔG° = -nFE° = -2 × 96500 × 1.10 (1 mark). ΔG° = -212300 J mol⁻¹ = -212.3 kJ mol⁻¹ (1 mark). Using ΔG° = -RT ln K: -212300 = -8.31 × 298 × ln K. ln K = 212300/(8.31 × 298) = 85.7 (1 mark). K = e^85.7 = 1.6 × 10³⁷ (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'acids-bases',
      title: 'Acids and Bases | A-Level Chemistry',
      meta_description: 'Master pH calculations, Ka values, and acid-base equilibria. Learn about strong and weak acids for A-Level Chemistry examination success.',
      introduction: `A-Level Chemistry extends acid-base theory beyond simple neutralisation to include quantitative treatment of equilibria in aqueous solutions. Understanding pH, Ka, and buffer systems is essential for predicting chemical behaviour in solution.

The Brønsted-Lowry definition describes acids as proton donors and bases as proton acceptors. Strong acids (like HCl, HNO₃, H₂SO₄) fully dissociate in water; weak acids (like CH₃COOH, HF) only partially dissociate, establishing an equilibrium.

For weak acids, the acid dissociation constant Ka = [H⁺][A⁻]/[HA] quantifies the extent of dissociation. pKa = -log₁₀Ka provides a logarithmic scale. Lower pKa indicates stronger acid. The approximation [H⁺] ≈ √(Ka × c) applies when dissociation is small (typically when Ka/c < 0.01).

pH = -log₁₀[H⁺] measures acidity. For strong acids, [H⁺] equals initial acid concentration. For weak acids, [H⁺] is calculated from Ka and concentration. Water itself dissociates: Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K, giving pH 7 for pure water.

Titration curves show pH changes during neutralisation. Strong acid-strong base gives pH 7 at equivalence; weak acid-strong base gives pH > 7; strong acid-weak base gives pH < 7. The shape of the curve and choice of indicator depend on the acids and bases involved.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Calculate the pH of a 0.15 mol dm⁻³ solution of hydrochloric acid and explain why this calculation is simpler than for ethanoic acid of the same concentration.',
        solution: 'HCl is a strong acid so fully dissociates: [H⁺] = 0.15 mol dm⁻³ (1 mark). pH = -log₁₀(0.15) = 0.82 (1 mark). This is simpler than for ethanoic acid because ethanoic acid is weak and only partially dissociates, so [H⁺] must be calculated using Ka and equilibrium expressions (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the pH of a 0.10 mol dm⁻³ solution of ethanoic acid (Ka = 1.7 × 10⁻⁵ mol dm⁻³).',
        solution: 'For a weak acid: Ka = [H⁺][A⁻]/[HA] ≈ [H⁺]²/c (assuming [H⁺] << c) (1 mark). [H⁺]² = Ka × c = 1.7 × 10⁻⁵ × 0.10 = 1.7 × 10⁻⁶ (1 mark). [H⁺] = √(1.7 × 10⁻⁶) = 1.3 × 10⁻³ mol dm⁻³ (1 mark). pH = -log₁₀(1.3 × 10⁻³) = 2.89 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A 25.0 cm³ sample of 0.100 mol dm⁻³ ethanoic acid (Ka = 1.7 × 10⁻⁵ mol dm⁻³) is titrated with 0.100 mol dm⁻³ sodium hydroxide. Calculate the pH at the equivalence point and explain why an indicator with a suitable pH range must be chosen.',
        solution: 'At equivalence point, moles NaOH = moles ethanoic acid = 0.025 × 0.100 = 0.0025 mol (1 mark). Total volume = 50.0 cm³. Solution contains 0.0025 mol sodium ethanoate in 50 cm³, giving [CH₃COO⁻] = 0.050 mol dm⁻³ (1 mark). Ethanoate ion is a weak base: Kb = Kw/Ka = (1.0 × 10⁻¹⁴)/(1.7 × 10⁻⁵) = 5.9 × 10⁻¹⁰ (1 mark). [OH⁻]² = Kb × c = 5.9 × 10⁻¹⁰ × 0.050 = 2.95 × 10⁻¹¹, [OH⁻] = 5.4 × 10⁻⁶ mol dm⁻³ (1 mark). pOH = 5.3, so pH = 14 - 5.3 = 8.7 (1 mark). An indicator must be chosen with colour change range around pH 8.7 (e.g., phenolphthalein) rather than pH 7, as the equivalence point is basic due to hydrolysis of the conjugate base (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'physical-chemistry',
      subtopic_slug: 'buffer-solutions',
      title: 'Buffer Solutions | A-Level Chemistry',
      meta_description: 'Learn about buffer solutions and how they resist pH change. Master buffer calculations and applications for A-Level Chemistry success.',
      introduction: `Buffer solutions resist changes in pH when small amounts of acid or base are added. Understanding buffers is essential for A-Level Chemistry, as they have important applications in biological systems, industrial processes, and analytical chemistry.

An acidic buffer consists of a weak acid and its conjugate base (usually as a salt). For example, ethanoic acid and sodium ethanoate. The weak acid provides a reservoir of H⁺ ions; the conjugate base provides a reservoir to accept H⁺ ions. When acid is added, the conjugate base reacts with it; when base is added, the weak acid neutralises it.

The Henderson-Hasselbalch equation relates buffer pH to pKa and concentrations: pH = pKa + log₁₀([A⁻]/[HA]). When [A⁻] = [HA], pH = pKa. Buffers work best when the ratio [A⁻]/[HA] is between 0.1 and 10, giving a buffering range of approximately pKa ± 1.

Buffer capacity measures how much acid or base can be added before significant pH change occurs. It depends on the total concentration of buffer components - more concentrated buffers have greater capacity. Buffer capacity is maximum when [A⁻] = [HA].

Biological systems rely on buffers extensively. Blood is buffered at pH 7.4 primarily by the carbonic acid-hydrogen carbonate system. Enzymes and proteins function only within narrow pH ranges, making buffering essential for life.

Alkaline buffers can be made from a weak base and its conjugate acid, such as ammonia and ammonium chloride.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'A buffer solution contains ethanoic acid and sodium ethanoate. Explain how this buffer resists pH change when a small amount of hydrochloric acid is added.',
        solution: 'The ethanoate ions (conjugate base) from sodium ethanoate react with the added H⁺ ions from HCl (1 mark). Reaction: CH₃COO⁻ + H⁺ → CH₃COOH (1 mark). This removes the added H⁺ ions before they can significantly change the pH, converting them to weak acid molecules (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Calculate the pH of a buffer solution containing 0.20 mol dm⁻³ ethanoic acid and 0.30 mol dm⁻³ sodium ethanoate. Ka for ethanoic acid = 1.7 × 10⁻⁵ mol dm⁻³.',
        solution: 'Using Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) (1 mark). pKa = -log(1.7 × 10⁻⁵) = 4.77 (1 mark). pH = 4.77 + log(0.30/0.20) = 4.77 + log(1.5) (1 mark). pH = 4.77 + 0.18 = 4.95 (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'A buffer solution is prepared by mixing 50 cm³ of 0.40 mol dm⁻³ ethanoic acid with 30 cm³ of 0.50 mol dm⁻³ sodium hydroxide. Calculate the pH of the resulting buffer. Ka = 1.7 × 10⁻⁵ mol dm⁻³.',
        solution: 'Moles of ethanoic acid = 0.050 × 0.40 = 0.020 mol (1 mark). Moles of NaOH = 0.030 × 0.50 = 0.015 mol (1 mark). NaOH reacts with ethanoic acid: CH₃COOH + NaOH → CH₃COONa + H₂O. After reaction: moles CH₃COOH remaining = 0.020 - 0.015 = 0.005 mol. Moles CH₃COO⁻ formed = 0.015 mol (1 mark). Total volume = 80 cm³ but concentrations ratio is what matters for pH (1 mark). pH = pKa + log([A⁻]/[HA]) = 4.77 + log(0.015/0.005) = 4.77 + log(3) (1 mark). pH = 4.77 + 0.48 = 5.25 (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelChemistryPhysical;
