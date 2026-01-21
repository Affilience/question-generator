import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Receiver } from '@upstash/qstash';
import {
  PaperConfig,
  ExamBoard,
  QualificationLevel,
  Subject,
  GeneratedPaper,
  GeneratedSection,
  GeneratedQuestion,
  Difficulty,
} from '@/types';
import { DiagramSpec } from '@/types/diagram';
import { selectQuestionsForPaper, QuestionPlan } from '@/lib/questionSelector';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse, DIAGRAM_SCHEMA_DOCS, SUBJECT_DIAGRAM_GUIDANCE } from '@/lib/prompts-common';
import { getTopicByIdSubjectBoardAndLevel, getTopicById } from '@/lib/topics';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';
import { findExistingQuestion, storeQuestion, recordQuestionServed, QuestionCriteria } from '@/lib/question-bank';
import {
  getQuestionConfig,
  isEssaySubject,
  isScienceSubject,
  isMathsSubject,
  getRandomQuestionFormat,
  getRandomScienceQuestionType,
  getRandomMathsQuestionType,
  QuestionFormat,
} from '@/lib/essay-subject-config';
import { getRandomExtractForTheme } from '@/lib/extracts/english-literature-extracts';
import { getRandomSourceForTheme } from '@/lib/extracts/history-sources';
import { getRandomEconomicExtract } from '@/lib/extracts/economics-extracts';
import { getRandomBusinessExtract } from '@/lib/extracts/business-extracts';
import { getRandomPsychologyStudy } from '@/lib/extracts/psychology-extracts';
import { getRandomGeographyExtract } from '@/lib/extracts/geography-extracts';

// This endpoint is called by QStash - no browser timeout
export const maxDuration = 300; // 5 minutes max

interface ProcessPaperRequest {
  jobId: string;
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: PaperConfig;
  userId?: string;
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Get max tokens based on subject type and question marks
function getMaxTokens(subject: Subject, marks: number): number {
  if (isEssaySubject(subject)) {
    if (marks <= 4) return 1500;
    if (marks <= 8) return 2500;
    if (marks <= 12) return 4000;
    return 6000;
  }
  if (marks <= 4) return 1500;
  if (marks <= 8) return 2000;
  return 3000;
}

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

    case 'economics': {
      const economicExtract = getRandomEconomicExtract(topicName, subtopic);
      if (economicExtract) {
        return {
          questionGuidance: `
USE THIS EXACT DATA from ${economicExtract.source} (${economicExtract.year}):

---
**${economicExtract.title}**

${economicExtract.content}
---

Include this EXACT data in your question. Ask about: ${subtopic}
Topics covered: ${economicExtract.topics.join(', ')}
Possible calculations: ${economicExtract.calculationOpportunities?.slice(0, 2).join(', ') || 'Percentage changes, comparisons'}`,
          solutionGuidance: `Reference specific figures from the data. ${economicExtract.analysisPoints?.slice(0, 2).join('. ') || 'Identify trends. Apply economic concepts.'}`,
        };
      }
      return {
        questionGuidance: `
INCLUDE DATA relevant to ${subtopic}:
"Figure 1: [Title about ${subtopic}]

| Year/Category | Value |
|---------------|-------|
| [realistic data showing ${subtopic}] |"

Then ask analysis question about the data.`,
        solutionGuidance: `Reference specific figures. Identify trends related to ${subtopic}. Apply economic concepts.`,
      };
    }

    case 'business': {
      const businessExtract = getRandomBusinessExtract(topicName, subtopic);
      if (businessExtract) {
        return {
          questionGuidance: `
USE THIS EXACT CASE STUDY/DATA from ${businessExtract.source} (${businessExtract.year}):

---
**${businessExtract.title}**${businessExtract.company ? ` - ${businessExtract.company}` : ''}

${businessExtract.content}
---

Include this EXACT data in your question. Ask about: ${subtopic}
Concepts to apply: ${businessExtract.concepts.slice(0, 3).join(', ')}
Possible calculations: ${businessExtract.calculationOpportunities?.slice(0, 2).join(', ') || 'Revenue, profit margins, growth rates'}`,
          solutionGuidance: `Reference specific figures from the case study. ${businessExtract.analysisPoints?.slice(0, 2).join('. ') || 'Apply business concepts. Evaluate strategies.'}`,
        };
      }
      return {
        questionGuidance: `
INCLUDE BUSINESS CASE STUDY relevant to ${subtopic}:
"Case Study: [Company Name]

[Brief company background]
[Relevant financial or operational data]

| Metric | Value |
|--------|-------|
| [relevant data] |"

Then ask analysis/evaluation question about the case study.`,
        solutionGuidance: `Reference case study data. Apply ${subtopic} concepts. Consider multiple stakeholder perspectives.`,
      };
    }

    case 'psychology': {
      const psychStudy = getRandomPsychologyStudy(topicName, subtopic);
      if (psychStudy) {
        return {
          questionGuidance: `
USE THIS EXACT RESEARCH STUDY - ${psychStudy.researcher} (${psychStudy.year}):

---
**Study: ${psychStudy.title}**

**Aim:** ${psychStudy.aim}

**Method:** ${psychStudy.method}

**Sample:** ${psychStudy.sample}

**Procedure:** ${psychStudy.procedure}

**Results:**
${psychStudy.results}

**Conclusion:** ${psychStudy.conclusion}
---

Include this EXACT study in your question. Ask about: ${subtopic}
Strengths: ${psychStudy.evaluationPoints.strengths.slice(0, 2).join('; ')}
Limitations: ${psychStudy.evaluationPoints.limitations.slice(0, 2).join('; ')}
${psychStudy.ethicalIssues ? `Ethical issues: ${psychStudy.ethicalIssues.join(', ')}` : ''}`,
          solutionGuidance: `Reference ${psychStudy.researcher} study specifically. Use exact results data. Evaluate: ${psychStudy.evaluationPoints.limitations.slice(0, 2).join('; ')}`,
        };
      }
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
    }

    case 'geography': {
      const geoExtract = getRandomGeographyExtract(topicName, subtopic);
      if (geoExtract) {
        return {
          questionGuidance: `
USE THIS EXACT GEOGRAPHICAL DATA from ${geoExtract.source} (${geoExtract.year}):

---
**${geoExtract.title}**
Data Type: ${geoExtract.type}

${geoExtract.content}
---

Include this EXACT data in your question. Ask about: ${subtopic}
Key concepts: ${geoExtract.concepts.slice(0, 3).join(', ')}
${geoExtract.skills ? `Skills to test: ${geoExtract.skills.slice(0, 2).join(', ')}` : ''}`,
          solutionGuidance: `Reference specific data from the extract. ${geoExtract.analysisPoints?.slice(0, 2).join('. ') || 'Apply geographical concepts. Link physical and human factors.'}`,
        };
      }
      return {
        questionGuidance: `
INCLUDE GEOGRAPHICAL RESOURCE about ${subtopic}:
"Figure 1: [Map/Graph/Data relevant to ${subtopic}]
[Include data, statistics, or geographical patterns]"`,
        solutionGuidance: `Reference Figure 1. Apply ${subtopic} concepts. Use case study knowledge.`,
      };
    }

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

  let formatGuidance = '';
  let commandWords: string[] = [];

  switch (selectedFormat) {
    case 'data_response':
      const dataGuidance = getSubjectDataGuidance(subject, plan.marks, topicName, plan.subtopic);
      formatGuidance = dataGuidance.questionGuidance;
      commandWords = ['Using the data', 'With reference to', 'Study Figure 1'];
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
${markSchemeGuidance}
${diagramInstructions}

Return JSON:
{
  "content": "Question using '${commandWord}'",
  "marks": ${plan.marks},
  "solution": "Complete model answer",
  "markScheme": ["Mark point 1", "Mark point 2", ...]${needsDiagram ? ',\n  "diagram": {...}' : ''}
}`;
}

function buildQuantitativeQuestionPrompt(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  topicName: string
): string {
  const levelDisplay = qualification === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = examBoard.toUpperCase();

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
      requirements = 'Interpret or sketch graphs/diagrams. Describe key features.';
      commandWords = ['Sketch', 'Draw', 'Using the diagram'];
  }

  const commandWord = commandWords[Math.floor(Math.random() * commandWords.length)];
  const difficultyDesc = plan.difficulty === 'easy' ? 'grades 1-3' : plan.difficulty === 'medium' ? 'grades 4-5' : 'grades 6-9';

  const needsDiagram = true;
  const subjectKey = subject.replace('-', '').toLowerCase();
  const subjectDiagramGuidance = SUBJECT_DIAGRAM_GUIDANCE[subjectKey] || '';
  const diagramInstructions = `\n\n${DIAGRAM_SCHEMA_DOCS}\n\n${subjectDiagramGuidance}\n\nInclude "diagram" field if the question involves visual content.`;

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
- Variables: $x$, $F_{net}$, $v^2$
- Fractions: $\\\\frac{a}{b}$
- Greek: $\\\\theta$, $\\\\alpha$
- Chemistry: $\\\\text{H}_2\\\\text{O}$, $\\\\text{Na}^+$
- Units: $\\\\text{m s}^{-1}$
${diagramInstructions}

Return JSON:
{"content":"Question using '${commandWord}'","marks":${plan.marks},"solution":"**Step 1:** [action] (M1)\\n**Answer:** [final]","markScheme":["M1: ...", "A1: ..."]${needsDiagram ? ',"diagram":{...}' : ''}}`;
}

async function generateSingleQuestion(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  openai: ReturnType<typeof getOpenAIClient>,
  userId?: string
): Promise<GeneratedQuestion> {
  const topic = getTopicByIdSubjectBoardAndLevel(plan.topicId, subject, examBoard, qualification) ||
                getTopicById(plan.topicId);
  const topicName = topic?.name || plan.topicId;

  // QUESTION BANK: Try to find an existing question first
  const criteria: QuestionCriteria = {
    subject,
    examBoard,
    qualification,
    topicId: plan.topicId,
    subtopic: plan.subtopic,
    difficulty: plan.difficulty,
    marks: plan.marks,
  };

  const bankQuestion = await findExistingQuestion(criteria, userId || null);
  if (bankQuestion) {
    // Record that this user has seen this question
    recordQuestionServed(bankQuestion.id, userId || null, 'paper').catch(console.error);

    return {
      id: plan.id,
      questionNumber: '',
      content: bankQuestion.content,
      marks: bankQuestion.marks,
      difficulty: plan.difficulty,
      questionType: plan.questionType,
      topicId: plan.topicId,
      subtopic: plan.subtopic,
      solution: bankQuestion.solution,
      markScheme: bankQuestion.mark_scheme,
      diagram: bankQuestion.diagram as unknown as DiagramSpec | undefined,
    };
  }

  // No existing question found - generate new one
  const basePrompt = isEssaySubject(subject)
    ? buildEssayQuestionPrompt(plan, subject, examBoard, qualification, topicName)
    : buildQuantitativeQuestionPrompt(plan, subject, examBoard, qualification, topicName);

  const subjectConstraints = getAllConstraints(subject);
  const prompt = `${subjectConstraints}\n\n${basePrompt}`;
  const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);
  const maxTokens = getMaxTokens(subject, plan.marks);

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
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

    const generatedQuestion: GeneratedQuestion = {
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

    // QUESTION BANK: Store for reuse by other users
    storeQuestion(
      criteria,
      generatedQuestion.content,
      generatedQuestion.solution,
      generatedQuestion.markScheme,
      generatedQuestion.marks,
      generatedQuestion.diagram as Record<string, unknown> | undefined
    ).then(bankId => {
      if (bankId && userId) {
        recordQuestionServed(bankId, userId, 'paper').catch(console.error);
      }
    }).catch(console.error);

    return generatedQuestion;
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

export async function POST(request: NextRequest) {
  // Verify QStash signature
  const receiver = new Receiver({
    currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY!,
    nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY!,
  });

  const body = await request.text();
  const signature = request.headers.get('upstash-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
  }

  try {
    await receiver.verify({
      signature,
      body,
      url: request.url,
    });
  } catch (err) {
    console.error('Invalid QStash signature:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const data: ProcessPaperRequest = JSON.parse(body);
  const { jobId, examBoard, qualification, subject, paperName, config, userId } = data;

  const supabase = getSupabaseAdmin();

  // Mark job as processing
  await supabase
    .from('paper_jobs')
    .update({ status: 'processing', updated_at: new Date().toISOString() })
    .eq('id', jobId);

  try {
    const openai = getOpenAIClient();

    // Plan the questions
    const selectionResult = selectQuestionsForPaper(config);
    const allPlans: QuestionPlan[] = [];
    selectionResult.sections.forEach((section) => {
      allPlans.push(...section.questions);
    });

    const generatedQuestions: GeneratedQuestion[] = [];
    const totalQuestions = allPlans.length;

    // Generate questions one at a time, updating progress
    for (let i = 0; i < allPlans.length; i++) {
      const plan = allPlans[i];
      const question = await generateSingleQuestion(plan, subject, examBoard, qualification, openai, userId);
      generatedQuestions.push(question);

      // Update progress in database
      await supabase
        .from('paper_jobs')
        .update({
          progress_current: i + 1,
          updated_at: new Date().toISOString(),
        })
        .eq('id', jobId);
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

    // Store paper in database
    const { error: paperError } = await supabase
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

    if (paperError) {
      console.error('Failed to save paper:', paperError);
    }

    // Mark job as completed
    await supabase
      .from('paper_jobs')
      .update({
        status: 'completed',
        paper_id: paper.id,
        progress_current: totalQuestions,
        updated_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
      })
      .eq('id', jobId);

    return NextResponse.json({ success: true, paperId: paper.id });

  } catch (error) {
    console.error('Paper generation failed:', error);

    // Mark job as failed
    await supabase
      .from('paper_jobs')
      .update({
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        updated_at: new Date().toISOString(),
      })
      .eq('id', jobId);

    return NextResponse.json({ error: 'Paper generation failed' }, { status: 500 });
  }
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
