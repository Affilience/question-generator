#!/usr/bin/env npx tsx

/**
 * Claude Haiku Parallel SEO Content Generator
 *
 * Generates SEO content for subtopics using Claude 3 Haiku model
 * with parallel processing for speed and cost efficiency.
 *
 * Cost estimate: ~$2 for 1000 subtopics with Haiku
 * Time estimate: ~5-10 minutes with 20 parallel requests
 *
 * Usage:
 *   npx tsx scripts/generate-seo-claude-parallel.ts
 *   npx tsx scripts/generate-seo-claude-parallel.ts --batch 100 --parallel 10
 *   npx tsx scripts/generate-seo-claude-parallel.ts --dry-run
 */

import 'dotenv/config';
import { config } from 'dotenv';
import { resolve } from 'path';
import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

// Load .env.local
config({ path: resolve(process.cwd(), '.env.local') });

// Types (boardless - no examBoard field)
interface IndexedSubtopic {
  level: string;
  subject: string;
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

// Configuration
const CONFIG = {
  model: 'claude-3-haiku-20240307',
  maxParallel: 20,
  maxRetries: 3,
  retryDelay: 2000,
  defaultBatch: 1500,
};

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
  'english-language': 'English Language',
  'further-maths': 'Further Mathematics',
  'religious-studies': 'Religious Studies',
  'french': 'French',
  'spanish': 'Spanish',
  'sociology': 'Sociology',
};

const LEVEL_NAMES: Record<string, string> = {
  'gcse': 'GCSE',
  'a-level': 'A-Level',
};

// Initialize clients
function getAnthropic(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is required');
  }
  return new Anthropic({ apiKey });
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
  }

  return createClient(url, key);
}

// Helper to convert slug to readable name
function unslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => {
      if (word === '2d') return '2D';
      if (word === '3d') return '3D';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Generate prompt for Claude
function getPrompt(subtopic: IndexedSubtopic): string {
  const levelName = LEVEL_NAMES[subtopic.level] || subtopic.level.toUpperCase();
  const subjectName = SUBJECT_NAMES[subtopic.subject] || unslugify(subtopic.subject);
  const topicName = unslugify(subtopic.topic);
  const subtopicName = unslugify(subtopic.subtopic);

  return `You are an expert UK ${levelName} ${subjectName} teacher creating educational content.

Generate SEO content for "${subtopicName}" (part of ${topicName}) for ${levelName} ${subjectName}.

Requirements:
1. Introduction (300-500 words):
   - Explain what this subtopic covers and why it matters
   - Key concepts, definitions, formulas as relevant
   - How it appears in UK exams
   - Use British English

2. Create 3 exam-style practice questions:
   - Easy (2-3 marks): Basic understanding
   - Medium (4-5 marks): Application
   - Hard (5-6 marks): Multi-step problem

   Each needs complete worked solutions with steps.

3. Meta description (150-160 chars) with key search terms.

Respond ONLY with valid JSON (no markdown code blocks):
{
  "title": "${levelName} ${subjectName}: ${subtopicName} Practice Questions",
  "metaDescription": "Practice ${levelName} ${subjectName} ${subtopicName}...",
  "introduction": "Full introduction...",
  "questions": [
    {"difficulty": "easy", "marks": 3, "content": "...", "solution": "..."},
    {"difficulty": "medium", "marks": 4, "content": "...", "solution": "..."},
    {"difficulty": "hard", "marks": 6, "content": "...", "solution": "..."}
  ]
}`;
}

// Generate content using Claude
async function generateContent(
  anthropic: Anthropic,
  subtopic: IndexedSubtopic
): Promise<GeneratedContent> {
  const message = await anthropic.messages.create({
    model: CONFIG.model,
    max_tokens: 3000,
    messages: [
      {
        role: 'user',
        content: getPrompt(subtopic),
      },
    ],
  });

  const textBlock = message.content.find(block => block.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No text response from Claude');
  }

  // Parse JSON (handle potential markdown code blocks)
  let jsonText = textBlock.text.trim();
  if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  }

  return JSON.parse(jsonText) as GeneratedContent;
}

// Save content to database
async function saveContent(
  supabase: ReturnType<typeof getSupabase>,
  subtopic: IndexedSubtopic,
  content: GeneratedContent
): Promise<void> {
  // Insert SEO content (using 'aqa' as default exam board for boardless URLs)
  const { data: seoContent, error: seoError } = await supabase
    .from('seo_content')
    .insert({
      level: subtopic.level,
      subject: subtopic.subject,
      exam_board: 'aqa', // Default for boardless URLs
      topic_slug: subtopic.topic,
      subtopic_slug: subtopic.subtopic,
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
    await supabase.from('seo_content').delete().eq('id', seoContent.id);
    throw new Error(`Failed to insert questions: ${questionsError.message}`);
  }
}

// Get existing content keys from database
async function getExistingKeys(supabase: ReturnType<typeof getSupabase>): Promise<Set<string>> {
  const { data, error } = await supabase
    .from('seo_content')
    .select('level, subject, topic_slug, subtopic_slug');

  if (error) {
    console.error('Error fetching existing content:', error);
    return new Set();
  }

  const existing = new Set<string>();
  for (const row of (data || [])) {
    // Key format matches indexed pages
    const key = `${row.level}:${row.subject}:${row.topic_slug}:${row.subtopic_slug}`;
    existing.add(key);
  }

  return existing;
}

// Sleep helper
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Retry helper
async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = CONFIG.maxRetries
): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        const delay = CONFIG.retryDelay * attempt;
        console.log(`    Retry ${attempt}/${maxRetries} in ${delay}ms...`);
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

// Process a batch of subtopics in parallel
async function processBatch(
  anthropic: Anthropic,
  supabase: ReturnType<typeof getSupabase>,
  batch: IndexedSubtopic[],
  startIndex: number,
  total: number
): Promise<{ succeeded: number; failed: number; failures: string[] }> {
  const results = await Promise.allSettled(
    batch.map(async (subtopic, i) => {
      const index = startIndex + i + 1;
      const path = `${subtopic.level}/${subtopic.subject}/${subtopic.topic}/${subtopic.subtopic}`;

      try {
        const content = await withRetry(() => generateContent(anthropic, subtopic));
        await saveContent(supabase, subtopic, content);
        process.stdout.write(`\r[${index}/${total}] ✓ ${path.substring(0, 60).padEnd(60)}`);
        return { success: true, path };
      } catch (error) {
        const errorMsg = (error as Error).message;
        console.log(`\n[${index}/${total}] ✗ ${path}: ${errorMsg}`);
        return { success: false, path, error: errorMsg };
      }
    })
  );

  let succeeded = 0;
  let failed = 0;
  const failures: string[] = [];

  for (const result of results) {
    if (result.status === 'fulfilled' && result.value.success) {
      succeeded++;
    } else {
      failed++;
      if (result.status === 'fulfilled') {
        failures.push(`${result.value.path}: ${result.value.error}`);
      } else {
        failures.push(`Unknown error: ${result.reason}`);
      }
    }
  }

  return { succeeded, failed, failures };
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    batch: CONFIG.defaultBatch,
    parallel: CONFIG.maxParallel,
    dryRun: false,
    level: undefined as string | undefined,
    subject: undefined as string | undefined,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--batch':
        result.batch = parseInt(args[++i], 10);
        break;
      case '--parallel':
        result.parallel = parseInt(args[++i], 10);
        break;
      case '--dry-run':
        result.dryRun = true;
        break;
      case '--level':
        result.level = args[++i];
        break;
      case '--subject':
        result.subject = args[++i];
        break;
      case '--help':
        console.log(`
Claude Haiku Parallel SEO Content Generator

Usage: npx tsx scripts/generate-seo-claude-parallel.ts [options]

Options:
  --batch <number>     Max subtopics to process (default: ${CONFIG.defaultBatch})
  --parallel <number>  Concurrent requests (default: ${CONFIG.maxParallel})
  --level <string>     Filter by level (gcse, a-level)
  --subject <string>   Filter by subject
  --dry-run           Preview without generating
  --help              Show this help

Examples:
  npx tsx scripts/generate-seo-claude-parallel.ts
  npx tsx scripts/generate-seo-claude-parallel.ts --batch 500 --parallel 15
  npx tsx scripts/generate-seo-claude-parallel.ts --level gcse --subject maths
        `);
        process.exit(0);
    }
  }

  return result;
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('Claude Haiku Parallel SEO Content Generator');
  console.log('='.repeat(60));

  const args = parseArgs();

  console.log('\nConfiguration:');
  console.log(`  Model: ${CONFIG.model}`);
  console.log(`  Max batch: ${args.batch}`);
  console.log(`  Parallel requests: ${args.parallel}`);
  console.log(`  Level filter: ${args.level || 'all'}`);
  console.log(`  Subject filter: ${args.subject || 'all'}`);
  console.log(`  Dry run: ${args.dryRun}`);

  // Load indexed pages
  console.log('\nLoading indexed subtopics...');
  const { INDEXED_BOARDLESS_SUBTOPICS } = await import('../src/lib/seo/indexed-pages');
  let subtopics: IndexedSubtopic[] = INDEXED_BOARDLESS_SUBTOPICS;
  console.log(`  Found ${subtopics.length} indexed subtopics`);

  // Apply filters
  if (args.level) {
    subtopics = subtopics.filter(s => s.level === args.level);
    console.log(`  After level filter: ${subtopics.length}`);
  }
  if (args.subject) {
    subtopics = subtopics.filter(s => s.subject === args.subject);
    console.log(`  After subject filter: ${subtopics.length}`);
  }

  // For dry-run, show what would be processed without needing credentials
  if (args.dryRun) {
    const toProcess = subtopics.slice(0, args.batch);
    const estimatedCost = (toProcess.length * 0.002).toFixed(2);
    console.log(`\nWould process: ${toProcess.length} subtopics (before filtering existing)`);
    console.log(`Estimated max cost: ~$${estimatedCost} (Haiku)`);
    console.log('\n[DRY RUN] Sample subtopics:');
    for (const s of toProcess.slice(0, 20)) {
      console.log(`  - ${s.level}/${s.subject}/${s.topic}/${s.subtopic}`);
    }
    if (toProcess.length > 20) {
      console.log(`  ... and ${toProcess.length - 20} more`);
    }
    return;
  }

  // Initialize clients (only needed for actual run)
  let anthropic: Anthropic;
  let supabase: ReturnType<typeof getSupabase>;

  try {
    anthropic = getAnthropic();
    supabase = getSupabase();
  } catch (error) {
    console.error('\nError:', (error as Error).message);
    console.error('\nMake sure you have:');
    console.error('  - ANTHROPIC_API_KEY in .env.local');
    console.error('  - NEXT_PUBLIC_SUPABASE_URL in .env.local');
    console.error('  - SUPABASE_SERVICE_ROLE_KEY in .env.local');
    process.exit(1);
  }

  // Get existing content
  console.log('\nChecking existing content...');
  const existingKeys = await getExistingKeys(supabase);
  console.log(`  Found ${existingKeys.size} subtopics already in database`);

  // Filter out existing
  const missing = subtopics.filter(s => {
    const key = `${s.level}:${s.subject}:${s.topic}:${s.subtopic}`;
    return !existingKeys.has(key);
  });
  console.log(`  Missing content: ${missing.length} subtopics`);

  // Limit to batch size
  const toProcess = missing.slice(0, args.batch);
  console.log(`\nWill process: ${toProcess.length} subtopics`);

  if (toProcess.length === 0) {
    console.log('\nNo subtopics to process. All done!');
    return;
  }

  // Estimate cost
  const estimatedCost = (toProcess.length * 0.002).toFixed(2);
  console.log(`Estimated cost: ~$${estimatedCost} (Haiku)`);

  // Process in parallel batches
  console.log('\n' + '='.repeat(60));
  console.log('Starting parallel generation...');
  console.log('='.repeat(60) + '\n');

  const startTime = Date.now();
  let totalSucceeded = 0;
  let totalFailed = 0;
  const allFailures: string[] = [];

  // Process in chunks of `parallel` size
  for (let i = 0; i < toProcess.length; i += args.parallel) {
    const batch = toProcess.slice(i, i + args.parallel);
    const { succeeded, failed, failures } = await processBatch(
      anthropic,
      supabase,
      batch,
      i,
      toProcess.length
    );

    totalSucceeded += succeeded;
    totalFailed += failed;
    allFailures.push(...failures);

    // Small delay between batches to avoid rate limiting
    if (i + args.parallel < toProcess.length) {
      await sleep(500);
    }
  }

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  // Summary
  console.log('\n\n' + '='.repeat(60));
  console.log('Generation Complete');
  console.log('='.repeat(60));
  console.log(`  Time elapsed: ${elapsed}s`);
  console.log(`  Processed: ${toProcess.length}`);
  console.log(`  Succeeded: ${totalSucceeded}`);
  console.log(`  Failed: ${totalFailed}`);

  if (allFailures.length > 0) {
    console.log('\nFailures:');
    for (const failure of allFailures.slice(0, 10)) {
      console.log(`  - ${failure}`);
    }
    if (allFailures.length > 10) {
      console.log(`  ... and ${allFailures.length - 10} more`);
    }
  }

  // Remaining
  const remaining = missing.length - toProcess.length;
  if (remaining > 0) {
    console.log(`\nRemaining: ${remaining} subtopics without content`);
    console.log('Run again to process more.');
  } else {
    console.log('\nAll indexed subtopics now have content!');
  }
}

main().catch(console.error);
