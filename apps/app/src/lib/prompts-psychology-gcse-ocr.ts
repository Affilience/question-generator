// OCR GCSE Psychology (J203) Question Generation Prompts
// Based on analysis of official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/psychology-j203-from-2017/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR GCSE PSYCHOLOGY SPECIFICATION DETAILS (J203)
// ============================================================================

const OCR_GCSE_PSYCH_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of psychological ideas, processes, techniques and procedures | 35% |
| **AO2** | Apply knowledge and understanding in a range of contexts | 35% |
| **AO3** | Analyse and evaluate psychological information, ideas and evidence | 30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Studies and Applications 1 | Criminal Psychology, Development, Psychological Problems, Research Methods | 90 | 1hr 30m | 50% |
| **Paper 2** | Studies and Applications 2 | Social Influence, Memory, Sleep and Dreaming, Research Methods | 90 | 1hr 30m | 50% |

### Question Types
- Multiple choice (1 mark)
- Short answer (1-4 marks)
- Application questions (4-6 marks)
- Extended response (13 marks - synoptic)

### Key Command Words
- **Identify/State**: Brief factual answer (AO1)
- **Outline**: Set out main features (AO1)
- **Describe**: Detailed account (AO1)
- **Explain**: Give reasons; make clear (AO1/AO2)
- **Evaluate**: Consider strengths/weaknesses; judgement (AO3)
- **Discuss**: Present different viewpoints; reach conclusion (AO1/AO3)

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

const OCR_GCSE_PSYCH_QUESTION_TEMPLATES = `
## Authentic OCR GCSE Psychology Question Formats

### Type 1: Multiple Choice (1 mark)
Format: Question with 4 options (A-D)
**Examples:**
- "Which of the following is a positive symptom of schizophrenia?"
- "Which part of the brain is associated with language production?"

### Type 2: Identify/State (1-2 marks)
Format: "Identify/State [concept/feature]"
**Examples:**
- "State one aim of punishment" [1 mark]
- "Identify two features of REM sleep" [2 marks]
Marking: 1 mark per correct identification

### Type 3: Outline Questions (2-3 marks)
Format: "Outline [concept/finding]"
**Examples:**
- "Outline what is meant by 'normative social influence'" [2 marks]
- "Outline one criticism of Freud's theory" [2 marks]
Marking: Identification + Brief explanation

### Type 4: Describe Questions (3-4 marks)
Format: "Describe [study/theory/concept]"
**Examples:**
- "Describe the procedure of Bickman's study" [4 marks]
- "Describe how the cognitive approach explains depression" [4 marks]
Marking: Detailed, accurate description

### Type 5: Explain Questions (3-4 marks)
Format: "Explain [concept/relationship]"
**Examples:**
- "Explain one strength of the biological explanation of crime" [3 marks]
- "Explain how interference causes forgetting" [3 marks]
Marking: Point + Explanation + Elaboration

### Type 6: Application Questions (4-6 marks)
Format: "Using your knowledge of [topic], explain [scenario]"
**Examples:**
- "Using your knowledge of memory, explain why Jo struggled to remember" [4 marks]
- "Using your knowledge of obedience, explain the behaviour of the participant" [4 marks]
Marking: Knowledge + Application to context

### Type 7: Extended Response (13 marks - Synoptic)
Format: "Evaluate [topic] using your knowledge of psychology"
**Examples:**
- "Evaluate explanations for conformity. In your answer you should consider how well the research evidence supports the explanation" [13 marks]
- "Evaluate the effectiveness of treatments for addiction" [13 marks]

The 13-mark question appears at end of Section C in both papers and draws on knowledge from across the specification.

Marking (Levels):
- Level 4 (11-13): Thorough knowledge; effective evaluation; synoptic links
- Level 3 (7-10): Good knowledge; developed evaluation; some synoptic links
- Level 2 (4-6): Some knowledge; basic evaluation; limited synoptic links
- Level 1 (1-3): Limited knowledge; minimal evaluation; no synoptic links
`;

const OCR_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE Psychology Mark Scheme Conventions

### 13-Mark Extended Response Levels

**Level 4 (11-13 marks):**
- Thorough and accurate knowledge and understanding demonstrated
- Effective evaluation with well-developed points
- Effective use of relevant terminology
- Clear synoptic links to other areas
- Response is well organised with clear line of reasoning

**Level 3 (7-10 marks):**
- Good knowledge and understanding demonstrated
- Good evaluation with some development
- Good use of relevant terminology
- Some synoptic links evident
- Response is mostly well organised

**Level 2 (4-6 marks):**
- Some knowledge and understanding demonstrated
- Basic evaluation attempted
- Some use of relevant terminology
- Limited synoptic links
- Some organisation in response

**Level 1 (1-3 marks):**
- Limited knowledge and understanding
- Limited or no evaluation
- Limited use of terminology
- No synoptic links
- Poorly organised response

**0 marks:** No relevant content

### Synoptic Assessment
The 13-mark question requires students to:
- Draw on knowledge from different topic areas
- Make connections between concepts
- Apply understanding across contexts
- Show breadth and depth of knowledge

### Key Core Studies
**Paper 1:**
- Raine et al. (1997) - Brain abnormalities in murderers
- Piaget - Conservation studies
- Beck - Cognitive approach to depression

**Paper 2:**
- Asch (1951) - Conformity study
- Bickman (1974) - Uniform study
- Bartlett (1932) - War of the Ghosts
- Freud - Dream theory and Little Hans
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const CRIMINAL_PSYCHOLOGY_KNOWLEDGE = `
## Criminal Psychology (Paper 1)

### Effects of Punishment
**Four Aims of Punishment:**
1. **Retribution** - Punishment as payback for the crime; society's revenge
2. **Deterrence** - Discouraging criminal behaviour (individual and general)
3. **Incapacitation** - Removing offenders from society to protect the public
4. **Rehabilitation** - Reforming offenders to reduce reoffending

**Types of Punishment:**
- Custodial sentences (prison)
- Community orders
- Fines
- Restorative justice

**Effectiveness:**
- Recidivism rates in UK approximately 48% within one year
- Short sentences may be counterproductive due to prison subculture
- Rehabilitation programmes can reduce reoffending by 10-15%

### Criminal Mind Theories

**Biological Explanations:**
- **Brain dysfunction** - Raine et al. (1997) found reduced activity in prefrontal cortex of murderers
- **Genetic factors** - Twin studies show higher concordance in MZ twins for criminal behaviour
- **Lombroso's atavistic form** - Physical characteristics (now discredited)

**Psychological Explanations:**
- **Eysenck's Criminal Personality Theory:**
  - High Extraversion (E) - Seek stimulation, poor conditioning
  - High Neuroticism (N) - Anxious, overreactive
  - High Psychoticism (P) - Cold, aggressive, lacking empathy
- **Operant conditioning** - Crime reinforced through rewards (e.g., stolen goods)
- **Social Learning Theory** - Learning criminal behaviour through observation

### Collection of Evidence

**Unreliable Evidence:**
- Eyewitness testimony affected by leading questions, stress, weapon focus
- False confessions due to coercion or vulnerability

**Reliable Evidence:**
- DNA evidence
- Fingerprint analysis
- CCTV footage

**Cognitive Interview Technique:**
1. Mental reinstatement of context
2. Report everything
3. Recall in different orders
4. Recall from different perspectives
`;

const DEVELOPMENT_KNOWLEDGE = `
## Development (Paper 1)

### Early Brain Development
- **Nature vs Nurture debate** - Both genetic inheritance and environment shape development
- **Critical periods** - Time-sensitive periods for development (e.g., language acquisition before age 7)
- **Neuroplasticity** - Brain's ability to change and adapt through experience
- **Synaptic pruning** - Elimination of unused neural connections

### Piaget's Theory of Cognitive Development

**Four Stages:**

| Stage | Age | Key Features |
|-------|-----|--------------|
| **Sensorimotor** | 0-2 years | Object permanence develops; learning through senses |
| **Pre-operational** | 2-7 years | Egocentrism; animism; lack of conservation |
| **Concrete operational** | 7-11 years | Conservation understood; logical thinking about concrete objects |
| **Formal operational** | 11+ years | Abstract thinking; hypothetical reasoning |

**Key Concepts:**
- **Schema** - Mental framework for understanding the world
- **Assimilation** - Fitting new experiences into existing schemas
- **Accommodation** - Changing schemas to fit new experiences
- **Equilibration** - Balance between assimilation and accommodation

**Conservation Experiments:**
- Conservation of number (counters)
- Conservation of mass (clay)
- Conservation of liquid (beakers)
Pre-operational children fail these tasks due to centration (focusing on one aspect)

### Effects of Learning on Development

**Dweck's Mindset Theory:**
- **Fixed mindset** - Belief that abilities are fixed and cannot change
- **Growth mindset** - Belief that abilities can develop through effort

**Gunderson et al. (2013) Study:**
- **Aim:** Investigate relationship between parent praise and child mindset
- **Procedure:** Observed 53 parent-child pairs over 5 years; coded type of praise used
- **Types of praise:**
  - Person praise ("You're clever")
  - Process praise ("You worked hard")
  - Other praise (neutral)
- **Findings:** Process praise at ages 1-3 predicted growth mindset at age 7-8
- **Conclusion:** Type of praise affects development of academic mindset

**Evaluation of Gunderson:**
+ Longitudinal design shows development over time
+ High ecological validity (natural observations in home)
- Small sample size limits generalisability
- Correlational - cannot establish cause and effect
- Cultural bias (American sample)
`;

const PSYCHOLOGICAL_PROBLEMS_KNOWLEDGE = `
## Psychological Problems (Paper 1)

### Effects of Mental Health Problems

**Depression:**
- Affects 1 in 4 people in UK at some point
- Symptoms: Low mood, loss of interest, sleep disturbance, fatigue, concentration problems
- Impact on daily life: Work, relationships, physical health

**Anxiety Disorders:**
- Generalised anxiety disorder (GAD)
- Phobias (specific, social, agoraphobia)
- Panic disorder
- OCD

**Addiction:**
- Physical dependence and psychological dependence
- Tolerance and withdrawal symptoms
- Impact on health, relationships, finances

### Theories of Mental Health Problems

**Biological Explanations:**
- **Genetics** - Family and twin studies show heritability
- **Neurochemistry** - Imbalance of neurotransmitters (e.g., serotonin in depression)
- **Brain structure** - Differences in brain regions

**Cognitive Explanation (Beck's Cognitive Triad):**
- Negative view of self ("I am worthless")
- Negative view of the world ("Everything is difficult")
- Negative view of the future ("Things will never get better")
- Cognitive distortions: Overgeneralisation, catastrophising, selective attention

**Behavioural Explanation:**
- Classical conditioning - Phobias learned through association
- Operant conditioning - Behaviours maintained through reinforcement
- Little Albert study (Watson & Rayner, 1920)

### Treatments

**Drug Therapy:**
- Antidepressants (SSRIs) - Increase serotonin levels
- Anxiolytics (benzodiazepines) - Enhance GABA effect
+ Quick acting, relatively inexpensive
- Side effects, dependency risk, treats symptoms not cause

**Cognitive Behavioural Therapy (CBT):**
- Identifies and challenges negative thoughts
- Behavioural experiments to test beliefs
- Homework assignments
+ Addresses underlying thought patterns
+ No side effects
- Requires motivation and commitment
- May not work for severe cases

**Systematic Desensitisation:**
- Gradual exposure to feared stimulus
- Paired with relaxation techniques
- Creates new associations
+ Effective for specific phobias
+ Patient has control over pace
- Time-consuming
- May not address underlying causes
`;

const SOCIAL_INFLUENCE_KNOWLEDGE = `
## Social Influence (Paper 2)

### Conformity

**Types of Conformity:**
1. **Compliance** - Going along with others publicly but not privately
2. **Identification** - Conforming to a group we value and want to belong to
3. **Internalisation** - Accepting group norms privately and publicly

**Explanations for Conformity:**
- **Normative Social Influence (NSI)** - Desire to be accepted/liked; fear of rejection
- **Informational Social Influence (ISI)** - Desire to be right; looking to others for guidance in ambiguous situations

**Asch (1951) Line Study:**
- **Aim:** Investigate extent to which social pressure affects conformity
- **Procedure:** 123 male participants; line judgement task; 1 real participant + 7 confederates; confederates gave wrong answer on 12/18 trials
- **Findings:**
  - 37% conformity rate on critical trials
  - 75% conformed at least once
  - 25% never conformed
- **Factors affecting conformity:**
  - Group size (increases up to 3-4 then plateaus)
  - Unanimity (one dissenter reduces conformity to 5.5%)
  - Task difficulty (harder tasks = more ISI)

### Obedience

**Milgram (1963) Study:**
- **Aim:** Investigate how far people would obey an authority figure
- **Procedure:** 40 male participants; "teacher" role; administered "shocks" to confederate "learner"; shocks from 15V to 450V; experimenter used prods
- **Findings:**
  - 65% went to maximum 450V
  - 100% went to 300V
  - Signs of distress in participants
- **Variations:**
  - Different location: 47.5%
  - Telephonic instructions: 20.5%
  - Teacher forces hand on plate: 30%

**Explanations for Obedience:**
- **Agentic state** - Acting as agent of authority figure; diffused responsibility
- **Legitimacy of authority** - Authority figures seen as having right to give orders
- **Situational factors** - Uniform, setting, gradual commitment

**Bickman (1974) Uniform Study:**
- Field experiment in New York
- Confederate in guard, milkman, or civilian clothes
- Asked passers-by to perform tasks
- 92% obeyed guard vs 42% civilian

### Bystander Behaviour

**Bystander Effect:**
- Presence of others reduces helping
- Diffusion of responsibility
- Pluralistic ignorance

**Piliavin et al. (1969) Subway Study:**
- **Aim:** Investigate helping behaviour in natural setting
- **Procedure:** Confederates collapsed on New York subway; varied appearance (drunk vs ill; black vs white)
- **Findings:**
  - Ill-appearing person helped more quickly
  - Race had little effect
  - Help given 60% within 70 seconds
- **Cost-reward model** - People weigh costs of helping vs not helping

### Prosocial Behaviour

**Factors Affecting Helping:**
- **Situational factors** - Number of bystanders, cost of helping, clarity of need
- **Personal factors** - Mood, competence, similarity to victim
- **Empathy** - Understanding others' feelings promotes helping
`;

const MEMORY_KNOWLEDGE = `
## Memory (Paper 2)

### Recall and Recognition

**Types of Memory Retrieval:**
- **Recall** - Retrieving information without cues (e.g., essay questions)
- **Recognition** - Identifying previously encountered information (e.g., multiple choice)
- **Cued recall** - Using hints or prompts to retrieve information

**Encoding:**
- **Acoustic encoding** - Encoding sound (dominant in STM)
- **Semantic encoding** - Encoding meaning (dominant in LTM)
- **Visual encoding** - Encoding images

### Memory Models

**Multi-Store Model (Atkinson & Shiffrin, 1968):**

\`\`\`
Sensory Memory → Short-Term Memory → Long-Term Memory
    (brief)        (7±2 items,         (unlimited,
                    20-30 sec)           permanent)
\`\`\`

- Information flows through stores
- Rehearsal transfers information to LTM
+ Research support from amnesia cases
+ Clear structure
- Too simplistic (one type of STM/LTM)
- Rehearsal not always needed for LTM

**Working Memory Model (Baddeley & Hitch, 1974):**

Components:
1. **Central Executive** - Directs attention; allocates resources; limited capacity
2. **Phonological Loop:**
   - Phonological store (inner ear) - Holds acoustic information
   - Articulatory process (inner voice) - Rehearses information
3. **Visuo-spatial Sketchpad** (inner eye) - Visual and spatial information
4. **Episodic Buffer** - Integrates information from other components and LTM

+ Explains dual-task performance
+ Supported by brain-damaged patients
+ More detailed than MSM
- Central executive poorly understood
- Doesn't explain how information transfers to LTM

### Bartlett (1932) War of the Ghosts Study

**Aim:** Investigate how memory is reconstructed based on schemas

**Procedure:**
- Participants read Native American folk tale "War of the Ghosts"
- Story was unfamiliar and contained unusual concepts
- Recalled story after varying intervals (serial reproduction)

**Findings:**
- Story became shorter with each recall
- Confusing parts were omitted or rationalised
- Story became more consistent with Western culture
- Unfamiliar concepts changed to familiar ones (e.g., "canoe" became "boat")

**Conclusions:**
- Memory is reconstructive, not reproductive
- Schemas influence how we encode and retrieve information
- We fill gaps with schema-consistent information

**Evaluation:**
+ High ecological validity (real-world story)
+ Demonstrates reconstructive nature of memory
- Lack of control over variables
- Participants may have deliberately changed story
- Individual differences not fully explored

### Forgetting

**Interference Theory:**
- **Proactive interference** - Old information disrupts new learning
- **Retroactive interference** - New information disrupts old memories
Research support: McGeoch & McDonald (1931)

**Retrieval Failure:**
- Information available but not accessible
- **Context-dependent forgetting** - Godden & Baddeley (1975) divers study
- **State-dependent forgetting** - Internal state affects retrieval
`;

const SLEEP_AND_DREAMING_KNOWLEDGE = `
## Sleep and Dreaming (Paper 2)

### Functions of Sleep

**Restoration Theory (Oswald):**
- Sleep allows body and brain to recover
- Growth hormone released during SWS
- REM sleep restores brain functions
+ Sleep deprivation studies show cognitive impairment
+ Illness increases sleep need
- Some recovery occurs during wakefulness

**Evolutionary/Adaptive Theory:**
- Sleep has survival value
- Conserves energy when searching for food is dangerous
- Different species have different sleep patterns
+ Explains species differences
- Doesn't explain why we need to lose consciousness

### Sleep Stages

**NREM Sleep:**
- Stage 1: Light sleep; theta waves; easily awakened
- Stage 2: Sleep spindles; K-complexes
- Stages 3-4: Slow Wave Sleep (SWS); delta waves; deep sleep

**REM Sleep:**
- Rapid Eye Movement
- Brain activity similar to waking
- Muscle atonia (paralysis)
- Associated with vivid dreaming
- Increases through the night

**Sleep Cycle:**
- Approximately 90 minutes per cycle
- 4-6 cycles per night
- More SWS early in night
- More REM later in night

### Dreams

**Freud's Theory of Dreaming:**
- Dreams are "the royal road to the unconscious"
- **Manifest content** - What we remember; surface level
- **Latent content** - Hidden meaning; unconscious wishes
- **Dreamwork** - Process converting latent to manifest content:
  - Condensation - Combining elements
  - Displacement - Shifting importance
  - Symbolism - Representing ideas with symbols
+ Influential theory; basis of dream analysis
- Unfalsifiable; subjective interpretation
- Lacks scientific evidence

**Activation-Synthesis Theory (Hobson & McCarley):**
- Dreams result from random brain activity during REM
- Brain tries to make sense of this activity
- Creates narrative from random signals
+ Based on neuroscience research
+ Explains bizarre nature of dreams
- Doesn't explain meaningful dreams
- Oversimplifies dream content

### Sleep Disorders

**Insomnia:**
- Difficulty falling or staying asleep
- Affects 1 in 3 people
- Types: Onset insomnia, maintenance insomnia
- Causes: Stress, poor sleep hygiene, medical conditions
- Treatment: CBT-I, sleep hygiene, medication

**Narcolepsy:**
- Excessive daytime sleepiness
- Cataplexy (sudden muscle weakness)
- Sleep paralysis
- Hypnagogic hallucinations
- Caused by lack of hypocretin/orexin
- Affects 1 in 2,000 people

**Sleep Apnoea:**
- Breathing stops repeatedly during sleep
- Obstructive (airway blocked) or central (brain signal)
- Causes daytime fatigue, increased health risks
- Treatment: CPAP machine, lifestyle changes

### Research Methods in Sleep

**Polysomnography:**
- EEG (brain waves)
- EOG (eye movements)
- EMG (muscle activity)
- + Objective measurement
- + Can identify sleep stages
- - Artificial environment may affect sleep

**Sleep Diaries:**
- Self-report of sleep patterns
- + Easy to use; natural environment
- - Subjective; may be inaccurate

**Sleep Deprivation Studies:**
- Investigates effects of lack of sleep
- Peter Tripp and Randy Gardner cases
- Ethical concerns about harm
`;

// ============================================================================
// KEY STUDIES WITH FULL DETAILS
// ============================================================================

const KEY_STUDIES_DETAILED = `
## Key Studies - Detailed Information

### Bandura, Ross & Ross (1961) - Bobo Doll Study

**Aim:** To demonstrate that children learn aggressive behaviour through observation (Social Learning Theory)

**Procedure:**
- 72 children (36 boys, 36 girls) aged 3-6 years from Stanford nursery
- Three conditions: Aggressive model, Non-aggressive model, Control (no model)
- Children observed adult model playing with toys for 10 minutes
- Aggressive model attacked Bobo doll verbally and physically
- Children then mildly frustrated (shown toys but told they were for other children)
- Placed in room with Bobo doll and other toys for 20 minutes
- Behaviour observed and recorded

**Findings:**
- Children in aggressive condition showed significantly more aggression
- Imitated specific acts they had observed (e.g., hitting with mallet)
- Boys showed more physical aggression than girls
- Same-sex model had greater influence
- Children in non-aggressive/control conditions showed little aggression

**Conclusions:**
- Aggression can be learned through observation (vicarious reinforcement not needed)
- Children imitate specific behaviours
- Gender differences exist in aggression
- Supports Social Learning Theory

**Evaluation:**
+ High control - standardised procedure
+ Clear cause and effect established
+ Replicated with variations (film, cartoon)
- Low ecological validity (artificial setting)
- Bobo doll designed to be hit
- Ethical issues (teaching children aggression)
- Demand characteristics possible
- Short-term effects only measured

---

### Milgram (1963) - Obedience Study

**Aim:** To investigate how far ordinary people would go in obeying an authority figure

**Procedure:**
- 40 male participants aged 20-50; recruited through newspaper advertisement
- Told study was about effect of punishment on learning
- Drew lots (rigged) - participant always "teacher"
- Confederate always "learner" (strapped to electric chair)
- Teacher delivered "shocks" for wrong answers (15V-450V)
- Shocks were fake; pre-recorded responses from learner
- Experimenter used four prods if teacher hesitated

**Prods Used:**
1. "Please continue" / "Please go on"
2. "The experiment requires that you continue"
3. "It is absolutely essential that you continue"
4. "You have no other choice, you must go on"

**Findings:**
- 65% delivered maximum 450V shock
- 100% went to 300V
- Many participants showed signs of distress (sweating, trembling, nervous laughter)
- No participant stopped before 300V

**Conclusions:**
- Ordinary people can commit harmful acts when ordered by authority
- Situational factors override personality
- Demonstrates agentic state

**Evaluation:**
+ High control - standardised procedure
+ Influential - changed understanding of obedience
+ Variations show specific factors affecting obedience
- Ethical issues (deception, psychological harm)
- Demand characteristics possible
- Androcentric (all male participants)
- Historical/cultural context (1960s America)
- Ecological validity debated

---

### Loftus & Palmer (1974) - Leading Questions

**Aim:** To investigate how leading questions affect eyewitness testimony

**Experiment 1:**
**Procedure:**
- 45 students watched 7 film clips of car accidents
- Asked "About how fast were the cars going when they [verb] each other?"
- Five conditions with different verbs: contacted, hit, bumped, collided, smashed

**Findings:**
- Smashed: 40.5 mph estimate
- Collided: 39.3 mph
- Bumped: 38.1 mph
- Hit: 34.0 mph
- Contacted: 31.8 mph

**Experiment 2:**
**Procedure:**
- 150 students watched 1-minute film of multiple car accident
- Three conditions: "smashed," "hit," or control (not asked about speed)
- One week later asked: "Did you see any broken glass?" (there was none)

**Findings:**
- Smashed condition: 32% said yes
- Hit condition: 14% said yes
- Control: 12% said yes

**Conclusions:**
- Leading questions can alter memory (not just response)
- Wording affects both immediate recall and subsequent memory
- Post-event information can distort original memory

**Evaluation:**
+ Controlled laboratory conditions
+ Quantitative data - easy to compare
+ Practical applications for legal system
- Artificial setting - watching videos not real accidents
- Student sample - may not represent all witnesses
- Short clips - real events are longer and more complex
- No emotional involvement - real witnesses experience stress

---

### Bartlett (1932) - War of the Ghosts

**Aim:** To investigate how cultural schemas affect memory reconstruction

**Procedure:**
- Participants read unfamiliar Native American folk tale "War of the Ghosts"
- Story contained supernatural elements and non-Western narrative structure
- Participants recalled story at various intervals (serial reproduction method)
- Some used repeated reproduction (same person recalls multiple times)

**Findings:**
- Stories became shorter (from 330 to about 180 words)
- Story became more coherent and conventional
- Unfamiliar details changed or omitted:
  - "Canoe" sometimes became "boat"
  - "Something black came out of his mouth" became "he was dead" or "foamed at the mouth"
  - Supernatural elements often removed
- Each recall showed further distortion

**Conclusions:**
- Memory is reconstructive, not reproductive
- Schemas influence encoding and retrieval
- We unconsciously alter memories to fit expectations
- Cultural background shapes memory

**Evaluation:**
+ Pioneering research on reconstructive memory
+ High ecological validity (meaningful material)
+ Influenced modern understanding of memory
- Lacked experimental control
- Instructions unclear - may have encouraged deliberate changes
- Individual differences not fully explored
- Difficult to replicate exactly

---

### Piaget - Conservation Experiments

**Aim:** To investigate children's cognitive abilities at different developmental stages

**Conservation of Liquid:**
**Procedure:**
- Child shown two identical beakers with same amount of water
- Child agrees they contain the same amount
- Water from one beaker poured into taller, thinner container
- Child asked if amounts are still the same

**Conservation of Number:**
**Procedure:**
- Two rows of counters laid out in one-to-one correspondence
- Child agrees both rows have same number
- One row spread out to be longer
- Child asked if rows still have same number

**Findings:**
- Pre-operational children (under 7) typically fail conservation tasks
- They focus on appearance rather than underlying quantity
- Concrete operational children (7+) pass these tasks

**Key Concepts Demonstrated:**
- **Centration** - Focusing on one aspect (height of liquid) while ignoring others (width)
- **Irreversibility** - Cannot mentally reverse the transformation
- **Egocentrism** - Difficulty seeing from other perspectives

**Evaluation:**
+ Systematic observation of children
+ Influential theory of development
+ Practical applications in education
- May have underestimated children's abilities
- Language of questions may confuse children
- Cultural bias (Western sample)
- Stages may not be universal
`;

// ============================================================================
// RESEARCH METHODS KNOWLEDGE
// ============================================================================

const RESEARCH_METHODS_KNOWLEDGE = `
## Research Methods

### Experimental Designs

**Laboratory Experiment:**
- Conducted in controlled environment
- IV manipulated; DV measured
- High control over extraneous variables
+ Establishes cause and effect
+ High internal validity
+ Can be replicated
- Low ecological validity
- Demand characteristics
- Artificial setting

**Field Experiment:**
- Conducted in natural environment
- IV still manipulated by researcher
+ Higher ecological validity
+ Less demand characteristics
+ More natural behaviour
- Less control over extraneous variables
- Ethical issues (consent)
- Harder to replicate

**Natural Experiment:**
- IV occurs naturally (not manipulated)
- Researcher measures effect on DV
+ Studies variables that cannot be manipulated ethically
+ High ecological validity
- Cannot establish cause and effect
- Extraneous variables not controlled
- Rare events may be missed

### Experimental Designs

**Independent Groups:**
- Different participants in each condition
+ No order effects
+ Quicker to conduct
- Individual differences between groups
- Needs more participants

**Repeated Measures:**
- Same participants in all conditions
+ Controls individual differences
+ Fewer participants needed
- Order effects (fatigue, practice)
- Demand characteristics

**Matched Pairs:**
- Different participants matched on key variables
+ Controls individual differences
+ No order effects
- Time-consuming to match
- Cannot control all variables

### Sampling Methods

**Random Sampling:**
- Every member of population has equal chance
+ Unbiased; representative
- Difficult to achieve true randomness
- May still get unrepresentative sample

**Opportunity Sampling:**
- Using people who are available
+ Quick and easy
+ Cost-effective
- Biased sample
- Not representative

**Self-Selected (Volunteer) Sampling:**
- Participants volunteer to take part
+ Participants motivated
+ Ethical (informed consent)
- Volunteer bias
- May have specific characteristics

**Stratified Sampling:**
- Population divided into subgroups; random sample from each
+ Ensures representation of subgroups
- Time-consuming
- Must know population characteristics

### Data Types

**Quantitative Data:**
- Numerical data that can be measured
- Examples: Test scores, reaction times, number of items recalled
+ Objective; easy to analyse statistically
+ Can identify patterns and comparisons
- May lack detail
- May miss individual experiences

**Qualitative Data:**
- Descriptive, non-numerical data
- Examples: Interview transcripts, observations of behaviour
+ Rich and detailed
+ Captures individual experiences
- Subjective; difficult to analyse
- Time-consuming to collect

**Primary Data:**
- Collected first-hand by researcher
+ Specific to research aims
+ Researcher knows how collected
- Time-consuming
- Expensive

**Secondary Data:**
- Data collected by others
+ Quick and easy to access
+ Can use large datasets
- May not fit research needs
- Quality may be unknown

### Ethical Guidelines (BPS)

**Informed Consent:**
- Participants must agree to take part
- Must understand what is involved
- Can withdraw consent at any time

**Deception:**
- Should be avoided where possible
- Must be justified and debriefed after

**Right to Withdraw:**
- Participants can leave at any time
- Can withdraw their data
- Must not be pressured to continue

**Protection from Harm:**
- Physical and psychological safety
- Risk should be no greater than everyday life
- Must be monitored throughout

**Confidentiality:**
- Personal information must be protected
- Anonymity in reporting data
- Data stored securely

**Debriefing:**
- Explain true purpose of study
- Answer questions
- Return participant to pre-study state
- Provide support if needed

### Measures of Central Tendency

**Mean:**
- Add all values and divide by number of values
+ Uses all data
+ Most sensitive measure
- Affected by extreme values
- May give non-whole number

**Median:**
- Middle value when ordered
+ Not affected by extremes
+ Good for skewed data
- Ignores most of the data
- Can be unrepresentative

**Mode:**
- Most frequent value
+ Easy to find
+ Good for categorical data
- May be more than one mode
- May not exist

### Measures of Dispersion

**Range:**
- Highest value minus lowest value (+ 1)
+ Easy to calculate
+ Shows spread of data
- Affected by extreme values
- Only uses two values

**Standard Deviation:**
- Average deviation from the mean
+ Uses all data
+ More accurate than range
- More complex to calculate
- Affected by extreme values
`;

// ============================================================================
// WORKED EXAMPLES WITH MODEL ANSWERS
// ============================================================================

const WORKED_EXAMPLES = `
## Worked Examples with Model Answers

### Example 1: State Question (1 mark)

**Question:**
State one aim of punishment. [1 mark]

**Model Answer:**
One aim of punishment is deterrence - to discourage the offender and others from committing crimes in the future.

**Mark Scheme:**
- 1 mark for any of: retribution/deterrence/incapacitation/rehabilitation with brief explanation

---

### Example 2: Outline Question (2 marks)

**Question:**
Outline what is meant by 'normative social influence'. [2 marks]

**Model Answer:**
Normative social influence (NSI) is when a person conforms because they want to be accepted by a group or fear rejection (1 mark). The person publicly agrees but may privately disagree, resulting in compliance rather than internalisation (1 mark).

**Mark Scheme:**
- 1 mark: Identification - desire to fit in/be liked/avoid rejection
- 1 mark: Elaboration - public conformity/compliance/not private acceptance

---

### Example 3: Describe Question (4 marks)

**Question:**
Describe the procedure of Asch's conformity study. [4 marks]

**Model Answer:**
Asch recruited 123 American male students who were told the study was about visual perception (1 mark). Each real participant sat with 7 confederates who were instructed to give the same wrong answer on 12 of 18 trials (1 mark). Participants were shown a standard line and three comparison lines, and had to say aloud which comparison matched the standard (1 mark). The real participant always answered second to last, after hearing the confederates' answers, so they could either give the correct answer or conform to the group's wrong answer (1 mark).

**Mark Scheme:**
- 1 mark: Sample details (123 males/students)
- 1 mark: Confederates gave wrong answers/12 critical trials
- 1 mark: Line judgement task described
- 1 mark: Participant position/hearing others' answers

---

### Example 4: Explain Question (3 marks)

**Question:**
Explain one strength of the biological explanation of criminal behaviour. [3 marks]

**Model Answer:**
One strength is that there is scientific evidence supporting the biological explanation (1 mark). For example, Raine et al. (1997) used PET scans to compare the brains of 41 murderers with 41 non-murderers and found that murderers showed reduced activity in their prefrontal cortex, the area responsible for impulse control (1 mark). This objective evidence gives the biological explanation scientific credibility and suggests that some criminal behaviour may have a physiological basis that cannot be controlled (1 mark).

**Mark Scheme:**
- 1 mark: Identify strength (e.g., scientific evidence/objectivity)
- 1 mark: Explain/provide supporting evidence
- 1 mark: Elaborate on why this is a strength/implication

---

### Example 5: Application Question (4 marks)

**Question:**
Sarah watched a film in which the main character was arrested for shoplifting. The next day, Sarah stole some makeup from a shop.

Using your knowledge of social learning theory, explain Sarah's behaviour. [4 marks]

**Model Answer:**
According to social learning theory, Sarah learned to shoplift through observation of the character in the film, acting as a model (1 mark). Sarah may have paid attention to the character because she identified with them or found them attractive/similar to herself (1 mark). Sarah retained the behaviour in memory and was able to reproduce it the next day when she had the opportunity to steal (1 mark). If Sarah saw the character as being rewarded or not punished for shoplifting (vicarious reinforcement), this would increase her motivation to imitate the behaviour (1 mark).

**Mark Scheme:**
- Credit knowledge of SLT components (attention, retention, reproduction, motivation)
- Credit application to Sarah's specific situation
- Must link psychological concepts to the scenario given
- Maximum 2 marks if no application to scenario

---

### Example 6: Extended Response (13 marks)

**Question:**
Evaluate explanations for forgetting. In your answer, you should consider how well the research evidence supports the explanations. [13 marks]

**Model Answer (Level 4):**

Forgetting can be explained through interference theory and retrieval failure. Both explanations have research support but also limitations.

**Interference Theory:**
Interference occurs when one memory disrupts another. Proactive interference is when old information interferes with new learning, while retroactive interference is when new information disrupts old memories.

Research support comes from McGeoch and McDonald (1931), who found that learning similar material caused more forgetting than dissimilar material, supporting the idea that interference is greater when memories are similar. However, most interference research uses artificial materials like word lists in laboratory settings, which lacks ecological validity. In real life, memories are more meaningful and may be less susceptible to interference.

A strength of interference theory is that it can be tested experimentally, allowing cause and effect to be established. However, interference may not explain all forgetting - some memories persist despite similar information being learned.

**Retrieval Failure:**
This explanation suggests that information is still stored in memory but cannot be accessed because appropriate cues are missing. Context-dependent forgetting occurs when the environment at recall differs from encoding; state-dependent forgetting involves internal states.

Godden and Baddeley (1975) provided strong support. Divers learned words either underwater or on land and recalled best when the learning and recall contexts matched. This has practical applications - students should study in conditions similar to their exam environment.

However, the effect of context is not always found. Studies using less distinct contexts show weaker effects, suggesting context-dependent forgetting may only apply in extreme situations.

**Evaluation and Comparison:**
Both explanations have validity and may work together - interference may be worse when retrieval cues are absent. Research methods in this area show good scientific rigour but often lack ecological validity. Forgetting in real life may involve multiple processes including emotional factors not fully explained by these theories.

In conclusion, both interference and retrieval failure are supported by research evidence, though the artificial nature of many studies limits their application to everyday forgetting. The explanations may complement each other rather than competing, with retrieval failure explaining why interference effects can sometimes be overcome with appropriate cues.

**Mark Scheme (Level Descriptors):**

Level 4 (11-13 marks):
- Thorough knowledge of at least two explanations
- Effective evaluation using research evidence
- Clear synoptic links between explanations
- Well-organised response with appropriate terminology

Level 3 (7-10 marks):
- Good knowledge of explanations
- Good evaluation with some research evidence
- Some comparison or synoptic links
- Mostly well organised

Level 2 (4-6 marks):
- Some knowledge demonstrated
- Basic evaluation attempted
- Limited use of research evidence
- Some organisation

Level 1 (1-3 marks):
- Limited knowledge
- Minimal or no evaluation
- No clear organisation
`;

// ============================================================================
// EVALUATION TOOLKIT
// ============================================================================

const EVALUATION_TOOLKIT = `
## Evaluation Toolkit - PEEL Paragraphs

### PEEL Structure for Extended Responses

**P** - Point: State your evaluative point clearly
**E** - Evidence: Support with research or examples
**E** - Explain: Show why this matters/what it means
**L** - Link: Connect back to question/make judgement

---

### Research Methodology Evaluation Points

**Laboratory Experiments:**
PEEL Example (Strength):
**P:** A strength is the high level of control over variables.
**E:** For example, in Loftus and Palmer's study, all participants saw the same film clips and were asked questions in a standardised way.
**E:** This control means we can be more confident that changes in speed estimates were caused by the different verbs used (IV), not by extraneous variables.
**L:** Therefore, laboratory experiments allow us to establish cause and effect relationships.

PEEL Example (Weakness):
**P:** However, a limitation is the low ecological validity.
**E:** In Loftus and Palmer's study, participants watched short video clips rather than witnessing real accidents.
**E:** This artificial setting means participants may have responded differently than real eyewitnesses who experience fear and stress.
**L:** This limits how far we can generalise the findings to real-world eyewitness testimony.

**Field Experiments:**
PEEL Example (Strength):
**P:** A strength is the higher ecological validity compared to laboratory experiments.
**E:** Bickman's uniform study was conducted on real streets with genuine members of the public.
**E:** Participants were not aware they were in a study, so their behaviour was natural and not affected by demand characteristics.
**L:** This means the findings about uniform affecting obedience are more likely to apply to real-life situations.

---

### Sample Evaluation Points

**Small Sample Size:**
**P:** A limitation is the small sample size.
**E:** [Study] only used [number] participants.
**E:** This makes it difficult to generalise findings to the wider population as the sample may not be representative.
**L:** Therefore, we should be cautious about drawing broad conclusions from this research.

**Cultural/Historical Bias:**
**P:** A weakness is the cultural bias in the sample.
**E:** [Study] only used [demographic] participants from [location/time].
**E:** Behaviour and attitudes may differ across cultures/time periods due to different social norms.
**L:** This limits how far we can apply these findings to other populations.

**Ethical Issues:**
**P:** An issue with [study] is the ethical problems involved.
**E:** Participants experienced [psychological harm/deception/lack of informed consent].
**E:** This raises questions about whether the knowledge gained justifies the treatment of participants.
**L:** However, the study led to important ethical guidelines being developed and has contributed valuable knowledge to psychology.

---

### Theory Evaluation Points

**Reductionism:**
**P:** A criticism of [theory] is that it is reductionist.
**E:** It reduces complex human behaviour to [simple factors, e.g., brain chemistry/learned associations].
**E:** This ignores [other factors, e.g., cognitive processes/social context/individual differences].
**L:** A more holistic approach that considers multiple factors may provide a more complete understanding.

**Determinism:**
**P:** The [theory] is deterministic.
**E:** It suggests that behaviour is determined by [genes/environment/unconscious], leaving little room for free will.
**E:** This has implications for responsibility - if behaviour is determined, can people be held responsible for their actions?
**L:** Most psychologists now accept that behaviour involves an interaction between deterministic factors and personal choice.

**Nature vs Nurture:**
**P:** The [theory] takes a [nature/nurture] position.
**E:** It emphasises [biological/environmental] factors in explaining behaviour.
**E:** However, research suggests that most behaviour results from an interaction between nature and nurture.
**L:** Therefore, a more interactionist approach may be more valid.

**Practical Applications:**
**P:** A strength of [theory/research] is its practical applications.
**E:** [Example of application, e.g., CBT based on cognitive theory; cognitive interview based on memory research].
**E:** This shows that the theory has real-world value and can help improve people's lives.
**L:** The success of these applications provides support for the underlying theory.

---

### Study-Specific Evaluation Points

**Bandura (1961):**
+ Controlled conditions allow cause and effect to be established
+ Replicated with variations (film, cartoon) showing robust findings
- Bobo doll designed to be hit - may not represent real aggression
- Short-term effects only - unclear if aggression persists
- Ethical issues with teaching children aggressive behaviour

**Milgram (1963):**
+ Influential - changed understanding of obedience
+ Variations identify specific factors affecting obedience
+ High control - standardised procedure
- Ethical issues - deception and psychological harm
- May not represent real-life obedience situations
- All male sample - cannot generalise to women

**Loftus & Palmer (1974):**
+ Controlled conditions - high internal validity
+ Practical applications for legal system
+ Shows importance of question wording
- Artificial setting - film clips not real events
- Student sample - may not represent real witnesses
- Lacks emotional involvement of real witnesses

**Bartlett (1932):**
+ Pioneering research on reconstructive memory
+ Uses meaningful material - high ecological validity
+ Shows importance of schemas in memory
- Lacked experimental control
- Participants may have deliberately changed story
- Difficult to replicate exactly

**Asch (1951):**
+ High control over variables
+ Identifies factors affecting conformity
+ Clear, measurable results
- Artificial task - trivial importance
- Lacks ecological validity - line judgement not meaningful
- All male sample from specific cultural context
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  return `You are an expert OCR GCSE Psychology examiner creating exam-style questions.

## OCR PSYCHOLOGY STYLE
**OCR's Core Studies Interpretive Approach:** Detailed study-focused questions emphasizing classic research and analytical interpretation skills.
- **Core studies emphasis** - focus on learning specific classic and contemporary psychological studies in detail
- **Interpretive and analytical** - questions require deeper interpretation and critical analysis of psychological research
- **Studies-through-approach structure** - unique methodology building evaluation skills through detailed study analysis
- **More detailed topic coverage** - covers psychological topics in greater depth than other boards
- **Real-life application requirement** - questions require applying psychological knowledge to unprepared real-world scenarios
- **Classic research focus** - emphasis on well-known, foundational psychological studies from diverse areas

${OCR_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

${OCR_GCSE_PSYCH_QUESTION_TEMPLATES}

${OCR_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS}

${topicKnowledge}

${KEY_STUDIES_DETAILED}

${RESEARCH_METHODS_KNOWLEDGE}

${WORKED_EXAMPLES}

${EVALUATION_TOOLKIT}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR GCSE Psychology specification.

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
2. **Authentic OCR Style**: Match real OCR paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Identify, outline (1-3 marks)
   - Medium: Describe, explain, application (4-6 marks)
   - Hard: Extended synoptic response (13 marks)

## Marking Guidance
- For short questions: List specific marking points
- For extended responses: Use level descriptors
- Include indicative content where appropriate
- Credit accurate psychological terminology

## Response Format
Return JSON with:
- "content": Question text (include scenario for application questions)
- "marks": Total marks
- "solution": Model answer demonstrating what a top-level response includes
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getOCRGCSEPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1).

**Question Types:**
- "State [feature/aim]" [1 mark]
- "Identify two [features/types]" [2 marks]
- "Outline [concept]" [2 marks]
- "Outline one [strength/weakness] of [study/theory]" [2 marks]

**Mark Scheme Format:**
- State/Identify: 1 mark per correct point
- Outline 2 marks: Identification (1) + Brief elaboration (1)

**Content to Cover:**
- Key terminology definitions
- Features of theories/studies
- Basic concepts from the specification

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring description, explanation, or application (AO1/AO2).

**Question Types:**
- "Describe the procedure/findings of [study]" [4 marks]
- "Describe how [theory] explains [behaviour]" [4 marks]
- "Explain [concept/relationship]" [3-4 marks]
- Application: "Using your knowledge of [topic], explain [scenario]" [4 marks]
- "Explain one strength and one limitation of [study/method]" [4 marks]

**For Application Questions:**
- Create a realistic scenario relevant to the subtopic
- Require students to apply psychological knowledge to explain the scenario
- Award marks for both knowledge demonstrated and application to context

**Mark Scheme Format:**
- Describe 4 marks: 4 relevant points with detail
- Explain: Point (1) + Explanation (1) + Elaboration (1) + Example/Link (1)
- Application: Knowledge shown (up to 2) + Application to scenario (up to 2)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 13-mark synoptic extended response (AO1 + AO3).

**Question Types:**
- "Evaluate [explanation/theory]" [13 marks]
- "Evaluate [topic]. In your answer you should consider how well the research evidence supports [aspect]" [13 marks]
- Questions should draw on knowledge from across the specification

**13-Mark Levels:**
- Level 4 (11-13): Thorough knowledge; effective evaluation; synoptic links
- Level 3 (7-10): Good knowledge; developed evaluation; some synoptic
- Level 2 (4-6): Some knowledge; basic evaluation; limited synoptic
- Level 1 (1-3): Limited knowledge; minimal evaluation; no synoptic

**Model Answer Should Include:**
- Description of relevant theories/explanations (AO1)
- Reference to research studies with procedure and findings
- Evaluation points using PEEL structure
- Synoptic links to other areas of psychology
- Conclusion/overall judgement

**Mark Scheme Should Include:**
- Level descriptors for each band
- Indicative content covering:
  - Key theories to describe
  - Relevant studies to reference
  - Evaluation points to make
  - Possible synoptic links

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR GCSE Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${topicKnowledge}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use authentic OCR command words (identify, state, outline, describe, explain, evaluate)
- Include mark allocation in square brackets
- For studies: Include procedure AND findings where relevant
- For theories: Include key concepts and terminology
- For evaluation: Use research evidence, not just generic strengths/weaknesses
- Model answer should demonstrate what a top-band response looks like

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Psychology GCSE mark ranges based on OCR specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };   // State, identify, outline - basic recall
    case 'medium':
      return { min: 4, max: 8 };   // Describe, explain, apply to scenario
    case 'hard':
      return { min: 10, max: 15 }; // Evaluate, discuss, extended response requiring analysis and judgement
  }
}

function getTopicSpecificKnowledge(topicName: string): string {
  const topicNameLower = topicName.toLowerCase();

  if (topicNameLower.includes('criminal')) {
    return CRIMINAL_PSYCHOLOGY_KNOWLEDGE;
  } else if (topicNameLower.includes('development')) {
    return DEVELOPMENT_KNOWLEDGE;
  } else if (topicNameLower.includes('psychological problem') || topicNameLower.includes('mental health')) {
    return PSYCHOLOGICAL_PROBLEMS_KNOWLEDGE;
  } else if (topicNameLower.includes('social')) {
    return SOCIAL_INFLUENCE_KNOWLEDGE;
  } else if (topicNameLower.includes('memory')) {
    return MEMORY_KNOWLEDGE;
  } else if (topicNameLower.includes('sleep') || topicNameLower.includes('dream')) {
    return SLEEP_AND_DREAMING_KNOWLEDGE;
  } else if (topicNameLower.includes('research')) {
    return RESEARCH_METHODS_KNOWLEDGE;
  }

  // Return all topic knowledge for general questions
  return `
${CRIMINAL_PSYCHOLOGY_KNOWLEDGE}

${DEVELOPMENT_KNOWLEDGE}

${PSYCHOLOGICAL_PROBLEMS_KNOWLEDGE}

${SOCIAL_INFLUENCE_KNOWLEDGE}

${MEMORY_KNOWLEDGE}

${SLEEP_AND_DREAMING_KNOWLEDGE}
`;
}
