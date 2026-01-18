import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getMarkRangeForDifficulty, getDiagramDocsForSubject } from './prompts-common';

/**
 * Edexcel GCSE Physics (1PH0) Question Generation Prompts.
 * Based on analysis of Edexcel past papers and mark schemes.
 *
 * Sources:
 * - https://qualifications.pearson.com/en/qualifications/edexcel-gcses/physics-2016.html
 * - https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-physics-spec.pdf
 *
 * Key Edexcel characteristics:
 * - 15 topics across 2 papers (Topics 1-7 on Paper 1, Topics 1 & 8-15 on Paper 2)
 * - Topic 1 (Key Concepts) assessed on BOTH papers
 * - 8 Core Practicals (mandatory)
 * - Equation sheet provided in exams
 * - Mix of multiple choice, short answer, calculations, and extended response
 * - Math-heavy style with emphasis on mathematical rigour
 */

// ============================================================================
// EDEXCEL GCSE PHYSICS ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const EDEXCEL_PHYSICS_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Physics Assessment Objectives

### AO1: Knowledge and Understanding (~40%)
Demonstrate knowledge and understanding of:
- Scientific ideas
- Scientific techniques and procedures

**AO1 Question Characteristics:**
- "State", "Name", "Define", "Give", "Identify" commands
- Recall of facts, definitions, equations
- Recognising scientific terms and apparatus
- Describing standard procedures

### AO2: Application (~40%)
Apply knowledge and understanding of:
- Scientific ideas
- Scientific enquiry, techniques and procedures

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Explain", "Describe" commands
- Using equations with given data
- Applying concepts to new contexts
- Planning and designing investigations
- Analysing experimental data

### AO3: Analysis and Evaluation (~20%)
Analyse information and ideas to:
- Interpret and evaluate
- Make judgements and draw conclusions
- Develop and improve experimental procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Compare", "Discuss" commands
- Drawing conclusions from graphs and data
- Identifying limitations and sources of error
- Suggesting improvements to methods
- Critically evaluating claims

### Weighting by Paper
| Paper | Content | Total |
|-------|---------|-------|
| Paper 1 | Topics 1-7 | 100 marks (50%) |
| Paper 2 | Topics 1, 8-15 | 100 marks (50%) |
| **Overall** | | **200 marks** |

### Mathematical Skills
At least 30% of marks require mathematical skills at a level equivalent to Key Stage 3.

### Practical Skills
At least 15% of marks draw on knowledge of practical work.
`;

// ============================================================================
// EDEXCEL GCSE PHYSICS CORE PRACTICALS (8 Total)
// ============================================================================

const EDEXCEL_PHYSICS_CORE_PRACTICALS = `
## Edexcel GCSE Physics Core Practicals (8)

Edexcel has 8 mandatory core practicals. These MUST be completed by all students.
Centres must submit a Practical Science Statement confirming completion.

### Core Practical 1: Investigate Force, Mass and Acceleration
**Topic 2: Motion and Forces**
- Vary mass on a trolley, measure acceleration
- Or vary force (masses over pulley), measure acceleration
- Use light gates or ticker tape
- Verify F = ma relationship
- Control variables: surface, release method

### Core Practical 2: Investigate Circuits (Current-Voltage)
**Topic 11: Electricity and Circuits**
- Investigate I-V characteristics of resistor, lamp, diode
- Use variable resistor or variable power supply
- Plot current against voltage graphs
- Resistor: straight line (constant resistance)
- Lamp: curve (resistance increases when hot)
- Diode: only conducts in one direction

### Core Practical 3: Waves in a Ripple Tank
**Topic 4: Waves**
- Measure frequency, wavelength and speed of water waves
- Use ripple tank with motor
- Measure wavelength using ruler/stroboscope
- Use v = fλ to calculate wave speed
- Control: depth of water, frequency of motor

### Core Practical 4: Investigate Radiation and Absorption
**Topic 5: Light and the Electromagnetic Spectrum**
- Compare IR radiation absorbed/emitted by different surfaces
- Use Leslie cube (black, white, shiny surfaces)
- Measure temperature change over time
- Or use IR detector to measure radiation emitted
- Black surfaces absorb and emit best

### Core Practical 5: Investigate Density
**Topic 14: Particle Model**
- Determine density of regular and irregular solids
- Regular: measure dimensions, calculate volume
- Irregular: displacement method (measuring cylinder)
- Use ρ = m/V
- Liquids: mass on balance, volume in measuring cylinder

### Core Practical 6: Investigate Spring Extension (Hooke's Law)
**Topic 15: Forces and Matter**
- Investigate force-extension relationship for a spring
- Add masses, measure extension (not total length)
- Plot force-extension graph
- Calculate spring constant: k = F/x (gradient)
- Identify limit of proportionality

### Core Practical 7: Investigate Insulation
**Topic 3: Conservation of Energy**
- Investigate effectiveness of thermal insulators
- Compare temperature drop over time with different materials
- Control: volume of water, starting temp, container type
- Variables: type of insulation material
- Use thermometer to measure temperature at intervals

### Core Practical 8: Refraction in Glass Blocks
**Topic 5: Light and the Electromagnetic Spectrum**
- Investigate refraction of light through rectangular glass block
- Use ray box to create narrow beam
- Mark incident and emergent rays
- Measure angles of incidence and refraction
- Show that light bends towards normal when entering denser medium
`;

// ============================================================================
// EDEXCEL GCSE PHYSICS COMMAND WORDS
// ============================================================================

const EDEXCEL_PHYSICS_COMMAND_WORDS = `
## Edexcel GCSE Physics Command Words

### Calculation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Calculate** | Use numbers to work out an answer; show working | 2-4 |
| **Determine** | Use data/calculation/graph to find answer | 2-3 |
| **Work out** | Perform a calculation showing method | 2-3 |
| **Estimate** | Make an approximate calculation | 1-2 |
| **Show that** | Prove a given answer using calculation | 2-3 |

### Knowledge Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **State** | Give a brief answer, no explanation | 1 |
| **Give** | Produce an answer from recall | 1 |
| **Name/Identify** | Use a recognised scientific term | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Write** | Provide an equation or formula | 1 |
| **Complete** | Fill in missing information | 1-2 |

### Description/Explanation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Describe** | Give an account of what something is/happens | 2-3 |
| **Explain** | Give reasons using scientific knowledge | 2-4 |
| **Suggest** | Apply knowledge to unfamiliar context | 2-3 |
| **Compare** | Identify similarities AND differences | 2-3 |
| **Outline** | Give a brief summary | 2 |

### Analysis/Evaluation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Analyse** | Examine data to identify patterns/trends | 2-3 |
| **Evaluate** | Judge advantages and disadvantages | 4-6 |
| **Discuss** | Consider different aspects and reach conclusion | 4-6 |
| **Justify** | Give reasons using evidence | 2-3 |
| **Assess** | Consider and make judgements | 3-4 |

### Practical Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Plan/Design** | Describe how to carry out investigation | 3-6 |
| **Draw** | Produce accurate diagram | 2-3 |
| **Sketch** | Draw showing main features (approx) | 1-2 |
| **Label** | Add names to diagram | 1-2 |
| **Plot** | Mark points accurately on graph | 2 |
`;

// ============================================================================
// EDEXCEL VS AQA KEY DIFFERENCES
// ============================================================================

const EDEXCEL_VS_AQA_DIFFERENCES = `
## Edexcel GCSE Physics: Key Differences from AQA

### Paper Structure
| Aspect | Edexcel | AQA |
|--------|---------|-----|
| Papers | 2 papers | 2 papers |
| Topics per paper | P1: Topics 1-7, P2: Topics 1,8-15 | P1: Topics 1-4, P2: Topics 5-7 |
| Shared topic | Topic 1 on BOTH papers | None |
| Core practicals | 8 | 10 |

### Question Style
- **Edexcel**: More math-heavy, structured questions, emphasis on mathematical rigour
- **AQA**: More practical focus, interpretive questions, flexible mark schemes
- **Edexcel**: Considered more straightforward/predictable
- **AQA**: Questions may require more critical thinking

### Practical Time
AQA students reportedly spend 20% more time on practical experiments than Edexcel students.

### Equations
The physics equations are set by the DfE and are the same for all boards.
`;

// ============================================================================
// COMPLETE EDEXCEL GCSE PHYSICS REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const EDEXCEL_PHYSICS_EQUATION_SHEET = `
## Edexcel GCSE Physics Equation Sheet (PROVIDED IN EXAM)

### Equations You'll Be Given
| Equation | Variables | Units |
|----------|-----------|-------|
| v = s/t | velocity, displacement, time | m/s, m, s |
| a = (v-u)/t | acceleration, final/initial velocity, time | m/s², m/s, s |
| F = ma | force, mass, acceleration | N, kg, m/s² |
| a = F/m | acceleration, force, mass | m/s², N, kg |
| W = Fd | work done, force, distance | J, N, m |
| F = kx | force, spring constant, extension | N, N/m, m |
| P = E/t | power, energy, time | W, J, s |
| P = W/t | power, work, time | W, J, s |
| efficiency = (useful energy output / total energy input) × 100% | % |
| efficiency = (useful power output / total power input) × 100% | % |
| KE = ½mv² | kinetic energy, mass, speed | J, kg, m/s |
| GPE = mgh | gravitational PE, mass, g, height | J, kg, N/kg, m |
| ΔE = mcΔθ | energy change, mass, SHC, temp change | J, kg, J/kg°C, °C |
| E = mL | energy, mass, specific latent heat | J, kg, J/kg |
| ρ = m/V | density, mass, volume | kg/m³, kg, m³ |
| Q = It | charge, current, time | C, A, s |
| V = IR | voltage, current, resistance | V, A, Ω |
| P = IV | power, current, voltage | W, A, V |
| P = I²R | power, current, resistance | W, A, Ω |
| E = QV | energy, charge, voltage | J, C, V |
| E = IVt | energy, current, voltage, time | J, A, V, s |
| v = fλ | wave speed, frequency, wavelength | m/s, Hz, m |
| T = 1/f | period, frequency | s, Hz |
| p = mv | momentum, mass, velocity | kg m/s, kg, m/s |
| F = Δp/Δt | force, change in momentum, time | N, kg m/s, s |
| p = F/A | pressure, force, area | Pa, N, m² |
| p = hρg | pressure, height, density, g | Pa, m, kg/m³, N/kg |
| M = Fd | moment, force, perpendicular distance | Nm, N, m |
| v² = u² + 2as | final velocity, initial velocity, acceleration, displacement | m/s, m/s, m/s², m |
| magnification = image height / object height | (no units) |

### Equations You MUST RECALL (Not Given)
| Equation | Context |
|----------|---------|
| W = mg | Weight from mass |
| distance = speed × time | Speed calculations |
| P = E/t | Power definition |
| V = IR | Ohm's law |
| E = QV | Energy transferred by charge |
| v = fλ | Wave equation |
`;

const EDEXCEL_PHYSICS_CONSTANTS = `
## Physics Constants (MUST USE THESE EXACT VALUES)

| Constant | Value | When to Use |
|----------|-------|-------------|
| g (gravitational field strength) | **9.8 N/kg** (or 10 N/kg if told) | Weight, GPE calculations |
| g (acceleration due to gravity) | **9.8 m/s²** (or 10 m/s² if told) | Free fall calculations |
| Speed of light in vacuum | **3 × 10⁸ m/s** | EM waves, wave equation |
| Speed of sound in air | **330-340 m/s** | Sound wave calculations |
| Specific heat capacity of water | **4200 J/kg°C** | Heating water |
| Specific heat capacity of aluminium | **900 J/kg°C** | Heating aluminium |
| Specific heat capacity of copper | **385 J/kg°C** | Heating copper |
| Specific latent heat of fusion (water) | **334,000 J/kg** | Melting/freezing ice |
| Specific latent heat of vaporisation (water) | **2,260,000 J/kg** | Boiling water |
| Density of water | **1000 kg/m³** | Density calculations |
| Density of air | **1.2 kg/m³** | Density calculations |
| UK mains voltage | **230 V** | Domestic electricity |
| UK mains frequency | **50 Hz** | AC electricity |
| Typical kettle power | **2000-3000 W** | Power questions |
| Walking speed | **~1.5 m/s** | Typical speeds |
| Running speed | **~3 m/s** | Typical speeds |
| Cycling speed | **~6 m/s** | Typical speeds |
| Car on motorway | **~30 m/s (70 mph)** | Typical speeds |
| Sound in air | **~340 m/s** | Wave questions |

## Unit Conversions (CRITICAL)
| From | To | Multiply by |
|------|-----|-------------|
| km | m | × 1000 |
| cm | m | ÷ 100 |
| mm | m | ÷ 1000 |
| g | kg | ÷ 1000 |
| cm³ | m³ | ÷ 1,000,000 |
| dm³ | m³ | ÷ 1000 |
| kW | W | × 1000 |
| MW | W | × 1,000,000 |
| kWh | J | × 3,600,000 |
| hours | seconds | × 3600 |
| minutes | seconds | × 60 |
| km/h | m/s | ÷ 3.6 |
| m/s | km/h | × 3.6 |

## Standard Form Prefixes
| Prefix | Symbol | Power | Example |
|--------|--------|-------|---------|
| tera | T | 10¹² | 1 TJ = 10¹² J |
| giga | G | 10⁹ | 1 GW = 10⁹ W |
| mega | M | 10⁶ | 5 MW = 5,000,000 W |
| kilo | k | 10³ | 2 kW = 2000 W |
| milli | m | 10⁻³ | 3 mm = 0.003 m |
| micro | μ | 10⁻⁶ | 5 μs = 0.000005 s |
| nano | n | 10⁻⁹ | 400 nm = 4 × 10⁻⁷ m |
`;

const EDEXCEL_PHYSICS_WORKED_EXAMPLES = `
## Worked Examples (EDEXCEL STYLE - Use These Patterns)

### MOTION - Speed Calculation
**Q:** A cyclist travels 450 m in 30 s. Calculate their speed. [2]

**Working:**
- v = s/t
- v = 450 / 30
- **v = 15 m/s** ✓✓

---

### MOTION - Acceleration Calculation
**Q:** A car accelerates from rest to 20 m/s in 8 seconds. Calculate its acceleration. [3]

**Working:**
- a = (v - u) / t ✓
- a = (20 - 0) / 8 ✓
- **a = 2.5 m/s²** ✓

---

### MOTION - Using v² = u² + 2as
**Q:** A ball is dropped from rest and falls 20 m. Calculate its speed when it hits the ground. (g = 10 m/s²) [3]

**Working:**
- v² = u² + 2as ✓
- v² = 0² + 2 × 10 × 20
- v² = 400 ✓
- **v = 20 m/s** ✓

---

### FORCES - Newton's Second Law
**Q:** A 1500 kg car accelerates at 2 m/s². Calculate the resultant force on the car. [3]

**Working:**
- F = ma ✓
- F = 1500 × 2 ✓
- **F = 3000 N** ✓

---

### ENERGY - Kinetic Energy
**Q:** Calculate the kinetic energy of a 0.5 kg ball moving at 8 m/s. [3]

**Working:**
- KE = ½mv² ✓
- KE = ½ × 0.5 × 8² ✓
- KE = ½ × 0.5 × 64
- **KE = 16 J** ✓

---

### ENERGY - Gravitational Potential Energy
**Q:** A 2 kg book is lifted 1.5 m onto a shelf. Calculate the increase in GPE. (g = 10 N/kg) [3]

**Working:**
- GPE = mgh ✓
- GPE = 2 × 10 × 1.5 ✓
- **GPE = 30 J** ✓

---

### ENERGY - Specific Heat Capacity
**Q:** Calculate the energy needed to heat 0.5 kg of water from 20°C to 80°C. (SHC = 4200 J/kg°C) [4]

**Working:**
- Δθ = 80 - 20 = 60°C ✓
- E = mcΔθ ✓
- E = 0.5 × 4200 × 60 ✓
- **E = 126,000 J** (or 126 kJ) ✓

---

### ELECTRICITY - Ohm's Law
**Q:** A 6 Ω resistor has a current of 2 A flowing through it. Calculate the voltage across it. [2]

**Working:**
- V = IR ✓
- V = 2 × 6
- **V = 12 V** ✓

---

### ELECTRICITY - Power and Energy
**Q:** A 2 kW heater is used for 30 minutes. Calculate the energy transferred in kWh and in J. [4]

**Working:**
- Energy in kWh = power × time = 2 × 0.5 = 1 kWh ✓
- Energy in J = 1 × 3,600,000 = 3,600,000 J ✓
OR
- Convert: 30 min = 1800 s; 2 kW = 2000 W ✓
- E = Pt = 2000 × 1800 = 3,600,000 J ✓
- **E = 1 kWh or 3,600,000 J** ✓

---

### WAVES - Wave Equation
**Q:** A wave has frequency 250 Hz and wavelength 1.36 m. Calculate its speed. [3]

**Working:**
- v = fλ ✓
- v = 250 × 1.36 ✓
- **v = 340 m/s** ✓

---

### DENSITY
**Q:** A metal cube has sides of 5 cm and mass 250 g. Calculate its density in kg/m³. [4]

**Working:**
- Volume = 5³ = 125 cm³ = 0.000125 m³ ✓
- Mass = 250 g = 0.25 kg ✓
- ρ = m/V = 0.25 / 0.000125 ✓
- **ρ = 2000 kg/m³** ✓

---

### MOMENTUM (Higher)
**Q:** A 50 kg skater moving at 4 m/s catches a 5 kg ball moving at 10 m/s in the opposite direction. Calculate their combined velocity. [4]

**Working:**
- Take skater direction as positive ✓
- Initial momentum = (50 × 4) + (5 × -10) = 200 - 50 = 150 kg m/s ✓
- Final momentum = (50 + 5) × v = 150 ✓
- **v = 150 / 55 = 2.7 m/s** (in skater's original direction) ✓

---

### PRESSURE
**Q:** A box weighing 600 N has a base area of 0.3 m². Calculate the pressure it exerts. [2]

**Working:**
- p = F/A ✓
- p = 600 / 0.3
- **p = 2000 Pa** ✓

---

### PRESSURE IN LIQUIDS
**Q:** Calculate the pressure at a depth of 15 m in seawater. (ρ = 1025 kg/m³, g = 10 N/kg) [3]

**Working:**
- p = hρg ✓
- p = 15 × 1025 × 10 ✓
- **p = 153,750 Pa** (or 154 kPa) ✓
`;

const EDEXCEL_PHYSICS_DEFINITIONS = `
## Required Definitions (Edexcel Mark Scheme Wording)

### Motion
- **Speed**: The distance travelled per unit time
- **Velocity**: The rate of change of displacement (speed in a given direction)
- **Acceleration**: The rate of change of velocity
- **Distance**: The total length of path travelled (scalar)
- **Displacement**: The distance and direction from start to end point (vector)

### Forces
- **Force**: A push or pull that can change the motion or shape of an object
- **Resultant force**: The single force that has the same effect as all forces acting on an object
- **Weight**: The force acting on an object due to gravity
- **Mass**: The amount of matter in an object
- **Momentum**: The product of mass and velocity (p = mv)
- **Newton's First Law**: An object remains at rest or moves at constant velocity unless acted on by a resultant force
- **Newton's Second Law**: F = ma / The acceleration of an object is proportional to the resultant force and inversely proportional to mass
- **Newton's Third Law**: When two objects interact, they exert equal and opposite forces on each other

### Energy
- **Energy**: The capacity to do work
- **Work done**: The energy transferred when a force moves an object
- **Power**: The rate of energy transfer / the rate of doing work
- **Efficiency**: The proportion of energy usefully transferred
- **Kinetic energy**: Energy stored in a moving object
- **Gravitational potential energy**: Energy stored due to position in a gravitational field
- **Elastic potential energy**: Energy stored in a stretched or compressed object
- **Specific heat capacity**: The energy needed to raise the temperature of 1 kg of a substance by 1°C
- **Specific latent heat**: The energy needed to change the state of 1 kg of a substance without changing temperature

### Electricity
- **Current**: The rate of flow of charge
- **Voltage (potential difference)**: The energy transferred per unit charge
- **Resistance**: The opposition to current flow
- **Power**: The rate of energy transfer in a circuit
- **Ohm's Law**: The current through a resistor is proportional to the voltage across it (at constant temperature)

### Waves
- **Wavelength**: The distance from one point on a wave to the equivalent point on the next wave
- **Frequency**: The number of waves passing a point per second
- **Amplitude**: The maximum displacement from the equilibrium position
- **Period**: The time taken for one complete wave to pass a point
- **Transverse wave**: A wave where oscillations are perpendicular to the direction of energy transfer
- **Longitudinal wave**: A wave where oscillations are parallel to the direction of energy transfer

### Density and Pressure
- **Density**: Mass per unit volume
- **Pressure**: Force per unit area
`;

const EDEXCEL_PHYSICS_EXPLANATION_PATTERNS = `
## Explanation Patterns for Full Marks

### Explaining Energy Transfers
**Pattern**: [Initial store] → [Transfer process] → [Final store] → [Efficiency consideration]

Example: "Explain the energy transfers when a ball is thrown upwards"
✓ "Chemical energy store in muscles (1)"
✓ "Energy transferred mechanically by the force (1)"
✓ "Kinetic energy store of the ball (1)"
✓ "As ball rises, KE decreases and GPE increases (1)"
✓ "Some energy dissipated to thermal store of surroundings due to air resistance (1)"

### Explaining Forces and Motion
**Pattern**: [Identify forces] → [Resultant] → [Apply Newton's law] → [Describe motion]

Example: "Explain why a skydiver reaches terminal velocity"
✓ "Weight acts downwards (1)"
✓ "Air resistance acts upwards (1)"
✓ "Initially weight > air resistance, so resultant force downwards (1)"
✓ "Skydiver accelerates, so speed increases (1)"
✓ "Air resistance increases with speed (1)"
✓ "Eventually air resistance = weight, resultant force = 0 (1)"
✓ "By Newton's First Law, velocity becomes constant (1)"

### Explaining Electrical Concepts
**Pattern**: [Component behaviour] → [Effect on current/voltage] → [Energy consideration]

Example: "Explain why adding resistors in series increases total resistance"
✓ "Electrons must pass through all resistors (1)"
✓ "Each resistor opposes the flow of electrons (1)"
✓ "More resistors means more opposition to current (1)"
✓ "For same voltage, current is reduced (1)"
✓ "Total resistance = sum of individual resistances (1)"

### Explaining Wave Behaviour
**Pattern**: [Wave property] → [Change in medium] → [Effect on wave]

Example: "Explain why light refracts when entering glass"
✓ "Light travels slower in glass than air (1)"
✓ "Wavefronts bunch together as speed decreases (1)"
✓ "Wavelength decreases (1)"
✓ "Frequency stays constant (1)"
✓ "Light bends towards the normal (1)"
`;


const EDEXCEL_PHYSICS_PRINCIPLES = `# Edexcel GCSE Physics: Question Construction Principles

You are generating an original GCSE Physics question that could plausibly appear on a future Pearson Edexcel exam. The question must be genuinely original and exhibit authentic Edexcel Physics characteristics.

## Core Philosophy

Edexcel Physics questions emphasise understanding of:
- Key concepts that underpin all physics topics
- The phenomena of 'action at a distance' and fields
- Proportionality as an important aspect of physics models
- Physical laws expressed in mathematical form
- Working scientifically through core practicals

**Edexcel Style Characteristics:**
- MORE MATH-HEAVY than other boards - benefits aspiring engineers
- Consistent ramping of difficulty within questions (easy parts first, then harder)
- Questions tend to be clear and predictable in structure
- Heavy emphasis on equation manipulation and multi-step calculations
- Data tables and graph interpretation are common

## Command Words

**Calculation commands:**
- "Calculate" — Use numbers to work out an answer, showing working and units
- "Determine" — Use data or information to establish an answer
- "Estimate" — Give an approximate value or make a rough calculation
- "Measure" — Find a value using appropriate apparatus

**Knowledge commands:**
- "State" — Give a brief answer with no explanation
- "Give" — Produce an answer from recall or information provided
- "Name" / "Identify" — Use a recognised scientific term
- "Write" — Provide an equation or specific piece of information
- "Define" — Give the meaning of a term

**Understanding commands:**
- "Describe" — Give an account of something, saying what happens
- "Explain" — Give reasons for something using scientific knowledge
- "Suggest" — Apply knowledge to an unfamiliar situation
- "Compare" — Identify similarities AND differences
- "Outline" — Give a brief account or summary

**Analysis commands:**
- "Analyse" — Examine data to identify patterns or draw conclusions
- "Evaluate" — Judge the quality, importance, or value of something
- "Discuss" — Consider different aspects and reach a conclusion
- "Justify" — Give reasons for a conclusion

**Practical commands:**
- "Plan" / "Design" — Describe how to carry out an investigation
- "Draw" / "Sketch" — Produce a diagram or graph
- "Label" — Add names to a diagram
- "Plot" — Mark points on a graph

## Mark Scheme Conventions

**Mark types:**
- M marks: Method marks for correct approach
- A marks: Accuracy marks for correct answer (usually dependent on M)
- B marks: Independent marks for specific correct information
- C marks: Communication marks in extended response

**Common abbreviations:**
- cao = correct answer only
- ecf = error carried forward (credit correct method from wrong previous answer)
- owtte = or words to that effect
- AW = alternative wording acceptable

**Equation sheet:**
Students have access to an equation sheet in the exam. Questions may:
- Require selection of correct equation from the sheet
- Expect recall of equations NOT on the sheet
- Test rearrangement of equations

## Question Types

**1. Multiple Choice (1 mark)**
- Four options (A, B, C, D)
- Test knowledge, understanding, or simple application
- Distractors based on common misconceptions

**2. Short Answer (1-3 marks)**
- State/Name: 1 mark
- Describe/Explain: 2-3 marks
- Simple calculations: 2-3 marks

**3. Calculations (2-6 marks)**
- Select equation → Substitute → Rearrange if needed → Answer with unit
- Marks for method even if arithmetic is wrong

**4. Extended Open Response / EOR (6 marks)**
- Edexcel uses "Extended Open Response" terminology
- Students must construct "clear, sustained lines of reasoning"
- Should "articulate a response that is coherent in linking ideas/concepts"
- Levels of response marking:
  - Level 3 (5-6): Comprehensive, detailed, well-organised with clear reasoning
  - Level 2 (3-4): Good understanding, some gaps in reasoning or detail
  - Level 1 (1-2): Basic understanding, limited detail, weak logical structure
- Edexcel mark schemes can be STRICTER than AQA - specific wording often required

**5. Core Practical Questions (8 total)**
- Method, variables, apparatus, results, evaluation
- Link practical skills to theoretical understanding
- Edexcel Core Practicals:
  1. Investigating motion - acceleration, velocity, displacement
  2. Investigating the relationship between force, mass, and acceleration
  3. Investigating springs and Hooke's Law
  4. Investigating specific heat capacity
  5. Investigating resistance - including temperature effects
  6. Investigating I-V characteristics
  7. Investigating refraction in a rectangular glass block
  8. Investigating infrared radiation

## Tier Guidance

**Foundation (Grades 1-5):**
- Familiar contexts
- Single-step calculations
- Equations given or simple recall
- Scaffolded questions

**Higher (Grades 4-9):**
- More demanding contexts
- Multi-step calculations
- Complex rearrangement
- Less scaffolding
- Additional content marked (H)`;

const EDEXCEL_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-physics-key-concepts': `## Key Concepts of Physics (Topic 1)

**SI Units:**
- Base units: m, kg, s, A, K
- Derived units: N, J, W, Pa, Ω, V
- Converting between units is a common question type

**Prefixes:**
- nano (n) = 10⁻⁹, micro (μ) = 10⁻⁶, milli (m) = 10⁻³
- kilo (k) = 10³, mega (M) = 10⁶, giga (G) = 10⁹
- Conversion questions are common

**Standard Form:**
- Very large or very small numbers
- Converting between decimal and standard form

**Scalars and Vectors:**
- Scalars: magnitude only (speed, distance, mass, time, energy)
- Vectors: magnitude AND direction (velocity, displacement, force, acceleration, momentum)
- Vector addition and resolution (Higher)`,

  'edexcel-physics-motion-forces': `## Motion and Forces (Topic 2)

**Describing Motion:**
- Speed = distance/time
- Velocity includes direction
- Acceleration = change in velocity/time
- Typical speeds should be known

**Distance-Time Graphs:**
- Gradient = speed
- Horizontal line = stationary
- Curved line = changing speed

**Velocity-Time Graphs:**
- Gradient = acceleration
- Area under graph = distance
- Horizontal line = constant velocity

**Newton's Laws:**
1. Objects remain at rest or constant velocity unless acted on by resultant force
2. F = ma (acceleration proportional to force, inversely proportional to mass)
3. For every action there is an equal and opposite reaction

**Core Practical:**
- Investigate relationship between force, mass, and acceleration using trolleys

**Momentum (Higher):**
- p = mv
- Conservation in closed systems
- Force = rate of change of momentum

**Stopping Distance:**
- Thinking distance + braking distance
- Factors affecting each`,

  'edexcel-physics-conservation-energy': `## Conservation of Energy (Topic 3)

**Energy Stores:**
- Kinetic, gravitational potential, elastic, thermal
- Chemical, nuclear, electrostatic, magnetic

**Energy Transfers:**
- Energy transferred between stores
- Cannot be created or destroyed
- Dissipation to surroundings

**Calculations:**
- KE = ½mv² (on equation sheet)
- GPE = mgh (on equation sheet)
- Efficiency = useful output / total input

**Core Practical:**
- Investigate thermal insulation and radiation absorption

**Energy Resources:**
- Renewable vs non-renewable
- Advantages, disadvantages, environmental impact`,

  'edexcel-physics-waves': `## Waves (Topic 4)

**Wave Types:**
- Transverse: oscillations perpendicular to direction (light, water, EM)
- Longitudinal: oscillations parallel to direction (sound, P-waves)

**Wave Properties:**
- Amplitude, wavelength, frequency, period
- Wave equation: v = fλ (must recall)
- Period: T = 1/f

**Core Practical:**
- Investigate wave properties in solids and fluids

**Sound:**
- Longitudinal waves
- Human hearing range: 20 Hz - 20,000 Hz
- Ultrasound: above 20 kHz

**Seismic Waves:**
- P-waves (longitudinal) - travel through solids and liquids
- S-waves (transverse) - travel through solids only
- Evidence for Earth's structure`,

  'edexcel-physics-light-em-spectrum': `## Light and the EM Spectrum (Topic 5)

**Visible Light:**
- Part of EM spectrum
- Colours: ROYGBIV (red lowest frequency, violet highest)
- White light disperses through prism

**EM Spectrum:**
- Order: Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma
- All travel at 3 × 10⁸ m/s in vacuum
- All transverse waves

**Core Practical:**
- Investigate refraction in glass blocks

**Refraction:**
- Change of direction at boundary
- Due to change in wave speed
- Towards normal when slowing down

**Total Internal Reflection:**
- Occurs above critical angle
- Used in optical fibres

**Uses and Dangers:**
- Know uses of each EM wave type
- Ionising radiation (UV, X-ray, gamma) can damage cells`,

  'edexcel-physics-radioactivity': `## Radioactivity (Topic 6)

**Atomic Structure:**
- Protons (positive, mass 1), neutrons (neutral, mass 1), electrons (negative, tiny mass)
- Atomic number = protons; Mass number = protons + neutrons
- Isotopes = same protons, different neutrons

**Development of Atomic Model:**
- Dalton → Thomson (plum pudding) → Rutherford (nuclear) → Bohr (shells)
- Alpha scattering provided evidence for nuclear model

**Types of Radiation:**
- Alpha (α): 2 protons + 2 neutrons, most ionising, stopped by paper
- Beta (β): electron from nucleus, medium ionising, stopped by aluminium
- Gamma (γ): EM radiation, least ionising, reduced by lead

**Half-life:**
- Time for activity or number of nuclei to halve
- Calculate remaining activity after multiple half-lives
- Applications: dating, medical tracers

**Nuclear Reactions:**
- Fission: large nucleus splits (uranium-235, chain reaction)
- Fusion: small nuclei join (in stars, requires high temperature)`,

  'edexcel-physics-astronomy': `## Astronomy (Topic 7)

**Solar System:**
- Sun (star), planets, dwarf planets, moons, asteroids, comets
- Inner rocky planets, outer gas giants
- Orbital motion due to gravity

**Life Cycle of Stars:**
1. Nebula → Protostar → Main sequence
2. Sun-like: Red giant → Planetary nebula → White dwarf
3. Massive: Red supergiant → Supernova → Neutron star or Black hole

**Red-shift:**
- Light from distant galaxies shifted to longer wavelengths
- Evidence for expanding universe
- Greater distance = greater red-shift

**Big Bang:**
- Universe started from single point
- CMBR is evidence for Big Bang`,

  'edexcel-physics-energy-forces-work': `## Energy: Forces Doing Work (Topic 8)

**Work Done:**
- W = Fs (force × distance)
- Energy transferred when work is done
- Work done against friction → thermal energy

**Power:**
- P = W/t = E/t
- Rate of doing work / transferring energy
- P = Fv (Higher)

**Energy Transfers:**
- KE = ½mv²
- GPE = mgh
- Conservation between KE and GPE`,

  'edexcel-physics-forces-effects': `## Forces and their Effects (Topic 9)

**Moments:**
- Turning effect of a force
- M = Fd (moment = force × perpendicular distance)
- Principle of moments: clockwise = anticlockwise at equilibrium

**Levers and Gears:**
- Force multipliers
- Gear ratios affect speed and force`,

  'edexcel-physics-electricity-circuits': `## Electricity and Circuits (Topic 10)

**Basic Concepts:**
- Current = charge flow per second: Q = It
- Potential difference (voltage): V = IR
- Resistance: opposition to current flow

**Core Practicals:**
- Investigate I-V characteristics
- Investigate resistance of wire

**I-V Characteristics:**
- Resistor: straight line (ohmic)
- Filament lamp: curve (resistance increases with temperature)
- Diode: current in one direction only

**Series Circuits:**
- Same current throughout
- Voltages add up
- Resistances add up

**Parallel Circuits:**
- Same voltage across branches
- Currents add up
- Total resistance less than smallest

**Power and Energy:**
- P = IV, P = I²R, P = V²/R
- E = Pt, E = QV

**Mains Electricity:**
- UK: 230V, 50Hz AC
- Live (brown), neutral (blue), earth (green/yellow)`,

  'edexcel-physics-static-electricity': `## Static Electricity (Topic 11)

**Charging:**
- Friction causes electron transfer
- Positive = lost electrons
- Negative = gained electrons

**Forces:**
- Like charges repel
- Unlike charges attract

**Electric Fields:**
- Region where charged object experiences force
- Field lines show direction

**Uses and Dangers:**
- Uses: precipitators, spray painting, photocopiers
- Dangers: sparks, fires, explosions`,

  'edexcel-physics-magnetism-motor-effect': `## Magnetism and the Motor Effect (Topic 12)

**Magnetic Fields:**
- Region where magnetic materials experience force
- Field lines: N to S, closer = stronger
- Earth has magnetic field

**Electromagnets:**
- Current creates magnetic field
- Right-hand grip rule
- Solenoid field pattern

**Motor Effect:**
- Current-carrying wire in magnetic field experiences force
- Fleming's left-hand rule: First = Field, seCond = Current, thuMb = Motion
- F = BIL (Higher)

**DC Motor:**
- Coil rotates in magnetic field
- Split-ring commutator reverses current`,

  'edexcel-physics-electromagnetic-induction': `## Electromagnetic Induction (Topic 13)

**Inducing Potential:**
- Moving magnet/wire induces voltage
- Factors: speed, field strength, number of turns

**Generators:**
- AC generator: slip rings, alternating output
- DC generator: split-ring commutator

**Transformers:**
- Change voltage using electromagnetic induction
- Step-up: more turns on secondary
- Step-down: fewer turns on secondary
- Vp/Vs = Np/Ns
- For 100% efficiency: VpIp = VsIs (Higher)

**National Grid:**
- High voltage transmission reduces power loss (P = I²R)`,

  'edexcel-physics-particle-model': `## Particle Model (Topic 14)

**States of Matter:**
- Solid: particles in fixed positions, vibrate
- Liquid: particles close but move randomly
- Gas: particles far apart, move fast randomly

**Density:**
- ρ = m/V
- Core Practical: determine density of regular and irregular solids

**Internal Energy:**
- Sum of kinetic and potential energy of particles
- Temperature relates to average kinetic energy

**Changes of State:**
- Melting, freezing, boiling, condensing, sublimation
- Mass conserved, energy needed/released

**Specific Heat Capacity:**
- E = mcΔθ (must recall)
- Energy to raise 1 kg by 1°C

**Specific Latent Heat:**
- E = mL (on equation sheet)
- No temperature change during state change

**Gas Pressure:**
- Due to particle collisions
- Higher temperature = faster particles = more pressure
- pV = constant at constant temperature (Higher)`,

  'edexcel-physics-forces-matter': `## Forces and Matter (Topic 15)

**Elasticity:**
- Elastic deformation: returns to original shape
- Plastic deformation: permanently deformed

**Hooke's Law:**
- F = ke (must recall)
- Linear up to limit of proportionality
- Spring constant = stiffness

**Core Practical:**
- Investigate force and extension of springs

**Elastic Potential Energy:**
- E = ½ke² (on equation sheet)

**Pressure in Fluids:**
- P = F/A
- P = hρg (pressure in liquids)
- Pressure increases with depth
- Atmospheric pressure decreases with altitude`,
};

/**
 * Compact prompt for fast Edexcel Physics question generation.
 */
export function getEdexcelPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Foundation (Grades 1-3): 1-2 marks. State/name, simple recall, basic calculations.'
    : difficulty === 'medium'
    ? 'Standard (Grades 4-5): 3-4 marks. Describe/explain, multi-step calculations, apply concepts.'
    : 'Higher (Grades 6-9): 5-6 marks. Extended response, complex calculations, evaluate/analyse.';

  const isCalculation = selectedSubtopic.toLowerCase().includes('calculation') ||
    selectedSubtopic.toLowerCase().includes('equation') ||
    selectedSubtopic.includes('=') ||
    selectedSubtopic.includes('E =') ||
    selectedSubtopic.includes('P =') ||
    selectedSubtopic.includes('V =');

  const questionTypeHint = isCalculation
    ? 'Generate a CALCULATION question. Include: equation selection, substitution, answer with correct unit.'
    : 'Generate an appropriate question type (describe, explain, calculate, or state as fits the subtopic).';

  return `Generate an Edexcel GCSE Physics question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
Marks: ${markRange.min}-${markRange.max}

${questionTypeHint}

Requirements:
- Original question (not a past paper copy)
- Real-world context where appropriate
- Correct physics terminology
- For calculations: equation, substitution, answer WITH UNIT
- Standard SI units
- Use \\n for newlines

## Mark Scheme Format (CRITICAL - MUST FOLLOW)
- ALWAYS use M1/A1/B1 notation - never Level-based or plain bullet points for short questions
- M1: Method mark (correct equation selected or approach)
- A1: Accuracy mark (correct calculation/answer) - typically follows M1
- B1: Independent mark (correct value stated without method)
- Calculation questions MUST have: M1 (equation) + A1 (substitution) + A1 (answer with unit)
- Multi-part: "(a) M1:", "(b) A1:" etc.

Edexcel-specific:
- Students have equation sheet access (state if equation needed is/isn't provided)
- Units required for numerical answers
- Topic 1 (Key Concepts) underpins all questions

Return this exact JSON structure (markScheme MUST use M1/A1/B1 format):
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution with units","markScheme":["M1: Selects correct equation","A1: Correct substitution","A1: Correct answer with unit"]}`;
}

/**
 * Enhanced prompt for high-quality Edexcel Physics question generation.
 */
export function getEdexcelPhysicsEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = difficulty === 'easy'
    ? `**Foundation (Grades 1-4):**
- 1-3 marks per question part
- Familiar contexts
- Single-step calculations
- State, name, or describe questions`
    : difficulty === 'medium'
    ? `**Standard (Grades 4-6):**
- 3-4 marks per question part
- Apply concepts to situations
- Multi-step calculations
- Explain with reasons
- Core practical questions`
    : `**Higher (Grades 6-9):**
- 5-6 marks extended response
- Evaluate or analyse
- Complex calculations
- Unfamiliar contexts
- Higher tier content (H)`;

  return `${EDEXCEL_PHYSICS_PRINCIPLES}

${EDEXCEL_PHYSICS_EQUATION_SHEET}

${EDEXCEL_PHYSICS_CONSTANTS}

${EDEXCEL_PHYSICS_DEFINITIONS}

${EDEXCEL_PHYSICS_WORKED_EXAMPLES}

${topicGuidance}

---

## Your Task

Generate a genuinely ORIGINAL Edexcel GCSE Physics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

## Critical Requirements

1. **ORIGINALITY:** Fresh question, not from past papers
2. **AUTHENTICITY:** Realistic physics context
3. **APPROPRIATE DIFFICULTY:** Cognitive demand matches marks
4. **COMPLETE MARK SCHEME:** Clear mark earning criteria
5. **CORRECT PHYSICS:** Use ONLY the constants and equations from the reference data above
6. **WORKING PATTERN:** Follow the exact working pattern shown in the worked examples

## Response Format (JSON)

{
  "content": "Question text with proper formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution with units",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('physics')}

Generate a genuinely original Edexcel Physics question now:`;
}

/**
 * 6-mark extended response prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = EDEXCEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `${EDEXCEL_PHYSICS_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate a 6-MARK EXTENDED RESPONSE question for Edexcel GCSE Physics.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## Extended Response Marking (Levels)

**Level 3 (5-6 marks):**
- Comprehensive, detailed response
- Logical structure throughout
- Correct scientific terminology
- All key points covered

**Level 2 (3-4 marks):**
- Good understanding, some gaps
- Most key points covered
- Generally correct terminology

**Level 1 (1-2 marks):**
- Basic understanding
- Limited detail
- Some relevant points

**Level 0 (0 marks):** No relevant content

## Response Format (JSON)

{
  "content": "Question text ending with [6 marks]",
  "marks": 6,
  "solution": "Model answer covering all indicative content",
  "markScheme": ["Level 3 (5-6 marks): description", "Level 2 (3-4 marks): description", "Level 1 (1-2 marks): description", "Indicative content:", "- Point 1", "- Point 2", "- Point 3", "- Point 4", "- Point 5", "- Point 6"]
}

Generate an original 6-mark Edexcel Physics extended response question now:`;
}

/**
 * Multiple choice question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const difficultyGuidance = difficulty === 'easy'
    ? 'Foundation level: Test basic recall'
    : difficulty === 'medium'
    ? 'Standard level: Requires application or reasoning'
    : 'Higher level: Requires deeper understanding or calculation';

  return `Generate an Edexcel GCSE Physics MULTIPLE CHOICE question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyGuidance}

## Requirements

1. Clear question stem
2. Four options: A, B, C, D (only ONE correct)
3. Distractors based on common misconceptions
4. All options plausible

Return this JSON structure:
{
  "content": "Question stem\\n\\nA. First option\\nB. Second option\\nC. Third option\\nD. Fourth option",
  "marks": 1,
  "solution": "Correct answer is [X] because [explanation]. Common errors: [explain distractors]",
  "markScheme": ["B1: [Correct letter] only"]
}

Generate an original multiple choice physics question now:`;
}

/**
 * Calculation question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Physics CALCULATION question. Return ONLY valid JSON.

${EDEXCEL_PHYSICS_EQUATION_SHEET}

${EDEXCEL_PHYSICS_CONSTANTS}

${EDEXCEL_PHYSICS_WORKED_EXAMPLES}

Topic: ${topic.name} - ${selectedSubtopic}
Marks: ${markRange.min}-${markRange.max}

## Structure

1. Context with given values and units
2. Clear question asking for specific quantity
3. State if equation is on equation sheet or must be recalled

## CRITICAL REQUIREMENTS

- Use ONLY the constants from the reference data above
- Follow the EXACT working pattern shown in the worked examples
- Include unit conversions where necessary
- Show every step of the calculation

## Mark allocation:
- M1: Correct equation selected/written
- A1: Correct substitution of values
- A1: Correct answer with correct unit

## Response Format (JSON)

{
  "content": "Context...\\n\\nCalculate the [quantity]. [X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step solution following worked example patterns",
  "markScheme": ["M1: Selects equation", "A1: Substitutes correctly", "A1: Answer with unit"]
}

Generate an original physics calculation question now:`;
}

/**
 * Explain question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel GCSE Physics EXPLAIN question. Return ONLY valid JSON.

${EDEXCEL_PHYSICS_DEFINITIONS}

${EDEXCEL_PHYSICS_EXPLANATION_PATTERNS}

Topic: ${topic.name} - ${selectedSubtopic}
Marks: 3-4

## Requirements

"Explain" = give REASONS using scientific knowledge.
Link cause and effect, not just description.

## Good Explanation Structure
1. State what happens
2. Give scientific reason WHY
3. Link to physics principles
4. Use correct terminology from the definitions above

## CRITICAL: Follow the explanation patterns above for full marks

{
  "content": "Context...\\n\\nExplain [phenomenon]. [3-4 marks]",
  "marks": <3 or 4>,
  "solution": "Full explanation following the patterns above with correct physics terminology",
  "markScheme": ["B1: Key point 1", "B1: Key point 2", "B1: Key point 3"]
}

Generate an original physics explain question now:`;
}

/**
 * Graph interpretation question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-6';

  return `Generate an Edexcel GCSE Physics GRAPH INTERPRETATION question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Marks: ${markRange}

## Graph Types in Physics
- Distance-time (gradient = speed)
- Velocity-time (gradient = acceleration, area = distance)
- Force-extension (gradient = spring constant)
- I-V characteristics
- Cooling curves, decay curves

## Question Types
- Reading values from graph
- Calculating gradient
- Calculating area under graph
- Describing/explaining shape
- Comparing regions

## Format

Describe the graph data in the question (axes, key points, shape).

{
  "content": "Figure 1 shows a [graph type].\\n\\n[Describe graph]\\n\\n(a) [Question] [X marks]\\n(b) [Question] [X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step solution",
  "markScheme": ["(a) M1: method", "(a) A1: answer", "(b) M1: method"]
}

Generate an original graph interpretation question now:`;
}

/**
 * Compare question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an Edexcel GCSE Physics COMPARE question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Marks: 3-4

## Requirements

Must identify BOTH similarities AND differences.
Writing only about one item = incomplete answer.

Comparative statements needed:
- "Both X and Y..."
- "X is... whereas Y is..."

{
  "content": "Compare [X] and [Y]. [3-4 marks]",
  "marks": <3 or 4>,
  "solution": "Comparison covering similarities and differences",
  "markScheme": ["B1: Similarity", "B1: Difference 1", "B1: Difference 2"]
}

Generate an original physics compare question now:`;
}

// ============================================================================
// EDEXCEL CORE PRACTICALS DATA
// ============================================================================

const EDEXCEL_CORE_PRACTICALS_DATA = `
## Edexcel GCSE Physics Core Practicals

### CP1: Investigating Motion (Topic 2)
**Aim:** Investigate the relationship between distance, velocity, and acceleration
**Equipment:**
- Dynamics trolley
- Ramp/runway
- Light gates or motion sensor
- Data logger
- Metre ruler
- Stopwatch (alternative)

**Method:**
1. Set up light gates at measured intervals along runway
2. Release trolley from top of ramp
3. Record time between light gates
4. Calculate velocity using v = s/t
5. Repeat for different ramp angles

**Key Variables:**
- Independent: Angle of ramp / starting position
- Dependent: Velocity / acceleration
- Control: Same trolley, same release position, same surface

**Key Points:**
- Gradient of distance-time graph = speed
- Gradient of velocity-time graph = acceleration
- Area under velocity-time graph = distance
- Friction affects results - use smooth runway

---

### CP2: Investigating Force, Mass and Acceleration (Topic 2)
**Aim:** Investigate the relationship F = ma
**Equipment:**
- Dynamics trolley
- Pulley and string
- Slotted masses
- Light gates
- Data logger
- Balance

**Method:**
1. Set up trolley connected to hanging masses via pulley
2. Keep total mass constant (transfer from trolley to hanger)
3. Release and measure acceleration
4. Repeat with different force values
5. Plot graph of F against a

**Key Variables:**
- Independent: Resultant force (hanging mass × g)
- Dependent: Acceleration
- Control: Total mass of system, friction

**Key Points:**
- F = ma rearranges to a = F/m
- Graph of F vs a should be straight line through origin
- Gradient = total mass of system
- Friction must be minimised (or compensated)

---

### CP3: Investigating Springs and Hooke's Law (Topic 15)
**Aim:** Investigate the extension of a spring
**Equipment:**
- Spring
- Clamp stand, boss, clamp
- Metre ruler
- Slotted masses and hanger
- Safety goggles

**Method:**
1. Hang spring vertically and measure original length
2. Add mass and measure new length
3. Calculate extension (new length - original length)
4. Repeat with increasing masses
5. Plot graph of force (weight) vs extension

**Key Variables:**
- Independent: Force (weight = mg)
- Dependent: Extension
- Control: Same spring, same starting position

**Key Points:**
- F = ke (Hooke's Law)
- Gradient of linear section = spring constant k
- Limit of proportionality - beyond this, Hooke's Law doesn't apply
- Elastic limit - beyond this, spring permanently deformed
- Safety: goggles in case spring breaks

---

### CP4: Investigating Specific Heat Capacity (Topic 14)
**Aim:** Determine the specific heat capacity of a material
**Equipment:**
- Metal block with two holes (heater + thermometer)
- Immersion heater
- Thermometer
- Joulemeter (or ammeter, voltmeter, stopwatch)
- Balance
- Insulation

**Method:**
1. Measure mass of block
2. Record initial temperature
3. Heat for measured time, recording energy input
4. Record final temperature
5. Calculate SHC using E = mcΔθ

**Key Variables:**
- Independent: Energy supplied
- Dependent: Temperature change
- Control: Same block, same insulation

**Key Points:**
- E = mcΔθ rearranges to c = E/(mΔθ)
- Energy can be measured with joulemeter or E = IVt
- Insulation reduces heat loss to surroundings
- Results often higher than actual due to heat loss
- Oil in thermometer hole improves thermal contact

---

### CP5: Investigating Resistance (Topic 10)
**Aim:** Investigate how the length of a wire affects its resistance
**Equipment:**
- Constantan wire (SWG 28 or 32)
- Metre ruler
- Crocodile clips
- Ammeter
- Voltmeter
- Power supply

**Method:**
1. Connect wire in series with ammeter and power supply
2. Connect voltmeter in parallel across wire
3. Measure current and voltage for different lengths
4. Calculate R = V/I for each length
5. Plot graph of R vs length

**Key Variables:**
- Independent: Length of wire
- Dependent: Resistance
- Control: Same wire material, same thickness, same temperature

**Key Points:**
- R = V/I (Ohm's Law)
- Resistance ∝ length (directly proportional)
- Graph should be straight line through origin
- Keep current low to prevent heating (affects resistance)
- Use safety resistor to limit current

---

### CP6: Investigating I-V Characteristics (Topic 10)
**Aim:** Investigate I-V characteristics of different components
**Equipment:**
- Resistor / filament lamp / diode
- Variable power supply OR variable resistor
- Ammeter
- Voltmeter
- Connecting wires

**Method:**
1. Set up circuit with component, ammeter in series
2. Connect voltmeter in parallel with component
3. Vary voltage and record current
4. Reverse connections for negative values
5. Plot I-V graph

**Key Variables:**
- Independent: Voltage (potential difference)
- Dependent: Current
- Control: Same component, same temperature (allow to cool between readings)

**Graphs and Results:**
- Resistor: Straight line through origin (constant resistance, ohmic)
- Filament lamp: Curve - resistance increases with temperature
- Diode: Only conducts in forward direction (above ~0.7V)

---

### CP7: Investigating Refraction (Topic 5)
**Aim:** Investigate refraction of light in a glass block
**Equipment:**
- Rectangular glass block
- Ray box (or laser)
- White paper
- Protractor
- Ruler
- Pencil

**Method:**
1. Place glass block on paper and draw outline
2. Shine ray at angle to the block
3. Mark incident ray and emergent ray
4. Draw normal at point of incidence
5. Measure angle of incidence and angle of refraction
6. Repeat for different angles

**Key Variables:**
- Independent: Angle of incidence
- Dependent: Angle of refraction
- Control: Same block, same wavelength of light

**Key Points:**
- Light bends towards normal when entering denser medium
- Light bends away from normal when leaving denser medium
- Emergent ray is parallel to incident ray (displaced)
- Can calculate refractive index: n = sin i / sin r
- Total internal reflection above critical angle

---

### CP8: Investigating Infrared Radiation (Topic 3)
**Aim:** Investigate emission and absorption of infrared radiation
**Equipment:**
- Leslie cube (or metal cans)
- Infrared detector
- Kettle/hot water
- Thermometer
- Stopwatch
- Metre ruler

**Method:**
1. Fill Leslie cube with hot water
2. Position infrared detector same distance from each face
3. Record detector reading for each surface (matt black, shiny black, matt white, shiny white)
4. Compare emission from different surfaces

**Key Variables:**
- Independent: Surface type (colour and texture)
- Dependent: Infrared radiation emitted/absorbed
- Control: Same temperature, same distance, same detector

**Key Points:**
- Matt black surfaces are best absorbers AND emitters
- Shiny white/silver surfaces are worst absorbers AND emitters
- Good absorbers are good emitters
- Dark matt surfaces emit more at same temperature
- Applications: radiators, solar panels, survival blankets
`;

// ============================================================================
// PRACTICAL-SPECIFIC PROMPTS
// ============================================================================

/**
 * Practical method question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsPracticalMethodPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Physics Core Practical METHOD question. Return ONLY valid JSON.

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
Marks: ${markRange.min}-${markRange.max}

## Question Types for Method
- Describe the method step by step
- Explain how to ensure accurate results
- State what measurements to take
- Describe how to set up the apparatus
- Plan an investigation

## Requirements
- Use correct scientific terminology
- Include specific equipment names
- Mention safety precautions where relevant
- Reference variables (IV, DV, CV)

{
  "content": "Question about method/procedure [X marks]",
  "marks": <marks>,
  "solution": "Model answer with clear steps",
  "markScheme": ["B1: Point 1", "B1: Point 2", "B1: Point 3"]
}

Generate an original Core Practical method question now:`;
}

/**
 * Practical variables question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsPracticalVariablesPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Physics Core Practical VARIABLES question. Return ONLY valid JSON.

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
Marks: ${markRange.min}-${markRange.max}

## Question Types for Variables
- Identify the independent variable
- Identify the dependent variable
- State control variables and how to control them
- Explain why variables must be controlled
- Suggest how to vary the independent variable

## Key Definitions
- Independent variable: What you deliberately change
- Dependent variable: What you measure
- Control variables: What you keep the same

{
  "content": "Question about variables [X marks]",
  "marks": <marks>,
  "solution": "Model answer identifying variables correctly",
  "markScheme": ["B1: Independent variable correct", "B1: Dependent variable correct", "B1: Control variable"]
}

Generate an original Core Practical variables question now:`;
}

/**
 * Practical results question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsPracticalResultsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Physics Core Practical RESULTS ANALYSIS question. Return ONLY valid JSON.

${EDEXCEL_CORE_PRACTICALS_DATA}

${EDEXCEL_PHYSICS_EQUATION_SHEET}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
Marks: ${markRange.min}-${markRange.max}

## Question Types for Results
- Calculate values from data (use equation)
- Describe the pattern shown in results
- Draw conclusions from data
- Explain what the gradient represents
- Plot or interpret graphs

## Requirements
- Provide realistic data values
- Include units in any calculations
- For calculations, show working

{
  "content": "Data/graph provided...\\n\\nAnalysis question [X marks]",
  "marks": <marks>,
  "solution": "Model answer with calculations and conclusions",
  "markScheme": ["M1: Correct method", "A1: Correct answer with unit", "B1: Conclusion"]
}

Generate an original Core Practical results question now:`;
}

/**
 * Practical errors question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsPracticalErrorsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Physics Core Practical ERRORS/EVALUATION question. Return ONLY valid JSON.

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
Marks: ${markRange.min}-${markRange.max}

## Question Types for Errors/Evaluation
- Identify sources of error
- Distinguish random vs systematic errors
- Explain how errors affect results
- Suggest improvements to method
- Evaluate the reliability of results

## Key Concepts
- Random errors: Vary unpredictably (reduce by repeating)
- Systematic errors: Consistent in one direction (need to change method)
- Accuracy: How close to true value
- Precision: How consistent repeat readings are
- Resolution: Smallest change an instrument can detect

{
  "content": "Context about experiment...\\n\\nEvaluation question [X marks]",
  "marks": <marks>,
  "solution": "Model answer identifying errors and suggesting improvements",
  "markScheme": ["B1: Error identified", "B1: Effect on results", "B1: Improvement suggested"]
}

Generate an original Core Practical errors/evaluation question now:`;
}

/**
 * Practical safety question prompt for Edexcel Physics.
 */
export function getEdexcelPhysicsPracticalSafetyPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `Generate an Edexcel GCSE Physics Core Practical SAFETY question. Return ONLY valid JSON.

${EDEXCEL_CORE_PRACTICALS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
Marks: 2-3

## Question Types for Safety
- Identify hazards in the investigation
- State precautions to take
- Explain why a precaution is necessary
- Describe safe handling of equipment

## Common Hazards in Physics Practicals
- Hot water/surfaces (burns)
- Heavy masses falling (injury)
- Electrical equipment near water
- Springs under tension breaking
- Bright lights (eye damage)
- Trips from trailing wires

{
  "content": "Question about safety [2-3 marks]",
  "marks": <2 or 3>,
  "solution": "Model answer with hazard and precaution",
  "markScheme": ["B1: Hazard identified", "B1: Precaution stated", "B1: Explanation of why"]
}

Generate an original Core Practical safety question now:`;
}
