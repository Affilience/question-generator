// Edexcel GCSE Business (1BS0) Question Generation Prompts
// Based on analysis of actual Edexcel past papers and official mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-gcses/business-2017.html

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';


// ============================================================================
// EDEXCEL GCSE BUSINESS SPECIFICATION DETAILS (1BS0)
// Based on official Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_GCSE_BUS_ASSESSMENT_OBJECTIVES = `
## Edexcel GCSE Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of business activity and the business environment | 15-20% |
| **AO2** | Apply knowledge and understanding of business activity and the business environment to given business situations | 25-30% |
| **AO3a** | Analyse business information to select, organise and interpret relevant points for purposes of business decision making | 10-15% |
| **AO3b** | Evaluate business information and evidence to make reasoned judgements and decisions | 30-40% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Paper 1** | Investigating Small Business | Theme 1 | Section A: 35 marks, Section B: 55 marks | 90 | 1hr 30m |
| **Paper 2** | Building a Business | Theme 2 | Section A: 35 marks, Section B: 55 marks | 90 | 1hr 30m |

### Section Structures
**Section A**: Short-answer questions based on business context (approximately 3 questions, 35 marks)
**Section B**: Extended-answer questions including 12-mark evaluation (approximately 4 questions, 55 marks)

### Key Command Words (Official Edexcel Definitions)
- **State/Identify**: Single correct point needed (AO1)
- **Define**: Precise meaning of a term (AO1)
- **Calculate**: Determine numerical answer with working (AO2)
- **Outline**: Set out main characteristics (AO1/AO2)
- **Explain**: Set out purposes/reasons, make relationships clear (AO2)
- **Analyse**: Separate into components, examine in detail (AO3a)
- **Justify**: Support a case with evidence/argument (AO3b)
- **Evaluate**: Review and respond to information; weigh up to reach conclusions (AO3b)
- **Discuss**: Consider different perspectives before reaching a conclusion (AO3b)

### Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, identification, basic comprehension | Single concept, direct knowledge retrieval, no context needed, straightforward definitions |
| **Medium** | Application, analysis, interpretation | Apply knowledge to business scenario, explain cause/effect relationships, interpret data, link concepts |
| **Hard** | Evaluation, synthesis, sustained judgement | Weigh competing factors, make justified recommendations, analyse complex scenarios, construct balanced arguments with conclusion |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires weighing multiple factors against each other
- No single "correct" answer - student must justify their position
- Demands integration of knowledge from multiple topic areas
- Requires awareness of context and stakeholder perspectives
- Must reach and justify a conclusion or recommendation

### Assessment Overview
- Both papers are externally examined
- Each paper is 50% of the qualification
- Questions are based on business contexts provided in the paper
- Extended responses require evaluation and judgement
- Calculations require working to be shown
`;

const EDEXCEL_GCSE_BUS_QUESTION_TEMPLATES = `
## Authentic Edexcel GCSE Business Question Formats (From Past Papers)

### Type 1: Definition Questions (1-2 marks)
Format: "Define the term [business concept]" or "What is meant by [term]?"
**Real examples:**
- "Define the term 'market segmentation'" [1 mark]
- "What is meant by 'customer needs'?" [2 marks]
- "Define the term 'cash flow'" [2 marks]
- "What is meant by 'e-commerce'?" [1 mark]
- "Define the term 'limited liability'" [2 marks]
Marking:
- 1 mark: Basic definition
- 2 marks: Full, clear definition with development or example

### Type 2: State/Identify Questions (1-2 marks)
Format: "State/Identify one/two [business element]"
**Real examples:**
- "State two methods of primary market research" [2 marks]
- "Identify one source of external finance" [1 mark]
- "State one non-financial objective a business might have" [1 mark]
- "Identify two stakeholder groups" [2 marks]
- "State one benefit of using social media marketing" [1 mark]

### Type 3: Calculate Questions (2-4 marks)
Format: "Calculate [measure]. You are advised to show your working"
**Real examples:**
- "Calculate the gross profit margin. You are advised to show your working" [2 marks]
- "Calculate the break-even point. You are advised to show your working" [3 marks]
- "Calculate the total contribution. You are advised to show your working" [2 marks]
- "Calculate the net cash flow for February. You are advised to show your working" [2 marks]
- "Calculate the percentage change in revenue. You are advised to show your working" [3 marks]
Marking:
- 1 mark for correct formula/method
- 1-2 marks for correct working
- 1 mark for correct answer with units/rounding

### Type 4: Outline Questions (2-3 marks)
Format: "Outline one/two [reason/advantage/disadvantage]"
**Real examples:**
- "Outline one advantage of using social media for promotion" [2 marks]
- "Outline two reasons why a business might segment its market" [4 marks]
- "Outline one disadvantage of holding high levels of stock" [2 marks]
- "Outline one way a business can improve cash flow" [2 marks]
Marking:
- 1 mark for identification
- 1-2 marks for development/explanation

### Type 5: Explain Questions (3-4 marks)
Format: "Explain [concept/relationship/impact]"
**Real examples:**
- "Explain one way in which a business can add value" [3 marks]
- "Explain one advantage to a business of using e-commerce" [3 marks]
- "Explain one likely impact of a rise in interest rates on a business" [4 marks]
- "Explain one benefit to a small business of operating as a sole trader" [3 marks]
- "Explain how a business might use market research to reduce risk" [4 marks]
Marking:
- 1 mark for identification
- 1 mark for explanation
- 1-2 marks for development/context

### Type 6: Analyse Questions (6 marks)
Format: "Analyse [business issue/decision]"
**Real examples:**
- "Analyse the impact of using quality control on Business X" [6 marks]
- "Analyse the possible effects of offering staff financial incentives" [6 marks]
- "Analyse the problems Business X might face when expanding into a new market" [6 marks]
- "Analyse the advantages and disadvantages of using flow production" [6 marks]
- "Analyse how changes in interest rates might affect Business X" [6 marks]
Marking (Levels):
- Level 2 (4-6): Good analysis with developed chains of reasoning, uses context
- Level 1 (1-3): Some analysis but limited development, generic

### Type 7: Justify Questions (6-9 marks)
Format: "Justify which option Business X should choose"
**Real examples:**
- "Justify which source of finance Business X should use" [6 marks]
- "Justify whether Business X should use job or flow production" [9 marks]
- "Justify which marketing method Business X should choose" [9 marks]
- "Justify which location Business X should choose" [9 marks]
Marking (Levels for 9 marks):
- Level 3 (7-9): Thorough justification with well-reasoned conclusion, effective use of context
- Level 2 (4-6): Some justification, conclusion reached but limited balance
- Level 1 (1-3): Limited justification, may not reach conclusion

### Type 8: Evaluate Questions (12 marks)
Format: "Evaluate [business decision/proposition]"
**Real examples:**
- "Evaluate whether Business X should become a franchise" [12 marks]
- "Evaluate the likely impact on Business X of using lean production" [12 marks]
- "Evaluate whether Business X should use penetration or skimming pricing" [12 marks]
- "Evaluate whether expanding overseas would benefit Business X" [12 marks]
- "Evaluate whether Business X should change from a sole trader to a private limited company" [12 marks]
Marking (Levels):
- Level 4 (10-12): Thorough evaluation with well-supported judgement, excellent use of context
- Level 3 (7-9): Good evaluation, reasoned conclusion
- Level 2 (4-6): Some evaluation, limited balance
- Level 1 (1-3): Limited, mainly descriptive
`;

const EDEXCEL_GCSE_BUS_MARK_SCHEME_CONVENTIONS = `
## Edexcel GCSE Business Mark Scheme Conventions

### Levels-Based Marking
Read whole response first.
Find 'best fit' level using descriptors.
Use indicative content to determine mark within level.

### 12-Mark Evaluation Levels (Official Edexcel Grid)
**Level 4 (10-12 marks):**
- Thorough knowledge and understanding demonstrated
- Thorough analysis with well-developed chains of reasoning
- Evaluation is balanced and considers different perspectives
- A well-supported judgement is reached
- Effective use of relevant context throughout

**Level 3 (7-9 marks):**
- Good knowledge and understanding
- Good analysis with some developed chains
- Some evaluation with reasoned conclusion
- Good use of context

**Level 2 (4-6 marks):**
- Some knowledge and understanding
- Analysis present but may be limited or one-sided
- Limited evaluation
- Some context reference

**Level 1 (1-3 marks):**
- Limited knowledge
- Little analysis
- No meaningful evaluation
- Limited or no context

### 9-Mark Justify Levels
**Level 3 (7-9):** Thorough justification, well-reasoned, clear conclusion with supporting evidence
**Level 2 (4-6):** Some justification, conclusion present but may lack full support
**Level 1 (1-3):** Limited justification, may not reach clear conclusion

### 6-Mark Analyse Levels
**Level 2 (4-6):** Good analysis with developed chains of reasoning, uses context
**Level 1 (1-3):** Limited analysis, mainly descriptive, generic

### Application Expectations
Edexcel specifically looks for:
- Reference to the named business
- Use of provided data/figures
- Industry-relevant considerations
- Realistic business understanding
- Recognition of business type/size
- Specific reference to the scenario

### Evaluation Indicators
Mark schemes reward:
- Balanced consideration (both sides)
- "However, this depends on..."
- Short-term vs long-term thinking
- Consideration of stakeholders
- Final recommendation/judgement
- Recognition of risks and limitations
- Use of figures/data from the case study

### Common Indicative Content Phrases
**For analysis:** "this means that", "as a result", "leading to", "which could cause"
**For evaluation:** "however", "on the other hand", "this depends on", "in the short term... in the long term"
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - THEME 1
// ============================================================================

const EDEXCEL_GCSE_BUS_THEME1_KNOWLEDGE: Record<string, string> = {
  'edexcel-gcse-bus-enterprise-entrepreneurship': `## Topic 1.1: Enterprise and Entrepreneurship

### The Dynamic Nature of Business
- **Business**: An organisation that provides goods or services to customers
- **Goods**: Physical, tangible products (cars, food, clothes)
- **Services**: Intangible products (haircuts, insurance, education)
- Businesses operate in a constantly changing environment
- Success requires adapting to change

### Why New Business Ideas Come About
**Changes in technology:**
- Internet created opportunities (ASOS, Deliveroo)
- Social media enabled new marketing (Instagram influencers)
- Apps created new business models (Uber, Just Eat)
- Example: Netflix started as DVD rental, became streaming giant

**Changes in what consumers want:**
- Health consciousness (plant-based foods - Beyond Meat, Quorn)
- Sustainability concerns (refill shops, ethical fashion)
- Convenience (ready meals, subscription boxes)
- Example: Greggs launched vegan sausage roll due to demand

**Products/services becoming obsolete:**
- Video rental stores replaced by streaming
- Film cameras replaced by digital/smartphones
- Traditional taxis disrupted by Uber
- High street retail challenged by online shopping

### How New Business Ideas Come About
**Original ideas**: Creating something entirely new
- James Dyson: Bagless vacuum cleaner (5,127 prototypes)
- Sara Blakely: Spanx shapewear

**Adapting existing ideas**: Improving or localising successful concepts
- Innocent Drinks: Better smoothies using fresh fruit
- Gymshark: UK fitness clothing brand adapted from US market

### Risk and Reward
**Risk**: The possibility of losing money or the business failing
- Financial risk: Losing invested capital
- Opportunity cost: What else could have been done with time/money
- Personal risk: Stress, long hours, no guaranteed income

**Reward**: The potential benefits of running a business
- Profit: Financial return
- Independence: Being your own boss
- Personal satisfaction: Building something
- Potential wealth: Successful exit or ongoing income

**UK Business Statistics:**
- ~400,000 new businesses start each year
- ~60% fail within first 3 years
- Most common reasons: cash flow problems, lack of demand, poor management

### The Role of Business Enterprise
**Enterprise**: The process of identifying opportunities and taking risks to start a business

**How enterprise benefits:**
- Individuals: Income, personal development, satisfaction
- Organisations: Innovation, competition, growth
- Economy: Job creation, tax revenue, exports

**Producing goods and services:**
- Meeting customer needs
- Creating employment
- Generating wealth
- Providing choice for consumers

### The Importance of Added Value
**Added Value** = Selling Price - Cost of bought-in goods/services

**Methods of adding value:**
| Method | Example | How it adds value |
|--------|---------|-------------------|
| Branding | Apple iPhone | Premium price for brand perception |
| Quality | Rolls-Royce | Higher price for superior product |
| Design | Dyson | Aesthetic and functional appeal |
| Convenience | Amazon Prime | Faster delivery justifies membership |
| USP | Innocent Drinks | Unique recipes, ethical sourcing |
| Customer service | John Lewis | "Never Knowingly Undersold" |

**Why added value matters:**
- Enables profit margin
- Creates competitive advantage
- Builds customer loyalty
- Supports premium pricing

**Real Examples:**
- Costa Coffee: Buys beans for ~50p, sells coffee for £3.50+ (added value through experience, location, brand)
- Subway: Basic ingredients cost ~£1, sandwich sells for £4+ (customisation, freshness, speed)

### Entrepreneurship
**Entrepreneur**: A person who takes the initiative to start a business, taking on financial risk in hope of profit

**Role of an entrepreneur:**
- Organising resources (land, labour, capital)
- Making business decisions
- Taking risks
- Identifying opportunities

**Famous UK Entrepreneurs:**
| Entrepreneur | Business | Story |
|--------------|----------|-------|
| Richard Branson | Virgin Group | Started Virgin Records, expanded to airlines, trains, media |
| James Dyson | Dyson | 5,127 prototypes, now worth £5bn+ |
| Levi Roots | Reggae Reggae Sauce | Dragons' Den investment, now £30m+ brand |
| Karren Brady | West Ham United | Became MD at 23, transforming Birmingham City |
| Michelle Mone | Ultimo | Started lingerie brand from kitchen table |
| Nick Jenkins | Moonpig | Online personalised cards, sold for £120m |

### Characteristics of Successful Entrepreneurs
| Characteristic | Description | Example |
|----------------|-------------|---------|
| Risk-taking | Willing to invest money and time | Branson mortgaged house for Virgin Atlantic |
| Creativity | Generating new ideas | James Dyson's cyclone technology |
| Determination | Perseverance despite setbacks | Dyson's 5,127 failed prototypes |
| Initiative | Seeing opportunities | Levi Roots spotting gap for Caribbean sauces |
| Confidence | Self-belief to pursue vision | Michelle Mone starting with no experience |
| Hard-working | Long hours, dedication | Most entrepreneurs work 60+ hours/week |
| Communication | Persuading stakeholders | Levi Roots convincing Dragons' Den investors |
| Decision-making | Making choices under pressure | All entrepreneurs daily |
`,

  'edexcel-gcse-bus-spotting-business-opportunity': `## Topic 1.2: Spotting a Business Opportunity

### Customer Needs
**What customers need:**
- Price: Affordable/value for money
- Quality: Meets expectations
- Choice: Range of options
- Convenience: Easy to access/purchase

**How businesses identify needs:**
- Market research
- Customer feedback
- Observation
- Data analysis

**Changing customer needs:**
- Ethical products (Fairtrade, organic)
- Convenience (click and collect, same-day delivery)
- Personalisation (customised products)
- Experience (not just products)

### Market Research
**Purpose of market research:**
- Identify customer needs
- Spot gaps in the market
- Reduce risk of failure
- Understand competition
- Test new product ideas

**Primary Research (Field Research)**
Collecting new, original data directly from customers

| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Questionnaires | Written questions to collect data | Cheap, large samples, quantitative | Low response rates, may be biased |
| Surveys | Similar to questionnaires, often online | Quick, cheap, easy to analyse | Leading questions, self-selection |
| Interviews | Face-to-face or phone conversations | In-depth, can probe further | Time-consuming, expensive, small sample |
| Focus groups | Small group discussions | Rich qualitative data, ideas generation | Expensive, groupthink, not representative |
| Observation | Watching customer behaviour | Accurate behaviour data | Can't understand reasons, time-consuming |

**Secondary Research (Desk Research)**
Using existing data already collected by others

| Source | Examples | Advantages | Disadvantages |
|--------|----------|------------|---------------|
| Internal | Sales records, loyalty card data, accounts | Free, relevant, up-to-date | May be limited, only own business |
| External | Government statistics, Mintel reports, newspapers | Wide range, expert analysis | May be outdated, expensive, not specific |

**Qualitative vs Quantitative Data:**
| Qualitative | Quantitative |
|-------------|--------------|
| Opinions, feelings, reasons | Numbers, statistics, facts |
| "Why do you like this?" | "How many people bought this?" |
| Focus groups, interviews | Surveys, sales data |
| Hard to analyse, rich insights | Easy to analyse, limited depth |

**Using Data for Marketing Decisions:**
- Identify target market
- Set appropriate prices
- Choose promotion methods
- Decide on distribution channels

### Market Segmentation
**Market segmentation**: Dividing a market into distinct groups of customers with similar characteristics and needs

**Methods of Segmentation:**
| Type | Criteria | Example |
|------|----------|---------|
| Demographic | Age, gender, income, occupation | Saga (over 50s), Claire's (teenage girls) |
| Geographic | Location, region, urban/rural | Local newspapers, regional brands |
| Psychographic | Lifestyle, attitudes, personality | Whole Foods (health-conscious), Harley-Davidson (lifestyle) |
| Behavioural | Usage rate, brand loyalty, benefits sought | Frequent flyer programmes, loyalty cards |

**Benefits of Segmentation:**
- Better understanding of customers
- More targeted marketing
- Meet specific needs
- Identify market gaps
- Efficient use of marketing budget
- Higher customer satisfaction

**Real Segmentation Examples:**
- **Coca-Cola**: Diet Coke (health-conscious), Zero Sugar (taste-focused), Energy (young, active)
- **Nike**: Running (athletes), Lifestyle (fashion), Training (gym-goers)
- **Tesco**: Finest (premium), Everyday Value (budget), Free From (dietary needs)

### Understanding the Competitive Environment
**Competition**: Other businesses offering similar products/services to the same customers

**Why understanding competition matters:**
- Identify competitive advantages
- Set appropriate prices
- Differentiate products
- Respond to market changes

**Types of Competition:**
- **Direct competitors**: Offer same product (McDonald's vs Burger King)
- **Indirect competitors**: Meet same need differently (McDonald's vs meal kit delivery)

**Market Mapping/Positioning**
Visual representation of where products sit relative to competitors

Common axes:
- Price (low to high)
- Quality (low to high)
- Traditional to Modern
- Functional to Luxury

**Market Map Example - Coffee Shops:**
| | Low Price | High Price |
|-|-----------|------------|
| High Quality | Greggs Coffee | Costa, Starbucks |
| Low Quality | Vending machine | - |

**Identifying Gaps in the Market:**
- Areas on market map with no/few competitors
- Unmet customer needs
- Example: Pret identified gap for fresh, healthy fast food

**Strength of Competition:**
Factors that affect how strong competition is:
- Number of competitors
- Size of competitors
- Ease of entering market
- Customer loyalty
- Product differentiation
`,

  'edexcel-gcse-bus-putting-business-idea-into-practice': `## Topic 1.3: Putting a Business Idea into Practice

### Business Aims and Objectives
**Aims**: General statements of what the business wants to achieve
**Objectives**: Specific, measurable targets to achieve the aims

**Financial Objectives:**
| Objective | Description |
|-----------|-------------|
| Survival | Especially important for new businesses or during difficult times |
| Profit | Making money after all costs are paid |
| Sales | Increasing revenue or units sold |
| Market share | Percentage of total market sales |
| Financial security | Building reserves for the future |

**Non-Financial Objectives:**
| Objective | Description |
|-----------|-------------|
| Social objectives | Making a positive impact on society |
| Personal satisfaction | Enjoying the work, sense of achievement |
| Challenge | Wanting to prove it can be done |
| Independence | Being your own boss |
| Control | Making own decisions |

**Why Objectives Differ:**
- Size of business (survival vs growth)
- Stage of business (new vs established)
- Owner's motivation (profit vs social good)
- Market conditions (recession vs growth)

**Example:**
- New coffee shop: Objective is survival in year 1
- Established Costa: Objective is market share growth

### Revenue, Costs and Profit

**Revenue (Turnover/Sales Revenue)**
**Revenue = Selling Price × Quantity Sold**

Example: Selling 500 cakes at £3 each
Revenue = £3 × 500 = £1,500

**Ways to increase revenue:**
- Increase selling price (if demand allows)
- Increase quantity sold (marketing, distribution)
- Add new products
- Enter new markets

**Fixed Costs**
Costs that stay the same regardless of output
- Rent
- Insurance
- Salaries (permanent staff)
- Loan repayments
- Business rates

**Variable Costs**
Costs that change with output
- Raw materials
- Packaging
- Wages (hourly workers)
- Electricity for production
- Delivery costs

**Total Costs = Fixed Costs + Variable Costs**

Example:
- Fixed costs: £5,000/month
- Variable cost per unit: £2
- Output: 1,000 units
- Variable costs: £2 × 1,000 = £2,000
- Total costs: £5,000 + £2,000 = £7,000

**Interest**
**Interest = Principal × Rate × Time**

Example: £10,000 loan at 5% for 1 year
Interest = £10,000 × 0.05 × 1 = £500

**Profit**
**Profit = Total Revenue - Total Costs**

Example:
- Revenue: £10,000
- Total costs: £7,000
- Profit: £10,000 - £7,000 = £3,000

**Importance of Profit:**
- Reward for risk-taking
- Provides funds for investment
- Attracts investors
- Measure of success

**Why Profits Differ:**
- Industry (tech vs retail)
- Business model (volume vs premium)
- Stage of business (new vs established)
- Economic conditions

### Break-Even Analysis

**Break-even point**: Output level where total revenue equals total costs (no profit or loss)

**Contribution per unit** = Selling Price - Variable Cost per Unit

**Break-even Output = Fixed Costs ÷ Contribution per Unit**

**Example Calculation:**
- Selling price: £10
- Variable cost: £4
- Fixed costs: £12,000

Contribution = £10 - £4 = £6
Break-even = £12,000 ÷ £6 = 2,000 units

**Margin of Safety**
How much sales can fall before making a loss
**Margin of Safety = Actual Output - Break-even Output**

Example: If actual sales are 2,500 units
Margin of safety = 2,500 - 2,000 = 500 units

**Break-even Chart Components:**
| Element | Description |
|---------|-------------|
| X-axis | Output/sales (units) |
| Y-axis | Revenue/costs (£) |
| Fixed costs line | Horizontal line |
| Total costs line | Starts at fixed costs, slopes upward |
| Revenue line | Starts at origin, slopes upward |
| Break-even point | Where TC and TR lines cross |
| Profit area | Above break-even point |
| Loss area | Below break-even point |

**Benefits of Break-even Analysis:**
- Shows minimum sales needed
- Helps pricing decisions
- Supports loan applications
- Shows impact of cost/price changes
- Easy to understand

**Limitations of Break-even Analysis:**
- Assumes all output is sold
- Assumes costs stay constant
- Single product only
- Static (things change)
- Doesn't show cash flow timing

**Impact on Break-even:**
| Change | Effect on Break-even |
|--------|---------------------|
| Increase fixed costs | Break-even rises (need more sales) |
| Decrease fixed costs | Break-even falls |
| Increase selling price | Break-even falls |
| Decrease selling price | Break-even rises |
| Increase variable costs | Break-even rises |
| Decrease variable costs | Break-even falls |

### Cash and Cash Flow

**Cash**: Money available to a business immediately
**Cash flow**: Movement of money in and out of a business over time

**Why Cash is Important:**
- Pay suppliers (avoid losing them)
- Pay wages (keep employees)
- Pay bills (rent, utilities)
- Take advantage of opportunities
- Survive unexpected costs

**Cash vs Profit:**
| Cash | Profit |
|------|--------|
| Physical money available | Revenue minus costs |
| Affected by timing | Calculated over a period |
| Can run out even if profitable | Can exist without cash |

**A profitable business can fail if it runs out of cash!**

**Cash Flow Forecasts**
Prediction of cash coming in and going out

| | January | February | March |
|-|---------|----------|-------|
| **Cash Inflows** | | | |
| Cash sales | £8,000 | £9,000 | £10,000 |
| Credit sales received | £3,000 | £4,000 | £5,000 |
| **Total Inflows** | £11,000 | £13,000 | £15,000 |
| **Cash Outflows** | | | |
| Stock purchases | £4,000 | £5,000 | £6,000 |
| Wages | £3,000 | £3,000 | £3,000 |
| Rent | £2,000 | £2,000 | £2,000 |
| **Total Outflows** | £9,000 | £10,000 | £11,000 |
| **Net Cash Flow** | £2,000 | £3,000 | £4,000 |
| **Opening Balance** | £1,000 | £3,000 | £6,000 |
| **Closing Balance** | £3,000 | £6,000 | £10,000 |

**Key Calculations:**
- **Net Cash Flow** = Total Inflows - Total Outflows
- **Closing Balance** = Opening Balance + Net Cash Flow
- Next month's opening balance = Previous month's closing balance

**Cash Flow Problems:**
- Seasonal sales (ice cream shop in winter)
- Offering credit to customers
- Holding too much stock
- Unexpected costs
- Poor financial planning

**Improving Cash Flow:**
| Method | How it helps |
|--------|--------------|
| Reduce credit terms | Get money faster |
| Offer discounts for early payment | Encourage quicker payment |
| Increase credit from suppliers | Delay paying out |
| Reduce stock levels | Free up cash |
| Cut costs | Reduce outflows |
| Increase prices | More cash per sale |
| Use overdraft | Cover short-term gaps |
| Chase debtors | Collect money owed |

### Sources of Business Finance

**Short-term Sources (under 1 year):**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Overdraft | Borrow up to agreed limit from bank | Flexible, pay interest only on amount used | High interest rates, can be withdrawn |
| Trade credit | Delay payment to suppliers (30-60 days) | Free, maintains cash | May lose discounts, damages relationships |

**Long-term Sources (over 1 year):**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Personal savings | Owner's own money | No interest, no repayment | Limited amount, risk to owner |
| Venture capital | Investment from specialists | Large amounts, expertise | Give up equity and control |
| Share capital | Selling shares (Ltd/PLC) | No repayment, large amounts | Dilutes ownership |
| Loan | Borrow fixed amount from bank | Fixed repayments, can budget | Interest, need security |
| Retained profit | Profits kept in business | Free, no debt | Takes time to build |
| Crowdfunding | Many small investments online | No repayment, builds community | Time-consuming, not guaranteed |

**Choosing Sources of Finance:**
Consider:
- Amount needed
- Purpose (short-term need vs long-term investment)
- Cost (interest rate)
- Risk tolerance
- Business type (Ltd can sell shares)
- Stage of business (new vs established)
`,

  'edexcel-gcse-bus-making-business-effective': `## Topic 1.4: Making the Business Effective

### The Options for Start-up and Small Businesses

**Sole Trader**
- Owned and run by one person (may employ others)
- Most common form of business in UK (3.5 million+)
- Examples: Plumbers, hairdressers, consultants, market traders

| Advantages | Disadvantages |
|------------|---------------|
| Quick and easy to set up | Unlimited liability (personal assets at risk) |
| Owner keeps all profits | Hard to raise finance |
| Complete control over decisions | Workload and responsibility falls on one person |
| Privacy (accounts not public) | Business ends if owner dies/retires |
| Flexibility | Limited expertise |

**Unlimited Liability**: Personal possessions (house, car, savings) can be taken to pay business debts

**Partnership**
- 2-20 partners share ownership and responsibility
- Common in professions: Lawyers, accountants, doctors, dentists
- Usually need a Deed of Partnership (roles, profit share, disputes)

| Advantages | Disadvantages |
|------------|---------------|
| Shared workload and responsibility | Unlimited liability for all partners |
| More capital from partners | Shared profits |
| Combined skills and expertise | Potential disagreements |
| Easy to set up | Bound by partners' decisions |
| Shared decision-making | Business ends if partner leaves/dies |

**Private Limited Company (Ltd)**
- Separate legal entity from owners
- Owned by shareholders, shares sold privately
- Examples: Many small-medium businesses

| Advantages | Disadvantages |
|------------|---------------|
| Limited liability | More regulations and paperwork |
| Easier to raise finance | Accounts must be filed at Companies House |
| Business continues if owner dies | More expensive to set up |
| Can sell shares to raise capital | Profits shared with shareholders |
| More credibility | Less flexibility in decision-making |

**Limited Liability**: Shareholders can only lose the amount they invested, personal assets protected

**Choosing Business Ownership:**
| Factor | Suggests... |
|--------|-------------|
| Want complete control | Sole trader |
| Need more capital | Partnership or Ltd |
| Want liability protection | Ltd |
| Keep things simple | Sole trader |
| Share workload | Partnership |
| Plan to grow significantly | Ltd |

### Franchising

**Franchise**: An agreement where a business (franchisor) allows another (franchisee) to trade using its name, products and systems

**UK Franchise Statistics:**
- ~48,000 franchises in UK
- Generate £17bn+ annually
- 97% of franchises report profitability

**Examples:**
- McDonald's (90% of UK restaurants are franchises)
- Subway
- Costa Coffee (Whitbread franchises)
- Domino's Pizza
- Subway

**Costs:**
- Initial franchise fee: £10,000 - £500,000+
- Royalty payments: Typically 4-8% of turnover
- Marketing contributions
- Equipment and stock

**Advantages for Franchisee:**
| Advantage | Explanation |
|-----------|-------------|
| Proven business model | Lower risk of failure |
| Established brand | Instant recognition |
| Training and support | Help to get started |
| Marketing support | National advertising |
| Bulk buying power | Lower stock costs |
| Finance easier | Banks more willing to lend |

**Disadvantages for Franchisee:**
| Disadvantage | Explanation |
|--------------|-------------|
| Ongoing fees | Reduce profits (royalties) |
| Limited creativity | Must follow franchisor's rules |
| Restricted suppliers | May pay more |
| Reputation risk | Other franchisees' actions affect you |
| Exit restrictions | Hard to sell or close |
| Not truly independent | Still answering to franchisor |

### Business Location

**Factors Affecting Location:**
| Factor | Explanation | Example |
|--------|-------------|---------|
| Proximity to market | Close to customers | Retail in shopping centres |
| Proximity to materials | Close to suppliers/raw materials | Food processing near farms |
| Proximity to labour | Access to workers (skilled or general) | Tech firms near universities |
| Proximity to competitors | Can be advantage (comparison shopping) | Car dealerships together |
| Nature of business | Type of premises needed | Manufacturing needs space |
| Costs | Rent, wages, rates | Call centres in lower-cost areas |
| Infrastructure | Transport links, broadband | Warehouses near motorways |

**E-commerce and Location:**
- Online businesses need less prime retail space
- Warehouse location more important than shop location
- Can reach global markets from anywhere
- Reduces importance of traditional location factors

**Real Examples:**
- Amazon: Warehouses near motorways for fast distribution
- Nissan: Sunderland - skilled workers, port access, government grants
- Tech startups: London (talent, investors) or Cambridge (university links)

### The Marketing Mix (4Ps)

**Product**
- Design and features
- Quality
- Branding
- Product range
- After-sales service

**Design Mix:**
- **Function**: Does the product work well?
- **Aesthetics**: Does it look/feel good?
- **Cost**: Can it be made affordably?

**Price**
Pricing strategies for new businesses:

| Strategy | Description | When Used |
|----------|-------------|-----------|
| Competitive pricing | Set price similar to competitors | Competitive markets |
| Cost-plus pricing | Add markup to costs | Simple, ensures profit |
| Penetration pricing | Low initial price to gain market | Entering market, building share |
| Price skimming | High initial price, lower over time | New, innovative products |

**Promotion**
Methods to communicate with customers:

| Method | Description | Best For |
|--------|-------------|----------|
| Advertising | Paid media (TV, radio, print, digital) | Building awareness |
| Social media | Facebook, Instagram, TikTok | Young audiences, low budget |
| Sales promotion | Discounts, BOGOF, competitions | Short-term sales boost |
| Sponsorship | Supporting events/teams | Brand awareness |
| Public relations | Press releases, events | Credibility |

**Technology and Promotion:**
- Social media marketing (Instagram, TikTok)
- Influencer marketing
- Search engine optimisation (SEO)
- Email marketing
- Targeted digital advertising

**Place (Distribution)**
How products reach customers:

| Channel | Route | Example |
|---------|-------|---------|
| Direct | Producer → Consumer | Farm shops, websites |
| Retailer | Producer → Retailer → Consumer | Supermarkets |
| Wholesaler | Producer → Wholesaler → Retailer → Consumer | Convenience stores |

**E-commerce Benefits:**
- Global reach
- Open 24/7
- Lower overheads
- Customer data collection
- Targeted marketing

### Business Plans

**Business Plan**: Document outlining what the business does, how it will succeed, and financial projections

**Contents:**
1. Executive summary
2. Business description
3. Market analysis
4. Products/services
5. Marketing strategy
6. Operations plan
7. Financial projections
8. Funding requirements

**Why Write a Business Plan:**
- Helps secure finance (banks, investors want to see it)
- Forces owner to think through all aspects
- Sets targets and milestones
- Identifies potential problems
- Provides roadmap for business

**Limitations:**
- Time-consuming to prepare
- May become outdated quickly
- Based on predictions (may be wrong)
- Doesn't guarantee success
`,

  'edexcel-gcse-bus-understanding-external-influences': `## Topic 1.5: Understanding External Influences

### Stakeholders

**Stakeholder**: Any person or group with an interest in the business

| Stakeholder | Interest | Example Concern |
|-------------|----------|-----------------|
| Owners/Shareholders | Profit, growth, dividends | Return on investment |
| Employees | Job security, pay, conditions | Fair wages, safe working |
| Customers | Quality, price, service | Value for money |
| Suppliers | Payment, regular orders | Being paid on time |
| Local community | Jobs, environment | Noise, pollution |
| Government | Tax, employment, laws | Following regulations |
| Pressure groups | Specific issues | Environmental impact |

**Stakeholder Conflict:**
- Owners want higher profits vs employees want higher wages
- Customers want low prices vs owners want high margins
- Community wants less pollution vs business wants lower costs
- Shareholders want dividends vs business needs to reinvest

**Real Example - Tesco:**
- Shareholders: Want dividend payments
- Employees: Want Living Wage
- Customers: Want low prices
- Suppliers: Want better payment terms
- Community: Want local stores, jobs

### Technology and Business

**E-commerce**
Buying and selling goods/services online

**UK E-commerce Facts:**
- ~30% of all retail sales now online
- £137bn+ annual online sales
- Amazon UK: £25bn+ revenue

**Benefits of E-commerce:**
| Benefit | Explanation |
|---------|-------------|
| Global reach | Sell to customers worldwide |
| Lower costs | No expensive high street premises |
| 24/7 trading | Open all the time |
| Customer data | Learn about buying habits |
| Convenience | Easy for customers |

**Challenges of E-commerce:**
| Challenge | Explanation |
|-----------|-------------|
| Competition | Easy for others to set up online |
| Distribution costs | Delivery and returns |
| No physical experience | Can't touch/try products |
| Website costs | Development and maintenance |
| Cybersecurity | Protecting customer data |

**Digital Communication:**
- Email and instant messaging
- Video conferencing (Zoom, Teams)
- Social media marketing
- Customer service chatbots
- Online collaboration tools

**Benefits:**
- Faster communication
- Reduced costs
- Wider reach
- Better customer engagement

**Challenges:**
- Technology costs
- Staff training
- Less personal contact
- Information overload

### Legislation (Laws)

**Employment Law:**
| Law | Requirement |
|-----|-------------|
| National Minimum/Living Wage | £11.44/hour (23+, April 2024) |
| Working Time Regulations | Max 48-hour week, 28 days holiday |
| Equality Act 2010 | No discrimination (age, gender, race, disability) |
| Health and Safety at Work Act | Safe working environment |

**Impact on businesses:**
- Increased costs (wages, equipment)
- Administrative burden
- Protects employees
- Creates level playing field

**Consumer Law:**
| Law | Protection |
|-----|------------|
| Consumer Rights Act 2015 | Goods must be of satisfactory quality, fit for purpose, as described |
| | Right to refund within 30 days |
| | Right to repair or replacement |
| Consumer Protection Act | Protection against unsafe products |
| Sale of Goods Act | Goods must match description |

**Impact on businesses:**
- Must ensure quality
- Handle returns/complaints
- May face legal action if non-compliant
- Builds customer trust

### The Economy and Business

**Interest Rates**
Cost of borrowing money (or reward for saving)

- Set by Bank of England Monetary Policy Committee
- Current base rate influences all other rates

**Impact of HIGH Interest Rates:**
| On Business | On Consumers | On Economy |
|-------------|--------------|------------|
| Higher loan costs | Higher mortgage payments | Reduced spending |
| Less investment | More incentive to save | Slower growth |
| Higher costs | Less disposable income | Lower inflation |

**Impact of LOW Interest Rates:**
| On Business | On Consumers | On Economy |
|-------------|--------------|------------|
| Cheaper borrowing | Lower mortgage payments | Increased spending |
| More investment | Less saving | Faster growth |
| Lower costs | More disposable income | Higher inflation risk |

**Exchange Rates**
Value of one currency against another (e.g., £1 = $1.25)

**Strong Pound (£ buys more foreign currency):**
- Imports cheaper (good for businesses buying abroad)
- Exports more expensive (bad for businesses selling abroad)
- Foreign holidays cheaper

**Weak Pound (£ buys less foreign currency):**
- Imports more expensive
- Exports cheaper (good for UK exporters)
- Attracts foreign tourists

**Real Example - Brexit Impact:**
- Pound fell 10%+ after Brexit vote (2016)
- Good for exporters (Burberry, Rolls-Royce)
- Bad for importers (higher costs)

**Inflation**
General rise in prices over time

- Measured by Consumer Price Index (CPI)
- Bank of England target: 2%
- UK inflation reached 11.1% (October 2022)

**Impact of HIGH Inflation:**
- Higher costs for businesses
- Workers demand pay rises
- Reduced purchasing power
- Uncertainty makes planning difficult

**Unemployment**
Percentage of workforce without jobs

**Impact of HIGH Unemployment:**
- Less consumer spending
- More workers available (easier to recruit)
- Downward pressure on wages

**Impact of LOW Unemployment:**
- More consumer spending
- Harder to find workers
- Upward pressure on wages
- May need to offer better conditions

### External Influences Summary

| Factor | How it Affects Business |
|--------|------------------------|
| Interest rates | Cost of borrowing, consumer spending |
| Exchange rates | Cost of imports/exports |
| Inflation | Costs, prices, wages |
| Unemployment | Consumer spending, labour availability |
| Legislation | Costs, compliance requirements |
| Technology | Opportunities, competition |
| Stakeholders | Competing interests to balance |
`,
};

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - THEME 2
// ============================================================================

const EDEXCEL_GCSE_BUS_THEME2_KNOWLEDGE: Record<string, string> = {
  'edexcel-gcse-bus-growing-business': `## Topic 2.1: Growing the Business

### Business Growth

**Why Businesses Want to Grow:**
- Increased profits
- Economies of scale (lower unit costs)
- Increased market share
- Greater market power
- Survival (beat competitors)
- Attract better staff

### Internal (Organic) Growth
Growing using the business's own resources

**Methods:**
- Opening new stores/branches
- Developing new products
- Entering new markets
- Increasing capacity
- Hiring more staff

**Advantages:**
| Advantage | Explanation |
|-----------|-------------|
| Less risky | Gradual, controlled expansion |
| Maintain control | No new owners involved |
| Preserve culture | Company values stay same |
| Sustainable | Based on own resources |
| Finance from profits | No external debt |

**Disadvantages:**
| Disadvantage | Explanation |
|--------------|-------------|
| Slow | Takes time to grow |
| Limited by resources | Only what business can afford |
| May miss opportunities | Competitors may grow faster |
| Organic limits | Market may be saturated |

**Real Examples:**
- Aldi UK: Grew from 8 stores (1990) to 1,000+ (2024)
- Greggs: Opens 100+ new stores per year
- Primark: Slow expansion across Europe

### External (Inorganic) Growth
Growing by joining with other businesses

**Types:**
| Type | Definition | Example |
|------|------------|---------|
| Merger | Two businesses join as equals | Equals: Dixons + Carphone Warehouse |
| Takeover | One business buys another | Facebook buying Instagram |

**Types of Integration:**
| Type | Description | Example |
|------|-------------|---------|
| Horizontal | Same industry, same stage | Morrisons buying Safeway |
| Vertical forward | Closer to customer | Brewery buying pubs |
| Vertical backward | Closer to suppliers | Supermarket buying farms |
| Conglomerate | Unrelated businesses | Virgin Group (music, airlines, trains) |

**Advantages of External Growth:**
- Fast way to grow
- Economies of scale
- Reduced competition
- Gain new markets/products
- Acquire expertise

**Disadvantages of External Growth:**
- Expensive
- Culture clash
- Integration problems
- May face regulatory investigation
- May lead to redundancies
- Diseconomies of scale

**Real UK Examples:**
- Tesco buying Booker (2018): £3.7bn, vertical forward
- Amazon buying Whole Foods (2017): $13.7bn, vertical forward
- Disney buying Pixar (2006): $7.4bn, horizontal

### Public Limited Companies (PLC)

**Private Limited Company (Ltd):**
- Shares sold privately
- Cannot sell shares on stock exchange
- Often smaller, family-owned

**Public Limited Company (PLC):**
- Shares traded on stock exchange
- Anyone can buy shares
- Must have minimum £50,000 share capital
- Examples: Tesco, BP, HSBC, Marks & Spencer

**Process of Becoming PLC:**
1. Meet minimum capital requirement (£50,000)
2. Prepare prospectus (company information)
3. Apply for stock exchange listing
4. Float shares (IPO - Initial Public Offering)
5. Comply with stock exchange regulations

**Advantages of PLC:**
| Advantage | Explanation |
|-----------|-------------|
| Raise large capital | Millions from share sales |
| Status and credibility | Seen as established |
| Easier to get loans | Banks more willing |
| Shares easily transferable | Attracts investors |

**Disadvantages of PLC:**
| Disadvantage | Explanation |
|--------------|-------------|
| Expensive to set up | Legal and admin costs |
| Public scrutiny | Accounts are public |
| Vulnerable to takeover | Anyone can buy shares |
| Short-term pressure | Shareholders want quick returns |
| Diluted control | Many shareholders have say |

### Sources of Finance for Growing Businesses

| Source | Description | When Suitable |
|--------|-------------|---------------|
| Internal sources | Retained profit, sale of assets | Low risk, gradual growth |
| Loan capital | Bank loans, mortgages | Large investments |
| Share capital | Selling shares (Ltd or PLC) | Major expansion |
| Stock market flotation | Becoming PLC | Very large capital needs |

### Globalisation

**Globalisation**: The increasing interconnection of world economies, trade and culture

**Causes:**
- Improved technology (internet, communication)
- Better transport (containerisation, air freight)
- Trade agreements (WTO, EU)
- Multinational companies
- Reduced trade barriers

**How Businesses Compete Internationally:**
| Strategy | Description |
|----------|-------------|
| Exporting | Selling to foreign customers |
| Importing | Buying from foreign suppliers |
| Foreign branches | Setting up operations abroad |
| E-commerce | Selling online globally |

**Impact on UK Businesses:**

| Opportunity | Threat |
|-------------|--------|
| Larger customer base | Competition from abroad |
| Cheaper imports | Pressure on prices |
| Lower production costs abroad | Job losses in UK |
| Access to talent globally | Cultural challenges |

**Barriers to International Trade:**
| Barrier | Description |
|---------|-------------|
| Tariffs | Taxes on imports |
| Quotas | Limits on quantity of imports |
| Regulations | Different standards in countries |
| Language | Communication difficulties |
| Culture | Different consumer preferences |

**Real UK Examples:**
- JCB: Exports to 150+ countries
- Burberry: Global luxury brand
- Dyson: Moved manufacturing to Malaysia
- Tata Steel: Foreign owner of UK plants
`,

  'edexcel-gcse-bus-marketing-decisions': `## Topic 2.2: Making Marketing Decisions

### Product

**Product Life Cycle**
| Stage | Sales | Profit | Competition | Marketing Focus |
|-------|-------|--------|-------------|-----------------|
| Development | None | Negative (R&D costs) | None | Research |
| Introduction | Low, slow growth | Negative or low | Low | Awareness, trial |
| Growth | Rapid increase | Rising | Increasing | Build loyalty |
| Maturity | Peak, then stable | Peak | High | Defend share |
| Decline | Falling | Falling | Declining | Decide future |

**Extension Strategies:**
- Update or improve product
- New packaging
- New advertising campaign
- Target new markets
- Find new uses for product
- Price reductions

**Real Examples:**
- Lucozade: From hospital drink to sports drink
- Mars Bar: Resized, reformulated over time
- Lego: From toys to films, video games, theme parks

**Boston Matrix**
Portfolio planning tool for product range

| | High Market Share | Low Market Share |
|-|-------------------|------------------|
| High Market Growth | Star | Question Mark (Problem Child) |
| Low Market Growth | Cash Cow | Dog |

**Strategy for each:**
- **Stars**: Invest to maintain position
- **Cash Cows**: Milk for profits, minimal investment
- **Question Marks**: Decide to invest heavily or divest
- **Dogs**: Consider withdrawal

**Product Differentiation:**
Making product stand out from competitors through:
- Quality
- Design
- Features
- Brand
- Customer service

### Price

**Pricing Strategies:**
| Strategy | Description | Advantages | Disadvantages |
|----------|-------------|------------|---------------|
| Cost-plus | Add markup to cost | Simple, ensures profit | Ignores market |
| Competitive | Match competitors | Avoids price war | No differentiation |
| Penetration | Low price to enter market | Gains market share | Low profit initially |
| Skimming | High initial price | Maximises early profit | Limits sales |
| Premium | High price for quality | High margins | Limits market size |
| Psychological | £9.99 not £10 | Seems cheaper | Well known trick |

**Factors Influencing Price:**
- Cost of production
- Competition
- Target market
- Product quality
- Brand strength
- Economic conditions
- Business objectives

**Price Changes:**
| Price Increase | Price Decrease |
|----------------|----------------|
| Risk losing customers | Increase volume |
| Higher profit per unit | Lower profit per unit |
| Signal quality | May signal lower quality |
| Works if inelastic demand | Works if elastic demand |

### Promotion

**Elements of the Promotional Mix:**
| Method | Description | Best For |
|--------|-------------|----------|
| Advertising | Paid messages in media | Mass awareness |
| Sales promotion | Short-term incentives | Quick sales boost |
| Personal selling | Face-to-face selling | High-value, complex products |
| Public relations | Managing reputation | Credibility |
| Direct marketing | Targeted to individuals | Known customers |
| Sponsorship | Supporting events/teams | Brand association |

**Advertising Media:**
| Medium | Advantages | Disadvantages |
|--------|------------|---------------|
| TV | Wide reach, visual impact | Very expensive |
| Radio | Targeted, relatively cheap | Audio only |
| Newspapers | Detailed information | Declining readership |
| Social media | Cheap, targeted, viral | Hard to control |
| Online | Targeted, measurable | Ad blockers, competition |

**Social Media Marketing:**
Platforms: Instagram, TikTok, Facebook, YouTube, X (Twitter)

**Benefits:**
- Low cost
- Direct customer interaction
- Viral potential
- Targeted advertising
- Measurable results

**Challenges:**
- Negative comments visible
- Time-consuming
- Constantly changing
- Need engaging content
- Competition for attention

**Influencer Marketing:**
Using social media personalities to promote products

- Growing rapidly in UK
- Can reach specific demographics
- May be expensive
- Risk if influencer has controversy

### Place (Distribution)

**Distribution Channels:**
| Channel | Description | Example |
|---------|-------------|---------|
| Zero-level (Direct) | Producer → Consumer | Farm shops, Apple stores |
| One-level | Producer → Retailer → Consumer | Clothes shops |
| Two-level | Producer → Wholesaler → Retailer → Consumer | Convenience stores |

**Choosing Distribution Channels:**
| Factor | Consideration |
|--------|---------------|
| Product type | Perishable? Fragile? |
| Target market | Where do they shop? |
| Costs | Direct cheaper but more work |
| Control | Direct gives more control |
| Coverage | Retailers provide wider reach |

**E-commerce:**
- 24/7 availability
- Global reach
- Lower overheads
- Data collection
- Convenience

**Multi-channel Distribution:**
Using multiple channels (shops + website + marketplace)

Benefits:
- Reach different customers
- Flexibility for customers
- Reduce risk

Challenges:
- Managing inventory across channels
- Consistent pricing
- Cannibalization

### Integrated Marketing Mix

**The 4Ps Must Work Together:**
- Premium product = premium price + selective place + quality promotion
- Budget product = low price + mass distribution + value-focused promotion
- Innovative product = skimming price + exclusive initially + heavy promotion

**Influences on Marketing Mix:**
| Factor | Effect on Marketing Mix |
|--------|------------------------|
| Target market | All 4Ps tailored to customers |
| Competition | Price, promotion, differentiation |
| Budget | Limits on all areas |
| Technology | New channels, communication |
| Economy | Pricing, promotion intensity |
`,

  'edexcel-gcse-bus-operational-decisions': `## Topic 2.3: Making Operational Decisions

### Business Operations

**Operations**: The activities involved in producing goods or services

**Efficiency**: Getting maximum output from minimum input

### Production Methods

**Job Production**
Making one-off, unique products to customer specification

Examples: Wedding cakes, tailored suits, custom furniture, film production

| Advantages | Disadvantages |
|------------|---------------|
| Meets exact customer needs | Expensive (labour intensive) |
| High quality possible | Slow production |
| Skilled workers motivated | Requires skilled workers |
| Premium prices | Cannot get economies of scale |
| Flexibility | Not suitable for mass market |

**Batch Production**
Making groups of identical items together

Examples: Bakeries, clothing, furniture, brewing

| Advantages | Disadvantages |
|------------|---------------|
| Flexibility (different products) | Storage costs between batches |
| Some economies of scale | Time lost in changeovers |
| Variety for customers | Some repetitive work |
| Can adjust batch size to demand | Work-in-progress tie-up |

**Flow (Mass) Production**
Continuous production of identical products on production line

Examples: Cars, electronics, packaged food, drinks

| Advantages | Disadvantages |
|------------|---------------|
| Very low unit costs | High initial setup costs |
| Consistent quality | Boring for workers |
| Fast production | Inflexible (one product) |
| Economies of scale | Breakdown stops everything |
| Automation possible | Not suitable for customisation |

**Real Examples:**
- Rolls-Royce: Job production (custom cars, 6-9 months each)
- Greggs: Batch production (different products throughout day)
- Coca-Cola: Flow production (2 billion servings per day globally)

### Technology in Production

**Automation**: Using machines to do tasks previously done by humans

**Benefits:**
- Consistent quality
- Works 24/7
- Lower labour costs long-term
- Faster production
- Safer for dangerous tasks

**Challenges:**
- High initial cost
- Staff redundancies
- Needs maintenance
- Less flexibility
- Technical skills needed

### Working with Suppliers

**Procurement**: Finding and purchasing goods and services from suppliers

**Factors When Choosing Suppliers:**
| Factor | Consideration |
|--------|---------------|
| Price | Cost of goods |
| Quality | Meets standards |
| Reliability | Delivers on time |
| Flexibility | Can respond to changes |
| Location | Affects delivery time and cost |
| Payment terms | Credit offered |
| Ethics | Working conditions, environment |

**Just-in-Time (JIT)**
Receiving stock exactly when needed for production

| Advantages | Disadvantages |
|------------|---------------|
| Reduced storage costs | Vulnerable to supply disruption |
| Less capital tied up in stock | Need very reliable suppliers |
| Reduced waste (obsolescence) | May pay more for smaller orders |
| Frees up space | Risk of production stopping |

**Just-in-Case (Buffer Stock)**
Holding safety stock to prevent running out

| Advantages | Disadvantages |
|------------|---------------|
| Protection against delays | Storage costs |
| Can meet unexpected demand | Capital tied up |
| Bulk buying discounts | Risk of obsolescence |
| Not dependent on suppliers | Takes up space |

**Real Example - COVID-19:**
JIT problems exposed when supply chains disrupted. Many businesses now hold more buffer stock.

### Managing Quality

**Quality**: Meeting customer expectations and requirements

**Why Quality Matters:**
- Customer satisfaction
- Fewer returns and complaints
- Better reputation
- Can charge higher prices
- Reduced waste

**Quality Control (QC)**
Checking products at end of production

| Advantages | Disadvantages |
|------------|---------------|
| Catches defects before sale | Defects found late (costly) |
| Simple to implement | Doesn't prevent defects |
| Clear standards | Inspector costs |
| Quick checks | Sampling may miss issues |

**Quality Assurance (QA)**
Building quality into every stage of production

| Advantages | Disadvantages |
|------------|---------------|
| Prevents defects | Training costs |
| All workers responsible | Takes time to implement |
| Continuous improvement | Requires culture change |
| Better quality overall | Initial costs |

**Total Quality Management (TQM)**
Organisation-wide commitment to quality

- Everyone responsible for quality
- Zero defects target
- Continuous improvement (Kaizen)
- Customer focus throughout
- Example: Toyota Production System

### Customer Service

**Good Customer Service:**
- Knowledgeable staff
- Quick response to queries
- Effective complaints handling
- Personalised service
- After-sales support

**Benefits of Good Customer Service:**
- Customer loyalty
- Repeat business
- Positive word-of-mouth
- Competitive advantage
- Can charge premium prices

**Example - John Lewis:**
"Never Knowingly Undersold" policy + excellent customer service = loyal customers
`,

  'edexcel-gcse-bus-financial-decisions': `## Topic 2.4: Making Financial Decisions

### Business Calculations

**Gross Profit**
**Gross Profit = Revenue - Cost of Sales**

| Item | Amount |
|------|--------|
| Revenue | £100,000 |
| Cost of Sales | £60,000 |
| Gross Profit | £40,000 |

**Net Profit**
**Net Profit = Gross Profit - Operating Expenses**

| Item | Amount |
|------|--------|
| Gross Profit | £40,000 |
| Operating Expenses | £25,000 |
| Net Profit | £15,000 |

### Profitability Ratios

**Gross Profit Margin**
**GPM = (Gross Profit / Revenue) × 100**

Example: (£40,000 / £100,000) × 100 = 40%

Interpretation:
- 40p gross profit for every £1 of sales
- Higher = better control of direct costs
- Compare to previous years and competitors

**Net Profit Margin**
**NPM = (Net Profit / Revenue) × 100**

Example: (£15,000 / £100,000) × 100 = 15%

Interpretation:
- 15p net profit for every £1 of sales
- Higher = better overall profitability
- Shows efficiency of operations

**Ways to Improve Profitability:**
| Action | Effect |
|--------|--------|
| Increase prices | Higher revenue per sale |
| Reduce cost of sales | Higher gross profit |
| Cut overheads | Higher net profit |
| Increase sales volume | Spread fixed costs |
| Find cheaper suppliers | Lower cost of sales |

### Average Rate of Return (ARR)

**ARR = (Average Annual Profit / Cost of Investment) × 100**

**Steps to calculate:**
1. Calculate total profit over project life
2. Divide by number of years = average annual profit
3. Divide by initial investment
4. Multiply by 100 for percentage

**Example:**
- Investment: £50,000
- Year 1 profit: £10,000
- Year 2 profit: £15,000
- Year 3 profit: £20,000
- Year 4 profit: £15,000
- Total profit: £60,000
- Average annual profit: £60,000 / 4 = £15,000
- ARR: (£15,000 / £50,000) × 100 = 30%

**Using ARR:**
- Compare to other investments
- Compare to interest rates (opportunity cost)
- Higher ARR = better return
- Usually want ARR > interest rate available

**Limitations of ARR:**
- Ignores timing of cash flows
- Based on profit, not cash
- Ignores project life after calculation period
- Doesn't account for risk

### Sources of Finance for Established Businesses

**Internal Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Retained profit | Profits kept in business | Free, no debt | Limited, reduces dividends |
| Sale of assets | Selling unwanted items | Quick cash | May need assets |

**External Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Bank loans | Borrow fixed amount | Fixed repayments | Interest, security needed |
| Share capital | Sell shares (Ltd/PLC) | No repayment | Dilutes ownership |
| Venture capital | Specialist investor | Expertise, large amounts | Give up equity |
| Crowdfunding | Many small investors | No repayment, builds community | Uncertain, time-consuming |

### Interpreting Financial Data

**Using Data to Make Decisions:**
- Compare to previous years (trend)
- Compare to competitors (benchmarking)
- Compare to targets (performance)
- Consider context (economic conditions)

**Questions to Ask:**
- Is profit margin improving or declining?
- How does this compare to industry average?
- What is causing any changes?
- What actions could improve performance?

### Financial Calculations Summary

| Calculation | Formula |
|-------------|---------|
| Revenue | Selling Price × Quantity |
| Total Costs | Fixed Costs + Variable Costs |
| Profit | Revenue - Total Costs |
| Gross Profit | Revenue - Cost of Sales |
| Net Profit | Gross Profit - Expenses |
| GPM | (Gross Profit / Revenue) × 100 |
| NPM | (Net Profit / Revenue) × 100 |
| ARR | (Avg Annual Profit / Investment) × 100 |
| Contribution | Selling Price - Variable Cost |
| Break-even | Fixed Costs / Contribution |
| Margin of Safety | Actual Sales - Break-even |
| Net Cash Flow | Inflows - Outflows |
| Closing Balance | Opening Balance + Net Cash Flow |
`,

  'edexcel-gcse-bus-human-resource-decisions': `## Topic 2.5: Making Human Resource Decisions

### Organisational Structures

**Key Terms:**
| Term | Definition |
|------|------------|
| Hierarchy | Levels of management in organisation |
| Span of control | Number of people directly managed by one person |
| Chain of command | Line of authority from top to bottom |
| Delegation | Passing authority to subordinate |
| Communication | Flow of information in organisation |

**Tall Structure:**
Many levels of hierarchy, narrow spans of control

| Advantages | Disadvantages |
|------------|---------------|
| Clear progression for staff | Slow decision-making |
| Close supervision | Communication problems |
| Specialised roles | Expensive (many managers) |
| Clear chain of command | Can demotivate staff |

**Flat Structure:**
Few levels of hierarchy, wide spans of control

| Advantages | Disadvantages |
|------------|---------------|
| Fast decisions | Managers overworked |
| Better communication | Less supervision |
| More responsibility for staff | Limited promotion |
| Lower costs | May lose control |

**Centralised vs Decentralised:**
| Centralised | Decentralised |
|-------------|---------------|
| Decisions at head office | Decisions at local level |
| Consistent approach | Flexible approach |
| Strong control | Uses local knowledge |
| May be slower | May be inconsistent |

### Recruitment and Selection

**Why Recruit?**
- Growth (more staff needed)
- Replacement (staff leaving)
- New skills required
- Seasonal demand

**The Recruitment Process:**
1. Identify vacancy
2. Write job description (duties, responsibilities)
3. Write person specification (skills, qualifications)
4. Advertise vacancy
5. Receive applications
6. Shortlist candidates
7. Conduct interviews/assessment
8. Make selection
9. Offer job

**Job Description vs Person Specification:**
| Job Description | Person Specification |
|-----------------|---------------------|
| What the job involves | What the person needs |
| Duties and tasks | Skills and qualities |
| Reporting structure | Qualifications |
| Hours and location | Experience |
| Salary range | Personal attributes |

**Internal vs External Recruitment:**
| Internal | External |
|----------|----------|
| From within organisation | From outside |
| Quicker, cheaper | Fresh ideas |
| Know the candidate | Wider choice |
| Motivates staff | Specific skills |
| Creates another vacancy | Takes longer |

**Selection Methods:**
| Method | Use |
|--------|-----|
| Application form | Initial screening |
| CV/Resume | Background information |
| Interview | Assess personality, skills |
| Aptitude tests | Measure abilities |
| Assessment centre | Multiple activities |
| References | Verify information |

### Training

**Induction Training:**
For new employees - introduction to organisation

Contents: Health and safety, policies, meet team, tour premises, company culture

**On-the-Job Training:**
Learning while doing the job

| Methods | Advantages | Disadvantages |
|---------|------------|---------------|
| Shadowing | Learn real job | Learn bad habits |
| Coaching | Personalised | Time from experienced staff |
| Mentoring | Support and guidance | Not always skill-focused |
| Job rotation | Variety | Takes time |

**Off-the-Job Training:**
Learning away from workplace

| Methods | Advantages | Disadvantages |
|---------|------------|---------------|
| Courses | Expert trainers | Expensive |
| Conferences | Networking | Time away |
| E-learning | Flexible | Self-discipline needed |
| Qualifications | Recognised credentials | Long-term commitment |

**Benefits of Training:**
- Improved productivity
- Better quality
- Reduced errors
- Motivated staff
- Flexible workforce

**Costs of Training:**
- Direct costs (courses, trainers)
- Time away from work
- Staff may leave after training

### Motivation

**Why Motivation Matters:**
- Higher productivity
- Better quality work
- Lower absenteeism
- Lower staff turnover
- Better customer service

### Motivation Theory

**Frederick Taylor (Scientific Management):**
- Workers motivated mainly by money
- Break work into small tasks
- Pay based on output (piece rate)
- Time and motion studies

Criticism: Ignores social needs, boring work

**Abraham Maslow (Hierarchy of Needs):**
| Level | Need | How Business Meets |
|-------|------|-------------------|
| 5. Self-actualisation | Fulfilling potential | Challenging work, creativity |
| 4. Esteem | Recognition, status | Praise, job titles |
| 3. Social | Belonging, friendship | Team work, social events |
| 2. Safety | Security, stability | Job security, safe conditions |
| 1. Physiological | Basic survival | Fair wages |

Must satisfy lower needs before higher needs motivate.

**Frederick Herzberg (Two-Factor Theory):**
| Hygiene Factors | Motivators |
|-----------------|------------|
| Prevent dissatisfaction | Create satisfaction |
| Salary, conditions | Achievement |
| Company policies | Recognition |
| Supervision | Responsibility |
| Relationships | Advancement |
| Job security | Work itself |

Hygiene factors don't motivate but their absence causes dissatisfaction.

### Methods of Motivation

**Financial Methods:**
| Method | Description | Pros | Cons |
|--------|-------------|------|------|
| Salary | Fixed annual payment | Security | No incentive |
| Wages | Hourly/daily rate | Flexibility | Insecurity |
| Bonus | Extra for targets | Incentive | Expected over time |
| Commission | % of sales | Sales incentive | Pushy behaviour |
| Profit sharing | Share of profits | Ownership feeling | May not reflect effort |
| Fringe benefits | Perks (car, health) | Retention | Expensive |

**Non-Financial Methods:**
| Method | Description | How it Motivates |
|--------|-------------|------------------|
| Job rotation | Moving between tasks | Reduces boredom |
| Job enlargement | More tasks at same level | Variety |
| Job enrichment | More challenging tasks | Responsibility, growth |
| Empowerment | Authority to decide | Autonomy, trust |
| Team working | Working in groups | Social needs |
| Flexible working | Choice of hours/location | Work-life balance |

**Real Examples:**
- John Lewis: Profit sharing (employees called "partners")
- Google: Free food, games, 20% time for own projects
- Timpson: Staff empowered to make decisions

### The Importance of Retaining Employees

**Why Retention Matters:**
- Recruitment costs saved
- Training investment protected
- Experience kept
- Customer relationships maintained
- Morale maintained

**How to Improve Retention:**
- Competitive pay
- Good working conditions
- Development opportunities
- Recognition and praise
- Work-life balance
- Positive culture

**Cost of High Staff Turnover:**
- Recruitment costs
- Training costs
- Lost productivity
- Knowledge loss
- Customer impact
`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const EDEXCEL_GCSE_BUS_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: Definition Question (2 marks)
**Question:** Define the term 'break-even'. [2 marks]

**Model Answer:**
Break-even is the level of output where total revenue equals total costs (1), meaning the business makes neither a profit nor a loss (1).

**Mark Scheme:**
- 1 mark: Basic definition (revenue = costs OR no profit/loss)
- 1 mark: Development (explains what this means for the business)

---

### Example 2: Calculation Question (3 marks)
**Question:** Calculate the break-even output.
- Fixed costs: £18,000
- Selling price per unit: £30
- Variable cost per unit: £12

You are advised to show your working. [3 marks]

**Model Answer:**
Contribution per unit = Selling price - Variable cost (1)
= £30 - £12 = £18

Break-even = Fixed costs / Contribution per unit (1)
= £18,000 / £18 = 1,000 units (1)

**Mark Scheme:**
- 1 mark: Calculating contribution correctly (£18)
- 1 mark: Applying correct formula (Fixed costs / Contribution)
- 1 mark: Correct answer with units (1,000 units)
Note: Award 2 marks for correct answer without working shown

---

### Example 3: Explain Question (3 marks)
**Question:** Explain one way in which a business can add value. [3 marks]

**Model Answer:**
A business can add value through branding (1). By building a strong brand identity, customers perceive the product as more desirable and are willing to pay more (1). This allows the business to charge a higher price than the cost of production, creating added value that generates profit (1).

**Mark Scheme:**
- 1 mark: Identifying method (branding, quality, convenience, etc.)
- 1 mark: Explaining how it works
- 1 mark: Explaining impact on added value/business

---

### Example 4: Outline Question (2 marks)
**Question:** Outline one advantage of using social media for promotion. [2 marks]

**Model Answer:**
Social media is relatively cheap compared to traditional advertising (1). This means a small business with a limited marketing budget can still reach a large number of potential customers without spending significant money on TV or print advertising (1).

**Mark Scheme:**
- 1 mark: Identifying advantage (cheap, targeted, wide reach, etc.)
- 1 mark: Developing the point (explaining how/why this helps)

---

### Example 5: Analyse Question (6 marks)
**Question:** Coffee Hub is a small independent coffee shop. The owner is considering offering staff a bonus for meeting sales targets.

Analyse the possible effects of offering staff financial incentives at Coffee Hub. [6 marks]

**Model Answer:**
Offering staff bonuses could have several effects on Coffee Hub.

Firstly, staff may be more motivated to work harder → employees will try to sell more coffee and upsell additional items like cakes → this could increase Coffee Hub's revenue and profits → which helps the owner achieve business objectives.

Additionally, bonuses could help retain staff → if workers feel rewarded for good performance, they are less likely to leave → this reduces recruitment and training costs for Coffee Hub → and means experienced staff who know customers well stay with the business.

However, there could be negative effects. Staff may become pushy with customers → trying to sell extra items to hit targets → which could damage Coffee Hub's reputation for friendly service → and lead to customers choosing competitors like Costa or Starbucks.

Furthermore, if targets are set too high, staff may become demotivated → if bonuses seem unachievable, they won't try → which could actually reduce sales performance.

**Mark Scheme (Levels):**
Level 2 (4-6 marks): Good analysis with developed chains of reasoning. Considers both positive and negative effects. Uses context of Coffee Hub.
Level 1 (1-3 marks): Limited analysis. May only consider one side or lack development. Generic response.

**Indicative Content:**
- Increased motivation and productivity
- Better customer service
- Improved staff retention
- Potential for conflict between staff
- May become pushy/damage customer experience
- Cost of bonuses

---

### Example 6: Justify Question (9 marks)
**Question:** TechStart is a new technology business that needs £50,000 to develop its first product.

Option A: Take out a bank loan
Option B: Seek venture capital investment

Justify which source of finance TechStart should choose. [9 marks]

**Model Answer:**
TechStart needs to carefully consider both options as each has significant implications for the business.

A bank loan (Option A) would provide the full £50,000 as debt finance. The advantage is that TechStart keeps full ownership and control → the founders make all decisions without interference → which allows them to pursue their vision for the product. Loan repayments are predictable → the business can budget for monthly payments → helping manage cash flow.

However, loans require regular repayments from day one → this puts pressure on cash flow when the business may have no revenue yet → which could cause financial difficulties. Banks may also require security or personal guarantees → putting founders' personal assets at risk → which is particularly dangerous for a new tech business that may fail.

Venture capital (Option B) means selling a share of the business to investors. The advantage is that there's no repayment required → investors only get returns if the business succeeds → which reduces financial pressure in early stages. Venture capitalists also bring expertise and contacts → they can help TechStart find customers, recruit talent, and navigate challenges → which is valuable for first-time entrepreneurs.

However, founders must give up equity and control → venture capitalists may demand 30-40% of the business → meaning founders lose out on future profits and must share decision-making. VCs may push for fast growth or early sale → which might not align with founders' long-term vision.

In conclusion, I would recommend TechStart choose Option B (venture capital) because as a new technology business, cash flow will be uncertain and unpredictable. The expertise and contacts from venture capitalists could be crucial for success in a competitive market. Although founders lose some ownership, this is better than the risk of defaulting on loan repayments and potentially losing everything. However, this depends on finding a VC whose vision aligns with the founders' goals.

**Mark Scheme (Levels):**
Level 3 (7-9): Thorough justification of both options. Well-developed analysis with clear chains of reasoning. Clear recommendation with supporting reasons. Good use of context (new tech business).
Level 2 (4-6): Some justification present. Analysis of options but may lack development or balance. Conclusion reached.
Level 1 (1-3): Limited justification. Basic points about finance sources. May not reach conclusion.

---

### Example 7: Evaluate Question (12 marks)
**Question:** BrightStyle is a small clothing business that sells through its website. The owner, Emma, is considering opening a physical retail store in a city centre location.

Evaluate whether BrightStyle should open a retail store. [12 marks]

**Model Answer:**
Emma needs to carefully consider both the advantages and disadvantages of opening a physical store, as this is a major strategic decision for BrightStyle.

Opening a retail store would allow customers to see, touch and try on clothes before buying → this could reduce return rates which are high for online fashion → saving BrightStyle money on returns processing and improving profitability. A physical presence also builds brand awareness → shoppers passing by see the BrightStyle name → which could attract new customers who then also visit the website.

Furthermore, some customers prefer shopping in stores → they want immediate gratification and a shopping experience → so BrightStyle would reach a market segment it currently can't access. Staff can also provide personalised advice → building customer relationships and loyalty → which increases lifetime customer value.

However, a city centre retail store would have significant costs. Rent in prime locations can be £50,000+ per year → plus business rates, utilities, and staffing costs → which would dramatically increase BrightStyle's fixed costs. This raises the break-even point substantially → meaning BrightStyle needs to sell much more to cover costs → which is risky for a small business.

Additionally, Emma may lack retail experience → running an online business requires different skills to managing a physical store → and mistakes could be costly. There's also the trend of consumers shifting to online shopping → high street retailers are closing stores → suggesting demand for physical retail is declining.

In conclusion, I would recommend BrightStyle should NOT open a retail store at this time. As a small business, the financial risk is too high, and the trend towards online shopping suggests physical retail may decline further. Instead, Emma could consider a lower-risk alternative such as a pop-up shop or concession in a department store to test demand. However, if BrightStyle has strong cash reserves and the market research shows clear demand for a physical presence, a smaller store in a less expensive location might be worth considering.

**Mark Scheme (Levels):**
Level 4 (10-12): Thorough evaluation with well-supported judgement. Detailed analysis of both sides with clear chains of reasoning. Effective use of business context (small online clothing business). Balanced consideration with clear, justified conclusion.
Level 3 (7-9): Good evaluation with reasoned conclusion. Good analysis of advantages and disadvantages. Good application to BrightStyle.
Level 2 (4-6): Some evaluation but may lack balance or development. Some analysis present. Some application to context.
Level 1 (1-3): Limited evaluation. Basic points with little development. Generic response.

**Indicative Content:**
Arguments for:
- Customer experience (try before buy)
- Brand awareness
- Reduced returns
- Reach new customers
- Build relationships

Arguments against:
- High fixed costs (rent, rates, staff)
- Increases break-even
- Declining high street
- Different skills needed
- Cash flow impact
`;

// ============================================================================
// EXAM TECHNIQUE
// ============================================================================

const EDEXCEL_GCSE_BUS_EXAM_TECHNIQUE = `## Exam Technique for Edexcel GCSE Business

### Command Word Guidance

| Command Word | What to Do | Example |
|--------------|------------|---------|
| State/Identify | Give a brief, correct answer | "State one source of finance" → "Bank loan" |
| Define | Give the meaning of a term | "Define market segmentation" → "Dividing a market into groups with similar characteristics" |
| Calculate | Work out a numerical answer, show working | Show formula, substitution, answer with units |
| Outline | Identify and briefly develop | Point + one development sentence |
| Explain | Give reasons, show understanding | Point + explanation + development (chain of reasoning) |
| Analyse | Examine in detail, show cause and effect | Multiple chains of reasoning, both sides |
| Justify | Support a choice with evidence | Compare options, reach conclusion with reasons |
| Evaluate | Weigh up and reach a judgement | Balanced argument, clear conclusion |

### Building Chains of Reasoning

**Weak answer:** "Social media is good for marketing."

**Strong answer:** "Using social media allows the business to reach its target market of young consumers → this increases brand awareness at relatively low cost → leading to more website visits and sales → which helps achieve growth objectives while maintaining profitability."

**Chain structure:** Point → How it works → Impact → Further consequence

### Structure for Extended Responses

**6-Mark Analyse Structure:**
- Point 1 with chain of reasoning (advantage/positive)
- Point 2 with chain of reasoning (disadvantage/negative)
- Brief link to context throughout

**9-Mark Justify Structure:**
1. Introduction (optional, 1 sentence)
2. Option A analysis (advantages and disadvantages)
3. Option B analysis (advantages and disadvantages)
4. Clear conclusion stating which option and why

**12-Mark Evaluate Structure:**
1. Brief introduction acknowledging the decision
2. Arguments FOR the proposition (2 developed points)
3. Arguments AGAINST the proposition (2 developed points)
4. Conclusion with:
   - Clear decision
   - Main reason
   - Acknowledgement of conditions/limitations

### Using Context Effectively

**Always:**
- Mention the business name
- Reference specific details from the scenario
- Use any numbers/data provided
- Consider the type/size of business
- Think about the industry

**Example of good context use:**
"BrightStyle should consider that as an online-only business currently, opening a physical store would require Emma to develop new skills in retail management. The high rent costs of a city centre location could significantly increase fixed costs, raising the break-even point."

### Evaluation Phrases

**For analysis:**
- "This means that..."
- "As a result..."
- "This could lead to..."
- "Therefore..."
- "Consequently..."

**For counter-argument:**
- "However..."
- "On the other hand..."
- "Nevertheless..."
- "Although..."
- "Despite this..."

**For conclusion:**
- "On balance..."
- "Overall, I recommend..."
- "The most important factor is..."
- "This depends on..."
- "In conclusion..."

### Common Mistakes to Avoid

**Definition Questions:**
- Too vague ("It's about money")
- Giving an example instead of a definition
- Not developing for 2-mark questions

**Calculation Questions:**
- Not showing working
- Forgetting units (£, %, units)
- Using wrong formula
- Rounding incorrectly

**Explain Questions:**
- Only making one point
- Not developing (just stating facts)
- Not using chains of reasoning
- Being too generic

**Analysis Questions:**
- Being one-sided
- Listing without developing
- Not using context
- Making the same point twice

**Evaluation Questions:**
- Not reaching a conclusion
- Sitting on the fence
- Ignoring the scenario
- Not using case study data
- Conclusion not matching the argument

### Time Management

| Section/Question | Marks | Suggested Time |
|------------------|-------|----------------|
| Definition (1-2) | 1-2 | 1-2 minutes |
| State/Identify | 1-2 | 1-2 minutes |
| Calculate | 2-4 | 3-5 minutes |
| Outline | 2-3 | 2-3 minutes |
| Explain | 3-4 | 4-5 minutes |
| Analyse (6) | 6 | 8-10 minutes |
| Justify (9) | 9 | 12-15 minutes |
| Evaluate (12) | 12 | 18-20 minutes |

**Paper timing:**
- Paper 1: 90 minutes, 90 marks = 1 minute per mark
- Paper 2: 90 minutes, 90 marks = 1 minute per mark
- Leave 5 minutes to check at end
`;

// ============================================================================
// REAL UK BUSINESS EXAMPLES
// ============================================================================

const EDEXCEL_GCSE_BUS_REAL_EXAMPLES = `## Real UK Business Examples

### Small Business Examples

**Sole Traders:**
- Local plumbers, electricians, hairdressers
- Market stall holders
- Freelance designers and consultants
- Food van operators

**Partnerships:**
- Law firms
- Accountancy practices
- GP surgeries
- Dental practices

### Private Limited Companies (Ltd)

| Company | Description | Key Facts |
|---------|-------------|-----------|
| Dyson | Technology (vacuum, fans, hairdryers) | Founded by James Dyson, £6bn+ revenue |
| John Lewis Partnership | Retail | Employee-owned, 80,000+ partners |
| Gymshark | Fitness clothing | Started in garage, now £500m+ revenue |
| Virgin Atlantic | Airline | Part of Virgin Group |
| BrewDog | Craft brewery | Started by two friends, now international |

### Public Limited Companies (PLC)

| Company | Industry | Key Facts |
|---------|----------|-----------|
| Tesco | Retail | UK's largest retailer, 27% market share |
| Marks & Spencer | Retail | Clothing and food, 959 UK stores |
| BP | Oil and gas | One of world's largest energy companies |
| Barclays | Banking | One of UK's "Big Four" banks |
| Next | Retail | Fashion and home, growing online |

### Franchise Examples

| Franchise | Type | UK Facts |
|-----------|------|----------|
| McDonald's | Fast food | 1,400+ UK restaurants, 90% franchised |
| Subway | Fast food | 2,000+ UK locations |
| Costa Coffee | Coffee shops | Now owned by Coca-Cola |
| Domino's | Pizza delivery | 1,200+ UK stores |
| Anytime Fitness | Gyms | 200+ UK locations |

### Social Enterprise Examples

| Enterprise | Description | Social Mission |
|------------|-------------|----------------|
| The Big Issue | Magazine | Employs homeless people as vendors |
| Divine Chocolate | Chocolate | Fairtrade, farmer-owned |
| Elvis & Kresse | Luxury goods | Made from decommissioned fire hoses |
| Toast Ale | Beer | Made from surplus bread |
| Who Gives A Crap | Toilet paper | 50% profits to sanitation charities |

### E-commerce Success Stories

| Company | Description | Key Facts |
|---------|-------------|-----------|
| ASOS | Online fashion | £4bn+ revenue, 23 million customers |
| Boohoo | Fast fashion | Acquired Debenhams, Dorothy Perkins |
| Ocado | Online grocery | Technology platform, smart warehouses |
| THG (The Hut Group) | Online retail | Beauty, nutrition, luxury brands |
| Gymshark | Fitness clothing | Started online, now opening stores |

### Entrepreneur Success Stories

| Entrepreneur | Business | Story |
|--------------|----------|-------|
| James Dyson | Dyson | 5,127 prototypes before success |
| Richard Branson | Virgin Group | Started with student magazine |
| Levi Roots | Reggae Reggae Sauce | Dragons' Den investment, £30m+ brand |
| Michelle Mone | Ultimo | Started lingerie brand from scratch |
| Ben Francis | Gymshark | Started at 19 in parents' garage |
| Nick Jenkins | Moonpig | Online cards, sold for £120m |
| Julie Deane | Cambridge Satchel | Started with £600, now global brand |

### Growth Examples

| Example | Type | Details |
|---------|------|---------|
| Aldi UK expansion | Internal growth | 8 stores (1990) to 1,000+ (2024) |
| Greggs expansion | Internal growth | Opens 100+ new stores per year |
| Tesco buying Booker | Horizontal integration | £3.7bn acquisition |
| Facebook buying WhatsApp | Horizontal integration | $19bn acquisition |
| Amazon buying Whole Foods | Vertical forward | $13.7bn acquisition |

### Marketing Examples

| Company | Marketing Approach | Key Feature |
|---------|-------------------|-------------|
| Apple | Premium pricing | Strong brand, loyal customers |
| Aldi/Lidl | Low pricing | Disrupting supermarket market |
| Innocent Drinks | Ethical marketing | Quirky tone, sustainability focus |
| Red Bull | Content marketing | Extreme sports, events |
| Greggs | Social media | Viral vegan sausage roll launch |

### Operations Examples

| Company | Operations Feature | Details |
|---------|-------------------|---------|
| Toyota | Lean manufacturing | Pioneer of JIT, TQM, Kaizen |
| Amazon | Logistics | Same-day delivery, robotics |
| Rolls-Royce | Job production | Custom cars, months to build |
| Greggs | Batch production | Baked fresh throughout day |
| Coca-Cola | Flow production | Billions of servings globally |

### Motivation Examples

| Company | Approach | How It Works |
|---------|----------|--------------|
| John Lewis | Profit sharing | Employees called "partners", share profits |
| Google | Working environment | Free food, gyms, creative spaces |
| Timpson | Empowerment | Staff make decisions, prison rehabilitation |
| Brewdog | Equity sharing | "Equity Punks" programme for customers |
| Innocent | Culture | Fun workplace, quirky communications |

### Globalisation Examples

| Company | Global Activity | Impact |
|---------|-----------------|--------|
| JCB | Exporting | Exports to 150+ countries |
| Burberry | Global brand | Luxury status worldwide |
| Dyson | Offshoring | Manufacturing moved to Malaysia |
| Nissan Sunderland | Foreign investment | Japanese owner, UK production |
| Costa Coffee | Global expansion | 4,000+ stores worldwide |
`;

// ============================================================================
// KEY CALCULATIONS REFERENCE
// ============================================================================

const EDEXCEL_GCSE_BUS_CALCULATIONS = `## Key Calculations for Edexcel GCSE Business

### Revenue and Costs
| Formula | Calculation |
|---------|-------------|
| Revenue | Selling Price × Quantity Sold |
| Variable Costs | Variable Cost per Unit × Quantity |
| Total Costs | Fixed Costs + Variable Costs |
| Interest | Principal × Rate × Time |

### Profit
| Formula | Calculation |
|---------|-------------|
| Profit | Revenue - Total Costs |
| Gross Profit | Revenue - Cost of Sales |
| Net Profit | Gross Profit - Operating Expenses |

### Profitability Ratios
| Formula | Calculation |
|---------|-------------|
| Gross Profit Margin | (Gross Profit / Revenue) × 100 |
| Net Profit Margin | (Net Profit / Revenue) × 100 |

### Break-even
| Formula | Calculation |
|---------|-------------|
| Contribution per Unit | Selling Price - Variable Cost per Unit |
| Break-even Output | Fixed Costs / Contribution per Unit |
| Margin of Safety | Actual Output - Break-even Output |
| Total Contribution | Contribution per Unit × Quantity Sold |

### Cash Flow
| Formula | Calculation |
|---------|-------------|
| Net Cash Flow | Cash Inflows - Cash Outflows |
| Closing Balance | Opening Balance + Net Cash Flow |

### Investment Appraisal
| Formula | Calculation |
|---------|-------------|
| Average Rate of Return (ARR) | (Average Annual Profit / Cost of Investment) × 100 |

### Market Analysis
| Formula | Calculation |
|---------|-------------|
| Market Share | (Business Sales / Total Market Sales) × 100 |
| Percentage Change | ((New Value - Old Value) / Old Value) × 100 |

### Example Calculations

**Break-even Example:**
- Selling price: £20
- Variable cost: £8
- Fixed costs: £24,000

Contribution = £20 - £8 = £12
Break-even = £24,000 / £12 = 2,000 units

**Gross Profit Margin Example:**
- Revenue: £150,000
- Cost of Sales: £90,000
- Gross Profit: £60,000

GPM = (£60,000 / £150,000) × 100 = 40%

**ARR Example:**
- Investment: £100,000
- Year 1 profit: £20,000
- Year 2 profit: £25,000
- Year 3 profit: £30,000
- Year 4 profit: £25,000

Total profit = £100,000
Average annual profit = £100,000 / 4 = £25,000
ARR = (£25,000 / £100,000) × 100 = 25%

**Net Cash Flow Example:**
| | March |
|---|------|
| Cash sales | £12,000 |
| Credit sales received | £5,000 |
| Total inflows | £17,000 |
| Stock purchases | £6,000 |
| Wages | £4,000 |
| Rent | £2,000 |
| Total outflows | £12,000 |
| Net cash flow | £5,000 |
| Opening balance | £3,000 |
| Closing balance | £8,000 |
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelGCSEBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = getTopicKnowledge(topic.id);

  
  // Add truly random variety system for complete question uniqueness
  const varietyInstructions = getRandomVarietyInstructions();

  return `You are an expert Edexcel GCSE Business examiner creating exam-style questions.

## EDEXCEL BUSINESS STYLE
**Edexcel's Case-Study Practical Approach:** Structured, real-world focused questions with comprehensive case study methodology.
- **Case-study focused approach** - questions heavily centered around detailed business case studies and real company scenarios
- **Practical real-world applications** - emphasis on how business theory applies to actual business situations
- **Structured and comprehensive** - clear, methodical approach to business analysis and evaluation
- **International recognition** - globally recognized business qualification standards through IGCSE heritage
- **Clear and predictable format** - well-defined question structures and marking criteria
- **Strong analytical emphasis** - questions require detailed analysis of business data and case study information

${EDEXCEL_GCSE_BUS_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${EDEXCEL_GCSE_BUS_QUESTION_TEMPLATES}

${EDEXCEL_GCSE_BUS_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_GCSE_BUS_WORKED_EXAMPLES}

${EDEXCEL_GCSE_BUS_EXAM_TECHNIQUE}

${EDEXCEL_GCSE_BUS_REAL_EXAMPLES}

${EDEXCEL_GCSE_BUS_CALCULATIONS}

## Your Task

${varietyInstructions}

Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel GCSE Business specification.

**DO NOT include Economics concepts such as:**
- Macroeconomic theory (GDP, aggregate demand/supply, monetary/fiscal policy)
- Economic diagrams (supply and demand curves, equilibrium analysis)
- Price elasticity of demand/supply calculations
- Market failure, externalities, public goods (economics theory)
- International trade theory, comparative advantage

**In GCSE Business, focus on PRACTICAL BUSINESS applications:**
- "Interest rates" = how they affect business borrowing costs, NOT monetary policy
- "Exchange rates" = impact on importers/exporters, NOT exchange rate theory
- "The economy" = practical effects on businesses, NOT economic models

**For the topic "${topic.name}", test ONLY these subtopics:** ${topic.subtopics.join(', ')}

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds studying Edexcel GCSE Business
2. **Authentic Edexcel Style**: Match real Edexcel paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, state/identify, simple explanations, calculations (1-4 marks)
   - Medium: Analysis questions with chains of reasoning (6 marks)
   - Hard: Justify/Evaluate questions with balanced arguments (9-12 marks)
5. **Use Specific Knowledge**: Include real UK business examples, statistics, and terminology
6. **Context-Based**: For medium and hard questions, create a realistic business scenario

## Response Format
Return JSON with:
- "content": Question text (including any case study information for medium/hard questions)
- "marks": Total marks
- "solution": Model answer demonstrating exam technique with chains of reasoning
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('business')}`;
}

export function getEdexcelGCSEBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getRandomVarietyInstructions();
  const varietyInstructions = getEdexcelBusinessVarietyInstructions();
  const topicKnowledge = getTopicKnowledge(topic.id);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term [concept]" [1-2 marks]
- "State one/two [factors/methods/reasons]" [1-2 marks]
- "Outline one [advantage/disadvantage]" [2 marks]
- "Explain one [benefit/impact/reason]" [3 marks]
- "Calculate [measure]. You are advised to show your working" [2-4 marks]

**Mark Scheme Format:**
- Define: 1-2 marks for clear definition with development
- State/Identify: 1 mark per valid point
- Outline: Identification (1) + Development (1)
- Explain: Point (1) + Explanation (1) + Development (1)
- Calculate: Method (1) + Working (1) + Correct answer with units (1)

**Model Answer should:**
- Give precise business definition or clear identification
- For explains: develop using Point → Explanation → Impact chain
- For calculations: show all working clearly with formula

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an ANALYSIS question requiring chains of reasoning (AO2/AO3a).

**Question Types for Medium:**
- "Analyse [impact/effects/benefits]" [6 marks]
- "Analyse the possible effects of [decision/change]" [6 marks]
- "Analyse the problems [business] might face" [6 marks]
- "Analyse the advantages and disadvantages of [decision]" [6 marks]

**Mark Scheme Format (Levels):**
- Level 2 (4-6): Good analysis with developed chains of reasoning. Clear understanding shown. Uses context effectively.
- Level 1 (1-3): Limited response, some analysis but limited development. May be one-sided or generic.

**Model Answer MUST include:**
- Multiple developed points using chains of reasoning (→)
- Both positive AND negative effects/both sides of argument
- Application to a realistic business context
- Business terminology used correctly
- Clear cause-and-effect relationships

**Create a brief business scenario (3-4 sentences) with:**
- A named fictional UK business
- Specific context (what they do, size, situation)
- Clear issue/decision to analyse

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create an EVALUATION question requiring balanced judgement (AO3b).

**Question Types for Hard:**
- "Justify which option Business X should choose" [9 marks]
- "Evaluate [decision/proposition]" [12 marks]
- "Evaluate whether Business X should [action]" [12 marks]
- "Evaluate the likely impact of [change] on Business X" [12 marks]

**For 9-mark Justify questions, use Level 3 marking:**
- Level 3 (7-9): Thorough justification with well-reasoned conclusion. Clear analysis of both options. Effective use of context.
- Level 2 (4-6): Some justification present but may lack development or balance. Conclusion reached.
- Level 1 (1-3): Limited justification. Basic points. May not reach clear conclusion.

**For 12-mark Evaluate questions, use Level 4 marking:**
- Level 4 (10-12): Thorough evaluation with well-supported judgement. Detailed analysis with clear chains of reasoning. Effective use of case study information. Balanced consideration of alternatives.
- Level 3 (7-9): Good evaluation with reasoned conclusion. Good analysis on both sides. Good application to context.
- Level 2 (4-6): Some evaluation with limited balance. Some analysis. Some application to context.
- Level 1 (1-3): Limited response. Basic description. Little or no evaluation.

**Model Answer MUST include:**
- Arguments FOR (2+ developed points with chains of reasoning using →)
- Arguments AGAINST (2+ developed points with chains of reasoning)
- Clear, justified conclusion that directly answers the question
- Qualification/condition on the recommendation ("This depends on...", "However, if...")
- Use of case study details and data in the argument
- Business terminology throughout

**Create a detailed case study (5-8 sentences) with:**
- A named fictional UK business with realistic name
- Specific numbers (costs, revenue, investment amounts, etc.)
- Clear decision/dilemma to evaluate
- For 9-mark justify: two clear options to compare
- Relevant context (market, competition, current situation)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel GCSE Business question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

${difficultyGuidance[difficulty]}

## Critical Requirements:
1. Use SPECIFIC business terminology from the topic knowledge
2. For medium/hard: Include realistic UK business context with specific details
3. Model answer must demonstrate exam technique with chains of reasoning (use → to show cause and effect)
4. Mark scheme must be detailed and aligned with Edexcel conventions
5. For hard questions: Include balanced evaluation with justified conclusion
6. Use realistic UK business examples and contexts

Return valid JSON:
{
  "content": "question text including any case study",
  "marks": number,
  "solution": "model answer demonstrating exam technique",
  "markScheme": ["point 1 or Level descriptor", "point 2 or Level descriptor", ...],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('business')}`;
}

export function getEdexcelGCSEBusinessContextPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = getTopicKnowledge(topic.id);

  return `Generate an Edexcel GCSE Business question with detailed CONTEXT.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create a question with:
1. Detailed business context (80-120 words) including:
   - Named fictional UK business
   - What they do
   - Current situation
   - Relevant data/figures
   - Clear decision or issue

2. Question requiring use of context:
   - Analyse (6 marks) OR
   - Justify (9 marks) OR
   - Evaluate (12 marks)

**Model answer MUST:**
- Reference the business name throughout
- Use specific details from the context
- Show clear chains of reasoning (→)
- For 9/12 mark questions: balanced evaluation with conclusion

Return valid JSON:
{
  "content": "context paragraph followed by question",
  "marks": number,
  "solution": "detailed model answer using context",
  "markScheme": ["level descriptors or marking points"]
}`;
}

export function getEdexcelGCSEBusinessCalculationPrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel GCSE Business CALCULATION question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Relevant Formulas:
${EDEXCEL_GCSE_BUS_CALCULATIONS}

Create a calculation question with:
1. Brief business context (2-3 sentences)
2. Clear data needed for calculation
3. Specific question with mark allocation

**Question format:**
"Calculate [the measure]. You are advised to show your working." [X marks]

**Model answer MUST show:**
1. Formula used
2. Substitution of values
3. Clear working
4. Final answer with correct units

**Marks allocation:**
- 2 marks: Simple calculation (formula + answer)
- 3 marks: Formula (1) + Working (1) + Answer with units (1)
- 4 marks: More complex calculation requiring multiple steps

Return valid JSON:
{
  "content": "context and calculation question",
  "marks": number (2-4),
  "solution": "step-by-step working and answer",
  "markScheme": ["1 mark for formula/method", "1 mark for working", "1 mark for correct answer with units"]
}`;
}

// Helper function to get topic knowledge
function getTopicKnowledge(topicId: string): string {
  // Check Theme 1 topics
  if (EDEXCEL_GCSE_BUS_THEME1_KNOWLEDGE[topicId]) {
    return EDEXCEL_GCSE_BUS_THEME1_KNOWLEDGE[topicId];
  }
  // Check Theme 2 topics
  if (EDEXCEL_GCSE_BUS_THEME2_KNOWLEDGE[topicId]) {
    return EDEXCEL_GCSE_BUS_THEME2_KNOWLEDGE[topicId];
  }
  // Return general knowledge if no specific topic found
  return `${Object.values(EDEXCEL_GCSE_BUS_THEME1_KNOWLEDGE).join('\n\n')}

${Object.values(EDEXCEL_GCSE_BUS_THEME2_KNOWLEDGE).join('\n\n')}`;
}

// Helper function for business-specific variety
function getEdexcelBusinessVarietyInstructions(): string {
  const businessContexts = [
    'retail (independent shop or small chain)',
    'hospitality (restaurant, cafe, or hotel)',
    'manufacturing (small factory or workshop)',
    'service business (consultancy, cleaning, IT)',
    'technology startup',
    'franchise operation',
    'social enterprise',
    'small local business (family-owned)',
    'growing medium-sized business',
    'online business (e-commerce)'
  ];

  const ukLocations = [
    'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Newcastle',
    'Sheffield', 'Liverpool', 'Nottingham', 'Leicester', 'Cambridge'
  ];

  const randomContext = businessContexts[Math.floor(Math.random() * businessContexts.length)];
  const randomLocation = ukLocations[Math.floor(Math.random() * ukLocations.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Business Context:** Set the question in a ${randomContext} context
**Location:** The business is based in ${randomLocation}

**Question Angle:** Consider approaching from perspective of:
- Business owner/entrepreneur making decisions
- Impact on different stakeholders
- Financial implications
- Operational challenges
- Marketing considerations

**Scenario Type:** Create a scenario involving:
- A new business decision (expansion, investment)
- A problem to solve (cash flow, competition)
- A growth opportunity (new market, new product)
- A competitive challenge (new competitor, changing market)
- An external change (economic, technological, legal)

IMPORTANT: Create a realistic, believable UK business scenario. Use realistic British business names and contexts that a GCSE student would find engaging and relatable.`;
}

/**
 * Business GCSE mark ranges based on Edexcel specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 4 };   // Define, state, identify, outline, simple explain
    case 'medium':
      return { min: 5, max: 6 };   // Analyse, application questions
    case 'hard':
      return { min: 9, max: 12 };  // Evaluate, extended response (justify/recommend)
  }
}
