import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse } from '@/lib/prompts-common';
import { getAQACompactPrompt } from '@/lib/prompts-aqa';
import { getEdexcelCompactPrompt } from '@/lib/prompts-edexcel';
import { getOCRCompactPrompt } from '@/lib/prompts-ocr';
import { getTopicById, getTopicsByExamBoard } from '@/lib/topics';
import { cacheQuestion, getCacheCount } from '@/lib/questionCache';
import { Difficulty, ExamBoard } from '@/types';

export const runtime = 'edge';
export const maxDuration = 60; // Allow up to 60 seconds

const SYSTEM_PROMPT = `You are an expert GCSE Mathematics examiner. Generate exam-style questions with solutions and mark schemes. Respond ONLY with valid JSON. Be concise.`;

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];

interface WarmRequest {
  topicId?: string;
  subtopic?: string;
  difficulty?: Difficulty;
  count?: number;
  minThreshold?: number;
  examBoard?: ExamBoard;
}

export async function POST(request: NextRequest) {
  try {
    const body: WarmRequest = await request.json();
    const { topicId, subtopic, difficulty, count = 3, minThreshold = 5, examBoard = 'aqa' } = body;

    const results: { key: string; generated: number; existing: number }[] = [];

    // If specific topic/subtopic/difficulty, just warm that
    if (topicId && subtopic && difficulty) {
      const result = await warmCache(topicId, subtopic, difficulty, examBoard, count, minThreshold);
      results.push(result);
    }
    // If just topicId, warm all subtopics for that topic
    else if (topicId) {
      const topic = getTopicById(topicId);
      if (topic) {
        const board = topic.examBoard || examBoard;
        for (const diff of DIFFICULTIES) {
          // Pick random subtopics to warm (not all - too many)
          const randomSubtopics = topic.subtopics
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);

          for (const sub of randomSubtopics) {
            const result = await warmCache(topicId, sub, diff, board, count, minThreshold);
            results.push(result);
          }
        }
      }
    }
    // Otherwise, warm a random sample across specified exam board topics
    else {
      const topics = getTopicsByExamBoard(examBoard);
      for (const topic of topics) {
        for (const diff of DIFFICULTIES) {
          // Pick 2 random subtopics per topic/difficulty
          const randomSubtopics = topic.subtopics
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);

          for (const sub of randomSubtopics) {
            const result = await warmCache(topic.id, sub, diff, examBoard, count, minThreshold);
            results.push(result);
          }
        }
      }
    }

    const totalGenerated = results.reduce((sum, r) => sum + r.generated, 0);

    return NextResponse.json({
      success: true,
      warmed: results.length,
      totalGenerated,
      examBoard,
      results,
    });
  } catch (error) {
    console.error('Cache warm error:', error);
    return NextResponse.json(
      { error: 'Failed to warm cache' },
      { status: 500 }
    );
  }
}

async function warmCache(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  examBoard: ExamBoard,
  count: number,
  minThreshold: number
): Promise<{ key: string; generated: number; existing: number }> {
  const existing = await getCacheCount(topicId, subtopic, difficulty);
  const key = `${topicId}:${subtopic}:${difficulty}`;

  // Skip if already has enough
  if (existing >= minThreshold) {
    return { key, generated: 0, existing };
  }

  const toGenerate = Math.min(count, minThreshold - existing);
  let generated = 0;

  const topic = getTopicById(topicId);
  if (!topic) {
    return { key, generated: 0, existing };
  }

  const openai = getOpenAIClient();

  for (let i = 0; i < toGenerate; i++) {
    try {
      const getPromptForBoard = () => {
        switch (examBoard) {
          case 'edexcel':
            return getEdexcelCompactPrompt(topic, difficulty, subtopic);
          case 'ocr':
            return getOCRCompactPrompt(topic, difficulty, subtopic);
          default:
            return getAQACompactPrompt(topic, difficulty, subtopic);
        }
      };
      const prompt = getPromptForBoard();

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.8, // Higher for variety
        max_tokens: 1500, // Adequate for GCSE Maths with solutions
      });

      const responseContent = completion.choices[0]?.message?.content;
      if (responseContent) {
        const questionData = parseQuestionResponse(responseContent);
        await cacheQuestion(topicId, subtopic, difficulty, {
          content: questionData.content,
          solution: questionData.solution,
          marks: questionData.marks,
          markScheme: questionData.markScheme,
        });
        generated++;
      }
    } catch (err) {
      console.error(`Failed to generate question for ${key}:`, err);
    }
  }

  return { key, generated, existing };
}
