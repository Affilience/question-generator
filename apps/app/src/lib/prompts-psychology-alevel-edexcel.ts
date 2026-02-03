// Edexcel A-Level Psychology (9PS0) Question Generation Prompts
// Based on analysis of official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/psychology-2015.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL A-LEVEL PSYCHOLOGY SPECIFICATION DETAILS (9PS0)
// ============================================================================

const EDEXCEL_ALEVEL_PSYCH_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, description, identification | Define, describe, identify features; straightforward knowledge retrieval |
| **Medium** | Application, explanation, basic evaluation | Explain in context; compare approaches; assess with some development |
| **Hard** | Synthesis, critical evaluation, judgement | Discuss debates; evaluate comprehensively; construct balanced arguments with judgement |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires sustained argument balancing AO1 and AO3 throughout
- Demands evaluation of Issues and Debates (e.g., nature vs nurture, reductionism vs holism)
- Must weigh competing explanations/theories and reach justified conclusions
- Requires critical analysis of methodological issues and research evidence
- No single "correct" position - student must construct and defend their own argument

**Easy (2-6 marks):** Knowledge recall - define, describe, identify with development
**Medium (8-12 marks):** Application and evaluation - explain, compare, or assess with developing evaluation
**Hard (16-20 marks):** Critical discussion - sustained argument with thorough AO3 and clear judgement
`;

const EDEXCEL_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 27-33% |
| **AO2** | Apply knowledge and understanding of scientific ideas, processes, techniques and procedures | 29-35% |
| **AO3** | Analyse, interpret and evaluate scientific information, ideas and evidence to make judgements and reach conclusions | 36-40% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Foundations in Psychology | Social, Cognitive, Biological, Learning theories | 90 | 2 hours | 35% |
| **Paper 2** | Applications of Psychology | Clinical psychology + one option | 90 | 2 hours | 35% |
| **Paper 3** | Psychological Skills | Research methods, Issues and debates, Studies | 80 | 2 hours | 30% |

### Question Types
- Multiple choice questions (1-2 marks)
- Short answer questions (2-6 marks)
- Extended open response (8 marks)
- Extended response with levels of response (12, 16, 20 marks)
- Calculation and research methods questions

### Key Command Words
- **Describe**: Set out features or characteristics (AO1)
- **Explain**: Give reasons or make relationships clear (AO2)
- **Assess**: Present evidence for and against; make judgement (AO3)
- **Evaluate**: Review information then reach conclusion (AO3)
- **Discuss**: Identify issues and provide points for/against (AO1/AO3)
- **Compare**: Identify similarities and differences
- **Justify**: Support a case with evidence
`;

const EDEXCEL_ALEVEL_PSYCH_QUESTION_TEMPLATES = `
## Authentic Edexcel A-Level Psychology Question Formats

### Type 1: Define/Identify (2 marks)
**Examples:**
- "Define what is meant by a Type I error" [2 marks]
- "Identify two features of the cognitive approach" [2 marks]
Marking: 1 mark per valid point with elaboration

### Type 2: Describe Questions (4 marks)
**Examples:**
- "Describe one classic study in social psychology" [4 marks]
- "Describe the dopamine hypothesis of schizophrenia" [4 marks]
Marking: Up to 4 marks for detailed description

### Type 3: Explain Questions (4-6 marks)
**Examples:**
- "Explain one strength of using twin studies" [4 marks]
- "Using your knowledge of classical conditioning, explain how a phobia might develop" [4 marks]

### Type 4: Compare Questions (4-8 marks)
**Examples:**
- "Compare social learning theory with classical conditioning as explanations for phobias" [8 marks]
Marking: Credit similarities and differences; developed comparison

### Type 5: Assess Questions (8 marks)
Format: "Assess [explanation/theory]"
**Examples:**
- "Assess the usefulness of the biomedical model for explaining schizophrenia" [8 marks]
- "Assess the contribution of Milgram's research to our understanding of obedience" [8 marks]
Marking (Levels):
- Level 3 (7-8): Well-developed assessment with clear judgement
- Level 2 (4-6): Some assessment with limited development
- Level 1 (1-3): Basic points, limited assessment

### Type 6: Evaluate Questions (8-12 marks)
Format: "Evaluate [study/theory/explanation]"
**Examples:**
- "Evaluate social learning theory as an explanation for aggression" [8 marks]
- "Evaluate drug therapy as a treatment for depression" [12 marks]
Marking uses levels of response

### Type 7: Discuss Questions (12-16 marks)
Format: "Discuss [concept/issue/debate]"
**Examples:**
- "Discuss issues of reliability and validity in psychological research" [12 marks]
- "Discuss the nature-nurture debate in psychology" [16 marks]

### Type 8: Extended Response (20 marks)
Format: Issues and debates essays in Paper 3
**Examples:**
- "Assess the extent to which psychology can be considered a science" [20 marks]
- "To what extent is behaviour determined by biological factors?" [20 marks]
`;

const EDEXCEL_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS = `
## Edexcel A-Level Psychology Mark Scheme Conventions

### 20-Mark Extended Response Levels

**Level 4 (16-20 marks):**
- Demonstrates accurate and thorough knowledge and understanding (AO1)
- Displays a well-developed and logical balanced argument/evaluation
- Contains logical chains of reasoning throughout
- Demonstrates thorough awareness of competing arguments
- Sustained application of relevant evidence throughout
- Specialist vocabulary used accurately and confidently

**Level 3 (11-15 marks):**
- Demonstrates mostly accurate knowledge and understanding (AO1)
- Arguments developed using mostly coherent chains of reasoning
- Demonstrates awareness of competing arguments but evaluation may be imbalanced
- Application of relevant evidence, though not sustained
- Specialist vocabulary used mostly accurately

**Level 2 (6-10 marks):**
- Demonstrates some knowledge and understanding (AO1)
- Some analysis with limited development
- Superficial evaluation/conclusion
- Some use of specialist vocabulary

**Level 1 (1-5 marks):**
- Demonstrates isolated elements of knowledge
- A conclusion may be presented but generic
- Limited attempt to address the question
- Limited use of specialist vocabulary

### 12/16-Mark Levels

**Level 4 (13-16 or 10-12):**
- Thorough, accurate knowledge and understanding
- Well-developed evaluation with clear judgement
- Effective use of psychological terminology

**Level 3 (9-12 or 7-9):**
- Good knowledge with minor gaps
- Sound evaluation
- Good use of terminology

**Level 2 (5-8 or 4-6):**
- Basic knowledge
- Some evaluation attempts
- Limited terminology use

**Level 1 (1-4 or 1-3):**
- Limited knowledge
- Minimal evaluation
- Little specialist vocabulary

### 8-Mark Assess/Evaluate Levels

**Level 3 (7-8 marks):**
- Clear assessment/evaluation with developed points
- Logical chains of reasoning
- Balanced consideration

**Level 2 (4-6 marks):**
- Some assessment/evaluation
- Points made but not fully developed
- May be one-sided

**Level 1 (1-3 marks):**
- Limited assessment
- Basic points only
- Descriptive

### Application Marks
- Credit explicit reference to context/stimulus
- Must show understanding, not just labelling
- Apply psychological concepts to specific situation
`;

// ============================================================================
// KEY STUDIES - COMPREHENSIVE DETAILS
// ============================================================================

const EDEXCEL_ALEVEL_PSYCH_KEY_STUDIES = `
## Key Studies for Edexcel A-Level Psychology

### Paper 1: Foundations

**Social Psychology:**
- Classic: Milgram (1963) obedience
- Contemporary: Burger (2009) replication

**Cognitive Psychology:**
- Classic: Baddeley (1966) encoding
- Contemporary: Sebastian and Hernandez-Gil (2012) digit span

**Biological Psychology:**
- Classic: Raine et al. (1997) brain abnormalities in murderers
- Contemporary: Brendgen et al. (2005) genetics of aggression

**Learning Theories:**
- Classic: Watson and Rayner (1920) Little Albert
- Contemporary: Capafons et al. (1998) flying phobia treatment

### Paper 2: Applications

**Clinical Psychology:**
- Classic: Rosenhan (1973) On Being Sane
- Contemporary: Carlsson et al. (2000) dopamine hypothesis

**Criminological Psychology:**
- Classic: Loftus and Palmer (1974) EWT
- Contemporary: Valentine and Mesout (2009) Horror Dungeon

**Child Psychology:**
- Classic: Bowlby (1944) 44 Thieves
- Contemporary: Li et al. (2013) attachment types

**Health Psychology:**
- Classic: Olds and Milner (1954) pleasure centres
- Contemporary: Munafo et al. (2007) DRD4 and smoking
`;

// ============================================================================
// DETAILED STUDY SUMMARIES
// ============================================================================

const MILGRAM_1963_STUDY = `
## Milgram (1963) - Obedience to Authority

### Background and Aims
- Milgram wanted to investigate how far people would go in obeying an authority figure's instructions, even if those instructions conflicted with their personal conscience
- Research question: "Would ordinary Americans obey orders to harm another person?"
- Conducted at Yale University

### Sample
- 40 male participants aged 20-50
- Recruited through newspaper advertisements and direct mail
- Paid $4.50 for participation (plus 50 cents travel expenses)
- Range of occupations and educational backgrounds

### Procedure
1. **Cover story**: Participants were told this was a study about the effects of punishment on learning
2. **Rigged draw**: Participant always became the "teacher", confederate always became "learner"
3. **Shock generator**: 30 switches from 15V to 450V with labels from "Slight Shock" to "XXX"
4. **Task**: Teacher reads word pairs, learner must recall; wrong answers receive increasing shocks
5. **Learner responses**: Pre-recorded protests, complaints of heart condition, screams, silence
6. **Experimenter prods**: "Please continue", "The experiment requires you to continue", "It is absolutely essential that you continue", "You have no other choice, you must go on"

### Findings
- **65%** (26/40) continued to the maximum 450V
- **100%** continued to at least 300V
- All participants showed signs of extreme tension (sweating, trembling, nervous laughter)
- 14 participants displayed nervous laughter

### Variations
| Variation | Obedience Rate | Key Change |
|-----------|----------------|------------|
| Baseline | 65% | Original procedure |
| Touch proximity | 30% | Teacher forces learner's hand onto shock plate |
| Remote instruction | 21% | Experimenter gives orders by phone |
| Run-down office | 47.5% | Study conducted in Bridgeport office building |
| Two teachers refuse | 10% | Confederate teachers disobey |
| Teacher chooses level | 2.5% | No orders about voltage |

### Evaluation

**Strengths:**
- High internal validity - controlled conditions at Yale
- Quantifiable data - exact percentages of obedience
- Practical applications - understanding war crimes, workplace abuse
- Replicated across cultures with similar results

**Limitations:**
- Low ecological validity - artificial laboratory setting
- Ethical concerns - psychological harm, deception, right to withdraw compromised
- Sample bias - all male, American, self-selected
- Demand characteristics - may have guessed purpose
- Generalisability - 1960s context, predominantly white sample
`;

const SHERIF_1954_STUDY = `
## Sherif et al. (1954/1961) - Robbers Cave Experiment

### Background and Aims
- To investigate how intergroup conflict develops and how it can be reduced
- Test realistic conflict theory - competition for limited resources causes prejudice
- Examine the contact hypothesis - can contact between groups reduce prejudice?

### Sample
- 22 white, middle-class, Protestant boys aged 11-12
- All from stable two-parent families
- None knew each other before the study
- Selected for psychological normality and similar backgrounds
- Randomly assigned to two groups

### Procedure (Three Phases)

**Phase 1: In-group formation (Week 1)**
- Groups kept separate and unaware of each other
- Each group arrived at camp separately
- Participated in bonding activities (hiking, swimming)
- Chose group names: "Eagles" and "Rattlers"
- Developed group norms and hierarchies

**Phase 2: Friction phase (Week 2)**
- Groups became aware of each other
- Introduced competition for limited prizes (penknives, medals)
- Series of competitive activities with cumulative scoring
- Included: baseball, tug-of-war, treasure hunt, cabin inspection

**Results of friction phase:**
- Intense hostility developed
- Name-calling ("stinkers", "braggers")
- Cabin raids and burning of flags
- Refusal to eat with the other group
- Fight that required researcher intervention

**Phase 3: Integration phase (Week 3)**
- Contact hypothesis test: simple contact did not reduce hostility
- Superordinate goals introduced:
  - Fixing broken water supply (affects both groups)
  - Pooling money to rent a movie
  - Pulling stuck truck together

**Results of integration phase:**
- Hostility significantly reduced
- Boys began to mix and form friendships across groups
- 65% had best friend from other group by end
- Asked to travel home on same bus together

### Evaluation

**Strengths:**
- High ecological validity - real summer camp setting
- Demonstrated effectiveness of superordinate goals
- Applied to real-world conflict resolution
- Longitudinal design showed development of attitudes

**Limitations:**
- Sample bias - all white, Protestant, middle-class American boys
- Cannot generalise to adult prejudice or long-standing conflicts
- Ethical concerns - psychological distress, lack of informed consent
- Researchers may have manipulated conditions
- Difficult to replicate exactly
`;

const RAINE_1997_STUDY = `
## Raine et al. (1997) - Brain Abnormalities in Murderers

### Background and Aims
- To investigate whether murderers who plead not guilty by reason of insanity (NGRI) have brain abnormalities
- Use PET scans to examine brain activity in murderers compared to controls
- Focus on areas associated with aggression and violence

### Sample
- **Experimental group**: 41 murderers (39 males, 2 females)
  - All pleaded NGRI or were found incompetent to stand trial
  - Mean age: 34.3 years
  - 23 had history of head injury, 6 had schizophrenia, 2 had substance abuse

- **Control group**: 41 non-murderers matched for:
  - Age and sex
  - 6 controls with schizophrenia matched to 6 murderers with schizophrenia

### Procedure
1. **Preparation**: No alcohol/caffeine for 24 hours, no medication for 2 weeks
2. **CPT task**: 32 minutes of Continuous Performance Task (sustained attention)
3. **FDG injection**: Fluorodeoxyglucose tracer injected 30 seconds before task
4. **PET scan**: Brain scanned 32 minutes after injection to measure glucose metabolism
5. **Analysis**: Compared activity in 14 brain regions between groups

### Findings

**Reduced activity in murderers:**
| Brain Area | Function | Implication |
|------------|----------|-------------|
| Prefrontal cortex | Impulse control, decision-making | Poor behavioural regulation |
| Corpus callosum | Communication between hemispheres | Abnormal emotional responses |
| Left angular gyrus | Language processing | Communication difficulties |
| Left amygdala | Fear response, emotional memory | Fearlessness, lack of emotional learning |

**Abnormal activity patterns:**
- Lower left hemisphere, higher right hemisphere activity in amygdala and hippocampus
- Asymmetrical activity suggesting abnormal emotional processing

**No difference in:**
- Occipital lobes, cerebellum, thalamus, temporal lobes

### Conclusions
- Brain dysfunction may predispose to violence
- Multiple brain areas involved, not single "violence centre"
- Does NOT prove brain abnormalities cause violence (correlation not causation)
- Cannot distinguish cause from effect (violence may cause brain changes)

### Evaluation

**Strengths:**
- Objective biological measure (PET scans)
- Well-controlled matching procedure
- Controlled for medication and substance effects
- Identified specific brain regions for further research

**Limitations:**
- Correlation not causation - cannot establish direction of relationship
- Sample not representative of all murderers (NGRI plea only)
- Cannot generalise to non-murderous violence
- Individual differences - not all murderers showed same patterns
- Brain activity during CPT may not reflect typical functioning
`;

const BADDELEY_1966_STUDY = `
## Baddeley (1966) - Encoding in Short-Term and Long-Term Memory

### Background and Aims
- To investigate the type of encoding used in short-term memory (STM) and long-term memory (LTM)
- Test whether STM uses primarily acoustic (sound-based) encoding
- Test whether LTM uses primarily semantic (meaning-based) encoding

### Experiments and Findings

**Experiment 1: Acoustic similarity in STM**
- Four word lists:
  - Acoustically similar: man, can, cab, cap, mad
  - Acoustically dissimilar: pit, few, cow, pen, sup
  - Semantically similar: great, large, big, huge, broad
  - Semantically dissimilar: good, huge, hot, safe, thin

**Procedure:**
- Participants heard 5 words presented
- Immediate recall after 3-second interval
- STM tested

**Findings:**
- Acoustically similar words: 55% correct order
- Acoustically dissimilar words: 75% correct order
- Semantic similarity had minimal effect on STM recall
- **Conclusion**: STM relies on acoustic encoding

**Experiment 2: Semantic similarity in LTM**
- Same word lists as above
- Intervening task of 20 minutes before recall
- LTM tested

**Findings:**
- Semantically similar words: 55% correct
- Semantically dissimilar words: 85% correct
- Acoustic similarity had minimal effect on LTM recall
- **Conclusion**: LTM relies on semantic encoding

### Summary of Findings

| Memory Store | Encoding Type | Evidence |
|--------------|---------------|----------|
| STM | Acoustic | Words that sound similar are confused in STM |
| LTM | Semantic | Words with similar meanings are confused in LTM |

### Evaluation

**Strengths:**
- Controlled laboratory experiment
- Standardised procedure allows replication
- Clear distinction between STM and LTM encoding
- Supports multi-store model predictions

**Limitations:**
- Artificial stimuli - word lists lack ecological validity
- Oversimplified - some semantic encoding occurs in STM
- Visual encoding ignored
- Demand characteristics possible
- Lab setting may not reflect real-world memory
`;

const GOTTESMAN_SHIELDS_1972_STUDY = `
## Gottesman and Shields (1972) - Twin Studies in Schizophrenia

### Background and Aims
- To investigate the genetic basis of schizophrenia using twin studies
- Compare concordance rates between monozygotic (MZ) and dizygotic (DZ) twins
- Meta-analysis of existing twin studies plus new data

### Method
- Review of twin studies from 1963 onwards
- Own study of 57 twin pairs from Maudsley Hospital Twin Register
- MZ twins share 100% DNA; DZ twins share 50% DNA
- If schizophrenia is genetic, MZ concordance should be higher than DZ

### Findings

**Concordance Rates (various studies reviewed):**

| Study | MZ Concordance | DZ Concordance |
|-------|----------------|----------------|
| Gottesman & Shields (1972) | 42% | 9% |
| Rosenthal (1962) | 69% | 10% |
| Fischer (1973) | 56% | 26% |
| Pooled estimate | 35-58% | 9-26% |

**Severity correlation:**
- More severe schizophrenia in one twin = higher concordance
- If proband had severe symptoms, 75-91% concordance
- If proband had mild symptoms, 17-33% concordance

### Conclusions
- Strong genetic component to schizophrenia (MZ > DZ concordance)
- But NOT 100% concordance - environment also plays a role
- Supports diathesis-stress model: genetic predisposition + environmental trigger
- Severity of illness affects heritability estimates

### Evaluation

**Strengths:**
- Meta-analysis provides robust overview
- MZ/DZ comparison is powerful design for genetic research
- Controls for shared environment (twins raised together)
- Findings replicated across multiple studies and countries

**Limitations:**
- Concordance not 100% - genes not deterministic
- Shared environment confound - MZ twins often treated more similarly
- Diagnostic reliability - schizophrenia criteria varied between studies
- Small sample sizes in individual studies
- Cannot identify specific genes involved
- MZ twins may have more similar prenatal environments
`;

const WATSON_RAYNER_1920_STUDY = `
## Watson and Rayner (1920) - Little Albert

### Background and Aims
- To demonstrate that emotional responses (fear) can be classically conditioned in humans
- Provide empirical support for behaviourist approach
- Show that phobias may develop through association learning

### Participant
- "Albert B" - 9-month-old infant
- Son of a wet nurse at Johns Hopkins Hospital
- Described as "stolid and unemotional"
- Selected because he showed no initial fear responses

### Procedure

**Pre-conditioning tests (aged 9 months):**
- Albert presented with: white rat, rabbit, dog, monkey, masks, burning newspaper
- Showed no fear response to any stimuli

**Conditioning phase (aged 11 months):**
1. White rat presented (neutral stimulus - NS)
2. As Albert reached for rat, loud noise made behind head (unconditioned stimulus - UCS)
3. Noise caused startle/distress (unconditioned response - UCR)
4. Pairing repeated 7 times over two sessions

### Classical Conditioning Sequence

| Stage | Stimulus | Response |
|-------|----------|----------|
| Before | Rat (NS) | No fear |
| Before | Loud noise (UCS) | Fear/crying (UCR) |
| Conditioning | Rat + noise | Fear/crying |
| After | Rat alone (CS) | Fear/crying (CR) |

### Findings

**Conditioned emotional response:**
- After 7 pairings, Albert cried at sight of rat alone
- Response persisted 5 days later

**Generalisation:**
- Fear generalised to similar stimuli:
  - Rabbit (strong fear)
  - Dog (mild fear)
  - Santa Claus mask with beard
  - Watson's hair
  - Fur coat
- Did not generalise to dissimilar objects (wooden blocks)

**Persistence:**
- Fear remained 31 days after conditioning
- Some weakening over time but still present

### Evaluation

**Strengths:**
- Provided evidence for behaviourist theory
- Demonstrated classical conditioning in humans
- Showed generalisation of conditioned responses
- Foundation for understanding phobia development

**Limitations:**
- Severe ethical issues - deliberate psychological harm to infant
- No informed consent from mother
- No attempt at deconditioning
- Single case study - cannot generalise
- Albert may have had neurological impairment (recent research suggests)
- Some suggest responses were exaggerated
`;

const ROSENHAN_1973_STUDY = `
## Rosenhan (1973) - On Being Sane in Insane Places

### Background and Aims
- To investigate whether psychiatric diagnoses are valid
- Can psychiatrists distinguish between the sane and insane?
- Examine the power of labelling and context in diagnosis

### Study 1: Pseudopatients

**Sample:**
- 8 pseudopatients (5 male, 3 female)
- Included: psychology graduate, 3 psychologists, psychiatrist, paediatrician, painter, housewife
- Rosenhan himself was a pseudopatient

**Procedure:**
1. Each pseudopatient called psychiatric hospital for appointment
2. Complained of hearing unfamiliar voices saying "empty", "hollow", "thud"
3. All other information (history, behaviour) was genuine
4. Once admitted, stopped reporting symptoms immediately
5. Behaved completely normally
6. Took notes openly (some staff saw this as "writing behaviour")
7. Asked to be discharged

**Findings:**
- All 8 admitted - 7 diagnosed with schizophrenia, 1 with manic depression
- Length of stay: 7-52 days (average 19 days)
- All discharged with "schizophrenia in remission"
- 35 of 118 real patients suspected pseudopatients were sane
- Staff never detected the deception
- Normal behaviours interpreted as symptoms (e.g., note-taking)

### Study 2: Non-existent Pseudopatients

**Procedure:**
- One hospital (aware of Study 1) was told pseudopatients would try to gain admission over 3 months
- In reality, no pseudopatients were sent

**Findings:**
- Of 193 new patients:
  - 41 rated as pseudopatients by at least one psychiatrist
  - 23 suspected by psychiatrist AND one other staff member
  - 19 suspected by psychiatrist only
- Demonstrates inability to reliably identify real patients

### Conclusions
- Psychiatric diagnosis lacks validity
- Context powerfully influences perception
- Once labelled, behaviour is interpreted through that lens
- Sane cannot be distinguished from insane in hospital settings
- Labels are "sticky" - discharged "in remission", not as "sane"

### Evaluation

**Strengths:**
- High ecological validity - real psychiatric hospitals
- Challenged mental health system
- Led to improvements in diagnostic criteria (DSM-III)
- Highlighted problems with labelling

**Limitations:**
- Ethical concerns - deception of hospitals and staff
- Pseudopatients presented with genuine symptoms initially
- Does not prove diagnosis is always invalid
- Hospitals acted cautiously (admitting rather than rejecting)
- Historical context - pre-DSM-III diagnostic criteria
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const SOCIAL_PSYCHOLOGY_KNOWLEDGE = `
## Social Psychology - Edexcel A-Level

### Obedience
**Definition**: Following direct orders from an authority figure

**Milgram's Agency Theory:**
- Agentic state: Individual acts as agent of authority, not responsible
- Autonomous state: Individual feels responsible for own actions
- Agentic shift: Movement from autonomous to agentic state
- Moral strain: Discomfort when orders conflict with conscience

**Factors affecting obedience:**
- Legitimacy of authority
- Proximity to victim
- Proximity to authority figure
- Presence of disobedient peers
- Setting/location

### Conformity
**Definition**: Yielding to group pressure or norms

**Types of conformity (Kelman, 1958):**
| Type | Description | Depth | Permanence |
|------|-------------|-------|------------|
| Compliance | Public agreement only | Surface | Temporary |
| Identification | Conform to valued group | Medium | While valued |
| Internalisation | Private acceptance | Deep | Permanent |

**Explanations for conformity:**
- **Normative social influence**: Desire to be liked/accepted
- **Informational social influence**: Desire to be correct

**Asch (1951) - Conformity study:**
- 123 male participants
- Line judgement task with confederates
- 37% conformed to obviously wrong answers
- 75% conformed at least once
- Conformity decreased when: one dissenter present, task difficulty reduced

### Prejudice

**Realistic Conflict Theory (Sherif):**
- Competition for limited resources causes intergroup conflict
- Prejudice is rational response to competition
- Superordinate goals reduce prejudice
- Support: Robbers Cave experiment

**Social Identity Theory (Tajfel & Turner):**
1. **Social categorisation**: Divide world into in-groups and out-groups
2. **Social identification**: Adopt identity of group
3. **Social comparison**: Compare in-group favourably to out-group

**Minimal groups paradigm:**
- Tajfel (1970) showed prejudice even with arbitrary group assignment
- Demonstrates in-group favouritism is automatic

**Reducing prejudice:**
- Superordinate goals
- Equal status contact
- Institutional support
- Personal acquaintance
- Cooperation
`;

const COGNITIVE_PSYCHOLOGY_KNOWLEDGE = `
## Cognitive Psychology - Edexcel A-Level

### Multi-Store Model (Atkinson & Shiffrin, 1968)

**Structure:**
\`\`\`
Sensory Memory --> Attention --> STM --> Rehearsal --> LTM
                                 |                      |
                            Displacement           Retrieval
\`\`\`

**Sensory Memory:**
- Duration: < 1 second (iconic: 0.5s; echoic: 3-4s)
- Capacity: High but rapidly decaying
- Encoding: Modality specific

**Short-Term Memory:**
- Duration: 15-30 seconds (Peterson & Peterson, 1959)
- Capacity: 7+/-2 items (Miller, 1956)
- Encoding: Primarily acoustic (Baddeley, 1966)

**Long-Term Memory:**
- Duration: Potentially unlimited
- Capacity: Unlimited
- Encoding: Primarily semantic

**Evaluation:**
- Strengths: Case study of HM (STM intact, LTM impaired); Baddeley's encoding research
- Limitations: Oversimplified STM; ignores different LTM types; evidence for semantic STM encoding

### Working Memory Model (Baddeley & Hitch, 1974)

**Components:**

| Component | Function | Capacity |
|-----------|----------|----------|
| Central Executive | Attention, coordination | Limited |
| Phonological Loop | Verbal/acoustic info | 2 seconds |
| Visuo-Spatial Sketchpad | Visual/spatial info | 3-4 objects |
| Episodic Buffer | Integrates information | 4 chunks |

**Phonological Loop sub-components:**
- Articulatory control system (inner voice)
- Phonological store (inner ear)

**Evidence:**
- Dual-task studies: Impairment only when tasks use same component
- Word length effect: Shorter words recalled better (phonological loop capacity)
- KF case study: Impaired STM for verbal but not visual info

**Evaluation:**
- Strengths: Explains dual-task performance; more detailed than MSM; supported by brain imaging
- Limitations: Central executive poorly understood; episodic buffer vague

### Forgetting

**Interference:**
- Proactive interference: Old learning disrupts new
- Retroactive interference: New learning disrupts old
- Increased with similarity between materials
- McGeoch & McDonald (1931): Similar words caused more interference

**Retrieval Failure:**
- Information stored but cannot be accessed
- Context-dependent memory: External cues
- State-dependent memory: Internal state (mood, drugs)
- Godden & Baddeley (1975): Divers recalled better in same environment

**Trace Decay:**
- Memory trace fades over time
- Difficult to test independently of interference

### Eyewitness Testimony

**Factors affecting EWT accuracy:**
- Leading questions (Loftus & Palmer)
- Post-event information
- Anxiety (weapon focus)
- Age of witness
- Time delay

**Loftus and Palmer (1974):**
- "Smashed" (40.5 mph) vs "Contacted" (31.8 mph) speed estimates
- Verb influenced memory of accident severity
- Week later: "Smashed" condition more likely to report broken glass
- Supports reconstructive memory theory

**Cognitive Interview (Fisher & Geiselman, 1987):**
1. Report everything
2. Mental reinstatement of context
3. Change perspective
4. Reverse order

**Evaluation of EWT research:**
- Lab studies lack ecological validity
- Real witnesses more motivated and aroused
- Ethical limitations on realistic research
`;

const BIOLOGICAL_PSYCHOLOGY_KNOWLEDGE = `
## Biological Psychology - Edexcel A-Level

### Aggression - Biological Explanations

**Brain Structures:**

| Structure | Role in Aggression | Evidence |
|-----------|-------------------|----------|
| Limbic system | Emotion regulation | Papez circuit |
| Amygdala | Threat detection, fear | Kluver-Bucy syndrome |
| Prefrontal cortex | Impulse control | Phineas Gage |
| Hypothalamus | Coordinates aggressive response | Flynn (1967) |

**Limbic System:**
- Papez circuit: hippocampus, thalamus, cingulate gyrus
- Damage leads to emotional dysregulation
- Rabies virus affects limbic system - causes aggression

**Amygdala:**
- Processes threat and fear
- Bilateral lesions reduce aggression (Kluver-Bucy syndrome)
- Raine et al. (1997): Abnormal amygdala activity in murderers
- Animal studies: Electrical stimulation causes rage

**Prefrontal Cortex:**
- Executive control and impulse inhibition
- Phineas Gage (1848): Damage led to personality change
- Raine et al.: Reduced prefrontal activity in violent offenders

**Hormones:**

| Hormone | Effect | Evidence |
|---------|--------|----------|
| Testosterone | Increases aggression | Dabbs (1988); Castration studies |
| Cortisol | Inhibits aggression (normally) | Low cortisol in conduct disorder |
| Serotonin | Inhibits aggression | Low 5-HIAA in violent offenders |

**Testosterone:**
- Dabbs et al. (1988): Higher testosterone in violent criminals
- Correlational - direction unclear
- Challenge hypothesis: Testosterone rises during competition

**Serotonin:**
- Inhibitory effect on aggression
- Low levels linked to impulsive aggression
- Mann et al. (1990): Serotonin depletion increased aggression in men

**Genetics:**

**MAOA Gene (Warrior Gene):**
- Brunner et al. (1993): Dutch family with MAOA deficiency - violent males
- Low MAOA activity + childhood maltreatment = aggression (Caspi et al., 2002)
- Gene-environment interaction

**Twin Studies:**
- Coccaro et al. (1997): 50% heritability for aggression
- MZ twins more similar in aggression than DZ
- But shared environment also important

**Adoption Studies:**
- Mednick et al. (1984): Biological parent criminality predicted offspring criminality
- Even when raised by non-criminal adoptive parents

### Brain Localisation

**Motor Cortex:**
- Located in frontal lobe (precentral gyrus)
- Controls voluntary movement
- Contralateral control
- Somatotopic organisation (motor homunculus)

**Sensory Cortex:**
- Located in parietal lobe (postcentral gyrus)
- Processes sensory information
- Contralateral representation
- Sensory homunculus

**Language Areas:**
- Broca's area (left frontal): Speech production
- Wernicke's area (left temporal): Speech comprehension
- Broca's aphasia: Slow, effortful speech
- Wernicke's aphasia: Fluent but meaningless speech

**Visual Cortex:**
- Primary visual cortex in occipital lobe
- Feature detection: edges, colours, movement
- Visual agnosia: Cannot recognise objects

### Biological Rhythms

**Circadian Rhythms (24-hour cycle):**
- Sleep-wake cycle
- Core body temperature
- Hormone release

**Endogenous Pacemakers:**
- Suprachiasmatic nucleus (SCN) in hypothalamus
- Pineal gland secretes melatonin
- Siffre (1975): Cave study - 25-30 hour cycle without zeitgebers

**Exogenous Zeitgebers:**
- Light (most important)
- Social cues
- Temperature

**Ultradian Rhythms (< 24 hours):**
- Sleep stages (90-minute cycle)
- BRAC (Basic Rest-Activity Cycle)

**Infradian Rhythms (> 24 hours):**
- Menstrual cycle (28 days)
- Seasonal Affective Disorder (annual)
`;

const LEARNING_THEORIES_KNOWLEDGE = `
## Learning Theories - Edexcel A-Level

### Classical Conditioning (Pavlov)

**Key Terms:**
| Term | Definition |
|------|------------|
| Unconditioned Stimulus (UCS) | Naturally produces response |
| Unconditioned Response (UCR) | Natural, unlearned response |
| Neutral Stimulus (NS) | Does not produce response |
| Conditioned Stimulus (CS) | Previously NS, now produces response |
| Conditioned Response (CR) | Learned response to CS |

**Pavlov's Dogs:**
1. UCS (food) --> UCR (salivation)
2. NS (bell) + UCS (food) --> UCR (salivation)
3. CS (bell) --> CR (salivation)

**Processes:**
- **Acquisition**: Learning the association
- **Extinction**: CR disappears when CS presented without UCS
- **Spontaneous recovery**: CR reappears after rest period
- **Generalisation**: Response to similar stimuli
- **Discrimination**: Response to specific stimulus only

**Application to Phobias:**
- Watson & Rayner (1920): Little Albert
- NS (rat) + UCS (loud noise) --> UCR (fear)
- CS (rat) --> CR (fear)
- Generalisation to similar furry objects

### Operant Conditioning (Skinner)

**Law of Effect (Thorndike):**
- Behaviours followed by satisfaction are repeated
- Behaviours followed by discomfort are not repeated

**Types of Reinforcement:**

| Type | Effect | Example |
|------|--------|---------|
| Positive reinforcement | Add pleasant stimulus | Praise after good behaviour |
| Negative reinforcement | Remove unpleasant stimulus | Taking painkillers |
| Positive punishment | Add unpleasant stimulus | Detention |
| Negative punishment | Remove pleasant stimulus | Confiscating phone |

**Schedules of Reinforcement:**

| Schedule | Description | Response Pattern |
|----------|-------------|------------------|
| Continuous | Every response reinforced | Fast acquisition, fast extinction |
| Fixed ratio | After set number of responses | High rate, pause after reinforcement |
| Variable ratio | After varying number | Very high, steady rate |
| Fixed interval | After set time period | Scalloped pattern |
| Variable interval | After varying time | Steady, moderate rate |

**Skinner Box Experiments:**
- Rats and pigeons
- Lever pressing for food pellets
- Demonstrated shaping through successive approximation

### Social Learning Theory (Bandura)

**Key Principles:**
1. **Observation**: Learning by watching models
2. **Imitation**: Reproducing observed behaviour
3. **Modelling**: Demonstration by model
4. **Vicarious reinforcement**: Learning from model's consequences

**Four Stages of Observational Learning:**

| Stage | Description | Factors |
|-------|-------------|---------|
| Attention | Notice the behaviour | Model characteristics, salience |
| Retention | Remember the behaviour | Cognitive rehearsal |
| Reproduction | Ability to perform | Physical capability |
| Motivation | Reason to imitate | Expected rewards |

**Bandura's Bobo Doll Studies (1961, 1963, 1965):**

**1961 Study:**
- 72 children aged 3-6
- Observed adult model either aggressive or non-aggressive with Bobo doll
- Aggressive model group showed more aggression
- Gender difference: Boys more physically aggressive

**1963 Study:**
- Live model vs film vs cartoon
- All conditions showed imitation
- Film and cartoon equally effective

**1965 Study:**
- Model rewarded, punished, or no consequences
- Punishment reduced imitation
- But all groups showed equal learning when incentivised

**Mediating Cognitive Factors:**
- Self-efficacy: Belief in ability to perform
- Identification with model
- Model characteristics: Status, similarity, warmth

**Evaluation:**
- Explains acquisition without direct reinforcement
- Accounts for cultural transmission
- But Bobo doll designed to be hit
- May not generalise to real aggression
`;

const CLINICAL_PSYCHOLOGY_KNOWLEDGE = `
## Clinical Psychology - Edexcel A-Level

### Schizophrenia

**Symptoms:**

**Positive Symptoms (additions to behaviour):**
- Hallucinations (usually auditory)
- Delusions (paranoid, grandiose, control)
- Thought disorder
- Disorganised behaviour

**Negative Symptoms (loss of function):**
- Affective flattening
- Alogia (poverty of speech)
- Avolition (lack of motivation)
- Anhedonia (inability to feel pleasure)
- Social withdrawal

**Diagnostic Criteria (DSM-5):**
- 2+ symptoms for 1+ month
- At least one must be hallucinations, delusions, or disorganised speech
- Continuous signs for 6+ months
- Impaired functioning

**Biological Explanations:**

**Dopamine Hypothesis:**
- Original: Excess dopamine causes schizophrenia
- Revised: Dopamine dysregulation
  - Mesolimbic pathway: Overactivity --> positive symptoms
  - Mesocortical pathway: Underactivity --> negative symptoms

**Evidence:**
- Amphetamines increase dopamine --> psychosis
- Antipsychotics block D2 receptors --> reduce symptoms
- PET scans show increased D2 receptors in schizophrenia

**Genetics:**
- Gottesman & Shields (1972): MZ 42%, DZ 9% concordance
- Adoption studies: Biological relatives at higher risk
- Multiple genes involved (polygenetic)

**Neural Correlates:**
- Enlarged ventricles
- Reduced prefrontal grey matter
- Abnormal temporal lobe

**Psychological Explanations:**

**Family Dysfunction:**
- Double-bind theory (Bateson): Contradictory messages
- Expressed emotion: High criticism/hostility increases relapse
- But may be consequence, not cause

**Cognitive Explanation:**
- Dysfunctional thought processing
- Faulty reality monitoring
- Attribution biases

**Treatments:**

**Typical Antipsychotics:**
- Chlorpromazine, haloperidol
- Block D2 receptors
- Effective for positive symptoms
- Side effects: Tardive dyskinesia, sedation

**Atypical Antipsychotics:**
- Clozapine, risperidone, olanzapine
- Block D2 and 5-HT receptors
- Fewer movement side effects
- Risk of agranulocytosis (clozapine)

**CBT for Psychosis:**
- Challenge delusional beliefs
- Reality testing
- Develop coping strategies
- NICE recommended

**Family Therapy:**
- Reduce expressed emotion
- Psychoeducation
- Communication skills

### Depression

**Symptoms:**
- Persistent low mood
- Loss of interest/pleasure (anhedonia)
- Sleep disturbance
- Appetite/weight changes
- Fatigue
- Concentration difficulties
- Feelings of worthlessness
- Suicidal thoughts

**Biological Explanations:**

**Monoamine Hypothesis:**
- Low levels of serotonin, noradrenaline, dopamine
- Supported by effectiveness of antidepressants
- But antidepressants take weeks to work

**Genetics:**
- McGuffin et al. (1996): MZ 46%, DZ 20% concordance
- 5-HTTLPR gene variant and stress interaction

**Cortisol:**
- HPA axis dysregulation
- Elevated cortisol in depression
- Hippocampal damage

**Cognitive Explanation (Beck):**

**Negative Triad:**
- Negative view of self
- Negative view of world
- Negative view of future

**Cognitive Distortions:**
- All-or-nothing thinking
- Overgeneralisation
- Mental filter
- Catastrophising

**Treatments:**

**Antidepressants:**
- SSRIs (fluoxetine): Block serotonin reuptake
- SNRIs (venlafaxine): Block serotonin and noradrenaline reuptake
- Tricyclics: Block multiple neurotransmitters

**CBT:**
- Identify negative automatic thoughts
- Challenge cognitive distortions
- Behavioural activation
- Equally effective as medication for mild-moderate depression
`;

// ============================================================================
// APPLICATION TOPICS
// ============================================================================

const CRIMINOLOGICAL_PSYCHOLOGY_KNOWLEDGE = `
## Criminological Psychology - Edexcel A-Level

### Explanations of Criminal Behaviour

**Biological:**
- Brain abnormalities (Raine et al., 1997)
- Genetics (XYY chromosome theory - discredited)
- Hormones (testosterone)
- Neurotransmitters (low serotonin)

**Social Learning Theory:**
- Modelling criminal behaviour
- Sutherland's differential association theory
- Media influence

**Psychodynamic:**
- Inadequate superego development
- Maternal deprivation (Bowlby)
- Unresolved conflicts

### Eyewitness Testimony

**Factors Affecting Accuracy:**
- Weapon focus effect (Loftus et al., 1987)
- Anxiety (Yerkes-Dodson Law)
- Leading questions
- Post-event information
- Age and cross-race identification

**Improving EWT:**
- Cognitive Interview
- Rapport building
- Avoid leading questions
- Use sequential lineups

### Offender Profiling

**Top-down (FBI) Approach:**
- Based on organised/disorganised typology
- Uses crime scene analysis
- Offender characteristics inferred
- Developed from interviews with 36 serial killers

**Bottom-up Approach:**
- Data-driven
- Investigative Psychology (Canter)
- Geographical profiling
- Statistical analysis

### Treatments for Offenders

**Token Economy:**
- Based on operant conditioning
- Tokens exchanged for privileges
- Immediate reinforcement
- Used in prisons and secure units

**Procedure:**
1. Identify target behaviours
2. Establish token value
3. Apply consistently
4. Gradually increase requirements

**Evaluation:**
- Effective in institutional settings
- But behaviour may not generalise
- Ethical concerns about manipulation

**Anger Management:**

**Based on CBT principles:**
1. **Cognitive preparation**: Recognise triggers
2. **Skill acquisition**: Learn coping strategies
3. **Application practice**: Role-play scenarios

**Ireland (2000) study:**
- 50 young offenders
- 8 sessions of anger management
- 92% showed improvement on at least one measure
- But no long-term follow-up

**Restorative Justice:**
- Offender meets victim
- Take responsibility
- Make amends
- Some evidence of reduced reoffending
`;

const CHILD_PSYCHOLOGY_KNOWLEDGE = `
## Child Psychology - Edexcel A-Level

### Attachment

**Definition**: Deep emotional bond between infant and caregiver

**Bowlby's Theory:**
- Attachment is innate and adaptive
- Critical period (first 2.5 years)
- Monotropy: One primary attachment
- Internal working model: Template for relationships
- Continuity hypothesis: Early attachment predicts later relationships

**Ainsworth's Strange Situation:**

| Type | Behaviour | Caregiver Response |
|------|-----------|-------------------|
| Type A (Avoidant) | Ignores caregiver, no distress | Rejecting |
| Type B (Secure) | Explores, upset at separation, easily comforted | Sensitive |
| Type C (Ambivalent) | Clingy, very distressed, resists comfort | Inconsistent |
| Type D (Disorganised) | No consistent pattern | Frightening |

**Distribution (Western samples):**
- Type B: 60-70%
- Type A: 20%
- Type C: 10-15%

**Maternal Deprivation Hypothesis (Bowlby):**
- Continuous care from mother figure needed
- Deprivation in critical period causes permanent damage
- 44 Thieves study: Affectionless psychopathy linked to early separation

**Evaluation:**
- Influential but now seen as oversimplified
- Multiple attachments possible and beneficial
- Quality more important than quantity
- Robertson studies showed separation effects reversible

### Deprivation vs Privation

**Deprivation**: Loss of attachment figure
- Effects often reversible
- Romanian orphan studies show recovery possible

**Privation**: Never forming attachment
- Genie case study: Severe lasting effects
- But Koluchova twins showed recovery possible

### Language Development

**Stages:**
| Age | Stage | Characteristics |
|-----|-------|-----------------|
| 0-6 months | Cooing | Vowel sounds |
| 6-12 months | Babbling | Consonant-vowel combinations |
| 12 months | First words | Holophrases |
| 18-24 months | Two-word stage | Telegraphic speech |
| 2-3 years | Complex sentences | Grammar emerging |

**Theories:**

**Learning Theory (Skinner):**
- Language learned through reinforcement
- Imitation of adults
- Shaping of sounds

**Nativist Theory (Chomsky):**
- Language Acquisition Device (LAD)
- Universal Grammar
- Poverty of stimulus argument
- Critical period for acquisition

**Interactionist Theory (Bruner):**
- Language Acquisition Support System (LASS)
- Child-directed speech
- Scaffolding
- Social interaction essential

### Autism Spectrum Disorder

**Characteristics (DSM-5):**
- Social communication deficits
- Restricted, repetitive behaviours
- Present from early childhood
- Spectrum of severity

**Theory of Mind Deficit:**
- Difficulty understanding others' mental states
- Baron-Cohen et al. (1985): Sally-Anne test
- False belief task performance impaired

**Weak Central Coherence:**
- Focus on details over global meaning
- Strength in some tasks (embedded figures)

**Executive Function Deficits:**
- Planning and flexibility impaired
- Perseveration

**Biological Explanations:**
- Genetics: 77-99% heritability (Tick et al., 2016)
- Brain differences: Enlarged amygdala, connectivity differences
- Prenatal factors

**Treatments:**
- Applied Behaviour Analysis (ABA)
- TEACCH
- Social skills training
- No cure - focus on support
`;

const HEALTH_PSYCHOLOGY_KNOWLEDGE = `
## Health Psychology - Edexcel A-Level

### Stress

**Definition**: Physical and psychological response to demands exceeding resources

**General Adaptation Syndrome (Selye):**
1. **Alarm**: Fight-or-flight response
2. **Resistance**: Body adapts to stressor
3. **Exhaustion**: Resources depleted, illness

**HPA Axis:**
1. Hypothalamus releases CRH
2. Pituitary releases ACTH
3. Adrenal cortex releases cortisol
4. Cortisol provides energy but impairs immune function

**SAM System:**
- Sympathetic nervous system activation
- Adrenaline and noradrenaline release
- Immediate fight-or-flight response

**Sources of Stress:**
- Life events (Holmes & Rahe SRRS)
- Daily hassles (Kanner)
- Workplace stress
- Lack of control (Marmot - Whitehall studies)

**Individual Differences:**
- Type A personality: Competitive, hostile, time-urgent
- Hardiness: Commitment, control, challenge
- Social support as buffer

**Stress Management:**

**Drug Treatments:**
- Benzodiazepines: Enhance GABA
- Beta-blockers: Block adrenaline
- But side effects and dependency risks

**CBT for Stress:**
- Identify cognitive distortions
- Develop coping strategies
- Problem-focused vs emotion-focused coping

**Biofeedback:**
- Learn to control physiological responses
- Relaxation training
- Some evidence of effectiveness

### Substance Misuse

**Definitions:**
- Use: Any consumption
- Misuse: Harmful use pattern
- Addiction: Compulsive use despite harm
- Physical dependence: Tolerance and withdrawal
- Psychological dependence: Craving and habit

**Brain Reward System:**
- Mesolimbic dopamine pathway
- Nucleus accumbens
- Drugs increase dopamine release
- Olds & Milner (1954): Rats self-stimulate pleasure centres

**Explanations:**

**Biological:**
- Genetic vulnerability
- Dopamine receptor variations
- DRD4 gene and novelty seeking

**Learning Theory:**
- Classical conditioning: Cues trigger craving
- Operant conditioning: Drug reinforces use
- Social learning: Modelling drug use

**Cognitive:**
- Expectancy theory
- Self-medication hypothesis
- Rational choice model

**Treatments:**

**Drug Treatments:**
- Methadone (heroin substitute)
- Nicotine replacement
- Naltrexone (blocks opioid receptors)

**Aversion Therapy:**
- Pair drug with unpleasant stimulus
- Antabuse for alcohol (causes nausea)
- Ethical concerns

**CBT:**
- Identify high-risk situations
- Develop coping strategies
- Relapse prevention
`;

// ============================================================================
// RESEARCH METHODS
// ============================================================================

const RESEARCH_METHODS_KNOWLEDGE = `
## Research Methods - Edexcel A-Level

### Experimental Methods

**Laboratory Experiment:**
- High control over extraneous variables
- Cause and effect can be established
- But low ecological validity
- Demand characteristics possible

**Field Experiment:**
- Conducted in natural setting
- Higher ecological validity
- But less control
- Ethical issues (consent)

**Natural Experiment:**
- IV occurs naturally
- Cannot control IV
- High ecological validity
- But cannot establish causation

**Quasi-Experiment:**
- IV is pre-existing characteristic (age, gender)
- Cannot randomly allocate
- Examples: Comparing depressed vs non-depressed

### Self-Report Methods

**Questionnaires:**
- Standardised questions
- Can reach large samples
- Social desirability bias
- Closed vs open questions

**Interviews:**
- Structured: Same questions for all
- Semi-structured: Core questions with flexibility
- Unstructured: Guided conversation

**Strengths:**
- Rich qualitative data (unstructured)
- Clarify misunderstandings
- Non-verbal cues observed

**Limitations:**
- Interviewer bias
- Social desirability
- Time-consuming

### Observational Methods

**Types:**
- Naturalistic vs controlled
- Participant vs non-participant
- Overt vs covert
- Structured vs unstructured

**Sampling Methods:**
- Time sampling: Fixed intervals
- Event sampling: Record specific events

**Issues:**
- Inter-rater reliability
- Observer bias
- Hawthorne effect

### Correlational Studies

- Measure relationship between co-variables
- Cannot establish causation
- Correlation coefficient: -1 to +1
- Scattergrams show relationship direction

### Case Studies

- In-depth study of individual/small group
- Rich qualitative data
- Unique cases can be studied
- But cannot generalise
- Researcher bias

### Content Analysis

- Analyse communication systematically
- Coding categories
- Quantitative and qualitative
- Reliability issues

### Statistical Testing

**Levels of Measurement:**
- Nominal: Categories
- Ordinal: Ranked order
- Interval/Ratio: Equal intervals

**Choosing Tests:**

| Test | Type | Level | Design |
|------|------|-------|--------|
| Chi-square | Difference | Nominal | Independent |
| Mann-Whitney | Difference | Ordinal | Independent |
| Wilcoxon | Difference | Ordinal | Repeated |
| Spearman's rho | Correlation | Ordinal | N/A |

**Significance:**
- p < 0.05: Significant
- Type I error: False positive (p too lenient)
- Type II error: False negative (p too strict)

### Reliability and Validity

**Reliability:**
- Test-retest: Same results over time
- Inter-rater: Agreement between observers
- Internal: Consistency within test (split-half)

**Validity:**
- Internal: IV caused DV change
- External: Generalisability
- Ecological: Relates to real life
- Face: Appears to measure what it claims
- Construct: Measures theoretical concept

### Ethical Guidelines (BPS)

1. **Respect**: Dignity, informed consent
2. **Competence**: Work within abilities
3. **Responsibility**: Avoid harm
4. **Integrity**: Honesty, avoid deception

**Key Principles:**
- Informed consent
- Right to withdraw
- Protection from harm
- Confidentiality
- Debriefing
- Deception (only when necessary)
`;

// ============================================================================
// ISSUES AND DEBATES
// ============================================================================

const ISSUES_AND_DEBATES_KNOWLEDGE = `
## Issues and Debates - Edexcel A-Level

### Nature vs Nurture

**Nature:**
- Biological factors: genes, brain structure, hormones
- Nativist approach
- Evidence: Twin studies, adoption studies

**Nurture:**
- Environmental factors: learning, culture, socialisation
- Empiricist approach
- Evidence: Cross-cultural differences

**Interactionist Perspective:**
- Gene-environment interaction
- Epigenetics
- Diathesis-stress model
- Example: MAOA gene + childhood maltreatment

### Reductionism vs Holism

**Reductionism:**
- Breaks complex phenomena into simpler parts
- Types: Biological, environmental, experimental

**Biological Reductionism:**
- Explains behaviour in terms of physiology
- Genes, neurotransmitters, brain structures
- Strength: Scientific, objective
- Limitation: Ignores social factors

**Environmental Reductionism:**
- Stimulus-response (behaviourist)
- Ignores cognitive processes

**Holism:**
- Behaviour understood as whole system
- Gestalt: "Whole is greater than sum of parts"
- Humanistic psychology
- Systems approach

### Free Will vs Determinism

**Free Will:**
- Humans have choice and control
- Humanistic approach
- Legal responsibility assumes free will

**Determinism:**
- Behaviour is caused by factors beyond control

**Types:**
| Type | Description | Approach |
|------|-------------|----------|
| Hard determinism | No free will | Biological |
| Soft determinism | Some choice within constraints | Cognitive |
| Biological | Genes, physiology | Biological |
| Psychic | Unconscious forces | Psychodynamic |
| Environmental | Learning, conditioning | Behaviourist |

### Idiographic vs Nomothetic

**Nomothetic:**
- General laws applying to everyone
- Scientific approach
- Large samples, statistics
- Example: Memory research

**Idiographic:**
- Individual uniqueness
- Qualitative methods
- Case studies, interviews
- Example: Humanistic therapy

**Psychology needs both:**
- Nomothetic establishes principles
- Idiographic applies to individuals

### Psychology as Science

**Features of Science:**
- Objectivity
- Empiricism
- Replicability
- Falsifiability
- Theory construction

**Arguments FOR:**
- Controlled experiments
- Objective measurement
- Hypothesis testing
- Peer review

**Arguments AGAINST:**
- Human complexity
- Researcher bias
- Artificial settings
- Social desirability
- Demand characteristics

**Kuhn's Paradigms:**
- Psychology is pre-paradigmatic
- No single dominant approach
- Different perspectives disagree

### Ethical Implications

**Socially Sensitive Research:**
- Research with potential consequences for participants or group
- Examples: IQ and race, eyewitness reliability

**Considerations:**
- Who funds and uses research?
- How are findings reported?
- Impact on policies
- Potential for misuse
- Protection of vulnerable groups

### Cultural Bias

**Ethnocentrism:**
- Judging other cultures by standards of own
- Western psychology as norm

**Cultural Relativism:**
- Behaviour understood within cultural context
- What is normal varies by culture

**Types of Bias:**
- Alpha bias: Exaggerates differences
- Beta bias: Ignores differences

**Examples:**
- Strange Situation: Western attachment norms
- DSM: Western mental illness categories
- Intelligence tests: Cultural loading

### Gender Bias

**Androcentrism:**
- Male behaviour as norm
- Female behaviour seen as deviation
- Example: Kohlberg's moral development

**Alpha Bias:**
- Exaggerates gender differences
- Biological explanations

**Beta Bias:**
- Minimises/ignores differences
- Research on males generalised to females
`;

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const WORKED_EXAMPLES = `
## Worked Examples for Edexcel A-Level Psychology

### 2-Mark Definition Question

**Question:** Define what is meant by 'conformity'. [2 marks]

**Model Answer:**
Conformity is a type of social influence where an individual changes their behaviour or beliefs (1 mark) to fit in with a group, either due to real or perceived group pressure (1 mark).

### 4-Mark Describe Question

**Question:** Describe the procedure of Milgram's (1963) study of obedience. [4 marks]

**Model Answer:**
Milgram recruited 40 male participants through newspaper advertisements to take part in what they believed was a study of memory and learning (1 mark). Participants were assigned the role of 'teacher' through a rigged draw, while a confederate always became the 'learner' (1 mark). The teacher had to administer what they believed were electric shocks to the learner each time he made a mistake on a word-pair task, increasing the voltage from 15V to 450V in 15V increments (1 mark). When participants hesitated, the experimenter used standardised verbal prods such as "The experiment requires you to continue" to encourage them to continue (1 mark).

### 8-Mark Evaluate Question

**Question:** Evaluate social learning theory as an explanation for aggression. [8 marks]

**Model Answer:**

**Level 3 (7-8 marks):**

Social learning theory (SLT) provides a comprehensive explanation for aggression that accounts for the role of cognitive factors and vicarious learning. One strength is the substantial research support, particularly from Bandura's Bobo doll studies (1961, 1963). These demonstrated that children who observed an aggressive model were significantly more likely to imitate the aggressive behaviour, supporting the idea that aggression can be learned through observation. Furthermore, the 1965 study showed that children learned equally regardless of whether the model was rewarded or punished, but their performance differed, supporting the key SLT distinction between acquisition and performance.

However, the Bobo doll studies have been criticised for lacking ecological validity. The Bobo doll is designed to be hit and bounces back, which may have cued aggressive behaviour that would not generalise to real-world aggression towards people. Additionally, the studies used short-term observation of children in laboratory conditions, which may not reflect long-term patterns of aggressive behaviour in naturalistic settings.

Another limitation is that SLT cannot fully explain individual differences in aggression. Not all children who observe aggressive models become aggressive themselves. This suggests that other factors, such as biological predispositions (e.g., testosterone levels, MAOA gene variants) also play an important role. The interactionist approach suggests that SLT needs to be considered alongside biological explanations for a complete understanding.

Nevertheless, SLT has useful practical applications. Understanding that aggression can be learned through modelling has informed policies about media violence and parental behaviour. This real-world application demonstrates the value of the theory. Overall, while SLT provides valuable insights into the social transmission of aggression, it offers an incomplete explanation that needs to be integrated with biological perspectives.

### 12-Mark Discuss Question

**Question:** Discuss biological explanations of schizophrenia. [12 marks]

**Model Answer:**

**Level 4 (10-12 marks):**

Biological explanations of schizophrenia focus on genetics, neurochemistry, and brain structure as underlying causes. The dopamine hypothesis is the most influential neurochemical explanation, proposing that schizophrenia results from excess dopamine activity in certain brain pathways.

The original dopamine hypothesis suggested that overactivity of dopamine in the mesolimbic pathway leads to positive symptoms such as hallucinations and delusions. This is supported by evidence that drugs increasing dopamine (e.g., amphetamines) can produce psychotic symptoms in healthy individuals, while antipsychotics that block D2 dopamine receptors reduce positive symptoms. PET scan studies have also shown increased D2 receptor density in schizophrenia patients (Seeman et al., 1993).

However, the original hypothesis has been revised because antipsychotics that block dopamine are not effective for negative symptoms (e.g., avolition, affective flattening). The revised hypothesis proposes that schizophrenia involves dopamine dysregulation: overactivity in mesolimbic pathways (positive symptoms) and underactivity in mesocortical pathways (negative symptoms). This offers a more nuanced explanation but is harder to test directly.

Genetic explanations are also supported by substantial evidence. Gottesman and Shields (1972) found concordance rates of 42% for MZ twins compared to 9% for DZ twins, and adoption studies show that biological relatives of schizophrenia patients have elevated risk even when raised apart. However, concordance rates are not 100%, indicating that genes alone are not deterministic. The diathesis-stress model proposes that genetic vulnerability requires environmental triggers to develop into schizophrenia.

Brain structure abnormalities have also been identified. Research consistently shows enlarged ventricles and reduced prefrontal grey matter in schizophrenia patients. Raine et al. (1997) found abnormal activity in prefrontal cortex and limbic structures. However, these studies are correlational and cannot establish whether brain abnormalities cause schizophrenia or result from it (or from medication).

A significant limitation of biological explanations is their reductionist nature. They tend to ignore psychological and social factors such as expressed emotion in families, childhood trauma, and social deprivation, all of which are associated with schizophrenia. Furthermore, biological explanations may have negative implications for treatment, potentially leading to over-reliance on drug therapy when psychological interventions (CBT, family therapy) are also effective.

In conclusion, biological explanations provide valuable insights into the neurological basis of schizophrenia, but an interactionist approach that considers how biological vulnerability interacts with psychological and social factors offers a more complete explanation.

### 20-Mark Extended Response

**Question:** Assess the extent to which psychology can be considered a science. [20 marks]

**Model Answer Outline:**

**Introduction:**
- Define science: empirical, objective, replicable, falsifiable
- Psychology sits between natural sciences and humanities

**Arguments FOR:**

1. **Experimental method:**
   - Laboratory experiments control extraneous variables
   - Independent variable manipulation allows causal conclusions
   - Example: Baddeley (1966) - controlled encoding study

2. **Objectivity and measurement:**
   - Standardised procedures
   - Operationalised variables
   - Statistical analysis
   - Example: Milgram - quantified obedience percentages

3. **Replication:**
   - Studies can be repeated
   - Peer review process
   - Meta-analyses combine findings

4. **Theory development:**
   - Hypotheses tested empirically
   - Theories modified based on evidence
   - Example: Revision of dopamine hypothesis

**Arguments AGAINST:**

1. **Subject matter complexity:**
   - Human behaviour influenced by many factors
   - Difficult to isolate variables
   - Uniqueness of individuals

2. **Lack of objectivity:**
   - Researcher bias in interpretation
   - Social desirability in self-reports
   - Demand characteristics

3. **Ecological validity:**
   - Laboratory findings may not apply to real life
   - Artificial settings change behaviour
   - Example: Milgram's Yale setting

4. **Kuhn's paradigm argument:**
   - Psychology lacks single dominant paradigm
   - Multiple competing approaches
   - Pre-paradigmatic discipline

5. **Ethical constraints:**
   - Cannot manipulate certain variables
   - Must protect participants
   - Limits experimental possibilities

**Different approaches:**
- Biological psychology: Most scientific (brain scans, genetics)
- Cognitive psychology: Uses experimental method
- Humanistic psychology: Deliberately non-scientific (idiographic)
- Psychodynamic: Concepts not falsifiable

**Conclusion:**
- Psychology has scientific elements but also non-scientific aspects
- Degree of scientificness varies by approach
- Perhaps a unique discipline between natural and social sciences
- Value of multiple methods and perspectives
`;

// ============================================================================
// EVALUATION FRAMEWORKS
// ============================================================================

const EVALUATION_FRAMEWORKS = `
## Evaluation Frameworks for Edexcel A-Level Psychology

### PEEL Structure for Evaluation Points

| Element | Description | Example |
|---------|-------------|---------|
| **P**oint | State evaluation point clearly | "One limitation is..." |
| **E**vidence | Provide supporting research/example | "Smith (2010) found..." |
| **E**xplanation | Explain significance | "This suggests that..." |
| **L**ink | Connect back to main argument | "Therefore, this weakens..." |

### Common Evaluation Themes

**Research Support:**
- Is there empirical evidence?
- Are findings replicated?
- Sample sizes and characteristics
- Methodology quality

**Methodological Issues:**
- Internal validity: Did IV cause DV?
- External validity: Can findings generalise?
- Ecological validity: Does it apply to real life?
- Reliability: Consistent results?

**Practical Applications:**
- Can findings be applied?
- Real-world benefits
- Treatment effectiveness
- Policy implications

**Ethical Considerations:**
- Protection from harm
- Informed consent
- Deception justified?
- Cost-benefit analysis

**Nature-Nurture:**
- Biological vs environmental
- Gene-environment interaction
- Reductionist or holistic?

**Cultural/Gender Bias:**
- Western samples dominant?
- Gender differences considered?
- Ethnocentric assumptions?

**Determinism-Free Will:**
- Does explanation suggest we have choice?
- Implications for responsibility

### Essay Structure Templates

**12-16 Mark Essays:**

1. **Introduction** (2-3 sentences)
   - Define key terms
   - Outline what will be discussed

2. **AO1 Paragraph 1** (Description)
   - Main theory/explanation
   - Key features/processes

3. **AO1 Paragraph 2** (if needed)
   - Additional description
   - Supporting details

4. **AO3 Paragraph 1** (Evaluation - Strength)
   - Research support
   - Use PEEL structure

5. **AO3 Paragraph 2** (Evaluation - Limitation)
   - Methodological issue OR alternative explanation
   - Use PEEL structure

6. **AO3 Paragraph 3** (if time)
   - Additional evaluation
   - Practical applications OR wider implications

7. **Conclusion** (2-3 sentences)
   - Balanced judgement
   - Overall assessment

**20-Mark Essays:**

Follow similar structure but:
- More detailed AO1 (multiple aspects)
- 4-5 evaluation points
- Consider issues and debates
- Stronger, more developed conclusion
- Use psychological terminology throughout

### Trigger Phrases for Evaluation

**Introducing Strengths:**
- "One strength of this explanation is..."
- "Supporting evidence comes from..."
- "This theory has practical applications..."
- "A key strength is its ability to..."

**Introducing Limitations:**
- "However, a limitation is..."
- "This can be criticised because..."
- "One weakness is the lack of..."
- "An alternative explanation is..."

**Making Judgements:**
- "Overall, this suggests that..."
- "On balance, the evidence indicates..."
- "This significantly undermines/supports..."
- "Therefore, we can conclude..."

### Mark-Specific Expectations

**8 Marks:**
- 2-3 evaluation points
- Brief description of theory (if required)
- Some development of points
- Beginning of judgement

**12 Marks:**
- 3-4 evaluation points
- More detailed description
- Well-developed PEEL paragraphs
- Clear judgement with justification

**16 Marks:**
- 4-5 evaluation points
- Comprehensive description
- Sophisticated evaluation
- Balanced discussion
- Well-reasoned conclusion

**20 Marks:**
- Thorough and accurate knowledge
- 5+ developed evaluation points
- Integration of issues and debates
- Sustained logical argument
- Confident use of terminology
- Balanced, justified conclusion
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name, subtopic);
  const relevantStudies = getRelevantStudies(topic.name, subtopic);

  return `You are an expert Edexcel A-Level Psychology examiner creating exam-style questions.

## EDEXCEL PSYCHOLOGY STYLE
**Edexcel's Advanced Clinical Application Approach:** Specialized, analytical questions focusing on clinical psychology and applied therapeutic contexts.
- **Advanced clinical psychology focus** - comprehensive coverage of mental health, psychological disorders, and therapeutic interventions
- **Applied analytical emphasis** - questions require sophisticated analysis of psychological data and clinical applications
- **Specialized topic options** - distinctive focus on clinical and criminological psychology applications
- **Health psychology integration** - unique opportunity to study health psychology alongside traditional psychological approaches
- **Data-driven assessment** - emphasis on interpreting psychological research data and clinical findings
- **Therapeutic application focus** - questions emphasize real-world application of psychological theory to clinical practice

${EDEXCEL_ALEVEL_PSYCH_COGNITIVE_CHALLENGE}

${EDEXCEL_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_PSYCH_QUESTION_TEMPLATES}

${EDEXCEL_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_ALEVEL_PSYCH_KEY_STUDIES}

${topicKnowledge}

${relevantStudies}

${RESEARCH_METHODS_KNOWLEDGE}

${ISSUES_AND_DEBATES_KNOWLEDGE}

${EVALUATION_FRAMEWORKS}

${WORKED_EXAMPLES}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Psychology specification.

**When testing biological psychology content:**
- Focus on PSYCHOLOGICAL explanations and applications of biological concepts
- Neurotransmitters: Test their role in behavior/mental processes, NOT chemical structure
- Brain regions: Test localisation of function in psychological context, NOT detailed neuroanatomy
- Genetics: Test nature vs nurture debate, NOT molecular genetics or DNA structure

**DO NOT include pure Biology A-Level content such as:**
- Detailed neuron structure beyond basic Psychology specification
- Biochemical pathways or detailed receptor mechanisms
- Molecular genetics, gene expression, or protein synthesis
- Detailed endocrine system beyond stress response basics

**DO NOT include pure Chemistry content such as:**
- Chemical structures of neurotransmitters
- Drug mechanisms at molecular/receptor level beyond basic understanding

**For the topic "${topic.name}", test ONLY the psychology content in the specification.**

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds
2. **Authentic Edexcel Style**: Match real Edexcel paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Define, describe, identify (2-6 marks)
   - Medium: Assess, evaluate, explain (8-12 marks)
   - Hard: Discuss, extended essay with issues and debates (16-20 marks)
5. **Accurate Content**: Use correct psychological terminology and theories
6. **Include Context**: Where appropriate, include a scenario or stimulus material

## Mark Scheme Requirements
For the solution and mark scheme:
- Include indicative content showing what examiners expect
- Provide clear marking points or level descriptors
- Show how marks are allocated across AO1, AO2, AO3
- Include example answers where helpful

## Response Format
Return JSON with:
- "content": Question text (including any stimulus material)
- "marks": Total marks
- "solution": Comprehensive model answer demonstrating A* standard
- "markScheme": Array of marking points or level descriptors with mark allocation
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getEdexcelALevelPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = getTopicSpecificGuidance(topic.name, subtopic);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1).

**Question Types:**
- "Define [term]" [2 marks]
- "Describe [study/theory/procedure]" [4 marks]
- "Explain one [strength/limitation]" [4 marks]
- "Identify two [features/characteristics]" [2 marks]
- "Outline [concept/process]" [4 marks]

**Mark Scheme Approach:**
- 2-mark questions: 1 mark per point with elaboration
- 4-mark questions: Up to 4 marks for detailed, accurate description
- Credit use of psychological terminology
- Accept any reasonable alternative wording

${topicGuidance.easy}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring assessment, evaluation, or application (AO2/AO3).

**Question Types:**
- "Assess [theory/explanation/contribution]" [8 marks]
- "Evaluate [treatment/approach/study]" [8-12 marks]
- "Compare [approach A] with [approach B]" [8 marks]
- "Using your knowledge of [topic], explain..." [6 marks]
- "Explain how [concept] applies to [scenario]" [6 marks]

**8-Mark Levels of Response:**
| Level | Marks | Descriptor |
|-------|-------|------------|
| 3 | 7-8 | Well-developed assessment with clear judgement, logical chains of reasoning |
| 2 | 4-6 | Some assessment, limited development, may be one-sided |
| 1 | 1-3 | Basic points only, limited assessment, mainly descriptive |

**12-Mark Levels:**
| Level | Marks | Descriptor |
|-------|-------|------------|
| 4 | 10-12 | Thorough knowledge, well-developed evaluation, clear judgement |
| 3 | 7-9 | Good knowledge, sound evaluation |
| 2 | 4-6 | Basic knowledge, some evaluation |
| 1 | 1-3 | Limited knowledge, minimal evaluation |

${topicGuidance.medium}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 16-20 mark extended response question requiring integration of issues and debates.

**Question Types:**
- "Discuss [debate/issue]" [16-20 marks]
- "Assess the extent to which..." [20 marks]
- "To what extent..." [20 marks]
- "Evaluate the view that..." [16 marks]
- "Compare and contrast..." [16 marks]

**20-Mark Levels of Response:**
| Level | Marks | Descriptor |
|-------|-------|------------|
| 4 | 16-20 | Accurate, thorough knowledge; well-developed balanced argument; logical chains throughout; thorough awareness of competing arguments; sustained evidence application; confident specialist vocabulary |
| 3 | 11-15 | Mostly accurate knowledge; coherent reasoning; awareness of competing arguments but may be imbalanced; evidence applied but not sustained; mostly accurate vocabulary |
| 2 | 6-10 | Some knowledge; limited development; superficial evaluation; some specialist vocabulary |
| 1 | 1-5 | Isolated elements; generic conclusion; limited attempt to address question |

**16-Mark Levels:**
| Level | Marks | Descriptor |
|-------|-------|------------|
| 4 | 13-16 | Thorough, accurate knowledge; well-developed evaluation with clear judgement; effective terminology |
| 3 | 9-12 | Good knowledge with minor gaps; sound evaluation; good terminology |
| 2 | 5-8 | Basic knowledge; some evaluation attempts; limited terminology |
| 1 | 1-4 | Limited knowledge; minimal evaluation; little specialist vocabulary |

**Integration Requirements:**
- Must integrate relevant issues and debates (nature-nurture, reductionism, determinism, etc.)
- Should consider multiple perspectives/approaches
- Balance AO1 (description) with AO3 (evaluation)
- Use psychological terminology accurately and confidently

${topicGuidance.hard}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel A-Level Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

**Quality Criteria:**
1. Authentic Edexcel language and format
2. Appropriate cognitive demand for mark value
3. Clear, unambiguous wording
4. Relevant to current specification (9PS0)
5. Includes appropriate command word (describe, explain, assess, evaluate, discuss)

Return valid JSON:
{
  "content": "question text with any stimulus material",
  "marks": number,
  "solution": "comprehensive model answer at A* standard",
  "markScheme": ["marking point/level descriptor 1", "marking point/level descriptor 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 6 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 16, max: 20 };
  }
}

function getTopicSpecificKnowledge(topicName: string, subtopic: string): string {
  const topicKnowledgeMap: Record<string, string> = {
    'Social Psychology': SOCIAL_PSYCHOLOGY_KNOWLEDGE,
    'Cognitive Psychology': COGNITIVE_PSYCHOLOGY_KNOWLEDGE,
    'Biological Psychology': BIOLOGICAL_PSYCHOLOGY_KNOWLEDGE,
    'Learning Theories': LEARNING_THEORIES_KNOWLEDGE,
    'Clinical Psychology': CLINICAL_PSYCHOLOGY_KNOWLEDGE,
    'Criminological Psychology': CRIMINOLOGICAL_PSYCHOLOGY_KNOWLEDGE,
    'Child Psychology': CHILD_PSYCHOLOGY_KNOWLEDGE,
    'Health Psychology': HEALTH_PSYCHOLOGY_KNOWLEDGE,
  };

  return topicKnowledgeMap[topicName] || '';
}

function getRelevantStudies(topicName: string, subtopic: string): string {
  const studyMap: Record<string, string[]> = {
    'Social Psychology': [MILGRAM_1963_STUDY, SHERIF_1954_STUDY],
    'Cognitive Psychology': [BADDELEY_1966_STUDY],
    'Biological Psychology': [RAINE_1997_STUDY],
    'Learning Theories': [WATSON_RAYNER_1920_STUDY],
    'Clinical Psychology': [ROSENHAN_1973_STUDY, GOTTESMAN_SHIELDS_1972_STUDY],
  };

  const studies = studyMap[topicName] || [];
  return studies.join('\n\n');
}

function getTopicSpecificGuidance(topicName: string, subtopic: string): { easy: string; medium: string; hard: string } {
  const guidanceMap: Record<string, { easy: string; medium: string; hard: string }> = {
    'Social Psychology': {
      easy: `**Topic-specific guidance:**
- For obedience: Focus on Milgram's procedure, findings, or variations
- For conformity: Include Asch, types of conformity (compliance, identification, internalisation)
- For prejudice: Cover realistic conflict theory, social identity theory, or reduction strategies
- Key terms: Agentic state, autonomous state, normative/informational social influence`,
      medium: `**Topic-specific guidance:**
- Assess contributions of key studies (Milgram, Sherif, Asch)
- Evaluate explanations (agency theory, social identity theory)
- Compare different approaches to understanding social behaviour
- Include methodological evaluation and ethical considerations
- Consider cultural variations and real-world applications`,
      hard: `**Topic-specific guidance:**
- Integrate nature-nurture debate (biological vs social explanations of behaviour)
- Consider reductionism vs holism in social psychology
- Discuss free will vs determinism (can we resist social influence?)
- Evaluate whether social psychology is scientific
- Consider ethical implications of social psychology research
- Draw on multiple studies and theories for balanced argument`
    },
    'Cognitive Psychology': {
      easy: `**Topic-specific guidance:**
- For memory models: Describe MSM or WMM components and processes
- For forgetting: Include interference, retrieval failure, trace decay
- For EWT: Cover factors affecting accuracy, cognitive interview
- Key terms: Encoding, storage, retrieval, central executive, phonological loop`,
      medium: `**Topic-specific guidance:**
- Evaluate memory models (MSM vs WMM)
- Assess research methodology (lab vs field experiments)
- Discuss applications to education or legal system (EWT)
- Consider ecological validity of memory research
- Include relevant case studies (HM, KF)`,
      hard: `**Topic-specific guidance:**
- Discuss reductionism in cognitive psychology (computer analogy)
- Consider the scientific status of cognitive psychology
- Evaluate determinism (are memories determined by biological/cognitive processes?)
- Discuss practical applications and ethical implications
- Compare cognitive approach with other approaches (biological, behaviourist)`
    },
    'Biological Psychology': {
      easy: `**Topic-specific guidance:**
- For aggression: Focus on brain structures (limbic system, prefrontal cortex), hormones (testosterone), or genetics (MAOA gene)
- For brain localisation: Include specific areas and their functions
- For biological rhythms: Cover circadian rhythms, SCN, zeitgebers
- Key terms: Neurotransmitter, hormone, localisation of function`,
      medium: `**Topic-specific guidance:**
- Evaluate biological explanations (strengths and limitations)
- Assess research methods (brain scanning, twin studies)
- Discuss correlation vs causation issues
- Consider interaction with environmental factors
- Include relevant studies (Raine, Gottesman & Shields)`,
      hard: `**Topic-specific guidance:**
- Central focus on nature-nurture debate
- Discuss biological determinism and its implications
- Consider reductionism (explaining complex behaviour through biology)
- Evaluate the scientific status of biological psychology
- Discuss ethical implications of biological explanations
- Consider gene-environment interactions (diathesis-stress)`
    },
    'Learning Theories': {
      easy: `**Topic-specific guidance:**
- For classical conditioning: Include UCS, UCR, NS, CS, CR
- For operant conditioning: Cover reinforcement types, schedules
- For SLT: Include attention, retention, reproduction, motivation
- Key terms: Acquisition, extinction, generalisation, vicarious reinforcement`,
      medium: `**Topic-specific guidance:**
- Compare different learning theories
- Evaluate applications (phobia treatment, education)
- Assess research support (Pavlov, Skinner, Bandura studies)
- Consider ethical implications of conditioning techniques
- Discuss real-world applications and limitations`,
      hard: `**Topic-specific guidance:**
- Discuss environmental determinism vs free will
- Consider reductionism in behaviourist approach
- Evaluate scientific status (objective, measurable)
- Compare behaviourist with cognitive approach
- Discuss ethical implications of behaviour modification
- Consider role of cognitive factors (SLT as bridge)`
    },
    'Clinical Psychology': {
      easy: `**Topic-specific guidance:**
- For schizophrenia: Include symptoms (positive/negative), explanations, treatments
- For depression: Cover biological and cognitive explanations
- For treatments: Describe drug therapy, CBT, or other interventions
- Key terms: Dopamine hypothesis, concordance rate, cognitive distortion`,
      medium: `**Topic-specific guidance:**
- Evaluate biological vs psychological explanations
- Assess effectiveness of treatments
- Compare different treatment approaches
- Discuss issues of diagnosis (reliability, validity)
- Include relevant research (Rosenhan, Gottesman & Shields)`,
      hard: `**Topic-specific guidance:**
- Discuss nature-nurture in mental disorder
- Consider biological reductionism vs holistic approach
- Evaluate classification systems and labelling effects
- Discuss ethical issues in diagnosis and treatment
- Consider cultural bias in definitions of abnormality
- Evaluate the medical model vs psychological approaches`
    },
  };

  return guidanceMap[topicName] || {
    easy: '',
    medium: '',
    hard: ''
  };
}

// ============================================================================
// ADDITIONAL HELPER FUNCTIONS
// ============================================================================

export function getResearchMethodsPrompt(difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate a research methods question for Edexcel A-Level Psychology.

${RESEARCH_METHODS_KNOWLEDGE}

**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

**Research Methods Question Types:**

For EASY (2-6 marks):
- Define terms (Type I error, ecological validity, operationalisation)
- Identify features of experimental designs
- State advantages/disadvantages of methods
- Calculate measures (mean, mode, median, percentages)

For MEDIUM (8-12 marks):
- Design questions (design a study to investigate...)
- Evaluate methodology of given study
- Explain choice of sampling method
- Discuss reliability and validity issues

For HARD (16-20 marks):
- Discuss ethical issues in psychological research
- Evaluate psychology as a science
- Discuss issues of reliability and validity across psychology

Return valid JSON:
{
  "content": "question text with any stimulus material",
  "marks": number,
  "solution": "model answer",
  "markScheme": ["marking points"]
}`;
}

export function getIssuesAndDebatesPrompt(difficulty: Difficulty, specificDebate?: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an issues and debates question for Edexcel A-Level Psychology.

${ISSUES_AND_DEBATES_KNOWLEDGE}

**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}
${specificDebate ? `**Focus**: ${specificDebate}` : ''}

**Issues and Debates Question Types:**

For EASY (2-6 marks):
- Define key terms (reductionism, determinism, idiographic)
- Identify examples of debates in psychology
- Explain one side of a debate

For MEDIUM (8-12 marks):
- Evaluate a specific approach in terms of the debates
- Assess the extent to which a topic shows nature/nurture
- Compare approaches on a specific debate

For HARD (16-20 marks):
- "Assess the extent to which psychology can be considered a science" [20 marks]
- "Discuss the nature-nurture debate in psychology" [16-20 marks]
- "To what extent is human behaviour determined by biological factors?" [20 marks]
- "Evaluate the view that psychology should adopt a more holistic approach" [16 marks]

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer demonstrating integration of multiple topics/approaches",
  "markScheme": ["level descriptors with mark allocations"]
}`;
}

export function getClassicStudyPrompt(studyName: string, difficulty: Difficulty): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const studyDetails: Record<string, string> = {
    'Milgram': MILGRAM_1963_STUDY,
    'Sherif': SHERIF_1954_STUDY,
    'Raine': RAINE_1997_STUDY,
    'Baddeley': BADDELEY_1966_STUDY,
    'Gottesman and Shields': GOTTESMAN_SHIELDS_1972_STUDY,
    'Watson and Rayner': WATSON_RAYNER_1920_STUDY,
    'Rosenhan': ROSENHAN_1973_STUDY,
  };

  return `Generate a question about the classic study: ${studyName}

${studyDetails[studyName] || ''}

**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

**Classic Study Question Types:**

For EASY (2-6 marks):
- "Describe the procedure of [study]" [4 marks]
- "Outline the findings of [study]" [4 marks]
- "Identify two ethical issues with [study]" [2 marks]

For MEDIUM (8-12 marks):
- "Assess the contribution of [study] to psychology" [8 marks]
- "Evaluate the methodology of [study]" [8 marks]
- "Compare [study] with [contemporary study]" [8 marks]

For HARD (16-20 marks):
- Extended evaluation integrating issues and debates
- Discussion of study's contribution to our understanding
- Comparison with other approaches/studies

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "detailed model answer with study-specific content",
  "markScheme": ["marking points referencing specific study details"]
}`;
}

export function getApplicationScenarioPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `Generate an application/scenario-based question for Edexcel A-Level Psychology.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

**Application Question Format:**
These questions present a scenario and ask students to apply psychological knowledge.

**Example formats:**
- "Read the scenario below. Using your knowledge of [concept], explain [aspect of scenario]." [4-6 marks]
- "Tom shows signs of [behaviour]. Using your knowledge of [topic], explain why Tom might behave this way." [6 marks]
- "A psychologist wants to investigate [phenomenon]. Design a study that could test this, explaining your choices." [8-12 marks]

**Requirements:**
1. Create a realistic, relevant scenario (100-150 words)
2. Scenario must allow application of the specified subtopic
3. Question should require explicit application, not just description
4. Mark scheme should credit context-specific application

**Scenario Guidelines:**
- Use appropriate names and situations
- Include relevant details that can be linked to psychological concepts
- Avoid stereotypes or offensive content
- Make the application requirements clear

Return valid JSON:
{
  "content": "scenario text followed by question",
  "marks": number,
  "solution": "model answer showing explicit application to scenario",
  "markScheme": ["marking points showing required application"]
}`;
}
