// Edexcel A-Level History (9HI0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/history-2015.html

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// EDEXCEL A-LEVEL HISTORY SPECIFICATION DETAILS (9HI0)
// ============================================================================

const EDEXCEL_ALEVEL_HIST_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, explanation, basic interpretation | Identify factors, explain causation, evaluate single interpretation |
| **Medium** | Analysis, source evaluation, contextual judgement | Evaluate multiple sources for reliability and utility using own knowledge |
| **Hard** | Synthesis, sustained judgement, historiographical analysis | Construct and sustain analytical argument, weigh multiple factors, reach substantiated conclusions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires constructing and sustaining an analytical argument throughout
- Demands weighing multiple factors against each other
- Must reach a substantiated judgement that directly answers the question
- Requires synthesis of wide-ranging knowledge across the period
- No single "correct" answer - student must justify their position with detailed evidence

**Easy (5-8 marks):** Direct explanation or interpretation evaluation - clear focus on one aspect
**Medium (12 marks):** Source analysis - evaluate sources for a specific historical enquiry using content, provenance, context
**Hard (20 marks):** Extended essay - sustained analytical argument with clear judgement throughout
`;

const EDEXCEL_ALEVEL_HIST_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level History Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate, organise and communicate knowledge and understanding to analyse and evaluate the key features related to the periods studied, making substantiated judgements and exploring concepts of cause, consequence, change, continuity, similarity, difference and significance | 40-50% |
| **AO2** | Analyse and evaluate appropriate source material, primary and/or contemporary to the period, within its historical context | 20-30% |
| **AO3** | Analyse and evaluate, in relation to the historical context, different ways in which aspects of the past have been interpreted | 20-30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Breadth Study with Interpretations | Historical breadth with historiographical analysis | 60 | 2hr 15m | 30% |
| **Paper 2** | Depth Study | In-depth source-based enquiry | 40 | 1hr 30m | 20% |
| **Paper 3** | Themes in Breadth with Aspects in Depth | Long-term themes with source work | 60 | 2hr 15m | 30% |
| **Coursework** | Independent Investigation | 3000-4000 word study | 60 | N/A | 20% |

### Question Types
- Short answer (5 marks)
- Extract analysis (8 marks)
- Source enquiry (20 marks)
- Extended essay (20 marks)

### Command Words
- **Explain**: Give reasons why; set out in detail
- **Assess**: Consider and reach conclusions about significance/importance
- **How far**: Measure validity; reach a judgement about extent
- **How useful**: Evaluate source value for a specific purpose
- **To what extent**: Same as how far - evaluate a proposition
`;

const EDEXCEL_ALEVEL_HIST_QUESTION_TEMPLATES = `
## Authentic Edexcel A-Level History Question Formats

### Type 1: Short Answer (5 marks)
Format: "Explain why [development occurred] in the years [date range]"
**Examples:**
- "Explain why Stalin ordered collectivisation in 1929" [5 marks]
Marking: One mark per valid point with support

### Type 2: Extract Analysis (8 marks)
Format: "Read the interpretation... How convincing is the interpretation about [issue]?"
**Examples:**
- "How convincing is this interpretation of the reasons for Nazi success in 1933?" [8 marks]
Marking: Levels 1-4 based on evaluation using own knowledge

**8-Mark Levels:**
- Level 4 (7-8): Convincing analysis; detailed contextual knowledge
- Level 3 (5-6): Good analysis; good knowledge
- Level 2 (3-4): Some analysis; limited knowledge
- Level 1 (1-2): Basic; minimal evaluation

### Type 3: Source Enquiry - Paper 2 (20 marks)
Format: "How far do the sources support the view that...?"
**Examples:**
- "How far do the sources suggest that Lenin was personally responsible for the Red Terror?" [20 marks]
Requires analysis of multiple sources with own knowledge

### Type 4: Extended Essay - Paper 1 (20 marks)
Format: "How far do you agree that [claim]?"
**Examples:**
- "How far do you agree that the Nazi regime relied mainly on terror to maintain power?" [20 marks]
- "How far do you agree that the USA's entry transformed the outcome of the First World War?" [20 marks]

**20-Mark Levels:**
- Level 5 (17-20): Analytical; sustained judgement; thorough knowledge
- Level 4 (13-16): Developed analysis; clear judgement; detailed knowledge
- Level 3 (9-12): Some analysis; judgement present; good knowledge
- Level 2 (5-8): Limited analysis; basic judgement; limited knowledge
- Level 1 (1-4): Very limited; no clear judgement

### Type 5: Paper 3 Essays (20 marks)
Format: "To what extent was [factor] responsible for [outcome] in the period [date range]?"
**Examples:**
- "To what extent was the role of individuals the main factor in achieving civil rights in the USA in the period 1865-1992?" [20 marks]
Long-span thematic questions requiring breadth and depth
`;

const EDEXCEL_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS = `
## Edexcel A-Level History Mark Scheme Conventions

### 20-Mark Extended Essay Levels

**Level 5 (17-20 marks):**
- Demonstrates wide-ranging, accurate and detailed knowledge
- Answer is analytical and fully focused on the question
- Answer shows sophisticated analysis of key concepts
- Sustained judgement is reached and supported throughout
- Answer is well organised and coherent

**Level 4 (13-16 marks):**
- Demonstrates accurate and detailed knowledge
- Answer is analytical with clear focus
- Good understanding of key concepts
- Clear judgement with support
- Answer is organised

**Level 3 (9-12 marks):**
- Demonstrates accurate knowledge
- Some analysis, may not be fully sustained
- Understanding of concepts shown
- Judgement present but may lack full support
- Generally organised

**Level 2 (5-8 marks):**
- Demonstrates limited knowledge
- Limited analysis
- Basic understanding
- Judgement may be asserted
- Some organisation

**Level 1 (1-4 marks):**
- Very limited knowledge
- Minimal analysis
- Little understanding
- No clear judgement

**0 marks:** Nothing worthy of credit

### 20-Mark Source Questions (Paper 2)

**Level 5 (17-20 marks):**
- Comprehensive evaluation of sources
- Excellent integration of own knowledge
- Sustained analysis of source value
- Clear focus on the question throughout

**Level 4 (13-16 marks):**
- Good evaluation of sources
- Good integration of knowledge
- Developed analysis
- Clear focus

**Level 3 (9-12 marks):**
- Some evaluation
- Some integration of knowledge
- Basic analysis
- Generally focused

**Level 2 (5-8 marks):**
- Limited evaluation
- Limited knowledge
- Description rather than analysis

**Level 1 (1-4 marks):**
- Very limited evaluation
- Minimal knowledge

### Key Assessment Focus
- Causation and consequence across time
- Change and continuity
- Significance and turning points
- Thematic understanding
- Source evaluation skills
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const RUSSIA_1917_91_KNOWLEDGE = `
## Russia 1917-1991: From Lenin to Yeltsin Essential Knowledge

### OCTOBER REVOLUTION AND CONSOLIDATION (1917-1921)
**October Revolution 1917:**
- Bolsheviks seized power 25-26 October (7-8 November New Style)
- Lenin's "Peace, Bread, Land" appeal
- Second Congress of Soviets: Bolshevik majority
- Early decrees: peace, land, workers' control

**Consolidation of Power:**
- Constituent Assembly dissolved January 1918 (after one day)
- Treaty of Brest-Litovsk March 1918: lost 34% population, 32% agricultural land
- Red Terror: Cheka established December 1917
- 50,000-200,000 executed 1918-1921

**Civil War (1918-1921):**
- Reds vs Whites vs Greens
- Trotsky built Red Army: 5 million by 1920
- War Communism: grain requisitioning, nationalisation
- 10 million deaths from war, famine, disease
- Red victory 1921: centralisation, geography, White divisions

### NEW ECONOMIC POLICY (1921-1928)
**Kronstadt Rebellion March 1921:**
- "Soviets without Communists"
- Crushed by Red Army: turning point

**NEP Policies:**
- Tax in kind replaced requisitioning
- Nepmen: private traders allowed
- "Commanding heights" retained
- By 1926: agricultural output reached 1913 levels
- "Scissors crisis" 1923: price differentials

### STALIN'S RISE AND RULE
**Power Struggle (1924-1929):**
- Lenin died January 1924
- Testament suppressed: warned against Stalin
- Triumvirate vs Trotsky, then shifting alliances
- Stalin as General Secretary: controlled appointments
- "Socialism in one country" vs "permanent revolution"

**Collectivisation (1929-1941):**
- 1929: 4% collectivised → 1936: 90%
- Dekulakisation: 1.8 million deported 1930-31
- Famine 1932-33: 5-7 million deaths
- Resistance: 2,200 uprisings March 1930
- Long-term: grain procurement doubled

**Industrialisation:**
- First Five-Year Plan 1928-32: "We are 50-100 years behind"
- Coal: 35 → 64 million tons; Steel: 4 → 6 million tons
- Magnitogorsk, Dneprostroi Dam
- Second Plan 1933-37: Stakhanovite movement
- Human cost: Gulag labour, urban overcrowding

**Great Terror (1936-1938):**
- Show trials: Zinoviev, Kamenev (1936); Bukharin (1938)
- 750,000 executed 1937-38
- Red Army purged: 3/5 marshals, 13/15 army commanders
- NKVD under Yezhov ("Yezhovshchina")

### GREAT PATRIOTIC WAR (1941-1945)
**Operation Barbarossa:**
- 3 million German troops, June 1941
- By December: 3 million Soviet POWs

**Soviet Victory:**
- Stalingrad: 800,000 German casualties
- Kursk July 1943: largest tank battle
- Lend-Lease: $11 billion US aid
- 27 million Soviet deaths

### POST-WAR STALINISM TO KHRUSHCHEV
**Late Stalinism (1945-1953):**
- Zhdanovshchina: cultural repression
- Leningrad Affair, Doctors' Plot
- Cold War begins
- Stalin died 5 March 1953

**Khrushchev Era (1953-1964):**
- Secret Speech February 1956: denounced Stalin's cult
- De-Stalinisation: 4 million Gulag releases by 1956
- Virgin Lands scheme
- Cuban Missile Crisis humiliation
- Removed October 1964: "hare-brained schemes"

### BREZHNEV TO COLLAPSE
**Brezhnev Era (1964-1982):**
- "Era of Stagnation"
- Brezhnev Doctrine: intervention rights
- Détente with West
- Afghanistan 1979: Soviet Vietnam

**Gorbachev and Collapse (1985-1991):**
- Glasnost: openness
- Perestroika: restructuring
- Democratisation: competitive elections
- Nationalities problem exploded
- August Coup 1991: failed
- USSR dissolved December 1991

### KEY STATISTICS
| Event | Figure |
|-------|--------|
| Civil War deaths | 10 million |
| Collectivisation famine | 5-7 million |
| Great Terror executions | 750,000 |
| WWII Soviet deaths | 27 million |
| Gulag peak population | 2.5 million |
`;

const USA_1917_96_KNOWLEDGE = `
## In Search of the American Dream 1917-96 Essential Knowledge

### 1920s PROSPERITY
**Republican Ascendancy:**
- "Return to normalcy" - Harding
- Laissez-faire economics
- Tax cuts: top rate 73% → 25%
- Tariff protection

**Economic Boom:**
- GDP grew 40% 1920-1929
- Cars: 8 million (1920) → 23 million (1929)
- Consumer credit expanded
- Mass production: Ford's assembly line

**Social Tensions:**
- First Red Scare: Palmer Raids 1919-20
- Immigration restriction: 1921, 1924 quotas
- KKK revival: 4 million members by 1924
- Prohibition 1920-1933
- Scopes Trial 1925

### GREAT DEPRESSION AND NEW DEAL
**Wall Street Crash:**
- Black Thursday/Tuesday October 1929
- Stock prices fell 90% by 1932
- 9,000 banks failed
- Unemployment: 25% by 1933

**Hoover's Response:**
- Initially: voluntarism
- RFC 1932: too little, too late
- Bonus Army dispersed 1932

**FDR's New Deal:**
- First Hundred Days 1933
- Alphabet agencies: CCC, TVA, NRA, AAA
- "Fireside chats"
- Second New Deal 1935: Social Security, Wagner Act, WPA
- Opposition: Supreme Court, Huey Long, conservatives

**Assessment:**
- Didn't end Depression (WWII did)
- Created safety net
- Union membership: 3 million → 9 million
- Limited gains for African Americans

### WWII AND COLD WAR
**Home Front:**
- War production transformed economy
- GDP doubled 1939-1945
- Women: 6 million entered workforce
- Japanese internment: 120,000

**Post-War:**
- Truman Doctrine, Marshall Plan
- McCarthyism: HUAC, Hollywood blacklist
- Affluent society: suburban growth
- Conformity of 1950s

### CIVIL RIGHTS MOVEMENT
**Legal Challenges:**
- Brown v Board of Education 1954
- "Separate but equal" overturned

**Direct Action:**
- Montgomery Bus Boycott 1955-56: King emerged
- Sit-ins 1960: Greensboro
- Freedom Rides 1961
- Birmingham 1963: Bull Connor, children's crusade
- March on Washington August 1963: 250,000

**Legislation:**
- Civil Rights Act 1964
- Voting Rights Act 1965
- 24th Amendment: poll tax banned

**Black Power:**
- Malcolm X, Stokely Carmichael
- Black Panthers 1966
- Urban riots: Watts 1965, Detroit 1967
- King assassination April 1968

### VIETNAM AND AFTER
**Escalation:**
- Gulf of Tonkin 1964
- 500,000 troops by 1968
- Tet Offensive January 1968

**Withdrawal:**
- Nixon: Vietnamisation
- Paris Accords 1973
- Saigon fell April 1975
- 58,000 US dead

**Watergate:**
- Break-in June 1972
- Nixon resigned August 1974

### REAGAN TO CLINTON
**Reagan Revolution:**
- Tax cuts, deregulation
- "Evil Empire" rhetoric
- Military buildup

**Culture Wars:**
- Abortion debate
- Religious Right
- LA Riots 1992

**Clinton:**
- "New Democrats"
- Economic prosperity
- Welfare reform

### KEY STATISTICS
| Year | Event |
|------|-------|
| 1929 | Stock market crash |
| 1933 | 25% unemployment |
| 1963 | March on Washington: 250,000 |
| 1964 | Civil Rights Act |
| 1968 | King assassination |
| 1973 | Vietnam withdrawal |
`;

const GERMANY_1918_89_KNOWLEDGE = `
## Germany and West Germany 1918-1989 Essential Knowledge

### WEIMAR REPUBLIC (1918-1933)
**Revolution and Foundation:**
- Kiel mutiny November 1918
- Kaiser abdicated 9 November
- Ebert-Groener Pact: army supported republic
- Spartacist Rising January 1919: crushed by Freikorps
- Weimar Constitution: most democratic in Europe

**Early Challenges:**
- Treaty of Versailles: £6.6 billion reparations, 100,000 army
- Kapp Putsch March 1920: defeated by general strike
- Hyperinflation 1923: $1 = 4.2 trillion marks
- Ruhr occupation 1923

**Stresemann Era (1923-1929):**
- Currency reform: Rentenmark
- Dawes Plan 1924, Young Plan 1929
- Locarno Treaties 1925
- League of Nations 1926
- "Golden Twenties" but dependent on US loans

**Collapse:**
- Wall Street Crash: US loans recalled
- Unemployment: 6 million by 1932
- Article 48 rule: bypassed Reichstag
- Nazi vote: 2.6% (1928) → 37% (July 1932)

### NAZI GERMANY (1933-1945)
**Consolidation:**
- Hitler Chancellor 30 January 1933
- Reichstag Fire 27 February: emergency decree
- Enabling Act 23 March 1933
- Night of Long Knives June 1934
- Hindenburg died August 1934: Hitler became Führer

**Nazi State:**
- Gleichschaltung: coordination of institutions
- SS: 240,000 by 1939
- Gestapo, concentration camps
- Propaganda: Goebbels

**Economy:**
- Unemployment: 6 million → 300,000 by 1939
- Autobahn, rearmament
- Four-Year Plan 1936: autarky

**Racial Policy:**
- Nuremberg Laws 1935
- Kristallnacht November 1938: 91 killed
- Holocaust: 6 million Jews murdered
- Wannsee Conference January 1942

**War and Defeat:**
- WWII began September 1939
- Defeat May 1945

### DIVIDED GERMANY (1945-1989)
**Occupation:**
- Four zones: US, British, French, Soviet
- Nuremberg Trials 1945-46
- Currency reform June 1948: triggered blockade

**Federal Republic (West):**
- Basic Law May 1949
- Adenauer 1949-1963: CDU dominance
- Wirtschaftswunder: GDP grew 8% annually 1950s
- NATO 1955, EEC founding member
- Ostpolitik under Brandt 1969-74
- RAF terrorism 1970s

**GDR (East):**
- SED dictatorship
- Stasi: 91,000 employees, 180,000 informers
- Uprising June 1953: Soviet tanks
- Berlin Wall August 1961

**Reunification:**
- Berlin Wall fell 9 November 1989
- Free elections March 1990
- Reunification 3 October 1990

### KEY STATISTICS
| Year | Event |
|------|-------|
| 1923 | Hyperinflation peak |
| 1932 | 6 million unemployed |
| 1933 | Hitler Chancellor |
| 1938 | Kristallnacht |
| 1961 | Berlin Wall built |
| 1989 | Wall falls |
`;

const FRENCH_REVOLUTION_KNOWLEDGE = `
## France in Revolution 1774-1799 Essential Knowledge

### ANCIEN REGIME CRISIS
**Social Structure:**
- First Estate (clergy): 130,000, owned 10% of land
- Second Estate (nobility): 400,000, tax exempt
- Third Estate: 27 million, paid all taxes

**Financial Crisis:**
- Debt: 50% of revenue on debt interest
- American War cost: 1.3 billion livres
- Calonne, Brienne failed reforms
- Assembly of Notables refused taxation 1787

**Louis XVI:**
- King from 1774, well-meaning but indecisive
- Marie Antoinette unpopular: "Madame Deficit"

### REVOLUTION BEGINS (1789)
**Estates-General May 1789:**
- First meeting since 1614
- Third Estate demanded vote by head
- Tennis Court Oath 20 June 1789

**Key Events:**
- Storming of Bastille 14 July 1789
- Great Fear: peasant attacks on chateaux
- August Decrees: abolished feudalism
- Declaration of Rights of Man 26 August
- March on Versailles October 1789

### CONSTITUTIONAL MONARCHY (1789-1792)
**Reforms:**
- Civil Constitution of Clergy July 1790: split nation
- Constitution 1791: constitutional monarchy
- Flight to Varennes June 1791: king discredited

**Political Groups:**
- Jacobins: radical republicans
- Girondins: moderate republicans
- Feuillants: constitutional monarchists

**War:**
- War with Austria April 1792
- Brunswick Manifesto: foreign threat
- Storming of Tuileries 10 August 1792
- September Massacres: 1,200+ killed

### REPUBLIC AND TERROR (1792-1794)
**Convention:**
- Republic declared 22 September 1792
- Louis XVI executed 21 January 1793
- War expanded: First Coalition

**Terror:**
- Committee of Public Safety: 12 members
- Robespierre dominant from July 1793
- Revolutionary Tribunal: 2,600 executed in Paris
- Total: 16,000-40,000 deaths
- Law of 22 Prairial June 1794: accelerated Terror
- Dechristianisation: calendar, cults

**Thermidor:**
- Robespierre executed 28 July 1794 (9 Thermidor)
- White Terror against Jacobins

### DIRECTORY (1795-1799)
**Government:**
- Five Directors, two legislative councils
- Constitution of Year III
- Electoral restrictions

**Instability:**
- Babeuf Conspiracy 1796
- Royalist resurgence
- Military coups: Fructidor 1797
- Continuing war

**Rise of Napoleon:**
- Italian Campaign 1796-97: made reputation
- Egyptian Campaign 1798-99
- Coup of 18 Brumaire November 1799
- Consulate established

### KEY FIGURES
| Person | Role |
|--------|------|
| Louis XVI | King, executed 1793 |
| Marie Antoinette | Queen, executed 1793 |
| Mirabeau | Early revolutionary leader |
| Lafayette | Constitutional monarchist |
| Danton | Radical, executed 1794 |
| Robespierre | Terror leader, executed 1794 |
| Marat | Radical journalist, assassinated 1793 |
| Napoleon | General, then First Consul |

### KEY DATES
| Date | Event |
|------|-------|
| 14 July 1789 | Bastille |
| 26 August 1789 | Declaration of Rights |
| 10 August 1792 | Fall of monarchy |
| 21 January 1793 | Louis XVI executed |
| 28 July 1794 | Robespierre executed |
| 9 November 1799 | Napoleon's coup |
`;

const MAOS_CHINA_KNOWLEDGE = `
## Mao's China 1949-76 Essential Knowledge

### ESTABLISHING THE PRC (1949-1952)
**Communist Victory:**
- PRC proclaimed 1 October 1949
- Nationalist fled to Taiwan
- "New Democracy": coalition government initially

**Consolidation:**
- Land reform: 40% of land redistributed
- 1-2 million landlords killed
- Mass campaigns: "Speak Bitterness"
- Korean War 1950-53: 400,000 Chinese deaths
- "Resist America, Aid Korea"

**Terror:**
- Campaign to Suppress Counter-revolutionaries 1950-51
- 700,000-1 million executed
- Three-Antis, Five-Antis campaigns 1951-52

### SOCIALIST TRANSFORMATION (1953-1957)
**First Five-Year Plan:**
- Soviet model: heavy industry priority
- 156 Soviet-aided projects
- Industrial output grew 19% annually
- But agriculture neglected

**Collectivisation:**
- Mutual Aid Teams → Cooperatives → Collectives
- By 1956: 96% in collectives
- Resistance minimal compared to USSR

**Hundred Flowers Campaign 1956-57:**
- "Let a hundred flowers bloom"
- Intellectuals invited to criticise
- Anti-Rightist Campaign: 500,000+ labelled rightists
- Sent to labour camps

### GREAT LEAP FORWARD (1958-1962)
**Origins:**
- Mao's impatience with Soviet model
- "Fifteen years to overtake Britain"
- Communes: 26,000 by end of 1958
- 99% of peasants in communes

**Policies:**
- Backyard steel furnaces: produced useless iron
- Inflated production figures
- Lysenkoism: pseudo-science in agriculture
- Deep ploughing, close planting failed

**Famine:**
- 30-45 million deaths 1959-1961
- Worst famine in human history
- Grain exports continued during famine
- Mao retreated: Liu Shaoqi, Deng Xiaoping led recovery

### CULTURAL REVOLUTION (1966-1976)
**Origins:**
- Mao's comeback after Great Leap
- "Bombard the Headquarters"
- Red Guards mobilised August 1966

**Chaos:**
- "Four Olds" attacked
- Liu Shaoqi purged, died in prison 1969
- Deng Xiaoping sent to labour
- Factional fighting: near civil war 1967
- 1-2 million killed, millions persecuted

**Lin Biao:**
- Defence Minister, Mao's chosen successor
- Little Red Book
- Died in plane crash September 1971 (fleeing after alleged coup attempt)

**Later Years:**
- Zhou Enlai moderated
- Gang of Four: Jiang Qing (Mao's wife) and allies
- Mao died 9 September 1976
- Gang of Four arrested October 1976

### MAO'S LEGACY
**Cult of Personality:**
- "Great Helmsman"
- Little Red Book: 900 million copies
- Mao badges worn by all

**Statistics:**
| Event | Deaths |
|-------|--------|
| Land reform | 1-2 million |
| Counter-revolutionaries | 700,000-1 million |
| Great Leap famine | 30-45 million |
| Cultural Revolution | 1-2 million |

### HISTORIOGRAPHICAL DEBATES
**Intentionalist:**
- Mao's personal responsibility
- Ideology-driven disasters

**Structuralist:**
- System failures
- Local cadre excesses

**Key Questions:**
- Was Great Leap genocidal?
- Revolutionary or tyrannical leader?
`;

const SOUTH_AFRICA_KNOWLEDGE = `
## South Africa 1948-94: Apartheid to Rainbow Nation

### APARTHEID ESTABLISHED (1948-1960)
**1948 Election:**
- National Party victory
- Afrikaner nationalism
- D.F. Malan Prime Minister

**Apartheid Legislation:**
- Population Registration Act 1950: racial classification
- Group Areas Act 1950: residential segregation
- Bantu Education Act 1953: inferior education
- Pass Laws: controlled movement
- Immorality Act: banned interracial relationships
- Separate Amenities Act: "petty apartheid"

**Bantustans:**
- Homelands for black South Africans
- 13% of land for 75% of population
- Stripped of citizenship

### EARLY RESISTANCE (1948-1960)
**ANC:**
- Founded 1912
- Youth League radicalised 1944: Mandela, Tambo, Sisulu
- Defiance Campaign 1952: 8,500 arrested
- Freedom Charter 1955: non-racial democracy

**PAC:**
- Pan Africanist Congress formed 1959
- Robert Sobukwe
- More radical, Africanist

**Sharpeville March 1960:**
- 69 killed protesting pass laws
- State of Emergency declared
- ANC and PAC banned
- Turned to armed struggle: Umkhonto we Sizwe (MK)

### INTENSIFICATION (1960-1976)
**Repression:**
- Rivonia Trial 1963-64: Mandela sentenced to life
- "I am prepared to die" speech
- Robben Island prison

**Verwoerd and Vorster:**
- Verwoerd: "architect of apartheid"
- Assassinated 1966
- Vorster: increased security apparatus
- BOSS (Bureau of State Security)

**Black Consciousness:**
- Steve Biko: "Black man, you are on your own"
- SASO formed 1969
- Pride, self-reliance
- Biko died in detention September 1977

### SOWETO AND AFTER (1976-1984)
**Soweto Uprising June 1976:**
- Students protested Afrikaans instruction
- Hector Pieterson: iconic victim
- 575+ killed in following months
- International outrage

**Reform and Resistance:**
- P.W. Botha: "Total Strategy"
- Tricameral Parliament 1983: excluded Africans
- UDF formed 1983: 600+ organisations
- Township unrest spread

### COLLAPSE OF APARTHEID (1984-1994)
**State of Emergency:**
- Declared 1985, 1986
- 30,000 detained
- International sanctions increased
- Disinvestment campaign

**De Klerk and Transition:**
- F.W. de Klerk President 1989
- 2 February 1990: unbanned ANC, announced Mandela release
- Mandela released 11 February 1990
- CODESA negotiations 1991-92

**Violence:**
- Township violence: ANC vs Inkatha
- 14,000 killed 1990-1994
- Chris Hani assassination 1993

**1994 Election:**
- 27 April 1994: first democratic election
- ANC won 62.6%
- Mandela inaugurated 10 May 1994

**Truth and Reconciliation:**
- TRC chaired by Desmond Tutu
- Amnesty for truth
- "Rainbow Nation" vision

### KEY FIGURES
| Person | Role |
|--------|------|
| Nelson Mandela | ANC leader, President |
| Walter Sisulu | ANC leader |
| Steve Biko | Black Consciousness |
| Desmond Tutu | Archbishop, TRC chair |
| F.W. de Klerk | Last apartheid President |
| P.W. Botha | "Total Strategy" |

### KEY DATES
| Date | Event |
|------|-------|
| 1948 | National Party victory |
| 1960 | Sharpeville massacre |
| 1964 | Mandela imprisoned |
| 1976 | Soweto uprising |
| 1977 | Biko dies |
| 1990 | Mandela released |
| 1994 | First democratic election |
`;

const CIVIL_RIGHTS_USA_KNOWLEDGE = `
## Civil Rights in the USA 1865-1992 Essential Knowledge

### RECONSTRUCTION (1865-1877)
**Amendments:**
- 13th (1865): abolished slavery
- 14th (1868): citizenship, equal protection
- 15th (1870): voting rights

**Achievements:**
- Freedmen's Bureau: education, contracts
- Black Congressmen: 16 Representatives, 2 Senators
- Historically Black Colleges founded

**End of Reconstruction:**
- KKK terror: 3,000 killed 1865-76
- Compromise of 1877: troops withdrawn
- "Redemption" of South

### JIM CROW ERA (1877-1954)
**Legal Framework:**
- Plessy v Ferguson 1896: "separate but equal"
- Literacy tests, poll taxes, grandfather clauses
- Louisiana black voters: 130,000 (1896) → 5,000 (1900)

**Violence:**
- 4,000+ lynchings 1877-1950
- Race riots: Atlanta 1906, Springfield 1908

**Early Resistance:**
- Booker T. Washington: accommodation
- W.E.B. Du Bois: immediate civil rights, NAACP (1909)
- Great Migration: 6 million moved North 1910-1970
- Harlem Renaissance

### CIVIL RIGHTS MOVEMENT (1954-1968)
**Legal Victory:**
- Brown v Board of Education 1954
- "Separate educational facilities inherently unequal"

**Montgomery Bus Boycott 1955-56:**
- Rosa Parks arrested 1 December 1955
- 381-day boycott
- Martin Luther King emerged as leader
- Buses desegregated November 1956

**Direct Action:**
- Sit-ins 1960: Greensboro students
- Freedom Rides 1961: interstate buses
- Albany Movement 1961-62: lessons learned

**Birmingham 1963:**
- Project C: "Confrontation"
- Bull Connor's dogs and firehoses
- Children's Crusade
- JFK proposed civil rights bill

**March on Washington 28 August 1963:**
- 250,000 participants
- "I Have a Dream" speech
- Largest demonstration in US history to that point

**Legislation:**
- Civil Rights Act 1964: public accommodations, employment
- 24th Amendment 1964: banned poll tax
- Voting Rights Act 1965: federal oversight
- Black voter registration: 7% → 67% in Mississippi

### BLACK POWER (1965-1975)
**Urban Unrest:**
- Watts 1965: 34 killed
- Detroit 1967: 43 killed
- 1968 after King assassination: 100+ cities

**Black Power:**
- Stokely Carmichael: "Black Power!" (1966)
- Black Panthers 1966: armed self-defence
- Malcolm X: black nationalism (assassinated 1965)

**King's Later Years:**
- Chicago 1966: northern campaign failed
- Vietnam opposition
- Poor People's Campaign
- Assassinated 4 April 1968, Memphis

### LATER DEVELOPMENTS (1968-1992)
**Nixon Era:**
- "Southern Strategy"
- Busing controversies
- Philadelphia Plan: affirmative action

**Affirmative Action:**
- Bakke case 1978: quotas unconstitutional
- Ongoing debates

**Reagan Era:**
- Rollback attempts
- Opposition to civil rights legislation
- Clarence Thomas appointed 1991

**LA Riots 1992:**
- Rodney King beating
- Officers acquitted
- 63 killed, $1 billion damage

### KEY HISTORIOGRAPHICAL DEBATES
**Top-down vs Bottom-up:**
- Federal government role
- Local grassroots movements
- Both essential

**King-centred vs Broader Movement:**
- Multiple leaders and organisations
- Women's roles often overlooked

### KEY DATES
| Date | Event |
|------|-------|
| 1896 | Plessy v Ferguson |
| 1954 | Brown v Board |
| 1955-56 | Montgomery Boycott |
| 1963 | Birmingham, March on Washington |
| 1964 | Civil Rights Act |
| 1965 | Voting Rights Act |
| 1968 | King assassinated |
| 1992 | LA riots |
`;

// ============================================================================
// MODEL ANSWER STRUCTURES
// ============================================================================

const EDEXCEL_ALEVEL_MODEL_ANSWER_GUIDANCE = `
## Edexcel A-Level Model Answer Structures

### 5-Mark Explain Question
**Structure:**
- Brief introduction identifying 2-3 key reasons
- Each point explained with specific evidence
- No formal conclusion needed

**Timing:** 6-7 minutes

### 8-Mark Extract Analysis
**Structure:**
1. State your judgement on how convincing the interpretation is
2. Identify what the interpretation argues
3. Use your own knowledge to test its claims
4. Evaluate what it includes/omits
5. Reach a supported conclusion

**Key Phrases:**
- "This interpretation is [convincing/partially convincing/unconvincing] because..."
- "The extract argues that... This is supported by evidence that..."
- "However, the interpretation overlooks..."

**Timing:** 12-15 minutes

### 12-Mark Source Question
**Structure:**
1. Brief introduction stating overall usefulness
2. Evaluate each source:
   - Content: what it reveals
   - Provenance: who, when, why, for whom
   - Context: your own knowledge
   - Limitations
3. Conclusion: how useful together

**Timing:** 20 minutes

### 20-Mark Essay
**Structure:**
1. **Introduction**: State your argument, outline factors
2. **4-5 body paragraphs**: Point → Evidence → Analysis → Link
3. **Conclusion**: Synthesise, reach substantiated judgement

**Level 5 Requirements:**
- Wide-ranging, accurate knowledge
- Analytical throughout
- Sophisticated understanding of concepts
- Sustained judgement

**Timing:** 35-40 minutes
`;

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getEdexcelALevelTopicKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Russia
  if (topicLower.includes('russia') && (topicLower.includes('1917') || topicLower.includes('lenin') || topicLower.includes('yeltsin'))) {
    return RUSSIA_1917_91_KNOWLEDGE;
  }

  // USA American Dream
  if (topicLower.includes('american dream') || (topicLower.includes('usa') && topicLower.includes('1917'))) {
    return USA_1917_96_KNOWLEDGE;
  }

  // Germany
  if (topicLower.includes('germany') && (topicLower.includes('1918') || topicLower.includes('west germany'))) {
    return GERMANY_1918_89_KNOWLEDGE;
  }

  // French Revolution
  if (topicLower.includes('france') && topicLower.includes('revolution')) {
    return FRENCH_REVOLUTION_KNOWLEDGE;
  }

  // Mao's China
  if (topicLower.includes('mao') || topicLower.includes('china')) {
    return MAOS_CHINA_KNOWLEDGE;
  }

  // South Africa
  if (topicLower.includes('south africa') || topicLower.includes('apartheid')) {
    return SOUTH_AFRICA_KNOWLEDGE;
  }

  // Civil Rights USA
  if (topicLower.includes('civil rights')) {
    return CIVIL_RIGHTS_USA_KNOWLEDGE;
  }

  // Russia broader
  if (topicLower.includes('russia') || topicLower.includes('making of modern russia')) {
    return RUSSIA_1917_91_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getEdexcelALevelTopicKnowledge(topic.name);

  return `You are an expert Edexcel A-Level History examiner creating exam-style questions.

## EDEXCEL HISTORY STYLE
**Edexcel's Advanced Source-Interpretation Focus:** Sophisticated source evaluation with structured thematic studies and detailed historical interpretations.
- **Advanced source analysis** - sophisticated interrogation of sources with confidence and discrimination
- **Thematic studies with breadth** - comprehensive thematic studies combined with breadth and source evaluations
- **Detailed course structure** - well-defined focus on depth studies, thematic studies, and period studies for nuanced understanding
- **Historical interpretations emphasis** - dedicated sections assessing ability to analyze and evaluate historical interpretations
- **Three-section paper structure** - clear division into essay questions and compulsory interpretation analysis
- **Historical complexity appreciation** - questions enhance students' ability to connect events and appreciate historical narrative complexity

${EDEXCEL_ALEVEL_HIST_COGNITIVE_CHALLENGE}

${EDEXCEL_ALEVEL_HIST_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_HIST_QUESTION_TEMPLATES}

${EDEXCEL_ALEVEL_HIST_MARK_SCHEME_CONVENTIONS}

${topicKnowledge ? `## Topic-Specific Knowledge\nUse this accurate historical knowledge when creating questions and model answers:\n${topicKnowledge}` : ''}

${EDEXCEL_ALEVEL_MODEL_ANSWER_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds preparing for university
2. **Authentic Edexcel Style**: Match real Edexcel paper format and command words
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Short answer or extract questions (5-8 marks)
   - Medium: Source enquiry questions (12 marks)
   - Hard: Extended essay requiring sustained judgement (20 marks)
5. **Specific Evidence**: Use precise dates, statistics, names from topic knowledge
6. **Historiographical Awareness**: Reference relevant debates where appropriate

## Response Format
Return JSON with:
- "content": Question text (include extracts/sources where needed)
- "marks": Total marks
- "solution": Model answer demonstrating A-Level standard with specific evidence
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('history')}`;
}

export function getEdexcelALevelHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getEdexcelALevelTopicKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short answer or interpretation question (AO1/AO3).

**Question Types:**
- "Explain why [development occurred]" [5 marks]
- "How convincing is this interpretation about...?" [8 marks]

For 8-mark questions, include a brief historical interpretation/extract (2-3 sentences) to evaluate.

**8-Mark Levels:**
- Level 4 (7-8): Convincing analysis; detailed knowledge
- Level 3 (5-6): Good analysis; good knowledge
- Level 2 (3-4): Some analysis; limited knowledge
- Level 1 (1-2): Basic; minimal evaluation

**Model Answer Requirements:**
- Identify 2-3 key points with specific evidence
- Use dates, names, statistics from topic knowledge

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a source-based analysis question (AO2).

**Question Types:**
- "How far could the historian make use of Sources [1] and [2] together to investigate...?" [12 marks]

Include TWO relevant primary source extracts (3-4 sentences each) appropriate to the period.
Sources should offer different types of evidence or perspectives.

**12-Mark Levels:**
- Level 4 (10-12): Comprehensive evaluation; excellent contextual knowledge
- Level 3 (7-9): Good evaluation; good knowledge
- Level 2 (4-6): Some evaluation; limited knowledge
- Level 1 (1-3): Very limited evaluation

**Model Answer Requirements:**
- Evaluate content, provenance, context for each source
- Use own knowledge to test reliability and utility
- Consider limitations and reach judgement

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 20-mark extended essay question (AO1).

**Question Types:**
- "How far do you agree that [claim]?" [20 marks]
- "To what extent was [factor] responsible for [outcome]?" [20 marks]
- "'[Statement]' How far do you agree with this view?" [20 marks]

**20-Mark Levels:**
- Level 5 (17-20): Analytical; sustained judgement; wide-ranging knowledge
- Level 4 (13-16): Developed analysis; clear judgement; detailed knowledge
- Level 3 (9-12): Some analysis; judgement present; good knowledge
- Level 2 (5-8): Limited analysis; basic judgement
- Level 1 (1-4): Very limited; no clear judgement

**Model Answer Requirements:**
- Analysis of 4-5 factors with specific evidence
- Historiographical references where relevant
- Balanced argument with counter-arguments
- Substantiated judgement in conclusion

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel A-Level History question.

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
      return { min: 5, max: 8 };
    case 'medium':
      return { min: 12, max: 12 };
    case 'hard':
      return { min: 20, max: 20 };
  }
}
