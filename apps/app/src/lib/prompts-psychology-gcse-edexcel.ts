// Edexcel GCSE Psychology (1PS0) Question Generation Prompts
// Based on analysis of official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/psychology-2017.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL GCSE PSYCHOLOGY SPECIFICATION DETAILS (1PS0)
// ============================================================================

const EDEXCEL_GCSE_PSYCH_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of psychological concepts, theories, research studies and methods | 35% |
| **AO2** | Apply knowledge and understanding in a range of contexts | 35% |
| **AO3** | Analyse and evaluate psychological theories, concepts, evidence and methodology | 30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Cognition and Behaviour | Development, Memory, Psychological Problems, Brain/Neuropsychology, Social Influence | 98 | 1hr 45m | 55% |
| **Paper 2** | Social and Cognitive Psychology | Research Methods + 2 Optional Topics (Criminal Psychology, Sleep and Dreaming) | 79 | 1hr 20m | 45% |

### Question Types
- Multiple choice (1 mark)
- Short answer (1-4 marks)
- Application questions (4-6 marks)
- Extended open response (9 marks)

### Key Command Words
- **Define**: Give precise meaning (AO1)
- **Identify/State**: Give brief answer (AO1)
- **Outline**: Brief description of main points (AO1)
- **Describe**: Detailed account (AO1)
- **Explain**: Give reasons; make clear (AO1/AO2)
- **Evaluate**: Consider strengths/weaknesses to judge (AO3)
- **Discuss**: Present arguments; reach conclusion (AO1/AO3)

### Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, recognition | Name terms, state features, identify components from memory |
| **Medium** | Description, explanation, application | Describe processes in detail, explain how/why, apply to scenarios |
| **Hard** | Evaluation, critical analysis, synthesis | Assess strengths/limitations, compare approaches, make judgements about evidence quality |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires critical evaluation of psychological research (methodology, ethics, validity)
- Must balance multiple perspectives (biological vs social explanations)
- Demands application of evaluative skills (reliability, generalisability, ecological validity)
- Requires sustained argument with evidence from studies
- Must reach justified conclusions about theories or research
`;

const EDEXCEL_GCSE_PSYCH_QUESTION_TEMPLATES = `
## Authentic Edexcel GCSE Psychology Question Formats

### Type 1: Multiple Choice (1 mark)
Format: Question with 4 options (A-D)
**Examples:**
- "Which of the following is an example of a monocular depth cue?"
- "Which memory store has limited capacity and duration?"

### Type 2: Define/Identify (1-2 marks)
Format: "Define [term]" or "Identify [feature]"
**Examples:**
- "Define the term 'conformity'" [1 mark]
- "Identify two features of the sensory register" [2 marks]
Marking: 1 mark per accurate point

### Type 3: Outline Questions (2-3 marks)
Format: "Outline [concept/finding/theory]"
**Examples:**
- "Outline what is meant by the term 'growth mindset'" [2 marks]
- "Outline one strength of questionnaires" [2 marks]
Marking: Identification + Elaboration

### Type 4: Describe Questions (3-4 marks)
Format: "Describe [study/theory/process]"
**Examples:**
- "Describe the procedure of Milgram's obedience study" [4 marks]
- "Describe how proactive interference affects memory" [3 marks]
Marking: Detailed description with accurate content

### Type 5: Explain Questions (3-4 marks)
Format: "Explain [concept/relationship]"
**Examples:**
- "Explain one limitation of Asch's conformity study" [3 marks]
- "Explain how schemas affect reconstructive memory" [4 marks]
Marking: Point + Explanation + Development

### Type 6: Application Questions (4-6 marks)
Format: "Using your knowledge of [topic], explain [scenario]"
**Examples:**
- "Using your knowledge of memory, explain why Tom found it difficult to remember" [4 marks]
- "Using your knowledge of classical conditioning, explain how Sarah developed her phobia" [4 marks]
Marking: Knowledge demonstrated + Application to context

### Type 7: Extended Writing (9 marks)
Format: "Evaluate [theory/explanation]" or "Discuss [topic]"
**Examples:**
- "Evaluate the biological explanation of addiction" [9 marks]
- "Discuss Freud's theory of dreaming" [9 marks]
Marking (Levels):
- Level 3 (7-9): Detailed knowledge; thorough evaluation; well-organised
- Level 2 (4-6): Some knowledge; some evaluation; some organisation
- Level 1 (1-3): Limited knowledge; limited evaluation; poor organisation
`;

const EDEXCEL_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE Psychology Mark Scheme Conventions

### 9-Mark Extended Writing Levels

**Level 3 (7-9 marks):**
- Demonstrates detailed knowledge and understanding
- Thorough evaluation with well-developed points
- Response is well organised with clear line of argument
- Appropriate use of psychological terminology

**Level 2 (4-6 marks):**
- Demonstrates some knowledge and understanding
- Some evaluation but may lack development
- Response has some organisation
- Some use of psychological terminology

**Level 1 (1-3 marks):**
- Demonstrates limited knowledge and understanding
- Limited or no evaluation
- Response lacks organisation
- Limited or no psychological terminology

**0 marks:** No relevant content

### Application Questions
Full marks require:
- Accurate psychological knowledge
- Clear link to the scenario/context given
- Use of information from the stem
- Explanation, not just description

### AO1, AO2, AO3 Requirements
**AO1 (Knowledge)**: Recall facts, theories, studies accurately
**AO2 (Application)**: Apply knowledge to new/given scenarios
**AO3 (Evaluation)**: Analyse strengths, weaknesses, make judgements
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE BASE
// ============================================================================

const EDEXCEL_GCSE_PSYCH_TOPIC_DEVELOPMENT = `
## Topic: Development

### Brain Development
- **Nature vs Nurture**: Brain development influenced by both genetic inheritance and environmental experiences
- **Neuroplasticity**: The brain's ability to change and adapt throughout life
- **Critical periods**: Key times when the brain is particularly receptive to learning (e.g., language acquisition)
- **Synaptic pruning**: Unused neural connections are eliminated, strengthening frequently used pathways

### Piaget's Theory of Cognitive Development
**Four Stages:**
1. **Sensorimotor (0-2 years)**: Learning through senses and motor actions; develops object permanence
2. **Pre-operational (2-7 years)**: Symbolic thinking develops; egocentric; cannot conserve
3. **Concrete operational (7-11 years)**: Logical thinking about concrete objects; can conserve; less egocentric
4. **Formal operational (11+ years)**: Abstract and hypothetical thinking; systematic problem-solving

**Key Concepts:**
- **Schema**: Mental framework for understanding the world
- **Assimilation**: Fitting new information into existing schemas
- **Accommodation**: Changing schemas to fit new information
- **Equilibration**: Balance between assimilation and accommodation
- **Conservation**: Understanding quantity stays same despite appearance changes

**Piaget's Conservation Tasks:**
- Liquid conservation: Same amount of liquid in different shaped containers
- Number conservation: Same number of counters in different arrangements
- Mass conservation: Same amount of clay in different shapes

### Effects of Learning on Development
- **Dweck's Theory of Mindset**:
  - **Fixed mindset**: Believe intelligence is fixed; avoid challenges; give up easily
  - **Growth mindset**: Believe intelligence can develop; embrace challenges; persist through setbacks
- Learning can physically change brain structure through neuroplasticity
- Early enrichment vs deprivation affects cognitive development

### Gunderson et al. (2013) Study - MUST KNOW
**Aim**: To investigate whether praise given to toddlers predicts their mindset later in childhood
**Procedure**:
- Longitudinal study following children from 14 months to 7-8 years
- Videotaped parent-child interactions during everyday activities
- Coded praise as: process praise (effort/strategies), person praise (ability), or other
- Measured children's mindsets 5 years later using questionnaire
**Findings**:
- Process praise at toddler stage predicted growth mindset at age 7-8
- Person praise did not predict mindset
- Effect was stronger for boys than girls
**Conclusion**: Type of praise given in early childhood influences development of mindset

**Evaluation of Gunderson Study:**
Strengths:
- High ecological validity (natural setting, real parent-child interactions)
- Longitudinal design shows development over time
- Large sample size (53 families)

Limitations:
- Correlational - cannot prove cause and effect
- Sample limited to Chicago area (generalisation issues)
- Only measured praise, not other parenting factors
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_MEMORY = `
## Topic: Memory

### Multi-Store Model of Memory (Atkinson & Shiffrin, 1968)
**Three Stores:**

1. **Sensory Register (SR)**
   - Capacity: Very large (all sensory information)
   - Duration: Very brief (less than 1 second)
   - Encoding: Modality specific (visual=iconic, auditory=echoic)
   - Function: Holds all incoming sensory information briefly

2. **Short-Term Memory (STM)**
   - Capacity: Limited (7+/-2 items - Miller's Magic Number)
   - Duration: Brief (18-30 seconds without rehearsal)
   - Encoding: Mainly acoustic (sound-based)
   - Function: Conscious processing of information

3. **Long-Term Memory (LTM)**
   - Capacity: Unlimited
   - Duration: Potentially permanent
   - Encoding: Mainly semantic (meaning-based)
   - Function: Permanent storage of information

**Processes:**
- **Attention**: Moves information from SR to STM
- **Rehearsal**: Maintains information in STM and transfers to LTM
- **Retrieval**: Brings information back from LTM to STM

### Encoding, Storage and Retrieval
- **Encoding**: Converting information into a form that can be stored
- **Storage**: Maintaining information over time
- **Retrieval**: Accessing stored information when needed

### Baddeley (1966) Study - MUST KNOW
**Aim**: To investigate whether STM and LTM encode information differently
**Procedure**:
- Participants given lists of words to remember
- Four conditions: acoustically similar, acoustically dissimilar, semantically similar, semantically dissimilar
- Tested immediate recall (STM) and delayed recall after 20 minutes (LTM)
**Findings**:
- STM: More errors with acoustically similar words (difficult to distinguish by sound)
- LTM: More errors with semantically similar words (difficult to distinguish by meaning)
**Conclusion**: STM encodes acoustically; LTM encodes semantically

**Evaluation of Baddeley Study:**
Strengths:
- Laboratory experiment with controlled conditions
- Clear operationalisation of variables
- Influential in understanding memory encoding

Limitations:
- Artificial word lists lack ecological validity
- May not reflect how we remember meaningful information
- Oversimplifies encoding (we can encode visually too)

### Bartlett's War of the Ghosts Study (1932) - MUST KNOW
**Aim**: To investigate how memory is reconstructed
**Procedure**:
- Participants read an unfamiliar Native American folk tale
- Asked to recall the story repeatedly over weeks/months
- Used serial reproduction (like Chinese whispers)
**Findings**:
- Stories became shorter and more coherent
- Unfamiliar details were changed to fit Western culture
- Rationalisation: Making the story more logical
- Cultural bias: Details changed to match own cultural expectations
**Conclusion**: Memory is reconstructive; we use schemas to fill gaps and make sense of information

**Evaluation of Bartlett Study:**
Strengths:
- High ecological validity (meaningful material)
- Demonstrated reconstructive nature of memory
- Practical applications (eyewitness testimony)

Limitations:
- Lacked control (no standardised instructions)
- Participants may have guessed what was expected
- Difficult to replicate exactly

### Interview Techniques
**Standard Police Interview Issues:**
- Leading questions can distort memory
- Interviewers may interrupt
- Questions in wrong order
- Stressful environment affects recall

**Cognitive Interview (Fisher & Geiselman):**
1. **Context reinstatement**: Mentally recreate the environment
2. **Report everything**: Even seemingly irrelevant details
3. **Recall in different orders**: Start from different points
4. **Change perspective**: Imagine from another viewpoint

**Evaluation of Cognitive Interview:**
Strengths:
- Research shows 40% more correct information than standard interview
- Non-leading approach reduces false memories

Limitations:
- Time-consuming and requires training
- May increase amount of incorrect information recalled
- Not suitable for all witnesses (children, distressed individuals)
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_PSYCHOLOGICAL_PROBLEMS = `
## Topic: Psychological Problems

### Effects of Mental Health Problems
- Personal effects: Suffering, reduced quality of life, relationship difficulties
- Social effects: Stigma, discrimination, isolation
- Economic effects: Healthcare costs, lost productivity, unemployment
- Impact on families and carers

### Depression
**Characteristics:**
- Emotional: Persistent sadness, hopelessness, loss of interest
- Cognitive: Negative thoughts, poor concentration, indecisiveness
- Behavioural: Sleep disturbance, appetite changes, social withdrawal
- Physical: Fatigue, aches and pains

**Biological Explanation:**
- Low levels of serotonin and noradrenaline
- Genetics: Depression runs in families
- Brain structure abnormalities

**Psychological Explanations:**
- **Cognitive approach (Beck)**: Negative triad (negative views of self, world, future)
- **Learned helplessness (Seligman)**: Learning that outcomes are uncontrollable

### Addiction
**Definition**: Physical and/or psychological dependence on a substance or behaviour

**Key Terms:**
- **Tolerance**: Needing more to achieve same effect
- **Withdrawal**: Unpleasant symptoms when substance stopped
- **Physical dependence**: Body needs the substance
- **Psychological dependence**: Mind craves the substance

**Biological Explanation:**
- Dopamine reward pathway
- Genetics influence vulnerability
- Brain changes with repeated use

**Psychological Explanations:**
- Classical conditioning: Environmental cues trigger cravings
- Operant conditioning: Positive reinforcement from pleasure, negative reinforcement from avoiding withdrawal
- Social learning: Observing others using substances

### Treatments

**Biological Treatments:**
- **Antidepressants (SSRIs)**: Increase serotonin availability
  - Strengths: Effective for many, easy to take
  - Limitations: Side effects, takes weeks to work, doesn't address cause

- **Drug therapy for addiction**:
  - Methadone for heroin addiction
  - Nicotine replacement therapy
  - Strengths: Reduces withdrawal symptoms
  - Limitations: May create new dependency

**Psychological Treatments:**
- **Cognitive Behavioural Therapy (CBT)**:
  - Identifies and challenges negative thought patterns
  - Develops coping strategies
  - Strengths: Addresses root cause, teaches skills, no side effects
  - Limitations: Requires motivation and engagement, time-consuming

- **Aversion therapy for addiction**:
  - Pairs substance with unpleasant stimulus
  - Strengths: Can be effective short-term
  - Limitations: Ethical issues, high relapse rates
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_BRAIN_NEUROPSYCHOLOGY = `
## Topic: The Brain and Neuropsychology

### Structure of the Brain
**Cerebral Cortex (outer layer):**
- **Frontal lobe**: Planning, decision-making, personality, motor control
- **Parietal lobe**: Sensory information processing, spatial awareness
- **Temporal lobe**: Hearing, language comprehension, memory
- **Occipital lobe**: Visual processing

**Other Structures:**
- **Cerebellum**: Balance, coordination, motor learning
- **Brain stem**: Basic life functions (breathing, heart rate)
- **Limbic system**: Emotions and memory

**Localisation of Function:**
- Different brain areas control different functions
- Damage to specific areas causes specific deficits
- Example: Broca's area damage causes speech production problems

### Neurons and Synaptic Transmission
**Neuron Structure:**
- **Cell body**: Contains nucleus
- **Dendrites**: Receive signals from other neurons
- **Axon**: Carries signal away from cell body
- **Myelin sheath**: Insulates axon, speeds up transmission
- **Axon terminals**: Release neurotransmitters

**Types of Neurons:**
1. **Sensory neurons**: Carry information from receptors to CNS
2. **Relay neurons**: Connect sensory and motor neurons in CNS
3. **Motor neurons**: Carry signals from CNS to effectors (muscles/glands)

**Synaptic Transmission:**
1. Electrical impulse travels down axon
2. Triggers release of neurotransmitters from vesicles
3. Neurotransmitters cross synaptic gap
4. Bind to receptors on post-synaptic neuron
5. Causes new electrical impulse (if excitatory) or inhibits firing (if inhibitory)

**Key Neurotransmitters:**
- **Dopamine**: Reward, pleasure, movement
- **Serotonin**: Mood, sleep, appetite
- **Noradrenaline**: Arousal, alertness
- **Acetylcholine**: Memory, muscle contraction

### Penfield (1958) Study - MUST KNOW
**Aim**: To map the functions of different brain areas
**Procedure**:
- Studied patients undergoing brain surgery for epilepsy
- Brain was exposed (patients awake - no pain receptors in brain)
- Electrically stimulated different areas of cortex
- Recorded patients' responses (movements, sensations, memories)
**Findings**:
- Different areas of cortex control different body parts
- Created homunculus maps showing motor and sensory cortex
- Some stimulation triggered memories and emotional responses
**Conclusion**: Brain functions are localised; different cortical areas control specific functions

**Evaluation of Penfield Study:**
Strengths:
- Direct observation of brain function
- Practical applications for surgery
- Led to detailed brain mapping

Limitations:
- Only studied epilepsy patients (may not be typical brains)
- Ethical issues with brain stimulation
- Cannot study all brain areas this way

### Phineas Gage (1848) Case Study
**What happened**: Iron rod passed through Gage's frontal lobe in accident
**Effects**: Survived but personality changed dramatically - became impulsive, inappropriate
**Significance**: Early evidence for role of frontal lobe in personality and decision-making
**Limitation**: Single case study, cannot generalise
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_SOCIAL_INFLUENCE = `
## Topic: Social Influence

### Conformity
**Definition**: Changing behaviour or beliefs to match the group

**Types of Conformity:**
- **Compliance**: Public agreement without private acceptance (superficial)
- **Internalisation**: Genuine change in belief and behaviour
- **Identification**: Conforming to be accepted by valued group

**Why do people conform?**
- **Normative social influence**: Desire to be liked/accepted
- **Informational social influence**: Desire to be correct

**Factors affecting conformity:**
- Group size (increases up to about 4-5 people)
- Unanimity (having an ally reduces conformity)
- Task difficulty (more conformity with difficult tasks)
- Self-esteem (lower self-esteem = more conformity)

### Obedience
**Definition**: Following orders from an authority figure

**Factors affecting obedience:**
- Perceived authority/legitimacy
- Proximity to authority figure
- Presence of others disobeying
- Gradual commitment
- Responsibility shifted to authority

### Milgram (1963) Obedience Study - MUST KNOW
**Aim**: To investigate how far people would obey an authority figure
**Procedure**:
- 40 male volunteers aged 20-50 from New Haven area
- Told it was study of learning and punishment
- "Teacher" (participant) had to give electric shocks to "learner" (confederate)
- Shocks increased from 15V to 450V in 15V increments
- Experimenter gave verbal prods: "Please continue", "The experiment requires you continue"
- Learner (in next room) gave scripted responses (protests, screams, silence)

**Findings**:
- 65% (26/40) went to maximum 450V shock
- 100% went to at least 300V
- Participants showed signs of stress (sweating, trembling, nervous laughter)
- Many participants continued despite distress

**Variations and Findings:**
- Location (rundown office): Dropped to 47.5%
- Teacher in same room as learner: Dropped to 40%
- Experimenter giving orders by phone: Dropped to 20.5%
- Other teachers refusing: Dropped to 10%

**Milgram's Agency Theory:**
- **Autonomous state**: Acting on own free will, responsible for actions
- **Agentic state**: Acting as agent of authority, responsibility shifted
- **Agentic shift**: Moving from autonomous to agentic state

**Evaluation of Milgram Study:**
Strengths:
- High control (standardised procedure)
- Groundbreaking findings about human behaviour
- Practical applications (understanding atrocities)
- High internal validity

Limitations:
- Ethical issues: Deception, psychological harm, right to withdraw compromised
- Low ecological validity (artificial situation)
- Androcentric (only male participants)
- Cultural and historical bias (1960s America)
- Demand characteristics (participants may have suspected)

### Bystander Effect
**Definition**: The more people present, the less likely any individual is to help

**Explanations:**
- **Diffusion of responsibility**: Others can help, so individual feels less responsible
- **Pluralistic ignorance**: Looking to others who appear calm, assume situation is not emergency
- **Evaluation apprehension**: Fear of being judged for intervening

### Piliavin et al. (1969) Subway Samaritan Study - MUST KNOW
**Aim**: To investigate factors affecting bystander intervention in a realistic setting
**Procedure**:
- Field experiment on New York subway
- Confederate collapsed on train (appeared drunk or ill with cane)
- Measured: time to help, number of helpers, comments made
- IV: Victim type (drunk vs ill) and race (black vs white)
**Findings**:
- Cane victim helped 95% of time; drunk victim 50%
- No significant effect of race
- Help came faster when more passengers present (opposite of laboratory findings)
- Same-race helping slightly more common
**Conclusion**: Type of victim affects helping; diffusion of responsibility may not always occur in real life

**Evaluation of Piliavin Study:**
Strengths:
- High ecological validity (real-life setting)
- Participants unaware they were in study
- Challenged laboratory findings

Limitations:
- No informed consent
- Limited control over variables
- Ethical issues (deception, potential distress)
- Difficult to replicate exactly

### Crowd Behaviour
**Deindividuation:**
- Loss of individual identity in crowds
- Reduced sense of personal responsibility
- Can lead to antisocial behaviour

**Factors leading to deindividuation:**
- Anonymity (crowds, uniforms, darkness)
- Altered consciousness
- Diffused responsibility
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_CRIMINAL_PSYCHOLOGY = `
## Topic: Criminal Psychology (Paper 2 Option)

### What Makes a Criminal?

**Biological Explanations:**
- **Genetics**: Criminality runs in families; twin studies show higher concordance for identical twins
- **Brain abnormalities**: Differences in prefrontal cortex associated with aggression
- **Hormones**: Testosterone linked to aggression

**Psychological Explanations:**
- **Learning theory**: Criminal behaviour learned through observation and reinforcement
- **Cognitive distortions**: Faulty thinking patterns that justify crime

**Social Explanations:**
- **Labelling**: Being labelled criminal becomes self-fulfilling prophecy
- **Social deprivation**: Poverty, poor education increase crime risk
- **Peer influence**: Association with criminal peers

### Raine et al. (1997) Study - MUST KNOW
**Aim**: To investigate brain differences in murderers pleading not guilty by reason of insanity (NGRI)
**Procedure**:
- 41 murderers (39 male, 2 female) compared with 41 matched controls
- All participants given PET scans while doing cognitive task
- Brain activity measured in different regions
**Findings**:
- Murderers showed lower activity in prefrontal cortex (impulse control, decision-making)
- Murderers showed abnormal activity in limbic system (emotions)
- Corpus callosum differences found
**Conclusion**: Brain dysfunction may predispose individuals to violence

**Evaluation of Raine Study:**
Strengths:
- Objective measurement (PET scans)
- Well-matched control group
- Replicated in other studies

Limitations:
- Correlation not causation (brain differences could be result, not cause)
- Cannot generalise to all criminals (NGRI sample)
- Ethical issues with labelling based on brain scans
- Reductionist (ignores social factors)

### Eyewitness Testimony
**Definition**: Evidence given by witnesses who saw a crime

**Factors affecting EWT accuracy:**
- Stress/anxiety
- Leading questions
- Post-event information
- Weapon focus
- Time delay
- Age of witness

**Loftus and Palmer (1974) Study:**
- Changed verb in question ("smashed" vs "contacted") affected speed estimates
- "Smashed" led to higher speed estimates and more false memories of broken glass
- Demonstrates reconstructive nature of memory and effect of leading questions

### Collection of Evidence

**Types of Evidence:**
- Physical evidence (DNA, fingerprints)
- Eyewitness testimony
- CCTV footage
- Confessions

**Problems with Evidence Collection:**
- Contamination of crime scenes
- False confessions
- Unreliable eyewitness testimony
- Cognitive biases in investigation

**Interviewing Suspects:**
- Reid technique (accusatory) - can lead to false confessions
- PEACE model (ethical UK approach)
- Importance of recording interviews
`;

const EDEXCEL_GCSE_PSYCH_TOPIC_SLEEP_DREAMING = `
## Topic: Sleep and Dreaming (Paper 2 Option)

### Stages of Sleep

**Sleep Cycle (approximately 90 minutes):**

**Non-REM Sleep:**
1. **Stage 1**: Light sleep, easily woken, muscle relaxation, theta waves
2. **Stage 2**: Deeper sleep, sleep spindles and K-complexes on EEG
3. **Stage 3/4 (Slow-wave sleep)**: Deep sleep, difficult to wake, delta waves, body restoration

**REM Sleep:**
- Rapid eye movements
- Brain very active (similar to waking)
- Vivid dreaming
- Muscle paralysis (REM atonia)
- Important for memory consolidation

### Internal Body Clock
- **Circadian rhythm**: 24-hour cycle controlling sleep-wake pattern
- **Suprachiasmatic nucleus (SCN)**: Master clock in hypothalamus
- **Melatonin**: Hormone released by pineal gland, increases sleepiness
- **Light**: Main zeitgeber (time-giver) that resets body clock

### Freud's Theory of Dreaming - MUST KNOW
**Key Ideas:**
- Dreams are "the royal road to the unconscious"
- Dreams represent wish fulfilment (desires we cannot express when awake)
- Dreams protect sleep by expressing desires symbolically

**Dream Content:**
- **Manifest content**: What the dream appears to be about
- **Latent content**: Hidden meaning (unconscious wishes)
- **Dream work**: Process of disguising latent content
  - Condensation: Combining elements
  - Displacement: Shifting importance between elements
  - Symbolism: Objects represent unconscious desires

**Freud's Little Hans Case Study (1909):**
- 5-year-old boy with phobia of horses
- Freud interpreted through Oedipus complex
- Hans's fear of horses symbolised fear of father
- Used to support psychoanalytic dream interpretation

**Evaluation of Freud's Theory:**
Strengths:
- First systematic theory of dreaming
- Recognises importance of unconscious
- Useful in therapy (exploring hidden conflicts)

Limitations:
- Unfalsifiable (any dream can be interpreted to fit)
- Subjective interpretation
- Based on case studies, not scientific evidence
- No way to directly test unconscious
- Overemphasis on sexual symbolism

### Activation-Synthesis Theory (Hobson & McCarley, 1977) - MUST KNOW
**Key Ideas:**
- Dreams are meaningless by-products of brain activity during REM sleep
- Random neural firing in brain stem (activation)
- Brain tries to make sense of random activity (synthesis)
- Dreams have no hidden meaning - just brain making sense of noise

**Process:**
1. Brain stem sends random signals during REM
2. Higher brain areas receive these signals
3. Brain attempts to create coherent narrative
4. Results in bizarre, illogical dream content

**Evaluation of Activation-Synthesis Theory:**
Strengths:
- Scientific basis (neuroscience evidence)
- Explains bizarre nature of dreams
- Supported by brain imaging studies
- Testable hypothesis

Limitations:
- Cannot explain why dreams sometimes make sense
- Cannot explain recurring dreams
- Cannot explain why some dreams relate to real life
- May oversimplify dream content
- Dismisses possible psychological significance

### Comparing Theories

| Aspect | Freud's Theory | Activation-Synthesis |
|--------|----------------|---------------------|
| Origin | Unconscious wishes | Random brain activity |
| Meaning | Deep psychological significance | No inherent meaning |
| Evidence | Case studies | Neuroscience research |
| Scientific | Unfalsifiable | Testable |
| Application | Therapy | Understanding brain function |
`;

// ============================================================================
// KEY STUDIES COMPREHENSIVE REFERENCE
// ============================================================================

const EDEXCEL_GCSE_PSYCH_KEY_STUDIES = `
## Key Studies for Edexcel GCSE Psychology

### Paper 1 Studies

**Development:**
- Gunderson et al. (2013): Praise and mindset development
- Piaget's conservation experiments

**Memory:**
- Baddeley (1966): Encoding in STM vs LTM
- Bartlett (1932): War of the Ghosts - reconstructive memory
- Peterson & Peterson (1959): Duration of STM

**Psychological Problems:**
- Research on effectiveness of CBT
- Drug therapy studies for depression

**Brain and Neuropsychology:**
- Penfield (1958): Brain mapping through stimulation
- Phineas Gage (1848): Frontal lobe and personality

**Social Influence:**
- Milgram (1963): Obedience to authority
- Piliavin et al. (1969): Subway Samaritan (bystander behaviour)
- Asch (1951): Conformity (line experiment)

### Paper 2 Studies

**Criminal Psychology:**
- Raine et al. (1997): Brain abnormalities in murderers
- Loftus and Palmer (1974): Leading questions and EWT

**Sleep and Dreaming:**
- Freud's dream analysis and Little Hans case
- Hobson & McCarley (1977): Activation-synthesis theory
`;

// ============================================================================
// EVALUATION POINTS BANK
// ============================================================================

const EDEXCEL_GCSE_PSYCH_EVALUATION_POINTS = `
## Standard Evaluation Points for Psychology Studies

### Methodology Evaluations

**Laboratory Experiments:**
Strengths:
- High control over variables
- Can establish cause and effect
- Replicable

Limitations:
- Low ecological validity (artificial setting)
- Demand characteristics
- May lack mundane realism

**Field Experiments:**
Strengths:
- Higher ecological validity
- Natural behaviour observed
- Less demand characteristics

Limitations:
- Less control over extraneous variables
- Difficult to replicate
- Ethical issues (lack of consent)

**Case Studies:**
Strengths:
- Rich, detailed data
- Can study rare phenomena
- Longitudinal perspective possible

Limitations:
- Cannot generalise from single cases
- Researcher bias in interpretation
- May lack objectivity

**Questionnaires/Self-Report:**
Strengths:
- Can collect large amounts of data quickly
- Can ask about thoughts and feelings
- Quantitative data for analysis

Limitations:
- Social desirability bias
- May not understand questions
- Relies on honesty and self-awareness

### Theoretical Evaluations

**Biological Explanations:**
Strengths:
- Scientific and objective
- Can lead to drug treatments
- Can be tested with technology (brain scans)

Limitations:
- Reductionist (ignores environment)
- Determinist (suggests no free will)
- Cannot explain cultural differences

**Psychological/Cognitive Explanations:**
Strengths:
- Considers mental processes
- Can lead to talking therapies
- Less deterministic than biological

Limitations:
- Cannot directly observe thoughts
- May oversimplify complex behaviour
- Difficult to test scientifically

**Social Explanations:**
Strengths:
- Considers context and environment
- Explains cultural differences
- Can lead to social interventions

Limitations:
- May ignore individual differences
- Difficult to establish cause and effect
- May be politically biased

### Ethical Evaluations
- Protection from harm
- Informed consent
- Right to withdraw
- Deception
- Confidentiality
- Debriefing
`;

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const EDEXCEL_GCSE_PSYCH_WORKED_EXAMPLES = `
## Worked Examples for Different Question Types

### Short Answer (2-3 marks) Example

**Question**: Outline what is meant by 'conformity'. [2 marks]

**Model Answer**:
Conformity is a type of social influence (1 mark) where a person changes their behaviour or beliefs to match those of a group (1 mark).

### Describe Question (4 marks) Example

**Question**: Describe the procedure of Milgram's obedience study. [4 marks]

**Model Answer**:
Milgram recruited 40 male participants through newspaper advertisement (1 mark). Each participant was assigned the role of 'teacher' while a confederate was the 'learner' (1 mark). The teacher had to give electric shocks to the learner for wrong answers, increasing from 15V to 450V (1 mark). An experimenter in a lab coat instructed the teacher to continue if they hesitated, using standard verbal prods (1 mark).

### Application Question (4-6 marks) Example

**Question**: Tom is 5 years old. He watches his mother pour juice from a short wide glass into a tall thin glass. Tom thinks the tall glass has more juice in it.

Using your knowledge of Piaget's theory, explain Tom's response. [4 marks]

**Model Answer**:
According to Piaget, Tom is in the pre-operational stage of cognitive development (1 mark for identifying stage). At this stage, children are unable to conserve (1 mark for identifying concept), which means they don't understand that quantity remains the same when appearance changes (1 mark for explaining concept). Tom is focusing on only one aspect (centration) - the height of the glass - rather than considering both height and width together (1 mark for application to scenario).

### Extended Writing (9 marks) Example

**Question**: Evaluate the multi-store model of memory. [9 marks]

**Level 3 Model Answer (7-9 marks)**:

The multi-store model proposes that memory consists of three separate stores: sensory register, short-term memory and long-term memory, each with different capacity, duration and encoding.

One strength of the model is that it is supported by research evidence. Baddeley (1966) found that STM encodes acoustically while LTM encodes semantically, supporting the idea that these are separate stores with different properties. This suggests the model has validity.

Another strength is that the model has practical applications. Understanding that rehearsal transfers information to LTM has helped develop learning strategies, such as repetition and practice, that improve memory.

However, a limitation is that the model is oversimplified. It suggests STM and LTM are single stores, but research shows LTM has different types (procedural, semantic, episodic). This suggests memory is more complex than the model proposes.

Furthermore, the model overemphasises rehearsal. Some information enters LTM without rehearsal, such as traumatic memories. Craik and Lockhart's levels of processing approach suggests that how deeply we process information is more important than rehearsal alone.

In conclusion, while the multi-store model was groundbreaking and is supported by some evidence, it is too simple to explain all aspects of memory. More recent models like the working memory model provide more detailed explanations.

**Marking rationale**: This answer would achieve Level 3 because it demonstrates detailed knowledge (AO1) of the model, provides thorough evaluation with developed strengths and limitations (AO3), uses psychological terminology appropriately, and is well-organised with a clear conclusion.
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const PSYCHOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'edexcel-gcse-psychology-development': `
${EDEXCEL_GCSE_PSYCH_TOPIC_DEVELOPMENT}

**Common Question Types:**
- Piaget's stages and key concepts (schema, assimilation, accommodation)
- Conservation tasks and what they show
- Gunderson study procedure, findings and evaluation
- Fixed vs growth mindset
- Application questions about children's cognitive development

**AO Requirements:**
- AO1: Describe stages, theories, and studies accurately
- AO2: Apply Piaget's theory to scenarios about children
- AO3: Evaluate Gunderson study, Piaget's theory strengths/limitations
`,

  'edexcel-gcse-psychology-memory': `
${EDEXCEL_GCSE_PSYCH_TOPIC_MEMORY}

**Common Question Types:**
- Multi-store model structure and features
- Encoding differences between STM and LTM (Baddeley)
- Bartlett's War of the Ghosts and reconstructive memory
- Cognitive interview techniques
- Application questions about memory failures

**AO Requirements:**
- AO1: Describe model components, studies, interview techniques
- AO2: Apply memory concepts to explain scenarios
- AO3: Evaluate models and studies
`,

  'edexcel-gcse-psychology-psychological-problems': `
${EDEXCEL_GCSE_PSYCH_TOPIC_PSYCHOLOGICAL_PROBLEMS}

**Common Question Types:**
- Characteristics of depression and addiction
- Biological vs psychological explanations
- Treatments and their effectiveness
- Application questions about individuals with mental health issues

**AO Requirements:**
- AO1: Describe characteristics, explanations, treatments
- AO2: Apply knowledge to scenarios
- AO3: Evaluate explanations and treatments
`,

  'edexcel-gcse-psychology-brain-neuropsychology': `
${EDEXCEL_GCSE_PSYCH_TOPIC_BRAIN_NEUROPSYCHOLOGY}

**Common Question Types:**
- Brain structure and function (lobes, localisation)
- Neuron structure and synaptic transmission
- Penfield study procedure, findings, evaluation
- Application questions about brain damage effects

**AO Requirements:**
- AO1: Describe brain structures, neurons, Penfield study
- AO2: Apply knowledge to scenarios about brain function
- AO3: Evaluate Penfield study and localisation theory
`,

  'edexcel-gcse-psychology-social-influence': `
${EDEXCEL_GCSE_PSYCH_TOPIC_SOCIAL_INFLUENCE}

**Common Question Types:**
- Milgram study (procedure, findings, variations, ethics)
- Types of conformity and reasons for conforming
- Agency theory (autonomous vs agentic state)
- Bystander effect and Piliavin study
- Application questions about obedience/conformity situations

**AO Requirements:**
- AO1: Describe studies, theories, concepts accurately
- AO2: Apply social influence concepts to scenarios
- AO3: Evaluate studies (especially ethical issues)
`,

  'edexcel-gcse-psychology-criminal-psychology': `
${EDEXCEL_GCSE_PSYCH_TOPIC_CRIMINAL_PSYCHOLOGY}

**Common Question Types:**
- Biological, psychological, social explanations of crime
- Raine study procedure, findings, evaluation
- Eyewitness testimony reliability
- Evidence collection issues

**AO Requirements:**
- AO1: Describe explanations and studies
- AO2: Apply theories to criminal case scenarios
- AO3: Evaluate explanations and research
`,

  'edexcel-gcse-psychology-sleep-dreaming': `
${EDEXCEL_GCSE_PSYCH_TOPIC_SLEEP_DREAMING}

**Common Question Types:**
- Sleep stages and their characteristics
- Freud's theory (manifest/latent content, wish fulfilment)
- Activation-synthesis theory
- Comparing the two theories
- Application questions about dream content

**AO Requirements:**
- AO1: Describe stages, theories accurately
- AO2: Apply theories to interpret dream scenarios
- AO3: Evaluate and compare theories
`
};

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelGCSEPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Psychology examiner creating exam-style questions.

${EDEXCEL_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

${EDEXCEL_GCSE_PSYCH_QUESTION_TEMPLATES}

${EDEXCEL_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_GCSE_PSYCH_KEY_STUDIES}

${EDEXCEL_GCSE_PSYCH_EVALUATION_POINTS}

${topicGuidance}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel GCSE Psychology specification.

**When testing biological content:**
- Focus on PSYCHOLOGICAL applications, not detailed biology
- Brain and neurons: Basic structure and function only, as in GCSE Psychology spec
- Neurotransmitters: Role in behavior, NOT chemical properties

**DO NOT include GCSE Biology content such as:**
- Detailed cell biology or genetics
- Detailed nervous system anatomy
- Biochemical processes

**For the topic "${topic.name}", test ONLY the psychology content in the specification.**

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic Edexcel Style**: Match real Edexcel paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Define, identify, outline (1-3 marks)
   - Medium: Describe, explain, application (4-6 marks)
   - Hard: Extended writing (9 marks)

## Assessment Objective Guidelines
- **AO1 questions**: Test recall of facts, theories, studies
- **AO2 questions**: Require application to scenarios
- **AO3 questions**: Require evaluation with developed points

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer
- "markScheme": Array of marking points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getEdexcelGCSEPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1).

**Question Types:**
- "Define [term]" [1 mark]
- "Identify [feature/type]" [1-2 marks]
- "Outline [concept]" [2 marks]
- "State two features of..." [2 marks]

**Mark Scheme Format:**
- 1 mark per correct point
- Accept equivalent wording

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring description or application (AO1/AO2).

**Question Types:**
- "Describe [study/theory]" [4 marks]
- "Explain [concept/limitation]" [3-4 marks]
- "Using your knowledge of [topic], explain..." [4 marks]

**For Application Questions:**
- Include a realistic scenario (use names like Emma, Tom, etc.)
- Scenario should clearly relate to the psychological concept
- Marks awarded for: identifying concept + explaining + applying to scenario

**Mark Scheme Format:**
- Award marks for: identification, explanation, elaboration, application
- Be specific about what earns each mark

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 9-mark extended writing question (AO1 + AO3).

**Question Types:**
- "Evaluate [theory/explanation]" [9 marks]
- "Discuss [topic]" [9 marks]

**9-Mark Level Descriptors:**
- Level 3 (7-9): Detailed knowledge; thorough evaluation with developed points; well-organised; uses terminology
- Level 2 (4-6): Some knowledge; some evaluation but may lack development; some organisation
- Level 1 (1-3): Limited knowledge; limited/no evaluation; poor organisation

**Model Answer Should Include:**
- Clear description of the theory/concept (AO1)
- Multiple evaluation points with elaboration (AO3)
- Strengths AND limitations
- Use of psychological terminology
- Clear conclusion

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel GCSE Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${topicGuidance}

**Critical Requirements:**
- Use authentic Edexcel command words
- Include mark allocation in square brackets
- For 9-mark questions, provide indicative content not just bullet points
- For application questions, the scenario must be realistic and detailed
- Use accurate psychological terminology

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

// Additional prompt function for specific question types
export function getEdexcelGCSEPsychologyStudyPrompt(topic: Topic, difficulty: Difficulty, studyName: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an Edexcel GCSE Psychology question about the study: ${studyName}

**Topic**: ${topic.name}
**Difficulty**: ${difficulty}

${EDEXCEL_GCSE_PSYCH_KEY_STUDIES}

${EDEXCEL_GCSE_PSYCH_EVALUATION_POINTS}

**For Study Questions, Test:**
Easy: Aim, procedure basics
Medium: Full procedure, findings, conclusions
Hard: Evaluation (strengths and limitations)

**Key Study Details to Include:**
- Accurate procedural details
- Correct findings with statistics where relevant
- Appropriate evaluation points with elaboration

**Marks**: ${markRange.min}-${markRange.max}

Return valid JSON:
{
  "content": "question text about ${studyName}",
  "marks": number,
  "solution": "model answer with accurate study details",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

// Prompt for application questions specifically
export function getEdexcelGCSEPsychologyApplicationPrompt(topic: Topic, concept: string): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `Generate an Edexcel GCSE Psychology APPLICATION question.

**Topic**: ${topic.name}
**Concept to Apply**: ${concept}

${topicGuidance}

${EDEXCEL_GCSE_PSYCH_WORKED_EXAMPLES}

**Application Question Requirements:**
1. Create a realistic scenario with named character(s)
2. Scenario should clearly demonstrate the psychological concept
3. Question should ask student to explain using their knowledge
4. Marks awarded for both knowledge AND application

**Format:**
"[Scenario text with realistic details]
Using your knowledge of [concept], explain [what needs explaining]." [4 marks]

**Mark Scheme Must:**
- Award marks for identifying relevant psychological concept
- Award marks for explaining the concept
- Award marks for linking concept to specific scenario details
- Be clear about what constitutes application vs just description

Return valid JSON:
{
  "content": "scenario + question",
  "marks": 4,
  "solution": "model answer showing clear application",
  "markScheme": ["AO1: concept identification", "AO1: explanation", "AO2: application point 1", "AO2: application point 2"]
}`;
}

// Prompt for 9-mark extended writing
export function getEdexcelGCSEPsychologyExtendedPrompt(topic: Topic, evaluationTopic: string): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `Generate an Edexcel GCSE Psychology 9-MARK EXTENDED WRITING question.

**Topic**: ${topic.name}
**Evaluation Topic**: ${evaluationTopic}

${topicGuidance}

${EDEXCEL_GCSE_PSYCH_EVALUATION_POINTS}

${EDEXCEL_GCSE_PSYCH_WORKED_EXAMPLES}

**9-Mark Question Requirements:**
- Use command word "Evaluate" or "Discuss"
- Topic should allow for both AO1 (knowledge) and AO3 (evaluation)
- Model answer should demonstrate Level 3 response

**Level Descriptors:**
Level 3 (7-9 marks):
- Detailed knowledge and understanding demonstrated
- Thorough evaluation with well-developed points
- Well-organised with clear line of argument
- Appropriate use of psychological terminology

Level 2 (4-6 marks):
- Some knowledge and understanding
- Some evaluation but may lack development
- Some organisation
- Some use of terminology

Level 1 (1-3 marks):
- Limited knowledge
- Limited or no evaluation
- Poor organisation
- Limited terminology

**Model Answer Structure:**
1. Introduction: Define/describe the concept
2. Description of theory/study (AO1)
3. Strength 1 with elaboration (AO3)
4. Strength 2 with elaboration (AO3)
5. Limitation 1 with elaboration (AO3)
6. Limitation 2 with elaboration (AO3)
7. Conclusion

Return valid JSON:
{
  "content": "9-mark question",
  "marks": 9,
  "solution": "Level 3 model answer (300-400 words)",
  "markScheme": ["Level 3 descriptor", "Level 2 descriptor", "Level 1 descriptor", "Key AO1 content", "Key AO3 evaluation points"]
}`;
}

// Compact prompt for auto-generation
export function getEdexcelGCSEPsychologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert Edexcel GCSE Psychology examiner creating an exam-style question.

${EDEXCEL_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (1-3 marks): Define, identify, outline - test basic recall
- Medium (4-6 marks): Describe, explain, application - test understanding
- Hard (9 marks): Evaluate, discuss - test analysis and evaluation

Create ONE exam-style question that:
1. Uses authentic Edexcel GCSE Psychology language
2. Tests understanding appropriate to GCSE level
3. Includes proper mark allocation
4. Matches the difficulty level specified

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with mark allocation in brackets, e.g. [4 marks]]

**Mark Scheme:**
[Marking points - one point per mark available, or level descriptors for 9-mark]

**Explanation:**
[Full worked answer with clear reasoning and psychological terminology]`;
}

/**
 * Psychology GCSE mark ranges based on Edexcel specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };   // Define, identify, outline - basic recall
    case 'medium':
      return { min: 4, max: 6 };   // Describe, explain, apply to scenario
    case 'hard':
      return { min: 9, max: 12 };  // Evaluate, discuss, extended response requiring analysis and judgement
  }
}
