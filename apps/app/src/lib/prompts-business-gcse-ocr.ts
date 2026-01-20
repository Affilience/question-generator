// OCR GCSE Business (J204) Question Generation Prompts
// Based on analysis of actual OCR past papers and official mark schemes
// Reference: https://www.ocr.org.uk/qualifications/gcse/business-j204-from-2017/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import {
  getVarietyParameters,
} from './prompts-common';

// ============================================================================
// OCR GCSE BUSINESS SPECIFICATION DETAILS (J204)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_GCSE_BUS_ASSESSMENT_OBJECTIVES = `
## OCR GCSE Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of business concepts, terms and theories | 25% |
| **AO2** | Apply knowledge and understanding to a range of business contexts | 25% |
| **AO3** | Analyse and evaluate business information and issues to demonstrate understanding of how they affect business behaviour, showing ability to make justified decisions | 50% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Paper 1** | Business 1 – Business Activity, Marketing and People | Topics 1-3 | Case study with short and extended questions | 80 | 1hr 30m |
| **Paper 2** | Business 2 – Operations, Finance and Influences on Business | Topics 4-6 | Case study with short and extended questions | 80 | 1hr 30m |

### Question Types Per Paper
- Short answer questions (1-4 marks)
- Medium response questions (6-8 marks)
- Extended response questions (10-12 marks)

### Key Command Words (Official OCR Definitions)
- **State/Identify**: Make a brief factual statement (AO1)
- **Define**: Give precise meaning of a term (AO1)
- **Calculate**: Determine numerical value with working (AO2)
- **Outline**: Set out the main points (AO1/AO2)
- **Explain**: Set out purposes/reasons; give an account of why/how (AO2)
- **Analyse**: Separate into components; examine in detail (AO3)
- **Evaluate**: Judge from available evidence; consider viewpoints to reach conclusions (AO3)
- **Assess**: Make an informed judgement about value or importance (AO3)
- **Recommend**: Advise on a course of action with justification (AO3)

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

const OCR_GCSE_BUS_QUESTION_TEMPLATES = `
## Authentic OCR GCSE Business Question Formats (From Past Papers)

### Type 1: State/Identify Questions (1-2 marks)
Format: "State/Identify one/two [business concept]"
**Real examples:**
- "State one characteristic of a sole trader" [1 mark]
- "Identify two types of market segmentation" [2 marks]
- "State one method of non-financial motivation" [1 mark]
- "Identify two sources of primary research" [2 marks]
- "State one advantage of batch production" [1 mark]
Marking:
- 1 mark per correct point identified

### Type 2: Define Questions (2 marks)
Format: "Define the term [business concept]"
**Real examples:**
- "Define the term 'break-even'" [2 marks]
- "Define the term 'brand'" [2 marks]
- "Define the term 'cash flow'" [2 marks]
- "Define the term 'enterprise'" [2 marks]
- "Define the term 'market segmentation'" [2 marks]
Marking:
- 1 mark for partial definition
- 2 marks for clear, accurate definition

### Type 3: Calculate Questions (2-4 marks)
Format: "Calculate [measure]. Show your working"
**Real examples:**
- "Calculate the gross profit margin. Show your working" [3 marks]
- "Calculate the break-even output. Show your working" [3 marks]
- "Calculate the net profit. Show your working" [2 marks]
- "Calculate the net cash flow for October. Show your working" [2 marks]
- "Calculate the margin of safety. Show your working" [3 marks]
Marking:
- 1 mark for correct formula/method
- 1-2 marks for correct calculation
- 1 mark for correct answer with units

### Type 4: Outline Questions (2-4 marks)
Format: "Outline one/two [advantage/disadvantage/reason]"
**Real examples:**
- "Outline one advantage of internal recruitment" [2 marks]
- "Outline two reasons why a business might use batch production" [4 marks]
- "Outline one benefit of market research" [2 marks]
- "Outline one disadvantage of becoming a public limited company" [2 marks]
- "Outline two ways a business could motivate its employees" [4 marks]
Marking:
- 1 mark for identification
- 1 mark for development

### Type 5: Explain Questions (4-6 marks)
Format: "Explain [concept/reason/impact]"
**Real examples:**
- "Explain one way in which a business could improve its cash flow" [4 marks]
- "Explain one impact of rising interest rates on a business" [4 marks]
- "Explain why a business might use quality assurance" [6 marks]
- "Explain one benefit of using lean production techniques" [4 marks]
- "Explain why an entrepreneur might choose to become a franchisee" [4 marks]
Marking:
- Identification (1 mark)
- Explanation (1-2 marks)
- Development/context (1-2 marks)

### Type 6: Analyse Questions (6-8 marks)
Format: "Analyse [business issue/decision]"
**Real examples:**
- "Analyse the impact of using e-commerce on Business X" [6 marks]
- "Analyse the advantages of using flow production" [8 marks]
- "Analyse how external factors might affect Business X" [6 marks]
- "Analyse the benefits of using Maslow's hierarchy of needs to motivate workers" [6 marks]
- "Analyse how globalisation might affect a UK manufacturer" [8 marks]
Marking (Levels):
- Level 3 (6-8): Good analysis with developed chains
- Level 2 (3-5): Some analysis with limited development
- Level 1 (1-2): Limited, mainly knowledge

### Type 7: Evaluate/Assess Questions (10-12 marks)
Format: "Evaluate/Assess [business decision/proposition]"
**Real examples:**
- "Assess which method of promotion Business X should use" [10 marks]
- "Evaluate the decision by Business X to expand internationally" [12 marks]
- "Evaluate whether Business X should change to a private limited company" [12 marks]
- "Assess whether Business X should use external sources of finance" [10 marks]
- "Evaluate the advantages and disadvantages of using job production for Business X" [12 marks]
Marking (Levels):
- Level 4 (10-12): Thorough evaluation with well-supported judgement
- Level 3 (7-9): Good evaluation, reasoned conclusion
- Level 2 (4-6): Some evaluation, limited balance
- Level 1 (1-3): Limited, mainly descriptive

### Type 8: Recommend Questions (10-12 marks)
Format: "Recommend which [option] Business X should choose. Justify your answer"
**Real examples:**
- "Recommend which location Business X should choose. Justify your answer" [10 marks]
- "Recommend whether Business X should use internal or external sources of finance. Justify your answer" [12 marks]
- "Recommend which pricing strategy Business X should use. Justify your answer" [10 marks]
- "Recommend whether Business X should change its organisational structure. Justify your answer" [12 marks]
Marking: Same levels as evaluate questions
`;

const OCR_GCSE_BUS_MARK_SCHEME_CONVENTIONS = `
## OCR GCSE Business Mark Scheme Conventions

### Levels-Based Marking Approach
Read whole response to determine overall quality.
Identify best-fit level.
Use indicative content to place within level.

### 12-Mark Extended Response Levels (Official OCR Grid)
**Level 4 (10-12 marks):**
- Thorough knowledge and understanding demonstrated
- Thorough application to the business context
- Detailed analysis with well-developed chains of reasoning
- Balanced evaluation with a well-reasoned, justified conclusion
- Answer is well-structured

**Level 3 (7-9 marks):**
- Good knowledge and understanding
- Good application to context
- Good analysis, though chains may not be fully developed
- Evaluation present with a reasoned conclusion
- Answer is reasonably structured

**Level 2 (4-6 marks):**
- Some knowledge and understanding shown
- Some application, may not be consistent
- Limited analysis, may be one-sided
- Some evaluation but may be assertion-based
- Some structure

**Level 1 (1-3 marks):**
- Limited knowledge
- Little or no application
- Little analysis
- No effective evaluation
- Limited structure

### 8-Mark Analysis Levels
**Level 3 (6-8):** Good analysis with chains
**Level 2 (3-5):** Some analysis, limited development
**Level 1 (1-2):** Limited, mainly knowledge

### 6-Mark Levels
**Level 2 (4-6):** Clear analysis with reasoning
**Level 1 (1-3):** Limited analysis

### Application Requirements
OCR specifically looks for:
- Reference to the case study business
- Use of data/figures from the scenario
- Industry-appropriate points
- Recognition of business circumstances
- Realistic considerations

### Evaluation Indicators
Mark schemes reward:
- Balanced arguments
- "However, it depends on..."
- Consideration of different viewpoints
- Short-term vs long-term perspectives
- Stakeholder impact
- Clear, justified final judgement
- Use of quantitative evidence where appropriate
`;

// ============================================================================
// TOPIC-SPECIFIC KNOWLEDGE - OCR GCSE BUSINESS
// ============================================================================

const OCR_GCSE_BUS_TOPIC_KNOWLEDGE: Record<string, string> = {
  'ocr-gcse-bus-business-activity': `## Topic 1: Business Activity

### Purpose of Business
- **Business**: An organisation that provides goods or services to satisfy customer needs and wants
- **Goods**: Physical, tangible products (e.g., smartphones, clothing, food)
- **Services**: Intangible products (e.g., insurance, banking, education)
- Businesses exist to meet customer needs while achieving their own objectives (profit, growth, survival)

### Enterprise and Entrepreneurship
**Enterprise**: The process of identifying new business opportunities and taking the risk to pursue them
**Entrepreneur**: A person who takes the risk of starting and running a business

**Characteristics of Successful Entrepreneurs:**
- **Risk-taking**: Willing to invest personal savings and time
- **Creativity**: Generating new ideas and innovative solutions
- **Determination**: Perseverance despite setbacks
- **Initiative**: Spotting opportunities others miss
- **Resilience**: Bouncing back from failure
- **Communication skills**: Persuading investors, customers, and employees
- **Confidence**: Belief in their vision
- **Organisational skills**: Managing multiple aspects of a business

**Real UK Entrepreneur Examples:**
- **James Dyson**: Developed 5,127 prototypes before successful bagless vacuum cleaner. Dyson Ltd now worth billions.
- **Karen Brady (West Ham United)**: Became MD of Birmingham City at 23, now successful businesswoman and TV personality
- **Steven Bartlett (Social Chain)**: Founded social media marketing agency at 22, worth over £100 million
- **Emma Bridgewater**: Founded pottery company from scratch, now employs 300+ people in Stoke-on-Trent
- **Levi Roots (Reggae Reggae Sauce)**: Secured £50,000 on Dragons' Den, now multi-million pound brand
- **Sir Richard Branson (Virgin)**: Started Virgin Records, expanded to 400+ companies worldwide

### Why Start a Business?
**Financial Rewards:**
- Potential for unlimited income
- Build asset value (the business itself)
- No ceiling on earnings

**Non-Financial Rewards:**
- Be your own boss (independence)
- Job satisfaction
- Flexible working hours
- Pursue a passion
- Create employment for others

### Risks and Rewards of Enterprise
**Risks:**
- Financial loss (personal savings at stake)
- No guaranteed income
- Long working hours
- Responsibility for employees
- Stress and pressure
- Business failure (50% of new businesses fail within 5 years)

**Rewards:**
- Profit (keep what you earn)
- Capital growth
- Personal satisfaction
- Independence
- Making a difference

### Factors of Production
| Factor | Definition | Reward |
|--------|------------|--------|
| **Land** | Natural resources, raw materials, premises | Rent |
| **Labour** | Human effort, skills, workers | Wages |
| **Capital** | Machinery, equipment, money for investment | Interest |
| **Enterprise** | Risk-taking, organisation, decision-making | Profit |

### Business Ownership Types

**Sole Trader**
- Owned and run by one person (may employ others)
- Most common form of business in UK (3.2 million)
- Examples: Plumbers, hairdressers, window cleaners, market traders
**Advantages:**
- Quick and easy to set up (just inform HMRC)
- Keep all profits after tax
- Complete control over decisions
- Privacy (no public accounts)
- Flexible and adaptable
**Disadvantages:**
- Unlimited liability (personal assets at risk)
- Hard to raise large amounts of finance
- Heavy workload (often long hours)
- Limited expertise (one person's knowledge)
- Continuity risk (business depends on one person)

**Partnership**
- 2-20 partners share ownership
- Common in professions: solicitors, accountants, doctors
- Governed by Partnership Act 1890
- Should have Deed of Partnership covering:
  - Profit sharing ratios
  - Decision-making authority
  - What happens if partner leaves
  - Capital contributions
**Advantages:**
- Shared workload and responsibilities
- More capital available
- Shared expertise and skills
- Easy to set up
- Privacy maintained
**Disadvantages:**
- Unlimited liability for all partners
- Shared profits
- Potential for disagreements
- Partners bound by each other's decisions
- Dissolution if partner dies/leaves (unless specified otherwise)

**Private Limited Company (Ltd)**
- Separate legal entity from owners
- Owned by shareholders
- Shares sold privately (not on stock exchange)
- Run by directors
- Examples: John Lewis Partnership, Dyson, Innocent Drinks
**Advantages:**
- Limited liability (shareholders only lose what they invested)
- Easier to raise capital (sell shares)
- Continuity (business survives beyond owners)
- More credible to suppliers and customers
- Can retain profits for reinvestment
**Disadvantages:**
- More expensive and complex to set up
- Legal requirements (filing accounts at Companies House)
- Less privacy (accounts are public)
- Profits shared with shareholders (dividends)
- More administrative burden

**Public Limited Company (PLC)**
- Shares traded on Stock Exchange
- Minimum share capital £50,000
- Must have at least two shareholders and two directors
- Examples: Tesco (TSCO), Marks & Spencer (MKS), BP, HSBC, Unilever
**Advantages:**
- Can raise very large amounts of capital
- Greater status and credibility
- Easier to acquire other companies
- Shares can be used as incentives
**Disadvantages:**
- Very expensive to set up and maintain
- Strict regulations (listing requirements)
- Vulnerable to hostile takeover
- Pressure from shareholders for short-term profits
- Public scrutiny of all activities

**Franchise**
- Franchisee buys right to use franchisor's brand, systems, and support
- Pays initial franchise fee + ongoing royalties (typically 4-10% of revenue)
- Examples: McDonald's (93% of UK restaurants franchised), Subway, Costa Coffee, Domino's Pizza
**Advantages for Franchisee:**
- Proven business model
- Established brand recognition
- Training and support provided
- Marketing handled centrally
- Lower risk than starting from scratch
**Disadvantages for Franchisee:**
- High initial costs
- Ongoing royalty payments
- Limited creativity (must follow franchisor's rules)
- Dependent on franchisor's reputation
- May need approval for decisions

### Not-for-Profit Organisations

**Social Enterprise**
- Business with social/environmental objectives
- Profits reinvested rather than distributed to shareholders
- Examples: The Big Issue, Divine Chocolate, Cafedirect, Jamie Oliver's Fifteen
**Features:**
- Clear social mission
- Trading to achieve mission
- Reinvests majority of profits
- Often uses triple bottom line (people, planet, profit)

**Mutual and Cooperatives**
- Owned and run by members for their benefit
- Examples: Nationwide Building Society, The Co-operative, John Lewis Partnership
**Types:**
- Consumer cooperatives (owned by customers)
- Worker cooperatives (owned by employees)
- Building societies (owned by members)

### Business Aims and Objectives

**Financial Objectives:**
- **Survival**: Especially for new/struggling businesses
- **Profit maximisation**: Highest possible profit
- **Profit satisficing**: Acceptable profit level
- **Sales growth**: Increase revenue
- **Market share**: Increase proportion of market
- **Return on investment**: Measure of efficiency

**Non-Financial Objectives:**
- **Customer satisfaction**: Quality, service
- **Employee welfare**: Good working conditions, pay
- **Social objectives**: Ethical, environmental
- **Personal satisfaction**: Lifestyle goals

**SMART Objectives:**
- **S**pecific: Clear and well-defined
- **M**easurable: Can track progress
- **A**chievable: Realistic given resources
- **R**elevant: Aligned with overall aims
- **T**ime-bound: Has deadline

**Example:** "Increase market share in the coffee shop market from 8% to 12% within 24 months"

### Business Planning

**Contents of a Business Plan:**
1. Executive summary
2. Business description and objectives
3. Market research and analysis
4. Marketing strategy
5. Operations plan
6. Management team
7. Financial projections (3-5 years)
8. Funding requirements

**Why Write a Business Plan:**
- Secure finance from banks or investors
- Force systematic thinking about the business
- Set targets and milestones
- Identify potential problems early
- Communicate vision to stakeholders

**Limitations of Business Plans:**
- Based on predictions (may be wrong)
- Time-consuming to prepare
- May become outdated quickly
- Can give false sense of security

### Stakeholders

| Stakeholder | Main Interests | Potential Conflict |
|-------------|---------------|-------------------|
| Shareholders/Owners | Profits, dividends, share price growth | May clash with employees over wages |
| Employees | Job security, pay, conditions, development | May want higher wages vs profit |
| Customers | Quality, price, service, choice | Want low prices vs business wants profit |
| Suppliers | Prompt payment, regular orders, fair dealing | Want quick payment vs business wants credit |
| Local Community | Jobs, minimal pollution, contribution | Growth vs environmental impact |
| Government | Tax revenue, employment, economic growth | Regulations vs business costs |
| Banks/Lenders | Interest payments, loan repayment | Risk concerns vs business expansion plans |
| Pressure Groups | Environmental/social concerns | Campaigns may damage reputation |

**Stakeholder Conflict Example:**
When Cadbury was taken over by Kraft in 2010:
- Shareholders benefited (premium price for shares)
- Employees concerned (job losses followed)
- Local community in Bournville worried about future
- Some customers boycotted due to brand concerns`,

  'ocr-gcse-bus-marketing': `## Topic 2: Marketing

### The Role of Marketing
- Identify customer needs and wants
- Satisfy those needs profitably
- Anticipate future needs (predict trends)
- Create awareness of products/services
- Build brand loyalty and reputation
- Gain competitive advantage

### Market Research

**Primary Research (Field Research)**
- Collecting new, first-hand data
- Specific to the business's needs

**Methods:**
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Questionnaires/Surveys** | Written questions (online, post, in-person) | Large samples, quantifiable | Low response rates, bias in questions |
| **Interviews** | Face-to-face or telephone conversations | Detailed insights, can probe | Time-consuming, expensive |
| **Focus Groups** | Small group discussions | Rich qualitative data | May not represent whole market |
| **Observation** | Watching consumer behaviour | Real behaviour, unbiased | Cannot determine reasons |
| **Test Marketing** | Trial in limited area | Tests real market response | Competitors can see and react |

**Secondary Research (Desk Research)**
- Using existing data
**Internal Sources:**
- Sales records and reports
- Loyalty card data (Tesco Clubcard)
- Customer database
- Website analytics
- Previous research

**External Sources:**
- Government statistics (ONS)
- Market research reports (Mintel, Euromonitor)
- Competitor websites and reports
- Trade publications
- Academic research
- Social media analytics

**Qualitative vs Quantitative Data:**
| Qualitative | Quantitative |
|-------------|--------------|
| Opinions, feelings, motivations | Numbers, statistics, measurable |
| "Why" and "how" questions | "How many" and "how much" |
| Interviews, focus groups | Surveys, sales data, web analytics |
| Rich insights, hard to analyse | Easy to analyse, limited depth |

### Market Segmentation

**Definition:** Dividing a market into distinct groups of customers with similar characteristics or needs

**Segmentation Methods:**
| Type | Examples | UK Business Examples |
|------|----------|---------------------|
| **Demographic** | Age, gender, income, occupation, family size | Saga (over 50s), Claire's (young females) |
| **Geographic** | Region, urban/rural, climate, country | London Electricity, Scottish Power |
| **Psychographic** | Lifestyle, personality, values, attitudes | Whole Foods (health-conscious), Harley-Davidson |
| **Behavioural** | Usage rate, brand loyalty, benefits sought | Nectar card targeting, Amazon recommendations |

**Benefits of Segmentation:**
- Better understanding of customers
- More targeted, effective marketing
- Identify gaps in the market
- Efficient use of marketing budget
- Develop products to meet specific needs
- Higher customer satisfaction

**Real Example - Supermarket Segmentation:**
- Waitrose: ABC1, premium, quality-focused
- Aldi/Lidl: Price-conscious, value-seekers
- Sainsbury's: Middle market, quality and value
- Iceland: Convenience, frozen food specialists

### Marketing Mix - Product

**Product:** Goods or services offered to customers

**Key Product Decisions:**
- Design and features
- Quality level
- Branding and packaging
- Product range/portfolio
- After-sales service
- Unique Selling Point (USP)

**The Product Life Cycle:**
| Stage | Characteristics | Marketing Strategy |
|-------|-----------------|-------------------|
| **Development** | No sales, high R&D costs, negative cash flow | Market research, prototyping |
| **Introduction** | Low sales, losses likely, building awareness | Heavy promotion, selective distribution |
| **Growth** | Rapid sales growth, first profits, competitors enter | Build brand loyalty, widen distribution |
| **Maturity** | Sales peak, profits stabilise, market saturated | Defend share, promotions, differentiate |
| **Decline** | Falling sales and profits | Decide: withdraw, harvest, or extend |

**Extension Strategies:**
- Find new markets (geographic expansion)
- Find new uses for the product
- Update or improve the product
- Change packaging or appearance
- New promotional campaigns
- Price reductions
- Target new market segments

**Example:** Lucozade - originally a recovery drink for illness, repositioned as sports energy drink

**Boston Matrix (Product Portfolio Analysis):**
|  | High Market Share | Low Market Share |
|--|-------------------|------------------|
| **High Growth** | STAR (invest heavily) | QUESTION MARK (invest or divest?) |
| **Low Growth** | CASH COW (milk for profits) | DOG (consider withdrawal) |

**Real Examples (Coca-Cola portfolio):**
- Stars: Costa Coffee, Monster Energy
- Cash Cows: Coca-Cola Classic, Fanta
- Question Marks: New flavour variants
- Dogs: Discontinued products like Tab Clear

### Marketing Mix - Price

**Pricing Strategies:**
| Strategy | Description | When Used |
|----------|-------------|-----------|
| **Cost-plus** | Add profit margin to costs | Simple, ensures profit |
| **Competitive** | Match or undercut competitors | Commodity markets, price-sensitive |
| **Skimming** | High initial price, reduce over time | New technology, innovative products |
| **Penetration** | Low price to gain market share | Entering established markets |
| **Premium** | High price to reflect exclusivity | Luxury brands |
| **Psychological** | £9.99 instead of £10 | Retail, impulse purchases |
| **Loss Leader** | Below cost to attract customers | Supermarkets (bread, milk) |
| **Dynamic** | Prices change based on demand | Airlines, hotels, Uber |

**Factors Affecting Pricing:**
- Costs of production
- Competitor prices
- Target market and positioning
- Brand image
- Stage in product life cycle
- Economic conditions
- Business objectives

### Marketing Mix - Place (Distribution)

**Distribution Channels:**
1. **Direct:** Producer → Consumer (factory shops, websites, farmers markets)
2. **Retailer:** Producer → Retailer → Consumer (most consumer goods)
3. **Wholesaler:** Producer → Wholesaler → Retailer → Consumer (convenience stores)
4. **Agent:** Producer → Agent → Retailer → Consumer (international trade)

**E-commerce:**
- UK e-commerce sales: Over £180 billion annually
- 30%+ of retail sales now online
- Benefits: 24/7, global reach, lower overheads, data collection
- Challenges: Delivery costs, returns, competition, website costs

**Multi-channel Distribution:**
- Using multiple channels simultaneously
- Click and collect (order online, collect in store)
- Example: Argos - stores, website, mobile app, catalogues

### Marketing Mix - Promotion

**Promotional Methods:**
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Advertising** | Paid media (TV, radio, digital, print) | Wide reach, controlled message | Expensive, may be ignored |
| **Sales Promotion** | Short-term incentives (BOGOF, discounts) | Immediate impact, boosts sales | Can devalue brand |
| **Personal Selling** | Face-to-face selling | Personalised, relationships | Expensive, limited reach |
| **Public Relations** | Managing reputation, press releases | Credible, free coverage | Less control over message |
| **Sponsorship** | Supporting events/teams | Brand awareness, association | Expensive, may backfire |
| **Social Media** | Facebook, Instagram, TikTok, Twitter | Cheap, viral potential, targeting | Time-consuming, negative comments |
| **Direct Marketing** | Email, post, text directly to customers | Targeted, measurable | May be seen as spam |

**Above the Line (ATL):** Mass media advertising
**Below the Line (BTL):** Targeted, direct methods

**Digital Marketing:**
- Search engine optimisation (SEO)
- Pay-per-click advertising (PPC)
- Social media marketing
- Content marketing
- Influencer marketing
- Email marketing

**Real Example - Greggs Marketing:**
- Vegan sausage roll launch: Massive social media buzz
- Controversial advertising: Generated free PR
- Loyalty app: Direct relationship with customers
- Store locations: Strategic high-street presence`,

  'ocr-gcse-bus-people': `## Topic 3: People

### Organisational Structures

**Key Terms:**
- **Hierarchy:** Levels of authority within an organisation
- **Span of Control:** Number of subordinates directly managed by one person
- **Chain of Command:** Line of authority from top to bottom
- **Delegation:** Passing authority to someone lower in the hierarchy
- **Empowerment:** Giving employees authority to make decisions

**Tall Structure:**
- Many levels of hierarchy
- Narrow spans of control
- Advantages: Clear progression, close supervision, specialisation
- Disadvantages: Slow decisions, expensive (many managers), poor communication

**Flat Structure:**
- Few levels of hierarchy
- Wide spans of control
- Advantages: Fast decisions, better communication, lower costs, empowerment
- Disadvantages: Managers overworked, less supervision, limited promotion opportunities

**Centralised Organisation:**
- Decisions made at top by senior managers
- Advantages: Consistent decisions, strong control, economies of scale
- Disadvantages: Slow, demotivating, ignores local knowledge

**Decentralised Organisation:**
- Decisions delegated to local managers/staff
- Advantages: Faster decisions, motivated staff, uses local expertise
- Disadvantages: Inconsistency, loss of control, requires training

**Real Examples:**
- British Army: Tall, centralised
- Google: Flat, decentralised
- McDonald's franchises: Decentralised operations, centralised branding

### Communication

**Internal Communication:**
- Email, meetings, reports, memos, intranet, notice boards, video calls

**External Communication:**
- Advertising, website, social media, press releases, customer service

**Effective Communication:**
- Clear message
- Appropriate channel
- Feedback mechanism
- Consider audience
- Timely delivery

**Barriers to Communication:**
- Noise/distractions
- Language differences
- Information overload
- Poor channels
- Hierarchical barriers
- Geographical distance

### Recruitment and Selection

**Internal Recruitment:**
- Filling vacancy from existing employees
- Methods: Promotion, internal job board, redeployment
- Advantages: Cheaper, faster, known candidate, motivating
- Disadvantages: Limited choice, creates another vacancy, may cause resentment

**External Recruitment:**
- Filling vacancy from outside
- Methods: Job adverts, agencies, LinkedIn, job fairs, headhunting
- Advantages: Fresh ideas, wider choice, specific skills
- Disadvantages: Expensive, takes longer, risky

**Selection Process:**
1. Job analysis (what the role involves)
2. Job description (duties, responsibilities, conditions)
3. Person specification (skills, qualifications, experience needed)
4. Advertise the vacancy
5. Shortlist candidates
6. Interviews/assessment centres
7. Select and make offer
8. Reference and background checks

**Job Description vs Person Specification:**
| Job Description | Person Specification |
|-----------------|---------------------|
| What the job involves | What the person needs |
| Duties and tasks | Skills and qualities |
| Reporting structure | Qualifications needed |
| Location and hours | Experience required |
| Salary and benefits | Personal attributes |

### Training and Development

**Induction Training:**
- For new employees
- Covers: Organisation, health & safety, policies, culture, team introduction
- Benefits: Helps settle quickly, reduces mistakes, legal compliance

**On-the-Job Training:**
- Training while working
- Methods: Coaching, mentoring, shadowing, job rotation
- Advantages: Cheaper, relevant, immediate application, productive
- Disadvantages: May learn bad habits, disrupts trainer, variable quality

**Off-the-Job Training:**
- Training away from workplace
- Methods: Courses, workshops, conferences, e-learning, qualifications
- Advantages: Expert trainers, no distractions, broader skills
- Disadvantages: Expensive, time away from work, may not be relevant

### Motivation Theories

**Frederick Taylor (Scientific Management)**
- Workers primarily motivated by money
- Piece-rate pay (paid per item)
- Time and motion studies
- Division of labour and specialisation
- Criticism: Ignores social needs, boring work

**Abraham Maslow (Hierarchy of Needs)**
| Level | Need | Business Application |
|-------|------|---------------------|
| 5 | Self-actualisation | Challenging work, creativity, promotion |
| 4 | Esteem | Recognition, job title, responsibility |
| 3 | Social | Team working, social events |
| 2 | Safety | Job security, safe conditions, pension |
| 1 | Physiological | Basic wages for food and shelter |

- Lower needs must be satisfied before higher needs motivate
- Different employees at different levels
- Criticism: Oversimplified, not linear, hard to measure

**Frederick Herzberg (Two-Factor Theory)**
| Hygiene Factors (Prevent Dissatisfaction) | Motivators (Create Satisfaction) |
|------------------------------------------|--------------------------------|
| Pay and conditions | Achievement |
| Company policies | Recognition |
| Relationships with colleagues | The work itself |
| Supervision | Responsibility |
| Job security | Advancement |

- Hygiene factors don't motivate but cause dissatisfaction if absent
- Motivators create genuine job satisfaction
- Led to concept of job enrichment

**Elton Mayo (Human Relations)**
- Workers motivated by social interaction
- Attention from management increases productivity
- Teamwork and communication important
- Hawthorne Studies showed importance of recognition

### Methods of Motivation

**Financial Methods:**
| Method | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Wages** | Hourly/daily payment | Simple, flexible | No incentive, insecurity |
| **Salary** | Fixed annual payment | Security, budgeting | No link to effort |
| **Piece Rate** | Per item produced | Incentive to produce more | Quality may suffer |
| **Commission** | % of sales value | Motivates salespeople | May be pushy |
| **Bonus** | Extra payment for targets | Rewards achievement | Can become expected |
| **Profit Sharing** | Share of profits | Feel ownership | May not reflect individual effort |
| **Performance-related Pay** | Pay linked to appraisal | Motivates high performers | Subjective assessment |
| **Fringe Benefits** | Non-cash perks | Tax-efficient, attracts staff | Expensive, not for all |

**Non-Financial Methods:**
| Method | Description | How It Motivates |
|--------|-------------|------------------|
| **Job Rotation** | Moving between tasks | Reduces boredom |
| **Job Enlargement** | Adding tasks at same level | More variety |
| **Job Enrichment** | Adding challenging tasks | More responsibility |
| **Empowerment** | Authority to make decisions | Trust, ownership |
| **Team Working** | Collaborative groups | Social needs |
| **Flexible Working** | Choice of hours/location | Work-life balance |
| **Recognition** | Praise, awards | Esteem needs |

**Real UK Examples:**
- **John Lewis Partnership:** Partners (employees) share profits, ownership stake
- **Timpson:** Empowers staff, supports ex-offenders, flexible policies
- **Google UK:** Free food, games rooms, 20% time for personal projects
- **Innocent Drinks:** Fun culture, scholarships, volunteering days`,

  'ocr-gcse-bus-operations': `## Topic 4: Operations

### Production Methods

**Job Production**
- One-off, unique products made to customer specification
- Examples: Custom furniture, wedding cakes, bridges, Rolls-Royce cars
- Advantages:
  - High quality, craftsmanship
  - Meets exact customer needs
  - High prices possible
  - Motivated, skilled workers
  - Flexible to requirements
- Disadvantages:
  - Labour-intensive, slow
  - Expensive (high unit costs)
  - Requires skilled workers
  - Difficult to achieve economies of scale

**Batch Production**
- Groups of identical products made together
- Examples: Bakeries, furniture, clothing, printing
- Advantages:
  - Some economies of scale
  - Flexibility between batches
  - Can vary output to demand
  - Less boring than flow production
- Disadvantages:
  - Downtime between batches
  - Storage costs for finished batches
  - Requires planning and coordination
  - Some repetition for workers

**Flow (Mass) Production**
- Continuous production line, large quantities of identical products
- Examples: Car manufacturing, electronics, food processing
- Advantages:
  - Very low unit costs
  - Economies of scale
  - Consistent quality
  - Fast output
  - Highly automated
- Disadvantages:
  - High set-up costs
  - Inflexible (hard to customise)
  - Boring for workers
  - Breakdowns stop everything
  - Large storage needed

**Real UK Examples:**
- **Rolls-Royce Motor Cars:** Job production - each car takes 6-9 months
- **Greggs:** Batch production - different products throughout day
- **Coca-Cola Wakefield:** Flow production - 2 million cans per day
- **Morgan Motor Company:** Job production - handmade cars

### Quality Management

**Quality:** Meeting or exceeding customer expectations

**Why Quality Matters:**
- Customer satisfaction and loyalty
- Fewer returns and complaints
- Better reputation
- Can charge higher prices
- Reduced waste and costs
- Legal requirements

**Quality Control (QC)**
- Checking products at end of production
- Inspectors check samples or all items
- Defective products rejected
- Advantages: Simple, catches defects
- Disadvantages: Finds problems late, doesn't prevent defects, costly inspectors

**Quality Assurance (QA)**
- Building quality in at every stage
- All workers responsible for quality
- Self-checking and procedures
- Advantages: Prevents defects, empowers workers, continuous improvement
- Disadvantages: Training costs, time to implement

**Total Quality Management (TQM)**
- Quality is everyone's responsibility
- Customer focus throughout
- Zero defects target
- Continuous improvement (Kaizen)
- Advantages: Very high quality, reduced waste, motivated staff
- Disadvantages: Expensive, requires cultural change, takes years

**Quality Standards:**
- **ISO 9001:** International quality management standard
- **Kitemark (BSI):** British quality mark
- **CE Marking:** European safety compliance

### Lean Production

**Definition:** Eliminating waste while maintaining quality

**Key Principles:**
- Just-in-time (JIT)
- Kaizen (continuous improvement)
- Cell production
- Quality circles
- Zero defects

**Just-in-Time (JIT):**
- Stock arrives exactly when needed
- Minimal or no stock held
- Requires reliable suppliers
- Advantages: Reduces storage costs, less capital tied up, fresher stock
- Disadvantages: Vulnerable to supply disruptions, needs reliable suppliers

**Real Example - Toyota Production System:**
- Pioneered JIT and lean manufacturing
- Kanban system for stock control
- Andon cords to stop production for quality issues
- Workers empowered to improve processes

### Customer Service

**Importance of Customer Service:**
- Attracts new customers
- Retains existing customers
- Creates competitive advantage
- Builds brand reputation
- Generates word-of-mouth recommendations

**Elements of Good Customer Service:**
- Product knowledge
- Friendly, helpful staff
- Fast response to queries
- Effective complaints handling
- After-sales support
- Convenient opening hours
- Clean, welcoming environment

**Real Examples:**
- **John Lewis:** "Never Knowingly Undersold", strong returns policy
- **Amazon:** Fast delivery, easy returns, customer reviews
- **First Direct:** Award-winning customer service (24/7 phone banking)

### Consumer Law

**Consumer Rights Act 2015:**
- Goods must be of satisfactory quality
- Goods must be fit for purpose
- Goods must be as described
- Right to refund within 30 days
- Right to repair or replacement
- Right to partial refund after 30 days

**Consumer Contracts Regulations 2013:**
- Right to cancel online/phone orders within 14 days
- Full refund including outward delivery
- Clear information before purchase

**Trade Descriptions Act:**
- Illegal to make false or misleading claims about products

### Business Location

**Factors Affecting Location:**
| Factor | Considerations |
|--------|---------------|
| **Proximity to customers** | Retailers need footfall, convenience |
| **Proximity to suppliers** | Reduces transport costs, JIT needs |
| **Labour supply** | Availability of skilled workers |
| **Infrastructure** | Transport links, broadband, utilities |
| **Costs** | Land, rent, wages vary by region |
| **Government incentives** | Enterprise zones, grants |
| **Competition** | Near competitors or away from them |
| **Environment** | Planning permission, local community |

**Real UK Examples:**
- **Nissan Sunderland:** Government grants, skilled labour, port access
- **Amazon Fulfilment Centres:** Near motorways, large labour pool
- **Tech City London (Silicon Roundabout):** Access to talent, investors, networking
- **Jaguar Land Rover Solihull:** Historic location, skilled workforce

### Working with Suppliers

**Factors in Choosing Suppliers:**
- Price
- Quality
- Reliability
- Location
- Payment terms
- Flexibility
- Capacity
- Ethical standards

**Supplier Relationships:**
- Partnership approach vs adversarial
- Long-term contracts vs spot buying
- Single supplier vs multiple suppliers

### Stock Control

**Types of Stock:**
- Raw materials
- Work-in-progress (WIP)
- Finished goods

**Stock Control Charts:**
- Maximum stock level
- Minimum stock level (buffer/safety stock)
- Re-order level
- Re-order quantity
- Lead time

**Calculations:**
- Re-order level = (Daily usage × Lead time) + Buffer stock
- Example: 50 units/day × 4 days + 100 buffer = 300 units`,

  'ocr-gcse-bus-finance': `## Topic 5: Finance

### Sources of Finance

**Internal Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Owner's Capital** | Owner's own money | No interest, no repayment | Limited amount |
| **Retained Profit** | Profits kept in business | No cost, readily available | Takes time to build |
| **Sale of Assets** | Selling unwanted items | Quick cash, no repayment | May need assets later |

**External Short-Term Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Bank Overdraft** | Borrow up to agreed limit | Flexible, only pay when used | High interest, can be called in |
| **Trade Credit** | Delay payment to suppliers | Free credit period | Lose early payment discounts |
| **Factoring** | Sell debts to factor | Immediate cash | Lose some of debt value |

**External Long-Term Sources:**
| Source | Description | Advantages | Disadvantages |
|--------|-------------|------------|---------------|
| **Bank Loan** | Fixed amount, fixed repayments | Can budget, fixed interest | Need security, must repay |
| **Mortgage** | Loan secured on property | Low interest, long term | Risk losing property |
| **Share Capital** | Selling shares | Large amounts, no repayment | Dilutes ownership |
| **Venture Capital** | Investment from specialists | Large amounts, expertise | Give up equity |
| **Crowdfunding** | Many small investors | No repayment, marketing | Uncertain, time-consuming |
| **Government Grants** | Money from government | Free, no repayment | Competitive, conditions |
| **Leasing** | Rent rather than buy | Spread costs, latest equipment | Don't own, higher long-term cost |

**Choosing Sources:**
- Amount needed
- Purpose (short or long term)
- Cost (interest rate)
- Risk tolerance
- Business type (Ltd can issue shares)
- Speed needed

### Revenue, Costs and Profit

**Revenue (Turnover/Sales):**
**Revenue = Selling Price x Quantity Sold**
Example: 1,000 items at £15 each = £15,000 revenue

**Costs:**
- **Fixed Costs:** Don't change with output (rent, insurance, salaries)
- **Variable Costs:** Change with output (materials, packaging, wages per unit)
- **Total Costs = Fixed Costs + Variable Costs**

**Profit:**
- **Gross Profit = Revenue - Cost of Sales**
- **Net Profit = Gross Profit - Expenses (Operating Costs)**

**Example:**
| Item | Amount |
|------|--------|
| Revenue | £150,000 |
| Cost of Sales | £90,000 |
| **Gross Profit** | £60,000 |
| Expenses | £40,000 |
| **Net Profit** | £20,000 |

**Ways to Increase Profit:**
- Increase prices
- Increase sales volume
- Reduce costs
- Find cheaper suppliers
- Improve efficiency

### Break-Even Analysis

**Break-even point:** Where total revenue equals total costs (no profit or loss)

**Key Formulas:**
- **Contribution per unit = Selling Price - Variable Cost per Unit**
- **Break-even output = Fixed Costs / Contribution per Unit**
- **Margin of Safety = Actual Sales - Break-even Sales**
- **Total Contribution = Contribution per Unit x Quantity Sold**
- **Profit/Loss = Total Contribution - Fixed Costs**

**Worked Example:**
- Selling price: £25
- Variable cost per unit: £10
- Fixed costs: £30,000
- Contribution = £25 - £10 = £15
- Break-even = £30,000 / £15 = 2,000 units

**Break-even Chart Components:**
- X-axis: Output (units)
- Y-axis: Revenue/Costs (£)
- Fixed costs line (horizontal)
- Total costs line (starts at fixed costs, slopes up)
- Revenue line (starts at origin, slopes up)
- Break-even point (where TC and TR cross)

**Benefits of Break-even:**
- Shows minimum sales needed
- Helps pricing decisions
- Supports loan applications
- Shows impact of changes

**Limitations:**
- Assumes all output is sold
- Assumes constant costs and prices
- Single product only
- Static analysis

### Cash Flow

**Cash Flow:** Movement of money in and out of a business

**Why Cash is Critical:**
- Pay suppliers and wages
- Pay bills and loan repayments
- A profitable business can fail without cash (profit is not cash)

**Cash Inflows:**
- Sales revenue (cash sales)
- Loans received
- Sale of assets
- Owner's capital
- Interest received

**Cash Outflows:**
- Purchases and materials
- Wages and salaries
- Rent and utilities
- Loan repayments
- Equipment purchases
- Marketing costs

**Cash Flow Forecast:**
| | January | February | March |
|--|---------|----------|-------|
| Cash Inflows | £8,000 | £10,000 | £12,000 |
| Cash Outflows | £9,000 | £8,000 | £9,000 |
| **Net Cash Flow** | (£1,000) | £2,000 | £3,000 |
| Opening Balance | £3,000 | £2,000 | £4,000 |
| **Closing Balance** | £2,000 | £4,000 | £7,000 |

**Key Calculations:**
- **Net Cash Flow = Cash Inflows - Cash Outflows**
- **Closing Balance = Opening Balance + Net Cash Flow**

**Improving Cash Flow:**
- Speed up inflows (credit control, early payment discounts)
- Delay outflows (negotiate credit terms)
- Reduce costs
- Sale and leaseback
- Overdraft facility
- Factoring

### Financial Statements

**Income Statement (Profit and Loss):**
Shows profitability over a period

| | £ |
|--|---|
| Revenue | 200,000 |
| Less: Cost of Sales | (120,000) |
| **Gross Profit** | 80,000 |
| Less: Operating Expenses | (50,000) |
| **Operating Profit** | 30,000 |
| Less: Interest | (5,000) |
| **Net Profit** | 25,000 |

**Statement of Financial Position (Balance Sheet):**
Snapshot of assets and liabilities at a point in time

### Financial Ratios

**Profitability Ratios:**

**Gross Profit Margin (GPM) = (Gross Profit / Revenue) x 100**
- Shows profit after cost of sales
- Higher is generally better

**Net Profit Margin (NPM) = (Net Profit / Revenue) x 100**
- Shows profit after all costs
- Typical small business: 5-10%

**Average Rate of Return (ARR) = (Average Annual Profit / Initial Investment) x 100**
- Used to evaluate investment decisions
- Compare to interest rates

**Interpreting Ratios:**
- Compare to previous years
- Compare to competitors
- Consider industry averages
- One ratio doesn't tell everything`,

  'ocr-gcse-bus-external-influences': `## Topic 6: External Influences on Business

### Ethical and Environmental Considerations

**Business Ethics:**
- Doing what is morally right, not just legal
- Fair trade practices
- Honest advertising
- Treating employees fairly
- Avoiding exploitation

**Environmental Considerations:**
- Carbon footprint reduction
- Sustainable sourcing
- Waste reduction and recycling
- Reducing packaging
- Energy efficiency
- Renewable energy use

**Benefits of Ethical/Environmental Behaviour:**
- Improved reputation
- Customer loyalty
- Attracts employees
- Avoids negative publicity
- May reduce costs (efficiency)
- Government support

**Costs of Ethical Behaviour:**
- Higher costs (fair wages, sustainable materials)
- May reduce short-term profits
- Competitive disadvantage if others don't follow

**Real UK Examples:**
- **Patagonia:** "Don't Buy This Jacket" campaign, repairs clothing
- **Body Shop:** Against animal testing, community trade
- **Lush:** Minimal packaging, ethical sourcing, campaigns
- **M&S Plan A:** Environmental and ethical initiative
- **Primark:** Improvements after Rana Plaza disaster

**Pressure Groups:**
- Organisations that campaign to influence business/government
- Examples: Greenpeace, Friends of the Earth, RSPCA
- Methods: Boycotts, protests, social media campaigns
- Impact: Can damage reputation, force policy changes

### Economic Climate

**Interest Rates:**
- Cost of borrowing money
- Set by Bank of England Monetary Policy Committee
- Base rate affects all interest rates

**Impact of HIGH Interest Rates:**
- Higher loan repayments for businesses
- Consumers spend less (mortgages costlier)
- Reduced demand for goods/services
- Lower business investment
- Benefits savers

**Impact of LOW Interest Rates:**
- Cheaper borrowing for businesses
- Consumers spend more (cheaper mortgages)
- Increased business investment
- Higher demand
- Bad for savers

**Exchange Rates:**
- Value of one currency against another
- Example: £1 = $1.25 or £1 = €1.15

**Strong Pound (appreciates):**
- Imports cheaper
- Exports more expensive abroad
- Good for importers
- Bad for exporters
- UK holidays abroad cheaper

**Weak Pound (depreciates):**
- Imports more expensive
- Exports cheaper abroad
- Good for exporters
- Bad for importers
- Attracts foreign tourists

**Real Example - Brexit 2016:**
After referendum, £ fell 15% against $
- Good for exporters (Burberry, Rolls-Royce)
- Bad for importers (higher costs)

**Inflation:**
- General rise in prices over time
- Measured by Consumer Price Index (CPI)
- UK target: 2%
- UK inflation reached 11.1% in October 2022

**Impact of High Inflation:**
- Higher costs for businesses
- Workers demand pay rises
- Reduced purchasing power
- Uncertainty for planning
- Interest rates rise to control it

**Unemployment:**
- Percentage of workforce without jobs
- UK unemployment typically 3-5%

**Impact on Business:**
- High unemployment: Larger labour pool, downward wage pressure
- Low unemployment: Harder to recruit, upward wage pressure

### Globalisation

**Definition:** Increasing interconnection of world economies

**Causes:**
- Improved transport (containerisation)
- Communication technology (internet)
- Reduced trade barriers
- Multinational corporations
- Free trade agreements

**Opportunities for UK Businesses:**
- Access to global markets
- Cheaper imports/materials
- Lower production costs (offshore manufacturing)
- Access to new talent
- Economies of scale

**Threats to UK Businesses:**
- Competition from low-cost countries
- Pressure on prices
- Complex supply chains
- Exchange rate risks
- Cultural differences

**Real UK Examples:**
- **Dyson:** Moved production to Malaysia (cost savings)
- **JCB:** Exports to 150+ countries
- **ARM Holdings:** UK chip designer, global customers
- **Burberry:** British brand, global luxury market

### The European Union and International Trade

**Imports:** Goods/services bought from other countries
**Exports:** Goods/services sold to other countries
**Balance of Trade:** Exports - Imports

**Trade Barriers:**
- **Tariffs:** Taxes on imports
- **Quotas:** Limits on quantity
- **Regulations:** Standards that limit trade
- **Subsidies:** Government support for domestic producers

**Brexit Impact on UK Businesses:**
- New customs checks (delays, costs)
- Tariff-free access ended for some goods
- Freedom to set own trade deals
- Reduced EU migration affecting labour supply
- Some businesses moved to EU

### Legislation Affecting Businesses

**Employment Law:**

| Law | Key Provisions |
|-----|---------------|
| **National Minimum Wage** | £11.44/hour (21+), lower for younger, April 2024 |
| **Working Time Regulations** | 48-hour week max, 28 days paid holiday |
| **Equality Act 2010** | No discrimination on age, sex, race, disability, etc. |
| **Health and Safety at Work Act** | Safe working environment, risk assessments |
| **Employment Rights Act** | Contracts, notice periods, unfair dismissal |

**Consumer Law:**

| Law | Key Provisions |
|-----|---------------|
| **Consumer Rights Act 2015** | Goods must be satisfactory quality, fit for purpose, as described |
| **Consumer Contracts Regulations** | 14-day cooling-off for online/phone orders |
| **Trade Descriptions Act** | No false claims about products |

**Impact of Legislation:**
- Increased costs (higher wages, safety equipment)
- Administrative burden
- Protects employees and customers
- Level playing field
- Penalties for non-compliance

### The Competitive Environment

**Types of Competition:**
- **Perfect competition:** Many sellers, identical products (theoretical)
- **Monopoly:** One dominant seller (regulated)
- **Oligopoly:** Few large firms (supermarkets, banks)
- **Monopolistic competition:** Many firms, differentiated products

**Responding to Competition:**

**Price Competition:**
- Price wars
- Discounts and offers
- Loss leaders
- Price matching

**Non-Price Competition:**
- Quality and design
- Customer service
- Branding and image
- Advertising
- Location
- Product range

**Real UK Examples:**
- **Supermarket Price Wars:** Big 4 vs Aldi/Lidl
- **Smartphone Market:** Apple vs Samsung
- **Airlines:** BA vs Ryanair/easyJet
- **Streaming:** Netflix vs Disney+ vs Amazon Prime

**Porter's Five Forces (Analysis Framework):**
1. Threat of new entrants
2. Threat of substitutes
3. Bargaining power of suppliers
4. Bargaining power of buyers
5. Rivalry among existing competitors`,
};

// ============================================================================
// WORKED EXAMPLES
// ============================================================================

const OCR_GCSE_BUS_WORKED_EXAMPLES = `## Worked Examples with Model Answers

### Example 1: Definition Question (2 marks)
**Question:** Define the term 'enterprise'. [2 marks]

**Model Answer:**
Enterprise is the process of identifying a business opportunity (1) and taking the risk to pursue it by starting a business (1).

**Mark Scheme:**
- 1 mark: Identifying opportunity/having a business idea
- 1 mark: Taking a risk/starting a business

---

### Example 2: Calculation Question (3 marks)
**Question:** Calculate the break-even output for Business X.
- Fixed costs: £24,000
- Selling price per unit: £40
- Variable cost per unit: £16

Show your working. [3 marks]

**Model Answer:**
Contribution per unit = Selling price - Variable cost (1)
= £40 - £16 = £24

Break-even = Fixed costs / Contribution per unit (1)
= £24,000 / £24 = 1,000 units (1)

**Mark Scheme:**
- 1 mark: Calculating contribution (£24)
- 1 mark: Using correct formula
- 1 mark: Correct answer (1,000 units)

---

### Example 3: Outline Question (2 marks)
**Question:** Outline one advantage of using batch production. [2 marks]

**Model Answer:**
One advantage of batch production is that it offers flexibility (1) as the business can change what it produces between batches to respond to customer demand or seasonal trends (1).

**Mark Scheme:**
- 1 mark: Identification (flexibility/variety/some economies of scale)
- 1 mark: Development (explanation of how/why)

---

### Example 4: Explain Question (4 marks)
**Question:** Explain one way in which a business could improve its cash flow. [4 marks]

**Model Answer:**
One way a business could improve its cash flow is by offering early payment discounts to customers (1). This means customers pay invoices within 7-10 days instead of 30-60 days in exchange for a small discount (1). This brings cash into the business faster, improving liquidity (1), which means the business can pay its own bills on time and avoid overdraft charges (1).

**Mark Scheme:**
- 1 mark: Identification of method
- 1 mark: Explanation of how it works
- 1 mark: Development of impact on cash flow
- 1 mark: Further development or business benefit

---

### Example 5: Analysis Question (6 marks)
**Question:** Analyse the impact of rising interest rates on a manufacturing business. [6 marks]

**Model Answer:**
Rising interest rates would have several impacts on a manufacturing business.

Firstly, higher interest rates would increase the cost of borrowing. If the business has loans for machinery or premises, the interest payments will increase → this means the business has less profit to reinvest in new equipment → which could slow down growth or force the business to increase prices to maintain margins.

Secondly, rising interest rates affect consumer spending. Customers with mortgages face higher repayments → they have less disposable income → this leads to reduced demand for manufactured goods → resulting in lower sales and potentially excess stock.

However, if the business has savings or is cash-rich, higher interest rates could benefit them through increased returns on deposits. Additionally, businesses exporting to countries with lower interest rates might benefit from a stronger pound making their costs for imported materials cheaper.

**Mark Scheme (Levels):**
Level 3 (5-6 marks): Good analysis with developed chains of reasoning. Clear understanding of how interest rates affect both costs and demand. May include relevant evaluation.
Level 2 (3-4 marks): Some analysis. Identifies impacts but limited development. May be one-sided.
Level 1 (1-2 marks): Limited response. Basic identification with little or no development.

---

### Example 6: Evaluate Question (10 marks)
**Question:** Evaluate whether Business X should use job production or batch production. Business X is a bakery that currently uses job production to make bespoke wedding cakes but is considering switching to batch production for a new range of celebration cakes. [10 marks]

**Model Answer:**
Business X needs to carefully consider whether to switch from job production to batch production for its new celebration cake range.

**Arguments for switching to batch production:**
Using batch production would allow Business X to reduce its unit costs. By making several identical cakes at once, the bakery can buy ingredients in larger quantities → achieving purchasing economies of scale → reducing the cost per cake. This would enable competitive pricing for the celebration cake market.

Additionally, batch production is more efficient for standard products. Workers can develop skills in making specific cake designs → increasing productivity → allowing more cakes to be made in the same time. This could help Business X meet higher demand and grow its revenue.

**Arguments against switching:**
However, job production allows for customisation which is valuable in the celebration cake market. Customers ordering birthday or anniversary cakes often want personalised designs → batch production would limit this flexibility → potentially losing customers to competitors who offer bespoke options.

Furthermore, Business X's reputation is built on quality craftsmanship. Switching to batch production might be perceived as lower quality → damaging the brand image → affecting sales of the premium wedding cakes which are likely the main profit driver.

**Conclusion:**
On balance, I would recommend Business X continues using job production but introduces some batch production elements for basic components like sponge bases. This "hybrid" approach allows the business to achieve some cost savings while maintaining the customisation that differentiates it from supermarket alternatives. The success of this approach depends on whether customers value personalisation over price for celebration cakes, which Business X should research before making the final decision.

**Mark Scheme (Levels):**
Level 4 (9-10 marks): Thorough evaluation with well-developed analysis on both sides. Strong application to the bakery context. Clear, justified conclusion with qualification.
Level 3 (6-8 marks): Good evaluation with reasoned conclusion. Good analysis of both options. Good application to context.
Level 2 (3-5 marks): Some evaluation but may be one-sided. Some analysis of options. Some application.
Level 1 (1-2 marks): Limited response. Basic points with little evaluation.

---

### Example 7: 12-Mark Extended Response
**Question:** TechStart Ltd is a small technology company considering two options to finance a major expansion:
Option A: Take a bank loan of £500,000 at 8% interest over 5 years
Option B: Sell 40% of shares to a venture capital firm for £500,000

Recommend which option TechStart Ltd should choose. Justify your answer. [12 marks]

**Model Answer:**
TechStart Ltd faces an important strategic decision about financing its expansion. Both options have significant implications for the business.

**Arguments for Option A (Bank Loan):**
Taking a bank loan allows TechStart Ltd to retain full ownership and control of the business. The founders would keep 100% of shares → maintaining decision-making power → allowing them to pursue their original vision without external interference. This is particularly important for a technology company where founders often have a unique vision.

The interest payments are fixed and predictable. At 8% on £500,000, annual interest is approximately £40,000 → this can be budgeted for → giving financial certainty. If TechStart Ltd is confident in its growth, keeping all future profits rather than sharing with investors could be more valuable long-term.

However, loan repayments are mandatory regardless of business performance. If the expansion fails or takes longer than expected → the business still owes the money → putting the company at risk of insolvency.

**Arguments for Option B (Venture Capital):**
Venture capital brings more than just money. The VC firm would provide expertise, contacts, and guidance → helping TechStart Ltd navigate the growth phase → increasing the chances of success. Many successful tech companies (Google, Facebook) benefited from VC expertise.

There are no mandatory repayments with equity finance. If the expansion struggles → there's no monthly debt to service → giving TechStart Ltd breathing room to adjust strategy. This reduces the risk of business failure.

However, selling 40% equity significantly dilutes ownership. The founders would lose substantial control → potentially facing pressure for quick exits or decisions they disagree with → creating conflict. The VC firm might push for rapid growth or a sale that doesn't align with the founders' goals.

**Conclusion:**
I recommend Option A (bank loan) for TechStart Ltd because:
1. Retaining full ownership is crucial for a technology company where founder vision drives success
2. If the expansion succeeds, keeping 100% of profits is more valuable than sharing with investors
3. £40,000 annual interest is manageable if the expansion increases revenue as expected

However, this recommendation depends on TechStart Ltd's confidence in its expansion plans and its ability to service the debt. If there's significant uncertainty about success, Option B might provide the safety net needed. TechStart Ltd should also consider whether the VC firm's expertise is genuinely valuable for their specific market.

**Mark Scheme (Levels):**
Level 4 (10-12 marks): Thorough knowledge of finance sources. Detailed analysis with clear chains of reasoning for both options. Effective evaluation comparing options with strong context application. Well-supported judgement with qualification.
Level 3 (7-9 marks): Good knowledge of relevant concepts. Good analysis of both options. Evaluation present with reasoned conclusion. Good application to TechStart Ltd.
Level 2 (4-6 marks): Some knowledge shown. Analysis of options but may lack development. Evaluation limited or one-sided. Some application.
Level 1 (1-3 marks): Limited knowledge. Basic description of options. Little or no evaluation. Generic response.
`;

// ============================================================================
// COMMON MISTAKES AND EXAM TECHNIQUE
// ============================================================================

const OCR_GCSE_BUS_EXAM_TECHNIQUE = `## Common Mistakes and Exam Technique

### Common Mistakes to Avoid

**Definition Questions:**
- Being too vague ("It's about business stuff")
- Not developing for 2-mark questions
- Using examples instead of definitions

**Calculation Questions:**
- Not showing working (lose marks even if answer correct)
- Forgetting units (£, %, units)
- Rounding errors
- Using wrong formula
- Not answering the actual question asked

**Outline Questions:**
- Only identifying, not developing
- Repeating the same point in different words
- Not using business terminology

**Explain Questions:**
- Only making one point for 4+ marks
- Not developing using Point → Explanation → Impact
- Not applying to any business context
- Being too general

**Analysis Questions:**
- Being completely one-sided
- Making bullet point lists without development
- Not using chains of reasoning (→)
- Generic responses not linked to case study

**Evaluate Questions:**
- Not reaching a conclusion
- Conclusion not supported by the argument
- Being too balanced without making a judgement
- Ignoring case study information
- Not using data/figures from the scenario

### Building Chains of Reasoning (Analysis)

**Weak answer:** "Advertising increases sales."

**Strong answer:** "Using social media advertising allows the business to target specific age groups → this means marketing spend is more efficient as it reaches people most likely to buy → leading to increased sales without proportionally increasing marketing costs → which improves profit margins and allows reinvestment in product development."

### Structure for Extended Responses

**6-Mark Structure:**
1. Point 1 with development and chain
2. Point 2 with development and chain
3. Brief counter-argument or conclusion if time

**10-Mark Structure:**
1. Brief introduction setting context
2. Arguments FOR (2 developed points with chains)
3. Arguments AGAINST (2 developed points with chains)
4. Clear conclusion with main justification

**12-Mark Structure:**
1. Introduction (brief context, 1-2 sentences max)
2. Option A analysis (advantages AND disadvantages)
3. Option B analysis (advantages AND disadvantages)
4. Comparison of options
5. Justified conclusion with condition/qualification

### Key Business Terminology for OCR

**Topic 1 - Business Activity:**
Enterprise, entrepreneur, sole trader, partnership, Ltd, PLC, franchise, limited liability, unlimited liability, stakeholder, SMART objectives, business plan

**Topic 2 - Marketing:**
Market research, primary research, secondary research, market segmentation, marketing mix, 4Ps, product life cycle, Boston Matrix, price skimming, penetration pricing, USP

**Topic 3 - People:**
Hierarchy, span of control, chain of command, delegation, centralised, decentralised, recruitment, selection, motivation, Maslow, Herzberg, Taylor

**Topic 4 - Operations:**
Job production, batch production, flow production, quality control, quality assurance, TQM, lean production, JIT, Kaizen, customer service

**Topic 5 - Finance:**
Fixed costs, variable costs, revenue, gross profit, net profit, break-even, contribution, margin of safety, cash flow, inflows, outflows, GPM, NPM, ARR

**Topic 6 - External:**
Interest rates, exchange rates, inflation, unemployment, globalisation, ethics, legislation, competition, tariffs

### Using Case Study Information

**ALWAYS:**
- Reference the specific business by name
- Use numbers/data from the case study
- Consider the size, type, and situation of the business
- Apply concepts to the context
- Quote relevant figures

**Example of good application:**
"GreenGrow Ltd should use batch production because the £20,000 setup costs mentioned in the case study are manageable given their £150,000 annual turnover. This would reduce their current unit cost of £8 to approximately £5, improving their gross profit margin."

### Time Management for OCR Papers

| Question Type | Marks | Suggested Time |
|---------------|-------|----------------|
| State/Identify | 1-2 | 1-2 minutes |
| Define | 2 | 2-3 minutes |
| Outline | 2-4 | 3-4 minutes |
| Calculate | 2-4 | 3-4 minutes |
| Explain | 4-6 | 5-7 minutes |
| Analyse | 6-8 | 10-12 minutes |
| Evaluate/Recommend | 10-12 | 15-20 minutes |

**Paper totals:**
- Paper 1: 80 marks, 90 minutes (roughly 1 minute per mark plus reading time)
- Paper 2: 80 marks, 90 minutes (roughly 1 minute per mark plus reading time)

### Reading the Case Study

- Read the case study carefully FIRST (5-10 minutes)
- Highlight/underline key data and figures
- Note the type and size of business
- Identify the main issues or decisions
- Look for hints about answers in the context
- Return to case study for each question
`;

// ============================================================================
// REAL UK BUSINESS EXAMPLES
// ============================================================================

const OCR_GCSE_BUS_REAL_EXAMPLES = `## Real UK Business Examples for Context

### Entrepreneurs and Enterprise
- **James Dyson:** 5,127 failed prototypes, now Dyson worth billions
- **Richard Branson:** Virgin Group - 400+ companies across multiple sectors
- **Karen Brady:** Birmingham City MD at 23, West Ham Vice-Chair
- **Levi Roots:** Reggae Reggae Sauce, Dragons' Den success story
- **Steven Bartlett:** Social Chain founder at 22, Dragons' Den investor
- **Jo Malone:** Built and sold two fragrance empires
- **Emma Bridgewater:** Pottery company employing 300+ in Stoke-on-Trent

### Sole Traders
- Local tradespeople (plumbers, electricians, decorators)
- Hairdressers and beauticians
- Personal trainers
- Freelance designers and photographers
- Market stall holders
- Window cleaners

### Partnerships
- Law firms (Clifford Chance, Allen & Overy)
- Accountancy practices (local firms)
- Medical practices (GP surgeries)
- Dental practices
- Architecture firms

### Private Limited Companies (Ltd)
- **John Lewis Partnership:** Employee-owned, famous for customer service
- **Dyson:** Technology innovator, moved manufacturing overseas
- **Innocent Drinks:** Founded 1999, sold to Coca-Cola
- **Gymshark:** Started in garage, now worth over £1 billion
- **Brewdog:** Craft beer, crowdfunded growth

### Public Limited Companies (PLC)
- **Tesco:** UK's largest retailer, 27% grocery market share
- **Marks & Spencer:** Clothing and food, 959 UK stores
- **BP:** Oil and gas multinational
- **HSBC:** Global banking
- **Unilever:** Consumer goods (Dove, Marmite, Ben & Jerry's)
- **Next:** Fashion retail and online
- **Greggs:** 2,300+ bakery stores

### Franchises
- **McDonald's:** 93% of UK restaurants are franchises
- **Subway:** World's largest franchise by outlets
- **Costa Coffee:** Now owned by Coca-Cola
- **Domino's Pizza:** UK's largest pizza delivery
- **Anytime Fitness:** 24-hour gym franchise
- **Specsavers:** Optical retail franchise

### Social Enterprises
- **The Big Issue:** Magazine sold by homeless people
- **Divine Chocolate:** Fair trade, farmer-owned cooperative
- **Jamie Oliver's Fifteen:** Restaurant training young people
- **Elvis & Kresse:** Luxury goods from recycled fire hoses
- **TOAST Ale:** Beer made from surplus bread

### Production Methods Examples
- **Rolls-Royce Motor Cars:** Job production, 6-9 months per car
- **Morgan Motor Company:** Hand-built cars, waiting list of years
- **Greggs:** Batch production, fresh daily
- **Warburtons:** Batch production bakery
- **Coca-Cola Wakefield:** Flow production, 2 million cans daily
- **Nissan Sunderland:** Flow production, 500,000+ cars annually

### Marketing Examples
- **Apple:** Premium pricing, innovative products, cult following
- **Aldi/Lidl:** Discount pricing, disrupting supermarket market
- **Greggs:** Vegan sausage roll marketing masterclass
- **Nike:** "Just Do It" emotional branding
- **Innocent Drinks:** Quirky packaging, ethical positioning
- **Red Bull:** Content marketing, extreme sports
- **Brewdog:** Provocative marketing, "Punk" positioning

### Motivation Examples
- **John Lewis Partnership:** Partners share profits, ownership culture
- **Timpson:** Extreme empowerment, recruits ex-offenders
- **Google UK:** Free food, games, 20% personal projects time
- **Innocent Drinks:** Fun culture, community involvement
- **Pret A Manger:** Mystery shopper bonuses for teams

### Quality Examples
- **Toyota UK:** TQM, Kaizen, zero defects culture
- **Rolls-Royce:** Craftsmanship, hand finishing
- **Dyson:** Testing, R&D investment
- **Waitrose:** Quality positioning, premium products

### E-commerce Examples
- **ASOS:** Online-only fashion, £4 billion revenue
- **Boohoo Group:** Fast fashion, acquired Debenhams online brand
- **Ocado:** Online grocery pioneer, technology platform
- **Amazon UK:** From books to everything, same-day delivery
- **THG (The Hut Group):** Beauty and wellness online

### Ethical Business Examples
- **Body Shop:** Against animal testing, community trade
- **Lush:** Minimal packaging, ethical sourcing, activism
- **Patagonia:** Environmental activism, repair services
- **Ben & Jerry's:** Fair trade, social mission
- **M&S Plan A:** Sustainability programme

### Globalisation Examples
- **Dyson:** UK company, manufacturing in Malaysia and Singapore
- **JCB:** British manufacturing, exports to 150+ countries
- **Burberry:** British brand, global luxury market
- **ARM Holdings:** UK chip designer, powers most smartphones globally
- **Rolls-Royce Holdings:** UK aerospace, global customers

### Brexit Impact Examples
- **Nissan Sunderland:** Government assurances to remain in UK
- **Honda Swindon:** Closed UK plant (multiple factors)
- **Financial Services:** Some operations moved to Dublin/Frankfurt
- **Fishing Industry:** New quotas and export challenges
- **Food Industry:** Supply chain complications, labour shortages
`;

// ============================================================================
// ESSAY GUIDANCE
// ============================================================================

const OCR_GCSE_BUS_ESSAY_GUIDANCE = `
## Extended Response Guidance for OCR GCSE Business

### What Examiners Want (12-Mark Questions)

**Level 4 responses demonstrate:**
1. Thorough knowledge of relevant concepts
2. Thorough application to the specific business
3. Detailed analysis with well-developed chains of reasoning
4. Balanced evaluation considering different perspectives
5. Well-reasoned, justified conclusion
6. Well-structured throughout

### Building Chains of Reasoning

**Weak:** "Marketing helps the business."

**Strong:** "Using targeted Instagram advertising allows the bakery to reach local customers aged 18-35 → this builds brand awareness among the key demographic for celebration cakes → leading to increased enquiries and orders → which improves revenue and allows investment in new equipment."

### Structure for Extended Responses

**Introduction (optional, brief):**
- Set context if helpful (1-2 sentences max)
- Don't waste time on long introductions

**Arguments For/Option 1 (2-3 paragraphs):**
- Make a point with knowledge
- Apply to the specific context
- Develop the chain of reasoning
- Show understanding of implications

**Arguments Against/Option 2 (2-3 paragraphs):**
- Present counter-argument
- Apply and develop with chains
- Consider different perspectives

**Conclusion (essential):**
- Clear recommendation/judgement
- Main reason for decision
- Acknowledge limitations or conditions

### Evaluation Techniques

**1. Weighing Up:**
"While the lower costs of flow production are attractive, the high initial investment of £200,000 may not be justified given Business X's current cash flow problems."

**2. Context-Specific:**
"The effectiveness of this approach depends on factors such as the business's target market. A luxury brand like Business X may find that competing on price damages its premium image."

**3. Stakeholder Considerations:**
"Employees may benefit from job security if the expansion succeeds, but shareholders might be concerned about the impact on short-term dividends during the investment period."

**4. Short-term vs Long-term:**
"In the short term, Option A offers quicker returns, but Option B could provide more sustainable competitive advantage over five years."

**5. Qualification:**
"This recommendation assumes that interest rates remain stable. If rates rise significantly, the loan repayments would become more burdensome."

### Useful Evaluation Phrases

**For analysis:**
- "This means that..."
- "As a result..."
- "This leads to..."
- "Therefore..."
- "Consequently..."
- "This would enable..."

**For counter-argument:**
- "However..."
- "On the other hand..."
- "In contrast..."
- "Nevertheless..."
- "Although..."
- "Conversely..."

**For judgement:**
- "On balance..."
- "Overall, I recommend..."
- "The most important factor is..."
- "This depends on..."
- "Provided that..."
- "Assuming that..."

### Common OCR Mistakes

1. Not using the case study business by name
2. Ignoring figures/data provided in the scenario
3. Only giving one side of the argument
4. Not reaching a clear conclusion
5. Repeating the same point in different words
6. Writing about irrelevant concepts
7. Not developing points with chains of reasoning
8. Making assertions without explanation
9. Conclusion that doesn't match the argument
10. Forgetting to qualify the recommendation
`;

// ============================================================================
// OCR-SPECIFIC CALCULATION FORMULAS
// ============================================================================

const OCR_GCSE_BUS_CALCULATION_FORMULAS = `
## Key Calculations for OCR GCSE Business

### Revenue and Profit
- **Revenue** = Price x Quantity
- **Total Costs** = Fixed Costs + Variable Costs
- **Profit** = Revenue - Total Costs
- **Gross Profit** = Revenue - Cost of Sales
- **Net Profit** = Gross Profit - Expenses

### Profit Margins
- **Gross Profit Margin** = (Gross Profit / Revenue) x 100
- **Net Profit Margin** = (Net Profit / Revenue) x 100

### Break-even Analysis
- **Contribution** = Selling Price - Variable Cost per Unit
- **Break-even Output** = Fixed Costs / Contribution per Unit
- **Margin of Safety** = Actual Sales - Break-even Sales
- **Total Contribution** = Contribution per Unit x Quantity Sold
- **Profit at Output** = Total Contribution - Fixed Costs

### Cash Flow
- **Net Cash Flow** = Cash Inflows - Cash Outflows
- **Closing Balance** = Opening Balance + Net Cash Flow

### Investment
- **Average Rate of Return (ARR)** = (Average Annual Profit / Initial Investment) x 100
- **Average Annual Profit** = Total Profit over Life / Number of Years

### Efficiency
- **Labour Productivity** = Output / Number of Workers
- **Capacity Utilisation** = (Current Output / Maximum Output) x 100

### Market
- **Market Share** = (Business Sales / Total Market Sales) x 100
- **Market Growth** = ((New Size - Old Size) / Old Size) x 100

### Other
- **Percentage Change** = ((New Value - Old Value) / Old Value) x 100
- **Revenue per Employee** = Total Revenue / Number of Employees
`;

// ============================================================================
// OCR-SPECIFIC KEY CONCEPTS SUMMARY
// ============================================================================

const OCR_GCSE_BUS_KEY_CONCEPTS = `
## Key Business Concepts for OCR GCSE

### Topic 1: Business Activity
- Purpose of business
- Entrepreneurs and enterprise
- Business planning (SWOT analysis)
- Business ownership (sole trader, partnership, Ltd, PLC)
- Business aims and objectives
- Stakeholders and stakeholder conflict

### Topic 2: Marketing
- Role of marketing
- Market research (primary/secondary)
- Market segmentation (demographic, geographic, psychographic, behavioural)
- Marketing mix (product, price, promotion, place)
- Product life cycle and extension strategies
- Boston Matrix

### Topic 3: People
- Organisational structure (hierarchy, span of control)
- Communication (internal and external)
- Recruitment and selection
- Training and development
- Motivation (Taylor, Maslow, Herzberg)
- Financial and non-financial motivation methods

### Topic 4: Operations
- Production methods (job, batch, flow)
- Lean production and JIT
- Quality management (QC, QA, TQM)
- Customer service
- Consumer law (Consumer Rights Act 2015)
- Business location factors
- Working with suppliers

### Topic 5: Finance
- Sources of finance (internal and external)
- Revenue, costs and profit
- Break-even analysis
- Cash flow forecasting
- Financial performance (ratios)
- Financial statements

### Topic 6: Influences on Business
- Ethics and environment
- Economic climate (interest rates, exchange rates, inflation)
- Globalisation
- Legislation (employment and consumer law)
- Competitive environment
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRGCSEBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getOCRMarkRangeForDifficulty(difficulty);
  const topicKnowledge = OCR_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  return `You are an expert OCR GCSE Business examiner creating exam-style questions.

${OCR_GCSE_BUS_ASSESSMENT_OBJECTIVES}

${topicKnowledge}

${OCR_GCSE_BUS_QUESTION_TEMPLATES}

${OCR_GCSE_BUS_MARK_SCHEME_CONVENTIONS}

${OCR_GCSE_BUS_WORKED_EXAMPLES}

${OCR_GCSE_BUS_EXAM_TECHNIQUE}

${OCR_GCSE_BUS_REAL_EXAMPLES}

${OCR_GCSE_BUS_ESSAY_GUIDANCE}

${OCR_GCSE_BUS_CALCULATION_FORMULAS}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **GCSE Standard**: Appropriate for 14-16 year olds
2. **Authentic OCR Style**: Match real OCR paper format exactly
3. **Clear Mark Allocation**: State marks in square brackets [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, state/identify, outlines (1-4 marks)
   - Medium: Explain and analyse questions (6-8 marks)
   - Hard: Evaluate/Recommend questions with case study (10-12 marks)
5. **Use Specific Knowledge**: Include real UK business examples, statistics, and terminology
6. **Context-Based**: For medium and hard questions, create a realistic business scenario

## Response Format
Return JSON with:
- "content": Question text (including any case study for medium/hard)
- "marks": Total marks
- "solution": Model answer demonstrating exam technique
- "markScheme": Array of marking points or level descriptors
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('business')}`;
}

export function getOCRGCSEBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getOCRMarkRangeForDifficulty(difficulty);
  const variety = getVarietyParameters();
  const varietyInstructions = getOCRBusinessVarietyInstructions(variety);
  const topicKnowledge = OCR_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term [concept]" [2 marks]
- "State one/two [features/factors]" [1-2 marks]
- "Outline one [advantage/disadvantage]" [2 marks]
- "Explain one [benefit/impact]" [4 marks]
- "Calculate [measure]. Show your working" [2-3 marks]

**Mark Scheme Format:**
- Define: 1 mark partial, 2 marks full definition with development
- State: 1 mark per valid point
- Outline: Identification (1) + Development (1)
- Explain: Point (1) + Explanation (1) + Development (1-2)
- Calculate: Formula (1) + Working + Answer with units (1-2)

**Model Answer should:**
- Give precise business definition or clear identification
- For explains: develop using Point → Explanation → Impact chain
- For calculations: show all working clearly

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create an ANALYSIS question requiring chains of reasoning (AO2/AO3).

**Question Types for Medium:**
- "Analyse [impact/benefits/problems]" [6 marks]
- "Analyse how [factor] affects [business aspect]" [6 marks]
- "Analyse the advantages of [decision/approach]" [8 marks]

**Mark Scheme Format (Levels):**
- Level 3 (6-8): Good analysis with developed chains of reasoning. Clear understanding. May include evaluation.
- Level 2 (3-5): Some analysis but limited development. May be one-sided.
- Level 1 (1-2): Limited response, mainly knowledge-based.

**Model Answer MUST include:**
- Multiple developed points using chains of reasoning (→)
- Both positive AND negative aspects where appropriate
- Application to a realistic business context
- Business terminology used correctly
- Clear cause-and-effect relationships

**Create a brief business scenario (2-4 sentences) that sets up the analysis question.**

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create an EVALUATION question requiring balanced judgement (AO3).

**Question Types for Hard:**
- "Evaluate [decision/proposition]" [10-12 marks]
- "Assess which [option] Business X should choose" [10 marks]
- "Recommend and justify [decision]" [12 marks]

**Mark Scheme Format (12 marks):**
- Level 4 (10-12): Thorough evaluation with well-supported judgement. Detailed analysis with clear chains of reasoning. Balanced consideration of options. Excellent application to context.
- Level 3 (7-9): Good evaluation with reasoned conclusion. Good analysis. Good application.
- Level 2 (4-6): Some evaluation with limited balance. Some analysis. Some application.
- Level 1 (1-3): Limited response with little evaluation. Basic description.

**Model Answer MUST include:**
- A realistic case study scenario with specific UK business context
- Arguments FOR (2+ developed points with chains of reasoning)
- Arguments AGAINST (2+ developed points with chains of reasoning)
- Clear, justified conclusion that directly answers the question
- Qualification/condition on the recommendation ("This depends on...")
- Use of case study data in the argument
- Business terminology throughout

**Create a detailed case study (5-8 sentences) with:**
- A named fictional UK business
- Specific numbers (costs, revenue, market size, etc.)
- Clear decision/dilemma to evaluate
- For 12-mark: two clear options to compare

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR GCSE Business question.

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
3. Model answer must demonstrate exam technique with chains of reasoning
4. Mark scheme must be detailed and aligned with OCR conventions
5. For hard questions: Include balanced evaluation with justified conclusion
6. Use real UK business examples where appropriate

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

export function getOCRGCSEBusinessCaseStudyPrompt(topic: Topic, subtopic: string): string {
  const topicKnowledge = OCR_GCSE_BUS_TOPIC_KNOWLEDGE[topic.id] || '';

  return `Generate an OCR GCSE Business CASE STUDY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

## Topic Knowledge:
${topicKnowledge}

Create a question with:
1. Detailed business scenario (100-150 words) featuring a realistic UK business
2. Include specific data: revenue, costs, employees, market share, etc.
3. Clear business decision or dilemma
4. Question based on the context (10-12 marks)

**Question Types:**
- "Evaluate [decision/strategy]" [12 marks]
- "Recommend which [option] Business X should choose. Justify your answer" [12 marks]
- "Assess [impact/proposition]" [10 marks]

**Mark Scheme must use OCR level descriptors:**
- Level 4 (10-12): Thorough, balanced, well-justified
- Level 3 (7-9): Good evaluation, reasoned conclusion
- Level 2 (4-6): Some evaluation, limited balance
- Level 1 (1-3): Limited, mainly descriptive

Return valid JSON:
{
  "content": "full case study with question",
  "marks": number,
  "solution": "model answer with chains of reasoning",
  "markScheme": ["Level 4: descriptor", "Level 3: descriptor", ...]
}`;
}

export function getOCRGCSEBusinessCalculationPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR GCSE Business CALCULATION question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

${OCR_GCSE_BUS_CALCULATION_FORMULAS}

Create a calculation question with:
1. Brief business context (1-2 sentences)
2. Clear numerical data
3. Requirement to show working

**Possible calculations:**
- Break-even output
- Contribution per unit
- Margin of safety
- Gross profit / Net profit
- Gross profit margin / Net profit margin
- Net cash flow / Closing balance
- Revenue / Total costs
- Market share
- Average rate of return

**Marks:** 2-4 marks

**Mark Scheme Format:**
- 1 mark for correct formula/method
- 1-2 marks for correct working
- 1 mark for correct answer with appropriate units

Return valid JSON:
{
  "content": "calculation question with data",
  "marks": number,
  "solution": "full working and answer",
  "markScheme": ["1 mark for formula", "1 mark for working", "1 mark for answer"]
}`;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Helper function for business-specific variety
function getOCRBusinessVarietyInstructions(variety: ReturnType<typeof getVarietyParameters>): string {
  const businessContexts = [
    'retail (shop, boutique, supermarket)',
    'hospitality (restaurant, hotel, cafe)',
    'manufacturing (factory, production)',
    'service business (salon, consultancy)',
    'technology startup',
    'franchise business',
    'social enterprise',
    'small local business',
    'growing medium-sized business',
    'established large company',
    'online business (e-commerce)',
    'creative business (design, media)'
  ];

  const ukLocations = [
    'London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol',
    'Sheffield', 'Edinburgh', 'Glasgow', 'Cardiff', 'Newcastle',
    'Liverpool', 'Nottingham', 'Southampton', 'Oxford', 'Cambridge'
  ];

  const randomContext = businessContexts[Math.floor(Math.random() * businessContexts.length)];
  const randomLocation = ukLocations[Math.floor(Math.random() * ukLocations.length)];

  return `## VARIETY REQUIREMENTS

To ensure diverse questions, apply these parameters:

**Business Context:** Set the question in a ${randomContext} context, based in ${randomLocation}

**Question Angle:** Consider approaching from perspective of:
- Business owner/entrepreneur
- Employee
- Customer
- Shareholder
- External stakeholder (community, supplier)

**Scenario Type:** Create a scenario involving:
- A new business decision (expansion, new product)
- A problem to solve (cash flow, competition)
- A growth opportunity (new market, franchise)
- A competitive challenge (new competitor, price war)
- An external change (economic, technological, legal)

**UK Context Requirements:**
- Use realistic British business names
- Reference UK-specific factors (legislation, economy, locations)
- Include authentic UK monetary values and statistics
- Consider Brexit implications where relevant

IMPORTANT: Create a realistic, believable scenario that a real GCSE student in the UK could engage with.`;
}

/**
 * Business GCSE mark ranges based on OCR specification question types.
 * Ranges are non-overlapping to ensure consistent difficulty progression.
 */
function getOCRMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 4 };   // Define, state, identify, outline
    case 'medium':
      return { min: 5, max: 8 };   // Analyse, explain, application questions
    case 'hard':
      return { min: 9, max: 12 };  // Evaluate, extended response
  }
}
