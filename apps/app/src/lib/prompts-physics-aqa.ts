import { Difficulty, Topic, Practical, PracticalSubtopic } from '@/types';
import {
  getDiagramDocsForSubject,
} from './prompts-common';

/**
 * GCSE-specific mark range function for Physics AQA.
 * GCSE questions typically have lower mark ranges than A-Level.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };
    case 'medium':
      return { min: 4, max: 6 };
    case 'hard':
      return { min: 6, max: 9 };
    default:
      return { min: 1, max: 6 };
  }
}

/**
 * AQA GCSE Physics (8463) Question Generation Prompts.
 * Based on analysis of AQA past papers and official specification.
 *
 * Sources:
 * - https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification
 * - https://filestore.aqa.org.uk/resources/physics/AQA-8463-PRACTICALS.PDF
 * - https://www.aqa.org.uk/resources/science/as-and-a-level/physics-7407-7408/teach/command-words
 */

// ============================================================================
// AQA GCSE PHYSICS ASSESSMENT OBJECTIVES (OFFICIAL)
// ============================================================================

const AQA_PHYSICS_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Physics Assessment Objectives

### AO1: Knowledge and Understanding (~40%)
Demonstrate knowledge and understanding of:
- Scientific ideas
- Scientific techniques and procedures

**AO1 Question Characteristics:**
- "State", "Name", "Define", "Give" commands
- Recall of facts, definitions, equations
- Identifying scientific terms
- Recognising apparatus and procedures

### AO2: Application (~40%)
Apply knowledge and understanding of:
- Scientific ideas
- Scientific enquiry, techniques and procedures

**AO2 Question Characteristics:**
- "Calculate", "Determine", "Explain", "Describe" commands
- Using equations with given data
- Applying concepts to new contexts
- Planning investigations
- Analysing experimental data

### AO3: Analysis and Evaluation (~20%)
Analyse information and ideas to:
- Interpret and evaluate
- Make judgements and draw conclusions
- Develop and improve experimental procedures

**AO3 Question Characteristics:**
- "Evaluate", "Analyse", "Suggest", "Compare" commands
- Drawing conclusions from data
- Identifying sources of error
- Suggesting improvements to methods
- Evaluating claims and evidence

### Weighting by Paper
| Paper | AO1 | AO2 | AO3 | Total |
|-------|-----|-----|-----|-------|
| Paper 1 (Topics 1-4) | 40% | 40% | 20% | 100 marks |
| Paper 2 (Topics 5-7) | 40% | 40% | 20% | 100 marks |
| **Overall** | **40%** | **40%** | **20%** | **200 marks** |

### Practical Skills Weighting
At least 15% of marks draw on knowledge and understanding of practical work, including:
- Apparatus and techniques
- Planning experiments
- Analysing and evaluating data
- Drawing conclusions
`;

// ============================================================================
// AQA GCSE PHYSICS REQUIRED PRACTICALS (10 Total)
// ============================================================================

const AQA_PHYSICS_REQUIRED_PRACTICALS = `
## AQA GCSE Physics Required Practicals (10)

Questions on these practicals can appear in any exam. Students must know:
- The method and apparatus used
- How to identify variables (IV, DV, CV)
- How to analyse results
- Sources of error and improvements

### Paper 1 Required Practicals (Topics 1-4)

**RP1: Specific Heat Capacity** (Physics only)
- Determine SHC of a material (e.g., metal block, water)
- Use electrical method: heater, joulemeter, thermometer
- E = mcΔθ to calculate SHC
- Sources of error: heat loss to surroundings

**RP2: Thermal Insulation**
- Investigate effectiveness of different materials as thermal insulators
- Compare temperature drop over time
- Control variables: volume of water, starting temperature, container

**RP3: Resistance**
- Investigate how resistance varies with length of wire
- Circuit: power supply, ammeter, voltmeter, wire, crocodile clips
- Use V = IR to calculate resistance
- Plot resistance vs length graph (should be linear)

**RP4: I-V Characteristics**
- Investigate I-V characteristics of: filament lamp, diode, fixed resistor
- Vary voltage, measure current
- Plot I-V graphs for each component
- Resistor: straight line through origin
- Lamp: curved line (resistance increases as it heats)
- Diode: only conducts in forward direction

### Paper 2 Required Practicals (Topics 5-7)

**RP5: Density**
- Determine density of regular and irregular solid objects and liquids
- Regular solid: measure dimensions, calculate volume
- Irregular solid: displacement method (measuring cylinder)
- Liquid: measure mass, measure volume
- ρ = m/V

**RP6: Force and Extension (Hooke's Law)**
- Investigate force-extension relationship for a spring
- Measure extension for different forces (masses)
- Plot force-extension graph
- F = kx, gradient = spring constant k
- Identify limit of proportionality

**RP7: Acceleration** (Physics only)
- Investigate effect of varying force on acceleration (constant mass)
- Investigate effect of varying mass on acceleration (constant force)
- Use trolley, ramp, light gates or ticker tape
- F = ma relationship

**RP8: Waves in Solids and Liquids**
- Measure frequency, wavelength, and speed of waves in a ripple tank
- Measure speed of waves in a solid (stretched string/slinky)
- Use v = fλ
- For string: change tension, measure wavelength at fixed frequency

**RP9: Light (Reflection and Refraction)**
- Investigate reflection of light from a plane mirror
- Investigate refraction of light through glass block
- Measure angles of incidence and refraction
- Verify law of reflection (angle i = angle r)

**RP10: Radiation and Absorption** (Infrared)
- Investigate how amount of IR radiation absorbed/emitted depends on surface
- Compare black/white/shiny surfaces
- Use Leslie cube or similar
- Black surfaces absorb and emit best
`;

// ============================================================================
// AQA GCSE PHYSICS COMMAND WORDS (OFFICIAL)
// ============================================================================

const AQA_PHYSICS_COMMAND_WORDS = `
## AQA GCSE Physics Command Words (Official Definitions)

### Calculation Commands
| Command | Definition | Marks | Notes |
|---------|-----------|-------|-------|
| **Calculate** | Use numbers to work out an answer | 2-4 | Show working, include units |
| **Determine** | Use data/information to find answer | 2-3 | May involve graph reading |
| **Work out** | Perform a calculation | 2-3 | Show method |
| **Estimate** | Make an approximate calculation | 1-2 | Accept reasonable values |

### Knowledge Commands
| Command | Definition | Marks | Notes |
|---------|-----------|-------|-------|
| **State** | Give a brief answer, no explanation | 1 | Factual recall |
| **Give** | Produce an answer from recall or info given | 1 | Short response |
| **Name** | Identify using recognised scientific term | 1 | Specific terminology |
| **Define** | Give the meaning of a term | 1-2 | Precise definition |
| **Write** | Provide equation or specific information | 1 | Often word equation |

### Description/Explanation Commands
| Command | Definition | Marks | Notes |
|---------|-----------|-------|-------|
| **Describe** | Give an account of what something is/happens | 2-3 | Sequence or features |
| **Explain** | Give reasons using scientific knowledge | 2-4 | Use "because", link ideas |
| **Suggest** | Apply knowledge to unfamiliar context | 2-3 | Multiple valid answers |
| **Compare** | Identify similarities AND differences | 2-3 | Both required |

### Analysis Commands
| Command | Definition | Marks | Notes |
|---------|-----------|-------|-------|
| **Analyse** | Examine data to identify patterns/trends | 2-3 | Quote data to support |
| **Evaluate** | Judge quality, importance, or value | 3-6 | Pros and cons |
| **Justify** | Give reasons using evidence | 2-3 | Link evidence to conclusion |

### Practical Commands
| Command | Definition | Marks | Notes |
|---------|-----------|-------|-------|
| **Plan/Design** | Describe how investigation could be done | 3-6 | Variables, method, safety |
| **Draw** | Produce diagram showing specific features | 2-3 | Accurate if specified |
| **Sketch** | Draw approximately | 1-2 | Shape/trend important |
| **Label** | Add names to diagram | 1-2 | Clear indication |
`;

// ============================================================================
// COMPLETE AQA GCSE PHYSICS REFERENCE DATA
// This ensures 100% accuracy for all calculations and answers
// ============================================================================

const AQA_PHYSICS_EQUATION_SHEET = `
## AQA GCSE Physics Equation Sheet (PROVIDED IN EXAM)

### Paper 1 Equations (Given)
| Equation | Variables | Units |
|----------|-----------|-------|
| KE = ½mv² | kinetic energy, mass, speed | J, kg, m/s |
| GPE = mgh | gravitational PE, mass, g, height | J, kg, N/kg, m |
| EPE = ½ke² | elastic PE, spring constant, extension | J, N/m, m |
| E = mcΔθ | energy, mass, SHC, temp change | J, kg, J/kg°C, °C |
| E = mL | energy, mass, specific latent heat | J, kg, J/kg |
| P = E/t | power, energy, time | W, J, s |
| P = I²R | power, current, resistance | W, A, Ω |
| P = IV | power, current, voltage | W, A, V |
| E = Pt | energy, power, time | J, W, s |
| E = QV | energy, charge, voltage | J, C, V |
| Q = It | charge, current, time | C, A, s |
| V = IR | voltage, current, resistance | V, A, Ω |
| R = ρL/A | resistance, resistivity, length, area | Ω, Ωm, m, m² |
| efficiency = useful output / total input | (no units or ×100 for %) |

### Paper 2 Equations (Given)
| Equation | Variables | Units |
|----------|-----------|-------|
| s = vt | distance, speed, time | m, m/s, s |
| v² = u² + 2as | final velocity, initial velocity, acceleration, distance | m/s, m/s, m/s², m |
| F = ma | force, mass, acceleration | N, kg, m/s² |
| W = Fs | work done, force, distance | J, N, m |
| p = mv | momentum, mass, velocity | kg m/s, kg, m/s |
| F = kx | force, spring constant, extension | N, N/m, m |
| moment = Fd | moment, force, distance | Nm, N, m |
| pressure = F/A | pressure, force, area | Pa, N, m² |
| p = hρg | pressure, height, density, g | Pa, m, kg/m³, N/kg |
| wave speed = f × λ | wave speed, frequency, wavelength | m/s, Hz, m |
| magnification = image height / object height | (no units) |

### Equations You MUST RECALL (Not Given)
| Equation | Context |
|----------|---------|
| ρ = m/V | Density calculation |
| a = Δv/t | Acceleration from velocity change |
| W = mg | Weight from mass |
| F = ma | Newton's second law |
| P = E/t or P = W/t | Power definition |
| efficiency = (useful output / total input) × 100% | Efficiency |
| Q = It | Charge |
| V = IR | Ohm's law |
| P = IV | Electrical power |
| E = QV | Energy transferred |
`;

const AQA_PHYSICS_CONSTANTS = `
## Physics Constants (MUST USE THESE EXACT VALUES)

| Constant | Value | When to Use |
|----------|-------|-------------|
| g (gravitational field strength) | **9.8 N/kg** or **10 N/kg** if told | Weight, GPE calculations |
| Speed of light in vacuum | **3 × 10⁸ m/s** | EM waves, wave equation |
| Speed of sound in air | **~330-340 m/s** | Sound wave calculations |
| Specific heat capacity of water | **4200 J/kg°C** | Heating water |
| Specific heat capacity of aluminium | **900 J/kg°C** | Heating aluminium |
| Specific heat capacity of copper | **390 J/kg°C** | Heating copper |
| Specific latent heat of fusion (water) | **334,000 J/kg** | Melting/freezing ice |
| Specific latent heat of vaporisation (water) | **2,260,000 J/kg** | Boiling water |
| Density of water | **1000 kg/m³** or **1 g/cm³** | Density calculations |
| UK mains voltage | **230 V** | Domestic electricity |
| UK mains frequency | **50 Hz** | AC electricity |
| Mains power to kettle (typical) | **2000-3000 W** | Power questions |

## Unit Conversions (CRITICAL)
| From | To | Multiply by |
|------|-----|-------------|
| km | m | × 1000 |
| cm | m | ÷ 100 |
| mm | m | ÷ 1000 |
| g | kg | ÷ 1000 |
| kW | W | × 1000 |
| MW | W | × 1,000,000 |
| kWh | J | × 3,600,000 |
| hours | seconds | × 3600 |
| minutes | seconds | × 60 |
| km/h | m/s | ÷ 3.6 |

## Standard Form Reminders
| Prefix | Power | Example |
|--------|-------|---------|
| kilo (k) | 10³ | 2 kW = 2000 W |
| mega (M) | 10⁶ | 5 MW = 5,000,000 W |
| milli (m) | 10⁻³ | 3 mm = 0.003 m |
| micro (μ) | 10⁻⁶ | 5 μs = 0.000005 s |
| nano (n) | 10⁻⁹ | 400 nm = 4 × 10⁻⁷ m |
`;

const AQA_PHYSICS_WORKED_EXAMPLES = `
## Worked Examples by Topic (USE THESE PATTERNS)

### ENERGY - Kinetic Energy Calculation
**Q:** A car of mass 1200 kg travels at 15 m/s. Calculate its kinetic energy. [3 marks]

**Solution:**
- Write equation: KE = ½mv²
- Substitute: KE = ½ × 1200 × 15²
- Calculate: KE = ½ × 1200 × 225 = 135,000 J
- **Answer: 135,000 J or 135 kJ** ✓

**Mark scheme:**
- M1: KE = ½mv² (or correct substitution)
- M1: ½ × 1200 × 15² or ½ × 1200 × 225
- A1: 135,000 J (unit required)

---

### ENERGY - Efficiency Calculation
**Q:** A motor uses 500 J of electrical energy and does 350 J of useful work. Calculate its efficiency. [3 marks]

**Solution:**
- Write equation: efficiency = useful output / total input
- Substitute: efficiency = 350 / 500
- Calculate: efficiency = 0.7 or 70%
- **Answer: 0.7 or 70%** ✓

---

### ELECTRICITY - Ohm's Law
**Q:** A resistor has a resistance of 4 Ω. The current through it is 2.5 A. Calculate the potential difference across it. [3 marks]

**Solution:**
- Write equation: V = IR
- Substitute: V = 2.5 × 4
- Calculate: V = 10
- **Answer: 10 V** ✓

---

### ELECTRICITY - Power and Energy
**Q:** A 2.5 kW kettle is used for 3 minutes. Calculate the energy transferred. [4 marks]

**Solution:**
- Convert units: 2.5 kW = 2500 W; 3 min = 180 s
- Write equation: E = Pt
- Substitute: E = 2500 × 180
- Calculate: E = 450,000
- **Answer: 450,000 J or 450 kJ** ✓

**Mark scheme:**
- M1: Convert to correct units
- M1: E = Pt
- M1: 2500 × 180
- A1: 450,000 J or 450 kJ

---

### FORCES - Weight Calculation
**Q:** Calculate the weight of a 65 kg person on Earth. (g = 9.8 N/kg) [2 marks]

**Solution:**
- Write equation: W = mg
- Substitute: W = 65 × 9.8
- **Answer: 637 N** ✓

---

### FORCES - Acceleration
**Q:** A car accelerates from 10 m/s to 25 m/s in 5 seconds. Calculate its acceleration. [3 marks]

**Solution:**
- Write equation: a = (v - u) / t or a = Δv / t
- Substitute: a = (25 - 10) / 5
- Calculate: a = 15 / 5 = 3
- **Answer: 3 m/s²** ✓

---

### WAVES - Wave Equation
**Q:** A wave has frequency 500 Hz and wavelength 0.68 m. Calculate its speed. [3 marks]

**Solution:**
- Write equation: v = f × λ
- Substitute: v = 500 × 0.68
- Calculate: v = 340
- **Answer: 340 m/s** ✓

---

### DENSITY
**Q:** A metal block has mass 540 g and volume 200 cm³. Calculate its density in kg/m³. [4 marks]

**Solution:**
- Convert: 540 g = 0.54 kg; 200 cm³ = 0.0002 m³ (or 2 × 10⁻⁴ m³)
- Write equation: ρ = m / V
- Substitute: ρ = 0.54 / 0.0002
- **Answer: 2700 kg/m³** ✓

---

### SPECIFIC HEAT CAPACITY
**Q:** Calculate the energy needed to heat 2 kg of water from 20°C to 100°C. (SHC of water = 4200 J/kg°C) [4 marks]

**Solution:**
- Calculate temperature change: Δθ = 100 - 20 = 80°C
- Write equation: E = mcΔθ
- Substitute: E = 2 × 4200 × 80
- Calculate: E = 672,000
- **Answer: 672,000 J or 672 kJ** ✓

---

### PRESSURE
**Q:** A force of 200 N acts on an area of 0.04 m². Calculate the pressure. [2 marks]

**Solution:**
- Write equation: p = F / A
- Substitute: p = 200 / 0.04
- **Answer: 5000 Pa** ✓

---

### MOMENTUM (Higher)
**Q:** A 1500 kg car travelling at 20 m/s collides with a stationary 1000 kg car. They stick together. Calculate their velocity after collision. [4 marks]

**Solution:**
- Momentum before = momentum after (conservation)
- Before: p = 1500 × 20 + 1000 × 0 = 30,000 kg m/s
- After: 30,000 = (1500 + 1000) × v
- v = 30,000 / 2500
- **Answer: 12 m/s** ✓
`;

/**
 * AQA GCSE Physics (8463) Question Generation Prompts.
 * Based on analysis of AQA past papers and mark schemes.
 *
 * Key differences from Mathematics:
 * - Different command words (Calculate, Describe, Explain, State, Evaluate, Compare)
 * - Units required for numerical answers
 * - 6-mark extended response questions (levels of response marking)
 * - Required practical questions
 * - Some equations provided on equation sheet, others must be recalled
 * - Triple Science (T) and Higher (H) tier distinctions
 */

const AQA_PHYSICS_PRINCIPLES = `# AQA GCSE Physics: Question Construction Principles

You are generating an original GCSE Physics question that could plausibly appear on a future AQA exam. The question must be genuinely original and exhibit authentic AQA Physics characteristics.

## Core Philosophy

AQA Physics questions test **scientific understanding and application**, not just recall. Every question should:
- Test understanding of physics concepts and their applications
- Include appropriate scientific vocabulary
- Require correct use of units in calculations
- Be accessible while discriminating between ability levels
- Reflect real-world contexts where appropriate

**AQA-Specific Characteristics:**
- TOTAL MARKS: 200 (100 per paper)
- 30% marks COMMON between Foundation and Higher tiers (better grade equivalence)
- 10 specified Required Practicals with exact titles
- QWC (Quality of Written Communication) assessed in 6-mark questions
- Mark schemes are MORE FLEXIBLE than other boards - accept correct alternatives
- Students reportedly spend 20% MORE TIME on practical experiments than Edexcel
- 7 main topics: Energy, Electricity, Particle Model, Atomic Structure, Forces, Waves, Magnetism

## Command Words and Their Meanings

Each command word has specific implications for how students should respond:

**Calculation commands:**
- "Calculate" — Use numbers given to work out the answer. Must show working and include units.
- "Determine" — Use data/information to find an answer (may involve calculation or graph reading)
- "Work out" — Perform a calculation showing method
- "Estimate" — Make an approximate calculation; accept reasonable values
- "Measure" — Use equipment to find a value

**Knowledge/Understanding commands:**
- "State" — Give a brief answer with no explanation (1 mark typically)
- "Give" — Produce an answer from recall or information given
- "Name" — Identify using a recognised scientific term
- "Define" — Give the meaning of a term
- "Write" — Provide an equation or specific information

**Description/Explanation commands:**
- "Describe" — Give an account of what something is or what happens
- "Explain" — Give reasons for something; use scientific knowledge and understanding
- "Suggest" — Apply knowledge to an unfamiliar context; may have multiple valid answers
- "Compare" — Identify similarities AND differences between two things
- "Outline" — Give a brief summary

**Analysis commands:**
- "Analyse" — Examine data/information to identify patterns or trends
- "Evaluate" — Judge the quality, importance, or value of something
- "Justify" — Give reasons for a conclusion using evidence

**Practical/Planning commands:**
- "Plan" / "Design" — Describe how an investigation could be carried out
- "Draw" — Produce a diagram/graph showing specific features
- "Sketch" — Draw approximately; shape/trend more important than accuracy
- "Label" — Add names to a diagram

## Mark Scheme Conventions

**Mark types:**
- M marks (Method): Correct approach or process
- A marks (Accuracy): Correct answer dependent on method
- B marks (Independent): Specific correct values/statements, not dependent on method
- C marks (Communication): Quality of written communication in extended response

**Common abbreviations:**
- cao = correct answer only (no follow through)
- ecf = error carried forward (allow credit for correct method from incorrect earlier answer)
- ft = follow through
- oe = or equivalent
- owtte = or words to that effect
- allow = acceptable alternative answer
- ignore = information that should be disregarded
- AW = alternative wording acceptable
- underlined text = essential for the mark

**Unit requirements:**
- Units required unless stated otherwise in mark scheme
- Common units: J, W, V, A, Ω, N, m/s, m/s², kg, kg/m³, Pa, Hz
- Incorrect unit loses the final A mark typically
- Accept standard form where appropriate

**Significant Figures:**
- Answer should match precision of data given (±1 sf typically acceptable)
- One designated sf question per paper
- In calculations, keep intermediate values unrounded

## Question Types

**1. Multiple Choice (1 mark each)**
- Four options (A, B, C, D)
- One clearly correct answer
- Distractors based on common misconceptions

**2. Short Answer (1-4 marks)**
- State/Name (1 mark): Brief factual recall
- Describe (2-3 marks): Sequence or process
- Calculate (2-4 marks): Apply equation, show working, include units

**3. Extended Response (6 marks)**
- Levels of response marking:
  - Level 3 (5-6 marks): Detailed, comprehensive response
  - Level 2 (3-4 marks): Good understanding but some gaps
  - Level 1 (1-2 marks): Basic understanding, limited detail
- Indicative content guides marking but exact wording not required
- Quality of written communication assessed

**4. Calculation Questions**
Structure: Equation → Substitution → Rearrangement (if needed) → Answer with unit
- M1: Correct equation selected
- M1/A1: Correct substitution
- A1: Correct answer with unit

**5. Required Practical Questions**
- Method description
- Variable identification (IV, DV, CV)
- Apparatus selection
- Results analysis
- Error sources and improvements

## Tier Guidance

**Foundation Tier (Grades 1-5):**
- Familiar contexts and standard applications
- Single-step calculations typically
- Scaffolded questions
- Equations given or recalled from simpler list

**Higher Tier (Grades 4-9):**
- More complex, multi-step calculations
- Unfamiliar contexts requiring application
- Extended mathematical manipulation
- Additional content marked (H)

**Triple Science Only (T):**
- Additional content beyond Combined Science
- Usually more demanding concepts
- Marked with (T) in specification

## CRITICAL: Mark Scheme Patterns for Worded Answers

**When generating mark schemes for EXPLAIN questions, you MUST follow these patterns:**

### Essential Word Rules
- Any **underlined** text in a mark scheme is ESSENTIAL - the exact word must appear
- Bold **and** means BOTH parts are required for the mark
- "or" indicates acceptable alternatives
- Each error/contradiction NEGATES one correct response

### Standard Physics Explanation Patterns

**Resistance and Temperature:**
- Thermistor: "as temperature increases → resistance decreases → because more charge carriers are released / electrons gain energy"
- Filament lamp: "as current increases → temperature increases → atoms vibrate more → harder for electrons to pass → resistance increases"
- Wire: "as temperature increases → ions/atoms vibrate more vigorously → more frequent collisions with electrons → resistance increases"

**Energy Transfer Explanations:**
- "energy is transferred from [store 1] to [store 2]"
- "work is done by/against [force] causing energy to be transferred"
- Always state: initial store → transfer mechanism → final store
- Include "dissipated/wasted" energy where relevant

**Pressure and Particle Explanations:**
- "particles move faster/have more kinetic energy"
- "more frequent collisions with container walls"
- "greater force per collision"
- "pressure = force ÷ area, so pressure increases"

**Electromagnetic Spectrum:**
- Higher frequency → higher energy → more dangerous / more penetrating
- Different uses linked to specific properties (e.g., "microwaves cause water molecules to vibrate")

**Forces and Motion:**
- "resultant force is [zero/non-zero] so acceleration is [zero/non-zero]"
- "Newton's [first/second/third] law states..."
- Momentum: "momentum before = momentum after" (conservation)
- Stopping distance: thinking distance + braking distance

**Radioactive Decay:**
- "nucleus is unstable because of [too many neutrons / too much energy]"
- "emits [alpha/beta/gamma] radiation"
- "half-life is the time for [activity to halve / half the nuclei to decay]"

### 6-Mark Level of Response Patterns

For 6-mark questions, mark schemes use LEVEL DESCRIPTORS not point marking:

**Level 3 (5-6 marks):** "A detailed and coherent explanation... logical links between points... scientific terminology used correctly throughout"
- Must include: cause → effect → consequence chain
- Must use: correct scientific vocabulary
- Must show: complete understanding with no errors

**Level 2 (3-4 marks):** "A reasonable explanation... some logical links... mostly correct science but may lack detail"
- Some key points missing
- May have minor errors in terminology

**Level 1 (1-2 marks):** "Simple statements... limited scientific understanding... incomplete response"
- Basic points only
- Limited or incorrect use of terminology

### Practical Evaluation Patterns

**Sources of Error:**
- "heat loss to the surroundings"
- "parallax error when reading the scale"
- "reaction time when starting/stopping the timer"
- "difficulty measuring exact [volume/length/temperature]"

**Improvements:**
- "use insulation to reduce heat loss"
- "take repeat readings and calculate a mean"
- "use a data logger for more precise measurements"
- "use a larger [quantity] to reduce percentage uncertainty"

### Common Required Phrases by Topic

**Waves:** "wave transfers energy without transferring matter"
**Current:** "rate of flow of charge" (NOT flow of electrons)
**P.d.:** "work done per unit charge" or "energy transferred per coulomb"
**Power:** "rate of energy transfer" or "rate of doing work"
**Efficiency:** "useful output energy / total input energy × 100%"`;

const AQA_PHYSICS_MARK_SCHEME_EXAMPLES = `
## Worked Mark Scheme Examples

**Example 1: Explain why the resistance of a thermistor decreases when temperature increases. [3 marks]**

Mark Scheme:
- M1: "temperature increases" → "more charge carriers are released" / "electrons gain energy"
- M2: "more electrons are able to flow" / "more charge carriers available"
- A1: "current increases for the same p.d." / "easier for current to flow" → "so resistance decreases"

Model Answer: "When the temperature of a thermistor increases (1), more charge carriers are released because electrons gain enough energy to escape from atoms (1). This means more electrons are available to carry the current, so for the same p.d., current increases and resistance decreases (1)."

**Example 2: Explain, in terms of particles, why the pressure of a gas increases when it is heated at constant volume. [4 marks]**

Mark Scheme:
- M1: particles gain kinetic energy / move faster
- M1: particles collide more frequently with walls
- M1: particles exert greater force per collision
- A1: pressure increases because force on walls increases (for same area)

Model Answer: "When the gas is heated, the particles gain kinetic energy and move faster (1). They collide with the container walls more frequently (1) and each collision exerts a greater force (1). Since pressure equals force divided by area, and the area is constant, the pressure increases (1)."

**Example 3: 6-Mark Question - Explain how electrical energy is transmitted efficiently through the National Grid.**

Level 3 Answer (5-6 marks):
"Electrical energy from power stations is transmitted through the National Grid at very high voltages (up to 400,000V). This is achieved using step-up transformers near the power station. High voltage transmission is efficient because, for a given power output, the current is much lower (P = IV, so if V increases, I decreases for the same P). Lower current means less energy is wasted as heat in the cables (P = I²R shows power loss depends on current squared). Near consumers, step-down transformers reduce the voltage to safe usable levels (230V for domestic use). This system allows electricity generated anywhere in the country to be distributed efficiently to where it's needed."

This answer would score Level 3 because it:
- Explains the complete transmission process
- Links cause and effect (high V → low I → less heat loss)
- Uses correct equations to justify reasoning
- Uses correct scientific terminology throughout
- Has a logical structure with no scientific errors`;

const AQA_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'physics-energy': `## Energy Topic (4.1)

**Energy Stores and Transfers:**
- 8 energy stores: kinetic, thermal, chemical, elastic potential, gravitational potential, nuclear, magnetic, electrostatic
- Energy is transferred between stores, not created/destroyed
- Sankey diagrams show energy transfers with arrow widths proportional to energy

**Key Calculations:**
- Kinetic energy: KE = ½mv² (on equation sheet)
- Gravitational PE: GPE = mgh (on equation sheet)
- Elastic PE: EPE = ½ke² (on equation sheet, Higher)
- Thermal energy: E = mcΔθ (must recall)
- Power: P = E/t or P = W/t (must recall)
- Efficiency: useful output/total input (as decimal or %)

**Required Practical - Specific Heat Capacity:**
- Questions on method, apparatus, calculations
- Variables: mass, power, time, temperature change
- Common error sources: heat loss to surroundings

**Energy Resources:**
- Renewable vs non-renewable
- Advantages and disadvantages of each
- Environmental, social, economic considerations
- Reliability and energy density comparisons`,

  'physics-electricity': `## Electricity Topic (4.2)

**Circuit Basics:**
- Current = charge flow per second: Q = It (must recall)
- Potential difference: V = IR (must recall)
- Power: P = IV, P = I²R, P = V²/R
- Energy: E = Pt, E = QV

**I-V Characteristics:**
- Resistor: straight line through origin (ohmic)
- Filament lamp: curve (resistance increases with temperature)
- Diode: no current until threshold, then rapid increase

**Series vs Parallel:**
- Series: same current throughout, voltages add, resistances add
- Parallel: same voltage across branches, currents add, total resistance decreases

**Required Practicals:**
- RP3: Factors affecting resistance (length, cross-sectional area)
- RP4: I-V characteristics of components

**Domestic Electricity:**
- UK mains: 230V, 50Hz AC
- Live (brown): carries AC voltage
- Neutral (blue): completes circuit, ~0V
- Earth (green/yellow): safety wire
- Dangers of touching live wire

**The National Grid:**
- Step-up transformers increase voltage for transmission
- Higher voltage → lower current → less power loss (P = I²R)
- Step-down transformers reduce voltage for use`,

  'physics-particle-model': `## Particle Model of Matter Topic (4.3)

**Density:**
- Definition: mass per unit volume
- Equation: ρ = m/V (must recall)
- Units: kg/m³ or g/cm³

**Required Practical - Density:**
- Regular solid: measure dimensions, calculate volume
- Irregular solid: displacement method
- Liquid: measuring cylinder and balance

**States of Matter:**
- Solid: fixed shape, particles vibrate in fixed positions
- Liquid: takes container shape, particles move randomly
- Gas: fills container, particles move rapidly and randomly

**Internal Energy:**
- Sum of kinetic and potential energy of all particles
- Heating increases internal energy
- Temperature relates to average kinetic energy

**Specific Heat Capacity:**
- Energy to raise 1 kg by 1°C
- E = mcΔθ (must recall)
- Different materials have different values

**Specific Latent Heat:**
- Energy to change state without temperature change
- Latent heat of fusion: solid ↔ liquid
- Latent heat of vaporisation: liquid ↔ gas
- E = mL (on equation sheet)

**Pressure (Higher):**
- Gas pressure from particle collisions with walls
- Temperature increases → particles faster → more collisions → higher pressure
- pV = constant at constant temperature`,

  'physics-atomic-structure': `## Atomic Structure Topic (4.4)

**Atomic Model Development:**
- Dalton: solid sphere model
- Thomson: plum pudding model (electrons in positive sphere)
- Rutherford: nuclear model (alpha scattering experiment)
- Bohr: electrons in shells at fixed distances

**Atomic Structure:**
- Protons: positive, mass 1, in nucleus
- Neutrons: neutral, mass 1, in nucleus
- Electrons: negative, very small mass, orbit nucleus
- Atomic number = protons; Mass number = protons + neutrons
- Isotopes: same protons, different neutrons

**Radioactive Decay:**
- Random process - cannot predict which nucleus decays
- Alpha (α): 2 protons + 2 neutrons (helium nucleus)
- Beta (β): electron from nucleus (neutron → proton)
- Gamma (γ): electromagnetic radiation from nucleus

**Half-life:**
- Time for activity/number of nuclei to halve
- Calculate remaining activity after multiple half-lives
- Applications: dating, medical tracers

**Nuclear Equations:**
- Conservation of mass number and atomic number
- Alpha decay: mass -4, atomic number -2
- Beta decay: mass same, atomic number +1

**Contamination vs Irradiation:**
- Contamination: radioactive material on/in body (ongoing exposure)
- Irradiation: exposure to radiation from source (stops when source removed)

**Nuclear Energy:**
- Fission: large nucleus splits into smaller nuclei
- Fusion: small nuclei join to form larger nucleus
- Both release energy`,

  'physics-forces': `## Forces Topic (4.5)

**Scalar vs Vector:**
- Scalar: magnitude only (speed, distance, mass, energy, temperature)
- Vector: magnitude AND direction (velocity, displacement, force, acceleration)

**Contact vs Non-contact Forces:**
- Contact: friction, air resistance, tension, normal contact
- Non-contact: gravity, electrostatic, magnetic

**Weight and Mass:**
- Weight: gravitational force, W = mg (must recall)
- Mass: amount of matter, constant everywhere
- g ≈ 10 N/kg on Earth

**Resultant Forces:**
- Vector addition: same direction add, opposite subtract
- Free body diagrams: show all forces acting on object
- Equilibrium: resultant force = 0

**Hooke's Law:**
- F = ke (must recall)
- Linear region: force proportional to extension
- Limit of proportionality: beyond this, not linear
- Elastic potential energy: E = ½ke² (equation sheet)

**Required Practical - Force and Extension:**
- Add weights, measure extension
- Plot force-extension graph
- Identify linear region and limit of proportionality

**Distance-Time Graphs:**
- Gradient = speed
- Horizontal line = stationary
- Steeper gradient = faster speed

**Velocity-Time Graphs:**
- Gradient = acceleration
- Area under graph = distance/displacement
- Horizontal line = constant velocity

**Newton's Laws:**
1. Object at rest/constant velocity unless acted on by resultant force
2. F = ma (must recall) - acceleration ∝ force, inversely ∝ mass
3. Equal and opposite reaction forces

**Required Practical - Acceleration:**
- Investigate effect of varying force/mass on acceleration
- Use light gates or motion sensors
- Control variables carefully

**Stopping Distance:**
- Thinking distance + braking distance
- Thinking distance affected by: reaction time, speed, drugs/alcohol, tiredness
- Braking distance affected by: speed, road conditions, tyre condition, brake condition, mass

**Momentum (Higher):**
- p = mv (must recall)
- Conservation of momentum in closed systems
- F = Δp/t or F = (mv - mu)/t
- Crumple zones increase impact time → reduce force`,

  'physics-waves': `## Waves Topic (4.6)

**Wave Types:**
- Transverse: oscillations perpendicular to direction (light, water, S-waves)
- Longitudinal: oscillations parallel to direction (sound, P-waves)

**Wave Properties:**
- Amplitude: maximum displacement from rest position
- Wavelength (λ): distance between equivalent points on adjacent waves
- Frequency (f): waves passing a point per second (Hz)
- Period (T): time for one complete wave (T = 1/f)
- Wave equation: v = fλ (must recall)

**Required Practical - Waves:**
- Ripple tank for water waves
- Measure wavelength and frequency
- Calculate wave speed

**Sound Waves:**
- Longitudinal waves through medium
- Human hearing: 20 Hz - 20 kHz
- Ultrasound: > 20 kHz (medical imaging, SONAR)
- Echo location and distance measurement

**Electromagnetic Spectrum:**
- All EM waves: transverse, travel at 3×10⁸ m/s in vacuum
- Order (increasing frequency): Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma
- Order (increasing wavelength): opposite

**EM Wave Uses and Hazards:**
- Radio: communication, broadcasting
- Microwave: cooking, mobile phones, satellite
- Infrared: heating, thermal imaging, remote controls
- Visible: vision, photography
- UV: sterilisation, detecting counterfeit notes (hazard: skin cancer)
- X-ray: medical imaging (hazard: cell damage, cancer)
- Gamma: cancer treatment, sterilisation (hazard: cell damage)

**Refraction (Triple):**
- Light changes speed and direction at boundaries
- Towards normal when slowing down
- Away from normal when speeding up
- Total internal reflection at critical angle

**Lenses (Triple):**
- Convex: converging, real images
- Concave: diverging, virtual images
- Ray diagrams: parallel ray, through centre, through/from focus`,

  'physics-magnetism': `## Magnetism and Electromagnetism Topic (4.7)

**Permanent Magnets:**
- North and south poles
- Like poles repel, unlike attract
- Magnetic materials: iron, steel, cobalt, nickel
- Induced magnetism: material becomes magnetic near magnet

**Magnetic Fields:**
- Region where magnetic force acts
- Field lines: N to S, closer lines = stronger field
- Earth's magnetic field: geographic north near magnetic south

**Electromagnetism:**
- Current-carrying wire has magnetic field around it
- Right-hand grip rule: thumb = current, fingers = field direction
- Solenoid: many loops, strong field inside

**Motor Effect:**
- Force on current-carrying wire in magnetic field
- Fleming's left-hand rule: First finger = Field, seCond = Current, thuMb = Motion
- F = BIL (Higher, equation sheet)

**DC Motor:**
- Coil rotates in magnetic field
- Split-ring commutator reverses current every half turn
- Continuous rotation in same direction

**Generator Effect (Higher):**
- Moving wire/changing magnetic field induces potential difference
- Factors affecting: speed, field strength, number of turns
- AC generator: continuous rotation produces alternating current

**Transformers (Higher):**
- Change voltage using electromagnetic induction
- Step-up: more turns on secondary (increase voltage)
- Step-down: fewer turns on secondary (decrease voltage)
- Vp/Vs = Np/Ns (equation sheet)
- For 100% efficient: VpIp = VsIs (equation sheet)`,

  'physics-space': `## Space Physics Topic (4.8) - Triple Science Only

**Our Solar System:**
- Sun (star) at centre
- 8 planets: Mercury, Venus, Earth, Mars (rocky inner), Jupiter, Saturn, Uranus, Neptune (gas giants)
- Dwarf planets (e.g., Pluto)
- Natural satellites (moons)
- Asteroids, comets

**Life Cycle of Stars:**
1. Nebula (gas and dust cloud)
2. Protostar (gravity pulls material together)
3. Main sequence (hydrogen fusion, stable)
4. Red giant/supergiant (helium fusion begins)
5. End stages depend on mass:
   - Sun-like: planetary nebula → white dwarf
   - Massive: supernova → neutron star or black hole

**Orbital Motion:**
- Gravity provides centripetal force
- Closer orbit = faster speed, shorter period
- Geostationary: 24-hour period, stays above same point

**Red-shift:**
- Light from distant galaxies shifted to longer wavelengths
- Greater distance = greater red-shift
- Evidence for expanding universe
- Big Bang theory: universe started from single point
- Cosmic microwave background radiation: afterglow of Big Bang`,
};

/**
 * Compact prompt for fast AQA Physics question generation.
 */
export function getAQAPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyLevel = difficulty === 'easy'
    ? 'Early paper (Grades 1-3): 1-2 marks. State/name questions, simple recall, basic calculations with one step.'
    : difficulty === 'medium'
    ? 'Middle paper (Grades 4-5): 3-4 marks. Describe/explain questions, multi-step calculations, apply concepts.'
    : 'Later paper (Grades 6-9): 5-6 marks. Extended response, complex calculations, evaluate/analyse.';

  // Determine if this is a calculation-heavy subtopic
  const isCalculation = selectedSubtopic.toLowerCase().includes('calculation') ||
    selectedSubtopic.toLowerCase().includes('equation') ||
    selectedSubtopic.includes('=') ||
    selectedSubtopic.includes('E =') ||
    selectedSubtopic.includes('P =') ||
    selectedSubtopic.includes('V =');

  const questionTypeHint = isCalculation
    ? 'Generate a CALCULATION question. Include: equation selection, substitution, answer with correct unit.'
    : 'Generate an appropriate question type (describe, explain, calculate, or state as fits the subtopic).';

  return `Generate an AQA GCSE Physics question. Return ONLY valid JSON, no other text.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyLevel}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${questionTypeHint}

Requirements:
- Original question (not a past paper copy)
- Real-world context where appropriate
- Include correct physics terminology
- For calculations: show equation, substitution, answer WITH UNIT
- Use standard SI units (J, W, V, A, N, m/s, kg, etc.)
- Mark scheme with M (method) and A (accuracy) marks
- Use \\n for newlines in strings

Physics-specific rules:
- Units required for numerical answers (lose mark without)
- Equations: some given (state if needed), some must be recalled
- Significant figures should match data given

Return this exact JSON structure:
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution with units","markScheme":["M1: Selects correct equation","A1: Correct substitution","A1: Correct answer with unit"],"diagram":<optional, include for circuits, forces, waves, or any visual concept>}

${getDiagramDocsForSubject('physics')}`;
}

/**
 * Enhanced prompt for high-quality AQA Physics question generation.
 */
export function getAQAPhysicsEnhancedPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = difficulty === 'easy'
    ? `**Foundation/Early Higher (Grades 1-4):**
- 1-3 marks per question part
- Familiar contexts
- Single-step calculations
- State, name, or describe questions
- Direct application of equations`
    : difficulty === 'medium'
    ? `**Middle of Paper (Grades 4-6):**
- 3-4 marks per question part
- Apply concepts to new situations
- Multi-step calculations
- Explain with reasons
- Required practical questions`
    : `**Later Paper (Grades 6-9):**
- 5-6 marks extended response
- Evaluate or analyse
- Unfamiliar contexts
- Complex multi-step calculations
- Synthesis of multiple concepts
- Higher tier content (H)`;

  return `${AQA_PHYSICS_PRINCIPLES}

${topicGuidance}

---

## Your Task

Generate a genuinely ORIGINAL AQA GCSE Physics question with the following specifications:

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}
**Difficulty Level:**
${difficultyGuidance}

**Mark Range:** ${markRange.min}-${markRange.max} marks

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

## Critical Requirements

1. **ORIGINALITY:** Fresh question, not from past papers
2. **AUTHENTICITY:** Realistic physics context
3. **APPROPRIATE DIFFICULTY:** Cognitive demand matches marks
4. **COMPLETE MARK SCHEME:** Clear mark earning criteria
5. **CORRECT PHYSICS:** Equations, units, and concepts must be accurate

## Response Format (JSON)

{
  "content": "Question text with proper formatting",
  "marks": <total marks as integer>,
  "solution": "Step-by-step worked solution with units",
  "markScheme": ["M1: mark description", "A1: mark description"],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('physics')}

## AQA Physics Formatting Rules

### Question Content:
1. Context/scenario FIRST
2. Use "Figure 1 shows..." for diagrams
3. State given values with units clearly
4. Command word matches expected response
5. [X marks] at end of each part
6. Use \\n\\n for paragraph breaks

### Calculation Format:
- State equation used
- Show substitution
- Show rearrangement if needed
- Give answer with unit
- Use appropriate significant figures

### Mark Scheme Format:
1. One mark per array element
2. Use M1, A1, B1 labels
3. Include acceptable alternatives in brackets
4. Specify "cao" where only exact answer accepted
5. Specify "ecf" where follow-through applies
6. State unit requirement

Example calculation mark scheme:
["M1: Selects P = IV or correct equation", "A1: Substitutes P = 3 × 12 = 36", "A1: 36 W (unit required)"]

Generate a genuinely original AQA Physics question now:`;
}

/**
 * 6-mark extended response prompt for AQA Physics.
 */
export function getAQAPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const topicGuidance = AQA_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `${AQA_PHYSICS_PRINCIPLES}

${AQA_PHYSICS_MARK_SCHEME_EXAMPLES}

${topicGuidance}

---

## Your Task

Generate a 6-MARK EXTENDED RESPONSE question for AQA GCSE Physics.

**Topic:** ${topic.name}
**Subtopic:** ${selectedSubtopic}

## CRITICAL: Level of Response Marking

6-mark questions are marked using LEVEL DESCRIPTORS, NOT point-by-point:

**Level 3 (5-6 marks):**
- "A detailed and coherent explanation"
- "Logical links between clearly identified relevant points"
- "Scientific terminology used correctly throughout"
- Complete cause → effect → consequence chains
- No scientific errors

**Level 2 (3-4 marks):**
- "A reasonable explanation with some logical links"
- "Mostly correct science but may lack detail"
- Some key points missing or minor terminology errors
- Partial chains of reasoning

**Level 1 (1-2 marks):**
- "Simple statements with limited scientific understanding"
- "The logic may be unclear"
- Basic points only
- Limited or incorrect terminology

**Level 0 (0 marks):** No relevant content.

## Indicative Content Guidelines

The mark scheme lists INDICATIVE CONTENT - points the examiner expects to see:
- Students do NOT need every point for Level 3
- Look at OVERALL QUALITY, not tick-boxes
- Ignore irrelevant information
- However, incorrect statements that CONTRADICT correct answers DO lose marks

## Required Word Patterns for Different Topics

**National Grid / Transformers:**
- "step-up transformer increases voltage"
- "P = IV so high V means low I for same P"
- "power loss = I²R so low I means less power loss"
- "step-down transformer reduces voltage for safety"

**Energy Resources:**
- "renewable / non-renewable"
- "reliable / unreliable (intermittent)"
- "polluting / non-polluting"
- "environmental impact"
- "running costs vs setup costs"

**Nuclear Decay:**
- "unstable nucleus"
- "emits [alpha/beta/gamma] radiation"
- "random and unpredictable"
- "activity decreases exponentially"
- "half-life = time for activity to halve"

**Electromagnetic Spectrum:**
- "all travel at speed of light in vacuum"
- "higher frequency = shorter wavelength = more energy"
- Specific uses with specific properties

**Required Practicals:**
- "independent variable: [what you change]"
- "dependent variable: [what you measure]"
- "control variables: [what you keep the same]"
- "repeat readings and calculate mean"
- "reduce random errors"

## Response Format (JSON)

{
  "content": "Context/scenario description...\\n\\n[Command word] question ending with [6 marks]",
  "marks": 6,
  "solution": "Comprehensive Level 3 model answer with correct terminology, complete causal chains, and logical structure",
  "markScheme": [
    "Level 3 (5-6 marks): A detailed and coherent explanation with logical links between all relevant points. Correct scientific terminology used throughout.",
    "Level 2 (3-4 marks): A reasonable explanation with some logical links. Mostly correct science but may lack detail or have minor errors.",
    "Level 1 (1-2 marks): Simple statements showing limited understanding. Logic may be unclear.",
    "Indicative content:",
    "- [Key point 1 with required terminology]",
    "- [Key point 2 with required terminology]",
    "- [Key point 3 with required terminology]",
    "- [Key point 4 with required terminology]",
    "- [Key point 5 with required terminology]",
    "- [Key point 6 with required terminology]"
  ]
}

Generate a genuinely original 6-mark AQA Physics extended response question now:`;
}

/**
 * Required Practical question prompt for AQA Physics.
 * Enhanced to work with Practical type and specific subtopics.
 */
export function getAQAPhysicsRequiredPracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const equipmentList = practical.equipment?.join(', ') || 'Standard lab equipment';
  const safetyList = practical.safety?.join('; ') || 'Standard lab safety precautions';

  // Get subtopic-specific guidance
  const subtopicGuidance = getPhysicsPracticalSubtopicGuidance(subtopic, practical);

  return `${AQA_PHYSICS_PRINCIPLES}

---

## Required Practical Context

**Practical:** ${practical.name}
**Description:** ${practical.description}
**Equipment:** ${equipmentList}
**Safety:** ${safetyList}

---

${subtopicGuidance}

---

## Your Task

Generate a ${subtopic.toUpperCase()} question for this AQA GCSE Physics Required Practical.

**Difficulty:** ${difficulty}
**Mark Range:** ${markRange.min}-${markRange.max} marks

## Response Format (JSON)

{
  "content": "Question about ${subtopic.toLowerCase()} for ${practical.name}",
  "marks": <total marks as integer>,
  "solution": "Detailed answer with practical knowledge",
  "markScheme": ["B1/M1: mark description", "A1: mark description"]
}

Generate a genuinely original Required Practical ${subtopic} question now:`;
}

/**
 * Get subtopic-specific guidance for physics practicals
 */
function getPhysicsPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical): string {
  switch (subtopic) {
    case 'Method':
      return `## Method Questions

Focus on:
- Step-by-step procedure to carry out the investigation
- How to set up the equipment correctly
- What measurements to take and how to take them
- How many readings to take and why

**Common question patterns:**
- "Describe a method to investigate how [variable] affects [variable]"
- "Explain how you would use [equipment] to measure [quantity]"
- "Plan an investigation to determine [value/relationship]"

**Mark scheme patterns:**
- 1 mark per valid step in method
- Credit clear, logical sequence
- Credit named equipment
- Credit reference to repeat readings`;

    case 'Variables':
      return `## Variables Questions

Focus on:
- Independent variable (what you change)
- Dependent variable (what you measure)
- Control variables (what you keep the same and HOW)

**Common question patterns:**
- "Name the independent variable in this investigation" [1 mark]
- "What is the dependent variable?" [1 mark]
- "Name TWO variables that should be kept constant and explain why" [4 marks]

**Mark scheme patterns:**
- Named variable [1 mark]
- Explanation of how to control it [1 mark]
- Reason why it must be controlled [1 mark]`;

    case 'Equipment':
      return `## Equipment Questions

Focus on:
- Naming appropriate equipment for measurements
- Explaining WHY specific equipment is chosen
- Resolution and precision of measuring instruments
- Alternatives and their advantages/disadvantages

**Common question patterns:**
- "Name a suitable piece of equipment to measure [quantity]. Explain your choice."
- "Why is a [specific instrument] used rather than a [alternative]?"
- "What is the resolution of [instrument]?"

**For this practical, key equipment includes:**
${practical.equipment?.map(e => `- ${e}`).join('\n') || '- Standard lab equipment'}`;

    case 'Results Analysis':
      return `## Results Analysis Questions

Focus on:
- Calculating values from results (show working!)
- Identifying patterns and relationships
- Using equations with data
- Comparing results to expected values

**Common question patterns:**
- "Use the data to calculate [value]. Show your working."
- "What conclusion can be drawn from these results?"
- "Calculate the mean value and explain why taking a mean is useful."
- "Use the graph to determine [gradient/intercept/value]"

**Mark scheme patterns:**
- Correct substitution [M1]
- Correct calculation [A1]
- Correct unit [B1]
- Valid conclusion from data [B1]`;

    case 'Graph Skills':
      return `## Graph Skills Questions

Focus on:
- Choosing appropriate scales
- Plotting points accurately
- Drawing lines of best fit
- Finding gradients (including units!)
- Reading values from graphs

**Common question patterns:**
- "Plot a graph of [y-axis] against [x-axis]"
- "Draw a line of best fit"
- "Calculate the gradient of the line. State the unit."
- "Use the graph to find the value of [quantity] when [condition]"

**Gradient calculation:**
gradient = change in y / change in x = (y₂ - y₁) / (x₂ - x₁)

**Mark scheme patterns:**
- Correct axes with labels and units [B1]
- Points plotted correctly (allow ±half small square) [B1]
- Appropriate line of best fit [B1]
- Gradient calculation with two clear points read [M1]
- Correct gradient value with unit [A1]`;

    case 'Errors':
      return `## Errors Questions

Focus on:
- Random errors (vary unpredictably) vs Systematic errors (consistent offset)
- Sources of error in THIS specific practical
- Zero errors
- Parallax errors
- Human reaction time errors

**Common question patterns:**
- "Identify ONE source of error in this experiment"
- "Is this a random or systematic error? Explain."
- "How would this error affect the results?"

**For this practical, common errors include:**
- Reading scales at wrong angle (parallax)
- Heat loss to surroundings
- Timing errors (human reaction time ~0.2-0.3s)
- Equipment not zeroed correctly
- Not waiting for equilibrium`;

    case 'Improvements':
      return `## Improvements Questions

Focus on:
- How to reduce specific errors
- How to improve accuracy
- How to improve precision (more consistent results)
- How to improve reliability (valid conclusions)

**Common question patterns:**
- "Suggest ONE improvement to increase the accuracy of the results"
- "How could the reliability of the results be improved?"
- "Describe how the precision of this measurement could be increased"

**Standard improvements:**
- Take MORE repeat readings and calculate mean (reduces random error)
- Use more precise measuring equipment (smaller resolution)
- Insulate to reduce heat loss
- Use data logger instead of manual timing
- Use larger quantities/distances to reduce percentage uncertainty`;

    case 'Safety':
      return `## Safety Questions

Focus on:
- Identifying hazards in THIS practical
- Describing appropriate precautions
- Why each precaution is necessary

**Common question patterns:**
- "Identify ONE hazard in this experiment and describe a precaution" [2 marks]
- "Explain why [safety measure] is necessary"
- "What safety equipment should be worn? Explain why."

**For this practical, safety considerations:**
${practical.safety?.map(s => `- ${s}`).join('\n') || '- Follow standard lab safety procedures'}

**Generic lab safety:**
- Wear safety goggles (protect eyes from splashes/breakages)
- Tie back long hair (prevent contact with equipment)
- Stand for experiments with falling objects (avoid injury from dropped masses)
- Handle hot apparatus with tongs/heatproof gloves`;

    default:
      return '';
  }
}

/**
 * Multiple choice question prompt for AQA Physics.
 */
export function getAQAPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const difficultyGuidance = difficulty === 'easy'
    ? 'Foundation level: Test basic recall and simple understanding'
    : difficulty === 'medium'
    ? 'Standard level: Requires application of knowledge or simple reasoning'
    : 'Higher level: Requires deeper understanding, calculations, or analysis';

  return `Generate an AQA GCSE Physics MULTIPLE CHOICE question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Level: ${difficultyGuidance}

## Multiple Choice Question Requirements

1. **Stem:** Clear question or incomplete statement
2. **Four options:** A, B, C, D - only ONE is correct
3. **Distractors:** Three wrong answers based on common misconceptions
4. **Plausible:** All options should be believable to students who don't fully understand

## Good Distractor Types
- Common calculation errors (forgetting to square, wrong unit conversion)
- Misconceptions (heavier objects fall faster, current is "used up")
- Partial understanding (correct value, wrong unit)
- Related but incorrect terms

## Example Format
"A car accelerates from rest to 20 m/s in 5 seconds. What is the acceleration?

A. 4 m/s²
B. 25 m/s²
C. 100 m/s²
D. 0.25 m/s²"

(Correct: A. Distractors: B = added instead of divided, C = multiplied, D = divided wrong way)

Return this JSON structure:
{
  "content": "Question stem\\n\\nA. First option\\nB. Second option\\nC. Third option\\nD. Fourth option",
  "marks": 1,
  "solution": "The correct answer is [X] because [explanation]. Common errors: [explain why distractors are wrong]",
  "markScheme": ["B1: [Correct letter] only"]
}

Generate an original multiple choice physics question now:`;
}

/**
 * Graph interpretation question prompt for AQA Physics.
 */
export function getAQAPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];
  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-6';

  return `Generate an AQA GCSE Physics GRAPH INTERPRETATION question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Difficulty: ${difficulty}
YOU MUST allocate marks between the values specified for this difficulty level.

## Graph Question Types in Physics

1. **Reading values:** "What is the velocity at t = 3 seconds?"
2. **Gradient calculation:** "Calculate the acceleration from the graph" (gradient = rise/run)
3. **Area under graph:** "Calculate the distance travelled" (velocity-time graphs)
4. **Interpreting shape:** "Describe the motion between 0 and 5 seconds"
5. **Extrapolation/Interpolation:** "Estimate the value at..."
6. **Comparing regions:** "Compare the motion in region A and region B"

## Common Physics Graphs
- Distance-time graphs (gradient = speed)
- Velocity-time graphs (gradient = acceleration, area = distance)
- Force-extension graphs (gradient = spring constant, area = energy stored)
- I-V characteristic curves (gradient = 1/resistance for ohmic conductors)
- Cooling curves (temperature vs time)
- Decay curves (activity vs time)

## Mark Scheme for Graph Questions
- M1: Correct method (e.g., identifies need to calculate gradient)
- A1: Correct reading of values from graph
- A1: Correct calculation with appropriate precision
- A1: Correct unit

## Response Format (JSON)

You must DESCRIBE the graph data since we cannot show actual images. Include:
- Type of graph (e.g., "velocity-time graph")
- Axis labels with units
- Key data points or regions
- Any notable features (straight lines, curves, horizontal sections)

{
  "content": "Figure 1 shows a [graph type] for [context].\\n\\n[Describe the graph: The graph shows... The x-axis shows... The y-axis shows... Key points are at...]\\n\\n(a) [First question] [X marks]\\n(b) [Second question if applicable] [X marks]",
  "marks": <total marks>,
  "solution": "Step-by-step solution showing how to read/calculate from the graph",
  "markScheme": ["(a) M1: description", "(a) A1: description", "(b) M1: description"]
}

Generate an original graph interpretation physics question now:`;
}

/**
 * Calculation question prompt for AQA Physics (multi-step).
 */
export function getAQAPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  const complexityGuidance = difficulty === 'easy'
    ? '1-2 step calculation using ONE equation. Values given directly.'
    : difficulty === 'medium'
    ? '2-3 step calculation. May need to rearrange equation or use result in second calculation.'
    : '3-4 step calculation. Multiple equations, unit conversions, or derived quantities.';

  const markRange = difficulty === 'easy' ? '2-3' : difficulty === 'medium' ? '3-4' : '4-6';

  return `Generate an AQA GCSE Physics CALCULATION question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Complexity: ${complexityGuidance}
YOU MUST allocate marks between the values specified for this difficulty level.

${AQA_PHYSICS_EQUATION_SHEET}

${AQA_PHYSICS_CONSTANTS}

## Physics Calculation Structure

**Standard format:**
1. Context/scenario with given values
2. Clear question asking for a specific quantity
3. State whether equation is given or must be recalled

**Mark allocation:**
- M1: Selects correct equation
- M1: Correctly rearranges if needed
- A1: Substitutes values correctly
- A1: Correct numerical answer
- B1: Correct unit (often essential for final mark)

## CRITICAL: Use Realistic Values
- Use the constants table above for SHC, latent heat, etc.
- Ensure numerical answers come out to sensible values (2-3 sig figs)
- Always include correct units in the answer

## Response Format (JSON)

{
  "content": "Context with values...\\n\\nCalculate the [quantity]. [X marks]\\n\\n[Optional: The equation for X is given by: equation]",
  "marks": <total marks>,
  "solution": "Step 1: Write the equation\\nStep 2: Substitute values\\nStep 3: Calculate\\nAnswer = X [unit]",
  "markScheme": ["M1: Selects [equation] or states formula", "A1: Substitutes correctly [show substitution]", "A1: [answer] with unit (unit required)"]
}

## Important Rules
- Always include units in the answer
- Use appropriate significant figures (match data given)
- For Higher tier: may include standard form, rearrangement, multi-step
- Show clear working - method marks available even if arithmetic wrong

Generate an original physics calculation question now:`;
}

/**
 * "Explain" question prompt for AQA Physics (3-4 marks).
 */
export function getAQAPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an AQA GCSE Physics EXPLAIN question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Marks: 3-4

## "Explain" Question Requirements

"Explain" questions require students to give REASONS using scientific knowledge.
They must link cause and effect, not just describe what happens.

## CRITICAL: Required Word Patterns for Mark Schemes

**You MUST use these standard explanation patterns in the mark scheme:**

### Resistance and Temperature
- Thermistor: "temperature increases → more charge carriers released → resistance decreases"
- Filament lamp: "current increases → temperature increases → atoms vibrate more → electrons collide more → resistance increases"
- Metal wire: "temperature increases → ions vibrate more → more frequent collisions with electrons → resistance increases"

### Energy Transfer
- ALWAYS state: "[energy store 1] → [transfer process] → [energy store 2]"
- Include: "energy is dissipated/wasted to the surroundings"

### Pressure and Particles
- "particles gain kinetic energy / move faster"
- "more frequent collisions with container walls"
- "greater force per collision"
- "pressure = force ÷ area"

### Forces and Motion
- "resultant force is [zero/non-zero] so acceleration is [zero/non-zero]"
- "according to Newton's [first/second/third] law..."
- Terminal velocity: "air resistance increases → equals weight → forces balanced → no acceleration → constant velocity"

### Current and P.D.
- Current: "rate of flow of charge" (NOT "flow of electrons")
- P.D.: "work done per unit charge" or "energy transferred per coulomb"

### Waves
- "wave transfers energy without transferring matter"
- Refraction: "wave changes speed → changes direction"

## Mark Scheme Construction Rules

1. Underlined words are ESSENTIAL - must appear
2. Bold **and** means BOTH parts required
3. Each error/contradiction NEGATES one correct mark
4. Use "oe" for acceptable alternatives

## Example with Correct Mark Scheme

**Q: Explain why the resistance of a thermistor decreases when temperature increases. [3 marks]**

Model Answer: "When the temperature of a thermistor increases, more charge carriers are released because electrons gain enough energy to escape from atoms. This means more electrons are available to carry current, so for the same p.d., current increases and resistance decreases."

Mark Scheme:
- M1: temperature increases → more charge carriers released / electrons gain energy
- M1: more electrons available to flow / carry current
- A1: current increases (for same p.d.) **and** resistance decreases / easier for current to flow

{
  "content": "Context or scenario...\\n\\nExplain [phenomenon/observation]. [3-4 marks]",
  "marks": <3 or 4>,
  "solution": "Full explanation following the required patterns above with all key points linked by cause and effect",
  "markScheme": ["M1: [First causal link with required words]", "M1: [Second causal link]", "A1: [Conclusion with required terminology]"]
}

Generate an original physics explain question now:`;
}

/**
 * "Compare" question prompt for AQA Physics.
 */
export function getAQAPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const selectedSubtopic = subtopic || topic.subtopics[Math.floor(Math.random() * topic.subtopics.length)];

  return `Generate an AQA GCSE Physics COMPARE question. Return ONLY valid JSON.

Topic: ${topic.name} - ${selectedSubtopic}
Marks: 3-4

## "Compare" Question Requirements

Students must identify BOTH similarities AND differences.
Writing only about one item = incomplete answer = limited marks.

## Common Physics Comparisons

- Series vs parallel circuits
- Alpha, beta, and gamma radiation
- Transverse vs longitudinal waves
- Renewable vs non-renewable energy resources
- Fission vs fusion
- Reflection vs refraction
- AC vs DC current
- Conductors vs insulators
- Elastic vs plastic deformation

## Good Compare Answer Structure

**Example: "Compare alpha and beta radiation"**
- Both are types of nuclear radiation / both ionise
- Alpha is 2 protons + 2 neutrons, beta is an electron
- Alpha is more ionising, beta is less ionising
- Alpha has shorter range, beta has longer range
- Alpha is stopped by paper, beta by aluminium
- Alpha is slower, beta is faster

## Mark Scheme Structure

Each valid comparison point earns a mark. Must compare (not just describe each separately).
- "Alpha is ionising" = not a comparison (no mark)
- "Alpha is more ionising than beta" = comparison (mark awarded)

{
  "content": "Context if needed...\\n\\nCompare [X] and [Y]. [3-4 marks]",
  "marks": <3 or 4>,
  "solution": "Detailed comparison covering similarities and differences with physics terminology",
  "markScheme": ["B1: Similarity - [point about both]", "B1: Difference - [X has/is... whereas Y has/is...]", "B1: Difference - [another comparative point]"]
}

Generate an original physics compare question now:`;
}
