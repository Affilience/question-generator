// OCR A-Level History A (H505) Topics
// Based on official OCR specification
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/history-a-h105-h505-from-2015/

import { Topic } from '@/types';

export const ocrALevelHistoryTopics: Topic[] = [
  // ============================================================================
  // UNIT GROUP 1: BRITISH PERIOD STUDY AND ENQUIRY
  // Most popular options
  // ============================================================================
  {
    id: 'ocr-alevel-hist-tudors-1485-1558',
    name: 'Y106: England 1485-1558: The Early Tudors',
    description: 'Tudor England from Henry VII to Mary I',
    icon: '👑',
    color: 'bg-amber-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 1',
    subtopics: [
      // Period Study
      // Henry VII
      'Henry VII\'s claim',
      'Consolidation of power',
      'Yorkist threats',
      'Lambert Simnel',
      'Perkin Warbeck',
      'Government',
      'Financial policy',
      'Foreign policy',
      'The Church',
      // Henry VIII
      'Character of Henry VIII',
      'Wolsey\'s ministry',
      'Domestic policies',
      'Foreign policy',
      'Fall of Wolsey',
      'King\'s Great Matter',
      'Break with Rome',
      'Royal Supremacy',
      'Cromwell\'s ministry',
      'Dissolution of monasteries',
      'Pilgrimage of Grace',
      'Later years',
      // Edward VI
      'Minority government',
      'Somerset Protectorate',
      'Religious changes',
      'Rebellions 1549',
      'Northumberland',
      'Succession crisis',
      // Mary I
      'Mary\'s accession',
      'Wyatt\'s Rebellion',
      'Religious restoration',
      'Spanish marriage',
      'Persecution',
      'Loss of Calais',
      // Enquiry Topic: Mid-Tudor Crises 1547-1558
      'Political instability',
      'Religious changes',
      'Social and economic problems',
      'Foreign policy',
      'Mid-Tudor crisis debate',
      // Primary sources
      'State papers',
      'Contemporary accounts',
      'Official documents',
    ],
  },
  {
    id: 'ocr-alevel-hist-later-tudors',
    name: 'Y107: England 1547-1603: The Later Tudors',
    description: 'England from Edward VI to Elizabeth I',
    icon: '⚜️',
    color: 'bg-purple-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 1',
    subtopics: [
      // Period Study
      // Edward VI
      'Somerset\'s government',
      'Religious policy',
      'Social policy',
      'Rebellions',
      'Northumberland',
      // Mary I
      'Accession',
      'Counter-Reformation',
      'Foreign relations',
      'Succession',
      // Elizabeth I
      'Early challenges',
      'Religious Settlement',
      'Catholic threats',
      'Mary Queen of Scots',
      'Northern Rebellion',
      'Plots',
      'Puritan challenge',
      'Government',
      'Parliament',
      'Privy Council',
      'Faction',
      'War with Spain',
      'Armada',
      'Ireland',
      'Economic policy',
      'Poor relief',
      'Essex Rebellion',
      'Succession',
      // Enquiry Topic
      'Elizabeth\'s government',
      'Source analysis',
      // Primary sources
      'Parliamentary records',
      'State papers',
      'Contemporary chronicles',
    ],
  },
  {
    id: 'ocr-alevel-hist-early-stuarts',
    name: 'Y108: The Early Stuarts and the Origins of the Civil War 1603-1660',
    description: 'England from James I to the Restoration',
    icon: '⚔️',
    color: 'bg-red-800',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 1',
    subtopics: [
      // Period Study
      // James I
      'Union of Crowns',
      'James\'s government',
      'Finance',
      'Parliament',
      'Religion',
      'Foreign policy',
      'Buckingham',
      // Charles I
      'Early reign',
      'Parliament 1625-29',
      'Personal Rule',
      'Financial expedients',
      'Religious policy',
      'Scottish Crisis',
      'Long Parliament',
      // Civil War
      'Breakdown',
      'Sides and allegiances',
      'Military campaigns',
      'Parliament and Army',
      'Regicide',
      // Interregnum
      'Rump Parliament',
      'Commonwealth',
      'Cromwellian Protectorate',
      'Religious settlement',
      'Foreign policy',
      'Collapse of Protectorate',
      // Enquiry Topic
      'Causes of Civil War',
      'Revisionist debates',
      // Primary sources
      'Parliamentary debates',
      'Pamphlets',
      'Personal papers',
    ],
  },
  {
    id: 'ocr-alevel-hist-britain-1900-1951',
    name: 'Y112: Britain 1900-1951',
    description: 'Britain from Edwardian era to Attlee',
    icon: '🇬🇧',
    color: 'bg-blue-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 1',
    subtopics: [
      // Period Study
      // Edwardian Britain
      'Social conditions',
      'Liberal reforms',
      'Constitutional crisis',
      'Irish Question',
      'Women\'s suffrage',
      // WWI
      'Home Front',
      'Political change',
      'Social impact',
      // Inter-war
      'Post-war problems',
      'Labour rise',
      'General Strike',
      'Depression',
      'National Government',
      'Appeasement',
      // WWII
      'Churchill',
      'Home Front WWII',
      'Beveridge',
      // Attlee government
      '1945 election',
      'Welfare State',
      'NHS',
      'Nationalisation',
      'Foreign policy',
      // Enquiry Topic
      'Churchill 1929-1951',
      'Wilderness years',
      'War leadership',
      '1945 defeat',
      // Primary sources
      'Political speeches',
      'Government papers',
      'Personal memoirs',
    ],
  },
  {
    id: 'ocr-alevel-hist-britain-1930-1997',
    name: 'Y113: Britain 1930-1997',
    description: 'Britain from Depression to Blair',
    icon: '🏛️',
    color: 'bg-slate-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 1',
    subtopics: [
      // Period Study
      // 1930s
      'Depression impact',
      'National Government',
      'Recovery',
      'Appeasement',
      // WWII and after
      'Churchill\'s war',
      'Attlee government',
      'Welfare State',
      // Post-war
      'Consensus politics',
      'Churchill return',
      'Eden and Suez',
      'Macmillan',
      'Wilson',
      'Heath',
      'Thatcher',
      'Major',
      'Blair',
      // Themes
      'Economic policy',
      'Social change',
      'Britain\'s world role',
      // Enquiry Topic
      'Churchill 1930-1951',
      // Primary sources
      'Political memoirs',
      'Parliamentary records',
      'Media sources',
    ],
  },
  // ============================================================================
  // UNIT GROUP 2: NON-BRITISH PERIOD STUDY
  // Most popular options
  // ============================================================================
  {
    id: 'ocr-alevel-hist-germany-1919-1963',
    name: 'Y221: Democracy and Dictatorships in Germany 1919-1963',
    description: 'Germany from Weimar to divided nation',
    icon: '🇩🇪',
    color: 'bg-gray-800',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 2',
    subtopics: [
      // Weimar Republic
      'Revolution 1918-19',
      'Weimar Constitution',
      'Early challenges',
      'Treaty of Versailles',
      'Hyperinflation',
      'Stresemann era',
      'Golden years',
      'Culture',
      'Depression impact',
      // Nazi rise
      'Nazi Party',
      'Hitler',
      'Electoral success',
      'Hitler as Chancellor',
      // Nazi Germany
      'Consolidation',
      'Enabling Act',
      'Night of Long Knives',
      'Fuhrer state',
      'Terror',
      'Economy',
      'Society',
      'Persecution',
      'Foreign policy',
      'WWII',
      'Holocaust',
      'Resistance',
      // Divided Germany
      'Occupation',
      'Division',
      'Federal Republic',
      'Adenauer',
      'GDR',
      'Berlin Wall',
      // Primary sources
      'Nazi documents',
      'Testimonies',
      'Statistics',
    ],
  },
  {
    id: 'ocr-alevel-hist-russia-1894-1941',
    name: 'Y219: Russia 1894-1941',
    description: 'Russia from Nicholas II to WWII',
    icon: '🇷🇺',
    color: 'bg-red-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 2',
    subtopics: [
      // Tsarist Russia
      'Nicholas II',
      'Opposition',
      '1905 Revolution',
      'October Manifesto',
      'Stolypin',
      'WWI impact',
      // Revolution
      'February Revolution',
      'Provisional Government',
      'Bolshevik takeover',
      // Civil War
      'Consolidation',
      'Civil War',
      'War Communism',
      'Terror',
      // Lenin\'s Russia
      'NEP',
      'Party structure',
      'Death of Lenin',
      'Power struggle',
      // Stalin\'s Russia
      'Rise of Stalin',
      'Five Year Plans',
      'Collectivisation',
      'Terror',
      'Show trials',
      'Cult of personality',
      'Foreign policy',
      'Nazi-Soviet Pact',
      // Primary sources
      'Party documents',
      'Personal accounts',
      'Statistical evidence',
    ],
  },
  {
    id: 'ocr-alevel-hist-cold-war-europe',
    name: 'Y223: The Cold War in Europe 1941-1995',
    description: 'Cold War from origins to end',
    icon: '❄️',
    color: 'bg-cyan-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 2',
    subtopics: [
      // Origins
      'Wartime alliance',
      'Conferences',
      'Soviet expansion',
      'Iron Curtain',
      'Truman Doctrine',
      'Marshall Plan',
      'Berlin Blockade',
      'NATO',
      // Early Cold War
      'Division of Germany',
      'Korean War impact',
      'Death of Stalin',
      'Hungary 1956',
      // Crises
      'Berlin Crisis',
      'Berlin Wall',
      'Cuban Missile Crisis',
      'Prague Spring',
      'Brezhnev Doctrine',
      // Detente
      'Ostpolitik',
      'SALT',
      'Helsinki',
      'Afghanistan',
      // End of Cold War
      'Reagan',
      'Gorbachev',
      'INF Treaty',
      '1989 revolutions',
      'German reunification',
      'End of USSR',
      // Primary sources
      'Diplomatic documents',
      'Speeches',
      'Intelligence files',
    ],
  },
  {
    id: 'ocr-alevel-hist-french-revolution',
    name: 'Y213: The French Revolution and Napoleon 1774-1815',
    description: 'France from ancien regime to Napoleon',
    icon: '🇫🇷',
    color: 'bg-blue-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 2',
    subtopics: [
      // Ancien Regime
      'France under Louis XVI',
      'Social structure',
      'Financial crisis',
      'Enlightenment',
      // Revolution begins
      'Estates-General',
      'National Assembly',
      'Bastille',
      'August Decrees',
      'March on Versailles',
      // Constitutional monarchy
      'Civil Constitution',
      'Varennes',
      '1791 Constitution',
      // Republic
      'War',
      'Fall of monarchy',
      'September Massacres',
      'King\'s trial',
      // Terror
      'Committee of Public Safety',
      'Terror',
      'Thermidor',
      // Directory
      'Instability',
      'Rise of Napoleon',
      // Napoleon
      'Consulate',
      'Empire',
      'Domestic policies',
      'Military campaigns',
      'Fall of Napoleon',
      // Primary sources
      'Revolutionary texts',
      'Laws and decrees',
      'Contemporary accounts',
    ],
  },
  // ============================================================================
  // UNIT GROUP 3: THEMATIC STUDY AND HISTORICAL INTERPRETATIONS
  // Most popular options
  // ============================================================================
  {
    id: 'ocr-alevel-hist-rebellion-tudors',
    name: 'Y306: Rebellion and Disorder under the Tudors 1485-1603',
    description: 'Rebellion and protest in Tudor England',
    icon: '⚔️',
    color: 'bg-red-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 3',
    subtopics: [
      // Thematic Study
      // Yorkist threats
      'Lambert Simnel',
      'Perkin Warbeck',
      'De la Pole',
      // Henrician rebellions
      'Pilgrimage of Grace',
      'Causes',
      'Events',
      'Suppression',
      // Mid-Tudor rebellions
      'Western Rebellion',
      'Kett\'s Rebellion',
      'Wyatt\'s Rebellion',
      'Causes and nature',
      // Elizabethan rebellions
      'Northern Rebellion',
      'Irish rebellions',
      'Essex Rebellion',
      // Themes
      'Religious factors',
      'Social and economic factors',
      'Political factors',
      'Regional factors',
      'Government responses',
      'Success and failure',
      // Interpretations
      'Historiographical debates',
      'Revisionist views',
      'Causes of rebellion',
      // Key Topics
      'Detailed case studies',
      'Comparison across period',
    ],
  },
  {
    id: 'ocr-alevel-hist-russia-rulers',
    name: 'Y318: Russia and its Rulers 1855-1964',
    description: 'Russian government and people across regimes',
    icon: '🏛️',
    color: 'bg-red-900',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 3',
    subtopics: [
      // Thematic Study
      // Nature of government
      'Autocracy',
      'Communist rule',
      'Role of individuals',
      'Ideology',
      'Structure of government',
      // Control
      'Secret police',
      'Terror',
      'Censorship',
      'Propaganda',
      // Economy
      'Agricultural policies',
      'Industrial policies',
      'Planning',
      // Society
      'Impact on people',
      'Elites',
      'Peasants and workers',
      'Women',
      'National minorities',
      // Opposition
      'Nature of opposition',
      'Effectiveness',
      'Repression',
      // Interpretations
      'Continuity vs change',
      'Role of individuals',
      'Totalitarian model',
      // Key Topics
      'Emancipation',
      'Collectivisation',
      'Terror',
    ],
  },
  {
    id: 'ocr-alevel-hist-civil-rights-usa',
    name: 'Y319: Civil Rights in the USA 1865-1992',
    description: 'African American experience over a century',
    icon: '✊',
    color: 'bg-purple-700',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit Group 3',
    subtopics: [
      // Thematic Study
      // Reconstruction
      'Emancipation',
      '13th-15th Amendments',
      'Freedmen\'s Bureau',
      'End of Reconstruction',
      // Jim Crow
      'Segregation',
      'Plessy v Ferguson',
      'Disfranchisement',
      'Violence',
      // Early campaigns
      'Washington vs Du Bois',
      'NAACP',
      'Great Migration',
      // Depression to WWII
      'New Deal impact',
      'WWII changes',
      // Civil Rights Movement
      'Brown v Board',
      'Montgomery',
      'Sit-ins',
      'Freedom Rides',
      'Birmingham',
      'March on Washington',
      'Legislation',
      // Later period
      'Black Power',
      'Urban problems',
      'Affirmative Action',
      'Reagan era',
      // Interpretations
      'Role of individuals',
      'Federal government',
      'Grassroots movements',
      // Key Topics
      'Montgomery Bus Boycott',
      'March on Washington',
      'Chicago campaign',
    ],
  },
  // ============================================================================
  // UNIT 4: TOPIC-BASED ESSAY (NEA)
  // ============================================================================
  {
    id: 'ocr-alevel-hist-nea',
    name: 'Y100: Topic-Based Essay',
    description: 'Historical investigation 3000-4000 words',
    icon: '📝',
    color: 'bg-indigo-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'history',
    paperRestriction: 'Unit 4 NEA',
    subtopics: [
      // Essay requirements
      'Choosing a topic',
      'Question formulation',
      'Scope of study',
      'Time period',
      'Primary sources',
      'Secondary sources',
      // Structure
      'Introduction',
      'Argument construction',
      'Evidence use',
      'Source evaluation',
      'Interpretations',
      'Conclusion',
      // Assessment
      'AO1 criteria',
      'AO2 criteria',
      'AO3 criteria',
      'Word limit',
      'Referencing',
      'Bibliography',
      // Skills
      'Historical thinking',
      'Critical analysis',
      'Evaluation',
    ],
  },
];

export function getOCRALevelHistoryTopicById(id: string): Topic | undefined {
  return ocrALevelHistoryTopics.find((topic) => topic.id === id);
}
