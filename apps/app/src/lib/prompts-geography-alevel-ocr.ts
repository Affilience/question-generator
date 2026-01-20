// OCR A-Level Geography (H481) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/geography-h081-h481-from-2016/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR A-LEVEL GEOGRAPHY SPECIFICATION DETAILS (H481)
// ============================================================================

const OCR_ALEVEL_GEOG_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, explanation, basic application | Explain processes (e.g., water/carbon cycle flows, coastal processes), outline characteristics, describe patterns with supporting data |
| **Medium** | Analysis, application, evaluation | Examine relationships between factors, assess significance of processes, apply concepts to case studies, make connections across topics |
| **Hard** | Synthesis, critical evaluation, synoptic thinking | Evaluate major geographical debates, synthesise evidence across the specification, construct arguments addressing uncertainty and multiple futures |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires explicit synoptic links across all specification areas
- Demands critical engagement with geographical concepts (systems, feedback, thresholds, risk)
- Must evaluate different players' attitudes and actions on contested issues
- Requires consideration of futures and uncertainties in geographical systems
- No single correct answer - demands weighing evidence and reaching substantiated judgements

**Easy (4-6 marks):** Demonstrate knowledge of specific geographical processes or concepts. Questions test recall and understanding with requirement for specific examples.
**Medium (12-16 marks):** Apply knowledge to examine issues, assess significance, or compare approaches. Requires analysis and evaluation with case study support.
**Hard (33 marks):** Synoptic essays requiring comprehensive knowledge, explicit connections across the specification, and sophisticated evaluation of geographical debates.
`;

const OCR_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Geography Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change at a variety of scales | 30-40% |
| **AO2** | Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues | 30-40% |
| **AO3** | Use a variety of relevant quantitative, qualitative and fieldwork skills to: investigate geographical questions and issues; interpret, analyse and evaluate data and evidence; construct arguments and draw conclusions | 20-30% |

### Component Structure
| Component | Title | Content | Marks | Time | Weighting |
|-----------|-------|---------|-------|------|-----------|
| **01** | Physical Systems | Earth's Life Support + Landscape Systems | 66 | 1hr 30m | 22% |
| **02** | Human Interactions | Changing Spaces + Global Connections | 66 | 1hr 30m | 22% |
| **03** | Geographical Debates | Two debate options from five | 108 | 2hr 30m | 36% |
| **04** | Investigative Geography | Independent investigation (NEA) | 60 | N/A | 20% |

### Question Types
- Short answer (2-6 marks)
- Application/interpretation (8-12 marks)
- Extended response/essay (16-33 marks)

### Command Words
- **Explain**: Set out purposes or reasons
- **Examine**: Investigate closely; look at in detail
- **Assess**: Measure the value or quality; come to a judgement
- **Evaluate**: Make a judgement by weighing evidence; consider different opinions
- **Discuss**: Consider and offer interpretation; consider alternatives
`;

const OCR_ALEVEL_GEOG_QUESTION_TEMPLATES = `
## Authentic OCR A-Level Geography Question Formats

### Type 1: Short Answer (4-6 marks)
Format: "Explain/Outline [concept/process]"
**Examples:**
- "Explain how human activity affects the carbon cycle" [4 marks]
- "Outline the characteristics of a named coastal landform" [4 marks]
Marking: Point-marked, 1 mark per valid point with development

### Type 2: Resource-Based (8-12 marks)
Format: "Using Figure X and your own knowledge, [examine/explain/assess]..."
**Examples:**
- "Using Figure 3, examine the impacts of climate change on Arctic environments" [8 marks]
- "Using the resource and your own knowledge, assess the factors affecting disease distribution" [12 marks]
Marking: Levels-based, must integrate resource with own knowledge

### Type 3: Extended Response (16 marks)
Format: "Examine/Assess/Discuss..."
**Examples:**
- "Examine the view that globalisation benefits all countries equally" [16 marks]
- "Assess the relative importance of factors affecting hazard impacts" [16 marks]

**16-Mark Levels:**
- Level 4 (14-16): Thorough; accurate; well-supported evaluation
- Level 3 (10-13): Clear; mostly accurate; some evaluation
- Level 2 (5-9): Some knowledge; limited analysis; basic evaluation
- Level 1 (1-4): Limited; inaccurate; minimal analysis

### Type 4: Synoptic Essay (33 marks - Geographical Debates)
Format: "Evaluate/Assess/Discuss [major geographical issue]"
**Examples:**
- "Evaluate the extent to which climate change mitigation strategies can be successful" [33 marks]
- "Assess the effectiveness of international efforts to ensure food security" [33 marks]

33-mark questions require:
- Synoptic links across the specification
- Multiple perspectives and viewpoints
- Detailed case study evidence
- Substantiated, balanced conclusion
`;

const OCR_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level Geography Mark Scheme Conventions

### 33-Mark Extended Response Levels (Geographical Debates)

**Level 5 (28-33 marks):**
- Demonstrates comprehensive, detailed knowledge
- Thorough understanding of concepts and processes
- Effective analysis with clear, logical reasoning
- Well-developed evaluation with substantiated conclusions
- Highly relevant synoptic links throughout
- Excellent written communication

**Level 4 (21-27 marks):**
- Demonstrates good knowledge and understanding
- Clear analysis with logical reasoning
- Good evaluation with supported conclusions
- Clear synoptic links
- Good written communication

**Level 3 (14-20 marks):**
- Demonstrates reasonable knowledge and understanding
- Some analysis with partial reasoning
- Evaluation present but may lack development
- Some synoptic links attempted
- Reasonable written communication

**Level 2 (7-13 marks):**
- Demonstrates basic knowledge
- Limited analysis
- Basic or implicit evaluation
- Few synoptic links
- Basic written communication

**Level 1 (1-6 marks):**
- Demonstrates very limited knowledge
- Minimal analysis
- No evaluation
- No synoptic links
- Poor written communication

**0 marks:** Nothing worthy of credit

### 16-Mark Extended Response Levels

**Level 4 (14-16 marks):**
- Thorough and accurate knowledge
- Effective application and analysis
- Well-supported evaluation and conclusions

**Level 3 (10-13 marks):**
- Clear knowledge with some detail
- Clear application and analysis
- Some evaluation with support

**Level 2 (5-9 marks):**
- Some knowledge, may lack detail
- Limited application
- Basic evaluation

**Level 1 (1-4 marks):**
- Limited knowledge
- Very limited application
- Little or no evaluation

### Geographical Debates Topics
- Climate Change
- Disease Dilemmas
- Exploring Oceans
- Future of Food
- Hazardous Earth

### Key Requirements for High Marks
- Synoptic thinking: linking across topics
- Place-specific detail and evidence
- Balanced arguments with multiple perspectives
- Clear evaluative judgements
`;

// ============================================================================
// KEY GEOGRAPHICAL CONCEPTS
// ============================================================================

const OCR_KEY_GEOGRAPHICAL_CONCEPTS = `
## Key Geographical Concepts for OCR A-Level

### Systems Approach
- **Inputs**: Energy and matter entering the system
- **Outputs**: Energy and matter leaving the system
- **Stores/Components**: Where energy/matter is held
- **Flows/Transfers**: Movement between stores
- **Open systems**: Exchange energy and matter with surroundings
- **Closed systems**: Exchange energy only (e.g., global carbon cycle)

### Feedback Mechanisms
- **Positive feedback**: Amplifies change (e.g., ice-albedo feedback)
  - Ice melts > darker surface > absorbs more heat > more melting
  - Permafrost thaws > methane released > warming > more thawing
- **Negative feedback**: Dampens change, maintains equilibrium
  - Increased CO2 > more plant growth > more CO2 absorbed
  - Sea ice melts > more evaporation > more precipitation > ice regrowth

### Thresholds and Tipping Points
- **Threshold**: Critical level where system behaviour changes
- **Tipping point**: Irreversible change triggered
- Examples:
  - Amazon dieback threshold: 40% deforestation
  - Arctic sea ice tipping point: ice-free summers by 2050
  - Greenland ice sheet: 1.5-2C warming threshold
  - Thermohaline circulation shutdown: freshwater dilution

### Risk Perception and Vulnerability
- **Risk equation**: Risk = Hazard x Vulnerability / Capacity
- **Vulnerability factors**: Age, poverty, education, infrastructure
- **Capacity**: Ability to prepare, respond, recover
- **Perception influenced by**: Experience, media, culture, proximity

### Place and Scale
- **Scale**: Local, regional, national, global interactions
- **Place**: Unique characteristics, meanings, representations
- **Glocalization**: Local responses to global processes
- **Multi-scalar analysis**: Understanding connections across scales

### Dynamic Equilibrium
- Systems tend toward balance over time
- Disturbances cause adjustments
- Human activity often disrupts equilibrium
- Recovery time varies by system
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const OCR_EARTHS_LIFE_SUPPORT_SYSTEMS = `
## Earth's Life Support Systems - Topic Knowledge

### The Water Cycle

**Global Water Budget:**
| Store | Volume (km3) | Percentage |
|-------|-------------|------------|
| Oceans | 1,335,040,000 | 96.5% |
| Glaciers/Ice | 26,350,000 | 1.74% |
| Groundwater | 23,400,000 | 1.69% |
| Lakes | 176,400 | 0.013% |
| Soil moisture | 16,500 | 0.001% |
| Atmosphere | 12,900 | 0.001% |
| Rivers | 2,120 | 0.0002% |

**Key Processes:**
- Evaporation: 502,800 km3/year from oceans
- Precipitation: 458,000 km3/year over land
- Runoff: 44,800 km3/year to oceans
- Residence times: Atmosphere (9 days), Rivers (2 weeks), Deep groundwater (10,000+ years)

**Drainage Basin Hydrology:**
- Storm hydrographs: Rising limb, peak discharge, falling limb, lag time
- Factors affecting lag time: Basin shape, drainage density, urbanisation, soil type
- Baseflow vs quickflow components
- Antecedent conditions and infiltration capacity

**Human Impacts on Water Cycle:**
- Urbanisation: Increased impermeable surfaces, flashy hydrographs
- Deforestation: Reduced interception, increased runoff
- Irrigation: Depleted aquifers, altered evapotranspiration
- Dams: Modified flow regimes, sediment trapping
- Climate change: Altered precipitation patterns, glacial retreat

### The Carbon Cycle

**Global Carbon Stores:**
| Store | Carbon (GtC) | Notes |
|-------|--------------|-------|
| Lithosphere | 100,000,000 | Carbonate rocks, fossil fuels |
| Deep ocean | 37,100 | Dissolved inorganic carbon |
| Surface ocean | 900 | Biological pump active |
| Soil | 1,500-2,400 | Organic matter, peat |
| Atmosphere | 850 | CO2, increasing annually |
| Vegetation | 450-650 | Tropical forests dominant |

**Carbon Fluxes (GtC/year):**
- Photosynthesis: ~120 GtC absorbed
- Respiration/decomposition: ~119 GtC released
- Ocean-atmosphere exchange: ~90 GtC both ways
- Fossil fuel emissions: ~10 GtC (anthropogenic)
- Land use change: ~1-2 GtC (deforestation)

**Ocean Carbon Pump:**
- Physical pump: Cold water absorbs more CO2, sinks at poles
- Biological pump: Phytoplankton photosynthesis, sinking organic matter
- Ocean acidification: pH dropped 0.1 units since pre-industrial (30% more acidic)

**Terrestrial Carbon Storage:**
- Tropical rainforests: 250 tonnes C/hectare
- Peatlands: Store 30% of soil carbon on 3% of land
- Permafrost: 1,500 GtC stored, 2x atmospheric carbon
- Boreal forests: Largest terrestrial biome carbon store

### Climate Regulation

**Earth's Energy Budget:**
- Incoming solar radiation: 340 W/m2
- Reflected: 100 W/m2 (albedo 0.30)
- Absorbed by surface: 185 W/m2
- Greenhouse effect: Without it, Earth would be -18C

**Greenhouse Gases:**
| Gas | Pre-industrial | Current | GWP (100yr) |
|-----|---------------|---------|-------------|
| CO2 | 280 ppm | 420 ppm | 1 |
| CH4 | 700 ppb | 1,900 ppb | 28 |
| N2O | 270 ppb | 335 ppb | 265 |

**Albedo Values:**
- Fresh snow: 0.80-0.90
- Sea ice: 0.50-0.70
- Forest: 0.10-0.20
- Ocean: 0.06
- Ice-albedo feedback: Critical for Arctic amplification
`;

const OCR_LANDSCAPE_SYSTEMS = `
## Landscape Systems - Topic Knowledge

### Coastal Landscapes

**Wave Processes:**
- Constructive waves: Low frequency (<8/min), strong swash, beach building
- Destructive waves: High frequency (>10/min), strong backwash, erosion
- Wave refraction: Concentration of energy on headlands
- Longshore drift: Dominant direction affects sediment transport

**Erosion Processes:**
- Hydraulic action: Wave compression of air in cracks (pressure up to 30 tonnes/m2)
- Abrasion/Corrasion: Sediment used as tools (10-100x more erosion than pure water)
- Attrition: Particle breakdown and rounding
- Solution/Corrosion: Chemical weathering of limestone

**Landforms:**
- Cliffs: Recession rates vary (Holderness: 2m/year, Chalk: 0.1m/year)
- Wave-cut platforms: Maximum width ~500m before waves lose energy
- Caves, arches, stacks: Durdle Door, Old Harry Rocks
- Spits: Spurn Head (5km), Orford Ness
- Bars: Slapton Ley, Loe Bar

**Coastal Management:**
- Hard engineering: Sea walls (3,000-10,000/m), Groynes (5,000-50,000 each)
- Soft engineering: Beach nourishment (3-20/m3), Managed retreat
- ICZM: Integrated Coastal Zone Management, stakeholder involvement
- Shoreline Management Plans: Hold the line, advance, managed realignment, no intervention

**Case Study - Holderness Coast:**
- Fastest eroding coastline in Europe: 1.8m/year average
- 29 villages lost since Roman times
- Soft boulder clay geology
- 3km of land lost since 1846
- Mappleton protection (1991): 2m rock groynes, downstream effects

### Glacial Landscapes

**Glacial Processes:**
- Accumulation: Snow > firn > glacial ice (density 0.85 g/cm3)
- Ablation: Melting, calving, sublimation
- Mass balance: Accumulation - Ablation
- Rotational slip: Circular movement in corries
- Basal sliding: Temperature-dependent (warm-based glaciers)

**Erosion:**
- Plucking: Meltwater freezes, ice removes rock
- Abrasion: Striations, polished surfaces
- Freeze-thaw: Frost shattering on exposed surfaces
- Erosion rates: 1-10mm/year (faster than rivers)

**Landforms:**
- Corries: Snowdon (Llyn Idwal), rotational movement
- Aretes: Striding Edge, knife-edge ridges
- Pyramidal peaks: Matterhorn, multiple corries
- U-shaped valleys: Great Langdale, steep sides, flat floor
- Hanging valleys: Waterfalls (Lodore Falls, Lake District)
- Ribbon lakes: Windermere (16km long, 67m deep)
- Fjords: Sognefjord (1,308m deep)

**Deposition:**
- Till/Boulder clay: Unsorted, angular material
- Moraines: Lateral, medial, terminal, recessional
- Drumlins: Streamlined hills, "basket of eggs" topography
- Eskers: Sinuous ridges from subglacial streams
- Erratics: Transported rocks (Norber erratics)

**Periglacial Processes:**
- Permafrost: Continuous (>90%), discontinuous, sporadic
- Active layer: Seasonal thaw zone (0.3-4m)
- Frost heave: Ice lens growth
- Solifluction: Mass movement over frozen ground
- Patterned ground: Stone polygons, stripes

### Dryland Landscapes

**Weathering:**
- Insolation weathering: Temperature variation (50C range)
- Salt weathering: Crystal growth in pores
- Exfoliation: Onion-skin weathering
- Limited chemical weathering: Low moisture

**Aeolian Processes:**
- Saltation: 70-80% of sand transport
- Surface creep: Large particles pushed by saltation
- Suspension: Fine dust transported long distances
- Deflation: Removal of fine material (desert pavements)

**Landforms:**
- Sand dunes: Barchan, transverse, linear, star
- Yardangs: Elongated ridges parallel to wind
- Ventifacts: Wind-abraded rocks
- Wadis: Ephemeral stream valleys
- Playas: Dried lake beds
- Inselbergs: Isolated hills (Uluru)

**Desertification:**
- 12 million hectares lost annually
- Sahel expansion: 250km southward since 1900
- Causes: Overgrazing, deforestation, climate change
- Impacts: 2.6 billion people in drylands affected
`;

const OCR_CHANGING_SPACES_MAKING_PLACES = `
## Changing Spaces; Making Places - Topic Knowledge

### Place Concepts

**What is Place?**
- Location: Objective coordinates, physical position
- Locale: Physical setting for social relations
- Sense of place: Subjective, emotional attachment
- Placelessness: Erosion of distinctive places

**Place Identity:**
- Insiders vs outsiders: Different meanings and attachments
- Belonging and exclusion: Who feels at home?
- Lived experience: Everyday interactions shape meaning
- Collective memory: Shared histories and events

### Representation of Place

**Sources of Representation:**
- Media: News coverage, documentaries, social media
- Art and literature: Paintings, novels, poetry
- Photography: Tourist images, documentary photography
- Film and TV: Location filming, associations
- Marketing: Place branding, tourism campaigns

**Contested Representations:**
- Different groups may have different views
- Power dynamics influence dominant narratives
- Counter-representations challenge mainstream
- Example: Regenerated vs gentrified areas

### Agents of Change

**Economic Restructuring:**
- Deindustrialisation: Manufacturing decline
- Service sector growth: Finance, retail, hospitality
- Globalisation: TNCs, foreign investment
- Tourism: Heritage tourism, cultural tourism

**Demographic Change:**
- Migration: International and internal
- Suburbanisation: Middle-class flight
- Counter-urbanisation: Rural migration
- Gentrification: Social displacement

**Political Decisions:**
- Planning policies: Green belt, brownfield development
- Infrastructure: Transport investment
- Regeneration schemes: Urban Development Corporations
- Devolution: Local decision-making

### Place Studies

**Case Study - London Docklands:**
- LDDC (1981-1998): 17,000 homes, 85,000 jobs created
- Canary Wharf: Financial centre development
- Investment: 12 billion public/private
- Criticisms: Displacement of original communities, "trickle-down" didn't work
- Transport: Jubilee Line extension, DLR

**Case Study - Shoreditch, East London:**
- Industrial decline: Furniture, printing industries
- Creative industries: Tech City, Silicon Roundabout
- Gentrification: Average house prices tripled 2000-2020
- Social tensions: Original residents priced out
- Character change: Galleries, bars, boutiques

**Case Study - Rural Change (Cotswolds):**
- Counter-urbanisation: In-migration of wealthy retirees
- Second homes: 10% of housing stock
- Service decline: Schools, pubs, shops closed
- Tourism: 38 million visitors/year to AONB
- House prices: 10x local wages
`;

const OCR_GLOBAL_CONNECTIONS = `
## Global Connections - Topic Knowledge

### Global Systems

**Globalisation Indicators:**
- Trade: World exports increased from 2 trillion (1970) to 25 trillion (2023)
- FDI: 1.5 trillion annually
- Migration: 281 million international migrants (3.6% of population)
- Information: 5 billion internet users
- KOF Index: Measures globalisation (Switzerland ranked 1st)

**Key Actors:**
- TNCs: 100 largest TNCs revenue > GDP of 160 countries
- IGOs: WTO, IMF, World Bank
- NGOs: WWF, Oxfam, Greenpeace
- Nation states: Trade agreements, regulations
- Individuals: Consumers, migrants, activists

### Trade

**Trade Patterns:**
- Triad dominance: EU, NAFTA/USMCA, East Asia (75% of trade)
- South-South trade: Growing (25% of developing country trade)
- Commodity dependence: Many LIDCs rely on primary products
- Terms of trade: Often disadvantage primary producers

**Trade Agreements:**
- WTO: 164 members, Doha Round stalled
- Regional: EU single market, ASEAN, African Continental FTA
- Bilateral: UK-Japan CEPA, US-China tensions
- Fair trade: Addresses power imbalances

**Case Study - Fair Trade Coffee:**
- 1.9 million farmers in 73 countries
- Minimum price: 1.40/lb (Arabica)
- Premium: 0.20/lb for community development
- Criticisms: Small market share, certification costs
- Benefits: Stable income, improved conditions

### Migration

**Global Patterns:**
- Top destinations: USA (51m), Germany (16m), Saudi Arabia (13m)
- Top origins: India (18m), Mexico (11m), Russia (10m)
- Refugees: 35.3 million (2023)
- IDPs: 71.1 million
- Remittances: 656 billion (2022)

**Push-Pull Factors:**
- Economic: Wage differentials, employment
- Social: Family reunification, education
- Political: Conflict, persecution
- Environmental: Climate change, disasters

**Case Study - Poland to UK Migration:**
- EU enlargement 2004: Free movement
- Peak: 911,000 Polish-born in UK (2017)
- Employment: Agriculture, construction, services
- Impacts on Poland: Brain drain, labour shortages
- Brexit effects: Net migration reversed

### Global Governance

**Challenges:**
- Climate change: Paris Agreement, IPCC
- Inequality: Sustainable Development Goals
- Migration: UN Global Compact
- Security: NATO, UN peacekeeping
- Health: WHO, pandemic response

**Antarctica Case Study:**
- Antarctic Treaty (1959): 54 signatories
- No territorial claims recognised
- Scientific research only
- Madrid Protocol (1991): Environmental protection
- Fishing: CCAMLR manages Southern Ocean
- Tourism: 74,000 visitors (2019-20)
- Climate threats: Ice sheet instability
`;

// ============================================================================
// GEOGRAPHICAL DEBATES - DETAILED TOPIC KNOWLEDGE
// ============================================================================

const OCR_CLIMATE_CHANGE_DEBATE = `
## Climate Change - Geographical Debate

### Evidence for Climate Change

**Observed Changes:**
- Global temperature: +1.1C since pre-industrial (1850-1900)
- Rate of warming: 0.2C per decade (accelerating)
- Arctic sea ice: Declined 13% per decade since 1979
- Sea level: +3.7mm/year (2006-2018), accelerating from +1.7mm (20th century)
- Glaciers: 267 billion tonnes lost annually (2000-2019)

**IPCC AR6 Key Findings (2021-2023):**
- Human influence unequivocal
- 1.5C threshold likely exceeded 2030-2052
- 2C requires 43% emissions reduction by 2030
- Every fraction of degree matters
- Irreversible changes already occurring

**Palaeoclimate Evidence:**
- Ice cores: Vostok (800,000 years), CO2-temperature correlation
- Tree rings: Dendrochronology, temperature reconstruction
- Pollen analysis: Vegetation and climate records
- Ocean sediments: Foram shells indicate temperature

### Causes of Climate Change

**Natural Factors:**
- Milankovitch cycles: 100,000, 41,000, 23,000 year cycles
- Volcanic activity: SO2 cooling (Pinatubo: 0.5C drop)
- Solar variability: 0.1% variation over 11-year cycle
- Ocean circulation: El Nino/La Nina, PDO, AMO

**Anthropogenic Factors:**
- Fossil fuels: 89% of CO2 emissions
- Deforestation: 11% of emissions, reduced sink
- Agriculture: CH4 (livestock), N2O (fertilizers)
- Industry: Cement, chemicals, refrigerants
- Land use change: Altered albedo, water cycle

**Emissions by Sector (Global):**
| Sector | Percentage |
|--------|------------|
| Energy (electricity/heat) | 25% |
| Agriculture/Forestry | 24% |
| Industry | 21% |
| Transport | 14% |
| Buildings | 6% |
| Other energy | 10% |

### Impacts of Climate Change

**Physical Impacts:**
- Sea level rise: 0.3-1.1m by 2100 (depending on scenario)
- Extreme weather: 5x increase in heatwaves
- Precipitation changes: Wet areas wetter, dry areas drier
- Ocean acidification: 30% more acidic, coral bleaching
- Permafrost thaw: 25% reduction by 2100

**Human Impacts:**
- Health: Heat stress, disease spread, malnutrition
- Agriculture: 2-6% crop yield decline per decade
- Water security: 3-4 billion face scarcity
- Displacement: 216 million climate migrants by 2050
- Economic: 10-23% global GDP loss by 2100

**Case Study - Bangladesh:**
- Sea level rise: 1m = 17% land loss, 30 million displaced
- Cyclone intensity: Increasing, 2020 Amphan 128 deaths
- Flooding: 80% of country is floodplain
- Salination: Affecting 1 million hectares of farmland
- Adaptation: Floating gardens, cyclone shelters

### Mitigation Strategies

**International Agreements:**
- Paris Agreement (2015): Limit to 1.5-2C
- NDCs: Nationally Determined Contributions
- Net zero commitments: 90% of GDP covered
- Gap analysis: Current pledges = 2.4C

**Carbon Reduction:**
- Renewable energy: Solar cost dropped 89% (2010-2020)
- Electric vehicles: 10% of new car sales (2022)
- Energy efficiency: Buildings, industry, transport
- Carbon capture: 30 facilities operational globally
- Nature-based solutions: Forests, wetlands, oceans

**Carbon Trading:**
- EU ETS: World's largest carbon market
- Carbon price: 80-100 (2023)
- Criticisms: Permits over-allocated, carbon leakage
- Voluntary markets: Growing but unregulated

### Adaptation Strategies

**Approaches:**
- Infrastructure: Sea defences, flood barriers
- Agriculture: Drought-resistant crops, irrigation
- Urban planning: Green spaces, cooling
- Early warning systems: Flood forecasting
- Retreat: Managed relocation

**Case Study - Netherlands:**
- 26% below sea level, 60% flood risk
- Delta Works: 13 billion project
- Room for the River: Flood plain expansion
- Adaptation budget: 1 billion/year
- Innovation: Floating homes, water plazas
`;

const OCR_DISEASE_DILEMMAS_DEBATE = `
## Disease Dilemmas - Geographical Debate

### Disease Classification

**Infectious Diseases:**
- Communicable: Person-to-person transmission
- Vector-borne: Transmitted by animals/insects
- Water-borne: Contaminated water supply
- Airborne: Respiratory transmission

**Non-Communicable Diseases (NCDs):**
- Cardiovascular: Heart disease, stroke
- Cancer: Various types
- Respiratory: COPD, asthma
- Diabetes: Type 1 and 2
- NCDs: 74% of global deaths (2019)

### Disease Diffusion

**Hagerstrand's Model:**
- Expansion diffusion: Spreads outward from source
- Hierarchical diffusion: Major centres first
- Contagious diffusion: Direct contact spread
- Relocation diffusion: Migration of carriers

**Factors Affecting Diffusion:**
- Population density: Urban areas vulnerable
- Mobility: Transport networks spread disease
- Climate: Temperature, humidity affect vectors
- Healthcare: Infrastructure, access, quality
- Poverty: Malnutrition, sanitation, crowding

### Case Study - Malaria

**Global Burden:**
- Cases: 247 million (2021)
- Deaths: 619,000 (2021), 96% in Africa
- Economic impact: 12 billion/year in Africa
- Child mortality: 80% of deaths in under-5s
- Endemic in: 84 countries

**Transmission:**
- Vector: Female Anopheles mosquito
- Parasite: Plasmodium (P. falciparum most deadly)
- Climate requirements: >18C, humidity, standing water
- Incubation: 7-30 days

**Prevention and Control:**
- Bed nets: ITNs reduce cases by 50%
- Indoor spraying: IRS targets mosquitoes
- Prophylaxis: Drugs for travellers
- Drainage: Environmental management
- Vaccine: RTS,S (Mosquirix) 30% effective, pilot programmes

**Case Study - Sub-Saharan Africa:**
- 95% of global malaria deaths
- Nigeria: 27% of global cases
- Funding gap: 2.3 billion needed annually
- Drug resistance: Artemisinin resistance spreading
- Climate change: Expanding mosquito range

### Case Study - HIV/AIDS

**Global Statistics:**
- Living with HIV: 39 million (2022)
- New infections: 1.3 million/year
- Deaths: 630,000/year (down from 2m peak)
- Sub-Saharan Africa: 67% of global cases
- ART coverage: 76% of infected people

**Transmission and Prevention:**
- Sexual transmission: Most common globally
- Blood transmission: Needle sharing, transfusions
- Mother-to-child: Pregnancy, birth, breastfeeding
- Prevention: Condoms, PrEP, testing, education
- Treatment: ART (antiretroviral therapy)

**Case Study - South Africa:**
- Highest number of cases: 7.8 million
- Prevalence: 18% of adults
- PEPFAR: 6.5 billion US investment
- ART rollout: Free since 2004
- Life expectancy: Increased from 52 to 65 years
- Challenges: Stigma, inequality, healthcare access

### Healthcare Access

**Factors Affecting Access:**
- Economic: Affordability, insurance coverage
- Geographic: Distance to facilities, transport
- Social: Cultural barriers, gender inequality
- Political: Government investment, priorities

**Healthcare Indicators:**
| Indicator | High Income | Low Income |
|-----------|-------------|------------|
| Health spending/capita | 3,000+ | <50 |
| Doctors per 1,000 | 3+ | <0.1 |
| Hospital beds per 1,000 | 5+ | <1 |
| Life expectancy | 80+ | <60 |

**Case Study - Healthcare in India:**
- Population: 1.4 billion
- Public spending: 1.3% of GDP (low)
- Out-of-pocket: 63% of health expenditure
- Urban-rural divide: 70% doctors in cities
- Medical tourism: 500,000 patients/year
- Challenges: Universal Health Coverage goal 2030

### Role of International Organisations

**WHO:**
- Disease surveillance and response
- Health guidelines and standards
- Emergency response coordination
- Technical assistance to countries
- Budget: 6.72 billion (2022-23)

**Bill and Melinda Gates Foundation:**
- Malaria, TB, polio eradication
- Vaccine development (Gavi)
- 60 billion in grants since 2000
- Criticisms: Privatisation of health

**Doctors Without Borders (MSF):**
- Emergency medical care
- Conflict zones, epidemics
- Advocacy for access to medicines
- Independent of government funding
`;

const OCR_EXPLORING_OCEANS_DEBATE = `
## Exploring Oceans - Geographical Debate

### Ocean Environments

**Physical Characteristics:**
- Coverage: 71% of Earth's surface, 97% of water
- Volume: 1.335 billion km3
- Average depth: 3,688m
- Deepest point: Challenger Deep (10,935m)
- Temperature: -2C to 30C surface

**Ocean Zones:**
| Zone | Depth | Characteristics |
|------|-------|-----------------|
| Epipelagic | 0-200m | Sunlight, photosynthesis |
| Mesopelagic | 200-1,000m | Twilight zone |
| Bathypelagic | 1,000-4,000m | No light, cold |
| Abyssopelagic | 4,000-6,000m | Near freezing |
| Hadopelagic | 6,000m+ | Trenches |

**Ocean Currents:**
- Surface currents: Wind-driven, redistribute heat
- Thermohaline circulation: Density-driven, 1,000-year cycle
- Upwelling: Nutrient-rich water rises, high productivity
- Gulf Stream: 30 Sv flow, warms Western Europe

### Marine Ecosystems

**Coral Reefs:**
- Biodiversity: 25% of marine species
- Coverage: <0.1% of ocean floor
- Threats: Bleaching, acidification, pollution
- Economic value: 375 billion/year
- Great Barrier Reef: 2,300km, UNESCO listed

**Mangroves:**
- Carbon storage: 3-5x more than terrestrial forests
- Coastal protection: 80% wave energy reduction
- Nurseries: 75% of commercial fish species
- Loss: 35% since 1980s
- Restoration efforts: Bangladesh, Indonesia

**Deep Sea:**
- Hydrothermal vents: Chemosynthesis-based ecosystems
- Abyssal plains: Low biodiversity, detritus-feeders
- Seamounts: Biodiversity hotspots, 100,000+ globally
- Unknown species: 2 million estimated undiscovered

### Threats to Oceans

**Climate Change:**
- Warming: 90% of excess heat absorbed by oceans
- Sea level rise: Thermal expansion + ice melt
- Acidification: pH dropped 0.1 (30% more acidic)
- Deoxygenation: Dead zones increasing

**Pollution:**
- Plastic: 8 million tonnes/year entering oceans
- Great Pacific Garbage Patch: 1.6 million km2
- Microplastics: Found in deepest ocean trenches
- Oil spills: Deepwater Horizon (2010), 4.9m barrels
- Nutrient pollution: Agricultural runoff, dead zones

**Overfishing:**
- Overfished stocks: 34% (2017)
- Bycatch: 40% of global catch discarded
- Illegal fishing: 26 million tonnes/year
- Subsidies: 35 billion/year supporting overcapacity
- Case study: Atlantic cod collapse (Newfoundland)

### Ocean Governance

**UNCLOS (UN Convention on the Law of the Sea):**
- Territorial waters: 12 nautical miles
- EEZ: 200 nautical miles exclusive rights
- Continental shelf: Extended claims possible
- High seas: Beyond national jurisdiction (64% of ocean)
- Seabed authority: Manages mineral resources

**Marine Protected Areas:**
- Coverage: 8.2% of ocean (2023)
- Target: 30% by 2030 (30x30)
- Effectiveness: Varies widely
- Chagos MPA: 640,000 km2
- High seas protection: Treaty adopted 2023

**Case Study - Great Barrier Reef:**
- UNESCO World Heritage Site
- Marine Park Authority (1975)
- Zoning: Green zones (no-take), yellow, blue
- Crown-of-thorns control
- Climate threats: Mass bleaching 2016, 2017, 2020, 2022
- Reef 2050 Plan: 2 billion investment

### Ocean Resources

**Fisheries:**
- Global catch: 178 million tonnes (2020)
- Aquaculture: 88 million tonnes (growing 5%/year)
- Employment: 59 million people
- Top producers: China, Indonesia, India

**Minerals:**
- Polymetallic nodules: Manganese, nickel, cobalt
- Hydrothermal vents: Copper, gold, zinc
- Deep sea mining: Environmental concerns
- ISA: Regulates international seabed

**Energy:**
- Offshore oil/gas: 30% of global production
- Offshore wind: Growing rapidly
- Tidal energy: Potential 400 TWh/year
- Wave energy: Early development stage
`;

const OCR_FUTURE_OF_FOOD_DEBATE = `
## Future of Food - Geographical Debate

### Global Food Security

**Definition:** Physical, social, and economic access to sufficient, safe, nutritious food

**Current Situation:**
- Undernourished: 735 million (2022)
- Overweight/obese: 2.5 billion adults
- Food insecure: 2.4 billion (moderate or severe)
- Stunted children: 148 million
- Food waste: 1.3 billion tonnes/year

**Food Security Pillars:**
1. Availability: Sufficient production and imports
2. Access: Affordability and distribution
3. Utilisation: Nutrition and health
4. Stability: Consistent over time

### Agricultural Systems

**Traditional Agriculture:**
- Subsistence: Self-sufficiency focus
- Low inputs: Organic, labour-intensive
- Shifting cultivation: Slash and burn
- Pastoral: Nomadic herding
- Limitations: Low yields, vulnerable to climate

**Commercial Agriculture:**
- Intensive: High inputs, high yields
- Extensive: Large areas, lower intensity
- Monoculture: Single crop specialisation
- Contract farming: TNCs and smallholders
- Factory farming: Livestock industrialisation

### The Green Revolution

**Characteristics:**
- High-yielding varieties (HYVs): Wheat, rice, maize
- Irrigation expansion: Dams, groundwater
- Fertilizers and pesticides: Chemical inputs
- Mechanisation: Tractors, harvesters

**Impacts:**
- Yield increases: Wheat 3x, Rice 2x (1960-2000)
- Calorie availability: Increased 25%
- Land saved: 1.8 billion hectares
- India: Self-sufficient in cereals by 1970s

**Criticisms:**
- Environmental: Soil degradation, water depletion
- Social: Inequality, land concentration
- Economic: Input dependency, debt
- Health: Pesticide exposure
- Biodiversity: Variety loss

**Case Study - Punjab, India:**
- Breadbasket of India: 12% of national cereals
- Rice-wheat monoculture
- Water table: Falling 0.5m/year
- Soil degradation: Depleted nutrients
- Farmer debt: High suicide rates
- Diversification needed

### Agribusiness and TNCs

**Role of Agribusiness:**
- Vertical integration: Control from seed to supermarket
- Horizontal integration: Market domination
- Contract farming: Risk transfer to farmers
- Food processing: Adding value

**Major TNCs:**
| Company | Sector | Revenue (USD) |
|---------|--------|---------------|
| Cargill | Trading | 165 billion |
| JBS | Meat | 72 billion |
| Nestle | Processing | 100 billion |
| Monsanto/Bayer | Seeds/Chemicals | 50 billion |

**Impacts:**
- Efficiency: Economies of scale
- Innovation: GMOs, precision agriculture
- Concerns: Market power, small farmer squeeze
- Land grabbing: 50 million hectares since 2000

### Sustainable Food Production

**Approaches:**
- Agroecology: Working with natural systems
- Organic farming: No synthetic inputs
- Permaculture: Permanent agriculture design
- Agroforestry: Trees integrated with crops
- Urban agriculture: Local food production

**Technology Solutions:**
- Precision agriculture: GPS, sensors, drones
- Vertical farming: Controlled environment
- GMOs: Drought-resistant, pest-resistant
- Cultured meat: Lab-grown protein
- Hydroponics/Aquaponics: Soil-free growing

**Case Study - Sustainable Intensification:**
- Goal: More food, less environmental impact
- Techniques: Integrated pest management, conservation tillage
- System of Rice Intensification: 20-100% yield increase
- Push-pull technology: Intercropping for pest control
- Challenges: Knowledge transfer, initial investment

### Food Governance

**International Organisations:**
- FAO: Technical assistance, statistics
- WFP: Emergency food aid
- IFAD: Rural development
- WTO: Trade rules

**Challenges:**
- Climate change: 25% yield decline risk
- Water scarcity: 70% of freshwater for agriculture
- Population growth: 9.7 billion by 2050
- Dietary change: Meat demand increasing
- Conflict: Food as weapon, displacement
`;

const OCR_HAZARDOUS_EARTH_DEBATE = `
## Hazardous Earth - Geographical Debate

### Understanding Hazards

**Hazard Classification:**
- Geophysical: Earthquakes, volcanoes, tsunamis
- Meteorological: Hurricanes, tornadoes, heatwaves
- Hydrological: Floods, droughts
- Climatological: Wildfires, extreme temperatures
- Biological: Epidemics, pest infestations

**Risk Equation:**
Risk = Hazard x Vulnerability / Capacity

**Vulnerability Factors:**
- Physical: Location, building quality
- Social: Age, gender, disability
- Economic: Poverty, livelihoods
- Political: Governance, marginalisation
- Environmental: Ecosystem degradation

**Capacity:**
- Preparedness: Warning systems, plans
- Response: Emergency services, resources
- Recovery: Insurance, aid, resilience
- Mitigation: Building codes, land use planning

### Hazard Profiles (PAR Model)

**Pressure and Release Model:**
- Root causes: Economic systems, politics
- Dynamic pressures: Urbanisation, conflict
- Unsafe conditions: Housing, location
- Trigger event: The hazard
- Disaster: When vulnerability meets hazard

**Magnitude vs Frequency:**
- High magnitude, low frequency: Major earthquakes
- Low magnitude, high frequency: Seasonal floods
- Recurrence interval: Statistical prediction
- Return period: Average time between events

### Case Study - Tectonic Hazards

**Nepal Earthquake (2015):**
- Magnitude: 7.8 (Gorkha)
- Deaths: 8,900
- Injured: 22,000
- Buildings destroyed: 600,000
- Economic loss: 10 billion (50% of GDP)
- Response: International aid, SAR teams
- Recovery: Reconstruction slow, building code issues
- Vulnerability: Poor construction, mountainous terrain

**Japan Earthquake and Tsunami (2011):**
- Magnitude: 9.0 (Tohoku)
- Deaths: 18,500
- Displaced: 470,000
- Economic loss: 235 billion
- Fukushima: Nuclear disaster
- Prepared: Early warning, tsunami walls
- Exceeded capacity: 40m waves vs 10m walls
- Recovery: 10+ years reconstruction

**HIC vs LIDC Comparison:**
| Factor | Haiti 2010 | Japan 2011 |
|--------|------------|------------|
| Magnitude | 7.0 | 9.0 |
| Deaths | 316,000 | 18,500 |
| GDP loss | 120% | 4% |
| Building codes | Poor | Strict |
| Warning systems | Limited | Advanced |
| Insurance | <1% | 50%+ |
| Recovery time | Ongoing | 10 years |

### Case Study - Tropical Storms

**Typhoon Haiyan (2013) - Philippines:**
- Category: 5 (315 km/h winds)
- Deaths: 6,300
- Displaced: 4 million
- Damage: 2.8 billion
- Storm surge: 5-7m
- Tacloban: Devastated
- International response: 400 million aid
- Vulnerability: Coastal location, poverty

**Hurricane Katrina (2005) - USA:**
- Category: 3 at landfall
- Deaths: 1,836
- Displaced: 1.5 million
- Damage: 125 billion
- New Orleans: 80% flooded
- Levee failure: Engineering failure
- Response criticisms: FEMA delayed
- Social vulnerability: Lower 9th Ward

### Multi-Hazard Environments

**Why Some Areas are Multi-Hazard:**
- Plate boundaries: Earthquakes, volcanoes, tsunamis
- Tropical coasts: Hurricanes, floods, landslides
- Monsoon regions: Floods, droughts, landslides
- Island nations: Sea level rise, storms, earthquakes

**Case Study - Philippines:**
- Pacific Ring of Fire: 22 active volcanoes
- Typhoon belt: 20 typhoons/year
- Flood prone: Monsoon climate
- Earthquake prone: Philippine Fault
- Landslides: Deforestation, steep slopes
- Compound disasters: Multiple hazards interact

**Case Study - Japan:**
- 1,500+ earthquakes/year
- 110 active volcanoes
- Typhoon season: June-November
- Tsunami risk: Pacific coast
- Nuclear risk: Fukushima legacy
- Strategies: Technology, education, culture

### Hazard Management

**Mitigation:**
- Building codes: Earthquake-resistant design
- Land use planning: Avoid hazard zones
- Environmental: Mangroves, wetlands
- Infrastructure: Flood defences, storm drains

**Preparedness:**
- Early warning systems: Tsunami, hurricane
- Emergency plans: Evacuation routes
- Education: Drills, awareness
- Stockpiles: Food, water, medical supplies

**Response:**
- Search and rescue: First 72 hours critical
- Emergency shelters: Temporary housing
- Medical care: Triage, hospitals
- Coordination: Government, NGOs, international

**Recovery:**
- Build back better: Improved standards
- Livelihood restoration: Economic recovery
- Psychosocial support: Mental health
- Learning: Reviews, policy changes

### Governance and Resilience

**Sendai Framework (2015-2030):**
- Priority 1: Understanding disaster risk
- Priority 2: Strengthening governance
- Priority 3: Investing in resilience
- Priority 4: Enhancing preparedness
- Targets: Reduce deaths, affected, losses

**Community Resilience:**
- Local knowledge: Traditional practices
- Social capital: Networks, trust
- Economic diversity: Multiple livelihoods
- Self-organisation: Community groups
- Adaptive capacity: Learning, flexibility
`;

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const OCR_WORKED_EXAMPLES = `
## OCR A-Level Geography Worked Examples

### 4-Mark Short Answer Example

**Question:** Explain how deforestation affects the carbon cycle. [4 marks]

**Model Answer:**
1. Deforestation reduces carbon sequestration as fewer trees are available to absorb CO2 through photosynthesis [1 mark]
2. Burning or decomposition of cleared vegetation releases stored carbon back into the atmosphere as CO2 [1 mark]
3. Soil disturbance accelerates decomposition of organic matter, releasing additional carbon [1 mark]
4. Loss of root systems reduces carbon transfer to soil stores, and exposed soil may release carbon through erosion [1 mark]

**Mark Scheme:**
- 1 mark for each developed point linking deforestation to a specific carbon cycle change
- Maximum 4 marks
- Accept annotated diagram as partial response

---

### 16-Mark Extended Response Example

**Question:** Examine the view that globalisation has increased inequality between countries. [16 marks]

**Model Answer Structure:**

**Introduction:**
Globalisation involves increasing interconnections between people, places and economies. The question of whether this has increased or reduced inequality is contested, with evidence supporting both perspectives.

**Arguments for increased inequality:**
- Core-periphery model: HICs attract investment, brain drain from LIDCs
- Terms of trade: Primary commodity dependence disadvantages LIDCs (coffee prices fallen 70% in real terms since 1980)
- Race to the bottom: TNCs exploit low wages, weak regulations
- Debt dependency: Structural adjustment programmes imposed austerity
- Case study: Sub-Saharan Africa's share of global trade fell from 3% to 1% (1980-2020)

**Arguments against (globalisation reduced inequality):**
- Convergence: China, India, East Asia rapid growth
- Poverty reduction: 1 billion lifted from extreme poverty (1990-2015)
- Technology transfer: Access to knowledge, innovation
- Trade benefits: Export-led growth strategies
- Case study: China GDP per capita from 300 (1990) to 12,500 (2022)

**Synoptic links:**
- Environmental costs: Pollution outsourced to LIDCs
- Migration: Remittances benefit home countries
- Cultural: Westernisation vs local identities

**Evaluation/Conclusion:**
Overall, globalisation has produced winners and losers at multiple scales. While inter-country inequality between major economies may have reduced (due to Asian growth), inequality within countries and between the poorest nations and richest has increased. The geography of inequality has shifted rather than simply increased or decreased. The Kuznets curve suggests inequality may reduce as development proceeds, but this depends on effective governance and redistribution.

**Level 4 (14-16 marks) criteria:**
- Thorough knowledge across multiple aspects
- Balanced argument with detailed case studies
- Clear synoptic links
- Well-supported evaluative conclusion

---

### 33-Mark Synoptic Essay Example

**Question:** Evaluate the extent to which international responses to climate change have been successful. [33 marks]

**Essay Plan:**

**Introduction (define scope, thesis):**
- Define success criteria: emissions reduction, temperature targets, adaptation
- Acknowledge complexity: multiple actors, timescales, perspectives
- Thesis: Partial success in building frameworks, limited success in implementation

**Section 1: International Agreements (AO1/AO2)**
- UNFCCC (1992): Established framework, but no binding targets
- Kyoto Protocol (1997): First binding targets, but USA withdrew, limited coverage
- Paris Agreement (2015): Near-universal participation, but NDCs insufficient
- Statistics: Current pledges = 2.4C, gap of 23 GtCO2 from 1.5C pathway
- Evaluation: Success in diplomacy, failure in ambition

**Section 2: Mitigation Success/Failure (AO1/AO2)**
- Renewable growth: Solar 89% cost reduction (2010-2020)
- EU emissions: Down 24% from 1990 levels
- But: Global emissions still rising (36.8 GtCO2 in 2023)
- Carbon markets: EU ETS prices up but effectiveness debated
- Case study: Germany Energiewende - renewable from 6% to 46%, but also increased coal initially
- Evaluation: Technology progress, but implementation lagging

**Section 3: Adaptation and Finance (AO1/AO2)**
- Green Climate Fund: 10.3 billion pledged, but slow disbursement
- Adaptation gap: 160-340 billion/year needed, 21 billion provided
- Loss and damage: Finally agreed at COP27 (2022)
- LIDC vulnerability: Limited capacity to adapt
- Case study: Bangladesh Delta Plan 2100, 37 billion needed
- Evaluation: Progress on recognising need, inadequate finance

**Section 4: Alternative Actors (AO1/AO2 + synoptic)**
- TNCs: Net zero pledges, but greenwashing concerns
- Cities: C40 network, 96 cities committed to halving emissions
- NGOs: Pressure campaigns, litigation (Shell case)
- Individuals: Behaviour change, but structural constraints
- Synoptic link: Migration from climate impacts, food security threats
- Evaluation: Multi-actor approach needed beyond government

**Conclusion (substantiated judgement):**
- Success: Framework established, technology advanced, awareness increased
- Failure: Emissions still rising, 1.5C likely exceeded, inequality persists
- Overall: International responses have been necessary but not sufficient
- Future: Depends on accelerated action, climate justice, systemic change
- Quote: "Insufficient progress" (IPCC AR6)

**Level 5 (28-33 marks) criteria:**
- Comprehensive knowledge across specification
- Effective analysis with clear reasoning
- Well-developed evaluation throughout
- Substantiated conclusion
- Relevant synoptic links
- Excellent communication
`;

// ============================================================================
// SYNOPTIC ESSAY GUIDANCE
// ============================================================================

const OCR_SYNOPTIC_ESSAY_GUIDANCE = `
## Synoptic Essay Guidance (33-Mark Questions)

### What is Synopticity?
Synoptic assessment tests your ability to:
- Draw on knowledge from across the specification
- Make connections between different topics
- Apply understanding to unfamiliar contexts
- Demonstrate holistic geographical understanding

### Structure for 33-Mark Essays

**1. Introduction (2-3 paragraphs)**
- Define key terms in the question
- Establish the scope and scale of your answer
- Outline your argument/thesis
- Show awareness of different perspectives

**2. Main Body (4-6 paragraphs)**
Each paragraph should:
- Have a clear topic sentence linked to the question
- Include detailed case study evidence
- Reference geographical concepts and theories
- Make synoptic links where appropriate
- Include evaluation within the paragraph

**3. Conclusion (1-2 paragraphs)**
- Summarise key arguments
- Reach a substantiated judgement
- Acknowledge limitations/complexity
- May suggest future directions

### Synoptic Links by Debate

**Climate Change synoptic links:**
- Water cycle: Changed precipitation, drought, floods
- Carbon cycle: Feedback loops, stores, fluxes
- Coasts: Sea level rise, erosion, flooding
- Food: Agricultural impacts, food security
- Disease: Vector range expansion
- Migration: Climate refugees

**Disease Dilemmas synoptic links:**
- Globalisation: Disease spread through trade/travel
- Development: Healthcare access, vulnerability
- Climate: Vector distribution changes
- Food: Malnutrition, immune systems
- Water: Water-borne diseases
- Urbanisation: Disease density, slums

**Hazards synoptic links:**
- Globalisation: International response capacity
- Development: Vulnerability, recovery capacity
- Climate change: Changing hazard frequency/intensity
- Coasts: Tsunami, storm surge, sea level
- Migration: Displacement, vulnerability
- Governance: Disaster risk reduction

**Food synoptic links:**
- Water: Irrigation, drought, water stress
- Climate: Yield impacts, adaptation
- Trade: Global food system, commodity prices
- Development: Hunger, malnutrition
- Environment: Soil, biodiversity, pollution
- TNCs: Agribusiness, power, inequality

**Oceans synoptic links:**
- Climate: Warming, acidification, sea level
- Carbon cycle: Ocean as sink, biological pump
- Globalisation: Fishing, shipping, trade
- Resources: Energy, minerals, fishing
- Governance: International law, commons
- Ecosystems: Coral reefs, biodiversity

### Key Phrases for Synoptic Writing

**Making connections:**
- "This links to..."
- "Similarly, in the context of..."
- "At a different scale..."
- "This has implications for..."
- "Conversely..."
- "This exemplifies the broader pattern of..."

**Showing evaluation:**
- "However, this view can be challenged..."
- "The evidence suggests..."
- "On balance..."
- "The relative importance of..."
- "A more nuanced view would be..."
- "The extent to which this is true depends on..."

### Common Errors to Avoid

1. **Descriptive rather than analytical**: Always explain WHY, not just WHAT
2. **List-like structure**: Ensure paragraphs flow and connect
3. **Case study overload**: Quality over quantity, use studies to support arguments
4. **Forgetting the question**: Keep referring back to the specific question
5. **Weak conclusion**: Must make a clear judgement, not just summarise
6. **Missing synoptic links**: Deliberately plan where to make connections
7. **Unbalanced argument**: Consider multiple perspectives even if you have a view
`;

// ============================================================================
// TOPIC-SPECIFIC GUIDANCE
// ============================================================================

const OCR_TOPIC_GUIDANCE: Record<string, string> = {
  'ocr-alevel-geography-earths-life-support': `
## Earth's Life Support Systems - Question Guidance

**Key Concepts:**
- Systems approach: Inputs, outputs, stores, flows
- Feedback mechanisms: Positive and negative
- Dynamic equilibrium: Balance in natural systems
- Human disruption: Anthropogenic changes

**Case Studies to Include:**
- Amazon rainforest: Carbon store, deforestation impacts
- Arctic/Antarctic: Ice-albedo feedback, sea ice decline
- Tropical storm water cycle impacts
- River systems: Drainage basin hydrology

**Common Question Types:**
- Explain how [process] affects the water/carbon cycle [4 marks]
- Examine the role of [factor] in regulating climate [16 marks]
- Assess the extent to which human activity has disrupted [cycle] [16 marks]

**Key Statistics:**
- Atmospheric CO2: 280 ppm (pre-industrial) to 420 ppm (2023)
- Deforestation: 10 million hectares/year lost
- Ocean absorption: 30% of anthropogenic CO2
`,

  'ocr-alevel-geography-landscape-systems': `
## Landscape Systems - Question Guidance

**Key Concepts:**
- Geomorphic processes: Erosion, weathering, mass movement
- Sediment budgets and cells
- Landform development over time
- Human modification of landscapes

**Coastal Case Studies:**
- Holderness Coast: Erosion rates, management issues
- Dorset Coast (Jurassic Coast): Geological variety
- Mappleton: Hard engineering consequences
- Blackwater Estuary: Managed retreat

**Glacial Case Studies:**
- Lake District: Corries, U-shaped valleys, ribbon lakes
- Alps/Pyrenees: Contemporary glaciation
- Iceland: Glacier retreat monitoring

**Common Question Types:**
- Explain the formation of [landform] [4 marks]
- Examine the factors affecting [coastal/glacial process] [8 marks]
- Assess the effectiveness of [management approach] [16 marks]
`,

  'ocr-alevel-geography-changing-spaces': `
## Changing Spaces; Making Places - Question Guidance

**Key Concepts:**
- Place identity and meaning
- Insider/outsider perspectives
- Representation and media
- Agents of place change

**Case Studies:**
- Contrasting urban places: Inner city vs suburb
- Rural change: Gentrification, counter-urbanisation
- Regeneration areas: London Docklands, Salford Quays
- Your local place study for NEA

**Common Question Types:**
- Explain how [factor] shapes place identity [4 marks]
- Examine the role of [agent] in changing places [12 marks]
- Assess the extent to which places are represented differently [16 marks]

**Key Theories:**
- Massey's sense of place
- Relph's placelessness
- Harvey's time-space compression
`,

  'ocr-alevel-geography-global-connections': `
## Global Connections - Question Guidance

**Key Concepts:**
- Globalisation drivers and impacts
- Trade patterns and inequalities
- Migration flows and impacts
- Global governance challenges

**Case Studies:**
- Trade: Coffee commodity chain, textile industry
- Migration: EU free movement, refugee crisis
- TNCs: Apple, Nestle supply chains
- Governance: Antarctica, Arctic, WTO

**Common Question Types:**
- Explain how [factor] drives globalisation [4 marks]
- Examine the impacts of migration on [place/region] [12 marks]
- Assess the view that globalisation creates winners and losers [16 marks]

**Key Statistics:**
- Global trade: 25 trillion/year
- International migrants: 281 million
- Remittances: 656 billion/year
`,

  'ocr-alevel-geography-climate-change': `
## Climate Change - Geographical Debate Guidance

**Key Concepts:**
- Evidence for climate change (multiple sources)
- Natural vs anthropogenic causes
- Impacts at different scales
- Mitigation vs adaptation debate

**Essential Statistics:**
- Temperature rise: 1.1C since pre-industrial
- Sea level rise: 3.7mm/year
- Arctic ice: 13% decline per decade
- Paris target: 1.5-2C limit

**Case Studies:**
- Bangladesh: Sea level rise, adaptation
- Netherlands: Adaptation strategies
- Germany: Energiewende
- Maldives: Existential threat

**Synoptic Links:**
- Water cycle: Intensification
- Carbon cycle: Feedbacks
- Coastal systems: Sea level rise
- Food security: Agricultural impacts
`,

  'ocr-alevel-geography-disease-dilemmas': `
## Disease Dilemmas - Geographical Debate Guidance

**Key Concepts:**
- Disease classification and diffusion
- Epidemiological transition
- Healthcare access inequalities
- Role of international organisations

**Essential Statistics:**
- Malaria: 247 million cases, 619,000 deaths/year
- HIV: 39 million living with HIV
- NCDs: 74% of global deaths
- Healthcare spending: 3,000+ (HIC) vs <50 (LIC) per capita

**Case Studies:**
- Malaria in Sub-Saharan Africa
- HIV/AIDS in South Africa
- Healthcare in India
- COVID-19 pandemic (recent, use carefully)

**Synoptic Links:**
- Globalisation: Disease spread
- Climate change: Vector ranges
- Development: Vulnerability
- Water: Water-borne diseases
`,

  'ocr-alevel-geography-exploring-oceans': `
## Exploring Oceans - Geographical Debate Guidance

**Key Concepts:**
- Ocean systems and environments
- Marine ecosystem threats
- Ocean governance challenges
- Resource exploitation vs conservation

**Essential Statistics:**
- Ocean coverage: 71% of Earth
- Coral reefs: 25% of marine species
- Plastic pollution: 8 million tonnes/year
- Protected areas: 8.2% of ocean

**Case Studies:**
- Great Barrier Reef: Management, threats
- Pacific Garbage Patch: Plastic pollution
- North Sea: Overfishing
- Southern Ocean: CCAMLR governance

**Synoptic Links:**
- Climate change: Warming, acidification
- Carbon cycle: Ocean sink
- Food security: Fisheries
- Globalisation: Shipping, exploitation
`,

  'ocr-alevel-geography-future-of-food': `
## Future of Food - Geographical Debate Guidance

**Key Concepts:**
- Food security dimensions
- Agricultural systems comparison
- Green Revolution impacts
- Sustainable food production

**Essential Statistics:**
- Undernourished: 735 million
- Food waste: 1.3 billion tonnes/year
- Water use: 70% for agriculture
- Land grabbing: 50 million hectares since 2000

**Case Studies:**
- Punjab, India: Green Revolution
- Sub-Saharan Africa: Food insecurity
- Fair trade: Coffee, cocoa
- Urban farming: Singapore, Cuba

**Synoptic Links:**
- Water cycle: Irrigation, drought
- Climate change: Yield impacts
- Globalisation: Trade, TNCs
- Development: Hunger, poverty
`,

  'ocr-alevel-geography-hazardous-earth': `
## Hazardous Earth - Geographical Debate Guidance

**Key Concepts:**
- Hazard profiles and risk equation
- Vulnerability and capacity
- Management cycle (mitigation, preparedness, response, recovery)
- Multi-hazard environments

**Essential Statistics:**
- Disaster deaths: ~60,000/year
- Economic losses: 200+ billion/year
- Insurance gap: 70% uninsured
- Displacement: 32 million/year

**Case Studies:**
- Nepal earthquake (2015): LIDC response
- Japan (2011): HIC, multi-hazard
- Typhoon Haiyan (2013): Philippines
- Haiti vs Chile earthquakes: Comparison

**Synoptic Links:**
- Climate change: Changing hazard frequency
- Development: Vulnerability, capacity
- Globalisation: International response
- Migration: Displacement
`
};

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  return `You are an expert OCR A-Level Geography examiner creating exam-style questions.

${OCR_ALEVEL_GEOG_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_GEOG_QUESTION_TEMPLATES}

${OCR_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS}

${OCR_KEY_GEOGRAPHICAL_CONCEPTS}

${topicGuidance}

## Topic-Specific Knowledge

${getTopicKnowledge(topic.id)}

## Worked Examples

${OCR_WORKED_EXAMPLES}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR A-Level Geography specification.

**Keep Physical and Human Geography distinct:**
- Physical Geography topics: Test physical processes, landforms, climate, ecosystems - NOT human impacts as the main focus
- Human Geography topics: Test human processes, urbanisation, globalisation - NOT physical geography as the main focus
- Only blend content when the topic explicitly requires it (e.g., coastal management includes both)

**DO NOT include:**
- University-level geographic theory beyond A-Level specification
- Obscure case studies not commonly used in A-Level teaching
- Statistical methods beyond those required in the specification
- Other social science content (sociology, economics) unless directly relevant to human geography

**For the topic "${topic.name}", test ONLY the content specified in the OCR A-Level Geography syllabus.**

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds
2. **Authentic OCR Style**: Match real paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Include Specific Data**: Use real statistics, case studies, place names
5. **Appropriate Difficulty**:
   - Easy: Short answer (4-6 marks) - knowledge recall with some application
   - Medium: Extended response (12-16 marks) - analysis and evaluation required
   - Hard: Synoptic essay (33 marks) - comprehensive evaluation with synoptic links

## Response Format
Return JSON with:
- "content": Question text (include figure descriptions if resource-based)
- "marks": Total marks
- "solution": Model answer demonstrating A-Level standard with specific evidence
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('geography')}`;
}

export function getOCRALevelGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicGuidance = OCR_TOPIC_GUIDANCE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a short answer question testing knowledge (AO1).

**Question Types:**
- "Explain [concept/process]" [4 marks]
- "Outline [feature/characteristic]" [4 marks]
- "Describe [pattern/distribution]" [4 marks]

**Requirements:**
- Test understanding of a specific geographical process or concept
- Expect 4 developed points or 2 points with elaboration
- May include a resource (Figure) for stimulus
- Award 1 mark per valid point with development

**Example Marking:**
- Point identified [1 mark]
- Development/example/elaboration [1 mark]

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an extended response requiring analysis and evaluation (AO1/AO2).

**Question Types:**
- "Examine [issue/relationship]" [16 marks]
- "Assess [importance/impact]" [12 marks]
- "Using the resource, analyse..." [12 marks]
- "Using a case study, explain..." [12 marks]

**Requirements:**
- Requires balanced discussion with multiple perspectives
- Must include specific place/case study evidence
- Should show application of geographical concepts
- Evaluation should be throughout, not just at the end

**16-Mark Level Descriptors:**
- Level 4 (14-16): Thorough knowledge; effective evaluation; well-supported judgement
- Level 3 (10-13): Clear knowledge; good analysis; some evaluation
- Level 2 (5-9): Some knowledge; limited analysis; basic evaluation
- Level 1 (1-4): Limited knowledge; minimal analysis; no real evaluation

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 33-mark synoptic essay for Geographical Debates (AO1 + AO2).

**Question Types:**
- "Evaluate [major geographical issue]" [33 marks]
- "Assess the extent to which..." [33 marks]
- "Discuss the view that..." [33 marks]
- "To what extent do you agree that..." [33 marks]

**33-Mark Requirements:**
- Requires comprehensive knowledge across the specification
- Must make explicit synoptic links to other topics
- Needs multiple detailed case studies with specific evidence
- Requires well-developed evaluation throughout
- Must reach a substantiated, balanced conclusion
- Excellent written communication expected

**33-Mark Level Descriptors:**
- Level 5 (28-33): Comprehensive knowledge; thorough analysis; synoptic throughout; substantiated conclusion
- Level 4 (21-27): Good knowledge; clear analysis; clear synoptic links; supported conclusion
- Level 3 (14-20): Reasonable knowledge; some analysis; partial synoptic links; some evaluation
- Level 2 (7-13): Basic knowledge; limited analysis; few synoptic links; basic evaluation
- Level 1 (1-6): Very limited knowledge; minimal analysis; no synoptic links; no evaluation

${OCR_SYNOPTIC_ESSAY_GUIDANCE}

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level Geography question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${topicGuidance}

${difficultyGuidance[difficulty]}

## Key Statistical Data to Include
${getKeyStatistics(topic.id, subtopic)}

Return valid JSON:
{
  "content": "question text with mark allocation [X marks]",
  "marks": number,
  "solution": "detailed model answer with case studies and statistics",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

// Helper function to get topic-specific knowledge
function getTopicKnowledge(topicId: string): string {
  if (topicId.includes('earths-life-support') || topicId.includes('water') || topicId.includes('carbon')) {
    return OCR_EARTHS_LIFE_SUPPORT_SYSTEMS;
  }
  if (topicId.includes('landscape') || topicId.includes('coastal') || topicId.includes('glacial') || topicId.includes('dryland')) {
    return OCR_LANDSCAPE_SYSTEMS;
  }
  if (topicId.includes('changing-spaces') || topicId.includes('place')) {
    return OCR_CHANGING_SPACES_MAKING_PLACES;
  }
  if (topicId.includes('global-connections') || topicId.includes('globalisation') || topicId.includes('migration') || topicId.includes('trade')) {
    return OCR_GLOBAL_CONNECTIONS;
  }
  if (topicId.includes('climate-change')) {
    return OCR_CLIMATE_CHANGE_DEBATE;
  }
  if (topicId.includes('disease')) {
    return OCR_DISEASE_DILEMMAS_DEBATE;
  }
  if (topicId.includes('ocean')) {
    return OCR_EXPLORING_OCEANS_DEBATE;
  }
  if (topicId.includes('food')) {
    return OCR_FUTURE_OF_FOOD_DEBATE;
  }
  if (topicId.includes('hazard')) {
    return OCR_HAZARDOUS_EARTH_DEBATE;
  }
  return '';
}

// Helper function to get key statistics for specific subtopics
function getKeyStatistics(topicId: string, subtopic: string): string {
  const subtopicLower = subtopic.toLowerCase();

  // Climate change statistics
  if (subtopicLower.includes('climate') || subtopicLower.includes('carbon') || subtopicLower.includes('greenhouse')) {
    return `
**Climate Statistics:**
- Global temperature rise: +1.1C since pre-industrial
- CO2 levels: 420 ppm (vs 280 ppm pre-industrial)
- Sea level rise: 3.7mm/year (accelerating)
- Arctic sea ice decline: 13% per decade
- Paris Agreement target: Limit to 1.5-2C
- Current trajectory: 2.4C with current pledges`;
  }

  // Water cycle statistics
  if (subtopicLower.includes('water') || subtopicLower.includes('hydrological') || subtopicLower.includes('precipitation')) {
    return `
**Water Cycle Statistics:**
- Ocean store: 96.5% of global water
- Groundwater: 30% of freshwater
- Atmospheric residence time: 9 days
- Annual evaporation: 502,800 km3 from oceans
- Annual precipitation over land: 458,000 km3`;
  }

  // Disease statistics
  if (subtopicLower.includes('disease') || subtopicLower.includes('health') || subtopicLower.includes('malaria') || subtopicLower.includes('hiv')) {
    return `
**Disease Statistics:**
- Malaria: 247 million cases, 619,000 deaths/year
- HIV: 39 million living with HIV globally
- NCD deaths: 74% of global deaths
- Healthcare spending gap: $3,000+ (HIC) vs <$50 (LIC)
- Life expectancy gap: 80+ years (HIC) vs <60 years (LIC)`;
  }

  // Food security statistics
  if (subtopicLower.includes('food') || subtopicLower.includes('agriculture') || subtopicLower.includes('hunger')) {
    return `
**Food Security Statistics:**
- Undernourished: 735 million globally
- Food waste: 1.3 billion tonnes/year
- Agriculture water use: 70% of freshwater
- Land grabbing: 50 million hectares since 2000
- Green Revolution yield increase: Wheat 3x, Rice 2x`;
  }

  // Hazard statistics
  if (subtopicLower.includes('hazard') || subtopicLower.includes('disaster') || subtopicLower.includes('earthquake') || subtopicLower.includes('volcano')) {
    return `
**Hazard Statistics:**
- Average annual disaster deaths: ~60,000
- Economic losses: $200+ billion/year
- Insurance gap: 70% of losses uninsured
- Climate-related disasters: 80% of natural disasters
- Displacement: 32 million/year from disasters`;
  }

  // Ocean statistics
  if (subtopicLower.includes('ocean') || subtopicLower.includes('marine') || subtopicLower.includes('coral') || subtopicLower.includes('fishing')) {
    return `
**Ocean Statistics:**
- Ocean coverage: 71% of Earth's surface
- Coral reef biodiversity: 25% of marine species
- Plastic pollution: 8 million tonnes/year entering oceans
- Overfished stocks: 34%
- Protected areas: 8.2% of ocean`;
  }

  // Globalisation statistics
  if (subtopicLower.includes('global') || subtopicLower.includes('trade') || subtopicLower.includes('migration') || subtopicLower.includes('tnc')) {
    return `
**Globalisation Statistics:**
- Global trade: $25 trillion/year
- International migrants: 281 million
- Remittances: $656 billion/year
- Top 100 TNCs revenue: Greater than GDP of 160 countries
- Internet users: 5 billion globally`;
  }

  // Coastal statistics
  if (subtopicLower.includes('coast') || subtopicLower.includes('erosion') || subtopicLower.includes('sea level')) {
    return `
**Coastal Statistics:**
- Holderness erosion rate: 1.8m/year average
- Sea wall cost: $3,000-10,000 per metre
- Beach nourishment cost: $3-20 per cubic metre
- Population within 100km of coast: 40%
- Sea level rise by 2100: 0.3-1.1m (scenario dependent)`;
  }

  return '';
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 6 };
    case 'medium':
      return { min: 12, max: 16 };
    case 'hard':
      return { min: 33, max: 33 };
  }
}
