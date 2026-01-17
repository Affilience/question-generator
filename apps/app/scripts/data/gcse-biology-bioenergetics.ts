import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyBioenergetics: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'bioenergetics',
      subtopic_slug: 'photosynthesis',
      title: 'Photosynthesis | GCSE Biology',
      meta_description: 'Master photosynthesis equation, limiting factors and required practical. GCSE Biology practice questions with solutions.',
      introduction: `Photosynthesis is the process by which plants and algae use light energy to convert carbon dioxide and water into glucose and oxygen. This process is fundamental to almost all life on Earth, as it produces the organic molecules and oxygen that other organisms depend on.

The equation for photosynthesis is: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy and chlorophyll are required). Light energy is absorbed by chlorophyll in chloroplasts. Carbon dioxide enters through stomata in leaves, and water is absorbed by roots and transported through xylem.

The glucose produced has many uses. It can be converted to starch for storage, used in respiration to release energy, converted to cellulose for cell walls, combined with nitrates to make amino acids and proteins, or converted to lipids for storage.

Several factors affect the rate of photosynthesis. Light intensity provides the energy; increasing light increases the rate up to a point. Carbon dioxide concentration affects the rate; plants need CO₂ as a raw material. Temperature affects enzyme activity in the process. At any time, one factor limits the rate—increasing this limiting factor will increase the rate until something else becomes limiting.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the word equation for photosynthesis and state where in the plant cell this process takes place.',
        solution: `**Word equation:**
Carbon dioxide + Water → Glucose + Oxygen

(Light energy is required and chlorophyll is needed)

**Where it takes place:**
In the **chloroplasts** (which contain chlorophyll)

**Symbol equation:**
6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'A student investigated the effect of light intensity on the rate of photosynthesis using pondweed. Explain why the number of oxygen bubbles produced per minute can be used as a measure of the rate of photosynthesis.',
        solution: `**Why oxygen bubbles measure photosynthesis rate:**

1. **Oxygen is a product:**
   - The equation shows oxygen is produced: CO₂ + H₂O → Glucose + **O₂**
   - More photosynthesis = more oxygen produced

2. **Bubbles indicate oxygen release:**
   - The oxygen produced by aquatic plants escapes as bubbles
   - The number of bubbles indicates the volume of oxygen

3. **Proportional relationship:**
   - The rate of oxygen production is **directly proportional** to the rate of photosynthesis
   - Faster photosynthesis = more bubbles per minute
   - Slower photosynthesis = fewer bubbles per minute

**Why counting bubbles works:**
- It's a simple, observable measurement
- Can be counted over a set time period
- Allows comparison between different conditions

**Limitation:**
- Bubble size may vary (counting gives an approximation)
- More accurate to measure volume of gas collected`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'A farmer grows tomatoes in a greenhouse. Explain how the farmer could use their understanding of limiting factors to increase the yield of tomatoes.',
        solution: `**How to increase tomato yield using limiting factors:**

**1. Light intensity:**
- **Problem:** Natural light varies with weather and seasons
- **Solution:** Install **artificial lighting**
- **Effect:** Provides consistent, high light intensity for photosynthesis
- Use lights during winter or at night to extend the growing period

**2. Carbon dioxide concentration:**
- **Problem:** CO₂ in air is only about 0.04%
- **Solution:** Add **CO₂ enrichment** (e.g., using paraffin burners or CO₂ cylinders)
- **Effect:** Increased CO₂ concentration increases rate of photosynthesis
- Typically raise to 0.1% for optimal growth

**3. Temperature:**
- **Problem:** Temperature fluctuates with weather
- **Solution:** Install **heaters** (winter) and **ventilation** (summer)
- **Effect:** Maintain optimal temperature for enzymes (around 25-30°C for tomatoes)
- Too cold = slow enzyme activity; too hot = enzymes denature

**4. Water supply:**
- **Solution:** Use **automated irrigation** systems
- **Effect:** Ensures plants never experience water stress

**Practical considerations:**
- Must balance cost of measures against increased yield
- No point increasing one factor if another is limiting
- Monitor conditions to identify which factor is limiting
- Greenhouses allow control not possible outdoors`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'bioenergetics',
      subtopic_slug: 'respiration',
      title: 'Respiration | GCSE Biology',
      meta_description: 'Learn about aerobic and anaerobic respiration and their differences. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `Respiration is the process that releases energy from glucose in all living cells. This energy is transferred to ATP (adenosine triphosphate), which provides the energy for cellular processes. Respiration is NOT the same as breathing—it is a chemical reaction occurring in cells.

Aerobic respiration uses oxygen and releases the most energy per glucose molecule. The equation is: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ energy). Most aerobic respiration takes place in mitochondria. This is the main form of respiration when oxygen is plentiful.

Anaerobic respiration occurs when oxygen is limited. In animals and some bacteria: glucose → lactic acid (+ some energy). In plants and yeast: glucose → ethanol + carbon dioxide (+ some energy). Anaerobic respiration releases much less energy than aerobic respiration because glucose is not completely broken down.

The energy released by respiration is used for many processes: muscle contraction, protein synthesis, cell division, active transport, maintaining body temperature, transmitting nerve impulses, and growth. The rate of respiration can be measured by oxygen consumption, carbon dioxide production, or heat released.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Write the word equation for aerobic respiration and state where in the cell this process mainly takes place.',
        solution: `**Word equation:**
Glucose + Oxygen → Carbon dioxide + Water (+ energy)

**Where it takes place:**
Mainly in the **mitochondria**

(Some initial stages occur in the cytoplasm, but most energy is released in the mitochondria)

**Symbol equation:**
C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'During exercise, muscles may respire anaerobically. Explain what happens during anaerobic respiration in muscles and why this is a disadvantage.',
        solution: `**What happens during anaerobic respiration in muscles:**

1. **When it occurs:**
   - During vigorous exercise
   - Oxygen cannot be delivered fast enough for aerobic respiration
   - Muscles switch to anaerobic respiration

2. **The reaction:**
   - Glucose → **Lactic acid** (+ some energy)
   - No oxygen is used
   - Incomplete breakdown of glucose

**Why this is a disadvantage:**

1. **Less energy released:**
   - Anaerobic: releases ~2 ATP per glucose
   - Aerobic: releases ~38 ATP per glucose
   - Much less efficient—more glucose needed

2. **Lactic acid builds up:**
   - Lactic acid causes **muscle fatigue**
   - Causes a burning sensation and **muscle cramps**
   - Muscles work less efficiently

3. **Creates an oxygen debt:**
   - Lactic acid must be broken down later
   - Requires oxygen to convert lactic acid back to glucose (in liver)
   - This is why you continue breathing heavily after exercise

4. **Cannot continue indefinitely:**
   - Lactic acid accumulation limits how long you can exercise`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Yeast can respire both aerobically and anaerobically. Explain how fermentation by yeast is used in bread making and brewing, including the conditions needed and products formed.',
        solution: `**Fermentation equation (yeast anaerobic respiration):**
Glucose → Ethanol + Carbon dioxide (+ energy)
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂

**Bread making:**

**Process:**
- Yeast is added to dough containing flour (starch) and warm water
- Enzymes in flour convert starch to glucose
- Yeast respires anaerobically, producing CO₂ and ethanol

**Conditions:**
- Warm temperature (~37°C) for enzyme activity
- Sugar/starch as food for yeast
- Anaerobic conditions in the dough

**Products used:**
- **Carbon dioxide:** Creates gas bubbles that make the dough **rise**
- Makes bread light and fluffy
- **Ethanol:** Evaporates during baking (not present in final product)

**Brewing (beer/wine):**

**Process:**
- Yeast added to sugar solution (malted barley for beer, grape juice for wine)
- Yeast respires anaerobically

**Conditions:**
- Warm temperature for fermentation
- Anaerobic conditions (vessels sealed to prevent oxygen)
- Yeast eventually killed by alcohol concentration (~15%)

**Products used:**
- **Ethanol:** The alcohol in the drink (desired product)
- **Carbon dioxide:** Creates fizz in beer; released in wine making

**Key difference:** In bread, CO₂ is wanted; in brewing, ethanol is wanted.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'bioenergetics',
      subtopic_slug: 'metabolism',
      title: 'Metabolism | GCSE Biology',
      meta_description: 'Understand metabolism and metabolic reactions in living organisms. GCSE Biology practice questions with solutions.',
      introduction: `Metabolism is the sum of all the chemical reactions in a cell or organism. These reactions are controlled by enzymes and can be divided into two types: reactions that break down molecules (releasing energy) and reactions that build up molecules (requiring energy).

The glucose produced by photosynthesis is the starting point for many metabolic reactions. It can be converted to starch or glycogen for storage, used in respiration to release energy, converted to cellulose for cell walls, combined with nitrates to make amino acids for proteins, or converted to lipids for storage.

Proteins are synthesised from amino acids through metabolic reactions that require energy from respiration. The specific sequence of amino acids is determined by DNA. Proteins include enzymes, antibodies, structural proteins, and hormones.

In plants, nitrates absorbed from soil are combined with glucose to form amino acids. Lipids are synthesised from glycerol and fatty acids, both derived from glucose. These lipids are used in cell membranes and as energy stores. Understanding metabolism helps explain how organisms grow, maintain themselves, and respond to their environment.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Define metabolism and give one example of a metabolic reaction.',
        solution: `**Definition:**
Metabolism is the **sum of all chemical reactions** that occur in a cell or organism.

**Example:**
**Respiration** - breaking down glucose to release energy

(Other acceptable examples: photosynthesis, protein synthesis, converting glucose to starch, digestion)

Metabolic reactions are controlled by **enzymes**.`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Plants absorb nitrate ions from the soil. Explain why plants need nitrates and how they use them.',
        solution: `**Why plants need nitrates:**
- Nitrates contain **nitrogen**
- Plants cannot use nitrogen gas from the air
- Nitrogen is essential for making **amino acids** and **proteins**

**How plants use nitrates:**

1. **Absorption:**
   - Nitrate ions (NO₃⁻) absorbed from soil by roots
   - Uses **active transport** (requires energy)

2. **Combining with glucose:**
   - Nitrates are combined with **glucose** (from photosynthesis)
   - This forms **amino acids**
   - Reaction occurs in cells

3. **Making proteins:**
   - Amino acids are joined together to form **proteins**
   - Different sequences make different proteins

**Why proteins are important:**
- Enzymes (biological catalysts)
- Structural proteins (cell membranes)
- Growth and repair
- Chlorophyll contains nitrogen (needed for photosynthesis)

**Without nitrates:** Plants show stunted growth and yellow leaves (chlorosis)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Describe the different ways glucose produced by photosynthesis can be used or converted by a plant.',
        solution: `**Uses and conversions of glucose in plants:**

**1. Respiration:**
- Glucose is broken down to release **energy**
- Energy needed for metabolic reactions, active transport, growth
- Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy

**2. Converted to starch (storage):**
- Glucose converted to **starch** for storage
- Starch is insoluble (doesn't affect water potential)
- Stored in leaves, roots, tubers (e.g., potato)
- Can be converted back to glucose when needed

**3. Converted to cellulose:**
- Glucose converted to **cellulose**
- Cellulose forms plant **cell walls**
- Provides strength and structural support

**4. Used to make amino acids:**
- Glucose combined with **nitrates** from soil
- Forms **amino acids**
- Amino acids join to make **proteins**
- Proteins needed for enzymes and growth

**5. Converted to lipids (fats/oils):**
- Glucose converted to **lipids**
- Stored in seeds (e.g., sunflower, olive)
- Energy store and cell membrane component

**6. Used for growth:**
- Glucose is building block for new cells
- Provides carbon skeleton for organic molecules

**Summary:** Glucose is the primary product of photosynthesis and is converted into all other organic molecules the plant needs.`,
        display_order: 3
      }
    ]
  }
];
