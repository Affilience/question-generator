/**
 * English Literature Extract Database
 * Real extracts from GCSE set texts, tagged by theme/character for question generation
 *
 * All Shakespeare and 19th-century texts are public domain.
 * An Inspector Calls extracts are kept brief for educational fair dealing.
 */

export interface LiteraryExtract {
  id: string;
  text: string;                    // The name of the literary work
  author: string;
  location: string;                // Act/Scene or Chapter/Stave
  extract: string;                 // The actual passage
  themes: string[];                // Themes this extract relates to
  characters: string[];            // Characters featured/relevant
  techniques: string[];            // Literary techniques present
  contextNote?: string;            // Brief context for the extract
}

// ============================================
// MACBETH - William Shakespeare
// ============================================

export const macbethExtracts: LiteraryExtract[] = [
  {
    id: 'macbeth-dagger-soliloquy',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 2, Scene 1',
    extract: `Is this a dagger which I see before me,
The handle toward my hand? Come, let me clutch thee.
I have thee not, and yet I see thee still.
Art thou not, fatal vision, sensible
To feeling as to sight? or art thou but
A dagger of the mind, a false creation,
Proceeding from the heat-oppressed brain?
I see thee yet, in form as palpable
As this which now I draw.
Thou marshall'st me the way that I was going;
And such an instrument I was to use.
Mine eyes are made the fools o' the other senses,
Or else worth all the rest; I see thee still,
And on thy blade and dudgeon gouts of blood,
Which was not so before.`,
    themes: ['Ambition and its consequences', 'The supernatural and witchcraft', 'Guilt and conscience', 'Appearance vs reality'],
    characters: ['Macbeth'],
    techniques: ['Soliloquy', 'Rhetorical questions', 'Imagery', 'Personification'],
    contextNote: 'Macbeth hallucinates a dagger leading him to Duncan\'s chamber, moments before the murder.'
  },
  {
    id: 'macbeth-tomorrow-soliloquy',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 5, Scene 5',
    extract: `Tomorrow, and tomorrow, and tomorrow,
Creeps in this petty pace from day to day
To the last syllable of recorded time,
And all our yesterdays have lighted fools
The way to dusty death. Out, out, brief candle!
Life's but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.`,
    themes: ['Death and mortality', 'Guilt and conscience', 'Macbeth as a tragic hero', 'The natural order and chaos'],
    characters: ['Macbeth'],
    techniques: ['Soliloquy', 'Metaphor', 'Repetition', 'Nihilism'],
    contextNote: 'Macbeth reflects on the meaninglessness of life after learning of Lady Macbeth\'s death.'
  },
  {
    id: 'macbeth-unsex-me',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 5',
    extract: `Come, you spirits
That tend on mortal thoughts, unsex me here,
And fill me from the crown to the toe top-full
Of direst cruelty! make thick my blood;
Stop up the access and passage to remorse,
That no compunctious visitings of nature
Shake my fell purpose, nor keep peace between
The effect and it! Come to my woman's breasts,
And take my milk for gall, you murdering ministers,
Wherever in your sightless substances
You wait on nature's mischief!`,
    themes: ['Masculinity and gender roles', 'The supernatural and witchcraft', 'Ambition and its consequences', 'Violence and cruelty'],
    characters: ['Lady Macbeth'],
    techniques: ['Invocation', 'Imperative verbs', 'Dark imagery', 'Soliloquy'],
    contextNote: 'Lady Macbeth calls on evil spirits to remove her femininity so she can help murder Duncan.'
  },
  {
    id: 'macbeth-out-damned-spot',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 5, Scene 1',
    extract: `Out, damned spot! out, I say!—One: two: why,
then, 'tis time to do't.—Hell is murky!—Fie, my
lord, fie! a soldier, and afeard? What need we
fear who knows it, when none can call our power to
account?—Yet who would have thought the old man
to have had so much blood in him.
...
Here's the smell of the blood still: all the
perfumes of Arabia will not sweeten this little
hand. Oh, oh, oh!`,
    themes: ['Guilt and conscience', 'Sleep and sleeplessness', 'Blood imagery', 'Lady Macbeth\'s character arc'],
    characters: ['Lady Macbeth'],
    techniques: ['Prose (showing mental breakdown)', 'Fragmented speech', 'Imagery', 'Dramatic irony'],
    contextNote: 'Lady Macbeth sleepwalks, obsessively trying to wash imaginary blood from her hands.'
  },
  {
    id: 'macbeth-witches-opening',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 1',
    extract: `First Witch: When shall we three meet again
In thunder, lightning, or in rain?

Second Witch: When the hurlyburly's done,
When the battle's lost and won.

Third Witch: That will be ere the set of sun.

First Witch: Where the place?

Second Witch: Upon the heath.

Third Witch: There to meet with Macbeth.

All: Fair is foul, and foul is fair:
Hover through the fog and filthy air.`,
    themes: ['The supernatural and witchcraft', 'Appearance vs reality', 'The natural order and chaos', 'The witches\' influence'],
    characters: ['The Witches'],
    techniques: ['Rhyming couplets', 'Paradox', 'Pathetic fallacy', 'Chanting rhythm'],
    contextNote: 'The play opens with the witches planning to meet Macbeth, establishing the supernatural atmosphere.'
  },
  {
    id: 'macbeth-fair-is-foul',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 3',
    extract: `So foul and fair a day I have not seen.
...
All hail, Macbeth! hail to thee, thane of Glamis!
All hail, Macbeth, hail to thee, thane of Cawdor!
All hail, Macbeth, thou shalt be king hereafter!
...
If good, why do I yield to that suggestion
Whose horrid image doth unfix my hair
And make my seated heart knock at my ribs,
Against the use of nature? Present fears
Are less than horrible imaginings:
My thought, whose murder yet is but fantastical,
Shakes so my single state of man that function
Is smother'd in surmise, and nothing is
But what is not.`,
    themes: ['The supernatural and witchcraft', 'Ambition and its consequences', 'Appearance vs reality', 'The witches\' influence'],
    characters: ['Macbeth', 'The Witches'],
    techniques: ['Aside', 'Dramatic irony', 'Paradox', 'Internal conflict'],
    contextNote: 'Macbeth meets the witches and first contemplates murder after hearing their prophecies.'
  },
  {
    id: 'macbeth-banquo-ghost',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 4',
    extract: `Avaunt! and quit my sight! let the earth hide thee!
Thy bones are marrowless, thy blood is cold;
Thou hast no speculation in those eyes
Which thou dost glare with!
...
Prithee, see there! behold! look! lo!
how say you?
Why, what care I? If thou canst nod, speak too.
If charnel-houses and our graves must send
Those that we bury back, our monuments
Shall be the maws of kites.`,
    themes: ['Guilt and conscience', 'The supernatural and witchcraft', 'Banquo and loyalty', 'Appearance vs reality'],
    characters: ['Macbeth', 'Banquo (ghost)'],
    techniques: ['Dramatic irony', 'Imperative verbs', 'Public breakdown', 'Supernatural imagery'],
    contextNote: 'At the banquet, Macbeth sees Banquo\'s ghost and publicly unravels, nearly revealing his guilt.'
  },
  {
    id: 'macbeth-full-of-scorpions',
    text: 'Macbeth',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 2',
    extract: `We have scotch'd the snake, not kill'd it:
She'll close and be herself, whilst our poor malice
Remains in danger of her former tooth.
But let the frame of things disjoint, both the
worlds suffer,
Ere we will eat our meal in fear and sleep
In the affliction of these terrible dreams
That shake us nightly: better be with the dead,
Whom we, to gain our peace, have sent to peace,
Than on the torture of the mind to lie
In restless ecstasy. Duncan is in his grave;
After life's fitful fever he sleeps well;
...
O, full of scorpions is my mind, dear wife!`,
    themes: ['Guilt and conscience', 'Sleep and sleeplessness', 'Violence and cruelty', 'Macbeth as a tragic hero'],
    characters: ['Macbeth', 'Lady Macbeth'],
    techniques: ['Metaphor', 'Imagery', 'Contrast', 'Irony'],
    contextNote: 'Macbeth reveals his tortured mental state to Lady Macbeth, showing how guilt consumes him.'
  },
];

// ============================================
// A CHRISTMAS CAROL - Charles Dickens
// ============================================

export const christmasCarolExtracts: LiteraryExtract[] = [
  {
    id: 'acc-scrooge-intro',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave One',
    extract: `Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner! Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster. The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin. He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.`,
    themes: ['Greed and materialism', 'Isolation vs connection', 'Scrooge\'s character arc', 'Light and dark imagery'],
    characters: ['Scrooge'],
    techniques: ['List of adjectives', 'Pathetic fallacy', 'Simile', 'Semantic field of cold'],
    contextNote: 'The narrator introduces Scrooge, emphasizing his miserly and cold nature.'
  },
  {
    id: 'acc-bah-humbug',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave One',
    extract: `"A merry Christmas, uncle! God save you!" cried a cheerful voice. It was the voice of Scrooge's nephew, who came upon him so quickly that this was the first intimation he had of his approach.
"Bah!" said Scrooge, "Humbug!"
...
"Christmas a humbug, uncle!" said Scrooge's nephew. "You don't mean that, I am sure?"
"I do," said Scrooge. "Merry Christmas! What right have you to be merry? What reason have you to be merry? You're poor enough."
"Come, then," returned the nephew gaily. "What right have you to be dismal? What reason have you to be morose? You're rich enough."`,
    themes: ['The Christmas spirit', 'Family and community', 'Greed and materialism', 'Scrooge\'s character arc'],
    characters: ['Scrooge', 'Fred (nephew)'],
    techniques: ['Dialogue', 'Contrast', 'Rhetorical questions', 'Characterisation'],
    contextNote: 'Fred visits Scrooge\'s counting-house to wish him Merry Christmas, highlighting their contrasting attitudes.'
  },
  {
    id: 'acc-are-there-no-prisons',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave One',
    extract: `"At this festive season of the year, Mr. Scrooge," said the gentleman, taking up a pen, "it is more than usually desirable that we should make some slight provision for the Poor and destitute, who suffer greatly at the present time. Many thousands are in want of common necessaries; hundreds of thousands are in want of common comforts, sir."
"Are there no prisons?" asked Scrooge.
"Plenty of prisons," said the gentleman, laying down the pen again.
"And the Union workhouses?" demanded Scrooge. "Are they still in operation?"
...
"I wish to be left alone," said Scrooge. "Since you ask me what I wish, gentlemen, that is my answer. I don't make merry myself at Christmas and I can't afford to make idle people merry. I help to support the establishments I have mentioned — they cost enough; and those who are badly off must go there."`,
    themes: ['Social responsibility and poverty', 'Victorian attitudes to poverty', 'Greed and materialism', 'Isolation vs connection'],
    characters: ['Scrooge'],
    techniques: ['Dialogue', 'Rhetorical questions', 'Social commentary', 'Irony'],
    contextNote: 'Charity collectors visit Scrooge, who dismisses the poor with reference to prisons and workhouses.'
  },
  {
    id: 'acc-marleys-chains',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave One',
    extract: `The chain he drew was clasped about his middle. It was long, and wound about him like a tail; and it was made (for Scrooge observed it closely) of cash-boxes, keys, padlocks, ledgers, deeds, and heavy purses wrought in steel.
...
"I wear the chain I forged in life," replied the Ghost. "I made it link by link, and yard by yard; I girded it on of my own free will, and of my own free will I wore it. Is its pattern strange to you?"
Scrooge trembled more and more.
"Or would you know," pursued the Ghost, "the weight and length of the strong coil you bear yourself? It was full as heavy and as long as this, seven Christmas Eves ago. You have laboured on it, since. It is a ponderous chain!"`,
    themes: ['Greed and materialism', 'Redemption and transformation', 'Memory and regret', 'Time and mortality'],
    characters: ['Scrooge', 'Marley\'s Ghost'],
    techniques: ['Symbolism', 'Imagery', 'Warning', 'Foreshadowing'],
    contextNote: 'Marley\'s ghost appears to Scrooge, wearing chains representing his sins, and warns Scrooge of his fate.'
  },
  {
    id: 'acc-tiny-tim-god-bless',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave Three',
    extract: `Then up rose Mrs. Cratchit, Cratchit's wife, dressed out but poorly in a twice-turned gown, but brave in ribbons, which are cheap and make a goodly show for sixpence...
...
"And how did little Tim behave?" asked Mrs. Cratchit.
"As good as gold," said Bob, "and better. Somehow he gets thoughtful, sitting by himself so much, and thinks the strangest things you ever heard. He told me, coming home, that he hoped the people saw him in the church, because he was a cripple, and it might be pleasant to them to remember upon Christmas Day, who made lame beggars walk, and blind men see."
...
"God bless us every one!" said Tiny Tim, the last of all.`,
    themes: ['Family and community', 'Social responsibility and poverty', 'Tiny Tim and innocence', 'Bob Cratchit and family'],
    characters: ['Tiny Tim', 'Bob Cratchit', 'Mrs Cratchit'],
    techniques: ['Pathos', 'Religious imagery', 'Contrast', 'Characterisation'],
    contextNote: 'Scrooge observes the Cratchit family\'s modest but loving Christmas dinner with the Ghost of Christmas Present.'
  },
  {
    id: 'acc-ignorance-want',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave Three',
    extract: `From the foldings of its robe, it brought two children; wretched, abject, frightful, hideous, miserable. They knelt down at its feet, and clung upon the outside of its garment.
...
They were a boy and girl. Yellow, meagre, ragged, scowling, wolfish; but prostrate, too, in their humility.
...
"Spirit! are they yours?" Scrooge could say no more.
"They are Man's," said the Spirit, looking down upon them. "And they cling to me, appealing from their fathers. This boy is Ignorance. This girl is Want. Beware them both, and all of their degree, but most of all beware this boy, for on his brow I see that written which is Doom, unless the writing be erased."`,
    themes: ['Social responsibility and poverty', 'Victorian attitudes to poverty', 'The Ghost of Christmas Present', 'Memory and regret'],
    characters: ['Scrooge', 'Ghost of Christmas Present', 'Ignorance', 'Want'],
    techniques: ['Allegory', 'Personification', 'Warning', 'Social commentary'],
    contextNote: 'The Ghost of Christmas Present reveals the allegorical children Ignorance and Want beneath his robes.'
  },
  {
    id: 'acc-scrooge-transformed',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave Five',
    extract: `"I will honour Christmas in my heart, and try to keep it all the year. I will live in the Past, the Present, and the Future. The Spirits of all Three shall strive within me. I will not shut out the lessons that they teach!"
...
He went to church, and walked about the streets, and watched the people hurrying to and fro, and patted children on the head, and questioned beggars, and looked down into the kitchens of houses, and up to the windows, and found that everything could yield him pleasure. He had never dreamed that any walk — that anything — could give him so much happiness.
...
Scrooge was better than his word. He did it all, and infinitely more; and to Tiny Tim, who did NOT die, he was a second father.`,
    themes: ['Redemption and transformation', 'The Christmas spirit', 'Family and community', 'Scrooge\'s character arc'],
    characters: ['Scrooge', 'Tiny Tim'],
    techniques: ['Tricolon', 'Direct address', 'Contrast with opening', 'Joyful tone'],
    contextNote: 'Scrooge awakens on Christmas morning transformed, embracing generosity and the Christmas spirit.'
  },
  {
    id: 'acc-ghost-future',
    text: 'A Christmas Carol',
    author: 'Charles Dickens',
    location: 'Stave Four',
    extract: `The Phantom slowly, gravely, silently, approached. When it came near him, Scrooge bent down upon his knee; for in the very air through which this Spirit moved it seemed to scatter gloom and mystery.
It was shrouded in a deep black garment, which concealed its head, its face, its form, and left nothing of it visible save one outstretched hand.
...
"Ghost of the Future!" he exclaimed, "I fear you more than any spectre I have seen. But as I know your purpose is to do me good, and as I hope to live to be another man from what I was, I am prepared to bear you company, and do it with a thankful heart."`,
    themes: ['The Ghost of Christmas Yet to Come', 'Time and mortality', 'Redemption and transformation', 'Memory and regret'],
    characters: ['Scrooge', 'Ghost of Christmas Yet to Come'],
    techniques: ['Personification', 'Pathetic fallacy', 'Gothic imagery', 'Suspense'],
    contextNote: 'The Ghost of Christmas Yet to Come appears, a terrifying silent figure who shows Scrooge his potential death.'
  },
];

// ============================================
// DR JEKYLL AND MR HYDE - Robert Louis Stevenson
// ============================================

export const jekyllHydeExtracts: LiteraryExtract[] = [
  {
    id: 'jh-hyde-door',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 1: Story of the Door',
    extract: `"Did you ever remark that door?" he asked; and when his companion had replied in the affirmative. "It is connected in my mind," added he, "with a very odd story."
...
"I was coming home from some place at the end of the world, about three o'clock of a black winter morning, and my way lay through a part of town where there was literally nothing to be seen but lamps. Street after street and all the folks asleep — street after street, all lighted up as if for a procession and all as empty as a church — till at last I got into that state of mind when a man listens and listens and begins to long for the sight of a policeman."`,
    themes: ['Secrecy and concealment', 'The door and setting', 'Gothic elements', 'Fog and darkness imagery'],
    characters: ['Enfield', 'Utterson'],
    techniques: ['Frame narrative', 'Setting', 'Atmosphere', 'Foreshadowing'],
    contextNote: 'Enfield tells Utterson about the mysterious door, introducing the theme of hidden evil in respectable London.'
  },
  {
    id: 'jh-trampling-girl',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 1: Story of the Door',
    extract: `"All at once, I saw two figures: one a little man who was stumping along eastward at a good walk, and the other a girl of maybe eight or ten who was running as hard as she was able down a cross street. Well, sir, the two ran into one another naturally enough at the corner; and then came the horrible part of the thing; for the man trampled calmly over the child's body and left her screaming on the ground. It sounds nothing to hear, but it was hellish to see. It wasn't like a man; it was like some damned Juggernaut."`,
    themes: ['Violence and brutality', 'Hyde as evil incarnate', 'Duality of human nature', 'Good vs evil'],
    characters: ['Hyde', 'Enfield'],
    techniques: ['Reported speech', 'Simile', 'Contrast', 'Dehumanisation'],
    contextNote: 'Enfield describes Hyde\'s callous trampling of a child, the first glimpse of Hyde\'s inhuman cruelty.'
  },
  {
    id: 'jh-hyde-description',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 2: Search for Mr Hyde',
    extract: `"He is not easy to describe. There is something wrong with his appearance; something displeasing, something down-right detestable. I never saw a man I so disliked, and yet I scarce know why. He must be deformed somewhere; he gives a strong feeling of deformity, although I couldn't specify the point. He's an extraordinary looking man, and yet I really can name nothing out of the way. No, sir; I can make no hand of it; I can't describe him. And it's not want of memory; for I declare I can see him this moment."`,
    themes: ['Appearance vs reality', 'Hyde as evil incarnate', 'Victorian repression', 'Duality of human nature'],
    characters: ['Hyde', 'Enfield'],
    techniques: ['Negative description', 'Paradox', 'Uncertainty', 'Gothic atmosphere'],
    contextNote: 'Characters struggle to describe Hyde, suggesting evil is beyond rational explanation.'
  },
  {
    id: 'jh-carew-murder',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 4: The Carew Murder Case',
    extract: `And then all of a sudden he broke out in a great flame of anger, stamping with his foot, brandishing the cane, and carrying on (as the maid described it) like a madman. The old gentleman took a step back, with the air of one very much surprised and a trifle hurt; and at that Mr. Hyde broke out of all bounds and clubbed him to the earth. And next moment, with ape-like fury, he was trampling his victim under foot and hailing down a storm of blows, under which the bones were audibly shattered and the body jumped upon the roadway.`,
    themes: ['Violence and brutality', 'Hyde as evil incarnate', 'Addiction and loss of control', 'Good vs evil'],
    characters: ['Hyde', 'Sir Danvers Carew'],
    techniques: ['Violent imagery', 'Simile (ape-like)', 'Sound imagery', 'Contrast'],
    contextNote: 'A maid witnesses Hyde\'s brutal murder of the elderly MP Sir Danvers Carew.'
  },
  {
    id: 'jh-jekyll-confession',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 10: Henry Jekyll\'s Full Statement',
    extract: `I learned to recognise the thorough and primitive duality of man; I saw that, of the two natures that contended in the field of my consciousness, even if I could rightly be said to be either, it was only because I was radically both; and from an early date, even before the course of my scientific discoveries had begun to suggest the most naked possibility of such a miracle, I had learned to dwell with pleasure, as a beloved daydream, on the thought of the separation of these elements.`,
    themes: ['Duality of human nature', 'Jekyll\'s experiment', 'Science and ethics', 'Victorian repression'],
    characters: ['Jekyll'],
    techniques: ['First person confession', 'Scientific language', 'Philosophical reflection', 'Foreshadowing'],
    contextNote: 'Jekyll explains his theory of human duality and his desire to separate good from evil.'
  },
  {
    id: 'jh-transformation',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 10: Henry Jekyll\'s Full Statement',
    extract: `The most racking pangs succeeded: a grinding in the bones, deadly nausea, and a horror of the spirit that cannot be exceeded at the hour of birth or death. Then these agonies began swiftly to subside, and I came to myself as if out of a great sickness. There was something strange in my sensations, something indescribably new and, from its very novelty, incredibly sweet. I felt younger, lighter, happier in body; within I was conscious of a heady recklessness, a current of disordered sensual images running like a millrace in my fancy, a solution of the bonds of obligation, an unknown but not an innocent freedom of the soul.`,
    themes: ['Jekyll\'s experiment', 'Duality of human nature', 'Science and ethics', 'Addiction and loss of control'],
    characters: ['Jekyll', 'Hyde'],
    techniques: ['Sensory description', 'Contrast', 'Semantic field of sensation', 'Paradox'],
    contextNote: 'Jekyll describes the physical and emotional experience of his first transformation into Hyde.'
  },
  {
    id: 'jh-hyde-smaller',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 10: Henry Jekyll\'s Full Statement',
    extract: `I was conscious of no repugnance, rather of a leap of welcome. This, too, was myself. It seemed natural and human. In my eyes it bore a livelier image of the spirit, it seemed more express and single, than the imperfect and divided countenance I had been hitherto accustomed to call mine. And in so far I was doubtless right. I have observed that when I wore the semblance of Edward Hyde, none could come near to me at first without a visible misgiving of the flesh. This, as I take it, was because all human beings, as we meet them, are commingled out of good and evil: and Edward Hyde, alone in the ranks of mankind, was pure evil.`,
    themes: ['Duality of human nature', 'Hyde as evil incarnate', 'Good vs evil', 'Victorian repression'],
    characters: ['Jekyll', 'Hyde'],
    techniques: ['First person reflection', 'Philosophical analysis', 'Paradox', 'Characterisation'],
    contextNote: 'Jekyll explains why Hyde appears smaller and why people instinctively recoil from him.'
  },
  {
    id: 'jh-losing-control',
    text: 'The Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    location: 'Chapter 10: Henry Jekyll\'s Full Statement',
    extract: `I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.
...
Yes, I had gone to bed Henry Jekyll, I had awakened Edward Hyde. How was this to be explained? I asked myself; and then, with another bound of terror — how was it to be remedied? It was well on in the morning; the servants were up; all my drugs were in the cabinet — a long journey down two pairs of stairs, through the back passage, across the open court and through the anatomical theatre, from where I was then standing horror-struck.`,
    themes: ['Addiction and loss of control', 'Duality of human nature', 'The final confession', 'Jekyll\'s experiment'],
    characters: ['Jekyll', 'Hyde'],
    techniques: ['First person narrative', 'Suspense', 'Internal conflict', 'Imagery'],
    contextNote: 'Jekyll describes losing control as Hyde begins to emerge spontaneously without the potion.'
  },
];

// ============================================
// AN INSPECTOR CALLS - J.B. Priestley
// ============================================

export const inspectorCallsExtracts: LiteraryExtract[] = [
  {
    id: 'aic-opening-stage-directions',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act One (Opening)',
    extract: `The dining room of a fairly large suburban house, belonging to a prosperous manufacturer. It has good solid furniture of the period. The general effect is substantial and heavily comfortable, but not cosy and homelike.
...
At rise of curtain, the four BIRLINGS and GERALD are seated at the table, with ARTHUR BIRLING at one end, his wife at the other, ERIC downstage, and SHEILA and GERALD seated upstage. EDNA, the parlour-maid, is just clearing the table, which has no cloth, of dessert plates and champagne glasses, etc., and then replacing them with decanter of port, cigar box and cigarettes. Port glasses are already on the table.`,
    themes: ['Social class and inequality', 'Capitalism and exploitation', 'Family dynamics', 'Pre-war complacency'],
    characters: ['Birling family', 'Gerald'],
    techniques: ['Stage directions', 'Setting', 'Symbolism', 'Foreshadowing'],
    contextNote: 'The play opens with the prosperous Birling family celebrating Sheila\'s engagement to Gerald Croft.'
  },
  {
    id: 'aic-titanic-speech',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act One',
    extract: `BIRLING: Just let me finish, Eric. You've a lot to learn yet. And I'm talking as a hard-headed, practical man of business. And I say there isn't a chance of war. The world's developing so fast that it'll make war impossible. Look at the progress we're making. In a year or two we'll have aeroplanes that will be able to go anywhere. And look at the way the auto-mobile's making headway — there's development there. And the way they're developing shipping — why, a friend of mine went over to America on the Titanic — she sails next week — forty-six thousand eight hundred tons — New York in five days — and every luxury — and unsinkable, absolutely unsinkable.`,
    themes: ['Capitalism and exploitation', 'Social responsibility', 'Pre-war complacency', 'Dramatic irony'],
    characters: ['Mr Birling'],
    techniques: ['Dramatic irony', 'Monologue', 'Hubris', 'Foreshadowing'],
    contextNote: 'Mr Birling lectures his family about progress, making predictions the 1945 audience knows are wrong.'
  },
  {
    id: 'aic-man-for-himself',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act One',
    extract: `BIRLING: But the way some of these cranks talk and write now, you'd think everybody has to look after everybody else, as if we were all mixed up together like bees in a hive — community and all that nonsense. But take my word for it, you youngsters — and I've learnt in the good hard school of experience — that a man has to mind his own business and look after himself and his own — and —
[We hear the sharp ring of a front door bell. BIRLING stops to listen.]`,
    themes: ['Social responsibility', 'Capitalism and exploitation', 'Generational conflict', 'Community vs individualism'],
    characters: ['Mr Birling', 'Inspector Goole'],
    techniques: ['Interrupted speech', 'Dramatic irony', 'Symbolism (doorbell)', 'Foreshadowing'],
    contextNote: 'Birling\'s individualist speech is dramatically interrupted by the Inspector\'s arrival.'
  },
  {
    id: 'aic-inspector-entrance',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act One',
    extract: `The INSPECTOR need not be a big man but he creates at once an impression of massiveness, solidity and purposefulness. He is a man in his fifties, dressed in a plain darkish suit of the period. He speaks carefully, weightily, and has a disconcerting habit of looking hard at the person he addresses before actually speaking.
INSPECTOR: Mr Birling?
BIRLING: Yes. Sit down, Inspector.
INSPECTOR: [sitting] Thank you, sir.
BIRLING: Have a glass of port — or a little whisky?
INSPECTOR: No, thank you, Mr Birling. I'm on duty.`,
    themes: ['Social responsibility', 'Class conflict', 'Justice and morality', 'Inspector as moral voice'],
    characters: ['Inspector Goole', 'Mr Birling'],
    techniques: ['Stage directions', 'Characterisation', 'Contrast', 'Authority'],
    contextNote: 'The Inspector arrives, immediately establishing his commanding presence and moral authority.'
  },
  {
    id: 'aic-sheila-shop',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act One',
    extract: `SHEILA: [rather distressed] Sorry! It's just that I can't help thinking about this girl — destroying herself so horribly — and I've been so happy tonight. Oh I wish you hadn't told me. What was she like? Quite young?
INSPECTOR: Yes. Twenty-four.
SHEILA: Pretty?
INSPECTOR: She wasn't pretty when I saw her today, but she had been pretty — very pretty.
SHEILA: [distressed] Oh how horrible! Was it an accident?
INSPECTOR: No. She wanted to end her life. She felt she couldn't go on any longer.`,
    themes: ['Social responsibility', 'Guilt and consequences', 'Class and inequality', 'Eva Smith/Daisy Renton'],
    characters: ['Sheila', 'Inspector Goole'],
    techniques: ['Dialogue', 'Emotive language', 'Sympathy', 'Characterisation'],
    contextNote: 'Sheila shows genuine distress at Eva\'s fate, contrasting with her parents\' indifference.'
  },
  {
    id: 'aic-fire-blood-anguish',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act Three',
    extract: `INSPECTOR: [taking charge, masterfully] Stop! And be quiet for a moment and listen to me. I don't need to know any more. Neither do you. This girl killed herself — and died a horrible death. But each of you helped to kill her. Remember that. Never forget it. [He looks from one to the other of them carefully.] But then I don't think you ever will. Remember what you did, Mrs Birling. You turned her away when she most needed help. You refused her even the pitiable little bit of organised charity you had in your power to grant her. Remember what you did —`,
    themes: ['Social responsibility', 'Guilt and consequences', 'Justice and morality', 'Inspector as moral voice'],
    characters: ['Inspector Goole', 'Birling family'],
    techniques: ['Imperative verbs', 'Repetition', 'Moral authority', 'Direct address'],
    contextNote: 'The Inspector summarises each person\'s role in Eva\'s death before his final speech.'
  },
  {
    id: 'aic-final-speech',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act Three',
    extract: `INSPECTOR: But just remember this. One Eva Smith has gone — but there are millions and millions and millions of Eva Smiths and John Smiths still left with us, with their lives, their hopes and fears, their suffering and chance of happiness, all intertwined with our lives, with what we think and say and do. We don't live alone. We are members of one body. We are responsible for each other. And I tell you that the time will soon come when, if men will not learn that lesson, then they will be taught it in fire and blood and anguish. Good night.`,
    themes: ['Social responsibility', 'Community vs individualism', 'Warning and prophecy', 'Inspector as moral voice'],
    characters: ['Inspector Goole'],
    techniques: ['Tricolon', 'Repetition', 'Biblical allusion', 'Prophecy'],
    contextNote: 'The Inspector\'s famous final speech delivers Priestley\'s message about collective responsibility.'
  },
  {
    id: 'aic-sheila-changed',
    text: 'An Inspector Calls',
    author: 'J.B. Priestley',
    location: 'Act Three',
    extract: `SHEILA: [flaring up] It's you two who are being childish — trying not to face the facts.
BIRLING: I'm not going to have this, Inspector. It's not for you to say we can or cannot go.
SHEILA: But don't you see, if all that's come out tonight is true, then it doesn't much matter who made us confess. And it was true, wasn't it? You don't even now believe that Eva Smith ever existed. But we know she did. We know what we did. And mother did what she did. And the rest of us did what we did to her. It's still the same rotten story whether it's been told to a police inspector or to somebody else.`,
    themes: ['Generational conflict', 'Social responsibility', 'Change and redemption', 'Guilt and consequences'],
    characters: ['Sheila', 'Mr Birling', 'Mrs Birling'],
    techniques: ['Contrast', 'Repetition', 'Dramatic irony', 'Character development'],
    contextNote: 'After the Inspector leaves, Sheila refuses to dismiss the evening\'s revelations like her parents.'
  },
];

// ============================================
// ROMEO AND JULIET - William Shakespeare
// ============================================

export const romeoJulietExtracts: LiteraryExtract[] = [
  {
    id: 'rj-prologue',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Prologue',
    extract: `Two households, both alike in dignity,
In fair Verona, where we lay our scene,
From ancient grudge break to new mutiny,
Where civil blood makes civil hands unclean.
From forth the fatal loins of these two foes
A pair of star-cross'd lovers take their life;
Whose misadventured piteous overthrows
Do with their death bury their parents' strife.
The fearful passage of their death-mark'd love,
And the continuance of their parents' rage,
Which, but their children's end, nought could remove,
Is now the two hours' traffic of our stage.`,
    themes: ['Fate and destiny', 'Family conflict and loyalty', 'Death and mortality', 'The Prologue and dramatic irony'],
    characters: ['Chorus'],
    techniques: ['Sonnet form', 'Dramatic irony', 'Foreshadowing', 'Oxymoron'],
    contextNote: 'The Chorus introduces the play, revealing the lovers\' fate and the theme of the feud.'
  },
  {
    id: 'rj-balcony-scene',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 2, Scene 2',
    extract: `JULIET: O Romeo, Romeo! wherefore art thou Romeo?
Deny thy father and refuse thy name;
Or, if thou wilt not, be but sworn my love,
And I'll no longer be a Capulet.
ROMEO: [Aside] Shall I hear more, or shall I speak at this?
JULIET: 'Tis but thy name that is my enemy;
Thou art thyself, though not a Montague.
What's Montague? it is nor hand, nor foot,
Nor arm, nor face, nor any other part
Belonging to a man. O, be some other name!
What's in a name? that which we call a rose
By any other name would smell as sweet.`,
    themes: ['Love and passion', 'Family conflict and loyalty', 'Identity', 'Youth vs age'],
    characters: ['Romeo', 'Juliet'],
    techniques: ['Soliloquy', 'Rhetorical questions', 'Metaphor', 'Dramatic irony'],
    contextNote: 'The famous balcony scene where Juliet questions the importance of Romeo\'s family name.'
  },
  {
    id: 'rj-queen-mab',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 4',
    extract: `MERCUTIO: O, then, I see Queen Mab hath been with you.
She is the fairies' midwife, and she comes
In shape no bigger than an agate-stone
On the fore-finger of an alderman,
Drawn with a team of little atomies
Athwart men's noses as they lie asleep;
...
And in this state she gallops night by night
Through lovers' brains, and then they dream of love;
...
This is the hag, when maids lie on their backs,
That presses them and learns them first to bear,
Making them women of good carriage.`,
    themes: ['Dreams and imagination', 'Fate and destiny', 'Mercutio and Tybalt', 'Love and passion'],
    characters: ['Mercutio', 'Romeo'],
    techniques: ['Extended metaphor', 'Imagery', 'Foreshadowing', 'Characterisation'],
    contextNote: 'Mercutio\'s fantastical speech about Queen Mab reveals his wit and hints at darker themes.'
  },
  {
    id: 'rj-tybalt-death',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 1',
    extract: `ROMEO: Alive, in triumph! and Mercutio slain!
Away to heaven, respective lenity,
And fire-eyed fury be my conduct now!
Now, Tybalt, take the villain back again,
That late thou gavest me; for Mercutio's soul
Is but a little way above our heads,
Staying for thine to keep him company:
Either thou, or I, or both, must go with him.
TYBALT: Thou, wretched boy, that didst consort him here,
Shalt with him hence.
ROMEO: This shall determine that.
[They fight; TYBALT falls]`,
    themes: ['Violence and revenge', 'Fate and destiny', 'Impulsiveness and haste', 'Romeo\'s character development'],
    characters: ['Romeo', 'Tybalt', 'Mercutio'],
    techniques: ['Dramatic irony', 'Imagery', 'Turning point', 'Character change'],
    contextNote: 'Romeo kills Tybalt in revenge for Mercutio\'s death, the turning point that seals the lovers\' fate.'
  },
  {
    id: 'rj-juliet-potion',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 4, Scene 3',
    extract: `JULIET: Farewell! God knows when we shall meet again.
I have a faint cold fear thrills through my veins,
That almost freezes up the heat of life:
...
What if it be a poison, which the friar
Subtly hath minister'd to have me dead,
...
How if, when I am laid into the tomb,
I wake before the time that Romeo
Come to redeem me? there's a fearful point!
Shall I not, then, be stifled in the vault,
To whose foul mouth no healthsome air breathes in,
And there die strangled ere my Romeo comes?`,
    themes: ['Death and mortality', 'Fate and destiny', 'Juliet\'s growth and agency', 'Fear and isolation'],
    characters: ['Juliet'],
    techniques: ['Soliloquy', 'Rhetorical questions', 'Gothic imagery', 'Foreshadowing'],
    contextNote: 'Juliet\'s soliloquy before taking the potion shows her fears and courage.'
  },
  {
    id: 'rj-tomb-scene',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 5, Scene 3',
    extract: `ROMEO: Eyes, look your last!
Arms, take your last embrace! and, lips, O you
The doors of breath, seal with a righteous kiss
A dateless bargain to engrossing death!
Come, bitter conduct, come, unsavoury guide!
Thou desperate pilot, now at once run on
The dashing rocks thy sea-sick weary bark!
Here's to my love!
[Drinks]
O true apothecary!
Thy drugs are quick. Thus with a kiss I die.
[Dies]`,
    themes: ['Death and mortality', 'Love and passion', 'Fate and destiny', 'Tragic ending'],
    characters: ['Romeo', 'Juliet'],
    techniques: ['Apostrophe', 'Metaphor', 'Dramatic irony', 'Oxymoron'],
    contextNote: 'Romeo drinks poison beside what he believes is Juliet\'s corpse, moments before she awakens.'
  },
  {
    id: 'rj-nurse-advice',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 5',
    extract: `NURSE: Faith, here it is.
Romeo is banish'd; and all the world to nothing,
That he dares ne'er come back to challenge you;
Or, if he do, it needs must be by stealth.
Then, since the case so stands as now it doth,
I think it best you married with the county.
O, he's a lovely gentleman!
Romeo's a dishclout to him: an eagle, madam,
Hath not so green, so quick, so fair an eye
As Paris hath. Beshrew my very heart,
I think you are happy in this second match,
For it excels your first.`,
    themes: ['Love and loyalty', 'The Nurse\'s role', 'Marriage and duty', 'Betrayal'],
    characters: ['Nurse', 'Juliet'],
    techniques: ['Dramatic irony', 'Characterisation', 'Imagery', 'Turning point'],
    contextNote: 'The Nurse advises Juliet to marry Paris, betraying Juliet who then turns to Friar Lawrence.'
  },
  {
    id: 'rj-light-dark',
    text: 'Romeo and Juliet',
    author: 'William Shakespeare',
    location: 'Act 2, Scene 2',
    extract: `ROMEO: But, soft! what light through yonder window breaks?
It is the east, and Juliet is the sun.
Arise, fair sun, and kill the envious moon,
Who is already sick and pale with grief,
That thou her maid art far more fair than she:
Be not her maid, since she is envious;
Her vestal livery is but sick and green
And none but fools do wear it; cast it off.
It is my lady, O, it is my love!
O, that she knew she were!`,
    themes: ['Love and passion', 'Light and dark imagery', 'Romeo\'s character development', 'Beauty and desire'],
    characters: ['Romeo', 'Juliet'],
    techniques: ['Extended metaphor', 'Personification', 'Imagery', 'Soliloquy'],
    contextNote: 'Romeo\'s famous speech comparing Juliet to the sun, establishing the light/dark imagery.'
  },
];

// ============================================
// FRANKENSTEIN - Mary Shelley (GCSE)
// ============================================

export const frankensteinExtracts: LiteraryExtract[] = [
  {
    id: 'frank-creation',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Chapter 5',
    extract: `It was on a dreary night of November that I beheld the accomplishment of my toils. With an anxiety that almost amounted to agony, I collected the instruments of life around me, that I might infuse a spark of being into the lifeless thing that lay at my feet. It was already one in the morning; the rain pattered dismally against the panes, and my candle was nearly burnt out, when, by the glimmer of the half-extinguished light, I saw the dull yellow eye of the creature open; it breathed hard, and a convulsive motion agitated its limbs.
How can I describe my emotions at this catastrophe, or how delineate the wretch whom with such infinite pains and care I had endeavoured to form?`,
    themes: ['Creation and birth', 'Science and nature', 'Playing God', 'Horror and the Gothic', 'Victor\'s obsession'],
    characters: ['Victor Frankenstein', 'The Creature'],
    techniques: ['Pathetic fallacy', 'First person narrative', 'Gothic setting', 'Sensory description'],
    contextNote: 'Victor brings the Creature to life and immediately feels horror and revulsion at his creation.'
  },
  {
    id: 'frank-creature-speaks',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Chapter 11',
    extract: `"I am alone and miserable; man will not associate with me; but one as deformed and horrible as myself would not deny herself to me. My companion must be of the same species and have the same defects. This being you must create."
...
"I am malicious because I am miserable. Am I not shunned and hated by all mankind? You, my creator, would tear me to pieces and triumph; remember that, and tell me why I should pity man more than he pities me?"`,
    themes: ['Isolation and loneliness', 'Rejection and abandonment', 'Nature vs nurture', 'Revenge', 'The Creature\'s humanity'],
    characters: ['The Creature', 'Victor Frankenstein'],
    techniques: ['Rhetorical questions', 'Emotive language', 'Direct address', 'Pathos'],
    contextNote: 'The Creature confronts Victor, demanding a companion and explaining how rejection has made him violent.'
  },
  {
    id: 'frank-monster-learns',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Chapter 12',
    extract: `"I learned, from the views of social life which it developed, to admire their virtues and to deprecate the vices of mankind. I learned that the possessions most esteemed by your fellow creatures were high and unsullied descent united with riches. A man might be respected with only one of these advantages, but without either he was considered, except in very rare instances, as a vagabond and a slave, doomed to waste his powers for the profits of the chosen few! And what was I? Of my creation and creator I was absolutely ignorant, but I knew that I possessed no money, no friends, no kind of property."`,
    themes: ['Social class and inequality', 'Education and knowledge', 'The Creature\'s humanity', 'Isolation and loneliness'],
    characters: ['The Creature'],
    techniques: ['First person narrative', 'Reflection', 'Social commentary', 'Rhetorical questions'],
    contextNote: 'The Creature describes learning about human society by observing the De Lacey family.'
  },
  {
    id: 'frank-walton-warning',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Letter 4',
    extract: `"Learn from me, if not by my precepts, at least by my example, how dangerous is the acquirement of knowledge and how much happier that man is who believes his native town to be the world, than he who aspires to become greater than his nature will allow."
...
"I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart."`,
    themes: ['Dangerous knowledge', 'Ambition and obsession', 'Regret and guilt', 'Science and ethics'],
    characters: ['Victor Frankenstein', 'Walton'],
    techniques: ['Framing narrative', 'Foreshadowing', 'Moral message', 'Contrast'],
    contextNote: 'Victor warns Walton about the dangers of ambition and the pursuit of forbidden knowledge.'
  },
  {
    id: 'frank-creature-rejected',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Chapter 15',
    extract: `"I expected this reception," said the daemon. "All men hate the wretched; how, then, must I be hated, who am miserable beyond all living things! Yet you, my creator, detest and spurn me, thy creature, to whom thou art bound by ties only dissoluble by the annihilation of one of us. You purpose to kill me. How dare you sport thus with life? Do your duty towards me, and I will do mine towards you and the rest of mankind."`,
    themes: ['Parental responsibility', 'Rejection and abandonment', 'Creator and creation', 'Justice and morality'],
    characters: ['The Creature', 'Victor Frankenstein'],
    techniques: ['Biblical allusion', 'Accusatory tone', 'Emotive language', 'Imperative'],
    contextNote: 'The Creature accuses Victor of failing in his duty as creator and demands justice.'
  },
  {
    id: 'frank-sublime-nature',
    text: 'Frankenstein',
    author: 'Mary Shelley',
    location: 'Chapter 10',
    extract: `"The weight upon my spirit was sensibly lightened as I plunged yet deeper in the ravine of Arve. The immense mountains and precipices that overhung me on every side, the sound of the river raging among the rocks, and the dashing of the waterfalls around spoke of a power mighty as Omnipotence — and I ceased to fear or to bend before any being less almighty than that which had created and ruled the elements."`,
    themes: ['Nature and the sublime', 'Romanticism', 'Escape and solace', 'Religion and God'],
    characters: ['Victor Frankenstein'],
    techniques: ['Sublime imagery', 'Personification', 'Romantic conventions', 'Sensory language'],
    contextNote: 'Victor finds temporary peace in the Alps, showing the Romantic idea of nature\'s healing power.'
  },
];

// ============================================
// GREAT EXPECTATIONS - Charles Dickens (GCSE)
// ============================================

export const greatExpectationsExtracts: LiteraryExtract[] = [
  {
    id: 'ge-graveyard-opening',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 1',
    extract: `My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.
...
Ours was the marsh country, down by the river, within, as the river wound, twenty miles of the sea. My first most vivid and broad impression of the identity of things seems to me to have been gained on a memorable raw afternoon towards evening. At such a time I found out for certain that this bleak place overgrown with nettles was the churchyard.`,
    themes: ['Childhood and identity', 'Setting and atmosphere', 'Social class', 'Isolation'],
    characters: ['Pip'],
    techniques: ['First person narrative', 'Gothic setting', 'Pathetic fallacy', 'Retrospective narration'],
    contextNote: 'The novel opens with young Pip alone in the graveyard where his parents are buried.'
  },
  {
    id: 'ge-magwitch-encounter',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 1',
    extract: `"Hold your noise!" cried a terrible voice, as a man started up from among the graves at the side of the church porch. "Keep still, you little devil, or I'll cut your throat!"
A fearful man, all in coarse grey, with a great iron on his leg. A man with no hat, and with broken shoes, and with an old rag tied round his head. A man who had been soaked in water, and smothered in mud, and lamed by stones, and cut by flints, and stung by nettles, and torn by briars; who limped, and shivered, and glared, and growled; and whose teeth chattered in his head as he seized me by the chin.`,
    themes: ['Fear and violence', 'Social class', 'Crime and punishment', 'Childhood vulnerability'],
    characters: ['Pip', 'Magwitch'],
    techniques: ['List structure', 'Sensory detail', 'Gothic imagery', 'Contrast'],
    contextNote: 'Young Pip encounters the escaped convict Magwitch in the graveyard - a meeting that will change his life.'
  },
  {
    id: 'ge-satis-house',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 8',
    extract: `We went into the house by a side door — the great front entrance had two chains across it outside — and the first thing I noticed was, that the passages were all dark, and that she had left a candle burning there. She took it up, and we went through more passages and up a staircase, and still it was all dark, and only the candle lighted us.
...
In an arm-chair, with an elbow resting on the table and her head leaning on that hand, sat the strangest lady I have ever seen, or shall ever see.
She was dressed in rich materials — satins, and lace, and silks — all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white.`,
    themes: ['Decay and stagnation', 'Wealth and class', 'Time and memory', 'Miss Havisham\'s tragedy'],
    characters: ['Pip', 'Miss Havisham', 'Estella'],
    techniques: ['Gothic imagery', 'Symbolism', 'Contrast (light/dark)', 'Detailed description'],
    contextNote: 'Pip\'s first visit to Satis House, where he meets the decaying Miss Havisham frozen in time.'
  },
  {
    id: 'ge-estella-cruelty',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 8',
    extract: `"He calls the knaves, Jacks, this boy!" said Estella with disdain, before our first game was out. "And what coarse hands he has! And what thick boots!"
I had never thought of being ashamed of my hands before; but I began to consider them a very indifferent pair. Her contempt for me was so strong, that it became infectious, and I caught it.
...
I took the opportunity of being alone in the courtyard, to look at my coarse hands and my common boots. My opinion of those accessories was not favourable. They had never troubled me before, but they troubled me now, as vulgar appendages.`,
    themes: ['Social class and shame', 'Love and cruelty', 'Self-improvement', 'Childhood innocence lost'],
    characters: ['Pip', 'Estella'],
    techniques: ['Dialogue', 'Internal conflict', 'Social commentary', 'First person reflection'],
    contextNote: 'Estella\'s criticism makes Pip ashamed of his working-class origins for the first time.'
  },
  {
    id: 'ge-pip-gentleman',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 18',
    extract: `"Now, I return to this young fellow. And the communication I have got to make is, that he has Great Expectations."
...
My dream was out; my wild fancy was surpassed by sober reality; Miss Havisham was going to make my fortune on a grand scale.
...
"Now, Mr. Pip," pursued the lawyer, "I address the rest of what I have to say, to you. You are to understand, first, that it is the request of the person from whom I take my instructions that you always bear the name of Pip. You are to understand, secondly, that the name of your liberal benefactor remains a profound secret."`,
    themes: ['Great expectations', 'Social class', 'Mystery and secrets', 'Ambition'],
    characters: ['Pip', 'Jaggers'],
    techniques: ['Dramatic irony', 'Legal language', 'Suspense', 'Foreshadowing'],
    contextNote: 'Pip learns he has a secret benefactor and will be raised as a gentleman - he wrongly assumes it\'s Miss Havisham.'
  },
  {
    id: 'ge-joe-visit',
    text: 'Great Expectations',
    author: 'Charles Dickens',
    location: 'Chapter 27',
    extract: `"Pip, dear old chap, life is made of ever so many partings welded together, as I may say, and one man's a blacksmith, and one's a whitesmith, and one's a goldsmith, and one's a coppersmith. Diwisions among such must come, and must be met as they come."
...
"You and me is not two figures to be together in London; nor yet anywheres else but what is private, and beknown, and understood among friends."`,
    themes: ['True gentility', 'Social class', 'Loyalty and love', 'Shame and guilt'],
    characters: ['Joe', 'Pip'],
    techniques: ['Dialect', 'Wisdom', 'Metaphor', 'Pathos'],
    contextNote: 'Joe visits Pip in London but feels out of place. His dignity highlights Pip\'s snobbery.'
  },
];

// ============================================
// ANIMAL FARM - George Orwell (GCSE)
// ============================================

export const animalFarmExtracts: LiteraryExtract[] = [
  {
    id: 'af-old-major-speech',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 1',
    extract: `"Now, comrades, what is the nature of this life of ours? Let us face it: our lives are miserable, laborious, and short. We are born, we are given just so much food as will keep the breath in our bodies, and those of us who are capable of it are forced to work to the last atom of our strength; and the very instant that our usefulness has come to an end we are slaughtered with hideous cruelty. No animal in England knows the meaning of happiness or leisure after he is a year old. No animal in England is free. The life of an animal is misery and slavery: that is the plain truth."`,
    themes: ['Inequality and exploitation', 'Revolution', 'Old Major\'s dream', 'Power and corruption'],
    characters: ['Old Major'],
    techniques: ['Rhetoric', 'Repetition', 'Emotive language', 'Allegory'],
    contextNote: 'Old Major\'s speech inspires the animals to dream of rebellion against human oppression.'
  },
  {
    id: 'af-seven-commandments',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 2',
    extract: `THE SEVEN COMMANDMENTS
1. Whatever goes upon two legs is an enemy.
2. Whatever goes upon four legs, or has wings, is a friend.
3. No animal shall wear clothes.
4. No animal shall sleep in a bed.
5. No animal shall drink alcohol.
6. No animal shall kill any other animal.
7. All animals are equal.`,
    themes: ['Equality', 'Rules and laws', 'Power and corruption', 'Propaganda'],
    characters: ['The Pigs', 'Snowball', 'Napoleon'],
    techniques: ['Simple language', 'Declarative sentences', 'Irony', 'Allegory'],
    contextNote: 'The original Seven Commandments of Animalism, which will be gradually corrupted.'
  },
  {
    id: 'af-napoleon-dogs',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 5',
    extract: `At this there was a terrible baying sound outside, and nine enormous dogs wearing brass-studded collars came bounding into the barn. They dashed straight for Snowball, who only sprang from his place just in time to escape their snapping jaws.
...
Napoleon, with the dogs following him, now mounted on to the raised portion of the floor where Major had previously stood to deliver his speech. He announced that from now on the Sunday-morning Meetings would come to an end.`,
    themes: ['Power and corruption', 'Violence and fear', 'Totalitarianism', 'Napoleon\'s tyranny'],
    characters: ['Napoleon', 'Snowball', 'The Dogs'],
    techniques: ['Violence', 'Symbolism', 'Power shift', 'Foreshadowing'],
    contextNote: 'Napoleon uses violence to expel Snowball and seize absolute power.'
  },
  {
    id: 'af-boxer-sent-away',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 9',
    extract: `"Fools! Fools!" shouted Benjamin, prancing round them and stamping the earth with his small hoofs. "Fools! Do you not see what is written on the side of that van?"
...
"Alfred Simmonds, Horse Slaughterer and Glue Boiler, Willingdon. Dealer in Hides and Bone-Meal. Kennels Supplied." Do you not understand what that means? They are taking Boxer to the knacker's!"`,
    themes: ['Betrayal', 'Exploitation of the loyal', 'Corruption of ideals', 'Boxer\'s fate'],
    characters: ['Boxer', 'Benjamin', 'Napoleon'],
    techniques: ['Dramatic irony', 'Tragedy', 'Symbolism', 'Pathos'],
    contextNote: 'Boxer, who gave everything to the revolution, is sold to the slaughterhouse by the pigs.'
  },
  {
    id: 'af-all-animals-equal',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 10',
    extract: `There was nothing there now except a single Commandment. It ran:
ALL ANIMALS ARE EQUAL
BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS
...
Twelve voices were shouting in anger, and they were all alike. No question, now, what had happened to the faces of the pigs. The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.`,
    themes: ['Corruption of ideals', 'Power and corruption', 'Totalitarianism', 'Cycle of oppression'],
    characters: ['The Pigs', 'Napoleon', 'The Animals'],
    techniques: ['Paradox', 'Symbolism', 'Circular structure', 'Allegory'],
    contextNote: 'The final scene shows the pigs have become indistinguishable from the humans they overthrew.'
  },
  {
    id: 'af-squealer-propaganda',
    text: 'Animal Farm',
    author: 'George Orwell',
    location: 'Chapter 5',
    extract: `"Comrades," he said, "I trust that every animal here appreciates the sacrifice that Comrade Napoleon has made in taking this extra labour upon himself. Do not imagine, comrades, that leadership is a pleasure! On the contrary, it is a deep and heavy responsibility. No one believes more firmly than Comrade Napoleon that all animals are equal. He would be only too happy to let you make your decisions for yourselves. But sometimes you might make the wrong decisions, comrades, and then where should we be?"`,
    themes: ['Propaganda', 'Manipulation', 'Power and corruption', 'Language as control'],
    characters: ['Squealer', 'Napoleon'],
    techniques: ['Rhetorical questions', 'Euphemism', 'Repetition', 'Irony'],
    contextNote: 'Squealer uses propaganda to justify Napoleon\'s increasing power and control.'
  },
];

// ============================================
// OTHELLO - William Shakespeare (A-Level)
// ============================================

export const othelloExtracts: LiteraryExtract[] = [
  {
    id: 'othello-iago-soliloquy',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 3',
    extract: `Thus do I ever make my fool my purse;
For I mine own gain'd knowledge should profane
If I would time expend with such a snipe
But for my sport and profit. I hate the Moor;
And it is thought abroad that 'twixt my sheets
He has done my office. I know not if't be true;
But I, for mere suspicion in that kind,
Will do as if for surety. He holds me well;
The better shall my purpose work on him.
...
I have't! It is engender'd! Hell and night
Must bring this monstrous birth to the world's light.`,
    themes: ['Jealousy and envy', 'Racism', 'Villainy and manipulation', 'Appearance vs reality'],
    characters: ['Iago'],
    techniques: ['Soliloquy', 'Dramatic irony', 'Imagery', 'Foreshadowing'],
    contextNote: 'Iago reveals his hatred of Othello and begins plotting his revenge.'
  },
  {
    id: 'othello-put-out-light',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 5, Scene 2',
    extract: `It is the cause, it is the cause, my soul.
Let me not name it to you, you chaste stars!
It is the cause. Yet I'll not shed her blood,
Nor scar that whiter skin of hers than snow,
And smooth as monumental alabaster.
Yet she must die, else she'll betray more men.
Put out the light, and then put out the light:
If I quench thee, thou flaming minister,
I can again thy former light restore,
Should I repent me; but once put out thy light,
Thou cunning'st pattern of excelling nature,
I know not where is that Promethean heat
That can thy light relume.`,
    themes: ['Jealousy', 'Love and death', 'Tragedy', 'Honour and reputation'],
    characters: ['Othello', 'Desdemona'],
    techniques: ['Soliloquy', 'Extended metaphor', 'Repetition', 'Tragic irony'],
    contextNote: 'Othello prepares to murder Desdemona, believing Iago\'s lies about her infidelity.'
  },
  {
    id: 'othello-reputation',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 2, Scene 3',
    extract: `Reputation, reputation, reputation! O, I have lost
my reputation! I have lost the immortal part of
myself, and what remains is bestial. My reputation,
Iago, my reputation!
IAGO: As I am an honest man, I thought you had received
some bodily wound; there is more sense in that than
in reputation. Reputation is an idle and most false
imposition; oft got without merit, and lost without
deserving: you have lost no reputation at all,
unless you repute yourself such a loser.`,
    themes: ['Reputation and honour', 'Manipulation', 'Appearance vs reality', 'Irony'],
    characters: ['Cassio', 'Iago'],
    techniques: ['Repetition', 'Dramatic irony', 'Contrast', 'Prose'],
    contextNote: 'After losing his position, Cassio laments his reputation while Iago pretends to console him.'
  },
  {
    id: 'othello-green-eyed-monster',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 3',
    extract: `O, beware, my lord, of jealousy;
It is the green-ey'd monster which doth mock
The meat it feeds on. That cuckold lives in bliss
Who, certain of his fate, loves not his wronger;
But, O, what damned minutes tells he o'er
Who dotes, yet doubts; suspects, yet strongly loves!
OTHELLO: O misery!
IAGO: Poor and content is rich, and rich enough;
But riches fineless is as poor as winter
To him that ever fears he shall be poor.
Good God, the souls of all my tribe defend
From jealousy!`,
    themes: ['Jealousy', 'Manipulation', 'Trust and betrayal', 'Dramatic irony'],
    characters: ['Iago', 'Othello'],
    techniques: ['Personification', 'Metaphor', 'Dramatic irony', 'Foreshadowing'],
    contextNote: 'Iago warns Othello of jealousy while deliberately planting it in his mind.'
  },
  {
    id: 'othello-honest-iago',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 3',
    extract: `Look to her, Moor, if thou hast eyes to see:
She has deceiv'd her father, and may thee.
OTHELLO: My life upon her faith! Honest Iago,
My Desdemona must I leave to thee.
I prithee, let thy wife attend on her;
And bring them after in the best advantage.
Come, Desdemona; I have but an hour
Of love, of worldly matters and direction,
To spend with thee: we must obey the time.`,
    themes: ['Trust and betrayal', 'Deception', 'Dramatic irony', 'Marriage'],
    characters: ['Brabantio', 'Othello', 'Iago', 'Desdemona'],
    techniques: ['Dramatic irony', 'Foreshadowing', 'Epithet (honest)', 'Trust motif'],
    contextNote: 'Othello trustingly leaves Desdemona in Iago\'s care, calling him "honest" - deeply ironic.'
  },
  {
    id: 'othello-handkerchief',
    text: 'Othello',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 4',
    extract: `That handkerchief
Did an Egyptian to my mother give;
She was a charmer, and could almost read
The thoughts of people. She told her, while she kept it,
'Twould make her amiable and subdue my father
Entirely to her love; but if she lost it
Or made a gift of it, my father's eye
Should hold her loathed, and his spirits should hunt
After new fancies. She, dying, gave it me,
And bid me, when my fate would have me wive,
To give it her.`,
    themes: ['Jealousy', 'Magic and superstition', 'Love tokens', 'Fate'],
    characters: ['Othello', 'Desdemona'],
    techniques: ['Symbolism', 'Foreshadowing', 'Exotic imagery', 'Ominous tone'],
    contextNote: 'Othello describes the magical history of the handkerchief, which becomes the "proof" of Desdemona\'s guilt.'
  },
];

// ============================================
// HAMLET - William Shakespeare (A-Level)
// ============================================

export const hamletExtracts: LiteraryExtract[] = [
  {
    id: 'hamlet-to-be',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 1',
    extract: `To be, or not to be — that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And, by opposing, end them. To die, to sleep —
No more — and by a sleep to say we end
The heartache and the thousand natural shocks
That flesh is heir to — 'tis a consummation
Devoutly to be wished. To die, to sleep —
To sleep, perchance to dream. Ay, there's the rub,
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause.`,
    themes: ['Death and mortality', 'Existentialism', 'Hamlet\'s indecision', 'Suffering'],
    characters: ['Hamlet'],
    techniques: ['Soliloquy', 'Extended metaphor', 'Rhetorical questions', 'Philosophical reflection'],
    contextNote: 'Hamlet\'s most famous soliloquy, contemplating life, death, and whether to act.'
  },
  {
    id: 'hamlet-ghost-revelation',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 5',
    extract: `GHOST: Revenge his foul and most unnatural murder.
HAMLET: Murder?
GHOST: Murder most foul, as in the best it is;
But this most foul, strange, and unnatural.
...
Thus was I, sleeping, by a brother's hand
Of life, of crown, of queen at once dispatched,
Cut off even in the blossoms of my sin,
Unhouseled, disappointed, unaneled,
No reckoning made, but sent to my account
With all my imperfections on my head.`,
    themes: ['Revenge', 'The supernatural', 'Betrayal', 'Death and the afterlife'],
    characters: ['Ghost', 'Hamlet'],
    techniques: ['Revelation', 'Biblical imagery', 'Emotional language', 'Imperative'],
    contextNote: 'The Ghost reveals to Hamlet that Claudius murdered him, setting the revenge plot in motion.'
  },
  {
    id: 'hamlet-antic-disposition',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 1, Scene 5',
    extract: `Here, as before, never, so help you mercy,
How strange or odd soe'er I bear myself —
As I perchance hereafter shall think meet
To put an antic disposition on —
That you, at such times seeing me, never shall,
With arms encumber'd thus, or this head-shake,
Or by pronouncing of some doubtful phrase,
As "Well, well, we know," or "We could, an if we would,"
Or "If we list to speak," or "There be, an if they might,"
Or such ambiguous giving out, to note
That you know aught of me — this not to do,
So grace and mercy at your most need help you, Swear.`,
    themes: ['Madness and sanity', 'Deception', 'Revenge', 'Appearance vs reality'],
    characters: ['Hamlet', 'Horatio', 'Marcellus'],
    techniques: ['Dramatic irony', 'Foreshadowing', 'Oath-taking', 'Ambiguity'],
    contextNote: 'Hamlet tells his friends he may pretend to be mad - raising questions about real vs feigned madness.'
  },
  {
    id: 'hamlet-mousetrap',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 2',
    extract: `The play's the thing
Wherein I'll catch the conscience of the King.
...
HAMLET: He poisons him i' the garden for his estate. His name's
Gonzago. The story is extant, and written in very choice Italian.
You shall see anon how the murderer gets the love of Gonzago's wife.
OPHELIA: The King rises.
HAMLET: What, frighted with false fire?
...
GUILDENSTERN: The King, sir —
HAMLET: Ay, sir, what of him?
GUILDENSTERN: Is in his retirement, marvellous distempered.`,
    themes: ['Truth and revelation', 'Theatre and performance', 'Conscience and guilt', 'Revenge'],
    characters: ['Hamlet', 'Claudius', 'Ophelia'],
    techniques: ['Play within a play', 'Dramatic irony', 'Symbolism', 'Metatheatre'],
    contextNote: 'Hamlet stages a play to test Claudius\'s guilt - the King\'s reaction confirms his crime.'
  },
  {
    id: 'hamlet-gertrude-closet',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 3, Scene 4',
    extract: `Look here upon this picture, and on this,
The counterfeit presentment of two brothers.
See what a grace was seated on this brow:
Hyperion's curls, the front of Jove himself,
An eye like Mars to threaten and command,
A station like the herald Mercury
New-lighted on a heaven-kissing hill —
A combination and a form indeed
Where every god did seem to set his seal
To give the world assurance of a man.
This was your husband. Look you now what follows.
Here is your husband, like a mildewed ear
Blasting his wholesome brother.`,
    themes: ['Appearance vs reality', 'Corruption', 'Family', 'Sexuality and disgust'],
    characters: ['Hamlet', 'Gertrude'],
    techniques: ['Comparison', 'Classical allusion', 'Imagery', 'Accusatory tone'],
    contextNote: 'Hamlet confronts Gertrude about her hasty remarriage, comparing his father to Claudius.'
  },
  {
    id: 'hamlet-yorick',
    text: 'Hamlet',
    author: 'William Shakespeare',
    location: 'Act 5, Scene 1',
    extract: `Alas, poor Yorick! I knew him, Horatio — a fellow of infinite
jest, of most excellent fancy. He hath borne me on his back a
thousand times, and now how abhorred in my imagination it is! My
gorge rises at it. Here hung those lips that I have kissed I know
not how oft. Where be your gibes now? Your gambols? Your songs?
Your flashes of merriment, that were wont to set the table on a roar?`,
    themes: ['Death and mortality', 'Memory', 'Life\'s transience', 'Memento mori'],
    characters: ['Hamlet', 'Horatio', 'Yorick\'s skull'],
    techniques: ['Apostrophe', 'Rhetorical questions', 'Pathos', 'Symbolism'],
    contextNote: 'Hamlet meditates on death while holding the skull of the court jester he knew as a child.'
  },
];

// ============================================
// THE GREAT GATSBY - F. Scott Fitzgerald (A-Level)
// ============================================

export const greatGatsbyExtracts: LiteraryExtract[] = [
  {
    id: 'gatsby-green-light',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 1',
    extract: `He stretched out his arms toward the dark water in a curious way, and, far as I was from him, I could have sworn he was trembling. Involuntarily I glanced seaward — and distinguished nothing except a single green light, minute and far away, that might have been the end of a dock. When I looked once more for Gatsby he had vanished, and I was alone again in the unquiet darkness.`,
    themes: ['The American Dream', 'Hope and longing', 'Gatsby\'s obsession', 'Symbolism'],
    characters: ['Gatsby', 'Nick'],
    techniques: ['Symbolism', 'Mystery', 'First person narration', 'Imagery'],
    contextNote: 'Nick first sees Gatsby reaching toward the green light on Daisy\'s dock - a symbol of his dreams.'
  },
  {
    id: 'gatsby-shirts',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 5',
    extract: `He took out a pile of shirts and began throwing them, one by one, before us, shirts of sheer linen and thick silk and fine flannel, which lost their folds as they fell and covered the table in many-coloured disarray. While we admired he brought more and the soft rich heap mounted higher — shirts with stripes and scrolls and plaids in coral and apple-green and lavender and faint orange, with monograms of Indian blue. Suddenly, with a strained sound, Daisy bent her head into the shirts and began to cry stormily.
"They're such beautiful shirts," she sobbed, her voice muffled in the thick folds. "It makes me sad because I've never seen such — such beautiful shirts before."`,
    themes: ['Wealth and materialism', 'The American Dream', 'Love and regret', 'Illusion vs reality'],
    characters: ['Gatsby', 'Daisy', 'Nick'],
    techniques: ['Symbolism', 'Sensory detail', 'Emotional climax', 'Irony'],
    contextNote: 'Gatsby shows Daisy his wealth; her tears suggest regret for choosing Tom over Gatsby years ago.'
  },
  {
    id: 'gatsby-valley-ashes',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 2',
    extract: `About half way between West Egg and New York the motor road hastily joins the railroad and runs beside it for a quarter of a mile, so as to shrink away from a certain desolate area of land. This is a valley of ashes — a fantastic farm where ashes grow like wheat into ridges and hills and grotesque gardens; where ashes take the forms of houses and chimneys and rising smoke and, finally, with a transcendent effort, of men who move dimly and already crumbling through the powdery air.
...
But above the gray land and the spasms of bleak dust which drift endlessly over it, you perceive, after a moment, the eyes of Doctor T. J. Eckleburg.`,
    themes: ['The American Dream (failure)', 'Social class', 'Moral decay', 'God and morality'],
    characters: ['Nick'],
    techniques: ['Symbolism', 'Dystopian imagery', 'Contrast', 'Setting'],
    contextNote: 'The valley of ashes, a wasteland between wealthy areas, symbolizes moral decay and the underside of wealth.'
  },
  {
    id: 'gatsby-his-dream',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 6',
    extract: `His heart beat faster and faster as Daisy's white face came up to his own. He knew that when he kissed this girl, and forever wed his unutterable visions to her perishable breath, his mind would never romp again like the mind of God. So he waited, listening for a moment longer to the tuning-fork that had been struck upon a star. Then he kissed her. At his lips' touch she blossomed for him like a flower and the incarnation was complete.`,
    themes: ['Love and idealism', 'The American Dream', 'Illusion vs reality', 'Gatsby\'s past'],
    characters: ['Gatsby', 'Daisy'],
    techniques: ['Religious imagery', 'Metaphor', 'Romantic idealization', 'Symbolism'],
    contextNote: 'Nick imagines Gatsby\'s first kiss with Daisy, revealing how Gatsby transformed her into a dream.'
  },
  {
    id: 'gatsby-final-paragraph',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 9',
    extract: `Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter — to-morrow we will run faster, stretch out our arms farther.... And one fine morning ——
So we beat on, boats against the current, borne back ceaselessly into the past.`,
    themes: ['The American Dream', 'Time and the past', 'Hope and futility', 'Tragedy'],
    characters: ['Gatsby', 'Nick'],
    techniques: ['Extended metaphor', 'Symbolism', 'First person plural', 'Philosophical reflection'],
    contextNote: 'The novel\'s famous final lines reflect on Gatsby\'s dream and the universal human struggle against time.'
  },
  {
    id: 'gatsby-careless-people',
    text: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    location: 'Chapter 9',
    extract: `They were careless people, Tom and Daisy — they smashed up things and creatures and then retreated back into their money or their vast carelessness, or whatever it was that kept them together, and let other people clean up the mess they had made....`,
    themes: ['Wealth and privilege', 'Moral corruption', 'Social class', 'Justice'],
    characters: ['Tom', 'Daisy', 'Nick'],
    techniques: ['Judgement', 'Metaphor', 'Social criticism', 'Reflection'],
    contextNote: 'Nick\'s damning verdict on Tom and Daisy after Gatsby\'s death - they escape without consequences.'
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all extracts for a specific text
 */
export function getExtractsForText(textName: string): LiteraryExtract[] {
  const normalizedName = textName.toLowerCase();

  // GCSE Texts
  if (normalizedName.includes('macbeth')) return macbethExtracts;
  if (normalizedName.includes('christmas carol')) return christmasCarolExtracts;
  if (normalizedName.includes('jekyll') || normalizedName.includes('hyde')) return jekyllHydeExtracts;
  if (normalizedName.includes('inspector calls')) return inspectorCallsExtracts;
  if (normalizedName.includes('romeo') || normalizedName.includes('juliet')) return romeoJulietExtracts;
  if (normalizedName.includes('frankenstein')) return frankensteinExtracts;
  if (normalizedName.includes('great expectations')) return greatExpectationsExtracts;
  if (normalizedName.includes('animal farm')) return animalFarmExtracts;

  // A-Level Texts
  if (normalizedName.includes('othello')) return othelloExtracts;
  if (normalizedName.includes('hamlet')) return hamletExtracts;
  if (normalizedName.includes('gatsby') || normalizedName.includes('great gatsby')) return greatGatsbyExtracts;

  return [];
}

/**
 * Find extracts relevant to a specific theme/subtopic
 */
export function findExtractsForTheme(textName: string, theme: string): LiteraryExtract[] {
  const extracts = getExtractsForText(textName);
  const normalizedTheme = theme.toLowerCase();

  return extracts.filter(extract =>
    extract.themes.some(t => t.toLowerCase().includes(normalizedTheme)) ||
    extract.characters.some(c => normalizedTheme.includes(c.toLowerCase())) ||
    extract.techniques.some(t => normalizedTheme.includes(t.toLowerCase()))
  );
}

/**
 * Get a random extract for a text and theme
 */
export function getRandomExtractForTheme(textName: string, theme: string): LiteraryExtract | null {
  const relevantExtracts = findExtractsForTheme(textName, theme);

  if (relevantExtracts.length === 0) {
    // Fall back to any extract from that text
    const allExtracts = getExtractsForText(textName);
    if (allExtracts.length === 0) return null;
    return allExtracts[Math.floor(Math.random() * allExtracts.length)];
  }

  return relevantExtracts[Math.floor(Math.random() * relevantExtracts.length)];
}

/**
 * Get all available texts
 */
export function getAvailableTexts(): string[] {
  return [
    // GCSE Texts
    'Macbeth',
    'A Christmas Carol',
    'The Strange Case of Dr Jekyll and Mr Hyde',
    'An Inspector Calls',
    'Romeo and Juliet',
    'Frankenstein',
    'Great Expectations',
    'Animal Farm',
    // A-Level Texts
    'Othello',
    'Hamlet',
    'The Great Gatsby'
  ];
}
