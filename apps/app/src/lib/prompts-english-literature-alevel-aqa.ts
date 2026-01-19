// AQA A-Level English Literature A (7712) Question Generation Prompts
// Based on official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/english/a-level/english-literature-a-7712

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';

// ============================================================================
// AQA A-LEVEL ENGLISH LITERATURE A SPECIFICATION DETAILS (7712)
// ============================================================================

const AQA_ALEVEL_ENG_LIT_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Analysis, basic interpretation | Focused passage analysis, single-text understanding |
| **Medium** | Synthesis, critical engagement | Construct conceptualised essay with critical interpretation and contextual links |
| **Hard** | Evaluation, comparative synthesis, interpretive debate | Complex comparative analysis requiring AO5 debate on competing interpretations |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires evaluating competing CRITICAL INTERPRETATIONS (named critics) and taking a position
- Must synthesise understanding across multiple texts and contexts (AO4)
- Demands perceptive, sophisticated analysis of form, structure and language (AO2)
- Requires perceptive understanding of contexts in shaping meanings (AO3)
- No single "correct" reading - student must engage productively with interpretive debate

**Easy (15-20 marks):** Focused analysis - explore a specific aspect with clear argument
**Medium (25 marks):** Conceptualised essay - sustained argument with critical engagement (Band 5)
**Hard (25-30 marks):** Complex comparative - sophisticated critical debate, evaluating interpretations (Band 6)
`;

const AQA_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## AQA A-Level English Literature A Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Articulate informed, personal and creative responses to literary texts, using associated concepts and terminology, and coherent, accurate written expression. | 24% |
| **AO2** | Analyse ways in which meanings are shaped in literary texts. | 24% |
| **AO3** | Demonstrate understanding of the significance and influence of the contexts in which literary texts are written and received. | 24% |
| **AO4** | Explore connections across literary texts. | 12% |
| **AO5** | Explore literary texts informed by different interpretations. | 16% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Love Through the Ages | Section A: Shakespeare (25 marks), Section B: Unseen poetry (25 marks), Section C: Comparing texts (25 marks) | 75 | 3hr (open book) | 40% |
| **Paper 2** | Texts in Shared Contexts | Option A: WW1 & Aftermath OR Option B: Modern Times. Section A: Set text (25 marks), Section B: Comparing texts (25 marks), Section C: Comparing texts (25 marks) | 75 | 2hr 30m (open book) | 40% |
| **NEA** | Independent Critical Study | Two texts: one poetry, one prose. 2500 words | 50 | Coursework | 20% |

### Question Types
- Shakespeare passage-based essay (25 marks, AO1, AO2, AO3, AO5)
- Unseen poetry comparison (25 marks, AO1, AO2)
- Comparative essay across texts (25 marks, all AOs)
- Set text essay (25 marks)
- NEA comparative critical study (50 marks)
`;

const AQA_ALEVEL_ENG_LIT_MARK_SCHEME = `
## AQA A-Level English Literature Mark Scheme (25 marks)

### Band 6 (22-25 marks) - Excellent, consistently impressive
**AO1:** Articulate, fluent and original arguments supported by well-integrated textual detail. Critical concepts and terminology used accurately.
**AO2:** Perceptive, detailed analysis of how form, structure and language shape meanings.
**AO3:** Perceptive, detailed understanding of the significance of contexts. Contexts thoughtfully linked to texts and task.
**AO4:** Perceptive, detailed exploration of connections across texts.
**AO5:** Perceptive understanding of the significance of different interpretations. Productive debate on interpretations.

### Band 5 (18-21 marks) - Competent, good response
**AO1:** Coherent, well-structured arguments supported by well-chosen textual detail. Accurate use of terminology.
**AO2:** Well-developed analysis of how form, structure and language shape meanings.
**AO3:** Well-developed understanding of contexts. Clear links between contexts and texts.
**AO4:** Well-developed exploration of connections across texts.
**AO5:** Good understanding of different interpretations. Effective use of interpretations.

### Band 4 (14-17 marks) - Competent, clear understanding
**AO1:** Clear arguments with appropriate textual support. Some accurate use of terminology.
**AO2:** Clear analysis of how form, structure and language shape meanings.
**AO3:** Clear understanding of contexts with some links to texts.
**AO4:** Clear exploration of connections across texts.
**AO5:** Clear understanding of different interpretations.

### Band 3 (10-13 marks) - Some understanding
**AO1:** Some arguments with textual support. Some use of terminology.
**AO2:** Some analysis of writer's methods.
**AO3:** Some understanding of contexts.
**AO4:** Some exploration of connections.
**AO5:** Some understanding of interpretations.

### Band 2 (6-9 marks) - Limited response
**AO1:** Limited arguments. Limited textual support. Limited terminology.
**AO2:** Limited analysis of methods.
**AO3:** Limited understanding of contexts.
**AO4:** Limited connections.
**AO5:** Limited awareness of interpretations.

### Band 1 (1-5 marks) - Very limited response
**AO1:** Very limited response. Very limited textual support.
**AO2:** Very limited analysis.
**AO3:** Very limited contextual awareness.
**AO4:** Very limited connections.
**AO5:** Very limited awareness of interpretations.

### NEA Mark Scheme (50 marks - 25 per text)
Same band descriptors apply, assessed across two texts with emphasis on:
- AO1: Quality of argument and written expression
- AO2: Analysis of methods
- AO4: Connections between texts
- AO5: Engagement with critical interpretations
`;

const AQA_ALEVEL_ENG_LIT_QUESTION_FORMATS = `
## Authentic AQA A-Level English Literature Question Formats

### Paper 1 Section A: Shakespeare (25 marks)
Format: "Examine the view that in [play], Shakespeare presents [interpretation]. You must relate your discussion to relevant contextual factors."
OR: "Discuss the significance of [passage] in relation to [theme] in [play] as a whole. You must relate your discussion to relevant contextual factors and make relevant use of literary concepts and terminology."
**Structure:**
- Passage provided OR comparative question
- Open book - students have clean copies of texts
- Must engage with interpretations (AO5)
- Must discuss contexts (AO3)

**Examples:**
- "Examine the view that in Othello, Shakespeare presents Iago as a character without conscience."
- "'Jealousy makes monsters of us all.' Discuss this view of Othello."
- "Discuss the significance of this passage in relation to the presentation of love in the play as a whole."

### Paper 1 Section B: Unseen Poetry (25 marks)
Format: "Compare the ways poets present [theme] in these two poems."
**Structure:**
- Two unseen poems provided
- Must compare methods and meanings
- AO1 and AO2 only

### Paper 1 Section C: Comparing Texts (25 marks)
Format: "Compare the ways [author A] and [author B] present [theme] in [text A] and [text B]."
OR: "'[Critical statement].' In the light of this statement, compare [theme] in [text A] and [text B]."
**Structure:**
- Comparing prose/poetry across periods
- All AOs assessed
- Must explore different interpretations

### Paper 2: Set Texts and Comparison (25 marks each)
Format: "'[Critical quotation].' Discuss this view of [text/theme]."
OR: "Compare the significance of [theme] in [text A] and [text B]."
**Structure:**
- Section A: Single set text
- Sections B & C: Comparative questions
- Contextual links to shared period (e.g., WW1)

**Examples:**
- "'In war literature, heroism is shown to be meaningless.' Discuss this view in relation to [text]."
- "Compare the ways writers present the effects of conflict in [text A] and [text B]."
- "'The aftermath of war reveals the true cost of conflict.' Compare how two texts present this idea."

### NEA: Independent Critical Study
Format: Student-devised question comparing two texts, one poetry and one prose, exploring a shared theme or literary concern.
**Structure:**
- 2500 words
- Must show independent research
- Critical interpretations must be evaluated
- Connections across texts foregrounded
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const OTHELLO_KNOWLEDGE = `
## OTHELLO - Text-Specific Knowledge

### Key Passages for Analysis
- **Act 1 Scene 3**: Othello's "rude am I in my speech" defence before the Senate
- **Act 2 Scene 1**: Iago's "O, you are well tuned now" aside about the lovers
- **Act 2 Scene 3**: Iago's "Reputation" speech to Cassio
- **Act 3 Scene 3**: The temptation scene - "Ha! I like not that" to Othello's vow
- **Act 3 Scene 3**: "Her honour is an essence that was not" - Iago poisons Othello
- **Act 4 Scene 1**: Othello's fit; eavesdropping on Cassio
- **Act 5 Scene 2**: "It is the cause" - Othello's soliloquy before murder
- **Act 5 Scene 2**: Desdemona's death and Emilia's revelation

### Key Quotations by Theme

**JEALOUSY:**
- "O, beware, my lord, of jealousy! It is the green-eyed monster which doth mock the meat it feeds on" (3.3)
- "Trifles light as air are to the jealous confirmations strong as proofs of holy writ" (3.3)
- "Jealousy so strong that judgement cannot cure" (2.1) - Iago on Othello

**RACE AND OTHERNESS:**
- "An old black ram is tupping your white ewe" (1.1) - Iago's racism
- "I am not what I am" (1.1) - Iago; also applies to Othello's divided identity
- "The Moor" - used 58 times; Othello named rarely
- "Her father loved me, oft invited me" (1.3) - evidence of Othello's acceptance

**REPUTATION AND HONOUR:**
- "Reputation, reputation, reputation! O, I have lost my reputation! I have lost the immortal part of myself" (2.3) - Cassio
- "Good name in man and woman, dear my lord, is the immediate jewel of their souls" (3.3) - Iago
- "He that filches from me my good name robs me of that which not enriches him and makes me poor indeed" (3.3)

**DECEPTION AND MANIPULATION:**
- "I am not what I am" (1.1) - Iago's Satanic inversion
- "When devils will the blackest sins put on, they do suggest at first with heavenly shows" (2.3)
- "Honest Iago" - used repeatedly with dramatic irony

**LOVE AND TRUST:**
- "She loved me for the dangers I had passed, and I loved her that she did pity them" (1.3)
- "My life upon her faith!" (1.3) - Othello's tragic misplaced trust
- "O, the more angel she, and you the blacker devil!" (5.2) - Emilia

### Critical Interpretations
- **A.C. Bradley**: Othello as noble victim; Iago as motiveless malignity
- **F.R. Leavis**: Othello as self-dramatising egotist who is complicit in his fall
- **Feminist readings**: Desdemona's passivity vs agency; patriarchal control
- **Postcolonial readings**: Othello's internalised racism; colonial anxiety
- **New Historicist**: Venetian anxieties about race, military, and empire

### Jacobean Context
- **Racial attitudes**: Moors in England; ambivalent representation
- **Venice**: Military republic; Ottoman threat; trade and tolerance
- **Cyprus**: Military outpost; liminal space away from civilisation
- **Marriage and patriarchy**: Women as property; male honour
`;

const GATSBY_KNOWLEDGE = `
## THE GREAT GATSBY - Text-Specific Knowledge

### Key Chapters/Moments
- **Chapter 1**: Nick's arrival; first glimpse of Gatsby reaching for green light
- **Chapter 3**: Gatsby's party; Nick meets Gatsby
- **Chapter 4**: Gatsby's history; Wolfshiem lunch; Jordan's revelation
- **Chapter 5**: Gatsby and Daisy reunited; tour of Gatsby's mansion
- **Chapter 6**: Gatsby's true origins as James Gatz
- **Chapter 7**: Confrontation at Plaza Hotel; Myrtle's death
- **Chapter 8**: Gatsby's vigil; George Wilson's revenge
- **Chapter 9**: Funeral; Nick's meditation on the American Dream

### Key Quotations by Theme

**THE AMERICAN DREAM:**
- "Gatsby believed in the green light, the orgastic future that year by year recedes before us" (Ch. 9)
- "He had come a long way to this blue lawn, and his dream must have seemed so close that he could hardly fail to grasp it" (Ch. 1)
- "So we beat on, boats against the current, borne back ceaselessly into the past" (final line)
- "Can't repeat the past? Why of course you can!" (Ch. 6)

**WEALTH AND CORRUPTION:**
- "They were careless people, Tom and Daisy—they smashed up things and creatures and then retreated back into their money" (Ch. 9)
- "Her voice is full of money" (Ch. 7)
- "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life" (Ch. 2)

**TIME AND THE PAST:**
- "In my younger and more vulnerable years" (opening)
- "He talked a lot about the past, and I gathered that he wanted to recover something, some idea of himself perhaps" (Ch. 6)
- "He knew that when he kissed this girl... his mind would never romp again like the mind of God" (Ch. 6)

**APPEARANCE VS REALITY:**
- "The truth was that Jay Gatsby of West Egg, Long Island, sprang from his Platonic conception of himself" (Ch. 6)
- "I found out what your 'drug-stores' were... He and this Wolfshiem bought up a lot of side-street drug-stores" (Ch. 7)
- Gatsby's library: real books vs cut pages - substance vs show

**CLASS AND SOCIAL MOBILITY:**
- East Egg vs West Egg: "old money" vs "new money"
- Valley of Ashes: the underclass forgotten by the Dream
- "You're worth the whole damn bunch put together" (Ch. 8) - Nick to Gatsby

### Critical Interpretations
- **Lionel Trilling**: Gatsby as American Everyman pursuing the Dream
- **Marius Bewley**: The novel as critique of American materialism
- **Feminist readings**: Daisy and Jordan as products of patriarchal society; limited agency
- **Marxist readings**: Class division; exploitation of workers; capitalism's corruption
- **Postcolonial**: American imperialism; racial anxieties (Tom's white supremacism)

### 1920s Context
- **Jazz Age**: Post-war hedonism; Prohibition; bootlegging
- **Economic boom**: Stock speculation; new rich; conspicuous consumption
- **Disillusionment**: Lost generation; hollowness beneath prosperity
- **Old vs New money**: Social stratification despite American Dream mythology
`;

const WUTHERING_HEIGHTS_KNOWLEDGE = `
## WUTHERING HEIGHTS - Text-Specific Knowledge

### Key Chapters/Moments
- **Chapter 3**: Lockwood's dream of Catherine's ghost at the window
- **Chapter 6**: Heathcliff and Catherine spy on Thrushcross Grange
- **Chapter 9**: Catherine's "I am Heathcliff" speech to Nelly
- **Chapter 11**: Heathcliff's return; Isabella's infatuation
- **Chapter 15**: Catherine and Heathcliff's final meeting
- **Chapter 16**: Catherine's death; Heathcliff's grief
- **Chapter 29**: Heathcliff opens Catherine's grave
- **Chapter 34**: Heathcliff's death; reunion in death implied

### Key Quotations by Theme

**PASSIONATE LOVE:**
- "I am Heathcliff! He's always, always in my mind: not as a pleasure... but as my own being" (Ch. 9)
- "Whatever our souls are made of, his and mine are the same" (Ch. 9)
- "Nelly, I AM Heathcliff! He's more myself than I am" (Ch. 9)
- "If he loved with all the powers of his puny being, he couldn't love as much in eighty years as I could in a day" (Ch. 14)

**REVENGE AND CRUELTY:**
- "I have no pity! I have no pity! The more the worms writhe, the more I yearn to crush out their entrails" (Ch. 14)
- "I want to encourage you to do your worst" (Ch. 11) - Heathcliff
- Hindley's cruelty to young Heathcliff; Heathcliff's revenge on Hareton

**NATURE AND WILDNESS:**
- "My love for Linton is like the foliage in the woods: time will change it... My love for Heathcliff resembles the eternal rocks beneath" (Ch. 9)
- The moors as freedom, wildness, passion
- Wuthering Heights vs Thrushcross Grange: storm vs calm

**SOCIAL CLASS:**
- "It would degrade me to marry Heathcliff now" (Ch. 9) - Catherine's tragic choice
- Heathcliff's rise from "dirty lad" to gentleman
- Class revenge: Heathcliff acquiring both Heights and Grange

**THE SUPERNATURAL:**
- "Be with me always—take any form—drive me mad! only do not leave me in this abyss" (Ch. 16)
- Catherine's ghost at the window
- Shepherds seeing Heathcliff and Catherine's ghosts on the moors

### Critical Interpretations
- **Romantic reading**: Transcendent love; nature vs civilisation
- **Marxist reading**: Class conflict; property and inheritance
- **Feminist readings**: Catherine's limited choices; domestic entrapment
- **Psychoanalytic**: Doubling; repression; the uncanny
- **Postcolonial**: Heathcliff's origins; racial otherness

### Victorian Context
- **Class mobility**: Self-made men; fear of the "other"
- **Romanticism vs Victorian realism**: Emily Brontë's unique position
- **Women's limited options**: Marriage as survival; property laws
- **Gothic tradition**: Supernatural elements; isolated settings
`;

const HANDMAIDS_TALE_KNOWLEDGE = `
## THE HANDMAID'S TALE - Text-Specific Knowledge

### Key Chapters/Moments
- **Night sections**: Offred's memories and inner life
- **Chapter 1-2**: Introduction to Gilead; the Republic's rules
- **Shopping day**: Offred and Ofglen; public executions
- **The Ceremony**: Ritualized rape; biblical justification
- **Jezebel's visit**: The Commander's hypocrisy
- **Moira's story**: Resistance and its failure
- **The Salvaging**: Public execution ritual
- **Historical Notes**: Academic frame; ironies of male scholarship

### Key Quotations by Theme

**PATRIARCHAL CONTROL:**
- "We are two-legged wombs, that's all: sacred vessels, ambulatory chalices" (Ch. 23)
- "Don't let the bastards grind you down" (Nolite te bastardes carborundorum)
- "A thing is valued... only if it is rare and hard to get" (Ch. 8)
- "We lived, as usual, by ignoring" (Ch. 28) - how Gilead arose

**LANGUAGE AND POWER:**
- "Ordinary... is what you are used to. This may not seem ordinary to you now, but after a time it will" (Ch. 6)
- "Context is all" (Ch. 24)
- Names erased: "Of-fred" - possession; real name never revealed
- Reading forbidden to women; Scrabble as rebellion

**FEMALE RESISTANCE:**
- "I intend to last" (Ch. 8)
- Moira's escape attempts; her ultimate fate
- Ofglen and the Mayday resistance
- Offred's narrative as act of resistance and survival

**MEMORY AND IDENTITY:**
- "I would like to believe this is a story I'm telling" (Ch. 7)
- Memories of "the time before": Luke, her daughter, her job
- "I wait. I compose myself. My self is a thing I must now compose" (Ch. 8)

**RELIGION AND CONTROL:**
- "Give me children, or else I die" (Genesis 30:1-3) - the Ceremony's justification
- The Aunts: "Blessed are the meek"
- Religious language weaponised for control

### Critical Interpretations
- **Feminist critique**: Patriarchal oppression; reproductive rights
- **Dystopian tradition**: Orwell, Huxley; warnings about totalitarianism
- **Postmodern**: Unreliable narration; the Historical Notes' irony
- **Historical parallels**: American Puritanism; theocracies; Nazi Germany

### Context
- **1980s context**: Reagan era; religious right; anti-feminism backlash
- **Contemporary relevance**: Reproductive rights debates; authoritarianism
- **Atwood's speculative fiction**: "I didn't put in anything humans hadn't already done"
`;

const STREETCAR_KNOWLEDGE = `
## A STREETCAR NAMED DESIRE - Text-Specific Knowledge

### Key Scenes
- **Scene 1**: Blanche arrives; "They told me to take a streetcar named Desire"
- **Scene 2**: Stanley discovers Blanche's "papers"; Belle Reve lost
- **Scene 3**: Poker night; Stanley's violent outburst; "STELLA!"
- **Scene 4**: Blanche tries to persuade Stella to leave; "deliberate cruelty"
- **Scene 5**: Blanche's flirtation with the young collector
- **Scene 6**: Blanche and Mitch's date; the story of Allan Grey
- **Scene 9**: Mitch confronts Blanche about her past
- **Scene 10**: Stanley's rape of Blanche
- **Scene 11**: Blanche's departure; "kindness of strangers"

### Key Quotations by Theme

**DESIRE VS DEATH:**
- "They told me to take a streetcar named Desire, and then transfer to one called Cemeteries" (Scene 1)
- "The opposite is desire. So do you wonder? How could you possibly wonder!" (Scene 9)
- "Death—I used to sit here and she used to sit over there and death was as close as you are" (Scene 1)

**ILLUSION VS REALITY:**
- "I don't want realism. I want magic!" (Scene 9)
- "I don't tell the truth, I tell what ought to be truth" (Scene 9)
- "I never lied in my heart" (Scene 9)
- The paper lantern over the naked bulb

**MASCULINITY AND VIOLENCE:**
- "Every man is a king! And I am the king around here, so don't forget it!" (Scene 11)
- The rape: "We've had this date with each other from the beginning!" (Scene 10)
- Smashing plates and lightbulbs; physical dominance

**THE OLD SOUTH:**
- "Belle Reve"—beautiful dream; loss of plantation culture
- "It was like you suddenly turned a blinding light on something that had always been half in shadow" (Scene 4)
- Blanche's education, refinement vs Stanley's "common" origins

**SEXUALITY AND PUNISHMENT:**
- "Flamingo Hotel" reputation; "intimacies with strangers"
- Allan Grey's suicide after Blanche's rejection
- Women punished for sexuality; male licence

### Critical Interpretations
- **Feminist readings**: Blanche as victim of patriarchy; rape as silencing
- **Marxist readings**: Class conflict; death of Southern aristocracy
- **Psychoanalytic**: Desire, repression, trauma
- **Queer readings**: Allan Grey; Williams' own sexuality; coded homosexuality
- **Post-war America**: Brute capitalism vs old values

### 1940s Context
- **Post-war America**: New order; masculinity revalued
- **The Old South**: Nostalgia vs reality; plantation mythology
- **Women's position**: Dependence on men; marriage as survival
- **Mental health**: Asylums; treatment of "difficult" women
`;

// ============================================================================
// TEXT KNOWLEDGE SELECTOR
// ============================================================================

function getTextSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  if (topicLower.includes('othello')) {
    return OTHELLO_KNOWLEDGE;
  }
  if (topicLower.includes('gatsby')) {
    return GATSBY_KNOWLEDGE;
  }
  if (topicLower.includes('wuthering')) {
    return WUTHERING_HEIGHTS_KNOWLEDGE;
  }
  if (topicLower.includes('handmaid')) {
    return HANDMAIDS_TALE_KNOWLEDGE;
  }
  if (topicLower.includes('streetcar')) {
    return STREETCAR_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const textKnowledgeSection = textKnowledge
    ? `
// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE - USE THIS FOR ACCURATE QUESTION GENERATION
// ============================================================================

${textKnowledge}

**IMPORTANT**: Use the quotations, passages, context, and critical interpretations above.
- Reference specific passages/chapters for extract questions
- Model answers MUST incorporate the specific quotations provided
- Engage with the named critical interpretations (AO5)
- Draw on the contextual points provided (AO3)
`
    : '';

  return `You are an expert AQA A-Level English Literature A examiner creating exam-style questions.

${AQA_ALEVEL_ENG_LIT_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_ENG_LIT_MARK_SCHEME}

${AQA_ALEVEL_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds, requiring sophisticated critical analysis
2. **Authentic AQA Style**: Match real AQA paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focused single-text analysis, 15-mark style questions
   - Medium: 25-mark essay questions requiring conceptualised response
   - Hard: Complex comparative analysis with critical interpretations (AO5)

## A-Level Specific Requirements
- Questions must require engagement with CRITICAL INTERPRETATIONS (AO5)
- Questions must require CONTEXTUAL understanding (AO3)
- Include phrases like: "Examine the view that...", "In the light of this statement...", "'[Critical quotation]' - Discuss..."
- For passage-based questions, describe the passage context

## CRITICAL: Extract/Passage Handling Rules

### FOR SHAKESPEARE (Othello, Taming of the Shrew) - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL PASSAGE TEXT** in the question - Shakespeare is public domain
- Generate authentic passages of 15-25 lines from the relevant scene
- Format with character names and speech prefixes as in the original text

### FOR OTHER TEXTS (Great Gatsby, Wuthering Heights, Handmaid's Tale, etc.) - COPYRIGHTED:
- Provide CLEAR LOCATION REFERENCES so students can look up the passage
- Format: "Read from Chapter [X], from '[opening words]...' to '[closing words]'"
- A-Level is OPEN BOOK so students will have their texts with them

## Response Format
Return JSON with:
- "content": Question text (with passage context description if applicable)
- "marks": Total marks
- "solution": Model answer demonstrating appropriate band response (MUST use specific quotations and engage with critical interpretations)
- "markScheme": Array of band descriptors and indicative content points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('englishliterature')}`;
}

export function getAQAALevelEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a 15-mark focused analysis question OR a Band 3-4 level question.

**Question Types:**
- "Analyse how [author] presents [theme/character] in this passage"
- "What is the significance of [element] in [text]?"
- Focused on specific methods or a particular passage

**Band 3-4 Level Descriptors (10-17 marks):**
- Band 4 (14-17): Clear arguments; appropriate textual support; clear analysis of methods
- Band 3 (10-13): Some arguments; some textual support; some analysis

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a 25-mark essay question requiring conceptualised response.

**Question Types:**
For Shakespeare (with passage):
- "Discuss the significance of this passage in relation to [theme] in the play as a whole."
- Include: "You must relate your discussion to relevant contextual factors."
- Describe passage context (DO NOT reproduce copyrighted text)

For set texts:
- "Examine the view that [interpretation of text]."
- "'[Critical quotation].' Discuss this view of [text]."
- Include requirement to engage with interpretations

For comparison:
- "Compare the ways [author A] and [author B] present [theme]."

**Band 5 Level Descriptors (18-21 marks):**
- Coherent, well-structured arguments supported by well-chosen textual detail
- Well-developed analysis of how form, structure and language shape meanings
- Well-developed understanding of contexts
- Good understanding of different interpretations

Include these AQA-specific phrases:
- "Examine the view that..."
- "In the light of this statement..."
- "You must relate your discussion to relevant contextual factors"

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 25-mark question requiring Band 6 response with sophisticated critical engagement.

**Question Types:**
- "'[Provocative critical quotation about the text].' Examine this view of [text]."
- "Compare how [author A] and [author B] present [complex theme], considering different critical interpretations."
- Questions requiring evaluation of competing critical perspectives

**Requirements:**
- Must require engagement with AO5 (different interpretations)
- Must require sophisticated contextual understanding (AO3)
- For comparison: all five AOs assessed

**Band 6 Response Characteristics (22-25 marks):**
- Articulate, fluent and original arguments
- Perceptive, detailed analysis of how form, structure and language shape meanings
- Perceptive understanding of the significance of contexts
- Perceptive, detailed exploration of connections across texts
- Productive debate on interpretations

Include sophisticated critical framing:
- "'[Academic/critical quotation].' Examine/Discuss this view..."
- Reference to specific critical approaches where appropriate

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const textKnowledgePrompt = textKnowledge
    ? `
## TEXT-SPECIFIC KNOWLEDGE TO USE
${textKnowledge}

**USE THE ABOVE KNOWLEDGE TO**:
- Reference specific passages/chapters when creating questions
- Include accurate quotations in your model answer
- Engage with the named critical interpretations (AO5)
- Draw on contextual points (AO3)
- Ensure thematic analysis aligns with the text's actual content
`
    : '';

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('english-literature', difficulty);

  return `Generate an AQA A-Level English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${textKnowledgePrompt}

${enhancedMarkSchemeGuidance}

IMPORTANT - EXTRACT RULES:
- For SHAKESPEARE: Include the ACTUAL PASSAGE TEXT (15-25 lines) - it's public domain
- For OTHER TEXTS: Provide clear location references (Chapter/Page) - A-Level is open book
- A-Level requires sophisticated critical engagement - include critical quotations/interpretations
- Include contextual requirements where appropriate
- Model answer should demonstrate the target band's characteristics
- Model answer MUST include specific quotations and engage with critical interpretations

Return valid JSON:
{
  "content": "question text with passage context if applicable",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full level descriptors, indicative content with specific points for/against, model answer structure, evaluation factors, and examiner tips",
  "markScheme": ["Band descriptors and indicative content points as array"]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  // AQA A-Level English Literature mark allocations
  // Easy: Focused analysis questions (15 marks)
  // Medium: Standard essay questions (25 marks)
  // Hard: Complex comparative/synoptic essays (25 marks, but with Band 6 expectations)
  // Note: Most AQA English Lit questions are 25 marks - difficulty is differentiated by cognitive demand
  switch (difficulty) {
    case 'easy':
      return { min: 15, max: 20 }; // Focused analysis, passage-based
    case 'medium':
      return { min: 25, max: 25 }; // Standard essay
    case 'hard':
      return { min: 25, max: 30 }; // Complex comparative with sophisticated critical engagement
  }
}
