// OCR A-Level Chemistry A (H432) Topics
// Complete specification coverage based on official OCR specification
// Paper 1: Periodic table, elements and physical chemistry (100 marks, 2h15m, 37%)
// Paper 2: Synthesis and analytical techniques (100 marks, 2h15m, 37%)
// Paper 3: Unified chemistry (70 marks, 1h30m, 26%)

import { Topic } from '@/types';

export const ocrALevelChemistryTopics: Topic[] = [
  // ==========================================
  // MODULE 2: Foundations in Chemistry
  // ==========================================

  // 2.1 Atoms, ions and compounds
  {
    id: 'ocr-alevel-chemistry-atoms-compounds',
    name: 'Atoms, Ions and Compounds',
    description: 'Atomic structure, isotopes, and compound formulae',
    icon: '⚛️',
    color: 'bg-blue-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Atomic structure
      'Protons, neutrons and electrons',
      'Atomic number and mass number',
      'Isotopes',
      'Relative isotopic mass',
      'Relative atomic mass',
      'Mass spectrometry',
      'Calculating Ar from mass spectrum',
      // Compounds
      'Ionic compounds',
      'Covalent compounds',
      'Writing formulae',
      'Naming compounds',
    ],
  },

  // 2.2 Amount of substance
  {
    id: 'ocr-alevel-chemistry-amount-substance',
    name: 'Amount of Substance',
    description: 'The mole, concentration, gas volumes, and equations',
    icon: '⚖️',
    color: 'bg-green-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // The mole
      'The mole',
      'Avogadro constant',
      'Molar mass',
      'Moles from mass: n = m/M',
      // Concentration
      'Concentration in mol dm⁻³',
      'Concentration in g dm⁻³',
      'Dilution calculations',
      // Gas volumes
      'Molar volume at RTP (24 dm³)',
      'Ideal gas equation: pV = nRT',
      // Equations
      'Balanced equations',
      'Ionic equations',
      // Calculations
      'Reacting mass calculations',
      'Limiting reagent',
      'Percentage yield',
      'Atom economy',
      // Hydrated salts
      'Water of crystallisation',
      'Calculating formula of hydrated salt',
    ],
  },

  // 2.3 Acids, bases and redox
  {
    id: 'ocr-alevel-chemistry-acids-redox',
    name: 'Acids, Bases and Redox',
    description: 'Acid-base reactions, oxidation states, and redox equations',
    icon: '🧪',
    color: 'bg-orange-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // Acids and bases
      'Acids and alkalis',
      'Neutralisation reactions',
      'Reactions of acids with metals',
      'Reactions of acids with carbonates',
      'Salt formation',
      // Oxidation states
      'Oxidation state rules',
      'Assigning oxidation states',
      'Roman numeral naming',
      // Redox
      'Oxidation and reduction',
      'Electron transfer',
      'Oxidising and reducing agents',
      'Half-equations',
      'Combining half-equations',
      // Titrations
      'Acid-base titrations',
      'Titration calculations',
    ],
  },

  // 2.4 Electrons, bonding and structure
  {
    id: 'ocr-alevel-chemistry-bonding',
    name: 'Electrons, Bonding and Structure',
    description: 'Electron configuration, bonding types, and molecular shapes',
    icon: '🔗',
    color: 'bg-purple-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Electron configuration
      'Shells, subshells and orbitals',
      's, p, d orbital shapes',
      'Electron configuration notation',
      'Aufbau principle',
      'Hund\'s rule',
      'Electron configuration of ions',
      // Ionisation energy
      'First ionisation energy',
      'Successive ionisation energies',
      'Trends in ionisation energy',
      // Bonding
      'Ionic bonding',
      'Covalent bonding',
      'Dative covalent bonding',
      'Metallic bonding',
      // Shapes
      'Electron pair repulsion',
      'Linear, trigonal planar, tetrahedral',
      'Pyramidal and bent shapes',
      'Octahedral',
      'Bond angles',
      // Electronegativity
      'Electronegativity',
      'Polar bonds',
      'Polar molecules',
      // Intermolecular forces
      'London forces',
      'Permanent dipole-dipole',
      'Hydrogen bonding',
      // Structure and properties
      'Giant ionic structures',
      'Giant covalent structures',
      'Simple molecular structures',
      'Metallic structures',
    ],
  },

  // ==========================================
  // MODULE 3: Periodic Table and Energy
  // ==========================================

  // 3.1 The periodic table
  {
    id: 'ocr-alevel-chemistry-periodic-table',
    name: 'The Periodic Table',
    description: 'Periodicity, Group 2, and Group 17 (halogens)',
    icon: '📊',
    color: 'bg-indigo-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Periodicity
      'Periodic trends',
      'Atomic radius across period',
      'Melting point trends',
      'Structure and bonding across Period 3',
      // Group 2
      'Group 2 properties',
      'Reactions with water',
      'Reactions with oxygen',
      'Trends in reactivity',
      'Solubility of hydroxides',
      'Solubility of sulfates',
      'Uses of Group 2 compounds',
      // Halogens (Group 17)
      'Physical properties',
      'Electronegativity trend',
      'Oxidising ability trend',
      'Displacement reactions',
      'Reactions of halide ions',
      'Silver nitrate test',
      'Reactions with H₂SO₄',
      'Disproportionation',
      'Uses of chlorine',
    ],
  },

  // 3.2 Physical chemistry
  {
    id: 'ocr-alevel-chemistry-physical1',
    name: 'Physical Chemistry',
    description: 'Enthalpy changes, rates of reaction, and equilibrium',
    icon: '🔥',
    color: 'bg-red-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Enthalpy changes
      'Exothermic and endothermic',
      'Standard enthalpy changes',
      'Enthalpy of formation',
      'Enthalpy of combustion',
      'Calorimetry: q = mcΔT',
      // Hess\'s Law
      'Hess\'s Law',
      'Enthalpy cycles',
      'Calculating enthalpy changes',
      // Bond enthalpies
      'Mean bond enthalpy',
      'Calculating ΔH from bond enthalpies',
      // Rates of reaction
      'Measuring rate',
      'Collision theory',
      'Activation energy',
      'Factors affecting rate',
      // Catalysts
      'Catalysts',
      'How catalysts work',
      // Maxwell-Boltzmann
      'Maxwell-Boltzmann distribution',
      'Effect of temperature',
      'Effect of catalysts on distribution',
      // Equilibrium
      'Dynamic equilibrium',
      'Le Chatelier\'s principle',
      'Effect of conditions',
      // Equilibrium constant
      'Kc expressions',
      'Calculating Kc',
      'Units of Kc',
    ],
  },

  // ==========================================
  // MODULE 4: Core Organic Chemistry
  // ==========================================

  // 4.1 Basic concepts
  {
    id: 'ocr-alevel-chemistry-organic-basics',
    name: 'Basic Concepts in Organic Chemistry',
    description: 'Nomenclature, isomerism, and reaction mechanisms',
    icon: '🧬',
    color: 'bg-emerald-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Nomenclature
      'IUPAC naming rules',
      'Naming alkanes, alkenes, alcohols',
      'Naming halogenoalkanes',
      'Naming aldehydes, ketones, acids',
      // Formulae
      'Molecular formula',
      'Empirical formula',
      'Structural formula',
      'Displayed formula',
      'Skeletal formula',
      // Functional groups
      'Functional groups',
      'Homologous series',
      // Isomerism
      'Structural isomerism',
      'Chain isomerism',
      'Position isomerism',
      'Functional group isomerism',
      'E/Z stereoisomerism',
      // Mechanisms
      'Homolytic fission',
      'Heterolytic fission',
      'Curly arrows',
      'Nucleophiles',
      'Electrophiles',
      'Free radicals',
    ],
  },

  // 4.2 Alkanes
  {
    id: 'ocr-alevel-chemistry-alkanes',
    name: 'Alkanes',
    description: 'Properties and reactions of alkanes',
    icon: '⛽',
    color: 'bg-gray-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Properties
      'General formula',
      'Physical properties',
      'Boiling point trend',
      // Combustion
      'Complete combustion',
      'Incomplete combustion',
      'Pollutants',
      // Fractional distillation
      'Crude oil',
      'Fractional distillation',
      'Uses of fractions',
      // Cracking
      'Thermal cracking',
      'Catalytic cracking',
      // Free radical substitution
      'Mechanism',
      'Initiation',
      'Propagation',
      'Termination',
    ],
  },

  // 4.3 Alkenes
  {
    id: 'ocr-alevel-chemistry-alkenes',
    name: 'Alkenes',
    description: 'Structure and reactions of alkenes',
    icon: '⚗️',
    color: 'bg-green-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Structure
      'C=C double bond',
      'Planar shape',
      'Restricted rotation',
      // Addition reactions
      'Electrophilic addition',
      'Addition of hydrogen',
      'Addition of halogens',
      'Addition of hydrogen halides',
      'Markovnikov\'s rule',
      'Addition of water',
      // Test for alkenes
      'Bromine water test',
      // Polymerisation
      'Addition polymerisation',
      'Drawing polymers',
      'Properties of polymers',
    ],
  },

  // 4.4 Alcohols
  {
    id: 'ocr-alevel-chemistry-alcohols',
    name: 'Alcohols',
    description: 'Classification, properties and reactions of alcohols',
    icon: '🍷',
    color: 'bg-violet-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary alcohols',
      'Secondary alcohols',
      'Tertiary alcohols',
      // Production
      'Fermentation',
      'Hydration of ethene',
      // Oxidation
      'Oxidation of primary alcohols',
      'Aldehydes and carboxylic acids',
      'Oxidation of secondary alcohols',
      'Ketones',
      'Tertiary alcohols',
      // Elimination
      'Dehydration to alkenes',
      // Esterification
      'Reaction with carboxylic acids',
      'Ester formation',
    ],
  },

  // 4.5 Halogenoalkanes
  {
    id: 'ocr-alevel-chemistry-halogenoalkanes',
    name: 'Halogenoalkanes',
    description: 'Reactions of halogenoalkanes',
    icon: '🔴',
    color: 'bg-rose-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary, secondary, tertiary',
      'C-X bond polarity',
      'C-X bond strength',
      // Nucleophilic substitution
      'Mechanism',
      'Hydrolysis to alcohols',
      'Reaction with cyanide',
      'Reaction with ammonia',
      // Rates of hydrolysis
      'Effect of halogen',
      'Bond strength and rate',
      // Elimination
      'Conditions for elimination',
      'Formation of alkenes',
      // CFCs
      'Ozone depletion',
      'Free radical mechanism',
    ],
  },

  // 4.6 Organic synthesis
  {
    id: 'ocr-alevel-chemistry-synthesis-as',
    name: 'Organic Synthesis (AS)',
    description: 'Practical techniques and synthesis routes',
    icon: '🔬',
    color: 'bg-amber-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Techniques
      'Reflux',
      'Distillation',
      'Separating funnel',
      'Drying agents',
      // Analytical techniques
      'Mass spectrometry',
      'Infrared spectroscopy',
    ],
  },

  // ==========================================
  // MODULE 5: Physical Chemistry and Transition Elements
  // ==========================================

  // 5.1 Rates of reaction
  {
    id: 'ocr-alevel-chemistry-rates',
    name: 'Rates of Reaction',
    description: 'Rate equations, orders, and mechanisms',
    icon: '📈',
    color: 'bg-yellow-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Rate equations
      'Rate equation',
      'Rate constant k',
      'Order of reaction',
      'Overall order',
      'Units of k',
      // Determining order
      'Initial rates method',
      'Half-life method',
      'Concentration-time graphs',
      // Arrhenius equation
      'Arrhenius equation',
      'ln k vs 1/T',
      'Calculating activation energy',
      // Mechanisms
      'Rate-determining step',
      'Predicting rate equations from mechanisms',
      'Multi-step mechanisms',
    ],
  },

  // 5.2 Equilibrium
  {
    id: 'ocr-alevel-chemistry-equilibrium',
    name: 'Equilibrium',
    description: 'Kp, Kc, and acid-base equilibria',
    icon: '⚖️',
    color: 'bg-cyan-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Kp
      'Partial pressure',
      'Mole fraction',
      'Kp expressions',
      'Calculating Kp',
      // Acids and bases
      'Brønsted-Lowry theory',
      'Strong and weak acids',
      'Ka and pKa',
      // pH calculations
      'pH definition',
      'pH of strong acids',
      'pH of weak acids',
      'pH of strong bases',
      'Kw and pOH',
      // Buffers
      'Buffer solutions',
      'How buffers work',
      'Buffer calculations',
      'Henderson-Hasselbalch',
      // Titrations
      'pH curves',
      'Equivalence point',
      'Half-equivalence point',
      'Indicator selection',
    ],
  },

  // 5.3 Enthalpy and entropy
  {
    id: 'ocr-alevel-chemistry-thermodynamics',
    name: 'Enthalpy and Entropy',
    description: 'Born-Haber cycles, entropy, and Gibbs free energy',
    icon: '🌡️',
    color: 'bg-red-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Lattice enthalpy
      'Lattice enthalpy definition',
      'Born-Haber cycles',
      'Calculating lattice enthalpy',
      'Enthalpy of atomisation',
      'Electron affinity',
      // Enthalpy of solution
      'Enthalpy of solution',
      'Enthalpy of hydration',
      // Entropy
      'Entropy definition',
      'Standard entropy',
      'Entropy change ΔS',
      'Entropy and disorder',
      // Gibbs free energy
      'Gibbs free energy ΔG',
      'ΔG = ΔH - TΔS',
      'Spontaneity',
      'Effect of temperature on feasibility',
    ],
  },

  // 5.4 Redox
  {
    id: 'ocr-alevel-chemistry-redox2',
    name: 'Redox and Electrode Potentials',
    description: 'Electrode potentials and electrochemical cells',
    icon: '🔋',
    color: 'bg-blue-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Electrode potentials
      'Standard electrode potential',
      'Standard hydrogen electrode',
      'Measuring E°',
      'Electrochemical series',
      // Cells
      'Electrochemical cells',
      'Cell diagrams',
      'Calculating cell EMF',
      // Predicting reactions
      'Using E° to predict reactions',
      'Limitations',
      // Storage cells
      'Non-rechargeable cells',
      'Rechargeable cells',
      'Fuel cells',
    ],
  },

  // 5.5 Transition metals
  {
    id: 'ocr-alevel-chemistry-transition-metals',
    name: 'Transition Elements',
    description: 'Properties, complexes, and reactions of transition metals',
    icon: '🔩',
    color: 'bg-slate-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Definition and properties
      'Transition metal definition',
      'Electron configurations',
      'Variable oxidation states',
      'Coloured compounds',
      'Complex formation',
      'Catalytic activity',
      // Complexes
      'Ligands',
      'Coordination number',
      'Monodentate ligands',
      'Bidentate ligands',
      'Multidentate ligands',
      // Shapes
      'Octahedral',
      'Tetrahedral',
      'Square planar',
      'Linear',
      // Colour
      'd-orbital splitting',
      'Light absorption',
      'Factors affecting colour',
      // Ligand exchange
      'Ligand substitution',
      'Stability constants',
      'Chelate effect',
      // Reactions
      'With NaOH',
      'With NH₃',
      'Precipitates and colours',
      // Catalysis
      'Heterogeneous catalysis',
      'Homogeneous catalysis',
    ],
  },

  // ==========================================
  // MODULE 6: Organic Chemistry and Analysis
  // ==========================================

  // 6.1 Aromatic compounds
  {
    id: 'ocr-alevel-chemistry-aromatics',
    name: 'Aromatic Compounds',
    description: 'Benzene structure and electrophilic substitution',
    icon: '💎',
    color: 'bg-purple-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Structure
      'Benzene structure',
      'Kekulé model',
      'Delocalised model',
      'Stability of benzene',
      // Electrophilic substitution
      'Why substitution not addition',
      'General mechanism',
      // Nitration
      'Nitration conditions',
      'Nitronium ion formation',
      'Mechanism',
      // Friedel-Crafts
      'Acylation',
      'Alkylation',
      'Role of AlCl₃',
      'Mechanisms',
      // Bromination
      'Conditions',
      'Mechanism',
    ],
  },

  // 6.2 Carbonyl compounds
  {
    id: 'ocr-alevel-chemistry-carbonyls',
    name: 'Carbonyl Compounds',
    description: 'Aldehydes and ketones',
    icon: '🫧',
    color: 'bg-sky-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Structure
      'C=O group',
      'Aldehydes vs ketones',
      // Nucleophilic addition
      'Mechanism',
      'Reduction with NaBH₄',
      'Reaction with HCN',
      // Oxidation
      'Oxidation of aldehydes',
      'Tollens\' reagent',
      'Fehling\'s solution',
      // Distinguishing
      'Tests for aldehydes',
      'Tests for ketones',
    ],
  },

  // 6.3 Carboxylic acids and derivatives
  {
    id: 'ocr-alevel-chemistry-carboxylic-acids',
    name: 'Carboxylic Acids and Derivatives',
    description: 'Carboxylic acids, esters, and acyl chlorides',
    icon: '🧫',
    color: 'bg-orange-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Carboxylic acids
      'Structure',
      'Acidity',
      'Reactions with bases',
      'Reactions with carbonates',
      // Esters
      'Esterification',
      'Acid hydrolysis',
      'Base hydrolysis',
      'Uses of esters',
      // Acyl chlorides
      'Structure',
      'High reactivity',
      'With water',
      'With alcohols',
      'With ammonia',
      'With amines',
      'Addition-elimination mechanism',
    ],
  },

  // 6.4 Amines
  {
    id: 'ocr-alevel-chemistry-amines',
    name: 'Amines',
    description: 'Properties and reactions of amines',
    icon: '🔷',
    color: 'bg-indigo-400',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Classification
      'Primary, secondary, tertiary',
      'Naming',
      // Preparation
      'From halogenoalkanes',
      'From nitriles',
      'From nitrobenzene',
      // Basicity
      'Lone pair on nitrogen',
      'Comparing basicity',
      'Aliphatic vs aromatic',
      // Reactions
      'With acids',
      'With acyl chlorides',
    ],
  },

  // 6.5 Polymers
  {
    id: 'ocr-alevel-chemistry-polymers',
    name: 'Polymers',
    description: 'Addition and condensation polymers',
    icon: '🔗',
    color: 'bg-teal-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Addition polymers
      'Addition polymerisation',
      'Monomers',
      'Repeat units',
      // Condensation polymers
      'Condensation polymerisation',
      'Polyesters',
      'Polyamides',
      'Drawing repeat units',
      'Identifying monomers',
      // Properties
      'Comparing polymer types',
      'Biodegradability',
      'Hydrolysis',
    ],
  },

  // 6.6 Amino acids and proteins
  {
    id: 'ocr-alevel-chemistry-amino-acids',
    name: 'Amino Acids, Proteins and DNA',
    description: 'Structure and properties of amino acids and proteins',
    icon: '🧬',
    color: 'bg-rose-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Amino acids
      'Structure',
      'Zwitterions',
      'Isoelectric point',
      'Optical isomerism',
      // Peptides
      'Peptide bond',
      'Dipeptides',
      'Polypeptides',
      // Proteins
      'Primary structure',
      'Secondary structure',
      'Tertiary structure',
      'Quaternary structure',
      // Hydrolysis
      'Acid hydrolysis',
      'Enzyme hydrolysis',
    ],
  },

  // 6.7 Organic synthesis
  {
    id: 'ocr-alevel-chemistry-synthesis',
    name: 'Organic Synthesis',
    description: 'Planning multi-step syntheses',
    icon: '🗺️',
    color: 'bg-green-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Planning
      'Retrosynthetic analysis',
      'Multi-step synthesis',
      'Selecting reagents',
      'Selecting conditions',
      // Stereochemistry
      'Optical isomerism',
      'Chiral centres',
      'Enantiomers',
      'Racemic mixtures',
    ],
  },

  // 6.8 Chromatography and spectroscopy
  {
    id: 'ocr-alevel-chemistry-analysis',
    name: 'Chromatography and Spectroscopy',
    description: 'NMR, mass spectrometry, and chromatography',
    icon: '📡',
    color: 'bg-cyan-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // NMR
      '¹H NMR',
      'Chemical shift',
      'TMS reference',
      'Integration',
      'Spin-spin coupling',
      'n+1 rule',
      'Splitting patterns',
      '¹³C NMR',
      'Number of environments',
      // Combined techniques
      'Using MS, IR, NMR together',
      'Structure determination',
      // Chromatography
      'TLC',
      'Rf values',
      'Gas chromatography',
      'GC-MS',
    ],
  },
];

// Helper functions
export function getOCRALevelChemistryTopicById(id: string): Topic | undefined {
  return ocrALevelChemistryTopics.find(topic => topic.id === id);
}

export function getOCRALevelChemistryTopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  return ocrALevelChemistryTopics.filter(topic =>
    topic.paperRestriction?.includes(`Paper ${paper}`)
  );
}

export function countOCRALevelChemistrySubtopics(): number {
  return ocrALevelChemistryTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
