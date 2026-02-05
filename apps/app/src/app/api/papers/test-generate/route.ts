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
import { DiagramSpec } from '@/types/diagram';
import { selectQuestionsForPaper, QuestionPlan } from '@/lib/questionSelector';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse, DIAGRAM_SCHEMA_DOCS, SUBJECT_DIAGRAM_GUIDANCE } from '@/lib/prompts-common';
import { getTopicByIdSubjectBoardAndLevel, getTopicById } from '@/lib/topics';
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
import { getRandomExtractForTheme } from '@/lib/extracts/english-literature-extracts';
import { getRandomSourceForTheme } from '@/lib/extracts/history-sources';

// Import specialized prompts for Economics
import { getEdexcelALevelEconomicsQuestionPrompt } from '@/lib/prompts-economics-alevel-edexcel';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

interface TestPaperRequest {
  subject: Subject;
  qualification: QualificationLevel;
  examBoard: ExamBoard;
  totalMarks: number;
  timeMinutes: number;
}

// Get subject-specific prompt function - TEST VERSION
function getSubjectSpecificPrompt(
  plan: QuestionPlan,
  subject: Subject, 
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  topicName: string
): string {
  const topic = getTopicById(plan.topicId);
  if (!topic) {
    throw new Error(`Topic not found: ${plan.topicId}`);
  }

  switch (subject) {
    case 'economics':
      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'edexcel':
            return getEdexcelALevelEconomicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
          default:
            console.log(`No specialized prompt for ${examBoard} ${qualification} ${subject}, using Economics Edexcel as fallback`);
            return getEdexcelALevelEconomicsQuestionPrompt(topic, plan.difficulty, plan.subtopic);
        }
      }
      break;
    default:
      console.log(`No specialized prompt available for ${subject}, using generic prompt`);
      break;
  }
  
  // Fallback to Economics for testing
  const fallbackTopic = getTopicById('market-failure') || topic;
  return getEdexcelALevelEconomicsQuestionPrompt(fallbackTopic, plan.difficulty, plan.subtopic);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as TestPaperRequest;
    const { subject, qualification, examBoard, totalMarks, timeMinutes } = body;

    console.log(`[TEST] Generating paper for ${subject} ${qualification} ${examBoard} (${totalMarks} marks)`);

    // Create paper config
    const config: PaperConfig = {
      totalMarks,
      timeLimit: timeMinutes,
      sections: [
        {
          id: "section-a",
          name: "Section A",
          targetMarks: totalMarks,
          questionTypes: ['essay', 'extract-analysis', 'data-response'] as QuestionType[],
          instructions: `Answer ALL questions. Total marks: ${totalMarks}`,
          order: 1
        }
      ],
      selectedTopics: [],
      selectedSubtopics: {},
      difficultyDistribution: { easy: 30, medium: 40, hard: 30 },
      questionTypeDistribution: { essay: 60, extractAnalysis: 30, dataResponse: 10 },
      settings: {
        includeFormulaSheet: false,
        includeDataBooklet: false,
        showMarks: true,
        calculatorAllowed: false,
        examConditions: true
      }
    };

    // Select questions for paper
    const questions = selectQuestionsForPaper(config, subject).sections.flatMap(section => section.questions);

    console.log(`[TEST] Selected ${questions.length} questions:`, 
      questions.map(q => `${q.topicId} (${q.subtopic}) - ${q.marks} marks`));

    // Generate questions using specialized prompts
    const generatedQuestions: GeneratedQuestion[] = [];
    const openai = getOpenAIClient();

    for (let i = 0; i < questions.length; i++) {
      const plan = questions[i];
      const topic = getTopicById(plan.topicId);
      
      if (!topic) {
        throw new Error(`Topic not found: ${plan.topicId}`);
      }

      console.log(`[TEST] Generating question ${i + 1}: ${plan.topicId} (${plan.subtopic}) using specialized prompts`);

      // Use specialized prompt
      const prompt = getSubjectSpecificPrompt(plan, subject, examBoard, qualification, topic.name);
      
      console.log(`[TEST] Using specialized prompt for ${subject} ${examBoard} ${qualification}`);

      const systemPrompt = `${getEnhancedSystemPrompt(subject, examBoard, qualification)}

${getAllConstraints(subject)}

${prompt}`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: `Generate a ${plan.marks}-mark ${plan.difficulty} question on "${topic.name}" (${plan.subtopic}) for ${examBoard.toUpperCase()} ${qualification.toUpperCase()} ${subject}.`,
          },
        ],
        temperature: 0.8,
        max_tokens: 4000,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error(`Failed to generate question ${i + 1}`);
      }

      try {
        const parsed = parseQuestionResponse(content);
        
        generatedQuestions.push({
          id: `q${i + 1}`,
          questionNumber: `${i + 1}`,
          content: parsed.question,
          marks: plan.marks,
          topicId: plan.topicId,
          subtopic: plan.subtopic,
          difficulty: plan.difficulty,
          markScheme: parsed.markScheme,
          solution: parsed.solution,
          diagrams: parsed.diagrams || [],
        });
      } catch (parseError) {
        console.error(`Failed to parse question ${i + 1}:`, parseError);
        // Add a basic question as fallback
        generatedQuestions.push({
          id: `q${i + 1}`,
          questionNumber: `${i + 1}`,
          content: content.slice(0, 1000),
          marks: plan.marks,
          topicId: plan.topicId,
          subtopic: plan.subtopic,
          difficulty: plan.difficulty,
          markScheme: ['Unable to parse mark scheme'],
          solution: 'Unable to parse solution',
          diagrams: [],
        });
      }
    }

    const paper: GeneratedPaper = {
      id: `test-paper-${Date.now()}`,
      title: `${subject.toUpperCase()} ${qualification.toUpperCase()} Practice Paper`,
      examBoard,
      qualification,
      subject,
      totalMarks,
      timeMinutes,
      sections: [
        {
          id: 'section-a',
          name: 'Section A',
          instructions: `Answer ALL questions. Total marks: ${totalMarks}`,
          questions: generatedQuestions,
        },
      ],
      createdAt: new Date().toISOString(),
    };

    console.log(`[TEST] Successfully generated paper with ${generatedQuestions.length} questions`);
    console.log(`[TEST] Topics covered:`, generatedQuestions.map(q => `${q.topicId} (${q.subtopic})`));

    return NextResponse.json({ paper });

  } catch (error) {
    console.error('[TEST] Paper generation error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to generate test paper',
        details: error 
      },
      { status: 500 }
    );
  }
}