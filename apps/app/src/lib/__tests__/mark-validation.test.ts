/**
 * Tests for mark-scheme parsing and mark reconciliation.
 *
 * Regression context: mark codes were being read as VALUES rather than
 * ordinals, so "M2" scored two and "A3" scored three. Measured against the
 * live question bank, 1,166 of 2,441 stored questions had a recorded total
 * exactly equal to the sum of their label digits, and 676 claimed more marks
 * than their scheme had points. Essay schemes were worse still: the digits
 * inside level descriptors ("Level 3 (5-6 marks)") were summed too, which is
 * how a 6-mark trigonometry question came to be stored as 25 marks.
 *
 * Run: npx tsx src/lib/__tests__/mark-validation.test.ts
 */

import {
  calculateMarksFromScheme,
  parseMarkSchemePoint,
  reconcileMarks,
} from '../markValidation';

const results: { name: string; passed: boolean; detail?: string }[] = [];

function check(name: string, actual: unknown, expected: unknown) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  results.push({
    name,
    passed,
    detail: passed
      ? undefined
      : `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
  });
}

// --- Mark codes are ordinals, not values -----------------------------------

check('M1 + M2 + A1 + A2 is 4 marks, not 6', calculateMarksFromScheme([
  'M1: correct method',
  'M2: second method step',
  'A1: correct answer',
  'A2: correct units',
]), 4);

check('a lone M1 is 1 mark', calculateMarksFromScheme(['M1: rearrange the formula']), 1);
check('B3 is 1 mark, not 3', calculateMarksFromScheme(['B3: states Ohm\'s law']), 1);
check('SC1 is 1 mark', calculateMarksFromScheme(['SC1: special case, allow ecf']), 1);

check('part-prefixed points count once each', calculateMarksFromScheme([
  '(a) M1: substitute values',
  '(b) A1: evaluate',
]), 2);

// --- Explicitly stated values are honoured ---------------------------------

check('"(2 marks)" is respected', calculateMarksFromScheme(['B1 (2 marks): two valid reasons']), 2);
check('"[3]" is respected', calculateMarksFromScheme(['M1 [3]: full derivation']), 3);

// --- Level-descriptor (essay) schemes --------------------------------------

const geographyEssay = [
  'AO Breakdown: AO1=3, AO2=3',
  'Level 4 (13-16 marks): Detailed understanding of prediction methods.',
  'Level 3 (9-12 marks): Clear knowledge with some application.',
  'Level 2 (5-8 marks): Basic knowledge with limited application.',
  'Level 1 (1-4 marks): Very basic knowledge.',
  'Indicative content: seismic monitoring, GPS, early warning systems.',
];
check('essay scheme takes the top band (16), never the sum (30)',
  calculateMarksFromScheme(geographyEssay), 16);

const trigEssay = [
  'Level 3 (5-6 marks): Detailed coherent explanation with terminology',
  'Level 2 (3-4 marks): Links some points',
  'Level 1 (1-2 marks): Simple statements',
  'Indicative content: cos(2t) identities; derivation from Pythagoras.',
];
check('trig essay is 6 marks, not the 25 that was stored',
  calculateMarksFromScheme(trigEssay), 6);

// --- Guidance lines never score --------------------------------------------

check('accept/ignore guidance is not a mark', calculateMarksFromScheme([
  'M1: correct substitution',
  'Accept: 9.8 or 9.81',
  'Ignore: missing units',
]), 1);

check('unlabelled points still count one each', calculateMarksFromScheme([
  'States that pressure increases',
  'Explains why in terms of particle collisions',
]), 2);

check('empty scheme is 0', calculateMarksFromScheme([]), 0);

// --- parseMarkSchemePoint keeps its contract -------------------------------

check('parse returns type, value and description',
  parseMarkSchemePoint('M2: uses v = f x lambda'),
  { markType: 'M2', value: 1, description: 'uses v = f x lambda' });

// --- Reconciliation between stated and calculated --------------------------

check('exact agreement', reconcileMarks(4, 4), 4);
check('off by one trusts the scheme', reconcileMarks(4, 5), 5);
check('empty scheme falls back to the stated total', reconcileMarks(4, 0), 4);
check('neither available defaults to 3', reconcileMarks(null, 0), 3);
check('no stated total uses the scheme', reconcileMarks(undefined, 6), 6);
check('wildly divergent keeps the stated total', reconcileMarks(6, 25), 6);
check('within 50% trusts the scheme', reconcileMarks(6, 8), 8);
check('caps at 30', reconcileMarks(99, 0), 30);
check('a negative stated total is ignored', reconcileMarks(-2, 5), 5);

// --- Report ----------------------------------------------------------------

const failed = results.filter(r => !r.passed);
for (const r of results) {
  console.log(`${r.passed ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `\n      ${r.detail}` : ''}`);
}
console.log('\n========');
console.log(`Total: ${results.length} | Passed: ${results.length - failed.length} | Failed: ${failed.length}`);

if (failed.length > 0) {
  console.log('\nSome tests failed.');
  process.exit(1);
} else {
  console.log('\nAll tests passed.');
}
