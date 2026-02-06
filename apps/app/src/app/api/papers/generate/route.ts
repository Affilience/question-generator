import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import {
  PaperConfig,
  ExamBoard,
  QualificationLevel,
  Subject,
  GeneratedPaper,
  GeneratedSection,
  GeneratedQuestion,
  QuestionType,
  Difficulty,
} from '@/types';
import { checkPaperGenerationAllowed } from '@/lib/api/subscription-check';
import { DiagramSpec } from '@/types/diagram';
import { selectQuestionsForPaper, QuestionPlan } from '@/lib/questionSelector';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse, DIAGRAM_SCHEMA_DOCS, SUBJECT_DIAGRAM_GUIDANCE } from '@/lib/prompts-common';
import { getTopicByIdSubjectBoardAndLevel, getTopicById, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';
import {
  getQuestionConfig,
  isEssaySubject,
  isScienceSubject,
  isMathsSubject,
  getRandomQuestionFormat,
  getRandomScienceQuestionType,
  getRandomMathsQuestionType,
  EssayQuestionConfig,
  QuestionFormat,
} from '@/lib/essay-subject-config';
// Import extract databases for essay subjects
import { getRandomExtractForTheme } from '@/lib/extracts/english-literature-extracts';
import { getRandomSourceForTheme } from '@/lib/extracts/history-sources';


// Use Edge runtime for 30s streaming timeout (vs 10s serverless on Hobby plan)
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

interface PaperGenerationRequest {
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: PaperConfig;
  userId?: string;
}

// Check for fine-tuned model
function getFineTunedModel(subject: Subject, level: QualificationLevel, board: ExamBoard): string | null {
  const envKey = `FINE_TUNED_MODEL_${subject.toUpperCase()}_${level.toUpperCase().replace('-', '')}_${board.toUpperCase()}`;
  return process.env[envKey] || null;
}

// Get max tokens based on subject type and question marks
function getMaxTokens(subject: Subject, marks: number): number {
  if (isEssaySubject(subject)) {
    if (marks <= 4) return 1500;
    if (marks <= 8) return 2500;
    if (marks <= 12) return 4000;
    return 6000; // 16-25 mark essays need full level descriptors and indicative content
  }
  // Quantitative subjects
  if (marks <= 4) return 1500;
  if (marks <= 8) return 2000;
  return 3000;
}

/**
 * Get subject-specific data/stimulus guidance
 */
function getSubjectDataGuidance(
  subject: Subject,
  totalMarks: number,
  topicName: string,
  subtopic: string
): { questionGuidance: string; solutionGuidance: string } {
  switch (subject) {
    case 'english-literature': {
      const realExtract = getRandomExtractForTheme(topicName, subtopic);
      if (realExtract) {
        return {
          questionGuidance: `
USE THIS EXACT EXTRACT from "${realExtract.text}" by ${realExtract.author}:

---
**Read the following extract from ${realExtract.location}:**

${realExtract.contextNote ? `[Context: ${realExtract.contextNote}]` : ''}

${realExtract.extract}
---

Include this EXACT extract in your question. Ask about: ${subtopic}
Themes present: ${realExtract.themes.join(', ')}
Techniques: ${realExtract.techniques.join(', ')}`,
          solutionGuidance: `Quote directly from extract. Analyse techniques: ${realExtract.techniques.slice(0, 2).join(', ')}. Link to themes: ${realExtract.themes.slice(0, 2).join(', ')}.`,
        };
      }
      return {
        questionGuidance: `Create an extract-based question about ${topicName} - ${subtopic}. Include a 150-300 word passage.`,
        solutionGuidance: 'Quote from extract. Analyse language and techniques. Link to themes.',
      };
    }

    case 'history': {
      const realSource = getRandomSourceForTheme(topicName, subtopic);
      if (realSource) {
        return {
          questionGuidance: `
USE THIS EXACT SOURCE:

---
**Source A: ${realSource.title}**

${realSource.content}

*${realSource.attribution}*
---

Include this EXACT source. Source type: ${realSource.sourceType}. Period: ${realSource.period}.
${realSource.bias ? `Potential bias: ${realSource.bias}` : ''}`,
          solutionGuidance: `Reference Source A specifically. Consider provenance: ${realSource.provenance}. ${realSource.bias ? `Evaluate bias: ${realSource.bias}` : ''} Use contextual knowledge.`,
        };
      }
      return {
        questionGuidance: `Create a source-based question about ${topicName} - ${subtopic}. Include a period-appropriate historical source with attribution.`,
        solutionGuidance: 'Reference the source. Evaluate reliability/usefulness. Use contextual knowledge.',
      };
    }

    case 'economics':
    case 'business':
      return {
        questionGuidance: `
INCLUDE DATA relevant to ${subtopic}:
"Figure 1: [Title about ${subtopic}]

| Year/Category | Value |
|---------------|-------|
| [realistic data showing ${subtopic}] |"

Then ask analysis question about the data.`,
        solutionGuidance: `Reference specific figures. Identify trends related to ${subtopic}. Apply economic/business concepts.`,
      };

    case 'psychology':
      return {
        questionGuidance: `
INCLUDE RESEARCH STUDY about ${subtopic}:
"A psychologist conducted a study investigating ${subtopic}...
[describe method, sample, procedure]

Results:
| Condition A | Condition B |
|-------------|-------------|
| Mean: X     | Mean: Y     |"`,
        solutionGuidance: `Reference study data. Apply ${subtopic} theories. Evaluate methodology.`,
      };

    case 'geography':
      return {
        questionGuidance: `
INCLUDE GEOGRAPHICAL RESOURCE about ${subtopic}:
"Figure 1: [Map/Graph/Data relevant to ${subtopic}]
[Include data, statistics, or geographical patterns]"`,
        solutionGuidance: `Reference Figure 1. Apply ${subtopic} concepts. Use case study knowledge.`,
      };

    case 'computer-science':
      return {
        questionGuidance: `
INCLUDE CODE/ALGORITHM demonstrating ${subtopic}:
"\`\`\`
[5-15 lines of pseudocode/Python showing ${subtopic}]
\`\`\`"
OR include a trace table showing variable states.`,
        solutionGuidance: `Trace through code. Explain how it demonstrates ${subtopic}. Reference specific lines.`,
      };

    default:
      return {
        questionGuidance: `Include relevant data or stimulus material for ${subtopic}.`,
        solutionGuidance: `Reference the stimulus. Apply ${subtopic} concepts.`,
      };
  }
}

/**
 * Build essay question prompt with full mark scheme support
 */
function buildEssayQuestionPrompt(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  topicName: string
): string {
  const config = getQuestionConfig(subject, qualification, plan.difficulty, examBoard);
  if (!config) {
    return buildQuantitativeQuestionPrompt(plan, subject, examBoard, qualification, topicName);
  }

  const levelDisplay = qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = examBoard.toUpperCase();
  const selectedFormat = getRandomQuestionFormat(config);

  // Get format-specific guidance
  let formatGuidance = '';
  let commandWords: string[] = [];

  switch (selectedFormat) {
    case 'data_response':
      const dataGuidance = getSubjectDataGuidance(subject, plan.marks, topicName, plan.subtopic);
      formatGuidance = `${dataGuidance.questionGuidance}\n\nIMPORTANT: If using data/table references, MUST provide actual data table or clear description of data trends in the question text.`;
      commandWords = ['Calculate', 'Analyse', 'Compare', 'Determine from the data'];
      break;
    case 'explain':
      formatGuidance = `QUESTION TYPE: EXPLAIN (${plan.marks} marks)\nRequires developed explanation with reasoning chains.`;
      commandWords = ['Explain', 'Explain why', 'Explain how'];
      break;
    case 'analyse':
      formatGuidance = `QUESTION TYPE: ANALYSE (${plan.marks} marks)\nRequires detailed analysis considering multiple factors.`;
      commandWords = ['Analyse', 'Examine', 'Assess'];
      break;
    case 'short_essay':
      formatGuidance = `QUESTION TYPE: SHORT ESSAY (${plan.marks} marks)\nExtended response with structured paragraphs.`;
      commandWords = ['Discuss', 'Explain in detail'];
      break;
    case 'extended_essay':
      formatGuidance = `QUESTION TYPE: EXTENDED ESSAY (${plan.marks} marks)\nFull essay with balanced argument and evaluation.`;
      commandWords = ['Evaluate', 'To what extent', 'Discuss', 'How far do you agree'];
      break;
    default:
      formatGuidance = `QUESTION TYPE: ${selectedFormat.toUpperCase()} (${plan.marks} marks)`;
      commandWords = ['State', 'Identify', 'Define'];
  }

  const commandWord = commandWords[Math.floor(Math.random() * commandWords.length)];

  // Build mark scheme guidance
  let markSchemeGuidance = '';
  if (plan.marks >= 8 && config.levelDescriptors.length > 0) {
    const aoBreakdown = config.assessmentObjectives
      .map(ao => `${ao.code}=${ao.marks}`)
      .join(', ');
    const levelDesc = config.levelDescriptors
      .sort((a, b) => b.level - a.level)
      .map(ld => `Level ${ld.level} (${ld.minMarks}-${ld.maxMarks} marks): ${ld.characteristics.slice(0, 2).join('; ')}`)
      .join('\n');

    markSchemeGuidance = `
MARK SCHEME (LEVEL-BASED):
AO Breakdown: ${aoBreakdown}

${levelDesc}

markScheme array format:
["AO Breakdown: ${aoBreakdown}",
 "Level 4 (13-16 marks): [descriptor]",
 "Level 3 (9-12 marks): [descriptor]",
 "Level 2 (5-8 marks): [descriptor]",
 "Level 1 (1-4 marks): [descriptor]",
 "Indicative content: [list 6-8 specific points for ${plan.subtopic}]"]`;
  } else {
    markSchemeGuidance = `
MARK SCHEME:
- Total marks: ${plan.marks}
- List specific points that earn marks
- Include indicative content for ${plan.subtopic}`;
  }

  // Check if diagram needed - always include for maths/science subjects
  const needsDiagram = selectedFormat === 'data_response' || selectedFormat === 'diagram' || isMathsSubject(subject) || isScienceSubject(subject);
  const subjectKey = subject.replace('-', '').toLowerCase();
  const subjectDiagramGuidance = SUBJECT_DIAGRAM_GUIDANCE[subjectKey] || '';
  const diagramInstructions = needsDiagram ? `\n\n${DIAGRAM_SCHEMA_DOCS}\n\n${subjectDiagramGuidance}\n\nInclude "diagram" field if visual aids would help.` : '';

  return `Generate a ${boardUpper} ${levelDisplay} ${subject.replace('-', ' ')} exam question. Return ONLY valid JSON.

TOPIC: ${topicName} - ${plan.subtopic}
MARKS: ${plan.marks}
DIFFICULTY: ${plan.difficulty.toUpperCase()}

${formatGuidance}

Command word: "${commandWord}"
${subject === 'economics' ? `
CRITICAL CONSTRAINT FOR ECONOMICS: 
- The question MUST be specifically about "${plan.subtopic}" 
- Do NOT generalize to broader economic concepts unless directly relevant
- Do NOT mention "economics as a social science" unless that is the exact subtopic
- Focus exclusively on the specified subtopic: "${plan.subtopic}"
- If subtopic is "Demand curves", ask about demand curves specifically, NOT general economic principles

CRITICAL: AVOID REPETITION ACROSS THE ENTIRE PRACTICE PAPER:
- You MUST NOT create questions about the same economic principle twice in this paper
- You MUST NOT ask the exact same question with different wording
- Each question must test a DIFFERENT aspect or application of the topic
- If generating multiple questions about "Monetary Policy", vary between: interest rates, quantitative easing, money supply, Bank of England operations, transmission mechanisms
- ALWAYS choose the LEAST commonly tested aspect of each subtopic for maximum diversity
- Avoid repetitive question stems like "Explain how..." for every question` : ''}
${markSchemeGuidance}

LaTeX Math Formatting:
- Variables: $x$, $f(x)$, $y$ (NO \\text{} around variables!)
- Functions: $f(x)$, $g(x)$, $\\sin x$ (NO \\text{} around function names!)  
- CRITICAL: NEVER use \\text{} for mathematical variables or functions!
${diagramInstructions}

Return JSON:
{
  "content": "Question using '${commandWord}'",
  "marks": ${plan.marks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", ...]${needsDiagram ? ',\n  "diagram": {...}' : ''}
}`;
}

/**
 * Build quantitative question prompt with proper mark scheme notation
 */
function buildQuantitativeQuestionPrompt(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  topicName: string
): string {
  const levelDisplay = qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = examBoard.toUpperCase();

  // Select format based on subject and question type
  let selectedFormat: QuestionFormat;
  if (plan.questionType === 'calculation') {
    selectedFormat = 'calculation';
  } else if (plan.questionType === 'explain') {
    selectedFormat = 'explain';
  } else if (plan.questionType === 'data-analysis' || plan.questionType === 'graph') {
    selectedFormat = 'data_response';
  } else if (plan.questionType === 'extended') {
    selectedFormat = 'short_essay';
  } else if (isScienceSubject(subject)) {
    selectedFormat = getRandomScienceQuestionType();
  } else if (isMathsSubject(subject)) {
    selectedFormat = getRandomMathsQuestionType();
  } else {
    selectedFormat = 'calculation';
  }

  // Get format-specific requirements
  let typeDescription = '';
  let requirements = '';
  let commandWords: string[] = [];

  switch (selectedFormat) {
    case 'calculation':
      typeDescription = 'CALCULATION/PROBLEM-SOLVING';
      requirements = 'Numerical calculation with realistic values and units. Show working for method marks.';
      commandWords = ['Calculate', 'Work out', 'Find', 'Determine'];
      break;
    case 'explain':
      typeDescription = 'EXPLAIN/DESCRIBE';
      requirements = 'Explanation using terminology. Chain of reasoning (because → therefore).';
      commandWords = ['Explain', 'Describe', 'Why does', 'Suggest why'];
      break;
    case 'data_response':
      typeDescription = 'DATA/GRAPH ANALYSIS';
      requirements = 'Include data table or graph description. Requires interpretation and pattern identification.';
      commandWords = ['Using the data', 'Describe the trend', 'Analyse'];
      break;
    case 'short_essay':
      typeDescription = 'EXTENDED RESPONSE (6 marks)';
      requirements = `6-mark extended response uses LEVEL-BASED marking:
- Level 3 (5-6 marks): Detailed, coherent explanation with correct terminology
- Level 2 (3-4 marks): Links some points with some terminology
- Level 1 (1-2 marks): Simple statements with limited terminology`;
      commandWords = ['Explain in detail', 'Describe and explain', 'Discuss'];
      break;
    default:
      typeDescription = 'GRAPH/DIAGRAM';
      requirements = 'MUST provide clear description of any diagram referenced. For sketching questions, specify diagram type and key features to include.';
      commandWords = ['Sketch', 'Draw', 'Complete the diagram'];
  }

  const commandWord = commandWords[Math.floor(Math.random() * commandWords.length)];
  const difficultyDesc = plan.difficulty === 'easy' ? 'grades 1-3' : plan.difficulty === 'medium' ? 'grades 4-5' : 'grades 6-9';

  // Always include diagram instructions for quantitative subjects (maths, physics, chemistry, biology)
  const needsDiagram = true; // Quantitative subjects often need diagrams (geometry, graphs, forces, circuits, molecules, etc.)
  const subjectKey = subject.replace('-', '').toLowerCase();
  const subjectDiagramGuidance = SUBJECT_DIAGRAM_GUIDANCE[subjectKey] || '';
  const diagramInstructions = `\n\n${DIAGRAM_SCHEMA_DOCS}\n\n${subjectDiagramGuidance}\n\nInclude "diagram" field if the question involves visual content.`;

  // Mark scheme format
  const markSchemeFormat = selectedFormat === 'short_essay' && plan.marks >= 6
    ? `markScheme array for 6-mark questions:
["Level 3 (5-6 marks): Detailed coherent explanation with terminology",
 "Level 2 (3-4 marks): Links some points",
 "Level 1 (1-2 marks): Simple statements",
 "Indicative content: [list points for ${plan.subtopic}]"]`
    : `MARK SCHEME NOTATION:
- M1, M2: Method marks (awarded even with arithmetic errors)
- A1, A2: Accuracy marks (depend on preceding M marks)
- B1: Independent marks for correct statements
- ft: Follow-through, cao: Correct answer only

Example for ${plan.marks}-mark: ["M1: Correct formula/setup", "A1 ft: Substitution", "A1: cao Final answer"]`;

  return `Generate a ${boardUpper} ${levelDisplay} ${subject} exam question. Return ONLY valid JSON.

Topic: ${topicName} - ${plan.subtopic}
Difficulty: ${difficultyDesc}
Marks: ${plan.marks}
QUESTION TYPE: ${typeDescription}

Command word: "${commandWord}"
${requirements}

${markSchemeFormat}

LaTeX Math Formatting:
- Wrap ALL math in $...$ delimiters
- Variables: $x$, $f(x)$, $y$, $F_{net}$, $v^2$ (NO \\text{} around variables!)
- Functions: $f(x)$, $g(x)$, $\\sin x$, $\\cos x$ (NO \\text{} around function names!)
- Fractions: $\\\\frac{a}{b}$, $\\\\frac{dy}{dx}$
- Greek: $\\\\theta$, $\\\\alpha$, $\\\\lambda$
- Chemistry: $\\text{H}_2\\text{O}$, $\\text{Na}^+$ (\\text{} only for chemical formulas)
- Units: $5\\,\\text{m s}^{-1}$, $9.8\\,\\text{kg}$ (\\text{} only for units)
- CRITICAL: NEVER use \\text{} for mathematical variables or functions!
${diagramInstructions}

Return JSON:
{"content":"Question using '${commandWord}'","marks":${plan.marks},"solution":"**Step 1:** [action] (M1)\\n**Answer:** [final]","markScheme":["M1: ...", "A1: ..."]${needsDiagram ? ',"diagram":{...}' : ''}}`;
}

/**
 * Generate a single question with enhanced prompts and content exclusion
 */
async function generateSingleQuestionWithExclusion(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  openai: ReturnType<typeof getOpenAIClient>,
  excludeContent: string[] = []
): Promise<GeneratedQuestion> {
  return generateSingleQuestionInternal(plan, subject, examBoard, qualification, openai, excludeContent);
}

/**
 * Generate a single question with enhanced prompts (legacy version without exclusion)
 */
async function generateSingleQuestion(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  openai: ReturnType<typeof getOpenAIClient>
): Promise<GeneratedQuestion> {
  return generateSingleQuestionInternal(plan, subject, examBoard, qualification, openai, []);
}

/**
 * Get the appropriate prompt for a subject using specialized subject prompts
 */
function getSubjectSpecificPrompt(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  topicName: string
): string {
  console.log(`🔍 TOPIC LOOKUP: Searching for topicId="${plan.topicId}" subject="${subject}" examBoard="${examBoard}" qualification="${qualification}"`);
  
  const topic = getTopicByIdSubjectBoardAndLevel(plan.topicId, subject, examBoard, qualification) ||
                getTopicById(plan.topicId);
  
  if (!topic) {
    // Debug: Let's see what topics are actually available
    const availableTopics = getTopicsBySubjectBoardAndLevel(subject, examBoard, qualification);
    const availableTopicIds = availableTopics.map(t => t.id);
    
    console.warn(`⚠️ TOPIC LOOKUP FAILED: topicId="${plan.topicId}" subject="${subject}" examBoard="${examBoard}" qualification="${qualification}"`);
    console.warn(`Available topic IDs: [${availableTopicIds.join(', ')}]`);
    console.warn(`Subtopic: "${plan.subtopic}"`);
    console.warn(`Using generic prompts instead of specialized prompts.`);
    
    return isEssaySubject(subject)
      ? buildEssayQuestionPrompt(plan, subject, examBoard, qualification, topicName)
      : buildQuantitativeQuestionPrompt(plan, subject, examBoard, qualification, topicName);
  }

  console.log(`✅ TOPIC FOUND: "${topic.name}" (${topic.subtopics.length} subtopics)`);
  console.log(`📚 Using specialized ${subject} prompts for subtopic: "${plan.subtopic}"`);
  
  if (subject === 'economics') {
    console.log(`🧮 Economics subject detected - isEssaySubject: ${isEssaySubject(subject)}`);
    console.log(`📋 Available subtopics: ${topic.subtopics.slice(0, 5).join(', ')}...`);
    console.log(`🎯 Selected subtopic: "${plan.subtopic}"`);
    console.log(`⚡ Will use SPECIALIZED economics prompts with diversity controls`);
  }

  // Use specialized prompts for each subject
  switch (subject) {
    case 'economics':
      if (qualification === 'a-level') {
        try {
          switch (examBoard) {
            case 'aqa':
              console.log(`🎯 Loading AQA A-Level Economics prompts...`);
              const { getAQAALevelEconomicsQuestionPrompt } = require('@/lib/prompts-economics-alevel-aqa');
              return getAQAALevelEconomicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
            case 'edexcel':
              console.log(`🎯 Loading Edexcel A-Level Economics prompts...`);
              const { getEdexcelALevelEconomicsQuestionPrompt } = require('@/lib/prompts-economics-alevel-edexcel');
              return getEdexcelALevelEconomicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
            case 'ocr':
              console.log(`🎯 Loading OCR A-Level Economics prompts...`);
              const { getOCRALevelEconomicsQuestionPrompt } = require('@/lib/prompts-economics-alevel-ocr');
              return getOCRALevelEconomicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
            default:
              console.log(`🎯 Loading default (AQA) A-Level Economics prompts...`);
              const { getAQAALevelEconomicsQuestionPrompt: defaultEcon } = require('@/lib/prompts-economics-alevel-aqa');
              return defaultEcon(topic, plan.difficulty, plan.subtopic);
          }
        } catch (error) {
          console.error(`❌ ERROR loading specialized economics prompts:`, error);
          console.warn(`💔 Falling back to generic essay prompts due to error`);
          return buildEssayQuestionPrompt(plan, subject, examBoard, qualification, topicName);
        }
      }
      // Add GCSE Economics support when available
      break;

    case 'maths':
      // Use the new specialized Mathematics prompts
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAMathsALevelCompactPrompt } = require('@/lib/prompts-maths-alevel-aqa');
            return getAQAMathsALevelCompactPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelMathsALevelCompactPrompt } = require('@/lib/prompts-maths-alevel-edexcel');
            return getEdexcelMathsALevelCompactPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRMathsALevelCompactPrompt } = require('@/lib/prompts-maths-alevel-ocr');
            return getOCRMathsALevelCompactPrompt(topic, plan.difficulty, plan.subtopic);
          default:
            const { getAQAMathsALevelCompactPrompt: defaultALevelMaths } = require('@/lib/prompts-maths-alevel-aqa');
            return defaultALevelMaths(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAMathsGCSECompactPrompt } = require('@/lib/prompts-maths-gcse-aqa');
            return getAQAMathsGCSECompactPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelMathsGCSECompactPrompt } = require('@/lib/prompts-maths-gcse-edexcel');
            return getEdexcelMathsGCSECompactPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRMathsGCSECompactPrompt } = require('@/lib/prompts-maths-gcse-ocr');
            return getOCRMathsGCSECompactPrompt(topic, plan.difficulty, plan.subtopic);
          default:
            const { getAQAMathsGCSECompactPrompt: defaultMaths } = require('@/lib/prompts-maths-gcse-aqa');
            return defaultMaths(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'business':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelBusinessQuestionPrompt } = require('@/lib/prompts-business-alevel-aqa');
            return getAQAALevelBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelBusinessQuestionPrompt } = require('@/lib/prompts-business-alevel-edexcel');
            return getEdexcelALevelBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelBusinessQuestionPrompt } = require('@/lib/prompts-business-alevel-ocr');
            return getOCRALevelBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEBusinessQuestionPrompt } = require('@/lib/prompts-business-gcse-aqa');
            return getAQAGCSEBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEBusinessQuestionPrompt } = require('@/lib/prompts-business-gcse-edexcel');
            return getEdexcelGCSEBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEBusinessQuestionPrompt } = require('@/lib/prompts-business-gcse-ocr');
            return getOCRGCSEBusinessQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'history':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelHistoryQuestionPrompt } = require('@/lib/prompts-history-alevel-aqa');
            return getAQAALevelHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelHistoryQuestionPrompt } = require('@/lib/prompts-history-alevel-edexcel');
            return getEdexcelALevelHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelHistoryQuestionPrompt } = require('@/lib/prompts-history-alevel-ocr');
            return getOCRALevelHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEHistoryQuestionPrompt } = require('@/lib/prompts-history-gcse-aqa');
            return getAQAGCSEHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEHistoryQuestionPrompt } = require('@/lib/prompts-history-gcse-edexcel');
            return getEdexcelGCSEHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEHistoryQuestionPrompt } = require('@/lib/prompts-history-gcse-ocr');
            return getOCRGCSEHistoryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'psychology':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-alevel-aqa');
            return getAQAALevelPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-alevel-edexcel');
            return getEdexcelALevelPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-alevel-ocr');
            return getOCRALevelPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-gcse-aqa');
            return getAQAGCSEPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-gcse-edexcel');
            return getEdexcelGCSEPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEPsychologyQuestionPrompt } = require('@/lib/prompts-psychology-gcse-ocr');
            return getOCRGCSEPsychologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'geography':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelGeographyQuestionPrompt } = require('@/lib/prompts-geography-alevel-aqa');
            return getAQAALevelGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelGeographyQuestionPrompt } = require('@/lib/prompts-geography-alevel-edexcel');
            return getEdexcelALevelGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelGeographyQuestionPrompt } = require('@/lib/prompts-geography-alevel-ocr');
            return getOCRALevelGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEGeographyQuestionPrompt } = require('@/lib/prompts-geography-gcse-aqa');
            return getAQAGCSEGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEGeographyQuestionPrompt } = require('@/lib/prompts-geography-gcse-edexcel');
            return getEdexcelGCSEGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEGeographyQuestionPrompt } = require('@/lib/prompts-geography-gcse-ocr');
            return getOCRGCSEGeographyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'english-literature':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-alevel-aqa');
            return getAQAALevelEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-alevel-edexcel');
            return getEdexcelALevelEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-alevel-ocr');
            return getOCRALevelEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-gcse-aqa');
            return getAQAGCSEEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-gcse-edexcel');
            return getEdexcelGCSEEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEEnglishLiteratureQuestionPrompt } = require('@/lib/prompts-english-literature-gcse-ocr');
            return getOCRGCSEEnglishLiteratureQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'computer-science':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelComputerScienceQuestionPrompt } = require('@/lib/prompts-computerscience-alevel-aqa');
            return getAQAALevelComputerScienceQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelComputerScienceQuestionPrompt } = require('@/lib/prompts-computerscience-alevel-ocr');
            return getOCRALevelComputerScienceQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEComputerScienceQuestionPrompt } = require('@/lib/prompts-computerscience-gcse-aqa');
            return getAQAGCSEComputerScienceQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEComputerScienceQuestionPrompt } = require('@/lib/prompts-computerscience-gcse-edexcel');
            return getEdexcelGCSEComputerScienceQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEComputerScienceQuestionPrompt } = require('@/lib/prompts-computerscience-gcse-ocr');
            return getOCRGCSEComputerScienceQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    case 'biology':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelBiologyQuestionPrompt } = require('@/lib/prompts-biology-alevel-aqa');
            return getAQAALevelBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelBiologyQuestionPrompt } = require('@/lib/prompts-biology-alevel-edexcel');
            return getEdexcelALevelBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelBiologyQuestionPrompt } = require('@/lib/prompts-biology-alevel-ocr');
            return getOCRALevelBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      } else {
        switch (examBoard) {
          case 'aqa':
            const { getAQAGCSEBiologyQuestionPrompt } = require('@/lib/prompts-biology-gcse-aqa');
            return getAQAGCSEBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelGCSEBiologyQuestionPrompt } = require('@/lib/prompts-biology-gcse-edexcel');
            return getEdexcelGCSEBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRGCSEBiologyQuestionPrompt } = require('@/lib/prompts-biology-gcse-ocr');
            return getOCRGCSEBiologyQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;

    // Science subjects that have specialized prompts but are primarily quantitative
    case 'physics':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelPhysicsQuestionPrompt } = require('@/lib/prompts-physics-alevel-aqa');
            return getAQAALevelPhysicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelPhysicsQuestionPrompt } = require('@/lib/prompts-physics-alevel-edexcel');
            return getEdexcelALevelPhysicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelPhysicsQuestionPrompt } = require('@/lib/prompts-physics-alevel-ocr');
            return getOCRALevelPhysicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      // GCSE Physics prompts are available too but fall through to quantitative for now
      break;

    case 'chemistry':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            const { getAQAALevelChemistryQuestionPrompt } = require('@/lib/prompts-chemistry-alevel-aqa');
            return getAQAALevelChemistryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'edexcel':
            const { getEdexcelALevelChemistryQuestionPrompt } = require('@/lib/prompts-chemistry-alevel-edexcel');
            return getEdexcelALevelChemistryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          case 'ocr':
            const { getOCRALevelChemistryQuestionPrompt } = require('@/lib/prompts-chemistry-alevel-ocr');
            return getOCRALevelChemistryQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      // GCSE Chemistry prompts are available too but fall through to quantitative for now
      break;
  }

  // Fallback to existing essay/quantitative prompts for subjects without specialized paper prompts yet
  return isEssaySubject(subject)
    ? buildEssayQuestionPrompt(plan, subject, examBoard, qualification, topicName)
    : buildQuantitativeQuestionPrompt(plan, subject, examBoard, qualification, topicName);
}

/**
 * Internal question generation logic with optional content exclusion
 */
async function generateSingleQuestionInternal(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  openai: ReturnType<typeof getOpenAIClient>,
  excludeContent: string[] = []
): Promise<GeneratedQuestion> {
  const topic = getTopicByIdSubjectBoardAndLevel(plan.topicId, subject, examBoard, qualification) ||
                getTopicById(plan.topicId);
  const topicName = topic?.name || plan.topicId;

  // Build prompt based on subject type - use specialized prompts for better quality
  const basePrompt = getSubjectSpecificPrompt(plan, subject, examBoard, qualification, topicName);

  // Add content exclusion constraints if provided
  let exclusionPrompt = '';
  if (excludeContent.length > 0) {
    exclusionPrompt = `\n\nCONTENT EXCLUSION REQUIREMENTS:
Avoid generating questions that start with or are similar to these previously generated questions:
${excludeContent.map((content, i) => `${i + 1}. "${content}..."`).join('\n')}

IMPORTANT: Create a completely different question scenario, context, and wording to ensure variety.`;
  }

  // Add global constraints
  const subjectConstraints = getAllConstraints(subject);
  const prompt = `${subjectConstraints}\n\n${basePrompt}${exclusionPrompt}`;

  // Get system prompt
  const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

  // Check for fine-tuned model
  const fineTunedModel = getFineTunedModel(subject, qualification, examBoard);
  const modelToUse = fineTunedModel || 'gpt-4o-mini';

  // Calculate max tokens
  const maxTokens = getMaxTokens(subject, plan.marks);

  try {
    const completion = await openai.chat.completions.create({
      model: modelToUse,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.6,
      max_tokens: maxTokens,
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from AI');
    }

    const questionData = parseQuestionResponse(responseContent);

    return {
      id: plan.id,
      questionNumber: '',
      content: questionData.content,
      marks: plan.marks,
      difficulty: plan.difficulty,
      questionType: plan.questionType,
      topicId: plan.topicId,
      subtopic: plan.subtopic,
      solution: questionData.solution,
      markScheme: questionData.markScheme,
      diagram: questionData.diagram as DiagramSpec | undefined,
    };
  } catch (error) {
    console.error('Failed to generate question:', error);
    return {
      id: plan.id,
      questionNumber: '',
      content: `[Failed to generate question for ${plan.subtopic}]`,
      marks: plan.marks,
      difficulty: plan.difficulty,
      questionType: plan.questionType,
      topicId: plan.topicId,
      subtopic: plan.subtopic,
      solution: 'Generation failed',
      markScheme: ['Unable to generate mark scheme'],
    };
  }
}

/**
 * Generate questions in parallel batches
 */
async function generateQuestionsInBatches(
  plans: QuestionPlan[],
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  batchSize: number = 5
): Promise<GeneratedQuestion[]> {
  const openai = getOpenAIClient();
  const results: GeneratedQuestion[] = [];

  for (let i = 0; i < plans.length; i += batchSize) {
    const batch = plans.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map((plan) => generateSingleQuestion(plan, subject, examBoard, qualification, openai))
    );
    results.push(...batchResults);
  }

  return results;
}

export async function POST(request: NextRequest) {
  // Parse request body first for validation
  let body: PaperGenerationRequest;
  try {
    body = await request.json() as PaperGenerationRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { examBoard, qualification, subject, paperName, config, userId } = body;

  // Check subscription-based access (before streaming)
  const usageCheck = await checkPaperGenerationAllowed(userId || null);
  if (!usageCheck.allowed) {
    return NextResponse.json(
      {
        error: usageCheck.error || 'Paper generation not available on your plan',
        tier: usageCheck.tier,
        remaining: usageCheck.remaining,
        upgrade: true,
      },
      { status: 403 }
    );
  }

  // Validate required fields
  if (!examBoard || !qualification || !subject || !config) {
    return NextResponse.json(
      { error: 'Missing required fields: examBoard, qualification, subject, config' },
      { status: 400 }
    );
  }

  if (!config.sections || config.sections.length === 0) {
    return NextResponse.json(
      { error: 'Paper must have at least one section' },
      { status: 400 }
    );
  }

  if (!config.selectedSubtopics || Object.keys(config.selectedSubtopics).length === 0) {
    return NextResponse.json(
      { error: 'Must select at least one subtopic' },
      { status: 400 }
    );
  }

  // Ensure config has required defaults
  const totalMarksCalculated = config.totalMarks || config.sections.reduce((sum, section) => sum + ((section as any).marks || (section as any).targetMarks || 0), 0);
  console.log(`🔢 MARKS DEBUG - totalMarks: ${config.totalMarks}, calculated: ${totalMarksCalculated}, sections:`, config.sections.map(s => `${s.id}:${(s as any).marks || (s as any).targetMarks}`));
  
  const configWithDefaults = {
    ...config,
    difficultyDistribution: config.difficultyDistribution || {
      easy: 40,
      medium: 40, 
      hard: 20
    },
    questionTypeDistribution: config.questionTypeDistribution || {
      'multiple-choice': 0,
      'short-answer': 60,
      'extended-response': 40
    },
    settings: config.settings || {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false
    },
    topicWeights: config.topicWeights || {},
    totalMarks: totalMarksCalculated
  };

  // Plan the questions
  const selectionResult = selectQuestionsForPaper(configWithDefaults, subject, qualification);
  const allPlans: QuestionPlan[] = [];
  selectionResult.sections.forEach((section) => {
    allPlans.push(...section.questions);
  });

  // Log economics-specific paper generation details
  if (subject === 'economics') {
    console.log(`\n🎓 ECONOMICS PAPER GENERATION DEBUG:`);
    console.log(`📊 Total questions planned: ${allPlans.length}`);
    console.log(`🏷️ Topic distribution:`);
    const topicCount: Record<string, number> = {};
    allPlans.forEach(plan => {
      topicCount[plan.topicId] = (topicCount[plan.topicId] || 0) + 1;
    });
    Object.entries(topicCount).forEach(([topicId, count]) => {
      console.log(`   ${topicId}: ${count} question(s)`);
    });
    console.log(`🎯 Subtopic distribution:`);
    const subtopicCount: Record<string, number> = {};
    allPlans.forEach(plan => {
      subtopicCount[plan.subtopic] = (subtopicCount[plan.subtopic] || 0) + 1;
    });
    Object.entries(subtopicCount).forEach(([subtopic, count]) => {
      console.log(`   "${subtopic}": ${count} question(s)`);
    });
    console.log(`\n`);
  }

  if (allPlans.length === 0) {
    return NextResponse.json(
      { error: 'No questions could be planned for this configuration' },
      { status: 400 }
    );
  }

  // Use streaming to keep connection alive during long generation
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const openai = getOpenAIClient();
        const generatedQuestions: GeneratedQuestion[] = [];
        const totalQuestions = allPlans.length;

        // Send initial progress
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'progress', current: 0, total: totalQuestions })}\n\n`));

        // Generate questions one at a time with progress updates and deduplication
        const seenContent: string[] = []; // Track content prefixes to avoid repetition
        
        for (let i = 0; i < allPlans.length; i++) {
          const plan = allPlans[i];
          const question = await generateSingleQuestionWithExclusion(plan, subject, examBoard, qualification, openai, seenContent);
          generatedQuestions.push(question);
          
          // Track content prefix for deduplication (first 100 characters)
          if (question.content && !question.content.startsWith('[Failed')) {
            seenContent.push(question.content.substring(0, 100));
          }

          // Send progress update
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'progress', current: i + 1, total: totalQuestions })}\n\n`));
        }

        // Create lookup map
        const questionMap = new Map(generatedQuestions.map((q) => [q.id, q]));

        // Organize into sections with question numbers
        let globalQuestionNumber = 1;
        const sections: GeneratedSection[] = selectionResult.sections.map((section) => {
          const sectionQuestions = section.questions.map((plan) => {
            const question = questionMap.get(plan.id)!;
            question.questionNumber = String(globalQuestionNumber++);
            return question;
          });

          return {
            id: section.sectionId,
            name: section.sectionName,
            instructions: config.sections.find((s) => s.id === section.sectionId)?.instructions || '',
            questions: sectionQuestions,
            totalMarks: sectionQuestions.reduce((sum, q) => sum + q.marks, 0),
          };
        });

        // Create paper object
        const paper: GeneratedPaper = {
          id: crypto.randomUUID(),
          examBoard,
          qualification,
          subject,
          paperName: paperName || `${examBoard.toUpperCase()} ${qualification === 'gcse' ? 'GCSE' : 'A-Level'} Practice Paper`,
          sections,
          totalMarks: sections.reduce((sum, s) => sum + s.totalMarks, 0),
          timeLimit: config.timeLimit,
          settings: config.settings,
          createdAt: new Date().toISOString(),
        };

        // Store in Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && userId) {
          try {
            const supabase = createClient(supabaseUrl, supabaseKey);
            await supabase
              .from('generated_papers')
              .insert({
                id: paper.id,
                user_id: userId,
                config_hash: hashConfig(config),
                sections: paper.sections,
                total_marks: paper.totalMarks,
                exam_board: examBoard,
                qualification,
                subject,
                paper_name: paper.paperName,
                time_limit: config.timeLimit,
                settings: config.settings,
              });
          } catch (dbError) {
            console.error('Database error:', dbError);
          }
        }

        // Send final result
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({
          type: 'complete',
          paperId: paper.id,
          paper,
          stats: {
            totalQuestions: generatedQuestions.length,
            totalMarks: paper.totalMarks,
            sectionsCount: sections.length,
          },
        })}\n\n`));

        controller.close();
      } catch (error) {
        console.error('Error generating paper:', error);
        const errorMessage = error instanceof Error && error.message.includes('API key')
          ? 'AI API key not configured'
          : 'Failed to generate paper';
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'error', error: errorMessage })}\n\n`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

function hashConfig(config: PaperConfig): string {
  const str = JSON.stringify({
    totalMarks: config.totalMarks,
    sections: config.sections.map((s) => s.id),
    selectedSubtopics: Object.keys(config.selectedSubtopics).sort(),
    difficulty: config.difficultyDistribution,
  });

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}
