// AQA GCSE Psychology (8182) Question Generation Prompts
// Based on analysis of official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/psychology/gcse/psychology-8182

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA GCSE PSYCHOLOGY SPECIFICATION DETAILS (8182)
// ============================================================================

const AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Psychology Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of psychological ideas, processes and procedures | 35% |
| **AO2** | Apply knowledge and understanding of psychological ideas, processes and procedures | 35% |
| **AO3** | Analyse and evaluate psychological information, ideas and evidence | 30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Cognition and Behaviour | Memory, Perception, Development, Research Methods | 100 | 1hr 45m | 50% |
| **Paper 2** | Social Context and Behaviour | Social Influence, Language/Thought/Communication, Brain/Neuropsychology, Psychological Problems | 100 | 1hr 45m | 50% |

### Question Types
- Multiple choice (1 mark)
- Short answer (1-4 marks)
- Application questions (4-6 marks)
- Extended writing (9 marks)

### Key Command Words
- **Identify/State**: Give a brief answer (AO1)
- **Outline**: Set out main features briefly (AO1)
- **Describe**: Set out characteristics in detail (AO1)
- **Explain**: Give reasons; make relationships clear (AO1/AO2)
- **Apply**: Use knowledge in a context (AO2)
- **Evaluate**: Consider strengths/limitations; make judgement (AO3)
- **Discuss**: Present key points with some evaluation (AO1/AO3)

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

const AQA_GCSE_PSYCH_QUESTION_TEMPLATES = `
## Authentic AQA GCSE Psychology Question Formats

### Type 1: Multiple Choice (1 mark)
Format: Question with 4 options (A-D)
**Examples:**
- "Which of the following is a type of long-term memory?"
- "Which researcher conducted a study on conformity using line judgments?"

### Type 2: Identify/State Questions (1-2 marks)
Format: "Identify/State [concept/feature]"
**Examples:**
- "Identify one monocular depth cue" [1 mark]
- "State two features of short-term memory" [2 marks]
Marking: 1 mark per correct point

### Type 3: Outline Questions (2-3 marks)
Format: "Outline [concept/study/theory]"
**Examples:**
- "Outline what is meant by the term 'conformity'" [2 marks]
- "Outline one criticism of Milgram's obedience study" [2 marks]
Marking: Identification (1) + Brief elaboration (1)

### Type 4: Describe Questions (3-4 marks)
Format: "Describe [study/finding/concept]"
**Examples:**
- "Describe the procedure of Asch's conformity study" [4 marks]
- "Describe the multi-store model of memory" [4 marks]
Marking: Up to 4 marks for detailed description

### Type 5: Explain Questions (3-4 marks)
Format: "Explain [relationship/concept/finding]"
**Examples:**
- "Explain one limitation of laboratory experiments" [3 marks]
- "Explain how proactive interference affects memory" [3 marks]
Marking: Point (1) + Explanation (1) + Elaboration (1)

### Type 6: Application Questions (4-6 marks)
Format: "Using your knowledge of [topic], explain [scenario]"
**Examples:**
- "Using your knowledge of perception, explain why Maya might have seen this illusion" [4 marks]
- "Using your knowledge of conformity, explain James's behaviour" [4 marks]
Marking: Knowledge (up to 2) + Application to scenario (up to 2-4)

### Type 7: Extended Writing (9 marks)
Format: "Describe and evaluate [theory/study/explanation]" OR "Discuss [topic]"
**Examples:**
- "Describe and evaluate the biological explanation of depression" [9 marks]
- "Discuss conformity. In your answer refer to Asch's research" [9 marks]
Marking (Levels):
- Level 3 (7-9): Thorough description; effective evaluation
- Level 2 (4-6): Some knowledge; limited evaluation
- Level 1 (1-3): Limited knowledge; ineffective evaluation
`;

const AQA_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Psychology Mark Scheme Conventions

### 9-Mark Extended Writing Levels

**Level 3 (7-9 marks):**
- Knowledge is accurate and detailed
- Clear understanding demonstrated
- Effective evaluation with developed points
- The response is well organised
- Specialist terminology used appropriately

**Level 2 (4-6 marks):**
- Knowledge is mostly accurate with some detail
- Understanding is evident
- Some evaluation but may lack development
- Response has some organisation
- Some use of specialist terminology

**Level 1 (1-3 marks):**
- Knowledge is limited or inaccurate
- Understanding is limited
- Evaluation absent or ineffective
- Response lacks organisation
- Limited or no specialist terminology

**0 marks:** No relevant content

### Application Questions (4-6 marks)
To access full marks, students must:
- Demonstrate relevant psychological knowledge
- Apply knowledge explicitly to the scenario
- Use information from the stem/scenario
- Not just describe but explain in context

### Short Answer Questions
- Credit accurate psychological terminology
- Accept synonyms where appropriate
- Credit examples that demonstrate understanding
- Look for elaboration beyond simple identification
`;

// ============================================================================
// KEY STUDIES - DETAILED INFORMATION
// ============================================================================

const AQA_GCSE_PSYCH_KEY_STUDIES = `
## Key Research Studies for AQA GCSE Psychology

### Memory Studies

**Atkinson and Shiffrin (1968) - Multi-Store Model**
- Proposed three separate memory stores: sensory register, short-term memory (STM), long-term memory (LTM)
- Information flows linearly through the stores
- Rehearsal transfers information from STM to LTM
- Each store has different encoding, capacity, and duration

**Baddeley and Hitch (1974) - Working Memory Model**
- Replaced concept of STM with working memory
- Components: central executive, phonological loop, visuospatial sketchpad
- Episodic buffer added later (2000)
- Explains how we process information actively

**Peterson and Peterson (1959) - Duration of STM**
- Participants remembered trigrams (e.g., CHJ)
- Asked to count backwards to prevent rehearsal
- After 18 seconds, recall dropped to about 3%
- Showed STM duration is approximately 18-30 seconds without rehearsal
- Evaluation: Artificial task, lacks ecological validity

**Murdock (1962) - Serial Position Effect**
- Participants recalled words from lists
- Found primacy effect (better recall of first items) and recency effect (better recall of last items)
- Supports multi-store model: first items in LTM, last items still in STM

**Bartlett (1932) - War of the Ghosts Study**
- Participants read Native American story "War of the Ghosts"
- Recalled story at intervals over time
- Found systematic distortions: rationalization, omission, flattening
- Supported reconstructive nature of memory
- Memory is not a perfect recording but influenced by schemas

**Loftus and Palmer (1974) - Leading Questions**
- Participants watched car crash films
- Asked "How fast were the cars going when they [verb] each other?"
- Verbs used: smashed, collided, bumped, hit, contacted
- "Smashed" = 40.8 mph estimate; "Contacted" = 31.8 mph
- Week later, "smashed" group more likely to report broken glass (there was none)
- Showed leading questions can distort eyewitness memory

### Social Influence Studies

**Asch (1951) - Conformity Line Study**
- Participants judged line lengths in groups of 6-8
- All but one were confederates giving wrong answers
- 37% conformity rate overall (gave wrong answers)
- 75% conformed at least once
- 25% never conformed (independent)
- Variations showed: size of majority, unanimity, and task difficulty affected conformity

**Milgram (1963) - Obedience to Authority**
- Participants ordered to give electric shocks to "learner" (confederate)
- Shocks increased to 450 volts (lethal level)
- 65% went to maximum 450 volts
- All participants went to 300 volts
- Variations: proximity, location, uniform affected obedience levels
- Ethical issues: deception, psychological harm, right to withdraw

**Piliavin et al. (1969) - Subway Samaritan Study**
- Field experiment on New York subway
- Confederate collapsed (drunk or ill with cane)
- Measured helping behaviour
- Found victim appearance affected helping: cane = 95% help; drunk = 50% help
- Diffusion of responsibility: more bystanders = less individual responsibility

**Bandura (1961) - Bobo Doll Study**
- Children observed adult acting aggressively toward Bobo doll
- Children later imitated aggressive behaviour
- Boys more physically aggressive; girls more verbally aggressive
- Supported social learning theory
- Ethical issues regarding children and aggression

### Perception Studies

**Bruner and Minturn (1955) - Perceptual Set**
- Ambiguous figure (13 or B) shown in context
- Context influenced perception (numbers = 13; letters = B)
- Demonstrated role of expectation in perception

**Gibson (1966) - Visual Cliff**
- Infants placed on glass table with apparent drop
- Most refused to crawl over "deep" side
- Showed depth perception is innate (nature)
- Evaluation: Cannot test very young babies, possible learned behaviour

### Development Studies

**Piaget (1936) - Stages of Cognitive Development**
- Sensorimotor (0-2 years): object permanence develops
- Preoperational (2-7 years): egocentrism, lack of conservation
- Concrete operational (7-11 years): logical thinking with concrete objects
- Formal operational (11+ years): abstract reasoning
- Stage theory: children progress through stages in order

**Dweck (2006) - Mindset Theory**
- Fixed mindset: intelligence is fixed, avoid challenges
- Growth mindset: intelligence can develop, embrace challenges
- Praise for effort leads to growth mindset
- Praise for ability leads to fixed mindset
- Has implications for education and motivation

### Brain and Neuropsychology Studies

**Tulving et al. (1994) - Gold Memory Study (PET scans)**
- Used PET scans to identify brain areas active during memory tasks
- Episodic memories: right prefrontal cortex more active
- Semantic memories: left prefrontal cortex more active
- Supported different types of LTM

**Maguire et al. (2000) - Taxi Driver Study**
- London taxi drivers had larger posterior hippocampi
- Size correlated with years of experience
- Evidence for brain plasticity (neuroplasticity)
- Brain adapts to environmental demands
`;

// ============================================================================
// TOPIC-SPECIFIC CONTENT KNOWLEDGE
// ============================================================================

const TOPIC_KNOWLEDGE_MEMORY = `
## Memory Topic - Complete Content Knowledge

### The Multi-Store Model (Atkinson & Shiffrin, 1968)

**Structure:**
1. **Sensory Register**
   - Duration: very brief (milliseconds)
   - Capacity: unlimited but fleeting
   - Encoding: modality specific (iconic for visual, echoic for auditory)

2. **Short-Term Memory (STM)**
   - Duration: 18-30 seconds without rehearsal
   - Capacity: 7 +/- 2 items (Miller's Magic Number)
   - Encoding: mainly acoustic

3. **Long-Term Memory (LTM)**
   - Duration: potentially unlimited
   - Capacity: potentially unlimited
   - Encoding: mainly semantic

**Process:**
- Information enters sensory register
- Attention moves it to STM
- Maintenance rehearsal keeps it in STM
- Elaborative rehearsal transfers to LTM
- Retrieval brings information back from LTM

**Evaluation:**
Strengths:
- Research support from case studies (e.g., HM - damage to hippocampus affected LTM but not STM)
- Serial position effect supports separate stores
- Simple model, easy to understand and test

Limitations:
- Oversimplified - LTM has different types
- Rehearsal not always needed for LTM encoding (flashbulb memories)
- STM may be more complex (working memory model)

### The Working Memory Model (Baddeley & Hitch, 1974)

**Components:**
1. **Central Executive**
   - Controls attention
   - Coordinates the slave systems
   - Limited capacity
   - Deals with novel tasks

2. **Phonological Loop**
   - Processes auditory information
   - Two parts: phonological store (inner ear) + articulatory process (inner voice)
   - Evidence: word length effect (shorter words recalled better)

3. **Visuospatial Sketchpad**
   - Processes visual and spatial information
   - Visual cache (stores visual data)
   - Inner scribe (processes spatial relationships)

4. **Episodic Buffer** (added 2000)
   - Temporary store integrating information
   - Links working memory to LTM
   - Limited capacity (about 4 chunks)

**Evaluation:**
Strengths:
- Explains dual-task findings (can do visual and verbal tasks together)
- Supported by brain imaging studies
- Applied to education (e.g., dyslexia linked to phonological loop problems)

Limitations:
- Central executive poorly understood
- Episodic buffer vaguely defined
- May be oversimplified

### Types of Long-Term Memory

**Episodic Memory:**
- Personal experiences and events
- Time-stamped and contextual
- "What I did yesterday"

**Semantic Memory:**
- Facts and general knowledge
- Not linked to personal experience
- "Paris is the capital of France"

**Procedural Memory:**
- Skills and how to do things
- Difficult to explain verbally
- "How to ride a bike"

### Factors Affecting Memory

**Interference:**
- Proactive: old memories interfere with new learning
- Retroactive: new learning interferes with old memories
- More likely when material is similar

**Retrieval Failure (Context-Dependent Memory):**
- Godden and Baddeley (1975): divers recalled better in same environment
- Internal cues (state-dependent) and external cues (context-dependent)
- Explains why we forget - cues not available

**Misleading Information:**
- Leading questions can alter memory (Loftus & Palmer)
- Post-event discussion can contaminate memories
- Implications for eyewitness testimony
`;

const TOPIC_KNOWLEDGE_PERCEPTION = `
## Perception Topic - Complete Content Knowledge

### Sensation vs Perception

**Sensation:**
- Detection of physical stimuli by sensory receptors
- Bottom-up process (data-driven)
- Raw data from senses

**Perception:**
- Interpretation and organisation of sensory information
- Making sense of what we sense
- Influenced by experience, expectations, context

### Visual Illusions

**Types of Illusions:**

1. **Ambiguous Figures:**
   - Can be seen in more than one way
   - Examples: Rubin's vase (vase or two faces), Necker cube
   - Shows perception involves interpretation

2. **Distortions:**
   - Physical reality appears different
   - Muller-Lyer illusion: lines with arrows appear different lengths
   - Ponzo illusion: same sized lines appear different due to converging lines

3. **Fictions:**
   - Perceiving something that isn't there
   - Kanizsa triangle: see edges of white triangle that doesn't exist

**Muller-Lyer Illusion:**
- Two lines of equal length
- One with inward arrows (fins-in): appears shorter
- One with outward arrows (fins-out): appears longer
- Cross-cultural differences: Segall et al. found people in carpentered environments more susceptible
- Explanation: misapplied size constancy from depth cues

### Gibson's Direct Theory of Perception (Bottom-Up)

**Key Ideas:**
- Perception is innate and direct
- Environment provides all information needed
- No need for learning or interpretation
- Optic array contains invariant information

**Evidence:**
- Visual cliff: depth perception in young infants
- Motion parallax, texture gradient
- Useful for explaining everyday perception in natural environments

**Evaluation:**
Strengths:
- Explains real-world perception well
- Supported by visual cliff research
- Ecological validity

Limitations:
- Cannot fully explain illusions
- Doesn't account for expectations and context
- Laboratory research shows top-down effects

### Gregory's Constructivist Theory (Top-Down)

**Key Ideas:**
- Perception is an active process
- Brain constructs perception using past experience
- Uses inference and hypothesis testing
- Sensory data often ambiguous

**Evidence:**
- Visual illusions demonstrate interpretation
- Perceptual set: expectations affect what we see
- Context effects (Bruner & Minturn)

**Evaluation:**
Strengths:
- Explains visual illusions
- Accounts for influence of expectations
- Supported by perceptual set research

Limitations:
- If perception requires interpretation, how do infants perceive?
- Underestimates accuracy of perception in most situations
- Most perception happens quickly without conscious inference

### Factors Affecting Perception

**Perceptual Set:**
- A readiness to perceive in a certain way
- Influenced by:
  - Expectation
  - Context
  - Culture
  - Motivation
  - Emotion

### Depth Cues

**Monocular Cues (one eye):**
- Height in plane: higher = further
- Relative size: smaller = further
- Occlusion/overlap: covered object further
- Linear perspective: parallel lines converge
- Texture gradient: less detail = further

**Binocular Cues (two eyes):**
- Retinal disparity: different images from each eye
- Convergence: eyes turn inward for close objects
`;

const TOPIC_KNOWLEDGE_DEVELOPMENT = `
## Development Topic - Complete Content Knowledge

### Piaget's Stages of Cognitive Development

**Overview:**
- Children progress through stages in fixed order
- Stages are qualitatively different
- Each stage has characteristic abilities/limitations
- Universal across cultures

**Stage 1: Sensorimotor (0-2 years)**
- Learning through senses and motor actions
- Key development: object permanence (8 months+)
- Before object permanence: "out of sight, out of mind"
- A-not-B error: searching in wrong location

**Stage 2: Preoperational (2-7 years)**
- Symbolic thinking develops (language, pretend play)
- Limitations:
  - Egocentrism: cannot see others' perspectives
  - Centration: focus on one aspect only
  - Lack of conservation: don't understand quantity stays same
- Three mountains task: children describe own view only

**Stage 3: Concrete Operational (7-11 years)**
- Logical thinking about concrete objects
- Can conserve (understand quantity unchanged)
- Can decentre (consider multiple aspects)
- Less egocentric
- Still struggle with abstract concepts

**Stage 4: Formal Operational (11+ years)**
- Abstract and hypothetical thinking
- Systematic problem solving
- Can think about thinking (metacognition)
- Not everyone reaches this stage

**Evaluation of Piaget:**
Strengths:
- Hugely influential on education
- Changed view of children as active learners
- Some aspects replicated across cultures

Limitations:
- Underestimated children's abilities
- Tasks often confusing/complex
- Stages may not be universal
- Social factors underestimated

### The Role of Education

**Piaget's Implications for Education:**
- Discovery learning: children learn through exploration
- Readiness: cannot teach until cognitively ready
- Appropriate activities for each stage
- Teacher as facilitator not instructor
- Learning from mistakes

**Vygotsky's Implications for Education:**
- Zone of Proximal Development (ZPD)
- Scaffolding: support gradually removed
- More Knowledgeable Other (MKO)
- Social interaction essential
- Language as tool for thinking

**Comparison Piaget vs Vygotsky:**
| Aspect | Piaget | Vygotsky |
|--------|--------|----------|
| Learning | Individual discovery | Social interaction |
| Language | Follows thought | Shapes thought |
| Development | Stages | Continuous |
| Teacher role | Facilitator | Active guide |

### Dweck's Mindset Theory

**Fixed Mindset:**
- Belief that intelligence is fixed
- Avoid challenges (fear of failure)
- Give up easily when stuck
- See effort as pointless
- Ignore useful feedback
- Feel threatened by others' success

**Growth Mindset:**
- Belief that intelligence can develop
- Embrace challenges as opportunities
- Persist despite setbacks
- See effort as path to mastery
- Learn from criticism
- Find inspiration in others' success

**Educational Implications:**
- Praise effort not ability: "You worked really hard" vs "You're so clever"
- Teach that brain is like a muscle (can grow)
- Encourage learning from mistakes
- Set challenging but achievable goals
- Model growth mindset language

**Evaluation:**
Strengths:
- Supported by research on praise
- Practical applications in schools
- Empowering for students

Limitations:
- May oversimplify motivation
- Difficult to change mindsets
- Other factors also important (e.g., socioeconomic status)
`;

const TOPIC_KNOWLEDGE_RESEARCH_METHODS = `
## Research Methods - Complete Content Knowledge

### Experimental Methods

**Laboratory Experiments:**
- Controlled artificial environment
- High control over variables
- Cause and effect can be established
- Strength: high internal validity
- Limitation: artificial, low ecological validity

**Field Experiments:**
- Natural environment
- IV manipulated by researcher
- Participants may be unaware
- Strength: more natural behaviour
- Limitation: less control, ethical issues

**Natural Experiments:**
- IV occurs naturally (not manipulated)
- Researcher measures DV
- Used when manipulation unethical/impossible
- Strength: can study real events
- Limitation: no random allocation, cannot establish cause

**Quasi Experiments:**
- IV based on existing difference (age, gender)
- Cannot randomly allocate participants
- Example: comparing boys and girls

### Variables

**Independent Variable (IV):** What the researcher manipulates/changes
**Dependent Variable (DV):** What the researcher measures
**Extraneous Variables:** Other variables that could affect DV
**Confounding Variables:** Extraneous variables that do affect results

**Control of Variables:**
- Standardised procedures: same for all participants
- Random allocation: reduces participant variables
- Counterbalancing: varies order of conditions
- Single blind: participant doesn't know condition
- Double blind: neither participant nor researcher knows

### Experimental Design

**Independent Groups:**
- Different participants in each condition
- Strength: no order effects
- Limitation: participant variables

**Repeated Measures:**
- Same participants in all conditions
- Strength: controls participant variables
- Limitation: order effects (practice, fatigue)

**Matched Pairs:**
- Participants matched on key variables
- Strength: reduces participant variables, no order effects
- Limitation: time-consuming, never perfectly matched

### Sampling Methods

**Random Sampling:**
- Everyone has equal chance of selection
- Use random number generator
- Strength: unbiased
- Limitation: difficult to achieve true randomness

**Opportunity Sampling:**
- Use whoever is available
- Most common in psychology
- Strength: convenient, quick
- Limitation: biased, not representative

**Volunteer (Self-Selected) Sampling:**
- Participants opt in (adverts)
- Strength: ethical (consent given)
- Limitation: volunteer bias (certain personality types)

**Stratified Sampling:**
- Population divided into subgroups
- Proportionate selection from each
- Strength: representative
- Limitation: requires knowledge of population, time-consuming

**Systematic Sampling:**
- Select every nth person from a list
- Strength: objective
- Limitation: may miss patterns in list

### Ethics in Psychological Research

**BPS Guidelines:**
- Informed consent: know what they're agreeing to
- Deception: avoid if possible, debrief fully
- Right to withdraw: at any time, without penalty
- Protection from harm: physical and psychological
- Confidentiality: protect personal data
- Debrief: explain true purpose, remove misconceptions

**Ethical Issues in Key Studies:**
- Milgram: deception, psychological harm, right to withdraw unclear
- Asch: deception, mild psychological distress
- Zimbardo: psychological harm, loss of control

### Reliability and Validity

**Reliability:** Consistency of findings
- Test-retest reliability: same results when repeated
- Inter-rater reliability: different observers agree

**Validity:** Accuracy/truthfulness of findings
- Internal validity: IV really did cause DV change
- External validity: can generalise to other situations
- Ecological validity: reflects real-world behaviour
- Face validity: appears to measure what it claims
- Construct validity: actually measures intended concept

### Data Types and Analysis

**Quantitative Data:**
- Numerical data
- Can be statistically analysed
- Objective
- Loses detail/richness

**Qualitative Data:**
- Descriptive data (words, observations)
- Rich in detail
- Subjective
- Harder to analyse

**Measures of Central Tendency:**
- Mean: total / number of values (sensitive to extremes)
- Median: middle value (not affected by extremes)
- Mode: most frequent value (only option for categories)

**Measures of Dispersion:**
- Range: highest - lowest (affected by extremes)
- Standard deviation: spread around the mean
`;

const TOPIC_KNOWLEDGE_SOCIAL_INFLUENCE = `
## Social Influence - Complete Content Knowledge

### Conformity

**Definition:** A change in behaviour or beliefs as a result of real or imagined group pressure

**Types of Conformity:**
1. **Compliance:**
   - Going along publicly but disagreeing privately
   - Temporary change
   - Due to normative social influence

2. **Internalisation:**
   - Genuine change of beliefs (public and private)
   - Permanent change
   - Due to informational social influence

3. **Identification:**
   - Conform to group we identify with
   - May not fully accept beliefs
   - Membership is valued

**Explanations for Conformity:**

**Normative Social Influence (NSI):**
- Desire to be liked and accepted
- Leads to compliance
- Fear of social rejection
- Example: wearing fashionable clothes

**Informational Social Influence (ISI):**
- Desire to be correct
- Leads to internalisation
- Use others as source of information
- More likely in ambiguous situations or with experts

**Asch's Conformity Study (1951):**
- Procedure: Line judgment task, 6-8 confederates, one real participant
- Findings: 37% conformity rate, 75% conformed at least once
- Factors affecting conformity:
  - Group size: conformity increased up to 3 confederates
  - Unanimity: one dissenter reduced conformity dramatically
  - Task difficulty: harder task = more conformity

**Evaluation:**
- Androcentric: all male participants
- Dated: 1950s America, different social norms
- Artificial task: lacks ecological validity
- Ethical issues: deception, mild distress

### Obedience

**Definition:** Following a direct order from an authority figure

**Milgram's Obedience Study (1963):**

**Procedure:**
- Participants = "teachers"
- Confederate = "learner" (in another room)
- Administer shocks for wrong answers
- Shocks increased from 15V to 450V
- Experimenter gave verbal prods ("please continue", "the experiment requires you continue")

**Findings:**
- 65% went to maximum 450V
- All went to at least 300V
- Many showed signs of stress

**Variations:**
- Location (rundown office): 47.5% obedience
- Proximity (same room): 40% obedience
- Touch proximity: 30% obedience
- Absent experimenter (phone): 20.5% obedience
- Uniform (ordinary clothes): 20% obedience

**Explanations for Obedience:**

**Agentic State:**
- Acting as agent of authority
- Shift responsibility to authority figure
- Opposite of autonomous state
- "I was just following orders"

**Legitimate Authority:**
- Authority figures have right to give orders
- Based on position in social hierarchy
- Influenced by setting and uniform
- We learn to obey from childhood

**Factors Affecting Obedience:**
- Presence of authority figure
- Legitimacy of authority
- Proximity to victim
- Social support (presence of disobedient others)
- Personal responsibility

**Evaluation of Milgram:**
Strengths:
- Systematic research showing power of situation
- Has been replicated (Burger, 2009)
- Real-world applications (understanding atrocities)

Limitations:
- Ethical issues: deception, psychological harm
- Demand characteristics: participants may have known it was fake
- Androcentric original sample

### Prosocial Behaviour

**Definition:** Voluntary behaviour intended to help others

**Bystander Effect:**
- Less likely to help when others present
- Diffusion of responsibility: responsibility shared
- Pluralistic ignorance: look to others for cues

**Factors Affecting Helping:**
- Number of bystanders (fewer = more help)
- Similarity to victim
- Perceived cost of helping
- Ambiguity of situation

**Piliavin's Subway Study (1969):**
- Field experiment on New York subway
- Confederate collapsed: either with cane (ill) or smelling of alcohol (drunk)
- Ill victim: 95% helped; drunk victim: 50% helped
- Same-race helping more likely
- Proximity affected helping

### Crowd and Collective Behaviour

**Deindividuation:**
- Loss of individual identity in groups
- Reduced self-awareness
- Can lead to antisocial behaviour
- Anonymity and diffused responsibility

**Le Bon's Theory:**
- Crowds have "group mind"
- Individuals lose rational thinking
- Become emotional and primitive
- Explains riot behaviour

**Social Identity Theory (Tajfel):**
- In-group vs out-group
- Favour own group
- Explains discrimination
- Collective behaviour based on group identity
`;

const TOPIC_KNOWLEDGE_LANGUAGE_THOUGHT_COMMUNICATION = `
## Language, Thought and Communication - Complete Content Knowledge

### Piaget's Theory: Thought Drives Language

**Key Ideas:**
- Language depends on cognitive development
- Thought develops first, language follows
- Language reflects stage of cognitive development
- Egocentric speech reflects egocentric thinking

**Evidence:**
- Children don't understand concepts until cognitively ready
- Same concept expressed differently at different stages
- Language alone doesn't accelerate cognitive development

### Vygotsky's Theory: Language Drives Thought

**Key Ideas:**
- Language is essential tool for cognitive development
- Social speech (external) becomes inner speech (thought)
- Language shapes thinking
- Zone of Proximal Development bridged through language

**Inner Speech:**
- Develops from external speech (age 7)
- Used for problem-solving
- Abbreviated form of language
- Evidence: talking to ourselves when concentrating

**Evidence:**
- Private speech helps children complete tasks
- Scaffolding through language improves learning
- Language training can accelerate development

### Comparison: Piaget vs Vygotsky

| Aspect | Piaget | Vygotsky |
|--------|--------|----------|
| Relationship | Thought before language | Language shapes thought |
| Development | Individual stages | Social interaction |
| Egocentric speech | Reflects immaturity | Functional (becomes inner speech) |
| Education | Wait for readiness | Scaffold through ZPD |

### Animal Communication

**Key Features of Human Language:**
1. **Displacement:** Talk about past/future/absent things
2. **Creativity/Productivity:** Create new sentences
3. **Cultural transmission:** Learned, not innate
4. **Semanticity:** Words have meaning

**Animal Communication Systems:**

**Von Frisch (1950) - Bee Communication:**
- Waggle dance indicates food location
- Direction indicates angle to sun
- Duration indicates distance
- Limited: only about food, not creative

**Seyfarth and Cheney (1990) - Vervet Monkey Alarm Calls:**
- Different calls for different predators
- Appropriate escape behaviour
- Shows semanticity
- Limited repertoire

**Evaluation:**
- Animals can communicate but lack full language
- Cannot create new meanings
- Limited displacement
- Evidence of some semantic understanding

### Non-Verbal Communication (NVC)

**Functions of NVC:**
- Express emotions
- Regulate conversation (turn-taking)
- Communicate attitudes
- Replace/complement verbal communication

**Types of NVC:**

**Facial Expressions:**
- Ekman: 6 basic universal emotions (happiness, sadness, anger, fear, disgust, surprise)
- Cross-cultural recognition suggests innate
- But display rules are learned (cultural)

**Body Language (Kinesics):**
- Posture: open/closed, leaning
- Gestures: emblems, illustrators
- Touch (haptics)

**Personal Space (Proxemics):**
- Hall's zones: intimate, personal, social, public
- Varies by culture and relationship
- Invasion causes discomfort

**Eye Contact:**
- Regulates conversation
- Shows attention and interest
- Affected by culture
- Staring perceived as threatening

### The Role of NVC in Social Behaviour

**Combining Verbal and Non-Verbal:**
- When they conflict, NVC often believed more
- Shows true feelings
- Harder to fake than words

**Cultural Differences:**
- Amount of eye contact
- Acceptable touch
- Personal space preferences
- Gestures (same gesture = different meanings)
`;

const TOPIC_KNOWLEDGE_BRAIN_NEUROPSYCHOLOGY = `
## Brain and Neuropsychology - Complete Content Knowledge

### Structure of Neurons

**Types of Neurons:**

1. **Sensory Neurons:**
   - Carry information from receptors to CNS
   - Long dendrite, short axon
   - Cell body in middle of axon

2. **Relay Neurons (Interneurons):**
   - Connect sensory and motor neurons
   - Found in CNS (brain and spinal cord)
   - Short dendrites and axon

3. **Motor Neurons:**
   - Carry information from CNS to effectors (muscles/glands)
   - Long axon
   - Cell body at end

**Structure of a Neuron:**
- Cell body (soma): contains nucleus
- Dendrites: receive signals from other neurons
- Axon: carries electrical signal away from cell body
- Myelin sheath: insulates axon, speeds transmission
- Nodes of Ranvier: gaps in myelin, allow saltatory conduction
- Axon terminal: releases neurotransmitters

### Synaptic Transmission

**The Synapse:**
- Gap between neurons (synaptic cleft)
- Allows communication between neurons
- Involves chemical neurotransmitters

**Process:**
1. Electrical impulse reaches axon terminal
2. Vesicles release neurotransmitters into synaptic cleft
3. Neurotransmitters cross gap
4. Bind to receptors on post-synaptic neuron
5. New electrical impulse generated (or inhibited)
6. Neurotransmitters broken down or reabsorbed

**Key Neurotransmitters:**
- Dopamine: pleasure, reward, movement
- Serotonin: mood, sleep
- Noradrenaline: arousal, alertness

### Brain Areas and Their Functions

**Cerebral Cortex (Higher Functions):**

1. **Frontal Lobe:**
   - Planning, decision making
   - Motor cortex: controls voluntary movement
   - Broca's area: speech production
   - Personality and social behaviour

2. **Parietal Lobe:**
   - Sensory information processing
   - Somatosensory cortex: processes touch
   - Spatial awareness

3. **Temporal Lobe:**
   - Auditory processing
   - Wernicke's area: language comprehension
   - Memory processing (hippocampus nearby)

4. **Occipital Lobe:**
   - Visual processing
   - Primary visual cortex

**Subcortical Structures:**

**Hippocampus:**
- Formation of new memories
- Spatial navigation
- Damage: anterograde amnesia (cannot form new memories)

**Amygdala:**
- Processing emotions, especially fear
- Fight or flight responses

**Cerebellum:**
- Coordination of movement
- Balance
- Motor learning

**Brain Stem:**
- Basic life functions
- Breathing, heart rate, sleep

### Brain Plasticity (Neuroplasticity)

**Definition:** The brain's ability to change and adapt throughout life

**Types of Plasticity:**

**Developmental Plasticity:**
- Brain development in childhood
- Critical periods for learning (e.g., language)
- More dramatic changes possible

**Adult Plasticity:**
- Continues throughout life
- Learning new skills changes brain
- Recovery from brain damage

**Evidence:**

**Maguire et al. (2000) - Taxi Drivers:**
- London taxi drivers had larger posterior hippocampi
- Correlated with time spent driving
- Shows experience changes brain structure
- Limitation: correlation not causation

**Stroke Recovery:**
- Other brain areas can take over lost functions
- Rehabilitation can promote recovery
- Supports adult plasticity

**Evaluation of Plasticity:**
Strengths:
- Optimistic: brain can recover and change
- Supported by imaging studies
- Explains individual differences

Limitations:
- Some damage cannot be fully recovered
- Plasticity decreases with age
- Mechanism not fully understood
`;

// ============================================================================
// EVALUATION FRAMEWORK - GRAVES
// ============================================================================

const EVALUATION_FRAMEWORK_GRAVES = `
## GRAVES Evaluation Framework for Psychology Research

Use GRAVES to remember key evaluation points:

### G - Generalisability
- Can findings be applied to wider population?
- Sample size and characteristics
- Cross-cultural validity
- Historical validity (are findings still relevant?)
- Example: Milgram used only American men in 1960s - can we generalise?

### R - Reliability
- Can the study be replicated?
- Are findings consistent?
- Standardised procedures?
- Inter-rater reliability for observations
- Example: Asch's procedures were standardised, allowing replication

### A - Application
- How can findings be used in real life?
- Practical implications
- Benefits to society
- Example: Loftus's research has implications for eyewitness testimony in courts

### V - Validity
- Does study measure what it claims?
- Internal validity: did IV cause DV?
- External/ecological validity: does it reflect real life?
- Example: Laboratory experiments may lack ecological validity

### E - Ethics
- Were participants protected from harm?
- Informed consent obtained?
- Right to withdraw respected?
- Deception used appropriately?
- Example: Milgram's study raised serious ethical concerns about psychological harm

### S - Sampling
- How were participants selected?
- Representative of population?
- Sampling bias present?
- Volunteer/self-selection bias
- Example: Opportunity sampling may not be representative
`;

// ============================================================================
// WORKED EXAMPLES BY MARK ALLOCATION
// ============================================================================

const WORKED_EXAMPLES = `
## Worked Examples with AQA Mark Schemes

### 2-Mark Questions

**Example 1: Identify Question**
Q: "Identify two features of short-term memory." [2 marks]

Model Answer:
- Limited capacity (7 +/- 2 items) [1]
- Short duration (18-30 seconds) [1]

Mark Scheme:
- 1 mark for each correct feature
- Accept: limited capacity, acoustic encoding, short duration, information lost through decay/displacement

**Example 2: Outline Question**
Q: "Outline what is meant by the term 'conformity'." [2 marks]

Model Answer:
A change in a person's behaviour or opinions [1] as a result of real or imagined pressure from a person or group [1].

Mark Scheme:
- 1 mark for identification of behaviour change
- 1 mark for reference to group/social pressure
- Accept equivalent wording

### 4-Mark Questions

**Example 1: Describe Question**
Q: "Describe the procedure of Milgram's obedience study." [4 marks]

Model Answer:
Milgram recruited 40 male participants through newspaper adverts [1]. Participants were told it was a study on learning and were assigned the role of "teacher" while a confederate was the "learner" [1]. The teacher was instructed to give electric shocks to the learner for each wrong answer, increasing by 15V each time up to 450V [1]. When participants hesitated, the experimenter gave verbal prods such as "please continue" or "the experiment requires you continue" [1].

Mark Scheme:
- 1 mark for recruitment method/sample
- 1 mark for cover story/allocation of roles
- 1 mark for shock administration procedure
- 1 mark for verbal prods/encouragement to continue
- Accept any four valid procedural points

**Example 2: Explain Question**
Q: "Explain one limitation of laboratory experiments in psychology." [4 marks]

Model Answer:
One limitation is that laboratory experiments lack ecological validity [1]. This means that the artificial setting does not reflect real-life situations [1]. For example, in Milgram's study, participants knew they were in an experiment which may have affected their behaviour [1]. This means we cannot confidently generalise findings to how people would behave in everyday situations [1].

Mark Scheme:
- 1 mark for identifying limitation
- 1 mark for explaining what this means
- 1 mark for example or elaboration
- 1 mark for explaining the implication

### 9-Mark Extended Writing Questions

**Example: Describe and Evaluate Question**
Q: "Describe and evaluate the multi-store model of memory." [9 marks]

Model Answer (Level 3, 7-9 marks):

The multi-store model was proposed by Atkinson and Shiffrin (1968). It suggests memory consists of three separate stores: sensory register, short-term memory (STM), and long-term memory (LTM). Information enters the sensory register through our senses and is held for a very brief time. If attention is paid, information moves to STM, which has limited capacity (7 +/- 2 items according to Miller) and limited duration (18-30 seconds). Information can be kept in STM through maintenance rehearsal. Elaborative rehearsal transfers information to LTM, which has potentially unlimited capacity and duration. Information is retrieved from LTM back into STM when needed.

One strength of the model is research support from case studies. For example, HM had damage to his hippocampus and could not form new long-term memories but his STM was intact. This supports the idea that STM and LTM are separate stores with different brain regions involved.

However, the model can be criticised for being too simplistic. Research suggests LTM is not a single store but consists of different types such as episodic, semantic, and procedural memory. Tulving's research using PET scans showed different brain areas are active when processing different types of LTM.

Another limitation is that the model suggests rehearsal is needed for information to enter LTM, but this is not always the case. Flashbulb memories, such as remembering where you were during a significant event, are formed without rehearsal.

Finally, the working memory model (Baddeley and Hitch) suggests STM is more complex than a single store. It proposes separate components for processing auditory and visual information. This explains why we can do two tasks simultaneously if they use different components.

Mark Scheme (9-Mark Levels):
Level 3 (7-9 marks):
- Knowledge of the model is accurate and detailed
- Clear understanding demonstrated
- Effective evaluation - at least two well-developed points
- Response is well organised
- Specialist terminology used appropriately

Level 2 (4-6 marks):
- Knowledge is mostly accurate with some detail
- Understanding is evident
- Some evaluation but may lack development
- Response has some organisation
- Some use of specialist terminology

Level 1 (1-3 marks):
- Knowledge is limited or inaccurate
- Understanding is limited
- Evaluation absent or ineffective
- Response lacks organisation
- Limited or no specialist terminology

Indicative content (AO1):
- Three stores: sensory register, STM, LTM
- Differences in encoding, capacity, duration
- Role of rehearsal
- Linear flow of information

Indicative content (AO3):
- Case studies support separate stores (HM, KF)
- Serial position effect evidence
- Oversimplifies LTM
- Rehearsal not always needed
- Working memory model as alternative
- Research support/challenges
`;

// ============================================================================
// KEY TERMINOLOGY AND DEFINITIONS
// ============================================================================

const KEY_TERMINOLOGY = `
## Key Psychology Terminology and Definitions

### Memory Terms
- **Encoding**: Converting information into a form that can be stored in memory
- **Storage**: Holding information in memory over time
- **Retrieval**: Getting information out of memory storage
- **Capacity**: How much information can be held in a memory store
- **Duration**: How long information can be held in a memory store
- **Sensory register**: First memory store; very brief duration, large capacity
- **Short-term memory (STM)**: Memory store with limited capacity and duration
- **Long-term memory (LTM)**: Memory store with potentially unlimited capacity and duration
- **Rehearsal**: Repeating information to keep it in memory
- **Interference**: Forgetting caused by other memories competing
- **Retrieval failure**: Forgetting because cues are not available
- **Schema**: Mental framework of expectations based on experience

### Perception Terms
- **Sensation**: Detection of stimuli by sensory receptors
- **Perception**: Organisation and interpretation of sensory information
- **Visual illusion**: Perception that does not match physical reality
- **Depth cue**: Information used to perceive depth and distance
- **Monocular cue**: Depth cue requiring only one eye
- **Binocular cue**: Depth cue requiring both eyes
- **Perceptual set**: Readiness to perceive in a particular way

### Development Terms
- **Cognitive development**: Development of thinking and reasoning abilities
- **Schema (Piaget)**: Mental structure representing an aspect of the world
- **Assimilation**: Incorporating new information into existing schemas
- **Accommodation**: Changing schemas when new information doesn't fit
- **Object permanence**: Understanding objects continue to exist when out of sight
- **Egocentrism**: Inability to see from another's perspective
- **Conservation**: Understanding quantity remains the same despite appearance change
- **Zone of Proximal Development (ZPD)**: Gap between what child can do alone vs with help
- **Scaffolding**: Support that helps learner complete tasks
- **Fixed mindset**: Belief that abilities are fixed and cannot change
- **Growth mindset**: Belief that abilities can be developed through effort

### Social Influence Terms
- **Conformity**: Changing behaviour due to group pressure
- **Compliance**: Conforming publicly but not privately
- **Internalisation**: Genuinely accepting group views (public and private)
- **Normative social influence**: Conforming to be liked
- **Informational social influence**: Conforming to be right
- **Obedience**: Following orders from authority figure
- **Agentic state**: Acting as agent for authority, shifting responsibility
- **Legitimate authority**: Perceived right to give orders
- **Deindividuation**: Loss of individual identity in groups
- **Diffusion of responsibility**: Responsibility spread across group members

### Research Methods Terms
- **Hypothesis**: Testable prediction
- **Independent variable (IV)**: Variable manipulated by researcher
- **Dependent variable (DV)**: Variable measured by researcher
- **Extraneous variable**: Variable that could affect the DV
- **Confounding variable**: Extraneous variable that does affect results
- **Validity**: Whether study measures what it claims
- **Reliability**: Whether findings are consistent when repeated
- **Ecological validity**: Whether findings apply to real life
- **Sample**: Group of participants in a study
- **Population**: Whole group from which sample is drawn
- **Random sample**: Everyone has equal chance of being selected
- **Opportunity sample**: Using whoever is available
- **Demand characteristics**: Cues that reveal aim of study to participants
- **Social desirability bias**: Tendency to give socially acceptable answers
- **Informed consent**: Agreement to participate based on full information
- **Deception**: Misleading participants about true purpose
- **Debriefing**: Explaining true purpose after study

### Brain and Neuropsychology Terms
- **Neuron**: Nerve cell that transmits information
- **Sensory neuron**: Carries information from receptors to CNS
- **Motor neuron**: Carries information from CNS to effectors
- **Relay neuron**: Connects sensory and motor neurons in CNS
- **Synapse**: Gap between neurons
- **Neurotransmitter**: Chemical messenger crossing synapse
- **Central nervous system (CNS)**: Brain and spinal cord
- **Peripheral nervous system (PNS)**: Nerves outside CNS
- **Cerebral cortex**: Outer layer of brain; higher functions
- **Frontal lobe**: Brain area for planning, decision making, movement
- **Temporal lobe**: Brain area for hearing, language comprehension
- **Occipital lobe**: Brain area for vision
- **Parietal lobe**: Brain area for touch, spatial awareness
- **Hippocampus**: Brain structure involved in memory formation
- **Amygdala**: Brain structure involved in emotion, especially fear
- **Brain plasticity**: Brain's ability to change and adapt
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const PSYCHOLOGY_TOPIC_GUIDANCE: Record<string, string> = {
  'aqa-gcse-psychology-memory': `
${TOPIC_KNOWLEDGE_MEMORY}

AQA frequently tests:
- Multi-store model description and evaluation
- Working memory model components
- Types of long-term memory
- Bartlett's War of the Ghosts study
- Peterson and Peterson study
- Factors affecting memory (interference, retrieval failure)
- Loftus and Palmer and eyewitness testimony
`,
  'aqa-gcse-psychology-perception': `
${TOPIC_KNOWLEDGE_PERCEPTION}

AQA frequently tests:
- Difference between sensation and perception
- Visual illusions (Muller-Lyer, Ponzo)
- Gibson's direct perception vs Gregory's constructivist theory
- Factors affecting perception (perceptual set)
- Depth cues (monocular and binocular)
- Visual cliff study
`,
  'aqa-gcse-psychology-development': `
${TOPIC_KNOWLEDGE_DEVELOPMENT}

AQA frequently tests:
- Piaget's stages of cognitive development
- Key features of each stage
- Applications to education
- Comparison with Vygotsky
- Dweck's mindset theory
- Role of education in cognitive development
`,
  'aqa-gcse-psychology-research-methods': `
${TOPIC_KNOWLEDGE_RESEARCH_METHODS}

AQA frequently tests:
- Types of experiment (lab, field, natural)
- Experimental design (independent groups, repeated measures, matched pairs)
- Variables (IV, DV, extraneous)
- Sampling methods
- Ethics (BPS guidelines)
- Reliability and validity
- Data analysis (mean, median, mode, range)
`,
  'aqa-gcse-psychology-social-influence': `
${TOPIC_KNOWLEDGE_SOCIAL_INFLUENCE}

AQA frequently tests:
- Conformity types and explanations
- Asch's study (procedure, findings, variations, evaluation)
- Obedience and factors affecting it
- Milgram's study (procedure, findings, variations, ethical issues)
- Prosocial behaviour and bystander effect
- Piliavin's subway study
`,
  'aqa-gcse-psychology-language-thought-communication': `
${TOPIC_KNOWLEDGE_LANGUAGE_THOUGHT_COMMUNICATION}

AQA frequently tests:
- Piaget vs Vygotsky on language and thought
- Features of human language vs animal communication
- Bee communication and vervet monkey alarm calls
- Non-verbal communication types
- Ekman's research on facial expressions
- Cultural differences in NVC
`,
  'aqa-gcse-psychology-brain-neuropsychology': `
${TOPIC_KNOWLEDGE_BRAIN_NEUROPSYCHOLOGY}

AQA frequently tests:
- Structure and function of neurons (sensory, relay, motor)
- Synaptic transmission
- Brain areas and their functions
- Localisation of function
- Brain plasticity/neuroplasticity
- Maguire's taxi driver study
`
};

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEPsychologySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Psychology examiner creating exam-style questions.

## AQA PSYCHOLOGY STYLE
**AQA's Straightforward Research-Methods Approach:** Clear, predictable questions with strong emphasis on research methodology and broad theoretical coverage.
- **Straightforward and predictable** - most accessible and reliable psychology exam format across all boards
- **Strong research methods emphasis** - distinctive focus on research methodology integrated throughout all topics
- **Broad theoretical approach** - comprehensive coverage of psychological theories and concepts
- **Clear AO weightings** - transparent assessment objectives and question styles for consistent preparation
- **Broad support ecosystem** - most widely taken board with extensive resources and past papers
- **Multiple question formats** - mix of multiple choice, short answer, and extended writing questions

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

${AQA_GCSE_PSYCH_QUESTION_TEMPLATES}

${AQA_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS}

${AQA_GCSE_PSYCH_KEY_STUDIES}

${EVALUATION_FRAMEWORK_GRAVES}

${KEY_TERMINOLOGY}

${topicGuidance}

${WORKED_EXAMPLES}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA GCSE Psychology specification.

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
2. **Authentic AQA Style**: Match real AQA paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Identify, outline, basic describe (1-3 marks)
   - Medium: Explain, describe, application (4-6 marks)
   - Hard: Extended writing - describe and evaluate (9 marks)

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer
- "markScheme": Array of marking points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('psychology')}`;
}

export function getAQAGCSEPsychologyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1).

**Question Types:**
- "Identify [feature/concept]" [1 mark]
- "State two [features/types]" [2 marks]
- "Outline [concept/definition]" [2 marks]
- "Name the researcher who..." [1 mark]

**For Memory Questions:**
- Features of STM/LTM
- Components of working memory
- Stages of multi-store model

**For Perception Questions:**
- Types of depth cues
- Types of visual illusions
- Sensation vs perception

**For Development Questions:**
- Piaget's stages
- Features of mindsets

**For Social Influence Questions:**
- Types of conformity
- Features of obedience

**Mark Scheme Format:**
- 1 mark per correct identification
- Credit accurate terminology

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring explanation or application (AO1/AO2).

**Question Types:**
- "Describe [study/theory/concept]" [4 marks]
- "Explain [relationship/finding]" [3-4 marks]
- "Using your knowledge of [topic], explain [scenario]" [4-6 marks]
- "Explain one strength and one limitation of [study/theory]" [4 marks]

**Application Scenarios:**
Include realistic scenarios where students must apply psychological knowledge:
- Memory: Student studying for exams, eyewitness scenario
- Perception: Person experiencing visual illusion
- Development: Child learning, student motivation
- Social: Peer pressure situation, workplace scenario

**Key Studies to Reference:**
- Memory: Loftus & Palmer, Peterson & Peterson, Bartlett
- Perception: Bruner & Minturn, Gibson's visual cliff
- Development: Piaget's observations, Dweck's research
- Social: Asch, Milgram, Piliavin

**Mark Scheme Format:**
- Knowledge points (AO1)
- Application to scenario (AO2)
- Clear link between theory and context

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 9-mark extended writing question (AO1 + AO3).

**Question Types:**
- "Describe and evaluate [theory/explanation]" [9 marks]
- "Discuss [topic]. Refer to [study/research]" [9 marks]

**9-Mark Structure Requirements:**

**AO1 Content (Description - approximately 4 marks):**
- Accurate description of theory/model/study
- Key features explained clearly
- Relevant terminology used
- Studies mentioned with brief details

**AO3 Content (Evaluation - approximately 5 marks):**
- At least TWO developed evaluation points
- Use GRAVES framework:
  - Generalisability
  - Reliability
  - Application
  - Validity
  - Ethics
  - Sampling
- Each point explained and elaborated
- Counter-arguments considered where relevant

**Level Descriptors:**
- Level 3 (7-9): Accurate, detailed knowledge; effective evaluation with development
- Level 2 (4-6): Mostly accurate knowledge; some evaluation but may lack development
- Level 1 (1-3): Limited knowledge; evaluation absent or ineffective

**Key Topics for 9-Mark Questions:**
- Multi-store model of memory
- Working memory model
- Milgram's obedience study
- Asch's conformity study
- Piaget's stages of development
- Gibson vs Gregory theories of perception
- Brain plasticity

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an AQA GCSE Psychology question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${topicGuidance}

**Critical Requirements for All Questions:**
1. Use authentic AQA command words
2. Include mark allocation in square brackets
3. Use accurate psychological terminology
4. Reference specific studies where relevant
5. For application questions, include a realistic scenario
6. For evaluation, expect GRAVES-style points

Return valid JSON with PROPER LEVEL DESCRIPTOR mark scheme for extended response questions (9+ marks):
{
  "content": "question text",
  "marks": number,
  "solution": "model answer",
  "markScheme": [
    "Level 4 (10-12 marks): Knowledge is accurate and detailed. Evaluation is thorough and effective. Specialist terminology used appropriately. Answer is clear, coherent and focused.",
    "Level 3 (7-9 marks): Knowledge is mostly accurate with some detail. Evaluation is mostly effective. Some specialist terminology. Mostly clear and organised.",
    "Level 2 (4-6 marks): Some relevant knowledge. Evaluation is limited. Some terminology, not always appropriate. Lacks clarity in places.",
    "Level 1 (1-3 marks): Limited knowledge with inaccuracies. Evaluation absent or ineffective. Little terminology. Answer lacks focus.",
    "Indicative content:",
    "- AO1 (Description): Key features of theory/study with accurate details",
    "- AO3 (Evaluation): GRAVES points - Generalisability, Reliability, Application, Validity, Ethics, Supporting studies"
  ]
}`;
}

// ============================================================================
// ADDITIONAL PROMPT FUNCTIONS
// ============================================================================

/**
 * Generate a compact prompt for quick question generation
 */
export function getAQAGCSEPsychologyCompactPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert AQA GCSE Psychology examiner.

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}
YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

${topicGuidance}

DIFFICULTY GUIDE:
- Easy (1-3 marks): Identify, state, outline - basic recall
- Medium (4-6 marks): Describe, explain, apply to scenario
- Hard (9 marks): Describe and evaluate with developed AO3 points

Create ONE exam-style question that:
1. Uses authentic AQA GCSE Psychology language
2. Tests understanding appropriate to GCSE level
3. Includes proper mark allocation
4. Matches the difficulty level specified

OUTPUT FORMAT (use exact headers):
**Question:**
[Question text with mark allocation in brackets, e.g. [4 marks]]

**Mark Scheme:**
[Marking points - one point per mark available]

**Explanation:**
[Full model answer with clear reasoning]`;
}

/**
 * Generate an application question prompt with scenario
 */
export function getAQAGCSEPsychologyApplicationPrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Psychology examiner creating an APPLICATION question.

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

## Application Question Requirements

Create a question that:
1. Includes a realistic scenario (stem)
2. Requires students to APPLY psychological knowledge to the scenario
3. Uses command phrase "Using your knowledge of..."
4. Tests both AO1 (knowledge) and AO2 (application)

## Scenario Ideas by Topic:

**Memory:**
- Student struggling to remember revision
- Eyewitness to an accident
- Person trying to learn new information
- Someone affected by misleading information

**Perception:**
- Person experiencing a visual illusion
- Artist using depth cues
- Driver in foggy conditions
- Child developing visual perception

**Development:**
- Child at different Piaget stages
- Student with fixed/growth mindset
- Classroom learning scenario
- Parent helping child learn

**Social Influence:**
- Peer pressure situation
- Workplace obedience scenario
- Bystander effect situation
- Conformity in social groups

**Brain/Neuropsychology:**
- Person recovering from brain injury
- Learning a new skill
- Damage to specific brain area

Mark allocation: 4-6 marks
- AO1: 2 marks for relevant psychological knowledge
- AO2: 2-4 marks for clear application to scenario

OUTPUT FORMAT:
**Question:**
[Scenario stem followed by application question, e.g. "Using your knowledge of [topic], explain..." [4 marks]]

**Mark Scheme:**
[AO1 points for knowledge]
[AO2 points for application to scenario]

**Explanation:**
[Model answer explicitly linking theory to the scenario]`;
}

/**
 * Generate a 9-mark extended response prompt
 */
export function getAQAGCSEPsychologyExtendedPrompt(
  topic: Topic,
  subtopic?: string
): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Psychology examiner creating a 9-MARK EXTENDED RESPONSE question.

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

${AQA_GCSE_PSYCH_MARK_SCHEME_CONVENTIONS}

${EVALUATION_FRAMEWORK_GRAVES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}

${topicGuidance}

## 9-Mark Question Requirements

**Question Format:**
- "Describe and evaluate [theory/model/study]" [9 marks]
- "Discuss [topic]. In your answer, refer to [research/study]" [9 marks]

**Mark Scheme Levels:**

Level 3 (7-9 marks):
- Knowledge is accurate and detailed
- Clear understanding demonstrated
- Effective evaluation with developed points
- Response is well organised
- Specialist terminology used appropriately

Level 2 (4-6 marks):
- Knowledge is mostly accurate with some detail
- Understanding is evident
- Some evaluation but may lack development
- Response has some organisation
- Some use of specialist terminology

Level 1 (1-3 marks):
- Knowledge is limited or inaccurate
- Understanding is limited
- Evaluation absent or ineffective
- Response lacks organisation
- Limited or no specialist terminology

## Model Answer Structure:

**AO1 Content (approximately 4 marks):**
- Description of theory/model/study
- Key features/stages/components
- Relevant research evidence
- Accurate terminology

**AO3 Content (approximately 5 marks):**
- At least 2 developed evaluation points
- Use GRAVES framework
- Explain + elaborate each point
- Consider counterarguments
- Make judgement where appropriate

## Suitable 9-Mark Topics:

**Memory:**
- Multi-store model
- Working memory model
- Eyewitness testimony research

**Perception:**
- Gibson's direct theory vs Gregory's constructivist theory
- Visual illusions and explanations

**Development:**
- Piaget's theory of cognitive development
- Mindset theory (Dweck)

**Social Influence:**
- Conformity (Asch's research)
- Obedience (Milgram's research)

**Brain:**
- Brain plasticity
- Localisation of brain function

OUTPUT FORMAT:
**Question:**
[9-mark extended writing question]

**Mark Scheme:**
[Level descriptors + indicative content for AO1 and AO3]

**Explanation:**
[Model Level 3 answer demonstrating excellent knowledge and evaluation]`;
}

/**
 * Generate a multiple choice question prompt
 */
export function getAQAGCSEPsychologyMultipleChoicePrompt(
  topic: Topic,
  difficulty: Difficulty,
  subtopic?: string
): string {
  const topicGuidance = PSYCHOLOGY_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert AQA GCSE Psychology examiner creating a MULTIPLE CHOICE question.

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

Topic: ${topic.name}
${subtopic ? `Subtopic: ${subtopic}` : ''}
Difficulty: ${difficulty}

${topicGuidance}

## Multiple Choice Question Requirements

Create ONE multiple choice question that:
1. Has exactly 4 options (A, B, C, D)
2. Has ONE clearly correct answer
3. Includes plausible distractors based on common misconceptions
4. Tests knowledge at GCSE level

**Common MCQ Types:**
- "Which of the following..." questions
- Identifying correct definitions
- Matching researchers to studies
- Identifying features of concepts
- Selecting correct brain areas/structures

**Distractor Ideas:**
- Common misconceptions
- Partially correct answers
- Confusing similar concepts
- Related but incorrect terms

OUTPUT FORMAT:
**Question:**
[Question stem]
A: [Option A]
B: [Option B]
C: [Option C]
D: [Option D]

**Mark Scheme:**
Correct answer: [Letter]
[Why each distractor is wrong]

**Explanation:**
[Full explanation of the correct answer]`;
}

/**
 * Generate a research methods question prompt
 */
export function getAQAGCSEPsychologyResearchMethodsPrompt(
  difficulty: Difficulty,
  subtopic?: string
): string {
  return `You are an expert AQA GCSE Psychology examiner creating a RESEARCH METHODS question.

${AQA_GCSE_PSYCH_ASSESSMENT_OBJECTIVES}

${TOPIC_KNOWLEDGE_RESEARCH_METHODS}

Subtopic: ${subtopic || 'General research methods'}
Difficulty: ${difficulty}

## Research Methods Question Types

**Easy (1-3 marks):**
- Identify the IV/DV in a study
- Name a sampling method
- State an ethical guideline
- Identify type of experiment

**Medium (4-6 marks):**
- Explain one strength and one limitation of a method
- Describe how to conduct a study ethically
- Explain why a control variable is important
- Calculate and interpret mean/median/mode

**Hard (9 marks):**
- Design a study to investigate a hypothesis
- Evaluate a research method in detail
- Discuss issues of validity and reliability

**Scenario Types:**
- Given a study description, identify method/variables
- Given data, calculate descriptive statistics
- Given a research aim, design appropriate method
- Evaluate ethical issues in given study

OUTPUT FORMAT:
**Question:**
[Research methods question with mark allocation]

**Mark Scheme:**
[Marking points appropriate to marks available]

**Explanation:**
[Full answer with research methods knowledge demonstrated]`;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Psychology GCSE mark ranges based on AQA specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };   // Identify, state, outline - basic recall
    case 'medium':
      return { min: 4, max: 6 };   // Describe, explain, apply to scenario
    case 'hard':
      return { min: 9, max: 12 };  // Evaluate, discuss, extended response requiring analysis and judgement
  }
}
