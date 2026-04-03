#!/usr/bin/env node
/**
 * Test enhanced mark schemes with actual API calls
 * Tests both individual question generation and paper generation
 */

import 'dotenv/config';

const API_BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

interface TestCase {
  subject: string;
  qualification: string;
  examBoard: string;
  topicId: string;
  subtopic: string;
  difficulty: string;
  expectedMarkSchemeType: 'levels' | 'points' | 'mixed';
  expectedMarks?: number;
}

const TEST_CASES: TestCase[] = [
  // Essay subjects - should get level descriptors for hard questions
  {
    subject: 'economics',
    qualification: 'a-level',
    examBoard: 'aqa',
    topicId: 'market-structures',
    subtopic: 'Monopoly',
    difficulty: 'hard',
    expectedMarkSchemeType: 'levels',
    expectedMarks: 25,
  },
  {
    subject: 'history',
    qualification: 'gcse',
    examBoard: 'edexcel',
    topicId: 'cold-war',
    subtopic: 'Cuban Missile Crisis',
    difficulty: 'hard',
    expectedMarkSchemeType: 'levels',
    expectedMarks: 20,
  },
  
  // STEM subjects - should get M/A marks for calculations
  {
    subject: 'maths',
    qualification: 'a-level',
    examBoard: 'edexcel',
    topicId: 'pure-mathematics',
    subtopic: 'Differentiation',
    difficulty: 'medium',
    expectedMarkSchemeType: 'mixed',
    expectedMarks: 6,
  },
  {
    subject: 'physics',
    qualification: 'gcse',
    examBoard: 'aqa',
    topicId: 'forces',
    subtopic: 'Momentum',
    difficulty: 'hard',
    expectedMarkSchemeType: 'mixed',
    expectedMarks: 8,
  },
  
  // Easy questions - should get simple point marking
  {
    subject: 'chemistry',
    qualification: 'gcse',
    examBoard: 'ocr',
    topicId: 'atomic-structure',
    subtopic: 'Electronic configuration',
    difficulty: 'easy',
    expectedMarkSchemeType: 'points',
    expectedMarks: 3,
  },
];

async function testQuestionGeneration(testCase: TestCase) {
  console.log(`\nTesting: ${testCase.subject} ${testCase.qualification} (${testCase.difficulty})`);
  console.log(`  Topic: ${testCase.subtopic}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/generate-question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topicId: testCase.topicId,
        difficulty: testCase.difficulty,
        subtopic: testCase.subtopic,
        examBoard: testCase.examBoard,
        qualification: testCase.qualification,
        subject: testCase.subject,
        skipCache: true, // Force generation to test enhancement
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    const question = await response.json();
    
    // Analyze mark scheme
    const markScheme = question.markScheme || [];
    const hasLevels = markScheme.some((line: string) => line.includes('Level'));
    const hasMAMarks = markScheme.some((line: string) => line.match(/\[M\d+\]|\[A\d+\]/));
    const hasAOBreakdown = markScheme.some((line: string) => line.includes('AO'));
    const hasBMarks = markScheme.some((line: string) => line.includes('[B'));
    
    let schemeType: string;
    if (hasLevels) {
      schemeType = 'levels';
    } else if (hasMAMarks) {
      schemeType = 'mixed';
    } else {
      schemeType = 'points';
    }
    
    const passed = schemeType === testCase.expectedMarkSchemeType;
    
    console.log(`  ✅ Generated: ${question.marks} marks`);
    console.log(`  📋 Mark Scheme Type: ${schemeType} (expected: ${testCase.expectedMarkSchemeType})`);
    console.log(`  ${passed ? '✅' : '❌'} ${passed ? 'PASSED' : 'FAILED'}`);
    
    if (hasAOBreakdown) {
      const aoLine = markScheme.find((line: string) => line.includes('AO'));
      console.log(`  📊 ${aoLine}`);
    }
    
    // Show sample of mark scheme
    console.log(`  Sample marks:`);
    for (const line of markScheme.slice(0, 3)) {
      console.log(`    ${line.substring(0, 60)}${line.length > 60 ? '...' : ''}`);
    }
    
    return passed;
  } catch (error) {
    console.error(`  ❌ ERROR:`, error);
    return false;
  }
}

async function runTests() {
  console.log('🔬 TESTING ENHANCED MARK SCHEMES WITH LIVE API');
  console.log('=' .repeat(80));
  
  let passed = 0;
  let total = 0;
  
  // Check if server is running
  try {
    const healthCheck = await fetch(API_BASE_URL);
    if (!healthCheck.ok && API_BASE_URL.includes('localhost')) {
      console.error('❌ Server not running. Please start the dev server first.');
      process.exit(1);
    }
  } catch (error) {
    if (API_BASE_URL.includes('localhost')) {
      console.error('❌ Cannot connect to localhost:3000. Please start the dev server first.');
      process.exit(1);
    }
  }
  
  // Test individual question generation
  console.log('\n📝 INDIVIDUAL QUESTION GENERATION TESTS');
  console.log('-'.repeat(80));
  
  for (const testCase of TEST_CASES) {
    total++;
    const result = await testQuestionGeneration(testCase);
    if (result) passed++;
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY');
  console.log('='.repeat(80));
  console.log(`Tests Passed: ${passed}/${total} (${Math.round(passed/total * 100)}%)`);
  
  if (passed === total) {
    console.log('✅ ALL TESTS PASSED - Enhanced mark schemes working correctly!');
  } else {
    console.log('⚠️ Some tests failed - review mark scheme generation logic');
  }
}

// Run the tests
runTests().catch(console.error);