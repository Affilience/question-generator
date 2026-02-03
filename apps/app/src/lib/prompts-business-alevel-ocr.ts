// OCR A-Level Business (H431) Question Generation Prompts
// Based on analysis of actual OCR past papers and official mark schemes
// Reference: https://www.ocr.org.uk/qualifications/as-and-a-level/business-h031-h431-from-2015/

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// OCR A-LEVEL BUSINESS SPECIFICATION DETAILS (H431)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_ALEVEL_BUS_COGNITIVE_CHALLENGE = `
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

const OCR_ALEVEL_BUS_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of terms, concepts, theories, methods and models to show an understanding of how individuals and organisations are affected by and respond to business issues | 17-23% |
| **AO2** | Apply knowledge and understanding to various business contexts to demonstrate how individuals and organisations are affected by and respond to issues | 24-30% |
| **AO3** | Analyse issues within business, showing an understanding of the impact on individuals and organisations of external and internal influences | 24-30% |
| **AO4** | Evaluate quantitative and qualitative information to make informed judgements and propose evidence-based solutions to business issues | 24-30% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Component 1** | Operating in a local business environment | Topics 1-5 | Section A: Case study (60 marks), Section B: Essay choice (20 marks) | 80 | 2hr |
| **Component 2** | The UK business environment | Topics 6-9 | Section A: Case study (60 marks), Section B: Essay choice (20 marks) | 80 | 2hr |
| **Component 3** | The global business environment | Topics 10-13 | Pre-release case study, compulsory questions | 80 | 2hr |

### Section Structures
**Section A (Components 1 & 2)**: Case study with 4-5 compulsory questions (60 marks)
**Section B (Components 1 & 2)**: Essay choice - 1 from 2 (20 marks)

### Key Command Words (Official OCR Definitions)
- **State/Identify**: Make a single point (AO1)
- **Define**: Give the meaning of a term precisely (AO1)
- **Calculate**: Determine a numerical answer with working shown (AO2)
- **Explain**: Set out purposes or reasons; give an account of causes, advantages or disadvantages (AO1/AO2)
- **Analyse**: Separate information into components; identify interrelationships; examine using frameworks/theories (AO3)
- **Evaluate**: Judge from available evidence; weigh up options and reach a justified conclusion (AO4)
- **Assess**: Make an informed judgement about the value/importance of something (AO4)
- **Discuss**: Present key points, explain different perspectives, reach a reasoned conclusion (AO3/AO4)
- **Recommend**: Advise on a course of action, giving reasons based on evaluation (AO4)
`;

const OCR_ALEVEL_BUS_QUESTION_TEMPLATES = `
## Authentic OCR A-Level Business Question Formats (From Past Papers)

### Type 1: Definition Questions (2 marks)
Format: "Define the term [business concept]"
**Real examples from past papers:**
- "Define the term 'economies of scale'" [2 marks]
- "Define the term 'gearing'" [2 marks]
- "Define the term 'stakeholder'" [2 marks]
Marking:
- 2 marks for precise, complete definition
- 1 mark for partial or imprecise definition

### Type 2: Calculation Questions (4-6 marks)
Format: "Calculate [financial measure] for [Business]. Show your working"
**Real examples:**
- "Calculate the current ratio for Business X. Show your working" [4 marks]
- "Calculate the percentage change in profit. Show your working" [4 marks]
- "Calculate the payback period for the investment. Show your working" [5 marks]
Marking:
- Formula/method identified (1 mark)
- Correct working shown (1-2 marks)
- Correct answer with appropriate units (1-2 marks)

### Type 3: Explanation Questions (4-6 marks)
Format: "Explain [concept/relationship/reason]"
**Real examples:**
- "Explain one reason why Business X might benefit from being a limited company" [4 marks]
- "Explain how the economic environment might affect Business X's sales" [5 marks]
- "Explain the difference between a takeover and a merger" [4 marks]
Marking:
- Identification/knowledge (1-2 marks)
- Development with context (1-2 marks)
- Clear link/consequence (1-2 marks)

### Type 4: Analysis Questions (8-12 marks)
Format: "Analyse [business issue/decision/impact]"
**Real examples:**
- "Analyse the benefits to Business X of using lean production methods" [8 marks]
- "Analyse the problems Business X might face in entering a new market" [10 marks]
- "Analyse the factors that might affect the success of Business X's growth strategy" [12 marks]
Marking (Levels):
- Level 3 (7-12): Thorough analysis with well-developed chains of reasoning
- Level 2 (4-6): Good analysis with some development
- Level 1 (1-3): Limited analysis, mainly knowledge or description

### Type 5: Evaluation Questions (12-20 marks)
Format: "Evaluate/Assess/Recommend [business proposition/decision]"
**Real examples:**
- "Evaluate the decision by Business X to use batch production" [12 marks]
- "Assess the view that Business X should expand into overseas markets" [16 marks]
- "Recommend which source of finance Business X should use. Justify your answer" [16 marks]
- "Evaluate the importance of corporate social responsibility to Business X" [20 marks]

**Authentic OCR Question Patterns:**

Pattern 1 - "Evaluate..."
- "Evaluate the decision to change the organisational structure"
- "Evaluate the impact of the proposed takeover on stakeholders"
- "Evaluate the usefulness of break-even analysis for Business X"

Pattern 2 - "Assess..."
- "Assess the view that profit should be the main objective of a business"
- "Assess the importance of market research in reducing risk"
- "Assess whether Business X should pursue organic or inorganic growth"

Pattern 3 - "Recommend and justify..."
- "Recommend which strategy Business X should adopt. Justify your answer"
- "Recommend whether Business X should relocate. Justify your answer"

Marking (Levels for 20 marks):
- Level 4 (17-20): Well-reasoned, balanced evaluation with clear judgement
- Level 3 (11-16): Good evaluation with some supported conclusions
- Level 2 (6-10): Some evaluation but limited balance or development
- Level 1 (1-5): Limited, mainly descriptive

### Type 6: Essay Questions (20 marks)
Format: "Discuss/Evaluate/To what extent [business proposition]"
**Real examples:**
- "Discuss the view that all businesses should pursue growth" [20 marks]
- "Evaluate the importance of effective leadership to business success" [20 marks]
- "To what extent do you agree that globalisation benefits all stakeholders?" [20 marks]
- "Discuss the factors a business should consider when deciding on a pricing strategy" [20 marks]

Marking (Levels for 20 marks):
- Level 4 (17-20): Thorough, well-balanced evaluation with clear judgement
- Level 3 (11-16): Good evaluation with reasoned conclusions
- Level 2 (6-10): Some evaluation but may lack balance
- Level 1 (1-5): Limited, mainly descriptive or list-like
`;

const OCR_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level Business Mark Scheme Conventions (From Official Mark Schemes)

### Levels-Based Marking
OCR uses a 'best fit' approach:
1. Read the whole response
2. Identify the best-fitting level using descriptors
3. Determine the mark within that level

### 20-Mark Essay/Evaluation Levels (Official OCR Grid)
**Level 4 (17-20 marks):**
- Demonstrates thorough knowledge and understanding of relevant business concepts and theory
- Applies knowledge and understanding effectively to the context
- Presents a thorough, well-developed analysis with clear chains of reasoning
- Presents a balanced, well-reasoned evaluation leading to a justified conclusion
- Answer is well-structured with clear, logical progression

**Level 3 (11-16 marks):**
- Demonstrates good knowledge and understanding of relevant concepts
- Applies knowledge to context with some effectiveness
- Presents good analysis, though may not be fully developed
- Presents evaluation with some reasoned conclusions
- Answer has reasonable structure

**Level 2 (6-10 marks):**
- Demonstrates some knowledge and understanding
- Some application to context, may be inconsistent
- Limited analysis, may be largely descriptive
- Limited evaluation, may be one-sided or assertion-based
- Answer has some structure

**Level 1 (1-5 marks):**
- Limited knowledge demonstrated
- Little or no effective application
- Little or no analysis
- No effective evaluation
- Answer is fragmented or list-like

### 12-Mark Evaluation Levels
**Level 3 (9-12):** Thorough evaluation with judgement
**Level 2 (5-8):** Some evaluation, limited balance
**Level 1 (1-4):** Limited, mainly knowledge

### 8-Mark Analysis Levels
**Level 3 (7-8):** Thorough analysis, developed chains
**Level 2 (4-6):** Good analysis, some development
**Level 1 (1-3):** Limited analysis

### Application Requirements
OCR specifically looks for:
- Reference to the named business in the case study
- Use of data and figures from the case study
- Industry-specific considerations
- Recognition of business size, type, market position
- Realistic application of theory to context

### Evaluation Indicators
Mark schemes reward:
- Balanced consideration of options
- "However, this depends on..." with specific factors
- Short-term vs long-term perspectives
- Quantitative support for arguments
- Stakeholder considerations
- Final judgement that directly answers the question
- Recognition of limitations and assumptions
`;

const OCR_ALEVEL_BUS_KEY_THEORIES = `
## Key Business Theories and Models for OCR A-Level

### Strategic Analysis
- **SWOT Analysis**: Internal strengths/weaknesses, external opportunities/threats
- **PESTLE Analysis**: Political, Economic, Social, Technological, Legal, Environmental
- **Porter's Five Forces**: Industry competition analysis
- **Porter's Generic Strategies**: Cost leadership, differentiation, focus
- **Ansoff's Matrix**: Market penetration, development, product development, diversification
- **Boston Matrix**: Stars, Cash Cows, Question Marks, Dogs
- **Bowman's Strategic Clock**: 8 pricing and quality strategies

### Financial Analysis
- **Ratio Analysis**: Liquidity, profitability, efficiency, gearing
- **Investment Appraisal**: Payback, ARR, NPV, IRR
- **Break-even Analysis**: Contribution, fixed/variable costs
- **Budgeting**: Variance analysis, zero-based budgeting

### Human Resource Models
- **Maslow's Hierarchy**: 5 levels of needs
- **Herzberg's Two-Factor Theory**: Motivators and hygiene factors
- **Taylor's Scientific Management**: Efficiency through specialisation
- **McGregor's Theory X and Y**: Management assumptions about workers
- **Leadership Styles**: Autocratic, democratic, laissez-faire, paternalistic

### Marketing
- **Marketing Mix (7Ps)**: Extended service marketing mix
- **Product Life Cycle**: Stages and extension strategies
- **Price Elasticity of Demand**: Elastic vs inelastic demand
- **Market Segmentation**: Bases for segmentation

### Operations
- **Lean Production**: JIT, Kaizen, cell production
- **Total Quality Management**: Continuous improvement, quality culture
- **Capacity Utilisation**: Optimal usage of resources

### Change Management
- **Lewin's Change Model**: Unfreeze, change, refreeze
- **Kotter's 8 Steps**: Change management process
- **Force Field Analysis**: Driving and restraining forces
`;

const OCR_ALEVEL_BUS_CALCULATION_FORMULAS = `
## Key Business Calculations for OCR A-Level

### Profitability Ratios
- **Gross Profit Margin** = (Gross Profit / Revenue) × 100
- **Operating Profit Margin** = (Operating Profit / Revenue) × 100
- **Net Profit Margin** = (Net Profit / Revenue) × 100
- **ROCE** = (Operating Profit / Capital Employed) × 100

### Liquidity Ratios
- **Current Ratio** = Current Assets / Current Liabilities
- **Acid Test Ratio** = (Current Assets - Inventory) / Current Liabilities

### Efficiency Ratios
- **Asset Turnover** = Revenue / Net Assets
- **Inventory Turnover** = Cost of Goods Sold / Average Inventory
- **Inventory Days** = (Inventory / Cost of Goods Sold) × 365
- **Receivables Days** = (Trade Receivables / Revenue) × 365
- **Payables Days** = (Trade Payables / Cost of Goods Sold) × 365

### Gearing
- **Gearing Ratio** = (Non-current Liabilities / Capital Employed) × 100
- **Interest Cover** = Operating Profit / Interest Expense

### Investment Appraisal
- **Payback Period** = Initial Investment / Annual Net Cash Flow
- **ARR** = (Average Annual Profit / Initial Investment) × 100
- **NPV** = Sum of Discounted Cash Flows - Initial Investment

### Break-even
- **Break-even Point** = Fixed Costs / Contribution per Unit
- **Contribution** = Selling Price - Variable Cost per Unit
- **Margin of Safety** = Actual Sales - Break-even Sales

### Operations
- **Labour Productivity** = Output / Number of Employees
- **Capacity Utilisation** = (Actual Output / Maximum Output) × 100
- **Unit Cost** = Total Costs / Units Produced

### HR Metrics
- **Labour Turnover** = (Number Leaving / Average Number Employed) × 100
- **Absenteeism Rate** = (Days Absent / Total Working Days) × 100
`;

const OCR_ALEVEL_BUS_ESSAY_GUIDANCE = `
## Essay Writing Guidance for OCR 20-Mark Questions

### What Level 4 Looks Like

**Characteristics:**
1. Thorough knowledge with accurate use of terminology
2. Effective application throughout
3. Well-developed chains of reasoning
4. Balanced evaluation with justified conclusion
5. Clear, logical structure

### Building Analytical Chains

**Weak (Level 1-2):** "Motivation is important because it makes workers work harder."

**Strong (Level 3-4):** "Implementing Herzberg's motivators, such as recognition and responsibility, leads to increased job satisfaction → this reduces labour turnover as employees feel valued → lower recruitment and training costs as expertise is retained → improved productivity as experienced staff work more efficiently → this creates a competitive advantage through lower unit costs and higher quality output."

### Evaluation Strategies

**1. Weighing Factors:**
"While cost savings are significant (estimated at £200,000), the potential impact on quality and customer satisfaction may outweigh these benefits in the long term."

**2. Context-Dependent Analysis:**
"The success of this strategy depends on:
- Market conditions and competitor responses
- The business's financial position and resources
- The timescale for implementation
- Employee and stakeholder reactions"

**3. Stakeholder Perspective:**
"From a shareholder perspective, this maximises returns. However, employees may face redundancy, and local communities may suffer from reduced economic activity, creating ethical dilemmas for management."

**4. Theory vs Practice:**
"While Ansoff's Matrix suggests diversification as high risk, in this case the business's strong brand and financial resources may mitigate these risks substantially."

### Essay Structure

**Introduction (1-2 sentences):**
- Define key terms if needed
- Indicate the scope of your answer

**Main Body (3-4 paragraphs):**
Each paragraph:
- Clear point with supporting knowledge
- Application to the specific context
- Developed chain of reasoning
- Evaluative comment

**Conclusion (1 paragraph):**
- Clear judgement answering the question
- Key conditions or qualifications
- Avoid introducing new material

### Common Pitfalls (From Examiner Reports)
1. Describing rather than analysing
2. Generic answers not applied to context
3. One-sided arguments
4. Unsupported assertions instead of reasoned evaluation
5. Vague conclusions
6. Not using case study data
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Business examiner creating exam-style questions.

## OCR BUSINESS STYLE
**OCR's Advanced Multi-Case Study Approach:** Sophisticated analytical framework with extensive case study integration and innovative assessment methods.
- **Extensive case study integration** - advanced format with multiple detailed case studies requiring comprehensive analysis
- **Innovative analytical approach** - pioneering assessment methods focusing on critical evaluation and strategic thinking
- **Eight thematic content organization** - unique approach organizing content around integrated business themes
- **Advanced critical thinking** - questions require sophisticated evaluation and synthesis of business concepts
- **Technical and analytical excellence** - strong reputation for developing advanced analytical and evaluative skills
- **Application-based assessment** - emphasis on applying complex business theory to multifaceted real-world scenarios

${OCR_ALEVEL_BUS_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_BUS_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_BUS_QUESTION_TEMPLATES}

${OCR_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS}

${OCR_ALEVEL_BUS_KEY_THEORIES}

${OCR_ALEVEL_BUS_CALCULATION_FORMULAS}

${OCR_ALEVEL_BUS_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR A-Level Business specification.

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
1. **A-Level Standard**: Appropriate depth and rigour
2. **Authentic OCR Style**: Match OCR paper format and language
3. **Clear Mark Allocation**: State marks in brackets
4. **Appropriate Difficulty**:
   - Easy: Definitions, explanations (2-6 marks)
   - Medium: Analysis questions (8-12 marks)
   - Hard: Evaluation/essay questions (16-20 marks)

## Response Format
Return JSON with:
- "content": Question text
- "marks": Total marks
- "solution": Complete mark scheme
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('business')}`;
}

export function getOCRALevelBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term [concept]" [2 marks]
- "State two [features/factors]" [2 marks]
- "Explain one [benefit/drawback/reason]" [4 marks]
- "Calculate [measure]. Show your working" [4-5 marks]

**Mark Scheme Format:**
- Definitions: 2 marks for full, 1 mark for partial
- Explanations: Knowledge + Development + Context
- Calculations: Formula + Working + Answer with units

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring analysis (AO2/AO3).

**Question Types for Medium:**
- "Analyse [business issue/impact]" [8-10 marks]
- "Analyse the factors that might influence [decision]" [10 marks]
- "Analyse the benefits/problems of [approach]" [8 marks]

**Mark Scheme Format (Levels):**
- Level 3 (7-10): Thorough analysis, developed chains
- Level 2 (4-6): Good analysis, some development
- Level 1 (1-3): Limited, mainly descriptive

Include indicative content

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a question requiring evaluation (AO3/AO4).

**Question Types for Hard:**
- "Evaluate [decision/proposition]" [16-20 marks]
- "Assess the view that [claim]" [16 marks]
- "Recommend and justify [decision]" [16 marks]
- "Discuss [business issue]" [20 marks]

**Mark Scheme Format (20 marks):**
- Level 4 (17-20): Thorough, balanced, justified conclusion
- Level 3 (11-16): Good evaluation, reasoned conclusions
- Level 2 (6-10): Some evaluation, limited balance
- Level 1 (1-5): Limited, mainly descriptive

Include detailed indicative content

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level Business question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use OCR command words and format
- Include mark allocation
- For evaluation, require balanced judgement
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

export function getOCRALevelBusinessCaseStudyPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Business CASE STUDY question set.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a case study with:
1. Business scenario (150-200 words) with data
2. 4-5 compulsory questions

**Question Structure:**
- Q1: Define [term] [2 marks]
- Q2: Calculate [measure]. Show working [4-5 marks]
- Q3: Explain [concept/reason] [4-6 marks]
- Q4: Analyse [business issue] [8-12 marks]
- Q5: Evaluate/Recommend [decision] [16-20 marks]

**Total**: 60 marks

Return valid JSON.`;
}

export function getOCRALevelBusinessEssayPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Business 20-MARK ESSAY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create an essay requiring:
- Balanced argument
- Use of relevant theory
- Application to business contexts
- Clear judgement

**Mark Scheme:**
Level 4 (17-20): Thorough, balanced, justified
Level 3 (11-16): Good, reasoned
Level 2 (6-10): Some evaluation
Level 1 (1-5): Limited

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
      return { min: 16, max: 20 };
  }
}
