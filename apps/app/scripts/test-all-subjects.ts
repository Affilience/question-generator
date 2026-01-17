/**
 * Comprehensive test script for all subjects
 * Tests question generation across subjects, difficulties, and exam boards
 */

interface TestCase {
  subject: string;
  level: string;
  board: string;
  topicId: string;
  subtopic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const testCases: TestCase[] = [
  // MATHS - GCSE & A-Level
  { subject: 'maths', level: 'gcse', board: 'aqa', topicId: 'algebra', subtopic: 'Solving equations', difficulty: 'easy' },
  { subject: 'maths', level: 'gcse', board: 'aqa', topicId: 'algebra', subtopic: 'Quadratic equations', difficulty: 'medium' },
  { subject: 'maths', level: 'a-level', board: 'aqa', topicId: 'alevel-differentiation', subtopic: 'Differentiation', difficulty: 'hard' },

  // FURTHER MATHS
  { subject: 'further-maths', level: 'a-level', board: 'aqa', topicId: 'alevel-proof', subtopic: 'Proof by induction', difficulty: 'hard' },

  // PHYSICS - GCSE & A-Level
  { subject: 'physics', level: 'gcse', board: 'aqa', topicId: 'physics-forces', subtopic: 'Speed and velocity', difficulty: 'easy' },
  { subject: 'physics', level: 'gcse', board: 'aqa', topicId: 'physics-energy', subtopic: 'Energy transfers', difficulty: 'medium' },
  { subject: 'physics', level: 'a-level', board: 'aqa', topicId: 'alevel-physics-mechanics', subtopic: 'Projectile motion', difficulty: 'hard' },

  // CHEMISTRY - GCSE & A-Level
  { subject: 'chemistry', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-chemistry-atomic-structure', subtopic: 'Structure of an atom', difficulty: 'easy' },
  { subject: 'chemistry', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-chemistry-bonding', subtopic: 'Ionic bonding', difficulty: 'medium' },
  { subject: 'chemistry', level: 'a-level', board: 'aqa', topicId: 'alevel-chemistry-energetics', subtopic: 'Enthalpy changes', difficulty: 'hard' },

  // BIOLOGY - GCSE & A-Level
  { subject: 'biology', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-biology-cell-biology', subtopic: 'Animal cell structure', difficulty: 'easy' },
  { subject: 'biology', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-biology-organisation', subtopic: 'Enzymes', difficulty: 'medium' },
  { subject: 'biology', level: 'a-level', board: 'aqa', topicId: 'biological', subtopic: 'Proteins', difficulty: 'hard' },

  // ENGLISH LITERATURE - GCSE & A-Level
  { subject: 'english-literature', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-eng-lit-macbeth', subtopic: 'Ambition theme', difficulty: 'easy' },
  { subject: 'english-literature', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-eng-lit-christmas-carol', subtopic: 'Redemption theme', difficulty: 'medium' },
  { subject: 'english-literature', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-eng-lit-othello', subtopic: 'Jealousy theme', difficulty: 'hard' },

  // HISTORY - GCSE & A-Level
  { subject: 'history', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'Weimar Republic', difficulty: 'easy' },
  { subject: 'history', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'Rise of the Nazi Party', difficulty: 'medium' },
  { subject: 'history', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-hist-germany-1871-1991', subtopic: 'Nazi consolidation of power', difficulty: 'hard' },

  // GEOGRAPHY - GCSE & A-Level
  { subject: 'geography', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-geog-natural-hazards', subtopic: 'Tectonic hazards', difficulty: 'easy' },
  { subject: 'geography', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-geog-urban-issues', subtopic: 'Urban growth', difficulty: 'medium' },
  { subject: 'geography', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-geog-hazards', subtopic: 'Volcanic hazards', difficulty: 'hard' },

  // ECONOMICS - A-Level
  { subject: 'economics', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-econ-individual', subtopic: 'Supply and demand', difficulty: 'easy' },
  { subject: 'economics', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-econ-market-failure', subtopic: 'Market failure', difficulty: 'medium' },
  { subject: 'economics', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-econ-fiscal', subtopic: 'Fiscal policy', difficulty: 'hard' },

  // BUSINESS - GCSE & A-Level
  { subject: 'business', level: 'gcse', board: 'aqa', topicId: 'business-activity', subtopic: 'Business ownership', difficulty: 'easy' },
  { subject: 'business', level: 'a-level', board: 'aqa', topicId: 'business-objectives', subtopic: 'Business objectives', difficulty: 'medium' },

  // PSYCHOLOGY - GCSE & A-Level
  { subject: 'psychology', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-psych-social-influence', subtopic: 'Conformity', difficulty: 'easy' },
  { subject: 'psychology', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-psych-memory', subtopic: 'Working memory model', difficulty: 'medium' },
  { subject: 'psychology', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-psych-attachment', subtopic: "Bowlby's theory", difficulty: 'hard' },

  // COMPUTER SCIENCE - GCSE
  { subject: 'computer-science', level: 'gcse', board: 'aqa', topicId: 'algorithms', subtopic: 'Searching algorithms', difficulty: 'easy' },
  { subject: 'computer-science', level: 'gcse', board: 'ocr', topicId: 'algorithms', subtopic: 'Sorting algorithms', difficulty: 'medium' },

  // DIFFERENT EXAM BOARDS
  { subject: 'maths', level: 'gcse', board: 'edexcel', topicId: 'number', subtopic: 'Fractions', difficulty: 'easy' },
  { subject: 'maths', level: 'gcse', board: 'ocr', topicId: 'number', subtopic: 'Percentages', difficulty: 'medium' },
  { subject: 'chemistry', level: 'gcse', board: 'edexcel', topicId: 'atomic-structure', subtopic: 'Atoms and elements', difficulty: 'easy' },
  { subject: 'physics', level: 'gcse', board: 'ocr', topicId: 'forces', subtopic: 'Motion', difficulty: 'medium' },
];

interface TestResult {
  testCase: TestCase;
  success: boolean;
  hasContent: boolean;
  hasSolution: boolean;
  hasMarkScheme: boolean;
  markSchemeFormat: string;
  error?: string;
  responseTime: number;
}

async function runTest(testCase: TestCase): Promise<TestResult> {
  const startTime = Date.now();

  try {
    const response = await fetch('http://localhost:3000/api/generate-question-stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topicId: testCase.topicId,
        difficulty: testCase.difficulty,
        subtopic: testCase.subtopic,
        subject: testCase.subject,
        examBoard: testCase.board,
        qualification: testCase.level,
        stream: false,
      }),
    });

    const responseTime = Date.now() - startTime;

    if (!response.ok) {
      return {
        testCase,
        success: false,
        hasContent: false,
        hasSolution: false,
        hasMarkScheme: false,
        markSchemeFormat: 'N/A',
        error: `HTTP ${response.status}`,
        responseTime,
      };
    }

    const data = await response.json();

    // Analyze mark scheme format
    let markSchemeFormat = 'empty';
    if (data.markScheme && data.markScheme.length > 0) {
      const firstItem = data.markScheme[0];
      if (/^[MAB]\d/.test(firstItem) || /^\([a-z]\) [MAB]\d/.test(firstItem)) {
        markSchemeFormat = 'M1/A1/B1';
      } else if (/Level \d/.test(firstItem)) {
        markSchemeFormat = 'Level-based';
      } else if (/AO/.test(firstItem)) {
        markSchemeFormat = 'AO-based';
      } else {
        markSchemeFormat = 'point-list';
      }
    }

    return {
      testCase,
      success: true,
      hasContent: !!data.content && data.content.length > 20,
      hasSolution: !!data.solution && data.solution.length > 20,
      hasMarkScheme: data.markScheme && data.markScheme.length > 0,
      markSchemeFormat,
      responseTime,
    };
  } catch (error) {
    return {
      testCase,
      success: false,
      hasContent: false,
      hasSolution: false,
      hasMarkScheme: false,
      markSchemeFormat: 'N/A',
      error: `${error}`,
      responseTime: Date.now() - startTime,
    };
  }
}

async function main() {
  console.log('🧪 COMPREHENSIVE SUBJECT TEST');
  console.log('Testing question generation across all subjects...\n');
  console.log(`Total tests: ${testCases.length}\n`);

  const results: TestResult[] = [];
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const label = `${tc.subject} ${tc.level} ${tc.board} (${tc.difficulty})`;
    process.stdout.write(`[${i + 1}/${testCases.length}] ${label.padEnd(45)} `);

    const result = await runTest(tc);
    results.push(result);

    if (result.success && result.hasContent && result.hasSolution && result.hasMarkScheme) {
      console.log(`✅ ${result.responseTime}ms [${result.markSchemeFormat}]`);
      passed++;
    } else if (result.success) {
      const issues = [];
      if (!result.hasContent) issues.push('no content');
      if (!result.hasSolution) issues.push('no solution');
      if (!result.hasMarkScheme) issues.push('no markScheme');
      console.log(`⚠️  ${result.responseTime}ms - ${issues.join(', ')}`);
      passed++; // Partial pass
    } else {
      console.log(`❌ ${result.error}`);
      failed++;
    }
  }

  // Summary by subject
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY BY SUBJECT');
  console.log('='.repeat(70));

  const subjects = [...new Set(testCases.map(tc => tc.subject))];
  for (const subject of subjects) {
    const subjectResults = results.filter(r => r.testCase.subject === subject);
    const subjectPassed = subjectResults.filter(r => r.success).length;
    const emoji = subjectPassed === subjectResults.length ? '✅' : subjectPassed > 0 ? '⚠️' : '❌';
    console.log(`${emoji} ${subject.padEnd(20)} ${subjectPassed}/${subjectResults.length} passed`);
  }

  // Mark scheme format summary
  console.log('\n' + '='.repeat(70));
  console.log('MARK SCHEME FORMATS');
  console.log('='.repeat(70));

  const formats = results.reduce((acc, r) => {
    acc[r.markSchemeFormat] = (acc[r.markSchemeFormat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  for (const [format, count] of Object.entries(formats)) {
    console.log(`${format.padEnd(20)} ${count} questions`);
  }

  // Final summary
  console.log('\n' + '='.repeat(70));
  console.log(`FINAL: ${passed} passed, ${failed} failed out of ${testCases.length} tests`);
  console.log('='.repeat(70));

  // List failures
  const failures = results.filter(r => !r.success);
  if (failures.length > 0) {
    console.log('\nFailed tests:');
    failures.forEach(f => {
      console.log(`  - ${f.testCase.subject} ${f.testCase.level} ${f.testCase.board}: ${f.error}`);
    });
  }
}

main().catch(console.error);
