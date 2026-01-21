/**
 * Business Studies Extract Database
 * Real company case studies, financial data, and market information
 *
 * Data sources: Company reports, Financial Times, ONS, industry reports
 */

export interface BusinessExtract {
  id: string;
  type: 'case_study' | 'financial_data' | 'market_analysis' | 'strategy';
  company?: string;
  title: string;
  source: string;
  year: number;
  content: string;
  topics: string[];
  concepts: string[];
  calculationOpportunities?: string[];
  analysisPoints?: string[];
}

// ============================================
// COMPANY CASE STUDIES
// ============================================

export const companyCaseStudies: BusinessExtract[] = [
  {
    id: 'netflix-strategy',
    type: 'case_study',
    company: 'Netflix',
    title: 'Netflix Business Model Evolution',
    source: 'Netflix Annual Reports / Industry Analysis',
    year: 2024,
    content: `Netflix Case Study: From DVD Rental to Streaming Giant

Background:
- Founded: 1997 as DVD-by-mail service
- Launched streaming: 2007
- Global subscribers (2024): 270 million
- Annual revenue (2024): $34 billion

Key Strategic Decisions:
1. 2007: Pivoted from DVD rental to streaming
2. 2013: Started producing original content (House of Cards)
3. 2022: Introduced ad-supported tier at £4.99/month
4. 2023: Cracked down on password sharing

Financial Performance:
| Year | Revenue ($bn) | Subscribers (m) | Content Spend ($bn) |
|------|---------------|-----------------|---------------------|
| 2020 | 25.0          | 204             | 11.8                |
| 2021 | 29.7          | 222             | 17.0                |
| 2022 | 31.6          | 231             | 16.8                |
| 2023 | 33.7          | 260             | 13.0                |

Competitive Position:
- Main rivals: Disney+, Amazon Prime, Apple TV+
- Differentiation: Original content, recommendation algorithm
- Threat: Increasing competition fragmenting the market`,
    topics: ['Business growth', 'Strategy', 'Marketing', 'E-commerce'],
    concepts: ['Competitive advantage', 'Differentiation', 'Business model', 'Diversification', 'Market share'],
    calculationOpportunities: [
      'Calculate revenue per subscriber',
      'Calculate percentage growth in subscribers',
      'Calculate content spend as % of revenue'
    ],
    analysisPoints: [
      'First-mover advantage in streaming',
      'Risks of high content spending',
      'Impact of competition on pricing strategy',
      'Stakeholder conflicts (shareholders vs content creators)'
    ]
  },
  {
    id: 'primark-operations',
    type: 'case_study',
    company: 'Primark',
    title: 'Primark Operations and Strategy',
    source: 'Associated British Foods Annual Report',
    year: 2024,
    content: `Primark Case Study: Fast Fashion Success

Company Overview:
- Owner: Associated British Foods (ABF)
- Founded: Dublin, 1969
- Stores (2024): 430+ across 16 countries
- Employees: 80,000+
- Annual revenue: £9.0 billion

Business Model - Key Features:
1. NO online shopping - physical stores only
2. Low prices through: bulk buying, minimal advertising, simple store design
3. High volume, low margin strategy
4. Fast fashion - quick response to trends

Operational Data:
| Metric                    | Value        |
|---------------------------|--------------|
| Average selling price     | £4.50        |
| Gross profit margin       | 10.5%        |
| Store size (average)      | 34,000 sq ft |
| Sales per sq ft           | £265         |
| Stock turnover            | 12x per year |

Recent Developments:
- 2023: Launched click-and-collect trial
- Sustainability targets: 100% sustainable cotton by 2027
- Expansion focus: USA market (now 22 stores)`,
    topics: ['Operations management', 'Marketing', 'Business growth', 'Stakeholders'],
    concepts: ['Economies of scale', 'Cost leadership', 'Supply chain', 'Operations efficiency', 'CSR'],
    calculationOpportunities: [
      'Calculate total revenue from sales per sq ft',
      'Calculate gross profit',
      'Calculate number of stock rotations'
    ],
    analysisPoints: [
      'Why no e-commerce strategy works',
      'Sustainability vs low cost model tension',
      'Impact of fast fashion criticism',
      'Expansion risks in USA market'
    ]
  },
  {
    id: 'greggs-growth',
    type: 'case_study',
    company: 'Greggs',
    title: 'Greggs Transformation and Growth',
    source: 'Greggs Annual Reports',
    year: 2024,
    content: `Greggs Case Study: High Street Success Story

Company Background:
- Founded: 1939, Newcastle
- Stores (2024): 2,500+
- Employees: 32,000
- Listed on London Stock Exchange

Strategic Transformation (2013-present):
- Repositioned from bakery to food-on-the-go
- Extended opening hours (evenings)
- Introduced healthier options
- Launched vegan range (Vegan Sausage Roll - 2019)
- Digital loyalty app: 10 million users

Financial Performance:
| Year | Revenue (£m) | Pre-tax Profit (£m) | Like-for-like Sales |
|------|--------------|---------------------|---------------------|
| 2019 | 1,168        | 114.2               | +9.2%               |
| 2020 | 811          | (13.7)              | -36.2%              |
| 2021 | 1,230        | 145.6               | +5.3%               |
| 2022 | 1,513        | 148.3               | +21.3%              |
| 2023 | 1,810        | 188.3               | +13.7%              |

Target: 3,000 UK stores by 2026
Current average transaction: £3.80`,
    topics: ['Business growth', 'Marketing', 'Finance', 'Strategy'],
    concepts: ['Market repositioning', 'Product development', 'Brand extension', 'Like-for-like sales'],
    calculationOpportunities: [
      'Calculate profit margin',
      'Calculate revenue per store',
      'Calculate percentage change in profit'
    ],
    analysisPoints: [
      'Successful transformation strategy',
      'Impact of vegan range on brand image',
      'Recovery from COVID-19',
      'Competition from coffee chains'
    ]
  },
  {
    id: 'jd-sports-international',
    type: 'case_study',
    company: 'JD Sports',
    title: 'JD Sports International Expansion',
    source: 'JD Sports Fashion plc Annual Reports',
    year: 2024,
    content: `JD Sports Case Study: Global Sports Retail

Company Overview:
- Founded: 1981, Bury
- Market cap (2024): £6.5 billion
- Stores: 3,400+ globally
- Employees: 75,000+
- Countries: 35+

Growth Strategy - Acquisition Timeline:
| Year | Acquisition          | Value    | Stores Added |
|------|---------------------|----------|--------------|
| 2016 | Finish Line (USA)   | £396m    | 660          |
| 2019 | Footasylum (UK)     | £90m     | 70           |
| 2021 | DTLR (USA)          | £362m    | 250          |
| 2022 | Courir (France)     | £520m    | 310          |

Revenue by Region (2023):
| Region            | Revenue (£m) | % of Total |
|-------------------|--------------|------------|
| UK & Ireland      | 3,200        | 32%        |
| Europe            | 3,100        | 31%        |
| North America     | 2,800        | 28%        |
| Asia Pacific      | 900          | 9%         |
| **Total**         | **10,000**   | **100%**   |

Key Success Factors:
- Exclusive product deals with Nike, Adidas
- Strong digital presence (40% of sales online)
- Premium store experience`,
    topics: ['Business growth', 'International business', 'Finance', 'Strategy'],
    concepts: ['Mergers and acquisitions', 'Organic vs inorganic growth', 'Market development', 'Globalisation'],
    calculationOpportunities: [
      'Calculate total acquisition spend',
      'Calculate revenue growth rate',
      'Calculate online sales revenue'
    ],
    analysisPoints: [
      'Acquisition vs organic growth strategy',
      'Risks of rapid international expansion',
      'Dependence on supplier relationships',
      'Integration challenges'
    ]
  }
];

// ============================================
// FINANCIAL DATA
// ============================================

export const financialData: BusinessExtract[] = [
  {
    id: 'uk-retail-performance',
    type: 'financial_data',
    title: 'UK Retail Sector Performance 2023',
    source: 'British Retail Consortium / ONS',
    year: 2023,
    content: `Figure 1: UK Retail Sales Performance

| Category          | Sales (£bn) | YoY Change | Online % |
|-------------------|-------------|------------|----------|
| Food & Grocery    | 220.5       | +7.2%      | 12%      |
| Clothing          | 58.3        | -2.1%      | 35%      |
| Electronics       | 42.1        | -8.5%      | 52%      |
| Furniture/Home    | 38.2        | -12.3%     | 28%      |
| Health & Beauty   | 24.6        | +4.8%      | 22%      |
| **Total Retail**  | **383.7**   | **+2.1%**  | **26%**  |

Key Trends:
- 16,000 retail jobs lost in 2023
- Store closures: 10,494 net closures
- Online sales peaked at 37% during pandemic, now stabilised
- Discount retailers growing (Aldi, Lidl, B&M)`,
    topics: ['External environment', 'Marketing', 'E-commerce'],
    concepts: ['Market trends', 'Online vs physical retail', 'Consumer behaviour', 'PESTLE analysis'],
    calculationOpportunities: [
      'Calculate online sales value by category',
      'Calculate total value change',
      'Calculate market share by category'
    ],
    analysisPoints: [
      'Shift to online shopping',
      'Impact of cost of living crisis',
      'Winners and losers in retail',
      'Future of physical stores'
    ]
  },
  {
    id: 'startup-failure-rates',
    type: 'financial_data',
    title: 'UK Business Survival Statistics',
    source: 'ONS Business Demography Statistics',
    year: 2023,
    content: `Figure 1: UK Business Survival Rates

| Years After Start | Survival Rate | Businesses Lost |
|-------------------|---------------|-----------------|
| 1 year            | 89.3%         | 10.7%           |
| 2 years           | 74.5%         | 25.5%           |
| 3 years           | 60.4%         | 39.6%           |
| 4 years           | 51.2%         | 48.8%           |
| 5 years           | 42.8%         | 57.2%           |

Survival Rates by Sector (5 years):
| Sector              | Survival Rate |
|---------------------|---------------|
| Health              | 55.2%         |
| Education           | 52.1%         |
| Manufacturing       | 48.3%         |
| Professional Services| 46.7%        |
| Retail              | 38.4%         |
| Hospitality         | 35.1%         |

Main Causes of Failure:
1. Cash flow problems (82%)
2. Poor management (65%)
3. Insufficient market demand (42%)
4. Competition (38%)`,
    topics: ['Enterprise', 'Business failure', 'Finance'],
    concepts: ['Business survival', 'Cash flow', 'Risk', 'Barriers to entry'],
    calculationOpportunities: [
      'Calculate failure rate',
      'Calculate probability of survival',
      'Compare sector performance'
    ],
    analysisPoints: [
      'Why most businesses fail within 5 years',
      'Importance of cash flow management',
      'Sector differences in survival',
      'Support needed for new businesses'
    ]
  },
  {
    id: 'employee-engagement',
    type: 'financial_data',
    title: 'UK Employee Engagement Statistics',
    source: 'Gallup / CIPD',
    year: 2024,
    content: `Figure 1: UK Employee Engagement and Motivation

| Metric                        | UK     | Global Average |
|-------------------------------|--------|----------------|
| Actively engaged              | 10%    | 23%            |
| Not engaged                   | 71%    | 59%            |
| Actively disengaged           | 19%    | 18%            |

Impact of Engagement on Business Performance:
| High Engagement Companies vs Low | Difference |
|---------------------------------|------------|
| Productivity                     | +17%       |
| Profitability                    | +21%       |
| Staff turnover                   | -59%       |
| Absenteeism                      | -41%       |
| Customer satisfaction            | +10%       |

Top Motivational Factors (UK Workers):
1. Fair pay and benefits (78%)
2. Work-life balance (72%)
3. Job security (68%)
4. Career development (61%)
5. Recognition (54%)

Average UK staff turnover: 15% per year
Cost to replace employee: 50-200% of annual salary`,
    topics: ['Human resources', 'Motivation', 'Leadership'],
    concepts: ['Employee engagement', 'Motivation theories', 'Staff retention', 'Productivity'],
    calculationOpportunities: [
      'Calculate cost of staff turnover',
      'Calculate productivity gains',
      'Calculate engaged workforce numbers'
    ],
    analysisPoints: [
      'UK engagement crisis',
      'Link between engagement and profit',
      'Cost of disengaged employees',
      'Strategies to improve engagement'
    ]
  }
];

// ============================================
// MARKET ANALYSIS
// ============================================

export const marketAnalysis: BusinessExtract[] = [
  {
    id: 'uk-coffee-market',
    type: 'market_analysis',
    title: 'UK Coffee Shop Market 2024',
    source: 'Allegra World Coffee Portal',
    year: 2024,
    content: `Figure 1: UK Branded Coffee Shop Market

Market Size: £4.8 billion (2024)
Total outlets: 10,200
Growth rate: 6% annually

Market Share by Chain:
| Chain           | Outlets | Market Share | Avg Transaction |
|-----------------|---------|--------------|-----------------|
| Costa Coffee    | 2,750   | 27.0%        | £5.20           |
| Starbucks       | 1,100   | 10.8%        | £5.80           |
| Caffè Nero      | 620     | 6.1%         | £4.90           |
| Pret A Manger   | 550     | 5.4%         | £6.50           |
| Greggs          | 2,500   | 24.5%        | £3.80           |
| Independents    | 2,680   | 26.2%        | £4.50           |

Consumer Trends:
- 95 million coffee shop visits per week
- Average Brit drinks 2 cups of coffee per day
- 65% prefer coffee shops offering food
- Loyalty apps used by 45% of regular customers

Growth Drivers:
- Remote working (coffee shops as "third space")
- Premium coffee culture
- Food-to-go expansion`,
    topics: ['Competition', 'Marketing', 'External environment'],
    concepts: ['Market structure', 'Market share', 'Competition', 'Consumer trends'],
    calculationOpportunities: [
      'Calculate revenue by chain',
      'Calculate concentration ratio',
      'Calculate average visits per outlet'
    ],
    analysisPoints: [
      'Highly competitive market',
      'Greggs disrupting coffee market',
      'Independents holding strong',
      'Impact of remote working'
    ]
  },
  {
    id: 'uk-fast-food-market',
    type: 'market_analysis',
    title: 'UK Fast Food Market Analysis',
    source: 'Euromonitor / NPD Group',
    year: 2024,
    content: `Figure 1: UK Quick Service Restaurant (QSR) Market

Market Value: £23.5 billion (2024)
Outlets: 47,000+
Employees: 500,000+

Market Share by Brand:
| Brand           | Revenue (£bn) | Outlets | Market Share |
|-----------------|---------------|---------|--------------|
| McDonald's      | 2.8           | 1,450   | 11.9%        |
| Greggs          | 1.8           | 2,500   | 7.7%         |
| KFC             | 1.4           | 1,000   | 6.0%         |
| Subway          | 0.9           | 2,100   | 3.8%         |
| Burger King     | 0.8           | 550     | 3.4%         |
| Domino's        | 1.6           | 1,250   | 6.8%         |
| Others          | 14.2          | 38,150  | 60.4%        |

Delivery Market:
- Food delivery worth £14 billion
- 25% of QSR sales now via delivery apps
- Average delivery order: £22.50
- Deliveroo, Just Eat, Uber Eats dominate`,
    topics: ['Competition', 'Marketing', 'Operations'],
    concepts: ['Market share', 'Oligopoly', 'Market growth', 'Distribution channels'],
    calculationOpportunities: [
      'Calculate revenue per outlet',
      'Calculate delivery market share',
      'Calculate CR4 concentration ratio'
    ],
    analysisPoints: [
      'Fragmented market structure',
      'Delivery apps changing industry',
      'McDonald\'s dominance',
      'Impact of health trends'
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export const allBusinessExtracts: BusinessExtract[] = [
  ...companyCaseStudies,
  ...financialData,
  ...marketAnalysis
];

/**
 * Find a random extract matching the given topic
 */
export function getRandomBusinessExtract(
  topicName: string,
  subtopic: string
): BusinessExtract | null {
  const keywords = [topicName, subtopic].map(k => k.toLowerCase());

  const matchingExtracts = allBusinessExtracts.filter(extract => {
    const allTags = [...extract.topics, ...extract.concepts].map(t => t.toLowerCase());
    return keywords.some(keyword =>
      allTags.some(tag => tag.includes(keyword) || keyword.includes(tag))
    );
  });

  if (matchingExtracts.length === 0) {
    const fallbackMatches = allBusinessExtracts.filter(extract => {
      const content = extract.content.toLowerCase();
      return keywords.some(k => content.includes(k));
    });

    if (fallbackMatches.length > 0) {
      return fallbackMatches[Math.floor(Math.random() * fallbackMatches.length)];
    }
    return null;
  }

  return matchingExtracts[Math.floor(Math.random() * matchingExtracts.length)];
}
