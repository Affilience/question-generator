// Test script to check valid topic IDs for Edexcel A-Level Economics
const topics = [
  'nature-of-economics',
  'how-markets-work', 
  'market-failure',
  'measures-of-economic-performance',
  'aggregate-demand',
  'aggregate-supply',
  'national-income',
  'economic-growth',
  'macroeconomic-objectives-and-policies',
  'business-growth',
  'business-objectives', 
  'revenues-costs-and-profits',
  'market-structures',
  'labour-market',
  'international-economics',
  'poverty-and-inequality',
  'emerging-and-developing-economies',
  'financial-sector',
  'role-of-the-state-in-the-macroeconomy',
  // Try some variations
  'nature',
  'markets', 
  'failure',
  'performance',
  'demand',
  'supply',
  'income',
  'growth',
  'objectives',
  'business',
  'costs-profits',
  'structures', 
  'labour',
  'international',
  'poverty',
  'emerging',
  'financial',
  'state',
  // Additional topic IDs I added
  'fiscal-policy',
  'monetary-policy',
  'macroeconomic-objectives',
  'market-structures'
];

async function testTopicId(topicId) {
  try {
    const response = await fetch('http://localhost:3000/api/papers/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        examBoard: 'edexcel',
        qualification: 'alevel', 
        subject: 'economics',
        paperName: 'Test Paper',
        config: {
          selectedTopics: [topicId],
          selectedSubtopics: {
            [topicId]: ['test-subtopic']
          },
          sections: [{
            topicIds: [topicId],
            marks: 10,
            questions: 1
          }]
        },
        userId: '62a68a5d-bd4a-46cd-85a7-18b01f38caab'
      })
    });
    
    const result = await response.text();
    console.log(`✅ ${topicId}: ${response.status === 200 ? 'VALID' : 'INVALID'} (${response.status})`);
    if (response.status !== 200) {
      console.log(`   Error: ${result}`);
    }
    
    return response.status === 200;
  } catch (error) {
    console.log(`❌ ${topicId}: ERROR - ${error.message}`);
    return false;
  }
}

async function testAllTopics() {
  console.log('Testing Edexcel A-Level Economics topic IDs...\n');
  
  const validTopics = [];
  
  for (const topicId of topics) {
    const isValid = await testTopicId(topicId);
    if (isValid) {
      validTopics.push(topicId);
    }
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n📋 SUMMARY:`);
  console.log(`Valid topic IDs (${validTopics.length}): ${validTopics.join(', ')}`);
  console.log(`Invalid topic IDs (${topics.length - validTopics.length}): ${topics.length - validTopics.length} topics failed`);
}

testAllTopics().catch(console.error);