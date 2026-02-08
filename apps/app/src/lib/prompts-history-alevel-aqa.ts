// AQA A-Level History (7042) Question Generation Prompts
// Based on official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/history/a-level/history-7042

import { Difficulty, Topic } from '@/types';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';

// ============================================================================
// AQA A-LEVEL HISTORY SPECIFICATION DETAILS (7042)
// ============================================================================

const AQA_ALEVEL_HIST_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, explanation | Single factor, direct knowledge retrieval, causal explanation |
| **Medium** | Analysis, interpretation, evaluation of sources | Source evaluation using provenance, content, and context |
| **Hard** | Synthesis, evaluation, sustained judgement | Weigh multiple historiographical interpretations, construct balanced arguments, reach substantiated conclusions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires evaluating competing historiographical interpretations (named historians)
- Demands synthesis across multiple factors and time periods
- Must construct a thesis and sustain an argument throughout
- Requires explicit judgement with substantiation
- No single "correct" answer - student must justify their position using evidence and historical reasoning

**Easy (8 marks):** Direct recall and explanation - identify reasons/factors and explain how they caused an outcome
**Medium (12 marks):** Source analysis - requires evaluating reliability, utility, and limitations using context
**Hard (25 marks):** Historiographical synthesis - requires engaging with academic debates and reaching independent conclusions
`;

const AQA_ALEVEL_HIST_ASSESSMENT_OBJECTIVES = `
## AQA A-Level History Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate, organise and communicate knowledge and understanding to analyse and evaluate the key features related to the periods studied, making substantiated judgements and exploring concepts, as relevant, of cause, consequence, change, continuity, similarity, difference and significance | 40-55% |
| **AO2** | Analyse and evaluate appropriate source material, primary and/or contemporary to the period, within its historical context | 20-30% |
| **AO3** | Analyse and evaluate, in relation to the historical context, different ways in which aspects of the past have been interpreted | 20-30% |

### Paper Structure
| Component | Title | Content | Marks | Time | Weighting |
|-----------|-------|---------|-------|------|-----------|
| **Component 1** | Breadth Study with Interpretations | Historical breadth with historiographical debate | 80 | 2hr 30m | 40% |
| **Component 2** | Depth Study with Sources | In-depth period with primary source analysis | 80 | 2hr 30m | 40% |
| **Component 3** | Historical Investigation (NEA) | 3500-4500 word personal study | 40 | N/A | 20% |

### Question Types
- Short explain questions (8 marks)
- Source analysis (12 marks)
- Extended essay (25 marks)
- Interpretations evaluation (25 marks)

### Command Words
- **Explain**: Set out causes, results or effects, linking together
- **Assess**: Consider several options or arguments and weigh them up
- **To what extent**: Measure the validity of a view
- **How far**: Same as 'to what extent' - evaluate a claim
- **How convincing**: Evaluate an interpretation using own knowledge
- **How useful**: Assess a source's value for a specific enquiry
`;

const AQA_ALEVEL_HIST_QUESTION_TEMPLATES = `
## Authentic AQA A-Level History Question Formats

### Type 1: Short Explain (8 marks)
Format: "Explain why [event/development occurred]"
**Examples:**
- "Explain why the Pilgrimage of Grace posed such a serious threat to Henry VIII" [8 marks]
- "Explain why Stalin was able to defeat his rivals in the leadership contest 1924-1929" [8 marks]
Marking: Levels 1-4 based on range, depth, and analytical explanation

**8-Mark Levels:**
- Level 4 (7-8): Sophisticated explanation; excellent range and depth
- Level 3 (5-6): Developed explanation; good range
- Level 2 (3-4): Simple explanation; limited range
- Level 1 (1-2): Basic; limited understanding

### Type 2: Source Analysis (12 marks)
Format: "With reference to Sources [X], [Y] and [Z], and your understanding of the historical context, assess the value of these three sources to a historian studying..."
**Examples:**
- "...assess the value of these three sources to a historian studying the causes of the English Civil War" [12 marks]
Marking: Levels 1-4 based on evaluation of all three sources using content, provenance and context

**12-Mark Levels:**
- Level 4 (10-12): Sophisticated analysis; all sources well evaluated
- Level 3 (7-9): Developed analysis; all sources considered
- Level 2 (4-6): Simple analysis; sources described
- Level 1 (1-3): Very limited; minimal source use

### Type 3: Extended Essay (25 marks)
Format: "'[Statement]' Assess the validity of this view." or "How far do you agree that [claim]?"
**Examples:**
- "'The main reason for the Nazi consolidation of power in 1933-1934 was the use of terror.' Assess the validity of this view." [25 marks]
- "How far do you agree that economic factors were the main cause of the French Revolution?" [25 marks]
Marking: Levels 1-5 based on argument, range of factors, and judgement

### Type 4: Interpretations (25 marks)
Format: "Using your understanding of the historical context, assess how convincing the arguments in these three extracts are in relation to..."
**Examples:**
- "...assess how convincing the arguments in these three extracts are in relation to the reasons for Hitler's rise to power" [25 marks]
Marking: Levels 1-5 based on evaluation of interpretations using own knowledge
`;

const AQA_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level History Mark Scheme Conventions

### 25-Mark Extended Essay Levels

**Level 5 (21-25 marks):**
- Answer consistently analyses the key issues
- Addresses the specific demands of the question
- Demonstrates sophisticated understanding of concepts
- Range of accurate and detailed knowledge
- Synoptic links where appropriate
- Well-organised and clearly communicated
- Makes and supports a convincing, substantiated judgement

**Level 4 (16-20 marks):**
- Answer analyses the key issues
- Addresses the specific demands of the question
- Shows good understanding of concepts
- Good range of detailed knowledge
- Clear organisation
- Makes a supported judgement

**Level 3 (11-15 marks):**
- Answer shows some understanding of key issues
- Partly addresses the specific demands
- Some understanding of concepts
- Range of knowledge, varying in detail
- Some organisation
- Offers a judgement with partial support

**Level 2 (6-10 marks):**
- Answer shows limited understanding
- Limited address of question demands
- Limited understanding of concepts
- Limited range of knowledge
- Limited organisation
- Judgement may be asserted rather than supported

**Level 1 (1-5 marks):**
- Answer shows very limited understanding
- Minimal address of question
- Very limited knowledge
- Weak or no judgement

**0 marks:** Nothing worthy of credit

### 25-Mark Interpretations Levels

**Level 5 (21-25 marks):**
- Evaluates all three extracts
- Demonstrates sophisticated analysis of interpretations
- Excellent contextual own knowledge
- Reaches substantiated judgement about all three

**Level 4 (16-20 marks):**
- Evaluates all three extracts
- Good analysis of interpretations
- Good contextual knowledge
- Reaches judgement with support

**Level 3 (11-15 marks):**
- Some evaluation of extracts
- Some analysis of interpretations
- Some contextual knowledge
- Partial judgement

**Level 2 (6-10 marks):**
- Limited evaluation
- Basic analysis
- Limited knowledge
- Weak judgement

**Level 1 (1-5 marks):**
- Very limited evaluation
- Minimal analysis
- Very limited knowledge

### Key Historical Concepts
- Causation and consequence
- Change and continuity
- Similarity and difference
- Significance
- Second-order concepts essential at A-Level
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const RUSSIA_1855_1964_KNOWLEDGE = `
## Tsarist and Communist Russia 1855-1964: Essential Knowledge

### ALEXANDER II (1855-1881) - "Tsar Liberator"
**Emancipation of the Serfs 1861:**
- 23 million serfs freed (40% of population)
- Redemption payments over 49 years at 6% interest
- Land allocation: peasants received 80% of land they previously farmed
- Mir (commune) retained collective responsibility
- Problems: "redemption debt trap", land hunger, tied to mir

**Other Great Reforms:**
- Zemstva 1864: local elected councils (3.5 million involved by 1914)
- Judicial reforms 1864: trial by jury, public proceedings, irremovable judges
- Military reforms 1874: universal conscription, 6-year service reduced from 25
- Education: universities given autonomy 1863, gymnasiums expanded

**Opposition and Repression:**
- Populist movement (Narodniks): "going to the people" 1874 failed
- Land and Liberty 1876 → People's Will 1879 (terrorist wing)
- Alexander assassinated 1 March 1881 by People's Will bomb

### ALEXANDER III (1881-1894) - "Reaction and Repression"
**Counter-Reforms:**
- Land Captains 1889: noble officials controlling peasants
- Reduced zemstva powers 1890, property qualifications raised
- University Statute 1884: removed autonomy
- Okhrana (secret police) expanded

**Russification:**
- Russian language enforced in Poland, Baltic, Finland
- Anti-Jewish pogroms: May Laws 1882, Pale of Settlement enforced
- Over 2 million Jews emigrated 1881-1914

**Economic Development:**
- Witte as Finance Minister from 1892
- Trans-Siberian Railway begun 1891 (completed 1904)
- Industrial output doubled 1890-1900
- Foreign investment: 33% of total capital by 1914

### NICHOLAS II (1894-1917) - "The Last Tsar"
**1905 Revolution:**
- Bloody Sunday 22 January: 200+ killed at Winter Palace
- General strike October 1905: 2.5 million workers
- October Manifesto: promised Duma, civil liberties, wider franchise
- Fundamental Laws April 1906: Tsar retained autocratic power

**Stolypin's Reforms (1906-1911):**
- "Wager on the strong": kulaks encouraged
- By 1916: 24% of peasants left commune, 10% consolidated holdings
- Repression: "Stolypin's necktie" - 3,000 executed 1906-1909
- Assassinated September 1911

**WWI and Collapse:**
- Tannenberg August 1914: 30,000 killed, 90,000 captured
- 1.7 million dead by 1917
- Nicholas took command September 1915 - directly blamed for defeats
- Rasputin's influence alienated elite support
- February Revolution 1917: bread riots, 90,000 on strike, army mutiny

### PROVISIONAL GOVERNMENT (March-October 1917)
- Dual power: Soviets controlled army (Order No. 1)
- Kerensky became PM July 1917
- Continued WWI - fatal decision
- Kornilov Affair August 1917: armed Bolsheviks to defend Petrograd
- "All power to the Soviets" - Lenin's April Theses

### OCTOBER REVOLUTION AND CONSOLIDATION
**October 1917:**
- Bolsheviks seized power 25-26 October
- Stormed Winter Palace with minimal resistance
- Second Congress of Soviets: Bolshevik majority

**Early Decrees:**
- Peace: armistice December 1917
- Land: landlord estates distributed to peasants
- Workers' Control: factory committees
- Nationalities: right to self-determination

**Treaty of Brest-Litovsk March 1918:**
- Lost 34% of population, 32% of agricultural land, 54% of industry
- Caused Left SR split and attempted assassination of Lenin

### CIVIL WAR (1918-1921)
**Forces:**
- Reds: 5 million strong by 1920, Trotsky's leadership
- Whites: Kolchak, Denikin, Wrangel - disunited, reactionary image
- Greens: peasant armies, Makhno in Ukraine
- Foreign intervention: 14 nations, limited commitment

**War Communism:**
- Grain requisitioning: food brigades seized 22 million tons 1918-21
- Nationalisation of industry
- Ban on private trade
- Labour conscription

**Results:**
- 10 million deaths (including famine)
- Red victory by 1921 - centralisation, geography, White divisions

### NEW ECONOMIC POLICY (1921-1928)
**Kronstadt Rebellion March 1921:**
- "Soviets without Communists" - sailors demanded reform
- Crushed by Red Army: 10,000 casualties

**NEP Policies:**
- Tax in kind replaced requisitioning (10% of grain)
- Small private enterprise allowed (Nepmen)
- Commanding heights retained: heavy industry, banking, foreign trade
- "Scissors crisis" 1923: industrial prices vs agricultural

**Results:**
- By 1926: agricultural output reached 1913 levels
- Industrial recovery slower
- "Breathing space" or "retreat"?

### STALIN'S RISE TO POWER (1924-1929)
**Lenin's Testament:**
- Warned against Stalin: "too rude"
- Suppressed by Central Committee

**Power Struggle:**
- Triumvirate (Stalin, Zinoviev, Kamenev) vs Trotsky 1923-25
- Stalin + Bukharin vs Left Opposition 1925-27
- Stalin vs Right Opposition (Bukharin) 1928-29

**Stalin's Advantages:**
- General Secretary from 1922: controlled appointments (nomenklatura)
- "Socialism in one country" vs "permanent revolution"
- Grey blur: underestimated by rivals

### COLLECTIVISATION (1929-1941)
**Implementation:**
- 1929: 4% of farms collectivised → 1936: 90%
- Kolkhozy (collective) and sovkhozy (state farms)
- Dekulakisation: 1.8 million deported 1930-31

**Famine 1932-33:**
- 5-7 million deaths (Ukraine, Kazakhstan worst affected)
- Procurement quotas maintained despite crop failure
- Holodomor: deliberate genocide or policy failure?

**Results:**
- Grain procurement doubled 1928-31
- But livestock devastated: horses halved, cattle reduced by 1/3
- Peasant resistance: 2,200 uprisings in March 1930 alone

### INDUSTRIALISATION: FIVE-YEAR PLANS
**First Five-Year Plan (1928-1932):**
- "We are 50-100 years behind. We must make good this distance in 10 years."
- Coal: 35 → 64 million tons
- Steel: 4 → 6 million tons
- Showpiece projects: Magnitogorsk, Dneprostroi Dam

**Second Five-Year Plan (1933-1937):**
- More realistic targets, quality emphasis
- Stakhanovite movement 1935
- Heavy industry continued priority

**Third Five-Year Plan (1938-1941):**
- Rearmament focus
- Interrupted by WWII

**Human Cost:**
- Forced labour: Gulag population 1.5 million by 1941
- White Sea Canal: 25,000 deaths
- Urban overcrowding, rationing to 1935

### THE GREAT TERROR (1936-1938)
**Show Trials:**
- 1936: Zinoviev, Kamenev - executed
- 1937: Radek, Pyatakov
- 1938: Bukharin, Rykov - executed

**Scale:**
- 750,000 executed 1937-38
- 1.5 million arrested in 1937-38 alone
- Red Army purged: 3/5 marshals, 13/15 army commanders

**Explanations:**
- Stalin's paranoia
- Institutional dynamics (Conquest)
- Local initiatives spiralling (Getty)
- Genuine belief in sabotage

### GREAT PATRIOTIC WAR (1941-1945)
**Operation Barbarossa June 1941:**
- 3 million German troops, largest invasion in history
- By December: 3 million Soviet POWs, reached Moscow suburbs

**Turning Points:**
- Stalingrad (August 1942-February 1943): 800,000 German casualties
- Kursk July 1943: largest tank battle in history

**Soviet Victory Factors:**
- Lend-Lease: $11 billion US aid (trucks, food, equipment)
- Evacuation of 1,500 factories eastward
- Patriotism and Stalin's leadership cult
- German brutality united resistance

**Cost:**
- 27 million Soviet deaths (14% of population)
- 1,700 towns destroyed
- 70,000 villages destroyed

### POST-WAR STALINISM (1945-1953)
**Fourth Five-Year Plan:**
- Reconstruction priority
- 1950: industrial output exceeded 1940 levels

**Renewed Terror:**
- Zhdanovshchina: cultural conformity
- Leningrad Affair 1948-50
- Doctors' Plot 1953: arrested Jewish doctors
- Anti-Semitic campaign

**Death of Stalin 5 March 1953:**
- Suffered stroke 1 March
- Collective leadership initially

### KHRUSHCHEV ERA (1953-1964)
**Power Struggle:**
- Beria arrested June 1953, executed December
- Malenkov vs Khrushchev rivalry
- Anti-Party Group defeated 1957
- Khrushchev sole leader by 1958

**Secret Speech February 1956:**
- 20th Party Congress
- Denounced Stalin's "cult of personality"
- Revealed show trial falsification
- Triggered Hungarian Uprising

**De-Stalinisation:**
- Gulag releases: 4 million by 1956
- Rehabilitation of victims
- Solzhenitsyn's "One Day in the Life of Ivan Denisovich" 1962

**Reforms and Problems:**
- Virgin Lands scheme: initial success, then dust bowl
- Housing: prefab apartments (Khrushchevki)
- 1962: Novocherkassk massacre (26 killed)
- Cuban Missile Crisis humiliation

**Fall October 1964:**
- Removed by Central Committee
- "Hare-brained schemes" accusation
- Replaced by Brezhnev

### KEY HISTORIOGRAPHICAL DEBATES
**Totalitarian School (Conquest, Pipes):**
- Stalin's personal responsibility for terror
- Continuity Lenin → Stalin
- Ideology as driving force

**Revisionist School (Getty, Fitzpatrick):**
- Local initiatives and chaos
- Popular participation
- Modernisation theory

**Key Questions:**
- Was October 1917 coup or revolution?
- Was Stalin's terror planned or reactive?
- How much continuity from Tsarism through Soviet period?
- Was modernisation "worth" the human cost?

### KEY STATISTICS
| Period | Key Figure |
|--------|-----------|
| 1861 | 23 million serfs freed |
| 1914 | 125 million population |
| 1917 | 2 million war dead |
| 1921 | 10 million civil war/famine dead |
| 1932-33 | 5-7 million famine deaths |
| 1937-38 | 750,000 executed |
| 1941-45 | 27 million war dead |
| 1953 | Gulag: 2.5 million inmates |
`;

const TUDORS_KNOWLEDGE = `
## The Tudors: England 1485-1603 Essential Knowledge

### HENRY VII (1485-1509) - Establishing the Dynasty
**Claim and Consolidation:**
- Battle of Bosworth 22 August 1485: Richard III killed
- Weak Lancastrian claim through mother Margaret Beaufort
- Married Elizabeth of York January 1486: united houses
- Crowned before marriage to assert independent claim

**Yorkist Threats:**
- Lambert Simnel 1487: claimed to be Earl of Warwick
- Battle of Stoke 16 June 1487: last battle of Wars of Roses
- Simnel made kitchen servant (Tudor mercy/propaganda)
- Perkin Warbeck 1491-99: claimed to be Richard of York
- Supported by Margaret of Burgundy, James IV of Scotland, Emperor Maximilian
- Executed November 1499 after escape attempt

**Government and Finance:**
- Council Learned in the Law: Empson and Dudley extracted money
- Revenue: £113,000 p.a. by 1509 (vs £52,000 in 1485)
- Bonds and recognisances: £30,000 annually for good behaviour
- Chamber finance: personal control over finances
- Royal prerogative enforced: feudal dues, fines, customs

**Foreign Policy:**
- Treaty of Medina del Campo 1489: Spanish alliance
- Arthur-Catherine of Aragon marriage 1501
- Magnus Intercursus 1496: Burgundian trade agreement
- Cautious, avoided expensive wars

### HENRY VIII (1509-1547) - Power and Reformation
**Character and Early Reign:**
- Succeeded aged 17: athletic, cultured Renaissance prince
- Married Catherine of Aragon June 1509
- Empson and Dudley executed: popular move
- War with France 1512-14: Battle of Spurs 1513
- Battle of Flodden September 1513: James IV killed

**Wolsey's Ascendancy (1514-1529):**
- Lord Chancellor 1515, Cardinal 1515, Papal Legate 1518
- Alter rex: controlled government, justice, diplomacy
- Field of Cloth of Gold 1520: Francis I meeting
- Failed anti-French diplomacy: shifted alliances repeatedly
- Star Chamber: 120 cases annually
- Fall 1529: failed to secure annulment

**The King's Great Matter:**
- Catherine failed to produce male heir (Mary b. 1516 only survivor)
- Anne Boleyn: Henry determined to marry by 1527
- Leviticus 20:21: marrying brother's widow cursed
- Pope Clement VII: prisoner of Charles V (Catherine's nephew)
- Catherine's steadfast refusal to accept annulment

**Break with Rome:**
- Thomas Cromwell: rose from 1530
- Reformation Parliament 1529-36: statutory revolution
- Act of Supremacy 1534: king "Supreme Head of Church"
- Treason Act 1534: opposing supremacy = treason
- Thomas More executed July 1535: refused Oath of Supremacy

**Dissolution of Monasteries:**
- Valor Ecclesiasticus 1535: survey of church wealth
- Smaller monasteries dissolved 1536
- Larger monasteries 1538-40
- 800 religious houses closed
- £1.3 million assets transferred
- Land sales: created new Protestant gentry interest

**Pilgrimage of Grace 1536:**
- 30,000+ rebels in Yorkshire/Lincoln
- Robert Aske led "pilgrimage" for old religion
- Demands: monasteries restored, Cromwell removed
- Henry negotiated then executed 200+ leaders
- Largest Tudor rebellion

**Later Years:**
- Six marriages: Catherine, Anne Boleyn (executed 1536), Jane Seymour (died 1537), Anne of Cleves, Catherine Howard (executed 1542), Catherine Parr
- Edward born 1537 to Jane Seymour
- Act of Six Articles 1539: maintained Catholic doctrine
- War with France 1544-46: captured Boulogne
- Debased coinage: "old coppernose"
- Cromwell executed 1540

### EDWARD VI (1547-1553) - Protestant Revolution
**Somerset Protectorate (1547-1549):**
- Edward acceded aged 9
- Edward Seymour (Duke of Somerset) as Lord Protector
- First Prayer Book 1549: English services, ambiguous theology
- Chantries dissolved 1547
- Scottish policy failed: Battle of Pinkie 1547 but no conquest

**1549 Rebellions:**
- Western Rebellion: Prayer Book condemned as "Christmas game"
- Kett's Rebellion: 16,000 rebels, enclosure grievances
- Both crushed with foreign mercenaries

**Northumberland (1549-1553):**
- John Dudley ousted Somerset (executed 1552)
- Second Prayer Book 1552: clearly Protestant
- 42 Articles 1553: Protestant doctrine
- Economic stabilisation

**Succession Crisis:**
- Edward dying of TB, aged 15
- Devised crown to Lady Jane Grey (Protestant cousin)
- Mary Tudor had strong claim, popular support
- Jane Grey queen 10-19 July 1553: nine days
- Executed February 1554

### MARY I (1553-1558) - Catholic Restoration
**Catholic Restoration:**
- Only surviving child of Catherine of Aragon
- Heresy laws revived 1554
- Papal supremacy restored 1554
- Burnings: 284 Protestants executed 1555-58
- Cranmer, Ridley, Latimer burned 1555-56
- "Bloody Mary" reputation (Protestant propaganda)

**Spanish Marriage:**
- Married Philip II of Spain July 1554
- Wyatt's Rebellion January 1554: 4,000 rebels reached London
- Marriage treaty protected English interests
- Philip absent most of reign, no heir

**Foreign Policy:**
- Drawn into Spanish wars
- Calais lost January 1558: "Calais on my heart"
- French alliance with Scotland continued threat

**Death November 1558:**
- Possibly ovarian cancer
- False pregnancies embarrassed regime
- Elizabeth heir under 1544 Succession Act

### ELIZABETH I (1558-1603) - The Virgin Queen
**Religious Settlement 1559:**
- Act of Supremacy: "Supreme Governor" (not Head)
- Act of Uniformity: Third Prayer Book (ambiguous)
- 39 Articles 1563: moderate Protestant doctrine
- Via media: middle way between extremes

**Catholic Threats:**
- Mary Queen of Scots fled to England 1568
- Northern Rebellion 1569: 6,000 rebels, crushed
- Papal Bull 1570: excommunicated Elizabeth
- Ridolfi Plot 1571, Throckmorton Plot 1583, Babington Plot 1586
- Mary executed February 1587

**Puritan Pressure:**
- Vestments controversy 1560s
- Prophesyings: Elizabeth suspended, Grindal suspended
- Whitgift's Three Articles 1583: conformity enforced
- Classical movement suppressed 1590s

**War with Spain:**
- Drake's circumnavigation 1577-80
- Support for Dutch rebels from 1585
- Singeing of King of Spain's beard 1587
- Spanish Armada 1588: 130 ships, defeated by weather/English tactics
- "I have the heart and stomach of a king"

**Government:**
- William Cecil (Burghley): Secretary 1558-72, Lord Treasurer 1572-98
- Robert Cecil: succeeded father
- Privy Council: 19 members, efficient
- Parliament: met 13 times, taxation and legislation
- Local government: JPs, Lords Lieutenant

**Ireland:**
- Plantation policy in Munster
- Nine Years War 1594-1603: Tyrone rebellion
- £2 million cost, 30,000 English troops
- Settlement after Elizabeth's death

**Economic and Social:**
- Poor Laws 1597-1601: parish responsibility, outdoor relief
- Statute of Artificers 1563: wage/apprenticeship regulation
- Inflation: prices trebled 1500-1600
- Population: 2.8 million (1541) → 4.1 million (1601)

**Final Years:**
- Essex Rebellion February 1601: failed coup, execution
- "I know I have the body of a weak and feeble woman"
- Golden Speech 1601: "I have reigned with your loves"
- Died 24 March 1603, never married, no heir
- James VI of Scotland succeeded

### KEY HISTORIOGRAPHICAL DEBATES
**Tudor Revolution in Government (Elton):**
- Cromwell created modern bureaucratic state 1530s
- Medieval household → national administration
- Challenged: evolution not revolution

**High Politics vs Social History:**
- Traditional: monarch-centred narrative
- Revisionist: local studies, social/economic forces
- Post-revisionist: both matter

**Key Questions:**
- How "absolute" were Tudor monarchs?
- Why did Reformation succeed in England?
- How important were personalities vs structures?
- How did Elizabeth manage faction without marriage?

### KEY DATES
| Year | Event |
|------|-------|
| 1485 | Bosworth, Henry VII king |
| 1487 | Simnel rebellion defeated |
| 1534 | Act of Supremacy |
| 1536 | Pilgrimage of Grace |
| 1547 | Edward VI accedes |
| 1549 | Western/Kett rebellions |
| 1553 | Mary I accedes |
| 1558 | Elizabeth I accedes |
| 1559 | Religious Settlement |
| 1569 | Northern Rebellion |
| 1587 | Mary Queen of Scots executed |
| 1588 | Spanish Armada |
| 1603 | Elizabeth dies |
`;

const COLD_WAR_KNOWLEDGE = `
## The Cold War c.1945-1991: Essential Knowledge

### ORIGINS (1945-1947)
**Wartime Alliance Tensions:**
- Second Front delays: Stalin suspicious (D-Day June 1944)
- Percentage Agreement October 1944: Churchill-Stalin spheres
- Yalta February 1945: Poland, UN, Germany divided
- Potsdam July 1945: Truman, atomic bomb revealed

**Ideological Division:**
- Capitalism vs Communism: fundamentally incompatible
- Soviet security vs Western freedom
- US: open world economy, self-determination
- USSR: buffer zone, security through control

**Soviet Expansion:**
- Poland: Lublin Committee, not London Poles
- Romania, Bulgaria: Communist governments 1945-46
- Czechoslovakia: coalition to Communist coup February 1948
- "Salami tactics": slice by slice takeover

**Iron Curtain:**
- Churchill's Fulton speech March 1946
- "From Stettin in the Baltic to Trieste in the Adriatic"
- Kennan's Long Telegram February 1946: containment origins
- Novikov telegram September 1946: US imperialist

### EARLY COLD WAR (1947-1953)
**Truman Doctrine March 1947:**
- $400 million aid to Greece and Turkey
- "Support free peoples resisting subjugation"
- Containment policy formalised
- Open-ended global commitment

**Marshall Plan 1947-1951:**
- $13 billion European Recovery Program
- 16 Western European nations participated
- Soviet bloc rejected (pressure from Moscow)
- Economic recovery + political stability
- COMECON 1949: Soviet response

**Berlin Blockade 1948-49:**
- Currency reform triggered crisis
- 24 June 1948: all road/rail access cut
- Berlin Airlift: 277,000 flights, 2.3 million tons
- May 1949: Soviets lifted blockade
- Created West Germany (FRG) and East Germany (GDR)

**NATO April 1949:**
- 12 original members (US, Canada, 10 European)
- Article 5: attack on one = attack on all
- US troops stationed in Europe permanently
- Warsaw Pact 1955: Soviet response

**China 1949:**
- Communist victory October 1949
- "Who lost China?" debate in US
- Sino-Soviet Treaty 1950
- Shifted Asian balance

**Korean War 1950-1953:**
- 25 June 1950: North invaded South
- UN response (Soviet boycott)
- Chinese intervention November 1950
- Stalemate, 38th parallel armistice
- 5 million deaths, Cold War militarised
- NSC-68: US defence budget tripled

### NUCLEAR ARMS RACE
**Development:**
- 1945: US atomic monopoly
- 1949: Soviet atomic bomb (earlier than expected)
- 1952: US hydrogen bomb (1,000x more powerful)
- 1953: Soviet H-bomb
- 1957: Sputnik, Soviet ICBM capability

**Doctrines:**
- Massive Retaliation 1954: nuclear response to any aggression
- MAD (Mutual Assured Destruction): neither side could "win"
- Flexible Response 1961: conventional options

**Key Moments:**
- Cuban Missile Crisis: closest to nuclear war
- Limited Test Ban Treaty 1963: atmospheric tests banned
- Non-Proliferation Treaty 1968

### KHRUSHCHEV ERA (1953-1964)
**De-Stalinisation:**
- Secret Speech February 1956
- "Peaceful coexistence" with West
- But Soviet security interests maintained

**Hungary 1956:**
- October uprising: Nagy government
- Multi-party system, Warsaw Pact withdrawal announced
- Soviet invasion 4 November: 2,500 Hungarians killed
- Western non-intervention: limits of containment

**Berlin Crisis 1958-1961:**
- Khrushchev ultimatum November 1958: Berlin demilitarised
- 3 million fled East Germany 1949-1961
- Paris Summit 1960: U-2 incident collapsed talks
- Vienna Summit June 1961: Kennedy tested
- Berlin Wall 13 August 1961: flow stopped

**Cuban Missile Crisis October 1962:**
- Background: Bay of Pigs April 1961 failed
- Soviet missiles discovered 14 October
- 13-day crisis, naval quarantine
- Khrushchev withdrew missiles
- US promised: no invasion, Turkey missiles removed (secretly)
- Hotline established 1963
- "Eyeball to eyeball" - Rusk

### VIETNAM AND DETENTE (1964-1979)
**Vietnam War:**
- Gulf of Tonkin 1964: escalation
- 500,000 US troops by 1968
- Tet Offensive January 1968: psychological defeat
- Nixon: "Vietnamisation" from 1969
- Paris Accords 1973: US withdrawal
- Saigon fell April 1975

**Détente Motivations:**
- US: Vietnam exhaustion, economic pressures
- USSR: economic needs, Sino-Soviet split
- China: Nixon visit February 1972

**SALT I 1972:**
- ABM Treaty: 2 sites each
- Interim Agreement: froze ICBM numbers
- First nuclear limitation treaty

**Helsinki Accords 1975:**
- Basket I: borders recognised
- Basket II: economic cooperation
- Basket III: human rights (used by dissidents)

**Limits of Détente:**
- Arms race continued (MIRVs)
- Third World conflicts: Angola, Ethiopia
- Human rights: Jackson-Vanik Amendment

### SECOND COLD WAR (1979-1985)
**Afghanistan December 1979:**
- Soviet invasion to support Communist government
- Carter Doctrine: Persian Gulf vital interest
- Moscow Olympics boycott 1980
- $3 billion US aid to Mujahideen

**Reagan Policies:**
- "Evil Empire" speech March 1983
- Military build-up: $1.6 trillion over 5 years
- SDI ("Star Wars") March 1983: space-based defence
- Grenada invasion 1983
- Iran-Contra affair: funding Nicaraguan Contras

**Tensions:**
- Able Archer 83: Soviets feared first strike
- KAL 007 shot down September 1983
- Pershing II missiles in Europe: protests

### END OF COLD WAR (1985-1991)
**Gorbachev Reforms:**
- General Secretary March 1985
- Glasnost: openness, criticism allowed
- Perestroika: economic restructuring
- "New Thinking": reduced military spending

**Summits:**
- Geneva 1985: Reagan-Gorbachev first meeting
- Reykjavik 1986: near breakthrough on nuclear abolition
- Washington 1987: INF Treaty signed
- Moscow 1988: Reagan in Red Square

**INF Treaty 1987:**
- Eliminated intermediate-range nuclear missiles
- First treaty to reduce (not limit) weapons
- On-site verification

**Eastern Europe 1989:**
- Poland: Solidarity won elections June 1989
- Hungary: opened border to Austria
- Berlin Wall fell 9 November 1989
- Czechoslovakia: Velvet Revolution
- Romania: violent overthrow of Ceausescu
- Gorbachev: "Sinatra Doctrine" - do it their way

**German Reunification:**
- March 1990: East German elections
- October 1990: Germany unified
- NATO membership: Soviet acceptance

**End of USSR:**
- Baltic independence movements
- August 1991: failed coup against Gorbachev
- December 1991: USSR dissolved
- Russia, Ukraine, Belarus: CIS formed
- 25 December 1991: Gorbachev resigned
- Cold War ended

### KEY HISTORIOGRAPHICAL DEBATES
**Orthodox/Traditional:**
- Soviet expansion caused Cold War
- Stalin's ideology aggressive
- US responded defensively

**Revisionist (1960s-70s):**
- US economic imperialism
- Atomic diplomacy: Hiroshima aimed at USSR
- Stalin's actions defensive

**Post-Revisionist:**
- Both sides contributed
- Mutual misperception
- Systemic factors: bipolarity

**Key Questions:**
- Who started the Cold War?
- Was Cold War inevitable?
- Why did détente fail?
- Why did USSR collapse?

### KEY STATISTICS
| Event | Figure |
|-------|--------|
| Marshall Plan | $13 billion |
| Berlin Airlift | 277,000 flights |
| Korean War deaths | 5 million |
| Vietnam US troops | 500,000 peak |
| Reagan military buildup | $1.6 trillion |
| Nuclear weapons peak | 70,000 (1986) |
`;

const USA_SUPERPOWER_KNOWLEDGE = `
## The Making of a Superpower: USA 1865-1975 Essential Knowledge

### RECONSTRUCTION (1865-1877)
**Presidential Reconstruction (1865-1867):**
- Lincoln's 10% Plan: lenient readmission
- Andrew Johnson: continued leniency
- Black Codes: restricted freedmen's rights
- 13th Amendment 1865: abolished slavery

**Radical Reconstruction (1867-1877):**
- Reconstruction Acts 1867: military districts, Black voting
- 14th Amendment 1868: citizenship, equal protection
- 15th Amendment 1870: voting rights regardless of race
- Freedmen's Bureau: 4 million aided
- Black Congressmen: 16 in House, 2 Senators

**End of Reconstruction:**
- Ku Klux Klan terrorism: 3,000 killed 1865-1876
- Enforcement Acts 1870-71: limited effectiveness
- Compromise of 1877: Hayes presidency, troops withdrawn
- "Redemption": Democratic South regained control

### JIM CROW ERA (1877-1914)
**Legal Framework:**
- Plessy v Ferguson 1896: "separate but equal"
- Literacy tests, poll taxes, grandfather clauses
- Black voting: 130,000 (1896) → 5,000 (1900) in Louisiana

**Violence and Terror:**
- 4,000+ lynchings 1877-1950
- Race riots: Atlanta 1906, Springfield 1908
- Wilmington coup 1898: only coup in US history

**African American Responses:**
- Booker T. Washington: accommodation, economic self-help
- Atlanta Compromise 1895: accept segregation temporarily
- W.E.B. Du Bois: immediate civil rights, "Talented Tenth"
- NAACP founded 1909

### GILDED AGE (1870-1900)
**Industrial Growth:**
- Railroad mileage: 35,000 (1865) → 254,000 (1916)
- Steel production: world leader by 1890
- Oil: Standard Oil controlled 90% of refining

**Big Business:**
- Rockefeller (oil), Carnegie (steel), Morgan (banking)
- Horizontal/vertical integration
- "Robber barons" vs "captains of industry"
- Sherman Anti-Trust Act 1890: limited enforcement

**Immigration:**
- 10.5 million immigrants 1860-1890
- "New immigration": Southern/Eastern Europe from 1880s
- Ellis Island opened 1892
- Nativism: American Protective Association

**Labour:**
- Knights of Labor: 700,000 members by 1886
- Haymarket Affair 1886: anarchist bomb
- Homestead Strike 1892: Pinkertons vs Carnegie workers
- Pullman Strike 1894: federal intervention

### PROGRESSIVE ERA (1900-1920)
**Roosevelt Progressivism:**
- Trust-busting: 44 anti-trust suits
- Northern Securities case 1904
- Meat Inspection/Pure Food and Drug Acts 1906
- Conservation: 150 million acres protected
- Square Deal: labour-business balance

**Wilson's New Freedom:**
- Federal Reserve Act 1913
- Clayton Anti-Trust Act 1914
- Federal Trade Commission 1914
- Income tax: 16th Amendment 1913
- Direct election of Senators: 17th Amendment 1913

**WWI:**
- Neutrality 1914-1917
- Zimmermann Telegram, unrestricted submarine warfare
- April 1917: US declared war
- 4 million mobilised, 116,000 deaths
- War Industries Board: government-business cooperation
- Versailles Treaty rejected: return to isolation

### 1920s PROSPERITY AND TENSIONS
**Republican Prosperity:**
- "Return to normalcy" - Harding
- Business-government partnership
- Tax cuts: top rate 73% → 25%
- GDP grew 40% 1920-1929

**Consumer Boom:**
- Cars: 8 million (1920) → 23 million (1929)
- Radio: 60% of homes by 1929
- Credit: buying on installment
- Advertising: $3 billion annually

**Social Tensions:**
- First Red Scare 1919-1920: Palmer Raids
- Immigration restriction: quotas 1921, 1924
- Sacco and Vanzetti executed 1927
- KKK revival: 4 million members by 1924
- Prohibition: 18th Amendment (1919-1933)
- Scopes Trial 1925: evolution vs fundamentalism

### GREAT DEPRESSION (1929-1941)
**Wall Street Crash October 1929:**
- Black Thursday (24th), Black Tuesday (29th)
- Stock prices fell 90% by 1932
- 9,000 banks failed

**Impact:**
- Unemployment: 25% (1933)
- Industrial production: halved
- Farm income: fell 60%
- Hoovervilles: homeless camps

**Hoover's Response:**
- Initially: voluntarism, limited intervention
- RFC 1932: loans to businesses
- Bonus Army 1932: veterans dispersed by military
- Unpopular, defeated 1932

**FDR and New Deal:**
- First Hundred Days 1933
- Alphabet agencies: CCC, TVA, NRA, AAA
- Banking holiday: restored confidence
- Fireside chats: communication

**Second New Deal (1935-1936):**
- Social Security Act 1935
- Wagner Act 1935: union rights
- WPA: 8.5 million employed
- Revenue Act 1935: "soak the rich"

**Opposition:**
- Supreme Court: struck down NRA, AAA
- Court-packing plan 1937: failed
- Huey Long: "Share Our Wealth"
- Father Coughlin: radio priest
- Conservative coalition blocked reform after 1938

**New Deal Assessment:**
- Didn't end Depression (WWII did)
- Created safety net
- Expanded federal government
- African Americans: "Black Cabinet" but limited
- Union membership: 3 million → 9 million

### WWII AND EMERGENCE AS SUPERPOWER
**From Isolation to War:**
- Neutrality Acts 1935-1937
- Cash and Carry 1939
- Lend-Lease March 1941: $50 billion in aid
- Pearl Harbor 7 December 1941: 2,400 killed

**Home Front:**
- War production: "Arsenal of Democracy"
- GDP doubled 1939-1945
- Unemployment eliminated
- Women: 6 million entered workforce (Rosie the Riveter)
- Japanese internment: 120,000 relocated

**Global Role:**
- Atomic bombs: Hiroshima 6 August, Nagasaki 9 August
- UN founding member
- Bretton Woods: dollar as reserve currency
- Only major economy undamaged

### COLD WAR AND CIVIL RIGHTS
**Truman Era:**
- Truman Doctrine/Marshall Plan
- Fair Deal: limited success
- Executive Order 9981 (1948): military desegregation
- McCarthyism: HUAC, Hollywood blacklist

**Eisenhower:**
- "Modern Republicanism": accepted New Deal
- Interstate Highway System 1956
- Sputnik response: NASA, education spending

**Civil Rights Movement:**
- Brown v Board of Education 1954: "separate inherently unequal"
- Montgomery Bus Boycott 1955-56: King emerged
- Little Rock 1957: federal troops enforced integration
- Sit-ins 1960: Greensboro
- Freedom Rides 1961: interstate buses
- Birmingham 1963: Bull Connor, children's crusade
- March on Washington August 1963: 250,000, "I Have a Dream"
- Civil Rights Act 1964: public accommodations, employment
- Voting Rights Act 1965: federal oversight
- 24th Amendment 1964: banned poll tax

**Black Power:**
- Malcolm X: Black nationalism
- Stokely Carmichael: "Black Power" 1966
- Black Panthers 1966: armed self-defence
- Riots: Watts 1965, Detroit 1967, after King assassination 1968
- Kerner Commission: "two societies"

### VIETNAM AND TURMOIL (1963-1975)
**Escalation:**
- Kennedy: 16,000 advisers
- Gulf of Tonkin 1964: congressional resolution
- Johnson: 500,000 troops by 1968
- Operation Rolling Thunder: bombing campaign

**Tet Offensive January 1968:**
- Military defeat but psychological victory for North
- "Credibility gap": government lies exposed
- Johnson withdrew from 1968 race

**Nixon:**
- Vietnamisation: US withdrawal
- Cambodia invasion 1970: Kent State (4 killed)
- Paris Peace Accords January 1973
- Saigon fell April 1975

**Cost:**
- 58,000 US dead
- $150 billion spent
- War Powers Act 1973: congressional limits
- Veterans neglected

**Watergate:**
- Break-in June 1972
- Cover-up, Saturday Night Massacre
- Nixon resigned August 1974
- Ford pardon: controversial

### KEY HISTORIOGRAPHICAL DEBATES
**Reconstruction:**
- Dunning School: military occupation failed
- Revisionists (Foner): unfinished revolution

**New Deal:**
- Liberal: saved capitalism, helped workers
- Conservative: excessive intervention
- New Left: too limited, preserved capitalism

**Civil Rights:**
- King-centred narrative vs local movements
- Top-down vs bottom-up

### KEY STATISTICS
| Period | Key Figure |
|--------|-----------|
| 1865 | 4 million freed |
| 1896 | Plessy: "separate but equal" |
| 1929 | Stock market crash |
| 1933 | 25% unemployment |
| 1941 | Pearl Harbor: 2,400 dead |
| 1963 | March on Washington: 250,000 |
| 1965 | Voting Rights Act |
| 1973 | Vietnam withdrawal |
`;

const STUART_BRITAIN_KNOWLEDGE = `
## Stuart Britain and the Crisis of Monarchy 1603-1702 Essential Knowledge

### JAMES I (1603-1625)
**Union of Crowns:**
- James VI of Scotland became James I of England 1603
- First Stuart monarch of England
- "Wisest fool in Christendom" - Henri IV
- Divine right of kings: "Kings are God's lieutenants upon earth"

**Relations with Parliament:**
- Inherited £400,000 debt from Elizabeth
- Great Contract 1610: failed compromise on royal finances
- Addled Parliament 1614: no legislation passed
- Impositions: customs duties without parliamentary consent
- MPs increasingly assertive about rights and privileges

**Religious Issues:**
- Hampton Court Conference 1604: moderate Puritan demands largely rejected
- Authorised King James Bible 1611
- Maintained Elizabethan settlement broadly
- Catholics disappointed: Gunpowder Plot 5 November 1605
- 36 Catholics executed 1603-1618

**Finance:**
- Crown income inadequate for peacetime, let alone war
- Sold honours and titles: 900 knighthoods sold
- Monopolies caused resentment
- Buckingham's influence on patronage from 1615

**Foreign Policy:**
- Peace with Spain 1604
- Palatinate Crisis 1618: son-in-law Frederick lost throne
- Spanish Match negotiations 1623: failed, unpopular
- War with Spain 1624 under parliamentary pressure

### CHARLES I (1625-1649)
**Character and Early Reign:**
- Succeeded 1625, more reserved than father
- Married Henrietta Maria (Catholic) 1625
- Arminian religious preferences alarmed Puritans
- Buckingham dominated policy until assassination 1628

**Parliamentary Conflicts 1625-1629:**
- Parliament of 1625: granted only one year's Tonnage and Poundage
- Forced Loan 1626: refused by Five Knights (Darnel's Case)
- Petition of Right 1628: no taxation without consent, no arbitrary imprisonment
- Three Resolutions 1629: MPs held Speaker down
- Charles dissolved Parliament, ruled alone 1629-1640

**Personal Rule (1629-1640):**
- "Eleven Years Tyranny" (Whig view) or "Caroline Peace"?
- Ship Money: extended to inland counties 1635
- Hampden's Case 1637: king won but narrow margin
- £800,000 raised 1634-1638
- Distraint of Knighthood: fines for not attending coronation
- Forest Laws revived: enclosure fines

**Religious Policy:**
- William Laud Archbishop of Canterbury 1633
- "Beauty of holiness": altar rails, ceremonianism
- Visitations enforced conformity
- Prynne, Burton, Bastwick: mutilated for pamphlets 1637
- Book of Sports reissued 1633: Sabbatarian opposition

**Scottish Crisis:**
- Prayer Book imposed on Scotland 1637
- Jenny Geddes threw stool at St Giles' Cathedral
- National Covenant February 1638
- Bishops' Wars 1639-1640: humiliating defeats
- Treaty of Ripon October 1640: Scots occupied northern England

### LONG PARLIAMENT AND CIVIL WAR (1640-1649)
**Long Parliament Reforms (November 1640):**
- Triennial Act 1641: Parliament must meet every 3 years
- Attainder and execution of Strafford May 1641
- Ship Money abolished
- Star Chamber and High Commission abolished
- Tonnage and Poundage granted only temporarily

**Breakdown of Trust:**
- Irish Rebellion October 1641: reports of Protestant massacres
- Grand Remonstrance November 1641: passed by 159-148
- Five Members January 1642: Charles attempted arrest
- Militia Ordinance and Commissions of Array
- Nineteen Propositions June 1642
- Charles raised standard at Nottingham 22 August 1642

**Civil War Causes - Historiography:**
- Whig interpretation: constitutional liberty vs tyranny
- Marxist: rising bourgeoisie vs feudal aristocracy (Stone)
- Revisionist: short-term contingency, not inevitable (Russell)
- Post-revisionist: longer-term structural factors plus events (Cust)

**Military Campaigns:**
- Edgehill October 1642: inconclusive first major battle
- Newbury I September 1643: Parliament held
- Solemn League and Covenant 1643: Scottish alliance
- Marston Moor July 1644: North lost for King
- Second Newbury October 1644: indecisive
- New Model Army formed February 1645
- Naseby June 1645: decisive Parliamentary victory
- Charles surrendered to Scots May 1646

**Search for Settlement:**
- Newcastle Propositions 1646: too demanding for Charles
- Army and Parliament conflict 1647
- Putney Debates October-November 1647: Leveller demands
- Charles escaped to Isle of Wight
- Engagement with Scots December 1647
- Second Civil War 1648: quickly crushed
- Pride's Purge 6 December 1648: moderate MPs excluded

**Trial and Execution:**
- Trial began 20 January 1649
- 135 commissioners named, only 68 attended
- "Cruel necessity" - Cromwell
- Charles I executed 30 January 1649
- Martyrdom and Eikon Basilike

### INTERREGNUM (1649-1660)
**Commonwealth (1649-1653):**
- Rump Parliament: 200+ MPs expelled or withdrawn
- Council of State: 41 members
- Republic declared 19 May 1649
- Leveller mutiny crushed 1649
- Irish Campaign 1649-1650: Drogheda and Wexford
- Scotland conquered 1650-1651: Dunbar, Worcester
- Navigation Act 1651: trade regulation
- First Anglo-Dutch War 1652-1654

**Cromwellian Protectorate (1653-1658):**
- Barebone's Parliament July-December 1653: godly nominated assembly
- Instrument of Government December 1653: written constitution
- Lord Protector: Cromwell
- First Protectorate Parliament 1654-1655
- Major-Generals 1655-1656: 10 regions, moral reformation
- Second Protectorate Parliament 1656-1658
- Humble Petition and Advice 1657: kingship offered and refused
- Upper House reinstated

**Religious Settlement:**
- Established church retained but broader
- Triers and Ejectors: quality control of clergy
- Toleration for Protestant dissenters (not Catholics or Anglicans)
- Jews readmitted 1656

**Foreign Policy:**
- War with Spain 1655-1658
- Western Design: Jamaica captured 1655
- Alliance with France
- Dunkirk captured 1658

**Collapse:**
- Cromwell died 3 September 1658
- Richard Cromwell: "Tumbledown Dick"
- Army-Parliament conflict resumed
- Richard resigned May 1659
- Committee of Safety failed
- Monk marched from Scotland
- Convention Parliament restored Charles II May 1660

### RESTORATION (1660-1685)
**Restoration Settlement:**
- Declaration of Breda April 1660: amnesty, religious toleration, land settlement
- Convention Parliament restored monarchy
- Regicides executed (10)
- Land: returned to royalists only if not sold
- Indemnity and Oblivion: few prosecuted

**Clarendon Code:**
- Corporation Act 1661: Anglican communion for officeholders
- Act of Uniformity 1662: Book of Common Prayer required
- 2,000 ministers ejected
- Conventicle Act 1664: illegal meetings
- Five Mile Act 1665: excluded ministers from towns

**Financial Settlement:**
- Feudal dues abolished
- Hearth Tax 1662
- Customs and Excise granted for life
- But still inadequate: £1.2 million promised, received less

**Foreign Policy:**
- Sold Dunkirk to France 1662
- Second Anglo-Dutch War 1665-1667: humiliating
- Dutch raid on Medway 1667
- Triple Alliance 1668: brief Protestant alignment
- Secret Treaty of Dover 1670: French alliance, Catholic clauses

**Religion and Politics:**
- Declaration of Indulgence 1672: suspended penal laws
- Parliament forced withdrawal 1673
- Test Act 1673: excluded Catholics from office
- James Duke of York converted to Catholicism

**Popish Plot and Exclusion (1678-1681):**
- Titus Oates "revealed" Catholic conspiracy 1678
- 35 Catholics executed
- Exclusion Bills 1679, 1680, 1681: to exclude Catholic James
- Whigs vs Tories emerged
- Oxford Parliament 1681: Charles dissolved, ruled without Parliament
- Tory Reaction 1681-1685: persecution of dissenters

### JAMES II (1685-1688)
**Accession:**
- Succeeded February 1685
- Monmouth Rebellion June 1685: easily crushed
- Bloody Assizes: Judge Jeffreys, 300+ executed
- Army increased to 20,000

**Religious Policy:**
- Catholics appointed to army, universities, Privy Council
- Declaration of Indulgence April 1687: suspended penal laws
- Ecclesiastical Commission: suspended Bishop of London
- Magdalen College, Oxford: Catholic fellows imposed
- Seven Bishops Trial June 1688: acquitted, popular rejoicing

**Glorious Revolution:**
- Birth of Catholic heir June 1688
- "Immortal Seven" invited William of Orange
- William landed 5 November 1688
- Army deserted James
- James fled to France December 1688
- Convention Parliament declared throne vacant

**Revolutionary Settlement:**
- Bill of Rights 1689: parliamentary consent for taxation, free elections
- Mutiny Act: army required annual parliamentary consent
- Toleration Act 1689: worship for Protestant dissenters
- But Test Acts remained
- William and Mary joint sovereigns

### KEY HISTORIOGRAPHICAL DEBATES
**Causes of Civil War:**
- Whig: inevitable clash over constitution
- Marxist: class conflict (Hill, Stone)
- Revisionist: contingency, no long-term causes (Russell, Morrill)
- Post-revisionist: both structures and events matter

**Nature of English Revolution:**
- Conservative (Trevor-Roper): county community localism
- Radical (Hill): popular revolution suppressed
- Religious (Morrill): "England's wars of religion"

**Glorious Revolution:**
- Whig: triumph of constitutional liberty
- Revisionist: coup d'état, conservative
- European context: part of wider conflict with Louis XIV

### KEY STATISTICS
| Event | Date/Figure |
|-------|------------|
| Union of Crowns | 1603 |
| Gunpowder Plot | 5 November 1605 |
| Personal Rule | 1629-1640 |
| Long Parliament | 1640-1660 |
| Execution of Charles I | 30 January 1649 |
| Protectorate | 1653-1659 |
| Restoration | 1660 |
| Glorious Revolution | 1688 |
| Bill of Rights | 1689 |
`;

const GERMANY_1871_1991_KNOWLEDGE = `
## Germany 1871-1991: Quest for Political Stability Essential Knowledge

### IMPERIAL GERMANY (1871-1918)
**Bismarck's Constitution:**
- Federal structure: 25 states, Prussia dominant
- Kaiser: appointed Chancellor, controlled military/foreign policy
- Bundesrat: state representatives (Prussia 17/58 votes)
- Reichstag: elected by universal male suffrage but limited power
- "Revolution from above": unification without democracy

**Bismarck's Domestic Policy:**
- Kulturkampf 1871-1878: anti-Catholic campaign
- May Laws: state control of church education
- Abandoned 1878: Centre Party too strong, needed for anti-socialist alliance
- Anti-Socialist Laws 1878-1890: SPD banned
- Social insurance: sickness (1883), accident (1884), old age (1889)
- "State socialism": undercut SPD appeal

**Wilhelmine Germany:**
- Wilhelm II from 1888: personal rule, dismissed Bismarck 1890
- Weltpolitik: world policy, colonial expansion
- Naval Laws 1898, 1900: challenge Britain
- Daily Telegraph Affair 1908: constitutional crisis
- Zabern Affair 1913: military above law

**WWI:**
- Schlieffen Plan failed
- Burgfrieden: political truce
- War economy: rationing, Hindenburg Programme
- Unrestricted submarine warfare 1917
- Ludendorff Offensive March 1918: failed
- "Stab in the back" myth: blamed civilians

**Revolution 1918-19:**
- Kiel mutiny November 1918
- Kaiser abdicated 9 November
- Ebert-Groener Pact: army supported republic
- Spartacist Rising January 1919: crushed by Freikorps

### WEIMAR REPUBLIC (1919-1933)
**Weimar Constitution:**
- Most democratic in Europe
- President: 7-year term, Article 48 emergency powers
- Chancellor: needed Reichstag majority
- Proportional representation: coalition governments
- Bill of Rights: civil liberties

**Early Challenges (1919-1923):**
- Treaty of Versailles June 1919
  - War guilt (Article 231)
  - £6.6 billion reparations
  - Army: 100,000, no tanks/aircraft
  - Territory: Alsace-Lorraine, Rhineland occupied
- Kapp Putsch March 1920: right-wing, defeated by general strike
- Political violence: Rathenau assassinated 1922
- Ruhr occupation January 1923: French/Belgian
- Hyperinflation 1923: $1 = 4.2 trillion marks

**Stresemann Era (1923-1929):**
- Currency reform: Rentenmark
- Dawes Plan 1924: reparations restructured
- Locarno Treaties 1925: western borders
- League of Nations 1926
- Young Plan 1929: reduced reparations
- "Golden Twenties": cultural flourishing
- But: dependent on US loans

**Depression and Collapse:**
- Wall Street Crash: US loans recalled
- Unemployment: 6 million by 1932 (30%)
- Brüning's austerity 1930-32: "hunger chancellor"
- Article 48 rule: bypassed Reichstag
- Rise of extremes: Nazi vote 2.6% (1928) → 37% (1932)

### NAZI GERMANY (1933-1945)
**Consolidation of Power (1933-1934):**
- Hitler Chancellor 30 January 1933
- Reichstag Fire 27 February 1933: emergency decree
- Enabling Act 23 March 1933: legal dictatorship
- Trade unions banned May 1933
- Political parties banned July 1933
- Night of Long Knives June 1934: SA purged
- Hindenburg died August 1934: Hitler became Führer

**Nazi State:**
- One-party state
- Gleichschaltung: coordination of institutions
- SS under Himmler: 240,000 by 1939
- Gestapo: secret police
- Concentration camps: Dachau from 1933
- Propaganda: Goebbels, rallies, radio, film

**Economic Policy:**
- Unemployment: 6 million → 300,000 by 1939
- Autobahn, rearmament: public works
- Four-Year Plan 1936: autarky
- But: consumer goods neglected, deficit financing
- Guns vs butter debate

**Social Policy:**
- Volksgemeinschaft: people's community
- KdF: Strength Through Joy, leisure organisation
- Youth: Hitler Youth compulsory from 1936
- Women: Kinder, Küche, Kirche (children, kitchen, church)
- Churches: Concordat 1933, but increasing tension

**Racial Policy:**
- Nuremberg Laws 1935: Jews stripped of citizenship
- Kristallnacht November 1938: organised violence
- 91 killed, 30,000 to camps, synagogues destroyed
- Emigration encouraged, then banned

**Holocaust:**
- "Final Solution" from 1941
- Wannsee Conference January 1942: coordination
- Death camps: Auschwitz, Treblinka, Sobibor
- 6 million Jews killed
- Plus Roma, disabled, political opponents

**Foreign Policy and War:**
- Rearmament from 1935
- Rhineland remilitarised March 1936
- Anschluss March 1938
- Sudetenland September 1938
- Czechoslovakia March 1939
- Poland September 1939: WWII began
- Defeat May 1945: unconditional surrender

### DIVIDED GERMANY (1945-1990)
**Occupation (1945-1949):**
- Four zones: US, British, French, Soviet
- Denazification: varying success
- Nuremberg Trials 1945-46: war criminals
- Berlin: four sectors, isolated in Soviet zone
- Currency reform June 1948: triggered blockade

**Federal Republic (West Germany):**
- Basic Law May 1949: constitution
- Adenauer era 1949-1963
  - CDU dominance
  - Wirtschaftswunder: economic miracle
  - GDP grew 8% annually 1950s
  - NATO member 1955
  - European integration: ECSC, EEC
- Grand Coalition 1966-1969
- Brandt's Ostpolitik 1969-1974
  - Moscow Treaty 1970
  - Recognition of GDR
  - Nobel Peace Prize 1971
- RAF terrorism 1970s: Baader-Meinhof
- Schmidt 1974-1982: oil crisis management
- Kohl 1982-1998: reunification

**German Democratic Republic (East Germany):**
- SED dictatorship: Ulbricht then Honecker
- Stasi: 91,000 employees, 180,000 informers
- Collectivisation of agriculture
- Uprising June 1953: Soviet tanks
- Berlin Wall August 1961: stopped emigration
- Economic system: planned economy, inefficient
- "Niche society": private sphere focus

### REUNIFICATION (1989-1991)
**1989 Revolution:**
- Hungary opened border May 1989
- Monday demonstrations in Leipzig
- 9 November 1989: Berlin Wall opened
- "Wir sind das Volk" → "Wir sind ein Volk"

**Process:**
- March 1990: free East German elections
- Currency union July 1990
- Two Plus Four Treaty September 1990
- 3 October 1990: reunification
- Kohl promised "blossoming landscapes"

**Challenges:**
- Treuhand: privatised East German industry
- Unemployment soared in East
- "Ostalgie": nostalgia for GDR
- Cost: €2 trillion over 20 years

### KEY HISTORIOGRAPHICAL DEBATES
**Sonderweg (Special Path):**
- Germany's unique path to modernity
- Avoided Western liberal development
- Led to Nazism

**Intentionalist vs Structuralist:**
- Hitler's master plan vs bureaucratic chaos
- "Working towards the Führer"

**Holocaust:**
- Goldhagen: "willing executioners"
- Browning: ordinary men, situational factors

### KEY STATISTICS
| Year | Event |
|------|-------|
| 1871 | Unification |
| 1923 | Hyperinflation peak |
| 1932 | 6 million unemployed |
| 1933 | Hitler Chancellor |
| 1938 | Kristallnacht: 91 killed |
| 1942-45 | 6 million Jews killed |
| 1961 | Berlin Wall built |
| 1989 | Wall falls |
| 1990 | Reunification |
`;

// ============================================================================
// MODEL ANSWER STRUCTURES FOR A-LEVEL
// ============================================================================

const ALEVEL_MODEL_ANSWER_GUIDANCE = `
## A-Level Model Answer Structures

### 8-Mark Explain Question
**Structure:**
1. **Introduction** (1-2 sentences): Identify 2-3 key reasons
2. **Body paragraphs** (3 paragraphs): Each covering one reason
   - Point: State the reason clearly
   - Evidence: Specific factual support with dates/names/statistics
   - Explanation: How/why this caused the outcome
   - Link: Connect back to the question
3. **Brief conclusion**: Weigh relative importance if appropriate

**Example Opening:**
"There were several interconnected reasons why [X occurred]. The most significant factors were [A], [B], and [C], which together explain [the outcome]."

**Timing:** 12-15 minutes

### 12-Mark Source Analysis
**Structure:**
1. **Brief introduction**: State overall judgement on source value
2. **Three paragraphs** (one per source): For each source address:
   - Content: What does it reveal? Quote briefly
   - Provenance: Who wrote it? When? Why? For whom?
   - Context: What do you know about the period that confirms/challenges it?
   - Limitations: What doesn't it tell us? What bias might exist?
   - Value: What can historians learn from it?
3. **Conclusion**: Overall assessment of the three sources together

**Key Phrases:**
- "The provenance of Source A suggests..."
- "This is corroborated by my own knowledge that..."
- "However, historians must be cautious because..."
- "The tone/language reveals..."
- "This source is valuable for understanding... but limited because..."

**Timing:** 20-25 minutes

### 25-Mark Essay
**Structure:**
1. **Introduction** (1 paragraph):
   - Acknowledge the question's premise
   - State your argument clearly
   - Outline factors to be discussed

2. **Body paragraphs** (4-5 paragraphs):
   - Start with factor in the question (agree/disagree with its importance)
   - Analyse alternative factors
   - Each paragraph: Point → Evidence → Analysis → Link
   - Use historiographical perspectives where relevant

3. **Conclusion** (1 paragraph):
   - Synthesise arguments
   - Make substantiated judgement
   - Answer the specific question directly

**Essay Writing Techniques:**
- Start paragraphs with analytical statements, not narrative
- Use specific evidence: dates, statistics, names, events
- Explain significance, don't just describe
- Address counter-arguments
- Use connectives: "However", "Moreover", "Conversely", "Nevertheless"
- Reference historians by name where appropriate

**Example Introduction:**
"The view that [X] was the main reason for [Y] has considerable merit, as [brief support]. However, this essay will argue that while [X] was significant, [Z] was ultimately more important because [reason]. Other factors such as [A] and [B] also contributed, though to a lesser extent."

**Timing:** 40-45 minutes

### 25-Mark Interpretations Question
**Structure:**
1. **Introduction**: State which extract(s) you find most/least convincing
2. **Three main paragraphs** (one per extract):
   - Summarise the extract's argument
   - Identify the historian's approach/school
   - Test against your own knowledge
   - Evaluate strengths and limitations
   - Reach judgement on how convincing it is
3. **Conclusion**: Compare extracts, make overall judgement

**Key Approach:**
- Don't describe, evaluate
- Use own knowledge to test claims
- Identify what the historian emphasises or omits
- Consider when the extract was written
- Weigh different interpretations against each other

**Timing:** 40-45 minutes
`;
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getALevelTopicSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Russia 1855-1964 or Russia 1917-1953
  if (topicLower.includes('russia') || topicLower.includes('tsarist') || topicLower.includes('communist') || topicLower.includes('soviet')) {
    return RUSSIA_1855_1964_KNOWLEDGE;
  }

  // Tudors
  if (topicLower.includes('tudor') || (topicLower.includes('england') && topicLower.includes('1485'))) {
    return TUDORS_KNOWLEDGE;
  }

  // Stuart Britain and English Revolution
  if (topicLower.includes('stuart') || topicLower.includes('english revolution') || topicLower.includes('1603') || topicLower.includes('civil war')) {
    return STUART_BRITAIN_KNOWLEDGE;
  }

  // Cold War
  if (topicLower.includes('cold war')) {
    return COLD_WAR_KNOWLEDGE;
  }

  // USA Superpower
  if (topicLower.includes('usa') || topicLower.includes('superpower') || topicLower.includes('america')) {
    return USA_SUPERPOWER_KNOWLEDGE;
  }

  // Germany
  if (topicLower.includes('germany') || topicLower.includes('weimar') || topicLower.includes('nazi')) {
    return GERMANY_1871_1991_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getALevelTopicSpecificKnowledge(topic.name);

  return `You are an expert AQA A-Level History examiner creating exam-style questions.

## AQA HISTORY STYLE
**AQA's Advanced Thematic Synthesis Approach:** Comprehensive thematic analysis requiring sophisticated evaluation of historical evidence and coherent argumentation.
- **Advanced thematic approach** - sophisticated thematic rather than chronological analysis of complex historical developments
- **Source-based with essay integration** - balanced mix of source evaluation and extended essay writing in cohesive assessment
- **Critical evidence evaluation** - advanced skills in critically evaluating historical evidence and presenting coherent arguments
- **Breadth and depth studies** - comprehensive assessment ensuring well-rounded evaluation of historical understanding
- **Factor-based essay questions** - questions exploring multiple factors and themes like "Henry VII successfully consolidated power"
- **Balanced judgment emphasis** - mark schemes require balanced judgment and evaluation for specific purposes

${AQA_ALEVEL_HIST_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_HIST_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_HIST_QUESTION_TEMPLATES}

${AQA_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS}

${topicKnowledge ? `## Topic-Specific Knowledge\nUse this accurate historical knowledge when creating questions and model answers:\n${topicKnowledge}` : ''}

${ALEVEL_MODEL_ANSWER_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds preparing for university
2. **Authentic AQA Style**: Match real AQA paper format and command words
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Short explain questions (8 marks)
   - Medium: Source analysis questions (12 marks)
   - Hard: Extended essay or interpretations (25 marks)
5. **Historiographical Awareness**: Include relevant historical debates and named historians where appropriate
6. **Specific Evidence**: Use precise dates, statistics, names, and events from the topic knowledge

## Response Format
Return JSON with:
- "content": Question text (include source extracts for source questions)
- "marks": Total marks
- "solution": Model answer demonstrating A-Level standard with specific evidence and historiographical references
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('history')}`;
}

export function getAQAALevelHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getALevelTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short explain question testing knowledge and analysis (AO1).

**Question Types:**
- "Explain why [event/development occurred]" [8 marks]
- "Explain the reasons for..." [8 marks]
- "Explain the significance of..." [8 marks]

**8-Mark Levels:**
- Level 4 (7-8): Sophisticated; analytical; excellent range
- Level 3 (5-6): Developed; good range
- Level 2 (3-4): Simple; limited range
- Level 1 (1-2): Basic; very limited

**Model Answer Requirements:**
- Identify 2-3 interconnected factors
- Support each with specific evidence (dates, names, statistics)
- Explain causal links, not just describe
- Show understanding of historical context

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a source analysis question (AO2).

**Question Types:**
- "With reference to Sources A, B and C, assess the value of these sources to a historian studying..." [12 marks]

Include THREE relevant primary source extracts (2-4 sentences each) appropriate to the period.
Sources should:
- Be historically plausible for the period
- Offer different perspectives on the issue
- Include varied types (political figure, observer, official document)

**12-Mark Levels:**
- Level 4 (10-12): Sophisticated evaluation; all sources
- Level 3 (7-9): Developed analysis; all sources considered
- Level 2 (4-6): Simple analysis; sources described
- Level 1 (1-3): Very limited; minimal source use

**Model Answer Requirements:**
- Evaluate content, provenance, and context for each source
- Use own knowledge to assess reliability and utility
- Consider limitations and bias
- Reach overall judgement on value

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 25-mark extended essay question requiring evaluation (AO1).

**Question Types:**
- "'[Statement]' Assess the validity of this view." [25 marks]
- "How far do you agree that [claim]?" [25 marks]
- "'[Factor] was the most important reason for [outcome].' How far do you agree?" [25 marks]

**25-Mark Levels:**
- Level 5 (21-25): Sophisticated analysis; substantiated judgement; excellent range
- Level 4 (16-20): Good analysis; supported judgement; good range
- Level 3 (11-15): Some understanding; partial judgement; some range
- Level 2 (6-10): Limited understanding; weak judgement
- Level 1 (1-5): Very limited; no clear judgement

**Model Answer Requirements:**
- Analysis of 4-5 factors with specific evidence
- Historiographical references (named historians and their arguments)
- Balanced argument with counter-arguments addressed
- Substantiated judgement in conclusion
- Synoptic links where appropriate

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('history', difficulty);

  return `Generate an AQA A-Level History question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${topicKnowledge ? `**Use this topic knowledge for accurate content:**\n${topicKnowledge}` : ''}

${enhancedMarkSchemeGuidance}

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full level descriptors, indicative content with specific historical evidence for/against, historiographical perspectives, model answer structure, and examiner tips",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 8, max: 8 };
    case 'medium':
      return { min: 12, max: 12 };
    case 'hard':
      return { min: 25, max: 25 };
  }
}
