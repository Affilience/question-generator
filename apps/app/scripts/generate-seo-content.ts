#!/usr/bin/env npx tsx

// Load environment variables from .env files
import 'dotenv/config';
import { config } from 'dotenv';
import { resolve } from 'path';

// Also load .env.local if it exists
config({ path: resolve(process.cwd(), '.env.local') });

/**
 * Batch SEO Content Generator
 *
 * Generates unique introduction text and sample questions for all subtopics
 * to ensure differentiated content across the ~28,000+ SEO pages.
 *
 * Usage:
 *   npx tsx scripts/generate-seo-content.ts [options]
 *
 * Options:
 *   --level <gcse|a-level>     Filter by qualification level
 *   --subject <maths|physics|...> Filter by subject
 *   --board <aqa|edexcel|ocr>  Filter by exam board
 *   --batch <number>           Number of subtopics to process (default: 10)
 *   --delay <ms>               Delay between API calls (default: 1000)
 *   --dry-run                  Preview what would be generated without making changes
 *   --skip-existing            Skip subtopics that already have content (default: true)
 *
 * Examples:
 *   npx tsx scripts/generate-seo-content.ts --level gcse --subject maths --batch 50
 *   npx tsx scripts/generate-seo-content.ts --board aqa --batch 100 --delay 500
 */

import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

// Types
interface SubtopicParams {
  level: string;
  subject: string;
  examBoard: string;
  topic: string;
  subtopic: string;
}

interface GeneratedContent {
  title: string;
  metaDescription: string;
  introduction: string;
  questions: {
    difficulty: 'easy' | 'medium' | 'hard';
    content: string;
    solution: string;
    marks: number;
  }[];
}

interface ExistingContent {
  level: string;
  subject: string;
  exam_board: string;
  topic_slug: string;
  subtopic_slug: string;
}

// Configuration
const CONFIG = {
  openaiModel: 'gpt-4o-mini',
  maxRetries: 3,
  retryDelay: 5000,
  defaultBatchSize: 10,
  defaultDelay: 1000,
};

// Initialize clients
function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }
  return new OpenAI({ apiKey });
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables are required');
  }

  return createClient(url, key);
}

// Subject and level display names
const SUBJECT_NAMES: Record<string, string> = {
  'maths': 'Mathematics',
  'physics': 'Physics',
  'chemistry': 'Chemistry',
  'biology': 'Biology',
  'computer-science': 'Computer Science',
  'economics': 'Economics',
  'business': 'Business Studies',
  'psychology': 'Psychology',
  'geography': 'Geography',
  'history': 'History',
  'english-literature': 'English Literature',
  'further-maths': 'Further Mathematics',
};

const BOARD_NAMES: Record<string, string> = {
  'aqa': 'AQA',
  'edexcel': 'Edexcel',
  'ocr': 'OCR',
};

const LEVEL_NAMES: Record<string, string> = {
  'gcse': 'GCSE',
  'a-level': 'A-Level',
};

// Generate the prompt for content generation
function getContentGenerationPrompt(params: SubtopicParams, topicName: string): string {
  const levelName = LEVEL_NAMES[params.level] || params.level.toUpperCase();
  const subjectName = SUBJECT_NAMES[params.subject] || params.subject;
  const boardName = BOARD_NAMES[params.examBoard] || params.examBoard.toUpperCase();
  const subtopicName = unslugify(params.subtopic);

  return `You are an expert UK ${levelName} ${subjectName} teacher creating educational content for the ${boardName} exam board.

Generate SEO-optimized educational content for the subtopic "${subtopicName}" within the topic "${topicName}".

Requirements:
1. Write a comprehensive introduction (200-350 words) that:
   - Explains what this subtopic covers and why it's important
   - Describes key concepts students need to understand
   - Mentions how it typically appears in ${boardName} ${levelName} exams
   - Includes relevant formulas, definitions, or key facts
   - Uses British English spelling and terminology

2. Create 3 unique exam-style practice questions:
   - Question 1 (Easy): 2-3 marks, tests basic understanding
   - Question 2 (Medium): 4-5 marks, requires application of concepts
   - Question 3 (Hard): 5-6 marks, challenging multi-step problem

   Each question must:
   - Match ${boardName} ${levelName} exam style and format
   - Include realistic context or scenarios
   - Have a complete worked solution with clear steps
   - Be completely unique (not copied from past papers)

3. Create an SEO-optimized meta description (150-160 characters) that includes the key terms students would search for.

Respond in JSON format:
{
  "title": "${boardName} ${levelName} ${subjectName}: ${subtopicName} Practice Questions",
  "metaDescription": "Practice ${boardName} ${levelName} ${subjectName} ${subtopicName} with exam-style questions and step-by-step solutions...",
  "introduction": "Full introduction text here...",
  "questions": [
    {
      "difficulty": "easy",
      "marks": 3,
      "content": "Question text here...",
      "solution": "**Step 1:** ...\\n**Step 2:** ...\\n**Answer:** ..."
    },
    {
      "difficulty": "medium",
      "marks": 4,
      "content": "Question text here...",
      "solution": "Full worked solution..."
    },
    {
      "difficulty": "hard",
      "marks": 6,
      "content": "Question text here...",
      "solution": "Full worked solution..."
    }
  ]
}`;
}

// Helper to convert slug back to readable name
function unslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => {
      // Handle special cases
      if (word === 'h') return '(H)';
      if (word === '2d') return '2D';
      if (word === '3d') return '3D';
      // Capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(' (h)', ' (H)')
    .replace(/\s+\(h\)$/i, ' (H)');
}

// Slugify helper (matching the one in utils.ts)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Get all subtopic params (imported logic from seo/utils.ts)
async function getAllSubtopicParams(): Promise<SubtopicParams[]> {
  // Import the actual function from the app
  const { getAllSubtopicParams: getParams } = await import('../src/lib/seo/utils');
  return getParams();
}

// Get topic name from topic ID
async function getTopicName(topicId: string, subject: string, examBoard: string, level: string): Promise<string> {
  const { getTopicByIdSubjectBoardAndLevel } = await import('../src/lib/topics');
  const topic = getTopicByIdSubjectBoardAndLevel(topicId, subject as any, examBoard as any, level as any);
  return topic?.name || topicId;
}

// Get existing content from database
async function getExistingContent(supabase: ReturnType<typeof getSupabase>): Promise<Set<string>> {
  const { data, error } = await supabase
    .from('seo_content')
    .select('level, subject, exam_board, topic_slug, subtopic_slug');

  if (error) {
    console.error('Error fetching existing content:', error);
    return new Set();
  }

  const existing = new Set<string>();
  for (const row of (data || [])) {
    const key = `${row.level}:${row.subject}:${row.exam_board}:${row.topic_slug}:${row.subtopic_slug}`;
    existing.add(key);
  }

  return existing;
}

// Generate content using OpenAI
async function generateContent(
  openai: OpenAI,
  params: SubtopicParams,
  topicName: string
): Promise<GeneratedContent> {
  const prompt = getContentGenerationPrompt(params, topicName);

  const completion = await openai.chat.completions.create({
    model: CONFIG.openaiModel,
    messages: [
      {
        role: 'system',
        content: 'You are an expert UK exam question writer. Generate high-quality, unique educational content. Always respond with valid JSON.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.7,
    max_tokens: 3000,
  });

  const responseContent = completion.choices[0]?.message?.content;
  if (!responseContent) {
    throw new Error('No response from OpenAI');
  }

  return JSON.parse(responseContent) as GeneratedContent;
}

// Save content to database
async function saveContent(
  supabase: ReturnType<typeof getSupabase>,
  params: SubtopicParams,
  content: GeneratedContent
): Promise<void> {
  // Insert SEO content
  const { data: seoContent, error: seoError } = await supabase
    .from('seo_content')
    .insert({
      level: params.level,
      subject: params.subject,
      exam_board: params.examBoard,
      topic_slug: params.topic,
      subtopic_slug: params.subtopic,
      title: content.title,
      meta_description: content.metaDescription,
      introduction: content.introduction,
    })
    .select('id')
    .single();

  if (seoError) {
    throw new Error(`Failed to insert SEO content: ${seoError.message}`);
  }

  // Insert sample questions
  const questions = content.questions.map((q, index) => ({
    subtopic_id: seoContent.id,
    difficulty: q.difficulty,
    content: q.content,
    solution: q.solution,
    marks: q.marks,
    display_order: index + 1,
  }));

  const { error: questionsError } = await supabase
    .from('sample_questions')
    .insert(questions);

  if (questionsError) {
    // Rollback SEO content if questions fail
    await supabase.from('seo_content').delete().eq('id', seoContent.id);
    throw new Error(`Failed to insert questions: ${questionsError.message}`);
  }
}

// Sleep helper
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Retry helper
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = CONFIG.maxRetries,
  delay: number = CONFIG.retryDelay
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        console.log(`  Attempt ${attempt} failed, retrying in ${delay}ms...`);
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

// Parse command line arguments
function parseArgs(): {
  level?: string;
  subject?: string;
  board?: string;
  batch: number;
  delay: number;
  dryRun: boolean;
  skipExisting: boolean;
} {
  const args = process.argv.slice(2);
  const result = {
    level: undefined as string | undefined,
    subject: undefined as string | undefined,
    board: undefined as string | undefined,
    batch: CONFIG.defaultBatchSize,
    delay: CONFIG.defaultDelay,
    dryRun: false,
    skipExisting: true,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--level':
        result.level = args[++i];
        break;
      case '--subject':
        result.subject = args[++i];
        break;
      case '--board':
        result.board = args[++i];
        break;
      case '--batch':
        result.batch = parseInt(args[++i], 10);
        break;
      case '--delay':
        result.delay = parseInt(args[++i], 10);
        break;
      case '--dry-run':
        result.dryRun = true;
        break;
      case '--no-skip-existing':
        result.skipExisting = false;
        break;
      case '--help':
        console.log(`
SEO Content Generator - Generate unique content for all subtopic pages

Usage: npx tsx scripts/generate-seo-content.ts [options]

Options:
  --level <gcse|a-level>        Filter by qualification level
  --subject <name>              Filter by subject (maths, physics, etc.)
  --board <aqa|edexcel|ocr>     Filter by exam board
  --batch <number>              Number of subtopics to process (default: ${CONFIG.defaultBatchSize})
  --delay <ms>                  Delay between API calls in ms (default: ${CONFIG.defaultDelay})
  --dry-run                     Preview what would be generated
  --no-skip-existing            Re-generate content for existing subtopics
  --help                        Show this help message

Examples:
  npx tsx scripts/generate-seo-content.ts --level gcse --subject maths --batch 50
  npx tsx scripts/generate-seo-content.ts --board aqa --batch 100
  npx tsx scripts/generate-seo-content.ts --dry-run --batch 5
        `);
        process.exit(0);
    }
  }

  return result;
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('SEO Content Generator');
  console.log('='.repeat(60));

  const args = parseArgs();

  console.log('\nConfiguration:');
  console.log(`  Level filter: ${args.level || 'all'}`);
  console.log(`  Subject filter: ${args.subject || 'all'}`);
  console.log(`  Board filter: ${args.board || 'all'}`);
  console.log(`  Batch size: ${args.batch}`);
  console.log(`  Delay: ${args.delay}ms`);
  console.log(`  Dry run: ${args.dryRun}`);
  console.log(`  Skip existing: ${args.skipExisting}`);

  // Initialize clients (lazy for dry run)
  let openai: OpenAI | null = null;
  let supabase: ReturnType<typeof getSupabase> | null = null;

  const initClients = () => {
    if (!openai || !supabase) {
      try {
        openai = getOpenAI();
        supabase = getSupabase();
      } catch (error) {
        console.error('\nError:', (error as Error).message);
        console.error('\nMake sure you have the following environment variables set:');
        console.error('  - OPENAI_API_KEY');
        console.error('  - NEXT_PUBLIC_SUPABASE_URL');
        console.error('  - SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)');
        process.exit(1);
      }
    }
    return { openai: openai!, supabase: supabase! };
  };

  // Get all subtopic params
  console.log('\nLoading subtopic parameters...');
  let allParams = await getAllSubtopicParams();
  console.log(`  Found ${allParams.length} total subtopics`);

  // Apply filters
  if (args.level) {
    allParams = allParams.filter(p => p.level === args.level);
    console.log(`  After level filter: ${allParams.length}`);
  }
  if (args.subject) {
    allParams = allParams.filter(p => p.subject === args.subject);
    console.log(`  After subject filter: ${allParams.length}`);
  }
  if (args.board) {
    allParams = allParams.filter(p => p.examBoard === args.board);
    console.log(`  After board filter: ${allParams.length}`);
  }

  // Get existing content (only if not dry run)
  let existing = new Set<string>();
  if (args.skipExisting && !args.dryRun) {
    console.log('\nChecking existing content...');
    const { supabase: sb } = initClients();
    existing = await getExistingContent(sb);
    console.log(`  Found ${existing.size} subtopics with existing content`);

    // Filter out existing
    const beforeFilter = allParams.length;
    allParams = allParams.filter(p => {
      const key = `${p.level}:${p.subject}:${p.examBoard}:${p.topic}:${p.subtopic}`;
      return !existing.has(key);
    });
    console.log(`  ${beforeFilter - allParams.length} subtopics already have content`);
  }

  // Limit to batch size
  const toProcess = allParams.slice(0, args.batch);
  console.log(`\nWill process ${toProcess.length} subtopics`);

  if (toProcess.length === 0) {
    console.log('\nNo subtopics to process. Exiting.');
    return;
  }

  if (args.dryRun) {
    console.log('\n[DRY RUN] Would generate content for:');
    for (const params of toProcess) {
      console.log(`  - ${params.level}/${params.subject}/${params.examBoard}/${params.topic}/${params.subtopic}`);
    }
    return;
  }

  // Process subtopics
  console.log('\n' + '='.repeat(60));
  console.log('Starting content generation...');
  console.log('='.repeat(60));

  // Initialize clients now that we need them
  const { openai: ai, supabase: db } = initClients();

  let processed = 0;
  let succeeded = 0;
  let failed = 0;
  const failures: { params: SubtopicParams; error: string }[] = [];

  for (const params of toProcess) {
    processed++;
    const path = `${params.level}/${params.subject}/${params.examBoard}/${params.topic}/${params.subtopic}`;
    console.log(`\n[${processed}/${toProcess.length}] Processing: ${path}`);

    try {
      // Get topic name
      const topicName = await getTopicName(params.topic, params.subject, params.examBoard, params.level);

      // Generate content with retry
      console.log('  Generating content...');
      const content = await withRetry(() => generateContent(ai, params, topicName));

      // Save to database
      console.log('  Saving to database...');
      await saveContent(db, params, content);

      succeeded++;
      console.log('  Done!');

      // Delay before next request
      if (processed < toProcess.length) {
        await sleep(args.delay);
      }
    } catch (error) {
      failed++;
      const errorMessage = (error as Error).message;
      failures.push({ params, error: errorMessage });
      console.error(`  ERROR: ${errorMessage}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Generation Complete');
  console.log('='.repeat(60));
  console.log(`  Processed: ${processed}`);
  console.log(`  Succeeded: ${succeeded}`);
  console.log(`  Failed: ${failed}`);

  if (failures.length > 0) {
    console.log('\nFailed subtopics:');
    for (const { params, error } of failures) {
      console.log(`  - ${params.level}/${params.subject}/${params.examBoard}/${params.topic}/${params.subtopic}`);
      console.log(`    Error: ${error}`);
    }
  }

  // Estimate remaining
  const remainingCount = allParams.length - args.batch;
  if (remainingCount > 0) {
    console.log(`\nRemaining subtopics without content: ${remainingCount}`);
    console.log(`Run again to process the next batch.`);
  } else {
    console.log(`\nAll filtered subtopics now have content!`);
  }
}

// Run
main().catch(console.error);
