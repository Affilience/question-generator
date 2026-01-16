import { Topic } from '@/types';

/**
 * AQA GCSE Physics 8463 Specification Topics
 *
 * Aligned to the official AQA specification:
 * - Paper 1 (Topics 1-4): Energy, Electricity, Particle Model, Atomic Structure
 * - Paper 2 (Topics 5-8): Forces, Waves, Magnetism, Space Physics
 *
 * Each paper is:
 * - 1 hour 45 minutes
 * - 100 marks
 * - Written exam
 * - Higher and Foundation tiers
 *
 * (H) = Higher tier only
 * (T) = Triple Science only (not Combined Science)
 *
 * Required Practicals:
 * Paper 1: RP1 (Specific Heat Capacity), RP2 (Thermal Insulation - T),
 *          RP3 (Resistance), RP4 (I-V Characteristics), RP5 (Density)
 * Paper 2: RP6 (Light - T), RP7 (Force and Extension), RP8 (Acceleration),
 *          RP9 (Waves), RP10 (Radiation and Absorption)
 */

export const aqaPhysicsTopics: Topic[] = [
  // ==================== PAPER 1 TOPICS ====================
  {
    id: 'physics-energy',
    examBoard: 'aqa',
    name: 'Energy',
    description: 'Energy stores, transfers, conservation, efficiency and national energy resources',
    icon: '⚡',
    color: 'bg-yellow-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1.1 Energy changes in a system
      // 4.1.1.1 Energy stores and systems
      'Energy stores (kinetic, thermal, chemical, elastic, gravitational, nuclear, magnetic, electrostatic)',
      'Energy transfers between stores',
      'Work done as energy transfer',
      'Closed systems and energy conservation',
      // 4.1.1.2 Changes in energy
      'Kinetic energy calculations (KE = ½mv²)',
      'Elastic potential energy calculations (EPE = ½ke²)',
      'Gravitational potential energy calculations (GPE = mgh)',
      'Changes in energy between stores',
      // 4.1.1.3 Energy changes in systems
      'Specific heat capacity',
      'Calculating energy change for temperature change (E = mcΔθ)',
      'Required Practical 1: Investigating specific heat capacity',
      'Power as rate of energy transfer (P = E/t)',
      'Power calculations (P = W/t)',
      // 4.1.2 Conservation and dissipation of energy
      // 4.1.2.1 Energy transfers in a system
      'Energy dissipation',
      'Energy transfer by heating',
      'Reducing unwanted energy transfers',
      'Thermal conductivity of materials',
      'Required Practical 2: Thermal insulation investigation (T)',
      // 4.1.2.2 Efficiency
      'Calculating efficiency',
      'Efficiency as a decimal or percentage',
      'Increasing efficiency of energy transfers',
      'Wasted energy and dissipation',
      // 4.1.3 National and global energy resources
      // 4.1.3.1 Energy demands
      'Main energy resources',
      'Renewable energy resources (solar, wind, hydroelectric, tidal, wave, geothermal, biomass)',
      'Non-renewable energy resources (fossil fuels, nuclear)',
      'Advantages and disadvantages of energy resources',
      'Environmental impacts of energy generation',
      'Energy resource reliability and cost',
      'Social and economic considerations',
      'Trends in energy resource use',
      'Comparing power output of different resources',
    ],
  },
  {
    id: 'physics-electricity',
    examBoard: 'aqa',
    name: 'Electricity',
    description: 'Current, circuits, resistance, domestic electricity, power and static electricity',
    icon: '🔌',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.2.1 Current, potential difference and resistance
      // 4.2.1.1 Standard circuit diagram symbols
      'Circuit symbols (cell, battery, switch, resistor, variable resistor, lamp, fuse, voltmeter, ammeter, diode, LED, thermistor, LDR, motor)',
      'Drawing and interpreting circuit diagrams',
      // 4.2.1.2 Electrical charge and current
      'Electric current as flow of charge',
      'Charge calculation (Q = It)',
      'Electrons as charge carriers in metals',
      'Current in circuits (same everywhere in series)',
      // 4.2.1.3 Current, resistance and potential difference
      'Potential difference (voltage)',
      'Resistance and its effect on current',
      'Ohm\'s law (V = IR)',
      'Calculating resistance',
      'Required Practical 3: Investigating resistance',
      'Factors affecting resistance (length, cross-sectional area, material)',
      // 4.2.1.4 Resistors
      'Ohmic conductors (constant resistance)',
      'Non-ohmic conductors (changing resistance)',
      'Required Practical 4: I-V characteristics',
      'I-V graph for resistor (straight line through origin)',
      'I-V graph for filament lamp (curved)',
      'I-V graph for diode (one direction only)',
      'Thermistors (resistance decreases as temperature increases)',
      'Light-dependent resistors (resistance decreases as light intensity increases)',
      'Applications of thermistors and LDRs',
      // 4.2.2 Series and parallel circuits
      // 4.2.2.1 Series circuits
      'Series circuit rules',
      'Current the same throughout series circuit',
      'Total potential difference shared between components',
      'Adding resistances in series (Rtotal = R1 + R2)',
      // 4.2.2.2 Parallel circuits
      'Parallel circuit rules',
      'Potential difference same across parallel branches',
      'Current splits at junctions',
      'Total current is sum of currents through branches',
      'Total resistance less than smallest individual resistor (H)',
      'Calculating resistance in parallel (1/Rt = 1/R1 + 1/R2) (H)',
      // 4.2.3 Domestic uses and safety
      // 4.2.3.1 Direct and alternating potential difference
      'Direct current (dc) and alternating current (ac)',
      'UK mains supply (230V, 50Hz)',
      'Frequency and potential difference of ac',
      // 4.2.3.2 Mains electricity
      'Three-wire cable (live, neutral, earth)',
      'Live wire (brown) carries alternating potential',
      'Neutral wire (blue) completes circuit',
      'Earth wire (green/yellow) safety wire',
      'Why the live wire is dangerous',
      'Fuses and circuit breakers',
      'Earth wire and fuse protection',
      // 4.2.4 Energy transfers
      // 4.2.4.1 Power
      'Electrical power (P = IV)',
      'Power in terms of resistance (P = I²R)',
      'Power in terms of resistance (P = V²/R)',
      // 4.2.4.2 Energy transfers in everyday appliances
      'Energy transfer in appliances',
      'Calculating energy transferred (E = Pt)',
      'Calculating energy transferred (E = QV)',
      'Work done by electrical transfer (E = IVt)',
      // 4.2.4.3 The National Grid
      'Structure of the National Grid',
      'Step-up transformers',
      'Step-down transformers',
      'Why high voltage transmission is efficient',
      'Reducing power loss in transmission (P = I²R)',
      // 4.2.5 Static electricity
      // 4.2.5.1 Static charge
      'Static electricity from friction',
      'Electron transfer between materials',
      'Positive and negative charges',
      'Like charges repel, unlike attract',
      'Electric fields around charges (T)',
      'Sparking and electrostatic discharge (T)',
    ],
  },
  {
    id: 'physics-particle-model',
    examBoard: 'aqa',
    name: 'Particle Model of Matter',
    description: 'States of matter, changes of state, internal energy and pressure',
    icon: '🔬',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.3.1 Changes of state and the particle model
      // 4.3.1.1 Density of materials
      'Density definition (mass per unit volume)',
      'Density equation (ρ = m/V)',
      'Density of solids, liquids and gases',
      'Required Practical 5: Measuring density',
      'Measuring density of regular solids',
      'Measuring density of irregular solids (displacement)',
      'Measuring density of liquids',
      // 4.3.1.2 Changes of state
      'Three states of matter (solid, liquid, gas)',
      'Particle arrangement in solids, liquids, gases',
      'Particle motion in solids, liquids, gases',
      'Melting and freezing',
      'Boiling and condensing',
      'Sublimation',
      'Physical changes vs chemical changes',
      'Conservation of mass during state changes',
      // 4.3.2 Internal energy and energy transfers
      // 4.3.2.1 Internal energy
      'Internal energy definition',
      'Kinetic energy of particles',
      'Potential energy of particles',
      'How heating changes internal energy',
      'Temperature and kinetic energy',
      // 4.3.2.2 Temperature changes in a system
      'Specific heat capacity definition',
      'Factors affecting energy needed for temperature change',
      'Calculating energy for temperature change (E = mcΔθ)',
      // 4.3.2.3 Changes of state
      'Specific latent heat definition',
      'Latent heat of fusion',
      'Latent heat of vaporisation',
      'Calculating energy for state change (E = mL)',
      'Why latent heat involves no temperature change',
      'Heating and cooling curves',
      // 4.3.3 Particle model and pressure
      // 4.3.3.1 Particle motion in gases
      'Random motion of gas particles',
      'Gas pressure from particle collisions',
      'Temperature and particle speed',
      // 4.3.3.2 Pressure in gases (H)
      'Relationship between pressure, volume and temperature (H)',
      'Pressure-volume relationship at constant temperature (pV = constant) (H)',
      'Work done on gas increases temperature (H)',
      'Explaining pressure changes using particle model (H)',
    ],
  },
  {
    id: 'physics-atomic-structure',
    examBoard: 'aqa',
    name: 'Atomic Structure',
    description: 'Atoms, isotopes, radioactive decay, nuclear radiation and nuclear energy',
    icon: '⚛️',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.4.1 Atoms and isotopes
      // 4.4.1.1 The structure of an atom
      'Atomic structure (protons, neutrons, electrons)',
      'Size of atoms and nuclei',
      'Atomic radius (about 10⁻¹⁰ m)',
      'Nuclear radius (about 10⁻¹⁵ m)',
      'Relative masses and charges of subatomic particles',
      // 4.4.1.2 Mass number, atomic number and isotopes
      'Mass number (nucleon number)',
      'Atomic number (proton number)',
      'Calculating neutron number',
      'Isotopes definition',
      'Isotope notation',
      // 4.4.1.3 The development of the model of the atom
      'History of atomic models',
      'Dalton\'s solid sphere model',
      'Thomson\'s plum pudding model',
      'Rutherford\'s nuclear model (alpha scattering)',
      'Bohr\'s model (electron shells)',
      'How experimental evidence led to model changes',
      // 4.4.2 Atoms and nuclear radiation
      // 4.4.2.1 Radioactive decay and nuclear radiation
      'Radioactive decay as a random process',
      'Activity and count rate',
      'Alpha decay (α) - helium nuclei',
      'Beta decay (β) - electrons from nucleus',
      'Gamma radiation (γ) - electromagnetic waves',
      'Neutron emission',
      'Nuclear equations for decay',
      'Changes to mass number and atomic number in decay',
      // 4.4.2.2 Nuclear equations
      'Writing balanced nuclear equations',
      'Alpha decay equations',
      'Beta decay equations',
      'Conservation of mass number',
      'Conservation of atomic number',
      // 4.4.2.3 Half-lives and the random nature of radioactive decay
      'Half-life definition',
      'Calculating half-life from data',
      'Using half-life to determine remaining activity',
      'Half-life and radioactive dating',
      'Decay curves and graphs',
      // 4.4.2.4 Radioactive contamination
      'Contamination vs irradiation',
      'Hazards of radioactive contamination',
      'Hazards of irradiation',
      'Comparing risks of contamination and irradiation',
      // 4.4.3 Hazards and uses of radioactive emissions and of background radiation
      // 4.4.3.1 Background radiation
      'Sources of background radiation',
      'Natural sources (rocks, cosmic rays, radon, food)',
      'Man-made sources (medical, nuclear industry, fallout)',
      'Factors affecting background radiation',
      // 4.4.3.2 Different half-lives of radioactive isotopes
      'Applications based on half-life',
      'Short half-life for medical tracers',
      'Long half-life for nuclear waste',
      // 4.4.3.3 Uses of nuclear radiation
      'Medical tracers (diagnostic imaging)',
      'Radiotherapy (cancer treatment)',
      'Sterilisation of medical equipment',
      'Thickness monitoring in industry',
      'Smoke detectors',
      // 4.4.4 Nuclear fission and nuclear fusion
      // 4.4.4.1 Nuclear fission
      'Nuclear fission definition',
      'Induced fission with neutrons',
      'Chain reactions',
      'Controlling chain reactions (moderators, control rods)',
      'Nuclear reactor operation',
      'Energy release from fission',
      // 4.4.4.2 Nuclear fusion
      'Nuclear fusion definition',
      'Fusion in stars',
      'Conditions needed for fusion',
      'Energy release from fusion',
      'Why fusion is difficult to achieve on Earth',
      'Comparing fission and fusion',
    ],
  },
  // ==================== PAPER 2 TOPICS ====================
  {
    id: 'physics-forces',
    examBoard: 'aqa',
    name: 'Forces',
    description: 'Forces, motion, Newton\'s laws, momentum, pressure and terminal velocity',
    icon: '🏋️',
    color: 'bg-red-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.5.1 Forces and their interactions
      // 4.5.1.1 Scalar and vector quantities
      'Scalar quantities (magnitude only)',
      'Vector quantities (magnitude and direction)',
      'Examples of scalars (speed, distance, mass, temperature, time)',
      'Examples of vectors (velocity, displacement, force, acceleration, momentum)',
      'Representing vectors as arrows',
      // 4.5.1.2 Contact and non-contact forces
      'Contact forces (friction, air resistance, tension, normal contact force)',
      'Non-contact forces (gravitational, electrostatic, magnetic)',
      // 4.5.1.3 Gravity
      'Weight as a force (gravitational force)',
      'Weight equation (W = mg)',
      'Mass vs weight',
      'Gravitational field strength (g)',
      'Centre of mass',
      // 4.5.1.4 Resultant forces
      'Resultant force definition',
      'Adding forces in same direction',
      'Adding forces in opposite directions',
      'Free body diagrams',
      'Balanced and unbalanced forces',
      'Scale drawings for resultant forces (H)',
      'Resolving forces into components (H)',
      // 4.5.2 Work done and energy transfer
      'Work done definition',
      'Work done equation (W = Fs)',
      'Work done against friction',
      'Work done and energy transfer',
      'Joules as units of work and energy',
      // 4.5.3 Forces and elasticity
      'Elastic deformation',
      'Plastic deformation',
      'Extension and force relationship',
      'Hooke\'s law (F = ke)',
      'Spring constant',
      'Limit of proportionality',
      'Required Practical 7: Force and extension',
      'Force-extension graphs',
      'Linear and non-linear regions',
      'Elastic potential energy stored',
      'Calculating elastic potential energy (E = ½ke²)',
      // 4.5.4 Moments, levers and gears (T)
      'Turning effect of a force (moment) (T)',
      'Moment equation (M = Fd) (T)',
      'Principle of moments (T)',
      'Equilibrium and balanced moments (T)',
      'Levers as force multipliers (T)',
      'Gears and rotational motion (T)',
      // 4.5.5 Pressure and pressure differences in fluids (T)
      // 4.5.5.1 Pressure in a fluid
      'Pressure in fluids (T)',
      'Pressure equation (p = F/A) (T)',
      'Pressure in liquids (p = hρg) (T)',
      'Upthrust and floating (T)',
      // 4.5.5.2 Atmospheric pressure
      'Atmospheric pressure (T)',
      'How altitude affects atmospheric pressure (T)',
      // 4.5.6 Forces and motion
      // 4.5.6.1 Describing motion along a line
      'Distance and displacement',
      'Speed and velocity',
      'Average speed calculation',
      'Distance-time graphs',
      'Gradient of distance-time graph as speed',
      'Velocity-time graphs',
      'Gradient of velocity-time graph as acceleration',
      'Area under velocity-time graph as displacement',
      'Interpreting motion graphs',
      'Acceleration definition',
      'Acceleration equation (a = Δv/t)',
      // 4.5.6.2 Forces, accelerations and Newton\'s Laws of motion
      'Newton\'s First Law',
      'Inertia and mass',
      'Newton\'s Second Law',
      'Force-mass-acceleration (F = ma)',
      'Required Practical 8: Investigating acceleration',
      'Newton\'s Third Law',
      'Action-reaction pairs',
      'Applying Newton\'s laws to calculations',
      // 4.5.6.3 Forces and braking
      'Stopping distance',
      'Thinking distance',
      'Braking distance',
      'Factors affecting thinking distance (speed, tiredness, drugs, distractions)',
      'Factors affecting braking distance (speed, road conditions, tyre conditions, brake conditions)',
      'Kinetic energy and braking',
      'Dangers of high speed (KE proportional to v²)',
      'Braking force and deceleration',
      'Friction and energy dissipation in brakes',
      // 4.5.6.1.2 Acceleration (additional)
      'Uniform acceleration equations (suvat) (H)',
      'v² = u² + 2as (H)',
      's = ut + ½at² (H)',
      'Applying equations of motion (H)',
      // 4.5.7 Momentum (H)
      'Momentum definition (H)',
      'Momentum equation (p = mv) (H)',
      'Conservation of momentum (H)',
      'Momentum in collisions (H)',
      'Momentum and Newton\'s Second Law (F = Δp/t) (H)',
      'Impact forces and safety features (H)',
      'Crumple zones and airbags (H)',
      'Impulse and change in momentum (H)',
      // 4.5.6.3.2 Terminal velocity
      'Terminal velocity definition',
      'Forces on falling objects',
      'Air resistance and speed',
      'Reaching terminal velocity',
      'Terminal velocity examples (skydiving)',
      'Parachutes and terminal velocity',
    ],
  },
  {
    id: 'physics-waves',
    examBoard: 'aqa',
    name: 'Waves',
    description: 'Wave properties, electromagnetic spectrum, light and sound',
    icon: '🌊',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.6.1 Waves in air, fluids and solids
      // 4.6.1.1 Transverse and longitudinal waves
      'Wave definition (energy transfer)',
      'Transverse waves',
      'Longitudinal waves',
      'Examples of transverse waves (light, water waves, S-waves)',
      'Examples of longitudinal waves (sound, ultrasound, P-waves)',
      'Compressions and rarefactions',
      // 4.6.1.2 Properties of waves
      'Amplitude',
      'Wavelength',
      'Frequency',
      'Period',
      'Wave equation (v = fλ)',
      'Wave speed calculations',
      'Period-frequency relationship (T = 1/f)',
      'Required Practical 9: Measuring wave speed',
      'Ripple tank investigations',
      'Measuring speed of sound',
      // 4.6.1.3 Reflection and absorption of waves
      'Reflection of waves',
      'Law of reflection',
      'Absorption of waves',
      'Transmission of waves',
      // 4.6.1.4 Sound waves
      'Sound as longitudinal waves',
      'Human hearing range (20 Hz to 20 kHz)',
      'Ultrasound (above 20 kHz)',
      'Infrasound (below 20 Hz)',
      'Sound wave detection (microphone, ear)',
      // 4.6.1.5 Waves for detection and exploration (T)
      'Ultrasound in medicine (prenatal scanning) (T)',
      'Ultrasound for distance measurement (SONAR) (T)',
      'Seismic waves (P-waves and S-waves) (T)',
      'Using seismic waves to explore Earth\'s structure (T)',
      // 4.6.2 Electromagnetic waves
      // 4.6.2.1 Types of electromagnetic waves
      'Electromagnetic spectrum',
      'EM waves as transverse waves',
      'Speed of EM waves in vacuum (3 × 10⁸ m/s)',
      'Radio waves',
      'Microwaves',
      'Infrared radiation',
      'Visible light',
      'Ultraviolet radiation',
      'X-rays',
      'Gamma rays',
      'Relative wavelengths and frequencies',
      // 4.6.2.2 Properties of electromagnetic waves
      'Common properties of all EM waves',
      'Differences between EM waves',
      'Refraction of EM waves',
      'Absorption and transmission',
      'Reflection of EM waves',
      // 4.6.2.3 Uses and applications of electromagnetic waves
      'Radio waves (TV, radio, communications)',
      'Microwaves (cooking, satellite communication, mobile phones)',
      'Infrared (heating, thermal imaging, remote controls)',
      'Visible light (vision, photography, illumination)',
      'Ultraviolet (fluorescent lamps, detecting counterfeit notes)',
      'X-rays (medical imaging, airport security)',
      'Gamma rays (sterilisation, cancer treatment)',
      // 4.6.2.4 Hazards and dangers of electromagnetic waves
      'Ionising vs non-ionising radiation',
      'UV radiation hazards (skin cancer, eye damage)',
      'X-ray hazards (cell damage, cancer)',
      'Gamma ray hazards (cell damage, cancer)',
      'Microwave hazards (internal heating of body tissue)',
      'Safety precautions',
      // 4.6.3 Light (T)
      // 4.6.3.1 Reflection of light
      'Specular reflection (smooth surfaces) (T)',
      'Diffuse reflection (rough surfaces) (T)',
      'Plane mirrors (T)',
      'Image formation in mirrors (T)',
      // 4.6.3.2 Refraction of light
      'Refraction definition (T)',
      'Required Practical 6: Light and refraction (T)',
      'Refraction at boundaries (T)',
      'Refractive index (T)',
      'Total internal reflection (T)',
      'Critical angle (T)',
      'Optical fibres (T)',
      // 4.6.3.3 Light and colour (T)
      'White light and spectrum (T)',
      'Colour filters (T)',
      'Absorption of light by coloured surfaces (T)',
      'Appearance of coloured objects in different lights (T)',
      // 4.6.3.4 Lenses (T)
      'Converging (convex) lenses (T)',
      'Diverging (concave) lenses (T)',
      'Focal length and principal focus (T)',
      'Ray diagrams for lenses (T)',
      'Real and virtual images (T)',
      'Magnification (T)',
      'Lens equation calculations (H, T)',
      // 4.6.4 Black body radiation (T)
      'Black body definition (T)',
      'Perfect absorbers and emitters (T)',
      'Black body radiation spectrum (T)',
      'Temperature and peak wavelength (T)',
      'Required Practical 10: Radiation and absorption (T)',
      'Stefan-Boltzmann law (H, T)',
    ],
  },
  {
    id: 'physics-magnetism',
    examBoard: 'aqa',
    name: 'Magnetism and Electromagnetism',
    description: 'Magnets, magnetic fields, electromagnets, motors and generators',
    icon: '🧲',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.7.1 Permanent and induced magnetism, magnetic forces and fields
      // 4.7.1.1 Poles of a magnet
      'Magnetic poles (north and south)',
      'Like poles repel, unlike poles attract',
      'Magnetic materials (iron, steel, cobalt, nickel)',
      'Permanent magnets',
      'Induced magnetism',
      // 4.7.1.2 Magnetic fields
      'Magnetic field definition',
      'Magnetic field lines',
      'Direction of magnetic field',
      'Field strength and line spacing',
      'Plotting magnetic fields (compass method)',
      'Earth\'s magnetic field',
      // 4.7.2 The motor effect
      // 4.7.2.1 Electromagnetism
      'Magnetic field around a current-carrying wire',
      'Right-hand grip rule',
      'Magnetic field of a solenoid',
      'Electromagnets',
      'Increasing electromagnet strength',
      'Uses of electromagnets',
      // 4.7.2.2 Fleming\'s left-hand rule
      'Motor effect',
      'Force on a current-carrying wire in a magnetic field',
      'Fleming\'s left-hand rule',
      'Factors affecting force (current, field strength, length)',
      'Force equation (F = BIL) (H)',
      // 4.7.2.3 Electric motors
      'DC motor construction',
      'Split-ring commutator',
      'How DC motors work',
      'Increasing motor speed',
      'Increasing motor force',
      // 4.7.3 Induced potential, transformers and the National Grid (H)
      // 4.7.3.1 Induced potential (H)
      'Electromagnetic induction (H)',
      'Factors affecting induced potential (H)',
      'Generator effect (H)',
      'Inducing potential in a wire (H)',
      'Inducing potential in a coil (H)',
      'AC generators (alternators) (H)',
      'DC generators (H)',
      // 4.7.3.2 Uses of the generator effect (H)
      'Microphones (H)',
      'Dynamos (H)',
      // 4.7.3.3 Transformers (H)
      'Transformer construction (H)',
      'How transformers work (H)',
      'Step-up transformers (H)',
      'Step-down transformers (H)',
      'Transformer equation (Vp/Vs = Np/Ns) (H)',
      'Transformer power equation (VpIp = VsIs) (H)',
      'Transformer efficiency (H)',
      'National Grid and transformers (H)',
    ],
  },
  {
    id: 'physics-space',
    examBoard: 'aqa',
    name: 'Space Physics',
    description: 'Solar system, orbits, stellar evolution and cosmology (Triple Science only)',
    icon: '🚀',
    color: 'bg-gray-700',
    paperRestriction: 'Paper 2 (Triple Science Only)',
    subtopics: [
      // 4.8.1 Solar system, stability of orbital motions, satellites (T)
      // 4.8.1.1 Our solar system
      'Structure of the solar system (T)',
      'The Sun as a star (T)',
      'Inner rocky planets (T)',
      'Outer gas giants (T)',
      'Dwarf planets (T)',
      'Moons (natural satellites) (T)',
      'Artificial satellites (T)',
      'Asteroid belt (T)',
      'Comets (T)',
      // 4.8.1.2 The life cycle of a star
      'Star formation from nebulae (T)',
      'Protostar stage (T)',
      'Main sequence stars (T)',
      'Fusion of hydrogen to helium (T)',
      'Balance of forces in stars (T)',
      'Red giant and red supergiant stages (T)',
      'White dwarf (T)',
      'Supernova (T)',
      'Neutron stars (T)',
      'Black holes (T)',
      'How element abundance links to star cycles (T)',
      // 4.8.1.3 Orbital motion, natural and artificial satellites
      'Circular orbits (T)',
      'Gravity as centripetal force (T)',
      'Orbital speed and radius (T)',
      'Orbital period (T)',
      'Geostationary satellites (T)',
      'Polar orbits (T)',
      'Uses of artificial satellites (T)',
      // 4.8.2 Red-shift (T)
      'Doppler effect (T)',
      'Red-shift definition (T)',
      'Blue-shift definition (T)',
      'Evidence for expanding universe (T)',
      'Recession speed and distance (T)',
      'Hubble\'s law (v = Hd) (T)',
      'Big Bang theory (T)',
      'Cosmic microwave background radiation (T)',
      'Dark matter and dark energy (T)',
      'Age and future of the universe (T)',
    ],
  },
];

/**
 * Get a specific AQA GCSE Physics topic by ID
 */
export function getAQAPhysicsTopicById(id: string): Topic | undefined {
  return aqaPhysicsTopics.find((topic) => topic.id === id);
}

/**
 * Get topics by paper number
 */
export function getAQAPhysicsTopicsByPaper(paper: 1 | 2): Topic[] {
  if (paper === 1) {
    return aqaPhysicsTopics.filter(
      (t) => t.id === 'physics-energy' ||
        t.id === 'physics-electricity' ||
        t.id === 'physics-particle-model' ||
        t.id === 'physics-atomic-structure'
    );
  }
  return aqaPhysicsTopics.filter(
    (t) => t.id === 'physics-forces' ||
      t.id === 'physics-waves' ||
      t.id === 'physics-magnetism' ||
      t.id === 'physics-space'
  );
}

/**
 * Get Triple Science only topics
 */
export function getAQAPhysicsTripleScienceTopics(): Topic[] {
  // Space Physics is fully Triple Science only
  return aqaPhysicsTopics.filter((t) => t.id === 'physics-space');
}

/**
 * Count all subtopics across all topics
 */
export function countAQAPhysicsSubtopics(): number {
  return aqaPhysicsTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
