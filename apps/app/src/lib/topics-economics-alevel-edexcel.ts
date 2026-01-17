// Edexcel (Pearson) A-Level Economics A (9EC0) Topics
// Based on the official Pearson Edexcel specification
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-a-2015.html
// Paper 1: Markets and Business Behaviour (100 marks, 35%)
// Paper 2: The National and Global Economy (100 marks, 35%)
// Paper 3: Microeconomics and Macroeconomics (100 marks, 30%)

import { Topic } from '@/types';

export const edexcelALevelEconomicsTopics: Topic[] = [
  // ============================================================================
  // THEME 1: INTRODUCTION TO MARKETS AND MARKET FAILURE (Microeconomics)
  // Assessed in Paper 1 and Paper 3
  // ============================================================================

  // 1.1 Nature of economics
  {
    id: 'nature',
    examBoard: 'edexcel',
    name: 'Nature of Economics',
    description: 'Economics as a social science, positive and normative economics',
    icon: '📚',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      'Economics as a social science',
      'Positive statements',
      'Normative statements',
      'The role of value judgements',
      'Ceteris paribus',
      'Economic modelling',
    ],
  },

  // 1.2 How markets work
  {
    id: 'markets-work',
    examBoard: 'edexcel',
    name: 'How Markets Work',
    description: 'Demand, supply, price determination, and elasticities',
    icon: '📈',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Rational decision making
      'Rationality',
      'Utility maximisation',
      'Scarcity',
      'Choice',
      'Opportunity cost',
      // Demand
      'Law of demand',
      'Individual and market demand',
      'Demand curves',
      'Shifts in demand',
      'Movements along demand',
      'Factors affecting demand',
      'Income',
      'Prices of substitutes',
      'Prices of complements',
      'Tastes and preferences',
      'Advertising',
      'Demographics',
      // Price elasticity of demand
      'Definition of PED',
      'Calculating PED',
      'Interpreting PED values',
      'Elastic and inelastic demand',
      'Factors affecting PED',
      'PED and revenue',
      // Income elasticity of demand
      'Definition of YED',
      'Calculating YED',
      'Normal goods',
      'Inferior goods',
      'Necessities vs luxuries',
      // Cross elasticity of demand
      'Definition of XED',
      'Calculating XED',
      'Substitutes and complements',
      // Supply
      'Law of supply',
      'Individual and market supply',
      'Supply curves',
      'Shifts in supply',
      'Movements along supply',
      'Factors affecting supply',
      'Costs of production',
      'Technology',
      'Taxes',
      'Subsidies',
      'Price of related goods',
      // Price elasticity of supply
      'Definition of PES',
      'Calculating PES',
      'Factors affecting PES',
      'Time',
      'Spare capacity',
      'Stock availability',
      // Price determination
      'Market equilibrium',
      'Equilibrium price',
      'Equilibrium quantity',
      'Excess demand',
      'Excess supply',
      'Changes in equilibrium',
      // Functions of prices
      'Rationing',
      'Incentive',
      'Signalling',
      // Consumer and producer surplus
      'Consumer surplus',
      'Producer surplus',
      'Effect of price changes',
    ],
  },

  // 1.3 Market failure
  {
    id: 'market-failure',
    examBoard: 'edexcel',
    name: 'Market Failure',
    description: 'Types of market failure and government intervention',
    icon: '⚠️',
    color: 'bg-red-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Market failure
      'Definition of market failure',
      'Types of market failure',
      // Externalities
      'Private costs',
      'External costs',
      'Social costs',
      'Private benefits',
      'External benefits',
      'Social benefits',
      'Negative externalities',
      'Positive externalities',
      'Negative production externalities',
      'Negative consumption externalities',
      'Positive production externalities',
      'Positive consumption externalities',
      'Welfare loss diagrams',
      'Deadweight loss',
      // Public goods
      'Pure public goods',
      'Non-excludability',
      'Non-rivalry',
      'Free rider problem',
      'Under-provision',
      'Quasi-public goods',
      // Information gaps
      'Symmetric information',
      'Asymmetric information',
      'Moral hazard',
      'Adverse selection',
      // Merit and demerit goods
      'Merit goods',
      'Under-provision of merit goods',
      'Demerit goods',
      'Over-provision of demerit goods',
      // Government intervention
      'Indirect taxes',
      'Effect of taxes on markets',
      'Subsidies',
      'Effect of subsidies on markets',
      'Maximum prices',
      'Minimum prices',
      'Tradable pollution permits',
      'State provision',
      'Provision of information',
      'Regulation',
      // Government failure
      'Definition of government failure',
      'Distortion of market signals',
      'Unintended consequences',
      'Excessive administrative costs',
      'Information gaps',
    ],
  },

  // ============================================================================
  // THEME 2: THE UK ECONOMY - PERFORMANCE AND POLICIES (Macroeconomics)
  // Assessed in Paper 2 and Paper 3
  // ============================================================================

  // 2.1 Measures of economic performance
  {
    id: 'measures',
    examBoard: 'edexcel',
    name: 'Measures of Economic Performance',
    description: 'Economic indicators and measures of economic performance',
    icon: '📊',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Economic growth
      'Definition of economic growth',
      'GDP',
      'Real vs nominal GDP',
      'GDP per capita',
      'Short-run growth',
      'Long-run growth',
      'Output gap',
      'Limitations of GDP',
      // Inflation
      'Definition of inflation',
      'Deflation',
      'Disinflation',
      'Consumer Price Index (CPI)',
      'Retail Price Index (RPI)',
      'CPIH',
      'Difficulties measuring inflation',
      // Employment and unemployment
      'Labour force',
      'Unemployment rate',
      'Employment rate',
      'Claimant count',
      'Labour Force Survey (LFS)',
      'Under-employment',
      // Balance of payments
      'Current account',
      'Trade in goods',
      'Trade in services',
      'Primary income',
      'Secondary income',
      'Financial account',
      'Current account deficit/surplus',
    ],
  },

  // 2.2 Aggregate demand
  {
    id: 'ad',
    examBoard: 'edexcel',
    name: 'Aggregate Demand',
    description: 'Components and determinants of aggregate demand',
    icon: '📉',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Circular flow
      'Circular flow of income',
      'Injections',
      'Withdrawals (leakages)',
      'Equilibrium',
      // Aggregate demand
      'AD = C + I + G + (X-M)',
      'AD curve',
      'Shifts in AD',
      // Consumption
      'Consumption',
      'Disposable income',
      'Consumer confidence',
      'Interest rates and consumption',
      'Wealth effects',
      'MPC and APC',
      // Saving
      'Saving',
      'Interest rates and saving',
      'MPS and APS',
      // Investment
      'Investment',
      'Interest rates and investment',
      'Business confidence',
      'Animal spirits',
      'Corporation tax',
      'Access to credit',
      'Risk',
      // Government spending
      'Types of government spending',
      'Current spending',
      'Capital spending',
      // Net trade
      'Exports',
      'Imports',
      'Exchange rates',
      'State of world economy',
    ],
  },

  // 2.3 Aggregate supply
  {
    id: 'as',
    examBoard: 'edexcel',
    name: 'Aggregate Supply',
    description: 'Short-run and long-run aggregate supply',
    icon: '⬆️',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // SRAS
      'Short-run aggregate supply',
      'SRAS curve',
      'Shifts in SRAS',
      'Changes in costs',
      'Commodity prices',
      'Exchange rate changes',
      // LRAS
      'Long-run aggregate supply',
      'Classical LRAS',
      'Keynesian LRAS',
      'Productive potential',
      'Shifts in LRAS',
      'Quantity of factors',
      'Quality of factors',
      'Productivity',
      'Efficiency',
      'Technology',
    ],
  },

  // 2.4 National income
  {
    id: 'national-income',
    examBoard: 'edexcel',
    name: 'National Income',
    description: 'AD/AS equilibrium, the multiplier, and business cycle',
    icon: '💹',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // AD/AS equilibrium
      'Macroeconomic equilibrium',
      'Changes in equilibrium',
      'Demand-side shocks',
      'Supply-side shocks',
      // Multiplier
      'The multiplier',
      'Multiplier formula',
      '1 / (1 - MPC) or 1 / MPW',
      'Size of multiplier',
      'Factors affecting multiplier',
      'Marginal propensities',
      'Multiplier process',
      // Business cycle
      'Economic cycle',
      'Boom',
      'Recession',
      'Slump',
      'Recovery',
      'Positive output gap',
      'Negative output gap',
      'Causes of business cycle',
    ],
  },

  // 2.5 Economic growth
  {
    id: 'growth',
    examBoard: 'edexcel',
    name: 'Economic Growth',
    description: 'Causes, benefits, and costs of economic growth',
    icon: '🚀',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      'Actual vs potential growth',
      'PPF and growth',
      'Causes of growth',
      'AD-side factors',
      'AS-side factors',
      'Investment',
      'Productivity',
      'Human capital',
      'Technology',
      'Benefits of growth',
      'Living standards',
      'Employment',
      'Tax revenue',
      'Poverty reduction',
      'Costs of growth',
      'Inflation risk',
      'Balance of payments deterioration',
      'Environmental costs',
      'Inequality',
      'Sustainability',
      'Trade-offs',
    ],
  },

  // 2.6 Macroeconomic objectives and policies
  {
    id: 'objectives',
    examBoard: 'edexcel',
    name: 'Macroeconomic Objectives and Policies',
    description: 'Government objectives, fiscal, monetary, and supply-side policies',
    icon: '🎯',
    color: 'bg-rose-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Objectives
      'Economic growth',
      'Low unemployment',
      'Low and stable inflation',
      'Balance of payments equilibrium',
      'Conflicts between objectives',
      // Demand-side policies
      // Fiscal policy
      'Fiscal policy',
      'Government spending',
      'Taxation',
      'Direct taxes',
      'Indirect taxes',
      'Progressive taxes',
      'Regressive taxes',
      'Proportional taxes',
      'Budget deficit',
      'Budget surplus',
      'National debt',
      'Automatic stabilisers',
      'Discretionary fiscal policy',
      'Expansionary fiscal policy',
      'Contractionary fiscal policy',
      'Crowding out',
      'Ricardian equivalence',
      // Monetary policy
      'Monetary policy',
      'Bank of England',
      'Monetary Policy Committee',
      'Inflation target',
      'Bank Rate',
      'Transmission mechanism',
      'Effect on AD components',
      'Quantitative easing',
      'Strengths of monetary policy',
      'Weaknesses of monetary policy',
      // Supply-side policies
      'Supply-side policies',
      'Market-based policies',
      'Tax cuts',
      'Deregulation',
      'Privatisation',
      'Labour market flexibility',
      'Trade union reform',
      'Interventionist policies',
      'Education and training',
      'Infrastructure investment',
      'Industrial policy',
      'Evaluation of supply-side policies',
    ],
  },

  // ============================================================================
  // THEME 3: BUSINESS BEHAVIOUR AND THE LABOUR MARKET (Microeconomics)
  // Assessed in Paper 1 and Paper 3
  // ============================================================================

  // 3.1 Business growth
  {
    id: 'business-growth',
    examBoard: 'edexcel',
    name: 'Business Growth',
    description: 'Sizes of firms, growth methods, and objectives',
    icon: '📈',
    color: 'bg-amber-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Business objectives
      'Profit maximisation',
      'Revenue maximisation',
      'Sales maximisation',
      'Satisficing',
      'Shareholder vs stakeholder objectives',
      'Principal-agent problem',
      // Business growth
      'Reasons for growth',
      'Profit motive',
      'Economies of scale',
      'Market power',
      'Organic growth',
      'Internal growth',
      'External growth',
      'Mergers and takeovers',
      'Horizontal integration',
      'Vertical integration',
      'Forward vertical',
      'Backward vertical',
      'Conglomerate integration',
      // Constraints on growth
      'Financing constraints',
      'Regulatory constraints',
      'Diseconomies of scale',
      // Demergers
      'Reasons for demergers',
      'Effects of demergers',
    ],
  },

  // 3.2 Business objectives
  {
    id: 'business-objectives',
    examBoard: 'edexcel',
    name: 'Business Objectives',
    description: 'Profit, revenue, and sales maximisation',
    icon: '🎯',
    color: 'bg-lime-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Profit
      'Normal profit',
      'Supernormal (abnormal) profit',
      'Total revenue',
      'Total cost',
      'Marginal revenue',
      'Marginal cost',
      // Profit maximisation
      'MC = MR condition',
      'Profit maximisation diagram',
      'Short-run profit maximisation',
      'Long-run profit maximisation',
      // Revenue maximisation
      'Revenue maximisation',
      'MR = 0 condition',
      // Sales maximisation
      'Sales maximisation',
      'AC = AR condition',
      // Satisficing
      'Bounded rationality',
      'Satisficing behaviour',
    ],
  },

  // 3.3 Revenues, costs and profits
  {
    id: 'costs-profits',
    examBoard: 'edexcel',
    name: 'Revenues, Costs and Profits',
    description: 'Cost theory and economies of scale',
    icon: '💰',
    color: 'bg-teal-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Revenue
      'Total revenue (TR)',
      'Average revenue (AR)',
      'Marginal revenue (MR)',
      'AR as demand curve',
      // Costs
      'Short run and long run',
      'Fixed costs',
      'Variable costs',
      'Total cost (TC)',
      'Average cost (AC)',
      'Marginal cost (MC)',
      'Law of diminishing returns',
      // Short-run cost curves
      'U-shaped AC curve',
      'MC and AC relationship',
      // Long-run costs
      'Long-run average cost (LRAC)',
      'Economies of scale',
      'Internal economies of scale',
      'External economies of scale',
      'Minimum efficient scale (MES)',
      'Diseconomies of scale',
    ],
  },

  // 3.4 Market structures
  {
    id: 'structures',
    examBoard: 'edexcel',
    name: 'Market Structures',
    description: 'Perfect competition, monopolistic competition, oligopoly, and monopoly',
    icon: '🏢',
    color: 'bg-violet-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Perfect competition
      'Assumptions of perfect competition',
      'Many firms',
      'Homogeneous products',
      'Perfect information',
      'No barriers to entry/exit',
      'Price takers',
      'Short-run equilibrium',
      'Long-run equilibrium',
      'Efficiency in perfect competition',
      // Monopolistic competition
      'Features of monopolistic competition',
      'Product differentiation',
      'Low barriers',
      'Short-run equilibrium',
      'Long-run equilibrium',
      'Non-price competition',
      // Oligopoly
      'Features of oligopoly',
      'Concentration ratio',
      'Interdependence',
      'Price rigidity',
      'Kinked demand curve',
      'Non-price competition',
      'Collusion',
      'Overt collusion',
      'Tacit collusion',
      'Cartels',
      'Price leadership',
      'Price wars',
      'Game theory',
      "Prisoner's dilemma",
      // Monopoly
      'Features of monopoly',
      'Barriers to entry',
      'Price setter',
      'Monopoly equilibrium',
      'Profit maximisation',
      'Efficiency and monopoly',
      'Natural monopoly',
      // Price discrimination
      'First degree',
      'Second degree',
      'Third degree',
      'Conditions for price discrimination',
      // Contestable markets
      'Contestability',
      'Low barriers to entry/exit',
      'Sunk costs',
      'Hit and run entry',
      'Implications for efficiency',
      // Efficiency
      'Allocative efficiency',
      'Productive efficiency',
      'Dynamic efficiency',
      'X-inefficiency',
      'Static vs dynamic efficiency',
    ],
  },

  // 3.5 Labour market
  {
    id: 'labour',
    examBoard: 'edexcel',
    name: 'The Labour Market',
    description: 'Labour demand, supply, wage determination, and imperfections',
    icon: '👷',
    color: 'bg-pink-500',
    paperRestriction: 'Paper 1, Paper 3',
    subtopics: [
      // Demand for labour
      'Derived demand',
      'Marginal revenue product (MRP)',
      'MRP = MPP × MR',
      'Factors affecting demand for labour',
      // Supply of labour
      'Individual labour supply',
      'Income effect',
      'Substitution effect',
      'Backward bending supply curve',
      'Market supply of labour',
      'Factors affecting supply',
      'Wage rate',
      'Barriers to entry',
      'Non-monetary factors',
      // Wage determination
      'Competitive labour market',
      'Equilibrium wage',
      'Wage differentials',
      'Compensating differentials',
      // Labour market imperfections
      'Monopsony',
      'Trade unions',
      'Collective bargaining',
      'Bilateral monopoly',
      // Government intervention
      'National Minimum Wage',
      'National Living Wage',
      'Effects of minimum wage',
      // Discrimination
      'Labour market discrimination',
      'Gender pay gap',
    ],
  },

  // ============================================================================
  // THEME 4: A GLOBAL PERSPECTIVE (Macroeconomics)
  // Assessed in Paper 2 and Paper 3
  // ============================================================================

  // 4.1 International economics
  {
    id: 'international',
    examBoard: 'edexcel',
    name: 'International Economics',
    description: 'International trade, exchange rates, and trade policies',
    icon: '🌍',
    color: 'bg-sky-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Benefits of trade
      'Gains from trade',
      'Specialisation',
      'Absolute advantage',
      'Comparative advantage',
      'Opportunity cost and trade',
      'Terms of trade',
      // Patterns of trade
      'Primary products',
      'Manufactured goods',
      'Services',
      'Changes in trade patterns',
      // Exchange rates
      'Floating exchange rates',
      'Currency demand and supply',
      'Appreciation',
      'Depreciation',
      'Factors affecting exchange rates',
      'Interest rates',
      'Inflation',
      'Speculation',
      'FDI flows',
      'Trade balance',
      'Government intervention',
      'Fixed exchange rates',
      'Managed float',
      // Effects of exchange rate changes
      'Effect on exports',
      'Effect on imports',
      'Effect on inflation',
      'Effect on growth',
      'Marshall-Lerner condition',
      'J-curve effect',
      // Competitiveness
      'International competitiveness',
      'Factors affecting competitiveness',
      // Trade policies
      'Free trade',
      'Benefits of free trade',
      'Protectionism',
      'Tariffs',
      'Quotas',
      'Subsidies',
      'Non-tariff barriers',
      'Arguments for protectionism',
      'Arguments against protectionism',
      // Trading blocs
      'Regional trade agreements',
      'Free trade areas',
      'Customs unions',
      'Single markets',
      'Economic unions',
      'Trade creation',
      'Trade diversion',
      'WTO',
    ],
  },

  // 4.2 Poverty and inequality
  {
    id: 'poverty',
    examBoard: 'edexcel',
    name: 'Poverty and Inequality',
    description: 'Income and wealth distribution, poverty, and policies',
    icon: '⚖️',
    color: 'bg-fuchsia-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Income and wealth
      'Difference between income and wealth',
      'Income distribution',
      'Wealth distribution',
      // Inequality
      'Lorenz curve',
      'Gini coefficient',
      'Causes of inequality',
      'Consequences of inequality',
      // Poverty
      'Absolute poverty',
      'Relative poverty',
      'Causes of poverty',
      'Consequences of poverty',
      // Policies
      'Progressive taxation',
      'Transfer payments',
      'Benefits system',
      'Minimum wage',
      'Investment in education',
    ],
  },

  // 4.3 Emerging and developing economies
  {
    id: 'development',
    examBoard: 'edexcel',
    name: 'Emerging and Developing Economies',
    description: 'Economic development, growth strategies, and globalisation',
    icon: '🌱',
    color: 'bg-emerald-600',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Economic development
      'Growth vs development',
      'Measures of development',
      'GDP per capita',
      'Human Development Index (HDI)',
      'Multi-dimensional poverty index',
      // Factors affecting development
      'Primary product dependency',
      'Savings gap',
      'Foreign currency gap',
      'Capital flight',
      'Demographic factors',
      'Debt',
      'Access to credit',
      'Infrastructure',
      'Education and skills',
      'Corruption',
      // Strategies for development
      'Market-oriented strategies',
      'Trade liberalisation',
      'Promotion of FDI',
      'Privatisation',
      'Interventionist strategies',
      'Industrial policy',
      'Import substitution',
      'Development of human capital',
      'Infrastructure development',
      'International aid',
      'Debt relief',
      'Microfinance',
      // Globalisation and development
      'Role of TNCs',
      'Benefits of globalisation for development',
      'Costs of globalisation for development',
    ],
  },

  // 4.4 The financial sector
  {
    id: 'financial',
    examBoard: 'edexcel',
    name: 'The Financial Sector',
    description: 'Financial markets, central banks, and regulation',
    icon: '🏦',
    color: 'bg-slate-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Role of financial markets
      'Facilitating saving',
      'Lending to businesses',
      'Lending to individuals',
      'Facilitating exchange',
      'Forward markets',
      // Types of financial markets
      'Money markets',
      'Capital markets',
      'Foreign exchange markets',
      // Central banks
      'Role of Bank of England',
      'Monetary policy',
      'Lender of last resort',
      'Financial stability',
      'Banker to government',
      // Regulation
      'Regulation of financial markets',
      'Bank capital requirements',
      'Liquidity requirements',
      'Financial conduct regulation',
      // Market failure in financial sector
      'Moral hazard',
      'Systemic risk',
      'Too big to fail',
      // Financial crises
      'Causes of financial crises',
      'Asset bubbles',
      'Excessive risk-taking',
      'Effects of financial crises',
      'Policy responses',
    ],
  },

  // 4.5 Role of the state in the macroeconomy
  {
    id: 'state',
    examBoard: 'edexcel',
    name: 'Role of the State in the Macroeconomy',
    description: 'Public finances, fiscal policy, and austerity',
    icon: '🏛️',
    color: 'bg-zinc-500',
    paperRestriction: 'Paper 2, Paper 3',
    subtopics: [
      // Public finances
      'Public sector spending',
      'Sources of government revenue',
      'Public sector debt',
      'National debt',
      'Debt to GDP ratio',
      // Macroeconomic policy
      'Fiscal policy effectiveness',
      'Monetary policy effectiveness',
      'Policy conflicts',
      'Policy trade-offs',
      // Austerity
      'Fiscal consolidation',
      'Arguments for austerity',
      'Arguments against austerity',
      'Impact of austerity',
      // Public sector vs private sector
      'Market failure',
      'Government failure',
      'Nationalisation',
      'Privatisation',
    ],
  },
];

export function getEdexcelALevelEconomicsTopicById(id: string): Topic | undefined {
  return edexcelALevelEconomicsTopics.find((topic) => topic.id === id);
}

export function countEdexcelALevelEconomicsSubtopics(): number {
  return edexcelALevelEconomicsTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
