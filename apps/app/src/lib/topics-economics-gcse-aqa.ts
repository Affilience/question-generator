// AQA GCSE Economics (8136) Topics
// Based on the official AQA specification
// Reference: https://www.aqa.org.uk/subjects/economics/gcse/economics-8136/specification
// Paper 1: How Markets Work (50%)
// Paper 2: How the Economy Works (50%)

import { Topic } from '@/types';

export const aqaEconomicsTopics: Topic[] = [
  // ============================================================================
  // PAPER 1: HOW MARKETS WORK - Topics 1-6
  // ============================================================================

  // Topic 1: Economic foundations
  {
    id: 'aqa-gcse-econ-foundations',
    examBoard: 'aqa',
    name: 'Economic Foundations',
    description: 'Basic economic problem, economic methodology, and resource allocation',
    icon: '🏛️',
    color: 'bg-blue-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 1.1 The economic problem
      'Scarcity and choice',
      'Unlimited wants and limited resources',
      'Opportunity cost',
      'Economic goods vs free goods',
      'Factors of production',
      'Land as a factor of production',
      'Labour as a factor of production',
      'Capital as a factor of production',
      'Enterprise as a factor of production',
      // 1.2 Economic methodology
      'Positive and normative statements',
      'Economic models and assumptions',
      'Role of ceteris paribus',
      // 1.3 Resource allocation
      'Types of economic systems',
      'Market economies',
      'Command economies',
      'Mixed economies',
      'Role of price mechanism',
    ],
  },

  // Topic 2: The role of markets
  {
    id: 'aqa-gcse-econ-markets',
    examBoard: 'aqa',
    name: 'The Role of Markets',
    description: 'Demand, supply, price determination, and market equilibrium',
    icon: '📈',
    color: 'bg-green-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 2.1 Demand
      'Definition of demand',
      'Individual and market demand',
      'Demand schedules',
      'Demand curves',
      'Movement along the demand curve',
      'Shifts of the demand curve',
      'Conditions of demand',
      'Factors affecting demand',
      'Price as a factor affecting demand',
      'Income as a factor affecting demand',
      'Population changes affecting demand',
      'Advertising affecting demand',
      'Price of substitutes affecting demand',
      'Price of complements affecting demand',
      'Tastes and preferences',
      // 2.2 Supply
      'Definition of supply',
      'Individual and market supply',
      'Supply schedules',
      'Supply curves',
      'Movement along the supply curve',
      'Shifts of the supply curve',
      'Conditions of supply',
      'Factors affecting supply',
      'Price as a factor affecting supply',
      'Costs of production affecting supply',
      'Technology affecting supply',
      'Taxes affecting supply',
      'Subsidies affecting supply',
      'Weather and natural factors',
      // 2.3 Price determination
      'Market equilibrium',
      'Equilibrium price',
      'Equilibrium quantity',
      'Excess demand',
      'Excess supply',
      'Price adjustment mechanism',
      'Shifts in demand and equilibrium',
      'Shifts in supply and equilibrium',
      // 2.4 Price elasticity of demand (PED)
      'Definition of PED',
      'Calculating PED',
      'Interpreting PED values',
      'Elastic demand',
      'Inelastic demand',
      'Unit elastic demand',
      'Perfectly elastic demand',
      'Perfectly inelastic demand',
      'Factors affecting PED',
      'Necessity vs luxury goods',
      'Availability of substitutes',
      'Proportion of income spent',
      'Time period',
      // 2.5 Price elasticity of supply (PES)
      'Definition of PES',
      'Calculating PES',
      'Interpreting PES values',
      'Elastic supply',
      'Inelastic supply',
      'Factors affecting PES',
      'Time period and PES',
      'Availability of stocks',
      'Mobility of factors of production',
    ],
  },

  // Topic 3: Market failure
  {
    id: 'aqa-gcse-econ-market-failure',
    examBoard: 'aqa',
    name: 'Market Failure',
    description: 'Types of market failure and government intervention',
    icon: '⚠️',
    color: 'bg-red-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 3.1 Types of market failure
      'Definition of market failure',
      'Allocative efficiency',
      'When markets fail',
      // 3.2 Externalities
      'Definition of externalities',
      'Private costs and benefits',
      'External costs and benefits',
      'Social costs and benefits',
      'Negative externalities',
      'Negative externalities of production',
      'Negative externalities of consumption',
      'Positive externalities',
      'Positive externalities of production',
      'Positive externalities of consumption',
      'Welfare loss from externalities',
      // 3.3 Merit and demerit goods
      'Definition of merit goods',
      'Examples of merit goods',
      'Under-consumption of merit goods',
      'Definition of demerit goods',
      'Examples of demerit goods',
      'Over-consumption of demerit goods',
      'Information failure',
      // 3.4 Public goods
      'Definition of public goods',
      'Characteristics of public goods',
      'Non-excludability',
      'Non-rivalry',
      'Free rider problem',
      'Examples of public goods',
      // 3.5 Government intervention
      'Reasons for government intervention',
      'Indirect taxation',
      'Effect of indirect taxes on markets',
      'Subsidies',
      'Effect of subsidies on markets',
      'Minimum prices',
      'Maximum prices',
      'State provision',
      'Regulation and legislation',
      'Government failure',
    ],
  },

  // Topic 4: Production, costs, revenue and profit
  {
    id: 'aqa-gcse-econ-production',
    examBoard: 'aqa',
    name: 'Production, Costs, Revenue and Profit',
    description: 'Business production decisions, costs, and profitability',
    icon: '🏭',
    color: 'bg-purple-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 4.1 Production
      'Definition of production',
      'Productivity',
      'Labour productivity',
      'Specialisation',
      'Division of labour',
      'Advantages of specialisation',
      'Disadvantages of specialisation',
      // 4.2 Costs of production
      'Fixed costs',
      'Variable costs',
      'Total costs',
      'Average costs',
      'Calculating costs',
      'Short run costs',
      'Long run costs',
      'Economies of scale',
      'Internal economies of scale',
      'External economies of scale',
      'Diseconomies of scale',
      // 4.3 Revenue
      'Definition of revenue',
      'Total revenue',
      'Average revenue',
      'Calculating revenue',
      // 4.4 Profit
      'Definition of profit',
      'Profit calculation',
      'Total revenue minus total costs',
      'Role of profit in markets',
      'Profit as a signal',
      'Profit as an incentive',
    ],
  },

  // Topic 5: Competitive and concentrated markets
  {
    id: 'aqa-gcse-econ-competition',
    examBoard: 'aqa',
    name: 'Competitive and Concentrated Markets',
    description: 'Market structures, competition, and monopoly power',
    icon: '🏆',
    color: 'bg-orange-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 5.1 Market structures
      'Spectrum of competition',
      'Number of firms in a market',
      'Size of firms',
      'Barriers to entry',
      'Types of barriers to entry',
      'Brand loyalty',
      // 5.2 Competitive markets
      'Characteristics of competitive markets',
      'Many buyers and sellers',
      'Freedom of entry and exit',
      'Homogeneous products',
      'Perfect information',
      'Benefits of competition',
      'Lower prices',
      'Greater efficiency',
      'More choice',
      'Innovation',
      // 5.3 Monopoly
      'Definition of monopoly',
      'Characteristics of monopoly',
      'Single seller',
      'Price maker',
      'High barriers to entry',
      'Sources of monopoly power',
      // 5.4 Effects of monopoly
      'Higher prices',
      'Lower output',
      'Reduced consumer choice',
      'Potential for abnormal profit',
      'Dynamic efficiency argument',
      // 5.5 Competition policy
      'Role of Competition and Markets Authority (CMA)',
      'Investigating anti-competitive behaviour',
      'Preventing mergers',
      'Breaking up monopolies',
    ],
  },

  // Topic 6: The labour market
  {
    id: 'aqa-gcse-econ-labour',
    examBoard: 'aqa',
    name: 'The Labour Market',
    description: 'Labour demand, supply, wages, and employment',
    icon: '👷',
    color: 'bg-cyan-500',
    paperRestriction: 'Paper 1',
    subtopics: [
      // 6.1 Labour market
      'Definition of labour market',
      'Derived demand for labour',
      'Labour as a factor of production',
      // 6.2 Demand for labour
      'Factors affecting demand for labour',
      'Demand for the product',
      'Productivity of labour',
      'Wages of labour',
      'Price of capital',
      // 6.3 Supply of labour
      'Factors affecting supply of labour',
      'Wages on offer',
      'Working conditions',
      'Qualifications required',
      'Location of job',
      'Non-monetary benefits',
      // 6.4 Wage determination
      'Equilibrium wage',
      'Wage differentials',
      'Reasons for wage differentials',
      'Skills and qualifications',
      'Experience',
      'Risk and danger',
      'Unpleasantness of job',
      'Gender pay gap',
      // 6.5 Government intervention in labour markets
      'National Minimum Wage',
      'National Living Wage',
      'Effects of minimum wage',
      'Trade unions',
      'Role of trade unions',
      'Effects of trade unions on wages',
    ],
  },

  // ============================================================================
  // PAPER 2: HOW THE ECONOMY WORKS - Topics 7-11
  // ============================================================================

  // Topic 7: Introduction to the national economy
  {
    id: 'aqa-gcse-econ-national',
    examBoard: 'aqa',
    name: 'Introduction to the National Economy',
    description: 'Measuring the economy and the economic cycle',
    icon: '📊',
    color: 'bg-indigo-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 7.1 Economic growth
      'Definition of economic growth',
      'Measuring economic growth',
      'Gross Domestic Product (GDP)',
      'Real GDP vs nominal GDP',
      'GDP per capita',
      'Short-run economic growth',
      'Long-run economic growth',
      'Benefits of economic growth',
      'Costs of economic growth',
      // 7.2 The economic cycle
      'Boom',
      'Recession',
      'Slump/depression',
      'Recovery',
      'Characteristics of each phase',
      'Output gap',
      'Positive output gap',
      'Negative output gap',
    ],
  },

  // Topic 8: Government objectives
  {
    id: 'aqa-gcse-econ-objectives',
    examBoard: 'aqa',
    name: 'Government Objectives',
    description: 'Key macroeconomic objectives and potential conflicts',
    icon: '🎯',
    color: 'bg-emerald-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 8.1 Economic growth objective
      'Sustainable economic growth',
      'Long-run trend growth',
      'Supply-side factors',
      // 8.2 Low unemployment
      'Definition of unemployment',
      'Measuring unemployment',
      'Claimant count',
      'Labour Force Survey',
      'Types of unemployment',
      'Cyclical unemployment',
      'Structural unemployment',
      'Frictional unemployment',
      'Seasonal unemployment',
      'Consequences of unemployment',
      'Individual consequences',
      'Economic consequences',
      'Social consequences',
      // 8.3 Low and stable inflation
      'Definition of inflation',
      'Measuring inflation',
      'Consumer Price Index (CPI)',
      'Retail Price Index (RPI)',
      'Inflation target',
      'Causes of inflation',
      'Demand-pull inflation',
      'Cost-push inflation',
      'Consequences of inflation',
      'Effects on consumers',
      'Effects on businesses',
      'Effects on the economy',
      // 8.4 Balance of payments equilibrium
      'Definition of balance of payments',
      'Current account',
      'Trade in goods',
      'Trade in services',
      'Current account deficit',
      'Current account surplus',
      'Causes of current account deficit',
      'Consequences of current account deficit',
      // 8.5 Conflicts between objectives
      'Trade-off between inflation and unemployment',
      'Growth and inflation conflict',
      'Growth and balance of payments conflict',
      'Growth and environment conflict',
    ],
  },

  // Topic 9: How the government manages the economy
  {
    id: 'aqa-gcse-econ-policy',
    examBoard: 'aqa',
    name: 'How the Government Manages the Economy',
    description: 'Fiscal, monetary, and supply-side policies',
    icon: '🏛️',
    color: 'bg-rose-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 9.1 Fiscal policy
      'Definition of fiscal policy',
      'Government spending',
      'Types of government spending',
      'Current spending',
      'Capital spending',
      'Taxation',
      'Direct taxes',
      'Indirect taxes',
      'Progressive taxes',
      'Regressive taxes',
      'Proportional taxes',
      'Budget deficit',
      'Budget surplus',
      'National debt',
      'Expansionary fiscal policy',
      'Contractionary fiscal policy',
      // 9.2 Monetary policy
      'Definition of monetary policy',
      'Role of Bank of England',
      'Monetary Policy Committee (MPC)',
      'Interest rates',
      'Base rate',
      'Effect of interest rate changes',
      'Interest rates and borrowing',
      'Interest rates and saving',
      'Interest rates and exchange rate',
      'Interest rates and inflation',
      'Quantitative easing',
      // 9.3 Supply-side policies
      'Definition of supply-side policies',
      'Education and training',
      'Labour market reforms',
      'Reducing trade union power',
      'Reducing benefits',
      'Infrastructure investment',
      'Research and development',
      'Deregulation',
      'Privatisation',
      'Tax incentives',
    ],
  },

  // Topic 10: International trade
  {
    id: 'aqa-gcse-econ-trade',
    examBoard: 'aqa',
    name: 'International Trade',
    description: 'Trade, exchange rates, and globalisation',
    icon: '🌍',
    color: 'bg-amber-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 10.1 Importance of international trade
      'Reasons for international trade',
      'Benefits of specialisation',
      'Access to wider markets',
      'Greater choice for consumers',
      'Lower prices',
      'Increased competition',
      // 10.2 Imports and exports
      'Definition of imports',
      'Definition of exports',
      'Visible trade',
      'Invisible trade',
      'Net exports',
      // 10.3 Exchange rates
      'Definition of exchange rate',
      'Floating exchange rates',
      'Fixed exchange rates',
      'Appreciation of currency',
      'Depreciation of currency',
      'Effects of exchange rate changes',
      'Effect on exports',
      'Effect on imports',
      'Effect on inflation',
      'Effect on economic growth',
      // 10.4 Trade barriers
      'Tariffs',
      'Quotas',
      'Subsidies to domestic producers',
      'Non-tariff barriers',
      'Reasons for protectionism',
      'Protecting infant industries',
      'Protecting employment',
      'Preventing dumping',
      'Arguments against protectionism',
    ],
  },

  // Topic 11: The role of money and financial markets
  {
    id: 'aqa-gcse-econ-finance',
    examBoard: 'aqa',
    name: 'The Role of Money and Financial Markets',
    description: 'Functions of money and financial institutions',
    icon: '💰',
    color: 'bg-lime-500',
    paperRestriction: 'Paper 2',
    subtopics: [
      // 11.1 Functions of money
      'Medium of exchange',
      'Store of value',
      'Unit of account',
      'Standard of deferred payment',
      // 11.2 Role of financial markets
      'Definition of financial markets',
      'Facilitating saving',
      'Lending to businesses and individuals',
      'Facilitating exchange of goods and services',
      'Providing forward markets',
      // 11.3 Role of banks
      'Commercial banks',
      'Investment banks',
      'Central bank (Bank of England)',
      'Lender of last resort',
      'Financial stability',
      // 11.4 Interest rates
      'Meaning of interest rate',
      'Reward for saving',
      'Cost of borrowing',
      'Factors affecting interest rates',
    ],
  },
];

export function getAQAEconomicsTopicById(id: string): Topic | undefined {
  return aqaEconomicsTopics.find((topic) => topic.id === id);
}

export function getAQAEconomicsTopicsByPaper(paper: 1 | 2): Topic[] {
  const paperName = `Paper ${paper}`;
  return aqaEconomicsTopics.filter((topic) => topic.paperRestriction === paperName);
}

export function countAQAEconomicsSubtopics(): number {
  return aqaEconomicsTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
}
