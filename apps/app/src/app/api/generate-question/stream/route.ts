import { NextRequest } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { getAQAEnhancedPrompt } from '@/lib/prompts-aqa';
import { getEdexcelEnhancedPrompt } from '@/lib/prompts-edexcel';
import { getOCREnhancedPrompt } from '@/lib/prompts-ocr';
import { getTopicById } from '@/lib/topics';
import { Difficulty, ExamBoard } from '@/types';

export const runtime = 'edge';

const SYSTEM_PROMPT = `You are an expert GCSE Mathematics examiner. Generate exam-style questions with solutions and mark schemes. Respond ONLY with valid JSON matching the requested format. Be concise but complete.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topicId, difficulty, subtopic, examBoard = 'aqa' } = body as {
      topicId: string;
      difficulty: Difficulty;
      subtopic?: string;
      examBoard?: ExamBoard;
    };

    if (!topicId || !difficulty) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: topicId and difficulty' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const topic = getTopicById(topicId);
    if (!topic) {
      return new Response(
        JSON.stringify({ error: 'Invalid topic ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const getPromptForBoard = () => {
      switch (examBoard) {
        case 'edexcel':
          return getEdexcelEnhancedPrompt(topic, difficulty, subtopic);
        case 'ocr':
          return getOCREnhancedPrompt(topic, difficulty, subtopic);
        default:
          return getAQAEnhancedPrompt(topic, difficulty, subtopic);
      }
    };
    const prompt = getPromptForBoard();

    const openai = getOpenAIClient();
    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.75,
      max_tokens: 800,
      stream: true,
    });

    // Create a readable stream from the OpenAI stream
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
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
