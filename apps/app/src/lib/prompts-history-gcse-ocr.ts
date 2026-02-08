// OCR GCSE History B (Schools History Project) (J411) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/history-b-schools-history-project-j411-from-2016/

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// OCR GCSE HISTORY B SPECIFICATION DETAILS (J411)
// ============================================================================

const OCR_GCSE_HIST_ASSESSMENT_OBJECTIVES = `
## OCR GCSE History B Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key features and characteristics of the periods studied | 10-20% |
| **AO2** | Explain and analyse historical events and periods using second-order concepts | 10-20% |
| **AO3** | Analyse, evaluate and use sources to make substantiated judgements | 10-20% |
| **AO4** | Analyse, evaluate and make substantiated judgements about interpretations | 10-20% |

### Paper Structure
| Component | Title | Marks | Time | Weighting |
|-----------|-------|-------|------|-----------|
| **10** | Thematic Study (from 3 options) | 40 | 1 hour | 20% |
| **20** | British Depth Study (from 3 options) | 40 | 1 hour | 20% |
| **30** | History Around Us | 40 +10 SPaG | 1 hour | 25% |
| **40** | Period Study (from 3 options) | 40 | 45 mins | 17.5% |
| **50** | World Depth Study (from 3 options) | 40 | 45 mins | 17.5% |

### Question Types
- Short knowledge (2-5 marks)
- Explain questions (10 marks)
- Source analysis (10 marks)
- Interpretations (10 marks)
- Extended response (18 marks)

### Command Words
- **Describe**: Set out main characteristics
- **Explain**: Set out causes or effects
- **How far**: Reach a judgement about extent
- **How useful**: Evaluate sources
- **How convincing**: Evaluate interpretations

### Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, description | Describe features, state facts, identify characteristics from memory |
| **Medium** | Explanation, source analysis, interpretation | Explain causes/consequences, analyse source utility, interpret evidence |
| **Hard** | Evaluation, synthesis, sustained judgement | Assess interpretations, evaluate extent/significance, construct sustained arguments with conclusion |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires evaluation of multiple factors and their relative importance
- Must critically assess sources or interpretations (not just describe them)
- Demands synthesis of knowledge across different aspects of a period/topic
- Requires reaching and sustaining a judgement throughout the response
- Must consider counter-arguments and weigh evidence before concluding
`;

const OCR_GCSE_HIST_QUESTION_TEMPLATES = `
## Authentic OCR GCSE History B Question Formats

### Type 1: Knowledge Questions (2-5 marks)
Format: "Describe [feature/event]" or "What can you learn...?"
**Examples:**
- "Describe two features of medieval hospitals" [4 marks]
- "What can you learn from this source about...?" [5 marks]
Marking: Point-marked or levels

### Type 2: Explain Questions (10 marks)
Format: "Explain why [event/change occurred]"
**Examples:**
- "Explain why there were changes in public health in nineteenth-century Britain" [10 marks]
- "Explain why the Normans were able to control England by 1087" [10 marks]

**10-Mark Levels:**
- Level 5 (9-10): Comprehensive; analytical; excellent detail
- Level 4 (7-8): Thorough; developed explanation; good detail
- Level 3 (5-6): Sound; explained answer; some detail
- Level 2 (3-4): Basic; some explanation; limited detail
- Level 1 (1-2): Limited; minimal explanation

### Type 3: Source Analysis (10 marks)
Format: "How useful is this source for understanding...?" or "Study Sources A and B. How far do they give similar impressions of...?"
**Examples:**
- "How useful is this source for understanding medieval ideas about disease?" [10 marks]
Marking: Levels 1-5 based on analysis, evaluation, and context

### Type 4: Interpretations (10 marks)
Format: "How convincing is this interpretation of...?"
**Examples:**
- "How convincing is Interpretation A about the causes of the Norman Conquest?" [10 marks]
Marking: Levels 1-5 based on evaluation using own knowledge

### Type 5: Extended Response (18 marks)
Format: "'[Statement]' How far do you agree with this view?" or "Explain how [theme] changed over time"
**Examples:**
- "'The main reason for changes in policing was technology.' How far do you agree?" [18 marks]
- "Explain how ideas about disease and illness changed from medieval to modern times" [18 marks]

**18-Mark Levels:**
- Level 6 (16-18): Sophisticated; analytical; comprehensive knowledge
- Level 5 (13-15): Thorough; well-developed; detailed knowledge
- Level 4 (10-12): Sound; explained; good knowledge
- Level 3 (7-9): Developed; reasonable knowledge
- Level 2 (4-6): Basic; some knowledge
- Level 1 (1-3): Limited; minimal knowledge
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - THE PEOPLE'S HEALTH c.1250-PRESENT
// ============================================================================

const PEOPLES_HEALTH_KNOWLEDGE = `
## THE PEOPLE'S HEALTH c.1250-PRESENT (OCR)

### PART 1: MEDIEVAL PERIOD c.1250-1500

**Causes of Disease - Medieval Understanding:**
- **Four Humours**: Blood, Phlegm, Yellow Bile, Black Bile (from Galen/Hippocrates)
- **Miasma**: Bad air from decay caused disease
- **Supernatural**: God's punishment for sin; astrology
- **Imbalance**: Disease from humour imbalance

**Medical Practitioners:**
| Type | Training | Role |
|------|----------|------|
| Physicians | University; 7+ years | Diagnosed; prescribed |
| Apothecaries | Apprenticeship | Made medicines |
| Barber-surgeons | Apprenticeship | Surgery; bleeding |
| Wise women | Local tradition | Herbs; midwifery |

**Role of the Church:**
- Controlled education; Galen accepted as truth
- Ran hospitals (~1,100 in England) - care not cure
- Prayer and pilgrimage as treatment
- Banned dissection until 14th century

**The Black Death 1348-1349:**
- Killed 30-50% of population
- **Contemporary explanations**: God's punishment; miasma; planets aligned; Jewish wells
- **Treatments**: Flagellation; bleeding; herbs; quarantine; posies
- **Impact**: Labour shortage; wages rose; some questioned Church

**Surgery:**
- Limited: External wounds; amputations; bloodletting
- No anaesthetics or antiseptics
- High mortality from shock/infection
- John of Arderne: Developed techniques for treating fistulas

---

### PART 2: EARLY MODERN PERIOD c.1500-1750

**Key Individuals:**

**Vesalius (1514-1564):**
- Conducted own dissections at Padua
- "On the Fabric of the Human Body" (1543)
- Proved Galen's errors (based on animal dissection)
- **Significance**: Challenged authority; encouraged observation

**Harvey (1578-1657):**
- English physician; studied at Padua
- Discovered blood circulation (published 1628)
- Proved Galen wrong about blood made in liver
- Used experiments and mathematical calculations
- **Significance**: Scientific method applied to medicine

**Factors for Change:**
- **Printing press**: Spread new ideas
- **Renaissance**: Questioning ancient authority
- **Reformation**: Less Church control
- **Microscope**: Van Leeuwenhoek saw microorganisms (1683)

**Continuity:**
- Treatments largely unchanged (bleeding, purging)
- Four humours still influential
- Most people used traditional remedies
- No understanding of disease cause

**Great Plague 1665:**
- 100,000 died in London
- Same old explanations (miasma, God)
- Government: Quarantine; pest houses; killing dogs/cats
- Shows limited medical progress

---

### PART 3: INDUSTRIAL PERIOD c.1750-1900

**Public Health Problems:**
- Rapid urbanisation; overcrowding
- Contaminated water; open sewers
- Cholera epidemics: 1831-32, 1848-49, 1853-54, 1866
- Life expectancy in industrial cities: ~26 years

**Key Individuals:**

**Edward Jenner (1749-1823):**
- Observed milkmaids immune to smallpox
- 1796: Vaccinated James Phipps with cowpox
- Published findings 1798
- **Opposition**: Religious; safety concerns; didn't know why it worked
- **Government**: Free vaccination 1840; compulsory 1853

**John Snow (1854):**
- Proved cholera spread by contaminated water
- Broad Street pump investigation
- **Significance**: Evidence-based approach; but miasma theory persisted

**Edwin Chadwick (1842):**
- Report on Sanitary Conditions of the Labouring Population
- Showed link between dirt and disease
- Still believed in miasma but recommendations worked
- Led to 1848 Public Health Act (optional)

**Germ Theory:**
- **Pasteur (1861)**: Proved microorganisms caused decay
- **Koch (1876+)**: Identified specific bacteria (anthrax, TB, cholera)
- **Significance**: Finally understood disease cause

**Surgery Revolution:**

**Anaesthetics:**
- Nitrous oxide (Davy 1799)
- Ether (1846)
- Chloroform (Simpson 1847)
- Queen Victoria used chloroform (1853)

**Antiseptics:**
- **Lister (1867)**: Carbolic acid spray
- Reduced death rate from 46% to 15%
- **Opposition**: Slowed operations; irritated skin

**Public Health Acts:**
- **1848**: Optional Local Boards of Health
- **1875**: Compulsory clean water, sewers, housing
- **Why 1875 worked**: Germ theory; wider franchise; compulsory

---

### PART 4: MODERN PERIOD c.1900-PRESENT

**Key Developments:**

**Diagnosis:**
- X-rays (Röntgen 1895)
- Blood pressure monitoring
- CT/MRI scans
- Genetic testing

**Treatment:**

**Antibiotics:**
- **Fleming (1928)**: Discovered penicillin
- **Florey and Chain (1940s)**: Developed mass production
- WWII: US funding for production
- Transformed infection treatment

**Surgery:**
- Blood transfusions (Landsteiner 1901 - blood groups)
- Organ transplants (first heart transplant 1967)
- Keyhole surgery
- Robotic surgery

**Prevention:**
- Vaccination programmes (polio, measles, etc.)
- Health education (smoking, diet)
- Screening programmes (cancer)
- Clean Air Acts

**NHS (1948):**
- Aneurin Bevan
- Free healthcare at point of use
- Funded by taxation/National Insurance
- Major impact on public health

---

### FACTORS AFFECTING CHANGE

| Factor | Examples |
|--------|----------|
| **War** | WWI: X-rays, blood transfusion. WWII: Penicillin |
| **Government** | Public Health Acts; NHS; vaccination |
| **Science/Technology** | Microscope; germ theory; DNA |
| **Individuals** | Jenner, Pasteur, Koch, Fleming |
| **Attitudes** | Renaissance; accepting germ theory |
| **Communication** | Printing press; medical journals |
| **Chance** | Fleming's accidental discovery |

---

### COMMON EXAM QUESTIONS

**18-Mark Questions:**
- "The most important factor in improving public health has been the role of government." How far do you agree?
- "Individuals have been the main cause of medical progress." How far do you agree?

**10-Mark Questions:**
- Explain why there was little medical progress in the medieval period.
- Explain why public health improved in the late 19th century.
- Explain the significance of the discovery of penicillin.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - CRIME AND PUNISHMENT c.1250-PRESENT
// ============================================================================

const CRIME_PUNISHMENT_KNOWLEDGE = `
## CRIME AND PUNISHMENT c.1250-PRESENT (OCR)

### PART 1: MEDIEVAL PERIOD c.1250-1500

**Types of Crime:**
- **Theft**: Most common; included poaching
- **Violent crime**: Assault; murder
- **Moral crimes**: Adultery; blasphemy
- **Treason**: Challenging the king

**Law Enforcement:**
- **Hue and cry**: Villagers chased criminals
- **Tithings**: Groups of 10 men responsible for each other
- **Parish constables**: Unpaid; part-time
- **Sheriffs**: King's representatives; ran courts
- No police force

**Courts:**
- **Manor courts**: Minor local crimes
- **Royal courts**: Serious crimes; King's justice
- **Church courts**: Clergy; moral crimes

**Punishments:**
- **Fines**: Most common punishment
- **Stocks and pillory**: Public humiliation
- **Corporal punishment**: Whipping; branding; mutilation
- **Capital punishment**: Hanging for serious crimes
- **Trial by ordeal**: Until 1215 (hot iron, water)

**Factors Influencing:**
- Strong Church influence
- Local communities responsible
- Punishment as deterrent and retribution
- Blood feud system declining

---

### PART 2: EARLY MODERN PERIOD c.1500-1750

**New Crimes:**
- **Vagrancy**: Increased due to enclosure; Poor Laws
- **Heresy/Religious crimes**: Protestant/Catholic persecution
- **Witchcraft**: Peak 1580s-1640s; ~500 executed in England
- **Poaching**: Game Laws protecting rich landowners
- **Smuggling**: High taxes on goods

**Witch Trials:**
- Peak during religious and political instability
- Matthew Hopkins "Witchfinder General" 1640s
- ~500 executed in England (fewer than continental Europe)
- Mainly older women; accusations often from neighbours
- Ended by 1700s as scientific thinking spread

**Punishments:**
- Increased use of capital punishment ("Bloody Code" beginning)
- Transportation began (to American colonies)
- Public executions: Deterrent; entertainment
- Branding and whipping continued

**Law Enforcement:**
- Still relied on constables and watchmen
- No professional police
- Thief-takers: Paid to catch criminals (e.g., Jonathan Wild)

---

### PART 3: INDUSTRIAL PERIOD c.1750-1900

**Impact of Industrialisation:**
- Rapid urbanisation
- Poverty and unemployment
- New property crimes
- Public order concerns (riots)

**The Bloody Code:**
- By 1820: ~200 crimes carried death penalty
- Included theft of goods over 5 shillings
- Many juries refused to convict
- Gradually repealed 1820s-1830s

**Transportation:**
- To Australia 1787-1868
- ~162,000 transported
- Alternative to death penalty
- Cheap labour for colonies
- Ended 1868

**Prison Reform:**

**John Howard (1726-1790):**
- "The State of the Prisons" (1777)
- Exposed terrible conditions
- Called for: Separation of prisoners; paid staff; sanitation
- Influenced 1779 Penitentiary Act

**Elizabeth Fry (1780-1845):**
- Reformed conditions for women prisoners at Newgate
- Education and work for prisoners
- Religious instruction
- Influenced treatment of women and children

**Pentonville (1842):**
- Model prison; separate system
- Individual cells; silence
- Reform through reflection
- Copied across country

**Police Development:**

**Bow Street Runners (1749):**
- Henry Fielding
- First professional detective force
- Paid; trained; organised

**Metropolitan Police (1829):**
- Robert Peel
- First professional police force
- Initially 3,000 officers
- "Peelers" or "Bobbies"
- Uniformed; unarmed
- By 1856: All areas required police force

---

### PART 4: MODERN PERIOD c.1900-PRESENT

**Changes in Crime:**
- Car crime (from 1900s)
- Computer/cyber crime
- Drug-related crime
- Terrorism
- Hate crimes recognised

**Police Development:**
- Increased specialisation (CID, Special Branch)
- Technology: Fingerprints (1901); DNA (1980s); CCTV
- Women police from 1919
- More diverse force
- Neighbourhood policing

**Punishment Changes:**

**Death Penalty:**
- Last execution 1964 (Ruth Ellis 1955 last woman)
- Abolished for murder 1965; all crimes 1998
- Debate continues

**Prison Today:**
- Focus on rehabilitation
- Open prisons
- Community sentences
- Electronic tagging
- Overcrowding issues

**Young Offenders:**
- Separate system from 1908
- Borstals (1902-1982)
- Youth courts
- Focus on rehabilitation

**Conscientious Objectors:**
- WWI and WWII
- 16,000+ in WWI; many imprisoned
- Shows changing attitudes to conscience

---

### KEY THEMES

| Theme | Over Time |
|-------|-----------|
| **Who enforces law?** | Community → Professional police |
| **Punishment aims** | Retribution/deterrent → Rehabilitation |
| **Capital punishment** | Common → Abolished |
| **Who decides law?** | King/Church → Parliament |
| **Treatment of young** | Same as adults → Separate system |

---

### COMMON EXAM QUESTIONS

**18-Mark Questions:**
- "Attitudes towards punishment have changed more than methods of enforcing the law." How far do you agree?
- "The main reason for changes in crime and punishment has been the role of government." How far do you agree?

**10-Mark Questions:**
- Explain why the Metropolitan Police was established in 1829.
- Explain why prisons changed in the 19th century.
- Explain why witchcraft trials took place in the early modern period.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - LIVING UNDER NAZI RULE 1933-1945
// ============================================================================

const LIVING_UNDER_NAZI_RULE_KNOWLEDGE = `
## LIVING UNDER NAZI RULE 1933-1945 (OCR)

### PART 1: ESTABLISHING THE NAZI DICTATORSHIP

**Hitler Becomes Chancellor (30 January 1933):**
- Appointed by Hindenburg; von Papen's influence
- Only 3 Nazis in cabinet of 12
- Conservatives thought they could control him

**Consolidation of Power:**
- **Reichstag Fire (27 Feb 1933)**: Emergency decree; civil liberties suspended
- **March Election**: Nazis won 44% with SA intimidation
- **Enabling Act (23 March 1933)**: Hitler could make laws without Reichstag
- **Trade unions banned (May 1933)**: Replaced by DAF
- **Other parties banned (July 1933)**: One-party state
- **Night of the Long Knives (30 June 1934)**: SA leadership killed
- **Death of Hindenburg (Aug 1934)**: Hitler becomes Führer

---

### PART 2: CONTROLLING GERMANY

**The Police State:**
- **SS (Schutzstaffel)**: Led by Himmler; elite force
- **Gestapo (Secret Police)**: Arrests without trial; informers
- **SD (Security Service)**: Intelligence gathering
- **Concentration camps**: Political prisoners; "asocials"
- **Courts**: People's Court; no fair trials

**Propaganda:**
- **Goebbels**: Minister of Propaganda
- **Control of media**: Radio, newspapers, film censored
- **Rallies**: Nuremberg rallies; mass spectacles
- **1936 Olympics**: Showcased "new Germany"
- **Book burnings**: "Un-German" books destroyed

---

### PART 3: NAZI ECONOMIC POLICIES

**Reducing Unemployment:**
- 6 million unemployed (1933) → 300,000 (1939)
- **RAD (Reich Labour Service)**: Compulsory work for young men
- **Autobahns**: Road building; public works
- **Rearmament**: Conscription from 1935
- **Invisible unemployment**: Jews, women removed from workforce

**Workers' Experience:**
- **DAF (German Labour Front)**: No unions; no strikes
- **Strength Through Joy (KdF)**: Leisure activities; holidays
- **Beauty of Labour**: Improved conditions (canteens, sports)
- **KdF Car (VW)**: Promised but never delivered
- Working hours increased; wages controlled

---

### PART 4: NAZI SOCIAL POLICIES

**Women:**
- **Nazi ideal**: "Kinder, Küche, Kirche" (Children, Kitchen, Church)
- **Encouraged**: Marriage loans; Mother's Cross (bronze 4+, silver 6+, gold 8+)
- **Discouraged**: Work outside home; higher education
- **Reality**: By late 1930s, needed women workers
- **Statistics**: Female employment rose from 4.8 million (1933) to 7.1 million (1939)

**Youth:**
- **Hitler Youth (boys)**: Military training; camping; ideology
- **League of German Maidens (girls)**: Domestic skills; fitness
- **Compulsory from 1939**: 8 million members
- **Education**: Nazi curriculum; race studies; PE emphasized

**Churches:**
- **Concordat (1933)**: Agreement with Catholic Church
- **Reich Church**: Nazi-controlled Protestant church
- **Confessing Church**: Opposition (Niemöller, Bonhoeffer)
- **Some Catholic opposition**: Bishop von Galen against euthanasia

---

### PART 5: PERSECUTION

**Persecution of Jews:**
| Date | Event |
|------|-------|
| April 1933 | Boycott of Jewish shops |
| 1933 | Jews banned from civil service, law, journalism |
| 1935 | Nuremberg Laws: Lost citizenship; banned from marrying Germans |
| November 1938 | Kristallnacht: 91 killed; 30,000 arrested; synagogues burned |
| 1939 | Jews must wear Star of David |
| 1941 | "Final Solution" begins |

**Other Groups Persecuted:**
- **Roma and Sinti**: Seen as "racially inferior"
- **Disabled**: Euthanasia programme (T4); ~70,000 killed
- **Homosexuals**: ~15,000 sent to concentration camps
- **Jehovah's Witnesses**: Refused to salute; military service
- **"Asocials"**: Homeless; alcoholics; "work-shy"

---

### PART 6: OPPOSITION AND RESISTANCE

**Types of Opposition:**

**Youth Opposition:**
- **Edelweiss Pirates**: Working class; refused to join HY
- **Swing Youth**: Jazz; American culture; non-conformist

**Church Opposition:**
- **Confessing Church**: Niemöller; Bonhoeffer
- **Bishop von Galen**: Spoke against euthanasia (1941)

**Military Opposition:**
- **July Plot (1944)**: Stauffenberg's bomb attempt
- Executed after failure

**Other Resistance:**
- **White Rose**: Students distributing anti-Nazi leaflets (Scholl siblings)
- Communist underground

**Why Opposition Was Limited:**
- Terror and fear
- Many genuinely supported Nazis
- Propaganda effective
- Economic improvements
- Foreign policy successes
- Risk to family

---

### KEY STATISTICS

| Topic | Statistic |
|-------|-----------|
| Unemployment 1933 | 6 million |
| Unemployment 1939 | 300,000 |
| Hitler Youth 1939 | 8 million members |
| Kristallnacht deaths | 91 |
| Kristallnacht arrests | 30,000 |
| T4 victims | ~70,000 |
| Jews in Germany 1933 | ~500,000 |
| Holocaust victims | 6 million |

---

### INTERPRETATIONS TO CONSIDER

**On Nazi Control:**
- **Intentionalist**: Hitler planned everything; total control
- **Structuralist**: Chaotic system; "working towards the Führer"

**On German Support:**
- **Consent**: Many genuinely supported Nazis
- **Coercion**: Terror kept people in line
- **"Inner emigration"**: Private opposition; public conformity

**On Resistance:**
- Traditional view: Little resistance; Germans brainwashed
- Revisionist: Many small acts of resistance; terror prevented more
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - THE NORMANS
// ============================================================================

const NORMANS_KNOWLEDGE = `
## THE NORMANS c.1066-1100 (OCR)

### PART 1: CAUSES OF THE NORMAN CONQUEST

**Claimants to the Throne 1066:**

**Harold Godwinson:**
- Earl of Wessex; most powerful noble
- Chosen by Witan (council)
- Claimed Edward promised throne on deathbed
- English; strong military leader

**William of Normandy:**
- Duke of Normandy
- Claimed Edward promised throne in 1051
- Harold allegedly swore oath to support William (1064)
- Pope supported his claim

**Harald Hardrada:**
- King of Norway
- Claimed throne through Magnus (previous agreement)
- Supported by Harold's brother Tostig

---

### PART 2: THE BATTLES OF 1066

**Battle of Stamford Bridge (25 September 1066):**
- Harold marched north (190 miles in 4 days)
- Defeated Vikings; Hardrada and Tostig killed
- Viking threat ended
- English army exhausted

**Battle of Hastings (14 October 1066):**

**English Forces:**
- ~7,000 men; infantry and housecarls
- Shield wall formation on Senlac Hill
- Tired from march south

**Norman Forces:**
- ~7,000 men; cavalry, infantry, archers
- More varied tactics
- Fresh troops

**Key Events:**
- English held firm initially
- Feigned retreat broke English line
- Harold killed (arrow in eye - debated)
- English defeated; William victorious

**Why William Won:**
- Better tactics (combined arms)
- Feigned retreat effective
- English tired from Stamford Bridge
- Harold's death decisive
- Luck/timing: Vikings weakened England

---

### PART 3: ESTABLISHING CONTROL

**Submission of Earls:**
- London submitted after William threatened it
- Edgar Atheling (claimant) submitted
- William crowned Christmas Day 1066

**Norman Takeover:**
- 1066-1070: Gradual replacement of English earls
- Rewarding loyal followers with land
- Building castles across England

**Castles:**
- **Motte and bailey**: Quick to build; wood
- **Stone castles**: Later; more permanent
- **Purpose**: Military control; symbols of power; administration
- **Key castles**: Tower of London; Windsor; York

**Harrying of the North (1069-1070):**
- Response to northern rebellions
- Scorched earth policy
- Villages destroyed; crops burned; livestock killed
- ~100,000 may have died
- North devastated for years
- **Significance**: Showed Norman ruthlessness; ended resistance

---

### PART 4: NORMAN ENGLAND

**Feudal System:**
| Level | Role |
|-------|------|
| King | Owned all land; granted to nobles |
| Tenants-in-chief | Lords/bishops; held land from king |
| Under-tenants | Knights; held land from lords |
| Villeins/peasants | Worked the land; owed service |

**Changes to Landholding:**
- By 1086: Only 2 English earls remained
- 200 Norman barons held half of England
- Church lands controlled by Normans
- Forest laws: Huge royal forests; harsh penalties

**The Church:**
- Lanfranc: Archbishop of Canterbury
- Norman bishops replaced English
- Church reform; new cathedrals
- Closer ties to Rome

**Domesday Book (1086):**
- Survey of England's resources
- **Purpose**: Know who owned what; taxation
- **Shows**: Norman takeover complete; detailed record
- 13,418 places recorded

**Government:**
- **Sheriffs**: Norman replacements; ran shires
- **Royal courts**: King's justice extended
- **Taxation**: More efficient; heavier
- **Language**: Norman French in court; Latin in Church

---

### PART 5: NORMAN CULTURE

**Architecture:**
- **Romanesque style**: Round arches; thick walls
- **Cathedrals**: Durham; Canterbury; Winchester
- **Castles**: Stone keeps; curtain walls
- **Churches**: Replaced wooden Saxon churches

**Language:**
- Norman French: Language of court and law
- Latin: Church and official documents
- English: Peasants; gradually mixed
- Many French words entered English

---

### KEY DATES

| Year | Event |
|------|-------|
| January 1066 | Edward the Confessor dies |
| January 1066 | Harold crowned king |
| September 1066 | Battle of Stamford Bridge |
| October 1066 | Battle of Hastings |
| December 1066 | William crowned |
| 1068-1070 | Northern rebellions |
| 1069-1070 | Harrying of the North |
| 1070 | Lanfranc becomes Archbishop |
| 1086 | Domesday Book completed |
| 1087 | William I dies |

---

### COMMON EXAM QUESTIONS

**18-Mark Questions:**
- "The main reason William won at Hastings was Harold's mistakes." How far do you agree?
- "Castles were the most important method the Normans used to control England." How far do you agree?

**10-Mark Questions:**
- Explain why William won the Battle of Hastings.
- Explain the significance of the Harrying of the North.
- Explain how the Normans used castles to control England.
`;

// ============================================================================
// SOURCE AND INTERPRETATION GUIDANCE
// ============================================================================

const OCR_SOURCE_GUIDANCE = `
## SOURCE AND INTERPRETATION GUIDANCE FOR OCR

### "How useful is this source for understanding...?" (10 marks)

**Structure:**
1. **Content**: What does the source tell us?
2. **Provenance**: Who created it? When? Why?
3. **Context**: What do you know about this period?
4. **Evaluation**: What are its strengths and limitations?
5. **Judgement**: How useful overall?

**Level Descriptors:**
- **Level 5 (9-10)**: Comprehensive evaluation; excellent contextual knowledge
- **Level 4 (7-8)**: Thorough evaluation; good contextual knowledge
- **Level 3 (5-6)**: Sound evaluation; some context
- **Level 2 (3-4)**: Basic evaluation; limited context
- **Level 1 (1-2)**: Minimal evaluation

### "How convincing is this interpretation about...?" (10 marks)

**Structure:**
1. **Identify the interpretation's argument**
2. **Test against own knowledge**
3. **Consider other interpretations**
4. **Reach substantiated judgement**

**Key Points:**
- Interpretations are historians' views
- Can be convincing even if not complete
- Use specific knowledge to evaluate
- Consider what interpretation omits
`;

const OCR_GCSE_HIST_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE History B Mark Scheme Conventions

### 18-Mark Extended Response Levels

**Level 6 (16-18 marks):**
- Sophisticated analysis throughout
- Excellent knowledge and understanding
- Comprehensive coverage of key aspects
- Well-supported, substantiated judgement
- Excellent structure and argument

**Level 5 (13-15 marks):**
- Thorough analysis
- Very good knowledge and understanding
- Good coverage of aspects
- Supported judgement
- Clear structure

**Level 4 (10-12 marks):**
- Sound analysis
- Good knowledge and understanding
- Coverage of main aspects
- Judgement present with some support
- Generally clear structure

**Level 3 (7-9 marks):**
- Developed explanation
- Reasonable knowledge
- Some aspects covered
- Basic judgement
- Some structure

**Level 2 (4-6 marks):**
- Basic explanation
- Some knowledge
- Limited aspects
- Implicit judgement
- Limited structure

**Level 1 (1-3 marks):**
- Limited response
- Minimal knowledge
- Few valid points
- No judgement
- No clear structure

**0 marks:** No relevant content

### SPaG Marks (10 marks in Component 30)
- High performance (8-10): Consistently accurate; sophisticated vocabulary
- Intermediate (5-7): Generally accurate; good vocabulary
- Threshold (1-4): Some accuracy; basic vocabulary

### 10-Mark Question Levels

**Level 5 (9-10 marks):**
- Comprehensive analysis
- Excellent supporting detail
- Full evaluation

**Level 4 (7-8 marks):**
- Thorough analysis
- Good detail
- Good evaluation

**Level 3 (5-6 marks):**
- Sound analysis
- Some detail
- Some evaluation

**Level 2 (3-4 marks):**
- Basic points
- Limited detail
- Limited evaluation

**Level 1 (1-2 marks):**
- Minimal points
- Very limited detail
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  // Determine if we need source guidance
  const needsSourceGuidance = subtopic.toLowerCase().includes('source') || subtopic.toLowerCase().includes('interpretation') || difficulty === 'medium';

  let knowledgeSection = '';
  if (topicKnowledge) {
    knowledgeSection = `
## TOPIC-SPECIFIC KNOWLEDGE
Use this accurate historical knowledge when creating questions and model answers:

${topicKnowledge}
`;
  }

  let guidanceSection = '';
  if (needsSourceGuidance) {
    guidanceSection = `
${OCR_SOURCE_GUIDANCE}
`;
  }

  return `You are an expert OCR GCSE History examiner creating exam-style questions.

## OCR HISTORY STYLE
**OCR's Local Synthesis Approach:** Interpretive, comparative questions emphasizing local history integration and rigorous analytical assessment.
- **Local area history integration** - unique option allowing study of local area history alongside global historical events
- **Synthesis and comparative analysis** - emphasis on making comparisons and links between different historical periods
- **Wordier interpretive questions** - detailed, interpretive question stems requiring careful analysis and extended responses
- **Rigorous analytical assessment** - renowned for in-depth, academically challenging questions in humanities subjects
- **Clear structured application** - questions praised for clear structure with strong focus on practical historical application
- **Convincing analysis requirement** - mark schemes demand convincing, fully supported analysis of historical sources and contexts

${OCR_GCSE_HIST_ASSESSMENT_OBJECTIVES}

${OCR_GCSE_HIST_QUESTION_TEMPLATES}

${OCR_GCSE_HIST_MARK_SCHEME_CONVENTIONS}
${knowledgeSection}${guidanceSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic OCR Style**: Match real OCR History B paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Historical Accuracy**: Use specific dates, names, statistics from the topic knowledge provided
5. **Appropriate Difficulty**:
   - Easy: Describe/knowledge questions - recall and identification (4-5 marks)
   - Medium: Explain or source questions - analysis and interpretation (10 marks)
   - Hard: Extended response requiring sustained evaluation, analytical judgement, and comprehensive knowledge (18 marks)

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer (must include specific historical details)
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('history')}`;
}

export function getOCRGCSEHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short knowledge question (AO1).

**Question Types:**
- "Describe two features of..." [4 marks]
- "What can you learn from this source about...?" [5 marks]

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an explain or source-based question (AO2/AO3).

**Question Types:**
- "Explain why [event/development occurred]" [10 marks]
- "How useful is this source for understanding...?" [10 marks]
- "How convincing is this interpretation about...?" [10 marks]

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create an 18-mark extended response (AO1/AO2).

**Question Types:**
- "'[Statement]' How far do you agree with this view?" [18 marks]
- "Explain how [theme] changed over time" [18 marks]

**18-Mark Levels:**
- Level 6 (16-18): Sophisticated; analytical; comprehensive
- Level 5 (13-15): Thorough; well-developed; detailed
- Level 4 (10-12): Sound; explained; good knowledge
- Level 3 (7-9): Developed; reasonable knowledge
- Level 2 (4-6): Basic; some knowledge
- Level 1 (1-3): Limited; minimal knowledge

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  // Include relevant topic knowledge section if available
  let knowledgeContext = '';
  if (topicKnowledge) {
    knowledgeContext = `
**Use this historical knowledge for accuracy:**
${topicKnowledge.substring(0, 2000)}...
(Full knowledge available in system prompt)
`;
  }

  return `Generate an OCR GCSE History B question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${knowledgeContext}
**Important**: Model answers MUST include specific historical details (dates, names, statistics, events).

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific historical details",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

/**
 * History GCSE mark ranges based on OCR B specification question types.
 * Ranges provide flexibility while matching typical exam question formats.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 5 };   // Describe features, what can you learn - basic knowledge
    case 'medium':
      return { min: 8, max: 10 };  // Explain, source analysis, interpretation questions
    case 'hard':
      return { min: 16, max: 18 }; // Extended response requiring sustained analysis, evaluation, and judgement
  }
}

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getTopicSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // People's Health / Medicine
  if (topicLower.includes('health') || topicLower.includes('medicine') || topicLower.includes('disease')) {
    return PEOPLES_HEALTH_KNOWLEDGE;
  }

  // Crime and Punishment
  if (topicLower.includes('crime') || topicLower.includes('punishment') || topicLower.includes('police')) {
    return CRIME_PUNISHMENT_KNOWLEDGE;
  }

  // Living Under Nazi Rule
  if (topicLower.includes('nazi') || topicLower.includes('germany') &&
      (topicLower.includes('1933') || topicLower.includes('1945'))) {
    return LIVING_UNDER_NAZI_RULE_KNOWLEDGE;
  }

  // The Normans
  if (topicLower.includes('norman') || topicLower.includes('1066') || topicLower.includes('hastings')) {
    return NORMANS_KNOWLEDGE;
  }

  return '';
}
