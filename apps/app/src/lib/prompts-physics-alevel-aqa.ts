// AQA A-Level Physics (7408) Question Generation Prompts
// Tailored to AQA A-Level specification style and assessment objectives
//
// Sources:
// - https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification
// - https://filestore.aqa.org.uk/resources/physics/AQA-7407-7408-PHBK.PDF
// - https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification/scheme-of-assessment
//
// This file contains:
// 1. Complete AQA A-Level Physics specification coverage (all 8 core topics + optional topics)
// 2. Detailed assessment objectives with weightings
// 3. Paper structure and mark allocation
// 4. 25-35 fully worked example questions with complete mark schemes
// 5. Key formulae and equations (data booklet content)
// 6. Required practical guidance (all 12 AQA required practicals)
// 7. Command word definitions with physics examples
// 8. Common misconceptions by topic
// 9. Mathematical skills (calculus, vectors, graphs)
// 10. SI units and prefixes
// 11. Synoptic questions guidance

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA A-LEVEL PHYSICS PAPER STRUCTURE AND MARK ALLOCATION
// ============================================================================

const AQA_ALEVEL_PHYSICS_PAPER_STRUCTURE = `
## AQA A-Level Physics Paper Structure (7408)

### Paper 1: Sections 1-5 and Periodic Motion (from Section 6)
- **Duration:** 2 hours
- **Marks:** 85 marks
- **Weighting:** 34% of A-Level
- **Content:**
  - Section 1: Measurements and Their Errors
  - Section 2: Particles and Radiation
  - Section 3: Waves
  - Section 4: Mechanics and Materials
  - Section 5: Electricity
  - Section 6.1: Further Mechanics (Periodic Motion)
- **Question Types:**
  - Short answer questions
  - Extended open response questions (6 marks)
  - Questions testing practical skills in written exams
  - Calculation questions
  - Multiple choice questions (25 marks)
- **Calculator:** Allowed

### Paper 2: Sections 6.2 and 7-8
- **Duration:** 2 hours
- **Marks:** 85 marks
- **Weighting:** 34% of A-Level
- **Content:**
  - Section 6.2: Thermal Physics
  - Section 7: Fields and Their Consequences
  - Section 8: Nuclear Physics
- **Question Types:**
  - Short answer questions
  - Extended open response questions (6 marks)
  - Questions testing practical skills in written exams
  - Calculation questions
  - Multiple choice questions (25 marks)
- **Calculator:** Allowed

### Paper 3: Practical Skills and Data Analysis
- **Duration:** 2 hours
- **Marks:** 80 marks
- **Weighting:** 32% of A-Level
- **Content:**
  - Section A: Compulsory (45 marks) - Practical skills and data analysis
  - Section B: Optional Topic (35 marks) - One from:
    - Astrophysics
    - Medical Physics
    - Engineering Physics
    - Turning Points in Physics
    - Electronics
- **Question Types:**
  - Practical based questions from any area of the specification
  - Data analysis questions
  - Synoptic questions linking different areas
  - Option topic questions
- **Calculator:** Allowed

### Mark Scheme Weightings Across Papers
| Assessment Objective | Paper 1 | Paper 2 | Paper 3 | Overall |
|---------------------|---------|---------|---------|---------|
| AO1 (Knowledge) | 28-30% | 28-30% | 35-37% | 31-33% |
| AO2 (Application) | 44-46% | 44-46% | 35-37% | 41-43% |
| AO3 (Analysis) | 24-26% | 24-26% | 27-29% | 25-27% |

### Practical Skills Assessment
- **15%** of total marks assess practical skills in written exams
- Questions may assess knowledge and understanding of apparatus, techniques, and procedures
- Data analysis and evaluation of experimental methods
- **Practical Endorsement** assessed separately (Pass/Not classified)
  - Not graded but reported alongside A-Level grade
  - Based on teacher assessment of 12 required practicals

### Mathematical Skills Requirement
- **40%** minimum of marks require mathematical skills at Level 2 or above
- Includes: algebra, geometry, trigonometry, logarithms, exponentials
- Calculus (differentiation and integration) required for A-Level
- Graph plotting, analysis, and interpretation
`;

// ============================================================================
// SI UNITS AND PREFIXES
// ============================================================================

const AQA_ALEVEL_PHYSICS_SI_UNITS = `
## SI Base Units

| Quantity | Base Unit | Symbol |
|----------|-----------|--------|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

## Derived Units with Special Names

| Quantity | Unit | Symbol | In Base Units |
|----------|------|--------|---------------|
| Frequency | hertz | Hz | s⁻¹ |
| Force | newton | N | kg m s⁻² |
| Pressure, Stress | pascal | Pa | kg m⁻¹ s⁻² (N m⁻²) |
| Energy, Work | joule | J | kg m² s⁻² (N m) |
| Power | watt | W | kg m² s⁻³ (J s⁻¹) |
| Electric charge | coulomb | C | A s |
| Electric potential | volt | V | kg m² s⁻³ A⁻¹ (J C⁻¹) |
| Capacitance | farad | F | A² s⁴ kg⁻¹ m⁻² (C V⁻¹) |
| Resistance | ohm | Ω | kg m² s⁻³ A⁻² (V A⁻¹) |
| Magnetic flux | weber | Wb | kg m² s⁻² A⁻¹ (V s) |
| Magnetic flux density | tesla | T | kg s⁻² A⁻¹ (Wb m⁻²) |
| Inductance | henry | H | kg m² s⁻² A⁻² (Wb A⁻¹) |
| Activity | becquerel | Bq | s⁻¹ |
| Absorbed dose | gray | Gy | m² s⁻² (J kg⁻¹) |

## SI Prefixes

| Prefix | Symbol | Factor | Scientific Notation |
|--------|--------|--------|---------------------|
| tera | T | 1,000,000,000,000 | 10¹² |
| giga | G | 1,000,000,000 | 10⁹ |
| mega | M | 1,000,000 | 10⁶ |
| kilo | k | 1,000 | 10³ |
| (base) | - | 1 | 10⁰ |
| centi | c | 0.01 | 10⁻² |
| milli | m | 0.001 | 10⁻³ |
| micro | μ | 0.000001 | 10⁻⁶ |
| nano | n | 0.000000001 | 10⁻⁹ |
| pico | p | 0.000000000001 | 10⁻¹² |
| femto | f | 0.000000000000001 | 10⁻¹⁵ |

## Dimensional Analysis Examples

| Quantity | Dimensions | Example Check |
|----------|-----------|---------------|
| Velocity | [L T⁻¹] | m s⁻¹ ✓ |
| Acceleration | [L T⁻²] | m s⁻² ✓ |
| Force | [M L T⁻²] | kg m s⁻² = N ✓ |
| Energy | [M L² T⁻²] | kg m² s⁻² = J ✓ |
| Power | [M L² T⁻³] | kg m² s⁻³ = W ✓ |
| Momentum | [M L T⁻¹] | kg m s⁻¹ ✓ |
| Pressure | [M L⁻¹ T⁻²] | kg m⁻¹ s⁻² = Pa ✓ |
| Electric field | [M L T⁻³ A⁻¹] | V m⁻¹ = N C⁻¹ ✓ |
| Magnetic field | [M T⁻² A⁻¹] | T = Wb m⁻² ✓ |
`;

// ============================================================================
// MATHEMATICAL SKILLS FOR A-LEVEL PHYSICS
// ============================================================================

const AQA_ALEVEL_PHYSICS_MATHEMATICAL_SKILLS = `
## Mathematical Skills Required for AQA A-Level Physics

### Arithmetic and Numerical Computation
- Standard form (scientific notation): 3.0 × 10⁸
- Significant figures and rounding
- Ratios and proportional reasoning
- Estimation and order of magnitude
- Unit conversions with prefixes

### Algebra
- Rearranging equations with multiple steps
- Solving simultaneous equations (2 variables)
- Solving quadratic equations (formula method)
- Using logarithms: ln, log₁₀, exponential functions
- Handling expressions with indices (powers)

### Geometry and Trigonometry
- Angles in degrees and radians: θ(rad) = θ(°) × π/180
- Trigonometric ratios: sin, cos, tan
- Small angle approximations: sin θ ≈ θ, cos θ ≈ 1, tan θ ≈ θ (θ in radians)
- Pythagoras' theorem for resultant vectors
- Arc length s = rθ

### Graphs
- Plotting graphs with appropriate scales
- Determining gradients including tangent method
- Measuring areas under curves (counting squares, trapezium rule)
- Straight line equation y = mx + c interpretation
- Recognising and using logarithmic graphs:
  - y = ax^n → log y = n log x + log a
  - y = ae^(kx) → ln y = kx + ln a

### Calculus (A-Level only, not AS)
**Differentiation:**
- Rate of change: v = ds/dt, a = dv/dt
- Finding gradients of curves
- Maximum and minimum values

**Integration:**
- Area under velocity-time graph = displacement
- Charge = ∫I dt
- Work done = ∫F dx

### Vector Mathematics
**Vector Addition:**
- Graphical method (tip-to-tail)
- Component method: R_x = A_x + B_x, R_y = A_y + B_y
- Magnitude: |R| = √(R_x² + R_y²)
- Direction: θ = tan⁻¹(R_y/R_x)

**Vector Resolution:**
- Horizontal component: F_x = F cos θ
- Vertical component: F_y = F sin θ

**Scalar (Dot) Product:**
- W = F · s = Fs cos θ

### Exponential and Logarithmic Functions
- Exponential decay: N = N₀e^(-λt)
- Capacitor discharge: V = V₀e^(-t/RC)
- Logarithmic form: ln(N/N₀) = -λt
- Half-life relation: t½ = ln 2/λ = 0.693/λ

### Common Mathematical Mistakes in Physics
1. Forgetting to convert units (mm to m, °C to K)
2. Using wrong trig function for component
3. Confusing radians and degrees in calculator
4. Wrong signs in vector problems
5. Incorrect rearrangement of equations
6. Confusing log₁₀ and ln
7. Not squaring the denominator in inverse square laws
`;

// ============================================================================
// AQA A-LEVEL PHYSICS ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const AQA_ALEVEL_PHYSICS_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Physics Assessment Objectives

### AO1: Knowledge and Understanding (31-33%)
Demonstrate knowledge and understanding of:
- Scientific ideas, processes, techniques and procedures

**AO1 Question Characteristics:**
- "State", "Define", "Name", "Write down" commands
- Recall of laws, definitions, equations
- Describing standard procedures
- Identifying apparatus

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
- Planning investigations

### AO3: Analysis and Evaluation (25-27%)
Analyse, interpret and evaluate:
- Scientific information, ideas and evidence
- Including in relation to issues
- To make judgements and reach conclusions
- To develop and refine practical design and procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Discuss", "Comment" commands
- Drawing conclusions from experimental data
- Identifying and explaining sources of error
- Suggesting improvements to experiments
- Evaluating scientific claims and evidence

### Assessment Weighting Summary
| Objective | Weighting | Focus |
|-----------|-----------|-------|
| AO1 | 31-33% | Knowledge and understanding |
| AO2 | 41-43% | Application |
| AO3 | 25-27% | Analysis and evaluation |

### Additional Requirements
- **40%** of marks require mathematical skills at Level 2 or above
- **15%** of marks assess knowledge of practical work
- Practical endorsement assessed separately (Pass/Not classified)

### Quality of Written Communication (QWC)
Questions assessing QWC will require students to:
- Select and use appropriate form and style of writing
- Organise information clearly and coherently
- Use specialist vocabulary accurately
`;

// ============================================================================
// COMMON MISCONCEPTIONS BY TOPIC
// ============================================================================

const AQA_ALEVEL_PHYSICS_COMMON_MISCONCEPTIONS = `
## Common Misconceptions in A-Level Physics

### Section 1: Measurements and Errors
- **Misconception:** Resolution and uncertainty are the same thing
  - **Correct:** Resolution is the smallest reading; uncertainty includes resolution plus random errors
- **Misconception:** More decimal places means more accurate
  - **Correct:** Precision (decimal places) ≠ accuracy (closeness to true value)
- **Misconception:** Percentage uncertainties can be negative
  - **Correct:** Percentage uncertainties are always positive (absolute values)
- **Misconception:** Zero error affects precision
  - **Correct:** Zero error is a systematic error affecting accuracy, not precision

### Section 2: Particles and Radiation
- **Misconception:** Photons have mass because E = mc²
  - **Correct:** Photons have zero rest mass; E = pc for photons
- **Misconception:** Work function is the same for all metals
  - **Correct:** Work function is material-dependent (varies from ~2 to 5 eV)
- **Misconception:** Increasing light intensity increases photoelectron kinetic energy
  - **Correct:** Intensity affects NUMBER of electrons; frequency affects energy
- **Misconception:** Quarks can exist freely
  - **Correct:** Quarks are always confined (quark confinement)
- **Misconception:** Beta-minus decay releases an electron that was in the nucleus
  - **Correct:** The electron is created during the decay (neutron → proton + electron + antineutrino)

### Section 3: Waves
- **Misconception:** Transverse waves cannot travel through solids
  - **Correct:** Transverse waves CAN travel through solids (e.g., S-waves in earthquakes)
- **Misconception:** In stationary waves, energy is transferred along the wave
  - **Correct:** In stationary waves, energy is stored, not transferred
- **Misconception:** Diffraction only happens at edges
  - **Correct:** Diffraction happens whenever a wave passes through a gap or around an obstacle
- **Misconception:** Coherent sources must have the same amplitude
  - **Correct:** Coherent means same frequency and constant phase relationship (amplitude can differ)
- **Misconception:** Critical angle can occur when light goes from less dense to more dense medium
  - **Correct:** Critical angle only occurs when going from higher to lower refractive index

### Section 4: Mechanics and Materials
- **Misconception:** Heavier objects fall faster than lighter ones
  - **Correct:** In a vacuum, all objects fall at the same rate (g ≈ 9.81 m s⁻²)
- **Misconception:** An object needs a force to keep moving
  - **Correct:** Newton's 1st law - objects continue at constant velocity unless acted upon by a force
- **Misconception:** Action and reaction forces act on the same object
  - **Correct:** Newton's 3rd law pairs always act on DIFFERENT objects
- **Misconception:** Momentum is the same as kinetic energy
  - **Correct:** p = mv (vector); KE = ½mv² (scalar) - different quantities
- **Misconception:** Stress and strain are the same
  - **Correct:** Stress = Force/Area (Pa); Strain = Extension/Original length (dimensionless)
- **Misconception:** Young modulus depends on the dimensions of the sample
  - **Correct:** Young modulus is a material property, independent of dimensions

### Section 5: Electricity
- **Misconception:** Current is "used up" as it flows through components
  - **Correct:** Current is the same everywhere in a series circuit (charge is conserved)
- **Misconception:** Voltage is stored in a battery
  - **Correct:** Energy (chemical) is stored; EMF is the energy transferred per unit charge
- **Misconception:** Electrons move at the speed of light in a circuit
  - **Correct:** Drift velocity is typically ~mm/s; the electric field propagates at ~c
- **Misconception:** In parallel circuits, current "splits equally"
  - **Correct:** Current divides inversely proportional to resistance
- **Misconception:** Internal resistance is always small enough to ignore
  - **Correct:** Internal resistance can significantly affect terminal PD, especially under high current

### Section 6.1: Further Mechanics (Circular Motion and SHM)
- **Misconception:** Centripetal force is an additional force
  - **Correct:** Centripetal force is the resultant of real forces (tension, gravity, friction, etc.)
- **Misconception:** Objects in circular motion experience centrifugal force
  - **Correct:** Centrifugal force is fictitious (only appears in rotating reference frame)
- **Misconception:** At the top of a vertical circle, velocity is zero
  - **Correct:** Velocity is minimum (not zero) at the top; v_min = √(gr)
- **Misconception:** In SHM, velocity is maximum at maximum displacement
  - **Correct:** v = 0 at x = ±A; v = max at x = 0 (equilibrium)
- **Misconception:** Amplitude affects the period of SHM
  - **Correct:** For true SHM, period is independent of amplitude

### Section 6.2: Thermal Physics
- **Misconception:** Temperature measures heat
  - **Correct:** Temperature measures average kinetic energy; heat is energy transfer
- **Misconception:** All molecules in a gas have the same speed
  - **Correct:** Molecules have a distribution of speeds (Maxwell-Boltzmann)
- **Misconception:** Cold flows into warm objects
  - **Correct:** Heat (thermal energy) always flows from hot to cold
- **Misconception:** Absolute zero means molecules have zero energy
  - **Correct:** At 0 K, molecules have minimum (zero-point) energy due to quantum mechanics
- **Misconception:** Internal energy only includes kinetic energy
  - **Correct:** Internal energy = kinetic energy + potential energy of molecules

### Section 7: Fields
- **Misconception:** Gravitational field strength and potential are the same
  - **Correct:** g = -dV/dr; g is force per unit mass, V is energy per unit mass
- **Misconception:** Electric field lines can cross
  - **Correct:** Field lines never cross (would imply two directions at one point)
- **Misconception:** Capacitors store charge
  - **Correct:** Capacitors store energy (in the electric field); total charge = 0
- **Misconception:** Faraday's law says EMF depends on flux
  - **Correct:** EMF depends on RATE OF CHANGE of flux (dΦ/dt)
- **Misconception:** Transformers work with DC
  - **Correct:** Transformers require changing magnetic flux, so need AC

### Section 8: Nuclear Physics
- **Misconception:** Half-life means all nuclei decay after two half-lives
  - **Correct:** After 2t½, 25% remain; decay is probabilistic
- **Misconception:** Nuclear radiation makes things radioactive
  - **Correct:** Only neutron bombardment can induce radioactivity (neutron activation)
- **Misconception:** Mass defect is lost mass
  - **Correct:** Mass defect is converted to binding energy (E = Δmc²)
- **Misconception:** Fission releases more energy per nucleon than fusion
  - **Correct:** Fusion releases more energy per nucleon; fission releases more total energy per reaction
- **Misconception:** Background radiation comes only from man-made sources
  - **Correct:** Most background is natural (radon, cosmic rays, rocks)
`;

// ============================================================================
// AQA A-LEVEL PHYSICS 12 REQUIRED PRACTICALS
// ============================================================================

const AQA_ALEVEL_PHYSICS_REQUIRED_PRACTICALS = `
## AQA A-Level Physics Required Practicals (12)

These 12 practicals are mandatory. Questions on apparatus, techniques, and analysis can appear in any paper.
Each practical develops specific skills in apparatus handling, data collection, analysis, and evaluation.

---

### RP01: Investigation into Stationary Waves on a String

**Aim:** Investigate how frequency affects wavelength and verify the wave equation.

**Apparatus:**
- Signal generator and vibration generator
- Pulley, string (e.g., 1-2 m length)
- Slotted masses and hanger
- Metre rule
- Retort stand and clamp

**Method:**
1. Set up vibration generator at one end, string over pulley with hanging masses
2. Adjust signal generator frequency until clear stationary wave pattern forms
3. Measure wavelength (λ) by measuring distance between nodes (λ = 2 × node spacing)
4. Record frequency (f) from signal generator
5. Repeat for different frequencies/harmonics
6. Keep tension (T = mg) constant throughout

**Analysis:**
- Plot v = fλ against √T to verify v = √(T/μ)
- Or plot f against 1/λ for constant tension (gradient = v)
- Calculate μ (mass per unit length) from μ = m/L

**Key Equations:**
- v = fλ
- v = √(T/μ)
- λₙ = 2L/n for nth harmonic

**Common Errors:**
- Not achieving clear nodes (parallax when measuring)
- Friction at pulley affecting tension
- String not horizontal

**Uncertainty Sources:**
- Measurement of node positions (±1 mm typically)
- Frequency reading from signal generator
- Mass measurement for tension calculation

---

### RP02: Investigation of Interference Effects (Young's Double Slit)

**Aim:** Determine the wavelength of light using double slit interference.

**Apparatus:**
- Laser pointer (or white light + filter)
- Double slit (known separation s)
- Screen (white card or wall)
- Metre rule or measuring tape
- Vernier calipers or travelling microscope (for fringe spacing)

**Safety:**
- NEVER look directly into laser beam
- Remove reflective objects (watches, jewellery)
- Display laser warning sign
- Keep beam horizontal, below eye level

**Method:**
1. Set up laser to shine through double slit onto distant screen
2. Measure slit-to-screen distance D (typically 1-2 m)
3. Measure across several fringes and divide to get fringe spacing w
4. Record slit separation s (from manufacturer or measure)
5. Repeat measurements at different D values

**Analysis:**
- Use λ = ws/D to calculate wavelength
- Plot w against D (gradient = λ/s)
- Compare calculated λ with known laser wavelength (e.g., 632.8 nm for He-Ne)

**Key Equations:**
- w = λD/s
- Path difference = s sin θ ≈ sθ for small angles
- For constructive interference: path difference = nλ

**Common Errors:**
- Not measuring D from slits to screen (measuring from laser)
- Measuring only one fringe spacing (should use multiple fringes)
- Screen not perpendicular to beam

---

### RP03: Determination of g by Free-Fall Method

**Aim:** Measure the acceleration due to gravity using free fall.

**Apparatus:**
- Electromagnet and steel ball
- Light gates and data logger (or timer)
- Metre rule
- Trap door or interrupt card
- Retort stand and clamps

**Method 1 (Two light gates):**
1. Set up electromagnet to hold ball at measured height h above light gates
2. Release ball and record time through each gate
3. Calculate velocities v₁ and v₂ at each gate
4. Measure distance s between gates
5. Use v² = u² + 2as to find g
6. Repeat for different heights

**Method 2 (Single timing):**
1. Drop ball from height h, measure time t to hit trap door
2. Use s = ½gt² (since u = 0)
3. Plot s against t² (gradient = g/2)

**Analysis:**
- Plot v² against s (gradient = 2g)
- Or plot s against t² (gradient = g/2)
- Calculate uncertainty in g

**Key Equations:**
- s = ut + ½at²
- v² = u² + 2as
- v = u + at

**Common Errors:**
- Reaction time delays with manual timing
- Not accounting for ball size when measuring height
- Air resistance affecting light balls

**Improvements:**
- Use light gates instead of stopwatch
- Use denser ball (less air resistance)
- Use electromagnet release (eliminates reaction time)

---

### RP04: Determination of Young Modulus

**Aim:** Determine the Young modulus of a metal (copper or steel wire).

**Apparatus:**
- Long thin wire (2-3 m, ~0.3 mm diameter)
- G-clamp and wooden blocks
- Pulley and slotted masses
- Metre rule and marker
- Micrometer screw gauge
- Reference wire and Vernier scale (Searle's apparatus)

**Method:**
1. Measure original length L of wire with metre rule
2. Measure diameter d at several points with micrometer (calculate average)
3. Add masses incrementally and record extension e for each load
4. Measure extension from fixed marker on wire
5. Unload and check for permanent deformation
6. Calculate stress (σ = F/A) and strain (ε = e/L) for each point

**Analysis:**
- Plot stress against strain (gradient = Young modulus E)
- Or plot Force against extension (gradient = EA/L)
- Calculate E = σ/ε = FL/Ae

**Key Equations:**
- Stress σ = F/A = F/(πd²/4)
- Strain ε = e/L = ΔL/L
- Young modulus E = σ/ε = FL/Ae

**Common Errors:**
- Wire not straight initially (pre-stress)
- Kinks in wire causing anomalous extension
- Not measuring diameter at multiple points
- Exceeding elastic limit

**Typical Values:**
- Steel: E ≈ 200 GPa
- Copper: E ≈ 120 GPa

---

### RP05: Determination of Resistivity of a Wire

**Aim:** Determine the resistivity of a metal wire (e.g., constantan).

**Apparatus:**
- SWG wire (constantan or nichrome), 1 m length
- Crocodile clips and connections
- Ammeter and voltmeter (or multimeter)
- Power supply (low voltage DC)
- Micrometer screw gauge
- Metre rule

**Method:**
1. Measure diameter at several points along wire with micrometer
2. Connect wire into circuit with ammeter in series, voltmeter in parallel
3. Measure V and I for different lengths (using crocodile clip to vary length)
4. Calculate resistance R = V/I for each length
5. Keep current low to prevent heating

**Analysis:**
- Plot R against L (gradient = ρ/A)
- Resistivity ρ = gradient × A = gradient × πd²/4
- Or calculate ρ = RA/L for each length and average

**Key Equations:**
- R = ρL/A
- ρ = RA/L
- A = πr² = πd²/4

**Common Errors:**
- Wire heating up (changes resistance)
- Poor connections (contact resistance)
- Not measuring diameter at multiple points
- Parallax error in measuring length

**Typical Values:**
- Constantan: ρ ≈ 49 × 10⁻⁸ Ω m
- Copper: ρ ≈ 1.7 × 10⁻⁸ Ω m

---

### RP06: Investigation of EMF and Internal Resistance

**Aim:** Determine the EMF and internal resistance of a cell.

**Apparatus:**
- Cell (1.5 V or 9 V battery)
- Variable resistor (rheostat) or resistance box
- Ammeter and voltmeter
- Connecting wires
- Switch

**Method:**
1. Connect cell, ammeter, and variable resistor in series
2. Connect voltmeter across cell terminals
3. Vary external resistance R and record V and I for each
4. Use range of R values to get good spread of data
5. Include open circuit (I = 0, V = ε) if possible

**Analysis:**
- Plot V against I
- Gradient = -r (internal resistance)
- Y-intercept = ε (EMF)
- Or use ε = V + Ir rearranged from ε = I(R + r)

**Key Equations:**
- ε = I(R + r)
- V = ε - Ir (terminal PD)
- ε = V when I = 0

**Common Errors:**
- Battery heating during experiment (internal resistance changes)
- Taking readings too quickly (not allowing equilibrium)
- Not including open circuit reading

**Typical Values:**
- New AA cell: ε ≈ 1.5 V, r ≈ 0.2-0.5 Ω
- Old/used cell: higher internal resistance

---

### RP07: Investigation into Simple Harmonic Motion (Mass-Spring System)

**Aim:** Investigate factors affecting period of oscillation and verify SHM.

**Apparatus:**
- Helical spring
- Slotted masses and hanger
- Retort stand and clamp
- Stopwatch
- Metre rule
- Position sensor (optional, for data logging)

**Method:**
1. Attach spring to stand and add mass hanger
2. Displace mass vertically and release
3. Time 10-20 oscillations and calculate period T
4. Repeat for different masses m
5. Keep amplitude small (< 20% of spring length)

**Analysis:**
- Plot T² against m
- Gradient = 4π²/k
- Calculate spring constant k from gradient
- Compare with k from static F = kx method

**Key Equations:**
- T = 2π√(m/k)
- T² = (4π²/k)m
- For SHM: a = -ω²x

**Common Errors:**
- Amplitude too large (spring becomes non-linear)
- Counting oscillations incorrectly
- Spring oscillating in a plane rather than vertically
- Not including mass of spring in calculation

**Extensions:**
- Verify a = -ω²x using position sensor
- Investigate energy conservation during oscillation

---

### RP08: Investigation of Boyle's Law and Charles's Law

**Aim:** Verify gas laws relating pressure, volume, and temperature.

**Apparatus (Boyle's Law):**
- Boyle's law apparatus (syringe with pressure gauge)
- Or oil-trapped air column with Bourdon gauge
- Volume scale
- Pressure sensor

**Apparatus (Charles's Law):**
- Capillary tube with trapped air
- Thermometer
- Water bath with heater
- Ruler

**Method (Boyle's Law):**
1. Record initial volume V and pressure p
2. Change volume using piston/pump
3. Record new p and V values
4. Repeat for range of volumes
5. Keep temperature constant (work slowly)

**Method (Charles's Law):**
1. Note initial volume (length of air column) and temperature
2. Heat water bath and stir to ensure uniform temperature
3. Record volume and temperature as it heats
4. Convert temperature to Kelvin

**Analysis:**
- Boyle's Law: Plot p against 1/V (straight line through origin)
- Or plot pV against p (horizontal line if pV = constant)
- Charles's Law: Plot V against T(K) (straight line, extrapolates to -273°C)

**Key Equations:**
- pV = constant (at constant T) - Boyle's Law
- V/T = constant (at constant p) - Charles's Law
- pV = nRT - Ideal gas equation

**Common Errors:**
- Temperature not remaining constant (Boyle)
- Air leaks in system
- Not allowing thermal equilibrium
- Not using Kelvin scale (Charles)

---

### RP09: Investigation of Charging/Discharging Capacitors

**Aim:** Investigate the exponential decay of charge during capacitor discharge.

**Apparatus:**
- Capacitor (e.g., 470 μF to 2200 μF)
- Resistor (e.g., 10 kΩ to 100 kΩ)
- Voltmeter or voltage sensor
- Stopwatch or data logger
- Power supply
- Switch (2-way for charge/discharge)

**Method:**
1. Charge capacitor through power supply
2. Disconnect and connect to resistor for discharge
3. Record voltage V at regular time intervals
4. Plot V against t
5. Calculate time constant τ = RC

**Analysis:**
- Plot V against t (exponential decay curve)
- Plot ln(V) against t (straight line, gradient = -1/RC)
- Read time constant from graph (V = V₀/e at t = τ)
- Calculate τ and compare with RC

**Key Equations:**
- V = V₀e^(-t/RC)
- I = I₀e^(-t/RC)
- Q = Q₀e^(-t/RC)
- τ = RC (time constant)
- At t = τ: V = 0.37V₀

**Common Errors:**
- Voltmeter loading circuit (use high impedance voltmeter)
- Not starting timer at moment of switching
- Capacitor not fully charged initially

---

### RP10: Investigate Force on Current-Carrying Wire in Magnetic Field

**Aim:** Verify F = BIL and determine magnetic flux density.

**Apparatus:**
- Horseshoe magnet or C-core electromagnet
- Straight wire or wire coil
- Power supply and ammeter
- Top-pan balance or current balance
- Metre rule
- Variable resistor

**Method:**
1. Place magnet on balance and zero the reading
2. Position wire between poles, connected to power supply
3. Turn on current and record apparent mass change
4. Calculate force: F = Δm × g
5. Vary current and record force for each value
6. Measure length L of wire in field

**Analysis:**
- Plot F against I (gradient = BL)
- Calculate B from gradient: B = gradient/L
- Verify F = BIL relationship

**Key Equations:**
- F = BIL
- F = BIL sin θ (for wire at angle θ to field)

**Common Errors:**
- Wire not perpendicular to field
- Length of wire in field incorrectly measured
- Current causing heating (resistance changes)
- External air currents affecting balance

---

### RP11: Investigation of Magnetic Flux Linkage

**Aim:** Investigate factors affecting induced EMF and verify Faraday's law.

**Apparatus:**
- Search coil (known area A and number of turns N)
- Slinky spring or solenoid
- Signal generator and AC power supply
- Oscilloscope or data logger
- Multimeter

**Method:**
1. Place search coil inside solenoid/slinky
2. Connect solenoid to AC supply via signal generator
3. Connect search coil to oscilloscope
4. Measure peak EMF for different:
   - Frequencies
   - Angles of search coil
   - Positions in field
5. Record peak EMF vs variable

**Analysis:**
- Plot induced EMF against frequency (should be linear)
- Plot EMF against cos θ for angle variation
- Verify ε = -NdΦ/dt = NABω for sinusoidal flux

**Key Equations:**
- Φ = BA cos θ
- ε = -N(dΦ/dt)
- For rotating coil: ε = NABω sin ωt

**Common Errors:**
- Coil not fully in uniform field region
- Leads picking up interference
- Frequency too high (affects coil response)

---

### RP12: Investigation of Inverse Square Law for Gamma Radiation

**Aim:** Verify that gamma radiation intensity follows inverse square law.

**Apparatus:**
- Gamma source (e.g., Co-60, Cs-137) in approved holder
- Geiger-Müller (GM) tube and counter/ratemeter
- Metre rule
- Lead shielding
- Stopwatch

**Safety:**
- Follow all radiation safety protocols
- Use approved sealed sources only
- Minimise time of exposure
- Maximise distance when not measuring
- Use tongs to handle source

**Method:**
1. Measure background count rate (no source) for at least 3 minutes
2. Place source at known distance d from GM tube window
3. Record count for fixed time (at least 60 s)
4. Repeat at different distances
5. Subtract background from each reading

**Analysis:**
- Calculate corrected count rate C for each distance
- Plot C against 1/d² (should be linear through origin)
- Or plot log(C) against log(d) (gradient should be -2)

**Key Equations:**
- Intensity I ∝ 1/d²
- Corrected count = Measured count - Background count
- For graph: C = k/d² → log C = log k - 2 log d

**Common Errors:**
- Not subtracting background radiation
- Source-detector distance measured incorrectly (should be to detector window)
- Count times too short (large statistical uncertainty)
- Not accounting for source dimensions at close range

**Uncertainty Consideration:**
- Random nature of decay: use √N for counting uncertainty
- Repeat counts and take average
`;

// ============================================================================
// AQA A-LEVEL PHYSICS COMMAND WORDS
// ============================================================================

const AQA_ALEVEL_PHYSICS_COMMAND_WORDS = `
## AQA A-Level Physics Command Words

### Calculation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Calculate** | Use numbers to work out an answer | Show working, include units |
| **Determine** | Use data/graph to find an answer | May involve calculation or reading |
| **Show that** | Prove a given answer is correct | Quote to 1 more s.f. than given |
| **Estimate** | Make an approximate calculation | Use sensible assumptions |
| **Deduce** | Draw conclusions from information | May not require calculation |

### Knowledge Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **State** | Brief answer, no explanation | Typically 1 mark |
| **Define** | Give the meaning of a term | Precise physics definition |
| **Write down** | Give answer without working | Direct recall |
| **Name/Identify** | Use correct physics term | Specific terminology |
| **Describe** | Give an account of something | Sequence or features |

### Explanation Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Explain** | Give reasons using physics | Use "because", link cause to effect |
| **Suggest** | Apply knowledge to new context | Multiple valid answers possible |
| **Compare** | Identify similarities AND differences | Must do both |
| **Distinguish** | State differences between | Focus on differences |

### Analysis Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Analyse** | Examine data for patterns | Quote specific values |
| **Evaluate** | Judge pros and cons | Reach a conclusion |
| **Discuss** | Consider different aspects | Extended response |
| **Comment on** | Make relevant observations | Link to physics principles |
| **Justify** | Give reasons for a conclusion | Use evidence |

### Practical Commands
| Command | Definition | Notes |
|---------|-----------|-------|
| **Plan/Design** | Describe how to investigate | Variables, method, analysis |
| **Sketch** | Draw showing main features | Shape matters, not precision |
| **Draw** | Accurate diagram/graph | Use ruler, correct scales |
| **Plot** | Mark points on graph | Use crosses, draw best fit |

### Mark Scheme Conventions
| Abbreviation | Meaning |
|--------------|---------|
| ecf | Error carried forward |
| cao | Correct answer only |
| owtte | Or words to that effect |
| AW | Alternative wording |
| OR | Alternative acceptable answer |
| MAX | Maximum marks available |
`;

// =============================================================================
// A-LEVEL PHYSICS REFERENCE DATA - Data & Formulae Booklet
// =============================================================================

const AQA_ALEVEL_PHYSICS_DATA_SHEET = `## AQA A-Level Physics Data Sheet (PROVIDED IN EXAM)

### Fundamental Constants
| Quantity | Symbol | Value |
|----------|--------|-------|
| Speed of light in vacuum | c | 3.00 × 10⁸ m s⁻¹ |
| Permeability of free space | μ₀ | 4π × 10⁻⁷ H m⁻¹ |
| Permittivity of free space | ε₀ | 8.85 × 10⁻¹² F m⁻¹ |
| 1/(4πε₀) | | 8.99 × 10⁹ N m² C⁻² |
| Elementary charge | e | 1.60 × 10⁻¹⁹ C |
| Planck constant | h | 6.63 × 10⁻³⁴ J s |
| Gravitational constant | G | 6.67 × 10⁻¹¹ N m² kg⁻² |
| Avogadro constant | Nₐ | 6.02 × 10²³ mol⁻¹ |
| Molar gas constant | R | 8.31 J mol⁻¹ K⁻¹ |
| Boltzmann constant | k | 1.38 × 10⁻²³ J K⁻¹ |
| Stefan constant | σ | 5.67 × 10⁻⁸ W m⁻² K⁻⁴ |
| Wien constant | | 2.90 × 10⁻³ m K |
| Electron mass | mₑ | 9.11 × 10⁻³¹ kg |
| Electron charge/mass ratio | e/mₑ | 1.76 × 10¹¹ C kg⁻¹ |
| Proton mass | mₚ | 1.67(3) × 10⁻²⁷ kg |
| Proton charge/mass ratio | e/mₚ | 9.58 × 10⁷ C kg⁻¹ |
| Neutron mass | mₙ | 1.67(5) × 10⁻²⁷ kg |
| Gravitational field strength | g | 9.81 N kg⁻¹ |
| Acceleration due to gravity | g | 9.81 m s⁻² |
| Atomic mass unit | u | 1.661 × 10⁻²⁷ kg (931.5 MeV) |

### Astronomical Data
| Body | Mass (kg) | Radius (m) |
|------|-----------|------------|
| Sun | 1.99 × 10³⁰ | 6.96 × 10⁸ |
| Earth | 5.97 × 10²⁴ | 6.37 × 10⁶ |
| Moon | 7.35 × 10²² | 1.74 × 10⁶ |`;

const AQA_ALEVEL_PHYSICS_FORMULAE = `## AQA A-Level Physics Formulae (PROVIDED IN EXAM)

### Mechanics
| Name | Equation |
|------|----------|
| Momentum | p = mv |
| Kinetic energy | Eₖ = ½mv² |
| Gravitational PE | ΔEₚ = mgΔh |
| SUVAT | v = u + at |
| SUVAT | s = ut + ½at² |
| SUVAT | v² = u² + 2as |
| SUVAT | s = ½(u + v)t |

### Materials
| Stress | σ = F/A |
| Strain | ε = ΔL/L |
| Young modulus | E = σ/ε = FL/AΔL |

### Waves
| Wave speed | v = fλ |
| Young's slits | λ = ws/D |
| Diffraction grating | d sin θ = nλ |
| Refractive index | n = c/v = sin θ₁/sin θ₂ |
| Critical angle | sin θc = n₂/n₁ |

### Electricity
| Current | I = ΔQ/Δt |
| Voltage | V = W/Q |
| Resistance | R = V/I |
| Resistivity | ρ = RA/L |
| Power | P = VI = I²R = V²/R |
| EMF | ε = I(R + r) |
| Resistors in series | Rₜ = R₁ + R₂ + ... |
| Resistors in parallel | 1/Rₜ = 1/R₁ + 1/R₂ + ... |

### Quantum Physics
| Photon energy | E = hf = hc/λ |
| Photoelectric | hf = φ + Eₖ(max) |
| de Broglie | λ = h/mv = h/p |

### Circular Motion
| Angular velocity | ω = 2πf = v/r |
| Centripetal acceleration | a = v²/r = ω²r |
| Centripetal force | F = mv²/r = mω²r |

### SHM
| Displacement | x = A cos ωt or A sin ωt |
| Velocity | v = ±ω√(A² - x²) |
| Acceleration | a = -ω²x |
| Period (spring) | T = 2π√(m/k) |
| Period (pendulum) | T = 2π√(L/g) |

### Thermal Physics
| Ideal gas | pV = nRT = NkT |
| Kinetic theory | pV = ⅓Nm⟨c²⟩ |
| Mean KE | ½m⟨c²⟩ = 3/2 kT |
| Internal energy | U = 3/2 NkT |
| Energy | Q = mcΔθ or Q = mL |

### Fields
| Gravitational field strength | g = F/m = GM/r² |
| Gravitational potential | V = -GM/r |
| Electric field strength | E = F/Q = V/d = kQ/r² |
| Electric potential | V = kQ/r |
| Capacitance | C = Q/V |
| Capacitor energy | E = ½QV = ½CV² |
| Capacitor discharge | Q = Q₀e^(-t/RC), I = I₀e^(-t/RC) |
| Time constant | τ = RC |

### Electromagnetic Induction
| Flux linkage | Φ = BA cos θ |
| Faraday's law | ε = -N(dΦ/dt) |
| Transformer | Vₛ/Vₚ = Nₛ/Nₚ |

### Nuclear
| Radioactive decay | N = N₀e^(-λt), A = A₀e^(-λt) |
| Half-life | t½ = ln2/λ |
| Mass-energy | E = mc² |
| Nuclear radius | r = r₀A^(1/3) where r₀ = 1.2 × 10⁻¹⁵ m |`;

const AQA_ALEVEL_PHYSICS_RECALL = `## Equations You MUST RECALL (Not in booklet)

### Mechanics
- Weight: W = mg
- Work done: W = Fs cos θ
- Power: P = Fv
- Efficiency: η = useful output / total input

### Electricity
- Drift velocity: I = nAvq
- Terminal PD: V = ε - Ir

### Waves
- For stationary waves, recall node/antinode patterns

### Particles
- Energy levels: ΔE = hf
- Photon momentum: p = h/λ = E/c`;

const AQA_ALEVEL_PHYSICS_WORKED_EXAMPLES = `## A-Level Physics Worked Examples (USE THESE PATTERNS)

These 30+ fully worked examples cover all major topic areas with complete mark schemes.

---

### EXAMPLE 1: PARTICLES - Photoelectric Effect
**Q:** Light of wavelength 450 nm is incident on a metal surface with work function 2.3 eV. Calculate the maximum kinetic energy of emitted electrons. [3 marks]
**Solution:**
- Photon energy: E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸)/(450 × 10⁻⁹)
- E = 4.42 × 10⁻¹⁹ J = 4.42 × 10⁻¹⁹/(1.6 × 10⁻¹⁹) = **2.76 eV**
- Work function φ = 2.3 eV
- Max KE = hf - φ = 2.76 - 2.3
- **Eₖ(max) = 0.46 eV** (or 7.4 × 10⁻²⁰ J) ✓
**Mark Scheme:**
[1] Correct use of E = hc/λ with correct substitution
[1] Conversion to eV or consistent units
[1] Correct final answer with unit

---

### EXAMPLE 2: PARTICLES - de Broglie Wavelength
**Q:** An electron is accelerated from rest through a potential difference of 5000 V. Calculate its de Broglie wavelength. [4 marks]
**Solution:**
- KE gained = eV = 1.60 × 10⁻¹⁹ × 5000 = 8.0 × 10⁻¹⁶ J
- KE = ½mv² → v = √(2KE/m) = √(2 × 8.0 × 10⁻¹⁶/9.11 × 10⁻³¹)
- v = 4.19 × 10⁷ m/s
- λ = h/mv = 6.63 × 10⁻³⁴/(9.11 × 10⁻³¹ × 4.19 × 10⁷)
- **λ = 1.74 × 10⁻¹¹ m = 0.0174 nm** ✓
**Mark Scheme:**
[1] Kinetic energy = eV
[1] Calculation of velocity from KE
[1] Use of de Broglie equation λ = h/mv or h/p
[1] Correct answer with unit

---

### EXAMPLE 3: PARTICLES - Quark Composition
**Q:** State the quark composition of:
(a) a proton [1 mark]
(b) a neutron [1 mark]
(c) an antiproton [1 mark]
**Solution:**
(a) Proton: **uud** (up, up, down) ✓
(b) Neutron: **udd** (up, down, down) ✓
(c) Antiproton: **ūūd̄** (anti-up, anti-up, anti-down) ✓
**Mark Scheme:**
[1] each correct quark combination

---

### EXAMPLE 4: WAVES - Diffraction Grating
**Q:** A diffraction grating has 500 lines per mm. Find the angle of the second order maximum for light of wavelength 600 nm. [3 marks]
**Solution:**
- Line spacing d = 1/(500 × 10³) = 2.0 × 10⁻⁶ m
- For n = 2: d sin θ = nλ
- sin θ = nλ/d = (2 × 600 × 10⁻⁹)/(2.0 × 10⁻⁶)
- sin θ = 0.60
- **θ = 36.9° or 37°** ✓
**Mark Scheme:**
[1] Correct calculation of d
[1] Correct substitution into d sin θ = nλ
[1] Correct answer

---

### EXAMPLE 5: WAVES - Young's Double Slit
**Q:** In a Young's double slit experiment, slits 0.5 mm apart are placed 2.0 m from a screen. The fringe spacing is measured as 2.4 mm. Calculate the wavelength of light used. [3 marks]
**Solution:**
- w = λD/s, rearrange for λ
- λ = ws/D = (2.4 × 10⁻³ × 0.5 × 10⁻³)/(2.0)
- λ = 1.2 × 10⁻⁶/2.0 = 6.0 × 10⁻⁷ m
- **λ = 600 nm** ✓
**Mark Scheme:**
[1] Correct formula stated or implied
[1] Correct substitution with unit conversion
[1] Correct answer with unit

---

### EXAMPLE 6: WAVES - Stationary Waves
**Q:** A guitar string 65 cm long vibrates in its fundamental mode at 330 Hz. Calculate the speed of the wave on the string. [2 marks]
**Solution:**
- Fundamental mode: λ = 2L = 2 × 0.65 = 1.30 m
- v = fλ = 330 × 1.30
- **v = 429 m/s** ✓
**Mark Scheme:**
[1] λ = 2L for fundamental
[1] Correct answer with unit

---

### EXAMPLE 7: WAVES - Critical Angle and Total Internal Reflection
**Q:** Calculate the critical angle for light travelling from glass (n = 1.52) to air (n = 1.00). [2 marks]
**Solution:**
- sin θc = n₂/n₁ = 1.00/1.52 = 0.658
- **θc = 41.1°** ✓
**Mark Scheme:**
[1] Correct use of sin θc = n₂/n₁
[1] Correct answer

---

### EXAMPLE 8: MECHANICS - Projectile Motion
**Q:** A ball is thrown horizontally at 15 m/s from a cliff 45 m high. Find the time of flight and horizontal distance travelled. [4 marks]
**Solution:**
- Vertical: s = ut + ½at², u = 0, a = 9.81, s = 45
- 45 = 0 + ½ × 9.81 × t²
- t² = 90/9.81 = 9.17
- **Time t = 3.03 s** ✓
- Horizontal: distance = speed × time = 15 × 3.03
- **Horizontal distance = 45.4 m** ✓
**Mark Scheme:**
[1] Correct SUVAT for vertical motion
[1] Time calculation
[1] Horizontal distance = vt
[1] Correct final answer

---

### EXAMPLE 9: MECHANICS - Momentum and Collisions
**Q:** A 2.0 kg trolley moving at 3.0 m/s collides with a stationary 4.0 kg trolley. They stick together. Calculate the velocity after collision and determine if the collision is elastic. [5 marks]
**Solution:**
- Conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v
- 2.0 × 3.0 + 4.0 × 0 = (2.0 + 4.0) × v
- 6.0 = 6.0v
- **v = 1.0 m/s** ✓
- Initial KE = ½ × 2.0 × 3.0² = 9.0 J
- Final KE = ½ × 6.0 × 1.0² = 3.0 J
- KE is not conserved (9.0 J → 3.0 J)
- **Collision is inelastic** ✓
**Mark Scheme:**
[1] Conservation of momentum stated/applied
[1] Correct velocity calculation
[1] Initial KE calculation
[1] Final KE calculation
[1] Conclusion about elastic/inelastic

---

### EXAMPLE 10: MECHANICS - Work, Energy and Power
**Q:** A car of mass 1200 kg accelerates from rest to 25 m/s in 12 s. Calculate the average power developed. [3 marks]
**Solution:**
- KE gained = ½mv² = ½ × 1200 × 25² = 375,000 J
- Average power = Energy/time = 375,000/12
- **P = 31,250 W = 31.3 kW** ✓
**Mark Scheme:**
[1] Correct KE calculation
[1] Power = Energy/time
[1] Correct answer with unit

---

### EXAMPLE 11: MECHANICS - Young Modulus
**Q:** A steel wire of length 2.0 m and diameter 0.50 mm extends by 1.2 mm when a force of 100 N is applied. Calculate the Young modulus of steel. [4 marks]
**Solution:**
- Cross-sectional area A = π(d/2)² = π × (0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m²
- Stress σ = F/A = 100/(1.96 × 10⁻⁷) = 5.10 × 10⁸ Pa
- Strain ε = ΔL/L = 1.2 × 10⁻³/2.0 = 6.0 × 10⁻⁴
- E = σ/ε = 5.10 × 10⁸/(6.0 × 10⁻⁴)
- **E = 8.5 × 10¹¹ Pa = 850 GPa** ✓
(Note: Higher than typical ~200 GPa due to short extension)
**Mark Scheme:**
[1] Correct area calculation
[1] Correct stress calculation
[1] Correct strain calculation
[1] Correct Young modulus with unit

---

### EXAMPLE 12: ELECTRICITY - Potential Divider
**Q:** A 12V supply is connected across a 4kΩ and 8kΩ resistor in series. Calculate the voltage across the 8kΩ resistor. [2 marks]
**Solution:**
- Vout = Vin × R₂/(R₁ + R₂)
- V = 12 × 8000/(4000 + 8000)
- V = 12 × 8/12
- **V = 8.0 V** ✓
**Mark Scheme:**
[1] Correct potential divider formula
[1] Correct answer

---

### EXAMPLE 13: ELECTRICITY - Drift Velocity
**Q:** A copper wire of diameter 1.2 mm carries a current of 3.0 A. Calculate the drift velocity of electrons if there are 8.5 × 10²⁸ free electrons per m³. [3 marks]
**Solution:**
- I = nAve, rearrange for v
- A = πr² = π × (0.6 × 10⁻³)² = 1.13 × 10⁻⁶ m²
- v = I/(nAe) = 3.0/(8.5 × 10²⁸ × 1.13 × 10⁻⁶ × 1.6 × 10⁻¹⁹)
- **v = 1.95 × 10⁻⁴ m/s ≈ 0.20 mm/s** ✓
**Mark Scheme:**
[1] Correct area calculation
[1] Correct rearrangement of I = nAve
[1] Correct answer with unit

---

### EXAMPLE 14: ELECTRICITY - EMF and Internal Resistance
**Q:** A cell of EMF 1.5 V and internal resistance 0.4 Ω is connected to a 2.6 Ω resistor. Calculate the current and terminal PD. [3 marks]
**Solution:**
- Total resistance = R + r = 2.6 + 0.4 = 3.0 Ω
- I = ε/(R + r) = 1.5/3.0 = **0.50 A** ✓
- Terminal PD = ε - Ir = 1.5 - (0.50 × 0.4) = 1.5 - 0.2
- **V = 1.3 V** ✓
**Mark Scheme:**
[1] Correct current calculation
[1] Lost volts = Ir
[1] Correct terminal PD

---

### EXAMPLE 15: ELECTRICITY - Resistivity
**Q:** A wire of length 1.5 m has resistance 2.4 Ω. If its diameter is 0.40 mm, calculate the resistivity. [3 marks]
**Solution:**
- A = πr² = π × (0.20 × 10⁻³)² = 1.26 × 10⁻⁷ m²
- ρ = RA/L = (2.4 × 1.26 × 10⁻⁷)/1.5
- **ρ = 2.0 × 10⁻⁷ Ω m** ✓
**Mark Scheme:**
[1] Correct area calculation
[1] Correct use of ρ = RA/L
[1] Correct answer with unit

---

### EXAMPLE 16: CIRCULAR MOTION - Satellite Orbit
**Q:** Calculate the orbital period of a satellite 400 km above Earth's surface. (Earth radius = 6.37 × 10⁶ m, g at Earth's surface = 9.81 m/s²) [4 marks]
**Solution:**
- Orbital radius r = 6.37 × 10⁶ + 400 × 10³ = 6.77 × 10⁶ m
- At orbit: gravitational force = centripetal force
- mg' = mv²/r → g' = v²/r
- Using g ∝ 1/r²: g' = 9.81 × (6.37 × 10⁶/6.77 × 10⁶)² = 8.69 m/s²
- v = √(g'r) = √(8.69 × 6.77 × 10⁶) = 7670 m/s
- T = 2πr/v = 2π × 6.77 × 10⁶/7670
- **T = 5550 s = 92.5 minutes** ✓
**Mark Scheme:**
[1] Correct orbital radius
[1] Use of g ∝ 1/r² or gravitational equation
[1] Correct velocity calculation
[1] Correct period with unit

---

### EXAMPLE 17: CIRCULAR MOTION - Banked Track
**Q:** A car travels around a banked curve of radius 100 m. If the banking angle is 15° and there is no friction, calculate the speed at which the car can travel. [3 marks]
**Solution:**
- For no friction: tan θ = v²/rg
- v² = rg tan θ = 100 × 9.81 × tan 15°
- v² = 100 × 9.81 × 0.268 = 263
- **v = 16.2 m/s** ✓
**Mark Scheme:**
[1] Correct relationship tan θ = v²/rg
[1] Correct substitution
[1] Correct answer with unit

---

### EXAMPLE 18: SHM - Mass-Spring System
**Q:** A 0.5 kg mass on a spring oscillates with amplitude 8 cm and period 0.4 s. Calculate the maximum velocity and maximum acceleration. [4 marks]
**Solution:**
- ω = 2π/T = 2π/0.4 = 15.7 rad/s
- Maximum velocity: v_max = ωA = 15.7 × 0.08
- **v_max = 1.26 m/s** ✓
- Maximum acceleration: a_max = ω²A = 15.7² × 0.08
- **a_max = 19.7 m/s²** ✓
**Mark Scheme:**
[1] Correct ω calculation
[1] v_max = ωA
[1] a_max = ω²A
[1] Correct answers with units

---

### EXAMPLE 19: SHM - Simple Pendulum
**Q:** A pendulum has length 0.80 m. Calculate its period and frequency. [3 marks]
**Solution:**
- T = 2π√(L/g) = 2π√(0.80/9.81)
- T = 2π × 0.286 = **1.80 s** ✓
- f = 1/T = 1/1.80 = **0.56 Hz** ✓
**Mark Scheme:**
[1] Correct formula T = 2π√(L/g)
[1] Correct period
[1] Correct frequency

---

### EXAMPLE 20: SHM - Energy
**Q:** A 0.2 kg mass oscillates with amplitude 0.05 m on a spring of constant 50 N/m. Calculate the maximum kinetic energy and the total energy. [3 marks]
**Solution:**
- Total energy E = ½kA² = ½ × 50 × 0.05² = 0.0625 J
- Maximum KE = Total energy (at equilibrium)
- **E_total = E_k(max) = 0.0625 J = 62.5 mJ** ✓
**Mark Scheme:**
[1] E = ½kA²
[1] Recognition that KE_max = Total energy
[1] Correct answer with unit

---

### EXAMPLE 21: THERMAL - Ideal Gas
**Q:** A gas at 27°C and 100 kPa occupies 0.02 m³. Find the number of moles and the total kinetic energy of the molecules. [4 marks]
**Solution:**
- T = 27 + 273 = 300 K
- pV = nRT → n = pV/RT
- n = (100 × 10³ × 0.02)/(8.31 × 300)
- **n = 0.80 mol** ✓
- Number of molecules N = nNₐ = 0.80 × 6.02 × 10²³ = 4.82 × 10²³
- Total KE = N × (3/2)kT = 4.82 × 10²³ × 1.5 × 1.38 × 10⁻²³ × 300
- **Total KE = 2990 J ≈ 3.0 kJ** ✓
**Mark Scheme:**
[1] Conversion to Kelvin
[1] Correct use of pV = nRT
[1] Use of 3/2 kT per molecule
[1] Correct total KE

---

### EXAMPLE 22: THERMAL - RMS Speed
**Q:** Calculate the rms speed of nitrogen molecules (M = 28 g/mol) at 20°C. [3 marks]
**Solution:**
- T = 20 + 273 = 293 K
- c_rms = √(3RT/M) = √(3 × 8.31 × 293/(28 × 10⁻³))
- c_rms = √(260,670)
- **c_rms = 511 m/s** ✓
**Mark Scheme:**
[1] Conversion to Kelvin and kg/mol
[1] Correct formula c_rms = √(3RT/M)
[1] Correct answer with unit

---

### EXAMPLE 23: THERMAL - Specific Heat Capacity
**Q:** 500 g of water at 20°C is heated using a 2.0 kW heater for 3 minutes. Calculate the final temperature. (c for water = 4200 J kg⁻¹ K⁻¹) [3 marks]
**Solution:**
- Energy supplied = Pt = 2000 × 180 = 360,000 J
- Q = mcΔθ → Δθ = Q/mc = 360,000/(0.5 × 4200)
- Δθ = 171°C
- Final temperature = 20 + 171 = **191°C** ✓
(Note: Would actually boil at 100°C)
**Mark Scheme:**
[1] Energy = Pt
[1] Use of Q = mcΔθ
[1] Correct calculation (ecf if notes boiling)

---

### EXAMPLE 24: FIELDS - Gravitational Potential
**Q:** Calculate the escape velocity from Earth's surface. (M = 5.97 × 10²⁴ kg, R = 6.37 × 10⁶ m) [3 marks]
**Solution:**
- For escape: KE = |GPE at surface|
- ½mv² = GMm/R
- v = √(2GM/R) = √(2 × 6.67 × 10⁻¹¹ × 5.97 × 10²⁴/6.37 × 10⁶)
- v = √(1.25 × 10⁸)
- **v = 11.2 km/s** ✓
**Mark Scheme:**
[1] Energy equation ½mv² = GMm/R
[1] Correct substitution
[1] Correct answer with unit

---

### EXAMPLE 25: FIELDS - Electric Field Strength
**Q:** Two parallel plates separated by 5.0 cm have a potential difference of 2000 V. Calculate the electric field strength and the force on an electron between the plates. [3 marks]
**Solution:**
- E = V/d = 2000/(5.0 × 10⁻²) = **4.0 × 10⁴ V/m** ✓
- F = Ee = 4.0 × 10⁴ × 1.60 × 10⁻¹⁹
- **F = 6.4 × 10⁻¹⁵ N** ✓
**Mark Scheme:**
[1] E = V/d
[1] F = Ee or F = qE
[1] Correct answers with units

---

### EXAMPLE 26: FIELDS - Coulomb's Law
**Q:** Two point charges of +3.0 μC and -2.0 μC are separated by 0.15 m. Calculate the force between them. [2 marks]
**Solution:**
- F = kQ₁Q₂/r² = (8.99 × 10⁹ × 3.0 × 10⁻⁶ × 2.0 × 10⁻⁶)/(0.15)²
- F = (8.99 × 10⁹ × 6.0 × 10⁻¹²)/(0.0225)
- **F = 2.4 N (attractive)** ✓
**Mark Scheme:**
[1] Correct use of Coulomb's law
[1] Correct answer with unit

---

### EXAMPLE 27: CAPACITORS - Discharge
**Q:** A 470 μF capacitor charged to 9V discharges through a 20 kΩ resistor. Find the time constant and the voltage after 15 s. [3 marks]
**Solution:**
- Time constant τ = RC = 20 × 10³ × 470 × 10⁻⁶
- **τ = 9.4 s** ✓
- V = V₀e^(-t/τ) = 9 × e^(-15/9.4)
- V = 9 × e^(-1.60) = 9 × 0.202
- **V = 1.82 V** ✓
**Mark Scheme:**
[1] τ = RC
[1] Correct exponential formula
[1] Correct answer

---

### EXAMPLE 28: CAPACITORS - Energy Storage
**Q:** A 100 μF capacitor is charged to 12 V. Calculate the charge stored and the energy stored. [3 marks]
**Solution:**
- Q = CV = 100 × 10⁻⁶ × 12 = **1.2 × 10⁻³ C = 1.2 mC** ✓
- E = ½CV² = ½ × 100 × 10⁻⁶ × 12²
- **E = 7.2 × 10⁻³ J = 7.2 mJ** ✓
**Mark Scheme:**
[1] Q = CV
[1] E = ½CV²
[1] Correct answers with units

---

### EXAMPLE 29: ELECTROMAGNETIC INDUCTION - Transformer
**Q:** A transformer with 200 primary turns and 1000 secondary turns is connected to 230V AC. Calculate the secondary voltage and, if 90% efficient with 2A input, the output current. [4 marks]
**Solution:**
- Vₛ/Vₚ = Nₛ/Nₚ → Vₛ = 230 × 1000/200
- **Secondary voltage = 1150 V** ✓
- Input power = 230 × 2 = 460 W
- Output power = 0.90 × 460 = 414 W
- Output current = 414/1150
- **Output current = 0.36 A** ✓
**Mark Scheme:**
[1] Correct transformer ratio
[1] Correct secondary voltage
[1] Efficiency and power calculation
[1] Correct output current

---

### EXAMPLE 30: ELECTROMAGNETIC INDUCTION - Faraday's Law
**Q:** A coil of 500 turns and area 0.04 m² is in a magnetic field of 0.2 T. The coil is rotated so the field passes through it in 0.05 s. Calculate the average induced EMF. [3 marks]
**Solution:**
- Initial flux linkage = NBA = 500 × 0.2 × 0.04 = 4.0 Wb
- Final flux linkage = 0 (field now parallel to coil)
- ε = -NΔΦ/Δt = -(0 - 4.0)/0.05 = 4.0/0.05
- **ε = 80 V** ✓
**Mark Scheme:**
[1] Correct flux linkage calculation
[1] Use of Faraday's law
[1] Correct answer with unit

---

### EXAMPLE 31: NUCLEAR - Radioactive Decay
**Q:** A radioactive isotope has a half-life of 5.2 years. What fraction remains after 15 years? [2 marks]
**Solution:**
- Number of half-lives = 15/5.2 = 2.88
- Fraction remaining = (½)^2.88 = 0.136
- **Fraction = 0.14 or 14%** ✓
**Mark Scheme:**
[1] Correct number of half-lives
[1] Correct fraction

---

### EXAMPLE 32: NUCLEAR - Activity and Decay Constant
**Q:** A sample has an initial activity of 8.0 × 10⁶ Bq and a half-life of 4.5 days. Calculate the decay constant and the activity after 10 days. [4 marks]
**Solution:**
- λ = ln 2/t½ = 0.693/(4.5 × 24 × 3600) = 1.78 × 10⁻⁶ s⁻¹
- Or λ = 0.693/4.5 = **0.154 day⁻¹** ✓
- A = A₀e^(-λt) = 8.0 × 10⁶ × e^(-0.154 × 10)
- A = 8.0 × 10⁶ × e^(-1.54) = 8.0 × 10⁶ × 0.214
- **A = 1.7 × 10⁶ Bq** ✓
**Mark Scheme:**
[1] λ = ln 2/t½
[1] Correct decay constant with unit
[1] Correct exponential decay formula
[1] Correct activity

---

### EXAMPLE 33: NUCLEAR - Binding Energy
**Q:** The mass of a helium-4 nucleus is 4.00150 u. Calculate the binding energy per nucleon. (Proton mass = 1.00728 u, Neutron mass = 1.00867 u) [4 marks]
**Solution:**
- Mass of constituents = 2(1.00728) + 2(1.00867) = 4.03190 u
- Mass defect Δm = 4.03190 - 4.00150 = 0.03040 u
- Δm in kg = 0.03040 × 1.661 × 10⁻²⁷ = 5.05 × 10⁻²⁹ kg
- Binding energy = Δmc² = 5.05 × 10⁻²⁹ × (3 × 10⁸)² = 4.54 × 10⁻¹² J
- Or use: 0.03040 × 931.5 = 28.3 MeV
- BE per nucleon = 28.3/4 = **7.08 MeV** ✓
**Mark Scheme:**
[1] Correct mass of constituents
[1] Correct mass defect
[1] Use of E = Δmc² or 931.5 MeV/u
[1] Correct BE per nucleon

---

### EXAMPLE 34: NUCLEAR - Fission Energy
**Q:** In a fission reaction, U-235 absorbs a neutron and splits into Ba-141 and Kr-92 plus neutrons. Calculate the number of neutrons released and the energy released if the mass defect is 0.186 u. [3 marks]
**Solution:**
- Mass numbers: 235 + 1 = 141 + 92 + n
- 236 = 233 + n → **n = 3 neutrons** ✓
- Energy = Δm × 931.5 = 0.186 × 931.5
- **Energy = 173 MeV** ✓
**Mark Scheme:**
[1] Correct neutron count
[1] Use of mass defect × 931.5
[1] Correct energy

---

### EXAMPLE 35: MEASUREMENTS - Uncertainty
**Q:** A student measures the period of a pendulum as 2.4 ± 0.1 s. If T = 2π√(L/g), calculate the percentage uncertainty in the calculated value of g. [3 marks]
**Solution:**
- T = 2π√(L/g) → g = 4π²L/T²
- Percentage uncertainty in T = (0.1/2.4) × 100 = 4.2%
- g ∝ 1/T², so percentage uncertainty in g = 2 × 4.2%
- **Uncertainty in g = 8.4%** ✓
**Mark Scheme:**
[1] Correct percentage uncertainty in T
[1] Recognition that uncertainty doubles for squared term
[1] Correct final answer`;

// AQA A-Level Physics guiding principles
const AQA_ALEVEL_PHYSICS_PRINCIPLES = `
AQA A-Level Physics Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures (30-34%)
- AO2: Apply knowledge and understanding of scientific ideas, processes, techniques and procedures (40-44%)
- AO3: Analyse, interpret and evaluate scientific information, ideas and evidence (25-27%)

AQA A-Level Physics Command Words:
- Calculate: Obtain a numerical answer showing relevant working
- Compare: Identify similarities and/or differences
- Define: Give precise meaning of a term
- Describe: Give an account of main features
- Determine: Use given data or information to obtain an answer
- Discuss: Present key points about different ideas or strengths and weaknesses
- Estimate: Give an approximate value
- Evaluate: Judge from available evidence or information
- Explain: Give reasons for or causes of
- Justify: Present a reasoned case for actions or decisions
- Outline: Set out main points
- Show that: Verify the statement given using subject knowledge or given information
- Sketch: Draw approximately
- State: Express in clear terms

AQA A-Level Mark Scheme Conventions:
- Marks in brackets indicate the type: (1) for answer, (1) for method/explanation
- Working must be shown for calculation questions
- Units required in final answer unless given in question
- Significant figures should match data given (usually 2-3 sf)
- Accept equivalent correct answers unless specific method required
- 6-mark extended questions use level descriptors

**AQA-Specific Characteristics (vs Edexcel/OCR):**
- 12 REQUIRED PRACTICALS (more than other boards)
- Emphasises PRACTICAL SKILLS and hands-on learning
- Comprehensive coverage focusing on real-world applications
- Paper 1 & 2 focus on different content sections, Paper 3 is practical skills + synoptic
- Optional topics in Paper 3 (Astrophysics, Medical Physics, etc.)
- Content includes: virtual photons, bosons, Feynman diagrams, baryon numbers
- Includes muons, pions, kaons (detailed particle physics)
- Covers eddy currents and transformer inefficiencies
- High-voltage transmission and power loss calculations
- Nuclear moderator/control rod materials covered
- Questions often stick closer to textbook examples
- Mark schemes considered more accessible

Data and Formulae Sheet:
Many equations are provided in the exam. Some must be recalled:
- Provided: F = GMm/r², E = hf, E = mc², Ns/Np = Vs/Vp, etc.
- Must recall: v = fλ, E = ½mv², p = mv, V = IR, etc.
`;

// Topic-specific guidance for A-Level Physics
const ALEVEL_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'alevel-physics-measurements': `
Section 3.1 Measurements and Their Errors:
- Focus on SI units, prefixes, and dimensional analysis
- Uncertainty calculations are frequently tested
- Error propagation rules must be applied correctly
- Percentage and absolute uncertainties
- Graph analysis including error bars and gradient uncertainty
AQA often tests: combining uncertainties, orders of magnitude estimation
`,
  'alevel-physics-particles': `
Section 3.2 Particles and Radiation:
- Particle physics: quarks, leptons, hadrons, conservation laws
- Photoelectric effect and work function calculations
- Energy level diagrams and photon emission
- de Broglie wavelength calculations
- Feynman diagrams for particle interactions
AQA often tests: applying conservation laws, photoelectric equation, quark composition
`,
  'alevel-physics-waves': `
Section 3.3 Waves:
- Superposition and interference patterns
- Diffraction grating equation: d sin θ = nλ
- Young's double slit: w = λD/s
- Stationary waves on strings and in pipes
- Optical fibres and total internal reflection
AQA often tests: two-source interference, grating calculations, standing wave patterns
`,
  'alevel-physics-mechanics': `
Section 3.4 Mechanics and Materials:
- SUVAT equations for kinematics
- Projectile motion (independent horizontal/vertical)
- Momentum conservation in collisions
- Work-energy theorem and power
- Young modulus and stress-strain graphs
AQA often tests: projectile problems, momentum in 2D, energy calculations, Young modulus
`,
  'alevel-physics-electricity': `
Section 3.5 Electricity:
- Current and drift velocity: I = nAvq
- Kirchhoff's laws for circuit analysis
- Resistivity: ρ = RA/L
- Potential divider circuits with sensors
- EMF and internal resistance: ε = I(R + r)
AQA often tests: circuit analysis, potential dividers, internal resistance graphs
`,
  'alevel-physics-further-mechanics': `
Section 3.6.1 Further Mechanics (Periodic Motion):
- Circular motion: centripetal force and acceleration
- SHM defining equation: a = -ω²x
- SHM energy: E = ½kA² = ½mω²A²
- Damping effects and resonance curves
- Period equations for springs and pendulums
AQA often tests: SHM graphs and equations, energy in oscillations, resonance
`,
  'alevel-physics-thermal': `
Section 3.6.2 Thermal Physics:
- Ideal gas equation: pV = nRT = NkT
- Kinetic theory: pV = ⅓Nm<c²>
- Internal energy: U = 3/2 NkT
- Specific heat capacity and latent heat
- Gas law experimental verification
AQA often tests: gas calculations, kinetic theory derivation, internal energy
`,
  'alevel-physics-fields': `
Section 3.7 Fields and Their Consequences:
- Gravitational fields: g = GM/r², V = -GM/r
- Electric fields: E = kQ/r², V = kQ/r
- Orbital mechanics and satellites
- Capacitor charge/discharge: Q = Q₀e^(-t/RC)
- Electromagnetic induction: ε = -NdΦ/dt
- Transformers and AC circuits
AQA often tests: field comparisons, orbital calculations, capacitor time constant, EMI
`,
  'alevel-physics-nuclear': `
Section 3.8 Nuclear Physics:
- Radioactive decay: N = N₀e^(-λt), t½ = ln2/λ
- Mass-energy: E = mc², binding energy per nucleon
- Nuclear radius: r = r₀A^(1/3)
- Fission and chain reactions
- Nuclear safety and waste
AQA often tests: decay calculations, binding energy, nuclear equations
`,
  'alevel-physics-astrophysics': `
Section 3.9 Astrophysics (Optional):
- Telescope resolving power: θ ≈ λ/D
- Stefan-Boltzmann: L = 4πr²σT⁴
- Wien's law: λmax T = constant
- HR diagram and stellar evolution
- Hubble's law: v = H₀d
AQA often tests: magnitude calculations, spectral classification, cosmology
`,
  'alevel-physics-medical': `
Section 3.10 Medical Physics (Optional):
- Lens equation and optical power
- Intensity level: IL = 10 log(I/I₀)
- Ultrasound: acoustic impedance, A-scan/B-scan
- X-ray attenuation: I = I₀e^(-μx)
- CT, PET and MRI principles
AQA often tests: imaging physics, attenuation, diagnostic techniques
`,
  'alevel-physics-engineering': `
Section 3.11 Engineering Physics (Optional):
- Moment of inertia: I = Σmr²
- Rotational kinetic energy: E = ½Iω²
- First law of thermodynamics: ΔU = Q - W
- Heat engine efficiency: η = 1 - Tc/Th
- p-V diagrams and cycles
AQA often tests: rotational dynamics, thermodynamic cycles, engine efficiency
`,
  'alevel-physics-turning-points': `
Section 3.12 Turning Points in Physics (Optional):
- Thomson's e/m experiment
- Millikan's oil drop experiment
- Wave-particle duality evidence
- Special relativity: time dilation, length contraction
- Lorentz factor: γ = 1/√(1 - v²/c²)
AQA often tests: historical experiments, relativistic calculations
`,
  'alevel-physics-electronics': `
Section 3.13 Electronics (Optional):
- Op-amp circuits: inverting and non-inverting
- Gain calculations
- Logic gates and truth tables
- Combinational logic
- A/D conversion
AQA often tests: amplifier gain, logic circuit analysis
`,
};

// ============================================================================
// SYNOPTIC QUESTIONS GUIDANCE
// ============================================================================

const AQA_ALEVEL_PHYSICS_SYNOPTIC_GUIDANCE = `
## Synoptic Questions Guidance

Synoptic questions are a key feature of AQA A-Level Physics Paper 3. They assess your ability to connect concepts across different areas of the specification and apply physics to unfamiliar contexts.

### What Makes a Question Synoptic?

1. **Connects multiple topic areas**
   - e.g., Using SHM concepts with gravitational fields
   - e.g., Combining electricity with thermal physics
   - e.g., Linking waves with particle physics (de Broglie)

2. **Applies physics to unfamiliar contexts**
   - Real-world scenarios not directly in the specification
   - Novel applications of fundamental principles
   - Problem-solving in new situations

3. **Requires evaluation of methods or data**
   - Comparing experimental techniques
   - Assessing validity of conclusions
   - Identifying assumptions and limitations

### Common Synoptic Combinations

| Primary Topic | Secondary Topic | Connection |
|--------------|-----------------|------------|
| SHM | Gravitational fields | Satellite oscillations, pendulums |
| Thermal physics | Fields | Gas behavior in varying g |
| Capacitors | Nuclear decay | Both involve exponential decay |
| Circular motion | Magnetic fields | Charged particles in B-field |
| Waves | Particles | Wave-particle duality |
| Energy | Any topic | Energy conservation applies everywhere |
| Uncertainties | Any practical | Error analysis in all experiments |

### Approaching Synoptic Questions

**Step 1: Identify the Physics**
- What topic area(s) are involved?
- What equations might be relevant?
- What fundamental principles apply?

**Step 2: Extract Information**
- What data is given?
- What units are provided (gives clues)?
- What assumptions can you make?

**Step 3: Plan Your Approach**
- Which equation(s) will you use?
- What order will you tackle sub-parts?
- Can you check your answer makes sense?

**Step 4: Execute and Verify**
- Show clear working
- Include units throughout
- Check magnitude of answer is sensible

### Example Synoptic Question Patterns

**Pattern 1: Gravitational Field + Circular Motion + Energy**
"A satellite orbits Earth at height h. Calculate its orbital speed, period, and the energy required to launch it from Earth's surface."

This requires:
- Gravitational force = Centripetal force (GMm/r² = mv²/r)
- Orbital mechanics (v = √(GM/r), T = 2πr/v)
- GPE calculations (ΔE = GMm/r₁ - GMm/r₂)

**Pattern 2: SHM + Waves + Materials**
"A mass on a spring oscillates, creating waves on an attached string. Analyze the frequency, wavelength, and tension."

This requires:
- SHM equations (T = 2π√(m/k), ω = 2πf)
- Wave equation (v = fλ)
- Wave on string (v = √(T/μ))

**Pattern 3: Capacitors + Thermal Physics**
"A capacitor discharges through a thermistor. Describe and explain how the discharge behavior changes."

This requires:
- Capacitor discharge (V = V₀e^(-t/RC))
- Thermistor I-V characteristics
- Heating effects on resistance

**Pattern 4: Electric Field + Circular Motion**
"An electron enters a region of crossed electric and magnetic fields. Describe its motion for different field strengths."

This requires:
- Electric force (F = qE)
- Magnetic force (F = BQv)
- Velocity selector condition (E = Bv)

### Synoptic Questions in Paper 3 Section A

Paper 3 Section A (45 marks) focuses on practical skills with synoptic elements:

**Data Analysis Tasks:**
- Plotting and interpreting graphs
- Calculating gradients and uncertainties
- Drawing conclusions from data
- Evaluating experimental methods

**Practical Planning:**
- Identifying variables
- Describing methods
- Predicting results
- Assessing sources of error

### Mark Scheme Features for Synoptic Questions

- Credit for identifying relevant physics principles
- Credit for attempting to connect concepts
- ECF (error carried forward) applied generously
- Quality of written communication assessed
- Alternative valid approaches credited

### Practice Strategies for Synoptic Questions

1. **Make connections as you study**
   - Note when equations appear in multiple topics
   - Identify common mathematical relationships

2. **Practice with past papers**
   - Paper 3 from recent years
   - Mark scheme analysis

3. **Apply physics to news/real world**
   - Space missions
   - Medical technology
   - Energy generation

4. **Review all required practicals**
   - Understand the physics behind each
   - Know how to evaluate methods
`;

// ============================================================================
// AQA A-LEVEL PHYSICS COMPLETE SPECIFICATION CONTENT OUTLINE
// ============================================================================

const AQA_ALEVEL_PHYSICS_SPECIFICATION_CONTENT = `
## AQA A-Level Physics (7408) Complete Specification Content

### Section 1: Measurements and Their Errors (3.1)

**1.1 Use of SI units and their prefixes**
- Fundamental (base) units: kg, m, s, A, K, mol, cd
- Derived units and their relationships
- Prefixes from femto (10⁻¹⁵) to tera (10¹²)
- Converting between units

**1.2 Limitation of physical measurements**
- Random and systematic errors
- Precision vs accuracy
- Resolution of measuring instruments
- Repeatability and reproducibility

**1.3 Estimation of physical quantities**
- Orders of magnitude
- Fermi questions
- Reasonable estimates

**1.4 Uncertainties and error analysis**
- Absolute, fractional, and percentage uncertainties
- Combining uncertainties in sums, differences, products, quotients
- Combining uncertainties in powers
- Graphical methods for determining uncertainty

### Section 2: Particles and Radiation (3.2)

**2.1 Particles**
- Constituents of the atom (protons, neutrons, electrons)
- Specific charge (Q/m ratio)
- Stable and unstable nuclei
- Isotopes and nuclides

**2.2 Stable and unstable nuclei**
- Strong nuclear force
- Radioactive decay (alpha, beta, gamma)
- Conservation laws (charge, baryon number, lepton number)
- Nuclear equations

**2.3 Particles, antiparticles and photons**
- Particle-antiparticle pairs
- Annihilation and pair production
- Photon model of electromagnetic radiation
- E = hf and momentum of photon p = h/λ

**2.4 Particle interactions**
- Four fundamental forces
- Exchange particles (bosons)
- Feynman diagrams
- Virtual photons, W bosons, gluons

**2.5 Classification of particles**
- Hadrons (baryons and mesons)
- Leptons
- Quarks and antiquarks (u, d, s, c, t, b)
- Properties and conservation laws

**2.6 Quarks and antiquarks**
- Quark composition of hadrons
- Charge and baryon number of quarks
- Strangeness and strange particles
- Quark interactions and gluons

**2.7 Applications of conservation laws**
- Applying conservation laws to particle interactions
- Allowed and forbidden reactions
- Beta decay at quark level

**2.8 The photoelectric effect**
- Work function and threshold frequency
- hf = φ + Ek(max)
- Stopping potential
- Wave-particle duality

**2.9 Collisions of electrons with atoms**
- Excitation and ionization
- Energy levels
- Emission and absorption spectra
- ΔE = hf for transitions

**2.10 Energy levels and photon emission**
- Discrete energy levels
- Ground state and excited states
- Fluorescent tubes and line spectra
- Continuous spectra

**2.11 Wave-particle duality**
- de Broglie wavelength λ = h/mv
- Electron diffraction
- Evidence for wave and particle nature

### Section 3: Waves (3.3)

**3.1 Progressive waves**
- Displacement, amplitude, wavelength, period, frequency
- Phase and phase difference
- Wave speed equation v = fλ
- Transverse and longitudinal waves

**3.2 Longitudinal and transverse waves**
- Characteristics of each type
- Examples (sound, electromagnetic, seismic)
- Polarization (transverse waves only)

**3.3 Principle of superposition**
- Constructive and destructive interference
- Path difference and phase difference
- Conditions for maxima and minima

**3.4 Stationary waves**
- Formation from two progressive waves
- Nodes and antinodes
- Patterns on strings (harmonics)
- f = n/(2L) × √(T/μ)

**3.5 Interference**
- Two-source interference
- Young's double slit experiment
- w = λD/s
- Coherence requirements

**3.6 Diffraction**
- Single slit diffraction pattern
- Effect of slit width on pattern
- Diffraction grating: d sin θ = nλ
- Maximum number of orders

**3.7 Refraction**
- Refractive index n = c/v
- Snell's law: n₁ sin θ₁ = n₂ sin θ₂
- Total internal reflection
- Critical angle: sin θc = n₂/n₁

**3.8 Optical fibres**
- Structure and materials
- Signal degradation (absorption, dispersion)
- Modal and material dispersion
- Applications in communications

### Section 4: Mechanics and Materials (3.4)

**4.1 Scalars and vectors**
- Definitions and examples
- Vector addition (graphical and component)
- Resolution of vectors

**4.2 Moments**
- Moment = Force × perpendicular distance
- Principle of moments
- Couples and torque

**4.3 Motion along a straight line**
- Displacement, velocity, acceleration
- Graphs of motion
- SUVAT equations

**4.4 Projectile motion**
- Independence of horizontal and vertical motion
- Parabolic path
- Range, time of flight, maximum height

**4.5 Newton's laws of motion**
- First law (inertia)
- Second law (F = ma)
- Third law (action-reaction pairs)

**4.6 Momentum**
- p = mv
- Conservation of momentum
- Impulse F Δt = Δp

**4.7 Work, energy and power**
- W = Fs cos θ
- Kinetic energy Ek = ½mv²
- Gravitational potential energy Ep = mgh
- Power P = Fv and P = W/t

**4.8 Conservation of energy**
- Principle of conservation
- Energy transformations
- Efficiency calculations

**4.9 Materials**
- Hooke's law F = kx
- Elastic strain energy E = ½Fx = ½kx²
- Elastic and plastic behavior

**4.10 Bulk properties of solids**
- Density ρ = m/V
- Stress σ = F/A
- Strain ε = ΔL/L
- Young modulus E = σ/ε

### Section 5: Electricity (3.5)

**5.1 Basics of electricity**
- Current I = ΔQ/Δt
- Potential difference V = W/Q
- Resistance R = V/I
- Ohm's law

**5.2 Current-voltage characteristics**
- Ohmic conductors
- Filament lamp
- Thermistor
- Diode

**5.3 Resistivity**
- ρ = RA/L
- Effect of temperature on resistance
- Superconductors

**5.4 Circuits**
- Series and parallel combinations
- Kirchhoff's laws
- Conservation of charge and energy

**5.5 Potential divider**
- V_out = V_in × R₂/(R₁ + R₂)
- Using sensors (LDR, thermistor)
- Applications

**5.6 Electromotive force and internal resistance**
- ε = I(R + r)
- Terminal PD V = ε - Ir
- Lost volts

**5.7 The drift velocity equation**
- I = nAvq
- Number density n
- Applications

### Section 6: Further Mechanics and Thermal Physics (3.6)

**6.1.1 Circular motion**
- Angular velocity ω = v/r = 2πf
- Centripetal acceleration a = v²/r = ω²r
- Centripetal force F = mv²/r

**6.1.2 Simple harmonic motion**
- Defining equation a = -ω²x
- Solutions x = A cos ωt, v = -Aω sin ωt
- Maximum velocity v_max = ωA

**6.1.3 Simple harmonic systems**
- Mass-spring T = 2π√(m/k)
- Simple pendulum T = 2π√(L/g)
- Energy in SHM

**6.1.4 Forced vibrations and resonance**
- Natural frequency
- Damping (light, heavy, critical)
- Resonance curves
- Applications

**6.2.1 Thermal energy transfer**
- Specific heat capacity Q = mcΔθ
- Specific latent heat Q = mL
- Continuous flow calorimetry

**6.2.2 Ideal gases**
- Gas laws (Boyle, Charles, pressure law)
- Ideal gas equation pV = nRT = NkT
- Assumptions of kinetic theory

**6.2.3 Molecular kinetic theory model**
- Derivation of pV = ⅓Nm<c²>
- rms speed
- Mean kinetic energy ½m<c²> = 3/2 kT

### Section 7: Fields and Their Consequences (3.7)

**7.1 Fields**
- Concept of a field
- Field lines and patterns
- Uniform and radial fields

**7.2 Gravitational fields**
- Newton's law F = GMm/r²
- Field strength g = F/m = GM/r²
- Gravitational potential V = -GM/r
- Potential energy = mV

**7.3 Electric fields**
- Coulomb's law F = kQ₁Q₂/r²
- Field strength E = F/Q = kQ/r²
- Uniform field E = V/d
- Electric potential V = kQ/r

**7.4 Capacitance**
- C = Q/V
- Parallel plate capacitor C = ε₀A/d
- Energy stored E = ½QV = ½CV²
- Capacitors in series and parallel

**7.5 Capacitor charge and discharge**
- Q = Q₀e^(-t/RC)
- V = V₀e^(-t/RC)
- I = I₀e^(-t/RC)
- Time constant τ = RC

**7.6 Magnetic fields**
- Magnetic flux density B
- Force on moving charge F = BQv
- Force on current F = BIL
- Fleming's left-hand rule

**7.7 Electromagnetic induction**
- Magnetic flux Φ = BA cos θ
- Flux linkage NΦ
- Faraday's law ε = -NdΦ/dt
- Lenz's law

**7.8 Alternating currents**
- Peak and rms values
- Transformers Vs/Vp = Ns/Np
- Transmission of electrical power

### Section 8: Nuclear Physics (3.8)

**8.1 Radioactivity**
- Evidence for nucleus (Rutherford)
- Nuclear radius r = r₀A^(1/3)
- Radioactive decay
- Half-life

**8.2 α, β and γ radiation**
- Nature and properties
- Penetration and ionization
- Equations for decay

**8.3 Radioactive decay**
- N = N₀e^(-λt)
- A = λN = A₀e^(-λt)
- t½ = ln 2/λ

**8.4 Nuclear instability**
- N-Z plot
- Reasons for alpha, beta decay
- Nuclear stability

**8.5 Nuclear radius**
- Electron diffraction evidence
- r = r₀A^(1/3) where r₀ ≈ 1.2 fm
- Nuclear density

**8.6 Mass and energy**
- Mass defect
- Binding energy
- E = mc²
- Binding energy per nucleon curve

**8.7 Induced fission**
- Fission process
- Chain reaction
- Critical mass
- Nuclear reactors

**8.8 Nuclear fusion**
- Fusion in stars
- Conditions required
- Energy release
- Difficulties on Earth
`;

// ============================================================================
// AQA A-LEVEL PHYSICS GRADE BOUNDARIES AND EXAM TECHNIQUE
// ============================================================================

const AQA_ALEVEL_PHYSICS_EXAM_TECHNIQUE = `
## AQA A-Level Physics Exam Technique

### Typical Grade Boundaries (approximate %)
These vary by year but give a general indication:

| Grade | Typical UMS Range | Raw Mark (approx) |
|-------|-------------------|-------------------|
| A* | 90%+ | ~80%+ |
| A | 80-89% | ~70-79% |
| B | 70-79% | ~60-69% |
| C | 60-69% | ~50-59% |
| D | 50-59% | ~40-49% |
| E | 40-49% | ~30-39% |

### Time Management

**Paper 1 (2 hours, 85 marks):**
- ~1.4 minutes per mark
- Multiple choice: ~25 minutes for 25 marks
- Short questions: allocate time by marks
- Extended questions (6 marks): ~8-9 minutes each

**Paper 2 (2 hours, 85 marks):**
- Same as Paper 1
- Budget time for complex calculations

**Paper 3 (2 hours, 80 marks):**
- Section A (45 marks): ~70 minutes
- Section B (35 marks): ~50 minutes
- Leave time for checking

### Answering Calculation Questions

1. **Write the equation** (even if provided, show you know which one)
2. **Substitute values with units**
3. **Show your working** (even simple steps)
4. **Give answer with correct units**
5. **Check significant figures** (match data given, usually 2-3 sf)
6. **Sense check** (is the magnitude reasonable?)

### Answering "Explain" Questions

- Structure your answer logically
- Use physics terminology
- Include "because" to link cause and effect
- One physics point per line (for clarity)
- Don't repeat the question back

### Answering "Describe" Questions

- Give an account/sequence
- Don't explain why (unless asked)
- Be specific and technical
- Use appropriate vocabulary

### Answering "Evaluate" Questions

- Consider advantages AND disadvantages
- Reference data/evidence where possible
- Reach a conclusion
- Justify your conclusion

### Extended Response (6 mark) Questions

Level 3 (5-6 marks):
- Detailed, comprehensive answer
- Well-structured and coherent
- Accurate physics throughout
- Full range of relevant points

Level 2 (3-4 marks):
- Mostly accurate physics
- Some structure
- May lack detail or completeness
- Some relevant points covered

Level 1 (1-2 marks):
- Basic points made
- Limited structure
- Some inaccuracies
- Few relevant points

### Common Mistakes to Avoid

**Calculations:**
- Not converting units (mm to m, °C to K)
- Rounding too early
- Wrong number of significant figures
- Missing units in answer
- Using wrong equation
- Calculator in wrong mode (deg/rad)

**Explanations:**
- Vague language ("it affects it")
- Not using physics terms
- Circular reasoning
- Not answering the question asked

**Graphs:**
- Wrong choice of axis
- Poor scale choice
- Not labeling axes
- Joining points dot-to-dot (should be best fit)
- Not drawing through origin when appropriate

**Practical questions:**
- Not identifying variables clearly
- Forgetting control variables
- Not suggesting repeat measurements
- Confusing accuracy and precision

### Key Phrases for Mark Schemes

**For explaining phenomena:**
- "This is because..."
- "This results in..."
- "Therefore..."
- "This leads to..."

**For comparisons:**
- "Both... however..."
- "In contrast..."
- "Similarly..."
- "Unlike..."

**For evaluations:**
- "The advantage of... is..."
- "However, a limitation is..."
- "On balance..."
- "The evidence suggests..."

### Reading the Question Carefully

- Underline command words
- Note the marks available
- Identify what physics is being tested
- Check for "show that" questions (quote more sf than given)
- Look for context clues (what topic area?)

### Using the Data Booklet

- Know what's provided vs what must be recalled
- Check values you use are correct
- Use provided constants accurately
- Note units carefully
`;

// ============================================================================
// AQA A-LEVEL PHYSICS PARTICLE PHYSICS ADDITIONAL DETAIL
// ============================================================================

const AQA_ALEVEL_PHYSICS_PARTICLE_DETAIL = `
## Particle Physics Additional Detail (Section 3.2)

### The Standard Model Overview

**Fundamental Particles:**
- 6 quarks (u, d, c, s, t, b)
- 6 leptons (e, μ, τ and their neutrinos)
- 4 force carriers (photon, W±, Z⁰, gluon)
- Higgs boson

### Quark Properties Table

| Quark | Symbol | Charge | Baryon No. | Strangeness |
|-------|--------|--------|------------|-------------|
| Up | u | +2/3 e | +1/3 | 0 |
| Down | d | -1/3 e | +1/3 | 0 |
| Strange | s | -1/3 e | +1/3 | -1 |
| Charm | c | +2/3 e | +1/3 | 0 |
| Top | t | +2/3 e | +1/3 | 0 |
| Bottom | b | -1/3 e | +1/3 | 0 |

(Antiquarks have opposite charge, baryon number, and strangeness)

### Lepton Properties Table

| Lepton | Symbol | Charge | Lepton No. |
|--------|--------|--------|------------|
| Electron | e⁻ | -e | +1 |
| Electron neutrino | νₑ | 0 | +1 |
| Muon | μ⁻ | -e | +1 |
| Muon neutrino | νμ | 0 | +1 |
| Tau | τ⁻ | -e | +1 |
| Tau neutrino | ντ | 0 | +1 |

### Hadron Classification

**Baryons (3 quarks):**
- Proton: uud (charge = +1, baryon no. = +1)
- Neutron: udd (charge = 0, baryon no. = +1)
- Lambda (Λ⁰): uds (charge = 0, strangeness = -1)
- Sigma (Σ): various combinations

**Mesons (quark + antiquark):**
- Pion (π⁺): ud̄ (charge = +1)
- Pion (π⁻): dū (charge = -1)
- Pion (π⁰): uū or dd̄ (charge = 0)
- Kaon (K⁺): us̄ (charge = +1, strangeness = +1)
- Kaon (K⁻): sū (charge = -1, strangeness = -1)

### Conservation Laws

**Always Conserved:**
- Energy
- Momentum
- Charge
- Baryon number
- Lepton number (for each generation)

**Conserved in Strong interactions:**
- Strangeness

**NOT conserved in Weak interactions:**
- Strangeness (can change by ±1)

### Exchange Particles

| Force | Exchange Particle | Mass | Range |
|-------|------------------|------|-------|
| Electromagnetic | Photon (γ) | 0 | Infinite |
| Strong | Gluon (g) | 0 | ~10⁻¹⁵ m |
| Weak | W±, Z⁰ | ~80-90 GeV | ~10⁻¹⁸ m |
| Gravitational | Graviton (theoretical) | 0 | Infinite |

### Feynman Diagram Rules

1. Time flows left to right (or bottom to top)
2. Particles are solid lines with arrows
3. Antiparticles have arrows pointing backward in time
4. Exchange particles are wavy (photon) or dashed (W/Z) lines
5. Vertices must conserve charge, lepton number, baryon number

### Beta Decay Feynman Diagrams

**Beta-minus (β⁻):**
- n → p + e⁻ + ν̄ₑ
- At quark level: d → u + W⁻ → u + e⁻ + ν̄ₑ

**Beta-plus (β⁺):**
- p → n + e⁺ + νₑ
- At quark level: u → d + W⁺ → d + e⁺ + νₑ

### Photoelectric Effect Key Points

| Observation | Wave Prediction | Particle Explanation |
|-------------|-----------------|---------------------|
| Threshold frequency | Should be none | f > f₀ needed for E > φ |
| Instantaneous emission | Should take time | One photon, one electron |
| KE independent of intensity | KE ∝ intensity | KE = hf - φ |
| More electrons with intensity | Fewer electrons | More photons, more electrons |

### Energy Level Calculations

**Hydrogen atom energy levels:**
- E_n = -13.6/n² eV (n = 1, 2, 3...)
- Ground state (n=1): -13.6 eV
- First excited (n=2): -3.4 eV
- Ionization energy: 13.6 eV

**Transition energies:**
- ΔE = E_final - E_initial = hf = hc/λ
- Emission: electron drops, photon emitted
- Absorption: photon absorbed, electron rises

### de Broglie Wavelength Applications

- Electron microscopy (λ << visible light → better resolution)
- Electron diffraction (crystal structure)
- Particle physics experiments

**Typical values:**
- 100 eV electron: λ ≈ 0.12 nm
- 10 keV electron: λ ≈ 0.012 nm
- Tennis ball at 50 m/s: λ ≈ 10⁻³⁴ m (undetectable)
`;

// ============================================================================
// AQA A-LEVEL PHYSICS OPTIONAL TOPICS DETAILED CONTENT
// ============================================================================

const AQA_ALEVEL_PHYSICS_ASTROPHYSICS_DETAIL = `
## Astrophysics Option (Section 3.9) Detailed Content

### Telescopes

**Optical Telescopes:**
- Refracting (lenses) vs Reflecting (mirrors)
- Advantages of reflectors: No chromatic aberration, easier to support, can be larger

**Resolving Power:**
- θ ≈ λ/D (Rayleigh criterion)
- Larger aperture D → better resolution
- Shorter wavelength → better resolution

**Magnification:**
- Angular magnification M = angle subtended at eye with telescope / angle to naked eye
- M = fo/fe for telescope in normal adjustment
- fo = objective focal length, fe = eyepiece focal length

**Cassegrain Reflector:**
- Parabolic primary mirror
- Hyperbolic secondary mirror
- Compact design, widely used

**Charge-Coupled Devices (CCDs):**
- Convert photons to electrical charge
- Quantum efficiency ~70-80% (vs ~5% for eye)
- Linear response
- Can be read out digitally

### Non-Optical Telescopes

**Radio Telescopes:**
- Large dish (or array) to collect radio waves
- Resolution limited by long wavelength (need large D)
- Can observe through clouds
- Detect signals from cold gas, pulsars, CMB

**Infrared Telescopes:**
- Located at high altitude or in space (atmospheric absorption)
- Detect cooler objects, dust clouds
- Requires cooling to reduce thermal noise

**Ultraviolet and X-ray:**
- Must be space-based (atmospheric absorption)
- X-ray telescopes use grazing incidence mirrors

### Classification of Stars

**Stellar Spectra:**
- Absorption lines identify elements in stellar atmosphere
- Continuous spectrum from hot interior
- Emission lines from hot, low-density gas

**Spectral Classes (OBAFGKM - "Oh Be A Fine Girl/Guy, Kiss Me"):**
| Class | Color | Temperature (K) | Example |
|-------|-------|-----------------|---------|
| O | Blue | 30,000-50,000 | Rare, massive |
| B | Blue-white | 10,000-30,000 | Rigel |
| A | White | 7,500-10,000 | Sirius |
| F | Yellow-white | 6,000-7,500 | Canopus |
| G | Yellow | 5,000-6,000 | Sun |
| K | Orange | 3,500-5,000 | Arcturus |
| M | Red | 2,500-3,500 | Betelgeuse |

### Hertzsprung-Russell Diagram

**Main Features:**
- Main sequence: diagonal from top-left to bottom-right
- Red giants: top-right (cool, large, luminous)
- White dwarfs: bottom-left (hot, small, dim)
- Supergiants: top (very luminous)

**Stellar Evolution on HR Diagram:**
1. Protostar contracts, joins main sequence
2. Hydrogen burning in core (main sequence lifetime)
3. Core exhaustion → red giant phase
4. Depending on mass: white dwarf, neutron star, or black hole

### Stellar Distances

**Parallax:**
- Apparent shift of nearby star against background
- p (arcseconds) = 1/d (parsecs)
- 1 parsec = 3.26 light-years = 3.09 × 10¹⁶ m
- Limited to ~100 pc from ground, ~1000 pc from space (Gaia)

**Standard Candles:**
- Objects of known luminosity
- Cepheid variables: Period-luminosity relationship
- Type Ia supernovae: consistent peak luminosity

**Magnitude Scale:**
- Apparent magnitude m (how bright it looks)
- Absolute magnitude M (brightness at 10 pc)
- m - M = 5 log(d/10) where d in parsecs
- Magnitude difference of 5 = factor of 100 in brightness
- Magnitude difference of 1 = factor of 2.512 in brightness

### Stellar Luminosity and Temperature

**Stefan-Boltzmann Law:**
- L = 4πr²σT⁴
- Luminosity proportional to surface area and T⁴
- σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴

**Wien's Displacement Law:**
- λmax T = 2.90 × 10⁻³ m K
- Hotter stars → shorter peak wavelength → bluer
- Can determine surface temperature from spectrum

### Cosmology

**Doppler Effect:**
- Δλ/λ = v/c (for v << c)
- Redshift z = Δλ/λ
- Receding objects → redshifted
- Approaching objects → blueshifted

**Hubble's Law:**
- v = H₀d
- Galaxies recede at speed proportional to distance
- H₀ ≈ 70 km s⁻¹ Mpc⁻¹
- Implies expanding universe

**Age of Universe:**
- t ≈ 1/H₀ (assuming constant expansion rate)
- Currently estimated ~13.8 billion years

**Big Bang Evidence:**
1. Hubble expansion
2. Cosmic Microwave Background (CMB)
3. Abundance of light elements (H, He)

**Cosmic Microwave Background:**
- Remnant radiation from early universe
- Temperature ~2.7 K
- Nearly uniform (with tiny fluctuations)
- Redshifted from ~3000 K when universe became transparent
`;

const AQA_ALEVEL_PHYSICS_MEDICAL_PHYSICS_DETAIL = `
## Medical Physics Option (Section 3.10) Detailed Content

### Physics of the Eye

**Structure:**
- Cornea: Most refraction (~40 D)
- Lens: Variable focus (accommodation, ~15-25 D)
- Iris: Controls light entry
- Retina: Light detection (rods and cones)

**Defects of Vision:**
- Myopia (short-sight): Image forms before retina, corrected by diverging lens
- Hyperopia (long-sight): Image forms behind retina, corrected by converging lens
- Astigmatism: Non-spherical cornea, corrected by cylindrical lens
- Presbyopia: Age-related loss of accommodation

**Lens Power:**
- Power P = 1/f (in dioptres, D)
- f in metres
- Converging lens: positive power
- Diverging lens: negative power
- Powers add: P_total = P₁ + P₂

### Physics of the Ear

**Structure:**
- Outer ear: Collects sound
- Middle ear: Amplifies via ossicles (malleus, incus, stapes)
- Inner ear: Cochlea converts to nerve signals

**Frequency Response:**
- Human hearing: ~20 Hz to 20 kHz
- Most sensitive: ~1-4 kHz
- Hearing loss often starts with high frequencies

**Intensity and Loudness:**
- Intensity level IL = 10 log(I/I₀) in decibels (dB)
- I₀ = 10⁻¹² W m⁻² (threshold of hearing)
- 0 dB = threshold of hearing
- ~120 dB = threshold of pain
- Logarithmic scale matches ear's response

### X-Ray Production and Use

**X-Ray Tube:**
- Electrons accelerated across high voltage (~30-150 kV)
- Hit metal target (tungsten)
- Produce X-rays by bremsstrahlung and characteristic radiation

**X-Ray Spectrum:**
- Continuous spectrum from bremsstrahlung
- Maximum photon energy E_max = eV (accelerating voltage)
- Characteristic peaks from electron transitions in target atoms

**Attenuation:**
- I = I₀e^(-μx)
- μ = linear attenuation coefficient
- Half-value thickness: x½ = ln2/μ
- Depends on material and photon energy

**Contrast Enhancement:**
- Bone: high attenuation (appears white)
- Soft tissue: lower attenuation (appears grey)
- Barium or iodine contrast agents for soft tissue imaging

### CT Scanning

**Principle:**
- Multiple X-ray projections from different angles
- Computer reconstruction of 3D image
- Each voxel assigned attenuation value (Hounsfield units)

**Advantages:**
- 3D information
- Better soft tissue contrast than conventional X-ray
- Can distinguish overlapping structures

**Disadvantages:**
- Higher radiation dose than single X-ray
- More expensive
- Patient must remain still

### Ultrasound Imaging

**Principle:**
- High-frequency sound waves (1-15 MHz)
- Reflections at tissue boundaries
- Piezoelectric transducer generates and detects

**Acoustic Impedance:**
- Z = ρc (density × speed)
- Reflection coefficient depends on impedance mismatch
- More mismatch → stronger reflection

**A-Scan vs B-Scan:**
- A-scan: amplitude vs depth (1D, used for eye measurements)
- B-scan: 2D image from multiple A-scans
- Real-time B-scan for moving images

**Doppler Ultrasound:**
- Detect blood flow velocity
- Δf/f = 2v cos θ/c
- Used for cardiac and vascular imaging

**Advantages:**
- No ionizing radiation
- Real-time imaging
- Relatively inexpensive
- Can image soft tissue

### PET Scanning

**Principle:**
- Inject positron-emitting tracer (e.g., F-18 FDG)
- Positron annihilates with electron
- Two 511 keV gamma rays emitted at 180°
- Coincidence detection locates annihilation

**Applications:**
- Cancer detection (metabolically active tissue)
- Brain function studies
- Cardiac imaging

### MRI (Magnetic Resonance Imaging)

**Principle:**
- Strong magnetic field aligns hydrogen nuclei
- RF pulse tips nuclei
- Nuclei relax, emitting RF signal
- Signal depends on tissue properties

**Advantages:**
- No ionizing radiation
- Excellent soft tissue contrast
- Can image in any plane

**Disadvantages:**
- Expensive
- Slow
- Cannot use with some metal implants
- Claustrophobic for some patients
`;

const AQA_ALEVEL_PHYSICS_ENGINEERING_DETAIL = `
## Engineering Physics Option (Section 3.11) Detailed Content

### Rotational Dynamics

**Moment of Inertia:**
- I = Σmr² (for point masses)
- Depends on mass distribution about axis
- Common shapes:
  - Solid cylinder/disk: I = ½MR²
  - Solid sphere: I = ⅖MR²
  - Hollow sphere: I = ⅔MR²
  - Thin rod (center): I = 1/12 ML²
  - Thin rod (end): I = ⅓ML²

**Angular Equations of Motion:**
- ω = ω₀ + αt
- θ = ω₀t + ½αt²
- ω² = ω₀² + 2αθ

**Torque and Angular Acceleration:**
- τ = Iα (analogous to F = ma)
- τ = Fr (torque = force × perpendicular distance)

**Angular Momentum:**
- L = Iω
- Conservation: If τ = 0, L is constant
- Example: ice skater spinning faster when arms pulled in

**Rotational Kinetic Energy:**
- E = ½Iω²
- Rolling without slipping: v = ωr
- Total KE = ½mv² + ½Iω² (translational + rotational)

### Thermodynamics

**First Law:**
- ΔU = Q - W
- ΔU = change in internal energy
- Q = heat supplied to system
- W = work done by system

**Work Done by Gas:**
- W = pΔV (constant pressure)
- W = ∫p dV (general)
- Area under p-V curve

**Isothermal Process:**
- Constant temperature
- pV = constant
- ΔU = 0, so Q = W
- Slow process with good thermal contact

**Adiabatic Process:**
- No heat transfer (Q = 0)
- pV^γ = constant (γ = Cp/Cv)
- ΔU = -W
- Fast process or insulated system

**Isobaric Process:**
- Constant pressure
- W = pΔV
- ΔU = Q - pΔV

**Isochoric (Isovolumetric) Process:**
- Constant volume
- W = 0
- ΔU = Q

### Heat Engines

**Principle:**
- Convert heat to work
- Take in heat Qh from hot reservoir
- Reject heat Qc to cold reservoir
- Do work W = Qh - Qc

**Efficiency:**
- η = W/Qh = (Qh - Qc)/Qh = 1 - Qc/Qh
- Always less than 100%

**Carnot Efficiency:**
- Maximum possible efficiency for given temperatures
- η_max = 1 - Tc/Th
- All temperatures in Kelvin
- Carnot cycle: two isothermal, two adiabatic processes

**Second Law of Thermodynamics:**
- Heat cannot spontaneously flow from cold to hot
- No heat engine can be 100% efficient
- Entropy of isolated system tends to increase

### p-V Diagrams

**Reading p-V Diagrams:**
- Horizontal line: isobaric process
- Vertical line: isochoric process
- Hyperbola (pV = const): isothermal
- Steeper curve (pV^γ = const): adiabatic

**Work from p-V Diagram:**
- Work done BY gas = area under curve
- Clockwise cycle: net work done by gas (heat engine)
- Counter-clockwise: net work done on gas (refrigerator/heat pump)

### Refrigerators and Heat Pumps

**Coefficient of Performance (COP):**
- Refrigerator: COP = Qc/W (cooling effect per unit work)
- Heat pump: COP = Qh/W (heating effect per unit work)
- COP_heat pump = COP_refrigerator + 1

**Carnot COP:**
- Refrigerator: COP_max = Tc/(Th - Tc)
- Heat pump: COP_max = Th/(Th - Tc)
`;

const AQA_ALEVEL_PHYSICS_TURNING_POINTS_DETAIL = `
## Turning Points in Physics Option (Section 3.12) Detailed Content

### Discovery of the Electron

**Cathode Rays:**
- Produced in discharge tubes at low pressure
- Travel in straight lines
- Deflected by electric and magnetic fields
- Cause fluorescence

**Thomson's e/m Experiment (1897):**
- Balanced electric and magnetic forces on cathode rays
- Measured e/m ratio
- Found same value regardless of cathode material
- Concluded: universal particle (electron)

**Calculation:**
- Electric force: F = eE
- Magnetic force: F = Bev
- When balanced: eE = Bev → v = E/B
- Then use magnetic deflection alone: r = mv/Be
- e/m = E/B²r = 1.76 × 10¹¹ C/kg

### Millikan's Oil Drop Experiment (1909-1913)

**Method:**
- Charged oil drops between parallel plates
- Adjusted electric field to suspend drops
- At balance: qE = mg
- Measured charge q on many drops

**Key Finding:**
- Charge always multiple of e = 1.60 × 10⁻¹⁹ C
- Quantization of charge
- Combined with e/m → electron mass

### Wave-Particle Duality

**Photoelectric Effect (Einstein, 1905):**
- Light behaves as particles (photons)
- E = hf for each photon
- Explained threshold frequency and instant emission

**Compton Effect (1923):**
- X-ray scattering from electrons
- Wavelength shift depends on scattering angle
- Photon momentum p = h/λ
- Further evidence for particle nature of light

**Electron Diffraction (Davisson & Germer, 1927):**
- Electrons scattered from nickel crystal
- Diffraction pattern observed
- Confirmed de Broglie hypothesis λ = h/mv
- Matter has wave properties

### Special Relativity

**Einstein's Postulates (1905):**
1. Laws of physics same in all inertial reference frames
2. Speed of light c same in all inertial frames (independent of source motion)

**Time Dilation:**
- t = γt₀ where t₀ is proper time
- γ = 1/√(1 - v²/c²) (Lorentz factor)
- Moving clocks run slow
- Evidence: muon lifetime, atomic clocks on aircraft

**Length Contraction:**
- L = L₀/γ where L₀ is proper length
- Moving objects shortened in direction of motion

**Mass-Energy Equivalence:**
- E = mc² (rest energy)
- Total energy E = γm₀c²
- Relativistic momentum p = γm₀v
- E² = (pc)² + (m₀c²)²

**Evidence for Relativity:**
- Particle accelerators (energy-momentum relation)
- GPS satellite corrections
- Muon lifetime at high speeds
- Nuclear reactions (E = Δmc²)

### The Michelson-Morley Experiment (1887)

**Purpose:**
- Detect motion through the "ether"
- Expected difference in light speed parallel/perpendicular to Earth's motion

**Method:**
- Split light beam, send in perpendicular directions
- Recombine and observe interference

**Result:**
- No fringe shift detected
- Speed of light constant regardless of direction
- No evidence for ether
- Led eventually to special relativity
`;

// Standard prompt for A-Level Physics questions
export function getAQAALevelPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const difficultyGuide = {
    easy: 'AS standard, 2-4 marks, single concept, direct application',
    medium: 'Full A-Level, 4-6 marks, may combine concepts, multi-step reasoning',
    hard: 'Challenging A-Level, 6-8 marks, synoptic, unfamiliar context, extended analysis'
  };

  return `Generate an AQA A-Level Physics question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

${AQA_ALEVEL_PHYSICS_DATA_SHEET}

${AQA_ALEVEL_PHYSICS_RECALL}

Topic: ${topic.name}
Focus: ${focusArea}
Paper: ${topic.paperRestriction || 'Not specified'}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}

Requirements:
- Match AQA A-Level exam style and command words
- Use appropriate level of mathematical rigour
- Include realistic physics context
- Provide clear mark allocation
- Show all working in solution using correct formulas and constants from data sheet
- Include units in answers

Respond with JSON:
{
  "content": "Question text with parts labelled (a), (b), (c) etc if needed",
  "solution": "Complete worked solution with all steps",
  "marks": <total marks as number>,
  "markScheme": "Point-by-point mark allocation",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('physics')}`;
}

// Enhanced prompt for detailed questions
export function getAQAALevelPhysicsEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate a detailed AQA A-Level Physics question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

## Reference Data (USE FOR ACCURATE CALCULATIONS)
${AQA_ALEVEL_PHYSICS_DATA_SHEET}

${AQA_ALEVEL_PHYSICS_FORMULAE}

${AQA_ALEVEL_PHYSICS_RECALL}

## Worked Example Patterns
${AQA_ALEVEL_PHYSICS_WORKED_EXAMPLES}

Topic: ${topic.name}
Subtopic: ${focusArea}
Difficulty: ${difficulty}

Create a question that:
- Uses authentic AQA A-Level command words
- Tests deep understanding, not just recall
- Includes appropriate physics context or scenario
- Has clear, unambiguous wording
- Is appropriately challenging for ${difficulty} level
- Could appear on ${topic.paperRestriction || 'any paper'}
- Uses correct constants and formulas from the reference data above

Respond with JSON:
{
  "content": "Full question text",
  "solution": "Detailed worked solution with explanations",
  "marks": <total marks>,
  "markScheme": "Detailed mark scheme with alternative acceptable answers"
}`;
}

// Extended response (6-mark) questions
export function getAQAALevelPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate a 6-mark extended response AQA A-Level Physics question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

AQA 6-mark extended response questions:
- Require detailed, structured answers
- Test ability to construct scientific arguments
- May ask to explain, evaluate, discuss, or compare
- Marked using level descriptors (0, 1-2, 3-4, 5-6)

Level Descriptors:
- Level 3 (5-6 marks): Detailed, coherent, well-structured, accurate physics
- Level 2 (3-4 marks): Mostly accurate, some structure, may lack detail
- Level 1 (1-2 marks): Basic points, limited structure, some inaccuracies

Suitable question types:
- Explain a physics principle or phenomenon
- Compare and evaluate methods or theories
- Describe and explain an experimental procedure
- Discuss implications or applications

Respond with JSON:
{
  "content": "Question text (clearly indicating extended response)",
  "solution": "Model answer demonstrating Level 3 response",
  "marks": 6,
  "markScheme": "Level-based descriptors with indicative content"
}`;
}

// Multiple choice questions
export function getAQAALevelPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an AQA A-Level Physics multiple choice question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Multiple Choice Guidelines:
- One clearly correct answer
- Three plausible distractors based on common misconceptions
- Distractors should be wrong for clear physics reasons
- Question tests understanding, not memory
- Options similar in length and format

Respond with JSON:
{
  "content": "Question stem\\n\\nA [option]\\nB [option]\\nC [option]\\nD [option]",
  "solution": "Correct answer is [X] because [physics explanation]. [Why other options are wrong]",
  "marks": 1,
  "markScheme": "1 mark for correct answer: [X]"
}`;
}

// Calculation questions
export function getAQAALevelPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const equationsForTopic: Record<string, string[]> = {
    'alevel-physics-measurements': [
      'Percentage uncertainty calculations',
      'Combining uncertainties in calculations',
    ],
    'alevel-physics-particles': [
      'E = hf = hc/λ (photon energy)',
      'λ = h/p = h/mv (de Broglie)',
      'hf = φ + Ek(max) (photoelectric)',
      'E = mc² (mass-energy)',
    ],
    'alevel-physics-waves': [
      'v = fλ',
      'd sin θ = nλ (diffraction grating)',
      'w = λD/s (double slit)',
      'n = c/v (refractive index)',
    ],
    'alevel-physics-mechanics': [
      'SUVAT equations',
      'F = ma, p = mv',
      'W = Fs cos θ',
      'Ek = ½mv², Ep = mgh',
      'Young modulus E = σ/ε',
    ],
    'alevel-physics-electricity': [
      'V = IR, P = IV = I²R',
      'ρ = RA/L',
      'I = nAvq',
      'ε = I(R + r)',
    ],
    'alevel-physics-further-mechanics': [
      'a = v²/r = ω²r',
      'F = mv²/r = mω²r',
      'a = -ω²x',
      'T = 2π√(m/k), T = 2π√(L/g)',
    ],
    'alevel-physics-thermal': [
      'pV = nRT = NkT',
      'pV = ⅓Nm<c²>',
      '½m<c²> = 3/2 kT',
      'E = mcΔθ, E = mL',
    ],
    'alevel-physics-fields': [
      'F = GMm/r², g = GM/r²',
      'F = kQ₁Q₂/r², E = kQ/r²',
      'C = Q/V, E = ½CV²',
      'Q = Q₀e^(-t/RC)',
      'ε = -NdΦ/dt',
    ],
    'alevel-physics-nuclear': [
      'N = N₀e^(-λt), A = λN',
      't½ = ln2/λ',
      'E = mc²',
      'r = r₀A^(1/3)',
    ],
  };

  const relevantEquations = equationsForTopic[topic.id] || ['Use appropriate equation from data sheet'];

  return `Generate an AQA A-Level Physics calculation question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Relevant Equations:
${relevantEquations.join('\n')}

Calculation Requirements:
- Provide all necessary data with appropriate precision
- Use realistic physics values and contexts
- ${difficulty === 'easy' ? 'Single-step calculation, direct substitution' : difficulty === 'medium' ? 'Multi-step calculation, may need rearrangement' : 'Complex multi-step, may combine multiple equations'}
- Require proper units in answer
- Solution must show clear working

Mark Allocation for Calculations:
- 1 mark: Correct equation (if not given)
- 1 mark: Correct substitution with units
- 1 mark: Correct answer with units to appropriate sf

Respond with JSON:
{
  "content": "Calculation question with all data provided",
  "solution": "Step-by-step working:\\n1. State equation\\n2. Substitute values\\n3. Calculate with units",
  "marks": <3-6 marks>,
  "markScheme": "Equation [1], Substitution [1], Answer [1], etc."
}`;
}

// Explain/describe questions
export function getAQAALevelPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an AQA A-Level Physics explanation question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Explanation Question Types:
- "Explain why..." (give physics reasons)
- "Describe how..." (account of process/mechanism)
- "Explain how..." (reasons and process)
- "Discuss..." (present arguments, evaluate)

AQA Marking for Explanations:
- Each valid physics point = 1 mark
- Points must be distinct and relevant
- Technical vocabulary expected
- Logical sequence required for processes

${difficulty === 'easy' ? 'Require 2-3 marks of explanation' : difficulty === 'medium' ? 'Require 3-4 marks of explanation' : 'Require 4-5 marks of detailed explanation with technical depth'}

Respond with JSON:
{
  "content": "Explain/Describe question",
  "solution": "Full explanation with all marking points",
  "marks": <2-5>,
  "markScheme": "Point 1 [1]\\nPoint 2 [1]\\netc."
}`;
}

// Graph interpretation questions
export function getAQAALevelPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const graphTypes: Record<string, string[]> = {
    'alevel-physics-mechanics': ['s-t graphs', 'v-t graphs', 'Force-extension', 'Stress-strain'],
    'alevel-physics-electricity': ['I-V characteristics', 'Resistance vs temperature', 'EMF determination'],
    'alevel-physics-further-mechanics': ['SHM displacement-time', 'Energy-displacement', 'Resonance curves'],
    'alevel-physics-thermal': ['p-V diagrams', 'Heating curves', 'Maxwell-Boltzmann'],
    'alevel-physics-fields': ['Field strength vs distance', 'Potential vs distance', 'Capacitor discharge'],
    'alevel-physics-nuclear': ['Decay curves', 'Activity-time', 'Binding energy curve'],
  };

  const relevantGraphs = graphTypes[topic.id] || ['Appropriate graph for topic'];

  return `Generate an AQA A-Level Physics graph question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Graph Types for This Topic:
${relevantGraphs.join(', ')}

Graph Question Skills:
- Reading values from graphs accurately
- Calculating gradients (with uncertainty if required)
- Finding areas under curves
- Identifying and explaining features
- Drawing best fit lines and curves
- Interpreting physical meaning of graph features

Question should include:
- Clear graph description or data table
- Specific questions about the graph
- ${difficulty === 'hard' ? 'Analysis of gradient/area significance, uncertainty in gradient' : 'Key features and interpretation'}

Respond with JSON:
{
  "content": "Graph description/data followed by questions",
  "solution": "How to analyse the graph with answers",
  "marks": <3-6>,
  "markScheme": "Reading [1], Calculation [1-2], Interpretation [1-2]"
}`;
}

// Compare/contrast questions
export function getAQAALevelPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const compareTopics: Record<string, string[]> = {
    'alevel-physics-particles': ['Hadrons vs leptons', 'Strong vs weak force', 'Particle vs antiparticle'],
    'alevel-physics-waves': ['Progressive vs stationary', 'Interference vs diffraction', 'Single slit vs grating'],
    'alevel-physics-mechanics': ['Elastic vs inelastic', 'Scalars vs vectors', 'Stress vs strain'],
    'alevel-physics-further-mechanics': ['Free vs forced oscillations', 'Light vs heavy damping', 'SHM vs circular'],
    'alevel-physics-fields': ['Gravitational vs electric fields', 'Series vs parallel capacitors', 'Motor vs generator'],
    'alevel-physics-nuclear': ['Alpha vs beta vs gamma', 'Fission vs fusion', 'Activity vs count rate'],
  };

  const relevantComparisons = compareTopics[topic.id] || ['Compare relevant physics concepts'];

  return `Generate an AQA A-Level Physics comparison question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Comparison Opportunities:
${relevantComparisons.join(', ')}

Comparison Guidelines:
- Use "Compare", "Compare and contrast", or specific comparison
- Require at least one similarity AND one difference for full marks
- Points should be paired/linked
- Technical physics terminology required

${difficulty === 'easy' ? '2-3 marks: basic comparison' : difficulty === 'medium' ? '3-4 marks: detailed comparison' : '4-6 marks: comprehensive comparison with physics explanations'}

Respond with JSON:
{
  "content": "Compare question",
  "solution": "Structured comparison with similarities and differences",
  "marks": <2-6>,
  "markScheme": "Similarity [1], Difference 1 [1], etc."
}`;
}

// Practical/experimental questions
export function getAQAALevelPhysicsPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an AQA A-Level Physics practical/experimental question.
${AQA_ALEVEL_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Practical Skills Assessed:
- Independent and dependent variables
- Control variables
- Accurate measurement techniques
- Data collection and recording
- Graphical analysis
- Uncertainty and error analysis
- Drawing conclusions from data

Question Types:
- Describe an experimental method
- Analyse given experimental data
- Evaluate experimental procedures
- Suggest improvements to methods
- Calculate uncertainties from data

Respond with JSON:
{
  "content": "Practical/experimental question",
  "solution": "Complete answer addressing all practical skills",
  "marks": <3-6>,
  "markScheme": "Method [1-2], Analysis [1-2], Evaluation [1-2]"
}`;
}
