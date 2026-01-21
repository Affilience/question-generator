/**
 * Economics Extract Database
 * Real economic data, case studies, and figures for question generation
 *
 * Data sources: ONS, World Bank, IMF, Bank of England, company reports
 * All data is factual and suitable for educational use
 */

export interface EconomicExtract {
  id: string;
  type: 'data_table' | 'case_study' | 'news_article' | 'graph_data' | 'policy_document';
  title: string;
  source: string;
  year: number;
  content: string;                    // The actual data/text
  topics: string[];                   // Economic topics this relates to
  concepts: string[];                 // Economic concepts that can be tested
  calculationOpportunities?: string[]; // Calculations students could do
  analysisPoints?: string[];          // Key points for analysis
}

// ============================================
// UK MACROECONOMIC DATA
// ============================================

export const ukMacroData: EconomicExtract[] = [
  {
    id: 'uk-gdp-2019-2023',
    type: 'data_table',
    title: 'UK GDP Growth Rate 2019-2023',
    source: 'Office for National Statistics (ONS)',
    year: 2023,
    content: `Figure 1: UK Annual GDP Growth Rate (%)

| Year | GDP Growth (%) | GDP (£ billion) |
|------|----------------|-----------------|
| 2019 | 1.6            | 2,255           |
| 2020 | -9.3           | 2,045           |
| 2021 | 7.6            | 2,200           |
| 2022 | 4.3            | 2,295           |
| 2023 | 0.1            | 2,298           |

Note: 2020 shows the impact of the COVID-19 pandemic on the UK economy.`,
    topics: ['Economic growth', 'GDP', 'Macroeconomic objectives', 'Business cycle'],
    concepts: ['Recession', 'Recovery', 'Economic growth', 'Negative growth', 'Real GDP'],
    calculationOpportunities: [
      'Calculate percentage change in GDP between years',
      'Calculate the fall in GDP during pandemic',
      'Calculate average growth rate'
    ],
    analysisPoints: [
      'Impact of COVID-19 on economic output',
      'V-shaped recovery pattern',
      'Slowdown in growth by 2023',
      'Comparison with pre-pandemic levels'
    ]
  },
  {
    id: 'uk-inflation-2020-2024',
    type: 'data_table',
    title: 'UK Consumer Price Index (CPI) Inflation 2020-2024',
    source: 'Office for National Statistics (ONS)',
    year: 2024,
    content: `Figure 1: UK CPI Inflation Rate (%)

| Year  | Month    | CPI (%) | Bank of England Base Rate (%) |
|-------|----------|---------|-------------------------------|
| 2020  | December | 0.6     | 0.10                          |
| 2021  | December | 5.4     | 0.25                          |
| 2022  | October  | 11.1    | 3.00                          |
| 2023  | December | 4.0     | 5.25                          |
| 2024  | June     | 2.0     | 5.25                          |

The Bank of England's inflation target is 2%.`,
    topics: ['Inflation', 'Monetary policy', 'Interest rates', 'Cost of living'],
    concepts: ['CPI', 'Inflation target', 'Base rate', 'Demand-pull inflation', 'Cost-push inflation'],
    calculationOpportunities: [
      'Calculate real interest rate (nominal - inflation)',
      'Calculate how much purchasing power has fallen',
      'Calculate percentage point change in inflation'
    ],
    analysisPoints: [
      'Inflation exceeded target significantly in 2022',
      'Bank of England raised rates to combat inflation',
      'Time lag between rate rises and inflation falling',
      'Impact on borrowers vs savers'
    ]
  },
  {
    id: 'uk-unemployment-2019-2024',
    type: 'data_table',
    title: 'UK Unemployment Rate 2019-2024',
    source: 'Office for National Statistics (ONS)',
    year: 2024,
    content: `Figure 1: UK Labour Market Statistics

| Year | Unemployment Rate (%) | Employment Rate (%) | Economic Inactivity (%) |
|------|----------------------|--------------------|-----------------------|
| 2019 | 3.8                  | 76.2               | 20.8                  |
| 2020 | 4.6                  | 75.1               | 21.1                  |
| 2021 | 4.5                  | 75.1               | 21.3                  |
| 2022 | 3.7                  | 75.5               | 21.5                  |
| 2023 | 4.2                  | 75.7               | 21.0                  |
| 2024 | 4.4                  | 74.5               | 22.0                  |

Note: Figures are annual averages. Economic inactivity includes students, retirees, and those not seeking work.`,
    topics: ['Unemployment', 'Labour market', 'Government objectives'],
    concepts: ['Unemployment rate', 'Employment rate', 'Economic inactivity', 'Full employment', 'Natural rate of unemployment'],
    calculationOpportunities: [
      'Calculate change in unemployment',
      'Calculate the labour force from rates',
      'Calculate number unemployed from rate and population'
    ],
    analysisPoints: [
      'Impact of furlough scheme on unemployment figures',
      'Rising economic inactivity as concern',
      'Relationship between unemployment and inflation (Phillips Curve)',
      'Structural vs cyclical unemployment'
    ]
  },
  {
    id: 'uk-trade-balance-2020-2023',
    type: 'data_table',
    title: 'UK Balance of Trade 2020-2023',
    source: 'Office for National Statistics (ONS)',
    year: 2023,
    content: `Figure 1: UK Trade in Goods and Services (£ billion)

| Year | Exports | Imports | Trade Balance |
|------|---------|---------|---------------|
| 2020 | 596     | 614     | -18           |
| 2021 | 631     | 680     | -49           |
| 2022 | 772     | 858     | -86           |
| 2023 | 856     | 910     | -54           |

The UK has consistently run a trade deficit in goods, partially offset by a surplus in services.`,
    topics: ['International trade', 'Balance of payments', 'Exports and imports'],
    concepts: ['Trade deficit', 'Trade surplus', 'Current account', 'Visible and invisible trade'],
    calculationOpportunities: [
      'Calculate trade balance',
      'Calculate percentage change in exports/imports',
      'Calculate trade balance as % of GDP'
    ],
    analysisPoints: [
      'Persistent trade deficit',
      'Impact of Brexit on trade patterns',
      'Rising import costs due to weak pound',
      'Services surplus vs goods deficit'
    ]
  },
  {
    id: 'uk-gov-debt-2019-2024',
    type: 'data_table',
    title: 'UK Government Debt and Deficit',
    source: 'Office for Budget Responsibility (OBR)',
    year: 2024,
    content: `Figure 1: UK Public Sector Finances

| Year | Budget Deficit (£bn) | National Debt (£bn) | Debt as % of GDP |
|------|---------------------|--------------------|-----------------:|
| 2019 | 56                  | 1,821              | 83.9%            |
| 2020 | 317                 | 2,172              | 106.1%           |
| 2021 | 137                 | 2,365              | 105.2%           |
| 2022 | 116                 | 2,504              | 100.1%           |
| 2023 | 122                 | 2,637              | 97.6%            |

Note: 2020 deficit reflects COVID-19 pandemic spending including furlough scheme.`,
    topics: ['Government spending', 'Fiscal policy', 'National debt', 'Budget deficit'],
    concepts: ['Budget deficit', 'National debt', 'Debt to GDP ratio', 'Fiscal policy', 'Austerity'],
    calculationOpportunities: [
      'Calculate debt to GDP ratio',
      'Calculate change in national debt',
      'Calculate deficit as percentage of GDP'
    ],
    analysisPoints: [
      'Massive increase in borrowing during pandemic',
      'Sustainability of national debt',
      'Impact on future generations',
      'Trade-off between spending and debt'
    ]
  }
];

// ============================================
// BUSINESS CASE STUDIES
// ============================================

export const businessCaseStudies: EconomicExtract[] = [
  {
    id: 'tesco-market-share',
    type: 'case_study',
    title: 'UK Grocery Market Share 2024',
    source: 'Kantar Worldpanel',
    year: 2024,
    content: `Figure 1: UK Grocery Market Share (%)

| Retailer   | Market Share (%) | Change from 2023 |
|------------|------------------|------------------|
| Tesco      | 27.4             | +0.2             |
| Sainsbury's| 15.0             | -0.3             |
| Asda       | 13.8             | -0.5             |
| Aldi       | 10.2             | +0.8             |
| Morrisons  | 8.7              | -0.4             |
| Lidl       | 7.9              | +0.6             |
| Others     | 17.0             | -0.4             |

The UK grocery market is worth approximately £220 billion annually. Discount retailers Aldi and Lidl have grown significantly, while traditional supermarkets have lost market share.`,
    topics: ['Competition', 'Market structure', 'Business growth'],
    concepts: ['Market share', 'Oligopoly', 'Price competition', 'Non-price competition', 'Barriers to entry'],
    calculationOpportunities: [
      'Calculate concentration ratio (CR4)',
      'Calculate market value from share',
      'Calculate percentage point change'
    ],
    analysisPoints: [
      'Oligopoly market structure',
      'Rise of discount retailers',
      'Price vs non-price competition',
      'Impact on consumer choice'
    ]
  },
  {
    id: 'amazon-growth',
    type: 'case_study',
    title: 'Amazon UK Revenue and Employment',
    source: 'Amazon Annual Reports',
    year: 2023,
    content: `Amazon UK Performance Data

| Year | UK Revenue (£bn) | UK Employees | Warehouses |
|------|------------------|--------------|------------|
| 2019 | 13.7             | 29,500       | 17         |
| 2020 | 19.4             | 40,000       | 21         |
| 2021 | 23.6             | 55,000       | 28         |
| 2022 | 26.9             | 70,000       | 30         |
| 2023 | 29.5             | 75,000       | 33         |

Amazon has invested over £50 billion in the UK since 2010. The company pays the Real Living Wage of £12.00 per hour to all employees.`,
    topics: ['Business growth', 'Employment', 'E-commerce', 'Market dominance'],
    concepts: ['Economies of scale', 'Market power', 'Employment', 'Investment', 'Living wage'],
    calculationOpportunities: [
      'Calculate percentage growth in revenue',
      'Calculate revenue per employee',
      'Calculate annual wage bill'
    ],
    analysisPoints: [
      'Rapid growth during pandemic',
      'Job creation benefits',
      'Concerns about market dominance',
      'Impact on high street retailers'
    ]
  },
  {
    id: 'minimum-wage-history',
    type: 'data_table',
    title: 'UK National Minimum/Living Wage 2019-2024',
    source: 'UK Government',
    year: 2024,
    content: `Figure 1: National Living Wage (21 and over) per hour

| Year | NLW Rate | % Increase | Median Hourly Wage |
|------|----------|------------|-------------------|
| 2019 | £8.21    | 4.9%       | £14.31            |
| 2020 | £8.72    | 6.2%       | £14.90            |
| 2021 | £8.91    | 2.2%       | £15.09            |
| 2022 | £9.50    | 6.6%       | £15.65            |
| 2023 | £10.42   | 9.7%       | £16.21            |
| 2024 | £11.44   | 9.8%       | £17.10            |

The government aims for the NLW to reach two-thirds of median earnings by 2024.`,
    topics: ['Labour market', 'Wages', 'Government intervention', 'Income distribution'],
    concepts: ['Minimum wage', 'Living wage', 'Labour market intervention', 'Unemployment effects'],
    calculationOpportunities: [
      'Calculate annual earnings at NLW',
      'Calculate NLW as percentage of median',
      'Calculate real wage change (adjusting for inflation)'
    ],
    analysisPoints: [
      'Impact on business costs',
      'Effect on employment levels',
      'Reducing income inequality',
      'Regional variations in impact'
    ]
  },
  {
    id: 'energy-prices-2022',
    type: 'case_study',
    title: 'UK Energy Price Crisis 2022-2023',
    source: 'Ofgem / UK Government',
    year: 2023,
    content: `Figure 1: UK Energy Price Cap (Average Annual Bill)

| Period         | Price Cap | % Change from Previous |
|----------------|-----------|------------------------|
| Oct 2021       | £1,277    | -                      |
| Apr 2022       | £1,971    | +54%                   |
| Oct 2022       | £2,500*   | +27%                   |
| Jan 2023       | £2,500*   | 0%                     |
| Apr 2023       | £2,500*   | 0%                     |
| Jul 2023       | £2,074    | -17%                   |
| Oct 2023       | £1,834    | -12%                   |

*Government Energy Price Guarantee limited bills

The government spent approximately £40 billion on the Energy Price Guarantee scheme to protect households from the full impact of rising wholesale gas prices.`,
    topics: ['Market failure', 'Government intervention', 'Inflation', 'Cost of living'],
    concepts: ['Price cap', 'Subsidy', 'Market failure', 'External shocks', 'Government intervention'],
    calculationOpportunities: [
      'Calculate percentage increase in energy costs',
      'Calculate cost of government subsidy per household',
      'Calculate impact on household budgets'
    ],
    analysisPoints: [
      'Causes of the energy crisis (Ukraine war, supply issues)',
      'Government intervention to limit prices',
      'Cost to taxpayers',
      'Impact on different income groups'
    ]
  },
  {
    id: 'interest-rate-mortgages',
    type: 'data_table',
    title: 'UK Interest Rates and Mortgage Costs',
    source: 'Bank of England / UK Finance',
    year: 2024,
    content: `Figure 1: Bank of England Base Rate and Average Mortgage Rates

| Date     | Base Rate | 2-Year Fixed | 5-Year Fixed | Monthly Payment* |
|----------|-----------|--------------|--------------|------------------|
| Jan 2022 | 0.25%     | 1.89%        | 2.04%        | £891             |
| Dec 2022 | 3.50%     | 5.79%        | 5.48%        | £1,352           |
| Dec 2023 | 5.25%     | 5.12%        | 4.72%        | £1,256           |
| Jun 2024 | 5.25%     | 4.85%        | 4.48%        | £1,198           |

*Monthly payment on £200,000 mortgage over 25 years at average 2-year fixed rate`,
    topics: ['Interest rates', 'Monetary policy', 'Housing market'],
    concepts: ['Base rate', 'Monetary policy', 'Transmission mechanism', 'Mortgages'],
    calculationOpportunities: [
      'Calculate monthly payment increase',
      'Calculate annual interest cost change',
      'Calculate impact on disposable income'
    ],
    analysisPoints: [
      'Why Bank of England raised rates',
      'Time lag in policy transmission',
      'Winners and losers from rate changes',
      'Impact on housing market'
    ]
  }
];

// ============================================
// INTERNATIONAL ECONOMICS DATA
// ============================================

export const internationalData: EconomicExtract[] = [
  {
    id: 'world-gdp-comparison',
    type: 'data_table',
    title: 'World\'s Largest Economies 2023',
    source: 'World Bank / IMF',
    year: 2023,
    content: `Figure 1: World's Largest Economies by GDP (US$ trillion)

| Rank | Country       | GDP ($tn) | GDP per Capita ($) | Population (m) |
|------|---------------|-----------|--------------------:|---------------:|
| 1    | USA           | 26.9      | 80,030              | 336            |
| 2    | China         | 17.7      | 12,541              | 1,411          |
| 3    | Germany       | 4.4       | 52,824              | 83             |
| 4    | Japan         | 4.2       | 33,815              | 124            |
| 5    | India         | 3.7       | 2,612               | 1,417          |
| 6    | UK            | 3.3       | 48,913              | 67             |
| 7    | France        | 3.0       | 44,408              | 68             |

Note: China has the largest GDP when measured by Purchasing Power Parity (PPP).`,
    topics: ['Economic growth', 'International trade', 'Development', 'Globalisation'],
    concepts: ['GDP', 'GDP per capita', 'Standard of living', 'Developed vs developing'],
    calculationOpportunities: [
      'Calculate GDP per capita',
      'Calculate UK GDP as percentage of US',
      'Compare growth rates'
    ],
    analysisPoints: [
      'Difference between total GDP and living standards',
      'China\'s economic rise',
      'India as emerging economy',
      'Limitations of GDP as welfare measure'
    ]
  },
  {
    id: 'uk-trade-partners',
    type: 'data_table',
    title: 'UK Top Trading Partners 2023',
    source: 'Office for National Statistics',
    year: 2023,
    content: `Figure 1: UK Trade in Goods by Partner Country (£ billion)

| Country     | Exports | Imports | Balance |
|-------------|---------|---------|---------|
| USA         | 60.2    | 53.8    | +6.4    |
| Germany     | 32.5    | 67.1    | -34.6   |
| Netherlands | 30.8    | 47.2    | -16.4   |
| France      | 26.1    | 32.4    | -6.3    |
| China       | 18.4    | 63.5    | -45.1   |
| Ireland     | 26.3    | 20.1    | +6.2    |
| EU Total    | 164.2   | 253.5   | -89.3   |

Note: The EU remains the UK's largest trading partner despite Brexit.`,
    topics: ['International trade', 'Balance of payments', 'Brexit', 'Globalisation'],
    concepts: ['Trade balance', 'Trade deficit', 'Trading partners', 'Trade agreements'],
    calculationOpportunities: [
      'Calculate trade balance with each country',
      'Calculate total EU trade',
      'Calculate percentage of trade with EU'
    ],
    analysisPoints: [
      'Significance of EU trade relationship',
      'Trade deficit with China and Germany',
      'Impact of Brexit on trade patterns',
      'Importance of services trade'
    ]
  },
  {
    id: 'exchange-rates-2022-2024',
    type: 'data_table',
    title: 'Pound Sterling Exchange Rates',
    source: 'Bank of England',
    year: 2024,
    content: `Figure 1: GBP Exchange Rates Against Major Currencies

| Date     | GBP/USD | GBP/EUR | Event                        |
|----------|---------|---------|------------------------------|
| Jan 2022 | 1.35    | 1.20    | Pre-Ukraine war              |
| Sep 2022 | 1.08    | 1.12    | Mini-budget crisis           |
| Dec 2022 | 1.21    | 1.13    | Post mini-budget recovery    |
| Dec 2023 | 1.27    | 1.15    | Inflation falling            |
| Jun 2024 | 1.26    | 1.18    | Current                      |

The pound fell to a record low against the dollar in September 2022 following the government's mini-budget announcement.`,
    topics: ['Exchange rates', 'International trade', 'Monetary policy'],
    concepts: ['Exchange rate', 'Depreciation', 'Appreciation', 'Floating exchange rate'],
    calculationOpportunities: [
      'Calculate percentage depreciation/appreciation',
      'Convert prices between currencies',
      'Calculate impact on import/export prices'
    ],
    analysisPoints: [
      'Causes of exchange rate movements',
      'Impact of mini-budget on confidence',
      'Winners and losers from weak pound',
      'Relationship between interest rates and exchange rates'
    ]
  }
];

// ============================================
// MARKET DATA
// ============================================

export const marketData: EconomicExtract[] = [
  {
    id: 'petrol-prices-2022',
    type: 'data_table',
    title: 'UK Petrol Prices 2021-2024',
    source: 'RAC / BEIS',
    year: 2024,
    content: `Figure 1: Average UK Petrol Price (pence per litre)

| Month    | Petrol (ppl) | Diesel (ppl) | Crude Oil ($/barrel) |
|----------|--------------|--------------|----------------------|
| Jan 2021 | 118.9        | 122.1        | 55                   |
| Jun 2021 | 131.2        | 133.5        | 75                   |
| Jan 2022 | 145.5        | 149.9        | 86                   |
| Jun 2022 | 191.5        | 199.1        | 117                  |
| Jan 2023 | 148.2        | 170.5        | 83                   |
| Jan 2024 | 139.8        | 149.5        | 78                   |

Government fuel duty is 52.95p per litre plus 20% VAT on the total.`,
    topics: ['Supply and demand', 'Price determination', 'Indirect taxes'],
    concepts: ['Supply shocks', 'Derived demand', 'Indirect tax', 'Price elasticity of demand'],
    calculationOpportunities: [
      'Calculate percentage price increase',
      'Calculate tax as percentage of price',
      'Calculate price elasticity of demand'
    ],
    analysisPoints: [
      'Link between crude oil and pump prices',
      'Impact of Ukraine war on supply',
      'Effect of fuel duty on prices',
      'Inelastic demand for necessities'
    ]
  },
  {
    id: 'house-prices-uk',
    type: 'data_table',
    title: 'UK House Prices 2019-2024',
    source: 'Halifax / Nationwide',
    year: 2024,
    content: `Figure 1: UK Average House Prices

| Year | Average Price | Annual Change (%) | Price-to-Earnings Ratio |
|------|---------------|-------------------|------------------------|
| 2019 | £231,000      | 0.8%              | 7.8                    |
| 2020 | £249,000      | 7.8%              | 8.1                    |
| 2021 | £273,000      | 9.6%              | 8.7                    |
| 2022 | £290,000      | 6.2%              | 8.9                    |
| 2023 | £281,000      | -3.1%             | 8.5                    |
| 2024 | £288,000      | 2.5%              | 8.4                    |

First-time buyers face average prices of £225,000 and typically need deposits of £45,000 (20%).`,
    topics: ['Housing market', 'Supply and demand', 'Interest rates', 'Market failure'],
    concepts: ['Supply and demand', 'Affordability', 'Interest rates effect', 'Market failure'],
    calculationOpportunities: [
      'Calculate deposit needed',
      'Calculate monthly mortgage payment',
      'Calculate income needed for mortgage'
    ],
    analysisPoints: [
      'Housing affordability crisis',
      'Impact of low interest rates on prices',
      'Supply constraints',
      'Government interventions (Help to Buy)'
    ]
  },
  {
    id: 'smartphone-market',
    type: 'data_table',
    title: 'Global Smartphone Market Share 2023',
    source: 'IDC / Counterpoint Research',
    year: 2023,
    content: `Figure 1: Global Smartphone Market Share by Vendor (%)

| Vendor   | Market Share | Units Sold (m) | Average Price ($) |
|----------|--------------|----------------|-------------------|
| Apple    | 20.1%        | 234            | 988               |
| Samsung  | 19.4%        | 226            | 295               |
| Xiaomi   | 12.5%        | 146            | 185               |
| OPPO     | 8.8%         | 103            | 215               |
| vivo     | 8.1%         | 94             | 225               |
| Others   | 31.1%        | 363            | 175               |

Total market: 1.17 billion units, valued at $484 billion. Apple captures 50%+ of industry profits despite 20% market share.`,
    topics: ['Competition', 'Market structure', 'Product differentiation'],
    concepts: ['Market share', 'Oligopoly', 'Product differentiation', 'Price vs non-price competition'],
    calculationOpportunities: [
      'Calculate revenue from market share and average price',
      'Calculate concentration ratio',
      'Compare revenue vs market share'
    ],
    analysisPoints: [
      'Oligopoly market structure',
      'Apple\'s premium pricing strategy',
      'Product differentiation',
      'Barriers to entry'
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

// Combine all extracts
export const allEconomicExtracts: EconomicExtract[] = [
  ...ukMacroData,
  ...businessCaseStudies,
  ...internationalData,
  ...marketData
];

/**
 * Find a random extract matching the given topic and subtopic
 */
export function getRandomEconomicExtract(
  topicName: string,
  subtopic: string
): EconomicExtract | null {
  // Keywords to match
  const keywords = [topicName, subtopic].map(k => k.toLowerCase());

  // Filter extracts that match any keyword in topics or concepts
  const matchingExtracts = allEconomicExtracts.filter(extract => {
    const allTags = [...extract.topics, ...extract.concepts].map(t => t.toLowerCase());
    return keywords.some(keyword =>
      allTags.some(tag => tag.includes(keyword) || keyword.includes(tag))
    );
  });

  if (matchingExtracts.length === 0) {
    // Fallback: return any extract that's somewhat relevant
    const fallbackMatches = allEconomicExtracts.filter(extract => {
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

/**
 * Get all extracts for a specific type
 */
export function getExtractsByType(type: EconomicExtract['type']): EconomicExtract[] {
  return allEconomicExtracts.filter(e => e.type === type);
}

/**
 * Get all extracts related to a specific topic
 */
export function getExtractsForTopic(topic: string): EconomicExtract[] {
  const lowerTopic = topic.toLowerCase();
  return allEconomicExtracts.filter(extract =>
    extract.topics.some(t => t.toLowerCase().includes(lowerTopic)) ||
    extract.concepts.some(c => c.toLowerCase().includes(lowerTopic))
  );
}
