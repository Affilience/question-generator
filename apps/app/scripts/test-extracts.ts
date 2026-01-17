/**
 * Test script for extract/source database coverage
 * Run with: npx ts-node scripts/test-extracts.ts
 */

import {
  getExtractsForText,
  findExtractsForTheme,
  getRandomExtractForTheme,
  getAvailableTexts,
  macbethExtracts,
  christmasCarolExtracts,
  jekyllHydeExtracts,
  inspectorCallsExtracts,
  romeoJulietExtracts,
  frankensteinExtracts,
  greatExpectationsExtracts,
  animalFarmExtracts,
  othelloExtracts,
  hamletExtracts,
  greatGatsbyExtracts
} from '../src/lib/extracts/english-literature-extracts';

import {
  getSourcesForTopic,
  findSourcesForTheme,
  getRandomSourceForTheme,
  getAvailableHistoryTopics,
  allHistorySources
} from '../src/lib/extracts/history-sources';

console.log('='.repeat(60));
console.log('ENGLISH LITERATURE EXTRACT DATABASE TEST');
console.log('='.repeat(60));

// Test available texts
console.log('\n📚 TEXTS WITH EXTRACTS:');
const availableTexts = getAvailableTexts();
availableTexts.forEach(text => {
  const extracts = getExtractsForText(text);
  console.log(`  ✅ ${text}: ${extracts.length} extracts`);
});

// Test theme matching for Macbeth
console.log('\n🎭 MACBETH THEME MATCHING TEST:');
const macbethThemes = [
  'Ambition and its consequences',
  'The supernatural and witchcraft',
  'Guilt and conscience',
  'Lady Macbeth\'s character arc',
  'Blood imagery'
];
macbethThemes.forEach(theme => {
  const matches = findExtractsForTheme('Macbeth', theme);
  console.log(`  "${theme}": ${matches.length} extract(s)`);
  if (matches.length > 0) {
    console.log(`    → ${matches[0].id} (${matches[0].location})`);
  }
});

// Test theme matching for A Christmas Carol
console.log('\n🎄 A CHRISTMAS CAROL THEME MATCHING TEST:');
const accThemes = [
  'Redemption and transformation',
  'Social responsibility and poverty',
  'Scrooge\'s character arc',
  'Tiny Tim and innocence',
  'The Ghost of Christmas Present'
];
accThemes.forEach(theme => {
  const matches = findExtractsForTheme('A Christmas Carol', theme);
  console.log(`  "${theme}": ${matches.length} extract(s)`);
});

// Test random extract retrieval
console.log('\n🎲 RANDOM EXTRACT RETRIEVAL TEST:');
const testCases = [
  { text: 'Macbeth', theme: 'Guilt' },
  { text: 'A Christmas Carol', theme: 'poverty' },
  { text: 'Jekyll and Hyde', theme: 'duality' },
  { text: 'An Inspector Calls', theme: 'responsibility' },
  { text: 'Romeo and Juliet', theme: 'love' },
];
testCases.forEach(({ text, theme }) => {
  const extract = getRandomExtractForTheme(text, theme);
  if (extract) {
    console.log(`  ✅ ${text} + "${theme}" → ${extract.id}`);
    console.log(`     Location: ${extract.location}`);
    console.log(`     Themes: ${extract.themes.slice(0, 2).join(', ')}`);
  } else {
    console.log(`  ❌ ${text} + "${theme}" → NO MATCH`);
  }
});

console.log('\n' + '='.repeat(60));
console.log('HISTORY SOURCE DATABASE TEST');
console.log('='.repeat(60));

// Test available topics
console.log('\n📜 TOPICS WITH SOURCES:');
const historyTopics = getAvailableHistoryTopics();
historyTopics.forEach(topic => {
  const sources = getSourcesForTopic(topic);
  console.log(`  ✅ ${topic}: ${sources.length} sources`);
});

// Test theme matching for Germany
console.log('\n🇩🇪 GERMANY 1890-1945 THEME MATCHING TEST:');
const germanyThemes = [
  'Hyperinflation 1923',
  'Hitler becomes Chancellor',
  'Kristallnacht',
  'Propaganda',
  'Treaty of Versailles'
];
germanyThemes.forEach(theme => {
  const matches = findSourcesForTheme('Germany 1890-1945', theme);
  console.log(`  "${theme}": ${matches.length} source(s)`);
  if (matches.length > 0) {
    console.log(`    → ${matches[0].title} (${matches[0].period})`);
  }
});

// Test theme matching for Medicine
console.log('\n⚕️ MEDICINE THROUGH TIME THEME MATCHING TEST:');
const medicineThemes = [
  'Black Death',
  'Jenner',
  'John Snow',
  'Florence Nightingale',
  'NHS'
];
medicineThemes.forEach(theme => {
  const matches = findSourcesForTheme('Medicine', theme);
  console.log(`  "${theme}": ${matches.length} source(s)`);
});

// Test random source retrieval
console.log('\n🎲 RANDOM SOURCE RETRIEVAL TEST:');
const historyTestCases = [
  { topic: 'Germany', theme: 'Nazi' },
  { topic: 'Medicine', theme: 'cholera' },
  { topic: 'Elizabeth', theme: 'Armada' },
];
historyTestCases.forEach(({ topic, theme }) => {
  const source = getRandomSourceForTheme(topic, theme);
  if (source) {
    console.log(`  ✅ ${topic} + "${theme}" → ${source.title}`);
    console.log(`     Period: ${source.period}`);
    console.log(`     Type: ${source.sourceType}`);
  } else {
    console.log(`  ❌ ${topic} + "${theme}" → NO MATCH`);
  }
});

// Summary statistics
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));

const totalExtracts = macbethExtracts.length + christmasCarolExtracts.length +
                      jekyllHydeExtracts.length + inspectorCallsExtracts.length +
                      romeoJulietExtracts.length + frankensteinExtracts.length +
                      greatExpectationsExtracts.length + animalFarmExtracts.length +
                      othelloExtracts.length + hamletExtracts.length +
                      greatGatsbyExtracts.length;
console.log(`\n📚 English Literature: ${totalExtracts} total extracts across ${availableTexts.length} texts`);
console.log(`📜 History: ${allHistorySources.length} total sources across ${historyTopics.length} topic areas`);

// Coverage gaps
console.log('\n⚠️  REMAINING COVERAGE GAPS:');
console.log('\n✅ GCSE English Lit texts WITH extracts:');
console.log('  Macbeth, A Christmas Carol, Jekyll and Hyde, An Inspector Calls,');
console.log('  Romeo and Juliet, Frankenstein, Great Expectations, Animal Farm');

console.log('\nGCSE English Lit texts still needed:');
const gcseTextsNeeded = [
  'The Merchant of Venice', 'Much Ado About Nothing', 'The Tempest',
  'Julius Caesar', 'Jane Eyre', 'Pride and Prejudice', 'Blood Brothers', 'Twelfth Night'
];
gcseTextsNeeded.forEach(t => console.log(`  ❌ ${t}`));

console.log('\n✅ A-Level English Lit texts WITH extracts:');
console.log('  Othello, Hamlet, The Great Gatsby');

console.log('\nA-Level English Lit texts still needed:');
const alevelTextsNeeded = [
  'A Streetcar Named Desire', 'Wuthering Heights', 'The Handmaid\'s Tale',
  'Keats Poetry', 'WW1 Poetry', 'King Lear', 'The Color Purple'
];
alevelTextsNeeded.forEach(t => console.log(`  ❌ ${t}`));

console.log('\n✅ History topics WITH sources:');
console.log('  Germany 1890-1945, Medicine Through Time, Elizabethan England,');
console.log('  Cold War, Norman England, America (Civil Rights), Russia 1894-1945');

console.log('\nHistory topics still needed:');
const historyNeeded = [
  'Crime and Punishment Through Time', 'The Tudors (Henry VIII)',
  'Vietnam War', 'Conflict and Tension (WWI/WWII)'
];
historyNeeded.forEach(t => console.log(`  ❌ ${t}`));

console.log('\n✅ Test complete!');
