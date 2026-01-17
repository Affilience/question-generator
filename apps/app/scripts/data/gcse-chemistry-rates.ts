import { SubtopicData } from '../bulk-seo-insert';

export const gcseChemistryRates: SubtopicData[] = [
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'rate-of-reaction',
      title: 'Rate of Reaction | GCSE Chemistry',
      meta_description: 'Master rate of reaction including measuring methods. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `The rate of reaction measures how quickly reactants are converted into products. It can be expressed as the amount of reactant used up or product formed per unit time. Understanding reaction rates is crucial in industrial chemistry, where controlling reaction speed affects efficiency and safety.

Rate of reaction can be calculated using the formula: rate = quantity of reactant used or product formed ÷ time. The quantity can be measured in various units depending on the method used - mass (grams), volume of gas (cm³), or concentration (mol/dm³). The time is typically measured in seconds or minutes.

Different reactions proceed at vastly different rates. Some reactions are almost instantaneous, like precipitation reactions or explosions. Others are extremely slow, like iron rusting or rock weathering, taking months or years. The rate of any given reaction can be changed by altering conditions such as temperature, concentration, surface area, or using a catalyst.

Measuring reaction rate requires monitoring how quickly reactants disappear or products appear. Common methods include measuring mass loss when a gas is produced (using a balance), measuring gas volume using a gas syringe or inverted measuring cylinder, measuring colour change using a colorimeter, or monitoring the time for a solution to become cloudy or change colour.

Graphs of rate data typically show concentration or mass against time. For reactions that produce gas, plotting volume of gas against time gives a curve that starts steep (fast rate) and gradually levels off as reactants are used up. The gradient of this curve at any point indicates the instantaneous rate of reaction at that moment.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by the rate of reaction and give the formula used to calculate it.',
        solution: `**Definition:**
The rate of reaction is how fast reactants are used up or products are formed [1 mark]
(Or: the change in amount of reactant/product per unit time)

**Formula:**
Rate = amount of reactant used (or product formed) ÷ time [1 mark]
(Or: Rate = change in quantity / time taken)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Describe two methods that could be used to measure the rate of a reaction that produces a gas.',
        solution: `**Method 1: Measuring gas volume**
- Collect the gas in a gas syringe or inverted measuring cylinder [1 mark]
- Record the volume of gas at regular time intervals
- Plot a graph of volume against time [1 mark]
- The gradient of the graph gives the rate

**Method 2: Measuring mass loss**
- Place the reaction vessel on a balance [1 mark]
- Record the mass at regular time intervals
- As gas escapes, the mass decreases
- Plot a graph of mass against time [1 mark]
- The rate is the gradient of the graph (mass lost per second)

Note: Must allow gas to escape (e.g., cotton wool plug to prevent splashing but let gas out)`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'The graph below shows the volume of gas produced over time for a reaction between magnesium and hydrochloric acid.\n\n[Graph shows curve starting at origin, rising steeply initially, then leveling off at 60 cm³ after 4 minutes]\n\nExplain the shape of this graph in terms of what is happening during the reaction.',
        solution: `**At the start (steep gradient):**
- Rate is fastest at the beginning [1 mark]
- Concentration of acid is highest
- Many particles available for collisions
- High frequency of successful collisions [1 mark]

**As reaction proceeds (gradient decreases):**
- Rate slows down over time
- Acid is being used up, so concentration decreases
- Fewer acid particles to collide with magnesium [1 mark]
- Frequency of successful collisions decreases

**At the end (line becomes horizontal):**
- Rate becomes zero
- Line levels off at 60 cm³
- No more gas is produced [1 mark]
- Reaction has finished
- One or both reactants have been completely used up [1 mark]
- (In this case, either all the magnesium or all the acid is used up)

**Summary:** The curve shows rate is proportional to concentration - rate decreases as reactants are consumed.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'collision-theory',
      title: 'Collision Theory | GCSE Chemistry',
      meta_description: 'Master collision theory including successful collisions and activation energy. GCSE Chemistry practice questions with solutions.',
      introduction: `Collision theory explains how chemical reactions occur and why reaction rates vary. For a reaction to happen, reactant particles must collide with each other. However, not all collisions lead to a reaction - collisions must meet certain conditions to be successful.

For a collision to be successful, particles must collide with sufficient energy. This minimum energy required is called the activation energy. If particles collide with less than the activation energy, they simply bounce apart without reacting. Only when particles have enough energy can bonds be broken and new bonds be formed.

Particles must also collide with the correct orientation. Even if particles have sufficient energy, if they don't collide at the right angle, the reaction may not occur. For example, in a reaction between two molecules, the reactive parts of each molecule must come into contact with each other.

Collision theory explains why certain factors affect reaction rates. Increasing temperature gives particles more kinetic energy, so more collisions exceed the activation energy threshold. Increasing concentration means more particles in a given volume, so collisions happen more frequently. Increasing surface area exposes more particles to collide with. Catalysts provide an alternative reaction pathway with lower activation energy.

The collision theory can be summarised as: reaction rate depends on (1) the frequency of collisions between reactant particles, and (2) the fraction of those collisions that are successful. Any factor that increases either of these will increase the rate of reaction.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'According to collision theory, what two conditions must be met for a collision between particles to result in a reaction?',
        solution: `**Two conditions for a successful collision:**

1. **Sufficient energy** [1 mark]
- Particles must collide with energy greater than or equal to the activation energy
- Activation energy is the minimum energy needed for reaction [1 mark]

2. **Correct orientation** [1 mark]
- Particles must collide at the correct angle
- Reactive parts of molecules must come into contact`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Use collision theory to explain why increasing the temperature increases the rate of a chemical reaction.',
        solution: `**Effect of temperature on reaction rate (collision theory):**

1. **More kinetic energy:**
- At higher temperatures, particles have more kinetic energy [1 mark]
- They move faster

2. **More frequent collisions:**
- Faster moving particles collide more often [1 mark]
- Increases the frequency of collisions

3. **More successful collisions:**
- More particles have energy ≥ activation energy [1 mark]
- Greater proportion of collisions are successful
- This is the main effect [1 mark]

**Overall:** Both more frequent collisions AND more of them being successful leads to faster reaction rate.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student investigates the reaction between marble chips and dilute hydrochloric acid at two different temperatures. Explain why the reaction at the higher temperature produces gas faster initially and reaches the same final volume of gas.',
        solution: `**Why gas is produced faster at higher temperature:**

At higher temperature:
- Particles have more kinetic energy [1 mark]
- Particles move faster, so collide more frequently
- More importantly, a greater proportion of collisions have energy ≥ activation energy [1 mark]
- More successful collisions per unit time
- Therefore faster rate of reaction and gas produced more quickly [1 mark]

**Why the same final volume of gas is produced:**

- The total amount of gas produced depends only on the amount of reactants [1 mark]
- Temperature doesn't change the amounts of marble chips or acid used
- If same amounts are used, the same amount of product forms
- Temperature only affects how fast equilibrium/completion is reached, not what the final amounts are [1 mark]

**Summary:**
- Temperature affects rate (how fast)
- Temperature doesn't affect total yield (how much)
- Same limiting reactant means same final volume`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'factors-affecting-rate',
      title: 'Factors Affecting Rate of Reaction | GCSE Chemistry',
      meta_description: 'Master factors affecting reaction rate including temperature, concentration and surface area. GCSE Chemistry practice questions.',
      introduction: `Several factors can change the rate of a chemical reaction: temperature, concentration (for solutions), pressure (for gases), surface area of solid reactants, and the presence of a catalyst. Understanding these factors helps chemists control reaction rates in industrial processes and laboratories.

Temperature has a significant effect on reaction rate. Increasing temperature by 10°C typically doubles the rate of reaction. This is because particles gain kinetic energy, move faster, collide more frequently, and more importantly, a greater proportion of collisions have sufficient energy to exceed the activation energy.

Concentration affects reaction rate for reactions in solution. Higher concentration means more particles in a given volume. This increases the frequency of collisions between reactant particles, leading to more successful collisions per unit time. In gas-phase reactions, increasing pressure has a similar effect by forcing more gas particles into a smaller volume.

Surface area is important for reactions involving solids. Breaking a solid into smaller pieces increases the total surface area exposed to the other reactant. More surface area means more particles are available to collide, so the reaction rate increases. This is why powdered reactants often react faster than large lumps.

Catalysts increase reaction rate by providing an alternative reaction pathway with a lower activation energy. This means more particles have sufficient energy to react successfully. Importantly, catalysts are not used up in the reaction - they can be recovered unchanged at the end. Different reactions require different catalysts; there is no universal catalyst.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 4,
        content: 'State four factors that affect the rate of a chemical reaction.',
        solution: `**Four factors affecting rate of reaction:**

1. **Temperature** [1 mark]
- Higher temperature = faster rate

2. **Concentration** (of solutions) or **pressure** (of gases) [1 mark]
- Higher concentration/pressure = faster rate

3. **Surface area** (of solid reactants) [1 mark]
- Greater surface area = faster rate
- (Smaller pieces/powder vs large lumps)

4. **Catalyst** [1 mark]
- Catalyst present = faster rate`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain why using powdered calcium carbonate instead of large marble chips causes a faster reaction with hydrochloric acid.',
        solution: `**Why powder reacts faster:**

1. **Greater surface area:**
- Powder has much larger total surface area than large chips [1 mark]
- Same mass of powder is broken into many more pieces
- More surfaces are exposed to the acid [1 mark]

2. **Effect on collisions:**
- More particles of calcium carbonate are exposed to acid particles
- This increases the frequency of collisions between reactants [1 mark]

3. **Result:**
- More successful collisions per unit time
- Faster rate of reaction [1 mark]

**Note:** The total amount of product formed is the same - only the rate at which it forms is different.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'A student investigates how concentration affects the rate of reaction between sodium thiosulfate solution and hydrochloric acid. Describe how this investigation could be carried out and explain the expected results.',
        solution: `**Method:**
1. Draw a cross on paper and place a conical flask over it
2. Add sodium thiosulfate solution to the flask [1 mark]
3. Add hydrochloric acid and start timing
4. Record the time taken for the cross to disappear (due to sulphur precipitate forming) [1 mark]
5. Repeat with different concentrations of sodium thiosulfate (keeping acid concentration constant)
6. Keep temperature and volumes constant

**Variables:**
- Independent: concentration of sodium thiosulfate
- Dependent: time for cross to disappear
- Control: temperature, volume of solutions, acid concentration

**Expected results:**
- Higher concentration = shorter time for cross to disappear [1 mark]
- This indicates a faster rate of reaction

**Explanation using collision theory:**
- Higher concentration means more sodium thiosulfate particles in same volume [1 mark]
- More frequent collisions with acid particles
- More successful collisions per unit time
- Faster rate of sulphur formation [1 mark]

**Graph:** Plotting 1/time against concentration would give a straight line through the origin (rate is proportional to concentration).`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'catalysts',
      title: 'Catalysts | GCSE Chemistry',
      meta_description: 'Master catalysts including how they work and their importance in industry. GCSE Chemistry practice questions with solutions.',
      introduction: `A catalyst is a substance that increases the rate of a chemical reaction without being used up in the process. The catalyst can be recovered chemically unchanged at the end of the reaction and can be used repeatedly. Catalysts are highly specific - different reactions require different catalysts.

Catalysts work by providing an alternative reaction pathway that has a lower activation energy than the uncatalysed reaction. This means more particles have sufficient energy to react successfully when they collide. The catalyst participates in the reaction mechanism but is regenerated before the reaction is complete.

In industry, catalysts are extremely important because they make processes more economical and environmentally friendly. The Haber process uses an iron catalyst to manufacture ammonia. The Contact process uses a vanadium(V) oxide catalyst to make sulfuric acid. Without these catalysts, the reactions would be far too slow to be commercially viable.

Catalysts offer several advantages in industrial processes. They allow reactions to occur at lower temperatures, saving energy and reducing costs. They speed up production, increasing output. They reduce the need for high pressures in some reactions. Because they aren't consumed, a small amount of catalyst can enable the production of large quantities of product.

Enzymes are biological catalysts found in living organisms. They catalyse the biochemical reactions essential for life, such as digestion and respiration. Like other catalysts, enzymes are not used up in reactions. However, they are highly specific and only work within certain temperature and pH ranges, after which they can be denatured.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Define the term catalyst and state one example of a catalyst used in industry.',
        solution: `**Definition of catalyst:**
A substance that increases the rate of a chemical reaction without being used up / chemically unchanged at the end [1 mark]

**How it works:**
Provides an alternative reaction pathway with lower activation energy [1 mark]

**One industrial example:**
Any one of: [1 mark]
- Iron in the Haber process (making ammonia)
- Vanadium(V) oxide in the Contact process (making sulphuric acid)
- Platinum/rhodium in catalytic converters
- Nickel in margarine manufacture (hydrogenation)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'Explain how a catalyst increases the rate of a chemical reaction in terms of activation energy and particles.',
        solution: `**How catalysts increase rate:**

1. **Alternative pathway:**
- Catalyst provides a different reaction pathway/mechanism [1 mark]
- This pathway has a lower activation energy than the uncatalysed reaction [1 mark]

2. **Effect on particles:**
- More particles have energy greater than or equal to the new, lower activation energy [1 mark]
- Greater proportion of collisions are successful
- More particles can react per unit time [1 mark]

**Note:**
- The catalyst does not change the total energy change of the reaction
- It only changes how fast equilibrium/products are reached
- The same amount of product is formed`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Discuss the economic and environmental benefits of using catalysts in industrial processes.',
        solution: `**Economic benefits:**

1. **Lower energy costs:**
- Catalysts allow reactions to occur at lower temperatures [1 mark]
- Less energy needed to heat reactants
- Significant cost savings in large-scale production

2. **Faster production:**
- Reactions happen faster with catalysts [1 mark]
- More product made in same time
- Increases factory output and profits

3. **Reusability:**
- Catalysts are not used up in reactions
- Same catalyst can be used repeatedly
- Only need to replace catalyst when it becomes 'poisoned' or degraded

**Environmental benefits:**

1. **Reduced energy consumption:**
- Lower temperatures mean less fossil fuel burned for heating [1 mark]
- Reduces carbon dioxide emissions
- Lower carbon footprint

2. **Reduced waste:**
- Better yields mean less waste products
- More efficient use of raw materials [1 mark]

3. **Cleaner reactions:**
- Catalytic converters reduce harmful emissions from vehicles
- Some catalysts enable reactions that would otherwise require harsh chemicals [1 mark]

**Overall:** Catalysts make industrial chemistry more sustainable and cost-effective.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'reversible-reactions',
      title: 'Reversible Reactions | GCSE Chemistry',
      meta_description: 'Master reversible reactions and dynamic equilibrium. GCSE Chemistry practice questions with step-by-step solutions.',
      introduction: `In some chemical reactions, the products can react together to form the original reactants again. These are called reversible reactions and are shown using the equilibrium symbol ⇌ instead of a single arrow. Both the forward and backward reactions happen simultaneously.

A common example of a reversible reaction is the thermal decomposition of ammonium chloride: NH₄Cl(s) ⇌ NH₃(g) + HCl(g). When heated, ammonium chloride decomposes into ammonia and hydrogen chloride gases. When these gases cool, they recombine to form solid ammonium chloride again.

Another example is the hydration of copper sulfate: CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(l). Hydrated copper sulfate (blue crystals) can be heated to drive off water, leaving anhydrous copper sulfate (white powder). Adding water to anhydrous copper sulfate causes it to become hydrated again, turning blue and releasing heat.

The direction of a reversible reaction depends on conditions such as temperature and pressure. If the forward reaction is exothermic, then the backward reaction must be endothermic (and vice versa). The energy released in one direction equals the energy absorbed in the reverse direction.

If a reversible reaction occurs in a closed system (where nothing can enter or leave), it will eventually reach equilibrium - a state where the forward and backward reactions are happening at the same rate. At equilibrium, the concentrations of reactants and products remain constant, even though both reactions continue to occur.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: 'State what is meant by a reversible reaction and write the symbol used to show that a reaction is reversible.',
        solution: `**Definition:**
A reversible reaction is one where the products can react to form the original reactants again [1 mark]
(The reaction can go both forwards and backwards)

**Symbol:**
⇌ (double-headed/equilibrium arrow) [1 mark]`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'The decomposition of hydrated copper sulfate is a reversible reaction:\n\nCuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O\n(blue)          (white)\n\nDescribe the observations when hydrated copper sulfate is heated and when water is added to anhydrous copper sulfate.',
        solution: `**When hydrated copper sulfate is heated:**
- Blue crystals change to white powder [1 mark]
- Water is driven off as steam
- This is thermal decomposition (forward reaction) [1 mark]

**When water is added to anhydrous copper sulfate:**
- White powder turns blue [1 mark]
- Heat is released / mixture gets warm
- This is hydration (backward reaction)
- Water is taken up by the copper sulfate [1 mark]

**Note:** The colour change from white to blue is often used as a test for water.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'In the reversible reaction A + B ⇌ C + D, the forward reaction is exothermic. Explain what this tells us about the backward reaction and describe what would happen if this reaction reached equilibrium in a closed system.',
        solution: `**Energy in the backward reaction:**
- If forward reaction is exothermic, backward reaction must be endothermic [1 mark]
- Energy released in forward reaction = energy absorbed in backward reaction
- Energy is conserved overall [1 mark]

**What happens at equilibrium:**

1. **Rate equality:**
- At equilibrium, forward reaction rate = backward reaction rate [1 mark]
- Both reactions continue to happen
- Called dynamic equilibrium

2. **Constant concentrations:**
- Concentrations of A, B, C, and D remain constant [1 mark]
- They don't change because rates are equal
- Not necessarily equal concentrations, but constant

3. **Closed system requirement:**
- Nothing enters or leaves the system
- Allows equilibrium to be established
- Open system would not reach true equilibrium [1 mark]

**Important:** At equilibrium, reactions haven't stopped - they're just happening at equal rates in both directions (dynamic, not static).`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'equilibrium',
      title: 'Chemical Equilibrium | GCSE Chemistry',
      meta_description: 'Master chemical equilibrium including position of equilibrium. GCSE Chemistry practice questions with solutions.',
      introduction: `When a reversible reaction takes place in a closed system, it eventually reaches a state of dynamic equilibrium. At equilibrium, the rate of the forward reaction equals the rate of the backward reaction, and the concentrations of reactants and products remain constant (though not necessarily equal).

The equilibrium is described as dynamic because both reactions continue to occur - molecules are constantly being converted from reactants to products and back again. It's a balance of two opposing processes, not a state where nothing is happening. The macroscopic properties (like concentrations) stay constant because the two rates are equal.

The position of equilibrium describes the relative amounts of reactants and products at equilibrium. If the position lies to the right, there are more products than reactants at equilibrium. If it lies to the left, there are more reactants than products. The exact position depends on the particular reaction and the conditions.

Changing conditions can shift the position of equilibrium. If a change is made to a system at equilibrium, the equilibrium will shift to counteract that change - this is Le Chatelier's principle. Changing temperature, pressure (for reactions involving gases), or concentration can all affect the equilibrium position.

Understanding equilibrium is crucial for industrial processes. Chemists manipulate conditions to shift equilibrium towards the desired products, maximising yield. However, there are often trade-offs - conditions that favour a high yield might give a slow rate, so industrial processes must balance yield against rate for economic efficiency.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 3,
        content: 'Explain what is meant by dynamic equilibrium.',
        solution: `**Dynamic equilibrium:**

1. **Equal rates:**
- The rate of the forward reaction equals the rate of the backward reaction [1 mark]

2. **Constant concentrations:**
- Concentrations of reactants and products remain constant [1 mark]
- (But not necessarily equal)

3. **Dynamic (not static):**
- Both reactions continue to occur [1 mark]
- Particles are constantly reacting in both directions
- No overall change because the two rates balance out`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'A system at equilibrium is described as having the "position of equilibrium to the right". Explain what this means about the concentrations of reactants and products.',
        solution: `**Position of equilibrium to the right:**

**What it means:**
- There are more products than reactants at equilibrium [1 mark]
- The equilibrium mixture contains a higher concentration of products [1 mark]
- The forward reaction is favoured over the backward reaction [1 mark]

**Implications:**
- If you started with pure reactants, most would be converted to products
- A high proportion of reactants becomes products before equilibrium is reached
- This would be a favourable position for producing the desired products [1 mark]

**Note:** The exact ratio depends on the equilibrium constant and conditions - "to the right" means products predominate, but doesn't specify exact amounts.`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: 'Describe the conditions needed for a reaction to reach equilibrium and explain why equilibrium cannot be achieved in an open system.',
        solution: `**Conditions needed for equilibrium:**

1. **Reversible reaction:**
- The reaction must be able to go in both directions [1 mark]
- Products must be able to reform reactants

2. **Closed system:**
- Nothing can enter or leave the system [1 mark]
- All reactants and products remain in the container

3. **Constant conditions:**
- Temperature, pressure (if applicable) must be constant
- No external changes that would disturb the system

**Why equilibrium cannot be achieved in an open system:**

1. **Loss of products/reactants:**
- In an open system, products (or reactants) can escape [1 mark]
- If gases escape, they cannot participate in the backward reaction

2. **No balance possible:**
- Equilibrium requires equal forward and backward rates
- If products escape, backward rate cannot match forward rate [1 mark]

3. **Reaction goes to completion:**
- Instead of equilibrium, the reaction proceeds until one reactant is used up
- No dynamic balance is established [1 mark]

**Example:** If ammonia escapes from the Haber process vessel, the backward reaction cannot occur, so equilibrium is never reached.`,
        display_order: 3
      }
    ]
  },
  {
    content: {
      level: 'gcse',
      subject: 'chemistry',
      exam_board: 'aqa',
      topic_slug: 'rates-of-reaction',
      subtopic_slug: 'le-chatelier',
      title: "Le Chatelier's Principle | GCSE Chemistry",
      meta_description: "Master Le Chatelier's principle and shifting equilibrium position. GCSE Chemistry practice questions with solutions.",
      introduction: `Le Chatelier's principle states that if a system at equilibrium is subjected to a change, the equilibrium will shift in a direction that tends to counteract that change. This principle helps predict how changes in conditions will affect the position of equilibrium.

If the concentration of a reactant is increased, the equilibrium shifts to the right (towards products) to use up the extra reactant. If a product is removed, equilibrium also shifts right to replace it. Conversely, removing a reactant shifts equilibrium left, and adding a product shifts it left.

For reactions involving gases, changing pressure affects equilibrium if there are different numbers of gas molecules on each side. Increasing pressure shifts equilibrium towards the side with fewer gas molecules (smaller volume). Decreasing pressure shifts it towards the side with more molecules.

Temperature changes affect equilibrium differently depending on whether the forward reaction is exothermic or endothermic. Increasing temperature favours the endothermic direction (the reaction that absorbs heat). Decreasing temperature favours the exothermic direction.

In industrial processes, Le Chatelier's principle guides the choice of conditions. For example, in the Haber process (N₂ + 3H₂ ⇌ 2NH₃), high pressure and low temperature would maximise ammonia yield. However, low temperature makes the reaction too slow, so a compromise temperature is used along with a catalyst to achieve a reasonable rate.`
    },
    questions: [
      {
        difficulty: 'easy',
        marks: 2,
        content: "State Le Chatelier's principle.",
        solution: `**Le Chatelier's principle:**
If a system at equilibrium is subjected to a change, the equilibrium will shift in the direction that tends to counteract/oppose that change. [2 marks]

(Or: The position of equilibrium shifts to minimise the effect of any change made to the system.)`,
        display_order: 1
      },
      {
        difficulty: 'medium',
        marks: 4,
        content: 'For the equilibrium: N₂O₄(g) ⇌ 2NO₂(g) (forward reaction is endothermic)\n\nPredict and explain the effect on the position of equilibrium of:\n(a) increasing the temperature\n(b) increasing the pressure',
        solution: `**(a) Increasing temperature:**
- Equilibrium shifts to the RIGHT (towards NO₂) [1 mark]
- The forward reaction is endothermic (absorbs heat)
- Increasing temperature favours the endothermic direction
- System shifts to use up the extra heat / counteract the change [1 mark]

**(b) Increasing pressure:**
- Equilibrium shifts to the LEFT (towards N₂O₄) [1 mark]
- Left side has 1 mole of gas, right side has 2 moles
- Increasing pressure favours the side with fewer gas molecules
- System shifts to reduce pressure / counteract the change [1 mark]`,
        display_order: 2
      },
      {
        difficulty: 'hard',
        marks: 5,
        content: "In the Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (forward reaction is exothermic)\n\nUse Le Chatelier's principle to explain why a temperature of about 450°C and a pressure of about 200 atmospheres are used, even though they don't give the maximum yield.",
        solution: `**Conditions analysis using Le Chatelier's principle:**

**Pressure:**
- Left side: 4 moles of gas (1 N₂ + 3 H₂)
- Right side: 2 moles of gas (2 NH₃)
- High pressure (200 atm) favours forward reaction [1 mark]
- Shifts equilibrium towards fewer gas molecules (towards NH₃)
- Higher pressure = higher yield of ammonia

**Why not even higher pressure:**
- Very high pressures are expensive (strong equipment needed)
- Costs outweigh extra yield benefits
- 200 atm is a compromise [1 mark]

**Temperature:**
- Forward reaction is exothermic
- Low temperature would favour forward reaction / higher yield [1 mark]
- However, low temperature gives very slow rate of reaction

**Why 450°C is used:**
- This is a compromise temperature [1 mark]
- Low enough to give reasonable yield
- High enough to give acceptable rate
- Too low = economically slow
- Too high = low yield

**Role of catalyst (iron):**
- Speeds up reaction without affecting equilibrium position
- Allows lower temperature to be used while maintaining reasonable rate [1 mark]
- Does not affect yield, only rate`,
        display_order: 3
      }
    ]
  }
];
