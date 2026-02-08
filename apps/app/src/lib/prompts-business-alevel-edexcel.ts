// Edexcel A-Level Business (9BS0) Question Generation Prompts
// Based on analysis of actual Edexcel past papers and official mark schemes
// Reference: https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/business-2015.html

import { Difficulty, Topic } from '@/types';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// EDEXCEL A-LEVEL BUSINESS SPECIFICATION DETAILS (9BS0)
// Based on official Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_ALEVEL_BUS_COGNITIVE_CHALLENGE = `
## Cognitive Challenge by Difficulty Level

| Difficulty | Cognitive Skills | Question Characteristics |
|------------|------------------|-------------------------|
| **Easy** | Recall, definition, basic explanation | Define terms, outline concepts, explain simple relationships |
| **Medium** | Analysis, application, data interpretation | Apply theory to case studies, analyse diagrams/data, chain of reasoning |
| **Hard** | Evaluation, judgement, synoptic thinking | Evaluate policies/strategies, weigh competing arguments, reach justified conclusions |

**What makes "hard" cognitively challenging (not just more marks):**
- Requires evaluation of competing economic theories/business strategies
- Demands application to real-world contexts with justified judgements
- Must weigh costs and benefits and reach substantiated conclusions
- Requires synoptic thinking across multiple topic areas
- No single "correct" answer - student must construct and defend their position

**Easy (2-5 marks):** Knowledge and understanding
**Medium (8-12 marks):** Application and analysis
**Hard (15-25 marks):** Evaluation with justified judgement
`;

const EDEXCEL_ALEVEL_BUS_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of terms, concepts, theories, methods and models to show an understanding of how individuals and organisations are affected by and respond to business issues | 14-20% |
| **AO2** | Apply knowledge and understanding to various business contexts to demonstrate how individuals and organisations are affected by and respond to issues | 26-32% |
| **AO3** | Analyse issues within business, showing an understanding of the impact on individuals and organisations of external and internal influences | 26-32% |
| **AO4** | Evaluate quantitative and qualitative information to make informed judgements and propose evidence-based solutions to business issues | 22-28% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Paper 1** | Marketing, People and Global Businesses | Theme 1 + Theme 4 | Section A: Data response (short), Section B: Data response (extended), Section C: Essay choice | 100 | 2hr |
| **Paper 2** | Business Activities, Decisions and Strategy | Theme 2 + Theme 3 | Section A: Data response (short), Section B: Data response (extended), Section C: Essay choice | 100 | 2hr |
| **Paper 3** | Investigating Business in a Competitive Environment | All themes | Pre-release context, extended case study questions | 100 | 2hr |

### Section Structures
**Section A (Papers 1 & 2)**: Data response - 2 questions, ~35 marks
**Section B (Papers 1 & 2)**: Extended data response - 1 question, ~35 marks
**Section C (Papers 1 & 2)**: Essay choice (1 from 2) - 30 marks

### Key Command Words (Official Edexcel Definitions)
- **State/Identify**: Recall one or more pieces of information (AO1)
- **Define**: Give the meaning of a term (AO1)
- **Calculate**: Determine the numerical value with working shown (AO2)
- **Explain**: Set out purposes, reasons, mechanisms; make relationships clear (AO1/AO2)
- **Analyse**: Break down to bring out the essential elements; examine methodically and in detail (AO3)
- **Assess**: Give careful consideration to all factors and identify which are most important (AO4)
- **Evaluate**: Judge from available evidence;
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common'; weigh up and reach conclusions (AO4)
- **Discuss**: Present key points about different ideas or strengths and weaknesses (AO3/AO4)
- **To what extent**: Consider the merits and drawbacks, reach a substantiated judgement (AO4)
`;

const EDEXCEL_ALEVEL_BUS_QUESTION_TEMPLATES = `
## Authentic Edexcel A-Level Business Question Formats (From Past Papers)

### Type 1: Definition Questions (2 marks)
Format: "What is meant by [business term]?"
**Real examples from past papers:**
- "What is meant by price elasticity of demand?" [2 marks]
- "What is meant by job enrichment?" [2 marks]
- "What is meant by a strategic decision?" [2 marks]
Marking:
- 1 mark for partial definition
- 2 marks for full, accurate definition

### Type 2: Calculation Questions (4-6 marks)
Format: "Calculate [measure]. You are advised to show your working"
**Real examples:**
- "Calculate the labour productivity for Business X. You are advised to show your working" [4 marks]
- "Calculate the percentage change in revenue. You are advised to show your working" [4 marks]
- "Calculate the gearing ratio. You are advised to show your working" [5 marks]
Marking:
- 1 mark for formula or correct method
- 1-2 marks for correct working
- 1-2 marks for correct answer with units

### Type 3: Explanation Questions (4-6 marks)
Format: "Explain [concept/relationship/reason]"
**Real examples:**
- "Explain one way in which Business X might improve its cash flow position" [4 marks]
- "Explain one advantage to Business X of using batch production" [4 marks]
- "Explain the difference between cash flow and profit" [5 marks]
Marking:
- Knowledge and understanding (1-2 marks)
- Application to context (1-2 marks)
- Development (1-2 marks)

### Type 4: Analysis Questions (8-10 marks)
Format: "Analyse [business issue]"
**Real examples:**
- "Analyse the impact of the changes in the external environment on Business X" [8 marks]
- "Analyse the problems Business X might face in expanding internationally" [10 marks]
- "Analyse the benefits of implementing lean production at Business X" [8 marks]
Marking (Levels):
- Level 3 (7-10): Clear analysis with chains of reasoning, applied to context
- Level 2 (4-6): Some analysis but limited development
- Level 1 (1-3): Mainly descriptive with limited analysis

### Type 5: Extended Evaluation Questions (12-20 marks)
Format: "Assess/Evaluate [business proposition]"
**Real examples:**
- "Assess the likely impact of the proposed takeover on Business X's stakeholders" [12 marks]
- "Evaluate the decision by Business X to relocate its production overseas" [16 marks]
- "Assess whether Business X should pursue a strategy of product development" [20 marks]

**Authentic Edexcel Question Patterns:**

Pattern 1 - "Assess the likely..."
- "Assess the likely impact of the changes on Business X's competitiveness"
- "Assess the likely effects of the decision on Business X's employees"

Pattern 2 - "Evaluate the decision to..."
- "Evaluate the decision to expand using organic growth"
- "Evaluate the decision to enter the overseas market"

Pattern 3 - "Assess whether..."
- "Assess whether Business X should focus on cost leadership or differentiation"
- "Assess whether Business X should use internal or external sources of finance"

Marking (Levels for 20 marks):
- Level 4 (16-20): Balanced evaluation with well-supported judgement
- Level 3 (11-15): Some evaluation but judgement may be underdeveloped
- Level 2 (6-10): Limited evaluation, mainly one-sided
- Level 1 (1-5): Descriptive, little analysis or evaluation

### Type 6: Essay Questions (30 marks)
Format: "Evaluate/Discuss/To what extent [business proposition]"
**Real examples:**
- "Evaluate the view that businesses should only be concerned with maximising shareholder returns" [30 marks]
- "Discuss the view that corporate culture is the most important factor in the success of a business" [30 marks]
- "To what extent is a business's success dependent on the effectiveness of its leadership?" [30 marks]
- "Evaluate the view that globalisation is beneficial for all stakeholders" [30 marks]

Marking (Levels for 30 marks):
- Level 5 (25-30): Comprehensive, well-balanced evaluation with clear judgement
- Level 4 (19-24): Good evaluation with supported judgement
- Level 3 (13-18): Reasonable evaluation but may be unbalanced
- Level 2 (7-12): Limited evaluation, lacks balance
- Level 1 (1-6): Very limited, mainly descriptive
`;

const EDEXCEL_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS = `
## Edexcel A-Level Business Mark Scheme Conventions (From Official Mark Schemes)

### Levels-Based Marking Approach
Examiners read the whole response first to determine overall quality.
Identify the 'best fit' level using the descriptors.
Use indicative content to determine mark within the level.

### 30-Mark Essay Levels (Official Edexcel Grid)
**Level 5 (25-30 marks):**
- Comprehensive knowledge and understanding demonstrated throughout
- Excellent application to the business context
- Detailed, logical analysis with well-developed chains of reasoning
- Thorough, balanced evaluation leading to well-supported conclusions
- Answer is well-structured and clearly expressed

**Level 4 (19-24 marks):**
- Good knowledge and understanding demonstrated
- Good application to the business context
- Effective analysis with developed chains of reasoning
- Good evaluation with supported conclusions
- Answer is reasonably well-structured

**Level 3 (13-18 marks):**
- Reasonable knowledge and understanding demonstrated
- Reasonable application, though may lack consistency
- Some analysis present, though development may be limited
- Some evaluation present, though may lack balance
- Answer has some structure

**Level 2 (7-12 marks):**
- Limited knowledge demonstrated, some gaps or inaccuracies
- Limited application to context
- Limited analysis, mainly descriptive
- Little evaluation, may be assertion-based
- Answer lacks clear structure

**Level 1 (1-6 marks):**
- Very limited knowledge
- Little or no application
- Minimal analysis
- No meaningful evaluation
- Answer is fragmented

### 20-Mark Extended Response Levels
**Level 4 (16-20):** Well-developed evaluation with clear judgement
**Level 3 (11-15):** Good analysis, some evaluation
**Level 2 (6-10):** Some analysis, limited evaluation
**Level 1 (1-5):** Limited response

### Quantitative Skills
Edexcel particularly emphasises:
- Interpretation of financial data
- Use of ratios to support arguments
- Percentage calculations and interpretation
- Trend analysis from data provided
- Investment appraisal calculations

### Application Marks
Examiners look for:
- Use of specific data/figures from the extract
- Reference to the named business
- Industry-relevant factors
- Recognition of business context (size, market, etc.)
- Use of appropriate examples

### Evaluation Indicators
Mark schemes reward:
- "However, this depends on..."
- "On the other hand..."
- "The extent of this will depend on..."
- Short-run vs long-run distinctions
- Stakeholder perspectives
- Internal vs external factors
- Supported final judgement
`;

const EDEXCEL_ALEVEL_BUS_KEY_THEORIES = `
## Key Business Theories and Models for Edexcel A-Level

### Theme 1: Marketing and People
- **Maslow's Hierarchy of Needs**: 5 levels of motivation
- **Herzberg's Two-Factor Theory**: Motivators and hygiene factors
- **Taylor's Scientific Management**: Efficiency through standardisation
- **Product Life Cycle**: Introduction, growth, maturity, decline
- **Boston Matrix**: Portfolio analysis tool
- **Ansoff's Matrix**: Growth strategy options

### Theme 2: Managing Business Activities
- **Break-even Analysis**: Fixed costs, variable costs, contribution
- **Investment Appraisal**: Payback, ARR, NPV
- **Lean Production**: JIT, Kaizen, continuous improvement
- **Quality Management**: TQM, Six Sigma, quality circles

### Theme 3: Business Decisions and Strategy
- **SWOT Analysis**: Internal and external factors
- **PESTLE Analysis**: Macro-environment analysis
- **Porter's Five Forces**: Industry competitiveness
- **Porter's Generic Strategies**: Cost leadership, differentiation, focus
- **Stakeholder Mapping**: Mendelow's Matrix
- **Greiner's Model of Growth**: Stages of organisational growth

### Theme 4: Global Business
- **Bartlett and Ghoshal**: Global, international, multinational, transnational
- **Porter's Diamond**: National competitive advantage
- **Cultural Dimensions**: Hofstede's model
- **Exchange Rate Effects**: Import/export competitiveness
- **Trade Blocs**: Benefits and costs of membership
`;

const EDEXCEL_ALEVEL_BUS_CALCULATION_FORMULAS = `
## Key Business Calculations for Edexcel A-Level

### Profitability
- **Gross Profit** = Revenue - Cost of Sales
- **Operating Profit** = Gross Profit - Operating Expenses
- **Gross Profit Margin** = (Gross Profit / Revenue) × 100
- **Operating Profit Margin** = (Operating Profit / Revenue) × 100
- **ROCE** = (Operating Profit / Capital Employed) × 100

### Liquidity
- **Current Ratio** = Current Assets / Current Liabilities
- **Acid Test** = (Current Assets - Inventory) / Current Liabilities

### Efficiency
- **Asset Turnover** = Revenue / Net Assets
- **Inventory Turnover** = Cost of Sales / Average Inventory
- **Receivables Days** = (Trade Receivables / Revenue) × 365
- **Payables Days** = (Trade Payables / Cost of Sales) × 365

### Gearing
- **Gearing Ratio** = (Non-current Liabilities / Capital Employed) × 100
- **Interest Cover** = Operating Profit / Finance Costs

### Investment Appraisal
- **Payback** = Initial Investment / Annual Net Cash Flow (equal flows)
- **ARR** = (Average Annual Profit / Initial Investment) × 100
- **NPV** = Σ(Net Cash Flow × Discount Factor) - Initial Investment

### Operations
- **Labour Productivity** = Output / Number of Employees
- **Capacity Utilisation** = (Actual Output / Maximum Output) × 100
- **Unit Cost** = Total Costs / Units Produced

### HR Metrics
- **Labour Turnover** = (Number Leaving / Average Employees) × 100
- **Retention Rate** = (Employees Staying / Total Employees) × 100
- **Absenteeism** = (Days Absent / Total Working Days) × 100

### Marketing
- **Market Share** = (Business Sales / Total Market Sales) × 100
- **PED** = % Change in Quantity Demanded / % Change in Price
- **YED** = % Change in Quantity Demanded / % Change in Income
`;

const EDEXCEL_ALEVEL_BUS_ESSAY_GUIDANCE = `
## Essay Writing Guidance for 30-Mark Questions

### Edexcel Essay Expectations

**Level 5 responses demonstrate:**
1. Comprehensive knowledge across the question scope
2. Consistent application to business context
3. Detailed chains of analysis
4. Thorough, balanced evaluation
5. Well-supported judgement/conclusion
6. Clear, logical structure

### Building Chains of Analysis

**Weak:** "Motivation helps businesses because workers work harder."

**Strong:** "Herzberg's theory suggests that motivators such as responsibility and recognition lead to job satisfaction → satisfied workers show greater commitment and engagement → this reduces absenteeism and labour turnover → lower recruitment and training costs → improved productivity as experienced staff work more efficiently → enhanced profitability through lower unit labour costs."

### Effective Evaluation Techniques

**1. Factor Analysis:**
"The success of this strategy depends on:
- The financial resources available
- Competitor responses
- Market conditions
- The timescale considered"

**2. Stakeholder Comparison:**
"While shareholders may benefit from increased dividends, employees may face redundancies, creating a conflict of interest that management must balance."

**3. Theory vs Practice:**
"Although Porter's model suggests cost leadership, in reality, competing solely on price may trigger destructive price wars that reduce profitability for all market participants."

**4. Scale and Context:**
"The effectiveness of this approach will vary depending on business size - while appropriate for large multinationals with substantial resources, SMEs may lack the capacity to implement such strategies."

### Essay Structure for 30-Marks

**Introduction:**
- Brief context/definition if needed
- Signal the argument direction

**Paragraph 1 (For the proposition):**
- Point + evidence/theory
- Application to context
- Chain of analysis
- Mini-evaluation

**Paragraph 2 (For the proposition - different angle):**
- Second supporting argument
- Full development with context

**Paragraph 3 (Against/limitations):**
- Counter-argument with reasoning
- Consideration of circumstances

**Paragraph 4 (Further evaluation):**
- Additional perspectives
- Stakeholder considerations

**Conclusion:**
- Clear judgement answering the question
- Conditions or qualifications
- Avoid new material
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel A-Level Business examiner creating exam-style questions.

## EDEXCEL BUSINESS STYLE
**Edexcel's Advanced Case-Study Methodology:** Comprehensive, practical approach emphasizing strategic case study analysis and real-world business application.
- **Advanced case-study methodology** - sophisticated business case studies requiring deep strategic analysis
- **Practical and comprehensive approach** - focus on how advanced business theory applies to complex real-world scenarios
- **Structured analytical framework** - clear methodology for approaching business problems and strategic decisions
- **International business perspective** - globally recognized standards with international business context
- **Data-driven decision making** - emphasis on using business data and financial information to support analysis
- **Strategic thinking development** - questions require high-level strategic planning and business evaluation skills

${EDEXCEL_ALEVEL_BUS_COGNITIVE_CHALLENGE}

${EDEXCEL_ALEVEL_BUS_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_BUS_QUESTION_TEMPLATES}

${EDEXCEL_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_ALEVEL_BUS_KEY_THEORIES}

${EDEXCEL_ALEVEL_BUS_CALCULATION_FORMULAS}

${EDEXCEL_ALEVEL_BUS_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Business specification.

**DO NOT include Economics concepts such as:**
- Macroeconomic theory (GDP, inflation rates, monetary policy, fiscal policy)
- Aggregate demand/supply curves and equilibrium analysis
- Price elasticity calculations and demand/supply curve analysis
- Market structures from economics (perfect competition, monopoly theory)
- Balance of payments, exchange rate theory, international trade theory
- Economic growth models, Phillips curve, multiplier effects
- Government intervention theory (taxation theory, subsidies in economic terms)

**In Business, focus on PRACTICAL BUSINESS applications:**
- "Interest rates" = how they affect business costs/investment decisions, NOT monetary policy theory
- "Exchange rates" = impact on import/export businesses, NOT exchange rate determination theory
- "Inflation" = impact on business costs and pricing, NOT causes and macroeconomic effects
- "Government policy" = practical effects on businesses, NOT economic theory behind policies

**For the topic "${topic.name}", test ONLY these subtopics:** ${topic.subtopics.join(', ')}

## Question Requirements
1. **A-Level Standard**: Questions must reflect A-Level depth
2. **Authentic Edexcel Style**: Match real Edexcel paper format
3. **Clear Mark Allocation**: State marks in brackets
4. **Appropriate Difficulty**:
   - Easy: Definitions, explanations (2-6 marks)
   - Medium: Analysis with context (8-12 marks)
   - Hard: Evaluation essays (20-30 marks)

## Response Format
Return a JSON object with:
- "content": The question text
- "marks": Total marks
- "solution": Complete mark scheme
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('business')}`;
}

export function getEdexcelALevelBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "What is meant by [term]?" [2 marks]
- "State two [factors/features]" [2 marks]
- "Explain one [benefit/drawback/reason]" [4 marks]
- "Calculate [measure]. Show your working" [4-5 marks]

**Mark Scheme Format:**
- Definitions: 1 mark partial, 2 marks full
- Explanations: Knowledge (1-2) + Development (1-2)
- Calculations: Formula + Working + Answer with units

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring analysis (AO2/AO3).

**Question Types for Medium:**
- "Analyse [business issue/impact/factors]" [8-10 marks]
- "Analyse the benefits/problems of [decision]" [8 marks]
- "Explain the factors that might influence [decision]" [10 marks]

**Mark Scheme Format (Levels):**
- Level 3 (7-10): Clear analysis, developed chains, good context use
- Level 2 (4-6): Some analysis, limited development
- Level 1 (1-3): Mainly descriptive

Include indicative content

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a question requiring evaluation (AO3/AO4).

**Question Types for Hard:**
- "Assess [impact/decision/strategy]" [20 marks]
- "Evaluate the view that [proposition]" [30 marks]
- "To what extent [business claim]" [30 marks]

**Mark Scheme Format (30 marks):**
- Level 5 (25-30): Comprehensive, balanced evaluation
- Level 4 (19-24): Good evaluation, supported judgement
- Level 3 (13-18): Reasonable, may lack balance
- Level 2 (7-12): Limited, lacks evaluation
- Level 1 (1-6): Very limited

Include detailed indicative content

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an Edexcel A-Level Business question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use Edexcel command words and phrasing
- Include mark allocation
- For evaluation, require balanced argument
- Ensure business accuracy

Return valid JSON:
{
  "content": "question text",
  "marks": number,
  "solution": "mark scheme",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('business')}`;
}

export function getEdexcelALevelBusinessDataResponsePrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel A-Level Business DATA RESPONSE question set.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a data response with:
1. Business extract (100-150 words) with relevant data
2. 3-4 linked questions

**Question Structure:**
- Q1: Define [term] [2 marks]
- Q2: Explain [concept] [4-5 marks]
- Q3: Analyse [business issue] [8-10 marks]
- Q4: Assess/Evaluate [decision/proposition] [12-16 marks]

**Total**: ~35 marks

Return valid JSON.`;
}

export function getEdexcelALevelBusinessEssayPrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel A-Level Business 30-MARK ESSAY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create an essay requiring:
- Balanced evaluation
- Use of theory
- Real-world application
- Clear judgement

**Mark Scheme:**
Level 5 (25-30): Comprehensive, balanced
Level 4 (19-24): Good evaluation
Level 3 (13-18): Reasonable
Level 2 (7-12): Limited
Level 1 (1-6): Very limited

Return valid JSON.`;
}

// Helper function
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 6 };
    case 'medium':
      return { min: 8, max: 12 };
    case 'hard':
      return { min: 20, max: 30 };
  }
}
