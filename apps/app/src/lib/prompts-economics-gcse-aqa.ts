// AQA GCSE Economics (8136) Question Generation Prompts
// Based on analysis of actual AQA past papers (June 2022, 2023, 2024)
// and official mark schemes
// Reference: https://www.aqa.org.uk/subjects/economics/gcse/economics-8136

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
  getMarkRangeForDifficulty,
} from './prompts-common';

// ============================================================================
// AQA GCSE ECONOMICS SPECIFICATION DETAILS (8136)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_GCSE_ECON_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Economics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of economic concepts and issues | 35% |
| **AO2** | Apply knowledge and understanding of economic concepts and issues to a variety of contexts | 35% |
| **AO3** | Analyse and evaluate economic evidence and issues to demonstrate understanding of economic behaviour and how it is affected by changes, making reasoned judgements and drawing conclusions | 30% |

### Paper Structure (Total: 160 marks)
| Paper | Title | Time | Marks | Weighting |
|-------|-------|------|-------|-----------|
| **Paper 1** | How Markets Work | 1h 45m | 80 | 50% |
| **Paper 2** | How the Economy Works | 1h 45m | 80 | 50% |

### Question Format
Both papers contain:
- **Section A**: 10 multiple choice questions (10 marks) followed by calculation, short and extended response questions (30 marks)
- **Section B**: Five mixed questions including calculations and extended responses (40 marks)

### Paper 1 Topics (How Markets Work)
- Topic 1: Economic foundations
- Topic 2: The role of markets
- Topic 3: Market failure
- Topic 4: Production, costs, revenue and profit
- Topic 5: Competitive and concentrated markets
- Topic 6: The labour market

### Paper 2 Topics (How the Economy Works)
- Topic 7: Introduction to the national economy
- Topic 8: Government objectives
- Topic 9: How the government manages the economy
- Topic 10: International trade
- Topic 11: The role of money and financial markets

### Key Features
- At least 10% of marks reward quantitative skills
- Both papers require extended responses
- Requires application of knowledge across the course
`;

const AQA_GCSE_ECON_QUESTION_TEMPLATES = `
## Authentic AQA GCSE Economics Question Formats (From Past Papers)

### Type 1: Multiple Choice (1 mark)
Format: "Which one of the following..."
**Real examples:**
- "Which one of the following is an example of a public good? A Street lighting, B A car, C A pair of shoes, D A cinema ticket" [1 mark]
- "Which one of the following is a factor of production? A Money, B Interest rates, C Labour, D Profit" [1 mark]
- "Which one of the following is most likely to cause demand-pull inflation? A A decrease in consumer spending, B An increase in indirect taxes, C An increase in exports, D An increase in imports" [1 mark]

### Type 2: Definition Questions (2 marks)
Format: "Define what is meant by [economic term]"
**Real examples:**
- "Define what is meant by 'opportunity cost'" [2 marks]
- "Define what is meant by 'market failure'" [2 marks]
- "Define what is meant by 'gross domestic product (GDP)'" [2 marks]
- "Define what is meant by 'price elasticity of demand'" [2 marks]
Marking:
- 2 marks: Full, accurate definition
- 1 mark: Partial definition or partially correct

### Type 3: State/Identify Questions (1-2 marks)
Format: "State one/two [economic concept]"
**Real examples:**
- "State one reason why a government might impose a minimum price" [1 mark]
- "Identify two causes of cost-push inflation" [2 marks]
- "State two policies a government could use to reduce unemployment" [2 marks]
- "Identify one advantage of international trade" [1 mark]

### Type 4: Calculation Questions (2-4 marks)
Format: "Calculate [economic measure]. Show your working"
**Real examples:**
- "Calculate the price elasticity of demand. Show your working" [3 marks]
- "Calculate the percentage change in GDP. Show your working" [2 marks]
- "Calculate the unemployment rate. Show your working" [2 marks]
- "Calculate total revenue. Show your working" [2 marks]
Marking:
- 1 mark for correct method/formula
- 1-2 marks for correct working
- 1 mark for correct answer with units

### Type 5: Explanation Questions (2-4 marks)
Format: "Explain how/why [economic relationship]"
**Real examples:**
- "Explain how an increase in interest rates might affect consumer spending" [4 marks]
- "Explain one reason why a firm might be a price maker" [2 marks]
- "Explain how demand-pull inflation differs from cost-push inflation" [4 marks]
- "Explain one way supply-side policies might reduce unemployment" [3 marks]
Marking:
- Award marks for chains of reasoning
- Award marks for application to economic context

### Type 6: Analysis Questions (4-6 marks)
Format: "Analyse [economic impact/effect/consequences]"
**Real examples:**
- "Analyse the impact of a fall in the exchange rate on UK exporters" [6 marks]
- "Analyse the effects of a minimum wage increase on businesses and workers" [6 marks]
- "Analyse how monopoly power might affect consumers" [4 marks]
- "Analyse the consequences of a government budget deficit" [6 marks]
Marking (Levels):
- Level 3 (5-6): Good analysis with chains of reasoning
- Level 2 (3-4): Some analysis but limited development
- Level 1 (1-2): Limited, mainly descriptive

### Type 7: Extended Response (6-9 marks)
Format: "Discuss..." or "Evaluate..." or "To what extent..."
**Real examples:**
- "Discuss whether reducing interest rates is an effective way to increase economic growth" [9 marks]
- "Evaluate the view that free trade is always beneficial for an economy" [9 marks]
- "To what extent should a government intervene to correct market failure?" [9 marks]
- "Discuss whether fiscal policy or monetary policy is more effective in reducing inflation" [9 marks]
Marking (Levels):
- Level 3 (7-9): Balanced evaluation with reasoned judgement
- Level 2 (4-6): Some evaluation but may lack balance
- Level 1 (1-3): Limited, mainly descriptive

### Type 8: Data Response (varies)
Format: Questions based on stimulus material
- Extract analysis
- Graph/chart interpretation
- Data application
- Economic data tables
`;

const AQA_GCSE_ECON_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Economics Mark Scheme Conventions (From Official 2021-2024 Mark Schemes)

### Assessment Objectives (Official AQA)
| Objective | Description | Weighting |
|-----------|-------------|-----------|
| AO1 | Demonstrate knowledge and understanding of economic concepts and issues | 35% |
| AO2 | Apply knowledge and understanding of economic concepts and issues to a variety of contexts | 35% |
| AO3 | Analyse and evaluate economic evidence and issues to demonstrate understanding of economic behaviour, make judgements and draw conclusions | 30% |

Each paper: AO1 17.5% + AO2 17.5% + AO3 15% = 50% per paper

### How Examiners Apply Levels of Response (Official AQA Guidance)
"Start at the lowest level of the mark scheme and use it as a ladder to see whether the answer meets the descriptor for that level."
"The descriptor for the level indicates different qualities that might be seen in the student's answer for that level."
"Use a best fit approach - if response covers different aspects of different levels, place in the level that best matches overall quality."

### Levels of Response Marking (9-Mark Extended Questions)
**Level 3 (7-9 marks):**
- Demonstrates clear and accurate knowledge and understanding of economic terminology, concepts and principles
- Applies knowledge effectively to the context
- Uses chains of reasoning that are logical and coherent
- Evaluates evidence and issues to develop a well-supported judgement with clear conclusions

**Level 2 (4-6 marks):**
- Demonstrates mostly clear and accurate knowledge and understanding
- Applies knowledge to the context
- Some chains of reasoning are logical
- Evaluates evidence/issues to develop a supported judgement

**Level 1 (1-3 marks):**
- Demonstrates limited knowledge and understanding
- Limited application to context
- Chains of reasoning are not developed
- Limited evaluation with superficial judgement

**0 marks:** Nothing creditworthy

### Indicative Content
Mark schemes include "Indicative Content" - possible points that might appear in answers
- Not exhaustive - credit other valid points
- Don't require all points for full marks
- Quality of reasoning more important than quantity

### Calculation Questions
- Award marks for correct method even if arithmetic is wrong
- Final answer must have correct units where applicable (%, £, etc.)
- Show working for full marks
- "Own figure rule" - if method correct but arithmetic wrong, award method marks

### Definition Questions (2 marks typically)
- Key terms must be included
- Context-specific definitions where appropriate
- 2 marks for complete definition
- 1 mark for partial/incomplete definition

### Paper Format
Both papers require students to:
- Answer Section A: 10 MCQ (10 marks) + calculations, short and extended responses (30 marks)
- Answer Section B: Five questions combining calculations with short and extended responses (40 marks)
- "Draw on knowledge and understanding of the entire course of study"

### Quantitative Skills
At least 10% of total marks assess quantitative skills including:
- Calculations (PED, percentage changes, rates)
- Graph construction and interpretation
- Supply and demand diagram analysis
- Data interpretation and comparison
`;

const AQA_GCSE_ECON_KEY_FORMULAS = `
## Key Economics Formulas for AQA GCSE

### Elasticity
- **PED** = (% change in quantity demanded) / (% change in price)
- **PES** = (% change in quantity supplied) / (% change in price)
- **YED** = (% change in quantity demanded) / (% change in income)

### Interpreting PED Values
| PED Value | Classification | Meaning |
|-----------|---------------|---------|
| > 1 | Elastic | Quantity changes more than price |
| = 1 | Unit elastic | Quantity changes same as price |
| < 1 | Inelastic | Quantity changes less than price |
| = 0 | Perfectly inelastic | Quantity doesn't change |
| = ∞ | Perfectly elastic | Any price change = infinite quantity change |

### Percentage Changes
- **Percentage change** = ((New value - Old value) / Old value) × 100

### Business/Firm Calculations
- **Total Revenue** = Price × Quantity
- **Total Cost** = Fixed Costs + Variable Costs
- **Profit** = Total Revenue - Total Cost
- **Average Cost** = Total Cost / Quantity

### Macroeconomic Measures
- **GDP growth rate** = ((New GDP - Old GDP) / Old GDP) × 100
- **Inflation rate** = ((New CPI - Old CPI) / Old CPI) × 100
- **Unemployment rate** = (Number unemployed / Labour Force) × 100
- **Labour Force** = Employed + Unemployed

### Trade Calculations
- **Balance of Trade** = Value of Exports - Value of Imports
- **Current Account** = Trade balance + Net investment income + Net transfers
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const AQA_GCSE_ECON_TOPIC_KNOWLEDGE: Record<string, string> = {
  'aqa-gcse-econ-economic-foundations': `## Economic Foundations Topic Knowledge (Paper 1, Topic 1)

### The Economic Problem

**Scarcity**
- The fundamental economic problem
- **Definition**: Resources are limited but human wants are unlimited
- Creates the need for choice
- Applies to individuals, businesses, and governments
- Examples:
  - Limited land for housing vs parks vs farms
  - Limited NHS budget vs infinite health demands
  - Limited time for students (study vs leisure)
  - Limited oil reserves vs growing energy demand

**Resources (Factors of Production)**
| Factor | Definition | Reward | Examples |
|--------|------------|--------|----------|
| **Land** | Natural resources | Rent | Oil, minerals, forests, water, agricultural land |
| **Labour** | Human effort (physical & mental) | Wages | Workers, managers, doctors, teachers |
| **Capital** | Man-made resources used in production | Interest | Machinery, factories, tools, computers |
| **Enterprise** | Risk-taking, organisation | Profit | Entrepreneurs starting businesses |

**Key distinction:**
- Land includes all natural resources (not just land itself)
- Capital is NOT money - it's physical capital goods
- Enterprise is the organising factor that brings others together

### Opportunity Cost

**Definition**: The next best alternative foregone when making a choice

**Key points:**
- Always expressed as what is GIVEN UP
- Only the NEXT BEST alternative, not all alternatives
- Applies at all economic levels (individuals, firms, governments)

**Examples:**
| Decision | Opportunity Cost |
|----------|-----------------|
| Student studies instead of working | Lost wages from part-time job |
| Government builds new hospital | Could have been spent on schools |
| Farmer grows wheat instead of barley | Lost barley revenue |
| Consumer buys car instead of holiday | The holiday not taken |

**Production Possibility Frontiers (PPF)**
- Shows maximum output combinations with given resources
- Points on the curve = efficient (all resources used)
- Points inside curve = inefficient (unused resources)
- Points outside curve = unattainable (need more resources)
- Curved shape shows increasing opportunity cost
- Outward shift = economic growth (more resources/productivity)

### Economic Agents

**Individuals/Households**
- Consume goods and services
- Provide factors of production (mainly labour)
- Face unlimited wants with limited income
- Must make choices about consumption

**Firms/Producers**
- Produce goods and services
- Employ factors of production
- Aim to maximise profit (usually)
- Face choices about what/how to produce

**Governments**
- Provide public goods and services
- Collect taxes
- Redistribute income
- Regulate markets
- Face choices about spending priorities

### Economic Systems

**Market Economy (Free Market/Capitalism)**
- Resources allocated by price mechanism
- Private ownership of resources
- Minimal government intervention
- Prices determined by supply and demand
- Examples: Hong Kong, Singapore (historically)
- Advantages: Choice, efficiency, innovation, incentives
- Disadvantages: Inequality, market failure, instability

**Command Economy (Planned/Communist)**
- Government allocates resources
- State ownership of resources
- Central planning of production
- Prices set by government
- Examples: North Korea, Cuba, former USSR
- Advantages: Equality, provision of necessities, stability
- Disadvantages: Inefficiency, lack of choice, bureaucracy

**Mixed Economy**
- Combines market and command features
- Both private and public sectors
- Government regulates and provides some services
- Market determines most prices
- Most modern economies are mixed
- Examples: UK, USA, Germany, France
- UK examples: NHS (public), Tesco (private), BBC (public corporation)

### Specialisation and Division of Labour

**Specialisation**
- **Definition**: Focusing on producing a limited range of goods/services
- Can apply to:
  - Individuals (workers specialise in tasks)
  - Firms (companies specialise in products)
  - Regions (Sheffield = steel, Cambridge = tech)
  - Countries (Saudi Arabia = oil, Japan = electronics)

**Division of Labour**
- Breaking production into specialist tasks
- Workers repeat same task
- First described by Adam Smith (pin factory example)

**Advantages of Specialisation:**
- Increased productivity (practice makes perfect)
- Workers become experts
- Enables use of machinery
- Saves time (no switching between tasks)
- Economies of scale
- Higher quality output

**Disadvantages of Specialisation:**
- Boring, repetitive work (demotivation)
- Dependency (breakdown affects all)
- Structural unemployment (skills become obsolete)
- Loss of flexibility

**Real Examples:**
- Car production line (each worker does one task)
- Medical specialists (cardiologists, surgeons)
- International trade (China manufactures, UK services)

### The Role of Money

**Functions of Money:**
1. **Medium of exchange** - Accepted for payment
2. **Store of value** - Can be saved for future use
3. **Unit of account** - Measures value of goods/services
4. **Standard of deferred payment** - Used for future payments (loans)

**Characteristics of Good Money:**
- Durable (lasts)
- Portable (easy to carry)
- Divisible (can be split)
- Recognisable (accepted)
- Scarce (limited supply)

**Without money = Barter**
- Direct exchange of goods
- Problem: Requires "double coincidence of wants"
- Inefficient and limits trade`,

  'aqa-gcse-econ-role-of-markets': `## The Role of Markets Topic Knowledge (Paper 1, Topic 2)

### What is a Market?

**Definition**: Any arrangement that brings buyers and sellers together to exchange goods/services

**Types of markets:**
- Physical markets (Covent Garden, farmer's markets)
- Virtual markets (eBay, Amazon)
- Financial markets (Stock Exchange, forex)
- Labour markets (where workers sell labour)

### Demand

**Definition**: The quantity of a good/service consumers are willing and able to buy at a given price in a given time period

**Key points:**
- Must be BOTH willing AND able
- "Effective demand" = backed by purchasing power
- Related to a specific price and time period

**The Law of Demand**
- As price rises, quantity demanded falls (ceteris paribus)
- As price falls, quantity demanded rises
- Creates downward-sloping demand curve
- "Ceteris paribus" = all other things being equal

**Why demand curves slope downward:**
1. **Substitution effect** - Higher price → consumers switch to alternatives
2. **Income effect** - Higher price → less purchasing power → buy less
3. **More consumers drop out at higher prices**

**Movement along vs Shift of Demand Curve:**

**Movement along** (caused by price change):
- Extension of demand (price falls, Qd rises)
- Contraction of demand (price rises, Qd falls)

**Shift of demand curve** (caused by non-price factors):

| Factor | Shift Right (Increase) | Shift Left (Decrease) |
|--------|------------------------|------------------------|
| **Income** (normal goods) | Income rises | Income falls |
| **Income** (inferior goods) | Income falls | Income rises |
| **Price of substitutes** | Substitute price rises | Substitute price falls |
| **Price of complements** | Complement price falls | Complement price rises |
| **Tastes/fashion** | Good becomes fashionable | Good becomes unfashionable |
| **Population** | Population grows | Population falls |
| **Advertising** | Successful advertising | Negative publicity |
| **Expectations** | Expect price to rise | Expect price to fall |

**Normal goods**: Demand rises with income (most goods)
**Inferior goods**: Demand falls with income (value brands, bus travel)

### Supply

**Definition**: The quantity of a good/service producers are willing and able to sell at a given price in a given time period

**The Law of Supply**
- As price rises, quantity supplied rises (ceteris paribus)
- As price falls, quantity supplied falls
- Creates upward-sloping supply curve

**Why supply curves slope upward:**
1. Higher prices → higher profit incentive
2. Covers higher marginal costs at higher output
3. Attracts new producers to market

**Movement along vs Shift of Supply Curve:**

**Movement along** (caused by price change):
- Extension of supply (price rises, Qs rises)
- Contraction of supply (price falls, Qs falls)

**Shift of supply curve** (caused by non-price factors):

| Factor | Shift Right (Increase) | Shift Left (Decrease) |
|--------|------------------------|------------------------|
| **Costs of production** | Costs fall | Costs rise |
| **Technology** | Improvement | Breakdown/outdated |
| **Taxes on producers** | Tax cut/subsidy | Tax increase |
| **Subsidies** | Subsidy given | Subsidy removed |
| **Number of firms** | More firms enter | Firms leave |
| **Weather** (agriculture) | Good weather | Bad weather |
| **Expectations** | Expect price to fall | Expect price to rise |

### Market Equilibrium

**Definition**: Where quantity demanded equals quantity supplied - the market clears

**Equilibrium price**: The price at which Qd = Qs (no surplus or shortage)
**Equilibrium quantity**: The quantity traded at equilibrium price

**Price Mechanism/Market Mechanism:**
- The automatic process by which markets reach equilibrium
- Prices act as signals and incentives
- No central planning needed (Adam Smith's "invisible hand")

**How markets adjust:**

**Excess supply (surplus):**
- Price above equilibrium
- Qd < Qs
- Unsold stock accumulates
- Producers cut prices
- Price falls until equilibrium

**Excess demand (shortage):**
- Price below equilibrium
- Qd > Qs
- Queues, waiting lists
- Producers raise prices
- Price rises until equilibrium

### Price Elasticity of Demand (PED)

**Definition**: A measure of how responsive quantity demanded is to a change in price

**Formula**: PED = % change in quantity demanded / % change in price

**Interpreting PED:**
| PED Value | Classification | Revenue Impact (Price Rise) |
|-----------|---------------|---------------------------|
| > 1 | Elastic | Total revenue FALLS |
| = 1 | Unit elastic | Total revenue unchanged |
| < 1 | Inelastic | Total revenue RISES |

**Why PED is negative:**
- Price and quantity move in opposite directions
- Often expressed as absolute value

**Factors affecting PED:**

| Factor | More Elastic | More Inelastic |
|--------|-------------|----------------|
| **Substitutes** | Many substitutes | Few/no substitutes |
| **Necessity** | Luxury good | Necessity |
| **Time** | Long run | Short run |
| **% of income** | High proportion | Low proportion |
| **Habit/addiction** | Non-addictive | Addictive |
| **Brand loyalty** | Low loyalty | High loyalty |

**Examples:**
- Salt: Inelastic (necessity, cheap, no substitutes)
- Airline tickets: Elastic (luxury, expensive, alternatives)
- Petrol: Inelastic short-run (necessity), more elastic long-run (can change car)
- Branded trainers: Elastic (many alternatives)
- Insulin: Perfectly inelastic (no alternative for diabetics)

**Business significance:**
- If PED < 1: Raise price to increase revenue
- If PED > 1: Lower price to increase revenue
- Helps pricing decisions

### Price Elasticity of Supply (PES)

**Definition**: A measure of how responsive quantity supplied is to a change in price

**Formula**: PES = % change in quantity supplied / % change in price

**PES is always positive** (law of supply)

**Factors affecting PES:**
| Factor | More Elastic | More Inelastic |
|--------|-------------|----------------|
| **Spare capacity** | High spare capacity | Near full capacity |
| **Stock levels** | High stocks | Low stocks |
| **Time** | Long run | Short run |
| **Ease of factor switching** | Easy to switch | Difficult to switch |
| **Production period** | Short production time | Long production time |

**Examples:**
- Manufacturing: Relatively elastic (can adjust production)
- Agriculture: Inelastic (growing seasons, land fixed)
- Housing: Inelastic short-run (takes time to build)

### Income Elasticity of Demand (YED)

**Definition**: A measure of how responsive quantity demanded is to a change in income

**Formula**: YED = % change in quantity demanded / % change in income

**Interpreting YED:**
| YED Value | Classification | Example |
|-----------|---------------|---------|
| Positive > 1 | Luxury good | Sports cars, designer clothes |
| Positive 0-1 | Necessity | Food, water, basic clothing |
| Negative | Inferior good | Value brands, bus travel |

**Business significance:**
- Luxury goods: Sales boom in growth, collapse in recession
- Necessities: Stable demand regardless of economy
- Inferior goods: Counter-cyclical (demand rises in recession)`,

  'aqa-gcse-econ-market-failure': `## Market Failure Topic Knowledge (Paper 1, Topic 3)

### What is Market Failure?

**Definition**: When the free market fails to allocate resources efficiently, leading to a net welfare loss

**Key concept**: Markets fail when they do not achieve allocative efficiency (P = MC) or when there are negative social consequences

### Types of Market Failure

**1. Externalities**

**Definition**: Costs or benefits to third parties not involved in the transaction

**Types of externalities:**

| Type | Definition | Examples |
|------|------------|----------|
| **Negative externality of production** | Production creates costs for third parties | Factory pollution, noise from construction |
| **Negative externality of consumption** | Consumption creates costs for third parties | Passive smoking, traffic congestion |
| **Positive externality of production** | Production creates benefits for third parties | Training workers who move to other firms |
| **Positive externality of consumption** | Consumption creates benefits for third parties | Education, vaccinations |

**Key economic terms:**
- **Private costs/benefits**: Costs/benefits to producer or consumer
- **External costs/benefits**: Costs/benefits to third parties
- **Social costs = Private costs + External costs**
- **Social benefits = Private benefits + External benefits**

**Market failure with negative externalities:**
- Social cost > Private cost
- Free market overproduces (too much consumed)
- Deadweight welfare loss
- Examples: Pollution, alcohol, tobacco, sugary drinks

**Market failure with positive externalities:**
- Social benefit > Private benefit
- Free market underproduces (too little consumed)
- Merit goods often have positive externalities
- Examples: Education, healthcare, vaccinations

**2. Public Goods**

**Definition**: Goods that are non-excludable and non-rivalrous

**Characteristics:**
- **Non-excludable**: Cannot prevent people from using it once provided
- **Non-rivalrous**: One person's use doesn't reduce availability for others

**The free-rider problem:**
- People can benefit without paying
- Private firms can't charge for them
- Will not be provided by free market
- Government must provide (funded by taxation)

**Examples of public goods:**
- Street lighting
- National defence
- Flood defences
- Lighthouses
- Public parks (some aspects)

**What are NOT public goods:**
- Healthcare (excludable)
- Education (excludable)
- Roads (can be excludable - toll roads)
- Swimming pools (excludable)

**3. Merit Goods**

**Definition**: Goods that are under-consumed when left to the free market because individuals underestimate private benefits or don't consider external benefits

**Characteristics:**
- Positive externalities
- Information failure (people undervalue them)
- Government believes more should be consumed

**Examples:**
- Education
- Healthcare
- Vaccinations
- Museums/libraries
- Sports facilities

**Why under-consumed:**
- People underestimate long-term benefits
- Positive externalities not considered
- May be too expensive for some

**4. Demerit Goods**

**Definition**: Goods that are over-consumed when left to the free market because individuals underestimate private costs or don't consider external costs

**Characteristics:**
- Negative externalities
- Information failure (people undervalue harms)
- Government believes less should be consumed

**Examples:**
- Tobacco
- Alcohol
- Gambling
- Fast food/sugary drinks
- Drugs

**Why over-consumed:**
- People underestimate health risks
- Addictive properties
- Negative externalities ignored
- Information failure

**5. Information Failure (Asymmetric Information)**

**Definition**: When buyers or sellers don't have access to perfect information to make rational decisions

**Examples:**
- Second-hand car market (seller knows more about car quality)
- Insurance (buyer knows more about their own risk)
- Healthcare (doctor knows more than patient)
- Employment (worker knows true ability)

**Consequences:**
- Adverse selection (bad products drive out good)
- Moral hazard (changes behaviour after contract)
- Market may not exist or function poorly

**6. Monopoly Power**

**Definition**: When a single firm or small group of firms dominate a market

**Problems:**
- Higher prices than competitive market
- Lower output than competitive market
- Reduced consumer choice
- Less innovation (no competitive pressure)
- Allocative inefficiency (P > MC)

### Government Intervention to Correct Market Failure

**1. Indirect Taxes**

**Definition**: Taxes on spending (not income)

**Types:**
- **Ad valorem**: % of price (e.g., VAT at 20%)
- **Specific/unit tax**: Fixed amount per unit (e.g., tobacco duty)

**Used for demerit goods/negative externalities:**
- Increases price → reduces consumption
- Internalises external costs
- Generates revenue for government

**Examples:**
- Tobacco duty: £5.64 per pack of 20
- Alcohol duty: Varies by strength
- Fuel duty: 52.95p per litre
- Soft drinks industry levy: Sugar tax
- Air passenger duty

**Evaluation:**
✓ Reduces consumption
✓ Raises revenue
✓ Makes polluter pay
✗ Regressive (hits poor harder)
✗ May not change behaviour if inelastic
✗ Difficult to calculate correct level
✗ May encourage black market

**2. Subsidies**

**Definition**: Payments from government to producers to reduce costs/prices

**Used for merit goods/positive externalities:**
- Reduces price → increases consumption
- Encourages production

**Examples:**
- Education funding
- NHS subsidised healthcare
- Bus/rail subsidies
- Renewable energy subsidies
- Electric vehicle grants

**Evaluation:**
✓ Increases consumption
✓ Makes goods affordable
✓ Encourages positive externalities
✗ Opportunity cost (money could go elsewhere)
✗ Difficult to calculate correct level
✗ May benefit producers more than consumers
✗ Can distort markets

**3. Minimum Prices (Price Floors)**

**Definition**: Legally set price below which goods cannot be sold

**Examples:**
- Minimum wage (labour market)
- Minimum alcohol pricing (Scotland)
- Agricultural price supports (EU CAP historically)

**Effects:**
- Creates surplus (Qs > Qd)
- Producers benefit (guaranteed price)
- Consumers pay more
- Can lead to waste/storage issues

**Evaluation:**
✓ Protects producer incomes
✓ Reduces consumption of harmful goods
✗ Creates surplus
✗ Higher prices for consumers
✗ May create black market below minimum

**4. Maximum Prices (Price Ceilings)**

**Definition**: Legally set price above which goods cannot be sold

**Examples:**
- Rent controls
- Price caps on energy bills
- NHS drug price limits

**Effects:**
- Creates shortage (Qd > Qs)
- Consumers benefit (lower prices)
- Producers may reduce supply
- Waiting lists/queues

**Evaluation:**
✓ Makes goods affordable
✓ Protects consumers
✗ Creates shortages
✗ Reduces quality (no profit incentive)
✗ Black market may develop

**5. Tradable Permits (Cap and Trade)**

**Definition**: Government sets limit on pollution, firms trade permits

**How it works:**
1. Government sets total pollution cap
2. Allocates permits to firms
3. Firms can trade permits
4. Those who pollute more must buy permits
5. Those who reduce pollution can sell permits

**Examples:**
- EU Emissions Trading System (ETS)
- Carbon credits

**Evaluation:**
✓ Limits total pollution
✓ Market-based solution
✓ Incentive to reduce pollution
✗ Setting correct cap is difficult
✗ May be too cheap initially
✗ Monitoring/enforcement costs

**6. Regulation and Legislation**

**Types:**
- Bans/prohibitions (drugs, CFCs)
- Quantity limits (fishing quotas)
- Quality standards (food safety)
- Environmental regulations (emission standards)
- Health and safety laws

**Evaluation:**
✓ Clear rules
✓ Enforceable
✗ Costly to monitor/enforce
✗ May be evaded
✗ May stifle innovation

**7. State Provision**

**Definition**: Government provides goods/services directly

**Examples:**
- NHS healthcare
- State education
- National defence
- Police service

**Evaluation:**
✓ Ensures access for all
✓ Addresses free-rider problem
✓ Can achieve equity
✗ Opportunity cost
✗ May be inefficient (no market signals)
✗ Funded by taxation`,

  'aqa-gcse-econ-production-costs-revenue': `## Production, Costs, Revenue and Profit Topic Knowledge (Paper 1, Topic 4)

### Production

**Definition**: The process of converting inputs (factors of production) into outputs (goods and services)

**Types of Production:**
| Type | Description | Examples |
|------|-------------|----------|
| **Primary** | Extraction of raw materials | Mining, farming, fishing, forestry |
| **Secondary** | Manufacturing/construction | Factories, building, processing |
| **Tertiary** | Services | Banking, retail, healthcare, transport |
| **Quaternary** | Knowledge-based services | Research, IT, consultancy |

### Productivity

**Definition**: Output per unit of input (usually labour)

**Labour productivity** = Total output / Number of workers
OR = Total output / Hours worked

**Importance:**
- Higher productivity = lower unit costs
- Key source of competitiveness
- Determines living standards

**Factors affecting productivity:**
- Technology and capital equipment
- Education and training (human capital)
- Management quality
- Worker motivation
- Working conditions

**UK productivity gap:**
- UK productivity lower than Germany, France, USA
- 15-20% less output per hour than competitors
- Long-standing economic concern

### Costs

**Fixed Costs (FC)**
- Do not change with output in short run
- Must be paid even if output is zero
- Examples: Rent, salaries, insurance, loan repayments, machinery depreciation

**Variable Costs (VC)**
- Change with output
- Zero if output is zero
- Examples: Raw materials, energy (usage-based), wages (hourly workers), packaging

**Total Costs (TC)**
- TC = FC + VC

**Average Costs (AC)**
- AC = TC / Output
- Also called unit cost
- AFC = FC / Output (falls as output rises - spreading fixed costs)
- AVC = VC / Output

**Marginal Cost (MC)**
- Cost of producing one more unit
- MC = Change in TC / Change in output

**Economies of Scale**

**Definition**: When average costs fall as output increases (long run)

| Type | Description | Example |
|------|-------------|---------|
| **Purchasing** | Bulk buying discounts | Tesco negotiating lower prices from suppliers |
| **Technical** | Use of specialist machinery | Car assembly line robots |
| **Managerial** | Specialist managers | HR, finance, marketing departments |
| **Marketing** | Spread advertising costs | National TV campaigns |
| **Financial** | Lower interest rates for larger firms | Big companies get cheaper loans |
| **Risk-bearing** | Diversification | Operating in multiple markets |

**Diseconomies of Scale**

**Definition**: When average costs rise as output increases (too big)

| Type | Description |
|------|-------------|
| **Communication** | Messages distorted in large hierarchy |
| **Coordination** | Difficult to manage complex operations |
| **Motivation** | Workers feel like small cogs, less engaged |

### Revenue

**Total Revenue (TR)**
- TR = Price × Quantity sold

**Average Revenue (AR)**
- AR = TR / Quantity
- AR = Price (in most cases)

**Marginal Revenue (MR)**
- Extra revenue from selling one more unit
- MR = Change in TR / Change in output

### Profit

**Profit = Total Revenue - Total Costs**

**Types of Profit:**
| Type | Formula | Meaning |
|------|---------|---------|
| **Gross Profit** | Revenue - Cost of sales | Before operating expenses |
| **Operating Profit** | Gross Profit - Operating expenses | Before interest and tax |
| **Net Profit** | Operating Profit - Interest - Tax | Final profit |

**Normal Profit**
- Minimum profit needed to keep entrepreneur in business
- Covers opportunity cost of capital and enterprise
- Included in total costs (economically)

**Supernormal/Abnormal Profit**
- Profit above normal profit
- TR > TC (including normal profit)
- Attracts new firms to market

**Why Firms Aim to Maximise Profit:**
- Reward for entrepreneurs
- Source of investment funds
- Increases firm value (share price)
- Provides security/buffer

**Alternative Business Objectives:**
- Sales revenue maximisation
- Sales volume maximisation
- Survival (especially in difficult times)
- Market share growth
- Satisficing (acceptable rather than maximum profit)
- Social objectives (social enterprises)

### Break-Even Analysis

**Break-even point**: Where TR = TC (neither profit nor loss)

**Break-even output** = Fixed Costs / (Price - Variable Cost per unit)

**Contribution** = Price - Variable Cost per unit
- Amount each unit contributes to covering fixed costs

**Margin of Safety** = Actual output - Break-even output

**Break-even Chart:**
- X-axis: Output/Quantity
- Y-axis: Costs and Revenue (£)
- Fixed cost line (horizontal)
- Total cost line (starts at FC, slopes up)
- Total revenue line (starts at origin, slopes up)
- Break-even where TC and TR cross

**Uses of Break-even:**
- Planning new products
- Setting prices
- Loan applications
- "What if" analysis

**Limitations:**
- Assumes all output sold
- Assumes costs constant
- Single product only
- Static analysis
- Doesn't show cash flow timing`,

  'aqa-gcse-econ-competitive-concentrated-markets': `## Competitive and Concentrated Markets Topic Knowledge (Paper 1, Topic 5)

### Market Structure Spectrum

From most competitive to least competitive:
1. Perfect Competition
2. Monopolistic Competition
3. Oligopoly
4. Monopoly

### Perfect Competition

**Characteristics:**
- Many buyers and sellers
- Homogeneous (identical) products
- Perfect information
- No barriers to entry/exit
- Firms are price takers

**Examples**:
- Agricultural markets (wheat, corn)
- Foreign exchange markets
- Theoretical ideal (doesn't fully exist)

**Outcomes:**
- Price = Marginal Cost (allocative efficiency)
- Only normal profit in long run
- No supernormal profit (competed away)
- Maximum consumer welfare

### Monopoly

**Definition**: A market dominated by one seller

**Technical definition**: 25%+ market share (Competition and Markets Authority)

**Characteristics:**
- Single/dominant seller
- Unique product (no close substitutes)
- High barriers to entry
- Price maker (sets own price)

**Barriers to Entry:**
| Type | Description | Examples |
|------|-------------|----------|
| **Legal** | Patents, licenses, regulations | Pharmaceutical patents, taxi licenses |
| **Technical** | Economies of scale | Utilities (natural monopoly) |
| **Financial** | High start-up costs | Car manufacturing, oil refineries |
| **Strategic** | Predatory pricing, takeovers | Large firms buying competitors |
| **Brand loyalty** | Strong customer attachment | Coca-Cola, Apple |

**Effects of Monopoly:**

**Disadvantages (compared to competition):**
- Higher prices
- Lower output
- Less consumer choice
- Allocative inefficiency (P > MC)
- Productive inefficiency (not minimum AC)
- Deadweight welfare loss
- No incentive to innovate

**Possible Advantages:**
- Economies of scale → lower costs → potentially lower prices
- Supernormal profit → investment in R&D → innovation
- Natural monopoly more efficient than competition (utilities)
- Cross-subsidisation of unprofitable but important services

**Real Examples of Monopoly Power:**
- Google (search): 90%+ UK market share
- Microsoft (operating systems): 75% market share
- Network Rail: Natural monopoly in UK rail infrastructure
- Royal Mail: Former monopoly on letters
- Facebook (social networking): Dominant position

### Oligopoly

**Definition**: Market dominated by a few large firms

**Characteristics:**
- Few large firms dominate
- High concentration ratio (e.g., top 4 firms have 60%+ market share)
- High barriers to entry
- Interdependence (firms react to rivals' actions)
- Non-price competition common
- May be collusion

**Concentration Ratio**: Market share of top firms (e.g., CR4 = top 4 firms' share)

**Interdependence:**
- Each firm must consider rivals' reactions
- Price cuts may be matched → price war
- Price rises may not be matched → lose sales
- Leads to price rigidity/"kinked demand curve"

**Non-Price Competition:**
- Advertising and branding
- Product differentiation
- Customer service
- Loyalty schemes
- Free gifts/extras

**Collusion:**
- Firms agree on prices/output
- Formal collusion = Cartel (illegal in UK)
- Tacit collusion = Unspoken coordination
- Benefits firms, harms consumers

**Examples of Oligopolies:**
| Market | Key Players | CR4 |
|--------|-------------|-----|
| Supermarkets | Tesco, Sainsbury's, Asda, Morrisons | ~65% |
| Mobile networks | EE, O2, Vodafone, Three | ~90% |
| Petrol | BP, Shell, Esso, Texaco | ~50% |
| Banking | HSBC, Barclays, Lloyds, NatWest | ~70% |
| Energy | British Gas, EDF, E.ON, SSE | ~70% |

### Monopolistic Competition

**Characteristics:**
- Many buyers and sellers
- Differentiated products (not identical)
- Low barriers to entry
- Some price-setting power (from differentiation)

**Examples:**
- Restaurants (local area)
- Hairdressers
- Coffee shops
- Clothing retailers

**Outcomes:**
- Supernormal profit in short run (if successful)
- Normal profit in long run (new firms enter)
- Product variety benefits consumers
- Some inefficiency (not minimum AC)

### Competition Policy

**Competition and Markets Authority (CMA)**
- UK's competition regulator (formed 2014)
- Investigates anti-competitive practices
- Can block or modify mergers
- Can fine companies (up to 10% of turnover)
- Promotes consumer interests

**CMA Powers:**
- Investigate mergers
- Investigate anti-competitive agreements
- Investigate abuse of dominant position
- Conduct market studies
- Fine law-breaking firms
- Break up companies in extreme cases

**What is Anti-Competitive?**
- Price fixing (cartels)
- Market sharing
- Predatory pricing
- Tied selling
- Refusal to supply
- Excessive pricing by monopolist

**Real CMA Cases:**
- Fined supermarkets for tobacco price-fixing
- Blocked Sainsbury's-Asda merger (2019)
- Investigated Google's dominance
- Fined pharmaceutical companies for excessive pricing

**Benefits of Competition Policy:**
- Lower prices for consumers
- Greater choice
- Improved quality
- Innovation incentives
- Economic efficiency

### Price Discrimination

**Definition**: Charging different prices to different consumers for the same product

**Conditions required:**
1. Market power (some ability to set price)
2. Separable markets (prevent resale)
3. Different price elasticities

**Examples:**
- Rail fares (peak vs off-peak)
- Cinema tickets (adult vs child vs senior)
- Airlines (business vs economy, booking time)
- Electricity (day vs night rates)
- Student discounts

**Effects:**
- Increases firm profit
- Some consumers pay less (may increase access)
- Some consumers pay more (high demand periods)
- Can be efficient (more output than single price)`,

  'aqa-gcse-econ-labour-market': `## The Labour Market Topic Knowledge (Paper 1, Topic 6)

### The Labour Market

**Definition**: Where workers (supply of labour) meet employers (demand for labour)

**Wage**: The price of labour, determined by supply and demand

### Demand for Labour

**Definition**: Number of workers firms are willing and able to employ at each wage rate

**Demand for labour is DERIVED DEMAND:**
- Firms don't want labour for itself
- They want labour to produce goods/services
- Demand depends on demand for final product

**Factors affecting demand for labour:**
| Factor | Effect on Demand |
|--------|------------------|
| **Wage rate** | Higher wage → lower demand (movement along) |
| **Demand for product** | Higher product demand → higher labour demand |
| **Productivity** | More productive workers → higher demand |
| **Price of capital** | Cheaper machines → substitute for labour |
| **Number of firms** | More firms → higher labour demand |

**Marginal Revenue Product (MRP):**
- Extra revenue from hiring one more worker
- MRP = Marginal Product × Price of output
- Firms hire up to where Wage = MRP

### Supply of Labour

**Definition**: Number of workers willing and able to work at each wage rate

**Factors affecting supply of labour:**
| Factor | Effect on Supply |
|--------|------------------|
| **Wage rate** | Higher wage → more supply (movement along) |
| **Population size** | Larger population → more supply |
| **Immigration** | More immigration → more supply |
| **Retirement age** | Higher retirement age → more supply |
| **Education/training** | More skilled workers in certain areas |
| **Non-monetary benefits** | Good conditions → more supply |

**Factors affecting supply to specific occupations:**
- Required qualifications
- Working conditions
- Job satisfaction
- Career prospects
- Entry barriers (training time, cost)

### Wage Determination

**Equilibrium wage**: Where labour supply = labour demand

**Above equilibrium wage** → Surplus of workers (unemployment)
**Below equilibrium wage** → Shortage of workers (vacancies)

### Wage Differentials

**Definition**: Differences in pay between workers/occupations

**Reasons for wage differentials:**

| Factor | Higher Wages | Lower Wages |
|--------|--------------|-------------|
| **Skills** | Highly skilled (surgeons) | Low skilled (cleaners) |
| **Education** | Long training (lawyers) | No qualifications needed |
| **Danger** | Risky jobs (oil rigs) | Safe jobs (office work) |
| **Unpleasant conditions** | Dirty/difficult work | Pleasant environment |
| **Responsibility** | High responsibility (pilots) | Low responsibility |
| **Scarcity** | Rare skills (specialist surgeons) | Common skills |
| **Location** | London weighting | Lower cost areas |
| **Experience** | Senior workers | Entry-level workers |

**Compensating wage differentials:**
- Higher pay for undesirable job characteristics
- Danger, unsocial hours, stress, travel

**UK Wage Examples:**
| Occupation | Typical Annual Salary |
|------------|----------------------|
| Surgeon | £80,000-150,000 |
| Teacher | £30,000-40,000 |
| Nurse | £27,000-35,000 |
| Retail worker | £18,000-22,000 |
| Footballer (Premier League) | £3,000,000+ |

### The National Minimum Wage and National Living Wage

**National Minimum Wage (NMW)**
- Legal minimum employers must pay
- Different rates by age
- Introduced 1999

**National Living Wage (NLW)**
- Higher rate for workers 21+
- Introduced 2016

**Current rates (2024):**
| Age Group | Hourly Rate |
|-----------|-------------|
| 21 and over (NLW) | £11.44 |
| 18-20 | £8.60 |
| Under 18 | £6.40 |
| Apprentice | £6.40 |

**Arguments FOR minimum wage:**
- Reduces poverty
- Reduces inequality
- Incentive to work (vs benefits)
- Increased spending power → economic growth
- Forces inefficient firms to improve

**Arguments AGAINST minimum wage:**
- May cause unemployment (if above equilibrium)
- Increases costs for businesses
- May lead to inflation
- SMEs particularly affected
- May reduce hours offered

**Living Wage vs Minimum Wage:**
- Real Living Wage: Calculated by Living Wage Foundation
- Based on cost of living (currently £12.00 UK, £13.15 London)
- Voluntary, not legal requirement
- Higher than government NLW

### Trade Unions

**Definition**: Organisations that represent workers' interests in negotiations with employers

**Functions of trade unions:**
- Collective bargaining (negotiate wages/conditions)
- Protecting workers' rights
- Providing legal support
- Training and education
- Lobbying government

**Types of union action:**
- Strike action (withdrawal of labour)
- Work to rule (only do minimum required)
- Overtime ban
- Go slow

**Benefits of unions:**

For workers:
- Higher wages through collective bargaining
- Better working conditions
- Job security
- Representation in disputes

For employers:
- Single negotiation point
- Improved communication
- Lower staff turnover
- Reduced individual disputes

**Problems with unions:**
- May cause wage inflation
- Can cause strikes (lost output)
- May resist change/modernisation
- Could lead to unemployment (if wages too high)

**UK Union Membership:**
- Peak: 13 million members (1979)
- Current: ~6.5 million (2022)
- Decline due to: service sector growth, anti-union legislation, changing work patterns

**Major UK Unions:**
- Unite
- UNISON
- GMB
- National Education Union (NEU)
- Royal College of Nursing (RCN)

### Labour Market Flexibility

**Definition**: How easily the labour market can adapt to changing conditions

**Types of flexibility:**
| Type | Description | Examples |
|------|-------------|----------|
| **Wage flexibility** | Wages can rise/fall with demand | Performance-related pay |
| **Numerical flexibility** | Ease of hiring/firing | Zero-hours contracts, temporary workers |
| **Functional flexibility** | Workers can do multiple tasks | Multi-skilling, job rotation |
| **Temporal flexibility** | Flexible working hours | Part-time, flexitime, shift work |

**Gig Economy:**
- Workers as independent contractors
- Platform-based work (Uber, Deliveroo)
- Flexible but insecure
- Debate over workers' rights

**Zero-hours Contracts:**
- No guaranteed hours
- Work when needed
- Flexibility for both parties
- Controversial: insecurity for workers`,

  'aqa-gcse-econ-national-economy': `## Introduction to the National Economy Topic Knowledge (Paper 2, Topic 7)

### Macroeconomics vs Microeconomics

**Microeconomics**: Study of individual markets, consumers, firms
- Price determination
- Consumer behaviour
- Firm decisions

**Macroeconomics**: Study of the economy as a whole
- National income (GDP)
- Inflation
- Unemployment
- Economic growth
- Trade

### Gross Domestic Product (GDP)

**Definition**: The total value of goods and services produced in an economy in a given time period (usually a year)

**Three ways to measure GDP:**
1. **Output method**: Value of all goods/services produced
2. **Income method**: Total income earned (wages + profits + rent + interest)
3. **Expenditure method**: Total spending (C + I + G + (X-M))

**GDP Formula (Expenditure approach):**
GDP = C + I + G + (X - M)

Where:
- C = Consumer spending (households)
- I = Investment (business spending on capital)
- G = Government spending
- X = Exports
- M = Imports

**Nominal vs Real GDP:**
- Nominal GDP: Measured at current prices
- Real GDP: Adjusted for inflation (constant prices)
- Real GDP shows true change in output

**GDP per capita** = GDP / Population
- Better measure of living standards
- Allows international comparison

**UK GDP:**
- Total GDP: ~£2.3 trillion (2023)
- GDP per capita: ~£34,000

**Limitations of GDP:**
- Ignores income distribution
- Excludes unpaid work (housework, volunteering)
- Excludes black economy/informal sector
- Ignores quality of life factors
- Environmental damage not deducted
- Doesn't measure happiness/wellbeing

### Economic Growth

**Definition**: An increase in real GDP over time

**Short-term growth**: Increase in actual output (using spare capacity)
**Long-term growth**: Increase in potential output (productive capacity)

**Causes of Economic Growth:**
| Factor | Explanation |
|--------|-------------|
| **Investment** | More capital → higher productivity |
| **Education/training** | Higher human capital → more productive workers |
| **Technology** | Innovation increases output per worker |
| **Population growth** | More workers → more output |
| **Natural resources** | Discovery of resources |
| **Infrastructure** | Better transport/communications |

**Benefits of Economic Growth:**
- Higher living standards
- More jobs/lower unemployment
- Higher tax revenue for government
- Poverty reduction
- Improved public services

**Costs of Economic Growth:**
- Inflation if growth too fast
- Environmental damage
- Resource depletion
- Inequality may increase
- Congestion and overcrowding
- Work-life balance issues

### The Business/Economic Cycle

**Definition**: The pattern of alternating periods of expansion and contraction in economic activity

**Phases of the Cycle:**

| Phase | Characteristics |
|-------|-----------------|
| **Boom** | High GDP growth, low unemployment, rising prices, high consumer confidence |
| **Slowdown/Peak** | Growth slowing, inflation may be high, interest rates may rise |
| **Recession** | Negative GDP growth (2+ quarters), rising unemployment, falling prices/demand |
| **Recovery/Trough** | Growth returns, unemployment falls, confidence improves |

**UK Recessions:**
- 1980-81: Monetarist policies, manufacturing decline
- 1990-91: High interest rates, housing crash
- 2008-09: Global Financial Crisis (GDP fell 6%)
- 2020: COVID-19 (GDP fell 9.7%)

**Government response to cycles:**
- Boom: May tighten policy to prevent overheating
- Recession: Loosen policy to stimulate demand
- "Countercyclical" fiscal and monetary policy

### The Circular Flow of Income

**Model showing how money flows around the economy**

**Basic model (two sectors):**
- Households provide factors of production
- Firms produce goods/services
- Households receive income (wages, rent, profit, interest)
- Households spend income on goods/services
- Money flows in a circle

**Injections** (add money to circular flow):
- Investment (I): Business spending on capital
- Government spending (G): Public services
- Exports (X): Foreign spending on domestic goods

**Leakages/Withdrawals** (remove money from circular flow):
- Savings (S): Income not spent
- Taxes (T): Money to government
- Imports (M): Spending on foreign goods

**Equilibrium**: Injections = Leakages

**Multiplier Effect:**
- Initial injection leads to larger final increase in GDP
- Money spent → becomes income → spent again → etc.
- Size depends on marginal propensity to consume (MPC)
- Higher savings/taxes/imports = smaller multiplier

### Aggregate Demand

**Definition**: Total spending on goods and services in an economy at a given price level

**AD = C + I + G + (X - M)**

**Aggregate Demand Curve:**
- Shows relationship between price level and real GDP demanded
- Slopes downward (lower prices → higher spending)
- Shifts with changes in components (C, I, G, X-M)

**Factors shifting AD:**

| Component | Increases AD | Decreases AD |
|-----------|--------------|--------------|
| **Consumption** | Lower interest rates, higher confidence, tax cuts | Higher interest rates, lower confidence, tax rises |
| **Investment** | Business confidence, lower interest rates, technology | Uncertainty, higher interest rates |
| **Government** | Increased spending, lower taxes | Spending cuts, higher taxes |
| **Net exports** | Weaker exchange rate, foreign growth | Stronger exchange rate, foreign recession |

### Aggregate Supply

**Definition**: Total amount of goods and services firms are willing and able to produce at each price level

**Short-Run Aggregate Supply (SRAS):**
- Upward sloping
- Firms produce more at higher prices
- Shifts with costs of production

**Long-Run Aggregate Supply (LRAS):**
- Vertical line at potential output
- Represents economy's productive capacity
- Shifts with changes in quantity/quality of resources

**Factors shifting SRAS:**
- Wage costs
- Raw material prices
- Energy costs
- Taxes on businesses
- Exchange rate (affects import costs)

**Factors shifting LRAS:**
- Investment in capital
- Education and training (human capital)
- Technology improvements
- Immigration/population growth
- Infrastructure improvements`,

  'aqa-gcse-econ-government-objectives': `## Government Objectives Topic Knowledge (Paper 2, Topic 8)

### The Four Main Macroeconomic Objectives

**1. Economic Growth**
- Aim: Sustained increase in real GDP
- UK target: ~2.5% growth per year (historically)
- Measured by: Real GDP growth rate

**2. Low Inflation**
- Aim: Stable, low prices
- UK target: 2% CPI inflation (Bank of England)
- Measured by: Consumer Price Index (CPI)

**3. Low Unemployment**
- Aim: Full employment
- UK target: Around 4-5% (natural rate)
- Measured by: Unemployment rate (ILO definition)

**4. Balance of Payments Equilibrium**
- Aim: Sustainable current account position
- UK typically has deficit
- Measured by: Current account as % of GDP

### Economic Growth

**Measuring Growth:**
- GDP growth rate = ((GDP Year 2 - GDP Year 1) / GDP Year 1) × 100
- Quarterly and annual figures published by ONS

**Recent UK Growth:**
| Year | GDP Growth |
|------|------------|
| 2019 | 1.6% |
| 2020 | -9.7% (COVID) |
| 2021 | 7.6% (recovery) |
| 2022 | 4.3% |
| 2023 | 0.1% |

**Benefits of Growth:**
- Higher incomes/living standards
- Lower unemployment
- Higher tax revenue
- Poverty reduction
- Improved public services
- International status

**Problems of Growth:**
- Environmental degradation
- Resource depletion
- Inflation if too fast
- Inequality may worsen
- Balance of payments deficit (import more)
- Stress, overwork, reduced leisure

**Trade-offs with Growth:**
- Growth vs Environment
- Growth vs Inflation (demand-pull)
- Growth vs Current Account (higher imports)

### Inflation

**Definition**: A sustained increase in the general price level

**Measuring Inflation:**
- Consumer Price Index (CPI): UK's main measure
- Retail Price Index (RPI): Includes housing costs
- CPIH: CPI including owner-occupiers' housing costs

**How CPI is calculated:**
1. Select basket of 700+ goods/services
2. Track price changes monthly
3. Weight by spending patterns
4. Calculate overall % change

**UK Inflation Target**: 2% (symmetric - can be above or below)
**Bank of England** must write letter to Chancellor if CPI moves more than 1% from target

**Recent UK Inflation:**
| Year | CPI Rate |
|------|----------|
| 2020 | 0.9% |
| 2021 | 2.6% |
| 2022 | 9.1% |
| 2023 | 7.3% |
| 2024 | ~3.5% (falling) |

**Causes of Inflation:**

**Demand-Pull Inflation:**
- Too much demand chasing too few goods
- "Too much money chasing too few goods"
- AD shifts right faster than AS
- Causes: Consumer spending boom, government spending, low interest rates, export growth

**Cost-Push Inflation:**
- Rising production costs passed to consumers
- AS shifts left
- Causes: Oil price rises, wage increases, import prices (weaker £), raw material costs

**Effects of Inflation:**

**On Consumers:**
- Reduced purchasing power
- Uncertainty about future prices
- Savers lose out (real value of savings falls)
- Borrowers may gain (real value of debt falls)
- Those on fixed incomes suffer most

**On Businesses:**
- Increased costs
- Uncertainty affects investment
- Menu costs (changing prices)
- Competitiveness may fall
- Wage demands increase

**On Economy:**
- Reduced international competitiveness
- Investment uncertainty
- Redistribution effects
- May require policy response (higher interest rates)

**Deflation:**
- Falling general price level
- Can be damaging if persistent
- Consumers delay purchases (expect prices to fall)
- Real value of debt increases
- Japan's "lost decades"

### Unemployment

**Definition**: People of working age who are without work, available for work, and actively seeking work

**Measuring Unemployment:**

**Claimant Count:**
- Number claiming unemployment benefits
- Easy to collect
- But depends on eligibility rules

**ILO/Labour Force Survey:**
- Survey-based international definition
- Without work, available, seeking work
- More comprehensive but sample-based

**UK Unemployment:**
| Year | Rate |
|------|------|
| 2019 | 3.8% |
| 2020 | 4.5% (COVID support limited rise) |
| 2021 | 4.5% |
| 2022 | 3.7% |
| 2023 | 4.2% |

**Types of Unemployment:**

| Type | Cause | Solution |
|------|-------|----------|
| **Cyclical/Demand-deficient** | Low aggregate demand in recession | Expansionary fiscal/monetary policy |
| **Structural** | Mismatch of skills/locations | Education, training, regional policy |
| **Frictional** | People between jobs | Information provision, job centres |
| **Seasonal** | Seasonal work patterns | Diversification, tourism extension |
| **Technological** | Automation replacing workers | Retraining, new industries |

**Consequences of Unemployment:**

**For Individuals:**
- Loss of income
- Skill deterioration
- Mental health problems
- Social exclusion
- Family stress

**For Economy:**
- Lost output (below potential GDP)
- Lower tax revenue
- Higher benefit spending
- Waste of human resources
- Social costs (crime, health)

**For Government:**
- Lower income tax revenue
- Lower VAT revenue
- Higher benefit payments
- Social services costs
- Political pressure

### Balance of Payments

**Definition**: Record of all financial transactions between a country and the rest of the world

**Components:**

**Current Account:**
- Trade in goods (visible trade)
- Trade in services (invisible trade)
- Investment income (profits, dividends, interest)
- Current transfers (foreign aid, EU contributions)

**Financial Account:**
- Foreign investment in UK
- UK investment abroad
- Changes in reserves

**UK Current Account:**
- Typically in deficit (imports > exports)
- 2023 deficit: ~£60 billion
- Deficit on goods, surplus on services

**Causes of Current Account Deficit:**
- High domestic demand (imports rise)
- Loss of manufacturing competitiveness
- Strong exchange rate
- Low productivity growth
- Global demand conditions

**Problems of Persistent Deficit:**
- Must be financed by capital inflows
- Foreign ownership of UK assets
- May indicate competitiveness problems
- Could lead to exchange rate pressure
- Sustainability concerns

### Policy Conflicts and Trade-offs

**Growth vs Inflation:**
- Fast growth → demand-pull inflation
- May need to slow growth to control inflation

**Growth vs Environment:**
- Growth increases resource use
- Carbon emissions rise with output
- Environmental regulations may limit growth

**Low Unemployment vs Inflation:**
- Low unemployment → wage pressure → inflation
- "Phillips Curve" trade-off
- But relationship has weakened

**Low Inflation vs Growth:**
- High interest rates to control inflation → slower growth
- But low stable inflation may support growth

**Current Account vs Growth:**
- Growth → more imports → deficit worsens
- Deflation to help exports hurts growth

**Balancing Objectives:**
- Governments must prioritise
- Different parties emphasise different objectives
- May need different policies for different objectives
- "Policy mix" approach`,

  'aqa-gcse-econ-government-policy': `## How the Government Manages the Economy Topic Knowledge (Paper 2, Topic 9)

### Types of Government Policy

**1. Fiscal Policy** - Government spending and taxation
**2. Monetary Policy** - Interest rates and money supply
**3. Supply-Side Policies** - Improve productive capacity

### Fiscal Policy

**Definition**: The use of government spending and taxation to influence the economy

**Components:**
- **Government spending** (G): Public services, benefits, investment
- **Taxation**: Income tax, VAT, corporation tax, etc.

**Government Budget:**
- **Budget surplus**: Tax revenue > Spending
- **Budget deficit**: Spending > Tax revenue
- **Balanced budget**: Revenue = Spending

**National Debt:**
- Total accumulated borrowing
- UK national debt: ~100% of GDP (~£2.6 trillion)
- Servicing debt (interest payments) is major expenditure

**How Fiscal Policy Works:**

**Expansionary Fiscal Policy** (increase AD):
- Increase government spending
- Cut taxes
- Used in recession to boost demand
- Increases budget deficit

Effects:
- Higher GDP
- Lower unemployment
- May cause inflation
- Increases national debt

**Contractionary Fiscal Policy** (decrease AD):
- Cut government spending
- Increase taxes
- Used to cool overheating economy
- Reduces budget deficit

Effects:
- Lower GDP growth
- May increase unemployment
- Reduces inflation
- Reduces national debt

**Types of Taxation:**

| Tax Type | Examples | Progressive/Regressive |
|----------|----------|----------------------|
| **Direct taxes** | Income tax, corporation tax, inheritance tax | Generally progressive |
| **Indirect taxes** | VAT, fuel duty, alcohol duty | Generally regressive |
| **Progressive** | Higher earners pay higher % | Income tax (20%, 40%, 45%) |
| **Regressive** | Same rate but harder on poor | VAT at 20% |
| **Proportional** | Same % for all | Flat tax systems |

**UK Government Spending (approximate):**
| Area | % of Total |
|------|------------|
| Social protection (pensions, benefits) | 32% |
| Health (NHS) | 19% |
| Education | 11% |
| Defence | 5% |
| Debt interest | 7% |

**Automatic Stabilisers:**
- Spending/taxes that automatically adjust with economy
- Recession: Benefits rise, tax revenue falls → supports demand
- Boom: Benefits fall, tax revenue rises → dampens demand
- Reduce severity of economic cycles

**Evaluation of Fiscal Policy:**

Advantages:
- Directly affects AD
- Can target specific areas/regions
- Automatic stabilisers work without intervention
- Politically controllable

Disadvantages:
- Time lags (recognition, decision, implementation)
- Budget deficit/national debt concerns
- Crowding out (government borrowing raises interest rates)
- Political constraints (unpopular tax rises)
- May cause inflation if economy near capacity

### Monetary Policy

**Definition**: The use of interest rates and money supply to influence the economy

**Bank of England:**
- UK's central bank
- Independent since 1997
- Monetary Policy Committee (MPC) sets interest rates
- Target: 2% CPI inflation

**Interest Rates:**
- Bank Rate (base rate): Rate BoE lends to banks
- Affects all other rates in economy
- Current base rate: 5.25% (2024)

**How Interest Rate Changes Affect AD:**

**Higher Interest Rates:**
- Saving more attractive → less consumption
- Borrowing more expensive → less consumption/investment
- Mortgage costs rise → less disposable income
- Exchange rate may rise → exports fall, imports rise
- Overall: AD falls, inflation falls, growth slows

**Lower Interest Rates:**
- Saving less attractive → more consumption
- Borrowing cheaper → more consumption/investment
- Mortgage costs fall → more disposable income
- Exchange rate may fall → exports rise, imports fall
- Overall: AD rises, growth increases, may cause inflation

**Transmission Mechanism:**
1. BoE changes base rate
2. Banks change lending/saving rates
3. Affects consumer/business behaviour
4. Changes aggregate demand
5. Affects inflation/growth

**Time lags**: Effects take 18-24 months to fully work through

**Quantitative Easing (QE):**
- "Unconventional" monetary policy
- BoE creates money electronically
- Buys government bonds from banks
- Banks have more money to lend
- Used when interest rates near zero
- UK used £895 billion of QE (2009-2021)

**Evaluation of Monetary Policy:**

Advantages:
- Independent (no political interference)
- Can be changed quickly
- Affects whole economy
- Clear target (2% inflation)

Disadvantages:
- Time lags (18-24 months)
- Blunt instrument (affects all sectors)
- Less effective at zero rates
- May conflict with other objectives
- Transmission depends on banks lending

### Supply-Side Policies

**Definition**: Policies aimed at increasing the productive capacity of the economy (shifting LRAS right)

**Aim**: Increase quantity/quality of factors of production

**Types of Supply-Side Policies:**

**1. Labour Market Policies:**
| Policy | Aim | Example |
|--------|-----|---------|
| Education | Improve skills/productivity | Apprenticeships, universities |
| Training | Update skills | Government training schemes |
| Reduce benefits | Incentivise work | Benefit caps, Universal Credit |
| Tax cuts | Incentivise work/effort | Raise personal allowance |
| Flexible labour markets | Ease hiring/firing | Zero-hours contracts |

**2. Policies to Encourage Investment:**
| Policy | Aim |
|--------|-----|
| Lower corporation tax | Increase after-tax profits |
| Investment allowances | Tax relief on investment |
| R&D tax credits | Encourage innovation |
| Infrastructure investment | Improve transport, broadband |

**3. Policies to Increase Competition:**
| Policy | Aim |
|--------|-----|
| Privatisation | Market efficiency |
| Deregulation | Remove barriers |
| Competition policy | Prevent monopoly abuse |
| Free trade | International competition |

**4. Tax and Benefit Reform:**
- Reduce marginal tax rates
- Reform benefits to incentivise work
- Reduce poverty/unemployment traps

**Evaluation of Supply-Side Policies:**

Advantages:
- Can increase growth without inflation
- Improve long-term productive capacity
- Address structural problems
- Shift LRAS right (more output possible)

Disadvantages:
- Long time lags (education takes years)
- Costly to implement
- May increase inequality
- Uncertain effects
- Political resistance to reform

### Policy Mix

**Governments typically use combination of policies:**
- Monetary policy for short-term demand management
- Fiscal policy for automatic stabilisers and structural changes
- Supply-side policies for long-term growth

**Example: Response to 2008 Financial Crisis:**
- Monetary: Interest rates cut to 0.5%, QE
- Fiscal: Initially stimulus, then austerity
- Supply-side: Bank reform, infrastructure investment

**Example: Response to COVID-19:**
- Monetary: Rates cut, more QE
- Fiscal: Furlough scheme, business loans, grants
- Supply-side: Skills for Jobs programme`,

  'aqa-gcse-econ-international-trade': `## International Trade Topic Knowledge (Paper 2, Topic 10)

### Why Countries Trade

**International trade**: Exchange of goods and services across national borders

**Benefits of Trade:**

**1. Specialisation and Comparative Advantage:**
- Countries specialise in what they produce most efficiently
- Trade for other goods
- Overall output higher than without trade

**Absolute Advantage:**
- Country can produce good using fewer resources than another
- Example: Saudi Arabia has absolute advantage in oil

**Comparative Advantage:**
- Country can produce good at lower opportunity cost than another
- Even if one country has absolute advantage in everything
- Still gains from specialising in lowest opportunity cost good

**Example of Comparative Advantage:**
| Country | Hours to produce 1 unit |
|---------|------------------------|
| | Wheat | Cloth |
| UK | 2 | 4 |
| France | 3 | 3 |

UK: Opportunity cost of 1 wheat = 0.5 cloth
France: Opportunity cost of 1 wheat = 1 cloth
UK has comparative advantage in wheat (lower opportunity cost)
France has comparative advantage in cloth

**2. Greater Choice:**
- Access to goods not produced domestically
- Variety (different brands, types)
- Year-round availability (seasonal goods)

**3. Lower Prices:**
- Competition from imports
- Economies of scale in production
- Lower costs in some countries

**4. Economic Growth:**
- Larger markets for exports
- Access to resources/technology
- Investment flows

**5. Technology and Ideas:**
- Transfer of knowledge
- Innovation spreads
- Best practices shared

### Free Trade vs Protectionism

**Free Trade:**
- No barriers to international trade
- Goods flow freely based on comparative advantage
- Promoted by WTO

**Protectionism:**
- Government policies restricting imports
- Aims to protect domestic industries

**Methods of Protectionism:**

| Method | Description | Example |
|--------|-------------|---------|
| **Tariffs** | Tax on imports | US tariffs on Chinese goods |
| **Quotas** | Limit on quantity of imports | Sugar import quotas |
| **Subsidies** | Payments to domestic producers | Agricultural subsidies |
| **Regulations** | Standards imports must meet | Health and safety rules |
| **Embargo** | Complete ban on trade | Sanctions on certain countries |

**Arguments FOR Protectionism:**
- Protect infant industries (new industries need time to grow)
- Protect jobs (prevent unemployment from cheap imports)
- National security (maintain strategic industries)
- Prevent dumping (selling below cost to destroy competition)
- Protect environment (avoid "race to bottom")
- Raise government revenue (tariffs)
- Protect against unfair competition

**Arguments AGAINST Protectionism:**
- Higher prices for consumers
- Less choice
- Inefficiency (no competitive pressure)
- Retaliation from other countries (trade wars)
- Less specialisation/lower output
- May protect uncompetitive industries forever

### Trading Blocs

**Definition**: Groups of countries with preferential trading arrangements

**Types of Trading Blocs:**

| Type | Features | Example |
|------|----------|---------|
| **Free Trade Area** | No tariffs between members, each sets own external tariffs | USMCA (USA, Mexico, Canada) |
| **Customs Union** | Free trade + common external tariff | EU (for trade) |
| **Single Market** | Customs union + free movement of labour, capital, services | EU (full integration) |
| **Economic Union** | Single market + common economic policies | Eurozone |

**EU Single Market:**
- Free movement of goods, services, capital, people
- Common external tariff
- Harmonised regulations
- Largest trading bloc in world

**Brexit:**
- UK left EU January 2020
- Trade and Cooperation Agreement (TCA) from 2021
- No tariffs but customs checks
- End of free movement
- Financial services lost "passporting"

**Effects of Brexit on Trade:**
- New customs paperwork/delays
- Some businesses relocated to EU
- Trade with EU fell (as share of total)
- New trade deals possible (Australia, Japan, CPTPP)
- Services trade more restricted

### Exchange Rates

**Definition**: The price of one currency in terms of another

**Example**: £1 = $1.25 (or $1 = £0.80)

**Types of Exchange Rate Systems:**

**Floating Exchange Rate:**
- Determined by supply and demand
- Government doesn't intervene
- UK system since 1992

**Fixed Exchange Rate:**
- Government maintains rate at set level
- Must buy/sell currency to maintain
- Example: Gold Standard (historically)

**Managed Float:**
- Mainly market-determined
- Central bank may intervene occasionally
- Many countries use this

**Factors Affecting Exchange Rates:**

| Factor | Effect on £ |
|--------|-------------|
| Higher UK interest rates | £ rises (attracts investment) |
| Higher UK inflation | £ falls (goods less competitive) |
| Strong UK growth | £ may rise (attracts investment) or fall (more imports) |
| Political stability | £ rises (safe haven) |
| Speculation | Can move either way |
| Trade deficit | £ falls (selling £ to buy imports) |

**Effects of Exchange Rate Changes:**

**Strong Pound (Appreciation):**
| Effect | Explanation |
|--------|-------------|
| Imports cheaper | Pay less £ for foreign goods |
| Exports more expensive | Foreigners pay more for UK goods |
| Inflation may fall | Cheaper import prices |
| Exporters hurt | Less competitive abroad |
| UK holidays abroad cheaper | Get more foreign currency |
| Foreign tourism may fall | UK more expensive for visitors |

**Weak Pound (Depreciation):**
| Effect | Explanation |
|--------|-------------|
| Imports more expensive | Pay more £ for foreign goods |
| Exports cheaper | UK goods more competitive |
| Inflation may rise | Import prices rise |
| Exporters benefit | More competitive abroad |
| UK holidays abroad more expensive | Get less foreign currency |
| Foreign tourism may rise | UK cheaper for visitors |

**J-Curve Effect:**
- After depreciation, current account initially worsens
- Volume of trade slow to adjust
- Eventually improves as export volumes rise

**Marshall-Lerner Condition:**
- Depreciation improves current account only if:
- PED for exports + PED for imports > 1

### Global Institutions

**World Trade Organization (WTO):**
- 164 member countries
- Promotes free trade
- Resolves trade disputes
- Negotiates trade agreements
- Based in Geneva

**International Monetary Fund (IMF):**
- Provides loans to countries in crisis
- Promotes financial stability
- Monitors exchange rates
- Offers technical assistance
- Often requires economic reforms in return

**World Bank:**
- Provides loans for development
- Focuses on poverty reduction
- Funds infrastructure, education, health
- Mainly helps developing countries`,

  'aqa-gcse-econ-money-financial-markets': `## The Role of Money and Financial Markets Topic Knowledge (Paper 2, Topic 11)

### Functions of Money

**1. Medium of Exchange:**
- Accepted in payment for goods and services
- Avoids need for barter (double coincidence of wants)
- Enables specialisation and trade

**2. Store of Value:**
- Can be saved and used later
- Maintains value over time (if inflation low)
- Enables people to defer consumption

**3. Unit of Account:**
- Common measure of value
- Allows prices to be compared
- Enables accounting and record-keeping

**4. Standard of Deferred Payment:**
- Enables lending and borrowing
- Contracts can specify future payments
- Credit and debt are possible

### The Financial Sector

**Definition**: Institutions that channel funds from savers to borrowers

**Main Financial Institutions:**

| Institution | Function |
|-------------|----------|
| **Commercial banks** | Accept deposits, make loans, payments |
| **Building societies** | Similar to banks, traditionally mortgages |
| **Insurance companies** | Pool risk, provide protection |
| **Pension funds** | Invest for retirement income |
| **Investment banks** | Raise capital for businesses, trading |
| **Stock Exchange** | Trading of shares and bonds |

**How Banks Work:**
1. Accept deposits from savers
2. Pay interest on deposits
3. Lend money to borrowers
4. Charge higher interest on loans
5. Profit = Interest received - Interest paid - Costs

**Bank Balance Sheet:**
- Assets: Loans, investments, reserves
- Liabilities: Deposits, borrowing

### Interest Rates

**Definition**: The cost of borrowing money (or reward for saving)

**Bank of England Base Rate:**
- Rate at which BoE lends to commercial banks
- Influences all other rates
- Set by Monetary Policy Committee
- Used to control inflation

**Types of Interest Rates:**
| Type | Description |
|------|-------------|
| Base rate | BoE rate (currently 5.25%) |
| Mortgage rate | Loans for house purchase |
| Credit card rate | Often 20%+ |
| Savings rate | Paid to savers (lower than lending rates) |
| LIBOR/SONIA | Interbank lending rates |

**Factors Affecting Interest Rates:**
- Bank of England base rate
- Inflation expectations
- Risk of borrower
- Length of loan
- Supply and demand for funds
- Competition between lenders

**Real vs Nominal Interest Rates:**
- Nominal rate: Stated rate (e.g., 5%)
- Real rate: Adjusted for inflation
- Real rate = Nominal rate - Inflation rate
- Example: 5% nominal - 3% inflation = 2% real

### Saving

**Definition**: Income not spent on consumption

**Reasons to Save:**
- Future purchases (house, car, holiday)
- Retirement income
- Emergency fund (precautionary)
- Investment returns
- Financial security

**Factors Affecting Saving:**
| Factor | Effect on Saving |
|--------|------------------|
| Interest rates | Higher rates → more saving |
| Income | Higher income → more saving |
| Confidence | More confident → less saving (spend now) |
| Age | Middle-aged save more than young/old |
| Cultural factors | Some cultures save more |
| Government incentives | ISAs, pension tax relief |

**UK Savings Rate:**
- Ratio of saving to income
- Was ~5% pre-2020
- Rose during COVID (couldn't spend)
- Fallen as cost of living rose

### Borrowing

**Definition**: Obtaining money with obligation to repay

**Reasons to Borrow:**
- Buy expensive items (houses, cars)
- Smooth consumption
- Business investment
- Education
- Cover unexpected expenses

**Types of Borrowing:**
| Type | Features |
|------|----------|
| Mortgage | Secured on property, long-term, low rate |
| Personal loan | Fixed amount, regular repayments |
| Credit card | Flexible, high interest if not paid monthly |
| Overdraft | Short-term, attached to current account |
| Payday loan | Very short-term, very high interest |

**Factors Affecting Borrowing:**
- Interest rates (lower = more borrowing)
- Income/employment
- Credit history/score
- Confidence about future
- Access to credit
- Regulations

### Financial Markets

**Stock Market:**
- Where shares are traded
- London Stock Exchange (LSE)
- FTSE 100: Top 100 UK companies
- Allows businesses to raise capital
- Investors can buy/sell ownership stakes

**How Share Prices are Determined:**
- Supply and demand
- Company performance/profits
- Economic conditions
- Interest rates
- Investor sentiment
- Industry trends

**Bond Market:**
- Government and corporate bonds traded
- Fixed income investments
- UK government bonds = "gilts"
- Inverse relationship with interest rates

**Foreign Exchange Market (Forex):**
- Currencies traded
- Largest financial market
- £/$, £/€, $/¥
- 24-hour trading
- Exchange rates determined

### Insurance

**Definition**: Financial protection against risk

**How Insurance Works:**
1. Many people pay premiums
2. Pool of money created
3. Those who suffer loss receive payout
4. Risk spread across many people
5. Insurance company makes profit

**Types of Insurance:**
| Type | Covers |
|------|--------|
| Life insurance | Death |
| Health insurance | Medical costs |
| Car insurance | Accidents, theft |
| Home insurance | Property damage, theft |
| Travel insurance | Cancellation, medical abroad |
| Business insurance | Various business risks |

**Importance of Insurance:**
- Manages financial risk
- Enables economic activity
- Required by law in some cases (car)
- Protects livelihoods

### Financial Regulation

**Financial Conduct Authority (FCA):**
- Regulates financial services firms
- Protects consumers
- Maintains market integrity
- Promotes competition

**Prudential Regulation Authority (PRA):**
- Part of Bank of England
- Regulates banks, insurers
- Ensures financial stability
- Sets capital requirements

**Financial Services Compensation Scheme (FSCS):**
- Protects depositors if bank fails
- Covers up to £85,000 per person per institution
- Funded by financial services levy

**Why Regulate Financial Services:**
- Protect consumers (often don't understand products)
- Prevent systemic risk (bank failures spreading)
- Maintain confidence in system
- Prevent fraud and mis-selling
- Ensure fair competition

**2008 Financial Crisis:**
- Caused by sub-prime mortgages in US
- Banks took excessive risks
- Lehman Brothers collapsed
- Global banking crisis
- Required government bailouts
- Led to stricter regulation

**UK Bank Bailouts:**
- RBS: Government took 84% stake
- Lloyds: Government took 43% stake
- Cost taxpayers billions
- Led to "too big to fail" debate`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const AQA_GCSE_ECON_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: Definition Question (2 marks)
**Question:** Define what is meant by 'opportunity cost'. [2 marks]

**Model Answer:**
Opportunity cost is the next best alternative foregone (1) when making a choice due to scarce resources (1).

**Mark Scheme:**
- 1 mark: Next best alternative/what is given up
- 1 mark: When making a choice/due to scarcity

---

### Example 2: Calculation Question - PED (3 marks)
**Question:** The price of a product increases from £20 to £25. As a result, quantity demanded falls from 1,000 units to 800 units.

Calculate the price elasticity of demand. Show your working. [3 marks]

**Model Answer:**
% change in quantity demanded = (800 - 1000) / 1000 × 100 = -20% (1)

% change in price = (25 - 20) / 20 × 100 = +25% (1)

PED = -20% / +25% = -0.8 (1)

The demand is price inelastic.

**Mark Scheme:**
- 1 mark: Correct % change in quantity (-20%)
- 1 mark: Correct % change in price (+25%)
- 1 mark: Correct PED answer (-0.8 or 0.8)

---

### Example 3: Explain Question (4 marks)
**Question:** Explain how a decrease in interest rates might lead to an increase in consumer spending. [4 marks]

**Model Answer:**
A decrease in interest rates makes borrowing cheaper (1). This means consumers face lower monthly repayments on loans and mortgages, leaving them with more disposable income (1). Additionally, the reward for saving falls, so consumers are less likely to save and more likely to spend (1). Consumers may also take out more loans to finance purchases such as cars or home improvements, increasing their overall spending (1).

**Mark Scheme:**
- 1 mark: Cheaper to borrow
- 1 mark: Lower mortgage/loan payments → more disposable income
- 1 mark: Less incentive to save → more spending
- 1 mark: More borrowing for purchases
- OR any valid chain of reasoning showing how lower rates increase spending

---

### Example 4: Analysis Question (6 marks)
**Question:** Analyse the effects of a minimum wage increase on businesses and workers. [6 marks]

**Model Answer:**
An increase in the minimum wage will have various effects on businesses and workers.

For workers, the main benefit is higher income. Workers on the minimum wage will receive higher hourly pay → this increases their disposable income → enabling them to afford a better standard of living and potentially reducing in-work poverty.

However, not all workers will benefit equally. Some businesses may respond to higher wage costs by reducing hours offered or cutting the number of employees → this could lead to unemployment for some workers, particularly those in low-skilled roles who are most easily replaced.

For businesses, the main effect is increased labour costs. If a business employs many minimum wage workers, their total wage bill will rise significantly → this increases their costs of production → potentially leading to lower profits or higher prices.

Some businesses may respond by investing in automation to replace workers → while this reduces wage costs in the long run, it requires significant capital investment and may lead to structural unemployment.

The impact varies by business type. A small retail shop with thin profit margins may struggle to absorb higher costs, while a large corporation may more easily adjust through efficiency savings or price increases.

**Mark Scheme (Levels):**
Level 3 (5-6 marks): Good analysis with developed chains of reasoning on both businesses and workers. Clear understanding of trade-offs and varying impacts. May include counter-arguments.

Level 2 (3-4 marks): Some analysis of effects on businesses and/or workers but limited development. May be one-sided or lack clear chains of reasoning.

Level 1 (1-2 marks): Limited response with basic points about wages or costs. Little or no analysis or development.

---

### Example 5: Evaluation Question (9 marks)
**Question:** Discuss whether reducing interest rates is an effective way to increase economic growth. [9 marks]

**Model Answer:**
Reducing interest rates is one of the main tools of monetary policy used to stimulate economic growth. However, its effectiveness depends on several factors.

**Arguments that lower interest rates are effective:**

Lower interest rates make borrowing cheaper for consumers and businesses → this encourages spending on goods, services, and investment → aggregate demand increases → firms respond by producing more output and hiring more workers → GDP rises.

Additionally, lower rates reduce mortgage costs → homeowners have more disposable income → they spend more on consumption → this creates a multiplier effect throughout the economy.

Lower interest rates may also cause the exchange rate to fall → UK exports become cheaper for foreign buyers → export demand increases → contributing to GDP growth.

**Arguments that lower interest rates may not be effective:**

If consumer and business confidence is very low (e.g., in a severe recession), people may not want to borrow even at low rates → they may prefer to save for uncertainty → the "liquidity trap" problem.

There are significant time lags → it takes 18-24 months for interest rate changes to fully affect the economy → this may be too slow if immediate stimulus is needed.

If rates are already very low (near zero), there is limited room to cut further → "zero lower bound" problem → as seen after 2008 when rates were 0.5% for years but growth remained slow.

Lower rates may also fuel asset price bubbles (housing, stocks) → which can create financial instability → potentially causing bigger problems later.

**Conclusion:**

Overall, reducing interest rates can be effective in stimulating growth, particularly when there is spare capacity in the economy and confidence is reasonable. However, it is not always sufficient alone. In severe recessions or when rates are already very low, fiscal policy (government spending) or supply-side policies may be more effective. The effectiveness also depends on whether banks pass on rate cuts to consumers and whether there is demand for borrowing. In most normal circumstances, interest rate cuts will provide some stimulus to growth, but they work best as part of a broader policy mix.

**Mark Scheme (Levels):**
Level 3 (7-9 marks): Balanced discussion with clear analysis of how interest rates affect growth AND evaluation of limitations. Uses chains of reasoning. Reaches a reasoned conclusion with judgement about effectiveness. Good use of economic terminology.

Level 2 (4-6 marks): Some discussion of interest rates and growth but may lack balance or full development. Some evaluation present but may be limited. Reaches a conclusion but may not be fully justified.

Level 1 (1-3 marks): Limited response with basic points about interest rates. Little or no evaluation. No clear conclusion or very superficial judgement.

---

### Example 6: Data Response Calculation (3 marks)
**Question:** The table shows data for Country X.

| Year | GDP (£billion) |
|------|---------------|
| 2022 | 500 |
| 2023 | 520 |

Calculate the GDP growth rate for Country X. Show your working. [3 marks]

**Model Answer:**
GDP growth rate = ((New GDP - Old GDP) / Old GDP) × 100 (1)

GDP growth rate = ((520 - 500) / 500) × 100 (1)

GDP growth rate = (20 / 500) × 100 = 4% (1)

**Mark Scheme:**
- 1 mark: Correct formula or method shown
- 1 mark: Correct substitution of figures
- 1 mark: Correct answer with % sign (4%)
`;

// ============================================================================
// COMMON MISTAKES AND EXAM TECHNIQUE
// ============================================================================

const AQA_GCSE_ECON_EXAM_TECHNIQUE = `## Common Mistakes and Exam Technique

### Common Mistakes to Avoid

**Definition Questions:**
- Being too vague ("It's about money")
- Not giving a full definition for 2-mark questions
- Giving an example instead of a definition
- Forgetting key words ("opportunity", "foregone", "scarcity")

**Calculation Questions:**
- Not showing working (lose marks even if answer is right)
- Forgetting units (%, £, units)
- Using wrong formula
- Sign errors with elasticity
- Rounding errors
- Not knowing formulas (PED, percentage change)

**Explain Questions:**
- Only making one point for 3-4 marks
- Not developing points (Point → Explanation → Impact)
- Repeating the same idea in different words
- Not using chains of reasoning (use → arrows)

**Analysis Questions:**
- Being one-sided (only positives OR negatives)
- Making lists without developing points
- Not using chains of reasoning
- Generic responses not applied to context
- Forgetting economic terminology

**Evaluation Questions:**
- Not reaching a conclusion
- Conclusion not supported by the argument
- Being too balanced without making a judgement
- Ignoring the question asked
- Not considering "it depends on..."
- Forgetting to evaluate both sides

### Building Chains of Reasoning

**Weak answer:** "Lower interest rates increase spending."

**Strong answer:** "Lower interest rates make borrowing cheaper → consumers face lower mortgage repayments → they have more disposable income → they increase spending on goods and services → aggregate demand rises → firms produce more → GDP increases and unemployment falls."

Use arrows (→) to show causation clearly.

### Structure for Extended Responses

**6-Mark Analysis Structure:**
1. Point 1 + development + chain of reasoning
2. Point 2 + development + chain of reasoning
3. Counter-point/alternative view if relevant

**9-Mark Evaluation Structure:**
1. Brief introduction (1-2 sentences)
2. Arguments FOR (2 developed points with chains)
3. Arguments AGAINST (2 developed points with chains)
4. Conclusion with:
   - Clear judgement answering the question
   - Key reason for your view
   - "It depends on..." qualification

### Key Economics Terminology to Use

**Microeconomics:**
Scarcity, opportunity cost, demand, supply, equilibrium, elasticity (PED, PES, YED), market failure, externalities, public goods, merit goods, demerit goods, subsidy, tax, monopoly, oligopoly, competition

**Macroeconomics:**
GDP, economic growth, inflation (demand-pull, cost-push), unemployment (cyclical, structural, frictional), aggregate demand, aggregate supply, fiscal policy, monetary policy, supply-side policies, interest rates, exchange rates, current account, trade deficit/surplus

### Using Data in Answers

**ALWAYS:**
- Reference specific figures from the question
- Use data to support your arguments
- Compare data points where relevant
- Note trends or changes
- Calculate if appropriate

**Example of good data use:**
"The data shows GDP growth of 4% in 2023, up from 2% in 2022. This indicates the economy is expanding rapidly, which may put upward pressure on inflation..."

### Time Management

| Question Type | Marks | Suggested Time |
|---------------|-------|----------------|
| Multiple choice | 1 | 1 minute |
| Definition | 2 | 2-3 minutes |
| State/Identify | 1-2 | 1-2 minutes |
| Explain | 2-4 | 3-5 minutes |
| Calculate | 2-4 | 3-4 minutes |
| Analyse (6) | 6 | 8-10 minutes |
| Evaluate (9) | 9 | 12-15 minutes |

### Diagrams

**When to draw diagrams:**
- Supply and demand shifts
- Showing market equilibrium changes
- Illustrating externalities
- AD/AS shifts

**Diagram tips:**
- Label axes clearly (P for price, Q for quantity)
- Label curves (D, S, D1, S1)
- Show original and new equilibrium
- Use arrows to show direction of shift
- Refer to diagram in your answer
`;

// ============================================================================
// REAL WORLD EXAMPLES
// ============================================================================

const AQA_GCSE_ECON_REAL_EXAMPLES = `## Real World Economics Examples

### Scarcity and Opportunity Cost
- **NHS Budget**: Limited funds mean choosing between treatments, hospitals, or staff
- **Government spending**: COVID support vs schools vs defence
- **Student time**: Revising economics vs going out with friends
- **Land use**: Housing vs green belt vs farming

### Demand and Supply Examples
- **Oil prices**: OPEC production cuts shift supply left → prices rise
- **Housing market**: Limited supply + high demand = high prices
- **Avocados**: Health trend increased demand → prices rose → farmers increased supply
- **Face masks (2020)**: Huge demand spike → prices rose → new suppliers entered

### Elasticity in Practice
- **Petrol**: Inelastic (necessity, few alternatives) - taxes effective
- **Cigarettes**: Inelastic (addictive) - but becoming more elastic as alternatives emerge
- **Branded trainers**: Elastic (many alternatives) - sensitive to price promotions
- **Insulin**: Perfectly inelastic (no alternative for diabetics)

### Market Failure Examples
- **Air pollution**: Negative externality - drivers don't pay full social cost
- **Education**: Positive externality - society benefits from educated population
- **Street lighting**: Public good - non-excludable, non-rivalrous
- **Obesity crisis**: Over-consumption of demerit goods (sugar, fast food)
- **Climate change**: Negative externality from carbon emissions

### Government Intervention Examples
- **Sugar tax (2018)**: Tax on sugary drinks to reduce consumption
- **Tobacco duty**: Over £5 per pack to discourage smoking
- **NHS**: State provision of healthcare (merit good)
- **Congestion charge**: London charge to reduce traffic externalities
- **Plastic bag charge**: 5p (now 10p) reduced usage by 95%
- **Minimum alcohol pricing**: Scotland - 50p per unit (2018)

### Inflation Examples
- **UK 2022-23**: Inflation hit 11.1% due to:
  - Energy prices (gas crisis after Ukraine invasion)
  - Supply chain disruptions (post-COVID)
  - Food prices (war affecting wheat, fertiliser)
- **1970s inflation**: UK hit 24.2% in 1975 (oil crisis + wage-price spiral)
- **Zimbabwe**: Hyperinflation 2008 - prices doubling every 24 hours

### Unemployment Examples
- **UK COVID-19**: Would have hit 12%+ without furlough scheme
- **Miners' strike 1984**: Structural unemployment from pit closures
- **Youth unemployment**: Higher in Spain/Greece (over 30%)
- **Brexit**: Some EU workers left, creating shortages in hospitality

### Fiscal Policy Examples
- **COVID furlough**: Government paid 80% of wages (£70bn total)
- **VAT cut 2020**: Temporary reduction for hospitality (20% → 5%)
- **Austerity 2010-2019**: Government spending cuts to reduce deficit
- **National Insurance rise 2022**: Planned 1.25% increase (later reversed)

### Monetary Policy Examples
- **2008 Financial Crisis**: Rates cut from 5% to 0.5%
- **Quantitative Easing**: £895bn of bonds purchased 2009-2021
- **2022-23**: Rates raised from 0.1% to 5.25% to fight inflation
- **Forward guidance**: BoE signalling future rate intentions

### Exchange Rate Examples
- **Brexit vote 2016**: £ fell 10% against $ in one day
- **Strong $ 2022**: Made UK imports more expensive
- **Weak £ benefits**: Burberry, Rolls-Royce exports cheaper
- **Strong £ drawback**: British tourists get less abroad

### International Trade Examples
- **UK exports**: Financial services, pharmaceuticals, Scotch whisky, cars
- **UK imports**: Machinery, cars, oil, gas, food
- **China trade**: UK imports far exceed exports (deficit)
- **Brexit effects**: New customs checks, some trade shifted to EU
- **Trade wars**: US-China tariffs 2018-2020

### Labour Market Examples
- **National Living Wage**: Rose from £7.83 (2018) to £11.44 (2024)
- **Gig economy**: Uber, Deliveroo - flexibility vs insecurity
- **NHS pay disputes**: Nurses, junior doctors striking 2022-24
- **Skills shortages**: HGV drivers, care workers, hospitality

### Competition Examples
- **Google**: Investigated for search monopoly (90%+ market share)
- **Supermarket merger blocked**: Sainsbury's-Asda (2019) - CMA said would raise prices
- **Energy market**: Price cap introduced due to limited competition
- **Banking**: Challenger banks (Monzo, Starling) increasing competition

### Financial Market Examples
- **2008 Crisis**: Lehman Brothers collapse, bank bailouts
- **UK bank bailouts**: RBS (£45bn), Lloyds (£20bn)
- **Interest rates 2008-2021**: Near zero for over a decade
- **SVB collapse 2023**: US bank failure, contagion fears
- **Pension crisis 2022**: Mini-budget caused gilt market turmoil
`;

// ============================================================================
// ESSAY GUIDANCE
// ============================================================================

const AQA_GCSE_ECON_ESSAY_GUIDANCE = `
## Extended Response Guidance for GCSE Economics

### What Examiners Want (9-Mark Questions)

**Level 3 responses show:**
1. Clear, accurate knowledge of relevant economic concepts
2. Effective application to the context/question
3. Developed chains of reasoning (logical arguments)
4. Balanced evaluation (both sides considered)
5. Well-supported judgement with clear conclusion
6. Good use of economic terminology

### Building Chains of Reasoning

**Weak:** "Inflation is bad for the economy."

**Strong:** "High inflation erodes the purchasing power of consumers → with the same income, they can afford fewer goods and services → this reduces their standard of living → furthermore, if UK inflation is higher than competitors, UK exports become less competitive abroad → leading to lower export demand → which reduces aggregate demand and could increase unemployment."

### Structure for 9-Mark Evaluation

**Introduction (1-2 sentences):**
- Brief context if needed
- Signal you understand the question

**Arguments FOR (2 paragraphs):**
- Point + explanation + development using chains of reasoning
- Link explicitly to the question

**Arguments AGAINST (2 paragraphs):**
- Counter-point + explanation + development
- Show awareness of limitations/alternatives

**Conclusion (1 paragraph):**
- Clear judgement answering the question
- Key reason for your decision
- "It depends on..." qualification
- Forward-looking statement if relevant

### Evaluation Techniques for GCSE Economics

**1. Weighing Up:**
"While fiscal stimulus can boost growth in the short term, there is a risk that increased government borrowing could lead to higher interest rates in the long term, potentially crowding out private investment."

**2. Time Horizons:**
"In the short run, lower interest rates may not immediately boost spending if confidence is very low. However, in the long run, as the economy recovers, the lower rates should encourage borrowing and investment."

**3. Depends On:**
"The effectiveness of supply-side policies depends on the state of the economy. In a recession, when aggregate demand is the main problem, improving the supply side will have little impact. But in an economy near full capacity, supply-side improvements can deliver growth without inflation."

**4. Different Stakeholders:**
"While consumers benefit from lower prices due to competition, this may come at the cost of workers in affected industries who face job losses or lower wages."

**5. Unintended Consequences:**
"Although subsidies for electric vehicles aim to reduce carbon emissions, they may disproportionately benefit wealthier consumers who can afford EVs, while public transport investment might have more widespread environmental benefits."

### Useful Phrases for Economics Essays

**For analysis:**
- "This leads to..."
- "As a result..."
- "Consequently..."
- "This means that..."
- "Therefore..."
- "This causes..."

**For counter-argument:**
- "However..."
- "On the other hand..."
- "Nevertheless..."
- "In contrast..."
- "Although..."
- "Conversely..."

**For evaluation:**
- "On balance..."
- "Overall..."
- "The most significant factor is..."
- "This depends on..."
- "The extent to which..."
- "It could be argued that..."
- "A key consideration is..."

**For conclusion:**
- "In conclusion..."
- "Therefore, I believe..."
- "Ultimately..."
- "Taking all factors into account..."
- "While both views have merit, on balance..."

### Common GCSE Economics Mistakes

1. **Not using economic terminology** - Use proper terms (aggregate demand, not "total spending")
2. **Being one-sided** - Always consider counter-arguments
3. **No chains of reasoning** - Connect ideas with cause and effect
4. **Ignoring the question** - Answer what is asked, not what you know
5. **No conclusion** - Always give a clear judgement
6. **Assertion without explanation** - Develop every point made
7. **Forgetting context** - Apply to the scenario/data given
8. **Not using diagrams when helpful** - S&D diagrams can earn marks
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEEconomicsSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = AQA_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert AQA GCSE Economics examiner creating exam-style questions.

${AQA_GCSE_ECON_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${AQA_GCSE_ECON_QUESTION_TEMPLATES}

${AQA_GCSE_ECON_MARK_SCHEME_CONVENTIONS}

${AQA_GCSE_ECON_KEY_FORMULAS}

${AQA_GCSE_ECON_WORKED_EXAMPLES}

${AQA_GCSE_ECON_EXAM_TECHNIQUE}

${AQA_GCSE_ECON_REAL_EXAMPLES}

${AQA_GCSE_ECON_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic AQA Style**: Match real AQA paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, state/identify, calculations, simple explanations (1-4 marks)
   - Medium: Analysis questions with chains of reasoning (6 marks)
   - Hard: Evaluation questions with balanced arguments and judgement (9 marks)
5. **Use Specific Knowledge**: Include real economic examples, data, and terminology from the topic knowledge provided
6. **Context-Based**: For medium and hard questions, create a realistic economic scenario

## Response Format
Return JSON with:
- "content": Question text (including any data/scenario for medium/hard questions)
- "marks": Total marks
- "solution": Model answer demonstrating exam technique
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('economics')}`;
}

export function getAQAGCSEEconomicsQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getEconomicsVarietyInstructions(variety);
  const topicKnowledge = AQA_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define what is meant by [term]" [2 marks]
- "State one/two [economic concept/reason/cause]" [1-2 marks]
- "Calculate [measure]. Show your working" [2-3 marks]
- "Explain one [effect/reason/way]" [2-3 marks]

**Mark Scheme Format:**
- Definitions: 2 marks for complete definition, 1 mark for partial
- State/Identify: 1 mark per valid point
- Explain: Point (1) + Development (1) + Further development (1)
- Calculate: Method (1) + Working (1) + Answer with units (1)

**Model Answer should:**
- Give precise economic definition OR clear identification
- For explains: develop using Point → Explanation → Impact chain
- For calculations: show all working clearly with correct units

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create an ANALYSIS question requiring chains of reasoning (AO2/AO3).

**Question Types for Medium:**
- "Analyse [the impact/effects/consequences] of..." [6 marks]
- "Analyse how [economic change] affects [group/economy]" [6 marks]
- "Analyse the advantages and disadvantages of [policy/action]" [6 marks]

**Mark Scheme Format (Levels):**
- Level 3 (5-6): Good analysis with developed chains of reasoning. Clear understanding shown. May include some evaluation.
- Level 2 (3-4): Some analysis but limited development. May be one-sided.
- Level 1 (1-2): Limited response, mainly knowledge-based, little or no analysis.

**Model Answer MUST include:**
- Multiple developed points using chains of reasoning (→)
- Both positives AND negatives OR multiple effects
- Application to realistic economic context
- Economic terminology used correctly
- Clear cause-and-effect relationships

**For context, create a brief economic scenario (2-3 sentences) or use real data.**

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create an EVALUATION question requiring balanced judgement (AO3).

**Question Types for Hard:**
- "Discuss whether [policy/action] is effective for [objective]" [9 marks]
- "Evaluate the view that [economic proposition]" [9 marks]
- "To what extent [should/does/would]..." [9 marks]
- "Assess [economic impact/decision/policy]" [9 marks]

**Mark Scheme Format (Levels):**
- Level 3 (7-9): Balanced evaluation with clear judgement. Well-developed analysis on both sides. Strong application to context. Uses economic terminology effectively. Reaches reasoned conclusion.
- Level 2 (4-6): Some evaluation present but may lack balance or full development. Some analysis of the issue. Reaches a conclusion but may not be fully justified.
- Level 1 (1-3): Limited response with little evaluation. Basic points with limited development. Generic, not applied to context.

**Model Answer MUST include:**
- Arguments FOR (2+ developed points with chains of reasoning using →)
- Arguments AGAINST (2+ developed points with chains of reasoning using →)
- Consideration of "it depends on..." factors
- Clear, justified conclusion that directly answers the question
- Economic terminology throughout
- Reference to real-world examples or data where appropriate

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an AQA GCSE Economics question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

${difficultyGuidance[difficulty]}

## Critical Requirements:
1. Use SPECIFIC economic terminology from the topic knowledge
2. For medium/hard: Include realistic economic context or data
3. Model answer must demonstrate exam technique with chains of reasoning
4. Mark scheme must be detailed and aligned with AQA conventions
5. For hard questions: Include balanced evaluation with justified conclusion

Return valid JSON:
{
  "content": "question text including any data/scenario",
  "marks": number,
  "solution": "model answer demonstrating exam technique",
  "markScheme": ["point 1 or Level 3 descriptor", "point 2 or Level 2 descriptor", ...]
}`;
}

export function getAQAGCSEEconomicsMCQPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = AQA_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an AQA GCSE Economics MULTIPLE CHOICE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create a multiple choice question with:
- Clear stem that tests understanding (not just recall)
- Four options (A, B, C, D)
- One correct answer
- Three plausible distractors (common misconceptions)

**Format exactly like AQA:**
"Which one of the following [question]?
A [option]
B [option]
C [option]
D [option]"

**Marks**: 1 mark

**Solution must:**
- State correct answer letter
- Briefly explain why correct
- Note why each distractor is wrong

Return valid JSON:
{
  "content": "question text with options",
  "marks": 1,
  "solution": "A. [explanation of why A is correct and others wrong]",
  "markScheme": ["1 mark for correct answer"]
}`;
}

export function getAQAGCSEEconomicsCalculationPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA GCSE Economics CALCULATION question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question requiring economic calculation. May include:
- Price elasticity of demand (PED)
- Price elasticity of supply (PES)
- Percentage changes (GDP growth, inflation rate)
- Unemployment rate
- GDP calculations
- Total revenue/cost calculations

**Marks**: 2-4 marks

**Format**: "Calculate [measure]. Show your working."

**Include realistic economic data in the question:**
- A table or figures to work with
- Plausible numbers for UK economy

**Mark scheme should:**
- Award marks for correct formula/method
- Award marks for correct arithmetic/working
- Award marks for correct final answer with units
- Note: "Own figure rule - allow follow-through marks for incorrect arithmetic if method correct"

Return valid JSON:
{
  "content": "question text with data",
  "marks": number,
  "solution": "step-by-step calculation with answer",
  "markScheme": ["method mark", "working mark", "answer mark"]
}`;
}

export function getAQAGCSEEconomicsExtendedPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA GCSE Economics EXTENDED RESPONSE question (9 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a discussion/evaluation question requiring balanced analysis.

**Format**: "Discuss whether..." or "Evaluate..." or "To what extent..."

**Mark scheme must use Levels of Response:**
- Level 3 (7-9 marks): Clear, accurate knowledge; effective application; logical chains of reasoning; well-supported judgement with conclusion
- Level 2 (4-6 marks): Mostly clear knowledge; some application; some logical reasoning; supported judgement
- Level 1 (1-3 marks): Limited knowledge; limited application; undeveloped reasoning; superficial judgement
- 0 marks: Nothing creditworthy

Include indicative content listing:
- Points supporting the proposition
- Counter-arguments
- Factors affecting the judgement
- Possible conclusions

Model answer should demonstrate:
- Full essay structure
- Chains of reasoning (using →)
- Economic terminology
- Balanced evaluation
- Clear conclusion with "it depends on..."

Return valid JSON:
{
  "content": "question text",
  "marks": 9,
  "solution": "full model answer",
  "markScheme": ["Level 3 descriptor", "Level 2 descriptor", "Level 1 descriptor", "Indicative content points"]
}`;
}

// Helper function for economics-specific variety
function getEconomicsVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const economicContexts = [
    'UK economy',
    'international trade',
    'household decisions',
    'business/firm behaviour',
    'government policy',
    'labour market',
    'financial markets',
    'developing country',
    'European economy',
    'global economy'
  ];

  const economicSituations = [
    'an economic boom',
    'a recession',
    'high inflation',
    'rising unemployment',
    'a trade deficit',
    'exchange rate changes',
    'interest rate changes',
    'government policy change',
    'market failure situation',
    'technological change'
  ];

  const randomContext = economicContexts[Math.floor(Math.random() * economicContexts.length)];
  const randomSituation = economicSituations[Math.floor(Math.random() * economicSituations.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Economic Context:** Set the question in the context of ${randomContext}

**Economic Situation:** Consider a scenario involving ${randomSituation}

**Question Angle:** Consider approaching from perspective of:
- Consumer/household
- Producer/firm
- Worker/employee
- Government/policymaker
- The economy as a whole

**Data/Scenario Type:** Consider including:
- A change in an economic variable (price, interest rate, exchange rate)
- Economic data (GDP figures, inflation rates, unemployment data)
- A policy decision or proposal
- A market situation or change
- International economic development

IMPORTANT: Create a realistic, believable scenario that a GCSE student could engage with. Use realistic UK economic data and contexts where appropriate.`;
}

// Legacy exports for backwards compatibility
export const getAQAEconomicsSystemPrompt = getAQAGCSEEconomicsSystemPrompt;
export const getAQAEconomicsQuestionPrompt = getAQAGCSEEconomicsQuestionPrompt;
export const getAQAEconomicsCalculationPrompt = getAQAGCSEEconomicsCalculationPrompt;
export const getAQAEconomicsExtendedPrompt = getAQAGCSEEconomicsExtendedPrompt;
