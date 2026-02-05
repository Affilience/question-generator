// Edexcel (Pearson) A-Level Economics A (9EC0) Question Generation Prompts
// Based on analysis of actual Edexcel past papers (June 2022, 2023, 2024)
// and official mark schemes

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';
import { getEnhancedEssayMarkSchemePrompt } from './prompts-essay-markscheme';

// A-Level Economics mark ranges based on Edexcel specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 5 };    // Basic knowledge, definitions, simple calculations
    case 'medium':
      return { min: 8, max: 12 };   // Substantial analysis with chains of reasoning
    case 'hard':
      return { min: 15, max: 25 };  // Extended evaluation essays requiring judgement
  }
}

// ============================================================================
// EDEXCEL A-LEVEL ECONOMICS A SPECIFICATION DETAILS (9EC0)
// Based on official Pearson Edexcel specification and past paper analysis
// ============================================================================

const EDEXCEL_ALEVEL_ECON_COGNITIVE_CHALLENGE = `
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

**Easy (2-5 marks):** Knowledge and understanding - definitions, basic explanations
**Medium (8-12 marks):** SUBSTANTIAL analysis with multiple chains of reasoning, NOT simple data interpretation
**Hard (15-25 marks):** Extended evaluation essays requiring weighing arguments and reaching judgements
`;

const EDEXCEL_ALEVEL_ECON_ASSESSMENT_OBJECTIVES = `
## Edexcel A-Level Economics A Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of terms/concepts and theories/models to show an understanding of the behaviour of economic agents and how they are affected by and respond to economic issues | 20-24% |
| **AO2** | Apply knowledge and understanding to various economic contexts | 26-30% |
| **AO3** | Analyse issues within economics, showing an understanding of their impact on economic agents | 26-30% |
| **AO4** | Evaluate economic arguments and use quantitative and qualitative evidence to support informed judgements relating to economic issues | 20-24% |

### Paper Structure
| Paper | Title | Themes | Time | Marks | Weighting |
|-------|-------|--------|------|-------|-----------|
| **Paper 1** | Markets and Business Behaviour | 1 & 3 (Micro) | 2h | 100 | 35% |
| **Paper 2** | The National and Global Economy | 2 & 4 (Macro) | 2h | 100 | 35% |
| **Paper 3** | Microeconomics and Macroeconomics | 1, 2, 3 & 4 | 2h | 100 | 30% |

### Paper 1 & 2 Structure
- **Section A** (5 marks): Short questions on definitions/explanations
- **Section B** (15 marks): Two-part data response question
  - Part (a): Typically 5 marks analysis
  - Part (b): Typically 10 marks evaluation
- **Section C** (30 marks): Extended open-response questions (choice of 1 from 2)
  - Part (a): 10 marks (knowledge/analysis)
  - Part (b): 20 marks (evaluation with judgement)
- **Section D** (50 marks): Data response (compulsory)
  - Typically 4-5 questions of varying marks
  - Progressive difficulty
  - Final question worth 25 marks (evaluation)

### Paper 3 Structure
- **Section A** (30 marks): Quantitative skills
  - MCQs and short questions requiring calculations
  - Data interpretation
- **Section B** (70 marks): Extended questions
  - Choice of 1 from 2 questions (both themes)
  - Each question 35 marks: (a) 10 marks + (b) 25 marks

### Quantitative Skills
Minimum 20% of marks assess quantitative skills:
- Interpreting data
- Calculating percentages, elasticities
- Interpreting index numbers
- Drawing and interpreting diagrams
- Making calculations from diagrams

### Key Command Words
- **State/Identify**: Brief answer showing knowledge (AO1)
- **Define**: State meaning of term (AO1)
- **Explain**: Set out with reasons/causes (AO1/AO2)
- **Calculate**: Work out numerical answer (AO2)
- **Analyse**: Examine with chains of reasoning (AO3)
- **Assess/Evaluate/Discuss**: Weigh up, reach judgement (AO4)
`;

const EDEXCEL_ALEVEL_ECON_QUESTION_TEMPLATES = `
## Authentic Edexcel A-Level Economics Question Formats (From Past Papers)

### Type 1: Definition (2 marks)
Format: "Define the term '[economic term]'"
OR "What is meant by '[term]'?"
Example: "Define the term 'opportunity cost'"
- 2 marks for full definition
- 1 mark for partial definition

### Type 2: Brief Explanation (2-3 marks)
Format: "Explain one [reason/example/factor]..."
Example: "Explain one factor that might cause a shift in the supply curve"
- Usually requires point + development

### Type 3: Data Extraction with Context (4-5 marks)
Format: "With reference to Extract [X], explain [concept/relationship]"
Example: "With reference to Extract A, explain how a fall in interest rates might affect consumer spending"
- Must use data from extract
- Requires economic explanation

### Type 4: Analysis (8-10 marks)
Format: "With reference to [Extract/Figure], analyse [economic issue]"
Example: "With reference to Extract B, analyse the likely effects of a depreciation of sterling on UK exporters"
- Data must be used
- Multiple chains of analysis required
- Award marks for developed points

### Type 5: Short Evaluation (10-12 marks)
Format: "Assess/Evaluate [economic proposition/policy]"
Example: "Assess the case for using monetary policy rather than fiscal policy to increase economic growth"
- Uses levels of response
- Evaluation throughout
- Must reach judgement

### Type 6: Extended Evaluation Part (a) (10 marks)
Format: "Explain [concept/theory/relationships]"
Example: "Explain how a monopolist determines its profit-maximising price and level of output"
- Theoretical depth required
- Diagrams expected
- Clear logical structure

### Type 7: Extended Evaluation Part (b) (20-25 marks)
Format: "Evaluate/Assess/Discuss [proposition]"

**Authentic Edexcel Essay Question Patterns (From Past Papers & Practice Questions):**

Pattern 1 - "Evaluate the extent to which..." (most common Edexcel pattern)
- "Evaluate the extent to which oligopoly leads to outcomes that are beneficial for consumers, using the UK supermarket industry or an industry of your choice" [25 marks]
- "Evaluate the extent to which monopsony power distorts economic efficiency and welfare, using the UK supermarket industry or an industry of your choice" [25 marks]
- "Evaluate the extent to which public goods, such as flood defences, justify government provision and funding" [25 marks]

Pattern 2 - "Evaluate the effectiveness of..."
- "Evaluate the effectiveness of indirect taxation as a policy to correct market failures associated with unhealthy consumption, using the UK soft drinks industry" [25 marks]
- "Evaluate the effectiveness of supply-side policies in reducing unemployment" [25 marks]

Pattern 3 - "Evaluate whether..."
- "Evaluate whether monopoly power leads to market failure in the search engine industry or an industry of your choice" [25 marks]
- "Evaluate whether natural monopolies are better managed in the public or private sector, using the UK water industry" [25 marks]
- "Evaluate whether increasing contestability improves economic efficiency in banking or an industry of your choice" [25 marks]

Pattern 4 - "Evaluate the case for..."
- "Evaluate the case for increasing state ownership in industries, using the UK rail industry or an industry of your choice" [25 marks]
- "Evaluate the case for using monetary policy rather than fiscal policy to increase economic growth" [25 marks]

Pattern 5 - "Evaluate the impact of..."
- "Evaluate the impact of large international businesses on domestic market competition and welfare, using the UK retail or technology industry" [25 marks]
- "Evaluate the micro and macroeconomic impact of a significant rise in average UK house prices" [25 marks]

**Note:** Edexcel questions often include "or an industry/country of your choice" to allow student flexibility in application.

- Comprehensive evaluation
- Balance of arguments
- Supported judgement essential
- Reference to real-world context rewarded
- Uses levels of response

### Type 8: Quantitative (Paper 3) (4-8 marks)
Format: "Calculate [measure] and interpret the result"
OR "Using the data in Figure [X], calculate..."
- May require multiple steps
- Interpretation marks separate
`;

const EDEXCEL_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS = `
## Edexcel A-Level Economics Mark Scheme Conventions (From Official 2021-2023 Mark Schemes)

### Assessment Structure (From Pearson Assessment Support)
Papers 1 and 2 carry 35% weighting each; Paper 3 carries 30% weighting.
Maximum total mark is 335 across all three papers.
The 10-, 12-, 15- and 25-mark questions use levels-based marking grids.

### KAA (Knowledge, Application, Analysis) and Evaluation Split for 25-Mark Questions
- **KAA Component: 16 marks**
- **Evaluation Component: 9 marks**

**KAA Level 4 (13-16 marks):** Demonstrates sophisticated understanding with strong applied reasoning linked to evidence. "Consistently well-developed links through a coherent chain of reasoning which addresses the question."

**KAA Level 3 (9-12 marks):** Shows solid understanding with relevant application and developed chains of reasoning.

**KAA Level 2 (5-8 marks):** Some relevant points with partial development.

**KAA Level 1 (1-4 marks):** Limited or fragmented understanding with minimal development.

**Evaluation Level 3 (7-9 marks):** Provides thorough, balanced evaluation considering multiple perspectives. "Top level evaluation displays relevant reasoning and appropriate reference to context."

**Evaluation Level 2 (4-6 marks):** Some evaluation but not comprehensive.

**Evaluation Level 1 (1-3 marks):** Limited or partial evaluation.

### Examiner's Report Guidance (June 2023)
- "Given the time constraints, it is only necessary to write two well-developed paragraphs to achieve full marks for KAA"
- "No introduction needed; start answering immediately"
- Quality surpasses quantity - one well-explained paragraph beats multiple shallow ones
- Structure expected: KAA → Evaluation → KAA → Evaluation → Conclusion with substantiated judgement

### Question-Specific Marking

**8-mark Examine questions:** AO1 (2) + AO2 (2) + AO3 (2) + AO4 (2). Requires two factors explained in context with brief evaluation. Structure: point → explanation → context → evaluation.

**10-mark Assess questions:** 6 marks KAA, 4 marks evaluation. One substantial point per side can achieve full marks with efficient time management.

**12-mark Discuss questions:** Emphasis on depth over breadth - fewer developed points score better than scattered arguments.

**15-mark Discuss/Evaluate:** Requires detailed argument development. Two substantial points thoroughly evaluated outperform multiple superficial points.

### Diagram Requirements
Essential for cost/revenue, externalities, subsidies, market structures:
- Clearly labelled axes (e.g., "price level" not just "price")
- Correct curves with labels
- Show directional changes with arrows
- Integrate into written explanation - "diagrams should not stand alone"
- Up to 4 marks available for diagram alone in some questions

### Quantitative Questions
- Method marks available even if arithmetic wrong
- Must show working for full marks
- Units required where relevant (%, £, £bn)
- Follow-through marks for subsequent calculations
- "Double-check answers for sense" - examiner advice
- Note percentage vs percentage point distinctions

### Data Response Expectations
- Extracts must be explicitly referenced
- "Picture yourself as an economist advising a firm or sector" - examiner guidance
- Quotations from data earn application marks
- Statistical evidence must be used accurately
- Interpretation required, not just description

### Authentic Evaluation Phrases (From Mark Schemes)
Mark schemes explicitly reward:
- "However, this depends on..." (magnitude, time period, circumstances)
- "On the other hand..." (counter-arguments)
- "The extent to which this is significant depends on..."
- "In the short run... whereas in the long run..."
- "This may not be the case if..." (qualifying conditions)
- "If... then... significance" framework for conclusions
- Weighing up of arguments
- Reference to ceteris paribus assumptions
- Consideration of different stakeholders
- Real-world examples and data
`;

const EDEXCEL_ALEVEL_ECON_KEY_DIAGRAMS = `
## Key Economics Diagrams for Edexcel A-Level

### Microeconomics (Papers 1 & 3)
- Demand and supply shifts
- Consumer and producer surplus
- PED diagrams (elastic vs inelastic)
- Cost curves (AFC, AVC, AC, MC, TC)
- Revenue curves (AR, MR, TR)
- Profit maximisation (MC=MR)
- Perfect competition (short-run and long-run)
- Monopoly equilibrium
- Monopolistic competition
- Kinked demand curve
- Natural monopoly
- Labour market equilibrium
- MRP and wage determination
- Monopsony in labour market
- Minimum wage effects
- Externality diagrams (MSC/MSB, MPC/MPB)
- Public goods
- Tax incidence
- Subsidy effects

### Macroeconomics (Papers 2 & 3)
- Circular flow of income
- AD curve (shifts)
- SRAS curve (shifts)
- Classical LRAS
- Keynesian LRAS
- AD/AS equilibrium
- Multiplier process (diagram)
- Phillips curve (short-run and long-run)
- PPF and economic growth
- Lorenz curve
- Exchange rate determination
- J-curve effect

### Diagram Marking
Typical allocation:
- Correctly labelled axes: 1 mark
- Correctly drawn curves: 1 mark
- Correct shift direction: 1 mark
- New equilibrium shown: 1 mark
- Areas identified (surplus, welfare loss): 1 mark
`;

const EDEXCEL_ALEVEL_ECON_FORMULAS = `
## Key Economics Formulas for Edexcel A-Level

### Elasticity
- **PED** = % change in Qd / % change in P
- **YED** = % change in Qd / % change in Y
- **XED** = % change in Qd of A / % change in P of B
- **PES** = % change in Qs / % change in P

### Costs and Revenue
- Total Revenue (TR) = P × Q
- Average Revenue (AR) = TR / Q = P
- Marginal Revenue (MR) = ΔTR / ΔQ
- Total Cost (TC) = FC + VC
- Average Cost (AC) = TC / Q
- Marginal Cost (MC) = ΔTC / ΔQ
- Profit = TR - TC

### Macroeconomics
- AD = C + I + G + (X - M)
- Multiplier = 1 / (1 - MPC) = 1 / MPS = 1 / MPW
- MPC + MPS = 1
- MPC = ΔC / ΔY
- GDP growth rate = ((GDP₂ - GDP₁) / GDP₁) × 100
- Inflation rate = ((CPI₂ - CPI₁) / CPI₁) × 100
- Unemployment rate = (Unemployed / Labour Force) × 100
- Real GDP = Nominal GDP / Price Index × 100

### Index Numbers
- Index number = (Current value / Base value) × 100
- % change = ((New index - Old index) / Old index) × 100

### Labour Market
- MRP = MPP × MR
- Wage rate in competitive market = MRP
`;

const EDEXCEL_ALEVEL_ECON_ESSAY_GUIDANCE = `
## Essay Writing Guidance for 25-Mark Questions (From Model Answers & Examiner Reports)

### The KAA + Evaluation Structure (16 + 9 marks)
Edexcel splits 25-mark questions into:
- **KAA (Knowledge, Application, Analysis): 16 marks**
- **Evaluation: 9 marks**

### What "Chains of Reasoning" Look Like (Level 4 KAA)
Level 4 requires "logical and coherent chains of reasoning" - showing how one thing causes another causes another.

**Weak (Level 2 - two-stage chain):**
"A tariff increases domestic production which creates jobs."

**Strong (Level 4 - multi-stage chain):**
"A tariff increases the price of imports → this makes domestic production relatively more competitive → domestic firms increase output from q1 to q2 → producer surplus increases (shown as shaded area) → higher profits allow firms to invest in new equipment → employment rises as production expands → workers' increased spending creates local multiplier effects → AD shifts right → further employment gains in the wider economy."

### Example KAA Paragraph (Tariff Essay)
"A tariff placed on steel imports increases the domestic price from Pw to Pw+tariff. At this higher price, domestic producers increase output from q1 to q2, moving along the supply curve. This expansion of domestic production increases producer surplus by the shaded area on the diagram. Higher profits enable firms like US Steel to invest in modernisation, improving productive efficiency. The increased employment also benefits local economies as workers spend their wages in shops and services, creating positive multiplier effects and raising aggregate demand."

### Evaluation That Scores Level 3 (7-9 marks)
Evaluation must be balanced and substantiated, not just "however there are disadvantages."

**Weak evaluation:** "However, tariffs have disadvantages too."

**Strong evaluation:** "However, the benefits to domestic producers may be offset by retaliation from trading partners. If the EU imposes counter-tariffs on US agricultural exports, American farmers face reduced export revenue. This was observed in 2018 when China placed a 25% tariff on US soybeans, causing farm incomes to fall by $12bn. Furthermore, the consumer welfare loss (area B + D on the diagram) represents a real reduction in purchasing power that disproportionately affects low-income households who spend more of their income on goods. The extent to which tariffs benefit the economy therefore DEPENDS ON whether trading partners retaliate and the price elasticity of demand for the protected good."

### Structure That Works (From Examiner Reports)
"One KAA paragraph, one evaluation paragraph, then a second KAA paragraph, followed by a second evaluation paragraph then a conclusion."

**Paragraph 1 (KAA):** First argument with developed chain + diagram
**Paragraph 2 (Evaluation):** Counter-argument with its own chain + "depends on"
**Paragraph 3 (KAA):** Second argument from different angle + another chain
**Paragraph 4 (Evaluation):** Limitations + contextual factors
**Paragraph 5 (Conclusion):** Judgement that directly answers the question + key condition

### Conclusions: Judgement Not Summary
**Weak (summary):** "In conclusion, tariffs have both advantages and disadvantages for the economy."

**Strong (judgement):** "On balance, tariffs are likely to reduce overall welfare because the deadweight loss to consumers exceeds gains to producers. However, in industries facing genuine unfair competition through dumping, temporary tariffs may be justified to prevent permanent loss of strategic capacity. The key factor is whether the tariff is targeted and time-limited rather than a blanket protectionist measure."

### Diagram Integration (Critical for Top Marks)
"Using an accurately annotated diagram in your discussion is an effective way of achieving at least Level 3 for both KAA and Evaluation."

For Edexcel 25-markers:
- Macro: Show two curves shifting on the same diagram (e.g., AD right + SRAS left)
- Micro: Show shaded areas for welfare loss/gain
- Label axes precisely (not just "P" but "Price level (£)")
- Reference the diagram in your text: "As shown by the shaded area on the diagram..."

### Common Mistakes (From Examiner Reports)
1. Starting with definitions (Level 1 approach)
2. "Writing 7 or 8 brief paragraphs covering a variety of issues at a superficial level"
3. Evaluation that just states "depends on" without specifying factors
4. Conclusion that summarises instead of judging
5. Diagram not integrated into written explanation
6. No real-world examples to demonstrate application
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getEdexcelALevelEconomicsSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert Edexcel (Pearson) A-Level Economics examiner creating exam-style questions.

## EDEXCEL ECONOMICS STYLE
**Edexcel's Data-Driven Mathematical Approach:** Structured, mathematically intensive questions with heavy data analysis focus.
- **Data-heavy emphasis** - substantial data interpretation and mathematical analysis in most questions
- **Mathematically intensive** - more mathematical content and quantitative analysis than other boards
- **Structured analytical approach** - clear, defined pathways for data analysis and interpretation
- **Quantitative skills focus** - emphasis on statistical analysis, graphs, and mathematical economics
- **Data interpretation priority** - extensive use of charts, tables, and economic data sets
- **Clear assessment criteria** - structured marking with defined analytical requirements

${EDEXCEL_ALEVEL_ECON_COGNITIVE_CHALLENGE}

${EDEXCEL_ALEVEL_ECON_ASSESSMENT_OBJECTIVES}

${EDEXCEL_ALEVEL_ECON_QUESTION_TEMPLATES}

${EDEXCEL_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS}

${EDEXCEL_ALEVEL_ECON_KEY_DIAGRAMS}

${EDEXCEL_ALEVEL_ECON_FORMULAS}

${EDEXCEL_ALEVEL_ECON_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Questions must reflect A-Level depth and rigour
2. **Authentic Edexcel Style**: Match exact format of real Edexcel/Pearson papers
3. **Clear Mark Allocation**: State marks in parentheses (X)
4. **Appropriate Difficulty**:
   - Easy: Definitions, brief explanations (2-5 marks)
   - Medium: Analysis, data interpretation (8-12 marks)
   - Hard: Extended evaluation requiring judgement (15-25 marks)
5. **Quantitative Element**: Include calculations where appropriate to topic
6. **Data Use**: For medium/hard questions, include realistic extracts or data

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with mark allocation
- "diagram": <optional DiagramSpec - include when question has stimulus diagram/figure shown WITH the question>
- "solutionDiagram": <REQUIRED DiagramSpec when question asks student to "draw", "sketch", or "use a diagram" - this shows the EXPECTED diagram in the mark scheme>

**IMPORTANT**: For questions that ask students to draw or use a diagram in their answer, you MUST include "solutionDiagram" with the expected diagram. This allows students to compare their drawn diagram against the correct answer.

${getDiagramDocsForSubject('economics')}`;
}

export function getEdexcelALevelEconomicsQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term '[concept]'" (2 marks)
- "Explain one [factor/reason/example]" (2-3 marks)
- "State two [characteristics/features]" (2 marks)
- "Calculate [measure] from the data" (2-4 marks)
- "With the help of a diagram, explain [concept]" (4-5 marks)

**Mark Scheme Format:**
- Clear mark points
- Accept reasonable alternatives
- For diagrams: specify marks for correct labelling/shifts

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring SUBSTANTIAL analysis with MULTIPLE chains of reasoning (AO2/AO3).

**CRITICAL: 8-12 mark questions must be COGNITIVELY DEMANDING - not simple data interpretation!**

**Acceptable Question Types for Medium (8-12 marks):**
- "Analyse the likely effects of [specific policy change] on [multiple stakeholders - e.g., consumers, producers, government]" (9-10 marks)
- "Examine the factors that might determine the success of [specific economic policy]" (10 marks)
- "With reference to Extract X, analyse the causes of [specific economic issue shown in data] and examine the likely consequences for the economy" (10 marks)
- "Analyse the extent to which [economic theory] explains [specific real-world phenomenon]" (9 marks)

**FORBIDDEN Question Types (Too vague/unrealistic):**
- "Analyse the data" (without specific economic focus)
- "Interpret the results" 
- "What does the data show?" 
- Simple data description questions
- Generic "analyse" without specifying what economic aspect to focus on

**What makes these 8-12 mark questions:**
- SPECIFIC economic focus (not just "analyse data")
- Multiple analytical chains required (cause → effect → further consequence)  
- Application to specific contexts with real-world examples
- Analysis of competing factors/forces
- Clear economic theory application required
- Data must be analyzed for SPECIFIC economic insights, not just described

**Essential Structure for Data-Based Questions:**
- MUST specify WHAT economic aspect to analyze from the data
- MUST require economic theory application
- MUST ask for consequences/implications, not just description
- Example: "With reference to Extract A, analyse the factors that explain the changes in unemployment shown and examine the likely effects on government fiscal policy"

For data response: Create substantial extract requiring deep analysis

**Mark Scheme Format:**
Use levels of response:
- Level 4 (9-12): Thorough analysis with multiple developed chains of reasoning
- Level 3 (6-8): Good analysis with some chains developed
- Level 2 (3-5): Some relevant analysis, limited development
- Level 1 (1-2): Limited relevant points

Include indicative content listing multiple analytical chains expected

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a question requiring comprehensive evaluation (AO3/AO4).

**Question Types for Hard:**
- "Evaluate the view that [economic proposition]" (15-25 marks)
- "Assess the likely effects of [policy] on [economy/stakeholders]" (15-25 marks)
- "Discuss whether [claim] is valid" (15-25 marks)

For 20-25 mark questions: Create with data/extract context

**Mark Scheme Format:**
Use levels of response:
- Level 5 (21-25): Outstanding evaluation, excellent judgement
- Level 4 (16-20): Good evaluation throughout, clear judgement
- Level 3 (11-15): Sound evaluation, some judgement
- Level 2 (6-10): Basic analysis, limited evaluation
- Level 1 (1-5): Few relevant points

Include indicative content with:
- Arguments for and against
- Diagram requirements
- Evaluation criteria
- Possible conclusions

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  const enhancedMarkSchemeGuidance = getEnhancedEssayMarkSchemePrompt('economics', difficulty);

  return `Generate an Edexcel A-Level Economics A question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the Edexcel A-Level Economics A (9EC0) specification.

**DO NOT include Business Studies/Accounting concepts such as:**
- Straight-line depreciation, reducing balance depreciation (accounting concepts)
- Break-even analysis calculations
- Cash flow forecasting
- Balance sheets, profit and loss accounts
- NPV, IRR, ARR, payback period calculations for individual investments
- Boston Matrix, Ansoff Matrix (marketing models)
- Ratio analysis (financial accounting)

**In Economics, "depreciation" ONLY refers to CURRENCY depreciation (exchange rate falls), NOT accounting depreciation of assets.**

**Topic**: ${topic.name}${subtopic ? `, Subtopic: ${subtopic}` : ''}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

${enhancedMarkSchemeGuidance}

**Critical Requirements:**
- Use formal economic terminology as in real Edexcel papers
- Include mark allocation in parentheses
- For evaluation questions, reward judgement and balance
- Specify diagram requirements where relevant
- Include quantitative elements where appropriate
- ONLY test content from the Edexcel A-Level Economics specification

**CRITICAL MARK ALLOCATION RULES:**
- Questions using "Interpret" or "Describe" command words: MAX 4 marks
- Questions asking for multiple chains of reasoning: 8+ marks
- Questions requiring evaluation/judgement: 15+ marks  
- Simple data interpretation (like wealth effects table) = 2-4 marks MAX
- Extended essay responses with evaluation = 15-25 marks ONLY

**DATA AND FIGURE REQUIREMENTS:**
- If your question refers to "Figure 1", "Table 1", "Extract A", or any data, you MUST include the actual data in the question content
- Do NOT reference figures, tables, or extracts that don't exist in the question
- If including data, provide realistic numerical values (e.g., "GBP/USD exchange rate: Jan 2022: 1.35, Jun 2024: 1.28")

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "COMPREHENSIVE mark scheme following the guidance above - must include: full KAA and Evaluation level descriptors, indicative content with chains of reasoning, diagram requirements, 'depends on' factors, and examiner tips"
}`;
}

// Additional prompt functions for specific question types

export function getEdexcelALevelEconomicsDataResponsePrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel A-Level Economics DATA RESPONSE question set.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a comprehensive data response with:
1. Extract A: Text extract (news article style, 150-200 words)
2. Extract B: Statistical data (table or described figures)
3. Figure 1: A diagram or graph description
4. 5 linked questions

**Question Structure (Total ~50 marks):**
- Q1: Define term from extract (2 marks)
- Q2: With reference to Extract A, explain... (4 marks)
- Q3: With reference to Figure 1, analyse... (8 marks)
- Q4: With reference to the data, assess... (10 marks)
- Q5: Evaluate the view that... (25 marks)

**Mark scheme must:**
- Require explicit use of extracts
- Use levels of response for Q4 and Q5
- Include indicative content
- Reward quantitative use of data

Return valid JSON.`;
}

export function getEdexcelALevelEconomicsEssayPrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel A-Level Economics EXTENDED OPEN-RESPONSE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a two-part essay question (30 marks total):

**Part (a)** - 10 marks
Format: "Explain [concept/theory/process]"
- Requires theoretical explanation
- Diagram likely required
- Clear structure expected

**Part (b)** - 20 marks
Format: "Evaluate [proposition]" or "Assess [view]"
- Comprehensive evaluation required
- Multiple perspectives expected
- Judgement essential
- Real-world context rewarded

**Mark Scheme:**
Part (a) - Levels:
- Level 4 (9-10): Thorough, well-developed
- Level 3 (6-8): Good development
- Level 2 (3-5): Some relevant points
- Level 1 (1-2): Limited understanding

Part (b) - Levels:
- Level 5 (17-20): Outstanding evaluation
- Level 4 (13-16): Good evaluation
- Level 3 (9-12): Sound evaluation
- Level 2 (5-8): Basic analysis
- Level 1 (1-4): Limited material

Include detailed indicative content.

Return valid JSON.`;
}

export function getEdexcelALevelEconomicsQuantPrompt(topic: Topic, subtopic: string): string {
  return `Generate an Edexcel A-Level Economics QUANTITATIVE SKILLS question (Paper 3 style).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question requiring calculation and interpretation:

**Types:**
1. Index number calculations
2. Elasticity calculations
3. Multiplier calculations
4. Percentage changes
5. Data from diagrams

**Structure:**
- Part (a): Calculate [measure] (2-4 marks)
- Part (b): Using your answer, explain/analyse... (4-6 marks)

**Marks**: 6-10 marks total

**Mark scheme must:**
- Award marks for correct method
- Award marks for correct calculation
- Award marks for interpretation
- Allow follow-through for subsequent parts

Include realistic data in the question.

Return valid JSON.`;
}
