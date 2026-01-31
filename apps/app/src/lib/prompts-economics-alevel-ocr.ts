// OCR A-Level Economics (H460) Question Generation Prompts
// Based on analysis of actual OCR past papers (June 2022, 2023, 2024)
// and official mark schemes

import { Difficulty, Topic } from '@/types';
import { getDiagramDocsForSubject } from './prompts-common';

// A-Level Economics mark ranges based on OCR specification
function getMarkRangeForDifficulty(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy':
      return { min: 2, max: 5 };    // Short data response questions
    case 'medium':
      return { min: 8, max: 12 };   // Explain/analyse questions
    case 'hard':
      return { min: 15, max: 25 };  // Evaluate/discuss essay questions
  }
}

// ============================================================================
// OCR A-LEVEL ECONOMICS SPECIFICATION DETAILS (H460)
// Based on official OCR specification and past paper analysis
// ============================================================================

const OCR_ALEVEL_ECON_COGNITIVE_CHALLENGE = `
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

const OCR_ALEVEL_ECON_ASSESSMENT_OBJECTIVES = `
## OCR A-Level Economics Assessment Objectives

| Objective | Description | Weighting |
|-----------|-------------|-----------|
| **AO1** | Demonstrate knowledge and understanding of economic concepts, theories and models | 15-25% |
| **AO2** | Apply knowledge and understanding to various economic contexts | 25-35% |
| **AO3** | Analyse economic issues, problems, and situations | 25-35% |
| **AO4** | Evaluate economic information and arguments, make judgements, and draw conclusions | 25-35% |

### Paper Structure
| Component | Title | Time | Marks | Weighting |
|-----------|-------|------|-------|-----------|
| **H460/01** | Microeconomics | 2h | 80 | 33.3% |
| **H460/02** | Macroeconomics | 2h | 80 | 33.3% |
| **H460/03** | Themes in Economics (Synoptic) | 2h | 80 | 33.3% |

### Component 1: Microeconomics (H460/01)
- **Section A** (30 marks): Multiple choice (15 questions, 1 mark each) + Short-answer (15 marks)
- **Section B** (50 marks): Case study with compulsory questions
  - Stimulus material provided (extracts, data)
  - Questions progress from low to high tariff
  - Final question typically 25 marks (evaluation)

### Component 2: Macroeconomics (H460/02)
- **Section A** (30 marks): Multiple choice (15 questions, 1 mark each) + Short-answer (15 marks)
- **Section B** (50 marks): Case study with compulsory questions
  - Same structure as Component 1

### Component 3: Themes in Economics (H460/03) - Synoptic
- **Section A** (35 marks): Stimulus response questions (micro focus)
- **Section B** (45 marks): Stimulus response questions (macro focus)
- Synoptic: draws on content from both micro and macro
- Extended response questions throughout

### Key Command Words
- **State/Identify**: Brief answer demonstrating knowledge (AO1)
- **Define**: State the meaning of a term (AO1)
- **Explain**: Set out with reasons/development (AO1/AO2)
- **Analyse**: Separate into components, show cause-effect (AO3)
- **Evaluate/Discuss/Assess**: Weigh up, make judgements (AO4)

### Quality of Written Communication (QWC)
OCR explicitly assesses QWC in extended response questions:
- Legibility, spelling, punctuation, grammar
- Appropriate form and style
- Organisation of information
`;

const OCR_ALEVEL_ECON_QUESTION_TEMPLATES = `
## Authentic OCR A-Level Economics Question Formats (From Past Papers)

### Type 1: Multiple Choice (1 mark)
Format: "[Question stem] A, B, C, D"
- Tests single concept or calculation
- Plausible distractors
- May require diagram interpretation

### Type 2: Definition (2 marks)
Format: "Define the term '[economic concept]'"
Example: "Define the term 'opportunity cost'"
- 2 marks for complete definition
- 1 mark for partial/incomplete definition

### Type 3: Short Explanation (2-4 marks)
Format: "Explain one [reason/factor/consequence]..."
Example: "Explain one reason why a firm might experience diseconomies of scale"
- Point + Development expected
- Application to context where relevant

### Type 4: Calculation with Data (4-6 marks)
Format: "Using the data, calculate [measure]. Show your working."
Example: "Using the data in Figure 1, calculate the price elasticity of demand"
- Method marks available
- Accuracy marks for correct answer
- Interpretation may be required

### Type 5: Analysis with Context (8-12 marks)
Format: "Using the data provided, analyse [economic issue]"
Example: "Using Extract A, analyse the factors that might explain the UK's current account deficit"
- Must reference data/extracts explicitly
- Chains of reasoning required
- Uses levels of response

### Type 6: Short Evaluation (10-15 marks)
Format: "Evaluate/Assess [proposition or policy]"
Example: "Evaluate the view that reducing the rate of corporation tax is the most effective way to promote economic growth"
- Analysis AND evaluation required
- Two-sided argument
- Judgement expected
- Uses levels of response

### Type 7: Extended Evaluation (20-25 marks)
Format: "Discuss/Evaluate [complex proposition]"
Example: "Discuss the extent to which monopoly is against the public interest"
- Comprehensive analysis
- Sustained evaluation throughout
- Clear structure required
- Well-supported judgement essential
- Uses levels of response with QWC

### Type 8: Synoptic Questions (Component 3)
Format: Questions requiring application of both micro and macro concepts
- May require analysis of policy impacts across markets and economy
- Evaluation of trade-offs between objectives
- Real-world context expected
`;

const OCR_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS = `
## OCR A-Level Economics Mark Scheme Conventions (From Official 2021-2023 Mark Schemes)

### Assessment Objectives and Weightings (From Specification)
| Objective | Description | Weighting |
|-----------|-------------|-----------|
| AO1 | Knowledge of terms/concepts and theories/models | 15-25% |
| AO2 | Apply knowledge and understanding to various economic contexts | 25-35% |
| AO3 | Analyse issues showing understanding of their impact on economic agents | 25-35% |
| AO4 | Evaluate economic arguments, make judgements, draw conclusions | 25-35% |

Minimum 20% of marks assess quantitative skills across all components.

### How to Apply Levels of Response (OCR Official Guidance)
"To determine the level – start at the highest level and work down until you reach the level that matches the answer."
"To determine the mark within the level, consider achievement thresholds:"
- "Just enough achievement on balance for this level" → bottom of level
- "Above bottom and either below middle or at middle of level"
- "Meets the criteria but with some slight inconsistency"
- "Consistently meets the criteria for this level" → top of level

### 25-Mark Extended Response Levels (Official OCR Grid)
**Level 5 (21-25 marks):**
"Good – Strong knowledge and understanding" in context.
"Strong analysis" of how concepts affect the issue.
"Consistently well-developed links through a coherent chain of reasoning which addresses the question."
"Any relevant diagram(s) are predominantly correct."
Strong evaluation with "relevant reasoning and appropriate reference to context."

**Level 4 (16-20 marks):**
Good knowledge and understanding with relevant application.
Good analysis with generally well-developed chains of reasoning.
Diagrams largely correct. Good evaluation with clear reasoning.

**Level 3 (11-15 marks):**
Reasonable knowledge and understanding with some application.
Reasonable analysis with some developed chains of reasoning.
Diagrams partially correct. Some evaluation present but may be unbalanced.

**Level 2 (6-10 marks):**
Limited knowledge and understanding. Some application attempted.
Limited analysis with few developed points. Limited or unsupported evaluation.

**Level 1 (1-5 marks):**
Very limited knowledge. Little or no application.
Little or no analysis. Little or no evaluation.

### AO Weighting for Different Question Types
**12-mark questions:** AO1 x 1, AO2 x 1, AO3 x 5, AO4 x 5
**8-mark questions:** AO1 x 1, AO2 x 1, AO3 x 3, AO4 x 3

### OCR Command Words (Official Definitions)
- **State/Identify**: Brief answer demonstrating knowledge (AO1)
- **Define**: State the meaning of a term precisely (AO1)
- **Calculate**: Work out numerical value showing working (AO2)
- **Explain**: Set out with reasons and development (AO1/AO2/AO3)
- **Compare**: Show similarities and differences
- **Analyse**: Examine in detail, identify cause-effect relationships (AO3)
- **Evaluate/Discuss/Assess**: Weigh up arguments, make judgements with evidence (AO4)

### Quality of Written Communication (QWC)
OCR explicitly assesses QWC in extended response questions marked with asterisk (*):
- Legibility, spelling, punctuation, grammar
- Appropriate form and style of writing
- Clear organisation of information
- Appropriate use of specialist economic vocabulary

### OCR-Specific Marking Points

**Analysis (AO3) indicators:**
- "Because..." (causal links)
- "This leads to..." (chain of reasoning)
- "As a result..." (consequences)
- "Therefore..." (logical deduction)
- Developed chains: cause → effect → further consequence

**Evaluation (AO4) indicators:**
- "However..." (counter-argument)
- "On the other hand..." (alternative perspective)
- "The significance depends on..." (conditional analysis)
- "This may not be the case if..." (qualifying conditions)
- "It could be argued that..." (alternative viewpoint)
- Weighing up of factors
- Final judgement with justification

### Diagram Marking
OCR papers regularly require diagrams with specific marks:
- Correctly labelled axes: 1 mark typically
- Correctly drawn/positioned curves: 1 mark
- Correct identification of equilibrium: 1 mark
- Correct shifts/movements shown: 1 mark
- Clear annotation/labelling: 1 mark
- "Diagrams must be integrated with written explanation for full marks"

### Quantitative Questions
- Show working for full marks
- Award method marks even if arithmetic incorrect
- Units required where applicable (%, £, millions)
- Allow follow-through in subsequent calculations

### Use of Data
- Explicit reference to extracts expected
- Quotation marks for direct quotes
- Statistical evidence should be used accurately
- Application marks for linking theory to context

### Contradictory Responses (OCR Official)
"When a candidate provides contradictory responses, then no mark should be awarded, even if one of the answers is correct."
`;

const OCR_ALEVEL_ECON_KEY_DIAGRAMS = `
## Key Economics Diagrams for OCR A-Level

### Microeconomics (Component 1)
- Supply and demand (with shifts)
- Consumer surplus and producer surplus
- Price elasticity of demand (different elasticities)
- Production possibility frontier
- Diminishing marginal returns
- Cost curves (TC, AC, MC, AVC, AFC)
- Revenue curves (TR, AR, MR)
- Profit maximisation (MC = MR)
- Perfect competition (short-run and long-run equilibrium)
- Monopoly equilibrium (with deadweight loss)
- Monopolistic competition
- Kinked demand curve (oligopoly)
- Natural monopoly
- Labour market demand and supply
- MRP curve as labour demand
- Monopsony in labour market
- Minimum wage effects
- Externalities (MSC, MSB, MPC, MPB)
- Tax incidence diagrams
- Subsidy effects
- Maximum and minimum price diagrams
- Lorenz curve and Gini coefficient

### Macroeconomics (Component 2)
- Circular flow of income
- AD/AS diagram (Classical and Keynesian LRAS)
- Shifts in AD and AS
- Positive and negative output gaps
- Phillips curve (short-run and long-run)
- J-curve effect
- Exchange rate determination
- Effects of exchange rate changes

### Diagram Marking Expectations
Standard allocation for diagrams:
- Axes correctly labelled: 1 mark
- Initial curves correctly drawn: 1 mark
- Shift shown correctly: 1 mark
- New equilibrium identified: 1 mark
- Key areas/points labelled: 1 mark
`;

const OCR_ALEVEL_ECON_KEY_CONCEPTS = `
## Key Economic Concepts and Formulas for OCR A-Level

### Elasticity Formulas
- **PED** = (% change in Qd) / (% change in P) = (ΔQd/Qd) / (ΔP/P)
- **YED** = (% change in Qd) / (% change in Y)
- **XED** = (% change in Qd of A) / (% change in P of B)
- **PES** = (% change in Qs) / (% change in P)

### Cost and Revenue
- TC = FC + VC
- AC = TC / Q
- MC = ΔTC / ΔQ
- TR = P × Q
- AR = TR / Q = P
- MR = ΔTR / ΔQ
- Profit = TR - TC

### Macroeconomic
- AD = C + I + G + (X - M)
- Multiplier = 1 / (1 - MPC) = 1 / MPS
- MPC + MPS = 1
- MPW = MPS + MPT + MPM
- Multiplier = 1 / MPW

### Key Definitions
- **Allocative efficiency**: P = MC (MSB = MSC)
- **Productive efficiency**: Producing at minimum AC
- **Dynamic efficiency**: Efficiency improvements over time through innovation
- **X-inefficiency**: Costs above minimum due to lack of competitive pressure
- **Natural rate of unemployment**: Level of unemployment when labour market is in equilibrium
- **Output gap**: Difference between actual and potential output
`;

// ============================================================================
// QUESTION GENERATION FUNCTIONS
// ============================================================================

export function getOCRALevelEconomicsSystemPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  return `You are an expert OCR A-Level Economics examiner creating exam-style questions.

${OCR_ALEVEL_ECON_COGNITIVE_CHALLENGE}

${OCR_ALEVEL_ECON_ASSESSMENT_OBJECTIVES}

${OCR_ALEVEL_ECON_QUESTION_TEMPLATES}

${OCR_ALEVEL_ECON_MARK_SCHEME_CONVENTIONS}

${OCR_ALEVEL_ECON_KEY_DIAGRAMS}

${OCR_ALEVEL_ECON_KEY_CONCEPTS}

## Your Task
Create a ${difficulty} difficulty question about "${subtopic}" from the topic "${topic.name}".
The question should be worth ${markRange.min}-${markRange.max} marks.

## CRITICAL: Content Boundaries
You MUST ONLY test content that is in the OCR A-Level Economics H460 specification.

**DO NOT include Business Studies/Accounting concepts such as:**
- Straight-line depreciation, reducing balance depreciation (accounting concepts)
- Break-even analysis calculations
- Cash flow forecasting
- Balance sheets, profit and loss accounts
- NPV, IRR, ARR, payback period calculations for individual business investments
- Boston Matrix, Ansoff Matrix (marketing models)
- Ratio analysis (financial accounting)

**In Economics, "depreciation" ONLY refers to CURRENCY depreciation (exchange rate falls), NOT accounting depreciation of assets.**

**For the topic "${topic.name}", test ONLY these subtopics:** ${topic.subtopics.join(', ')}

## Question Requirements
1. **A-Level Standard**: Questions must reflect A-Level depth and rigour
2. **Authentic OCR Style**: Match exact format of real OCR H460 papers
3. **Clear Mark Allocation**: State marks in square brackets [X]
4. **Appropriate Difficulty**:
   - Easy: Definitions, calculations, brief explanations (2-6 marks)
   - Medium: Analysis with data, extended explanations (8-15 marks)
   - Hard: Extended evaluation requiring judgement (20-25 marks)
5. **Assessment Objective Balance**: Reflect OCR's emphasis on AO3 (analysis) and AO4 (evaluation)
6. **QWC**: For higher mark questions, note QWC assessment

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

export function getOCRALevelEconomicsQuestionPrompt(topic: Topic, difficulty: Difficulty, subtopic: string): string {
  const markRange = getMarkRangeForDifficulty(difficulty);

  const difficultyGuidance = {
    easy: `Create a question testing knowledge and understanding (AO1/AO2).

**Question Types for Easy:**
- "Define the term '[concept]'" [2]
- "Explain one [factor/reason/example]" [2-4]
- "State two [features/characteristics]" [2]
- "Using the data, calculate [measure]. Show your working." [4-6]
- "With the help of a diagram, explain [concept]" [4-6]

**Mark Scheme Format:**
- Clear mark points
- Accept reasonable alternatives
- For calculations: method + accuracy marks
- For diagrams: specify marking for labels/curves

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    medium: `Create a question requiring SUBSTANTIAL analysis with MULTIPLE chains of reasoning (AO2/AO3).

**CRITICAL: 8-12 mark questions must be COGNITIVELY DEMANDING - not simple data interpretation!**

**Acceptable Question Types for Medium (8-12 marks):**
- "Analyse the likely effects of [specific policy change] on [multiple stakeholders - e.g., consumers, producers, government]" (9-10 marks)
- "Examine the factors that might determine the success of [specific economic policy]" (10 marks)
- "Using the data/extract, analyse the causes of [specific economic issue shown in data] and examine the likely consequences for the economy" (10 marks)
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
- Example: "Using the data/extract, analyse the factors that explain the changes in unemployment shown and examine the likely effects on government fiscal policy"

**Mark Scheme Format:**
Use levels of response:
- Level 4 (10-12): Thorough analysis with multiple developed chains of reasoning
- Level 3 (7-9): Good analysis with some chains developed
- Level 2 (4-6): Some relevant analysis, limited development
- Level 1 (1-3): Limited relevant points

Include indicative content listing multiple analytical chains expected

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`,

    hard: `Create a question requiring comprehensive evaluation (AO3/AO4).

**Question Types for Hard:**
- "Evaluate the view that [economic proposition]" [20-25]
- "Discuss the extent to which [claim is valid]" [20-25]
- "Assess whether [policy] would be effective" [20-25]

Create with a case study context where appropriate

**Mark Scheme Format:**
Use levels of response with QWC:
- Level 5 (21-25): Outstanding evaluation, excellent judgement, QWC excellent
- Level 4 (16-20): Good evaluation throughout, clear judgement, QWC good
- Level 3 (11-15): Sound evaluation, some judgement, QWC reasonable
- Level 2 (6-10): Basic analysis, limited evaluation, QWC limited
- Level 1 (1-5): Fragments, no real evaluation, QWC poor

Include comprehensive indicative content with:
- Key arguments for and against
- Diagram requirements
- Possible lines of evaluation
- Types of conclusion that might be reached

YOU MUST allocate marks between ${markRange.min} and ${markRange.max} for this difficulty level.`
  };

  return `Generate an OCR A-Level Economics question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}
**Difficulty**: ${difficulty}

${difficultyGuidance[difficulty]}

**Critical Requirements:**
- Use formal economic terminology as in real OCR papers
- Include mark allocation in square brackets
- For extended response, note QWC assessment
- Specify diagram requirements where relevant
- For data response, include realistic extract or data

**CRITICAL MARK ALLOCATION RULES:**
- Questions using "Interpret" or "Describe" command words: MAX 4 marks
- Questions asking for multiple chains of reasoning: 8+ marks
- Questions requiring evaluation/judgement: 15+ marks  
- Simple data interpretation (like wealth effects table) = 2-4 marks MAX
- Extended essay responses with evaluation = 15-25 marks ONLY

Return valid JSON:
{
  "content": "question text here",
  "marks": number,
  "solution": "detailed mark scheme here"
}`;
}

// Additional prompt functions for specific question types

export function getOCRALevelEconomicsCaseStudyPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Economics CASE STUDY question set (Section B style).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a case study with:
1. Extract A: Article-style text (200-250 words)
2. Extract B: Data table or statistical information
3. Figure 1: Description of a diagram or graph
4. 4-5 linked questions

**Question Structure (Total: 50 marks):**
- Q1: Short knowledge question [2-4 marks]
- Q2: Explanation with data reference [4-6 marks]
- Q3: Analysis question using extracts [8-10 marks]
- Q4: Short evaluation [10-12 marks]
- Q5: Extended evaluation [20-25 marks]

**Mark scheme must:**
- Use levels of response for Q3, Q4, Q5
- Include QWC for Q5
- Require explicit use of data
- Include indicative content

Return valid JSON.`;
}

export function getOCRALevelEconomicsMCQPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Economics MULTIPLE CHOICE question.

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a multiple choice question with:
- Clear stem (question)
- Four options (A, B, C, D)
- One definitively correct answer
- Three plausible distractors

**Types:**
1. Definition/concept testing
2. Calculation-based (provide data)
3. Diagram interpretation
4. Cause-effect relationships
5. Policy evaluation

**Marks**: 1 mark

**Solution must:**
- State correct answer
- Explain why correct
- Explain why each distractor is incorrect

Return valid JSON.`;
}

export function getOCRALevelEconomicsExtendedPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Economics EXTENDED RESPONSE question (20-25 marks).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create an evaluation question requiring sustained argument.

**Format**: "Evaluate/Discuss [proposition]"

The question should:
- Allow for multiple perspectives
- Enable candidates to draw on range of economic theory
- Require application to real-world contexts
- Demand a final judgement

**Mark scheme using Levels with QWC:**
- Level 5 (21-25): Outstanding analysis and evaluation; comprehensive coverage; sustained evaluation throughout; excellent judgement; QWC excellent
- Level 4 (16-20): Good analysis and evaluation; wide-ranging coverage; clear evaluation; good judgement; QWC good
- Level 3 (11-15): Sound analysis; reasonable coverage; some evaluation; reasonable judgement; QWC reasonable
- Level 2 (6-10): Basic analysis; limited coverage; limited evaluation; weak judgement; QWC limited
- Level 1 (1-5): Fragmentary knowledge; very limited coverage; no real evaluation; QWC poor

Include detailed indicative content with arguments for and against.

Return valid JSON.`;
}

export function getOCRALevelEconomicsSynopticPrompt(topic: Topic, subtopic: string): string {
  return `Generate an OCR A-Level Economics SYNOPTIC question (Component 3 style).

**Topic**: ${topic.name}
**Subtopic**: ${subtopic}

Create a question requiring integration of micro and macro economics.

**Synoptic elements:**
- Link microeconomic market analysis to macroeconomic outcomes
- Consider policy impacts across different markets and the whole economy
- Evaluate trade-offs between microeconomic efficiency and macroeconomic objectives

**Example themes:**
- Impact of minimum wage on labour markets AND on inflation/growth
- Effect of monopoly regulation on efficiency AND on international competitiveness
- Role of taxation in correcting market failure AND in achieving macro objectives

**Marks**: 15-25 marks depending on scope

**Mark scheme must:**
- Reward integration of micro and macro
- Use levels of response
- Include QWC for higher marks
- Specify both theoretical and contextual indicative content

Return valid JSON.`;
}
