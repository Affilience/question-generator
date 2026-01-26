import { NextRequest } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { getTopicById, getTopicByIdSubjectBoardAndLevel } from '@/lib/topics';
import { getPracticalById } from '@/lib/practicals';
import { getCachedQuestion, cacheQuestion, getCacheCount } from '@/lib/questionCache';
import { checkRateLimit, getClientIP, getRateLimitHeaders, RATE_LIMITS } from '@/lib/rate-limit';
import { checkQuestionGenerationAllowed, incrementQuestionUsage, canControlDifficulty } from '@/lib/api/subscription-check';
import { findExistingQuestion, storeQuestion, recordQuestionServed } from '@/lib/question-bank';
import { Difficulty, ExamBoard, QualificationLevel, Subject, Practical, PracticalSubtopic } from '@/types';
import { DiagramSpec } from '@/types/diagram';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';
import { DIAGRAM_SCHEMA_DOCS } from '@/lib/prompts-common';
import { getSubjectSpecificMarkRange } from '@/lib/prompt-router';
import { validateQuestionOutput, ValidationContext } from '@/lib/validations/question-output';
// Import real extract/source databases for English Literature and History
import { getRandomExtractForTheme, LiteraryExtract } from '@/lib/extracts/english-literature-extracts';
import { getRandomSourceForTheme, HistoricalSource } from '@/lib/extracts/history-sources';
import {
  getQuestionConfig,
  isEssaySubject,
  formatLevelDescriptors,
  formatAssessmentObjectives,
  getRandomCommandWord,
  getRandomQuestionFormat,
  getRandomScienceQuestionType,
  getRandomMathsQuestionType,
  isScienceSubject,
  isMathsSubject,
  EssayQuestionConfig,
  QuestionFormat
} from '@/lib/essay-subject-config';

export const runtime = 'edge';

// Check for fine-tuned model for this subject/level/board combo
function getFineTunedModel(subject: Subject, level: QualificationLevel, board: ExamBoard): string | null {
  const envKey = `FINE_TUNED_MODEL_${subject.toUpperCase()}_${level.toUpperCase().replace('-', '')}_${board.toUpperCase()}`;
  return process.env[envKey] || null;
}

// Calculate appropriate max_tokens based on subject type and difficulty
function getMaxTokens(subject: Subject, difficulty: Difficulty): number {
  if (isEssaySubject(subject)) {
    switch (difficulty) {
      case 'easy': return 2500;   // Short explanations with level descriptors
      case 'medium': return 4000; // Extended responses with full mark schemes
      case 'hard': return 6000;   // Full essay answers with detailed level descriptors and indicative content
    }
  }

  // Quantitative subjects (maths, physics, chemistry, etc.)
  switch (difficulty) {
    case 'easy': return 1500;
    case 'medium': return 2000;
    case 'hard': return 3000;   // Complex multi-part questions need more space
  }
}

// Get mark range - uses essay config if available, otherwise uses subject-specific ranges from prompt-router
function getMarkRange(difficulty: Difficulty, subject: Subject, level: QualificationLevel, board?: ExamBoard): { min: number; max: number } {
  const config = getQuestionConfig(subject, level, difficulty, board);
  if (config) {
    const marks = config.totalMarks;
    return { min: marks, max: marks };
  }

  // Use subject-specific mark ranges from the prompt router
  return getSubjectSpecificMarkRange(difficulty, subject, level);
}

/**
 * Get subject-specific guidance for data_response format
 * This ensures extracts, sources, and data are actually included in questions
 * and are RELEVANT to the specific topic/subtopic being studied
 *
 * For English Literature and History: Uses REAL extracts/sources from the database
 * For other subjects: AI generates appropriate data/scenarios
 */
function getSubjectDataGuidance(subject: Subject, totalMarks: number, topicName: string, subtopic: string): {
  questionGuidance: string;
  solutionGuidance: string;
  commandWords: string[];
} {
  switch (subject) {
    case 'english-literature': {
      // Try to get a real extract from the database
      const realExtract = getRandomExtractForTheme(topicName, subtopic);

      if (realExtract) {
        // Use the real extract from the database
        return {
          questionGuidance: `
QUESTION TYPE: EXTRACT-BASED ANALYSIS (${totalMarks} marks)

**USE THIS EXACT EXTRACT** - This is a real passage from ${realExtract.text}:

---
**Read the following extract from ${realExtract.location} of "${realExtract.text}" by ${realExtract.author}:**

${realExtract.contextNote ? `[Context: ${realExtract.contextNote}]` : ''}

${realExtract.extract}
---

**CRITICAL INSTRUCTIONS:**
1. Include the EXACT extract above in your question (copy it exactly)
2. Format it clearly with "Read the following extract from ${realExtract.location}..."
3. Ask an analysis question focusing on: ${subtopic}
4. The question should explore how ${realExtract.author} presents themes/characters through this passage

**RELEVANT THEMES in this extract:** ${realExtract.themes.join(', ')}
**LITERARY TECHNIQUES present:** ${realExtract.techniques.join(', ')}
**CHARACTERS featured:** ${realExtract.characters.join(', ')}`,
          solutionGuidance: `
MODEL ANSWER:
- Quote directly from the provided extract (use quotation marks)
- Analyse specific words/phrases: consider "${realExtract.techniques[0]}" and other techniques
- Discuss how ${realExtract.author} presents ${subtopic} through language, structure, form
- Reference the themes: ${realExtract.themes.slice(0, 2).join(', ')}
- Link to wider context of the text`,
          commandWords: ['Read the extract below', 'In this extract, how does', 'Starting with this extract', 'How does the writer present']
        };
      }

      // Fallback if no extract found - AI generates (but this should rarely happen)
      return {
        questionGuidance: `
QUESTION TYPE: EXTRACT-BASED ANALYSIS (${totalMarks} marks)
**TOPIC CONTEXT**: ${topicName} - ${subtopic}

No pre-loaded extract available for this specific topic. Create a realistic passage that:
- Is in the style and language of ${topicName}
- Relates directly to the theme of ${subtopic}
- Contains 150-300 words with clear literary techniques
- Includes specific location reference (Act/Scene or Chapter/Stave)`,
        solutionGuidance: `
MODEL ANSWER:
- Quote directly from the provided extract
- Analyse specific words/phrases and their effects on presenting ${subtopic}
- Discuss writer's methods in relation to ${subtopic}`,
        commandWords: ['Read the extract below', 'In this extract, how does', 'Starting with this extract', 'How does the writer present']
      };
    }

    case 'history': {
      // Try to get a real historical source from the database
      const realSource = getRandomSourceForTheme(topicName, subtopic);

      if (realSource) {
        // Use the real historical source from the database
        return {
          questionGuidance: `
QUESTION TYPE: SOURCE-BASED QUESTION (${totalMarks} marks)

**USE THIS EXACT SOURCE** - This is a real/adapted historical document:

---
**Source A: ${realSource.title}**

${realSource.content}

*${realSource.attribution}*
---

**CRITICAL INSTRUCTIONS:**
1. Include the EXACT source above in your question (copy it exactly)
2. Format it as "Source A: ${realSource.title}" followed by the content and attribution
3. Ask an analysis question relating to: ${subtopic}
4. Consider asking about usefulness, reliability, or what can be inferred

**SOURCE CONTEXT:**
- Type: ${realSource.sourceType}
- Period: ${realSource.period}
- Provenance: ${realSource.provenance}
${realSource.bias ? `- Potential bias: ${realSource.bias}` : ''}

**RELEVANT THEMES:** ${realSource.themes.join(', ')}`,
          solutionGuidance: `
MODEL ANSWER:
- Reference specific content from Source A
- Analyse the source's perspective and purpose
- Consider provenance: ${realSource.provenance}
${realSource.bias ? `- Evaluate bias: ${realSource.bias}` : ''}
- Use contextual knowledge about ${topicName} to evaluate
- Consider both strengths and limitations of the source`,
          commandWords: ['Study Source A', 'Using Source A', 'How useful is Source A', 'What can you infer from Source A']
        };
      }

      // Fallback if no source found - AI generates (but should rarely happen)
      return {
        questionGuidance: `
QUESTION TYPE: SOURCE-BASED QUESTION (${totalMarks} marks)
**TOPIC CONTEXT**: ${topicName} - ${subtopic}

No pre-loaded source available. Create a realistic historical source that:
- Is period-appropriate for ${topicName}
- Relates to ${subtopic}
- Includes clear attribution (author, date, context)
- Uses historically accurate language and details`,
        solutionGuidance: `
MODEL ANSWER:
- Reference specific content from the source
- Analyse perspective/bias/purpose in relation to ${subtopic}
- Consider provenance
- Use contextual knowledge to evaluate`,
        commandWords: ['Study Source A', 'Using Source A', 'How useful is Source A', 'What can you infer from Source A']
      };
    }

    case 'economics':
    case 'business':
      return {
        questionGuidance: `
QUESTION TYPE: DATA RESPONSE (${totalMarks} marks)
CRITICAL: You MUST include data/statistics in the question.

**TOPIC CONTEXT**: ${topicName} - ${subtopic}
The data MUST be relevant to "${subtopic}" and demonstrate the economic/business concept being studied.

FORMAT YOUR QUESTION LIKE THIS:
1. First, provide the data in a clearly marked section:
   "Figure 1: [Title relevant to ${subtopic} - e.g., data showing ${subtopic} in practice]

   | Year/Category | Value |
   |---------------|-------|
   | ...           | ...   |
   ...

   OR describe a graph/chart relevant to ${subtopic}:
   'Figure 1 shows [description of trend/data illustrating ${subtopic}]...'"

2. Then ask the analysis question about the data in relation to ${subtopic}.

DATA REQUIREMENTS:
- Data MUST illustrate or relate to: ${subtopic}
- Include realistic, plausible figures that demonstrate ${subtopic}
- Use appropriate units (%, £millions, index numbers)
- Data should show clear trends or patterns relevant to ${subtopic}
- Can include: tables, graph descriptions, company financial data, market statistics`,
        solutionGuidance: `
MODEL ANSWER:
- Reference specific figures from the data
- Identify and explain trends/patterns in relation to ${subtopic}
- Apply ${subtopic} concepts to analyse the data
- Draw conclusions supported by the evidence`,
        commandWords: ['Using the data in Figure 1', 'With reference to the data', 'Using the information provided', 'Calculate and explain']
      };

    case 'psychology':
      return {
        questionGuidance: `
QUESTION TYPE: RESEARCH STUDY/DATA ANALYSIS (${totalMarks} marks)
CRITICAL: You MUST include research data or a study description.

**TOPIC CONTEXT**: ${topicName} - ${subtopic}
The study/data MUST be relevant to "${subtopic}" and represent the type of research used in this area.

FORMAT YOUR QUESTION LIKE THIS:
1. First, provide the study/data:
   "A psychologist conducted a study investigating ${subtopic}...
   [describe method, sample, procedure relevant to ${subtopic}]

   Results:
   | Condition A | Condition B |
   |-------------|-------------|
   | Mean: X     | Mean: Y     |

   OR 'The results showed that... [findings relevant to ${subtopic}]'"

2. Then ask the analysis question relating to ${subtopic}.

REQUIREMENTS:
- Study MUST be relevant to: ${topicName} - ${subtopic}
- Include realistic psychological research scenarios appropriate for ${subtopic}
- Provide actual numerical data where appropriate
- Reference research methods, variables, sampling typical for ${subtopic} research`,
        solutionGuidance: `
MODEL ANSWER:
- Reference specific data from the study
- Apply ${subtopic} concepts/theories to explain findings
- Evaluate methodology if relevant
- Draw evidence-based conclusions about ${subtopic}`,
        commandWords: ['Using the data', 'With reference to the study', 'What do the results suggest', 'Evaluate the findings']
      };

    case 'geography':
      return {
        questionGuidance: `
QUESTION TYPE: RESOURCE-BASED QUESTION (${totalMarks} marks)
CRITICAL: You MUST include geographical data/resources.

**TOPIC CONTEXT**: ${topicName} - ${subtopic}
The resource MUST be relevant to "${subtopic}" and show geographical patterns/data for this topic.

FORMAT YOUR QUESTION LIKE THIS:
1. First, provide the resource:
   "Figure 1: [Map/Graph/Table/Photo description relevant to ${subtopic}]

   [Include data, statistics, or detailed description of geographical features/patterns illustrating ${subtopic}]"

2. Then ask the analysis question relating to ${subtopic}.

REQUIREMENTS:
- Resource MUST illustrate: ${topicName} - ${subtopic}
- Include realistic geographical data (population, climate, economic figures) relevant to ${subtopic}
- Describe maps, graphs, or fieldwork data that demonstrate ${subtopic}
- Reference specific locations and statistics appropriate for ${subtopic}`,
        solutionGuidance: `
MODEL ANSWER:
- Reference specific evidence from the resource
- Apply ${subtopic} concepts and terminology
- Explain patterns, processes, or relationships shown
- Use case study knowledge where relevant to ${subtopic}`,
        commandWords: ['Study Figure 1', 'Using Figure 1', 'Describe the pattern shown', 'Using evidence from']
      };

    case 'computer-science':
      return {
        questionGuidance: `
QUESTION TYPE: PROGRAM/ALGORITHM ANALYSIS (${totalMarks} marks)
CRITICAL: You MUST include code, pseudocode, or a trace table in the question.

**TOPIC CONTEXT**: ${topicName} - ${subtopic}
The code/algorithm MUST demonstrate "${subtopic}" - the specific programming concept being studied.

FORMAT YOUR QUESTION LIKE THIS:
1. First, provide the code/algorithm:
   "The following pseudocode/Python/algorithm demonstrates ${subtopic}...

   \`\`\`
   [Include 5-15 lines of code or pseudocode that demonstrates ${subtopic}]
   \`\`\`

   OR provide a trace table showing ${subtopic} in action:
   | Variable | Value after iteration 1 | Value after iteration 2 |
   |----------|------------------------|------------------------|
   | x        | ...                    | ...                    |"

2. Then ask the analysis question about ${subtopic}.

REQUIREMENTS:
- Code MUST demonstrate: ${subtopic}
- Include realistic, runnable code or clear pseudocode showing ${subtopic}
- For trace tables: show variable states demonstrating ${subtopic}
- For algorithms: include actual code that demonstrates ${subtopic}
- May include program output to interpret`,
        solutionGuidance: `
MODEL ANSWER:
- Trace through code step by step if required
- Identify how the code demonstrates ${subtopic}
- Explain algorithm efficiency/purpose in relation to ${subtopic}
- Reference specific lines/variables`,
        commandWords: ['What is the output', 'Trace through the algorithm', 'State the purpose', 'Complete the trace table', 'Explain what this code does']
      };

    default:
      // Generic data response for other subjects
      return {
        questionGuidance: `
QUESTION TYPE: DATA/STIMULUS RESPONSE (${totalMarks} marks)
CRITICAL: You MUST include relevant data, extract, or stimulus material in the question.

**TOPIC CONTEXT**: ${topicName} - ${subtopic}
The stimulus material MUST be relevant to "${subtopic}".

Include the stimulus material FIRST, clearly marked, then ask the question about it.
The material should be substantial enough for meaningful analysis of ${subtopic}.`,
        solutionGuidance: `
MODEL ANSWER:
- Reference specific content from the stimulus
- Show analysis of the material in relation to ${subtopic}
- Link analysis to subject concepts`,
        commandWords: ['Using the information provided', 'With reference to', 'Based on the extract', 'Analyse']
      };
  }
}

/**
 * Get format-specific guidance for different question types
 */
function getFormatGuidance(format: QuestionFormat, config: EssayQuestionConfig, subject: Subject, level: QualificationLevel, topicName: string, subtopic: string): {
  questionGuidance: string;
  solutionGuidance: string;
  commandWords: string[];
} {
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';

  switch (format) {
    case 'definition':
      return {
        questionGuidance: `
QUESTION TYPE: DEFINITION/STATE (${config.totalMarks} marks)
- Use command words: "Define", "State", "What is meant by", "Give the meaning of"
- Requires precise, accurate definition using subject terminology
- May ask for examples to demonstrate understanding
- Clear, unambiguous wording`,
        solutionGuidance: `
MODEL ANSWER:
- Provide precise definition with key terminology
- Include example if appropriate
- Brief but complete`,
        commandWords: ['Define', 'State', 'What is meant by', 'Give the meaning of']
      };

    case 'calculation':
      return {
        questionGuidance: `
QUESTION TYPE: CALCULATION/DATA (${config.totalMarks} marks)
- Requires numerical calculation or data interpretation
- Include realistic data/figures in the question
- Show units in question and expect them in answer
- For ${subject}: use appropriate formulas and realistic values`,
        solutionGuidance: `
MODEL ANSWER:
- Show all working clearly
- Include correct formula
- Present final answer with units
- Note key steps`,
        commandWords: ['Calculate', 'Work out', 'Using the data', 'Determine']
      };

    case 'short_answer':
      return {
        questionGuidance: `
QUESTION TYPE: SHORT ANSWER (${config.totalMarks} marks)
- Tests factual recall with brief response
- Use command words: "Identify", "Name", "Give", "State", "Outline"
- Clear, specific question
- One mark per valid point typically`,
        solutionGuidance: `
MODEL ANSWER:
- Brief, accurate responses
- One point per mark typically
- Use correct terminology`,
        commandWords: ['Identify', 'Name', 'Give', 'State', 'Outline', 'List']
      };

    case 'diagram':
      return {
        questionGuidance: `
QUESTION TYPE: DIAGRAM-BASED (${config.totalMarks} marks)
- Requires drawing, labelling, or interpreting a diagram
- May combine diagram with brief explanation
- For ${subject}: use appropriate diagram types
- Clearly state what should be shown/labelled`,
        solutionGuidance: `
MODEL ANSWER:
- Describe expected diagram elements
- Include correct labels
- Link explanation to diagram`,
        commandWords: ['Draw', 'Sketch', 'Label', 'Using a diagram, explain', 'With the help of a diagram']
      };

    case 'data_response':
      // Subject-specific data/extract guidance with topic context
      const dataGuidance = getSubjectDataGuidance(subject, config.totalMarks, topicName, subtopic);
      return {
        questionGuidance: dataGuidance.questionGuidance,
        solutionGuidance: dataGuidance.solutionGuidance,
        commandWords: dataGuidance.commandWords
      };

    case 'explain':
      return {
        questionGuidance: `
QUESTION TYPE: EXPLAIN (${config.totalMarks} marks)
- Requires developed explanation with reasoning
- Use command words: "Explain", "Why", "How"
- Needs chains of reasoning (point → because → therefore)
- May need examples or evidence to support`,
        solutionGuidance: `
MODEL ANSWER:
- Clear chains of reasoning
- Link cause to effect
- Use subject terminology
- Include relevant examples`,
        commandWords: ['Explain', 'Explain why', 'Explain how', 'Why does', 'Account for']
      };

    case 'analyse':
      return {
        questionGuidance: `
QUESTION TYPE: ANALYSE/COMPARE (${config.totalMarks} marks)
- Requires detailed analysis or comparison
- Use command words: "Analyse", "Compare", "Examine", "Assess"
- Multiple points/factors should be considered
- For ${subject}: apply appropriate analytical frameworks`,
        solutionGuidance: `
MODEL ANSWER:
- Multiple analytical points
- Clear structure
- Consider different aspects/factors
- Link analysis to question focus`,
        commandWords: ['Analyse', 'Compare', 'Examine', 'Assess', 'Consider']
      };

    case 'short_essay':
      return {
        questionGuidance: `
QUESTION TYPE: SHORT ESSAY (${config.totalMarks} marks)
- Extended response requiring analysis and some evaluation
- Use command words: "Discuss", "Explain", "Analyse", "Assess"
- Requires structured paragraphs
- Evidence/examples required`,
        solutionGuidance: `
MODEL ANSWER (${levelDisplay === 'A-Level' ? '300-500' : '200-300'} words):
- Clear introduction
- 2-3 developed points with evidence
- Links between points
- Brief conclusion`,
        commandWords: ['Discuss', 'Analyse', 'Assess', 'Explain in detail']
      };

    case 'extended_essay':
    default:
      return {
        questionGuidance: `
QUESTION TYPE: EXTENDED ESSAY (${config.totalMarks} marks)
- Full essay requiring sustained argument and evaluation
- Use command words: "Evaluate", "To what extent", "Discuss", "Assess"
- Requires balanced argument considering multiple perspectives
- Must reach substantiated judgement`,
        solutionGuidance: `
MODEL ANSWER (${levelDisplay === 'A-Level' ? '800-1200' : '500-800'} words):
- Clear introduction with thesis
- ${levelDisplay === 'A-Level' ? '3-4' : '2-3'} body paragraphs with evidence
- Counter-arguments considered
- Conclusion with clear judgement`,
        commandWords: ['Evaluate', 'To what extent', 'Discuss', 'Assess', 'How far do you agree']
      };
  }
}

/**
 * Build essay-specific prompt using comprehensive configuration
 * Now with question format variation based on allowedFormats
 */
function buildEssayPrompt(
  config: EssayQuestionConfig,
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();

  // Get a random question format from allowed formats for variety
  const selectedFormat = getRandomQuestionFormat(config);
  const formatGuidance = getFormatGuidance(selectedFormat, config, subject, level, topicName, subtopic);
  const commandWord = formatGuidance.commandWords[Math.floor(Math.random() * formatGuidance.commandWords.length)];

  // Format assessment objectives for the prompt
  const aoBreakdown = config.assessmentObjectives
    .map(ao => `- ${ao.code} (${ao.marks} marks): ${ao.description}`)
    .join('\n');

  // Format level descriptors for the mark scheme
  const levelDescriptors = config.levelDescriptors
    .sort((a, b) => b.level - a.level)
    .map(ld => {
      const chars = ld.characteristics.slice(0, 3).join('; ');
      return `Level ${ld.level} (${ld.minMarks}-${ld.maxMarks} marks): ${chars}`;
    })
    .join('\n');

  // Check if this subject uses SPaG marks (History essays)
  const usesSPaG = subject === 'history' && config.totalMarks >= 16;
  const spagNote = usesSPaG ? '\n\n**Additional SPaG marks (4 marks):**\n- High (4): Sophisticated vocabulary including specialist terms; accurate spelling and punctuation; effective grammar\n- Intermediate (2-3): Generally accurate with some errors\n- Threshold (1): Basic accuracy; frequent errors' : '';

  // Build mark scheme guidance based on format
  let markSchemeGuidance = '';
  if (selectedFormat === 'calculation') {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- Award method marks (M) for correct process/formula
- Award accuracy marks (A) for correct calculation/answer
- Include follow-through (ft) marks where appropriate
- Award marks for correct units where applicable
- Specify when answers must be "correct and obvious" (cao)
- Include detailed marking guidance for each mark point
EXAMPLE: For a 4-mark calculation question:
["M1: Correct formula/method identified", "M1: Correct substitution of values", "A1: Correct calculation of intermediate step", "A1 cao: Final answer with correct units"]`;
  } else if (selectedFormat === 'definition' || selectedFormat === 'short_answer') {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- List specific points that earn marks with clear marking codes
- Award 1 mark per valid point typically
- Include acceptable alternative answers and synonyms
- Specify mark types: B (independent), A (accuracy), or M (method)
- Include detailed descriptions for each mark point
EXAMPLE: For a 3-mark definition question:
["B1: States [key concept 1] or equivalent", "B1: Explains [key concept 2] or [acceptable alternative]", "B1: Links/connects [relationship] or describes [specific example]"]`;
  } else if (config.totalMarks >= 8) {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
This question is worth ${config.totalMarks} marks, allocated as:
${aoBreakdown}
${spagNote}

The mark scheme MUST follow this EXACT structure in the markScheme array:

1. **AO BREAKDOWN** (first entry): "AO Breakdown: ${config.assessmentObjectives.map(ao => `${ao.code}=${ao.marks}`).join(', ')}"

2. **LEVEL DESCRIPTORS** (one entry per level, highest first):
${levelDescriptors}
Format each as: "Level X (Y-Z marks): [descriptor characteristics]"

3. **INDICATIVE CONTENT** (specific points students might include):
- Start with "Indicative content:"
- List 6-10 specific points, examples, or pieces of evidence students might use
- Include specific terminology, dates, quotations, case studies, or theorists as appropriate for ${subject}
- Points should be relevant to the specific topic: ${topicName} - ${subtopic}

EXAMPLE markScheme array format:
[
  "AO Breakdown: ${config.assessmentObjectives.map(ao => `${ao.code}=${ao.marks}`).join(', ')}",
  "Level 4 (13-16 marks): Complex analysis; sustained judgement; well-selected evidence",
  "Level 3 (9-12 marks): Developed explanation; clear judgement; relevant evidence",
  "Level 2 (5-8 marks): Simple explanation; partial judgement; some evidence",
  "Level 1 (1-4 marks): Basic points; limited or no judgement",
  "Indicative content: Students may include: [specific point 1]; [specific point 2]; [specific point 3]; [quotation or statistic]; [case study or example]; [counterargument]; [evaluation point]"${usesSPaG ? ',\n  "SPaG (4 marks): High (4)=sophisticated vocabulary and accurate throughout; Intermediate (2-3)=generally accurate; Threshold (1)=basic accuracy"' : ''}
]`;
  } else {
    markSchemeGuidance = `
MARK SCHEME REQUIREMENTS:
- Total marks: ${config.totalMarks}
- List specific points for marking
- Include assessment objective allocation: ${aoBreakdown}
- Include indicative content with specific examples for ${subtopic}`;
  }

  // Include diagram schema for diagram-type questions
  const needsDiagram = selectedFormat === 'diagram' || selectedFormat === 'data_response';
  const diagramInstructions = needsDiagram ? `

${DIAGRAM_SCHEMA_DOCS}

IMPORTANT: For this question type, you SHOULD include a "diagram" field in your JSON response following the schema above.` : '';

  // JSON structure with optional diagram field
  const jsonStructure = needsDiagram
    ? `{
  "content": "The full question text using the command word '${commandWord}'",
  "marks": ${config.totalMarks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", "..."],
  "diagram": {"width": 10, "height": 8, "elements": [...]}
}`
    : `{
  "content": "The full question text using the command word '${commandWord}'",
  "marks": ${config.totalMarks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", "..."]
}`;

  return `Generate a ${boardUpper} ${levelDisplay} ${subject.replace('-', ' ')} exam question. Return ONLY valid JSON, no markdown.

TOPIC: ${topicName} - ${subtopic}
MARKS: ${config.totalMarks}
DIFFICULTY: ${difficulty.toUpperCase()}
SELECTED FORMAT: ${selectedFormat.toUpperCase()}
${formatGuidance.questionGuidance}

Command word to use: "${commandWord}"
${markSchemeGuidance}
${formatGuidance.solutionGuidance}
${diagramInstructions}

${config.totalMarks >= 8 ? 'CRITICAL: The mark scheme must use LEVEL-BASED DESCRIPTORS as shown above, not just a list of points.' : ''}

Use \\n for line breaks in strings.

Return exactly this JSON structure (no markdown code blocks):
${jsonStructure}`;
}

/**
 * Get question type guidance for quantitative subjects based on selected format
 */
function getQuantitativeFormatGuidance(format: QuestionFormat, subject: Subject): {
  typeDescription: string;
  requirements: string;
  commandWords: string[];
} {
  switch (format) {
    case 'calculation':
      return {
        typeDescription: 'CALCULATION/PROBLEM-SOLVING',
        requirements: `
- Numerical calculation or algebraic manipulation required
- Include realistic values and units
- May require formula application
- Show working for method marks`,
        commandWords: ['Calculate', 'Work out', 'Find', 'Determine', 'Show that']
      };

    case 'explain':
      return {
        typeDescription: 'EXPLAIN/DESCRIBE',
        requirements: `
- Requires explanation using subject terminology
- Chain of reasoning (because → therefore)
- May link concepts to phenomena
- Use specific examples where relevant`,
        commandWords: ['Explain', 'Describe', 'Why does', 'How does', 'Suggest why']
      };

    case 'data_response':
      return {
        typeDescription: 'GRAPH/DATA ANALYSIS',
        requirements: `
- Include data in question (table or describe graph/trend)
- Requires interpretation of the data
- May ask to identify patterns/trends
- Link data analysis to concepts`,
        commandWords: ['Using the data', 'What does the graph show', 'Describe the trend', 'Analyse']
      };

    case 'analyse':
      return {
        typeDescription: 'COMPARE/EVALUATE',
        requirements: `
- Compare two or more items/methods/situations
- Identify similarities AND differences
- May require evaluation of advantages/disadvantages
- Use comparative language`,
        commandWords: ['Compare', 'Contrast', 'Evaluate', 'Discuss the advantages']
      };

    case 'short_essay':
      return {
        typeDescription: 'EXTENDED RESPONSE (6 marks - LEVEL-BASED)',
        requirements: `
- Longer response requiring structured answer (6 marks)
- Multiple points linked together
- For ${subject}: use appropriate ${subject === 'physics' ? 'physics concepts and formulas' : subject === 'chemistry' ? 'chemical equations and terminology' : 'mathematical reasoning'}
- Quality of written communication assessed

IMPORTANT: 6-mark extended response uses LEVEL-BASED marking, NOT individual mark points:
- Level 3 (5-6 marks): Detailed, coherent explanation linking all relevant points; uses correct scientific terminology throughout; clear logical structure
- Level 2 (3-4 marks): Explanation links some points; uses some scientific terminology; mostly logical structure
- Level 1 (1-2 marks): Simple statements; limited terminology; lacks clear structure

The markScheme array for 6-mark questions MUST include:
["Level 3 (5-6 marks): Detailed coherent explanation with correct terminology and logical structure",
 "Level 2 (3-4 marks): Links some points with some terminology",
 "Level 1 (1-2 marks): Simple statements with limited terminology",
 "Indicative content: [list 5-6 specific points students might include for this topic]"]`,
        commandWords: ['Explain in detail', 'Describe and explain', 'Discuss']
      };

    case 'diagram':
    default:
      return {
        typeDescription: 'GRAPH/DIAGRAM INTERPRETATION',
        requirements: `
- May involve interpreting or sketching graphs/diagrams
- Describe key features to include
- Link graph features to concepts
- For ${subject}: use appropriate graph types`,
        commandWords: ['Sketch', 'Draw', 'Using the diagram', 'Describe the shape of']
      };
  }
}

/**
 * Build prompt for quantitative (non-essay) subjects
 * Now with question type variation based on subject
 */
function buildQuantitativePrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  const markRange = getMarkRange(difficulty, subject, level, board);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();
  const targetMarks = Math.floor((markRange.min + markRange.max) / 2);

  // Select question type based on subject
  let selectedFormat: QuestionFormat;
  if (isScienceSubject(subject)) {
    selectedFormat = getRandomScienceQuestionType();
  } else if (isMathsSubject(subject)) {
    selectedFormat = getRandomMathsQuestionType();
  } else {
    selectedFormat = 'calculation'; // Default
  }

  const formatGuidance = getQuantitativeFormatGuidance(selectedFormat, subject);
  const commandWord = formatGuidance.commandWords[Math.floor(Math.random() * formatGuidance.commandWords.length)];

  const difficultyDesc = difficulty === 'easy'
    ? 'Simple, 1-2 steps, grades 1-3'
    : difficulty === 'medium'
    ? 'Moderate, 2-3 steps, grades 4-5'
    : 'Challenging, multi-step, grades 6-9';

  // Include diagram schema for diagram-type questions
  const needsDiagram = selectedFormat === 'diagram' || selectedFormat === 'data_response';
  const diagramInstructions = needsDiagram ? `

${DIAGRAM_SCHEMA_DOCS}

IMPORTANT: For this question type, you SHOULD include a "diagram" field in your JSON response following the schema above.` : '';

  // JSON structure with optional diagram field
  const jsonExample = needsDiagram
    ? `{"content":"Question text using '${commandWord}'","marks":${targetMarks},"solution":"**Step 1:** [action] (M1)\\n**Step 2:** [calculation] (A1)\\n**Answer:** [final answer with units]","markScheme":["M1: Correct method/formula","A1 ft: Correct substitution/calculation","A1: cao Final answer"],"diagram":{"width":10,"height":8,"elements":[...]}}`
    : `{"content":"Question text using '${commandWord}'","marks":${targetMarks},"solution":"**Step 1:** [action] (M1)\\n**Step 2:** [calculation] (A1)\\n**Answer:** [final answer with units]","markScheme":["M1: Correct method/formula","A1 ft: Correct calculation","A1: cao Final answer"]}`;

  return `Generate a ${boardUpper} ${levelDisplay} ${subject} exam question. Return ONLY valid JSON, no markdown.

Topic: ${topicName} - ${subtopic}
Difficulty: ${difficultyDesc}
Marks: ${markRange.min}-${markRange.max}
QUESTION TYPE: ${formatGuidance.typeDescription}

Use command word: "${commandWord}"
${formatGuidance.requirements}

Requirements:
- Original question matching ${boardUpper} exam style
- Clear, unambiguous wording
- Worked solution with steps showing each mark point

MARK SCHEME FORMAT (CRITICAL - use proper notation):
Mark types:
- **M1, M2**: Method marks for correct approach/setup (awarded even with arithmetic errors)
- **A1, A2**: Accuracy marks for correct execution (depend on preceding M marks)
- **B1**: Independent marks for correct statements, values, or conclusions
- **ft**: Follow-through mark (credit given despite earlier errors if method is correct)
- **dep**: Dependent mark (requires previous mark to be awarded)
- **oe**: Or equivalent (accept equivalent correct forms)
- **cao**: Correct answer only (no follow-through)

For multi-part questions, prefix with part: "(a) M1:", "(b) A1:"

EXAMPLE markScheme formats:
3-mark question: ["M1: Sets up equation correctly", "M1 dep: Solves to find $x$", "A1: cao $x = 5$"]
4-mark question: ["M1: Uses correct formula", "A1 ft: Substitutes values correctly", "M1 dep: Rearranges for final variable", "A1: cao Final answer with units"]
Multi-part: ["(a) B1: Correct value", "(b) M1: Identifies relationship", "(b) A1 ft: Calculates result"]

LaTeX/Math Formatting (CRITICAL):
- ALWAYS wrap ALL math expressions in $...$ delimiters
- Variables: $x$, $y$, $v$, $F$
- Subscripts: $F_{net}$, $F_{friction}$, $v_{initial}$, $x_1$, $x_2$
- Superscripts: $x^2$, $m^{-1}$, $s^{-2}$
- Fractions: $\\\\frac{1}{2}$, $\\\\frac{a}{b}$, $\\\\dfrac{dy}{dx}$
- Roots: $\\\\sqrt{3}$, $\\\\sqrt{x^2 + y^2}$
- Greek: $\\\\theta$, $\\\\alpha$, $\\\\lambda$, $\\\\mu$, $\\\\pi$, $\\\\omega$
- Symbols: $\\\\approx$, $\\\\times$, $\\\\div$, $\\\\pm$, $\\\\leq$, $\\\\geq$, $\\\\neq$
- Trig: $\\\\sin\\\\theta$, $\\\\cos 30°$, $\\\\tan^{-1}$
- Units with exponents: $\\\\text{m s}^{-1}$, $\\\\text{kg m}^{-2}$

Chemistry Notation (for science subjects):
- Chemical formulas: use subscripts like $\\\\text{H}_2\\\\text{O}$, $\\\\text{CO}_2$, $\\\\text{CaCO}_3$
- Ions: $\\\\text{Na}^+$, $\\\\text{OH}^-$, $\\\\text{SO}_4^{2-}$
- Reaction arrows: $\\\\rightarrow$ for reactions
- State symbols in text: (s), (l), (g), (aq)

Physics Notation:
- Vectors can use bold: $\\\\mathbf{F}$ or with arrows: $\\\\vec{v}$
- Dot product: $\\\\cdot$
- Standard form: $3.0 \\\\times 10^8$
${diagramInstructions}

Use DOUBLE backslashes for ALL LaTeX commands in JSON (e.g., $\\\\frac{1}{2}$)
Use \\n for line breaks in strings

Return exactly this JSON structure (no markdown code blocks):
${jsonExample}`;
}

/**
 * Get subtopic-specific guidance for practical questions
 */
function getPracticalSubtopicGuidance(subtopic: PracticalSubtopic, practical: Practical, difficulty: Difficulty): {
  focus: string;
  questionTypes: string[];
  markAllocation: string;
} {
  const equipment = practical.equipment || [];
  const safety = practical.safety || [];
  const equipmentList = equipment.slice(0, 5).join(', ') || 'standard laboratory equipment';
  const safetyList = safety.slice(0, 3).join('; ') || 'standard laboratory safety precautions';

  switch (subtopic) {
    case 'Method':
      return {
        focus: `Focus on the experimental procedure for ${practical.name}. Questions should test understanding of why specific steps are taken, the order of operations, and how to ensure valid results.`,
        questionTypes: [
          'Describe the method for this investigation',
          'Explain why a specific step is necessary',
          'Put these steps in the correct order',
          'What would happen if step X was omitted?'
        ],
        markAllocation: difficulty === 'easy' ? '2-3 marks for basic method recall' : difficulty === 'medium' ? '4-5 marks for explained method with reasoning' : '6 marks for detailed method with justifications'
      };

    case 'Variables':
      return {
        focus: `Focus on independent, dependent, and control variables in ${practical.name}. Questions should test identification and understanding of why variables must be controlled.`,
        questionTypes: [
          'Identify the independent/dependent/control variables',
          'Explain why variable X must be controlled',
          'How would you keep variable X constant?',
          'What effect would changing variable X have on results?'
        ],
        markAllocation: difficulty === 'easy' ? '1-2 marks for identification' : difficulty === 'medium' ? '3-4 marks for identification with explanation' : '5-6 marks for full analysis of all variables'
      };

    case 'Equipment':
      return {
        focus: `Focus on equipment selection and use for ${practical.name}. Equipment used: ${equipmentList}. Questions should test understanding of why specific equipment is chosen and how it improves accuracy/precision.`,
        questionTypes: [
          'Why is this equipment suitable for this investigation?',
          'What is the resolution/precision of the measuring instrument?',
          'Suggest more accurate equipment and explain why',
          'How does this equipment reduce errors?'
        ],
        markAllocation: difficulty === 'easy' ? '1-2 marks for equipment identification' : difficulty === 'medium' ? '3-4 marks for equipment choice with reasoning' : '5-6 marks for detailed equipment analysis'
      };

    case 'Results Analysis':
      return {
        focus: `Focus on processing and interpreting results from ${practical.name}. Questions should involve calculations, identifying patterns, and drawing conclusions from data.`,
        questionTypes: [
          'Calculate the mean/gradient/rate from these results',
          'What conclusion can be drawn from these results?',
          'Identify the anomalous result and suggest a cause',
          'How confident can you be in this conclusion?'
        ],
        markAllocation: difficulty === 'easy' ? '2-3 marks for simple calculations' : difficulty === 'medium' ? '4-5 marks for calculations with interpretation' : '6 marks for full analysis with evaluation'
      };

    case 'Graph Skills':
      return {
        focus: `Focus on graphing skills for ${practical.name}. Questions should test ability to plot, draw lines of best fit, interpret gradients, and extract information from graphs.`,
        questionTypes: [
          'Describe how to plot a graph of these results',
          'What does the gradient of the line represent?',
          'Use the graph to determine a value',
          'Why might points not lie exactly on the line?'
        ],
        markAllocation: difficulty === 'easy' ? '2-3 marks for basic graph interpretation' : difficulty === 'medium' ? '4-5 marks for gradient/intercept calculations' : '6 marks for full graphical analysis'
      };

    case 'Errors':
      return {
        focus: `Focus on sources of error and uncertainty in ${practical.name}. Questions should test understanding of systematic vs random errors, percentage uncertainty, and how errors affect results.`,
        questionTypes: [
          'Identify a source of random/systematic error',
          'Calculate the percentage uncertainty',
          'How would this error affect the final result?',
          'Which measurement contributes most to uncertainty?'
        ],
        markAllocation: difficulty === 'easy' ? '1-2 marks for error identification' : difficulty === 'medium' ? '3-4 marks for error analysis' : '5-6 marks for full uncertainty calculation'
      };

    case 'Improvements':
      return {
        focus: `Focus on how to improve the reliability, accuracy, and validity of ${practical.name}. Questions should test ability to suggest and justify improvements.`,
        questionTypes: [
          'Suggest an improvement to increase accuracy',
          'How could you improve the reliability of results?',
          'What additional equipment would improve this investigation?',
          'How would you modify the method to test a different hypothesis?'
        ],
        markAllocation: difficulty === 'easy' ? '2-3 marks for simple improvements' : difficulty === 'medium' ? '4-5 marks for justified improvements' : '6 marks for comprehensive improvement plan'
      };

    case 'Safety':
      return {
        focus: `Focus on safety considerations for ${practical.name}. Key hazards: ${safetyList}. Questions should test identification of hazards and appropriate precautions.`,
        questionTypes: [
          'Identify a hazard in this practical',
          'State a precaution to reduce risk',
          'What safety equipment should be used?',
          'Why is this safety measure necessary?'
        ],
        markAllocation: difficulty === 'easy' ? '1-2 marks for hazard identification' : difficulty === 'medium' ? '3-4 marks for hazard and precaution' : '4-5 marks for risk assessment'
      };

    default:
      return {
        focus: `General practical skills for ${practical.name}.`,
        questionTypes: ['Describe', 'Explain', 'Suggest', 'Calculate'],
        markAllocation: '3-4 marks'
      };
  }
}

/**
 * Build prompt for Required Practical questions
 */
function buildPracticalPrompt(
  practical: Practical,
  subtopic: PracticalSubtopic,
  difficulty: Difficulty
): string {
  const board = practical.examBoard.toUpperCase();
  const level = practical.qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const subject = practical.subject;

  const guidance = getPracticalSubtopicGuidance(subtopic, practical, difficulty);

  // Determine marks based on difficulty using subject-specific ranges
  const subjectType = subject as Subject;
  const levelType = practical.qualification as QualificationLevel;
  const markRange = getSubjectSpecificMarkRange(difficulty, subjectType, levelType);

  const targetMarks = Math.floor(Math.random() * (markRange.max - markRange.min + 1)) + markRange.min;

  // Build equipment and safety context
  const equipment = practical.equipment || [];
  const safety = practical.safety || [];

  const equipmentContext = equipment.length > 0
    ? `\n\nEQUIPMENT AVAILABLE:\n${equipment.map(e => `- ${e}`).join('\n')}`
    : '';

  const safetyContext = safety.length > 0
    ? `\n\nSAFETY CONSIDERATIONS:\n${safety.map(s => `- ${s}`).join('\n')}`
    : '';

  // Determine if diagram might be useful
  const diagramSubtopics: PracticalSubtopic[] = ['Method', 'Equipment', 'Graph Skills', 'Results Analysis'];
  const needsDiagram = diagramSubtopics.includes(subtopic);

  const diagramInstructions = needsDiagram ? `

${DIAGRAM_SCHEMA_DOCS}

IMPORTANT: For practical questions, consider including a "diagram" field showing:
- Equipment setup (for Method/Equipment questions)
- Example graph (for Graph Skills questions)
- Results table (for Results Analysis questions)` : '';

  const jsonExample = needsDiagram
    ? `{"content":"Question text","marks":${targetMarks},"solution":"Model answer with mark points","markScheme":["M1: Point 1","A1: Point 2"],"diagram":{"width":10,"height":8,"elements":[...]}}`
    : `{"content":"Question text","marks":${targetMarks},"solution":"Model answer with mark points","markScheme":["M1: Point 1","A1: Point 2"]}`;

  return `Generate a ${board} ${level} ${subject} REQUIRED PRACTICAL exam question. Return ONLY valid JSON, no markdown.

PRACTICAL: ${practical.name}
DESCRIPTION: ${practical.description}
QUESTION FOCUS: ${subtopic.toUpperCase()}
DIFFICULTY: ${difficulty.toUpperCase()}
MARKS: ${targetMarks}
${equipmentContext}
${safetyContext}

SUBTOPIC GUIDANCE:
${guidance.focus}

SUGGESTED QUESTION TYPES:
${guidance.questionTypes.map(q => `- ${q}`).join('\n')}

MARK ALLOCATION: ${guidance.markAllocation}

Requirements:
- Question MUST focus on the "${subtopic}" aspect of this practical
- Use realistic values and contexts from ${practical.name}
- Reference specific equipment where relevant
- Match ${board} exam style and command words

MARK SCHEME FORMAT:
- **M1, M2**: Method marks for correct approach
- **A1, A2**: Accuracy marks for correct answers
- **B1**: Independent marks for correct statements
- Use "ft" for follow-through, "cao" for correct answer only

LaTeX/Math Formatting:
- Wrap ALL math in $...$ delimiters
- Units: $\\\\text{m s}^{-1}$, $\\\\text{kg}$
- Formulas: $\\\\frac{1}{2}mv^2$, $E = mc^2$
- Use DOUBLE backslashes for LaTeX commands
${diagramInstructions}

Use \\n for line breaks in strings.

Return exactly this JSON structure (no markdown code blocks):
${jsonExample}`;
}

/**
 * Main prompt builder - routes to essay or quantitative prompt
 */
function buildPrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  // Check if this is an essay subject and get its configuration (now board-specific)
  const essayConfig = getQuestionConfig(subject, level, difficulty, board);

  if (essayConfig) {
    return buildEssayPrompt(essayConfig, subject, level, board, topicName, subtopic, difficulty);
  }

  return buildQuantitativePrompt(subject, level, board, topicName, subtopic, difficulty);
}

export async function POST(request: NextRequest) {
  try {
    // Get user from server-side session (cookies) for accurate usage tracking
    const { createClient } = await import('@/lib/supabase/server');
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id || null;

    const body = await request.json();
    const {
      topicId,
      practicalId,
      isPractical,
      difficulty,
      subtopic,
      skipCache,
      examBoard = 'aqa',
      qualification = 'gcse',
      subject = 'maths',
      excludeContent,
      stream = true,
    } = body as {
      topicId?: string;
      practicalId?: string;
      isPractical?: boolean;
      difficulty: Difficulty;
      subtopic?: string;
      skipCache?: boolean;
      examBoard?: ExamBoard;
      qualification?: QualificationLevel;
      subject?: Subject;
      excludeContent?: string | string[];
      stream?: boolean;
    };

    // Rate limiting
    const clientIP = getClientIP(request);
    const rateLimitConfig = userId
      ? RATE_LIMITS.QUESTION_GENERATION_AUTH
      : RATE_LIMITS.QUESTION_GENERATION_ANON;

    const rateLimitResult = await checkRateLimit(rateLimitConfig, userId || undefined, clientIP);

    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded. Please try again later.',
          resetAt: rateLimitResult.resetAt.toISOString(),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...getRateLimitHeaders(rateLimitResult),
          },
        }
      );
    }

    // Check subscription-based usage limits
    const usageCheck = await checkQuestionGenerationAllowed(userId || null, clientIP);
    if (!usageCheck.allowed) {
      return new Response(
        JSON.stringify({
          error: usageCheck.error || 'Daily question limit reached',
          tier: usageCheck.tier,
          remaining: usageCheck.remaining,
          upgrade: true,
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if user can control difficulty (paid feature)
    // Free users get random difficulty
    let effectiveDifficulty: Difficulty = difficulty;
    const canControl = await canControlDifficulty(userId || null);
    if (!canControl) {
      // Random difficulty for free users
      const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];
      effectiveDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    }

    if ((!topicId && !practicalId) || !difficulty) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: need either topicId or practicalId, and difficulty' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Determine topic or practical based on request
    let topic: any = null;
    let practical: any = null;

    if (practicalId || isPractical) {
      // Handle practical request
      practical = getPracticalById(practicalId || topicId!);
      if (!practical) {
        return new Response(
          JSON.stringify({ error: 'Invalid practical ID' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    } else {
      // Handle regular topic request
      topic = getTopicByIdSubjectBoardAndLevel(topicId!, subject, examBoard, qualification) || getTopicById(topicId!);
      if (!topic) {
        return new Response(
          JSON.stringify({ error: 'Invalid topic ID' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Determine if this is a practical question
    const isPracticalQuestion = !!practical;

    // Get effective subtopic - for practicals, use provided subtopic or first practical subtopic
    const effectiveSubtopic = isPracticalQuestion
      ? (subtopic || practical!.subtopics[0])
      : (subtopic || topic!.subtopics[0]);

    const cacheKey = isPracticalQuestion
      ? `practical:${practical!.subject}:${practical!.qualification}:${practicalId || topicId}`
      : `${subject}:${qualification}:${topicId}`;

    // QUESTION BANK: Try to find an existing question the user hasn't seen
    // This dramatically reduces API costs by reusing questions across users
    if (!skipCache && !isPracticalQuestion && topicId) {
      const bankQuestion = await findExistingQuestion(
        {
          subject,
          examBoard,
          qualification,
          topicId,
          subtopic: effectiveSubtopic,
          difficulty: effectiveDifficulty,
        },
        userId || null
      );

      if (bankQuestion) {
        // Track usage for subscription limits
        incrementQuestionUsage(userId || null, clientIP).catch(console.error);
        // Record that this user has seen this question
        recordQuestionServed(bankQuestion.id, userId || null, 'practice').catch(console.error);

        if (stream) {
          // Stream the question for consistent typing animation UX
          const encoder = new TextEncoder();
          const question = {
            id: crypto.randomUUID(),
            topicId,
            difficulty: effectiveDifficulty,
            content: bankQuestion.content,
            solution: bankQuestion.solution,
            marks: bankQuestion.marks,
            markScheme: bankQuestion.mark_scheme,
            ...(bankQuestion.diagram && { diagram: bankQuestion.diagram }),
          };

          const readable = new ReadableStream({
            async start(controller) {
              const content = bankQuestion.content;
              const chunkSize = 4;
              const baseDelayMs = 8;
              const getDelay = () => baseDelayMs + Math.floor(Math.random() * 4);

              for (let i = 0; i < content.length; i += chunkSize) {
                const chunk = content.slice(i, i + chunkSize);
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
                await new Promise(resolve => setTimeout(resolve, getDelay()));
              }

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, question })}\n\n`));
              controller.close();
            },
          });

          return new Response(readable, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
              'X-Source': 'question-bank',
            },
          });
        } else {
          // Non-streaming response
          return new Response(JSON.stringify({
            id: crypto.randomUUID(),
            topicId,
            difficulty: effectiveDifficulty,
            content: bankQuestion.content,
            solution: bankQuestion.solution,
            marks: bankQuestion.marks,
            markScheme: bankQuestion.mark_scheme,
            ...(bankQuestion.diagram && { diagram: bankQuestion.diagram }),
          }), {
            headers: {
              'Content-Type': 'application/json',
              'X-Source': 'question-bank',
            },
          });
        }
      }
    }

    // Try in-memory cache as secondary option
    // Only use cache if we have enough questions to avoid cycling
    const cacheCount = !skipCache ? await getCacheCount(cacheKey, effectiveSubtopic, effectiveDifficulty) : 0;
    const shouldTryCache = !skipCache && cacheCount >= 3; // Need at least 3 questions to avoid obvious cycling

    if (shouldTryCache && stream) {
      const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, effectiveDifficulty, excludeContent);
      if (cached) {
        // Track usage for subscription limits (cache hit still counts)
        incrementQuestionUsage(userId || null, clientIP).catch(console.error);

        // Stream cached question for consistent typing animation UX
        const encoder = new TextEncoder();
        const question = {
          id: crypto.randomUUID(),
          topicId,
          difficulty: effectiveDifficulty,
          content: cached.content,
          solution: cached.solution,
          marks: cached.marks,
          markScheme: cached.markScheme,
        };

        // Simulate streaming by sending content in chunks with fast but smooth typing speed
        const readable = new ReadableStream({
          async start(controller) {
            const content = cached.content;
            const chunkSize = 4; // Larger chunks for faster display
            const baseDelayMs = 8; // Fast base delay between chunks
            // Add minimal randomness to keep it smooth
            const getDelay = () => baseDelayMs + Math.floor(Math.random() * 4);

            // Stream the content in chunks
            for (let i = 0; i < content.length; i += chunkSize) {
              const chunk = content.slice(i, i + chunkSize);
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
              await new Promise(resolve => setTimeout(resolve, getDelay()));
            }

            // Send the complete question
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, question })}\n\n`));
            controller.close();
          },
        });

        return new Response(readable, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'X-Cache': 'HIT',
          },
        });
      }
    } else if (shouldTryCache && !stream) {
      // Non-streaming cached response (for backwards compatibility)
      const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, effectiveDifficulty, excludeContent);
      if (cached) {
        // Track usage for subscription limits (cache hit still counts)
        await incrementQuestionUsage(userId || null, clientIP);

        const question = {
          id: crypto.randomUUID(),
          topicId,
          difficulty: effectiveDifficulty,
          content: cached.content,
          solution: cached.solution,
          marks: cached.marks,
          markScheme: cached.markScheme,
        };
        return new Response(JSON.stringify(question), {
          headers: {
            'Content-Type': 'application/json',
            'X-Cache': 'HIT',
          },
        });
      }
    }

    // Generate question with OpenAI
    // Use practical-specific prompt for practicals, standard prompt for topics
    const basePrompt = isPracticalQuestion
      ? buildPracticalPrompt(practical!, effectiveSubtopic as PracticalSubtopic, effectiveDifficulty)
      : buildPrompt(subject, qualification, examBoard, topic!.name, effectiveSubtopic, effectiveDifficulty);

    // Add global constraints (copyright, accuracy, safety) to the prompt
    const effectiveSubject = isPracticalQuestion ? practical!.subject : subject;
    const subjectConstraints = getAllConstraints(effectiveSubject);
    const prompt = `${subjectConstraints}\n\n${basePrompt}`;

    // Use exam board-specific system prompt with enhanced constraints
    const effectiveBoard = isPracticalQuestion ? practical!.examBoard : examBoard;
    const effectiveLevel = isPracticalQuestion ? practical!.qualification : qualification;
    const systemPrompt = getEnhancedSystemPrompt(effectiveSubject, effectiveBoard, effectiveLevel);

    // Use OpenAI with streaming for quality + fast perceived response
    const openai = getOpenAIClient();
    const fineTunedModel = getFineTunedModel(effectiveSubject, effectiveLevel, effectiveBoard);
    const modelToUse = fineTunedModel || 'gpt-4o-mini';

    if (stream) {
      // Stream OpenAI response for better UX
      const maxTokens = getMaxTokens(effectiveSubject, effectiveDifficulty);
      const completion = await openai.chat.completions.create({
        model: modelToUse,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5,
        max_tokens: maxTokens,
        response_format: { type: 'json_object' },
        stream: true,
      });

      const encoder = new TextEncoder();
      let fullJson = '';
      let extractedContent = '';
      let inContentField = false;
      let contentComplete = false;
      let pendingContent = '';
      let lastFlushTime = Date.now();
      const FLUSH_INTERVAL = 15; // Flush every 15ms for fast display
      const MIN_CHARS = 5; // Or when we have at least 5 chars

      // Helper to flush pending content
      const flushContent = (controller: ReadableStreamDefaultController) => {
        if (pendingContent.length > 0) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: pendingContent })}\n\n`));
          pendingContent = '';
          lastFlushTime = Date.now();
        }
      };

      // Helper to extract content from JSON being built
      const extractContentFromJson = (): string => {
        const contentStart = fullJson.indexOf('"content"');
        if (contentStart === -1) return '';

        const colonPos = fullJson.indexOf(':', contentStart);
        if (colonPos === -1) return '';

        const quotePos = fullJson.indexOf('"', colonPos + 1);
        if (quotePos === -1) return '';

        const afterQuote = fullJson.slice(quotePos + 1);
        let content = '';
        let i = 0;

        while (i < afterQuote.length) {
          if (afterQuote[i] === '\\' && i + 1 < afterQuote.length) {
            content += afterQuote[i] + afterQuote[i + 1];
            i += 2;
          } else if (afterQuote[i] === '"') {
            contentComplete = true;
            break;
          } else {
            content += afterQuote[i];
            i++;
          }
        }

        return content;
      };

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of completion) {
              const chunkText = chunk.choices[0]?.delta?.content || '';
              if (chunkText) {
                fullJson += chunkText;

                // Extract content field incrementally for live typing
                if (!contentComplete) {
                  // Check if we've entered the content field
                  if (!inContentField && fullJson.includes('"content"')) {
                    inContentField = true;
                  }

                  if (inContentField) {
                    const content = extractContentFromJson();
                    if (content.length > extractedContent.length) {
                      const newContent = content.slice(extractedContent.length);
                      extractedContent = content;
                      pendingContent += newContent;

                      // Flush if enough time has passed or we have enough characters
                      const now = Date.now();
                      if (now - lastFlushTime >= FLUSH_INTERVAL || pendingContent.length >= MIN_CHARS) {
                        flushContent(controller);
                      }
                    }
                  }
                }
              }
            }

            // Flush any remaining content
            flushContent(controller);

            // Parse and send final question
            try {
              const parsed = JSON.parse(fullJson);

              // Validate the AI output
              const validationContext: ValidationContext = {
                subject: effectiveSubject,
                examBoard: effectiveBoard,
                qualification: effectiveLevel,
                difficulty: effectiveDifficulty,
              };
              const validation = validateQuestionOutput(parsed, validationContext);
              if (!validation.valid) {
                console.warn(
                  `[Question Validation] Errors for ${effectiveSubject}/${effectiveLevel}/${effectiveDifficulty}:`,
                  validation.errors
                );
              }
              if (validation.warnings.length > 0) {
                console.info(
                  `[Question Validation] Warnings for ${effectiveSubject}/${effectiveLevel}/${effectiveDifficulty}:`,
                  validation.warnings.map((w) => `${w.code}: ${w.message}`)
                );
              }

              const question: {
                id: string;
                topicId: string;
                difficulty: Difficulty;
                content: string;
                solution: string;
                marks: number;
                markScheme: string[];
                diagram?: DiagramSpec;
              } = {
                id: crypto.randomUUID(),
                topicId: topicId || practicalId || 'unknown',
                difficulty: effectiveDifficulty,
                content: parsed.content || '',
                solution: parsed.solution || '',
                marks: parsed.marks || 3,
                markScheme: parsed.markScheme || [],
              };

              // Include diagram if present
              if (parsed.diagram) {
                question.diagram = parsed.diagram;
              }

              // Cache it (including diagram if present)
              cacheQuestion(cacheKey, effectiveSubtopic, effectiveDifficulty, {
                content: question.content,
                solution: question.solution,
                marks: question.marks,
                markScheme: question.markScheme,
                ...(question.diagram && { diagram: question.diagram }),
              }).catch(console.error);

              // QUESTION BANK: Store for reuse by other users
              if (!isPracticalQuestion) {
                storeQuestion(
                  {
                    subject: effectiveSubject,
                    examBoard: effectiveBoard,
                    qualification: effectiveLevel,
                    topicId: topicId || practicalId || 'unknown',
                    subtopic: effectiveSubtopic,
                    difficulty: effectiveDifficulty,
                  },
                  question.content,
                  question.solution,
                  question.markScheme,
                  question.marks,
                  question.diagram as Record<string, unknown> | undefined
                ).then(bankId => {
                  // Record that this user has seen this question
                  if (bankId && userId) {
                    recordQuestionServed(bankId, userId, 'practice').catch(console.error);
                  }
                }).catch(console.error);
              }

              // Track usage for subscription limits
              incrementQuestionUsage(userId || null, clientIP).catch(console.error);

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, question })}\n\n`));
            } catch {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Failed to parse response' })}\n\n`));
            }
            controller.close();
          } catch (error) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Generation failed' })}\n\n`));
            controller.close();
          }
        },
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'X-Provider': fineTunedModel ? 'openai-finetuned' : 'openai',
        },
      });
    }

    // Non-streaming fallback
    const maxTokens = getMaxTokens(effectiveSubject, difficulty);
    const completion = await openai.chat.completions.create({
      model: modelToUse,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
      max_tokens: maxTokens,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error('No response from OpenAI');

    const parsed = JSON.parse(content);

    // Validate the AI output (non-streaming path)
    const validationContext: ValidationContext = {
      subject: effectiveSubject,
      examBoard: effectiveBoard,
      qualification: effectiveLevel,
      difficulty: effectiveDifficulty,
    };
    const validation = validateQuestionOutput(parsed, validationContext);
    if (!validation.valid) {
      console.warn(
        `[Question Validation] Errors for ${effectiveSubject}/${effectiveLevel}/${effectiveDifficulty}:`,
        validation.errors
      );
    }
    if (validation.warnings.length > 0) {
      console.info(
        `[Question Validation] Warnings for ${effectiveSubject}/${effectiveLevel}/${effectiveDifficulty}:`,
        validation.warnings.map((w) => `${w.code}: ${w.message}`)
      );
    }

    const question: {
      id: string;
      topicId: string;
      difficulty: Difficulty;
      content: string;
      solution: string;
      marks: number;
      markScheme: string[];
      diagram?: DiagramSpec;
    } = {
      id: crypto.randomUUID(),
      topicId: topicId || practicalId || 'unknown',
      difficulty: effectiveDifficulty,
      content: parsed.content || '',
      solution: parsed.solution || '',
      marks: parsed.marks || 3,
      markScheme: parsed.markScheme || [],
    };

    // Include diagram if present
    if (parsed.diagram) {
      question.diagram = parsed.diagram;
    }

    // Cache it (including diagram if present)
    cacheQuestion(cacheKey, effectiveSubtopic, effectiveDifficulty, {
      content: question.content,
      solution: question.solution,
      marks: question.marks,
      markScheme: question.markScheme,
      ...(question.diagram && { diagram: question.diagram }),
    }).catch(console.error);

    // QUESTION BANK: Store for reuse by other users
    if (!isPracticalQuestion) {
      const bankId = await storeQuestion(
        {
          subject: effectiveSubject,
          examBoard: effectiveBoard,
          qualification: effectiveLevel,
          topicId: topicId || practicalId || 'unknown',
          subtopic: effectiveSubtopic,
          difficulty: effectiveDifficulty,
        },
        question.content,
        question.solution,
        question.markScheme,
        question.marks,
        question.diagram as Record<string, unknown> | undefined
      );
      if (bankId && userId) {
        await recordQuestionServed(bankId, userId, 'practice');
      }
    }

    // Track usage for subscription limits
    await incrementQuestionUsage(userId || null, clientIP);

    return new Response(JSON.stringify(question), {
      headers: {
        'Content-Type': 'application/json',
        'X-Cache': 'MISS',
        'X-Provider': fineTunedModel ? 'openai-finetuned' : 'openai',
      },
    });
  } catch (error) {
    console.error('Error generating question:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate question' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
