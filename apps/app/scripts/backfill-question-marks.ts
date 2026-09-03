/**
 * Recompute stored mark totals in question_bank using the corrected parser.
 *
 * Background: parseMarkSchemePoint used to read the digit in a mark code as a
 * value ("M2" -> 2 marks), then summed those and made the result authoritative.
 * On the live bank that produced 1,166 rows whose total equalled the sum of
 * their label digits and 676 claiming more marks than their scheme had points.
 * Essay schemes were worse, because the digits inside level descriptors
 * ("Level 3 (5-6 marks)") were summed too.
 *
 * This walks every row, recomputes with the fixed logic, and writes back only
 * where the value actually changes.
 *
 *   npx tsx scripts/backfill-question-marks.ts            # dry run
 *   npx tsx scripts/backfill-question-marks.ts --apply    # write
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { calculateMarksFromScheme, reconcileMarks } from '../src/lib/markValidation';

config({ path: '.env.local' });

const APPLY = process.argv.includes('--apply');
const PAGE_SIZE = 500;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface Row {
  id: string;
  marks: number;
  mark_scheme: unknown;
  subject: string;
  qualification: string;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === 'string');
}

async function main() {
  console.log(APPLY ? 'APPLYING changes\n' : 'DRY RUN - no writes\n');

  let from = 0;
  let scanned = 0;
  const changes: { id: string; before: number; after: number; subject: string }[] = [];

  for (;;) {
    const { data, error } = await supabase
      .from('question_bank')
      .select('id, marks, mark_scheme, subject, qualification')
      .order('created_at', { ascending: true })
      .range(from, from + PAGE_SIZE - 1);

    if (error) throw error;
    if (!data || data.length === 0) break;

    for (const row of data as Row[]) {
      scanned++;
      const scheme = asStringArray(row.mark_scheme);
      if (scheme.length === 0) continue;

      const calculated = calculateMarksFromScheme(scheme);
      // Recompute from the scheme alone. The stored `marks` is the corrupted
      // value we are replacing, so it must not be an input to the decision.
      const corrected = reconcileMarks(null, calculated);

      if (corrected !== row.marks) {
        changes.push({ id: row.id, before: row.marks, after: corrected, subject: row.subject });
      }
    }

    if (data.length < PAGE_SIZE) break;
    from += PAGE_SIZE;
  }

  const inflated = changes.filter(c => c.after < c.before);
  const deflated = changes.filter(c => c.after > c.before);
  const totalMarksRemoved = inflated.reduce((sum, c) => sum + (c.before - c.after), 0);

  console.log(`Scanned:          ${scanned}`);
  console.log(`Changing:         ${changes.length}`);
  console.log(`  over-stated:    ${inflated.length} (removing ${totalMarksRemoved} phantom marks)`);
  console.log(`  under-stated:   ${deflated.length}`);

  const worst = [...inflated].sort((a, b) => (b.before - b.after) - (a.before - a.after)).slice(0, 10);
  if (worst.length > 0) {
    console.log('\nLargest corrections:');
    for (const c of worst) {
      console.log(`  ${c.subject.padEnd(20)} ${String(c.before).padStart(3)} -> ${String(c.after).padStart(3)}`);
    }
  }

  if (!APPLY) {
    console.log('\nRe-run with --apply to write these changes.');
    return;
  }

  let written = 0;
  for (const change of changes) {
    const { error } = await supabase
      .from('question_bank')
      .update({ marks: change.after })
      .eq('id', change.id);

    if (error) {
      console.error(`Failed to update ${change.id}:`, error.message);
      continue;
    }
    written++;
    if (written % 100 === 0) console.log(`  ...${written}/${changes.length}`);
  }

  console.log(`\nUpdated ${written} of ${changes.length} rows.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
