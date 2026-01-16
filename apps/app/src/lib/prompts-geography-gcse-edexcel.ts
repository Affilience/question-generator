// Edexcel GCSE Geography A (1GA0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/geography-a-2016.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
  getVarietyInstructions,
} from './prompts-common';

// ============================================================================
// EDEXCEL GCSE GEOGRAPHY A SPECIFICATION DETAILS (1GA0)
// ============================================================================

const EDEXCEL_GCSE_GEOG_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Geography A Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of locations, places, processes, environments and different scales | 15% |
| **AO2** | Demonstrate geographical understanding of concepts, interrelationships between human and physical processes | 25% |
| **AO3** | Apply knowledge and understanding to interpret, analyse and evaluate geographical information; construct arguments and draw conclusions | 35% |
| **AO4** | Select, adapt and use a variety of skills and techniques to investigate questions and communicate findings | 25% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | The Physical Environment | Global hazards, Landscapes (coast/river/glacial) | 94 | 1hr 30m | 37.5% |
| **Paper 2** | The Human Environment | Changing cities, Development, Resources | 94 | 1hr 30m | 37.5% |
| **Paper 3** | Geographical Investigations | UK fieldwork, UK challenges, Decision-making | 64 | 1hr 30m | 25% |

### Command Words
- **State/Name/Identify**: Give a brief answer (AO1)
- **Describe**: Set out characteristics; say what you see (AO3)
- **Explain**: Set out purposes or reasons; make relationships clear (AO2)
- **Suggest**: Apply your knowledge to propose a reason (AO2/AO3)
- **Assess**: Use evidence to determine relative importance; weigh up and conclude (AO3)
- **Evaluate**: Review information; bring together arguments; reach a conclusion (AO3)
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const EDEXCEL_GCSE_GEOG_TOPIC_KNOWLEDGE: Record<string, string> = {
  'edexcel-gcse-geog-hazardous-earth': `## Hazardous Earth Topic Knowledge

### Climate Change Evidence
- **Ice cores**: Air bubbles trapped in ice show CO₂ levels (Vostok, Antarctica - 400,000 years)
- **Tree rings**: Width indicates climate (dendrochronology)
- **Historical records**: Crop yields, frost fairs on Thames
- **Fossil evidence**: Shows past climate zones

### Natural Causes of Climate Change
- **Milankovitch cycles**: Changes in Earth's orbit (eccentricity, tilt, wobble)
  - 100,000 year cycle (orbit shape)
  - 41,000 year cycle (axial tilt)
  - 26,000 year cycle (precession)
- **Solar output**: Sunspot activity varies on 11-year cycle
- **Volcanic eruptions**: Sulphur dioxide reflects sunlight (Mt Pinatubo 1991 cooled Earth 0.5°C)

### Human Causes of Climate Change
- **Fossil fuels**: 80% of global energy from coal, oil, gas
- **Deforestation**: 10% of emissions, 10 million hectares lost per year
- **Agriculture**: Methane from cattle (1.4 billion cattle globally)
- **Industry**: Manufacturing, cement production
- CO₂ levels: 280ppm pre-industrial → 420ppm today

### Climate Change Impacts
- Temperature: +1.1°C since 1850, predicted +1.5°C by 2030
- Sea level: +20cm since 1900, predicted +0.3-1m by 2100
- Arctic ice: 13% decline per decade
- Extreme weather: More frequent hurricanes, floods, droughts

### Plate Tectonics
- Earth's crust: 7 major plates, 8+ minor plates
- Movement: 2-5cm per year (convection currents in mantle)
- **Constructive**: Mid-Atlantic Ridge, Iceland (plates separate, magma rises)
- **Destructive**: Pacific Ring of Fire (oceanic subducts under continental)
- **Conservative**: San Andreas Fault (plates slide past each other)

### Earthquake Case Study: Nepal 2015 (LIC)
- Magnitude: 7.8 (shallow focus 15km)
- Location: 80km NW of Kathmandu
- Deaths: 8,800+ | Injured: 22,000
- Homeless: 3.5 million
- 600,000 homes destroyed
- Cost: $10 billion (50% of GDP)
- Avalanche on Everest: 19 climbers killed
- Response: UN appeal raised $450 million
- Issues: Remote areas inaccessible, monsoon season coming

### Earthquake Case Study: Chile 2010 (HIC)
- Magnitude: 8.8 (one of largest ever recorded)
- Location: Off coast of Maule region
- Deaths: 525 (relatively low for magnitude)
- Cost: $30 billion
- Buildings: Strict codes - many survived
- Tsunami warning: 15 minutes notice
- Response: Military deployed within hours
- Comparison: Better infrastructure, early warning systems reduced deaths

### Tropical Storm Case Study: Typhoon Haiyan 2013
- Category: 5 super typhoon
- Winds: 315 km/h (one of strongest ever recorded)
- Location: Philippines (Leyte, Tacloban)
- Deaths: 6,300 | Missing: 1,000
- Affected: 14 million people
- Storm surge: 5m wall of water
- Tacloban: 90% destroyed
- Homeless: 600,000
- Cost: $2.9 billion
- Response: UK sent HMS Daring, $1.2 billion aid

### Managing Tectonic Hazards
**Prediction:**
- Seismometers detect tremors
- GPS measures ground movement
- Animal behaviour changes
- Radon gas emissions

**Protection:**
- Earthquake-resistant buildings (shock absorbers, flexible foundations)
- Tsunami barriers (Japan: 15m sea walls)
- Fire-resistant materials

**Planning:**
- Land-use zoning (avoid fault lines)
- Emergency services training
- Evacuation routes and drills
- Public education`,

  'edexcel-gcse-geog-coastal-landscapes': `## Coastal Landscapes Topic Knowledge

### Wave Characteristics
- **Constructive waves**: Low (1m), long wavelength, 6-8 per minute
  - Strong swash, weak backwash
  - Builds beach material (deposition)
- **Destructive waves**: High (over 1m), short wavelength, 10-14 per minute
  - Weak swash, strong backwash
  - Erodes beach (removes material)
- **Fetch**: Distance wind blows over water (Atlantic fetch = 5,000km)

### Coastal Erosion Processes
- **Hydraulic action**: Water compresses air in cracks (explosive force)
- **Abrasion**: Rocks thrown at cliff like sandpaper
- **Attrition**: Rocks smash together, become smaller and rounder
- **Corrosion/Solution**: Chemicals dissolve rock (limestone, chalk)

### Weathering
- **Freeze-thaw**: Water in cracks freezes, expands 9%, shatters rock
- **Salt crystallisation**: Salt water evaporates, crystals grow in cracks
- **Biological**: Roots grow in cracks, burrowing animals, acidic lichens

### Mass Movement
- **Rockfall**: Fragments break off steep cliff
- **Landslide**: Blocks slide down slope
- **Slumping**: Saturated material rotates and slumps (curved slip plane)

### Erosional Landforms
- **Headlands and bays**: Hard rock erodes slower, soft rock forms bays
- **Wave-cut notch**: Erosion at base of cliff (hydraulic action, abrasion)
- **Wave-cut platform**: Cliff retreats, flat platform exposed at low tide
- **Cave → Arch → Stack → Stump**: Progressive erosion of headland
  - Cave: Weak point eroded (fault or joint)
  - Arch: Cave erodes through headland
  - Stack: Arch collapses, leaves pillar
  - Stump: Stack erodes to low platform

### Depositional Landforms
- **Beach**: Sand/shingle deposited by constructive waves
- **Spit**: Beach extends across bay or river mouth
  - Forms by longshore drift
  - Curved end due to wave refraction
  - Example: Spurn Point (5km long)
- **Bar**: Spit joins two headlands, traps lagoon behind
- **Tombolo**: Spit connects mainland to island

### Longshore Drift
- Waves approach at angle (prevailing wind direction)
- Swash carries material up beach at angle
- Backwash carries material straight back
- Net movement along coast (SW→NE in UK)
- Groynes trap sediment to slow drift

### Coastal Management Case Study: Holderness Coast
- Location: East Yorkshire, Flamborough Head to Spurn Point
- Erosion rate: 2m per year (fastest in Europe)
- Since Roman times: 4km land lost, 29 villages destroyed
- Rock: Soft boulder clay from glaciation

**Management at Mappleton (1991):**
- Cost: £2 million
- Protection: Rock armour (granite boulders), two rock groynes
- Success: Village protected, erosion stopped there
- Problem: Downdrift erosion increased at Great Cowden
- Terminal groyne syndrome: Sediment starved south

**Management Options:**
| Method | Cost | Benefits | Problems |
|--------|------|----------|----------|
| Sea wall | £6,000/m | Strong protection | Expensive, ugly, wave reflection |
| Rock armour | £3,000/m | Absorbs wave energy | Access difficult, expensive |
| Groynes | £10,000 each | Trap sediment | Starve downdrift areas |
| Beach nourishment | £3/m³ | Natural look | Needs repeating |
| Managed retreat | Lowest | Sustainable | Loss of land, compensation |`,

  'edexcel-gcse-geog-river-landscapes': `## River Landscapes Topic Knowledge

### Drainage Basin Key Terms
- **Watershed**: Boundary between drainage basins (high ground)
- **Source**: Where river begins (often spring or bog)
- **Mouth**: Where river meets sea
- **Tributary**: Smaller river joining main river
- **Confluence**: Where two rivers meet

### River Processes
**Erosion:**
- **Hydraulic action**: Force of water in cracks
- **Abrasion**: Load scrapes bed and banks
- **Attrition**: Load particles collide, become smaller
- **Solution**: Dissolves soluble rock (limestone)

**Transportation:**
- **Traction**: Large boulders roll along bed
- **Saltation**: Smaller stones bounce along bed
- **Suspension**: Fine particles carried in flow
- **Solution**: Dissolved minerals invisible in water

**Deposition:**
- When velocity decreases
- Inside of meanders
- When river enters sea (delta)
- During floods (floodplain, levees)

### River Landforms

**Upper Course (steep gradient, vertical erosion):**
- **V-shaped valley**: River cuts down, valley sides weathered
- **Interlocking spurs**: River winds around obstacles
- **Waterfall**: Hard rock over soft rock
  - Soft rock undercut, hard rock overhangs
  - Plunge pool at base (hydraulic action)
  - Waterfall retreats leaving gorge
  - Example: High Force, River Tees (21m drop)

**Middle Course (lateral erosion begins):**
- **Meander**: S-shaped bend in river
  - Outside bend: Fast flow, deep, erosion → river cliff
  - Inside bend: Slow flow, shallow, deposition → slip-off slope
  - Thalweg: Line of fastest flow

**Lower Course (deposition dominates):**
- **Floodplain**: Wide, flat valley floor from repeated flooding
- **Levees**: Natural raised banks from flood deposition
- **Ox-bow lake**: Cut-off meander loop
  - Neck narrows, river breaks through during flood
  - Ends sealed by deposition
  - Lake eventually dries up
- **Delta**: Sediment deposited at mouth (velocity drops)

### Flooding

**Physical Causes:**
- Prolonged rainfall (saturates ground)
- Intense rainfall (exceeds infiltration rate)
- Snowmelt
- Impermeable rock (rapid runoff)
- Steep slopes (quick surface runoff)

**Human Causes:**
- Urbanisation (impermeable surfaces)
- Deforestation (reduced interception)
- Agriculture (compacted soil, less infiltration)

**Hydrographs:**
- **Rising limb**: Shows how quickly discharge increases
- **Peak discharge**: Maximum flow (cumecs)
- **Lag time**: Time from peak rainfall to peak discharge
- **Falling limb**: Return to normal (recession)
- Short lag time = high flood risk (urban areas)

### Flood Management Case Study: Boscastle 2004
- Location: North Cornwall
- Date: 16th August 2004
- Rainfall: 89mm in 1 hour (1 month's rain)
- River Valency: Usually 20cm deep, rose to 2m
- Cars: 100+ swept into harbour
- Buildings: 50 destroyed or damaged
- Cost: £2 million damage
- No deaths (due to luck and quick response)

**Causes:**
- Steep valley sides (quick runoff)
- Saturated ground from previous rain
- Narrow valley funnelled water
- Low bridge trapped debris

**Responses:**
- £4.5 million flood defence scheme
- River channel widened and deepened
- New bridge with wider span
- Culvert removed
- Flood warning systems improved`,

  'edexcel-gcse-geog-glaciated-landscapes': `## Glaciated Landscapes Topic Knowledge

### Glaciation in the UK
- Last Ice Age: Ended 10,000 years ago
- Ice covered: Scotland, Wales, Northern England, Ireland
- Maximum extent: As far south as Thames Valley
- Evidence: U-shaped valleys, moraines, erratics

### Glacier Formation
1. Snow accumulates in hollow (north-facing in UK)
2. Compaction over years (snow → firn → ice)
3. Air squeezed out, density increases
4. Glacier forms when ice moves under own weight
5. Moves 10-200m per year

### Glacial Erosion Processes
- **Plucking**: Ice freezes to rock, pulls pieces away as glacier moves
- **Abrasion**: Rocks frozen in ice scrape bedrock (striations)
- **Freeze-thaw**: Water in cracks freezes, expands, shatters rock

### Erosional Landforms
**Corrie (Cirque):**
- Armchair-shaped hollow
- North-facing (shade keeps ice frozen)
- Steep back wall (freeze-thaw)
- Rotational movement deepens hollow
- Rock lip at front
- Tarn forms when glacier melts (e.g., Red Tarn, Lake District)

**Arête:**
- Knife-edge ridge
- Two corries erode back-to-back
- Example: Striding Edge, Helvellyn

**Pyramidal Peak:**
- Three or more corries erode into mountain
- Sharp, pointed summit
- Example: Snowdon, Matterhorn

**U-shaped Valley:**
- Glacier widens and deepens V-shaped valley
- Steep sides, flat floor
- Truncated spurs (former interlocking spurs)
- Example: Nant Ffrancon, Snowdonia

**Hanging Valley:**
- Tributary glacier didn't erode as deeply
- Valley left "hanging" above main valley
- Waterfall where it meets main valley

**Ribbon Lake:**
- Long, narrow lake in U-shaped valley
- Formed in over-deepened section
- Or behind moraine dam
- Examples: Windermere, Wastwater

### Depositional Landforms
**Moraine:**
- Unsorted material (till) deposited by glacier
- **Lateral**: Along valley sides
- **Medial**: Where two glaciers meet
- **Terminal**: At glacier snout (marks furthest extent)
- **Ground**: Under glacier

**Drumlins:**
- Egg-shaped hills of till
- Steep end (stoss) faces upvalley
- Gentle slope (lee) faces downvalley
- "Basket of eggs" topography
- Example: Ribble Valley

**Erratics:**
- Large boulders transported and deposited
- Different rock type from local geology
- Example: Norber erratics (limestone on shale)

### Lake District Case Study
- Location: Cumbria, North West England
- Area: 2,362 km² (largest National Park in England)
- Visitors: 19 million per year
- Economy: Tourism worth £3 billion

**Landforms:**
- Scafell Pike: Highest mountain in England (978m)
- Helvellyn: Popular peak, Striding Edge arête
- Windermere: Largest lake in England (17km)
- Wastwater: Deepest lake in England (79m)

**Opportunities:**
- Tourism: Walking, climbing, water sports
- Farming: Hill sheep farming
- Forestry: Grizedale Forest
- Quarrying: Slate at Honister

**Challenges:**
- Footpath erosion (Fix the Fells project: £1 million)
- Traffic congestion (narrow roads)
- House prices (locals priced out)
- Conflicts between users`,

  'edexcel-gcse-geog-changing-cities': `## Changing Cities Topic Knowledge

### Global Urbanisation
- 1950: 30% of world urban
- 2008: First time >50% urban
- 2050: Predicted 68% urban
- Fastest urbanisation: Africa, Asia (3% per year)
- Slowest: Europe, North America (already 80% urban)

### Megacities (10+ million population)
- 1950: 2 megacities (New York, Tokyo)
- 2020: 34 megacities
- 2030: Predicted 43 megacities
- Largest: Tokyo (37m), Delhi (32m), Shanghai (28m)

### UK City Case Study: London
**Location:**
- South East England, River Thames
- 32 boroughs, Greater London Authority

**Population:**
- 9 million (14% of UK population)
- Growing 100,000 per year
- Most diverse city: 300+ languages spoken

**Economic Importance:**
- GDP: £490 billion (22% of UK GDP)
- Financial centre: Canary Wharf, City of London
- Creative industries: Media, fashion, design
- Tourism: 30 million visitors per year

**Opportunities:**
- Employment: Finance, tech, creative industries
- Culture: Museums, theatres, galleries (free museums)
- Education: 40+ universities, 400,000 students
- Healthcare: World-class hospitals (Great Ormond Street)

**Challenges:**
- Housing: Average price £500,000 (12x average salary)
- Inequality: Rich Chelsea vs. deprived Newham
- Traffic: 300,000 commuters daily, congestion charge £15
- Air pollution: High Street Kensington exceeds limits

**Urban Regeneration: Stratford Olympic Park**
- Investment: £9 billion for 2012 Olympics
- Legacy: Queen Elizabeth Olympic Park
- Housing: 2,800 homes (30% affordable)
- Jobs: 10,000 jobs created
- Transport: New Stratford International station

### NEE City Case Study: Mumbai, India
**Location:**
- West coast of India, Maharashtra state
- Built on 7 islands (now joined by reclamation)

**Population:**
- 21 million (metropolitan area)
- Growing by 400,000 per year
- 65% live in slums

**Economic Importance:**
- GDP: $310 billion (10% of India's GDP)
- Financial capital: Bombay Stock Exchange
- Bollywood: Film industry (1,500 films/year)
- Port: 40% of India's foreign trade

**Opportunities:**
- Employment: IT, financial services, manufacturing
- Education: Indian Institute of Technology
- Healthcare: Private hospitals attract medical tourism

**Challenges:**
- **Dharavi Slum** (largest in Asia):
  - 1 million people in 2 km²
  - No running water, 1 toilet per 1,500 people
  - Annual economy: $1 billion (recycling, pottery, leather)

**Improving Quality of Life:**
- Vision Mumbai: $40 billion regeneration plan
- Slum Rehabilitation Authority: Provides free housing
- Problems: Corruption, slow progress, people resist moving

### Sustainable Urban Living: Curitiba, Brazil
- Population: 1.9 million
- Known as "most sustainable city in world"
- Bus Rapid Transit (BRT): Copied by 150+ cities
- Green space: 52m² per person (vs. 1m² in São Paulo)
- Recycling: 70% of waste recycled
- "Green exchange": Food for recycling in slums`,

  'edexcel-gcse-geog-global-development': `## Global Development Topic Knowledge

### Development Indicators
| Indicator | HIC Example | LIC Example |
|-----------|-------------|-------------|
| GNI per capita | UK: $42,000 | Malawi: $340 |
| Life expectancy | Japan: 84 years | Chad: 54 years |
| Literacy rate | UK: 99% | Niger: 19% |
| Infant mortality | Sweden: 2/1,000 | Sierra Leone: 80/1,000 |
| HDI | Norway: 0.957 | Niger: 0.354 |

### Development Gap
- Richest 10% own 76% of global wealth
- Poorest 50% own 2% of global wealth
- 700 million people in extreme poverty (<$1.90/day)
- 10% of world population is undernourished

### Causes of Uneven Development

**Physical:**
- Climate: Extreme temperatures, drought, flooding
- Natural disasters: Earthquakes, tsunamis, hurricanes
- Resources: Landlocked, no minerals
- Diseases: Malaria, HIV/AIDS

**Economic:**
- Trade: Unfair terms, primary products low value
- Debt: Repayments exceed aid received
- TNCs: Profits sent abroad, low wages

**Historical:**
- Colonialism: Resources extracted, borders drawn
- Slavery: Population reduced, societies disrupted

### Strategies to Reduce the Development Gap

**Aid:**
- Bilateral: UK gave £14 billion in 2019
- Multilateral: World Bank, IMF, UN
- NGO: Oxfam, WaterAid, Médecins Sans Frontières
- Problems: Creates dependency, corruption, tied aid

**Trade:**
- Fair Trade: Guaranteed minimum price + premium
- 1.7 million farmers in 75 countries
- Products: Coffee, cocoa, bananas, cotton
- Consumers pay more, farmers get stable income

**Investment (FDI):**
- TNCs invest in factories, infrastructure
- Creates jobs, transfers technology
- Problems: Profits leave country, low wages, pollution

**Intermediate Technology:**
- Appropriate for skills and resources available
- Examples:
  - WaterAid hand pumps in Mali
  - Solar cookers in Kenya
  - Bike ambulances in Malawi
  - Clay pot refrigerators (pot-in-pot)

**Microfinance:**
- Small loans to poor people
- Grameen Bank (Bangladesh): $30 billion lent
- 97% borrowers are women
- 98% repayment rate

### Development Case Study: Nigeria (NEE)
**Location:**
- West Africa, Atlantic coast
- Population: 206 million (largest in Africa)
- Capital: Abuja

**Economic Importance:**
- Largest economy in Africa ($450 billion GDP)
- Oil: 10th largest producer, 90% of exports
- Agriculture: Cocoa, palm oil, rubber

**Development Progress:**
- GDP per capita: $2,000 (up from $300 in 1970)
- Life expectancy: 54 years (up from 42 in 1960)
- Literacy: 62% (up from 15% in 1970)
- HDI: 0.539 (low human development)

**Challenges:**
- Inequality: Oil wealth not shared equally
- Corruption: Transparency International rank 149/180
- Boko Haram: Terrorism in north
- Environment: Oil spills in Niger Delta
- Regional differences: North poorer than South

**TNCs in Nigeria: Shell**
- Operating since 1956
- Produces 39% of Nigeria's oil
- **Positives**: Jobs, infrastructure, $2 billion/year in taxes
- **Negatives**: 6,800+ oil spills (1976-2001), gas flaring, pollution

**Environmental Impacts:**
- Niger Delta: 70% of spilled oil unremediated
- Gas flaring: 17 billion m³ burned per year
- Deforestation: 3.5% loss per year
- Desertification: Sahel advancing south`,

  'edexcel-gcse-geog-resource-management': `## Resource Management Topic Knowledge

### Global Resource Distribution
- Fossil fuels: Concentrated in Middle East, Russia, North America
- Renewable energy: Solar potential highest at equator
- Water: 70% in ice caps, 30% of freshwater underground
- Food: 10% of land is arable, concentrated in fertile areas

### Global Energy Consumption
- World uses 580 EJ per year (exajoules)
- 80% from fossil fuels
- Consumption per capita:
  - USA: 300 GJ/person/year
  - UK: 120 GJ/person/year
  - India: 25 GJ/person/year
  - Ethiopia: 15 GJ/person/year

### Energy Sources

**Non-Renewable (Finite):**
| Source | % of Global | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Oil | 33% | High energy density, versatile | CO₂ emissions, finite, price volatile |
| Coal | 27% | Abundant, cheap | Most polluting, mining dangerous |
| Gas | 24% | Cleanest fossil fuel | Methane leaks, fracking controversy |
| Nuclear | 4% | No CO₂, reliable | Waste disposal, accidents, expensive |

**Renewable (Infinite):**
| Source | % of Global | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Hydro | 7% | Reliable, no emissions | Habitat destruction, displacement |
| Wind | 3% | No emissions, cheap to run | Intermittent, visual impact, noise |
| Solar | 2% | No emissions, low maintenance | Intermittent, expensive to install |
| Biomass | 1% | Carbon neutral, uses waste | Land use, deforestation risk |

### Energy Security
- **Energy secure**: Reliable supply at affordable prices
- **Energy insecure**: Vulnerable to supply disruption

**Energy Insecure Countries:**
- Import >50% of energy
- Depend on single source/supplier
- Vulnerable to price shocks
- Examples: Japan (90% imported), UK (36% imported)

**Energy Secure Countries:**
- Domestic production
- Diverse energy mix
- Examples: Russia, Saudi Arabia, USA

### UK Energy Mix
**Historical Changes:**
- 1970: 90% coal
- 2000: 40% gas, 30% coal, 25% nuclear
- 2020: 40% renewables, 40% gas, 16% nuclear, <2% coal

**Renewable Growth:**
- Offshore wind: World leader (10GW capacity)
- Hornsea Wind Farm: World's largest (1.2GW)
- Solar: 14GW capacity
- Target: Net zero by 2050

**Fracking Controversy:**
- Hydraulic fracturing for shale gas
- Potential: 50 years of gas supply
- Benefits: Jobs, energy security, cheaper gas
- Problems: Earthquakes (Lancashire 2019: 2.9 magnitude), water contamination, industrialisation of countryside
- Status: Moratorium since 2019

### Energy Case Study: Iceland
**Location:** North Atlantic, on Mid-Atlantic Ridge

**Renewable Energy:**
- 100% electricity from renewable sources
- Geothermal: 25% of electricity, 90% of heating
- Hydro: 75% of electricity

**Geothermal Energy:**
- Hot rocks from volcanic activity
- Water pumped down, steam rises
- Nesjavellir Power Station: 120MW

**Benefits:**
- No fuel costs
- Very low emissions
- Energy security
- Cheap electricity (attracts aluminium smelting)

**Challenges:**
- High initial investment
- Location specific
- Earthquake risk

### Sustainable Energy Management
**Reducing Demand:**
- Energy efficient appliances (A+++ rating)
- LED lighting (90% less energy than incandescent)
- Insulation (cavity wall, loft)
- Smart meters

**Conservation:**
- Turning off unused devices
- Public transport
- Shorter showers
- Lower heating temperature`,

  'edexcel-gcse-geog-fieldwork-skills': `## Fieldwork and Skills Topic Knowledge

### Fieldwork Enquiry Process
1. **Question/Hypothesis**: What are you investigating?
2. **Planning**: What data? How collected?
3. **Data Collection**: Primary and secondary sources
4. **Presentation**: Maps, graphs, charts
5. **Analysis**: Describe patterns, explain findings
6. **Conclusion**: Answer original question
7. **Evaluation**: Limitations, improvements

### Sampling Methods
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Random** | Using random numbers | No bias | May miss key areas |
| **Systematic** | Regular intervals | Covers whole area | May miss patterns |
| **Stratified** | Proportional to groups | Representative | Requires prior knowledge |

### Data Collection Methods

**Primary Data:**
- Questionnaires
- Interviews
- Environmental quality surveys
- Field sketches and photographs
- Measurements (river width, velocity)
- Traffic/pedestrian counts
- Land use surveys

**Secondary Data:**
- Census data
- OS maps
- Satellite images
- Historical photographs
- Government statistics
- Academic research

### River Fieldwork
**Equipment:**
- Tape measure (width, depth)
- Ranging poles (visibility)
- Flow meter (velocity)
- Clinometer (gradient)
- Stopwatch (timing float)

**Measurements:**
- Width: Tape across river at water surface
- Depth: Metre ruler at regular intervals
- Velocity: Time for float to travel 10m
- Cross-sectional area: Width × average depth
- Discharge: Area × velocity (cumecs)

**Hypothesis**: "Velocity increases downstream"
**Data presentation**: Cross-section diagram, scatter graph

### Urban Fieldwork
**Environmental Quality Survey (EQS):**
Score 1-5 for:
- Litter
- Graffiti
- Noise levels
- Air quality
- Green space
- Building condition
- Traffic

**Land Use Survey:**
- Record use of each building
- Categories: Residential, commercial, industrial, services

**Hypothesis**: "Environmental quality improves with distance from CBD"
**Data presentation**: Choropleth map, bar chart

### OS Map Skills
**Grid References:**
- 4-figure: Identifies 1km² square
- 6-figure: Pinpoints location to 100m
- Remember: "Along the corridor, up the stairs"

**Scale:**
- 1:50,000 (Landranger): 2cm = 1km
- 1:25,000 (Explorer): 4cm = 1km

**Contour Lines:**
- Close together = steep
- Far apart = gentle
- V-shapes point upstream in valleys

### Graphical Skills
**Line Graph:** Changes over time (temperature, discharge)
**Bar Chart:** Comparing categories (rainfall by month)
**Pie Chart:** Proportions of whole (land use)
**Scatter Graph:** Correlation between variables
**Choropleth Map:** Shows density/distribution (population density)
**Population Pyramid:** Age-sex structure

### Statistical Skills
**Measures of Central Tendency:**
- **Mean**: Sum ÷ number of values
- **Median**: Middle value when ordered
- **Mode**: Most frequent value

**Percentage Change:**
- Formula: (New - Old) / Old × 100

**Interquartile Range:**
- IQR = Q3 - Q1
- Shows spread without extremes`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const EDEXCEL_GCSE_GEOG_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: 4-Mark Explain Question
**Question:** Explain the formation of a spit. [4 marks]

**Model Answer:**
A spit forms due to longshore drift transporting sediment along the coast (1). When the coastline changes direction, such as at a river mouth or bay, the material continues to be deposited in the original direction (1). Over time, sediment accumulates and extends out into the sea, forming a long, narrow ridge of sand or shingle (1). The end of the spit often curves due to wave refraction, and salt marshes may form in the sheltered water behind it. Spurn Point in Holderness is 5km long (1).

**Mark Scheme:**
- Longshore drift transports sediment [1]
- Deposition when coastline changes direction [1]
- Material builds up over time [1]
- Named example or additional feature (curved end, marsh) [1]

---

### Example 2: 6-Mark Explain Question
**Question:** Explain why earthquakes have different impacts in HICs and LICs. [6 marks]

**Model Answer:**
Earthquakes in LICs typically cause more deaths than similar magnitude events in HICs. The Nepal earthquake (2015, magnitude 7.8) killed over 8,800 people, while the Chile earthquake (2010, magnitude 8.8) killed only 525.

Building quality is a major factor. In HICs like Chile and Japan, strict building codes require earthquake-resistant construction with flexible foundations and shock absorbers. In Nepal, many buildings were made of mud brick or poorly reinforced concrete, which collapsed easily.

Infrastructure also differs. In HICs, emergency services are well-equipped and can respond quickly. Japan's Self-Defense Forces were deployed within hours. In Nepal, remote mountain areas were inaccessible, and the country lacked helicopters and heavy lifting equipment.

Finally, wealth affects preparation. HICs invest in early warning systems, public education, and emergency drills. LICs lack resources for these measures, leaving populations more vulnerable.

**Mark Scheme:**
- Building quality/construction standards [1-2]
- Infrastructure and emergency services [1-2]
- Wealth and preparation [1-2]
- Specific examples/statistics used [1-2]
Level 3 (5-6): Detailed explanation with specific examples from named earthquakes
Level 2 (3-4): Some explanation with some examples
Level 1 (1-2): Basic points, limited development

---

### Example 3: 8-Mark Extended Writing
**Question:** Assess the effectiveness of strategies used to manage climate change. [8 marks]

**Model Answer:**
Climate change management involves both mitigation (reducing causes) and adaptation (adjusting to effects). These strategies vary in effectiveness depending on scale and implementation.

Mitigation strategies aim to reduce greenhouse gas emissions. International agreements like the Paris Agreement (2015) set targets to limit warming to 1.5°C, with 196 countries committing to reduce emissions. However, effectiveness is limited because targets are voluntary, major emitters like the USA temporarily withdrew, and global emissions continued rising until 2020.

Renewable energy is a more effective mitigation strategy. The UK has reduced emissions by 40% since 1990 partly by increasing renewable energy to 40% of electricity, including building the world's largest offshore wind farm at Hornsea. However, developing countries argue they need cheap fossil fuels to develop, limiting global effectiveness.

Adaptation strategies help countries cope with unavoidable changes. The Thames Barrier has been raised over 100 times since 1982 to protect London from flooding. Netherlands spends €1 billion annually on flood defences. These are effective locally but expensive and not available to poorer countries.

In Bangladesh (LIC), adaptation includes building cyclone shelters and introducing flood-resistant rice varieties. These appropriate technology approaches are cost-effective but cannot prevent all damage from increasingly severe flooding.

In conclusion, climate change strategies have had some success - global emissions growth has slowed, and adaptation has reduced deaths in some areas. However, effectiveness is limited by international disagreement, cost, and the challenge of balancing development with environmental protection. A combination of mitigation and adaptation at all scales is needed, but current efforts remain insufficient to meet the 1.5°C target.

**Mark Scheme:**
Level 3 (6-8 marks):
- Thorough knowledge of mitigation and adaptation strategies
- Detailed examples with statistics (Paris Agreement, Thames Barrier, Hornsea)
- Balanced assessment considering successes and limitations
- Clear, well-supported conclusion about overall effectiveness
- Accurate use of geographical terminology

Level 2 (3-5 marks):
- Some knowledge of strategies
- Some examples but limited detail
- Partial assessment
- Limited conclusion

Level 1 (1-2 marks):
- Basic knowledge
- Few or no examples
- Descriptive rather than evaluative
`;

// ============================================================================
// QUESTION TEMPLATES
// ============================================================================

const EDEXCEL_GCSE_GEOG_QUESTION_TEMPLATES = `
## Authentic Edexcel GCSE Geography A Question Formats

### Type 1: Basic Knowledge (1-2 marks)
Format: "State/Name/Define [feature/term]"
**Examples:**
- "State one characteristic of a destructive wave" [1 mark]
- "Name one type of hard engineering" [1 mark]
Marking: 1 mark per correct identification

### Type 2: Describe Questions (2-4 marks)
Format: "Describe [feature/pattern/characteristic]"
**Examples:**
- "Describe the distribution of earthquakes shown in Figure 2" [2 marks]
- "Describe the characteristics of a meander" [4 marks]
Marking: 1 mark per valid point with development

### Type 3: Explain Questions (4-6 marks)
Format: "Explain [process/relationship/reason]"
**Examples:**
- "Explain the formation of a waterfall" [4 marks]
- "Explain how urbanisation creates challenges in cities" [6 marks]
Marking: Credit explanation with developed reasoning

### Type 4: Resource-Based (4-6 marks)
Format: "Study Figure X. [Describe/Explain/Calculate]..."
**Examples:**
- "Study Figure 3. Describe the trend shown" [3 marks]
- "Study the photograph. Explain the evidence for erosion" [4 marks]
Marking: Must reference the resource to access full marks

### Type 5: Suggest Questions (3-4 marks)
Format: "Suggest [reason/explanation] for..."
**Examples:**
- "Suggest one reason why the line of the graph increases" [2 marks]
- "Suggest how climate change may affect this area" [4 marks]
Marking: Accept logical suggestions with reasoning

### Type 6: 8-Mark Extended Writing
Format: "Assess/Evaluate [importance/success/impacts]"
**Examples:**
- "Assess the effectiveness of strategies used to manage coastal erosion" [8 marks]
- "Evaluate the social and economic impacts of migration on a named city" [8 marks]
Marking (Levels):
- Level 3 (6-8): Thorough; detailed; balanced evaluation; clear conclusion
- Level 2 (3-5): Some detail; partial evaluation; limited conclusion
- Level 1 (1-2): Basic; descriptive; little or no evaluation
`;

// ============================================================================
// MARK SCHEME CONVENTIONS
// ============================================================================

const EDEXCEL_GCSE_GEOG_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE Geography A Mark Scheme Conventions

### 8-Mark Extended Writing Levels

**Level 3 (6-8 marks):**
- Shows thorough knowledge and understanding
- Applies knowledge to offer detailed explanation
- Response is well-structured and coherent
- Offers a balanced evaluation with developed points
- Reaches a clear, well-supported conclusion
- Uses geographical terminology accurately

**Level 2 (3-5 marks):**
- Shows some knowledge and understanding
- Applies knowledge with some explanation
- Response has some structure
- Some evaluation but may lack development
- May reach a conclusion but support limited
- Some use of geographical terminology

**Level 1 (1-2 marks):**
- Shows limited knowledge
- Simple statements with limited explanation
- Response lacks structure
- Little or no evaluation
- No conclusion or unsupported
- Limited geographical terminology

**0 marks:** No relevant content

### 6-Mark Questions
Point-marked or levels:
- 2 marks per developed point (3 points max)
- OR Level 3 (5-6), Level 2 (3-4), Level 1 (1-2)

### Key Case Studies/Examples
- Tectonic hazard: Nepal 2015 (LIC), Chile 2010 (HIC)
- Tropical storm: Typhoon Haiyan 2013
- UK coast: Holderness Coast, Mappleton
- UK river: Boscastle 2004
- Glaciated landscape: Lake District
- UK city: London
- NEE city: Mumbai, India
- Development: Nigeria
- Energy: Iceland (geothermal)
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelGCSEGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = EDEXCEL_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert Edexcel GCSE Geography examiner creating exam-style questions.

${EDEXCEL_GCSE_GEOG_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${EDEXCEL_GCSE_GEOG_QUESTION_TEMPLATES}

${EDEXCEL_GCSE_GEOG_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_GCSE_GEOG_WORKED_EXAMPLES}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic Edexcel Style**: Match real Edexcel paper format
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: State, name, basic describe (1-3 marks)
   - Medium: Explain, suggest, resource-based (4-6 marks)
   - Hard: 8-mark extended writing with evaluation (8 marks)
5. **Use Specific Knowledge**: Include real statistics, case studies, and examples

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Model answer with specific facts and figures
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('geography')}`;
}

export function getEdexcelGCSEGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);
  const topicKnowledge = EDEXCEL_GCSE_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing basic knowledge (AO1/AO3).

**Question Types:**
- "State [feature/characteristic]" [1 mark]
- "Name [type/example]" [1 mark]
- "Describe [pattern/distribution]" [2-3 marks]

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create a question requiring explanation or application (AO2/AO3).

**Question Types:**
- "Explain [process/formation]" [4 marks]
- "Explain why [phenomenon occurs]" [6 marks]
- "Study Figure X. Explain..." [4-6 marks]
- "Suggest reasons for..." [4 marks]

Include specific facts, statistics, or case study references in the model answer.

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create an 8-mark extended writing question requiring evaluation (AO3).

**Question Types:**
- "Assess the effectiveness of [strategy/approach]" [8 marks]
- "Evaluate the [impacts/success] of..." [8 marks]
- "Using a named example, assess..." [8 marks]

**8-Mark Levels:**
- Level 3 (6-8): Thorough knowledge; detailed explanation; balanced evaluation; clear conclusion
- Level 2 (3-5): Some knowledge; partial explanation; some evaluation
- Level 1 (1-2): Basic knowledge; simple statements; little evaluation

The model answer MUST include:
- Specific case study details (dates, statistics, place names)
- Multiple perspectives (successes AND limitations)
- Clear evaluation with supported conclusion

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an Edexcel GCSE Geography A question.

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
3. Mark scheme must be detailed and aligned with Edexcel conventions
4. For hard questions: Include multiple case studies, statistics, and balanced evaluation

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "model answer with specific details",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 3 };
    case 'medium':
      return { min: 4, max: 6 };
    case 'hard':
      return { min: 8, max: 8 };
  }
}
