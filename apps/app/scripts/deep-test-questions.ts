/**
 * Deep test script for question generation across all subjects, levels, boards, and topics
 * Runs with delays to avoid rate limiting
 */

interface TestCase {
  subject: string;
  level: string;
  board: string;
  topicId: string;
  subtopic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuestionResponse {
  id: string;
  topicId: string;
  difficulty: string;
  content: string;
  solution: string;
  marks: number;
  markScheme?: string[];
  diagram?: string;
}

interface TestResult {
  testCase: TestCase;
  success: boolean;
  hasContent: boolean;
  hasSolution: boolean;
  hasMarkScheme: boolean;
  markSchemeFormat: string;
  markSchemeQuality: string;
  contentPreview: string;
  solutionPreview: string;
  marks: number;
  error?: string;
  responseTime: number;
}

// Comprehensive test cases across all subjects, levels, and boards
const generateTestCases = (): TestCase[] => {
  const cases: TestCase[] = [];

  // MATHS - Core subjects all boards
  const mathsTopics = [
    { topicId: 'algebra', subtopics: ['Solving equations', 'Quadratic equations', 'Simultaneous equations'] },
    { topicId: 'number', subtopics: ['Fractions', 'Percentages', 'Ratio'] },
    { topicId: 'geometry', subtopics: ['Angles', 'Triangles', 'Circle theorems'] },
    { topicId: 'probability', subtopics: ['Basic probability', 'Combined events', 'Tree diagrams'] },
    { topicId: 'statistics', subtopics: ['Averages', 'Data representation', 'Cumulative frequency'] },
  ];

  for (const board of ['aqa', 'edexcel', 'ocr']) {
    for (const topic of mathsTopics) {
      cases.push({ subject: 'maths', level: 'gcse', board, topicId: topic.topicId, subtopic: topic.subtopics[0], difficulty: 'easy' });
      cases.push({ subject: 'maths', level: 'gcse', board, topicId: topic.topicId, subtopic: topic.subtopics[1] || topic.subtopics[0], difficulty: 'medium' });
    }
  }

  // A-Level Maths
  const alevelMathsTopics = [
    { topicId: 'alevel-differentiation', subtopics: ['Differentiation from first principles', 'Chain rule', 'Product rule'] },
    { topicId: 'alevel-integration', subtopics: ['Integration techniques', 'Definite integrals', 'Integration by parts'] },
  ];
  for (const topic of alevelMathsTopics) {
    cases.push({ subject: 'maths', level: 'a-level', board: 'aqa', topicId: topic.topicId, subtopic: topic.subtopics[0], difficulty: 'medium' });
    cases.push({ subject: 'maths', level: 'a-level', board: 'aqa', topicId: topic.topicId, subtopic: topic.subtopics[1], difficulty: 'hard' });
  }

  // PHYSICS
  const physicsTopics = [
    { topicId: 'physics-forces', subtopics: ['Speed and velocity', 'Acceleration', 'Forces and motion'] },
    { topicId: 'physics-energy', subtopics: ['Energy transfers', 'Work done', 'Power'] },
    { topicId: 'physics-waves', subtopics: ['Wave properties', 'Electromagnetic spectrum', 'Sound waves'] },
  ];
  for (const board of ['aqa', 'edexcel', 'ocr']) {
    for (const topic of physicsTopics.slice(0, 2)) {
      cases.push({ subject: 'physics', level: 'gcse', board, topicId: topic.topicId, subtopic: topic.subtopics[0], difficulty: 'easy' });
      cases.push({ subject: 'physics', level: 'gcse', board, topicId: topic.topicId, subtopic: topic.subtopics[1], difficulty: 'medium' });
    }
  }

  // A-Level Physics
  cases.push({ subject: 'physics', level: 'a-level', board: 'aqa', topicId: 'alevel-physics-mechanics', subtopic: 'Projectile motion', difficulty: 'hard' });
  cases.push({ subject: 'physics', level: 'a-level', board: 'aqa', topicId: 'alevel-physics-quantum', subtopic: 'Photoelectric effect', difficulty: 'hard' });

  // CHEMISTRY
  const chemistryTopics = [
    { topicId: 'aqa-gcse-chemistry-atomic-structure', subtopics: ['Structure of an atom', 'Electron configuration', 'Isotopes'] },
    { topicId: 'aqa-gcse-chemistry-bonding', subtopics: ['Ionic bonding', 'Covalent bonding', 'Metallic bonding'] },
  ];
  for (const board of ['aqa', 'edexcel', 'ocr']) {
    for (const topic of chemistryTopics) {
      const actualTopicId = board === 'aqa' ? topic.topicId : topic.topicId.replace('aqa-', `${board}-`).replace('aqa-gcse-chemistry-', '');
      cases.push({ subject: 'chemistry', level: 'gcse', board, topicId: actualTopicId, subtopic: topic.subtopics[0], difficulty: 'easy' });
    }
  }

  // A-Level Chemistry
  cases.push({ subject: 'chemistry', level: 'a-level', board: 'aqa', topicId: 'alevel-chemistry-energetics', subtopic: 'Enthalpy changes', difficulty: 'medium' });
  cases.push({ subject: 'chemistry', level: 'a-level', board: 'aqa', topicId: 'alevel-chemistry-organic', subtopic: 'Alkanes', difficulty: 'hard' });

  // BIOLOGY
  const biologyTopics = [
    { topicId: 'aqa-gcse-biology-cell-biology', subtopics: ['Animal cell structure', 'Plant cell structure', 'Cell division'] },
    { topicId: 'aqa-gcse-biology-organisation', subtopics: ['Enzymes', 'Digestive system', 'Blood vessels'] },
  ];
  for (const topic of biologyTopics) {
    cases.push({ subject: 'biology', level: 'gcse', board: 'aqa', topicId: topic.topicId, subtopic: topic.subtopics[0], difficulty: 'easy' });
    cases.push({ subject: 'biology', level: 'gcse', board: 'aqa', topicId: topic.topicId, subtopic: topic.subtopics[1], difficulty: 'medium' });
  }

  // A-Level Biology
  cases.push({ subject: 'biology', level: 'a-level', board: 'aqa', topicId: 'biological', subtopic: 'Proteins', difficulty: 'hard' });

  // COMPUTER SCIENCE
  cases.push({ subject: 'computer-science', level: 'gcse', board: 'aqa', topicId: 'algorithms', subtopic: 'Searching algorithms', difficulty: 'easy' });
  cases.push({ subject: 'computer-science', level: 'gcse', board: 'ocr', topicId: 'algorithms', subtopic: 'Sorting algorithms', difficulty: 'medium' });
  cases.push({ subject: 'computer-science', level: 'a-level', board: 'aqa', topicId: 'alevel-cs-data-structures', subtopic: 'Binary trees', difficulty: 'hard' });

  // ECONOMICS
  cases.push({ subject: 'economics', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-econ-economy', subtopic: 'Supply and demand', difficulty: 'easy' });
  cases.push({ subject: 'economics', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-econ-individual', subtopic: 'Price elasticity', difficulty: 'medium' });
  cases.push({ subject: 'economics', level: 'a-level', board: 'edexcel', topicId: 'edexcel-alevel-econ-markets', subtopic: 'Market structures', difficulty: 'hard' });

  // BUSINESS
  cases.push({ subject: 'business', level: 'gcse', board: 'aqa', topicId: 'business-activity', subtopic: 'Business ownership', difficulty: 'easy' });
  cases.push({ subject: 'business', level: 'a-level', board: 'aqa', topicId: 'business-objectives', subtopic: 'Business objectives', difficulty: 'medium' });

  // PSYCHOLOGY
  cases.push({ subject: 'psychology', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-psych-social-influence', subtopic: 'Conformity', difficulty: 'easy' });
  cases.push({ subject: 'psychology', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-psych-memory', subtopic: 'Working memory model', difficulty: 'medium' });

  // GEOGRAPHY
  cases.push({ subject: 'geography', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-geog-natural-hazards', subtopic: 'Tectonic hazards', difficulty: 'easy' });
  cases.push({ subject: 'geography', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-geog-hazards', subtopic: 'Volcanic hazards', difficulty: 'medium' });

  // HISTORY
  cases.push({ subject: 'history', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-hist-germany-democracy-dictatorship', subtopic: 'Weimar Republic', difficulty: 'easy' });
  cases.push({ subject: 'history', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-hist-germany-1871-1991', subtopic: 'Nazi Germany', difficulty: 'hard' });

  // ENGLISH LITERATURE
  cases.push({ subject: 'english-literature', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-eng-lit-macbeth', subtopic: 'Ambition theme', difficulty: 'easy' });
  cases.push({ subject: 'english-literature', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-eng-lit-christmas-carol', subtopic: 'Redemption theme', difficulty: 'medium' });
  cases.push({ subject: 'english-literature', level: 'a-level', board: 'aqa', topicId: 'aqa-alevel-eng-lit-othello', subtopic: 'Jealousy theme', difficulty: 'hard' });

  // FURTHER MATHS
  cases.push({ subject: 'further-maths', level: 'gcse', board: 'aqa', topicId: 'aqa-gcse-fm-algebra', subtopic: 'Matrices', difficulty: 'medium' });
  cases.push({ subject: 'further-maths', level: 'a-level', board: 'aqa', topicId: 'alevel-proof', subtopic: 'Proof by induction', difficulty: 'hard' });

  return cases;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function runTest(testCase: TestCase): Promise<TestResult> {
  const startTime = Date.now();

  try {
    const response = await fetch('http://localhost:3000/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topicId: testCase.topicId,
        difficulty: testCase.difficulty,
        subtopic: testCase.subtopic,
        subject: testCase.subject,
        examBoard: testCase.board,
        qualification: testCase.level,
        skipCache: true,
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
        markSchemeQuality: 'N/A',
        contentPreview: '',
        solutionPreview: '',
        marks: 0,
        error: `HTTP ${response.status}`,
        responseTime,
      };
    }

    const data: QuestionResponse = await response.json();

    // Analyze mark scheme format and quality
    let markSchemeFormat = 'empty';
    let markSchemeQuality = 'missing';
    if (data.markScheme && data.markScheme.length > 0) {
      const firstItem = data.markScheme[0];
      if (/^[MAB]\d/.test(firstItem) || /^\([a-z]\) [MAB]\d/.test(firstItem)) {
        markSchemeFormat = 'M1/A1/B1';
        // Check quality of M1/A1/B1 format
        const hasMethodMarks = data.markScheme.some(m => m.includes('M1') || m.includes('M2'));
        const hasAccuracyMarks = data.markScheme.some(m => m.includes('A1') || m.includes('A2'));
        if (hasMethodMarks && hasAccuracyMarks) {
          markSchemeQuality = 'excellent';
        } else if (hasMethodMarks || hasAccuracyMarks) {
          markSchemeQuality = 'good';
        } else {
          markSchemeQuality = 'basic';
        }
      } else if (/Level \d/.test(firstItem)) {
        markSchemeFormat = 'Level-based';
        markSchemeQuality = 'good';
      } else if (/AO/.test(firstItem)) {
        markSchemeFormat = 'AO-based';
        markSchemeQuality = 'good';
      } else {
        markSchemeFormat = 'point-list';
        markSchemeQuality = data.markScheme.length >= 3 ? 'adequate' : 'basic';
      }
    }

    return {
      testCase,
      success: true,
      hasContent: !!data.content && data.content.length > 20,
      hasSolution: !!data.solution && data.solution.length > 20,
      hasMarkScheme: data.markScheme && data.markScheme.length > 0,
      markSchemeFormat,
      markSchemeQuality,
      contentPreview: data.content?.substring(0, 100) || '',
      solutionPreview: data.solution?.substring(0, 100) || '',
      marks: data.marks || 0,
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
      markSchemeQuality: 'N/A',
      contentPreview: '',
      solutionPreview: '',
      marks: 0,
      error: `${error}`,
      responseTime: Date.now() - startTime,
    };
  }
}

async function main() {
  const testCases = generateTestCases();

  console.log('='.repeat(80));
  console.log('DEEP QUESTION GENERATION TEST');
  console.log('='.repeat(80));
  console.log(`\nTotal tests: ${testCases.length}`);
  console.log('Testing with 3-second delays to avoid rate limiting...\n');

  const results: TestResult[] = [];
  let passed = 0;
  let failed = 0;
  const issues: string[] = [];

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const label = `${tc.subject} ${tc.level} ${tc.board} - ${tc.topicId}`;
    process.stdout.write(`[${i + 1}/${testCases.length}] ${label.substring(0, 50).padEnd(50)} `);

    const result = await runTest(tc);
    results.push(result);

    if (result.success && result.hasContent && result.hasSolution) {
      const msIcon = result.hasMarkScheme ?
        (result.markSchemeQuality === 'excellent' ? '★' :
         result.markSchemeQuality === 'good' ? '●' : '○') : '✗';
      console.log(`✅ ${result.responseTime}ms [${result.markSchemeFormat}] ${msIcon}`);
      passed++;

      if (!result.hasMarkScheme) {
        issues.push(`${label}: Missing mark scheme`);
      } else if (result.markSchemeQuality === 'basic') {
        issues.push(`${label}: Basic mark scheme quality`);
      }
    } else if (result.success) {
      const missing = [];
      if (!result.hasContent) missing.push('content');
      if (!result.hasSolution) missing.push('solution');
      if (!result.hasMarkScheme) missing.push('markScheme');
      console.log(`⚠️  ${result.responseTime}ms - Missing: ${missing.join(', ')}`);
      issues.push(`${label}: Missing ${missing.join(', ')}`);
      passed++;
    } else {
      console.log(`❌ ${result.error}`);
      issues.push(`${label}: ${result.error}`);
      failed++;
    }

    // Wait 3 seconds between requests to avoid rate limiting
    if (i < testCases.length - 1) {
      await sleep(3000);
    }
  }

  // Summary by subject
  console.log('\n' + '='.repeat(80));
  console.log('SUMMARY BY SUBJECT');
  console.log('='.repeat(80));

  const subjects = [...new Set(testCases.map(tc => tc.subject))].sort();
  for (const subject of subjects) {
    const subjectResults = results.filter(r => r.testCase.subject === subject);
    const subjectPassed = subjectResults.filter(r => r.success).length;
    const fullPassed = subjectResults.filter(r => r.success && r.hasContent && r.hasSolution && r.hasMarkScheme).length;
    const emoji = subjectPassed === subjectResults.length ? '✅' : subjectPassed > 0 ? '⚠️' : '❌';
    console.log(`${emoji} ${subject.padEnd(20)} ${subjectPassed}/${subjectResults.length} API success, ${fullPassed}/${subjectResults.length} complete`);
  }

  // Mark scheme format summary
  console.log('\n' + '='.repeat(80));
  console.log('MARK SCHEME FORMAT DISTRIBUTION');
  console.log('='.repeat(80));

  const formats = results.reduce((acc, r) => {
    if (r.success) {
      acc[r.markSchemeFormat] = (acc[r.markSchemeFormat] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  for (const [format, count] of Object.entries(formats).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / results.filter(r => r.success).length) * 100).toFixed(1);
    console.log(`${format.padEnd(20)} ${count} questions (${pct}%)`);
  }

  // Mark scheme quality summary
  console.log('\n' + '='.repeat(80));
  console.log('MARK SCHEME QUALITY DISTRIBUTION');
  console.log('='.repeat(80));

  const qualities = results.reduce((acc, r) => {
    if (r.success) {
      acc[r.markSchemeQuality] = (acc[r.markSchemeQuality] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  for (const [quality, count] of Object.entries(qualities).sort((a, b) => b[1] - a[1])) {
    const pct = ((count / results.filter(r => r.success).length) * 100).toFixed(1);
    console.log(`${quality.padEnd(20)} ${count} questions (${pct}%)`);
  }

  // Issues
  if (issues.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('ISSUES FOUND');
    console.log('='.repeat(80));
    issues.forEach(issue => console.log(`  • ${issue}`));
  }

  // Final summary
  console.log('\n' + '='.repeat(80));
  console.log(`FINAL: ${passed} passed, ${failed} failed out of ${testCases.length} tests`);
  console.log('='.repeat(80));

  // Sample outputs
  console.log('\n' + '='.repeat(80));
  console.log('SAMPLE OUTPUTS');
  console.log('='.repeat(80));

  const sampledSubjects = ['maths', 'physics', 'chemistry', 'english-literature', 'history'];
  for (const subject of sampledSubjects) {
    const subjectResults = results.filter(r => r.testCase.subject === subject && r.success);
    if (subjectResults.length > 0) {
      const sample = subjectResults[0];
      console.log(`\n[${sample.testCase.subject.toUpperCase()} - ${sample.testCase.level} ${sample.testCase.board}]`);
      console.log(`Topic: ${sample.testCase.topicId} / ${sample.testCase.subtopic}`);
      console.log(`Content: ${sample.contentPreview}...`);
      console.log(`Solution: ${sample.solutionPreview}...`);
      console.log(`Mark Scheme: ${sample.markSchemeFormat} (${sample.markSchemeQuality})`);
      console.log(`Marks: ${sample.marks}`);
    }
  }
}

main().catch(console.error);
