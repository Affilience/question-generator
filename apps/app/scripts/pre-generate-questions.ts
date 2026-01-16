/**
 * Pre-generate questions to warm the cache
 *
 * This script generates questions for all topic/subtopic/difficulty combinations
 * and stores them in the Redis cache for instant retrieval.
 *
 * Usage:
 *   npx tsx scripts/pre-generate-questions.ts [options]
 *
 * Options:
 *   --subject=maths|physics|chemistry  Only generate for specific subject
 *   --level=gcse|a-level               Only generate for specific level
 *   --board=aqa|edexcel|ocr            Only generate for specific exam board
 *   --count=N                          Questions per combination (default: 10)
 *   --dry-run                          Show what would be generated without doing it
 */

import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(__dirname, '../.env.local') });

import Groq from 'groq-sdk';
import { Redis } from '@upstash/redis';
import { Difficulty, Topic, Subject, ExamBoard, QualificationLevel } from '../src/types';

// Import all topic data
import { aqaTopics } from '../src/lib/topics-aqa';
import { edexcelTopics } from '../src/lib/topics-edexcel';
import { ocrTopics } from '../src/lib/topics-ocr';
import { aqaALevelTopics } from '../src/lib/topics-alevel-aqa';
import { edexcelALevelTopics } from '../src/lib/topics-alevel-edexcel';
import { ocrALevelTopics } from '../src/lib/topics-alevel-ocr';
import { aqaPhysicsTopics } from '../src/lib/topics-physics-aqa';
import { edexcelPhysicsTopics } from '../src/lib/topics-physics-edexcel';
import { ocrPhysicsTopics } from '../src/lib/topics-physics-ocr';
import { aqaALevelPhysicsTopics } from '../src/lib/topics-physics-alevel-aqa';
import { edexcelALevelPhysicsTopics } from '../src/lib/topics-physics-alevel-edexcel';
import { ocrALevelPhysicsTopics } from '../src/lib/topics-physics-alevel-ocr';
import { aqaChemistryTopics } from '../src/lib/topics-chemistry-gcse-aqa';
import { edexcelChemistryTopics } from '../src/lib/topics-chemistry-gcse-edexcel';
import { ocrChemistryTopics } from '../src/lib/topics-chemistry-gcse-ocr';

// Types
interface CachedQuestion {
  content: string;
  solution: string;
  marks: number;
  markScheme: string[];
  cachedAt: number;
}

interface GenerationConfig {
  subject?: Subject;
  level?: QualificationLevel;
  board?: ExamBoard;
  questionsPerCombo: number;
  dryRun: boolean;
}

// Topic mapping
const TOPIC_MAP: Record<string, Record<string, Record<string, Topic[]>>> = {
  maths: {
    gcse: {
      aqa: aqaTopics,
      edexcel: edexcelTopics,
      ocr: ocrTopics,
    },
    'a-level': {
      aqa: aqaALevelTopics,
      edexcel: edexcelALevelTopics,
      ocr: ocrALevelTopics,
    },
  },
  physics: {
    gcse: {
      aqa: aqaPhysicsTopics,
      edexcel: edexcelPhysicsTopics,
      ocr: ocrPhysicsTopics,
    },
    'a-level': {
      aqa: aqaALevelPhysicsTopics,
      edexcel: edexcelALevelPhysicsTopics,
      ocr: ocrALevelPhysicsTopics,
    },
  },
  chemistry: {
    gcse: {
      aqa: aqaChemistryTopics,
      edexcel: edexcelChemistryTopics,
      ocr: ocrChemistryTopics,
    },
  },
};

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];

// Initialize clients
function getGroqClient(): Groq {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY environment variable is not set');
  }
  return new Groq({ apiKey });
}

function getRedisClient(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new Error('Redis credentials not configured');
  }
  return new Redis({ url, token });
}

function getCacheKey(subject: string, level: string, topicId: string, subtopic: string, difficulty: Difficulty): string {
  const normalizedSubtopic = subtopic
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .substring(0, 50);
  return `questions:${subject}:${level}:${topicId}:${normalizedSubtopic}:${difficulty}`;
}

function getMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy': return { min: 1, max: 2 };
    case 'medium': return { min: 3, max: 4 };
    case 'hard': return { min: 5, max: 6 };
  }
}

function buildPrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topic: Topic,
  subtopic: string,
  difficulty: Difficulty
): string {
  const markRange = getMarkRange(difficulty);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();

  const difficultyDesc = difficulty === 'easy'
    ? 'Simple, 1-2 steps, grades 1-3'
    : difficulty === 'medium'
    ? 'Moderate, 2-3 steps, grades 4-5'
    : 'Challenging, multi-step, grades 6-9';

  return `Generate a ${boardUpper} ${levelDisplay} ${subject} exam question. Return ONLY valid JSON.

Topic: ${topic.name} - ${subtopic}
Difficulty: ${difficultyDesc}
Marks: ${markRange.min}-${markRange.max}

Requirements:
- Original question matching ${boardUpper} exam style
- Clear, unambiguous wording
- Worked solution with steps
- Mark scheme with M (method) and A (accuracy) marks
- Use $...$ for LaTeX math notation

Return exactly this JSON structure:
{"content":"Question text","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: Method mark","A1: Accuracy mark"]}`;
}

async function generateQuestion(
  groq: Groq,
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topic: Topic,
  subtopic: string,
  difficulty: Difficulty
): Promise<CachedQuestion | null> {
  const prompt = buildPrompt(subject, level, board, topic, subtopic, difficulty);

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: `You are an expert ${level === 'a-level' ? 'A-Level' : 'GCSE'} ${subject} examiner. Generate exam-style questions. Respond ONLY with valid JSON.`
        },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) return null;

    const parsed = JSON.parse(content);

    return {
      content: parsed.content || '',
      solution: parsed.solution || '',
      marks: parsed.marks || 3,
      markScheme: parsed.markScheme || [],
      cachedAt: Date.now(),
    };
  } catch (error) {
    console.error(`  Error generating question:`, error);
    return null;
  }
}

async function getCacheCount(redis: Redis, key: string): Promise<number> {
  try {
    const cached = await redis.get<CachedQuestion[]>(key);
    return cached?.length || 0;
  } catch {
    return 0;
  }
}

async function addToCache(redis: Redis, key: string, question: CachedQuestion): Promise<void> {
  try {
    const existing = await redis.get<CachedQuestion[]>(key) || [];

    // Check for duplicates
    const isDuplicate = existing.some(q =>
      q.content.substring(0, 100) === question.content.substring(0, 100)
    );
    if (isDuplicate) return;

    const updated = [question, ...existing].slice(0, 20);
    await redis.set(key, updated, { ex: 60 * 24 * 60 * 60 }); // 60 days
  } catch (error) {
    console.error(`  Cache write error:`, error);
  }
}

function parseArgs(): GenerationConfig {
  const args = process.argv.slice(2);
  const config: GenerationConfig = {
    questionsPerCombo: 10,
    dryRun: false,
  };

  for (const arg of args) {
    if (arg.startsWith('--subject=')) {
      config.subject = arg.split('=')[1] as Subject;
    } else if (arg.startsWith('--level=')) {
      config.level = arg.split('=')[1] as QualificationLevel;
    } else if (arg.startsWith('--board=')) {
      config.board = arg.split('=')[1] as ExamBoard;
    } else if (arg.startsWith('--count=')) {
      config.questionsPerCombo = parseInt(arg.split('=')[1], 10);
    } else if (arg === '--dry-run') {
      config.dryRun = true;
    }
  }

  return config;
}

async function main() {
  const config = parseArgs();

  console.log('🚀 Question Pre-Generation Script');
  console.log('================================\n');

  if (config.dryRun) {
    console.log('DRY RUN MODE - No questions will be generated\n');
  }

  let groq: Groq | null = null;
  let redis: Redis | null = null;

  if (!config.dryRun) {
    try {
      groq = getGroqClient();
      redis = getRedisClient();
      console.log('✓ Connected to Groq and Redis\n');
    } catch (error) {
      console.error('Failed to initialize clients:', error);
      process.exit(1);
    }
  }

  // Calculate totals
  let totalCombinations = 0;
  let totalQuestions = 0;
  let generated = 0;
  let skipped = 0;
  let errors = 0;

  const subjects = config.subject ? [config.subject] : Object.keys(TOPIC_MAP) as Subject[];

  for (const subject of subjects) {
    const levels = config.level
      ? [config.level]
      : Object.keys(TOPIC_MAP[subject] || {}) as QualificationLevel[];

    for (const level of levels) {
      const boards = config.board
        ? [config.board]
        : Object.keys(TOPIC_MAP[subject]?.[level] || {}) as ExamBoard[];

      for (const board of boards) {
        const topics = TOPIC_MAP[subject]?.[level]?.[board] || [];

        console.log(`\n📚 ${subject.toUpperCase()} - ${level.toUpperCase()} - ${board.toUpperCase()}`);
        console.log(`   ${topics.length} topics found`);

        for (const topic of topics) {
          for (const subtopic of topic.subtopics) {
            for (const difficulty of DIFFICULTIES) {
              totalCombinations++;
              const cacheKey = getCacheKey(subject, level, topic.id, subtopic, difficulty);

              if (config.dryRun) {
                console.log(`   Would generate for: ${topic.name} > ${subtopic} [${difficulty}]`);
                totalQuestions += config.questionsPerCombo;
                continue;
              }

              // Check existing cache count
              const existing = await getCacheCount(redis!, cacheKey);
              const needed = Math.max(0, config.questionsPerCombo - existing);

              if (needed === 0) {
                skipped++;
                continue;
              }

              process.stdout.write(`   ${topic.name} > ${subtopic.substring(0, 30)}... [${difficulty}]: `);

              for (let i = 0; i < needed; i++) {
                const question = await generateQuestion(
                  groq!,
                  subject,
                  level,
                  board,
                  topic,
                  subtopic,
                  difficulty
                );

                if (question) {
                  await addToCache(redis!, cacheKey, question);
                  generated++;
                  process.stdout.write('.');
                } else {
                  errors++;
                  process.stdout.write('x');
                }

                // Small delay to avoid rate limiting
                await new Promise(r => setTimeout(r, 100));
              }

              console.log(` (${needed} new)`);
            }
          }
        }
      }
    }
  }

  console.log('\n================================');
  console.log('📊 Summary');
  console.log('================================');
  console.log(`Total combinations: ${totalCombinations}`);

  if (config.dryRun) {
    console.log(`Would generate: ${totalQuestions} questions`);
  } else {
    console.log(`Generated: ${generated} questions`);
    console.log(`Skipped (already cached): ${skipped} combinations`);
    console.log(`Errors: ${errors}`);
  }

  console.log('\n✓ Done!');
}

main().catch(console.error);
