/**
 * Pre-generate questions to warm the cache (HIGH QUALITY VERSION)
 *
 * This script generates questions using OpenAI GPT-4o-mini with FULL exam board prompts
 * - Same model as live generation
 * - Same prompts as live generation
 * - Same quality as live generation
 * - Questions served instantly from cache
 *
 * Usage:
 *   npx tsx scripts/pre-generate-questions.ts [options]
 *
 * Options:
 *   --subject=maths|physics|chemistry|...  Only generate for specific subject
 *   --level=gcse|a-level                   Only generate for specific level
 *   --board=aqa|edexcel|ocr                Only generate for specific exam board
 *   --topic=topic-id                       Only generate for specific topic
 *   --count=N                              Questions per combination (default: 5)
 *   --dry-run                              Show what would be generated without doing it
 *   --fast                                 Use Groq for faster but lower quality (not recommended)
 */

import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(__dirname, '../.env.local') });

import OpenAI from 'openai';
import Groq from 'groq-sdk';
import { Redis } from '@upstash/redis';
import { Difficulty, Topic, Subject, ExamBoard, QualificationLevel } from '../src/types';
import { getTopicsBySubjectBoardAndLevel } from '../src/lib/topics';
import { getSystemPromptForSubject, getUserPromptForSubject } from '../src/lib/prompt-router';

// Types
interface CachedQuestion {
  content: string;
  solution: string;
  marks: number;
  markScheme: string[];
  difficulty: Difficulty;
  subtopic: string;
  cachedAt: number;
}

interface GenerationConfig {
  subject?: Subject;
  level?: QualificationLevel;
  board?: ExamBoard;
  topicId?: string;
  questionsPerCombo: number;
  dryRun: boolean;
  useFastMode: boolean;
}

const DIFFICULTIES: Difficulty[] = ['easy', 'medium', 'hard'];

// All subjects available in the system
const ALL_SUBJECTS: Subject[] = [
  'maths', 'physics', 'chemistry', 'biology',
  'computer-science', 'economics', 'business',
  'psychology', 'geography', 'history', 'english-literature',
  'further-maths'
];

const ALL_LEVELS: QualificationLevel[] = ['gcse', 'a-level'];
const ALL_BOARDS: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];

// Initialize clients
function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }
  return new OpenAI({ apiKey });
}

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

function getCacheKey(subject: string, level: string, board: string, topicId: string, subtopic: string, difficulty: Difficulty): string {
  const normalizedSubtopic = subtopic
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .substring(0, 50);
  return `q:${subject}:${level}:${board}:${topicId}:${normalizedSubtopic}:${difficulty}`;
}

async function generateQuestionOpenAI(
  openai: OpenAI,
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topic: Topic,
  subtopic: string,
  difficulty: Difficulty
): Promise<CachedQuestion | null> {
  // Use the SAME prompt router as live generation
  const systemPrompt = getSystemPromptForSubject(subject, level, board, topic, difficulty, subtopic);
  const userPrompt = getUserPromptForSubject(subject, level, board, topic, difficulty, subtopic);

  if (!systemPrompt || !userPrompt) {
    console.error(`  No prompt available for ${subject}/${level}/${board}`);
    return null;
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 2500,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) return null;

    const parsed = JSON.parse(content);

    return {
      content: parsed.content || '',
      solution: parsed.solution || '',
      marks: parsed.marks || 3,
      markScheme: Array.isArray(parsed.markScheme) ? parsed.markScheme : [],
      difficulty,
      subtopic,
      cachedAt: Date.now(),
    };
  } catch (error) {
    console.error(`  Error:`, error instanceof Error ? error.message : error);
    return null;
  }
}

async function generateQuestionGroq(
  groq: Groq,
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topic: Topic,
  subtopic: string,
  difficulty: Difficulty
): Promise<CachedQuestion | null> {
  // Use the SAME prompt router as live generation
  const systemPrompt = getSystemPromptForSubject(subject, level, board, topic, difficulty, subtopic);
  const userPrompt = getUserPromptForSubject(subject, level, board, topic, difficulty, subtopic);

  if (!systemPrompt || !userPrompt) {
    console.error(`  No prompt available for ${subject}/${level}/${board}`);
    return null;
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 2500,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) return null;

    const parsed = JSON.parse(content);

    return {
      content: parsed.content || '',
      solution: parsed.solution || '',
      marks: parsed.marks || 3,
      markScheme: Array.isArray(parsed.markScheme) ? parsed.markScheme : [],
      difficulty,
      subtopic,
      cachedAt: Date.now(),
    };
  } catch (error) {
    console.error(`  Error:`, error instanceof Error ? error.message : error);
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

async function addToCache(redis: Redis, key: string, question: CachedQuestion): Promise<boolean> {
  try {
    const existing = await redis.get<CachedQuestion[]>(key) || [];

    // Check for duplicates
    const isDuplicate = existing.some(q =>
      q.content.substring(0, 100) === question.content.substring(0, 100)
    );
    if (isDuplicate) {
      return false;
    }

    const updated = [question, ...existing].slice(0, 20);
    await redis.set(key, updated, { ex: 60 * 24 * 60 * 60 }); // 60 days
    return true;
  } catch (error) {
    console.error(`  Cache error:`, error);
    return false;
  }
}

function parseArgs(): GenerationConfig {
  const args = process.argv.slice(2);
  const config: GenerationConfig = {
    questionsPerCombo: 5,
    dryRun: false,
    useFastMode: false,
  };

  for (const arg of args) {
    if (arg.startsWith('--subject=')) {
      config.subject = arg.split('=')[1] as Subject;
    } else if (arg.startsWith('--level=')) {
      config.level = arg.split('=')[1] as QualificationLevel;
    } else if (arg.startsWith('--board=')) {
      config.board = arg.split('=')[1] as ExamBoard;
    } else if (arg.startsWith('--topic=')) {
      config.topicId = arg.split('=')[1];
    } else if (arg.startsWith('--count=')) {
      config.questionsPerCombo = parseInt(arg.split('=')[1], 10);
    } else if (arg === '--dry-run') {
      config.dryRun = true;
    } else if (arg === '--fast') {
      config.useFastMode = true;
    }
  }

  return config;
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const config = parseArgs();

  console.log('🚀 Question Pre-Generation Script (High Quality)');
  console.log('================================================\n');

  if (config.useFastMode) {
    console.log('⚠️  FAST MODE: Using Groq llama-3.3-70b (slightly lower quality)\n');
  } else {
    console.log('✨ QUALITY MODE: Using OpenAI GPT-4o-mini (same as live generation)\n');
  }

  if (config.dryRun) {
    console.log('📋 DRY RUN MODE - No questions will be generated\n');
  }

  let openai: OpenAI | null = null;
  let groq: Groq | null = null;
  let redis: Redis | null = null;

  if (!config.dryRun) {
    try {
      if (config.useFastMode) {
        groq = getGroqClient();
        console.log('✓ Connected to Groq');
      } else {
        openai = getOpenAIClient();
        console.log('✓ Connected to OpenAI');
      }
      redis = getRedisClient();
      console.log('✓ Connected to Redis\n');
    } catch (error) {
      console.error('Failed to initialize:', error);
      process.exit(1);
    }
  }

  // Statistics
  let totalCombinations = 0;
  let generated = 0;
  let skipped = 0;
  let errors = 0;
  let noTopics = 0;
  const startTime = Date.now();

  const subjects = config.subject ? [config.subject] : ALL_SUBJECTS;
  const levels = config.level ? [config.level] : ALL_LEVELS;
  const boards = config.board ? [config.board] : ALL_BOARDS;

  for (const subject of subjects) {
    for (const level of levels) {
      for (const board of boards) {
        // Get topics for this combination
        const topics = getTopicsBySubjectBoardAndLevel(subject, board, level);

        if (topics.length === 0) {
          noTopics++;
          continue;
        }

        // Filter by topic ID if specified
        const filteredTopics = config.topicId
          ? topics.filter(t => t.id === config.topicId)
          : topics;

        if (filteredTopics.length === 0) continue;

        console.log(`\n📚 ${subject.toUpperCase()} - ${level.toUpperCase()} - ${board.toUpperCase()}`);
        console.log(`   ${filteredTopics.length} topics, ${filteredTopics.reduce((sum, t) => sum + t.subtopics.length, 0)} subtopics`);

        for (const topic of filteredTopics) {
          if (config.dryRun) {
            console.log(`\n   📖 ${topic.name}`);
            for (const subtopic of topic.subtopics) {
              console.log(`      - ${subtopic}`);
            }
            totalCombinations += topic.subtopics.length * DIFFICULTIES.length;
            continue;
          }

          for (const subtopic of topic.subtopics) {
            for (const difficulty of DIFFICULTIES) {
              totalCombinations++;
              const cacheKey = getCacheKey(subject, level, board, topic.id, subtopic, difficulty);

              // Check existing cache
              const existing = await getCacheCount(redis!, cacheKey);
              const needed = Math.max(0, config.questionsPerCombo - existing);

              if (needed === 0) {
                skipped++;
                continue;
              }

              const shortSubtopic = subtopic.length > 30 ? subtopic.substring(0, 27) + '...' : subtopic;
              process.stdout.write(`   ${shortSubtopic.padEnd(30)} [${difficulty.substring(0, 1).toUpperCase()}]: `);

              let successCount = 0;
              for (let i = 0; i < needed; i++) {
                const question = config.useFastMode
                  ? await generateQuestionGroq(groq!, subject, level, board, topic, subtopic, difficulty)
                  : await generateQuestionOpenAI(openai!, subject, level, board, topic, subtopic, difficulty);

                if (question) {
                  const added = await addToCache(redis!, cacheKey, question);
                  if (added) {
                    generated++;
                    successCount++;
                    process.stdout.write('✓');
                  } else {
                    process.stdout.write('·'); // Duplicate
                  }
                } else {
                  errors++;
                  process.stdout.write('✗');
                }

                // Rate limiting
                await sleep(config.useFastMode ? 200 : 500);
              }

              console.log(` +${successCount}/${needed} (${existing} cached)`);
            }
          }
        }
      }
    }
  }

  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log('\n================================================');
  console.log('📊 Summary');
  console.log('================================================');
  console.log(`Mode: ${config.useFastMode ? 'Fast (Groq)' : 'Quality (OpenAI GPT-4o-mini)'}`);
  console.log(`Duration: ${duration} minutes`);
  console.log(`Combinations checked: ${totalCombinations}`);

  if (config.dryRun) {
    console.log(`Would generate: ${totalCombinations * config.questionsPerCombo} questions (max)`);
  } else {
    console.log(`Generated: ${generated} questions`);
    console.log(`Skipped (enough cached): ${skipped}`);
    console.log(`Errors: ${errors}`);
    if (generated > 0) {
      const costEstimate = config.useFastMode
        ? (generated * 0.0005).toFixed(2)
        : (generated * 0.002).toFixed(2);
      console.log(`Estimated cost: ~$${costEstimate}`);
    }
  }

  console.log('\n✅ Done!');
}

main().catch(console.error);
