// AQA A-Level Geography (7037) Question Generation Prompts
// Based on analysis of official AQA specification and mark schemes
// Reference: https://www.aqa.org.uk/subjects/geography/a-level/geography-7037

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
  getVarietyInstructions,
} from './prompts-common';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';

// ============================================================================
// AQA A-LEVEL GEOGRAPHY SPECIFICATION DETAILS (7037)
// ============================================================================

const AQA_ALEVEL_GEOG_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, explanation, basic application | Explain processes, outline features, describe patterns |
| **Medium** | Analysis, interpretation, evaluation | Analyse data/maps, apply theory to case studies, evaluate factors |
| **Hard** | Synthesis, judgement, synoptic thinking | Evaluate competing theories, assess extent of claims, construct balanced arguments |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires synoptic thinking across multiple topic areas
- Demands evaluation of competing geographical theories (Massey, Harvey, Wallerstein)
- Must use multiple case studies to support a balanced argument
- Requires explicit judgement with "to what extent" conclusions
- No single "correct" answer - student must construct and defend a geographical argument

**Easy (4-6 marks):** Explanation - describe/explain processes with supporting detail
**Medium (9 marks):** Application/analysis - apply theory to case study with some evaluation
**Hard (20 marks):** Extended response - evaluate with synoptic links, balanced argument, substantiated conclusion
`;

const AQA_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Geography Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change at a variety of scales | 30-40% |
| **AO2** | Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues | 30-40% |
| **AO3** | Use a variety of relevant quantitative, qualitative and fieldwork skills to: investigate geographical questions and issues; interpret, analyse and evaluate data and evidence; construct arguments and draw conclusions | 20-30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Physical Geography | Water/Carbon Cycles + Options (Coastal/Glacial/Hot Desert) + Options (Hazards/Ecosystems) | 120 | 2hr 30m | 40% |
| **Paper 2** | Human Geography | Global Systems/Governance + Changing Places + Options (Urban/Population/Resource) | 120 | 2hr 30m | 40% |
| **NEA** | Investigation | Independent fieldwork investigation | 60 | N/A | 20% |

### Question Types
- Short answer (4-6 marks)
- Application/interpretation (6-9 marks)
- Extended response (20 marks)

### Command Words
- **Explain**: Give reasons for; make the relationships between things clear
- **Analyse**: Break down concepts to bring out key elements; examine in detail
- **Assess**: Consider several viewpoints/options; weigh up relative importance; reach a judgement
- **Evaluate**: Consider evidence and reach a supported conclusion
- **To what extent**: Consider evidence; form and justify a judgement
`;

// ============================================================================
// GEOGRAPHICAL THEORIES AND THEORISTS
// ============================================================================

const AQA_ALEVEL_GEOG_THEORIES = `
## Key Geographical Theories and Theorists

### Doreen Massey - Sense of Place and Power Geometry
- **Sense of Place**: Places are not fixed but are processes of social interactions
- **Power Geometry**: Different social groups have different relationships with mobility and place
- **Throwntogetherness**: The coming together of previously unrelated trajectories
- Places have multiple identities and meanings for different people
- Globalisation affects places differently depending on power relations

### David Harvey - Time-Space Compression
- The speeding up of economic and social processes through technology
- Globalisation compresses geographical barriers
- Capitalism produces uneven geographical development
- "The annihilation of space by time" - faster transport/communication reduces importance of distance
- Capital accumulates by switching between places

### Wallerstein - World Systems Theory
- **Core**: Wealthy nations that dominate global trade (USA, Western Europe, Japan)
- **Semi-periphery**: Emerging economies with mix of industries (China, Brazil, India)
- **Periphery**: Least developed countries dependent on primary exports
- Exploitation flows from periphery to core
- Position in system is not fixed - countries can move up or down

### Rostow - Modernisation Theory (1960)
- **Stage 1**: Traditional society (subsistence agriculture)
- **Stage 2**: Preconditions for take-off (export-led growth begins)
- **Stage 3**: Take-off (rapid industrialisation, 10-15% savings rate)
- **Stage 4**: Drive to maturity (diversified economy)
- **Stage 5**: Age of high mass consumption
- Criticised as Eurocentric and ignoring historical exploitation

### Frank - Dependency Theory
- Development of core countries caused underdevelopment in periphery
- Colonial relationships created lasting dependency
- TNCs perpetuate unequal relationships
- Breaking dependency requires restructuring global trade

### Park Response Model (Hazards)
- Shows how quality of life changes before, during, and after a disaster
- **Pre-disaster**: Normal level
- **Event**: Sharp decline in quality of life
- **Relief**: Immediate emergency response
- **Rehabilitation**: Short-term recovery
- **Reconstruction**: Long-term rebuilding
- Speed of recovery depends on development level and hazard preparedness

### Hazard Risk Equation
Risk = (Hazard x Vulnerability) / Capacity
- **Hazard**: Probability and magnitude of event
- **Vulnerability**: Susceptibility to harm (poverty, location, building quality)
- **Capacity**: Ability to cope and adapt (wealth, technology, governance)

### Pressure and Release Model (PAR)
- Links root causes to unsafe conditions that create vulnerability
- Root causes: Limited access to power, resources, political systems
- Dynamic pressures: Lack of training, local investments, press freedom
- Unsafe conditions: Dangerous locations, fragile buildings, unprotected infrastructure

### Demographic Transition Model
- **Stage 1**: High birth rate, high death rate (population stable)
- **Stage 2**: High birth rate, falling death rate (population growing rapidly)
- **Stage 3**: Falling birth rate, low death rate (population still growing)
- **Stage 4**: Low birth rate, low death rate (population stable)
- **Stage 5**: Birth rate below death rate (population declining) - debated

### Zelinsky - Migration Transition Model
- Links migration patterns to stages of demographic transition
- Stage 1: Limited migration
- Stage 2: High rural-urban migration
- Stage 3: Rural-urban migration slows, inter-urban increases
- Stage 4: International migration increases
- Stage 5: Return migration and counter-urbanisation

### Lee's Push-Pull Model (Migration)
- **Push factors**: War, poverty, lack of opportunities, discrimination
- **Pull factors**: Jobs, safety, better services, family connections
- **Intervening obstacles**: Distance, borders, cost, language
- Decision to migrate is personal perception of factors

### Christaller - Central Place Theory
- Settlements exist to provide services (central functions)
- Higher-order settlements provide more services and have larger spheres of influence
- Hexagonal pattern in ideal conditions
- Threshold population needed for each service
- Range = maximum distance people will travel for service
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const AQA_ALEVEL_GEOG_TOPIC_KNOWLEDGE: Record<string, string> = {
  'aqa-alevel-geog-water-carbon-cycles': `## Water and Carbon Cycles Topic Knowledge

### The Global Water Cycle
**Key Stores:**
- Oceans: 96.5% of all water (1,335 million km3)
- Ice caps/glaciers: 1.74% (24 million km3)
- Groundwater: 1.69% (10.6 million km3)
- Lakes: 0.013%
- Atmosphere: 0.001% (12,900 km3)
- Rivers: 0.0002% (2,120 km3)

**Key Fluxes (Annual):**
- Precipitation over oceans: 398,000 km3/year
- Evaporation from oceans: 434,000 km3/year
- Precipitation over land: 107,000 km3/year
- Evapotranspiration from land: 71,000 km3/year
- Runoff to oceans: 36,000 km3/year

**Residence Times:**
- Atmosphere: 8-10 days
- Rivers: 2-6 months
- Soil moisture: 1-2 months
- Deep groundwater: 10,000+ years
- Ocean deep water: 1,000+ years
- Ice caps: 10,000-100,000 years

### Drainage Basin Water Cycle
**Inputs:**
- Precipitation (rainfall, snow, sleet, hail)
- Energy from sun (drives evapotranspiration)

**Storage:**
- Interception (vegetation canopy)
- Surface storage (puddles, lakes)
- Soil moisture (vadose zone)
- Groundwater (saturated zone)
- Channel storage

**Flows/Transfers:**
- Infiltration: Movement into soil (rate affected by soil type, vegetation, land use)
- Percolation: Downward movement through soil to groundwater
- Throughflow: Lateral movement through soil
- Groundwater flow: Slow movement through permeable rock
- Overland flow: Surface movement (Hortonian or saturation excess)
- Stemflow: Water running down plant stems
- Channel flow: Movement within river channel

**Outputs:**
- Evaporation: Liquid to vapour from surfaces
- Transpiration: Water loss through plant stomata
- Evapotranspiration: Combined ET
- River discharge to sea

### Storm Hydrographs
**Key Features:**
- Lag time: Gap between peak rainfall and peak discharge
- Rising limb: Increase in discharge after rainfall
- Falling/recession limb: Gradual decrease after peak
- Baseflow: Normal flow from groundwater

**Factors Affecting Hydrograph Shape:**
| Factor | Short Lag/Flashy | Long Lag/Gentle |
|--------|------------------|-----------------|
| Basin size | Small | Large |
| Basin shape | Circular | Elongated |
| Drainage density | High | Low |
| Rock type | Impermeable | Permeable |
| Soil type | Clay | Sandy |
| Vegetation | Sparse | Dense |
| Urbanisation | High | Low |
| Antecedent conditions | Saturated | Dry |
| Precipitation | Intense | Gentle |

### The Global Carbon Cycle
**Major Stores (Gt C):**
- Lithosphere (rocks, sediments): 100,000,000 Gt
- Ocean (dissolved, biomass): 38,000 Gt
- Fossil fuels: 4,000 Gt
- Soil organic matter: 1,500 Gt
- Atmosphere: 750 Gt (rising - was 590 Gt pre-industrial)
- Terrestrial biomass: 560 Gt
- Permafrost: 1,700 Gt

**Key Fluxes (Gt C/year):**
- Photosynthesis: 120 Gt/year
- Respiration: 118 Gt/year
- Ocean-atmosphere exchange: 90 Gt/year (each direction)
- Fossil fuel combustion: 9.4 Gt/year (human)
- Deforestation: 1.5 Gt/year (human)
- Weathering: 0.3 Gt/year

**Carbon Sequestration Processes:**
- Photosynthesis: CO2 + H2O + light -> C6H12O6 + O2
- Ocean absorption: CO2 dissolves in cold water (biological and solubility pumps)
- Weathering: CO2 + H2O + CaSiO3 -> CaCO3 + SiO2 + H2O
- Burial: Organic matter accumulates in sediments

**Carbon Release Processes:**
- Respiration: C6H12O6 + O2 -> CO2 + H2O + energy
- Decomposition: Microbes break down organic matter
- Combustion: Burning releases stored carbon
- Ocean outgassing: Warm water releases CO2
- Volcanic emissions: 0.1-0.3 Gt/year

### Human Impacts on Cycles
**On Water Cycle:**
- Deforestation reduces interception and transpiration (increases runoff by 25-30%)
- Urbanisation: Impermeable surfaces increase overland flow
- Dams and reservoirs alter flow regimes
- Irrigation depletes groundwater (Ogallala aquifer declining 1.5m/year)
- Climate change intensifies hydrological cycle

**On Carbon Cycle:**
- Fossil fuel combustion adds 9.4 Gt C/year to atmosphere
- Deforestation releases 1.5 Gt C/year and reduces sequestration
- Land use change affects soil carbon (ploughing releases 30% of soil carbon)
- Ocean acidification from CO2 absorption (pH dropped 0.1 since pre-industrial)
- Permafrost thaw could release 50-250 Gt C by 2100

### Case Study: Amazon Rainforest
**Carbon Storage:**
- 150-200 billion tonnes of carbon stored
- Trees store 180 tonnes C/hectare
- Soil stores 150-200 tonnes C/hectare
- Absorbs 1.5-2.0 Gt C/year (being reduced by deforestation)

**Water Cycling:**
- 50-80% of precipitation is recycled through transpiration
- Creates "flying rivers" - atmospheric rivers move moisture west
- Deforestation reduces rainfall by 5-20%
- Amazon produces 20% of world's freshwater runoff

**Threats:**
- 17% already deforested (2020)
- 2019-2020: 10,000 km2/year deforestation rate
- Tipping point risk: 20-25% deforestation could trigger dieback
- El Nino years see drought and fire increase

**Feedback Loops:**
- Positive: Less forest -> less rain -> more forest dieback -> more CO2 release
- Positive: Warming -> permafrost thaw -> methane release -> more warming

### Case Study: Arctic Tundra
**Carbon Stores:**
- Permafrost contains 1,700 Gt C (twice atmospheric carbon)
- Active layer: 0.5-2m seasonal thaw
- Peat accumulation over thousands of years

**Water Cycle Characteristics:**
- Low precipitation (250-500mm/year)
- Low evapotranspiration (cold temperatures)
- Permafrost prevents infiltration
- Extensive surface water (wetlands, thermokarst lakes)
- Short growing season limits vegetation

**Climate Change Impacts:**
- Arctic warming 2-3 times faster than global average
- Permafrost thawing at increasing rate
- Active layer deepening 1-2 cm/year
- Methane release from thawing organic matter
- Vegetation changes (shrub expansion, treeline moving north)

**Feedback Mechanisms:**
- Ice-albedo feedback: Less ice -> less reflection -> more warming
- Permafrost-carbon feedback: Warming -> thaw -> CO2/CH4 release -> more warming
- Vegetation feedback: Shrubs trap snow -> insulates ground -> more thaw

### Key Statistics Students Must Know
- Atmospheric CO2: 420 ppm (2023), was 280 ppm pre-industrial
- Global temperature rise: 1.1C above pre-industrial
- Arctic sea ice decline: 13% per decade
- Amazon deforestation: 17% lost since 1970
- Ocean absorption: 30% of anthropogenic CO2
- Permafrost at risk: 30-70% could thaw by 2100`,

  'aqa-alevel-geog-hot-desert-systems': `## Hot Desert Systems and Landscapes

### Desert Characteristics
**Climate:**
- <250mm annual precipitation
- High diurnal temperature range (30-40C between day and night)
- High summer temperatures (>40C, record 56.7C Death Valley)
- Low humidity (<30%)
- High evaporation rates (>2000mm/year potential evapotranspiration)
- 350+ sunshine days per year

**Distribution:**
- 30% of Earth's land surface is arid/semi-arid
- 23.5N and 23.5S latitude bands (subtropical high pressure)
- Rain shadow areas (continentality)
- Cold ocean current coasts (Atacama, Namib)

### Desert Processes
**Weathering:**
- Thermal expansion/contraction (insolation weathering)
- Salt crystallisation (in cracks and pores)
- Frost weathering (in mountainous deserts)
- Limited chemical weathering (lack of water)
- Biological weathering minimal but present (lichens)

**Erosion:**
- **Deflation**: Wind removes fine particles
- **Abrasion**: Wind-blown particles erode surfaces
- **Attrition**: Particles collide and break down
- Water erosion: Flash floods are primary erosion agent

**Transportation:**
- **Saltation**: Sand grains bounce (0.25-0.5mm particles)
- **Surface creep**: Large particles roll
- **Suspension**: Fine dust (<0.1mm) carried high
- Water: Flash floods transport large volumes

**Deposition:**
- Reduced wind velocity
- Obstacles/vegetation trap sediment
- Fans and bajadas at mountain bases
- Playas (dry lake beds) from evaporation

### Desert Landforms
**Erosional:**
- **Yardangs**: Streamlined ridges aligned with wind
- **Zeugen**: Mushroom-shaped rocks (hard cap over soft base)
- **Deflation hollows**: Depressions from wind removal
- **Rock pedestals**: Undercut at base by sand abrasion
- **Mesas and buttes**: Flat-topped remnants
- **Wadis**: Dry river valleys, flash flood carved

**Depositional:**
- **Sand dunes**: Barchan (crescent), linear (seif), star, transverse
- **Barchan dunes**: 10-30m high, horns point downwind
- **Loess deposits**: Wind-blown silt accumulation
- **Alluvial fans**: Sediment deposited at mountain front
- **Bajadas**: Coalesced alluvial fans
- **Playas**: Salt flats from evaporated lakes

### The Water Balance in Deserts
- Precipitation (P) - Evapotranspiration (E) = Surplus/Deficit
- Deserts always in deficit: E >> P
- Sahara: P = 25mm, E = 200mm+
- Water table often deep (>30m)
- Ephemeral streams (flow only after rain)
- Exotic rivers (e.g., Nile - sourced outside desert)

### Case Study: Thar Desert (India/Pakistan)
**Location and Characteristics:**
- Northwest India (Rajasthan), Southeast Pakistan (Sindh)
- Area: 200,000 km2
- Population: 83 million (most densely populated desert)
- Climate: 45-50C summer, 5-10C winter, <250mm rainfall
- Geology: Alluvial and aeolian deposits

**Opportunities:**
| Opportunity | Details |
|-------------|---------|
| Mining | Gypsum, feldspar, limestone, marble; Barmer has petroleum reserves (estimated 1.8 billion barrels) |
| Energy | 300+ sunshine days; Bhadla Solar Park: 2,245 MW capacity (world's largest) |
| Tourism | Jaisalmer Fort (UNESCO), camel safaris, desert festivals; 3 million visitors/year |
| Agriculture | Indira Gandhi Canal (650km) irrigates 1.5 million hectares |

**Challenges:**
| Challenge | Details |
|-----------|---------|
| Water scarcity | Groundwater depleting 1m/year; 1/3 of wells dry |
| Extreme temperatures | Outdoor work limited to early morning; heat stroke risk |
| Soil degradation | Wind erosion removes 5,000 tonnes/km2/year |
| Desertification | Expanding at 0.5km/year on eastern margin |

**Desertification:**
- Causes: Overgrazing (cattle density 3x sustainable), deforestation for fuel, overcultivation
- Effects: 30% of land degraded, crop yields declining 25%
- Responses: Great Indian Bustard conservation area, shelter belts planted

### Case Study: Sahara Desert
**Characteristics:**
- World's largest hot desert: 9 million km2
- Spans 11 countries
- Temperatures: 50C+ in summer, frost possible in winter
- Rainfall: <25mm/year in hyper-arid core
- Varied terrain: ergs (20%), regs, hamadas, mountains (Hoggar 3,000m)

**Sahel Desertification:**
- Region: 5,000km band south of Sahara
- Population: 100 million
- Rainfall: 200-600mm/year
- Desertification rate: 48km southward/year in some areas
- 65% of farmland degraded since 1970s

**Causes:**
- Climate variability: Severe droughts 1968-73, 1983-84
- Population growth: 3% annual increase
- Overgrazing: Livestock numbers tripled 1950-2000
- Deforestation: Fuel wood demand exceeds supply by 70%
- Overcultivation: Shorter fallow periods

**Responses:**
- **Great Green Wall**: 8,000km tree belt from Senegal to Djibouti
  - Goal: 100 million hectares restored by 2030
  - Progress: 15% complete (2020)
  - Senegal planted 12 million trees
- **Farmer Managed Natural Regeneration (FMNR)**
  - Niger: 5 million hectares restored
  - 250,000 farmers trained
  - Crop yields increased 100%
- **Stone bunds (zai)**: Traditional water harvesting
- **Improved stoves**: Reduce fuel wood demand 50%

### Desert Development Dilemmas
**Conflicting Pressures:**
- Economic development vs. environmental protection
- Indigenous communities vs. commercial interests
- Water extraction vs. long-term sustainability
- Solar farms vs. ecosystem disturbance

**Sustainable Management:**
- Water harvesting techniques
- Solar energy reducing fossil fuel use
- Ecotourism providing alternative income
- Protected areas preserving biodiversity

### Key Statistics
- Sahara: 9 million km2, <25mm/year rainfall
- Thar: 200,000 km2, 83 million population
- Bhadla Solar Park: 2,245 MW, 56 km2
- Great Green Wall: 8,000km target, 15% complete
- Desertification affects 1.5 billion people globally`,

  'aqa-alevel-geog-coastal-systems': `## Coastal Systems and Landscapes

### Systems Approach to Coasts
**Inputs:**
- Wave energy (wind speed, duration, fetch)
- Sediment (rivers, cliff erosion, offshore)
- Tides and currents
- Geology (rock type, structure)
- Human activity

**Processes (Transfers):**
- Erosion, transportation, deposition
- Weathering, mass movement
- Longshore drift

**Outputs:**
- Sediment lost offshore or alongshore
- Backwash removing material

**Feedback:**
- Negative: Beach builds up, absorbs wave energy, reduces erosion
- Positive: Erosion removes beach, more energy reaches cliff, more erosion

### Sediment Cells
- UK has 11 major sediment cells
- Closed systems for sediment budget
- Boundaries often headlands or estuaries
- Example: Cell 2 - Flamborough Head to The Wash

**Sediment Budget:**
- Inputs: Cliff erosion, rivers, offshore, longshore drift in
- Outputs: Offshore loss, longshore drift out
- Balance determines erosion/accretion
- Human intervention disrupts natural balance

### Wave Dynamics
**Wave Generation:**
- Wind blowing over water creates friction
- Wave size depends on: wind speed, wind duration, fetch
- Fetch: distance of open water wind blows over

**Wave Types:**
| Feature | Constructive | Destructive |
|---------|--------------|-------------|
| Wave height | Low (<1m) | High (>1m) |
| Wavelength | Long (100m+) | Short (<20m) |
| Frequency | 6-8/min | 10-14/min |
| Swash | Strong | Weak |
| Backwash | Weak | Strong |
| Beach profile | Builds berms | Erodes to form step |

**Wave Breaking:**
- **Spilling breakers**: Gentle slopes, waves break gradually
- **Plunging breakers**: Steep slopes, waves curl and crash
- **Surging breakers**: Very steep, waves don't break fully

### Coastal Processes
**Marine Erosion:**
- **Hydraulic action**: Wave compression forces air into cracks (8 tonnes/m2 pressure)
- **Abrasion (corrasion)**: Sediment thrown at cliff
- **Attrition**: Particles collide and become smaller/rounder
- **Corrosion (solution)**: Chemical dissolution (limestone, chalk)

**Sub-Aerial Processes:**
- **Weathering**:
  - Mechanical: Freeze-thaw, salt crystallisation, wetting/drying
  - Chemical: Carbonation, oxidation, hydrolysis
  - Biological: Root growth, burrowing animals
- **Mass movement**:
  - Rockfall: Sudden collapse of rock (cliff foot debris)
  - Landslide: Block of material moves along slip plane
  - Slumping: Rotational movement on curved slip plane
  - Mudflow: Saturated material flows downslope
  - Soil creep: Slow downslope movement

**Transportation:**
- **Longshore drift**: Net movement of sediment along coast
  - Waves approach at angle (prevailing wind direction)
  - Swash moves sediment up beach at angle
  - Backwash moves sediment straight back
  - Zigzag movement along coast
- **Traction/saltation/suspension/solution** (as in rivers)

**Deposition:**
- Reduced energy (sheltered areas)
- Abundant sediment supply
- Obstacles causing flow reduction

### Coastal Landforms
**Erosional:**
- **Headlands and bays**: Differential erosion (hard/soft rock)
- **Wave-cut platform**: Extends 250m+ at low tide
- **Wave-cut notch**: Undercut at cliff base
- **Caves, arches, stacks, stumps**: Headland erosion sequence
- **Geos**: Narrow inlets from cave roof collapse

**Depositional:**
- **Beaches**: Shingle (steep, 10-20) or sand (gentle, 5)
- **Spits**: Longshore drift extends beach across estuary
- **Bars**: Spit connects to island or blocks bay
- **Tombolo**: Bar connecting island to mainland (e.g., Chesil Beach)
- **Sand dunes**: Wind-blown sand accumulation
  - Embryo dunes: Pioneer plants (sea rocket)
  - Foredunes: Marram grass stabilisation
  - Yellow dunes: Semi-fixed, 5-10m high
  - Grey dunes: Fixed, humus-rich soil
  - Dune slack: Low wet areas between ridges

### Case Study: Holderness Coast
**Location and Characteristics:**
- East Yorkshire, Flamborough Head to Spurn Point
- 61km length
- Fastest eroding coast in Europe: 2m/year average
- Since Roman times: 4km lost, 29 villages disappeared
- Recent losses: Mappleton, Cowden, Skipsea threatened

**Geology:**
- Soft boulder clay (glacial till)
- Weak, unconsolidated material
- Easily eroded by hydraulic action
- Slumping common when saturated

**Physical Factors:**
- Long fetch across North Sea (800km)
- Dominant NE waves, destructive
- Limited sediment input (headland prevents drift from north)
- Narrow beaches offer little protection
- Rising sea levels increasing erosion

**Human Factors:**
- Groynes at Mappleton starve beaches to south
- Coastal defences elsewhere prevent sediment input
- Drainage increases cliff instability
- Climate change intensifying storms

**Management:**
- **Mappleton (1991)**: 2 rock groynes, rock revetment
  - Cost: 2 million
  - Protected village but Great Cowden erosion increased from 2m to 4m/year
- **Hornsea**: Sea wall and groynes
- **Bridlington**: Defended as major settlement
- **Spurn Point**: Managed retreat, nature reserve
- **Most of coast**: No active intervention

**Sediment Cell Issues:**
- Boulder clay supplies 3.4 million tonnes sediment/year
- Sediment feeds beaches further south (Lincolnshire, East Anglia)
- Defences reduce sediment supply
- Conflict: Protect Holderness vs. supply southern beaches

### Case Study: Dorset Coast (Jurassic Coast)
**Characteristics:**
- UNESCO World Heritage Site (2001)
- 155km of coastline
- 185 million years of geological history
- Mix of resistant (Portland limestone) and weak (clay) rocks

**Key Landforms:**
| Landform | Location | Formation |
|----------|----------|-----------|
| Lulworth Cove | Near Wareham | Bay formed behind breached limestone |
| Durdle Door | Near Lulworth | Arch in Portland limestone |
| Old Harry Rocks | Near Swanage | Stack/stump in chalk headland |
| Chesil Beach | Portland | 29km tombolo, 180 billion pebbles |
| Stair Hole | Near Lulworth | Early stage cove formation |

**Lulworth Cove Formation:**
1. Waves breach resistant Portland limestone (narrow entrance)
2. Behind, weak clays eroded rapidly (wide bay)
3. Further inland, resistant chalk limits erosion (bay ends)
4. Result: Classic circular shape

**Chesil Beach:**
- 29km tombolo connecting Isle of Portland
- 180 billion pebbles (estimated)
- Graded: 1cm at West Bay to 6cm at Portland
- Formed by longshore drift and rising sea levels
- Protects Fleet Lagoon (largest tidal lagoon in UK)

**Management:**
- Largely undefended (World Heritage protection)
- Studland Bay: Sand dunes managed for conservation
- Swanage: Sea wall, groynes, beach replenishment
- Portland: Quarrying legacy, some defences

### Sea Level Change
**Eustatic Change (Global):**
- Ice volume changes (glacial/interglacial cycles)
- Thermal expansion of oceans (warming)
- Current rise: 3.6mm/year (accelerating)
- Projected: 0.3-1.1m rise by 2100

**Isostatic Change (Local):**
- Land rising/falling due to ice loading/unloading
- Scotland rising 1-2mm/year (post-glacial rebound)
- Southeast England sinking 1-2mm/year (tilting)
- Net effect: SE England sea level rise >4mm/year

**Emergent Coastlines:**
- Raised beaches above current sea level
- Relict cliffs no longer being eroded
- Example: Western Scotland

**Submergent Coastlines:**
- Rias: Drowned river valleys (SW England)
- Fjords: Drowned glacial valleys (Norway)
- Dalmatian coast: Drowned mountain ridges (Croatia)

### Coastal Management Strategies
**Hard Engineering:**
| Method | Cost | Benefits | Drawbacks |
|--------|------|----------|-----------|
| Sea walls | 6,000/m | Reflects wave energy; protects cliffs | Expensive; wave scour at base |
| Rock armour | 3,000/m | Absorbs wave energy; cheaper than walls | Ugly; limited lifespan |
| Groynes | 10,000 each | Trap sediment; build beaches | Starve downdrift areas |
| Gabions | 100/m | Cheap; absorbs energy | Short lifespan (5-10 years) |
| Offshore breakwaters | 15,000/m | Reduce wave energy offshore | Very expensive; navigation hazard |

**Soft Engineering:**
| Method | Cost | Benefits | Drawbacks |
|--------|------|----------|-----------|
| Beach nourishment | 3-30/m3 | Absorbs wave energy; natural appearance | Needs repeating; source issues |
| Dune stabilisation | Low | Natural defence; habitat creation | Slow; vulnerable during storms |
| Managed retreat | Variable | Sustainable; creates new habitats | Land loss; political opposition |
| Land use zoning | Low | Prevents development in high-risk areas | Limits economic activity |

**Integrated Coastal Zone Management (ICZM):**
- Considers whole sediment cell
- Involves all stakeholders
- Balances economic, social, environmental factors
- Shoreline Management Plans (SMPs) for UK coast

### Key Statistics
- UK coastline: 31,000km
- Holderness erosion: 2m/year (4km since Roman times)
- Sea level rise: 3.6mm/year global, 4mm/year SE England
- Chesil Beach: 29km, 180 billion pebbles
- Wave pressure: Up to 8 tonnes/m2 in storms`,

  'aqa-alevel-geog-glacial-systems': `## Glacial Systems and Landscapes

### Glacier Systems
**Inputs:**
- Snowfall (accumulation)
- Avalanches
- Wind-blown snow
- Freezing rain

**Outputs:**
- Melting (ablation)
- Sublimation
- Iceberg calving
- Evaporation

**Ice Mass Balance:**
- Accumulation > Ablation = Glacier advances
- Accumulation < Ablation = Glacier retreats
- Equilibrium line: Where accumulation = ablation
- Budget calculated annually: Net balance

**UK Glacier History:**
- Last glacial maximum: 20,000 years ago
- Ice sheet covered Scotland, Wales, N England
- Ice thickness: >1km over Scotland
- Sea level: 120m lower than today
- Deglaciation complete by 10,000 years ago

### Glacier Formation and Movement
**Formation (Diagenesis):**
1. Fresh snow: 80-90% air
2. Firn (neve): Compaction after 1 year, 50% air
3. Glacier ice: 100+ years compression, <20% air
4. Blue ice: Maximum compression, minimal air

**Movement Types:**
- **Internal deformation**: Ice crystals slide over each other
  - Occurs throughout glacier
  - Dominant in cold-based glaciers
- **Basal sliding**: Ice moves over bedrock
  - Requires pressure melting point (0C under pressure)
  - Dominant in warm-based glaciers
  - Produces meltwater lubrication
- **Extending flow**: Ice accelerates (zone of accumulation)
- **Compressing flow**: Ice slows (snout area)
- **Velocity**: Centre faster than edges (friction); surface faster than base

**Glacier Types:**
| Type | Temperature | Movement | Examples |
|------|-------------|----------|----------|
| Cold-based (polar) | Below pressure melting point | Internal deformation only | Antarctica interior |
| Warm-based (temperate) | At pressure melting point | Basal sliding + deformation | Alps, Lake District |

### Glacial Processes
**Erosion:**
- **Plucking**: Ice freezes onto rock, pulls fragments away
  - Requires pressure melting point
  - Creates jagged surfaces
  - Most effective on lee side of obstacles
- **Abrasion**: Rock fragments embedded in ice scrape bedrock
  - Creates striations (scratches indicating ice direction)
  - Produces rock flour (fine sedite)
  - Polishes rock surfaces
- **Freeze-thaw**: Water in cracks expands when frozen
  - Fractures rock above and around glacier
  - Supplies debris for abrasion

**Transportation:**
- **Supraglacial**: On ice surface (from valley sides)
- **Englacial**: Within ice (falling into crevasses)
- **Subglacial**: At ice-rock interface (plucked/abraded material)

**Deposition:**
- Ice melts and loses energy
- Material released from ice
- Till: Unsorted, angular material
- Outwash: Sorted, rounded (meltwater deposited)

### Glacial Landforms
**Erosional:**
| Landform | Description | Example |
|----------|-------------|---------|
| Corrie (cirque) | Armchair-shaped hollow; steep back wall; rock lip | Red Tarn, Lake District |
| Arete | Knife-edge ridge between two corries | Striding Edge, Helvellyn |
| Pyramidal peak | Peak with 3+ corries eroding inwards | Matterhorn, Alps |
| Glacial trough | U-shaped valley; steep sides; flat floor | Nant Ffrancon, Snowdonia |
| Hanging valley | Tributary valley above main trough | Valley at Pistyll Rhaeadr |
| Truncated spurs | Eroded interlocking spurs | Throughout Lake District |
| Ribbon lake | Long, narrow lake in overdeepened section | Wastwater, Lake District |
| Roche moutonnee | Asymmetric rock: smooth up-glacier, rough down | Throughout glaciated areas |
| Crag and tail | Resistant rock protects weaker rock behind | Edinburgh Castle Rock |

**Corrie Formation:**
1. Snow accumulates in north-facing hollow
2. Freeze-thaw enlarges hollow (nivation)
3. Ice rotational movement deepens floor
4. Plucking steepens back wall
5. Abrasion overdeepens centre
6. Rock lip from reduced erosion at edge
7. Tarn forms behind lip after deglaciation

**Depositional:**
| Landform | Description | Example |
|----------|-------------|---------|
| Moraine (lateral) | Ridge along valley side from valley wall debris | Throughout Lake District |
| Moraine (medial) | Ridge in centre where glaciers merged | Junction of glaciers |
| Moraine (terminal) | Ridge at maximum glacier extent | Kirkstone Pass |
| Moraine (recessional) | Ridges marking retreat pauses | Multiple ridges in valleys |
| Till plain | Flat area of ground moraine | Vale of Eden |
| Drumlin | Egg-shaped hill; steep stoss, gentle lee | Ribble Valley (swarm) |
| Erratic | Boulder transported from different geology | Bowder Stone, Borrowdale |

**Fluvioglacial:**
| Landform | Description | Example |
|----------|-------------|---------|
| Outwash plain (sandur) | Flat area of sorted gravels beyond snout | Icelandic sandar |
| Esker | Sinuous ridge from subglacial stream | Various in Scotland |
| Kame | Mound from ice-contact deposition | Throughout UK |
| Kettle hole | Depression from buried ice melting | Various in Lake District |
| Meltwater channel | Gorge cut by meltwater | Newtondale, Yorkshire |

**Drumlins:**
- Egg-shaped hills in swarms (basket of eggs topography)
- Long axis parallel to ice movement
- Steep stoss (up-glacier), gentle lee (down-glacier)
- Height: 5-50m; length: 100m-1km
- Formation debated: Moulding of existing till vs. deposition

### Case Study: Lake District
**Glacial History:**
- Last glaciation: 30,000-15,000 years ago
- Ice cap centred on central fells
- Radial flow pattern outward
- Ice thickness: 500-900m
- Multiple advances and retreats

**Key Landforms:**
| Feature | Location | Description |
|---------|----------|-------------|
| Helvellyn | Central fells | Corries (Red Tarn, Brown Cove); Striding Edge arete |
| Great Langdale | Central | Classic U-shaped valley; hanging valleys |
| Wastwater | Western | England's deepest lake (79m); ribbon lake |
| Scafell Pike | Central | Pyramidal peak tendencies |
| Borrowdale | Central | Through valley; Bowder Stone erratic |
| Vale of Eden | Eastern | Drumlin swarm; till plain |

**Economic Importance:**
- Tourism: 15 million visitors/year
- National Park: 2,362 km2 (1951)
- Walking/climbing: Major recreation
- Farming: Hill sheep farming on fells
- Mining heritage: Slate, graphite (historical)

**Environmental Issues:**
- Footpath erosion: Popular routes degraded
- Invasive species: Rhododendron spread
- Water quality: Algal blooms in lakes
- Climate change: Affecting fell ecology

### Periglacial Environments
**Characteristics:**
- Mean annual temperature below 0C
- Permafrost present
- Active layer thaws seasonally
- 25% of Earth's land surface

**Processes:**
- **Frost heave**: Ice lens growth pushes material up
- **Frost shattering**: Freeze-thaw breaks rock
- **Solifluction**: Saturated active layer flows over frozen ground
- **Nivation**: Snow patch erosion of hollow

**Landforms:**
- Patterned ground: Stone circles, polygons, stripes
- Pingos: Ice-cored mounds (up to 50m high)
- Thermokarst: Landscape from melting ground ice
- Ice wedges: Polygonal cracks filled with ice
- Blockfields (felsenmeer): Angular rock fragments
- Scree slopes: Frost-shattered debris

### Key Statistics
- UK last glaciation: Ended ~10,000 years ago
- Global ice volume: 24 million km3 (1.74% of water)
- Lake District visitors: 15 million/year
- Wastwater depth: 79m (deepest English lake)
- Drumlin dimensions: 5-50m high, 100m-1km long
- Permafrost extent: 25% of land surface`,

  'aqa-alevel-geog-hazards': `## Hazards Topic Knowledge

### Hazard Concepts
**Definitions:**
- **Hazard**: A potential threat to life, property, or environment
- **Disaster**: When a hazard causes significant harm
- **Risk**: Probability of hazard occurring x potential impact
- **Vulnerability**: Susceptibility to harm from hazard
- **Resilience**: Ability to recover from hazard impacts

**Risk Equation:**
Risk = (Hazard x Vulnerability) / Capacity
- Hazard: Probability, magnitude, frequency
- Vulnerability: Poverty, location, building quality, population density
- Capacity: Wealth, technology, governance, preparedness

**Hazard Perception:**
- Varies by experience, education, culture, personality
- Factors affecting response:
  - Fatalism vs. adaptation
  - Economic constraints on choice
  - Underestimation of infrequent events

### Park's Response Model
**Phases:**
1. **Pre-disaster**: Normal quality of life
2. **Event**: Sharp drop in quality of life
3. **Relief phase**: Immediate response (search/rescue, emergency aid)
4. **Rehabilitation**: Short-term recovery (temporary housing, restoring services)
5. **Reconstruction**: Long-term rebuilding (permanent housing, economic recovery)

**Recovery Variations:**
- HIC recovery: Fast, well-resourced, may exceed pre-disaster level
- LIC recovery: Slow, resource-limited, may not reach pre-disaster level
- Mitigation investment can improve post-disaster outcomes

### Pressure and Release Model (PAR)
**Root Causes -> Dynamic Pressures -> Unsafe Conditions -> Disaster**

Root Causes:
- Limited access to power, resources
- Ideologies, political systems, economic systems

Dynamic Pressures:
- Lack of local institutions, training
- Rapid urbanisation, population growth
- Deforestation, environmental degradation

Unsafe Conditions:
- Dangerous locations, unprotected buildings
- Fragile local economy, low income levels
- Lack of preparedness, endemic disease

### Tectonic Hazards
**Plate Boundary Types:**
| Type | Movement | Features | Hazards |
|------|----------|----------|---------|
| Divergent | Apart | Mid-ocean ridges, rift valleys | Volcanic, minor earthquakes |
| Convergent | Together | Trenches, fold mountains | Major earthquakes, volcanic |
| Conservative | Alongside | Fault lines | Major earthquakes |
| Hot spots | Stationary | Island chains | Volcanic |

**Earthquake Measurement:**
- Moment Magnitude Scale (MMS): Logarithmic; measures energy released
- Each whole number = 32x more energy
- Modified Mercalli Intensity: I-XII based on damage/felt effects

**Volcanic Explosivity Index (VEI):**
- 0-8 scale (logarithmic)
- VEI 5+: Significant global impacts
- VEI 8: Supervolcanic (Yellowstone potential)

### Case Study: Nepal Earthquake 2015
**Event Details:**
- Date: 25 April 2015
- Magnitude: 7.8 (followed by 7.3 aftershock on 12 May)
- Depth: 15km (shallow = more damage)
- Location: 77km NW of Kathmandu
- Cause: Indian plate subducting under Eurasian plate

**Primary Impacts:**
- Deaths: 9,000
- Injured: 22,000
- Buildings destroyed: 600,000
- Buildings damaged: 290,000
- Infrastructure: Roads, bridges, water systems damaged
- Historical sites: Dharahara Tower collapsed; UNESCO sites damaged

**Secondary Impacts:**
- Avalanches: 19 killed at Everest Base Camp
- Landslides: Blocked roads, rivers
- Homelessness: 3.5 million homeless
- Economic: $10 billion damage (50% of GDP)
- Disease risk: Contaminated water, overcrowding
- Food insecurity: Crops and livestock lost

**Response:**
**Immediate:**
- Government declared state of emergency
- Army deployed for search and rescue
- International aid: India first responder within 6 hours
- UK sent 8 million + 60 search and rescue team
- UN launched $422 million appeal

**Long-term:**
- National Reconstruction Authority established
- Build Back Better programme
- Earthquake-resistant building codes updated
- Only 5% of houses rebuilt by 2017 (governance issues)
- 2020: 65% of houses rebuilt

**Vulnerability Factors:**
- Poverty: Limited resources for construction
- Building quality: Adobe/stone buildings without reinforcement
- Topography: Mountainous, remote communities
- Population density: Kathmandu crowded, narrow streets
- Governance: Limited enforcement of building codes

### Case Study: Typhoon Haiyan (Yolanda) 2013
**Event Details:**
- Date: 8 November 2013
- Category: 5 Super Typhoon
- Wind speed: 315 km/h (strongest landfall on record)
- Storm surge: 5m (up to 7m in Tacloban)
- Affected area: Eastern Visayas, Philippines

**Causes:**
- Warm sea surface temperatures (>27C)
- Low wind shear
- Coriolis effect (tropical latitude)
- La Nina conditions

**Impacts:**
| Impact | Details |
|--------|---------|
| Deaths | 6,300 confirmed; 1,000+ missing |
| Affected | 14 million people across 44 provinces |
| Displaced | 4 million (1.1 million in evacuation centres) |
| Housing | 1.1 million houses damaged, 550,000 destroyed |
| Economic | $2.9 billion damage |
| Tacloban | 90% of city destroyed |
| Infrastructure | Airport destroyed; roads blocked |

**Response:**
**Immediate:**
- Government pre-positioned supplies
- Military deployed for rescue
- International: $1.2 billion pledged
- UK: HMS Daring, $75 million
- USA: 1,000 marines, USS George Washington
- Aid delayed by destroyed infrastructure

**Long-term:**
- Tacloban rebuilding programme
- Improved early warning systems
- Evacuation procedures updated
- Building codes strengthened
- Mangrove restoration for storm surge protection

**Risk Factors:**
- Poverty: Low quality housing
- Coastal location: Exposed to storm surge
- Population density: High in vulnerable areas
- Infrastructure: Limited capacity
- Warning communication: Unclear terminology ("storm surge" not understood)

### Volcanic Hazards Case Study: Eyjafjallajokull 2010
**Event Details:**
- Location: Iceland
- Date: 14 April - May 2010
- VEI: 4
- Ash plume: 9km altitude
- Duration: Intermittent for 6 weeks

**Immediate Impacts:**
- Local: 800 evacuated, farm damage, flood risk
- Aviation: 10 million passengers stranded
- Flights cancelled: 100,000 over 6 days
- Economic loss: $1.7 billion to airlines
- European trade disrupted

**Responses:**
- New aviation protocols for ash clouds
- Improved monitoring equipment
- Insurance claims processed
- Evacuation procedures reviewed
- Iceland tourism increased (publicity)

### Multi-Hazard Environments
**Philippines Vulnerability:**
- Pacific Ring of Fire: Earthquake and volcanic risk
- Typhoon pathway: 20 typhoons/year
- Low income: Limited capacity to prepare/respond
- High population density: Many exposed
- Informal settlements: Poor building quality

**Risk Reduction Strategies:**
- Early warning systems
- Evacuation planning
- Building codes
- Land use zoning
- Community preparedness
- International cooperation

### Key Statistics
- Nepal 2015: 9,000 deaths, $10 billion damage (50% GDP)
- Haiyan 2013: 6,300 deaths, 14 million affected
- Annual typhoons (Philippines): ~20
- Eyjafjallajokull: 100,000 flights cancelled
- Risk equation: R = (H x V) / C`,

  'aqa-alevel-geog-ecosystems': `## Ecosystems Under Stress

### Ecosystem Concepts
**Key Terms:**
- **Ecosystem**: Community of organisms interacting with each other and physical environment
- **Biome**: Large-scale ecosystem defined by climate and vegetation
- **Biodiversity**: Variety of species, genetic diversity, ecosystem diversity
- **Productivity**: Rate of biomass production
  - Gross Primary Productivity (GPP): Total photosynthesis
  - Net Primary Productivity (NPP): GPP - Respiration

**Energy Flow:**
- Sun -> Producers -> Primary consumers -> Secondary consumers -> Tertiary consumers
- 10% efficiency at each trophic level
- Energy lost through respiration, excretion, death

**Nutrient Cycling:**
- Stores: Biomass, litter, soil
- Transfers: Weathering, uptake, fall, decomposition, leaching
- Different biomes have different proportions in each store

### Ecological Succession
**Primary Succession:**
1. Pioneer species colonise bare surface (lichens, mosses)
2. Weathering creates thin soil
3. Small plants establish
4. Soil deepens, nutrients increase
5. Shrubs and small trees
6. Climax community (determined by climate)

**Secondary Succession:**
- Following disturbance (fire, clearing)
- Soil already present
- Faster than primary succession
- Same climax community as primary

**Plagioclimax:**
- Succession prevented from reaching climax by human activity
- Examples: Heather moorland (burning), chalk grassland (grazing)

**UK Succession Example:**
Bare rock -> Lichens -> Mosses -> Grasses -> Shrubs -> Oak woodland (climax)

### Marine Ecosystems
**Productivity:**
- 71% of Earth's surface, but lower NPP than land
- Most productive: Coastal areas, upwelling zones
- Least productive: Open ocean (nutrient-limited)

**Threats:**
- Overfishing: 90% of large fish depleted
- Plastic pollution: 8 million tonnes/year entering oceans
- Ocean acidification: 30% increase in acidity since pre-industrial
- Temperature rise: Coral bleaching events
- Deoxygenation: Dead zones expanding

### Local Ecosystems: UK Temperate Deciduous Woodland
**Characteristics:**
- Dominant trees: Oak, beech, ash
- Four distinct seasons
- Rainfall: 500-1500mm, distributed throughout year
- Temperature: -5C to 25C range

**Structure:**
- Canopy layer: Mature trees (25-30m)
- Understory: Smaller trees, saplings
- Shrub layer: Hazel, hawthorn
- Field/ground layer: Bluebells, ferns
- Ground layer: Mosses, fungi

**Nutrient Cycling:**
- Litter store: Large (autumn leaf fall)
- Soil store: Moderate
- Biomass store: Large
- Rapid decomposition in autumn

**Management:**
- Coppicing: Traditional sustainable harvesting
- Deer management: Prevent overgrazing
- Invasive species control: Rhododendron, grey squirrels
- Ride management: Maintain open areas for biodiversity

### Biodiversity
**Global Hotspots:**
- 36 hotspots containing 50% of endemic plant species
- Must have lost 70%+ of original habitat
- Examples: Madagascar, Philippines, Sundaland

**Causes of Decline:**
- Habitat loss: 70% of original forest lost globally
- Overexploitation: Overfishing, hunting
- Pollution: Pesticides, plastics
- Climate change: Range shifts, phenology changes
- Invasive species: Competition, predation, disease

**Conservation Strategies:**
| Strategy | Description | Example |
|----------|-------------|---------|
| Protected areas | Legal protection of habitats | National Parks, SSSIs |
| Species management | Targeted conservation | Reintroductions, breeding programmes |
| Habitat restoration | Returning damaged ecosystems | Rewilding projects |
| International agreements | Global cooperation | CITES, CBD, Ramsar |
| Sustainable use | Managing exploitation | FSC certification, MSC |

### Ecosystem Management Example: UK National Parks
**Statistics:**
- 15 National Parks in UK
- Cover 10% of England and Wales
- 110 million visitor days/year
- Economic value: $4 billion/year

**Purposes:**
- Conserve and enhance natural beauty
- Promote public understanding and enjoyment
- Foster economic and social well-being

**Conflicts:**
- Recreation vs. Conservation
- Tourism vs. Local community
- Development vs. Protection
- Farming vs. Rewilding

### Key Statistics
- Tropical rainforests: 50% of all species on 7% of land
- Ocean productivity: 150 billion tonnes C/year
- UK woodlands: 13% of land area (target 17% by 2050)
- Species extinction rate: 1,000x background rate
- Biodiversity hotspots: 36 globally`,

  'aqa-alevel-geog-global-systems': `## Global Systems and Global Governance

### Globalisation
**Definition:**
- The growing economic, political, social, and cultural interconnectedness of the world
- "The widening, deepening and speeding up of global interconnection" (Held)

**Dimensions:**
- Economic: Trade, investment, TNCs
- Political: International organisations, governance
- Social: Migration, cultural exchange
- Technological: Communications, transport

**Factors Enabling Globalisation:**
| Factor | Examples |
|--------|----------|
| Transport | Containerisation (1956), jet aircraft, supertankers |
| Communications | Internet, mobile phones, satellites |
| Political | Free trade agreements, WTO, deregulation |
| Economic | FDI, TNCs, financial deregulation |
| Cultural | English language, media, brands |

### Global Trade Patterns
**Key Statistics:**
- World trade: $28 trillion/year (2022)
- Trade growth: 25x increase since 1970
- Trade as % of GDP: 30% global average
- Containerisation: 90% of world trade by volume

**Trade Patterns:**
- North-North: 40% of trade (developed-developed)
- North-South: 35% (developed-developing)
- South-South: 25% (developing-developing)
- Triad dominance: EU, USA, East Asia = 70% of trade

**Trade Inequalities:**
| Factor | HICs | LICs |
|--------|------|------|
| Export type | Manufactured goods, services | Raw materials, primary products |
| Terms of trade | Improving | Declining |
| Value added | High | Low |
| Trade deals | Beneficial | Often exploitative |

### Transnational Corporations (TNCs)
**Characteristics:**
- Operations in multiple countries
- Global production networks
- Transfer pricing to minimise tax
- Significant economic and political power

**Largest TNCs (by revenue):**
1. Walmart: $573 billion
2. Amazon: $514 billion
3. Apple: $394 billion
4. Saudi Aramco: $359 billion

**TNC Impacts:**
| Positive | Negative |
|----------|----------|
| Jobs created | Poor working conditions |
| Technology transfer | Profit repatriation |
| Tax revenue | Tax avoidance |
| Infrastructure investment | Environmental damage |
| Skills development | Cultural homogenisation |

### Global Financial Flows
**Types:**
- Foreign Direct Investment (FDI)
- Remittances
- Aid (bilateral, multilateral)
- Portfolio investment
- Loans

**FDI Patterns:**
- Total global FDI: $1.3 trillion/year
- 50% to developing countries
- China largest recipient among LICs/NEEs
- Services sector: 60% of FDI

**Remittances:**
- Total: $630 billion/year (2022)
- Exceed aid by 3x
- Largest recipients: India ($87bn), Mexico ($54bn), Philippines ($34bn)
- Average cost: 6% of transfer
- Impact: 10% of GDP in some countries

### World Trade Organisation (WTO)
**Role:**
- Administers trade agreements
- Forum for negotiations
- Settles trade disputes
- Reviews national trade policies

**Principles:**
- Most Favoured Nation: Equal treatment for all members
- National treatment: Foreign goods treated like domestic
- Transparency: Predictable trade rules

**Criticisms:**
- Favours developed countries
- Environmental concerns overlooked
- Democratic deficit
- Dispute resolution slow

### International Monetary Fund (IMF)
**Role:**
- Monitors global economy
- Provides financial assistance
- Technical assistance to members
- Lending to countries in crisis

**Structural Adjustment:**
- Conditions attached to loans
- Austerity, privatisation, deregulation
- Criticism: Harmful social impacts

### Trade Blocs
**Types:**
- Free Trade Area: No internal tariffs (NAFTA/USMCA)
- Customs Union: Common external tariff (EU)
- Common Market: Free movement of factors (EU)
- Economic Union: Harmonised policies (EU)

**Major Blocs:**
| Bloc | Members | Trade Volume |
|------|---------|--------------|
| EU | 27 | $5.5 trillion |
| USMCA | 3 | $1.3 trillion |
| ASEAN | 10 | $2.8 trillion |
| Mercosur | 5 | $2.8 trillion |

### Global Systems of Production
**Global Production Networks:**
- TNCs coordinate production across countries
- Specialisation based on comparative advantage
- Example: iPhone components from 40+ countries
- Final assembly often in low-cost locations

**Special Economic Zones:**
- Areas with reduced regulations and taxes
- Attract FDI and manufacturing
- Examples: Shenzhen (China), Dubai (UAE)
- 5,400 zones in 147 countries

### Key Statistics
- World trade: $28 trillion/year
- FDI: $1.3 trillion/year
- Remittances: $630 billion/year
- TNCs: 100,000+ globally
- Containerisation: 90% of trade by volume`,

  'aqa-alevel-geog-global-governance': `## Global Governance

### Concepts of Global Governance
**Definition:**
- The sum of laws, norms, policies, and institutions that define, constitute, and mediate relations among citizens, society, markets, and states in the international arena

**Why Needed:**
- Issues transcend national boundaries
- Climate change, migration, trade, security
- Global commons require collective action
- Prevent conflict, promote cooperation

### The Global Commons
**Definition:**
- Areas beyond national jurisdiction
- Shared by all humanity
- No single owner

**The Four Global Commons:**
1. High Seas (beyond 200 nautical miles)
2. Atmosphere
3. Antarctica
4. Outer Space

**Governance Challenges:**
- Free rider problem
- Tragedy of the commons
- Sovereignty concerns
- Enforcement difficulties

### Antarctica: A Global Commons Case Study
**Physical Characteristics:**
- Area: 14 million km2 (1.5x size of USA)
- Ice sheet: Average 2.2km thick
- Temperature: -89.2C (coldest recorded)
- 70% of world's freshwater

**Resources:**
- Fish: Krill, Patagonian toothfish
- Minerals: Coal, iron ore (potential)
- Oil: Estimated reserves (unexploited)
- Freshwater: 70% of global total

**Antarctic Treaty System (1959):**
- Original signatories: 12 countries
- Current parties: 54 countries
- Key provisions:
  - Peace and science only
  - No military activity
  - No nuclear testing
  - Freedom of scientific investigation
  - Territorial claims frozen

**Protocol on Environmental Protection (1991):**
- Mining ban for 50 years
- Environmental impact assessments required
- Waste disposal regulated
- Protected areas established
- Review in 2048

**Threats:**
| Threat | Details |
|--------|---------|
| Climate change | Peninsula warming 3C since 1950 |
| Tourism | 74,000 visitors/year (2019) |
| Fishing | Krill catch 300,000 tonnes/year |
| Future mining | Treaty review in 2048 |
| Pollution | Waste, fuel spills |

**CCAMLR (1982):**
- Commission for Conservation of Antarctic Marine Living Resources
- Manages fisheries sustainably
- Ecosystem-based approach
- Catch limits, gear restrictions
- Marine Protected Areas proposed

### United Nations
**Structure:**
| Organ | Role |
|-------|------|
| General Assembly | Deliberation; all members; 1 country = 1 vote |
| Security Council | Peace and security; 5 permanent + 10 rotating |
| Economic and Social Council | Economic, social, environmental |
| International Court of Justice | Legal disputes |
| Secretariat | Administration |

**UN Agencies Relevant to Geography:**
- UNEP: United Nations Environment Programme
- UNHCR: Refugees
- WHO: Health
- FAO: Food and Agriculture
- UNESCO: Culture and heritage

**Successes:**
- Peacekeeping operations
- MDGs/SDGs framework
- Humanitarian aid coordination
- International law development

**Limitations:**
- Security Council veto
- Limited enforcement power
- Funding constraints
- Bureaucracy

### Sustainable Development Goals (SDGs)
**Adopted:** 2015 (following MDGs)
**Target date:** 2030
**Number:** 17 goals, 169 targets

**Key Goals:**
1. No poverty
2. Zero hunger
3. Good health and well-being
6. Clean water and sanitation
7. Affordable and clean energy
11. Sustainable cities and communities
13. Climate action
14. Life below water
15. Life on land

### Climate Governance
**UNFCCC (1992):**
- Framework for climate action
- 197 parties (near-universal)
- Principle of "common but differentiated responsibilities"

**Paris Agreement (2015):**
- Limit warming to 1.5-2C above pre-industrial
- Nationally Determined Contributions (NDCs)
- $100 billion/year climate finance (pledged)
- 5-year review cycles

**COP (Conference of Parties):**
- Annual meetings
- COP26 Glasgow (2021): Increased ambition
- COP28 Dubai (2023): First global stocktake

**Challenges:**
- Voluntary commitments
- Limited enforcement
- Free rider problem
- Developing country finance needs

### Sovereignty and Intervention
**National Sovereignty:**
- States have supreme authority within territory
- Non-intervention principle
- Westphalian system (1648)

**Challenges to Sovereignty:**
- Globalisation: Economic interdependence
- Supranational bodies: EU, UN
- Humanitarian intervention
- Global issues: Climate, disease

**Responsibility to Protect (R2P):**
- UN adopted 2005
- States have duty to protect citizens
- International intervention if state fails
- Applied: Libya 2011
- Criticised: Selective application

### Key Statistics
- Antarctica: 14 million km2, 70% of freshwater
- Antarctic Treaty: 54 parties
- SDGs: 17 goals, 2030 target
- Paris Agreement: 1.5-2C target, 197 parties
- UN members: 193 countries`,

  'aqa-alevel-geog-changing-places': `## Changing Places

### Place Concepts
**Key Terms:**
- **Place**: A location with meaning, shaped by both physical characteristics and human experiences
- **Space**: A location without human meaning; abstract
- **Sense of place**: Emotional attachment and meanings people have for places
- **Placelessness**: Loss of unique character; homogenisation

### Doreen Massey's Theories
**Sense of Place:**
- Places are not bounded, fixed entities
- Places are processes - constantly being made through social relations
- Multiple identities exist for any place
- Power relations shape place meaning

**Power Geometry:**
- Different groups experience place differently
- Some initiate flows/movement, others receive
- Mobility reflects social position
- Globalisation creates winners and losers

**Throwntogetherness:**
- Places are the coming together of different trajectories
- Unplanned mixing creates unique places
- Places are always changing
- Opens possibility for negotiation

### Insider/Outsider Perspectives
| Perspective | Characteristics |
|-------------|-----------------|
| Insider | Lived experience; emotional attachment; detailed knowledge |
| Outsider | External view; may be objective or stereotyped; less emotional |

**Factors Affecting Perception:**
- Age and life stage
- Gender and sexuality
- Ethnicity and religion
- Class and income
- Disability and mobility
- Time spent in place

### Categories of Place
**Near Places:**
- Daily experience
- Home, workplace, local area
- Deep personal meaning
- Shaped by routine activities

**Far Places:**
- Experienced through media, tourism, migration
- May be stereotyped or imagined
- Can still have meaning (diaspora, aspirations)
- Media representations influential

### Place Identity
**Shaped By:**
| Factor | Examples |
|--------|----------|
| Physical geography | Climate, topography, resources |
| History | Events, heritage, collective memory |
| Demographics | Population composition, density |
| Economy | Industries, employment patterns |
| Culture | Traditions, language, religion |
| Governance | Planning, regeneration, policy |
| External perceptions | Media, stereotypes, reputation |

**Processes of Change:**
- Globalisation: Homogenisation vs. glocalisation
- Migration: New communities, changing identity
- Regeneration: Physical and social transformation
- Deindustrialisation: Economic restructuring
- Gentrification: Social change, displacement

### Quantitative Methods for Studying Places
| Method | Data Collected |
|--------|----------------|
| Census | Population, housing, employment |
| GIS mapping | Spatial patterns, changes |
| Statistics | IMD, house prices, crime rates |
| Surveys | Closed questions, measurable responses |

**Advantages:**
- Objective, comparable data
- Identifies patterns and trends
- Statistical analysis possible
- Large scale coverage

**Limitations:**
- Misses meanings and experiences
- May oversimplify complexity
- Aggregate data hides individual variation

### Qualitative Methods for Studying Places
| Method | Data Collected |
|--------|----------------|
| Interviews | Lived experiences, meanings |
| Focus groups | Group perspectives, discussions |
| Oral histories | Personal narratives, memories |
| Photography | Visual representations |
| Participant observation | Immersive understanding |
| Textual analysis | Representations in media, art |

**Advantages:**
- Captures meanings and experiences
- Rich, detailed data
- Reveals insider perspectives
- Flexibility in approach

**Limitations:**
- Time consuming
- Small samples
- Researcher bias possible
- Difficult to generalise

### Place Representations
**Sources:**
- Media: News, TV, film
- Art and literature
- Photography
- Advertising and marketing
- Official statistics and reports
- Social media

**Critical Analysis:**
- Who created it and why?
- What is included/excluded?
- Whose perspective is represented?
- How does it shape perceptions?

### Case Study Approach
**Contrasting Place Study Requirements:**
- One local place you have experienced
- One contrasting or distant place
- Analysis of changes and connections
- Use of both quantitative and qualitative data

**Study Framework:**
1. Location and characteristics
2. Historical development
3. Current identity and character
4. Agents of change
5. External connections
6. Insider/outsider perspectives
7. Future challenges and opportunities

### UK Place Example: East London
**Stratford (Pre-2012):**
- Industrial decline from 1970s
- High deprivation (IMD)
- Diverse population: 50% BAME
- Poor transport links historically
- Negative media representations

**Olympic Transformation:**
- 2012 Olympics catalyst
- $9 billion investment
- Queen Elizabeth Olympic Park
- Westfield shopping centre
- Transport improvements (Jubilee, DLR)

**Outcomes:**
| Positive | Negative |
|----------|----------|
| Jobs created | Gentrification |
| Housing built | Displacement |
| Improved image | Rising housing costs |
| Better transport | Loss of character |
| Green spaces | Existing communities marginalised |

### Key Theorists Summary
- **Massey**: Sense of place, power geometry, throwntogetherness
- **Relph**: Placelessness, authenticity of place
- **Tuan**: Topophilia (love of place)
- **Harvey**: Time-space compression

### Key Statistics
- UK urban: 83% of population
- Average UK house price: $290,000 (2023)
- IMD: Index of Multiple Deprivation (7 domains)
- Census: Every 10 years (2021 latest)`,

  'aqa-alevel-geog-urban-environments': `## Contemporary Urban Environments

### Global Urbanisation
**Trends:**
- 1950: 30% urban (751 million)
- 2020: 56% urban (4.4 billion)
- 2050: 68% projected (6.7 billion)

**Regional Variations:**
| Region | Urban % (2020) | Growth Rate |
|--------|----------------|-------------|
| North America | 83% | Slow |
| Europe | 75% | Slow |
| Latin America | 81% | Moderate |
| Asia | 51% | Rapid |
| Africa | 44% | Rapid |

**Megacities:**
- Definition: >10 million population
- 1950: 2 megacities
- 2020: 34 megacities
- 2030: 43 projected
- 27 in Asia

### Urban Forms
**Patterns:**
- Concentric zones (Burgess model)
- Sectors (Hoyt model)
- Multiple nuclei (Harris-Ullman)
- Post-modern fragmented city

**Land Use:**
- CBD: Commercial, services
- Inner city: Mixed residential, industry
- Suburbs: Residential, retail
- Urban fringe: New development, green belt

### Urban Change Processes
**Urbanisation:**
- Rural-urban migration
- Natural increase in cities
- Reclassification of settlements

**Suburbanisation:**
- Movement from inner city to suburbs
- Car ownership enables commuting
- Family housing preferences
- Urban sprawl results

**Counter-urbanisation:**
- Movement from urban to rural
- Technology enables remote working
- Quality of life factors
- Second homes, retirement

**Re-urbanisation:**
- Return to inner cities
- Regeneration and gentrification
- Young professionals attracted
- Cultural and social factors

### Gentrification
**Process:**
1. Decline of inner city area
2. Property prices fall
3. Artists/pioneers move in
4. Area becomes fashionable
5. Property prices rise
6. Original residents displaced

**Impacts:**
| Positive | Negative |
|----------|----------|
| Physical improvement | Displacement |
| Economic investment | Rising costs |
| Reduced crime | Loss of community |
| Better services | Cultural homogenisation |

### Urban Challenges
**Housing:**
- Affordability crisis
- Homelessness
- Overcrowding
- Informal settlements (slums)

**Transport:**
- Congestion
- Pollution
- Infrastructure costs
- Accessibility

**Social:**
- Inequality
- Segregation
- Crime
- Health disparities

**Environmental:**
- Air pollution
- Urban heat island
- Waste management
- Green space loss

### Case Study: Mumbai (NEE City)
**Characteristics:**
- Population: 21 million (metro area)
- India's financial capital: 33% of tax revenue
- Largest port: 50% of trade
- Bollywood: $6 billion industry

**Growth Causes:**
- Rural-urban migration (350/day)
- Natural increase
- Economic opportunities
- Service sector growth

**Opportunities:**
| Sector | Details |
|--------|---------|
| Finance | Dalal Street (stock exchange) |
| IT | Tech hub, outsourcing |
| Manufacturing | Textiles, pharmaceuticals |
| Services | Call centres, banking |
| Entertainment | Bollywood, media |

**Challenges:**
| Issue | Statistics |
|-------|------------|
| Slums | 42% live in slums (6 million in Dharavi) |
| Sanitation | 50% lack toilets |
| Water | 20% lack access |
| Transport | 7.5 million daily commuters |
| Pollution | Air quality 5x WHO limits |

**Dharavi:**
- Asia's largest slum: 1 km2, 1 million residents
- Informal economy: $1 billion/year
- Recycling industry: Employs 250,000
- Pottery, textiles, leather industries
- Strong community bonds
- Under threat: Redevelopment plans

**Urban Planning:**
- Slum Rehabilitation Authority
- Mumbai Metro: 33km, expanding to 350km
- Coastal road project: $2 billion
- Smart city initiatives
- Dharavi Redevelopment Project (controversial)

### Case Study: London (HIC City)
**Characteristics:**
- Population: 9 million (growing)
- Global financial centre
- Cultural capital
- Diverse: 36% foreign-born

**Urban Change:**
- Deindustrialisation (Docklands)
- Service sector growth
- Gentrification (Hackney, Brixton)
- Regeneration projects

**Challenges:**
| Issue | Details |
|-------|---------|
| Housing | Average price $550,000; ratio 12x income |
| Inequality | Highest and lowest incomes in UK |
| Transport | 2 million daily commuters; congestion |
| Environment | Air quality poor; ULEZ introduced |

**Regeneration: London Docklands**
- Decline: 1960s-80s container ships; 25,000 jobs lost
- LDDC established 1981
- Investment: $12 billion
- Canary Wharf: 120,000 workers
- Housing: 24,000 new homes
- DLR: New transport link

**Criticisms:**
- Original residents not benefited
- Social housing limited
- Community displacement
- Wealth inequality increased

### Sustainable Urban Development
**Strategies:**
- Mixed-use development
- Public transport investment
- Green infrastructure
- Energy efficiency
- Waste reduction
- Compact city design

**Example: Freiburg, Germany**
- Pop: 230,000
- Vauban district: Car-free, 5,500 residents
- 30% renewable energy
- 400km cycle paths
- Green roofs mandatory
- District heating systems

### Key Statistics
- Global urban: 56% (4.4 billion)
- Megacities: 34 (2020)
- Mumbai slums: 42% of population
- Dharavi: 1 km2, 1 million people
- London housing: 12x income ratio`,

  'aqa-alevel-geog-population-environment': `## Population and the Environment

### Global Population Dynamics
**Current Statistics:**
- World population: 8 billion (2022)
- Growth rate: 1.0%/year (declining)
- Projected 2050: 9.7 billion
- Projected 2100: 10.4-11.2 billion

**Regional Variations:**
| Region | Growth Rate | Fertility |
|--------|-------------|-----------|
| Africa | 2.5% | 4.4 |
| Asia | 0.9% | 2.1 |
| Europe | 0.1% | 1.5 |
| N America | 0.6% | 1.7 |

### Demographic Transition Model (DTM)
| Stage | Birth Rate | Death Rate | Population | Examples |
|-------|------------|------------|------------|----------|
| 1 | High | High | Stable low | Few today |
| 2 | High | Falling | Rapid growth | Niger, Mali |
| 3 | Falling | Low | Slowing growth | India, Brazil |
| 4 | Low | Low | Stable high | UK, USA |
| 5 | Very low | Low | Declining | Japan, Germany |

**Limitations of DTM:**
- Based on European experience
- Ignores migration
- Assumes linear progress
- HIV/AIDS disrupted patterns

### Population-Environment Relationships
**Theories:**

**Malthus (1798):**
- Population grows geometrically
- Food production grows arithmetically
- Population will exceed food supply
- Checks: Positive (famine, disease) or preventive (abstinence)
- Neo-Malthusian: Resources finite, growth unsustainable

**Boserup (1965):**
- Population growth drives agricultural innovation
- "Necessity is the mother of invention"
- Intensification overcomes resource limits
- Technology enables growth

**Simon (1981):**
- People are "ultimate resource"
- Innovation creates new resources
- Market forces allocate efficiently
- Cornucopian view

**Club of Rome (1972):**
- "Limits to Growth" report
- Computer modelling of resource use
- Predicted collapse by 2070
- Criticised but influential

### Migration
**Lee's Push-Pull Model:**
| Push Factors | Pull Factors |
|--------------|--------------|
| Poverty | Employment |
| War/conflict | Safety |
| Persecution | Services |
| Disaster | Family |
| Unemployment | Quality of life |

**Intervening Obstacles:**
- Distance
- Cost
- Borders/visas
- Language
- Information

**Global Migration Statistics:**
- International migrants: 281 million (2020)
- 3.6% of world population
- Refugees: 26 million
- IDPs: 55 million
- Top destination: USA (51 million)

### Migration Patterns
**Types:**
- Economic migration
- Forced migration (refugees, asylum seekers)
- Retirement migration
- Return migration
- Temporary/circular migration

**Theories:**
- Zelinsky's mobility transition
- Network theory
- Dual labour market theory
- World systems theory

### Environmental Impacts
**Food Production:**
- Agriculture uses 50% of habitable land
- Irrigation uses 70% of freshwater
- Farming produces 26% of GHG emissions
- Deforestation for agriculture

**Water:**
- Agriculture: 70% of withdrawal
- Industry: 20%
- Domestic: 10%
- 2 billion in water-stressed areas

**Energy:**
- Fossil fuels: 80% of energy
- Growing demand in developing countries
- Renewable transition needed
- Energy poverty: 789 million lack electricity

### Population Policies
**Pro-natalist:**
- France: Tax benefits, childcare subsidies
- Russia: "Maternity capital" payments
- Sweden: Generous parental leave

**Anti-natalist:**
- China: One-child policy (1979-2015)
- India: Sterilisation campaigns (historical)
- Family planning programmes

**China's One-Child Policy:**
- Introduced: 1979
- Relaxed: Two-child 2015, three-child 2021
- Impact: 400 million births prevented (claimed)
- Issues: Ageing population, gender imbalance (117 males per 100 females), forced abortions
- Current fertility: 1.3 (below replacement)

### Ageing Populations
**Characteristics:**
- Increasing median age
- Higher dependency ratio
- Reduced workforce
- Healthcare demands

**Japan Example:**
- 28% over 65 (highest globally)
- Fertility: 1.3
- Shrinking workforce
- $200 billion pension costs
- Immigration resistance

### Migration Case Study: Mediterranean
**Scale:**
- 2015 peak: 1 million arrivals
- Deaths: 5,000+ (2015)
- Routes: Libya-Italy, Turkey-Greece

**Causes:**
- Syrian civil war
- Poverty in Africa
- Instability (Libya, Eritrea)

**Responses:**
- EU-Turkey deal (2016)
- Border controls strengthened
- Search and rescue operations
- Controversy over approach

### Key Statistics
- World population: 8 billion
- International migrants: 281 million
- Refugees: 26 million
- China fertility: 1.3
- Japan over 65: 28%`,

  'aqa-alevel-geog-resource-security': `## Resource Security

### Concepts
**Resource Security:**
- Reliable access to sufficient, affordable resources
- Water, energy, and food interconnected
- Security threatened by physical and human factors

**The Nexus:**
- Water-Energy-Food interconnections
- Water needed for energy and food
- Energy needed for water and food
- Food production affects water and energy
- Synergies and trade-offs

### Water Security
**Global Statistics:**
- 71% of Earth's surface is water
- 2.5% is freshwater
- Only 1% accessible freshwater
- 2.2 billion lack safe drinking water
- 4.2 billion lack sanitation

**Physical Factors:**
| Factor | Impact |
|--------|--------|
| Climate | Rainfall distribution |
| Geology | Aquifer presence |
| Topography | Drainage patterns |
| Vegetation | Interception rates |

**Human Factors:**
- Population growth and demand
- Agricultural irrigation (70% of withdrawal)
- Industrial use (20%)
- Domestic use (10%)
- Pollution and contamination
- Governance and infrastructure

**Water Stress:**
- Definition: >25% of renewable water used
- 17 countries extremely stressed (>80%)
- Middle East, North Africa, South Asia most affected
- Projected: 2/3 people in stressed areas by 2025

### Case Study: Colorado River
**Characteristics:**
- Length: 2,330 km
- Basin: 7 US states + Mexico
- Population served: 40 million
- Agriculture: 5.5 million acres irrigated

**Issues:**
- Over-allocated: More rights than water
- Climate change: 20% flow reduction since 2000
- Lake Mead: 27% capacity (2022), lowest since 1937
- Endangered species: Decline from dam impacts

**Management:**
- Colorado River Compact (1922): Allocated water between states
- Hoover Dam (1936): Reservoir storage
- Drought Contingency Plan (2019): Mandatory cuts
- Mexico treaty: 1.5 million acre-feet/year

### Energy Security
**Global Statistics:**
- Energy demand: Growing 1-2%/year
- Fossil fuels: 80% of primary energy
- 789 million lack electricity
- Reserves: Oil (50 years), gas (50 years), coal (100+ years)

**Physical Factors:**
- Geological deposits (fossil fuels)
- Solar radiation (solar potential)
- Wind patterns (wind potential)
- Water flow (hydro potential)

**Human Factors:**
- Technology and extraction costs
- Infrastructure and investment
- Policy and regulation
- Conflict and geopolitics

**Energy Mix Transitions:**
| Type | 2000 | 2020 | 2050 (projected) |
|------|------|------|------------------|
| Fossil fuels | 85% | 80% | 50% |
| Renewables | 2% | 12% | 35% |
| Nuclear | 7% | 4% | 8% |
| Hydro | 6% | 4% | 7% |

### Geopolitics of Energy
**Oil:**
- OPEC: 40% of production, 80% of reserves
- Concentration: Middle East dominance
- Price volatility: Political instability
- Strategic stockpiles: IEA members hold 90 days

**Gas:**
- Russia: Largest reserves, 40% of EU supply
- LNG growth: Enables diversification
- Pipeline politics: Nord Stream controversy
- Shale revolution: US became net exporter

**Renewables:**
- China: Dominates solar panel production (80%)
- Rare earths: Concentrated in China (60%)
- Lithium: Chile, Australia, Argentina
- New dependencies emerging

### Food Security
**Dimensions:**
- Availability: Sufficient food produced
- Access: Affordable and obtainable
- Utilisation: Nutritious and safe
- Stability: Consistent over time

**Global Statistics:**
- 828 million undernourished (2021)
- 3 billion cannot afford healthy diet
- 2 billion overweight/obese
- 14% of food lost post-harvest
- 17% of food wasted at consumer level

**Factors Affecting Supply:**
| Factor | Impact |
|--------|--------|
| Climate | Yield variability, extreme events |
| Water | Irrigation availability |
| Soil | Fertility, erosion |
| Technology | Yields, inputs |
| Pests/disease | Crop losses (20-40%) |
| Conflict | Disrupts production |
| Trade | Price volatility |

### Land Grabbing
**Definition:**
- Large-scale land acquisition by foreign investors
- Often in developing countries
- Agricultural, biofuel, speculation purposes

**Statistics:**
- 45 million hectares acquired (2000-2010)
- Africa: Largest target
- Investors: Gulf states, China, India, EU

**Impacts:**
| Positive | Negative |
|----------|----------|
| Investment | Displacement |
| Technology transfer | Food exported |
| Jobs | Environmental damage |
| Infrastructure | Loss of land rights |

### Conflict Over Resources
**Water Conflicts:**
- Middle East: Jordan River tensions
- Central Asia: Aral Sea diversion
- Nile: Ethiopia dam dispute with Egypt
- India-Pakistan: Indus Waters Treaty

**Energy Conflicts:**
- Middle East: Oil geopolitics
- Russia-Ukraine: Gas disputes
- South China Sea: Territorial claims
- Arctic: Competing claims

**Examples:**
- Ethiopia's Grand Renaissance Dam: 6,000 MW capacity; Egypt fears reduced Nile flow
- South China Sea: 11 billion barrels oil; multiple country claims
- Arctic: 30% of undiscovered gas; Russia, Canada, USA, Norway claims

### Sustainable Resource Management
**Strategies:**
| Resource | Strategies |
|----------|------------|
| Water | Demand management, efficiency, recycling, desalination |
| Energy | Renewables, efficiency, nuclear, CCS |
| Food | Sustainable intensification, waste reduction, diet change |

**International Governance:**
- UN Watercourses Convention
- Paris Agreement (energy)
- UN Food Systems Summit

### Key Statistics
- Freshwater accessible: 1%
- Water-stressed people: 2 billion
- Energy fossil fuel share: 80%
- Undernourished: 828 million
- Land grabbed (2000-2010): 45 million hectares`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const AQA_ALEVEL_GEOG_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: 4-Mark Explain Question
**Question:** Explain two ways in which human activity affects the carbon cycle. [4 marks]

**Model Answer:**
One way human activity affects the carbon cycle is through fossil fuel combustion. When we burn coal, oil, and gas for energy, carbon that was stored in geological deposits for millions of years is released into the atmosphere as CO2, adding approximately 9.4 gigatonnes of carbon annually, increasing atmospheric concentrations from 280ppm pre-industrial to over 420ppm today (1). This disrupts the natural balance as the release rate exceeds absorption by oceans and vegetation (1).

A second way is through deforestation, particularly in tropical rainforests like the Amazon. When forests are cleared and burned, the carbon stored in biomass (approximately 150-200 billion tonnes in the Amazon alone) is released as CO2 (1). Additionally, removing vegetation reduces the rate of carbon sequestration through photosynthesis, meaning less atmospheric CO2 is absorbed, creating a positive feedback mechanism that accelerates atmospheric accumulation (1).

**Mark Scheme:**
- Two distinct ways identified [1+1]
- Each way explained with development/data [1+1]
- Credit: fossil fuels, deforestation, agriculture, cement production
- Credit: quantified data, named locations, process explanation

---

### Example 2: 9-Mark Case Study Question
**Question:** Using a case study, assess the success of strategies used to manage coastal erosion. [9 marks]

**Model Answer:**
The Holderness Coast in East Yorkshire demonstrates both the successes and limitations of coastal management strategies. This 61km stretch of coast is the fastest eroding in Europe, losing an average of 2 metres per year due to the soft boulder clay geology and destructive waves from the North Sea's long fetch.

Hard engineering at Mappleton has achieved notable success in protecting the village. The 1991 scheme cost 2 million and involved two rock groynes and a rock revetment. These have successfully trapped sediment, building a protective beach that absorbs wave energy before it reaches the cliffs. The village that was threatened with destruction within 20 years has been preserved, protecting homes, businesses, and infrastructure worth considerably more than the scheme's cost.

However, the success at Mappleton must be weighed against the negative consequences further south. By interrupting longshore drift, the groynes have starved beaches at Great Cowden and Cowden of sediment. Erosion rates there increased from 2 metres to 4 metres per year following the scheme, demonstrating how hard engineering can simply transfer problems elsewhere rather than solving them. Properties that might have been safe for decades were lost within years, raising questions about who bears the cost of protecting others.

The management approach at Spurn Point offers a contrasting strategy. Here, managed retreat has been adopted, allowing natural processes to continue while relocating the lifeboat station and infrastructure. This approach is more sustainable and cheaper in the long term, though it requires accepting that some land will be lost. The spit is recognised as a dynamic landform that will naturally migrate, and attempting to fix it in place would be prohibitively expensive and potentially damaging to the wider sediment cell.

In conclusion, while hard engineering can successfully protect specific locations as demonstrated at Mappleton, success must be measured across the whole sediment cell. The Holderness case suggests that truly successful coastal management requires integrated approaches considering sediment budgets and accepting that protecting everywhere is neither economically viable nor environmentally sustainable. The Shoreline Management Plan's division of the coast into areas for different interventions represents a more strategic approach, though communities facing 'no active intervention' policies understandably dispute this definition of success.

**Mark Scheme:**
**Level 3 (7-9 marks):**
- AO1: Demonstrates thorough knowledge of coastal management strategies with detailed case study evidence
- AO2: Thoroughly applies understanding to assess success with clear evaluation
- Response shows balance considering multiple perspectives (local vs. regional, short vs. long term)
- Reaches a well-supported conclusion

**Level 2 (4-6 marks):**
- AO1: Demonstrates clear knowledge of management strategies
- AO2: Applies understanding to offer some assessment
- Some case study detail but may lack specificity
- Partial evaluation with limited conclusion

**Level 1 (1-3 marks):**
- AO1: Demonstrates limited knowledge
- AO2: Limited application or assessment
- Generic statements without case study detail

---

### Example 3: 20-Mark Extended Essay
**Question:** "Globalisation has created more problems than benefits for developing countries." To what extent do you agree? [20 marks]

**Model Answer:**
Globalisation - the increasing interconnectedness of economies, societies and cultures - has profoundly impacted developing countries over recent decades. Whether this has been predominantly beneficial or problematic depends on perspective, scale, and the specific dimensions of globalisation examined.

Economically, globalisation has delivered significant benefits to some developing countries. Foreign Direct Investment has created millions of jobs, with global FDI flows reaching $1.3 trillion annually, approximately half flowing to developing countries. China exemplifies successful integration into the global economy, with export-oriented industrialisation lifting 800 million people out of poverty since 1978. The World Bank argues that countries embracing trade liberalisation have grown faster than those remaining closed, with 'globalising' developing countries seeing 5% annual growth compared to 1.4% for non-globalisers in the 1990s.

However, economic integration has created significant problems. Wallerstein's World Systems Theory suggests that globalisation perpetuates core-periphery exploitation, with developing countries remaining dependent on primary exports while core nations control high-value manufacturing and services. Nigeria exemplifies this dynamic: despite oil exports generating 90% of foreign exchange earnings, the country remains one of the poorest in the world, with 70% of the population in poverty. Transnational corporations often repatriate profits rather than reinvesting locally, engage in transfer pricing to minimise tax contributions, and may relocate when cheaper labour becomes available elsewhere.

The environmental dimension reveals further contradictions. Developing countries have attracted polluting industries fleeing stricter regulations in developed nations - the 'pollution haven hypothesis'. Nigeria's Niger Delta has suffered extensive environmental degradation from oil extraction, with over 6,800 spills recorded between 1976 and 2001. Climate change, driven primarily by historical emissions from developed nations, disproportionately impacts developing countries with fewer resources for adaptation.

Socially and culturally, globalisation presents a mixed picture. Access to global media and communications has raised awareness of rights and opportunities, potentially empowering marginalised groups. Remittances from migration reached $630 billion globally in 2022, exceeding aid flows and providing crucial income for families in developing countries. However, cultural globalisation threatens local traditions and identities, while brain drain depletes developing countries of educated workers who migrate to better opportunities in developed nations.

Dependency theorists like Andre Gunder Frank would argue that globalisation represents neo-colonialism, maintaining structures of exploitation through debt, unfair trade rules, and conditional aid. The IMF's Structural Adjustment Programmes, while intended to promote development, have been criticised for imposing austerity measures harmful to the poorest. Conversely, modernisation theorists following Rostow would contend that globalisation provides the capital, technology, and market access necessary for development take-off.

The reality is that globalisation's impacts are highly uneven. Countries with strong institutions, educated workforces, and strategic integration have benefited considerably - the 'Asian Tigers' and more recently China and India demonstrate this potential. However, countries with weak governance, dependence on single commodities, and unfavourable geographic positions have often seen problems outweigh benefits. Even within successful countries, benefits are unequally distributed, with urban middle classes gaining while rural poor may be marginalised.

In conclusion, the extent to which globalisation has created more problems than benefits cannot be answered definitively for all developing countries. The evidence suggests that globalisation offers significant opportunities but also substantial risks, and outcomes depend critically on how countries manage their integration. Rather than seeing globalisation as inherently beneficial or problematic, developing countries arguably need policy space to manage integration strategically - protecting vulnerable sectors while capturing benefits from openness. The question is not whether to globalise but how to do so in ways that maximise benefits and minimise problems for the most vulnerable populations.

**Mark Scheme:**
**Level 4 (16-20 marks):**
AO1 (10 marks):
- Demonstrates thorough knowledge throughout
- Accurate and detailed understanding of globalisation processes
- Uses relevant theory (Wallerstein, Frank, Rostow)
- Includes specific, accurate data and examples

AO2 (10 marks):
- Applies knowledge appropriately to address the question
- Thorough analysis examining multiple dimensions
- Effective evaluation considering different perspectives
- Reaches a clear, well-supported conclusion responding to "to what extent"

**Level 3 (11-15 marks):**
- Clear knowledge and understanding
- Mostly accurate with some detail
- Good analysis with some evaluation
- Partial but coherent conclusion

**Level 2 (6-10 marks):**
- Some relevant knowledge
- Accuracy variable, limited detail
- Limited analysis, basic evaluation
- Weak or absent conclusion

**Level 1 (1-5 marks):**
- Limited, possibly inaccurate knowledge
- Very limited analysis
- No effective evaluation
- No conclusion

---

### Example 4: 4-Mark Process Question
**Question:** Explain the formation of a corrie. [4 marks]

**Model Answer:**
A corrie forms through the following glacial processes. Initially, snow accumulates in a north-facing hollow where solar radiation is limited, and compresses over time to form glacier ice through the process of diagenesis (1). As the ice moves through rotational sliding, the base of the hollow is deepened by abrasion, where rock fragments embedded in the ice scrape the bedrock, creating the characteristic overdeepened floor (1). The steep back wall develops through freeze-thaw weathering and plucking, where meltwater seeps into joints, freezes and expands, weakening the rock which is then removed as the glacier moves (1). A rock lip forms at the front where erosion is reduced due to less ice thickness and the emergence of the glacier, and after deglaciation, water collects behind this lip to form a tarn such as Red Tarn on Helvellyn (1).

**Mark Scheme:**
- Explanation of accumulation and ice formation [1]
- Floor deepening by abrasion/rotational sliding [1]
- Back wall steepening by freeze-thaw/plucking [1]
- Rock lip and tarn formation [1]
- Credit named example
`;

// ============================================================================
// QUESTION TEMPLATES
// ============================================================================

const AQA_ALEVEL_GEOG_QUESTION_TEMPLATES = `
## Authentic AQA A-Level Geography Question Formats

### Type 1: Short Knowledge (4 marks)
Format: "Explain [concept/process]"
**Examples:**
- "Explain two ways in which human activity affects the carbon cycle" [4 marks]
- "Explain the formation of a spit" [4 marks]
Marking: 2 marks per point (identification + development)

### Type 2: Application (6 marks)
Format: "Using Figure X, [analyse/explain/describe]"
**Examples:**
- "Using Figure 2, analyse the changes in river discharge" [6 marks]
- "Using Figure 3, explain the distribution of tropical storms" [6 marks]
Marking: Levels 1-3 based on use of resource and geographical understanding

### Type 3: Context Application (9 marks)
Format: "Using a case study, [explain/assess/analyse]"
**Examples:**
- "Using a case study, assess the success of coastal management strategies" [9 marks]
- "Using a named example, explain the causes and impacts of a tectonic hazard" [9 marks]
Marking: Levels 1-3; must include specific place detail and evaluation

### Type 4: Extended Essay (20 marks)
Format: "To what extent..." / "Assess..." / "Evaluate..."
**Examples:**
- "To what extent can coastal flooding be managed sustainably?" [20 marks]
- "Assess the view that globalisation has more negative than positive impacts" [20 marks]
- "Evaluate the success of strategies to manage climate change" [20 marks]

20-mark questions require:
- AO1: Knowledge and understanding (10 marks)
- AO2: Application, analysis and evaluation (10 marks)
`;

// ============================================================================
// MARK SCHEME CONVENTIONS
// ============================================================================

const AQA_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level Geography Mark Scheme Conventions

### 20-Mark Extended Response Levels (AO1: 10 marks, AO2: 10 marks)

**Level 4 (16-20 marks):**
- AO1: Demonstrates thorough knowledge and understanding throughout
- AO1: Knowledge is relevant, accurate and detailed
- AO2: Applies knowledge appropriately with thorough analysis and evaluation
- AO2: Response is well-structured and coherent
- AO2: Reaches a clear, well-supported conclusion

**Level 3 (11-15 marks):**
- AO1: Demonstrates clear knowledge and understanding
- AO1: Knowledge is mostly relevant and accurate with some detail
- AO2: Applies knowledge with clear analysis and some evaluation
- AO2: Response is structured with a partial conclusion
- AO2: Some balance in the argument

**Level 2 (6-10 marks):**
- AO1: Demonstrates some knowledge and understanding
- AO1: Knowledge is partially relevant with limited detail
- AO2: Limited application with basic analysis
- AO2: Response lacks clear structure
- AO2: Conclusion may be missing or weak

**Level 1 (1-5 marks):**
- AO1: Demonstrates limited knowledge
- AO1: Knowledge may be inaccurate or irrelevant
- AO2: Very limited application or analysis
- AO2: Response is unstructured
- AO2: No conclusion

**0 marks:** Nothing worthy of credit

### 9-Mark Case Study Levels

**Level 3 (7-9 marks):**
- Specific, accurate and relevant case study detail
- Clear explanation/analysis linked to the question
- May include evaluation where appropriate

**Level 2 (4-6 marks):**
- Some case study detail, may lack specificity
- Partial explanation with some relevance
- Limited evaluation

**Level 1 (1-3 marks):**
- Generic or limited case study knowledge
- Description rather than explanation
- Weak link to question

### Key Case Studies Required
**Physical Geography (Paper 1):**
- Water cycle: Amazon rainforest, Arctic tundra
- Coastal: Holderness coast, Dorset coast
- Glacial: Lake District, Alps
- Hot desert: Thar Desert, Sahara/Sahel
- Hazards: Nepal earthquake 2015, Typhoon Haiyan 2013, Eyjafjallajokull 2010
- Ecosystems: Tropical rainforest, local ecosystem

**Human Geography (Paper 2):**
- Global systems: Trade patterns, TNCs, financial flows
- Global governance: Antarctica
- Changing places: Local and contrasting place studies
- Urban: Mumbai, London
- Population: Migration patterns, ageing populations
- Resources: Water (Colorado), energy, food security
`;

// ============================================================================
// KEY STATISTICS REFERENCE
// ============================================================================

const AQA_ALEVEL_GEOG_KEY_STATISTICS = `
## Key Statistics Students Should Know

### Water and Carbon Cycles
- Atmospheric CO2: 420 ppm (pre-industrial: 280 ppm)
- Global temperature rise: 1.1C above pre-industrial
- Ocean absorption: 30% of anthropogenic CO2
- Amazon carbon storage: 150-200 billion tonnes
- Permafrost carbon: 1,700 Gt (twice atmospheric carbon)
- Annual precipitation over land: 107,000 km3
- Annual evapotranspiration: 71,000 km3
- Amazon deforestation: 17% lost since 1970

### Coastal Systems
- Holderness erosion: 2m/year (fastest in Europe)
- Sea level rise: 3.6mm/year global average
- Southeast England: 4mm/year (includes isostatic adjustment)
- UK coastline: 31,000 km
- Chesil Beach: 29 km, 180 billion pebbles
- Wave pressure: Up to 8 tonnes/m2 in storms
- Sea wall cost: 6,000/m; lifespan 30-50 years

### Glacial Systems
- Last glaciation ended: ~10,000 years ago
- Global ice volume: 24 million km3
- Lake District visitors: 15 million/year
- Wastwater depth: 79m (deepest English lake)
- Global permafrost: 25% of land surface
- Scottish isostatic rise: 1-2mm/year

### Hot Deserts
- Sahara area: 9 million km2
- Thar population: 83 million
- Bhadla Solar Park: 2,245 MW (world's largest)
- Desertification: Affects 1.5 billion people globally
- Great Green Wall: 8,000 km target, 15% complete
- Sahel desertification: 48 km/year southward expansion

### Hazards
- Nepal 2015: 9,000 deaths, $10 billion (50% GDP)
- Haiyan 2013: 6,300 deaths, 315 km/h winds, 14 million affected
- Philippines typhoons: ~20 per year
- Risk equation: R = (H x V) / C
- Eyjafjallajokull: 100,000 flights cancelled

### Global Systems
- World trade: $28 trillion/year
- FDI: $1.3 trillion/year
- Remittances: $630 billion/year
- TNCs: 100,000+ globally
- Containerisation: 90% of trade by volume
- Triad share of trade: 70% (EU, USA, East Asia)

### Global Governance
- Antarctica: 14 million km2, 70% of freshwater
- Antarctic Treaty: 54 parties (1959)
- SDGs: 17 goals, 2030 target
- Paris Agreement: 1.5-2C target, 197 parties
- UN members: 193 countries
- Antarctic tourism: 74,000 visitors/year (2019)

### Urban
- Global urban: 56% (4.4 billion)
- Megacities: 34 (2020), projected 43 (2030)
- Mumbai slums: 42% of population
- Dharavi: 1 km2, 1 million people, $1 billion economy
- London housing: 12x average income
- UK urban: 83%

### Population
- World population: 8 billion (2022)
- International migrants: 281 million (3.6%)
- Refugees: 26 million
- China fertility: 1.3 (below replacement 2.1)
- Japan over 65: 28% (highest globally)
- Africa growth rate: 2.5%/year

### Resources
- Water stress: 2 billion people
- Undernourished: 828 million
- Lack electricity: 789 million
- Freshwater accessible: 1% of total water
- Agriculture water use: 70% of withdrawals
- Energy from fossil fuels: 80%
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = AQA_ALEVEL_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert AQA A-Level Geography examiner creating exam-style questions.

${AQA_ALEVEL_GEOG_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_GEOG_THEORIES}

${topicKnowledge}

${AQA_ALEVEL_GEOG_QUESTION_TEMPLATES}

${AQA_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS}

${AQA_ALEVEL_GEOG_WORKED_EXAMPLES}

${AQA_ALEVEL_GEOG_KEY_STATISTICS}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA A-Level Geography specification.

**Keep Physical and Human Geography distinct:**
- Physical Geography topics: Test physical processes, landforms, climate, ecosystems - NOT human impacts as the main focus
- Human Geography topics: Test human processes, urbanisation, globalisation - NOT physical geography as the main focus
- Only blend content when the topic explicitly requires it (e.g., coastal management includes both)

**DO NOT include:**
- University-level geographic theory beyond A-Level specification
- Obscure case studies not commonly used in A-Level teaching
- Statistical methods beyond those required in the specification
- Other social science content (sociology, economics) unless directly relevant to human geography

**For the topic "${topic.name}", test ONLY the content specified in the AQA A-Level Geography syllabus.**

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds preparing for university
2. **Authentic AQA Style**: Match real AQA paper format and command words
3. **Clear Mark Allocation**: State marks in square brackets
4. **Appropriate Difficulty**:
   - Easy: Short answer/explain questions (4-6 marks)
   - Medium: Application with data/case study (6-9 marks)
   - Hard: Extended essay requiring evaluation (20 marks)
5. **Use Specific Knowledge**: Include real statistics, case studies, named theorists, and examples from the topic knowledge provided
6. **Geographic Theory**: Reference appropriate theorists (Massey, Harvey, Wallerstein, etc.) where relevant

## Response Format
Return JSON with:
- "content": Question text (include any figure descriptions if needed)
- "marks": Total marks
- "solution": Model answer demonstrating A-Level standard with specific data, case studies, and theory
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('geography')}`;
}

export function getAQAALevelGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getVarietyInstructions(variety);
  const topicKnowledge = AQA_ALEVEL_GEOG_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a short answer question testing knowledge and understanding (AO1).

**Question Types:**
- "Explain [process/concept]" [4 marks]
- "Outline [feature/characteristic]" [4 marks]
- "Describe the distribution of..." [4 marks]

The model answer should include:
- Clear identification of points
- Development with specific examples
- Relevant statistics where appropriate

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an application question requiring analysis (AO1/AO2).

**Question Types:**
- "Using a case study, explain..." [9 marks]
- "Using Figure X, analyse..." [6 marks]
- "Assess the impacts of..." [6 marks]

The model answer MUST include:
- Specific case study details (locations, dates, statistics)
- Clear analysis and explanation
- Some evaluation where appropriate
- Reference to geographical processes and theory

Include specific place/case study detail where appropriate.

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 20-mark extended response requiring evaluation (AO1 + AO2).

**Question Types:**
- "To what extent..." [20 marks]
- "Assess the view that..." [20 marks]
- "Evaluate the success of..." [20 marks]

**20-Mark Requirements:**
- Requires balanced argument
- Must reach a supported conclusion
- AO1 (Knowledge): 10 marks
- AO2 (Application/Evaluation): 10 marks

**Level Descriptors:**
- Level 4 (16-20): Thorough knowledge; effective evaluation; clear conclusion
- Level 3 (11-15): Clear knowledge; good analysis; partial conclusion
- Level 2 (6-10): Some knowledge; limited analysis; weak conclusion
- Level 1 (1-5): Limited knowledge; minimal analysis; no conclusion

**The model answer MUST include:**
- Multiple specific case studies with dates, statistics, locations
- Reference to relevant geographical theory (Massey, Harvey, Wallerstein, etc.)
- Balanced argument considering multiple perspectives
- Synoptic links across topics where appropriate
- Clear evaluation responding to the command word
- Well-structured paragraphs with logical progression
- Strong conclusion directly addressing "to what extent" or similar

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('geography', difficulty);

  return `Generate an AQA A-Level Geography question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

## Key Geographic Theories Available:
${AQA_ALEVEL_GEOG_THEORIES}

## Key Statistics Available:
${AQA_ALEVEL_GEOG_KEY_STATISTICS}

${difficultyGuidance[difficulty]}

${enhancedMarkSchemeGuidance}

## Critical Requirements:
1. Use SPECIFIC facts, statistics, and case studies from the topic knowledge
2. Model answer must demonstrate thorough A-Level geographical knowledge
3. Include relevant geographic theory where appropriate (cite theorists by name)
4. Mark scheme must be detailed and aligned with AQA conventions
5. For hard questions: Include multiple case studies, statistics, theory, and balanced evaluation

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full level descriptors, indicative content with specific case studies and statistics, geographical theory references, model answer structure, and examiner tips",
  "markScheme": ["point 1", "point 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 6 };
    case 'medium':
      return { min: 6, max: 9 };
    case 'hard':
      return { min: 20, max: 20 };
  }
}
