// AQA A-Level Psychology (7182) Question Generation Prompts
// Based on analysis of official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/psychology/a-level/psychology-7182

import { Difficulty, Topic } from '@/types';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';

// ============================================================================
// AQA A-LEVEL PSYCHOLOGY SPECIFICATION DETAILS (7182)
// ============================================================================

const AQA_ALEVEL_PSYCH_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, basic explanation | Identify, name, outline concepts; straightforward knowledge retrieval |
| **Medium** | Application, explanation, basic evaluation | Apply knowledge to scenarios; explain processes; outline strengths/limitations |
| **Hard** | Analysis, evaluation, synthesis | Discuss theories critically; evaluate research comprehensively; weigh competing explanations |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires balanced AO1 (knowledge) AND AO3 (evaluation) throughout
- Demands critical analysis of research methodology, samples, and ecological validity
- Must weigh competing theoretical explanations and reach justified conclusions
- Requires application of Issues and Debates (e.g., determinism, reductionism, ethics)
- No single "correct" conclusion - student must construct argument using evidence

**Easy (2-6 marks):** Knowledge recall - identify, outline, describe with brief elaboration
**Medium (8 marks):** Application and evaluation - explain in context with evaluation points
**Hard (16 marks):** Critical discussion - thorough AO1 + effective AO3 throughout
`;

const AQA_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of scientific ideas, processes, techniques and procedures | 30-33% |
| **AO2** | Apply knowledge and understanding of scientific ideas, processes, techniques and procedures | 30-33% |
| **AO3** | Analyse, interpret and evaluate scientific information, ideas and evidence to make judgements and reach conclusions | 35-40% |

### Paper Structure
| Paper | Title | Content | Marks | Time |
|-------|-------|---------|-------|------|
| **Paper 1** | Introductory Topics in Psychology | Social Influence, Memory, Attachment, Psychopathology | 96 | 2 hours |
| **Paper 2** | Psychology in Context | Approaches, Biopsychology, Research Methods | 96 | 2 hours |
| **Paper 3** | Issues and Options in Psychology | Issues and Debates + 3 Option Topics | 96 | 2 hours |

### Question Types
- Multiple choice questions (1 mark)
- Short answer questions (2-6 marks)
- Application questions (4-8 marks)
- Extended writing/essay questions (8, 12, or 16 marks)
- Research methods questions integrated throughout

### Key Command Words
- **Identify/Name/State**: Brief factual response (AO1)
- **Outline**: Set out main features (AO1)
- **Describe**: Set out characteristics in detail (AO1)
- **Explain**: Make something clear with reasons (AO1/AO2)
- **Apply**: Use knowledge in a specific context (AO2)
- **Evaluate**: Make informed judgement about value (AO3)
- **Discuss**: Present key points with evaluation (AO1/AO3)
`;

const AQA_ALEVEL_PSYCH_QUESTION_TEMPLATES = `
## Authentic AQA A-Level Psychology Question Formats

### Type 1: Multiple Choice (1 mark)
Format: "Which of the following..." with 4 options (A-D)
**Examples:**
- "Which of the following is NOT a feature of working memory?"
- "Which type of conformity involves changing both public behaviour and private beliefs?"

### Type 2: Short Answer - Identify/Name (2 marks)
Format: "Identify/Name two [concepts]"
**Examples:**
- "Identify two features of the phonological loop" [2 marks]
- "Name two types of long-term memory" [2 marks]
Marking: 1 mark per correct identification

### Type 3: Outline Questions (2-4 marks)
Format: "Outline [concept/theory/study]"
**Examples:**
- "Outline what is meant by the term 'agentic state'" [2 marks]
- "Outline one limitation of laboratory experiments" [2 marks]
- "Outline Bowlby's maternal deprivation hypothesis" [4 marks]
Marking:
- 2 marks: Identification + brief elaboration
- 4 marks: Clear outline with some detail

### Type 4: Explain Questions (4-6 marks)
Format: "Explain [concept/process/finding]"
**Examples:**
- "Explain how minority influence can lead to social change" [6 marks]
- "Explain one limitation of the multi-store model of memory" [4 marks]
Marking: Point made + Explanation + Elaboration + Link

### Type 5: Application Questions (4-6 marks)
Format: "Using your knowledge of [topic], explain [scenario]"
**Examples:**
- "Using your knowledge of attachment, explain why Jake might behave this way" [4 marks]
- "Referring to the features of the working memory model, explain Sarah's difficulty" [6 marks]
Marking: Knowledge demonstrated + Clear application to scenario

### Type 6: Research Methods Questions (4-8 marks)
Format: Scenario-based questions on methodology
**Examples:**
- "Explain one strength and one limitation of using this experimental design" [4 marks]
- "Design a study to investigate..." [8 marks]
- "Calculate the mean and explain what it shows" [4 marks]

### Type 7: Describe and Evaluate (12 marks)
Format: "Describe and evaluate [theory/explanation/study]"
**Examples:**
- "Describe and evaluate the working memory model" [12 marks]
- "Describe and evaluate social psychological explanations of obedience" [12 marks]
Marking (Levels):
- Level 4 (10-12): Knowledge accurate/well-detailed; Discussion thorough/effective
- Level 3 (7-9): Knowledge evident with some inaccuracies; Discussion mostly effective
- Level 2 (4-6): Limited knowledge; Discussion only partly effective
- Level 1 (1-3): Very limited knowledge; Evaluation absent or ineffective

### Type 8: Discuss Questions (16 marks)
Format: "Discuss [theory/explanation/research]"
**Examples:**
- "Discuss the influence of early attachment on childhood and adult relationships" [16 marks]
- "Discuss research into the effects of misleading information on eyewitness testimony" [16 marks]
Marking: AO1 (6 marks) + AO3 (10 marks)
`;

const AQA_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level Psychology Mark Scheme Conventions

### 16-Mark Essay Levels of Response (AO1: 6 marks, AO3: 10 marks)

**Level 4 (13-16 marks):**
- Knowledge is accurate and generally well detailed
- Discussion/evaluation is thorough and effective
- The answer is clear, coherent and focused
- Specialist terminology is used effectively
- Minor detail and/or expansion sometimes lacking

**Level 3 (9-12 marks):**
- Knowledge is evident but occasional inaccuracies/omissions
- Discussion is mostly effective
- The answer is mostly clear and organised but occasionally lacks focus
- Specialist terminology is used appropriately

**Level 2 (5-8 marks):**
- Some knowledge is present
- Focus is mainly on description
- Any discussion/evaluation is only partly effective
- The answer lacks clarity, accuracy and organisation
- Specialist terminology is used inappropriately or is absent

**Level 1 (1-4 marks):**
- Knowledge is limited
- Little or no relevant material
- Evaluation is absent or ineffective
- Specialist terminology is absent or inappropriately used

**0 marks:** No relevant content

### 12-Mark Levels (Describe and Evaluate)

**Level 4 (10-12 marks):**
- Knowledge is accurate and generally well detailed
- Discussion is thorough and effective
- Clear, coherent and focused

**Level 3 (7-9 marks):**
- Knowledge evident with occasional inaccuracies
- Discussion mostly effective
- Mostly clear and organised

**Level 2 (4-6 marks):**
- Limited knowledge present
- Focus mainly on description
- Discussion only partly effective

**Level 1 (1-3 marks):**
- Very limited knowledge
- Significant inaccuracies
- Evaluation absent or ineffective

### Application of AO2 (When scenario given)
When a question includes a stem/scenario, AO2 marks are awarded for:
- Explicit reference to the scenario
- Using information from the stem to illustrate points
- Explaining how psychological concepts relate to the specific situation
- Not just describing theory but showing how it applies

### Key Marking Principles
- Credit accurate psychological terminology
- Credit relevant research studies as either AO1 (procedures/findings) or AO3 (what they show)
- Evaluation points must be explained, not just identified
- For top marks, evaluation should be well-developed with clear implications
`;

// ============================================================================
// GRAVES EVALUATION FRAMEWORK
// ============================================================================

const GRAVES_EVALUATION_FRAMEWORK = `
## GRAVES Evaluation Framework for AQA A-Level Psychology

The GRAVES acronym helps structure evaluation points:

| Letter | Meaning | Application |
|--------|---------|-------------|
| **G** | Generalisability | Can findings be applied to other populations? Sample issues, cultural/gender bias |
| **R** | Reliability | Can the study be replicated with consistent results? Standardised procedures |
| **A** | Application | What are the real-world uses? Practical implications |
| **V** | Validity | Does it measure what it claims? Internal/external/ecological validity |
| **E** | Ethics | Are there ethical concerns? Protection from harm, consent, deception |
| **S** | Supporting/Contradicting Studies | What other research says? Empirical support or challenges |

### Using GRAVES in Essays

**Example Evaluation Point (PEEL structure with GRAVES):**

**Point**: One limitation of Milgram's research relates to generalisability (G).

**Evidence**: The sample consisted of 40 American males who volunteered for a study, making them self-selected and potentially more obedient.

**Explain**: This androcentric sample may not represent how women or people from collectivist cultures would respond to authority.

**Link**: Therefore, we cannot generalise these findings to all populations, limiting the external validity of conclusions about obedience.
`;

// ============================================================================
// PAPER 1: SOCIAL INFLUENCE
// ============================================================================

const SOCIAL_INFLUENCE_KNOWLEDGE = `
## Social Influence - AQA A-Level Psychology (Paper 1)

### Types of Conformity (Kelman, 1958)

| Type | Definition | Public Change | Private Change | Example |
|------|------------|---------------|----------------|---------|
| **Compliance** | Going along with others to gain approval/avoid disapproval | Yes | No | Laughing at a joke you don't find funny |
| **Identification** | Conforming to group we value to be accepted as member | Yes | Maybe | Supporting team of new friendship group |
| **Internalisation** | Genuinely accepting group norms as own beliefs | Yes | Yes | Becoming vegetarian after joining animal rights group |

### Explanations for Conformity

**Informational Social Influence (ISI):**
- Desire to be correct
- Look to others for information in ambiguous situations
- More likely when: Situation ambiguous, others are experts, we lack confidence
- Results in internalisation

**Normative Social Influence (NSI):**
- Desire to be liked and accepted
- Conform to fit in with the group
- More likely when: Group is important to us, we are in presence of group
- Results in compliance

### Asch (1951) - Conformity Study

**Aim:** To investigate the extent to which social pressure from a majority group could affect conformity

**Sample:** 123 male American undergraduate students

**Procedure:**
1. Line judgement task - match standard line to one of three comparison lines
2. Naive participant in room with 7 confederates
3. Confederates gave unanimous wrong answer on 12 of 18 critical trials
4. Participant always answered second to last

**Findings:**
- 37% of trials resulted in conformity to wrong answer
- 75% of participants conformed at least once
- 25% never conformed
- In control group (no confederates), error rate was less than 1%

**Variations:**
| Variable | Change | Conformity Rate |
|----------|--------|-----------------|
| Group size | 2 confederates | 14% |
| Group size | 3 confederates | 32% |
| Unanimity | One dissenter (right answer) | Dropped to 5.5% |
| Unanimity | One dissenter (different wrong) | Dropped to 9% |
| Task difficulty | Lines more similar | Increased conformity |
| Private response | Written answers | Decreased conformity |

**Evaluation:**
- **Strength (V)**: High internal validity - controlled conditions
- **Limitation (G)**: Androcentric - only males; cultural bias - 1950s America
- **Limitation (A)**: Artificial task - lacks ecological validity
- **Strength (R)**: Standardised procedure allows replication
- **Limitation (E)**: Deception and psychological discomfort
`;

const MILGRAM_1963_STUDY = `
## Milgram (1963) - Obedience to Authority

### Background and Aims
- Investigated how far people would go in obeying an authority figure
- Context: Holocaust, Eichmann trial
- Research question: "Are Germans different?" (initial hypothesis)

### Sample
- 40 male participants aged 20-50
- Recruited through newspaper advertisements
- Paid $4.50 for participation (plus 50 cents travel)
- Range of occupations and education levels

### Procedure
1. **Cover story**: Study of memory and learning
2. **Rigged draw**: Participant always became "teacher", confederate "learner"
3. **Shock generator**: 30 switches from 15V to 450V with labels from "Slight Shock" to "XXX"
4. **Task**: Teacher reads word pairs, learner must recall; wrong answers receive increasing shocks
5. **Learner responses**: Pre-recorded - grunts (75V), complaints of heart condition (150V), screams (285V), silence (330V)
6. **Experimenter prods**:
   - Prod 1: "Please continue"
   - Prod 2: "The experiment requires you to continue"
   - Prod 3: "It is absolutely essential that you continue"
   - Prod 4: "You have no other choice, you must go on"

### Findings
- **65%** (26/40) continued to maximum 450V
- **100%** continued to 300V (when learner kicked wall)
- All participants showed signs of extreme tension
- 14 participants displayed nervous laughter
- Participants sweated, trembled, stuttered, groaned, dug fingernails into flesh

### Key Variations
| Variation | Obedience Rate | Key Change |
|-----------|----------------|------------|
| Original baseline | 65% | Yale University, experimenter in room |
| Touch proximity | 30% | Teacher forces learner's hand onto shock plate |
| Remote instruction | 20.5% | Experimenter gives orders by phone |
| Run-down office (Bridgeport) | 47.5% | Conducted in run-down office building |
| Two teachers refuse | 10% | Confederate teachers disobey first |
| Teacher chooses shock level | 2.5% | No orders about voltage |
| Ordinary man gives orders | 20% | Experimenter called away, ordinary man takes over |

### Explanations for Obedience

**Agentic State:**
- Individual acts as agent of another person's will
- Shift from autonomous state (feeling responsible) to agentic state (passing responsibility to authority)
- Agentic shift occurs when we perceive legitimate authority
- Explains moral strain - discomfort when ordered to do something against conscience

**Legitimacy of Authority:**
- We obey people who we perceive to have legitimate power
- Based on position in social hierarchy
- Destructive authority possible when legitimate authority used for evil
- Explains why location (Yale vs Bridgeport) affected obedience

### Evaluation (GRAVES)

**Generalisability:**
- Sample: Only American males
- However, replicated cross-culturally (Australia 87.5%, Germany 85%)
- Self-selected sample - volunteers may be more obedient

**Reliability:**
- Standardised procedure - highly replicable
- Variations demonstrate consistent patterns

**Application:**
- Understanding Holocaust, torture, workplace abuse
- Informs training of military, medical staff
- Raises awareness of dangers of blind obedience

**Validity:**
- Internal validity: Controlled conditions
- External validity: Criticized for artificiality
- However, Hofling (1966) - nurses obeyed doctor's orders in real hospital (21/22)
- Ecological validity: Artificial setting vs real-life obedience

**Ethics:**
- Deception about true purpose
- Psychological harm - distress during and after
- Right to withdraw compromised by prods
- However: Debriefed, 84% said glad they participated

**Supporting/Contradicting:**
- Burger (2009) - Partial replication found 70% continued to 150V
- Blass (1999) - Meta-analysis supports obedience findings across cultures
- Social Identity Theory offers alternative explanation - identified with science, not just obeyed
`;

const MOSCOVICI_1969_STUDY = `
## Moscovici (1969) - Minority Influence

### Background and Aims
- To investigate how a consistent minority can influence majority views
- Blue-green slides experiment

### Sample
- 172 female participants (32 groups of 6)
- Students from French universities

### Procedure
1. Groups of 6 women - 4 naive participants, 2 confederates
2. Shown 36 slides - all blue but varying intensity
3. Asked to judge colour out loud

**Three conditions:**
- **Consistent**: Confederates said "green" on all 36 trials
- **Inconsistent**: Confederates said "green" on 24/36 trials
- **Control**: No confederates

### Findings
| Condition | Conformity to "Green" |
|-----------|----------------------|
| Consistent | 8.42% (32% said green at least once) |
| Inconsistent | 1.25% |
| Control | 0.25% |

### Key Factors in Minority Influence

**Consistency:**
- Synchronic: All minority members say same thing
- Diachronic: Same position over time
- Makes minority appear confident and committed

**Commitment:**
- Sacrifices for position show genuine belief
- Augmentation principle - making personal sacrifice increases influence
- Example: Suffragettes' hunger strikes

**Flexibility:**
- Being open to other viewpoints
- Rigid minority seen as dogmatic
- Must balance consistency with some flexibility

### Minority Influence and Social Change

**Process (Snowball Effect):**
1. Minority draws attention to issue
2. Consistency makes majority reconsider
3. Deeper processing of minority arguments (conversion)
4. Augmentation through commitment/sacrifice
5. Minority view gradually becomes majority (snowball effect)
6. Social cryptomnesia - society forgets origin of change

**Examples of Social Change:**
- Civil Rights Movement (Martin Luther King)
- Suffragette Movement
- Environmental activism
- LGBTQ+ rights

### Evaluation (GRAVES)

**Generalisability:**
- Only female participants - gender bias
- French students - cultural limitations
- Laboratory setting may not reflect real social movements

**Reliability:**
- Replicable procedure
- Wood et al. (1994) meta-analysis supports importance of consistency

**Application:**
- Understanding social movements
- How small groups can change society
- Implications for activism strategies

**Validity:**
- Artificial task - identifying colour
- Real-world minority influence involves more complex issues
- Public vs private conformity not distinguished

**Ethics:**
- Relatively ethical compared to Milgram
- Some deception but minimal harm

**Supporting Studies:**
- Nemeth (1986): Flexible minority more influential than rigid
- Clark (1994): Minority influence in 12 Angry Men jury scenario
- Martin et al. (2003): Minority influence leads to more resistant attitude change
`;

// ============================================================================
// PAPER 1: MEMORY
// ============================================================================

const MEMORY_KNOWLEDGE = `
## Memory - AQA A-Level Psychology (Paper 1)

### Multi-Store Model (Atkinson & Shiffrin, 1968)

**Structure:**
\`\`\`
Sensory Memory --> Attention --> Short-Term Memory --> Rehearsal --> Long-Term Memory
                                       |                                    |
                                  Displacement                          Retrieval
\`\`\`

**Sensory Register:**
- Duration: Less than 1 second (iconic ~0.5s, echoic ~2-4s)
- Capacity: High but rapid decay
- Encoding: Modality-specific (visual, auditory, etc.)
- Function: Initial processing of sensory information

**Short-Term Memory (STM):**
- Duration: 15-30 seconds without rehearsal (Peterson & Peterson, 1959)
- Capacity: 7 ± 2 items (Miller, 1956); can be extended through chunking
- Encoding: Primarily acoustic (Baddeley, 1966)
- Function: Temporary storage, maintained by maintenance rehearsal

**Long-Term Memory (LTM):**
- Duration: Potentially unlimited (Bahrick et al., 1975 - 48 years)
- Capacity: Unlimited
- Encoding: Primarily semantic (Baddeley, 1966)
- Function: Permanent storage of information

### Baddeley (1966) - Encoding Study

**Aim:** Investigate encoding in STM and LTM

**Procedure:**
- Four word lists presented:
  - Acoustically similar: man, can, cab, cap, mad
  - Acoustically dissimilar: pit, few, cow, pen, sup
  - Semantically similar: great, large, big, huge, broad
  - Semantically dissimilar: good, huge, hot, safe, thin

**STM Findings (immediate recall):**
- Acoustically similar: 55% recalled correctly
- Acoustically dissimilar: 75% recalled correctly
- Semantic similarity had minimal effect

**LTM Findings (20-minute delay):**
- Semantically similar: 55% recalled correctly
- Semantically dissimilar: 85% recalled correctly
- Acoustic similarity had minimal effect

**Conclusion:** STM encodes acoustically; LTM encodes semantically

### Peterson and Peterson (1959) - Duration of STM

**Aim:** Test duration of STM when rehearsal is prevented

**Sample:** 24 students

**Procedure:**
- Presented with consonant trigram (e.g., XQF)
- Count backwards from 3-digit number (interference task)
- Recall after 3, 6, 9, 12, 15, or 18 seconds

**Findings:**
| Retention Interval | Correct Recall |
|-------------------|----------------|
| 3 seconds | 80% |
| 6 seconds | 50% |
| 18 seconds | Less than 10% |

**Conclusion:** STM duration approximately 18-30 seconds without rehearsal

### Evaluation of Multi-Store Model (GRAVES)

**Strengths:**
- Research support (Baddeley, Peterson & Peterson)
- Case studies support STM/LTM distinction (e.g., HM - intact STM, impaired LTM)
- Influential model, basis for further research
- Clive Wearing supports separate stores

**Limitations:**
- Oversimplified - single unitary STM (contradicted by WMM)
- STM not purely acoustic - deaf people use visual encoding
- LTM not purely semantic - can recall sounds, images
- Rehearsal not necessary for LTM transfer (levels of processing - Craik & Lockhart)
- Types of LTM ignored (procedural, episodic, semantic)

### Working Memory Model (Baddeley & Hitch, 1974)

**Components:**

| Component | Function | Capacity |
|-----------|----------|----------|
| **Central Executive** | Attention control, coordination, planning | Very limited |
| **Phonological Loop** | Verbal/acoustic information | ~2 seconds of speech |
| **Visuo-Spatial Sketchpad** | Visual/spatial information | 3-4 objects |
| **Episodic Buffer** (added 2000) | Integrates information from other components with LTM | ~4 chunks |

**Phonological Loop Sub-components:**
- **Phonological Store** ("inner ear"): Stores speech-based sounds ~2 seconds
- **Articulatory Control Process** ("inner voice"): Rehearses verbal information, converts written words to articulatory code

**Evidence for Phonological Loop:**
- Word length effect: Shorter words recalled better (capacity ~2 seconds of speech)
- Articulatory suppression: Saying "the the the" reduces recall
- Phonological similarity effect: Similar-sounding words confused

**Visuo-Spatial Sketchpad Sub-components:**
- **Visual cache**: Stores visual data
- **Inner scribe**: Records spatial relationships

**Evidence for VSSP:**
- Dual-task studies: Visual + spatial task = interference; visual + verbal = no interference
- Baddeley (1973): Tracking moving light impaired by spatial task, not verbal task

### Evaluation of Working Memory Model (GRAVES)

**Strengths:**
- Explains dual-task performance better than MSM
- Case study support: KF - impaired phonological loop, intact VSSP
- Brain imaging shows different areas for different components
- Applied to understanding reading difficulties, ADHD

**Limitations:**
- Central executive vague and unexplained
- May need further components/sub-components
- Episodic buffer relatively recent - not fully understood
- Role of LTM in working memory unclear

### Types of Long-Term Memory (Tulving, 1985)

| Type | Definition | Example | Brain Area |
|------|------------|---------|------------|
| **Episodic** | Personal events/experiences with time and context | Your first day at school | Hippocampus, temporal lobe |
| **Semantic** | Facts, knowledge about the world | Knowing Paris is capital of France | Temporal lobe |
| **Procedural** | Skills, how to do things | Riding a bicycle | Cerebellum, motor cortex |

**Evaluation:**
- Clinical evidence: Clive Wearing - intact procedural, impaired episodic/semantic
- Brain imaging supports different storage locations
- Useful distinction for understanding amnesia
- However, overlap between types; semantic derived from episodic
`;

const EYEWITNESS_TESTIMONY_KNOWLEDGE = `
## Eyewitness Testimony - AQA A-Level Psychology

### Loftus and Palmer (1974) - Leading Questions

**Experiment 1:**

**Aim:** Investigate effect of leading questions on speed estimates

**Sample:** 45 American students in 5 groups

**Procedure:**
- Watched film clips of car accidents
- Asked: "About how fast were the cars going when they [verb] each other?"
- Verb varied: smashed, collided, bumped, hit, contacted

**Findings:**
| Verb | Mean Speed Estimate (mph) |
|------|---------------------------|
| Smashed | 40.5 |
| Collided | 39.3 |
| Bumped | 38.1 |
| Hit | 34.0 |
| Contacted | 31.8 |

**Experiment 2:**

**Aim:** Investigate whether leading questions alter memory or just response

**Sample:** 150 students in 3 groups

**Procedure:**
- Watched film of car accident
- Asked speed question with "smashed", "hit", or no question (control)
- One week later: "Did you see any broken glass?" (there was none)

**Findings:**
| Condition | "Yes" to Broken Glass |
|-----------|----------------------|
| Smashed | 32% |
| Hit | 14% |
| Control | 12% |

**Conclusions:**
- Leading questions can distort memory
- Response-bias explanation: Just influences verbal response
- Substitution explanation: Actually changes memory trace (supported by Experiment 2)

### Evaluation of Loftus and Palmer (GRAVES)

**Generalisability:**
- Student sample - may not represent all ages/backgrounds
- Cultural differences in responding to authority

**Reliability:**
- Well-controlled laboratory experiment
- Easily replicable procedure

**Application:**
- Important implications for police interviews
- Led to development of Cognitive Interview
- Influenced court procedures for witness examination

**Validity:**
- Low ecological validity - watching film vs real accident
- Real witnesses more motivated, higher arousal
- Demand characteristics possible

**Ethics:**
- Deception minimal
- No lasting harm

**Supporting Studies:**
- Loftus (1975): "a" vs "the" broken headlight
- Loftus and Zanni (1975): Similar findings with different details

### Post-Event Discussion

**Gabbert et al. (2003):**
- Participants watched video of girl stealing
- Different angles shown to pairs
- 71% of those who discussed included details they didn't witness
- Memory conformity/contamination occurs through discussion

### Anxiety and EWT

**Weapon Focus Effect (Loftus et al., 1987):**
- Two conditions: man holding pen vs holding knife
- Pen condition: 49% accuracy identifying man
- Knife condition: 33% accuracy
- Eye-tracking showed more time on weapon

**Johnson and Scott (1976):**
- "Grease on hands" vs "blood on knife" condition
- Low anxiety: 49% accurate identification
- High anxiety: 33% accurate identification
- Attention narrowed to weapon, not face

**Contradicting Evidence (Yuille & Cutshall, 1986):**
- Real-life shooting in Canada
- Witnesses interviewed 4-5 months later
- Very accurate recall despite high anxiety
- More anxious witnesses were actually more accurate

**Yerkes-Dodson Law:**
- Moderate arousal optimal for memory
- Too little or too much arousal impairs performance
- Explains contradictory findings

### Cognitive Interview (Fisher & Geiselman, 1987)

**Four Techniques:**

1. **Mental Reinstatement of Context:**
   - Mentally recreate environmental and emotional context
   - Based on context-dependent memory (Godden & Baddeley)

2. **Report Everything:**
   - Report all details, even seemingly irrelevant
   - Partial information may trigger other memories

3. **Change Order:**
   - Recall in different temporal orders
   - Disrupts expectations/schemas that might distort memory

4. **Change Perspective:**
   - Recall from different viewpoints
   - Reduces schema-based reconstruction

**Enhanced Cognitive Interview (Fisher et al., 1987):**
- Added: Rapport building, open-ended questions, reducing eyewitness anxiety

### Evaluation of Cognitive Interview (GRAVES)

**Strengths:**
- Meta-analysis (Kohnken et al., 1999): 34% increase in correct information
- Fewer leading questions than standard interview
- Used in UK police forces

**Limitations:**
- Requires extensive training
- Time-consuming
- May generate more incorrect details (quantity vs quality)
- Enhanced CI not always practical
- Individual differences in effectiveness
`;

// ============================================================================
// PAPER 1: ATTACHMENT
// ============================================================================

const ATTACHMENT_KNOWLEDGE = `
## Attachment - AQA A-Level Psychology (Paper 1)

### Definitions

**Attachment:** A close emotional bond between two people characterised by:
- Desire to maintain closeness
- Distress on separation
- Joy on reunion
- Secure base for exploration

### Caregiver-Infant Interactions

**Interactional Synchrony:**
- Caregiver and infant coordinate actions
- Mirror each other's expressions/movements
- Temporal coordination of behaviour

**Reciprocity:**
- Turn-taking interaction
- Both caregiver and infant actively participate
- Baby's signals elicit caregiver response and vice versa

**Evidence:**
- Meltzoff and Moore (1977): Newborns imitate facial expressions
- Murray and Trevarthen (1985): Babies distressed when mother unresponsive

### Stages of Attachment (Schaffer & Emerson, 1964)

**Study:** 60 Glasgow infants observed from birth to 18 months

| Stage | Age | Characteristics |
|-------|-----|-----------------|
| **Pre-attachment** | 0-3 months | Similar response to all people; preference for human faces |
| **Indiscriminate** | 3-7 months | Prefers humans to objects; doesn't distinguish caregivers |
| **Specific** | 7+ months | Specific attachment formed; stranger anxiety; separation anxiety |
| **Multiple** | By 18 months | Multiple attachments formed (secondary attachments) |

**Key Findings:**
- 65% formed primary attachment to mother
- 87% developed multiple attachments by 18 months
- Quality of interaction more important than time spent

### Harlow (1958) - Attachment in Rhesus Monkeys

**Aim:** Investigate whether attachment is based on food (cupboard love) or comfort

**Procedure:**
- Newborn rhesus monkeys separated from mothers
- Two "surrogate mothers" in cage:
  - Wire mother with feeding bottle
  - Cloth mother (no food)

**Findings:**
- Monkeys spent most time with cloth mother (17+ hours vs 1-2 hours on wire)
- When frightened, ran to cloth mother
- Used cloth mother as secure base for exploration
- Later showed social/mating difficulties; poor mothers to own offspring

**Evaluation:**
- **Strength (A)**: Challenged cupboard love theory; contact comfort crucial
- **Limitation (G)**: Animal study - generalisation to humans questionable
- **Limitation (E)**: Serious ethical issues - lasting harm to monkeys
- **Strength (V)**: Controlled experiment - cause and effect established
- **Link to Bowlby**: Supports idea of attachment as innate need

### Lorenz (1935) - Imprinting in Geese

**Procedure:**
- Divided clutch of greylag goose eggs
- Half hatched with mother; half with Lorenz as first moving object

**Findings:**
- Lorenz group followed him everywhere
- Imprinting occurred in critical period (first few hours)
- Irreversible; affected sexual behaviour in adulthood

**Evaluation:**
- Demonstrated innate component to attachment
- Critical period concept influential
- However, birds different from humans
- Guiton (1966): Imprinting in chickens could be reversed

### Bowlby's Monotropic Theory (1969)

**Key Features:**

**1. Innate:**
- Attachment is biological/evolutionary
- Programmed into children for survival
- Adaptive - increases chance of survival

**2. Sensitive Period:**
- Critical period for attachment: first 2.5 years (later revised to first 3 years)
- If no attachment forms, increasingly difficult later
- Different from Lorenz's rigid critical period

**3. Monotropy:**
- One primary attachment figure (usually mother)
- Qualitatively different from other attachments
- Primary attachment figure (PAF) most important

**4. Social Releasers:**
- Innate behaviours that elicit caregiving
- Crying, smiling, babbling, cute appearance
- Activate adult attachment system

**5. Internal Working Model:**
- Mental template for relationships
- Based on primary attachment
- Affects expectations of:
  - Self-worth
  - How others will treat you
  - Future relationships

**Continuity Hypothesis:**
- Early attachment patterns continue into adulthood
- Secure attachment --> healthy adult relationships
- Insecure attachment --> relationship difficulties

### Maternal Deprivation Hypothesis (Bowlby, 1951)

**Theory:**
- Continuous care from mother (or substitute) needed in first 2.5 years
- Maternal deprivation = separation from mother during critical period
- Effects are permanent and irreversible

**44 Thieves Study (Bowlby, 1944):**

**Sample:**
- 44 juvenile thieves
- 44 matched controls (non-delinquents)

**Method:**
- Retrospective interviews about early life
- Psychiatric assessments

**Findings:**
- 14 thieves classified as "affectionless psychopaths" (lack empathy, guilt)
- 12 of these 14 had experienced prolonged separation from mother before age 2
- Only 2 of control group had experienced early separation

**Conclusion:** Early maternal deprivation leads to emotional damage (affectionless psychopathy) and delinquency

### Evaluation of Maternal Deprivation Hypothesis (GRAVES)

**Generalisability:**
- Sample of thieves not representative of general population
- Retrospective data - may be biased
- Cultural context (1940s UK) may not apply today

**Reliability:**
- Difficult to replicate - relies on retrospective accounts
- Definition of "deprivation" varies

**Application:**
- Influenced hospital visiting policies
- Shaped childcare advice and policy
- Increased awareness of early experiences' importance

**Validity:**
- Correlation not causation - other factors may explain delinquency
- Confounded variables - poverty, family dysfunction
- Conflates deprivation (loss) with privation (never had)

**Ethics:**
- Labelled children as "damaged"
- Placed burden on mothers

**Supporting/Contradicting:**
- Rutter (1981): Separation vs deprivation - effects depend on cause of separation
- Robertson & Robertson (1971): Effects can be mitigated with substitute care
- Czech twins (Koluchova, 1976): Recovery possible even after severe privation
`;

const AINSWORTH_STRANGE_SITUATION = `
## Ainsworth's Strange Situation (1970)

### Procedure

**Participants:** 100 middle-class American mothers and infants (12-18 months)

**Setting:** Novel environment (playroom with toys)

**8 Episodes (3 minutes each):**
1. Parent and infant enter room
2. Parent sits while infant explores
3. Stranger enters, talks to parent
4. Parent leaves; stranger stays with infant
5. Parent returns; stranger leaves
6. Parent leaves; infant alone
7. Stranger returns
8. Parent returns; stranger leaves

### Behavioural Categories Assessed

**1. Separation Anxiety:** Distress when caregiver leaves
**2. Reunion Behaviour:** Response when caregiver returns
**3. Stranger Anxiety:** Response to unfamiliar adult
**4. Exploration:** Willingness to explore with secure base

### Attachment Types

| Type | % in US Sample | Separation | Reunion | Exploration | Stranger |
|------|----------------|------------|---------|-------------|----------|
| **Type B: Secure** | 66% | Some distress | Enthusiasm, easily comforted | Uses parent as secure base | Wary initially |
| **Type A: Insecure-Avoidant** | 22% | Little/no distress | Avoids/ignores parent | Explores independently | Comfortable with stranger |
| **Type C: Insecure-Resistant** | 12% | Intense distress | Seeks contact but resists comfort | Reluctant to explore | Very distressed |
| **Type D: Disorganised** (Main & Solomon, 1986) | N/A | Inconsistent | Contradictory behaviours | Fearful/confused | Uncertain |

### Caregiver Sensitivity Hypothesis

- Secure attachment: Sensitive, responsive caregiving
- Avoidant: Rejecting, unresponsive caregiving
- Resistant: Inconsistent caregiving

**Evidence:**
- Ainsworth found correlation between maternal sensitivity (assessed at home) and attachment type
- More sensitive mothers --> secure attachment

### Evaluation of Strange Situation (GRAVES)

**Generalisability:**
- American sample - cultural bias
- Middle-class participants
- Van IJzendoorn & Kroonenberg (1988): Meta-analysis of 32 studies in 8 countries

**Cross-Cultural Findings:**
| Country | Secure (B) | Avoidant (A) | Resistant (C) |
|---------|------------|--------------|---------------|
| UK | 75% | 22% | 3% |
| Germany | 57% | 35% | 8% |
| Japan | 68% | 5% | 27% |
| Israel (kibbutz) | 62% | 7% | 33% |

**Cultural Differences Explained:**
- Germany: Independence encouraged; more avoidant
- Japan: Less experience with separation; more resistant
- Greater variation within countries than between

**Reliability:**
- High inter-rater reliability (94%)
- Standardised procedure
- Replicable

**Application:**
- Used in court assessments
- Identifies at-risk infants
- Informs intervention programmes

**Validity:**
- High predictive validity - correlates with later development
- But measures relationship with one caregiver only
- May reflect temperament not just attachment

**Ethics:**
- Intentionally distresses infant
- Argued distress is mild and temporary
- Parental consent obtained

**Alternative Explanations:**
- Kagan (1984): Temperament hypothesis - attachment type reflects innate temperament
- However, secure attachment can be developed through intervention
`;

// ============================================================================
// PAPER 1: PSYCHOPATHOLOGY
// ============================================================================

const PSYCHOPATHOLOGY_KNOWLEDGE = `
## Psychopathology - AQA A-Level Psychology (Paper 1)

### Definitions of Abnormality

**1. Statistical Infrequency:**
- Abnormal = statistically rare behaviour
- Based on normal distribution
- **Strength**: Objective, data-based
- **Limitation**: Rare doesn't mean undesirable (e.g., genius IQ); common can still be abnormal (e.g., anxiety)

**2. Deviation from Social Norms:**
- Abnormal = violates implicit/explicit social rules
- Based on cultural expectations
- **Strength**: Considers social context
- **Limitation**: Culturally relative; norms change over time; who decides?

**3. Failure to Function Adequately (Rosenhan & Seligman):**
- Abnormal = inability to cope with daily life
- Features: Personal distress, maladaptive behaviour, unpredictability, irrationality, observer discomfort
- **Strength**: Recognises subjective experience
- **Limitation**: Some disorders don't prevent functioning; dysfunction might be rational response

**4. Deviation from Ideal Mental Health (Jahoda, 1958):**
- Abnormal = absence of positive characteristics
- Criteria: Self-actualisation, autonomy, accurate perception of reality, environmental mastery, resistance to stress
- **Strength**: Positive approach; focuses on wellbeing
- **Limitation**: Very few would be "normal"; culturally biased towards Western individualism

### Phobias

**Definition:** Persistent, excessive fear of specific object, situation, or activity

**Categories (DSM-5):**
- **Specific phobias**: Fear of particular stimulus (spiders, heights, blood)
- **Social anxiety disorder**: Fear of social situations
- **Agoraphobia**: Fear of open/public spaces

**Behavioural Characteristics:**
- Avoidance of feared stimulus
- Panic response (fight or flight)
- Endurance under extreme anxiety

**Emotional Characteristics:**
- Excessive, persistent fear
- Anxiety disproportionate to actual danger
- Fear of fear itself

**Cognitive Characteristics:**
- Selective attention to threat
- Irrational beliefs about danger
- Cognitive distortions

### Behavioural Approach to Phobias

**Two-Process Model (Mowrer, 1947):**

**1. Classical Conditioning (Acquisition):**
- NS paired with UCS --> NS becomes CS
- Example: Dog (NS) + bite (UCS/fear) --> Dog (CS) --> Fear (CR)

**Little Albert Study (Watson & Rayner, 1920):**
- 9-month-old Albert
- White rat (NS) paired with loud noise (UCS)
- After 7 pairings: Rat (CS) --> Fear (CR)
- Fear generalised to similar stimuli (rabbit, fur coat)

**2. Operant Conditioning (Maintenance):**
- Avoidance reduces fear (negative reinforcement)
- Avoidance behaviour strengthened
- Prevents extinction

### Behavioural Treatments for Phobias

**Systematic Desensitisation (Wolpe, 1958):**

**Based on:** Classical conditioning (counter-conditioning)

**Procedure:**
1. **Relaxation training**: Deep muscle relaxation techniques
2. **Anxiety hierarchy**: Graded list of feared situations
3. **Gradual exposure**: Work through hierarchy while relaxed

**Principle:** Reciprocal inhibition - cannot be relaxed and anxious simultaneously

**Evaluation:**
- **Strength (S)**: Effective for specific phobias (McGrath et al., 1990)
- **Strength (E)**: Less traumatic than flooding
- **Strength (A)**: Can be used with children, cognitive impairments
- **Limitation**: Requires multiple sessions
- **Limitation**: Symptom substitution possibility

**Flooding:**

**Procedure:**
- Immediate exposure to most feared stimulus
- Exposure continues until anxiety subsides (habituation)
- No escape allowed

**Principle:** Classical extinction - CS presented without UCS repeatedly

**Evaluation:**
- **Strength (A)**: Quick - one 2-3 hour session
- **Strength (R)**: Cost-effective
- **Limitation (E)**: Traumatic; high dropout rates
- **Limitation**: Unsuitable for some (heart conditions, PTSD)

### Depression

**Definition:** Mood disorder characterised by persistent low mood and/or loss of interest

**Behavioural Characteristics:**
- Reduced activity levels
- Disrupted sleep patterns
- Changes in appetite/weight
- Psychomotor retardation or agitation

**Emotional Characteristics:**
- Persistent sadness
- Feelings of worthlessness/guilt
- Loss of pleasure (anhedonia)
- Possible suicidal thoughts

**Cognitive Characteristics:**
- Negative self-concept
- Reduced concentration
- Negative triad (Beck)
- Cognitive biases

### Beck's Cognitive Theory of Depression

**Negative Triad:**
- **Negative view of self**: "I am worthless"
- **Negative view of world**: "Everyone is against me"
- **Negative view of future**: "Things will never get better"

**Cognitive Biases:**
- **Overgeneralisation**: One failure means total failure
- **Catastrophising**: Expecting the worst
- **Selective abstraction**: Focus on negatives only
- **Personalisation**: Taking blame for everything
- **Arbitrary inference**: Conclusions without evidence

**Evaluation:**
- **Strength (S)**: Research support - depressed people do show negative thinking
- **Strength (A)**: Led to effective treatment (CBT)
- **Limitation**: Correlation not causation - does thinking cause depression or vice versa?
- **Limitation**: Incomplete - ignores biological/social factors

### Ellis's ABC Model (REBT)

**Rational Emotive Behaviour Therapy:**

- **A** (Activating event): External event occurs
- **B** (Beliefs): Irrational beliefs about event
- **C** (Consequences): Emotional/behavioural consequences

**Musterbation:** Irrational demands ("I must...", "I should...")

**Therapy:**
- **D** (Disputing): Challenge irrational beliefs
- **E** (Effects): New, rational beliefs
- **F** (New Feelings): Healthier emotions

### CBT for Depression

**Procedure:**
1. **Assessment**: Identify negative automatic thoughts
2. **Cognitive restructuring**: Challenge and replace negative thoughts
3. **Behavioural activation**: Engage in rewarding activities
4. **Homework**: Apply techniques between sessions
5. **Relapse prevention**: Identify triggers, develop coping strategies

**Evaluation:**
- **Strength (S)**: Meta-analyses show effectiveness (Butler et al., 2006)
- **Strength (A)**: Lasting effects - addresses root cause
- **Strength**: No side effects (unlike medication)
- **Limitation**: Requires active participation
- **Limitation**: May not work for severe depression
- **Limitation**: Time and cost intensive

### OCD

**Definition:** Obsessive-compulsive disorder characterised by persistent, unwanted thoughts and repetitive behaviours

**Obsessions:**
- Intrusive, recurring thoughts
- Cause significant anxiety
- Recognised as irrational but uncontrollable
- Common themes: Contamination, harm, symmetry

**Compulsions:**
- Repetitive behaviours or mental acts
- Performed to reduce anxiety from obsessions
- Temporary relief only
- Common behaviours: Washing, checking, counting

### Biological Explanation of OCD

**Genetic Explanations:**
- Family studies: Higher concordance in relatives
- Nestadt et al. (2010): First-degree relatives 5x more likely to have OCD
- Twin studies: MZ 68% concordance vs DZ 31% (van Grootheest et al., 2005)
- Candidate genes: SERT gene (serotonin transporter)

**Neural Explanations:**
- **Abnormal serotonin levels**: Low serotonin linked to OCD
- **Orbitofrontal cortex (OFC)**: Overactive; converts worry into action
- **Caudate nucleus**: Fails to suppress OFC signals
- **Cortico-striatal circuit**: Abnormal loop of worry and action

**Evaluation:**
- **Strength (S)**: Supported by effectiveness of SSRIs
- **Strength (R)**: PET scans show brain abnormalities (Menzies et al., 2008)
- **Limitation**: Concordance not 100% - environment also matters
- **Limitation**: Diathesis-stress model needed

### Drug Therapy for OCD

**SSRIs (Selective Serotonin Reuptake Inhibitors):**
- First-line treatment
- Examples: Fluoxetine (Prozac), sertraline
- Increase serotonin in synapse by blocking reuptake
- Takes 3-4 months to see effects
- Often combined with CBT

**Tricyclics:**
- Alternative if SSRIs don't work
- Clomipramine - also blocks serotonin reuptake
- More side effects than SSRIs

**Evaluation:**
- **Strength (A)**: Effective for many patients (Soomro et al., 2008 - more effective than placebo)
- **Strength**: Easy to take; non-disruptive to life
- **Limitation (E)**: Side effects (nausea, insomnia, sexual dysfunction)
- **Limitation**: Treats symptoms not cause - relapse when stopped
- **Limitation**: Some don't respond; may need combination treatment
`;

// ============================================================================
// PAPER 2: APPROACHES
// ============================================================================

const APPROACHES_KNOWLEDGE = `
## Approaches in Psychology - AQA A-Level Psychology (Paper 2)

### Origins of Psychology

**Wilhelm Wundt (1879):**
- Founded first psychology laboratory in Leipzig, Germany
- Introspection method - systematic observation of conscious experience
- Structuralism - break down consciousness into basic elements

**Emergence as Science:**
- Move from philosophy to empirical investigation
- Controlled, systematic methods
- Replicable experiments

### Behaviourist Approach

**Key Assumptions:**
- Psychology should be a science - only study observable behaviour
- All behaviour is learned through environment
- Animals and humans learn the same way
- Tabula rasa (blank slate) - born without innate tendencies

**Classical Conditioning (Pavlov):**
- Learning through association
- UCS --> UCR; UCS + NS --> NS becomes CS --> CR
- Extinction, generalisation, discrimination

**Operant Conditioning (Skinner):**
- Learning through consequences
- Positive reinforcement, negative reinforcement, punishment
- Schedules of reinforcement
- Shaping through successive approximations

**Evaluation:**
- **Strength**: Scientific - objective, controlled studies
- **Strength**: Practical applications (token economies, systematic desensitisation)
- **Limitation**: Reductionist - ignores cognition and biology
- **Limitation**: Deterministic - ignores free will
- **Limitation**: Animal studies - generalisation issues

### Social Learning Theory (Bandura)

**Key Concepts:**
- Learning through observation and imitation
- Role of cognitive factors (mediating processes)
- Vicarious reinforcement

**Mediating Processes:**
1. **Attention**: Notice the behaviour
2. **Retention**: Remember the behaviour
3. **Reproduction**: Ability to perform behaviour
4. **Motivation**: Reason to imitate

**Bandura's Bobo Doll Studies (1961, 1963, 1965):**
- Children observed adult model aggressive or non-aggressive
- Aggressive model --> more aggression in children
- Boys more physically aggressive than girls
- 1965: Model punished --> less imitation; but all learned equally (shown when incentivised)

**Identification:**
- More likely to imitate models who are:
  - Similar to us
  - High status
  - Rewarded (vicarious reinforcement)
  - Warm and nurturing

**Evaluation:**
- **Strength**: Less deterministic than behaviourism
- **Strength**: Explains acquisition without direct reinforcement
- **Strength**: Practical applications (media effects research)
- **Limitation**: Biological factors underemphasised
- **Limitation**: Bobo doll designed to be hit - demand characteristics
- **Limitation**: Lab studies - ecological validity concerns

### Cognitive Approach

**Key Assumptions:**
- Internal mental processes can and should be studied
- Mind is like a computer (information processing)
- Schemas influence processing
- Mediating processes between stimulus and response

**Key Concepts:**

**Information Processing:**
- Input --> Processing --> Output
- Encoding, storage, retrieval
- Sequential or parallel processing

**Schemas:**
- Mental frameworks/knowledge structures
- Based on experience
- Influence perception, memory, expectations
- Can lead to biases and distortions

**Cognitive Neuroscience:**
- Linking mental processes to brain areas
- Brain imaging (fMRI, PET, EEG)
- Example: Memory and hippocampus

**Evaluation:**
- **Strength**: Scientific - controlled experiments
- **Strength**: Practical applications (CBT, AI, education)
- **Strength**: Bridge between biology and behaviour
- **Limitation**: Computer analogy oversimplified
- **Limitation**: Lab studies lack ecological validity
- **Limitation**: Ignores emotion and motivation

### Biological Approach

**Key Assumptions:**
- Behaviour has biological basis
- Everything is ultimately physical
- Genes, brain, biochemistry, evolution

**Key Concepts:**

**Neurochemistry:**
- Neurotransmitters affect behaviour and mood
- Serotonin (mood), dopamine (reward), noradrenaline (arousal)
- Imbalances linked to disorders

**Genetics:**
- Behaviour has genetic basis
- Twin studies: MZ vs DZ concordance
- Genotype vs phenotype

**Brain Structure/Localisation:**
- Different brain areas for different functions
- Damage studies, brain imaging

**Evolution:**
- Adaptive behaviours selected
- Survival and reproduction advantage

**Evaluation:**
- **Strength**: Scientific - objective measures
- **Strength**: Practical applications (drug treatments)
- **Limitation**: Reductionist - ignores environment, cognition
- **Limitation**: Deterministic - genetic determinism
- **Limitation**: Correlation not causation

### Psychodynamic Approach (Freud)

**Key Assumptions:**
- Unconscious mind influences behaviour
- Adult behaviour rooted in childhood experiences
- Instincts drive behaviour (Eros and Thanatos)

**Structure of Personality:**

| Structure | Description | Operates by |
|-----------|-------------|-------------|
| **Id** | Primitive instincts; present from birth | Pleasure principle |
| **Ego** | Rational part; develops in first year | Reality principle |
| **Superego** | Moral conscience; develops age 3-6 | Morality principle |

**Psychosexual Stages:**
| Stage | Age | Focus | Fixation |
|-------|-----|-------|----------|
| Oral | 0-1 | Mouth | Dependency, oral habits |
| Anal | 1-3 | Anus | Orderliness or messiness |
| Phallic | 3-6 | Genitals | Oedipus/Electra complex |
| Latency | 6-puberty | None | N/A |
| Genital | Puberty+ | Genitals | Mature sexuality |

**Defence Mechanisms:**
- Repression: Pushing threatening thoughts to unconscious
- Denial: Refusing to accept reality
- Displacement: Redirecting emotions to safer target
- Projection: Attributing own feelings to others

**Evaluation:**
- **Strength**: First to focus on psychological causes
- **Strength**: Influential - therapy, understanding unconscious
- **Limitation**: Unscientific - unfalsifiable concepts
- **Limitation**: Based on case studies of unrepresentative patients
- **Limitation**: Gender-biased - phallocentric

### Humanistic Approach

**Key Assumptions:**
- Free will - we choose our behaviour
- Each person is unique (idiographic approach)
- Self-actualisation is the goal
- Subjective experience is important

**Key Concepts:**

**Maslow's Hierarchy of Needs:**
1. Physiological needs (base)
2. Safety needs
3. Love and belonging
4. Esteem
5. Self-actualisation (peak)

**Rogers' Self-Concept:**
- Self-concept: How we see ourselves
- Ideal self: Who we want to be
- Congruence: Match between self-concept and ideal self
- Incongruence leads to psychological problems

**Conditions of Worth:**
- Conditional positive regard from others
- Person only feels valued when meeting conditions
- Leads to incongruence

**Client-Centred Therapy:**
- Unconditional positive regard
- Empathy
- Congruence (therapist genuineness)

**Evaluation:**
- **Strength**: Free will - less deterministic
- **Strength**: Positive approach - focus on healthy development
- **Strength**: Influential in therapy
- **Limitation**: Unscientific - subjective concepts
- **Limitation**: Difficult to test empirically
- **Limitation**: Cultural bias - individualistic Western values

### Comparison of Approaches

| Feature | Behaviourist | Cognitive | Biological | Psychodynamic | Humanistic |
|---------|-------------|-----------|------------|---------------|------------|
| **Focus** | Observable behaviour | Mental processes | Physiology | Unconscious | Subjective experience |
| **Determinism** | Environmental | Soft | Genetic | Psychic | Free will |
| **Nature/Nurture** | Nurture | Both | Nature | Both | Both |
| **Reductionism** | Yes | Yes | Yes | No | No |
| **Scientific** | Yes | Yes | Yes | No | No |
| **Idiographic/Nomothetic** | Nomothetic | Nomothetic | Nomothetic | Idiographic | Idiographic |
`;
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// PAPER 2: BIOPSYCHOLOGY
// ============================================================================

const BIOPSYCHOLOGY_KNOWLEDGE = `
## Biopsychology - AQA A-Level Psychology (Paper 2)

### The Nervous System

**Central Nervous System (CNS):**
- Brain: Controls complex functions
- Spinal cord: Relay between brain and body; reflex actions

**Peripheral Nervous System (PNS):**

| Division | Sub-division | Function |
|----------|--------------|----------|
| **Somatic** | - | Voluntary movement; sensory information |
| **Autonomic** | Sympathetic | "Fight or flight"; arousal |
| **Autonomic** | Parasympathetic | "Rest and digest"; calm |

### Neurons and Synaptic Transmission

**Types of Neurons:**
- **Sensory**: Carry info from receptors to CNS
- **Motor**: Carry info from CNS to effectors
- **Relay**: Connect neurons within CNS

**Synaptic Transmission:**
1. Action potential reaches axon terminal
2. Calcium enters; vesicles release neurotransmitter
3. NT crosses synapse; binds to receptors on postsynaptic neuron
4. Excitatory (depolarisation) or inhibitory (hyperpolarisation) effect
5. NT removed by reuptake, enzymes, or diffusion

**Key Neurotransmitters:**
| NT | Function | Too Little | Too Much |
|----|----------|------------|----------|
| **Serotonin** | Mood, sleep, appetite | Depression | Anxiety, mania |
| **Dopamine** | Reward, movement, attention | Parkinson's | Schizophrenia |
| **Noradrenaline** | Arousal, alertness | Depression | Anxiety, stress |
| **GABA** | Inhibitory; reduces neural activity | Anxiety | Drowsiness |

### Fight or Flight Response

**Acute Stressor Response:**
1. **Hypothalamus** activates sympathetic nervous system
2. **SAM axis**: Sympathetic Adrenal Medullary system
3. **Adrenal medulla** releases adrenaline and noradrenaline
4. Physiological effects:
   - Increased heart rate
   - Dilated pupils
   - Diverted blood to muscles
   - Increased breathing rate
   - Inhibited digestion

### Localisation of Function

**Key Brain Areas:**

| Area | Location | Function |
|------|----------|----------|
| **Motor cortex** | Frontal lobe (precentral gyrus) | Voluntary movement |
| **Somatosensory cortex** | Parietal lobe (postcentral gyrus) | Touch, temperature, pain |
| **Visual cortex** | Occipital lobe | Visual processing |
| **Auditory cortex** | Temporal lobe | Sound processing |
| **Broca's area** | Left frontal lobe | Speech production |
| **Wernicke's area** | Left temporal lobe | Language comprehension |

**Evidence for Localisation:**
- Broca (1861): Patient "Tan" - damage to left frontal lobe, couldn't speak but could understand
- Wernicke (1876): Damage to left temporal lobe - fluent but meaningless speech
- Brain imaging studies confirm specific areas

**Evaluation:**
- **Strength (S)**: Case studies and brain imaging support
- **Limitation**: Brain plasticity suggests functions can move
- **Limitation**: Holistic theories - complex functions require multiple areas
- **Limitation**: Individual differences in brain organisation

### Lateralisation and Split-Brain Research

**Lateralisation:**
- Left and right hemispheres have different functions
- Contralateral control (each hemisphere controls opposite side)

| Left Hemisphere | Right Hemisphere |
|-----------------|------------------|
| Language (most people) | Spatial processing |
| Analytical thinking | Face recognition |
| Logic, maths | Emotion processing |
| Sequential processing | Holistic processing |

### Sperry (1968) - Split-Brain Research

**Background:**
- Corpus callosum severed to treat severe epilepsy
- Hemispheres cannot communicate

**Procedure:**
- Visual stimuli presented to left or right visual field
- Left visual field --> right hemisphere (and vice versa)
- Object in right field (left hemisphere): Can name it
- Object in left field (right hemisphere): Cannot name but can identify by touch with left hand

**Key Findings:**

| Visual Field | Hemisphere | Response |
|--------------|------------|----------|
| Right (word) | Left | Can say/write word |
| Left (word) | Right | Cannot say word; can pick up object with left hand |
| Both (different images) | Both | Report right field; draw left field with left hand |

**Conclusions:**
- Language primarily left hemisphere
- Right hemisphere processes visual/spatial; left hand control
- Corpus callosum allows integration of information

**Evaluation:**
- **Strength (V)**: Highly controlled; each hemisphere tested separately
- **Limitation (G)**: Small sample; patients already had abnormal brains
- **Limitation (V)**: Artificial laboratory setting
- **Strength (A)**: Understanding of brain organisation; rehabilitation implications

### Brain Plasticity and Functional Recovery

**Brain Plasticity:**
- Brain can change and adapt throughout life
- Synaptic pruning in childhood
- New neural pathways formed through learning

**Functional Recovery:**
- Brain compensates for damage
- Surrounding areas take over functions
- Neuronal unmasking: Dormant connections activated
- Stem cells may generate new neurons

**Evidence:**
- Maguire et al. (2000): Taxi drivers - enlarged hippocampus from navigation
- Draganski (2004): Medical students - brain changes after learning
- Stroke patients: Rehabilitation utilises plasticity

**Factors Affecting Recovery:**
- Age (younger = better recovery)
- Area of damage
- Rehabilitation timing and intensity
- Individual differences

### Ways of Studying the Brain

| Method | What It Measures | Strengths | Limitations |
|--------|------------------|-----------|-------------|
| **fMRI** | Blood oxygen levels (activity) | High spatial resolution; non-invasive | Poor temporal resolution; expensive |
| **EEG** | Electrical activity | High temporal resolution; cheap | Poor spatial resolution; only surface |
| **ERP** | Response to specific stimulus | Good temporal resolution | Difficult to interpret |
| **Post-mortem** | Physical structure | Detailed structure analysis | Cannot study living function; limited sample |

### Biological Rhythms

**Circadian Rhythms (24 hours):**
- Sleep-wake cycle
- Controlled by SCN (suprachiasmatic nucleus)
- Endogenous (internal clock) + exogenous zeitgebers (light)

**Evidence:**
- Siffre (1975): Cave study - rhythm extended to 25+ hours without light
- Ralph et al. (1990): SCN transplants in hamsters altered rhythms

**Ultradian Rhythms (< 24 hours):**
- Sleep stages (90-minute cycles)
- BRAC (Basic Rest-Activity Cycle)

**Sleep Stages:**
| Stage | EEG Pattern | Features |
|-------|-------------|----------|
| 1 | Alpha --> Theta | Light sleep; easily woken |
| 2 | Theta; sleep spindles | Reduced heart rate, temperature |
| 3 | Delta (20-50%) | Deep sleep; hard to wake |
| 4 | Delta (50%+) | Deepest sleep; growth hormone |
| REM | Beta (like awake) | Dreams; paralysis; eyes move |

**Infradian Rhythms (> 24 hours):**
- Menstrual cycle (28 days)
- Seasonal Affective Disorder (annual)

**Endogenous Pacemakers:**
- SCN receives light via optic nerve
- Controls pineal gland --> melatonin release
- Melatonin induces sleep

**Exogenous Zeitgebers:**
- Light (primary)
- Social cues
- Temperature
- Exercise
- Meal times
`;

// ============================================================================
// PAPER 2: RESEARCH METHODS
// ============================================================================

const RESEARCH_METHODS_KNOWLEDGE = `
## Research Methods - AQA A-Level Psychology (Paper 2)

### Experimental Methods

**Laboratory Experiment:**
- Conducted in controlled environment
- IV manipulated; DV measured
- **Strengths**: High control; cause-effect established; replicable
- **Limitations**: Low ecological validity; demand characteristics; artificial

**Field Experiment:**
- Conducted in natural setting
- IV still manipulated
- **Strengths**: Higher ecological validity; reduced demand characteristics
- **Limitations**: Less control; ethical issues (consent); extraneous variables

**Natural Experiment:**
- IV occurs naturally (not manipulated)
- Examples: Romanian orphan studies; twin studies
- **Strengths**: Ethical (no manipulation); high ecological validity
- **Limitations**: Cannot establish causation; confounding variables

**Quasi-Experiment:**
- IV is existing characteristic (age, gender, condition)
- **Strengths**: Studies variables that cannot be manipulated
- **Limitations**: No random allocation; participant variables

### Experimental Designs

| Design | Description | Strengths | Limitations |
|--------|-------------|-----------|-------------|
| **Independent Groups** | Different participants in each condition | No order effects; can use same materials | Participant variables; needs more participants |
| **Repeated Measures** | Same participants in all conditions | Controls participant variables; fewer participants | Order effects; demand characteristics |
| **Matched Pairs** | Participants matched on key variables | Controls participant variables; no order effects | Matching is time-consuming; may not match on all variables |

**Controlling Order Effects:**
- Counterbalancing: Half do condition A first, half do B first
- Randomisation: Random order of conditions

### Sampling Methods

| Method | Description | Strengths | Limitations |
|--------|-------------|-----------|-------------|
| **Random** | Every member has equal chance | Representative; unbiased | Difficult; time-consuming |
| **Systematic** | Every nth person selected | Objective; easy to replicate | Bias if pattern in population |
| **Stratified** | Population divided into strata; random from each | Representative of subgroups | Time-consuming; needs demographic info |
| **Opportunity** | Using available participants | Easy; quick | Biased; not representative |
| **Volunteer** | Participants self-select | Access to specific populations; willing | Volunteer characteristics; bias |

### Observational Techniques

**Types:**
- **Naturalistic**: Real-life setting; no intervention
- **Controlled**: Structured environment
- **Participant**: Observer joins group
- **Non-participant**: Observer remains outside

**Recording:**
- Behavioural categories: Specific, observable, mutually exclusive
- Time sampling: Record at intervals
- Event sampling: Record specific events

### Self-Report Methods

**Questionnaires:**
- Open questions: Qualitative data; in-depth
- Closed questions: Quantitative; easy to analyse
- Rating scales: Likert scales (1-5)

**Interviews:**
- Structured: Fixed questions
- Unstructured: Guided conversation
- Semi-structured: Core questions with flexibility

### Correlational Studies

- Measure relationship between co-variables
- Correlation coefficient: -1 to +1
- **Positive correlation**: Both increase together
- **Negative correlation**: One increases, other decreases
- **No correlation**: No relationship

**Limitations:**
- Cannot establish causation
- Third variable problem
- Only detects linear relationships

### Types of Data

| Type | Description | Strengths | Limitations |
|------|-------------|-----------|-------------|
| **Quantitative** | Numerical data | Easy to analyse; objective; replicable | Lacks depth |
| **Qualitative** | Non-numerical; descriptive | Rich; in-depth | Subjective; hard to analyse |
| **Primary** | Collected first-hand | Specific to research aims | Time-consuming |
| **Secondary** | Existing data | Quick; cost-effective | May not fit exact needs |

### Descriptive Statistics

**Measures of Central Tendency:**
- **Mean**: Total ÷ number of values (interval/ratio data)
- **Median**: Middle value when ordered (ordinal data)
- **Mode**: Most frequent value (nominal data)

**Measures of Dispersion:**
- **Range**: Highest - lowest (+1)
- **Standard deviation**: Average distance from mean

### Reliability and Validity

**Reliability** (Consistency):
- **Internal**: Consistency within test (split-half)
- **External**: Consistency over time (test-retest)
- **Inter-rater**: Agreement between observers

**Validity** (Accuracy):
- **Internal**: Did IV cause DV? (controls, no confounds)
- **External**: Can findings generalise?
- **Ecological**: Applies to real life
- **Face**: Appears to measure what it claims
- **Concurrent**: Correlates with existing measures
- **Temporal**: Consistent over time

### Ethical Guidelines (BPS)

**Key Principles:**
1. **Respect**: Dignity, informed consent, right to withdraw
2. **Competence**: Work within expertise
3. **Responsibility**: Protection from harm
4. **Integrity**: Honesty, avoid deception

**Dealing with Ethical Issues:**
- Informed consent (or presumptive consent)
- Right to withdraw
- Debriefing
- Confidentiality
- Protection from harm
- Cost-benefit analysis

### Inferential Statistics

**When to use which test:**

| Test | Level of Data | Design | For |
|------|---------------|--------|-----|
| **Chi-square** | Nominal | Independent groups | Difference |
| **Mann-Whitney U** | Ordinal | Independent groups | Difference |
| **Wilcoxon T** | Ordinal | Repeated measures | Difference |
| **Spearman's rho** | Ordinal | N/A | Correlation |
| **Pearson's r** | Interval | N/A | Correlation |
| **Unrelated t-test** | Interval | Independent groups | Difference |
| **Related t-test** | Interval | Repeated measures | Difference |

**Significance:**
- p ≤ 0.05: Significant (reject null hypothesis)
- Type I error: False positive (reject null when true)
- Type II error: False negative (accept null when false)
`;

// ============================================================================
// PAPER 3: ISSUES AND DEBATES
// ============================================================================

const ISSUES_AND_DEBATES_KNOWLEDGE = `
## Issues and Debates - AQA A-Level Psychology (Paper 3)

### Gender Bias

**Androcentrism:**
- Male behaviour seen as norm
- Female behaviour as deviation
- Example: Kohlberg's moral development based on males

**Alpha Bias:**
- Exaggerates differences between genders
- Example: Freud's view of women as morally inferior

**Beta Bias:**
- Minimises/ignores differences
- Research on males generalised to females
- Example: Fight-or-flight research mainly on males

**Examples in Psychology:**
- Milgram: All male participants
- Asch: All male participants
- Kohlberg: Male moral development stages
- Freud: Penis envy, weaker superego in women

**Implications:**
- Biological theories may justify discrimination
- Validate stereotypes
- Reinforce inequality

**Addressing Gender Bias:**
- Include both genders in research
- Consider gender differences in interpretation
- Feminist psychology: Recognise different experiences

### Cultural Bias

**Ethnocentrism:**
- Judging other cultures by own cultural standards
- Own culture seen as superior
- Western psychology as norm

**Cultural Relativism:**
- Behaviour understood within cultural context
- What is "normal" varies by culture

**Examples:**
- Strange Situation: Western attachment norms
  - Type A common in Germany (independence valued)
  - Type C common in Japan (interdependence valued)
- IQ tests: Culturally loaded content
- DSM criteria: Based on Western concepts

**Imposed Etic:**
- Applying concepts from one culture to another
- Assuming universality
- Example: Strange Situation used cross-culturally

**Addressing Cultural Bias:**
- Emic approach: Study within culture
- Cross-cultural research
- Indigenous psychologists
- Recognise Western bias in theories

### Free Will vs Determinism

**Free Will:**
- Humans choose their behaviour
- Not constrained by external forces
- Moral responsibility for actions
- Humanistic approach: Self-actualisation, personal agency

**Determinism:**
- Behaviour is caused by factors outside our control

**Types of Determinism:**
| Type | Description | Approach |
|------|-------------|----------|
| **Hard** | All behaviour determined; no choice | Biological |
| **Soft** | Some freedom within constraints | Cognitive |
| **Biological** | Genes, brain chemistry | Biological |
| **Environmental** | Conditioning, reinforcement | Behaviourist |
| **Psychic** | Unconscious forces | Psychodynamic |

**Arguments:**
- **For determinism**: Scientific (cause-effect); prediction; treatment
- **For free will**: Subjective experience; moral responsibility; legal system

**Implications:**
- If determined, are people responsible for crimes?
- Treatment approaches assume causes can be addressed
- But people can choose to change (CBT success)

### Nature vs Nurture

**Nature:**
- Biological factors: Genes, hormones, brain
- Inherited, innate characteristics
- Nativist position

**Nurture:**
- Environmental factors
- Learning, experience, socialisation
- Empiricist position

**Interactionist Approach:**
- Both nature and nurture interact
- Gene-environment interaction
- Epigenetics: Environment affects gene expression

**Diathesis-Stress Model:**
- Diathesis: Genetic predisposition (vulnerability)
- Stress: Environmental trigger
- Both needed for disorder to develop
- Example: Schizophrenia, depression

**Examples:**
| Topic | Nature | Nurture |
|-------|--------|---------|
| Schizophrenia | Dopamine, genetics | Expressed emotion, stress |
| Aggression | Testosterone, MAOA | Social learning, culture |
| Attachment | Innate drive | Sensitive caregiving |
| Intelligence | Heritability estimates | Education, stimulation |

### Holism vs Reductionism

**Reductionism:**
- Complex behaviours explained by simpler components
- Bottom-up approach

**Types:**
- **Biological reductionism**: Explaining behaviour through physiology
- **Environmental reductionism**: S-R associations
- **Experimental reductionism**: Isolating variables in lab

**Holism:**
- Behaviour understood as whole system
- Greater than sum of parts
- Top-down approach
- Examples: Humanistic, social psychology

**Arguments:**
- **For reductionism**: Scientific, testable, leads to treatments
- **Against reductionism**: Loses meaning, ignores context
- **For holism**: Ecologically valid, comprehensive
- **Against holism**: Unscientific, untestable

### Idiographic vs Nomothetic

**Nomothetic:**
- General laws applying to everyone
- Quantitative methods
- Large samples, statistics
- Examples: Biological, cognitive approaches

**Idiographic:**
- Individual uniqueness
- Qualitative methods
- Case studies, interviews
- Examples: Humanistic approach, psychodynamic

**Arguments:**
- Both needed in psychology
- Nomothetic establishes patterns; idiographic applies to individuals
- Clinical practice requires idiographic understanding

### Ethical Implications

**Socially Sensitive Research:**
- Potential consequences for participants or group
- Political, social implications
- Examples: IQ and race, eyewitness reliability

**Considerations (Sieber & Stanley, 1988):**
1. **Implications**: Uses and misuses of findings
2. **Uses/Public policy**: How findings applied
3. **Validity**: Ensuring accurate representation
4. **Ownership**: Who controls data and interpretation

**Examples:**
- Bowlby's maternal deprivation: Used against working mothers
- Intelligence research: Misused for eugenic policies
- Eyewitness research: Courts may dismiss testimony

**Guidelines:**
- Consider social implications during design
- Present findings responsibly
- Avoid misinterpretation
- Balance scientific freedom with social responsibility
`;

// ============================================================================
// PAPER 3: RELATIONSHIPS (Option)
// ============================================================================

const RELATIONSHIPS_KNOWLEDGE = `
## Relationships - AQA A-Level Psychology (Paper 3 Option)

### Evolutionary Explanations of Partner Preferences

**Sexual Selection:**
- Traits that increase mating success are selected
- Intra-sexual selection: Competition within sex
- Inter-sexual selection: Mate choice

**Anisogamy:**
- Males: Many small gametes (sperm) - can reproduce often
- Females: Fewer large gametes (eggs) - more investment required

**Consequences:**
- Males: Seek quantity, fertility cues (youth)
- Females: Seek quality, resources, commitment

**Parental Investment (Trivers, 1972):**
- Females invest more (pregnancy, breastfeeding)
- Therefore more selective about mate
- Males compete for access to females

**Buss (1989) - Cross-Cultural Study:**
- 37 cultures, 10,000+ participants
- Found universal preferences:
  - Males prefer younger, attractive females
  - Females prefer older, high-status males with resources

**Evaluation:**
- **Strength (S)**: Cross-cultural evidence supports universal patterns
- **Limitation**: Social roles may explain differences
- **Limitation**: Oversimplified; ignores homosexual relationships
- **Limitation**: Determinist - suggests mate choice is fixed

### Self-Disclosure

**Social Penetration Theory (Altman & Taylor, 1973):**
- Disclosure increases as relationship develops
- "Onion model" - peeling back layers
- Breadth (range of topics) and depth (intimacy)

**Norm of Reciprocity:**
- Disclosure is reciprocated
- Builds trust and intimacy
- Gradual, matched disclosure

**Evaluation:**
- **Strength (S)**: Research supports link to satisfaction
- **Limitation**: Cultural differences in appropriate disclosure
- **Limitation**: Gender differences not always considered

### Physical Attractiveness

**Matching Hypothesis (Walster et al., 1966):**
- People seek partners of similar attractiveness
- Forms realistic compromise between desire and fear of rejection

**Walster et al. (1966) - Computer Dance Study:**
- 752 students randomly paired
- Attractiveness rated by researchers
- Only attractiveness predicted liking and desire for further dates
- Did not support matching hypothesis

**Replication:**
- Later studies with choice supported matching
- More time to choose = matching more evident

**Halo Effect:**
- Attractive people perceived as having other positive traits
- Assumed to be more intelligent, successful, sociable

**Evaluation:**
- **Strength**: Consistent finding across studies
- **Limitation**: Ignores other factors (personality, similarity)
- **Limitation**: What is "attractive" varies culturally

### Filter Theory (Kerckhoff & Davis, 1962)

**Filters narrow potential partners:**

1. **Social/Demographic Variables** (First filter):
   - Proximity, social class, education, ethnicity
   - Determines who we meet

2. **Similarity in Attitudes** (Second filter):
   - Shared values and beliefs
   - Important in first 18 months

3. **Complementarity of Needs** (Third filter):
   - Partners meet each other's needs
   - Important after 18 months

**Evaluation:**
- **Strength**: Explains process of partner selection
- **Limitation**: Original study limited (student couples)
- **Limitation**: Internet relationships bypass traditional filters
- **Limitation**: Sequential model may be too rigid

### Social Exchange Theory (Thibaut & Kelley, 1959)

**Economic Model:**
- Relationships based on profit and loss
- Rewards (companionship, sex) vs Costs (time, effort)
- Seek to maximise rewards, minimise costs

**Comparison Level (CL):**
- Standard based on past relationships
- If current relationship exceeds CL = satisfied

**Comparison Level for Alternatives (CLalt):**
- What could be gained from alternative relationship
- If current > CLalt = stay; if CLalt > current = leave

**Evaluation:**
- **Strength (A)**: Explains why people stay in unsatisfying relationships
- **Limitation**: Ignores equity - fairness also matters
- **Limitation**: Selfish view of relationships
- **Limitation**: Difficult to quantify rewards and costs

### Equity Theory (Walster et al., 1978)

**Fairness Model:**
- Partners should give and receive equally relative to inputs
- Inequity causes distress
- Overbenefited: Guilt
- Underbenefited: Anger

**Restoring Equity:**
- Change inputs (give more/less)
- Change perception of inputs
- Leave relationship

**Evaluation:**
- **Strength (S)**: Research supports link between inequity and dissatisfaction
- **Limitation**: Individual differences - some tolerate inequity
- **Limitation**: Cultural bias - more relevant to individualistic cultures

### Rusbult's Investment Model (1983)

**Three factors predict commitment:**

1. **Satisfaction** (CL comparison):
   - Rewards minus costs

2. **Quality of Alternatives** (CLalt):
   - What else is available

3. **Investment Size**:
   - What would be lost if relationship ends
   - Intrinsic: Time, effort, emotions
   - Extrinsic: Shared possessions, mutual friends

**Commitment = Satisfaction - Alternatives + Investment**

**Evaluation:**
- **Strength (S)**: Strong research support (Le & Agnew, 2003 meta-analysis)
- **Strength (A)**: Explains abusive relationships (high investment)
- **Limitation**: Focus on commitment not satisfaction

### Duck's Phase Model of Relationship Breakdown (1984)

**Stages of Breakdown:**

| Phase | Focus | Key Processes |
|-------|-------|---------------|
| **Intra-psychic** | Private | Focus on partner's faults; cost-benefit analysis |
| **Dyadic** | Couple | Confrontation; discussion; attempts to repair |
| **Social** | Others | Tell friends/family; seek support; sides form |
| **Grave-dressing** | Public | Create accounts of breakdown; protect self-esteem |

**Later Addition:**
- **Resurrection**: Moving on; learning from experience

**Evaluation:**
- **Strength (A)**: Practical applications - intervention at different stages
- **Limitation**: Assumes sequential stages - may overlap
- **Limitation**: Focused on breakdown, not repair
- **Limitation**: Culturally specific - Western individualistic view

### Virtual Relationships in Social Media

**Reduced Cues Theory (Sproull & Kiesler):**
- Online communication lacks non-verbal cues
- Less inhibition online
- More direct communication

**Hyperpersonal Model (Walther, 1996):**
- Online relationships can be more intense
- Selective self-presentation
- Idealisation of partner
- Can develop quickly

**Evaluation:**
- **Strength (S)**: Explains online relationship formation
- **Limitation**: Technology evolves (video calls add cues)
- **Limitation**: Individual differences in online behaviour

### Parasocial Relationships

**Definition:** One-sided relationship where one person invests emotional energy but the other is unaware (usually celebrity)

**Levels of Parasocial Relationship (McCutcheon):**
1. **Entertainment-social**: Casual interest
2. **Intense-personal**: Deeper connection; identity
3. **Borderline-pathological**: Obsessive; uncontrollable fantasies

**Absorption-Addiction Model:**
- Weak identity leads to absorption in celebrity
- Increasing levels of involvement to maintain satisfaction
- Can become addictive

**Attachment Theory Explanation:**
- Insecure attachment leads to parasocial relationships
- Safe substitute for real relationships
- No risk of rejection

**Evaluation:**
- **Strength (S)**: Research links insecure attachment to parasocial relationships
- **Limitation**: Correlation not causation
- **Limitation**: Most parasocial relationships are harmless
`;

// ============================================================================
// PAPER 3: SCHIZOPHRENIA (Option)
// ============================================================================

const SCHIZOPHRENIA_KNOWLEDGE = `
## Schizophrenia - AQA A-Level Psychology (Paper 3 Option)

### Classification and Diagnosis

**Positive Symptoms** (additions to behaviour):
- **Hallucinations**: False sensory experiences (usually auditory)
- **Delusions**: False beliefs (paranoid, grandiose, control)
- **Disorganised speech**: Incoherent, "word salad"
- **Grossly disorganised behaviour**: Unpredictable, inappropriate

**Negative Symptoms** (loss of normal function):
- **Affective flattening**: Reduced emotional expression
- **Alogia**: Poverty of speech
- **Avolition**: Lack of motivation
- **Anhedonia**: Inability to experience pleasure
- **Social withdrawal**

**DSM-5 Criteria:**
- 2+ symptoms for at least 1 month
- At least one must be hallucinations, delusions, or disorganised speech
- Continuous signs for at least 6 months
- Impairment in functioning

### Issues with Classification and Diagnosis

**Reliability:**
- Inter-rater reliability: Do different clinicians agree?
- Early studies: Poor reliability
- DSM-5: Improved but still issues

**Validity:**
- Does diagnosis reflect real condition?
- Symptom overlap with other disorders
- Rosenhan (1973): Pseudopatients admitted with schizophrenia diagnosis

**Co-morbidity:**
- Often occurs with depression, anxiety, substance abuse
- Makes diagnosis and treatment complex

**Symptom Overlap:**
- Symptoms shared with bipolar disorder, depression
- Boundaries between disorders unclear

### Biological Explanations

**Genetic Explanations:**

**Evidence from Family Studies:**
- Risk increases with genetic relatedness
- General population: 1%
- Sibling: 9%
- One parent: 13%
- Both parents: 46%

**Twin Studies:**
| Study | MZ Concordance | DZ Concordance |
|-------|----------------|----------------|
| Gottesman & Shields (1966) | 42% | 9% |
| Joseph (2004) pooled | 40.4% | 7.4% |

**Adoption Studies:**
- Tienari et al. (2000): Finnish adoptees
- Biological mother with schizophrenia = higher risk in adopted children
- Even when raised by healthy adoptive parents

**Candidate Genes:**
- Multiple genes involved (polygenic)
- No single "schizophrenia gene"
- DISC1, COMT, neuregulin

**Evaluation:**
- **Strength (S)**: Strong evidence from twin/adoption studies
- **Limitation**: Not 100% concordance - environment matters
- **Limitation**: Gene-environment interaction needed (diathesis-stress)

### Dopamine Hypothesis

**Original Hypothesis:**
- Excess dopamine causes schizophrenia
- Based on amphetamine psychosis and antipsychotic action

**Revised Hypothesis:**
- Dopamine dysregulation in different pathways
- **Mesolimbic pathway**: Overactivity --> positive symptoms
- **Mesocortical pathway**: Underactivity --> negative symptoms

**Evidence:**
- Antipsychotics block D2 receptors --> reduce symptoms
- Amphetamines increase dopamine --> psychotic symptoms
- L-dopa (increases dopamine) --> psychotic symptoms
- PET scans show elevated D2 receptor density

**Evaluation:**
- **Strength (S)**: Explains antipsychotic effectiveness
- **Strength (A)**: Led to drug treatments
- **Limitation**: Antipsychotics take weeks to work (dopamine blocked immediately)
- **Limitation**: Doesn't explain negative symptoms well
- **Limitation**: Other neurotransmitters involved (glutamate, serotonin)

### Neural Correlates

**Brain Structure Abnormalities:**
- Enlarged ventricles (Suddath et al., 1990)
- Reduced prefrontal grey matter
- Reduced hippocampal volume
- Abnormal temporal lobe

**Evidence:**
- Meta-analysis (Wright et al., 2000): Consistent ventricular enlargement
- MZ twins discordant for schizophrenia show differences

**Evaluation:**
- **Strength (V)**: Objective measures (brain scans)
- **Limitation**: Correlation not causation
- **Limitation**: May be consequence of disorder or medication
- **Limitation**: Not all patients show abnormalities

### Psychological Explanations

**Family Dysfunction:**

**Double-Bind Theory (Bateson, 1956):**
- Contradictory messages from parent
- Child cannot respond correctly
- Leads to faulty communication patterns
- Example: "Come and give me a hug" with hostile body language

**Expressed Emotion (EE):**
- High levels of criticism, hostility, emotional over-involvement
- Predicts relapse (not onset)
- Leff et al. (1982): High EE = 51% relapse; Low EE = 13%

**Evaluation:**
- **Strength (S)**: Research supports EE and relapse
- **Strength (A)**: Family therapy reduces relapse
- **Limitation**: Double-bind lacks research support
- **Limitation**: May be consequence not cause
- **Limitation**: Blames family - ethical issues

**Cognitive Explanations:**

**Dysfunctional Thought Processing:**
- Problems with attention and memory
- Cannot filter irrelevant information
- Leads to sensory overload and bizarre experiences

**Faulty Reality Monitoring:**
- Cannot distinguish internal from external
- Inner speech perceived as external voice

**Metarepresentation Dysfunction:**
- Difficulty representing own thoughts
- Leads to delusions of control

**Evaluation:**
- **Strength (A)**: Explains specific symptoms (hallucinations as inner speech)
- **Strength (A)**: Supports CBT for psychosis
- **Limitation**: Doesn't explain origins of dysfunction
- **Limitation**: May be consequence not cause

### Drug Therapy

**Typical Antipsychotics:**
- First generation: Chlorpromazine, haloperidol
- Block D2 dopamine receptors
- Effective for positive symptoms
- **Side effects**: Tardive dyskinesia, sedation, weight gain

**Atypical Antipsychotics:**
- Second generation: Clozapine, risperidone, olanzapine
- Block D2 and serotonin (5-HT) receptors
- Better for negative symptoms
- Fewer movement side effects
- **Side effects**: Agranulocytosis (clozapine), metabolic syndrome

**Evaluation:**
- **Strength (S)**: Effective for many patients
- **Strength (A)**: Allows community living
- **Limitation (E)**: Serious side effects
- **Limitation**: Don't work for everyone (1/3 show little improvement)
- **Limitation**: Treat symptoms not cause
- **Limitation**: Relapse when stopped

### Cognitive Behaviour Therapy (CBT)

**Procedure:**
1. **Assessment**: Identify specific symptoms and beliefs
2. **Engagement**: Build therapeutic relationship
3. **Normalisation**: Psychotic experiences on continuum
4. **Critical collaborative analysis**: Examine evidence for beliefs
5. **Reality testing**: Test predictions
6. **Developing alternative explanations**: For experiences

**Focus:**
- Hallucinations: Reattribute to own thoughts
- Delusions: Challenge evidence, consider alternatives
- Develop coping strategies
- Reduce distress

**Evaluation:**
- **Strength (S)**: Meta-analysis shows significant effects (Wykes et al., 2008)
- **Strength**: Helps even when drugs don't work
- **Strength (E)**: No side effects
- **Limitation**: Requires engagement and insight
- **Limitation**: Cannot be used alone in severe cases
- **Limitation**: Long-term effectiveness uncertain

### Family Therapy

**Goals:**
- Reduce expressed emotion
- Improve communication
- Psychoeducation about schizophrenia
- Problem-solving skills
- Reduce stress

**Components:**
- Information about condition
- Stress management
- Improve family functioning
- Relapse prevention

**Evaluation:**
- **Strength (S)**: Pharoah et al. (2010) - reduces relapse
- **Strength (A)**: Cost-effective
- **Strength**: Involves whole family
- **Limitation**: Blames family implicitly
- **Limitation**: Requires family involvement
- **Limitation**: Not all families cooperative

### Token Economy

**Based on Operant Conditioning:**
- Rewards (tokens) for desirable behaviours
- Tokens exchanged for privileges
- Targets self-care, social behaviours

**Procedure:**
1. Identify target behaviours
2. Establish token value and reward system
3. Apply consistently
4. Gradually increase requirements

**Evaluation:**
- **Strength (S)**: Paul & Lentz (1977) - effective for negative symptoms
- **Strength (A)**: Immediate, tangible reinforcement
- **Limitation**: Behaviour may not generalise outside institution
- **Limitation (E)**: Ethical concerns - manipulation, autonomy
- **Limitation**: Staff training required
- **Limitation**: Cannot address underlying condition

### Interactionist Approach

**Diathesis-Stress Model:**
- **Diathesis**: Genetic/biological vulnerability
- **Stress**: Environmental triggers (trauma, drug use, life events)
- Both required for disorder to develop

**Implications:**
- Explains why genetics not deterministic
- Justifies combined treatment approach
- Acknowledges complexity of disorder

**Treatment Implications:**
- Address biological vulnerability (medication)
- Reduce environmental stress (therapy)
- Combination most effective
`;

// ============================================================================
// MODEL ANSWERS AND WORKED EXAMPLES
// ============================================================================

const MODEL_ANSWERS = `
## Model Answers for AQA A-Level Psychology

### 4-Mark Question: Outline

**Question:** Outline what is meant by the term 'agentic state'. [4 marks]

**Model Answer:**
The agentic state is a mental state proposed by Milgram to explain obedience (1 mark). In this state, individuals see themselves as agents carrying out another person's wishes, rather than acting on their own free will (1 mark). This means they pass responsibility for their actions to the authority figure giving orders (1 mark). The shift from an autonomous state (where we feel responsible) to an agentic state is called the 'agentic shift' and occurs when we perceive someone as a legitimate authority (1 mark).

---

### 8-Mark Question: Application

**Question:** Alisha has been experiencing flashbacks and nightmares since witnessing a car accident. She has started avoiding driving and feels constantly on edge.

Using your knowledge of the behavioural approach, explain how Alisha's symptoms might have developed. [8 marks]

**Model Answer (AO1/AO2):**

Alisha's symptoms can be explained through the two-process model, which suggests that phobias and fear responses are acquired through classical conditioning and maintained through operant conditioning.

**Classical Conditioning (Acquisition):**
Before the accident, driving was a neutral stimulus (NS) for Alisha. The car accident itself was an unconditioned stimulus (UCS) that naturally produced a fear response (UCR). During the accident, the neutral stimulus (driving) was paired with the frightening event. As a result, driving has now become a conditioned stimulus (CS) that triggers a conditioned response (CR) of fear. This explains her flashbacks and nightmares, as driving-related cues now automatically trigger the fear response.

**Generalisation:**
The fear response may have generalised to other similar stimuli. This could explain why Alisha feels 'constantly on edge' - stimuli associated with driving (cars, roads, traffic sounds) may all trigger anxiety due to stimulus generalisation.

**Operant Conditioning (Maintenance):**
Alisha's avoidance of driving is maintained through negative reinforcement. By avoiding driving, she escapes the anxiety she would feel, which is rewarding. This reinforces the avoidance behaviour, making it more likely to continue. However, this prevents extinction from occurring, as she never learns that driving without an accident is possible.

The two-process model therefore provides a coherent explanation for both the initial development of Alisha's symptoms through association learning and their continuation through reinforcement of avoidance behaviour.

---

### 12-Mark Question: Describe and Evaluate

**Question:** Describe and evaluate the working memory model. [12 marks]

**Model Answer:**

**AO1 - Description:**

The working memory model (WMM) was proposed by Baddeley and Hitch (1974) as an alternative to the unitary short-term memory store in the multi-store model. It suggests that short-term memory is not a single store but a multi-component system for actively processing different types of information.

The central executive is the key component. It has limited capacity and acts as an attentional control system, directing attention to specific tasks and coordinating the slave systems. It allocates resources and decides what to attend to.

The phonological loop processes verbal and acoustic information. It consists of the phonological store (the 'inner ear'), which holds speech-based sounds for 1-2 seconds, and the articulatory control process (the 'inner voice'), which rehearses information through silent speech.

The visuo-spatial sketchpad (the 'inner eye') processes visual and spatial information. It stores information about what things look like and the physical relationship between objects. It may have separate components for visual and spatial processing.

The episodic buffer, added by Baddeley in 2000, is a general storage system that integrates information from the other components and from long-term memory. It has limited capacity of about 4 chunks.

**AO3 - Evaluation:**

One strength is that the WMM is supported by dual-task studies. Baddeley (1975) showed that participants could complete a verbal reasoning task while using the visuo-spatial sketchpad (tracking a moving light), but performance was impaired when two verbal tasks were combined. This supports the existence of separate components that can work independently.

Another strength is case study evidence. Patient KF had impaired verbal memory but intact visual memory following brain damage, supporting the distinction between phonological loop and visuo-spatial sketchpad. This provides evidence that these are separate systems with different neural substrates.

The model has practical applications. Understanding working memory has informed educational practices, such as designing materials that don't overload any single component. It also helps explain conditions like ADHD, where central executive function is impaired.

However, a limitation is that the central executive remains poorly understood. It is described as having 'limited capacity' and controlling 'attention' but this is vague. Critics argue it is more of a concept than an explanation, and may need to be further subdivided.

Additionally, the episodic buffer, added in 2000, is still relatively new and not well understood. It was added to address limitations but its role in integrating information from different components and long-term memory requires further clarification.

Overall, while the WMM provides a more detailed account of short-term memory than the multi-store model, some components, particularly the central executive, lack specificity.

---

### 16-Mark Question: Discuss

**Question:** Discuss research into the effects of misleading information on eyewitness testimony. [16 marks]

**Model Answer:**

**AO1 Content:**

Research has shown that misleading information can significantly affect the accuracy of eyewitness testimony. Loftus and Palmer (1974) conducted a key study investigating the effect of leading questions on memory for a car accident. In their first experiment, participants watched a film of a car crash and were asked to estimate the speed using different verbs: 'smashed', 'collided', 'bumped', 'hit', or 'contacted'. Those given the word 'smashed' estimated significantly higher speeds (40.5 mph) compared to those given 'contacted' (31.8 mph).

In a second experiment, Loftus and Palmer found that participants in the 'smashed' condition were more likely to report seeing broken glass one week later, even though there was none in the original film. This suggests that the misleading verb actually altered their memory of the event, not just their verbal response.

Further research into post-event discussion has shown that witnesses can contaminate each other's memories. Gabbert et al. (2003) had pairs of participants watch different videos of the same event. When allowed to discuss, 71% of participants reported details they could only have learned from their partner - a phenomenon called memory conformity.

Loftus (1975) demonstrated that the wording of questions can create false memories. When asked if they had seen 'a' broken headlight versus 'the' broken headlight, those given 'the' were more likely to report seeing it, even when there was no broken headlight.

**AO3 Content:**

A strength of Loftus and Palmer's research is its practical applications. The findings have had significant impact on legal practice, including how police interviews are conducted. The development of the Cognitive Interview, which avoids leading questions and encourages witnesses to report everything, was directly informed by this research.

However, the research has been criticised for lacking ecological validity. Participants watched a film clip, which is very different from witnessing a real accident. Real-world events involve higher arousal and personal significance, which may affect memory differently. Yuille and Cutshall (1986) studied real witnesses to a shooting and found their memories remained accurate even after leading questions, suggesting laboratory findings may not generalise.

The research may also be affected by demand characteristics. Participants may have changed their estimates to please the researcher rather than because their actual memory changed. The distinction between genuine memory change (substitution) and response bias is difficult to establish.

A further issue is that Loftus's research focuses on relatively peripheral details (speed, broken glass) rather than central details. Research suggests that central details of an event are more resistant to misleading information. Therefore, the findings may overestimate the vulnerability of memory to post-event influence.

Nevertheless, the research has been replicated many times with consistent findings. Meta-analyses confirm the basic effect of misleading information on memory, suggesting the phenomenon is robust even if the magnitude may vary.

The findings raise important issues for the legal system. If witnesses can be easily misled by questioning, this has serious implications for justice. However, complete acceptance of this research could lead to dismissal of valid eyewitness testimony. A balanced approach recognises that while memory is reconstructive, it is not completely unreliable.

The research supports reconstructive memory theory, suggesting that memories are actively rebuilt each time they are recalled, incorporating new information. This has implications beyond eyewitness testimony, for our understanding of memory more broadly.

In conclusion, research consistently demonstrates that misleading information can affect eyewitness testimony, though the extent of this effect in real-world situations remains debated. The findings have important practical and theoretical implications.
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name, subtopic);
  const relevantStudies = getRelevantStudies(topic.name, subtopic);

  return `You are an expert AQA A-Level Psychology examiner creating exam-style questions.

## AQA PSYCHOLOGY STYLE
**AQA's Comprehensive Research-Focused Approach:** Clear, structured questions with exceptional research methods integration and broad theoretical scope.
- **Strong research methods emphasis** - distinctive integration of research methodology throughout all psychological topics
- **Broad theoretical coverage** - comprehensive approach covering wide scope of psychological theories and applications
- **Clear and structured format** - most predictable A-Level psychology assessment with transparent marking criteria
- **Greatest topic range** - Paper 3 offers choice from 9 specialist topics across 3 categories for maximum flexibility
- **Broad support ecosystem** - most popular board (65,000+ candidates) with extensive resources and materials
- **Balanced question structure** - clear 16-mark essay format with 6 marks description and 10 marks evaluation

${AQA_ALEVEL_PSYCH_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_PSYCH_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_PSYCH_QUESTION_TEMPLATES}

${AQA_ALEVEL_PSYCH_MARK_SCHEME_CONVENTIONS}

${GRAVES_EVALUATION_FRAMEWORK}

${topicKnowledge}

${relevantStudies}

${RESEARCH_METHODS_KNOWLEDGE}

${ISSUES_AND_DEBATES_KNOWLEDGE}

${MODEL_ANSWERS}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA A-Level Psychology specification.

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
1. **A-Level Standard**: Appropriate for 16-18 year olds studying A-Level Psychology
2. **Authentic AQA Style**: Match real AQA paper format and command words
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Knowledge-based questions (2-6 marks)
   - Medium: Application or short evaluation (8-12 marks)
   - Hard: Extended essay questions (16 marks)
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
- "content": Question text (include scenario if appropriate for application questions)
- "marks": Total marks
- "solution": Model answer or indicative content
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getAQAALevelPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = getTopicSpecificGuidance(topic.name, subtopic);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1).

**Question Types for Easy:**
- "Outline what is meant by [concept]" [2 marks]
- "Identify two [features/factors]" [2 marks]
- "Explain one [limitation/strength] of [theory/study]" [4 marks]
- "Briefly outline [theory/explanation]" [4 marks]
- "Name two types of [concept]" [2 marks]

**Mark Scheme Format:**
- Outline 2 marks: Identification + Elaboration
- Identify: 1 mark per correct point
- Explain 4 marks: Point + Explanation + Elaboration + Link

${topicGuidance.easy}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring application or evaluation (AO2/AO3).

**Question Types for Medium:**
- "Describe and evaluate [theory/explanation]" [12 marks]
- Application question with scenario [6-8 marks]
- "Explain [concept]. Refer to research in your answer" [6 marks]
- "Using your knowledge of [topic], explain [scenario]" [8 marks]

**12-Mark Levels:**
- Level 4 (10-12): Accurate knowledge; thorough discussion
- Level 3 (7-9): Knowledge evident; discussion mostly effective
- Level 2 (4-6): Limited knowledge; discussion partly effective
- Level 1 (1-3): Very limited; evaluation ineffective

**8-Mark Application Questions:**
- Must include realistic scenario
- Credit application to scenario (AO2)
- Expect knowledge demonstrated (AO1)

${topicGuidance.medium}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 16-mark essay question requiring discussion/evaluation (AO1 + AO3).

**Question Types for Hard:**
- "Discuss [theory/explanation/research]" [16 marks]
- "Outline and evaluate [approach/perspective]" [16 marks]
- "Discuss the role of [factor] in [topic]" [16 marks]
- "Discuss [research/explanations] for [phenomenon]" [16 marks]

**16-Mark Levels (AO1: 6 marks, AO3: 10 marks):**
- Level 4 (13-16): Knowledge accurate/well-detailed; Discussion thorough/effective
- Level 3 (9-12): Knowledge evident with inaccuracies; Discussion mostly effective
- Level 2 (5-8): Limited knowledge; Focus on description; Discussion partly effective
- Level 1 (1-4): Very limited knowledge; Evaluation absent/ineffective

**Include indicative content covering:**
- Key theories/explanations to describe (AO1)
- Relevant research studies with procedures and findings (AO1)
- Evaluation points using GRAVES framework (AO3):
  - Generalisability, Reliability, Application, Validity, Ethics, Supporting studies
- Issues and debates where relevant (nature/nurture, determinism, reductionism)
- Balanced discussion with clear conclusion

${topicGuidance.hard}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('psychology', difficulty);

  return `Generate an AQA A-Level Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${enhancedMarkSchemeGuidance}

**Critical Requirements:**
- Use authentic AQA command words
- Include mark allocation in square brackets
- For evaluation questions, expect balanced discussion
- Include relevant research studies in mark scheme
- Use accurate psychological terminology
- For application questions, create realistic scenarios

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full level descriptors, indicative content with specific studies and evaluation using GRAVES framework, model answer structure, and examiner tips",
  "markScheme": ["marking point 1", "marking point 2", ...]
}`;
}

// Helper function
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 6 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 16, max: 16 };
  }
}

function getTopicSpecificKnowledge(topicName: string, subtopic: string): string {
  const topicKnowledgeMap: Record<string, string> = {
    'Social Influence': SOCIAL_INFLUENCE_KNOWLEDGE + '\n\n' + MILGRAM_1963_STUDY + '\n\n' + MOSCOVICI_1969_STUDY,
    'Memory': MEMORY_KNOWLEDGE + '\n\n' + EYEWITNESS_TESTIMONY_KNOWLEDGE,
    'Attachment': ATTACHMENT_KNOWLEDGE + '\n\n' + AINSWORTH_STRANGE_SITUATION,
    'Psychopathology': PSYCHOPATHOLOGY_KNOWLEDGE,
    'Approaches': APPROACHES_KNOWLEDGE,
    'Biopsychology': BIOPSYCHOLOGY_KNOWLEDGE,
    'Research Methods': RESEARCH_METHODS_KNOWLEDGE,
    'Issues and Debates': ISSUES_AND_DEBATES_KNOWLEDGE,
    'Relationships': RELATIONSHIPS_KNOWLEDGE,
    'Schizophrenia': SCHIZOPHRENIA_KNOWLEDGE,
  };

  return topicKnowledgeMap[topicName] || '';
}

function getRelevantStudies(topicName: string, subtopic: string): string {
  const studyMap: Record<string, string[]> = {
    'Social Influence': [MILGRAM_1963_STUDY, MOSCOVICI_1969_STUDY],
    'Memory': [EYEWITNESS_TESTIMONY_KNOWLEDGE],
    'Attachment': [AINSWORTH_STRANGE_SITUATION],
  };

  const studies = studyMap[topicName] || [];
  return studies.join('\n\n');
}

function getTopicSpecificGuidance(topicName: string, subtopic: string): { easy: string; medium: string; hard: string } {
  const guidanceMap: Record<string, { easy: string; medium: string; hard: string }> = {
    'Social Influence': {
      easy: `**Topic-specific guidance:**
- For conformity: Include types (compliance, identification, internalisation), Asch study details
- For obedience: Focus on Milgram procedure, findings, variations, explanations (agentic state, legitimacy)
- For minority influence: Include consistency, commitment, flexibility, Moscovici
- Key terms: Agentic state, autonomous state, normative/informational social influence`,
      medium: `**Topic-specific guidance:**
- For 12-mark: Describe and evaluate theory (e.g., agentic state) or study (e.g., Milgram variations)
- For application: Create scenario involving obedience/conformity for explanation
- Include GRAVES evaluation: Generalisability (sample), Validity (ecological), Ethics (Milgram's ethical issues)
- Consider supporting studies: Hofling nurses, Bickman uniforms`,
      hard: `**Topic-specific guidance:**
- Integrate issues and debates: Situational vs dispositional factors, determinism, ethics of research
- Consider social change through minority influence
- Evaluate real-world applications (Holocaust understanding, whistleblowing)
- Compare explanations (agentic state vs social identity)
- Draw on multiple studies for balanced evaluation`
    },
    'Memory': {
      easy: `**Topic-specific guidance:**
- For MSM: Include sensory register, STM, LTM characteristics (capacity, duration, encoding)
- For WMM: Include central executive, phonological loop, visuo-spatial sketchpad, episodic buffer
- For EWT: Loftus and Palmer procedure and findings
- Key terms: Encoding, storage, retrieval, articulatory control process`,
      medium: `**Topic-specific guidance:**
- For describe and evaluate: Compare MSM and WMM, or evaluate one model in detail
- For application: Create scenario involving memory failure for explanation using model
- Include research evidence: Baddeley encoding, Peterson and Peterson duration, case studies (HM, KF)
- Consider practical applications (Cognitive Interview)`,
      hard: `**Topic-specific guidance:**
- Discuss research into factors affecting EWT (anxiety, misleading information)
- Evaluate memory models with reference to case studies and experiments
- Consider reductionism debate (is memory this simple?)
- Include issues of ecological validity in memory research
- Draw on both positive and negative evaluation points`
    },
    'Attachment': {
      easy: `**Topic-specific guidance:**
- For caregiver-infant interactions: Include interactional synchrony, reciprocity
- For Bowlby: Monotropy, internal working model, critical period, maternal deprivation
- For Ainsworth: Strange Situation procedure, attachment types, caregiver sensitivity
- Key terms: Proximity-seeking, secure base, separation anxiety`,
      medium: `**Topic-specific guidance:**
- For describe and evaluate: Bowlby's theory, Strange Situation, Romanian orphan research
- For application: Create scenario involving attachment behaviour for explanation
- Include cultural variations (Van IJzendoorn & Kroonenberg)
- Consider criticisms: Temperament hypothesis, multiple attachments`,
      hard: `**Topic-specific guidance:**
- Discuss influence of early attachment on later relationships (continuity hypothesis)
- Evaluate maternal deprivation hypothesis with reference to deprivation vs privation
- Consider nature-nurture debate in attachment
- Include Romanian orphan studies (Rutter) for institutional care
- Address ethical issues in attachment research`
    },
    'Psychopathology': {
      easy: `**Topic-specific guidance:**
- For definitions of abnormality: Statistical infrequency, deviation from social norms, failure to function, deviation from ideal mental health
- For phobias: Behavioural characteristics, two-process model, Little Albert
- For depression: Cognitive triad, negative schemas
- For OCD: Obsessions, compulsions, genetic/neural explanations`,
      medium: `**Topic-specific guidance:**
- For describe and evaluate: Specific treatment (SD, flooding, CBT, drug therapy)
- For application: Create scenario of person with disorder for explanation
- Include research evidence for treatments
- Consider ethical issues in treatment (flooding trauma, drug side effects)`,
      hard: `**Topic-specific guidance:**
- Discuss explanations for one disorder (biological vs psychological)
- Evaluate treatments with reference to research evidence
- Consider issues of diagnosis (validity, reliability, cultural bias)
- Include comparison of different approaches to understanding/treating disorders
- Address free will vs determinism in treatment`
    },
    'Approaches': {
      easy: `**Topic-specific guidance:**
- For each approach: Key assumptions, methods, key figures
- Behaviourist: Classical and operant conditioning
- Cognitive: Information processing, schemas
- Biological: Genetics, neurochemistry, evolution
- Psychodynamic: Unconscious, psychosexual stages, defence mechanisms
- Humanistic: Free will, self-actualisation, conditions of worth`,
      medium: `**Topic-specific guidance:**
- Compare two approaches (e.g., behaviourist vs cognitive)
- Evaluate one approach in terms of strengths and limitations
- Apply approach to understanding behaviour
- Include key studies as evidence`,
      hard: `**Topic-specific guidance:**
- Discuss relative contributions of approaches
- Integrate issues and debates (reductionism, determinism, scientific status)
- Compare approaches on key dimensions (nature/nurture, free will/determinism)
- Evaluate usefulness of different approaches for understanding behaviour`
    },
    'Biopsychology': {
      easy: `**Topic-specific guidance:**
- Nervous system: CNS, PNS, sympathetic/parasympathetic
- Neurons: Types, synaptic transmission
- Brain areas: Localisation of function (motor, sensory, language)
- Biological rhythms: Circadian, ultradian, infradian`,
      medium: `**Topic-specific guidance:**
- Evaluate split-brain research (Sperry) with reference to lateralisation
- Discuss ways of studying the brain (fMRI, EEG, post-mortem)
- Apply knowledge to understanding behaviour/disorders
- Include brain plasticity and functional recovery`,
      hard: `**Topic-specific guidance:**
- Discuss localisation vs holistic views of brain function
- Evaluate methods of studying the brain
- Consider implications of biological explanations (determinism, reductionism)
- Include evidence from case studies and brain imaging`
    },
    'Schizophrenia': {
      easy: `**Topic-specific guidance:**
- Classification: Positive and negative symptoms
- Biological explanations: Dopamine hypothesis, genetics, neural correlates
- Psychological explanations: Family dysfunction, cognitive explanations
- Treatments: Typical and atypical antipsychotics, CBT, family therapy`,
      medium: `**Topic-specific guidance:**
- Describe and evaluate one explanation (dopamine hypothesis, genetics)
- Describe and evaluate one treatment (drug therapy, CBT)
- Include research evidence
- Consider issues of reliability and validity in diagnosis`,
      hard: `**Topic-specific guidance:**
- Discuss biological and/or psychological explanations
- Evaluate interactionist approach (diathesis-stress)
- Consider issues in classification and diagnosis
- Include multiple treatments and their effectiveness
- Address nature-nurture, reductionism, determinism`
    },
    'Relationships': {
      easy: `**Topic-specific guidance:**
- Evolutionary explanations: Sexual selection, anisogamy, parental investment
- Theories: Social exchange, equity, investment model
- Virtual relationships: Reduced cues, hyperpersonal model
- Parasocial relationships: Levels, absorption-addiction model`,
      medium: `**Topic-specific guidance:**
- Describe and evaluate one theory (social exchange, equity, investment)
- Evaluate evolutionary explanations of partner preferences
- Apply theory to relationship scenario
- Include research evidence (Buss, Rusbult)`,
      hard: `**Topic-specific guidance:**
- Discuss factors affecting attraction and formation
- Evaluate theories of romantic relationships
- Consider Duck's phase model of breakdown
- Include cultural differences in relationships
- Address issues of gender bias, determinism`
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

  return `Generate a research methods question for AQA A-Level Psychology.

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

For HARD (16 marks):
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

  return `Generate an issues and debates question for AQA A-Level Psychology.

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

For HARD (16 marks):
- "Discuss gender and/or cultural bias in psychology" [16 marks]
- "Discuss the free will vs determinism debate in psychology" [16 marks]
- "Discuss ethical implications of research" [16 marks]

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
    'Asch': SOCIAL_INFLUENCE_KNOWLEDGE,
    'Moscovici': MOSCOVICI_1969_STUDY,
    'Ainsworth': AINSWORTH_STRANGE_SITUATION,
    'Bowlby': ATTACHMENT_KNOWLEDGE,
    'Loftus and Palmer': EYEWITNESS_TESTIMONY_KNOWLEDGE,
  };

  return `Generate a question about the classic study: ${studyName}

${studyDetails[studyName] || ''}

**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

**Classic Study Question Types:**

For EASY (2-6 marks):
- "Outline the procedure of [study]" [4 marks]
- "Identify two findings from [study]" [2 marks]
- "Explain one ethical issue with [study]" [4 marks]

For MEDIUM (8-12 marks):
- "Describe and evaluate [study]" [12 marks]
- "Explain what [study] tells us about [topic]" [6 marks]

For HARD (16 marks):
- Extended discussion integrating study with evaluation using GRAVES
- Comparison with other studies or explanations

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

  return `Generate an application/scenario-based question for AQA A-Level Psychology.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}
**Marks**: ${markRange.min}-${markRange.max}

**Application Question Format:**
These questions present a scenario and ask students to apply psychological knowledge (AO2).

**Example formats:**
- "Read the scenario below. Using your knowledge of [concept], explain [aspect of scenario]." [4-6 marks]
- "Jake has been showing signs of [behaviour]. Using your knowledge of [topic], explain why Jake might behave this way." [4 marks]
- "Referring to [theory/model], explain [character's] experience." [6 marks]

**Requirements:**
1. Create a realistic, relevant scenario (80-120 words)
2. Scenario must allow clear application of the specified subtopic
3. Question should require explicit application, not just description
4. Mark scheme should credit context-specific application
5. Names, ages, and situations should be appropriate for a psychology exam

**Scenario Guidelines:**
- Use appropriate British names (e.g., Jake, Emily, Sarah, Ahmed)
- Include specific details that can be linked to psychological concepts
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
