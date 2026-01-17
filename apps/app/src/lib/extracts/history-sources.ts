/**
 * History Source Bank
 * Real and adapted historical sources for GCSE History question generation
 *
 * Sources are based on real historical documents, adapted for educational use.
 * Each source includes attribution and context appropriate for the period.
 */

export interface HistoricalSource {
  id: string;
  topic: string;                   // The historical topic this relates to
  period: string;                  // Time period
  sourceType: 'speech' | 'letter' | 'diary' | 'government_document' | 'newspaper' | 'poster' | 'photograph_description' | 'cartoon_description' | 'treaty' | 'memoir';
  title: string;                   // Brief title for the source
  content: string;                 // The source content
  attribution: string;             // Who wrote/created it and when
  provenance: string;              // Context about origin and purpose
  themes: string[];                // Topics this source relates to
  bias?: string;                   // Notes on perspective/bias for analysis
}

// ============================================
// GERMANY 1890-1945
// ============================================

export const germanyNaziSources: HistoricalSource[] = [
  {
    id: 'germany-weimar-hyperinflation',
    topic: 'Germany 1890-1945',
    period: '1923',
    sourceType: 'diary',
    title: 'Diary of a German housewife during hyperinflation',
    content: `November 1923. The nightmare continues. This morning I took my wheelbarrow to the baker filled with banknotes - three billion marks for a single loaf of bread. By the afternoon, prices had doubled again. My husband's entire monthly salary, which was paid this morning, would not buy a cup of coffee by evening. We have sold our furniture, my wedding ring, everything. People are burning money to keep warm because it is cheaper than buying firewood. My children cry from hunger while I watch lifetime savings become worthless paper. The government prints more money every day, and every day our suffering grows worse.`,
    attribution: 'Diary entry by Anna Weber, a housewife in Berlin, November 1923',
    provenance: 'Private diary, written during the hyperinflation crisis. The author was an ordinary German citizen recording daily life.',
    themes: ['Hyperinflation 1923', 'Impact of World War One on Germany', 'Economic problems', 'Weimar Constitution'],
    bias: 'Personal perspective of someone suffering directly from hyperinflation; emotional and focused on personal hardship.'
  },
  {
    id: 'germany-hitler-speech-1933',
    topic: 'Germany 1890-1945',
    period: '1933',
    sourceType: 'speech',
    title: 'Hitler\'s first radio broadcast as Chancellor',
    content: `German national comrades! Give me four years, and I swear to you, as truly as I have now undertaken this office, I will answer for it with my life. Give me four years, and I swear that those who have brought our people to this condition shall be called to account. The National Government will with iron determination and unshakeable steadfastness carry out the following plan: Within four years, the German farmer must be rescued from poverty. Within four years, unemployment must be finally overcome. The Marxist parties and their allies have had fourteen years to show what they can do. The result is a heap of ruins.`,
    attribution: 'Adolf Hitler, radio broadcast, February 1st, 1933',
    provenance: 'Public speech broadcast on German radio shortly after Hitler became Chancellor. Designed to appeal to the German public.',
    themes: ['Hitler becomes Chancellor January 1933', 'Nazi ideology', 'Growth of Nazi support 1929-1932', 'Impact of the Great Depression'],
    bias: 'Nazi propaganda; deliberately blames Weimar politicians and promises unrealistic solutions to gain support.'
  },
  {
    id: 'germany-reichstag-fire-decree',
    topic: 'Germany 1890-1945',
    period: '1933',
    sourceType: 'government_document',
    title: 'Decree for the Protection of People and State (Reichstag Fire Decree)',
    content: `Articles 114, 115, 117, 118, 123, 124 and 153 of the Constitution of the German Reich are suspended until further notice. It is therefore permissible to restrict the rights of personal freedom, freedom of opinion, including the freedom of the press, the freedom to organise and assemble, the privacy of postal, telegraphic and telephonic communications. Warrants for house searches, orders for confiscations as well as restrictions on property, are also permissible beyond the legal limits otherwise prescribed.`,
    attribution: 'Decree signed by President Hindenburg, February 28th, 1933',
    provenance: 'Official government decree issued the day after the Reichstag Fire, suspending civil liberties.',
    themes: ['Reichstag Fire February 1933', 'Nazi consolidation', 'SS and Gestapo', 'Creation of Fuhrer state'],
    bias: 'Official Nazi government document designed to legitimise the removal of civil rights.'
  },
  {
    id: 'germany-kristallnacht-report',
    topic: 'Germany 1890-1945',
    period: '1938',
    sourceType: 'newspaper',
    title: 'British newspaper report on Kristallnacht',
    content: `BERLIN, November 10th. - Throughout Germany last night, Jewish shops and synagogues were attacked and set on fire. In Berlin, Vienna, and other major cities, gangs of Nazi stormtroopers smashed windows of Jewish-owned businesses, looting goods and beating any Jews they encountered. Synagogues were burned while fire brigades stood by with orders only to prevent fires spreading to non-Jewish buildings. Conservative estimates suggest 7,500 Jewish businesses were destroyed. The streets are covered in broken glass, giving this night its terrible name - the Night of Broken Glass. The Nazi government claims this was a "spontaneous" reaction to the assassination of a German diplomat in Paris by a Jewish youth.`,
    attribution: 'The Times newspaper, London, November 11th, 1938',
    provenance: 'British newspaper report on the events of Kristallnacht, written by a foreign correspondent.',
    themes: ['Kristallnacht 1938', 'Persecution of minorities', 'Nuremberg Laws 1935', 'The Holocaust'],
    bias: 'Foreign newspaper; more critical perspective than German sources, though still uses somewhat restrained language.'
  },
  {
    id: 'germany-goebbels-propaganda',
    topic: 'Germany 1890-1945',
    period: '1934',
    sourceType: 'speech',
    title: 'Goebbels on the purpose of propaganda',
    content: `Propaganda must be so planned and so carried out that it overcomes the natural inertia of the masses. It must be simple, it must be clear, it must repeat the same message a thousand times. The ordinary man in the street does not have time to analyse and think. He needs simple slogans, simple enemies, simple solutions. Our task is not to inform but to shape opinion. The cinema, the radio, the press, the poster - all must work together to create one unified message. When we have won the hearts of the people, their minds will follow.`,
    attribution: 'Joseph Goebbels, speech to Nazi propagandists, 1934',
    provenance: 'Speech to Nazi Party members explaining propaganda methods.',
    themes: ['Propaganda and censorship', 'Goebbels and the Ministry of Propaganda', 'Nazi control of education'],
    bias: 'Direct admission of Nazi propaganda techniques; reveals intentional manipulation.'
  },
  {
    id: 'germany-youth-opposition',
    topic: 'Germany 1890-1945',
    period: '1943',
    sourceType: 'letter',
    title: 'White Rose leaflet',
    content: `Fellow students! The war is approaching its destined end. The sacrifice of lives in the east is colossal. Why do the German people behave so apathetically in the face of all these atrocities? Hardly anyone thinks about the future. Victory has been presented as certain, but the facts speak otherwise. We must recognise that Hitler and his supporters have lied to us since 1933. The German name is being dishonoured for all time if German youth does not finally rise, take revenge, and atone. Students! The German people look to us. We must overthrow this government. Freedom! Freedom!`,
    attribution: 'White Rose leaflet, Munich, February 1943',
    provenance: 'Underground resistance leaflet distributed by students Hans and Sophie Scholl at Munich University.',
    themes: ['Opposition to the Nazis', 'Youth opposition', 'Nazi control of education', 'Hitler Youth'],
    bias: 'Anti-Nazi resistance perspective; represents minority opposition within Germany.'
  },
];

// ============================================
// MEDICINE THROUGH TIME
// ============================================

export const medicineThroughTimeSources: HistoricalSource[] = [
  {
    id: 'medicine-black-death-1348',
    topic: 'Medicine Through Time',
    period: '1348',
    sourceType: 'diary',
    title: 'Account of the Black Death in England',
    content: `The pestilence seized especially the young and strong. It was common for a man to be well in the morning and dead by nightfall. The victim would develop swellings in the groin or armpit, some as large as an apple, others as an egg. These grew until they burst, and then a foul smell came forth. No physician could help. Some said it was caused by corrupt air from the south, others by the conjunction of planets, others still by God's punishment for our sins. In Bristol, the living were scarcely able to bury the dead. Whole villages stand empty. The good priest who tends the sick dies, while the coward who flees survives.`,
    attribution: 'Chronicle of a monk at Rochester Priory, 1349',
    provenance: 'Monastic chronicle recording the arrival and spread of the Black Death in England.',
    themes: ['The Black Death', 'Medieval ideas about disease', 'Role of the Church in medicine', 'Public health in medieval times'],
    bias: 'Religious perspective; interprets plague through lens of divine punishment and moral judgement.'
  },
  {
    id: 'medicine-jenner-vaccination',
    topic: 'Medicine Through Time',
    period: '1798',
    sourceType: 'memoir',
    title: 'Edward Jenner describes his vaccination experiment',
    content: `The more I investigated the subject, the more convinced I became that the cowpox protected the human constitution from the infection of smallpox. On May 14, 1796, I selected a healthy boy about eight years of age and inoculated him with matter taken from a sore on the hand of a dairymaid who had been infected by her master's cows. The boy was then affected by the cowpox in the usual manner. On July 1st I inoculated him with smallpox matter, but no disease followed. I repeated the experiment several times - the result was invariably the same.`,
    attribution: 'Edward Jenner, from "An Inquiry into the Causes and Effects of the Variolae Vaccinae", 1798',
    provenance: 'Scientific publication describing Jenner\'s vaccination experiments.',
    themes: ['Edward Jenner', 'Vaccination', 'Smallpox', 'Germ theory', 'Medical breakthroughs'],
    bias: 'Written by Jenner to promote his discovery; scientific but advocates for his method.'
  },
  {
    id: 'medicine-snow-cholera',
    topic: 'Medicine Through Time',
    period: '1854',
    sourceType: 'government_document',
    title: 'John Snow\'s cholera investigation report',
    content: `On examining the deaths which occurred in the district during the epidemic, I found that nearly all had taken place within a short distance of the Broad Street pump. In the first week of September, more than five hundred fatal cases of cholera occurred in the neighbourhood. I suspected that the water from this pump was the source of the disease. Upon investigation, I discovered that a cesspool, into which the drains of a house where a cholera patient had died were emptying, lay very close to the well. I recommended that the handle of the pump be removed, which was done on September 8th. The outbreak then began to subside.`,
    attribution: 'Dr John Snow, report to the Board of Guardians of St James\'s Parish, 1854',
    provenance: 'Official report submitted to local authorities after the Broad Street cholera outbreak.',
    themes: ['John Snow', 'Cholera epidemics', 'Public health', 'Germ theory', '19th century public health'],
    bias: 'Scientific investigation; Snow was trying to prove waterborne transmission against prevailing miasma theory.'
  },
  {
    id: 'medicine-nightingale-crimea',
    topic: 'Medicine Through Time',
    period: '1855',
    sourceType: 'letter',
    title: 'Florence Nightingale on conditions at Scutari Hospital',
    content: `The hospital is one gigantic mass of filth. The walls and floors are saturated with organic matter. I have seen the weights for weighing medicine lying in the same room as dead bodies. There are no screens or curtains. The men lie in their uniforms, stiff with blood and covered in filth, because there are no shirts, no hospital clothing. The sheets, if they can be called sheets, are canvas so coarse that the men begged to be left in their blankets. The food - when it arrives at all - is inedible. Before we arrived, the mortality rate was 42 per cent. Since we have scrubbed, washed, and imposed cleanliness, it has fallen dramatically.`,
    attribution: 'Florence Nightingale, letter to Sidney Herbert, Secretary at War, February 1855',
    provenance: 'Private letter to government minister describing conditions at the Scutari military hospital.',
    themes: ['Florence Nightingale', 'Hospitals', 'Nursing', 'Public health', 'Crimean War'],
    bias: 'Written to persuade government to improve conditions; may emphasise worst aspects.'
  },
  {
    id: 'medicine-nhs-1948',
    topic: 'Medicine Through Time',
    period: '1948',
    sourceType: 'speech',
    title: 'Aneurin Bevan announces the National Health Service',
    content: `On the fifth of July, we begin together the great national adventure. From that day onwards, every man, woman and child can rely on getting all the medical, dental and nursing care which they need, free, and without a charge for it. We have taken the hospital service out of the hands of charity and placed it in the hands of the community. The wealthy shall no longer have better medical treatment simply because they can pay for it. A comprehensive health service will secure improvement in the physical and mental health of the people and the prevention, diagnosis and treatment of illness.`,
    attribution: 'Aneurin Bevan, Minister of Health, BBC radio broadcast, July 4th, 1948',
    provenance: 'Public announcement of the NHS launch, broadcast to the nation.',
    themes: ['NHS', 'Modern medicine', 'Government and public health', 'Welfare state'],
    bias: 'Political speech promoting Labour government policy; optimistic about benefits.'
  },
  {
    id: 'medicine-medieval-treatment',
    topic: 'Medicine Through Time',
    period: '1350',
    sourceType: 'government_document',
    title: 'Medical advice from the Faculty of Medicine, Paris',
    content: `The pestilence arises from a corruption of the air, caused by the conjunction of the planets Saturn, Jupiter and Mars on March 20th, 1345. This celestial event drew up evil vapours from the earth and sea. To protect yourself: avoid bathing, as this opens the pores and allows bad air to enter. Avoid exercise which heats the body. Burn sweet-smelling herbs to purify the air. Bleeding is recommended to balance the humours. Carry a pomander of flowers and spices. Avoid looking at those who are sick, for the disease may pass through the eyes. Above all, pray to God and confess your sins, for this plague is divine punishment.`,
    attribution: 'Report of the Medical Faculty of the University of Paris, commissioned by King Philip VI of France, 1348',
    provenance: 'Official medical advice from the leading medical authority in Europe.',
    themes: ['Medieval ideas about disease', 'Theory of the Four Humours', 'Role of the Church in medicine', 'The Black Death'],
    bias: 'Reflects medieval medical understanding; based on ancient theories rather than observation.'
  },
];

// ============================================
// ELIZABETHAN ENGLAND
// ============================================

export const elizabethanSources: HistoricalSource[] = [
  {
    id: 'elizabeth-armada-speech',
    topic: 'Elizabethan England',
    period: '1588',
    sourceType: 'speech',
    title: 'Elizabeth I\'s speech to the troops at Tilbury',
    content: `My loving people, I have been persuaded by some that are careful of my safety, to take heed how I commit myself to armed multitudes, for fear of treachery; but I tell you that I would not desire to live to distrust my faithful and loving people. Let tyrants fear. I have so behaved myself that, under God, I have placed my chiefest strength and safeguard in the loyal hearts and good will of my subjects. I know I have the body of a weak and feeble woman; but I have the heart and stomach of a king, and of a king of England too, and think foul scorn that Parma or Spain, or any prince of Europe, should dare to invade the borders of my realm.`,
    attribution: 'Queen Elizabeth I, speech at Tilbury, August 9th, 1588',
    provenance: 'Speech delivered to English troops awaiting possible Spanish invasion after the Armada.',
    themes: ['Spanish Armada', 'Elizabeth I', 'Religious conflict', 'National identity'],
    bias: 'Propaganda speech designed to inspire troops and demonstrate Elizabeth\'s courage and authority.'
  },
  {
    id: 'elizabeth-catholic-persecution',
    topic: 'Elizabethan England',
    period: '1581',
    sourceType: 'letter',
    title: 'Account of the execution of Edmund Campion',
    content: `Father Campion was drawn through the streets of London on a hurdle to Tyburn, along with two other priests. At the scaffold he was asked to beg the Queen's forgiveness and reject the Pope, but he replied that he prayed for Elizabeth as his Queen and would die in the Catholic faith. The executioner placed the noose around his neck while he was still praying. He was cut down while still alive and his body was butchered before the crowd. His heart was torn out and his body quartered. This was done to a man guilty of nothing but being a Catholic priest.`,
    attribution: 'Letter from a Catholic witness, circulated secretly, December 1581',
    provenance: 'Secret Catholic correspondence describing the execution of Jesuit priest Edmund Campion.',
    themes: ['Religious conflict', 'Catholic threat', 'Persecution', 'Elizabeth\'s religious settlement'],
    bias: 'Written by a Catholic sympathiser; portrays Campion as a martyr and condemns the execution.'
  },
  {
    id: 'elizabeth-poor-law',
    topic: 'Elizabethan England',
    period: '1601',
    sourceType: 'government_document',
    title: 'The Elizabethan Poor Law',
    content: `Be it enacted that the Churchwardens of every Parish, and four substantial Householders, shall be called Overseers of the Poor. They shall set to work the children of all parents who shall not be thought able to keep them, and also all persons having no means to maintain themselves. For the deserving poor who cannot work through age or sickness, the parish shall provide necessary relief. Vagabonds and sturdy beggars who are able to work but refuse shall be whipped and sent to their place of birth. A poor rate shall be collected from every inhabitant and owner of lands.`,
    attribution: 'Act for the Relief of the Poor, passed by Parliament, 1601',
    provenance: 'Parliamentary act establishing the Elizabethan system of poor relief.',
    themes: ['Poverty and the poor laws', 'Social structure', 'Government and society', 'Crime and punishment'],
    bias: 'Official government document; distinguishes between "deserving" and "undeserving" poor.'
  },
];

// ============================================
// WORLD WAR ONE AND WEIMAR GERMANY
// ============================================

export const ww1WeimarSources: HistoricalSource[] = [
  {
    id: 'ww1-treaty-versailles',
    topic: 'Germany 1890-1945',
    period: '1919',
    sourceType: 'treaty',
    title: 'Key terms of the Treaty of Versailles',
    content: `Article 231: Germany accepts responsibility for causing all the loss and damage to which the Allied governments have been subjected as a consequence of the war imposed upon them by the aggression of Germany.
Article 232: Germany shall make compensation for all damage done to the civilian population and their property.
Article 160: The German Army must not exceed one hundred thousand men.
Article 198: The armed forces of Germany must not include any military or naval air forces.
Article 80: Germany acknowledges the independence of Austria and agrees that this independence shall be inalienable.
Article 119: Germany renounces all her overseas possessions.`,
    attribution: 'Treaty of Versailles, signed June 28th, 1919',
    provenance: 'Peace treaty ending World War One, imposed on Germany by the Allied powers.',
    themes: ['Treaty of Versailles', 'Impact of World War One on Germany', 'Weimar Republic', 'Political unrest'],
    bias: 'Document imposed by victorious Allies; Germans called it a "Diktat" (dictated peace).'
  },
  {
    id: 'weimar-spartacist',
    topic: 'Germany 1890-1945',
    period: '1919',
    sourceType: 'newspaper',
    title: 'Spartacist manifesto',
    content: `Workers! Comrades! The revolution has begun! The red flag flies over Berlin. The time has come to overthrow the capitalist government and establish a workers' council like our Russian comrades. The war has shown the bankruptcy of the ruling class. They sent millions to die while they grew rich from armaments. Now they seek to continue their exploitation under the mask of "democracy." The Ebert government betrays the workers! We demand: All power to the workers' and soldiers' councils! Disarm the counter-revolution! Nationalise industry! The revolution will not stop until capitalism is destroyed!`,
    attribution: 'Spartacist League manifesto, Die Rote Fahne (The Red Flag), January 1919',
    provenance: 'Revolutionary communist newspaper distributed during the Spartacist Rising.',
    themes: ['Spartacist Rising 1919', 'Political threats', 'German Revolution 1918', 'Weimar Constitution'],
    bias: 'Communist revolutionary perspective; calls for violent overthrow of new Weimar government.'
  },
  {
    id: 'weimar-stresemann',
    topic: 'Germany 1890-1945',
    period: '1926',
    sourceType: 'speech',
    title: 'Stresemann on Germany\'s recovery',
    content: `Germany has emerged from the darkness of 1923 into a new era of hope. Our currency is stable, our factories are working, our people are employed. Through the Dawes Plan, we have brought order to our finances. Through Locarno, we have brought peace to our borders. Today, Germany takes her rightful place among the nations as a member of the League of Nations. We do not forget the injustices of Versailles, but we choose the path of negotiation, not confrontation. Slowly, step by step, we are restoring Germany's dignity and prosperity through peaceful means.`,
    attribution: 'Gustav Stresemann, speech on Germany\'s admission to the League of Nations, September 1926',
    provenance: 'Public speech celebrating Germany\'s diplomatic achievements.',
    themes: ['Gustav Stresemann', 'Economic recovery', 'Locarno Treaties 1925', 'League of Nations membership 1926'],
    bias: 'Political speech celebrating achievements; presents optimistic view of Weimar recovery.'
  },
];

// ============================================
// COLD WAR (Superpower Relations)
// ============================================

export const coldWarSources: HistoricalSource[] = [
  {
    id: 'coldwar-truman-doctrine',
    topic: 'Cold War',
    period: '1947',
    sourceType: 'speech',
    title: 'Truman Doctrine speech to Congress',
    content: `At the present moment in world history nearly every nation must choose between alternative ways of life. One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms. I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.`,
    attribution: 'President Harry S. Truman, address to Congress, March 12th, 1947',
    provenance: 'Speech requesting $400 million in aid for Greece and Turkey to resist communist influence.',
    themes: ['Truman Doctrine', 'Origins of Cold War', 'Containment', 'USA vs USSR'],
    bias: 'American perspective presenting the conflict as democracy vs. totalitarianism; ignores US support for undemocratic regimes.'
  },
  {
    id: 'coldwar-churchill-iron-curtain',
    topic: 'Cold War',
    period: '1946',
    sourceType: 'speech',
    title: 'Churchill\'s Iron Curtain speech',
    content: `From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe. Warsaw, Berlin, Prague, Vienna, Budapest, Belgrade, Bucharest and Sofia, all these famous cities and the populations around them lie in what I must call the Soviet sphere, and all are subject in one form or another, not only to Soviet influence but to a very high and, in many cases, increasing measure of control from Moscow.`,
    attribution: 'Winston Churchill, speech at Westminster College, Fulton, Missouri, March 5th, 1946',
    provenance: 'Speech given by former British Prime Minister while visiting the United States.',
    themes: ['Iron Curtain', 'Origins of Cold War', 'Soviet expansion', 'Division of Europe'],
    bias: 'Western perspective; Churchill was warning Americans about Soviet threat to encourage alliance.'
  },
  {
    id: 'coldwar-berlin-blockade',
    topic: 'Cold War',
    period: '1948',
    sourceType: 'diary',
    title: 'Diary of a Berlin resident during the blockade',
    content: `June 1948. The Russians have cut off all road, rail and canal links to West Berlin. We are surrounded, two million of us, isolated in a sea of Soviet-controlled territory. How will we survive? There is only enough food and coal for a few weeks. Then, on June 26th, we heard the planes. American and British aircraft, flying in food, fuel, medicine - everything we need to survive. They call it an "airlift." Day and night the planes come, one every few minutes. The children run to watch them land at Tempelhof. The pilots drop sweets on tiny parachutes for them. We call them "candy bombers." We will not be starved into submission.`,
    attribution: 'Diary of Helga Müller, West Berlin resident, June-July 1948',
    provenance: 'Personal diary kept during the Berlin Blockade and Airlift.',
    themes: ['Berlin Blockade', 'Berlin Airlift', 'Division of Germany', 'Cold War crises'],
    bias: 'Personal account sympathetic to Western powers; portrays Soviets negatively.'
  },
  {
    id: 'coldwar-cuban-missile-crisis',
    topic: 'Cold War',
    period: '1962',
    sourceType: 'government_document',
    title: 'Kennedy\'s letter to Khrushchev',
    content: `Dear Mr Chairman, I have read your letter of October 26th with great care. I understand your concern about the security of Cuba and the desire to see peace maintained. If your Government would give assurances that it will not permit the use of Cuban territory for the development of offensive weapons, and would withdraw or destroy the missiles now under construction there, we, on our part, would give assurances against an invasion of Cuba. The continuation of the present course can only lead to catastrophe. I urge you to act in a manner which will enable us both to step back from this perilous course.`,
    attribution: 'President John F. Kennedy, letter to Premier Khrushchev, October 27th, 1962',
    provenance: 'Diplomatic correspondence during the Cuban Missile Crisis.',
    themes: ['Cuban Missile Crisis', 'Nuclear threat', 'Kennedy and Khrushchev', 'Cold War crises'],
    bias: 'American diplomatic document; seeks resolution while protecting US security interests.'
  },
  {
    id: 'coldwar-hungarian-uprising',
    topic: 'Cold War',
    period: '1956',
    sourceType: 'newspaper',
    title: 'Report on Soviet intervention in Hungary',
    content: `BUDAPEST, November 4th - Soviet tanks rolled into Budapest at dawn today, crushing the Hungarian uprising that had seemed, just days ago, on the verge of success. The freedom fighters who had bravely faced Soviet forces with rifles and Molotov cocktails now lie dead in the streets. Premier Imre Nagy, who had promised free elections and withdrawal from the Warsaw Pact, has been arrested. His last radio broadcast appealed desperately to the world: "This is Imre Nagy speaking. Today at dawn Soviet troops attacked our capital with the clear intention of overthrowing the legitimate democratic government. Our troops are fighting. The government is in its place." Then silence. The West watched and did nothing.`,
    attribution: 'The Times newspaper, London, November 5th, 1956',
    provenance: 'British newspaper report on the Soviet crushing of the Hungarian Uprising.',
    themes: ['Hungarian Uprising', 'Soviet control of Eastern Europe', 'Warsaw Pact', 'Cold War crises'],
    bias: 'Western newspaper; sympathetic to Hungarian rebels, critical of Soviet action and Western inaction.'
  },
  {
    id: 'coldwar-berlin-wall',
    topic: 'Cold War',
    period: '1961',
    sourceType: 'speech',
    title: 'Kennedy\'s "Ich bin ein Berliner" speech',
    content: `There are many people in the world who really don't understand, or say they don't, what is the great issue between the free world and the Communist world. Let them come to Berlin. There are some who say that Communism is the wave of the future. Let them come to Berlin. Freedom has many difficulties and democracy is not perfect, but we have never had to put a wall up to keep our people in. All free men, wherever they may live, are citizens of Berlin, and, therefore, as a free man, I take pride in the words "Ich bin ein Berliner."`,
    attribution: 'President John F. Kennedy, speech in West Berlin, June 26th, 1963',
    provenance: 'Public speech delivered in front of the Berlin Wall to a crowd of 450,000.',
    themes: ['Berlin Wall', 'Division of Berlin', 'Kennedy', 'Cold War symbolism'],
    bias: 'American propaganda; powerful rhetoric designed to boost Western morale and criticise Soviet system.'
  },
];

// ============================================
// NORMAN CONQUEST
// ============================================

export const normanConquestSources: HistoricalSource[] = [
  {
    id: 'norman-hastings-chronicle',
    topic: 'Norman England',
    period: '1066',
    sourceType: 'diary',
    title: 'Anglo-Saxon Chronicle account of Hastings',
    content: `Then Count William came from Normandy to Pevensey on Michaelmas Eve, and as soon as they were able to move on they built a castle at Hastings. King Harold was informed of this and gathered a great army and came against him at the hoary apple-tree. And William came against him by surprise before his army was ready. But the king nevertheless fought hard against him, with the men who were willing to support him, and there were heavy casualties on both sides. King Harold was killed, and Earl Leofwine his brother, and Earl Gyrth his brother, and many good men, and the French had possession of the field.`,
    attribution: 'Anglo-Saxon Chronicle, entry for 1066',
    provenance: 'Contemporary English chronicle recording major events; written at various monasteries.',
    themes: ['Battle of Hastings', 'Norman Conquest', 'Harold Godwinson', 'William the Conqueror'],
    bias: 'English perspective; brief and factual but written under Norman rule, so may be cautious in criticism.'
  },
  {
    id: 'norman-bayeux-tapestry',
    topic: 'Norman England',
    period: '1070s',
    sourceType: 'cartoon_description',
    title: 'Scene from the Bayeux Tapestry showing Harold\'s oath',
    content: `The tapestry shows Harold standing before Duke William in Normandy. Harold's hands rest upon two reliquaries containing sacred relics. William sits enthroned, pointing at Harold. The Latin inscription above reads "UBI HAROLD SACRAMENTUM FECIT WILLELMO DUCI" - "Where Harold made an oath to Duke William." Harold appears to be swearing loyalty to William, promising to support his claim to the English throne. This scene was crucial to Norman propaganda, as it showed that Harold had broken a sacred oath when he took the crown himself.`,
    attribution: 'Description of scene from the Bayeux Tapestry, commissioned c.1070s',
    provenance: 'Embroidered cloth depicting events leading to the Norman Conquest, probably commissioned by Bishop Odo.',
    themes: ['Norman claim to throne', 'Harold\'s oath', 'William\'s invasion', 'Medieval propaganda'],
    bias: 'Norman propaganda; designed to justify William\'s invasion by showing Harold as an oath-breaker.'
  },
  {
    id: 'norman-domesday-extract',
    topic: 'Norman England',
    period: '1086',
    sourceType: 'government_document',
    title: 'Entry from the Domesday Book',
    content: `In OXFORD King Edward held 3 hides. There were 30 houses paying dues, and 478 houses which paid nothing because of their poverty. Now there are 243 houses paying dues, and 478 still as before pay nothing. The King has 20 houses waste. Earl Aubrey had 22 houses waste. There is land for 16 ploughs. Now the burgesses have 8 ploughs. Before 1066 there were 721 houses; now there are but 478 paying dues, and 243 not paying because of their poverty. The value was £60; now £30.`,
    attribution: 'Domesday Book, entry for Oxford, 1086',
    provenance: 'Great survey of England ordered by William I to record landholding and resources.',
    themes: ['Domesday Book', 'Norman control', 'Economic impact', 'Norman administration'],
    bias: 'Official royal record; shows decline in prosperity but matter-of-fact, not criticising Norman rule.'
  },
  {
    id: 'norman-harrying-north',
    topic: 'Norman England',
    period: '1070',
    sourceType: 'diary',
    title: 'Chronicle account of the Harrying of the North',
    content: `The King led his army to York, and ravaged all the shire. It was grievous to see the distress of so many wretched people. Houses, grain, livestock, all were destroyed. Men and women died of hunger in thousands. The land between York and Durham lay waste, without inhabitants or cultivation, for nine years after. Even those who had escaped the sword perished from famine. So great was the slaughter that a man could walk for days without seeing a living soul. The bodies of the dead lay rotting in the streets and fields, for there was no one left to bury them.`,
    attribution: 'Orderic Vitalis, chronicle account, written c.1130',
    provenance: 'Chronicle written by Anglo-Norman monk about sixty years after the events.',
    themes: ['Harrying of the North', 'Norman control', 'Resistance to Normans', 'William\'s brutality'],
    bias: 'Written by Norman monk but still critical of the destruction; may exaggerate for moral condemnation.'
  },
  {
    id: 'norman-feudal-system',
    topic: 'Norman England',
    period: '1086',
    sourceType: 'government_document',
    title: 'Record of feudal obligations',
    content: `Know that I, Robert de Beaumont, hold the manor of Warwick from the King. For this land I owe the King the service of ten knights, fully armed, for forty days each year when summoned. I have granted portions of my land to my own followers, who in turn owe me knight service. Each man owes loyalty to his lord, who owes loyalty to his lord above, up to the King who holds all from God. When I die, my heir must pay relief to continue holding the land. If I betray my oath, I forfeit my lands. My villagers work my fields, pay rent, and cannot leave without permission.`,
    attribution: 'Summary based on feudal records, c.1086',
    provenance: 'Typical record of feudal landholding and obligations under the Norman system.',
    themes: ['Feudal system', 'Norman landholding', 'Knight service', 'Norman administration'],
    bias: 'Administrative document; presents feudal system as normal and legitimate.'
  },
  {
    id: 'norman-castle-building',
    topic: 'Norman England',
    period: '1068',
    sourceType: 'diary',
    title: 'Chronicle account of Norman castle building',
    content: `Wherever the Normans went, they built castles. At first these were simple motte and bailey constructions - a great mound of earth with a wooden tower on top, surrounded by an enclosure with a ditch and palisade. English labourers were forced to dig and build, while Norman soldiers watched over them. From these castles, the Normans could control the surrounding countryside. Anyone who resisted could be attacked by mounted knights who rode out from the castle. The English had never seen such fortifications and had no way to capture them. In this way, a few thousand Normans came to dominate millions of English.`,
    attribution: 'Summary based on Orderic Vitalis and Anglo-Saxon Chronicle accounts',
    provenance: 'Composite account describing Norman castle-building strategy.',
    themes: ['Norman castles', 'Norman control', 'Motte and bailey', 'Conquest methods'],
    bias: 'Chronicles were written under Norman rule; descriptions are factual but context affects emphasis.'
  },
];

// ============================================
// AMERICA (CIVIL RIGHTS)
// ============================================

export const americaCivilRightsSources: HistoricalSource[] = [
  {
    id: 'america-mlk-dream',
    topic: 'America 1920-1973',
    period: '1963',
    sourceType: 'speech',
    title: 'Martin Luther King Jr.\'s "I Have a Dream" speech',
    content: `I have a dream that one day this nation will rise up and live out the true meaning of its creed: "We hold these truths to be self-evident, that all men are created equal." I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood. I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. I have a dream today!`,
    attribution: 'Martin Luther King Jr., March on Washington, August 28th, 1963',
    provenance: 'Speech delivered to 250,000 civil rights supporters at the Lincoln Memorial.',
    themes: ['Civil Rights Movement', 'Martin Luther King', 'Non-violent protest', 'March on Washington'],
    bias: 'Civil rights perspective; powerful rhetoric designed to inspire change and appeal to American values.'
  },
  {
    id: 'america-montgomery-bus',
    topic: 'America 1920-1973',
    period: '1955',
    sourceType: 'newspaper',
    title: 'Newspaper report on Montgomery Bus Boycott',
    content: `MONTGOMERY, Alabama - For over a month now, the city's buses have run nearly empty as the Negro population refuses to ride. The boycott began on December 5th, the day after Mrs Rosa Parks was arrested for refusing to give up her seat to a white passenger. A young Baptist minister, Dr Martin Luther King Jr., has emerged as leader of the protest. Despite harassment, arrests, and the bombing of Dr King's home, the boycott continues. Negro citizens walk miles to work or organise car pools. The bus company reports a 65% drop in revenue. "We will not ride until segregation on buses is ended," declared Dr King.`,
    attribution: 'The New York Times, January 1956',
    provenance: 'Northern newspaper report on the Montgomery Bus Boycott.',
    themes: ['Montgomery Bus Boycott', 'Rosa Parks', 'Martin Luther King', 'Non-violent protest'],
    bias: 'Northern newspaper; generally sympathetic to civil rights movement.'
  },
  {
    id: 'america-little-rock',
    topic: 'America 1920-1973',
    period: '1957',
    sourceType: 'diary',
    title: 'Account of Little Rock school integration',
    content: `September 4th, 1957. Elizabeth Eckford, fifteen years old, walked alone toward Central High School. She hadn't received the message to meet with the other eight Negro students. As she approached, a mob of white protesters surrounded her, screaming abuse. "Lynch her! Lynch her!" they shouted. The Arkansas National Guard, placed there by Governor Faubus, blocked her entry. A white woman spat in her face. She kept walking, trying to find a bus stop, her face expressionless though tears streamed down her cheeks. A white woman finally helped her onto a bus. It took three weeks and federal troops before the nine students could enter the school.`,
    attribution: 'Contemporary account based on newspaper reports and witness testimony',
    provenance: 'Composite account of events during the Little Rock Crisis.',
    themes: ['Little Rock', 'School desegregation', 'Federal intervention', 'Opposition to civil rights'],
    bias: 'Sympathetic to the students; highlights the violence of segregationist opposition.'
  },
  {
    id: 'america-jim-crow-law',
    topic: 'America 1920-1973',
    period: '1890s-1960s',
    sourceType: 'government_document',
    title: 'Examples of Jim Crow segregation laws',
    content: `State of Alabama: It shall be unlawful for a negro and white person to play together or in company with each other at any game of pool or billiards.
State of Georgia: No colored barber shall serve as a barber to white women or girls.
State of Louisiana: All circuses, shows, and tent exhibitions shall provide separate entrances for the white and colored races.
State of Mississippi: The marriage of a white person with a negro or mulatto, or person who shall have one-eighth or more of negro blood, shall be unlawful and void.
State of North Carolina: Books shall not be interchangeable between the white and colored schools.`,
    attribution: 'Collection of Jim Crow laws from various Southern states, 1890s-1960s',
    provenance: 'Official state laws mandating racial segregation.',
    themes: ['Jim Crow laws', 'Segregation', 'Legal discrimination', 'South before civil rights'],
    bias: 'Official laws; show the extent and detail of legally enforced segregation.'
  },
  {
    id: 'america-civil-rights-act',
    topic: 'America 1920-1973',
    period: '1964',
    sourceType: 'government_document',
    title: 'Civil Rights Act of 1964',
    content: `Title II: All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, and privileges of any place of public accommodation without discrimination on the ground of race, color, religion, or national origin.
Title VII: It shall be an unlawful employment practice for an employer to fail or refuse to hire or to discharge any individual because of such individual's race, color, religion, sex, or national origin.
No person shall be subjected to discrimination under any program receiving Federal financial assistance.`,
    attribution: 'Civil Rights Act, signed by President Lyndon B. Johnson, July 2nd, 1964',
    provenance: 'Federal law prohibiting discrimination in public accommodations and employment.',
    themes: ['Civil Rights Act', 'End of legal segregation', 'Federal legislation', 'Johnson administration'],
    bias: 'Federal government document; landmark legislation ending legal discrimination.'
  },
  {
    id: 'america-malcolm-x',
    topic: 'America 1920-1973',
    period: '1964',
    sourceType: 'speech',
    title: 'Malcolm X on the ballot or the bullet',
    content: `It's time for you and me to stop sitting in this country, letting some cracker senators and congressmen and presidents tell us it's time to be patient. We've been patient for four hundred years. It'll be the ballot or the bullet. If the black man in these Southern states had his full voting rights, the key Dixiecrats in Washington would lose their seats. When you take into consideration that the voting strength of our people in these areas where they're denied the right to vote, it's enough to put every one of them out of office. It's the ballot or the bullet.`,
    attribution: 'Malcolm X, speech in Cleveland, Ohio, April 3rd, 1964',
    provenance: 'Speech calling for black political power and self-defense.',
    themes: ['Malcolm X', 'Black Power', 'Voting rights', 'Militant civil rights'],
    bias: 'More radical civil rights perspective; critical of non-violent approach and white power structures.'
  },
];

// ============================================
// RUSSIA (REVOLUTION AND SOVIET)
// ============================================

export const russiaRevolutionSources: HistoricalSource[] = [
  {
    id: 'russia-bloody-sunday',
    topic: 'Russia 1894-1945',
    period: '1905',
    sourceType: 'diary',
    title: 'Account of Bloody Sunday',
    content: `January 22nd, 1905. We marched peacefully to the Winter Palace, carrying icons and portraits of the Tsar. Father Gapon led us. We wanted only to present a petition - better working conditions, an eight-hour day, a minimum wage. We believed the Tsar, our "Little Father," would hear us. Then the soldiers opened fire. People fell around me. Women, children, cut down by bullets. The snow turned red with blood. Over a thousand killed, they say. I escaped, but my faith in the Tsar died that day. He had ordered his soldiers to fire on his own people. He is not our father. He is a murderer.`,
    attribution: 'Diary of a Petersburg factory worker, January 1905',
    provenance: 'Personal account of the Bloody Sunday massacre.',
    themes: ['Bloody Sunday 1905', '1905 Revolution', 'Tsar Nicholas II', 'Opposition to Tsarism'],
    bias: 'Worker\'s perspective; emotionally charged, turning point in faith in the Tsar.'
  },
  {
    id: 'russia-lenin-april-theses',
    topic: 'Russia 1894-1945',
    period: '1917',
    sourceType: 'speech',
    title: 'Lenin\'s April Theses',
    content: `The specific feature of the present situation in Russia is that the country is passing from the first stage of the revolution — which gave power to the bourgeoisie — to its second stage, which must place power in the hands of the proletariat and the poorest sections of the peasants. Not a parliamentary republic, but a republic of Soviets of Workers', Agricultural Labourers' and Peasants' Deputies throughout the country. Abolition of the police, the army and the bureaucracy. All land to be nationalised and distributed by the local Soviets. No support for the Provisional Government! All power to the Soviets!`,
    attribution: 'Vladimir Lenin, April Theses, published in Pravda, April 7th, 1917',
    provenance: 'Political programme presented by Lenin after returning from exile.',
    themes: ['October Revolution', 'Lenin', 'Bolsheviks', 'Provisional Government'],
    bias: 'Bolshevik revolutionary perspective; radical programme for overthrowing Provisional Government.'
  },
  {
    id: 'russia-storming-winter-palace',
    topic: 'Russia 1894-1945',
    period: '1917',
    sourceType: 'memoir',
    title: 'Account of storming the Winter Palace',
    content: `October 25th, 1917. We surrounded the Winter Palace. The cruiser Aurora fired a blank shell as our signal. The Women's Battalion defending the palace surrendered quickly. We entered through a back door someone had left open. The palace was enormous - we got lost looking for the Provisional Government. Finally we found them in a small room, pale and frightened. Antonov-Ovseyenko announced: "In the name of the Military Revolutionary Committee, I declare you under arrest." It was strangely anticlimactic. The great October Revolution was won almost without bloodshed. But the real struggle was only beginning.`,
    attribution: 'Memoir of a Red Guard participant, written in the 1920s',
    provenance: 'Eyewitness account of the Bolshevik seizure of power.',
    themes: ['October Revolution', 'Bolshevik takeover', 'Winter Palace', 'Lenin'],
    bias: 'Bolshevik perspective; written later under Soviet rule, may emphasize heroic narrative.'
  },
  {
    id: 'russia-collectivisation',
    topic: 'Russia 1894-1945',
    period: '1930',
    sourceType: 'speech',
    title: 'Stalin on liquidating the kulaks',
    content: `Now we are able to carry on a determined offensive against the kulaks, break their resistance, eliminate them as a class and replace their production with the production of kolkhozes and sovkhozes. The kulaks are being expropriated. We have gone over from a policy of restricting the exploiting tendencies of the kulak to a policy of liquidating the kulak as a class. The expropriation of the kulaks is an integral part of the formation and development of the collective farms. That is why it is ridiculous to bewail the de-kulakisation.`,
    attribution: 'Joseph Stalin, speech to Communist Party officials, January 1930',
    provenance: 'Speech justifying the forced collectivisation of agriculture.',
    themes: ['Collectivisation', 'Stalin', 'Kulaks', 'Five Year Plans'],
    bias: 'Soviet propaganda; dehumanises kulaks to justify violent dispossession.'
  },
  {
    id: 'russia-gulag-account',
    topic: 'Russia 1894-1945',
    period: '1937',
    sourceType: 'memoir',
    title: 'Account of arrest during the Great Purge',
    content: `They came for my husband at 3 a.m., as they always did. Four NKVD men in leather coats. They searched our apartment for three hours, taking his books and papers. He kissed me goodbye, promising to return soon - it must be a mistake, he said. That was the last I saw of him. I spent months in queues outside the prison, trying to learn his fate. Finally, a guard whispered: "Ten years in the camps, no right of correspondence." I later learned this meant he had been shot. Millions of us lost husbands, wives, children. We learned not to speak of it. Fear ruled everything.`,
    attribution: 'Memoir of a woman whose husband was arrested during the Purges, written after Stalin\'s death',
    provenance: 'Personal testimony from the Great Terror period.',
    themes: ['Great Purge', 'Stalin\'s terror', 'NKVD', 'Gulag'],
    bias: 'Victim\'s perspective; could not be published under Stalin; written from memory after many years.'
  },
  {
    id: 'russia-show-trials',
    topic: 'Russia 1894-1945',
    period: '1936',
    sourceType: 'newspaper',
    title: 'Pravda report on the show trials',
    content: `The Military Collegium of the Supreme Court yesterday heard the confessions of the Trotskyite-Zinovievite terrorist centre. The accused confessed to forming a terrorist organisation under the direction of the fascist Trotsky, aimed at the assassination of Comrade Stalin and other leaders of the Soviet state. Zinoviev stated: "I am guilty of having been the organizer of the plot the purpose of which was the assassination of the leaders of the Party and Government." All sixteen defendants confessed fully to their monstrous crimes against the Soviet people. They will receive the punishment they deserve.`,
    attribution: 'Pravda, official Soviet newspaper, August 1936',
    provenance: 'Official Soviet newspaper reporting on the first Moscow Show Trial.',
    themes: ['Show trials', 'Great Purge', 'Stalin', 'Soviet propaganda'],
    bias: 'Pure propaganda; confessions were extracted through torture; describes fabricated crimes.'
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all sources for a specific topic
 */
export function getSourcesForTopic(topicName: string): HistoricalSource[] {
  const normalizedTopic = topicName.toLowerCase();
  let sources: HistoricalSource[] = [];

  if (normalizedTopic.includes('germany') || normalizedTopic.includes('nazi') || normalizedTopic.includes('weimar') || normalizedTopic.includes('hitler')) {
    sources = [...sources, ...germanyNaziSources, ...ww1WeimarSources];
  }
  if (normalizedTopic.includes('medicine') || normalizedTopic.includes('health') || normalizedTopic.includes('disease')) {
    sources = [...sources, ...medicineThroughTimeSources];
  }
  if (normalizedTopic.includes('elizabeth') || normalizedTopic.includes('tudor')) {
    sources = [...sources, ...elizabethanSources];
  }
  if (normalizedTopic.includes('cold war') || normalizedTopic.includes('superpower') || normalizedTopic.includes('usa') || normalizedTopic.includes('ussr')) {
    sources = [...sources, ...coldWarSources];
  }
  if (normalizedTopic.includes('norman') || normalizedTopic.includes('conquest') || normalizedTopic.includes('1066') || normalizedTopic.includes('william')) {
    sources = [...sources, ...normanConquestSources];
  }
  if (normalizedTopic.includes('america') || normalizedTopic.includes('civil rights') || normalizedTopic.includes('usa') || normalizedTopic.includes('1920')) {
    sources = [...sources, ...americaCivilRightsSources];
  }
  if (normalizedTopic.includes('russia') || normalizedTopic.includes('soviet') || normalizedTopic.includes('stalin') || normalizedTopic.includes('lenin') || normalizedTopic.includes('tsar')) {
    sources = [...sources, ...russiaRevolutionSources];
  }

  return sources;
}

/**
 * Find sources relevant to a specific theme/subtopic
 */
export function findSourcesForTheme(topicName: string, theme: string): HistoricalSource[] {
  const sources = getSourcesForTopic(topicName);
  const normalizedTheme = theme.toLowerCase();

  return sources.filter(source =>
    source.themes.some(t => t.toLowerCase().includes(normalizedTheme) || normalizedTheme.includes(t.toLowerCase())) ||
    source.content.toLowerCase().includes(normalizedTheme) ||
    source.title.toLowerCase().includes(normalizedTheme)
  );
}

/**
 * Get a random source for a topic and theme
 */
export function getRandomSourceForTheme(topicName: string, theme: string): HistoricalSource | null {
  const relevantSources = findSourcesForTheme(topicName, theme);

  if (relevantSources.length === 0) {
    // Fall back to any source from that topic
    const allSources = getSourcesForTopic(topicName);
    if (allSources.length === 0) return null;
    return allSources[Math.floor(Math.random() * allSources.length)];
  }

  return relevantSources[Math.floor(Math.random() * relevantSources.length)];
}

/**
 * Get all available historical periods
 */
export function getAvailableHistoryTopics(): string[] {
  return [
    'Germany 1890-1945',
    'Medicine Through Time',
    'Elizabethan England',
    'Cold War / Superpower Relations',
    'Norman England 1066-1100',
    'America 1920-1973 (Civil Rights)',
    'Russia 1894-1945'
  ];
}

// Export all sources
export const allHistorySources: HistoricalSource[] = [
  ...germanyNaziSources,
  ...medicineThroughTimeSources,
  ...elizabethanSources,
  ...ww1WeimarSources,
  ...coldWarSources,
  ...normanConquestSources,
  ...americaCivilRightsSources,
  ...russiaRevolutionSources
];
