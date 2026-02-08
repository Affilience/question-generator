// AQA GCSE Geography (8035) Question Generation Prompts
// Based on official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/geography/gcse/geography-8035

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';


// ============================================================================
// AQA GCSE GEOGRAPHY SPECIFICATION DETAILS (8035)
// ============================================================================

const AQA_GCSE_GEOG_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Geography Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of locations, places, processes, environments and different scales | 15% |
| **AO2** | Demonstrate geographical understanding of concepts, interrelationships, how human and physical processes interact | 25% |
| **AO3** | Apply knowledge and understanding to interpret, analyse and evaluate geographical information and issues; construct arguments and draw conclusions | 35% |
| **AO4** | Select, adapt and use a variety of skills and techniques to investigate questions and communicate findings | 25% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Living with the physical environment | Natural hazards, Living world, Physical landscapes | 88 | 1hr 30m | 35% |
| **Paper 2** | Challenges in the human environment | Urban issues, Economic world, Resource management | 88 | 1hr 30m | 35% |
| **Paper 3** | Geographical applications | Issue evaluation, Fieldwork, Geographical skills | 76 | 1hr 15m | 30% |

### Command Words
- **State/Name**: Give a brief answer (AO1)
- **Describe**: Set out characteristics; say what you see (AO3)
- **Explain**: Give reasons for; set out causes (AO2)
- **Assess**: Use evidence to determine importance/success (AO3)
- **To what extent**: Consider evidence; reach a supported judgement (AO3)
- **Evaluate**: Review information; come to a conclusion (AO3)
- **Discuss**: Present key points; consider different perspectives (AO2/AO3)

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

const AQA_GCSE_GEOG_TOPIC_KNOWLEDGE: Record<string, string> = {
  'aqa-gcse-geog-natural-hazards': `## Natural Hazards Topic Knowledge

### Plate Tectonics
- Earth's crust divided into 7 major plates and several minor plates
- Plates move 2-5cm per year due to convection currents in the mantle
- **Constructive boundaries**: Plates move apart, magma rises (Mid-Atlantic Ridge)
- **Destructive boundaries**: Oceanic plate subducts under continental plate (Pacific Ring of Fire)
- **Conservative boundaries**: Plates slide past each other (San Andreas Fault)

### Key Earthquake Case Studies

**Haiti 2010 (LIC)**
- Magnitude: 7.0, Depth: 13km
- Location: 25km from capital Port-au-Prince
- Deaths: 316,000 | Injured: 300,000 | Homeless: 1.5 million
- 250,000 homes destroyed, 30,000 commercial buildings collapsed
- Cost: $14 billion (120% of GDP)
- Port destroyed, disrupting aid delivery
- Poor building standards - many concrete buildings not reinforced
- Response: UN deployed 10,000 troops, Red Cross raised $1 billion

**Japan 2011 (HIC)**
- Magnitude: 9.0, Depth: 32km
- Deaths: 15,894 (mostly from tsunami)
- Tsunami waves up to 40m high, travelled 10km inland
- Fukushima nuclear disaster - 160,000 evacuated
- Cost: $235 billion
- Buildings designed to withstand earthquakes - many survived
- Early warning system gave 30 seconds notice
- Response: Self-Defense Forces deployed within hours

### Tropical Storm Case Study: Typhoon Haiyan 2013 (Philippines)
- Category 5 super typhoon, winds up to 315 km/h
- Deaths: 6,300 | Affected: 14 million people
- 90% of Tacloban city destroyed
- Storm surge 5m high
- 600,000 displaced, 1.1 million homes damaged
- Cost: $2.9 billion
- Response: $1.2 billion international aid, UK sent HMS Daring

### UK Weather Hazard: Beast from the East 2018
- Temperatures dropped to -14°C
- 10 deaths in UK
- 100,000 homes without power
- Schools closed, transport disrupted
- £1.2 billion economic impact
- Caused by weakening of polar vortex

### Climate Change Key Statistics
- Global temperature rise: 1.1°C since pre-industrial times
- Sea level rise: 20cm since 1900, accelerating
- Arctic ice: declining 13% per decade
- CO₂ levels: 420ppm (was 280ppm pre-industrial)
- Target: Limit warming to 1.5°C (Paris Agreement 2015)

### Climate Change Responses
**Mitigation:**
- Renewable energy (UK target: net zero by 2050)
- Carbon capture technology
- International agreements (Paris 2015)
- Carbon trading schemes

**Adaptation:**
- Flood defences (Thames Barrier used 100+ times since 1982)
- Drought-resistant crops
- Building design changes
- Water storage and management`,

  'aqa-gcse-geog-living-world': `## The Living World Topic Knowledge

### Ecosystem Key Terms
- **Ecosystem**: A community of living organisms interacting with each other and their physical environment
- **Biotic**: Living components (plants, animals, bacteria)
- **Abiotic**: Non-living components (water, air, rocks, soil)
- **Producer**: Organisms that make their own food through photosynthesis
- **Consumer**: Organisms that eat other organisms
- **Decomposer**: Organisms that break down dead matter
- **Food chain**: Linear sequence of feeding relationships
- **Food web**: Interconnected food chains
- **Nutrient cycling**: Movement of nutrients through an ecosystem

### UK Ecosystem Example: Epping Forest (Deciduous Woodland)
- Location: Essex, Greater London
- Area: 2,400 hectares, 70% deciduous trees
- Trees: Oak, beech, hornbeam, birch
- Biodiversity: 50 species of birds, 700 species of fungi
- Nutrient cycling: Rapid leaf decomposition in autumn
- Managed by City of London Corporation since 1878

### Tropical Rainforest: The Amazon
- Location: 9 countries, mainly Brazil (60%)
- Area: 5.5 million km² (largest rainforest)
- Climate: 26-28°C year-round, 2000mm+ annual rainfall
- Biodiversity: 10% of all species on Earth
- 3 million species, 2,500 tree species
- 20% of world's oxygen produced
- 20% of freshwater discharged to oceans

**Structure:**
- Emergent layer: 45m+, eagles, butterflies, bats
- Canopy: 30m, most biodiversity, monkeys, birds
- Under canopy: 10-20m, climbing plants, jaguars
- Shrub layer: 5m, shade-tolerant plants
- Forest floor: <1% sunlight, decomposers, insects

**Plant Adaptations:**
- Buttress roots: Support for tall trees in thin soil
- Drip tips: Shed excess water quickly
- Lianas: Climbing vines reach sunlight
- Epiphytes: Plants grow on trees to reach light

**Deforestation Rates:**
- 17% of Amazon already lost
- Peak: 27,000 km² lost in 2004
- 2019: 10,000 km² lost (60% increase from 2018)

**Causes:**
- Cattle ranching: 80% of deforested land
- Soy farming: Brazil is world's largest exporter
- Logging: Legal and illegal timber extraction
- Mining: Gold, iron ore, bauxite
- Roads: Trans-Amazonian Highway opened interior

**Sustainable Management:**
- REDD+ scheme: Pay countries to protect forests
- Selective logging: Only mature trees harvested
- Ecotourism: Provides income without destruction
- Brazil: Forest Code requires 80% preservation

### Hot Desert Case Study: The Sahara/Thar Desert
**Thar Desert, India/Pakistan:**
- Location: Rajasthan, India and Sindh, Pakistan
- Area: 200,000 km²
- Climate: 50°C summer, 5°C winter, <250mm rainfall
- Population: 83 million people

**Opportunities:**
- Mining: Gypsum, feldspar, limestone
- Tourism: Camel safaris, Jaisalmer Fort
- Energy: Solar potential (Bhadla Solar Park - 2,245 MW)
- Irrigation: Indira Gandhi Canal (650km)

**Challenges:**
- Water scarcity: Groundwater depleting
- Extreme temperatures: Difficult working conditions
- Inaccessibility: Limited infrastructure

**Desertification in the Sahel:**
- Sahel region: 5,000km band south of Sahara
- 65% of farmland degraded since 1970s
- Causes: Overgrazing, overcultivation, deforestation
- Great Green Wall project: 8,000km tree belt being planted`,

  'aqa-gcse-geog-physical-landscapes-uk': `## Physical Landscapes in the UK Topic Knowledge

### Coastal Processes

**Wave Types:**
- **Constructive waves**: Low, long wavelength, 6-8 per minute, strong swash builds beach
- **Destructive waves**: High, short wavelength, 10-14 per minute, strong backwash erodes

**Erosion Processes:**
- **Hydraulic action**: Force of water compresses air in cracks (most powerful)
- **Abrasion**: Rocks thrown at cliffs by waves
- **Attrition**: Rocks collide and become rounded
- **Corrosion**: Chemical dissolving of rock (limestone)

**Coastal Landforms:**
- Headlands and bays: Differential erosion of hard and soft rock
- Wave-cut platform: Forms as cliff retreats at 1m per year
- Caves → Arches → Stacks → Stumps: Headland erosion sequence

### Coastal Case Study: Holderness Coast
- Location: East Yorkshire, from Flamborough Head to Spurn Point
- Length: 61km
- Erosion rate: Average 2m per year (fastest in Europe)
- Since Roman times: 4km of land lost, 29 villages disappeared
- Rock type: Soft boulder clay (glacial deposits)
- Mappleton: £2 million rock armour scheme (1991)
  - Protected village but increased erosion to south

**Coastal Management:**
- Sea walls: £6,000 per metre, 30-50 year lifespan
- Rock armour: £3,000 per metre, absorbs wave energy
- Groynes: £10,000 each, trap sediment
- Beach nourishment: £3 per m³, needs repeating
- Managed retreat: Cheapest, allows natural processes

### River Processes

**Erosion:**
- Hydraulic action: Force of water in cracks
- Abrasion: Load scrapes bed/banks
- Attrition: Load particles collide
- Solution: Chemical dissolving

**Transportation:**
- Traction: Large rocks rolled along bed
- Saltation: Smaller particles bounce along bed
- Suspension: Fine particles carried in water
- Solution: Dissolved minerals carried

### River Landforms

**Upper Course:**
- V-shaped valleys: Vertical erosion dominates
- Interlocking spurs: River winds around obstacles
- Waterfalls: Hard rock over soft rock
- Gorges: Waterfall retreat leaves steep-sided valley

**Middle Course:**
- Meanders: Fastest flow on outside (erosion), slowest inside (deposition)
- River cliffs: Erosion on outer bend
- Slip-off slopes: Deposition on inner bend

**Lower Course:**
- Floodplains: Flat land from repeated flooding
- Levees: Natural embankments from flood deposition
- Ox-bow lakes: Cut-off meander loops
- Estuaries: Wide river mouths

### River Flooding Case Study: Somerset Levels 2014
- Location: Somerset, South West England
- Area flooded: 65 km² for 3 months (Jan-March 2014)
- Rainfall: Wettest January for 248 years (175mm)
- 600 homes flooded, 16,000 hectares farmland underwater
- £147 million damage to properties and farming
- Villages cut off: Muchelney isolated for 2 months

**Causes:**
- Flat, low-lying land (some below sea level)
- Clay soil - poor drainage
- Rivers not dredged since 1996
- High tides preventing river drainage

**Responses:**
- £20 million 20-year flood action plan
- 8km of rivers dredged (first time in 20 years)
- New pumping stations installed
- Improved flood defences at Bridgwater`,

  'aqa-gcse-geog-urban-issues': `## Urban Issues and Challenges Topic Knowledge

### Global Urbanisation Trends
- 1950: 30% of world population urban
- 2008: First time more than 50% urban
- 2050: Predicted 68% urban (6.7 billion people)
- HICs: 80% urbanised, slow growth
- LICs/NEEs: Rapid urbanisation (3% per year in some countries)

### Megacities
- Definition: Urban areas with 10+ million population
- 1950: 2 megacities (New York, Tokyo)
- 2020: 34 megacities
- 2030: Predicted 43 megacities
- Largest: Tokyo (37 million), Delhi (32 million), Shanghai (28 million)

### LIC/NEE City Case Study: Lagos, Nigeria
**Location and Importance:**
- Population: 21 million (largest city in Africa)
- Growing by 300,000 people per year
- Located on Atlantic coast, Southwest Nigeria
- GDP: $136 billion (25% of Nigeria's economy)
- Major port: 80% of Nigeria's imports/exports

**Opportunities:**
- Employment: 60% of Nigeria's industrial jobs
- Education: University of Lagos, 40,000 students
- Healthcare: Lagos University Teaching Hospital
- Culture: Nollywood film industry (2nd largest globally)

**Challenges:**
- Traffic: Average commute 3 hours, $1 billion lost productivity/year
- Housing: 60% live in slums (e.g., Makoko floating slum)
- Water: Only 10% have access to piped water
- Sanitation: Only 10% connected to sewage system
- Electricity: Regular power cuts, many use generators
- Waste: 10,000 tonnes generated daily, only 40% collected

**Urban Planning Solutions:**
- Eko Atlantic: $6 billion new city being built on reclaimed land
- BRT (Bus Rapid Transit): Carries 200,000 passengers daily
- Makoko community: Self-built schools and healthcare

### UK City Case Study: Bristol
**Location and Importance:**
- Population: 463,000 (1.1 million in urban area)
- Located in South West England, River Avon
- 8th largest city in England
- Economy: £14 billion GDP, aerospace, creative industries

**National and International Links:**
- Bristol Airport: 9 million passengers per year
- M4/M5 motorway junction
- Temple Meads station: Direct to London (1hr 40min)
- Port of Bristol: Ferry links to Ireland

**Opportunities:**
- Employment: Airbus, Rolls-Royce, BBC
- Culture: Banksy, music scene, Harbourside
- Education: 2 universities, 77,000 students
- Green spaces: 450 parks, European Green Capital 2015

**Challenges:**
- Housing: Average house price £290,000 (8x average salary)
- Inequality: Affluent Clifton vs. deprived Hartcliffe
- Traffic: 500,000 daily car journeys
- Air pollution: Declared Clean Air Zone 2022

**Urban Regeneration: Temple Quarter Enterprise Zone**
- Location: Former industrial area near Temple Meads
- Investment: £1.6 billion over 25 years
- Created: 17,000 jobs, 4,000 new homes
- Arena Island: Entertainment venue development
- Engine Shed: Business incubator with 600 members

### Sustainable Urban Living: Freiburg, Germany
- Population: 230,000, Southwest Germany
- Known as "eco-city" or "solar city"
- 30% of energy from renewable sources
- Vauban district: 5,000 residents, car-free streets
- 400km cycle paths, 30% travel by bike
- Green roofs required on new buildings
- Waste: 70% recycling rate`,

  'aqa-gcse-geog-changing-economic-world': `## The Changing Economic World Topic Knowledge

### Development Indicators
| Indicator | Definition | HIC Example | LIC Example |
|-----------|------------|-------------|-------------|
| GNI per capita | Average income per person | UK: $42,000 | Chad: $660 |
| HDI | Composite (health, education, income) 0-1 | Norway: 0.957 | Niger: 0.354 |
| Life expectancy | Average years lived | Japan: 84 | Chad: 54 |
| Literacy rate | % who can read/write | UK: 99% | Mali: 35% |
| Infant mortality | Deaths per 1,000 births | UK: 4 | Sierra Leone: 80 |

### The Development Gap
- Richest 1% own more than bottom 50%
- HICs (16% of world population) earn 80% of income
- 700 million people live in extreme poverty (<$1.90/day)
- Gap between North (developed) and South (developing)

### Strategies to Reduce the Development Gap
**Investment:**
- FDI (Foreign Direct Investment): TNCs invest in factories
- China invested $50 billion in Africa (2018)

**Aid:**
- Bilateral: Country to country (UK gave £14 billion in 2019)
- Multilateral: Through organisations (World Bank, UN)
- NGO: Charities (Oxfam, WaterAid)
- Emergency vs. development aid

**Intermediate Technology:**
- Appropriate for skills and resources available
- WaterAid hand pumps in Mali
- Solar cookers in Kenya
- Bike ambulances in Malawi

**Fair Trade:**
- Farmers get fair price for products
- Minimum price plus premium
- 1.7 million farmers in 75 countries
- Products: Coffee, cocoa, bananas, cotton

### LIC/NEE Case Study: Nigeria
**Location:**
- West Africa, Atlantic coast
- Population: 206 million (largest in Africa)
- Area: 924,000 km²
- Capital: Abuja, largest city: Lagos

**Importance in Africa:**
- Largest economy in Africa ($450 billion GDP)
- Major oil producer (10th in world)
- Cultural influence: Nollywood, Afrobeats music

**Political Context:**
- Independence: 1960 from UK
- Democracy since 1999 (after military rule)
- Corruption issues: Transparency International rank 149/180
- Ethnic tensions: 250 ethnic groups

**Economic Development:**
- Agriculture: 35% of workforce, cocoa, palm oil
- Oil: 90% of exports, 75% of government revenue
- Manufacturing: Growing sector in Lagos
- Services: Telecoms, banking, Nollywood

**TNC Example: Shell in Nigeria**
- Operating since 1956
- Produces 39% of Nigeria's oil
- Positives: Jobs, infrastructure, taxes
- Negatives: Oil spills (6,817 reported 1976-2001), environmental damage

**Environmental Impacts:**
- Niger Delta: Heavily polluted
- Gas flaring: 17.2 billion m³ per year
- Deforestation: 3.5% loss per year
- Desertification in the north

### Changing UK Economy
**Deindustrialisation:**
- 1970: 30% employed in manufacturing
- 2020: 8% employed in manufacturing
- Causes: Globalisation, automation, cheaper labour abroad

**Post-Industrial Economy:**
- Service sector: 80% of employment
- Finance: London is global financial centre
- IT and digital: £184 billion contribution to economy
- Creative industries: £116 billion per year

**North-South Divide:**
- South East: GVA £34,000 per head
- North East: GVA £21,000 per head
- Life expectancy: 3 years less in North
- Strategies: Northern Powerhouse, HS2, devolution`,

  'aqa-gcse-geog-resource-management': `## Resource Management Topic Knowledge

### Global Resource Overview
- 7.9 billion people competing for finite resources
- 1 in 9 people undernourished (820 million)
- 2.2 billion lack safe drinking water
- 1.2 billion lack electricity access

### Food in the UK
**Food Miles:**
- Average UK meal travels 1,000 miles
- 95% of fruit is imported
- Air-freighted food has 177x carbon footprint of ship

**Carbon Footprint of Food:**
- Beef: 27 kg CO₂ per kg
- Lamb: 39 kg CO₂ per kg
- Chicken: 6.9 kg CO₂ per kg
- Vegetables: 2 kg CO₂ per kg

**Agribusiness:**
- Large-scale, intensive farming
- UK farm size increased 50% since 1950
- Pesticide and fertiliser use
- Contract farming for supermarkets

**Organic Farming:**
- No synthetic pesticides or fertilisers
- 2.7% of UK farmland is organic
- Premium prices (20-40% higher)
- Better for biodiversity

### Water in the UK
**Demand:**
- Average person uses 150 litres per day
- Highest use: South East (water deficit area)
- Lowest rainfall: London (600mm/year)
- Highest rainfall: Lake District (3,000mm/year)

**Water Transfer:**
- Kielder Water: Largest reservoir in UK
- Supplies Newcastle, Sunderland, Durham
- Cost: £167 million (1982)
- Thirlmere: Supplies Manchester (150 million litres/day)

### Energy in the UK
**UK Energy Mix (2021):**
- Gas: 40%
- Renewables: 40%
- Nuclear: 16%
- Coal: <2%
- Oil: 1%

**Renewable Energy:**
- Wind: 27% of electricity (world leader in offshore wind)
- Solar: 4% of electricity
- Biomass: 5% of electricity
- Hydro: 2% of electricity

**Fracking:**
- Hydraulic fracturing for shale gas
- Potential: 50 years of gas supply
- Controversial: Earthquakes, water contamination
- Currently banned in UK (2019 moratorium)

### FOOD DEPTH STUDY

**Global Food Security:**
- Food insecure: 820 million people
- Famine conditions: Yemen, South Sudan, Somalia, Nigeria
- Climate change will reduce yields 25% by 2050

**Factors Affecting Food Supply:**
- Climate: Drought, floods affect harvests
- Technology: Irrigation, GM crops increase yields
- Pests and disease: Locust swarms devastate crops
- Water: 70% of water used for agriculture
- Conflict: War disrupts farming
- Poverty: Cannot afford fertilisers, seeds

**Large-Scale Food Production: Almeria, Spain**
- Location: Southeast Spain
- Area: 30,000 hectares of plastic greenhouses
- Produces: 3.5 million tonnes of fruit/vegetables per year
- Supplies: UK supermarkets year-round
- Issues: Water depletion, plastic waste, worker conditions

**Sustainable Food Production: Makueni, Kenya**
- Location: Eastern Kenya
- Project: Sand dams for water storage
- Method: Rainwater harvesting in riverbeds
- Impact: 1,200+ dams, 1.2 million people benefited
- Crops: Vegetables, fruit trees year-round

### WATER DEPTH STUDY

**Global Water Insecurity:**
- 2.2 billion lack safe drinking water
- 4.2 billion lack safe sanitation
- Water stress: Using >25% of renewable supply
- 17 countries facing extremely high water stress

**Large-Scale Water Project: Three Gorges Dam, China**
- Location: Yangtze River, Hubei Province
- Completed: 2006, cost $37 billion
- Capacity: 22,500 MW (world's largest hydro power)
- Benefits: Flood control, electricity, navigation
- Issues: 1.3 million people relocated, ecosystem damage

**Sustainable Water: WaterAid in Mali**
- Organisation: International NGO
- Technology: Hand pumps, solar pumps
- Cost: $30-50 per person for access
- Impact: 26 million people helped worldwide
- Community training for maintenance

### ENERGY DEPTH STUDY

**Global Energy Insecurity:**
- 789 million people lack electricity
- 2.8 billion rely on traditional fuels for cooking
- Energy consumption rising 1% per year
- Fossil fuels finite: Oil (50 years), gas (50 years), coal (100 years)

**Large-Scale Energy Project: Chambamontera, Peru**
- Type: Micro-hydro scheme
- Location: Remote Andean village
- Capacity: 30 kW serving 60 families
- Benefits: Clean energy, no fuel costs
- Sustainable: Uses local river, community managed`,

  'aqa-gcse-geog-fieldwork-skills': `## Geographical Skills Topic Knowledge

### OS Map Skills
**Grid References:**
- 4-figure: Identifies 1km² square (Eastings, Northings)
- 6-figure: Pinpoints location to 100m accuracy

**Contour Lines:**
- Close together = steep slope
- Far apart = gentle slope
- V-shapes pointing uphill = valley
- V-shapes pointing downhill = ridge

**Map Symbols:**
- Blue: Water features
- Green: Woodland
- Brown: Contours
- Black: Buildings, boundaries

### Graphical Skills
**Appropriate Graph Types:**
- Line graph: Change over time
- Bar chart: Comparing categories
- Pie chart: Proportions of a whole
- Scatter graph: Correlation between variables
- Population pyramid: Age-sex structure
- Choropleth map: Shows density/distribution

### Numerical Skills
**Mean, Median, Mode:**
- Mean: Sum ÷ number of values
- Median: Middle value when ordered
- Mode: Most frequent value

**Percentage Change:**
- Formula: (New - Old) / Old × 100

**Interquartile Range:**
- IQR = Q3 - Q1 (middle 50% of data)
- Shows spread without extremes

### Fieldwork Enquiry Process
1. Identify question/hypothesis
2. Develop methodology
3. Collect primary data
4. Process and present data
5. Analyse and explain findings
6. Draw conclusions
7. Evaluate investigation

### Data Collection Methods
**Quantitative:**
- Environmental quality surveys (scoring 1-5)
- Traffic counts
- Pedestrian counts
- Land use surveys
- River measurements (width, depth, velocity)
- Questionnaires with closed questions

**Qualitative:**
- Field sketches
- Photographs
- Open questionnaires
- Interviews

**Sampling Methods:**
- Random: Unbiased, but may miss key areas
- Systematic: Regular intervals (every 10m)
- Stratified: Proportional to groups

### Example Fieldwork Studies
**Physical Fieldwork: River Study**
- Hypothesis: "Velocity increases downstream"
- Methods: Flow meter, tape measure, ranging poles
- Sites: 3-5 locations along river
- Present: Cross-section diagrams, velocity graphs

**Human Fieldwork: Urban Change**
- Hypothesis: "Environmental quality varies across the CBD"
- Methods: EQS (litter, graffiti, noise), land use mapping
- Sites: Transect from CBD to suburbs
- Present: Choropleth map, bar charts`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const AQA_GCSE_GEOG_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: 4-Mark Explain Question
**Question:** Explain how constructive plate boundaries create new land. [4 marks]

**Model Answer:**
At constructive boundaries, convection currents in the mantle cause tectonic plates to move apart (1). As the plates diverge, pressure is released, allowing hot magma to rise up from the mantle (1). This magma is less dense than surrounding rock, so it rises through the gap between the plates (1). When it reaches the surface, it cools and solidifies to form new oceanic crust, creating features like mid-ocean ridges such as the Mid-Atlantic Ridge (1).

**Mark Scheme:**
- Point about plates moving apart [1]
- Point about magma rising [1]
- Development about pressure/density [1]
- Named example or landform created [1]

---

### Example 2: 6-Mark Discuss Question
**Question:** Discuss the advantages and disadvantages of hard engineering for coastal management. [6 marks]

**Model Answer:**
Hard engineering involves building structures to protect coastlines from erosion and flooding. One advantage is that sea walls provide a solid barrier against waves, protecting property and infrastructure behind them. They can last 30-50 years if maintained, providing long-term protection for valuable coastal settlements.

However, hard engineering can be very expensive. Sea walls cost approximately £6,000 per metre to build, which may not be affordable for all coastal communities. They also require ongoing maintenance costs.

Another disadvantage is that hard engineering can increase erosion elsewhere. For example, at Mappleton on the Holderness Coast, rock armour protected the village but starved beaches further south of sediment, increasing erosion at Great Cowden. This is known as terminal groyne syndrome.

On balance, while hard engineering provides effective local protection, it can be costly and may simply transfer problems elsewhere, making soft engineering approaches like managed retreat increasingly popular.

**Mark Scheme:**
Level 3 (5-6 marks): Detailed discussion of advantages AND disadvantages with specific examples and clear evaluation.
Level 2 (3-4 marks): Some discussion of both sides with some development.
Level 1 (1-2 marks): Basic points about hard engineering, limited development.

---

### Example 3: 9-Mark Extended Writing (+3 SPaG)
**Question:** "To what extent can the effects of tropical storms be reduced?" Use a named example in your answer. [9 marks + 3 SPaG]

**Model Answer:**
Tropical storms cause devastating effects including loss of life, destruction of property, and economic damage. However, the extent to which these effects can be reduced varies depending on a country's level of development and investment in prediction, protection, and planning.

Prediction has significantly improved the ability to reduce deaths from tropical storms. Meteorological agencies can now track storms using satellites and provide 3-5 days warning. Before Typhoon Haiyan struck the Philippines in 2013, authorities issued warnings and evacuated some areas. However, the warning systems were not effective everywhere, and 6,300 people still died. In contrast, when similar strength hurricanes approach the USA, comprehensive evacuation plans and transport networks allow millions to move to safety.

Protection measures can reduce physical damage. Buildings in HICs like Japan are constructed to withstand high winds and flooding. Storm surge barriers protect cities like New Orleans after Hurricane Katrina. However, in the Philippines, many homes in Tacloban were made of lightweight materials that couldn't withstand Haiyan's 315 km/h winds. 90% of the city was destroyed because buildings were not engineered to resist such forces.

Planning also plays a crucial role. Land-use zoning can prevent development in high-risk areas, while emergency response plans ensure rapid aid delivery. After Haiyan, the Philippine government received $1.2 billion in international aid and deployed military personnel for rescue operations. However, the scale of destruction overwhelmed local capacity, and many people waited weeks for help.

In conclusion, while prediction, protection, and planning can significantly reduce the effects of tropical storms, the extent depends heavily on economic development. HICs like the USA can afford early warning systems, evacuation infrastructure, and resilient buildings, whereas LICs and NEEs like the Philippines struggle to implement such measures fully. Therefore, the effects can be substantially reduced, but not eliminated, especially in less developed countries.

**Mark Scheme:**
Level 3 (7-9 marks):
- Demonstrates thorough knowledge of tropical storm effects and management
- Detailed understanding of prediction, protection, and planning
- Uses specific evidence from named example (Typhoon Haiyan)
- Balanced evaluation considering both success and limitations
- Clear judgement about "extent" with reference to development

Level 2 (4-6 marks):
- Shows some knowledge of tropical storm effects
- Some understanding of management strategies
- References to case study but limited detail
- Partial evaluation

Level 1 (1-3 marks):
- Limited knowledge of tropical storms
- Basic understanding of one or two strategies
- No clear evaluation

SPaG (3 marks):
- Spelling of geographical terms accurate
- Punctuation used effectively
- Specialist vocabulary used appropriately
`;

// ============================================================================
// QUESTION TEMPLATES
// ============================================================================

const AQA_GCSE_GEOG_QUESTION_TEMPLATES = `
## Authentic AQA GCSE Geography Question Formats

### Type 1: Basic Knowledge (1-2 marks)
Format: "State/Name/Define [feature/term]"
**Examples:**
- "State one cause of tropical storms" [1 mark]
- "Define the term 'ecosystem'" [1 mark]
Marking: 1 mark per correct point

### Type 2: Describe Questions (2-4 marks)
Format: "Describe [feature/pattern/distribution]"
**Examples:**
- "Describe the global distribution of tropical rainforests" [2 marks]
- "Describe the characteristics of a CBD" [4 marks]
Marking: Credit accurate description with some development

### Type 3: Explain Questions (4-6 marks)
Format: "Explain [process/relationship/causes]"
**Examples:**
- "Explain how deforestation affects the environment" [4 marks]
- "Explain why people live in areas at risk from tectonic hazards" [6 marks]
Marking: Point + Explanation + Development (2 marks per developed point)

### Type 4: Resource-Based (4-6 marks)
Format: "Using Figure X, [describe/explain/analyse]"
**Examples:**
- "Using Figure 3, describe the changes in population" [4 marks]
- "Study Figure 2. Explain how the river created this landform" [6 marks]
Marking: Must use evidence from the resource

### Type 5: 6-Mark Extended Writing
Format: "Discuss/Assess/Explain (extended)"
**Examples:**
- "Discuss the advantages and disadvantages of soft engineering" [6 marks]
- "Assess the effectiveness of aid in reducing the development gap" [6 marks]
Marking (Levels):
- Level 3 (5-6): Detailed; linked; clear conclusions
- Level 2 (3-4): Some detail; partial development
- Level 1 (1-2): Basic; limited development

### Type 6: 9-Mark Extended Writing (+3 SPaG)
Format: "To what extent..." / "Evaluate..." / "Using a case study..."
**Examples:**
- "To what extent can the effects of tropical storms be reduced?" [9 marks + 3 SPaG]
- "Using a named example, evaluate the success of urban regeneration" [9 marks + 3 SPaG]
Marking (Levels):
- Level 3 (7-9): Thorough knowledge; detailed understanding; balanced; clear judgement
- Level 2 (4-6): Some knowledge; partial understanding; some evaluation
- Level 1 (1-3): Limited knowledge; simple statements; minimal evaluation
`;

// ============================================================================
// MARK SCHEME CONVENTIONS
// ============================================================================

const AQA_GCSE_GEOG_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Geography Mark Scheme Conventions

### 9-Mark Extended Writing Levels (+ 3 SPaG)

**Level 3 (7-9 marks):**
- Demonstrates thorough geographical knowledge and understanding
- Applies knowledge to offer thorough explanation
- Shows thorough understanding of geographical concepts
- Offers a balanced, well-developed evaluation
- Reaches a clear, well-evidenced conclusion

**Level 2 (4-6 marks):**
- Demonstrates some geographical knowledge and understanding
- Applies knowledge to offer some explanation
- Shows some understanding of geographical concepts
- Offers partial evaluation with some development
- May reach a conclusion but with limited support

**Level 1 (1-3 marks):**
- Demonstrates limited geographical knowledge
- Simple statements with limited explanation
- Limited understanding of geographical concepts
- Evaluation is basic or implicit
- Conclusion absent or unsupported

**0 marks:** Nothing worthy of credit

### SPaG Marks (3 additional marks)
- High (3): Spelling, punctuation and grammar are consistently accurate; specialist vocabulary used effectively
- Intermediate (2): Spelling, punctuation and grammar are mostly accurate; some specialist vocabulary
- Threshold (1): Spelling, punctuation and grammar are reasonably accurate; limited specialist vocabulary
- 0: Not meeting threshold

### 6-Mark Extended Writing Levels

**Level 3 (5-6 marks):**
- Detailed knowledge
- Clear links between points
- Well-developed explanation
- Supported conclusions

**Level 2 (3-4 marks):**
- Some knowledge shown
- Partial links between points
- Some explanation
- Basic conclusions

**Level 1 (1-2 marks):**
- Limited knowledge
- Simple statements
- Limited explanation

### Key Case Studies Required
- Tectonic hazard: HIC (Japan 2011) and LIC (Haiti 2010)
- Tropical storm: Typhoon Haiyan 2013
- UK extreme weather: Beast from the East 2018
- UK coast: Holderness Coast
- UK river: Somerset Levels flooding 2014
- Tropical rainforest: Amazon
- Hot desert: Thar Desert / Sahara
- UK city: Bristol
- NEE/LIC city: Lagos, Nigeria
- NEE country: Nigeria
- Sustainable city: Freiburg, Germany
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = AQA_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert AQA GCSE Geography examiner creating exam-style questions.

## AQA GEOGRAPHY STYLE
**AQA's UK-Focused Practical Approach:** Clear, straightforward questions emphasizing British geographical contexts and practical application.
- **UK-focused examples** - strong emphasis on British geographical issues, environments, and case studies
- **Straightforward and predictable** - clear, accessible question formats with transparent assessment criteria
- **Practical application emphasis** - focus on real-world geographical skills and fieldwork applications
- **Flexible fieldwork choices** - freedom for teachers to choose appropriate topics and locations within specified content
- **Contemporary issues focus** - questions tied to current UK geographical challenges and developments
- **Balanced physical/human geography** - comprehensive coverage of both physical and human geographical processes

${AQA_GCSE_GEOG_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${AQA_GCSE_GEOG_QUESTION_TEMPLATES}

${AQA_GCSE_GEOG_MARK_SCHEME_CONVENTIONS}

${AQA_GCSE_GEOG_WORKED_EXAMPLES}

## Your Task

${varietyInstructions}

Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA GCSE Geography specification.

**Keep Physical and Human Geography distinct:**
- Physical Geography topics (Living World, Physical Landscapes UK, Hazards): Test physical processes only
- Human Geography topics (Urban Issues, Changing Economic World): Test human processes only
- Only blend when the topic explicitly requires it

**DO NOT include:**
- A-Level content or complexity
- Case studies not commonly taught at GCSE level
- Advanced statistical analysis beyond GCSE requirements

**For the topic "${topic.name}", test ONLY the GCSE-level content in the specification.**

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic AQA Style**: Match real AQA paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: State, define, basic describe (1-3 marks)
   - Medium: Explain, resource-based, extended explain (4-6 marks)
   - Hard: 9-mark extended writing with evaluation (9 marks)
5. **Use Specific Knowledge**: Include real statistics, case studies, and examples from the topic knowledge provided

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

export function getAQAGCSEGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const varietyInstructions = getRandomVarietyInstructions();
  const topicKnowledge = AQA_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1/AO3).

**Question Types:**
- "State [feature/cause/effect]" [1 mark]
- "Define the term [concept]" [1 mark]
- "Describe [pattern/characteristic]" [2-3 marks]

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring explanation or application (AO2/AO3).

**Question Types:**
- "Explain [process/relationship]" [4 marks]
- "Explain why [phenomenon occurs]" [6 marks]
- "Using Figure X, explain..." [4-6 marks]
- "Discuss [advantages/disadvantages]" [6 marks]

Include specific facts, statistics, or case study references in the model answer.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 9-mark extended writing question requiring evaluation (AO3).

**Question Types:**
- "To what extent [can effects be reduced/managed]" [9 marks]
- "Evaluate the success of [strategy/approach]" [9 marks]
- "Using a named example, assess [impacts/effectiveness]" [9 marks]

**9-Mark Levels:**
- Level 3 (7-9): Thorough knowledge; detailed understanding; balanced evaluation; clear judgement
- Level 2 (4-6): Some knowledge; partial understanding; some evaluation
- Level 1 (1-3): Limited knowledge; simple statements; minimal evaluation

The model answer MUST include:
- Specific case study details (dates, statistics, place names)
- Multiple perspectives (advantages AND disadvantages)
- Clear evaluation with supported judgement

Note: 9-mark questions also carry 3 additional SPaG marks in the real exam.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an AQA GCSE Geography question.

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
3. Mark scheme must be detailed and aligned with AQA conventions
4. For hard questions: Include multiple case studies, statistics, and balanced evaluation

Return valid JSON with PROPER LEVEL DESCRIPTOR mark scheme for 9-mark essays:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific details",
  "markScheme": [
    "Level 3 (7-9 marks): Demonstrates detailed knowledge and understanding. Applies understanding to offer thorough, relevant explanations with clear links. Shows thorough geographical skills in interpreting/analysing data.",
    "Level 2 (4-6 marks): Demonstrates clear knowledge and understanding. Applies understanding with relevant explanations. Shows clear geographical skills.",
    "Level 1 (1-3 marks): Demonstrates basic knowledge and understanding. Limited application. Basic geographical skills shown.",
    "Indicative content:",
    "- [Case study 1]: specific details, statistics, location",
    "- [Case study 2]: specific details, statistics, location",
    "- Evaluation of impacts/effectiveness with evidence"
  ]
}`;
}

/**
 * Geography GCSE mark ranges based on AQA specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };   // State, define, describe - basic knowledge recall
    case 'medium':
      return { min: 4, max: 6 };   // Explain, suggest, apply - application and analysis
    case 'hard':
      return { min: 8, max: 9 };   // Evaluate, assess, discuss - extended response requiring judgement
  }
}
