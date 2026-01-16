// AQA A-Level Economics (7136) Question Generation Prompts
// Based on analysis of actual AQA past papers (June 2022, 2023, 2024)
// and official mark schemes

import { Difficulty, Topic } from '@/types';
import { getMarkRangeForDifficulty, getDiagramDocsForSubject } from './prompts-common';

// ============================================================================
// AQA A-LEVEL ECONOMICS SPECIFICATION DETAILS (7136)
// Based on official AQA specification and past paper analysis
// ============================================================================

const AQA_ALEVEL_ECON_ASSESSMENT_OBJECTIVES = `
## AQA A-Level Economics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge of terms/concepts and theories/models to show understanding of the behaviour of economic agents and how they are affected by and respond to economic issues | 21-26% |
| **AO2** | Apply knowledge and understanding to various economic contexts to show how economic agents are affected by and respond to economic issues | 26-31% |
| **AO3** | Analyse issues within economics, showing an understanding of their impact on economic agents | 24-29% |
| **AO4** | Evaluate economic arguments and use qualitative and quantitative evidence to support informed judgements relating to economic issues | 21-26% |

### Paper Structure (Each Paper: 80 marks, 2 hours)
| Paper | Title | Topics | Format |
|-------|-------|--------|--------|
| **Paper 1** | Markets and Market Failure | 4.1 Microeconomics | Section A: Data response (40 marks), Section B: Essay choice (40 marks) |
| **Paper 2** | National and International Economy | 4.2 Macroeconomics | Section A: Data response (40 marks), Section B: Essay choice (40 marks) |
| **Paper 3** | Economic Principles and Issues | 4.1 + 4.2 Synoptic | Section A: MCQ (30 marks), Section B: Case study (50 marks) |

### Section A: Data Response (Papers 1 & 2)
- Context-based questions using stimulus material (extracts, data, diagrams)
- Questions progress from knowledge (2-4 marks) to analysis (8-10 marks) to evaluation (12-15 marks)
- All questions are compulsory

### Section B: Essay (Papers 1 & 2)
- Choice of ONE essay from THREE options
- Each essay has two parts: (a) 15 marks and (b) 25 marks
- Part (a) typically requires explanation/analysis
- Part (b) requires evaluation with judgement

### Paper 3 Specifics
- Section A: 30 multiple choice questions (30 marks)
- Section B: Case study with 4 compulsory questions
- Synoptic assessment drawing on both micro and macro

### Key Command Words (Official AQA Definitions)
- **Define**: State the meaning of a term or concept precisely (AO1)
- **Calculate**: Determine the numerical value with working shown (AO2)
- **Explain**: Set out purposes, reasons or mechanisms using economic terminology (AO1/AO2)
- **Analyse**: Examine in detail, identify cause-effect relationships, develop chains of reasoning (AO3)
- **Assess**: Consider relative merits of arguments and weigh them up to make an informed judgement (AO4)
- **Evaluate**: Consider arguments for and against and come to a conclusion supported by economic analysis and evidence (AO4)
- **Discuss**: Present both sides of an argument and reach a supported conclusion using economic analysis (AO4)
- **To what extent**: Examine reasons for and against, forming judgements about the degree to which a proposition is valid (AO4)

Note: "Assess, evaluate, discuss, and justify" indicate high-tariff responses requiring all four assessment objectives.
`;

const AQA_ALEVEL_ECON_QUESTION_TEMPLATES = `
## Authentic AQA A-Level Economics Question Formats (From Past Papers 2020-2023)

### Type 1: Context-Defined Terms (2-4 marks)
Format: "Using the data in Extract [X], explain what is meant by '[economic term]' (line Y)"
**Real examples from past papers:**
- "Using the data in Extract A, explain what is meant by 'current account deficit' (line 15)" [4 marks]
- "Using the data in Extract B, explain what is meant by 'market failure' (line 8)" [4 marks]
- "Using the data in Extract C, explain what is meant by 'opportunity cost' (line 3)" [4 marks]
Marking:
- 1 mark for definition
- 1-2 marks for use of data/context from the extract
- 1 mark for development/application

### Type 2: Short Explanation (4-5 marks)
Format: "Explain [economic concept/relationship]"
**Real examples:**
- "Explain why an increase in productivity may lead to a decrease in the unit costs of production" [4 marks]
- "With the help of a diagram, explain why a subsidy might correct market failure" [5 marks]
- "Explain two factors that might affect the price elasticity of demand for a product" [4 marks]
Marking:
- 2-3 chains of reasoning expected
- Each chain: point → explanation using economic terminology → link to outcome
- For diagram questions: correct diagram (2 marks) + explanation linked to diagram (2-3 marks)

### Type 3: Data Analysis (8-10 marks)
Format: "Using the data in the extracts and your knowledge of economics, analyse [economic issue]"
**Real examples:**
- "Using the data in the extracts and your knowledge of economics, analyse the main factors that might explain the UK's current account deficit" [9 marks]
- "Using the data in Extract D (Figure 1), if 2015 is the base year, calculate the index of real GDP in 2018. Give your answer to one decimal place" [4 marks] + "Using the data, analyse the possible effects on aggregate demand" [6 marks]
- "Using the data in the extracts, analyse the factors affecting demand for lithium-ion batteries" [8 marks]
Marking:
- Must use specific data from extracts (figures, percentages, trends)
- Requires developed chains of analysis
- Award marks for each analytical point developed with data
- Level-based marking for higher-tariff versions

### Type 4: Evaluation with Judgement (12-15 marks)
Format: "Using the data in the extracts and your knowledge of economics, assess/evaluate [economic proposition]"
**Real examples:**
- "Using the data in the extracts and your knowledge of economics, evaluate the view that the most effective way to improve the UK's current account position is through supply-side policies" [15 marks]
- "Using the data in the extracts, assess the likely effects of the increase in the National Living Wage on UK unemployment" [12 marks]
- "Assess the view that price discrimination is always damaging" [15 marks]
Marking: Uses levels of response marking
- Must include evaluation throughout (not just at end)
- Must reach a supported judgement using "depends on" factors
- Data from extracts must be integrated into response

### Type 5: Essay Part (a) - Analysis (15 marks)
Format: "Explain [concept/theory/relationship in detail]"
**Real examples:**
- "Explain how a monopolist determines the profit-maximising level of output and price" [15 marks]
- "Explain how the level of aggregate demand in an economy is determined" [15 marks]
- "Explain why external costs may lead to market failure" [15 marks]
Marking:
- Diagrams expected and should be explained
- Clear theoretical explanation with chains of reasoning
- Uses levels of response marking (Level 1-4, 13-15 for Level 4)

### Type 6: Essay Part (b) - Evaluation (25 marks)
Format: "Evaluate/Assess/Discuss [economic proposition or policy]"

**Authentic AQA Essay Question Patterns (From Past Papers 2018-2024):**

Pattern 1 - "Evaluate the view that..."
- "Evaluate the view that monopoly is always against the public interest" [25 marks]
- "Evaluate the view that government failure means that government intervention in markets will rarely lead to an improvement in economic welfare" [25 marks]
- "Evaluate the view that the supermarket sector is serving customers' interests well" [25 marks]
- "Evaluate the view that increasing taxation is the best way to reduce a budget deficit" [25 marks]

Pattern 2 - "Assess the view/argument that..."
- "Assess the view that government intervention in the UK labour market is necessary to protect the interests of people who are working in the gig economy" [25 marks]
- "Assess the argument that a universal basic income is likely to be the most effective policy for reducing the scale of income and wealth inequality in the UK" [25 marks]
- "Assess the policies that might be most effective in improving housing affordability in the UK economy" [25 marks]

Pattern 3 - "Discuss..." (often with context)
- "Discuss the view that the overuse of common access resources is best addressed by government intervention" [25 marks]
- "Discuss the impact of the expansion of the gig economy on UK economic performance" [25 marks]
- "Discuss the microeconomic and macroeconomic effects of stronger trade unions on the UK economy" [25 marks]

Pattern 4 - "To what extent..."
- "To what extent do you agree that international trade always benefits nations?" [25 marks]
- "Evaluate the extent to which globalisation inevitably leads to a rise in income and wealth inequality" [25 marks]

Pattern 5 - "Examine..." (requires analysis with evaluation)
- "Examine the role of barriers to entry in earning economic profit in industries of your choice" [25 marks]
- "Examine the policies a government might use to make food affordable to lower income groups" [25 marks]

Structure expected (from examiner reports):
- Clear argument structure (for, against, judgement)
- Evaluation throughout, not just in conclusion
- Real-world examples enhance quality
- Diagrams can support analysis
- Final judgement must be supported by arguments made

### Type 7: Multiple Choice (Paper 3) (1 mark each)
Format: "Which one of the following [question]? A, B, C, D"
Types:
- Definition-based: "Which of the following is an example of a merit good?"
- Calculation-based: "If the MPC is 0.8, the value of the multiplier is..."
- Diagram interpretation: "Which diagram shows the effect of a minimum wage above equilibrium?"
- Theory application: "According to the kinked demand curve model, which statement is correct?"
`;

const AQA_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS = `
## AQA A-Level Economics Mark Scheme Conventions (From Official Mark Schemes 2021-2023)

### How Examiners Apply Levels of Response
Start at the lowest level and use it as a ladder to see whether the answer meets the descriptor for that level.
The descriptor for the level indicates different qualities that might be seen in the student's answer for that level.
Use a "best fit" approach - if response covers different aspects of different levels, place in the level that best matches overall quality.

### 25-Mark Essay Levels (Official AQA Grid)
**Level 5 (21-25 marks):**
Sound, focused analysis and well-supported evaluation that:
- Is well organised, showing sound knowledge and understanding of economic terminology, concepts and principles with few, if any, errors
- Includes good application of relevant economic principles and, where appropriate, good use of data to support the response
- Includes well-focused analysis with clear, logical chains of reasoning
- Includes supported evaluation throughout the response and in a final conclusion

**Level 4 (16-20 marks):**
Sound, focused analysis and some supported evaluation that:
- Is well organised, showing sound knowledge and understanding of economic terminology, concepts and principles with few, if any, errors
- Includes good application of relevant economic principles and, where appropriate, some good use of data
- Includes well-focused analysis with logical chains of reasoning
- Includes some supported evaluation in the response

**Level 3 (11-15 marks):**
Some good analysis but limited evaluation that:
- Shows reasonable knowledge and understanding of economic terminology, concepts and principles but with some errors
- Includes reasonable application of relevant economic principles with some use of data
- Includes some clear analysis but analysis may be unbalanced
- Includes some limited evaluation in the response

**Level 2 (6-10 marks):**
Limited analysis and evaluation that:
- Shows limited knowledge and understanding with errors and gaps
- Includes some limited application
- Includes attempted analysis but with significant gaps
- Includes little evaluation or unsupported judgements

**Level 1 (1-5 marks):**
Very limited analysis and evaluation that:
- Shows very limited knowledge with significant errors
- Includes little or no application
- Includes little or no analysis
- Includes little or no evaluation

### 15-Mark Question Levels
**Level 4 (13-15 marks):** Thorough, well-developed analysis with clear chains of reasoning
**Level 3 (9-12 marks):** Good analysis with logical development
**Level 2 (5-8 marks):** Reasonable but limited development
**Level 1 (1-4 marks):** Limited fragments of analysis

### Data Response Evaluation (12-15 marks)
**Level 4 (12-15 marks):** Uses data effectively, thorough evaluation, clear judgement
**Level 3 (8-11 marks):** Good analysis, some evaluation with data use
**Level 2 (4-7 marks):** Some analysis, limited evaluation
**Level 1 (1-3 marks):** Brief answer with limited analysis

### Diagram Requirements
- Diagrams should be clearly labelled
- Axes must be labelled correctly (e.g., "Price (£)" on Y-axis, "Quantity" on X-axis)
- Key curves/lines identified (e.g., D1, D2, S1, S2)
- Equilibrium points marked with coordinates or arrows
- Diagrams MUST be explained and integrated into written response
- "The use of relevant diagrams to support the analysis should be taken into account when assessing the quality of the student's response"

### Calculation Questions
- Show working for full marks (correct final answer without working may score full marks)
- Units required where applicable (e.g., %, £, millions)
- Accept equivalent correct methods
- Answers to appropriate decimal places/significant figures as stated

### Authentic Evaluation Phrases (From Mark Schemes)
Mark schemes explicitly reward:
- "However, this depends on..." (circumstances, magnitude, time period)
- "On the other hand..." (counter-argument)
- "In the short run... but in the long run..." (time dimension)
- "The significance of this depends on..." (conditional analysis)
- "It could be argued that..." (alternative perspective)
- "The extent to which this occurs depends on..." (qualifying conditions)
- Weighing up of arguments for and against
- Reference to real-world context/examples
- Consideration of different stakeholder perspectives
- Final supported judgement answering the question directly
`;

const AQA_ALEVEL_ECON_KEY_DIAGRAMS = `
## Key Economics Diagrams for AQA A-Level

### Microeconomics Diagrams
- Supply and demand (with shifts)
- Consumer/producer surplus
- Elasticity diagrams (PED, XED, YED)
- Production possibility frontier
- Cost curves (TC, AC, MC, AVC, AFC)
- Revenue curves (TR, AR, MR)
- Perfect competition (SR and LR equilibrium)
- Monopoly equilibrium (MR=MC)
- Monopolistic competition
- Kinked demand curve (oligopoly)
- Labour market (demand, supply, equilibrium)
- Monopsony
- Externalities (MSC/MSB analysis)
- Public goods
- Price controls (max/min prices)
- Taxation incidence

### Macroeconomics Diagrams
- Circular flow of income
- AD/AS (Keynesian and Classical)
- Short-run and long-run Phillips curve
- Production possibility frontier (economic growth)
- Lorenz curve and Gini coefficient
- Exchange rate determination (supply/demand for currency)
- J-curve effect
- Business cycle

### Diagram Marking Points
- Correctly labelled axes (1 mark)
- Correctly drawn curves (1 mark)
- Correct shift direction shown (1 mark)
- New equilibrium identified (1 mark)
- Explanation linked to diagram (marks vary)
`;

const AQA_ALEVEL_ECON_KEY_CONCEPTS = `
## Key A-Level Economics Concepts and Definitions

### Microeconomics
- **PED**: % change in Qd / % change in P
- **XED**: % change in Qd of A / % change in P of B
- **YED**: % change in Qd / % change in income
- **PES**: % change in Qs / % change in P
- **Consumer surplus**: Difference between what consumers are willing to pay and what they actually pay
- **Producer surplus**: Difference between market price and price at which producers are willing to supply
- **Allocative efficiency**: P = MC (MSB = MSC)
- **Productive efficiency**: Production at minimum AC
- **Dynamic efficiency**: Improvements in efficiency over time through innovation
- **X-inefficiency**: Costs above minimum due to lack of competitive pressure

### Macroeconomics
- **GDP**: Total value of goods and services produced within an economy
- **AD**: C + I + G + (X - M)
- **Multiplier**: 1/(1-MPC) or 1/MPW
- **MPC**: Change in consumption / change in income
- **Inflation**: Sustained rise in the general price level
- **Unemployment rate**: (Unemployed / Labour force) × 100
- **Current account**: Trade in goods + trade in services + primary income + secondary income
- **Exchange rate**: Price of one currency in terms of another
`;

const AQA_ALEVEL_ECON_ESSAY_GUIDANCE = `
## Essay Writing Guidance for 25-Mark Questions (From Model Answers & Examiner Reports)

### What "Chains of Reasoning" Actually Look Like
Level 5 requires "clear, logical chains of reasoning." This means showing cause → effect → further consequence, not just listing points.

**Weak (Level 2):** "Monopolies charge high prices which is bad for consumers."

**Strong (Level 5):** "Monopolies are price makers → they can restrict output below the allocatively efficient level → this raises price above MC → consumers pay more than the true resource cost → consumer surplus is reduced → there is a deadweight welfare loss to society → resources are misallocated."

### Example Chain of Reasoning (Monopoly Essay)
"A monopoly firm earns supernormal profits (shown on diagram as shaded area) → these retained profits can be reinvested in R&D → this creates dynamic efficiency through innovation → new products and lower production costs → benefits flow to consumers through improved quality and potentially lower prices over time → this suggests monopoly may serve the public interest in the long run."

### Evaluation Techniques That Score Top Marks

**Conditional Evaluation (uses "depends on"):**
- "The extent to which monopoly harms consumers DEPENDS ON whether supernormal profits are reinvested or distributed as dividends"
- "This argument assumes that the monopoly firm will reinvest profits, but if shareholders demand high dividends, dynamic efficiency benefits may not materialise"

**Short-run vs Long-run:**
- "In the short run, consumers face higher prices and reduced choice. However, in the long run, dynamic efficiency gains may outweigh the static allocative inefficiency"

**Counter-argument with mechanism:**
Don't just state "however, there are disadvantages" - explain the mechanism:
"However, monopolies may become X-inefficient because the lack of competitive pressure removes the incentive to minimise costs → AC rises above the minimum → this compounds the allocative inefficiency → the welfare loss is greater than suggested by the simple monopoly diagram"

### Structure for 25-Mark Essays
**Paragraph 1 (KAA):** Make argument with chain of reasoning + diagram
**Paragraph 2 (Evaluation):** Counter-argument with its own chain + "depends on" factors
**Paragraph 3 (KAA):** Second argument with chain of reasoning + different angle
**Paragraph 4 (Evaluation):** Counter-argument + contextual factors
**Paragraph 5 (Conclusion):** Judgement that answers the question directly + specifies conditions

### Conclusions That Get Top Marks
**Weak:** "In conclusion, monopolies have both advantages and disadvantages."
**Strong:** "On balance, monopoly is likely to be against the public interest in most markets because static inefficiency outweighs potential dynamic gains. However, in industries with natural monopoly characteristics (high fixed costs, economies of scale) such as utilities, regulated monopoly may serve consumers better than fragmented competition. The key determining factor is whether effective price regulation prevents exploitation of market power."

### Real-World Application
Top answers integrate specific examples:
- Google's 90% search market share and investment in energy efficiency
- Natural monopolies in utilities (water, rail infrastructure)
- Pharmaceutical patents and R&D incentives
- Tech giants and network effects

### Common Mistakes (From Examiner Reports)
1. Starting with definitions (Level 1 approach - examiners mark top-down)
2. Listing points without developing chains of reasoning
3. One-sided arguments without genuine evaluation
4. "Depends on" without specifying what it depends on
5. Conclusion that summarises rather than judges
6. No diagram or diagram not explained in the text
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getAQAALevelEconomicsSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert AQA A-Level Economics examiner creating exam-style questions.

${AQA_ALEVEL_ECON_ASSESSMENT_OBJECTIVES}

${AQA_ALEVEL_ECON_QUESTION_TEMPLATES}

${AQA_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS}

${AQA_ALEVEL_ECON_KEY_DIAGRAMS}

${AQA_ALEVEL_ECON_KEY_CONCEPTS}

${AQA_ALEVEL_ECON_ESSAY_GUIDANCE}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## Question Requirements
1. **A-Level Standard**: Questions must reflect the depth and rigour expected at A-Level
2. **Authentic AQA Style**: Match the exact language, format, and structure of real AQA papers
3. **Clear Mark Allocation**: State marks clearly [X marks]
4. **Appropriate Difficulty**:
   - Easy: Definitions, short explanations (2-5 marks)
   - Medium: Analysis, explanation with chains of reasoning (8-15 marks)
   - Hard: Evaluation essays requiring judgement (15-25 marks)
5. **Assessment Objective Focus**:
   - Easy: AO1 (knowledge) + some AO2 (application)
   - Medium: AO2 (application) + AO3 (analysis)
   - Hard: AO3 (analysis) + AO4 (evaluation)
6. **Diagram Use**: Include diagrams where relevant to economic analysis

## Response Format
Return a JSON object with:
- "content": The question text (use \\n for line breaks)
- "marks": Total marks for the question
- "solution": Complete mark scheme with mark allocation
- "diagram": <optional DiagramSpec - include when question benefits from visual>

${getDiagramDocsForSubject('economics')}`;
}

export function getAQAALevelEconomicsQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term [concept]" [2 marks]
- "Explain what is meant by [term]" [2-4 marks]
- "State two [features/characteristics/factors]" [2 marks]
- "Calculate [economic measure] from the data provided" [2-4 marks]
- "With the help of a diagram, explain [concept]" [4-5 marks]

**Mark Scheme Format:**
- One clear mark point per mark for short questions
- For diagram questions: marks for correct diagram + explanation
- Include acceptable alternative answers

Marks: ${markRange.min}-${markRange.max}`,

    medium: `Create a question requiring analysis with chains of reasoning (AO2/AO3).

**Question Types for Medium:**
- "Using the data, analyse [economic issue]" [8-10 marks]
- "Explain how [factor] affects [outcome]" [8 marks]
- "Analyse the likely effects of [policy/change] on [market/economy]" [10 marks]
- "With reference to a diagram, explain [economic relationship]" [8-10 marks]

**Mark Scheme Format:**
Use levels of response where appropriate:
- Level 3: Thorough analysis with multiple chains of reasoning
- Level 2: Good analysis with some development
- Level 1: Limited analysis

For data response: require specific use of data from extracts
Include indicative content listing key points

Marks: ${markRange.min}-${markRange.max}`,

    hard: `Create a question requiring evaluation and judgement (AO3/AO4).

**Question Types for Hard:**
- "Evaluate the view that [economic proposition]" [15-25 marks]
- "Assess the likely effects of [policy] on [stakeholders]" [15-25 marks]
- "Discuss whether [economic claim] is valid" [15-25 marks]
- "To what extent do you agree that [proposition]?" [15-25 marks]

**Mark Scheme Format:**
Use levels of response:
For 15-mark:
- Level 4 (13-15): Thorough, well-developed analysis
- Level 3 (9-12): Good, logical analysis
- Level 2 (5-8): Reasonable but limited
- Level 1 (1-4): Limited fragments

For 25-mark:
- Level 5 (21-25): Outstanding evaluation with clear judgement
- Level 4 (16-20): Good evaluation throughout
- Level 3 (11-15): Reasonable evaluation
- Level 2 (6-10): Some simple evaluation
- Level 1 (1-5): Descriptive, little evaluation

Include indicative content with arguments for and against

Marks: ${markRange.min}-${markRange.max}`
  };

  return `Generate an AQA A-Level Economics question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use formal economic terminology as in real AQA A-Level papers
- Include mark allocation in brackets
- For evaluation questions, mark scheme must reward judgement
- For diagram-based questions, describe expected diagram elements
- Ensure economic concepts are technically accurate

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme here"
}`;
}

// Additional prompt functions for specific question types

export function getAQAALevelEconomicsDataResponsePrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Economics DATA RESPONSE question set.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a data response question with:
1. An extract of economic data/text (like from a news article or report)
2. 3-4 linked questions of increasing difficulty

**Question Structure:**
- Question 1: Define a term from the extract [2-4 marks]
- Question 2: Using the data, explain [concept] [4-6 marks]
- Question 3: Using the data, analyse [economic issue] [8-10 marks]
- Question 4: Using the data, evaluate [proposition] [12-15 marks]

**Total marks**: 30-40 marks

**Mark scheme must:**
- For Q1: List acceptable definitions
- For Q2-3: Award marks for use of data AND economic analysis
- For Q4: Use levels of response with evaluation indicators

Return valid JSON with the extract as part of content.`;
}

export function getAQAALevelEconomicsEssayPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Economics ESSAY question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a two-part essay question (40 marks total):

**Part (a)** - 15 marks
Format: "Explain [economic concept/theory/relationship]"
- Requires theoretical explanation
- Diagram likely needed
- Award marks for depth of analysis

**Part (b)** - 25 marks
Format: "Evaluate [economic proposition]"
- Must require balanced evaluation
- Must require a final judgement
- Award marks for evaluation throughout

**Mark Scheme:**
Part (a) - Levels:
- Level 4 (13-15): Thorough, well-developed
- Level 3 (9-12): Good, logical
- Level 2 (5-8): Reasonable, limited development
- Level 1 (1-4): Limited fragments

Part (b) - Levels:
- Level 5 (21-25): Outstanding evaluation
- Level 4 (16-20): Good evaluation
- Level 3 (11-15): Reasonable evaluation
- Level 2 (6-10): Some evaluation
- Level 1 (1-5): Descriptive

Include detailed indicative content.

Return valid JSON.`;
}

export function getAQAALevelEconomicsMCQPrompt(topic: Topic, subtopic: string): string {
  return `Generate an AQA A-Level Economics MULTIPLE CHOICE question (Paper 3 style).

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
3. Diagram interpretation
4. Theory application
5. Cause-effect relationship

**Marks**: 1 mark

**Solution must:**
- State correct answer
- Briefly explain why it's correct
- Explain why each distractor is wrong

Return valid JSON.`;
}
