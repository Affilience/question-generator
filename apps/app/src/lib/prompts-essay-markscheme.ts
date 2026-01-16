// Enhanced Essay Mark Scheme Generation Module
// Based on analysis of real AQA, Edexcel, and OCR mark schemes
// Provides comprehensive guidance for generating thorough, explanatory essay solutions

import { Difficulty } from '@/types';

/**
 * Enhanced mark scheme generation guidance for essay subjects.
 * This module standardizes how mark schemes are generated across:
 * - English Literature
 * - History
 * - Psychology
 * - Economics
 * - Geography
 * - Business
 */

// ============================================================================
// COMMON ESSAY MARK SCHEME STRUCTURE
// ============================================================================

export const ESSAY_MARK_SCHEME_STRUCTURE = `
## MARK SCHEME SOLUTION FORMAT

Your solution MUST be structured as a comprehensive, teacher-quality mark scheme that students can learn from.

### Required Components for Every Essay Solution:

**1. LEVEL DESCRIPTORS (for essays 8+ marks)**
Provide the FULL level descriptor grid showing exactly what is required for each level/band:

Example format:
---
**Level 5 (17-20 marks):**
- AO1: Detailed, accurate knowledge demonstrating thorough understanding
- AO2: Sophisticated application of concepts to the specific question
- AO3: Perceptive analysis with well-developed chains of reasoning
- AO4: Sustained evaluation leading to a substantiated judgement

**Level 4 (13-16 marks):**
- AO1: Generally accurate knowledge with good understanding
- AO2: Clear application to the question focus
- AO3: Developed analysis with logical reasoning
- AO4: Balanced evaluation with a supported conclusion

[Continue for all levels down to Level 1]
---

**2. INDICATIVE CONTENT**
Provide detailed indicative content organized by argument/theme, NOT just bullet points:

Example format:
---
**Arguments FOR / Supporting the statement:**

*Point 1: [Key argument]*
- What students should write: [Detailed explanation of the point]
- Evidence to include: [Specific examples, quotes, data, case studies]
- Analysis required: [How to develop this into chains of reasoning]
- Link to question: [How this addresses the specific question asked]

*Point 2: [Second argument]*
[Same structure as above]

**Arguments AGAINST / Challenging the statement:**

*Counter-point 1: [Key counter-argument]*
[Same detailed structure]

**Evaluation Considerations:**
- Short-term vs long-term effects
- Different stakeholder perspectives
- Magnitude/significance of factors
- Conditions under which arguments are more/less valid
---

**3. MODEL ANSWER STRUCTURE**
Show students HOW to structure their response:

Example format:
---
**Recommended Essay Structure (for 25-mark question):**

*Introduction (optional - no marks, but can set up argument):*
Brief statement of interpretation/argument direction

*Paragraph 1 - First main argument (KAA):*
- Topic sentence making the point
- Detailed explanation with chains of reasoning
- Evidence/examples integrated
- Link back to question

*Paragraph 2 - Evaluation of first argument:*
- Counter-argument or limitation
- "However, this depends on..." factors
- Weighing significance

*Paragraph 3 - Second main argument (KAA):*
[Same structure]

*Paragraph 4 - Evaluation of second argument:*
[Same structure]

*Conclusion - Substantiated judgement:*
- Clear answer to the question
- Key determining factor identified
- Qualified with conditions
---

**4. MARKING GUIDANCE**
Include examiner tips and common pitfalls:

---
**What distinguishes top-level responses:**
- [Specific features that earn Level 4/5]
- [Examples of sophisticated analysis]
- [What "substantiated judgement" looks like]

**Common mistakes to avoid:**
- [Typical errors that limit marks]
- [What keeps answers at lower levels]

**Key terminology students must use:**
- [Subject-specific terms required]
- [Concepts that must be demonstrated]
---
`;

// ============================================================================
// SUBJECT-SPECIFIC MARK SCHEME GUIDANCE
// ============================================================================

export const ENGLISH_LIT_MARK_SCHEME_GUIDANCE = `
## English Literature Mark Scheme Requirements

### Assessment Objectives Breakdown (AQA A-Level):
- **AO1** (24%): Articulate informed personal response, using concepts, terminology, coherent accurate written expression
- **AO2** (24%): Analyse ways writers shape meanings through form, structure, language
- **AO3** (24%): Demonstrate understanding of significance of contexts
- **AO4** (12%): Explore connections across texts
- **AO5** (16%): Explore literary texts informed by different critical interpretations

### Band Descriptors for 25-Mark Essays:

**Band 6 (22-25 marks):**
- Sophisticated, conceptualized argument with perceptive, individual response
- Precise, deft analysis of how writers shape meanings
- Excellent understanding of contexts and their significance
- Illuminating comparisons/connections across texts
- Confident engagement with different critical perspectives
- Sophisticated academic expression throughout

**Band 5 (17-21 marks):**
- Coherent, well-structured argument with assured personal response
- Detailed, analytical understanding of how writers shape meanings
- Clear understanding of contexts informing interpretation
- Well-developed connections across texts
- Thoughtful consideration of critical perspectives
- Fluent academic expression

**Band 4 (13-16 marks):**
- Sustained argument with clear personal response
- Competent analysis of writers' methods
- Relevant understanding of contexts
- Some meaningful connections across texts
- Awareness of different interpretations
- Clear expression with appropriate terminology

**Band 3 (9-12 marks):**
- Developing argument with some personal engagement
- Some analysis of writers' methods
- Some awareness of contexts
- Some connections made
- Limited awareness of interpretations
- Generally clear expression

**Band 2 (5-8 marks):**
- Some relevant response with limited personal engagement
- Limited analysis, more description
- Limited contextual awareness
- Basic or undeveloped connections
- Little awareness of interpretations
- Expression sometimes unclear

**Band 1 (1-4 marks):**
- Limited relevance to the question
- Minimal analysis
- Little contextual awareness
- No meaningful connections
- No engagement with interpretations
- Frequent expression errors

### Solution Must Include:

1. **Conceptualized thesis** showing what the top-band response argues
2. **Analysis of writers' methods** with specific quotations and terminology (metaphor, imagery, syntax, structure, tone, etc.)
3. **Contextual integration** showing how historical/social/literary context illuminates interpretation
4. **Critical perspectives** mentioning feminist, Marxist, psychoanalytic, or other lenses where relevant
5. **Comparative elements** if comparing texts
6. **Alternative interpretations** and how to evaluate them
`;

export const HISTORY_MARK_SCHEME_GUIDANCE = `
## History Mark Scheme Requirements

### Assessment Objectives Breakdown (AQA A-Level):
- **AO1** (40%): Demonstrate, organise and communicate knowledge and understanding
- **AO2** (40%): Analyse and evaluate sources and interpretations (where relevant)
- **AO3** (20%): Analyse and evaluate how the past has been interpreted

### Second-Order Concepts to Address:
- Causation (causes and consequences)
- Change and continuity
- Similarity and difference
- Significance
- Source analysis (utility, reliability, typicality)
- Interpretations (why historians disagree)

### Level Descriptors for 25-Mark Essays (Section B):

**Level 5 (21-25 marks):**
- Analytical argument sustained throughout
- Demonstrates wide-ranging, accurate, detailed knowledge
- Argument is substantiated and reaches a fully supported judgement
- Shows excellent understanding of key concepts and historical terms
- May challenge the premise of the question

**Level 4 (16-20 marks):**
- Analytical argument maintained throughout
- Good range of accurate knowledge
- Judgement supported by appropriate evidence
- Good understanding of concepts and terms
- Mostly secure analysis

**Level 3 (11-15 marks):**
- Some analytical structure
- Generally accurate knowledge but some gaps
- Argument develops but may not be sustained
- Some understanding of concepts
- Some imbalance or descriptive passages

**Level 2 (6-10 marks):**
- Limited analytical structure
- Some relevant knowledge but with inaccuracies
- Limited argument development
- Limited understanding of concepts
- Largely descriptive

**Level 1 (1-5 marks):**
- Minimal analytical structure
- Very limited relevant knowledge
- Assertion rather than argument
- Little understanding of concepts
- Almost entirely descriptive or narrative

### Solution Must Include:

1. **Analytical introduction** with clear thesis addressing the question directly
2. **Substantiated analysis** using precise, accurate historical knowledge
3. **Historiographical awareness** - reference to different historical interpretations where appropriate
4. **Causation chains** showing how factors link together
5. **Relative significance** - weighing factors against each other
6. **Synoptic awareness** - connections across the period
7. **Substantiated conclusion** with clear, qualified judgement
8. **Key dates and statistics** for factual accuracy
`;

export const PSYCHOLOGY_MARK_SCHEME_GUIDANCE = `
## Psychology Mark Scheme Requirements

### Assessment Objectives Breakdown (AQA A-Level):
- **AO1** (30-33%): Demonstrate knowledge and understanding of psychological concepts, theories, research studies, methods
- **AO2** (30-33%): Apply psychological knowledge to unfamiliar situations/scenarios
- **AO3** (35-40%): Analyse, interpret, and evaluate psychological information, ideas, and evidence

### GRAVES Framework for Evaluation:
- **G**eneralisability - sample representativeness, cultural/gender bias
- **R**eliability - replicability, consistency of findings
- **A**pplication - real-world uses and implications
- **V**alidity - internal, external, ecological validity
- **E**thics - protection from harm, consent, deception, right to withdraw
- **S**upporting/Contradicting studies - empirical evidence

### Level Descriptors for 16-Mark Essays:

**Level 4 (13-16 marks):**
- **AO1 (6 marks):** Knowledge is accurate and generally well-detailed. Minor detail and/or expansion sometimes lacking.
- **AO3 (10 marks):** Evaluation is thorough and effective. Specialist terminology used throughout. Clear, coherent, and focused.

**Level 3 (9-12 marks):**
- **AO1:** Knowledge is evident but occasional inaccuracies/omissions
- **AO3:** Evaluation is mostly effective but not always thorough. Answer mostly clear and organised.

**Level 2 (5-8 marks):**
- **AO1:** Some knowledge present but lacking detail
- **AO3:** Focus mainly on description. Evaluation only partly effective. Lacks clarity.

**Level 1 (1-4 marks):**
- **AO1:** Knowledge limited and may be inaccurate
- **AO3:** Evaluation absent or ineffective. Answer lacks focus.

### Solution Must Include:

1. **Theory/study description** with accurate details (procedures, findings, conclusions)
2. **Named psychologists and dates** (e.g., "Milgram (1963) found...")
3. **Statistical findings** where relevant (e.g., "65% obeyed to 450V")
4. **Multiple evaluation points** using GRAVES framework, each with:
   - Point identification
   - Evidence/elaboration
   - Counter-argument or qualification
   - Link back to the overall evaluation
5. **Application to scenario** if question includes stem
6. **Methodological evaluation** of research studies
7. **Balanced conclusion** weighing strengths vs limitations
`;

export const ECONOMICS_MARK_SCHEME_GUIDANCE = `
## Economics Mark Scheme Requirements

### Assessment Objectives Breakdown (Edexcel A-Level):
- **AO1** (20-24%): Demonstrate knowledge of terms, concepts, theories, models
- **AO2** (26-30%): Apply knowledge to various economic contexts
- **AO3** (26-30%): Analyse issues showing chains of reasoning
- **AO4** (20-24%): Evaluate arguments and reach supported judgements

### 25-Mark Essay Split:
- **KAA (Knowledge, Application, Analysis): 16 marks**
- **Evaluation: 9 marks**

### KAA Level Descriptors:

**Level 4 (13-16 marks):**
- Sophisticated understanding with strong applied reasoning linked to evidence
- Consistently well-developed chains of reasoning addressing the question
- Excellent use of relevant economic theory and real-world context
- Diagram(s) accurately drawn and fully integrated

**Level 3 (9-12 marks):**
- Good understanding with relevant application
- Developed chains of reasoning, mostly addressing the question
- Good use of economic theory
- Diagram(s) generally accurate

**Level 2 (5-8 marks):**
- Some relevant knowledge with partial application
- Some chains of reasoning but not fully developed
- Limited use of theory or context
- Diagram(s) may have errors

**Level 1 (1-4 marks):**
- Limited knowledge, fragmented understanding
- Minimal development of points
- Little or no use of theory or context
- Diagram(s) missing or significantly flawed

### Evaluation Level Descriptors:

**Level 3 (7-9 marks):**
- Thorough, balanced evaluation considering multiple perspectives
- Relevant reasoning with appropriate reference to context
- Clear judgement with conditions identified
- "Depends on" factors are specific and explained

**Level 2 (4-6 marks):**
- Some evaluation but not comprehensive
- Some attempt at balance
- Judgement present but not fully supported

**Level 1 (1-3 marks):**
- Limited or superficial evaluation
- One-sided or assertion without support
- No clear judgement

### Solution Must Include:

1. **Chains of reasoning** (multi-stage cause → effect → effect → implication)
2. **Diagram(s)** with:
   - Correctly labelled axes
   - Correct curves with labels
   - Directional arrows showing shifts
   - Shaded areas for welfare changes where relevant
3. **Real-world examples and data** integrated into analysis
4. **"Depends on" factors** for evaluation:
   - Magnitude of change
   - Time period (short-run vs long-run)
   - Elasticities involved
   - Ceteris paribus assumptions that may not hold
   - Stakeholder affected
5. **Substantiated conclusion** directly answering the question with key condition
`;

export const GEOGRAPHY_MARK_SCHEME_GUIDANCE = `
## Geography Mark Scheme Requirements

### Assessment Objectives Breakdown (AQA A-Level):
- **AO1** (30-40%): Demonstrate knowledge and understanding of places, environments, concepts, processes
- **AO2** (30-40%): Apply knowledge to interpret, analyse and evaluate geographical information
- **AO3** (20-30%): Use skills to investigate, interpret, analyse and evaluate

### Level Descriptors for 20-Mark Essays:

**Level 4 (16-20 marks):**
- Detailed evaluative conclusion that is rational and firmly based on knowledge and understanding
- Detailed, accurate, and relevant knowledge
- Detailed application with accurate evidence
- Full and accurate interpretation of source material
- Detailed, balanced, and well-developed argument

**Level 3 (11-15 marks):**
- Clear evaluative conclusion based on knowledge and understanding
- Generally accurate knowledge with occasional gaps
- Clear application with evidence
- Accurate interpretation of source material
- Clear argument with some balance

**Level 2 (6-10 marks):**
- Partial evaluative conclusion
- Partial accuracy in knowledge
- Partial application
- Partial interpretation of sources
- Unbalanced argument

**Level 1 (1-5 marks):**
- Assertion without evaluation
- Limited accuracy
- Limited application
- Limited interpretation
- Limited argument

### Solution Must Include:

1. **Named, located place studies** with specific detail (locations, dates, statistics)
2. **Geographical theories** explicitly referenced (e.g., Massey's sense of place, Harvey's time-space compression)
3. **Processes explained** with technical terminology
4. **Scale considerations** (local, regional, national, global)
5. **Human-physical interactions** where relevant
6. **Evaluation of different perspectives** (economic, social, environmental, political)
7. **Synoptic links** across themes
8. **Statistical evidence** and specific examples
9. **Qualified conclusion** acknowledging complexity
`;

export const BUSINESS_MARK_SCHEME_GUIDANCE = `
## Business Mark Scheme Requirements

### Assessment Objectives Breakdown (AQA A-Level):
- **AO1** (18-22%): Demonstrate knowledge of business concepts, terms, theories
- **AO2** (20-24%): Apply knowledge to familiar and unfamiliar contexts
- **AO3** (28-32%): Analyse issues using appropriate methods and concepts
- **AO4** (26-30%): Evaluate, make judgements, and propose solutions

### Level Descriptors for 25-Mark Essays:

**Level 5 (21-25 marks):**
- Comprehensive knowledge with precise terminology
- Sophisticated application to the specific business context
- Coherent, well-developed chains of analysis
- Mature evaluative judgement with recommendations
- Strategic perspective demonstrated

**Level 4 (16-20 marks):**
- Good knowledge accurately applied
- Clear application to context
- Developed analysis with logical reasoning
- Balanced evaluation with supported conclusion
- Some strategic awareness

**Level 3 (11-15 marks):**
- Generally accurate knowledge
- Some application to context
- Some analysis but may be limited
- Some evaluation but may be one-sided
- Limited strategic perspective

**Level 2 (6-10 marks):**
- Partial knowledge with some inaccuracies
- Limited application
- Limited analysis, more description
- Limited evaluation
- No strategic perspective

**Level 1 (1-5 marks):**
- Very limited knowledge
- Minimal application
- Minimal analysis
- No evaluation
- Assertions only

### Solution Must Include:

1. **Business theory/models** explicitly referenced (SWOT, PESTLE, Porter's Five Forces, Ansoff Matrix, etc.)
2. **Quantitative analysis** where data is provided (ratios, percentages, trends)
3. **Stakeholder perspectives** (shareholders, employees, customers, suppliers, community)
4. **Short-term vs long-term** implications
5. **Internal vs external factors** consideration
6. **Real business examples** to support points
7. **Recommendations** with justification
8. **Risk assessment** of proposed strategies
9. **Qualified judgement** acknowledging uncertainty
`;

// ============================================================================
// DIFFICULTY-SPECIFIC MARK SCHEME REQUIREMENTS
// ============================================================================

export function getEssayDifficultyGuidance(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return `
**SHORT ANSWER / EXPLAIN QUESTION (2-6 marks)**

Solution should include:
- Direct answer to the question
- Clear definition of key terms
- One or two developed points
- Basic evidence/example

Mark scheme format:
- Point-by-point marking (1 mark per valid point)
- Accept alternative valid answers
- Indicate maximum marks for specific elements
`;

    case 'medium':
      return `
**ANALYSIS / APPLICATION QUESTION (8-12 marks)**

Solution should include:
- Clear analytical structure
- Multiple developed points (usually 2-3)
- Application to specific context/scenario
- Some evaluation or weighing of factors
- Evidence integrated into analysis

Mark scheme format:
- Level descriptors (3-4 levels)
- Indicative content (not exhaustive)
- Guidance on what constitutes each level
- AO breakdown showing which skills earn marks
`;

    case 'hard':
      return `
**EXTENDED EVALUATION / ESSAY QUESTION (15-25 marks)**

Solution should include:
- Full level descriptors for all levels
- Comprehensive indicative content organized by argument
- Model answer structure showing paragraph organization
- Multiple arguments FOR and AGAINST
- Evaluation throughout, not just at end
- Substantiated conclusion with conditions
- Marking guidance and examiner tips
- Common pitfalls to avoid

Mark scheme format:
- Detailed level descriptors (4-6 levels)
- AO split clearly shown (e.g., KAA 16 + Evaluation 9)
- Indicative content covering full range of valid responses
- "This is not exhaustive" note
- Guidance on how to move between levels
- Examples of what constitutes sophistication vs adequacy
`;
  }
}

// ============================================================================
// COMMON INDICATIVE CONTENT TEMPLATE
// ============================================================================

export const INDICATIVE_CONTENT_TEMPLATE = `
### Indicative Content Structure:

**Arguments supporting [one side]:**

*Argument 1: [Theme/concept]*
- Key point: [What the argument is]
- Evidence: [Specific examples, statistics, case studies, quotations]
- Development: [How to extend into chains of reasoning]
- Evaluation link: [Limitations or qualifications]

*Argument 2: [Theme/concept]*
[Same structure]

*Argument 3 (if applicable): [Theme/concept]*
[Same structure]

**Arguments challenging / Counter-arguments:**

*Counter-argument 1: [Theme/concept]*
[Same structure]

*Counter-argument 2: [Theme/concept]*
[Same structure]

**Evaluation Factors:**
- Time period considerations
- Scale/magnitude
- Context-specific factors
- Stakeholder perspectives
- Conditions under which each side is stronger

**Possible Conclusions:**
- Strongest argument and why
- Key determining factor
- Qualified judgement with conditions
- Alternative conclusions if approached differently
`;

// ============================================================================
// SOLUTION QUALITY CHECKLIST
// ============================================================================

export const SOLUTION_QUALITY_CHECKLIST = `
### Quality Checklist for Essay Solutions:

Before finalizing the solution, verify it includes:

□ Full level descriptors (for 8+ mark questions)
□ Clear AO breakdown showing mark allocation
□ Multiple developed points on each side
□ Specific evidence (examples, data, quotes, case studies)
□ Chains of reasoning, not just assertions
□ Evaluation integrated throughout
□ Subject-specific terminology used correctly
□ Model answer structure guidance
□ "Depends on" factors identified
□ Substantiated conclusion example
□ Common mistakes section
□ Examiner tips for achieving top band

The solution should be detailed enough that a student could:
1. Understand exactly what is required for each level
2. Know what specific content to include
3. Understand HOW to structure their response
4. Avoid common pitfalls
5. Write a top-band response using the guidance
`;

// ============================================================================
// EXPORT COMBINED GUIDANCE
// ============================================================================

export function getEnhancedEssayMarkSchemePrompt(
  subject: 'english-literature' | 'history' | 'psychology' | 'economics' | 'geography' | 'business',
  difficulty: Difficulty
): string {
  const subjectGuidance = {
    'english-literature': ENGLISH_LIT_MARK_SCHEME_GUIDANCE,
    'history': HISTORY_MARK_SCHEME_GUIDANCE,
    'psychology': PSYCHOLOGY_MARK_SCHEME_GUIDANCE,
    'economics': ECONOMICS_MARK_SCHEME_GUIDANCE,
    'geography': GEOGRAPHY_MARK_SCHEME_GUIDANCE,
    'business': BUSINESS_MARK_SCHEME_GUIDANCE,
  };

  return `
${ESSAY_MARK_SCHEME_STRUCTURE}

${subjectGuidance[subject]}

${getEssayDifficultyGuidance(difficulty)}

${INDICATIVE_CONTENT_TEMPLATE}

${SOLUTION_QUALITY_CHECKLIST}

CRITICAL: The solution field in your JSON response must contain a COMPLETE, DETAILED mark scheme following ALL the guidance above. This is what students will learn from - it must be thorough and explanatory, not just bullet points.
`;
}
