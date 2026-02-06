// Direct test to see what economics topic IDs are available
const fs = require('fs');
const path = require('path');

// Read the economics topics file directly
const topicsFile = path.join(__dirname, 'apps/app/src/lib/topics-economics-alevel-edexcel.ts');
const content = fs.readFileSync(topicsFile, 'utf8');

// Extract topic IDs using regex
const idMatches = content.match(/id: ['"`]([^'"`]+)['"`]/g);
if (idMatches) {
  console.log('Available Economics Topic IDs:');
  idMatches.forEach((match, i) => {
    const id = match.match(/id: ['"`]([^'"`]+)['"`]/)[1];
    console.log(`${i + 1}. "${id}"`);
  });
} else {
  console.log('No topic IDs found');
}

// Also check if the function export exists
if (content.includes('getEdexcelALevelEconomicsTopicById')) {
  console.log('\n✅ Function getEdexcelALevelEconomicsTopicById exists');
} else {
  console.log('\n❌ Function getEdexcelALevelEconomicsTopicById missing');
}