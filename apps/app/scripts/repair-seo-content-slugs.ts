/**
 * Re-derive seo_content.topic_slug from the live taxonomy.
 *
 * The SEO subtopic page looks content up on an exact
 * (level, subject, exam_board, topic_slug, subtopic_slug) match. The stored
 * topic slugs drifted from the topic ids the routes actually emit — the table
 * holds "energy" and "waves" where the route asks for "physics-energy" — so
 * almost every indexed page fell through to a placeholder fallback that
 * publishes "[Sample GCSE AQA question on X]" and a "Preview Mode" banner.
 *
 * For each row we find the topic in the taxonomy that actually contains a
 * subtopic matching the row's subtopic_slug, and rewrite topic_slug to that
 * topic's id. Rows whose subject or subtopic no longer exists are reported and
 * left alone.
 *
 *   npx tsx scripts/repair-seo-content-slugs.ts            # dry run
 *   npx tsx scripts/repair-seo-content-slugs.ts --apply    # write
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { getTopicsBySubjectBoardAndLevel } from '../src/lib/topics';
import { slugify } from '../src/lib/seo/utils';
import type { ExamBoard, QualificationLevel, Subject } from '../src/types';

config({ path: '.env.local' });

const APPLY = process.argv.includes('--apply');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface Row {
  id: string;
  level: string;
  subject: string;
  exam_board: string;
  topic_slug: string;
  subtopic_slug: string;
}

/** Topic id whose subtopics contain `subtopicSlug`, or null. */
function findTopicId(
  level: string,
  subject: string,
  examBoard: string,
  subtopicSlug: string
): string | null {
  let topics;
  try {
    topics = getTopicsBySubjectBoardAndLevel(
      subject as Subject,
      examBoard as ExamBoard,
      level as QualificationLevel
    );
  } catch {
    return null;
  }
  if (!topics || topics.length === 0) return null;

  for (const topic of topics) {
    for (const subtopic of topic.subtopics) {
      if (slugify(subtopic) === subtopicSlug) return topic.id;
    }
  }
  return null;
}

async function main() {
  console.log(APPLY ? 'APPLYING changes\n' : 'DRY RUN - no writes\n');

  // PostgREST caps a request at 1000 rows regardless of .limit(), so page.
  const rows: Row[] = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from('seo_content')
      .select('id, level, subject, exam_board, topic_slug, subtopic_slug')
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);

    if (error) throw error;
    if (!data || data.length === 0) break;
    rows.push(...(data as Row[]));
    if (data.length < PAGE) break;
  }

  const fixes: { id: string; from: string; to: string; key: string }[] = [];
  const alreadyCorrect: Row[] = [];
  const unresolved: Row[] = [];

  for (const row of rows) {
    const topicId = findTopicId(row.level, row.subject, row.exam_board, row.subtopic_slug);

    if (!topicId) {
      unresolved.push(row);
      continue;
    }
    if (topicId === row.topic_slug) {
      alreadyCorrect.push(row);
      continue;
    }
    fixes.push({
      id: row.id,
      from: row.topic_slug,
      to: topicId,
      key: `${row.level}/${row.subject}/${row.exam_board}`,
    });
  }

  console.log(`Rows:              ${rows.length}`);
  console.log(`Already correct:   ${alreadyCorrect.length}`);
  console.log(`Repairable:        ${fixes.length}`);
  console.log(`Unresolved:        ${unresolved.length}`);

  const bySubject = new Map<string, number>();
  for (const row of unresolved) {
    const key = `${row.level}/${row.subject}`;
    bySubject.set(key, (bySubject.get(key) ?? 0) + 1);
  }
  if (bySubject.size > 0) {
    console.log('\nUnresolved by subject (no matching subtopic in the taxonomy):');
    for (const [key, count] of [...bySubject].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${key.padEnd(34)} ${count}`);
    }
  }

  const sample = fixes.slice(0, 8);
  if (sample.length > 0) {
    console.log('\nSample repairs:');
    for (const f of sample) {
      console.log(`  ${f.key.padEnd(28)} ${f.from}  ->  ${f.to}`);
    }
  }

  if (!APPLY) {
    console.log('\nRe-run with --apply to write these changes.');
    return;
  }

  let written = 0;
  let conflicts = 0;
  for (const fix of fixes) {
    const { error: updateError } = await supabase
      .from('seo_content')
      .update({ topic_slug: fix.to })
      .eq('id', fix.id);

    if (updateError) {
      // A unique-key clash means a correctly-slugged row already exists for
      // this subtopic; the stale duplicate can simply stay unused.
      if (updateError.code === '23505') conflicts++;
      else console.error(`Failed on ${fix.id}:`, updateError.message);
      continue;
    }
    written++;
    if (written % 100 === 0) console.log(`  ...${written}/${fixes.length}`);
  }

  console.log(`\nUpdated ${written} rows (${conflicts} skipped as duplicates).`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
