// AQA GCSE Business (8132) Question Generation Prompts
// Based on analysis of actual AQA past papers and official mark schemes
// Reference: https://www.aqa.org.uk/subjects/business/gcse/business-8132

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
  getVarietyInstructions,
} from './prompts-common';

// ============================================================================
// AQA GCSE BUSINESS SPECIFICATION DETAILS (8132)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_GCSE_BUS_ASSESSMENT_OBJECTIVES = `
## AQA GCSE Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of business concepts, terms and theories | 20-25% |
| **AO2** | Apply knowledge and understanding to a variety of business contexts | 25-30% |
| **AO3** | Analyse and evaluate business information and issues to demonstrate understanding of business behaviour, showing an ability to make informed judgements | 50-55% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Paper 1** | Influences of operations and HRM on business activity | 3.1, 3.2 (part), 3.3, 3.4 | Section A: Multiple choice (10 marks), Section B: Short answer + extended (80 marks) | 90 | 1hr 45m |
| **Paper 2** | Influences of marketing and finance on business activity | 3.1, 3.2 (part), 3.5, 3.6 | Section A: Multiple choice (10 marks), Section B: Short answer + extended (80 marks) | 90 | 1hr 45m |

### Section B Structure
- Short answer questions (1-4 marks)
- Extended response questions (6-9 marks)
- 12-mark extended response with levels of response

### Key Command Words (Official AQA Definitions)
- **State/Identify**: Recall one or more pieces of information (AO1)
- **Define**: Give the precise meaning of a term (AO1)
- **Calculate**: Determine a numerical value showing working (AO2)
- **Give**: Produce an answer from recall (AO1)
- **Explain**: Set out purposes or reasons; make the relationship clear (AO2)
- **Analyse**: Separate information into components; examine in detail (AO3)
- **Evaluate**: Judge from available evidence; consider various viewpoints to reach a conclusion (AO3)
- **Justify**: Support a case with evidence/argument (AO3)
- **Recommend**: Suggest a course of action with reasons (AO3)

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
`;

const AQA_GCSE_BUS_QUESTION_TEMPLATES = `
## Authentic AQA GCSE Business Question Formats (From Past Papers)

### Type 1: Multiple Choice (1 mark)
Format: "Which one of the following [question]? A, B, C, D"
**Real examples:**
- "Which one of the following is an example of a variable cost? A Rent, B Raw materials, C Insurance, D Bank loan interest" [1 mark]
- "Which one of the following describes a sole trader? A A business owned by the government, B A business owned by one person, C A business owned by shareholders, D A business owned by a partnership" [1 mark]
- "Which one of the following best describes market segmentation? A Dividing a market into distinct groups, B Increasing market share, C Reducing competition, D Setting prices" [1 mark]

### Type 2: Definition Questions (1-2 marks)
Format: "What is meant by [business term]?"
**Real examples:**
- "What is meant by 'customer service'?" [1 mark]
- "What is meant by the term 'market share'?" [2 marks]
- "What is meant by 'cash flow'?" [2 marks]
- "What is meant by 'stakeholder'?" [2 marks]
- "What is meant by 'quality assurance'?" [2 marks]
Marking:
- 1 mark: Basic understanding
- 2 marks: Clear, accurate definition

### Type 3: State/Identify Questions (1-2 marks)
Format: "State/Identify one/two [business concept]"
**Real examples:**
- "State one advantage of using batch production" [1 mark]
- "Identify two sources of finance available to a new business" [2 marks]
- "State one reason why a business might use job production" [1 mark]
- "Identify two methods of non-financial motivation" [2 marks]
- "State two functions of the marketing department" [2 marks]

### Type 4: Explanation Questions (3-4 marks)
Format: "Explain [concept/relationship/reason]"
**Real examples:**
- "Explain one reason why a business might use advertising" [3 marks]
- "Explain one advantage to a business of having a motivated workforce" [3 marks]
- "Explain one way in which technology has affected how businesses promote their products" [3 marks]
- "Explain one benefit to a business of improving its customer service" [3 marks]
- "Explain one reason why a business might choose to become a franchise" [3 marks]
Marking:
- 1 mark for identifying a point
- 1 mark for development
- 1 mark for further development or context

### Type 5: Calculation Questions (2-4 marks)
Format: "Calculate [financial measure]. Show your working"
**Real examples:**
- "Calculate the gross profit. Show your working" [2 marks]
- "Calculate the break-even output. Show your working" [3 marks]
- "Calculate the net cash flow for March. Show your working" [2 marks]
- "Calculate the gross profit margin. Show your working" [3 marks]
- "Calculate the total variable costs. Show your working" [2 marks]
Marking:
- 1 mark for correct method/formula
- 1-2 marks for correct working
- 1 mark for correct answer with units

### Type 6: Analysis Questions (6 marks)
Format: "Analyse [business issue/decision/impact]"
**Real examples:**
- "Analyse the impact of an increase in interest rates on a business" [6 marks]
- "Analyse how using quality assurance might affect a business" [6 marks]
- "Analyse the advantages and disadvantages of batch production for a bakery" [6 marks]
- "Analyse the impact of globalisation on UK businesses" [6 marks]
- "Analyse how a business might benefit from using social media marketing" [6 marks]
Marking (Levels):
- Level 3 (5-6): Good analysis with chains of reasoning
- Level 2 (3-4): Some analysis but limited development
- Level 1 (1-2): Limited, mainly descriptive

### Type 7: Evaluation Questions (9 marks)
Format: "Evaluate/Assess/Recommend [business proposition]"
**Real examples:**
- "Evaluate whether Business X should change from sole trader to a private limited company" [9 marks]
- "Assess which source of finance Business X should use. Give reasons for your answer" [9 marks]
- "Evaluate the advantages and disadvantages of using e-commerce for Business X" [9 marks]
- "Assess whether expanding into overseas markets would benefit Business X" [9 marks]
Marking (Levels):
- Level 3 (7-9): Balanced evaluation with reasoned judgement
- Level 2 (4-6): Some evaluation but may be one-sided
- Level 1 (1-3): Limited, mainly descriptive

### Type 8: Extended Evaluation (12 marks)
Format: "Evaluate/Justify/Recommend [strategic decision]"
**Real examples:**
- "Justify which option Business X should choose. Use the information provided to support your answer" [12 marks]
- "Evaluate the decision by Business X to expand into a new market" [12 marks]
- "Recommend whether Business X should use internal or external growth. Give reasons for your answer" [12 marks]
- "Evaluate whether Business X should change its pricing strategy" [12 marks]
Marking (Levels):
- Level 4 (10-12): Thorough evaluation with well-supported judgement
- Level 3 (7-9): Good evaluation with reasoned conclusion
- Level 2 (4-6): Some evaluation, limited balance
- Level 1 (1-3): Limited, mainly descriptive
`;

const AQA_GCSE_BUS_MARK_SCHEME_CONVENTIONS = `
## AQA GCSE Business Mark Scheme Conventions

### Levels-Based Marking
Start at lowest level, then work up to find best fit.
Use indicative content to guide mark within level.

### 12-Mark Extended Response Levels
**Level 4 (10-12 marks):**
- Thorough knowledge and understanding of relevant business concepts
- Detailed analysis with clear chains of reasoning
- Effective evaluation leading to a well-supported judgement
- Consistent application to the business context
- Uses evidence and data from the case study effectively

**Level 3 (7-9 marks):**
- Good knowledge and understanding demonstrated
- Good analysis with some developed reasoning
- Evaluation present with a reasoned conclusion
- Good application to context
- Some use of case study information

**Level 2 (4-6 marks):**
- Some knowledge and understanding
- Some analysis, though may be limited or one-sided
- Limited evaluation, may be assertion-based
- Some application to context
- Limited use of case study

**Level 1 (1-3 marks):**
- Limited knowledge demonstrated
- Little or no analysis
- No meaningful evaluation
- Limited or no application
- Generic response not linked to case study

### 9-Mark Evaluation Levels
**Level 3 (7-9):** Balanced evaluation with judgement
**Level 2 (4-6):** Some evaluation, may lack balance
**Level 1 (1-3):** Limited, mainly descriptive

### 6-Mark Analysis Levels
**Level 3 (5-6):** Good analysis with chains of reasoning
**Level 2 (3-4):** Some analysis, limited development
**Level 1 (1-2):** Limited, mainly knowledge

### Application Requirements
Examiners look for:
- Reference to the specific business or scenario
- Use of data/figures provided in the question
- Industry-appropriate examples
- Recognition of business size and type
- Realistic considerations for the context

### Evaluation Indicators
Mark schemes reward:
- "However..." with counter-argument
- "On the other hand..."
- "This depends on..."
- Consideration of short-term vs long-term
- Reference to stakeholder impact
- Final judgement that answers the question
- Qualification of the conclusion (e.g., "This depends on...")
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE
// ============================================================================

const AQA_GCSE_BUS_TOPIC_KNOWLEDGE: Record<string, string> = {
  'aqa-gcse-bus-business-real-world': `## Business in the Real World Topic Knowledge

### Purpose of Business Activity
- **Business**: An organisation that provides goods or services
- **Goods**: Physical, tangible products (e.g., cars, clothes, food)
- **Services**: Intangible products (e.g., haircuts, banking, transport)
- Businesses aim to satisfy customer wants and needs
- Businesses add value by transforming inputs into outputs worth more than inputs cost

### Adding Value
**Formula:** Selling Price - Cost of Materials = Added Value
**Methods of adding value:**
- Branding (Apple charges premium for brand)
- Quality improvements
- Design and features
- Customer service
- Convenience (location, opening hours)
- Speed of service
**Real example:** Costa Coffee buys coffee beans for £1, sells coffee for £3.50 = £2.50 added value

### Enterprise and Entrepreneurship
**Enterprise**: Taking a risk to set up a business
**Entrepreneur**: Someone who takes the risk of starting a business
**Characteristics of successful entrepreneurs:**
- Risk-taking (willing to invest money)
- Creativity (new ideas, innovation)
- Determination (perseverance)
- Initiative (seeing opportunities)
- Communication skills
- Decision-making ability

**Real Entrepreneur Examples:**
- James Dyson: 5,127 prototypes before successful vacuum
- Sara Blakely (Spanx): Started with $5,000 savings, now worth $1 billion
- Richard Branson: Started Virgin Records, expanded to Virgin Atlantic, Virgin Media
- Levi Roots: Reggae Reggae Sauce, £50,000 Dragons' Den investment

### Factors of Production
| Factor | Definition | Reward |
|--------|------------|--------|
| Land | Natural resources, premises | Rent |
| Labour | Human effort, workers | Wages |
| Capital | Machinery, equipment, money | Interest |
| Enterprise | Risk-taking, organisation | Profit |

### Business Ownership Types

**Sole Trader**
- Owned and run by one person (may have employees)
- Examples: Plumbers, hairdressers, market stalls
- Advantages: Quick to set up, keep all profits, complete control, privacy
- Disadvantages: Unlimited liability, hard to raise finance, workload, limited expertise
- **Unlimited liability**: Personal assets at risk if business fails

**Partnership**
- 2-20 partners share ownership
- Examples: Law firms, accountancies, medical practices
- Need a Deed of Partnership (profit sharing, responsibilities)
- Advantages: Shared workload, more capital, combined expertise
- Disadvantages: Unlimited liability, shared profits, potential disagreements

**Private Limited Company (Ltd)**
- Owned by shareholders, shares sold privately
- Examples: John Lewis Partnership, Virgin Atlantic
- **Limited liability**: Shareholders only lose what they invested
- Advantages: Limited liability, easier to raise capital, business continues if owner dies
- Disadvantages: Profits shared with shareholders, accounts must be filed, more regulations

**Public Limited Company (PLC)**
- Shares traded on Stock Exchange
- Minimum share capital £50,000
- Examples: Tesco, Marks & Spencer, BP, HSBC
- Advantages: Can raise large amounts of capital, increased status
- Disadvantages: Expensive to set up, vulnerable to takeover, public scrutiny of accounts

**Franchise**
- Franchisee buys right to use franchisor's name and systems
- Examples: McDonald's, Subway, Costa Coffee, Domino's
- Franchisee pays: Initial fee + royalties (typically 4-8% of turnover)
- Advantages (franchisee): Proven business model, training, brand recognition
- Disadvantages (franchisee): Ongoing fees, must follow franchisor's rules, limited creativity

**Social Enterprise**
- Businesses with social objectives, profits reinvested
- Examples: The Big Issue, Divine Chocolate, Jamie Oliver's Fifteen
- Advantages: Positive social impact, motivated workforce
- Disadvantages: Limited profit for owners, may struggle to compete

### Business Aims and Objectives

**Financial Objectives:**
- Survival (especially for new businesses)
- Profit maximisation
- Profit satisficing (acceptable profit level)
- Sales growth
- Increased market share

**Non-Financial Objectives:**
- Customer satisfaction
- Employee welfare
- Social objectives (ethical, environmental)
- Personal satisfaction (for owner)

**SMART Objectives:**
- Specific
- Measurable
- Achievable
- Realistic
- Time-bound
Example: "Increase sales by 10% within 12 months"

### Stakeholders

| Stakeholder | Interest | Potential Conflict |
|-------------|----------|-------------------|
| Shareholders/Owners | Profits, dividends, growth | Want cost cuts vs employees want pay rises |
| Employees | Job security, wages, conditions | Want pay rise vs owners want low costs |
| Customers | Quality, value, service | Want low prices vs business wants high prices |
| Suppliers | Prompt payment, regular orders | Business wants credit vs supplier wants quick payment |
| Local Community | Jobs, minimal pollution | Jobs vs environmental impact |
| Government | Tax revenue, employment | Regulations vs business costs |
| Pressure Groups | Environmental/social concerns | Campaign against business practices |

**Stakeholder Conflict Example:**
Tesco closing stores: Shareholders benefit (cost savings), Employees lose (jobs), Local community affected (convenience)

### Business Location

**Factors affecting location:**
- Proximity to customers (retailers need footfall)
- Proximity to suppliers (reduces transport costs)
- Labour supply (availability of skilled workers)
- Infrastructure (transport links, broadband)
- Costs (rent, wages vary by region)
- Government incentives (enterprise zones, grants)

**Real Examples:**
- Nissan in Sunderland: Government grants, skilled labour, port access
- Amazon warehouses: Near motorways, large labour pool
- Tech firms in London: Access to talent, networking, investors
- Call centres in India: Low labour costs, English-speaking workforce

### Business Planning

**Contents of a business plan:**
1. Executive summary
2. Business description
3. Market analysis
4. Marketing strategy
5. Operations plan
6. Financial projections
7. Funding requirements

**Why write a business plan:**
- Helps secure finance from banks/investors
- Forces owner to think through the business
- Sets targets and milestones
- Identifies potential problems early

### Business Growth

**Internal (Organic) Growth**
- Growing using own resources
- Methods: Opening new stores, developing new products, increasing capacity
- Advantages: Less risky, maintains control, sustainable
- Disadvantages: Slow, limited by resources
- Example: Aldi UK - grew from 8 stores (1990) to 900+ stores (2023)

**External (Inorganic) Growth**
- Growing by joining with other businesses
- Types:
  - **Merger**: Two businesses join as equals
  - **Takeover**: One business buys another

**Types of Integration:**
- **Horizontal**: Same industry, same stage (Morrisons buying Safeway)
- **Vertical forward**: Closer to customer (brewery buying pubs)
- **Vertical backward**: Closer to suppliers (supermarket buying farms)
- **Conglomerate**: Unrelated businesses (Virgin: music, airlines, banking)

**Advantages of external growth:**
- Fast growth
- Economies of scale
- Reduced competition
- New markets/products

**Disadvantages of external growth:**
- Expensive
- Culture clash
- May face Competition and Markets Authority (CMA) investigation
- Integration problems

**Real Examples:**
- Facebook buying Instagram (2012) - $1 billion
- Disney buying Pixar (2006) - $7.4 billion
- Kraft buying Cadbury (2010) - £11.5 billion (controversial)`,

  'aqa-gcse-bus-influences': `## Influences on Business Topic Knowledge

### Technology

**E-commerce**
- Buying and selling online
- UK e-commerce sales: £137 billion (2022)
- 30% of all retail sales now online (up from 7% in 2010)

**Benefits of e-commerce:**
- Lower overheads (no physical stores)
- Open 24/7, 365 days
- Wider geographic reach
- Lower prices (pass on savings)
- Customer data collection

**Drawbacks of e-commerce:**
- High competition
- Delivery costs and logistics
- Returns management
- Lack of physical experience
- Website maintenance costs
- Cybersecurity risks

**Real Examples:**
- ASOS: Online-only fashion, revenue £4 billion
- Amazon: Started as bookstore, now sells everything
- Boohoo: Fast fashion, £1.7 billion revenue

**Digital Communication**
- Email, video conferencing, instant messaging
- Social media marketing (Instagram, TikTok, Facebook)
- Customer service via chatbots and live chat
- Remote working technology (Zoom, Teams)

**Benefits:**
- Faster communication
- Reduced travel costs
- Wider reach for marketing
- Better customer engagement

**Drawbacks:**
- Technology costs
- Staff training needed
- Information overload
- Less personal contact
- Digital divide (some customers prefer traditional)

**Payment Systems**
- Contactless payments (90% of card transactions in UK)
- Mobile payments (Apple Pay, Google Pay)
- Online payment gateways (PayPal, Stripe)
- Buy Now Pay Later (Klarna, Clearpay)

### Ethical and Environmental Considerations

**Business Ethics**
- Doing what is morally right, not just legal
- Fair trade practices
- Honest advertising
- Treating suppliers fairly
- Employee welfare

**Environmental Considerations:**
- Carbon footprint reduction
- Sustainable sourcing
- Waste reduction and recycling
- Packaging reduction
- Energy efficiency

**Benefits of ethical behaviour:**
- Improved reputation
- Customer loyalty
- Attracts employees
- Avoids negative publicity

**Costs of ethical behaviour:**
- Higher costs (fair wages, sustainable materials)
- May reduce short-term profits
- Competitive disadvantage if others don't follow

**Real Examples:**
- Patagonia: "Don't buy this jacket" campaign, environmental focus
- Body Shop: Against animal testing, fair trade ingredients
- Nike: Criticised for sweatshop labour, now improved practices
- Primark: Rana Plaza disaster (2013), now improved standards

**Pressure Groups**
- Organisations that campaign to influence business/government
- Examples: Greenpeace, Friends of the Earth, Animal rights groups
- Methods: Boycotts, protests, social media campaigns

### Economic Climate

**Interest Rates**
- Cost of borrowing money
- Set by Bank of England (base rate)
- UK base rate: 5.25% (2023) vs 0.1% (2021)

**Impact of HIGH interest rates:**
- Higher loan repayments for businesses
- Consumers spend less (saving more attractive, mortgages costlier)
- Reduced demand for goods/services
- Lower investment by businesses
- Benefits savers

**Impact of LOW interest rates:**
- Cheaper borrowing
- Consumers spend more
- Increased business investment
- Higher demand
- Bad for savers

**Exchange Rates**
- Value of one currency against another
- £1 = $1.25 (example)

**Strong pound (£1 buys more foreign currency):**
- Imports cheaper
- Exports more expensive
- Good for importers, bad for exporters
- UK holidays abroad cheaper

**Weak pound (£1 buys less foreign currency):**
- Imports more expensive
- Exports cheaper
- Good for exporters, bad for importers
- Attracts foreign tourists

**Real Example:**
After Brexit vote (2016): £ fell 10% against $
- Good for UK exporters (Burberry, Rolls-Royce)
- Bad for importers (higher costs)

**Inflation**
- General rise in price level over time
- Measured by Consumer Price Index (CPI)
- UK inflation target: 2%
- UK inflation reached 11.1% (October 2022)

**Impact of HIGH inflation:**
- Higher costs for businesses
- Workers demand pay rises
- Reduced purchasing power
- Uncertainty makes planning difficult
- May reduce consumer spending

**Unemployment**
- Percentage of workforce without jobs
- UK unemployment rate: ~4% (2023)

**Impact of HIGH unemployment:**
- Reduced consumer spending
- Larger labour pool for businesses
- Downward pressure on wages
- Skills loss in economy

**Impact of LOW unemployment:**
- Higher consumer spending
- Harder to recruit staff
- Upward pressure on wages
- May need to offer better conditions

### Globalisation

**Definition**: Increasing interconnection of world economies

**Causes of globalisation:**
- Improved transport (containerisation)
- Communication technology (internet)
- Trade agreements (EU, WTO)
- Multinational corporations

**Impact on UK businesses:**
- Access to global markets
- Competition from abroad
- Cheaper imports
- Outsourcing opportunities
- Cultural exchange

**Opportunities:**
- Larger customer base
- Lower production costs (offshore manufacturing)
- Access to raw materials
- Economies of scale

**Threats:**
- Competition from low-cost countries
- Pressure on prices
- Complexity of supply chains
- Exchange rate risks

**Real Examples:**
- Apple: Designed in California, manufactured in China
- Dyson: Moved production to Malaysia (lower costs)
- JCB: Exports to 150 countries

### The EU and International Trade

**Imports**: Goods/services bought from other countries
**Exports**: Goods/services sold to other countries
**Balance of Trade**: Exports - Imports (UK has trade deficit)

**Tariffs**: Taxes on imports
**Quotas**: Limits on quantity of imports
**Trade barriers**: Regulations, standards that limit trade

**Brexit Impact:**
- New customs checks (delays, costs)
- Some businesses moved to EU
- Trade agreements with other countries
- Freedom to set own regulations
- Reduced EU migration

### Legislation

**Consumer Protection Laws:**
- Consumer Rights Act 2015: Goods must be of satisfactory quality, fit for purpose, as described
- Right to refund within 30 days
- Right to repair or replacement
- Protection against unfair contract terms

**Employment Laws:**
- National Minimum/Living Wage (£10.42/hour for 23+, April 2023)
- Working Time Regulations (48-hour week max, 28 days paid holiday)
- Equality Act 2010 (no discrimination on age, sex, race, disability)
- Health and Safety at Work Act (safe working conditions)
- Employment Rights Act (contracts, unfair dismissal protection)

**Impact of legislation:**
- Increased costs (higher wages, safety equipment)
- Administrative burden (record keeping)
- Protects employees and consumers
- Level playing field for businesses
- Penalties for non-compliance

### Competitive Environment

**Types of competition:**
- Perfect competition: Many small businesses, identical products (theoretical)
- Monopoly: One dominant seller (regulated in UK)
- Oligopoly: Few large firms dominate (supermarkets, mobile networks)
- Monopolistic competition: Many firms, differentiated products (restaurants)

**Responding to competition:**
- Price competition (price wars, discounts)
- Non-price competition (quality, service, branding)
- Product differentiation
- Niche marketing
- Cost reduction

**Real Examples:**
- Supermarket price wars: Tesco vs Aldi/Lidl
- Smartphone market: Apple vs Samsung
- Airlines: BA vs Ryanair/easyJet`,

  'aqa-gcse-bus-operations': `## Business Operations Topic Knowledge

### Production Methods

**Job Production**
- One-off, unique products made to customer specification
- Examples: Wedding cakes, tailored suits, bridges, film production
- Advantages: High quality, meets exact needs, high prices, motivated workers
- Disadvantages: Labour intensive, slow, expensive, requires skilled workers

**Batch Production**
- Groups of identical items made together
- Examples: Bakeries (batch of bread), furniture, clothing
- Advantages: Flexibility, some economies of scale, less boring than mass production
- Disadvantages: Storage costs between batches, changeover time, some repetition

**Flow (Mass) Production**
- Continuous production line, large quantities of identical products
- Examples: Cars, electronics, food processing
- Advantages: Low unit costs, economies of scale, consistent quality, fast
- Disadvantages: High setup costs, boring for workers, breakdowns stop everything, inflexible

**Real Examples:**
- Rolls-Royce: Job production (custom cars, 6-9 months each)
- Greggs: Batch production (different products throughout day)
- Coca-Cola: Flow production (2 billion servings per day)

### Quality Management

**Quality**: Meeting customer expectations and requirements

**Why quality matters:**
- Customer satisfaction and loyalty
- Fewer returns and complaints
- Better reputation
- Higher prices can be charged
- Reduced waste

**Quality Control (QC)**
- Checking products at end of production
- Inspectors check samples
- Defective products rejected
- Advantages: Simple, catches defects
- Disadvantages: Costly inspectors, defects found late, no root cause fix

**Quality Assurance (QA)**
- Building quality in at every stage
- All workers responsible for quality
- Prevents defects rather than catching them
- Advantages: Fewer defects, motivated workers, continuous improvement
- Disadvantages: Training costs, takes time to implement

**Total Quality Management (TQM)**
- Quality is everyone's responsibility
- Zero defects target
- Continuous improvement (Kaizen)
- Customer focus throughout
- Examples: Toyota, Nissan
- Advantages: Very high quality, reduced waste, motivated staff
- Disadvantages: Expensive, requires cultural change, takes years to implement

**Quality Standards:**
- ISO 9001: International quality management standard
- Kitemark (BSI): British quality mark
- CE Mark: European safety standard

### Supply Chain and Procurement

**Supply Chain**: All stages from raw materials to customer
- Raw materials → Manufacturers → Wholesalers → Retailers → Customers

**Procurement**: Obtaining goods and services from suppliers

**Factors in choosing suppliers:**
- Price
- Quality
- Reliability
- Location
- Payment terms
- Flexibility
- Capacity
- Ethical standards

**Effective supply chain management:**
- Reduces costs
- Improves delivery times
- Ensures quality
- Manages risk
- Builds relationships

**Real Example:**
- Toyota: Works closely with suppliers, JIT delivery, quality standards
- Amazon: 175+ fulfilment centres, same-day delivery

### Logistics and Distribution

**Logistics**: Planning and managing movement of goods

**Methods of distribution:**
- Direct to customer (factory → consumer)
- Through retailers (factory → retailer → consumer)
- Through wholesalers (factory → wholesaler → retailer → consumer)

**Modern logistics:**
- Distribution centres and warehouses
- Last-mile delivery
- Click and collect
- Cross-docking
- Tracking and tracing

### Stock Control

**Types of stock:**
- Raw materials
- Work in progress (WIP)
- Finished goods

**Stock Control Charts:**
- Maximum stock level
- Minimum stock level (buffer/safety stock)
- Re-order level
- Re-order quantity
- Lead time (time between ordering and delivery)

**Just-in-Time (JIT)**
- Stock arrives exactly when needed
- Minimal or zero stock held
- Requires reliable suppliers
- Advantages: Reduced storage costs, less capital tied up, reduced waste
- Disadvantages: Vulnerable to supply disruptions, needs reliable suppliers, no buffer

**Buffer Stock Method**
- Keep safety stock to prevent stockouts
- Advantages: Security against delays, can meet unexpected demand
- Disadvantages: Storage costs, risk of obsolescence, capital tied up

**Real Examples:**
- Toyota: Pioneer of JIT manufacturing
- Supermarkets: Daily deliveries, minimal storage
- COVID-19 impact: JIT failures, supply shortages highlighted risks

### Bar Gate Stock Graph Terminology

| Term | Definition |
|------|------------|
| Maximum stock level | Most stock a business wants to hold (storage capacity) |
| Re-order level | Stock level that triggers a new order |
| Re-order quantity | Amount ordered each time |
| Minimum stock level | Buffer stock, never go below this |
| Lead time | Time between ordering and receiving stock |

**Calculation Example:**
- Buffer stock: 100 units
- Re-order level: 300 units
- Lead time: 5 days
- Daily usage: 40 units
- Re-order level = (Daily usage × Lead time) + Buffer stock
- 300 = (40 × 5) + 100 ✓

### Operations Calculations

**Capacity Utilisation** = (Actual output / Maximum output) × 100
- Example: Factory can produce 1,000 units, produces 800
- Capacity utilisation = (800/1000) × 100 = 80%

**Productivity** = Output / Number of workers
- Example: 500 products made by 10 workers
- Productivity = 500/10 = 50 products per worker

**Unit Cost** = Total costs / Number of units
- Example: Total costs £10,000 for 500 units
- Unit cost = £10,000/500 = £20 per unit`,

  'aqa-gcse-bus-human-resources': `## Human Resources Topic Knowledge

### Organisational Structures

**Key Terms:**
- **Hierarchy**: Levels of management in an organisation
- **Span of control**: Number of subordinates a manager directly controls
- **Chain of command**: Line of authority from top to bottom
- **Delegation**: Passing authority to someone lower in hierarchy

**Tall Structure:**
- Many levels of hierarchy
- Narrow spans of control (few subordinates per manager)
- Advantages: Clear progression, close supervision
- Disadvantages: Slow decision-making, expensive (many managers), poor communication

**Flat Structure:**
- Few levels of hierarchy
- Wide spans of control
- Advantages: Fast decisions, better communication, lower costs
- Disadvantages: Managers overworked, less supervision, limited promotion

**Centralised Organisation:**
- Decisions made at top by senior managers
- Advantages: Consistent decisions, strong control, economies of scale in decision-making
- Disadvantages: Slow, demotivating for staff, ignores local knowledge

**Decentralised Organisation:**
- Decisions made by local managers/staff
- Advantages: Fast decisions, motivated staff, uses local knowledge
- Disadvantages: Inconsistency, loss of control, requires training

**Real Examples:**
- Army: Tall, centralised structure
- Google: Flat, decentralised structure
- McDonald's franchises: Decentralised operations, centralised branding

### Recruitment and Selection

**Internal Recruitment**
- Filling vacancy from existing employees
- Methods: Promotion, internal job board, redeployment
- Advantages: Cheaper, faster, known candidate, motivating for staff
- Disadvantages: Limited choice, creates another vacancy, may cause resentment

**External Recruitment**
- Filling vacancy from outside organisation
- Methods: Job adverts, recruitment agencies, social media (LinkedIn), job fairs
- Advantages: Fresh ideas, wider choice, specific skills
- Disadvantages: Expensive, takes longer, risk of unknown candidate

**Selection Process:**
1. Job analysis
2. Job description (duties, responsibilities)
3. Person specification (skills, qualifications, experience)
4. Advertising
5. Shortlisting
6. Interviews/assessment centres
7. Selection and offer
8. References check

**Job Description vs Person Specification:**
| Job Description | Person Specification |
|-----------------|---------------------|
| What the job involves | What the person needs |
| Duties and tasks | Skills and qualities |
| Reporting structure | Qualifications needed |
| Working hours/location | Experience required |

### Training

**Induction Training**
- For new employees
- Introduction to organisation, health and safety, policies
- Advantages: Helps new staff settle, reduces mistakes, legal compliance
- Disadvantages: Takes time, costs money, may be generic

**On-the-Job Training**
- Training while doing the job
- Methods: Coaching, mentoring, shadowing, job rotation
- Advantages: Cheaper, relevant, immediate application, still productive
- Disadvantages: May learn bad habits, trainer less productive, quality varies

**Off-the-Job Training**
- Training away from workplace
- Methods: Courses, conferences, workshops, e-learning
- Advantages: Expert trainers, no workplace distractions, broader skills
- Disadvantages: Expensive, not always relevant, employee absent

**Benefits of Training:**
- Improved productivity
- Better quality
- More flexible workforce
- Increased motivation
- Reduced accidents

**Costs of Training:**
- Direct costs (courses, trainers)
- Lost production time
- Risk of trained staff leaving

### Motivation Theory

**Why Motivation Matters:**
- Higher productivity
- Better quality work
- Lower absenteeism
- Lower staff turnover
- Better customer service

**Frederick Taylor (Scientific Management)**
- Workers motivated by money
- Piece-rate pay (paid per item produced)
- Division of labour and specialisation
- Time and motion studies
- Criticism: Ignores social needs, boring work, treats workers as machines

**Abraham Maslow (Hierarchy of Needs)**

| Level | Need | How Business Can Meet |
|-------|------|----------------------|
| 5 | Self-actualisation | Challenging work, creativity, promotion |
| 4 | Esteem | Recognition, job title, responsibility |
| 3 | Social | Team working, social events, communication |
| 2 | Safety | Job security, safe conditions, pension |
| 1 | Physiological | Wages to pay for food, shelter |

- Lower needs must be met before higher needs motivate
- Criticism: Not everyone has same needs, hard to measure, not linear

**Frederick Herzberg (Two-Factor Theory)**

| Hygiene Factors (Dissatisfiers) | Motivators (Satisfiers) |
|--------------------------------|------------------------|
| Salary | Achievement |
| Working conditions | Recognition |
| Company policies | Responsibility |
| Relationships with colleagues | Advancement |
| Job security | The work itself |

- Hygiene factors don't motivate but cause dissatisfaction if absent
- Motivators lead to job satisfaction and motivation
- Led to "job enrichment" concept

### Methods of Motivation

**Financial Methods:**
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Salary | Fixed annual payment | Security, easy to administer | No incentive to work harder |
| Wages | Hourly/daily payment | Flexibility | Less security |
| Piece rate | Paid per unit produced | Incentive to produce more | Quality may suffer |
| Commission | % of sales value | Incentive to sell | May be pushy with customers |
| Bonus | Extra payment for targets | Reward good performance | Can become expected |
| Profit sharing | Share of profits | Feel ownership | Profits may not reflect effort |
| Performance-related pay | Pay linked to appraisal | Motivates high performers | Subjective assessment |
| Fringe benefits | Non-cash perks (car, healthcare) | Tax efficient, attracts staff | Expensive, may not suit all |

**Non-Financial Methods:**
| Method | Description | How it motivates |
|--------|-------------|------------------|
| Job rotation | Moving between tasks | Reduces boredom, develops skills |
| Job enlargement | Adding more tasks at same level | Variety, less monotony |
| Job enrichment | Adding more challenging tasks | Responsibility, achievement |
| Empowerment | Giving authority to make decisions | Responsibility, trust |
| Team working | Working in groups | Social needs, belonging |
| Flexible working | Choice of hours/location | Work-life balance |

**Real Examples:**
- John Lewis Partnership: Profit sharing (employees are "partners")
- Google: Free food, flexible working, 20% time for own projects
- Tesco: Share save scheme, bonus for good performance`,

  'aqa-gcse-bus-marketing': `## Marketing Topic Knowledge

### Purpose of Marketing
- Identify customer needs and wants
- Satisfy customer needs profitably
- Anticipate future needs
- Create awareness of products
- Build brand loyalty

### Market Research

**Primary Research (Field Research)**
- Collecting new, first-hand data
- Methods:
  - Questionnaires/surveys
  - Interviews (face-to-face, telephone)
  - Focus groups
  - Observation
  - Test marketing
- Advantages: Specific to needs, up-to-date, relevant
- Disadvantages: Time-consuming, expensive, may be biased

**Secondary Research (Desk Research)**
- Using existing data
- Sources:
  - Internal: Sales records, loyalty card data, customer database
  - External: Government statistics, market research reports (Mintel), competitor websites, newspapers
- Advantages: Cheaper, faster, readily available
- Disadvantages: May be outdated, not specific, may not exist

**Qualitative vs Quantitative Data:**
| Qualitative | Quantitative |
|-------------|--------------|
| Opinions, feelings, reasons | Numbers, statistics |
| "Why" questions | "How many" questions |
| Focus groups, interviews | Surveys, sales data |
| Hard to analyse | Easy to analyse |
| Rich insights | Limited depth |

### Market Segmentation

**Definition**: Dividing a market into groups of customers with similar characteristics

**Segmentation Methods:**
| Type | Examples |
|------|----------|
| Demographic | Age, gender, family size, income |
| Geographic | Region, urban/rural, climate |
| Psychographic | Lifestyle, personality, values |
| Behavioural | Usage rate, brand loyalty, benefits sought |

**Benefits of Segmentation:**
- Better understanding of customers
- Targeted marketing (more effective)
- Meet specific needs
- Identify gaps in market
- Efficient use of marketing budget

**Real Examples:**
- Saga: Targets over-50s (demographic)
- Mountain Warehouse: Targets outdoor enthusiasts (psychographic)
- Fiat 500: Targets urban drivers (geographic/lifestyle)

### Market Targeting and Positioning

**Targeting Strategies:**
- Mass marketing: Same product to whole market (Coca-Cola)
- Niche marketing: Specific segment (Morgan sports cars)
- Differentiated: Different products for different segments (Toyota range)

**Market Positioning:**
- Where product sits in customers' minds relative to competitors
- Often shown on perceptual/positioning map
- Axes might be: Price (low-high) vs Quality (low-high)

### The Marketing Mix (4Ps)

**Product**
- Design, features, quality
- Branding and packaging
- Product range
- After-sales service
- USP (Unique Selling Point)

**Product Life Cycle:**
| Stage | Characteristics | Marketing Strategy |
|-------|-----------------|-------------------|
| Development | No sales, high R&D costs | Market research |
| Introduction | Low sales, high promotion costs | Heavy advertising, introductory pricing |
| Growth | Rising sales, competitors enter | Build brand loyalty, distribution |
| Maturity | Sales peak, competition intense | Defend market share, promotions |
| Decline | Falling sales, falling profits | Decide: withdraw, harvest, or rejuvenate |

**Extension Strategies:**
- New markets (geographic expansion)
- New uses for product
- Update/improve product
- Change packaging
- Change promotion/advertising
- Price adjustments

**Boston Matrix:**
| | High Market Share | Low Market Share |
|-|-------------------|------------------|
| High Market Growth | Star | Question Mark |
| Low Market Growth | Cash Cow | Dog |

- **Star**: Invest to maintain position
- **Cash Cow**: Milk for profits, minimal investment
- **Question Mark**: Decide to invest or divest
- **Dog**: Consider withdrawal

**Real Example (Coca-Cola portfolio):**
- Stars: Monster Energy
- Cash Cows: Coca-Cola Classic
- Question Marks: New flavours
- Dogs: Discontinued products

**Price**

**Pricing Strategies:**
| Strategy | Description | When Used |
|----------|-------------|-----------|
| Cost-plus | Cost + markup percentage | Simple, ensures profit |
| Competitive | Based on competitor prices | Similar products, price-sensitive market |
| Price skimming | High initial price, lower over time | New, innovative products |
| Penetration | Low initial price to gain market share | Entering competitive market |
| Premium | High price to reflect quality | Luxury goods |
| Psychological | £9.99 not £10 | Retail |
| Loss leader | Below cost to attract customers | Supermarkets |
| Price discrimination | Different prices for segments | Airlines, cinemas |

**Factors Affecting Price:**
- Costs (must cover to profit)
- Competition
- Target market
- Brand image
- Product life cycle stage
- Economic conditions

**Place (Distribution)**

**Distribution Channels:**
- Direct: Producer → Consumer (farm shops, websites)
- Retailer: Producer → Retailer → Consumer (most goods)
- Wholesaler: Producer → Wholesaler → Retailer → Consumer (convenience stores)
- Agent: Producer → Agent → Retailer → Consumer (international trade)

**Factors Affecting Distribution:**
- Type of product
- Target market
- Competitors' methods
- Cost considerations
- Level of control needed

**E-commerce Distribution:**
- 24/7 availability
- Global reach
- Lower overheads
- Customer convenience
- Challenge: returns management

**Promotion**

**Promotional Methods:**
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Advertising | Paid media (TV, radio, print, digital) | Wide reach, controlled message | Expensive, may be ignored |
| Sales promotion | Short-term incentives (BOGOF, discounts) | Immediate impact | Can devalue brand |
| Personal selling | Face-to-face selling | Personalised, builds relationships | Expensive, limited reach |
| Public relations | Managing reputation, press releases | Credible, free coverage | Less control |
| Sponsorship | Supporting events/teams | Brand awareness | Expensive, may backfire |
| Social media | Facebook, Instagram, TikTok | Cheap, targeted, viral potential | Negative comments, time-consuming |

**Above the Line**: Advertising to mass audience (TV, radio, billboards)
**Below the Line**: Targeted promotion (direct mail, sponsorship, PR)

### Extended Marketing Mix (7Ps)

For services, add:
- **People**: Customer-facing staff, training, attitudes
- **Process**: How service is delivered, efficiency
- **Physical Evidence**: Tangible aspects (store layout, uniforms, receipts)

### Marketing Calculations

**Market Share** = (Business sales / Total market sales) × 100
Example: Sales £2m in market worth £20m = 10% market share

**Market Growth** = ((New market size - Old market size) / Old market size) × 100
Example: Market grows from £10m to £12m = 20% growth`,

  'aqa-gcse-bus-finance': `## Finance Topic Knowledge

### Sources of Finance

**Internal Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Owner's capital | Owner's own money | No interest, no repayment | Limited amount |
| Retained profit | Profits kept in business | No cost, readily available | Takes time to build, reduces dividends |
| Sale of assets | Selling unwanted items | Quick cash, no repayment | May need assets, may sell at loss |

**External Sources:**

**Short-term (up to 1 year):**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Bank overdraft | Borrow up to agreed limit | Flexible, only pay interest on amount used | High interest, can be called in |
| Trade credit | Delay payment to suppliers | Free credit period | Lose early payment discounts |
| Factoring | Sell debts to factor for instant cash | Immediate cash, factor chases debts | Lose some of debt value (10-15%) |

**Long-term (over 1 year):**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| Bank loan | Fixed amount, fixed repayments | Fixed repayments, can budget | Interest, need security |
| Mortgage | Loan secured on property | Low interest, long repayment | Risk losing property |
| Share capital | Selling shares in company | No repayment, large amounts | Dilutes ownership |
| Venture capital | Investment from specialists | Large amounts, expertise | Give up equity and control |
| Crowdfunding | Many small investors online | No repayment, builds community | Need strong pitch, not guaranteed |
| Government grants | Money from government | Free, no repayment | Competitive, conditions attached |
| Leasing | Rent equipment instead of buying | Spread costs, latest equipment | Don't own asset, long-term cost higher |

**Choosing Sources of Finance:**
- Amount needed
- Purpose (short/long-term)
- Cost (interest rate)
- Business type (Ltd can issue shares)
- Risk tolerance
- Speed needed

### Revenue, Costs, and Profit

**Revenue (Turnover/Sales)**
**Revenue** = Selling Price × Quantity Sold
Example: 500 items at £20 each = £10,000 revenue

**Costs:**
**Fixed Costs**: Don't change with output (rent, salaries, insurance)
**Variable Costs**: Change with output (raw materials, packaging, wages)
**Total Costs** = Fixed Costs + Variable Costs

**Interest** = (Amount borrowed × Interest rate × Time) / 100

**Profit:**
**Gross Profit** = Revenue - Cost of Sales
**Net Profit** = Gross Profit - Expenses (Operating Costs)
**Profit Margin** = (Profit / Revenue) × 100

**Example:**
- Revenue: £100,000
- Cost of Sales: £60,000
- Gross Profit: £40,000
- Expenses: £25,000
- Net Profit: £15,000

**Ways to Increase Profit:**
- Increase sales (volume or price)
- Reduce costs (fixed or variable)
- Find cheaper suppliers
- Improve efficiency

### Break-Even Analysis

**Break-even point**: Where total revenue = total costs (no profit or loss)

**Break-even output** = Fixed Costs / Contribution per Unit
**Contribution per unit** = Selling Price - Variable Cost per Unit
**Total Contribution** = Contribution per Unit × Number Sold
**Margin of Safety** = Actual Sales - Break-even Sales

**Example:**
- Selling price: £10
- Variable cost: £4
- Fixed costs: £12,000
- Contribution = £10 - £4 = £6
- Break-even = £12,000 / £6 = 2,000 units

**Break-even Chart Components:**
- X-axis: Output (units)
- Y-axis: Revenue/Costs (£)
- Fixed costs line (horizontal)
- Total costs line (starts at fixed costs, slopes up)
- Revenue line (starts at origin, slopes up)
- Break-even point (where TC and TR cross)
- Margin of safety (gap between break-even and actual output)

**Benefits of Break-even Analysis:**
- Shows minimum sales needed
- Helps with pricing decisions
- Supports loan applications
- Shows impact of cost/price changes
- Easy to understand

**Limitations:**
- Assumes all output is sold
- Assumes costs remain constant
- Single product only
- Ignores cash flow timing
- Static analysis

### Cash Flow

**Cash Flow**: Movement of money in and out of business

**Why cash is important:**
- Pay suppliers
- Pay wages
- Pay bills
- A profitable business can still fail if it runs out of cash

**Cash Inflows:**
- Sales revenue
- Loans
- Sale of assets
- Investment
- Interest received

**Cash Outflows:**
- Raw materials
- Wages
- Rent
- Utilities
- Loan repayments
- Equipment

**Cash Flow Forecast:**
| | January | February | March |
|-|---------|----------|-------|
| Cash inflows | £5,000 | £6,000 | £7,000 |
| Cash outflows | £4,500 | £5,500 | £6,000 |
| Net cash flow | £500 | £500 | £1,000 |
| Opening balance | £1,000 | £1,500 | £2,000 |
| Closing balance | £1,500 | £2,000 | £3,000 |

**Net Cash Flow** = Cash Inflows - Cash Outflows
**Closing Balance** = Opening Balance + Net Cash Flow

**Improving Cash Flow:**
- Speed up inflows (credit control, offer discounts for early payment)
- Delay outflows (negotiate longer credit terms)
- Reduce costs
- Increase sales
- Use overdraft facility
- Sell assets
- Sale and leaseback

### Financial Statements

**Income Statement (Profit and Loss Account):**
Shows profitability over a period

| | £ |
|---|---|
| Revenue | 100,000 |
| Less: Cost of Sales | (60,000) |
| **Gross Profit** | 40,000 |
| Less: Operating Expenses | (25,000) |
| **Operating Profit** | 15,000 |
| Less: Interest | (2,000) |
| **Net Profit** | 13,000 |

**Statement of Financial Position (Balance Sheet):**
Snapshot of assets and liabilities at a point in time

| Non-current assets | £ |
|---|---|
| Property | 100,000 |
| Equipment | 50,000 |
| **Total** | 150,000 |
| **Current assets** | |
| Stock | 10,000 |
| Trade receivables | 15,000 |
| Cash | 5,000 |
| **Total** | 30,000 |
| **Current liabilities** | |
| Trade payables | (12,000) |
| Overdraft | (3,000) |
| **Total** | (15,000) |
| **Net current assets** | 15,000 |
| **Total assets less current liabilities** | 165,000 |
| **Non-current liabilities** | |
| Bank loan | (50,000) |
| **Net assets** | 115,000 |
| **Equity** | |
| Share capital | 80,000 |
| Retained profit | 35,000 |
| **Total equity** | 115,000 |

### Financial Ratios

**Profitability Ratios:**

**Gross Profit Margin (GPM)** = (Gross Profit / Revenue) × 100
- Shows profit after cost of sales
- Higher is better
- Industry average varies

**Net Profit Margin (NPM)** = (Net Profit / Revenue) × 100
- Shows profit after all costs
- Higher is better
- Average small business: 5-10%

**Return on Capital Employed (ROCE)** = (Operating Profit / Capital Employed) × 100
- Capital Employed = Total Assets - Current Liabilities
- Measures efficiency of capital use
- Compare to interest rates

**Liquidity Ratios:**

**Current Ratio** = Current Assets / Current Liabilities
- Measures ability to pay short-term debts
- Ideal: 1.5:1 to 2:1
- Too high: money not being used efficiently

**Acid Test (Quick Ratio)** = (Current Assets - Stock) / Current Liabilities
- More stringent than current ratio
- Ideal: around 1:1
- Below 1: may struggle to pay debts

**Average Rate of Stock Turnover** = Cost of Sales / Average Stock
- How many times stock is sold per year
- Higher = faster selling
- Supermarkets: high (fresh food)
- Furniture: low

**Interpreting Ratios:**
- Compare to previous years (trends)
- Compare to competitors
- Compare to industry averages
- Consider the business context
- One ratio doesn't tell whole story

### Finance Calculations Summary

| Formula | Calculation |
|---------|-------------|
| Revenue | Selling Price × Quantity |
| Total Costs | Fixed Costs + Variable Costs |
| Gross Profit | Revenue - Cost of Sales |
| Net Profit | Gross Profit - Expenses |
| Contribution | Selling Price - Variable Cost |
| Break-even | Fixed Costs ÷ Contribution |
| Margin of Safety | Actual Sales - Break-even |
| GPM | (Gross Profit ÷ Revenue) × 100 |
| NPM | (Net Profit ÷ Revenue) × 100 |
| ROCE | (Operating Profit ÷ Capital Employed) × 100 |
| Current Ratio | Current Assets ÷ Current Liabilities |
| Acid Test | (Current Assets - Stock) ÷ Current Liabilities |
| Net Cash Flow | Cash Inflows - Cash Outflows |
| Closing Balance | Opening Balance + Net Cash Flow |`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const AQA_GCSE_BUS_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: Definition Question (2 marks)
**Question:** What is meant by the term 'break-even'? [2 marks]

**Model Answer:**
Break-even is the point where total revenue equals total costs (1), meaning the business makes neither a profit nor a loss (1).

**Mark Scheme:**
- 1 mark: Revenue equals costs/no profit or loss
- 1 mark: Further development (e.g., minimum sales needed to survive)

---

### Example 2: Calculation Question (3 marks)
**Question:** Calculate the break-even output for Business X.
- Fixed costs: £15,000
- Selling price per unit: £25
- Variable cost per unit: £10

Show your working. [3 marks]

**Model Answer:**
Contribution per unit = Selling price - Variable cost (1)
= £25 - £10 = £15

Break-even = Fixed costs / Contribution per unit (1)
= £15,000 / £15 = 1,000 units (1)

**Mark Scheme:**
- 1 mark: Calculating contribution (£15)
- 1 mark: Using correct formula
- 1 mark: Correct answer (1,000 units)

---

### Example 3: Explain Question (3 marks)
**Question:** Explain one reason why a business might use job production. [3 marks]

**Model Answer:**
A business might use job production because it allows them to meet specific customer requirements (1). This is because each product is made individually to order, so customers can specify exactly what they want in terms of size, colour, or features (1). This means customers are more likely to be satisfied, leading to repeat purchases and positive word-of-mouth, which increases sales (1).

**Mark Scheme:**
- 1 mark: Identifying reason (customisation/specific requirements)
- 1 mark: Development (explaining how job production achieves this)
- 1 mark: Further development (impact on business - customer satisfaction, sales)

---

### Example 4: Analysis Question (6 marks)
**Question:** Analyse the impact of an increase in interest rates on a business. [6 marks]

**Model Answer:**
An increase in interest rates would affect a business in several ways.

Firstly, higher interest rates would increase the cost of borrowing. If a business has loans, the interest payments will increase → this means the business has less profit to reinvest or pay dividends → which could slow down growth or force cost-cutting measures.

Secondly, higher interest rates would affect consumer spending. Consumers with mortgages face higher repayments → they have less disposable income → demand for products decreases → leading to lower sales revenue for businesses.

However, the impact depends on the type of business. A business selling necessities (supermarkets) would be less affected than one selling luxury goods (designer clothing), as consumers cut back on non-essential spending first. Additionally, a business with no debt would be less directly affected by increased borrowing costs.

**Mark Scheme (Levels):**
Level 3 (5-6 marks): Good analysis with developed chains of reasoning. Clear understanding of how interest rates affect costs and demand. May include relevant evaluation of the extent of impact.
Level 2 (3-4 marks): Some analysis. Identifies impacts but limited development. May be one-sided.
Level 1 (1-2 marks): Limited response. Basic identification of one impact with little or no development.

---

### Example 5: Evaluation Question (9 marks)
**Question:** Business X is a sole trader considering becoming a private limited company (Ltd).
Evaluate whether Business X should change its business ownership. [9 marks]

**Model Answer:**
Changing from a sole trader to an Ltd has both advantages and disadvantages that Business X should consider.

One major advantage is limited liability. As a sole trader, the owner's personal assets are at risk if the business fails. By becoming an Ltd, shareholders can only lose what they have invested → this protects the owner's house, car, and savings → giving them greater financial security and confidence to take business risks.

Another advantage is the ability to raise more capital. An Ltd can sell shares to family, friends, or other investors → this provides funds for expansion without taking on debt → enabling faster growth. The business could also find it easier to get bank loans, as banks often view Ltd companies as more credible.

However, there are significant disadvantages. Setting up an Ltd involves costs and legal requirements. The business must register with Companies House, file annual accounts, and produce audited financial statements → this is time-consuming and requires professional help → increasing administrative costs.

Additionally, the owner loses complete control. While they may remain the majority shareholder, other shareholders have voting rights and a say in decisions → this could lead to disagreements about the direction of the business → potentially slowing down decision-making.

The business must also file public accounts, reducing privacy. Competitors could access financial information, learning about the company's performance and strategies.

In conclusion, I would recommend Business X becomes an Ltd because the protection of limited liability and improved access to finance outweigh the disadvantages. This is especially true if the business plans to grow, as the costs of registration are one-off while the benefits of limited liability and capital-raising are ongoing. However, the owner should ensure they retain majority shareholding to maintain control over key decisions.

**Mark Scheme (Levels):**
Level 3 (7-9 marks): Balanced evaluation with advantages AND disadvantages. Developed analysis with chains of reasoning. Clear judgement with justification. Good application to business context.
Level 2 (4-6 marks): Some evaluation. May be one-sided or have limited development. Reaches a conclusion but may not be fully justified.
Level 1 (1-3 marks): Limited response. Basic points about Ltd with little or no evaluation. No clear conclusion.

---

### Example 6: 12-Mark Extended Response
**Question:** FastBite is a small restaurant considering two options to increase sales:
Option A: Open for breakfast (requires £10,000 investment)
Option B: Start a delivery service (requires £15,000 investment)

Justify which option FastBite should choose. Use the information provided to support your answer. [12 marks]

**Model Answer:**
FastBite needs to carefully consider both options to determine which would best increase sales while managing risk.

Option A, opening for breakfast, would require a lower investment of £10,000. This means less financial risk and a quicker payback period → the business could recover its investment faster → allowing it to consider other investments sooner. Additionally, a restaurant already has the equipment and staff with the skills to cook and serve food → the main additional costs would be extending opening hours (wages) and buying breakfast ingredients.

Opening for breakfast could attract new customers who might then return for lunch or dinner → building customer loyalty and increasing overall revenue. Many office workers look for convenient breakfast options, and if FastBite is in a business area, this could be a significant market.

However, there may be limited demand for breakfast. Consumer habits show many people eat breakfast at home or skip it entirely. The restaurant would need to promote heavily to change customer behaviour → increasing marketing costs beyond the £10,000 investment.

Option B, starting a delivery service, would cost more at £15,000 but could significantly expand the customer base. Delivery reaches customers who wouldn't otherwise visit the restaurant → this includes those too far away, too busy, or preferring to eat at home → vastly increasing the potential market. During COVID-19, delivery services grew significantly, and many consumers now expect this option.

However, delivery has challenges. FastBite would need to partner with delivery platforms (Deliveroo, Just Eat) that charge 15-30% commission → significantly reducing profit margins. Alternatively, hiring their own delivery drivers adds complexity and cost. Food quality may also suffer during delivery, damaging the restaurant's reputation.

In conclusion, I would recommend FastBite choose Option A (opening for breakfast) because:
1. Lower investment means less financial risk
2. The business can use existing resources more efficiently
3. It maintains control over customer experience and quality

However, this recommendation depends on FastBite's location. If it's in a business district with morning footfall, breakfast is ideal. If it's in a residential area where delivery is more practical, Option B might be better. FastBite should conduct market research on local breakfast demand before making the final decision.

**Mark Scheme (Levels):**
Level 4 (10-12 marks): Thorough knowledge showing understanding of both options. Detailed analysis with clear chains of reasoning. Effective evaluation comparing options with consideration of context. Well-supported judgement that directly answers the question. Consistent use of business context.

Level 3 (7-9 marks): Good knowledge of relevant concepts. Good analysis of both options. Evaluation present with reasoned conclusion. Good application to FastBite's situation.

Level 2 (4-6 marks): Some knowledge shown. Analysis of options but may lack development. Evaluation limited or one-sided. Some application to context.

Level 1 (1-3 marks): Limited knowledge. Basic description of options. Little or no evaluation. Generic response not applied to FastBite.
`;

// ============================================================================
// COMMON MISTAKES AND EXAM TECHNIQUE
// ============================================================================

const AQA_GCSE_BUS_EXAM_TECHNIQUE = `## Common Mistakes and Exam Technique

### Common Mistakes to Avoid

**Definition Questions:**
- Being too vague ("It's about money")
- Not giving a full definition for 2-mark questions
- Giving an example instead of a definition

**Calculation Questions:**
- Not showing working (lose marks even if answer is right)
- Forgetting units (£, %, units)
- Rounding errors
- Using wrong formula

**Explain Questions:**
- Only making one point for 3-4 marks
- Not developing points (Point → Explanation → Impact)
- Repeating the same idea in different words
- Not applying to the business context

**Analysis Questions:**
- Being one-sided (only advantages OR disadvantages)
- Making lists without developing points
- Not using chains of reasoning
- Generic responses not linked to context

**Evaluation Questions:**
- Not reaching a conclusion
- Conclusion not supported by the argument
- Being too balanced without making a judgement
- Ignoring the specific business context
- Not using data/figures from the case study

### Building Chains of Reasoning (Analysis)

**Weak answer:** "Advertising increases sales."

**Strong answer:** "Using social media advertising allows the business to target specific demographics → this means marketing spend is more efficient as it reaches people most likely to buy → leading to increased sales without proportionally increasing costs → which improves profit margins."

### Structure for Extended Responses

**6-Mark Structure:**
1. Point 1 with development (and counter-argument)
2. Point 2 with development (and counter-argument)
3. Brief conclusion if time

**9-Mark Structure:**
1. Introduction (brief context, 1-2 sentences)
2. Arguments FOR (1-2 developed points)
3. Arguments AGAINST (1-2 developed points)
4. Conclusion with judgement and justification

**12-Mark Structure:**
1. Introduction (brief context)
2. Option A analysis (advantages and disadvantages)
3. Option B analysis (advantages and disadvantages)
4. Comparison/Evaluation of options
5. Justified conclusion with qualification

### Key Business Terminology

**Operations:**
Job production, batch production, flow production, quality control, quality assurance, TQM, JIT, buffer stock, lead time, procurement, logistics

**Human Resources:**
Hierarchy, span of control, delegation, motivation, Maslow, Herzberg, Taylor, induction, on-the-job training, empowerment

**Marketing:**
Market segmentation, primary research, secondary research, marketing mix, 4Ps, product life cycle, Boston Matrix, price skimming, penetration pricing, USP

**Finance:**
Fixed costs, variable costs, revenue, gross profit, net profit, break-even, contribution, cash flow, working capital, GPM, NPM, ROCE, liquidity

**Business Structure:**
Sole trader, partnership, Ltd, PLC, franchise, limited liability, unlimited liability, stakeholder, shareholder

**External Influences:**
Interest rates, exchange rates, inflation, unemployment, globalisation, tariffs, legislation, ethics

### Using Case Study Information

**ALWAYS:**
- Reference the specific business name
- Use numbers/data from the case study
- Consider the size and type of business
- Apply concepts to the context

**Example of good application:**
"FastBite should choose Option A because the £10,000 investment is significantly lower than Option B's £15,000. For a small restaurant, this smaller initial outlay reduces risk and allows faster payback."

### Time Management

| Question Type | Marks | Suggested Time |
|---------------|-------|----------------|
| Multiple choice | 1 | 1 minute |
| Definition | 1-2 | 2 minutes |
| State/Identify | 1-2 | 1-2 minutes |
| Explain | 3-4 | 4-5 minutes |
| Calculate | 2-4 | 3-4 minutes |
| Analyse (6) | 6 | 8-10 minutes |
| Evaluate (9) | 9 | 12-15 minutes |
| Extended (12) | 12 | 18-20 minutes |
`;

// ============================================================================
// REAL BUSINESS EXAMPLES
// ============================================================================

const AQA_GCSE_BUS_REAL_EXAMPLES = `## Real Business Examples for Context

### Sole Traders
- Local plumber, electrician, hairdresser
- Market stall holders
- Self-employed consultants

### Partnerships
- Law firms (e.g., Clifford Chance before incorporation)
- Accountancy practices
- Medical practices (GP surgeries)

### Private Limited Companies (Ltd)
- **John Lewis Partnership**: Employee-owned, profit sharing
- **Dyson**: Technology company, moved production to Malaysia
- **Virgin Atlantic**: Part of Virgin Group
- **Sports Direct**: Grew through acquisitions

### Public Limited Companies (PLC)
- **Tesco**: UK's largest retailer, 27% market share
- **Marks & Spencer**: Clothing and food, 959 UK stores
- **BP**: Oil and gas multinational
- **HSBC**: Global banking
- **Unilever**: Consumer goods (Dove, Marmite, Ben & Jerry's)

### Franchises
- **McDonald's**: 90% of UK restaurants are franchises
- **Subway**: Largest franchise by number of outlets
- **Costa Coffee**: Now owned by Coca-Cola
- **Domino's Pizza**: UK franchises generate £1.4bn+ revenue

### Social Enterprises
- **The Big Issue**: Magazine sold by homeless people
- **Divine Chocolate**: Fair trade, farmer-owned
- **Elvis & Kresse**: Luxury goods from fire hoses
- **Jamie Oliver's Fifteen**: Restaurant training young people

### Marketing Examples
- **Apple**: Premium pricing, innovative products, brand loyalty
- **Aldi/Lidl**: Competitive pricing, disrupting supermarket market
- **Nike**: Emotional branding, "Just Do It"
- **Innocent Drinks**: Quirky branding, ethical positioning
- **Red Bull**: Content marketing, extreme sports sponsorship

### Operations Examples
- **Toyota**: Pioneer of JIT, lean manufacturing, TQM
- **Amazon**: Logistics expertise, Prime delivery
- **Rolls-Royce**: Job production, bespoke luxury cars
- **Greggs**: Batch production, freshly baked goods

### Motivation Examples
- **Google**: Free food, flexible working, 20% time
- **John Lewis**: Profit sharing, employees as "partners"
- **Tesco**: Share save scheme, Colleague Clubcard
- **Timpson**: Empowers staff, supports ex-offenders

### Growth Examples
- **Facebook buying Instagram** (2012): Horizontal integration, £1bn
- **Disney buying Pixar** (2006): Horizontal integration, $7.4bn
- **Amazon buying Whole Foods** (2017): Vertical integration, $13.7bn
- **Kraft buying Cadbury** (2010): Controversial takeover, £11.5bn

### Technology/E-commerce Examples
- **ASOS**: Online-only fashion, £4bn revenue
- **Boohoo**: Fast fashion, acquired Debenhams, Dorothy Perkins
- **Ocado**: Online grocery delivery, tech platform
- **Amazon**: From books to everything, same-day delivery

### Ethical Business Examples
- **Patagonia**: Environmental focus, "Don't Buy This Jacket"
- **Body Shop**: Against animal testing, fair trade
- **TOMS**: One for One giving model
- **Ben & Jerry's**: Fair trade, social mission

### Globalisation Examples
- **Apple**: Designed in California, made in China
- **Dyson**: UK company, manufacturing in Malaysia
- **Nike**: Global brand, supply chain concerns
- **Primark**: Low prices, Rana Plaza disaster prompted changes

### Brexit Impact Examples
- **Nissan Sunderland**: Government support to stay in UK
- **JCB**: Export benefits from weak pound
- **Financial services**: Some moved to Dublin/Frankfurt
- **Fishing industry**: Changes to access and exports
`;

// ============================================================================
// ESSAY GUIDANCE
// ============================================================================

const AQA_GCSE_BUS_ESSAY_GUIDANCE = `
## Extended Response Guidance for GCSE Business

### What Examiners Want (12-Mark Questions)

**Level 4 responses show:**
1. Clear understanding of relevant concepts
2. Developed chains of reasoning
3. Balanced consideration of arguments
4. A reasoned judgement based on the evidence
5. Consistent application to the context
6. Effective use of case study data

### Building Chains of Reasoning

**Weak:** "Advertising is good because it attracts customers."

**Strong:** "Using social media advertising allows the business to reach a wider target audience → this increases brand awareness among potential customers → leading to increased sales and market share → this could help the business achieve its objective of growth."

### Structure for Extended Responses

**Introduction:**
- Brief context if needed (1-2 sentences max)

**Arguments For (1-2 paragraphs):**
- Point + explanation + development + context

**Arguments Against (1-2 paragraphs):**
- Counter-point + explanation + development

**Conclusion:**
- Clear judgement answering the question
- Key reason for your decision
- Condition or qualification

### Evaluation Techniques for GCSE

**1. Weighing Up:**
"While the increased costs of quality assurance may reduce short-term profits, the long-term benefits of customer loyalty and reduced waste could outweigh these costs."

**2. Context-Specific:**
"This would depend on the size of the business and its current financial position. A small business may not have the resources to implement TQM effectively."

**3. Stakeholder View:**
"Although shareholders may prefer cost-cutting, employees may be demotivated by job losses, which could reduce productivity."

**4. Short-term vs Long-term:**
"In the short term, Option A offers quicker returns, but Option B could provide more sustainable growth over time."

**5. Qualification:**
"This recommendation assumes that market conditions remain stable. If interest rates rise significantly, the business may need to reconsider."

### Useful Evaluation Phrases

**For analysis:**
- "This means that..."
- "As a result..."
- "This leads to..."
- "Therefore..."
- "Consequently..."

**For counter-argument:**
- "However..."
- "On the other hand..."
- "In contrast..."
- "Nevertheless..."
- "Although..."

**For judgement:**
- "On balance..."
- "Overall, I recommend..."
- "The most important factor is..."
- "This depends on..."
- "Provided that..."

### Common GCSE Mistakes
1. Not using the case study information
2. Only giving one side of the argument
3. Not reaching a clear conclusion
4. Repeating the same point in different words
5. Writing about irrelevant concepts
6. Forgetting to apply to business context
7. Not developing points with chains of reasoning
8. Making assertions without explanation
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAGCSEBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const topicKnowledge = AQA_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert AQA GCSE Business examiner creating exam-style questions.

${AQA_GCSE_BUS_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${AQA_GCSE_BUS_QUESTION_TEMPLATES}

${AQA_GCSE_BUS_MARK_SCHEME_CONVENTIONS}

${AQA_GCSE_BUS_WORKED_EXAMPLES}

${AQA_GCSE_BUS_EXAM_TECHNIQUE}

${AQA_GCSE_BUS_REAL_EXAMPLES}

${AQA_GCSE_BUS_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic AQA Style**: Match real AQA paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, state/identify, simple explanations (1-4 marks)
   - Medium: Analysis questions with chains of reasoning (6 marks)
   - Hard: Evaluation questions with balanced arguments (9-12 marks)
5. **Use Specific Knowledge**: Include real business examples, statistics, and terminology from the topic knowledge provided
6. **Context-Based**: For medium and hard questions, create a realistic business scenario

## Response Format
Return JSON with:
- "content": Question text (including any case study information for medium/hard questions)
- "marks": Total marks
- "solution": Model answer demonstrating exam technique
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('business')}`;
}

export function getAQAGCSEBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getBusinessVarietyInstructions(variety);
  const topicKnowledge = AQA_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "What is meant by [term]?" [1-2 marks]
- "State one [advantage/disadvantage/factor]" [1 mark]
- "Identify two [features/examples]" [2 marks]
- "Explain one [benefit/drawback/reason]" [3 marks]
- "Calculate [measure]. Show your working" [2-3 marks]

**Mark Scheme Format:**
- Definitions: 1-2 marks for clear definition with development
- State/Identify: 1 mark per valid point
- Explain: Point (1) + Development (1) + Further development (1)
- Calculate: Method (1) + Working (1) + Answer with units (1)

**Model Answer should:**
- Give precise business definition or clear identification
- For explains: develop using Point → Explanation → Impact chain
- For calculations: show all working clearly

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an ANALYSIS question requiring chains of reasoning (AO2/AO3).

**Question Types for Medium:**
- "Analyse [impact/benefits/problems]" [6 marks]
- "Analyse how [factor] affects [business aspect]" [6 marks]
- "Analyse the advantages and disadvantages of [decision]" [6 marks]

**Mark Scheme Format (Levels):**
- Level 3 (5-6): Good analysis with developed chains of reasoning. Clear understanding shown. May include evaluation.
- Level 2 (3-4): Some analysis but limited development. May be one-sided.
- Level 1 (1-2): Limited response, mainly knowledge-based, little or no analysis.

**Model Answer MUST include:**
- Multiple developed points using chains of reasoning (→)
- Both advantages AND disadvantages/positives AND negatives
- Application to a realistic business context
- Business terminology used correctly
- Clear cause-and-effect relationships

**For context, create a brief business scenario (2-3 sentences) that sets up the analysis question.**

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create an EVALUATION question requiring balanced judgement (AO3).

**Question Types for Hard:**
- "Evaluate [decision/proposition]" [9 marks]
- "Recommend which [option] Business X should choose" [9-12 marks]
- "Justify [decision]" [12 marks]
- "Assess [impact/strategy]" [9 marks]

**For 9-mark questions, use Level 3 marking:**
- Level 3 (7-9): Balanced evaluation with clear judgement. Well-developed analysis on both sides. Strong application to context. Uses data/figures effectively.
- Level 2 (4-6): Some evaluation present but may be one-sided. Some development of points. Some application to context.
- Level 1 (1-3): Limited response with little evaluation. Basic points with limited development. Generic, not applied to context.

**For 12-mark questions, use Level 4 marking:**
- Level 4 (10-12): Thorough evaluation with well-supported judgement. Detailed analysis with clear chains of reasoning. Effective use of case study information. Balanced consideration of alternatives.
- Level 3 (7-9): Good evaluation with reasoned conclusion. Good analysis of options. Good application to context.
- Level 2 (4-6): Some evaluation with limited balance. Some analysis of options. Some application to context.
- Level 1 (1-3): Limited response. Basic description of options. Little or no evaluation.

**Model Answer MUST include:**
- A realistic case study scenario with specific details (business name, numbers, context)
- Arguments FOR (2+ developed points with chains of reasoning)
- Arguments AGAINST (2+ developed points with chains of reasoning)
- Clear, justified conclusion that directly answers the question
- Qualification/condition on the recommendation ("This depends on...")
- Use of case study data in the argument
- Business terminology throughout

**Create a detailed case study (5-8 sentences) with:**
- A named fictional business
- Specific numbers (costs, revenue, market size, etc.)
- Clear decision/dilemma to evaluate
- For 12-mark: two clear options to compare

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an AQA GCSE Business question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${varietyInstructions}

## Topic Knowledge to Use:
${topicKnowledge}

${difficultyGuidance[difficulty]}

## Critical Requirements:
1. Use SPECIFIC business terminology from the topic knowledge
2. For medium/hard: Include realistic business context with specific details
3. Model answer must demonstrate exam technique with chains of reasoning
4. Mark scheme must be detailed and aligned with AQA conventions
5. For hard questions: Include balanced evaluation with justified conclusion

Return valid JSON:
{
  "content": "question text including any case study",
  "marks": number,
  "solution": "model answer demonstrating exam technique",
  "markScheme": ["point 1 or Level 3 descriptor", "point 2 or Level 2 descriptor", ...],
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('business')}`;
}

export function getAQAGCSEBusinessMCQPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = AQA_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an AQA GCSE Business MULTIPLE CHOICE question.

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

// Helper function for business-specific variety
function getBusinessVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const businessContexts = [
    'retail (shop/supermarket)',
    'hospitality (restaurant/hotel)',
    'manufacturing',
    'service business',
    'technology/startup',
    'franchise',
    'social enterprise',
    'small local business',
    'growing medium-sized business',
    'established large company'
  ];

  const randomContext = businessContexts[Math.floor(Math.random() * businessContexts.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Business Context:** Set the question in a ${randomContext} context

**Question Angle:** Consider approaching from perspective of:
- Business owner/entrepreneur
- Employee
- Customer
- Shareholder
- External stakeholder

**Scenario Type:** Create a scenario involving:
- A new business decision
- A problem to solve
- A growth opportunity
- A competitive challenge
- An external change (economic, technological, legal)

IMPORTANT: Create a realistic, believable scenario that a real GCSE student could engage with. Use realistic British business names and contexts.`;
}

// Helper function for mark ranges
/**
 * Business GCSE mark ranges based on AQA specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 4 };   // Define, state, identify, simple explain
    case 'medium':
      return { min: 5, max: 6 };   // Analyse, application questions
    case 'hard':
      return { min: 9, max: 12 };  // Evaluate, extended response (justify/recommend)
  }
}
