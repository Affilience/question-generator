// AQA GCSE Biology (8461) Topics
// Based on the official AQA specification
// Reference: https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification

import { Topic } from '@/types';

export const aqaBiologyTopics: Topic[] = [
  // ============================================================================
  // PAPER 1 TOPICS (B1-B4)
  // ============================================================================
  {
    id: 'aqa-gcse-biology-cell-biology',
    examBoard: 'aqa',
    name: 'Cell Biology',
    description: 'Cell structure, transport, division, and stem cells',
    icon: '🔬',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1.1 Cell structure
      'Eukaryotic and prokaryotic cells',
      'Animal cell structure',
      'Plant cell structure',
      'Bacterial cell structure',
      'Cell organelles and their functions',
      'Nucleus, cytoplasm, cell membrane',
      'Mitochondria and ribosomes',
      'Chloroplasts and vacuoles',
      'Cell wall in plants',
      'Plasmids in bacteria',
      // 4.1.2 Cell division
      'Chromosomes and DNA',
      'The cell cycle',
      'Mitosis',
      'Stages of mitosis',
      'Stem cells',
      'Embryonic stem cells',
      'Adult stem cells',
      'Therapeutic use of stem cells',
      'Meristems in plants',
      // 4.1.3 Transport in cells
      'Diffusion',
      'Factors affecting diffusion',
      'Osmosis',
      'Osmosis in plants and animals',
      'Active transport',
      'Active transport in root hair cells',
      'Active transport in the gut',
      // Microscopy (Required Practical 1)
      'Using a light microscope',
      'Magnification calculations',
      'Scale bars',
      'Resolution and magnification',
      'Electron microscopes',
      'Preparing microscope slides',
    ],
  },
  {
    id: 'aqa-gcse-biology-organisation',
    examBoard: 'aqa',
    name: 'Organisation',
    description: 'Cells, tissues, organs, and organ systems in plants and animals',
    icon: '🫀',
    color: 'bg-red-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.2.1 Principles of organisation
      'Cells, tissues, organs, organ systems',
      'Levels of organisation',
      // 4.2.2 Animal tissues, organs and organ systems
      'The digestive system',
      'Digestive enzymes',
      'Carbohydrases (amylase)',
      'Proteases (pepsin, trypsin)',
      'Lipases',
      'Bile and emulsification',
      'Factors affecting enzyme action',
      'Effect of pH on enzymes',
      'Effect of temperature on enzymes',
      'Lock and key model',
      'Food tests (Required Practical 4)',
      // The heart and blood vessels
      'The heart structure',
      'Heart chambers and valves',
      'Coronary arteries',
      'The cardiac cycle',
      'Blood vessels',
      'Arteries, veins, capillaries',
      'Blood composition',
      'Red blood cells',
      'White blood cells',
      'Platelets and plasma',
      // Cardiovascular disease
      'Coronary heart disease',
      'Stents',
      'Statins',
      'Heart valves replacement',
      'Artificial hearts',
      'Heart transplants',
      // Health issues
      'Health and disease',
      'Risk factors for disease',
      'Cancer',
      'Tumours (benign and malignant)',
      // 4.2.3 Plant tissues, organs and systems
      'Plant tissues',
      'Epidermal tissue',
      'Palisade mesophyll',
      'Spongy mesophyll',
      'Xylem and phloem',
      'Meristem tissue',
      'Plant organ system',
      'Transpiration',
      'Translocation',
      'Guard cells and stomata',
    ],
  },
  {
    id: 'aqa-gcse-biology-infection-response',
    examBoard: 'aqa',
    name: 'Infection and Response',
    description: 'Pathogens, the immune system, and disease prevention',
    icon: '🦠',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.3.1 Communicable diseases
      'Pathogens',
      'Types of pathogen',
      'Bacteria',
      'Viruses',
      'Protists',
      'Fungi',
      'How pathogens spread',
      // Viral diseases
      'Measles',
      'HIV/AIDS',
      'Tobacco mosaic virus (TMV)',
      // Bacterial diseases
      'Salmonella',
      'Gonorrhoea',
      // Fungal diseases
      'Rose black spot',
      // Protist diseases
      'Malaria',
      // Human defence systems
      'Physical barriers',
      'Skin',
      'Nose hairs and mucus',
      'Trachea and bronchi cilia',
      'Stomach acid',
      // Immune system
      'White blood cells',
      'Phagocytosis',
      'Antibody production',
      'Antitoxin production',
      // 4.3.2 Vaccination
      'How vaccines work',
      'Herd immunity',
      'Vaccine development',
      // 4.3.3 Antibiotics and painkillers
      'Antibiotics',
      'Antibiotic resistance',
      'MRSA',
      'Painkillers',
      'Developing new drugs',
      'Clinical trials',
      'Placebo effect',
      'Double-blind trials',
      // 4.3.4 Discovery and development of drugs
      'Drug discovery',
      'Digitalis from foxgloves',
      'Aspirin from willow',
      'Penicillin discovery',
      // Antiseptics (Required Practical 2)
      'Effect of antiseptics on bacteria',
      'Effect of antibiotics on bacteria',
      'Zones of inhibition',
      'Aseptic technique',
      // 4.3.5 Monoclonal antibodies (HT)
      'Production of monoclonal antibodies (H)',
      'Uses of monoclonal antibodies (H)',
      'Pregnancy tests (H)',
      'Cancer treatment (H)',
      // 4.3.6 Plant diseases
      'Plant diseases detection',
      'Plant defence responses',
      'Physical plant defences',
      'Chemical plant defences',
    ],
  },
  {
    id: 'aqa-gcse-biology-bioenergetics',
    examBoard: 'aqa',
    name: 'Bioenergetics',
    description: 'Photosynthesis and respiration',
    icon: '🌱',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.4.1 Photosynthesis
      'Photosynthesis equation',
      'Photosynthesis as endothermic',
      'Where photosynthesis occurs',
      'Role of chlorophyll',
      'Uses of glucose',
      'Glucose for respiration',
      'Glucose for cellulose',
      'Glucose for starch storage',
      'Glucose for lipids',
      'Glucose for proteins',
      // Rate of photosynthesis
      'Factors affecting photosynthesis rate',
      'Light intensity',
      'Carbon dioxide concentration',
      'Temperature',
      'Limiting factors',
      'Inverse square law (light intensity)',
      'Greenhouses and optimum conditions',
      // Required Practical 6
      'Investigating photosynthesis rate',
      'Effect of light intensity on photosynthesis',
      // 4.4.2 Respiration
      'Aerobic respiration equation',
      'Aerobic respiration in mitochondria',
      'Anaerobic respiration',
      'Anaerobic respiration in muscles',
      'Lactic acid',
      'Anaerobic respiration in yeast',
      'Fermentation',
      'Oxygen debt',
      'EPOC (excess post-exercise oxygen consumption)',
      // Metabolism
      'Metabolism definition',
      'Examples of metabolic reactions',
      'Response to exercise',
      'Heart rate during exercise',
      'Breathing rate during exercise',
    ],
  },

  // ============================================================================
  // PAPER 2 TOPICS (B5-B7)
  // ============================================================================
  {
    id: 'aqa-gcse-biology-homeostasis',
    examBoard: 'aqa',
    name: 'Homeostasis and Response',
    description: 'Nervous system, hormones, and maintaining stable internal conditions',
    icon: '🧠',
    color: 'bg-pink-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.5.1 Homeostasis
      'Homeostasis definition',
      'Importance of homeostasis',
      'Control systems',
      'Receptors, coordination centres, effectors',
      'Negative feedback',
      // 4.5.2 The human nervous system
      'Structure of the nervous system',
      'Central nervous system (CNS)',
      'Peripheral nervous system',
      'Neurones',
      'Sensory neurones',
      'Relay neurones',
      'Motor neurones',
      'Synapses',
      'Reflex actions',
      'Reflex arc',
      // Required Practical 7
      'Investigating reaction time',
      // 4.5.3 Hormonal coordination
      'The endocrine system',
      'Glands and hormones',
      'Pituitary gland (master gland)',
      'Thyroid gland',
      'Pancreas',
      'Adrenal glands',
      'Ovaries and testes',
      // Blood glucose control
      'Blood glucose regulation',
      'Insulin',
      'Glucagon',
      'Diabetes Type 1',
      'Diabetes Type 2',
      'Treating diabetes',
      // 4.5.4 Hormones in human reproduction
      'Puberty',
      'Hormones in the menstrual cycle',
      'Oestrogen',
      'Progesterone',
      'FSH (follicle stimulating hormone)',
      'LH (luteinising hormone)',
      // Contraception
      'Hormonal contraception',
      'Non-hormonal contraception',
      'Barrier methods',
      'Fertility treatments',
      'IVF',
      'FSH and LH in fertility',
      // Negative feedback in hormones (HT)
      'Negative feedback in menstrual cycle (H)',
      'Adrenaline (H)',
      'Thyroxine (H)',
      // 4.5.5 Plant hormones
      'Auxins',
      'Phototropism',
      'Gravitropism (geotropism)',
      'Uses of plant hormones',
      'Gibberellins (H)',
      'Ethene (H)',
      'Weedkillers',
      'Rooting powder',
      // Required Practical 8
      'Effect of light on plant growth',
      'Effect of gravity on plant growth',
    ],
  },
  {
    id: 'aqa-gcse-biology-inheritance',
    examBoard: 'aqa',
    name: 'Inheritance, Variation and Evolution',
    description: 'Genetics, evolution, and classification',
    icon: '🧬',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.6.1 Reproduction
      'Sexual reproduction',
      'Asexual reproduction',
      'Advantages and disadvantages of each',
      'Meiosis',
      'Gametes and fertilisation',
      'Genetic variation from meiosis',
      // DNA and the genome
      'DNA structure',
      'Double helix',
      'Genes and chromosomes',
      'The human genome',
      'Genome project significance',
      // Genetic inheritance
      'Alleles',
      'Dominant and recessive alleles',
      'Homozygous and heterozygous',
      'Genotype and phenotype',
      'Punnett squares',
      'Genetic crosses',
      'Monohybrid crosses',
      'Inherited disorders',
      'Polydactyly',
      'Cystic fibrosis',
      // Sex determination
      'Sex chromosomes',
      'XX and XY',
      'Inheritance of sex',
      // 4.6.2 Variation and evolution
      'Genetic variation',
      'Environmental variation',
      'Continuous and discontinuous variation',
      'Mutations',
      'Evolution by natural selection',
      'Darwin\'s theory',
      'Wallace\'s contribution',
      'Evidence for evolution',
      'Fossils',
      'Antibiotic resistant bacteria',
      // Selective breeding
      'Selective breeding process',
      'Uses of selective breeding',
      'Problems with selective breeding',
      // Genetic engineering
      'Genetic modification',
      'GM crops',
      'Insulin production',
      'Benefits and risks of GM',
      // Cloning
      'Tissue culture',
      'Cuttings',
      'Embryo transplants',
      'Adult cell cloning',
      'Dolly the sheep',
      // 4.6.3 The development of understanding of genetics
      'Theory of evolution',
      'Lamarck\'s theory',
      'Darwin\'s observations',
      'Mendel\'s work on inheritance',
      // 4.6.4 Classification
      'Linnaean classification',
      'Kingdoms',
      'Three-domain system',
      'Archaea, Bacteria, Eukaryota',
      'Carl Woese',
      'Evolutionary trees',
      'Binomial naming system',
    ],
  },
  {
    id: 'aqa-gcse-biology-ecology',
    examBoard: 'aqa',
    name: 'Ecology',
    description: 'Ecosystems, interdependence, and human impact on the environment',
    icon: '🌍',
    color: 'bg-teal-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 4.7.1 Adaptations, interdependence and competition
      'Communities',
      'Ecosystems',
      'Abiotic factors',
      'Biotic factors',
      'Adaptations',
      'Structural adaptations',
      'Behavioural adaptations',
      'Functional adaptations',
      'Extremophiles',
      'Competition',
      'Interdependence',
      'Food chains and food webs',
      // 4.7.2 Organisation of an ecosystem
      'Feeding relationships',
      'Producers',
      'Consumers',
      'Primary, secondary, tertiary consumers',
      'Predator-prey relationships',
      'Pyramids of biomass',
      // Required Practical 9
      'Sampling techniques',
      'Quadrats',
      'Transects',
      'Estimating population size',
      // Transfer of biomass
      'Energy transfer',
      'Efficiency of transfer',
      'Biomass for materials and fuels',
      // Decomposition
      'Decay',
      'Decomposers',
      'Factors affecting decomposition',
      'Composting',
      'Biogas generators',
      // Required Practical 10
      'Investigating decomposition rate',
      // 4.7.3 Biodiversity and the effect of human interaction
      'Biodiversity',
      'Importance of biodiversity',
      'Waste management',
      'Pollution',
      'Land use',
      'Deforestation',
      'Peat destruction',
      'Global warming',
      'Greenhouse gases',
      'Climate change effects',
      'Maintaining biodiversity',
      'Breeding programmes',
      'Seed banks',
      'Habitat protection',
      // 4.7.4 Trophic levels
      'Trophic levels and pyramids (H)',
      'Pyramids of biomass (H)',
      'Energy transfer calculations (H)',
      // Food security
      'Food security',
      'Factors affecting food security',
      'Sustainable fisheries',
      'Role of biotechnology',
      // Farming techniques
      'Intensive farming',
      'Biological control',
      'Hydroponics',
      'Fertilisers',
      'Pesticides',
      // Carbon cycle
      'The carbon cycle',
      'Photosynthesis in carbon cycle',
      'Respiration in carbon cycle',
      'Decomposition in carbon cycle',
      'Combustion in carbon cycle',
      // Water cycle
      'The water cycle',
      'Evaporation and condensation',
      'Precipitation',
      'Transpiration',
    ],
  },
];

export function getAQABiologyTopicById(id: string): Topic | undefined {
  return aqaBiologyTopics.find((topic) => topic.id === id);
}

export function getAQABiologyTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return aqaBiologyTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countAQABiologySubtopics(): number {
  return aqaBiologyTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
