// Edexcel GCSE History (1HI0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/history-2016.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL GCSE HISTORY SPECIFICATION DETAILS (1HI0)
// ============================================================================

const EDEXCEL_GCSE_HIST_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE History Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key features and characteristics of the periods studied | 10-20% |
| **AO2** | Explain and analyse historical events and periods using second-order concepts | 15-25% |
| **AO3** | Analyse, evaluate and use sources to make substantiated judgements | 10-20% |
| **AO4** | Analyse, evaluate and make substantiated judgements about interpretations | 10-20% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Thematic Study and Historic Environment | Thematic + Historic Environment | 52 | 1hr 15m | 30% |
| **Paper 2** | Period Study and British Depth Study | Period + British Depth | 64 | 1hr 45m | 40% |
| **Paper 3** | Modern Depth Study | Modern Depth Study | 52 | 1hr 20m | 30% |

### Question Types
- Short answer/describe (4 marks)
- Explain (12 marks)
- Source utility (8 marks)
- How far do you agree (16 marks + 4 SPaG)
- Interpretations (8, 4, 4, and 16 marks)

### Command Words
- **Describe**: Set out characteristics or events
- **Explain why**: Set out reasons why something happened
- **How useful**: Evaluate the source for a specific enquiry
- **How far do you agree**: Make and support a judgement
- **Give two things you can infer**: Deduce from source
`;

const EDEXCEL_GCSE_HIST_QUESTION_TEMPLATES = `
## Authentic Edexcel GCSE History Question Formats

### Type 1: Describe (4 marks)
Format: "Describe two features of..."
**Examples:**
- "Describe two features of the Spanish Armada campaign in 1588" [4 marks]
- "Describe two problems facing the Weimar Republic in 1919" [4 marks]
Marking: 2 marks per feature (identification + supporting detail)

### Type 2: Explain Why (12 marks)
Format: "Explain why [event/development occurred]"
**Examples:**
- "Explain why there was rapid change in medical treatment in the twentieth century" [12 marks]
- "Explain why there was opposition to Nazi rule" [12 marks]

**12-Mark Levels:**
- Level 4 (10-12): Analytical; complex explanation; excellent knowledge
- Level 3 (7-9): Developed explanation; good knowledge
- Level 2 (4-6): Simple explanation; some knowledge
- Level 1 (1-3): Basic statements; limited knowledge

### Type 3: Source Utility (8 marks)
Format: "How useful are Sources [A] and [B] for an enquiry into...?"
**Examples:**
- "How useful are Sources A and B for an enquiry into the development of the police force?" [8 marks]
Marking: Levels 1-4 based on analysis of content, provenance, and own knowledge

### Type 4: 16-Mark Essay (+ 4 SPaG)
Format: "'[Statement]' How far do you agree?" or "How far do you agree with [statement]?"
**Examples:**
- "'The main reason for the Nazis' rise to power was the Great Depression.' How far do you agree?" [16 marks + 4 SPaG]

**16-Mark Levels:**
- Level 4 (13-16): Complex analysis; sustained judgement; accurate detail
- Level 3 (9-12): Developed analysis; judgement present; good knowledge
- Level 2 (5-8): Simple explanation; basic judgement; some knowledge
- Level 1 (1-4): Basic statements; limited knowledge; no judgement

### Type 5: Paper 3 Interpretations Questions
**Question 1 (8 marks):** "How does Interpretation B differ from Interpretation A about...?"
**Question 2 (4 marks):** "Suggest one reason why these interpretations give different views..."
**Question 3 (4 marks):** "How useful is Interpretation D for an enquiry into...?"
**Question 4 (16 marks + 4 SPaG):** "How far do you agree with Interpretation [X] about...?"
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - WEIMAR AND NAZI GERMANY 1918-1939
// ============================================================================

const WEIMAR_NAZI_GERMANY_KNOWLEDGE = `
## WEIMAR AND NAZI GERMANY 1918-1939

### PART 1: THE WEIMAR REPUBLIC 1918-1929

**The Revolution of 1918-1919:**
- November 1918: Kaiser Wilhelm II abdicates; Germany becomes republic
- Friedrich Ebert (SPD) becomes first President
- January 1919: Spartacist Rising - communist uprising crushed by Freikorps
- Spartacist leaders Karl Liebknecht and Rosa Luxemburg killed
- February 1919: Weimar Constitution adopted

**The Weimar Constitution:**
- **President**: Elected every 7 years; appointed Chancellor; Article 48 emergency powers
- **Reichstag**: Elected by proportional representation (PR)
- **Bill of Rights**: Free speech, religion, equality
- **Weaknesses**: PR led to unstable coalitions; Article 48 open to abuse

**Treaty of Versailles (June 1919):**
- **Territory**: Lost 13% of land including Alsace-Lorraine, Polish Corridor, colonies
- **Military**: Army limited to 100,000; no tanks, air force, submarines; Rhineland demilitarized
- **Reparations**: £6.6 billion (set 1921)
- **War Guilt**: Article 231 - Germany accepted blame for WWI
- Called "Diktat" (dictated peace); politicians who signed called "November Criminals"

**Early Challenges 1919-1923:**
- **Kapp Putsch (March 1920)**: Right-wing coup attempt; defeated by general strike
- **Political violence**: Over 350 political assassinations 1919-1922
- **French occupation of Ruhr (January 1923)**: Passive resistance; economic collapse
- **Hyperinflation 1923**:
  - November 1923: 4.2 trillion marks = 1 US dollar
  - Savings wiped out; wages worthless
  - Middle class ruined; blamed Weimar
- **Munich Putsch (November 1923)**: Hitler's failed coup; 16 Nazis killed; Hitler imprisoned

**Stresemann Era (1923-1929):**
- Gustav Stresemann: Chancellor August-November 1923; Foreign Minister 1923-1929
- **Rentenmark**: New currency ended hyperinflation (November 1923)
- **Dawes Plan (1924)**: US loans; reparations restructured
- **Locarno Treaties (1925)**: Germany accepted western borders; "Spirit of Locarno"
- **League of Nations (1926)**: Germany admitted as permanent Council member
- **Young Plan (1929)**: Reparations reduced to £1.8 billion; extended to 1988
- **Golden Twenties**: Cultural flourishing; cabaret; Bauhaus; expressionism

**Were the Golden Twenties truly golden?**
- **Yes**: Economic recovery; cultural freedom; international respect; stable governments
- **No**: Unemployment remained high; farmers struggled; relied on US loans; extremists still active

---

### PART 2: HITLER'S RISE TO POWER 1929-1933

**Impact of the Great Depression:**
- Wall Street Crash (October 1929): US recalled loans
- Unemployment: 1.6 million (1929) → 6.1 million (1932)
- Middle class feared return of 1923; turned to extremes
- Brüning's government ruled by decree (Article 48)

**Why did people vote Nazi?**
- **Economic desperation**: Promised "Work and Bread"
- **Fear of communism**: Nazis promised to destroy KPD
- **Weak opposition**: SPD and KPD wouldn't cooperate
- **Propaganda**: Goebbels' modern techniques; Hitler's speeches
- **Appeal to all classes**: Something for everyone
- **SA intimidation**: Violence against opponents
- **Scapegoating**: Blamed Jews, Weimar, Versailles

**Nazi Electoral Success:**
| Date | Nazi Seats | % Vote |
|------|------------|--------|
| May 1928 | 12 | 2.6% |
| September 1930 | 107 | 18.3% |
| July 1932 | 230 | 37.3% |
| November 1932 | 196 | 33.1% |

**Hitler Becomes Chancellor (30 January 1933):**
- Von Papen persuaded Hindenburg to appoint Hitler
- Only 3 Nazis in cabinet of 12
- Conservatives believed they could "control" Hitler
- Key mistake: Underestimated Hitler's ruthlessness

---

### PART 3: NAZI DICTATORSHIP 1933-1939

**Consolidation of Power:**
- **Reichstag Fire (27 February 1933)**: Blamed on communists; Decree for Protection of People and State suspended civil liberties
- **March 1933 Election**: Nazis won 44% (288 seats) with SA intimidation
- **Enabling Act (23 March 1933)**: Gave Hitler power to make laws for 4 years; only SPD voted against
- **Trade unions banned (May 1933)**: Replaced by DAF (German Labour Front)
- **Other parties banned (July 1933)**: One-party state
- **Night of the Long Knives (30 June 1934)**: SS killed SA leadership including Röhm; 85+ killed
- **Hindenburg dies (2 August 1934)**: Hitler becomes Führer (President + Chancellor)
- **Army oath**: Soldiers swore personal loyalty to Hitler

**Nazi Police State:**
- **SS (Schutzstaffel)**: Led by Himmler; controlled police and camps
- **Gestapo**: Secret police; arrested opponents; used informers
- **Concentration camps**: Political prisoners; "asocials"; from 1933
- **Courts**: People's Court for political crimes; no fair trials

**Propaganda and Censorship:**
- **Goebbels**: Minister of Propaganda from March 1933
- **Control of media**: All newspapers, radio, film censored
- **Rallies**: Nuremberg Rallies - spectacular displays of Nazi power
- **1936 Olympics**: Showcased Nazi Germany to world
- **Book burnings**: "Un-German" books destroyed (May 1933)
- **Art**: "Degenerate art" banned; only approved Nazi art

**Nazi Economic Policies:**
- **Unemployment reduced**: 6 million (1933) → 300,000 (1939)
- **How?**:
  - RAD (Reich Labour Service): Compulsory work service
  - Autobahns and public works
  - Rearmament (conscription 1935)
  - Women and Jews pushed out of workforce
- **DAF (German Labour Front)**: Replaced unions; no strikes allowed
- **Strength Through Joy (KdF)**: Leisure activities; holidays; promised VW cars
- **Four Year Plan (1936)**: Prepare economy for war; self-sufficiency

**Nazi Social Policies:**

**Women:**
- **Nazi ideal**: "Kinder, Küche, Kirche" (Children, Kitchen, Church)
- **Encouraged**: Marriage loans; Mother's Cross (bronze 4+ children, silver 6+, gold 8+)
- **Discouraged**: Working; higher education; makeup; smoking
- **Reality**: By late 1930s, needed women workers for war economy

**Youth:**
- **Hitler Youth (boys)**: Military training; camping; Nazi ideology
- **League of German Maidens (girls)**: Domestic skills; fitness
- **Compulsory from 1936**: By 1939, 8 million members
- **Education**: Curriculum Nazified; race studies; PE emphasized

**Churches:**
- **Concordat (July 1933)**: Agreement with Catholic Church - stay out of politics
- **Reich Church**: Nazi-controlled Protestant church
- **Opposition**: Confessing Church (Bonhoeffer, Niemöller)

**Persecution of Minorities:**

**Jews:**
- **April 1933**: Boycott of Jewish shops; Jews banned from civil service
- **1935 Nuremberg Laws**: Jews lost citizenship; banned from marrying Germans
- **November 1938 Kristallnacht**: 91 killed; 30,000 sent to camps; synagogues burned
- **1939**: Jews must wear Star of David

**Other groups persecuted**: Roma, disabled, homosexuals, Jehovah's Witnesses, "asocials"

---

### KEY STATISTICS

| Topic | Statistic |
|-------|-----------|
| Hyperinflation peak | 4.2 trillion marks = $1 (Nov 1923) |
| US loans under Dawes Plan | $25 billion 1924-1930 |
| Peak unemployment | 6.1 million (1932) |
| Nazi peak vote | 37.3% (July 1932) |
| Unemployment 1939 | 300,000 |
| Hitler Youth membership 1939 | 8 million |
| Kristallnacht deaths | 91 |
| Kristallnacht arrests | 30,000 |

---

### COMMON EXAM QUESTIONS

**16-Mark Essay Questions:**
- "The main reason for the failure of the Weimar Republic was the Treaty of Versailles." How far do you agree?
- "Economic factors were the main reason for the Nazis' rise to power." How far do you agree?
- "Terror was the main method used by the Nazis to control Germany." How far do you agree?
- "Nazi policies towards women were a success." How far do you agree?

**12-Mark Explain Questions:**
- Explain why the Weimar Republic was unpopular in the years 1919-1923.
- Explain why Hitler was able to become Chancellor in January 1933.
- Explain why the Nazis were able to reduce unemployment.
- Explain why there was so little opposition to Nazi rule.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - MEDICINE IN BRITAIN c.1250-PRESENT
// ============================================================================

const MEDICINE_BRITAIN_KNOWLEDGE = `
## MEDICINE IN BRITAIN c.1250-PRESENT

### PART 1: MEDIEVAL MEDICINE c.1250-1500

**Ideas About Disease:**
- **Four Humours**: Blood, Phlegm, Yellow Bile, Black Bile (from Galen)
- **Miasma**: Bad air from rotting matter caused disease
- **Supernatural**: God sent disease as punishment; astrology
- **Treatment**: Balance humours through bleeding, purging, herbal remedies

**Medical Practitioners:**
| Type | Training | Patients | Cost |
|------|----------|----------|------|
| Physicians | 7+ years university | Wealthy | Very expensive |
| Apothecaries | Apprenticeship | Middle class | Moderate |
| Barber-surgeons | Apprenticeship | All | Cheap |
| Wise women | Local knowledge | Poor | Free/cheap |

**The Church's Role:**
- Controlled medical training; Galen's ideas accepted as truth
- Ran hospitals (about 1,100 in England) - focused on care not cure
- Banned dissection until 14th century
- Prayer and pilgrimage seen as cures

**The Black Death 1348-1349:**
- Killed 30-50% of English population
- **Causes suggested**: God's punishment; miasma; Jews; planets
- **Treatments tried**: Prayer; flagellation; bleeding; posies; isolation
- **Impact**: Labour shortage; some questioned Church; no medical advance

**Surgery:**
- Limited to external wounds, amputations, bloodletting
- No anaesthetics; no understanding of infection
- Battlefield surgeons (e.g., John of Arderne) developed techniques
- High death rate from shock and infection

---

### PART 2: RENAISSANCE MEDICINE c.1500-1700

**Key Individuals:**

**Andreas Vesalius (1514-1564):**
- Professor at Padua; conducted own dissections
- "On the Fabric of the Human Body" (1543)
- Proved Galen made errors (studied animals not humans)
- **Significance**: Encouraged direct observation; challenged ancient authority

**William Harvey (1578-1657):**
- English doctor; studied at Padua
- Discovered circulation of blood (published 1628)
- Used experiments and dissection
- Proved Galen wrong about blood made in liver
- **Significance**: Scientific method; but no immediate practical use

**Factors for Change:**
- **Printing press**: Ideas spread faster
- **Renaissance**: Questioning ancient authority
- **Reformation**: Less Church control
- **Scientific Revolution**: Royal Society (1660); experimentation valued

**Limitations:**
- Treatments largely unchanged (bleeding, purging)
- Still believed in miasma and humours
- Galen still taught in universities
- Change slow to reach ordinary people

**The Great Plague 1665:**
- Last major plague in England; 100,000 died in London
- Same old explanations and treatments
- Government measures: Quarantine; pest houses; killing dogs and cats
- Shows limited medical progress

---

### PART 3: 18th AND 19th CENTURY c.1700-1900

**Key Developments:**

**Edward Jenner (1749-1823) - Vaccination:**
- Observed milkmaids didn't get smallpox
- 1796: Vaccinated James Phipps with cowpox
- Published findings 1798
- **Opposition**: Religious; safety concerns; anti-vaxxers
- **Government action**: Free vaccination 1840; compulsory 1853

**Germ Theory:**
- **Louis Pasteur (1861)**: Proved germs caused decay
- **Robert Koch (1876+)**: Identified specific bacteria (anthrax, TB, cholera)
- **Significance**: Finally explained cause of disease; disproved spontaneous generation

**Surgery Revolution:**

**Anaesthetics:**
- Nitrous oxide (laughing gas) - Humphry Davy 1799
- Ether - first surgical use 1846
- Chloroform - James Simpson 1847; used on Queen Victoria 1853
- **Problem**: Allowed longer operations → more deaths from infection

**Antiseptics:**
- **Joseph Lister (1867)**: Carbolic acid spray
- Reduced death rate from 46% to 15%
- **Opposition**: Slowed operations; irritated hands; some didn't accept germ theory
- **Aseptic surgery**: By 1900s, sterile operating theatres

**Public Health:**

**Problems in Industrial Towns:**
- Overcrowding; no clean water; no sewers
- Cholera epidemics: 1831-32, 1848-49, 1853-54, 1866
- **John Snow (1854)**: Proved cholera spread by water (Broad Street pump)

**Government Action:**
- **Chadwick Report (1842)**: Showed link between dirt and disease
- **1848 Public Health Act**: Local Boards of Health (optional)
- **1875 Public Health Act**: Compulsory clean water, sewers, housing standards
- **Why 1875 worked**: Germ theory accepted; compulsory; wider franchise

---

### PART 4: MODERN MEDICINE c.1900-PRESENT

**Key Developments:**

**X-rays (1895):**
- Wilhelm Röntgen discovered X-rays
- Immediate medical use; essential in WWI
- Allowed diagnosis without surgery

**Blood Transfusions:**
- Karl Landsteiner: Blood groups (1901)
- WWI: Blood could be stored; transfusions practical
- Blood banks established WWII

**Antibiotics:**
- **Alexander Fleming (1928)**: Discovered penicillin mold killed bacteria
- Didn't develop it further
- **Florey and Chain (1940s)**: Mass-produced penicillin
- **WWII**: US funding for mass production
- **Impact**: First antibiotic; transformed surgery and infection treatment

**DNA (1953):**
- Watson and Crick (using Rosalind Franklin's X-ray data)
- Foundation for genetic medicine
- Human Genome Project (2003)

**NHS (1948):**
- Aneurin Bevan created NHS
- Free healthcare for all at point of use
- Funded by National Insurance and taxation
- **Impact**: Healthcare accessible to all; major public health improvement

---

### FACTORS AFFECTING CHANGE

| Factor | Examples |
|--------|----------|
| **War** | WWI: X-rays, blood transfusion, plastic surgery. WWII: Penicillin |
| **Science/Technology** | Microscope; printing press; X-rays; DNA |
| **Government** | Public Health Acts; vaccination; NHS |
| **Individuals** | Vesalius, Harvey, Jenner, Pasteur, Koch, Fleming |
| **Communication** | Printing press; medical journals |
| **Attitudes** | Renaissance questioning; accepting germ theory |
| **Chance** | Fleming's penicillin discovery |

---

### COMMON EXAM QUESTIONS

**16-Mark Essay Questions:**
- "The most important factor in the development of medicine has been war." How far do you agree?
- "Individuals have been the main reason for medical progress." How far do you agree?
- "The role of the government has been the most important factor in improving public health since 1800." How far do you agree?

**12-Mark Explain Questions:**
- Explain why there was little medical progress during the medieval period.
- Explain why there was a revolution in surgery during the 19th century.
- Explain why public health improved in the late 19th century.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - EARLY ELIZABETHAN ENGLAND 1558-1588
// ============================================================================

const EARLY_ELIZABETHAN_ENGLAND_KNOWLEDGE = `
## EARLY ELIZABETHAN ENGLAND 1558-1588

### PART 1: QUEEN, GOVERNMENT AND RELIGION

**Elizabeth I (1533-1603):**
- Daughter of Henry VIII and Anne Boleyn
- Became Queen November 1558, aged 25
- Protestant (but moderate)
- Never married - "Virgin Queen"
- Reigned 45 years

**Government Structure:**
- **Privy Council**: 19 members; advised Queen; ran day-to-day government
- **Parliament**: Lords and Commons; met 13 times in 45 years; granted taxes
- **Royal Court**: Centre of power; nobles competed for Queen's favour
- **Local government**: Justices of the Peace (JPs); Lords Lieutenant

**Key Figures:**
- **William Cecil (Lord Burghley)**: Chief minister 1558-1598; cautious Protestant
- **Robert Dudley (Earl of Leicester)**: Elizabeth's favourite; possible suitor
- **Francis Walsingham**: Spymaster; uncovered Catholic plots
- **Robert Devereux (Earl of Essex)**: Later favourite; led failed rebellion 1601

**The Religious Settlement 1559:**
- **Act of Supremacy**: Elizabeth "Supreme Governor" of Church of England
- **Act of Uniformity**: Book of Common Prayer compulsory; church attendance required
- **Royal Injunctions**: Rules for clergy; moderate Protestant practices

**Why a "Middle Way"?**
- Elizabeth wanted religious peace
- Most people accepted compromise
- Catholic practices retained (vestments, bishops, some ceremony)
- Protestant theology

**Challenges to Settlement:**

**From Catholics:**
- Recusants: Refused to attend Church; fined £20/month
- Seminary priests from Douai (France) from 1574
- Jesuits arrived 1580 (Campion and Parsons)
- Plots to replace Elizabeth with Mary Queen of Scots

**From Puritans:**
- Wanted further Protestant reform
- Opposed vestments, bishops, ceremonies
- Some wanted Presbyterian system
- Elizabeth called them "a sect of perilous consequence"
- Archbishop Whitgift enforced conformity from 1583

---

### PART 2: CHALLENGES TO ELIZABETH AT HOME AND ABROAD

**Mary Queen of Scots:**
- Catholic; next in line to English throne
- Forced to abdicate Scotland 1567
- Fled to England 1568; Elizabeth's prisoner for 19 years
- Focus for Catholic plots

**Catholic Plots:**

| Plot | Date | Details | Outcome |
|------|------|---------|---------|
| Northern Rebellion | 1569 | Catholic earls aimed to free Mary; 6,000 rebels | Crushed; 800 executed |
| Ridolfi Plot | 1571 | Spanish-backed; Duke of Norfolk involved | Norfolk executed 1572 |
| Throckmorton Plot | 1583 | French/Spanish invasion plan | Throckmorton executed |
| Babington Plot | 1586 | Mary approved Elizabeth's assassination | Mary executed Feb 1587 |

**Mary's Execution (February 1587):**
- Walsingham uncovered Babington Plot
- Mary's letters proved involvement
- Elizabeth reluctant; signed death warrant
- Claimed she didn't mean it to be used
- Removed Catholic threat; angered Spain

**Conflict with Spain:**

**Causes of War:**
- Religious differences (Catholic Spain vs Protestant England)
- English support for Dutch Protestant rebels
- English privateers (Drake) attacking Spanish treasure ships
- Execution of Mary Queen of Scots
- Philip II's ambition

**The Spanish Armada 1588:**
- **Spanish Plan**: 130 ships; 30,000 men; link with Duke of Parma's army in Netherlands; invade England
- **English Advantages**: Faster ships; better guns; home waters; fireships
- **Events**:
  - July: Armada sighted
  - English harried Armada up Channel
  - Spanish anchored at Calais
  - Fireships scattered fleet (8 August)
  - Battle of Gravelines
  - Spanish fled north around Scotland
  - Storms wrecked many ships
- **Losses**: Spain lost ~50 ships; 15,000 men
- **Significance**: England remained Protestant; national pride; war continued until 1604

---

### PART 3: ELIZABETHAN SOCIETY IN THE AGE OF EXPLORATION

**Social Hierarchy:**
1. **Monarch**: Elizabeth I
2. **Nobility**: ~50 families; owned vast estates
3. **Gentry**: ~10,000 families; landowners
4. **Yeomen**: Prosperous farmers
5. **Tenant farmers**: Rented land
6. **Landless labourers**: Worked for wages
7. **Vagrants**: Homeless poor

**Education:**
- Grammar schools expanded
- Latin, Greek, Bible taught
- Universities: Oxford and Cambridge
- Education mainly for boys
- Literacy increased; more books available

**Sport and Pastimes:**
- **Nobility**: Hunting, hawking, tennis, jousting
- **Common people**: Football (violent), wrestling, bear-baiting
- **Theatre**: Became hugely popular; Shakespeare, Marlowe
- **Music**: Madrigals popular; instruments in wealthy homes

**Poverty:**

**Causes:**
- Population growth: 3 million (1551) → 4 million (1601)
- Enclosure of common land
- Bad harvests (especially 1594-1597)
- Rising prices; wages didn't keep pace
- Dissolution of monasteries (lost charity)

**Attitudes:**
- **Deserving poor**: Old, sick, disabled - deserved help
- **Undeserving poor**: Able-bodied unemployed - criminals
- Fear of "sturdy beggars" as threat to order

**Elizabethan Poor Laws:**
- **1563**: JPs collect poor rate; punishment for begging
- **1572**: Register of poor; punishment for vagrancy
- **1576**: Houses of Correction for able-bodied
- **1601 Poor Law**:
  - Parishes responsible for their poor
  - Overseers of the Poor appointed
  - Able-bodied set to work
  - Almshouses for deserving poor
  - Houses of Correction for vagrants

**Exploration:**

**Reasons for Exploration:**
- Trade: New markets; spices; wealth
- Nationalism: Compete with Spain and Portugal
- Religion: Spread Protestantism
- Adventure and glory
- Technology: Better ships and navigation

**Key Explorers:**

**Francis Drake:**
- Circumnavigation 1577-1580; returned with £400,000 treasure
- Knighted by Elizabeth on Golden Hind
- "Singed the King of Spain's beard" at Cadiz 1587
- Led fireships against Armada 1588

**John Hawkins:**
- Slave trader (triangular trade)
- Reformed Royal Navy; built galleons
- Key figure in Armada victory

**Walter Raleigh:**
- Attempted Virginia colony (Roanoke 1584-1590)
- "Lost Colony" - settlers disappeared
- Introduced tobacco and potatoes (mythologised)

---

### KEY DATES

| Year | Event |
|------|-------|
| 1558 | Elizabeth becomes Queen |
| 1559 | Religious Settlement |
| 1568 | Mary Queen of Scots arrives in England |
| 1569 | Northern Rebellion |
| 1571 | Ridolfi Plot |
| 1577-80 | Drake's circumnavigation |
| 1583 | Throckmorton Plot |
| 1584-90 | Roanoke colony attempts |
| 1586 | Babington Plot |
| 1587 | Mary Queen of Scots executed; Drake raids Cadiz |
| 1588 | Spanish Armada |

---

### COMMON EXAM QUESTIONS

**16-Mark Essay Questions:**
- "The main threat to Elizabeth was from Catholics at home." How far do you agree?
- "The defeat of the Armada was mainly due to English strengths rather than Spanish weaknesses." How far do you agree?
- "The Elizabethan Poor Laws were an effective solution to the problem of poverty." How far do you agree?

**12-Mark Explain Questions:**
- Explain why Elizabeth's religious settlement was a "middle way."
- Explain why Mary Queen of Scots was such a threat to Elizabeth.
- Explain why the Spanish Armada failed.
- Explain why there was an increase in poverty in Elizabethan England.

**4-Mark Describe Questions:**
- Describe two features of the Elizabethan religious settlement.
- Describe two features of the Northern Rebellion of 1569.
- Describe two problems facing explorers in the Elizabethan period.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - SUPERPOWER RELATIONS AND THE COLD WAR
// ============================================================================

const COLD_WAR_KNOWLEDGE = `
## SUPERPOWER RELATIONS AND THE COLD WAR 1941-1991

### PART 1: THE ORIGINS OF THE COLD WAR 1941-1958

**Wartime Conferences:**

**Tehran (November 1943):**
- Stalin, Roosevelt, Churchill
- Agreed to open Second Front (D-Day)
- Stalin promised to fight Japan after Germany defeated
- Discussed United Nations

**Yalta (February 1945):**
- Germany divided into zones; Berlin divided
- Free elections in Eastern Europe promised
- Poland: Borders moved west; free elections
- UN established; USSR got 3 votes
- USSR to join war against Japan

**Potsdam (July-August 1945):**
- Truman (new US President) more suspicious of Stalin
- Germany divided; reparations agreed
- Nuremberg trials for war criminals
- Disagreements: Poland's borders; reparations; Eastern Europe
- Truman told Stalin about atomic bomb

**Growing Tensions:**

**Soviet Expansion in Eastern Europe:**
- 1945-1948: Communists took over Poland, Hungary, Romania, Bulgaria, Czechoslovakia, East Germany
- **Salami tactics**: Gradual takeover; slice by slice
- Elections rigged; opponents arrested
- By 1948: "Iron Curtain" across Europe

**Key Events:**
- **Long Telegram (Feb 1946)**: Kennan warned USSR was expansionist
- **Iron Curtain Speech (March 1946)**: Churchill warned of Soviet control of Eastern Europe
- **Novikov Telegram (Sept 1946)**: Soviet view - USA preparing for war

**Truman Doctrine (March 1947):**
- USA would support countries resisting communism
- "Containment" policy
- Immediate cause: Greece and Turkey threatened
- $400 million in aid

**Marshall Plan (June 1947):**
- $13 billion to rebuild Western Europe
- Aim: Prevent communism spreading through poverty
- Stalin refused to let Eastern Europe participate
- Created Cominform (1947) and Comecon (1949) in response

**Berlin Crisis 1948-1949:**
- **Cause**: Western powers introduced new currency (Deutschmark); Stalin wanted West out of Berlin
- **Blockade**: June 1948 - Stalin blocked all road/rail access to West Berlin
- **Airlift**: 275,000 flights; 2.3 million tons of supplies over 11 months
- **Result**: Stalin lifted blockade May 1949; Germany divided (FRG and GDR); NATO formed

**NATO (April 1949):**
- North Atlantic Treaty Organization
- 12 founding members (USA, UK, France, etc.)
- Collective security: Attack on one = attack on all
- Stalin formed Warsaw Pact in 1955

---

### PART 2: COLD WAR CRISES 1958-1970

**Berlin Crisis 1958-1963:**

**Berlin Wall (August 1961):**
- **Cause**: 3 million East Germans fled to West through Berlin
- **Khrushchev's Ultimatum (1958)**: Demanded West leave Berlin
- **1961**: East Germany built wall overnight (13 August)
- **Impact**: Stopped refugees; symbol of divided Europe; lasted until 1989

**Cuban Missile Crisis (October 1962):**

**Background:**
- 1959: Castro's revolution; Cuba became communist 1961
- Bay of Pigs (April 1961): Failed US invasion of Cuba
- USSR placed nuclear missiles in Cuba

**Thirteen Days (16-28 October 1962):**
- **16 October**: U-2 spy plane photographs Soviet missiles
- **22 October**: Kennedy announced naval blockade ("quarantine")
- **24 October**: Soviet ships approached then turned back
- **27 October**: Most dangerous day; Soviet ship sunk; U-2 shot down
- **28 October**: Khrushchev agreed to remove missiles

**Terms:**
- USSR removed missiles from Cuba
- USA promised not to invade Cuba
- USA secretly removed missiles from Turkey

**Significance:**
- Closest to nuclear war
- Hotline established (1963)
- Nuclear Test Ban Treaty (1963)
- Both sides saw need for communication

**Czechoslovakia 1968:**
- **Prague Spring**: Dubček introduced reforms ("socialism with a human face")
- August 1968: 500,000 Warsaw Pact troops invaded
- Dubček removed; reforms reversed
- **Brezhnev Doctrine**: USSR would intervene to protect communism
- Western powers condemned but didn't intervene

---

### PART 3: THE END OF THE COLD WAR 1970-1991

**Détente (1970s):**
- Period of reduced tension
- **SALT I (1972)**: Limited nuclear weapons
- **Helsinki Accords (1975)**: Accepted post-war borders; human rights
- **SALT II (1979)**: Further limits (never ratified by US Senate)

**End of Détente:**
- **Soviet invasion of Afghanistan (December 1979)**
- USA boycotted 1980 Moscow Olympics
- Reagan's tough stance: "Evil Empire" speech

**Reagan and the Second Cold War (1981-1985):**
- Massive military spending; SDI ("Star Wars")
- USSR couldn't match spending
- Soviet economy struggling

**Gorbachev's Reforms (1985-1991):**
- **Glasnost**: "Openness" - more freedom of speech
- **Perestroika**: "Restructuring" - economic reform
- **New Thinking**: Reduced military spending; better relations with West

**Key Events:**

**Fall of Berlin Wall (9 November 1989):**
- East Germany opened borders
- Wall demolished
- Symbol of Cold War's end

**End of Soviet Control in Eastern Europe (1989):**
- Poland, Hungary, Czechoslovakia, Bulgaria, Romania - communist governments fell
- Gorbachev refused to intervene ("Sinatra Doctrine" - let them go their own way)

**Collapse of USSR (December 1991):**
- Soviet republics declared independence
- Gorbachev resigned 25 December 1991
- Cold War officially over

---

### KEY STATISTICS

| Event/Topic | Statistic |
|-------------|-----------|
| Berlin Airlift | 275,000 flights; 2.3 million tons |
| East German refugees (1949-1961) | 3 million |
| Cuban missiles range | Could hit most US cities |
| Warsaw Pact troops in Czechoslovakia | 500,000 |
| USSR population 1991 | 290 million |
| Cold War duration | 46 years (1945-1991) |

---

### COMMON EXAM QUESTIONS

**16-Mark Essay Questions:**
- "The USA was mainly responsible for the Cold War." How far do you agree?
- "The Cuban Missile Crisis was the most significant event of the Cold War." How far do you agree?
- "The collapse of the Soviet Union was mainly caused by Gorbachev's policies." How far do you agree?

**12-Mark Explain Questions:**
- Explain why relations between the USA and USSR changed in the years 1943-1947.
- Explain why the Berlin Wall was built in 1961.
- Explain why the Cold War ended.

**4-Mark Describe Questions:**
- Describe two decisions made at the Yalta Conference.
- Describe two features of the Cuban Missile Crisis.
- Describe two features of Gorbachev's reforms.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - CRIME AND PUNISHMENT c.1000-PRESENT
// ============================================================================

const CRIME_PUNISHMENT_EDEXCEL_KNOWLEDGE = `
## CRIME AND PUNISHMENT IN BRITAIN c.1000-PRESENT (EDEXCEL)

### PART 1: ANGLO-SAXON AND MEDIEVAL c.1000-1500

**Anglo-Saxon Law Enforcement:**
- **Tithings**: Groups of 10 men responsible for each other
- **Hue and cry**: All villagers must chase criminals
- **Reeves**: King's officials; maintained law locally
- No police force; community responsibility

**Anglo-Saxon Punishments:**
- **Wergild**: Blood money; compensation for crimes
- **Fines**: Most common punishment
- **Corporal punishment**: Stocks, pillory, branding
- **Capital punishment**: Hanging for serious crimes
- **Trial by ordeal**: Hot iron, cold water (until 1215)

**Medieval Developments:**
- **King's Peace**: All crime against the king
- **Forest Laws**: Harsh punishments for poaching royal deer
- **Benefit of Clergy**: Clergy tried in church courts
- **Sanctuary**: Criminals could seek refuge in churches

---

### PART 2: EARLY MODERN c.1500-1700

**New Crimes:**
- **Heresy**: Wrong religious beliefs
- **Treason**: Challenging monarch
- **Vagrancy**: Homeless "sturdy beggars" seen as threat
- **Witchcraft**: Peak 1580s-1640s; ~500 executed in England

**Witchcraft:**
- Most accused were older women
- **Matthew Hopkins** (1644-47): "Witchfinder General"
- Fear during times of uncertainty
- Ended by 1700s as scientific thinking spread

**Gunpowder Plot (1605):**
- Catholic plot to blow up Parliament
- Guy Fawkes caught; conspirators executed
- Led to increased anti-Catholic laws

---

### PART 3: INDUSTRIAL PERIOD c.1700-1900

**The Bloody Code:**
- By 1815: Over 200 capital offences
- Included: Stealing goods worth 5 shillings; poaching
- Repealed 1820s-1830s; by 1861 only 5 capital crimes

**Transportation:**
- To Australia 1787-1868
- ~162,000 convicts transported
- Ended 1868: Colonies refused; reformers opposed

**Law Enforcement Reform:**

**Bow Street Runners (1749):**
- **Henry Fielding**: First professional detectives

**Metropolitan Police (1829):**
- **Robert Peel**: First professional police force
- 3,000 officers; "Bobbies" or "Peelers"
- 1856: All areas required police force

**Prison Reform:**
- **John Howard**: "The State of the Prisons" (1777)
- **Elizabeth Fry**: Reformed women's conditions at Newgate
- **Pentonville (1842)**: Model separate system prison

---

### PART 4: MODERN PERIOD c.1900-PRESENT

**Capital Punishment:**
- Last executions 1964
- Abolished 1965 (murder); 1998 (all crimes)

**Changing Crimes:**
- Car crime; drug crime; terrorism; computer crime

**Treatment of Young Offenders:**
- 1908: Children's Act; separate courts
- Focus on rehabilitation

---

### WHITECHAPEL CASE STUDY (1870-1900)

**Conditions:**
- East London slum; overcrowded; poverty
- Immigration: Jewish refugees
- Crime: Robbery; prostitution; gang violence

**Jack the Ripper (1888):**
- 5 canonical victims
- Never caught; sparked media frenzy
- **Why not caught**: Primitive forensics; no technology; police overwhelmed

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "Punishments have become more humane over time." How far do you agree?
- "The main reason for changes in law enforcement was the growth of towns." How far do you agree?
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - ANGLO-SAXON AND NORMAN ENGLAND
// ============================================================================

const ANGLO_SAXON_NORMAN_KNOWLEDGE = `
## ANGLO-SAXON AND NORMAN ENGLAND c.1060-1088 (EDEXCEL)

### THE CLAIMANTS 1066

**Harold Godwinson:**
- Earl of Wessex; most powerful noble
- Claimed deathbed promise; elected by Witan

**William of Normandy:**
- Claimed Edward promised throne (1051)
- Harold's oath (1064); papal support

**Harald Hardrada:**
- King of Norway; invited by Tostig

---

### THE BATTLES OF 1066

**Stamford Bridge (25 September):**
- Harold marched north; surprised Vikings
- Hardrada and Tostig killed

**Hastings (14 October):**
- ~7,000 men each side
- English shield wall vs Norman combined arms
- Feigned retreats broke English line
- Harold killed; William victorious

---

### ESTABLISHING CONTROL

**Castles:**
- Motte and bailey: Quick to build
- Symbol of Norman power
- 500+ built by 1100

**Harrying of the North (1069-70):**
- Systematic destruction
- 100,000+ may have died
- Ended resistance

**The Feudal System:**
- King → Tenants-in-chief → Knights → Villeins
- By 1086: Only 2 English tenants-in-chief

**Domesday Book (1086):**
- Survey of England's resources
- Purpose: Taxation; settle disputes

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "William's victory at Hastings was mainly due to his leadership." How far do you agree?
- "The main reason William was able to control England was through terror." How far do you agree?
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - THE AMERICAN WEST
// ============================================================================

const AMERICAN_WEST_KNOWLEDGE = `
## THE AMERICAN WEST c.1835-1895 (EDEXCEL)

### PLAINS INDIANS

**Way of Life:**
- Nomadic; followed buffalo herds
- Buffalo provided food, shelter, clothing, tools
- Tipis: Portable homes
- Tribes: Sioux, Cheyenne, Apache, Comanche

**Beliefs:**
- Great Spirit (Wakan Tanka)
- Land sacred; could not be owned
- Circle of nature; everything connected

---

### MIGRATION AND SETTLEMENT

**Reasons for Migration:**
- Push: Economic depression; overcrowding East
- Pull: Land; gold; opportunity
- Manifest Destiny: Belief USA should span continent

**Mormon Migration:**
- Joseph Smith killed 1844
- Brigham Young led to Salt Lake Valley (1847)
- Success through organisation and cooperation

**California Gold Rush (1848-49):**
- 300,000 "Forty-Niners" rushed west

---

### RANCHING AND CATTLE INDUSTRY

**Cattle Drives:**
- Texas to Kansas railroad towns
- Cowboys drove 2,500+ cattle; 1,000+ miles
- Cow towns: Abilene, Dodge City

**End of Open Range:**
- Barbed wire (1874)
- Harsh winters 1886-87
- Homesteaders claimed land

---

### HOMESTEADERS

**Homestead Act (1862):**
- 160 acres free if farmed for 5 years

**Challenges:**
- Climate extremes; drought; blizzards
- Hard soil; lack of wood; water shortage

**Solutions:**
- Sod houses; wind pumps; barbed wire
- Steel ploughs; dry farming

---

### CONFLICT WITH INDIANS

**Key Conflicts:**
- Sand Creek Massacre (1864): 150+ killed
- Red Cloud's War (1866-68): Sioux won
- Little Bighorn (1876): Custer's Last Stand
- Wounded Knee (1890): 250+ Sioux killed; ended resistance

**Destruction of Way of Life:**
- Buffalo: 30 million → 1,000 by 1895
- Reservations: Indians confined; dependent
- Dawes Act (1887): Broke up reservations

---

### KEY STATISTICS

| Topic | Statistic |
|-------|-----------|
| Oregon Trail | 2,000 miles |
| Gold Rush migrants | 300,000 |
| Homestead land | 160 acres |
| Buffalo 1800 | 30+ million |
| Buffalo 1895 | ~1,000 |
| Little Bighorn deaths | 210 |
| Wounded Knee deaths | 250+ |

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "The destruction of the buffalo was the most important reason for changes in Plains Indians' way of life." How far do you agree?
- "The railroad was the most important factor in the settlement of the West." How far do you agree?
`;

// ============================================================================
// SOURCE ANALYSIS AND INTERPRETATION GUIDANCE
// ============================================================================

const EDEXCEL_SOURCE_GUIDANCE = `
## SOURCE ANALYSIS GUIDANCE FOR EDEXCEL

### "How useful are Sources A and B for an enquiry into...?" (8 marks)

**Structure:**
1. **Analyse Source A**: What does it show? Consider content, origin, purpose
2. **Evaluate Source A**: How useful? What are its limitations?
3. **Analyse Source B**: What does it show? Consider content, origin, purpose
4. **Evaluate Source B**: How useful? What are its limitations?
5. **Use own knowledge**: To assess accuracy and completeness

**Level Descriptors:**
- **Level 4 (7-8)**: Analyses both sources; evaluates utility using content and provenance; good own knowledge
- **Level 3 (5-6)**: Analyses both sources; some evaluation; some own knowledge
- **Level 2 (3-4)**: Describes sources; limited evaluation
- **Level 1 (1-2)**: Simple statements about sources

**Key Terms:**
- **Content**: What the source says or shows
- **Provenance**: Nature (type), Origin (who/when/where), Purpose (why created)
- **Utility**: How useful for the specific enquiry
- **Limitations**: What the source doesn't tell us; potential bias

### INTERPRETATION QUESTIONS (Paper 3)

**Question 1 (8 marks): "How does Interpretation B differ from A about...?"**
- Identify the main argument of each interpretation
- Explain specific differences
- Use quotes from both interpretations

**Question 2 (4 marks): "Suggest one reason why these interpretations differ..."**
- Consider: Different evidence used; different emphasis; when written; historian's background

**Question 3 (4 marks): "How useful is Interpretation D for...?"**
- Evaluate using own knowledge
- Consider what it includes and omits

**Question 4 (16 marks): "How far do you agree with Interpretation X about...?"**
- Explain the interpretation's argument
- Use own knowledge to agree/disagree
- Consider other interpretations
- Reach a substantiated judgement
`;

const EDEXCEL_GCSE_HIST_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE History Mark Scheme Conventions

### 16-Mark Extended Response Levels (+ 4 SPaG)

**Level 4 (13-16 marks):**
- Demonstrates a range of accurate and detailed knowledge
- Analysis of the issue is sustained and complex
- Makes a supported, substantiated judgement
- Answer is coherently structured with clear argument
- Addresses both sides of the argument effectively

**Level 3 (9-12 marks):**
- Demonstrates accurate knowledge
- Analysis is developed but may not be fully sustained
- Makes a judgement with some support
- Answer has structure but may lose focus

**Level 2 (5-8 marks):**
- Demonstrates some knowledge
- Analysis is simple or implicit
- Judgement may be present but undeveloped
- Answer lacks full coherence

**Level 1 (1-4 marks):**
- Demonstrates limited knowledge
- Analysis is minimal or absent
- No clear judgement
- Answer lacks structure

**0 marks:** No relevant content

### SPaG Marks (4 marks)
- High (4): Consistently accurate; wide vocabulary; effective historical terminology
- Intermediate (2-3): Generally accurate; good vocabulary
- Threshold (1): Some accuracy; limited vocabulary
- 0: Does not meet threshold

### 12-Mark Explain Levels

**Level 4 (10-12 marks):**
- Analytical explanation
- Links multiple factors/shows complexity
- Accurate and detailed knowledge

**Level 3 (7-9 marks):**
- Developed explanation
- Shows some links between factors
- Good supporting knowledge

**Level 2 (4-6 marks):**
- Simple explanation
- Factors identified but not developed
- Some relevant knowledge

**Level 1 (1-3 marks):**
- Basic statements
- Limited development
- General knowledge

### Source Questions Requirements
- Analysis of content
- Evaluation of provenance (nature, origin, purpose)
- Application of own knowledge
- Balanced evaluation of usefulness/reliability
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelGCSEHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
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
${EDEXCEL_SOURCE_GUIDANCE}
`;
  }

  return `You are an expert Edexcel GCSE History examiner creating exam-style questions.

${EDEXCEL_GCSE_HIST_ASSESSMENT_OBJECTIVES}

${EDEXCEL_GCSE_HIST_QUESTION_TEMPLATES}

${EDEXCEL_GCSE_HIST_MARK_SCHEME_CONVENTIONS}
${knowledgeSection}${guidanceSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic Edexcel Style**: Match real Edexcel paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Historical Accuracy**: Use specific dates, names, statistics from the topic knowledge provided
5. **Appropriate Difficulty**:
   - Easy: Describe/inference questions (4 marks)
   - Medium: Explain or source questions (8-12 marks)
   - Hard: 16-mark extended response (16 marks + 4 SPaG)

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer (must include specific historical details)
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('history')}`;
}

export function getEdexcelGCSEHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short describe or inference question (AO1/AO3).

**Question Types:**
- "Describe two features of..." [4 marks]
- "Give two things you can infer from Source A about..." [4 marks]

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create an explain or source-based question (AO1/AO2/AO3).

**Question Types:**
- "Explain why [event/development occurred]" [12 marks]
- "How useful are Sources A and B for an enquiry into...?" [8 marks]

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a 16-mark extended response requiring evaluation (AO1/AO2).

**Question Types:**
- "'[Statement]' How far do you agree?" [16 marks + 4 SPaG]
- "How far do you agree that [factor] was the main reason for [outcome]?" [16 marks + 4 SPaG]

**16-Mark Levels:**
- Level 4 (13-16): Complex analysis; sustained judgement
- Level 3 (9-12): Developed analysis; some judgement
- Level 2 (5-8): Simple explanation; basic judgement
- Level 1 (1-4): Basic statements; no judgement

Note: 16-mark questions also carry 4 SPaG marks.

Marks: ${markRange.min}-${markRange.max}`
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

  return `Generate an Edexcel GCSE History question.

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

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 4 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 16, max: 16 };
  }
}

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getTopicSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Weimar and Nazi Germany
  if (topicLower.includes('weimar') || topicLower.includes('nazi') ||
      (topicLower.includes('germany') && (topicLower.includes('1918') || topicLower.includes('1939')))) {
    return WEIMAR_NAZI_GERMANY_KNOWLEDGE;
  }

  // Medicine in Britain
  if (topicLower.includes('medicine') || topicLower.includes('health') && topicLower.includes('people')) {
    return MEDICINE_BRITAIN_KNOWLEDGE;
  }

  // Early Elizabethan England
  if (topicLower.includes('elizabethan') ||
      (topicLower.includes('elizabeth') && (topicLower.includes('1558') || topicLower.includes('1588')))) {
    return EARLY_ELIZABETHAN_ENGLAND_KNOWLEDGE;
  }

  // Cold War / Superpower Relations
  if (topicLower.includes('cold war') || topicLower.includes('superpower') ||
      topicLower.includes('usa') && topicLower.includes('ussr')) {
    return COLD_WAR_KNOWLEDGE;
  }

  // Crime and Punishment
  if (topicLower.includes('crime') || topicLower.includes('punishment') ||
      topicLower.includes('whitechapel') || topicLower.includes('ripper')) {
    return CRIME_PUNISHMENT_EDEXCEL_KNOWLEDGE;
  }

  // Anglo-Saxon and Norman England
  if (topicLower.includes('anglo-saxon') || topicLower.includes('norman') ||
      topicLower.includes('1066') || topicLower.includes('hastings')) {
    return ANGLO_SAXON_NORMAN_KNOWLEDGE;
  }

  // American West
  if (topicLower.includes('american west') || topicLower.includes('plains indian') ||
      topicLower.includes('homestead') || topicLower.includes('cattle')) {
    return AMERICAN_WEST_KNOWLEDGE;
  }

  return '';
}
