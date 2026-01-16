import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import {
  PaperConfig,
  ExamBoard,
  QualificationLevel,
  Subject,
  GeneratedPaper,
  GeneratedSection,
  GeneratedQuestion,
  QuestionType,
} from '@/types';
import { selectQuestionsForPaper, QuestionPlan } from '@/lib/questionSelector';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse } from '@/lib/prompts-common';
import { getTopicByIdSubjectBoardAndLevel, getTopicById } from '@/lib/topics';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';

// Note: Cannot use edge runtime due to Supabase client needs
export const maxDuration = 60; // Allow up to 60 seconds for paper generation

interface PaperGenerationRequest {
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: PaperConfig;
}

// System prompts now use enhanced versions from prompts/system-prompts.ts
// which include exam board-specific conventions, copyright prevention, and accuracy constraints

/**
 * Generate a prompt for a specific question plan
 */
function generateQuestionPrompt(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): string {
  const topic = getTopicByIdSubjectBoardAndLevel(plan.topicId, subject, examBoard, qualification) ||
                getTopicById(plan.topicId);

  const topicName = topic?.name || plan.topicId;
  const boardName = examBoard.toUpperCase();
  const levelName = qualification === 'gcse' ? 'GCSE' : 'A-Level';

  // Map question types to descriptions
  const typeDescriptions: Record<QuestionType, string> = {
    'multiple-choice': 'a multiple choice question with 4 options (A, B, C, D)',
    'short-answer': 'a short answer question requiring 1-3 sentences',
    'calculation': 'a calculation/numerical problem showing working',
    'explain': 'an explain/describe question testing understanding',
    'extended': 'an extended response question requiring detailed analysis',
    'data-analysis': 'a data analysis question with a table or graph to interpret',
    'graph': 'a question involving drawing or completing a graph',
    'compare': 'a compare/contrast question analyzing differences',
  };

  const typeDesc = typeDescriptions[plan.questionType] || 'a question';
  const difficultyDesc = plan.difficulty === 'easy' ? 'foundation level' :
                         plan.difficulty === 'hard' ? 'challenging' : 'standard';

  return `Generate ${typeDesc} for ${boardName} ${levelName} ${subject.replace('-', ' ')}.

Topic: ${topicName}
Subtopic: ${plan.subtopic}
Difficulty: ${difficultyDesc}
Target marks: ${plan.marks}

Requirements:
- Question should be worth exactly ${plan.marks} marks
- Match the ${boardName} ${levelName} exam style
- Include clear mark scheme points
- Provide a complete worked solution

Return JSON format:
{
  "content": "The question text",
  "marks": ${plan.marks},
  "solution": "Step-by-step solution",
  "markScheme": ["M1: method mark point", "A1: answer mark point"]
}`;
}

/**
 * Generate a single question using the AI
 */
async function generateSingleQuestion(
  plan: QuestionPlan,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel,
  openai: ReturnType<typeof getOpenAIClient>
): Promise<GeneratedQuestion> {
  const basePrompt = generateQuestionPrompt(plan, subject, examBoard, qualification);
  // Add global constraints (copyright, accuracy, safety) to the prompt
  const subjectConstraints = getAllConstraints(subject);
  const prompt = `${subjectConstraints}\n\n${basePrompt}`;
  // Use exam board-specific system prompt with enhanced constraints
  const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.6,
      max_tokens: 800,
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from AI');
    }

    const questionData = parseQuestionResponse(responseContent);

    return {
      id: plan.id,
      questionNumber: '', // Will be assigned later
      content: questionData.content,
      marks: plan.marks,
      difficulty: plan.difficulty,
      questionType: plan.questionType,
      topicId: plan.topicId,
      subtopic: plan.subtopic,
      solution: questionData.solution,
      markScheme: questionData.markScheme,
      diagram: questionData.diagram,
    };
  } catch (error) {
    console.error('Failed to generate question:', error);
    // Return a placeholder on failure
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

  // Process in batches to avoid rate limits
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
  try {
    const body = await request.json() as PaperGenerationRequest;
    const { examBoard, qualification, subject, paperName, config } = body;

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

    if (Object.keys(config.selectedSubtopics).length === 0) {
      return NextResponse.json(
        { error: 'Must select at least one subtopic' },
        { status: 400 }
      );
    }

    // Step 1: Plan the questions using the selector
    const selectionResult = selectQuestionsForPaper(config);

    // Step 2: Flatten all question plans
    const allPlans: QuestionPlan[] = [];
    selectionResult.sections.forEach((section) => {
      allPlans.push(...section.questions);
    });

    if (allPlans.length === 0) {
      return NextResponse.json(
        { error: 'No questions could be planned for this configuration' },
        { status: 400 }
      );
    }

    // Step 3: Generate all questions in parallel batches
    const generatedQuestions = await generateQuestionsInBatches(
      allPlans,
      subject,
      examBoard,
      qualification
    );

    // Step 4: Create a map for quick lookup
    const questionMap = new Map(generatedQuestions.map((q) => [q.id, q]));

    // Step 5: Organize into sections with question numbers
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

    // Step 6: Create the paper object
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

    // Step 7: Store in Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Store the generated paper
        const { error: insertError } = await supabase
          .from('generated_papers')
          .insert({
            id: paper.id,
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

        if (insertError) {
          console.error('Failed to store paper in database:', insertError);
          // Continue anyway - paper is generated
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
        // Continue anyway - paper is generated
      }
    }

    return NextResponse.json({
      paperId: paper.id,
      paper,
      stats: {
        totalQuestions: generatedQuestions.length,
        totalMarks: paper.totalMarks,
        sectionsCount: sections.length,
      },
    });
  } catch (error) {
    console.error('Error generating paper:', error);

    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'AI API key not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate paper' },
      { status: 500 }
    );
  }
}

/**
 * Create a simple hash of the config for caching purposes
 */
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
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}
