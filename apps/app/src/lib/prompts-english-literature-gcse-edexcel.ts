// Edexcel GCSE English Literature (1ET0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL GCSE ENGLISH LITERATURE SPECIFICATION DETAILS (1ET0)
// ============================================================================

const EDEXCEL_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE English Literature Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Read, respond to and interpret texts. Maintain a critical style; develop an informed personal response; use textual references, including quotations, to support and illustrate interpretations. | 35% |
| **AO2** | Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate. | 35% |
| **AO3** | Show understanding of the relationships between texts and the contexts in which they were written. | 20% |
| **AO4** | Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. | 10% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Shakespeare and Post-1914 Literature | Section A: Shakespeare (40 marks inc. 8 AO4), Section B: Post-1914 British play/novel (40 marks inc. 8 AO4) | 80 | 1hr 45m | 50% |
| **Paper 2** | 19th-Century Novel and Poetry since 1789 | Section A: 19th-century novel (40 marks), Section B: Poetry anthology (30 marks), Section C: Unseen poetry (30 marks) | 100 | 2hr 15m | 50% |

### Question Types
- Extract-based essay (Shakespeare, 40 marks including 8 AO4)
- Essay question choice (Post-1914 text, 40 marks including 8 AO4)
- Extract-based essay (19th-century novel, 40 marks)
- Comparative poetry essay (Poetry anthology, 30 marks)
- Single poem analysis + comparison (Unseen poetry, 15+15 marks)

### Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recognition, basic analysis, supported response | Identify techniques, basic analysis of extract/poem, reference to text |
| **Medium** | Developed analysis, interpretation, contextual understanding | Analyse language/structure/form, explore meanings, consider context |
| **Hard** | Critical evaluation, conceptualised response, synthesis | Exploratory argument, confident analysis of writer's methods, perceptive exploration of ideas |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires assured, cogent engagement with the whole text (not just extract)
- Must develop a conceptualised argument rather than point-by-point analysis
- Demands confident analysis of writer's methods with thoughtful terminology
- Requires sustained personal interpretation with judicious textual support
- Must integrate context as perceptive exploration, not surface-level facts
`;

const EDEXCEL_GCSE_ENG_LIT_MARK_SCHEME = `
## Edexcel GCSE English Literature Mark Scheme (40 marks)

### Level 5 (33-40 marks) - Assured, cogent, confident
**AO1:** Assured, personal and convincing response. Cogent and confident textual understanding. Judicious and well-selected references integrated seamlessly.
**AO2:** Detailed and confident analysis of writer's use of language, form and structure. Thoughtfully selected subject terminology used appropriately.
**AO3:** Perceptive exploration of ideas, perspectives and contextual factors.

### Level 4 (25-32 marks) - Thoughtful, clear, coherent
**AO1:** Thoughtful and developed personal response. Clear understanding of text. Well-selected textual references support interpretation effectively.
**AO2:** Clear and detailed analysis of language, form and structure. Appropriate subject terminology used.
**AO3:** Clear understanding of ideas, perspectives and contextual factors with some exploration.

### Level 3 (17-24 marks) - Sustained, sound, relevant
**AO1:** A sustained personal response with sound understanding. Relevant textual references support the response.
**AO2:** Sound analysis of writer's use of language, form and structure. Some appropriate subject terminology.
**AO3:** Some understanding of ideas, perspectives and contextual factors.

### Level 2 (9-16 marks) - Some, attempts, awareness
**AO1:** Some personal response beginning to emerge. Some understanding of text. Some textual references used.
**AO2:** Some awareness of language, form and structure. Limited use of subject terminology.
**AO3:** Some awareness of context.

### Level 1 (1-8 marks) - Simple, limited, basic
**AO1:** Simple personal response. Limited understanding of text. Limited textual reference.
**AO2:** Limited awareness of language, form and structure. Little or no terminology.
**AO3:** Limited awareness of context.

### AO4 Marks (8 marks - Paper 1 Sections A and B)
- **7-8 marks**: Uses a range of vocabulary and sentence structures to achieve effective control of meaning. Spelling and punctuation highly accurate, with occasional errors.
- **5-6 marks**: Uses a range of vocabulary and sentence structures to achieve general control of meaning. Spelling and punctuation mostly accurate, with some errors.
- **3-4 marks**: Vocabulary and sentence structures adequate to convey meaning. Spelling and punctuation sufficiently accurate to convey meaning.
- **1-2 marks**: Vocabulary and sentence structures convey meaning with some difficulty. Spelling and punctuation errors hinder communication of meaning.

### Poetry Comparison Mark Scheme (30 marks)
**Level 5 (25-30):** Assured, personal and convincing comparison. Detailed analysis of both poets' methods. Perceptive exploration of similarities and differences.
**Level 4 (19-24):** Thoughtful comparison with clear understanding. Clear analysis of both poems. Clear understanding of connections.
**Level 3 (13-18):** Sustained comparison with sound analysis. Some appropriate connections between poems.
**Level 2 (7-12):** Some comparison emerging. Some awareness of poetic methods.
**Level 1 (1-6):** Simple comparison. Limited awareness of methods.

### Unseen Poetry Mark Scheme (15 marks per question)
**Level 5 (13-15):** Assured, perceptive analysis of the poem. Assured use of textual references.
**Level 4 (10-12):** Thoughtful, developed analysis. Well-selected references.
**Level 3 (7-9):** Clear, sustained analysis. Relevant references.
**Level 2 (4-6):** Some awareness of the poem. Some references.
**Level 1 (1-3):** Simple comments on poem. Limited reference.
`;

const EDEXCEL_GCSE_ENG_LIT_QUESTION_FORMATS = `
## Authentic Edexcel GCSE English Literature Question Formats

### Shakespeare Extract Question (40 marks including 8 AO4)
Format: "Explore how Shakespeare presents [theme/character] in this extract and elsewhere in the play."
**Structure:**
- Extract provided (typically 30-40 lines)
- Must discuss extract AND rest of play
- 8 marks for SPaG (AO4)

**Examples:**
- "Explore how Shakespeare presents conflict in this extract and elsewhere in the play."
- "Explore how Shakespeare presents the character of Lady Macbeth in this extract and elsewhere in the play."
- "Explore how Shakespeare uses the supernatural in this extract and elsewhere in the play."

### Post-1914 Text Essay Question (40 marks including 8 AO4)
Format: "Explore the significance of [theme/character] in [text]."
**Structure:**
- Two question choices (no extract)
- Whole text response required
- 8 marks for SPaG (AO4)
- "You must refer to the context of the play/novel in your answer"

**Examples:**
- "Explore the significance of the Inspector in An Inspector Calls."
- "How does Priestley present ideas about responsibility in An Inspector Calls?"
- "Explore the significance of the ending of the play."

### 19th-Century Novel Extract Question (40 marks)
Format: "Explore how [author] presents [theme/character] in this extract and elsewhere in the novel."
**Structure:**
- Extract provided
- Must analyse extract AND link to whole novel
- No AO4 marks on this section

**Examples:**
- "Explore how Dickens presents poverty in this extract and elsewhere in A Christmas Carol."
- "Explore how Stevenson creates a sense of mystery in this extract and elsewhere in the novel."

### Poetry Anthology Comparison (30 marks)
Format: "Compare the ways poets present [theme] in '[named poem]' and one other poem from the Relationships anthology."
**Structure:**
- Named poem NOT provided (students must know it)
- Student chooses comparison poem from anthology
- Must compare methods and meanings

### Unseen Poetry - Single Poem (15 marks)
Format: "The poem is called '[title]' by [poet]. Read the poem and answer the question: [specific question about the poem]."
**Structure:**
- Unfamiliar poem provided
- Specific question about language, form, structure
- AO1 and AO2 only

### Unseen Poetry - Comparison (15 marks)
Format: "Both poems are about [theme]. Compare the ways the poets present [theme]."
**Structure:**
- Second unfamiliar poem provided
- Compare methods between two unseen poems
- AO2 focus
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const MACBETH_KNOWLEDGE = `
## MACBETH - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Scene 3**: Witches' prophecies to Macbeth and Banquo ("All hail Macbeth, that shalt be king hereafter")
- **Act 1 Scene 5**: Lady Macbeth's "unsex me here" soliloquy, reading the letter
- **Act 1 Scene 7**: "If it were done" soliloquy, Lady Macbeth's persuasion
- **Act 2 Scene 1**: "Is this a dagger" soliloquy before Duncan's murder
- **Act 2 Scene 2**: Aftermath of murder, "Will all great Neptune's ocean wash this blood"
- **Act 3 Scene 1**: Macbeth's soliloquy about Banquo, hiring murderers
- **Act 3 Scene 4**: Banquet scene, Banquo's ghost appears
- **Act 4 Scene 1**: Witches' apparitions and prophecies
- **Act 5 Scene 1**: Lady Macbeth's sleepwalking scene, "Out, damned spot"
- **Act 5 Scene 5**: "Tomorrow and tomorrow and tomorrow" - nihilistic soliloquy

### Key Quotations by Theme

**AMBITION:**
- "I have no spur to prick the sides of my intent, but only vaulting ambition" (1.7)
- "Stars, hide your fires; Let not light see my black and deep desires" (1.4)
- "I am settled, and bend up each corporal agent to this terrible feat" (1.7)

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
- "I dare do all that may become a man; Who dares do more is none" (1.7)

**KINGSHIP/TYRANNY:**
- "There's no art to find the mind's construction in the face" (1.4) - Duncan
- "Blood will have blood" (3.4)

**APPEARANCE VS REALITY:**
- "Look like the innocent flower, but be the serpent under't" (1.5)
- "False face must hide what the false heart doth know" (1.7)

### Jacobean Context Points
- **Divine Right of Kings**: James I believed kings were God's representatives; regicide = crime against God
- **The Gunpowder Plot (1605)**: Recent attempt to kill James I; play shows consequences of killing a king
- **James I's interest in witchcraft**: Wrote "Daemonologie" (1597)
- **Great Chain of Being**: Natural order with God > King > Man > Woman > Animals
- **Patriarchal society**: Lady Macbeth's "unsex me" is unnatural, transgressive

### Character Arcs
- **Macbeth**: Brave warrior → ambitious murderer → paranoid tyrant → nihilistic despair
- **Lady Macbeth**: Ruthless manipulator → guilt-stricken → madness → suicide
- **Banquo**: Loyal friend → suspicious observer → murdered → ghost/conscience
`;

const ROMEO_JULIET_KNOWLEDGE = `
## ROMEO AND JULIET - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Prologue**: "Two households, both alike in dignity" - star-crossed lovers
- **Act 1 Scene 1**: Street brawl, Prince's warning, Romeo's melancholy
- **Act 1 Scene 5**: Masquerade ball, Romeo sees Juliet, sonnet exchange
- **Act 2 Scene 2**: Balcony scene - "What's in a name?"
- **Act 3 Scene 1**: Mercutio killed by Tybalt; Romeo kills Tybalt; banishment
- **Act 3 Scene 5**: Aubade (dawn scene), Juliet refuses Paris, Capulet's rage
- **Act 5 Scene 3**: Tomb scene - Romeo's death, Juliet wakes, her death

### Key Quotations by Theme

**LOVE:**
- "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night" (1.5)
- "My only love sprung from my only hate" (1.5)
- "What's in a name? That which we call a rose by any other word would smell as sweet" (2.2)
- "My bounty is as boundless as the sea, my love as deep" (2.2)

**FATE/DESTINY:**
- "A pair of star-crossed lovers take their life" (Prologue)
- "Some consequence yet hanging in the stars" (1.4)
- "O, I am fortune's fool!" (3.1)
- "Then I defy you, stars!" (5.1)

**CONFLICT/VIOLENCE:**
- "Do you bite your thumb at us, sir?" (1.1)
- "I hate the word, as I hate hell, all Montagues, and thee" (1.1) - Tybalt
- "A plague on both your houses!" (3.1) - Mercutio

**LIGHT AND DARK:**
- "O, she doth teach the torches to burn bright!" (1.5)
- "It is the east, and Juliet is the sun" (2.2)

### Elizabethan Context Points
- **Patriarchy**: Fathers owned daughters; arranged marriages normal
- **Honour culture**: Family reputation paramount; revenge expected
- **Age of marriage**: Juliet at 13 was marriageable age
- **Italian setting**: Verona associated with passion, violence, Catholicism

### Character Arcs
- **Romeo**: Melancholy lover (Rosaline) → passionate lover → impulsive killer → tragic suicide
- **Juliet**: Obedient daughter → defiant lover → brave → tragic suicide
- **Mercutio**: Witty, cynical about love → dies cursing both houses
- **Tybalt**: "King of Cats" → aggressive, honour-obsessed → killed by Romeo
`;

const MERCHANT_VENICE_KNOWLEDGE = `
## THE MERCHANT OF VENICE - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Scene 3**: Shylock's "Hath not a Jew eyes?" speech; the bond agreement
- **Act 2 Scene 5**: Jessica's elopement plans; Shylock warns her
- **Act 3 Scene 1**: Shylock's grief and rage at Jessica's flight; "If you prick us, do we not bleed?"
- **Act 3 Scene 2**: Casket scene - Bassanio chooses lead; Portia's "quality of mercy" preparation
- **Act 4 Scene 1**: The trial scene - Portia's "quality of mercy" speech; Shylock's defeat
- **Act 5 Scene 1**: Resolution at Belmont; ring plot resolution

### Key Quotations by Theme

**PREJUDICE AND JUSTICE:**
- "Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions?" (3.1)
- "The quality of mercy is not strained; It droppeth as the gentle rain from heaven" (4.1)
- "You call me misbeliever, cut-throat dog, And spit upon my Jewish gaberdine" (1.3)
- "The villainy you teach me I will execute" (3.1)

**WEALTH AND GREED:**
- "My daughter! O my ducats! O my daughter!" (2.8)
- "All that glisters is not gold" (2.7) - casket inscription
- "The world is still deceived with ornament" (3.2)

**LOVE AND FRIENDSHIP:**
- "In Belmont is a lady richly left" (1.1)
- Antonio: "My purse, my person, my extremest means lie all unlocked to your occasions" (1.1)
- "Love is blind" (2.6)

**MERCY VS JUSTICE:**
- "I crave the law, the penalty and forfeit of my bond" (4.1) - Shylock
- "Tarry a little; there is something else. This bond doth give thee here no jot of blood" (4.1) - Portia

### Elizabethan Context Points
- **Anti-Semitism**: Jews expelled from England in 1290; returned 1656; stereotyped as usurers
- **Usury**: Charging interest was sinful for Christians; Jews forced into moneylending
- **Patriarchy**: Portia bound by father's will even after his death
- **Venice**: Major trading city; multicultural but prejudiced

### Character Arcs
- **Shylock**: Wronged moneylender → vengeful creditor → humiliated, forced conversion
- **Portia**: Constrained heiress → clever disguise → delivers justice/mercy
- **Antonio**: Melancholy merchant → generous friend → nearly dies → saved
- **Bassanio**: Fortune-hunter → lover → husband
`;

const TWELFTH_NIGHT_KNOWLEDGE = `
## TWELFTH NIGHT - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Scene 1**: Orsino's "If music be the food of love" speech
- **Act 1 Scene 5**: Viola meets Olivia; Olivia falls for "Cesario"
- **Act 2 Scene 4**: Orsino and Viola discuss love; "She never told her love"
- **Act 2 Scene 5**: Malvolio finds the letter; "Some are born great..."
- **Act 3 Scene 1**: Viola and Olivia; "Love sought is good..."
- **Act 3 Scene 4**: Malvolio in yellow stockings; cross-gartered
- **Act 5 Scene 1**: Revelations and reunions; Sebastian and Viola together

### Key Quotations by Theme

**LOVE AND DESIRE:**
- "If music be the food of love, play on" (1.1)
- "Make me a willow cabin at your gate" (1.5)
- "She never told her love, but let concealment, like a worm i' the bud, feed on her damask cheek" (2.4)
- "Love sought is good, but given unsought is better" (3.1)

**IDENTITY AND DISGUISE:**
- "Conceal me what I am" (1.2) - Viola
- "I am not what I am" (3.1) - Viola
- "Nothing that is so is so" (4.1) - Feste

**FOOLERY AND WISDOM:**
- "Better a witty fool than a foolish wit" (1.5) - Feste
- "I wear not motley in my brain" (1.5) - Feste
- "The whirligig of time brings in his revenges" (5.1)

**MADNESS:**
- "Why, this is very midsummer madness" (3.4)
- "I am as mad as he, if sad and merry madness equal be" (3.4)

**AMBITION AND PRIDE:**
- "Some are born great, some achieve greatness, and some have greatness thrust upon 'em" (2.5)
- Malvolio's desire to be "Count Malvolio"

### Elizabethan Context Points
- **Twelfth Night**: Feast of Epiphany; traditional time for revelry and misrule
- **Cross-dressing**: Boy actors played women; meta-theatrical layers
- **Puritanism**: Malvolio represents emerging Puritan attitudes; mocked
- **Social mobility**: Malvolio's ambitions seen as transgressive

### Character Arcs
- **Viola**: Shipwrecked → disguised "Cesario" → reveals identity → marries Orsino
- **Olivia**: Grieving → infatuated with "Cesario" → marries Sebastian
- **Malvolio**: Pompous steward → humiliated by trick → threatens revenge
- **Orsino**: Self-indulgent lover → transfers love to Viola
`;

const CHRISTMAS_CAROL_KNOWLEDGE = `
## A CHRISTMAS CAROL - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Stave 1**: Scrooge in the counting house, refusing charity collectors, Marley's ghost visit
- **Stave 2**: Ghost of Christmas Past - Fan, Fezziwig's party, Belle's departure
- **Stave 3**: Ghost of Christmas Present - Cratchit family dinner, Ignorance and Want
- **Stave 4**: Ghost of Christmas Yet to Come - Scrooge's death, stolen possessions
- **Stave 5**: Scrooge's transformation, sending turkey to Cratchits, raising Bob's salary

### Key Quotations by Theme

**REDEMPTION/TRANSFORMATION:**
- "I will honour Christmas in my heart, and try to keep it all the year"
- "I am not the man I was"
- "He became as good a friend, as good a master, and as good a man, as the good old city knew"

**SOCIAL RESPONSIBILITY:**
- "Are there no prisons? Are there no workhouses?"
- "If they would rather die, they had better do it, and decrease the surplus population"
- "Mankind was my business. The common welfare was my business"

**POVERTY:**
- "They are Man's... This boy is Ignorance. This girl is Want. Beware them both"
- "God bless us, every one!" - Tiny Tim

**ISOLATION VS FAMILY:**
- "Solitary as an oyster"
- "Secret, and self-contained, and solitary as an oyster"

**GREED/MONEY:**
- "Hard and sharp as flint, from which no steel had ever struck out generous fire"
- Belle: "Another idol has displaced me... a golden one"
- "I wear the chain I forged in life... I made it link by link" - Marley

### Victorian Context Points
- **The Poor Law Amendment Act (1834)**: Created workhouses; Dickens opposed their cruelty
- **Industrial Revolution**: Huge wealth inequality; exploitation of workers
- **Thomas Malthus**: Economist who argued poor should be left to die; Scrooge echoes this
- **Christmas traditions**: Dickens helped revive Christmas spirit

### Character Arcs
- **Scrooge**: Miserly, cold-hearted → shown past/present/future → generous, warm, redeemed
- **Tiny Tim**: Symbol of innocent poor; his potential death motivates Scrooge's change
- **Bob Cratchit**: Long-suffering, loyal, optimistic despite poverty
- **Marley's Ghost**: Warning figure; shows consequences of greed (chains)
`;

const JEKYLL_HYDE_KNOWLEDGE = `
## DR JEKYLL AND MR HYDE - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Chapter 1**: "Story of the Door" - Enfield describes Hyde trampling the girl
- **Chapter 2**: "Search for Mr Hyde" - Utterson meets Hyde, describes his appearance
- **Chapter 4**: "The Carew Murder Case" - Hyde murders Sir Danvers Carew with the cane
- **Chapter 8**: "The Last Night" - Poole and Utterson break down the door
- **Chapter 9**: "Dr Lanyon's Narrative" - Witnesses transformation, dies of shock
- **Chapter 10**: "Henry Jekyll's Full Statement" - Jekyll explains everything

### Key Quotations by Theme

**DUALITY OF MAN:**
- "Man is not truly one, but truly two"
- "All human beings... are commingled out of good and evil"
- "I learned to recognise the thorough and primitive duality of man"

**REPRESSION:**
- "I concealed my pleasures"
- "I stood already committed to a profound duplicity of life"

**APPEARANCE VS REALITY:**
- "The door... was blistered and distained" (back door vs respectable front)
- Hyde as "something troglodytic" - primitive, hidden

**EVIL/SIN:**
- Hyde is "pure evil"
- "Satan's signature upon a face"
- "ape-like fury"
- "gave an impression of deformity without any nameable malformation"

**SCIENCE VS RELIGION:**
- Jekyll's experiments transgress natural/divine law
- "The drug had no discriminating action; it was neither diabolical nor divine"

### Victorian Context Points
- **Victorian respectability**: Gentlemen must maintain reputation; private vices hidden
- **Darwin and evolution**: Hyde described as "ape-like" - fear of regression
- **Gothic literature**: Supernatural, horror, psychological terror
- **London geography**: Respectable West End vs criminal East End; Hyde's Soho

### Character Arcs
- **Jekyll**: Respected scientist → experimenter → increasingly unable to control Hyde → death
- **Hyde**: Small, young → grows stronger with each transformation → dominant
- **Utterson**: Lawyer, rational → detective figure → witness to horror
`;

const INSPECTOR_CALLS_KNOWLEDGE = `
## AN INSPECTOR CALLS - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Opening**: Birling's speeches about Titanic, war, "community and all that nonsense"
- **Act 1**: Gerald's confession about Daisy Renton/Eva Smith
- **Act 2**: Mrs Birling's interrogation; "Girls of that class"
- **Act 2**: Mrs Birling blames the father of Eva's child
- **Act 3**: Eric revealed as father; stole money
- **Act 3**: Inspector's final speech: "Fire and blood and anguish"
- **Act 3**: Phone call reveals a real inspector is coming

### Key Quotations by Theme

**SOCIAL RESPONSIBILITY:**
- "We are members of one body. We are responsible for each other"
- "If men will not learn that lesson, then they will be taught it in fire and blood and anguish"
- Birling: "A man has to mind his own business and look after himself and his own"
- "Public men, Mr Birling, have responsibilities as well as privileges"

**CLASS:**
- Mrs Birling: "Girls of that class—"
- "As if a girl of that sort would ever refuse money!"
- Gerald: "We're respectable citizens and not criminals"

**GENDER:**
- Eva/Daisy exploited by every male character
- Eric: "I was in that state when a chap easily turns nasty"
- Mrs Birling's internalised misogyny towards "girls of that class"

**GENERATIONAL CONFLICT:**
- Sheila: "But these girls aren't cheap labour—they're people"
- Eric: "You're not the kind of father a chap could go to when he's in trouble"
- Sheila and Eric accept responsibility; older generation refuse

**CAPITALISM VS SOCIALISM:**
- Birling: "lower costs and higher prices"
- Inspector represents socialist viewpoint

### 1912 Context (when play is set)
- **Titanic**: Birling calls it "unsinkable, absolutely unsinkable" - dramatic irony
- **WWI approaching**: Birling: "there isn't a chance of war" - dramatic irony
- **Class system rigid**: Working class had few rights; women couldn't vote

### 1945 Context (when play was written)
- **End of WWII**: Audiences knew the horrors that followed 1912
- **Welfare State emerging**: NHS created 1948; Priestley supported this
- **Labour government elected**: Clement Attlee defeated Churchill

### Character Arcs
- **Birling**: Confident capitalist → exposed → refuses to change
- **Mrs Birling**: Snobbish, superior → most guilty → refuses to accept responsibility
- **Sheila**: Spoilt girl → genuinely remorseful → transformed
- **Eric**: Drunk, immature → confronts guilt → changes
- **Inspector**: Mysterious, omniscient → moral voice → possibly supernatural
`;

const ANIMAL_FARM_KNOWLEDGE = `
## ANIMAL FARM - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Chapter 1**: Old Major's speech about rebellion and "Beasts of England"
- **Chapter 2**: The Rebellion - animals drive out Jones; Seven Commandments established
- **Chapter 3**: The harvest; pigs take milk and apples; Squealer's justifications
- **Chapter 5**: Snowball's expulsion; Napoleon's dogs attack
- **Chapter 6**: Animals work on windmill; pigs move into farmhouse
- **Chapter 7**: Confessions and executions; "Beasts of England" banned
- **Chapter 9**: Boxer's death; sent to knacker's yard
- **Chapter 10**: Pigs walk on two legs; final line - "looked from pig to man..."

### Key Quotations by Theme

**POWER AND CORRUPTION:**
- "All animals are equal, but some animals are more equal than others"
- "The creatures outside looked from pig to man, and from man to pig... but already it was impossible to say which was which"
- "Four legs good, two legs bad" → "Four legs good, two legs better"

**PROPAGANDA AND MANIPULATION:**
- "Squealer could turn black into white"
- "Napoleon is always right"
- "Surely, comrades, you do not want Jones back?"

**REVOLUTION AND BETRAYAL:**
- "Whatever goes upon two legs is an enemy. Whatever goes upon four legs, or has wings, is a friend"
- "The Seven Commandments" - gradually altered
- Old Major's dream vs final reality

**EXPLOITATION:**
- Boxer: "I will work harder" and "Napoleon is always right"
- Boxer sent to knacker's yard despite loyal service
- Working class animals continue to suffer under new rulers

### Historical Context (Soviet Union Allegory)
- **Old Major** = Karl Marx/Lenin (inspiration for revolution)
- **Napoleon** = Joseph Stalin (brutal dictator)
- **Snowball** = Leon Trotsky (exiled, demonised)
- **Squealer** = Pravda/propaganda machine
- **Boxer** = exploited working class
- **The Dogs** = Secret police (NKVD)
- **Jones** = Tsar Nicholas II
- **The windmill** = Five Year Plans

### Character Arcs
- **Napoleon**: Equal comrade → dictator indistinguishable from humans
- **Snowball**: Revolutionary hero → scapegoat/enemy of the state
- **Boxer**: Loyal, hard-working → exploited, killed for profit
- **Squealer**: Persuasive spokesman → propaganda minister
- **Benjamin**: Cynical observer → too late to act
`;

const RELATIONSHIPS_ANTHOLOGY = `
## EDEXCEL RELATIONSHIPS POETRY ANTHOLOGY

### THE 15 POEMS - Overview

**CLUSTER 1: ROMANTIC LOVE**
1. When We Two Parted - Lord Byron
2. Love's Philosophy - Percy Bysshe Shelley
3. Porphyria's Lover - Robert Browning
4. Sonnet 29 - Elizabeth Barrett Browning
5. Neutral Tones - Thomas Hardy

**CLUSTER 2: FAMILY RELATIONSHIPS**
6. The Farmer's Bride - Charlotte Mew
7. Walking Away - Cecil Day Lewis
8. Eden Rock - Charles Causley
9. Follower - Seamus Heaney
10. Mother, any distance - Simon Armitage
11. Before You Were Mine - Carol Ann Duffy
12. Climbing My Grandfather - Andrew Waterhouse

**CLUSTER 3: COMPLEX/UNCONVENTIONAL LOVE**
13. Letters from Yorkshire - Maura Dooley
14. Winter Swans - Owen Sheers
15. Singh Song! - Daljit Nagra

---

### POEM 1: WHEN WE TWO PARTED - Lord Byron (1816)

**Summary:**
The speaker recalls a painful secret parting from a lover. Years later, hearing their name still causes grief and shame. The relationship was secret, so the speaker cannot openly mourn.

**Key Themes:** Loss, secrecy, shame, memory, betrayal
**Form:** Eight quatrains, ABAB rhyme - controlled but mournful
**Key Techniques:**
- Physical responses: "pale grew thy cheek and cold" - love linked to death
- Repetition: "silence and tears" (stanza 1 and 8) - cyclical grief
- Cold imagery: "cold," "chill," "dew of the morning" - emotional distance
- Rhetorical question: "Why wert thou so dear?" - unresolved

**Context:** Possibly about Lady Frances Webster; Byron was known for scandalous affairs. Romantic era valued intense emotion.

---

### POEM 2: LOVE'S PHILOSOPHY - Percy Bysshe Shelley (1820)

**Summary:**
The speaker argues that everything in nature mixes and mingles - winds, rivers, mountains, waves. So why won't the beloved kiss them?

**Key Themes:** Desire, natural order, persuasion, unfulfilled love
**Form:** Two octaves, ABABCDCD - song-like, playful
**Key Techniques:**
- Natural imagery: "fountains mingle with the river" - nature as model
- Rhetorical questions: "And the sunlight clasps the earth" - building argument
- Personification: nature embraces, kisses, mingles
- Bathetic ending: "What are all these kissings worth / If thou kiss not me?"

**Context:** Shelley was a Romantic poet who believed in free love; the poem is persuasive, perhaps manipulatively so.

---

### POEM 3: PORPHYRIA'S LOVER - Robert Browning (1836)

**Summary:**
A man describes his lover Porphyria visiting him. She declares her love, and in that perfect moment, he chooses to preserve it forever by ending her life. He believes she felt no pain.

**Key Themes:** Obsession, control, possessive love, madness
**Form:** Dramatic monologue, continuous verse - reflects disturbed mind
**Key Techniques:**
- Pathetic fallacy: storm outside mirrors inner turmoil
- Enjambment: flowing structure despite dark content
- Disturbing understatement: speaker's calm tone creates horror
- Final line: "And yet God has not said a word" - no divine punishment

**Context:** Victorian era; Browning explores extreme psychology. Dramatic monologue reveals character through their own unreliable narration.

---

### POEM 4: SONNET 29 - Elizabeth Barrett Browning (1845-46)

**Summary:**
The speaker compares her thoughts of her beloved to a vine clinging to a tree. She asks him to call her by pet names and renew her spirit.

**Key Themes:** Passionate love, devotion, identity in love
**Form:** Petrarchan sonnet - traditional love form
**Key Techniques:**
- Extended metaphor: vine and tree - she clings to him
- Exclamatory: "I think of thee!" - passionate intensity
- Contrast: wild vine must be pruned for palm tree to flourish
- Direct address: "thee," "thy" - intimate second person

**Context:** Written during secret courtship with Robert Browning; EBB's father forbade her to marry. Love as liberating force.

---

### POEM 5: NEUTRAL TONES - Thomas Hardy (1867)

**Summary:**
The speaker recalls standing by a pond on a winter day with a lover. Their relationship was dying. Now, whenever he sees similar landscapes, he remembers that painful conversation.

**Key Themes:** Loss of love, memory, nature reflecting emotion, disillusionment
**Form:** Four quatrains, ABBA - enclosed, trapped feeling
**Key Techniques:**
- Pathetic fallacy: "the sun was white, as though chidden of God" - bleak landscape
- Color symbolism: grey, white - absence of warmth/passion
- Cyclical structure: returns to "that winter day" at end
- Simile: "smile on your mouth was the deadest thing"

**Context:** Hardy wrote about failed relationships; often pessimistic view of love. The poem is deceptively simple but emotionally complex.

---

### POEM 6: THE FARMER'S BRIDE - Charlotte Mew (1912)

**Summary:**
A farmer describes his young wife who ran away from him soon after marriage. She was recaptured and now lives in fear of him. He desires her but cannot reach her.

**Key Themes:** Entrapment, fear, desire vs distance, failed communication
**Form:** Irregular stanzas and rhyme - reflects disordered relationship
**Key Techniques:**
- Animal imagery: wife compared to "a leveret," "a little frightened fay"
- Pronouns: "we" (community caught her) vs "I" (lonely desire)
- Dialect: "her" instead of "she" - rural voice
- Final stanza: growing desperation, "down in the dark"

**Context:** Mew explored outsiders and trapped figures; the wife's silence speaks volumes. Questions of consent and power.

---

### POEM 7: WALKING AWAY - Cecil Day Lewis (1962)

**Summary:**
A father watches his son walk away to his first school football match. The memory, 18 years later, still resonates as a metaphor for letting go.

**Key Themes:** Parental love, letting go, memory, growth
**Form:** Four quintains - measured, reflective
**Key Techniques:**
- Extended metaphor: "like a satellite / Wrenched from its orbit"
- Natural imagery: "a half-fledged thing set free"
- Time shifts: past event, present reflection
- Paradox: "selfhood begins with a walking away"

**Context:** Day Lewis (poet laureate) writes about universal parental experience; love expressed through release.

---

### POEM 8: EDEN ROCK - Charles Causley (1988)

**Summary:**
The speaker sees his parents as they were when young, having a picnic at Eden Rock. They beckon him to cross the stream to join them.

**Key Themes:** Memory, death, reunion, idealized past
**Form:** Free verse with natural speech rhythms
**Key Techniques:**
- Specific details: "H.P. Sauce bottle," "Thermos" - vivid memory
- Present tense: "My father... spins a stone"
- Light imagery: "light" appears multiple times - heaven/memory
- Ambiguous ending: crossing to join them = death?

**Context:** Causley wrote after his mother's death; the poem hovers between memory and vision of afterlife.

---

### POEM 9: FOLLOWER - Seamus Heaney (1966)

**Summary:**
The speaker remembers following his expert farmer father as a child, wanting to be like him. Now, their roles reverse - the aging father "follows" the grown son.

**Key Themes:** Father-son relationship, skill/expertise, aging, role reversal
**Form:** Six quatrains, ABAB - controlled like the ploughing
**Key Techniques:**
- Technical farming language: "wing," "headrig," "sock"
- Physical descriptions: "globed like a full sail strung"
- Reversal in final stanza: "it is my father who keeps stumbling"
- Sound: alliteration "shoulders globed," "strung / Tight"

**Context:** Heaney's father was a farmer; the poem honors manual skill while acknowledging the poet's different path.

---

### POEM 10: MOTHER, ANY DISTANCE - Simon Armitage (1993)

**Summary:**
A mother helps her son measure his new house with a tape measure. As he climbs higher, she anchors one end below. He reaches for independence.

**Key Themes:** Mother-son bond, independence, leaving home
**Form:** Loosely sonnet-shaped - love poem to mother
**Key Techniques:**
- Extended metaphor: tape measure = umbilical cord/connection
- Space imagery: "acres," "prairies," "space-Loss" - vastness of adulthood
- Verbs of expansion: "unreeling," "climb"
- Ambiguous ending: "to fall or fly" - uncertain future

**Context:** From "Book of Matches"; Armitage explores everyday relationships with poetic intensity.

---

### POEM 11: BEFORE YOU WERE MINE - Carol Ann Duffy (1993)

**Summary:**
The speaker addresses her mother before she was born, imagining her glamorous youth in the 1950s. Becoming a mother changed everything.

**Key Themes:** Mother-daughter love, nostalgia, possession, time
**Form:** Four 5-line stanzas - snapshots/photographs
**Key Techniques:**
- Second person address to past mother: "Your polka-dot dress blows round your legs"
- Film references: "Marilyn" - glamour of the era
- Possessive title: "Before You Were Mine" - reversal of parent/child
- Time shifts: past glamour vs "relics" in present

**Context:** Duffy imagines her mother's life before motherhood; explores how having children changes identity.

---

### POEM 12: CLIMBING MY GRANDFATHER - Andrew Waterhouse (2000)

**Summary:**
The speaker imagines climbing their grandfather like a mountain, exploring each feature - earth-stained fingers, scratchy chin, forested ear.

**Key Themes:** Childhood wonder, family bonds, exploration, memory
**Form:** Free verse, single stanza - continuous climb
**Key Techniques:**
- Extended conceit: grandfather as mountain throughout
- Physical details: "dusty, old, bald as a bed of bold"
- Progression upward: from "scrubbed" boots to "glacial" brow
- Final image: reaching the heart, feeling it "tick"

**Context:** Waterhouse explores intimacy through physical exploration; the grandfather may be a memory (deceased).

---

### POEM 13: LETTERS FROM YORKSHIRE - Maura Dooley (1997)

**Summary:**
The speaker receives news from someone in Yorkshire about seasonal changes - lapwings, first ploughing. She works at a screen in the city but feels connected through their correspondence.

**Key Themes:** Distance, connection, different lives, communication
**Form:** Five tercets - sparse, thoughtful
**Key Techniques:**
- Contrast: his physical outdoor work vs her "feeding words onto a blank screen"
- Rhetorical question: "Is it the same..."
- Shared nature: "our souls tap out messages across the icy lines"
- Present tense: ongoing relationship

**Context:** Explores how relationships survive distance; values simple communication over physical proximity.

---

### POEM 14: WINTER SWANS - Owen Sheers (2005)

**Summary:**
A couple walks through a park after days of rain and argument. They watch swans mate for life. Without speaking, they hold hands - reconciliation.

**Key Themes:** Relationship difficulties, reconciliation, nature healing
**Form:** Unrhymed couplets (like the couple) + final tercet (coming together)
**Key Techniques:**
- Pathetic fallacy: "waterlogged earth" reflects relationship
- Swans: symbol of fidelity, "icebergs of white feather"
- Hand imagery: hands "swum the wood" like swans
- Final tercet: three lines = couple united plus something more

**Context:** Sheers often writes about rural Wales; nature as force for healing and connection.

---

### POEM 15: SINGH SONG! - Daljit Nagra (2007)

**Summary:**
A British-Indian shopkeeper neglects his father's shop to spend time with his new wife upstairs. He celebrates his unconventional bride and their playful relationship.

**Key Themes:** Cultural identity, marriage, rebellion, humor
**Form:** Irregular stanzas, phonetic spelling - voice-driven
**Key Techniques:**
- Phonetic dialect: "di" (the), "vee" (we) - authentic voice
- Humor: listing complaints about closed shop
- Romantic imagery: "tiny eyes ov a teddy"
- Refrain: "My bride" - celebration of unconventional wife

**Context:** Nagra explores British-Indian identity; the wife rejects traditional expectations. Playful, celebratory tone.

---

### COMMON COMPARISON PAIRS

**Romantic Love:**
- Love's Philosophy + Sonnet 29 (desire, devotion)
- When We Two Parted + Neutral Tones (lost love, memory)
- Porphyria's Lover + The Farmer's Bride (control, possession)

**Parent-Child:**
- Walking Away + Follower (parents watching children grow)
- Eden Rock + Before You Were Mine (memory of parents)
- Mother, any distance + Climbing My Grandfather (physical connection)

**Distance and Connection:**
- Letters from Yorkshire + Winter Swans (communication, reconnection)
- When We Two Parted + Letters from Yorkshire (absence, memory)

**Unconventional Relationships:**
- Singh Song! + Before You Were Mine (challenging expectations)
- The Farmer's Bride + Porphyria's Lover (troubled relationships)

---

### THEMATIC GROUPINGS FOR QUESTIONS

**DESIRE AND LONGING:**
Love's Philosophy, When We Two Parted, The Farmer's Bride - unfulfilled desire

**MEMORY AND LOSS:**
Neutral Tones, Eden Rock, Before You Were Mine - past relationships

**PARENT-CHILD BONDS:**
Walking Away, Follower, Mother any distance, Climbing My Grandfather

**TROUBLED RELATIONSHIPS:**
Porphyria's Lover, The Farmer's Bride, Neutral Tones, Winter Swans

**CELEBRATION OF LOVE:**
Sonnet 29, Singh Song!, Winter Swans (ending)
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
  if (topicLower.includes('merchant') || topicLower.includes('venice')) {
    return MERCHANT_VENICE_KNOWLEDGE;
  }
  if (topicLower.includes('twelfth night')) {
    return TWELFTH_NIGHT_KNOWLEDGE;
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
  if (topicLower.includes('animal farm')) {
    return ANIMAL_FARM_KNOWLEDGE;
  }

  // Poetry anthology
  if (topicLower.includes('poetry') || topicLower.includes('anthology') || topicLower.includes('relationships')) {
    return RELATIONSHIPS_ANTHOLOGY;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelGCSEEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
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

  return `You are an expert Edexcel GCSE English Literature examiner creating exam-style questions.

${EDEXCEL_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES}

${EDEXCEL_GCSE_ENG_LIT_MARK_SCHEME}

${EDEXCEL_GCSE_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic Edexcel Style**: Match real Edexcel paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focus on single poem analysis, 15-mark style questions
   - Medium: 30-40 mark essay questions requiring whole text knowledge
   - Hard: Complex comparative analysis with sophisticated conceptual demands

## CRITICAL: Extract Handling Rules

### FOR SHAKESPEARE (Macbeth, Romeo & Juliet, Merchant of Venice, Twelfth Night) - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL EXTRACT TEXT** in the question - Shakespeare is public domain
- Generate authentic extracts of 10-20 lines from the relevant scene
- Format with character names and speech prefixes as in the original text
- Example: Include the actual "To be or not to be" speech, not just a reference to it

### FOR OTHER TEXTS (Christmas Carol, Jekyll & Hyde, Inspector Calls, Animal Farm) - COPYRIGHTED:
- Provide CLEAR LOCATION REFERENCES so students can look up the passage
- Format: "Read from [Stave/Chapter/Act], from '[opening words]...' to '[closing words]'"
- Students should have their copy of the text open to follow along

## Response Format
Return JSON with:
- "content": Question text (with extract context description if applicable)
- "marks": Total marks
- "solution": Model answer demonstrating appropriate level response (MUST use specific quotations from the text knowledge)
- "markScheme": Array of level descriptors and indicative content points
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('englishliterature')}`;
}

export function getEdexcelGCSEEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a 15-mark unseen poetry analysis question OR a focused single-text question.

**Question Types:**
- "Read the poem and analyse how the poet presents [theme]"
- "How does the writer create [effect] in this extract?"

**15-Mark Level Descriptors:**
- Level 5 (13-15): Assured, perceptive analysis; assured textual references
- Level 4 (10-12): Thoughtful, developed analysis; well-selected references
- Level 3 (7-9): Clear, sustained analysis; relevant references
- Level 2 (4-6): Some awareness; some references
- Level 1 (1-3): Simple comments; limited reference

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a 30-40 mark essay question (with or without extract).

**Question Types:**
For Shakespeare/19th-century novels (with extract):
- "Explore how [author] presents [theme/character] in this extract and elsewhere in the play/novel."
- Describe an appropriate extract context (DO NOT reproduce copyrighted text)

For Post-1914 texts (no extract):
- "Explore the significance of [theme/character] in [text]."
- "How does [author] present ideas about [theme]?"
- "You must refer to the context of the play/novel in your answer."

For Poetry comparison:
- "Compare the ways poets present [theme] in '[named poem]' and one other poem from the anthology."

**40-Mark Level Descriptors:**
- Level 5 (33-40): Assured, personal, convincing; cogent understanding; seamless references
- Level 4 (25-32): Thoughtful, developed; clear understanding; well-selected references
- Level 3 (17-24): Sustained, sound; relevant references; some analysis
- Level 2 (9-16): Some response; some understanding; some references
- Level 1 (1-8): Simple; limited understanding; limited references

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 40-48 mark question (40 marks + up to 8 AO4) requiring sophisticated analysis.

**Question Types:**
- "Explore how [author] presents [complex theme] in this extract and elsewhere in the play/novel."
- "How far do you agree that [interpretation of text]?"
- Questions requiring evaluation of multiple perspectives and critical interpretations

Include requirement: "You must refer to the context of the play/novel in your answer."

**Requirements:**
- 40 marks for content (AO1, AO2, AO3)
- 8 marks for SPaG (AO4) where applicable

**Level 5 Response Characteristics (33-40 + 7-8 AO4):**
- Assured, personal and convincing response
- Cogent and confident textual understanding
- Detailed and confident analysis of writer's methods
- Perceptive exploration of contextual factors
- Effective control of meaning; highly accurate spelling and punctuation

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
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

  return `Generate an Edexcel GCSE English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${textKnowledgePrompt}
IMPORTANT - EXTRACT RULES:
- For SHAKESPEARE: Include the ACTUAL EXTRACT TEXT (10-20 lines) - it's public domain
- For OTHER TEXTS: Provide clear location references (Stave/Chapter/Act) so students can look it up
- Include "You must refer to the context..." where appropriate
- Model answer should demonstrate the target level's characteristics
- Model answer MUST include specific, accurate quotations from the text

Return valid JSON:
{
  "content": "question text with extract context if applicable",
  "marks": number,
  "solution": "model answer at appropriate level with embedded quotations",
  "markScheme": ["Level descriptors and indicative content points"]
}`;
}

/**
 * English Literature GCSE mark ranges based on Edexcel specification.
 * Ranges reflect question types: unseen poetry (15), text essays (30-40), extended comparison (40-48).
 * Note: English Lit has fixed mark questions tied to specific formats.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 15, max: 20 }; // Unseen poetry analysis, focused extract questions
    case 'medium':
      return { min: 25, max: 40 }; // Single text essay, character/theme analysis
    case 'hard':
      return { min: 40, max: 50 }; // Extended comparison, full essay requiring synthesis and evaluation
  }
}
