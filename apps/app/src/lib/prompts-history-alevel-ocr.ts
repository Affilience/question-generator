// OCR A-Level History A (H505) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/history-a-h105-h505-from-2015/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR A-LEVEL HISTORY A SPECIFICATION DETAILS (H505)
// ============================================================================

const OCR_ALEVEL_HIST_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, explanation, basic analysis | Identify and explain factors, features, or significance |
| **Medium** | Analysis, interpretation evaluation | Evaluate interpretations against historical evidence, analyse source utility |
| **Hard** | Synthesis, sustained judgement, historiographical debate | Construct thematic argument across the period, weigh interpretations, substantiated conclusions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires thematic analysis across a substantial period of history
- Demands sustained analytical argument with explicit judgement throughout
- Must weigh competing historiographical interpretations using extracts
- Requires synthesis of wide-ranging evidence to support a coherent thesis
- No single "correct" answer - student must construct and defend their own interpretation

**Easy (10 marks):** Explanation questions - identify factors and explain their significance
**Medium (25 marks):** Period essay - analytical argument with judgement throughout
**Hard (30 marks):** Interpretations essay - evaluate historiographical extracts using contextual knowledge
`;

const OCR_ALEVEL_HIST_ASSESSMENT_OBJECTIVES = `
## OCR A-Level History A Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate, organise and communicate knowledge and understanding to analyse and evaluate the key features related to the periods studied, making substantiated judgements and exploring concepts of cause, consequence, change, continuity, similarity, difference and significance | 40-50% |
| **AO2** | Analyse and evaluate appropriate source material, primary and/or contemporary to the period, within its historical context | 20-30% |
| **AO3** | Analyse and evaluate, in relation to the historical context, different ways in which aspects of the past have been interpreted | 20-30% |

### Unit Structure
| Unit | Title | Content | Marks | Time | Weighting |
|------|-------|---------|-------|------|-----------|
| **Unit 1** | British Period Study and Enquiry | Period study with source enquiry | 50 | 1hr 30m | 25% |
| **Unit 2** | Non-British Period Study | European or world history | 30 | 1hr | 15% |
| **Unit 3** | Thematic Study and Interpretations | Long-span theme with historiography | 80 | 2hr 30m | 40% |
| **Unit 4** | Topic-Based Essay (NEA) | 3000-4000 word investigation | 40 | N/A | 20% |

### Question Types
- Short answer (10 marks)
- Source enquiry (30 marks)
- Period essay (25 marks)
- Thematic essay (25 marks)
- Interpretations evaluation (30 marks)

### Command Words
- **Assess**: Weigh up importance; reach a supported conclusion
- **Evaluate**: Consider and reach conclusions about the value/validity
- **To what extent**: Measure the validity of a claim
- **How far**: Same as 'to what extent'
- **Compare and contrast**: Identify similarities and differences
`;

const OCR_ALEVEL_HIST_QUESTION_TEMPLATES = `
## Authentic OCR A-Level History Question Formats

### Type 1: Short Answer - Unit 1 (10 marks)
Format: "Explain why [development occurred]" or "Explain the significance of..."
**Examples:**
- "Explain why Henry VIII broke with Rome in the 1530s" [10 marks]
- "Explain the significance of the Putney Debates for the English Revolution" [10 marks]
Marking: Levels 1-4 based on explanation with supporting detail

**10-Mark Levels:**
- Level 4 (9-10): Sophisticated; wide-ranging; analytical
- Level 3 (6-8): Developed; good range; explained
- Level 2 (3-5): Some development; limited range
- Level 1 (1-2): Basic; limited understanding

### Type 2: Source Enquiry - Unit 1 (30 marks)
Format: "Assess the value of [sources] for revealing... Use the sources and your own knowledge."
**Examples:**
- "Assess the value of Sources C and D for revealing the problems facing Henry VII in securing his throne" [30 marks]
Marking: Levels 1-5; must evaluate sources using content, provenance and context

**30-Mark Source Enquiry Levels:**
- Level 5 (25-30): Sophisticated evaluation; excellent contextual knowledge
- Level 4 (19-24): Good evaluation; detailed knowledge; clear analysis
- Level 3 (13-18): Sound evaluation; reasonable knowledge
- Level 2 (7-12): Some evaluation; limited knowledge
- Level 1 (1-6): Very limited evaluation

### Type 3: Period Study Essay - Unit 2 (25 marks)
Format: "'[Statement]' How far do you agree?" or "Assess the reasons for..."
**Examples:**
- "'The failure of the Weimar Republic was primarily due to economic problems.' How far do you agree?" [25 marks]
Marking: Levels 1-5 based on argument, evidence and judgement

### Type 4: Thematic Essay - Unit 3 (25 marks)
Format: "To what extent was [factor] the most important reason for [development] in the period [date range]?"
**Examples:**
- "To what extent was the role of individuals the most important factor in causing rebellions in the Tudor period?" [25 marks]
Long-span questions requiring breadth across the whole period

### Type 5: Interpretations - Unit 3 (30 marks)
Format: "Assess the merits of the view in Extract [X]... Use all three extracts and your own knowledge."
**Examples:**
- "Assess the merits of the view in Extract A that Stalin's agricultural policies were a disaster for the Russian peasantry" [30 marks]
Requires evaluation of three interpretations using contextual knowledge
`;

const OCR_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level History Mark Scheme Conventions

### 25-Mark Essay Levels (Units 2 and 3)

**Level 5 (21-25 marks):**
- Answers with a consistent and developed focus on the precise terms of the question
- Answers show sophisticated understanding of historical concepts
- Wide range of accurate knowledge and understanding deployed
- Cogent and consistently analytical argument
- Well-supported, convincing conclusions

**Level 4 (16-20 marks):**
- Answers show a clear focus on the question
- Good understanding of historical concepts
- Good range of accurate knowledge
- Analytical argument sustained
- Conclusions reached with support

**Level 3 (11-15 marks):**
- Answers show some focus on the question
- Some understanding of concepts
- Range of knowledge, varying in accuracy
- Some analysis, may not be sustained
- Conclusions offered but may lack full support

**Level 2 (6-10 marks):**
- Answers show limited focus
- Limited understanding of concepts
- Limited knowledge
- Basic analysis
- Conclusions may be asserted

**Level 1 (1-5 marks):**
- Very limited focus
- Minimal understanding
- Very limited knowledge
- Little or no analysis
- No valid conclusions

**0 marks:** Nothing worthy of credit

### 30-Mark Interpretations Levels (Unit 3)

**Level 5 (25-30 marks):**
- Sophisticated analysis and evaluation of all three extracts
- Excellent integration of contextual knowledge
- Sustained focus on the question
- Convincing conclusions about the merits of the view

**Level 4 (19-24 marks):**
- Good analysis of all three extracts
- Good integration of knowledge
- Clear focus on the question
- Sound conclusions

**Level 3 (13-18 marks):**
- Sound analysis of extracts
- Some integration of knowledge
- Addresses the question
- Partial conclusions

**Level 2 (7-12 marks):**
- Some analysis
- Limited knowledge integration
- Basic address of question

**Level 1 (1-6 marks):**
- Very limited analysis
- Minimal knowledge
- Weak response to question

### Key Requirements
- Analysis of change and continuity across time
- Understanding of causation and consequence
- Evaluation of significance
- Comparison across different contexts
- Integration of historiographical debate (Unit 3)
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const EARLY_TUDORS_KNOWLEDGE = `
## England 1485-1558: The Early Tudors Essential Knowledge

### HENRY VII (1485-1509)
**Claim and Consolidation:**
- Battle of Bosworth 22 August 1485: Richard III killed
- Weak Lancastrian claim through Margaret Beaufort
- Married Elizabeth of York January 1486
- Crowned before marriage: independent claim

**Yorkist Threats:**
- Lambert Simnel 1487: posed as Earl of Warwick
- Battle of Stoke 16 June 1487: last Wars of Roses battle
- Perkin Warbeck 1491-99: claimed to be Richard of York
- Supported by Margaret of Burgundy, James IV, Maximilian
- Executed November 1499

**Government:**
- Council Learned in the Law: Empson and Dudley
- Revenue: £113,000 p.a. by 1509 (vs £52,000 in 1485)
- Bonds and recognisances: £30,000 annually
- Chamber finance: personal control

**Foreign Policy:**
- Treaty of Medina del Campo 1489: Spanish alliance
- Magnus Intercursus 1496: Burgundian trade
- Arthur-Catherine marriage 1501

### HENRY VIII (1509-1547)
**Early Reign:**
- Succeeded aged 17: Renaissance prince
- Married Catherine of Aragon June 1509
- War with France 1512-14
- Battle of Flodden September 1513: James IV killed

**Wolsey (1514-1529):**
- Lord Chancellor 1515, Cardinal 1515, Papal Legate 1518
- Field of Cloth of Gold 1520
- Star Chamber: 120 cases annually
- Fall 1529: failed annulment

**Break with Rome:**
- Catherine: no male heir (Mary 1516 only survivor)
- Anne Boleyn: determination to marry
- Thomas Cromwell rose from 1530
- Act of Supremacy 1534
- Thomas More executed July 1535

**Dissolution of Monasteries:**
- Valor Ecclesiasticus 1535
- 800 religious houses closed
- £1.3 million assets transferred

**Pilgrimage of Grace 1536:**
- 30,000+ rebels in Yorkshire/Lincoln
- Robert Aske: "pilgrimage" for old religion
- Henry negotiated then executed 200+ leaders

### EDWARD VI (1547-1553)
**Somerset Protectorate:**
- Edward acceded aged 9
- First Prayer Book 1549: English services
- Chantries dissolved 1547

**1549 Rebellions:**
- Western Rebellion: Prayer Book "Christmas game"
- Kett's Rebellion: 16,000, enclosure grievances

**Northumberland (1549-1553):**
- Second Prayer Book 1552: clearly Protestant
- 42 Articles 1553

**Succession Crisis:**
- Edward dying of TB
- Crown devised to Lady Jane Grey
- Jane queen 10-19 July: nine days

### MARY I (1553-1558)
**Catholic Restoration:**
- Heresy laws revived 1554
- 284 Protestants executed 1555-58
- Cranmer burned 1556: "Bloody Mary"

**Spanish Marriage:**
- Philip II July 1554
- Wyatt's Rebellion January 1554

**Foreign Policy:**
- Calais lost January 1558

### MID-TUDOR CRISIS DEBATE
**Crisis View:**
- Minority governments unstable
- Religious upheaval
- Rebellions 1549
- Economic problems

**Against Crisis:**
- Government survived
- No foreign invasion
- Succession settled
- "Crisis" exaggerated (revisionist view)

### KEY DATES
| Date | Event |
|------|-------|
| 1485 | Bosworth |
| 1534 | Act of Supremacy |
| 1536 | Pilgrimage of Grace |
| 1547 | Edward VI accedes |
| 1549 | Rebellions |
| 1553 | Mary I accedes |
| 1558 | Mary dies, Calais lost |
`;

const LATER_TUDORS_KNOWLEDGE = `
## England 1547-1603: The Later Tudors Essential Knowledge

### ELIZABETH I (1558-1603)
**Religious Settlement 1559:**
- Act of Supremacy: "Supreme Governor"
- Act of Uniformity: Third Prayer Book
- 39 Articles 1563: moderate Protestant
- Via media: middle way

**Catholic Threats:**
- Mary Queen of Scots fled 1568
- Northern Rebellion 1569: 6,000 rebels
- Papal Bull 1570: excommunication
- Ridolfi 1571, Throckmorton 1583, Babington 1586
- Mary executed February 1587

**Puritan Challenge:**
- Vestments controversy 1560s
- Prophesyings: Elizabeth suspended Grindal
- Whitgift's Three Articles 1583

**War with Spain:**
- Drake's circumnavigation 1577-80
- Support for Dutch rebels from 1585
- Spanish Armada 1588: 130 ships
- "Heart and stomach of a king"

**Government:**
- William Cecil (Burghley): Secretary/Treasurer
- Privy Council: 19 members
- Parliament: met 13 times
- JPs, Lords Lieutenant locally

**Ireland:**
- Nine Years War 1594-1603: Tyrone
- £2 million cost

**Economic/Social:**
- Poor Laws 1597-1601
- Population: 2.8m → 4.1m
- Inflation: prices trebled

**Final Years:**
- Essex Rebellion February 1601
- Golden Speech 1601
- Died 24 March 1603

### KEY HISTORIOGRAPHICAL DEBATES
**Golden Age or Crisis?**
- Gloriana myth vs reality
- Economic problems
- Religious tensions

**Personal Rule:**
- Elizabeth's skill vs councillors
- Marriage question

### KEY STATISTICS
| Event | Figure |
|-------|--------|
| Armada ships | 130 |
| Poor Laws | 1597-1601 |
| Ireland cost | £2 million |
| Population growth | 2.8m → 4.1m |
`;

const EARLY_STUARTS_KNOWLEDGE = `
## Early Stuarts and Civil War 1603-1660 Essential Knowledge

### JAMES I (1603-1625)
**Union of Crowns:**
- James VI of Scotland became James I 1603
- Divine right: "God's lieutenants"

**Parliament:**
- Inherited £400,000 debt
- Great Contract 1610 failed
- Addled Parliament 1614
- Impositions dispute

**Religion:**
- Hampton Court 1604: King James Bible
- Gunpowder Plot 5 November 1605
- 36 Catholics executed 1603-18

**Finance:**
- Sold honours: 900 knighthoods
- Buckingham's influence from 1615

### CHARLES I (1625-1649)
**Early Conflicts:**
- Henrietta Maria (Catholic) 1625
- One year's Tonnage and Poundage
- Forced Loan 1626, Five Knights
- Petition of Right 1628
- Three Resolutions 1629

**Personal Rule (1629-1640):**
- Ship Money: extended inland 1635
- Hampden's Case 1637
- £800,000 raised 1634-38

**Religious Policy:**
- Laud Archbishop 1633
- "Beauty of holiness"
- Prynne, Burton, Bastwick mutilated

**Scottish Crisis:**
- Prayer Book imposed 1637
- National Covenant 1638
- Bishops' Wars 1639-40

### CIVIL WAR
**Long Parliament:**
- Triennial Act 1641
- Strafford executed May 1641
- Irish Rebellion October 1641
- Grand Remonstrance: 159-148
- Five Members January 1642

**Military:**
- Edgehill October 1642
- Marston Moor July 1644
- New Model Army 1645
- Naseby June 1645

**Settlement Attempts:**
- Newcastle Propositions 1646
- Putney Debates 1647
- Pride's Purge December 1648

**Regicide:**
- Trial January 1649
- Executed 30 January 1649

### INTERREGNUM (1649-1660)
**Commonwealth:**
- Rump Parliament
- Levellers crushed
- Ireland: Drogheda
- Navigation Act 1651

**Protectorate:**
- Instrument of Government 1653
- Major-Generals 1655-56
- Humble Petition 1657

**Collapse:**
- Cromwell died September 1658
- Richard: "Tumbledown Dick"
- Monk's march
- Charles II restored May 1660

### HISTORIOGRAPHICAL DEBATES
**Causes:**
- Whig: constitutional liberty
- Marxist: class conflict (Stone)
- Revisionist: contingency (Russell)
- Post-revisionist: both matter

### KEY DATES
| Date | Event |
|------|-------|
| 1603 | Union of Crowns |
| 1605 | Gunpowder Plot |
| 1629-40 | Personal Rule |
| 1642 | Civil War begins |
| 1649 | Charles I executed |
| 1660 | Restoration |
`;

const GERMANY_1919_63_KNOWLEDGE = `
## Democracy and Dictatorships in Germany 1919-1963 Essential Knowledge

### WEIMAR REPUBLIC (1919-1933)
**Foundation:**
- Revolution November 1918
- Ebert-Groener Pact
- Spartacist Rising January 1919
- Weimar Constitution: democratic

**Early Challenges:**
- Versailles: £6.6 billion, 100,000 army
- Kapp Putsch 1920
- Hyperinflation 1923

**Stresemann Era:**
- Currency reform
- Dawes Plan 1924
- Locarno 1925
- "Golden Twenties"

**Collapse:**
- Wall Street Crash
- 6 million unemployed 1932
- Nazi vote: 2.6% → 37%

### NAZI GERMANY (1933-1945)
**Consolidation:**
- Chancellor 30 January 1933
- Reichstag Fire 27 February
- Enabling Act 23 March
- Night of Long Knives June 1934
- Führer August 1934

**Nazi State:**
- Gleichschaltung
- SS: 240,000 by 1939
- Propaganda: Goebbels

**Economy:**
- Unemployment eliminated
- Four-Year Plan 1936

**Racial Policy:**
- Nuremberg Laws 1935
- Kristallnacht 1938
- Holocaust: 6 million

### DIVIDED GERMANY (1945-1963)
**Occupation:**
- Four zones
- Nuremberg Trials
- Currency reform 1948

**Federal Republic:**
- Basic Law 1949
- Adenauer 1949-63
- Wirtschaftswunder
- NATO 1955

**GDR:**
- SED dictatorship
- Stasi
- 1953 uprising
- Berlin Wall 1961

### KEY DATES
| Date | Event |
|------|-------|
| 1923 | Hyperinflation |
| 1933 | Hitler Chancellor |
| 1934 | Night of Long Knives |
| 1938 | Kristallnacht |
| 1949 | Two Germanies |
| 1961 | Berlin Wall |
`;

const RUSSIA_1894_1941_KNOWLEDGE = `
## Russia 1894-1941 Essential Knowledge

### NICHOLAS II (1894-1917)
**Autocracy:**
- "Senseless dreams" of constitution
- Opposition: SRs, SDs (Bolsheviks/Mensheviks)

**1905 Revolution:**
- Bloody Sunday 22 January
- General strike October
- October Manifesto
- Moscow uprising crushed

**Stolypin (1906-1911):**
- "Wager on the strong"
- 3,000 executed
- Assassinated 1911

**WWI:**
- Tannenberg August 1914
- Nicholas took command 1915
- Rasputin

### REVOLUTIONS 1917
**February:**
- Bread riots
- Army mutiny
- Abdication
- Dual power

**October:**
- Lenin: April Theses
- Kornilov Affair
- Bolshevik seizure 25 October
- Early decrees

### CIVIL WAR (1918-1921)
- Reds vs Whites
- Trotsky: Red Army
- War Communism
- 10 million deaths

### LENIN'S RUSSIA
**NEP (1921-28):**
- Kronstadt
- Tax in kind
- Nepmen allowed

### STALIN'S RISE AND RULE
**Power Struggle:**
- Testament suppressed
- "Socialism in one country"
- General Secretary advantage

**Collectivisation:**
- 90% by 1936
- Dekulakisation
- Famine: 5-7 million

**Industrialisation:**
- Five-Year Plans
- "50-100 years behind"
- Gulag labour

**Terror:**
- Show trials 1936-38
- 750,000 executed
- Army purged

### KEY DATES
| Date | Event |
|------|-------|
| 1905 | Revolution |
| 1917 | February, October |
| 1918-21 | Civil War |
| 1929-33 | Collectivisation |
| 1936-38 | Great Terror |
`;

const COLD_WAR_EUROPE_KNOWLEDGE = `
## The Cold War in Europe 1941-1995 Essential Knowledge

### ORIGINS (1941-1947)
**Wartime:**
- Grand Alliance tensions
- Second Front delays
- Yalta February 1945
- Potsdam July 1945

**Division:**
- Soviet expansion: Poland, Romania, Bulgaria
- Iron Curtain speech 1946
- Truman Doctrine March 1947
- Marshall Plan 1947

### EARLY COLD WAR (1947-1955)
**Berlin Blockade 1948-49:**
- Currency reform triggered
- 277,000 airlift flights
- NATO formed 1949

**Division of Germany:**
- FRG and GDR 1949
- Adenauer: Western integration
- Warsaw Pact 1955

### CRISES
**Hungary 1956:**
- October uprising
- Nagy government
- Soviet invasion: 2,500 killed

**Berlin 1958-1961:**
- Khrushchev ultimatum
- 3 million fled East
- Wall built 13 August 1961

**Prague Spring 1968:**
- Dubček reforms
- Soviet invasion
- Brezhnev Doctrine

### DÉTENTE (1969-1979)
- Ostpolitik under Brandt
- SALT I 1972
- Helsinki 1975
- Ended: Afghanistan 1979

### END OF COLD WAR
**Gorbachev:**
- Glasnost, perestroika
- INF Treaty 1987

**1989:**
- Poland: Solidarity
- Hungary opens border
- Berlin Wall falls 9 November
- Velvet Revolution

**End:**
- German reunification 1990
- USSR dissolved 1991

### KEY DATES
| Date | Event |
|------|-------|
| 1947 | Truman Doctrine |
| 1948-49 | Berlin Blockade |
| 1956 | Hungary |
| 1961 | Berlin Wall |
| 1968 | Prague Spring |
| 1989 | Wall falls |
| 1991 | USSR ends |
`;

const REBELLION_TUDORS_KNOWLEDGE = `
## Rebellion and Disorder under the Tudors 1485-1603 Essential Knowledge

### YORKIST THREATS
**Lambert Simnel 1487:**
- Posed as Earl of Warwick
- Battle of Stoke: last Wars of Roses
- Made kitchen servant

**Perkin Warbeck 1491-99:**
- Claimed to be Richard of York
- Foreign support
- Executed 1499

### HENRICIAN REBELLIONS
**Pilgrimage of Grace 1536:**
- 30,000+ rebels
- Robert Aske
- Religious and economic grievances
- Henry negotiated then crushed
- 200+ executed

### MID-TUDOR REBELLIONS
**Western Rebellion 1549:**
- Prayer Book "Christmas game"
- Catholic restoration demanded
- Crushed with foreign mercenaries

**Kett's Rebellion 1549:**
- 16,000 rebels
- Enclosure grievances
- Norwich captured
- Crushed by Warwick

**Wyatt's Rebellion 1554:**
- Against Spanish marriage
- 4,000 reached London
- Wyatt executed

### ELIZABETHAN REBELLIONS
**Northern Rebellion 1569:**
- 6,000 Catholic rebels
- Restore Mary Queen of Scots
- Easily crushed
- 600+ executed

**Essex Rebellion 1601:**
- Failed coup
- 200 followers
- Essex executed

### THEMATIC ANALYSIS
**Causes:**
- Religious change
- Economic grievances
- Political faction
- Regional identity

**Government Response:**
- Negotiation then repression
- Exemplary punishment
- Rarely military threat

**Success/Failure:**
- All rebellions failed
- But influenced policy
- Pilgrimage: Six Articles
- Kett: Somerset's fall

### HISTORIOGRAPHICAL DEBATES
**Religious vs Economic:**
- Pilgrimage: both factors
- Western: primarily religious
- Kett: primarily economic

**Threat Level:**
- Pilgrimage most serious
- Others easily contained
- Tudor state strong

### KEY DATES
| Date | Event |
|------|-------|
| 1487 | Simnel/Stoke |
| 1536 | Pilgrimage of Grace |
| 1549 | Western/Kett |
| 1554 | Wyatt |
| 1569 | Northern |
| 1601 | Essex |
`;

const CIVIL_RIGHTS_USA_OCR_KNOWLEDGE = `
## Civil Rights in the USA 1865-1992 Essential Knowledge

### RECONSTRUCTION (1865-1877)
**Amendments:**
- 13th: abolished slavery
- 14th: citizenship
- 15th: voting rights

**Achievements:**
- Freedmen's Bureau
- Black Congressmen

**End:**
- KKK terror
- Compromise of 1877
- "Redemption"

### JIM CROW (1877-1954)
- Plessy v Ferguson 1896
- Disfranchisement
- 4,000+ lynchings

**Early Resistance:**
- Washington: accommodation
- Du Bois: NAACP
- Great Migration

### CIVIL RIGHTS MOVEMENT
**Legal:**
- Brown v Board 1954

**Direct Action:**
- Montgomery 1955-56
- Sit-ins 1960
- Freedom Rides 1961
- Birmingham 1963
- March on Washington 1963

**Legislation:**
- Civil Rights Act 1964
- Voting Rights Act 1965

### BLACK POWER
- Malcolm X
- Black Panthers
- Urban riots
- King assassination 1968

### LATER PERIOD
- Affirmative action
- Bakke 1978
- Reagan era
- LA riots 1992

### KEY DATES
| Date | Event |
|------|-------|
| 1896 | Plessy |
| 1954 | Brown |
| 1963 | Birmingham, March |
| 1964-65 | Legislation |
| 1968 | King assassinated |
`;

// ============================================================================
// MODEL ANSWER STRUCTURES
// ============================================================================

const OCR_ALEVEL_MODEL_ANSWER_GUIDANCE = `
## OCR A-Level Model Answer Structures

### 10-Mark Explain Question
**Structure:**
- Introduction identifying key factors
- 2-3 developed paragraphs with evidence
- Brief conclusion weighing factors

**Timing:** 15 minutes

### 25-Mark Essay
**Structure:**
1. Introduction: argument and factors
2. 4-5 analytical paragraphs
3. Conclusion: substantiated judgement

**Level 5 Requirements:**
- Consistent focus on question
- Sophisticated conceptual understanding
- Wide-ranging knowledge
- Cogent argument
- Convincing conclusions

**Timing:** 45 minutes

### 30-Mark Source Enquiry
**Structure:**
1. Introduction: overall value judgement
2. Evaluate each source:
   - Content and what it reveals
   - Provenance analysis
   - Contextual knowledge
   - Limitations
3. Conclusion: comparative judgement

**Timing:** 45 minutes

### 30-Mark Interpretations
**Structure:**
1. Introduction: state which view most convincing
2. Three paragraphs evaluating each extract:
   - Summarise interpretation
   - Test with own knowledge
   - Identify strengths/limitations
3. Conclusion: overall judgement on merits

**Timing:** 45 minutes
`;

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getOCRALevelTopicKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Early Tudors
  if (topicLower.includes('early tudor') || topicLower.includes('1485-1558') || topicLower.includes('1485')) {
    return EARLY_TUDORS_KNOWLEDGE;
  }

  // Later Tudors
  if (topicLower.includes('later tudor') || topicLower.includes('1547-1603') || topicLower.includes('elizabeth')) {
    return LATER_TUDORS_KNOWLEDGE;
  }

  // Early Stuarts
  if (topicLower.includes('stuart') || topicLower.includes('civil war') || topicLower.includes('1603-1660')) {
    return EARLY_STUARTS_KNOWLEDGE;
  }

  // Germany
  if (topicLower.includes('germany') && (topicLower.includes('1919') || topicLower.includes('1963'))) {
    return GERMANY_1919_63_KNOWLEDGE;
  }

  // Russia
  if (topicLower.includes('russia') && (topicLower.includes('1894') || topicLower.includes('1941'))) {
    return RUSSIA_1894_1941_KNOWLEDGE;
  }

  // Cold War
  if (topicLower.includes('cold war')) {
    return COLD_WAR_EUROPE_KNOWLEDGE;
  }

  // Rebellion Tudors
  if (topicLower.includes('rebellion') && topicLower.includes('tudor')) {
    return REBELLION_TUDORS_KNOWLEDGE;
  }

  // Civil Rights USA
  if (topicLower.includes('civil rights')) {
    return CIVIL_RIGHTS_USA_OCR_KNOWLEDGE;
  }

  // Russia and its Rulers
  if (topicLower.includes('russia') && topicLower.includes('rulers')) {
    return RUSSIA_1894_1941_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getOCRALevelTopicKnowledge(topic.name);

  return `You are an expert OCR A-Level History examiner creating exam-style questions.

${OCR_ALEVEL_HIST_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_HIST_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_HIST_QUESTION_TEMPLATES}

${OCR_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS}

${topicKnowledge ? `## Topic-Specific Knowledge\nUse this accurate historical knowledge when creating questions and model answers:\n${topicKnowledge}` : ''}

${OCR_ALEVEL_MODEL_ANSWER_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds preparing for university
2. **Authentic OCR Style**: Match real OCR paper format and command words
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Short explain questions (10 marks)
   - Medium: Period essay questions (25 marks)
   - Hard: Source enquiry or interpretations (30 marks)
5. **Specific Evidence**: Use precise dates, statistics, names from topic knowledge
6. **Historiographical Awareness**: Reference relevant debates where appropriate

## Response Format
Return JSON with:
- "content": Question text (include sources/extracts for source questions)
- "marks": Total marks
- "solution": Model answer demonstrating A-Level standard with specific evidence
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('history')}`;
}

export function getOCRALevelHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getOCRALevelTopicKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short explain question testing knowledge and analysis (AO1).

**Question Types:**
- "Explain why [development occurred]" [10 marks]
- "Explain the significance of [event/person]" [10 marks]
- "Explain the reasons for..." [10 marks]

**10-Mark Levels:**
- Level 4 (9-10): Sophisticated; wide-ranging; analytical
- Level 3 (6-8): Developed; good range; explained
- Level 2 (3-5): Some development; limited range
- Level 1 (1-2): Basic; limited understanding

**Model Answer Requirements:**
- Identify 2-3 key factors with specific evidence
- Use dates, names, statistics from topic knowledge
- Explain causal links clearly

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a period essay question requiring analysis and judgement (AO1).

**Question Types:**
- "'[Statement]' How far do you agree?" [25 marks]
- "Assess the reasons for [outcome]" [25 marks]
- "To what extent was [factor] the main cause of [outcome]?" [25 marks]

**25-Mark Levels:**
- Level 5 (21-25): Sophisticated; wide-ranging; convincing conclusions
- Level 4 (16-20): Clear focus; good analysis; supported conclusions
- Level 3 (11-15): Some focus; some analysis; partial support
- Level 2 (6-10): Limited focus; basic analysis
- Level 1 (1-5): Very limited; no valid conclusions

**Model Answer Requirements:**
- Analysis of 4-5 factors
- Historiographical references where relevant
- Balanced argument
- Substantiated judgement

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 30-mark interpretations or source enquiry question (AO2/AO3).

**Question Types:**
- "Assess the merits of the view in Extract A that... Use all three extracts and your own knowledge." [30 marks]
- "Assess the value of Sources A and B for revealing... Use the sources and your own knowledge." [30 marks]

For interpretations questions, include THREE historian extracts (3-4 sentences each) offering different views.
For source enquiry, include TWO primary source extracts with provenance details.

**30-Mark Levels:**
- Level 5 (25-30): Sophisticated evaluation; excellent contextual knowledge
- Level 4 (19-24): Good evaluation; detailed knowledge
- Level 3 (13-18): Sound evaluation; reasonable knowledge
- Level 2 (7-12): Some evaluation; limited knowledge
- Level 1 (1-6): Very limited evaluation

**Model Answer Requirements:**
- Evaluate all sources/extracts
- Integrate own contextual knowledge
- Compare different views
- Reach judgement on merits

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level History question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${topicKnowledge ? `**Use this topic knowledge for accurate content:**\n${topicKnowledge}` : ''}

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific evidence",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 10, max: 10 };
    case 'medium':
      return { min: 25, max: 25 };
    case 'hard':
      return { min: 30, max: 30 };
  }
}
