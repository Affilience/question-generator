import { SubtopicData } from '../bulk-seo-insert';

export const alevelChemistryInorganic: SubtopicData[] = [
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'inorganic-chemistry',
      subtopic_slug: 'periodicity',
      title: 'Periodicity | A-Level Chemistry',
      meta_description: 'Master periodic trends in atomic radius, ionisation energy, and electronegativity. Understand Period 3 oxides and chlorides for A-Level Chemistry.',
      introduction: `Periodicity describes the recurring patterns in element properties across the periodic table. A-Level Chemistry requires understanding of how atomic structure determines these trends and how they manifest in the physical and chemical properties of elements and their compounds.

Atomic radius decreases across a period due to increasing nuclear charge with the same number of electron shells. The increased nuclear attraction pulls electrons closer despite increasing electron-electron repulsion. Down a group, atomic radius increases as additional electron shells are added, increasing the distance from nucleus to outer electrons.

First ionisation energy generally increases across a period as nuclear charge increases, with minor decreases at Groups 3 and 6 due to electron configuration effects (s to p transition and pairing in p orbitals respectively). Down a group, ionisation energy decreases due to increased shielding and greater distance from the nucleus.

Electronegativity follows similar trends, increasing across periods and decreasing down groups. Fluorine is the most electronegative element, reflecting its small size and high nuclear charge.

Period 3 elements show characteristic trends in their oxides and chlorides. Oxides transition from ionic basic (Na₂O, MgO) through amphoteric (Al₂O₃) to covalent acidic (SiO₂, P₄O₁₀, SO₃, Cl₂O₇). Chlorides show similar transitions, with ionic chlorides (NaCl, MgCl₂) giving neutral solutions and covalent chlorides (SiCl₄, PCl₅) hydrolyzing to form acidic solutions.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Explain why atomic radius decreases across Period 3 from sodium to chlorine.',
        solution: 'Across Period 3, the nuclear charge/number of protons increases (1 mark). The electrons are added to the same shell (third shell), so shielding from inner electrons remains approximately constant (1 mark). The increased nuclear charge attracts the outer electrons more strongly, pulling them closer to the nucleus and reducing atomic radius (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why the first ionisation energy of sulfur is lower than that of phosphorus, even though sulfur has a higher nuclear charge.',
        solution: 'Electron configuration of P: 1s² 2s² 2p⁶ 3s² 3p³. Electron configuration of S: 1s² 2s² 2p⁶ 3s² 3p⁴ (1 mark). In phosphorus, the three 3p electrons occupy separate orbitals (Hund\'s rule) with parallel spins (1 mark). In sulfur, the fourth 3p electron must pair with another electron in the same orbital (1 mark). This electron-electron repulsion in the paired orbital makes it easier to remove an electron from sulfur, resulting in lower ionisation energy (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe and explain the trend in the reactions of Period 3 oxides (Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₃) with water, including any equations.',
        solution: 'Na₂O reacts vigorously with water forming alkaline solution: Na₂O + H₂O → 2NaOH (ionic basic oxide) (1 mark). MgO reacts slowly with water forming weakly alkaline solution: MgO + H₂O → Mg(OH)₂ (ionic basic oxide) (1 mark). Al₂O₃ does not react with water (amphoteric, insoluble) (1 mark). SiO₂ does not react with water (covalent, giant structure, insoluble). P₄O₁₀ and SO₃ react vigorously with water forming acidic solutions: P₄O₁₀ + 6H₂O → 4H₃PO₄, SO₃ + H₂O → H₂SO₄ (covalent acidic oxides) (1 mark). The trend occurs because bonding changes from ionic (metal oxides) to covalent (non-metal oxides), with ionic oxides being basic and covalent oxides being acidic (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'inorganic-chemistry',
      subtopic_slug: 'group-2',
      title: 'Group 2 Elements | A-Level Chemistry',
      meta_description: 'Learn about alkaline earth metals including their reactions with water, oxygen, and acids. Master Group 2 trends for A-Level Chemistry examination success.',
      introduction: `Group 2 elements, the alkaline earth metals, show clear trends in their physical and chemical properties. Understanding these trends and their explanations is essential for A-Level Chemistry, demonstrating how atomic structure determines chemical behaviour.

Group 2 elements (Be, Mg, Ca, Sr, Ba) have two electrons in their outermost s orbital, giving them a +2 oxidation state in compounds. Their atomic radius increases down the group as additional electron shells are added, while ionisation energies decrease due to increased shielding and distance from the nucleus.

Reactivity with water increases down the group. Magnesium reacts very slowly with cold water but vigorously with steam. Calcium reacts steadily with cold water, while strontium and barium react increasingly vigorously. The reactions produce metal hydroxides and hydrogen: M + 2H₂O → M(OH)₂ + H₂.

Solubility of hydroxides increases down the group: Mg(OH)₂ is sparingly soluble (milk of magnesia), while Ba(OH)₂ is relatively soluble and strongly alkaline. Conversely, sulfate solubility decreases: MgSO₄ is soluble, CaSO₄ is slightly soluble, while BaSO₄ is highly insoluble (used in barium meals for X-ray imaging).

Thermal stability of carbonates and nitrates increases down the group. Higher temperatures are needed to decompose BaCO₃ than MgCO₃. This relates to the polarising power of the cation - smaller, more highly charged cations destabilise the anion more effectively.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe the trend in reactivity with water for Group 2 elements from magnesium to barium, and explain this trend.',
        solution: 'Reactivity with water increases down Group 2 from magnesium to barium (1 mark). Down the group, atomic radius increases and ionisation energy decreases (1 mark). This makes it easier to lose the two outer electrons, so the elements are more readily oxidised and react more vigorously with water (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe and explain the trend in solubility of Group 2 sulfates from MgSO₄ to BaSO₄.',
        solution: 'Solubility decreases down the group: MgSO₄ is soluble, CaSO₄ is slightly soluble, and BaSO₄ is virtually insoluble (1 mark). For a compound to dissolve, the hydration enthalpy must compensate for the lattice enthalpy (1 mark). Down the group, both lattice enthalpy and hydration enthalpy decrease as ionic radius increases (1 mark). For sulfates, the lattice enthalpy decreases more slowly than hydration enthalpy, making it increasingly unfavourable for the larger sulfates to dissolve (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why the thermal stability of Group 2 carbonates increases from MgCO₃ to BaCO₃, in terms of polarisation of the carbonate ion.',
        solution: 'All Group 2 cations have a +2 charge (1 mark). Mg²⁺ has the smallest ionic radius, giving it the highest charge density/polarising power (1 mark). The small, highly charged Mg²⁺ ion distorts/polarises the electron cloud of the carbonate ion more than larger cations (1 mark). This polarisation weakens the C-O bonds in the carbonate ion, making it easier to decompose into metal oxide and CO₂ (1 mark). Larger cations like Ba²⁺ have lower charge density and polarise the carbonate less, so higher temperatures are needed for decomposition, making BaCO₃ more thermally stable (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'inorganic-chemistry',
      subtopic_slug: 'group-7',
      title: 'Group 7 Elements | A-Level Chemistry',
      meta_description: 'Master halogen chemistry including displacement reactions, disproportionation, and halide tests. Essential Group 7 content for A-Level Chemistry.',
      introduction: `The halogens (Group 7 elements) demonstrate clear trends in physical and chemical properties. A-Level Chemistry requires understanding of their reactions, compounds, and the tests used to identify halide ions.

Physical properties show clear trends: melting and boiling points increase down the group due to increasing London dispersion forces with larger electron clouds. F₂ and Cl₂ are gases, Br₂ is a liquid, and I₂ is a solid at room temperature.

Electronegativity and oxidising power decrease down the group. Fluorine is the strongest oxidising agent; chlorine can oxidise bromide and iodide ions; bromine can only oxidise iodide ions. This explains displacement reactions: Cl₂ + 2KBr → 2KCl + Br₂.

Chlorine undergoes disproportionation in alkali. In cold dilute alkali: Cl₂ + 2NaOH → NaCl + NaClO + H₂O (chlorine: 0 → -1 and +1). In hot concentrated alkali: 3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O (chlorine: 0 → -1 and +5).

Halide ions are tested using silver nitrate solution followed by dilute then concentrated ammonia. Silver chloride (white precipitate) dissolves in dilute ammonia. Silver bromide (cream precipitate) dissolves only in concentrated ammonia. Silver iodide (yellow precipitate) is insoluble in both.

The reducing power of halide ions increases down the group. HCl shows no reducing behaviour with H₂SO₄, but HBr reduces it to SO₂, and HI reduces it further to H₂S.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe what you would observe when chlorine water is added to aqueous potassium bromide, and write the ionic equation for the reaction.',
        solution: 'The colourless/pale green chlorine water turns the solution orange/brown (1 mark). This is due to bromine being produced/released (1 mark). Ionic equation: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the test to distinguish between aqueous solutions of sodium chloride, sodium bromide, and sodium iodide using silver nitrate solution and ammonia.',
        solution: 'Add dilute nitric acid then silver nitrate solution to each. NaCl gives white precipitate (AgCl), NaBr gives cream precipitate (AgBr), NaI gives yellow precipitate (AgI) (1 mark for all three colours). Add dilute ammonia: AgCl dissolves (1 mark). Add concentrated ammonia to those remaining: AgBr dissolves but AgI remains undissolved (1 mark). This distinguishes all three halides based on solubility in ammonia (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'When concentrated sulfuric acid is added to solid sodium iodide, several reactions occur. Describe and explain the observations, including all the products formed and the role of the iodide ion.',
        solution: 'Initial reaction produces hydrogen iodide gas (steamy fumes): NaI + H₂SO₄ → NaHSO₄ + HI (1 mark). Iodide ion is a strong reducing agent (stronger than bromide or chloride) and reduces the sulfuric acid (1 mark). First reduction produces sulfur dioxide: 2HI + H₂SO₄ → I₂ + SO₂ + 2H₂O - purple/violet vapour of iodine and colourless pungent SO₂ observed (1 mark). Further reduction produces sulfur (yellow solid): 6HI + H₂SO₄ → 3I₂ + S + 4H₂O (1 mark). Ultimate reduction produces hydrogen sulfide (rotten egg smell): 8HI + H₂SO₄ → 4I₂ + H₂S + 4H₂O. The iodide acts as a reducing agent, being oxidised to iodine while reducing sulfur from +6 to +4, 0, and -2 (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'inorganic-chemistry',
      subtopic_slug: 'transition-metals',
      title: 'Transition Metals | A-Level Chemistry',
      meta_description: 'Learn about d-block chemistry including variable oxidation states, complex ions, and catalysis. Essential transition metal content for A-Level Chemistry.',
      introduction: `Transition metals have unique properties arising from their partially filled d orbitals. A-Level Chemistry requires understanding of their characteristic features: variable oxidation states, coloured compounds, complex ion formation, and catalytic activity.

A transition metal is defined as an element that forms at least one ion with a partially filled d subshell. This excludes scandium (Sc³⁺ has empty 3d) and zinc (Zn²⁺ has full 3d). The 3d and 4s orbitals are close in energy, allowing variable oxidation states as different numbers of electrons can be lost.

Complex ions consist of a central metal ion surrounded by ligands (species that donate electron pairs). Common ligands include H₂O, NH₃, Cl⁻, and CN⁻. The coordination number is the total number of coordinate bonds to the central ion. Complexes can be octahedral (6 ligands), tetrahedral, or square planar (4 ligands).

Colours arise from d-d transitions. When light is absorbed, an electron is promoted from a lower to a higher d orbital. The energy gap between d orbitals depends on the ligands present, so different ligands produce different colours. The spectrochemical series ranks ligands by the size of this splitting.

Transition metals and their compounds are effective catalysts due to variable oxidation states (allowing electron transfer) and the ability to form complexes with reactants. Heterogeneous catalysts (like iron in the Haber process) provide surfaces for reactions; homogeneous catalysts (like Mn²⁺ in the reaction between C₂O₄²⁻ and MnO₄⁻) operate in the same phase as reactants.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Define the term transition metal and explain why zinc is not classified as a transition metal.',
        solution: 'A transition metal is a d-block element that forms at least one ion with a partially filled d subshell (1 mark). Zinc has electron configuration [Ar] 3d¹⁰ 4s² (1 mark). When zinc forms Zn²⁺, it loses its 4s electrons to give [Ar] 3d¹⁰, which is a full d subshell, not partial (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why transition metal complexes are often coloured, while compounds of Group 1 metals are typically white/colourless.',
        solution: 'Transition metal ions have partially filled d orbitals (1 mark). In a complex, ligands cause the d orbitals to split into different energy levels (1 mark). Electrons can absorb visible light and be promoted from lower to higher d orbitals (d-d transitions). The remaining wavelengths are transmitted/reflected, giving colour (1 mark). Group 1 metal ions have empty d orbitals (or no accessible d orbitals) so d-d transitions cannot occur, and they appear colourless/white (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 6,
        content: 'The complex [Cu(H₂O)₆]²⁺ is pale blue, while [Cu(NH₃)₄(H₂O)₂]²⁺ is deep blue. Explain the colour change in terms of d orbital splitting, and describe what would happen if excess concentrated hydrochloric acid is added to [Cu(H₂O)₆]²⁺.',
        solution: 'In [Cu(H₂O)₆]²⁺, water ligands cause splitting of d orbitals. Light is absorbed to promote electrons between d orbitals (d-d transition) (1 mark). Ammonia is a stronger field ligand than water (higher in spectrochemical series), causing greater d orbital splitting (1 mark). Greater splitting means higher energy/shorter wavelength light is absorbed, changing the wavelengths transmitted and thus the observed colour (1 mark). When excess HCl is added, chloride ions replace water ligands forming [CuCl₄]²⁻ which is yellow/green (1 mark). This is a ligand substitution reaction: [Cu(H₂O)₆]²⁺ + 4Cl⁻ → [CuCl₄]²⁻ + 6H₂O (1 mark). The colour change occurs because Cl⁻ causes less d orbital splitting than H₂O, so lower energy light is absorbed and different wavelengths are transmitted (1 mark).',
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'a-level',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'inorganic-chemistry',
      subtopic_slug: 'reactions-of-ions',
      title: 'Reactions of Ions in Solution | A-Level Chemistry',
      meta_description: 'Master qualitative analysis including tests for cations and anions. Learn precipitation and complex formation reactions for A-Level Chemistry.',
      introduction: `Qualitative analysis involves identifying ions in solution through characteristic reactions. A-Level Chemistry requires knowledge of tests for common cations and anions, and understanding of the chemistry underlying these tests.

Cation tests often involve adding sodium hydroxide solution. Some metal hydroxides precipitate and may dissolve in excess NaOH if amphoteric. Adding ammonia solution produces hydroxide precipitates that may dissolve in excess ammonia if complex ions form with NH₃ ligands.

With NaOH: Fe²⁺ gives green precipitate (Fe(OH)₂), Fe³⁺ gives brown precipitate (Fe(OH)₃), Cu²⁺ gives pale blue precipitate (Cu(OH)₂), Al³⁺ gives white precipitate dissolving in excess (Al(OH)₃ then [Al(OH)₄]⁻).

With ammonia: Cu²⁺ gives pale blue precipitate dissolving in excess to form deep blue solution ([Cu(NH₃)₄(H₂O)₂]²⁺). Fe²⁺ and Fe³⁺ give precipitates that do not dissolve in excess (no stable ammonia complexes).

Anion tests vary by species. Carbonates effervesce with acid, producing CO₂ (turns limewater milky). Sulfates give white precipitate with acidified barium chloride (BaSO₄). Halides are tested with silver nitrate and ammonia as described for Group 7.

Flame tests identify some metal ions: sodium (yellow), potassium (lilac), calcium (orange-red), copper (blue-green). These occur because heat energy promotes electrons to higher energy levels, and characteristic wavelengths are emitted when electrons return to ground state.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how you would test for the presence of sulfate ions in an aqueous solution, including the observation for a positive result.',
        solution: 'Add dilute hydrochloric acid (to remove any carbonate ions that might interfere) (1 mark). Add barium chloride solution or barium nitrate solution (1 mark). A white precipitate of barium sulfate indicates sulfate ions present: Ba²⁺ + SO₄²⁻ → BaSO₄ (1 mark).',
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A solution contains either Fe²⁺ or Fe³⁺ ions. Describe how you could use sodium hydroxide solution to identify which ion is present.',
        solution: 'Add sodium hydroxide solution dropwise to the test solution (1 mark). Fe²⁺ ions produce a green precipitate of iron(II) hydroxide: Fe²⁺ + 2OH⁻ → Fe(OH)₂ (1 mark). Fe³⁺ ions produce a brown/rust-coloured precipitate of iron(III) hydroxide: Fe³⁺ + 3OH⁻ → Fe(OH)₃ (1 mark). The colour of the precipitate distinguishes between the two ions - green indicates Fe²⁺, brown indicates Fe³⁺ (1 mark).',
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A solution contains Cu²⁺ ions. Describe and explain the observations when ammonia solution is added dropwise until in excess, giving equations for the reactions occurring.',
        solution: 'Initially a pale blue precipitate of copper(II) hydroxide forms: Cu²⁺ + 2NH₃ + 2H₂O → Cu(OH)₂ + 2NH₄⁺ (ammonia acts as a weak base providing hydroxide ions) (1 mark). The precipitate is pale blue due to the Cu²⁺ ion (1 mark). On adding excess ammonia, the precipitate dissolves to form a deep blue solution (1 mark). This is due to formation of the tetraamminediaquacopper(II) complex: Cu(OH)₂ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 2OH⁻ (1 mark). Ammonia molecules act as ligands, replacing water and hydroxide around the copper ion through ligand substitution. The deep blue colour is due to different d orbital splitting with ammonia ligands compared to water (1 mark).',
        display_order: 3
      }
    ]
  }
];

export default alevelChemistryInorganic;
