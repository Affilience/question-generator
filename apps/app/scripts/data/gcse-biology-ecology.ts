import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyEcology: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'ecosystems',
      title: 'Ecosystems | GCSE Biology',
      meta_description: 'Master ecosystems including communities, habitats, and interdependence. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `An ecosystem is the interaction of all living organisms (the community) with the non-living (abiotic) components of their environment. Understanding ecosystems is fundamental to ecology and helps explain how organisms survive, interact, and depend on each other.

Every ecosystem consists of two main components: biotic factors (living things like plants, animals, bacteria, and fungi) and abiotic factors (non-living things like temperature, light, water, soil pH, and mineral content). These factors combine to create unique habitats where specific communities of organisms can thrive.

Within ecosystems, organisms occupy specific niches - their particular role and position within the community. A niche includes what an organism eats, where it lives, when it's active, and how it interacts with other species. No two species can occupy exactly the same niche in the same habitat for long - one will outcompete the other.

Interdependence is a crucial concept in ecosystems. Organisms depend on each other for food, shelter, pollination, seed dispersal, and many other functions. When one species is removed or significantly reduced, it creates ripple effects throughout the ecosystem. For example, the loss of bees would devastate flowering plants and the animals that depend on them.

Ecosystems can be as small as a pond or as large as a tropical rainforest. Each has characteristic producers (plants and algae that photosynthesise), consumers (animals that eat other organisms), and decomposers (bacteria and fungi that break down dead matter). Together, these organisms cycle nutrients and transfer energy through the ecosystem.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define the term ecosystem and give one example of an abiotic factor.',
        solution: `**Definition of ecosystem:**
An ecosystem is the interaction of a community of living organisms with the non-living (abiotic) components of their environment [1 mark]

**Example of an abiotic factor:**
Any one of:
- Temperature
- Light intensity
- Water availability
- Soil pH
- Mineral content
- Carbon dioxide concentration
- Wind speed
- Oxygen levels
[1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain what is meant by interdependence in an ecosystem and describe one example of how the removal of a species could affect other organisms.',
        solution: `**Interdependence:**
Interdependence means that organisms in an ecosystem depend on each other for survival [1 mark]

**Example of species removal:**
Example: If bees were removed from an ecosystem:
- Flowering plants would not be pollinated [1 mark]
- These plants would not reproduce and their numbers would decline
- Animals that feed on these plants or their seeds would have less food and their populations would decrease [1 mark]

(Other valid examples include: removal of predators causing prey population explosion, removal of decomposers preventing nutrient recycling, etc.)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A farmer introduces a new species of herbivore to their land. Explain how this could affect the ecosystem, including both biotic and abiotic factors.',
        solution: `**Effects on biotic factors:**
- Competition with existing herbivores for food [1 mark]
- Native herbivore populations may decline if they cannot compete
- Plant populations may decrease due to increased grazing [1 mark]
- Predator populations may initially increase (more prey) then stabilise or decrease

**Effects on abiotic factors:**
- Soil structure may change due to trampling/compaction [1 mark]
- Nutrient content of soil may change due to different grazing patterns and waste
- If vegetation is reduced, soil erosion may increase
- Water absorption by soil may decrease, affecting local water availability [1 mark]

**Overall impact:**
The introduction could cause a cascade of effects throughout the ecosystem, potentially leading to loss of biodiversity if native species cannot adapt.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'food-chains',
      title: 'Food Chains and Food Webs | GCSE Biology',
      meta_description: 'Master food chains and webs including producers, consumers and trophic levels. GCSE Biology practice questions with solutions.',
      introduction: `Food chains show the feeding relationships between organisms in an ecosystem, illustrating how energy and nutrients pass from one organism to another. Every food chain starts with a producer - an organism that makes its own food through photosynthesis.

In a food chain, each step is called a trophic level. Producers occupy the first trophic level. Primary consumers (herbivores) that eat producers are at the second level. Secondary consumers (carnivores that eat herbivores) are at the third level, and tertiary consumers are at the fourth level. Apex predators sit at the top with no natural predators of their own.

Energy transfer between trophic levels is inefficient - typically only about 10% of energy is passed on to the next level. The rest is used for life processes, lost as heat through respiration, or contained in parts that aren't eaten or digested. This explains why food chains rarely have more than four or five trophic levels - there isn't enough energy left to support organisms beyond this.

Food webs are more realistic representations of feeding relationships because most organisms eat more than one type of food and are eaten by more than one predator. A food web shows multiple interconnected food chains, giving a more complete picture of energy flow in an ecosystem.

Understanding food chains helps us predict how changes in one population affect others. If a disease kills many rabbits, foxes that eat rabbits will have less food, while plants that rabbits eat will flourish. These cascading effects demonstrate the interconnected nature of ecosystems and the importance of maintaining biodiversity.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'In the food chain: Grass → Rabbit → Fox → Hawk, identify the producer and the secondary consumer.',
        solution: `**Producer:** Grass [1 mark]
(Producers are organisms that make their own food through photosynthesis)

**Secondary consumer:** Fox [1 mark]
(Secondary consumers eat primary consumers/herbivores - the fox eats the rabbit which is a herbivore)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why only about 10% of energy is transferred from one trophic level to the next, and explain why this limits the length of food chains.',
        solution: `**Reasons for limited energy transfer:**
1. Energy is lost as heat during respiration [1 mark]
2. Some parts of organisms are not eaten (bones, fur, roots) [1 mark]
3. Some material is not digested and is egested as waste
4. Energy is used for movement and other life processes

**Why this limits food chain length:**
- At each level, only 10% of energy passes on [1 mark]
- After 4-5 levels, there is not enough energy to support another trophic level
- Apex predators at the top need large territories to find enough food [1 mark]
- There simply isn't enough energy available to support organisms at higher trophic levels`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A disease kills 80% of the rabbit population in a grassland ecosystem. Predict and explain the effects on the populations of (a) grass, (b) foxes, and (c) insects that also eat grass.',
        solution: `**(a) Effect on grass population:**
- Grass population will increase [1 mark]
- Less grazing pressure from rabbits means more grass survives to reproduce
- Competition between grass plants will eventually limit growth

**(b) Effect on fox population:**
- Fox population will decrease [1 mark]
- Less prey available means less food
- Some foxes may starve or move to other areas
- Foxes may switch to eating other prey if available [1 mark]

**(c) Effect on insect population:**
- Initially, insect population may increase [1 mark]
- Less competition with rabbits for grass
- However, foxes may switch to eating more insects as alternative prey
- The outcome depends on whether foxes can catch insects effectively [1 mark]

**Overall:** Changes in one population create ripple effects throughout the food web, demonstrating interdependence.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'carbon-cycle',
      title: 'The Carbon Cycle | GCSE Biology',
      meta_description: 'Master the carbon cycle including photosynthesis, respiration and decomposition. GCSE Biology practice with solutions.',
      introduction: `The carbon cycle describes how carbon atoms move between the atmosphere, living organisms, the ocean, and the Earth's crust. Carbon is essential for life - it forms the backbone of all organic molecules including carbohydrates, proteins, lipids, and nucleic acids.

Carbon enters the living part of the ecosystem through photosynthesis. Plants and algae absorb carbon dioxide from the atmosphere and use light energy to convert it into glucose. This carbon becomes incorporated into plant tissues and is then passed to animals through food chains.

Carbon returns to the atmosphere through several processes. All living organisms release carbon dioxide during respiration - the process that releases energy from glucose. When organisms die, decomposers (bacteria and fungi) break down their bodies, releasing carbon dioxide back into the atmosphere through their own respiration.

Combustion of fossil fuels and wood also releases carbon dioxide. Fossil fuels (coal, oil, and natural gas) formed millions of years ago from dead organisms that were buried before they could decompose. When we burn these fuels, we release carbon that has been locked away for millions of years.

Human activities have significantly altered the carbon cycle. By burning fossil fuels and clearing forests (which would otherwise absorb CO2), we have increased atmospheric carbon dioxide levels from about 280 parts per million in pre-industrial times to over 420 ppm today. This extra carbon dioxide is the main driver of climate change, making understanding the carbon cycle crucial for addressing environmental challenges.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how carbon moves from the atmosphere into plants and back into the atmosphere.',
        solution: `**Carbon into plants:**
- Plants absorb carbon dioxide from the atmosphere [1 mark]
- Through photosynthesis, CO2 is converted into glucose [1 mark]
- The carbon in glucose is used to build plant tissues (cellulose, starch, proteins)

**Carbon back to atmosphere:**
- Plants release CO2 during respiration [1 mark]
- (Also: when plants die and decompose, decomposers release CO2 through respiration)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain the role of decomposers in the carbon cycle and describe what would happen if all decomposers were removed from an ecosystem.',
        solution: `**Role of decomposers:**
- Decomposers (bacteria and fungi) break down dead organisms and waste [1 mark]
- They respire, releasing carbon dioxide back into the atmosphere [1 mark]
- They return nutrients to the soil for plants to use

**If decomposers were removed:**
- Dead organisms would accumulate and not break down [1 mark]
- Carbon would remain locked in dead matter
- CO2 would not be returned to atmosphere for photosynthesis
- Nutrients would not be recycled to the soil
- Plants would eventually run out of nutrients and die [1 mark]
- The entire ecosystem would collapse`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain how human activities have affected the carbon cycle and describe two ways in which this is contributing to climate change.',
        solution: `**Human activities affecting carbon cycle:**

1. **Burning fossil fuels:**
- Releases carbon that was stored for millions of years [1 mark]
- Adds CO2 to atmosphere faster than natural processes can remove it [1 mark]
- Sources: power stations, vehicles, industry, heating

2. **Deforestation:**
- Removes trees that would absorb CO2 through photosynthesis [1 mark]
- Burning or decomposing cleared trees releases stored carbon
- Reduces the Earth's capacity to absorb CO2

**Contribution to climate change:**
- Increased atmospheric CO2 enhances the greenhouse effect [1 mark]
- More heat is trapped in the atmosphere, causing global warming
- This leads to rising sea levels, extreme weather events, and ecosystem disruption [1 mark]

**Scale of impact:**
- CO2 levels have risen from 280 ppm to over 420 ppm since industrialisation
- This is the fastest increase in at least 800,000 years`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'water-cycle',
      title: 'The Water Cycle | GCSE Biology',
      meta_description: 'Master the water cycle including evaporation, condensation and precipitation. GCSE Biology practice questions with solutions.',
      introduction: `The water cycle, also called the hydrological cycle, describes the continuous movement of water between the Earth's surface, atmosphere, and underground. Unlike nutrients that must be recycled by living organisms, water moves primarily through physical processes.

The cycle begins with evaporation - liquid water from oceans, lakes, rivers, and soil surfaces is heated by the Sun and transforms into water vapour. Plants also release water vapour through transpiration, the evaporation of water from leaf surfaces through stomata. Together, evaporation and transpiration are sometimes called evapotranspiration.

As water vapour rises into the atmosphere, it cools and condenses into tiny water droplets, forming clouds. When these droplets combine and become heavy enough, precipitation occurs - water returns to Earth as rain, snow, sleet, or hail. In the UK, most precipitation falls as rain.

Once precipitation reaches the ground, it follows several paths. Some water flows across the surface as runoff, eventually reaching streams, rivers, and oceans. Some infiltrates the soil and becomes groundwater, moving slowly through rock and soil. This groundwater can remain underground for years before eventually reaching the surface at springs or being absorbed by plant roots.

Living organisms are deeply integrated into the water cycle. Plants absorb water through roots and release it through transpiration. Animals drink water and release it through excretion and respiration. Decomposers also release water as they break down organic matter. A large tree can transpire hundreds of litres of water per day, significantly affecting local humidity and rainfall patterns.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe three processes that are part of the water cycle.',
        solution: `**Three processes in the water cycle:**

1. **Evaporation** [1 mark]
- Liquid water changes to water vapour when heated by the Sun
- Occurs from oceans, lakes, rivers, and soil

2. **Condensation** [1 mark]
- Water vapour cools and changes back into liquid water
- Forms clouds as tiny water droplets

3. **Precipitation** [1 mark]
- Water falls from clouds as rain, snow, sleet, or hail
- Returns water to the Earth's surface

(Other acceptable answers: transpiration, infiltration, runoff, groundwater flow)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain the role of plants in the water cycle and describe how deforestation might affect local rainfall.',
        solution: `**Role of plants in water cycle:**
- Plants absorb water from soil through their roots [1 mark]
- Water travels up through xylem to the leaves
- Water evaporates from leaf surfaces through stomata (transpiration) [1 mark]
- This adds water vapour to the atmosphere

**Effect of deforestation on rainfall:**
- Without trees, less water is transpired into the atmosphere [1 mark]
- Less water vapour means fewer clouds form
- This can lead to reduced local rainfall [1 mark]
- Soil also becomes drier as there are no roots to hold water
- Runoff increases, potentially causing flooding and erosion`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student states: "The same water molecules that exist today have existed for billions of years." Evaluate this statement with reference to the water cycle.',
        solution: `**Evaluation of the statement:**

**Supporting evidence:**
- Water is not created or destroyed, only changes state [1 mark]
- The total amount of water on Earth remains essentially constant
- Water molecules cycle between atmosphere, surface, and ground
- The same hydrogen and oxygen atoms are recycled [1 mark]

**Limitations of the statement:**
- Some water molecules are split during photosynthesis [1 mark]
- 6H₂O + 6CO₂ → C₆H₁₂O₆ + 6O₂
- The hydrogen becomes part of glucose molecules
- Water is also produced during respiration and combustion [1 mark]

**Conclusion:**
The statement is largely true - water is continuously recycled through the water cycle. However, some water molecules are temporarily broken down in biological processes like photosynthesis, and new water molecules are created during respiration. The atoms themselves are conserved, even if individual molecules are not permanent. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'biodiversity',
      title: 'Biodiversity | GCSE Biology',
      meta_description: 'Master biodiversity including species richness and conservation. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Biodiversity refers to the variety of all living organisms on Earth. This includes the variety of species within an area (species diversity), the genetic variation within populations (genetic diversity), and the variety of different ecosystems and habitats (ecosystem diversity). High biodiversity indicates a healthy, stable ecosystem.

Species diversity is often measured by counting the number of different species in an area (species richness) and considering how evenly individuals are distributed among those species (species evenness). A woodland with 20 tree species, each making up roughly 5% of the total, has higher diversity than one with 20 species where 90% of trees are just one species.

Genetic diversity within a species is crucial for adaptation and survival. Populations with high genetic diversity can better respond to environmental changes, diseases, and new predators because some individuals will have characteristics that help them survive. Populations with low genetic diversity, such as endangered species with small numbers, are vulnerable to being wiped out by a single disease.

Human activities have dramatically reduced global biodiversity. Habitat destruction for agriculture and development, pollution, overexploitation of resources, invasive species, and climate change are the main drivers. Scientists estimate that species are going extinct at 100-1000 times the natural background rate, leading some to call this the sixth mass extinction.

Conservation efforts aim to maintain and restore biodiversity. These include establishing protected areas, breeding programmes for endangered species, habitat restoration, and controlling invasive species. Maintaining biodiversity is not just ethically important - it provides ecosystem services worth trillions of pounds annually, including clean air and water, crop pollination, and medicines derived from natural sources.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define biodiversity and explain why it is important for ecosystems.',
        solution: `**Definition:**
Biodiversity is the variety of all living organisms on Earth [1 mark]
(Or: the variety of species in an ecosystem/habitat)

**Importance for ecosystems:**
Any one of:
- Ecosystems with high biodiversity are more stable [1 mark]
- If one species is lost, others can fulfil similar roles
- Greater variety of food sources for organisms
- More genetic resources for adaptation to change
- Provides ecosystem services (pollination, decomposition, etc.)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe two human activities that reduce biodiversity and explain how each activity causes this reduction.',
        solution: `**Activity 1: Deforestation/Habitat destruction**
- Humans clear forests for agriculture, housing, and industry [1 mark]
- Animals and plants lose their homes and food sources
- Species that cannot adapt or move go extinct [1 mark]

**Activity 2: Pollution**
- Chemicals from industry, farming, and waste enter ecosystems [1 mark]
- Pollutants can poison organisms directly
- Or disrupt food chains (e.g., pesticides killing insects)
- Some pollutants bioaccumulate, becoming more concentrated at higher trophic levels [1 mark]

(Other valid activities: overfishing/overhunting, introduction of invasive species, climate change from burning fossil fuels)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why maintaining genetic diversity within a species is important for its long-term survival, and describe one conservation strategy that helps maintain genetic diversity.',
        solution: `**Importance of genetic diversity:**

- High genetic diversity means individuals have different alleles [1 mark]
- Some individuals may have alleles that provide resistance to diseases
- When environment changes, some individuals may be better adapted to survive [1 mark]
- These individuals can reproduce and pass on beneficial alleles
- The population can evolve and adapt

**Low genetic diversity risks:**
- All individuals may be susceptible to the same disease [1 mark]
- A single disease outbreak could kill entire population
- Limited ability to adapt to environmental changes

**Conservation strategy - Captive breeding programmes:**
- Carefully select breeding pairs to maximise genetic diversity [1 mark]
- Keep detailed records of family trees (studbooks)
- Exchange animals between zoos to prevent inbreeding
- Introduce new genetic material from wild populations where possible
- Aim to maintain 90% of genetic diversity for 100 years [1 mark]

(Alternative strategies: seed banks, gene banks, protecting large habitat areas to maintain large populations)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'pyramids-of-biomass',
      title: 'Pyramids of Biomass | GCSE Biology',
      meta_description: 'Master pyramids of biomass and energy transfer in ecosystems. GCSE Biology practice questions with solutions.',
      introduction: `Pyramids of biomass show the mass of living material (biomass) at each trophic level of a food chain or ecosystem. Unlike pyramids of numbers, which can sometimes be inverted (one tree supporting thousands of insects), pyramids of biomass are almost always pyramid-shaped because biomass decreases at each level.

Biomass is measured as the dry mass of organisms, usually in grams per square metre (g/m²) or kilograms per square metre. Dry mass is used because water content varies greatly between organisms and doesn't represent the actual organic material. To measure dry mass, organisms must be dried in an oven until their mass no longer changes.

The pyramid shape occurs because energy transfer between trophic levels is inefficient. Only about 10% of the biomass at one level becomes biomass at the next level. The other 90% is lost through respiration (converted to heat), in waste products (urine and faeces), and in parts not eaten (bones, shells, plant roots).

Understanding pyramids of biomass has practical applications in agriculture. To produce 1 kg of beef requires about 10 kg of grain. This is why livestock farming uses far more land than growing crops for direct human consumption. In a world with limited resources, the efficiency of different food production systems matters greatly.

Very occasionally, pyramids of biomass can be inverted. This happens in aquatic ecosystems where phytoplankton (tiny producers) reproduce so rapidly that their biomass at any given moment is less than the zooplankton eating them. The phytoplankton have higher productivity (biomass produced over time) even though their standing biomass is lower.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain what is meant by biomass and state why pyramids of biomass are usually pyramid-shaped.',
        solution: `**Definition of biomass:**
Biomass is the mass of living material in organisms [1 mark]
(Usually measured as dry mass per unit area)

**Why pyramid-shaped:**
Biomass decreases at each trophic level [1 mark]
(Because only about 10% of biomass is transferred to the next level - the rest is lost through respiration, waste, and uneaten parts)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'At a trophic level, organisms have a total biomass of 5000 kg. Explain why the biomass at the next trophic level would be expected to be approximately 500 kg.',
        solution: `**Calculation:**
Only about 10% of biomass transfers to the next level [1 mark]
10% of 5000 kg = 500 kg [1 mark]

**Reasons for 90% loss:**
1. **Respiration** - organisms use energy for life processes, releasing heat [1 mark]
2. **Waste** - not all food is digested; some is lost as faeces and urine
3. **Uneaten parts** - bones, shells, roots, and other parts are not consumed [1 mark]

This inefficiency explains why food chains are usually limited to 4-5 trophic levels.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A farmer has 10 hectares of land and wants to produce protein for human consumption. Compare the efficiency of using the land to grow crops directly for humans versus growing crops to feed cattle. Include calculations to support your answer.',
        solution: `**Comparison:**

**Growing crops directly:**
- Assume land produces 5000 kg of grain biomass [1 mark]
- Humans eat the grain directly
- 5000 kg of edible biomass available

**Growing crops to feed cattle:**
- Same 5000 kg of grain biomass produced
- Only 10% transferred to cattle = 500 kg beef [1 mark]
- Some parts of cattle not edible, so perhaps 350 kg edible meat

**Efficiency comparison:**
- Direct crop consumption: 5000 kg food produced
- Via cattle: 350-500 kg food produced [1 mark]
- Crops are approximately 10-14 times more efficient per hectare

**Additional considerations:**
- Cattle farming requires more water and produces more greenhouse gases [1 mark]
- However, cattle can graze land unsuitable for crops
- Meat provides different nutrients (B12, iron, complete protein)
- Global food security would benefit from more plant-based diets [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'decomposition',
      title: 'Decomposition | GCSE Biology',
      meta_description: 'Master decomposition including factors affecting decay rate. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Decomposition is the process by which dead organisms and waste materials are broken down into simpler substances by decomposers. The main decomposers are bacteria and fungi, which secrete enzymes onto dead matter and absorb the soluble products. This process returns nutrients to the soil, making them available for plants to absorb.

Several factors affect the rate of decomposition. Temperature is crucial - decomposers are living organisms with enzymes, so they work fastest at an optimum temperature (around 25-37°C for most decomposers). Below this, reactions slow down; above it, enzymes begin to denature. This is why decomposition is slower in cold environments.

Moisture is essential for decomposition. Water is needed for enzyme activity and for decomposers to absorb nutrients. Dry conditions slow decomposition significantly - this is why food can be preserved by drying. However, waterlogged conditions with no oxygen can also slow decomposition as many decomposers need oxygen for aerobic respiration.

Oxygen availability matters because most decomposers respire aerobically. In well-aerated compost heaps or soil, decomposition is rapid. In anaerobic conditions, such as landfill sites or bogs, decomposition is much slower and may produce methane instead of carbon dioxide. This is why peat bogs preserve organisms for thousands of years.

Understanding decomposition has many practical applications. Composting harnesses decomposition to recycle garden and food waste into nutrient-rich compost. Food preservation methods like refrigeration, drying, salting, and canning all work by slowing decomposition. Sewage treatment relies on decomposers to break down human waste safely.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name the two main types of decomposers and describe their role in an ecosystem.',
        solution: `**Two main decomposers:**
1. Bacteria [1 mark]
2. Fungi [1 mark]

**Role in ecosystem:**
- They break down dead organisms and waste materials [1 mark]
- They secrete enzymes to digest organic matter externally
- They absorb the soluble products
- They return nutrients (nitrates, phosphates, minerals) to the soil for plants to use
- They release carbon dioxide back to the atmosphere through respiration`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A gardener wants to speed up decomposition in their compost heap. Describe three things they could do and explain why each would help.',
        solution: `**Three methods to speed up decomposition:**

1. **Turn the compost regularly** [1 mark]
- This adds oxygen for aerobic respiration
- Decomposers respire faster with oxygen, producing more energy for growth and reproduction

2. **Keep the compost moist (but not waterlogged)** [1 mark]
- Water is needed for enzyme activity
- Decomposers need water to absorb nutrients
- Helps maintain good conditions for microbial growth

3. **Add nitrogen-rich materials (grass clippings, manure)** [1 mark]
- Decomposers need nitrogen to make proteins
- Balanced carbon:nitrogen ratio speeds decomposition

4. **Keep in a warm location/insulate the heap** [1 mark]
- Warmer temperatures increase enzyme activity
- Decomposers work faster at higher temperatures (up to an optimum)
- The process itself generates heat

(Any three for full marks)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Explain why bodies preserved in peat bogs can remain intact for thousands of years, while a body buried in ordinary soil would decompose within months.',
        solution: `**Conditions in peat bogs that prevent decomposition:**

1. **Lack of oxygen (anaerobic conditions)** [1 mark]
- Peat bogs are waterlogged
- Most decomposing bacteria need oxygen for aerobic respiration
- Without oxygen, they cannot function effectively [1 mark]

2. **Acidic conditions** [1 mark]
- Peat bogs have low pH (very acidic)
- This denatures the enzymes of many decomposers
- Bacteria and fungi cannot survive or function in highly acidic conditions

3. **Cold temperatures** [1 mark]
- Many bogs are in cold regions
- Low temperatures slow down enzyme activity
- Decomposer metabolism is greatly reduced

4. **Antimicrobial compounds** [1 mark]
- Sphagnum moss in bogs releases chemicals that inhibit bacterial growth
- These compounds bind to nutrients, making them unavailable to decomposers

**In ordinary soil:**
- Oxygen is readily available
- pH is usually closer to neutral
- Temperatures are warmer
- Many decomposers are present and active
- Body decomposes rapidly (weeks to months)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'human-impact',
      title: 'Human Impact on Ecosystems | GCSE Biology',
      meta_description: 'Master human impacts on ecosystems including pollution and habitat destruction. GCSE Biology practice with solutions.',
      introduction: `Humans have become the dominant force shaping Earth's ecosystems. With a global population exceeding 8 billion and increasing consumption, our impact on the natural world is unprecedented. Understanding these impacts is crucial for developing sustainable solutions.

Land use change is the primary driver of biodiversity loss. Forests, wetlands, and grasslands are converted to farmland, cities, and infrastructure. Between 1990 and 2020, the world lost 420 million hectares of forest - an area larger than the European Union. This destroys habitats and fragments populations, preventing animals from moving, finding mates, and accessing resources.

Pollution takes many forms and affects all ecosystems. Air pollution from vehicles and industry causes acid rain, which damages forests and acidifies lakes. Water pollution from agricultural runoff creates dead zones in oceans where no life can survive. Plastic pollution has become ubiquitous - microplastics have been found in the deepest ocean trenches and in human blood.

Overexploitation of natural resources depletes populations faster than they can recover. Overfishing has caused the collapse of numerous fish stocks. Hunting has driven species like the passenger pigeon to extinction. Even legal harvesting of timber and wild plants can be unsustainable if not properly managed.

Climate change, driven primarily by burning fossil fuels, is an overarching threat that amplifies all other impacts. Rising temperatures shift suitable habitats faster than many species can move. Ocean acidification threatens coral reefs and shellfish. Extreme weather events become more frequent and intense, devastating ecosystems already stressed by other human activities.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe two ways in which humans have negative impacts on ecosystems.',
        solution: `**Two negative impacts:**

1. **Habitat destruction/deforestation** [1 mark]
- Humans clear land for farming, housing, and industry
- This destroys homes for wildlife and reduces biodiversity [1 mark]

2. **Pollution** [1 mark]
- Chemicals from factories, farms, and vehicles enter air, water, and soil
- This can poison organisms or disrupt ecosystems

(Other valid answers: overfishing, burning fossil fuels/climate change, introduction of invasive species)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how the use of pesticides can have unintended effects on organisms that are not the intended targets.',
        solution: `**Unintended effects of pesticides:**

1. **Direct poisoning of non-target species** [1 mark]
- Pesticides may kill beneficial insects like bees and butterflies
- This reduces pollination of crops and wild plants

2. **Bioaccumulation in food chains** [1 mark]
- Pesticides build up in the bodies of organisms
- Concentration increases at each trophic level [1 mark]
- Top predators receive highest doses
- Example: DDT caused eggshell thinning in birds of prey

3. **Disruption of food webs** [1 mark]
- Killing insects removes food source for birds and other insectivores
- Populations throughout the food web are affected
- Can cause population crashes in species not directly exposed

4. **Water contamination**
- Pesticides run off into streams and rivers
- Aquatic organisms are affected, even far from where pesticides were applied`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Evaluate the statement: "The growing human population means that negative impacts on the environment are inevitable and cannot be reduced."',
        solution: `**Arguments supporting the statement:**
- More people need more food, water, and resources [1 mark]
- Increased food production requires more land and chemicals
- Higher energy demand increases pollution and CO2 emissions
- Historical trend shows population growth correlating with environmental damage

**Arguments against the statement:**
- Technology can reduce per-person impact [1 mark]
- Renewable energy can replace fossil fuels
- Sustainable farming practices can produce more food with less impact
- Efficiency improvements mean we can do more with less

**Evidence that impacts can be reduced:**
- Ozone layer is recovering due to banning CFCs [1 mark]
- Some fish stocks have recovered with better management
- Renewable energy is the fastest-growing energy source
- Many countries have reduced emissions while growing economically

**Conclusion:**
The statement is too pessimistic [1 mark]. While a growing population presents challenges, negative impacts are not inevitable. With appropriate policies, technology, and individual choices, we can reduce our environmental footprint even as the population grows. The key is making sustainable choices at all levels - individual, national, and global. [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'deforestation',
      title: 'Deforestation | GCSE Biology',
      meta_description: 'Master deforestation causes and effects including biodiversity loss. GCSE Biology practice questions with solutions.',
      introduction: `Deforestation is the permanent removal of forests to make way for other land uses. Globally, about 10 million hectares of forest are lost each year - an area roughly the size of South Korea. The main drivers are agriculture (especially cattle ranching and soybean/palm oil production), logging, and infrastructure development.

Tropical rainforests are particularly affected and hold the greatest biodiversity. The Amazon alone contains about 10% of all species on Earth. When rainforest is cleared, countless species lose their habitat. Many species are endemic (found nowhere else), so habitat loss means extinction. Scientists estimate we are losing species faster than we can discover them.

Deforestation significantly impacts the carbon cycle. Trees absorb carbon dioxide during photosynthesis and store carbon in their wood, leaves, and roots. When forests are burned or cleared, this stored carbon is released back into the atmosphere. Deforestation accounts for about 10% of global greenhouse gas emissions - more than all the world's cars combined.

The local and regional effects of deforestation are also severe. Trees release water vapour through transpiration, creating local rainfall. When forests disappear, rainfall patterns change, potentially causing droughts. Tree roots hold soil together; without them, soil erosion increases dramatically. This affects agriculture and causes rivers to become silted up.

Reforestation and forest conservation are crucial for addressing climate change and biodiversity loss. Protected areas, sustainable forestry practices, and reducing demand for products linked to deforestation can all help. Some countries have successfully increased their forest cover through tree planting programmes and better land management.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State two reasons why tropical rainforests are cleared.',
        solution: `**Two reasons for rainforest clearance:**

1. **Agriculture** [1 mark]
- Cattle ranching
- Growing crops like soya beans and palm oil
- Subsistence farming

2. **Logging** [1 mark]
- Timber for construction and furniture
- Paper production
- Firewood and charcoal

(Other valid answers: mining, building roads, urban expansion, dam construction)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how deforestation contributes to climate change.',
        solution: `**How deforestation contributes to climate change:**

1. **Reduced carbon dioxide absorption** [1 mark]
- Trees absorb CO2 from the atmosphere during photosynthesis
- Fewer trees means less CO2 is removed from the air [1 mark]

2. **Release of stored carbon** [1 mark]
- Trees store carbon in their wood, leaves, and roots
- When trees are burned or decay, this carbon is released as CO2
- This adds to atmospheric greenhouse gases [1 mark]

3. **Soil carbon release**
- Forest soils contain large amounts of organic matter
- When forests are cleared, this decomposes and releases CO2

**Scale:**
- Deforestation causes about 10% of global greenhouse gas emissions
- This contributes to enhanced greenhouse effect and global warming`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the environmental and social impacts of deforestation, and suggest measures that could reduce forest loss.',
        solution: `**Environmental impacts:**
- **Biodiversity loss** - species lose habitats and may become extinct [1 mark]
- **Climate change** - carbon released, less CO2 absorbed
- **Soil erosion** - without tree roots, soil is washed away by rain
- **Disrupted water cycle** - less transpiration leads to reduced local rainfall [1 mark]
- **Flooding** - soil cannot absorb water as effectively

**Social impacts:**
- Indigenous communities lose their homes and way of life
- Reduced rainfall can affect agriculture in surrounding areas
- Livelihoods dependent on forests (sustainable harvesting) are lost
- Water supplies for downstream communities may be affected

**Measures to reduce forest loss:**
1. **Protected areas and law enforcement** [1 mark]
- Create national parks and reserves
- Enforce anti-logging laws

2. **Sustainable alternatives** [1 mark]
- Certified sustainable timber
- Agroforestry (combining farming with trees)
- Ecotourism to provide income without clearing forests

3. **Reducing demand** [1 mark]
- Consumer choices (avoiding palm oil, sustainable products)
- Corporate commitments to deforestation-free supply chains
- Government policies restricting imports of products linked to deforestation

4. **Reforestation programmes**
- Planting new forests
- Allowing degraded forests to regenerate`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'global-warming',
      title: 'Global Warming | GCSE Biology',
      meta_description: 'Master global warming causes and effects including greenhouse gases. GCSE Biology practice questions with solutions.',
      introduction: `Global warming refers to the long-term increase in Earth's average temperature, primarily caused by human activities that release greenhouse gases. Since the Industrial Revolution, global temperatures have risen by about 1.1°C, with most of this warming occurring since 1950.

The greenhouse effect is a natural process that makes Earth habitable. Greenhouse gases in the atmosphere (including carbon dioxide, methane, and water vapour) trap heat from the Sun, keeping Earth about 33°C warmer than it would otherwise be. Without this effect, Earth would be frozen and lifeless.

Human activities have enhanced the greenhouse effect by dramatically increasing atmospheric concentrations of greenhouse gases. Burning fossil fuels releases CO2 that was locked away for millions of years. Deforestation releases stored carbon and removes trees that would absorb CO2. Agriculture produces methane from livestock and rice paddies, and nitrous oxide from fertilisers.

The effects of global warming are already being observed. Sea levels are rising as ice sheets melt and ocean water expands with warming. Weather patterns are becoming more extreme, with more intense heatwaves, droughts, and storms. Species are shifting their ranges towards the poles and to higher elevations, while some cannot adapt fast enough and face extinction.

Scientists predict that without significant action to reduce emissions, global temperatures could rise by 3-4°C by 2100. This would have catastrophic consequences including widespread flooding of coastal cities, mass extinctions, crop failures, and climate refugees. The Paris Agreement aims to limit warming to 1.5-2°C, but current pledges are insufficient to achieve this goal.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Name two greenhouse gases and describe one human activity that increases each gas in the atmosphere.',
        solution: `**Greenhouse gas 1: Carbon dioxide (CO2)**
Human activity: Burning fossil fuels (coal, oil, gas) for energy [1 mark]
(Or: deforestation - burning/decomposing trees releases stored carbon)

**Greenhouse gas 2: Methane (CH4)**
Human activity: Cattle farming - cows produce methane during digestion [1 mark]
(Or: rice paddies, landfill sites, natural gas extraction)

**Greenhouse gas 3: Nitrous oxide (N2O)**
Human activity: Using nitrogen fertilisers on farmland [1 mark]
(Or: burning fossil fuels)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how the greenhouse effect works and why human activities have enhanced it.',
        solution: `**How the greenhouse effect works:**
1. Solar radiation (short-wave) from the Sun passes through the atmosphere [1 mark]
2. Earth's surface absorbs this radiation and heats up
3. Earth re-emits energy as infrared radiation (long-wave/heat) [1 mark]
4. Greenhouse gases absorb this infrared radiation
5. Energy is re-radiated in all directions, including back to Earth
6. This keeps Earth warmer than it would otherwise be

**How humans have enhanced it:**
- Burning fossil fuels releases CO2 that was stored for millions of years [1 mark]
- Deforestation removes trees that would absorb CO2
- Agriculture produces methane and nitrous oxide
- Concentrations of greenhouse gases have increased significantly [1 mark]
- More heat is trapped, causing global temperatures to rise`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the biological effects of global warming on ecosystems and explain why some species are more vulnerable than others.',
        solution: `**Effects on ecosystems:**

1. **Changes in species distribution** [1 mark]
- Species move towards poles or to higher altitudes
- Suitable habitats shift faster than some species can move
- Species may encounter new competitors or predators

2. **Timing mismatches** [1 mark]
- Plants flower earlier due to warmer temperatures
- Insects may emerge at different times
- Migratory birds may arrive after food peaks
- Food webs become disrupted

3. **Coral reef bleaching**
- Warmer oceans stress coral, causing them to expel symbiotic algae
- Repeated bleaching can kill coral reefs
- This affects thousands of species dependent on reefs

4. **Ocean acidification**
- CO2 dissolves in seawater, forming carbonic acid [1 mark]
- This affects shell-forming organisms (molluscs, coral)
- Food chains in oceans are disrupted

**Why some species are more vulnerable:**
- Species with small ranges cannot move elsewhere [1 mark]
- Species in mountains may have nowhere cooler to go
- Species with slow reproduction rates cannot evolve quickly
- Specialists (specific food/habitat needs) are more vulnerable than generalists
- Species at the top of food chains are affected by changes below them [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'sampling-techniques',
      title: 'Sampling Techniques | GCSE Biology',
      meta_description: 'Master ecological sampling techniques including quadrats and transects. GCSE Biology practice questions with solutions.',
      introduction: `Ecologists use sampling techniques to estimate population sizes and study the distribution of organisms. Since it's usually impossible to count every individual in an ecosystem, scientists take representative samples and use these to make inferences about the whole population.

Quadrats are square frames, typically 0.25m² or 1m², placed on the ground to count organisms or estimate their abundance within a known area. To get reliable data, quadrats must be placed randomly - this can be done using random number generators to select coordinates. Scientists count the number of organisms in each quadrat and calculate an average, which can then be scaled up to estimate total population.

For sessile (non-moving) organisms like plants, percentage cover can be estimated - the proportion of the quadrat area covered by each species. This is useful when individual plants are difficult to count, such as grass. The ACFOR scale (Abundant, Common, Frequent, Occasional, Rare) provides a quick semi-quantitative estimate.

Transects are lines placed across an area to study how species distribution changes. A belt transect uses a line with quadrats placed at regular intervals along it, useful for studying zonation (such as from the shore into the sea). Line transects record only organisms touching the line, while belt transects sample wider strips.

For mobile animals, capture-mark-recapture methods are used. Animals are caught, marked harmlessly, and released. Later, another sample is caught and the proportion of marked individuals is used to estimate total population size using the Lincoln index formula. This method assumes no births, deaths, or migration between sampling occasions, and that marking doesn't affect survival.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Describe how you would use quadrats to estimate the population of daisies in a school field.',
        solution: `**Method using quadrats:**

1. **Random placement** [1 mark]
- Generate random coordinates using random numbers
- Place quadrat at each coordinate point
- This avoids bias in sampling

2. **Counting** [1 mark]
- Count the number of daisies in each quadrat
- Repeat with at least 10 quadrats for reliability
- Record results in a table

3. **Calculating estimate** [1 mark]
- Calculate the mean number of daisies per quadrat
- Measure the total area of the field
- Multiply mean count by (total area ÷ quadrat area)

Example: If mean = 5 daisies per 0.25m² quadrat, and field = 1000m²
Population estimate = 5 × (1000 ÷ 0.25) = 20,000 daisies`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why random sampling is important when using quadrats, and describe two ways to ensure samples are placed randomly.',
        solution: `**Why random sampling is important:**
- Avoids bias in the results [1 mark]
- Ensures the sample is representative of the whole area
- Prevents the scientist (consciously or unconsciously) choosing areas that look more interesting
- Makes results more reliable and valid [1 mark]

**Two methods for random placement:**

**Method 1: Random number generators**
- Lay out measuring tapes to create a grid
- Use a calculator or computer to generate pairs of random numbers
- These numbers give coordinates for placing each quadrat [1 mark]

**Method 2: Random number tables**
- Use pre-printed tables of random numbers
- Select number pairs by closing eyes and pointing at the table
- Use these as coordinates for quadrat placement [1 mark]

(Other valid methods: throwing quadrat over shoulder - though less reliable, using apps/computer programs to generate random points)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student uses the capture-mark-recapture method to estimate a population of woodlice. In the first sample, 40 woodlice were caught and marked. One week later, 50 woodlice were caught, of which 10 were marked. Calculate the estimated population and evaluate the reliability of this method.',
        solution: `**Calculation using Lincoln Index:**

Formula: Population = (M × S) / R

Where:
- M = number marked in first sample = 40
- S = total caught in second sample = 50
- R = marked individuals recaptured = 10

Population = (40 × 50) / 10 = 2000 / 10 = **200 woodlice** [1 mark]

**Evaluation of reliability:**

**Assumptions that must be met:** [1 mark]
1. Marked animals mix randomly back into population
2. No births, deaths, or migration between samples
3. Marking doesn't affect survival or behaviour
4. Marks don't wear off or get lost

**Potential problems with this study:**
- One week may be too long - woodlice may have died or reproduced [1 mark]
- Sample sizes are quite small, reducing reliability
- Marking may make woodlice more visible to predators
- 10 marked recaptures is a small number - could be affected by chance

**To improve reliability:**
- Reduce time between sampling occasions [1 mark]
- Increase sample sizes
- Use marking method that doesn't affect survival
- Repeat the study multiple times and calculate an average [1 mark]`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'ecology',
      subtopic_slug: 'nitrogen-cycle',
      title: 'The Nitrogen Cycle | GCSE Biology',
      meta_description: 'Master the nitrogen cycle including nitrogen fixation and denitrification. GCSE Biology practice questions with solutions.',
      introduction: `The nitrogen cycle describes how nitrogen moves between the atmosphere, soil, and living organisms. Although nitrogen gas (N₂) makes up 78% of the atmosphere, most organisms cannot use it directly. The nitrogen must be converted into compounds like ammonia, nitrites, and nitrates that plants can absorb through their roots.

Nitrogen fixation converts atmospheric nitrogen into ammonia. This happens through lightning (which provides energy to combine nitrogen and oxygen) and, more importantly, through nitrogen-fixing bacteria. Some of these bacteria live freely in soil, while others live in nodules on the roots of leguminous plants like peas, beans, and clover. These plants effectively fertilise the soil, which is why farmers often rotate crops with legumes.

Once in the soil, ammonia is converted to nitrites and then nitrates by nitrifying bacteria through a process called nitrification. Plants absorb nitrates through their roots and use the nitrogen to build amino acids and proteins. Animals obtain nitrogen by eating plants or other animals. When organisms die or produce waste, decomposers break down the proteins and release ammonia back into the soil.

Denitrifying bacteria complete the cycle by converting nitrates back into nitrogen gas, which returns to the atmosphere. This process occurs in waterlogged, anaerobic conditions and represents a loss of nitrogen from the soil.

Human activities have dramatically altered the nitrogen cycle. The Haber process artificially fixes nitrogen to make fertilisers, more than doubling the amount of biologically available nitrogen on Earth. While this has enabled us to grow more food, excess nitrogen runs off into waterways, causing eutrophication - the excessive growth of algae that depletes oxygen and creates dead zones.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Explain why plants need nitrogen and describe how nitrogen from the atmosphere becomes available to plants.',
        solution: `**Why plants need nitrogen:**
- To make amino acids, which are the building blocks of proteins [1 mark]
- Proteins are needed for growth, enzymes, and cell membranes
- Also needed for making DNA and chlorophyll

**How atmospheric nitrogen becomes available:**

1. **Nitrogen fixation** [1 mark]
- Nitrogen-fixing bacteria convert N₂ gas into ammonia (NH₃)
- Some bacteria live in soil; others live in root nodules of legumes

2. **Nitrification** [1 mark]
- Nitrifying bacteria convert ammonia to nitrites, then to nitrates
- Plants absorb nitrates through their roots
- (Lightning can also fix small amounts of nitrogen)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe the role of bacteria in the nitrogen cycle. You should include at least three different types of bacteria in your answer.',
        solution: `**Types of bacteria in the nitrogen cycle:**

1. **Nitrogen-fixing bacteria** [1 mark]
- Convert atmospheric N₂ into ammonia (NH₃)
- Found in soil (e.g., Azotobacter) or root nodules of legumes (Rhizobium)
- This makes nitrogen available to plants

2. **Nitrifying bacteria** [1 mark]
- Convert ammonia to nitrites (Nitrosomonas)
- Convert nitrites to nitrates (Nitrobacter)
- Nitrates are the form plants can best absorb [1 mark]

3. **Decomposing bacteria** [1 mark]
- Break down dead organisms and waste
- Release ammonia from proteins through decomposition
- Return nitrogen to the soil

4. **Denitrifying bacteria**
- Convert nitrates back to nitrogen gas
- Active in waterlogged, anaerobic conditions
- Return nitrogen to the atmosphere`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Farmers often use artificial nitrogen fertilisers. Explain why these are needed and discuss the environmental problems they can cause.',
        solution: `**Why artificial fertilisers are needed:**
- Plants remove nitrates from soil as they grow [1 mark]
- When crops are harvested, the nitrogen is removed from the field
- Unlike natural ecosystems, nitrogen is not returned through decomposition
- Without fertilisers, soil becomes nitrogen-depleted and crops grow poorly [1 mark]

**Environmental problems caused by fertilisers:**

1. **Eutrophication** [1 mark]
- Excess nitrates run off into rivers, lakes, and seas
- This causes rapid growth of algae (algal bloom)
- When algae die, bacteria decompose them
- Bacterial respiration uses up oxygen in the water
- Fish and other aquatic organisms die due to lack of oxygen [1 mark]

2. **Groundwater contamination**
- Nitrates leach through soil into groundwater
- Drinking water can become contaminated
- High nitrate levels are harmful to human health

3. **Greenhouse gas emissions**
- Denitrifying bacteria convert some fertiliser nitrogen to nitrous oxide
- N₂O is a powerful greenhouse gas (300× more potent than CO₂)
- Contributes to climate change [1 mark]

**Solutions:**
- Apply fertilisers more precisely
- Use slow-release fertilisers
- Plant buffer strips along waterways`,
        display_order: 3
      }
    ]
  }
];
