// OCR Gateway GCSE Physics (J249) Question Generation Prompts
// Tailored to OCR Gateway specification style and assessment objectives
//
// Sources:
// - https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-physics-a-j249-from-2016/
// - https://www.ocr.org.uk/Images/234600-specification-accredited-gcse-gateway-science-suite-physics-a-j249.pdf

import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// GCSE Physics mark ranges based on OCR Gateway specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };    // Short answer/recall questions
    case 'medium':
      return { min: 4, max: 6 };    // Calculation and application questions
    case 'hard':
      return { min: 6, max: 9 };    // Extended response and multi-step calculations
  }
}

// ============================================================================
// OCR GATEWAY GCSE PHYSICS ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const OCR_PHYSICS_ASSESSMENT_OBJECTIVES = `
## OCR Gateway GCSE Physics Assessment Objectives

Assessment objectives are set by Ofqual and are the same across all GCSE Science specifications.

### AO1: Knowledge and Understanding (~40%)
Demonstrate knowledge and understanding of:
- Scientific ideas
- Scientific techniques and procedures

**AO1 Question Characteristics:**
- "State", "Name", "Define", "Give", "Recall" commands
- Factual recall of physics concepts
- Identifying apparatus and procedures
- Recalling equations and definitions

### AO2: Application (~40%)
Apply knowledge and understanding of:
- Scientific ideas
- Scientific enquiry, techniques and procedures

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Explain", "Describe" commands
- Using equations in calculations
- Applying concepts to new contexts
- Planning investigations
- Interpreting data and graphs

### AO3: Analysis and Evaluation (~20%)
Analyse information and ideas to:
- Interpret and evaluate
- Make judgements and draw conclusions
- Develop and improve experimental procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Justify", "Predict" commands
- Drawing conclusions from experimental data
- Identifying sources of error
- Suggesting improvements to methods
- Evaluating scientific claims

### Weighting by Paper
| Paper | Content | Time | Total |
|-------|---------|------|-------|
| J249/01 (Foundation) | P1-P8 Breadth | 1h 45m | 90 marks |
| J249/02 (Foundation) | P1-P8 Depth | 1h 45m | 90 marks |
| J249/03 (Higher) | P1-P8 Breadth | 1h 45m | 90 marks |
| J249/04 (Higher) | P1-P8 Depth | 1h 45m | 90 marks |

### Mathematical Skills
At least 30% of marks require mathematical skills at or above GCSE standard.

### Practical Skills
15% of marks draw on knowledge and understanding of practical activities.
Quality of extended response assessed in questions marked with (*).
`;

// ============================================================================
// OCR GATEWAY GCSE PHYSICS PRACTICAL ACTIVITIES
// ============================================================================

const OCR_PHYSICS_PRACTICAL_ACTIVITIES = `
## OCR Gateway GCSE Physics Practical Activities (PAGs)

OCR Gateway organises practicals into Practical Activity Groups (PAGs).
Topic P9 covers practical skills assessed across 15% of exam marks.

### PAG 1: Measuring Motion
- Measure distance and time for moving objects
- Calculate speed from distance-time data
- Use light gates or timing equipment
- Analyse motion using graphs

### PAG 2: Investigating Force and Acceleration
- Investigate relationship between force, mass and acceleration
- Use trolley on ramp with varying masses
- Light gates or ticker tape for timing
- Verify F = ma relationship

### PAG 3: Investigating Waves
- Measure wave speed in different media
- Ripple tank for water waves
- String/spring for waves in solids
- Use v = fλ equation

### PAG 4: Investigating Light
- Investigate reflection using ray box and mirror
- Investigate refraction through glass block
- Measure angles of incidence and refraction
- Verify laws of reflection

### PAG 5: Investigating Thermal Energy
- Investigate specific heat capacity
- Use electrical heater and thermometer
- Calculate SHC using E = mcΔθ
- Consider heat losses to surroundings

### PAG 6: Investigating Circuits
- Set up series and parallel circuits
- Measure current and voltage
- Investigate I-V characteristics
- Compare resistor, lamp, and diode

### PAG 7: Investigating Density
- Determine density of regular and irregular solids
- Use displacement method for irregular shapes
- Calculate density using ρ = m/V
- Compare densities of different materials

### PAG 8: Investigating Springs
- Investigate force-extension relationship
- Plot force vs extension graph
- Determine spring constant k
- Identify limit of proportionality
`;

// ============================================================================
// OCR GATEWAY GCSE PHYSICS COMMAND WORDS
// ============================================================================

const OCR_PHYSICS_COMMAND_WORDS = `
## OCR Gateway GCSE Physics Command Words

### Calculation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Calculate** | Use numbers to work out an answer | 2-4 |
| **Determine** | Use data/information to find answer | 2-3 |
| **Work out** | Perform a calculation | 2-3 |
| **Estimate** | Make an approximate calculation | 1-2 |
| **Show that** | Prove a given answer is correct | 2-3 |

### Knowledge Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **State** | Give a brief answer, no explanation | 1 |
| **Give** | Produce an answer from recall | 1 |
| **Name/Identify** | Use a recognised scientific term | 1 |
| **Define** | Give the meaning of a term | 1-2 |
| **Recall** | Remember from memory | 1 |
| **Write** | Provide an equation or statement | 1 |

### Description/Explanation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Describe** | Give an account of what something is | 2-3 |
| **Explain** | Give reasons using scientific knowledge | 2-4 |
| **Suggest** | Apply knowledge to unfamiliar context | 2-3 |
| **Compare** | Identify similarities AND differences | 2-3 |
| **Outline** | Give a brief summary | 2 |

### Analysis/Evaluation Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Analyse** | Examine data to identify patterns | 2-3 |
| **Evaluate** | Judge advantages and disadvantages | 4-6 |
| **Justify** | Give reasons using evidence | 2-3 |
| **Predict** | Use knowledge to suggest what will happen | 1-2 |
| **Discuss*** | Consider aspects and reach conclusion | 6 |

*Questions marked with asterisk (*) assess quality of extended response.

### Practical Commands
| Command | Definition | Marks |
|---------|-----------|-------|
| **Plan/Design** | Describe how to carry out investigation | 3-6 |
| **Draw** | Produce accurate diagram | 2-3 |
| **Sketch** | Draw showing main features | 1-2 |
| **Label** | Add names to diagram | 1-2 |
| **Plot** | Mark points on graph | 2 |
`;

// ============================================================================
// COMPLETE OCR GATEWAY GCSE PHYSICS REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const OCR_PHYSICS_EQUATION_SHEET = `
## OCR Gateway GCSE Physics Equation Sheet

### Equations PROVIDED in Exam (Physics Equation Sheet)
| Equation | Variables | Units |
|----------|-----------|-------|
| v = fλ | wave speed, frequency, wavelength | m/s, Hz, m |
| P = IV | power, current, voltage | W, A, V |
| P = I²R | power, current, resistance | W, A, Ω |
| E = Pt | energy, power, time | J, W, s |
| E = QV | energy, charge, voltage | J, C, V |
| V = IR | voltage, current, resistance | V, A, Ω |
| Q = It | charge, current, time | C, A, s |
| a = (v-u)/t | acceleration, velocities, time | m/s², m/s, s |
| v² = u² + 2as | velocities, acceleration, displacement | m/s, m/s², m |
| F = ma | force, mass, acceleration | N, kg, m/s² |
| W = Fd | work done, force, distance | J, N, m |
| Ek = ½mv² | kinetic energy, mass, speed | J, kg, m/s |
| Ep = mgh | gravitational PE, mass, g, height | J, kg, N/kg, m |
| E = mcΔθ | energy, mass, SHC, temp change | J, kg, J/kg°C, °C |
| E = mL | energy, mass, specific latent heat | J, kg, J/kg |
| p = mv | momentum, mass, velocity | kg m/s, kg, m/s |
| F = kx | force, spring constant, extension | N, N/m, m |
| M = Fd | moment, force, distance | Nm, N, m |
| p = hρg | pressure, height, density, g | Pa, m, kg/m³, N/kg |
| efficiency = (useful energy output / total energy input) × 100% | % |
| Vp/Vs = Np/Ns | primary/secondary voltage, turns | V, V, - |

### Equations You MUST RECALL (Not Provided)
| Equation | Context |
|----------|---------|
| ρ = m/V | Density (mass ÷ volume) |
| speed = distance/time | Average speed |
| W = mg | Weight from mass |
| T = 1/f | Period from frequency |
| E = ½kx² | Elastic potential energy |
`;

const OCR_PHYSICS_CONSTANTS = `
## Physics Constants (MUST USE THESE EXACT VALUES)

| Constant | Value | When to Use |
|----------|-------|-------------|
| g (gravitational field strength) | **9.8 N/kg** or **10 N/kg** if told | Weight, GPE calculations |
| g (acceleration due to gravity) | **9.8 m/s²** or **10 m/s²** if told | Free fall, motion |
| Speed of light in vacuum | **3 × 10⁸ m/s** | EM waves |
| Speed of sound in air | **340 m/s** | Sound calculations |
| Specific heat capacity of water | **4200 J/kg°C** | Heating water |
| Specific heat capacity of aluminium | **900 J/kg°C** | Heating metals |
| Specific latent heat of fusion (water) | **334,000 J/kg** | Melting ice |
| Specific latent heat of vaporisation (water) | **2,260,000 J/kg** | Boiling water |
| Density of water | **1000 kg/m³** | Density questions |
| UK mains voltage | **230 V** | Domestic electricity |
| UK mains frequency | **50 Hz** | AC electricity |

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
| kWh | J | × 3,600,000 |
| hours | seconds | × 3600 |
| minutes | seconds | × 60 |
| km/h | m/s | ÷ 3.6 |

## Standard Form Prefixes
| Prefix | Symbol | Power |
|--------|--------|-------|
| giga | G | 10⁹ |
| mega | M | 10⁶ |
| kilo | k | 10³ |
| milli | m | 10⁻³ |
| micro | μ | 10⁻⁶ |
| nano | n | 10⁻⁹ |
`;

const OCR_PHYSICS_WORKED_EXAMPLES = `
## Worked Examples (OCR Gateway Style)

### MOTION - Speed Calculation
**Q:** A car travels 240 m in 12 s. Calculate the speed. [2]

**Working:**
- speed = distance / time ✓
- speed = 240 / 12
- **speed = 20 m/s** ✓

---

### MOTION - Acceleration
**Q:** A cyclist accelerates from 5 m/s to 15 m/s in 4 seconds. Calculate the acceleration. [3]

**Working:**
- a = (v - u) / t ✓
- a = (15 - 5) / 4 ✓
- **a = 2.5 m/s²** ✓

---

### FORCES - F = ma
**Q:** A car of mass 1200 kg accelerates at 3 m/s². Calculate the resultant force. [3]

**Working:**
- F = ma ✓
- F = 1200 × 3 ✓
- **F = 3600 N** ✓

---

### ENERGY - Kinetic Energy
**Q:** A ball of mass 0.4 kg travels at 10 m/s. Calculate its kinetic energy. [3]

**Working:**
- Ek = ½mv² ✓
- Ek = ½ × 0.4 × 10² ✓
- Ek = ½ × 0.4 × 100
- **Ek = 20 J** ✓

---

### ENERGY - Gravitational Potential Energy
**Q:** A 3 kg box is lifted 2.5 m onto a shelf. Calculate the increase in GPE. (g = 10 N/kg) [3]

**Working:**
- Ep = mgh ✓
- Ep = 3 × 10 × 2.5 ✓
- **Ep = 75 J** ✓

---

### ENERGY - Specific Heat Capacity
**Q:** Calculate the energy needed to heat 2 kg of water from 15°C to 65°C. (SHC = 4200 J/kg°C) [4]

**Working:**
- Δθ = 65 - 15 = 50°C ✓
- E = mcΔθ ✓
- E = 2 × 4200 × 50 ✓
- **E = 420,000 J** (or 420 kJ) ✓

---

### ELECTRICITY - Ohm's Law
**Q:** A 12 Ω resistor has a current of 0.5 A. Calculate the voltage across it. [2]

**Working:**
- V = IR ✓
- V = 0.5 × 12
- **V = 6 V** ✓

---

### ELECTRICITY - Power
**Q:** A kettle uses 9200 J of energy in 4 seconds. Calculate its power. [2]

**Working:**
- P = E/t ✓
- P = 9200 / 4
- **P = 2300 W** ✓

---

### WAVES - Wave Equation
**Q:** A wave has frequency 400 Hz and wavelength 0.85 m. Calculate the wave speed. [3]

**Working:**
- v = fλ ✓
- v = 400 × 0.85 ✓
- **v = 340 m/s** ✓

---

### DENSITY
**Q:** A block has mass 540 g and volume 200 cm³. Calculate its density in kg/m³. [4]

**Working:**
- Convert: 540 g = 0.54 kg ✓
- Convert: 200 cm³ = 0.0002 m³ (or 200 × 10⁻⁶ m³) ✓
- ρ = m/V = 0.54 / 0.0002 ✓
- **ρ = 2700 kg/m³** ✓

---

### PRESSURE - Liquid Pressure (Higher)
**Q:** Calculate the pressure at a depth of 8 m in water. (ρ = 1000 kg/m³, g = 10 N/kg) [3]

**Working:**
- p = hρg ✓
- p = 8 × 1000 × 10 ✓
- **p = 80,000 Pa** (or 80 kPa) ✓

---

### MOMENTUM (Higher)
**Q:** A 60 kg skater moving at 3 m/s collides with a stationary 40 kg skater. They move off together. Calculate their velocity. [4]

**Working:**
- Total momentum before = 60 × 3 + 40 × 0 = 180 kg m/s ✓
- Total momentum after = (60 + 40) × v = 100v ✓
- Conservation: 100v = 180 ✓
- **v = 1.8 m/s** ✓

---

### TRANSFORMERS (Higher)
**Q:** A transformer has 500 turns on the primary and 50 turns on the secondary. The input voltage is 230 V. Calculate the output voltage. [3]

**Working:**
- Vp/Vs = Np/Ns ✓
- 230/Vs = 500/50 ✓
- Vs = 230 × 50/500
- **Vs = 23 V** ✓
`;

const OCR_PHYSICS_DEFINITIONS = `
## Required Definitions (OCR Mark Scheme Wording)

### Motion & Forces
- **Speed**: Distance travelled per unit time
- **Velocity**: Speed in a given direction (rate of change of displacement)
- **Acceleration**: Rate of change of velocity
- **Distance**: Total length of path travelled
- **Displacement**: Distance and direction from start to finish
- **Resultant force**: Single force with the same effect as all forces acting
- **Weight**: Force of gravity acting on a mass
- **Mass**: Amount of matter in an object
- **Momentum**: Product of mass and velocity (p = mv)
- **Newton's First Law**: Object at rest stays at rest / object moving continues at constant velocity, unless acted on by a resultant force
- **Newton's Second Law**: F = ma / acceleration is proportional to force and inversely proportional to mass
- **Newton's Third Law**: Every action has an equal and opposite reaction on a different object

### Energy
- **Work done**: Energy transferred when a force moves through a distance
- **Power**: Rate of energy transfer / rate of doing work
- **Efficiency**: Proportion of energy usefully transferred
- **Specific heat capacity**: Energy needed to raise temperature of 1 kg by 1°C
- **Specific latent heat**: Energy needed to change state of 1 kg without temperature change
- **Kinetic energy**: Energy stored in a moving object
- **Gravitational potential energy**: Energy stored due to position in a gravitational field

### Electricity
- **Current**: Rate of flow of charge
- **Potential difference (voltage)**: Energy transferred per unit charge
- **Resistance**: Opposition to current flow
- **Ohm's Law**: Current is proportional to voltage at constant temperature

### Waves
- **Wavelength**: Distance from one point on a wave to the same point on the next wave
- **Frequency**: Number of waves passing a point per second
- **Amplitude**: Maximum displacement from equilibrium
- **Transverse wave**: Oscillations perpendicular to direction of energy transfer
- **Longitudinal wave**: Oscillations parallel to direction of energy transfer

### Radioactivity
- **Half-life**: Time for activity or number of nuclei to halve
- **Contamination**: Radioactive material on or inside an object
- **Irradiation**: Object exposed to radiation from external source
`;

const OCR_PHYSICS_EXPLANATION_PATTERNS = `
## Explanation Patterns for Full Marks (OCR Style)

### Energy Transfers
**Pattern**: [Initial store] → [Pathway] → [Final store] → [Dissipation]

Example: "Explain the energy transfers when a ball is thrown upwards"
✓ Chemical energy in muscles transferred by force (working) (1)
✓ To kinetic energy store of the ball (1)
✓ KE decreases as ball rises, GPE increases (1)
✓ Some energy transferred to thermal store of surroundings (air resistance) (1)
✓ Energy is conserved - total energy constant (1)

### Terminal Velocity
**Pattern**: [Forces] → [Unbalanced] → [Accelerates] → [Balance] → [Constant velocity]

Example: "Explain how a skydiver reaches terminal velocity"
✓ Weight acts downwards due to gravity (1)
✓ Air resistance acts upwards (1)
✓ Initially weight > air resistance, so resultant force downwards (1)
✓ Skydiver accelerates, increasing speed (1)
✓ Air resistance increases as speed increases (1)
✓ Eventually weight = air resistance, resultant force = zero (1)
✓ By Newton's First Law, skydiver moves at constant velocity (1)

### Circuit Behaviour
**Pattern**: [Component property] → [Effect on current/voltage] → [Energy consideration]

Example: "Explain why adding resistors in series increases total resistance"
✓ Current must flow through all resistors in series (1)
✓ Each resistor opposes the flow of current (1)
✓ More resistors = more opposition to current (1)
✓ Total resistance = sum of individual resistances (1)

### Wave Behaviour
**Pattern**: [Property] → [Change] → [Result]

Example: "Explain why light refracts when entering glass"
✓ Light travels slower in glass than air (1)
✓ When light enters at an angle, one side slows down first (1)
✓ This causes the wavefront to change direction (1)
✓ Light bends towards the normal when slowing down (1)
✓ Frequency stays constant, wavelength decreases (1)
`;

// OCR Gateway Physics guiding principles
const OCR_PHYSICS_PRINCIPLES = `
OCR Gateway GCSE Physics Assessment Objectives:
- AO1: Demonstrate knowledge and understanding (40%)
- AO2: Apply knowledge to familiar and unfamiliar situations (40%)
- AO3: Analyse information and evaluate scientific evidence (20%)

OCR Gateway Command Words:
- Calculate: Use numbers to work out an answer
- Compare: Describe similarities and/or differences
- Describe: Give an account of features or characteristics
- Determine: Use given data to find an answer
- Evaluate: Review information and reach a conclusion
- Explain: Give reasons for or causes of
- Justify: Support a case with evidence
- Outline: Set out main characteristics
- State: Express in clear terms
- Suggest: Apply knowledge to new situations

OCR Gateway Mark Scheme Conventions:
- TOTAL MARKS: 180 (90 per paper) - LOWER than AQA/Edexcel (200)
- 1 mark per distinct point for explanation questions
- Method, substitution, and answer for calculations
- 6-mark questions marked with ASTERISK (*) - "Quality of extended response"
  - Level 3 (5-6 marks): "Well-developed line of reasoning which is clear and logically structured"
  - Level 2 (3-4 marks): "Line of reasoning is supported by some evidence"
  - Level 1 (1-2 marks): "Basic line of reasoning with limited evidence"
  - OCR emphasises LOGICAL STRUCTURE and REASONING over content lists
- Working must be shown for calculation questions
- Units required unless specified otherwise
- If multiple responses given, only FIRST response is marked
- Accept equivalent correct answers

OCR Paper Structure:
- Paper 1/3: Topics P1-P4 and P9 (Foundation/Higher)
- Paper 2/4: Topics P5-P8 and P9 (Foundation/Higher)
- P9 (Practical Skills) assessed on BOTH papers

OCR PAGs (Practical Activity Groups) - More flexible than other boards:
- PAG P1: Investigating motion (acceleration, speed)
- PAG P2: Investigating force and extension
- PAG P3: Investigating resistance
- PAG P4: Investigating I-V characteristics
- PAG P5: Investigating specific heat capacity
- PAG P6: Investigating waves (frequency, wavelength, speed)
- PAG P7: Investigating light (reflection, refraction)
- PAG P8: Investigating density
Note: PAGs are SUGGESTED activities - centres have flexibility in implementation

OCR Equation Sheet:
Some equations are provided in the exam (Physics Equation Sheet):
Given: wave speed = frequency × wavelength, power = current × voltage, etc.
Must be recalled: density = mass / volume, speed = distance / time, etc.
`;

// Topic-specific guidance for OCR Gateway Physics
const OCR_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-physics-p1-matter': `
Topic P1 Matter - Key Focus Areas:
- Particle model and state changes
- Specific heat capacity: E = mcΔθ (Required Practical)
- Specific latent heat: E = mL
- Density calculations with regular and irregular shapes
- Gas laws: pressure-temperature, Boyle's law
- Higher Tier: Liquid pressure p = hρg, upthrust
OCR often tests: energy calculations during state changes, interpreting heating curves
`,
  'ocr-physics-p2-forces': `
Topic P2 Forces - Key Focus Areas:
- Speed, velocity and acceleration calculations
- Distance-time and velocity-time graph interpretation
- Newton's three laws with real-world applications
- F = ma calculations
- Moments and levers: principle of moments
- Hooke's Law: F = kx (Required Practical)
- Higher Tier: momentum conservation, circular motion
OCR often tests: graph interpretation, forces in equilibrium, resultant forces
`,
  'ocr-physics-p3-electricity': `
Topic P3 Electricity - Key Focus Areas:
- Static electricity and electron transfer
- Circuit symbols and series/parallel circuits
- Ohm's Law: V = IR (Required Practical)
- I-V characteristics of components
- Power equations: P = IV, P = I²R, P = V²/R
- LDRs and thermistors
- Mains electricity safety
OCR often tests: circuit calculations, I-V graph interpretation, domestic electricity
`,
  'ocr-physics-p4-magnetism': `
Topic P4 Magnetism - Key Focus Areas:
- Magnetic field patterns (bar magnets, solenoids)
- Earth's magnetic field
- Electromagnets and factors affecting strength
- Higher Tier: Motor effect F = BIL
- Higher Tier: Fleming's left-hand rule
- Higher Tier: Electromagnetic induction
- Higher Tier: Transformers Vp/Vs = Np/Ns
OCR often tests: field line diagrams, motor/generator operation, transformer calculations
`,
  'ocr-physics-p5-waves': `
Topic P5 Waves - Key Focus Areas:
- Wave properties: amplitude, wavelength, frequency, period
- Wave equation: v = fλ (Required Practical)
- Transverse vs longitudinal waves
- EM spectrum: uses and hazards
- Reflection and refraction
- Lenses and ray diagrams
OCR often tests: wave calculations, EM spectrum applications, ray diagram construction
`,
  'ocr-physics-p6-radioactivity': `
Topic P6 Radioactivity - Key Focus Areas:
- Alpha, beta, gamma: properties and penetration
- Nuclear equations for decay
- Half-life calculations and graphs
- Background radiation
- Contamination vs irradiation
- Nuclear fission and fusion
OCR often tests: comparing radiation types, half-life calculations, medical uses
`,
  'ocr-physics-p7-energy': `
Topic P7 Energy - Key Focus Areas:
- Energy stores and transfers
- Conservation of energy
- Work done: W = Fd
- Kinetic energy: Ek = ½mv²
- GPE: Ep = mgh
- Power: P = E/t
- Efficiency calculations (Required Practical on insulation)
OCR often tests: energy transfer diagrams, efficiency calculations, domestic energy
`,
  'ocr-physics-p8-global': `
Topic P8 Global Challenges - Key Focus Areas:
- Stopping distances (thinking + braking)
- Vehicle safety features
- Energy resources comparison
- National Grid and transformers
- Solar system and satellites
- Red-shift and Big Bang evidence
- Life cycle of stars
OCR often tests: stopping distance factors, energy resource evaluation, stellar evolution
`,
};

// Standard prompt for OCR Physics questions
export function getOCRPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const difficultyGuide = {
    easy: 'Foundation tier style, 2-3 marks, single concept, straightforward application',
    medium: 'Foundation/Higher overlap, 3-4 marks, may combine concepts, some calculation',
    hard: 'Higher tier style, 4-6 marks, multi-step reasoning or calculation, unfamiliar context'
  };

  return `Generate an OCR Gateway GCSE Physics question.
${OCR_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty} - ${difficultyGuide[difficulty]}

Requirements:
- Match OCR Gateway exam style and command words
- Include realistic context where appropriate
- Provide clear mark allocation
- Show all working in solution for calculations
- Include units in answers

Respond with JSON:
{
  "content": "Question text with parts labelled (a), (b) etc if needed",
  "solution": "Complete worked solution",
  "marks": <total marks as number>,
  "markScheme": "Point-by-point mark allocation"
}`;
}

// Enhanced prompt for more detailed questions
export function getOCRPhysicsEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
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
- Explain with reasons`
    : `**Higher (Grades 6-9):**
- 5-6 marks extended response
- Evaluate or analyse
- Complex calculations
- Unfamiliar contexts
- Higher tier content`;

  return `Generate a detailed OCR Gateway GCSE Physics question.
${OCR_PHYSICS_PRINCIPLES}

${OCR_PHYSICS_EQUATION_SHEET}

${OCR_PHYSICS_CONSTANTS}

${OCR_PHYSICS_DEFINITIONS}

${OCR_PHYSICS_WORKED_EXAMPLES}

${topicGuidance}

---

## Your Task

Generate a genuinely ORIGINAL OCR Gateway GCSE Physics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${focusArea}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

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
  "markScheme": ["Point 1 [1]", "Point 2 [1]", "etc."],
  "diagram": <optional DiagramSpec - include when question has stimulus diagram shown WITH the question>,
  "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>
}

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('physics')}

Generate a genuinely original OCR Gateway Physics question now:`;
}

// Extended response (6-mark) questions
export function getOCRPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate a 6-mark extended response OCR Gateway GCSE Physics question.
${OCR_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}

OCR 6-mark questions (marked with *):
- Assess quality of extended response
- Require structured, coherent answers
- Test ability to link concepts
- May ask to explain, evaluate, or compare
- Marks awarded at levels (0, 1-2, 3-4, 5-6)

Level Descriptors:
- Level 3 (5-6 marks): Detailed, coherent, logically structured, accurate terminology
- Level 2 (3-4 marks): Some structure, mostly accurate, may lack detail
- Level 1 (1-2 marks): Basic points, limited structure, some errors

Question types suitable for 6 marks:
- Explain a process or phenomenon in detail
- Compare and evaluate options/methods
- Describe how to investigate something
- Analyse data and draw conclusions

Respond with JSON:
{
  "content": "*Question text (asterisk indicates extended response)",
  "solution": "Model answer demonstrating Level 3 response",
  "marks": 6,
  "markScheme": "Level-based mark scheme with indicative content"
}`;
}

// Multiple choice questions
export function getOCRPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an OCR Gateway GCSE Physics multiple choice question.
${OCR_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Multiple Choice Guidelines:
- One clearly correct answer
- Three plausible distractors
- Distractors should reflect common misconceptions
- Question should test understanding, not trick students
- Options should be similar in length and style

Respond with JSON:
{
  "content": "Question stem\\n\\nA. [option]\\nB. [option]\\nC. [option]\\nD. [option]",
  "solution": "Correct answer is [X] because [explanation]. [Explain why other options are wrong]",
  "marks": 1,
  "markScheme": "1 mark for correct answer: [X]"
}`;
}

// Calculation questions
export function getOCRPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR Gateway GCSE Physics CALCULATION question. Return ONLY valid JSON.

${OCR_PHYSICS_EQUATION_SHEET}

${OCR_PHYSICS_CONSTANTS}

${OCR_PHYSICS_WORKED_EXAMPLES}

${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## Calculation Question Requirements
- Provide all necessary data with realistic values
- Use appropriate significant figures
- ${difficulty === 'easy' ? 'Single step calculation' : difficulty === 'medium' ? 'Two-step calculation or rearrangement needed' : 'Multi-step calculation, may need multiple equations'}
- Require proper units in answer
- Solution must show clear working following the worked example patterns above

## CRITICAL REQUIREMENTS
- Use ONLY the constants from the reference data above
- Follow the EXACT working pattern shown in the worked examples
- Include unit conversions where necessary
- Show every step of the calculation

## Mark Allocation for Calculations
- 1 mark: Correct equation selected/written
- 1 mark: Correct substitution of values
- 1 mark: Correct answer with correct unit

## Response Format (JSON)

{
  "content": "Context...\\n\\nCalculate the [quantity]. [X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step solution following worked example patterns",
  "markScheme": ["Equation [1]", "Substitution [1]", "Answer with unit [1]"]
}

Generate an original OCR Gateway Physics calculation question now:`;
}

// Explain/describe questions
export function getOCRPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an OCR Gateway GCSE Physics EXPLAIN question. Return ONLY valid JSON.

${OCR_PHYSICS_DEFINITIONS}

${OCR_PHYSICS_EXPLANATION_PATTERNS}

${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}
Marks: ${difficulty === 'easy' ? '2' : difficulty === 'medium' ? '3-4' : '4-5'}

## Explanation Question Types
- "Explain why..." (give reasons)
- "Describe how..." (give an account)
- "Explain how..." (reasons and process)
- "Describe what happens when..." (sequence of events)

## OCR Marking for Explanations
- Each valid point = 1 mark
- Points must be distinct and relevant
- Scientific terminology expected at higher marks
- Logical sequence may be required

## CRITICAL: Follow the explanation patterns above for full marks

## Good Explanation Structure
1. State what happens
2. Give scientific reason WHY
3. Link to physics principles
4. Use correct terminology from the definitions above

{
  "content": "Context...\\n\\nExplain [phenomenon]. [X marks]",
  "marks": <marks>,
  "solution": "Full explanation following the patterns above with correct physics terminology",
  "markScheme": ["Point 1 [1]", "Point 2 [1]", "etc."]
}

Generate an original OCR Gateway Physics explain question now:`;
}

// Graph interpretation questions
export function getOCRPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const graphTypes: Record<string, string[]> = {
    'ocr-physics-p1-matter': ['Heating/cooling curves', 'Density comparison charts'],
    'ocr-physics-p2-forces': ['Distance-time graphs', 'Velocity-time graphs', 'Force-extension graphs'],
    'ocr-physics-p3-electricity': ['I-V characteristics', 'Resistance graphs'],
    'ocr-physics-p5-waves': ['Wave diagrams (amplitude, wavelength)', 'EM spectrum diagrams'],
    'ocr-physics-p6-radioactivity': ['Decay curves', 'Half-life graphs', 'Activity-time graphs'],
    'ocr-physics-p7-energy': ['Energy transfer diagrams', 'Efficiency comparisons'],
  };

  const relevantGraphs = graphTypes[topic.id] || ['Appropriate graph for topic'];

  return `Generate an OCR Gateway GCSE Physics graph interpretation question.
${OCR_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Graph Types for This Topic:
${relevantGraphs.join(', ')}

Graph Question Skills:
- Reading values from graphs
- Calculating gradients (rate of change)
- Finding areas under curves
- Identifying patterns and trends
- Describing graph shape and meaning
- Drawing best fit lines

Question should include:
- Clear graph description or data table
- Specific questions about the graph
- ${difficulty === 'hard' ? 'Multi-part questions including analysis' : 'Focused questions on key features'}

Respond with JSON:
{
  "content": "Graph description or data table, followed by questions",
  "solution": "How to read/interpret the graph with answers",
  "marks": <3-5>,
  "markScheme": "Reading [1], Calculation/interpretation [1-2], Explanation [1-2]"
}`;
}

// Compare/contrast questions
export function getOCRPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = OCR_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const focusArea = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const compareTopics: Record<string, string[]> = {
    'ocr-physics-p1-matter': ['States of matter', 'Heat capacity vs latent heat', 'Conduction in different materials'],
    'ocr-physics-p2-forces': ['Speed vs velocity', 'Mass vs weight', 'Contact vs non-contact forces'],
    'ocr-physics-p3-electricity': ['Series vs parallel', 'AC vs DC', 'Different circuit components'],
    'ocr-physics-p4-magnetism': ['Permanent vs induced magnets', 'Motors vs generators (HT)', 'Step-up vs step-down transformers (HT)'],
    'ocr-physics-p5-waves': ['Transverse vs longitudinal', 'Different EM wave types', 'Reflection vs refraction'],
    'ocr-physics-p6-radioactivity': ['Alpha vs beta vs gamma', 'Contamination vs irradiation', 'Fission vs fusion'],
    'ocr-physics-p7-energy': ['Different energy stores', 'Renewable vs non-renewable', 'Different insulation methods'],
    'ocr-physics-p8-global': ['Different energy resources', 'Orbital types', 'Different vehicle safety features'],
  };

  const relevantComparisons = compareTopics[topic.id] || ['Compare relevant concepts'];

  return `Generate an OCR Gateway GCSE Physics comparison question.
${OCR_PHYSICS_PRINCIPLES}
${topicGuidance}

Topic: ${topic.name}
Focus: ${focusArea}
Difficulty: ${difficulty}

Comparison Opportunities:
${relevantComparisons.join(', ')}

Comparison Question Guidelines:
- Use "Compare" or "Describe the similarities and differences"
- Expect at least one similarity AND one difference for full marks
- Points should be specific and paired
- Scientific terminology required for higher marks

${difficulty === 'easy' ? '2-3 marks: basic comparison' : difficulty === 'medium' ? '3-4 marks: detailed comparison' : '4-6 marks: comprehensive comparison with explanations'}

Respond with JSON:
{
  "content": "Compare question about ${focusArea}",
  "solution": "Structured comparison covering similarities and differences",
  "marks": <2-6>,
  "markScheme": "Similarity [1], Difference 1 [1], Difference 2 [1], etc."
}`;
}

// ============================================================================
// OCR GATEWAY PAGs (PRACTICAL ACTIVITY GROUPS) DATA
// ============================================================================

const OCR_PHYSICS_PAGS_DATA = `
## OCR Gateway GCSE Physics PAGs (Practical Activity Groups)

**Note:** OCR gives centres flexibility in how PAGs are implemented. The skills, not specific methods, are assessed.

### PAG P1: Investigating Motion (Topics P2, P7)
**Aim:** Investigate motion including acceleration and speed
**Equipment:**
- Light gates or motion sensors
- Data logger
- Dynamics trolley
- Ramp/runway
- Metre ruler
- Stopwatch (alternative method)

**Method:**
1. Set up light gates at measured intervals along runway
2. Release trolley from top of ramp
3. Record times through light gates
4. Calculate velocities and acceleration
5. Vary angle of ramp and repeat

**Key Variables:**
- Independent: Angle of ramp / starting position
- Dependent: Velocity / acceleration
- Control: Same trolley, same release position, friction

**Key Points:**
- Speed = distance/time
- Acceleration = change in velocity/time
- Can verify v² = u² + 2as
- Gradient of distance-time graph = speed
- Gradient of velocity-time graph = acceleration

---

### PAG P2: Investigating Force and Extension (Topic P2)
**Aim:** Investigate the relationship between force and extension for a spring
**Equipment:**
- Spring
- Clamp stand, boss, clamp
- Metre ruler with mm markings
- Slotted masses and hanger
- Safety goggles

**Method:**
1. Hang spring from clamp stand and measure original length
2. Add masses one at a time
3. Measure new length after each addition
4. Calculate extension = new length - original length
5. Plot graph of force vs extension

**Key Variables:**
- Independent: Force applied (weight = mg)
- Dependent: Extension
- Control: Same spring, vertical orientation

**Key Points:**
- F = kx (Hooke's Law)
- Gradient = spring constant k (N/m)
- Linear region - Hooke's Law applies
- Limit of proportionality - beyond this, not linear
- Safety: wear goggles in case spring breaks

---

### PAG P3: Investigating Resistance (Topic P3)
**Aim:** Investigate how the length of a wire affects resistance
**Equipment:**
- Constantan wire
- Metre ruler
- Crocodile clips
- Ammeter
- Voltmeter
- Power supply (low voltage)

**Method:**
1. Set up circuit with wire, ammeter in series
2. Connect voltmeter across the wire
3. Measure current and voltage for different lengths
4. Calculate resistance using R = V/I
5. Plot graph of R vs length

**Key Variables:**
- Independent: Length of wire
- Dependent: Resistance
- Control: Material, thickness, temperature

**Key Points:**
- V = IR (Ohm's Law)
- Resistance proportional to length
- Graph should be straight line through origin
- Keep current low to prevent heating
- Resistance also depends on thickness and material

---

### PAG P4: Investigating I-V Characteristics (Topic P3)
**Aim:** Investigate I-V characteristics of electrical components
**Equipment:**
- Component (resistor, filament lamp, diode)
- Variable power supply or variable resistor
- Ammeter
- Voltmeter
- Connecting wires

**Method:**
1. Set up circuit with component, ammeter in series
2. Connect voltmeter in parallel with component
3. Vary voltage and record current
4. Reverse polarity for negative values
5. Plot I-V graph

**Key Variables:**
- Independent: Voltage
- Dependent: Current
- Control: Component, temperature (allow cooling)

**Results:**
- Resistor: Straight line through origin (ohmic conductor)
- Filament lamp: Curve - resistance increases as temperature increases
- Diode: Only conducts in forward direction (above ~0.7V)

---

### PAG P5: Investigating Specific Heat Capacity (Topic P1)
**Aim:** Determine the specific heat capacity of a material
**Equipment:**
- Metal block with holes for heater and thermometer
- Immersion heater
- Thermometer or temperature sensor
- Joulemeter (or ammeter, voltmeter, stopwatch)
- Balance
- Insulation

**Method:**
1. Measure mass of block
2. Record initial temperature
3. Heat block, recording energy input
4. Record final temperature
5. Calculate SHC using E = mcΔθ

**Key Variables:**
- Independent: Energy supplied
- Dependent: Temperature change
- Control: Same block, insulation

**Key Points:**
- E = mcΔθ rearranges to c = E/(mΔθ)
- Energy measured by joulemeter or E = IVt
- Insulation reduces heat loss
- Oil in thermometer hole improves contact
- Results often higher than actual due to heat loss

---

### PAG P6: Investigating Waves (Topic P5)
**Aim:** Investigate properties of waves including frequency, wavelength and speed
**Equipment:**
- Ripple tank with motor
- Signal generator
- Metre ruler
- Stopwatch
- Stroboscope (optional)

**Method:**
1. Set up ripple tank with vibrating paddle
2. Adjust frequency using signal generator
3. Measure wavelength (distance between crests)
4. Calculate wave speed using v = fλ
5. Repeat for different frequencies

**Key Variables:**
- Independent: Frequency
- Dependent: Wavelength (wave speed constant)
- Control: Water depth, paddle

**Key Points:**
- v = fλ (wave equation)
- Speed depends on medium, not frequency
- As frequency increases, wavelength decreases
- Can also investigate reflection and refraction

---

### PAG P7: Investigating Light (Topic P5)
**Aim:** Investigate reflection and refraction of light
**Equipment:**
- Ray box or laser
- Plane mirror
- Rectangular glass/perspex block
- Protractor
- White paper
- Pencil

**Method (Refraction):**
1. Place glass block on paper, draw outline
2. Shine ray at angle to the block
3. Mark incident and emergent rays
4. Draw normal at boundary
5. Measure angles of incidence and refraction

**Key Variables:**
- Independent: Angle of incidence
- Dependent: Angle of refraction
- Control: Same block, same light source

**Key Points:**
- Light bends towards normal when entering denser medium
- Light bends away from normal when leaving denser medium
- Emergent ray parallel to incident ray
- Refractive index n = sin i / sin r
- Total internal reflection above critical angle

---

### PAG P8: Investigating Density (Topic P1)
**Aim:** Determine density of regular and irregular solids
**Equipment:**
- Balance
- Ruler
- Displacement can / measuring cylinder
- Various solid objects
- Water

**Method (Regular solid):**
1. Measure mass using balance
2. Measure dimensions using ruler
3. Calculate volume (e.g., V = l × w × h for cuboid)
4. Calculate density using ρ = m/V

**Method (Irregular solid):**
1. Measure mass using balance
2. Lower object into displacement can
3. Collect and measure volume of displaced water
4. Calculate density using ρ = m/V

**Key Points:**
- ρ = m/V (must recall)
- Unit conversions often needed (g to kg, cm³ to m³)
- Water has density 1000 kg/m³ or 1 g/cm³
- Objects less dense than water float
`;

// ============================================================================
// PRACTICAL-SPECIFIC PROMPTS
// ============================================================================

/**
 * Practical method question prompt for OCR Physics.
 */
export function getOCRPhysicsPracticalMethodPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR Gateway GCSE Physics PAG METHOD question. Return ONLY valid JSON.

${OCR_PHYSICS_PAGS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

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
  "markScheme": ["Point 1 [1]", "Point 2 [1]", "Point 3 [1]"]
}

Generate an original OCR Gateway PAG method question now:`;
}

/**
 * Practical variables question prompt for OCR Physics.
 */
export function getOCRPhysicsPracticalVariablesPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR Gateway GCSE Physics PAG VARIABLES question. Return ONLY valid JSON.

${OCR_PHYSICS_PAGS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

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
  "markScheme": ["Independent variable correct [1]", "Dependent variable correct [1]", "Control variable [1]"]
}

Generate an original OCR Gateway PAG variables question now:`;
}

/**
 * Practical results question prompt for OCR Physics.
 */
export function getOCRPhysicsPracticalResultsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR Gateway GCSE Physics PAG RESULTS ANALYSIS question. Return ONLY valid JSON.

${OCR_PHYSICS_PAGS_DATA}

${OCR_PHYSICS_EQUATION_SHEET}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

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
  "markScheme": ["Correct method [1]", "Correct answer with unit [1]", "Conclusion [1]"]
}

Generate an original OCR Gateway PAG results question now:`;
}

/**
 * Practical errors question prompt for OCR Physics.
 */
export function getOCRPhysicsPracticalErrorsPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an OCR Gateway GCSE Physics PAG ERRORS/EVALUATION question. Return ONLY valid JSON.

${OCR_PHYSICS_PAGS_DATA}

Practical: ${practical.name}
Description: ${practical.description}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## Question Types for Errors/Evaluation
- Identify sources of error
- Distinguish random vs systematic errors
- Explain how errors affect results
- Suggest improvements to method
- Evaluate the reliability of results

## Key Concepts
- Random errors: Vary unpredictably (reduce by repeating and averaging)
- Systematic errors: Consistent in one direction (need to change method)
- Accuracy: How close to true value
- Precision: How consistent repeat readings are
- Resolution: Smallest change an instrument can detect

{
  "content": "Context about experiment...\\n\\nEvaluation question [X marks]",
  "marks": <marks>,
  "solution": "Model answer identifying errors and suggesting improvements",
  "markScheme": ["Error identified [1]", "Effect on results [1]", "Improvement suggested [1]"]
}

Generate an original OCR Gateway PAG errors/evaluation question now:`;
}

/**
 * Practical safety question prompt for OCR Physics.
 */
export function getOCRPhysicsPracticalSafetyPrompt(
  practical: Practical,
  difficulty: Difficulty,
  subtopic?: PracticalSubtopic
): string {
  return `Generate an OCR Gateway GCSE Physics PAG SAFETY question. Return ONLY valid JSON.

${OCR_PHYSICS_PAGS_DATA}

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
  "markScheme": ["Hazard identified [1]", "Precaution stated [1]", "Explanation of why [1]"]
}

Generate an original OCR Gateway PAG safety question now:`;
}
