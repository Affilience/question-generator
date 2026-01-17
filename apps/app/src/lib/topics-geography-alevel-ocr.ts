// OCR A-Level Geography (H481) Topics
// Based on official OCR specification
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/geography-h081-h481-from-2016/

import { Topic } from '@/types';

export const ocrALevelGeographyTopics: Topic[] = [
  // ============================================================================
  // COMPONENT 1: PHYSICAL SYSTEMS (H481/01)
  // ============================================================================
  {
    id: 'earth-life-support',
    name: "Earth's Life Support Systems",
    description: 'Water and carbon cycles as critical life support systems',
    icon: '🌍',
    color: 'bg-blue-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 1',
    subtopics: [
      // Systems approach
      'Systems in physical geography',
      'Open and closed systems',
      'Inputs, stores, flows, outputs',
      'Dynamic equilibrium',
      'Positive feedback',
      'Negative feedback',
      // Water cycle
      'Global hydrological cycle',
      'Global water budget',
      'Water cycle stores',
      'Oceans',
      'Cryosphere',
      'Groundwater',
      'Atmosphere',
      'Soils',
      'Biosphere',
      // Water cycle processes
      'Evaporation and condensation',
      'Precipitation',
      'Interception',
      'Infiltration and percolation',
      'Throughflow',
      'Groundwater flow',
      'Surface runoff',
      'River discharge',
      // Drainage basins
      'Drainage basin as a system',
      'Water balance equation',
      'Storm hydrographs',
      'Basin characteristics',
      'Factors affecting runoff',
      // Carbon cycle
      'Global carbon cycle',
      'Carbon stores',
      'Atmospheric carbon',
      'Oceanic carbon',
      'Terrestrial carbon',
      'Lithospheric carbon',
      // Carbon transfers
      'Photosynthesis',
      'Respiration',
      'Decomposition',
      'Combustion',
      'Volcanic emissions',
      'Ocean-atmosphere exchange',
      // Carbon and ecosystems
      'Tropical rainforest carbon',
      'Taiga/boreal forest carbon',
      'Wetland carbon',
      'Soil carbon',
      'Peat formation',
      // Human impacts
      'Deforestation impacts',
      'Fossil fuel burning',
      'Agriculture and carbon',
      'Urbanisation effects',
      'Land use change',
      // Climate linkages
      'Carbon-climate feedbacks',
      'Water-carbon interactions',
      'Climate change impacts',
      'Future scenarios',
    ],
  },
  {
    id: 'landscape-systems',
    name: 'Landscape Systems',
    description: 'Coastal and glaciated landscapes - processes and landforms',
    icon: '🏔️',
    color: 'bg-teal-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 1',
    subtopics: [
      // Landscape systems concept
      'Landscapes as systems',
      'Energy inputs',
      'Sediment systems',
      'Dynamic equilibrium',
      // COASTAL LANDSCAPES
      // Coastal processes
      'Wave formation',
      'Wave characteristics',
      'Constructive waves',
      'Destructive waves',
      'Wave refraction',
      'Tides',
      'Storm surges',
      'Currents',
      // Erosion processes
      'Hydraulic action',
      'Abrasion',
      'Attrition',
      'Corrosion',
      'Sub-aerial processes',
      'Weathering',
      'Mass movement',
      // Transport and deposition
      'Longshore drift',
      'Coastal transport',
      'Deposition',
      'Sediment sources',
      // Erosional landforms
      'Cliffs',
      'Wave-cut platforms',
      'Caves',
      'Arches',
      'Stacks',
      'Stumps',
      'Headlands and bays',
      // Depositional landforms
      'Beaches',
      'Spits',
      'Bars',
      'Tombolos',
      'Barrier beaches',
      'Sand dunes',
      'Salt marshes',
      // Sea level change
      'Eustatic change',
      'Isostatic change',
      'Emergent coastlines',
      'Submergent coastlines',
      // Coastal management
      'Hard engineering',
      'Soft engineering',
      'Managed retreat',
      'Coastal sustainability',
      // GLACIATED LANDSCAPES
      // Glacial systems
      'Glacier mass balance',
      'Accumulation and ablation',
      'Glacier types',
      // Glacier movement
      'Internal deformation',
      'Basal sliding',
      'Warm and cold-based glaciers',
      // Glacial erosion
      'Plucking',
      'Abrasion',
      'Freeze-thaw',
      // Erosional landforms
      'Corries',
      'Aretes',
      'Pyramidal peaks',
      'Glacial troughs',
      'Ribbon lakes',
      'Hanging valleys',
      'Roches moutonnees',
      // Glacial deposition
      'Till',
      'Moraines',
      'Drumlins',
      'Erratics',
      // Fluvioglacial features
      'Eskers',
      'Kames',
      'Outwash plains',
      'Kettle lakes',
      // Periglacial environments
      'Permafrost',
      'Periglacial processes',
      'Periglacial landforms',
    ],
  },
  // ============================================================================
  // COMPONENT 2: HUMAN INTERACTIONS (H481/02)
  // ============================================================================
  {
    id: 'changing-spaces',
    name: 'Changing Spaces; Making Places',
    description: 'Place meanings, identity and change',
    icon: '🏘️',
    color: 'bg-amber-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // Place concepts
      'Meaning of place',
      'Place vs space',
      'Location',
      'Locale',
      'Sense of place',
      'Place identity',
      // Place characteristics
      'Physical characteristics',
      'Human characteristics',
      'Demographic structure',
      'Cultural characteristics',
      'Economic characteristics',
      'Social characteristics',
      // Perceptions of place
      'Insider perspectives',
      'Outsider perspectives',
      'Lived experience',
      'Emotional attachment',
      'Place memories',
      // Representations
      'Formal representations',
      'Informal representations',
      'Media representations',
      'Art and literature',
      'Film and photography',
      'Statistics and data',
      // Place making
      'Factors creating place',
      'Natural factors',
      'Demographic factors',
      'Socio-economic factors',
      'Cultural factors',
      'Political factors',
      // External forces
      'Government policies',
      'Decisions of businesses',
      'Global connections',
      'Globalisation impacts',
      // Place change
      'Continuity and change',
      'Economic restructuring',
      'Social change',
      'Cultural change',
      // Place conflicts
      'Competing interests',
      'Development vs conservation',
      'Different stakeholder views',
      // Place management
      'Place marketing',
      'Rebranding',
      'Regeneration',
      // Local place study
      'Fieldwork investigation',
      'Place comparison',
    ],
  },
  {
    id: 'global-connections',
    name: 'Global Connections',
    description: 'Trade, migration, sovereignty and human rights',
    icon: '🌐',
    color: 'bg-indigo-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 2',
    subtopics: [
      // TRADE IN THE CONTEMPORARY WORLD
      // Global trade patterns
      'Global trade flows',
      'Trade in goods',
      'Trade in services',
      'Historical trade development',
      // Trade theories
      'Comparative advantage',
      'Free trade',
      'Protectionism',
      'Trade agreements',
      // International organisations
      'WTO',
      'Trading blocs',
      'EU single market',
      'Trade barriers',
      // Access to markets
      'Unequal access',
      'Trade and development',
      'Fair trade',
      'Ethical trade',
      // TNCs and trade
      'TNC role in trade',
      'Global production networks',
      'Supply chains',
      // GLOBAL MIGRATION
      // Migration patterns
      'International migration flows',
      'Types of migration',
      'Economic migration',
      'Forced migration',
      'Refugees and asylum',
      // Migration causes
      'Push factors',
      'Pull factors',
      'Lee model',
      // Migration impacts
      'Impacts on source areas',
      'Impacts on host areas',
      'Economic impacts',
      'Social impacts',
      'Cultural impacts',
      // Migration governance
      'National policies',
      'International frameworks',
      'Border control',
      'UNHCR',
      // HUMAN RIGHTS
      // Human rights concept
      'Universal Declaration',
      'Types of rights',
      'Human rights norms',
      // Intervention
      'Reasons for intervention',
      'Types of intervention',
      'Geopolitical intervention',
      'Humanitarian intervention',
      // Sovereignty
      'State sovereignty',
      'Territorial integrity',
      'Sovereignty challenges',
    ],
  },
  // ============================================================================
  // COMPONENT 3: GEOGRAPHICAL DEBATES (H481/03)
  // ============================================================================
  {
    id: 'climate-change',
    name: 'Climate Change',
    description: 'Causes, impacts and responses to climate change',
    icon: '🌡️',
    color: 'bg-red-500',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 3 (Option)',
    subtopics: [
      // Causes of climate change
      'Natural causes',
      'Milankovitch cycles',
      'Solar variation',
      'Volcanic activity',
      'Ocean circulation',
      'Human causes',
      'Greenhouse gas emissions',
      'Deforestation',
      'Agriculture',
      'Industry',
      // Evidence for change
      'Temperature records',
      'Ice cores',
      'Sea level data',
      'Ecosystem changes',
      'Extreme weather',
      // Climate change impacts
      'Physical impacts',
      'Sea level rise',
      'Ice melt',
      'Weather patterns',
      'Ecosystem impacts',
      'Human impacts',
      'Agriculture',
      'Health',
      'Migration',
      // Differential impacts
      'Global inequalities',
      'Vulnerable communities',
      'Small island states',
      'Arctic communities',
      // Responses to climate change
      'Mitigation strategies',
      'Carbon reduction',
      'Renewable energy',
      'Carbon capture',
      'Adaptation strategies',
      'Infrastructure',
      'Land use planning',
      // Climate governance
      'UNFCCC',
      'Paris Agreement',
      'Kyoto Protocol',
      'COP meetings',
      'Carbon trading',
      // Future scenarios
      'IPCC projections',
      'Different pathways',
      'Tipping points',
    ],
  },
  {
    id: 'disease-dilemmas',
    name: 'Disease Dilemmas',
    description: 'Global health patterns, disease impacts and management',
    icon: '🏥',
    color: 'bg-green-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 3 (Option)',
    subtopics: [
      // Global health patterns
      'Health indicators',
      'Life expectancy',
      'Mortality rates',
      'Morbidity',
      'Global health inequalities',
      // Disease types
      'Infectious diseases',
      'Non-communicable diseases',
      'Emerging diseases',
      'Re-emerging diseases',
      // Disease diffusion
      'Disease spread patterns',
      'Expansion diffusion',
      'Relocation diffusion',
      'Hierarchical diffusion',
      // Factors affecting disease
      'Physical factors',
      'Climate and disease',
      'Human factors',
      'Poverty and disease',
      'Urbanisation',
      'Globalisation',
      // Infectious disease case studies
      'HIV/AIDS',
      'Malaria',
      'Tuberculosis',
      'COVID-19 pandemic',
      'Ebola',
      // NCDs
      'Cardiovascular disease',
      'Cancer',
      'Diabetes',
      'Lifestyle factors',
      // Disease management
      'Prevention strategies',
      'Vaccination',
      'Treatment access',
      'Healthcare systems',
      // Global governance
      'WHO role',
      'International cooperation',
      'Pharmaceutical industry',
      'Health aid',
      // Future challenges
      'Antimicrobial resistance',
      'Climate change and disease',
      'Pandemic preparedness',
    ],
  },
  {
    id: 'exploring-oceans',
    name: 'Exploring Oceans',
    description: 'Ocean governance, resources and environmental challenges',
    icon: '🌊',
    color: 'bg-cyan-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 3 (Option)',
    subtopics: [
      // Ocean importance
      'Ocean ecosystem services',
      'Climate regulation',
      'Food provision',
      'Economic value',
      // Ocean environments
      'Ocean zones',
      'Coastal zones',
      'Deep sea environments',
      'Polar oceans',
      // Ocean resources
      'Fisheries',
      'Fish stocks',
      'Aquaculture',
      'Mineral resources',
      'Seabed mining',
      'Oil and gas',
      'Renewable energy',
      // Ocean threats
      'Overfishing',
      'Pollution',
      'Plastic pollution',
      'Ocean acidification',
      'Sea temperature rise',
      'Coral bleaching',
      'Habitat destruction',
      // Ocean governance
      'UNCLOS',
      'Territorial waters',
      'Exclusive Economic Zones',
      'High seas governance',
      'Regional agreements',
      // Sovereignty issues
      'Maritime boundaries',
      'Disputed waters',
      'South China Sea',
      'Arctic claims',
      // Management strategies
      'Marine Protected Areas',
      'Sustainable fishing',
      'Pollution control',
      'Conservation',
      // Ocean futures
      'Blue economy',
      'Ocean technology',
      'Climate change impacts',
    ],
  },
  {
    id: 'future-food',
    name: 'Future of Food',
    description: 'Food security, production systems and sustainability',
    icon: '🌾',
    color: 'bg-yellow-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 3 (Option)',
    subtopics: [
      // Global food patterns
      'Food production patterns',
      'Food consumption patterns',
      'Dietary changes',
      'Global food trade',
      // Food security
      'Food security concept',
      'Food availability',
      'Food access',
      'Food utilisation',
      'Food stability',
      // Causes of food insecurity
      'Physical causes',
      'Climate variability',
      'Soil degradation',
      'Human causes',
      'Poverty',
      'Conflict',
      'Trade barriers',
      // Agricultural systems
      'Commercial agriculture',
      'Subsistence agriculture',
      'Intensive farming',
      'Extensive farming',
      'Organic farming',
      // Technological change
      'Green Revolution',
      'GM crops',
      'Precision agriculture',
      'Vertical farming',
      'Lab-grown food',
      // Food system players
      'Agribusiness TNCs',
      'Smallholder farmers',
      'Governments',
      'International organisations',
      'NGOs',
      // Environmental impacts
      'Land use change',
      'Deforestation',
      'Water use',
      'Greenhouse emissions',
      'Biodiversity loss',
      // Food futures
      'Sustainable intensification',
      'Agroecology',
      'Food waste reduction',
      'Diet change',
      'Local food systems',
      // Food governance
      'FAO role',
      'Food aid',
      'Right to food',
    ],
  },
  {
    id: 'hazardous-earth',
    name: 'Hazardous Earth',
    description: 'Tectonic hazards and atmospheric hazards',
    icon: '⚠️',
    color: 'bg-orange-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'Component 3 (Option)',
    subtopics: [
      // Hazard concepts
      'Hazard definition',
      'Risk and vulnerability',
      'Resilience',
      'Hazard perception',
      // Plate tectonics
      'Earth structure',
      'Plate boundaries',
      'Constructive boundaries',
      'Destructive boundaries',
      'Conservative boundaries',
      'Hot spots',
      // Volcanic hazards
      'Volcanic eruption types',
      'Shield volcanoes',
      'Stratovolcanoes',
      'Volcanic hazards',
      'Lava flows',
      'Pyroclastic flows',
      'Lahars',
      'Ash fall',
      // Seismic hazards
      'Earthquake causes',
      'Earthquake impacts',
      'Ground shaking',
      'Liquefaction',
      'Tsunamis',
      // Atmospheric hazards
      'Tropical storms',
      'Hurricane formation',
      'Storm structure',
      'Storm impacts',
      'Tornadoes',
      'Droughts',
      'Floods',
      // Hazard impacts
      'Primary impacts',
      'Secondary impacts',
      'Economic impacts',
      'Social impacts',
      'Environmental impacts',
      // Hazard management
      'Prediction',
      'Monitoring',
      'Warning systems',
      'Preparedness',
      'Response',
      'Recovery',
      // Governance
      'National disaster management',
      'International cooperation',
      'Aid organisations',
      // Future challenges
      'Climate change and hazards',
      'Population growth',
      'Urbanisation',
    ],
  },
  // ============================================================================
  // FIELDWORK AND SKILLS
  // ============================================================================
  {
    id: 'skills',
    name: 'Geographical Skills and Investigation',
    description: 'Enquiry process, fieldwork and data skills',
    icon: '📊',
    color: 'bg-purple-600',
    examBoard: 'ocr',
    qualification: 'a-level',
    subject: 'geography',
    paperRestriction: 'All Components',
    subtopics: [
      // Enquiry skills
      'Enquiry process',
      'Question formulation',
      'Hypothesis development',
      'Methodology design',
      // Data collection
      'Primary data',
      'Secondary data',
      'Sampling methods',
      'Random sampling',
      'Systematic sampling',
      'Stratified sampling',
      // Fieldwork techniques
      'Questionnaires',
      'Interviews',
      'Observation',
      'Measurement techniques',
      'Environmental surveys',
      // Cartographic skills
      'OS maps',
      'Grid references',
      'Scale',
      'Cross-sections',
      'Thematic maps',
      'GIS',
      // Graphical skills
      'Line graphs',
      'Bar charts',
      'Scatter graphs',
      'Pie charts',
      'Histograms',
      'Choropleth maps',
      'Isolines',
      // Statistical skills
      'Central tendency',
      'Dispersion',
      'Correlation',
      "Spearman's rank",
      'Chi-squared',
      'Significance testing',
      // Analysis and evaluation
      'Data analysis',
      'Pattern identification',
      'Anomaly recognition',
      'Drawing conclusions',
      'Evaluation',
      'Limitations',
      // Communication
      'Report writing',
      'Geographical argument',
      'Evidence use',
    ],
  },
];

export function getOCRALevelGeographyTopicById(id: string): Topic | undefined {
  return ocrALevelGeographyTopics.find((topic) => topic.id === id);
}
