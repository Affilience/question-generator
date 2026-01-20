// Edexcel A-Level Physics (9PH0) Question Generation Prompts
// Tailored to Edexcel specification style and assessment objectives
//
// Sources:
// - https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/physics-2015.html
// - https://qualifications.pearson.com/content/dam/pdf/A%20Level/Physics/2015/Specification%20and%20sample%20assessments/pearsonedexcel-alevel-physics-spec.pdf
//
// This file contains comprehensive prompt templates for generating Edexcel A-Level
// Physics questions that accurately reflect the exam board's style, assessment
// objectives, and mark scheme conventions.

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

/**
 * A-Level Physics mark ranges (calculation-based, shorter than essay subjects).
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 3 };   // Short answer, single concept, direct substitution
    case 'medium':
      return { min: 4, max: 5 };   // Multi-step, equation rearrangement, application
    case 'hard':
      return { min: 6, max: 8 };   // Extended response, synoptic, unfamiliar contexts
    default:
      return { min: 2, max: 5 };
  }
}

// ============================================================================
// EDEXCEL A-LEVEL PHYSICS SPECIFICATION OVERVIEW (9PH0)
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_SPECIFICATION = `
## Edexcel A-Level Physics Specification (9PH0)

### Qualification Overview
- **Qualification Code**: 9PH0
- **First Teaching**: September 2015
- **First Certification**: 2017
- **Total GLH**: 360 hours
- **Assessment**: 100% examination (3 papers)

### Subject Content Structure

The A-Level Physics course is divided into 13 topics, with Topics 1-8 forming the
AS content and Topics 1-13 forming the full A-Level content.

#### Year 1 (AS) Topics
| Topic | Title | Key Concepts |
|-------|-------|--------------|
| 1 | Working as a Physicist | Scientific methodology, units, measurement |
| 2 | Mechanics | Motion, forces, energy, momentum |
| 3 | Electric Circuits | Current, resistance, EMF, circuits |
| 4 | Materials | Stress, strain, Young modulus |
| 5 | Waves and Particle Nature of Light | Wave properties, quantum physics |
| 6 | Further Mechanics | Circular motion, momentum |
| 7 | Electric and Magnetic Fields | Fields, capacitance, electromagnetism |
| 8 | Nuclear and Particle Physics | Particles, radiation, nuclear physics |

#### Year 2 (A2) Topics
| Topic | Title | Key Concepts |
|-------|-------|--------------|
| 9 | Thermodynamics | Heat, ideal gases, kinetic theory |
| 10 | Space | Astrophysics, cosmology, stellar physics |
| 11 | Nuclear Radiation | Radioactivity, decay, nuclear energy |
| 12 | Gravitational Fields | Gravity, orbits, satellites |
| 13 | Oscillations | SHM, damping, resonance |

### Content Weighting by Paper
| Paper | Topics Assessed | Emphasis |
|-------|-----------------|----------|
| Paper 1 | 1-4, 6-8 | Mechanics, Circuits, Materials, Fields, Particles |
| Paper 2 | 1, 4-5, 9-13 | Materials, Waves, Thermo, Space, Nuclear, Gravity, SHM |
| Paper 3 | All (1-13) | Synoptic, Practical Skills |

### Key Specification Requirements
1. **Mathematical Skills**: 40% of marks require Level 2 (or above) mathematical skills
2. **Practical Skills**: 15% of marks assess practical techniques and data analysis
3. **Core Practicals**: 16 specified practicals that students must complete
4. **Working Scientifically**: Embedded throughout all topics
5. **Synoptic Assessment**: Paper 3 draws on content from all topics

### Progression Pathways
The Edexcel A-Level Physics specification is designed to:
- Provide a thorough grounding in classical and modern physics
- Develop mathematical and analytical skills
- Prepare students for physics, engineering, and related degrees
- Enable understanding of scientific methodology and practical skills
`;

// ============================================================================
// EDEXCEL A-LEVEL PHYSICS DETAILED TOPIC CONTENT
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_DETAILED_TOPICS = `
## Detailed Topic Content

### Topic 1: Working as a Physicist
**Assessment**: Embedded throughout all papers

**1.1 Quantities and Units**
- SI base units: kg, m, s, A, K, mol, cd
- Derived units and their relationships
- Prefixes: femto (10⁻¹⁵) to tera (10¹²)
- Dimensional analysis for checking equations

**1.2 Estimation**
- Order of magnitude calculations
- Fermi problems and approximations
- Checking reasonableness of answers

**1.3 Experimental Measurements**
- Random and systematic errors
- Precision vs accuracy
- Absolute and percentage uncertainties
- Combining uncertainties in calculations
- Significant figures conventions

**1.4 Data Analysis**
- Plotting graphs with appropriate scales
- Best fit lines (straight and curves)
- Gradient and intercept determination
- Linearisation techniques (log graphs)
- Error bars and uncertainty in gradients

### Topic 2: Mechanics
**Assessment**: Paper 1 (primarily), Paper 3

**2.1 Motion in One Dimension**
- Displacement, velocity, acceleration definitions
- SUVAT equations for uniform acceleration
- Motion graphs (s-t, v-t, a-t)
- Area and gradient interpretations
- Freefall and acceleration due to gravity

**2.2 Motion in Two Dimensions**
- Vector addition and resolution
- Projectile motion analysis
- Independence of horizontal and vertical motion
- Range, maximum height, time of flight

**2.3 Newton's Laws of Motion**
- Newton's first, second, and third laws
- Free body diagrams
- F = ma applications
- Connected bodies and pulleys
- Friction (static and kinetic)

**2.4 Momentum and Collisions**
- Linear momentum p = mv
- Conservation of momentum
- Impulse F∆t = ∆p
- Elastic and inelastic collisions
- 2D momentum problems

**2.5 Work, Energy, and Power**
- Work done W = Fs cos θ
- Kinetic energy Ek = ½mv²
- Gravitational potential energy Ep = mgh
- Conservation of energy
- Power P = W/t = Fv
- Efficiency calculations

### Topic 3: Electric Circuits
**Assessment**: Paper 1 (primarily), Paper 3

**3.1 Electric Current**
- Current as rate of charge flow I = ΔQ/Δt
- Drift velocity equation I = nAvq
- Conventional current vs electron flow

**3.2 Resistance and Resistivity**
- Ohm's law V = IR
- Resistance factors (length, area, material)
- Resistivity ρ = RA/L
- Temperature effects on resistance
- I-V characteristics of components

**3.3 Series and Parallel Circuits**
- Series: same current, voltages add
- Parallel: same voltage, currents add
- Combined resistance calculations
- Current and voltage distribution

**3.4 EMF and Internal Resistance**
- EMF as energy per unit charge
- Terminal voltage V = ε - Ir
- Measuring EMF and internal resistance
- Power considerations

**3.5 Potential Dividers**
- Voltage division principle
- Potentiometer circuits
- Sensor circuits (thermistor, LDR)
- Loading effects

**3.6 Kirchhoff's Laws**
- Current law (junction rule)
- Voltage law (loop rule)
- Circuit analysis applications

### Topic 4: Materials
**Assessment**: Paper 1, Paper 2, Paper 3

**4.1 Density and Upthrust**
- Density ρ = m/V
- Archimedes' principle
- Floating and sinking conditions

**4.2 Viscosity and Drag**
- Stokes' law F = 6πηrv
- Terminal velocity
- Factors affecting drag

**4.3 Stress, Strain, and Young Modulus**
- Stress σ = F/A
- Strain ε = ΔL/L
- Young modulus E = σ/ε
- Stress-strain graphs
- Elastic limit and yield point
- Ultimate tensile stress

**4.4 Elastic Strain Energy**
- Energy = ½FΔL = ½kx²
- Area under force-extension graph
- Elastic and plastic deformation

### Topic 5: Waves and Particle Nature of Light
**Assessment**: Paper 2 (primarily), Paper 3

**5.1 Wave Properties**
- Transverse and longitudinal waves
- Wavelength, frequency, period, amplitude
- Wave equation v = fλ
- Phase and phase difference
- Polarisation

**5.2 Wave Behaviour**
- Reflection and refraction
- Snell's law n₁sin θ₁ = n₂sin θ₂
- Total internal reflection
- Critical angle

**5.3 Superposition**
- Principle of superposition
- Path difference and interference
- Young's double slit experiment
- Coherence requirements

**5.4 Diffraction**
- Single slit diffraction
- Diffraction gratings d sin θ = nλ
- Resolving power

**5.5 Stationary Waves**
- Formation from superposition
- Nodes and antinodes
- Strings: harmonics and overtones
- Pipes: open and closed
- Resonance

**5.6 Photoelectric Effect**
- Observations and wave model failure
- Photon model E = hf
- Work function φ
- Photoelectric equation hf = φ + Ek(max)
- Threshold frequency

**5.7 Wave-Particle Duality**
- de Broglie wavelength λ = h/p = h/mv
- Electron diffraction evidence
- Complementarity principle

**5.8 Energy Levels**
- Discrete energy levels in atoms
- Line spectra (emission and absorption)
- E = hf for photon transitions

### Topic 6: Further Mechanics
**Assessment**: Paper 1 (primarily), Paper 3

**6.1 Circular Motion**
- Angular velocity ω = Δθ/Δt = 2πf
- Linear speed v = rω
- Centripetal acceleration a = v²/r = ω²r
- Centripetal force F = mv²/r

**6.2 Circular Motion Applications**
- Horizontal circles
- Vertical circles (varying tension)
- Conical pendulum
- Banked curves

**6.3 Momentum in Two Dimensions**
- Vector conservation
- Oblique collisions
- Centre of mass

### Topic 7: Electric and Magnetic Fields
**Assessment**: Paper 1 (primarily), Paper 3

**7.1 Electric Fields**
- Electric field strength E = F/Q
- Uniform field E = V/d
- Radial field E = kQ/r²
- Field lines and equipotentials
- Motion of charges in fields

**7.2 Capacitance**
- Capacitance C = Q/V
- Energy stored W = ½QV = ½CV²
- Capacitors in series and parallel
- Dielectrics

**7.3 Capacitor Charge/Discharge**
- Exponential decay Q = Q₀e^(-t/RC)
- Time constant τ = RC
- Current and voltage during discharge
- Logarithmic analysis

**7.4 Magnetic Fields**
- Magnetic flux density B
- Force on current F = BIL sin θ
- Force on moving charge F = BQv sin θ
- Fleming's left-hand rule

**7.5 Electromagnetic Induction**
- Magnetic flux Φ = BA
- Flux linkage NΦ
- Faraday's law ε = -N(dΦ/dt)
- Lenz's law
- Applications (generators, transformers)

**7.6 Alternating Currents**
- Peak and RMS values
- Transformer equation V₁/V₂ = N₁/N₂
- Power transmission

### Topic 8: Nuclear and Particle Physics
**Assessment**: Paper 1 (primarily), Paper 3

**8.1 Atomic Structure**
- Rutherford scattering experiment
- Nuclear model of the atom
- Proton number and nucleon number
- Isotopes

**8.2 Particle Classification**
- Hadrons (baryons and mesons)
- Leptons (electrons, muons, neutrinos)
- Quarks (up, down, strange)
- Antiquarks and antimatter

**8.3 Particle Interactions**
- Strong, weak, electromagnetic forces
- Exchange particles (photon, W±, Z⁰, gluons)
- Feynman diagrams
- Conservation laws (charge, baryon, lepton, strangeness)

**8.4 Particle Accelerators**
- Linear accelerators
- Cyclotrons and synchrotrons
- Relativistic effects

**8.5 Pair Production and Annihilation**
- E = mc² applications
- Threshold energies
- Conservation requirements

### Topic 9: Thermodynamics
**Assessment**: Paper 2 (primarily), Paper 3

**9.1 Internal Energy**
- Kinetic and potential energy of molecules
- First law of thermodynamics
- ΔU = Q - W

**9.2 Temperature and Heat Transfer**
- Absolute temperature scale
- Specific heat capacity c = Q/(mΔT)
- Specific latent heat L = Q/m
- Continuous flow methods

**9.3 Ideal Gases**
- Ideal gas equation pV = nRT = NkT
- Molar gas constant R = 8.31 J mol⁻¹ K⁻¹
- Boltzmann constant k = 1.38 × 10⁻²³ J K⁻¹
- Boyle's, Charles's, pressure laws

**9.4 Kinetic Theory**
- Model assumptions
- Pressure from molecular motion
- pV = ⅓Nm<c²>
- Root mean square speed
- Mean kinetic energy ½m<c²> = (3/2)kT
- Maxwell-Boltzmann distribution

### Topic 10: Space
**Assessment**: Paper 2 (primarily), Paper 3

**10.1 Stellar Properties**
- Luminosity and apparent brightness
- Stefan-Boltzmann law L = 4πr²σT⁴
- Wien's displacement law λmax T = constant
- Black body radiation

**10.2 Stellar Classification**
- Spectral classes (OBAFGKM)
- HR diagram
- Main sequence, giants, supergiants, white dwarfs

**10.3 Stellar Evolution**
- Star formation
- Main sequence lifetime
- Red giant phase
- Supernovae, neutron stars, black holes

**10.4 Distance Measurement**
- Parallax method
- Standard candles
- Cepheid variables
- Type 1a supernovae

**10.5 Cosmology**
- Doppler effect and redshift
- Hubble's law v = H₀d
- Age and size of universe
- Evidence for Big Bang
- Cosmic microwave background

### Topic 11: Nuclear Radiation
**Assessment**: Paper 2 (primarily), Paper 3

**11.1 Radioactive Decay**
- Alpha, beta, gamma radiation
- Decay equations
- Randomness and spontaneity

**11.2 Decay Mathematics**
- Activity A = λN
- Decay equation N = N₀e^(-λt)
- Half-life t½ = ln2/λ
- Carbon dating applications

**11.3 Nuclear Stability**
- Binding energy
- Mass defect Δm
- E = Δmc²
- Binding energy per nucleon curve
- Stability and instability

**11.4 Nuclear Reactions**
- Fission process
- Chain reactions and critical mass
- Fusion process
- Energy release calculations

### Topic 12: Gravitational Fields
**Assessment**: Paper 2 (primarily), Paper 3

**12.1 Gravitational Field Strength**
- Field definition g = F/m
- Newton's law F = GMm/r²
- Field strength g = GM/r²
- Field lines and variation

**12.2 Gravitational Potential**
- Potential V = -GM/r
- Potential energy Ep = -GMm/r
- Potential wells
- Escape velocity v = √(2GM/r)

**12.3 Orbital Motion**
- Orbital speed v = √(GM/r)
- Orbital period T = 2π√(r³/GM)
- Geostationary orbits
- Kepler's laws

**12.4 Satellite Applications**
- GPS and communication satellites
- Energy considerations in orbits
- Gravitational potential energy in orbits

### Topic 13: Oscillations
**Assessment**: Paper 2 (primarily), Paper 3

**13.1 Simple Harmonic Motion**
- Definition: a = -ω²x
- Displacement x = A cos(ωt)
- Velocity v = -Aω sin(ωt)
- Acceleration a = -Aω² cos(ωt)
- Angular frequency ω = 2πf

**13.2 SHM Systems**
- Mass-spring system T = 2π√(m/k)
- Simple pendulum T = 2π√(L/g)
- Graphical representations

**13.3 Energy in SHM**
- Kinetic energy variation
- Potential energy variation
- Total energy E = ½mω²A²
- Energy-displacement graphs

**13.4 Damping**
- Light, heavy, critical damping
- Effects on amplitude and period
- Damping curves

**13.5 Forced Oscillations and Resonance**
- Natural frequency
- Driving frequency
- Resonance conditions
- Amplitude-frequency curves
- Phase relationships
- Applications and problems
`;

// ============================================================================
// SI UNITS AND PREFIXES
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_SI_UNITS = `
## SI Units and Prefixes

### SI Base Units
| Quantity | Unit Name | Symbol |
|----------|-----------|--------|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

### SI Derived Units (Key Physics Units)
| Quantity | Unit Name | Symbol | In Base Units |
|----------|-----------|--------|---------------|
| Frequency | hertz | Hz | s⁻¹ |
| Force | newton | N | kg m s⁻² |
| Energy/Work | joule | J | kg m² s⁻² |
| Power | watt | W | kg m² s⁻³ |
| Pressure | pascal | Pa | kg m⁻¹ s⁻² |
| Electric charge | coulomb | C | A s |
| Potential difference | volt | V | kg m² s⁻³ A⁻¹ |
| Resistance | ohm | Ω | kg m² s⁻³ A⁻² |
| Capacitance | farad | F | A² s⁴ kg⁻¹ m⁻² |
| Magnetic flux | weber | Wb | kg m² s⁻² A⁻¹ |
| Magnetic flux density | tesla | T | kg s⁻² A⁻¹ |
| Inductance | henry | H | kg m² s⁻² A⁻² |
| Radioactivity | becquerel | Bq | s⁻¹ |
| Absorbed dose | gray | Gy | m² s⁻² |

### SI Prefixes
| Prefix | Symbol | Factor | Example |
|--------|--------|--------|---------|
| tera | T | 10¹² | THz (terahertz) |
| giga | G | 10⁹ | GW (gigawatt) |
| mega | M | 10⁶ | MJ (megajoule) |
| kilo | k | 10³ | km (kilometre) |
| (none) | | 10⁰ | m (metre) |
| centi | c | 10⁻² | cm (centimetre) |
| milli | m | 10⁻³ | mm (millimetre) |
| micro | μ | 10⁻⁶ | μm (micrometre) |
| nano | n | 10⁻⁹ | nm (nanometre) |
| pico | p | 10⁻¹² | pF (picofarad) |
| femto | f | 10⁻¹⁵ | fm (femtometre) |

### Dimensional Analysis
Dimensional analysis is used to:
1. Check equation validity
2. Derive relationships
3. Convert between units

**Common Dimensions:**
- Velocity: [L T⁻¹]
- Acceleration: [L T⁻²]
- Force: [M L T⁻²]
- Energy: [M L² T⁻²]
- Power: [M L² T⁻³]
- Pressure: [M L⁻¹ T⁻²]

**Example Check:**
For E = ½mv²:
- LHS: [M L² T⁻²] (energy)
- RHS: [M] × [L T⁻¹]² = [M L² T⁻²] ✓

### Unit Conversions (Common)
| Conversion | Factor |
|------------|--------|
| 1 eV | 1.60 × 10⁻¹⁹ J |
| 1 kWh | 3.6 × 10⁶ J |
| 1 u (atomic mass unit) | 1.66 × 10⁻²⁷ kg |
| 1 light-year | 9.46 × 10¹⁵ m |
| 1 parsec | 3.09 × 10¹⁶ m |
| °C to K | K = °C + 273.15 |
`;

// ============================================================================
// MATHEMATICAL SKILLS REQUIREMENTS
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_MATHS_SKILLS = `
## Mathematical Skills for A-Level Physics

### Overview
- 40% of marks require Level 2 or above mathematical skills
- Mathematical competence is essential for success

### Arithmetic and Numerical Computation
1. **Standard Form**
   - Express quantities: 3.0 × 10⁸ m s⁻¹
   - Multiply/divide: (3 × 10⁸) × (2 × 10⁻⁶)
   - Add/subtract: align powers first

2. **Significant Figures**
   - Final answer to appropriate s.f.
   - Typically match the data precision
   - Show more s.f. in working

3. **Ratios and Fractions**
   - Scaling calculations
   - Proportional reasoning
   - Percentage calculations

4. **Estimations**
   - Order of magnitude
   - Fermi problems
   - Checking reasonableness

### Handling Data
1. **Uncertainty Calculations**
   - Absolute uncertainty: value ± Δx
   - Percentage uncertainty: (Δx/x) × 100%

2. **Combining Uncertainties**
   | Operation | Rule |
   |-----------|------|
   | Addition/Subtraction | Add absolute uncertainties |
   | Multiplication/Division | Add percentage uncertainties |
   | Powers | Multiply percentage uncertainty by power |

3. **Gradient Uncertainty**
   - Draw maximum and minimum gradient lines
   - Uncertainty = (max - min)/2

### Algebra
1. **Rearranging Equations**
   - Solve for any variable
   - Handle multiple steps
   - Work with fractions and powers

2. **Simultaneous Equations**
   - Two unknowns, two equations
   - Substitution or elimination

3. **Quadratic Equations**
   - Factorisation
   - Quadratic formula
   - Discriminant for solution count

4. **Logarithms and Exponentials**
   - ln and log₁₀
   - Exponential decay N = N₀e^(-λt)
   - Linearisation: ln N = ln N₀ - λt

### Graphs
1. **Linear Graphs**
   - y = mx + c
   - Gradient calculation
   - Intercept determination
   - Line of best fit

2. **Linearisation Techniques**
   | Relationship | Plot | Gradient | Intercept |
   |--------------|------|----------|-----------|
   | y = kx² | y vs x² | k | 0 |
   | y = k/x | y vs 1/x | k | 0 |
   | y = kxⁿ | log y vs log x | n | log k |
   | y = Ae^(kx) | ln y vs x | k | ln A |

3. **Gradient and Area**
   - v-t graph: gradient = a, area = s
   - F-x graph: area = work done
   - s-t graph: gradient = v

### Geometry and Trigonometry
1. **Angles**
   - Degrees and radians
   - Small angle approximations:
     - sin θ ≈ θ (radians)
     - tan θ ≈ θ (radians)
     - cos θ ≈ 1 (for small θ)

2. **Trigonometric Functions**
   - sin, cos, tan relationships
   - Vector resolution
   - Wave equations

3. **Pythagoras' Theorem**
   - Vector magnitude: |v| = √(vₓ² + vᵧ²)
   - Distance calculations

4. **Geometry**
   - Circumference: 2πr
   - Area of circle: πr²
   - Surface area of sphere: 4πr²
   - Volume of sphere: (4/3)πr³

### Calculus Concepts
1. **Differentiation Understanding**
   - Rate of change
   - Gradient of tangent
   - v = ds/dt, a = dv/dt

2. **Integration Understanding**
   - Area under curve
   - Accumulation
   - s = ∫v dt, v = ∫a dt

3. **Exponential Functions**
   - d(e^x)/dx = e^x
   - d(e^(kx))/dx = ke^(kx)
   - ∫e^(kx) dx = (1/k)e^(kx) + C

### Vectors
1. **Addition and Subtraction**
   - Graphical methods
   - Component methods
   - Triangle and parallelogram rules

2. **Resolution**
   - Horizontal: Fₓ = F cos θ
   - Vertical: Fᵧ = F sin θ
   - Reconstruct magnitude and direction

3. **Scalar (Dot) Product**
   - W = F · s = Fs cos θ
   - Applications in work done
`;

// ============================================================================
// COMMON MISCONCEPTIONS
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_MISCONCEPTIONS = `
## Common Misconceptions in A-Level Physics

### Mechanics
1. **"Heavy objects fall faster"**
   - Correction: In vacuum, all objects accelerate at g regardless of mass
   - Air resistance causes differences in practice

2. **"Force is needed to maintain motion"**
   - Correction: Force causes acceleration, not constant velocity
   - Newton's first law: no net force = constant velocity

3. **"Action-reaction pairs cancel out"**
   - Correction: Action-reaction forces act on different objects
   - They cannot cancel as they're not on the same body

4. **"Momentum is always conserved"**
   - Correction: Only in isolated systems (no external forces)
   - Total momentum of universe is conserved, not always a subsystem

5. **"Centripetal force is a new type of force"**
   - Correction: It's the resultant force towards the centre
   - Provided by tension, gravity, friction, etc.

### Electricity
6. **"Current is used up in a circuit"**
   - Correction: Current is the same throughout a series circuit
   - Energy is transferred, not current

7. **"Batteries store charge"**
   - Correction: Batteries store chemical potential energy
   - They maintain a potential difference

8. **"Voltage flows through components"**
   - Correction: Voltage is measured across components
   - Current flows through; voltage is a potential difference

9. **"Electrons move at the speed of light"**
   - Correction: Drift velocity is very slow (≈ 10⁻⁴ m/s)
   - The electric field propagates quickly, not electrons

10. **"Resistivity depends on dimensions"**
    - Correction: Resistivity is a material property
    - Resistance depends on dimensions (R = ρL/A)

### Waves
11. **"Waves transport matter"**
    - Correction: Waves transport energy, not matter
    - Particles oscillate about equilibrium positions

12. **"Frequency changes during refraction"**
    - Correction: Frequency stays constant
    - Wavelength and speed change

13. **"Diffraction only occurs at edges"**
    - Correction: Diffraction occurs whenever waves pass obstacles
    - Most noticeable when gap ≈ wavelength

14. **"All EM waves travel at the same speed"**
    - Correction: True in vacuum only
    - Speed varies in materials (hence refraction)

### Quantum Physics
15. **"Photons slow down when losing energy"**
    - Correction: Photons always travel at c
    - Lower energy means lower frequency, not speed

16. **"Electrons orbit like planets"**
    - Correction: Electrons exist in probability clouds
    - Discrete energy levels, not orbits

17. **"Wave-particle duality means 'both at once'"**
    - Correction: Behaviour depends on how you observe
    - Complementarity: wave OR particle aspects revealed

### Thermal Physics
18. **"Heat and temperature are the same"**
    - Correction: Heat is energy transfer; temperature is average KE
    - Objects have temperature; heat is a process

19. **"Cold flows into warm objects"**
    - Correction: Heat (energy) flows from hot to cold
    - "Cold" is absence of thermal energy

20. **"Molecules move faster when heated"**
    - Correction: Average speed increases, but there's a distribution
    - Some molecules always move slowly

### Fields
21. **"Electric field lines show electron paths"**
    - Correction: Field lines show force direction on positive charges
    - Paths depend on initial velocity too

22. **"Gravitational field strength is constant"**
    - Correction: g varies with altitude (g = GM/r²)
    - 9.81 m s⁻² is surface value

23. **"Magnetic field lines can cross"**
    - Correction: Field lines never cross
    - Each point has a unique field direction

### Nuclear Physics
24. **"Atoms are mostly solid matter"**
    - Correction: Atoms are mostly empty space
    - Nucleus is tiny compared to atom size

25. **"Radioactive decay can be predicted exactly"**
    - Correction: Decay is random and probabilistic
    - Only statistical predictions (half-life) are possible

26. **"Gamma rays are the most dangerous"**
    - Correction: Depends on exposure type
    - Alpha most dangerous if ingested (high ionisation)

### Oscillations
27. **"Resonance always causes maximum amplitude"**
    - Correction: Only when driving frequency = natural frequency
    - Damping limits maximum amplitude

28. **"Period of pendulum depends on amplitude"**
    - Correction: For small oscillations, T ≈ 2π√(L/g)
    - Large amplitudes do affect period (not simple harmonic)
`;

// ============================================================================
// KEY FORMULAE AND EQUATIONS
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_FORMULAE = `
## Key Formulae and Equations

### Equations Given in Data Booklet
These equations are provided in the exam - you should know how to use them:

**Mechanics**
- Gravitational force: F = GMm/r²
- Gravitational field strength: g = GM/r²
- Gravitational potential: V = -GM/r
- Escape velocity: v = √(2GM/r)

**Electric Fields**
- Coulomb's law: F = kQ₁Q₂/r² where k = 1/(4πε₀)
- Electric field strength (radial): E = kQ/r²
- Electric potential: V = kQ/r

**Capacitors**
- Capacitor discharge: Q = Q₀e^(-t/RC)
- Time constant: τ = RC

**Electromagnetic Induction**
- Faraday's law: ε = -N(dΦ/dt)

**Quantum Physics**
- Photon energy: E = hf
- de Broglie wavelength: λ = h/p = h/mv
- Photoelectric equation: hf = φ + Ek(max)

**Nuclear Physics**
- Mass-energy: E = mc²
- Radioactive decay: N = N₀e^(-λt)
- Activity: A = λN
- Half-life: t½ = ln2/λ

**Thermodynamics**
- Ideal gas: pV = nRT = NkT
- Kinetic theory: pV = ⅓Nm<c²>
- Mean KE: ½m<c²> = (3/2)kT

**Astrophysics**
- Stefan-Boltzmann: L = 4πr²σT⁴
- Wien's law: λₘₐₓT = 2.898 × 10⁻³ m K
- Hubble's law: v = H₀d

**SHM**
- Defining equation: a = -ω²x
- Mass-spring period: T = 2π√(m/k)
- Pendulum period: T = 2π√(L/g)

### Equations to Learn (Not in Data Booklet)
These MUST be memorised:

**Topic 1: Working as a Physicist**
- No specific equations, but must know SI units and prefixes

**Topic 2: Mechanics**
- SUVAT equations:
  - v = u + at
  - s = ut + ½at²
  - s = vt - ½at²
  - v² = u² + 2as
  - s = ½(u + v)t
- Force: F = ma
- Momentum: p = mv
- Impulse: FΔt = Δp
- Work done: W = Fs cos θ
- Kinetic energy: Ek = ½mv²
- GPE (near surface): Ep = mgh
- Power: P = W/t = Fv
- Efficiency: η = useful output / total input

**Topic 3: Electric Circuits**
- Current: I = ΔQ/Δt
- Drift velocity: I = nAvq
- Ohm's law: V = IR
- Resistivity: ρ = RA/L
- Power: P = IV = I²R = V²/R
- Energy: E = VIt
- EMF equation: ε = I(R + r) or V = ε - Ir
- Resistors in series: R = R₁ + R₂ + ...
- Resistors in parallel: 1/R = 1/R₁ + 1/R₂ + ...
- Potential divider: V₂ = V × R₂/(R₁ + R₂)

**Topic 4: Materials**
- Density: ρ = m/V
- Pressure: p = F/A
- Upthrust: F = ρVg
- Stokes' law: F = 6πηrv
- Stress: σ = F/A
- Strain: ε = ΔL/L
- Young modulus: E = σ/ε = (F/A)/(ΔL/L) = FL/(AΔL)
- Elastic strain energy: W = ½FΔL = ½kx² (area under F-x graph)
- Hooke's law: F = kx

**Topic 5: Waves**
- Wave equation: v = fλ
- Period: T = 1/f
- Phase difference: Δφ = 2πΔx/λ
- Snell's law: n₁ sin θ₁ = n₂ sin θ₂
- Refractive index: n = c/v
- Critical angle: sin θc = n₂/n₁ (where n₂ < n₁)
- Double slit: λ = ax/D (for small angles)
- Diffraction grating: d sin θ = nλ
- Frequency of harmonics (string): f = (1/2L)√(T/μ)

**Topic 6: Further Mechanics**
- Angular velocity: ω = 2πf = 2π/T
- Linear speed: v = rω
- Centripetal acceleration: a = v²/r = ω²r
- Centripetal force: F = mv²/r = mω²r

**Topic 7: Electric and Magnetic Fields**
- Electric field strength: E = F/Q
- Uniform electric field: E = V/d
- Force between parallel plates: F = EQ = VQ/d
- Capacitance: C = Q/V
- Energy stored: W = ½QV = ½CV² = ½Q²/C
- Capacitors in parallel: C = C₁ + C₂ + ...
- Capacitors in series: 1/C = 1/C₁ + 1/C₂ + ...
- Magnetic force on wire: F = BIL sin θ
- Magnetic force on charge: F = BQv sin θ
- Magnetic flux: Φ = BA cos θ
- Flux linkage: NΦ
- Transformer: V₁/V₂ = N₁/N₂ = I₂/I₁ (ideal)
- RMS values: Irms = I₀/√2, Vrms = V₀/√2

**Topic 8: Nuclear and Particle Physics**
- Quark charges: up = +2/3, down = -1/3, strange = -1/3
- Baryon number: +1 for baryons, -1 for antibaryons
- Lepton number: +1 for leptons, -1 for antileptons

**Topic 9: Thermodynamics**
- Specific heat capacity: Q = mcΔT
- Specific latent heat: Q = mL
- Internal energy: ΔU = Q - W
- Ideal gas: pV = nRT = NkT
- Molecular kinetic energy: Ek = (3/2)kT

**Topic 10: Space**
- Absolute magnitude: M = m - 5log(d/10) (d in parsecs)
- Doppler shift: Δλ/λ = v/c (for v << c)
- Redshift: z = Δλ/λ

**Topic 11: Nuclear Radiation**
- Binding energy: E = Δmc²
- Activity: A = λN = A₀e^(-λt)

**Topic 12: Gravitational Fields**
- Kepler's third law: T² = (4π²/GM)r³
- Orbital speed: v = √(GM/r)

**Topic 13: Oscillations**
- Angular frequency: ω = 2πf
- Displacement: x = A cos(ωt) or x = A sin(ωt)
- Velocity: v = ±ω√(A² - x²) or v = -Aω sin(ωt)
- Maximum velocity: vmax = Aω
- Maximum acceleration: amax = Aω²
- Total energy: E = ½mω²A² = ½kA²

### Physical Constants (Given in Data Booklet)
| Constant | Symbol | Value |
|----------|--------|-------|
| Speed of light | c | 3.00 × 10⁸ m s⁻¹ |
| Planck constant | h | 6.63 × 10⁻³⁴ J s |
| Electronic charge | e | 1.60 × 10⁻¹⁹ C |
| Electron mass | mₑ | 9.11 × 10⁻³¹ kg |
| Proton mass | mₚ | 1.67 × 10⁻²⁷ kg |
| Neutron mass | mₙ | 1.67 × 10⁻²⁷ kg |
| Atomic mass unit | u | 1.66 × 10⁻²⁷ kg |
| Gravitational constant | G | 6.67 × 10⁻¹¹ N m² kg⁻² |
| Acceleration due to gravity | g | 9.81 m s⁻² |
| Avogadro constant | Nₐ | 6.02 × 10²³ mol⁻¹ |
| Molar gas constant | R | 8.31 J mol⁻¹ K⁻¹ |
| Boltzmann constant | k | 1.38 × 10⁻²³ J K⁻¹ |
| Stefan-Boltzmann constant | σ | 5.67 × 10⁻⁸ W m⁻² K⁻⁴ |
| Permittivity of free space | ε₀ | 8.85 × 10⁻¹² F m⁻¹ |
| Permeability of free space | μ₀ | 4π × 10⁻⁷ H m⁻¹ |
| Hubble constant | H₀ | 2.4 × 10⁻¹⁸ s⁻¹ (≈ 74 km s⁻¹ Mpc⁻¹) |
`;

// ============================================================================
// DETAILED PAPER STRUCTURE
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_PAPER_STRUCTURE = `
## Edexcel A-Level Physics Paper Structure (9PH0)

### Paper 1: Advanced Physics I (9PH0/01)
**Duration**: 1 hour 45 minutes
**Total Marks**: 90 marks
**Weighting**: 30% of total A-Level

**Topics Assessed**:
- Topic 1: Working as a Physicist
- Topic 2: Mechanics
- Topic 3: Electric Circuits
- Topic 4: Materials
- Topic 6: Further Mechanics
- Topic 7: Electric and Magnetic Fields
- Topic 8: Nuclear and Particle Physics

**Question Format**:
- Section A: Multiple choice questions (≈15 marks)
- Section B: Short answer and extended response (≈75 marks)

**Assessment Objectives Weighting**:
- AO1 (Knowledge): 27-33%
- AO2 (Application): 40-46%
- AO3 (Analysis/Evaluation): 24-30%

**Typical Question Types**:
- Multiple choice on core concepts
- Short calculations (3-5 marks)
- Data analysis questions
- Extended calculations (6-8 marks)
- Explain/describe questions (3-6 marks)

### Paper 2: Advanced Physics II (9PH0/02)
**Duration**: 1 hour 45 minutes
**Total Marks**: 90 marks
**Weighting**: 30% of total A-Level

**Topics Assessed**:
- Topic 1: Working as a Physicist
- Topic 4: Materials
- Topic 5: Waves and Particle Nature of Light
- Topic 9: Thermodynamics
- Topic 10: Space
- Topic 11: Nuclear Radiation
- Topic 12: Gravitational Fields
- Topic 13: Oscillations

**Question Format**:
- Section A: Multiple choice questions (≈15 marks)
- Section B: Short answer and extended response (≈75 marks)

**Assessment Objectives Weighting**:
- AO1 (Knowledge): 27-33%
- AO2 (Application): 40-46%
- AO3 (Analysis/Evaluation): 24-30%

**Typical Question Types**:
- Multiple choice covering Year 2 content
- Wave and optics calculations
- Thermodynamics and gas law problems
- Astrophysics and cosmology questions
- Nuclear physics calculations
- SHM analysis and calculations

### Paper 3: General and Practical Principles in Physics (9PH0/03)
**Duration**: 2 hours 30 minutes
**Total Marks**: 120 marks
**Weighting**: 40% of total A-Level

**Topics Assessed**:
- ALL topics (1-13)
- Synoptic questions drawing on multiple topics
- Practical skills and techniques

**Question Format**:
- Section A: Practical skills and data analysis (≈38-42 marks)
- Section B: Synoptic questions on any topics (≈78-82 marks)

**Assessment Objectives Weighting**:
- AO1 (Knowledge): 31-35%
- AO2 (Application): 37-43%
- AO3 (Analysis/Evaluation): 24-30%

**Key Features**:
- 50% of marks assess experimental methods
- Questions test the 16 core practicals
- Data analysis and graph interpretation
- Uncertainty calculations
- Experimental design questions
- 6-mark extended response questions

**Typical Question Types**:
1. **Practical Analysis** (Section A):
   - Processing experimental data
   - Drawing and interpreting graphs
   - Calculating uncertainties
   - Evaluating methods and suggesting improvements
   - Planning investigations

2. **Synoptic Questions** (Section B):
   - Questions linking multiple topics
   - Extended calculations spanning concepts
   - Application to unfamiliar contexts
   - Essay-style extended responses

### Mark Allocation Across Papers
| Paper | Marks | % of A-Level | Time | Topics |
|-------|-------|--------------|------|--------|
| Paper 1 | 90 | 30% | 1h 45m | 1-4, 6-8 |
| Paper 2 | 90 | 30% | 1h 45m | 1, 4-5, 9-13 |
| Paper 3 | 120 | 40% | 2h 30m | All (1-13) |
| **Total** | **300** | **100%** | **6h** | |

### Grade Boundaries (Typical)
| Grade | UMS Range | Approximate Raw % |
|-------|-----------|-------------------|
| A* | 270-300 | 75-80%+ |
| A | 240-269 | 65-70% |
| B | 210-239 | 55-60% |
| C | 180-209 | 45-50% |
| D | 150-179 | 40-45% |
| E | 120-149 | 35-40% |

*Note: Actual boundaries vary each exam session*

### Timing Strategies

**Paper 1 & 2** (90 marks, 105 minutes):
- Aim for ~1.1 minutes per mark
- Multiple choice: ~20 minutes
- Remaining questions: ~85 minutes
- Leave 5 minutes for checking

**Paper 3** (120 marks, 150 minutes):
- Aim for ~1.2 minutes per mark
- Section A (practical): ~50 minutes
- Section B (synoptic): ~90 minutes
- Leave 10 minutes for checking

### Command Word Distribution
| Command | Typical Marks | Frequency |
|---------|---------------|-----------|
| Calculate | 2-6 | Very common |
| Explain | 2-6 | Common |
| State/Define | 1-2 | Common |
| Show that | 2-4 | Common |
| Describe | 2-4 | Moderate |
| Suggest | 2-4 | Moderate |
| Discuss/Evaluate | 4-6 | Less common |
`;

// ============================================================================
// DETAILED CORE PRACTICAL GUIDANCE (ALL 16)
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_CORE_PRACTICALS_DETAILED = `
## Edexcel A-Level Physics Core Practicals - Detailed Guidance

The 16 core practicals are central to the Edexcel specification. Paper 3 dedicates
approximately 50% of marks to assessing practical skills, often through questions
based on these experiments.

### CP01: Determine the Acceleration of a Freely-Falling Object

**Aim**: Measure g using free fall

**Method Options**:
1. **Electromagnetic release and timer**
   - Steel ball released from electromagnet
   - Trapdoor/pad starts and stops timer
   - Vary height h, measure time t

2. **Light gates**
   - Measure velocity at different heights
   - Use v² = u² + 2as with u = 0

3. **Video analysis**
   - Film falling object with scale
   - Analyse frame by frame

**Analysis**:
- Plot h against t² (gives straight line through origin)
- Gradient = g/2, so g = 2 × gradient
- OR plot v² against h, gradient = 2g

**Key Uncertainties**:
- Reaction time (if manual)
- Height measurement (±1 mm typical)
- Timing resolution
- Air resistance (negligible for dense objects)

**Common Errors**:
- Forgetting to account for ball radius
- Not ensuring vertical drop
- Electromagnetic delay in release

**Expected Result**: g = 9.81 ± 0.2 m s⁻²

---

### CP02: Determine the Electrical Resistivity of a Material

**Aim**: Find resistivity of a wire (usually constantan)

**Method**:
1. Measure wire diameter with micrometer at multiple points
2. Set up circuit with ammeter, voltmeter, power supply
3. Measure V and I for different lengths of wire
4. Calculate R = V/I for each length

**Analysis**:
- Plot R against L (straight line through origin expected)
- Gradient = ρ/A
- ρ = gradient × A = gradient × π(d/2)²

**Key Uncertainties**:
- Diameter: ±0.01 mm (micrometer)
- Length: ±1 mm (ruler)
- Voltage and current readings
- Temperature changes (keep current low)

**Important Considerations**:
- Use low current to avoid heating
- Ensure good electrical contacts
- Measure diameter in multiple places and orientations
- Allow wire to straighten before measuring

**Expected Result**: Constantan ρ ≈ 4.9 × 10⁻⁷ Ω m

---

### CP03: Determine EMF and Internal Resistance of a Cell

**Aim**: Find ε and r for a cell

**Method**:
1. Set up circuit: cell, variable resistor, ammeter, voltmeter
2. Vary external resistance R
3. Record V (terminal pd) and I for each R value

**Analysis**:
Using ε = V + Ir (or V = ε - Ir):
- Plot V against I
- Y-intercept = ε (EMF)
- Gradient = -r (internal resistance)

Alternative: Plot ε/I against R
- Gradient = 1, intercept = r

**Key Uncertainties**:
- Voltmeter and ammeter precision
- Temperature variation during experiment
- Cell polarisation effects

**Safety**:
- Don't short-circuit the cell
- Allow cooling between readings

**Expected Results** (for typical AA cell):
- ε ≈ 1.5 V
- r ≈ 0.5-1.5 Ω

---

### CP04: Investigate Electrical Characteristics (I-V Graphs)

**Aim**: Obtain I-V characteristics for various components

**Components**:
1. **Filament lamp**: Non-linear, curved through origin
2. **Diode**: Almost no current below threshold (~0.6V), rapid increase above
3. **Thermistor**: Resistance decreases as current increases (heating)
4. **LDR**: Resistance depends on light intensity
5. **Resistor**: Linear (Ohm's law)

**Method**:
1. Set up circuit with variable power supply
2. Include ammeter in series, voltmeter in parallel
3. Vary voltage from 0, record I and V
4. Reverse polarity for full characteristic (except diode forward only)

**Analysis**:
- Plot I against V
- Resistance at any point = V/I (not gradient!)
- Describe shape in terms of physics

**Key Points**:
- Filament lamp: resistance increases due to heating
- Diode: exponential relationship above threshold
- Thermistor: NTC means resistance falls with temperature

---

### CP05: Determine Wavelength of Light Using Diffraction Grating

**Aim**: Measure wavelength of laser light using grating equation

**Method**:
1. Set up laser, diffraction grating, screen
2. Measure distance D from grating to screen
3. Measure position of each order maximum (n = 1, 2, 3...)
4. Calculate angle θ for each order

**Analysis**:
Using d sin θ = nλ:
- For each order: λ = d sin θ / n
- For small angles: tan θ ≈ sin θ = x/D
- Average values for best estimate

**Key Uncertainties**:
- Distance measurement
- Position of maxima (use centre of spots)
- Grating line spacing (usually given)

**Safety**:
- NEVER look directly into laser
- Use Class 2 laser (< 1 mW)
- Display laser warning signs
- Remove reflective objects

**Expected Result**: Red laser λ ≈ 630-670 nm

---

### CP06: Determine the Speed of Sound

**Aim**: Measure speed of sound in air

**Method Options**:
1. **Two microphone method**
   - Sound source, two microphones at known separation
   - Display signals on oscilloscope
   - Measure time delay from phase difference

2. **Resonance tube method**
   - Tuning fork over tube with adjustable water level
   - Find resonant lengths (λ/4, 3λ/4, 5λ/4...)
   - Calculate wavelength, use v = fλ

**Analysis** (resonance method):
- Plot resonant length L against mode number
- Gradient gives λ/2
- v = fλ where f is tuning fork frequency

**Key Uncertainties**:
- Frequency of source
- Distance/length measurements
- End correction for resonance tube

**Expected Result**: v ≈ 340 m s⁻¹ at room temperature

---

### CP07: Investigate Waves on Strings

**Aim**: Investigate factors affecting wave speed in strings

**Method**:
1. Set up vibration generator, string, pulley, masses
2. Find frequencies giving standing wave patterns
3. Vary tension (mass) or length
4. Count nodes/antinodes to determine wavelength

**Analysis**:
Using v = √(T/μ) where T = tension, μ = mass per unit length:
- Plot f against 1/L (at constant T): gradient = v/2
- Plot f² against T (at constant L): gradient = 1/(4L²μ)

**Key Points**:
- λ = 2L/n for nth harmonic
- v = fλ
- Verify v = √(T/μ)

**Uncertainties**:
- Mass of string (measure total, calculate μ = m/L)
- Tension (mg ± uncertainty in m)
- Node positions

---

### CP08: Investigate Absorption of Gamma Radiation by Lead

**Aim**: Determine half-value thickness of lead for gamma rays

**Method**:
1. Place gamma source, GM tube at fixed distance
2. Measure background count (source removed)
3. Insert lead sheets of known thickness
4. Record count rate for each thickness

**Analysis**:
- Subtract background from all readings
- Plot ln(corrected count rate) against thickness
- Gradient = -μ (absorption coefficient)
- Half-value thickness x½ = ln2/μ

**Safety**:
- Handle source with tongs
- Minimise time near source
- Maximise distance when not measuring
- Store in lead-lined container

**Key Points**:
- Count for sufficient time (reduce statistical uncertainty)
- Multiple readings, calculate mean
- Background must be subtracted

**Expected Result**: x½ ≈ 1-2 cm for typical gamma source through lead

---

### CP09: Investigate Force, Mass and Acceleration (Newton's Second Law)

**Aim**: Verify F = ma

**Method**:
1. Use dynamics trolley on frictionless track
2. Light gates measure acceleration
3. Vary force (using hanging masses) at constant total mass
4. Vary mass at constant force

**Analysis**:
- Plot a against F (constant m): gradient = 1/m
- Plot a against 1/m (constant F): gradient = F

**Key Points**:
- Include hanging mass in total system mass
- Compensate for friction (tilt track slightly)
- Keep trolley mass >> hanging mass for constant force assumption

**Common Errors**:
- Forgetting that accelerating mass includes hanging mass
- Not accounting for friction
- Air track alignment

**Expected Result**: Straight line through origin, gradient = 1/m

---

### CP10: Determine Young Modulus of a Material

**Aim**: Measure Young modulus of a wire

**Method**:
1. Long wire (2-3 m) clamped at one end
2. Masses hung from other end
3. Measure extension using marker or Vernier scale
4. Measure original length and diameter

**Analysis**:
- Calculate stress σ = F/A = mg/(πd²/4)
- Calculate strain ε = ΔL/L
- Plot stress against strain
- Gradient = Young modulus E

**Alternative Analysis**:
- Plot F against ΔL
- Gradient = EA/L
- E = gradient × L/A

**Key Considerations**:
- Use long wire for measurable extension
- Measure diameter at multiple points
- Load and unload to check for plastic deformation
- Safety: wear goggles, use sand tray below masses

**Expected Results**:
- Copper: E ≈ 130 GPa
- Steel: E ≈ 210 GPa
- Brass: E ≈ 100 GPa

---

### CP11: Investigate Simple Harmonic Motion Using a Mass-Spring System

**Aim**: Verify T = 2π√(m/k) and determine spring constant

**Method**:
1. Hang spring vertically with mass attached
2. Displace and release (small amplitude)
3. Time multiple oscillations (e.g., 20)
4. Repeat for different masses

**Analysis**:
- Plot T² against m
- Should give straight line through origin
- Gradient = 4π²/k
- k = 4π²/gradient

**Key Points**:
- Small amplitude for SHM approximation
- Time many oscillations to reduce timing uncertainty
- Check spring obeys Hooke's law (not over-stretched)
- Consider effective mass of spring

**Alternative**: Simple pendulum
- T = 2π√(L/g)
- Plot T² against L
- Gradient = 4π²/g

---

### CP12: Investigate Boyle's Law and Charles's Law

**Aim**: Verify gas laws for a fixed mass of gas

**Method (Boyle's Law - constant T)**:
1. Trapped air column in sealed tube with oil
2. Apply pressure using pump/syringe
3. Measure pressure (gauge) and volume (from length × area)
4. Vary pressure, record volume

**Analysis**:
- Plot p against 1/V (or pV against p)
- Should give straight line through origin
- pV = constant

**Method (Charles's Law - constant p)**:
1. Capillary tube with trapped air, sealed at one end
2. Heat in water bath
3. Measure length (∝ volume) at different temperatures

**Analysis**:
- Plot V against T (in Kelvin!)
- Should extrapolate to V = 0 at T = 0 K
- V/T = constant

**Key Points**:
- Allow thermal equilibrium
- Charles's law: temperatures MUST be in Kelvin
- Account for atmospheric pressure in Boyle's law
- Ensure tube is uniform bore

---

### CP13: Investigate Charging and Discharging of Capacitors

**Aim**: Investigate exponential charge/discharge and determine τ

**Method (Discharge)**:
1. Charge capacitor fully (wait several time constants)
2. Discharge through known resistor R
3. Record voltage across capacitor at regular time intervals
4. Use data logger for better resolution

**Analysis**:
- Plot V against t (exponential decay)
- Plot ln V against t (straight line)
- Gradient = -1/RC
- τ = RC from gradient or from V = V₀e⁻¹ point

**Method (Charging)**:
1. Similar setup, record V while charging
2. V = V₀(1 - e^(-t/RC))

**Key Points**:
- Use large R and C for measurable time constant
- Digital voltmeter with high resistance (doesn't discharge capacitor)
- Multiple trials, average results

**Expected Analysis**:
- τ = RC should match calculated value
- Half-life t½ = 0.693RC

---

### CP14: Investigate Force on a Current-Carrying Conductor

**Aim**: Verify F = BIL and investigate factors

**Method (Current Balance)**:
1. U-shaped conductor between magnets on balance
2. Pass current through conductor
3. Measure apparent mass change (gives force)
4. Vary current, measure force

**Analysis**:
- Plot F against I (at constant L and B)
- Should give straight line through origin
- Gradient = BL
- If B known: verify relationship

**Alternative: Top-pan balance method**:
1. Magnets on balance, wire above
2. Current creates force on magnets (Newton's 3rd law)
3. Balance reading changes

**Key Points**:
- Ensure wire perpendicular to field
- Reverse current to check direction
- Keep other variables constant

---

### CP15: Investigate Magnetic Flux Linkage

**Aim**: Investigate factors affecting induced EMF (Faraday's law)

**Method**:
1. Search coil connected to oscilloscope/voltmeter
2. Move coil through magnetic field (or vary field)
3. Investigate: speed, number of turns, field strength

**Alternative (AC induction)**:
1. Coil connected to AC supply creates varying field
2. Secondary coil experiences induced EMF
3. Vary frequency, turns, area

**Analysis**:
- ε ∝ N (number of turns)
- ε ∝ dΦ/dt (rate of change of flux)
- ε ∝ A (area of coil)
- ε ∝ B (field strength)

**Key Points**:
- Induced EMF only when flux changes
- Direction given by Lenz's law
- For AC: ε₀ = NABω

---

### CP16: Investigate Oscillations of a Simple Harmonic System

**Aim**: Advanced investigation of SHM characteristics

**Method**:
1. Use oscillating system (mass-spring, pendulum, loaded ruler)
2. Use position sensor and data logger
3. Record displacement, velocity, acceleration vs time
4. Analyse phase relationships

**Analysis**:
- Verify a = -ω²x (plot a vs x, gradient = -ω²)
- Check phase: v leads x by π/2, a leads v by π/2
- Energy analysis: Ek + Ep = constant
- Investigate damping effects

**Key Points**:
- High sampling rate for accurate data
- Compare experimental ω with theoretical
- Analyse energy conservation
- Effect of amplitude on period (should be independent for SHM)

**Extensions**:
- Investigate damping (light, heavy, critical)
- Forced oscillations and resonance
- Phase relationship with driving force
`;

// ============================================================================
// WORKED EXAMPLE QUESTIONS WITH MARK SCHEMES (25+ QUESTIONS)
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_WORKED_EXAMPLES = `
## Worked Example Questions with Complete Mark Schemes

These examples demonstrate the style, format, and marking approach of Edexcel A-Level
Physics questions across all topics and difficulty levels.

---

### EXAMPLE 1: Mechanics - Projectile Motion (5 marks)
**Topic**: 2 - Mechanics | **Difficulty**: Medium | **Paper**: 1

**Question**:
A ball is thrown horizontally from the top of a cliff at a speed of 15 m s⁻¹.
The cliff is 45 m high.

(a) Calculate the time taken for the ball to reach the ground. (2)
(b) Calculate the horizontal distance travelled by the ball. (1)
(c) Calculate the speed of the ball just before it hits the ground. (2)

**Mark Scheme**:
(a) Using s = ut + ½at² with u = 0 (vertical), s = 45 m, a = 9.81 m s⁻²
    45 = 0 + ½ × 9.81 × t² [1]
    t = √(90/9.81) = 3.03 s (or 3.0 s) [1]

(b) Horizontal distance = 15 × 3.03 = 45.5 m (or 45 m) [1]

(c) Vertical velocity: v = u + at = 0 + 9.81 × 3.03 = 29.7 m s⁻¹
    Resultant speed = √(15² + 29.7²) [1]
    = √(225 + 882) = √1107 = 33.3 m s⁻¹ [1]

**Examiner Notes**:
- Accept 3.0 s without penalty for early rounding
- Method marks available even with arithmetic errors
- Final answer must have correct units

---

### EXAMPLE 2: Electric Circuits - Internal Resistance (6 marks)
**Topic**: 3 - Electric Circuits | **Difficulty**: Medium | **Paper**: 1

**Question**:
A battery of EMF 12.0 V and internal resistance 0.80 Ω is connected to two resistors
of resistance 4.0 Ω and 6.0 Ω in series.

(a) Calculate the current flowing in the circuit. (2)
(b) Calculate the terminal potential difference of the battery. (2)
(c) Calculate the power dissipated in the internal resistance. (2)

**Mark Scheme**:
(a) Total resistance = 4.0 + 6.0 + 0.80 = 10.8 Ω [1]
    I = ε/(R + r) = 12.0/10.8 = 1.11 A [1]

(b) V = ε - Ir = 12.0 - (1.11 × 0.80) [1]
    V = 12.0 - 0.89 = 11.1 V [1]

(c) P = I²r [1]
    P = 1.11² × 0.80 = 0.99 W (or 1.0 W) [1]

**Alternative for (b)**: V = IR = 1.11 × 10.0 = 11.1 V [2]

---

### EXAMPLE 3: Materials - Young Modulus (5 marks)
**Topic**: 4 - Materials | **Difficulty**: Medium | **Paper**: 1/2

**Question**:
A copper wire of length 2.50 m and diameter 0.80 mm is stretched by a force of 150 N.
The Young modulus of copper is 1.3 × 10¹¹ Pa.

(a) Calculate the cross-sectional area of the wire. (1)
(b) Calculate the stress in the wire. (2)
(c) Calculate the extension of the wire. (2)

**Mark Scheme**:
(a) A = π(d/2)² = π × (0.40 × 10⁻³)² [1]
    A = 5.03 × 10⁻⁷ m² (accept 5.0 × 10⁻⁷ m²)

(b) Stress σ = F/A [1]
    σ = 150/(5.03 × 10⁻⁷) = 2.98 × 10⁸ Pa [1]

(c) E = σ/ε, so ε = σ/E = 2.98 × 10⁸/(1.3 × 10¹¹) = 2.29 × 10⁻³
    Extension = ε × L [1]
    ΔL = 2.29 × 10⁻³ × 2.50 = 5.7 × 10⁻³ m (or 5.7 mm) [1]

---

### EXAMPLE 4: Waves - Diffraction Grating (5 marks)
**Topic**: 5 - Waves | **Difficulty**: Medium | **Paper**: 2

**Question**:
Light of wavelength 589 nm is incident normally on a diffraction grating with
600 lines per mm.

(a) Calculate the grating spacing d. (1)
(b) Calculate the angle of the first-order maximum. (2)
(c) Determine the maximum order that can be observed. (2)

**Mark Scheme**:
(a) d = 1/(600 × 10³) = 1.67 × 10⁻⁶ m [1]

(b) Using d sin θ = nλ with n = 1:
    sin θ = λ/d = (589 × 10⁻⁹)/(1.67 × 10⁻⁶) = 0.353 [1]
    θ = 20.7° [1]

(c) Maximum when sin θ = 1, so n_max = d/λ [1]
    n_max = (1.67 × 10⁻⁶)/(589 × 10⁻⁹) = 2.83
    Maximum order = 2 (must be integer) [1]

---

### EXAMPLE 5: Circular Motion (6 marks)
**Topic**: 6 - Further Mechanics | **Difficulty**: Hard | **Paper**: 1

**Question**:
A car of mass 1200 kg travels around a banked circular track of radius 80 m.
The track is banked at an angle of 15° to the horizontal.

(a) Calculate the speed at which the car can travel around the track with no
    tendency to slip sideways (no friction required). (4)
(b) Explain what would happen if the car travelled faster than this speed. (2)

**Mark Scheme**:
(a) At design speed, N cos θ = mg [1]
    and N sin θ = mv²/r [1]
    Dividing: tan θ = v²/(rg)
    v² = rg tan θ = 80 × 9.81 × tan 15° [1]
    v = √(80 × 9.81 × 0.268) = 14.5 m s⁻¹ [1]

(b) If faster: centripetal force required > horizontal component of normal force [1]
    Car would tend to slide up/outward the bank [1]
    OR friction would need to act down the slope to provide extra centripetal force

---

### EXAMPLE 6: Capacitors - Discharge (6 marks)
**Topic**: 7 - Electric and Magnetic Fields | **Difficulty**: Hard | **Paper**: 1

**Question**:
A 470 μF capacitor is charged to 12.0 V and then discharged through a 22 kΩ resistor.

(a) Calculate the time constant of the circuit. (1)
(b) Calculate the charge on the capacitor after 15 s. (3)
(c) Calculate the energy remaining in the capacitor after 15 s. (2)

**Mark Scheme**:
(a) τ = RC = 22 × 10³ × 470 × 10⁻⁶ = 10.3 s [1]

(b) Initial charge Q₀ = CV = 470 × 10⁻⁶ × 12.0 = 5.64 × 10⁻³ C [1]
    Q = Q₀e^(-t/τ) = 5.64 × 10⁻³ × e^(-15/10.3) [1]
    Q = 5.64 × 10⁻³ × 0.233 = 1.31 × 10⁻³ C (or 1.3 mC) [1]

(c) V at 15 s = Q/C = 1.31 × 10⁻³/(470 × 10⁻⁶) = 2.79 V
    Energy = ½CV² = ½ × 470 × 10⁻⁶ × 2.79² [1]
    E = 1.83 × 10⁻³ J (or 1.8 mJ) [1]

**Alternative for (c)**: E = ½Q²/C = ½ × (1.31 × 10⁻³)²/(470 × 10⁻⁶) = 1.83 mJ

---

### EXAMPLE 7: Electromagnetic Induction (5 marks)
**Topic**: 7 - Electric and Magnetic Fields | **Difficulty**: Medium | **Paper**: 1

**Question**:
A coil of 200 turns and area 50 cm² is placed in a uniform magnetic field of 0.15 T
with the plane of the coil perpendicular to the field. The coil is removed from the
field in 0.20 s.

(a) Calculate the initial magnetic flux through the coil. (1)
(b) Calculate the change in flux linkage. (1)
(c) Calculate the average EMF induced in the coil. (2)
(d) State and explain the direction of the induced current. (1)

**Mark Scheme**:
(a) Φ = BA = 0.15 × 50 × 10⁻⁴ = 7.5 × 10⁻⁴ Wb [1]

(b) ΔNΦ = 200 × 7.5 × 10⁻⁴ = 0.15 Wb (or 150 mWb) [1]

(c) ε = -N(ΔΦ/Δt) = NΔΦ/Δt [1]
    ε = 0.15/0.20 = 0.75 V [1]

(d) By Lenz's law, current flows to oppose the change/create a field in the
    same direction as the original field [1]

---

### EXAMPLE 8: Particle Physics - Quark Model (4 marks)
**Topic**: 8 - Nuclear and Particle Physics | **Difficulty**: Medium | **Paper**: 1

**Question**:
(a) State the quark composition of a proton. (1)
(b) State the quark composition of a neutron. (1)
(c) A π⁺ meson consists of an up quark and an anti-down quark.
    Calculate the charge on the π⁺ meson. Show your working. (2)

**Mark Scheme**:
(a) uud (two up quarks and one down quark) [1]

(b) udd (one up quark and two down quarks) [1]

(c) Charge on up quark = +2/3 e
    Charge on anti-down quark = +1/3 e [1]
    Total charge = +2/3 + 1/3 = +1 e [1]

---

### EXAMPLE 9: Thermodynamics - Ideal Gas (6 marks)
**Topic**: 9 - Thermodynamics | **Difficulty**: Medium | **Paper**: 2

**Question**:
A cylinder contains 0.050 mol of an ideal gas at a pressure of 1.5 × 10⁵ Pa and
temperature of 27°C.

(a) Calculate the volume of the gas. (2)
(b) The gas is heated at constant pressure until its volume doubles.
    Calculate the new temperature of the gas in °C. (2)
(c) Calculate the work done by the gas during this expansion. (2)

**Mark Scheme**:
(a) pV = nRT
    V = nRT/p = (0.050 × 8.31 × 300)/(1.5 × 10⁵) [1]
    V = 8.31 × 10⁻⁴ m³ (or 831 cm³) [1]

(b) At constant pressure: V₁/T₁ = V₂/T₂
    T₂ = T₁ × V₂/V₁ = 300 × 2 = 600 K [1]
    Temperature = 600 - 273 = 327°C [1]

(c) W = pΔV = p(V₂ - V₁) = 1.5 × 10⁵ × 8.31 × 10⁻⁴ [1]
    W = 125 J [1]

---

### EXAMPLE 10: Kinetic Theory (5 marks)
**Topic**: 9 - Thermodynamics | **Difficulty**: Hard | **Paper**: 2

**Question**:
Oxygen gas is at a temperature of 300 K. The molar mass of oxygen is 0.032 kg mol⁻¹.

(a) Calculate the mean kinetic energy of an oxygen molecule. (2)
(b) Calculate the root mean square speed of oxygen molecules. (3)

**Mark Scheme**:
(a) Mean KE = (3/2)kT [1]
    KE = 1.5 × 1.38 × 10⁻²³ × 300 = 6.21 × 10⁻²¹ J [1]

(b) Mass of one molecule = 0.032/(6.02 × 10²³) = 5.32 × 10⁻²⁶ kg [1]
    ½m<c²> = 6.21 × 10⁻²¹
    <c²> = 2 × 6.21 × 10⁻²¹/(5.32 × 10⁻²⁶) = 2.34 × 10⁵ m² s⁻² [1]
    c_rms = √(2.34 × 10⁵) = 484 m s⁻¹ [1]

---

### EXAMPLE 11: Astrophysics - Stefan-Boltzmann (5 marks)
**Topic**: 10 - Space | **Difficulty**: Medium | **Paper**: 2

**Question**:
The Sun has a surface temperature of 5800 K and a radius of 6.96 × 10⁸ m.
The Stefan-Boltzmann constant σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴.

(a) Calculate the luminosity of the Sun. (2)
(b) The star Sirius A has a luminosity 25 times that of the Sun and a surface
    temperature of 9940 K. Calculate the radius of Sirius A. (3)

**Mark Scheme**:
(a) L = 4πr²σT⁴ [1]
    L = 4π × (6.96 × 10⁸)² × 5.67 × 10⁻⁸ × 5800⁴
    L = 3.85 × 10²⁶ W [1]

(b) L_Sirius = 25 × 3.85 × 10²⁶ = 9.63 × 10²⁷ W
    L = 4πr²σT⁴
    r² = L/(4πσT⁴) [1]
    r² = 9.63 × 10²⁷/(4π × 5.67 × 10⁻⁸ × 9940⁴) [1]
    r = 1.18 × 10⁹ m (about 1.7 solar radii) [1]

---

### EXAMPLE 12: Radioactive Decay (6 marks)
**Topic**: 11 - Nuclear Radiation | **Difficulty**: Medium | **Paper**: 2

**Question**:
A radioactive isotope has a half-life of 8.0 days. Initially there are 2.0 × 10²⁰ atoms.

(a) Calculate the decay constant λ. (2)
(b) Calculate the initial activity of the sample. (2)
(c) Calculate the number of atoms remaining after 24 days. (2)

**Mark Scheme**:
(a) λ = ln2/t½ [1]
    λ = 0.693/(8.0 × 24 × 3600) = 1.00 × 10⁻⁶ s⁻¹ [1]

(b) A = λN [1]
    A = 1.00 × 10⁻⁶ × 2.0 × 10²⁰ = 2.0 × 10¹⁴ Bq [1]

(c) 24 days = 3 half-lives
    N = N₀ × (½)³ = 2.0 × 10²⁰ × 1/8 [1]
    N = 2.5 × 10¹⁹ atoms [1]

**Alternative using exponential**: N = N₀e^(-λt)

---

### EXAMPLE 13: Binding Energy (6 marks)
**Topic**: 11 - Nuclear Radiation | **Difficulty**: Hard | **Paper**: 2

**Question**:
The nuclear reaction below shows the fusion of deuterium and tritium:
²₁H + ³₁H → ⁴₂He + ¹₀n

Mass of deuterium nucleus = 2.01410 u
Mass of tritium nucleus = 3.01605 u
Mass of helium-4 nucleus = 4.00260 u
Mass of neutron = 1.00867 u
1 u = 1.66 × 10⁻²⁷ kg

(a) Calculate the mass defect in the reaction in kg. (2)
(b) Calculate the energy released in the reaction in MeV. (3)
(c) Explain why this reaction requires very high temperatures. (1)

**Mark Scheme**:
(a) Mass before = 2.01410 + 3.01605 = 5.03015 u
    Mass after = 4.00260 + 1.00867 = 5.01127 u
    Mass defect = 5.03015 - 5.01127 = 0.01888 u [1]
    Δm = 0.01888 × 1.66 × 10⁻²⁷ = 3.13 × 10⁻²⁹ kg [1]

(b) E = Δmc² = 3.13 × 10⁻²⁹ × (3.0 × 10⁸)² [1]
    E = 2.82 × 10⁻¹² J [1]
    E = 2.82 × 10⁻¹² / (1.60 × 10⁻¹³) = 17.6 MeV [1]

(c) High temperature needed to overcome electrostatic repulsion between
    positively charged nuclei [1]

---

### EXAMPLE 14: Gravitational Fields (6 marks)
**Topic**: 12 - Gravitational Fields | **Difficulty**: Hard | **Paper**: 2

**Question**:
The Earth has mass 5.97 × 10²⁴ kg and radius 6.37 × 10⁶ m.
A satellite orbits at an altitude of 400 km above the Earth's surface.

(a) Calculate the gravitational field strength at the satellite's orbit. (2)
(b) Calculate the orbital speed of the satellite. (2)
(c) Calculate the orbital period of the satellite. (2)

**Mark Scheme**:
(a) r = 6.37 × 10⁶ + 4.0 × 10⁵ = 6.77 × 10⁶ m
    g = GM/r² = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(6.77 × 10⁶)² [1]
    g = 8.69 m s⁻² [1]

(b) For circular orbit: mv²/r = mg
    v = √(gr) = √(8.69 × 6.77 × 10⁶) [1]
    v = 7.67 × 10³ m s⁻¹ (or 7.67 km s⁻¹) [1]

(c) T = 2πr/v = (2π × 6.77 × 10⁶)/(7.67 × 10³) [1]
    T = 5.54 × 10³ s (or 92.4 minutes) [1]

---

### EXAMPLE 15: Escape Velocity (4 marks)
**Topic**: 12 - Gravitational Fields | **Difficulty**: Medium | **Paper**: 2

**Question**:
(a) State what is meant by escape velocity. (1)
(b) Calculate the escape velocity from the surface of Mars.
    Mass of Mars = 6.42 × 10²³ kg
    Radius of Mars = 3.40 × 10⁶ m (3)

**Mark Scheme**:
(a) The minimum speed needed to escape the gravitational field of a planet
    (to reach infinity with zero kinetic energy) [1]

(b) v_escape = √(2GM/r) [1]
    v = √(2 × 6.67 × 10⁻¹¹ × 6.42 × 10²³ / 3.40 × 10⁶) [1]
    v = 5.02 × 10³ m s⁻¹ (or 5.0 km s⁻¹) [1]

---

### EXAMPLE 16: Simple Harmonic Motion - Mass-Spring (6 marks)
**Topic**: 13 - Oscillations | **Difficulty**: Medium | **Paper**: 2

**Question**:
A mass of 0.40 kg is attached to a spring of spring constant 50 N m⁻¹ and oscillates
with an amplitude of 0.080 m.

(a) Calculate the period of oscillation. (2)
(b) Calculate the maximum speed of the mass. (2)
(c) Calculate the total energy of the oscillation. (2)

**Mark Scheme**:
(a) T = 2π√(m/k) [1]
    T = 2π√(0.40/50) = 2π√(0.008) = 0.56 s [1]

(b) ω = 2π/T = 2π/0.56 = 11.2 rad s⁻¹
    v_max = ωA = 11.2 × 0.080 [1]
    v_max = 0.90 m s⁻¹ [1]

(c) E = ½kA² [1]
    E = ½ × 50 × 0.080² = 0.16 J [1]

**Alternative for (c)**: E = ½mv_max² = ½ × 0.40 × 0.90² = 0.16 J

---

### EXAMPLE 17: SHM Graphs and Phase (4 marks)
**Topic**: 13 - Oscillations | **Difficulty**: Medium | **Paper**: 2

**Question**:
A body oscillates with simple harmonic motion. At time t = 0, the displacement
is at its maximum positive value A.

(a) Write an expression for displacement x in terms of A, ω, and t. (1)
(b) Write an expression for velocity v in terms of A, ω, and t. (1)
(c) Sketch graphs of displacement and velocity against time for two complete cycles.
    Label the graphs clearly. (2)

**Mark Scheme**:
(a) x = A cos(ωt) [1]

(b) v = -Aω sin(ωt) [1]

(c) Cosine curve starting at +A for displacement [1]
    Negative sine curve (starting at 0, going negative) for velocity [1]
    Both curves with correct relationship (v leads x by π/2 going backwards,
    or x leads v by π/2)

---

### EXAMPLE 18: Damping and Resonance (5 marks)
**Topic**: 13 - Oscillations | **Difficulty**: Medium | **Paper**: 2

**Question**:
A car's suspension system can be modeled as a damped harmonic oscillator.

(a) Describe the difference between light damping and critical damping. (2)
(b) Explain why car suspensions are designed to have approximately critical damping. (1)
(c) The car travels over a series of regularly spaced bumps at increasing speed.
    Explain what happens to the amplitude of oscillation of the car body as the
    speed increases from very low to very high speeds. (2)

**Mark Scheme**:
(a) Light damping: amplitude decreases gradually over many oscillations [1]
    Critical damping: returns to equilibrium in shortest time without oscillating [1]

(b) To absorb shocks quickly without bouncing / provides comfortable ride /
    wheels stay in contact with road [1]

(c) At low speeds (low driving frequency), amplitude is small [1]
    Amplitude increases to maximum at resonance when driving frequency = natural frequency
    Then decreases at higher frequencies [1]

---

### EXAMPLE 19: Photoelectric Effect (6 marks)
**Topic**: 5 - Waves and Particle Nature of Light | **Difficulty**: Hard | **Paper**: 2

**Question**:
Light of wavelength 420 nm is incident on a metal surface with work function 2.1 eV.

(a) Calculate the energy of a photon of this light in eV. (2)
(b) Calculate the maximum kinetic energy of the emitted photoelectrons in eV. (2)
(c) Calculate the threshold frequency for this metal. (2)

**Mark Scheme**:
(a) E = hf = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(420 × 10⁻⁹) [1]
    E = 4.74 × 10⁻¹⁹ J = 4.74 × 10⁻¹⁹/(1.60 × 10⁻¹⁹) = 2.96 eV [1]

(b) hf = φ + KE_max
    KE_max = hf - φ = 2.96 - 2.1 [1]
    KE_max = 0.86 eV [1]

(c) At threshold: hf₀ = φ
    f₀ = φ/h = (2.1 × 1.60 × 10⁻¹⁹)/(6.63 × 10⁻³⁴) [1]
    f₀ = 5.07 × 10¹⁴ Hz [1]

---

### EXAMPLE 20: de Broglie Wavelength (4 marks)
**Topic**: 5 - Waves and Particle Nature of Light | **Difficulty**: Medium | **Paper**: 2

**Question**:
An electron is accelerated from rest through a potential difference of 500 V.

(a) Calculate the kinetic energy gained by the electron in joules. (1)
(b) Calculate the speed of the electron. (2)
(c) Calculate the de Broglie wavelength of the electron. (1)

**Mark Scheme**:
(a) KE = eV = 1.60 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ J [1]

(b) ½mv² = 8.0 × 10⁻¹⁷
    v² = 2 × 8.0 × 10⁻¹⁷/(9.11 × 10⁻³¹) = 1.76 × 10¹⁴ [1]
    v = 1.33 × 10⁷ m s⁻¹ [1]

(c) λ = h/mv = (6.63 × 10⁻³⁴)/(9.11 × 10⁻³¹ × 1.33 × 10⁷) = 5.5 × 10⁻¹¹ m [1]

---

### EXAMPLE 21: Practical - Uncertainty Analysis (5 marks)
**Topic**: 1 - Working as a Physicist | **Difficulty**: Hard | **Paper**: 3

**Question**:
In an experiment to determine the resistivity of a wire, the following measurements
were made:
- Length L = 1.200 ± 0.002 m
- Diameter d = 0.52 ± 0.01 mm
- Resistance R = 3.8 ± 0.1 Ω

(a) Calculate the cross-sectional area of the wire. (1)
(b) Calculate the resistivity of the wire. (2)
(c) Calculate the percentage uncertainty in the resistivity. (2)

**Mark Scheme**:
(a) A = π(d/2)² = π × (0.26 × 10⁻³)² = 2.12 × 10⁻⁷ m² [1]

(b) ρ = RA/L = (3.8 × 2.12 × 10⁻⁷)/1.200 [1]
    ρ = 6.7 × 10⁻⁷ Ω m [1]

(c) % uncertainty in L = 0.002/1.200 × 100 = 0.17%
    % uncertainty in d = 0.01/0.52 × 100 = 1.9%
    % uncertainty in A = 2 × 1.9% = 3.8% (diameter squared)
    % uncertainty in R = 0.1/3.8 × 100 = 2.6%
    Total % uncertainty = 0.17 + 3.8 + 2.6 [1]
    = 6.6% (or approximately 7%) [1]

---

### EXAMPLE 22: Practical - Graph Analysis (6 marks)
**Topic**: 1 - Working as a Physicist | **Difficulty**: Hard | **Paper**: 3

**Question**:
A student investigates the discharge of a capacitor. The following data is obtained:

| Time/s | Voltage/V | ln(V/V) |
|--------|-----------|---------|
| 0 | 6.0 | 1.79 |
| 10 | 4.4 | 1.48 |
| 20 | 3.2 | 1.16 |
| 30 | 2.4 | 0.88 |
| 40 | 1.8 | 0.59 |
| 50 | 1.3 | 0.26 |

(a) Plot a graph of ln(V/V) against time. (2)
(b) Use the graph to determine the time constant of the circuit. (2)
(c) If the capacitance is 220 μF, calculate the resistance in the circuit. (2)

**Mark Scheme**:
(a) Correct axes with labels and units [1]
    Points plotted correctly with best fit straight line [1]

(b) V = V₀e^(-t/τ), so ln V = ln V₀ - t/τ
    Gradient = -1/τ
    From graph: gradient ≈ -0.031 s⁻¹ [1]
    τ = 1/0.031 = 32 s [1]

(c) τ = RC
    R = τ/C = 32/(220 × 10⁻⁶) [1]
    R = 1.45 × 10⁵ Ω (or 145 kΩ) [1]

---

### EXAMPLE 23: Extended Response - Electric Fields (6 marks)
**Topic**: 7 - Electric and Magnetic Fields | **Difficulty**: Hard | **Paper**: 1/3

**Question**:
Compare and contrast gravitational and electric fields. Your answer should include
reference to:
- The nature of the forces
- Field equations
- The sign convention for potential
- Energy considerations (6)

**Mark Scheme (Level Descriptors)**:

**Level 3 (5-6 marks)**: A comprehensive comparison covering most points accurately.
Clear structure distinguishing similarities and differences.

**Level 2 (3-4 marks)**: A reasonable comparison but may miss some key points or
contain minor errors. Some structure evident.

**Level 1 (1-2 marks)**: Limited comparison with significant gaps or errors.
Little structure.

**Indicative Content**:

Similarities:
- Both obey inverse square law (F ∝ 1/r²)
- Both have field strength and potential equations
- Field lines point in direction of force on test mass/charge
- Potential is work done per unit mass/charge

Differences:
- Gravitational force always attractive; electric force can be attractive or repulsive
- Gravitational: F = GMm/r²; Electric: F = kQq/r²
- Gravitational potential always negative (zero at infinity); electric potential can
  be positive or negative depending on sign of source charge
- Gravitational field only one type of mass; electric field has positive and negative charges
- Field strength: g = GM/r² vs E = kQ/r²
- Electric forces much stronger than gravitational (for same separation and typical masses/charges)

---

### EXAMPLE 24: Extended Response - Energy in SHM (6 marks)
**Topic**: 13 - Oscillations | **Difficulty**: Hard | **Paper**: 2/3

**Question**:
Discuss the energy changes that occur during one complete cycle of a simple
harmonic oscillator, such as a mass on a spring. Include in your answer:
- Types of energy involved
- Energy at different positions
- Total energy
- Effect of damping (6)

**Mark Scheme (Level Descriptors)**:

**Level 3 (5-6 marks)**: Comprehensive discussion of energy transfers with accurate
physics. Clear explanation of conservation and damping effects.

**Level 2 (3-4 marks)**: Good discussion of energy changes but may lack some detail
or have minor errors. Damping may not be fully explained.

**Level 1 (1-2 marks)**: Basic understanding shown but incomplete or contains errors.

**Indicative Content**:

Energy types:
- Kinetic energy: KE = ½mv²
- Potential energy (elastic): PE = ½kx²

At equilibrium (x = 0):
- KE maximum, PE zero
- v = v_max = Aω

At maximum displacement (x = ±A):
- KE zero, PE maximum
- v = 0

Energy conservation:
- Total energy E = KE + PE = ½kA² = constant
- Energy continually converts between KE and PE
- E = ½mω²A² = ½kA²

Graphical representation:
- KE varies as sin²(ωt), PE varies as cos²(ωt)
- Both have period T/2

Damping effects:
- Total energy decreases over time
- Energy dissipated as heat due to resistive forces
- Amplitude decreases exponentially
- Energy ∝ A², so energy decreases exponentially

---

### EXAMPLE 25: Synoptic Question - Satellite Motion (8 marks)
**Topic**: Multiple (6, 12) | **Difficulty**: Hard | **Paper**: 3

**Question**:
A communications satellite of mass 500 kg is in geostationary orbit around the Earth.

(a) Explain what is meant by a geostationary orbit and state two conditions
    necessary for such an orbit. (3)
(b) Show that the radius of a geostationary orbit is approximately 4.2 × 10⁷ m. (3)
(c) Calculate the gravitational potential energy of the satellite. (2)

Mass of Earth = 5.97 × 10²⁴ kg

**Mark Scheme**:
(a) Geostationary orbit: satellite remains above same point on Earth's surface [1]
    Conditions: orbital period = 24 hours / same as Earth's rotation [1]
    Orbit must be above equator / equatorial orbit [1]
    (Also accept: must be circular, must orbit in same direction as Earth's rotation)

(b) For circular orbit: GMm/r² = mω²r
    GM/r² = ω²r
    r³ = GM/ω² [1]
    ω = 2π/T = 2π/(24 × 3600) = 7.27 × 10⁻⁵ rad s⁻¹
    r³ = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(7.27 × 10⁻⁵)² [1]
    r³ = 7.53 × 10²² m³
    r = 4.22 × 10⁷ m ≈ 4.2 × 10⁷ m [1]

(c) GPE = -GMm/r [1]
    GPE = -(6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 500)/(4.2 × 10⁷)
    GPE = -4.7 × 10⁹ J [1]

---

### EXAMPLE 26: Transformers and Power Transmission (5 marks)
**Topic**: 7 - Electric and Magnetic Fields | **Difficulty**: Medium | **Paper**: 1

**Question**:
A power station generates electrical power at 25 kV. This is stepped up to 400 kV
for transmission through cables with total resistance 4.0 Ω. The power transmitted
is 500 MW.

(a) Calculate the current in the transmission cables. (1)
(b) Calculate the power lost in the transmission cables. (2)
(c) Explain why power is transmitted at high voltage. (2)

**Mark Scheme**:
(a) P = VI, so I = P/V = 500 × 10⁶/(400 × 10³) = 1250 A [1]

(b) Power lost = I²R [1]
    = 1250² × 4.0 = 6.25 × 10⁶ W = 6.25 MW [1]

(c) At higher voltage, current is lower (for same power) [1]
    Power loss = I²R, so lower current means less power wasted as heat [1]

---

### EXAMPLE 27: Stationary Waves on Strings (5 marks)
**Topic**: 5 - Waves | **Difficulty**: Medium | **Paper**: 2

**Question**:
A string of length 1.2 m is fixed at both ends and vibrates in its third harmonic.
The frequency of vibration is 150 Hz.

(a) Sketch the standing wave pattern showing nodes and antinodes. (2)
(b) Calculate the wavelength of the waves on the string. (1)
(c) Calculate the speed of waves on the string. (2)

**Mark Scheme**:
(a) Diagram showing 3 complete half-wavelengths [1]
    Nodes at ends and two intermediate positions, three antinodes [1]

(b) For third harmonic: L = 3λ/2
    λ = 2L/3 = 2 × 1.2/3 = 0.80 m [1]

(c) v = fλ [1]
    v = 150 × 0.80 = 120 m s⁻¹ [1]

---

### EXAMPLE 28: Magnetic Force on Moving Charge (5 marks)
**Topic**: 7 - Electric and Magnetic Fields | **Difficulty**: Medium | **Paper**: 1

**Question**:
An electron travelling at 2.5 × 10⁷ m s⁻¹ enters a uniform magnetic field of flux
density 0.15 T at right angles to the field direction.

(a) Calculate the force on the electron. (2)
(b) Calculate the radius of the circular path followed by the electron. (2)
(c) Explain why the speed of the electron remains constant. (1)

**Mark Scheme**:
(a) F = BQv = 0.15 × 1.60 × 10⁻¹⁹ × 2.5 × 10⁷ [1]
    F = 6.0 × 10⁻¹³ N [1]

(b) F = mv²/r, so r = mv/(BQ) [1]
    r = (9.11 × 10⁻³¹ × 2.5 × 10⁷)/(0.15 × 1.60 × 10⁻¹⁹)
    r = 9.5 × 10⁻⁴ m (or 0.95 mm) [1]

(c) Magnetic force is always perpendicular to velocity/direction of motion [1]
    (So does no work on the electron / only changes direction not speed)

---

### EXAMPLE 29: Hubble's Law and Cosmology (4 marks)
**Topic**: 10 - Space | **Difficulty**: Medium | **Paper**: 2

**Question**:
A galaxy has a recession velocity of 15,000 km s⁻¹.
The Hubble constant H₀ = 70 km s⁻¹ Mpc⁻¹.

(a) Use Hubble's law to calculate the distance to the galaxy in Mpc. (2)
(b) Estimate the age of the universe using the Hubble constant. (2)

**Mark Scheme**:
(a) v = H₀d, so d = v/H₀ [1]
    d = 15,000/70 = 214 Mpc [1]

(b) Age ≈ 1/H₀
    Convert H₀ to s⁻¹: 70 km s⁻¹ Mpc⁻¹ = 70 × 10³/(3.09 × 10²² m)
    = 2.27 × 10⁻¹⁸ s⁻¹ [1]
    Age = 1/(2.27 × 10⁻¹⁸) = 4.4 × 10¹⁷ s ≈ 14 billion years [1]

---

### EXAMPLE 30: Potential Divider with Sensor (5 marks)
**Topic**: 3 - Electric Circuits | **Difficulty**: Medium | **Paper**: 1

**Question**:
A potential divider circuit consists of a 6.0 V battery, a 4.7 kΩ fixed resistor, and
a thermistor. At room temperature the thermistor has a resistance of 2.3 kΩ.
The thermistor is connected between the negative terminal and the junction.

(a) Calculate the output voltage across the thermistor at room temperature. (2)
(b) State and explain what happens to the output voltage when the temperature
    increases. (3)

**Mark Scheme**:
(a) V_out = V × R_thermistor/(R_fixed + R_thermistor) [1]
    V_out = 6.0 × 2300/(4700 + 2300) = 6.0 × 2300/7000 = 1.97 V (≈ 2.0 V) [1]

(b) As temperature increases, thermistor resistance decreases [1]
    Proportion of voltage across thermistor decreases [1]
    Output voltage decreases [1]

**Note**: If thermistor was positioned differently, answer would be opposite.

---

### EXAMPLE 31: Moment of Inertia Concept in Circular Motion (4 marks)
**Topic**: 6 - Further Mechanics | **Difficulty**: Hard | **Paper**: 1

**Question**:
A conical pendulum consists of a 0.25 kg mass attached to a string of length 0.80 m.
The mass moves in a horizontal circle with the string making an angle of 30° to
the vertical.

(a) Draw a free body diagram showing the forces acting on the mass. (2)
(b) Calculate the speed of the mass. (2)

**Mark Scheme**:
(a) Weight (mg) acting downward [1]
    Tension (T) acting along string toward pivot [1]
    (May show components of tension)

(b) Resolving: T cos 30° = mg and T sin 30° = mv²/r
    tan 30° = v²/(rg)
    r = L sin 30° = 0.80 × 0.5 = 0.40 m
    v² = rg tan 30° = 0.40 × 9.81 × tan 30° [1]
    v = √(0.40 × 9.81 × 0.577) = 1.5 m s⁻¹ [1]

---

### EXAMPLE 32: Conservation Laws in Particle Physics (4 marks)
**Topic**: 8 - Nuclear and Particle Physics | **Difficulty**: Medium | **Paper**: 1

**Question**:
The following reaction shows beta-minus decay:
n → p + e⁻ + X

(a) State the name of particle X. (1)
(b) Verify that the following quantities are conserved in this reaction:
    (i) charge (1)
    (ii) baryon number (1)
    (iii) lepton number (1)

**Mark Scheme**:
(a) Electron antineutrino (ν̄ₑ) [1]

(b)(i) Charge: 0 → +1 + (-1) + 0 = 0 ✓ Conserved [1]

(b)(ii) Baryon number: 1 → 1 + 0 + 0 = 1 ✓ Conserved [1]

(b)(iii) Lepton number: 0 → 0 + 1 + (-1) = 0 ✓ Conserved [1]

---

### EXAMPLE 33: Wien's Law and Black Body Radiation (4 marks)
**Topic**: 10 - Space | **Difficulty**: Medium | **Paper**: 2

**Question**:
A star has a surface temperature of 10,000 K.
Wien's displacement constant = 2.9 × 10⁻³ m K.

(a) Calculate the peak wavelength of radiation emitted by the star. (2)
(b) In which region of the electromagnetic spectrum does this peak wavelength lie? (1)
(c) Explain why this star would appear blue-white to the human eye. (1)

**Mark Scheme**:
(a) λ_max T = constant
    λ_max = 2.9 × 10⁻³/10,000 [1]
    λ_max = 2.9 × 10⁻⁷ m = 290 nm [1]

(b) Ultraviolet [1]

(c) Although peak is in UV, significant visible emission is at blue end of spectrum [1]
    (More blue light emitted than red, so appears blue-white)

---

### EXAMPLE 34: Terminal Velocity (5 marks)
**Topic**: 4 - Materials | **Difficulty**: Medium | **Paper**: 1/2

**Question**:
A steel ball bearing of radius 2.0 mm falls through oil of viscosity 0.15 Pa s.
Density of steel = 7800 kg m⁻³
Density of oil = 900 kg m⁻³

(a) Calculate the weight of the ball bearing. (2)
(b) Calculate the terminal velocity of the ball bearing in the oil. (3)

**Mark Scheme**:
(a) Volume = (4/3)πr³ = (4/3)π(2.0 × 10⁻³)³ = 3.35 × 10⁻⁸ m³
    Weight = ρVg = 7800 × 3.35 × 10⁻⁸ × 9.81 [1]
    W = 2.56 × 10⁻³ N [1]

(b) At terminal velocity: Weight = Upthrust + Drag
    W = ρ_oil V g + 6πηrv
    2.56 × 10⁻³ = (900 × 3.35 × 10⁻⁸ × 9.81) + (6π × 0.15 × 2.0 × 10⁻³ × v)
    2.56 × 10⁻³ = 2.96 × 10⁻⁴ + (5.65 × 10⁻³)v [1]
    (5.65 × 10⁻³)v = 2.56 × 10⁻³ - 2.96 × 10⁻⁴ = 2.26 × 10⁻³ [1]
    v = 0.40 m s⁻¹ [1]

---

### EXAMPLE 35: Practical Planning Question (6 marks)
**Topic**: Multiple | **Difficulty**: Hard | **Paper**: 3

**Question**:
A student plans to investigate how the period of a simple pendulum varies with
amplitude. Describe an experimental procedure to carry out this investigation,
including:
- Equipment needed
- Measurements to be taken
- How to ensure accurate results
- Safety considerations (6)

**Mark Scheme (Level Descriptors)**:

**Level 3 (5-6 marks)**: Detailed, well-organised procedure covering all aspects.
Clear description of method to obtain accurate measurements.

**Level 2 (3-4 marks)**: Reasonable procedure but may lack detail in some areas.
Basic understanding of accuracy requirements.

**Level 1 (1-2 marks)**: Limited procedure with significant omissions. Poor
consideration of accuracy or safety.

**Indicative Content**:

Equipment:
- Pendulum bob (dense material)
- String/thread (inextensible)
- Clamp and stand
- Protractor or marked scale for angle measurement
- Stopwatch
- Ruler/tape measure for length

Method:
- Set up pendulum with fixed length (e.g., 1.0 m)
- Measure amplitude using protractor (angle from vertical)
- Release from rest at measured angle
- Time multiple oscillations (e.g., 20) to reduce timing uncertainty
- Calculate period T
- Repeat for different amplitudes (e.g., 5°, 10°, 15°, 20°, 30°, 45°)

Accuracy:
- Time many oscillations and divide
- Use fiducial marker at equilibrium position
- Start timing as bob passes equilibrium
- Repeat readings and average
- Ensure small oscillations initially for comparison

Safety:
- Secure clamp stand
- Keep area clear of obstacles
- Don't use excessive amplitudes (bob could detach)
`;

// ============================================================================
// COMMAND WORD DEFINITIONS WITH DETAILED EXAMPLES
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_COMMAND_WORDS_DETAILED = `
## Command Word Definitions with Examples

Understanding command words is essential for answering exam questions appropriately.
Each command word indicates the type of response expected.

### CALCULATE
**Definition**: Obtain a numerical answer, showing relevant working.
**What's required**: Use equations, show substitution, give final answer with units.

**Example Question**: Calculate the kinetic energy of a 1500 kg car travelling at 20 m s⁻¹.

**Example Answer**:
Ek = ½mv²
Ek = ½ × 1500 × 20²
Ek = 300,000 J = 300 kJ

---

### DEFINE
**Definition**: Give the precise meaning of a term.
**What's required**: An exact physics definition, often a single sentence.

**Example Question**: Define electrical resistance.

**Example Answer**: Resistance is the ratio of potential difference across a component
to the current flowing through it, R = V/I.

---

### STATE
**Definition**: Express in clear, brief terms.
**What's required**: A short, factual answer without explanation.

**Example Question**: State Newton's third law of motion.

**Example Answer**: When object A exerts a force on object B, object B exerts an equal
and opposite force on object A.

---

### DESCRIBE
**Definition**: Give an account of something.
**What's required**: A step-by-step account or listing of features/characteristics.

**Example Question**: Describe the motion of a ball thrown vertically upward.

**Example Answer**: The ball decelerates at 9.81 m s⁻² as it rises, momentarily stops
at maximum height, then accelerates downward at 9.81 m s⁻² until caught or hits ground.

---

### EXPLAIN
**Definition**: Give reasons for or causes of something.
**What's required**: Use physics principles to give reasons why something happens.

**Example Question**: Explain why the resistance of a filament lamp increases as the
current through it increases.

**Example Answer**: As current increases, more charge flows through the filament per
second. This causes more heating due to P = I²R. The increased temperature causes
positive metal ions to vibrate more, increasing collisions with conduction electrons,
which increases resistance.

---

### SHOW THAT
**Definition**: Verify a given statement using physics knowledge and data.
**What's required**: Work through calculation, arriving at the given value.
**Important**: Give your answer to one more significant figure than the given value.

**Example Question**: Show that the speed of sound in air at 20°C is approximately 343 m s⁻¹.
Use v = 331√(T/273) where T is in kelvin.

**Example Answer**:
T = 20 + 273 = 293 K
v = 331√(293/273)
v = 331√(1.073)
v = 331 × 1.036
v = 342.9 m s⁻¹ ≈ 343 m s⁻¹ ✓

---

### DETERMINE
**Definition**: Use given data/information to obtain an answer.
**What's required**: May involve reading values from graphs, processing data.

**Example Question**: [Given a V-I graph] Determine the resistance at 4.0 V.

**Example Answer**: From graph, at V = 4.0 V, I = 0.50 A
R = V/I = 4.0/0.50 = 8.0 Ω

---

### SUGGEST
**Definition**: Apply physics knowledge to an unfamiliar situation.
**What's required**: A reasonable answer based on physics principles; multiple valid answers may exist.

**Example Question**: Suggest why the count rate measured from a radioactive source
varies randomly.

**Example Answer**: Radioactive decay is a random process at the atomic level. Each
nucleus has a fixed probability of decaying, but when it actually decays cannot be
predicted. Background radiation also varies randomly.

---

### COMPARE
**Definition**: Identify similarities and/or differences.
**What's required**: Discuss both similarities AND differences unless only one is asked for.

**Example Question**: Compare gravitational and electric fields.

**Example Answer**:
Similarities: Both obey inverse square law, both have field strength and potential,
both can be represented by field lines.
Differences: Gravitational force always attractive, electric can be attractive or
repulsive. Gravitational potential always negative, electric can be positive or negative.

---

### DISCUSS
**Definition**: Present key points about different aspects of a topic.
**What's required**: Consider multiple viewpoints or factors, often with evaluation.

**Example Question**: Discuss the advantages and disadvantages of nuclear power.

**Example Answer**: Should cover: high energy density, no greenhouse gases (advantages),
radioactive waste, risk of accidents, high construction costs (disadvantages), with
physics reasoning for each point.

---

### EVALUATE
**Definition**: Review information and make a judgement.
**What's required**: Weigh up evidence and reach a reasoned conclusion.

**Example Question**: Evaluate the claim that wind power can replace fossil fuels
for electricity generation.

**Example Answer**: Consider: intermittency (wind doesn't always blow), energy density,
land use, storage requirements, current technology limitations. Conclude with reasoned
judgement based on evidence.

---

### SKETCH
**Definition**: Draw approximately, showing key features.
**What's required**: Shape and key features matter, not precise values.

**Example Question**: Sketch a graph showing how the velocity of a ball falling from
rest varies with time in air.

**Example Answer**: Curve starting at origin, increasing but with decreasing gradient,
approaching horizontal asymptote (terminal velocity).

---

### ESTIMATE
**Definition**: Give an approximate value using reasonable assumptions.
**What's required**: State assumptions, use order of magnitude reasoning.

**Example Question**: Estimate the power output of a human climbing stairs.

**Example Answer**:
Assume: mass = 70 kg, climb 3 m in 10 s
Work done = mgh = 70 × 10 × 3 = 2100 J
Power = W/t = 2100/10 = 210 W ≈ 200 W
`;

// ============================================================================
// SYNOPTIC ASSESSMENT PREPARATION
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_SYNOPTIC = `
## Synoptic Assessment Preparation

Paper 3 (40% of A-Level) is synoptic, meaning questions draw on knowledge from
across the specification and require linking of different topics.

### What is Synoptic Assessment?

Synoptic questions:
- Test understanding across multiple topics
- Require application to unfamiliar contexts
- Demand higher-order thinking skills
- Often involve extended calculations
- May include practical scenarios

### Common Topic Links

**Mechanics + Gravitational Fields**
- Satellite motion (circular motion + gravity)
- Escape velocity (energy + gravitational potential)
- Projectiles in gravitational fields

**Electric Circuits + Electric Fields**
- Capacitor charging/discharging (exponential decay + energy)
- Current in fields (drift velocity + field concepts)

**Waves + Quantum Physics**
- Wave-particle duality
- Photoelectric effect and wave model failure
- Electron diffraction

**Thermodynamics + Kinetic Theory**
- Internal energy and molecular motion
- Ideal gas laws and molecular KE
- Heat capacity and energy distribution

**SHM + Waves + Resonance**
- Standing waves as SHM
- Resonance in mechanical and electrical systems
- Energy in oscillating systems

**Nuclear Physics + Particle Physics**
- Binding energy and nuclear stability
- Conservation laws in reactions
- E = mc² applications

### Synoptic Question Strategies

1. **Identify all topics involved**
   - Read the question carefully
   - List concepts from different topics
   - Consider how they connect

2. **Plan your approach**
   - Decide which equations are needed
   - Consider the order of calculations
   - Identify any assumptions

3. **Show clear working**
   - Label each step
   - State equations before substituting
   - Keep track of units throughout

4. **Check your answer**
   - Is it physically reasonable?
   - Are units correct?
   - Does it answer what was asked?

### Example Synoptic Links

**Example 1: Satellite Energy (Mechanics + Fields)**
Question type: Calculate total energy of orbiting satellite

Topics needed:
- Circular motion: v = √(GM/r)
- Gravitational PE: Ep = -GMm/r
- Kinetic energy: Ek = ½mv²
- Total energy: E = Ek + Ep

Key relationship: Ek = -½Ep for circular orbit, so E = ½Ep = -GMm/(2r)

**Example 2: Capacitor in Sensor Circuit (Circuits + Fields)**
Question type: Analyse capacitor-based sensor

Topics needed:
- Potential divider principles
- Capacitor charge/discharge: Q = Q₀e^(-t/RC)
- Energy stored: E = ½CV²
- Time constant applications

**Example 3: Stellar Evolution (Space + Nuclear)**
Question type: Explain energy production in stars

Topics needed:
- Nuclear fusion: E = Δmc²
- Stefan-Boltzmann law: L = 4πr²σT⁴
- Gravitational equilibrium
- Main sequence lifetime

**Example 4: Damped Oscillations (SHM + Energy)**
Question type: Analyse car suspension system

Topics needed:
- SHM equations
- Energy in SHM: E = ½kA²
- Damping mechanisms
- Resonance avoidance

### Extended Response (6-mark) Guidance

For 6-mark extended responses:

1. **Structure your answer**
   - Introduction stating key concept
   - Logical development of argument
   - Conclusion addressing the question

2. **Use physics terminology**
   - Technical vocabulary
   - Named laws and principles
   - Correct units throughout

3. **Include relevant equations**
   - State relationships
   - Show understanding of when they apply

4. **Quality of Written Communication**
   - Clear, coherent English
   - Logical sequence
   - Appropriate paragraphs

### Level Descriptors Summary

**Level 3 (5-6 marks)**:
- Detailed, comprehensive answer
- Accurate physics throughout
- Well-organised and coherent
- Clear logical structure

**Level 2 (3-4 marks)**:
- Reasonable coverage
- Mostly accurate physics
- Some structure evident
- May lack detail in places

**Level 1 (1-2 marks)**:
- Basic points only
- Some errors
- Limited structure
- Incomplete answer

### Practical Skills in Synoptic Questions

Paper 3 Section A focuses on practical skills:

1. **Planning investigations**
   - Variables (independent, dependent, control)
   - Equipment selection
   - Risk assessment

2. **Data analysis**
   - Graph plotting and interpretation
   - Gradient and intercept determination
   - Uncertainty calculations

3. **Evaluation**
   - Identifying sources of error
   - Suggesting improvements
   - Assessing validity of conclusions

4. **Core practical knowledge**
   - Procedures for all 16 practicals
   - Expected results
   - Common issues and solutions
`;

// ============================================================================
// COGNITIVE CHALLENGE BY DIFFICULTY LEVEL
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, basic calculation, identification | State definitions, substitute into equations, identify quantities from diagrams |
| **Medium** | Application, multi-step calculation, explanation | Apply equations to novel contexts, rearrange and combine formulae, explain physical phenomena |
| **Hard** | Analysis, evaluation, synthesis, extended response | Analyse experimental data, evaluate methods, derive relationships, synoptic problem-solving |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires integration of concepts across multiple topics (e.g., combining mechanics with electricity)
- Demands analysis of unfamiliar experimental contexts or data
- Must evaluate experimental methods and suggest quantitative improvements
- Requires extended mathematical reasoning or derivations from first principles
- No single approach - student must select and justify methodology
- May involve approximations, assumptions, or limiting cases

**Easy (2-3 marks):** Knowledge recall, direct substitution, single-concept calculations
**Medium (4-5 marks):** Multi-step problems, equation rearrangement, application to new contexts
**Hard (6-8 marks):** Extended response with derivation, analysis, evaluation, or synoptic reasoning
`;

// ============================================================================
// EDEXCEL A-LEVEL PHYSICS ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Physics Assessment Objectives

### AO1: Knowledge and Understanding (31-33%)
Demonstrate knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures

**AO1 Question Characteristics:**
- "State", "Define", "Name", "Write" commands
- Recall of laws, definitions, equations
- Describing standard procedures
- Identifying apparatus and techniques

### AO2: Application (41-43%)
Apply knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures
- In theoretical and practical contexts
- When handling qualitative and quantitative data

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Show that", "Explain" commands
- Using equations in calculations
- Applying concepts to new contexts
- Analysing graphs and data

### AO3: Analysis and Evaluation (25-27%)
Analyse, interpret and evaluate:
- Scientific information, ideas and evidence
- Including in relation to issues
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Discuss" commands
- Drawing conclusions from experimental data
- Identifying sources of error
- Suggesting improvements to experiments

### Assessment Weighting Summary
| Objective | Weighting | Focus |
|-----------|-----------|-------|
| AO1 | 31-33% | Knowledge and understanding |
| AO2 | 41-43% | Application |
| AO3 | 25-27% | Analysis and evaluation |

### Paper Structure
| Paper | Content | Time | Marks | % |
|-------|---------|------|-------|---|
| Paper 1 | Topics 1-4, 6-8 | 1h 45m | 90 | 30% |
| Paper 2 | Topics 1, 4-5, 9-13 | 1h 45m | 90 | 30% |
| Paper 3 | All topics + Practicals | 2h 30m | 120 | 40% |

### Additional Requirements
- **40%** of marks require mathematical skills at Level 2 or above
- **15%** of marks assess knowledge of practical work
- Paper 3: 50% tests experimental methods
`;

// ============================================================================
// EDEXCEL A-LEVEL PHYSICS 16 CORE PRACTICALS
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_CORE_PRACTICALS = `
## Edexcel A-Level Physics Core Practicals (16)

Edexcel has 16 core practicals that form a thread linking theoretical knowledge to practical scenarios.
Questions on these can appear in any paper, especially Paper 3.

### Year 1 Core Practicals (1-8)

**CP01: Determine the Acceleration of a Freely-Falling Object**
- Use light gates, video analysis, or drop timer
- Measure time for different heights
- Plot s against t² or v against t
- Determine g from gradient

**CP02: Determine the Electrical Resistivity of a Material**
- Measure resistance for different lengths of wire
- Use micrometer for diameter
- Plot R against L
- Calculate ρ = RA/L

**CP03: Determine EMF and Internal Resistance**
- Vary external resistance, measure V and I
- Plot V against I (or ε = V + Ir)
- Gradient = -r, intercept = ε

**CP04: Investigate Electrical Characteristics (I-V)**
- Filament lamp, diode, thermistor, LDR
- Vary voltage, measure current
- Plot I-V graphs
- Explain shape of each curve

**CP05: Determine the Wavelength of Light Using Diffraction Grating**
- Use laser and diffraction grating
- Measure angle to different orders
- Use d sin θ = nλ
- Consider laser safety

**CP06: Determine the Speed of Sound (or Ultrasound)**
- Use two microphones and oscilloscope
- Or resonance tube method
- Measure wavelength, calculate v = fλ

**CP07: Investigate the Effects of Length and Tension on Waves in Strings**
- Vary tension or length
- Measure wavelength at fixed frequency
- Determine relationship between v, T, μ, L

**CP08: Investigate the Absorption of Gamma Radiation by Lead**
- Use GM tube and gamma source
- Vary thickness of lead absorber
- Plot ln(count rate) against thickness
- Determine half-value thickness

### Year 2 Core Practicals (9-16)

**CP09: Investigate the Relationship Between Force, Mass and Acceleration**
- Use trolley, light gates, masses
- Vary force (constant mass) or mass (constant force)
- Verify F = ma relationship

**CP10: Determine Young Modulus of a Material**
- Use long wire under tension
- Measure extension for different loads
- Plot stress against strain
- Gradient = Young modulus E

**CP11: Investigate Simple Harmonic Motion (Mass-Spring or Pendulum)**
- Measure period for different masses/lengths
- Plot T² against m (or T² against L)
- Determine spring constant k (or verify g)

**CP12: Investigate Boyle's Law and Charles's Law**
- Boyle's: pV = constant at fixed T
- Charles's: V/T = constant at fixed p
- Plot appropriate graphs

**CP13: Investigate Charging and Discharging of Capacitors**
- Measure V or I against time
- Plot ln(V) against t
- Determine time constant τ = RC

**CP14: Investigate Force on a Current-Carrying Conductor**
- Use current balance
- Vary current, measure force
- Verify F = BIL

**CP15: Investigate Magnetic Flux Linkage**
- Use search coil and oscilloscope
- Investigate factors affecting induced EMF
- Verify Faraday's law

**CP16: Investigate Simple Harmonic Oscillator (More Advanced)**
- Use oscillating system (e.g., loaded ruler)
- Analyse motion using data logger
- Compare with theoretical predictions
`;

// ============================================================================
// EDEXCEL A-LEVEL PHYSICS COMMAND WORDS
// ============================================================================

const EDEXCEL_ALEVEL_PHYSICS_COMMAND_WORDS = `
## Edexcel A-Level Physics Command Words

### Calculation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Calculate** | Obtain numerical answer | Show working, include units |
| **Determine** | Use data/information to obtain answer | May involve graph reading |
| **Show that** | Verify using subject knowledge | Quote to 1 more s.f. than given |
| **Estimate** | Give approximate value | Use sensible assumptions |

### Knowledge Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **State** | Express in clear terms | Brief answer |
| **Define** | Give precise meaning | Exact physics definition |
| **Describe** | Give an account of | Sequence or features |
| **Outline** | Set out main points | Brief summary |

### Explanation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Explain** | Give reasons for or causes of | Use physics principles |
| **Suggest** | Apply knowledge to new context | Multiple valid answers |
| **Compare** | Identify similarities and/or differences | Both if asked |
| **Distinguish** | State differences | Focus on differences |

### Analysis Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Discuss** | Consider different aspects | Extended response |
| **Evaluate** | Review and reach conclusion | Pros and cons |
| **Justify** | Support with evidence | Link to physics |
| **Analyse** | Examine for patterns | Quote data values |

### Diagram Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Sketch** | Draw approximately | Shape matters, not precision |
| **Draw** | Produce accurate diagram | Use ruler if appropriate |
| **Plot** | Mark points on graph | Use crosses |
`;

// ============================================================================
// EDEXCEL VS AQA KEY DIFFERENCES
// ============================================================================

const EDEXCEL_VS_AQA_DIFFERENCES = `
## Edexcel A-Level Physics: Key Differences from AQA

### Core Practicals
| Board | Number | Structure |
|-------|--------|-----------|
| Edexcel | 16 core practicals | Integrated throughout |
| AQA | 12 required practicals | Split by year |

### Paper Structure
| Aspect | Edexcel | AQA |
|--------|---------|-----|
| Papers | 3 papers | 3 papers |
| Paper 3 focus | General + 50% practical | Options (Astrophysics etc.) |
| Total time | 6 hours | 6 hours |
| Total marks | 300 | 270 |

### Question Style
- **Edexcel**: Math-heavy, problem-solving focus, clear structure
- **AQA**: More conceptual, application to novel scenarios
- **Edexcel**: Predictable format, strong on engineering contexts
- **AQA**: Broader physics contexts, particle physics emphasis

### Content Differences
- Edexcel: Less particle physics than AQA
- Edexcel: More engineering/technology applications
- AQA: Optional topics in Paper 3
`;

// Edexcel A-Level Physics guiding principles
const EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES = `
${EDEXCEL_ALEVEL_PHYSICS_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_PHYSICS_CORE_PRACTICALS}

${EDEXCEL_ALEVEL_PHYSICS_COMMAND_WORDS}

${EDEXCEL_VS_AQA_DIFFERENCES}

Edexcel A-Level Physics Command Words:
- Calculate: Obtain a numerical answer, showing relevant working
- Compare: Identify similarities and/or differences
- Define: Give the precise meaning
- Describe: Give an account of
- Determine: Use given data or information to obtain an answer
- Discuss: Consider different aspects and how they relate
- Estimate: Give an approximate value
- Evaluate: Review information and reach a conclusion
- Explain: Give reasons for or causes of
- Justify: Support a case with evidence
- Outline: Set out the main points
- Show that: Verify using subject knowledge
- Sketch: Draw approximately
- State: Express in clear terms

Edexcel Mark Scheme Conventions:
- Working must be shown for calculation questions
- Units required in final answer (unless stated otherwise)
- Appropriate significant figures (usually 2-3 sf)
- Extended open response questions marked with levels
- Accept equivalent correct physics

**Edexcel-Specific Characteristics (vs AQA/OCR):**
- Strong focus on PROBLEM-SOLVING and MATHEMATICAL FLUENCY
- MATH-HEAVY syllabus - benefits aspiring engineers
- Questions are CLEAR and PREDICTABLE in structure
- 16 Core Practicals across the course
- Papers: Paper 1 (Advanced Physics I), Paper 2 (Advanced Physics II), Paper 3 (General/Practical)
- Less emphasis on particle physics than AQA
- More focus on applied contexts (engineering, technology)
- Clear progression from core concepts to advanced applications
- Mix of assessment methods combining theory and practical skills

Data Booklet:
Edexcel provides a formula booklet in exams. Some equations are given, others must be recalled.
Given: F = GMm/r², E = hf, ε = -N(dΦ/dt), etc.
Must recall: v = fλ, E = ½mv², p = mv, V = IR, etc.

### Multi-Method Questions: Equal Credit for Valid Approaches

Physics calculations often have multiple valid solution paths. Award full marks for ANY correct method.

**Example 1: Kinematics problems**
Accept any valid combination of SUVAT equations that reaches correct answer.
- Different equation selection for same result: all earn full marks
- Energy methods vs kinematic methods: both valid

**Example 2: Circuit analysis**
Accept both:
- Kirchhoff's laws approach
- Series/parallel simplification method
- Potential divider method where applicable

**Example 3: Forces and motion**
Accept:
- Component resolution method
- Vector diagram method
- Energy/work approach

**Example 4: Wave calculations**
Accept:
- v = fλ directly applied
- Path difference approach for interference
- Phase difference method

**Example 5: SHM problems**
Accept:
- Energy conservation approach: ½kx² = ½mv²
- Kinematic approach using a = -ω²x
- Direct application of SHM equations
`;

// Topic-specific guidance
const EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-alevel-physics-working': `
Topic 1: Working as a Physicist:
- SI units, prefixes and dimensional analysis
- Estimating orders of magnitude
- Experimental uncertainties and error analysis
- Data processing and graph skills
Edexcel often tests: combining uncertainties, log graphs, linearisation
`,
  'edexcel-alevel-physics-mechanics': `
Topic 2: Mechanics:
- SUVAT equations and motion graphs
- Projectile motion (independent components)
- Newton's laws and free body diagrams
- Momentum conservation and impulse
- Work, energy and power
Core practicals: Measuring g, Projectile investigation
Edexcel often tests: projectiles, momentum in 2D, energy calculations
`,
  'edexcel-alevel-physics-circuits': `
Topic 3: Electric Circuits:
- Current as charge flow: I = nAvq
- Resistance, resistivity and temperature effects
- I-V characteristics of components
- Kirchhoff's laws and circuit analysis
- EMF, internal resistance and potential dividers
Core practicals: Resistivity, I-V characteristics, EMF
Edexcel often tests: circuit analysis, potential dividers, internal resistance
`,
  'edexcel-alevel-physics-further-mechanics': `
Topic 6: Further Mechanics:
- Circular motion: ω, v, a, F relationships
- Centripetal force and acceleration
- Vertical circles and varying tension
- 2D momentum and oblique collisions
Core practical: Circular motion investigation
Edexcel often tests: circular motion calculations, conical pendulum
`,
  'edexcel-alevel-physics-em-fields': `
Topic 7: Electric and Magnetic Fields:
- Electric fields: E = F/Q, E = V/d, E = kQ/r²
- Capacitance and energy storage
- Capacitor charge/discharge: τ = RC
- Magnetic fields: F = BIL, F = BQv
- Electromagnetic induction: ε = -N(dΦ/dt)
- Transformers and AC
Core practicals: Capacitor discharge, EMI investigation
Edexcel often tests: field comparisons, capacitor calculations, transformers
`,
  'edexcel-alevel-physics-nuclear-particle': `
Topic 8: Nuclear and Particle Physics:
- Quarks, leptons, hadrons
- Conservation laws (baryon, lepton, strangeness)
- Exchange particles and Feynman diagrams
- Particle accelerators
- Pair production and annihilation
Edexcel often tests: quark composition, conservation laws, Feynman diagrams
`,
  'edexcel-alevel-physics-materials': `
Topic 4: Materials:
- Density and Archimedes' principle
- Viscous drag and terminal velocity
- Hooke's law and Young modulus
- Stress-strain graphs
- Elastic strain energy
Core practicals: Terminal velocity, Young modulus
Edexcel often tests: Young modulus calculations, stress-strain interpretation
`,
  'edexcel-alevel-physics-waves': `
Topic 5: Waves and Particle Nature of Light:
- Wave properties and polarisation
- Superposition and interference
- Stationary waves on strings and in pipes
- Diffraction and diffraction gratings
- Photoelectric effect and work function
- de Broglie wavelength
Core practicals: Refractive index, Double slit, Stationary waves, Grating
Edexcel often tests: interference calculations, photoelectric equation, energy levels
`,
  'edexcel-alevel-physics-thermodynamics': `
Topic 9: Thermodynamics:
- Specific heat capacity and latent heat
- Ideal gas equation: pV = nRT = NkT
- Kinetic theory: pV = ⅓Nm<c²>
- Mean kinetic energy: ½m<c²> = 3/2 kT
Core practicals: Specific heat capacity, Gas laws
Edexcel often tests: gas calculations, kinetic theory, internal energy
`,
  'edexcel-alevel-physics-space': `
Topic 10: Space:
- Stellar luminosity and magnitude
- Wien's law and Stefan-Boltzmann law
- HR diagram and stellar evolution
- Doppler effect and red shift
- Hubble's law and cosmology
Edexcel often tests: magnitude calculations, stellar classification, Hubble's law
`,
  'edexcel-alevel-physics-nuclear-rad': `
Topic 11: Nuclear Radiation:
- Radioactive decay: N = N₀e^(-λt)
- Half-life: t½ = ln2/λ
- Binding energy and mass defect
- Fission and fusion
Core practical: Half-life simulation
Edexcel often tests: decay calculations, binding energy curve, nuclear equations
`,
  'edexcel-alevel-physics-gravity': `
Topic 12: Gravitational Fields:
- Newton's law: F = GMm/r²
- Field strength: g = GM/r²
- Potential: V = -GM/r
- Orbital motion and Kepler's laws
- Escape velocity
Edexcel often tests: orbital calculations, potential energy, escape velocity
`,
  'edexcel-alevel-physics-oscillations': `
Topic 13: Oscillations:
- SHM defining equation: a = -ω²x
- Displacement, velocity, acceleration equations
- Energy in SHM
- Damping types and effects
- Forced vibrations and resonance
Core practicals: Mass-spring, Simple pendulum
Edexcel often tests: SHM graphs, energy calculations, resonance curves
`,
};

// Standard prompt
export function getEdexcelALevelPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuide = {
    easy: 'AS standard, 2-3 marks, single concept, direct recall or straightforward substitution',
    medium: 'Full A-Level, 4-5 marks, combines concepts, multi-step reasoning or equation rearrangement',
    hard: 'Challenging A-Level, 6-8 marks, synoptic thinking across topics, unfamiliar contexts, requires extended analysis, evaluation or synthesis of multiple physics principles'
  };

  return `Generate an Edexcel A-Level Physics question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${EDEXCEL_ALEVEL_PHYSICS_COGNITIVE_CHALLENGE}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Paper: ${topic.paperRestriction || 'Not specified'}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Requirements:
- Match Edexcel A-Level exam style
- Use appropriate mathematical rigour
- Include realistic physics context
- Provide clear mark allocation
- Show all working in solution

Respond with JSON:
{
  "content": "Question text with parts (a), (b), (c) etc if needed",
  "solution": "Complete worked solution",
  "marks": <total marks>,
  "markScheme": "Point-by-point mark allocation",
  "diagram": <optional DiagramSpec - include when question has stimulus diagram shown WITH the question>,
  "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>
}

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('physics')}`;
}

// Extended response questions
export function getEdexcelALevelPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate a 6-mark extended response Edexcel A-Level Physics question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

Extended Response Guidelines:
- Require detailed, structured scientific argument
- Test ability to link concepts logically
- May ask to explain, evaluate, compare or discuss
- Marked using level descriptors

Level Descriptors:
- Level 3 (5-6 marks): Detailed, coherent, well-organised, accurate physics
- Level 2 (3-4 marks): Some structure, mostly accurate, may lack detail
- Level 1 (1-2 marks): Basic points, limited structure, some errors

Respond with JSON:
{
  "content": "Extended response question",
  "solution": "Model Level 3 answer",
  "marks": 6,
  "markScheme": "Level descriptors with indicative content"
}`;
}

// Multiple choice
export function getEdexcelALevelPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Physics multiple choice question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Guidelines:
- One clearly correct answer
- Three plausible distractors (common misconceptions)
- Tests understanding, not memory
- Similar length/format options

Respond with JSON:
{
  "content": "Question stem\\n\\nA [option]\\nB [option]\\nC [option]\\nD [option]",
  "solution": "Correct: [X]. [Physics explanation]",
  "marks": 1,
  "markScheme": "1 mark: [X]"
}`;
}

// Calculation questions
export function getEdexcelALevelPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const equationsForTopic: Record<string, string[]> = {
    'edexcel-alevel-physics-mechanics': ['SUVAT equations', 'F = ma', 'p = mv', 'Ek = ½mv²', 'Ep = mgh', 'W = Fs cos θ'],
    'edexcel-alevel-physics-circuits': ['V = IR', 'ρ = RA/L', 'I = nAvq', 'P = IV', 'ε = I(R + r)'],
    'edexcel-alevel-physics-further-mechanics': ['a = v²/r = ω²r', 'F = mv²/r', 'v = rω'],
    'edexcel-alevel-physics-em-fields': ['E = V/d', 'E = kQ/r²', 'C = Q/V', 'τ = RC', 'F = BIL', 'ε = -NdΦ/dt'],
    'edexcel-alevel-physics-materials': ['ρ = m/V', 'E = σ/ε', 'F = 6πηrv'],
    'edexcel-alevel-physics-waves': ['v = fλ', 'd sin θ = nλ', 'E = hf', 'λ = h/mv', 'hf = φ + Ek'],
    'edexcel-alevel-physics-thermodynamics': ['pV = nRT', 'pV = ⅓Nm<c²>', '½m<c²> = 3/2 kT'],
    'edexcel-alevel-physics-space': ['m - M = 5 log(d/10)', 'L = 4πr²σT⁴', 'v = H₀d'],
    'edexcel-alevel-physics-nuclear-rad': ['N = N₀e^(-λt)', 't½ = ln2/λ', 'E = mc²'],
    'edexcel-alevel-physics-gravity': ['F = GMm/r²', 'g = GM/r²', 'V = -GM/r', 'v = √(GM/r)'],
    'edexcel-alevel-physics-oscillations': ['a = -ω²x', 'T = 2π√(m/k)', 'T = 2π√(L/g)', 'E = ½kA²'],
  };

  const relevantEquations = equationsForTopic[topic.id] || ['Use appropriate equation'];

  return `Generate an Edexcel A-Level Physics calculation question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Relevant Equations:
${relevantEquations.join('\n')}

Requirements:
- Provide all necessary data
- Use realistic physics values
- ${difficulty === 'easy' ? 'Single-step' : difficulty === 'medium' ? 'Multi-step' : 'Complex multi-step'}
- Solution shows clear working

Respond with JSON:
{
  "content": "Calculation question",
  "solution": "Step-by-step working with units",
  "marks": <3-6>,
  "markScheme": "Equation [1], Substitution [1], Answer [1]"
}`;
}

// Explain questions
export function getEdexcelALevelPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Physics explanation question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Question types:
- "Explain why..." (reasons)
- "Describe how..." (process)
- "Explain how..." (reasons and mechanism)

Marking:
- Each valid physics point = 1 mark
- Technical vocabulary expected
- Logical sequence for processes

${difficulty === 'easy' ? '2-3 marks' : difficulty === 'medium' ? '3-4 marks' : '4-5 marks'}

Respond with JSON:
{
  "content": "Explain/Describe question",
  "solution": "Full explanation",
  "marks": <2-5>,
  "markScheme": "Point 1 [1]\\nPoint 2 [1]"
}`;
}

// Graph questions
export function getEdexcelALevelPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Physics graph question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Graph skills tested:
- Reading values accurately
- Calculating gradients
- Finding areas under curves
- Interpreting features
- Drawing best fit lines/curves

Respond with JSON:
{
  "content": "Graph description/data + questions",
  "solution": "Analysis with answers",
  "marks": <3-6>,
  "markScheme": "Reading [1], Calculation [1-2], Interpretation [1-2]"
}`;
}

// Compare questions
export function getEdexcelALevelPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Physics comparison question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Guidelines:
- Require similarity AND difference
- Points should be paired
- Technical terminology required

${difficulty === 'easy' ? '2-3 marks' : difficulty === 'medium' ? '3-4 marks' : '4-6 marks'}

Respond with JSON:
{
  "content": "Compare question",
  "solution": "Structured comparison",
  "marks": <2-6>,
  "markScheme": "Similarity [1], Difference [1]"
}`;
}

// Practical questions
export function getEdexcelALevelPhysicsPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = EDEXCEL_ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel A-Level Physics practical question.
${EDEXCEL_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Practical skills:
- Experimental method design
- Variable identification
- Data collection and processing
- Uncertainty analysis
- Evaluation and improvements

Respond with JSON:
{
  "content": "Practical question",
  "solution": "Complete answer",
  "marks": <3-6>,
  "markScheme": "Method [1-2], Analysis [1-2], Evaluation [1-2]"
}`;
}
