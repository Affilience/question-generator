import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { getTopicById } from '@/lib/topics';
import { getCachedExamples, cacheExamples, WorkedExample } from '@/lib/workedExamplesCache';
import { ExamBoard, QualificationLevel, Subject } from '@/types';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { COPYRIGHT_CONSTRAINTS, FACT_ACCURACY_CONSTRAINTS } from '@/lib/prompts/global-constraints';

export const runtime = 'edge';

function getSystemPrompt(subject: Subject, level: QualificationLevel, examBoard: ExamBoard): string {
  // Use enhanced system prompt as base
  const basePrompt = getEnhancedSystemPrompt(subject, examBoard, level);

  return `${basePrompt}

You are creating worked examples for students to learn from.
Your examples should be clear, educational, and show step-by-step problem solving.
Each step should explain both WHAT to do and WHY we do it.

${COPYRIGHT_CONSTRAINTS}

${FACT_ACCURACY_CONSTRAINTS}`;
}

function getExamplesPrompt(
  topicName: string,
  subtopic: string,
  subject: Subject,
  level: QualificationLevel,
  examBoard: ExamBoard
): string {
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const subjectDisplay = subject.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const boardUpper = examBoard.toUpperCase();

  return `Generate 3 worked examples for the ${boardUpper} ${levelDisplay} ${subjectDisplay} subtopic: "${subtopic}" (Topic: ${topicName})

Each example should represent a different common question type students encounter for this subtopic in ${levelDisplay} exams.

Return a JSON object with this exact structure:
{
  "examples": [
    {
      "questionType": "Brief name for this type of question",
      "question": "The full question text. Use LaTeX for math: $x^2$ for inline, $$equation$$ for display.",
      "steps": [
        {
          "step": 1,
          "instruction": "What to do in this step",
          "working": "The mathematical/scientific working shown (use LaTeX for equations)",
          "explanation": "Why we do this / what concept applies"
        }
      ],
      "answer": "The final answer with units if applicable",
      "keyTips": ["Tip 1 for this question type", "Tip 2"],
      "commonMistakes": ["Common mistake 1", "Common mistake 2"]
    }
  ]
}

Requirements:
- Include 3-5 steps per example (more for complex topics)
- Make steps clear enough for self-study
- Include practical ${boardUpper} exam tips specific to ${levelDisplay}
- Examples should be ${level === 'a-level' ? 'challenging but typical of A-Level exam questions' : 'appropriate for GCSE difficulty ranging from foundation to higher'}
- Use realistic numbers, contexts, and ${subject === 'physics' || subject === 'chemistry' || subject === 'biology' ? 'scientific values with correct units' : 'appropriate values'}
- For ${subjectDisplay}, focus on the key concepts and calculations students need to master`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      topicId,
      subtopic,
      subject = 'maths',
      qualification = 'gcse',
      examBoard = 'aqa',
    } = body as {
      topicId: string;
      subtopic: string;
      subject?: Subject;
      qualification?: QualificationLevel;
      examBoard?: ExamBoard;
    };

    if (!topicId || !subtopic) {
      return NextResponse.json(
        { error: 'Missing required fields: topicId and subtopic' },
        { status: 400 }
      );
    }

    const topic = getTopicById(topicId);
    if (!topic) {
      return NextResponse.json(
        { error: 'Invalid topic ID' },
        { status: 400 }
      );
    }

    // Check cache first - include subject/level/board in cache key
    const cacheKey = `${subject}:${qualification}:${examBoard}:${topicId}`;
    const cached = await getCachedExamples(cacheKey, subtopic);
    if (cached) {
      return NextResponse.json({
        subtopic: cached.subtopic,
        examples: cached.examples,
      }, {
        headers: { 'X-Cache': 'HIT' },
      });
    }

    // Generate new examples with proper subject/level/board context
    const systemPrompt = getSystemPrompt(subject, qualification, examBoard);
    const prompt = getExamplesPrompt(topic.name, subtopic, subject, qualification, examBoard);

    const openai = getOpenAIClient();
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 4000, // Adequate for detailed A-Level worked examples
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from OpenAI');
    }

    const parsed = JSON.parse(responseContent);
    const examples: WorkedExample[] = parsed.examples || [];

    // Cache the examples (async, don't wait) - use full cache key
    cacheExamples(cacheKey, subtopic, examples)
      .catch(err => console.error('Failed to cache examples:', err));

    return NextResponse.json({
      subtopic,
      examples,
    }, {
      headers: { 'X-Cache': 'MISS' },
    });
  } catch (error) {
    console.error('Error generating worked examples:', error);

    return NextResponse.json(
      { error: 'Failed to generate worked examples' },
      { status: 500 }
    );
  }
}
