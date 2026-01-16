// Edexcel A-Level English Literature (9ET0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/english-literature-2015.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL A-LEVEL ENGLISH LITERATURE SPECIFICATION DETAILS (9ET0)
// ============================================================================

const EDEXCEL_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level English Literature Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Articulate informed, personal and creative responses to literary texts, using associated concepts and terminology, and coherent, accurate written expression. | 16% |
| **AO2** | Analyse ways in which meanings are shaped in literary texts. | 28% |
| **AO3** | Demonstrate understanding of the significance and influence of the contexts in which literary texts are written and received. | 20% |
| **AO4** | Explore connections across literary texts. | 16% |
| **AO5** | Explore literary texts informed by different interpretations. | 20% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Drama | Section A: Shakespeare (35 marks), Section B: Other drama (35 marks) | 70 | 2hr 15m (closed book) | 30% |
| **Paper 2** | Prose | Two prose texts from different periods. One question (40 marks) | 40 | 1hr 15m (closed book) | 20% |
| **Paper 3** | Poetry | Section A: Post-2000 specified poetry (35 marks), Section B: Comparative poetry (35 marks), Section C: Unseen poem (20 marks) | 90 | 2hr 15m (open book for A, closed for B&C) | 30% |
| **Coursework** | Comparative Essay | Two texts, prose and poetry | 60 | 2500-3000 words | 20% |

### Question Types
- Shakespeare tragedy/comedy essay (35 marks)
- Other drama essay (35 marks)
- Comparative prose essay (40 marks)
- Post-2000 poetry essay (35 marks)
- Comparative poetry essay (35 marks)
- Unseen poem analysis (20 marks)
- Coursework comparative essay (60 marks)
`;

const EDEXCEL_ALEVEL_ENG_LIT_MARK_SCHEME = `
## Edexcel A-Level English Literature Mark Scheme

### 35-Mark Questions (Papers 1 & 3)

#### Level 5 (29-35 marks) - Perceptive, assured, sophisticated
**AO1:** Perceptive, assured and sophisticated argument, confidently addressing the question with a sustained and coherent critical focus. Confident use of relevant terminology.
**AO2:** Perceptive, sophisticated analysis of how meanings are shaped. Evaluative discussion of effects.
**AO3:** Perceptive understanding of contexts. Texts evaluated and illuminated by contexts.
**AO4:** Perceptive exploration of connections. Nuanced appreciation of similarities and differences.
**AO5:** Evaluative and illuminating use of different interpretations. Own view confidently developed.

#### Level 4 (22-28 marks) - Coherent, developed, competent
**AO1:** Coherent, developed argument, clearly addressing the question. Appropriate use of terminology.
**AO2:** Developed analysis of how meanings are shaped. Clear discussion of effects.
**AO3:** Developed understanding of contexts. Clear links between texts and contexts.
**AO4:** Developed exploration of connections. Clear appreciation of similarities and differences.
**AO5:** Clear understanding of different interpretations. Developed own view.

#### Level 3 (15-21 marks) - Reasonable, some understanding
**AO1:** A reasonably sustained argument. Some appropriate terminology.
**AO2:** Reasonable analysis of meanings. Some discussion of effects.
**AO3:** Reasonable understanding of contexts.
**AO4:** Reasonable exploration of connections.
**AO5:** Some understanding of different interpretations.

#### Level 2 (8-14 marks) - Some response, limited
**AO1:** Some argument, limited coherence. Limited use of terminology.
**AO2:** Some analysis of meanings. Limited discussion.
**AO3:** Some awareness of contexts.
**AO4:** Some connections made.
**AO5:** Limited awareness of interpretations.

#### Level 1 (1-7 marks) - Very limited
**AO1:** Very limited response. Little relevant argument.
**AO2:** Very limited analysis.
**AO3:** Very limited contextual awareness.
**AO4:** Very limited connections.
**AO5:** Very limited awareness of interpretations.

### 40-Mark Prose Comparison (Paper 2)
Same level descriptors with emphasis on:
- Comparative skills (AO4)
- Analysis of prose techniques (AO2)
- Contextual understanding across periods (AO3)

### 20-Mark Unseen Poetry (Paper 3 Section C)
**Level 5 (17-20):** Perceptive, assured analysis. Sophisticated understanding of the poem.
**Level 4 (13-16):** Developed, clear analysis. Secure understanding.
**Level 3 (9-12):** Reasonable analysis. Some understanding.
**Level 2 (5-8):** Some analysis. Limited understanding.
**Level 1 (1-4):** Very limited analysis.

### Coursework Mark Scheme (60 marks)
- AO1: 10 marks - Argument and expression
- AO2: 20 marks - Analysis of methods
- AO3: 10 marks - Contexts
- AO4: 10 marks - Connections
- AO5: 10 marks - Interpretations
`;

const EDEXCEL_ALEVEL_ENG_LIT_QUESTION_FORMATS = `
## Authentic Edexcel A-Level English Literature Question Formats

### Paper 1 Section A: Shakespeare (35 marks)
Format: "'[Critical quotation about the play].' How far do you agree with this view?"
OR: "Explore the significance of [theme/technique] in [play]."
**Structure:**
- Essay question (no passage - closed book)
- Must address tragic or comic elements (depending on play)
- Requires engagement with critical views (AO5)

**Examples (Tragedy):**
- "'Othello's nobility makes his fall all the more tragic.' How far do you agree with this view?"
- "'Hamlet is a play about delay, not revenge.' Discuss this view."
- "Explore the significance of the supernatural in Hamlet."

**Examples (Comedy):**
- "'Twelfth Night celebrates love in all its forms.' How far do you agree?"
- "Explore the role of disguise in creating comic effect in Twelfth Night."

### Paper 1 Section B: Other Drama (35 marks)
Format: "'[Critical quotation].' How far do you agree with this view of [play]?"
OR: "Explore the presentation of [theme/character] in [play]."
**Structure:**
- Essay question (no passage - closed book)
- One question per set text

**Examples:**
- "'Blanche's tragedy is that she can never escape her past.' How far do you agree with this view of A Streetcar Named Desire?"
- "Explore the significance of the setting in A Streetcar Named Desire."
- "'Hedda is a victim of society.' How far do you agree?"

### Paper 2: Prose (40 marks)
Format: "Compare the ways [author A] and [author B] present [theme]."
OR: "'[Critical statement about the theme].' Compare how [theme] is presented in [text A] and [text B] in light of this statement."
**Structure:**
- Comparative question
- Two prose texts from different periods
- Closed book

**Examples:**
- "Compare the ways Shelley and Stoker present monstrosity in Frankenstein and Dracula."
- "'The Gothic is always about transgression.' Compare how transgression is presented in your two prose texts."

### Paper 3 Section A: Post-2000 Poetry (35 marks)
Format: "Explore the significance of [theme/element] in [poet's] collection."
OR: "'[Critical quotation about the collection].' How far do you agree with this view?"
**Structure:**
- Open book (annotated anthology)
- Focus on methods and meanings

### Paper 3 Section B: Comparative Poetry (35 marks)
Format: "Compare the ways [poet A] and [poet B] present [theme]."
**Structure:**
- Closed book
- Compare poets from different periods (e.g., Keats and Rossetti)

### Paper 3 Section C: Unseen Poetry (20 marks)
Format: "Explore how the poet presents [theme] in this poem."
**Structure:**
- Single unseen poem provided
- AO1 and AO2 only

### Coursework: Comparative Essay (60 marks)
Format: Student-devised question comparing two texts (one poetry, one prose).
**Structure:**
- 2500-3000 words
- Must compare texts across genres
- Critical perspectives must be engaged with
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const OTHELLO_KNOWLEDGE = `
## OTHELLO - Text-Specific Knowledge

### Key Passages
- **Act 1 Scene 3**: Othello's defence before the Senate
- **Act 3 Scene 3**: The temptation scene - Iago poisons Othello's mind
- **Act 5 Scene 2**: "It is the cause" - murder and revelation

### Key Quotations
**JEALOUSY:** "O, beware, my lord, of jealousy! It is the green-eyed monster" (3.3)
**RACE:** "An old black ram is tupping your white ewe" (1.1)
**REPUTATION:** "Good name in man and woman... is the immediate jewel of their souls" (3.3)
**DECEPTION:** "I am not what I am" (1.1)

### Critical Interpretations
- **A.C. Bradley**: Othello as noble victim; Iago as motiveless malignity
- **F.R. Leavis**: Othello as self-dramatising egotist
- **Feminist readings**: Desdemona's agency; patriarchal control
- **Postcolonial readings**: Othello's internalised racism
`;

const HAMLET_KNOWLEDGE = `
## HAMLET - Text-Specific Knowledge

### Key Passages
- **Act 1 Scene 2**: "O, that this too too solid flesh would melt"
- **Act 1 Scene 5**: Ghost's revelation
- **Act 3 Scene 1**: "To be or not to be"
- **Act 3 Scene 4**: Closet scene with Gertrude
- **Act 5 Scene 2**: Final duel and deaths

### Key Quotations
**DELAY:** "The time is out of joint: O cursed spite, that ever I was born to set it right!" (1.5)
**APPEARANCE VS REALITY:** "Seems, madam! Nay, it is; I know not 'seems'" (1.2)
**MORTALITY:** "To be, or not to be: that is the question" (3.1)
**CORRUPTION:** "Something is rotten in the state of Denmark" (1.4)

### Critical Interpretations
- **Romantic (Coleridge)**: Hamlet's excessive thinking leads to paralysis
- **Psychoanalytic (Ernest Jones)**: Oedipal conflict
- **Feminist readings**: Gertrude and Ophelia's limited agency
- **Political readings**: Court corruption; surveillance
`;

const STREETCAR_KNOWLEDGE = `
## A STREETCAR NAMED DESIRE - Text-Specific Knowledge

### Key Scenes
- **Scene 1**: Blanche arrives; "streetcar named Desire"
- **Scene 3**: Poker night; Stanley's violence; "STELLA!"
- **Scene 6**: Blanche tells Mitch about Allan Grey
- **Scene 10**: Stanley's rape of Blanche
- **Scene 11**: "kindness of strangers"

### Key Quotations
**ILLUSION VS REALITY:** "I don't want realism. I want magic!" (Scene 9)
**DESIRE:** "They told me to take a streetcar named Desire" (Scene 1)
**MASCULINITY:** "Every man is a king!" (Scene 11)

### Critical Interpretations
- **Feminist**: Blanche as victim of patriarchy; rape as silencing
- **Marxist**: Class conflict; death of Southern aristocracy
- **Queer readings**: Allan Grey; Williams' coded homosexuality
`;

function getTextSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();
  if (topicLower.includes('othello')) return OTHELLO_KNOWLEDGE;
  if (topicLower.includes('hamlet')) return HAMLET_KNOWLEDGE;
  if (topicLower.includes('streetcar')) return STREETCAR_KNOWLEDGE;
  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const textKnowledgeSection = textKnowledge ? `
## TEXT-SPECIFIC KNOWLEDGE
${textKnowledge}

**Use quotations and critical interpretations above in your questions and model answers.**
` : '';

  return `You are an expert Edexcel A-Level English Literature examiner creating exam-style questions.

${EDEXCEL_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_ENG_LIT_MARK_SCHEME}

${EDEXCEL_ALEVEL_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds, requiring sophisticated critical analysis
2. **Authentic Edexcel Style**: Match real Edexcel paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focused analysis, 20-mark unseen poetry style questions
   - Medium: 35-mark essay questions requiring conceptualised response
   - Hard: Complex comparative analysis (40 marks) with critical interpretations

## A-Level Specific Requirements
- Questions must include CRITICAL QUOTATIONS for debate (AO5)
- Use "How far do you agree..." or "Explore the significance of..."
- For tragedy/comedy texts, questions should address genre conventions
- Comparison questions must span different periods

## CRITICAL: Extract/Passage Handling Rules

### FOR SHAKESPEARE (Othello, Hamlet, etc.) - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL PASSAGE TEXT** in the question - Shakespeare is public domain
- Generate authentic passages of 15-25 lines from the relevant scene
- Format with character names and speech prefixes as in the original text

### FOR OTHER TEXTS (A Streetcar Named Desire, etc.) - COPYRIGHTED:
- Edexcel A-Level Drama is CLOSED BOOK so questions are essay-based (no extracts)
- For prose comparison (Paper 2), provide location references for students

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer demonstrating appropriate level response
- "markScheme": Array of level descriptors and indicative content points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('englishliterature')}`;
}

export function getEdexcelALevelEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a 20-mark unseen poetry style question OR a Level 3 level question.

**Question Types:**
- "Explore how the poet presents [theme] in this poem"
- "Analyse the significance of [element] in the extract"
- Focused on specific methods or techniques

**Level 3 Descriptors (9-12 marks for 20-mark questions):**
- Reasonable analysis of meanings
- Some discussion of effects
- Some appropriate terminology

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create a 35-mark essay question requiring Level 4-5 response.

**Question Types:**
For Shakespeare:
- "'[Critical quotation about tragedy/comedy].' How far do you agree with this view of [play]?"
- "Explore the significance of [theme/technique] in [play]."

For Other Drama:
- "'[Critical quotation].' How far do you agree with this view of [play]?"
- "Explore the presentation of [character/theme] in [play]."

For Poetry:
- "Compare the ways [poet A] and [poet B] present [theme]."
- "Explore the significance of [theme] in [poet's] collection."

**Level 4-5 Descriptors (22-35 marks):**
- Level 5 (29-35): Perceptive, assured, sophisticated argument; evaluative use of interpretations
- Level 4 (22-28): Coherent, developed argument; clear understanding of interpretations

Include critical quotations for debate:
- "'[Academic/critical statement about the text].' How far do you agree..."

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a 40-mark comparative question requiring Level 5 response.

**Question Types:**
- "'[Provocative critical statement about the theme].' Compare how [theme] is presented in [text A] and [text B] in light of this statement."
- "Compare the ways [author A] and [author B] present [complex theme]."
- Questions requiring evaluation of texts across different periods

**Requirements:**
- Must be comparative (AO4)
- Must require sophisticated contextual understanding across periods (AO3)
- Must engage with critical interpretations (AO5)

**Level 5 Response Characteristics (33-40 marks):**
- Perceptive, assured and sophisticated argument
- Perceptive, sophisticated analysis of how meanings are shaped
- Perceptive understanding of contexts across periods
- Perceptive exploration of connections
- Evaluative and illuminating use of different interpretations

Include sophisticated critical framing for comparison.

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an Edexcel A-Level English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

IMPORTANT:
- A-Level requires critical quotations for debate - include them in questions
- Use "How far do you agree..." format for critical engagement
- For Shakespeare, address tragic or comic conventions where relevant
- Model answer should demonstrate the target level's characteristics

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer at appropriate level",
  "markScheme": ["Level descriptors and indicative content points"]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 20, max: 20 };
    case 'medium':
      return { min: 35, max: 35 };
    case 'hard':
      return { min: 40, max: 40 };
  }
}
