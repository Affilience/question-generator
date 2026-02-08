// OCR GCSE Geography B (J384) Question Generation Prompts
// Based on official OCR specification and mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/geography-b-geography-for-enquiring-minds-j384-from-2016/

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';


// ============================================================================
// OCR GCSE GEOGRAPHY B SPECIFICATION DETAILS (J384)
// ============================================================================

const OCR_GCSE_GEOG_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Geography B Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of locations, places, processes, environments and different scales | 15% |
| **AO2** | Demonstrate geographical understanding of concepts, interrelationships between human and physical processes | 25% |
| **AO3** | Apply knowledge and understanding to interpret, analyse and evaluate geographical information; construct arguments and draw conclusions | 35% |
| **AO4** | Select, adapt and use a variety of skills and techniques to investigate questions and communicate findings | 25% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Our Natural World | Global hazards, Changing climate, Ecosystems, UK landscapes | 70 | 1hr 15m | 35% |
| **Paper 2** | People and Society | Urban futures, Development dynamics, UK in 21st century, Resource reliance | 70 | 1hr 15m | 35% |
| **Paper 3** | Geographical Exploration | Fieldwork, Geographical skills, Decision making exercise | 60 | 1hr 30m | 30% |

### Command Words
- **State/Identify**: Give a brief answer (AO1)
- **Describe**: Set out characteristics; give an account (AO3)
- **Explain**: Set out reasons; make relationships clear (AO2)
- **Suggest**: Apply knowledge to offer possible reasons (AO2/AO3)
- **Assess**: Weigh up the importance/success; reach a judgement (AO3)
- **Evaluate**: Review evidence; reach a substantiated conclusion (AO3)
- **Justify**: Support a case with evidence; explain why chosen (AO3)

### Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, description | Name features, state facts, describe patterns from maps/data |
| **Medium** | Explanation, application, interpretation | Explain causes/effects, interpret data, apply concepts to case studies |
| **Hard** | Evaluation, synthesis, judgement | Assess management strategies, weigh competing factors, reach substantiated conclusions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires evaluation of effectiveness (of strategies, responses, management approaches)
- Must consider multiple perspectives (economic, social, environmental)
- Demands integration of case study knowledge with conceptual understanding
- Requires sustained argument reaching a justified conclusion
- Must weigh up advantages and disadvantages before making judgement
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const OCR_GCSE_GEOG_TOPIC_KNOWLEDGE: Record<string, string> = {
  'ocr-gcse-geog-global-hazards': `## Global Hazards Topic Knowledge

### Global Atmospheric Circulation
- **Hadley Cell** (0-30°): Hot air rises at equator, moves poleward, sinks at 30°
- **Ferrel Cell** (30-60°): Air moves poleward at surface, toward equator at altitude
- **Polar Cell** (60-90°): Cold air sinks at poles, moves toward equator

### Tropical Storm Formation
**Conditions Required:**
- Sea temperature: 27°C+ (to depth of 50m)
- Location: 5-30° from equator (Coriolis effect needed)
- Low wind shear (allows vertical development)
- Pre-existing disturbance (e.g., easterly wave)

**Storm Structure:**
- Eye: Calm, 20-40km diameter, sinking air
- Eye wall: Most intense winds and rainfall
- Spiral rain bands: Extend outwards

### Tropical Storm Case Study: Hurricane Katrina 2005
**Location:** Gulf of Mexico, USA (Louisiana, Mississippi)
**Category:** 5 (reduced to 3 at landfall)
**Wind speed:** 280 km/h
**Deaths:** 1,836
**Affected:** 15 million people
**Cost:** $125 billion (costliest US natural disaster)

**Impacts:**
- New Orleans: 80% flooded (levees breached)
- 300,000 homes destroyed
- 1 million people displaced
- Oil production disrupted

**Responses:**
- Superdome: 30,000 sheltered
- $100 billion in federal aid
- National Guard deployed
- Long-term: $14.5 billion levee upgrade

### Tropical Storm Case Study: Cyclone Nargis 2008 (LIDC)
**Location:** Myanmar (Burma)
**Category:** 4
**Deaths:** 138,000
**Affected:** 2.4 million
**Cost:** $10 billion

**Why Deaths Higher:**
- No warning system
- Low-lying Irrawaddy Delta
- Government initially refused international aid
- Poor infrastructure

### Tectonic Hazards
**Plate Boundaries:**
- **Constructive**: Mid-Atlantic Ridge (plates separate, magma rises)
- **Destructive**: Pacific Ring of Fire (oceanic subducts)
- **Conservative**: San Andreas Fault (plates slide)
- **Collision**: Himalayas (continental plates collide)

### Earthquake Case Study: Haiti 2010 (LIDC)
- Magnitude: 7.0
- Depth: 13km (shallow = more damage)
- Deaths: 316,000
- Homeless: 1.5 million
- Cost: $14 billion (120% of GDP)

**Why So Deadly:**
- No building codes (concrete not reinforced)
- Poverty (no resources for preparation)
- Port destroyed (delayed aid)
- Cholera outbreak afterwards (9,000+ deaths)

### Earthquake Case Study: Japan 2011 (AC)
- Magnitude: 9.0 (4th largest ever recorded)
- Deaths: 15,894 (mostly tsunami)
- Tsunami: Waves up to 40m
- Fukushima: Nuclear meltdown

**Why Fewer Deaths:**
- Strict building codes (shock absorbers)
- Early warning system (30 seconds)
- Regular earthquake drills
- Well-equipped emergency services`,

  'ocr-gcse-geog-changing-climate': `## Changing Climate Topic Knowledge

### Evidence for Climate Change
**Natural Records:**
- Ice cores: Air bubbles show past CO₂ levels (Vostok: 800,000 years)
- Tree rings: Width indicates growing conditions
- Pollen in peat: Shows past vegetation

**Historical Records:**
- Painting of frozen Thames
- Crop records, harvest dates
- Diary entries (Pepys, Evelyn)

**Current Measurements:**
- Temperature records since 1850
- Sea level gauges
- Satellite imagery of ice

### Causes of Climate Change

**Natural Causes:**
- **Milankovitch cycles**: Earth's orbit changes
  - Eccentricity: 100,000 years (orbit shape)
  - Axial tilt: 41,000 years
  - Precession: 26,000 years (wobble)
- **Solar output**: Sunspot activity varies
- **Volcanic eruptions**: SO₂ reflects sunlight

**Human Causes (Enhanced Greenhouse Effect):**
- Fossil fuel burning: 80% of CO₂ emissions
- Deforestation: 10% of emissions
- Agriculture: Methane from cattle, rice paddies
- Industry: CO₂ from cement, steel

### Climate Change Statistics
- Temperature rise: +1.1°C since pre-industrial
- CO₂ levels: 280ppm (1750) → 420ppm (2023)
- Sea level rise: +20cm since 1900
- Arctic ice: -13% per decade
- Glacier retreat: Most retreating globally

### Impacts of Climate Change

**Environmental:**
- Sea level rise threatens low-lying areas
- Coral bleaching (Great Barrier Reef: 50% coral lost)
- Species migration and extinction
- More frequent extreme weather

**Economic:**
- Agriculture: Changed growing seasons
- Tourism: Ski resorts, beach erosion
- Insurance: Rising costs from disasters
- Infrastructure damage

**Social:**
- Climate refugees (predicted 200 million by 2050)
- Water scarcity and conflict
- Health impacts (heat stress, disease spread)

### Managing Climate Change

**Mitigation (Reducing Causes):**
- Renewable energy (UK: 40% of electricity)
- Electric vehicles
- Carbon capture
- Paris Agreement (2015): Limit to 1.5°C

**Adaptation (Living with Change):**
- Thames Barrier (raised 100+ times since 1982)
- Drought-resistant crops
- Flood defences
- Building design changes`,

  'ocr-gcse-geog-ecosystems': `## Ecosystems Topic Knowledge

### Ecosystem Basics
- **Biotic**: Living components (plants, animals, bacteria)
- **Abiotic**: Non-living components (water, soil, climate)
- **Producer**: Makes own food (photosynthesis)
- **Consumer**: Eats other organisms
- **Decomposer**: Breaks down dead matter
- **Food chain**: Linear feeding relationship
- **Food web**: Interconnected food chains
- **Nutrient cycle**: Movement of nutrients through ecosystem

### UK Small-Scale Ecosystem: Epping Forest
- Location: Essex, Greater London
- Type: Deciduous woodland
- Area: 2,400 hectares
- Trees: Oak, beech, hornbeam
- Fauna: Fallow deer, 50 bird species

**Interdependence:**
- Oak trees provide acorns for squirrels
- Dead leaves decomposed by fungi
- Woodpeckers nest in tree holes
- Change in one component affects all

### Global Ecosystems Distribution
- **Tropical rainforest**: Equator (0-10°)
- **Hot desert**: 15-30° N and S
- **Savanna**: 10-20° N and S
- **Temperate deciduous**: 40-60° N
- **Coniferous forest**: 50-70° N
- **Tundra**: 60°+ N

### Tropical Rainforest: Amazon
**Location:** South America, mainly Brazil (60%)
**Area:** 5.5 million km² (largest rainforest)
**Climate:** 26-28°C year-round, 2000mm+ rainfall

**Characteristics:**
- Biodiversity: 10% of all species
- 3 million species, 2,500 tree species
- Four layers: Emergent, canopy, understorey, forest floor
- Thin, nutrient-poor soil (nutrients in vegetation)

**Plant Adaptations:**
- Buttress roots: Support in thin soil
- Drip tips: Shed excess water
- Lianas: Climbing vines reach light
- Epiphytes: Grow on trees for light

**Animal Adaptations:**
- Camouflage: Jaguars, frogs
- Prehensile tails: Monkeys grip branches
- Bright colours: Warning or attraction
- Nocturnal: Avoid daytime heat

### Deforestation in Amazon
**Rates:**
- 17% already deforested
- Peak: 27,000 km² lost (2004)
- Current: ~10,000 km² per year

**Causes:**
- Cattle ranching: 80% of deforested land
- Soy farming: Brazil = largest exporter
- Logging: Legal and illegal
- Mining: Gold, iron ore, bauxite
- Roads: Trans-Amazonian Highway

**Impacts:**
- Climate change: Less CO₂ absorbed
- Biodiversity loss: Species extinction
- Indigenous peoples: Loss of homeland
- Soil erosion: Without tree roots
- Water cycle disruption: Less transpiration

### Sustainable Rainforest Management
- **REDD+**: Pay countries to protect forests
- **Selective logging**: Only mature trees
- **Ecotourism**: Income without destruction
- **Agroforestry**: Crops grown with trees
- **Forest Code (Brazil)**: 80% preservation required`,

  'ocr-gcse-geog-uk-landscapes': `## UK Landscapes Topic Knowledge

### UK Physical Landscape Overview
**Upland Areas:**
- Scottish Highlands
- Lake District
- Pennines
- Snowdonia

**Lowland Areas:**
- South East England
- East Anglia
- Midlands

### Coastal Processes

**Erosion:**
- **Hydraulic action**: Water pressure in cracks
- **Abrasion**: Rocks scrape cliff
- **Attrition**: Rocks collide, become smaller
- **Corrosion**: Chemical dissolving

**Transportation:**
- **Longshore drift**: Material moves along coast
- Waves approach at angle (prevailing wind)
- Swash: Up beach at angle
- Backwash: Down beach perpendicular

**Deposition:**
- When energy decreases
- Sheltered areas
- Change in coastline direction

### Coastal Landforms

**Erosional:**
- Headlands and bays: Differential erosion
- Wave-cut platform: Cliff retreat leaves flat rock
- Cave → Arch → Stack → Stump sequence

**Depositional:**
- Beach: Sand/shingle accumulation
- Spit: Beach extends across bay
- Bar: Spit joins two headlands
- Tombolo: Links island to mainland

### Coastal Case Study: Swanage Bay, Dorset
**Geology:**
- Headlands: Hard chalk and limestone
- Bay: Softer clay eroded faster
- Famous features: Old Harry Rocks (stacks)

**Management:**
- Sea wall protects town
- Groynes trap beach material
- Beach nourishment

### River Processes

**Erosion:**
- Hydraulic action: Force of water
- Abrasion: Load scrapes bed
- Attrition: Load particles collide
- Solution: Dissolves rock

**Transportation:**
- Traction: Large rocks roll
- Saltation: Stones bounce
- Suspension: Fine particles float
- Solution: Dissolved minerals

### River Landforms

**Upper Course:**
- V-shaped valleys: Vertical erosion
- Interlocking spurs
- Waterfalls: Hard over soft rock
- Gorges: Waterfall retreat

**Middle/Lower Course:**
- Meanders: S-shaped bends
- Ox-bow lakes: Cut-off meanders
- Floodplains: Flat valley floor
- Levees: Natural embankments

### River Case Study: River Tees
**Location:** North Pennines to North Sea
**Length:** 137km

**Upper Course Features:**
- High Force waterfall (21m drop)
- Whin Sill (hard dolerite over soft shale)
- V-shaped valley at Cauldron Snout

**Lower Course:**
- Wide floodplain
- Meanders near Yarm
- Industrial area at Middlesbrough

### UK Flooding Case Study: Carlisle 2005
**Location:** Cumbria, where Eden, Caldew, and Petteril meet
**Date:** January 2005
**Rainfall:** 200mm in 36 hours

**Impacts:**
- 3 deaths
- 1,800 properties flooded
- Cost: £250 million
- Carlisle United's pitch underwater

**Causes:**
- Saturated ground from previous rain
- Three rivers converge at city
- Urban surfaces increased runoff

**Responses:**
- £38 million flood defence scheme
- New flood walls and embankments
- Pumping stations
- Early warning systems`,

  'ocr-gcse-geog-urban-futures': `## Urban Futures Topic Knowledge

### Global Urbanisation
- 1950: 30% urban
- 2008: >50% urban (first time in history)
- 2050: Predicted 68% urban
- Rate: 200,000 people move to cities daily

### Urbanisation Patterns
| Region | % Urban | Growth Rate |
|--------|---------|-------------|
| North America | 82% | Slow |
| Europe | 75% | Slow |
| Latin America | 81% | Medium |
| Asia | 50% | Fast |
| Africa | 43% | Fastest |

### Megacities (10+ million)
- 1950: 2 (New York, Tokyo)
- 2020: 34
- 2030: Predicted 43
- Most in Asia and Africa

### UK City Case Study: Bristol
**Location:** South West England, River Avon
**Population:** 463,000 (1.1 million urban area)

**Economic Importance:**
- GDP: £14 billion
- Aerospace: Airbus, Rolls-Royce
- Creative industries: BBC, Aardman
- Finance and professional services

**Migration:**
- International: 91 languages spoken
- Internal: Students, young professionals
- Net inflow: 5,000 per year

**Opportunities:**
- Employment: Diverse economy
- Education: 2 universities
- Culture: Music, street art (Banksy)
- Environment: European Green Capital 2015

**Challenges:**
- Housing: Average £290,000 (8x salary)
- Inequality: Clifton vs. Hartcliffe
- Traffic: 500,000 daily car journeys
- Air quality: Clean Air Zone 2022

**Sustainable Features:**
- Bristol Legible City: Wayfinding system
- Cycle lanes: 10% cycle to work
- Electric buses: First Bus fleet
- Brownfield development: Temple Quarter

### LIDC City Case Study: Lagos, Nigeria
**Location:** South West Nigeria, Atlantic coast
**Population:** 21 million (largest in Africa)
**Growth:** 300,000 new residents per year

**Economic Importance:**
- 25% of Nigeria's GDP ($136 billion)
- 60% of industrial jobs
- Major port: 80% of imports/exports
- Nollywood: 2nd largest film industry

**Opportunities:**
- Employment in ports, industry
- Education: University of Lagos
- Healthcare facilities
- Cultural opportunities

**Challenges:**
- **Slums**: 60% live in informal settlements
- **Makoko** (floating slum): 100,000 people on stilts
- **Water**: Only 10% have piped water
- **Sanitation**: Only 10% connected to sewage
- **Traffic**: 3-hour average commute
- **Waste**: 10,000 tonnes/day, 40% collected

**Improving Quality of Life:**
- Eko Atlantic: $6 billion new city on reclaimed land
- BRT (Bus Rapid Transit): 200,000 passengers/day
- Makoko community: Self-built schools
- Infrastructure investment`,

  'ocr-gcse-geog-development-dynamics': `## Development Dynamics Topic Knowledge

### Measuring Development
| Indicator | Definition | HIC | LIDC |
|-----------|------------|-----|------|
| GNI per capita | Average income | $42,000 (UK) | $340 (Malawi) |
| Life expectancy | Average lifespan | 84 (Japan) | 54 (Chad) |
| Literacy rate | % who read/write | 99% (UK) | 19% (Niger) |
| Infant mortality | Deaths per 1,000 | 2 (Japan) | 80 (Sierra Leone) |
| HDI | Composite 0-1 | 0.957 (Norway) | 0.354 (Niger) |

### The Development Gap
- Richest 10% own 76% of global wealth
- Poorest 50% own 2%
- 700 million in extreme poverty (<$1.90/day)
- 10% of world undernourished

### Causes of Uneven Development

**Physical:**
- Climate extremes (drought, flood)
- Natural disasters
- Landlocked location
- Limited resources
- Disease burden

**Human:**
- Colonial legacy
- Unfair trade
- Debt
- Conflict and corruption
- Brain drain

### Development Strategies

**Top-Down:**
- Large-scale projects
- Government/TNC led
- Examples: Dams, industry
- Pros: Big impact, jobs
- Cons: Expensive, may not help poorest

**Bottom-Up:**
- Small-scale, local
- Community involvement
- Examples: Microfinance, intermediate technology
- Pros: Appropriate, empowering
- Cons: Slow, limited scale

### LIDC Case Study: India
**Location:** South Asia
**Population:** 1.4 billion (2nd largest)
**Status:** Emerging and Developing Country (EDC)

**Colonial Legacy:**
- British rule 1858-1947
- Extraction of resources
- Infrastructure for export (railways)
- Partition: Hindu-Muslim violence

**Geopolitical Position:**
- Border disputes: Pakistan, China
- Nuclear power
- Regional influence

**Economic Development:**
- GDP: $3.5 trillion (5th largest)
- Growth: 6-7% per year
- IT services: Bangalore "Silicon Valley of India"
- Manufacturing: "Make in India" initiative

**TNCs in India:**
- Tata (Indian): Steel, cars, tea
- Samsung (Korean): Phones, electronics
- Unilever: Consumer goods

**Changing Economy:**
| Sector | 1950 | 2020 |
|--------|------|------|
| Agriculture | 52% | 17% |
| Industry | 15% | 25% |
| Services | 33% | 58% |

**Environmental Issues:**
- Air pollution: Delhi world's most polluted city
- Water: Ganges heavily polluted
- Deforestation: 1.5% per year

### International Aid
**Types:**
- Bilateral: UK→India (ended 2015)
- Multilateral: World Bank, UN
- NGO: Oxfam, WaterAid

**Aid Debate:**
| For | Against |
|-----|---------|
| Saves lives in emergencies | Creates dependency |
| Builds infrastructure | May be tied to donor interests |
| Transfers expertise | Corruption reduces effectiveness |`,

  'ocr-gcse-geog-uk-21st-century': `## UK in the 21st Century Topic Knowledge

### UK Economic Overview
- GDP: £2.2 trillion (6th largest economy)
- Population: 67 million
- Urban: 84%
- Employment: Services 80%, Industry 15%, Agriculture 1%

### Economic Sectors Change
| Sector | 1970 | 2020 |
|--------|------|------|
| Primary | 3% | 1% |
| Secondary | 35% | 15% |
| Tertiary | 50% | 65% |
| Quaternary | 12% | 19% |

### Deindustrialisation
**Causes:**
- Globalisation (cheaper labour abroad)
- Automation
- Exhaustion of resources (coal, iron)
- Competition from Asia

**Examples:**
- Coal: 200,000 miners (1970) → 0 (2020)
- Steel: 320,000 jobs → 30,000
- Shipbuilding: Most yards closed

**Impacts:**
- Regional unemployment
- Social deprivation
- Derelict land
- Loss of community

### North-South Divide
| Indicator | South East | North East |
|-----------|-----------|------------|
| GVA per head | £34,000 | £21,000 |
| Unemployment | 4% | 6% |
| Life expectancy | 82 | 79 |
| House prices | £400,000 | £140,000 |

### Government Strategies
**Northern Powerhouse:**
- Investment in transport (HS2, Northern Rail)
- Science corridors
- Devolution to city regions

**Enterprise Zones:**
- Tax breaks for businesses
- Simplified planning
- Example: Liverpool Waters

### Migration to UK
**International Migration:**
- Net migration: 200,000+ per year
- Top origins: India, Poland, Pakistan
- Reasons: Work, study, family

**Impacts:**
- **Positive**: Fill skill gaps, cultural diversity, younger workforce
- **Negative**: Pressure on services, housing, some wage depression

### Case Study: Cambridge
**Location:** East England
**Type:** Post-industrial growth city

**Cambridge Science Park:**
- Established: 1970 (UK's first)
- Companies: 100+ (biotech, IT, engineering)
- Jobs: 7,500
- Links: University of Cambridge research

**Benefits:**
- High-tech jobs
- Innovation and patents
- Attracts international talent
- Spin-off companies

**Challenges:**
- House prices (average £500,000)
- Traffic congestion
- Pressure on green belt`,

  'ocr-gcse-geog-resource-reliance': `## Resource Reliance Topic Knowledge

### Global Resource Distribution
**Fossil Fuels:**
- Oil: Middle East 48%, Americas 32%
- Gas: Russia 24%, Middle East 40%
- Coal: USA, China, Australia

**Water:**
- 70% of Earth is water
- 97% is salt water
- 3% fresh (mostly ice)
- <1% available for human use

### Energy Consumption
**By Region (per capita):**
- North America: 300 GJ/person/year
- Europe: 150 GJ
- World average: 75 GJ
- Africa: 20 GJ

### Energy Sources

**Non-Renewable:**
| Source | % Global | Advantages | Disadvantages |
|--------|----------|------------|---------------|
| Oil | 33% | High energy density | CO₂, finite, spills |
| Coal | 27% | Abundant, cheap | Most polluting |
| Gas | 24% | Cleanest fossil fuel | Fracking concerns |
| Nuclear | 4% | No CO₂, reliable | Waste, accidents |

**Renewable:**
| Source | % Global | Advantages | Disadvantages |
|--------|----------|------------|---------------|
| Hydro | 7% | Reliable, no emissions | Habitat loss |
| Wind | 3% | Clean, cheap to run | Intermittent |
| Solar | 2% | Low maintenance | Weather dependent |
| Biomass | 1% | Carbon neutral | Land use |

### Energy Security
**Secure:** Own resources or reliable imports
**Insecure:** Depend on unstable regions

**UK Energy:**
- Imports: 36% of energy
- North Sea: Declining production
- Nuclear: Aging plants
- Renewables: Growing (40% of electricity)

### Water Security
**Water Stress:** Using >25% of renewable supply
- 17 countries face extreme stress
- 2 billion lack safe drinking water

### Case Study: Middle East Oil
**Importance:**
- 48% of world oil reserves
- OPEC controls 40% of production
- Economic dependence (Saudi: 90% of exports)

**Conflicts:**
- Gulf War (1990-91): Iraq invades Kuwait
- Iraq War (2003): US invasion
- ISIS: Seized oil fields
- Iran sanctions: Supply disruption

**Environmental Issues:**
- Oil spills
- Gas flaring
- Water scarcity from extraction

### Sustainable Resource Use
**Reduce:**
- Energy efficient appliances
- Insulation, LED lighting
- Smart meters

**Reuse:**
- Second-hand goods
- Refurbishment

**Recycle:**
- UK target: 65% by 2035
- Current: 45%

### Case Study: Iceland (Renewable Energy)
**Energy Mix:**
- 100% electricity from renewable
- Geothermal: 25% electricity, 90% heating
- Hydro: 75% electricity

**Geothermal Power:**
- Located on Mid-Atlantic Ridge
- Hot rocks near surface
- Nesjavellir Power Station: 120MW

**Benefits:**
- Energy security
- Low emissions
- Cheap electricity
- Attracts industry (aluminium)`,

  'ocr-gcse-geog-fieldwork-skills': `## Fieldwork and Skills Topic Knowledge

### Enquiry Process
1. Question/Hypothesis
2. Planning methodology
3. Data collection
4. Data presentation
5. Analysis and interpretation
6. Conclusions
7. Evaluation

### Sampling Methods
| Method | Description | Use |
|--------|-------------|-----|
| Random | Using random numbers | Avoids bias |
| Systematic | Regular intervals | Full coverage |
| Stratified | Proportional to groups | Representative |

### Primary Data Collection
**Quantitative:**
- Questionnaires (closed questions)
- Counts (traffic, pedestrian)
- Measurements (river, environmental)
- Surveys (land use, environmental quality)

**Qualitative:**
- Interviews
- Photographs
- Field sketches
- Open questions

### River Fieldwork
**Equipment:**
- Tape measure
- Ranging poles
- Flow meter / orange
- Clinometer
- Stopwatch

**Measurements:**
- Width: Tape across river
- Depth: Ruler at intervals
- Velocity: Time for float over distance
- Gradient: Clinometer

**Hypothesis:** "Channel width increases downstream"

### Urban Fieldwork
**Environmental Quality Survey:**
Rate 1-5: Litter, noise, graffiti, traffic, green space

**Land Use Survey:**
Record building uses along transect

**Hypothesis:** "Environmental quality decreases toward CBD"

### Data Presentation
| Data Type | Best Presentation |
|-----------|-------------------|
| Change over time | Line graph |
| Categories | Bar chart |
| Proportions | Pie chart |
| Distribution | Choropleth map |
| Correlation | Scatter graph |
| Location | Located bar/proportional symbol |

### OS Map Skills
**Grid References:**
- 4-figure: 1km² square
- 6-figure: 100m accuracy
- "Along corridor, up stairs"

**Scale:**
- 1:25,000: 4cm = 1km
- 1:50,000: 2cm = 1km

**Contours:**
- Close = steep
- Far apart = gentle
- V-shape upstream = valley

### Statistical Skills
**Averages:**
- Mean: Sum ÷ count
- Median: Middle value
- Mode: Most frequent

**Measures of Spread:**
- Range: Max - Min
- Interquartile range: Q3 - Q1

**Percentage Change:**
(New - Old) / Old × 100

### Decision-Making Exercise (DME)
Paper 3 includes a pre-release resource booklet

**Skills Required:**
- Analyse multiple sources
- Identify stakeholder views
- Weigh up options
- Justify decision with evidence
- Consider sustainability`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const OCR_GCSE_GEOG_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: 4-Mark Explain Question
**Question:** Explain how tropical storms can cause flooding. [4 marks]

**Model Answer:**
Tropical storms cause flooding through several mechanisms. Heavy rainfall, which can exceed 500mm in 24 hours, leads to surface water flooding when drainage systems are overwhelmed (1). Rivers quickly reach capacity as the saturated ground cannot absorb more water, causing them to burst their banks (1). Storm surge is particularly dangerous, where low pressure and strong winds push seawater onto land - during Hurricane Katrina, the storm surge reached 8m, flooding 80% of New Orleans (1). Finally, prolonged rainfall saturates the ground, increasing surface runoff and making flooding more likely in subsequent days (1).

**Mark Scheme:**
- Heavy rainfall exceeds drainage capacity [1]
- Rivers flood when saturated ground increases runoff [1]
- Storm surge pushes seawater inland [1]
- Development with example/statistics [1]

---

### Example 2: 6-Mark Explain Question
**Question:** Explain why the development gap exists between countries. [6 marks]

**Model Answer:**
The development gap exists due to multiple interconnected factors. Physical geography plays a significant role - landlocked countries like Mali have higher transport costs for trade, while countries in tropical regions face challenges from malaria and other diseases that reduce workforce productivity.

Historical factors, particularly colonialism, have had lasting impacts. European powers extracted resources and established economic systems that benefited colonisers. When African countries gained independence, borders often divided ethnic groups and united rivals, leading to conflict. For example, 17 of the 20 lowest HDI countries are former colonies.

Economic factors perpetuate inequality. Many LIDCs depend on exporting primary products like coffee or copper, which have low value and volatile prices. When commodity prices fall, national income drops dramatically. Meanwhile, debt repayments to the World Bank and IMF sometimes exceed what countries receive in aid, trapping them in poverty cycles.

Finally, governance issues including corruption mean that resources don't reach those who need them. Countries with weak institutions struggle to invest in education, healthcare, and infrastructure that would promote development.

**Mark Scheme:**
- Physical factors (climate, location, resources, disease) [1-2]
- Historical factors (colonialism, artificial borders) [1-2]
- Economic factors (trade, debt, commodity dependence) [1-2]
- Governance factors (corruption, conflict) [1-2]
Level 3 (5-6): Detailed explanation of multiple factors with examples
Level 2 (3-4): Some explanation with partial development
Level 1 (1-2): Basic points, limited development

---

### Example 3: 8-Mark Extended Writing
**Question:** Assess the success of strategies to manage tropical storms. [8 marks]

**Model Answer:**
Tropical storm management involves prediction, protection, and planning. These strategies have varying degrees of success depending on a country's level of development.

Prediction has become increasingly effective. Satellites track storm development and movement, while computer models predict paths 3-5 days ahead with 80% accuracy. Before Hurricane Katrina (2005), authorities issued warnings 56 hours in advance, enabling 80% of New Orleans residents to evacuate. However, the poorest communities without transport were left behind, and 1,836 people died. In LIDCs like Myanmar, where Cyclone Nargis killed 138,000 in 2008, limited weather monitoring and communication infrastructure meant many received no warning.

Protection strategies show mixed success. The USA has invested billions in flood defences - New Orleans' new $14.5 billion levee system can withstand Category 5 storms. Japan's sea walls protect major cities. However, in Bangladesh, limited resources mean only a fraction of the coast has cyclone shelters. Simple but effective solutions exist: Bangladesh's concrete cyclone shelters have reduced deaths significantly, with 1991's cyclone killing 140,000 compared to 4,200 from a similar strength storm in 2007.

Planning measures help reduce vulnerability. Land-use zoning prevents building in high-risk areas, while building codes require storm-resistant construction. Education campaigns teach evacuation routes and emergency procedures. Yet enforcement varies - informal settlements in Mumbai house millions in flood-prone areas because people prioritise economic opportunities over safety.

In conclusion, management strategies have significantly reduced deaths from tropical storms, particularly in developed countries. Deaths from tropical storms have fallen 90% over 50 years despite population growth. However, effectiveness remains limited by economic constraints in LIDCs, climate change increasing storm intensity, and the continued vulnerability of the poorest populations even in wealthy nations. A combination of all three strategies is essential, but success ultimately depends on resources and political will.

**Mark Scheme:**
Level 3 (6-8 marks):
- Thorough assessment of multiple strategies (prediction, protection, planning)
- Specific examples with statistics (Katrina, Nargis, Bangladesh)
- Balanced evaluation of successes and limitations
- Considers contrast between ACs and LIDCs
- Clear, substantiated conclusion about overall success
- Accurate use of geographical terminology

Level 2 (3-5 marks):
- Some assessment of strategies
- Some examples but limited detail
- Partial evaluation
- Limited conclusion

Level 1 (1-2 marks):
- Basic description of strategies
- Few or no examples
- No evaluation
`;

// ============================================================================
// QUESTION TEMPLATES AND MARK SCHEMES
// ============================================================================

const OCR_GCSE_GEOG_QUESTION_TEMPLATES = `
## Authentic OCR GCSE Geography B Question Formats

### Type 1: Basic Knowledge (1-2 marks)
Format: "State/Identify [feature/term]"
**Examples:**
- "State one impact of tropical storms on people" [1 mark]
- "Identify two features of a glaciated valley" [2 marks]
Marking: 1 mark per correct identification

### Type 2: Describe Questions (2-4 marks)
Format: "Describe [feature/pattern/characteristic]"
**Examples:**
- "Describe the global distribution of tropical rainforests" [2 marks]
- "Describe the characteristics of a squatter settlement" [4 marks]
Marking: Credit description with development (1-2 marks per developed point)

### Type 3: Explain Questions (4-6 marks)
Format: "Explain [process/relationship/impact]"
**Examples:**
- "Explain how deforestation affects the water cycle" [4 marks]
- "Explain why urban areas experience the urban heat island effect" [6 marks]
Marking: Point + Explanation + Development for each element

### Type 4: Resource-Based (3-6 marks)
Format: "Study Figure X. [Describe/Explain/Analyse]..."
**Examples:**
- "Study Figure 2. Describe the pattern shown" [3 marks]
- "Study Figure 4. Explain the evidence for coastal erosion" [4 marks]
Marking: Must use evidence from the resource

### Type 5: 8-Mark Extended Writing
Format: "Assess/Evaluate/Discuss [issue/strategy/impact]"
**Examples:**
- "Assess the success of strategies to manage climate change" [8 marks]
- "Evaluate the impacts of globalisation on people in LIDCs" [8 marks]
Marking (Levels):
- Level 3 (6-8): Thorough; detailed; balanced; well-supported conclusion
- Level 2 (3-5): Some detail; partial development; limited conclusion
- Level 1 (1-2): Basic; simple statements; no conclusion
`;

const OCR_GCSE_GEOG_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE Geography B Mark Scheme Conventions

### 8-Mark Extended Writing Levels

**Level 3 (6-8 marks):**
- Demonstrates thorough knowledge and understanding
- Provides detailed and accurate explanation
- Response is well-organised with clear structure
- Offers balanced evaluation with substantiated points
- Reaches a clear, well-supported conclusion
- Uses geographical terminology accurately and consistently

**Level 2 (3-5 marks):**
- Demonstrates some knowledge and understanding
- Provides explanation with some detail
- Response has some organisation
- Some evaluation but may lack balance or development
- May reach a conclusion but with limited support
- Some use of geographical terminology

**Level 1 (1-2 marks):**
- Demonstrates limited knowledge
- Simple statements with limited explanation
- Response lacks clear organisation
- Little or no evaluation
- No clear conclusion
- Limited use of geographical terminology

**0 marks:** No response or no response worthy of credit

### Key Case Studies Required
- Tropical storm: Hurricane Katrina (AC), Cyclone Nargis (LIDC)
- Earthquake: Haiti 2010 (LIDC), Japan 2011 (AC)
- Ecosystem: Amazon rainforest
- UK landscape: Swanage Bay, River Tees
- UK city: Bristol
- LIDC city: Lagos, Nigeria
- Development: India
- Energy: Iceland
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = OCR_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert OCR GCSE Geography examiner creating exam-style questions.

## OCR GEOGRAPHY STYLE
**OCR's Analytical Essay-Based Approach:** Interpretive, wordier questions emphasizing critical analysis and balanced geographical perspectives.
- **Essay-based analytical learning** - questions require extended written responses and critical thinking skills
- **Wordier interpretive questions** - detailed question stems requiring careful reading and interpretation
- **Balanced physical/human approach** - equal emphasis on both physical and human geography with integrated perspectives
- **Critical thinking emphasis** - questions encourage extended analysis and evaluation of geographical concepts
- **Flexible fieldwork methodology** - freedom for teachers to choose appropriate fieldwork topics and locations
- **Varied coursework approaches** - diverse project-based assessments and coursework options for practical skills

${OCR_GCSE_GEOG_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${OCR_GCSE_GEOG_QUESTION_TEMPLATES}

${OCR_GCSE_GEOG_MARK_SCHEME_CONVENTIONS}

${OCR_GCSE_GEOG_WORKED_EXAMPLES}

## Your Task

${varietyInstructions}

Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR GCSE Geography B specification.

**Keep Physical and Human Geography distinct:**
- Physical Geography topics: Test physical processes, landforms, hazards only
- Human Geography topics: Test human processes, development, urbanisation only
- Only blend when the topic explicitly requires it

**DO NOT include:**
- A-Level content or complexity
- Case studies not commonly taught at GCSE level
- Advanced statistical analysis beyond GCSE requirements

**For the topic "${topic.name}", test ONLY the GCSE-level content in the specification.**

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic OCR Style**: Match real OCR Geography B paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: State, identify, basic describe (1-3 marks)
   - Medium: Explain, suggest, resource-based (4-6 marks)
   - Hard: 8-mark extended writing with evaluation (8 marks)
5. **Use Specific Knowledge**: Include real statistics, case studies, and examples

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer with specific facts and figures
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('geography')}`;
}

export function getOCRGCSEGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const varietyInstructions = getRandomVarietyInstructions();
  const topicKnowledge = OCR_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1/AO3).

**Question Types:**
- "State [impact/feature]" [1 mark]
- "Identify [features/characteristics]" [2 marks]
- "Describe [pattern/distribution]" [2-3 marks]

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring explanation or application (AO2/AO3).

**Question Types:**
- "Explain [process/impact]" [4 marks]
- "Explain why [phenomenon occurs]" [6 marks]
- "Study Figure X. Explain..." [4-6 marks]
- "Suggest reasons for..." [4 marks]

Include specific facts, statistics, or case study references in the model answer.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create an 8-mark extended writing question requiring evaluation (AO3).

**Question Types:**
- "Assess the success of [strategy/approach]" [8 marks]
- "Evaluate the [impacts/effects] of..." [8 marks]
- "Discuss the view that..." [8 marks]

**8-Mark Levels:**
- Level 3 (6-8): Thorough knowledge; detailed explanation; balanced evaluation; supported conclusion
- Level 2 (3-5): Some knowledge; partial explanation; some evaluation
- Level 1 (1-2): Limited knowledge; simple statements; little evaluation

The model answer MUST include:
- Specific case study details (dates, statistics, place names)
- Multiple perspectives (successes AND limitations)
- Clear evaluation with supported conclusion

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR GCSE Geography B question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

${difficultyGuidance[difficulty]}

## Critical Requirements:
1. Use SPECIFIC facts, statistics, and case studies from the topic knowledge
2. Model answer must demonstrate thorough geographical knowledge
3. Mark scheme must be detailed and aligned with OCR conventions
4. For hard questions: Include multiple case studies, statistics, and balanced evaluation

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific details",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

/**
 * Geography GCSE mark ranges based on OCR B specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };   // State, identify, describe - basic knowledge recall
    case 'medium':
      return { min: 4, max: 6 };   // Explain, suggest, apply - application and analysis
    case 'hard':
      return { min: 7, max: 8 };   // Evaluate, assess - extended response requiring judgement
  }
}
