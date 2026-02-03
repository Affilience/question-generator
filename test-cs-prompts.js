// Quick test to verify Computer Science prompt improvements
const { getAQAGCSEComputerScienceSystemPrompt } = require('./apps/app/src/lib/prompts-computerscience-gcse-aqa.ts');
const { getEdexcelGCSEComputerScienceSystemPrompt } = require('./apps/app/src/lib/prompts-computerscience-gcse-edexcel.ts');
const { getOCRGCSEComputerScienceSystemPrompt } = require('./apps/app/src/lib/prompts-computerscience-gcse-ocr.ts');

console.log('=== Testing Computer Science Board Differentiation ===\n');

// Test data
const testTopic = { id: 'algorithms', name: 'Algorithms' };
const testDifficulty = 'medium';
const testSubtopic = 'Sorting algorithms';

// Test AQA
console.log('1. AQA GCSE Computer Science:');
try {
  const aqaPrompt = getAQAGCSEComputerScienceSystemPrompt(testTopic, testDifficulty, testSubtopic);
  console.log('✓ AQA prompt generated successfully');
  console.log('Multi-language support:', aqaPrompt.includes('Any high-level language supported') ? '✓' : '✗');
  console.log('Computational thinking:', aqaPrompt.includes('computational thinking') ? '✓' : '✗');
} catch (e) {
  console.log('✗ Error:', e.message);
}

console.log('\n2. Edexcel GCSE Computer Science:');
try {
  const edexcelPrompt = getEdexcelGCSEComputerScienceSystemPrompt(testTopic, testDifficulty, testSubtopic);
  console.log('✓ Edexcel prompt generated successfully');
  console.log('Python exclusive:', edexcelPrompt.includes('Python 3 exclusively') ? '✓' : '✗');
  console.log('On-screen practical:', edexcelPrompt.includes('on-screen practical exam') ? '✓' : '✗');
} catch (e) {
  console.log('✗ Error:', e.message);
}

console.log('\n3. OCR GCSE Computer Science:');
try {
  const ocrPrompt = getOCRGCSEComputerScienceSystemPrompt(testTopic, testDifficulty, testSubtopic);
  console.log('✓ OCR prompt generated successfully');
  console.log('ERL support:', ocrPrompt.includes('ERL (Exam Reference Language)') ? '✓' : '✗');
  console.log('Scenario-based:', ocrPrompt.includes('Scenario-based questions') ? '✓' : '✗');
} catch (e) {
  console.log('✗ Error:', e.message);
}

console.log('\n=== Test Complete ===');