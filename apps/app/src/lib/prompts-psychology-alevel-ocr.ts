// OCR A-Level Psychology (H567) Question Generation Prompts
// Based on analysis of official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/psychology-h167-h567-from-2015/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR A-LEVEL PSYCHOLOGY SPECIFICATION DETAILS (H567)
// ============================================================================

const OCR_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 31-36% |
| **AO2** | Apply knowledge and understanding of scientific ideas, processes, techniques and procedures | 28-32% |
| **AO3** | Analyse, interpret and evaluate scientific information, ideas and evidence | 35-40% |

### Component Structure
| Component | Title | Marks | Time | Weighting |
|-----------|-------|-------|------|-----------|
| **01** | Research Methods | 90 | 2 hours | 30% |
| **02** | Psychological Themes through Core Studies | 105 | 2 hours | 35% |
| **03** | Applied Psychology | 105 | 2 hours | 35% |

### Question Types
- Multiple choice (1 mark)
- Short answer (2-6 marks)
- Application of knowledge (4-8 marks)
- Extended response with levels (10, 12, 15, 20 marks)
- Synoptic questions drawing across the specification

### Key Command Words
- **Outline**: Brief description of main features (AO1)
- **Describe**: Detailed account of features (AO1)
- **Explain**: Give reasons; make clear relationships (AO2)
- **Evaluate**: Consider strengths and limitations to make judgement (AO3)
- **Discuss**: Present arguments for and against; reach conclusion (AO1/AO3)
- **Compare and contrast**: Identify similarities and differences (AO1/AO3)
- **Suggest**: Apply knowledge to new/unfamiliar situations (AO2)
- **Design**: Plan a research study with appropriate methodology (AO2)
`;

const OCR_ALEVEL_PSYCH_QUESTION_TEMPLATES = `
## Authentic OCR A-Level Psychology Question Formats

### Type 1: Outline Questions (2-4 marks)
Format: "Outline [concept/theory/study]"
**Examples:**
- "Outline one strength of using experiments in psychological research" [2 marks]
- "Outline the procedure of the [named] core study" [4 marks]
Marking: Identification + Development for 2 marks; Detailed outline for 4 marks

### Type 2: Describe Questions (4-6 marks)
Format: "Describe [study/approach/theory]"
**Examples:**
- "Describe the biological area of psychology" [4 marks]
- "Describe the findings from the [named] study" [4 marks]
- "Describe the cognitive approach in psychology" [6 marks]

### Type 3: Explain Questions (4-6 marks)
Format: "Explain how/why [concept/relationship]"
**Examples:**
- "Explain how one type of data could be collected in this research" [4 marks]
- "Using your knowledge of psychology, explain why Tom might behave this way" [6 marks]
- "Explain how learning theory could account for this behaviour" [6 marks]

### Type 4: Compare Questions (6-10 marks)
Format: "Compare [study A] with [study B]" or "Compare [approach A] with [approach B]"
**Examples:**
- "Compare the [named] classic study with the [named] contemporary study" [10 marks]
- "Compare the social and cognitive approaches in psychology" [8 marks]
- "Compare laboratory experiments with field experiments" [6 marks]

### Type 5: Evaluate Questions (8-12 marks)
Format: "Evaluate [theory/study/approach]"
**Examples:**
- "Evaluate the usefulness of the cognitive approach" [8 marks]
- "Evaluate the [named] core study" [10 marks]
- "Evaluate the effectiveness of cognitive behaviour therapy" [12 marks]
Marking (Levels):
- Level 3 (9-12 or 7-8): Thorough evaluation with clear judgement
- Level 2 (5-8 or 4-6): Some evaluation but limited development
- Level 1 (1-4 or 1-3): Basic points, limited evaluation

### Type 6: Discuss Questions (10-15 marks)
Format: "Discuss [issue/debate/topic]"
**Examples:**
- "Discuss the extent to which psychology can be considered scientific" [15 marks]
- "Discuss the nature-nurture debate in psychology" [12 marks]
- "Discuss the use of animals in psychological research" [10 marks]

### Type 7: Extended Response (20 marks)
Format: Synoptic questions in Component 3
**Examples:**
- "Evaluate the effectiveness of treatments for mental health disorders" [20 marks]
- "Discuss explanations of criminal behaviour" [20 marks]
- "Evaluate theories of cognitive development with reference to educational applications" [20 marks]

### Type 8: Research Design Questions (8-12 marks)
Format: "Design a study to investigate..."
**Examples:**
- "Design a study to investigate the effect of context on memory" [8 marks]
- "Design a study to test the hypothesis that..." [10 marks]
`;

const OCR_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level Psychology Mark Scheme Conventions

### 20-Mark Extended Response Levels

**Level 4 (16-20 marks):**
- Demonstrates excellent knowledge and understanding
- Effective evaluation and analysis
- Comprehensive and accurate use of terminology
- Clear, coherent and well-organised response
- Draws together different areas of knowledge effectively
- Demonstrates synoptic understanding

**Level 3 (11-15 marks):**
- Demonstrates good knowledge and understanding
- Competent evaluation with some development
- Accurate use of terminology
- Organised response with clear argument
- Links across different areas evident

**Level 2 (6-10 marks):**
- Demonstrates some knowledge and understanding
- Limited evaluation, may be superficial
- Some use of terminology
- Some organisation but may lack coherence
- Limited synoptic links

**Level 1 (1-5 marks):**
- Demonstrates basic knowledge
- Little or no evaluation
- Limited terminology
- Poorly organised response
- No synoptic links

### 12-Mark Levels

**Level 4 (10-12 marks):**
- Excellent response with thorough knowledge
- Well-developed and balanced evaluation
- Appropriate psychological terminology throughout

**Level 3 (7-9 marks):**
- Good response with clear knowledge
- Some developed evaluation
- Good use of terminology

**Level 2 (4-6 marks):**
- Basic response with limited knowledge
- Evaluation attempted but superficial
- Some terminology

**Level 1 (1-3 marks):**
- Limited response
- Little evaluation
- Limited terminology

### 10-Mark Compare/Evaluate Levels

**Level 3 (8-10 marks):**
- Thorough comparison/evaluation
- Well-developed points
- Clear similarities and differences (for compare)
- Evidence of judgement

**Level 2 (4-7 marks):**
- Some comparison/evaluation
- Points made but not fully developed
- Some similarities/differences

**Level 1 (1-3 marks):**
- Limited comparison/evaluation
- Basic points only
- May be descriptive

### Research Design Questions (8-10 marks)
Full marks require:
- Appropriate method justified
- Clear variables (IV/DV or variables measured)
- Appropriate design
- Sampling method and participants
- Procedure outline
- Ethical considerations
- How data would be analysed

### Core Study Questions
OCR focuses on core studies. Questions may ask about:
- Background and aims
- Procedure and methodology
- Findings and conclusions
- Evaluation (methodological and ethical issues)
- Applications and implications
- Comparison with other studies
`;

// ============================================================================
// OCR CORE STUDIES - DETAILED INFORMATION
// ============================================================================

const OCR_ALEVEL_PSYCH_CORE_STUDIES = `
## OCR Core Studies - Detailed Information

### SOCIAL AREA

**Milgram (1963) - Obedience to Authority**
- Aim: To investigate how far people would obey an authority figure
- Procedure: 40 male participants, Teacher-Learner paradigm, electric shocks 15-450V
- Findings: 65% went to 450V; all went to 300V
- Conclusions: Situational factors (authority, agentic state) important in obedience
- Evaluation: Ethical issues (deception, distress); demand characteristics; low ecological validity; androcentric
- Key concepts: Agentic state, legitimate authority, situational vs dispositional

**Bocchiaro et al. (2012) - Disobedience and Whistle-Blowing**
- Aim: To investigate predictors of disobedience and whistle-blowing
- Procedure: 149 participants asked to write pro-sensory deprivation statement
- Findings: 9% disobeyed; 4% whistle-blew; most obeyed (77%)
- Conclusions: Personality variables poor predictors; situation more important
- Evaluation: Cross-cultural (Netherlands); deception used; supports Milgram

### COGNITIVE AREA

**Loftus and Palmer (1974) - Eyewitness Testimony**
- Aim: To investigate effect of leading questions on EWT
- Experiment 1: 45 students, 7 film clips, verb manipulation (smashed/collided/bumped/hit/contacted)
- Findings Exp 1: "Smashed" = 40.5mph; "contacted" = 31.8mph
- Experiment 2: 150 students, broken glass question
- Findings Exp 2: "Smashed" group more likely to report broken glass (32% vs 14%)
- Conclusions: Post-event information affects memory; reconstruction not reproduction
- Evaluation: Laboratory setting; student sample; artificial stimuli; real-world applications
- Key concepts: Reconstructive memory, schema, response-bias vs memory distortion

**Grant et al. (1998) - Context-Dependent Memory**
- Aim: To investigate effect of environmental context on memory
- Procedure: 39 participants, meaningful prose, silent vs noisy conditions
- Findings: Context-dependent effect for both recognition and recall
- Conclusions: Studying and testing in same conditions improves performance
- Evaluation: Applied implications; controlled conditions; ecological validity issues
- Key concepts: Encoding specificity, context reinstatement, transfer-appropriate processing

### DEVELOPMENTAL AREA

**Bandura, Ross and Ross (1961) - Transmission of Aggression (Bobo Doll)**
- Aim: To investigate whether aggression can be learned through observation
- Procedure: 72 children (36 male, 36 female), age 3-6, aggressive/non-aggressive/control
- IV: Model behaviour (aggressive/non-aggressive); model gender
- Findings: Aggressive model group showed more aggression; same-sex imitation stronger
- Conclusions: Aggression can be learned through observational learning/modelling
- Evaluation: Laboratory experiment; demand characteristics; ethical issues with children; ecological validity
- Key concepts: Social learning theory, modelling, vicarious reinforcement

**Chaney et al. (2004) - Funhaler Study**
- Aim: To investigate whether a novel inhaler device improves adherence
- Procedure: 32 children with asthma, 6-month trial, crossover design
- Findings: Funhaler improved adherence and parental assessment
- Conclusions: Operant conditioning principles can improve health behaviours
- Evaluation: Applied research; small sample; parental report issues
- Key concepts: Operant conditioning, positive reinforcement, health psychology

### BIOLOGICAL AREA

**Sperry (1968) - Split-Brain Research**
- Aim: To investigate the effects of hemisphere disconnection
- Procedure: 11 patients, commissurotomy, visual field tests
- Findings: LVF information couldn't be verbally reported; right hemisphere visual-spatial
- Conclusions: Hemispheric lateralisation; left = language, right = spatial
- Evaluation: Case studies; unique sample; cannot generalise; demonstrates plasticity
- Key concepts: Lateralisation, corpus callosum, contralateral processing

**Casey et al. (2011) - Delayed Gratification (Marshmallow Study Follow-up)**
- Aim: To investigate whether childhood self-control predicts adult outcomes
- Procedure: fMRI scans of original marshmallow study participants as adults
- Findings: Low delayers showed more ventral striatum activation; less prefrontal control
- Conclusions: Individual differences in self-control are stable and neurologically based
- Evaluation: Longitudinal design; small sample; deterministic implications
- Key concepts: Delayed gratification, executive function, prefrontal cortex

### INDIVIDUAL DIFFERENCES

**Freud (1909) - Little Hans**
- Aim: To provide evidence for psychosexual development and Oedipus complex
- Procedure: Case study, correspondence with Hans's father, age 3-5
- Findings: Hans's phobia linked to castration anxiety and Oedipal conflict
- Conclusions: Supports psychoanalytic theory; phobias have unconscious origins
- Evaluation: Single case; father conducted observations; unfalsifiable; alternative explanations
- Key concepts: Oedipus complex, castration anxiety, unconscious, dream analysis

**Baron-Cohen et al. (1997) - Eyes Test and Autism**
- Aim: To investigate whether adults with autism/Asperger's have impaired ToM
- Procedure: Eyes test (25 photos), strange stories, gender recognition control
- Findings: Autism group significantly worse on eyes test only
- Conclusions: Adults with autism have specific ToM deficit; "mind-blindness"
- Evaluation: Standardised test; control conditions; practical applications; cannot infer cause
- Key concepts: Theory of mind, mind-blindness, autism spectrum, empathy
`;

// ============================================================================
// ADDITIONAL CLASSIC STUDIES FOR OCR A-LEVEL PSYCHOLOGY
// ============================================================================

const OCR_ADDITIONAL_KEY_STUDIES = `
## Additional Key Studies for OCR A-Level Psychology

### CRIMINAL PSYCHOLOGY

**Raine et al. (1997) - Brain Abnormalities in Murderers Pleading NGRI**
- Aim: To investigate brain differences in murderers pleading not guilty by reason of insanity
- Method: PET scans of 41 murderers vs 41 matched controls during CPT task
- Findings: Murderers showed reduced activity in prefrontal cortex, abnormal activity in limbic system
- Conclusions: Brain dysfunction associated with violent behaviour; reduced emotional regulation
- Evaluation: Brain scanning technology; cannot determine cause; individual differences ignored
- Key concepts: Prefrontal cortex, limbic system, amygdala, biological determinism

**Farrington et al. (2006) - Cambridge Study in Delinquent Development**
- Aim: Longitudinal study of criminal development
- Findings: Risk factors include criminal parents, low intelligence, poverty
- Conclusions: Multiple risk factors interact to increase criminal likelihood
- Evaluation: Prospective longitudinal design; UK-specific; correlation not causation

### DEVELOPMENTAL PSYCHOLOGY

**Gibson and Walk (1960) - Visual Cliff**
- Aim: To investigate depth perception in infants
- Procedure: 36 infants (6-14 months) tested on visual cliff apparatus
- Findings: Most refused to cross deep side even when encouraged
- Conclusions: Depth perception develops early; may be innate
- Evaluation: Cannot test newborns; ethical considerations; cross-species comparisons
- Key concepts: Depth perception, innate vs learned, perceptual development

**Blackmore and Cooper (1970) - Visual Deprivation in Kittens**
- Aim: To investigate effects of selective visual exposure on development
- Procedure: Kittens raised in environments with only vertical or horizontal lines
- Findings: Kittens became functionally blind to orientations not experienced
- Conclusions: Critical periods in perceptual development; brain plasticity
- Evaluation: Animal research; cannot generalise to humans; ethical issues
- Key concepts: Critical periods, neuroplasticity, experience-dependent development

**Piaget - Cognitive Development Studies**
- Conservation tasks, object permanence, Three Mountains task
- Stages: Sensorimotor, Pre-operational, Concrete operational, Formal operational
- Evaluation: Underestimated children's abilities; methodological issues; cross-cultural variation

**Vygotsky - Zone of Proximal Development**
- Key concepts: Scaffolding, More Knowledgeable Other, social construction
- Applications: Education, collaborative learning

### MEMORY STUDIES

**Atkinson and Shiffrin (1968) - Multi-Store Model**
- Sensory memory, STM, LTM
- Evaluation: Too simplistic; serial processing assumption; supports from amnesia cases

**Baddeley and Hitch (1974) - Working Memory Model**
- Central executive, phonological loop, visuo-spatial sketchpad, episodic buffer
- Evaluation: Research support; better than MSM; central executive poorly understood

### SOCIAL PSYCHOLOGY STUDIES

**Asch (1951) - Conformity**
- Line judgement task; 32% overall conformity rate; 75% conformed at least once
- Factors: Group size, unanimity, difficulty

**Sherif (1954/1961) - Robbers Cave**
- Intergroup conflict and cooperation
- Key concepts: In-group bias, superordinate goals
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE AND GUIDANCE
// ============================================================================

const OCR_TOPIC_GUIDANCE: Record<string, string> = {
  'research-methods': `
## Research Methods - OCR A-Level Psychology

### Experimental Methods
**Laboratory Experiments:**
- High control over extraneous variables
- Cause and effect established
- Replicable
- May lack ecological validity; demand characteristics

**Field Experiments:**
- Natural setting increases ecological validity
- Less control; ethical issues with consent
- Example: Piliavin's subway study

**Natural/Quasi Experiments:**
- IV naturally occurring (cannot be manipulated)
- Often used where manipulation unethical
- Example: Studies of Romanian orphans

### Self-Report Methods
**Questionnaires:**
- Large samples possible; standardised
- Social desirability bias; closed questions limit responses

**Interviews (Structured/Unstructured):**
- Structured: Standardised, comparable
- Unstructured: Rich data, rapport, more time-consuming

### Observation
**Types:**
- Naturalistic vs controlled
- Participant vs non-participant
- Covert vs overt

**Considerations:**
- Inter-rater reliability
- Observer bias
- Ethical issues (consent, privacy)

### Correlation
- Measures relationship strength and direction
- Correlation coefficient (-1 to +1)
- Cannot establish causation
- Third variable problem

### Case Studies
- In-depth study of individual/small group
- Rich qualitative data
- Cannot generalise
- Researcher bias
- Examples: Freud's Little Hans, Sperry's split-brain patients

### Data Analysis
**Levels of Measurement:**
- Nominal: Categories (e.g., male/female)
- Ordinal: Ranked (e.g., 1st, 2nd, 3rd)
- Interval/Ratio: Equal intervals (e.g., time, temperature)

**Descriptive Statistics:**
- Mean, median, mode
- Range, standard deviation
- Tables and graphs

**Inferential Statistics:**
- Sign test, Mann-Whitney U, Wilcoxon, chi-squared
- Significance level (p < 0.05)
- Type I and Type II errors
`,

  'cognitive-psychology': `
## Cognitive Psychology - OCR A-Level

### Memory Models

**Multi-Store Model (Atkinson & Shiffrin, 1968):**
- Three stores: Sensory register, STM, LTM
- Information flows sequentially
- Encoding: Sensory (modality), STM (acoustic), LTM (semantic)
- Duration: Sensory (<1s), STM (18-30s), LTM (permanent)
- Capacity: Sensory (large), STM (7+/-2), LTM (unlimited)
- Evidence: HM case study, serial position effect
- Limitations: Too simplistic, unitary STM/LTM assumption

**Working Memory Model (Baddeley & Hitch, 1974):**
- Central executive: Attentional control, limited capacity
- Phonological loop: Verbal information
  - Phonological store (inner ear)
  - Articulatory process (inner voice)
- Visuo-spatial sketchpad: Visual/spatial information
  - Visual cache + inner scribe
- Episodic buffer: Integration, links to LTM
- Evidence: Dual-task paradigm, word length effect
- Strengths: Better explanation of STM, supported by brain imaging

### Types of Long-Term Memory
**Tulving's Classification:**
- Episodic: Personal events, autobiographical
- Semantic: Facts, knowledge
- Procedural: Skills, how to do things

**Evidence:** Amnesia cases (HM, Clive Wearing), brain imaging

### Memory in Everyday Life

**Eyewitness Testimony:**
- Factors affecting accuracy: Anxiety, weapon focus, post-event discussion
- Leading questions (Loftus & Palmer, 1974)
- Age effects on EWT
- Cognitive interview technique

**Flashbulb Memory:**
- Vivid memories for emotional events
- Brown & Kulik (1977)
- May not be as accurate as believed

### Forgetting

**Interference Theory:**
- Proactive interference: Old learning affects new
- Retroactive interference: New learning affects old

**Retrieval Failure:**
- Context-dependent memory (Grant et al.)
- State-dependent memory
- Encoding specificity principle

**Motivated Forgetting:**
- Repression (Freudian)
- Suppression (deliberate)
`,

  'social-psychology': `
## Social Psychology - OCR A-Level

### Social Influence

**Conformity:**
- Types: Compliance, identification, internalisation
- Informational social influence (ambiguous situations)
- Normative social influence (desire to fit in)
- Asch (1951): Line conformity experiments
- Factors: Group size, unanimity, task difficulty, culture

**Obedience:**
- Milgram (1963): 65% to 450V
- Factors: Proximity, uniform, location, peer support
- Agentic state vs autonomous state
- Legitimate authority
- Gradual commitment

**Explanations:**
- Social impact theory
- Situational vs dispositional factors
- Agency theory

### Social Cognition

**Attribution Theory:**
- Internal vs external attributions
- Fundamental attribution error
- Actor-observer bias
- Self-serving bias

**Attitudes:**
- Components: Affective, behavioural, cognitive
- Attitude formation and change
- Cognitive dissonance (Festinger)

### Prejudice

**Explanations:**
- Social identity theory (Tajfel)
- Realistic conflict theory (Sherif)
- Authoritarian personality (Adorno)
- Stereotypes and categorisation

**Reducing Prejudice:**
- Contact hypothesis
- Superordinate goals
- Education and awareness
`,

  'biological-psychology': `
## Biological Psychology - OCR A-Level

### Brain and Neuropsychology

**Brain Structure:**
- Cerebral cortex: Frontal, parietal, temporal, occipital lobes
- Frontal lobe: Planning, decision-making, personality
- Limbic system: Emotion, memory (amygdala, hippocampus)
- Brain stem: Basic functions

**Lateralisation:**
- Left hemisphere: Language, logic, analytical
- Right hemisphere: Spatial, creative, holistic
- Sperry's split-brain research (1968)
- Plasticity and recovery

**Localisation of Function:**
- Broca's area: Speech production
- Wernicke's area: Speech comprehension
- Motor and sensory cortex
- Evidence: Brain damage, imaging studies

**Neurotransmitters:**
- Dopamine: Reward, movement, motivation
- Serotonin: Mood, sleep, appetite
- Noradrenaline: Arousal, attention
- GABA: Inhibition

### Genes and Behaviour

**Genetic Influences:**
- Twin studies: MZ vs DZ concordance
- Adoption studies
- Family studies
- Heritability estimates

**Gene-Environment Interaction:**
- Diathesis-stress model
- Epigenetics
- Nature-nurture debate

**Research Methods:**
- Molecular genetics
- Brain scanning (PET, fMRI, EEG)
- Animal studies
`,

  'criminal-psychology': `
## Criminal Psychology - OCR A-Level

### What Makes a Criminal?

**Biological Explanations:**
- Brain dysfunction (Raine et al., 1997)
- Genetic factors: XYY syndrome, twin studies
- Neurochemistry: Low serotonin, high testosterone
- Evaluation: Biological determinism, ignores social factors

**Psychological Explanations:**
- Eysenck's criminal personality (high E, N, P)
- Psychodynamic: Inadequate superego
- Social learning theory: Modelling criminal behaviour
- Moral development (Kohlberg)

**Social Explanations:**
- Labelling theory
- Social disorganisation
- Differential association (Sutherland)
- Poverty and deprivation

### Crime Prevention

**Environmental Design:**
- Situational crime prevention
- CPTED (Crime Prevention Through Environmental Design)
- Target hardening, surveillance

**Social Approaches:**
- Zero tolerance
- Community programmes
- Education and employment

### Treatment of Offenders

**Biological Treatments:**
- Drug therapy (antipsychotics, hormone treatments)
- Psychosurgery (rare, controversial)

**Psychological Treatments:**
- Cognitive Behaviour Therapy
- Anger management programmes
- Token economy systems

**Evaluation of Treatments:**
- Recidivism rates
- Ethical considerations
- Effectiveness research
`,

  'developmental-psychology': `
## Developmental Psychology - OCR A-Level

### Early Brain Development

**Brain Growth:**
- Prenatal development: Neural tube, synaptogenesis
- Postnatal development: Myelination, pruning
- Critical periods and sensitive periods

**Factors Affecting Development:**
- Nutrition
- Stimulation
- Toxins (alcohol, drugs)

### Perceptual Development

**Nature vs Nurture:**
- Gibson & Walk (1960): Visual cliff
- Nativists: Innate perceptual abilities
- Empiricists: Learning through experience

**Research Evidence:**
- Newborn studies (preferential looking)
- Deprivation studies (kittens, humans with cataracts)
- Cross-cultural studies

**Blackmore and Cooper (1970):**
- Kittens raised in restricted visual environments
- Implications for critical periods

### Cognitive Development

**Piaget's Theory:**
- Stages: Sensorimotor (0-2), Pre-operational (2-7), Concrete operational (7-11), Formal operational (11+)
- Schemas, assimilation, accommodation
- Object permanence, conservation, egocentrism
- Evaluation: Underestimated children; methodology issues

**Vygotsky's Theory:**
- Zone of Proximal Development
- Scaffolding
- More Knowledgeable Other
- Social construction of knowledge
- Applications to education

**Information Processing Approach:**
- Memory development
- Attention development
- Metacognition
`,

  'individual-differences': `
## Individual Differences - OCR A-Level

### Intelligence

**Theories of Intelligence:**
- Spearman's 'g' (general intelligence)
- Gardner's multiple intelligences
- Sternberg's triarchic theory

**Measuring Intelligence:**
- IQ tests (Stanford-Binet, WAIS)
- Reliability and validity issues
- Cultural bias

**Nature-Nurture in Intelligence:**
- Twin studies: MZ correlation ~0.85
- Adoption studies
- Flynn effect
- Environmental factors: Education, nutrition

### Mental Health

**Characteristics of Mental Health:**
- Jahoda's criteria for ideal mental health
- Difficulties in defining abnormality

**Classification Systems:**
- DSM-5 and ICD-11
- Reliability and validity issues
- Cultural considerations

**Specific Disorders:**

**Depression:**
- Symptoms: Cognitive, emotional, behavioural, physical
- Explanations: Biological (neurotransmitter, genetic), Cognitive (Beck's negative triad), Social
- Treatments: Drug therapy (SSRIs), CBT, ECT

**Anxiety Disorders:**
- Types: GAD, phobias, OCD
- Explanations: Behavioural (classical conditioning), Cognitive, Biological

**Schizophrenia:**
- Positive symptoms: Hallucinations, delusions
- Negative symptoms: Flat affect, avolition
- Explanations: Dopamine hypothesis, genetic, environmental triggers

**Treatments:**
- Drug therapy
- CBT
- Psychoanalysis
- Evaluation of effectiveness
`,

  'environmental-psychology': `
## Environmental Psychology - OCR A-Level

### Stressors in the Environment

**Noise:**
- Effects: Physiological arousal, performance impairment, health effects
- Research: Cohen et al. airport study
- Adaptation and habituation

**Crowding:**
- Density vs perceived crowding
- Effects on health and behaviour
- Cultural differences
- Research: Calhoun's rat studies

**Temperature:**
- Heat and aggression
- Effects on performance
- Climate and crime rates

**Pollution:**
- Air quality and cognitive function
- Lead exposure and behaviour
- Environmental health psychology

### Personal Space

**Hall's Proxemic Zones:**
- Intimate (0-18 inches)
- Personal (18 inches - 4 feet)
- Social (4-12 feet)
- Public (12+ feet)

**Factors Affecting Personal Space:**
- Culture
- Gender
- Relationship
- Personality
- Context

**Territorial Behaviour:**
- Primary, secondary, public territories
- Markers and defence
- Implications for design

**Applications:**
- Architectural design
- Workplace design
- Public space planning
`
};

// ============================================================================
// ISSUES AND DEBATES
// ============================================================================

const OCR_ISSUES_AND_DEBATES = `
## Issues and Debates in Psychology

### Nature vs Nurture
- Nature: Genetic, biological, innate
- Nurture: Environmental, learned, experiential
- Interactionist approach: Gene-environment interaction
- Examples: Intelligence, mental health, aggression
- How to integrate: "This debate is relevant because..."

### Free Will vs Determinism
- Free will: Choice, personal responsibility
- Determinism types: Biological, environmental, psychic
- Soft determinism: Some influence, some choice
- Implications: Legal responsibility, treatment approaches

### Reductionism vs Holism
- Reductionism: Breaking down to simpler components
- Biological reductionism: Genes, neurotransmitters
- Environmental reductionism: Stimulus-response
- Holism: Understanding whole person in context
- Evaluation: Scientific rigour vs oversimplification

### Psychology as a Science
- Scientific method: Hypothesis testing, objectivity, replication
- Arguments for: Controlled experiments, empirical evidence
- Arguments against: Subjectivity, ethics, complexity of behaviour
- Psychology's scientific status varies by approach

### Ethnocentrism and Cultural Bias
- Much research Western, educated samples (WEIRD)
- Imposed etic: Applying Western concepts universally
- Cultural relativism: Understanding within cultural context
- Alpha bias vs beta bias
- Examples: Intelligence tests, attachment theory, abnormality

### Gender Bias
- Androcentrism: Male-centred research
- Alpha bias: Exaggerating differences
- Beta bias: Minimising differences
- Historical examples: Freud, early conformity research

### Ethical Issues
- Informed consent
- Deception
- Right to withdraw
- Protection from harm
- Confidentiality
- BPS guidelines
- Balancing scientific value with participant welfare

### Socially Sensitive Research
- Research with social implications
- Potential for misuse
- Responsibility of researchers
- Examples: Race and IQ, mental health labelling
`;

// ============================================================================
// WORKED EXAMPLES WITH OCR-SPECIFIC MARK SCHEMES
// ============================================================================

const OCR_WORKED_EXAMPLES = `
## Worked Examples with OCR Mark Schemes

### Example 1: Outline Question (4 marks)

**Question:** Outline the procedure of Milgram's (1963) study of obedience. [4 marks]

**Mark Scheme:**
- 40 male participants recruited through newspaper advertisement (1 mark)
- Told study was about learning/memory (1 mark)
- Participant was always the "teacher" through rigged draw (1 mark)
- Confederate "learner" strapped to chair with electrodes (1 mark)
- Teacher gave shocks (15-450V) for wrong answers (1 mark)
- Experimenter used prods if participant hesitated (1 mark)
Any 4 points for 4 marks

**Model Answer:**
"Milgram advertised for 40 male participants to take part in a study at Yale University. Participants were told the study was about learning and memory. Through a rigged draw, the real participant was always assigned to be the 'teacher' while a confederate was the 'learner'. The learner was strapped to a chair with electrodes and the teacher was instructed to give electric shocks (ranging from 15V to 450V) for each wrong answer. When participants hesitated, the experimenter used standardised prods such as 'the experiment requires you to continue'."

---

### Example 2: Evaluate Question (10 marks)

**Question:** Evaluate the working memory model. [10 marks]

**Level 3 (8-10 marks):** Thorough evaluation; well-developed points; clear judgement
**Level 2 (4-7 marks):** Some evaluation; limited development
**Level 1 (1-3 marks):** Basic evaluation; limited points

**Model Answer (Level 3):**

"One strength of the working memory model is the supporting evidence from dual-task studies. Baddeley and Hitch found that participants could perform a verbal reasoning task while doing a secondary task using different components (e.g., tracking a light), but performance decreased when both tasks used the same component. This demonstrates that the model accurately represents separate systems for processing different types of information.

Another strength is evidence from brain imaging studies which show that different areas of the brain are active when processing verbal versus visual-spatial information, supporting the existence of separate slave systems. This biological evidence provides strong support for the model's architecture.

However, a limitation is that the central executive is poorly understood. Baddeley describes it as having limited capacity and being responsible for attentional control, but this is vague and may be too simplistic. Some critics argue it is merely a homunculus that does not adequately explain how attention is actually controlled.

Furthermore, while the episodic buffer was added in 2000 to explain how information is integrated, it remains unclear how it functions and interacts with the other components, suggesting the model may still be incomplete.

Overall, despite its limitations regarding the central executive, the working memory model provides a more comprehensive account of short-term memory than the multi-store model and has practical applications in understanding learning difficulties like dyslexia."

---

### Example 3: Compare Question (10 marks)

**Question:** Compare Milgram's (1963) study with Bocchiaro et al.'s (2012) study. [10 marks]

**Level 3 (8-10 marks):** Thorough comparison; clear similarities and differences
**Level 2 (4-7 marks):** Some comparison; not fully developed
**Level 1 (1-3 marks):** Limited comparison; may be descriptive

**Indicative Content:**

**Similarities:**
- Both investigate obedience/disobedience to authority
- Both use deception as part of methodology
- Both found most participants obeyed despite ethical concerns
- Both conducted in laboratory settings
- Both support situational explanations of behaviour

**Differences:**
- Milgram: USA (Yale), Bocchiaro: Netherlands
- Milgram: 40 males only; Bocchiaro: 149 mixed gender
- Milgram: Physical task (shocking); Bocchiaro: Written task
- Milgram: No whistle-blowing option; Bocchiaro: Explicitly measured this
- Milgram: 35% disobeyed; Bocchiaro: 9% disobeyed, 4% whistle-blew
- Bocchiaro also measured personality variables (found weak predictors)

---

### Example 4: Extended Response (20 marks)

**Question:** Discuss explanations of criminal behaviour. [20 marks]

**Level 4 (16-20):** Excellent knowledge; effective evaluation; synoptic; well-organised
**Level 3 (11-15):** Good knowledge; competent evaluation; some synoptic links
**Level 2 (6-10):** Some knowledge; limited evaluation; basic structure
**Level 1 (1-5):** Basic knowledge; little evaluation; poorly organised

**Indicative Content:**

**AO1 - Knowledge:**
- Biological: Brain abnormalities (Raine et al., 1997 - reduced prefrontal activity)
- Biological: Genetic factors (twin studies, XYY syndrome debate)
- Biological: Neurochemistry (low serotonin, high testosterone)
- Psychological: Eysenck's criminal personality (high E, N, P)
- Psychological: Social learning theory (modelling criminal behaviour)
- Psychological: Psychodynamic (inadequate superego)
- Social: Labelling theory, self-fulfilling prophecy
- Social: Differential association (Sutherland)

**AO3 - Evaluation:**
- Biological determinism - reduces personal responsibility
- Reductionist vs holistic explanations
- Nature-nurture interaction (diathesis-stress)
- Methodological issues (correlation vs causation in brain studies)
- Application to crime prevention and treatment
- Cultural and social factors in defining crime
- Multiple factors interact (biopsychosocial approach)
- Ethical implications of biological explanations

---

### Example 5: Research Design Question (8 marks)

**Question:** Design a study to investigate whether context affects memory recall. [8 marks]

**Mark Scheme:**
- Appropriate method identified and justified (e.g., lab experiment) [1]
- IV clearly stated (same/different context conditions) [1]
- DV clearly operationalised (e.g., number of words recalled) [1]
- Appropriate design (independent groups/repeated measures) with justification [1]
- Sampling method identified (e.g., opportunity, random) [1]
- Procedure outlined (learning phase, testing phase, conditions) [1-2]
- Ethical considerations addressed (consent, debrief) [1]
- How data would be analysed (e.g., compare means, inferential test) [1]

**Model Answer:**
"I would conduct a laboratory experiment with an independent groups design to avoid order effects. The IV would be context condition (same vs different room for learning and testing) and the DV would be the number of words correctly recalled from a 20-word list.

Participants would be recruited through opportunity sampling from a college. 40 participants would be randomly allocated to two conditions. In Condition A, participants learn and are tested in the same room. In Condition B, participants learn in Room 1 but are tested in Room 2 (with different decoration/environment).

All participants would have 2 minutes to memorise the same list, then a 5-minute filler task, followed by free recall. Ethical considerations include informed consent, right to withdraw, and debriefing. Mean recall scores would be calculated and compared using a Mann-Whitney U test to determine if the difference is significant."
`;

// ============================================================================
// RESEARCH METHODS DETAILED GUIDANCE
// ============================================================================

const OCR_RESEARCH_METHODS_DETAIL = `
## Research Methods - Detailed OCR A-Level Guidance

### Planning and Conducting Research

**Hypothesis Formation:**
- Null hypothesis (H0): No difference/relationship
- Alternative hypothesis (H1): Predicts difference/relationship
- One-tailed vs two-tailed: Direction specified or not
- Operationalisation: Making variables measurable

**Variables:**
- Independent Variable (IV): Manipulated by researcher
- Dependent Variable (DV): Measured outcome
- Extraneous variables: Controlled to prevent confounding
- Confounding variables: Uncontrolled, affect DV systematically

**Experimental Designs:**
- Independent groups: Different participants in each condition
  - Avoids order effects
  - Needs more participants
  - Individual differences between groups
- Repeated measures: Same participants in all conditions
  - Controls for individual differences
  - Order effects (counterbalancing needed)
  - Demand characteristics
- Matched pairs: Different participants matched on key variables
  - Combines advantages of above
  - Time-consuming to match
  - Impossible to match on all variables

**Sampling Methods:**
- Random sampling: Equal chance of selection
- Stratified sampling: Proportional representation of subgroups
- Opportunity sampling: Convenient, available participants
- Self-selected/Volunteer: Participants respond to request

**Ethical Guidelines (BPS):**
- Respect: Informed consent, right to withdraw
- Competence: Researcher training
- Responsibility: Protect from harm, debriefing
- Integrity: Honesty, avoid deception (or justify)

### Analysing and Interpreting Data

**Quantitative Data Analysis:**
- Measures of central tendency: Mean, median, mode
- Measures of dispersion: Range, standard deviation
- When to use each measure

**Qualitative Data Analysis:**
- Thematic analysis
- Content analysis
- Coding and categorisation

**Inferential Statistics:**
- Testing for significance (p < 0.05)
- Type I error (false positive): Rejecting true H0
- Type II error (false negative): Accepting false H0

**Statistical Tests:**
| Test | Type of test | Level of measurement | Design |
|------|-------------|---------------------|--------|
| Sign test | Difference | Nominal | Repeated measures |
| Mann-Whitney U | Difference | Ordinal | Independent groups |
| Wilcoxon | Difference | Ordinal | Repeated measures |
| Chi-squared | Association | Nominal | - |
| Spearman's rho | Correlation | Ordinal | - |

**Graphs and Charts:**
- Bar charts: Categorical data
- Histograms: Continuous data
- Scatter graphs: Correlational data
- Line graphs: Changes over time/conditions

### Research Issues and Processes

**Reliability:**
- Internal reliability: Consistency within a test
- External reliability: Consistency over time (test-retest)
- Inter-rater reliability: Agreement between observers

**Validity:**
- Internal validity: Study measures what it claims
- External validity: Generalisability
- Ecological validity: Real-world applicability
- Population validity: Generalisable to other groups
- Face validity: Appears to measure the construct
- Concurrent validity: Correlates with established measure
- Construct validity: Measures the theoretical construct

**Features of Science:**
- Empirical evidence
- Objectivity
- Theory construction
- Hypothesis testing
- Replicability
- Falsifiability
- Paradigms and paradigm shifts
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Psychology examiner creating exam-style questions.

${OCR_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_PSYCH_QUESTION_TEMPLATES}

${OCR_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

${OCR_ALEVEL_PSYCH_CORE_STUDIES}

${OCR_ADDITIONAL_KEY_STUDIES}

${topicGuidance}

${OCR_ISSUES_AND_DEBATES}

${OCR_RESEARCH_METHODS_DETAIL}

${OCR_WORKED_EXAMPLES}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds
2. **Authentic OCR Style**: Match real OCR paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Outline, describe (2-6 marks)
   - Medium: Evaluate, compare (8-12 marks)
   - Hard: Discuss extended response (15-20 marks)

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer/indicative content
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getOCRALevelPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing knowledge (AO1).

**Question Types:**
- "Outline [concept/strength/limitation]" [2 marks]
- "Describe [study/approach/theory]" [4 marks]
- "Explain [relationship/concept]" [4 marks]
- "Identify two [features/factors]" [2 marks]

**Mark Scheme Format:**
- 2 marks: Identification + brief elaboration
- 4 marks: Detailed description with key points

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create a question requiring evaluation or comparison (AO3).

**Question Types:**
- "Evaluate [study/theory/approach]" [8-10 marks]
- "Compare [study A] with [study B]" [10 marks]
- "Discuss [issue/topic]" [10-12 marks]
- Research design questions [8-10 marks]

**10-Mark Levels:**
- Level 3 (8-10): Thorough, well-developed
- Level 2 (4-7): Some development, limited
- Level 1 (1-3): Basic, limited

Include indicative content covering:
- Key points for AO1
- Evaluation points for AO3
- Use of research evidence

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a 15-20 mark extended response.

**Question Types:**
- "Discuss [debate/issue]" [15-20 marks]
- "Evaluate [explanations/treatments]" [20 marks]
- Synoptic questions linking areas [20 marks]

**20-Mark Levels:**
- Level 4 (16-20): Excellent knowledge; effective evaluation; synoptic
- Level 3 (11-15): Good knowledge; competent evaluation
- Level 2 (6-10): Some knowledge; limited evaluation
- Level 1 (1-5): Basic knowledge; little evaluation

Include indicative content covering:
- Relevant theories and explanations
- Research studies with details
- Evaluation: methodological, ethical, practical
- Issues and debates integration
- Synoptic links where appropriate

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an OCR A-Level Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${topicGuidance}

**Critical Requirements:**
- Use authentic OCR command words
- Include mark allocation in square brackets
- For evaluation questions, expect balanced discussion
- Include relevant research studies in mark scheme
- Use accurate psychological terminology
- Reference core studies where appropriate

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "indicative content",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

// ============================================================================
// ADDITIONAL QUESTION TYPE FUNCTIONS
// ============================================================================

export function getOCRALevelPsychologyResearchMethodsPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Psychology examiner creating a Research Methods question.

${OCR_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${OCR_RESEARCH_METHODS_DETAIL}

## Research Methods Context for OCR

Component 01 (Research Methods) is worth 30% of the A-Level. Questions focus on:
- Planning and conducting research
- Analysing and interpreting data
- Research issues and processes

### Common Question Types:
1. Design a study to investigate... [8-12 marks]
2. Explain one strength/limitation of the method used [2-4 marks]
3. Calculate and interpret statistics [3-6 marks]
4. Identify variables and controls [2-4 marks]
5. Evaluate the reliability/validity of research [6-10 marks]
6. Discuss ethical issues [6-8 marks]

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create an authentic OCR research methods question.

Return JSON:
{
  "content": "question text with scenario if appropriate",
  "marks": number,
  "solution": "model answer",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

export function getOCRALevelPsychologyCoreStudyPrompt(studyName: string, difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Psychology examiner creating a Core Study question.

${OCR_ALEVEL_PSYCH_CORE_STUDIES}

${OCR_ADDITIONAL_KEY_STUDIES}

${OCR_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

## Core Study Question Types

OCR Component 02 tests knowledge of core studies. Question types include:
- Outline the aims/procedure/findings [4 marks]
- Describe the methodology of... [6 marks]
- Evaluate the [named] study [10 marks]
- Compare [study 1] with [study 2] [10 marks]
- Discuss how [study] demonstrates [concept] [8 marks]
- Apply findings from [study] to scenario [6 marks]

**Core Study**: ${studyName}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create an authentic OCR core study question about ${studyName}.

Return JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with study-specific detail",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

export function getOCRALevelPsychologyIssuesDebatesPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Psychology examiner creating an Issues and Debates question.

${OCR_ISSUES_AND_DEBATES}

${OCR_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

## Issues and Debates in OCR Psychology

Issues and debates should be integrated throughout answers but can also be asked directly:

### Key Debates:
- Nature vs Nurture
- Free will vs Determinism
- Reductionism vs Holism
- Psychology as a Science
- Ethnocentrism and Cultural Bias
- Gender Bias
- Ethical Issues

### Question Types:
- Discuss the nature-nurture debate in relation to [topic] [12-15 marks]
- Evaluate the extent to which [topic] is determined by biological factors [10-12 marks]
- Discuss ethical issues raised by [research area] [8-10 marks]
- Evaluate psychology's status as a science [12-15 marks]

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a question that requires discussion of issues and debates.

Return JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer integrating relevant debates",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

export function getOCRALevelPsychologyApplicationPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Psychology examiner creating an Application question.

${OCR_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${topicGuidance}

## Application Questions (AO2)

OCR application questions present a scenario and require students to apply psychological knowledge.

### Structure:
1. Present a realistic scenario (150-200 words)
2. Ask students to explain using psychological concepts
3. May ask for suggestions based on psychological knowledge

### Example Format:
"Read the scenario below, then answer the question.

[Scenario describing behaviour/situation]

Using your knowledge of [topic], explain [aspect of scenario]. [6 marks]"

### Mark Scheme for Applications:
- Clear identification of relevant concept(s)
- Explicit link to scenario details
- Explanation of how theory applies
- Use of correct terminology

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create an application question with a realistic scenario.

Return JSON:
{
  "content": "scenario followed by question",
  "marks": number,
  "solution": "model answer showing application",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

export function getOCRALevelPsychologySynopticPrompt(topic: Topic): string {
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Psychology examiner creating a synoptic question.

${OCR_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_PSYCH_CORE_STUDIES}

${OCR_ISSUES_AND_DEBATES}

${topicGuidance}

## Synoptic Questions (Component 03)

Component 03 (Applied Psychology) requires synoptic assessment - linking knowledge across the specification.

### Synoptic Skills Required:
- Drawing together knowledge from different areas
- Applying core study findings to applied topics
- Integrating issues and debates
- Making connections between approaches (biological, cognitive, social, etc.)

### Example Synoptic Questions:
- "Evaluate explanations of [applied topic] with reference to relevant core studies" [20 marks]
- "Discuss how research from [area] can inform understanding of [applied topic]" [15 marks]
- "Compare different psychological approaches to explaining [behaviour]" [12 marks]

**Topic**: ${topic.name}

Create a synoptic question requiring integration across the specification.

Return JSON:
{
  "content": "synoptic question",
  "marks": 15-20,
  "solution": "model answer showing synoptic understanding",
  "markScheme": ["level descriptors and indicative content"]
}`;
}

export function getOCRALevelPsychologyComparePrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Psychology examiner creating a Compare question.

${OCR_ALEVEL_PSYCH_CORE_STUDIES}

${OCR_ADDITIONAL_KEY_STUDIES}

${OCR_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

${topicGuidance}

## Compare Questions

OCR compare questions require identification of both similarities AND differences.

### Structure:
- "Compare [X] with [Y]" [10 marks typically]
- Must include both similarities and differences for full marks
- Evidence/examples strengthen comparisons

### Mark Scheme Format (10 marks):
Level 3 (8-10): Thorough comparison with clear similarities and differences; well-developed points
Level 2 (4-7): Some comparison made; points not fully developed; may be unbalanced
Level 1 (1-3): Limited comparison; may focus on one aspect only; basic points

### Comparison Categories:
- Methodology (lab vs field, sample, design)
- Findings and conclusions
- Theoretical implications
- Practical applications
- Ethical considerations
- Validity and reliability

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

Create a compare question appropriate to the topic.

Return JSON:
{
  "content": "compare question",
  "marks": number,
  "solution": "model answer with clear similarities and differences",
  "markScheme": ["level descriptors or comparison points"]
}`;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 6 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 15, max: 20 };
  }
}

// ============================================================================
// EXPORTED CONSTANTS FOR EXTERNAL USE
// ============================================================================

export const OCR_PSYCHOLOGY_CORE_STUDIES_LIST = [
  'Milgram (1963) - Obedience',
  'Bocchiaro et al. (2012) - Disobedience',
  'Loftus and Palmer (1974) - EWT',
  'Grant et al. (1998) - Context-dependent memory',
  'Bandura, Ross and Ross (1961) - Bobo doll',
  'Chaney et al. (2004) - Funhaler',
  'Sperry (1968) - Split-brain',
  'Casey et al. (2011) - Delayed gratification',
  'Freud (1909) - Little Hans',
  'Baron-Cohen et al. (1997) - Eyes test'
];

export const OCR_PSYCHOLOGY_TOPICS = [
  'Research Methods',
  'Cognitive Psychology',
  'Social Psychology',
  'Biological Psychology',
  'Criminal Psychology',
  'Developmental Psychology',
  'Individual Differences',
  'Environmental Psychology'
];

export const OCR_PSYCHOLOGY_ISSUES_DEBATES = [
  'Nature vs Nurture',
  'Free Will vs Determinism',
  'Reductionism vs Holism',
  'Psychology as a Science',
  'Ethnocentrism and Cultural Bias',
  'Gender Bias',
  'Ethical Issues',
  'Socially Sensitive Research'
];
