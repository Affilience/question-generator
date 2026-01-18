// AQA GCSE English Literature (8702) Question Generation Prompts
// Based on official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/english/gcse/english-literature-8702

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA GCSE ENGLISH LITERATURE SPECIFICATION DETAILS (8702)
// ============================================================================

const AQA_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES = `
## AQA GCSE English Literature Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations. | 37.5% |
| **AO2** | Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate. | 42.5% |
| **AO3** | Show understanding of the relationships between texts and the contexts in which they were written. | 15% |
| **AO4** | Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. | 5% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Shakespeare and the 19th-century novel | Section A: Shakespeare (30+4 marks), Section B: 19th-century novel (30 marks) | 64 | 1hr 45m | 40% |
| **Paper 2** | Modern texts and poetry | Section A: Modern text (30+4 marks), Section B: Poetry anthology (30 marks), Section C: Unseen poetry (24+8 marks) | 96 | 2hr 15m | 60% |

### Question Types
- Extract-based + whole text essay (Shakespeare, 30+4 marks)
- Extract-based + whole text essay (19th-century novel, 30 marks)
- Essay question choice (Modern text, 30+4 marks)
- Named poem + comparison (Poetry anthology, 30 marks)
- Single poem analysis (Unseen poetry, 24 marks)
- Comparison of two unseen poems (8 marks)
`;

const AQA_GCSE_ENG_LIT_MARK_SCHEME = `
## AQA GCSE English Literature Mark Scheme (30/34 marks)

### Level 6 (26-30 marks) - Critical, exploratory, conceptualised
**Quality of response:**
- Critical, exploratory, conceptualised response to task and whole text
- Judicious use of precise references to support interpretation(s)

**Skills demonstrated:**
- A critical, exploratory, well-structured argument
- Conceptualised approach to the full task
- Fine-grained and insightful analysis of writer's methods
- Judicious use of subject terminology
- Convincing exploration of contextual factors/interpretations

### Level 5 (21-25 marks) - Thoughtful, developed consideration
**Quality of response:**
- Thoughtful, developed response to task and whole text
- Apt references integrated into interpretation(s)

**Skills demonstrated:**
- Thoughtful, developed argument
- Examination of ideas/perspectives/contextual factors
- Developed analysis of writer's methods
- Secure use of subject terminology

### Level 4 (16-20 marks) - Clear, explained understanding
**Quality of response:**
- Clear, explained response to task and whole text
- Effective use of references to support explanation

**Skills demonstrated:**
- Clear argument with some development
- Some examination of ideas/perspectives
- Clear analysis of writer's methods with some development
- Some use of subject terminology

### Level 3 (11-15 marks) - Some understanding
**Quality of response:**
- Some understanding of task and whole text
- References used to support a range of comments

**Skills demonstrated:**
- Some structured comments on ideas/perspectives
- Explained/commented analysis of writer's methods
- Some subject terminology

### Level 2 (6-10 marks) - Supported response
**Quality of response:**
- Supported response to task and text
- References used to support comments

**Skills demonstrated:**
- Some awareness of ideas/contexts
- Identification of writer's methods
- Some terminology, not always appropriate

### Level 1 (1-5 marks) - Simple, limited comments
**Quality of response:**
- Simple, explicit comments relevant to task and text
- Reference to relevant details

**Skills demonstrated:**
- Simple comment on context
- Simple identification of method
- Simple mention of terminology

### AO4 Additional Marks (4 marks - Paper 1 Section A and Paper 2 Section A only)
- **4 marks**: Consistent accuracy; wide vocabulary including sophisticated terminology
- **3 marks**: Generally accurate; good vocabulary
- **2 marks**: Some accuracy; reasonable vocabulary
- **1 mark**: Limited accuracy; simple vocabulary
- **0 marks**: Does not meet threshold

### 8-Mark Unseen Poetry Comparison Levels
- **Level 4 (7-8)**: Exploratory comparison; judicious subject terminology; convincing comparison of effects
- **Level 3 (5-6)**: Thoughtful comparison; effective subject terminology; comparative examination of effects
- **Level 2 (3-4)**: Relevant comparison; some subject terminology; some comparison of effects
- **Level 1 (1-2)**: Some links between poets' methods; some links between effects
`;

// ============================================================================
// TEXT-SPECIFIC KNOWLEDGE FOR SET TEXTS
// ============================================================================

const MACBETH_KNOWLEDGE = `
## MACBETH - Text-Specific Knowledge (PUBLIC DOMAIN - Include actual extracts)

### SAMPLE EXTRACTS FOR QUESTIONS (Use these exact texts)

**EXTRACT 1: Act 1 Scene 5 - Lady Macbeth's soliloquy (AMBITION/GENDER)**
LADY MACBETH:
The raven himself is hoarse
That croaks the fatal entrance of Duncan
Under my battlements. Come, you spirits
That tend on mortal thoughts, unsex me here,
And fill me from the crown to the toe top-full
Of direst cruelty! make thick my blood;
Stop up the access and passage to remorse,
That no compunctious visitings of nature
Shake my fell purpose, nor keep peace between
The effect and it! Come to my woman's breasts,
And take my milk for gall, you murdering ministers,
Wherever in your sightless substances
You wait on nature's mischief!

**EXTRACT 2: Act 1 Scene 7 - Macbeth's soliloquy and Lady Macbeth's persuasion (AMBITION/MASCULINITY)**
MACBETH:
If it were done when 'tis done, then 'twere well
It were done quickly: if the assassination
Could trammel up the consequence, and catch
With his surcease success; that but this blow
Might be the be-all and the end-all here,
But here, upon this bank and shoal of time,
We'ld jump the life to come.
[...]
I have no spur
To prick the sides of my intent, but only
Vaulting ambition, which o'erleaps itself
And falls on the other.

**EXTRACT 3: Act 2 Scene 2 - Macbeth's guilt (GUILT)**
MACBETH:
Will all great Neptune's ocean wash this blood
Clean from my hand? No, this my hand will rather
The multitudinous seas incarnadine,
Making the green one red.

LADY MACBETH:
My hands are of your colour; but I shame
To wear a heart so white.
[Knocking within]
I hear a knocking
At the south entry: retire we to our chamber;
A little water clears us of this deed:
How easy is it, then!

**EXTRACT 4: Act 3 Scene 4 - Banquet scene (GUILT/SUPERNATURAL)**
MACBETH:
Avaunt! and quit my sight! let the earth hide thee!
Thy bones are marrowless, thy blood is cold;
Thou hast no speculation in those eyes
Which thou dost glare with!

LADY MACBETH:
Think of this, good peers,
But as a thing of custom: 'tis no other;
Only it spoils the pleasure of the time.

MACBETH:
What man dare, I dare:
Approach thou like the rugged Russian bear,
The arm'd rhinoceros, or the Hyrcan tiger;
Take any shape but that, and my firm nerves
Shall never tremble.

**EXTRACT 5: Act 5 Scene 1 - Lady Macbeth sleepwalking (GUILT)**
LADY MACBETH:
Out, damned spot! out, I say!—One: two: why,
then, 'tis time to do't.—Hell is murky!—Fie, my
lord, fie! a soldier, and afeard? What need we
fear who knows it, when none can call our power to
account?—Yet who would have thought the old man
to have had so much blood in him.
[...]
Here's the smell of the blood still: all the
perfumes of Arabia will not sweeten this little
hand. Oh, oh, oh!

**EXTRACT 6: Act 5 Scene 5 - "Tomorrow" soliloquy (NIHILISM/TRAGEDY)**
MACBETH:
She should have died hereafter;
There would have been a time for such a word.
To-morrow, and to-morrow, and to-morrow,
Creeps in this petty pace from day to day
To the last syllable of recorded time,
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.

### Key Scenes Summary
- **Act 1 Scene 3**: Witches' prophecies to Macbeth and Banquo
- **Act 1 Scene 5**: Lady Macbeth's "unsex me here" soliloquy
- **Act 1 Scene 7**: "If it were done" soliloquy, Lady Macbeth's persuasion
- **Act 2 Scene 1**: "Is this a dagger" soliloquy
- **Act 2 Scene 2**: Aftermath and guilt
- **Act 3 Scene 4**: Banquet scene, Banquo's ghost
- **Act 5 Scene 1**: Lady Macbeth's sleepwalking
- **Act 5 Scene 5**: "Tomorrow and tomorrow and tomorrow"

### Key Quotations by Theme

**AMBITION:**
- "I have no spur to prick the sides of my intent, but only vaulting ambition" (1.7)
- "Stars, hide your fires; Let not light see my black and deep desires" (1.4)
- "I am settled, and bend up each corporal agent to this terrible feat" (1.7)

**GUILT:**
- "Will all great Neptune's ocean wash this blood clean from my hand?" (2.2)
- "Out, damned spot! Out, I say!" (5.1)
- "What hands are here? Ha! They pluck out mine eyes" (2.2)
- "Macbeth shall sleep no more" (2.2)

**THE SUPERNATURAL:**
- "Fair is foul, and foul is fair" (1.1)
- "Is this a dagger which I see before me?" (2.1)
- "By the pricking of my thumbs, something wicked this way comes" (4.1)
- "Double, double, toil and trouble" (4.1)

**MASCULINITY/GENDER:**
- "Unsex me here, and fill me from the crown to the toe top-full of direst cruelty" (1.5)
- "When you durst do it, then you were a man" (1.7)
- "I dare do all that may become a man; Who dares do more is none" (1.7)
- "Bring forth men-children only" (1.7)

**KINGSHIP/TYRANNY:**
- "There's no art to find the mind's construction in the face" (1.4) - Duncan
- "I have begun to plant thee, and will labour to make thee full of growing" (1.4)
- "To know my deed, 'twere best not know myself" (2.2)
- "Blood will have blood" (3.4)

**APPEARANCE VS REALITY:**
- "Look like the innocent flower, but be the serpent under't" (1.5)
- "False face must hide what the false heart doth know" (1.7)
- "There's daggers in men's smiles" (2.3)

### Jacobean Context Points
- **Divine Right of Kings**: James I believed kings were God's representatives; regicide = crime against God
- **The Gunpowder Plot (1605)**: Recent attempt to kill James I; play shows consequences of killing a king
- **James I's interest in witchcraft**: Wrote "Daemonologie" (1597); witches would resonate with audience
- **Great Chain of Being**: Natural order with God > King > Man > Woman > Animals; Macbeth disrupts this
- **Patriarchal society**: Lady Macbeth's "unsex me" is unnatural, transgressive

### Character Arcs
- **Macbeth**: Brave warrior → ambitious wrongdoer → paranoid tyrant → nihilistic despair
- **Lady Macbeth**: Ruthless manipulator → guilt-stricken → madness → tragic end (offstage)
- **Banquo**: Loyal friend → suspicious observer → victim of Macbeth's fear → ghost/conscience
- **Macduff**: Loyal thane → grief-stricken avenger → restores order
`;

const CHRISTMAS_CAROL_KNOWLEDGE = `
## A CHRISTMAS CAROL - Text-Specific Knowledge

### SAMPLE EXTRACTS FOR QUESTIONS (Provide location references - text is copyrighted)

**EXTRACT 1: Stave 1 - Opening description of Scrooge (ISOLATION/GREED)**
Location: Read from Stave 1, from "Oh! But he was a tight-fisted hand at the grindstone, Scrooge!" to "...warning all human sympathy to keep its distance."

Key passage content: Describes Scrooge as "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner!" Uses weather imagery - "Hard and sharp as flint" - and emphasizes his isolation: "solitary as an oyster." The cold within him "froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait."

**EXTRACT 2: Stave 1 - Charity collectors refused (SOCIAL RESPONSIBILITY)**
Location: Read from Stave 1, from "At this festive season of the year, Mr Scrooge" to "...decrease the surplus population."

Key passage content: Scrooge asks "Are there no prisons?" and "Are there no workhouses?" When told many would rather die than go there, he responds: "If they would rather die, they had better do it, and decrease the surplus population." Shows Malthusian attitudes.

**EXTRACT 3: Stave 1 - Marley's Ghost (GUILT/WARNING)**
Location: Read from Stave 1, from "I wear the chain I forged in life" to "...Mankind was my business."

Key passage content: Marley explains his chains were made "link by link, and yard by yard" through his selfish actions. He warns: "I am here tonight to warn you, that you have yet a chance and hope of escaping my fate." Declares "Mankind was my business. The common welfare was my business."

**EXTRACT 4: Stave 2 - Fezziwig's Ball (GENEROSITY/CONTRAST)**
Location: Read from Stave 2, from "In came a fiddler with a music-book" to "...the happiness he gives, is quite as great as if it cost a fortune."

Key passage content: Shows warmth and generosity at Fezziwig's party. When Spirit asks if this small expense deserves such praise, Scrooge defends Fezziwig: "The happiness he gives, is quite as great as if it cost a fortune." Scrooge begins to see his own failures as an employer.

**EXTRACT 5: Stave 3 - Cratchit Family Christmas (POVERTY/FAMILY)**
Location: Read from Stave 3, from "Then up rose Mrs Cratchit" to "...God bless us every one!"

Key passage content: Despite poverty, family celebrates with joy. Their goose is small but "eked out by apple-sauce and mashed potatoes, it was a sufficient dinner for the whole family." Tiny Tim says "God bless us, every one!" Bob toasts Scrooge despite everything.

**EXTRACT 6: Stave 3 - Ignorance and Want (SOCIAL CRITICISM)**
Location: Read from Stave 3, from "Forgive me if I am not justified in what I ask" to "...Doom, unless the writing be erased."

Key passage content: Spirit reveals two children - "yellow, meagre, ragged, scowling, wolfish" - named Ignorance and Want. Spirit throws Scrooge's words back: "Are there no prisons? Are there no workhouses?" Warns "Doom" unless society changes.

**EXTRACT 7: Stave 5 - Scrooge's Transformation (REDEMPTION)**
Location: Read from Stave 5, from "I don't know what to do!" to "...I am as light as a feather, I am as happy as an angel."

Key passage content: Scrooge wakes transformed: "I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy. I am as giddy as a drunken man." Uses similes to show complete change. He laughs - "a splendid laugh, a most illustrious laugh" - for first time.

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
- "I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy"
- "I will live in the Past, the Present, and the Future"

**SOCIAL RESPONSIBILITY:**
- "Are there no prisons? Are there no workhouses?"
- "I help to support the establishments I have mentioned—they cost enough"
- "If they would rather die, they had better do it, and decrease the surplus population"
- "Mankind was my business. The common welfare was my business; charity, mercy, forbearance, and benevolence"
- "This boy is Ignorance. This girl is Want. Beware them both"

**POVERTY:**
- "They are Man's... This boy is Ignorance. This girl is Want. Beware them both"
- Bob Cratchit earns "fifteen bob a week" (15 shillings)
- The Cratchit family share a small goose for Christmas dinner
- Tiny Tim: "God bless us, every one!"
- "Yellow, meagre, ragged, scowling, wolfish" - description of Ignorance and Want

**ISOLATION VS FAMILY:**
- "Solitary as an oyster"
- "Secret, and self-contained, and solitary as an oyster"
- Fan: "Father is so much kinder than he used to be"
- The warmth of Fezziwig's party vs Scrooge's cold counting house
- "A solitary child, neglected by his friends"

**GREED/MONEY:**
- "Hard and sharp as flint, from which no steel had ever struck out generous fire"
- Belle: "Another idol has displaced me... a golden one"
- "The cold within him froze his old features"
- Marley's chains: "I wear the chain I forged in life... I made it link by link"
- "a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner"

**THE SUPERNATURAL:**
- "I wear the chain I forged in life"
- "The air was filled with phantoms, wandering hither and thither"
- The three spirits represent time and moral guidance
- Marley's face appears on Scrooge's door knocker

### Victorian Context Points
- **The Poor Law Amendment Act (1834)**: Created workhouses; Dickens opposed their cruelty
- **Industrial Revolution**: Huge wealth inequality; exploitation of workers
- **Child labour**: Common; Dickens himself worked in a blacking factory as a child
- **Thomas Malthus**: Economist who argued poor should be left to die; Scrooge echoes this
- **Christmas traditions**: Prince Albert popularised Christmas trees; Dickens helped revive Christmas spirit
- **Utilitarianism**: Philosophy valuing only measurable outcomes; Dickens critiques this

### Character Arcs
- **Scrooge**: Miserly, cold-hearted → shown past/present/future → generous, warm, redeemed
- **Tiny Tim**: Symbol of innocent poor; his potential death motivates Scrooge's change
- **Bob Cratchit**: Long-suffering, loyal, optimistic despite poverty
- **Marley's Ghost**: Warning figure; shows consequences of greed (chains)
- **Fred**: Represents Christmas spirit, family warmth Scrooge has rejected
`;

const JEKYLL_HYDE_KNOWLEDGE = `
## DR JEKYLL AND MR HYDE - Text-Specific Knowledge

### SAMPLE EXTRACTS FOR QUESTIONS (Provide location references - text is copyrighted)

**EXTRACT 1: Chapter 1 - Hyde's first appearance (FIRST IMPRESSION)**
Location: Read from Chapter 1 "Story of the Door", from "All at once, I saw two figures" onwards.

Key passage content: Enfield describes witnessing Hyde collide with a child at the corner and show callous indifference. Shows Hyde's lack of human empathy. Hyde described as having "something wrong with his appearance; something displeasing, something downright detestable." Bystanders react with instinctive revulsion.

**EXTRACT 2: Chapter 2 - Utterson meets Hyde (APPEARANCE/EVIL)**
Location: Read from Chapter 2 "Search for Mr Hyde", from "Mr Hyde was pale and dwarfish" to "...O my poor old Harry Jekyll, if ever I read Satan's signature upon a face, it is on that of your new friend."

Key passage content: Hyde is "pale and dwarfish, he gave an impression of deformity without any nameable malformation." Utterson struggles to describe him: "There is something more, if I could find a name for it... that fellow gave me a feeling of so uncommon as that?" Concludes it is "Satan's signature upon a face."

**EXTRACT 3: Chapter 4 - The Carew Incident (LOSS OF CONTROL)**
Location: Read from Chapter 4 "The Carew Murder Case", the passage describing Hyde's attack on Sir Danvers Carew.

Key passage content: Hyde attacks with "ape-like fury" in a sudden outburst. The maid witnesses from a window and faints. The cane is broken in two. This scene shows Hyde's escalating lack of control and primitive nature. Stevenson uses animal imagery to emphasize Hyde's regression.

**EXTRACT 4: Chapter 7 - Jekyll at the window (DUALITY/HORROR)**
Location: Read from Chapter 7 "Incident at the Window", from "The court was very cool and a little damp" to "...that God forgive us, God forgive us!"

Key passage content: Utterson and Enfield see Jekyll at window with "an expression of such abject terror and despair, as froze the very blood." Jekyll's face changes - possibly transforms - and window slams shut. Both men walk away "in silence... pale." Shows duality physically manifesting.

**EXTRACT 5: Chapter 8 - Breaking down the door (HORROR/REVELATION)**
Location: Read from Chapter 8 "The Last Night", the climactic scene where Poole and Utterson break into Jekyll's cabinet.

Key passage content: Poole and Utterson force entry to Jekyll's cabinet. They discover Hyde wearing clothes "far too large for him, clothes of the doctor's bigness" - revealing the truth of Jekyll and Hyde being one person. The "crushed phial" indicates the finality of the situation.

**EXTRACT 6: Chapter 10 - Jekyll's confession: duality (DUALITY/REPRESSION)**
Location: Read from Chapter 10 "Henry Jekyll's Full Statement of the Case", from "I was born in the year 18—to a large fortune" to "...I concealed my pleasures."

Key passage content: Jekyll admits "I was born... to a large fortune, endowed besides with excellent parts" but also "an impatient gaiety of disposition." He "found it hard to reconcile" with his "imperious desire to carry my head high." Result: "I concealed my pleasures" - shows Victorian repression.

**EXTRACT 7: Chapter 10 - The transformation (SCIENCE/HORROR)**
Location: Read from Chapter 10, from "I hesitated long before I put this theory to the test of practice" to "...I felt younger, lighter, happier in body."

Key passage content: Jekyll describes taking the potion: "The most racking pangs succeeded: a grinding in the bones, deadly nausea, and a horror of the spirit." Then: "I came to myself as if out of a great sickness... I felt younger, lighter, happier in body." First transformation complete.

**EXTRACT 8: Chapter 10 - Loss of control (ADDICTION/HORROR)**
Location: Read from Chapter 10, from "I was slowly losing hold of my original and better self" to "...the animal within me licking the chops of memory."

Key passage content: Jekyll loses control: "I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse." Hyde grows "in stature" as Jekyll feeds him. The "animal within me" enjoys recalling Hyde's crimes - "licking the chops of memory."

### Key Scenes for Extract Questions
- **Chapter 1**: "Story of the Door" - Enfield describes Hyde trampling the girl
- **Chapter 2**: "Search for Mr Hyde" - Utterson meets Hyde, describes his appearance
- **Chapter 4**: "The Carew Murder Case" - Hyde's attack on Sir Danvers Carew
- **Chapter 5**: "Incident of the Letter" - Jekyll's strange behaviour, forged letter
- **Chapter 7**: "Incident at the Window" - Jekyll at the window, expression of terror
- **Chapter 8**: "The Last Night" - Poole and Utterson break down the door
- **Chapter 9**: "Dr Lanyon's Narrative" - Witnesses transformation, dies of shock
- **Chapter 10**: "Henry Jekyll's Full Statement" - Jekyll explains everything

### Key Quotations by Theme

**DUALITY OF MAN:**
- "Man is not truly one, but truly two"
- "All human beings... are commingled out of good and evil"
- "I learned to recognise the thorough and primitive duality of man"
- "I was slowly losing hold of my original and better self"
- "both sides of me were in dead earnest"

**REPRESSION:**
- "I concealed my pleasures"
- "I stood already committed to a profound duplicity of life"
- Jekyll's "pleasures" were "undignified" - Victorian propriety
- "morbid sense of shame"
- "Though so profound a double-dealer, I was in no sense a hypocrite"

**APPEARANCE VS REALITY:**
- "The door... was blistered and distained" (back door vs respectable front)
- Hyde as "something troglodytic" - primitive, hidden
- Jekyll's "large, handsome face" vs Hyde's "pale and dwarfish"
- "gave an impression of deformity without any nameable malformation"

**EVIL/SIN:**
- Hyde is "pure evil"
- "Satan's signature upon a face"
- "ape-like fury"
- "particularly wicked-looking"
- "the animal within me licking the chops of memory"
- "the slime of the pit seemed to utter cries and voices"

**SCIENCE VS RELIGION:**
- Jekyll's experiments transgress natural/divine law
- "The drug had no discriminating action; it was neither diabolical nor divine"
- Lanyon calls it "unscientific balderdash"
- Science used to circumvent morality

**SECRECY:**
- Utterson: "If he be Mr Hyde... I shall be Mr Seek"
- "I cannot tell you" - repeated refusals to explain
- The locked cabinet door, the sealed letter
- "my devil had been long caged, he came out roaring"

**VIOLENCE/PRIMITIVE NATURE:**
- Hyde shows callous indifference to others
- "ape-like fury" - animal imagery
- Escalating loss of control throughout novella
- Contrast between Jekyll's restraint and Hyde's impulsivity

### Victorian Context Points
- **Victorian respectability**: Gentlemen must maintain reputation; private vices hidden
- **Duality**: Public virtue vs private sin; common hypocrisy of era
- **Darwin and evolution**: Hyde described as "ape-like" - fear of regression/atavism
- **Gothic literature**: Supernatural, horror, psychological terror
- **London geography**: Respectable West End vs criminal East End; Hyde's Soho
- **Homosexuality**: Coded; male relationships, "blackmail" (then linked to homosexuality)
- **Psychology**: Pre-Freud but exploring unconscious desires, the id
- **Scientific hubris**: Fear of science going too far, playing God

### Character Arcs
- **Jekyll**: Respected scientist → experimenter → increasingly unable to control Hyde → tragic end
- **Hyde**: Small, young → grows stronger with each transformation → dominant
- **Utterson**: Lawyer, rational → detective figure → witness to revelation
- **Lanyon**: Scientist, friend → witnesses transformation → overwhelmed by revelation
`;

const INSPECTOR_CALLS_KNOWLEDGE = `
## AN INSPECTOR CALLS - Text-Specific Knowledge

### Key Scenes for Extract Questions
- **Act 1 Opening**: Birling's speeches about Titanic, war, "community and all that nonsense"
- **Act 1**: Gerald's confession about Daisy Renton/Eva Smith
- **Act 1**: Sheila receives the ring; Eric drinks too much
- **Act 2**: Mrs Birling's interrogation; "Girls of that class"
- **Act 2**: Mrs Birling blames the father of Eva's child
- **Act 3**: Eric revealed as father; stole money
- **Act 3**: Inspector's final warning speech about social consequences
- **Act 3**: Phone call reveals a real inspector is coming

### Key Quotations by Theme

**SOCIAL RESPONSIBILITY:**
- "We are members of one body. We are responsible for each other"
- The Inspector warns of severe consequences if society doesn't change
- Birling: "A man has to mind his own business and look after himself and his own"
- "Public men, Mr Birling, have responsibilities as well as privileges"

**CLASS:**
- Mrs Birling: "Girls of that class—"
- "As if a girl of that sort would ever refuse money!"
- Birling: "I'm a hard-headed, practical man of business"
- Gerald: "We're respectable citizens and not criminals"

**GENDER:**
- Eva/Daisy exploited by every male character
- Gerald kept her as mistress: "I didn't feel about her as she felt about me"
- Eric: "I was in that state when a chap easily turns nasty"
- Mrs Birling's internalised misogyny towards "girls of that class"

**GENERATIONAL CONFLICT:**
- Sheila: "But these girls aren't cheap labour—they're people"
- Eric: "You're not the kind of father a chap could go to when he's in trouble"
- Birling: "The famous younger generation who know it all"
- Sheila and Eric accept responsibility; older generation refuse

**CAPITALISM VS SOCIALISM:**
- Birling: "lower costs and higher prices"
- Birling on community: "nonsense"
- Inspector represents socialist viewpoint
- Play written 1945, set 1912 - Priestley knew what was coming

### 1912 Context (when play is set)
- **Titanic**: Birling calls it "unsinkable, absolutely unsinkable" - dramatic irony
- **WWI approaching**: Birling: "there isn't a chance of war" - dramatic irony
- **Class system rigid**: Working class had few rights; women couldn't vote
- **Labour unrest**: Strikes were common; workers exploited

### 1945 Context (when play was written)
- **End of WWII**: Audiences knew the horrors that followed 1912
- **Welfare State emerging**: NHS created 1948; Priestley supported this
- **Labour government elected**: Clement Attlee defeated Churchill
- **Collective responsibility**: Wartime spirit of community vs returning to old ways

### Character Arcs
- **Birling**: Confident capitalist → exposed → refuses to change
- **Mrs Birling**: Snobbish, superior → most guilty → refuses to accept responsibility
- **Sheila**: Spoilt girl → genuinely remorseful → transformed
- **Eric**: Drunk, immature → confronts guilt → changes
- **Gerald**: Charming → revealed as exploiter → tries to dismiss it all
- **Inspector**: Mysterious, omniscient → moral voice → possibly supernatural
`;

const ROMEO_JULIET_KNOWLEDGE = `
## ROMEO AND JULIET - Text-Specific Knowledge (PUBLIC DOMAIN - Include actual extracts)

### SAMPLE EXTRACTS FOR QUESTIONS (Use these exact texts)

**EXTRACT 1: Prologue (FATE/CONFLICT)**
CHORUS:
Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross'd lovers take their life;
Whose misadventured piteous overthrows
Do with their death bury their parents' strife.

**EXTRACT 2: Act 1 Scene 5 - Romeo sees Juliet (LOVE/LIGHT)**
ROMEO:
O, she doth teach the torches to burn bright!
It seems she hangs upon the cheek of night
Like a rich jewel in an Ethiope's ear;
Beauty too rich for use, for earth too dear!
So shows a snowy dove trooping with crows,
As yonder lady o'er her fellows shows.
The measure done, I'll watch her place of stand,
And, touching hers, make blessed my rude hand.
Did my heart love till now? forswear it, sight!
For I ne'er saw true beauty till this night.

**EXTRACT 3: Act 2 Scene 2 - Balcony scene (LOVE/IDENTITY)**
JULIET:
'Tis but thy name that is my enemy;
Thou art thyself, though not a Montague.
What's Montague? it is nor hand, nor foot,
Nor arm, nor face, nor any other part
Belonging to a man. O, be some other name!
What's in a name? that which we call a rose
By any other name would smell as sweet;
So Romeo would, were he not Romeo call'd,
Retain that dear perfection which he owes
Without that title.

**EXTRACT 4: Act 3 Scene 1 - Mercutio's final speech (CONFLICT/FATE)**
Location: The pivotal scene where Mercutio is wounded while Romeo tries to intervene.

Key passage content: Mercutio's famous "A plague o' both your houses!" curse condemns both families. His dark humour ("ask for me to-morrow, and you shall find me a grave man") shows his wit even in crisis. He blames Romeo: "Why the devil came you between us?" This scene is the turning point - Romeo's attempt at peace leads to tragedy.

**EXTRACT 5: Act 3 Scene 5 - Capulet's rage (PATRIARCHY/CONFLICT)**
CAPULET:
How now, how now, chop-logic! What is this?
'Proud,' and 'I thank you,' and 'I thank you not;'
And yet 'not proud,' mistress minion, you,
Thank me no thankings, nor, proud me no prouds,
But fettle your fine joints 'gainst Thursday next,
To go with Paris to Saint Peter's Church,
Or I will drag thee on a hurdle thither.
Out, you green-sickness carrion! out, you baggage!
You tallow-face!
[...]
Hang thee, young baggage! disobedient wretch!
I tell thee what: get thee to church o' Thursday,
Or never after look me in the face.

**EXTRACT 6: Act 5 Scene 3 - The tragic ending (LOVE/FATE)**
Location: The tomb scene where Juliet awakens to find Romeo.

Key passage content: Juliet discovers Romeo has taken poison. Her response shows the depth of their love - she wishes to join him. The language of "O happy dagger" shows how love and death intertwine in the play. The tragic ending fulfills the "star-cross'd" prophecy from the Prologue.

### Key Scenes Summary
- **Prologue**: Sets up fate and conflict
- **Act 1 Scene 5**: Romeo sees Juliet; love at first sight
- **Act 2 Scene 2**: Balcony scene; declarations of love
- **Act 3 Scene 1**: Deaths of Mercutio and Tybalt
- **Act 3 Scene 5**: Capulet's rage at Juliet
- **Act 5 Scene 3**: The lovers' tragic end

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
- "Ask for me tomorrow, and you shall find me a grave man" (3.1) - Mercutio

**LIGHT AND DARK:**
- "O, she doth teach the torches to burn bright!" (1.5)
- "It is the east, and Juliet is the sun" (2.2)
- "Come, gentle night... Give me my Romeo" (3.2)
- "More light and light, more dark and dark our woes" (3.5)

**YOUTH VS AGE:**
- "My child is yet a stranger in the world" (1.2) - Capulet initially
- "Hang thee, young baggage! Disobedient wretch!" (3.5) - Capulet later
- Lord Capulet: "She is the hopeful lady of my earth" → "I would the fool were married to her grave"

**FATE AND TRAGEDY:**
- "These violent delights have violent ends" (2.6) - Friar Lawrence's warning
- The lovers' tragic fate fulfills the Prologue's prophecy
- "Death lies on her like an untimely frost upon the sweetest flower" (4.5) - imagery of loss

### Elizabethan Context Points
- **Patriarchy**: Fathers owned daughters; arranged marriages normal
- **Honour culture**: Family reputation paramount; revenge expected
- **Age of marriage**: Juliet at 13 was marriageable age
- **Italian setting**: Verona associated with passion, violence, Catholicism
- **Courtly love tradition**: Idealised, unattainable love (Romeo with Rosaline initially)
- **Queen Elizabeth unmarried**: Debates about marriage and female autonomy

### Character Arcs
- **Romeo**: Melancholy lover (Rosaline) → passionate lover → impulsive actions → tragic fate
- **Juliet**: Obedient daughter → defiant lover → courageous (takes potion) → tragic fate
- **Mercutio**: Witty, cynical about love → cursing both houses in his final scene
- **Tybalt**: "King of Cats" → aggressive, honour-obsessed → confrontation with Romeo
- **The Nurse**: Bawdy, maternal → betrays Juliet by advising Paris marriage
- **Friar Lawrence**: Well-meaning → his plans fail → moral spokesman at end
`;

const POWER_CONFLICT_ANTHOLOGY = `
## AQA POWER AND CONFLICT POETRY ANTHOLOGY

### THE 15 POEMS - Overview

**CLUSTER 1: POWER OF HUMANS (Pride, Control, Authority)**
1. Ozymandias - Percy Bysshe Shelley
2. My Last Duchess - Robert Browning
3. Checking Out Me History - John Agard

**CLUSTER 2: POWER OF NATURE**
4. Storm on the Island - Seamus Heaney
5. The Prelude (extract) - William Wordsworth

**CLUSTER 3: EFFECTS OF CONFLICT**
6. Exposure - Wilfred Owen
7. Bayonet Charge - Ted Hughes
8. Remains - Simon Armitage
9. War Photographer - Carol Ann Duffy
10. Poppies - Jane Weir
11. Kamikaze - Beatrice Garland
12. The Charge of the Light Brigade - Alfred Lord Tennyson

**CLUSTER 4: POWER OF MEMORY/IDENTITY**
13. London - William Blake
14. Tissue - Imtiaz Dharker
15. The Emigrée - Carol Rumens

---

### POEM 1: OZYMANDIAS - Percy Bysshe Shelley (1818)

**Full Text (Public Domain):**
I met a traveller from an antique land,
Who said—"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."

**Key Themes:** Transience of power, hubris, nature's triumph over human achievement
**Form:** Sonnet (14 lines) but irregular - reflects the broken statue
**Key Techniques:**
- Irony: "Look on my Works... despair!" - nothing remains
- Sibilance: "boundless and bare... sands stretch" - emphasizes emptiness
- Third-hand narrative: traveller → narrator → reader - distances us from power
- Juxtaposition: "King of Kings" vs "colossal Wreck"

**Context:** Written during era of British Empire expansion; Shelley was a radical who opposed tyranny

---

### POEM 2: LONDON - William Blake (1794)

**Full Text (Public Domain):**
I wander thro' each charter'd street,
Near where the charter'd Thames does flow.
And mark in every face I meet
Marks of weakness, marks of woe.

In every cry of every Man,
In every Infants cry of fear,
In every voice: in every ban,
The mind-forg'd manacles I hear

How the Chimney-sweepers cry
Every blackning Church appalls,
And the hapless Soldiers sigh
Runs in blood down Palace walls

But most thro' midnight streets I hear
How the youthful Harlots curse
Blasts the new-born Infants tear
And blights with plagues the Marriage hearse

**Key Themes:** Oppression, corruption of institutions, loss of innocence, social injustice
**Form:** Four quatrains, ABAB rhyme - regularity reflects the trapped, repetitive suffering
**Key Techniques:**
- Repetition: "every" (x10), "charter'd" (x2), "marks" (x3) - universality of suffering
- "Mind-forg'd manacles" - metaphor for psychological oppression
- Oxymoron: "Marriage hearse" - corruption of institution
- Synesthesia: "Soldiers sigh / Runs in blood" - sound becomes visual

**Context:** Written during Industrial Revolution; Blake was a visionary who opposed institutionalized oppression

---

### POEM 3: THE PRELUDE (Extract) - William Wordsworth (1850)

**Summary (extract about stealing a boat):**
The speaker takes a boat without permission one summer evening. As he rows, a huge mountain seems to rise up and pursue him. He returns the boat in fear and is haunted by the experience for days afterward.

**Key Themes:** Power of nature, sublime (terror and awe), guilt, nature as moral teacher
**Form:** Blank verse (unrhymed iambic pentameter) - reflects natural speech and thought
**Key Techniques:**
- Personification: The mountain "Strode after me" - nature as living force
- Shift in tone: pleasure → terror → troubled thoughts
- "Huge peak, black and huge" - repetition emphasizes overwhelming scale
- First person: intimate, personal account of transformative experience

**Context:** Romantic poet who believed nature could teach moral lessons; wrote about childhood experiences that shaped him

---

### POEM 4: MY LAST DUCHESS - Robert Browning (1842)

**Summary:**
The Duke of Ferrara shows a visitor a portrait of his late wife, revealing through his monologue his possessive nature and suggesting he had her killed for being too friendly and joyful.

**Key Themes:** Power and control, jealousy, objectification of women, pride
**Form:** Dramatic monologue, rhyming couplets - control through form mirrors Duke's desire for control
**Key Techniques:**
- Enjambment vs end-stopping: Duke struggles to control his anger
- "I gave commands; / Then all smiles stopped" - chilling understatement
- Possessive pronouns: "my last Duchess" - ownership
- Art imagery: values portrait over living woman

**Context:** Based on Alfonso II, Duke of Ferrara (16th century); Browning explores Victorian concerns about patriarchy and male power

---

### POEM 5: THE CHARGE OF THE LIGHT BRIGADE - Alfred Lord Tennyson (1854)

**Summary:**
Commemorates the disastrous cavalry charge during the Crimean War where 600 soldiers rode into a valley surrounded by enemy artillery due to a miscommunicated order.

**Key Themes:** Heroism, duty vs folly, the cost of conflict, honoring the fallen
**Form:** Dactylic rhythm mimics horses' hooves; varying stanza lengths reflect chaos
**Key Techniques:**
- Repetition: "Into the valley" (x3), "Cannon to right/left/front" - surrounded
- "Theirs not to reason why, / Theirs but to do and die" - duty over questioning
- Anaphora: "Cannon..." emphasizes overwhelming odds
- Noble language: "Glory" "Honour" - elevates soldiers

**Context:** Written weeks after the event; Tennyson was Poet Laureate; commemorative but also questions military command

---

### POEM 6: EXPOSURE - Wilfred Owen (1917-18)

**Summary:**
Soldiers wait in freezing trenches, suffering more from the cold than from enemy action. The poem questions what they are fighting for as nature becomes the true enemy.

**Key Themes:** Futility of conflict, suffering, nature as enemy, loss of faith
**Form:** Eight stanzas, pararhyme (half-rhyme) - reflects the incompleteness, wrongness of war
**Key Techniques:**
- Pararhyme: "knive us/nervous" - unsettling, unresolved
- Personification: "merciless iced east winds that knive us"
- Rhetorical questions: "What are we doing here?"
- Ellipsis at stanza ends: "But nothing happens" - anticlimax, futility

**Context:** Owen served in WWI trenches; wrote to show "the pity of war"; challenges glorified views of conflict

---

### POEM 7: STORM ON THE ISLAND - Seamus Heaney (1966)

**Summary:**
An island community prepares for and experiences a violent storm. Despite their preparations, nature proves unpredictably powerful.

**Key Themes:** Power of nature, community resilience, fear of the unknown
**Form:** Blank verse, single stanza - contained like the island community
**Key Techniques:**
- Collective "we" - community voice
- "Spits like a tame cat / Turned savage" - simile shows nature's unpredictability
- "It is a huge nothing that we fear" - paradox of fearing absence
- Military language: "bombarded," "strafes" - links to political conflict (Northern Ireland)

**Context:** Heaney from Northern Ireland; "Stormont" hidden in title suggests political allegory

---

### POEM 8: BAYONET CHARGE - Ted Hughes (1957)

**Summary:**
A soldier runs across no-man's-land in a charge, his patriotic reasons dissolving into raw fear and survival instinct.

**Key Themes:** Reality vs patriotic ideals, terror, dehumanization, instinct
**Form:** Three stanzas, irregular rhythm - reflects chaos of battle
**Key Techniques:**
- In medias res: "Suddenly he awoke" - thrown into action
- "King, honour, human dignity, etcetera" - "etcetera" dismisses abstract values
- Natural imagery: hare symbolizes terrified innocence
- Present tense: immediacy, no time for reflection

**Context:** Hughes's father survived WWI; Hughes explores psychological impact of conflict

---

### POEM 9: REMAINS - Simon Armitage (2008)

**Summary:**
A soldier recalls an incident where he and others responded to a looter. The memory haunts him, causing PTSD symptoms.

**Key Themes:** Guilt, PTSD, moral ambiguity, lasting psychological damage
**Form:** Free verse, colloquial language - authentic soldier's voice
**Key Techniques:**
- Repetition: "probably armed, possibly not" - uncertainty haunts him
- Colloquialisms: "legs it," "tosses his guts" - authentic voice
- "His bloody life in my bloody hands" - double meaning of "bloody"
- Present tense ending: trauma is ongoing, not past

**Context:** From "The Not Dead" project about veterans; Armitage interviewed soldiers

---

### POEM 10: POPPIES - Jane Weir (2009)

**Summary:**
A mother describes her son leaving for military service and her grief. Poppies symbolize both remembrance and her loss.

**Key Themes:** Mother's perspective on conflict, loss, memory, domestic vs military
**Form:** Four irregular stanzas - reflects fragmented emotional state
**Key Techniques:**
- Domestic imagery: "smoothed down your shirt's / upturned collar," sewing
- Sensory details: texture, touch emphasize physical connection she loses
- "I wanted to graze my nose across the tip of your nose" - intimate, childlike
- Poppies: symbol of remembrance and sacrifice

**Context:** Written for war memorial; gives voice to those left behind

---

### POEM 11: WAR PHOTOGRAPHER - Carol Ann Duffy (1985)

**Summary:**
A war photographer develops his photos in England, reflecting on the contrast between the conflict zones he photographs and comfortable England.

**Key Themes:** Distance from conflict, guilt of witness, media and suffering, memory
**Form:** Four regular stanzas - control vs emotional chaos
**Key Techniques:**
- Religious imagery: "a priest preparing to intone a Mass" - solemn ritual
- Contrast: "Rural England" vs "running children in a nightmare heat"
- "A hundred agonies in black and white" - photos reduce suffering
- "they do not care" - criticism of public indifference

**Context:** Duffy knew war photographer Don McCullin; poem questions our response to images of suffering

---

### POEM 12: TISSUE - Imtiaz Dharker (2006)

**Summary:**
Meditates on paper - maps, religious texts, receipts, grocery lists - and how these thin layers hold our lives, yet can "let the daylight through."

**Key Themes:** Fragility of human constructs, impermanence, transcendence, power of paper/records
**Form:** Ten quatrains, one final single line - fragile structure like tissue
**Key Techniques:**
- Extended metaphor: paper = human records and structures
- Light imagery: "let the light / shine through" - transcendence
- Enjambment throughout: ideas flow like paper's fragility
- Final isolated line: emphasizes human vulnerability

**Context:** Dharker born in Pakistan, raised in Glasgow; explores identity, borders, belonging

---

### POEM 13: THE EMIGRÉE - Carol Rumens (1993)

**Summary:**
Speaker remembers a homeland she left as a child, preserving idealized memories despite negative reports about the country.

**Key Themes:** Memory, exile, identity, power of nostalgia, conflict between reality and memory
**Form:** Three stanzas, unrhymed - freedom of memory vs constraint of exile
**Key Techniques:**
- Personification: city is "like a child," "takes me dancing"
- Light imagery: "sunlight," "white streets" - idealized, pure memory
- "My city hides behind me" - memory protects her identity
- Contrast: "they" (hostile) vs "my" (possessed memory)

**Context:** Could represent any displaced person; "emigrée" (feminine) emphasizes female perspective

---

### POEM 14: KAMIKAZE - Beatrice Garland (2013)

**Summary:**
A Japanese pilot turns back from a kamikaze mission after seeing the beauty of nature, but his family then shun him for his perceived dishonor.

**Key Themes:** Honor vs survival, nature's power to change perspective, family shame, silence
**Form:** Seven stanzas, mix of third person and italicized direct speech - fragmented family story
**Key Techniques:**
- Nature imagery: sea, fish, fish-loss - beauty that saves him
- Shift to daughter's voice: "my mother never spoke again" - family's rejection
- "he must have wondered... was no longer the father we knew" - identity lost either way
- Question of who was "right" left open

**Context:** Kamikaze pilots were honored in Japan; choosing life brought shame - explores cultural conflict

---

### POEM 15: CHECKING OUT ME HISTORY - John Agard (1996)

**Summary:**
Speaker contrasts the British history taught in school with the Caribbean and Black history he was denied, asserting his identity.

**Key Themes:** Colonial education, identity, reclaiming history, power of knowledge
**Form:** Alternating stanzas (standard English vs Caribbean dialect) - two histories side by side
**Key Techniques:**
- Phonetic dialect spelling: "Dem tell me" - authentic voice, resistance
- Contrast: nursery rhyme figures vs real historical heroes
- Repetition: "Dem tell me" - indoctrination
- Light imagery for Caribbean heroes: "a beacon," "fire-Loss woman"
- "Carving out me identity" - active self-creation

**Context:** Agard born in Guyana, moved to UK; writes about post-colonial identity and experience

---

### COMMON COMPARISON PAIRS

**Power of Humans:**
- Ozymandias + My Last Duchess (pride, control, male power)
- My Last Duchess + Checking Out Me History (control, silencing voices)

**Power of Nature:**
- Storm on the Island + The Prelude (nature's overwhelming power)
- Storm on the Island + Exposure (nature as threat)

**Effects of Conflict:**
- Exposure + Bayonet Charge (WWI, reality of combat)
- Remains + War Photographer (PTSD, aftermath, witness guilt)
- Poppies + Kamikaze (family perspective, loss)
- Charge of Light Brigade + Bayonet Charge (heroism vs reality)

**Memory and Identity:**
- The Emigrée + Kamikaze (memory, belonging, family)
- London + Checking Out Me History (oppression, voice of the marginalized)
- Tissue + Ozymandias (impermanence, fragility of human achievement)

---

### THEMATIC GROUPINGS FOR QUESTIONS

**THE REALITY OF CONFLICT:**
Exposure, Bayonet Charge, Remains - show psychological and physical reality

**AFTERMATH AND MEMORY:**
Remains, Poppies, War Photographer, Kamikaze - lasting effects on individuals

**ABUSE OF POWER:**
Ozymandias, My Last Duchess, London, Checking Out Me History - human cruelty and control

**NATURE'S POWER:**
Storm on the Island, The Prelude, Exposure - nature as force beyond human control

**IDENTITY AND BELONGING:**
The Emigrée, Checking Out Me History, Kamikaze, Tissue - who we are and where we belong
`;

const UNSEEN_POETRY_GUIDANCE = `
## UNSEEN POETRY - Generation Guidelines

### EXAM STRUCTURE (AQA Paper 2, Section C)
- **Question 1 (24 marks)**: Single poem analysis - "How does the poet present [theme]?"
- **Question 2 (8 marks)**: Comparison with second unseen poem - focus on methods only

### SUITABLE POEM CHARACTERISTICS
For GCSE-level unseen poetry, poems should be:
- **Accessible**: Clear enough for first reading comprehension
- **Rich in technique**: Offer opportunities for language/form/structure analysis
- **Thematically resonant**: Address universal themes students can engage with
- **Appropriate length**: 12-30 lines typically
- **Age-appropriate**: Suitable for 14-16 year olds

### COMMON UNSEEN POETRY THEMES
1. **Nature and seasons** - change, beauty, power
2. **Memory and nostalgia** - childhood, loss, time passing
3. **Relationships** - love, family, friendship, loss
4. **Identity and self** - growing up, belonging, isolation
5. **Place and home** - belonging, displacement, landscape
6. **Time and mortality** - aging, death, legacy
7. **Conflict and struggle** - internal/external battles
8. **Joy and celebration** - moments of happiness, beauty

### SAMPLE PUBLIC DOMAIN POEMS FOR UNSEEN QUESTIONS

**POEM A: "The Lake Isle of Innisfree" - W.B. Yeats (1890)**
Theme: Escape, nature, peace

I will arise and go now, and go to Innisfree,
And a small cabin build there, of clay and wattles made;
Nine bean-rows will I have there, a hive for the honey-bee,
And live alone in the bee-loud glade.

And I shall have some peace there, for peace comes dropping slow,
Dropping from the veils of the morning to where the cricket sings;
There midnight's all a glimmer, and noon a purple glow,
And evening full of the linnet's wings.

I will arise and go now, for always night and day
I hear lake water lapping with low sounds by the shore;
While I stand on the roadway, or on the pavements grey,
I hear it in the deep heart's core.

**Techniques**: Repetition ("I will arise"), sensory imagery, contrast (city vs nature), sound patterns

---

**POEM B: "I Wandered Lonely as a Cloud" - William Wordsworth (1804)**
Theme: Nature, memory, joy

I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

**Techniques**: Simile ("lonely as a cloud"), personification, hyperbole, natural imagery

---

**POEM C: "Invictus" - William Ernest Henley (1875)**
Theme: Resilience, determination, inner strength

Out of the night that covers me,
Black as the pit from pole to pole,
I thank whatever gods may be
For my unconquerable soul.

In the fell clutch of circumstance
I have not winced nor cried aloud.
Under the bludgeonings of chance
My head is bloody, but unbowed.

Beyond this place of wrath and tears
Looms but the Horror of the shade,
And yet the menace of the years
Finds and shall find me unafraid.

It matters not how strait the gate,
How charged with punishments the scroll,
I am the master of my fate,
I am the captain of my soul.

**Techniques**: Extended metaphor (darkness/night), defiant tone, rhyme scheme, powerful final couplet

---

**POEM D: "The Road Not Taken" - Robert Frost (1916)**
Theme: Choices, individuality, reflection

Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.

**Techniques**: Extended metaphor (roads = life choices), conversational tone, irony, ambiguous ending

---

**POEM E: "Sonnet 18" - William Shakespeare (1609)**
Theme: Beauty, immortality through art, love

Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.

**Techniques**: Rhetorical question, extended comparison, personification, sonnet form, volta at line 9

---

### QUESTION FORMATS FOR UNSEEN POETRY

**Single Poem (24 marks) - Example Questions:**
- "In 'The Lake Isle of Innisfree', how does the poet present the speaker's feelings about nature?"
- "In 'Invictus', how does the poet present ideas about strength and resilience?"
- "How does the poet present memory in 'I Wandered Lonely as a Cloud'?"

**Comparison (8 marks) - Example Questions:**
- "In both poems, the speakers describe their feelings about nature. What are the similarities and/or differences between the ways the poets present these feelings?"
- "Both poems are about making choices. Compare how the poets present ideas about choice in the two poems."

### MARK SCHEME FOCUS

**For 24-mark question (AO1 + AO2):**
- Personal response to poem
- Understanding of meaning and ideas
- Analysis of language, form, structure
- Use of subject terminology
- Textual references to support points

**For 8-mark comparison (AO2 only):**
- Comparison of methods ONLY
- How poets use language, form, structure
- Similarities AND/OR differences
- No need for personal response or context
`;

const AQA_GCSE_ENG_LIT_QUESTION_FORMATS = `
## Authentic AQA GCSE English Literature Question Formats

### Shakespeare Extract Question (30+4 marks)
Format: "Starting with this [extract/speech/conversation], [explore how/how does] Shakespeare present [theme/character]?"
**Structure:**
- Extract provided (typically 30-40 lines from a specific Act and Scene)
- "Write about:" bullet points guide response
- Must cover both extract AND whole play

**ACTUAL PAST PAPER QUESTIONS (Macbeth):**
- "Starting with this conversation, explore how Shakespeare presents the effects of guilt in Macbeth." (2017)
- "Starting with this speech, explore how far Shakespeare presents Macbeth as a violent character." (2018)
- "Starting with this moment in the play, explore how Shakespeare presents the attitudes of Macbeth and Banquo towards the supernatural." (2019)
- "'Lady Macbeth is a female character who changes during the play.' Starting with this moment in the play, explore how far you agree with this view." (2021)
- "Starting with this conversation, explore how far Shakespeare presents Macbeth as a male character who changes during the play." (2023)
- "Starting with this speech, explore how Shakespeare presents Macbeth's fears." (2024)

### 19th-Century Novel Extract Question (30 marks)
Format: "Starting with this extract, how does [author] present [theme/character]?"
**Structure:**
- Extract provided
- Must analyse extract AND link to whole novel
- No AO4 marks on this section

**Examples:**
- "Starting with this extract, how does Dickens present Scrooge's attitude to Christmas?"
- "Starting with this extract, how does Stevenson present Hyde as a frightening character?"

### Modern Text Essay Question (30+4 marks)
Format: "How does [author] present [theme/character]?" or "How far does [author] present...?"
**Structure:**
- Two question choices (no extract)
- "Write about:" bullet points
- Must cover whole text

**Examples:**
- "How does Priestley present ideas about social responsibility in An Inspector Calls?"
- "How far does Priestley present Eric as a character who changes during the play?"
- "How does Priestley use Mr Birling to present his ideas about responsibility?"

### Poetry Anthology Comparison (30 marks)
Format: "Compare how poets present [theme] in '[named poem]' and one other poem from your anthology."
**Structure:**
- Named poem printed
- Student chooses comparison poem
- Must compare methods and meanings

### Unseen Poetry Single Poem (24 marks)
Format: "In '[poem title]', how does the poet present [theme/idea]?"
**Structure:**
- Unfamiliar poem provided
- Focus on language, form, structure
- AO1 and AO2 only

### Unseen Poetry Comparison (8 marks)
Format: "In both '[poem 1]' and '[poem 2]', the poets describe [theme]. What are the similarities and/or differences between the ways the poets present [theme]?"
**Structure:**
- Second unseen poem provided
- Compare methods only (AO2)
- Must identify similarities AND/OR differences
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

  // Poetry anthology
  if (topicLower.includes('power and conflict') || topicLower.includes('anthology')) {
    return POWER_CONFLICT_ANTHOLOGY;
  }

  // Unseen poetry
  if (topicLower.includes('unseen')) {
    return UNSEEN_POETRY_GUIDANCE;
  }

  // General poetry (could be anthology or unseen)
  if (topicLower.includes('poetry')) {
    return POWER_CONFLICT_ANTHOLOGY + '\n\n' + UNSEEN_POETRY_GUIDANCE;
  }

  // Return empty string if no specific knowledge available
  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEEnglishLiteratureSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
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

  return `You are an expert AQA GCSE English Literature examiner creating exam-style questions.

${AQA_GCSE_ENG_LIT_ASSESSMENT_OBJECTIVES}

${AQA_GCSE_ENG_LIT_MARK_SCHEME}

${AQA_GCSE_ENG_LIT_QUESTION_FORMATS}
${textKnowledgeSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic AQA Style**: Match real AQA paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Focus on straightforward analysis, 8-mark style questions
   - Medium: 30-mark essay questions requiring whole text knowledge
   - Hard: Complex thematic analysis requiring conceptualised response

## CRITICAL: Extract Handling Rules

### FOR SHAKESPEARE (Macbeth, Romeo and Juliet) - PUBLIC DOMAIN:
- **INCLUDE THE ACTUAL EXTRACT TEXT** in the question
- Use one of the sample extracts provided in the text knowledge above
- Format the question exactly like AQA papers with the extract displayed, then the question below
- Example format:
  "Read the following extract from Act 1 Scene 5..."
  [ACTUAL EXTRACT TEXT HERE]
  "Starting with this extract, how does Shakespeare present..."

### FOR OTHER TEXTS (Christmas Carol, Jekyll & Hyde, Inspector Calls) - COPYRIGHTED:
- Provide CLEAR LOCATION REFERENCES so students can look up the passage
- For A Christmas Carol: "Read from Stave 3, from 'Spirit,' said Scrooge...' to '...God bless us, every one!'"
- For Jekyll & Hyde: "Read from Chapter 10, from 'I was the first that could plod...' to '...I was slowly losing hold'"
- For An Inspector Calls: "Read from Act 2, from the stage direction 'Mrs Birling enters...' to 'Girls of that class'"
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

export function getAQAGCSEEnglishLiteratureQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const textKnowledge = getTextSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create an 8-mark unseen poetry comparison style question OR a focused analysis question.

**Question Types:**
- "How does the writer present [specific aspect]?" focusing on a particular moment/technique
- Comparison question focusing on methods (AO2)

**8-Mark Level Descriptors:**
- Level 4 (7-8): Exploratory comparison; convincing analysis
- Level 3 (5-6): Thoughtful comparison; developed analysis
- Level 2 (3-4): Some comparison; some analysis
- Level 1 (1-2): Simple links; limited analysis

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create a 30-mark essay question (with or without extract).

**Question Types:**
For texts with extracts (Shakespeare/19th-century novel):
- "Starting with this extract, how does [author] present [theme/character]?"
- Describe an appropriate extract context (DO NOT reproduce copyrighted text)

For modern texts (no extract):
- "How does [author] present [theme/idea]?"
- "How far does [author] present [character] as [quality]?"

Include "Write about:" bullet points:
• [Author]'s ideas about [theme]
• How [author] presents these ideas through [methods]

**30-Mark Level Descriptors:**
- Level 6 (26-30): Critical, exploratory, conceptualised response
- Level 5 (21-25): Thoughtful, developed consideration
- Level 4 (16-20): Clear, explained understanding
- Level 3 (11-15): Some understanding demonstrated
- Level 2 (6-10): Supported response with references
- Level 1 (1-5): Simple, limited comments

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a 34-mark question (30 marks + 4 AO4) requiring sophisticated analysis.

**Question Types:**
- "Starting with this extract, how does [author] present [complex theme]?"
- "How far do you agree that [interpretation]?" (requires evaluation)
- Questions requiring engagement with multiple perspectives or critical interpretations

Include "Write about:" bullet points guiding towards:
• Complex thematic understanding
• Sophisticated analysis of writer's methods
• Contextual significance
• Alternative interpretations

**34-Mark Requirements:**
- 30 marks for content (AO1, AO2, AO3)
- 4 marks for written accuracy (AO4)

**Level 6 Response Characteristics (26-30 + 4):**
- Critical, exploratory, conceptualised response
- Fine-grained, insightful analysis of methods
- Integrated exploration of context
- Judicious use of terminology and references
- Sophisticated written expression

Marks: ${markRange.min}-${markRange.max}`
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

  return `Generate an AQA GCSE English Literature question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${textKnowledgePrompt}
IMPORTANT - EXTRACT RULES:
- For SHAKESPEARE: Include the ACTUAL EXTRACT TEXT from the sample extracts provided above
- For OTHER TEXTS: Provide clear location references (Stave/Chapter/Act) so students can look it up
- Include specific "Write about:" bullet points as AQA does
- Model answer should demonstrate the target level's characteristics
- Model answer MUST include specific, accurate quotations from the text

Return valid JSON with PROPER LEVEL DESCRIPTOR mark scheme:
{
  "content": "question text with extract context if applicable",
  "marks": number,
  "solution": "model answer at appropriate level with embedded quotations",
  "markScheme": [
    "Level 6 (26-30 marks): Critical, exploratory, conceptualised response. Judicious use of precise references. Sophisticated analysis of writer's methods. Compelling exploration of context. Perceptive understanding of different interpretations.",
    "Level 5 (21-25 marks): Thoughtful, developed response. Well-chosen references. Thoughtful analysis of writer's methods. Clear understanding of context. Thoughtful consideration of different interpretations.",
    "Level 4 (16-20 marks): Clear, explained response. Effective references. Clear analysis of writer's methods. Understanding of context. Clear awareness of interpretations.",
    "Level 3 (11-15 marks): Some understanding shown. References support range of points. Explained/commented analysis. Some awareness of context.",
    "Level 2 (6-10 marks): Supported response. References support comments. Some awareness of methods. Some awareness of context.",
    "Level 1 (1-5 marks): Simple, limited comments. Simple reference to details. Simple identification of method.",
    "Indicative content (not exhaustive):",
    "- Analysis of [specific theme/character] through key quotations",
    "- Writer's use of [specific techniques: imagery, structure, language]",
    "- Contextual significance of [historical/social factors]",
    "- Alternative interpretations of [aspect of text]"
  ]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 8, max: 8 };
    case 'medium':
      return { min: 30, max: 30 };
    case 'hard':
      return { min: 34, max: 34 };
  }
}
