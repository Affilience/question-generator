// OCR A-Level English Literature (H472) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/english-literature-h072-h472-from-2015/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR A-LEVEL ENGLISH LITERATURE SPECIFICATION DETAILS (H472)
// ============================================================================

const OCR_ALEVEL_ENG_LIT_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Analysis, identification, close reading | Analyse specific passages, identify literary techniques, explain how meanings are shaped in focused extracts |
| **Medium** | Interpretation, contextual analysis, evaluation | Discuss significance of passages to whole texts, engage with critical perspectives, develop sustained arguments about themes/characters |
| **Hard** | Synthesis, sophisticated interpretation, comparative evaluation | Compare texts across topic areas, evaluate critical debates with original interpretive positions, synthesise analysis across multiple texts and contexts |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires sophisticated engagement with multiple critical interpretations (AO5)
- Demands synthesis of contextual understanding across literary movements and periods
- Must develop original, defensible interpretive positions on contested critical debates
- Requires comparative analysis showing illuminating connections across texts
- No single "correct" reading - demands confident navigation of critical complexity

**Easy (20 marks):** Focused passage analysis demonstrating competent understanding of how meanings are shaped. Requires clear textual support and awareness of context.
**Medium (30 marks):** Sustained essay requiring accomplished analysis of whole texts, thoughtful engagement with contexts, and evaluation of different interpretations.
**Hard (30-60 marks):** Complex questions requiring sophisticated argument, illuminating analysis, confident original interpretations, and synthesis across multiple texts within topic areas.
`;

const OCR_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## OCR A-Level English Literature Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Articulate informed, personal and creative responses to literary texts, using associated concepts and terminology, and coherent, accurate written expression. | 21% |
| **AO2** | Analyse ways in which meanings are shaped in literary texts. | 21% |
| **AO3** | Demonstrate understanding of the significance and influence of the contexts in which literary texts are written and received. | 21% |
| **AO4** | Explore connections across literary texts. | 21% |
| **AO5** | Explore literary texts informed by different interpretations. | 16% |

### Paper Structure
| Component | Title | Content | Marks | Time | Weighting |
|-----------|-------|---------|-------|------|-----------|
| **01** | Drama and Poetry Pre-1900 | Section A: Shakespeare (30 marks), Section B: Drama & Poetry Pre-1900 (30 marks) | 60 | 2hr 30m (closed book) | 40% |
| **02** | Comparative and Contextual Study | One topic area: The Gothic, Dystopia, Women in Literature, American Literature | 60 | 2hr 30m (closed book) | 40% |
| **03** | Literature Post-1900 (NEA) | Close reading OR Re-creative writing with commentary | 40 | Coursework | 20% |

### Question Types
- Shakespeare passage-based essay (30 marks)
- Pre-1900 drama/poetry comparative (30 marks)
- Comparative contextual study (60 marks across 2-3 questions)
- NEA: Close reading analysis OR Re-creative writing with commentary (40 marks)
`;

const OCR_ALEVEL_ENG_LIT_MARK_SCHEME = `
## OCR A-Level English Literature Mark Scheme

### 30-Mark Questions (Component 01)

#### Level 6 (26-30 marks) - Excellent, sophisticated
**AO1:** Excellent, sophisticated argument. Fluent, confident expression. Sophisticated use of concepts and terminology.
**AO2:** Sophisticated, illuminating analysis of how meanings are shaped. Perceptive evaluation of effects.
**AO3:** Sophisticated understanding of contexts. Illuminating connections between text and contexts.
**AO4:** Sophisticated, illuminating exploration of connections between texts.
**AO5:** Sophisticated evaluation of different interpretations. Confident, original interpretive position.

#### Level 5 (21-25 marks) - Accomplished, assured
**AO1:** Accomplished, well-sustained argument. Assured expression. Assured use of terminology.
**AO2:** Accomplished, detailed analysis of how meanings are shaped. Thoughtful evaluation of effects.
**AO3:** Accomplished understanding of contexts. Thoughtful connections made.
**AO4:** Accomplished exploration of connections between texts.
**AO5:** Accomplished evaluation of different interpretations. Clear interpretive position.

#### Level 4 (16-20 marks) - Competent, secure
**AO1:** Competent, well-structured argument. Secure expression. Appropriate use of terminology.
**AO2:** Competent, secure analysis. Clear discussion of effects.
**AO3:** Competent understanding of contexts. Clear connections made.
**AO4:** Competent exploration of connections.
**AO5:** Competent awareness of different interpretations.

#### Level 3 (11-15 marks) - Sound, developing
**AO1:** Sound argument developing. Generally clear expression. Some appropriate terminology.
**AO2:** Sound, developing analysis. Some discussion of effects.
**AO3:** Sound awareness of contexts.
**AO4:** Sound awareness of connections.
**AO5:** Some awareness of different interpretations.

#### Level 2 (6-10 marks) - Limited, emerging
**AO1:** Limited argument. Limited expression. Limited terminology.
**AO2:** Limited analysis of meanings.
**AO3:** Limited awareness of contexts.
**AO4:** Limited connections.
**AO5:** Limited awareness of interpretations.

#### Level 1 (1-5 marks) - Very limited
**AO1:** Very limited response.
**AO2:** Very limited analysis.
**AO3:** Very limited contextual awareness.
**AO4:** Very limited connections.
**AO5:** Very limited awareness of interpretations.

### Component 02: Comparative and Contextual Study (60 marks total)
Questions typically structured as:
- Question (a): 20 marks - Analysis of a named text/extract
- Question (b): 20 marks - Comparative analysis
- Question (c): 20 marks - Thematic discussion across texts

Same level descriptors apply with emphasis on:
- Contextual understanding of the topic area (e.g., Gothic conventions, dystopian features)
- Comparative skills across texts within the topic area
- Knowledge of critical approaches relevant to the topic

### NEA Mark Scheme (40 marks)
**Close Reading Task (20 marks per text):**
- Same level descriptors with focus on detailed analysis of specific passages
- AO2 heavily weighted

**Re-Creative Writing Task:**
- 20 marks for re-creative piece
- 20 marks for commentary explaining creative choices
`;

const OCR_ALEVEL_ENG_LIT_QUESTION_FORMATS = `
## Authentic OCR A-Level English Literature Question Formats

### Component 01 Section A: Shakespeare (30 marks)
Format: "Discuss the significance of this passage in relation to [theme/character] in the play as a whole."
OR: "'[Critical quotation].' Using your knowledge of the play as a whole, show how far you agree with this view."
**Structure:**
- Passage provided (printed on paper)
- Closed book
- Must discuss passage AND whole play

**Examples:**
- "Discuss the significance of this passage in relation to the presentation of justice in Measure for Measure."
- "'The Duke is a manipulative figure who enjoys playing God.' Using your knowledge of the play, show how far you agree with this view."
- "Discuss the significance of this passage in relation to Angelo's character development."

### Component 01 Section B: Pre-1900 Drama and Poetry (30 marks)
Format: "Compare the presentation of [theme] in [text A] and [text B]."
OR: "'[Critical statement about the theme].' Compare the ways [author A] and [author B] explore [theme] in light of this statement."
**Structure:**
- Comparative question
- One drama text, one poetry text/collection
- Closed book

**Examples:**
- "Compare the presentation of death in The Duchess of Malfi and the poetry of John Donne."
- "'The Romantic poets valued imagination above all.' Compare how Blake and Coleridge present the imagination."
- "Compare how Webster and Marlowe present ambition in their plays."

### Component 02: Comparative and Contextual Study

#### The Gothic (60 marks)
Format varies:
- (a) "Using the passage as a starting point, explore the significance of [Gothic element] in [text]." (20 marks)
- (b) "Compare how [author A] and [author B] use [Gothic convention]." (20 marks)
- (c) "'[Critical quotation about Gothic literature].' How far do you agree with this view, drawing on three texts from your study?" (20 marks)

**Examples:**
- "Using this passage as a starting point, explore the significance of the supernatural in Frankenstein."
- "Compare how Shelley and Stoker create atmospheres of fear."
- "'The Gothic is essentially conservative, punishing transgression.' How far do you agree?"

#### Dystopia (60 marks)
**Examples:**
- "Using this passage as a starting point, explore the presentation of state control in [text]."
- "Compare how [author A] and [author B] present rebellion against authority."
- "'Dystopian fiction is always a warning.' How far do you agree?"

#### Women in Literature (60 marks)
**Examples:**
- "Using this passage as a starting point, explore the presentation of female desire in [text]."
- "Compare how [author A] and [author B] present marriage."
- "'Women's writing is inevitably concerned with confinement.' How far do you agree?"

#### American Literature 1880-1940 (60 marks)
**Examples:**
- "Using this passage as a starting point, explore the presentation of the American Dream in [text]."
- "Compare how [author A] and [author B] present class and wealth."
- "'American literature of this period is fundamentally pessimistic.' How far do you agree?"

### Component 03: NEA

#### Close Reading Task
Format: Student selects two passages (one from each of two texts) for detailed analysis.
**Structure:**
- 1200-1500 words per passage
- Focus on how meanings are shaped (AO2)
- Must relate analysis to whole texts

#### Re-Creative Writing Task
Format: Student produces a re-creative piece (e.g., a monologue, alternative ending, prequel scene) with critical commentary.
**Structure:**
- Re-creative piece: approx. 300-500 words
- Commentary: 1200-1500 words explaining choices
- Must demonstrate understanding of original text's methods
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const FRANKENSTEIN_KNOWLEDGE = `
## FRANKENSTEIN - Text-Specific Knowledge

### Key Chapters
- **Volume 1, Chapters 3-4**: Victor's studies; creation of the creature
- **Volume 2, Chapters 3-7**: Creature's narrative; the De Laceys
- **Volume 3, Chapter 5**: Creature's demand for a mate

### Key Quotations
**AMBITION:** "I will pioneer a new way, explore unknown powers, and unfold to the world the deepest mysteries of creation" (Vol 1, Ch 3)
**MONSTROSITY:** "I beheld the wretch—the miserable monster whom I had created" (Vol 1, Ch 5)
**NATURE VS NURTURE:** "I was benevolent and good; misery made me a fiend" (Vol 2, Ch 2)

### Critical Interpretations
- **Feminist (Mary Poovey)**: Male usurpation of female reproductive power
- **Marxist**: Creature as working class; alienation
- **Gothic**: Transgression of natural/divine law
`;

const HANDMAIDS_TALE_KNOWLEDGE = `
## THE HANDMAID'S TALE - Text-Specific Knowledge

### Key Chapters
- **Night sections**: Offred's memories and inner life
- **The Ceremony**: Ritualized rape; biblical justification
- **Historical Notes**: Academic frame; ironies of male scholarship

### Key Quotations
**CONTROL:** "We are two-legged wombs, that's all: sacred vessels, ambulatory chalices"
**RESISTANCE:** "Nolite te bastardes carborundorum" (Don't let the bastards grind you down)
**IDENTITY:** "I wait. I compose myself. My self is a thing I must now compose"

### Critical Interpretations
- **Feminist**: Patriarchal oppression; reproductive rights
- **Dystopian tradition**: Orwell, Huxley; warnings about totalitarianism
- **Postmodern**: Unreliable narration; Historical Notes' irony
`;

function getTextSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();
  if (topicLower.includes('frankenstein')) return FRANKENSTEIN_KNOWLEDGE;
  if (topicLower.includes('handmaid')) return HANDMAIDS_TALE_KNOWLEDGE;
  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty, topic.id);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const textKnowledgeSection = textKnowledge ? `
## TEXT-SPECIFIC KNOWLEDGE
${textKnowledge}

**Use quotations and critical interpretations above in your questions and model answers.**
` : '';

  return `You are an expert OCR A-Level English Literature examiner creating exam-style questions.

${OCR_ALEVEL_ENG_LIT_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_ENG_LIT_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_ENG_LIT_MARK_SCHEME}

${OCR_ALEVEL_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds, requiring sophisticated critical analysis
2. **Authentic OCR Style**: Match real OCR paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focused single-text analysis, 20-mark style questions
   - Medium: 30-mark essay questions requiring conceptualised response
   - Hard: Complex comparative analysis across multiple texts (60 marks total)

## A-Level Specific Requirements
- Use OCR's characteristic phrasing: "Discuss the significance of...", "Using your knowledge of the play as a whole..."
- Include critical quotations for debate (AO5)
- For comparative questions, ensure texts are from appropriate pairings
- For contextual study questions, engage with topic-specific conventions (Gothic, Dystopia, etc.)

## CRITICAL: Extract/Passage Handling Rules

### FOR SHAKESPEARE - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL PASSAGE TEXT** in the question - Shakespeare is public domain
- Generate authentic passages of 15-25 lines from the relevant scene
- Format with character names and speech prefixes as in the original text

### FOR OTHER TEXTS (Frankenstein, Handmaid's Tale, etc.) - COPYRIGHTED:
- Provide CLEAR LOCATION REFERENCES so students can look up the passage
- Format: "Read from Chapter [X]/Volume [Y], from '[opening words]...' to '[closing words]'"
- A-Level is OPEN BOOK so students will have their texts with them

## Response Format
Return JSON with:
- "content": Question text (with passage context description if applicable)
- "marks": Total marks
- "solution": Model answer demonstrating appropriate level response
- "markScheme": Array of level descriptors and indicative content points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('englishliterature')}`;
}

export function getOCRALevelEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty, topic.id);

  const difficultyGuidance = {
    easy: `Create a 20-mark focused analysis question.

**Question Types:**
- "Using this passage as a starting point, explore the significance of [theme/element] in [text]"
- "Analyse how [author] presents [character/theme] in this extract"
- Focused on specific textual analysis

**Level 3-4 Descriptors (11-20 marks):**
- Level 4 (16-20): Competent, well-structured argument; secure analysis; clear understanding of contexts
- Level 3 (11-15): Sound argument developing; some analysis; some awareness of contexts

For SHAKESPEARE: Include actual passage text. For OTHER TEXTS: Provide location references.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a 30-mark essay question requiring Level 5 response.

**Question Types:**
For Shakespeare (with passage):
- "Discuss the significance of this passage in relation to [theme] in the play as a whole."
- "'[Critical quotation].' Using your knowledge of the play, show how far you agree with this view."
- For SHAKESPEARE: Include actual passage text. For OTHER TEXTS: Provide location references.

For Pre-1900 comparison:
- "Compare the presentation of [theme] in [text A] and [text B]."
- "'[Critical statement].' Compare how [author A] and [author B] explore this idea."

For Contextual Study:
- "Using this passage as a starting point, explore [topic-specific element] in [text]."
- Include awareness of genre conventions (Gothic, Dystopia, etc.)

**Level 5 Descriptors (21-25 marks):**
- Accomplished, well-sustained argument
- Accomplished, detailed analysis of how meanings are shaped
- Accomplished understanding of contexts
- Thoughtful evaluation of different interpretations

Include OCR-specific phrases:
- "Discuss the significance of..."
- "Using your knowledge of the play/text as a whole..."
- "Show how far you agree with this view"

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 30-60 mark question requiring Level 6 response.

**Question Types:**
For Component 02 (Contextual Study - three-part question totalling 60 marks):
- (a) "Using this passage as a starting point, explore [topic element] in [text]." [20 marks]
- (b) "Compare how [author A] and [author B] present [theme]." [20 marks]
- (c) "'[Critical quotation about the topic area].' How far do you agree, drawing on three texts?" [20 marks]

OR for single 30-mark question:
- "'[Provocative critical quotation].' Using your knowledge of the text, show how far you agree with this view."
- Complex comparative analysis requiring sophisticated contextual and interpretive engagement

**Level 6 Response Characteristics (26-30 marks per section):**
- Excellent, sophisticated argument with fluent, confident expression
- Sophisticated, illuminating analysis of how meanings are shaped
- Sophisticated understanding of contexts
- Sophisticated, illuminating exploration of connections
- Confident, original interpretive position

Include sophisticated critical framing relevant to the topic area:
- For Gothic: engage with critical debates about transgression, the uncanny, etc.
- For Dystopia: engage with genre conventions and political critique
- For Women in Literature: engage with feminist critical approaches
- For American Literature: engage with debates about the American Dream, modernism, etc.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

IMPORTANT:
- Use OCR's characteristic phrasing
- Include critical quotations for debate where appropriate
- For passage questions, describe context but do NOT reproduce copyrighted text
- For contextual study questions, engage with topic-specific conventions
- Model answer should demonstrate the target level's characteristics

Return valid JSON:
{
  "content": "question text with passage context if applicable",
  "marks": number,
  "solution": "model answer at appropriate level",
  "markScheme": ["Level descriptors and indicative content points"]
}`;
}

// Get marks based on TOPIC TYPE (component/paper), not difficulty
// OCR A-Level English Literature mark allocations:
// - Component 01 (Shakespeare, Drama, Poetry pre-1900): 30 marks
// - Component 02 (Gothic, Dystopia, Women, American): 20 marks per question
// - NEA: 40 marks total (20 per text)
function getMarksForTopic(topicId: string): number {
  // Component 01: Drama and Poetry Pre-1900 - 30 marks
  if (['lit-measure-measure', 'lit-duchess-malfi', 'lit-doctor-faustus', 'lit-chaucer-pardoner', 'lit-romantic-poetry'].includes(topicId)) {
    return 30;
  }
  // Component 02: Comparative and Contextual Study - 20 marks per question
  if (['lit-gothic-lit', 'lit-dystopia', 'lit-women-writing', 'lit-american-lit'].includes(topicId)) {
    return 20;
  }
  // Component 03: NEA - 40 marks total
  if (['lit-post-1900', 'lit-nea-ocr'].includes(topicId)) {
    return 40;
  }
  // Default
  return 30;
}

function getMarkRangeForDifficulty(difficulty: Difficulty, topicId?: string): { min: number; max: number } {
  if (topicId) {
    const marks = getMarksForTopic(topicId);
    return { min: marks, max: marks };
  }
  // Fallback
  switch (difficulty) {
    case 'easy':
      return { min: 20, max: 20 };
    case 'medium':
      return { min: 30, max: 30 };
    case 'hard':
      return { min: 30, max: 30 };
  }
}
