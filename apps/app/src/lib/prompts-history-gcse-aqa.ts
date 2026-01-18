// AQA GCSE History (8145) Question Generation Prompts
// Based on official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/history/gcse/history-8145

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA GCSE HISTORY SPECIFICATION DETAILS (8145)
// ============================================================================

const AQA_GCSE_HIST_ASSESSMENT_OBJECTIVES = `
## AQA GCSE History Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of the key features and characteristics of the periods studied | 35-45% |
| **AO2** | Explain and analyse historical events and periods studied using second-order historical concepts (continuity, change, cause, consequence, significance, similarity, difference) | 35-45% |
| **AO3** | Analyse, evaluate and use sources (contemporary to the period) to make substantiated judgements, in the context of historical events studied | 10-20% |
| **AO4** | Analyse, evaluate and make substantiated judgements about interpretations (including how and why interpretations may differ) in the context of historical events studied | 10-20% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Understanding the Modern World | Period Study + Wider World Depth Study | 84 | 2 hours | 50% |
| **Paper 2** | Shaping the Nation | Thematic Study + British Depth Study + Historic Environment | 84 | 2 hours | 50% |

### Question Types
- Source-based (8 marks)
- Short explain (8 marks)
- Write an account (8 marks)
- "How far do you agree" essay (16 marks + 4 SPaG)
- Historic environment (16 marks)
- Interpretations questions (8 and 8 marks)

### Command Words
- **Write an account**: Produce a description; make clear sequence of events/narrative
- **Explain why**: Set out causes and reasons
- **How useful**: Analyse value and limitations of a source
- **How far do you agree**: Evaluate the statement, argue for and against, reach a judgement
- **How convincing**: Assess whether interpretation provides a convincing argument
`;

const AQA_GCSE_HIST_QUESTION_TEMPLATES = `
## Authentic AQA GCSE History Question Formats

### Type 1: Source Analysis (8 marks)
Format: "How useful is Source [X] for an enquiry into...?"
**Examples:**
- "How useful is Source A for an enquiry into Nazi control of Germany?" [8 marks]
- "How useful is Source B for an enquiry into the causes of the First World War?" [8 marks]
Marking: Level 1-4 based on use of content, provenance, and own knowledge

### Type 2: Explain Why (8 marks)
Format: "Explain why [event/development occurred]"
**Examples:**
- "Explain why the Weimar Republic faced difficulties in the years 1919-1923" [8 marks]
- "Explain why there was conflict in Korea in the years 1950-1953" [8 marks]
Marking: Level 1-4 based on explanation with supporting detail

### Type 3: Write an Account (8 marks)
Format: "Write an account of how [events unfolded/how something developed]"
**Examples:**
- "Write an account of the events leading to the Munich Putsch of 1923" [8 marks]
- "Write an account of how the Cuban Missile Crisis developed" [8 marks]
Marking: Level 1-4 based on narrative organisation and analytical focus

### Type 4: 16-Mark Essay (+ 4 SPaG)
Format: "How far do you agree with [statement]?" or "'[Statement]' How far do you agree?"
**Examples:**
- "'The main reason Hitler came to power in 1933 was the Depression.' How far do you agree?" [16 marks + 4 SPaG]
- "How far do you agree that fear was the main reason why the Nazi dictatorship was able to control Germany?" [16 marks + 4 SPaG]

**16-Mark Levels:**
- Level 4 (13-16): Complex explanation; analysis of key features; sustained judgement
- Level 3 (9-12): Developed explanation; good analysis; some judgement
- Level 2 (5-8): Simple explanation; some analysis; implicit judgement
- Level 1 (1-4): Basic points; limited development; no judgement

### Type 5: Historic Environment (16 marks)
Format: "How does [site] help you to understand [aspect of the period]?"
**Examples:**
- "How does Kenilworth Castle help you understand the changing importance of castles in the medieval period?" [16 marks]
Marking: Levels 1-4 based on knowledge of site and wider context

### Type 6: Interpretations (8 marks each)
Format: "How convincing is Interpretation [X] about...?" / "What is the main difference between these interpretations?"
Marking: Levels 1-4 based on evaluation using own knowledge
`;

const AQA_GCSE_HIST_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE History Mark Scheme Conventions

### 16-Mark Extended Response Levels (+ 4 SPaG)

**Level 4 (13-16 marks):**
- Complex explanation of stated factor
- Complex explanation of other factor(s)
- Demonstrates range of accurate and detailed knowledge
- Clear and sustained judgement
- Answer is coherently structured

**Level 3 (9-12 marks):**
- Developed explanation of stated factor
- Developed explanation of other factor(s)
- Demonstrates range of accurate knowledge
- Judgement is present but may not be fully sustained
- Answer is largely coherent

**Level 2 (5-8 marks):**
- Simple explanation of one or more factors
- Some accurate knowledge but may lack detail
- Judgement may be implicit
- Answer lacks full coherence

**Level 1 (1-4 marks):**
- Basic or generalised statements
- Limited accurate knowledge
- No clear judgement
- Answer lacks structure

**0 marks:** Nothing worthy of credit

### SPaG Marks (4 marks total)
- High (4): Consistently accurate spelling and punctuation; effective grammar; wide vocabulary including historical terms
- Intermediate (2-3): Generally accurate; some errors; reasonable vocabulary
- Threshold (1): Some accuracy; frequent errors; limited vocabulary
- 0: Does not meet threshold

### 8-Mark Question Levels

**Level 4 (7-8 marks):**
- Complex analysis (sources: content, provenance, context)
- Detailed and accurate knowledge
- Sophisticated evaluation

**Level 3 (5-6 marks):**
- Developed analysis
- Relevant knowledge
- Sound evaluation

**Level 2 (3-4 marks):**
- Simple analysis
- Some relevant knowledge
- Basic evaluation

**Level 1 (1-2 marks):**
- Limited analysis
- General knowledge
- Minimal evaluation

### Key Requirements for High Marks
- Use of specific factual knowledge
- Clear explanation of causation/consequence
- Analysis of change and continuity
- Evaluation leading to supported judgement
- Use of second-order historical concepts
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - GERMANY 1890-1945
// ============================================================================

const GERMANY_1890_1945_KNOWLEDGE = `
## GERMANY 1890-1945: DEMOCRACY AND DICTATORSHIP

### PART 1: GERMANY UNDER KAISER WILHELM II (1890-1914)

**Key Dates:**
- 1888: Wilhelm II becomes Kaiser
- 1890: Bismarck dismissed; Wilhelm begins personal rule
- 1898: First Navy Law - start of naval expansion
- 1900: Second Navy Law - rivalry with Britain intensifies
- 1905-06: First Moroccan Crisis
- 1911: Second Moroccan Crisis (Agadir)
- 1912: SPD becomes largest party in Reichstag

**Key Individuals:**
- **Kaiser Wilhelm II**: Autocratic ruler; "personal rule"; believed in divine right; militaristic; wanted Germany to be a world power ("a place in the sun")
- **Otto von Bismarck**: Chancellor until 1890; dismissed by Wilhelm for being too cautious
- **Admiral Tirpitz**: Architect of German naval expansion; built High Seas Fleet to rival Britain
- **Bethmann-Hollweg**: Chancellor 1909-1917; tried to balance military and civilian interests

**Key Statistics:**
- German steel production increased 1000% between 1871-1914
- German population grew from 41 million (1871) to 65 million (1914)
- By 1914, Germany had the second largest navy in the world
- SPD won 4.25 million votes in 1912 election (largest party)

**Key Terms:**
- **Weltpolitik**: World policy - Germany's aim to become a global colonial power
- **Flottenpolitik**: Fleet policy - naval expansion to challenge British naval supremacy
- **Reichstag**: German parliament (limited power - Kaiser could dismiss it)
- **Junkers**: Prussian landowning aristocracy - dominated army and civil service

---

### PART 2: IMPACT OF WORLD WAR ONE (1914-1918)

**Key Dates:**
- August 1914: Germany declares war; initial enthusiasm ("Spirit of 1914")
- 1915: British naval blockade begins
- 1916: Battle of Verdun; "Turnip Winter" begins
- 1917: Unrestricted submarine warfare; USA enters war; strikes in Germany
- January 1918: Strikes involving 400,000 workers
- September 1918: Ludendorff admits war is lost
- October 1918: Naval mutiny at Kiel
- 9 November 1918: Kaiser abdicates; Republic declared
- 11 November 1918: Armistice signed

**Key Individuals:**
- **General Ludendorff**: Military leader; effectively ran Germany 1916-18; created "stab in the back" myth
- **Friedrich Ebert**: SPD leader; became first President of Weimar Republic
- **Rosa Luxemburg**: Spartacist leader; wanted communist revolution; murdered January 1919
- **Karl Liebknecht**: Co-leader of Spartacists; murdered January 1919

**Key Statistics:**
- 2 million German soldiers died; 4 million wounded
- German food production fell by 50% during the war
- 750,000 German civilians died from hunger and disease
- Infant mortality increased by 50% during war
- Real wages fell by 20-30% during the war

**Key Terms:**
- **Total war**: Entire economy and society mobilized for war effort
- **"Turnip Winter" (1916-17)**: Severe food shortages; Germans survived on turnips
- **"Stab in the back" myth (Dolchstosslegende)**: False claim that Germany was not defeated militarily but betrayed by politicians and Jews
- **November Criminals**: Nazi term for politicians who signed the Armistice

---

### PART 3: THE WEIMAR REPUBLIC (1918-1933)

#### Early Problems (1919-1923)

**Key Dates:**
- January 1919: Spartacist Rising crushed; elections for National Assembly
- February 1919: National Assembly meets in Weimar
- 28 June 1919: Treaty of Versailles signed
- March 1920: Kapp Putsch (failed right-wing coup)
- January 1923: French occupy the Ruhr
- November 1923: Hyperinflation peaks; Hitler's Munich Putsch

**Treaty of Versailles - Key Terms:**
- **War Guilt (Article 231)**: Germany accepts blame for WWI
- **Reparations**: £6.6 billion (132 billion gold marks)
- **Territory lost**: Alsace-Lorraine, Eupen-Malmedy, Polish Corridor, Danzig, Saarland (15 years), all colonies
- **Military restrictions**: Army limited to 100,000; no tanks, aircraft, submarines; Rhineland demilitarized
- **Anschluss forbidden**: Germany cannot unite with Austria

**Weimar Constitution - Key Features:**
- **President**: Elected every 7 years; could use Article 48 (emergency powers)
- **Chancellor**: Head of government; needed Reichstag support
- **Reichstag**: Elected by proportional representation (PR)
- **Bill of Rights**: Freedom of speech, religion, equality before the law

**Weimar Constitution - Weaknesses:**
- **Proportional representation**: Led to many small parties; hard to form stable governments
- **Article 48**: President could rule by decree in "emergency" - open to abuse
- **President could dismiss Chancellor**: Created instability
- **Army oath to state, not government**: Army not loyal to Republic

**Hyperinflation 1923 - Key Statistics:**
- January 1921: 1 US dollar = 65 marks
- July 1922: 1 US dollar = 493 marks
- January 1923: 1 US dollar = 17,792 marks
- November 1923: 1 US dollar = 4.2 trillion marks
- Workers paid twice daily; used wheelbarrows for wages

**Hyperinflation - Winners and Losers:**
- **Losers**: Savings wiped out; pensioners; people on fixed incomes; middle class
- **Winners**: Those with debts (debts became worthless); those with goods to barter; farmers; businesses with foreign currency

#### Stresemann and Recovery (1924-1929)

**Key Dates:**
- August 1923: Stresemann becomes Chancellor
- November 1923: New currency (Rentenmark) introduced
- April 1924: Dawes Plan agreed
- October 1925: Locarno Treaties signed
- September 1926: Germany joins League of Nations
- August 1929: Young Plan agreed
- October 1929: Stresemann dies; Wall Street Crash

**Key Individuals:**
- **Gustav Stresemann**: Foreign Minister 1923-29; won Nobel Peace Prize 1926; brought stability but relied on US loans

**Dawes Plan (1924):**
- US loans to Germany ($800 million initially)
- Reparations payments restructured (reduced initially)
- French troops leave Ruhr
- **Problem**: Made Germany dependent on US economy

**Locarno Treaties (1925):**
- Germany, France, Belgium agree to respect borders
- Germany accepts loss of Alsace-Lorraine
- Rhineland to remain demilitarized
- **Significance**: Germany treated as equal; "Spirit of Locarno"

**Young Plan (1929):**
- Reparations reduced from £6.6 billion to £2 billion
- Extended to 1988
- **Problem**: Nationalists (including Nazis) opposed any reparations

**"Golden Twenties" - Cultural Changes:**
- **Art**: Expressionism, Bauhaus, Otto Dix, George Grosz
- **Film**: Fritz Lang's "Metropolis"; UFA studios; Marlene Dietrich
- **Architecture**: Bauhaus - modernist design
- **Cabaret culture**: Berlin nightlife; jazz; more liberal attitudes
- **Women**: More freedoms; "New Woman"; short hair; voted; worked
- **Opposition**: Traditionalists saw this as moral decline; Nazis exploited this

#### Collapse of Weimar (1929-1933)

**Key Dates:**
- October 1929: Wall Street Crash
- March 1930: Müller's coalition collapses; Brüning becomes Chancellor
- September 1930: Nazis win 107 seats (up from 12)
- 1931: Banks collapse; unemployment reaches 5 million
- April 1932: Hindenburg re-elected President; Hitler second
- July 1932: Nazis win 230 seats (largest party)
- November 1932: Nazis lose seats (196) but remain largest party
- 30 January 1933: Hitler appointed Chancellor

**Key Individuals:**
- **Heinrich Brüning**: Chancellor 1930-32; ruled by decree; deflationary policies worsened Depression
- **Franz von Papen**: Chancellor May-November 1932; thought he could control Hitler
- **Kurt von Schleicher**: Chancellor December 1932-January 1933; failed to build support
- **Paul von Hindenburg**: President; reluctantly appointed Hitler; died 1934

**Impact of Great Depression:**
- US recalled loans; German economy collapsed
- Unemployment: 1.4 million (1928) → 6 million (1932)
- Industrial production fell by 40%
- Middle class lost savings again (memories of 1923)
- Farmers suffered from falling prices

**Why did people vote Nazi?**
- **Economic desperation**: Promised jobs; "Work and Bread"
- **Fear of communism**: Nazis promised to crush KPD
- **Disillusionment with Weimar**: "System parties" had failed
- **Appeal to national pride**: Promised to overturn Versailles
- **Effective propaganda**: Goebbels; Hitler's speeches; modern methods
- **Hitler's charisma**: Powerful speaker; offered simple solutions
- **SA intimidation**: Violence against opponents
- **Support from elites**: Industrialists funded Nazis; believed they could control Hitler

---

### PART 4: NAZI CONSOLIDATION OF POWER (1933-1934)

**Key Dates:**
- 30 January 1933: Hitler becomes Chancellor (only 3 Nazis in cabinet)
- 27 February 1933: Reichstag Fire
- 28 February 1933: Decree for Protection of People and State (suspended civil liberties)
- 5 March 1933: Election - Nazis win 44% (288 seats)
- 23 March 1933: Enabling Act passed (444-94)
- 2 May 1933: Trade unions banned; DAF created
- 14 July 1933: Law against Formation of New Parties
- 30 June 1934: Night of the Long Knives
- 2 August 1934: Hindenburg dies; Hitler becomes Führer

**Reichstag Fire (27 February 1933):**
- Dutch communist Van der Lubbe arrested
- Hitler blamed communist conspiracy
- Emergency decree suspended civil liberties
- 4,000 communists arrested
- **Significance**: Legal basis for Nazi dictatorship

**Enabling Act (23 March 1933):**
- Gave Hitler power to make laws without Reichstag for 4 years
- Needed 2/3 majority to pass
- SA intimidated opponents; KPD banned
- Centre Party voted in favor (promised Catholic Church protection)
- Only SPD voted against
- **Significance**: Legal foundation of Nazi dictatorship

**Night of the Long Knives (30 June 1934):**
- SS murdered SA leadership including Ernst Röhm
- Also killed: former Chancellor Schleicher, Strasser
- Between 85-400 people murdered
- Hitler claimed he was saving Germany from SA coup
- **Reasons**: Army feared SA; Röhm wanted "second revolution"; Hitler needed army support
- **Significance**: SS dominant; army swore oath to Hitler personally

---

### PART 5: LIFE IN NAZI GERMANY (1933-1939)

#### Nazi Economic Policies

**Key Statistics:**
- Unemployment: 6 million (1933) → 300,000 (1939)
- National income doubled 1933-1938
- Military spending: 1% of government spending (1933) → 50% (1938)
- Working hours increased: 43 hrs/week (1933) → 47 hrs/week (1939)

**How Nazis Reduced Unemployment:**
- **RAD (Reich Labour Service)**: Compulsory 6 months for young men; built autobahns
- **Rearmament**: Conscription 1935; massive weapons production
- **Public works**: Autobahns; public buildings
- **Invisible unemployment**: Jews, women pushed out of jobs; not counted

**Nazi Control of Workers:**
- **DAF (German Labour Front)**: Replaced trade unions; no right to strike
- **Strength Through Joy (KdF)**: Leisure activities; holidays; promised VW car
- **Beauty of Labour**: Improved working conditions; propaganda

#### Nazi Control of Society

**Propaganda (Goebbels):**
- Reich Ministry of Public Enlightenment and Propaganda
- Control of radio, press, film, art
- Nuremberg Rallies - mass spectacles
- 1936 Berlin Olympics - showcased Nazi Germany
- Book burnings; censorship; approved culture only

**Education:**
- Nazi curriculum: Race studies, PE, history revised
- Textbooks rewritten; Jewish teachers dismissed
- Boys prepared for military; girls for motherhood
- University enrollment fell (especially women)

**Youth Organizations:**
- **Hitler Youth (boys)**: Military training; camping; Nazi ideology
- **League of German Maidens (BDM - girls)**: Domestic skills; fitness; motherhood
- Membership compulsory from 1939
- By 1939: 8 million members

**Women in Nazi Germany:**
- Nazi ideal: "Kinder, Küche, Kirche" (Children, Kitchen, Church)
- Encouraged to leave work; incentives for children
- **Mother's Cross**: Bronze (4 children), Silver (6), Gold (8)
- Marriage loans for leaving work; repaid by having children
- **Reality**: By late 1930s, needed women workers for rearmament

**The Churches:**
- **Concordat (1933)**: Agreement with Catholic Church - Church stays out of politics
- **Reich Church**: Nazi-controlled Protestant church
- **Confessing Church**: Protestant opposition (Bonhoeffer, Niemöller)
- Pope's encyclical "With Burning Concern" (1937) - criticized Nazis

#### Nazi Terror State

**The SS (Protection Squad):**
- Led by Heinrich Himmler
- Originally Hitler's bodyguard; became state within a state
- Controlled concentration camps; later death camps
- Waffen SS - military wing

**The Gestapo (Secret State Police):**
- Founded 1933; led by Himmler from 1936
- Arrested political opponents; no legal oversight
- Used informers; promoted fear
- Only 32,000 officers for 80 million people - relied on public cooperation

**Concentration Camps:**
- First: Dachau (March 1933)
- Initially for political opponents: communists, socialists
- Later: "asocials," criminals, homosexuals, Jehovah's Witnesses

#### Persecution of Jews

**Timeline of Persecution:**
- **April 1933**: Boycott of Jewish shops; Jews banned from civil service
- **1935 Nuremberg Laws**: Reich Citizenship Law (Jews not citizens); Law for Protection of German Blood (banned Jewish-German marriage)
- **November 1938 Kristallnacht**: 91 killed; 30,000 sent to camps; synagogues burned; Jewish businesses destroyed
- **1939**: Jews forced to add "Israel" or "Sara" to names; forced to wear Star of David

**Key Statistics:**
- 500,000 Jews in Germany 1933
- 250,000 emigrated by 1939
- 6 million Jews murdered in Holocaust (Europe-wide)

---

### PART 6: OPPOSITION AND RESISTANCE

**Types of Opposition:**
- **Passive resistance**: Not giving Nazi salute; listening to BBC; jokes
- **Youth opposition**: Edelweiss Pirates (working class); Swing Youth (jazz)
- **Church opposition**: Confessing Church; Bishop Galen (against euthanasia)
- **Military opposition**: July Bomb Plot 1944 (Stauffenberg)
- **Communist underground**: Banned but continued secretly

**Why was opposition limited?**
- Terror and fear of Gestapo
- Many genuinely supported Nazis (jobs, national pride)
- Propaganda effective
- Success in foreign policy
- No united opposition movement
- Risk to family members

**Key Individuals:**
- **Pastor Martin Niemöller**: Confessing Church; concentration camp
- **Dietrich Bonhoeffer**: Theologian; executed 1945
- **Sophie Scholl**: White Rose group; distributed leaflets; executed 1943
- **Claus von Stauffenberg**: July Bomb Plot 1944; executed

---

### COMMON EXAM QUESTIONS - GERMANY 1890-1945

**16-Mark Questions:**
- "The main reason Hitler came to power in 1933 was the Depression." How far do you agree?
- "Fear was the main reason the Nazi dictatorship was able to control Germany." How far do you agree?
- "The Weimar Republic was doomed from the start." How far do you agree?
- "Hitler's foreign policy was the main reason he remained popular." How far do you agree?
- "Nazi economic policies were successful." How far do you agree?

**8-Mark Explain Questions:**
- Explain why the Weimar Republic faced difficulties in the years 1919-1923.
- Explain why Hitler was appointed Chancellor in January 1933.
- Explain why the Nazis were able to consolidate power in 1933-1934.
- Explain why there was limited opposition to Nazi rule.

**8-Mark Write an Account Questions:**
- Write an account of the events leading to the Munich Putsch of 1923.
- Write an account of how the Nazis consolidated power in 1933-1934.
- Write an account of the events of Kristallnacht and its consequences.

---

### HISTORIOGRAPHICAL INTERPRETATIONS

**On Weimar's Failure:**
- **Structuralist view**: Weimar was fatally flawed from birth (constitution, Versailles, lack of democratic tradition)
- **Intentionalist view**: Weimar could have survived but was undermined by specific decisions and individuals

**On Nazi Rise to Power:**
- **Economic determinism**: Depression made Nazi rise inevitable
- **Hitler-centric**: Hitler's skills and appeal were decisive
- **Elite complicity**: Conservative elites enabled Hitler, thinking they could control him

**On Nature of Nazi State:**
- **Intentionalist**: Hitler was in total control; followed consistent ideology
- **Structuralist**: Nazi state was chaotic; competing power centers; "working towards the Führer"
- **Synthesis**: Hitler set broad goals; subordinates competed to implement them

**On German Resistance:**
- **Traditional view**: Germans were brainwashed; little resistance
- **Revisionist view**: Many forms of resistance existed; terror prevented more
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - CONFLICT AND TENSION 1919-1939
// ============================================================================

const CONFLICT_TENSION_1919_1939_KNOWLEDGE = `
## CONFLICT AND TENSION 1919-1939

### PART 1: PEACEMAKING 1919-1920

**The Paris Peace Conference:**
- January-June 1919
- 32 nations represented; Germany excluded
- Dominated by "Big Three": Wilson (USA), Lloyd George (Britain), Clemenceau (France)

**The Big Three - Aims:**

**Woodrow Wilson (USA):**
- Idealistic; wanted lasting peace
- 14 Points (January 1918): Self-determination; free trade; no secret treaties; League of Nations
- Did NOT want to punish Germany harshly
- Faced opposition in US Congress

**Georges Clemenceau (France):**
- Wanted to punish and weaken Germany
- France invaded twice (1870, 1914); 1.4 million dead; northeast devastated
- Wanted reparations; wanted Rhineland; wanted Germany divided
- "Tiger" - uncompromising

**David Lloyd George (Britain):**
- Middle position; wanted "moderate" treaty
- Promised British voters to "squeeze Germany until the pips squeak"
- But worried a harsh treaty would cause future war
- Wanted to preserve trade with Germany

**Treaty of Versailles (28 June 1919) - Key Terms:**

**Territorial Losses:**
- Alsace-Lorraine to France
- Eupen-Malmedy to Belgium
- North Schleswig to Denmark (plebiscite)
- West Prussia, Posen, Upper Silesia to Poland
- Danzig became Free City under League
- Saarland under League control for 15 years
- All colonies became League mandates
- Rhineland demilitarized; occupied for 15 years
- Anschluss (union with Austria) forbidden
- Germany lost 13% of territory, 12% of population, 16% of coal, 48% of iron

**Military Restrictions:**
- Army limited to 100,000 volunteers
- No conscription
- No tanks, armored cars, military aircraft
- Navy limited to 6 battleships, no submarines
- No military in Rhineland

**War Guilt and Reparations:**
- Article 231: Germany accepts responsibility for war
- Reparations set at £6.6 billion (132 billion gold marks) in 1921

**German Reactions:**
- "Diktat" - dictated peace; Germany had no say
- Called November signatories "November Criminals"
- Anger at war guilt clause - Germany didn't accept blame
- Territory losses created German minorities abroad
- Weimar government weakened by association with treaty

**Evaluation of Treaty of Versailles:**
- **Too harsh?** Germany lost territory, military, money, pride
- **Too lenient?** Germany survived as united nation; could recover
- **Self-determination?** Millions of Germans now in Poland, Czechoslovakia
- **Keynes**: Warned reparations would destroy German economy
- **Mantoux**: Germany could have paid; chose not to

---

### PART 2: THE LEAGUE OF NATIONS

**Structure:**
- **Assembly**: All members; met annually; decisions needed unanimous vote
- **Council**: Major powers + rotating members; met more often
- **Secretariat**: Permanent civil service; based in Geneva
- **Special Commissions**: Health, Labor, Refugees, Mandates

**Membership Problems:**
- USA never joined (Senate rejected Treaty)
- Germany excluded until 1926; left 1933
- USSR joined 1934; expelled 1939
- Japan left 1933; Italy left 1937

**Aims:**
- Collective security - all members defend each other
- Disarmament - reduce weapons to prevent war
- Improve living and working conditions
- Uphold Treaty of Versailles

**Powers:**
- **Moral condemnation**: Shame aggressors publicly
- **Economic sanctions**: Stop trade with aggressor
- **Military action**: League army (but no permanent force)

**Weaknesses:**
- No army - relied on members providing troops
- Unanimous voting - one country could block action
- Slow decision-making
- Major powers absent (USA) or left (Germany, Japan, Italy)
- Self-interest often overrode collective security
- Only met in Geneva - slow communication

**Successes in 1920s:**
- **Åland Islands (1921)**: Dispute between Sweden and Finland; awarded to Finland
- **Upper Silesia (1921)**: Divided between Germany and Poland after plebiscite
- **Greek-Bulgarian dispute (1925)**: Greece ordered to withdraw and pay compensation
- **Health**: Campaigns against leprosy, malaria
- **Refugees**: Helped 400,000 POWs return home
- **Slavery**: Freed 200,000 slaves in Sierra Leone

**Failures in 1920s:**
- **Vilna (1920)**: Poland seized from Lithuania; League did nothing
- **Ruhr (1923)**: France invaded; League did nothing
- **Corfu (1923)**: Italy bombarded Greek island; League backed down

---

### PART 3: CRISES OF THE 1930s

#### Manchuria (1931-1933)

**Background:**
- Japan had economic interests in Manchuria (railways, mines)
- Depression hit Japan hard; needed markets and resources
- Japanese army acted independently of government

**Events:**
- September 1931: Mukden Incident - Japan claimed China sabotaged railway
- Japan invaded Manchuria; renamed it Manchukuo
- China appealed to League
- Lytton Report (October 1932): Condemned Japan but took a year
- February 1933: Japan rejected report and left League

**Why did League fail?**
- Manchuria too far away for European powers
- Economic self-interest: Britain and France had trade with Japan
- No USA - major Pacific power absent
- Britain wouldn't risk navy without US support
- Sanctions meaningless without US trade
- Japan was a major power - League couldn't enforce anything

**Significance:**
- Showed League couldn't stop major power
- Encouraged other aggressors (Italy, Germany)
- Japan faced no real consequences

#### Abyssinia (1935-1936)

**Background:**
- Italy already had Eritrea and Somaliland in Africa
- Mussolini wanted empire; revenge for defeat at Adowa (1896)
- Abyssinia (Ethiopia) one of few independent African nations
- Member of League of Nations

**Events:**
- December 1934: Wal Wal incident - border clash
- October 1935: Italy invaded with 400,000 troops; used poison gas
- League condemned Italy; imposed sanctions
- **BUT**: Sanctions excluded oil, coal, steel; Suez Canal remained open
- December 1935: Hoare-Laval Pact leaked - secret British-French plan to give Italy 2/3 of Abyssinia
- May 1936: Italy completed conquest
- July 1936: Sanctions lifted

**Why did League fail?**
- Britain and France prioritized keeping Italy as ally against Germany
- Hoare-Laval showed they weren't serious about League principles
- Sanctions too weak - no oil embargo
- Suez Canal not closed - Italy could supply army
- Britain afraid of war in Mediterranean
- USA not involved - continued trading with Italy

**Significance:**
- Fatal blow to League credibility
- Showed collective security was dead
- Mussolini allied with Hitler (Rome-Berlin Axis, 1936)
- Encouraged Hitler to act aggressively

---

### PART 4: HITLER'S FOREIGN POLICY

**Nazi Foreign Policy Aims:**
- **Overturn Versailles**: Rearmament; remilitarize Rhineland; regain lost territory
- **Anschluss**: Unite all German speakers (Austria, Sudetenland)
- **Lebensraum**: "Living space" in Eastern Europe (Poland, USSR)
- **Destroy communism**: USSR as ultimate target

**Steps to War:**

**1933-1935: Testing the Water**
- October 1933: Germany leaves League and Disarmament Conference
- January 1935: Saar plebiscite - 90% vote to return to Germany
- March 1935: Hitler announces rearmament and Luftwaffe

**1936: Rhineland**
- March 1936: German troops enter demilitarized Rhineland
- Violation of Versailles and Locarno
- France could have stopped it - Germany ordered retreat if opposed
- Britain saw it as "Germany walking into its own backyard"
- **Significance**: Major gamble; success emboldened Hitler

**1938: Anschluss (Austria)**
- March 1938: German troops enter Austria; Anschluss declared
- Plebiscite showed 99.7% support (rigged)
- Violation of Versailles (forbade Anschluss)
- Britain and France protested but did nothing

**1938: Sudetenland and Munich**
- Sudetenland: Border region of Czechoslovakia; 3 million Germans
- Hitler demanded self-determination for Sudeten Germans
- Chamberlain flew to Germany three times
- **Munich Agreement (September 1938)**: Britain, France, Italy, Germany
- Czechoslovakia not invited; forced to cede Sudetenland
- Chamberlain: "Peace for our time"

**1939: Destruction of Czechoslovakia**
- March 1939: Germany occupies rest of Czechoslovakia
- Not German-speaking - couldn't be justified by self-determination
- Showed Hitler's word couldn't be trusted
- End of appeasement; Britain guarantees Poland

**1939: Poland and War**
- April 1939: Hitler demands Danzig and Polish Corridor
- August 1939: Nazi-Soviet Pact - Hitler and Stalin agree to divide Poland
- 1 September 1939: Germany invades Poland
- 3 September 1939: Britain and France declare war

---

### PART 5: APPEASEMENT

**What was Appeasement?**
- Policy of making concessions to aggressive powers to avoid war
- Associated with Neville Chamberlain (PM 1937-1940)
- Culminated in Munich Agreement (1938)

**Arguments FOR Appeasement (at the time):**
- **Genuine desire for peace**: WWI horrors fresh; "war to end all wars" had failed
- **Military weakness**: Britain and France not ready for war; needed time to rearm
- **Empire vulnerability**: Britain couldn't defend empire and fight in Europe
- **Economic concerns**: Depression; couldn't afford another war
- **Versailles too harsh**: Some German grievances legitimate (self-determination)
- **Fear of communism**: Some saw Nazi Germany as buffer against USSR
- **No reliable allies**: USA isolationist; USSR distrusted
- **Public opinion**: Strong anti-war sentiment; pacifism

**Arguments AGAINST Appeasement:**
- **Encouraged aggression**: Each concession led to more demands
- **Morally wrong**: Abandoned Czechoslovakia; betrayed principles
- **Missed opportunities**: Could have stopped Hitler in Rhineland (1936)
- **Made Germany stronger**: Czechoslovakia had strong defenses and army
- **Destroyed trust**: USSR suspicious; Nazi-Soviet Pact resulted
- **Self-delusion**: Hitler's aims were clear (Mein Kampf)
- **"Guilty men"**: Churchill later blamed appeasers

**Historiographical Views:**
- **"Guilty men" thesis (1940)**: Appeasers were cowards who could have stopped Hitler
- **Revisionist view (1960s)**: Given circumstances, appeasement was reasonable
- **Post-revisionist**: Combination - understandable but ultimately mistaken

---

### COMMON EXAM QUESTIONS - CONFLICT AND TENSION

**16-Mark Questions:**
- "The main reason for the failure of the League of Nations was the absence of major powers." How far do you agree?
- "Appeasement was the right policy for Britain in the 1930s." How far do you agree?
- "The Treaty of Versailles was fair to Germany." How far do you agree?
- "Hitler's foreign policy was the main cause of World War Two." How far do you agree?

**8-Mark Explain Questions:**
- Explain why the League of Nations failed to stop Japanese aggression in Manchuria.
- Explain why Britain and France followed a policy of appeasement.
- Explain why the Treaty of Versailles caused resentment in Germany.

**8-Mark Write an Account Questions:**
- Write an account of how events in Czechoslovakia in 1938-1939 led to war.
- Write an account of how the League of Nations dealt with the Abyssinian Crisis.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - ELIZABETHAN ENGLAND
// ============================================================================

const ELIZABETHAN_ENGLAND_KNOWLEDGE = `
## ELIZABETHAN ENGLAND c.1568-1603

### PART 1: ELIZABETH'S COURT AND GOVERNMENT

**Elizabeth I - Key Facts:**
- Born 1533; became Queen 1558 aged 25
- Daughter of Henry VIII and Anne Boleyn
- Protestant (but sought religious compromise)
- Never married; "Virgin Queen"
- Reigned 45 years; died 1603

**The Royal Court:**
- Center of political power and patronage
- Elizabeth used court to control nobles
- **Progresses**: Elizabeth traveled country; stayed with nobles (very expensive for hosts)
- Display of wealth and power; reinforce loyalty
- Court positions highly sought after

**Key Figures at Court:**
- **William Cecil (Lord Burghley)**: Chief minister 1558-1598; cautious; Protestant
- **Robert Cecil**: Son of William; took over as chief minister
- **Francis Walsingham**: Spymaster; uncovered plots against Elizabeth
- **Robert Dudley (Earl of Leicester)**: Elizabeth's favorite; possible suitor
- **Robert Devereux (Earl of Essex)**: Later favorite; executed 1601 for rebellion

**Privy Council:**
- About 19 members; met almost daily
- Advised Queen; administered government
- Elizabeth chose members; dominated it
- Key members: Cecil, Walsingham, Leicester

**Parliament:**
- Two houses: Lords and Commons
- Met only when summoned (13 times in 45 years)
- Main function: grant taxation
- Elizabeth avoided calling Parliament when possible
- MPs tried to discuss succession and religion; Elizabeth forbade this

**Elizabeth's Power:**
- **Royal prerogative**: Foreign policy, religion, marriage were Queen's business alone
- **Patronage**: Elizabeth controlled appointments, land grants, titles
- **Parliament limited**: Could only meet when summoned; Elizabeth controlled agenda
- **Local government**: Relied on JPs (unpaid gentry); Lords Lieutenant

---

### PART 2: LIFE IN ELIZABETHAN ENGLAND

**Society Structure:**
1. **Nobility**: Earls, Lords; owned vast estates; about 50 families
2. **Gentry**: Knights, esquires, gentlemen; landowners; about 10,000 families
3. **Yeomen**: Owned small farms; prosperous; growing class
4. **Tenant farmers**: Rented land; paid rent in money or kind
5. **Landless laborers**: Worked for wages; seasonal; most vulnerable
6. **Vagrants**: Homeless; unemployed; seen as threat

**Economic Changes:**

**Causes of Poverty:**
- Population growth: 3 million (1551) → 4 million (1601)
- Enclosure: Common land fenced for sheep farming; fewer jobs
- Bad harvests: 1594-1597 especially severe
- Inflation: Prices rose faster than wages
- Cloth trade fluctuations: Main industry; vulnerable to foreign markets
- Dissolution of monasteries: Lost charity support

**Attitudes to Poverty:**
- **"Deserving poor"**: Old, sick, orphans - deserved help
- **"Undeserving poor"**: Able-bodied unemployed - criminals, vagabonds
- Fear of vagrants: Seen as threat to social order

**Elizabethan Poor Laws:**
- **1563**: JPs collect compulsory poor rate; punishment for begging
- **1572**: Register of poor; punishment for vagrancy (whipping, burning ear)
- **1576**: Houses of Correction; work provided for able-bodied
- **1597-1601 Poor Laws**:
  - Each parish responsible for its poor
  - Overseers of the Poor appointed
  - Able-bodied set to work; children apprenticed
  - Almshouses for deserving poor
  - Houses of Correction for vagrants

**Education:**
- Grammar schools expanded; taught Latin, Greek, Bible
- Universities: Oxford and Cambridge; trained clergy, lawyers, administrators
- Education mainly for boys; girls educated at home
- Literacy increased; more printed books available

**Sports and Pastimes:**
- **Nobility**: Hunting, hawking, tennis, jousting
- **Common people**: Football (violent), wrestling, bear-baiting, cock-fighting
- **Theatre**: Popular entertainment; Shakespeare, Marlowe
- **Holy days**: Religious festivals; May Day; Christmas

---

### PART 3: TROUBLES AT HOME AND ABROAD

**The Problem of Mary, Queen of Scots:**
- Catholic; next in line to English throne
- Forced to abdicate Scottish throne 1567
- Fled to England 1568; effectively Elizabeth's prisoner
- Focus for Catholic plots for 19 years

**Catholic Plots:**
- **1569 Northern Rebellion**: Catholic earls tried to free Mary; 800 executed
- **1571 Ridolfi Plot**: Spanish-backed plot; Duke of Norfolk executed 1572
- **1583 Throckmorton Plot**: Plan for Spanish invasion; Throckmorton executed
- **1586 Babington Plot**: Mary wrote approving assassination of Elizabeth
- Mary executed February 1587

**Threats from Spain:**
- Philip II of Spain: Catholic; former husband of Mary I; wanted to restore Catholicism
- England supporting Dutch Protestant rebels against Spain
- English privateers (Drake) attacking Spanish treasure ships
- After Mary's execution, Philip planned invasion

**The Spanish Armada 1588:**
- 130 ships; 30,000 men
- Plan: Sail to Netherlands; pick up Duke of Parma's army; invade England

**Why did Armada fail?**
- **English tactics**: Smaller, faster ships; better guns; fireships at Calais
- **Spanish mistakes**: Couldn't link with Parma; anchored at Calais
- **Weather**: Storms destroyed many ships sailing home around Scotland
- **Communication**: Medina Sidonia and Parma couldn't coordinate
- Spanish lost about 50 ships; 15,000 men

**Significance:**
- English victory celebrated (divine providence)
- But war with Spain continued until 1604
- Further Armadas attempted (1596, 1597)
- England remained Protestant

---

### PART 4: ELIZABETHAN RELIGIOUS SETTLEMENT

**Background:**
- Henry VIII broke with Rome 1534
- Edward VI: Protestant reforms
- Mary I: Restored Catholicism; burned 300 Protestants
- Elizabeth: Needed to find compromise

**Religious Settlement 1559:**
- **Act of Supremacy**: Elizabeth "Supreme Governor" of Church (not Head)
- **Act of Uniformity**: Book of Common Prayer compulsory; church attendance fines
- **Royal Injunctions**: Clergy regulations; moderate Protestant practice

**Middle Way:**
- Protestant theology but some Catholic practices kept
- Bishops and church hierarchy retained
- Some vestments; some ceremony
- Designed to be acceptable to most people

**Catholic Threats:**
- Recusants refused to attend Church of England; fined £20/month
- Seminary priests from Douai (France) entered England from 1574
- Jesuits arrived 1580 (Campion, Parsons)
- **Penal Laws**: Increasingly harsh - death for priests; harboring priests

**Puritan Challenges:**
- Wanted further Protestant reform
- Opposed vestments, bishops, ceremonies
- Some wanted Presbyterian system
- Elizabeth suppressed Puritan challenges
- Archbishop Whitgift enforced conformity 1583+

---

### PART 5: EXPLORATION AND VOYAGES

**Reasons for Exploration:**
- **Trade**: New markets; spices; wealth
- **Nationalism**: Compete with Spain and Portugal
- **Religion**: Spread Protestantism; counter Spain
- **Adventure**: Personal glory; curiosity
- **Technology**: Better ships (galleons); navigation (astrolabe, compass)

**Key Explorers:**

**Francis Drake:**
- Circumnavigation 1577-1580; second after Magellan
- Knighted by Elizabeth on Golden Hind
- Attacked Spanish treasure ships and ports
- Led fireships at Armada 1588

**Walter Raleigh:**
- Explored Virginia 1584-1587
- Attempted colony at Roanoke (failed)
- Introduced tobacco and potatoes to England (myth)
- Later imprisoned by James I; executed 1618

**John Hawkins:**
- Slave trader (triangular trade)
- Reformed Royal Navy; built galleons
- Treasurer and Controller of Navy

**Voyages:**
- **1577-1580**: Drake's circumnavigation; brought back £400,000 in treasure
- **1584-1590**: Roanoke colony attempts (Virginia); "Lost Colony"
- **1600**: East India Company founded; trade with Asia

**Significance:**
- Foundations of British Empire
- Rivalry with Spain intensified
- Wealth from privateering
- New foods: potatoes, tobacco, tomatoes
- National pride; adventure stories

---

### KEY DATES - ELIZABETHAN ENGLAND

| Year | Event |
|------|-------|
| 1558 | Elizabeth becomes Queen |
| 1559 | Religious Settlement |
| 1568 | Mary Queen of Scots arrives in England |
| 1569 | Northern Rebellion |
| 1571 | Ridolfi Plot |
| 1577-80 | Drake's circumnavigation |
| 1583 | Throckmorton Plot |
| 1584-87 | Roanoke colony attempts |
| 1586 | Babington Plot |
| 1587 | Mary Queen of Scots executed |
| 1588 | Spanish Armada |
| 1601 | Essex Rebellion; Poor Law |
| 1603 | Elizabeth dies; James I succeeds |

---

### COMMON EXAM QUESTIONS - ELIZABETHAN ENGLAND

**16-Mark Questions:**
- "The main threat to Elizabeth was from Catholics." How far do you agree?
- "Elizabeth's religious settlement was a success." How far do you agree?
- "The Poor Laws were an effective response to poverty." How far do you agree?
- "The defeat of the Spanish Armada was mainly due to English strengths." How far do you agree?

**8-Mark Explain Questions:**
- Explain why there was an increase in poverty during Elizabeth's reign.
- Explain why the Spanish Armada was defeated.
- Explain why Mary Queen of Scots was a threat to Elizabeth.
- Explain why Elizabeth's religious settlement faced challenges.

**8-Mark Write an Account Questions:**
- Write an account of the events leading to Mary Queen of Scots' execution.
- Write an account of how Elizabeth dealt with the problem of poverty.
- Write an account of the Spanish Armada campaign of 1588.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - HEALTH AND THE PEOPLE
// ============================================================================

const HEALTH_PEOPLE_KNOWLEDGE = `
## BRITAIN: HEALTH AND THE PEOPLE c.1000-PRESENT

### PART 1: MEDIEVAL MEDICINE (c.1000-1500)

**Key Ideas:**

**The Theory of the Four Humours:**
- Blood, Phlegm, Yellow Bile, Black Bile
- Illness caused by imbalance of humours
- Based on ancient Greek physician Galen (c.130-210 AD)
- Treatment: Restore balance through bleeding, purging, diet

**Miasma Theory:**
- Bad air ("miasma") caused disease
- Smells from rotting matter, swamps, sewage
- Prevention: Avoid bad smells; carry posies; burn herbs

**Supernatural Beliefs:**
- God sent disease as punishment for sin
- Cure: Prayer, pilgrimage, fasting
- Church controlled medical training

**Medical Practitioners:**

| Type | Training | Patients | Cost |
|------|----------|----------|------|
| **Physicians** | University (7 years); studied Galen | Wealthy | Expensive |
| **Apothecaries** | Apprenticeship; mixed herbal remedies | Middle class | Moderate |
| **Barber-surgeons** | Apprenticeship; surgery, bleeding | All classes | Cheap |
| **Wise women** | Local knowledge; herbs | Poor; rural | Free/cheap |

**Hospitals:**
- Run by Church; about 1,100 in England
- Focused on care, not cure; spiritual healing
- Monks and nuns provided nursing
- Dissolution (1536-40) closed many hospitals

**The Black Death (1348-1349):**
- Bubonic plague; killed 30-50% of population
- Caused by bacteria; spread by fleas on rats
- Contemporary explanations: God's punishment; miasma; Jews; planets
- Treatments: Prayer; flagellation; bleeding; posies; avoiding victims
- **Impact**: Labor shortage; wages rose; some challenged Church authority

---

### PART 2: MEDICAL RENAISSANCE (c.1500-1700)

**Key Individuals:**

**Andreas Vesalius (1514-1564):**
- Professor at Padua; conducted own dissections
- Published "On the Fabric of the Human Body" (1543)
- Proved Galen wrong about human anatomy
- **Significance**: Encouraged observation; challenged ancient authority

**William Harvey (1578-1657):**
- English physician; studied at Padua
- Discovered circulation of blood (1628)
- Proved Galen wrong about blood being made in liver
- Used experiments and dissection
- **Significance**: Scientific method; but no immediate practical application

**Thomas Sydenham (1624-1689):**
- "English Hippocrates"
- Emphasized clinical observation
- Classified diseases by symptoms
- Treated fever with fresh air (not bleeding)

**Factors Enabling Change:**
- **Printing press**: Ideas spread faster
- **Renaissance**: Questioning ancient authority; observation valued
- **Scientific Revolution**: Experimentation; Royal Society (1660)
- **Reformation**: Church power reduced; anatomy dissection allowed

**Limitations:**
- No understanding of causes of disease
- Treatments largely unchanged (bleeding, purging)
- Galen and humours still influential
- Change mainly among educated physicians

**The Great Plague (1665):**
- Last major plague outbreak in England
- 100,000 died in London (15% population)
- Still blamed on miasma; same old treatments
- Government response: Quarantine; pest houses; killing dogs and cats

---

### PART 3: INDUSTRIAL REVOLUTION AND PUBLIC HEALTH (c.1700-1900)

**Living Conditions:**
- Rapid urbanization; overcrowding
- No sewers; shared toilets; cesspits
- Polluted water supply
- Smoke and pollution from factories

**Key Developments:**

**Edward Jenner (1749-1823) - Smallpox Vaccination:**
- Observed milkmaids didn't get smallpox
- 1796: Vaccinated James Phipps with cowpox
- Published findings 1798
- Government offered free vaccination 1840; compulsory 1853
- **Opposition**: Anti-vaccination societies; religious objections; safety concerns

**Louis Pasteur (1822-1895) - Germ Theory:**
- French chemist; studied fermentation
- 1861: Proved microorganisms caused decay
- 1867: Published Germ Theory of Disease
- **Significance**: Finally explained cause of disease; disproved spontaneous generation

**Robert Koch (1843-1910):**
- German scientist; identified specific bacteria
- Developed methods to grow and stain bacteria
- Identified: Anthrax (1876), TB (1882), Cholera (1883)
- **Significance**: Linked specific germs to specific diseases

**Public Health Reforms:**

**Edwin Chadwick (1800-1890):**
- 1842 Report on Sanitary Conditions
- Showed link between dirt and disease
- Recommended: Clean water; sewers; refuse removal
- **Problem**: Believed in miasma; but recommendations still worked

**Cholera Epidemics:**
- 1831-32: First epidemic; 32,000 died
- 1848-49: Second epidemic; 62,000 died
- **John Snow (1854)**: Proved cholera spread by water (Broad Street pump)
- 1866: Final major epidemic

**Public Health Acts:**
- **1848**: First Public Health Act; Local Boards of Health (optional)
- **1875**: Second Public Health Act; made provisions compulsory
  - Clean water supply
  - Sewage systems
  - Housing standards
  - Food inspection

**Why was 1875 Act effective?**
- Germ Theory now accepted
- Compulsory (1848 was optional)
- Better understanding of disease spread
- Cholera epidemics scared people
- Extended franchise; working class could vote

---

### PART 4: MODERN MEDICINE (c.1900-PRESENT)

**Key Developments:**

**X-rays (1895):**
- Wilhelm Röntgen discovered X-rays
- First medical use within months
- Allowed diagnosis without surgery
- Used extensively in WWI

**Blood Transfusions:**
- Karl Landsteiner discovered blood groups (1901)
- WWI: Blood could be stored; transfusions practical
- WWII: Blood banks established
- **Significance**: Surgery safer; treatment for injuries

**Antibiotics:**

**Alexander Fleming (1881-1955):**
- 1928: Discovered penicillin mold killed bacteria
- Didn't develop it further

**Florey and Chain (1940s):**
- Howard Florey and Ernst Chain developed penicillin
- 1941: First human trials
- WWII: Mass production (US funding)
- **Impact**: First antibiotic; saved millions; transformed surgery

**DNA (1953):**
- Watson and Crick discovered structure
- Crick built on Rosalind Franklin's X-ray work
- Foundation for genetic medicine
- Human Genome Project completed 2003

**National Health Service (1948):**
- Aneurin Bevan created NHS
- Free healthcare for all at point of use
- Funded by National Insurance and taxation
- **Impact**: Healthcare accessible to all; transformed public health

**Modern Public Health:**
- Vaccination programs (polio, measles, etc.)
- Health education (smoking, diet, exercise)
- Screening programs (cancer, heart disease)
- Government regulation (food, drugs, workplace)

---

### FACTORS AFFECTING MEDICAL PROGRESS

| Factor | Example |
|--------|---------|
| **War** | WWI: X-rays, blood transfusions, plastic surgery; WWII: Penicillin mass production |
| **Science/Technology** | Microscope; X-rays; DNA; scanning technology |
| **Government** | Public Health Acts; NHS; vaccination programs |
| **Individuals** | Jenner, Pasteur, Koch, Fleming, Bevan |
| **Communication** | Printing press; journals; internet |
| **Chance** | Fleming's penicillin discovery |
| **Attitudes** | Renaissance questioning; germ theory acceptance |

---

### COMMON EXAM QUESTIONS - HEALTH AND THE PEOPLE

**16-Mark Questions:**
- "The most important factor in improving public health in the 19th century was the work of individuals." How far do you agree?
- "Germ Theory was the most important medical breakthrough in history." How far do you agree?
- "Government action has been the main factor in improving health since 1900." How far do you agree?

**8-Mark Explain Questions:**
- Explain why there was so little progress in medicine during the medieval period.
- Explain why public health improved in the late 19th century.
- Explain why the development of penicillin was significant.

**8-Mark Write an Account Questions:**
- Write an account of how the Black Death affected England.
- Write an account of developments in surgery in the 19th century.
`;

// ============================================================================
// SOURCE ANALYSIS GUIDANCE
// ============================================================================

const SOURCE_ANALYSIS_GUIDANCE = `
## SOURCE ANALYSIS GUIDANCE

### "How useful is Source X for an enquiry into...?" (8 marks)

**Structure (COP-K):**
1. **Content**: What does the source say/show? Use specific details.
2. **Origin**: Who created it? When? Where?
3. **Purpose**: Why was it created? Who was the audience?
4. **Knowledge**: Use own knowledge to assess reliability/utility

**Level Descriptors:**
- **Level 4 (7-8)**: Evaluates source with reference to content, provenance AND own knowledge
- **Level 3 (5-6)**: Explains utility with reference to content and provenance OR own knowledge
- **Level 2 (3-4)**: Some relevant comments on content or provenance
- **Level 1 (1-2)**: Simple comprehension of source

**Key Phrases:**
- "This source is useful because it shows/tells us..."
- "The source's usefulness is limited because..."
- "The provenance suggests..."
- "However, my own knowledge tells me..."
- "The purpose of this source was to..."

**Things to Consider:**
- **Reliability ≠ Utility**: A biased source can still be useful (shows attitudes/opinions)
- **All sources have limitations**: No source tells the complete story
- **Context matters**: When/why was it created?
- **Cross-reference**: Does it match what we know from other sources?

### SAMPLE SOURCE TYPES

**Primary Sources:**
- Government reports and statistics
- Newspaper articles from the time
- Speeches and letters
- Photographs and posters
- Diaries and memoirs
- Official documents

**Secondary Sources:**
- Historians' interpretations
- Textbook accounts
- Documentary transcripts

**For Nazi Germany - Useful Source Types:**
- Nazi propaganda posters
- Goebbels' speeches
- Statistics (unemployment, production)
- Personal accounts of life under Nazis
- Reports from foreign observers
- Secret Gestapo reports

**For Conflict and Tension - Useful Source Types:**
- Treaty documents
- Political cartoons
- Newspaper articles
- Leaders' speeches
- League of Nations reports
- Photographs of events

---

### MODEL ANSWER STRUCTURES

**8-Mark Source Question Model:**

PARAGRAPH 1 (Content):
"Source A is useful for an enquiry into [topic] because it shows [specific detail from source].
For example, it states that '[quote from source]'. This is useful because it tells us [what we learn]."

PARAGRAPH 2 (Provenance):
"The source's usefulness is enhanced/limited by its provenance. It was written by [author] in [date]
for [purpose/audience]. This means [why this matters for reliability/utility]."

PARAGRAPH 3 (Own Knowledge):
"My own knowledge supports/challenges this source. I know that [relevant historical fact].
This suggests the source is [reliable/limited] because [explanation]."

PARAGRAPH 4 (Judgement):
"Overall, Source A is [useful/limited] for this enquiry because [summary]. However, it does not
tell us about [what's missing], which limits its usefulness."

---

**16-Mark Essay Model Structure:**

INTRODUCTION:
"[Factor in question] was [significant/not the main] factor in [outcome]. However, other factors
such as [Factor 2] and [Factor 3] also played important roles."

PARAGRAPH 1 (Factor in question):
"[Statement]. For example, [specific evidence with dates/statistics]. This was significant because
[explain impact]. This shows that [link back to question]."

PARAGRAPH 2 (Alternative factor):
"However, [alternative factor] was also important. Evidence of this includes [specific detail].
This contributed to [outcome] by [explanation]."

PARAGRAPH 3 (Another alternative factor):
"Furthermore, [another factor] cannot be ignored. [Evidence]. This suggests that [link to question]."

CONCLUSION:
"In conclusion, while [factor in question] was [significant], I would argue that [most important
factor] was the main reason for [outcome] because [brief justification]. The other factors were
important but [factor] was decisive/fundamental."

---

**8-Mark Explain Question Model:**

POINT 1:
"One reason why [event/development] happened was [factor]. For example, [specific evidence].
This led to [outcome] because [explanation of how/why]."

POINT 2:
"Another reason was [second factor]. [Evidence with specific details]. This was important
because [explanation]."

POINT 3:
"A further reason was [third factor]. [Specific evidence]. This contributed to [outcome] by [explanation]."

LINK:
"These factors combined to cause [event/development]."

---

**8-Mark "Write an Account" Model:**

PARAGRAPH 1 (Beginning/Causes):
"[Event] began because [cause]. In [date], [what happened]. This was significant because [why]."

PARAGRAPH 2 (Development):
"This led to [next stage]. [Specific details of what happened]. As a result, [consequence]."

PARAGRAPH 3 (Outcome/Conclusion):
"[Event] ended with [outcome]. [Final details]. The significance of this was [impact/legacy]."
`;

// ============================================================================
// INTERPRETATION QUESTIONS GUIDANCE
// ============================================================================

const INTERPRETATION_GUIDANCE = `
## INTERPRETATION QUESTIONS GUIDANCE

### "How convincing is Interpretation X about...?" (8 marks)

**What is an Interpretation?**
- A historian's view or explanation of the past
- Based on evidence but includes judgement
- Historians can disagree about same events

**How to Answer:**

1. **Identify the interpretation's main argument**
   - What is the historian claiming?
   - What reasons do they give?

2. **Use own knowledge to test the interpretation**
   - What evidence supports it?
   - What evidence challenges it?

3. **Evaluate how convincing it is**
   - Is it well-supported by evidence?
   - Does it consider other factors?
   - Is it one-sided or balanced?

**Level Descriptors:**
- **Level 4 (7-8)**: Evaluates interpretation using detailed own knowledge; reaches substantiated judgement
- **Level 3 (5-6)**: Explains how convincing with some relevant knowledge
- **Level 2 (3-4)**: Some comments on interpretation with limited knowledge
- **Level 1 (1-2)**: Simple comprehension; no evaluation

**Key Phrases:**
- "This interpretation is convincing because..."
- "However, it is less convincing because it doesn't consider..."
- "My own knowledge supports/challenges this because..."
- "Overall, the interpretation is [fairly/very/not very] convincing..."

### COMMON INTERPRETATION DEBATES

**Nazi Germany:**
- Was Hitler a "weak dictator" or all-powerful?
- Did ordinary Germans support or just tolerate Nazis?
- Was the Holocaust planned from the start or evolved?

**Weimar Republic:**
- Was it doomed from the start or could it have survived?
- Was Stresemann era a genuine recovery or "borrowed time"?

**Treaty of Versailles:**
- Was it too harsh or too lenient?
- Did it make WWII inevitable?

**Appeasement:**
- Was it the right policy given the circumstances?
- Could Hitler have been stopped earlier?

**League of Nations:**
- Was it doomed to fail from the start?
- Could it have succeeded with US membership?
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - AMERICA 1920-1973
// ============================================================================

const AMERICA_1920_1973_KNOWLEDGE = `
## AMERICA 1920-1973: OPPORTUNITY AND INEQUALITY

### PART 1: AMERICAN PEOPLE AND THE BOOM (1920s)

**Causes of the Economic Boom:**
- **WWI Impact**: Europe in debt to USA; US industry expanded
- **Republican policies**: Laissez-faire; low taxes; high tariffs (Fordney-McCumber 1922)
- **New industries**: Cars, electrical goods, radio, cinema
- **Mass production**: Assembly line (Ford); cheaper goods
- **Hire purchase**: Buy now, pay later; increased consumer spending
- **Advertising**: $3 billion spent by 1929; created demand
- **Confidence**: Stock market speculation; belief boom would last

**The Motor Industry:**
- **Henry Ford**: Model T; assembly line production
- Ford's Highland Park plant: Car every 10 seconds
- Model T price: $850 (1908) → $295 (1925)
- By 1929: 26 million cars registered
- **Impact**: Roads, motels, suburbs, oil industry, glass, rubber industries

**Consumer Society:**
- Fridges, washing machines, vacuum cleaners, radios
- By 1929: 10 million homes had radio
- Department stores; mail order catalogues
- Living standards rose for many Americans

**Who Did NOT Benefit from the Boom:**

**Farmers:**
- Overproduction during WWI; prices collapsed after
- Wheat: $2.19/bushel (1919) → $0.38 (1929)
- 6 million rural Americans left land in 1920s
- Tariffs meant Europe couldn't buy US food

**Black Americans:**
- 1 million moved north (Great Migration) but faced discrimination
- Last hired, first fired; lowest paid jobs
- Segregation in South (Jim Crow laws)
- **KKK revival**: 5 million members by 1925

**Native Americans:**
- Poorest group; life expectancy 40 years
- Lost lands; forced onto reservations
- 1924 Indian Citizenship Act but little improvement

**Recent Immigrants:**
- Discrimination; low wages; poor housing
- **Immigration restrictions**: Quota Acts 1921, 1924 (limited "new immigrants")
- Fear of anarchists and communists (Red Scare 1919-20)

---

### PART 2: PROHIBITION AND GANGSTERS

**Prohibition (1920-1933):**
- **18th Amendment** (January 1920): Banned manufacture, sale, transport of alcohol
- **Volstead Act**: Enforcement legislation

**Reasons for Prohibition:**
- **Anti-Saloon League** and temperance movement
- Religious groups (alcohol = sin)
- WWI: Anti-German feeling (brewers were German)
- Business interests: Drunk workers less productive
- Rural vs urban divide: "Dry" rural areas vs "wet" cities

**Why Prohibition Failed:**
- **Demand remained**: People still wanted to drink
- **Speakeasies**: 30,000 in New York alone by 1930
- **Moonshine**: Illegal home-brewed alcohol; often dangerous
- **Smuggling**: From Canada and Caribbean
- **Corruption**: Police, judges, politicians bribed
- **Impossible to enforce**: Only 2,500 Prohibition agents for whole USA
- **Organised crime**: Gangsters took over alcohol trade

**Organised Crime:**
- **Al Capone** (Chicago): Made $60 million/year from alcohol
- **St Valentine's Day Massacre (1929)**: 7 rivals killed
- Gang warfare; corruption; violence
- Capone finally jailed for tax evasion (1931)

**End of Prohibition:**
- **21st Amendment (1933)**: Repealed 18th Amendment
- Depression: Government needed tax revenue
- Crime and corruption discredited Prohibition
- Roosevelt promised repeal in 1932 campaign

---

### PART 3: THE ROARING TWENTIES - SOCIAL CHANGE

**Entertainment:**
- **Jazz Age**: New Orleans to Chicago to nationwide
- **Louis Armstrong**, Duke Ellington - Black musicians
- **Harlem Renaissance**: Black cultural flowering in New York

**Cinema:**
- By 1929: 100 million cinema tickets sold weekly
- Silent films → "Talkies" (The Jazz Singer 1927)
- **Stars**: Charlie Chaplin, Rudolf Valentino, Mary Pickford
- **Hollywood**: Dream factory; glamour; escapism

**The Changing Role of Women:**

**Flappers:**
- Short hair (bobbed); short skirts; makeup
- Smoked and drank in public
- Danced (Charleston); went to jazz clubs
- More sexually liberated; challenged Victorian values

**Women's Work:**
- 10 million women in employment by 1929
- New jobs: Office work, telephone operators, teachers
- But: Lower pay than men; limited to certain jobs
- Domestic servants still largest category

**Women's Rights:**
- **19th Amendment (1920)**: Women got the vote
- But: Few women in politics; traditional attitudes persisted
- Birth control: Margaret Sanger campaigned; still controversial

**Opposition to Change:**
- Rural America vs urban America
- Religious fundamentalists opposed modern values
- **Monkey Trial (1925)**: Scopes tried for teaching evolution
- **KKK**: Against Black Americans, Jews, Catholics, immigrants

---

### PART 4: THE DEPRESSION AND NEW DEAL

**Wall Street Crash (October 1929):**

**Causes:**
- **Overproduction**: Too many goods; not enough buyers
- **Speculation**: Buying shares "on the margin" (borrowed money)
- **Unequal wealth**: 60% Americans below poverty line; couldn't buy goods
- **Weak banking**: 5,000 banks failed 1929-1932
- **European problems**: Couldn't repay debts; didn't buy US goods

**Black Thursday (24 Oct 1929)**: 13 million shares sold
**Black Tuesday (29 Oct 1929)**: 16 million shares sold; market collapsed

**Effects of the Depression:**
- Unemployment: 4% (1929) → 25% (1933) = 13 million
- Industrial production halved
- Farm income dropped 60%
- **Hoovervilles**: Shanty towns of homeless
- **Hobos**: Unemployed riding freight trains
- Soup kitchens; breadlines
- Suicide rate increased 30%

**President Hoover's Response:**
- Believed in "rugged individualism" - people should help themselves
- Believed economy would recover naturally
- **Too little, too late**:
  - Reconstruction Finance Corporation (1932): Loans to businesses
  - Emergency Relief Act: $300 million for states
- **Bonus Army (1932)**: WWI veterans demanding early payment; army used to evict them
- Hoover became hated; blamed for Depression

**1932 Election:**
- **Franklin D. Roosevelt (Democrat)** vs Hoover
- FDR promised "New Deal for the American people"
- FDR won landslide: 472 electoral votes to 59

---

### PART 5: ROOSEVELT AND THE NEW DEAL

**The First New Deal (1933-1934):**

**The Hundred Days:**
- Congress passed 15 major laws in 100 days
- **Emergency Banking Act**: Closed banks; inspected; reopened sound ones
- **Fireside Chats**: FDR explained policies on radio; built confidence

**Alphabet Agencies:**

| Agency | Purpose | Achievement |
|--------|---------|-------------|
| **CCC** (Civilian Conservation Corps) | Jobs for young men (18-25) in environment | 2.5 million employed; planted 200 million trees |
| **AAA** (Agricultural Adjustment Administration) | Paid farmers to produce less; raise prices | Farm income doubled; but sharecroppers lost out |
| **TVA** (Tennessee Valley Authority) | Built dams; provided electricity; flood control | Transformed poorest region; cheap electricity |
| **NRA** (National Recovery Administration) | Fair wages; working conditions; prices | 2 million employers signed up; boosted confidence |
| **PWA** (Public Works Administration) | Large construction projects | Built schools, hospitals, airports; created jobs |
| **FERA** (Federal Emergency Relief Administration) | $500 million for states to help unemployed | Immediate relief for millions |

**The Second New Deal (1935-1937):**

| Agency/Act | Purpose |
|------------|---------|
| **WPA** (Works Progress Administration) | Employed 8.5 million; built roads, schools, hospitals |
| **Social Security Act (1935)** | Pensions; unemployment insurance; help for disabled |
| **Wagner Act (1935)** | Right to join unions; collective bargaining |
| **Resettlement Administration** | Helped poor farmers; camps for migrants |

**Opposition to the New Deal:**

**From the Right:**
- **Republicans**: Too much government interference; socialism
- **Supreme Court**: Struck down AAA and NRA as unconstitutional
- **Liberty League**: Business leaders opposed regulations
- **Father Coughlin**: Catholic priest; anti-communist; antisemitic

**From the Left:**
- **Huey Long** ("Share Our Wealth"): Not radical enough; wanted to tax rich more
- **Dr Townsend**: Wanted $200/month pension for over-60s
- Communists and socialists: Didn't go far enough

**Court-Packing Crisis (1937):**
- FDR tried to add 6 new Supreme Court judges
- Seen as attack on democracy
- Failed but Court became more cooperative

---

### PART 6: IMPACT OF THE NEW DEAL

**Successes:**
- Unemployment fell: 25% (1933) → 14% (1937)
- Banks stabilised; confidence restored
- Millions given work and relief
- Infrastructure improved (roads, dams, schools)
- Unions strengthened; workers' rights improved
- Social Security: Foundation of welfare state

**Limitations:**
- Never ended Depression (WWII did that)
- Unemployment rose again in 1937 recession
- African Americans largely excluded from benefits
- Women still paid less; limited to certain jobs
- Farmers: AAA helped landowners, not sharecroppers

**Legacy:**
- **Changed role of federal government**: Government responsible for citizens' welfare
- **Democratic coalition**: FDR united workers, unions, minorities, South
- Democrats dominated politics until 1960s
- Foundation of modern welfare state

---

### PART 7: POST-WAR AMERICA AND CIVIL RIGHTS

**Post-War Prosperity (1945-1960):**
- **Baby Boom**: 50 million babies born 1945-1960
- **Suburbs**: Levittown; car culture; highways
- **Consumer goods**: TVs (90% of homes by 1960); fridges; cars
- **Affluent society**: Middle class grew

**McCarthyism (1950-1954):**
- **Senator Joseph McCarthy**: Claimed communists in government
- **HUAC**: House Un-American Activities Committee
- Hollywood blacklist; "Red Scare"
- Loyalty tests; fear and suspicion
- McCarthy discredited 1954 after attacking army

**Civil Rights Movement:**

**Background:**
- Jim Crow laws in South: Segregation; "separate but equal"
- Discrimination in North too: Housing, jobs
- **NAACP**: Legal challenges to segregation

**Key Events:**

| Date | Event | Significance |
|------|-------|--------------|
| 1954 | **Brown v Board of Education** | Supreme Court: School segregation unconstitutional |
| 1955-56 | **Montgomery Bus Boycott** | Rosa Parks arrested; 381-day boycott; MLK emerged as leader |
| 1957 | **Little Rock** | 9 Black students; federal troops sent to enforce desegregation |
| 1960 | **Sit-ins** | Greensboro lunch counter; spread across South |
| 1961 | **Freedom Rides** | Testing desegregation on buses; violent attacks |
| 1963 | **Birmingham** | MLK's campaign; police violence; "Letter from Birmingham Jail" |
| 1963 | **March on Washington** | 250,000 people; "I Have a Dream" speech |
| 1964 | **Civil Rights Act** | Banned discrimination in public places; employment |
| 1965 | **Selma March** | Voting rights campaign; "Bloody Sunday" |
| 1965 | **Voting Rights Act** | Federal oversight of Southern elections |
| 1968 | **MLK assassinated** | Memphis; riots in 100+ cities |

**Martin Luther King Jr:**
- Non-violent protest; civil disobedience
- Inspired by Gandhi
- "I Have a Dream" speech (1963)
- Nobel Peace Prize (1964)
- Assassinated April 1968

**Malcolm X and Black Power:**
- Nation of Islam; Black separatism
- Rejected non-violence initially
- Left Nation of Islam 1964; assassinated 1965
- **Black Power** movement: Stokely Carmichael; Black Panthers
- Pride in Black identity; self-defence

**Achievements by 1968:**
- Legal segregation ended
- Voting rights protected
- Public opinion shifted
- **But**: Economic inequality remained; de facto segregation in North; white backlash

---

### KEY STATISTICS

| Topic | Statistic |
|-------|-----------|
| Model T price drop | $850 (1908) → $295 (1925) |
| Cars registered 1929 | 26 million |
| KKK membership (peak) | 5 million (1925) |
| Speakeasies in NYC | 30,000 |
| Al Capone's income | $60 million/year |
| Unemployment 1933 | 25% (13 million) |
| Banks failed 1929-32 | 5,000+ |
| CCC employed | 2.5 million |
| March on Washington | 250,000 people |

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "The main reason for the economic boom of the 1920s was mass production." How far do you agree?
- "The New Deal was a success." How far do you agree?
- "The main reason for progress in civil rights was the work of Martin Luther King." How far do you agree?
- "Prohibition was bound to fail." How far do you agree?

**8-Mark Explain Questions:**
- Explain why there was an economic boom in the 1920s.
- Explain why Prohibition failed.
- Explain why the Depression had such a severe impact on the American people.
- Explain why the civil rights movement made progress in the years 1955-1965.

**8-Mark Write an Account Questions:**
- Write an account of how the Wall Street Crash led to the Depression.
- Write an account of how Roosevelt tackled the Depression in his first Hundred Days.
- Write an account of how the Montgomery Bus Boycott developed.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - NORMAN ENGLAND 1066-1100
// ============================================================================

const NORMAN_ENGLAND_KNOWLEDGE = `
## NORMAN ENGLAND 1066-1100 (AQA BRITISH DEPTH STUDY)

### PART 1: THE NORMANS - CONQUEST AND CONTROL

**The Claimants in 1066:**

**Harold Godwinson:**
- Earl of Wessex; most powerful noble in England
- Claimed Edward promised him throne on deathbed
- Elected by Witan (January 1066)
- English; experienced military leader
- Brother-in-law to Edward

**William of Normandy:**
- Duke of Normandy since 1035
- Claimed Edward promised him throne (1051)
- Harold allegedly swore oath to support him (1064)
- Had papal support (papal banner)
- Distant cousin to Edward

**Harald Hardrada:**
- King of Norway; experienced warrior
- Claimed through agreement between Magnus and Harthacnut
- Supported by Tostig (Harold's exiled brother)

**Edgar Atheling:**
- Great-nephew of Edward; closest blood relative
- Only 14 years old in 1066
- Lacked support and experience

---

### PART 2: THE BATTLES OF 1066

**Gate Fulford (20 September 1066):**
- Northern earls Edwin and Morcar defeated by Hardrada and Tostig
- York submitted to Vikings
- Harold had to march north

**Stamford Bridge (25 September 1066):**
- Harold marched 185 miles in 4 days
- Surprise attack on Vikings
- Hardrada and Tostig killed
- Vikings destroyed: Came in 300 ships, left in 24
- **Significance**: Ended Viking threat; but Harold's army tired

**Hastings (14 October 1066):**

**English Army:**
- ~7,000 men (housecarls + fyrd)
- Housecarls: Professional soldiers; two-handed axes
- Fyrd: Peasant militia; less well-trained
- Shield wall formation on Senlac Ridge
- **Weakness**: No cavalry; exhausted from march

**Norman Army:**
- ~7,000 men (cavalry, infantry, archers)
- Knights on horseback; charge as key tactic
- Archers to weaken enemy
- Infantry to engage
- **Advantage**: Combined arms; fresh troops

**The Battle:**
- Normans attacked uphill all day
- Shield wall held firm initially
- Feigned retreats drew English out of position
- Harold killed late in day (arrow in eye disputed)
- English army broke and fled

**Why William Won:**
- Better tactics; combined arms
- Feigned retreat tactic effective
- English tired from Stamford Bridge
- Harold's death decisive
- Luck: Wind changed allowing Channel crossing
- Papal support gave moral authority

---

### PART 3: ESTABLISHING CONTROL 1066-1087

**Submission After Hastings:**
- Edgar Atheling initially proclaimed king
- William marched on London; burnt Southwark
- English nobles submitted at Berkhamsted
- William crowned Westminster Abbey, Christmas Day 1066

**The Marcher Earldoms:**
- **Purpose**: Defend borders; control Welsh
- **Hereford, Shrewsbury, Chester**: Given to trusted Normans
- Earls had special powers: Build castles; raise armies; keep taxes

**Revolts and Resistance:**

| Date | Revolt | Response |
|------|--------|----------|
| 1067 | Exeter rebellion | William besieged city; harsh punishment |
| 1068 | Northern rebellion (Edwin & Morcar) | William built castles; bought off leaders |
| 1069 | **Harrying of the North** | Scorched earth; devastating |
| 1070 | Hereward the Wake (Ely) | Causeway built; monks betrayed him |
| 1075 | Revolt of the Earls | Easily crushed; leaders exiled/executed |

**The Harrying of the North (Winter 1069-70):**
- Response to northern rebellion and Danish invasion
- Systematic destruction: Villages burned; crops destroyed; livestock killed; tools broken
- Salting of fields to prevent regrowth
- **Death toll**: Estimates of 100,000+
- North took decades to recover
- Domesday Book (1086) recorded many northern villages as "waste"
- **Significance**: Showed Norman ruthlessness; ended major resistance

---

### PART 4: CASTLES AND CONTROL

**Types of Castle:**

**Motte and Bailey:**
- **Motte**: Artificial mound; wooden tower (keep) on top
- **Bailey**: Enclosed courtyard; buildings inside
- **Advantages**: Quick to build (weeks); used local materials
- **Disadvantages**: Wood could burn; rot; less permanent

**Stone Castles:**
- Stone keeps replaced wooden towers (from 1070s onwards)
- **Tower of London**: Started 1078; White Tower
- **Advantages**: Stronger; more permanent; impressive
- **Disadvantages**: Expensive; took years to build

**Purpose of Castles:**
- **Military**: Base for knights; control territory; refuge
- **Administrative**: Centre of local government; collecting taxes
- **Psychological**: Symbol of Norman power; intimidate population

**Key Castles Built:**
- **1066**: Pevensey, Hastings, Dover
- **1067**: London (Tower), Winchester
- **1068**: Warwick, Nottingham, York, Lincoln, Cambridge
- Over 500 castles built by 1100

---

### PART 5: THE FEUDAL SYSTEM

**How It Worked:**
| Level | Role | Obligation |
|-------|------|------------|
| **King** | Owned all land | Granted land in return for loyalty and service |
| **Tenants-in-chief** | ~200 barons + bishops | Provided knights for king's army (knight service) |
| **Under-tenants/Knights** | Held land from barons | Military service; local administration |
| **Villeins (Peasants)** | Worked the land | Labour services; could not leave manor |

**Landholding Changes:**
- By 1086: Only 2 English tenants-in-chief remained
- ~200 Norman barons held most of England
- William kept 1/5 of land for himself
- Church held 1/4 of land

**Forfeiture and Redistribution:**
- Rebels' land confiscated
- Land given to loyal Norman followers
- English gradually dispossessed
- Created new Norman aristocracy

---

### PART 6: THE CHURCH

**Changes to the Church:**

**Lanfranc (Archbishop of Canterbury 1070-1089):**
- Italian scholar; William's trusted advisor
- Replaced English bishops with Normans
- Reorganised Church hierarchy
- Canterbury's primacy over York confirmed

**Church Reforms:**
- **Separate church courts**: Canon law for clergy
- **Celibacy**: Priests forbidden to marry
- **Simony forbidden**: No buying church positions
- **Clearer organisation**: Bishops in cathedral cities

**Cathedral Building:**
- Normans rebuilt almost every cathedral
- **Romanesque style**: Round arches; thick walls; impressive scale
- Canterbury, Winchester, Durham, York rebuilt
- Symbol of Norman power and piety

**Monasteries:**
- New Norman abbots replaced English
- Strict Benedictine rule enforced
- New monasteries founded
- Wealth and land accumulated

---

### PART 7: LAW AND GOVERNMENT

**Changes to Government:**

**Central Government:**
- **Curia Regis** (King's Court): Advised king; travelled with him
- **Chancery**: Writing office; writs and documents
- **Exchequer**: Financial administration (developed under William Rufus)
- **Regents**: Ruled when William was in Normandy (often)

**Local Government:**
- **Sheriffs**: Norman replacements; collected taxes; maintained order
- **Hundreds and shires**: Anglo-Saxon system retained but Normanised
- **Baronial courts**: Lords administered justice on their estates

**Law Changes:**

**Forest Law:**
- ~30% of England became Royal Forest
- Hunting deer = severe punishment (blinding, castration)
- Peasants lost rights to gather wood, graze animals
- Very unpopular; benefited only king

**Trial by Combat:**
- Norman introduction
- Accused could fight accuser
- God would decide who was right
- Favoured strong/wealthy (could hire champions)

**Murder Fine:**
- If a Norman killed and murderer not found
- Whole hundred paid fine
- Shows Norman insecurity; protects ruling elite

**Continuity:**
- Witan → Great Council (similar advisory role)
- Shires and hundreds remained
- Anglo-Saxon laws largely continued
- Writs still used for royal commands

---

### PART 8: THE DOMESDAY BOOK (1086)

**What It Was:**
- Comprehensive survey of England
- Ordered at Christmas 1085
- Completed by August 1086
- Two volumes: Great Domesday and Little Domesday

**Why It Was Created:**
- **Taxation**: Know what England was worth
- **Land disputes**: Settle who owned what
- **Military**: Know how many knights available
- **Control**: Complete record of his kingdom

**What It Recorded:**
- Who held land in 1066 (TRE - tempore regis Edwardi)
- Who held it in 1086
- How much land (hides)
- Value of land
- Livestock, mills, fishponds
- Population (though incomplete)

**What It Shows:**
- Complete Norman takeover of land
- Systematic administration
- Nothing like it in Europe
- Still used today for some legal matters

**Nickname:**
- Called "Domesday" because its judgements were final
- Like the Last Judgement - no appeal possible

---

### KEY STATISTICS

| Topic | Statistic |
|-------|-----------|
| English tenants-in-chief by 1086 | Only 2 |
| Land held by Church | 25% |
| Castles built by 1100 | 500+ |
| Royal Forest | ~30% of England |
| Domesday places recorded | 13,418 |
| Norman cavalry at Hastings | ~2,000 |
| English dead at Hastings | ~2,000+ |

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "The main reason William won at Hastings was the superiority of his army." How far do you agree?
- "Castles were the main reason the Normans were able to keep control of England." How far do you agree?
- "The Normans changed England completely." How far do you agree?
- "The Harrying of the North was William's most effective method of control." How far do you agree?

**8-Mark Explain Questions:**
- Explain why William won the Battle of Hastings.
- Explain why William built so many castles.
- Explain the importance of the Domesday Book.
- Explain why there was resistance to Norman rule.

**8-Mark Write an Account Questions:**
- Write an account of the events of 1066 leading to William becoming king.
- Write an account of how William dealt with resistance in the North.
- Write an account of how the Normans changed the Church in England.
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - POWER AND THE PEOPLE
// ============================================================================

const POWER_PEOPLE_KNOWLEDGE = `
## POWER AND THE PEOPLE c.1170-PRESENT (AQA THEMATIC STUDY)

### PART 1: CHALLENGING ROYAL AUTHORITY (c.1170-1500)

**Thomas Becket and Henry II:**
- **Dispute**: Control over Church courts; criminous clerks
- **Constitutions of Clarendon (1164)**: Henry tried to limit Church power
- Becket opposed; exiled to France
- **1170**: Becket returned; excommunicated Henry's supporters
- **29 December 1170**: Four knights killed Becket in Canterbury Cathedral
- **Significance**: Henry did penance; Church courts remained; Becket became saint and martyr

**Magna Carta (1215):**
- **Cause**: King John's heavy taxes; loss of Normandy; conflict with Church
- **Barons rebelled**: Captured London
- **15 June 1215**: John forced to seal Magna Carta at Runnymede

**Key Clauses:**
- No taxation without consent of Great Council
- No free man imprisoned without lawful judgement
- Church freedoms protected
- Justice not to be sold or delayed

**Significance:**
- First time king's power formally limited
- Principle: King under the law
- Foundation for later parliamentary rights
- Still 3 clauses in law today

**Simon de Montfort's Parliament (1265):**
- **Cause**: Henry III's foreign favorites; heavy spending
- **1264**: De Montfort captured Henry at Battle of Lewes
- **1265 Parliament**: First to include commoners (knights and burgesses)
- De Montfort killed at Evesham (1265)
- **Significance**: Model for future parliaments; idea that taxation needs representation

**Peasants' Revolt (1381):**

**Causes:**
- **Black Death** (1348-49): Labour shortage; peasants demanded higher wages
- **Statute of Labourers (1351)**: Fixed wages at pre-plague levels
- **Poll Tax (1380-81)**: 4 pence per person (tripled); unfair on poor
- Resentment of serfdom and landlord power

**Events:**
- Rebels from Kent and Essex marched on London
- **Wat Tyler** led Kent rebels; **John Ball** preached equality
- Met Richard II at Mile End and Smithfield
- Tyler killed at Smithfield by Lord Mayor
- Richard: "I am your leader" - dispersed rebels

**Results:**
- Immediate: Promises made then broken; leaders executed
- Long-term: Poll tax abandoned; serfdom gradually died out
- **Significance**: Ordinary people challenged authority; showed potential for rebellion

---

### PART 2: CHALLENGING ROYAL AUTHORITY (c.1500-1700)

**The Pilgrimage of Grace (1536):**

**Causes:**
- **Dissolution of Monasteries**: Henry VIII closing religious houses
- Northern opposition to religious changes
- Economic fears: Monasteries provided charity, employment
- Rumours of new taxes

**Events:**
- 30,000+ rebels gathered under Robert Aske
- Called it a "pilgrimage" - religious cause
- Marched south; Henry negotiated
- Promised Parliament in York; general pardon

**Result:**
- Henry broke promises; leaders executed (1537)
- Dissolution continued
- **Significance**: Largest Tudor rebellion; showed depth of religious feeling

**The English Civil War (1642-1649):**

**Causes:**
- **Money**: Charles I's taxes without Parliament (Ship Money)
- **Religion**: Fear of Catholicism (Charles's wife); Arminian reforms
- **Power**: Charles ruled without Parliament 1629-1640
- **Scotland**: Bishops' Wars forced Charles to recall Parliament
- **Ireland**: Rebellion (1641) - who would control army?
- **Grand Remonstrance (1641)**: Parliament's list of grievances

**Key Events:**
- 1642: Charles tried to arrest 5 MPs; Civil War began
- 1644: Marston Moor - Parliamentary victory; Cromwell emerged
- 1645: New Model Army formed; Naseby - decisive victory
- 1647: Charles escaped; Second Civil War (1648)
- **30 January 1649**: Charles I executed

**Significance:**
- King executed by his own people
- England became republic (Commonwealth)
- Showed Parliament could challenge and defeat king
- Divine right of kings discredited

**The Interregnum (1649-1660):**
- Commonwealth (1649-1653): Parliament ruled
- **Levellers**: Demanded wider voting rights; equality before law
- **Diggers**: Wanted common ownership of land
- Cromwell became Lord Protector (1653-1658)
- Restoration (1660): Charles II invited back

---

### PART 3: CHALLENGING POLITICAL AUTHORITY (c.1700-1850)

**The American Revolution and Its Impact:**
- "No taxation without representation"
- Declaration of Independence (1776)
- Influenced radical thinkers in Britain
- Showed colonies could break from empire

**The French Revolution (1789):**
- Overthrow of monarchy; radical change
- **Tom Paine's "Rights of Man" (1791)**: Defended revolution; attacked monarchy
- British government feared revolution spreading
- Pitt's "Reign of Terror": Suspended habeas corpus; banned radical meetings

**The Peterloo Massacre (1819):**

**Background:**
- Post-war depression; unemployment
- Demand for parliamentary reform
- Corn Laws kept bread prices high
- Only 3% of population could vote

**Events:**
- **16 August 1819**: 60,000 gathered at St Peter's Field, Manchester
- Peaceful meeting for reform; Henry Hunt to speak
- Local magistrates panicked; sent in cavalry
- **15 killed; 400-700 injured** (including women and children)

**Significance:**
- Named "Peterloo" - ironic reference to Waterloo
- Government passed Six Acts (more repression)
- But: Public sympathy for reformers grew
- Long-term: Built momentum for reform

**The Great Reform Act (1832):**

**Causes:**
- Rotten boroughs (Old Sarum: 7 voters, 2 MPs)
- Industrial cities unrepresented (Manchester, Birmingham)
- Middle-class demand for vote
- 1830-31: Revolution in France; unrest in Britain

**What It Did:**
- Abolished 56 rotten boroughs
- 67 new seats for industrial towns
- Standardised voting qualifications
- Increased electorate from 400,000 to 650,000

**Limitations:**
- Working class still couldn't vote
- Secret ballot not introduced
- Women excluded
- Still only ~7% could vote

**The Chartists (1838-1858):**

**The Six Points:**
1. Universal male suffrage
2. Secret ballot
3. Annual parliaments
4. Equal constituencies
5. Payment for MPs
6. No property qualification for MPs

**Methods:**
- Mass meetings; petitions (1839, 1842, 1848)
- **Physical force** Chartists vs **Moral force** Chartists
- 1839 petition: 1.3 million signatures - rejected
- 1842 petition: 3 million signatures - rejected
- 1848 petition: Claimed 6 million signatures - rejected and ridiculed

**Why It Failed (Short-term):**
- Divided leadership
- Government repression
- Economic improvement (1850s)
- Petitions rejected

**Legacy:**
- 5 of 6 points eventually achieved
- Showed potential of mass politics
- Trained working-class leaders
- Influenced later movements

---

### PART 4: INDUSTRIAL PROTEST AND REFORM (c.1800-1914)

**The Tolpuddle Martyrs (1834):**
- Six agricultural labourers formed union in Dorset
- Arrested for "administering illegal oaths"
- Sentenced to 7 years transportation to Australia
- Massive protest: 800,000 signature petition
- Eventually pardoned and returned (1838)
- **Significance**: Showed government fear of unions; created martyrs for labour movement

**The Anti-Corn Law League (1839-1846):**
- Middle-class campaign against Corn Laws
- Led by **Richard Cobden** and **John Bright**
- Well-organised; mass meetings; publications
- **1846**: Peel repealed Corn Laws
- **Significance**: Showed how organized pressure groups could succeed

**Trade Unions:**
- Early unions (craft unions): Skilled workers
- **1851**: Amalgamated Society of Engineers - model union
- **1868**: TUC (Trades Union Congress) formed
- **1871**: Trade Union Act - unions legal
- **Match Girls' Strike (1888)**: Won better conditions
- **London Dock Strike (1889)**: "Dockers' Tanner" - won 6d/hour
- **"New Unionism"**: Unskilled workers organized

---

### PART 5: WOMEN'S SUFFRAGE (c.1850-1928)

**Early Campaigns:**
- **1866**: Women's suffrage petition to Parliament
- **1867**: John Stuart Mill's amendment defeated
- **1897**: NUWSS formed (National Union of Women's Suffrage Societies)
- Led by **Millicent Fawcett**
- "Suffragists": Peaceful methods; petitions; meetings; lobbying

**The Suffragettes (WSPU):**
- **1903**: Women's Social and Political Union founded
- Led by **Emmeline Pankhurst** and daughters Christabel and Sylvia
- Motto: "Deeds Not Words"
- **Militant tactics**: Window smashing; arson; hunger strikes

**Key Events:**
| Date | Event |
|------|-------|
| 1905 | Christabel Pankhurst and Annie Kenney arrested |
| 1908 | Hyde Park rally: 250,000+ people |
| 1909 | Force-feeding of hunger strikers began |
| 1910 | "Black Friday": Violent clashes with police |
| 1913 | "Cat and Mouse Act": Release and re-arrest hunger strikers |
| 1913 | Emily Davison killed at Derby (stepped in front of King's horse) |

**Did Militancy Help?:**
- **Yes**: Gained publicity; kept issue in news
- **No**: Alienated some supporters; gave excuse not to give in

**WWI and the Vote:**
- Suffragettes suspended campaign
- Women took on war work (munitions, etc.)
- Showed women could contribute to public life

**Representation of the People Act (1918):**
- Women over 30 (with property qualification) got vote
- All men over 21 got vote

**Equal Franchise Act (1928):**
- Women got vote on same terms as men (over 21)

---

### PART 6: WORKERS' RIGHTS AND PROTEST (c.1900-PRESENT)

**The General Strike (1926):**

**Causes:**
- Coal industry problems: Foreign competition; falling prices
- Mine owners wanted wage cuts and longer hours
- **"Not a penny off the pay, not a minute on the day"**
- TUC called General Strike to support miners

**Events:**
- **3-12 May 1926**: 1.7 million workers on strike
- Transport, printing, heavy industry stopped
- Government used volunteers; army; emergency powers
- TUC called off strike after 9 days

**Miners continued alone until November - defeated**

**Significance:**
- Showed limits of union power
- Trade Disputes Act (1927): General strikes banned
- But: Unions survived; gained sympathy

**The Suffragettes Renewed:**
- **1960s**: Equal pay campaigns
- **1970**: Equal Pay Act
- **1975**: Sex Discrimination Act
- Women's Liberation Movement

**Modern Protest:**
- **CND**: Campaign for Nuclear Disarmament (1958-)
- **Anti-apartheid movement** (1960s-80s)
- **Miners' Strike (1984-85)**: Thatcher vs NUM
- **Poll Tax protests (1990)**
- **Iraq War protests (2003)**: Largest UK protest ever (1 million+)

---

### KEY THEMES ACROSS THE PERIOD

| Theme | Over Time |
|-------|-----------|
| **Who has power?** | Monarch → Parliament → People (gradual) |
| **Methods of protest** | Rebellion → Petition → Mass organization → Direct action |
| **Who can vote?** | Few landowners → Property owners → All adults |
| **Rights at work** | None → Basic protections → Unions → Employment law |
| **Women's role** | No public role → Gradual inclusion → Legal equality |

---

### COMMON EXAM QUESTIONS

**16-Mark Questions:**
- "Magna Carta was the most significant development in challenging royal authority in the medieval period." How far do you agree?
- "The Chartists achieved nothing." How far do you agree?
- "The militant tactics of the suffragettes were the main reason women got the vote." How far do you agree?
- "The working class made the greatest gains in power and influence in the 20th century." How far do you agree?

**8-Mark Explain Questions:**
- Explain why the Peasants' Revolt happened.
- Explain the significance of the Peterloo Massacre.
- Explain why the Chartist movement failed to achieve its aims.
- Explain why women finally got the vote in 1918.
`;

// ============================================================================
// TOPIC KNOWLEDGE SELECTOR
// ============================================================================

function getTopicSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Germany 1890-1945
  if (topicLower.includes('germany') && (topicLower.includes('democracy') || topicLower.includes('dictatorship') || topicLower.includes('1890') || topicLower.includes('1945'))) {
    return GERMANY_1890_1945_KNOWLEDGE;
  }

  // Conflict and Tension
  if (topicLower.includes('conflict') && topicLower.includes('tension')) {
    return CONFLICT_TENSION_1919_1939_KNOWLEDGE;
  }
  if (topicLower.includes('league') || topicLower.includes('appeasement') || topicLower.includes('versailles')) {
    return CONFLICT_TENSION_1919_1939_KNOWLEDGE;
  }

  // Elizabethan England
  if (topicLower.includes('elizabethan') || topicLower.includes('elizabeth') && topicLower.includes('1558')) {
    return ELIZABETHAN_ENGLAND_KNOWLEDGE;
  }

  // Health and the People
  if (topicLower.includes('health') && topicLower.includes('people')) {
    return HEALTH_PEOPLE_KNOWLEDGE;
  }
  if (topicLower.includes('medicine') || topicLower.includes('public health')) {
    return HEALTH_PEOPLE_KNOWLEDGE;
  }

  // America 1920-1973
  if (topicLower.includes('america') && (topicLower.includes('1920') || topicLower.includes('1973') || topicLower.includes('opportunity'))) {
    return AMERICA_1920_1973_KNOWLEDGE;
  }
  if (topicLower.includes('depression') || topicLower.includes('new deal') || topicLower.includes('civil rights')) {
    return AMERICA_1920_1973_KNOWLEDGE;
  }
  if (topicLower.includes('prohibition') || topicLower.includes('roaring twenties') || topicLower.includes('wall street')) {
    return AMERICA_1920_1973_KNOWLEDGE;
  }

  // Norman England
  if (topicLower.includes('norman') && (topicLower.includes('england') || topicLower.includes('1066') || topicLower.includes('conquest'))) {
    return NORMAN_ENGLAND_KNOWLEDGE;
  }
  if (topicLower.includes('hastings') || topicLower.includes('domesday') || topicLower.includes('william') && topicLower.includes('conqueror')) {
    return NORMAN_ENGLAND_KNOWLEDGE;
  }

  // Power and the People
  if (topicLower.includes('power') && topicLower.includes('people')) {
    return POWER_PEOPLE_KNOWLEDGE;
  }
  if (topicLower.includes('magna carta') || topicLower.includes('peasants') && topicLower.includes('revolt')) {
    return POWER_PEOPLE_KNOWLEDGE;
  }
  if (topicLower.includes('chartist') || topicLower.includes('suffragette') || topicLower.includes('peterloo')) {
    return POWER_PEOPLE_KNOWLEDGE;
  }

  return '';
}

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEHistorySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  // Determine if we need source or interpretation guidance
  const needsSourceGuidance = subtopic.toLowerCase().includes('source') || difficulty === 'medium';
  const needsInterpretationGuidance = subtopic.toLowerCase().includes('interpretation');

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
    guidanceSection += `
${SOURCE_ANALYSIS_GUIDANCE}
`;
  }
  if (needsInterpretationGuidance) {
    guidanceSection += `
${INTERPRETATION_GUIDANCE}
`;
  }

  return `You are an expert AQA GCSE History examiner creating exam-style questions.

${AQA_GCSE_HIST_ASSESSMENT_OBJECTIVES}

${AQA_GCSE_HIST_QUESTION_TEMPLATES}

${AQA_GCSE_HIST_MARK_SCHEME_CONVENTIONS}
${knowledgeSection}${guidanceSection}
## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic AQA Style**: Match real AQA paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Historical Accuracy**: Use specific dates, names, statistics from the topic knowledge provided
5. **Appropriate Difficulty**:
   - Easy: Basic knowledge questions (4 marks)
   - Medium: Explain or source questions (8 marks)
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

export function getAQAGCSEHistoryQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short knowledge-based question (AO1).

**Question Types:**
- "State two [features/causes/consequences]" [4 marks]
- "Describe two [aspects/features]" [4 marks]

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create an explain or source-based question (AO1/AO2/AO3).

**Question Types:**
- "Explain why [event/development occurred]" [8 marks]
- "Write an account of [events/developments]" [8 marks]
- "How useful is Source [X] for an enquiry into...?" [8 marks]

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a 16-mark extended response requiring evaluation (AO1/AO2).

**Question Types:**
- "'[Statement]' How far do you agree?" [16 marks + 4 SPaG]
- "How far do you agree that [factor] was the main reason for [outcome]?" [16 marks + 4 SPaG]

**16-Mark Levels:**
- Level 4 (13-16): Complex explanation; sustained judgement
- Level 3 (9-12): Developed explanation; some judgement
- Level 2 (5-8): Simple explanation; implicit judgement
- Level 1 (1-4): Basic points; no judgement

Note: 16-mark questions also carry 4 SPaG marks in the real exam.

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

  return `Generate an AQA GCSE History question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}
${knowledgeContext}
**Important**: Model answers MUST include specific historical details (dates, names, statistics, events).

Return valid JSON with PROPER LEVEL DESCRIPTOR mark scheme for essays (8+ marks):
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific historical details",
  "markScheme": [
    "Level 4 (13-16 marks): Complex explanation of stated factor AND other factors. Answer demonstrates detailed, accurate knowledge. Answer is well-organised and reaches a substantiated judgement.",
    "Level 3 (9-12 marks): Developed explanation of stated factor AND other factors. Answer demonstrates accurate knowledge. Answer shows some organisation and attempts a judgement.",
    "Level 2 (5-8 marks): Simple explanation of stated factor OR other factors. Some accurate knowledge demonstrated. Limited organisation.",
    "Level 1 (1-4 marks): Basic explanation. Limited knowledge. Lacks organisation.",
    "SPaG (4 marks): Spelling, punctuation, grammar and use of specialist terminology.",
    "Indicative content:",
    "- [Factor 1]: specific evidence and explanation",
    "- [Factor 2]: specific evidence and explanation",
    "- [Factor 3]: specific evidence and explanation",
    "- Substantiated judgement weighing relative importance"
  ]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 4 };
    case 'medium':
      return { min: 8, max: 8 };
    case 'hard':
      return { min: 16, max: 16 };
  }
}
