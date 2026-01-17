import { SubtopicData } from '../bulk-seo-insert';

export const gcseBiologyOrganisation: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'organisation',
      subtopic_slug: 'enzymes',
      title: 'Enzymes | GCSE Biology',
      meta_description: 'Master enzyme action, factors affecting enzymes, and biological catalysis. GCSE Biology practice questions with solutions.',
      introduction: `Enzymes are biological catalysts that speed up chemical reactions in living organisms. Without enzymes, the reactions necessary for life would occur too slowly to sustain living processes. Each enzyme catalyses a specific reaction or type of reaction.

Enzymes are proteins with a specific three-dimensional shape. The active site is a region where substrate molecules bind. The shape of the active site is complementary to the shape of the substrate—they fit together like a lock and key. This explains why enzymes are specific to particular substrates.

Several factors affect enzyme activity. Temperature affects reaction rate: as temperature increases, molecules move faster and collisions increase, speeding the reaction. However, above the optimum temperature, the enzyme denatures—the active site changes shape and can no longer bind the substrate. pH also affects enzyme shape; each enzyme has an optimum pH.

Digestive enzymes break down large food molecules into smaller, soluble molecules that can be absorbed. Amylase breaks down starch into sugars, proteases break down proteins into amino acids, and lipases break down fats into fatty acids and glycerol. These enzymes are produced by digestive organs and secreted into the gut.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Explain why enzymes are described as biological catalysts.',
        solution: `**Why enzymes are biological catalysts:**

- **Biological:** They are produced by living organisms and are made of protein

- **Catalysts:** They speed up chemical reactions without being used up themselves

**Additional points:**
- Enzymes can be used repeatedly
- They lower the activation energy needed for reactions
- Without enzymes, reactions in cells would be too slow to sustain life`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why enzymes only work with specific substrates, using the lock and key model.',
        solution: `**The lock and key model:**

1. **Active site shape:**
   - Each enzyme has a specific **3D shape**
   - Part of this shape is the **active site**
   - The active site has a particular shape

2. **Substrate specificity:**
   - The substrate has a specific shape
   - This shape is **complementary** to the active site
   - The substrate fits into the active site like a key fits a lock

3. **Why it's specific:**
   - Only substrates with the **correct shape** can fit
   - Other molecules cannot bind (wrong shape)
   - The enzyme can only catalyse reactions involving its specific substrate

4. **Example:**
   - Amylase has an active site complementary to starch
   - Starch binds to amylase's active site
   - Proteins cannot bind (different shape)
   - Therefore amylase only breaks down starch, not proteins`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'The graph shows how the rate of an enzyme-controlled reaction changes with temperature. Explain the shape of the curve, including what happens at temperatures above the optimum.',
        solution: `**Explanation of the curve shape:**

**As temperature increases (up to optimum):**
1. Rate of reaction **increases**
2. Higher temperature gives molecules **more kinetic energy**
3. Substrate and enzyme molecules **move faster**
4. More frequent **collisions** between enzyme and substrate
5. More enzyme-substrate complexes form per unit time
6. Reaction rate increases

**At the optimum temperature:**
- Rate is at its **maximum**
- Highest frequency of successful collisions
- For human enzymes, this is typically around 37°C

**Above the optimum temperature:**
1. Rate **decreases rapidly**
2. The enzyme is **denaturing**
3. Bonds holding the enzyme's 3D structure break
4. The **active site changes shape**
5. The substrate **no longer fits** the active site
6. Fewer enzyme-substrate complexes can form
7. Eventually the enzyme is completely denatured and rate drops to zero

**Key point:** The decrease is NOT due to fewer collisions—there are more collisions at higher temperatures. The decrease is because the enzyme's shape is permanently altered.

**Graph features:**
- Gradual increase up to optimum
- Sharp decrease after optimum (denaturation is rapid)`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'organisation',
      subtopic_slug: 'digestive-system',
      title: 'Digestive System | GCSE Biology',
      meta_description: 'Learn about the digestive system, organs and digestion process. GCSE Biology practice questions with detailed solutions.',
      introduction: `The digestive system breaks down food into small, soluble molecules that can be absorbed into the blood and used by the body. This involves both mechanical digestion (physical breakdown) and chemical digestion (breakdown by enzymes).

Food enters through the mouth where teeth mechanically break it down and amylase in saliva begins starch digestion. The oesophagus moves food to the stomach by peristalsis—waves of muscle contraction. The stomach churns food and contains hydrochloric acid and protease enzymes to begin protein digestion.

The small intestine is where most digestion and absorption occur. Bile from the liver (stored in the gall bladder) emulsifies fats, increasing their surface area for lipase to work on. The pancreas produces amylase, protease, and lipase which complete digestion. The small intestine lining has villi—finger-like projections that increase surface area for absorption.

The large intestine absorbs water from undigested food, producing faeces. Understanding the digestive system requires knowing which enzymes work in which locations, what conditions they need, and how the structure of the intestines is adapted for efficient absorption.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the function of the following in digestion: (a) amylase, (b) protease.',
        solution: `**(a) Amylase:**
- Breaks down **starch** into **sugars** (maltose)
- Produced in salivary glands and pancreas

**(b) Protease:**
- Breaks down **proteins** into **amino acids**
- Produced in the stomach and pancreas`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain the role of bile in fat digestion, including where it is produced and stored.',
        solution: `**Where bile is produced and stored:**
- Bile is produced in the **liver**
- Bile is stored in the **gall bladder**
- Released into the **small intestine**

**Role in fat digestion:**

1. **Emulsification:**
   - Bile **emulsifies** fats (breaks large fat droplets into smaller droplets)
   - This is **physical** breakdown, not chemical

2. **Why this helps:**
   - Smaller droplets have a **larger surface area**
   - More surface area for **lipase** to work on
   - Lipase can break down fats **faster**

3. **Neutralisation:**
   - Bile is **alkaline**
   - Neutralises stomach acid entering the small intestine
   - Creates the **correct pH** for intestinal enzymes

**Note:** Bile does NOT chemically digest fat—it prepares fat for digestion by lipase.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Describe three ways in which the small intestine is adapted for efficient absorption of digested food molecules.',
        solution: `**Three adaptations of the small intestine:**

**1. Villi (finger-like projections):**
- Lining has millions of villi
- Villi increase the **surface area** for absorption
- More area for absorption = faster/more efficient absorption
- Each villus is covered in microvilli (further increasing surface area)

**2. Thin walls:**
- Villi have walls only **one cell thick**
- This provides a **short diffusion distance**
- Digested food molecules can cross quickly into the blood
- Less distance = faster diffusion

**3. Good blood supply:**
- Each villus contains a network of **capillaries**
- Blood constantly flows through, carrying absorbed nutrients away
- This maintains a **concentration gradient**
- Steep gradient = faster diffusion into blood

**Additional adaptation:**

**4. Lacteals:**
- Each villus contains a lacteal (part of lymphatic system)
- Absorbs digested fats (fatty acids and glycerol)
- Fats are transported via lymph before entering blood

**Summary:** All adaptations work together to maximise the rate of absorption by increasing surface area, reducing diffusion distance, and maintaining steep concentration gradients.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'organisation',
      subtopic_slug: 'circulatory-system',
      title: 'Circulatory System | GCSE Biology',
      meta_description: 'Learn about the heart, blood vessels and double circulation. GCSE Biology practice questions with step-by-step solutions.',
      introduction: `The circulatory system transports substances around the body. In humans, this is a double circulatory system: blood passes through the heart twice for each complete circuit of the body—once through the lungs (pulmonary circulation) and once through the rest of the body (systemic circulation).

The heart is a muscular pump with four chambers. The right atrium receives deoxygenated blood from the body via the vena cava. Blood passes to the right ventricle, which pumps it to the lungs via the pulmonary artery. Oxygenated blood returns to the left atrium via the pulmonary vein, then to the left ventricle, which pumps it around the body through the aorta.

The left ventricle has a thicker muscle wall than the right because it needs to pump blood at higher pressure to reach all parts of the body, whereas the right ventricle only pumps blood to the nearby lungs. Valves in the heart prevent backflow of blood.

Three types of blood vessels have different structures suited to their functions. Arteries have thick, muscular walls to withstand high pressure and carry blood away from the heart. Veins have thinner walls, larger lumens, and valves to carry blood back to the heart at low pressure. Capillaries have walls one cell thick for efficient exchange of substances with tissues.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the blood vessel that carries oxygenated blood away from the heart to the body, and the blood vessel that brings deoxygenated blood back to the heart.',
        solution: `**Oxygenated blood away from heart to body:**
- **Aorta**

**Deoxygenated blood back to heart:**
- **Vena cava** (superior and inferior)

**Note:** The pulmonary artery carries deoxygenated blood to the lungs (an exception—an artery with deoxygenated blood).`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain why the wall of the left ventricle is thicker than the wall of the right ventricle.',
        solution: `**Why the left ventricle has a thicker wall:**

1. **The left ventricle pumps blood further:**
   - Left ventricle pumps blood to the **whole body** (systemic circulation)
   - Right ventricle only pumps blood to the **lungs** (nearby)

2. **Higher pressure needed:**
   - Pumping blood around the entire body requires **high pressure**
   - The lungs are close to the heart, requiring **lower pressure**
   - Too much pressure to the lungs would damage the delicate capillaries

3. **Thicker muscle generates more force:**
   - The thicker muscle wall can **contract more forcefully**
   - More force creates higher pressure
   - This ensures blood reaches all body tissues

**Summary:** The left ventricle has a thicker wall because it needs to generate more force to pump blood at higher pressure to the whole body, while the right ventricle only needs to pump blood to the nearby lungs at lower pressure.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Compare the structure of arteries, veins, and capillaries, and explain how each is adapted to its function.',
        solution: `**Comparison and adaptations:**

| Feature | Arteries | Veins | Capillaries |
|---------|----------|-------|-------------|
| Wall thickness | Thick | Thin | One cell thick |
| Muscle layer | Thick, muscular | Thin muscle | No muscle |
| Lumen | Small | Large | Very small (one RBC width) |
| Valves | No (except in aorta) | Yes | No |
| Blood pressure | High | Low | Low |

**Arteries - adaptations:**
- **Thick, muscular walls** withstand high pressure from heart pumping
- **Elastic fibres** stretch and recoil to smooth blood flow
- **Small lumen** maintains high pressure
- Carry blood **away** from heart

**Veins - adaptations:**
- **Thin walls** - don't need to withstand high pressure
- **Large lumen** - reduces resistance to blood flow at low pressure
- **Valves** - prevent backflow of blood
- Blood flow helped by **muscle contractions** around veins

**Capillaries - adaptations:**
- **One cell thick walls** - short diffusion distance for efficient exchange
- **Very narrow** - slow blood flow allows time for exchange
- **Large network** - provides large surface area for exchange
- Close to every cell in the body`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'organisation',
      subtopic_slug: 'blood',
      title: 'Blood | GCSE Biology',
      meta_description: 'Learn about blood components and their functions. GCSE Biology practice questions with detailed solutions.',
      introduction: `Blood is a tissue made of cells suspended in liquid plasma. Each component has specific functions essential for life. Blood transports substances, helps fight infection, and maintains stable conditions in the body.

Plasma is the liquid component, making up about 55% of blood volume. It transports dissolved substances including glucose, amino acids, carbon dioxide (as bicarbonate ions), urea (a waste product), hormones, and antibodies. Plasma also distributes heat around the body.

Red blood cells (erythrocytes) transport oxygen from the lungs to the body's cells. They contain haemoglobin, which binds oxygen in the lungs and releases it in tissues. Red blood cells have no nucleus, maximising space for haemoglobin. Their biconcave disc shape provides a large surface area for gas exchange.

White blood cells (leucocytes) are part of the immune system. Phagocytes engulf and digest pathogens (phagocytosis). Lymphocytes produce antibodies that are specific to particular pathogens. Platelets are cell fragments that help blood clot at wounds, preventing blood loss and pathogen entry.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'Name the component of blood that transports oxygen and describe one adaptation it has for this function.',
        solution: `**Component:** Red blood cells (erythrocytes)

**One adaptation:**

**Contain haemoglobin:**
- Haemoglobin is a protein that **binds to oxygen**
- In the lungs, oxygen binds to haemoglobin forming **oxyhaemoglobin**
- In body tissues, oxygen is released

(Other acceptable adaptations: no nucleus - more space for haemoglobin; biconcave shape - large surface area for gas exchange)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Describe two ways in which white blood cells defend the body against pathogens.',
        solution: `**Two ways white blood cells defend the body:**

**1. Phagocytosis (by phagocytes):**
- Phagocytes **detect** pathogens
- They **engulf** the pathogen (surround it)
- The pathogen is taken into the cell inside a vacuole
- **Enzymes** in the phagocyte **digest** the pathogen
- The pathogen is destroyed

**2. Antibody production (by lymphocytes):**
- Lymphocytes detect **antigens** on the surface of pathogens
- They produce **antibodies** specific to that antigen
- Antibodies bind to pathogens and:
  - Mark them for destruction by phagocytes
  - Clump them together (agglutination)
  - Neutralise toxins
- Memory cells remain for future protection`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Red blood cells are described as being adapted for their function of transporting oxygen. Explain three ways in which the structure of red blood cells makes them efficient at this function.',
        solution: `**Three adaptations of red blood cells:**

**1. Contain haemoglobin:**
- Red blood cells are **packed with haemoglobin** (about 280 million molecules per cell)
- Haemoglobin binds oxygen in the lungs (high oxygen concentration)
- Forms **oxyhaemoglobin**: Hb + O₂ ⇌ HbO₂
- Releases oxygen in tissues (low oxygen concentration)
- One haemoglobin can carry 4 oxygen molecules
- Allows efficient **oxygen loading and unloading**

**2. No nucleus:**
- Mature red blood cells have **no nucleus**
- This provides **more space** for haemoglobin
- Can carry more oxygen per cell
- Increases efficiency of oxygen transport

**3. Biconcave disc shape:**
- Red blood cells have an **indent on both sides** (not spherical)
- This increases **surface area to volume ratio**
- More surface area for oxygen to **diffuse across**
- Faster gas exchange
- Flexible shape allows them to **squeeze through narrow capillaries**

**Additional point:**

**4. Small size:**
- Red blood cells are very small (~7 μm diameter)
- Can travel through the narrowest capillaries
- Brings oxygen close to every cell
- Short diffusion distance from capillary to tissue`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'biology',
      exam_board: 'aqa',
      topic_slug: 'organisation',
      subtopic_slug: 'plant-tissues',
      title: 'Plant Tissues | GCSE Biology',
      meta_description: 'Learn about plant tissue systems including xylem and phloem. GCSE Biology practice questions with solutions.',
      introduction: `Plants have specialised tissues organised into tissue systems for transport, support, and photosynthesis. Understanding how these tissues work together explains how plants function as whole organisms.

The transport system consists of xylem and phloem. Xylem transports water and mineral ions from roots to leaves in one direction only. Xylem vessels are dead, hollow tubes with lignified walls that provide support. The transpiration stream pulls water up through xylem.

Phloem transports dissolved sugars (sucrose) and other organic compounds from where they are made (sources, like leaves) to where they are needed (sinks, like roots and growing tips). This is called translocation. Unlike xylem, phloem is made of living cells: sieve tube elements with companion cells.

Leaves are organs containing several tissues. The upper and lower epidermis protect the leaf. The palisade mesophyll contains many chloroplasts for photosynthesis. The spongy mesophyll has air spaces for gas exchange. Stomata (with guard cells) allow gas exchange and control water loss. Vascular bundles contain xylem and phloem.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State the function of xylem and phloem in plants.',
        solution: `**Xylem function:**
- Transports **water** and dissolved **mineral ions**
- Transport is from roots to all other parts of the plant
- Also provides **structural support**

**Phloem function:**
- Transports dissolved **sugars** (mainly sucrose)
- Transports sugars from where they are made (leaves) to where they are needed (e.g., roots, growing tips, storage organs)
- This process is called **translocation**`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 3,
        content: 'Explain how the structure of xylem vessels is adapted for their function.',
        solution: `**Xylem structural adaptations:**

**1. Dead, hollow tubes:**
- Cells die, leaving **empty tubes**
- No cytoplasm or nucleus to block water flow
- Provides an **unobstructed pathway** for water

**2. Walls strengthened with lignin:**
- Lignin is a **waterproof, strong** material
- Makes vessels rigid and prevents collapse
- Provides **structural support** for the plant
- Waterproofing ensures water stays in the vessels

**3. No end walls between cells:**
- End walls break down, forming **continuous tubes**
- Water can flow freely without barriers
- Reduces resistance to water flow

**4. Narrow diameter:**
- Creates **capillary action** that helps draw water up
- Works together with transpiration pull

**Summary:** Xylem is adapted to transport water efficiently upward and provide support.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 4,
        content: 'Compare the transport of substances in xylem and phloem, including the substances transported, direction of movement, whether cells are alive or dead, and energy requirements.',
        solution: `**Comparison of xylem and phloem:**

| Feature | Xylem | Phloem |
|---------|-------|--------|
| **Substances transported** | Water and mineral ions | Dissolved sugars (sucrose) and amino acids |
| **Direction of movement** | One way only: roots to leaves (upward) | Two-way: from sources to sinks (up or down) |
| **Cells alive/dead** | Dead cells (no cytoplasm) | Living cells (sieve tubes + companion cells) |
| **Energy required** | No - passive process | Yes - active transport (requires ATP) |
| **Mechanism** | Transpiration pull and root pressure | Translocation (active loading at source) |

**Additional details:**

**Xylem:**
- Movement driven by **evaporation** from leaves (transpiration)
- Creates negative pressure (suction) pulling water up
- Cohesion between water molecules maintains continuous column
- No energy from plant needed

**Phloem:**
- Sugars actively loaded into phloem at source (e.g., leaves)
- Creates high concentration of sucrose
- Water follows by **osmosis**, creating pressure
- Pressure pushes contents towards sinks
- Requires energy for active loading (companion cells have many mitochondria)`,
        display_order: 3
      }
    ]
  }
];
