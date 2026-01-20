// Edexcel A-Level Geography (9GE0) Question Generation Prompts
// Based on official Pearson Edexcel specification and mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/geography-2016.html

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// EDEXCEL A-LEVEL GEOGRAPHY SPECIFICATION DETAILS (9GE0)
// ============================================================================

const EDEXCEL_ALEVEL_GEOG_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, explanation, basic understanding | Explain processes (e.g., coastal erosion, plate tectonics), describe patterns, outline characteristics using specific terminology |
| **Medium** | Analysis, application, evaluation | Analyse data/resources, assess relative importance of factors, compare case studies, apply knowledge to unfamiliar contexts |
| **Hard** | Synthesis, critical evaluation, judgement | Evaluate complex geographical debates, synthesise evidence across multiple scales/contexts, reach substantiated judgements on contested issues |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires integration of knowledge across multiple topics (synoptic thinking)
- Demands critical evaluation of geographical theories (Rostow, Wallerstein, Harvey, Massey)
- No single "correct" answer - requires weighing competing perspectives and evidence
- Must construct original arguments using detailed case study evidence
- Requires awareness of scale interactions (local/regional/national/global)

**Easy (4-8 marks):** Demonstrate knowledge of geographical processes and concepts with specific examples. Questions test understanding and ability to explain.
**Medium (8-12 marks):** Apply knowledge to analyse data, assess importance of factors, or compare contrasting examples. Requires evaluation and judgement.
**Hard (20 marks):** Synthesise knowledge across topics to evaluate complex geographical issues. Demands sustained argument with evidence-based conclusions.
`;

const EDEXCEL_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Geography Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change at a variety of scales | 34% |
| **AO2** | Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues | 36% |
| **AO3** | Use a variety of relevant quantitative, qualitative and fieldwork skills to: investigate geographical questions; interpret, analyse and evaluate data and evidence; construct arguments and draw conclusions | 30% |

### Paper Structure
| Paper | Title | Content | Marks | Time | Weighting |
|-------|-------|---------|-------|------|-----------|
| **Paper 1** | Physical Geography | Tectonics + Coastal/Glaciated + Water Cycle + Carbon Cycle | 105 | 2hr 15m | 30% |
| **Paper 2** | Human Geography | Globalisation + Superpowers + Regenerating/Diverse Places | 105 | 2hr 15m | 30% |
| **Paper 3** | Synoptic Investigation | Synoptic themes + Player-focused analysis | 70 | 2hr 15m | 20% |
| **NEA** | Investigation | Independent investigation | 70 | N/A | 20% |

### Question Types
- Short answer (4-8 marks)
- Data stimulus (8-12 marks)
- Extended response (12 or 20 marks)

### Command Words
- **Explain**: Set out the causes of something and/or reasons for
- **Analyse**: Break something down into component parts; examine relationships
- **Assess**: Consider the relative significance of something; reach a substantiated judgement
- **Evaluate**: Measure the value or success of something; reach a substantiated judgement
`;

const EDEXCEL_ALEVEL_GEOG_QUESTION_TEMPLATES = `
## Authentic Edexcel A-Level Geography Question Formats

### Type 1: Short Answer (4 marks)
Format: "Explain [concept/process]"
**Examples:**
- "Explain one way human activity affects the water cycle" [4 marks]
- "Explain why some coastlines erode faster than others" [4 marks]
Marking: 1 mark for basic point, +1 mark for development/example (x2)

### Type 2: Data Stimulus (8 marks)
Format: "Using Figure X and your own knowledge, explain/analyse..."
**Examples:**
- "Using Figure 3, analyse the trends in global CO2 emissions" [8 marks]
- "Using the data, explain the distribution of tropical storms" [8 marks]
Marking: Levels 1-3, must use resource + apply own knowledge

### Type 3: Extended Response (12 marks)
Format: "Assess/Explain the [impacts/causes/factors]..."
**Examples:**
- "Assess the relative importance of factors affecting tectonic hazard impacts" [12 marks]
- "Explain the economic and social impacts of globalisation on different groups" [12 marks]

Marking (Levels):
- Level 3 (9-12): Thorough knowledge; detailed analysis; clear evaluation
- Level 2 (5-8): Some knowledge; partial analysis; limited evaluation
- Level 1 (1-4): Basic knowledge; description rather than analysis

### Type 4: Essay Question (20 marks)
Format: "Evaluate/Assess the view that..." / "To what extent..."
**Examples:**
- "Evaluate the view that climate change is mainly caused by human activity" [20 marks]
- "Assess the success of attempts to manage the impacts of superpowers" [20 marks]
- "To what extent is regeneration the most effective solution for declining places?" [20 marks]

20-mark questions require:
- Balanced argument with multiple perspectives
- Specific case study/place evidence
- Substantiated conclusion
`;

const EDEXCEL_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS = `
## Edexcel A-Level Geography Mark Scheme Conventions

### 20-Mark Extended Response Levels

**Level 4 (16-20 marks):**
- Demonstrates comprehensive geographical knowledge and understanding
- Applies knowledge effectively with detailed analysis throughout
- Evaluation is thorough with well-developed, substantiated conclusions
- Response is well-structured with clear, logical arguments
- Uses accurate geographical terminology consistently

**Level 3 (11-15 marks):**
- Demonstrates good geographical knowledge and understanding
- Applies knowledge with clear analysis
- Evaluation is present but may lack full development
- Response is structured with mostly clear arguments
- Uses appropriate geographical terminology

**Level 2 (6-10 marks):**
- Demonstrates some geographical knowledge and understanding
- Application is partial with limited analysis
- Evaluation is basic or implicit
- Response has some structure but may lack clarity
- Some use of geographical terminology

**Level 1 (1-5 marks):**
- Demonstrates limited geographical knowledge
- Application is weak with minimal analysis
- Little or no evaluation
- Response lacks clear structure
- Limited or no use of geographical terminology

**0 marks:** No relevant content

### 12-Mark Levels

**Level 3 (9-12 marks):**
- Thorough knowledge and understanding
- Detailed and relevant analysis
- Clear evaluation with substantiated points

**Level 2 (5-8 marks):**
- Some knowledge and understanding
- Partial analysis
- Some evaluation but may lack development

**Level 1 (1-4 marks):**
- Basic knowledge
- Limited analysis
- Little or no evaluation

### Synoptic Paper (Paper 3) Requirements
- Must link across specification areas
- Consider players, attitudes and actions
- Address futures and uncertainties
- Use pre-release resource booklet

### Key Case Studies/Examples
- Tectonics: contrasting hazard events (e.g., Nepal 2015, Japan 2011)
- Coastal: UK and global examples
- Globalisation: TNCs, global shift examples
- Superpowers: USA, China, emerging powers
- Regeneration: UK urban/rural examples
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE BANKS
// ============================================================================

const TECTONIC_PROCESSES_KNOWLEDGE = `
## Tectonic Processes and Hazards - Essential Knowledge

### Plate Boundary Types and Processes

**Divergent (Constructive) Boundaries:**
- Plates move apart at 2-5cm/year (e.g., Mid-Atlantic Ridge spreads at 2.5cm/year)
- Magma rises from asthenosphere, creating new oceanic crust
- Features: Mid-ocean ridges, rift valleys, shield volcanoes (effusive eruptions, basaltic lava)
- Example: Iceland sits on the Mid-Atlantic Ridge; Eyjafjallajokull 2010 eruption (VEI 4)
- Earthquakes typically shallow (<70km), low magnitude (<6.0)

**Convergent (Destructive) Boundaries:**
- Oceanic-Continental: Denser oceanic plate subducts, forming deep ocean trenches
  - Example: Nazca Plate subducts beneath South American Plate (6-7cm/year)
  - Features: Andes Mountains, Peru-Chile Trench (8,065m deep)
  - Explosive stratovolcanoes (andesitic lava, high silica content)
- Oceanic-Oceanic: Older, denser plate subducts
  - Example: Pacific Plate subducts beneath Philippine Plate
  - Features: Mariana Trench (10,994m), volcanic island arcs (Japan, Philippines)
- Continental-Continental: Neither plate subducts fully
  - Example: Indian Plate collides with Eurasian Plate at 5cm/year
  - Features: Himalayas (growing 1cm/year), Tibetan Plateau

**Conservative (Transform) Boundaries:**
- Plates slide past each other
- No volcanic activity (no magma generation)
- Significant earthquake hazard from friction build-up
- Example: San Andreas Fault (1,300km long), Pacific Plate moves NW relative to North American Plate at 6cm/year
- 1906 San Francisco earthquake: 7.9 magnitude, 3,000+ deaths, $400 million damage (1906 dollars)

### Hazard Profiles - Key Components
1. **Magnitude**: Measured by VEI (volcanoes) or Richter/Moment Magnitude (earthquakes)
2. **Frequency**: Return period (e.g., 1:100 year event)
3. **Duration**: Seconds (earthquakes) to months (volcanic eruptions)
4. **Areal extent**: Localised (landslides) to global (volcanic winter)
5. **Speed of onset**: Sudden (earthquakes) to gradual (volcanic dome growth)
6. **Predictability**: Low (earthquakes) to moderate (volcanoes)
7. **Spatial concentration**: Plate boundaries vs intraplate activity

### Earthquake Mechanics
- **Focus (hypocentre)**: Point of rupture below surface
  - Shallow: <70km (most destructive)
  - Intermediate: 70-300km
  - Deep: 300-700km
- **Epicentre**: Point on surface directly above focus
- **Seismic waves**: P-waves (fastest, compression), S-waves (shear, cannot travel through liquids), Surface waves (most destructive)
- **Liquefaction**: Saturated soils behave as liquid during shaking (e.g., Christchurch 2011)
- **Secondary hazards**: Tsunamis, landslides, fires, building collapse

### Volcanic Hazards
- **Primary**: Lava flows, pyroclastic flows (up to 700km/h, 1000C), tephra, volcanic bombs
- **Secondary**: Lahars (volcanic mudflows), jokulhlaups (glacial outburst floods), volcanic winter
- **Volcanic Explosivity Index (VEI)**: Logarithmic scale 0-8
  - VEI 0-2: Hawaiian/Strombolian eruptions (effusive)
  - VEI 3-4: Vulcanian eruptions (e.g., Eyjafjallajokull 2010 VEI 4)
  - VEI 5-6: Plinian eruptions (e.g., Mount St Helens 1980 VEI 5)
  - VEI 7-8: Ultra-Plinian/Supervolcanic (e.g., Tambora 1815 VEI 7)

### Case Study: Nepal Earthquake 2015 (Gorkha Earthquake)
**Event characteristics:**
- Date: 25 April 2015
- Magnitude: 7.8 (followed by 7.3 aftershock on 12 May)
- Depth: 15km (shallow focus)
- Cause: Indian Plate subducting beneath Eurasian Plate
- Duration: 50 seconds

**Impacts:**
- Deaths: 8,891 (including 19 on Everest from avalanche)
- Injured: 22,300
- Displaced: 3.5 million people
- Buildings destroyed: 604,930
- Buildings damaged: 288,856
- Economic loss: $10 billion (50% of Nepal's GDP)
- Heritage sites: 750 damaged including Dharahara Tower (collapsed)

**Vulnerability factors:**
- GDP per capita: $730 (2015) - one of Asia's poorest countries
- Governance issues: Political instability, no building codes enforcement
- Infrastructure: 90% of buildings unreinforced masonry or mud brick
- Geography: Mountainous terrain hampered rescue efforts
- Kathmandu Valley: Built on lake sediments prone to liquefaction

**Response:**
- Emergency: International search and rescue teams from 34 countries
- Short-term: WFP provided food to 1.4 million people
- Reconstruction: $4.1 billion pledged by international donors
- Long-term: National Reconstruction Authority established (criticized for slow progress)

### Case Study: Japan Earthquake and Tsunami 2011 (Tohoku)
**Event characteristics:**
- Date: 11 March 2011
- Magnitude: 9.0 (4th largest recorded earthquake globally)
- Depth: 32km
- Cause: Pacific Plate subducting beneath Okhotsk Plate at Japan Trench
- Rupture zone: 500km x 200km

**Tsunami characteristics:**
- Wave height: Up to 40.5m at Miyako
- Arrival time: 10-30 minutes at closest coastline
- Run-up distance: Up to 10km inland at Sendai Plain
- Speed: 700km/h in open ocean

**Impacts:**
- Deaths: 19,759 (90% from drowning)
- Missing: 2,553
- Displaced: 470,000 at peak
- Buildings destroyed: 127,290
- Economic loss: $360 billion (most expensive natural disaster in history)
- Fukushima Daiichi: Nuclear meltdown (Level 7 INES), 154,000 evacuated

**Resilience factors:**
- GDP per capita: $46,000 (2011) - high income country
- Preparedness: Strict building codes since 1981
- Early warning: JMA earthquake warning 8.6 seconds before shaking reached Tokyo
- Infrastructure: Seawalls (though many overtopped), tsunami shelters
- Education: Regular drills, disaster awareness curriculum

**Response:**
- Emergency: Self-Defense Forces deployed 100,000 personnel
- Recovery: 98% debris cleared within 3 years
- Reconstruction: $250 billion government investment over 10 years
- Nuclear policy: All 54 reactors temporarily shut down

### Comparing Nepal 2015 vs Japan 2011
| Factor | Nepal 2015 | Japan 2011 |
|--------|-----------|------------|
| Magnitude | 7.8 | 9.0 |
| Deaths | 8,891 | 19,759 |
| Deaths per million pop | 315 | 156 |
| Economic loss | $10bn (50% GDP) | $360bn (8% GDP) |
| Building codes | Poorly enforced | Strictly enforced |
| Early warning | None | JMA system |
| Recovery time | Ongoing (>8 years) | Largely complete (3-5 years) |
| Key lesson | Development level critical | Even resilient nations vulnerable |
`;

const LANDSCAPE_SYSTEMS_KNOWLEDGE = `
## Landscape Systems - Essential Knowledge

### Coastal Systems - Processes and Landforms

**Inputs, Outputs and Transfers:**
- Inputs: Wave energy, sediment (rivers, cliff erosion, offshore), wind, tides
- Outputs: Sediment transport (longshore drift), wave energy dissipation
- Stores: Beaches, dunes, spits, bars, offshore bars

**Wave Types:**
- Constructive waves: Low frequency (6-8/min), low height, strong swash > backwash, deposit sediment
- Destructive waves: High frequency (10-14/min), high height, weak swash < backwash, erode and transport

**Erosion Processes:**
- Hydraulic action: Wave compression forces air into rock cracks (pressure up to 30 tonnes/m2)
- Abrasion (corrasion): Sediment thrown against cliff face
- Attrition: Sediment particles collide and become smaller/rounder
- Corrosion (solution): Chemical weathering of rocks (especially limestone)

**Transport Processes:**
- Traction: Large particles roll along seabed
- Saltation: Particles bounce along seabed
- Suspension: Fine particles carried in water column
- Solution: Dissolved minerals carried in water
- Longshore drift: Zig-zag movement of sediment along beach

**Landforms of Erosion:**
- Wave-cut platforms: Formed by cliff retreat, typically <4 slope, exposed at low tide
  - Example: Flamborough Head - platform extends 300m from cliff base
- Cliffs: Determined by rock type and structure
  - Hard rock: Vertical cliffs (chalk at Beachy Head - 162m)
  - Soft rock: Slumped profiles (Holderness - boulder clay)
- Headlands and bays: Differential erosion of resistant/less resistant rock
  - Example: Swanage Bay - chalk headlands (Ballard Point, Handfast Point), clay bay
- Caves, arches, stacks, stumps: Progressive erosion sequence
  - Example: Old Harry Rocks (Dorset) - complete sequence visible

**Landforms of Deposition:**
- Beaches: Accumulation of sediment between low and high tide marks
  - Sand beaches: Gentle gradient (1-5), small particles
  - Shingle beaches: Steeper gradient (10-20), storm ridge at back
- Spits: Extended depositional feature from coastline
  - Example: Spurn Head (5km long), Dawlish Warren, Hurst Castle Spit
- Bars: Spit that extends across bay mouth
  - Example: Slapton Ley (Devon) - impounds freshwater lagoon
- Tombolos: Bar connecting mainland to island
  - Example: Chesil Beach (28km, connects Isle of Portland)
- Sand dunes: Wind-blown accumulations
  - Embryo dunes, foredunes, yellow dunes, grey dunes, dune slack sequence
  - Example: Studland Bay dunes (succession over 500 years)

### Holderness Coast Case Study
**Context:**
- Location: East Yorkshire, 61km coastline
- Geology: Glacial boulder clay (till) - highly erodible
- Erosion rate: 1.8m/year average (highest in Europe)
- Loss since Roman times: 4km of coastline, 30+ villages

**Causes of rapid erosion:**
- Weak boulder clay: Low cohesion, easily eroded
- Powerful waves: Long fetch across North Sea (500-800km)
- Narrow beaches: Limited protection at cliff base
- Coastal defences elsewhere: Interrupt sediment supply

**Management approaches:**
- Hard engineering: Groynes at Hornsea (trapped beach material), sea wall at Withernsea
- Soft engineering: Beach nourishment at Mappleton (1991 scheme)
- Managed retreat: Easington, some properties sacrificed
- SMP policy: Hold the line at settlements, no active intervention elsewhere

**Key places:**
- Mappleton: Rock armour and groynes (1991, 2 million) - erosion rates reduced but accelerated downdrift
- Cowden: Formerly 1.8m/year, now no intervention, cliff collapsed onto beach
- Spurn Head: Dependent on sediment from eroding cliffs, future uncertain

### Glaciated Landscape Systems

**Glacial Processes:**
- Erosion:
  - Plucking: Ice freezes to rock, pulls away fragments as glacier moves
  - Abrasion: Rock fragments embedded in ice scrape bedrock (striations)
  - Freeze-thaw: Water in cracks expands 9% when frozen, shatters rock
- Movement:
  - Basal sliding: Glacier slides over bedrock on thin water film (up to 90% of movement)
  - Internal deformation: Ice crystals deform under pressure
  - Velocity: Typically 3-300m/year (surges up to 50m/day)

**Landforms of Erosion:**
- Corrie (cirque): Armchair-shaped hollow at glacier source
  - Formation: Freeze-thaw on back wall, rotational slip, over-deepening
  - Features: Steep back wall, rock lip, tarn
  - Example: Red Tarn (Lake District) - classic corrie with tarn
- Arete: Knife-edge ridge between two corries
  - Example: Striding Edge (Helvellyn)
- Pyramidal peak: Three or more corries eroding back-to-back
  - Example: Matterhorn (Alps), Snowdon (Wales)
- Glacial trough (U-shaped valley): Straightened, deepened river valley
  - Features: Steep sides, flat floor, truncated spurs, hanging valleys
  - Example: Nant Ffrancon (Snowdonia) - classic U-shape
- Ribbon lake: Long, narrow lake in over-deepened section
  - Example: Lake Windermere (17km long, UK's largest lake)
- Roche moutonnee: Asymmetric rock outcrop
  - Smooth stoss (upstream) side from abrasion
  - Jagged lee (downstream) side from plucking
- Fjord: Drowned glacial trough
  - Example: Sognefjord (Norway) - 204km long, 1,308m deep

**Landforms of Deposition:**
- Moraine types:
  - Lateral: Along valley sides
  - Medial: Where two glaciers merge
  - Terminal: At glacier snout (maximum extent)
  - Recessional: Temporary stillstands during retreat
  - Ground: Deposited beneath glacier
- Till: Unsorted angular debris deposited directly by ice
- Erratics: Large boulders transported far from source
  - Example: Norber erratics (Yorkshire Dales) - Silurian slate on limestone
- Drumlins: Streamlined hills of till
  - "Basket of eggs" topography
  - Steep stoss end, gentle lee end
  - Example: Ribblehead drumlins (Yorkshire)

### Lake District Case Study (Glaciated Landscape)
**Glacial history:**
- Maximum glaciation: Devensian (26,000-13,000 years ago)
- Ice thickness: Up to 900m over Scafell
- Ice cap with radiating outlet glaciers

**Key landforms:**
- Corries: Red Tarn, Scales Tarn, Blea Water (deepest tarn, 63m)
- Aretes: Striding Edge, Swirral Edge
- U-shaped valleys: Borrowdale, Langdale
- Ribbon lakes: Windermere, Ullswater, Coniston Water
- Hanging valleys: Sourmilk Gill (above Buttermere)
- Drumlins: Eden Valley

**Contemporary management:**
- Tourism pressure: 16 million visitors/year
- Path erosion: "Fix the Fells" programme (National Trust)
- Water abstraction: Thirlmere supplies Manchester (100 million litres/day)
- Farming vs conservation: Upland farming subsidies debate
`;

const WATER_CYCLE_KNOWLEDGE = `
## Water Cycle and Water Insecurity - Essential Knowledge

### Global Hydrological Cycle - Stores and Flows

**Global Water Distribution:**
- Total water: 1.386 billion km3
- Oceans: 97.5% (saline)
- Freshwater: 2.5%
  - Ice caps/glaciers: 68.7% of freshwater (locked)
  - Groundwater: 30.1% (deep aquifers often inaccessible)
  - Surface freshwater: 1.2%
    - Lakes: 87%
    - Swamps: 11%
    - Rivers: 2%

**Key Stores:**
| Store | Volume (km3) | Residence Time |
|-------|-------------|----------------|
| Oceans | 1,335,000,000 | 3,000 years |
| Glaciers/ice | 26,500,000 | 10,000 years |
| Groundwater | 10,530,000 | 100-10,000 years |
| Lakes | 91,000 | 17 years |
| Soil moisture | 16,500 | 1-2 months |
| Atmosphere | 12,900 | 8-10 days |
| Rivers | 2,120 | 16 days |

**Key Flows (Annual):**
- Evaporation from oceans: 413,000 km3/year
- Precipitation over oceans: 373,000 km3/year
- Precipitation over land: 113,000 km3/year
- Evapotranspiration from land: 73,000 km3/year
- Runoff to oceans: 40,000 km3/year

### Drainage Basin Hydrology

**Drainage Basin Components:**
- Watershed: Boundary between catchments
- Channel network: Trunk stream and tributaries
- Confluence: Where tributaries meet
- Mouth: Where river enters sea/lake

**Inputs:**
- Precipitation: Rain, snow, hail, dew
- Interception: Vegetation catches precipitation (deciduous forest: 25-35%, coniferous: 15-25%)

**Stores:**
- Surface storage: Puddles, lakes, ponds
- Vegetation storage: Water on/in plants
- Soil moisture: Water held in soil pores
- Groundwater: Water in permeable rock (aquifer)

**Transfers:**
- Infiltration: Surface to soil (rates: sandy soil 25mm/hr, clay 5mm/hr)
- Percolation: Soil to groundwater
- Throughflow: Lateral movement through soil
- Groundwater flow: Very slow movement through rock
- Overland flow: Surface runoff (when precipitation > infiltration)
- Stemflow: Down plant stems
- Channel flow: In river channel

**Outputs:**
- Evaporation: Liquid to gas (from surfaces)
- Transpiration: Water loss through plant stomata
- Evapotranspiration: Combined total
- River discharge: Volume of water passing a point per second (cumecs)

### Climate Patterns Affecting Water Cycle

**Inter-Tropical Convergence Zone (ITCZ):**
- Belt of low pressure near equator
- Trade winds converge, air rises, condenses, heavy rainfall
- Migrates seasonally: North in June-August (up to 25N), South in December-February
- Controls wet/dry seasons in tropics
- Sahel region: ITCZ position critical for rainfall (1968-1973 drought linked to ITCZ failure)

**Monsoon Systems:**
- South Asian monsoon:
  - Summer (June-Sept): SW winds bring moisture from Indian Ocean, 80% of annual rainfall
  - Winter (Nov-Feb): NE winds from land, dry season
  - India receives 1,000-2,500mm rainfall June-September
- Monsoon failure: El Nino years reduce monsoon intensity

**El Nino Southern Oscillation (ENSO):**
- El Nino: Warm water pools in eastern Pacific
  - Effects: Drought in Australia/Indonesia, floods in Peru/Ecuador
  - Frequency: Every 2-7 years
- La Nina: Cold water in eastern Pacific
  - Effects: Floods in Australia, drought in South America

### Water Insecurity - Global Statistics

**Water Stress Thresholds:**
- Water stress: <1,700 m3/person/year
- Water scarcity: <1,000 m3/person/year
- Absolute scarcity: <500 m3/person/year

**Global Water Insecurity:**
- 2.2 billion people lack safely managed drinking water
- 4.2 billion lack safely managed sanitation
- 785 million lack basic drinking water service
- By 2025: 1.8 billion will live in absolute water scarcity
- By 2050: 5.7 billion could face water scarcity for at least one month/year

**Regional Variations:**
- Sub-Saharan Africa: 40% without basic water access
- MENA region: Most water-stressed (12/17 most stressed countries)
- South Asia: 91% access but quality concerns
- Europe/North America: >99% access

**Water Withdrawal by Sector (Global):**
- Agriculture: 70%
- Industry: 19%
- Domestic: 11%

### Case Study: The Colorado River
**Key facts:**
- Length: 2,330 km
- Basin area: 637,000 km2 (7 US states, 2 Mexican states)
- Annual flow: ~18 billion m3 (historically ~22 billion)
- Population dependent: 40 million people
- Irrigation: 2.2 million hectares of farmland

**Water allocation (1922 Colorado River Compact):**
- Upper Basin states (Colorado, Wyoming, Utah, New Mexico): 9.25 billion m3/year
- Lower Basin states (California, Arizona, Nevada): 9.25 billion m3/year
- Mexico: 1.85 billion m3/year (1944 treaty)
- Total allocated: 20.35 billion m3 (more than actual flow!)

**Crisis factors:**
- Over-allocation: Compact based on unusually wet years
- Climate change: 20% flow reduction since 2000
- Population growth: Phoenix, Las Vegas, Southern California expansion
- Lake Mead: Dropped from 95% capacity (2000) to 27% (2022)

**Management responses:**
- Drought Contingency Plan (2019): Mandatory cuts triggered at Lake Mead levels
- Tier 2 cuts (2022): Arizona loses 21% allocation, Nevada 8%
- Agricultural fallowing programmes
- Desalination proposals (rejected due to cost: $2,000/acre-foot)

### Case Study: Lesotho Highlands Water Project
**Project overview:**
- Largest infrastructure project in Africa
- Transfers water from Lesotho to South Africa's Gauteng province
- Phase 1A (1998): Katse Dam (185m high, Africa's second highest)
- Phase 1B (2003): Mohale Dam
- Cost: $4 billion total

**Water transfer:**
- Annual transfer: 780 million m3 to South Africa
- Tunnel length: 82km (Katse to South Africa)
- Supplies: 35% of Gauteng's water (Johannesburg, Pretoria)

**Benefits to Lesotho:**
- Royalties: $100 million/year
- Hydroelectric power: 72MW (98% of national electricity)
- Employment during construction
- Infrastructure development (roads, bridges)

**Controversies:**
- Displacement: 20,000 people relocated
- Compensation: Inadequate for lost agricultural land
- Corruption: Multinational companies bribed officials (convictions in 2002-2004)
- Environmental: Downstream flow reduction, fisheries affected
- Dependency: South Africa reliant on foreign water source
`;

const CARBON_CYCLE_KNOWLEDGE = `
## Carbon Cycle and Energy Security - Essential Knowledge

### Global Carbon Cycle - Stores and Flows

**Carbon Stores (Gigatonnes C):**
| Store | Quantity (GtC) | Notes |
|-------|---------------|-------|
| Lithosphere (rocks) | 100,000,000 | Limestone, fossil fuels (slow cycle) |
| Deep ocean | 38,000 | Dissolved inorganic carbon |
| Fossil fuels | 4,000 | Coal 3,000; Oil 500; Gas 500 |
| Soil organic matter | 1,500-2,400 | Peat soils store 30% despite 3% land area |
| Surface ocean | 1,000 | Mixed layer |
| Atmosphere | 850 | CO2, CH4 (increasing rapidly) |
| Vegetation | 450-650 | Tropical forests store 25% |
| Marine biota | 3 | Plankton, fish |

**Carbon Flows (GtC/year):**
- Ocean-atmosphere exchange: 90 GtC each way
- Photosynthesis: 120 GtC (land), 50 GtC (ocean)
- Respiration/decomposition: 120 GtC (land), 50 GtC (ocean)
- Fossil fuel burning: 9.5 GtC/year (2019)
- Land use change: 1.5 GtC/year (deforestation)
- Net ocean uptake: 2.5 GtC/year (ocean sink)
- Net land uptake: 3.2 GtC/year (land sink)
- Net atmospheric increase: 5.1 GtC/year

### Key Carbon Cycle Processes

**Photosynthesis:**
- 6CO2 + 6H2O + light energy -> C6H12O6 + 6O2
- Removes ~120 GtC/year from atmosphere
- Tropical rainforests: Most productive (2,200g C/m2/year)
- Boreal forests: Lower productivity but large carbon store

**Respiration:**
- C6H12O6 + 6O2 -> 6CO2 + 6H2O + energy
- Returns carbon to atmosphere
- Plant respiration, animal respiration, decomposition

**Ocean Carbon Pump:**
- Solubility pump: CO2 dissolves in cold water, sinks to deep ocean
- Biological pump: Phytoplankton fix carbon, die, sink to seafloor
- Ocean absorbs 25% of anthropogenic CO2
- Ocean acidification: pH dropped from 8.2 to 8.1 since 1750 (30% more acidic)

**Geological Carbon Cycle (Slow):**
- Weathering: CO2 + H2O + CaSiO3 -> CaCO3 + SiO2 + H2O
- Carbonate formation: Marine organisms build shells (foraminifera, coral)
- Burial and lithification: Organic matter becomes fossil fuels over millions of years
- Volcanic outgassing: Returns CO2 to atmosphere (0.3 GtC/year)

### Anthropogenic Carbon Cycle Disruption

**Historical CO2 Concentrations:**
- Pre-industrial (1750): 280 ppm
- 1960 (Keeling Curve start): 316 ppm
- 2020: 412 ppm
- 2024: ~420 ppm
- Rate of increase: 2.5 ppm/year (accelerating)

**Sources of Anthropogenic Emissions (2019):**
- Fossil fuel combustion: 89%
  - Coal: 40%
  - Oil: 32%
  - Gas: 17%
- Land use change: 11% (mainly tropical deforestation)

**Country Emissions (2019):**
| Country | GtCO2 | % Global | Per capita (tonnes) |
|---------|-------|----------|---------------------|
| China | 10.2 | 27% | 7.1 |
| USA | 5.3 | 14% | 16.1 |
| EU-27 | 3.3 | 9% | 7.4 |
| India | 2.6 | 7% | 1.9 |
| Russia | 1.7 | 5% | 11.8 |
| Japan | 1.2 | 3% | 9.5 |

**Cumulative Historical Emissions (1751-2019):**
- USA: 25%
- EU-28: 22%
- China: 13%
- Russia: 6%
- India: 3%

### Energy Security

**Energy Mix (Global Primary Energy 2021):**
- Oil: 31%
- Coal: 27%
- Natural gas: 25%
- Renewables: 13% (hydro 6.4%, wind 2.8%, solar 1.7%, bioenergy 2.1%)
- Nuclear: 4%

**Energy Security Dimensions:**
1. Availability: Physical supplies exist
2. Accessibility: Geopolitical/infrastructure access
3. Affordability: Economic access
4. Acceptability: Environmental/social sustainability

**Fossil Fuel Reserves:**
- Coal: 1,074 billion tonnes (139 years at current rate)
- Oil: 244 billion tonnes (53 years)
- Natural gas: 188 trillion m3 (49 years)
- BUT: "Unburnable carbon" - 80% must stay in ground for 2C target

### Case Study: UK Energy Security
**Energy mix evolution:**
- 1970: Coal 90% of electricity
- 2012: Gas 28%, Coal 39%, Nuclear 19%
- 2019: Gas 41%, Renewables 37%, Nuclear 17%, Coal 2%
- 2023: Renewables 42%, Gas 34%, Nuclear 15%

**North Sea Oil and Gas:**
- Peak production: 1999 (4.5 million barrels/day)
- 2023 production: ~0.9 million barrels/day
- UK became net importer: Gas (2004), Oil (2005)
- Remaining reserves: ~5.2 billion barrels oil equivalent

**Renewable Energy Growth:**
- Offshore wind capacity: 14 GW (2023) - world leader
- Largest wind farms: Hornsea 1 (1.2 GW), Walney Extension (659 MW)
- Solar: 14 GW capacity
- Target: Net zero electricity by 2035

**Energy Security Challenges:**
- Import dependency: 35% of gas imported (Norway, LNG)
- Winter gas crisis 2021-22: Prices increased 400%
- Nuclear decommissioning: Ageing fleet, Hinkley Point C delayed (expected 2027)
- Grid constraints: Renewable intermittency requires storage

### Fracking Debate (UK Context)
**What is fracking?**
- Hydraulic fracturing: Inject high-pressure water/sand/chemicals to fracture shale rock
- Releases trapped natural gas
- Horizontal drilling extends reach

**Potential UK reserves:**
- Bowland Shale: Estimated 1,300 trillion cubic feet gas
- BUT: Technically recoverable only 10-15%

**Arguments for:**
- Reduce import dependency
- Lower carbon than coal
- Job creation (estimated 64,000 jobs)
- Bridge fuel to renewables

**Arguments against:**
- Seismic activity: Preston New Road site (2018-19) caused 2.9ML earthquake
- Water contamination risk
- Industrialisation of countryside
- Fugitive methane emissions undermine climate benefits
- NIMBY opposition in target areas

**Policy timeline:**
- 2011: First UK licence granted
- 2015: Fracking approved at Preston New Road (Lancashire)
- 2018-19: Operations suspended after earthquakes
- November 2019: UK moratorium announced
- September 2022: Moratorium briefly lifted (Truss government)
- October 2022: Moratorium reinstated (Sunak government)
`;

const GLOBALISATION_KNOWLEDGE = `
## Globalisation - Essential Knowledge

### Defining Globalisation
**Key characteristics:**
- Increasing interconnectedness of economies, societies, cultures
- Time-space compression: Faster communication and transport
- Flows of: Trade, capital, people, ideas, culture
- Dimensions: Economic, political, social, cultural

**Drivers of globalisation:**
- Technological: Internet, containerisation, jet aircraft, mobile phones
- Political: Trade liberalisation, WTO rules, free trade agreements
- Economic: Deregulation, privatisation, FDI flows
- Social: Migration, tourism, diaspora networks

### Theoretical Frameworks

**Rostow's Model of Economic Development (1960):**
1. Traditional society: Subsistence agriculture, limited technology
2. Preconditions for take-off: External investment, infrastructure building
3. Take-off: Industrialisation, manufacturing growth (15-20 years)
4. Drive to maturity: Diversification, innovation
5. High mass consumption: Service economy, consumer society

**Criticisms of Rostow:**
- Linear assumption: Development not always sequential
- Western bias: Based on European/American experience
- Ignores exploitation: Colonial extraction of resources
- No role for aid dependency
- Ignores environmental limits

**Wallerstein's World Systems Theory (1974):**
- Core: Wealthy industrialised nations (USA, EU, Japan)
  - Characteristics: High wages, advanced technology, strong states
  - Role: Control finance, set trade rules, extract surplus
- Semi-periphery: Industrialising nations (China, Brazil, India)
  - Characteristics: Mix of high and low-skill production
  - Role: Intermediate, can move up or down
- Periphery: Resource-exporting nations (much of Africa, Central America)
  - Characteristics: Low wages, primary production
  - Role: Supply raw materials and cheap labour

**Critiques of World Systems Theory:**
- Static categories: Countries can change position
- Economic determinism: Ignores cultural/political factors
- Over-simplified: Reality more complex than three zones

**Dependency Theory (Frank, 1966):**
- Development of core causes underdevelopment of periphery
- Colonial legacy of extraction continues through trade
- Terms of trade favour manufactured goods over commodities
- Solution: Delinking from global capitalist system

### Global Shift

**Definition:** Relocation of manufacturing from developed to developing countries

**Evidence:**
- 1980: Developed countries = 75% of manufacturing output
- 2020: Developed countries = 45% of manufacturing output
- China: World's largest manufacturer (28% of global output, 2019)

**Causes:**
- Labour costs: Chinese manufacturing wage $6.50/hr vs USA $40/hr (2019)
- Trade liberalisation: WTO membership, reduced tariffs
- Container shipping: Cost dropped 90% since 1960s
- Special Economic Zones: Tax breaks, reduced regulation
- Improved infrastructure: Ports, roads, telecommunications

**Consequences for Source Countries (Deindustrialisation):**
- Job losses: UK lost 3 million manufacturing jobs (1980-2010)
- Regional decline: Rust Belt (USA), Northern England
- Social impacts: Unemployment, health decline, family breakdown
- Political impacts: Rise of populism, Brexit vote correlations

### Transnational Corporations (TNCs)

**Scale:**
- Top 100 TNCs control 50% of world trade
- Apple revenue: $394 billion (2022) - larger than many countries' GDP
- Walmart employees: 2.3 million (world's largest private employer)

**Case Study: Nike**
- Headquarters: Beaverton, Oregon, USA
- Employees: 79,100 direct (2022)
- Contract factory workers: 1+ million in 41 countries
- Revenue: $51 billion (2023)

**Production Network:**
- Design/marketing: USA (high-value activities)
- Manufacturing: Vietnam (50%), Indonesia (24%), China (21%)
  - Average factory wage: Vietnam $200/month, Indonesia $180/month
- Outsourcing: Nike owns no factories, contracts production

**Benefits to Host Countries:**
- Employment creation
- Technology transfer
- Tax revenue
- Infrastructure development
- Export earnings

**Criticisms/Costs:**
- Low wages: Insufficient for living wage in many locations
- Working conditions: Long hours, limited unions
- Environmental standards: Lower than home country
- Profit repatriation: Limited local reinvestment
- Tax avoidance: Transfer pricing through tax havens

### Winners and Losers of Globalisation

**Winners:**
- TNCs: Access to global markets and cheap labour
- Emerging middle class: 1 billion entered middle class since 2000
- Consumers: Lower prices for goods
- Skilled workers globally: Premium on education
- China: 800 million lifted from poverty (1980-2015)

**Losers:**
- Low-skilled workers in developed countries: Wage stagnation, job losses
- Subsistence farmers: Competition from agribusiness
- Traditional cultures: Homogenisation pressures
- Environment: Increased carbon emissions from trade
- Peripheral nations: Still stuck in commodity trap

**Global Income Statistics:**
- Richest 1%: Own 45% of global wealth
- Richest 10%: Own 85% of global wealth
- Bottom 50%: Own 1% of global wealth
- GINI coefficient: Global inequality slight decline, within-country increase
`;

const SUPERPOWERS_KNOWLEDGE = `
## Superpowers - Essential Knowledge

### Defining Superpower Status

**Characteristics of Superpowers:**
- Military dominance: Global projection capability
- Economic strength: Large GDP, control of finance
- Political influence: Permanent UNSC seat, alliance leadership
- Cultural power: Soft power, global language, media dominance
- Geographical advantages: Size, resources, location

**Types of Power:**
- Hard power: Military force, economic coercion
- Soft power: Cultural attraction, diplomacy, values (Nye, 1990)
- Smart power: Combination of hard and soft power

### Geopolitical Theories

**Mackinder's Heartland Theory (1904):**
- "Who rules East Europe commands the Heartland; who rules the Heartland commands the World Island; who commands the World Island commands the World"
- Heartland: Central Asia/Russia (pivot area)
- World Island: Europe, Asia, Africa combined
- Implications: Land power (Russia/Germany) vs sea power (Britain/USA)

**Criticisms:** Ignored air power, economic factors, ideological appeal

**Mahan's Sea Power Theory (1890):**
- Naval supremacy key to global dominance
- Control of sea lanes, strategic chokepoints
- British Empire as exemplar
- Influenced US naval expansion

**Brzezinski's Grand Chessboard (1997):**
- Eurasia as key geopolitical prize
- Prevent any single power dominating Eurasia
- US must maintain presence in Europe, Middle East, East Asia
- "Three Grand Imperatives": Prevent collusion, maintain dependence, prevent coalitions

### Current Superpower Landscape

**USA - The Sole Superpower (Unipolar Moment):**

Military:
- Defence budget: $877 billion (2023) - 40% of global total
- Military bases: 750+ in 80 countries
- Nuclear warheads: 5,550 (deployed: 1,744)
- Aircraft carriers: 11 (rest of world combined: 11)
- Force projection: Can deploy anywhere within 48 hours

Economic:
- GDP: $25.5 trillion (2023) - 25% of global GDP
- Dollar hegemony: 60% of foreign exchange reserves in dollars
- Wall Street: Centre of global finance
- Tech giants: Apple, Google, Amazon, Microsoft (5 of top 10 global companies)

Soft Power:
- English language: 1.5 billion speakers globally
- Hollywood: 70% of global box office
- Universities: 8 of top 10 global universities (QS Rankings)
- Cultural exports: Music, fashion, social media

Political:
- UN Security Council permanent seat (veto power)
- NATO leadership: 30 member alliance
- Global alliance network: Japan, South Korea, Australia, Israel

**China - Rising Power:**

Economic Rise:
- GDP: $18 trillion (2023) - 18% of global GDP
- GDP growth: Average 10%/year (1980-2010), now 5-6%
- 1980: 2% of global GDP; 2023: 18%
- World's largest exporter: $3.6 trillion exports (2022)
- Manufacturing: 28% of global output

Military:
- Defence budget: $292 billion (2023) - second largest
- Nuclear warheads: 350 (expanding)
- Largest navy by ship numbers (355 vessels)
- Territorial disputes: South China Sea, Taiwan

Belt and Road Initiative (BRI):
- Launched: 2013
- Investment: $1 trillion across 140+ countries
- Infrastructure: Ports, railways, roads, power plants
- Debt diplomacy concerns: Sri Lanka Hambantota port (99-year lease)

Soft Power Limitations:
- Language barrier: Mandarin difficult for foreigners
- Political system: Authoritarian, limited appeal
- Human rights: Xinjiang, Hong Kong, Tibet controversies
- Media restrictions: Great Firewall

**Emerging Powers:**

India:
- GDP: $3.7 trillion (2023) - 5th largest
- Population: 1.4 billion (world's largest)
- Nuclear power (160 warheads)
- IT services hub: Bangalore, Hyderabad
- Challenges: Poverty (21%), infrastructure gaps

Russia:
- Nuclear arsenal: 6,257 warheads (world's largest)
- UN Security Council veto
- Energy: Major oil/gas exporter
- Declining influence: GDP smaller than Italy ($2.2 trillion)
- Ukraine invasion (2022): Western sanctions, isolation

Brazil:
- GDP: $2.1 trillion (Latin America's largest)
- Resources: Amazon rainforest, iron ore, soybeans
- Regional influence: MERCOSUR
- Challenges: Political instability, deforestation criticism

### Geopolitical Tensions

**South China Sea:**
- China claims 90% (Nine-Dash Line)
- Artificial island building since 2013
- Strategic importance: $3.4 trillion trade/year passes through
- UNCLOS ruling (2016): Rejected Chinese claims (China ignored)

**Taiwan:**
- Population: 24 million
- GDP: $790 billion (semiconductor manufacturing)
- TSMC produces 90% of advanced chips
- US strategic ambiguity: Taiwan Relations Act (1979)
- Chinese position: Reunification inevitable, force if necessary

**Arctic Competition:**
- Melting ice opens Northern Sea Route
- Resources: 13% of undiscovered oil, 30% of gas
- Russia: Largest Arctic coastline, military build-up
- China: Self-declared "near-Arctic state"
`;

const REGENERATING_PLACES_KNOWLEDGE = `
## Regenerating Places - Essential Knowledge

### Understanding Place Decline

**Causes of Urban Decline:**
- Deindustrialisation: Loss of manufacturing base
- Suburbanisation: Middle-class flight to suburbs
- Counter-urbanisation: Movement to rural areas
- Global shift: Offshoring of production
- Technological change: Automation, mechanisation

**Indicators of Decline:**
- Population loss
- Rising unemployment
- Falling property values
- Derelict buildings and land
- Social problems: Crime, drug use, family breakdown
- Poor health outcomes
- Low educational attainment

### Regeneration Strategies

**Property-Led Regeneration:**
- Flagship projects to attract investment
- Deregulation and tax incentives
- Public-private partnerships
- Trickle-down economics assumption

**Community-Led Regeneration:**
- Bottom-up approaches
- Local involvement in decision-making
- Social enterprise and cooperatives
- Capacity building

**Policy Approaches:**
- Enterprise Zones: Reduced business rates, planning simplification
- Urban Development Corporations: Bypass local authorities
- City Deals: Devolved funding agreements
- Levelling Up Fund: Post-Brexit regional policy

### Case Study: London Docklands (1981-1998)

**Before Regeneration:**
- Peak employment (1967): 28,000 dock workers
- 1981: Only 2,000 dock workers remained
- Containerisation made traditional docks obsolete
- Population decline: -10% (1971-1981)
- Unemployment: 24% (1981)
- Derelict land: 21 km2

**Regeneration Strategy:**
- London Docklands Development Corporation (LDDC) established 1981
- Budget: $3.9 billion public money
- Attracted $7.7 billion private investment
- Flagship: Canary Wharf (financial centre)

**Infrastructure Investment:**
- Docklands Light Railway: Opened 1987
- Jubilee Line extension: Opened 1999
- London City Airport: Opened 1987
- Limehouse Link tunnel: $250 million

**Outcomes:**
- Employment: From 27,000 (1981) to 85,000 (1998)
- Population: From 39,000 (1981) to 83,000 (1998)
- Housing: 24,000 new homes built
- Commercial space: 2.3 million m2

**Criticisms:**
- Social polarisation: Luxury flats but local housing shortage
- Displacement: Original residents priced out
- Job mismatch: Financial jobs not accessible to former dockers
- Top-down: Limited community consultation
- Infrastructure strain: Existing residents faced disruption

### Case Study: Bristol Temple Quarter

**Context:**
- Location: East Bristol, around Temple Meads station
- Area: 70 hectares
- Problem: Underused industrial land, railway infrastructure, fragmented ownership
- Designation: Enterprise Zone (2012)

**Investment:**
- Total planned: $1.6 billion
- Public sector: $500 million
- Bristol Arena: Proposed (£92 million) - later cancelled
- Engine Shed: $3 million tech incubator
- Temple Meads: Station improvement (Phase 1 complete)

**Outcomes:**
- Employment: Target 17,000 new jobs
- Housing: 2,500 new homes planned
- University: Temple Quarter Enterprise Campus (opening 2026)
- Creative industries: Growing cluster

**Approach:**
- Mixed-use development
- Strong public transport links
- Sustainability focus: Low carbon targets
- University partnership: Knowledge economy focus

### Case Study: Rural Regeneration - Cornwall

**Context:**
- Population: 565,000
- GDP per capita: 71% of UK average (2019)
- Challenges: Peripherality, seasonal economy, ageing population
- Post-industrial: Decline of mining, fishing, agriculture

**EU Objective One Funding (2000-2006):**
- Allocation: $590 million
- Focus: Infrastructure, skills, business support
- Match funding: $850 million total investment

**Key Projects:**
- Combined Universities Cornwall: FE/HE partnership
- Superfast Cornwall: Broadband rollout (95% coverage)
- Newquay Aerohub: Spaceport development
- Eden Project: Attraction generating $1.8 billion local economic impact

**Outcomes:**
- Employment: +23,000 jobs (2000-2010)
- Claimant count: Reduced from 4.4% to 2.7%
- Business growth: 5,000 new businesses supported
- GDP: Rose to 71% UK average (from 66%)

**Post-Brexit Concerns:**
- Loss of EU structural funds
- Shared Prosperity Fund: Lower allocation
- Agricultural transition: Uncertainty for farmers

### Measuring Regeneration Success

**Economic Indicators:**
- GDP/GVA growth
- Employment rates
- Business start-ups
- Inward investment
- Property values

**Social Indicators:**
- Population change
- Health outcomes
- Educational attainment
- Crime rates
- Deprivation indices (IMD)

**Environmental Indicators:**
- Land remediation
- Green space creation
- Air quality
- Carbon emissions
- Biodiversity

**Challenges in Measurement:**
- Attribution: Would change have happened anyway?
- Displacement: Improvement here, decline elsewhere?
- Time lag: Benefits take years to materialise
- Gentrification: Improved statistics but displacement
`;

const DIVERSE_PLACES_KNOWLEDGE = `
## Diverse Places - Essential Knowledge

### Understanding Diversity

**Dimensions of Diversity:**
- Ethnicity: Cultural background, heritage
- Age: Population structure, dependency ratios
- Religion: Faith communities, places of worship
- Socioeconomic status: Income, occupation, class
- Household composition: Families, singles, students
- Sexual orientation: LGBTQ+ communities
- Disability: Physical, mental, neurodivergent

**Population Change Drivers:**
- Natural change: Births minus deaths
- Internal migration: Within country movements
- International migration: Immigration and emigration
- Ageing: Life expectancy increases

### Migration Patterns

**UK Migration Statistics:**
- Net migration (2022): +606,000 (record high)
- Top source countries: India, Nigeria, China, Ukraine, Pakistan
- EU migration: Declined post-Brexit
- Non-EU: Increased (students, work visas, asylum)

**Push Factors:**
- War and conflict: Syria, Ukraine, Afghanistan
- Economic: Unemployment, low wages
- Environmental: Climate change, disasters
- Political: Persecution, lack of freedom

**Pull Factors:**
- Employment opportunities
- Higher wages
- Education
- Family reunification
- Healthcare access
- Political stability

**Lee's Migration Model (1966):**
- Origin factors (push)
- Destination factors (pull)
- Intervening obstacles (distance, cost, borders)
- Personal factors (age, education, family ties)

### Segregation and Integration

**Patterns of Settlement:**
- Clustering: Ethnic enclaves, chain migration
- Dispersal: Government policy, suburbanisation
- Segregation indices: Dissimilarity index (0-100)

**UK Segregation Evidence:**
- Bradford: 20% Muslim population, concentrated in specific wards
- Leicester: First city with minority white population (2021 census)
- Birmingham: 42% non-white (2021)

**Causes of Segregation:**
- Economic: Affordability constraints
- Social: Desire for community, shared services
- Institutional: Housing allocation, discrimination
- Cultural: Language, religion, food access

**Casey Review (2016) Findings:**
- Some communities "highly segregated"
- Women in some communities "isolated from opportunities"
- English language skills vary significantly
- Called for oath of integration

### Identity and Belonging

**Place Identity Factors:**
- Historical associations
- Built environment: Architecture, landmarks
- Natural environment: Landscape, climate
- Social characteristics: Demographics, community
- Economic function: Industry, employment

**Massey's Sense of Place (1991):**
- Places defined by social relations
- Multiple identities coexist
- "Progressive sense of place": Open, inclusive
- Rejects bounded, fixed place identity

**Attachment to Place:**
- Rootedness: Long-term residence, community ties
- Topophilia: Emotional attachment (Tuan, 1974)
- Insiderness: Feeling of belonging
- Place alienation: Disconnection, marginalisation

### Case Study: Newham, London

**Demographics:**
- Population: 353,000 (2021)
- Most diverse local authority in England
- White British: 17% (lowest in England)
- Born outside UK: 50%
- Over 100 languages spoken

**Ethnic Composition (2021):**
- Asian/Asian British: 42%
- Black/Black British: 18%
- White: 26%
- Mixed: 5%
- Other: 9%

**Migration History:**
- 1960s-70s: Commonwealth migration (Caribbean, South Asia)
- 1990s: Refugees (Somalia, Bangladesh)
- 2000s: Eastern European (post-EU expansion)
- 2010s: Global migration (Nigeria, India, Pakistan)

**Challenges:**
- Deprivation: 25% in top 10% most deprived areas
- Housing: Average price 12x average income
- Overcrowding: 25% of households (highest in England)
- Child poverty: 40%
- Health inequalities: Life expectancy 3 years below national average

**Opportunities:**
- Olympic legacy: Queen Elizabeth Park, Westfield Stratford
- Employment: Stratford International, tech growth
- Young population: 34% under 25
- Cultural vibrancy: Diversity of food, music, festivals

### Case Study: Rural Diversity - The Cotswolds

**Demographics:**
- Population: ~150,000 across Cotswolds AONB
- Ageing population: 25% over 65
- White British: 95%+
- Born outside UK: 5%

**Characteristics:**
- Wealthy: Property prices 40% above national average
- Second homes: 5-10% in popular villages
- Tourism: 38 million visitor days/year
- Agriculture: Declining employment, farm consolidation

**Social Changes:**
- Counter-urbanisation: Wealthy incomers
- Village gentrification: Loss of services, pubs, shops
- Housing affordability: Young people priced out
- Ageing in place: Elderly isolated without transport

**Planning Tensions:**
- AONB restrictions: Limit new housing
- NIMBYism: Opposition to development
- Local needs housing: Attempts to retain young people
- Tourism vs residents: Congestion, parking, second homes
`;

const SYNOPTIC_THEMES_KNOWLEDGE = `
## Synoptic Themes - Essential Knowledge

### Paper 3: Synoptic Themes

**Players in Geographical Issues:**
- Governments: National, regional, local
- International organisations: UN, WTO, IMF, World Bank
- NGOs: Greenpeace, Oxfam, WWF
- TNCs: Private sector interests
- Local communities: Affected populations
- Pressure groups: Single-issue campaigns
- Media: Shaping narratives

**Attitudes:**
- Technocentric: Technology can solve environmental problems
- Ecocentric: Nature has intrinsic value, limits to growth
- Anthropocentric: Human needs primary consideration
- Biocentric: All life has value

**Actions:**
- Mitigation: Reducing cause (e.g., cutting emissions)
- Adaptation: Adjusting to impacts (e.g., flood defences)
- Management: Controlling processes (e.g., coastal defences)
- Conservation: Protecting resources (e.g., national parks)
- Restoration: Reversing damage (e.g., reforestation)

**Futures and Uncertainties:**
- Business as Usual: Current trends continue
- Sustainable Development: Balanced growth
- Deep Ecology: Radical environmental protection
- Techno-optimism: Innovation solves problems
- Degrowth: Planned economic contraction

### Key Geographical Theories

**David Harvey - Social Justice and the City (1973):**
- Marxist geography: Capitalism creates spatial inequalities
- Urban processes serve capital accumulation
- Gentrification as class conflict
- Right to the City: Who benefits from urban change?
- Uneven development is systemic, not accidental

**Doreen Massey - Space, Place and Gender (1994):**
- Places not fixed but fluid, defined by social relations
- "Power geometry": Unequal mobility and connectivity
- Time-space compression benefits some, constrains others
- Progressive sense of place: Outward-looking, inclusive
- Gender shapes experience of place

**Rostow - Stages of Economic Growth (1960):**
- Modernisation theory
- Five stages: Traditional to mass consumption
- Linear development path
- Western model as universal
- Criticised for ignoring colonialism, exploitation

**Wallerstein - World Systems Theory (1974):**
- Core, semi-periphery, periphery structure
- Capitalism as world system since 1500s
- Unequal exchange between zones
- Structural inequality, not just development lag
- Semi-periphery as buffer zone

**Amartya Sen - Development as Freedom (1999):**
- Development = expanding freedoms
- Capabilities approach: What people can do/be
- Five instrumental freedoms: Political, economic, social, transparency, security
- Poverty as capability deprivation
- Influenced UN Human Development Index

### Synoptic Connections - Example Themes

**Climate Change Connections:**
- Physical: Carbon cycle disruption, weather extremes
- Human: Energy security, food security, migration
- Players: IPCC, UNFCCC, TNCs, governments, protestors
- Scales: Global causes, local impacts

**Inequality Connections:**
- Globalisation: Winners and losers
- Superpowers: Core-periphery exploitation
- Places: Regeneration benefits vary
- Health: Spatial variations in outcomes

**Resource Management Connections:**
- Water cycle: Physical processes, human demand
- Carbon/energy: Climate change, development
- Superpowers: Geopolitical competition for resources
- Sustainability: Balancing use and conservation

### Evaluating Geographical Futures

**Scenario Planning Framework:**
1. Identify key drivers of change
2. Explore interactions between drivers
3. Develop contrasting scenarios
4. Assess implications for places/people
5. Consider adaptive responses

**Assessment Criteria:**
- Who benefits, who loses?
- At what scales do impacts occur?
- What are the trade-offs?
- How certain are outcomes?
- What agency do different players have?
`;

// ============================================================================
// WORKED EXAMPLES WITH MODEL ANSWERS
// ============================================================================

const WORKED_EXAMPLES = `
## Worked Examples with Model Answers

### Example 1: 4-Mark Question (Easy)

**Question:**
"Explain two ways that physical factors affect the water cycle in a drainage basin." [4 marks]

**Model Answer:**
Physical factors significantly influence water cycle dynamics in drainage basins.

**Geology** affects infiltration rates and groundwater storage. Permeable rocks like chalk and sandstone allow rapid infiltration, reducing surface runoff and creating large groundwater stores. For example, the chalk aquifers of southeast England store significant water volumes. Conversely, impermeable rocks like granite produce rapid surface runoff as water cannot infiltrate.

**Relief/slope** influences the speed and direction of water movement. Steep slopes in upland areas like the Lake District increase overland flow velocity, reducing infiltration time and increasing flood risk. Gentle slopes allow greater infiltration and slower throughflow, moderating the flood hydrograph. This explains why upland catchments typically have shorter lag times.

**Mark Scheme:**
- 1 mark for identifying physical factor
- 1 mark for developing how it affects the water cycle
- Maximum 2 marks per factor
- Award marks for: geology, relief/slope, vegetation, soil type, precipitation characteristics

---

### Example 2: 8-Mark Data Response Question (Medium)

**Question:**
"Using Figure 3 [showing global CO2 emissions by country 2000-2020], analyse the changing patterns of greenhouse gas emissions." [8 marks]

**Model Answer:**

**Level 3 Response (7-8 marks):**

The data reveals significant spatial and temporal changes in global CO2 emissions, reflecting shifting patterns of development and energy consumption.

The most striking trend is **China's dramatic rise**, increasing from approximately 3 GtCO2 in 2000 to over 10 GtCO2 by 2020, representing a threefold increase. This correlates with China's rapid industrialisation and urbanisation, with coal-fired power generation expanding to fuel manufacturing growth. By 2006, China overtook the USA as the world's largest emitter, a significant geopolitical shift.

In contrast, **developed countries show declining or stable emissions**. The USA decreased from 6 GtCO2 to approximately 5 GtCO2 despite economic growth, reflecting deindustrialisation and the shift from coal to gas ("shale gas revolution"). EU emissions similarly declined, falling approximately 25% as manufacturing relocated and renewable energy expanded.

**India shows steady growth** from 1 to 2.6 GtCO2, reflecting its emerging economy status and growing middle class. However, India's per capita emissions remain low (1.9 tonnes vs USA's 16 tonnes), highlighting the distinction between total and per capita measures.

The data supports Wallerstein's World Systems Theory - core nations have effectively "exported" emissions to the semi-periphery through global shift, whilst maintaining consumption of manufactured goods. This raises questions about responsibility and the need for differentiated climate targets.

**Mark Scheme:**
Level 3 (7-8): Detailed analysis using data; clear understanding of patterns; links to wider knowledge; uses appropriate terminology
Level 2 (4-6): Some analysis of data; partial explanation; some use of own knowledge
Level 1 (1-3): Limited data use; descriptive rather than analytical

---

### Example 3: 12-Mark Question (Medium-Hard)

**Question:**
"Assess the relative importance of economic and social factors in explaining variations in tectonic hazard impacts." [12 marks]

**Model Answer:**

**Level 3 Response (10-12 marks):**

Tectonic hazard impacts vary dramatically between locations, with economic and social factors often more significant than the physical magnitude of events. This essay argues that while both factors are important, economic development is the primary determinant of disaster outcomes.

**Economic factors** fundamentally shape vulnerability and resilience. The contrast between Japan (2011, M9.0) and Nepal (2015, M7.8) illustrates this powerfully. Despite Japan's earthquake being 15 times more powerful, both events caused similar death tolls (approximately 20,000 and 9,000 respectively). However, when adjusted for population exposure, Nepal's death rate was significantly higher.

Japan's wealth enabled earthquake-resistant infrastructure - all buildings must meet strict codes since 1981, and the shinkansen (bullet train) automatically stopped when detected P-waves. The $877 billion economy funded rapid emergency response, with 100,000 Self-Defense Forces deployed within 24 hours. Reconstruction progressed efficiently, with 98% of debris cleared within 3 years.

Conversely, Nepal's status as one of Asia's poorest nations ($730 GDP per capita) meant 90% of buildings were unreinforced masonry, building codes existed but were rarely enforced, and the mountainous terrain had limited infrastructure for rescue operations. The $10 billion economic loss represented 50% of GDP, severely constraining recovery capacity.

**Social factors** also significantly influence outcomes. Education and preparedness in Japan mean citizens understand "drop, cover, hold" procedures from regular school drills. Community resilience networks activate during emergencies. In Nepal, rural communities far from Kathmandu received limited government assistance, relying on informal networks and NGO support.

Governance quality interconnects with economic development. Japan's democratic institutions enabled rapid coordinated response, while Nepal's post-conflict political instability hampered reconstruction - the National Reconstruction Authority faced criticism for bureaucratic delays, with many earthquake survivors still in temporary shelters five years later.

**However**, the physical event still matters - Japan's tsunami death toll resulted from the 40m wave heights that overwhelmed even modern sea walls. No amount of development prevents all impacts from extreme events. Additionally, social factors like population density and urbanisation concentrate exposure - Kathmandu Valley's population of 2.5 million in a seismically active basin created inherent vulnerability regardless of development.

**In conclusion**, economic development is the most significant factor, as it enables implementation of mitigation measures, funds preparedness, and provides recovery resources. However, social factors including governance quality, education, and community resilience mediate how effectively economic resources translate into reduced impacts. The most resilient societies combine economic capacity with social cohesion and institutional effectiveness.

**Mark Scheme:**
Level 3 (9-12): Thorough knowledge demonstrated; balanced assessment of both factors; clear evaluation with substantiated judgement; detailed case study evidence; accurate terminology
Level 2 (5-8): Some knowledge of factors; partial assessment; limited evaluation; some evidence
Level 1 (1-4): Basic knowledge; descriptive; little or no assessment

---

### Example 4: 20-Mark Essay Question (Hard)

**Question:**
"Evaluate the view that globalisation has created more losers than winners." [20 marks]

**Model Answer:**

**Level 4 Response (17-20 marks):**

Globalisation - the increasing interconnectedness of economies, societies and cultures through flows of trade, capital, people and ideas - has profoundly reshaped the world since 1945 and accelerated dramatically since 1990. This essay argues that while globalisation has generated substantial aggregate gains, the distribution of benefits has been highly uneven, creating significant "losers" who undermine the case for globalisation as universally beneficial.

**Economic winners are substantial and measurable**. At the global scale, world GDP has increased from $50 trillion (1990) to $100 trillion (2022), with trade volumes growing from 39% to 58% of global GDP. Most dramatically, China's integration into the global economy has lifted approximately 800 million people from poverty since 1980 - the largest poverty reduction in human history. Global extreme poverty fell from 36% (1990) to under 10% (2015).

Transnational corporations have clearly benefited, with the top 100 TNCs now controlling 50% of world trade. Consumers in developed countries benefit from lower prices - Nike shoes manufactured in Vietnam (average wage $200/month) sell at prices unachievable with developed-world wages. The global middle class has expanded by over one billion people, creating new markets and opportunities.

**However, the losers are equally significant**. In developed countries, deindustrialisation has devastated former manufacturing communities. The United States lost 5 million manufacturing jobs (2000-2010), concentrated in the "Rust Belt" states. UK manufacturing employment fell from 7 million (1980) to under 3 million (2010). Communities like Detroit, Middlesbrough, and the Welsh valleys experienced cascading social decline - unemployment, depopulation, health deterioration, and family breakdown.

This regional inequality fuels political instability - analysis suggests Brexit voting patterns correlated strongly with deindustrialised areas, while Trump's 2016 victory relied on Rust Belt states. David Harvey's Marxist geography helps explain this: capitalism's spatial restructuring systematically creates sacrifice zones as production relocates to lower-cost locations.

**In developing countries, outcomes are mixed**. While aggregate statistics suggest improvement, Wallerstein's World Systems Theory identifies persistent structural inequality. Many peripheral nations remain trapped as commodity exporters - Sub-Saharan Africa's share of global trade has actually declined since 1980. The "resource curse" means natural resource wealth often benefits elites while populations remain impoverished.

Working conditions in global supply chains raise ethical concerns. Nike's contract factories in Vietnam and Indonesia, while providing employment, pay wages insufficient for genuine living standards. The Rana Plaza disaster (2013, 1,134 deaths) exposed the human cost of fast fashion supply chains. TNCs capture value while externalising social and environmental costs.

**The environmental dimension creates future losers**. Globalised trade generates 8% of global CO2 emissions from shipping alone. Time-space compression has enabled consumption patterns dependent on global supply chains, accelerating climate change impacts that will disproportionately affect the Global South - countries least responsible for emissions face the greatest vulnerability.

**Evaluating the distribution requires nuance**. Branko Milanovic's "elephant graph" shows the global middle class (emerging market populations) and the global wealthy gained substantially from globalisation (1988-2008), while lower-middle classes in developed countries stagnated. This U-shaped pattern identifies specific losers: the former industrial working class of the Global North.

**In conclusion**, globalisation has generated substantial aggregate gains, and claims of "more losers than winners" depends on measurement approach. By population, the billion-plus lifted from poverty in China and elsewhere may outnumber developed-world losers. However, if we consider the depth of loss - communities devastated, lives disrupted, futures foreclosed - the picture is less clear. The more significant issue may not be winners versus losers but the governance failures that enabled gains to be captured by elites while losses concentrated among the vulnerable. A more equitable globalisation would require redistribution mechanisms, labour standards, and environmental protections that the current framework lacks. The backlash against globalisation reflects not rejection of interconnection but demand for its benefits to be more fairly shared.

**Mark Scheme:**
Level 4 (16-20): Comprehensive knowledge; detailed case study evidence from multiple contexts; sophisticated analysis using theoretical frameworks; thorough evaluation with substantiated conclusion; excellent use of terminology; well-structured argument
Level 3 (11-15): Good knowledge and understanding; relevant case studies; clear analysis; some evaluation; appropriate terminology
Level 2 (6-10): Some knowledge; partial analysis; limited evaluation; variable use of terminology
Level 1 (1-5): Limited knowledge; descriptive; little or no evaluation
`;

// ============================================================================
// COMPREHENSIVE CASE STUDY DATA
// ============================================================================

const CASE_STUDY_DATA = `
## Comprehensive Case Study Data Bank

### Tectonic Events Comparison Table
| Event | Date | Magnitude | Deaths | Economic Loss | Key Statistics |
|-------|------|-----------|--------|---------------|----------------|
| Japan Tohoku | 11/03/2011 | 9.0 | 19,759 | $360 billion | 40.5m tsunami, 470,000 displaced |
| Nepal Gorkha | 25/04/2015 | 7.8 | 8,891 | $10 billion | 50% of GDP, 604,930 buildings destroyed |
| Haiti | 12/01/2010 | 7.0 | 316,000 | $8 billion | 1.5 million homeless, 300,000 injured |
| Chile | 27/02/2010 | 8.8 | 525 | $30 billion | Building codes prevented deaths |
| Christchurch | 22/02/2011 | 6.3 | 185 | $15 billion | Liquefaction destroyed CBD |
| Indonesia Tsunami | 26/12/2004 | 9.1 | 227,898 | $15 billion | 14 countries affected |
| Eyjafjallajokull | Apr 2010 | VEI 4 | 0 | $5 billion | 100,000 flights cancelled |
| Mount Pinatubo | Jun 1991 | VEI 6 | 847 | $700 million | Global cooling 0.5C |

### Globalisation Statistics
**Trade:**
- World exports: $19 trillion (2021)
- World trade as % GDP: 58% (2021), up from 27% (1970)
- Container shipping: 800 million TEU/year

**TNCs:**
- Apple revenue: $394 billion (2022)
- Walmart employees: 2.3 million
- Top 100 TNCs: 50% of world trade

**Migration:**
- International migrants: 281 million (3.6% of world population)
- Remittances: $650 billion/year to developing countries
- Refugees: 26.6 million (UNHCR 2020)

### Superpower Data
| Indicator | USA | China | India | Russia |
|-----------|-----|-------|-------|--------|
| GDP (2023, $tn) | 25.5 | 18.0 | 3.7 | 2.2 |
| Military spending ($bn) | 877 | 292 | 81 | 86 |
| Nuclear warheads | 5,550 | 350 | 160 | 6,257 |
| Global trade share | 10% | 15% | 2% | 2% |
| UN Veto | Yes | Yes | No | Yes |

### UK Regeneration Outcomes
**London Docklands (1981-1998):**
- Public investment: $3.9 billion
- Private investment: $7.7 billion
- Jobs: 27,000 -> 85,000
- Population: 39,000 -> 83,000
- Housing: 24,000 new units

**Manchester:**
- Post-IRA bombing (1996): $1.2 billion reconstruction
- Salford Quays: 10,000 jobs created
- MediaCity: BBC relocation, 3,000 jobs

**Liverpool ONE:**
- Investment: $1.5 billion
- Jobs created: 5,000
- Retail footfall: +20%

### Water Statistics
**Global:**
- People lacking clean water: 2.2 billion
- Water used in agriculture: 70%
- Water stress threshold: <1,700 m3/person/year

**Colorado River:**
- Length: 2,330 km
- Population served: 40 million
- Lake Mead (2022): 27% capacity

**UK:**
- Average water use: 150 litres/person/day
- Leakage: 3 billion litres/day
- South East: Water stressed region
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelGeographySystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  return `You are an expert Edexcel A-Level Geography examiner creating exam-style questions.

${EDEXCEL_ALEVEL_GEOG_COGNITIVE_CHALLENGE}

${EDEXCEL_ALEVEL_GEOG_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_GEOG_QUESTION_TEMPLATES}

${EDEXCEL_ALEVEL_GEOG_MARK_SCHEME_CONVENTIONS}

## Topic-Specific Knowledge Bank
${topicKnowledge}

## Worked Examples for Reference
${WORKED_EXAMPLES}

## Case Study Data
${CASE_STUDY_DATA}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Geography specification.

**Keep Physical and Human Geography distinct:**
- Physical Geography topics: Test physical processes, landforms, climate, ecosystems - NOT human impacts as the main focus
- Human Geography topics: Test human processes, urbanisation, globalisation - NOT physical geography as the main focus
- Only blend content when the topic explicitly requires it (e.g., coastal management includes both)

**DO NOT include:**
- University-level geographic theory beyond A-Level specification
- Obscure case studies not commonly used in A-Level teaching
- Statistical methods beyond those required in the specification
- Other social science content (sociology, economics) unless directly relevant to human geography

**For the topic "${topic.name}", test ONLY the content specified in the Edexcel A-Level Geography syllabus.**

## Question Requirements
1. **A-Level Standard**: Appropriate for 16-18 year olds studying Edexcel Geography
2. **Authentic Edexcel Style**: Match real paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets
4. **Include Specific Data**: Use statistics, dates, and named examples from the knowledge bank
5. **Appropriate Difficulty**:
   - Easy: Short answer/explain (4-8 marks) - test AO1 knowledge
   - Medium: Data stimulus or assess (8-12 marks) - test AO1/AO2
   - Hard: Extended essay (20 marks) - test AO1, AO2, evaluation

## Response Format
Return JSON with:
- "content": Question text (including any figure descriptions if data stimulus)
- "marks": Total marks
- "solution": Detailed model answer at the appropriate level
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('geography')}`;
}

export function getEdexcelALevelGeographyQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicSpecificKnowledge(topic.name);

  const difficultyGuidance = {
    easy: `Create a short answer question testing knowledge (AO1).

**Question Types:**
- "Explain [concept/process]" [4 marks]
- "Outline the characteristics of..." [4 marks]
- "Describe the distribution of..." [4 marks]
- "Suggest two reasons why..." [4 marks]

**Requirements:**
- Test recall and understanding
- Expect 2 developed points (1+1 marks each)
- Use specific terminology
- Can reference a brief figure/data

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.

**Example 4-mark answer structure:**
Point 1 + development/example = 2 marks
Point 2 + development/example = 2 marks`,

    medium: `Create an application question requiring analysis (AO1/AO2).

**Question Types:**
- "Using Figure X, analyse..." [8 marks]
- "Assess the [impacts/importance] of..." [12 marks]
- "Explain the [causes/effects] of..." [8 marks]
- "Compare the [X and Y]..." [8 marks]

**Requirements:**
- Test application and analysis
- Include data stimulus where appropriate
- Expect case study references
- Award marks for evaluation/assessment

**8-Mark Level Descriptors:**
- Level 3 (6-8): Detailed analysis; uses data effectively; clear understanding
- Level 2 (3-5): Some analysis; partial data use; reasonable understanding
- Level 1 (1-2): Limited analysis; descriptive; basic understanding

**12-Mark Level Descriptors:**
- Level 3 (9-12): Thorough knowledge; detailed analysis; clear evaluation
- Level 2 (5-8): Some knowledge; partial analysis; some evaluation
- Level 1 (1-4): Basic knowledge; limited analysis; little evaluation

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a 20-mark extended response requiring evaluation (AO1 + AO2).

**Question Types:**
- "Evaluate the view that..." [20 marks]
- "To what extent..." [20 marks]
- "Assess the success of..." [20 marks]
- "'Statement.' Discuss." [20 marks]

**Requirements:**
- Test knowledge, application, AND evaluation
- Expect balanced argument with multiple perspectives
- Require specific case study evidence with data
- Must reach substantiated conclusion
- Reference geographical theory where appropriate (Harvey, Massey, Rostow, Wallerstein, Sen)

**20-Mark Level Descriptors:**
- Level 4 (16-20): Comprehensive knowledge; thorough analysis; substantiated conclusion; excellent structure; accurate terminology; detailed case study evidence
- Level 3 (11-15): Good knowledge; clear analysis; developed evaluation; good structure; appropriate terminology
- Level 2 (6-10): Some knowledge; partial analysis; basic evaluation; variable structure; some terminology
- Level 1 (1-5): Limited knowledge; minimal analysis; little evaluation; poor structure

**Model answer should include:**
- Introduction defining key terms
- Multiple paragraphs with case study evidence
- Counter-arguments considered
- Theoretical framework references
- Substantiated conclusion

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel A-Level Geography question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

## Topic Knowledge to Draw From:
${topicKnowledge}

## Specific Guidance:
${difficultyGuidance[difficulty]}

## Case Study Data Available:
${CASE_STUDY_DATA}

**IMPORTANT**:
- Include specific statistics, dates, and named places
- Use authentic Edexcel command words
- Model answer should demonstrate the expected standard
- Mark scheme should be detailed and actionable

Return valid JSON:
{
  "content": "question text with any figure descriptions",
  "marks": number,
  "solution": "detailed model answer at appropriate level",
  "markScheme": ["detailed marking point 1", "detailed marking point 2", ...]
}`;
}

function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 4, max: 8 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 20, max: 20 };
  }
}

function getTopicSpecificKnowledge(topicName: string): string {
  const topicLower = topicName.toLowerCase();

  // Match topic to appropriate knowledge bank
  if (topicLower.includes('tectonic') || topicLower.includes('hazard') || topicLower.includes('earthquake') || topicLower.includes('volcano')) {
    return TECTONIC_PROCESSES_KNOWLEDGE;
  }

  if (topicLower.includes('coastal') || topicLower.includes('glaciat') || topicLower.includes('landscape')) {
    return LANDSCAPE_SYSTEMS_KNOWLEDGE;
  }

  if (topicLower.includes('water') || topicLower.includes('hydro')) {
    return WATER_CYCLE_KNOWLEDGE;
  }

  if (topicLower.includes('carbon') || topicLower.includes('energy')) {
    return CARBON_CYCLE_KNOWLEDGE;
  }

  if (topicLower.includes('global') || topicLower.includes('trade') || topicLower.includes('tnc')) {
    return GLOBALISATION_KNOWLEDGE;
  }

  if (topicLower.includes('superpower') || topicLower.includes('geopolit')) {
    return SUPERPOWERS_KNOWLEDGE;
  }

  if (topicLower.includes('regenerat') || topicLower.includes('urban') || topicLower.includes('place')) {
    return REGENERATING_PLACES_KNOWLEDGE;
  }

  if (topicLower.includes('divers') || topicLower.includes('migrat') || topicLower.includes('identity')) {
    return DIVERSE_PLACES_KNOWLEDGE;
  }

  if (topicLower.includes('synoptic') || topicLower.includes('player') || topicLower.includes('future')) {
    return SYNOPTIC_THEMES_KNOWLEDGE;
  }

  // Default: return comprehensive overview
  return `${TECTONIC_PROCESSES_KNOWLEDGE}

${GLOBALISATION_KNOWLEDGE}

${SYNOPTIC_THEMES_KNOWLEDGE}`;
}
