// AQA GCSE Geography (8035) Topics
// Based on official AQA specification
// Reference: https://www.aqa.org.uk/subjects/geography/gcse/geography-8035

import { Topic } from '@/types';

export const aqaGCSEGeographyTopics: Topic[] = [
  // ============================================================================
  // PAPER 1: LIVING WITH THE PHYSICAL ENVIRONMENT
  // ============================================================================
  {
    id: 'aqa-gcse-geog-natural-hazards',
    name: 'The Challenge of Natural Hazards',
    description: 'Tectonic, weather hazards and climate change',
    icon: '🌋',
    color: 'bg-red-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 1 Section A',
    subtopics: [
      // Natural hazards
      'Definition of natural hazard',
      'Types of natural hazard',
      'Factors affecting hazard risk',
      // Tectonic hazards
      'Plate tectonics theory',
      'Convection currents',
      'Plate boundaries: constructive',
      'Plate boundaries: destructive',
      'Plate boundaries: conservative',
      'Distribution of earthquakes and volcanoes',
      'Physical processes at plate margins',
      // Effects of tectonic hazards
      'Primary effects of earthquakes',
      'Secondary effects of earthquakes',
      'Primary effects of volcanic eruptions',
      'Secondary effects of volcanic eruptions',
      'Immediate responses',
      'Long-term responses',
      // Management strategies
      'Monitoring tectonic hazards',
      'Prediction of earthquakes',
      'Protection: earthquake-resistant buildings',
      'Planning for tectonic hazards',
      // Contrasting case studies
      'HIC earthquake example (e.g. Japan, New Zealand)',
      'LIC/NEE earthquake example (e.g. Nepal, Haiti)',
      // Weather hazards
      'Global atmospheric circulation',
      'Hadley, Ferrel and Polar cells',
      'Distribution of tropical storms',
      'Formation of tropical storms',
      'Structure of tropical storms',
      'Tropical storm characteristics',
      // Tropical storm impacts
      'Primary effects of tropical storms',
      'Secondary effects of tropical storms',
      'Responses to tropical storms',
      'Tropical storm case study (e.g. Typhoon Haiyan)',
      // Reducing effects of tropical storms
      'Monitoring tropical storms',
      'Prediction of tropical storms',
      'Protection from tropical storms',
      'Planning for tropical storms',
      // UK weather hazards
      'Types of UK weather hazards',
      'Extreme weather events in UK',
      'UK storm case study (e.g. Beast from the East)',
      'Evidence of changing UK weather patterns',
      // Climate change
      'Evidence for climate change',
      'Natural causes of climate change',
      'Human causes of climate change',
      'Enhanced greenhouse effect',
      'Effects of climate change on people',
      'Effects of climate change on environment',
      'Managing climate change: mitigation',
      'Managing climate change: adaptation',
    ],
  },
  {
    id: 'aqa-gcse-geog-living-world',
    name: 'The Living World',
    description: 'Ecosystems, tropical rainforests and hot deserts/cold environments',
    icon: '🌿',
    color: 'bg-green-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 1 Section B',
    subtopics: [
      // Ecosystems
      'What is an ecosystem?',
      'Components of an ecosystem',
      'Producers, consumers, decomposers',
      'Food chains and food webs',
      'Nutrient cycling',
      'Interdependence in ecosystems',
      // Small scale UK ecosystem
      'Pond ecosystem',
      'Woodland ecosystem',
      'Balance in ecosystems',
      // Global ecosystems
      'Distribution of global ecosystems',
      'Characteristics of biomes',
      'Tropical rainforest biome',
      'Hot desert biome',
      'Tundra biome',
      // Tropical rainforests
      'Location of tropical rainforests',
      'Climate of tropical rainforests',
      'Rainforest structure: emergent layer',
      'Rainforest structure: canopy',
      'Rainforest structure: understorey',
      'Rainforest structure: forest floor',
      'Rainforest soils',
      'Nutrient cycle in rainforests',
      // Rainforest adaptations
      'Plant adaptations: buttress roots',
      'Plant adaptations: drip tips',
      'Plant adaptations: lianas',
      'Animal adaptations',
      'Biodiversity in rainforests',
      // Deforestation
      'Causes of deforestation',
      'Subsistence farming',
      'Commercial farming',
      'Logging',
      'Road building',
      'Mineral extraction',
      'Energy development',
      // Impacts of deforestation
      'Economic impacts of deforestation',
      'Environmental impacts of deforestation',
      'Impacts on indigenous people',
      // Rainforest management
      'Sustainable management',
      'Selective logging',
      'Replanting',
      'Conservation',
      'Ecotourism',
      'International agreements',
      'Rainforest case study (e.g. Amazon)',
      // HOT DESERTS (Option)
      'Location of hot deserts',
      'Hot desert climate',
      'Hot desert characteristics',
      'Plant adaptations in deserts',
      'Animal adaptations in deserts',
      'Interdependence in deserts',
      // Development in hot deserts
      'Opportunities in hot deserts',
      'Challenges in hot deserts',
      'Hot desert case study (e.g. Sahara, Thar)',
      // Desertification
      'Causes of desertification',
      'Climate change and desertification',
      'Overgrazing',
      'Over-cultivation',
      'Reducing desertification',
      // COLD ENVIRONMENTS (Option)
      'Location of cold environments',
      'Polar and tundra climates',
      'Cold environment characteristics',
      'Plant adaptations in cold environments',
      'Animal adaptations in cold environments',
      // Development in cold environments
      'Opportunities in cold environments',
      'Challenges in cold environments',
      'Cold environment case study (e.g. Alaska, Svalbard)',
      // Cold environment management
      'Wilderness areas',
      'Protection strategies',
      'Balancing economic development',
    ],
  },
  {
    id: 'aqa-gcse-geog-physical-landscapes-uk',
    name: 'Physical Landscapes in the UK',
    description: 'Coastal and river landscapes in the UK',
    icon: '🏖️',
    color: 'bg-cyan-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 1 Section C',
    subtopics: [
      // UK physical landscapes
      'Overview of UK landscapes',
      'Upland and lowland areas',
      // COASTAL LANDSCAPES
      // Wave processes
      'Wave types and characteristics',
      'Constructive waves',
      'Destructive waves',
      'Wave refraction',
      // Weathering and erosion
      'Mechanical weathering',
      'Chemical weathering',
      'Biological weathering',
      'Mass movement: sliding',
      'Mass movement: slumping',
      'Mass movement: rock falls',
      // Coastal erosion processes
      'Hydraulic power/action',
      'Abrasion',
      'Attrition',
      'Solution/corrosion',
      // Erosional landforms
      'Headlands and bays',
      'Wave-cut platforms',
      'Wave-cut notches',
      'Caves, arches, stacks, stumps',
      // Transportation
      'Longshore drift',
      'Traction, saltation, suspension, solution',
      // Depositional landforms
      'Beaches',
      'Spits',
      'Bars',
      'Sand dunes',
      // Coastal management
      'Why manage coastlines?',
      'Hard engineering: sea walls',
      'Hard engineering: rock armour',
      'Hard engineering: gabions',
      'Hard engineering: groynes',
      'Soft engineering: beach nourishment',
      'Soft engineering: dune regeneration',
      'Soft engineering: managed retreat',
      'Coastal management case study',
      // RIVER LANDSCAPES
      // River processes
      'Erosion: hydraulic action',
      'Erosion: abrasion',
      'Erosion: attrition',
      'Erosion: solution',
      'Transportation: traction',
      'Transportation: saltation',
      'Transportation: suspension',
      'Transportation: solution',
      'Deposition',
      // Long profile and cross profile
      'River long profile',
      'River cross profile',
      'Changes downstream',
      // River landforms
      'V-shaped valleys',
      'Interlocking spurs',
      'Waterfalls and gorges',
      'Meanders',
      'Ox-bow lakes',
      'Floodplains',
      'Levees',
      'Estuaries',
      // Factors affecting flood risk
      'Physical factors',
      'Human factors',
      'Hydrographs',
      // Flood management
      'Hard engineering: dams and reservoirs',
      'Hard engineering: channel straightening',
      'Hard engineering: embankments',
      'Hard engineering: flood relief channels',
      'Soft engineering: flood warnings',
      'Soft engineering: floodplain zoning',
      'Soft engineering: afforestation',
      'River flooding case study (e.g. Somerset Levels)',
    ],
  },
  // ============================================================================
  // PAPER 2: CHALLENGES IN THE HUMAN ENVIRONMENT
  // ============================================================================
  {
    id: 'aqa-gcse-geog-urban-issues',
    name: 'Urban Issues and Challenges',
    description: 'Urbanisation, urban change and sustainability',
    icon: '🏙️',
    color: 'bg-gray-600',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 2 Section A',
    subtopics: [
      // Global urbanisation
      'Global pattern of urban change',
      'Urbanisation in HICs',
      'Urbanisation in LICs/NEEs',
      'Megacities',
      'Causes of urbanisation',
      'Rural-urban migration',
      'Natural increase',
      // Urban growth in LICs/NEEs
      'LIC/NEE city case study (e.g. Lagos, Rio)',
      'Location and importance of city',
      'Causes of growth',
      // Urban opportunities
      'Social opportunities',
      'Economic opportunities',
      'Employment opportunities',
      'Access to services',
      // Urban challenges
      'Managing urban growth',
      'Squatter settlements/slums',
      'Housing issues',
      'Water supply',
      'Sanitation',
      'Energy provision',
      'Unemployment',
      'Crime',
      'Traffic congestion',
      // Improving urban areas
      'Self-help schemes',
      'Site and service schemes',
      'Planning improvements',
      // UK urban change
      'UK city case study (e.g. London, Bristol)',
      'Location and importance',
      'Migration to UK cities',
      // UK urban opportunities
      'Cultural mix',
      'Recreation and entertainment',
      'Employment opportunities',
      'Integrated transport',
      // UK urban challenges
      'Urban deprivation',
      'Social inequality',
      'Dereliction',
      'Building on brownfield and greenfield',
      // Urban regeneration
      'Urban regeneration projects',
      'Government strategies',
      'Partnership schemes',
      // Sustainable urban living
      'Features of sustainable cities',
      'Water conservation',
      'Energy conservation',
      'Green spaces',
      'Waste recycling',
      'Transport strategies',
      'Sustainable urban example',
    ],
  },
  {
    id: 'aqa-gcse-geog-changing-economic-world',
    name: 'The Changing Economic World',
    description: 'Development, economic change and the UK economy',
    icon: '💰',
    color: 'bg-yellow-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 2 Section B',
    subtopics: [
      // Development
      'Global variations in development',
      'Indicators of development',
      'GDP and GNI',
      'HDI',
      'Birth rate and death rate',
      'Life expectancy',
      'Literacy rate',
      'Development gap',
      // Measuring development
      'Limitations of single indicators',
      'Value of composite indicators',
      // Causes of uneven development
      'Physical causes',
      'Economic causes',
      'Historical causes',
      // Consequences of uneven development
      'Wealth disparities',
      'Health disparities',
      'International migration',
      // Reducing the development gap
      'Investment',
      'Industrial development',
      'Tourism',
      'Aid',
      'Intermediate/appropriate technology',
      'Fair trade',
      'Debt relief',
      'Microfinance loans',
      // LIC/NEE case study
      'LIC/NEE example (e.g. Nigeria, India)',
      'Location and importance',
      'Wider world context',
      // Political, social and cultural context
      'Political factors',
      'Social factors',
      'Cultural factors',
      // Industrial development
      'Changing industrial structure',
      'Manufacturing growth',
      'Role of TNCs',
      // Impacts of industry
      'Impacts on environment',
      'Impacts on people',
      // Changing UK economy
      'Changes in UK economy',
      'Causes of economic change',
      'Deindustrialisation',
      'Globalisation effects',
      'Government policies',
      // UK industry today
      'Post-industrial economy',
      'Service sector growth',
      'Development of IT',
      'Science and business parks',
      // UK and wider world
      'Place in global economy',
      'Impacts of globalisation',
      'EU membership/Brexit',
      'UK trade links',
      // North-South divide
      'Economic divide in UK',
      'Strategies to reduce divide',
    ],
  },
  {
    id: 'aqa-gcse-geog-resource-management',
    name: 'The Challenge of Resource Management',
    description: 'Resource management and food/water/energy focus',
    icon: '⚡',
    color: 'bg-orange-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 2 Section C',
    subtopics: [
      // Resource management (Core)
      'Significance of food, water, energy',
      'Global distribution of resources',
      // Food in the UK
      'Demand for food in UK',
      'Food miles',
      'Carbon footprint of food',
      'Agribusiness',
      'Organic farming',
      // Water in the UK
      'Demand for water in UK',
      'Water supply challenges',
      'Water stress',
      'Water transfer schemes',
      // Energy in the UK
      'Demand for energy in UK',
      'UK energy mix',
      'Reliance on fossil fuels',
      'Renewable energy potential',
      // FOOD (Option)
      'Global food supply',
      'Factors affecting food supply',
      'Physical factors',
      'Human factors',
      'Food security',
      'Food insecurity causes',
      'Impacts of food insecurity',
      // Increasing food supply
      'Irrigation',
      'Biotechnology',
      'Green Revolution',
      'New agricultural technologies',
      'Large scale food production example',
      // Sustainable food production
      'Sustainable food supplies',
      'Organic farming',
      'Urban farming',
      'Permaculture',
      'Sustainable food example',
      // WATER (Option)
      'Global water supply',
      'Factors affecting water supply',
      'Water security',
      'Water insecurity causes',
      'Impacts of water insecurity',
      // Increasing water supply
      'Water diversion and dams',
      'Desalination',
      'Water transfer schemes',
      'Large scale water project example',
      // Sustainable water supplies
      'Water conservation',
      'Groundwater management',
      'Recycling water',
      'Sustainable water example',
      // ENERGY (Option)
      'Global energy supply',
      'Factors affecting energy supply',
      'Energy security',
      'Energy insecurity causes',
      'Impacts of energy insecurity',
      // Increasing energy supply
      'Fossil fuel extraction',
      'Nuclear power',
      'Renewable energy',
      'Large scale energy project example',
      // Sustainable energy
      'Energy conservation',
      'Energy efficiency',
      'Individual actions',
      'Sustainable energy example',
    ],
  },
  // ============================================================================
  // PAPER 3: GEOGRAPHICAL APPLICATIONS
  // ============================================================================
  {
    id: 'aqa-gcse-geog-fieldwork-skills',
    name: 'Geographical Applications and Skills',
    description: 'Issue evaluation, fieldwork and geographical skills',
    icon: '📊',
    color: 'bg-purple-500',
    examBoard: 'aqa',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Paper 3',
    subtopics: [
      // Issue evaluation
      'Using pre-release materials',
      'Critical analysis of data',
      'Decision making',
      'Evaluating options',
      'Justifying decisions',
      // Fieldwork
      'Fieldwork enquiry process',
      'Asking geographical questions',
      'Selecting appropriate methods',
      'Processing and presenting data',
      'Describing and explaining findings',
      'Drawing conclusions',
      'Evaluating enquiry',
      // Fieldwork techniques
      'Primary data collection',
      'Secondary data collection',
      'Qualitative methods',
      'Quantitative methods',
      // Cartographic skills
      'Atlas maps',
      'OS maps',
      'Grid references (4 and 6 figure)',
      'Scale and distance',
      'Direction and compass bearings',
      'Cross-sections',
      'Relief and contours',
      'Map symbols',
      'Sketch maps',
      // Graphical skills
      'Line graphs',
      'Bar graphs',
      'Pie charts',
      'Pictograms',
      'Choropleth maps',
      'Flow line maps',
      'Population pyramids',
      // Numerical skills
      'Percentages',
      'Percentage change',
      'Mean, median, mode',
      'Range',
      'Interquartile range',
      // Statistical skills
      'Analysing data',
      'Identifying patterns',
      'Identifying anomalies',
      'Using evidence',
      // Photographic interpretation
      'Ground level photos',
      'Aerial photos',
      'Satellite images',
    ],
  },
];

export function getAQAGCSEGeographyTopicById(id: string): Topic | undefined {
  return aqaGCSEGeographyTopics.find((topic) => topic.id === id);
}
