#!/usr/bin/env npx tsx

/**
 * Bulk SEO Content Inserter
 *
 * Inserts pre-written SEO content into Supabase.
 * Content is stored in separate data files to avoid size limits.
 *
 * Usage:
 *   npx tsx scripts/bulk-seo-insert.ts
 *   npx tsx scripts/bulk-seo-insert.ts --file data/gcse-maths-number.ts
 */

import 'dotenv/config';
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';

config({ path: resolve(process.cwd(), '.env.local') });

// Types
export interface SeoContent {
  level: string;
  subject: string;
  exam_board: string;
  topic_slug: string;
  subtopic_slug: string;
  title: string;
  meta_description: string;
  introduction: string;
}

export interface SampleQuestion {
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  content: string;
  solution: string;
  display_order: number;
}

export interface SubtopicData {
  content: SeoContent;
  questions: SampleQuestion[];
}

// Initialize Supabase
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Supabase credentials required');
  }

  return createClient(url, key);
}

// Check if content exists
async function contentExists(
  supabase: ReturnType<typeof getSupabase>,
  level: string,
  subject: string,
  examBoard: string,
  topicSlug: string,
  subtopicSlug: string
): Promise<boolean> {
  const { data } = await supabase
    .from('seo_content')
    .select('id')
    .eq('level', level)
    .eq('subject', subject)
    .eq('exam_board', examBoard)
    .eq('topic_slug', topicSlug)
    .eq('subtopic_slug', subtopicSlug)
    .single();

  return !!data;
}

// Insert a single subtopic with its questions
async function insertSubtopic(
  supabase: ReturnType<typeof getSupabase>,
  data: SubtopicData,
  skipExisting = true
): Promise<{ success: boolean; skipped?: boolean; error?: string }> {
  const { content, questions } = data;

  // Check if exists
  if (skipExisting) {
    const exists = await contentExists(
      supabase,
      content.level,
      content.subject,
      content.exam_board,
      content.topic_slug,
      content.subtopic_slug
    );
    if (exists) {
      return { success: true, skipped: true };
    }
  }

  // Insert content
  const { data: insertedContent, error: contentError } = await supabase
    .from('seo_content')
    .insert(content)
    .select('id')
    .single();

  if (contentError) {
    return { success: false, error: contentError.message };
  }

  // Insert questions
  if (questions.length > 0 && insertedContent) {
    const questionsWithId = questions.map(q => ({
      ...q,
      subtopic_id: insertedContent.id
    }));

    const { error: questionsError } = await supabase
      .from('sample_questions')
      .insert(questionsWithId);

    if (questionsError) {
      return { success: false, error: `Content inserted but questions failed: ${questionsError.message}` };
    }
  }

  return { success: true };
}

// Main function to process a data file
export async function processDataFile(dataItems: SubtopicData[]) {
  const supabase = getSupabase();

  let inserted = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`Processing ${dataItems.length} subtopics...`);

  for (const item of dataItems) {
    const result = await insertSubtopic(supabase, item);

    if (result.skipped) {
      skipped++;
      process.stdout.write('.');
    } else if (result.success) {
      inserted++;
      process.stdout.write('+');
    } else {
      failed++;
      console.error(`\nFailed: ${item.content.subtopic_slug} - ${result.error}`);
    }
  }

  console.log(`\n\nComplete: ${inserted} inserted, ${skipped} skipped, ${failed} failed`);
}

// If run directly, import all data files and process
async function main() {
  const args = process.argv.slice(2);
  const fileIndex = args.indexOf('--file');

  if (fileIndex !== -1 && args[fileIndex + 1]) {
    // Process specific file
    const file = args[fileIndex + 1];
    const module = await import(`./${file}`);
    await processDataFile(module.default || module.data);
  } else {
    // Process all data files
    const dataFiles = [
      // Original files
      './data/gcse-maths-aqa-number',
      './data/gcse-maths-aqa-number-2',
      './data/gcse-maths-aqa-algebra',
      './data/gcse-maths-aqa-geometry',
      './data/gcse-maths-aqa-statistics',
      './data/gcse-maths-aqa-probability',
      './data/gcse-maths-aqa-ratio',
      // GCSE Maths expanded
      './data/gcse-maths-algebra',
      './data/gcse-maths-geometry',
      './data/gcse-maths-statistics',
      './data/gcse-maths-probability',
      // GCSE Physics
      './data/gcse-physics-forces',
      './data/gcse-physics-energy',
      './data/gcse-physics-waves',
      './data/gcse-physics-electricity',
      './data/gcse-physics-magnetism',
      './data/gcse-physics-atomic',
      // GCSE Chemistry
      './data/gcse-chemistry-atomic-structure',
      './data/gcse-chemistry-quantitative',
      './data/gcse-chemistry-reactions',
      './data/gcse-chemistry-organic',
      // GCSE Biology
      './data/gcse-biology-cells',
      './data/gcse-biology-organisation',
      './data/gcse-biology-bioenergetics',
      './data/gcse-biology-inheritance',
      // A-Level Maths
      './data/alevel-maths-calculus',
      './data/alevel-maths-algebra',
      // A-Level Physics
      './data/alevel-physics-mechanics',
      './data/alevel-physics-electricity',
      // A-Level Chemistry
      './data/alevel-chemistry-organic',
      // NEW: GCSE Biology expanded
      './data/gcse-biology-ecology',
      './data/gcse-biology-homeostasis',
      './data/gcse-biology-infection',
      // NEW: GCSE Chemistry expanded
      './data/gcse-chemistry-energy-changes',
      './data/gcse-chemistry-rates',
      // NEW: A-Level Physics expanded
      './data/alevel-physics-waves',
      './data/alevel-physics-quantum',
      './data/alevel-physics-fields',
      './data/alevel-physics-nuclear',
      // NEW: GCSE Chemistry expanded
      './data/gcse-chemistry-atmosphere',
      // NEW: GCSE Physics space
      './data/gcse-physics-space',
      // NEW: GCSE Chemistry using-resources
      './data/gcse-chemistry-using-resources',
      // NEW: A-Level Chemistry physical & inorganic
      './data/alevel-chemistry-physical',
      './data/alevel-chemistry-inorganic',
      // NEW: A-Level Maths statistics & mechanics
      './data/alevel-maths-statistics',
      './data/alevel-maths-mechanics',
      // NEW: GCSE Chemistry bonding
      './data/gcse-chemistry-bonding',
      // NEW: A-Level Physics materials
      './data/alevel-physics-materials',
      // NEW: GCSE Physics particle-model
      './data/gcse-physics-particle-model',
      // NEW: A-Level Maths pure
      './data/alevel-maths-pure',
      // NEW: A-Level Chemistry organic expanded
      './data/alevel-chemistry-organic-expanded',
      // NEW: GCSE Biology additional subtopics
      './data/gcse-biology-additional',
      // NEW: A-Level Maths pure expanded (differentiation rules, etc.)
      './data/alevel-maths-pure-expanded',
      // NEW: GCSE Maths ratio (all subtopics)
      './data/gcse-maths-ratio-all',
      // NEW: GCSE Chemistry atomic structure expanded
      './data/gcse-chemistry-atomic-expanded',
      // NEW: GCSE Biology inheritance expanded
      './data/gcse-biology-inheritance-expanded',
    ];

    for (const file of dataFiles) {
      try {
        console.log(`\nLoading ${file}...`);
        const module = await import(file);
        // Find the first array export (handles named exports like gcsePhysicsWaves, etc.)
        const dataArray = module.default || module.data ||
          Object.values(module).find(v => Array.isArray(v));
        if (dataArray) {
          await processDataFile(dataArray as SubtopicData[]);
        } else {
          console.log(`Skipping ${file} (no data array found)`);
        }
      } catch (err) {
        console.log(`Skipping ${file} (not found or error: ${err})`);
      }
    }
  }
}

main().catch(console.error);
