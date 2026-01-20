// OCR GCSE English Literature (J352) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR GCSE ENGLISH LITERATURE SPECIFICATION DETAILS (J352)
// ============================================================================

const OCR_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## OCR GCSE English Literature Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations. | 40% |
| **AO2** | Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate. | 40% |
| **AO3** | Show understanding of the relationships between texts and the contexts in which they were written. | 15% |
| **AO4** | Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. | 5% |

### Paper Structure
| Component | Title | Content | Marks | Time | Weighting |
|-----------|-------|---------|-------|------|-----------|
| **01** | Exploring Modern and Literary Heritage Texts | Section A: Modern prose/drama (40 marks), Section B: 19th-century prose (40 marks) | 80 | 2hr | 50% |
| **02** | Exploring Poetry and Shakespeare | Section A: Poetry across time (40 marks), Section B: Shakespeare (40 marks inc. 5 AO4) | 80 | 2hr | 50% |

### Question Types
- Extract-based + whole text essay (Modern text, 40 marks)
- Extract-based + whole text essay (19th-century prose, 40 marks)
- Comparative poetry essay (Poetry across time, 40 marks)
- Extract-based + whole text essay (Shakespeare, 40 marks inc. 5 AO4)
`;

const OCR_GCSE_ENG_LIT_MARK_SCHEME = `
## OCR GCSE English Literature Mark Scheme (40 marks)

### Band 6 (35-40 marks) - Sophisticated, perceptive, assured
**AO1:** Sophisticated, perceptive personal response. Assured understanding of text. Judicious, well-integrated references to text support sophisticated interpretation.
**AO2:** Perceptive, sophisticated analysis of writer's use of language, form and structure. Accurate and assured use of subject terminology.
**AO3:** Sophisticated understanding of the significance of contextual factors. Interpretation informed by perceptive awareness of contexts.

### Band 5 (28-34 marks) - Convincing, thoughtful, well-developed
**AO1:** Convincing, thoughtful personal response. Secure understanding of text. Well-chosen textual references support convincing interpretation.
**AO2:** Thoughtful, well-developed analysis of writer's methods. Confident use of appropriate subject terminology.
**AO3:** Thoughtful consideration of contextual factors. Interpretation shaped by clear understanding of contexts.

### Band 4 (21-27 marks) - Competent, clear, secure
**AO1:** Competent, clear response. Secure understanding of text. Appropriate textual references support clear interpretation.
**AO2:** Competent, clear analysis of writer's methods. Appropriate use of subject terminology.
**AO3:** Clear awareness of contextual factors. Some understanding of how contexts shape interpretation.

### Band 3 (14-20 marks) - Some understanding, developing
**AO1:** Some personal response developing. Some understanding of text. Some relevant textual references support interpretation.
**AO2:** Some understanding of writer's methods. Some use of subject terminology.
**AO3:** Some awareness of contextual factors.

### Band 2 (7-13 marks) - Limited, emerging
**AO1:** Limited personal response. Limited understanding of text. Limited textual references.
**AO2:** Limited awareness of writer's methods. Limited or inappropriate terminology.
**AO3:** Limited awareness of context.

### Band 1 (1-6 marks) - Very limited, minimal
**AO1:** Very limited response. Minimal understanding. Minimal textual reference.
**AO2:** Minimal awareness of methods. Little or no terminology.
**AO3:** Minimal awareness of context.

### AO4 Marks (5 marks - Component 02 Section B only)
- **5 marks**: Effective and consistently controlled vocabulary and sentences. Spelling and punctuation are almost always accurate.
- **4 marks**: Competent control of vocabulary and sentences. Spelling and punctuation are usually accurate.
- **3 marks**: Some control of vocabulary and sentences. Spelling and punctuation are reasonably accurate.
- **2 marks**: Limited control of vocabulary and sentences. Spelling and punctuation show some accuracy.
- **1 mark**: Very limited control. Spelling and punctuation have limited accuracy.

### Poetry Comparison Mark Scheme (40 marks)
**Band 6 (35-40):** Perceptive, sophisticated comparison. Assured analysis of both poems. Perceptive exploration of connections and differences.
**Band 5 (28-34):** Convincing comparison. Thoughtful analysis of both poems. Clear connections explored.
**Band 4 (21-27):** Competent comparison. Clear analysis of poems. Appropriate connections made.
**Band 3 (14-20):** Some comparison. Some analysis. Some connections attempted.
**Band 2 (7-13):** Limited comparison. Limited analysis. Limited connections.
**Band 1 (1-6):** Very limited comparison. Minimal analysis.
`;

const OCR_GCSE_ENG_LIT_QUESTION_FORMATS = `
## Authentic OCR GCSE English Literature Question Formats

### Modern Text Extract Question (40 marks)
Format: "Explore the significance of this extract in relation to [theme] in the play/novel as a whole."
**Structure:**
- Extract provided
- "Remember to include in your answer relevant comment on [author]'s methods"
- Must discuss extract AND whole text

**Examples:**
- "Explore the significance of this extract in relation to the theme of responsibility in the play as a whole."
- "Explore the significance of this extract in relation to how Priestley presents the Inspector."
- "Explore the significance of this moment in the play in relation to the theme of class."

### 19th-Century Prose Extract Question (40 marks)
Format: "Explore the significance of this extract in relation to [theme] in the novel as a whole."
**Structure:**
- Extract provided
- "Remember to include in your answer relevant comment on [author]'s methods"
- Must analyse extract AND link to whole novel

**Examples:**
- "Explore the significance of this extract in relation to the presentation of fear in the novel as a whole."
- "Explore the significance of this extract in relation to how Dickens presents the theme of redemption."

### Poetry Comparison Question (40 marks)
Format: "'[Poem A]' and '[Poem B]' both consider [theme]. Compare the ways the poets present ideas about [theme]."
**Structure:**
- Both poems provided
- Must compare methods and meanings
- Equal treatment of both poems expected

**Examples:**
- "'Sonnet 43' and 'To His Coy Mistress' both consider love. Compare the ways the poets present ideas about love."
- "'The Manhunt' and 'Nettles' both explore the effects of conflict. Compare how the poets present suffering."

### Shakespeare Extract Question (40 marks + 5 AO4)
Format: "Explore the significance of this extract in relation to [theme/character] in the play as a whole."
**Structure:**
- Extract provided (typically 30-40 lines)
- "Remember to include in your answer relevant comment on Shakespeare's methods"
- Must cover extract AND whole play
- 5 marks for SPaG (AO4)

**Examples:**
- "Explore the significance of this extract in relation to the theme of ambition in the play as a whole."
- "Explore the significance of this extract in relation to how Shakespeare presents Macbeth's guilt."
- "Explore the significance of this extract in relation to the presentation of Lady Macbeth."

### Key OCR Phrasing
- "Explore the significance of..."
- "Remember to include in your answer relevant comment on [author]'s methods"
- "...in the play/novel as a whole"
- "Compare the ways the poets present..."
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const MACBETH_KNOWLEDGE = `
## MACBETH - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Scene 3**: Witches' prophecies to Macbeth and Banquo
- **Act 1 Scene 5**: Lady Macbeth's "unsex me here" soliloquy
- **Act 1 Scene 7**: "If it were done" soliloquy, Lady Macbeth's persuasion
- **Act 2 Scene 1**: "Is this a dagger" soliloquy
- **Act 2 Scene 2**: Aftermath of murder, "Will all great Neptune's ocean"
- **Act 3 Scene 4**: Banquet scene, Banquo's ghost
- **Act 5 Scene 1**: Lady Macbeth's sleepwalking scene
- **Act 5 Scene 5**: "Tomorrow and tomorrow and tomorrow"

### Key Quotations by Theme

**AMBITION:**
- "I have no spur to prick the sides of my intent, but only vaulting ambition" (1.7)
- "Stars, hide your fires; Let not light see my black and deep desires" (1.4)

**GUILT:**
- "Will all great Neptune's ocean wash this blood clean from my hand?" (2.2)
- "Out, damned spot! Out, I say!" (5.1)
- "Macbeth shall sleep no more" (2.2)

**THE SUPERNATURAL:**
- "Fair is foul, and foul is fair" (1.1)
- "Is this a dagger which I see before me?" (2.1)
- "By the pricking of my thumbs, something wicked this way comes" (4.1)

**MASCULINITY/GENDER:**
- "Unsex me here, and fill me from the crown to the toe top-full of direst cruelty" (1.5)
- "When you durst do it, then you were a man" (1.7)

**APPEARANCE VS REALITY:**
- "Look like the innocent flower, but be the serpent under't" (1.5)
- "False face must hide what the false heart doth know" (1.7)

### Jacobean Context
- **Divine Right of Kings**: James I believed kings were God's representatives
- **The Gunpowder Plot (1605)**: Recent attempt to kill James I
- **James I's interest in witchcraft**: Wrote "Daemonologie"
- **Great Chain of Being**: Natural order disrupted by regicide

### Character Arcs
- **Macbeth**: Brave warrior → ambitious murderer → paranoid tyrant → nihilistic despair
- **Lady Macbeth**: Ruthless manipulator → guilt-stricken → madness → suicide
`;

const ROMEO_JULIET_KNOWLEDGE = `
## ROMEO AND JULIET - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Prologue**: "Two households, both alike in dignity" - star-crossed lovers
- **Act 1 Scene 5**: Masquerade ball, Romeo sees Juliet, sonnet exchange
- **Act 2 Scene 2**: Balcony scene - "What's in a name?"
- **Act 3 Scene 1**: Mercutio killed by Tybalt; Romeo kills Tybalt
- **Act 3 Scene 5**: Aubade (dawn scene), Juliet refuses Paris
- **Act 5 Scene 3**: Tomb scene - double suicide

### Key Quotations by Theme

**LOVE:**
- "Did my heart love till now? For I ne'er saw true beauty till this night" (1.5)
- "What's in a name? That which we call a rose by any other word would smell as sweet" (2.2)
- "My bounty is as boundless as the sea, my love as deep" (2.2)

**FATE/DESTINY:**
- "A pair of star-crossed lovers take their life" (Prologue)
- "O, I am fortune's fool!" (3.1)
- "Then I defy you, stars!" (5.1)

**CONFLICT:**
- "I hate the word, as I hate hell, all Montagues, and thee" (1.1) - Tybalt
- "A plague on both your houses!" (3.1) - Mercutio

**LIGHT AND DARK:**
- "O, she doth teach the torches to burn bright!" (1.5)
- "It is the east, and Juliet is the sun" (2.2)

### Elizabethan Context
- **Patriarchy**: Fathers owned daughters; arranged marriages normal
- **Honour culture**: Family reputation paramount
- **Age of marriage**: Juliet at 13 was marriageable age

### Character Arcs
- **Romeo**: Melancholy lover → passionate lover → impulsive killer → tragic suicide
- **Juliet**: Obedient daughter → defiant lover → tragic suicide
`;

const CHRISTMAS_CAROL_KNOWLEDGE = `
## A CHRISTMAS CAROL - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Stave 1**: Scrooge refusing charity collectors, Marley's ghost
- **Stave 2**: Ghost of Christmas Past - Fezziwig's party, Belle's departure
- **Stave 3**: Ghost of Christmas Present - Cratchit family, Ignorance and Want
- **Stave 4**: Ghost of Christmas Yet to Come - Scrooge's death
- **Stave 5**: Scrooge's transformation

### Key Quotations by Theme

**REDEMPTION:**
- "I will honour Christmas in my heart, and try to keep it all the year"
- "I am not the man I was"

**SOCIAL RESPONSIBILITY:**
- "Are there no prisons? Are there no workhouses?"
- "If they would rather die, they had better do it, and decrease the surplus population"
- "Mankind was my business. The common welfare was my business"

**POVERTY:**
- "They are Man's... This boy is Ignorance. This girl is Want. Beware them both"
- "God bless us, every one!" - Tiny Tim

**GREED:**
- "Hard and sharp as flint"
- "Solitary as an oyster"
- "I wear the chain I forged in life" - Marley

### Victorian Context
- **The Poor Law Amendment Act (1834)**: Created workhouses
- **Industrial Revolution**: Wealth inequality
- **Thomas Malthus**: Argued poor should be left to die

### Character Arcs
- **Scrooge**: Miserly → shown past/present/future → redeemed
- **Tiny Tim**: Symbol of innocent poor
`;

const JEKYLL_HYDE_KNOWLEDGE = `
## DR JEKYLL AND MR HYDE - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Chapter 1**: Hyde trampling the girl
- **Chapter 2**: Utterson meets Hyde
- **Chapter 4**: Hyde murders Sir Danvers Carew
- **Chapter 8**: Breaking down the door
- **Chapter 10**: Jekyll's full statement

### Key Quotations by Theme

**DUALITY:**
- "Man is not truly one, but truly two"
- "All human beings... are commingled out of good and evil"

**REPRESSION:**
- "I concealed my pleasures"
- "I stood already committed to a profound duplicity of life"

**EVIL:**
- Hyde is "pure evil"
- "Satan's signature upon a face"
- "ape-like fury"
- "gave an impression of deformity without any nameable malformation"

**SCIENCE VS RELIGION:**
- Jekyll's experiments transgress natural/divine law
- "The drug had no discriminating action"

### Victorian Context
- **Victorian respectability**: Public virtue vs private sin
- **Darwin and evolution**: Hyde as "ape-like" - fear of regression
- **Gothic literature**: Supernatural, psychological terror

### Character Arcs
- **Jekyll**: Respected scientist → unable to control Hyde → death
- **Hyde**: Small, young → grows stronger → dominant
`;

const INSPECTOR_CALLS_KNOWLEDGE = `
## AN INSPECTOR CALLS - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Opening**: Birling's speeches about Titanic, war
- **Act 2**: Mrs Birling's interrogation; "Girls of that class"
- **Act 3**: Inspector's final speech; Phone call

### Key Quotations by Theme

**SOCIAL RESPONSIBILITY:**
- "We are members of one body. We are responsible for each other"
- "If men will not learn that lesson, then they will be taught it in fire and blood and anguish"
- "A man has to mind his own business and look after himself and his own"

**CLASS:**
- Mrs Birling: "Girls of that class—"
- "As if a girl of that sort would ever refuse money!"

**GENERATIONAL CONFLICT:**
- Sheila: "But these girls aren't cheap labour—they're people"
- Sheila and Eric accept responsibility; older generation refuse

### 1912 Context (when set)
- **Titanic**: "unsinkable, absolutely unsinkable" - dramatic irony
- **WWI approaching**: "there isn't a chance of war" - dramatic irony

### 1945 Context (when written)
- **End of WWII**: Audiences knew horrors that followed 1912
- **Welfare State emerging**: Priestley supported this

### Character Arcs
- **Birling**: Confident → exposed → refuses to change
- **Sheila**: Spoilt → remorseful → transformed
- **Inspector**: Mysterious, omniscient → moral voice
`;

// ============================================================================
// TEXT KNOWLEDGE SELECTOR
// ============================================================================

function getTextSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Shakespeare texts
  if (topicLower.includes('macbeth')) {
    return MACBETH_KNOWLEDGE;
  }
  if (topicLower.includes('romeo') || topicLower.includes('juliet')) {
    return ROMEO_JULIET_KNOWLEDGE;
  }

  // 19th-century novels
  if (topicLower.includes('christmas carol') || topicLower.includes('scrooge')) {
    return CHRISTMAS_CAROL_KNOWLEDGE;
  }
  if (topicLower.includes('jekyll') || topicLower.includes('hyde')) {
    return JEKYLL_HYDE_KNOWLEDGE;
  }

  // Modern texts
  if (topicLower.includes('inspector calls') || topicLower.includes('birling')) {
    return INSPECTOR_CALLS_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const textKnowledgeSection = textKnowledge
    ? `
// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE - USE THIS FOR ACCURATE QUESTION GENERATION
// ============================================================================

${textKnowledge}

**IMPORTANT**: Use the quotations, scenes, and context above to create authentic, text-accurate questions.
- Reference specific scenes/chapters that are commonly examined
- Ensure any quotation references are accurate to the text
- Model answers MUST incorporate the specific quotations provided above
- Context points should inform your understanding of the text's themes
`
    : '';

  return `You are an expert OCR GCSE English Literature examiner creating exam-style questions.

${OCR_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES}

${OCR_GCSE_ENG_LIT_MARK_SCHEME}

${OCR_GCSE_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic OCR Style**: Match real OCR paper format exactly - use "Explore the significance of..."
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focus on specific analysis, lower band questions
   - Medium: 40-mark essay questions requiring whole text knowledge
   - Hard: Complex analysis requiring Band 5-6 response with sophisticated conceptual understanding

## CRITICAL: Extract Handling Rules

### FOR SHAKESPEARE (Macbeth, Romeo & Juliet) - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL EXTRACT TEXT** in the question - Shakespeare is public domain
- Generate authentic extracts of 10-20 lines from the relevant scene
- Format with character names and speech prefixes as in the original text

### FOR OTHER TEXTS (Christmas Carol, Jekyll & Hyde, Inspector Calls) - COPYRIGHTED:
- Provide CLEAR LOCATION REFERENCES so students can look up the passage
- Format: "Read from [Stave/Chapter/Act], from '[opening words]...' to '[closing words]'"
- Students should have their copy of the text open to follow along

## OCR-Specific Language
Always use OCR's characteristic phrasing:
- "Explore the significance of this extract in relation to..."
- "Remember to include in your answer relevant comment on [author]'s methods"
- "...in the play/novel as a whole"

## Response Format
Return JSON with:
- "content": Question text (with extract context description if applicable)
- "marks": Total marks
- "solution": Model answer demonstrating appropriate band response (MUST use specific quotations from the text knowledge)
- "markScheme": Array of band descriptors and indicative content points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('englishliterature')}`;
}

export function getOCRGCSEEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a 40-mark question targeting a Band 3-4 response level.

**Question Types:**
- "Explore the significance of this extract in relation to [straightforward theme/character]"
- Questions with clearer, more accessible thematic focus
- Extract-based questions with more direct prompts

**IMPORTANT:** ALL OCR GCSE questions are 40 marks. "Easy" difficulty means the COGNITIVE DEMAND is lower (targeting Band 3-4 response), not fewer marks.

**Band 3-4 Level Descriptors (14-27 marks):**
- Band 4 (21-27): Competent, clear response; secure understanding; appropriate references
- Band 3 (14-20): Some personal response; some understanding; some relevant references

The model answer should demonstrate a Band 3-4 level response.

YOU MUST allocate exactly 40 marks for this question.`,

    medium: `Create a 40-mark essay question with extract targeting Band 4-5 response.

**Question Types:**
For all texts (with extract):
- "Explore the significance of this extract in relation to [theme/character] in the play/novel as a whole."
- Include: "Remember to include in your answer relevant comment on [author]'s methods"
- Describe an appropriate extract context (DO NOT reproduce copyrighted text)

For Poetry comparison:
- "'[Poem A]' and '[Poem B]' both consider [theme]. Compare the ways the poets present ideas about [theme]."

**IMPORTANT:** ALL OCR GCSE questions are 40 marks. Difficulty indicates target response level.

**Band 4-5 Level Descriptors (21-34 marks):**
- Band 5 (28-34): Convincing, thoughtful; secure understanding; well-chosen references; thoughtful analysis
- Band 4 (21-27): Competent, clear; secure understanding; appropriate references; competent analysis

Include these OCR-specific phrases:
- "Explore the significance of this extract..."
- "...in the play/novel as a whole"
- "Remember to include in your answer relevant comment on [author]'s methods"

The model answer should demonstrate a Band 4-5 level response.

YOU MUST allocate exactly 40 marks for this question.`,

    hard: `Create a 40-mark question (+ 5 AO4 for Shakespeare) targeting Band 5-6 response.

**Question Types:**
- "Explore the significance of this extract in relation to [complex theme] in the play as a whole."
- Questions requiring evaluation of writer's methods across the whole text
- Questions demanding sophisticated contextual understanding

Include: "Remember to include in your answer relevant comment on [author]'s methods"

**IMPORTANT:** ALL OCR GCSE questions are 40 marks content. Shakespeare adds +5 AO4.

**Requirements:**
- 40 marks for content (AO1, AO2, AO3)
- +5 marks for SPaG (AO4) for Shakespeare texts ONLY

**Band 5-6 Response Characteristics (28-40 + 5 AO4):**
- Sophisticated, perceptive personal response
- Assured understanding with judicious, well-integrated references
- Perceptive, sophisticated analysis of writer's methods
- Sophisticated understanding of contextual factors
- Effective and consistently controlled vocabulary and sentences

The model answer should demonstrate a Band 5-6 level response.

YOU MUST allocate 40 marks (or 45 for Shakespeare with AO4).`
  };

  const textKnowledgePrompt = textKnowledge
    ? `
## TEXT-SPECIFIC KNOWLEDGE TO USE
${textKnowledge}

**USE THE ABOVE KNOWLEDGE TO**:
- Reference specific scenes/chapters when creating extract questions
- Include accurate quotations in your model answer
- Draw on the character arcs and context provided
- Ensure thematic analysis aligns with the text's actual content
`
    : '';

  return `Generate an OCR GCSE English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${textKnowledgePrompt}
IMPORTANT - EXTRACT RULES:
- For SHAKESPEARE: Include the ACTUAL EXTRACT TEXT (10-20 lines) - it's public domain
- For OTHER TEXTS: Provide clear location references (Stave/Chapter/Act) so students can look it up
- Use OCR's characteristic phrasing: "Explore the significance of..."
- Include "Remember to include in your answer relevant comment on [author]'s methods"
- Model answer should demonstrate the target band's characteristics
- Model answer MUST include specific, accurate quotations from the text

Return valid JSON:
{
  "content": "question text with extract context if applicable",
  "marks": number,
  "solution": "model answer at appropriate band with embedded quotations",
  "markScheme": ["Band descriptors and indicative content points"]
}`;
}

/**
 * OCR GCSE English Literature mark ranges.
 * IMPORTANT: ALL OCR GCSE questions are 40 marks.
 * Shakespeare questions add +5 marks for AO4 (SPaG).
 *
 * Unlike some other boards, OCR does not have varied mark questions.
 * Difficulty affects the COGNITIVE DEMAND (which band students aim for),
 * not the mark allocation.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  // ALL OCR GCSE questions are 40 marks (or 40+5 for Shakespeare)
  // Difficulty indicates target band, not mark allocation
  switch (difficulty) {
    case 'easy':
      // Target: Band 3-4 response (14-27 marks) - same 40-mark question, simpler cognitive demand
      return { min: 40, max: 40 };
    case 'medium':
      // Target: Band 4-5 response (21-34 marks)
      return { min: 40, max: 40 };
    case 'hard':
      // Target: Band 5-6 response (28-40 marks), +5 AO4 for Shakespeare
      return { min: 40, max: 45 };
  }
}
