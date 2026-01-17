#!/usr/bin/env npx tsx

/**
 * Minimal SEO Content Inserter
 *
 * Inserts lightweight SEO content (title, meta, short intro) without sample questions.
 * Much faster to populate all pages.
 */

import 'dotenv/config';
import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';

config({ path: resolve(process.cwd(), '.env.local') });

interface MinimalContent {
  topic: string;
  subtopic: string;
  title: string;
  meta: string;
  intro: string;
}

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase credentials required');
  return createClient(url, key);
}

export async function insertMinimalContent(
  level: string,
  subject: string,
  examBoard: string,
  items: MinimalContent[]
) {
  const supabase = getSupabase();
  let inserted = 0, skipped = 0, failed = 0;

  for (const item of items) {
    // Check if exists
    const { data: existing } = await supabase
      .from('seo_content')
      .select('id')
      .eq('level', level)
      .eq('subject', subject)
      .eq('exam_board', examBoard)
      .eq('topic_slug', item.topic)
      .eq('subtopic_slug', item.subtopic)
      .single();

    if (existing) {
      skipped++;
      process.stdout.write('.');
      continue;
    }

    const { error } = await supabase.from('seo_content').insert({
      level,
      subject,
      exam_board: examBoard,
      topic_slug: item.topic,
      subtopic_slug: item.subtopic,
      title: item.title,
      meta_description: item.meta,
      introduction: item.intro
    });

    if (error) {
      failed++;
      console.error(`\nFailed: ${item.subtopic} - ${error.message}`);
    } else {
      inserted++;
      process.stdout.write('+');
    }
  }

  console.log(`\nDone: ${inserted} inserted, ${skipped} skipped, ${failed} failed`);
}

// Helper to generate title
const t = (board: string, level: string, topic: string) =>
  `${board.toUpperCase()} ${level.toUpperCase()} Maths: ${topic} Practice Questions`;

// Helper to generate meta
const m = (topic: string) =>
  `Practice ${topic.toLowerCase()} with exam-style questions and worked solutions.`;

// Run data files
async function main() {
  const files = [
    './data-minimal/gcse-maths-aqa-algebra',
    './data-minimal/gcse-maths-aqa-geometry',
    './data-minimal/gcse-maths-aqa-stats-prob',
    './data-minimal/gcse-maths-aqa-ratio',
  ];

  for (const file of files) {
    try {
      console.log(`\nLoading ${file}...`);
      const mod = await import(file);
      await mod.run();
    } catch (e) {
      console.log(`Skipping ${file} (not found)`);
    }
  }
}

main().catch(console.error);

export { t, m };
