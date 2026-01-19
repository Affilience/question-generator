// OCR A-Level Physics A (H556) Question Generation Prompts
// Tailored to OCR A-Level specification style and assessment objectives

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
// COGNITIVE CHALLENGE BY DIFFICULTY LEVEL
// ============================================================================

const OCR_ALEVEL_PHYSICS_COGNITIVE_CHALLENGE = `
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
// OCR A-LEVEL PHYSICS SPECIFICATION DETAILS (H556)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_ALEVEL_PHYSICS_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Physics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 33-37% |
| **AO2** | Apply knowledge and understanding of scientific ideas, processes, techniques and procedures in theoretical and practical contexts | 40-45% |
| **AO3** | Analyse, interpret and evaluate scientific information, ideas and evidence, including in relation to issues, to make judgments and reach conclusions, develop and refine practical design and procedures | 20-25% |

### Mathematical Skills: 40% minimum
OCR A-Level Physics requires that at least 40% of overall marks assess mathematical skills at Level 2 or above.

### Paper Structure (Total: 270 marks)
| Paper | Name | Content | Time | Marks | Weighting |
|-------|------|---------|------|-------|-----------|
| **Paper 1** | Modelling Physics | Modules 1, 2, 3, 5 | 2h 15m | 100 | 37% |
| **Paper 2** | Exploring Physics | Modules 1, 2, 4, 6 | 2h 15m | 100 | 37% |
| **Paper 3** | Unified Physics | All modules (synoptic) | 1h 30m | 70 | 26% |
| **Practical Endorsement** | Separate pass/fail | Non-exam assessment | - | - | Reported |

### Question Types by Paper
- **Papers 1 & 2**: Short answer, extended response, calculations
- **Paper 3**: Synoptic questions linking multiple topics, extended response (Level of Response)
`;

const OCR_ALEVEL_PHYSICS_PAGS = `
## OCR Practical Activity Groups (PAGs) - 12 Groups

Unlike AQA's specific required practicals, OCR uses flexible Practical Activity Groups (PAGs).
Students must complete activities from each group, but centres choose specific experiments.

| PAG | Group Name | Example Activities |
|-----|------------|-------------------|
| **PAG1** | Measuring Motion | Acceleration of free fall, motion graphs, constant velocity |
| **PAG2** | Forces | Equilibrium investigations, moments, centre of mass |
| **PAG3** | Materials | Young modulus, stress-strain, spring constants |
| **PAG4** | Electrical Circuits | Resistivity, internal resistance, potential dividers |
| **PAG5** | Waves | Speed of sound, diffraction, polarisation, interference |
| **PAG6** | Quantum Physics | Photoelectric effect, LED threshold voltage |
| **PAG7** | Thermal Physics | Specific heat capacity, gas laws, absolute zero |
| **PAG8** | Simple Harmonic Motion | Pendulum, mass-spring systems, resonance |
| **PAG9** | Circular Motion | Centripetal force investigations |
| **PAG10** | Electric Fields | Capacitor charge/discharge, RC time constant |
| **PAG11** | Magnetic Fields | Magnetic flux, electromagnetic induction |
| **PAG12** | Nuclear Physics | Radioactive decay, inverse square law, absorption |

### Practical Skills Assessed (in written papers)
1. **Planning** - Identifying variables, selecting apparatus, writing methods
2. **Implementing** - Following procedures, making measurements safely
3. **Analysis** - Processing data, plotting graphs, calculating uncertainties
4. **Evaluation** - Identifying errors, suggesting improvements, drawing conclusions
`;

const OCR_ALEVEL_PHYSICS_COMMAND_WORDS = `
## OCR A-Level Physics Command Words (Official Definitions)

### Calculation Commands
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Calculate** | Obtain a numerical answer, showing relevant working. If the answer has a unit, this must be included | 3-5 |
| **Determine** | Obtain an answer using data or information provided in some form (may be experimental data, a graph, or from the question) | 3-5 |
| **Estimate** | Give an approximate value, showing any assumptions made | 2-3 |
| **Show that** | Provide evidence to verify the statement. Working must be shown for full marks | 2-4 |

### Explanation Commands
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Explain** | Give reasons for; this may include linking cause and effect or making relationships clear | 2-4 |
| **Describe** | Give an account in words; when applied to phenomena, observations should be given but no reasons needed | 2-3 |
| **State** | Express in clear terms; usually a brief answer with no explanation required | 1 |
| **Define** | Give the meaning of a term; often requires the correct technical definition | 1-2 |
| **Suggest** | Apply knowledge and understanding to a new or unfamiliar situation | 2-4 |
| **Justify** | Give reasons for a conclusion; use evidence to support a viewpoint | 2-4 |
| **Evaluate** | Make a judgement based on criteria or using evidence to support the judgement | 4-6 |
| **Discuss** | Consider different aspects of a topic and how they relate; often requires pros/cons or multiple viewpoints | 4-6 |
| **Compare** | Identify similarities and/or differences; must address both items being compared | 2-4 |

### Graph/Diagram Commands
| Command | Meaning | Typical Marks |
|---------|---------|---------------|
| **Sketch** | Make a simple drawing showing the main features; proportions should be reasonably accurate | 1-2 |
| **Draw** | Produce an accurate diagram; labels and precise detail required | 2-3 |
| **Plot** | Mark data points on a graph with scales and labels; draw line or curve of best fit | 3-4 |
| **Outline** | Set out main characteristics briefly | 2-3 |
`;

// OCR A-Level Physics guiding principles
const OCR_ALEVEL_PHYSICS_PRINCIPLES = `
OCR A-Level Physics A Assessment Objectives:
- AO1: Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures (33-37%)
- AO2: Apply knowledge and understanding of scientific ideas, processes, techniques and procedures (40-45%)
- AO3: Analyse, interpret and evaluate scientific information, ideas and evidence (20-25%)

OCR A-Level Physics Command Words:
- Calculate: Obtain a numerical answer showing relevant working
- Compare: Identify similarities and/or differences
- Define: Give the meaning of a term
- Describe: Give an account in words
- Determine: Obtain an answer using given data or information
- Estimate: Give an approximate value
- Evaluate: Make a judgement based on evidence
- Explain: Give reasons for
- Justify: Give reasons for a conclusion
- Outline: Set out main characteristics
- Show that: Provide structured evidence to verify the statement
- Sketch: Make a simple freehand drawing
- State: Express in clear terms
- Suggest: Apply knowledge to new situations

OCR A-Level Mark Scheme Conventions:
- Answer must include working for calculation marks
- Units required in final answer (mark penalty if missing)
- Significant figures: final answer to 2-3 sf unless data suggests otherwise
- Extended response questions (6 marks) assessed using level of response marking
- QWC (Quality of Written Communication) assessed in extended responses
- 'ECF' marks for error carried forward allowed

**OCR A-Specific Characteristics (vs AQA/Edexcel):**
- Integrates PRACTICAL WORK with theoretical understanding
- "Physics in Depth" papers test NUANCED UNDERSTANDING
- More focus on APPLIED PHYSICS (especially healthcare/medical contexts)
- Medical school aspirants benefit from OCR's applied physics focus
- Uses FLEXIBLE PAG model (no mandatory specific practicals)
- Astrophysics integrated into core (Module 5) - not optional like AQA
- Medical imaging (X-rays, tracers, PET, ultrasound) in CORE content
- Does NOT cover: eddy currents, transformer inefficiencies, high-voltage transmission
- Electromagnetism: F = BILsinθ (angle-dependent) vs AQA's F = BIL
- Uses "velocity selector" application (AQA uses cyclotron)
- Considered more challenging overall
- Grade boundaries historically lower (to achieve same grade)

OCR Practical Skills:
- Practical Activity Groups (PAGs) - more flexible than AQA's Required Practicals
- No mandated specific practicals - centres choose their approach
- Questions test planning, implementation, analysis and evaluation
- Data analysis often includes uncertainty calculations

Paper Structure:
- Paper 1 (Modelling Physics): Modules 1, 2, 3, 5 - 2h15m, 100 marks
- Paper 2 (Exploring Physics): Modules 1, 2, 4, 6 - 2h15m, 100 marks
- Paper 3 (Unified Physics): All modules, synoptic questions - 1h30m, 70 marks
`;

// Topic-specific guidance for OCR A-Level Physics
const ALEVEL_PHYSICS_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-physics-practical-skills': `
Module 1: Development of Practical Skills in Physics:
- Planning experiments with clear methodology
- Identifying and controlling variables
- Selecting appropriate apparatus
- Recording observations in tables
- Plotting graphs with error bars
- Calculating uncertainties (absolute and percentage)
- Combining uncertainties in calculations
- Evaluating experimental procedures
- Suggesting improvements to methods
OCR often tests: uncertainty calculations, error analysis, experimental evaluation
`,
  'ocr-alevel-physics-foundations': `
Module 2: Foundations of Physics:
- SI base units and derived units
- Checking homogeneity of equations
- Scalar and vector quantities
- Adding and resolving vectors
- Graphical methods for vectors
- Orders of magnitude estimates
- Significant figures and precision
OCR often tests: unit analysis, vector resolution, estimation
`,
  'ocr-alevel-physics-forces-motion': `
Module 3: Forces and Motion:
- Kinematics: SUVAT equations and graphs
- Projectile motion with independent components
- Free-body diagrams and equilibrium
- Moments, couples and torque
- Density, pressure and upthrust
- Work, energy and power calculations
- Hooke's law and Young modulus
- Stress-strain graphs and material properties
- Newton's laws and momentum
- Conservation of momentum in collisions
OCR often tests: projectile motion, moments, Young modulus, momentum problems
`,
  'ocr-alevel-physics-electrons-waves': `
Module 4: Electrons, Waves and Photons:
- Current, charge and drift velocity: I = nAvq
- Potential difference and EMF
- Resistance and Ohm's law
- I-V characteristics of components
- Resistivity and its temperature dependence
- Electrical circuits and Kirchhoff's laws
- Potential dividers with sensors
- Internal resistance: ε = IR + Ir
- Progressive wave properties
- Refraction and Snell's law
- Total internal reflection in optical fibres
- Superposition and interference
- Diffraction and polarisation
- Quantum physics: photoelectric effect
- Wave-particle duality and de Broglie
- Energy levels and line spectra
OCR often tests: circuit analysis, wave calculations, photoelectric equation
`,
  'ocr-alevel-physics-newtonian-astro': `
Module 5: Newtonian World and Astrophysics:
- Thermal physics: temperature and internal energy
- Specific heat capacity and latent heat
- Ideal gas equation: pV = nRT = NkT
- Kinetic theory: pV = ⅓Nm<c²>
- Mean kinetic energy: E = 3/2 kT
- Circular motion: centripetal force and acceleration
- SHM: a = -ω²x, displacement/velocity/acceleration
- Energy in SHM and resonance
- Damped and forced oscillations
- Gravitational fields: g = GM/r²
- Gravitational potential: V = -GM/r
- Orbital mechanics and Kepler's laws
- Stellar evolution and HR diagram
- Doppler effect and Hubble's law
- Big Bang and cosmic microwave background
OCR often tests: gas laws, SHM analysis, orbital calculations, cosmology
`,
  'ocr-alevel-physics-particles-medical': `
Module 6: Particles and Medical Physics:
- Capacitance and energy stored
- Capacitor charge/discharge: Q = Q₀e^(-t/RC)
- Electric fields: E = V/d, E = kQ/r²
- Coulomb's law and electric potential
- Comparison with gravitational fields
- Magnetic fields: F = BIL, F = BQv
- Electromagnetic induction: ε = -NdΦ/dt
- Faraday's and Lenz's laws
- Transformers and AC
- Nuclear structure and radioactive decay
- Radioactive decay: N = N₀e^(-λt), t½ = ln2/λ
- Binding energy and E = mc²
- Fission and fusion
- Particle physics: Standard Model
- Quarks, leptons and hadrons
- Feynman diagrams
- X-ray production and attenuation
- CT, ultrasound, PET and MRI
OCR often tests: capacitor discharge, field calculations, decay, medical imaging
`
};

// Generate compact prompt for auto/standard questions
export function getOCRALevelPhysicsCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Physics examiner creating an exam-style question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

${OCR_ALEVEL_PHYSICS_COGNITIVE_CHALLENGE}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (2-3 marks): Direct recall or single-step calculation, tests one concept
- Medium (4-5 marks): Multi-step calculation or explanation, links concepts
- Hard (6-8 marks): Complex multi-part question requiring synthesis of ideas across topics, unfamiliar contexts, extended analysis or evaluation

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

Create ONE exam-style question that:
1. Uses authentic OCR A-Level Physics language and command words
2. Tests conceptual understanding appropriate to A-Level standard
3. Requires proper physics reasoning and mathematical skills
4. Has clear mark allocation matching OCR conventions

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with part labels (a), (b), etc. and mark allocations]

**Mark Scheme:**
[Detailed marking points with mark allocations, using OCR conventions]

**Explanation:**
[Full worked solution with clear physics reasoning at A-Level standard]`;
}

// Generate extended response question prompt
export function getOCRALevelPhysicsExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a 6-mark extended response question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

Create ONE 6-mark extended response question that:
1. Requires a structured, coherent explanation or discussion
2. Assesses Quality of Written Communication (QWC)
3. Uses OCR command words like 'Explain', 'Discuss', 'Evaluate'
4. Links multiple physics concepts
5. Tests deeper understanding rather than just recall

The question should be assessed using level of response marking:
Level 3 (5-6 marks): Comprehensive, well-structured response with clear physics reasoning
Level 2 (3-4 marks): Good response with mostly correct physics but may lack detail
Level 1 (1-2 marks): Limited response with some relevant physics

OUTPUT FORMAT (use exact headers):
**Question:**
[6-mark extended response question with context/scenario]

**Mark Scheme:**
[Level descriptors and indicative content points]

**Explanation:**
[Model answer demonstrating Level 3 response with excellent physics reasoning]`;
}

// Generate multiple choice question prompt
export function getOCRALevelPhysicsMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a multiple choice question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE multiple choice question that:
1. Has exactly 4 options (A, B, C, D)
2. Has only ONE correct answer
3. Includes plausible distractors based on common misconceptions
4. Tests understanding at A-Level standard
5. May involve calculation (with distractors from common errors)

OUTPUT FORMAT (use exact headers):
**Question:**
[Question stem]
A: [Option A]
B: [Option B]
C: [Option C]
D: [Option D]

**Mark Scheme:**
Correct answer: [Letter]
[Brief justification and why distractors are wrong]

**Explanation:**
[Full explanation of the physics involved and working for any calculation]`;
}

// Generate calculation question prompt
export function getOCRALevelPhysicsCalculationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a calculation question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE FOR CALCULATIONS:
- Easy: Single equation, straightforward substitution (3-4 marks)
- Medium: Multi-step calculation, may need to derive intermediate values (4-6 marks)
- Hard: Complex calculation with multiple stages, unit conversion, or analysis (6-8 marks)

Create ONE calculation question that:
1. Provides realistic numerical data with appropriate units
2. Requires clear mathematical working
3. Tests both the physics concept and mathematical ability
4. Has values that produce sensible answers with 2-3 significant figures

OUTPUT FORMAT (use exact headers):
**Question:**
[Calculation question with numerical data, context, and mark allocation]

**Mark Scheme:**
[Step-by-step marking points: selecting equation (1), substitution (1), calculation (1), answer with units (1)]

**Explanation:**
[Complete worked solution with every step shown, appropriate units throughout]

**Diagram (optional):**
[Include a diagram JSON if the question benefits from a visual representation]

${getDiagramDocsForSubject('physics')}`;
}

// Generate explain question prompt
export function getOCRALevelPhysicsExplainPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating an explanation question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE 'explain' question that:
1. Tests conceptual understanding of physics principles
2. Requires linking of cause and effect
3. Uses OCR command words appropriately ('Explain', 'Describe', 'State and explain')
4. May include a practical context or scenario

DIFFICULTY GUIDE:
- Easy: Explain a single concept or definition (2-3 marks)
- Medium: Explain a process or relationship (3-4 marks)
- Hard: Explain a complex phenomenon linking multiple concepts (4-6 marks)

OUTPUT FORMAT (use exact headers):
**Question:**
[Explanation question with context and mark allocation]

**Mark Scheme:**
[Key marking points that must be included for full marks]

**Explanation:**
[Model answer with clear physics reasoning using technical vocabulary]`;
}

// Generate graph/data analysis question prompt
export function getOCRALevelPhysicsGraphPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a graph or data analysis question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE graph or data analysis question that:
1. Involves interpretation of graphical data
2. May require calculating gradient or area under a curve
3. Tests understanding of relationships between variables
4. May include uncertainty or error analysis
5. Uses realistic physics data

Question types could include:
- Sketch a graph and explain its shape
- Use a graph to determine a physical quantity
- Analyse experimental data to verify a relationship
- Calculate percentage uncertainty from graph
- Determine gradient with appropriate units

OUTPUT FORMAT (use exact headers):
**Question:**
[Graph/data analysis question with clear instructions and mark allocation]

**Mark Scheme:**
[Marking points including: reading values correctly, gradient calculation method, units, interpretation]

**Explanation:**
[Complete analysis with worked calculation and interpretation of the physics]`;
}

// Generate compare question prompt
export function getOCRALevelPhysicsComparePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a comparison question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

Create ONE comparison question that:
1. Asks students to compare two related physics concepts, phenomena, or systems
2. Requires identification of both similarities and differences
3. Tests deeper understanding of underlying principles
4. Uses appropriate command words ('Compare', 'Distinguish between')

Possible comparisons in this topic:
- Gravitational and electric fields
- Series and parallel circuits
- Transverse and longitudinal waves
- Alpha, beta and gamma radiation
- Elastic and inelastic collisions
- Different types of damping
- Different imaging techniques

OUTPUT FORMAT (use exact headers):
**Question:**
[Comparison question with specific focus and mark allocation]

**Mark Scheme:**
[Key similarities and differences expected, with marks for each valid point]

**Explanation:**
[Model answer with clear comparisons organised in a logical structure]`;
}

// Generate practical/experimental question prompt
export function getOCRALevelPhysicsPracticalPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a practical/experimental question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

OCR Practical Assessment:
- PAGs (Practical Activity Groups) are assessed in written papers
- Questions test planning, implementing, analysing and evaluating
- Key skills: selecting apparatus, identifying variables, uncertainty calculations

Create ONE practical-based question that:
1. Relates to a realistic physics experiment
2. Tests experimental skills through written assessment
3. May involve planning an experiment, analysing data, or evaluating a method
4. Includes consideration of uncertainties and improvements

Question types could include:
- Describe how to measure a physical quantity
- Suggest improvements to an experimental procedure
- Identify and explain sources of uncertainty
- Calculate uncertainties from given data
- Evaluate experimental techniques

OUTPUT FORMAT (use exact headers):
**Question:**
[Practical-based question with context and mark allocation]

**Mark Scheme:**
[Key points expected including: apparatus selection, method, safety, improvements, uncertainties]

**Explanation:**
[Model answer demonstrating good experimental practice and understanding]`;
}

// ============================================================================
// OCR A-LEVEL PHYSICS A - COMPLETE SPECIFICATION COVERAGE (H556)
// ============================================================================

/**
 * Complete Module Structure for OCR A-Level Physics A
 * Based on the official OCR specification for first teaching 2015
 * Specification code: H556 (A-Level), H156 (AS)
 */
const OCR_ALEVEL_PHYSICS_COMPLETE_MODULES = `
# OCR A-Level Physics A (H556) - Complete Specification

## Overview
- Qualification: A-Level (Linear)
- First teaching: September 2015
- First assessment: June 2017
- Total marks: 270 (written papers)
- Practical Endorsement: Reported separately

## Module Structure

### Module 1: Development of Practical Skills in Physics
This module underpins all other modules. Skills are assessed in written papers.

**1.1 Practical Skills Assessed in a Written Examination**
- 1.1.1 Planning
  - Designing experiments
  - Identifying variables (independent, dependent, control)
  - Selecting appropriate apparatus and techniques
  - Identifying potential hazards and safety precautions

- 1.1.2 Implementing
  - Following written instructions
  - Making accurate observations and measurements
  - Recording data in appropriate formats

- 1.1.3 Analysis
  - Processing, analysing and interpreting data
  - Plotting and interpreting graphs
  - Using appropriate significant figures
  - Calculating and using uncertainties

- 1.1.4 Evaluation
  - Identifying sources of error
  - Anomalies and their treatment
  - Limitations of experimental procedures
  - Suggesting improvements

**1.2 Practical Skills Assessed in the Practical Endorsement**
- 12 Practical Activity Groups (PAGs)
- Competency-based assessment
- Reported as Pass or Not Classified
- Does not contribute to A-Level grade

---

### Module 2: Foundations of Physics

**2.1 Physical Quantities and Units**
- 2.1.1 Physical quantities
  - Scalar and vector quantities
  - SI base quantities and units
  - Derived units
  - Prefixes from pico (p) to tera (T)

- 2.1.2 SI units
  - Seven SI base units
  - Derived units expressed in base units
  - Checking homogeneity of physical equations

**2.2 Making Measurements and Analysing Data**
- 2.2.1 Measurements and uncertainties
  - Accuracy and precision
  - Random and systematic errors
  - Absolute and percentage uncertainties
  - Combining uncertainties

- 2.2.2 Graphs
  - Linear and non-linear graphs
  - Determining gradient and y-intercept
  - Linearising non-linear relationships

**2.3 Nature of Quantities**
- 2.3.1 Scalars and vectors
  - Vector addition and subtraction
  - Resolution of vectors
  - Equilibrium of coplanar forces

---

### Module 3: Forces and Motion

**3.1 Motion**
- 3.1.1 Kinematics
  - Displacement, velocity, acceleration
  - Graphs of motion
  - SUVAT equations for uniformly accelerated motion
  - Free fall and g

- 3.1.2 Projectile motion
  - Independence of horizontal and vertical motion
  - Trajectory calculations

**3.2 Forces in Action**
- 3.2.1 Dynamics
  - Newton's laws of motion
  - Linear momentum p = mv
  - Impulse = change in momentum

- 3.2.2 Equilibrium
  - Moments and couples
  - Conditions for equilibrium
  - Centre of mass

- 3.2.3 Density and pressure
  - Density = mass/volume
  - Pressure in fluids
  - Upthrust (Archimedes' principle)

**3.3 Work, Energy and Power**
- 3.3.1 Work and conservation of energy
  - Work done W = Fs cos θ
  - Kinetic and gravitational potential energy
  - Conservation of mechanical energy
  - Efficiency

- 3.3.2 Power
  - Power = work done / time
  - P = Fv

**3.4 Materials**
- 3.4.1 Springs and Hooke's law
  - Force-extension characteristics
  - Elastic limit
  - Spring constant k
  - Elastic potential energy = ½kx²

- 3.4.2 Stress, strain and Young modulus
  - Stress σ = F/A
  - Strain ε = ΔL/L
  - Young modulus E = σ/ε
  - Stress-strain curves

**3.5 Newton's Laws of Motion and Momentum**
- 3.5.1 Newton's laws
  - First law: inertia
  - Second law: F = ma (F = dp/dt)
  - Third law: action-reaction pairs

- 3.5.2 Collisions
  - Conservation of momentum
  - Elastic and inelastic collisions
  - Perfectly inelastic collisions (objects stick together)

---

### Module 4: Electrons, Waves and Photons

**4.1 Charge and Current**
- 4.1.1 Charge
  - Elementary charge
  - Conservation of charge
  - Current as rate of flow of charge: I = ΔQ/Δt

- 4.1.2 Mean drift velocity
  - I = nAvq
  - Comparison of drift velocities in metals and semiconductors

**4.2 Energy, Power and Resistance**
- 4.2.1 Circuit symbols and conventions
  - Standard circuit symbols
  - Series and parallel circuits

- 4.2.2 Potential difference, EMF and power
  - V = W/Q
  - EMF = energy per unit charge from source
  - P = IV = I²R = V²/R

- 4.2.3 Resistance and Ohm's law
  - R = V/I
  - I-V characteristics
  - Resistors in series and parallel

- 4.2.4 Resistivity
  - ρ = RA/L
  - Temperature dependence

**4.3 Electrical Circuits**
- 4.3.1 Series and parallel circuits
  - Current and voltage rules
  - Combined resistance calculations

- 4.3.2 Internal resistance and EMF
  - Terminal p.d. and lost volts
  - ε = I(R + r)
  - Power transfer

- 4.3.3 Potential dividers
  - V_out = R₂/(R₁+R₂) × V_in
  - Sensors in potential dividers (LDR, thermistor)

**4.4 Waves**
- 4.4.1 Wave properties
  - Amplitude, frequency, wavelength, period
  - Phase and phase difference
  - Wave equation: v = fλ

- 4.4.2 Electromagnetic waves
  - EM spectrum
  - Properties common to all EM waves
  - Applications of different regions

- 4.4.3 Superposition and interference
  - Principle of superposition
  - Path difference and phase difference
  - Young's double-slit experiment
  - Coherence

- 4.4.4 Stationary waves
  - Formation of stationary waves
  - Nodes and antinodes
  - Harmonics on strings and in pipes

**4.5 Quantum Physics**
- 4.5.1 Photons
  - E = hf
  - Electromagnetic radiation as photons
  - The electronvolt (eV)

- 4.5.2 Photoelectric effect
  - Work function φ
  - hf = φ + ½mv²_max
  - Threshold frequency
  - Stopping potential

- 4.5.3 Wave-particle duality
  - de Broglie wavelength: λ = h/mv = h/p
  - Electron diffraction

- 4.5.4 Energy levels and spectra
  - Discrete energy levels
  - Ground state and excited states
  - ΔE = hf for photon emission/absorption
  - Line spectra

---

### Module 5: Newtonian World and Astrophysics

**5.1 Thermal Physics**
- 5.1.1 Temperature and thermal equilibrium
  - Absolute temperature scale
  - Thermal equilibrium
  - Internal energy

- 5.1.2 Solids, liquids and gases
  - Specific heat capacity: Q = mcΔT
  - Specific latent heat: Q = mL
  - Changes of state

- 5.1.3 Ideal gases
  - Gas laws: pV = nRT = NkT
  - Kinetic theory: pV = ⅓Nm<c²>
  - r.m.s. speed
  - Mean kinetic energy: ½m<c²> = 3/2 kT

**5.2 Circular Motion**
- 5.2.1 Kinematics of circular motion
  - Angular velocity: ω = 2πf = 2π/T
  - Linear and angular velocity: v = ωr

- 5.2.2 Centripetal force and acceleration
  - a = v²/r = ω²r
  - F = mv²/r = mω²r
  - Applications (banked tracks, orbits)

**5.3 Oscillations**
- 5.3.1 Simple harmonic motion
  - Definition: a = -ω²x
  - Displacement: x = A cos(ωt)
  - Velocity: v = -Aω sin(ωt) = ±ω√(A²-x²)
  - Acceleration: a = -Aω² cos(ωt)
  - Mass-spring and pendulum systems

- 5.3.2 Energy in SHM
  - KE = ½mv² = ½mω²(A²-x²)
  - PE = ½mω²x²
  - Total energy = ½mω²A²

- 5.3.3 Damping and resonance
  - Light, heavy and critical damping
  - Free and forced oscillations
  - Resonance and natural frequency
  - Resonance curves

**5.4 Gravitational Fields**
- 5.4.1 Point and spherical masses
  - Newton's law of gravitation: F = GMm/r²
  - Gravitational field strength: g = F/m = GM/r²
  - Uniform and radial fields

- 5.4.2 Gravitational potential
  - V = -GM/r (negative by convention)
  - ΔW = mΔV
  - Equipotential surfaces
  - Relationship: g = -dV/dr

- 5.4.3 Orbits
  - Orbital speed and period
  - Kepler's laws
  - Geostationary satellites

**5.5 Astrophysics and Cosmology**
- 5.5.1 Stars
  - Luminosity and apparent brightness
  - Stefan-Boltzmann law: L = 4πr²σT⁴
  - Wien's displacement law: λ_max T = 2.898 × 10⁻³ m K
  - Stellar classification

- 5.5.2 Hertzsprung-Russell diagram
  - Main sequence
  - Red giants and white dwarfs
  - Stellar evolution

- 5.5.3 Cosmology
  - Doppler effect: Δλ/λ = v/c
  - Hubble's law: v = H₀d
  - Age of universe ≈ 1/H₀
  - Big Bang theory
  - Cosmic microwave background radiation

---

### Module 6: Particles and Medical Physics

**6.1 Capacitors**
- 6.1.1 Capacitance
  - C = Q/V
  - Parallel plate capacitor: C = ε₀εᵣA/d
  - Capacitors in series and parallel

- 6.1.2 Energy stored
  - W = ½QV = ½CV² = ½Q²/C

- 6.1.3 Charging and discharging
  - Q = Q₀e^(-t/RC)
  - I = I₀e^(-t/RC)
  - V = V₀e^(-t/RC) (discharge)
  - Time constant τ = RC

**6.2 Electric Fields**
- 6.2.1 Point and spherical charges
  - Coulomb's law: F = kQ₁Q₂/r² where k = 1/(4πε₀)
  - Electric field strength: E = F/q = kQ/r²

- 6.2.2 Uniform electric fields
  - E = V/d
  - Motion of charged particles in fields

- 6.2.3 Electric potential
  - V = kQ/r
  - Work done: W = qΔV
  - Equipotential surfaces
  - E = -dV/dr

- 6.2.4 Comparison with gravitational fields
  - Similarities and differences
  - Mathematical parallels

**6.3 Electromagnetism**
- 6.3.1 Magnetic fields
  - Magnetic flux density B
  - Force on current-carrying conductor: F = BIL sin θ
  - Force on moving charge: F = BQv sin θ

- 6.3.2 Motion of charged particles
  - Circular motion in magnetic field: r = mv/(BQ)
  - Velocity selector
  - Mass spectrometer

- 6.3.3 Electromagnetic induction
  - Magnetic flux: Φ = BA cos θ
  - Faraday's law: ε = -N dΦ/dt
  - Lenz's law
  - Applications (generators, transformers)

**6.4 Nuclear and Particle Physics**
- 6.4.1 Atomic structure
  - Rutherford scattering
  - Nuclear notation
  - Isotopes

- 6.4.2 Fundamental particles
  - Quarks and leptons
  - Hadrons (baryons and mesons)
  - The Standard Model
  - Feynman diagrams

- 6.4.3 Radioactivity
  - α, β⁻, β⁺ and γ radiation
  - Properties and detection
  - Radioactive decay equations

- 6.4.4 Nuclear decay
  - N = N₀e^(-λt)
  - A = λN
  - Half-life: t½ = ln2/λ
  - Carbon dating

- 6.4.5 Nuclear fission and fusion
  - Binding energy per nucleon
  - E = mc² (mass-energy equivalence)
  - Fission products
  - Conditions for fusion

**6.5 Medical Imaging**
- 6.5.1 X-ray imaging
  - X-ray production (bremsstrahlung, characteristic)
  - Attenuation: I = I₀e^(-μx)
  - Contrast and image enhancement
  - CT scanning

- 6.5.2 Diagnostic methods using radioactivity
  - Technetium-99m as a tracer
  - Gamma camera
  - PET scanning

- 6.5.3 Ultrasound
  - Piezoelectric effect
  - A-scan and B-scan
  - Acoustic impedance: Z = ρc
  - Reflection at boundaries

- 6.5.4 Magnetic resonance imaging (MRI)
  - Nuclear magnetic resonance
  - Precession and Larmor frequency
  - Relaxation times
  - Advantages over other techniques
`;

// ============================================================================
// DETAILED ASSESSMENT OBJECTIVES WITH WEIGHTINGS
// ============================================================================

const OCR_ALEVEL_PHYSICS_DETAILED_AOS = `
# OCR A-Level Physics Assessment Objectives - Detailed Breakdown

## AO1: Demonstrate Knowledge and Understanding (33-37%)

### What AO1 Assesses:
- Knowledge of scientific ideas, processes, techniques and procedures
- Understanding of scientific terminology and nomenclature
- Recall of equations and physical constants
- Knowledge of SI units and derived units

### AO1 Sub-categories:

**AO1.1 - Recall of Knowledge**
- Definitions of physical quantities
- Statement of laws and principles
- Recall of standard equations
- Knowledge of apparatus and techniques

**AO1.2 - Understanding of Concepts**
- Explaining the meaning of terms
- Describing physical processes
- Understanding relationships between quantities
- Recognising appropriate units

### Example AO1 Question Types:
- "State Newton's second law of motion" (2 marks)
- "Define specific heat capacity" (2 marks)
- "State the equation for gravitational potential" (1 mark)
- "Name the fundamental particle exchanged in electromagnetic interactions" (1 mark)

---

## AO2: Apply Knowledge and Understanding (40-45%)

### What AO2 Assesses:
- Application of knowledge to familiar and unfamiliar contexts
- Use of mathematical skills
- Selection and use of appropriate equations
- Practical application of physics concepts

### AO2 Sub-categories:

**AO2.1 - Application in Theoretical Contexts**
- Using equations to solve problems
- Applying principles to new situations
- Making predictions based on physics knowledge
- Linking different areas of physics

**AO2.2 - Application in Practical Contexts**
- Designing experiments
- Selecting appropriate apparatus
- Making and recording measurements
- Processing experimental data

### Example AO2 Question Types:
- "Calculate the resultant force on the object" (3 marks)
- "Use the graph to determine the spring constant" (4 marks)
- "Suggest a suitable method to measure the resistivity" (4 marks)
- "Apply conservation of momentum to find the final velocity" (4 marks)

---

## AO3: Analyse, Interpret and Evaluate (20-25%)

### What AO3 Assesses:
- Analysis of experimental data
- Interpretation of graphs and tables
- Evaluation of experimental procedures
- Critical analysis of scientific claims
- Drawing conclusions from evidence

### AO3 Sub-categories:

**AO3.1 - Analysis of Data**
- Interpreting graphical information
- Calculating gradients and intercepts
- Identifying patterns and trends
- Using data to verify relationships

**AO3.2 - Evaluation and Conclusions**
- Identifying sources of uncertainty
- Assessing validity of conclusions
- Suggesting improvements to procedures
- Making judgements based on evidence
- Discussing limitations

### Example AO3 Question Types:
- "Evaluate the experimental procedure and suggest improvements" (6 marks)
- "Analyse the data to determine whether it supports the hypothesis" (4 marks)
- "Discuss the relative advantages and disadvantages of the two methods" (6 marks)
- "Calculate the percentage uncertainty in the measurement" (3 marks)

---

## Assessment Objective Weightings by Paper

| Paper | AO1 (%) | AO2 (%) | AO3 (%) |
|-------|---------|---------|---------|
| Paper 1 (Modelling Physics) | 30-34 | 42-46 | 22-26 |
| Paper 2 (Exploring Physics) | 30-34 | 40-44 | 24-28 |
| Paper 3 (Unified Physics) | 38-42 | 36-40 | 20-24 |
| **Overall** | **33-37** | **40-45** | **20-25** |

---

## Mathematical Skills Requirement: 40% minimum

The assessment of mathematical skills at Level 2 or above must comprise at least 40% of the overall marks.

### Mathematical Skills Include:
- Arithmetic and numerical computation
- Handling data (graphs, tables, statistics)
- Algebra (rearranging equations, solving simultaneous equations)
- Geometry and trigonometry
- Calculus (differentiation and integration concepts)
`;

// ============================================================================
// PAPER STRUCTURE - COMPONENTS 01, 02, 03
// ============================================================================

const OCR_ALEVEL_PHYSICS_PAPER_STRUCTURE = `
# OCR A-Level Physics Paper Structure

## Component 01: Modelling Physics (H556/01)
**Duration:** 2 hours 15 minutes
**Total Marks:** 100
**Weighting:** 37% of A-Level

### Content Coverage:
- Module 1: Development of practical skills in physics
- Module 2: Foundations of physics
- Module 3: Forces and motion
- Module 5: Newtonian world and astrophysics

### Question Structure:
- Section A: 15 marks of multiple choice (15 questions)
- Section B: 85 marks of structured questions
  - Short answer questions (2-4 marks)
  - Calculation questions (3-6 marks)
  - Extended response questions (6 marks)

### Key Topics Typically Examined:
- Kinematics and projectile motion
- Forces and equilibrium
- Work, energy and power
- Materials (Young modulus, stress-strain)
- Momentum and collisions
- Thermal physics (gas laws, kinetic theory)
- Circular motion
- Simple harmonic motion
- Gravitational fields
- Astrophysics and cosmology

### Assessment Balance:
- AO1: 30-34%
- AO2: 42-46%
- AO3: 22-26%
- Mathematical skills: Approximately 42%

---

## Component 02: Exploring Physics (H556/02)
**Duration:** 2 hours 15 minutes
**Total Marks:** 100
**Weighting:** 37% of A-Level

### Content Coverage:
- Module 1: Development of practical skills in physics
- Module 2: Foundations of physics
- Module 4: Electrons, waves and photons
- Module 6: Particles and medical physics

### Question Structure:
- Section A: 15 marks of multiple choice (15 questions)
- Section B: 85 marks of structured questions
  - Short answer questions (2-4 marks)
  - Calculation questions (3-6 marks)
  - Extended response questions (6 marks)

### Key Topics Typically Examined:
- Electrical circuits (including internal resistance)
- Potential dividers with sensors
- Wave properties and interference
- Quantum physics (photoelectric effect, wave-particle duality)
- Capacitors (charging/discharging)
- Electric fields
- Magnetic fields and electromagnetic induction
- Nuclear and particle physics
- Medical imaging (X-rays, ultrasound, PET, MRI)

### Assessment Balance:
- AO1: 30-34%
- AO2: 40-44%
- AO3: 24-28%
- Mathematical skills: Approximately 38%

---

## Component 03: Unified Physics (H556/03)
**Duration:** 1 hour 30 minutes
**Total Marks:** 70
**Weighting:** 26% of A-Level

### Content Coverage:
- All modules (1-6)
- Synoptic assessment linking different areas
- Practical skills in context

### Question Structure:
- Section A: 15 marks of multiple choice (15 questions)
- Section B: 55 marks of structured questions
  - Synoptic questions linking multiple topics
  - Extended response questions (6 marks)
  - Questions with novel contexts

### Synoptic Nature:
Questions may require students to:
- Link concepts from different modules
- Apply knowledge to unfamiliar situations
- Make connections between theory and practical applications
- Demonstrate breadth of understanding across the specification

### Example Synoptic Links:
- Circular motion + gravitational fields → satellite orbits
- Electric fields + particle physics → particle accelerators
- Waves + quantum physics → wave-particle duality
- Thermal physics + astrophysics → stellar temperature
- Electromagnetic induction + medical physics → MRI principles

### Assessment Balance:
- AO1: 38-42%
- AO2: 36-40%
- AO3: 20-24%
- Mathematical skills: Approximately 40%

---

## Practical Endorsement (H556/04)

### Assessment:
- Separate from written examinations
- Reported as Pass or Not Classified
- Does not contribute to A-Level grade

### Requirements:
- Complete at least one activity from each of the 12 PAGs
- Demonstrate competence in practical skills
- Teacher-assessed against specified criteria

### Skills Assessed:
1. Following written instructions
2. Applying investigative approaches
3. Safely using apparatus and materials
4. Making observations and measurements
5. Recording methods, observations and data
6. Researching, referencing and reporting

---

## Mark Scheme Conventions

### Calculation Questions:
- 1 mark: Correct equation selected
- 1 mark: Correct substitution of values
- 1 mark: Correct arithmetic
- 1 mark: Final answer with correct unit

### Extended Response (Level of Response):
**Level 3 (5-6 marks):**
- Comprehensive response
- Clear and logical structure
- Correct use of technical terms
- Accurate physics throughout

**Level 2 (3-4 marks):**
- Good response
- Some structure
- Mostly correct physics
- May lack detail or precision

**Level 1 (1-2 marks):**
- Limited response
- Some relevant physics
- May contain errors
- Lacks structure

### Error Carried Forward (ECF):
- Subsequent calculations using an incorrect earlier answer
- Full marks available if method is correct
- Indicated in mark scheme

### Alternative Responses:
- Correct physics expressed differently
- Equivalent valid methods
- Indicated in mark scheme with 'OR'

### Multi-Method Questions: Equal Credit for Valid Approaches

Physics calculations often have multiple valid solution paths. Award full marks for ANY correct method.

**Example 1: Motion problems**
Accept any valid SUVAT combination or energy method:
- v² = u² + 2as OR ½mv² = mgh + ½mu²
- Different equation selection: all earn full marks

**Example 2: Circular motion**
Accept:
- F = mv²/r approach
- F = mω²r approach
- Angular momentum method where applicable

**Example 3: Electric fields**
Accept:
- F = Eq direct calculation
- Energy approach: W = qV
- Field gradient method for non-uniform fields

**Example 4: Thermal physics**
Accept:
- pV = nRT manipulations
- pV/T = constant method
- Kinetic theory approach

**Example 5: Waves and optics**
Accept:
- Young's double slit formula: λ = xs/D
- Path difference method
- Phase difference calculation
`;

// ============================================================================
// WORKED EXAMPLE QUESTIONS WITH COMPLETE MARK SCHEMES (25-35 EXAMPLES)
// ============================================================================

const OCR_ALEVEL_PHYSICS_WORKED_EXAMPLES = `
# OCR A-Level Physics - Worked Example Questions

## Module 2: Foundations of Physics

### Example 1: Units and Dimensions
**Question:**
(a) Show that the equation for kinetic energy, E = ½mv², is homogeneous with respect to units. [3 marks]

(b) The drag force F on a sphere moving through a fluid is given by F = 6πηrv, where η is the dynamic viscosity, r is the radius of the sphere, and v is its velocity.
Determine the SI base units of dynamic viscosity η. [3 marks]

**Mark Scheme:**
(a)
- LHS: E has units of joules = kg m² s⁻² [1]
- RHS: ½mv² has units kg × (m s⁻¹)² = kg m² s⁻² [1]
- LHS = RHS, therefore equation is homogeneous ✓ [1]

(b)
- Rearrange: η = F/(6πrv) [1]
- Units: N/(m × m s⁻¹) = kg m s⁻²/(m² s⁻¹) [1]
- η has units: kg m⁻¹ s⁻¹ OR Pa s [1]

**Full Solution:**
(a) The left-hand side has units of energy (joules).
1 J = 1 kg m² s⁻² (from work = force × distance = N × m = kg m s⁻² × m)

The right-hand side: ½ is dimensionless, m is in kg, v² is in (m s⁻¹)²
½mv² → kg × m² s⁻² = kg m² s⁻²

Since both sides have units of kg m² s⁻², the equation is homogeneous.

(b) Rearranging F = 6πηrv for η:
η = F/(6πrv)

6π is dimensionless, so:
[η] = [F]/([r][v]) = N/(m × m s⁻¹) = kg m s⁻²/(m² s⁻¹)
[η] = kg m⁻¹ s⁻¹

---

### Example 2: Uncertainty Calculations
**Question:**
A student measures the diameter of a wire as 0.52 ± 0.02 mm and the length as 1.250 ± 0.005 m.
The resistance of the wire is measured as 2.45 ± 0.05 Ω.

(a) Calculate the cross-sectional area of the wire. [2 marks]
(b) Calculate the percentage uncertainty in the area. [2 marks]
(c) Calculate the resistivity and its absolute uncertainty. [4 marks]

**Mark Scheme:**
(a)
- r = 0.26 mm = 0.26 × 10⁻³ m [1]
- A = πr² = π × (0.26 × 10⁻³)² = 2.12 × 10⁻⁷ m² [1]

(b)
- % uncertainty in diameter = (0.02/0.52) × 100 = 3.85% [1]
- % uncertainty in area = 2 × 3.85% = 7.7% (or 7.69%) [1]

(c)
- ρ = RA/L = 2.45 × 2.12 × 10⁻⁷/1.250 = 4.16 × 10⁻⁷ Ω m [1]
- % uncertainty in R = (0.05/2.45) × 100 = 2.04% [1]
- % uncertainty in L = (0.005/1.250) × 100 = 0.40% [1]
- Total % uncertainty = 7.7 + 2.04 + 0.40 = 10.1%
- Absolute uncertainty = 0.101 × 4.16 × 10⁻⁷ = 4.2 × 10⁻⁸ Ω m
- ρ = (4.2 ± 0.4) × 10⁻⁷ Ω m [1]

---

## Module 3: Forces and Motion

### Example 3: Projectile Motion
**Question:**
A ball is thrown horizontally from the top of a cliff with a speed of 15 m s⁻¹.
The cliff is 45 m high. Take g = 9.81 m s⁻².

(a) Calculate the time taken for the ball to reach the ground. [2 marks]
(b) Calculate the horizontal distance travelled by the ball. [2 marks]
(c) Calculate the speed of the ball just before it hits the ground. [3 marks]
(d) Calculate the angle that the velocity makes with the horizontal at this point. [2 marks]

**Mark Scheme:**
(a)
- Using s = ut + ½at² with u = 0 (vertical): 45 = 0 + ½ × 9.81 × t² [1]
- t = √(90/9.81) = 3.03 s [1]

(b)
- Horizontal distance = vₓ × t = 15 × 3.03 = 45.4 m [1]
- (Accept 45 m if t = 3.0 s used) [1]

(c)
- vᵧ = u + at = 0 + 9.81 × 3.03 = 29.7 m s⁻¹ [1]
- v = √(vₓ² + vᵧ²) = √(15² + 29.7²) [1]
- v = √(225 + 882) = 33.3 m s⁻¹ [1]

(d)
- tan θ = vᵧ/vₓ = 29.7/15 [1]
- θ = tan⁻¹(1.98) = 63.2° below horizontal [1]

---

### Example 4: Momentum and Collisions
**Question:**
A truck of mass 2500 kg travelling at 12 m s⁻¹ collides with a stationary car of mass 1200 kg.
After the collision, they move off together.

(a) Calculate the velocity of the combined vehicles immediately after the collision. [3 marks]
(b) Calculate the kinetic energy before the collision. [2 marks]
(c) Calculate the kinetic energy after the collision. [2 marks]
(d) Explain why kinetic energy is not conserved but momentum is. [3 marks]

**Mark Scheme:**
(a)
- Momentum before = momentum after [1]
- m₁u₁ + m₂u₂ = (m₁ + m₂)v
- 2500 × 12 + 0 = (2500 + 1200)v [1]
- v = 30000/3700 = 8.11 m s⁻¹ [1]

(b)
- KE before = ½ × 2500 × 12² [1]
- KE = 180 000 J = 180 kJ [1]

(c)
- KE after = ½ × 3700 × 8.11² [1]
- KE = 121 700 J = 122 kJ [1]

(d)
- This is an inelastic collision (objects stick together) [1]
- KE is not conserved because some energy is transferred to other forms (heat, sound, deformation) [1]
- Momentum is always conserved in collisions with no external forces, because the internal forces between objects are equal and opposite (Newton's third law) [1]

---

### Example 5: Young Modulus
**Question:**
A copper wire of length 2.50 m and diameter 0.80 mm is stretched by a tensile force.
The wire extends by 1.8 mm when the force is 35 N.

(a) Calculate the stress in the wire. [3 marks]
(b) Calculate the strain in the wire. [1 mark]
(c) Calculate the Young modulus of copper. [2 marks]
(d) The elastic limit of this copper wire is reached at a stress of 2.0 × 10⁸ Pa.
    Calculate the maximum force that can be applied without permanently deforming the wire. [2 marks]

**Mark Scheme:**
(a)
- Cross-sectional area A = π(d/2)² = π × (0.40 × 10⁻³)² [1]
- A = 5.03 × 10⁻⁷ m² [1]
- Stress = F/A = 35/(5.03 × 10⁻⁷) = 6.96 × 10⁷ Pa [1]

(b)
- Strain = ΔL/L = 1.8 × 10⁻³/2.50 = 7.2 × 10⁻⁴ [1]

(c)
- Young modulus E = stress/strain [1]
- E = 6.96 × 10⁷/(7.2 × 10⁻⁴) = 9.7 × 10¹⁰ Pa [1]

(d)
- Maximum force F = stress × area [1]
- F = 2.0 × 10⁸ × 5.03 × 10⁻⁷ = 101 N [1]

---

### Example 6: Work and Power
**Question:**
A car of mass 1400 kg accelerates from rest to 25 m s⁻¹ in 8.0 s on a horizontal road.
The resistive forces on the car average 600 N during this time.

(a) Calculate the kinetic energy gained by the car. [2 marks]
(b) Calculate the work done against resistive forces. [2 marks]
(c) Calculate the average power developed by the car engine. [3 marks]

**Mark Scheme:**
(a)
- KE = ½mv² = ½ × 1400 × 25² [1]
- KE = 437 500 J = 438 kJ [1]

(b)
- Distance = average velocity × time = (0 + 25)/2 × 8.0 = 100 m [1]
- Work against resistance = 600 × 100 = 60 000 J = 60 kJ [1]

(c)
- Total work done = KE gained + work against resistance [1]
- Total work = 437500 + 60000 = 497 500 J [1]
- Power = work/time = 497500/8.0 = 62.2 kW [1]

---

## Module 4: Electrons, Waves and Photons

### Example 7: Internal Resistance
**Question:**
A battery of EMF 12.0 V and internal resistance r is connected to a 5.0 Ω resistor.
The current in the circuit is 2.0 A.

(a) Calculate the terminal potential difference across the battery. [2 marks]
(b) Calculate the internal resistance of the battery. [2 marks]
(c) Calculate the power dissipated in the internal resistance. [2 marks]
(d) Calculate the efficiency of the circuit. [2 marks]

**Mark Scheme:**
(a)
- V = IR = 2.0 × 5.0 [1]
- V = 10.0 V [1]

(b)
- EMF = I(R + r), so 12.0 = 2.0(5.0 + r) [1]
- 12.0 = 10.0 + 2.0r, so r = 1.0 Ω [1]

(c)
- Power in internal resistance = I²r [1]
- P = 2.0² × 1.0 = 4.0 W [1]

(d)
- Useful power = I²R = 2.0² × 5.0 = 20 W [1]
- Efficiency = useful power/total power = 20/24 = 0.833 = 83.3% [1]
- (Or efficiency = R/(R+r) = 5/6 = 83.3%)

---

### Example 8: Potential Divider with Thermistor
**Question:**
A potential divider circuit consists of a 4.7 kΩ fixed resistor in series with a thermistor.
The supply voltage is 9.0 V. The output voltage is taken across the thermistor.

(a) At room temperature, the thermistor has resistance 4.7 kΩ.
    Calculate the output voltage. [2 marks]
(b) When heated, the thermistor resistance decreases to 1.2 kΩ.
    Calculate the new output voltage. [2 marks]
(c) Explain how this circuit could be modified to switch on a cooling fan
    when the temperature rises above a certain value. [3 marks]

**Mark Scheme:**
(a)
- Vout = [R_th/(R_th + R_fixed)] × Vin [1]
- Vout = [4.7/(4.7 + 4.7)] × 9.0 = 4.5 V [1]

(b)
- Vout = [1.2/(1.2 + 4.7)] × 9.0 [1]
- Vout = [1.2/5.9] × 9.0 = 1.83 V [1]

(c)
- Connect output to a comparator/op-amp [1]
- Set reference voltage at threshold temperature [1]
- When output voltage drops below reference (temperature high),
  output triggers relay/transistor to switch on fan [1]

---

### Example 9: Double Slit Interference
**Question:**
Monochromatic light of wavelength 589 nm passes through two narrow slits 0.25 mm apart.
An interference pattern is observed on a screen 1.5 m from the slits.

(a) Calculate the fringe spacing on the screen. [3 marks]
(b) Explain what would happen to the fringe spacing if:
    (i) the slit separation were increased [1 mark]
    (ii) blue light were used instead of the yellow light [1 mark]
(c) The intensity at the centre of the pattern is I₀.
    Explain why the intensity at a dark fringe is zero. [2 marks]

**Mark Scheme:**
(a)
- λ = 589 × 10⁻⁹ m, d = 0.25 × 10⁻³ m, D = 1.5 m [1]
- Fringe spacing w = λD/d [1]
- w = (589 × 10⁻⁹ × 1.5)/(0.25 × 10⁻³) = 3.53 × 10⁻³ m = 3.5 mm [1]

(b)(i)
- Fringe spacing would decrease (w ∝ 1/d) [1]

(b)(ii)
- Fringe spacing would decrease (blue has shorter wavelength, w ∝ λ) [1]

(c)
- At dark fringes, path difference = (n + ½)λ [1]
- Waves arrive in antiphase (180° out of phase) and cancel by destructive interference [1]

---

### Example 10: Photoelectric Effect
**Question:**
The work function of sodium is 2.28 eV. Ultraviolet radiation of wavelength 250 nm
is incident on a sodium surface.

(a) Calculate the energy of a photon of this radiation in joules. [2 marks]
(b) Calculate the maximum kinetic energy of photoelectrons emitted. [3 marks]
(c) Calculate the stopping potential for these photoelectrons. [2 marks]
(d) Explain why increasing the intensity of the radiation does not increase
    the maximum kinetic energy of the photoelectrons. [2 marks]

**Mark Scheme:**
(a)
- E = hf = hc/λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸)/(250 × 10⁻⁹) [1]
- E = 7.96 × 10⁻¹⁹ J [1]

(b)
- Work function φ = 2.28 eV = 2.28 × 1.6 × 10⁻¹⁹ = 3.65 × 10⁻¹⁹ J [1]
- KEmax = hf - φ = 7.96 × 10⁻¹⁹ - 3.65 × 10⁻¹⁹ [1]
- KEmax = 4.31 × 10⁻¹⁹ J (or 2.69 eV) [1]

(c)
- Stopping potential Vs = KEmax/e [1]
- Vs = 4.31 × 10⁻¹⁹/(1.6 × 10⁻¹⁹) = 2.69 V [1]

(d)
- Each photon interacts with one electron in a one-to-one interaction [1]
- KEmax depends only on photon energy (frequency), not the number of photons (intensity) [1]

---

### Example 11: de Broglie Wavelength
**Question:**
An electron is accelerated from rest through a potential difference of 500 V.

(a) Calculate the kinetic energy gained by the electron in joules. [1 mark]
(b) Calculate the speed of the electron. [2 marks]
(c) Calculate the de Broglie wavelength of the electron. [2 marks]
(d) Explain why electrons can exhibit diffraction effects when passing through
    a thin crystal. [2 marks]

**Mark Scheme:**
(a)
- KE = eV = 1.6 × 10⁻¹⁹ × 500 = 8.0 × 10⁻¹⁷ J [1]

(b)
- KE = ½mv², so v = √(2KE/m) [1]
- v = √(2 × 8.0 × 10⁻¹⁷/9.11 × 10⁻³¹) = 1.33 × 10⁷ m s⁻¹ [1]

(c)
- λ = h/mv = h/p [1]
- λ = 6.63 × 10⁻³⁴/(9.11 × 10⁻³¹ × 1.33 × 10⁷) = 5.5 × 10⁻¹¹ m [1]

(d)
- The de Broglie wavelength is comparable to the atomic spacing in crystals (~10⁻¹⁰ m) [1]
- Diffraction occurs when the wavelength is similar to the gap size [1]

---

## Module 5: Newtonian World and Astrophysics

### Example 12: Ideal Gas Calculations
**Question:**
A cylinder contains 2.5 mol of an ideal gas at a pressure of 1.5 × 10⁵ Pa
and a temperature of 300 K.

(a) Calculate the volume of the gas. [2 marks]
(b) The gas is heated at constant pressure until its temperature reaches 450 K.
    Calculate the new volume. [2 marks]
(c) Calculate the work done by the gas during this expansion. [2 marks]
(d) Calculate the mean kinetic energy of a gas molecule at 450 K. [2 marks]

**Mark Scheme:**
(a)
- pV = nRT, so V = nRT/p [1]
- V = (2.5 × 8.31 × 300)/(1.5 × 10⁵) = 4.16 × 10⁻² m³ [1]

(b)
- At constant pressure: V/T = constant
- V₂ = V₁ × T₂/T₁ = 4.16 × 10⁻² × 450/300 [1]
- V₂ = 6.24 × 10⁻² m³ [1]

(c)
- Work done = pΔV = p(V₂ - V₁) [1]
- W = 1.5 × 10⁵ × (6.24 - 4.16) × 10⁻² = 3120 J [1]

(d)
- Mean KE = 3/2 kT [1]
- KE = 1.5 × 1.38 × 10⁻²³ × 450 = 9.32 × 10⁻²¹ J [1]

---

### Example 13: Simple Harmonic Motion
**Question:**
A mass of 0.50 kg is attached to a spring of spring constant 20 N m⁻¹.
The mass is displaced 0.10 m from equilibrium and released.

(a) Show that the motion is simple harmonic motion. [2 marks]
(b) Calculate the angular frequency of the oscillations. [2 marks]
(c) Calculate the period of the oscillations. [1 mark]
(d) Calculate the maximum speed of the mass. [2 marks]
(e) Calculate the maximum acceleration of the mass. [2 marks]

**Mark Scheme:**
(a)
- Restoring force F = -kx (Hooke's law) [1]
- Since F ∝ -x (proportional to displacement, opposite direction), motion is SHM [1]

(b)
- ω = √(k/m) [1]
- ω = √(20/0.50) = √40 = 6.32 rad s⁻¹ [1]

(c)
- T = 2π/ω = 2π/6.32 = 0.99 s ≈ 1.0 s [1]

(d)
- vmax = ωA [1]
- vmax = 6.32 × 0.10 = 0.632 m s⁻¹ [1]

(e)
- amax = ω²A [1]
- amax = 40 × 0.10 = 4.0 m s⁻² [1]

---

### Example 14: Circular Motion - Banked Track
**Question:**
A car travels around a banked circular track of radius 200 m. The track is banked
at an angle of 15° to the horizontal.

(a) Calculate the ideal speed at which the car can travel around the track
    without any friction. [4 marks]
(b) Explain what happens if the car travels faster than this ideal speed. [2 marks]
(c) A different car of mass 1200 kg travels around the same track at 30 m s⁻¹.
    Calculate the centripetal force required. [2 marks]

**Mark Scheme:**
(a)
- At ideal speed, horizontal component of normal force = centripetal force
- N sin θ = mv²/r and N cos θ = mg [1]
- Dividing: tan θ = v²/(rg) [1]
- v² = rg tan θ = 200 × 9.81 × tan 15° [1]
- v = √(526) = 22.9 m s⁻¹ [1]

(b)
- At higher speeds, the required centripetal force exceeds N sin θ [1]
- Friction must act down the slope (towards centre) to provide additional centripetal force [1]

(c)
- F = mv²/r [1]
- F = 1200 × 30²/200 = 5400 N [1]

---

### Example 15: Gravitational Fields
**Question:**
The Moon orbits the Earth at a mean distance of 3.84 × 10⁸ m.
Mass of Earth = 5.97 × 10²⁴ kg. G = 6.67 × 10⁻¹¹ N m² kg⁻².

(a) Calculate the gravitational field strength at the Moon's orbital distance. [2 marks]
(b) Calculate the orbital speed of the Moon. [2 marks]
(c) Calculate the orbital period of the Moon in days. [2 marks]
(d) Calculate the gravitational potential at the Moon's orbital distance. [2 marks]

**Mark Scheme:**
(a)
- g = GM/r² [1]
- g = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(3.84 × 10⁸)² = 2.70 × 10⁻³ m s⁻² [1]

(b)
- For circular orbit: v² = GM/r or v = √(gr) [1]
- v = √(2.70 × 10⁻³ × 3.84 × 10⁸) = 1020 m s⁻¹ [1]

(c)
- T = 2πr/v = 2π × 3.84 × 10⁸/1020 [1]
- T = 2.37 × 10⁶ s = 27.4 days [1]

(d)
- V = -GM/r [1]
- V = -(6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(3.84 × 10⁸) = -1.04 × 10⁶ J kg⁻¹ [1]

---

### Example 16: Wien's Law and Stefan-Boltzmann
**Question:**
A star has a surface temperature of 5800 K and radius 6.96 × 10⁸ m.
Wien's constant = 2.898 × 10⁻³ m K. Stefan-Boltzmann constant σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴.

(a) Calculate the peak wavelength of radiation emitted by the star. [2 marks]
(b) In which part of the electromagnetic spectrum does this peak lie? [1 mark]
(c) Calculate the luminosity of the star. [3 marks]
(d) A distant observer measures an apparent brightness of 1.36 × 10³ W m⁻².
    Calculate the distance to the star. [2 marks]

**Mark Scheme:**
(a)
- λmax = b/T where b is Wien's constant [1]
- λmax = 2.898 × 10⁻³/5800 = 5.0 × 10⁻⁷ m = 500 nm [1]

(b)
- Visible light (green/yellow) [1]

(c)
- L = 4πr²σT⁴ [1]
- L = 4π × (6.96 × 10⁸)² × 5.67 × 10⁻⁸ × 5800⁴ [1]
- L = 3.85 × 10²⁶ W [1]

(d)
- F = L/(4πd²), so d = √(L/4πF) [1]
- d = √(3.85 × 10²⁶/(4π × 1.36 × 10³)) = 1.50 × 10¹¹ m [1]

---

### Example 17: Hubble's Law and Cosmology
**Question:**
A distant galaxy shows a hydrogen emission line at 486.1 nm when the laboratory
value is 656.3 nm. The Hubble constant H₀ = 2.2 × 10⁻¹⁸ s⁻¹.

Wait - there's an error. Let me reconsider. If the galaxy is receding, the wavelength
should be redshifted (longer), not blueshifted. Let me correct:

A distant galaxy shows a hydrogen emission line at 682.9 nm when the laboratory
value is 656.3 nm. The Hubble constant H₀ = 2.2 × 10⁻¹⁸ s⁻¹.

(a) Calculate the redshift z. [2 marks]
(b) Calculate the recession velocity of the galaxy. [2 marks]
(c) Calculate the distance to the galaxy. [2 marks]
(d) Estimate the age of the universe using this value of the Hubble constant. [2 marks]

**Mark Scheme:**
(a)
- z = Δλ/λ₀ = (682.9 - 656.3)/656.3 [1]
- z = 26.6/656.3 = 0.0405 [1]

(b)
- For v << c: v = zc [1]
- v = 0.0405 × 3.0 × 10⁸ = 1.22 × 10⁷ m s⁻¹ [1]

(c)
- Using Hubble's law: v = H₀d [1]
- d = v/H₀ = 1.22 × 10⁷/(2.2 × 10⁻¹⁸) = 5.5 × 10²⁴ m [1]

(d)
- Age ≈ 1/H₀ [1]
- Age = 1/(2.2 × 10⁻¹⁸) = 4.5 × 10¹⁷ s = 14.3 billion years [1]

---

## Module 6: Particles and Medical Physics

### Example 18: Capacitor Discharge
**Question:**
A 470 μF capacitor is charged to 12 V and then discharged through a 22 kΩ resistor.

(a) Calculate the time constant of the circuit. [1 mark]
(b) Calculate the initial charge on the capacitor. [2 marks]
(c) Calculate the voltage across the capacitor after 15 s. [2 marks]
(d) Calculate how long it takes for the voltage to fall to 3.0 V. [3 marks]

**Mark Scheme:**
(a)
- τ = RC = 22 × 10³ × 470 × 10⁻⁶ = 10.3 s [1]

(b)
- Q = CV [1]
- Q = 470 × 10⁻⁶ × 12 = 5.64 × 10⁻³ C = 5.64 mC [1]

(c)
- V = V₀e^(-t/RC) = 12 × e^(-15/10.3) [1]
- V = 12 × 0.233 = 2.80 V [1]

(d)
- 3.0 = 12 × e^(-t/10.3) [1]
- e^(-t/10.3) = 0.25 [1]
- -t/10.3 = ln(0.25) = -1.39, so t = 14.3 s [1]

---

### Example 19: Electric Fields
**Question:**
Two parallel plates are separated by 2.0 cm and have a potential difference of 500 V.
An electron is released from rest at the negative plate.

(a) Calculate the electric field strength between the plates. [1 mark]
(b) Calculate the force on the electron. [2 marks]
(c) Calculate the acceleration of the electron. [2 marks]
(d) Calculate the speed of the electron when it reaches the positive plate. [2 marks]
(e) Calculate the time taken for the electron to reach the positive plate. [2 marks]

**Mark Scheme:**
(a)
- E = V/d = 500/(2.0 × 10⁻²) = 25000 V m⁻¹ [1]

(b)
- F = Eq [1]
- F = 25000 × 1.6 × 10⁻¹⁹ = 4.0 × 10⁻¹⁵ N [1]

(c)
- a = F/m [1]
- a = 4.0 × 10⁻¹⁵/(9.11 × 10⁻³¹) = 4.39 × 10¹⁵ m s⁻² [1]

(d)
- Using v² = u² + 2as with u = 0 [1]
- v = √(2 × 4.39 × 10¹⁵ × 0.02) = 1.33 × 10⁷ m s⁻¹ [1]

(e)
- Using v = u + at [1]
- t = v/a = 1.33 × 10⁷/(4.39 × 10¹⁵) = 3.0 × 10⁻⁹ s = 3.0 ns [1]

---

### Example 20: Electromagnetic Induction
**Question:**
A rectangular coil of 200 turns has dimensions 5.0 cm × 8.0 cm. It is placed in a
uniform magnetic field of 0.15 T with its plane perpendicular to the field.
The coil is rotated through 90° in 0.20 s.

(a) Calculate the initial magnetic flux through the coil. [2 marks]
(b) Calculate the final magnetic flux through the coil. [1 mark]
(c) Calculate the average EMF induced in the coil. [2 marks]
(d) Explain why the EMF is described as 'induced'. [2 marks]

**Mark Scheme:**
(a)
- Φ = BA = 0.15 × (0.05 × 0.08) [1]
- Φ = 0.15 × 4.0 × 10⁻³ = 6.0 × 10⁻⁴ Wb [1]

(b)
- When plane is parallel to field, flux = 0 [1]

(c)
- Average EMF = -NΔΦ/Δt [1]
- EMF = 200 × (6.0 × 10⁻⁴ - 0)/0.20 = 0.60 V [1]

(d)
- The EMF is produced by the changing magnetic flux through the coil [1]
- It is not due to a chemical energy source but to electromagnetic induction
  as described by Faraday's law [1]

---

### Example 21: Nuclear Decay
**Question:**
Radon-222 is a radioactive gas with a half-life of 3.82 days. A sample initially
contains 8.0 × 10²⁰ atoms of radon-222.

(a) Calculate the decay constant λ of radon-222. [2 marks]
(b) Calculate the initial activity of the sample. [2 marks]
(c) Calculate the number of atoms remaining after 11.46 days. [2 marks]
(d) Calculate the time taken for the activity to fall to 1.0 × 10¹⁵ Bq. [3 marks]

**Mark Scheme:**
(a)
- λ = ln2/t½ [1]
- λ = 0.693/(3.82 × 24 × 3600) = 2.10 × 10⁻⁶ s⁻¹ [1]

(b)
- A = λN [1]
- A = 2.10 × 10⁻⁶ × 8.0 × 10²⁰ = 1.68 × 10¹⁵ Bq [1]

(c)
- 11.46 days = 3 half-lives [1]
- N = N₀ × (½)³ = 8.0 × 10²⁰/8 = 1.0 × 10²⁰ atoms [1]

(d)
- A = A₀e^(-λt), so 1.0 × 10¹⁵ = 1.68 × 10¹⁵ × e^(-λt) [1]
- e^(-λt) = 0.595, so -λt = ln(0.595) = -0.519 [1]
- t = 0.519/(2.10 × 10⁻⁶) = 2.47 × 10⁵ s = 2.86 days [1]

---

### Example 22: Binding Energy
**Question:**
The nuclear reaction ²H + ³H → ⁴He + ¹n releases energy.
Atomic mass unit: 1 u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c²

Masses: ²H = 2.01410 u, ³H = 3.01605 u, ⁴He = 4.00260 u, ¹n = 1.00866 u

(a) Calculate the mass defect in atomic mass units. [2 marks]
(b) Calculate the energy released per reaction in MeV. [2 marks]
(c) Calculate the energy released per reaction in joules. [1 mark]
(d) Calculate the energy released when 1.0 g of deuterium undergoes this reaction. [3 marks]

**Mark Scheme:**
(a)
- Mass before = 2.01410 + 3.01605 = 5.03015 u [1]
- Mass after = 4.00260 + 1.00866 = 5.01126 u
- Mass defect = 5.03015 - 5.01126 = 0.01889 u [1]

(b)
- E = Δm × 931.5 MeV [1]
- E = 0.01889 × 931.5 = 17.6 MeV [1]

(c)
- E = 17.6 × 1.6 × 10⁻¹³ = 2.82 × 10⁻¹² J [1]

(d)
- Number of deuterium atoms = (1.0 × 10⁻³)/(2.01410 × 1.661 × 10⁻²⁷) [1]
- N = 2.99 × 10²³ atoms [1]
- Total energy = 2.99 × 10²³ × 2.82 × 10⁻¹² = 8.4 × 10¹¹ J [1]

---

### Example 23: X-ray Attenuation
**Question:**
An X-ray beam of intensity 5.0 × 10⁶ W m⁻² passes through 8.0 cm of body tissue.
The linear attenuation coefficient for this tissue is 0.20 cm⁻¹.

(a) Calculate the intensity of the X-ray beam after passing through the tissue. [2 marks]
(b) Calculate the half-value thickness of this tissue. [2 marks]
(c) Calculate what thickness of tissue would reduce the intensity to 1% of its
    original value. [2 marks]
(d) Explain why different tissues produce contrast in an X-ray image. [2 marks]

**Mark Scheme:**
(a)
- I = I₀e^(-μx) = 5.0 × 10⁶ × e^(-0.20 × 8.0) [1]
- I = 5.0 × 10⁶ × 0.202 = 1.01 × 10⁶ W m⁻² [1]

(b)
- x½ = ln2/μ [1]
- x½ = 0.693/0.20 = 3.47 cm [1]

(c)
- 0.01 = e^(-0.20x), so -0.20x = ln(0.01) = -4.61 [1]
- x = 23 cm [1]

(d)
- Different tissues have different attenuation coefficients [1]
- Denser tissues (e.g., bone) absorb more X-rays, appearing lighter on the image;
  less dense tissues allow more X-rays through, appearing darker [1]

---

### Example 24: Ultrasound Imaging
**Question:**
An ultrasound pulse is transmitted into the body and reflects at tissue boundaries.
The speed of ultrasound in soft tissue is 1540 m s⁻¹.

The acoustic impedances are:
- Soft tissue: Z₁ = 1.63 × 10⁶ kg m⁻² s⁻¹
- Bone: Z₂ = 6.50 × 10⁶ kg m⁻² s⁻¹

(a) Define acoustic impedance. [1 mark]
(b) Calculate the reflection coefficient at a soft tissue/bone boundary. [2 marks]
(c) Explain why a coupling gel is used between the ultrasound transducer and
    the patient's skin. [2 marks]
(d) A pulse is transmitted and an echo is received after 0.12 ms.
    Calculate the depth of the reflecting boundary. [2 marks]

**Mark Scheme:**
(a)
- Acoustic impedance Z = ρc (density × speed of sound) [1]

(b)
- Reflection coefficient = (Z₂ - Z₁)²/(Z₂ + Z₁)² [1]
- R = (6.50 - 1.63)²/(6.50 + 1.63)² × 10¹² = (4.87/8.13)² = 0.36 (or 36%) [1]

(c)
- Air has very low acoustic impedance compared to skin [1]
- Without gel, most of the ultrasound would be reflected at the air/skin boundary;
  gel matches impedances to allow transmission into the body [1]

(d)
- Distance = speed × time = 1540 × 0.12 × 10⁻³ = 0.185 m [1]
- Depth = 0.185/2 = 0.092 m = 9.2 cm (divide by 2 for there and back) [1]

---

### Example 25: PET Scanning
**Question:**
In PET scanning, a radioactive tracer emits positrons which annihilate with electrons.

(a) Write an equation for positron-electron annihilation. [2 marks]
(b) Explain why two gamma photons are produced travelling in opposite directions. [2 marks]
(c) Calculate the energy of each gamma photon produced.
    (Mass of electron = 9.11 × 10⁻³¹ kg) [2 marks]
(d) Explain how the simultaneous detection of these photons allows the position
    of the annihilation to be determined. [2 marks]

**Mark Scheme:**
(a)
- e⁺ + e⁻ → 2γ (or β⁺ + β⁻ → 2γ) [1]
- Must show two photons [1]

(b)
- Momentum must be conserved [1]
- Initially total momentum ≈ 0, so photons must travel in opposite directions
  to have equal and opposite momenta [1]

(c)
- Total mass converted = 2 × 9.11 × 10⁻³¹ = 1.822 × 10⁻³⁰ kg [1]
- E = mc² = 1.822 × 10⁻³⁰ × (3 × 10⁸)² = 1.64 × 10⁻¹³ J
- Each photon: 8.2 × 10⁻¹⁴ J = 0.511 MeV [1]

(d)
- Two detectors record the photons simultaneously [1]
- The annihilation must have occurred on the line joining the two detectors;
  multiple detections allow triangulation to locate the source [1]

---

## Extended Response Examples (6-mark questions)

### Example 26: Extended Response - SHM Energy
**Question:**
Discuss the energy changes that occur during one complete cycle of simple harmonic
motion for a mass oscillating on a spring. Include a description of how kinetic
and potential energy vary with displacement and explain why the total mechanical
energy remains constant in the absence of damping. [6 marks]

**Level 3 Response (5-6 marks):**
During simple harmonic motion, energy continuously transforms between kinetic
energy (KE) and elastic potential energy (PE).

At the equilibrium position (x = 0), the mass has maximum velocity (v = ωA),
so kinetic energy is maximum: KE = ½mv²max = ½mω²A². At this point, the spring
is at its natural length, so PE = 0.

At the amplitude positions (x = ±A), the mass momentarily stops (v = 0), so KE = 0.
The spring is at maximum extension or compression, so PE is maximum: PE = ½kA² = ½mω²A².

At intermediate positions, both KE and PE exist. The kinetic energy varies as
KE = ½mω²(A² - x²), while potential energy varies as PE = ½mω²x² = ½kx².

The total mechanical energy E = KE + PE = ½mω²A² remains constant at all positions.
This is because the spring force is conservative - work done against the spring
is stored as PE and fully recovered as KE.

The total energy is proportional to A², so doubling the amplitude quadruples
the total energy.

---

### Example 27: Extended Response - Gravitational vs Electric Fields
**Question:**
Compare and contrast gravitational and electric fields. Your answer should include
discussion of field strength, potential, force laws, and the nature of the interactions. [6 marks]

**Level 3 Response (5-6 marks):**
Gravitational and electric fields share mathematical similarities but have
fundamental differences.

**Similarities:**
Both follow inverse square laws for point masses/charges:
- Gravitational: g = GM/r² and F = GMm/r²
- Electric: E = kQ/r² and F = kQq/r²

Both have potential that varies with 1/r:
- Gravitational: V = -GM/r
- Electric: V = kQ/r

Both have field strength related to potential gradient: g = -dV/dr for gravity,
E = -dV/dr for electric fields. Field lines point from high to low potential
(for positive charges in electric fields).

**Differences:**
Gravitational fields are always attractive (mass is always positive), while
electric fields can be attractive or repulsive depending on charge signs.

Gravitational potential is always negative (taking infinity as zero), while
electric potential can be positive or negative depending on the source charge.

Electric forces are vastly stronger than gravitational forces (ratio ~10³⁹ for
electron-proton), but gravity dominates at large scales because mass is always
positive and accumulates, while charges tend to cancel.

Gravitational fields are not shielded, while electric fields can be shielded
by conductors.

---

### Example 28: Extended Response - Medical Imaging Comparison
**Question:**
Compare the use of X-rays and ultrasound in medical imaging. Discuss the physics
principles involved, the types of images produced, and the relative advantages
and limitations of each technique. [6 marks]

**Level 3 Response (5-6 marks):**
X-rays and ultrasound are both widely used in medical imaging but operate on
different physical principles.

**X-ray Physics:**
X-rays are high-energy electromagnetic radiation that passes through soft tissue
but is absorbed by denser materials like bone. Intensity follows I = I₀e^(-μx)
where μ is the attenuation coefficient. Dense tissues appear white (absorb more),
while soft tissues appear darker. CT scanning uses multiple X-ray projections
to create 3D cross-sectional images.

**Ultrasound Physics:**
Ultrasound uses high-frequency sound waves (1-15 MHz). Pulses are emitted and
reflected at tissue boundaries. Reflection depends on acoustic impedance mismatch:
R = (Z₂-Z₁)²/(Z₂+Z₁)². Time delay gives depth information. Real-time imaging
is possible.

**Advantages of X-rays:**
- Excellent for bone imaging
- Fast acquisition
- CT provides detailed 3D images

**Advantages of Ultrasound:**
- No ionising radiation (safer for pregnancy)
- Real-time imaging
- Good for soft tissue differentiation
- Portable and relatively inexpensive

**Limitations:**
X-rays expose patients to ionising radiation (cancer risk) and poor soft tissue
contrast without contrast agents. Ultrasound cannot image through bone or gas
and is operator-dependent.

---

### Example 29: Extended Response - Photoelectric Effect
**Question:**
Explain how the photoelectric effect provides evidence for the particle nature
of light. Describe the key observations and explain why the wave model of light
cannot account for them. [6 marks]

**Level 3 Response (5-6 marks):**
The photoelectric effect, where light causes emission of electrons from a metal
surface, provides compelling evidence for the particle (photon) model of light.

**Key Observations:**
1. There is a threshold frequency f₀ below which no electrons are emitted,
   regardless of intensity.
2. Above the threshold, electrons are emitted immediately (within 10⁻⁹ s).
3. Maximum kinetic energy of photoelectrons depends on frequency, not intensity.
4. Increasing intensity increases the number of photoelectrons, not their energy.

**Wave Model Predictions (all incorrect):**
The wave model predicts that any frequency should cause emission if intensity
is high enough (energy accumulates over time). It predicts a time delay for
low intensities while energy builds up. It predicts higher intensity should
give electrons more energy.

**Photon Model Explanation:**
Einstein's photon model explains all observations. Light consists of photons
each with energy E = hf. One photon interacts with one electron. The photon
must have enough energy to overcome the work function φ: if hf < φ, no emission
occurs regardless of the number of photons (intensity).

The photoelectric equation hf = φ + KEmax shows that increasing frequency
increases photon energy, hence KEmax. Increasing intensity increases the
number of photons, hence more electrons but same maximum energy.

The immediate emission occurs because energy transfer happens in a single
photon-electron interaction, not accumulated over time.

---

### Example 30: Extended Response - Capacitor Applications
**Question:**
Discuss the energy storage capabilities of capacitors and their applications
in electronic circuits. Explain the charging and discharging processes and
how the time constant affects circuit behaviour. [6 marks]

**Level 3 Response (5-6 marks):**
Capacitors store energy in an electric field between their plates. The energy
stored is W = ½CV² = ½QV = ½Q²/C, making them useful for various applications.

**Charging Process:**
When connected to a DC supply through a resistor, charge builds up exponentially:
Q = Q₀(1 - e^(-t/RC)), where RC is the time constant τ. The voltage across
the capacitor rises as V = V₀(1 - e^(-t/RC)), while current decreases as
I = I₀e^(-t/RC). After time 5RC, the capacitor is approximately fully charged
(>99%).

**Discharging Process:**
When discharged through a resistor, quantities decay exponentially: Q = Q₀e^(-t/RC),
V = V₀e^(-t/RC), I = I₀e^(-t/RC). The time constant τ = RC determines how
quickly this occurs - it's the time for values to fall to 37% (1/e) of initial values.

**Applications:**
1. **Timing circuits:** The predictable RC time constant enables precise time
   delays in circuits.
2. **Smoothing:** In power supplies, capacitors smooth rectified AC by storing
   charge during peaks and releasing during troughs.
3. **Flash photography:** Large capacitors store energy and release it quickly
   for high-power flash.
4. **Coupling/decoupling:** Capacitors block DC while allowing AC to pass,
   useful for signal processing.
5. **Backup power:** Supercapacitors can provide short-term power backup.

The choice of R and C values determines the time response, allowing engineers
to design circuits for specific applications.
`;

// ============================================================================
// KEY FORMULAE AND EQUATIONS
// ============================================================================

const OCR_ALEVEL_PHYSICS_FORMULAE = `
# OCR A-Level Physics - Key Formulae and Equations

## Module 2: Foundations of Physics

### Units and Measurements
- Percentage uncertainty = (absolute uncertainty / measured value) × 100%
- Combined uncertainties: add percentage uncertainties for multiplication/division
- Combined uncertainties: add absolute uncertainties for addition/subtraction

---

## Module 3: Forces and Motion

### Kinematics (SUVAT Equations)
- v = u + at
- s = ut + ½at²
- s = vt - ½at²
- v² = u² + 2as
- s = ½(u + v)t

### Projectile Motion
- Horizontal: x = vₓt (constant velocity)
- Vertical: y = uᵧt + ½gt² (accelerated motion)

### Forces
- Weight: W = mg
- Momentum: p = mv
- Impulse: Δp = FΔt
- Resultant force: F = ma (Newton's second law)
- Moment: M = Fd (perpendicular distance)
- Couple: τ = Fd (where d is perpendicular separation)

### Work, Energy and Power
- Work done: W = Fs cos θ
- Kinetic energy: KE = ½mv²
- Gravitational PE: GPE = mgh
- Elastic PE: EPE = ½kx² = ½Fx
- Power: P = W/t = Fv
- Efficiency: η = useful output / total input

### Materials
- Hooke's Law: F = kx
- Stress: σ = F/A
- Strain: ε = ΔL/L
- Young modulus: E = σ/ε = (F/A)/(ΔL/L) = FL/(AΔL)
- Elastic strain energy: W = ½Fx = ½kx² (area under F-x graph)

### Density and Pressure
- Density: ρ = m/V
- Pressure: p = F/A
- Pressure in fluid: p = ρgh
- Upthrust: F = ρVg (Archimedes' principle)

---

## Module 4: Electrons, Waves and Photons

### Electricity
- Charge: Q = It
- Current: I = ΔQ/Δt = nAvq
- Potential difference: V = W/Q
- Resistance: R = V/I
- Resistivity: ρ = RA/L
- Power: P = IV = I²R = V²/R
- Energy: E = IVt = Pt

### Circuit Laws
- Series resistors: R_total = R₁ + R₂ + R₃ + ...
- Parallel resistors: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...
- EMF equation: ε = I(R + r) = V + Ir
- Potential divider: V_out = R₂/(R₁ + R₂) × V_in

### Waves
- Wave equation: v = fλ
- Period and frequency: f = 1/T
- Phase difference: Δφ = (2π/λ) × path difference
- Double slit: λ = ax/D (where a = slit separation, x = fringe spacing)
- Diffraction grating: d sin θ = nλ
- Refractive index: n = c/v = sin θ₁/sin θ₂
- Critical angle: sin θc = n₂/n₁ = 1/n (for n₂ = air)

### Quantum Physics
- Photon energy: E = hf = hc/λ
- Photoelectric equation: hf = φ + ½mv²_max
- Threshold frequency: f₀ = φ/h
- Stopping potential: eVs = ½mv²_max
- de Broglie wavelength: λ = h/p = h/mv
- Energy levels: ΔE = hf = E₂ - E₁

---

## Module 5: Newtonian World and Astrophysics

### Thermal Physics
- Specific heat capacity: Q = mcΔT
- Specific latent heat: Q = mL
- Ideal gas: pV = nRT = NkT
- Kinetic theory: pV = ⅓Nm⟨c²⟩
- Mean kinetic energy: ⟨KE⟩ = ½m⟨c²⟩ = 3/2 kT
- Root mean square speed: c_rms = √⟨c²⟩ = √(3kT/m) = √(3RT/M)

### Circular Motion
- Angular velocity: ω = 2πf = 2π/T = v/r
- Centripetal acceleration: a = v²/r = ω²r
- Centripetal force: F = mv²/r = mω²r

### Simple Harmonic Motion
- Definition: a = -ω²x
- Displacement: x = A cos(ωt) or x = A sin(ωt)
- Velocity: v = ±ω√(A² - x²)
- Maximum velocity: v_max = ωA
- Maximum acceleration: a_max = ω²A
- Period of pendulum: T = 2π√(L/g)
- Period of mass-spring: T = 2π√(m/k)
- Energy: E_total = ½mω²A² = ½kA²

### Gravitational Fields
- Newton's law of gravitation: F = GMm/r²
- Gravitational field strength: g = F/m = GM/r²
- Gravitational potential: V = -GM/r
- Work done: W = mΔV
- Orbital speed: v = √(GM/r)
- Orbital period: T² = (4π²/GM)r³ (Kepler's third law)
- Geostationary orbit: T = 24 hours, r ≈ 42000 km

### Astrophysics
- Stefan-Boltzmann law: L = 4πr²σT⁴
- Wien's displacement law: λ_max T = 2.898 × 10⁻³ m K
- Inverse square law: F = L/(4πd²)
- Doppler effect: Δλ/λ = Δf/f ≈ v/c
- Hubble's law: v = H₀d
- Age of universe: t ≈ 1/H₀

---

## Module 6: Particles and Medical Physics

### Capacitors
- Capacitance: C = Q/V
- Parallel plate: C = ε₀ε_r A/d
- Energy stored: W = ½QV = ½CV² = Q²/(2C)
- Capacitors in parallel: C_total = C₁ + C₂ + C₃ + ...
- Capacitors in series: 1/C_total = 1/C₁ + 1/C₂ + 1/C₃ + ...
- Time constant: τ = RC
- Discharge: Q = Q₀e^(-t/RC), V = V₀e^(-t/RC), I = I₀e^(-t/RC)
- Charging: Q = Q₀(1 - e^(-t/RC)), V = V₀(1 - e^(-t/RC))

### Electric Fields
- Coulomb's law: F = kQ₁Q₂/r² where k = 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²
- Electric field strength (point charge): E = kQ/r²
- Electric field strength (uniform): E = V/d
- Force on charge: F = qE
- Electric potential: V = kQ/r
- Work done: W = qΔV

### Magnetic Fields
- Force on conductor: F = BIL sin θ
- Force on moving charge: F = BQv sin θ
- Radius of circular motion: r = mv/(BQ)
- Magnetic flux: Φ = BA cos θ
- Flux linkage: NΦ
- Faraday's law: ε = -N(dΦ/dt)
- Transformer: V_s/V_p = N_s/N_p

### Nuclear Physics
- Nuclear notation: ᴬzX
- Mass-energy: E = mc²
- Binding energy: BE = Δmc²
- Activity: A = λN = A₀e^(-λt)
- Decay equation: N = N₀e^(-λt)
- Half-life: t½ = ln2/λ ≈ 0.693/λ

### Medical Physics
- X-ray attenuation: I = I₀e^(-μx)
- Half-value thickness: x½ = ln2/μ
- Acoustic impedance: Z = ρc
- Reflection coefficient: R = (Z₂ - Z₁)²/(Z₂ + Z₁)²
- Intensity reflection: I_r/I₀ = R

---

## Physical Constants (given in data sheet)

| Constant | Symbol | Value |
|----------|--------|-------|
| Speed of light | c | 3.00 × 10⁸ m s⁻¹ |
| Planck constant | h | 6.63 × 10⁻³⁴ J s |
| Elementary charge | e | 1.60 × 10⁻¹⁹ C |
| Electron mass | mₑ | 9.11 × 10⁻³¹ kg |
| Proton mass | mₚ | 1.67 × 10⁻²⁷ kg |
| Gravitational constant | G | 6.67 × 10⁻¹¹ N m² kg⁻² |
| Avogadro constant | Nₐ | 6.02 × 10²³ mol⁻¹ |
| Molar gas constant | R | 8.31 J mol⁻¹ K⁻¹ |
| Boltzmann constant | k | 1.38 × 10⁻²³ J K⁻¹ |
| Stefan-Boltzmann constant | σ | 5.67 × 10⁻⁸ W m⁻² K⁻⁴ |
| Permittivity of free space | ε₀ | 8.85 × 10⁻¹² F m⁻¹ |
| Permeability of free space | μ₀ | 4π × 10⁻⁷ H m⁻¹ |
`;

// ============================================================================
// PRACTICAL ENDORSEMENT GUIDANCE - DETAILED PAG ACTIVITIES
// ============================================================================

const OCR_ALEVEL_PHYSICS_PAG_DETAILED = `
# OCR A-Level Physics Practical Activity Groups (PAGs) - Detailed Guidance

## Overview
The Practical Endorsement is reported separately from the A-Level grade as 'Pass' or 'Not Classified'.
Students must complete at least one activity from each of the 12 PAGs.

---

## PAG 1: Measuring Motion

### Suggested Activities:
1. **Measurement of g by free fall**
   - Use electromagnetic release and light gates
   - Or use video analysis with ruler background
   - Calculate using s = ½gt²

2. **Motion of a trolley on a ramp**
   - Investigate constant velocity or acceleration
   - Use ticker tape, light gates, or motion sensor
   - Plot displacement-time and velocity-time graphs

3. **Terminal velocity of falling objects**
   - Drop objects in viscous liquid
   - Measure terminal velocity for different masses/sizes

### Key Skills Assessed:
- Using timing equipment (light gates, stopwatches)
- Measuring distance accurately
- Plotting motion graphs
- Calculating acceleration from graphs

### Common Errors to Address:
- Reaction time affecting stopwatch measurements
- Parallax error when reading rulers
- Not accounting for the time delay in release mechanisms

---

## PAG 2: Forces

### Suggested Activities:
1. **Equilibrium of coplanar forces**
   - Three-force equilibrium using force board
   - Vector addition to verify equilibrium

2. **Investigation of moments**
   - Verify principle of moments
   - Determine centre of mass of irregular shapes

3. **Force-extension characteristics of springs**
   - Verify Hooke's law
   - Investigate springs in series and parallel

### Key Skills Assessed:
- Drawing free-body diagrams
- Measuring forces with newton meters
- Resolving vectors graphically
- Understanding equilibrium conditions

### Expected Results:
- For balanced beam: sum of clockwise moments = sum of anticlockwise moments
- For springs in parallel: k_total = k₁ + k₂
- For springs in series: 1/k_total = 1/k₁ + 1/k₂

---

## PAG 3: Materials

### Suggested Activities:
1. **Determination of Young modulus**
   - Long wire under tension
   - Measure extension for various loads
   - Calculate stress, strain, and Young modulus

2. **Stress-strain investigation of materials**
   - Compare different materials (copper, steel, rubber)
   - Identify elastic limit, yield point, breaking point

3. **Investigation of springs**
   - Spring constant determination
   - Energy stored in stretched spring

### Key Skills Assessed:
- Precision measurement of small extensions
- Use of micrometer for wire diameter
- Plotting stress-strain graphs
- Calculating Young modulus from gradient

### Key Measurements:
- Wire diameter: micrometer screw gauge (±0.01 mm)
- Wire length: metre rule (±1 mm)
- Extension: vernier scale or travelling microscope (±0.1 mm)
- Force: calibrated masses or newton meter

### Safety Considerations:
- Eye protection (wire may snap under tension)
- Do not exceed elastic limit unnecessarily
- Secure clamps and weights

---

## PAG 4: Electrical Circuits

### Suggested Activities:
1. **Determination of resistivity**
   - Measure resistance of wire at various lengths
   - Calculate resistivity using ρ = RA/L

2. **Internal resistance and EMF**
   - Vary external resistance
   - Plot terminal p.d. against current
   - Determine EMF (intercept) and r (gradient)

3. **Potential divider investigations**
   - Verify V_out = R₂/(R₁+R₂) × V_in
   - Investigate sensor circuits (thermistor, LDR)

4. **I-V characteristics**
   - Filament lamp (non-ohmic)
   - Diode (forward and reverse bias)
   - Resistor (ohmic)

### Key Skills Assessed:
- Setting up circuits from diagrams
- Using ammeters and voltmeters correctly
- Identifying systematic errors
- Analyzing I-V graphs

### Common Sources of Error:
- Internal resistance of meters
- Heating effects changing resistance
- Contact resistance at connections

---

## PAG 5: Waves

### Suggested Activities:
1. **Speed of sound determination**
   - Resonance tube method
   - Or use oscilloscope with microphones

2. **Investigation of standing waves on strings**
   - Determine relationship between frequency, tension, length
   - f = (1/2L)√(T/μ)

3. **Diffraction and interference**
   - Double-slit experiment
   - Measure fringe spacing to determine wavelength

4. **Polarisation of light**
   - Investigate using polaroids
   - Verify Malus's law: I = I₀ cos² θ

### Key Skills Assessed:
- Setting up optical equipment
- Measuring wavelength indirectly
- Understanding wave phenomena
- Using relationship between variables

### Typical Values:
- Speed of sound in air: ~340 m s⁻¹ at room temperature
- Visible light wavelength: 400-700 nm
- Young's slits fringe spacing: typically 1-5 mm

---

## PAG 6: Quantum Physics

### Suggested Activities:
1. **Photoelectric effect investigation**
   - Use photocell or gold-leaf electroscope
   - Investigate threshold frequency
   - Measure stopping potential

2. **LED threshold voltage measurement**
   - Determine threshold voltage for different colour LEDs
   - Calculate photon energy: E = eV
   - Compare with E = hf

3. **Diffraction of electrons** (demonstration)
   - Electron diffraction tube
   - Observe diffraction rings

### Key Skills Assessed:
- Careful voltage measurement
- Understanding quantum concepts
- Relating experimental results to theory

### Expected Results:
- LED threshold voltages increase with frequency (shorter wavelength = higher voltage)
- Red LED: ~1.8 V, Green LED: ~2.2 V, Blue LED: ~2.8 V
- Corresponding to photon energies via E = eV

---

## PAG 7: Thermal Physics

### Suggested Activities:
1. **Determination of specific heat capacity**
   - Electrical method with continuous flow
   - Or direct heating of metal block
   - Q = mcΔT, calculate c

2. **Investigation of gas laws**
   - Boyle's law: pV = constant (at constant T)
   - Charles's law: V/T = constant (at constant p)

3. **Determination of absolute zero**
   - Plot p against T (Celsius)
   - Extrapolate to find absolute zero

### Key Skills Assessed:
- Minimizing heat losses
- Accurate temperature measurement
- Using pressure sensors
- Extrapolation of graphs

### Sources of Error:
- Heat losses to surroundings
- Thermal equilibrium not reached
- Adiabatic changes during measurement

---

## PAG 8: Simple Harmonic Motion

### Suggested Activities:
1. **Investigation of simple pendulum**
   - Measure T for various lengths
   - Verify T = 2π√(L/g)
   - Determine g from graph

2. **Mass-spring system**
   - Measure T for various masses
   - Verify T = 2π√(m/k)
   - Determine k from graph

3. **Damped oscillations**
   - Investigate amplitude decay
   - Compare light, heavy, and critical damping

### Key Skills Assessed:
- Timing multiple oscillations
- Linearizing relationships for graph plotting
- Identifying damping effects
- Controlling variables

### Linearization:
- For pendulum: Plot T² against L → gradient = 4π²/g
- For mass-spring: Plot T² against m → gradient = 4π²/k

---

## PAG 9: Circular Motion

### Suggested Activities:
1. **Centripetal force investigation**
   - Vary mass, radius, or angular velocity
   - Verify F = mω²r or F = mv²/r

2. **Conical pendulum**
   - Measure angle and period
   - Calculate centripetal force and compare with theory

### Key Skills Assessed:
- Timing circular motion
- Measuring angular velocity
- Verifying force relationships

### Experimental Setup:
- Use rubber bung on string whirled in horizontal circle
- Attach known mass to provide centripetal tension
- Time multiple revolutions for accuracy

---

## PAG 10: Electric Fields

### Suggested Activities:
1. **Capacitor charging and discharging**
   - Measure V or I against time
   - Verify exponential relationships
   - Determine time constant τ = RC

2. **Investigation of RC circuits**
   - Vary R or C and observe effect on time constant
   - Use data logger for accurate measurements

3. **Field plotting** (if available)
   - Plot equipotential lines
   - Determine field line patterns

### Key Skills Assessed:
- Using data loggers
- Analyzing exponential decay
- Calculating time constants from graphs
- Understanding field patterns

### Methods for Time Constant:
- Direct: time for V to fall to V₀/e (37% of initial)
- From ln(V) vs t graph: gradient = -1/RC

---

## PAG 11: Magnetic Fields

### Suggested Activities:
1. **Investigation of magnetic flux**
   - Vary angle of coil in magnetic field
   - Verify Φ = BA cos θ

2. **Electromagnetic induction**
   - Move magnet through coil
   - Investigate factors affecting induced EMF
   - Verify Faraday's law: ε = -N dΦ/dt

3. **Force on current-carrying conductor**
   - Current balance experiment
   - Verify F = BIL

### Key Skills Assessed:
- Setting up electromagnetic apparatus
- Measuring induced EMF
- Understanding induction principles
- Verifying Lenz's law

---

## PAG 12: Nuclear Physics

### Suggested Activities:
1. **Radioactive decay simulation**
   - Dice or coin simulation
   - Model exponential decay

2. **Absorption of radiation**
   - Measure count rate vs absorber thickness
   - Determine half-value thickness

3. **Inverse square law**
   - Measure count rate at various distances
   - Verify I ∝ 1/r²

### Key Skills Assessed:
- Safe handling of radioactive sources
- Background radiation correction
- Statistical analysis of count data
- Verifying mathematical relationships

### Safety Requirements:
- CLEAPSS guidelines must be followed
- Sources handled with tongs
- Minimize exposure time
- Use shielding where appropriate

---

## General Practical Skills Checklist

### Equipment Use:
□ Vernier calipers (±0.1 mm)
□ Micrometer screw gauge (±0.01 mm)
□ Digital multimeters
□ Oscilloscope
□ Light gates and timers
□ Data loggers

### Recording:
□ Appropriate number of significant figures
□ Clear table headings with units
□ Repeat readings where appropriate
□ Identify and exclude anomalies

### Analysis:
□ Plot graphs with labelled axes and units
□ Draw line of best fit
□ Calculate gradient with units
□ Estimate uncertainties

### Evaluation:
□ Identify systematic and random errors
□ Calculate percentage uncertainties
□ Suggest improvements
□ Assess validity of conclusions
`;

// ============================================================================
// COMMAND WORDS WITH DETAILED EXAMPLES
// ============================================================================

const OCR_ALEVEL_PHYSICS_COMMAND_WORDS_DETAILED = `
# OCR A-Level Physics Command Words - Detailed Examples

## Calculation and Quantitative Commands

### CALCULATE
**Definition:** Obtain a numerical answer, showing relevant working. If the answer has a unit, this must be included.

**Example Question:**
"Calculate the kinetic energy of a car of mass 1200 kg travelling at 25 m s⁻¹." [2 marks]

**Model Answer:**
KE = ½mv²
KE = ½ × 1200 × 25²
KE = 375000 J = 375 kJ

**Marking Notes:**
- Working must be shown (not just final answer)
- Correct substitution required
- Unit required in final answer
- Accept equivalent units (J or kJ)

---

### DETERMINE
**Definition:** Obtain an answer using given data or information. May require extraction of data from graphs, tables, or diagrams.

**Example Question:**
"Use the graph to determine the spring constant." [3 marks]

**Model Answer:**
Identify two points on the line: (0.02 m, 1.0 N) and (0.10 m, 5.0 N)
Gradient = ΔF/Δx = (5.0 - 1.0)/(0.10 - 0.02) = 4.0/0.08 = 50 N m⁻¹
Spring constant k = 50 N m⁻¹

**Marking Notes:**
- Must show data extraction from graph
- Show gradient calculation
- Include units in answer

---

### ESTIMATE
**Definition:** Give an approximate value based on reasonable assumptions. State assumptions made.

**Example Question:**
"Estimate the pressure exerted on the floor by a person standing on one foot." [3 marks]

**Model Answer:**
Assume: mass ≈ 70 kg, foot area ≈ 200 cm² = 0.02 m²
Weight = mg = 70 × 10 = 700 N
Pressure = F/A = 700/0.02 = 35000 Pa ≈ 35 kPa

**Marking Notes:**
- Reasonable assumptions stated
- Working shown with assumptions
- Answer in correct order of magnitude

---

### SHOW THAT
**Definition:** Provide structured evidence to verify the statement given. The final answer is provided, so working is essential.

**Example Question:**
"Show that the time period of the pendulum is approximately 1.4 s given that L = 0.50 m." [2 marks]

**Model Answer:**
T = 2π√(L/g)
T = 2π√(0.50/9.81)
T = 2π√(0.051) = 2π × 0.226 = 1.42 s ≈ 1.4 s ✓

**Marking Notes:**
- Must show all steps
- Cannot just verify by substituting 1.4 s
- Working is worth most marks

---

## Explanation Commands

### EXPLAIN
**Definition:** Give reasons for something; make clear the cause-effect relationships.

**Example Question:**
"Explain why the terminal velocity of a skydiver increases when they adopt a streamlined position." [3 marks]

**Model Answer:**
In a streamlined position, the cross-sectional area decreases [1].
This reduces the air resistance (drag force) acting on the skydiver [1].
At the original terminal velocity, weight now exceeds drag, so the skydiver accelerates until drag increases to match weight at a higher velocity [1].

**Marking Notes:**
- Must link cause to effect
- Technical terms used correctly
- Logical sequence of reasoning

---

### DESCRIBE
**Definition:** Give an account in words. State what happens but not necessarily why.

**Example Question:**
"Describe how the velocity of a bouncing ball changes from the moment it is dropped until it reaches maximum height after the first bounce." [4 marks]

**Model Answer:**
The ball accelerates downward from rest under gravity [1].
Velocity increases in the downward direction until it hits the ground [1].
On impact, velocity reverses direction (now upward) but with reduced magnitude [1].
The ball then decelerates (still accelerating downward due to gravity) until velocity reaches zero at maximum height [1].

**Marking Notes:**
- Sequential account of what happens
- No explanation required
- Direction changes noted

---

### STATE
**Definition:** Express in clear terms. Usually requires a brief, factual response.

**Example Question:**
"State Newton's first law of motion." [2 marks]

**Model Answer:**
An object remains at rest or continues in uniform motion in a straight line [1] unless acted upon by a resultant external force [1].

**Marking Notes:**
- Key terms required
- Usually 1-2 marking points
- No explanation needed

---

### DEFINE
**Definition:** Give the precise meaning of a term.

**Example Question:**
"Define specific heat capacity." [2 marks]

**Model Answer:**
Specific heat capacity is the energy required [1] to raise the temperature of 1 kg of a substance by 1 K (or 1°C) [1].

**Marking Notes:**
- Precise technical definition
- All parts of definition required
- Units/conditions stated where relevant

---

### SUGGEST
**Definition:** Apply knowledge and understanding to a new or unfamiliar situation. May have multiple valid answers.

**Example Question:**
"The experiment gave a value for g of 8.2 m s⁻². Suggest one reason for this discrepancy from the accepted value." [2 marks]

**Possible Answers:**
- Air resistance was significant and not accounted for [1], reducing the measured acceleration [1]
- OR: The timing started late or stopped early [1], giving a shorter time and therefore lower calculated g [1]
- OR: Friction in the apparatus reduced the acceleration [1]

**Marking Notes:**
- Accept any reasonable suggestion
- Must be scientifically valid
- Often requires two related points

---

### JUSTIFY
**Definition:** Give reasons to support a conclusion or viewpoint.

**Example Question:**
"The student concluded that the collision was inelastic. Justify this conclusion using the data." [2 marks]

**Model Answer:**
Kinetic energy before = 45 J, kinetic energy after = 32 J [1].
Since kinetic energy decreased (was not conserved), the collision was inelastic [1].

**Marking Notes:**
- Use evidence from question
- Link evidence to conclusion
- Quantitative support preferred

---

## Higher-Order Commands

### EVALUATE
**Definition:** Make a judgement based on criteria or evidence. Weigh up different factors.

**Example Question:**
"Evaluate the suitability of using a simple pendulum to measure g in this experiment." [4 marks]

**Model Answer:**
Advantages: Simple apparatus [1], easily repeatable [1], good precision possible with long pendulum and multiple swings [1].
Limitations: Air resistance affects results [1], measurement of length to centre of mass is difficult [1], assumes small angle approximation [1].
Overall: Suitable for classroom measurement of g to within a few percent [1].

**Marking Notes:**
- Requires balanced assessment
- Both positive and negative points
- Overall judgement needed

---

### DISCUSS
**Definition:** Consider different aspects of a topic; present and explore various viewpoints.

**Example Question:**
"Discuss the advantages and disadvantages of nuclear power compared to fossil fuels for electricity generation." [6 marks]

**Model Answer Structure:**
Level 3 (5-6 marks): Comprehensive discussion with multiple valid points on both sides, uses technical vocabulary, clear structure.

Points to include:
- Nuclear: No CO₂ during operation, high energy density, reliable baseload
- Nuclear: Radioactive waste, high initial cost, safety concerns
- Fossil: Cheaper construction, flexible output, established technology
- Fossil: CO₂ emissions, finite resources, air pollution
- Comparison and overall assessment

---

### COMPARE
**Definition:** Identify similarities and/or differences between two or more items.

**Example Question:**
"Compare elastic and inelastic collisions." [4 marks]

**Model Answer:**
Similarities:
- Momentum is conserved in both types [1]
- Newton's laws apply to both [1]

Differences:
- Kinetic energy is conserved in elastic collisions but not in inelastic [1]
- Objects bounce apart in elastic collisions; may stick together in perfectly inelastic [1]

**Marking Notes:**
- Must address both items
- Clear statement of similarity/difference
- Not just listing properties of each

---

## Graph and Diagram Commands

### SKETCH
**Definition:** Make a simple freehand drawing showing main features. Proportions should be reasonably accurate.

**Example Question:**
"Sketch a graph showing how the velocity of an object undergoing SHM varies with displacement." [2 marks]

**Requirements:**
- Elliptical shape (not circular)
- Maximum velocity at x = 0
- Velocity = 0 at x = ±A
- Axes labelled

---

### DRAW
**Definition:** Produce a more accurate diagram with labels and precise detail.

**Example Question:**
"Draw the circuit diagram for a potential divider using two resistors." [2 marks]

**Requirements:**
- Correct symbols
- All connections shown
- Components labelled
- Input and output voltages indicated

---

### PLOT
**Definition:** Mark data points on a graph and draw appropriate line/curve of best fit.

**Requirements:**
- Axes labelled with quantities and units
- Appropriate scales chosen
- Points plotted accurately (within half a small square)
- Line of best fit (not dot-to-dot)
- Anomalies identified if present
`;

// ============================================================================
// COMMON MISCONCEPTIONS
// ============================================================================

const OCR_ALEVEL_PHYSICS_MISCONCEPTIONS = `
# OCR A-Level Physics - Common Misconceptions

## Module 2: Foundations of Physics

### Units and Dimensions
**Misconception:** All physics equations must be memorised with their units.
**Reality:** Units can be derived from base units and dimensional analysis can verify equations.

**Misconception:** Prefixes like mega (M) and milli (m) can be used interchangeably.
**Reality:** M = 10⁶ (mega), m = 10⁻³ (milli). Case matters in SI prefixes.

### Uncertainties
**Misconception:** Percentage uncertainties are added for all operations.
**Reality:** For addition/subtraction, add absolute uncertainties. For multiplication/division/powers, add percentage uncertainties.

**Misconception:** More decimal places means more precision.
**Reality:** Precision is limited by the measuring instrument, not by calculation.

---

## Module 3: Forces and Motion

### Kinematics
**Misconception:** Acceleration is always in the direction of motion.
**Reality:** Acceleration is in the direction of the net force, which may be opposite to velocity (deceleration).

**Misconception:** An object at rest has no acceleration.
**Reality:** An object can momentarily be at rest while accelerating (e.g., ball at maximum height).

### Projectiles
**Misconception:** Heavier objects fall faster.
**Reality:** In a vacuum, all objects accelerate at g regardless of mass. Air resistance creates apparent differences.

**Misconception:** A projectile's horizontal velocity decreases during flight.
**Reality:** Horizontal velocity remains constant (no horizontal force in ideal conditions).

### Forces and Newton's Laws
**Misconception:** A force is needed to maintain motion.
**Reality:** Force causes acceleration, not motion. An object in motion stays in motion without force (Newton's first law).

**Misconception:** Action-reaction pairs can cancel out.
**Reality:** Action-reaction pairs act on different objects and therefore cannot cancel.

**Misconception:** Normal force always equals weight.
**Reality:** Normal force equals weight only when there's no vertical acceleration and no other vertical forces.

### Momentum
**Misconception:** Momentum is conserved only in elastic collisions.
**Reality:** Momentum is always conserved in all collisions (when no external forces act). Only kinetic energy distinguishes elastic from inelastic.

**Misconception:** Kinetic energy is always conserved.
**Reality:** Kinetic energy is only conserved in perfectly elastic collisions, which are rare in practice.

### Materials
**Misconception:** Stress and pressure are the same thing.
**Reality:** Stress refers specifically to internal forces in materials under deformation; pressure is force per unit area in fluids.

**Misconception:** Young modulus changes with the amount of material.
**Reality:** Young modulus is a material property, independent of dimensions.

---

## Module 4: Electrons, Waves and Photons

### Electricity
**Misconception:** Current is "used up" in a circuit.
**Reality:** Current is the same throughout a series circuit. Energy is transferred, not current.

**Misconception:** Electrons move at the speed of light in a wire.
**Reality:** Drift velocity is typically very slow (~mm/s). The electric field propagates at near light speed.

**Misconception:** Voltage causes current.
**Reality:** Voltage (potential difference) drives current, but current also depends on resistance.

**Misconception:** Batteries produce current.
**Reality:** Batteries provide EMF (energy per unit charge). Current depends on the complete circuit.

### Internal Resistance
**Misconception:** Internal resistance wastes all the energy.
**Reality:** Power is dissipated in both internal and external resistance. Maximum power transfer occurs when R = r.

### Waves
**Misconception:** Wave amplitude decreases with frequency.
**Reality:** Amplitude and frequency are independent properties of a wave.

**Misconception:** In a standing wave, energy travels along the medium.
**Reality:** In a standing wave, energy oscillates between kinetic and potential forms but doesn't propagate.

**Misconception:** Total internal reflection can occur when light travels from less dense to more dense medium.
**Reality:** TIR only occurs when light travels from a higher to lower refractive index medium.

### Interference
**Misconception:** In double-slit interference, light from one slit interferes with light from the same slit.
**Reality:** Interference occurs between light from different slits reaching the same point.

**Misconception:** Destructive interference destroys energy.
**Reality:** Energy is redistributed, not destroyed. Dark fringes have zero energy, but bright fringes have more.

### Quantum Physics
**Misconception:** Photons have mass because E = mc².
**Reality:** Photons are massless. Their energy-momentum relation is E = pc, and E = mc² applies to rest mass.

**Misconception:** Higher intensity light causes photoelectrons with higher kinetic energy.
**Reality:** Intensity affects the number of photoelectrons, not their energy. Energy depends on frequency.

**Misconception:** De Broglie wavelength only applies to electrons.
**Reality:** All matter has an associated wavelength, but it's only significant for small masses.

---

## Module 5: Newtonian World and Astrophysics

### Thermal Physics
**Misconception:** Heat and temperature are the same.
**Reality:** Heat is energy transfer; temperature is a measure of average kinetic energy of particles.

**Misconception:** Cold objects contain "coldness."
**Reality:** Cold objects simply have less internal energy. Heat always flows from hot to cold.

**Misconception:** Ideal gas molecules have no kinetic energy at absolute zero.
**Reality:** While KE would theoretically be zero at 0 K, quantum effects (zero-point energy) mean this isn't achievable.

### Circular Motion
**Misconception:** Centripetal force is a new type of force.
**Reality:** Centripetal force is the resultant force directed toward the centre; it can be tension, gravity, friction, etc.

**Misconception:** Centrifugal force pushes objects outward.
**Reality:** There is no outward force on the object. The sensation is due to inertia in a non-inertial reference frame.

### Simple Harmonic Motion
**Misconception:** SHM velocity is constant.
**Reality:** SHM velocity varies continuously, being maximum at equilibrium and zero at extremes.

**Misconception:** The period of SHM depends on amplitude.
**Reality:** For true SHM, period is independent of amplitude (this is called isochronous motion).

**Misconception:** At resonance, amplitude becomes infinite.
**Reality:** Damping always limits amplitude. Without damping (theoretical only), amplitude would increase indefinitely.

### Gravitational Fields
**Misconception:** There is no gravity in space.
**Reality:** Gravity exists everywhere. Astronauts experience weightlessness because they're in free fall.

**Misconception:** Gravitational potential is positive close to a mass.
**Reality:** Gravitational potential is always negative, approaching zero at infinity.

**Misconception:** Satellites need engines to stay in orbit.
**Reality:** Orbits are maintained by gravitational force alone. Engines are only needed for corrections.

### Astrophysics
**Misconception:** Red giants are red because they're hot.
**Reality:** Red giants are relatively cool compared to main sequence stars of similar luminosity. Wien's law relates colour to temperature.

**Misconception:** The Big Bang was an explosion in space.
**Reality:** The Big Bang was the expansion of space itself, not an explosion into pre-existing space.

---

## Module 6: Particles and Medical Physics

### Capacitors
**Misconception:** Capacitors store charge.
**Reality:** Capacitors store equal and opposite charges on their plates; net charge is zero. They store energy in the electric field.

**Misconception:** Charge flows through a capacitor.
**Reality:** Charge flows onto one plate and off the other; no charge crosses the dielectric.

**Misconception:** Time constant is the time to fully charge a capacitor.
**Reality:** Time constant τ = RC is the time to reach 63% of full charge. ~5RC for >99% charge.

### Electric Fields
**Misconception:** Electric field lines can cross.
**Reality:** Field lines never cross because that would imply two directions for the force at one point.

**Misconception:** Electric potential can be negative because charges can be negative.
**Reality:** Potential is negative near negative charges and positive near positive charges, by definition.

### Magnetic Fields
**Misconception:** Magnetic fields exert forces on stationary charges.
**Reality:** Magnetic force F = BQv requires relative motion between charge and field.

**Misconception:** Magnetic and electric fields are the same thing.
**Reality:** They are related (both aspects of electromagnetism) but have different properties and effects.

### Nuclear Physics
**Misconception:** Half-life is the time for half the atoms to decay.
**Reality:** Correct! But misconception is thinking it's always the same atoms or that after two half-lives, all atoms have decayed.

**Misconception:** Radioactive decay can be sped up or slowed down.
**Reality:** Radioactive decay is a nuclear property, unaffected by temperature, pressure, or chemical state.

**Misconception:** All radiation is equally harmful.
**Reality:** Alpha, beta, and gamma have different penetrating abilities and biological effects.

### Particle Physics
**Misconception:** Quarks can exist in isolation.
**Reality:** Quarks are always confined within hadrons due to color confinement.

**Misconception:** Antimatter is like science fiction - dangerous and explosive.
**Reality:** Antimatter is real and annihilates with matter, but the amounts produced are extremely small.

### Medical Physics
**Misconception:** X-rays are reflected by bones.
**Reality:** X-rays are absorbed/attenuated by dense material, not reflected.

**Misconception:** Ultrasound uses the Doppler effect to create images.
**Reality:** Basic ultrasound uses pulse-echo timing. Doppler ultrasound is a separate technique for blood flow measurement.
`;

// ============================================================================
// MATHEMATICAL SKILLS REQUIREMENTS
// ============================================================================

const OCR_ALEVEL_PHYSICS_MATHEMATICAL_SKILLS = `
# OCR A-Level Physics - Mathematical Skills Requirements

## Overview
At least 40% of the marks in A-Level Physics assess mathematical skills at Level 2 or above.

---

## Arithmetic and Numerical Computation

### Required Skills:
1. **Standard Form**
   - Convert between standard form and ordinary numbers
   - Calculate with numbers in standard form
   - Example: (3.0 × 10⁸) × (6.63 × 10⁻³⁴) = 1.99 × 10⁻²⁵

2. **Significant Figures**
   - Give answers to appropriate number of significant figures
   - Generally 2-3 sf for final answers
   - Match precision to least precise input data

3. **Ratios, Fractions, and Percentages**
   - Calculate percentage changes
   - Use ratios in proportionality
   - Example: Percentage uncertainty = (Δx/x) × 100%

4. **Estimation**
   - Make order of magnitude estimates
   - Use reasonable approximations
   - State assumptions clearly

### Common Applications:
- Unit conversions (mm to m, km/h to m/s)
- Powers of ten manipulation
- Significant figure determination
- Error propagation

---

## Handling Data

### Graphs:
1. **Plotting Requirements**
   - Choose appropriate scales (not starting at zero if inappropriate)
   - Label axes with quantities and units
   - Plot points accurately
   - Draw best fit line (straight or curved)

2. **Interpreting Graphs**
   - Determine gradient with units
   - Calculate y-intercept and its significance
   - Find area under curve (where relevant)
   - Identify proportionality relationships

3. **Linearisation**
   For y = mx + c form:
   - y = ax² → plot y against x² (gradient = a)
   - y = k/x → plot y against 1/x (gradient = k)
   - y = axⁿ → plot log y against log x (gradient = n)
   - y = Ae⁻ᵏˣ → plot ln y against x (gradient = -k)

### Statistical Concepts:
- Calculate mean values
- Identify anomalies
- Understand scatter and trends
- Use error bars where appropriate

---

## Algebra

### Required Skills:

1. **Rearranging Equations**
   - Change subject of formula
   - Handle equations with multiple variables
   - Example: v² = u² + 2as → s = (v² - u²)/(2a)

2. **Substitution**
   - Substitute numerical values with units
   - Handle compound units correctly
   - Track units through calculation

3. **Simultaneous Equations**
   - Solve pairs of linear equations
   - Example: Finding EMF and internal resistance from two sets of data

   From ε = I₁(R₁ + r) and ε = I₂(R₂ + r):
   Subtract to eliminate ε and solve for r

4. **Quadratic Equations**
   - Recognize when to use quadratic formula
   - Apply to projectile motion and other contexts
   - x = (-b ± √(b² - 4ac))/(2a)

5. **Logarithms and Exponentials**
   - Apply to decay equations: N = N₀e⁻λᵗ → ln N = ln N₀ - λt
   - Apply to capacitor discharge: V = V₀e⁻ᵗ/ᴿᶜ → ln V = ln V₀ - t/RC
   - Use logs to solve for time in exponential processes

---

## Geometry and Trigonometry

### Required Skills:

1. **Angles**
   - Work in degrees and radians
   - Convert between degrees and radians: θ(rad) = θ(deg) × π/180
   - Recognize small angle approximation: sin θ ≈ tan θ ≈ θ (in radians) for θ < 10°

2. **Trigonometric Functions**
   - sin, cos, tan and their inverses
   - Apply to vector resolution
   - Apply to wave equations
   - Example: Component of weight on slope = mg sin θ

3. **Pythagoras' Theorem**
   - Find resultant vectors
   - Example: v = √(vₓ² + vᵧ²)

4. **Geometry**
   - Areas and volumes of common shapes
   - Circumference and area of circles: C = 2πr, A = πr²
   - Surface area and volume of spheres: A = 4πr², V = (4/3)πr³

### Vector Applications:
- Resolution into components: Fₓ = F cos θ, Fᵧ = F sin θ
- Addition of perpendicular vectors
- Equilibrium calculations

---

## Calculus Concepts

### Understanding Required (not formal calculation):

1. **Differentiation**
   - Gradient of curve = rate of change
   - Velocity = ds/dt (gradient of s-t graph)
   - Acceleration = dv/dt (gradient of v-t graph)
   - Current = dQ/dt (rate of charge flow)
   - EMF = -dΦ/dt (rate of flux change)

2. **Integration**
   - Area under curve = cumulative effect
   - Displacement = area under v-t graph = ∫v dt
   - Work done = area under F-s graph = ∫F ds
   - Charge = area under I-t graph = ∫I dt

3. **Exponential Functions**
   - Recognize exponential growth and decay
   - Properties: d/dx(eˣ) = eˣ
   - Applications: Radioactive decay, capacitor discharge

### Key Relationships:
| Quantity | Rate of Change | Area Under Graph |
|----------|----------------|------------------|
| Displacement s | v = ds/dt | - |
| Velocity v | a = dv/dt | s = ∫v dt |
| Force F | - | W = ∫F ds |
| Current I | - | Q = ∫I dt |
| Magnetic flux Φ | ε = -dΦ/dt | - |

---

## Common Mathematical Contexts in Physics

### Kinematics:
- SUVAT equations
- Graphical analysis of motion
- Projectile calculations using trigonometry

### Energy and Momentum:
- Conservation equations
- Quadratic equations for collisions
- Efficiency calculations (percentages)

### Waves:
- Phase calculations (radians)
- Path difference calculations
- Frequency-wavelength relationships

### Fields:
- Inverse square relationships
- Potential-field strength relationships (gradients)
- Orbital mechanics (combining circular motion and gravitation)

### Exponential Processes:
- Radioactive decay: N = N₀e⁻λᵗ
- Capacitor discharge: Q = Q₀e⁻ᵗ/ᴿᶜ
- X-ray attenuation: I = I₀e⁻μˣ

---

## Mathematical Techniques for Graphs

### Finding Gradient:
1. Choose two points far apart on the line
2. Calculate Δy and Δx
3. Gradient = Δy/Δx
4. Include units (unit of y / unit of x)

### Finding Intercept:
1. Read where line crosses the y-axis
2. Or calculate: c = y - mx for any point on line

### Linearising Data:
| Original Form | Plot | Gradient | Intercept |
|--------------|------|----------|-----------|
| y = mx + c | y vs x | m | c |
| y = ax² | y vs x² | a | 0 |
| y = a/x | y vs 1/x | a | 0 |
| y = axⁿ | log y vs log x | n | log a |
| y = Ae^(kx) | ln y vs x | k | ln A |
| T² = (4π²/g)L | T² vs L | 4π²/g | 0 |

### Example - Finding g from Pendulum:
Given T = 2π√(L/g), square to get T² = (4π²/g)L
Plot T² against L: gradient = 4π²/g
Therefore g = 4π²/gradient
`;

// ============================================================================
// SI UNITS AND PREFIXES
// ============================================================================

const OCR_ALEVEL_PHYSICS_SI_UNITS = `
# OCR A-Level Physics - SI Units and Prefixes

## SI Base Units

| Quantity | Name | Symbol |
|----------|------|--------|
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Thermodynamic temperature | kelvin | K |
| Amount of substance | mole | mol |
| Luminous intensity | candela | cd |

---

## SI Derived Units

### Mechanics
| Quantity | Unit Name | Symbol | Base Units |
|----------|-----------|--------|------------|
| Velocity | - | m s⁻¹ | m s⁻¹ |
| Acceleration | - | m s⁻² | m s⁻² |
| Force | newton | N | kg m s⁻² |
| Energy/Work | joule | J | kg m² s⁻² |
| Power | watt | W | kg m² s⁻³ |
| Pressure | pascal | Pa | kg m⁻¹ s⁻² |
| Momentum | - | kg m s⁻¹ | kg m s⁻¹ |
| Frequency | hertz | Hz | s⁻¹ |

### Electricity and Magnetism
| Quantity | Unit Name | Symbol | Base Units |
|----------|-----------|--------|------------|
| Charge | coulomb | C | A s |
| Potential difference | volt | V | kg m² s⁻³ A⁻¹ |
| Resistance | ohm | Ω | kg m² s⁻³ A⁻² |
| Capacitance | farad | F | A² s⁴ kg⁻¹ m⁻² |
| Magnetic flux | weber | Wb | kg m² s⁻² A⁻¹ |
| Magnetic flux density | tesla | T | kg s⁻² A⁻¹ |
| Inductance | henry | H | kg m² s⁻² A⁻² |

### Thermal
| Quantity | Unit Name | Symbol | Notes |
|----------|-----------|--------|-------|
| Temperature | kelvin | K | SI base unit |
| Temperature | degree Celsius | °C | T(K) = T(°C) + 273.15 |
| Specific heat capacity | - | J kg⁻¹ K⁻¹ | m² s⁻² K⁻¹ |
| Specific latent heat | - | J kg⁻¹ | m² s⁻² |

### Radioactivity
| Quantity | Unit Name | Symbol | Definition |
|----------|-----------|--------|------------|
| Activity | becquerel | Bq | s⁻¹ (decays per second) |
| Absorbed dose | gray | Gy | J kg⁻¹ = m² s⁻² |
| Equivalent dose | sievert | Sv | J kg⁻¹ = m² s⁻² |

---

## SI Prefixes

| Prefix | Symbol | Factor | Power of 10 |
|--------|--------|--------|-------------|
| tera | T | 1 000 000 000 000 | 10¹² |
| giga | G | 1 000 000 000 | 10⁹ |
| mega | M | 1 000 000 | 10⁶ |
| kilo | k | 1 000 | 10³ |
| - | - | 1 | 10⁰ |
| centi | c | 0.01 | 10⁻² |
| milli | m | 0.001 | 10⁻³ |
| micro | μ | 0.000 001 | 10⁻⁶ |
| nano | n | 0.000 000 001 | 10⁻⁹ |
| pico | p | 0.000 000 000 001 | 10⁻¹² |
| femto | f | 10⁻¹⁵ | 10⁻¹⁵ |

### Common Conversions:
- 1 km = 1000 m = 10³ m
- 1 mm = 0.001 m = 10⁻³ m
- 1 μm = 10⁻⁶ m
- 1 nm = 10⁻⁹ m
- 1 MHz = 10⁶ Hz
- 1 kW = 1000 W = 10³ W
- 1 mA = 10⁻³ A
- 1 μF = 10⁻⁶ F
- 1 pF = 10⁻¹² F

---

## Checking Homogeneity of Equations

### Method:
1. Identify units of each term
2. Express all units in base units
3. Check all terms have identical units

### Example 1: Verify v² = u² + 2as
- LHS: v² has units (m s⁻¹)² = m² s⁻²
- RHS term 1: u² has units m² s⁻²
- RHS term 2: 2as has units m s⁻² × m = m² s⁻²
- All terms have units m² s⁻², equation is homogeneous ✓

### Example 2: Verify E = ½mv²
- LHS: E has units J = kg m² s⁻²
- RHS: mv² has units kg × (m s⁻¹)² = kg m² s⁻²
- Units match, equation is homogeneous ✓

### Example 3: Derive units of G from F = GMm/r²
- F in N = kg m s⁻²
- G = Fr²/(Mm) → units = (kg m s⁻²) × m² / (kg × kg)
- G has units: m³ kg⁻¹ s⁻² = N m² kg⁻²

---

## Important Non-SI Units in Physics

| Quantity | Non-SI Unit | Symbol | SI Equivalent |
|----------|-------------|--------|---------------|
| Energy | electronvolt | eV | 1.60 × 10⁻¹⁹ J |
| Mass | atomic mass unit | u | 1.661 × 10⁻²⁷ kg |
| Time | year | yr | 3.156 × 10⁷ s |
| Distance | light-year | ly | 9.46 × 10¹⁵ m |
| Distance | astronomical unit | AU | 1.50 × 10¹¹ m |
| Angle | degree | ° | π/180 rad |
| Temperature | degree Celsius | °C | T(K) - 273.15 |

---

## Dimensional Analysis Examples

### Finding the unit of an unknown quantity:

**Example:** The period T of a pendulum depends on length L and gravitational field strength g.
Find the relationship using dimensional analysis.

Assume: T = kLᵃgᵇ where k is dimensionless

Dimensions:
- T: [T] = s
- L: [L] = m
- g: [L][T]⁻² = m s⁻²

Therefore:
s = mᵃ × (m s⁻²)ᵇ = mᵃ⁺ᵇ s⁻²ᵇ

Comparing powers:
- Time: 1 = -2b → b = -½
- Length: 0 = a + b → a = ½

So T ∝ L^(½)g^(-½) = √(L/g)

The actual formula is T = 2π√(L/g), which has the form derived.
`;

// ============================================================================
// SYNOPTIC LINKS
// ============================================================================

const OCR_ALEVEL_PHYSICS_SYNOPTIC_LINKS = `
# OCR A-Level Physics - Synoptic Links

Paper 3 (Unified Physics) specifically tests synoptic understanding by requiring
students to link concepts from different modules. This section identifies key
connections across the specification.

---

## Mechanics → All Topics

### Motion Analysis Applies To:
- **Projectile motion** → Charged particles in fields (parabolic paths)
- **Circular motion** → Planetary orbits, particle accelerators, magnetic deflection
- **SHM** → AC circuits, wave motion, molecular vibrations
- **Momentum conservation** → Nuclear reactions, particle collisions

### Force Concepts Link To:
- **F = ma** → Charged particles in E-fields (F = qE)
- **Centripetal force** → Gravitational orbits, magnetic circular motion
- **Work and energy** → All energy transfer processes
- **Impulse** → Particle detection, radiation damage

---

## Waves → Quantum Physics

### Key Links:
1. **Wave-particle duality**
   - Light behaves as waves (interference, diffraction)
   - Light behaves as particles (photoelectric effect)
   - Electrons show wave properties (electron diffraction)

2. **Superposition principle**
   - Applies to all wave types
   - Explains interference patterns
   - Underpins quantum mechanics

3. **Standing waves**
   - Electron orbitals in atoms (de Broglie standing waves)
   - Quantisation of energy levels

4. **EM spectrum**
   - All regions are photons with E = hf
   - Medical imaging uses various regions (X-rays, radio waves for MRI)

---

## Electricity → Fields

### Parallel Concepts:

| Concept | Electric | Gravitational | Magnetic |
|---------|----------|---------------|----------|
| Field strength | E = F/q | g = F/m | B = F/(IL) |
| Point source | E = kQ/r² | g = GM/r² | (dipole) |
| Force law | F = kQq/r² | F = GMm/r² | F = BQv |
| Potential | V = kQ/r | V = -GM/r | (not defined) |
| Energy | W = qV | W = mV | W = qV (via EMF) |

### Circuit Concepts Applied:
- **Current flow** → Charged particle motion in conductors
- **Energy transfer** → E = qV applies to all charge acceleration
- **Resistance** → Analogous to friction/damping

---

## Thermal Physics → Other Areas

### Kinetic Theory Links:
1. **To Mechanics:**
   - Particle momentum and collisions
   - Pressure from momentum change
   - Energy from random motion

2. **To Astrophysics:**
   - Stellar temperature determines spectrum (Wien's law)
   - Gas laws in stellar atmospheres
   - Mean KE relates to temperature

3. **To Medical Physics:**
   - Temperature effects on body tissues
   - Thermal imaging
   - PET scanning (positron kinetic energy)

---

## Circular Motion → Multiple Applications

### Appears In:
1. **Gravitational fields** - Planetary/satellite orbits
2. **Magnetic fields** - Charged particle circular motion
3. **Particle physics** - Cyclotrons, synchrotrons
4. **Medical physics** - CT scanner rotation

### Key Relationship:
For any circular motion, the centripetal force equals:
- F = GMm/r² (gravitational)
- F = BQv (magnetic)
- F = mv²/r = mω²r (any circular motion)

---

## SHM → Resonance Applications

### Mechanical:
- Pendulum, mass-spring systems
- Bridges (resonance problems)
- Car suspensions (damped oscillations)

### Electrical:
- LC circuits oscillate like mechanical SHM
- Radio tuning uses electrical resonance

### Atomic/Nuclear:
- Molecular vibrations (infrared spectroscopy)
- Nuclear magnetic resonance (MRI)

---

## Exponential Processes

### Same Mathematical Form:
N = N₀e^(-λt) or equivalent

| Process | Equation | Time Constant/Half-life |
|---------|----------|-------------------------|
| Radioactive decay | N = N₀e^(-λt) | t½ = ln2/λ |
| Capacitor discharge | Q = Q₀e^(-t/RC) | τ = RC |
| X-ray attenuation | I = I₀e^(-μx) | x½ = ln2/μ |
| Damped oscillations | A = A₀e^(-γt) | Related to damping |

### Analysis Skills Transfer:
- Log-linear graphs give straight lines
- Gradient gives decay constant
- Half-life/time constant from any point

---

## Energy Conservation

### Universal Principle Applied To:
1. **Mechanics:** KE + PE = constant (conservative systems)
2. **Electricity:** qV = work done on charge
3. **Thermal:** Q = mcΔT (energy to heat)
4. **Nuclear:** E = mc² (mass-energy equivalence)
5. **Photons:** E = hf (photon energy)

### Energy Transformations:
- Chemical → Electrical (batteries)
- Electrical → Light (LEDs) → Quantised
- Nuclear → Thermal → Electrical (power stations)
- Gravitational → Kinetic (falling objects, orbits)

---

## Inverse Square Laws

### Appear In:
| Context | Law |
|---------|-----|
| Gravitation | F ∝ 1/r², g ∝ 1/r² |
| Electric fields | F ∝ 1/r², E ∝ 1/r² |
| Radiation intensity | I ∝ 1/r² |
| Sound intensity | I ∝ 1/d² |
| Light intensity | I ∝ 1/d² |

### Physical Reason:
Energy/field spreads over surface area of sphere (4πr²),
so intensity per unit area ∝ 1/r².

---

## Medical Physics Synoptic Links

### X-rays:
- Electromagnetic waves (Module 4)
- Photon energy E = hf (Module 4)
- Exponential attenuation like decay (Module 6)
- Electron acceleration in X-ray tube (Module 6)

### Ultrasound:
- Wave properties (Module 4)
- Reflection at boundaries (Module 4)
- Acoustic impedance Z = ρc (combines density and wave speed)

### PET:
- Positron emission (Module 6)
- Pair annihilation (Module 6)
- Energy-mass equivalence E = mc² (Module 6)
- Momentum conservation (Module 3)

### MRI:
- Nuclear magnetic resonance (Module 6)
- Precession and angular frequency (Module 5)
- Electromagnetic induction for detection (Module 6)

---

## Common Paper 3 Question Styles

### Multi-concept Problems:
1. "A satellite orbits Earth at altitude h..."
   - Links: Gravitational field, circular motion, orbital period

2. "An electron enters a region of crossed electric and magnetic fields..."
   - Links: Electric fields, magnetic fields, force balance

3. "Explain how PET scanning produces an image..."
   - Links: Nuclear decay, pair annihilation, momentum conservation, detection

4. "A star is observed with peak wavelength λ and luminosity L..."
   - Links: Wien's law, Stefan-Boltzmann law, inverse square law, Doppler effect

### Evaluation Questions:
- Compare different experimental methods
- Discuss advantages/limitations of techniques
- Evaluate models and their assumptions

---

## Key Equations That Link Topics

### Circular Motion + Gravitation:
For orbit: GMm/r² = mv²/r
Therefore: v = √(GM/r) and T² ∝ r³

### Fields + Particles:
Velocity selector: qE = Bqv, so v = E/B
Mass spectrometer: r = mv/(Bq)

### Waves + Quantum:
de Broglie: λ = h/p = h/mv
Links momentum (mechanics) to wavelength (waves)

### Energy Equivalences:
- Photon: E = hf = hc/λ
- Kinetic: E = ½mv² = p²/(2m)
- Electric: E = qV
- Mass: E = mc²
- Thermal (mean): E = 3/2 kT
`;

// ============================================================================
// ADDITIONAL WORKED EXAMPLES (31-35)
// ============================================================================

const OCR_ALEVEL_PHYSICS_MORE_EXAMPLES = `
# Additional Worked Examples (31-35)

### Example 31: Synoptic - Satellite Motion
**Question:**
A geostationary satellite orbits Earth at radius r from Earth's centre.
Mass of Earth M = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻².

(a) State two features of a geostationary orbit. [2 marks]
(b) Show that the orbital radius is approximately 42 000 km. [4 marks]
(c) Calculate the gravitational potential at this orbital radius. [2 marks]
(d) Calculate the kinetic energy of a 500 kg satellite in this orbit. [3 marks]

**Mark Scheme:**
(a)
- Period = 24 hours (same as Earth's rotation) [1]
- Orbits above the equator / equatorial orbit [1]
- (Also accept: orbits in same direction as Earth's rotation)

(b)
- Gravitational force provides centripetal force: GMm/r² = mω²r [1]
- ω = 2π/T = 2π/(24 × 3600) = 7.27 × 10⁻⁵ rad s⁻¹ [1]
- r³ = GM/ω² = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(7.27 × 10⁻⁵)² [1]
- r = 4.22 × 10⁷ m ≈ 42 000 km ✓ [1]

(c)
- V = -GM/r [1]
- V = -(6.67 × 10⁻¹¹ × 5.97 × 10²⁴)/(4.22 × 10⁷) = -9.43 × 10⁶ J kg⁻¹ [1]

(d)
- Orbital speed v = ωr = 7.27 × 10⁻⁵ × 4.22 × 10⁷ = 3070 m s⁻¹ [1]
- Or v = √(GM/r) = 3070 m s⁻¹ [1]
- KE = ½mv² = ½ × 500 × 3070² = 2.36 × 10⁹ J [1]

---

### Example 32: Synoptic - Particle in Crossed Fields
**Question:**
An electron enters a region where there is a uniform electric field E = 5.0 × 10⁴ V m⁻¹
acting vertically downward and a uniform magnetic field B = 2.5 mT acting into the page.

(a) In which direction must the electron travel to pass through undeflected? [2 marks]
(b) Calculate the required speed of the electron. [2 marks]
(c) The magnetic field is now switched off. Calculate the vertical acceleration of the electron. [2 marks]
(d) If the electron enters at this speed and travels through the field region of length 5.0 cm,
    calculate the vertical deflection. [3 marks]

**Mark Scheme:**
(a)
- Electric force on electron is upward (opposite to E as electron is negative) [1]
- For balance, magnetic force must be downward
- Using F = BQv and right-hand rule (for conventional current direction)
- Electron must travel horizontally to the right [1]

(b)
- For undeflected motion: qE = Bqv [1]
- v = E/B = 5.0 × 10⁴/(2.5 × 10⁻³) = 2.0 × 10⁷ m s⁻¹ [1]

(c)
- F = qE = 1.6 × 10⁻¹⁹ × 5.0 × 10⁴ = 8.0 × 10⁻¹⁵ N [1]
- a = F/m = 8.0 × 10⁻¹⁵/(9.11 × 10⁻³¹) = 8.78 × 10¹⁵ m s⁻² [1]

(d)
- Time in field: t = L/v = 0.05/(2.0 × 10⁷) = 2.5 × 10⁻⁹ s [1]
- Vertical deflection: y = ½at² [1]
- y = ½ × 8.78 × 10¹⁵ × (2.5 × 10⁻⁹)² = 2.7 × 10⁻² m = 2.7 cm [1]

---

### Example 33: Resonance and Damping
**Question:**
A child on a swing can be modeled as a simple pendulum of length 2.5 m.

(a) Calculate the natural frequency of the swing. [2 marks]
(b) Explain what is meant by resonance and how it applies to pushing the swing. [3 marks]
(c) The swing is given an initial amplitude of 0.50 m and released. Due to air resistance,
    the amplitude decreases by 5% per cycle. Calculate the amplitude after 10 complete cycles. [2 marks]
(d) Sketch a graph showing amplitude against time for this damped oscillation. [2 marks]

**Mark Scheme:**
(a)
- T = 2π√(L/g) = 2π√(2.5/9.81) = 3.17 s [1]
- f = 1/T = 0.316 Hz [1]

(b)
- Resonance occurs when the driving frequency equals the natural frequency [1]
- Maximum energy transfer / maximum amplitude occurs [1]
- To maintain oscillation, push at natural frequency (once per cycle at appropriate phase) [1]

(c)
- After each cycle, amplitude = 0.95 × previous amplitude [1]
- After 10 cycles: A = 0.50 × 0.95¹⁰ = 0.50 × 0.599 = 0.30 m [1]

(d)
- Oscillating curve with decreasing amplitude [1]
- Exponential envelope (amplitude decreases more steeply initially) [1]
- Period remains constant throughout

---

### Example 34: Particle Physics
**Question:**
In beta-minus decay, a neutron decays into a proton, an electron, and an antineutrino.

(a) Write an equation for this decay using quark notation. [2 marks]
(b) State the exchange particle responsible for this decay and its properties. [2 marks]
(c) Draw a Feynman diagram for beta-minus decay. [2 marks]
(d) Explain why the electron and antineutrino share the energy released in a continuous spectrum,
    rather than each having a fixed energy. [2 marks]

**Mark Scheme:**
(a)
- In quark terms: d → u + e⁻ + ν̄ₑ [1]
- Full equation: n → p + e⁻ + ν̄ₑ or udd → uud + e⁻ + ν̄ₑ [1]

(b)
- W⁻ boson [1]
- Properties: negative charge, very large mass (~80 GeV/c²), carrier of weak force [1]

(c)
- Quark line (d) converting to quark (u) [1]
- W⁻ boson emitted, then decaying to e⁻ and ν̄ₑ [1]
- Correct orientation and arrows for particles/antiparticles

(d)
- The decay is a three-body process (proton, electron, antineutrino) [1]
- Momentum and energy are shared between all products in variable proportions,
  leading to continuous spectrum of electron energies [1]

---

### Example 35: MRI Principles
**Question:**
Magnetic resonance imaging (MRI) uses the magnetic properties of hydrogen nuclei.

(a) Explain what happens to hydrogen nuclei when placed in a strong magnetic field. [2 marks]
(b) A radio frequency (RF) pulse is applied at the Larmor frequency. Explain the effect of this pulse. [2 marks]
(c) After the RF pulse, the nuclei undergo relaxation. Explain what happens during relaxation
    and how this produces a signal. [3 marks]
(d) Explain why MRI is particularly good for soft tissue imaging compared to X-rays. [2 marks]

**Mark Scheme:**
(a)
- Hydrogen nuclei (protons) align with or against the magnetic field [1]
- They precess (wobble) about the field direction at the Larmor frequency [1]

(b)
- The RF pulse is at the resonant (Larmor) frequency of the precessing protons [1]
- Protons absorb energy and flip to higher energy state / net magnetization rotates [1]

(c)
- During relaxation, protons return to their lower energy state [1]
- They release energy as RF radiation which induces a signal in receiver coils [1]
- Different tissues have different relaxation times, giving contrast [1]

(d)
- Soft tissues contain different amounts of water (hydrogen) giving contrast [1]
- X-rays are absorbed similarly by soft tissues so show little contrast;
  MRI detects hydrogen content which varies between tissues [1]
- Also: no ionising radiation risk with MRI
`;

// ============================================================================
// EXPORT FUNCTIONS FOR COMPREHENSIVE PROMPT ACCESS
// ============================================================================

/**
 * Get the complete OCR A-Level Physics specification content
 * Returns all module content for reference
 */
export function getOCRALevelPhysicsFullSpecification(): string {
  return OCR_ALEVEL_PHYSICS_COMPLETE_MODULES;
}

/**
 * Get detailed assessment objectives information
 */
export function getOCRALevelPhysicsAssessmentObjectives(): string {
  return `${OCR_ALEVEL_PHYSICS_ASSESSMENT_OBJECTIVES}\n\n${OCR_ALEVEL_PHYSICS_DETAILED_AOS}`;
}

/**
 * Get paper structure and mark scheme conventions
 */
export function getOCRALevelPhysicsPaperStructure(): string {
  return OCR_ALEVEL_PHYSICS_PAPER_STRUCTURE;
}

/**
 * Get all worked example questions with mark schemes
 */
export function getOCRALevelPhysicsWorkedExamples(): string {
  return `${OCR_ALEVEL_PHYSICS_WORKED_EXAMPLES}\n\n${OCR_ALEVEL_PHYSICS_MORE_EXAMPLES}`;
}

/**
 * Get all key formulae and equations
 */
export function getOCRALevelPhysicsFormulae(): string {
  return OCR_ALEVEL_PHYSICS_FORMULAE;
}

/**
 * Get detailed PAG (Practical Activity Group) guidance
 */
export function getOCRALevelPhysicsPAGGuidance(): string {
  return `${OCR_ALEVEL_PHYSICS_PAGS}\n\n${OCR_ALEVEL_PHYSICS_PAG_DETAILED}`;
}

/**
 * Get command words with detailed examples
 */
export function getOCRALevelPhysicsCommandWords(): string {
  return `${OCR_ALEVEL_PHYSICS_COMMAND_WORDS}\n\n${OCR_ALEVEL_PHYSICS_COMMAND_WORDS_DETAILED}`;
}

/**
 * Get common misconceptions by module
 */
export function getOCRALevelPhysicsMisconceptions(): string {
  return OCR_ALEVEL_PHYSICS_MISCONCEPTIONS;
}

/**
 * Get mathematical skills requirements
 */
export function getOCRALevelPhysicsMathematicalSkills(): string {
  return OCR_ALEVEL_PHYSICS_MATHEMATICAL_SKILLS;
}

/**
 * Get SI units and prefixes information
 */
export function getOCRALevelPhysicsSIUnits(): string {
  return OCR_ALEVEL_PHYSICS_SI_UNITS;
}

/**
 * Get synoptic links across modules
 */
export function getOCRALevelPhysicsSynopticLinks(): string {
  return OCR_ALEVEL_PHYSICS_SYNOPTIC_LINKS;
}

/**
 * Get topic-specific guidance for a given topic
 */
export function getOCRALevelPhysicsTopicGuidance(topicId: string): string {
  return ALEVEL_PHYSICS_TOPIC_GUIDANCE[topicId] || '';
}

/**
 * Get comprehensive prompt for synoptic questions (Paper 3 style)
 */
export function getOCRALevelPhysicsSynopticPrompt(
  topics: string[],
  difficulty: Difficulty
): string {
  return `You are an expert OCR A-Level Physics examiner creating a synoptic question for Paper 3 (Unified Physics).

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topics to link: ${topics.join(', ')}
Difficulty: ${difficulty}

${OCR_ALEVEL_PHYSICS_SYNOPTIC_LINKS}

Paper 3 Requirements:
- Questions must link concepts from different modules
- May include extended response (6 marks)
- Tests breadth of understanding
- Often uses novel contexts

Create ONE synoptic question that:
1. Requires knowledge from multiple modules
2. Tests application of physics to unfamiliar contexts
3. May include calculation and explanation components
4. Assesses ability to make connections across the specification

DIFFICULTY GUIDE:
- Easy: Links 2 related topics with straightforward application
- Medium: Links 2-3 topics with multi-step reasoning
- Hard: Complex scenario linking multiple areas, requires synthesis

OUTPUT FORMAT (use exact headers):
**Question:**
[Multi-part synoptic question with context and mark allocations]

**Mark Scheme:**
[Detailed marking points for each part]

**Explanation:**
[Full worked solution showing connections between topics]`;
}

/**
 * Get comprehensive prompt for practical-based questions with uncertainty analysis
 */
export function getOCRALevelPhysicsPracticalUncertaintyPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = ALEVEL_PHYSICS_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Physics examiner creating a practical question focusing on uncertainty analysis.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

${OCR_ALEVEL_PHYSICS_MATHEMATICAL_SKILLS}

Uncertainty Concepts to Test:
- Absolute and percentage uncertainties
- Combining uncertainties (multiplication/division: add percentages; addition/subtraction: add absolutes)
- Uncertainty in gradient from graph
- Significant figures in results
- Random vs systematic errors

Create ONE practical-based question that:
1. Provides experimental data with uncertainties
2. Requires calculation of combined uncertainties
3. Tests understanding of error propagation
4. May ask for evaluation of experimental technique

OUTPUT FORMAT (use exact headers):
**Question:**
[Practical question with data and uncertainty values]

**Mark Scheme:**
[Detailed marking points for uncertainty calculations]

**Explanation:**
[Full worked solution showing uncertainty analysis methods]`;
}

/**
 * Get prompt for medical physics questions (OCR-specific strength)
 */
export function getOCRALevelPhysicsMedicalPrompt(
  imagingTechnique: 'x-ray' | 'ultrasound' | 'pet' | 'mri' | 'ct',
  difficulty: Difficulty
): string {
  const techniqueGuidance: Record<string, string> = {
    'x-ray': `
X-ray Imaging:
- X-ray production: accelerated electrons, bremsstrahlung and characteristic radiation
- Attenuation: I = I₀e^(-μx)
- Half-value thickness: x½ = ln2/μ
- Contrast depends on attenuation coefficient differences
- CT uses multiple X-ray projections for 3D imaging
`,
    'ultrasound': `
Ultrasound Imaging:
- Piezoelectric transducers (transmit and receive)
- Pulse-echo technique
- Acoustic impedance: Z = ρc
- Reflection coefficient: R = (Z₂ - Z₁)²/(Z₂ + Z₁)²
- A-scan (amplitude) vs B-scan (brightness)
- Coupling gel to match impedances
`,
    'pet': `
PET Scanning:
- Positron-emitting radioisotope (e.g., F-18)
- Positron-electron annihilation: e⁺ + e⁻ → 2γ
- Two gamma photons at 180° (momentum conservation)
- Each photon has energy 0.511 MeV (E = mc²)
- Coincidence detection locates annihilation
- FDG tracer shows metabolic activity
`,
    'mri': `
Magnetic Resonance Imaging:
- Strong magnetic field aligns hydrogen nuclei
- Precession at Larmor frequency
- RF pulse at resonant frequency flips nuclei
- Relaxation produces RF signal
- T1 and T2 relaxation times give tissue contrast
- No ionising radiation
`,
    'ct': `
CT Scanning:
- Multiple X-ray projections around patient
- Computer reconstruction of 3D image
- Hounsfield units for tissue density
- Higher radiation dose than plain X-ray
- Excellent for bone and internal organ imaging
`
  };

  return `You are an expert OCR A-Level Physics examiner creating a medical physics question.

${OCR_ALEVEL_PHYSICS_PRINCIPLES}

Imaging Technique: ${imagingTechnique.toUpperCase()}
Difficulty: ${difficulty}

${techniqueGuidance[imagingTechnique]}

${ALEVEL_PHYSICS_TOPIC_GUIDANCE['ocr-alevel-physics-particles-medical']}

Medical Physics is a key strength of OCR Physics A specification.
Questions should test understanding of both physics principles and clinical applications.

Create ONE medical physics question that:
1. Tests understanding of the underlying physics
2. May include calculations (e.g., attenuation, acoustic impedance)
3. Could ask for comparison with other techniques
4. May include clinical context

OUTPUT FORMAT (use exact headers):
**Question:**
[Medical physics question with appropriate context and mark allocations]

**Mark Scheme:**
[Detailed marking points including physics principles and calculations]

**Explanation:**
[Full worked solution with clear physics reasoning]`;
}

// ============================================================================
// METADATA AND CONSTANTS
// ============================================================================

export const OCR_ALEVEL_PHYSICS_METADATA = {
  specification: 'OCR A-Level Physics A',
  specificationCode: 'H556',
  firstTeaching: 2015,
  firstAssessment: 2017,
  totalMarks: 270,
  papers: [
    { number: 1, name: 'Modelling Physics', marks: 100, duration: '2h 15m', weight: '37%' },
    { number: 2, name: 'Exploring Physics', marks: 100, duration: '2h 15m', weight: '37%' },
    { number: 3, name: 'Unified Physics', marks: 70, duration: '1h 30m', weight: '26%' }
  ],
  practicalEndorsement: {
    name: 'Practical Endorsement',
    assessment: 'Pass / Not Classified',
    pags: 12
  },
  assessmentObjectives: {
    AO1: { name: 'Knowledge and Understanding', weight: '33-37%' },
    AO2: { name: 'Application', weight: '40-45%' },
    AO3: { name: 'Analysis and Evaluation', weight: '20-25%' }
  },
  mathematicalSkillsMinimum: '40%',
  modules: [
    { number: 1, name: 'Development of Practical Skills in Physics' },
    { number: 2, name: 'Foundations of Physics' },
    { number: 3, name: 'Forces and Motion' },
    { number: 4, name: 'Electrons, Waves and Photons' },
    { number: 5, name: 'Newtonian World and Astrophysics' },
    { number: 6, name: 'Particles and Medical Physics' }
  ]
};

export const OCR_ALEVEL_PHYSICS_TOPICS = {
  module1: ['practical-skills', 'planning', 'implementing', 'analysis', 'evaluation'],
  module2: ['physical-quantities', 'si-units', 'uncertainties', 'scalars-vectors'],
  module3: ['kinematics', 'projectiles', 'dynamics', 'equilibrium', 'density-pressure',
            'work-energy-power', 'springs-hookes-law', 'stress-strain-young-modulus',
            'newtons-laws', 'momentum-collisions'],
  module4: ['charge-current', 'drift-velocity', 'pd-emf-power', 'resistance', 'resistivity',
            'circuit-rules', 'internal-resistance', 'potential-dividers', 'wave-properties',
            'em-spectrum', 'superposition-interference', 'stationary-waves', 'photons',
            'photoelectric-effect', 'wave-particle-duality', 'energy-levels-spectra'],
  module5: ['temperature-thermal-equilibrium', 'specific-heat-capacity', 'latent-heat',
            'ideal-gases', 'kinetic-theory', 'circular-motion', 'shm', 'energy-shm',
            'damping-resonance', 'gravitational-field-strength', 'gravitational-potential',
            'orbits', 'stars', 'hr-diagram', 'cosmology', 'hubble-law', 'big-bang'],
  module6: ['capacitance', 'capacitor-energy', 'capacitor-discharge', 'coulombs-law',
            'electric-field-strength', 'electric-potential', 'field-comparison',
            'magnetic-flux-density', 'force-current', 'force-moving-charge',
            'electromagnetic-induction', 'transformers', 'atomic-structure',
            'fundamental-particles', 'quarks-leptons', 'radioactivity', 'nuclear-decay',
            'binding-energy', 'fission-fusion', 'x-ray-imaging', 'radioactive-tracers',
            'ultrasound', 'mri']
};
