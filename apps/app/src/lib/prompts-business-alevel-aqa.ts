// AQA A-Level Business (7132) Question Generation Prompts
// Based on analysis of actual AQA past papers and official mark schemes
// Reference: https://www.aqa.org.uk/subjects/business/as-and-a-level/business-7131-7132

import { Difficulty, Topic } from '@/types';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';
import {
  getRandomVarietyInstructions,
  getDiagramDocsForSubject,
} from './prompts-common';

// ============================================================================
// AQA A-LEVEL BUSINESS SPECIFICATION DETAILS (7132)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_ALEVEL_BUS_COGNITIVE_CHALLENGE = `
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

const AQA_ALEVEL_BUS_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Business Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of terms, concepts, theories, methods and models to show understanding of how individuals and organisations are affected by and respond to business issues | 17-23% |
| **AO2** | Apply knowledge and understanding to various business contexts to show how individuals and organisations are affected by and respond to issues | 24-30% |
| **AO3** | Analyse issues within business, showing an understanding of the impact on individuals and organisations of external and internal influences | 24-30% |
| **AO4** | Evaluate quantitative and qualitative information to make informed judgements and propose evidence-based solutions to business issues | 24-30% |

### Paper Structure
| Paper | Title | Content | Format | Marks | Time |
|-------|-------|---------|--------|-------|------|
| **Paper 1** | Business 1 | Topics 1-6 | Section A: 15 MCQs (15 marks), Section B: Short answer + essay (70 marks) | 85 | 1hr 45m |
| **Paper 2** | Business 2 | Topics 7-10 | Section A: 15 MCQs (15 marks), Section B: Short answer + essay (70 marks) | 85 | 1hr 45m |
| **Paper 3** | Business 3 | All topics | Case study with compulsory questions | 80 | 2hr |

### Section B Structure (Papers 1 & 2)
- Data response question with short answers (approx. 20-25 marks)
- One essay from a choice of two (25 marks)

### Paper 3 Structure
- Extended case study based on a real or realistic business
- 4-5 compulsory questions of increasing difficulty
- Final question typically 25 marks requiring evaluation

### Key Command Words (Official AQA Definitions)
- **Define**: Give the precise meaning of a term or concept (AO1)
- **State**: Express briefly and clearly (AO1)
- **Calculate**: Determine the numerical value with working shown (AO2)
- **Explain**: Set out purposes, reasons, or mechanisms using business terminology (AO1/AO2)
- **Analyse**: Examine in detail to show meaning, identify causes, effects and interrelationships (AO3)
- **Assess**: Consider several options and weigh them up to come to a supported judgement (AO4)
- **Evaluate**: Consider arguments for and against and reach a conclusion supported by evidence (AO4)
- **Recommend/Justify**: Advise on a course of action with reasons (AO4)
- **To what extent**: Consider the degree to which a proposition is valid (AO4)
`;

const AQA_ALEVEL_BUS_QUESTION_TEMPLATES = `
## Authentic AQA A-Level Business Question Formats (From Past Papers)

### Type 1: Definition Questions (2 marks)
Format: "What is meant by '[business term]'?"
**Real examples from past papers:**
- "What is meant by 'corporate objectives'?" [2 marks]
- "What is meant by 'market share'?" [2 marks]
- "What is meant by 'span of control'?" [2 marks]
Marking:
- 2 marks for full, accurate definition
- 1 mark for partial understanding

### Type 2: Explanation Questions (4-6 marks)
Format: "Explain [concept/relationship/reason]"
**Real examples:**
- "Explain one reason why a business might have a wide span of control" [4 marks]
- "Explain how a strong brand might give a business a competitive advantage" [6 marks]
- "Explain one benefit to a business of adopting an ethical approach" [4 marks]
Marking:
- Knowledge of concept (1-2 marks)
- Application to context (1-2 marks)
- Development/analysis (1-2 marks)

### Type 3: Analysis Questions (9 marks)
Format: "Analyse [business issue/concept/decision]"
**Real examples:**
- "Analyse the benefits to Costa of using market mapping" [9 marks]
- "Analyse the problems Business X might face in implementing change" [9 marks]
- "Analyse the factors that might influence the price set for product Y" [9 marks]
Marking (Levels):
- Level 3 (7-9): Thorough analysis with clear chains of reasoning
- Level 2 (4-6): Some analysis but limited development
- Level 1 (1-3): Limited analysis, mainly descriptive

### Type 4: Evaluation Essay (25 marks)
Format: "Evaluate/Assess/To what extent [business proposition]"
**Real examples:**
- "Evaluate whether Porter's Strategic Matrix is a useful model for developing business strategy" [25 marks]
- "To what extent do you agree that all businesses should pursue growth?" [25 marks]
- "Assess the view that the only objective of a business should be profit maximisation" [25 marks]
- "Evaluate the likely impact of implementing lean production on [Business X]" [25 marks]

**Authentic AQA Essay Question Patterns:**

Pattern 1 - "Evaluate the view that..."
- "Evaluate the view that managing change is the most important factor in business success"
- "Evaluate the view that shareholders should be the main focus of a business"
- "Evaluate the view that organic growth is always preferable to external growth"

Pattern 2 - "To what extent..."
- "To what extent do you agree that motivation is the key to improving productivity?"
- "To what extent is cash flow more important than profit for a new business?"
- "To what extent should a business aim to minimise its costs?"

Pattern 3 - "Assess the importance of..."
- "Assess the importance of corporate culture in achieving strategic objectives"
- "Assess the importance of leadership style in managing organisational change"
- "Assess the importance of market research in reducing risk"

Pattern 4 - "Discuss/Justify..."
- "Discuss the factors a business should consider before expanding internationally"
- "Justify which source of finance Business X should use"
- "Discuss the benefits and drawbacks of delayering"

### Type 5: Calculation Questions (4-6 marks)
Format: "Calculate [financial measure]. Show your working"
**Real examples:**
- "Calculate the payback period for this investment. Show your working" [4 marks]
- "Calculate the net profit margin. Show your working" [4 marks]
- "Calculate the break-even output" [4 marks]
- "Calculate the ARR (Average Rate of Return). Show your working" [6 marks]
Marking:
- Method marks for correct approach
- Accuracy marks for correct answer
- Formula stated (1 mark)
- Correct substitution (1 mark)
- Correct answer with units (2 marks)

### Type 6: Recommend/Justify Questions (12-16 marks)
Format: "Recommend which option Business X should choose. Justify your answer"
**Real examples:**
- "Recommend which location Business X should choose. Justify your answer" [12 marks]
- "Recommend whether Business X should expand using internal or external growth. Justify your answer" [16 marks]
Marking (Levels):
- Must consider multiple options
- Must reach and justify a clear recommendation
- Use quantitative and qualitative factors
`;

const AQA_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level Business Mark Scheme Conventions (From Official Mark Schemes)

### How Examiners Apply Levels of Response
Start at lowest level. Use as a ladder to see whether the answer meets descriptor for that level.
Use a "best fit" approach - if response covers different aspects of different levels, place in level that best matches overall quality.

### 25-Mark Essay Levels (Official AQA Grid)
**Level 5 (21-25 marks):**
A thorough, well-developed and well-supported line of argument and conclusion is presented.
- Shows detailed knowledge and understanding of relevant business concepts, terms, and theories (AO1)
- Applies knowledge and understanding to business contexts throughout (AO2)
- Uses a logical structure with clear links between arguments (AO3)
- Evaluates relevant options and/or theories, weighing up evidence and reaching a well-supported judgement (AO4)

**Level 4 (16-20 marks):**
A good line of argument and conclusion is presented.
- Shows good knowledge and understanding of relevant concepts
- Makes appropriate application to business contexts
- Presents a coherent structure with clear analysis
- Makes some evaluative judgements, though may not be fully developed

**Level 3 (11-15 marks):**
A reasonable line of argument is presented.
- Shows reasonable knowledge and understanding
- Some application to contexts
- Analysis present but may be one-sided or underdeveloped
- Limited evaluation - assertions rather than supported judgements

**Level 2 (6-10 marks):**
Limited argument presented.
- Some knowledge demonstrated with gaps or errors
- Limited application
- Little genuine analysis
- Minimal or no evaluation

**Level 1 (1-5 marks):**
Very limited response.
- Little relevant knowledge
- No meaningful application
- No analysis or evaluation
- May be descriptive list

### 9-Mark Analysis Question Levels
**Level 3 (7-9 marks):** Thorough analysis, multiple chains of reasoning developed
**Level 2 (4-6 marks):** Some analysis but limited development
**Level 1 (1-3 marks):** Limited, mainly knowledge or description

### Calculation Question Marking
- Award method marks even if final answer incorrect
- Accept alternative correct methods
- Units required for full marks (£, %, years, etc.)
- Correct use of formula (1 mark)
- Correct substitution of figures (1 mark)
- Correct final answer with units (remaining marks)

### Application and Context Marks
Examiners look for:
- Use of data/figures from stimulus material
- Reference to specific business name/scenario
- Industry-specific factors
- Realistic business examples
- Quantitative evidence where appropriate

### Evaluation Indicators (What Gets Top Marks)
Mark schemes explicitly reward:
- "It depends on..." (identifying contingent factors)
- Short-term vs long-term considerations
- Consideration of stakeholder perspectives
- Weighing up of quantitative and qualitative factors
- Recognition of limitations of data/theories
- Final supported judgement that answers the question
- Counter-arguments developed (not just stated)
`;

const AQA_ALEVEL_BUS_KEY_THEORIES = `
## Key Business Theories and Models for AQA A-Level

### Strategic Analysis Models
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats
- **PESTLE Analysis**: Political, Economic, Social, Technological, Legal, Environmental
- **Porter's Five Forces**: Competitive rivalry, supplier power, buyer power, threat of substitution, threat of new entry
- **Porter's Generic Strategies**: Cost leadership, differentiation, focus
- **Ansoff's Matrix**: Market penetration, product development, market development, diversification
- **Boston Matrix**: Stars, Cash Cows, Question Marks, Dogs

### Financial Analysis
- **Ratio Analysis**: Liquidity, profitability, efficiency, gearing ratios
- **Investment Appraisal**: Payback period, ARR, NPV
- **Break-even Analysis**: Break-even point, margin of safety, contribution

### Human Resource Models
- **Maslow's Hierarchy of Needs**: Physiological, safety, social, esteem, self-actualisation
- **Herzberg's Two-Factor Theory**: Hygiene factors vs motivators
- **Taylor's Scientific Management**: Time and motion, piece-rate pay
- **Mayo's Human Relations**: Hawthorne studies, social needs at work
- **Leadership Styles**: Autocratic, democratic, laissez-faire, paternalistic

### Marketing Models
- **Marketing Mix (7Ps)**: Product, Price, Place, Promotion, People, Process, Physical evidence
- **Product Life Cycle**: Introduction, growth, maturity, decline
- **Price Elasticity of Demand**: Elastic, inelastic, unitary elastic

### Operations Management
- **Lean Production**: JIT, Kaizen, cell production
- **Quality Management**: TQM, quality circles, zero defects
- **Capacity Utilisation**: Current output/maximum output × 100

### Organisational Theory
- **Greiner's Growth Model**: Creativity, direction, delegation, coordination, collaboration
- **Lewin's Force Field Analysis**: Driving forces vs restraining forces
- **Kotter's 8-Step Change Model**
`;

const AQA_ALEVEL_BUS_CALCULATION_FORMULAS = `
## Key Business Calculations for AQA A-Level

### Profitability Ratios
- **Gross Profit Margin** = (Gross Profit / Revenue) × 100
- **Net Profit Margin** = (Net Profit / Revenue) × 100
- **Return on Capital Employed (ROCE)** = (Operating Profit / Capital Employed) × 100

### Liquidity Ratios
- **Current Ratio** = Current Assets / Current Liabilities
- **Acid Test Ratio** = (Current Assets - Stock) / Current Liabilities

### Efficiency Ratios
- **Asset Turnover** = Revenue / Net Assets
- **Stock Turnover** = Cost of Sales / Average Stock
- **Debtor Days** = (Trade Receivables / Revenue) × 365
- **Creditor Days** = (Trade Payables / Cost of Sales) × 365

### Gearing Ratios
- **Gearing** = (Non-current Liabilities / Capital Employed) × 100
- **Interest Cover** = Operating Profit / Interest Payable

### Investment Appraisal
- **Payback Period** = Initial Investment / Annual Cash Flow (for equal cash flows)
- **Average Rate of Return (ARR)** = (Average Annual Profit / Initial Investment) × 100
- **Net Present Value (NPV)** = Sum of (Cash Flow × Discount Factor) - Initial Investment

### Break-even Analysis
- **Break-even Output** = Fixed Costs / Contribution per Unit
- **Contribution per Unit** = Selling Price - Variable Cost per Unit
- **Total Contribution** = Contribution per Unit × Units Sold
- **Margin of Safety** = Actual Output - Break-even Output

### Productivity and Efficiency
- **Labour Productivity** = Output / Number of Employees
- **Capacity Utilisation** = (Current Output / Maximum Output) × 100
- **Labour Turnover** = (Number Leaving / Average Employees) × 100
- **Absenteeism** = (Days Absent / Total Working Days) × 100

### Marketing Calculations
- **Market Share** = (Company Sales / Total Market Sales) × 100
- **Market Growth** = ((Current Year - Previous Year) / Previous Year) × 100
- **PED** = % Change in Quantity Demanded / % Change in Price
`;

const AQA_ALEVEL_BUS_ESSAY_GUIDANCE = `
## Essay Writing Guidance for 25-Mark Questions

### What Examiners Want to See

**Level 5 responses show:**
1. A clear thesis/argument throughout
2. Multiple developed points with chains of reasoning
3. Consistent application to the business context
4. Evaluation at each point (not just at the end)
5. A final judgement that answers the question directly
6. Use of relevant theory and terminology

### Example Chain of Reasoning (25-Mark Essay)

**Weak (Level 2):** "Profit maximisation is important because businesses need profit to survive."

**Strong (Level 5):** "Profit maximisation provides retained profits for reinvestment → this enables organic growth through capacity expansion → increased market share leads to economies of scale → lower unit costs improve competitiveness → this creates a virtuous cycle supporting long-term sustainability. However, excessive focus on short-term profits may lead to cost-cutting that damages quality → this alienates customers and skilled workers → leading to declining market share in the long run."

### Structure for 25-Mark Essays

**Introduction (1-2 sentences):**
- Define key terms if necessary
- Signal your argument/position

**Main Body (3-4 developed paragraphs):**
Each paragraph should contain:
- Point with knowledge (AO1)
- Application to context (AO2)
- Analysis - chain of reasoning (AO3)
- Evaluation - counter-argument or limitation (AO4)

**Conclusion (1 paragraph):**
- Answer the question directly
- Reach a supported judgement
- Acknowledge key contingent factors ("it depends on...")

### Evaluation Techniques

**1. Context-Dependent:**
"The impact depends on factors such as:
- The size and stage of the business
- The industry/market conditions
- The timescale being considered
- Available resources"

**2. Stakeholder Perspective:**
"While this benefits shareholders through increased dividends, employees may face job losses, creating conflict between stakeholder objectives."

**3. Short-Run vs Long-Run:**
"In the short run, cost-cutting improves profit margins. However, in the long run, reduced investment in training and quality may damage competitiveness."

**4. Theory vs Reality:**
"While Porter's model suggests differentiation leads to premium pricing, in practice customers may not perceive sufficient value difference to justify higher prices."

### Common Mistakes (From Examiner Reports)
1. Describing rather than analysing
2. One-sided arguments without genuine evaluation
3. Not using the case study data
4. Making assertions without reasoning
5. Generic answers not applied to context
6. Weak conclusions that don't answer the question
7. Not using relevant business terminology
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelBusinessSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert AQA A-Level Business examiner creating exam-style questions.

## AQA BUSINESS STYLE
**AQA's Advanced Contemporary Approach:** Comprehensive, analytical questions emphasizing current business environments and strategic thinking.
- **Clear and straightforward structure** - most predictable and accessible A-Level business format
- **Contemporary business emphasis** - focus on modern business challenges, current market conditions, and recent case studies
- **Comprehensive content coverage** - extensive syllabus with broader business theory coverage than other boards
- **Critical thinking and analysis** - questions require strategic analysis and application to real business situations
- **Diverse question formats** - multiple-choice, short-answer, and extended essay questions testing different skill levels
- **Real-world business application** - strong emphasis on connecting theory to contemporary business practice

${AQA_ALEVEL_BUS_COGNITIVE_CHALLENGE}

${AQA_ALEVEL_BUS_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_BUS_QUESTION_TEMPLATES}

${AQA_ALEVEL_BUS_MARK_SCHEME_CONVENTIONS}

${AQA_ALEVEL_BUS_KEY_THEORIES}

${AQA_ALEVEL_BUS_CALCULATION_FORMULAS}

${AQA_ALEVEL_BUS_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the AQA A-Level Business specification.

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
1. **A-Level Standard**: Questions must reflect the depth and rigour expected at A-Level
2. **Authentic AQA Style**: Match the exact language, format, and structure of real AQA papers
3. **Clear Mark Allocation**: State marks clearly [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, short explanations (2-6 marks)
   - Medium: Analysis questions with chains of reasoning (9-12 marks)
   - Hard: Evaluation essays requiring judgement (16-25 marks)
5. **Assessment Objective Focus**:
   - Easy: AO1 (knowledge) + some AO2 (application)
   - Medium: AO2 (application) + AO3 (analysis)
   - Hard: AO3 (analysis) + AO4 (evaluation)
6. **Business Context**: For medium/hard questions, provide realistic business scenarios

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with mark allocation
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('business')}`;
}

export function getAQAALevelBusinessQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "What is meant by '[business term]'?" [2 marks]
- "State two [features/characteristics/factors]" [2 marks]
- "Explain one reason why [business concept]" [4 marks]
- "Calculate [financial measure]. Show your working" [4 marks]
- "Explain one benefit/drawback of [business decision]" [4-6 marks]

**Mark Scheme Format:**
- Definition: 2 marks for full definition, 1 mark for partial
- Explanation: Knowledge (1-2) + Development (1-2) + Context (1-2)
- Calculation: Formula (1) + Working (1-2) + Answer with units (1)

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring analysis with chains of reasoning (AO2/AO3).

**Question Types for Medium:**
- "Analyse [business issue/decision/concept]" [9 marks]
- "Analyse the benefits/problems of [business action]" [9 marks]
- "Analyse the factors that might influence [business decision]" [9 marks]
- "Recommend which [option] Business X should choose. Justify your answer" [12 marks]

**Mark Scheme Format:**
Use levels of response:
- Level 3 (7-9): Thorough analysis with multiple developed chains of reasoning, clear application to context
- Level 2 (4-6): Some analysis but limited development or one-sided
- Level 1 (1-3): Limited analysis, mainly descriptive or list-like

Include indicative content listing key analytical points

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a question requiring evaluation and judgement (AO3/AO4).

**Question Types for Hard:**
- "Evaluate [business proposition]" [25 marks]
- "To what extent do you agree that [business statement]?" [25 marks]
- "Assess the view that [business claim]" [25 marks]
- "Evaluate the likely impact of [business decision] on [stakeholder/business]" [25 marks]

**Mark Scheme Format:**
Use levels of response:
- Level 5 (21-25): Thorough, well-developed argument with clear judgement
- Level 4 (16-20): Good argument with some well-supported evaluation
- Level 3 (11-15): Reasonable analysis but evaluation underdeveloped
- Level 2 (6-10): Limited argument with little genuine evaluation
- Level 1 (1-5): Very limited, mainly descriptive

Include indicative content with arguments for and against

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('business', difficulty);

  return `Generate an AQA A-Level Business question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${enhancedMarkSchemeGuidance}

**Critical Requirements:**
- Use formal business terminology as in real AQA A-Level papers
- Include mark allocation in brackets
- For evaluation questions, mark scheme must reward balanced argument and judgement
- For calculation questions, include formula and expected working
- Ensure business concepts are technically accurate

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full level descriptors, indicative content with business theory and real examples, stakeholder perspectives, model answer structure, and examiner tips",
  "diagram": <optional DiagramSpec - include when question benefits from visual>
}

${getDiagramDocsForSubject('business')}`;
}

// Additional prompt functions for specific question types

export function getAQAALevelBusinessCaseStudyPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Business CASE STUDY question set (Paper 3 style).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a case study with:
1. A detailed business scenario (150-200 words) about a realistic UK business
2. Relevant data (financial figures, market data, etc.)
3. 4-5 linked questions of increasing difficulty

**Question Structure:**
- Question 1: Calculate [financial measure] [4 marks]
- Question 2: Explain [concept/reason] [6 marks]
- Question 3: Analyse [business issue] [9 marks]
- Question 4: Recommend and justify [decision] [12 marks]
- Question 5: Evaluate [strategic proposition] [25 marks]

**Total marks**: 56 marks

**Mark scheme must:**
- Reward use of case study data
- Use levels of response for 9+ mark questions
- Include indicative content

Return valid JSON with the case study as part of content.`;
}

export function getAQAALevelBusinessEssayPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Business 25-MARK ESSAY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create an essay question that:
- Requires a balanced argument
- Allows use of relevant business theory
- Enables evaluation of different perspectives
- Requires a supported conclusion

**Question Patterns to Use:**
- "Evaluate the view that..."
- "To what extent do you agree that..."
- "Assess the importance of..."

**Mark Scheme:**
Level 5 (21-25): Thorough, well-developed and well-supported argument
Level 4 (16-20): Good line of argument with some evaluation
Level 3 (11-15): Reasonable argument, limited evaluation
Level 2 (6-10): Limited argument, little evaluation
Level 1 (1-5): Very limited, mainly descriptive

Include detailed indicative content.

Return valid JSON.`;
}

export function getAQAALevelBusinessMCQPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Business MULTIPLE CHOICE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a multiple choice question with:
- Clear stem (question)
- Four options (A, B, C, D)
- One definitively correct answer
- Three plausible distractors

**Types of MCQ:**
1. Definition-based
2. Calculation-based (provide data)
3. Theory application
4. Concept identification

**Marks**: 1 mark

**Solution must:**
- State correct answer
- Briefly explain why it's correct
- Explain why each distractor is wrong

Return valid JSON.`;
}

// Helper function
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 6 };
    case 'medium':
      return { min: 9, max: 12 };
    case 'hard':
      return { min: 16, max: 25 };
  }
}
