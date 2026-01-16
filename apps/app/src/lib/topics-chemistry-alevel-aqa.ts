// AQA A-Level Chemistry (7405) Topics
// Complete specification coverage based on official AQA specification
// Paper 1: Physical + Inorganic Chemistry (105 marks, 2h, 35%)
// Paper 2: Physical + Organic Chemistry (105 marks, 2h, 35%)
// Paper 3: Practical Skills + Synoptic (90 marks, 2h, 30%)

import { Topic } from '@/types';

export const aqaALevelChemistryTopics: Topic[] = [
  // ==========================================
  // PHYSICAL CHEMISTRY - Year 1 (AS)
  // ==========================================

  // 3.1.1 Atomic Structure
  {
    id: 'alevel-chemistry-atomic-structure',
    name: 'Atomic Structure',
    description: 'Fundamental particles, mass spectrometry, electron configuration and ionisation energies',
    icon: '⚛️',
    color: 'bg-blue-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Fundamental particles
      'Protons, neutrons and electrons',
      'Relative charge and relative mass of subatomic particles',
      'Atomic number and mass number',
      'Isotopes and their properties',
      // Mass spectrometry
      'Mass spectrometry principles',
      'Time of flight (TOF) mass spectrometry',
      'Calculating relative atomic mass from mass spectrum',
      'Molecular ion peak identification',
      'Fragmentation patterns in mass spectra',
      // Electron configuration
      'Electron shells, subshells and orbitals',
      's, p, d and f orbitals',
      'Shapes of s and p orbitals',
      'Electron configuration notation',
      'Electron configuration of elements 1-36',
      'Electron configuration of ions',
      'Aufbau principle',
      'Hund\'s rule',
      'Pauli exclusion principle',
      // Ionisation energy
      'First ionisation energy definition',
      'Factors affecting ionisation energy',
      'Trends in first ionisation energy across periods',
      'Trends in first ionisation energy down groups',
      'Evidence from ionisation energies for electron shells',
      'Successive ionisation energies',
      'Evidence from successive ionisation energies for subshells',
    ],
  },

  // 3.1.2 Amount of Substance
  {
    id: 'alevel-chemistry-amount-substance',
    name: 'Amount of Substance',
    description: 'Moles, Avogadro, molar mass, empirical and molecular formulae, and gas calculations',
    icon: '⚖️',
    color: 'bg-green-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // The mole
      'The mole and Avogadro constant',
      'Molar mass and relative molecular mass',
      'Calculating moles from mass: n = m/M',
      'Calculating mass from moles',
      // Gas volumes
      'Molar volume of a gas at RTP (24 dm³)',
      'Molar volume at STP',
      'Calculating volume of gas from moles',
      'Calculating moles from gas volume',
      'Ideal gas equation: pV = nRT',
      // Concentration
      'Concentration in mol dm⁻³',
      'Concentration in g dm⁻³',
      'Converting between concentration units',
      'Dilution calculations',
      // Formulae
      'Empirical formula from percentage composition',
      'Empirical formula from combustion data',
      'Molecular formula from empirical formula',
      'Water of crystallisation calculations',
      // Equations and calculations
      'Balanced equations and stoichiometry',
      'Reacting mass calculations',
      'Limiting reagent calculations',
      'Percentage yield calculations',
      'Atom economy calculations',
      'Percentage yield vs atom economy',
      // Titrations
      'Acid-base titration calculations',
      'Standard solutions',
      'Titration with indicators',
      'Back titration calculations',
    ],
  },

  // 3.1.3 Bonding
  {
    id: 'alevel-chemistry-bonding',
    name: 'Bonding',
    description: 'Ionic, covalent and metallic bonding, and intermolecular forces',
    icon: '🔗',
    color: 'bg-purple-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Ionic bonding
      'Ionic bonding definition',
      'Formation of ions from atoms',
      'Electron transfer in ionic bonding',
      'Ionic crystal lattice structure',
      'Properties of ionic compounds',
      'Factors affecting melting points of ionic compounds',
      // Covalent bonding
      'Covalent bonding definition',
      'Single, double and triple covalent bonds',
      'Dative (coordinate) bonding',
      'Bond length and bond energy',
      'Average bond enthalpy',
      // Metallic bonding
      'Metallic bonding definition',
      'Delocalised electrons in metals',
      'Properties of metals explained by bonding',
      'Alloys and their properties',
      // Shapes of molecules (VSEPR)
      'Electron pair repulsion theory',
      'Bonding pairs and lone pairs',
      'Linear molecules (180°)',
      'Trigonal planar molecules (120°)',
      'Tetrahedral molecules (109.5°)',
      'Octahedral molecules (90°)',
      'Effect of lone pairs on bond angles',
      'Pyramidal shapes (107°)',
      'Bent/V-shaped molecules (104.5°)',
      // Electronegativity and polarity
      'Electronegativity definition',
      'Pauling electronegativity scale',
      'Polar covalent bonds',
      'Polar molecules and dipole moments',
      'Non-polar molecules with polar bonds',
      // Intermolecular forces
      'London dispersion forces (induced dipole)',
      'Permanent dipole-dipole forces',
      'Hydrogen bonding',
      'Conditions for hydrogen bonding',
      'Effect of intermolecular forces on boiling points',
      'Anomalous properties of water',
      'Solubility and intermolecular forces',
    ],
  },

  // 3.1.4 Energetics
  {
    id: 'alevel-chemistry-energetics',
    name: 'Energetics',
    description: 'Enthalpy changes, Hess\'s law, and bond enthalpies',
    icon: '🔥',
    color: 'bg-red-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Enthalpy changes
      'Enthalpy change definition',
      'Exothermic and endothermic reactions',
      'Standard enthalpy changes',
      'Standard conditions (298 K, 100 kPa)',
      'Enthalpy of combustion ΔcH',
      'Enthalpy of formation ΔfH',
      'Enthalpy of neutralisation ΔneutH',
      'Enthalpy of atomisation ΔatH',
      // Calorimetry
      'q = mcΔT calculations',
      'Specific heat capacity',
      'Calorimetry experiments',
      'Enthalpy change from calorimetry data',
      'Sources of error in calorimetry',
      // Hess\'s Law
      'Hess\'s Law statement',
      'Enthalpy cycles',
      'Using Hess\'s Law for calculations',
      'Calculating ΔrH from ΔfH values',
      'Calculating ΔrH from ΔcH values',
      // Bond enthalpies
      'Bond enthalpy definition',
      'Mean bond enthalpy',
      'Using bond enthalpies to calculate ΔrH',
      'Limitations of bond enthalpy calculations',
      'Bond enthalpy and bond strength',
    ],
  },

  // 3.1.5 Kinetics
  {
    id: 'alevel-chemistry-kinetics',
    name: 'Kinetics',
    description: 'Rates of reaction, collision theory, and Maxwell-Boltzmann distribution',
    icon: '⏱️',
    color: 'bg-yellow-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Collision theory
      'Collision theory principles',
      'Activation energy definition',
      'Effect of concentration on rate',
      'Effect of pressure on rate (gases)',
      'Effect of surface area on rate',
      'Effect of temperature on rate',
      'Effect of catalysts on rate',
      // Maxwell-Boltzmann distribution
      'Maxwell-Boltzmann distribution curve',
      'Effect of temperature on distribution',
      'Explaining temperature effect using M-B',
      'Effect of catalyst on activation energy',
      // Measuring rates
      'Measuring rate of reaction',
      'Rate = change in concentration / time',
      'Initial rate method',
      'Clock reactions',
      'Following reaction progress',
    ],
  },

  // 3.1.6 Chemical Equilibria and Le Chatelier's Principle
  {
    id: 'alevel-chemistry-equilibria',
    name: 'Chemical Equilibria and Le Chatelier\'s Principle',
    description: 'Dynamic equilibrium, Kc, and Le Chatelier\'s principle',
    icon: '⚖️',
    color: 'bg-cyan-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Dynamic equilibrium
      'Reversible reactions',
      'Dynamic equilibrium definition',
      'Closed system requirement',
      'Characteristics of equilibrium',
      // Le Chatelier's principle
      'Le Chatelier\'s principle statement',
      'Effect of concentration change',
      'Effect of pressure change',
      'Effect of temperature change',
      'Effect of catalyst on equilibrium',
      'Industrial compromise conditions',
      // Equilibrium constant Kc
      'Equilibrium constant Kc expression',
      'Writing Kc expressions',
      'Calculating Kc from equilibrium concentrations',
      'Units of Kc',
      'Effect of temperature on Kc',
      'Kc and position of equilibrium',
      'Kc calculations from initial amounts',
    ],
  },

  // 3.1.7 Oxidation, Reduction and Redox Equations
  {
    id: 'alevel-chemistry-redox',
    name: 'Oxidation, Reduction and Redox Equations',
    description: 'Oxidation states, redox reactions, and ionic half-equations',
    icon: '⚡',
    color: 'bg-orange-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Oxidation states
      'Oxidation state rules',
      'Assigning oxidation states',
      'Oxidation states in compounds',
      'Oxidation states in ions',
      'Roman numeral naming',
      // Redox definitions
      'Oxidation and reduction definitions',
      'OILRIG mnemonic',
      'Identifying oxidation and reduction',
      'Oxidising agents and reducing agents',
      // Ionic half-equations
      'Writing ionic half-equations',
      'Balancing half-equations',
      'Combining half-equations',
      'Electrons in redox reactions',
      // Redox reactions
      'Disproportionation reactions',
      'Redox titrations concept',
    ],
  },

  // ==========================================
  // PHYSICAL CHEMISTRY - Year 2 (A-Level only)
  // ==========================================

  // 3.1.8 Thermodynamics
  {
    id: 'alevel-chemistry-thermodynamics',
    name: 'Thermodynamics',
    description: 'Born-Haber cycles, entropy, and Gibbs free energy',
    icon: '🌡️',
    color: 'bg-red-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Born-Haber cycles
      'Born-Haber cycle construction',
      'Lattice enthalpy definition',
      'Enthalpy of atomisation',
      'First and second ionisation energies',
      'First and second electron affinities',
      'Calculating lattice enthalpy using Born-Haber',
      'Comparing theoretical and experimental lattice enthalpies',
      'Covalent character in ionic compounds',
      // Enthalpy of solution
      'Enthalpy of solution definition',
      'Enthalpy of hydration definition',
      'Factors affecting enthalpy of hydration',
      'Calculating enthalpy of solution from lattice enthalpy',
      // Entropy
      'Entropy definition',
      'Standard entropy S°',
      'Entropy change in reactions ΔS',
      'Calculating ΔS from S° values',
      'Entropy and disorder',
      'Entropy changes in phase changes',
      // Gibbs free energy
      'Gibbs free energy ΔG definition',
      'ΔG = ΔH - TΔS',
      'Spontaneity and free energy',
      'Effect of temperature on spontaneity',
      'Calculating ΔG',
      'Feasibility of reactions',
    ],
  },

  // 3.1.9 Rate Equations
  {
    id: 'alevel-chemistry-rate-equations',
    name: 'Rate Equations',
    description: 'Rate laws, orders of reaction, and mechanisms',
    icon: '📈',
    color: 'bg-yellow-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Rate equations
      'Rate equation format',
      'Rate constant k',
      'Order of reaction with respect to reactant',
      'Overall order of reaction',
      'Units of rate constant',
      // Determining orders
      'Initial rates method',
      'Continuous monitoring method',
      'Half-life method for first order',
      'Determining order from graphs',
      'Determining order from data tables',
      // Rate-concentration graphs
      'Zero order graphs',
      'First order graphs',
      'Second order graphs',
      'Concentration-time graphs',
      // Effect of temperature
      'Arrhenius equation',
      'Activation energy from Arrhenius plot',
      'ln k vs 1/T graphs',
      'Pre-exponential factor A',
      // Mechanisms
      'Rate-determining step',
      'Intermediates',
      'Molecularity of steps',
      'Predicting rate equations from mechanisms',
      'Mechanisms consistent with rate equations',
    ],
  },

  // 3.1.10 Equilibrium Constant Kp
  {
    id: 'alevel-chemistry-kp',
    name: 'Equilibrium Constant Kp',
    description: 'Equilibrium constant for gaseous systems in terms of partial pressures',
    icon: '💨',
    color: 'bg-gray-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Partial pressures
      'Mole fraction definition',
      'Partial pressure calculation',
      'Total pressure and partial pressures',
      // Kp expressions
      'Writing Kp expressions',
      'Homogeneous equilibria in gas phase',
      'Units of Kp',
      'Calculating Kp from partial pressures',
      'Calculating partial pressures from Kp',
      // Calculations
      'ICE tables for Kp',
      'Effect of pressure on Kp',
      'Effect of temperature on Kp',
    ],
  },

  // 3.1.11 Electrode Potentials and Electrochemical Cells
  {
    id: 'alevel-chemistry-electrode-potentials',
    name: 'Electrode Potentials and Electrochemical Cells',
    description: 'Standard electrode potentials, electrochemical cells, and cell EMF',
    icon: '🔋',
    color: 'bg-blue-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Standard electrode potentials
      'Standard electrode potential definition',
      'Standard hydrogen electrode',
      'Standard conditions for electrode potentials',
      'Measuring standard electrode potentials',
      'Electrochemical series',
      // Electrochemical cells
      'Electrochemical cell construction',
      'Cell diagrams and conventions',
      'Salt bridge function',
      'Calculating cell EMF',
      'E°cell = E°(positive) - E°(negative)',
      // Predicting reactions
      'Predicting reaction feasibility from E° values',
      'Limitations of electrode potential predictions',
      'Non-standard conditions',
      // Storage cells and fuel cells
      'Commercial cells',
      'Rechargeable cells',
      'Hydrogen fuel cells',
      'Advantages and disadvantages of fuel cells',
    ],
  },

  // 3.1.12 Acids and Bases
  {
    id: 'alevel-chemistry-acids-bases',
    name: 'Acids and Bases',
    description: 'pH calculations, Ka, buffers, and acid-base titrations',
    icon: '🧪',
    color: 'bg-pink-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Brønsted-Lowry theory
      'Brønsted-Lowry acids and bases',
      'Proton donors and acceptors',
      'Conjugate acid-base pairs',
      // Strong and weak acids
      'Strong acids - full dissociation',
      'Weak acids - partial dissociation',
      'Ka and acid strength',
      'pKa',
      // pH calculations
      'pH definition: pH = -log[H⁺]',
      'pH of strong acids',
      'pH of strong bases',
      'pH of weak acids using Ka',
      'Ionic product of water Kw',
      'pOH and pH relationship',
      // Buffer solutions
      'Buffer solution definition',
      'Acidic and basic buffers',
      'How buffers work',
      'Henderson-Hasselbalch equation',
      'Buffer calculations',
      'Buffer capacity',
      'Biological importance of buffers',
      // Titration curves
      'pH curves for strong acid-strong base',
      'pH curves for weak acid-strong base',
      'pH curves for strong acid-weak base',
      'Half-equivalence point',
      'Equivalence point',
      'Indicator selection using pKIn',
    ],
  },

  // ==========================================
  // INORGANIC CHEMISTRY - Year 1 (AS)
  // ==========================================

  // 3.2.1 Periodicity
  {
    id: 'alevel-chemistry-periodicity',
    name: 'Periodicity',
    description: 'Periodic trends and properties of Period 3 elements',
    icon: '📊',
    color: 'bg-indigo-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Classification
      's, p, d and f block elements',
      'Metals, non-metals and metalloids',
      // Periodic trends
      'Atomic radius trend across periods',
      'Atomic radius trend down groups',
      'First ionisation energy trends',
      'Electronegativity trends',
      // Period 3 elements
      'Period 3 elements Na to Ar',
      'Melting point trend in Period 3',
      'Explaining melting point trend',
      'Structure and bonding in Period 3',
    ],
  },

  // 3.2.2 Group 2, the Alkaline Earth Metals
  {
    id: 'alevel-chemistry-group2',
    name: 'Group 2, the Alkaline Earth Metals',
    description: 'Properties and reactions of Group 2 elements and compounds',
    icon: '🔷',
    color: 'bg-teal-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Physical properties
      'Atomic radius trend in Group 2',
      'First and second ionisation energies',
      'Trend in ionisation energies down Group 2',
      // Reactions with water
      'Reactions of Group 2 metals with water',
      'Trend in reactivity down Group 2',
      'Products of reaction with water',
      'Hydroxide solutions formed',
      // Reactions with oxygen
      'Reactions with oxygen',
      'Formation of oxides',
      // Hydroxides
      'Solubility of Group 2 hydroxides',
      'Trend in solubility down group',
      'Use of Ca(OH)₂ and Mg(OH)₂',
      'Neutralisation of acids',
      // Sulfates
      'Solubility of Group 2 sulfates',
      'Trend in solubility down group',
      'BaSO₄ precipitate test for sulfates',
      // Uses
      'Uses of Group 2 compounds',
      'Mg(OH)₂ as antacid',
      'CaO in agriculture',
    ],
  },

  // 3.2.3 Group 7(17), the Halogens
  {
    id: 'alevel-chemistry-group7',
    name: 'Group 7(17), the Halogens',
    description: 'Properties and reactions of Group 7 elements and halide ions',
    icon: '🟢',
    color: 'bg-lime-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Physical properties
      'Trends in physical properties',
      'Atomic radius trend',
      'Electronegativity trend',
      'Boiling point trend',
      'Colours of halogens',
      // Trends in reactivity
      'Trend in oxidising ability',
      'Trend in electronegativity',
      'Displacement reactions of halogens',
      // Reactions of halogens
      'Reaction with metals',
      'Reaction with non-metals',
      'Disproportionation of chlorine in water',
      'Disproportionation in alkali',
      'Uses of chlorine',
      // Halide ions
      'Reducing ability of halide ions',
      'Trend in reducing ability',
      'Reactions of halide ions with H₂SO₄',
      'Products of halide reactions',
      // Testing for halides
      'Silver nitrate test for halides',
      'AgCl, AgBr, AgI precipitates',
      'Effect of dilute and concentrated ammonia',
    ],
  },

  // ==========================================
  // INORGANIC CHEMISTRY - Year 2 (A-Level only)
  // ==========================================

  // 3.2.4 Properties of Period 3 Elements and Their Oxides
  {
    id: 'alevel-chemistry-period3',
    name: 'Properties of Period 3 Elements and Their Oxides',
    description: 'Reactions and properties of Period 3 elements and their oxides',
    icon: '📋',
    color: 'bg-indigo-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Reactions with oxygen
      'Reactions of Period 3 elements with oxygen',
      'Equations for oxide formation',
      'Oxidation states in oxides',
      // Physical properties of oxides
      'Structures of Period 3 oxides',
      'Ionic oxides (Na₂O, MgO)',
      'Giant covalent (SiO₂)',
      'Simple molecular (P₄O₁₀, SO₂, SO₃)',
      // Reactions with water
      'Reactions of Period 3 oxides with water',
      'pH of resulting solutions',
      'Acidic, basic and amphoteric oxides',
      'Aluminium oxide amphoteric nature',
      // Acid-base character
      'Trend in acid-base character',
      'Ionic vs covalent character and acidity',
    ],
  },

  // 3.2.5 Transition Metals
  {
    id: 'alevel-chemistry-transition-metals',
    name: 'Transition Metals',
    description: 'Properties of transition metals, complexes, and reactions',
    icon: '🔩',
    color: 'bg-slate-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Definition and properties
      'Definition of transition metal',
      'Electronic configurations of 3d elements',
      'Variable oxidation states',
      'Coloured compounds',
      'Catalytic properties',
      'Complex ion formation',
      // Complex ions
      'Ligand definition',
      'Coordination number',
      'Monodentate ligands',
      'Bidentate ligands',
      'Multidentate ligands (EDTA)',
      'Chelate effect',
      // Shapes of complex ions
      'Octahedral complexes',
      'Tetrahedral complexes',
      'Square planar complexes',
      'Linear complexes',
      // Colour in complexes
      'd-orbital splitting',
      'Absorption of light',
      'ΔE = hf relationship',
      'Effect of ligand on colour',
      'Effect of oxidation state on colour',
      'Spectrochemical series',
      // Ligand exchange
      'Ligand substitution reactions',
      'Stability constants',
      'Haemoglobin and oxygen',
      'Carbon monoxide poisoning',
      // Vanadium
      'Vanadium oxidation states',
      'Colours of vanadium ions',
      'Redox reactions of vanadium',
      // Reactions of aqueous ions
      'Reactions with NaOH',
      'Reactions with NH₃',
      'Colours of precipitates',
      'Amphoteric nature of some hydroxides',
      // Catalysis
      'Homogeneous catalysis',
      'Heterogeneous catalysis',
      'Variable oxidation states in catalysis',
      'Contact process (V₂O₅)',
      'Haber process (Fe)',
    ],
  },

  // 3.2.6 Reactions of Ions in Aqueous Solution
  {
    id: 'alevel-chemistry-ions-aqueous',
    name: 'Reactions of Ions in Aqueous Solution',
    description: 'Identifying ions through characteristic reactions',
    icon: '💧',
    color: 'bg-blue-400',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Cation tests
      'Tests for metal cations',
      'Flame tests (Li, Na, K, Ca, Ba, Cu)',
      'Sodium hydroxide test for cations',
      'Ammonia solution test for cations',
      'Precipitate colours',
      // Anion tests
      'Test for carbonates (acid + limewater)',
      'Test for sulfates (BaCl₂/Ba(NO₃)₂)',
      'Test for halides (AgNO₃)',
      'Test for nitrates (reduction)',
      // Redox titrations
      'Manganate(VII) titrations',
      'Calculations from titration data',
    ],
  },

  // ==========================================
  // ORGANIC CHEMISTRY - Year 1 (AS)
  // ==========================================

  // 3.3.1 Introduction to Organic Chemistry
  {
    id: 'alevel-chemistry-organic-intro',
    name: 'Introduction to Organic Chemistry',
    description: 'Nomenclature, isomerism, and reaction mechanisms',
    icon: '🧬',
    color: 'bg-emerald-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Nomenclature
      'IUPAC nomenclature rules',
      'Naming alkanes',
      'Naming branched alkanes',
      'Naming functional groups',
      'Naming alkenes',
      'Naming halogenoalkanes',
      'Naming alcohols',
      'Drawing structural formulae',
      'Displayed, structural and skeletal formulae',
      // Functional groups
      'Homologous series',
      'Functional group definition',
      'General formulae',
      // Isomerism
      'Structural isomerism',
      'Chain isomerism',
      'Position isomerism',
      'Functional group isomerism',
      'E/Z stereoisomerism',
      'Cis-trans isomerism',
      'Priority rules for E/Z',
      // Reaction mechanisms
      'Homolytic and heterolytic fission',
      'Curly arrows',
      'Nucleophiles',
      'Electrophiles',
      'Free radicals',
    ],
  },

  // 3.3.2 Alkanes
  {
    id: 'alevel-chemistry-alkanes',
    name: 'Alkanes',
    description: 'Properties and reactions of alkanes, combustion and free radical substitution',
    icon: '⛽',
    color: 'bg-gray-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Alkanes as fuels
      'Alkanes as fuels',
      'Complete combustion of alkanes',
      'Incomplete combustion',
      'Pollutants from combustion',
      'Catalytic converters',
      // Fractional distillation
      'Crude oil composition',
      'Fractional distillation process',
      'Fractions and their uses',
      // Cracking
      'Thermal cracking',
      'Catalytic cracking',
      'Products of cracking',
      // Free radical substitution
      'UV light initiation',
      'Initiation step',
      'Propagation steps',
      'Termination steps',
      'Formation of multiple products',
      'Mechanism limitations',
    ],
  },

  // 3.3.3 Halogenoalkanes
  {
    id: 'alevel-chemistry-halogenoalkanes',
    name: 'Halogenoalkanes',
    description: 'Reactions and mechanisms of halogenoalkanes',
    icon: '🔴',
    color: 'bg-rose-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary, secondary and tertiary halogenoalkanes',
      'C-X bond polarity',
      'C-X bond strength',
      // Nucleophilic substitution
      'Nucleophilic substitution overview',
      'Hydrolysis to form alcohols',
      'Reaction with aqueous NaOH',
      'Reaction with aqueous KOH',
      'Comparing rates of hydrolysis',
      // Reaction with ammonia
      'Formation of primary amines',
      'Excess ammonia required',
      // Reaction with cyanide
      'Formation of nitriles',
      'Extending carbon chain',
      // Elimination
      'Elimination with ethanolic KOH',
      'Formation of alkenes',
      'Conditions for elimination vs substitution',
      // CFCs and the ozone layer
      'Uses of CFCs',
      'Ozone depletion mechanism',
      'Free radical chain reaction',
      'Alternative compounds',
    ],
  },

  // 3.3.4 Alkenes
  {
    id: 'alevel-chemistry-alkenes',
    name: 'Alkenes',
    description: 'Structure, reactions and polymerisation of alkenes',
    icon: '⚗️',
    color: 'bg-green-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Structure
      'C=C double bond',
      'Planar shape around C=C',
      'Restricted rotation',
      // Addition reactions
      'Electrophilic addition mechanism',
      'Addition of hydrogen (hydrogenation)',
      'Addition of halogens',
      'Test for unsaturation (bromine water)',
      'Addition of hydrogen halides',
      'Markovnikov\'s rule',
      'Major and minor products',
      'Addition of water (hydration)',
      // Polymerisation
      'Addition polymerisation',
      'Drawing repeat units',
      'Properties of poly(alkenes)',
      'Disposal and environmental issues',
    ],
  },

  // 3.3.5 Alcohols
  {
    id: 'alevel-chemistry-alcohols',
    name: 'Alcohols',
    description: 'Classification, reactions and oxidation of alcohols',
    icon: '🍷',
    color: 'bg-violet-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary, secondary and tertiary alcohols',
      'Physical properties of alcohols',
      'Hydrogen bonding in alcohols',
      'Solubility of alcohols',
      // Production
      'Fermentation',
      'Conditions for fermentation',
      'Hydration of ethene',
      'Comparing production methods',
      // Oxidation
      'Oxidation of primary alcohols',
      'Formation of aldehydes (distillation)',
      'Formation of carboxylic acids (reflux)',
      'Oxidation of secondary alcohols',
      'Formation of ketones',
      'Resistance of tertiary alcohols',
      'Using dichromate as oxidising agent',
      // Elimination
      'Dehydration to form alkenes',
      'Conditions for elimination',
      // Esterification
      'Reaction with carboxylic acids',
      'Ester formation and naming',
      'Conditions for esterification',
      'Uses of esters',
    ],
  },

  // 3.3.6 Organic Analysis
  {
    id: 'alevel-chemistry-organic-analysis',
    name: 'Organic Analysis',
    description: 'Test tube reactions and infrared spectroscopy',
    icon: '🔬',
    color: 'bg-amber-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Test-tube reactions
      'Test for alkenes (bromine water)',
      'Test for alcohols (oxidation)',
      'Test for aldehydes (Tollens\' reagent)',
      'Test for aldehydes (Fehling\'s solution)',
      'Distinguishing aldehydes from ketones',
      'Test for carboxylic acids',
      // Infrared spectroscopy
      'Infrared absorption',
      'Bond vibrations',
      'Characteristic absorptions',
      'O-H stretch (broad)',
      'C=O stretch',
      'C-H stretch',
      'Fingerprint region',
      'Interpreting IR spectra',
      'Identifying functional groups from IR',
    ],
  },

  // ==========================================
  // ORGANIC CHEMISTRY - Year 2 (A-Level only)
  // ==========================================

  // 3.3.7 Optical Isomerism
  {
    id: 'alevel-chemistry-optical-isomerism',
    name: 'Optical Isomerism',
    description: 'Chirality, enantiomers and optical activity',
    icon: '🔀',
    color: 'bg-fuchsia-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Chirality
      'Chiral centres',
      'Asymmetric carbon atoms',
      'Non-superimposable mirror images',
      // Enantiomers
      'Enantiomer definition',
      'Properties of enantiomers',
      'Optical activity',
      'Plane polarised light',
      'Racemic mixtures',
      'Pharmaceutical importance',
    ],
  },

  // 3.3.8 Aldehydes and Ketones
  {
    id: 'alevel-chemistry-aldehydes-ketones',
    name: 'Aldehydes and Ketones',
    description: 'Reactions of carbonyl compounds',
    icon: '🫧',
    color: 'bg-sky-500',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Structure and properties
      'C=O group structure',
      'Polarity of carbonyl group',
      // Oxidation
      'Oxidation of aldehydes to carboxylic acids',
      'Tollens\' reagent (silver mirror test)',
      'Fehling\'s solution',
      'Acidified dichromate',
      // Reduction
      'Reduction by NaBH₄',
      'Nucleophilic addition mechanism',
      'Products from aldehydes (primary alcohols)',
      'Products from ketones (secondary alcohols)',
      // Nucleophilic addition
      'Reaction with hydrogen cyanide',
      'Formation of hydroxynitriles',
      'Mechanism of nucleophilic addition',
      'Role of cyanide ion',
    ],
  },

  // 3.3.9 Carboxylic Acids and Derivatives
  {
    id: 'alevel-chemistry-carboxylic-acids',
    name: 'Carboxylic Acids and Derivatives',
    description: 'Properties and reactions of carboxylic acids, esters and acyl chlorides',
    icon: '🧫',
    color: 'bg-orange-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Carboxylic acids
      'Acidity of carboxylic acids',
      'Reactions with bases',
      'Reactions with carbonates',
      'Salt formation',
      // Esters
      'Ester formation (Fischer esterification)',
      'Ester hydrolysis (acid catalysed)',
      'Ester hydrolysis (base catalysed/saponification)',
      'Uses of esters',
      'Biodiesel production',
      // Acyl chlorides
      'Structure of acyl chlorides',
      'High reactivity of acyl chlorides',
      'Reaction with water',
      'Reaction with alcohols',
      'Reaction with ammonia',
      'Reaction with amines',
      'Nucleophilic addition-elimination mechanism',
    ],
  },

  // 3.3.10 Aromatic Chemistry
  {
    id: 'alevel-chemistry-aromatics',
    name: 'Aromatic Chemistry',
    description: 'Benzene structure and electrophilic substitution reactions',
    icon: '💎',
    color: 'bg-purple-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Benzene structure
      'Kekulé structure limitations',
      'Evidence against Kekulé structure',
      'Delocalised model of benzene',
      'Stability of benzene ring',
      'Thermochemical evidence',
      // Electrophilic substitution
      'Why benzene undergoes substitution',
      'General mechanism of electrophilic substitution',
      // Nitration
      'Nitration of benzene',
      'Conditions (HNO₃, H₂SO₄, 50°C)',
      'Formation of nitronium ion NO₂⁺',
      'Mechanism of nitration',
      'Uses of nitrobenzene',
      // Friedel-Crafts reactions
      'Friedel-Crafts alkylation',
      'Friedel-Crafts acylation',
      'Role of AlCl₃ catalyst',
      'Generating electrophile',
      'Mechanisms',
      // Bromination
      'Bromination with Br₂/AlBr₃',
      'Mechanism of bromination',
    ],
  },

  // 3.3.11 Amines
  {
    id: 'alevel-chemistry-amines',
    name: 'Amines',
    description: 'Properties and reactions of amines',
    icon: '🔷',
    color: 'bg-indigo-400',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary, secondary and tertiary amines',
      'Naming amines',
      // Preparation
      'From halogenoalkanes with excess ammonia',
      'From nitriles by reduction',
      'From nitrobenzene (Sn/HCl)',
      // Basicity
      'Lone pair on nitrogen',
      'Amines as bases',
      'Comparing basicity (ammonia, aliphatic, aromatic)',
      'Salt formation with acids',
      // Reactions
      'Reaction with acids',
      'Reaction with acyl chlorides',
      'Formation of amides',
    ],
  },

  // 3.3.12 Polymers
  {
    id: 'alevel-chemistry-polymers',
    name: 'Polymers',
    description: 'Condensation polymerisation and polymer properties',
    icon: '🔗',
    color: 'bg-teal-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Condensation polymers
      'Condensation polymerisation',
      'Loss of small molecule (H₂O)',
      // Polyesters
      'Formation of polyesters',
      'Diols and dicarboxylic acids',
      'Terylene/PET',
      'Drawing repeat units',
      'Identifying monomers from polymer',
      // Polyamides
      'Formation of polyamides',
      'Diamines and dicarboxylic acids',
      'Nylon 6,6',
      'Kevlar',
      // Biodegradability
      'Comparing addition and condensation polymers',
      'Biodegradability',
      'Hydrolysis of condensation polymers',
      'Environmental considerations',
    ],
  },

  // 3.3.13 Amino Acids, Proteins and DNA
  {
    id: 'alevel-chemistry-amino-acids',
    name: 'Amino Acids, Proteins and DNA',
    description: 'Structure and properties of amino acids and proteins',
    icon: '🧬',
    color: 'bg-rose-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Amino acids
      'General structure of amino acids',
      'Zwitterion formation',
      'Isoelectric point',
      'Optical isomerism in amino acids',
      // Proteins
      'Peptide bond formation',
      'Dipeptides and polypeptides',
      'Primary structure',
      'Secondary structure (α-helix, β-sheet)',
      'Tertiary structure',
      'Quaternary structure',
      'Hydrolysis of proteins',
      // DNA (optional)
      'DNA structure overview',
      'Base pairing',
      'Hydrogen bonding in DNA',
    ],
  },

  // 3.3.14 Organic Synthesis
  {
    id: 'alevel-chemistry-organic-synthesis',
    name: 'Organic Synthesis',
    description: 'Planning multi-step organic syntheses',
    icon: '🗺️',
    color: 'bg-green-700',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Synthesis routes
      'Retrosynthetic analysis',
      'Planning synthetic routes',
      'Selecting appropriate reagents',
      'Selecting appropriate conditions',
      'Multi-step synthesis',
      'Protecting groups concept',
      // Practical techniques
      'Reflux',
      'Distillation',
      'Purification methods',
      'Recrystallisation',
      'Drying organic products',
      'Measuring yield and purity',
    ],
  },

  // 3.3.15 Nuclear Magnetic Resonance Spectroscopy
  {
    id: 'alevel-chemistry-nmr',
    name: 'Nuclear Magnetic Resonance Spectroscopy',
    description: 'Interpreting NMR spectra for structure determination',
    icon: '📡',
    color: 'bg-cyan-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Principles
      'Principle of NMR',
      'Chemical shift',
      'TMS reference',
      'Integration',
      // ¹H NMR
      'Number of peaks and environments',
      'Chemical shift ranges',
      'Peak areas and hydrogen ratios',
      'Spin-spin coupling',
      'n+1 rule',
      'Splitting patterns',
      'Interpreting ¹H NMR spectra',
      // ¹³C NMR
      '¹³C NMR overview',
      'Number of carbon environments',
      'Chemical shift ranges for ¹³C',
      'Proton-decoupled spectra',
      // Combined techniques
      'Using NMR with mass spec and IR',
      'Structure determination',
    ],
  },

  // 3.3.16 Chromatography
  {
    id: 'alevel-chemistry-chromatography',
    name: 'Chromatography',
    description: 'Separation techniques and Rf values',
    icon: '📊',
    color: 'bg-amber-600',
    examBoard: 'aqa',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Principles
      'Stationary and mobile phases',
      'Separation based on affinity',
      // TLC
      'Thin layer chromatography',
      'Rf values and calculations',
      'Identifying compounds using Rf',
      // Column chromatography
      'Column chromatography principle',
      'Separation of mixtures',
      // Gas chromatography
      'GC principles',
      'Retention time',
      'GC-MS coupling',
      'Interpreting chromatograms',
    ],
  },
];

// Helper functions
export function getAQAALevelChemistryTopicById(id: string): Topic | undefined {
  return aqaALevelChemistryTopics.find(topic => topic.id === id);
}

export function getAQAALevelChemistryTopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  return aqaALevelChemistryTopics.filter(topic =>
    topic.paperRestriction?.includes(`Paper ${paper}`)
  );
}

export function countAQAALevelChemistrySubtopics(): number {
  return aqaALevelChemistryTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
