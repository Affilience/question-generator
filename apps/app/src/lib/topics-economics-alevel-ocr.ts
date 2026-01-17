// OCR A-Level Economics (H460) Topics
// Based on the official OCR specification
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2019/
// H460/01: Microeconomics (105 marks)
// H460/02: Macroeconomics (105 marks)
// H460/03: Themes in Economics - Synoptic (90 marks)

import { Topic } from '@/types';

export const ocrALevelEconomicsTopics: Topic[] = [
  // ============================================================================
  // COMPONENT 1: MICROECONOMICS (H460/01)
  // ============================================================================

  // 1. Scarcity and choice
  {
    id: 'scarcity',
    examBoard: 'ocr',
    name: 'Scarcity and Choice',
    description: 'The economic problem, resource allocation, and opportunity cost',
    icon: '⚖️',
    color: 'bg-blue-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Nature of economics
      'Positive statements',
      'Normative statements',
      'Role of value judgements',
      // Economic problem
      'Scarcity',
      'Unlimited wants',
      'Limited resources',
      'Choice',
      'Opportunity cost',
      // Factors of production
      'Land',
      'Labour',
      'Capital',
      'Enterprise',
      // Production possibility frontiers
      'PPF diagram',
      'Points on PPF',
      'Points inside PPF',
      'Points outside PPF',
      'Shifts in PPF',
      'PPF and opportunity cost',
      'PPF and economic efficiency',
      // Economic systems
      'Market economy',
      'Mixed economy',
      'Command economy',
      'Role of price mechanism',
    ],
  },

  // 2. How competitive markets work
  {
    id: 'competitive-markets',
    examBoard: 'ocr',
    name: 'How Competitive Markets Work',
    description: 'Demand, supply, price determination, and elasticity',
    icon: '📈',
    color: 'bg-green-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Demand
      'Law of demand',
      'Individual demand',
      'Market demand',
      'Demand curve',
      'Movement along demand curve',
      'Shift of demand curve',
      'Conditions of demand',
      'Income',
      'Prices of other goods',
      'Tastes and preferences',
      'Population',
      'Advertising',
      // Supply
      'Law of supply',
      'Individual supply',
      'Market supply',
      'Supply curve',
      'Movement along supply curve',
      'Shift of supply curve',
      'Conditions of supply',
      'Costs of production',
      'Technology',
      'Taxes',
      'Subsidies',
      'Number of firms',
      // Price determination
      'Market equilibrium',
      'Equilibrium price',
      'Equilibrium quantity',
      'Excess demand',
      'Excess supply',
      'Changes in equilibrium',
      // Consumer and producer surplus
      'Consumer surplus',
      'Producer surplus',
      'Changes in surplus',
      // Elasticity of demand
      'Price elasticity of demand (PED)',
      'Calculating PED',
      'Interpreting PED values',
      'Elastic demand',
      'Inelastic demand',
      'Unit elastic',
      'Factors affecting PED',
      'PED and total revenue',
      'Income elasticity of demand (YED)',
      'Calculating YED',
      'Normal goods',
      'Inferior goods',
      'Necessities',
      'Luxuries',
      'Cross elasticity of demand (XED)',
      'Calculating XED',
      'Substitutes',
      'Complements',
      // Elasticity of supply
      'Price elasticity of supply (PES)',
      'Calculating PES',
      'Factors affecting PES',
      'Time period',
      'Stocks',
      'Spare capacity',
    ],
  },

  // 3. Market failure and government intervention
  {
    id: 'market-failure',
    examBoard: 'ocr',
    name: 'Market Failure and Government Intervention',
    description: 'Types of market failure and corrective policies',
    icon: '⚠️',
    color: 'bg-red-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Market failure
      'Definition of market failure',
      'Resource misallocation',
      // Externalities
      'Private costs',
      'External costs',
      'Social costs',
      'Private benefits',
      'External benefits',
      'Social benefits',
      'Marginal social cost (MSC)',
      'Marginal social benefit (MSB)',
      'Negative externalities of consumption',
      'Negative externalities of production',
      'Positive externalities of consumption',
      'Positive externalities of production',
      'Welfare loss',
      'Deadweight loss',
      // Public goods
      'Characteristics of public goods',
      'Non-excludability',
      'Non-rivalry',
      'Free rider problem',
      'Under-provision',
      'Examples of public goods',
      // Information failure
      'Symmetric information',
      'Asymmetric information',
      'Moral hazard',
      'Adverse selection',
      // Merit and demerit goods
      'Merit goods',
      'Under-consumption',
      'Demerit goods',
      'Over-consumption',
      // Labour immobility
      'Occupational immobility',
      'Geographical immobility',
      // Government intervention
      'Indirect taxes',
      'Specific taxes',
      'Ad valorem taxes',
      'Tax incidence',
      'Effect on market',
      'Subsidies',
      'Effect of subsidies',
      'Maximum prices',
      'Minimum prices',
      'Buffer stocks',
      'Tradable pollution permits',
      'State provision',
      'Regulation',
      'Information provision',
      // Government failure
      'Definition of government failure',
      'Information problems',
      'Unintended consequences',
      'Administrative costs',
      'Market distortions',
      'Regulatory capture',
    ],
  },

  // 4. Firms and the market structures
  {
    id: 'firms',
    examBoard: 'ocr',
    name: 'Firms and Market Structures',
    description: 'Costs, revenues, profits, and market structures',
    icon: '🏢',
    color: 'bg-purple-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Business objectives
      'Profit maximisation',
      'MC = MR rule',
      'Revenue maximisation',
      'MR = 0',
      'Sales maximisation',
      'AC = AR',
      'Satisficing',
      // Production
      'Short run',
      'Long run',
      'Law of diminishing returns',
      'Total product',
      'Average product',
      'Marginal product',
      // Costs
      'Fixed costs',
      'Variable costs',
      'Total costs',
      'Average costs',
      'Marginal costs',
      'Short-run cost curves',
      'Relationship between AC and MC',
      // Long-run costs
      'Long-run average cost curve',
      'Economies of scale',
      'Internal economies of scale',
      'Technical',
      'Purchasing',
      'Managerial',
      'Financial',
      'Marketing',
      'Risk-bearing',
      'External economies of scale',
      'Diseconomies of scale',
      'Minimum efficient scale',
      // Revenue
      'Total revenue',
      'Average revenue',
      'Marginal revenue',
      // Profit
      'Normal profit',
      'Supernormal profit (abnormal profit)',
      'Profit calculation',
      // Perfect competition
      'Assumptions',
      'Many firms',
      'Homogeneous products',
      'Perfect knowledge',
      'No barriers to entry/exit',
      'Price taker',
      'Short-run equilibrium',
      'Long-run equilibrium',
      'Efficiency in perfect competition',
      // Monopoly
      'Features of monopoly',
      'Barriers to entry',
      'Sources of monopoly power',
      'Monopoly equilibrium',
      'Deadweight loss from monopoly',
      // Monopolistic competition
      'Features',
      'Product differentiation',
      'Short-run equilibrium',
      'Long-run equilibrium',
      // Oligopoly
      'Features of oligopoly',
      'Concentration ratio',
      'Interdependence',
      'Kinked demand curve',
      'Price rigidity',
      'Non-price competition',
      'Collusion',
      'Cartels',
      'Tacit collusion',
      'Game theory',
      "Prisoner's dilemma",
      // Contestable markets
      'Contestability',
      'Low sunk costs',
      'Hit and run competition',
      'Implications',
      // Price discrimination
      'First degree',
      'Second degree',
      'Third degree',
      'Conditions for price discrimination',
      // Efficiency
      'Allocative efficiency',
      'Productive efficiency',
      'Dynamic efficiency',
      'X-inefficiency',
      // Natural monopoly
      'Features of natural monopoly',
      'Regulation options',
      // Business growth
      'Organic growth',
      'External growth',
      'Horizontal integration',
      'Vertical integration',
      'Conglomerate integration',
      'Reasons for growth',
      'Constraints on growth',
    ],
  },

  // 5. The labour market
  {
    id: 'labour',
    examBoard: 'ocr',
    name: 'The Labour Market',
    description: 'Labour demand, supply, wages, and market imperfections',
    icon: '👷',
    color: 'bg-cyan-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Demand for labour
      'Derived demand',
      'Marginal revenue product (MRP)',
      'MRP = MPP × MR',
      'MRP as demand for labour',
      'Factors affecting labour demand',
      // Supply of labour
      'Individual labour supply',
      'Income effect',
      'Substitution effect',
      'Backward bending supply curve',
      'Market labour supply',
      'Factors affecting supply',
      'Wage rate',
      'Working conditions',
      'Qualifications',
      // Wage determination
      'Competitive labour market',
      'Equilibrium wage',
      'Wage differentials',
      'Compensating differentials',
      // Labour market imperfections
      'Monopsony',
      'Characteristics of monopsony',
      'Monopsony equilibrium',
      'Effect on wages',
      // Trade unions
      'Role of trade unions',
      'Collective bargaining',
      'Effect on wages',
      'Effect on employment',
      // Bilateral monopoly
      'Trade union facing monopsony',
      'Wage determination',
      // Government intervention
      'National Minimum Wage',
      'National Living Wage',
      'Effects of minimum wage',
      'On employment',
      'On poverty',
      // Discrimination
      'Labour market discrimination',
      'Gender pay gap',
      'Ethnic pay gap',
    ],
  },

  // 6. Distribution of income and wealth
  {
    id: 'distribution',
    examBoard: 'ocr',
    name: 'Distribution of Income and Wealth',
    description: 'Inequality, poverty, and redistribution policies',
    icon: '⚖️',
    color: 'bg-emerald-500',
    paperRestriction: 'Component 1',
    subtopics: [
      // Income and wealth
      'Definition of income',
      'Sources of income',
      'Definition of wealth',
      'Difference between income and wealth',
      // Inequality
      'Income distribution',
      'Wealth distribution',
      'Lorenz curve',
      'Gini coefficient',
      'Causes of inequality',
      'Consequences of inequality',
      // Poverty
      'Absolute poverty',
      'Relative poverty',
      'Causes of poverty',
      'Poverty trap',
      // Government policies
      'Progressive taxation',
      'Transfer payments',
      'State benefits',
      'Universal vs means-tested',
      'Minimum wage',
      'Public services',
    ],
  },

  // ============================================================================
  // COMPONENT 2: MACROECONOMICS (H460/02)
  // ============================================================================

  // 7. Aggregate demand and aggregate supply
  {
    id: 'ad-as',
    examBoard: 'ocr',
    name: 'Aggregate Demand and Aggregate Supply',
    description: 'AD/AS model, components of AD, and AS analysis',
    icon: '📊',
    color: 'bg-indigo-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Circular flow
      'Circular flow of income',
      'Injections',
      'Investment',
      'Government spending',
      'Exports',
      'Withdrawals',
      'Savings',
      'Taxation',
      'Imports',
      // Aggregate demand
      'Components of AD',
      'AD = C + I + G + (X - M)',
      'AD curve',
      'Shifts in AD',
      // Consumption
      'Consumption function',
      'APC',
      'MPC',
      'Determinants of consumption',
      'Wealth effect',
      'Interest rates',
      'Confidence',
      // Savings
      'Saving',
      'APS',
      'MPS',
      'Determinants of saving',
      // Investment
      'Gross vs net investment',
      'Determinants of investment',
      'Interest rates',
      'Business confidence',
      'Animal spirits',
      'Corporation tax',
      'Accelerator',
      // Government spending
      'Current expenditure',
      'Capital expenditure',
      // Net exports
      'Exchange rates',
      'World income',
      // Aggregate supply
      'Short-run aggregate supply (SRAS)',
      'Shifts in SRAS',
      'Long-run aggregate supply (LRAS)',
      'Classical view',
      'Keynesian view',
      'Shifts in LRAS',
      // Equilibrium
      'Macroeconomic equilibrium',
      'Changes in equilibrium',
      'Demand-side shocks',
      'Supply-side shocks',
    ],
  },

  // 8. Economic growth and development
  {
    id: 'growth',
    examBoard: 'ocr',
    name: 'Economic Growth and Development',
    description: 'Causes, measurement, and consequences of growth',
    icon: '🚀',
    color: 'bg-amber-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Measuring growth
      'GDP',
      'Real vs nominal GDP',
      'GDP per capita',
      'Output method',
      'Income method',
      'Expenditure method',
      'Limitations of GDP',
      // Types of growth
      'Short-run growth',
      'Long-run growth',
      'Actual growth',
      'Potential growth',
      'Trend rate of growth',
      'Output gap',
      // Business cycle
      'Boom',
      'Recession',
      'Slump',
      'Recovery',
      'Causes of business cycle',
      // Causes of growth
      'Increases in AD',
      'Increases in LRAS',
      'Investment',
      'Human capital',
      'Technology',
      'Productivity',
      // Benefits of growth
      'Higher living standards',
      'Employment',
      'Tax revenue',
      // Costs of growth
      'Inflation',
      'Current account deterioration',
      'Environmental damage',
      'Inequality',
      'Sustainability',
      // Other measures of welfare
      'Human Development Index (HDI)',
      'Genuine Progress Indicator',
      'Happiness measures',
    ],
  },

  // 9. Inflation and deflation
  {
    id: 'inflation',
    examBoard: 'ocr',
    name: 'Inflation and Deflation',
    description: 'Causes, measurement, and consequences of inflation',
    icon: '💹',
    color: 'bg-rose-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Measuring inflation
      'Consumer Price Index (CPI)',
      'CPIH',
      'Retail Price Index (RPI)',
      'Construction of price indices',
      'Basket of goods',
      'Weightings',
      'Limitations of CPI',
      // Causes of inflation
      'Demand-pull inflation',
      'Excess demand',
      'Cost-push inflation',
      'Rising costs',
      'Imported inflation',
      'Exchange rate depreciation',
      'Money supply growth',
      'Expectations',
      'Wage-price spiral',
      // Consequences of inflation
      'Redistribution effects',
      'Menu costs',
      'Shoe leather costs',
      'Uncertainty',
      'International competitiveness',
      'Fiscal drag',
      'Investment effects',
      'Winners and losers',
      // Deflation
      'Causes of deflation',
      'Demand-side deflation',
      'Supply-side deflation',
      'Consequences of deflation',
      'Debt deflation',
      'Postponed consumption',
    ],
  },

  // 10. Employment and unemployment
  {
    id: 'unemployment',
    examBoard: 'ocr',
    name: 'Employment and Unemployment',
    description: 'Types, causes, and consequences of unemployment',
    icon: '👥',
    color: 'bg-orange-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Measuring unemployment
      'Labour force',
      'Employment rate',
      'Unemployment rate',
      'Claimant count',
      'Labour Force Survey',
      'Limitations of measures',
      'Hidden unemployment',
      'Under-employment',
      // Types of unemployment
      'Frictional unemployment',
      'Structural unemployment',
      'Cyclical unemployment',
      'Seasonal unemployment',
      'Real wage unemployment',
      'Voluntary unemployment',
      // Natural rate of unemployment
      'NAIRU',
      'Determinants of natural rate',
      // Causes of unemployment
      'Demand deficiency',
      'Real wage rigidity',
      'Labour market imperfections',
      // Consequences of unemployment
      'Individual consequences',
      'Economic consequences',
      'Social consequences',
      'Output loss',
      'Tax revenue loss',
      'Government spending increase',
      'Hysteresis',
    ],
  },

  // 11. Balance of payments and exchange rates
  {
    id: 'balance',
    examBoard: 'ocr',
    name: 'Balance of Payments and Exchange Rates',
    description: 'Current account, exchange rates, and international competitiveness',
    icon: '🌐',
    color: 'bg-teal-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Balance of payments
      'Current account',
      'Trade in goods',
      'Trade in services',
      'Primary income',
      'Secondary income',
      'Capital account',
      'Financial account',
      'Balance of payments equilibrium',
      // Current account imbalances
      'Current account deficit',
      'Current account surplus',
      'Causes of deficit',
      'Causes of surplus',
      'Consequences of deficit',
      'Consequences of surplus',
      'Policies to correct deficit',
      // Exchange rates
      'Exchange rate determination',
      'Floating exchange rates',
      'Currency demand',
      'Currency supply',
      'Fixed exchange rates',
      'Managed float',
      'Appreciation',
      'Depreciation',
      // Factors affecting exchange rates
      'Interest rates',
      'Inflation differentials',
      'Speculation',
      'Foreign direct investment',
      'Current account balance',
      'Government intervention',
      // Effects of exchange rate changes
      'Effect on exports',
      'Effect on imports',
      'Effect on inflation',
      'Effect on economic growth',
      'Marshall-Lerner condition',
      'J-curve effect',
      // International competitiveness
      'Factors affecting competitiveness',
      'Productivity',
      'Unit labour costs',
      'Exchange rate',
      'Non-price competitiveness',
    ],
  },

  // 12. Macroeconomic policy
  {
    id: 'policy',
    examBoard: 'ocr',
    name: 'Macroeconomic Policy',
    description: 'Fiscal, monetary, and supply-side policies',
    icon: '🏛️',
    color: 'bg-violet-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Objectives
      'Economic growth',
      'Low unemployment',
      'Low and stable inflation',
      'Balance of payments equilibrium',
      'Conflicts between objectives',
      // Fiscal policy
      'Definition of fiscal policy',
      'Government spending',
      'Current spending',
      'Capital spending',
      'Transfer payments',
      'Taxation',
      'Direct taxes',
      'Indirect taxes',
      'Progressive taxes',
      'Regressive taxes',
      'Proportional taxes',
      'Budget deficit',
      'Budget surplus',
      'Structural deficit',
      'Cyclical deficit',
      'National debt',
      'Debt to GDP ratio',
      'Automatic stabilisers',
      'Discretionary fiscal policy',
      'Expansionary fiscal policy',
      'Contractionary fiscal policy',
      'Crowding out',
      // Monetary policy
      'Definition of monetary policy',
      'Bank of England',
      'Monetary Policy Committee',
      'Inflation target',
      'Bank Rate',
      'Transmission mechanism',
      'Quantitative easing',
      'Forward guidance',
      'Strengths of monetary policy',
      'Weaknesses of monetary policy',
      // Supply-side policies
      'Definition of supply-side policies',
      'Market-based policies',
      'Tax cuts',
      'Deregulation',
      'Privatisation',
      'Labour market flexibility',
      'Trade union reform',
      'Interventionist policies',
      'Education and training',
      'Infrastructure investment',
      'Research and development',
      'Regional policy',
      'Evaluation of supply-side policies',
      // Multiplier
      'The multiplier',
      'Multiplier formula',
      'Factors affecting size of multiplier',
    ],
  },

  // 13. International trade
  {
    id: 'trade',
    examBoard: 'ocr',
    name: 'International Trade',
    description: 'Trade theory, trading blocs, and globalisation',
    icon: '🌍',
    color: 'bg-sky-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Benefits of trade
      'Reasons for international trade',
      'Specialisation',
      'Absolute advantage',
      'Comparative advantage',
      'Opportunity cost ratios',
      'Gains from trade',
      'Terms of trade',
      // Trade restrictions
      'Protectionism',
      'Tariffs',
      'Effect of tariffs',
      'Quotas',
      'Subsidies to domestic producers',
      'Non-tariff barriers',
      'Arguments for protectionism',
      'Infant industry',
      'Preventing dumping',
      'National security',
      'Employment protection',
      'Arguments against protectionism',
      // Trading blocs
      'Free trade area',
      'Customs union',
      'Single market',
      'Economic union',
      'Monetary union',
      'Trade creation',
      'Trade diversion',
      'World Trade Organization (WTO)',
      // Globalisation
      'Definition of globalisation',
      'Causes of globalisation',
      'Trade liberalisation',
      'Technology improvements',
      'Reduced transport costs',
      'Deregulation of finance',
      'TNCs/MNCs',
      'Benefits of globalisation',
      'Costs of globalisation',
      'Winners and losers',
    ],
  },

  // 14. Financial sector
  {
    id: 'financial',
    examBoard: 'ocr',
    name: 'The Financial Sector',
    description: 'Functions of money, banking, and financial markets',
    icon: '🏦',
    color: 'bg-pink-500',
    paperRestriction: 'Component 2',
    subtopics: [
      // Functions of money
      'Medium of exchange',
      'Store of value',
      'Unit of account',
      'Standard of deferred payment',
      // Financial markets
      'Role of financial markets',
      'Money markets',
      'Capital markets',
      'Foreign exchange markets',
      // Banking
      'Commercial banks',
      'Functions of commercial banks',
      'Investment banks',
      'Credit creation',
      'Money multiplier',
      // Central bank
      'Role of Bank of England',
      'Lender of last resort',
      'Banker to government',
      'Setting interest rates',
      'Financial stability',
      // Regulation
      'Financial regulation',
      'Capital requirements',
      'Liquidity requirements',
      // Market failure in financial sector
      'Moral hazard',
      'Asymmetric information',
      'Systemic risk',
    ],
  },
];

export function getOCRALevelEconomicsTopicById(id: string): Topic | undefined {
  return ocrALevelEconomicsTopics.find((topic) => topic.id === id);
}

export function countOCRALevelEconomicsSubtopics(): number {
  return ocrALevelEconomicsTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
