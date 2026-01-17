/**
 * Direct unit test for extract/source matching
 * Tests that new texts and topics return real extracts/sources
 */

import {
  getExtractsForText,
  getRandomExtractForTheme,
  getAvailableTexts,
} from '../src/lib/extracts/english-literature-extracts';

import {
  getSourcesForTopic,
  getRandomSourceForTheme,
  getAvailableHistoryTopics,
} from '../src/lib/extracts/history-sources';

console.log('=' .repeat(60));
console.log('EXTRACT/SOURCE MATCHING UNIT TESTS');
console.log('='.repeat(60));

let passed = 0;
let failed = 0;

function test(name: string, fn: () => boolean) {
  try {
    if (fn()) {
      console.log(`✅ ${name}`);
      passed++;
    } else {
      console.log(`❌ ${name}`);
      failed++;
    }
  } catch (e) {
    console.log(`❌ ${name} - Error: ${e}`);
    failed++;
  }
}

// === NEW GCSE TEXTS ===
console.log('\n📚 Testing NEW GCSE English Lit Texts:\n');

test('Frankenstein extracts load', () => {
  const extracts = getExtractsForText('Frankenstein');
  return extracts.length >= 6;
});

test('Frankenstein theme matching - "creature"', () => {
  const extract = getRandomExtractForTheme('Frankenstein', 'creature');
  return extract !== null && extract.text === 'Frankenstein';
});

test('Great Expectations extracts load', () => {
  const extracts = getExtractsForText('Great Expectations');
  return extracts.length >= 6;
});

test('Great Expectations theme matching - "social class"', () => {
  const extract = getRandomExtractForTheme('Great Expectations', 'social class');
  return extract !== null && extract.text === 'Great Expectations';
});

test('Animal Farm extracts load', () => {
  const extracts = getExtractsForText('Animal Farm');
  return extracts.length >= 6;
});

test('Animal Farm theme matching - "power"', () => {
  const extract = getRandomExtractForTheme('Animal Farm', 'power');
  return extract !== null && extract.text === 'Animal Farm';
});

// === NEW A-LEVEL TEXTS ===
console.log('\n📖 Testing NEW A-Level English Lit Texts:\n');

test('Othello extracts load', () => {
  const extracts = getExtractsForText('Othello');
  return extracts.length >= 6;
});

test('Othello theme matching - "jealousy"', () => {
  const extract = getRandomExtractForTheme('Othello', 'jealousy');
  return extract !== null && extract.text === 'Othello';
});

test('Hamlet extracts load', () => {
  const extracts = getExtractsForText('Hamlet');
  return extracts.length >= 6;
});

test('Hamlet theme matching - "revenge"', () => {
  const extract = getRandomExtractForTheme('Hamlet', 'revenge');
  return extract !== null && extract.text === 'Hamlet';
});

test('The Great Gatsby extracts load', () => {
  const extracts = getExtractsForText('The Great Gatsby');
  return extracts.length >= 6;
});

test('Great Gatsby theme matching - "American Dream"', () => {
  const extract = getRandomExtractForTheme('The Great Gatsby', 'American Dream');
  return extract !== null && extract.text === 'The Great Gatsby';
});

// === NEW HISTORY TOPICS ===
console.log('\n📜 Testing NEW History Topics:\n');

test('Cold War sources load', () => {
  const sources = getSourcesForTopic('Cold War');
  return sources.length >= 6;
});

test('Cold War theme matching - "Berlin"', () => {
  const source = getRandomSourceForTheme('Cold War', 'Berlin');
  return source !== null && source.topic === 'Cold War';
});

test('Cold War theme matching - "Cuban Missile Crisis"', () => {
  const source = getRandomSourceForTheme('Cold War', 'Cuban Missile');
  return source !== null;
});

test('Norman Conquest sources load', () => {
  const sources = getSourcesForTopic('Norman England');
  return sources.length >= 6;
});

test('Norman theme matching - "Hastings"', () => {
  const source = getRandomSourceForTheme('Norman', 'Hastings');
  return source !== null;
});

test('Norman theme matching - "Domesday"', () => {
  const source = getRandomSourceForTheme('Norman', 'Domesday');
  return source !== null;
});

test('America Civil Rights sources load', () => {
  const sources = getSourcesForTopic('America');
  return sources.length >= 6;
});

test('America theme matching - "Martin Luther King"', () => {
  const source = getRandomSourceForTheme('America', 'Martin Luther King');
  return source !== null;
});

test('America theme matching - "Montgomery Bus"', () => {
  const source = getRandomSourceForTheme('America', 'Montgomery');
  return source !== null;
});

test('Russia sources load', () => {
  const sources = getSourcesForTopic('Russia');
  return sources.length >= 6;
});

test('Russia theme matching - "Lenin"', () => {
  const source = getRandomSourceForTheme('Russia', 'Lenin');
  return source !== null;
});

test('Russia theme matching - "Stalin"', () => {
  const source = getRandomSourceForTheme('Russia', 'Stalin');
  return source !== null;
});

// === VERIFY EXTRACT CONTENT ===
console.log('\n📝 Testing Extract/Source Content Quality:\n');

test('Frankenstein extract has real text content', () => {
  const extract = getRandomExtractForTheme('Frankenstein', 'creature');
  return extract !== null && extract.extract.length > 100 && extract.extract.includes('I');
});

test('Othello extract has Shakespeare dialogue', () => {
  const extract = getRandomExtractForTheme('Othello', 'Iago');
  return extract !== null && (extract.extract.includes('Iago') || extract.extract.includes('Moor'));
});

test('Cold War source has historical content', () => {
  const source = getRandomSourceForTheme('Cold War', 'Iron Curtain');
  return source !== null && source.content.includes('Europe');
});

test('Norman source has 1066 content', () => {
  const source = getRandomSourceForTheme('Norman', 'William');
  return source !== null && (source.content.includes('William') || source.content.includes('Norman'));
});

test('Civil Rights source has MLK content', () => {
  const source = getRandomSourceForTheme('America', 'dream');
  return source !== null && source.content.includes('dream');
});

// === SUMMARY ===
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`\n✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`\nTotal: ${passed + failed} tests`);

if (failed > 0) {
  console.log('\n⚠️  Some tests failed! Review the implementation.');
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed!');
}
