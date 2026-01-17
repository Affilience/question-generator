// Edexcel A-Level Chemistry (9CH0) Topics
// Complete specification coverage based on official Pearson Edexcel specification
// Paper 1: Advanced Inorganic + Physical Chemistry (90 marks, 1h45m, 30%)
// Paper 2: Advanced Organic + Physical Chemistry (90 marks, 1h45m, 30%)
// Paper 3: General + Practical Principles (120 marks, 2h30m, 40%)

import { Topic } from '@/types';

export const edexcelALevelChemistryTopics: Topic[] = [
  // ==========================================
  // TOPICS 1-9: Year 1 (AS) Content
  // ==========================================

  // Topic 1: Atomic Structure and the Periodic Table
  {
    id: 'atomic-structure',
    name: 'Atomic Structure and the Periodic Table',
    description: 'Atomic models, electron configuration, and periodic trends',
    icon: '⚛️',
    color: 'bg-blue-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Atomic structure
      'Protons, neutrons and electrons',
      'Atomic number and mass number',
      'Isotopes',
      'Mass spectrometry',
      'Calculating relative atomic mass',
      // Electron configuration
      'Shells, subshells and orbitals',
      's, p, d orbital shapes',
      'Electron configuration notation (1s² 2s² etc.)',
      'Electron configuration of ions',
      'Aufbau principle',
      'Hund\'s rule',
      'Pauli exclusion principle',
      // Ionisation energy
      'First ionisation energy',
      'Successive ionisation energies',
      'Trends in ionisation energy',
      'Evidence for electron shells from ionisation energies',
      // Periodic table
      's, p, d and f blocks',
      'Periodicity',
      'Trends across Period 3',
      'Atomic radius trends',
      'Electronegativity trends',
    ],
  },

  // Topic 2: Bonding and Structure
  {
    id: 'bonding',
    name: 'Bonding and Structure',
    description: 'Types of bonding, shapes of molecules, and intermolecular forces',
    icon: '🔗',
    color: 'bg-purple-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // Ionic bonding
      'Ionic bonding formation',
      'Ionic lattice structure',
      'Properties of ionic compounds',
      'Factors affecting lattice enthalpy',
      // Covalent bonding
      'Covalent bonding formation',
      'Single, double and triple bonds',
      'Dative (coordinate) covalent bonding',
      'Bond length and bond energy',
      // Metallic bonding
      'Metallic bonding model',
      'Properties of metals',
      'Alloys',
      // Shapes of molecules (VSEPR)
      'Electron pair repulsion theory',
      'Linear molecules',
      'Trigonal planar molecules',
      'Tetrahedral molecules',
      'Octahedral molecules',
      'Effect of lone pairs on bond angles',
      'Pyramidal and bent shapes',
      // Electronegativity and polarity
      'Electronegativity',
      'Polar bonds',
      'Polar and non-polar molecules',
      // Intermolecular forces
      'London dispersion forces',
      'Permanent dipole-dipole forces',
      'Hydrogen bonding',
      'Effect on physical properties',
      // Giant structures
      'Giant ionic lattices',
      'Giant covalent structures',
      'Diamond, graphite, graphene',
      'Silicon dioxide',
    ],
  },

  // Topic 3: Redox I
  {
    id: 'redox1',
    name: 'Redox I',
    description: 'Oxidation states, redox reactions, and ionic equations',
    icon: '⚡',
    color: 'bg-orange-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // Oxidation states
      'Oxidation state rules',
      'Assigning oxidation states',
      'Oxidation states in compounds',
      'Roman numeral nomenclature',
      // Redox reactions
      'Oxidation and reduction definitions',
      'Electron transfer in redox',
      'Oxidising and reducing agents',
      // Half-equations
      'Writing ionic half-equations',
      'Balancing half-equations',
      'Combining half-equations',
      // Redox reactions
      'Metal-metal ion redox',
      'Halogen displacement reactions',
    ],
  },

  // Topic 4: Inorganic Chemistry and the Periodic Table
  {
    id: 'inorganic1',
    name: 'Inorganic Chemistry and the Periodic Table',
    description: 'Group 2 and Group 7 chemistry',
    icon: '📊',
    color: 'bg-indigo-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Group 2
      'Group 2 physical properties',
      'Reactions with water',
      'Reactions with oxygen',
      'Trend in reactivity down Group 2',
      'Solubility of hydroxides',
      'Solubility of sulfates',
      'Uses of Group 2 compounds',
      'Thermal stability of carbonates and nitrates',
      // Group 7 (Halogens)
      'Physical properties of halogens',
      'Trend in electronegativity',
      'Trend in oxidising ability',
      'Displacement reactions',
      'Halide ion tests',
      'Silver nitrate test',
      'Reactions of halide ions with sulfuric acid',
      'Uses of chlorine',
      'Disproportionation of chlorine',
    ],
  },

  // Topic 5: Formulae, Equations and Amounts of Substance
  {
    id: 'amounts',
    name: 'Formulae, Equations and Amounts of Substance',
    description: 'Moles, concentration, gas volumes, and yield calculations',
    icon: '⚖️',
    color: 'bg-green-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 2, Paper 3',
    subtopics: [
      // Moles
      'The mole and Avogadro constant',
      'Molar mass calculations',
      'Moles from mass: n = m/M',
      // Gas volumes
      'Molar volume of gases',
      'Ideal gas equation: pV = nRT',
      'Gas calculations',
      // Concentration
      'Concentration in mol dm⁻³',
      'Concentration in g dm⁻³',
      'Dilution calculations',
      // Formulae
      'Empirical formula calculations',
      'Molecular formula from empirical formula',
      'Water of crystallisation',
      // Equations and stoichiometry
      'Balanced equations',
      'Reacting mass calculations',
      'Limiting reagent',
      // Yield
      'Percentage yield',
      'Atom economy',
      // Titrations
      'Acid-base titrations',
      'Titration calculations',
    ],
  },

  // Topic 6: Organic Chemistry I
  {
    id: 'organic1',
    name: 'Organic Chemistry I',
    description: 'Alkanes, alkenes, halogenoalkanes, and alcohols',
    icon: '🧬',
    color: 'bg-emerald-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Introduction
      'IUPAC nomenclature',
      'Structural, displayed and skeletal formulae',
      'Homologous series',
      'Functional groups',
      'Isomerism (structural)',
      'E/Z stereoisomerism',
      // Alkanes
      'Properties of alkanes',
      'Combustion reactions',
      'Free radical substitution mechanism',
      'Initiation, propagation, termination',
      // Alkenes
      'C=C double bond',
      'Electrophilic addition mechanism',
      'Addition of hydrogen',
      'Addition of halogens',
      'Addition of hydrogen halides',
      'Markovnikov\'s rule',
      'Addition polymerisation',
      // Halogenoalkanes
      'Classification (primary, secondary, tertiary)',
      'Nucleophilic substitution',
      'Hydrolysis reactions',
      'Rates of hydrolysis',
      'Elimination reactions',
      'Ozone depletion by CFCs',
      // Alcohols
      'Classification of alcohols',
      'Oxidation of alcohols',
      'Primary → aldehyde → carboxylic acid',
      'Secondary → ketone',
      'Tertiary alcohols',
      'Elimination (dehydration)',
      'Esterification',
    ],
  },

  // Topic 7: Modern Analytical Techniques I
  {
    id: 'analysis1',
    name: 'Modern Analytical Techniques I',
    description: 'Mass spectrometry and infrared spectroscopy',
    icon: '🔬',
    color: 'bg-amber-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Mass spectrometry
      'Mass spectrometer operation',
      'Molecular ion peak (M+)',
      'Fragmentation patterns',
      'Identifying molecular structure',
      // Infrared spectroscopy
      'IR absorption by bonds',
      'Characteristic absorptions',
      'O-H stretch (broad)',
      'C=O stretch',
      'C-H stretch',
      'Fingerprint region',
      'Identifying functional groups',
    ],
  },

  // Topic 8: Energetics I
  {
    id: 'energetics1',
    name: 'Energetics I',
    description: 'Enthalpy changes, Hess\'s law, and bond enthalpies',
    icon: '🔥',
    color: 'bg-red-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Enthalpy changes
      'Exothermic and endothermic reactions',
      'Standard enthalpy changes',
      'Enthalpy of formation ΔfH°',
      'Enthalpy of combustion ΔcH°',
      'Enthalpy of neutralisation',
      // Calorimetry
      'q = mcΔT',
      'Enthalpy calculations from calorimetry',
      // Hess\'s Law
      'Hess\'s Law statement',
      'Enthalpy cycles',
      'Calculating ΔrH from ΔfH',
      'Calculating ΔrH from ΔcH',
      // Bond enthalpies
      'Bond enthalpy definition',
      'Mean bond enthalpies',
      'ΔH from bond enthalpies',
    ],
  },

  // Topic 9: Kinetics I
  {
    id: 'kinetics1',
    name: 'Kinetics I',
    description: 'Rates of reaction and collision theory',
    icon: '⏱️',
    color: 'bg-yellow-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Rates
      'Measuring rate of reaction',
      'Rate = Δ[concentration]/Δtime',
      // Collision theory
      'Collision theory',
      'Activation energy',
      'Effect of concentration',
      'Effect of temperature',
      'Effect of surface area',
      'Effect of catalysts',
      // Maxwell-Boltzmann
      'Maxwell-Boltzmann distribution',
      'Effect of temperature on distribution',
      'Catalysts and activation energy',
    ],
  },

  // ==========================================
  // TOPICS 10-19: Year 2 (A2) Content
  // ==========================================

  // Topic 10: Equilibrium I
  {
    id: 'equilibrium1',
    name: 'Equilibrium I',
    description: 'Dynamic equilibrium, Kc, and Le Chatelier\'s principle',
    icon: '⚖️',
    color: 'bg-cyan-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Dynamic equilibrium
      'Reversible reactions',
      'Dynamic equilibrium definition',
      'Closed systems',
      // Le Chatelier\'s principle
      'Le Chatelier\'s principle',
      'Effect of concentration',
      'Effect of pressure',
      'Effect of temperature',
      'Industrial applications',
      // Kc
      'Equilibrium constant Kc',
      'Writing Kc expressions',
      'Calculating Kc',
      'Units of Kc',
    ],
  },

  // Topic 11: Equilibrium II
  {
    id: 'equilibrium2',
    name: 'Equilibrium II',
    description: 'Kp and gas phase equilibria',
    icon: '💨',
    color: 'bg-gray-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Kp
      'Partial pressure',
      'Mole fraction',
      'Kp expressions',
      'Calculating Kp',
      'Effect of pressure on equilibrium',
      'Effect of temperature on Kp',
    ],
  },

  // Topic 12: Acid-Base Equilibria
  {
    id: 'acids-bases',
    name: 'Acid-Base Equilibria',
    description: 'pH, Ka, buffers, and titration curves',
    icon: '🧪',
    color: 'bg-pink-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Brønsted-Lowry theory
      'Acids and bases',
      'Proton donors and acceptors',
      'Conjugate acid-base pairs',
      // Strong and weak acids
      'Strong acids',
      'Weak acids',
      'Ka and acid strength',
      'pKa',
      // pH
      'pH definition',
      'pH of strong acids',
      'pH of weak acids',
      'pH of strong bases',
      'Ionic product of water Kw',
      // Buffer solutions
      'Buffer definition',
      'How buffers work',
      'Buffer calculations',
      'Henderson-Hasselbalch equation',
      // Titration curves
      'pH curves',
      'Strong acid-strong base',
      'Weak acid-strong base',
      'Indicator selection',
      'Half-equivalence point',
    ],
  },

  // Topic 13: Energetics II
  {
    id: 'energetics2',
    name: 'Energetics II',
    description: 'Born-Haber cycles, entropy, and Gibbs free energy',
    icon: '🌡️',
    color: 'bg-red-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Born-Haber cycles
      'Lattice enthalpy',
      'Enthalpy of atomisation',
      'Ionisation energy in Born-Haber',
      'Electron affinity',
      'Constructing Born-Haber cycles',
      'Calculating lattice enthalpy',
      // Enthalpy of solution
      'Enthalpy of solution',
      'Enthalpy of hydration',
      'Dissolving ionic compounds',
      // Entropy
      'Entropy definition',
      'Standard entropy',
      'Entropy change in reactions',
      'Entropy and disorder',
      // Gibbs free energy
      'Gibbs free energy',
      'ΔG = ΔH - TΔS',
      'Spontaneity',
      'Effect of temperature',
    ],
  },

  // Topic 14: Redox II
  {
    id: 'redox2',
    name: 'Redox II',
    description: 'Electrode potentials and electrochemical cells',
    icon: '🔋',
    color: 'bg-blue-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Electrode potentials
      'Standard electrode potential',
      'Standard hydrogen electrode',
      'Measuring electrode potentials',
      'Electrochemical series',
      // Electrochemical cells
      'Constructing cells',
      'Cell EMF calculations',
      'Cell diagrams',
      // Predicting reactions
      'Using E° to predict reactions',
      'Limitations of predictions',
      // Fuel cells
      'Hydrogen fuel cells',
      'Advantages and disadvantages',
    ],
  },

  // Topic 15: Transition Metals
  {
    id: 'transition-metals',
    name: 'Transition Metals',
    description: 'Properties, complexes, and reactions of transition metals',
    icon: '🔩',
    color: 'bg-slate-500',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Properties
      'Definition of transition metal',
      'Electron configurations',
      'Variable oxidation states',
      'Coloured compounds',
      'Catalytic activity',
      // Complex ions
      'Ligands',
      'Coordination number',
      'Monodentate ligands',
      'Bidentate ligands (en, ethanedioate)',
      'Multidentate ligands (EDTA)',
      // Shapes
      'Octahedral complexes',
      'Tetrahedral complexes',
      'Square planar complexes',
      // Colour
      'd-orbital splitting',
      'Colour and electron transitions',
      'Effect of ligand on colour',
      'Effect of oxidation state',
      // Ligand exchange
      'Ligand substitution',
      'Stability constants',
      'Chelate effect',
      // Reactions
      'Reactions with NaOH',
      'Reactions with NH₃',
      'Precipitation reactions',
      // Catalysis
      'Heterogeneous catalysis',
      'Homogeneous catalysis',
      'Variable oxidation states in catalysis',
    ],
  },

  // Topic 16: Kinetics II
  {
    id: 'kinetics2',
    name: 'Kinetics II',
    description: 'Rate equations, orders of reaction, and mechanisms',
    icon: '📈',
    color: 'bg-yellow-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Rate equations
      'Rate equations',
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
      'Activation energy from graphs',
      'ln k vs 1/T plots',
      // Mechanisms
      'Rate-determining step',
      'Molecularity',
      'Predicting rate equations from mechanisms',
    ],
  },

  // Topic 17: Organic Chemistry II
  {
    id: 'organic2',
    name: 'Organic Chemistry II',
    description: 'Optical isomerism, carbonyl compounds, and carboxylic acids',
    icon: '🧫',
    color: 'bg-emerald-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Optical isomerism
      'Chiral centres',
      'Enantiomers',
      'Optical activity',
      'Racemic mixtures',
      // Aldehydes and ketones
      'Carbonyl group structure',
      'Nucleophilic addition mechanism',
      'Reduction with NaBH₄',
      'Reaction with HCN',
      'Distinguishing aldehydes and ketones',
      'Tollens\' reagent',
      'Fehling\'s solution',
      // Carboxylic acids
      'Acidity of carboxylic acids',
      'Reactions with bases',
      'Reactions with carbonates',
      // Esters
      'Esterification',
      'Acid hydrolysis of esters',
      'Base hydrolysis (saponification)',
      'Uses of esters',
      // Acyl chlorides
      'Reactions of acyl chlorides',
      'With water, alcohols, ammonia, amines',
      'Addition-elimination mechanism',
    ],
  },

  // Topic 18: Organic Chemistry III
  {
    id: 'organic3',
    name: 'Organic Chemistry III',
    description: 'Aromatic chemistry, amines, polymers, and synthesis',
    icon: '💎',
    color: 'bg-purple-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Aromatic chemistry
      'Benzene structure',
      'Delocalised model',
      'Stability of benzene',
      'Electrophilic substitution',
      'Nitration mechanism',
      'Friedel-Crafts acylation',
      'Friedel-Crafts alkylation',
      // Amines
      'Classification of amines',
      'Preparation of amines',
      'Basicity of amines',
      'Reactions of amines',
      // Polymers
      'Addition polymerisation',
      'Condensation polymerisation',
      'Polyesters',
      'Polyamides',
      'Drawing repeat units',
      'Identifying monomers',
      'Biodegradability',
      // Amino acids and proteins
      'Amino acid structure',
      'Zwitterions',
      'Peptide bonds',
      'Protein structure',
      // Organic synthesis
      'Planning synthetic routes',
      'Multi-step synthesis',
      'Functional group interconversions',
    ],
  },

  // Topic 19: Modern Analytical Techniques II
  {
    id: 'analysis2',
    name: 'Modern Analytical Techniques II',
    description: 'NMR spectroscopy and chromatography',
    icon: '📡',
    color: 'bg-cyan-600',
    examBoard: 'edexcel',
    qualification: 'a-level',
    subject: 'chemistry',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // ¹H NMR
      'Principle of NMR',
      'Chemical shift',
      'TMS reference',
      'Number of peaks',
      'Peak integration',
      'Spin-spin coupling',
      'n+1 rule',
      'Splitting patterns',
      'Interpreting ¹H NMR',
      // ¹³C NMR
      '¹³C NMR',
      'Number of carbon environments',
      'Chemical shifts in ¹³C NMR',
      // Combined techniques
      'Using multiple spectra',
      'Structure determination',
      // Chromatography
      'Paper chromatography',
      'TLC',
      'Rf values',
      'Gas chromatography',
      'GC-MS',
    ],
  },
];

// Helper functions
export function getEdexcelALevelChemistryTopicById(id: string): Topic | undefined {
  return edexcelALevelChemistryTopics.find(topic => topic.id === id);
}

export function getEdexcelALevelChemistryTopicsByPaper(paper: 1 | 2 | 3): Topic[] {
  return edexcelALevelChemistryTopics.filter(topic =>
    topic.paperRestriction?.includes(`Paper ${paper}`)
  );
}

export function countEdexcelALevelChemistrySubtopics(): number {
  return edexcelALevelChemistryTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
