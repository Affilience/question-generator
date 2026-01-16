// OCR GCSE Economics (J205) Question Generation Prompts
// Based on analysis of actual OCR past papers (June 2022, 2023, 2024)
// and official mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/economics-j205-from-2017/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
  getMarkRangeForDifficulty,
} from './prompts-common';

// ============================================================================
// OCR GCSE ECONOMICS SPECIFICATION DETAILS (J205)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_GCSE_ECON_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Economics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of economic concepts and issues | 30% |
| **AO2** | Apply knowledge and understanding of economic concepts and issues to a variety of contexts | 30% |
| **AO3** | Analyse economic issues and problems, making reasoned judgements and presenting conclusions | 20% |
| **AO4** | Evaluate economic issues, arguments, proposals and policies, making reasoned judgements and presenting conclusions | 20% |

### Paper Structure (Total: 180 marks)
| Component | Title | Time | Marks | Weighting |
|-----------|-------|------|-------|-----------|
| **J205/01** | Introduction to Economics | 1h 30m | 90 | 50% |
| **J205/02** | National and International Economics | 1h 30m | 90 | 50% |

### Question Format
Both components contain:
- **20 multiple choice questions** (20 marks)
- **Short answer and extended response questions** (70 marks)
- **Extended response questions marked with asterisk (*)**

### Component 1 Topics (Introduction to Economics)
- Main economic groups and factors of production
- Markets (demand, supply, equilibrium, elasticity)
- Market failure and government intervention
- Production, costs, revenue and profit

### Component 2 Topics (National and International Economics)
- The national economy (macroeconomic indicators, aggregate demand)
- Government economic objectives and policies
- International trade and the global economy
- Economic development and living standards
`;

const OCR_GCSE_ECON_QUESTION_TEMPLATES = `
## Authentic OCR GCSE Economics Question Formats

### Type 1: Multiple Choice (1 mark)
Format: "Which of the following..."
- Four options (A, B, C, D)
- Single correct response
**Real examples from OCR papers:**
- "Which of the following is a characteristic of a mixed economy? A Government owns all businesses, B Prices are set by the government, C Both the private and public sector produce goods, D There is no international trade" [1 mark]
- "What happens to the equilibrium price if demand increases and supply decreases? A It rises, B It falls, C It stays the same, D It cannot be determined" [1 mark]

### Type 2: Definition Question (1-2 marks)
Format: "Define the term '[term]'"
OR "What is meant by '[term]'?"
**Real examples:**
- "Define the term 'opportunity cost'" [2 marks]
- "What is meant by 'price elasticity of demand'?" [2 marks]
- "Define 'market failure'" [2 marks]
- "What is meant by 'gross domestic product'?" [2 marks]

### Type 3: State/Identify (1-2 marks)
Format: "State one [feature/example/reason]"
OR "Identify two [factors/causes]"
**Real examples:**
- "State two factors that could cause a shift in the demand curve" [2 marks]
- "Identify one example of a negative externality" [1 mark]
- "State two aims of government economic policy" [2 marks]

### Type 4: Explain (2-4 marks)
Format: "Explain how [X] affects [Y]"
OR "Explain why [outcome] might occur"
**Real examples:**
- "Explain how an increase in income tax might affect consumer spending" [4 marks]
- "Explain why a monopoly might lead to higher prices for consumers" [4 marks]
- "Explain one advantage of international trade for a country" [3 marks]

### Type 5: Calculation (2-4 marks)
Format: "Calculate [measure]. Show your working."
**Real examples:**
- "Using the data, calculate the price elasticity of demand. Show your working" [3 marks]
- "Calculate the total revenue at a price of 15. Show your working" [2 marks]
- "Using the information, calculate the percentage change in GDP. Show your working" [3 marks]

### Type 6: Analysis (4-6 marks)
Format: "Analyse the [impact/effect] of..."
- Requires chains of reasoning
- Context application essential
**Real examples:**
- "Analyse how a fall in unemployment might affect the UK economy" [6 marks]
- "Analyse the impact of imposing a minimum price on the market for alcohol" [6 marks]
- "Analyse how globalisation has affected UK businesses" [6 marks]

### Type 7: Extended Response (*) (8-12 marks)
Format: "*Evaluate..." or "*Discuss..."
- Marked with asterisk
- Uses Levels of Response
- Requires evaluation and judgement
**Real examples:**
- "*Evaluate whether raising interest rates is an effective way to control inflation" [12 marks]
- "*Discuss whether government intervention in markets always benefits consumers" [12 marks]
- "*Evaluate the view that economic growth is the most important government objective" [12 marks]

### Type 8: Data Response (varies)
Format: Questions based on extracts
- "Using Extract [X], explain..."
- "Using the data, calculate..."
- "Refer to Extract [X] in your answer"
`;

const OCR_GCSE_ECON_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE Economics Mark Scheme Conventions (From Official 2021-2024 Mark Schemes)

### Paper Structure (Official OCR)
Both components include 20 MCQs (20 marks) + structured questions (70 marks).
Total mark for each paper: 90 marks.
Quality of extended response assessed in questions marked with asterisk (*).

### How to Apply Levels of Response (OCR Official Guidance)
"To determine the level - start at the highest level and work down until you reach the level that matches the answer."
"To determine the mark within the level, consider achievement thresholds:"
- "Just enough achievement on balance for this level" -> bottom of level
- "Above bottom and either below middle or at middle of level"
- "Meets the criteria but with some slight inconsistency"
- "Consistently meets the criteria for this level" -> top of level

### Extended Response - Levels of Response (6-Mark Questions)
**Level 3 (5-6 marks):** AO1a - 1 mark, AO2 - 2 marks, AO3a - 3 marks
- Reasonable knowledge and understanding
- Good application of knowledge - terms/concepts used/adapted in context
- "Good understanding of all the relevant elements of the scenario"
- Reasonable analysis - "correct analysis, largely in the form of single effects that address the question"

**Level 2 (3-4 marks):**
- Some knowledge and understanding
- Some application to context
- Some analysis with basic reasoning

**Level 1 (1-2 marks):**
- Limited knowledge and understanding
- Limited application
- Limited analysis

### Extended Response - Levels of Response (12-Mark Questions)
**Level 4 (10-12 marks):**
- Thorough knowledge and understanding
- Applies knowledge effectively to the context
- Analyses effectively with well-developed chains of reasoning
- Evaluates to develop a convincing and well-supported judgement

**Level 3 (7-9 marks):**
- Good knowledge and understanding
- Applies knowledge to the question/context
- Analyses with clear chains of reasoning
- Evaluates to develop a supported judgement

**Level 2 (4-6 marks):**
- Some knowledge and understanding
- Some application to question/context
- Some analysis with basic chains of reasoning
- Some evaluation with a basic judgement

**Level 1 (1-3 marks):**
- Limited knowledge and understanding
- Limited application
- Limited analysis
- Limited evaluation with unsupported assertion

**0 marks:** Nothing creditworthy

### Contradictory Responses (OCR Official)
"When a candidate provides contradictory responses, then no mark should be awarded, even if one of the answers is correct."

### Multiple Choice Marking (OCR Official)
"When a multiple-choice question has only a single, correct response and a candidate provides two responses (even if one is correct), then no mark should be awarded."
"For short answer questions requiring only a list by way of a response, only the set number of responses should be marked."

### Calculation Questions
- Award method marks for correct formula
- Award accuracy marks for correct answer
- Units required where appropriate (%, currency, etc.)
- "Allow follow through if method correct"

### Crossed Out Responses (OCR Official)
"Where a candidate has crossed out a response and provided a clear alternative, the crossed-out response is not marked."
"Where no alternative response has been provided, examiners may give candidates the benefit of the doubt and mark the crossed-out response where legible."

### Quality of Written Communication (Extended Response)
For responses marked with asterisk (*):
- "There is a line of reasoning presented with some structure"
- "The information presented is in the most-part relevant and supported"
- Appropriate use of economic terminology
- Logical structure and coherence
- Accuracy of spelling, punctuation and grammar
`;

const OCR_GCSE_ECON_KEY_CONCEPTS = `
## Key Economic Concepts for OCR GCSE

### Elasticity Formulas
- **PED** = % change in Qd / % change in P
- **PES** = % change in Qs / % change in P
- **YED** = % change in Qd / % change in Y
- **XED** = % change in Qd of A / % change in P of B

### Elasticity Interpretation
| PED Value | Term | Example |
|-----------|------|---------|
| PED > 1 | Price elastic | Luxury goods, items with substitutes |
| PED < 1 | Price inelastic | Necessities, addictive goods |
| PED = 1 | Unitary elastic | Special theoretical case |
| PED = 0 | Perfectly inelastic | Life-saving medicine |
| PED = infinity | Perfectly elastic | Perfect substitutes |

### Market Diagrams
- Supply and demand curves
- Equilibrium price and quantity
- Consumer and producer surplus
- Effect of taxes and subsidies
- Price floors and ceilings

### Macroeconomic Indicators
- **GDP** (Gross Domestic Product): Total value of goods and services produced
- **Inflation**: General rise in price level (measured by CPI)
- **Unemployment rate**: % of labour force without jobs
- **Current account**: Record of trade in goods/services with rest of world

### Government Economic Policies
- **Fiscal Policy**: Government spending and taxation
- **Monetary Policy**: Interest rates and money supply
- **Supply-side Policy**: Policies to increase productive capacity

### Aggregate Demand Components
**AD = C + I + G + (X - M)**
- C = Consumer spending
- I = Investment
- G = Government spending
- X = Exports
- M = Imports
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const OCR_GCSE_ECON_TOPIC_KNOWLEDGE: Record<string, string> = {
  'ocr-gcse-econ-groups': `## Introduction to Economics Topic Knowledge

### The Economic Problem
**Definition**: Unlimited wants + Limited resources = Scarcity
- Scarcity forces choices to be made
- All choices involve trade-offs
- This creates the need for economic decision-making

### Opportunity Cost
**Definition**: The next best alternative forgone when a choice is made
**Examples:**
- Student choosing to study instead of working part-time: opportunity cost = lost wages
- Government spending on defence instead of healthcare: opportunity cost = healthcare improvements
- Firm investing in machinery instead of marketing: opportunity cost = potential sales from marketing

**Why it matters:**
- Every decision has an opportunity cost
- Helps evaluate trade-offs
- Essential for rational decision-making

### Factors of Production
| Factor | Definition | Reward | Examples |
|--------|------------|--------|----------|
| **Land** | Natural resources | Rent | Oil, minerals, farmland, water |
| **Labour** | Human effort/work | Wages | Workers, skills, education |
| **Capital** | Man-made resources for production | Interest | Machinery, factories, tools |
| **Enterprise** | Risk-taking, organising other factors | Profit | Entrepreneurs, business owners |

### Economic Agents (Main Economic Groups)
1. **Households/Consumers**: Buy goods and services, supply labour
2. **Firms/Producers**: Produce goods and services, employ factors
3. **Government**: Provides public services, regulates economy
4. **Foreign Sector**: International trade partners

### Production Possibility Curve (PPC)
**Definition**: Shows maximum combinations of two goods an economy can produce with available resources

**Key Features:**
- Points ON the curve: Efficient (using all resources)
- Points INSIDE the curve: Inefficient (resources underutilised)
- Points OUTSIDE the curve: Currently unattainable

**Shifts in the PPC:**
- **Outward shift**: Economic growth (more resources, better technology)
- **Inward shift**: Economic decline (war, natural disaster)

**What it shows:**
- Scarcity (limited production possibilities)
- Opportunity cost (moving along the curve)
- Efficiency vs inefficiency
- Economic growth potential

**Real Example:**
If UK produces only cars and food:
- Producing more cars means fewer resources for food (opportunity cost)
- Curve shows trade-off between the two
- Moving from point A to B on curve shows opportunity cost of extra cars

### Economic Systems

**Free Market Economy (Capitalism)**
- Private ownership of factors of production
- Price mechanism allocates resources
- Profit motive drives decisions
- Consumer sovereignty
- Examples: Hong Kong, Singapore
- Advantages: Efficiency, innovation, choice
- Disadvantages: Inequality, market failure, instability

**Command/Planned Economy**
- State ownership of factors of production
- Central planning allocates resources
- Government sets production targets
- Examples: North Korea, Cuba (historically USSR)
- Advantages: Equality, full employment, public goods provided
- Disadvantages: Inefficiency, lack of choice, poor incentives

**Mixed Economy**
- Combination of private and public sector
- Both market forces and government intervention
- Examples: UK, USA, Germany, France
- Advantages: Balance between efficiency and equity
- Disadvantages: Conflicts between sectors, complexity

### Specialisation and Division of Labour
**Specialisation**: Focusing on producing limited range of goods
**Division of Labour**: Breaking production into separate tasks

**Advantages:**
- Higher productivity/efficiency
- Workers become experts
- Economies of scale
- Lower unit costs
- Better use of specific skills

**Disadvantages:**
- Work becomes boring/repetitive
- Worker dependency (if one absent, production stops)
- Structural unemployment if demand changes
- Loss of craftsmanship

**Real Examples:**
- Car assembly line: workers specialise in one task (Ford Model T)
- Countries specialise: UK in financial services, China in manufacturing
- Doctors specialise: cardiologists, surgeons, GPs`,

  'ocr-gcse-econ-markets': `## Markets Topic Knowledge

### What is a Market?
**Definition**: Any arrangement that brings buyers and sellers together to exchange goods and services

**Types of Markets:**
- Product markets (goods and services)
- Factor markets (land, labour, capital)
- Financial markets (money, shares, bonds)
- Physical markets (shops, markets)
- Virtual markets (online, eBay, Amazon)

### Demand
**Definition**: Quantity of a good consumers are willing and able to buy at each price, ceteris paribus

**Law of Demand**: As price rises, quantity demanded falls (inverse relationship)

**Individual vs Market Demand:**
- Individual: One consumer's demand
- Market: Sum of all individual demands (horizontal addition)

**Demand Curve**: Downward sloping (price on Y-axis, quantity on X-axis)

### Factors Causing Shifts in Demand (Non-Price Factors)
Movement ALONG curve = price change
SHIFT of curve = non-price factor change

| Factor | Shift Right (Increase) | Shift Left (Decrease) |
|--------|----------------------|----------------------|
| **Income** (normal goods) | Income rises | Income falls |
| **Income** (inferior goods) | Income falls | Income rises |
| **Price of substitutes** | Substitute price rises | Substitute price falls |
| **Price of complements** | Complement price falls | Complement price rises |
| **Tastes/fashion** | Good becomes fashionable | Good goes out of fashion |
| **Population** | Population increases | Population decreases |
| **Advertising** | Successful advertising | Competitor advertising |
| **Expectations** | Expect price to rise | Expect price to fall |

### Supply
**Definition**: Quantity of a good producers are willing and able to sell at each price, ceteris paribus

**Law of Supply**: As price rises, quantity supplied rises (direct relationship)

**Supply Curve**: Upward sloping

### Factors Causing Shifts in Supply
| Factor | Shift Right (Increase) | Shift Left (Decrease) |
|--------|----------------------|----------------------|
| **Cost of production** | Costs fall | Costs rise |
| **Technology** | Improvement | Breakdown/obsolescence |
| **Subsidies** | Subsidy introduced/increased | Subsidy removed |
| **Taxes** | Tax reduced/removed | Tax introduced/increased |
| **Weather** (agriculture) | Favourable weather | Adverse weather |
| **Number of firms** | More firms enter | Firms exit market |
| **Productivity** | Productivity rises | Productivity falls |

### Market Equilibrium
**Equilibrium**: Where supply equals demand (market clears)
**Equilibrium Price**: Price at which Qd = Qs (no shortage or surplus)
**Equilibrium Quantity**: Quantity bought and sold at equilibrium price

**Disequilibrium:**
- **Excess Demand (Shortage)**: Price below equilibrium, Qd > Qs, price rises
- **Excess Supply (Surplus)**: Price above equilibrium, Qs > Qd, price falls

### Price Elasticity of Demand (PED)
**Formula**: PED = (% change in Qd) / (% change in P)

**Calculation Example:**
Price rises from 10 to 12 (20% increase)
Quantity demanded falls from 100 to 80 (20% decrease)
PED = -20% / 20% = -1 (unitary elastic)

**Interpretation:**
| Value | Classification | Meaning |
|-------|---------------|---------|
| PED > 1 | Elastic | % change in Qd > % change in P |
| PED < 1 | Inelastic | % change in Qd < % change in P |
| PED = 1 | Unitary | % change in Qd = % change in P |
| PED = 0 | Perfectly inelastic | Qd doesn't change |
| PED = infinity | Perfectly elastic | Any price rise = Qd falls to zero |

**Factors Affecting PED:**
- **Substitutes**: More substitutes = more elastic
- **Necessity vs luxury**: Necessities = inelastic
- **Proportion of income**: Higher proportion = more elastic
- **Time period**: Longer time = more elastic
- **Addiction**: Addictive goods = inelastic

**PED and Total Revenue:**
- Elastic demand: Price cut increases total revenue
- Inelastic demand: Price cut decreases total revenue
- Businesses use PED to set prices

**Real Examples:**
- Petrol: Inelastic (necessity, few substitutes)
- Luxury holidays: Elastic (many substitutes, not essential)
- Salt: Very inelastic (cheap, necessary)
- Branded goods: More elastic than unbranded

### Price Elasticity of Supply (PES)
**Formula**: PES = (% change in Qs) / (% change in P)

**Factors Affecting PES:**
- **Spare capacity**: More capacity = more elastic
- **Stock levels**: Higher stocks = more elastic
- **Ease of switching production**: Easier = more elastic
- **Time period**: Longer = more elastic
- **Factor mobility**: More mobile = more elastic

### Income Elasticity of Demand (YED)
**Formula**: YED = (% change in Qd) / (% change in Y)

| YED Value | Type of Good | Example |
|-----------|-------------|---------|
| YED > 1 | Luxury goods | Designer clothes, holidays |
| 0 < YED < 1 | Normal necessities | Food, utilities |
| YED < 0 | Inferior goods | Budget brands, bus travel |

### Cross Elasticity of Demand (XED)
**Formula**: XED = (% change in Qd of A) / (% change in P of B)

| XED Value | Relationship | Example |
|-----------|-------------|---------|
| XED > 0 | Substitutes | Butter and margarine |
| XED < 0 | Complements | Printers and ink |
| XED = 0 | Unrelated | Cars and bread |

### Consumer and Producer Surplus
**Consumer Surplus**: Difference between what consumers are willing to pay and what they actually pay
**Producer Surplus**: Difference between the price producers receive and the minimum they would accept

**On a diagram:**
- Consumer surplus = area below demand curve, above price
- Producer surplus = area above supply curve, below price`,

  'ocr-gcse-econ-market-structures': `## Market Structures Topic Knowledge

### Perfect Competition
**Characteristics:**
- Many buyers and sellers (no market power)
- Homogeneous (identical) products
- Perfect information
- No barriers to entry/exit
- Price takers (firms accept market price)
- Normal profits in long run

**Real-world approximations:**
- Agricultural markets (wheat, corn)
- Foreign exchange markets
- Stock markets

**Advantages:**
- Allocative efficiency (P = MC)
- Productive efficiency (lowest cost)
- Consumer sovereignty
- No abnormal profits in long run

**Disadvantages:**
- No economies of scale
- No funds for R&D/innovation
- Homogeneous products (no variety)
- May not be realistic

### Monopoly
**Definition**: Single seller dominates market (100% market share)
**Legal Definition (UK)**: Firm with 25%+ market share can be investigated

**Characteristics:**
- Single seller/dominant firm
- High barriers to entry
- Price maker (sets own price)
- Unique product (no close substitutes)
- Abnormal (supernormal) profits possible
- Imperfect information

**Barriers to Entry:**
- Legal barriers (patents, licences)
- Economies of scale (natural monopoly)
- Brand loyalty
- Control of essential resources
- High start-up costs
- Aggressive tactics (predatory pricing)

**Advantages of Monopoly:**
- Economies of scale = lower costs = potentially lower prices
- Profits fund R&D and innovation
- Natural monopolies avoid wasteful duplication
- Cross-subsidisation of unprofitable services

**Disadvantages of Monopoly:**
- Higher prices than competition
- Lower output (restricting supply)
- Reduced consumer choice
- Less incentive to be efficient (X-inefficiency)
- Allocative inefficiency (P > MC)
- Exploitation of consumers

**Real Examples:**
- Water companies (natural monopoly)
- Network Rail (infrastructure)
- Microsoft (operating systems, historically)
- Google (search engine dominance)

### Oligopoly
**Definition**: Market dominated by few large firms

**Characteristics:**
- Few large firms dominate
- High barriers to entry
- Interdependence (firms react to each other)
- Non-price competition common
- Price rigidity
- Product differentiation

**Competition in Oligopoly:**
**Non-price competition:**
- Advertising and branding
- Quality improvements
- Customer service
- Loyalty schemes
- Packaging and design

**Why price competition is avoided:**
- Price wars damage all firms
- Kinked demand curve theory
- Tacit collusion easier

**Collusion:**
- **Cartel**: Formal agreement to fix prices/output (illegal in UK)
- **Tacit collusion**: Informal price leadership
- Example: OPEC (oil producers)

**Real Examples (UK):**
- Supermarkets: Tesco, Sainsbury's, Asda, Morrisons
- Banks: Barclays, HSBC, Lloyds, NatWest
- Mobile networks: EE, O2, Vodafone, Three
- Petrol: Shell, BP, Esso, Texaco

### Monopolistic Competition
**Characteristics:**
- Many sellers
- Product differentiation
- Low barriers to entry/exit
- Non-price competition
- Some price-making power
- Normal profits in long run

**Real Examples:**
- Restaurants and cafes
- Hairdressers
- Clothing retailers
- Local shops

### Contestable Markets
**Definition**: Markets with low barriers to entry and exit

**Key Features:**
- Free entry and exit
- No sunk costs
- Threat of competition disciplines firms
- Hit-and-run competition possible

**Implications:**
- Even monopolies may behave competitively if market is contestable
- Potential competition matters
- Low barriers more important than number of firms

**Real Examples:**
- Airlines (low-cost carriers)
- Online retail
- Bus services

### Competition and Markets Authority (CMA)
**Role:**
- Investigate mergers
- Prevent anti-competitive behaviour
- Protect consumers
- Break up monopolies if necessary

**Powers:**
- Block mergers
- Fine companies
- Require behavioural changes
- Order divestment of assets`,

  'ocr-gcse-econ-market-failure': `## Market Failure and Government Intervention Topic Knowledge

### What is Market Failure?
**Definition**: When the free market fails to allocate resources efficiently, leading to a loss of economic welfare

**Types:**
- Externalities (positive and negative)
- Public goods
- Merit goods and demerit goods
- Information failure
- Factor immobility
- Inequality
- Monopoly power

### Externalities
**Definition**: Third-party effects of economic activity (spillover effects)

**Negative Externalities (External Costs)**
**Definition**: Harmful effects on third parties not involved in the transaction

| Source | Effect | Third Party |
|--------|--------|-------------|
| Factory pollution | Health problems | Local residents |
| Smoking | Passive smoking | Non-smokers |
| Traffic congestion | Time delays | Other road users |
| Alcohol | Violence, NHS costs | Society |
| Noise from airport | Disrupted sleep | Nearby residents |

**Key Concept**:
- Private costs < Social costs
- Social Cost = Private Cost + External Cost
- Market produces too much (overproduction)

**Positive Externalities (External Benefits)**
**Definition**: Beneficial effects on third parties

| Source | Effect | Third Party |
|--------|--------|-------------|
| Education | Skilled workforce | Employers |
| Vaccination | Reduced disease spread | Unvaccinated people |
| R&D/Innovation | Knowledge spillovers | Other firms |
| Beekeeping | Pollination | Farmers |
| Home renovation | Improved area appearance | Neighbours |

**Key Concept**:
- Private benefits < Social benefits
- Social Benefit = Private Benefit + External Benefit
- Market produces too little (underproduction)

### Public Goods
**Characteristics:**
- **Non-excludable**: Cannot prevent non-payers from consuming
- **Non-rivalrous**: One person's consumption doesn't reduce availability for others

**Examples:**
- Street lighting
- National defence
- Lighthouses
- Flood defences
- Public parks

**The Free Rider Problem:**
- People benefit without paying
- No incentive to reveal true preferences
- Private markets won't provide (no profit)
- Government must provide and fund through taxation

### Merit Goods
**Definition**: Goods that are underconsumed because people don't realise the full benefits

**Characteristics:**
- Positive externalities
- Information failure
- Underprovided by free market

**Examples:**
- Education
- Healthcare
- Museums
- Libraries
- Vaccinations
- Exercise

**Why underconsumed:**
- Short-termism (don't see future benefits)
- Imperfect information
- Don't account for external benefits

### Demerit Goods
**Definition**: Goods that are overconsumed because people don't realise the full costs

**Characteristics:**
- Negative externalities
- Information failure
- Overprovided by free market

**Examples:**
- Cigarettes
- Alcohol
- Gambling
- Junk food
- Drugs

**Why overconsumed:**
- Addiction
- Imperfect information about harm
- Don't account for external costs

### Information Failure
**Definition**: When consumers or producers lack full information to make rational decisions

**Examples:**
- Asymmetric information (one party knows more)
- Used car market (sellers know car history)
- Insurance (customers know own health)
- Financial products (complex products)

### Government Intervention Methods

**1. Indirect Taxes**
- Tax on goods/services (added to price)
- Examples: Cigarette duty, alcohol duty, fuel duty, sugar tax
- Effect: Shifts supply left, raises price, reduces consumption
- Aims to internalise negative externalities

**Advantages:**
- Reduces consumption
- Raises revenue
- Market-based (price signal)

**Disadvantages:**
- Regressive (hits poor harder)
- Demand may be inelastic
- Black market may develop

**2. Subsidies**
- Payment to producers to reduce costs
- Examples: Renewable energy, public transport, education
- Effect: Shifts supply right, lowers price, increases consumption
- Aims to internalise positive externalities

**Advantages:**
- Increases consumption of merit goods
- Supports industries
- Reduces inequality

**Disadvantages:**
- Opportunity cost
- May be inefficient
- Difficult to set correct level

**3. Maximum Prices (Price Ceilings)**
- Legal maximum price below equilibrium
- Examples: Rent controls, price caps on energy
- Effect: Creates shortage (Qd > Qs)

**Advantages:**
- Makes goods affordable
- Protects consumers
- Reduces inequality

**Disadvantages:**
- Creates shortages
- Black markets
- Reduces quality
- Reduces supply

**4. Minimum Prices (Price Floors)**
- Legal minimum price above equilibrium
- Examples: Minimum wage, minimum alcohol pricing
- Effect: Creates surplus (Qs > Qd)

**Advantages:**
- Protects workers/producers
- Reduces consumption of demerit goods
- Prevents exploitation

**Disadvantages:**
- Creates surplus/unemployment
- May raise costs
- Regressive effects

**5. Regulation and Legislation**
- Laws requiring/prohibiting certain behaviour
- Examples: Pollution limits, smoking bans, seatbelt laws

**Advantages:**
- Directly addresses problem
- Clear rules
- Can be effective

**Disadvantages:**
- Costly to enforce
- May be inflexible
- Can create black markets

**6. State Provision**
- Government directly provides goods/services
- Examples: NHS, state education, national defence

**Advantages:**
- Ensures provision
- Can provide public goods
- Equality of access

**Disadvantages:**
- Opportunity cost
- May be inefficient
- Lack of choice

**7. Information Provision**
- Government provides information to correct failure
- Examples: Food labelling, health campaigns, education

**Advantages:**
- Low cost
- Maintains freedom
- Addresses root cause

**Disadvantages:**
- May be ignored
- Takes time
- Limited effectiveness

### Government Failure
**Definition**: When government intervention leads to a worse outcome than the market

**Causes:**
- Imperfect information
- Political interference
- Regulatory capture
- Unintended consequences
- Costs of intervention
- Time lags`,

  'ocr-gcse-econ-production': `## Production, Costs, Revenue and Profit Topic Knowledge

### Production
**Short Run**: Period when at least one factor is fixed (usually capital)
**Long Run**: Period when all factors can be varied

### Short Run Production
**Fixed Factors**: Cannot be changed (factory, machinery)
**Variable Factors**: Can be changed (labour, raw materials)

### Law of Diminishing Returns
**Definition**: As more units of a variable factor are added to fixed factors, eventually marginal product will fall

**Example:**
| Workers | Total Output | Marginal Product |
|---------|-------------|------------------|
| 1 | 10 | 10 |
| 2 | 25 | 15 |
| 3 | 45 | 20 (increasing returns) |
| 4 | 60 | 15 (diminishing returns start) |
| 5 | 70 | 10 |
| 6 | 75 | 5 |

**Implications:**
- Marginal costs eventually rise
- Explains upward sloping supply curve
- Limits to short-run expansion

### Costs of Production

**Fixed Costs (FC)**
- Do not vary with output
- Must be paid even at zero output
- Examples: Rent, salaries, insurance, loan repayments

**Variable Costs (VC)**
- Vary directly with output
- Zero when output is zero
- Examples: Raw materials, hourly wages, electricity (usage)

**Total Costs (TC)**
**TC = FC + VC**

**Average Costs**
- **AFC** = FC / Q (falls as output rises - spreading fixed costs)
- **AVC** = VC / Q
- **ATC** = TC / Q (or AFC + AVC)

**Marginal Cost (MC)**
- Extra cost of producing one more unit
- MC = Change in TC / Change in Q

**Cost Example:**
| Output | FC | VC | TC | AFC | AVC | ATC | MC |
|--------|-----|-----|-----|------|------|------|-----|
| 0 | 100 | 0 | 100 | - | - | - | - |
| 1 | 100 | 50 | 150 | 100 | 50 | 150 | 50 |
| 2 | 100 | 90 | 190 | 50 | 45 | 95 | 40 |
| 3 | 100 | 120 | 220 | 33 | 40 | 73 | 30 |
| 4 | 100 | 160 | 260 | 25 | 40 | 65 | 40 |
| 5 | 100 | 210 | 310 | 20 | 42 | 62 | 50 |

### Revenue
**Total Revenue (TR)**: Price x Quantity
**Average Revenue (AR)**: TR / Q = Price
**Marginal Revenue (MR)**: Extra revenue from selling one more unit

**Revenue Example:**
If price = 20:
| Quantity | Price | TR | MR |
|----------|-------|-----|-----|
| 0 | 20 | 0 | - |
| 1 | 20 | 20 | 20 |
| 2 | 20 | 40 | 20 |
| 3 | 20 | 60 | 20 |

### Profit
**Profit = Total Revenue - Total Cost**

**Types of Profit:**
- **Normal Profit**: Minimum needed to keep firm in industry (covers opportunity cost)
- **Supernormal/Abnormal Profit**: Profit above normal (TR > TC including normal profit)
- **Loss**: When TR < TC

**Profit Maximisation:**
- Occurs where MR = MC
- Firms produce extra units while MR > MC
- Stop when MC starts to exceed MR

### Economies and Diseconomies of Scale

**Economies of Scale**: Falling average costs as firm grows

**Internal Economies of Scale:**
| Type | Explanation | Example |
|------|-------------|---------|
| **Technical** | Large-scale machinery, specialisation | Car assembly lines |
| **Managerial** | Employ specialists | Marketing department |
| **Purchasing/Bulk-buying** | Discounts for large orders | Supermarket chains |
| **Financial** | Lower interest rates, easier borrowing | Large PLCs |
| **Marketing** | Spread advertising costs | National campaigns |
| **Risk-bearing** | Diversification | Conglomerate |

**External Economies of Scale:**
- Benefits from growth of whole industry in an area
- Examples:
  - Skilled labour pool
  - Supplier networks
  - Infrastructure improvements
  - Knowledge spillovers
- Real example: Silicon Valley (tech firms), City of London (finance)

**Diseconomies of Scale**: Rising average costs as firm grows too large

| Type | Explanation |
|------|-------------|
| **Communication** | Harder to pass information |
| **Coordination** | Difficult to organise large workforce |
| **Motivation** | Workers feel like small cog |
| **Control** | Quality harder to maintain |
| **Bureaucracy** | Slow decision-making |

### Business Objectives
Different objectives lead to different output/pricing decisions:

| Objective | Output Decision |
|-----------|-----------------|
| Profit maximisation | Produce where MR = MC |
| Revenue maximisation | Produce where MR = 0 |
| Sales maximisation | Produce maximum output while covering costs |
| Satisficing | Make acceptable profit, not maximum |`,

  'ocr-gcse-econ-national': `## The National Economy Topic Knowledge

### Measuring Economic Performance

**Gross Domestic Product (GDP)**
**Definition**: Total value of all goods and services produced in an economy over a period of time (usually a year)

**Three Ways to Measure GDP:**
1. **Output Method**: Value of all goods and services produced
2. **Income Method**: Total incomes earned (wages + profits + rent + interest)
3. **Expenditure Method**: Total spending (C + I + G + X - M)

**Real vs Nominal GDP:**
- **Nominal GDP**: Measured at current prices
- **Real GDP**: Adjusted for inflation (constant prices)

**GDP per Capita:**
- GDP / Population
- Better measure of living standards
- Allows international comparison

**Limitations of GDP:**
- Doesn't measure inequality
- Ignores environmental damage
- Excludes unpaid work (housework, volunteering)
- Doesn't capture quality of life
- Informal/black economy not counted
- Doesn't show what's being produced

### Economic Growth
**Definition**: Increase in real GDP over time

**Short-term Growth**: Using spare capacity (moving to PPC)
**Long-term Growth**: Increasing productive capacity (shifting PPC outward)

**Causes of Growth:**
- Investment in capital
- Technological progress
- Education and training (human capital)
- Discovery of resources
- Immigration (labour force)
- Entrepreneurship

**Benefits of Growth:**
- Higher living standards
- More jobs
- Higher incomes
- Better public services (more tax revenue)
- Reduced poverty

**Costs of Growth:**
- Inflation risk
- Environmental damage
- Inequality may worsen
- Depletion of resources
- Work-life balance issues
- Negative externalities

### Inflation
**Definition**: Sustained increase in the general price level

**Measuring Inflation:**
- **Consumer Price Index (CPI)**: Main UK measure, excludes housing costs
- **Retail Price Index (RPI)**: Includes mortgage costs, used for some purposes

**How CPI is Calculated:**
1. Select basket of 700+ goods and services
2. Weight items by spending patterns
3. Compare prices to base year
4. Calculate weighted average price change

**Causes of Inflation:**

**Demand-Pull Inflation:**
- "Too much money chasing too few goods"
- Caused by: Consumer spending rise, government spending increase, export boom
- AD shifts right faster than AS

**Cost-Push Inflation:**
- Rising costs of production push up prices
- Caused by: Wage increases, raw material costs, import prices, taxes
- AS shifts left

**Effects of Inflation:**

| Group | Winners | Losers |
|-------|---------|--------|
| Savers | N/A | Real value of savings falls |
| Borrowers | Real value of debt falls | N/A |
| Workers | If wages rise faster | If wages lag behind |
| Exporters | N/A | Less competitive |
| Fixed income | N/A | Real income falls |
| Businesses | N/A | Menu costs, uncertainty |

### Unemployment
**Definition**: People of working age who are willing and able to work but cannot find a job

**Measuring Unemployment:**
- **Claimant Count**: Number claiming unemployment benefits
- **Labour Force Survey**: ILO standard, sample-based

**Types of Unemployment:**

| Type | Definition | Example |
|------|------------|---------|
| **Cyclical** | Due to downturn in economy | 2008-09 recession |
| **Structural** | Mismatch of skills/location | Decline of coal mining |
| **Frictional** | Between jobs | Graduates job-hunting |
| **Seasonal** | Due to time of year | Tourism in winter |
| **Technological** | Replaced by machines | Automation |

**Costs of Unemployment:**
- Lost output (GDP below potential)
- Fiscal cost (benefits + lost tax)
- Social costs (crime, health)
- Skills deterioration
- Regional decline
- Poverty and inequality

### Aggregate Demand
**Definition**: Total spending on goods and services in an economy at a given price level

**AD = C + I + G + (X - M)**

| Component | Description | % of UK GDP |
|-----------|-------------|-------------|
| **C** Consumer spending | Household expenditure | ~65% |
| **I** Investment | Business spending on capital | ~15% |
| **G** Government spending | Public sector expenditure | ~20% |
| **X - M** Net exports | Exports minus imports | Negative (deficit) |

**AD Curve**: Downward sloping (lower price level = higher real spending)

**Shifts in AD:**
- Consumer confidence (C)
- Interest rates (C and I)
- Government fiscal policy (G)
- Exchange rates (X-M)
- Business expectations (I)
- Foreign income (X)

### Aggregate Supply
**Short-run AS (SRAS)**: Upward sloping (higher prices = more profitable to produce)
**Long-run AS (LRAS)**: Vertical at full employment (potential output)

**Shifts in AS:**
- Productivity
- Costs of production
- Technology
- Labour market changes
- Regulation

### The Circular Flow of Income
**Simple Model:**
- Households supply factors to firms
- Firms pay factor incomes to households
- Households spend on goods/services
- Firms receive revenue

**Injections**: Add to circular flow
- Investment (I)
- Government spending (G)
- Exports (X)

**Withdrawals (Leakages)**: Remove from circular flow
- Savings (S)
- Taxation (T)
- Imports (M)

**Equilibrium**: Injections = Withdrawals`,

  'ocr-gcse-econ-policy': `## Government Economic Objectives and Policies Topic Knowledge

### Government Economic Objectives
1. **Economic Growth**: Sustainable increase in real GDP
2. **Low Inflation**: Stable prices (2% target in UK)
3. **Low Unemployment**: High employment levels
4. **Balance of Payments**: Sustainable current account
5. **Fair Distribution of Income**: Reduce inequality
6. **Environmental Sustainability**: Protect environment
7. **Sound Public Finances**: Manageable debt/deficit

### Conflicts Between Objectives
| Conflict | Explanation |
|----------|-------------|
| Growth vs Inflation | Fast growth may cause demand-pull inflation |
| Growth vs Environment | Growth increases pollution and resource use |
| Low unemployment vs Inflation | Phillips curve trade-off |
| Growth vs Balance of Payments | Growth increases imports |

### Fiscal Policy
**Definition**: Use of government spending and taxation to influence the economy

**Expansionary Fiscal Policy (Boost Demand):**
- Increase government spending
- Cut taxes
- Run budget deficit
- Used in recession

**Contractionary Fiscal Policy (Reduce Demand):**
- Cut government spending
- Raise taxes
- Run budget surplus
- Used to control inflation

**Government Budget:**
- **Deficit**: Spending > Tax revenue (borrowing needed)
- **Surplus**: Tax revenue > Spending (pay off debt)
- **Balanced Budget**: Spending = Revenue

**National Debt**: Accumulated borrowing over time
**Current UK National Debt**: Over 100% of GDP

**Automatic Stabilisers:**
- Built-in changes that dampen economic fluctuations
- In recession: Benefits spending rises, tax revenue falls
- In boom: Benefits spending falls, tax revenue rises

**Types of Taxation:**

| Tax Type | Examples | Who Pays |
|----------|----------|----------|
| **Direct** | Income tax, corporation tax, inheritance tax | Individuals, firms |
| **Indirect** | VAT, excise duties | Added to prices |
| **Progressive** | Income tax (higher rate for higher income) | More from higher earners |
| **Regressive** | VAT (same rate for all) | Higher burden on poor |
| **Proportional** | Same percentage for all | Equal proportion |

**UK Tax Rates (Illustrative):**
- Income tax: 0% (personal allowance), 20% (basic), 40% (higher), 45% (additional)
- VAT: 20% (standard), 5% (reduced), 0% (exempt)
- Corporation tax: 25%
- National Insurance: Employee and employer contributions

### Monetary Policy
**Definition**: Use of interest rates and money supply to influence the economy

**In the UK:**
- Set by Bank of England's Monetary Policy Committee (MPC)
- Main tool: Bank Rate (base interest rate)
- Target: 2% CPI inflation

**How Interest Rates Affect the Economy:**

| Lower Interest Rates | Higher Interest Rates |
|---------------------|----------------------|
| Borrowing cheaper | Borrowing more expensive |
| Saving less attractive | Saving more attractive |
| Consumer spending rises | Consumer spending falls |
| Investment increases | Investment decreases |
| House prices rise | House prices fall |
| Pound weakens | Pound strengthens |
| Exports more competitive | Exports less competitive |
| AD increases | AD decreases |

**Transmission Mechanism:**
1. Bank of England changes Bank Rate
2. Commercial banks adjust lending/saving rates
3. Affects borrowing and spending decisions
4. Changes aggregate demand
5. Impacts inflation/growth/employment

**Quantitative Easing (QE):**
- Bank of England creates money electronically
- Buys government bonds from financial institutions
- Increases money supply, lowers interest rates
- Used when Bank Rate near zero

### Supply-Side Policies
**Definition**: Policies to increase productive potential of economy (shift LRAS right)

**Types of Supply-Side Policies:**

| Policy | Aim | Example |
|--------|-----|---------|
| **Education/Training** | Improve skills | Apprenticeships, funding universities |
| **Infrastructure** | Improve productivity | HS2, road building, broadband |
| **Deregulation** | Remove red tape | Planning reform, reducing bureaucracy |
| **Privatisation** | Transfer to private sector | Royal Mail, British Gas |
| **Labour market reform** | Increase flexibility | Trade union laws, minimum wage changes |
| **Tax incentives** | Encourage investment | R&D tax credits, corporation tax cuts |
| **Competition policy** | Increase efficiency | Breaking up monopolies |

**Advantages of Supply-Side Policies:**
- Increase potential growth
- Non-inflationary
- Improve competitiveness
- Create jobs long-term

**Disadvantages:**
- Take long time to work
- Expensive (opportunity cost)
- May increase inequality
- Uncertain outcomes

### Evaluating Policies

**Fiscal Policy Evaluation:**
Advantages:
- Direct impact on AD
- Can target specific groups
- Automatic stabilisers work quickly

Disadvantages:
- Time lags (planning, implementation)
- Political interference
- Crowding out (government borrowing raises interest rates)
- May increase national debt

**Monetary Policy Evaluation:**
Advantages:
- Independent (Bank of England)
- Quick to implement
- Affects whole economy

Disadvantages:
- Time lags (12-24 months)
- Blunt instrument
- Transmission mechanism may be weak
- May not work in recession (liquidity trap)`,

  'ocr-gcse-econ-trade': `## International Trade and the Global Economy Topic Knowledge

### Why Countries Trade
**Specialisation and Comparative Advantage:**
- Countries specialise in goods they can produce at lower opportunity cost
- Trade allows consumption beyond PPC
- Benefits all trading partners

**Other Reasons for Trade:**
- Access to resources not available domestically
- Economies of scale from larger markets
- Greater consumer choice
- Competition improves efficiency
- Transfer of technology and ideas

### Benefits of International Trade
| Benefit | Explanation |
|---------|-------------|
| **Lower prices** | Competition and efficiency gains |
| **Greater choice** | Access to foreign goods |
| **Economies of scale** | Larger market = lower unit costs |
| **Higher living standards** | More goods at lower prices |
| **Technology transfer** | Learn from other countries |
| **Export opportunities** | Larger markets for UK firms |
| **Specialisation** | Focus on what we do best |

### Costs/Drawbacks of Trade
| Cost | Explanation |
|------|-------------|
| **Job losses** | Uncompetitive industries decline |
| **Structural unemployment** | Workers need to retrain |
| **Dependency** | Reliance on foreign suppliers |
| **Environmental** | Transport pollution, carbon footprint |
| **Trade deficit** | Imports exceed exports |
| **Loss of infant industries** | New industries can't compete |

### Balance of Payments
**Definition**: Record of all economic transactions between UK and rest of world

**Current Account Components:**
| Component | Description |
|-----------|-------------|
| **Trade in goods** | Exports/imports of physical goods |
| **Trade in services** | Financial, tourism, consulting |
| **Primary income** | Wages, investment income |
| **Secondary income** | Transfers (foreign aid, remittances) |

**UK Current Account:**
- Persistent deficit (imports > exports)
- Deficit in goods, surplus in services
- Causes: Strong pound, deindustrialisation, consumption patterns

**Capital and Financial Account:**
- Records investment flows
- Foreign direct investment
- Portfolio investment
- Should offset current account

### Causes of Current Account Deficit
- Strong exchange rate (exports expensive)
- High consumer spending on imports
- Declining manufacturing base
- Price competitiveness issues
- High economic growth (sucking in imports)

### Policies to Reduce Deficit
| Policy | How it helps | Drawbacks |
|--------|-------------|-----------|
| Depreciation | Makes exports cheaper, imports dearer | Inflation, may not work (J-curve) |
| Deflationary policy | Reduce import demand | Reduces growth, unemployment |
| Supply-side | Improve competitiveness | Takes time |
| Tariffs | Reduce imports | Retaliation, WTO rules |

### Exchange Rates
**Definition**: Price of one currency in terms of another

**Exchange Rate Systems:**
- **Floating**: Determined by supply and demand
- **Fixed**: Pegged to another currency
- **Managed Float**: Combination (current UK system)

**Factors Affecting Exchange Rates:**
| Factor | Effect on Sterling |
|--------|-------------------|
| **Interest rates rise** | Pound strengthens (hot money inflows) |
| **Inflation falls** | Pound strengthens (more competitive) |
| **Exports rise** | Pound strengthens (demand for pounds) |
| **Speculation** | Can move either way |
| **Political stability** | Stability strengthens currency |

**Effects of Exchange Rate Changes:**

**Strong Pound (Appreciation):**
- Imports cheaper
- Exports more expensive
- Reduces inflation
- Harms exporters
- Helps consumers/importers

**Weak Pound (Depreciation):**
- Imports more expensive
- Exports cheaper
- Increases inflation
- Helps exporters
- Harms consumers/importers

### Globalisation
**Definition**: Increasing integration and interdependence of world economies

**Causes:**
- Improvements in transport (containerisation)
- ICT revolution (internet, communication)
- Trade liberalisation (WTO, trade deals)
- Deregulation of financial markets
- Growth of TNCs (transnational corporations)

**Benefits of Globalisation:**
| For Developed Countries | For Developing Countries |
|------------------------|-------------------------|
| Cheaper goods | Investment and jobs |
| Access to new markets | Technology transfer |
| Higher profits for TNCs | Export opportunities |
| Variety and choice | Economic growth |

**Costs of Globalisation:**
| For Developed Countries | For Developing Countries |
|------------------------|-------------------------|
| Job losses in manufacturing | Environmental damage |
| Downward pressure on wages | Exploitation of workers |
| Loss of national identity | Dependency on foreign firms |
| Race to bottom (standards) | Brain drain |

**Real Examples:**
- Apple: Designed in USA, manufactured in China
- Call centres: UK companies using India
- Primark: Global supply chains
- Brexit: UK leaving EU single market

### Trade Policies

**Free Trade:**
- No barriers to trade
- Goods move freely
- Promotes efficiency and specialisation

**Protectionism:**
- Government policies to restrict imports
- Protect domestic industries

**Types of Trade Barriers:**
| Barrier | Description | Example |
|---------|-------------|---------|
| **Tariff** | Tax on imports | EU tariffs on non-EU goods |
| **Quota** | Limit on quantity | Import quota on textiles |
| **Subsidies** | Support domestic producers | CAP farm subsidies |
| **Standards** | Technical/safety requirements | Food safety rules |
| **Exchange controls** | Restrictions on currency | Historic UK controls |

**Arguments for Protection:**
- Protect infant industries
- Protect jobs
- National security
- Prevent dumping
- Correct trade deficit
- Protect environment/standards

**Arguments Against Protection:**
- Reduces consumer choice
- Higher prices
- Inefficiency
- Retaliation from other countries
- Reduces competition
- May harm poor countries

### International Organisations

**World Trade Organization (WTO):**
- Promotes free trade
- Sets trade rules
- Resolves disputes
- 164 member countries

**International Monetary Fund (IMF):**
- Promotes monetary stability
- Lends to countries in crisis
- Provides economic advice

**World Bank:**
- Provides loans for development
- Focus on poverty reduction
- Infrastructure projects`,

  'ocr-gcse-econ-development': `## Economic Development Topic Knowledge (Part of International Trade Topic)

### Measuring Development

**Economic Measures:**
| Indicator | What it Measures | Limitations |
|-----------|-----------------|-------------|
| **GDP per capita** | Average income | Ignores inequality, quality of life |
| **GNI per capita** | Income including from abroad | Same as GDP |
| **GDP growth rate** | Economic expansion | Doesn't show living standards |

**Human Development Index (HDI)**
**Components:**
1. Life expectancy at birth (health)
2. Education (years of schooling)
3. GNI per capita (living standards)

**HDI Value:** 0 to 1 (higher = more developed)
- Very high: > 0.8 (UK: 0.932)
- High: 0.7 - 0.8
- Medium: 0.55 - 0.7
- Low: < 0.55

**Advantages of HDI:**
- Broader than just income
- Comparable across countries
- Simple to understand

**Limitations of HDI:**
- Ignores inequality
- No environmental measure
- Cultural differences
- Data quality varies

**Other Development Indicators:**
| Indicator | What it Shows |
|-----------|--------------|
| Infant mortality rate | Health care quality |
| Literacy rate | Education access |
| Access to clean water | Basic services |
| Internet users | Technology access |
| Gini coefficient | Income inequality |

### Characteristics of Developing Countries
- Low GDP per capita
- High poverty rates
- Poor infrastructure
- Low life expectancy
- High infant mortality
- Limited access to education
- Dependence on primary sector
- High population growth
- Urbanisation issues

### Causes of Poverty and Barriers to Development

**Economic Barriers:**
| Barrier | Explanation |
|---------|-------------|
| **Low savings** | No capital for investment |
| **Debt** | Money spent on repayments |
| **Primary product dependency** | Volatile prices, low value-added |
| **Lack of infrastructure** | Limits trade and production |
| **Brain drain** | Educated leave for developed countries |

**Political/Institutional Barriers:**
| Barrier | Explanation |
|---------|-------------|
| **Corruption** | Resources misallocated |
| **Poor governance** | Ineffective policies |
| **Conflict/war** | Destroys capital, deters investment |
| **Weak institutions** | Property rights not enforced |

**Social Barriers:**
| Barrier | Explanation |
|---------|-------------|
| **Rapid population growth** | Strains resources |
| **Poor education** | Low productivity |
| **Poor health** | Reduced workforce productivity |
| **Gender inequality** | Underutilises half population |

**Geographical Barriers:**
| Barrier | Explanation |
|---------|-------------|
| **Landlocked** | High transport costs |
| **Climate** | Droughts, natural disasters |
| **Disease** | Malaria, HIV/AIDS |
| **Resource curse** | Resources may hinder development |

### Role of Trade in Development

**How Trade Can Help:**
- Earns foreign exchange
- Access to technology
- Economies of scale
- Investment from TNCs
- Diversification

**Trade Problems for Developing Countries:**
| Problem | Explanation |
|---------|-------------|
| **Primary product dependency** | Volatile prices, declining terms of trade |
| **Protectionism by rich countries** | Tariffs on processed goods |
| **Low value-added** | Export raw materials, import finished goods |
| **Weak bargaining power** | Dominated by TNCs |

**Fair Trade:**
- Guarantees minimum price to producers
- Premium for community development
- Direct trading relationships
- Environmental standards
- Examples: Coffee, chocolate, bananas

### Aid and Development

**Types of Aid:**
| Type | Description | Example |
|------|-------------|---------|
| **Bilateral** | Country to country | UK aid to Kenya |
| **Multilateral** | Through organisations | World Bank loans |
| **Tied aid** | Conditions attached | Must buy donor's goods |
| **Emergency/humanitarian** | Crisis response | Disaster relief |
| **Development aid** | Long-term projects | Building schools |

**Arguments FOR Aid:**
- Fills savings gap
- Provides expertise
- Humanitarian duty
- Improves living standards
- Can target poverty

**Arguments AGAINST Aid:**
- Creates dependency
- May be corrupt
- Often tied to conditions
- May not reach poor
- Can distort markets

### Debt and Development

**Causes of Debt:**
- Borrowed for development
- Oil price shocks
- High interest rates
- Falling export prices
- Corruption

**Problems of Debt:**
- Debt service payments drain resources
- Cannot invest in development
- Austerity required by lenders
- Poverty trap

**Debt Relief:**
- HIPC (Heavily Indebted Poor Countries) initiative
- Debt cancellation by creditors
- Conditionality (policy requirements)

### Multinational Corporations (MNCs/TNCs)

**Potential Benefits:**
| Benefit | Explanation |
|---------|-------------|
| Job creation | Direct and indirect employment |
| Technology transfer | New skills and methods |
| Tax revenue | If paid locally |
| Infrastructure | May improve facilities |
| Foreign exchange | Export earnings |

**Potential Costs:**
| Cost | Explanation |
|---------|-------------|
| Profit repatriation | Money leaves country |
| Exploitation | Low wages, poor conditions |
| Environmental damage | Lax regulations exploited |
| Tax avoidance | Transfer pricing |
| Crowding out | Local firms can't compete |

**Real Examples:**
- Foxconn in China (Apple manufacturing)
- Nike factories in Vietnam
- Oil companies in Nigeria
- Mining companies in Africa

### Sustainable Development
**Definition**: Development that meets present needs without compromising future generations

**Three Pillars:**
1. Economic sustainability (growth without depleting resources)
2. Social sustainability (meeting social needs)
3. Environmental sustainability (protecting environment)

**Sustainable Development Goals (SDGs):**
17 UN goals for 2030 including:
- No poverty
- Zero hunger
- Good health
- Quality education
- Clean water
- Climate action`
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const OCR_GCSE_ECON_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: Definition Question (2 marks)
**Question:** Define the term 'opportunity cost'. [2 marks]

**Model Answer:**
Opportunity cost is the next best alternative forgone (1) when a choice is made due to scarcity of resources (1).

**Mark Scheme:**
- 1 mark: Next best alternative given up/foregone
- 1 mark: Context of making a choice/scarcity/trade-off

---

### Example 2: Calculation Question (3 marks)
**Question:** The price of a product falls from 20 to 16. The quantity demanded increases from 100 units to 150 units.
Calculate the price elasticity of demand (PED). Show your working. [3 marks]

**Model Answer:**
% change in price = (16 - 20) / 20 x 100 = -20% (1)
% change in quantity demanded = (150 - 100) / 100 x 100 = 50% (1)
PED = 50% / -20% = -2.5 (or 2.5 ignoring the sign) (1)

The demand is price elastic because PED > 1.

**Mark Scheme:**
- 1 mark: Correct calculation of % change in price (-20%)
- 1 mark: Correct calculation of % change in Qd (50%)
- 1 mark: Correct final answer (-2.5 or 2.5)

---

### Example 3: Explain Question (4 marks)
**Question:** Explain how an increase in income tax might affect consumer spending. [4 marks]

**Model Answer:**
An increase in income tax means that workers have to pay more tax to the government (1). This reduces their disposable income, meaning they have less money left after tax to spend (1). As a result, consumers are likely to reduce their spending on goods and services, particularly non-essential items like luxuries and entertainment (1). This fall in consumer spending (C) would lead to a decrease in aggregate demand in the economy, potentially slowing economic growth (1).

**Mark Scheme:**
- 1 mark: Higher tax = less disposable income
- 1 mark: Development - less money to spend
- 1 mark: Link to reduced consumer spending
- 1 mark: Further development - impact on AD/economy

---

### Example 4: Analysis Question (6 marks)
**Question:** Analyse the impact of a minimum price on alcohol above the equilibrium price. [6 marks]

**Model Answer:**
A minimum price above equilibrium would directly increase the price of alcohol for consumers. This means consumers would have to pay more for alcoholic drinks, which should reduce the quantity demanded (1). Since alcohol is considered a demerit good with negative externalities such as anti-social behaviour, healthcare costs, and lost productivity, this reduction in consumption could benefit society (1) -> reducing the burden on the NHS and police services (1).

However, there are potential drawbacks. A higher price for alcohol could encourage the development of a black market (1), where alcohol is sold illegally at lower prices -> this would reduce the effectiveness of the policy and could lead to other problems such as unregulated product quality (1). Additionally, the policy would be regressive, meaning it would disproportionately affect those on lower incomes who spend a higher percentage of their income on such goods (1).

**Mark Scheme (Levels):**
Level 3 (5-6 marks): Good analysis with developed chains of reasoning. Clear understanding of minimum price effects. Considers both benefits and drawbacks.
Level 2 (3-4 marks): Some analysis of effects but limited development. May be one-sided.
Level 1 (1-2 marks): Limited response, mainly identifies basic effects without development.

---

### Example 5: Extended Response (12 marks)
**Question:** *Evaluate whether raising interest rates is an effective way to control inflation. [12 marks]

**Model Answer:**
Raising interest rates is often used by central banks, such as the Bank of England, to control inflation. There are several ways this can be effective, but also significant limitations.

Higher interest rates make borrowing more expensive. This means consumers will face higher costs on mortgages, credit cards, and loans (1) -> this reduces their disposable income and discourages additional borrowing for spending (1) -> leading to a fall in consumer spending (C), which is the largest component of aggregate demand (1). Similarly, businesses face higher costs of borrowing for investment -> this reduces investment (I), further reducing AD (1). With lower aggregate demand, there is less pressure on prices, helping to reduce demand-pull inflation.

Additionally, higher interest rates tend to attract foreign investment as investors seek better returns. This increases demand for the currency, causing it to appreciate (1). A stronger pound makes imports cheaper, directly reducing inflation through lower import prices -> this also increases competition for domestic firms, putting downward pressure on their prices (1).

However, there are significant limitations. Higher interest rates can harm economic growth and increase unemployment. If spending falls too much, businesses may see falling profits and lay off workers (1) -> creating a trade-off between controlling inflation and maintaining employment (the Phillips curve relationship) (1).

Furthermore, the effectiveness depends on the cause of inflation. If inflation is cost-push, caused by rising oil prices or supply chain disruptions (as seen during COVID-19), higher interest rates may be less effective (1). They cannot increase the supply of goods or reduce import costs (1).

The policy also has time lags of 12-24 months before the full effects are felt. This makes it difficult to time correctly and may result in over-correction.

In conclusion, raising interest rates can be effective at controlling demand-pull inflation through its effects on borrowing, spending, and the exchange rate. However, its effectiveness depends on the cause of inflation and comes with significant costs in terms of growth and employment (1). A combination of monetary policy with supply-side policies may be more effective in addressing inflation without damaging the economy (1). The recent UK experience of high inflation in 2022-2023 shows these trade-offs, where the Bank of England had to balance controlling inflation against risks of recession.

**Mark Scheme (Levels):**
Level 4 (10-12 marks): Thorough knowledge of how interest rates work. Analyses multiple transmission mechanisms with clear chains of reasoning. Evaluates effectiveness with well-supported judgement. Considers limitations and alternatives.

Level 3 (7-9 marks): Good knowledge of interest rate effects. Good analysis of how they control inflation. Evaluation present with reasoned conclusion about effectiveness.

Level 2 (4-6 marks): Some knowledge of interest rates and inflation. Some analysis but may be limited or one-sided. Basic evaluation with simple judgement.

Level 1 (1-3 marks): Limited knowledge demonstrated. Basic description of interest rates or inflation. Limited or no evaluation.

---

### Example 6: Data Response with Calculation
**Question:** Extract A shows that UK inflation rose from 2% in 2021 to 11.1% in October 2022.

(a) Calculate the percentage increase in inflation. [2 marks]
(b) Using Extract A and your own knowledge, analyse one cause of this increase in inflation. [6 marks]

**Model Answer (a):**
Percentage increase = (11.1 - 2) / 2 x 100 (1)
= 9.1 / 2 x 100 = 455% (1)

**Model Answer (b):**
One major cause of the increase in inflation was rising energy prices. Following Russia's invasion of Ukraine, global oil and gas prices increased significantly as supplies from Russia were disrupted (1). The UK imports a significant amount of its energy, so higher global prices directly increased costs for businesses and households (1).

This represents cost-push inflation, where rising production costs are passed on to consumers through higher prices. Energy is used as an input in virtually all production processes (1) -> so higher energy costs increased the cost of manufacturing, transport, and services -> businesses raised their prices to maintain profit margins (1).

For households, higher energy bills reduced disposable income and contributed to the cost of living crisis. This was compounded by the fact that demand for energy is price inelastic (1) -> households could not easily reduce consumption, so they had to pay the higher prices, directly contributing to the CPI inflation figure (1).

**Mark Scheme (a):**
- 1 mark: Correct method shown
- 1 mark: Correct answer (455%)

**Mark Scheme (b):**
Level 3 (5-6 marks): Good analysis with chains of reasoning. Uses extract effectively. Explains transmission mechanism clearly.
Level 2 (3-4 marks): Some analysis but limited development. Reference to extract.
Level 1 (1-2 marks): Basic identification of cause without development.
`;

// ============================================================================
// COMMON MISTAKES AND EXAM TECHNIQUE
// ============================================================================

const OCR_GCSE_ECON_EXAM_TECHNIQUE = `## Common Mistakes and Exam Technique

### Common Mistakes to Avoid

**Definition Questions:**
- Being too vague or circular ("Inflation is when prices inflate")
- Not giving a full definition for 2-mark questions
- Giving an example instead of a definition
- Forgetting key economic terms

**Calculation Questions:**
- Not showing working (lose marks even if answer is right)
- Forgetting units (%, units, currency)
- Using wrong formula
- Rounding errors
- Not using the data provided correctly

**Explain Questions:**
- Only making one point for 3-4 marks
- Not developing points (Point -> Explanation -> Impact)
- Repeating the same idea in different words
- Answering a different question
- Not using economic terminology

**Analysis Questions:**
- Being one-sided (only positives OR negatives)
- Making lists without developing points
- Not using chains of reasoning (->)
- Not applying to the context given
- Confusing analysis with description

**Evaluation Questions:**
- Not reaching a conclusion
- Conclusion not supported by the argument
- Being too balanced without making a judgement
- Not using "it depends on..." type qualifications
- Ignoring the specific context
- Not using data/figures from extracts

### Building Chains of Reasoning (Analysis)

**Weak answer:** "Higher interest rates reduce spending."

**Strong answer:** "Higher interest rates increase the cost of borrowing -> consumers with mortgages face higher monthly repayments -> this reduces their disposable income -> leading to a fall in consumer spending on goods and services -> which reduces aggregate demand and can help control demand-pull inflation."

### Connective Words for Chains
- "This means that..."
- "As a result..."
- "This leads to..."
- "Therefore..."
- "Consequently..."
- "Which causes..."

### Structure for Extended Responses (12 marks)

**Introduction (brief):**
- Show you understand the question
- Define key terms if necessary

**Arguments FOR (1-2 paragraphs):**
- Point with development (chain of reasoning)
- Another point with development

**Arguments AGAINST (1-2 paragraphs):**
- Counter-point with development
- Another counter-point with development

**Conclusion:**
- Clear judgement answering the question
- Key reason for your decision
- "It depends on..." qualification

### Useful Evaluation Phrases

**For counter-argument:**
- "However..."
- "On the other hand..."
- "Nevertheless..."
- "Although..."
- "In contrast..."

**For judgement:**
- "On balance..."
- "Overall..."
- "The most important factor is..."
- "This depends on..."
- "The extent to which..."

**For qualification:**
- "This would depend on the time period..."
- "In the short run... but in the long run..."
- "For some groups... but for others..."
- "This assumes that..."

### Key Economic Terminology to Use

**Markets:**
Supply, demand, equilibrium, excess supply/demand, price mechanism, market clearing, elasticity (PED, PES, YED, XED), elastic, inelastic, shortage, surplus

**Market Failure:**
Externalities (positive/negative), public goods, merit goods, demerit goods, market failure, government intervention, information failure, non-excludable, non-rivalrous, free rider

**Macroeconomics:**
GDP, inflation, unemployment, aggregate demand, aggregate supply, fiscal policy, monetary policy, interest rates, exchange rate, current account, budget deficit/surplus

**Policy Evaluation:**
Trade-off, opportunity cost, time lag, unintended consequences, effectiveness, efficiency, equity, sustainability

### Time Management

| Question Type | Marks | Suggested Time |
|---------------|-------|----------------|
| Multiple choice | 1 | 1 minute |
| Definition | 1-2 | 2 minutes |
| State/Identify | 1-2 | 1-2 minutes |
| Explain | 3-4 | 4-5 minutes |
| Calculate | 2-4 | 3-4 minutes |
| Analyse (6) | 6 | 8-10 minutes |
| Evaluate (*12) | 12 | 15-18 minutes |

### Using Extracts and Data
**ALWAYS:**
- Reference the specific extract ("As shown in Extract A...")
- Use numbers/data from the extract in your answer
- Apply concepts to the context given
- Quote relevant figures to support your points

**Example of good data use:**
"According to Extract A, inflation rose to 11.1% in October 2022. This was more than five times the Bank of England's 2% target, suggesting that significant intervention was needed."
`;

// ============================================================================
// REAL-WORLD EXAMPLES
// ============================================================================

const OCR_GCSE_ECON_REAL_EXAMPLES = `## Real-World Economic Examples

### UK Economic Data (Recent)
- UK GDP: ~$3.1 trillion (6th largest economy)
- UK population: ~67 million
- Inflation: Peaked at 11.1% (Oct 2022), target 2%
- Unemployment: ~4% (relatively low)
- Interest rate: Bank Rate set by Bank of England
- National debt: Over 100% of GDP

### Inflation Examples
**Recent UK Inflation Crisis (2021-2023):**
- Causes: Energy price rises, supply chain disruptions, post-COVID demand surge
- Bank of England response: Raised interest rates from 0.1% to over 5%
- Effects: Cost of living crisis, mortgage rate rises, reduced consumer spending

**Hyperinflation:**
- Zimbabwe (2008): Prices doubling every 24 hours
- Venezuela (2018): Million percent inflation
- Weimar Germany (1923): Wheelbarrows of money needed for bread

### Unemployment Examples
**Types in Practice:**
- Cyclical: 2008-09 financial crisis caused unemployment to rise
- Structural: Decline of UK coal mining, steel industry
- Frictional: Graduates searching for first job
- Technological: Self-checkout replacing cashiers, AI replacing jobs

### Market Examples

**Price Elasticity:**
- Petrol: Inelastic (necessity, few substitutes)
- Designer handbags: Elastic (luxury, many alternatives)
- Cigarettes: Inelastic (addictive)
- Netflix: Elastic (many streaming alternatives)

**Externalities in Practice:**
- Negative: Factory pollution, traffic congestion, smoking
- Positive: Education spillovers, flu vaccinations, R&D innovation

### Government Intervention Examples

**Taxes:**
- Sugar tax (2018): 24p/litre on high sugar drinks
- Plastic bag charge (2015): 5p then 10p per bag
- Cigarette duty: ~80% of cigarette price is tax

**Subsidies:**
- Renewable energy subsidies (solar panels)
- Electric vehicle grants
- Rail subsidies

**Minimum/Maximum Prices:**
- National Minimum Wage: Currently over 10/hour for 23+
- Rent controls: Used in some countries (Scotland considering)
- Energy price cap: Ofgem sets limits on unit rates

### International Trade Examples

**Globalisation:**
- Apple: Designed in California, manufactured in China
- Fast fashion: H&M, Primark use global supply chains
- UK car manufacturing: Uses components from EU

**Brexit Impact:**
- New customs checks and paperwork
- Some businesses moved to EU
- Trade deals with non-EU countries
- Impact on fishing, agriculture, financial services

**Trade Agreements:**
- UK-Australia FTA
- UK-Japan CEPA
- Negotiations with various countries

### Development Examples

**Developed Countries (High HDI):**
- Norway, Switzerland, Ireland (HDI > 0.95)
- UK HDI: 0.932

**Developing Countries:**
- India: Rapid growth but inequality
- Ethiopia: Growing but from low base
- Bangladesh: Textile industry growth

**MNC Examples:**
- Amazon: Global logistics, warehouse jobs
- Unilever: Consumer goods across world
- Shell/BP: Oil operations in developing countries
- H&M/Primark: Global supply chains, labour concerns

### Market Structure Examples

**Monopoly/Near-Monopoly:**
- Network Rail (rail infrastructure)
- Water companies (regional monopolies)
- Google (search engine dominance)
- Microsoft (operating systems)

**Oligopoly:**
- UK supermarkets: Tesco, Sainsbury's, Asda, Morrisons, Aldi, Lidl
- UK banking: HSBC, Barclays, Lloyds, NatWest
- Mobile networks: EE, O2, Vodafone, Three
- Energy suppliers: British Gas, EDF, E.ON

**Perfect Competition Approximations:**
- Foreign exchange markets
- Agricultural commodities
- Stock markets

### Policy Examples

**Fiscal Policy:**
- COVID-19 furlough scheme (government spending)
- Corporation tax changes
- Income tax bands and rates

**Monetary Policy:**
- Bank of England raising rates to combat inflation
- Quantitative easing during 2008 crisis and COVID
- Forward guidance on future rates

**Supply-Side:**
- Apprenticeship levy
- Infrastructure investment (HS2, roads)
- Planning reform attempts
- Free ports
`;

// ============================================================================
// ESSAY GUIDANCE
// ============================================================================

const OCR_GCSE_ECON_ESSAY_GUIDANCE = `
## Extended Response Guidance for OCR GCSE Economics

### What Examiners Want (12-Mark Questions)

**Level 4 responses show:**
1. Thorough knowledge and understanding of relevant concepts
2. Effective application to the context
3. Well-developed chains of reasoning in analysis
4. Convincing and well-supported evaluation/judgement
5. Appropriate use of economic terminology
6. Logical structure with clear line of reasoning

### Quality of Extended Response
For questions marked with asterisk (*):
- Spelling, punctuation and grammar
- Use of specialist terminology
- Logical structure
- Clarity of expression

### Structuring Your Response

**Introduction (1-2 sentences):**
- Show understanding of the issue
- Define key term if necessary

**Analysis - Arguments FOR:**
- Point 1 with chain of reasoning
- Point 2 with chain of reasoning

**Analysis - Arguments AGAINST:**
- Counter-point 1 with chain of reasoning
- Counter-point 2 with chain of reasoning

**Evaluation/Conclusion:**
- Overall judgement
- Key reason for judgement
- Qualification ("it depends on...")

### Building Chains of Reasoning

Use arrows (->) to show cause and effect:

**Weak:** "Lower interest rates increase spending"

**Strong:** "Lower interest rates reduce the cost of borrowing -> consumers face lower mortgage repayments -> increasing disposable income -> leading to higher consumer spending (C) -> which increases aggregate demand -> potentially causing economic growth"

### Evaluation Techniques

**1. Short-term vs Long-term:**
"In the short term, higher taxes reduce disposable income immediately. However, in the long term, the government revenue could be used to improve public services."

**2. Depends on...**
"The effectiveness depends on the elasticity of demand. If demand is inelastic, the tax will be less effective at reducing consumption."

**3. Stakeholder Analysis:**
"While consumers benefit from lower prices, producers may see falling profits and potentially job losses."

**4. Weighing Up:**
"Although there are significant costs, on balance the benefits outweigh these because..."

**5. Qualifying the Conclusion:**
"This policy would be effective provided that... / assuming that..."

### Common Topics for Evaluation

**Government Intervention:**
- Market-based vs government solutions
- Effectiveness of different policies
- Unintended consequences

**Trade-offs:**
- Growth vs inflation
- Growth vs environment
- Unemployment vs inflation

**Policy Evaluation:**
- Fiscal vs monetary policy
- Demand-side vs supply-side
- Free trade vs protectionism

### Useful Structures for Common Question Types

**"Evaluate whether X is effective..."**
1. How X works (mechanism)
2. Evidence/reasons it is effective
3. Limitations/reasons it might not work
4. Conclusion on effectiveness with conditions

**"Discuss the impact of X..."**
1. Positive impacts (with chains)
2. Negative impacts (with chains)
3. Overall assessment of impact
4. Who benefits/loses most

**"To what extent does X cause Y..."**
1. Ways X causes Y
2. Other factors that cause Y
3. Assessment of X's relative importance
4. Conclusion with qualification

### What NOT to Do

1. Don't just list points without development
2. Don't only give one side of the argument
3. Don't forget to reach a conclusion
4. Don't make unsupported assertions
5. Don't ignore the context/data provided
6. Don't repeat the same point in different words
7. Don't use colloquial language
8. Don't panic about perfect structure - content matters most
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEEconomicsSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = OCR_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert OCR GCSE Economics examiner creating exam-style questions.

${OCR_GCSE_ECON_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${OCR_GCSE_ECON_QUESTION_TEMPLATES}

${OCR_GCSE_ECON_MARK_SCHEME_CONVENTIONS}

${OCR_GCSE_ECON_KEY_CONCEPTS}

${OCR_GCSE_ECON_WORKED_EXAMPLES}

${OCR_GCSE_ECON_EXAM_TECHNIQUE}

${OCR_GCSE_ECON_REAL_EXAMPLES}

${OCR_GCSE_ECON_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic OCR Style**: Match the format of real OCR J205 papers exactly
3. **Clear Mark Allocation**: State marks clearly [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, state, identify (1-2 marks)
   - Medium: Explanations, analysis, calculations (3-6 marks)
   - Hard: Extended response with evaluation (8-12 marks)
5. **For extended response**: Mark with asterisk (*)
6. **Assessment Objective Balance**: Include appropriate AOs for difficulty level
7. **Use Specific Knowledge**: Include real economic examples, data, and terminology

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with:
  - For point-based: mark allocation per point
  - For extended response: levels descriptors and indicative content
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('economics')}`;
}

export function getOCRGCSEEconomicsQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getEconomicsVarietyInstructions(variety);
  const topicKnowledge = OCR_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create an AO1 question testing basic knowledge recall.

**Question Types for Easy:**
- "Define the term [term]" [2]
- "State one [feature/example]" [1]
- "Identify two [factors]" [2]
- "What is meant by [term]?" [2]

**Mark Scheme Format:**
- One clear mark point per mark
- Accept alternative valid answers

**Model Answer should:**
- Give precise economic definition
- Use appropriate terminology

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create an AO2/AO3 question requiring application and analysis.

**Question Types for Medium:**
- "Explain how [factor] might affect [outcome]" [4]
- "Analyse the impact of [change] on [market/economy]" [6]
- "Using the data, calculate..." [3-4]
- "Explain one advantage and one disadvantage of..." [4]

**Mark Scheme Format:**
- Award marks for developed explanation
- Award marks for chains of reasoning
- Context application required

**Model Answer MUST include:**
- Chains of reasoning using arrows (->)
- Application to economic context
- Appropriate economic terminology
- For calculations: show full working

**For context, create a brief scenario (2-3 sentences) that sets up the question.**

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create an AO4 question requiring evaluation (extended response).

**Question Types for Hard:**
- "*Evaluate whether [policy] would be effective" [12]
- "*Discuss the impact of [change] on [country/market]" [12]
- "*To what extent do you agree that..." [12]

**Mark Scheme Format:**
Use Levels of Response:
- Level 4 (10-12 marks): Thorough knowledge, effective analysis, convincing evaluation
- Level 3 (7-9 marks): Good knowledge, clear analysis, supported judgement
- Level 2 (4-6 marks): Some knowledge, basic analysis, basic judgement
- Level 1 (1-3 marks): Limited knowledge, limited analysis, unsupported assertion
Include indicative content

**Model Answer MUST include:**
- Arguments FOR (2+ points with chains of reasoning)
- Arguments AGAINST (2+ points with chains of reasoning)
- Clear, justified conclusion
- Qualification of conclusion ("it depends on...")
- Economic terminology throughout
- Reference to real examples/data where appropriate

**Create a question that could realistically appear on an OCR GCSE Economics paper.**

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an OCR GCSE Economics question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use formal economic language as in real OCR papers
- Include mark allocation in square brackets
- For extended response questions, add asterisk (*) before question
- Use appropriate economic terminology throughout
- Ensure question is answerable with GCSE-level knowledge

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme here"
}`;
}

// Additional prompt functions for specific question types

export function getOCRGCSEEconomicsExtendedPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = OCR_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an OCR GCSE Economics EXTENDED RESPONSE question (8-12 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create an evaluation question requiring balanced analysis and judgement.

**Format**: "*Evaluate..." or "*Discuss..."
Note: Mark with asterisk (*) to indicate quality of written communication is assessed.

**Mark scheme must use Levels of Response:**
- **Level 4 (10-12 marks):** Demonstrates thorough knowledge and understanding; applies knowledge effectively; analyses with well-developed chains of reasoning; evaluates to develop a convincing, well-supported judgement
- **Level 3 (7-9 marks):** Demonstrates good knowledge and understanding; applies knowledge to the context; analyses with clear chains of reasoning; evaluates to develop a supported judgement
- **Level 2 (4-6 marks):** Demonstrates some knowledge and understanding; some application; some analysis with basic reasoning; some evaluation with a basic judgement
- **Level 1 (1-3 marks):** Demonstrates limited knowledge and understanding; limited application; limited analysis; limited evaluation with unsupported assertion
- **0 marks:** Nothing creditworthy

Include indicative content listing points that might appear in answers.

Return valid JSON.`;
}

export function getOCRGCSEEconomicsCalculationPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = OCR_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an OCR GCSE Economics CALCULATION question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create a question requiring economic calculation. May include:
- Price elasticity of demand (PED)
- Price elasticity of supply (PES)
- Income elasticity of demand (YED)
- Cross elasticity of demand (XED)
- Percentage changes
- GDP calculations
- Revenue/cost/profit calculations
- Inflation rates
- Unemployment rates

**Marks**: 3-4 marks

**Format**: "Calculate [measure]. Show your working."

**Mark scheme should:**
- Award marks for correct formula (1 mark)
- Award marks for correct substitution (1 mark)
- Award marks for correct answer with units (1-2 marks)
- Note: "Allow follow through if method correct"

Include realistic economic data in the question.

Return valid JSON.`;
}

export function getOCRGCSEEconomicsMCQPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = OCR_GCSE_ECON_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an OCR GCSE Economics MULTIPLE CHOICE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create a multiple choice question with:
- Clear stem that tests understanding (not just recall)
- Four options (A, B, C, D)
- One correct answer
- Three plausible distractors (common misconceptions)

**Format exactly like OCR:**
"Which of the following [question]?
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

// Helper function for economics-specific variety
function getEconomicsVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const economicsContexts = [
    'consumer market (retail goods)',
    'labour market',
    'housing market',
    'energy market',
    'international trade',
    'government policy',
    'developing economy',
    'UK economy current affairs',
    'environmental economics',
    'technology and innovation'
  ];

  const randomContext = economicsContexts[Math.floor(Math.random() * economicsContexts.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Economic Context:** Set the question in a ${randomContext} context

**Question Angle:** Consider approaching from perspective of:
- Consumer/household
- Business/producer
- Government
- International/global
- Environmental

**Scenario Type:** Create a scenario involving:
- A market change (supply/demand shift)
- A policy decision
- An economic indicator change
- An international event
- A real-world current issue

IMPORTANT: Create a realistic, believable scenario that a real GCSE student could engage with. Use UK-relevant contexts and current economic issues where appropriate.`;
}

// Export legacy function names for backward compatibility
export const getOCREconomicsSystemPrompt = getOCRGCSEEconomicsSystemPrompt;
export const getOCREconomicsQuestionPrompt = getOCRGCSEEconomicsQuestionPrompt;
