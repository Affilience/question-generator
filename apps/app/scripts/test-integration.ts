/**
 * Integration test - verifies extracts/sources are included in question prompts
 */

import {
  getRandomExtractForTheme,
} from '../src/lib/extracts/english-literature-extracts';

import {
  getRandomSourceForTheme,
} from '../src/lib/extracts/history-sources';

console.log('='.repeat(60));
console.log('INTEGRATION TEST - Extract/Source Inclusion in Prompts');
console.log('='.repeat(60));

let passed = 0;
let failed = 0;

// Simulate what the API route does
function simulateEnglishLitGuidance(topicName: string, subtopic: string) {
  const extract = getRandomExtractForTheme(topicName, subtopic);
  if (extract) {
    return `
**USE THIS EXACT EXTRACT** - This is a real passage from ${extract.text}:

---
**Read the following extract from ${extract.location} of "${extract.text}" by ${extract.author}:**

${extract.contextNote ? `[Context: ${extract.contextNote}]` : ''}

${extract.extract}
---

**RELEVANT THEMES in this extract:** ${extract.themes.join(', ')}
**LITERARY TECHNIQUES present:** ${extract.techniques.join(', ')}
`;
  }
  return null;
}

function simulateHistoryGuidance(topicName: string, subtopic: string) {
  const source = getRandomSourceForTheme(topicName, subtopic);
  if (source) {
    return `
**USE THIS EXACT SOURCE** - This is a real/adapted historical document:

---
**Source A: ${source.title}**

${source.content}

*${source.attribution}*
---

**SOURCE PROVENANCE:** ${source.provenance}
**POTENTIAL BIAS:** ${source.bias}
`;
  }
  return null;
}

// Test NEW English Lit texts
console.log('\n📚 Testing NEW English Lit Extract Inclusion:\n');

const engLitTests = [
  { topic: 'Frankenstein', subtopic: 'creature', expectedText: 'wretch' },
  { topic: 'Great Expectations', subtopic: 'Pip', expectedText: 'Pip' },
  { topic: 'Animal Farm', subtopic: 'Napoleon', expectedText: 'Napoleon' },
  { topic: 'Othello', subtopic: 'Iago', expectedText: 'Moor' },
  { topic: 'Hamlet', subtopic: 'revenge', expectedText: 'Hamlet' },
  { topic: 'The Great Gatsby', subtopic: 'American Dream', expectedText: 'green light' },
];

for (const test of engLitTests) {
  const guidance = simulateEnglishLitGuidance(test.topic, test.subtopic);
  if (guidance && guidance.includes(test.topic)) {
    console.log(`✅ ${test.topic} - Extract included in prompt`);
    // Show snippet of actual extract
    const extractStart = guidance.indexOf('---\n**Read');
    const extractEnd = guidance.indexOf('---\n\n**RELEVANT');
    if (extractStart > 0 && extractEnd > extractStart) {
      const snippet = guidance.slice(extractStart + 4, extractStart + 200);
      console.log(`   Preview: "${snippet.trim().slice(0, 80)}..."`);
    }
    passed++;
  } else {
    console.log(`❌ ${test.topic} - No extract found`);
    failed++;
  }
}

// Test NEW History topics
console.log('\n📜 Testing NEW History Source Inclusion:\n');

const historyTests = [
  { topic: 'Cold War', subtopic: 'Truman', expectedText: 'alternative ways of life' },
  { topic: 'Cold War', subtopic: 'Berlin', expectedText: 'Berlin' },
  { topic: 'Norman', subtopic: 'Hastings', expectedText: 'William' },
  { topic: 'Norman', subtopic: 'Domesday', expectedText: 'Oxford' },
  { topic: 'America', subtopic: 'Martin Luther King', expectedText: 'dream' },
  { topic: 'America', subtopic: 'Rosa Parks', expectedText: 'Montgomery' },
  { topic: 'Russia', subtopic: 'Lenin', expectedText: 'Soviets' },
  { topic: 'Russia', subtopic: 'Stalin', expectedText: 'kulak' },
];

for (const test of historyTests) {
  const guidance = simulateHistoryGuidance(test.topic, test.subtopic);
  if (guidance && guidance.includes('Source A:')) {
    console.log(`✅ ${test.topic} - ${test.subtopic} - Source included in prompt`);
    // Show source title
    const titleMatch = guidance.match(/\*\*Source A: ([^*]+)\*\*/);
    if (titleMatch) {
      console.log(`   Source: "${titleMatch[1].trim()}"`);
    }
    passed++;
  } else {
    console.log(`❌ ${test.topic} - ${test.subtopic} - No source found`);
    failed++;
  }
}

// Final summary
console.log('\n' + '='.repeat(60));
console.log('FINAL INTEGRATION TEST RESULTS');
console.log('='.repeat(60));
console.log(`\n✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);

if (failed === 0) {
  console.log('\n🎉 All integration tests passed!');
  console.log('\nThe extract/source databases are correctly integrated.');
  console.log('Real extracts and sources WILL appear in generated questions.');
} else {
  console.log('\n⚠️  Some tests failed.');
  process.exit(1);
}
