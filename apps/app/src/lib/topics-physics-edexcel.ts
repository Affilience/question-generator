import { Topic } from '@/types';

/**
 * Edexcel GCSE Physics 1PH0 Specification Topics
 *
 * Aligned to the official Pearson Edexcel specification:
 * - Paper 1 (Topics 1-7): Key Concepts, Motion & Forces, Conservation of Energy,
 *                          Waves, Light & EM Spectrum, Radioactivity, Astronomy
 * - Paper 2 (Topics 1, 8-15): Key Concepts, Energy-Forces Doing Work, Forces & Effects,
 *                              Electricity, Static, Magnetism, EM Induction, Particle Model, Forces & Matter
 *
 * Each paper is:
 * - 1 hour 45 minutes
 * - 100 marks
 * - Written exam
 * - Foundation and Higher tiers
 *
 * (H) = Higher tier only
 *
 * 8 Core Practicals:
 * CP1: Force, mass and acceleration (Topic 2)
 * CP2: Waves in solids and fluids (Topic 4)
 * CP3: Investigate refraction (Topic 5)
 * CP4: Investigate radiation and absorption (Topic 3)
 * CP5: Determine density (Topic 14)
 * CP6: Investigate circuits - I-V characteristics (Topic 10)
 * CP7: Investigate resistance (Topic 10)
 * CP8: Investigate springs/extension (Topic 15)
 */

export const edexcelPhysicsTopics: Topic[] = [
  // ==================== PAPER 1 TOPICS ====================
  {
    id: 'edexcel-physics-key-concepts',
    examBoard: 'edexcel',
    name: 'Key Concepts of Physics',
    description: 'SI units, prefixes, standard form, significant figures, scalars and vectors',
    icon: '📏',
    color: 'bg-slate-500',
    paperRestriction: 'Paper 1 & Paper 2',
    subtopics: [
      // 1.1 Expressing quantities and SI units
      'SI base units (metre, kilogram, second, ampere, kelvin)',
      'Derived units (newton, joule, watt, pascal, ohm, volt)',
      'Converting between units',
      'Metric prefixes (nano, micro, milli, centi, kilo, mega, giga)',
      'Using standard form',
      'Converting between standard form and decimal',
      'Significant figures',
      'Rounding to appropriate significant figures',
      // 1.2 Scalar and vector quantities
      'Scalar quantities (distance, speed, mass, energy, temperature, time)',
      'Vector quantities (displacement, velocity, acceleration, force, momentum)',
      'Representing vectors with arrows',
      'Combining vectors in one dimension',
      'Combining vectors at right angles (H)',
      'Resolving vectors into components (H)',
    ],
  },
  {
    id: 'edexcel-physics-motion-forces',
    examBoard: 'edexcel',
    name: 'Motion and Forces',
    description: 'Speed, velocity, acceleration, Newton\'s laws, momentum and stopping distances',
    icon: '🚗',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 2.1 Describing motion
      'Distance and displacement',
      'Speed and velocity',
      'Calculating speed (speed = distance/time)',
      'Typical speeds (walking, running, cycling, cars, trains, planes, sound)',
      'Distance-time graphs',
      'Calculating speed from distance-time graph gradient',
      'Curved distance-time graphs (changing speed)',
      'Acceleration definition',
      'Acceleration equation (a = Δv/t)',
      'Uniform and non-uniform acceleration',
      'Velocity-time graphs',
      'Gradient of velocity-time graph as acceleration',
      'Area under velocity-time graph as distance',
      'Acceleration due to gravity (g ≈ 10 m/s² or 9.8 m/s²)',
      'Equations of motion (suvat) (H)',
      'v² = u² + 2as (H)',
      // 2.2 Forces
      'Types of forces (gravity, friction, air resistance, tension, normal contact)',
      'Gravitational field strength',
      'Weight equation (W = mg)',
      'Mass vs weight',
      'Resultant force',
      'Free body diagrams',
      'Newton\'s First Law (balanced forces, inertia)',
      'Newton\'s Second Law (F = ma)',
      'Core Practical: Investigate force, mass and acceleration',
      'Newton\'s Third Law (action-reaction pairs)',
      'Inertial mass as resistance to acceleration',
      // 2.3 Motion and safety
      'Thinking distance',
      'Braking distance',
      'Stopping distance = thinking + braking distance',
      'Factors affecting thinking distance (speed, reaction time, tiredness, drugs, alcohol)',
      'Factors affecting braking distance (speed, road conditions, tyre condition, brake condition, mass)',
      'Braking force and deceleration',
      'Large decelerations and dangers',
      // 2.4 Momentum (H)
      'Momentum definition (p = mv) (H)',
      'Conservation of momentum (H)',
      'Momentum calculations in collisions (H)',
      'Force and rate of change of momentum (F = Δp/Δt) (H)',
      'Safety features (crumple zones, seat belts, air bags) (H)',
    ],
  },
  {
    id: 'edexcel-physics-conservation-energy',
    examBoard: 'edexcel',
    name: 'Conservation of Energy',
    description: 'Energy stores, transfers, efficiency and energy resources',
    icon: '⚡',
    color: 'bg-yellow-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 3.1 Conservation of energy
      'Energy stores (kinetic, gravitational potential, elastic, thermal, chemical, nuclear, electrostatic, magnetic)',
      'Energy transfers between stores',
      'Closed systems and conservation of energy',
      'Energy dissipation',
      'Calculating kinetic energy (KE = ½mv²)',
      'Calculating gravitational potential energy (GPE = mgh)',
      'Energy transfer calculations',
      // 3.2 Efficiency and energy resources
      'Useful and wasted energy',
      'Efficiency definition',
      'Efficiency calculations (efficiency = useful output/total input)',
      'Efficiency as decimal or percentage',
      'Ways to improve efficiency',
      'Reducing energy dissipation',
      'Thermal insulation',
      'Core Practical: Investigate thermal insulation and radiation absorption',
      'Non-renewable energy resources (coal, oil, natural gas, nuclear)',
      'Renewable energy resources (solar, wind, hydroelectric, tidal, wave, geothermal, biomass)',
      'Advantages and disadvantages of energy resources',
      'Environmental impact of energy generation',
      'Reliability of energy resources',
      'Comparing power output and efficiency',
      'Global energy demands and trends',
    ],
  },
  {
    id: 'edexcel-physics-waves',
    examBoard: 'edexcel',
    name: 'Waves',
    description: 'Wave properties, transverse and longitudinal waves, sound and seismic waves',
    icon: '🌊',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1 Properties of waves
      'Wave definition (transfer of energy without matter)',
      'Transverse waves',
      'Longitudinal waves',
      'Compressions and rarefactions',
      'Examples of transverse waves (light, water waves, EM waves, S-waves)',
      'Examples of longitudinal waves (sound, ultrasound, P-waves)',
      'Amplitude',
      'Wavelength',
      'Frequency',
      'Period (T = 1/f)',
      'Wave equation (v = fλ)',
      'Core Practical: Investigate wave properties in solids and fluids',
      'Measuring wave speed in water (ripple tank)',
      'Measuring wave speed in solids',
      'Reflection of waves',
      'Law of reflection (angle of incidence = angle of reflection)',
      'Refraction of waves',
      'Refraction due to change in wave speed',
      'Explaining refraction using wave fronts',
      'Sound waves as longitudinal waves',
      'Human hearing range (20 Hz to 20,000 Hz)',
      'Ultrasound (above 20 kHz)',
      'Uses of ultrasound (medical imaging, cleaning, measuring distances)',
      'Seismic waves (P-waves and S-waves)',
      'Using seismic waves to study Earth\'s structure',
      'Evidence for liquid outer core and solid inner core',
    ],
  },
  {
    id: 'edexcel-physics-light-em-spectrum',
    examBoard: 'edexcel',
    name: 'Light and the Electromagnetic Spectrum',
    description: 'Visible light, EM spectrum properties, uses and dangers',
    icon: '🌈',
    color: 'bg-violet-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 5.1 Light and colour
      'Visible light as part of EM spectrum',
      'Colours of visible light (ROYGBIV)',
      'Wavelength and frequency of visible light colours',
      'White light and prisms (dispersion)',
      'Primary colours of light (red, green, blue)',
      'Secondary colours (cyan, magenta, yellow)',
      'Colour filters and absorption',
      'Coloured objects and reflected light',
      // 5.2 The electromagnetic spectrum
      'EM waves as transverse waves',
      'Speed of EM waves in vacuum (3 × 10⁸ m/s)',
      'EM spectrum order (radio, microwave, infrared, visible, UV, X-ray, gamma)',
      'Wavelength and frequency relationships',
      'Higher frequency = shorter wavelength',
      'Higher frequency = more energy',
      'Core Practical: Investigate refraction in glass blocks',
      'Refraction of light at boundaries',
      'Refractive index (n = c/v) (H)',
      'Snell\'s law (n₁sinθ₁ = n₂sinθ₂) (H)',
      'Total internal reflection',
      'Critical angle',
      'Optical fibres and communication',
      // 5.3 Uses and dangers of EM radiation
      'Radio waves (broadcasting, communication)',
      'Microwaves (cooking, mobile phones, satellite communication)',
      'Infrared (heating, thermal imaging, remote controls, optical fibres)',
      'Visible light (vision, photography, optical fibres)',
      'Ultraviolet (fluorescent lamps, security marking, detecting counterfeit notes)',
      'X-rays (medical imaging, airport security)',
      'Gamma rays (sterilisation, cancer treatment, medical tracers)',
      'Ionising radiation (UV, X-rays, gamma)',
      'Dangers of ionising radiation (cell damage, cancer, mutations)',
      'Safety precautions for ionising radiation',
      'Non-ionising radiation hazards (burns, cataracts)',
    ],
  },
  {
    id: 'edexcel-physics-radioactivity',
    examBoard: 'edexcel',
    name: 'Radioactivity',
    description: 'Atomic structure, radioactive decay, half-life and nuclear energy',
    icon: '☢️',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 6.1 Atoms and ionising radiation
      'Atomic structure (protons, neutrons, electrons)',
      'Relative masses and charges of subatomic particles',
      'Atomic number (proton number)',
      'Mass number (nucleon number)',
      'Calculating number of neutrons',
      'Isotopes definition',
      'Development of atomic model (Dalton, Thomson, Rutherford, Bohr)',
      'Alpha scattering experiment',
      'Evidence for nuclear model',
      'Radioactive decay as random process',
      'Activity and count rate',
      'Alpha radiation (α) properties',
      'Beta radiation (β) properties',
      'Gamma radiation (γ) properties',
      'Penetrating power comparison',
      'Ionising ability comparison',
      'Range in air comparison',
      'Nuclear equations for alpha decay',
      'Nuclear equations for beta decay',
      'Changes in mass number and atomic number',
      'Background radiation sources',
      'Natural sources (rocks, radon, cosmic rays, food)',
      'Man-made sources (medical, nuclear industry)',
      // 6.2 Half-life
      'Half-life definition',
      'Measuring half-life from graphs',
      'Half-life calculations',
      'Activity after multiple half-lives',
      'Applications based on half-life',
      'Radioactive dating',
      // 6.3 Hazards and uses of radioactive emissions
      'Contamination vs irradiation',
      'Hazards of contamination',
      'Hazards of irradiation',
      'Safety precautions (lead shielding, distance, time)',
      'Medical uses (tracers, radiotherapy)',
      'Industrial uses (thickness monitoring, sterilisation)',
      'Smoke detectors',
      // 6.4 Nuclear fission and fusion
      'Nuclear fission definition',
      'Fissile materials (uranium-235, plutonium-239)',
      'Neutron-induced fission',
      'Chain reactions',
      'Controlled chain reactions in reactors',
      'Nuclear reactors (moderator, control rods)',
      'Nuclear fusion definition',
      'Conditions for fusion',
      'Fusion in stars',
      'Advantages and disadvantages of nuclear power',
    ],
  },
  {
    id: 'edexcel-physics-astronomy',
    examBoard: 'edexcel',
    name: 'Astronomy',
    description: 'Solar system, life cycle of stars, red-shift and the expanding universe',
    icon: '🚀',
    color: 'bg-gray-700',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 7.1 The solar system and orbits
      'Structure of the solar system',
      'The Sun as a star',
      'Planets (inner rocky, outer gas giants)',
      'Dwarf planets',
      'Moons (natural satellites)',
      'Asteroids',
      'Comets',
      'Orbital motion and gravity',
      'Gravitational field strength on different bodies',
      'g values for different planets',
      'Circular orbits',
      'Relationship between orbital speed and radius',
      'Relationship between orbital period and radius',
      // 7.2 Life cycle of stars
      'Nebula (gas and dust cloud)',
      'Protostar formation',
      'Main sequence star',
      'Nuclear fusion of hydrogen',
      'Balance of forces (gravitational vs radiation pressure)',
      'Red giant stage (Sun-like stars)',
      'Planetary nebula',
      'White dwarf',
      'Red supergiant (massive stars)',
      'Supernova',
      'Neutron star',
      'Black hole',
      'Heavy element formation in supernovae',
      // 7.3 Red-shift and the Big Bang
      'Doppler effect for sound',
      'Red-shift of light from galaxies',
      'Blue-shift for approaching objects',
      'Red-shift as evidence for expanding universe',
      'Greater distance = greater red-shift',
      'Hubble\'s law (v = Hd) (H)',
      'Big Bang theory',
      'Cosmic microwave background radiation (CMBR)',
      'CMBR as evidence for Big Bang',
      'Age of the universe',
      'Dark matter and dark energy (H)',
    ],
  },
  // ==================== PAPER 2 TOPICS ====================
  {
    id: 'edexcel-physics-energy-forces-work',
    examBoard: 'edexcel',
    name: 'Energy: Forces Doing Work',
    description: 'Work done, power, kinetic and gravitational potential energy',
    icon: '💪',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 8.1 Work, power and efficiency
      'Work done definition',
      'Work done equation (W = Fs)',
      'Work done against friction',
      'Energy transfer through work',
      'Work done and energy calculations',
      'Power definition (rate of doing work)',
      'Power equation (P = W/t)',
      'Power equation (P = E/t)',
      'Power equation (P = Fv) (H)',
      'Efficiency calculations using power',
      // 8.2 Energy transfers
      'Kinetic energy (KE = ½mv²)',
      'Gravitational potential energy (GPE = mgh)',
      'Energy transfers between KE and GPE',
      'Conservation of energy in mechanical systems',
      'Terminal velocity and energy transfers',
      'Work done against resistive forces',
    ],
  },
  {
    id: 'edexcel-physics-forces-effects',
    examBoard: 'edexcel',
    name: 'Forces and their Effects',
    description: 'Turning forces, moments, levers, gears and centre of mass',
    icon: '⚖️',
    color: 'bg-amber-600',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 9.1 Moments
      'Moment of a force (turning effect)',
      'Moment equation (M = Fd)',
      'Perpendicular distance from pivot',
      'Principle of moments',
      'Equilibrium (clockwise = anticlockwise moments)',
      'Calculating unknown forces using moments',
      'Calculating unknown distances using moments',
      // 9.2 Levers and gears
      'Levers as force multipliers',
      'Simple lever systems (1st, 2nd, 3rd class)',
      'Mechanical advantage',
      'Gears and gear ratios',
      'Gears as force multipliers',
      'Direction of rotation in gear systems',
      // 9.3 Centre of mass
      'Centre of mass definition',
      'Finding centre of mass experimentally',
      'Stability and centre of mass',
      'Effect of base area on stability',
      'Toppling and stability',
    ],
  },
  {
    id: 'edexcel-physics-electricity-circuits',
    examBoard: 'edexcel',
    name: 'Electricity and Circuits',
    description: 'Current, voltage, resistance, Ohm\'s law, series and parallel circuits',
    icon: '🔌',
    color: 'bg-blue-600',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 10.1 Current and circuit components
      'Electric current as flow of charge',
      'Charge equation (Q = It)',
      'Conventional current direction',
      'Electron flow direction',
      'Circuit symbols',
      'Drawing circuit diagrams',
      'Potential difference (voltage)',
      'Resistance definition',
      'Ohm\'s law (V = IR)',
      'Calculating current, voltage, resistance',
      'Factors affecting resistance (length, cross-sectional area, material, temperature)',
      'Core Practical: Investigate I-V characteristics',
      'I-V graph for resistor (straight line through origin)',
      'I-V graph for filament lamp (curved)',
      'I-V graph for diode (one direction only)',
      'Core Practical: Investigate resistance of a wire',
      // 10.2 Series and parallel circuits
      'Series circuit rules',
      'Current same throughout series circuit',
      'Voltage shared in series (adds up)',
      'Total resistance in series (R = R₁ + R₂ + R₃)',
      'Parallel circuit rules',
      'Voltage same across parallel branches',
      'Current splits at junctions',
      'Total current = sum of branch currents',
      'Resistance in parallel (less than smallest)',
      'Calculating parallel resistance (1/R = 1/R₁ + 1/R₂) (H)',
      // 10.3 Energy and power in circuits
      'Energy transfer in circuits',
      'Power equations (P = IV, P = I²R, P = V²/R)',
      'Energy equation (E = Pt)',
      'Energy equation (E = QV)',
      'Cost of electricity calculations',
      'Kilowatt-hours (kWh)',
      // 10.4 Mains electricity
      'AC vs DC',
      'UK mains supply (230V, 50Hz)',
      'Three-core cable (live, neutral, earth)',
      'Live wire (brown) - 230V alternating',
      'Neutral wire (blue) - completes circuit, ~0V',
      'Earth wire (green/yellow) - safety',
      'Fuses and circuit breakers',
      'How fuses protect circuits',
      'Dangers of mains electricity',
    ],
  },
  {
    id: 'edexcel-physics-static-electricity',
    examBoard: 'edexcel',
    name: 'Static Electricity',
    description: 'Electric charge, electric fields, and applications of static electricity',
    icon: '⚡',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 11.1 Static charge
      'Static electricity from friction',
      'Electron transfer between materials',
      'Positive and negative charges',
      'Conductors and insulators',
      'Like charges repel',
      'Unlike charges attract',
      'Earthing and discharge',
      // 11.2 Electric fields
      'Electric field definition',
      'Electric field around point charges',
      'Electric field between parallel plates',
      'Field lines and their direction',
      'Field strength and line spacing',
      // 11.3 Uses and dangers of static electricity
      'Dangers of static (sparks, fires, explosions)',
      'Electrostatic discharge precautions',
      'Uses of static electricity',
      'Electrostatic precipitators',
      'Spray painting',
      'Photocopiers',
      'Inkjet printers',
    ],
  },
  {
    id: 'edexcel-physics-magnetism-motor-effect',
    examBoard: 'edexcel',
    name: 'Magnetism and the Motor Effect',
    description: 'Magnetic fields, electromagnets, motors and loudspeakers',
    icon: '🧲',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 12.1 Magnetism
      'Magnetic poles (north and south)',
      'Like poles repel, unlike attract',
      'Permanent magnets and induced magnetism',
      'Magnetic materials (iron, steel, cobalt, nickel)',
      'Hard and soft magnetic materials',
      'Magnetic field definition',
      'Magnetic field lines',
      'Field patterns around bar magnets',
      'Earth\'s magnetic field',
      // 12.2 Electromagnets
      'Magnetic field around current-carrying wire',
      'Right-hand grip rule',
      'Magnetic field of a solenoid',
      'Increasing electromagnet strength',
      'Uses of electromagnets (scrapyard crane, circuit breaker)',
      // 12.3 Motor effect
      'Force on current-carrying wire in magnetic field',
      'Fleming\'s left-hand rule',
      'Factors affecting motor effect force',
      'Force equation (F = BIL) (H)',
      'DC motor construction',
      'Split-ring commutator function',
      'How DC motors work',
      'Factors affecting motor speed and force',
      'Loudspeakers and headphones',
    ],
  },
  {
    id: 'edexcel-physics-electromagnetic-induction',
    examBoard: 'edexcel',
    name: 'Electromagnetic Induction',
    description: 'Generators, transformers and the National Grid',
    icon: '🔄',
    color: 'bg-teal-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 13.1 Electromagnetic induction
      'Inducing potential difference',
      'Factors affecting induced potential difference',
      'Moving magnet into/out of coil',
      'Moving wire through magnetic field',
      'Generator effect',
      'AC generators (alternators)',
      'Structure of AC generator',
      'Slip rings',
      'Output of AC generator',
      'DC generators',
      'Comparing AC and DC generators',
      'Microphones',
      // 13.2 Transformers
      'Transformer construction',
      'Primary and secondary coils',
      'Iron core',
      'How transformers work',
      'Step-up transformers',
      'Step-down transformers',
      'Transformer equation (Vp/Vs = Np/Ns)',
      'Transformer efficiency (H)',
      'Power equation (VpIp = VsIs) (H)',
      'National Grid',
      'Why high voltage transmission is efficient',
      'Step-up and step-down transformers in the grid',
      'Reducing power loss (P = I²R)',
    ],
  },
  {
    id: 'edexcel-physics-particle-model',
    examBoard: 'edexcel',
    name: 'Particle Model',
    description: 'Density, states of matter, internal energy, pressure and changes of state',
    icon: '🔬',
    color: 'bg-pink-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 14.1 Heating matter
      'Three states of matter (solid, liquid, gas)',
      'Particle arrangement in solids',
      'Particle arrangement in liquids',
      'Particle arrangement in gases',
      'Particle motion in each state',
      'Density definition (mass per unit volume)',
      'Density equation (ρ = m/V)',
      'Core Practical: Determine density of regular and irregular solids',
      'Measuring density of liquids',
      'Internal energy definition',
      'Kinetic and potential energy of particles',
      'Temperature and average kinetic energy',
      'Specific heat capacity definition',
      'Specific heat capacity equation (E = mcΔθ)',
      'Changes of state (melting, freezing, boiling, condensing, sublimation)',
      'Conservation of mass during state changes',
      'Specific latent heat definition',
      'Latent heat of fusion',
      'Latent heat of vaporisation',
      'Latent heat equation (E = mL)',
      'Heating curves',
      'Why temperature stays constant during state change',
      // 14.2 Pressure
      'Pressure in gases from particle collisions',
      'Factors affecting gas pressure',
      'Temperature and pressure relationship',
      'Volume and pressure relationship',
      'Pressure and volume at constant temperature (pV = constant) (H)',
      'Kelvin temperature scale (H)',
      'Absolute zero (H)',
      'Gas laws calculations (H)',
      'Atmospheric pressure',
      'Variation of atmospheric pressure with altitude',
    ],
  },
  {
    id: 'edexcel-physics-forces-matter',
    examBoard: 'edexcel',
    name: 'Forces and Matter',
    description: 'Hooke\'s law, springs, elastic potential energy and pressure in fluids',
    icon: '🔧',
    color: 'bg-red-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 15.1 Forces and elasticity
      'Elastic deformation',
      'Plastic deformation',
      'Extension and compression',
      'Hooke\'s law (F = ke)',
      'Spring constant',
      'Limit of proportionality',
      'Elastic limit',
      'Core Practical: Investigate force and extension of springs',
      'Force-extension graphs',
      'Linear and non-linear regions',
      'Work done in stretching',
      'Elastic potential energy (E = ½ke²)',
      'Elastic potential energy calculations',
      // 15.2 Pressure in fluids
      'Pressure definition (force per unit area)',
      'Pressure equation (P = F/A)',
      'Pressure in liquids',
      'Pressure increases with depth',
      'Pressure equation for liquids (P = hρg)',
      'Upthrust and floating',
      'Archimedes\' principle',
      'Hydraulic systems',
      'Force multiplication in hydraulics',
      'Atmospheric pressure',
      'Why atmospheric pressure varies with height',
      'Pressure difference and fluid flow',
    ],
  },
];

/**
 * Get a specific Edexcel GCSE Physics topic by ID
 */
export function getEdexcelPhysicsTopicById(id: string): Topic | undefined {
  return edexcelPhysicsTopics.find((topic) => topic.id === id);
}

/**
 * Get topics by paper number
 */
export function getEdexcelPhysicsTopicsByPaper(paper: 1 | 2): Topic[] {
  if (paper === 1) {
    return edexcelPhysicsTopics.filter(
      (t) => t.id === 'edexcel-physics-key-concepts' ||
        t.id === 'edexcel-physics-motion-forces' ||
        t.id === 'edexcel-physics-conservation-energy' ||
        t.id === 'edexcel-physics-waves' ||
        t.id === 'edexcel-physics-light-em-spectrum' ||
        t.id === 'edexcel-physics-radioactivity' ||
        t.id === 'edexcel-physics-astronomy'
    );
  }
  // Paper 2 includes Key Concepts plus Topics 8-15
  return edexcelPhysicsTopics.filter(
    (t) => t.id === 'edexcel-physics-key-concepts' ||
      t.id === 'edexcel-physics-energy-forces-work' ||
      t.id === 'edexcel-physics-forces-effects' ||
      t.id === 'edexcel-physics-electricity-circuits' ||
      t.id === 'edexcel-physics-static-electricity' ||
      t.id === 'edexcel-physics-magnetism-motor-effect' ||
      t.id === 'edexcel-physics-electromagnetic-induction' ||
      t.id === 'edexcel-physics-particle-model' ||
      t.id === 'edexcel-physics-forces-matter'
  );
}

/**
 * Count all subtopics across all topics
 */
export function countEdexcelPhysicsSubtopics(): number {
  return edexcelPhysicsTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
