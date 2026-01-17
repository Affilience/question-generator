// OCR GCSE Geography B (J384) Topics
// Based on official OCR specification - Geography for Enquiring Minds
// Reference: https://www.ocr.org.uk/qualifications/gcse/geography-b-geography-for-enquiring-minds-j384-from-2016/

import { Topic } from '@/types';

export const ocrGCSEGeographyTopics: Topic[] = [
  // ============================================================================
  // COMPONENT 1: OUR NATURAL WORLD
  // ============================================================================
  {
    id: 'global-hazards',
    name: 'Global Hazards',
    description: 'Climate patterns, tropical storms and tectonic hazards',
    icon: '🌪️',
    color: 'bg-red-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 1',
    subtopics: [
      // Climate and weather
      'Weather vs climate',
      'Global climate patterns',
      'Pressure systems',
      'High pressure',
      'Low pressure',
      'Global atmospheric circulation',
      // Tropical storms
      'Where tropical storms form',
      'Conditions for formation',
      'Structure of tropical storms',
      'Movement of tropical storms',
      'Tropical storm impacts',
      'Primary impacts',
      'Secondary impacts',
      'Responses to tropical storms',
      'Managing tropical storms',
      'Tropical storm case study',
      // Drought
      'Causes of drought',
      'Impacts of drought',
      'Managing drought',
      // UK extreme weather
      'Types of UK extreme weather',
      'Flooding in UK',
      'Heatwaves',
      'Storms',
      'Cold spells',
      'UK weather case study',
      // Climate change
      'Evidence for climate change',
      'Natural causes',
      'Human causes',
      'Enhanced greenhouse effect',
      'Impacts of climate change',
      'Managing climate change',
      'Mitigation',
      'Adaptation',
      // Tectonic hazards
      'Structure of Earth',
      'Plate tectonics',
      'Types of plate boundary',
      'Constructive boundaries',
      'Destructive boundaries',
      'Conservative boundaries',
      // Earthquakes
      'Why earthquakes occur',
      'Earthquake characteristics',
      'Measuring earthquakes',
      'Earthquake impacts',
      'Responding to earthquakes',
      'Earthquake case study',
      // Volcanoes
      'Why volcanoes erupt',
      'Types of volcano',
      'Volcanic impacts',
      'Responding to eruptions',
      // Managing tectonics
      'Prediction',
      'Preparation',
      'Protection',
    ],
  },
  {
    id: 'ecosystems',
    name: 'Changing Climate and UK Ecosystems',
    description: 'UK ecosystems and ecosystem management',
    icon: '🌿',
    color: 'bg-green-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 1',
    subtopics: [
      // Ecosystems basics
      'What is an ecosystem?',
      'Components of ecosystems',
      'Biotic components',
      'Abiotic components',
      'Energy flow',
      'Food chains',
      'Food webs',
      'Nutrient cycling',
      // UK ecosystems
      'UK ecosystem types',
      'Deciduous woodland',
      'Heathland',
      'Moorland',
      'Wetland',
      'Coastal ecosystems',
      // Ecosystem characteristics
      'Climate influence',
      'Soil types',
      'Flora characteristics',
      'Fauna characteristics',
      'Interdependence',
      // Human impact on UK ecosystems
      'Agriculture',
      'Urbanisation',
      'Recreation',
      'Pollution',
      'Deforestation',
      // UK ecosystem case study
      'Named UK ecosystem',
      'Characteristics',
      'Human impacts',
      'Management strategies',
      // Climate change and ecosystems
      'Impacts on UK ecosystems',
      'Species changes',
      'Habitat changes',
      'Seasonal changes',
      // Managing ecosystems
      'Conservation',
      'Protection',
      'Restoration',
      'Sustainable management',
    ],
  },
  {
    id: 'tropical-rainforests',
    name: 'Distinctive Landscapes - Rainforests',
    description: 'Tropical rainforest characteristics and management',
    icon: '🌴',
    color: 'bg-emerald-600',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 1 (Option)',
    subtopics: [
      // Rainforest distribution
      'Location of rainforests',
      'Equatorial climate',
      'Climate characteristics',
      // Rainforest structure
      'Emergent layer',
      'Canopy layer',
      'Understorey',
      'Shrub layer',
      'Forest floor',
      // Rainforest characteristics
      'Climate',
      'High temperature',
      'High rainfall',
      'Humidity',
      'Soils',
      'Nutrient cycling',
      // Plant adaptations
      'Buttress roots',
      'Drip tips',
      'Lianas',
      'Epiphytes',
      // Animal adaptations
      'Camouflage',
      'Diet adaptations',
      'Movement adaptations',
      // Biodiversity
      'Species diversity',
      'Why so biodiverse',
      'Importance of biodiversity',
      // Human use
      'Indigenous people',
      'Shifting cultivation',
      'Commercial uses',
      'Logging',
      'Mining',
      'Agriculture',
      'HEP',
      // Deforestation
      'Causes of deforestation',
      'Rates of deforestation',
      'Impacts of deforestation',
      'Economic impacts',
      'Social impacts',
      'Environmental impacts',
      // Sustainable management
      'Conservation',
      'Protected areas',
      'Ecotourism',
      'Selective logging',
      'Replanting',
      'International agreements',
      'Rainforest case study',
    ],
  },
  {
    id: 'polar-hot-deserts',
    name: 'Distinctive Landscapes - Polar and Hot Deserts',
    description: 'Desert and polar environment characteristics',
    icon: '🏜️',
    color: 'bg-amber-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 1 (Option)',
    subtopics: [
      // HOT DESERTS
      'Location of hot deserts',
      'Why deserts form',
      'Climate characteristics',
      'Extreme temperatures',
      'Low rainfall',
      // Desert landscapes
      'Sand dunes',
      'Rock formations',
      'Wadis',
      'Desert soils',
      // Plant adaptations
      'Succulents',
      'Deep roots',
      'Small leaves',
      'Waxy coatings',
      // Animal adaptations
      'Nocturnal behaviour',
      'Water conservation',
      'Heat avoidance',
      // Human use of deserts
      'Traditional lifestyles',
      'Nomadic herding',
      'Modern development',
      'Tourism',
      'Mining',
      'Solar energy',
      // Desert challenges
      'Desertification',
      'Causes of desertification',
      'Climate change',
      'Overgrazing',
      'Managing desertification',
      // Hot desert case study
      // POLAR ENVIRONMENTS
      'Location of polar regions',
      'Arctic and Antarctic',
      'Climate characteristics',
      'Extreme cold',
      'Polar day/night',
      // Polar landscapes
      'Ice sheets',
      'Glaciers',
      'Permafrost',
      'Tundra',
      // Plant adaptations
      'Low-growing plants',
      'Short growing season',
      // Animal adaptations
      'Insulation',
      'Migration',
      'Hibernation',
      // Human activity
      'Indigenous peoples',
      'Research stations',
      'Resource extraction',
      'Tourism',
      // Polar challenges
      'Climate change impacts',
      'Ice melt',
      'Sea level rise',
      'Conservation',
      // Polar case study
    ],
  },
  {
    id: 'uk-landscapes',
    name: 'Physical Landscapes in the UK',
    description: 'Coastal and river processes and landforms',
    icon: '🏖️',
    color: 'bg-cyan-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 1',
    subtopics: [
      // UK landscape overview
      'UK physical geography',
      'Highland and lowland',
      // COASTAL LANDSCAPES
      // Waves
      'Wave formation',
      'Constructive waves',
      'Destructive waves',
      'Fetch',
      // Coastal erosion
      'Hydraulic action',
      'Abrasion',
      'Attrition',
      'Corrosion',
      // Weathering
      'Mechanical weathering',
      'Chemical weathering',
      'Biological weathering',
      // Mass movement
      'Slumping',
      'Rockfall',
      'Landslides',
      // Erosional landforms
      'Cliffs',
      'Wave-cut platforms',
      'Headlands and bays',
      'Caves, arches, stacks',
      // Transportation
      'Longshore drift',
      // Depositional landforms
      'Beaches',
      'Spits',
      'Bars',
      // Coastal management
      'Hard engineering',
      'Soft engineering',
      'Managed retreat',
      'Coastal case study',
      // RIVER LANDSCAPES
      // River processes
      'Erosion processes',
      'Transportation',
      'Deposition',
      // River profiles
      'Long profile',
      'Cross profile',
      'Upper course',
      'Middle course',
      'Lower course',
      // River landforms
      'V-shaped valleys',
      'Waterfalls',
      'Meanders',
      'Ox-bow lakes',
      'Floodplains',
      'Levees',
      // Flooding
      'Causes of flooding',
      'Hydrographs',
      'Flood impacts',
      // Flood management
      'Hard engineering',
      'Soft engineering',
      'River case study',
    ],
  },
  // ============================================================================
  // COMPONENT 2: PEOPLE AND SOCIETY
  // ============================================================================
  {
    id: 'urban-futures',
    name: 'Urban Futures',
    description: 'Urbanisation, urban living and sustainability',
    icon: '🏙️',
    color: 'bg-slate-600',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // Urbanisation
      'What is urbanisation?',
      'Global urbanisation patterns',
      'Causes of urbanisation',
      'Push and pull factors',
      'Natural increase',
      'Megacities',
      // UK urban change
      'History of UK urbanisation',
      'Counter-urbanisation',
      'Suburbanisation',
      'Re-urbanisation',
      // UK city case study
      'Named UK city',
      'Location and site',
      'Urban structure',
      'CBD',
      'Inner city',
      'Suburbs',
      // Urban challenges UK
      'Housing',
      'Transport',
      'Employment',
      'Environment',
      'Social issues',
      // Urban solutions UK
      'Urban regeneration',
      'Transport improvements',
      'Green spaces',
      // LIC/NEE city case study
      'Named LIC/NEE city',
      'Urban growth',
      'Causes of growth',
      // Opportunities in LIC cities
      'Employment',
      'Services',
      'Quality of life',
      // Challenges in LIC cities
      'Squatter settlements',
      'Informal economy',
      'Health',
      'Education',
      'Water and sanitation',
      'Crime',
      // Improving urban areas
      'Self-help schemes',
      'Government schemes',
      'NGO projects',
      // Sustainable cities
      'What is sustainable?',
      'Sustainable transport',
      'Green building',
      'Waste management',
      'Water management',
      'Energy efficiency',
      'Sustainable city example',
    ],
  },
  {
    id: 'dynamic-development',
    name: 'Dynamic Development',
    description: 'Global inequality and development strategies',
    icon: '📈',
    color: 'bg-yellow-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // Defining development
      'What is development?',
      'Economic development',
      'Social development',
      // Measuring development
      'GDP/GNI',
      'Life expectancy',
      'Literacy rates',
      'HDI',
      'Limitations of measures',
      // Global inequality
      'Development gap',
      'Patterns of development',
      'Causes of inequality',
      // Factors affecting development
      'Physical factors',
      'Climate',
      'Resources',
      'Natural hazards',
      'Human factors',
      'History/colonialism',
      'Politics',
      'Trade',
      // Population and development
      'Population growth',
      'Demographic transition',
      'Population structure',
      'Population policies',
      // Reducing inequality
      'Aid',
      'Types of aid',
      'Aid effectiveness',
      'Trade',
      'Fair trade',
      'Trade barriers',
      'Investment',
      'TNCs',
      'FDI',
      'Debt relief',
      'Technology',
      'Intermediate technology',
      // Development case study
      'Named country study',
      'Development strategies',
      'Progress and challenges',
      // Sustainable development
      'What is sustainable development?',
      'UN SDGs',
      'Balancing development',
    ],
  },
  {
    id: 'uk-in-21st-century',
    name: 'The UK in the 21st Century',
    description: 'UK economy, connections and challenges',
    icon: '🇬🇧',
    color: 'bg-blue-600',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // UK overview
      'UK location',
      'Physical geography',
      'Human geography',
      'Regional differences',
      // Population
      'UK population structure',
      'Population change',
      'Migration',
      'Immigration',
      'Emigration',
      'Ageing population',
      // UK economy
      'Economic sectors',
      'Primary industry',
      'Secondary industry',
      'Tertiary industry',
      'Quaternary industry',
      // Economic change
      'Deindustrialisation',
      'Growth of services',
      'Digital economy',
      // Employment patterns
      'Regional variations',
      'North-South divide',
      // UK connections
      'Transport networks',
      'Road',
      'Rail',
      'Air',
      'Ports',
      'Digital connections',
      // Global connections
      'Trade links',
      'EU/Brexit',
      'Commonwealth',
      'TNCs in UK',
      // Environmental challenges
      'Energy',
      'UK energy mix',
      'Renewable energy',
      'Resource management',
      'Food',
      'Water',
      // Social challenges
      'Housing',
      'Health',
      'Education',
      'Inequality',
    ],
  },
  {
    id: 'resource-reliance',
    name: 'Resource Reliance',
    description: 'Global resources and food security',
    icon: '🌾',
    color: 'bg-orange-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // Global resources
      'Types of resources',
      'Resource distribution',
      'Resource consumption',
      // Food resources
      'Global food production',
      'Agricultural systems',
      'Commercial farming',
      'Subsistence farming',
      'Intensive farming',
      'Extensive farming',
      // Food security
      'What is food security?',
      'Causes of food insecurity',
      'Physical factors',
      'Human factors',
      'Climate change',
      'Conflict',
      'Poverty',
      // Increasing food supply
      'Irrigation',
      'Fertilisers',
      'GM crops',
      'Green Revolution',
      'New technologies',
      // Sustainable food
      'Organic farming',
      'Local food',
      'Reducing waste',
      'Changing diets',
      // Water resources
      'Global water supply',
      'Water stress',
      'Water scarcity',
      // Water security
      'Causes of water insecurity',
      'Impacts of water insecurity',
      // Increasing water supply
      'Dams',
      'Water transfer',
      'Desalination',
      // Sustainable water
      'Water conservation',
      'Rainwater harvesting',
      'Recycling water',
      // Energy resources
      'Global energy supply',
      'Fossil fuels',
      'Renewable energy',
      'Energy security',
      // Sustainable energy
      'Reducing demand',
      'Energy efficiency',
      'Alternative energy',
    ],
  },
  // ============================================================================
  // COMPONENT 3: GEOGRAPHICAL EXPLORATION
  // ============================================================================
  {
    id: 'fieldwork-skills',
    name: 'Geographical Exploration and Skills',
    description: 'Fieldwork, decision-making and geographical skills',
    icon: '🧭',
    color: 'bg-purple-500',
    examBoard: 'ocr',
    qualification: 'gcse',
    subject: 'geography',
    paperRestriction: 'Component 3',
    subtopics: [
      // Geographical enquiry
      'Enquiry questions',
      'Planning investigations',
      'Methodology',
      // Data collection
      'Primary data',
      'Secondary data',
      'Sampling',
      'Random sampling',
      'Systematic sampling',
      'Stratified sampling',
      // Fieldwork techniques
      'Questionnaires',
      'Interviews',
      'Observation',
      'Measuring',
      'Counting',
      'Environmental surveys',
      'Risk assessment',
      // Data presentation
      'Maps',
      'Sketch maps',
      'Graphs and charts',
      'Tables',
      'Photographs',
      'GIS',
      // Data analysis
      'Describing patterns',
      'Explaining patterns',
      'Identifying anomalies',
      // Conclusions
      'Drawing conclusions',
      'Linking to theory',
      // Evaluation
      'Reliability',
      'Accuracy',
      'Limitations',
      'Improvements',
      // Decision making
      'Analysing issues',
      'Evaluating options',
      'Stakeholder views',
      'Making judgements',
      // Map skills
      'OS maps',
      'Grid references',
      '4-figure references',
      '6-figure references',
      'Scale',
      'Distance',
      'Direction',
      'Contours',
      'Relief',
      'Symbols',
      'Cross-sections',
      // Graph skills
      'Line graphs',
      'Bar charts',
      'Pie charts',
      'Scatter graphs',
      'Population pyramids',
      'Climate graphs',
      // Statistical skills
      'Mean, median, mode',
      'Range',
      'Percentages',
      'Percentage change',
      // Photo interpretation
      'Aerial photos',
      'Ground photos',
      'Satellite images',
    ],
  },
];

export function getOCRGCSEGeographyTopicById(id: string): Topic | undefined {
  return ocrGCSEGeographyTopics.find((topic) => topic.id === id);
}
