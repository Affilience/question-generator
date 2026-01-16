#!/usr/bin/env npx tsx
/**
 * Pre-warm Cache Script
 *
 * Generates questions for popular topics and caches them for instant responses.
 * Run this script periodically (e.g., nightly cron job) to keep cache warm.
 *
 * Usage:
 *   npx tsx scripts/prewarm-cache.ts
 *   npx tsx scripts/prewarm-cache.ts --subject=maths --level=gcse
 *   npx tsx scripts/prewarm-cache.ts --questions=10
 */

import 'dotenv/config';

const API_BASE = process.env.API_BASE_URL || 'http://localhost:3000';
const QUESTIONS_PER_COMBO = parseInt(process.env.PREWARM_QUESTIONS || '5');
const DELAY_BETWEEN_REQUESTS = 500; // ms - avoid rate limiting

// Popular subjects and their configurations
const POPULAR_CONFIGS = [
  // GCSE Sciences - most popular
  { subject: 'maths', level: 'gcse', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'physics', level: 'gcse', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'chemistry', level: 'gcse', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'biology', level: 'gcse', boards: ['aqa', 'edexcel', 'ocr'] },
  // A-Level Sciences
  { subject: 'maths', level: 'a-level', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'physics', level: 'a-level', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'chemistry', level: 'a-level', boards: ['aqa', 'edexcel', 'ocr'] },
  { subject: 'biology', level: 'a-level', boards: ['aqa', 'edexcel', 'ocr'] },
];

const DIFFICULTIES = ['easy', 'medium', 'hard'] as const;

interface Topic {
  id: string;
  name: string;
  subtopics: string[];
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchTopics(subject: string, board: string, level: string): Promise<Topic[]> {
  try {
    // We need to import topics from the app - for now, use a simplified approach
    // In production, this could be an API endpoint or direct import
    const response = await fetch(`${API_BASE}/api/topics?subject=${subject}&board=${board}&level=${level}`);
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

async function generateQuestion(params: {
  topicId: string;
  subtopic: string;
  difficulty: string;
  subject: string;
  examBoard: string;
  qualification: string;
}): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/api/generate-question`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...params,
        skipCache: false, // Allow caching
      }),
    });

    const cacheStatus = response.headers.get('X-Cache');
    return response.ok && cacheStatus !== 'HIT'; // Return true if new question generated
  } catch (error) {
    console.error(`  Error generating question:`, error);
    return false;
  }
}

async function prewarmSubject(config: typeof POPULAR_CONFIGS[0], questionsPerCombo: number) {
  console.log(`\nPre-warming ${config.level.toUpperCase()} ${config.subject}...`);

  let totalGenerated = 0;
  let totalCached = 0;

  for (const board of config.boards) {
    console.log(`  Board: ${board.toUpperCase()}`);

    const topics = await fetchTopics(config.subject, board, config.level);

    if (topics.length === 0) {
      console.log(`    No topics found, skipping...`);
      continue;
    }

    // Take first 5 topics for pre-warming (most commonly accessed)
    const topicsToWarm = topics.slice(0, 5);

    for (const topic of topicsToWarm) {
      // Take first 3 subtopics
      const subtopicsToWarm = topic.subtopics.slice(0, 3);

      for (const subtopic of subtopicsToWarm) {
        for (const difficulty of DIFFICULTIES) {
          for (let i = 0; i < questionsPerCombo; i++) {
            const generated = await generateQuestion({
              topicId: topic.id,
              subtopic,
              difficulty,
              subject: config.subject,
              examBoard: board,
              qualification: config.level,
            });

            if (generated) {
              totalGenerated++;
              process.stdout.write('.');
            } else {
              totalCached++;
              process.stdout.write('c');
            }

            await sleep(DELAY_BETWEEN_REQUESTS);
          }
        }
      }
    }
    console.log('');
  }

  console.log(`  Generated: ${totalGenerated}, Already cached: ${totalCached}`);
  return { generated: totalGenerated, cached: totalCached };
}

async function main() {
  console.log('='.repeat(60));
  console.log('Question Cache Pre-warming Script');
  console.log('='.repeat(60));
  console.log(`API Base: ${API_BASE}`);
  console.log(`Questions per combo: ${QUESTIONS_PER_COMBO}`);

  // Parse command line args
  const args = process.argv.slice(2);
  const subjectFilter = args.find(a => a.startsWith('--subject='))?.split('=')[1];
  const levelFilter = args.find(a => a.startsWith('--level='))?.split('=')[1];
  const questionsArg = args.find(a => a.startsWith('--questions='))?.split('=')[1];
  const questionsPerCombo = questionsArg ? parseInt(questionsArg) : QUESTIONS_PER_COMBO;

  let configs = POPULAR_CONFIGS;

  if (subjectFilter) {
    configs = configs.filter(c => c.subject === subjectFilter);
    console.log(`Filtered to subject: ${subjectFilter}`);
  }

  if (levelFilter) {
    configs = configs.filter(c => c.level === levelFilter);
    console.log(`Filtered to level: ${levelFilter}`);
  }

  let totalGenerated = 0;
  let totalCached = 0;

  const startTime = Date.now();

  for (const config of configs) {
    const result = await prewarmSubject(config, questionsPerCombo);
    totalGenerated += result.generated;
    totalCached += result.cached;
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);

  console.log('\n' + '='.repeat(60));
  console.log('Summary:');
  console.log(`  Total questions generated: ${totalGenerated}`);
  console.log(`  Already in cache: ${totalCached}`);
  console.log(`  Time elapsed: ${elapsed}s`);
  console.log('='.repeat(60));
}

main().catch(console.error);
