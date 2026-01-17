/**
 * Test script to verify mark scheme formats across different subject types
 */

interface TestCase {
  name: string;
  params: {
    topicId: string;
    difficulty: 'easy' | 'medium' | 'hard';
    subtopic: string;
    subject: string;
    examBoard: string;
    qualification: string;
  };
  expectedFormat: 'maths' | 'essay' | 'science_extended';
}

const testCases: TestCase[] = [
  // Maths - should use M1/A1/B1 notation
  {
    name: 'GCSE Maths (should use M1/A1/B1)',
    params: {
      topicId: 'algebra',
      difficulty: 'medium',
      subtopic: 'Solving equations',
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectedFormat: 'maths'
  },
  // History Hard - should use level descriptors + SPaG
  {
    name: 'A-Level History Essay (should use levels + SPaG)',
    params: {
      topicId: 'aqa-alevel-hist-germany-1871-1991',
      difficulty: 'hard',
      subtopic: 'Rise of the Nazi Party',
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'a-level'
    },
    expectedFormat: 'essay'
  },
  // English Literature - should use level descriptors + AO breakdown
  {
    name: 'GCSE English Literature (should use levels + AO)',
    params: {
      topicId: 'aqa-gcse-eng-lit-macbeth',
      difficulty: 'hard',
      subtopic: 'Ambition theme',
      subject: 'english-literature',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectedFormat: 'essay'
  },
  // Physics medium - should use M1/A1 for calculations
  {
    name: 'GCSE Physics Calculation (should use M1/A1)',
    params: {
      topicId: 'physics-forces',
      difficulty: 'medium',
      subtopic: 'Force and acceleration',
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectedFormat: 'maths'
  },
];

async function testMarkScheme(testCase: TestCase): Promise<{
  passed: boolean;
  markScheme: string[];
  issues: string[];
}> {
  const issues: string[] = [];

  try {
    const response = await fetch('http://localhost:3000/api/generate-question-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...testCase.params, stream: false }),
    });

    if (!response.ok) {
      return { passed: false, markScheme: [], issues: [`HTTP ${response.status}`] };
    }

    const data = await response.json();
    const markScheme = data.markScheme || [];

    // Check format based on expected type
    if (testCase.expectedFormat === 'maths') {
      // Should contain M1, A1, or B1
      const hasMAB = markScheme.some((m: string) => /[MAB]\d/.test(m));
      if (!hasMAB) {
        issues.push('Missing M1/A1/B1 notation');
      }

      // Check for proper format like "M1: description"
      const hasProperFormat = markScheme.some((m: string) => /^(\([a-z]\) )?[MAB]\d( (dep|ft|cao))?:/.test(m));
      if (!hasProperFormat) {
        issues.push('Mark scheme not in proper "M1: description" format');
      }
    }

    if (testCase.expectedFormat === 'essay') {
      // Should contain level descriptors
      const hasLevels = markScheme.some((m: string) => /Level \d/.test(m));
      if (!hasLevels) {
        issues.push('Missing level descriptors');
      }

      // Should contain AO breakdown
      const hasAO = markScheme.some((m: string) => /AO\d|AO Breakdown/.test(m));
      if (!hasAO) {
        issues.push('Missing AO breakdown');
      }

      // Should contain indicative content
      const hasIndicative = markScheme.some((m: string) => /[Ii]ndicative content/.test(m));
      if (!hasIndicative) {
        issues.push('Missing indicative content');
      }

      // For History hard, should have SPaG
      if (testCase.params.subject === 'history' && testCase.params.difficulty === 'hard') {
        const hasSPaG = markScheme.some((m: string) => /SPaG/.test(m));
        if (!hasSPaG) {
          issues.push('Missing SPaG marks for History essay');
        }
      }
    }

    if (testCase.expectedFormat === 'science_extended') {
      // Should use 3-level format for 6-mark questions
      const hasLevel3 = markScheme.some((m: string) => /Level 3.*5-6/.test(m));
      if (!hasLevel3) {
        issues.push('Missing Level 3 descriptor for 6-mark question');
      }
    }

    return {
      passed: issues.length === 0,
      markScheme,
      issues
    };
  } catch (error) {
    return { passed: false, markScheme: [], issues: [`Error: ${error}`] };
  }
}

async function main() {
  console.log('🔍 MARK SCHEME FORMAT TESTS\n');
  console.log('Testing mark scheme formats across subjects...\n');

  let passed = 0;
  let failed = 0;

  for (const testCase of testCases) {
    console.log('='.repeat(60));
    console.log(`Testing: ${testCase.name}`);
    console.log(`Expected format: ${testCase.expectedFormat}`);
    console.log('='.repeat(60));

    const result = await testMarkScheme(testCase);

    if (result.passed) {
      console.log('✅ PASSED');
      passed++;
    } else {
      console.log('❌ FAILED');
      console.log('Issues:', result.issues.join(', '));
      failed++;
    }

    console.log('\nMark Scheme:');
    result.markScheme.slice(0, 6).forEach((m, i) => {
      console.log(`  ${i + 1}. ${m.substring(0, 100)}${m.length > 100 ? '...' : ''}`);
    });
    console.log('\n');
  }

  console.log('='.repeat(60));
  console.log(`SUMMARY: ${passed} passed, ${failed} failed out of ${testCases.length} tests`);
  console.log('='.repeat(60));
}

main().catch(console.error);
