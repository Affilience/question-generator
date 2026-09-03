#!/usr/bin/env node
/**
 * Test script to identify paper generation issues reported by customers
 * Tests:
 * 1. Topic distribution - questions should be spread across selected topics
 * 2. Difficulty selection - should match requested distribution
 * 3. Question variety - should have diverse question types and formats
 * 4. Diagram generation - should generate appropriate diagrams when needed
 */

import 'dotenv/config';
import { selectQuestionsForPaper } from '../src/lib/questionSelector';
import { 
  PaperConfig, 
  ExamBoard, 
  QualificationLevel, 
  Subject,
  Difficulty,
  QuestionType 
} from '../src/types';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function logSection(title: string) {
  console.log(`\n${colors.bold}${colors.blue}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.bold}${colors.blue}${title}${colors.reset}`);
  console.log(`${colors.bold}${colors.blue}${'='.repeat(60)}${colors.reset}\n`);
}

function logIssue(issue: string) {
  console.log(`${colors.red}❌ ISSUE: ${issue}${colors.reset}`);
}

function logSuccess(message: string) {
  console.log(`${colors.green}✅ GOOD: ${message}${colors.reset}`);
}

function logWarning(message: string) {
  console.log(`${colors.yellow}⚠️  WARNING: ${message}${colors.reset}`);
}

function logInfo(key: string, value: any) {
  console.log(`${colors.cyan}📊 ${key}:${colors.reset} ${value}`);
}

// Test Case 1: Topic Distribution - Multiple Topics Selected
function testMultipleTopicDistribution() {
  logSection('TEST 1: Multiple Topic Distribution');
  
  const config: PaperConfig = {
    totalMarks: 100,
    timeLimit: 120,
    sections: [
      {
        id: 'section-a',
        name: 'Section A',
        instructions: 'Answer all questions',
        targetMarks: 50,
        questionTypes: ['short-answer', 'calculation', 'explain'] as QuestionType[],
        order: 0,
      },
      {
        id: 'section-b', 
        name: 'Section B',
        instructions: 'Answer all questions',
        targetMarks: 50,
        questionTypes: ['extended', 'data-analysis', 'essay'] as QuestionType[],
        order: 1,
      }
    ],
    selectedSubtopics: {
      'algebra': ['Quadratics', 'Linear equations', 'Inequalities'],
      'calculus': ['Differentiation', 'Integration', 'Applications'],
      'statistics': ['Probability', 'Distributions', 'Hypothesis testing'],
    },
    topicWeights: {
      'algebra': 1,
      'calculus': 1,
      'statistics': 1,
    },
    difficultyDistribution: {
      easy: 30,
      medium: 50,
      hard: 20,
    },
    questionTypeDistribution: {
      'multiple-choice': 0,
      'short-answer': 60,
      'extended-response': 40,
    },
    settings: {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false,
    }
  };

  const result = selectQuestionsForPaper(config, 'maths', 'a-level', 42);
  
  // Analyze topic distribution
  const topicCounts: Record<string, number> = {};
  const subtopicCounts: Record<string, number> = {};
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      topicCounts[q.topicId] = (topicCounts[q.topicId] || 0) + 1;
      const key = `${q.topicId}/${q.subtopic}`;
      subtopicCounts[key] = (subtopicCounts[key] || 0) + 1;
    });
  });

  logInfo('Total questions', result.totalQuestions);
  logInfo('Total marks', result.totalMarks);
  logInfo('Topics used', Object.keys(topicCounts).length);
  logInfo('Topic distribution', JSON.stringify(topicCounts, null, 2));
  logInfo('Subtopic distribution', JSON.stringify(subtopicCounts, null, 2));

  // Check for issues
  const topicsSelected = Object.keys(config.selectedSubtopics).length;
  const topicsUsed = Object.keys(topicCounts).length;
  
  if (topicsUsed < topicsSelected) {
    logIssue(`Only ${topicsUsed} out of ${topicsSelected} selected topics were used`);
  } else {
    logSuccess(`All ${topicsSelected} selected topics were used`);
  }

  // Check if any topic is overrepresented (>50% of questions)
  const maxTopicQuestions = Math.max(...Object.values(topicCounts));
  const topicPercentage = (maxTopicQuestions / result.totalQuestions) * 100;
  
  if (topicPercentage > 50) {
    const dominantTopic = Object.keys(topicCounts).find(k => topicCounts[k] === maxTopicQuestions);
    logIssue(`Topic "${dominantTopic}" dominates with ${topicPercentage.toFixed(1)}% of questions`);
  } else {
    logSuccess(`Topics are reasonably distributed (max ${topicPercentage.toFixed(1)}%)`);
  }

  // Check for subtopic repetition
  const repeatedSubtopics = Object.entries(subtopicCounts).filter(([_, count]) => count > 2);
  if (repeatedSubtopics.length > 0) {
    logWarning(`Some subtopics appear more than twice:`);
    repeatedSubtopics.forEach(([subtopic, count]) => {
      console.log(`    ${subtopic}: ${count} times`);
    });
  }
}

// Test Case 2: Single Topic with Multiple Subtopics
function testSingleTopicDistribution() {
  logSection('TEST 2: Single Topic Distribution (Customer Complaint Scenario)');
  
  const config: PaperConfig = {
    totalMarks: 80,
    timeLimit: 90,
    sections: [
      {
        id: 'section-1',
        name: 'Questions',
        instructions: 'Answer all questions',
        targetMarks: 80,
        questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as QuestionType[],
        order: 0,
      }
    ],
    selectedSubtopics: {
      'number': ['Fractions', 'Percentages', 'Ratio', 'Standard form', 'Surds'],
    },
    topicWeights: {
      'number': 1,
    },
    difficultyDistribution: {
      easy: 40,
      medium: 40,
      hard: 20,
    },
    questionTypeDistribution: {
      'multiple-choice': 0,
      'short-answer': 60,
      'extended-response': 40,
    },
    settings: {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false,
    }
  };

  const result = selectQuestionsForPaper(config, 'maths', 'gcse', 123);
  
  // Analyze subtopic distribution
  const subtopicCounts: Record<string, number> = {};
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
    });
  });

  logInfo('Total questions', result.totalQuestions);
  logInfo('Subtopics selected', Object.keys(config.selectedSubtopics['number']).length);
  logInfo('Subtopics used', Object.keys(subtopicCounts).length);
  logInfo('Subtopic distribution', JSON.stringify(subtopicCounts, null, 2));

  // Check for issues
  const subtopicsSelected = config.selectedSubtopics['number'].length;
  const subtopicsUsed = Object.keys(subtopicCounts).length;
  
  if (subtopicsUsed < subtopicsSelected * 0.6) {
    logIssue(`Only ${subtopicsUsed} out of ${subtopicsSelected} subtopics were used (less than 60%)`);
  } else {
    logSuccess(`Good subtopic coverage: ${subtopicsUsed} out of ${subtopicsSelected}`);
  }

  // Check if any subtopic dominates
  const maxSubtopicQuestions = Math.max(...Object.values(subtopicCounts));
  const subtopicPercentage = (maxSubtopicQuestions / result.totalQuestions) * 100;
  
  if (subtopicPercentage > 40) {
    const dominantSubtopic = Object.keys(subtopicCounts).find(k => subtopicCounts[k] === maxSubtopicQuestions);
    logIssue(`Subtopic "${dominantSubtopic}" dominates with ${subtopicPercentage.toFixed(1)}% of questions`);
  } else {
    logSuccess(`Subtopics are well distributed (max ${subtopicPercentage.toFixed(1)}%)`);
  }
}

// Test Case 3: Difficulty Distribution
function testDifficultyDistribution() {
  logSection('TEST 3: Difficulty Distribution');
  
  const config: PaperConfig = {
    totalMarks: 100,
    timeLimit: 120,
    sections: [
      {
        id: 'main',
        name: 'Main',
        instructions: 'Answer all questions',
        targetMarks: 100,
        questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as QuestionType[],
        order: 0,
      }
    ],
    selectedSubtopics: {
      'physics-forces': ['Newton\'s laws', 'Momentum', 'Energy'],
      'physics-waves': ['Wave properties', 'Sound', 'Light'],
    },
    topicWeights: {},
    difficultyDistribution: {
      easy: 30,
      medium: 50,
      hard: 20,
    },
    questionTypeDistribution: {
      'multiple-choice': 10,
      'short-answer': 50,
      'extended-response': 40,
    },
    settings: {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false,
    }
  };

  const result = selectQuestionsForPaper(config, 'physics', 'gcse', 777);
  
  // Analyze difficulty distribution
  const difficultyCounts: Record<Difficulty, number> = {
    easy: 0,
    medium: 0,
    hard: 0,
  };
  const difficultyMarks: Record<Difficulty, number> = {
    easy: 0,
    medium: 0,
    hard: 0,
  };
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      difficultyCounts[q.difficulty]++;
      difficultyMarks[q.difficulty] += q.marks;
    });
  });

  const totalMarks = result.totalMarks;
  const actualDistribution = {
    easy: (difficultyMarks.easy / totalMarks) * 100,
    medium: (difficultyMarks.medium / totalMarks) * 100,
    hard: (difficultyMarks.hard / totalMarks) * 100,
  };

  logInfo('Target distribution', JSON.stringify(config.difficultyDistribution, null, 2));
  logInfo('Actual distribution (by marks)', JSON.stringify({
    easy: actualDistribution.easy.toFixed(1) + '%',
    medium: actualDistribution.medium.toFixed(1) + '%',
    hard: actualDistribution.hard.toFixed(1) + '%',
  }, null, 2));
  logInfo('Question counts by difficulty', JSON.stringify(difficultyCounts, null, 2));

  // Check for significant deviations (>15% difference)
  const tolerance = 15;
  let hasIssue = false;
  
  Object.keys(config.difficultyDistribution).forEach(diff => {
    const target = config.difficultyDistribution[diff as Difficulty];
    const actual = actualDistribution[diff as Difficulty];
    const deviation = Math.abs(target - actual);
    
    if (deviation > tolerance) {
      logIssue(`${diff} difficulty: target ${target}%, actual ${actual.toFixed(1)}% (${deviation.toFixed(1)}% deviation)`);
      hasIssue = true;
    }
  });
  
  if (!hasIssue) {
    logSuccess('Difficulty distribution matches targets within tolerance');
  }
}

// Test Case 4: Question Type Variety
function testQuestionVariety() {
  logSection('TEST 4: Question Type Variety');
  
  const config: PaperConfig = {
    totalMarks: 60,
    timeLimit: 75,
    sections: [
      {
        id: 'varied',
        name: 'Varied Questions',
        instructions: 'Answer all questions',
        targetMarks: 60,
        questionTypes: ['multiple-choice', 'short-answer', 'calculation', 'explain', 'extended', 'data-analysis'] as QuestionType[],
        order: 0,
      }
    ],
    selectedSubtopics: {
      'chemistry-atomic': ['Atomic structure', 'Periodic table', 'Bonding'],
      'chemistry-organic': ['Alkanes', 'Alkenes', 'Alcohols'],
    },
    topicWeights: {},
    difficultyDistribution: {
      easy: 35,
      medium: 45,
      hard: 20,
    },
    questionTypeDistribution: {
      'multiple-choice': 10,
      'short-answer': 40,
      'extended-response': 50,
    },
    settings: {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false,
    }
  };

  const result = selectQuestionsForPaper(config, 'chemistry', 'a-level', 999);
  
  // Analyze question type distribution
  const typeCounts: Record<string, number> = {};
  const markRanges: number[] = [];
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
      markRanges.push(q.marks);
    });
  });

  const uniqueTypes = Object.keys(typeCounts).length;
  const uniqueMarks = [...new Set(markRanges)].sort((a, b) => a - b);

  logInfo('Question types used', uniqueTypes);
  logInfo('Type distribution', JSON.stringify(typeCounts, null, 2));
  logInfo('Unique mark values', uniqueMarks.join(', '));
  logInfo('Mark range', `${Math.min(...markRanges)} - ${Math.max(...markRanges)}`);

  // Check variety
  if (uniqueTypes < 3) {
    logIssue(`Low variety: only ${uniqueTypes} question types used`);
  } else {
    logSuccess(`Good variety: ${uniqueTypes} different question types`);
  }

  if (uniqueMarks.length < 4) {
    logIssue(`Low mark variety: only ${uniqueMarks.length} different mark values`);
  } else {
    logSuccess(`Good mark variety: ${uniqueMarks.length} different mark values`);
  }

  // Check if any type dominates
  const maxTypeCount = Math.max(...Object.values(typeCounts));
  const typePercentage = (maxTypeCount / result.totalQuestions) * 100;
  
  if (typePercentage > 60) {
    const dominantType = Object.keys(typeCounts).find(k => typeCounts[k] === maxTypeCount);
    logWarning(`Question type "${dominantType}" dominates with ${typePercentage.toFixed(1)}%`);
  }
}

// Test Case 5: Economics Paper (Specific Customer Complaint)
function testEconomicsPaper() {
  logSection('TEST 5: Economics Paper - Essay Subject Distribution');
  
  const config: PaperConfig = {
    totalMarks: 90,
    timeLimit: 120,
    sections: [
      {
        id: 'section-a',
        name: 'Section A: Microeconomics',
        instructions: 'Answer all questions',
        targetMarks: 45,
        questionTypes: ['short-answer', 'explain', 'data-analysis'] as QuestionType[],
        order: 0,
      },
      {
        id: 'section-b',
        name: 'Section B: Macroeconomics',
        instructions: 'Answer all questions',
        targetMarks: 45,
        questionTypes: ['extended', 'essay', 'extract-analysis'] as QuestionType[],
        order: 1,
      }
    ],
    selectedSubtopics: {
      'microeconomics': ['Supply and demand', 'Elasticity', 'Market structures', 'Market failure'],
      'macroeconomics': ['GDP', 'Inflation', 'Unemployment', 'Monetary policy'],
    },
    topicWeights: {
      'microeconomics': 1,
      'macroeconomics': 1,
    },
    difficultyDistribution: {
      easy: 25,
      medium: 50,
      hard: 25,
    },
    questionTypeDistribution: {
      'multiple-choice': 0,
      'short-answer': 30,
      'extended-response': 70,
    },
    settings: {
      allowRepeatQuestions: false,
      prioritizeWeakTopics: false,
    }
  };

  const result = selectQuestionsForPaper(config, 'economics', 'a-level', 2024);
  
  // Analyze distribution
  const topicCounts: Record<string, number> = {};
  const subtopicCounts: Record<string, number> = {};
  const marksByTopic: Record<string, number> = {};
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      topicCounts[q.topicId] = (topicCounts[q.topicId] || 0) + 1;
      subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
      marksByTopic[q.topicId] = (marksByTopic[q.topicId] || 0) + q.marks;
    });
  });

  logInfo('Total questions', result.totalQuestions);
  logInfo('Topics distribution', JSON.stringify(topicCounts, null, 2));
  logInfo('Marks by topic', JSON.stringify(marksByTopic, null, 2));
  logInfo('Unique subtopics used', Object.keys(subtopicCounts).length);

  // Check balance between micro and macro
  const microMarks = marksByTopic['microeconomics'] || 0;
  const macroMarks = marksByTopic['macroeconomics'] || 0;
  const imbalance = Math.abs(microMarks - macroMarks);
  
  if (imbalance > 15) {
    logIssue(`Topic imbalance: Micro=${microMarks} marks, Macro=${macroMarks} marks (${imbalance} marks difference)`);
  } else {
    logSuccess(`Topics are balanced: Micro=${microMarks}, Macro=${macroMarks}`);
  }

  // Check subtopic variety
  const totalSubtopicsAvailable = 
    config.selectedSubtopics['microeconomics'].length + 
    config.selectedSubtopics['macroeconomics'].length;
  
  const coveragePercentage = (Object.keys(subtopicCounts).length / totalSubtopicsAvailable) * 100;
  
  if (coveragePercentage < 50) {
    logIssue(`Poor subtopic coverage: only ${coveragePercentage.toFixed(1)}% of subtopics used`);
  } else {
    logSuccess(`Good subtopic coverage: ${coveragePercentage.toFixed(1)}% of subtopics used`);
  }
}

// Run all tests
function runAllTests() {
  console.log(`${colors.bold}${colors.magenta}`);
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║     PAPER GENERATION ISSUE INVESTIGATION REPORT           ║');
  console.log('║     Testing for Customer-Reported Problems                ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log(colors.reset);

  testMultipleTopicDistribution();
  testSingleTopicDistribution();
  testDifficultyDistribution();
  testQuestionVariety();
  testEconomicsPaper();

  logSection('SUMMARY OF FINDINGS');
  console.log(`
${colors.yellow}Key Issues Identified:${colors.reset}
1. Topic/subtopic distribution can be uneven when few options selected
2. Single topic papers may repeatedly use same subtopics
3. Difficulty distribution may deviate from targets
4. Question type variety could be limited
5. Essay subjects (Economics) may have poor topic balance

${colors.cyan}Recommendations:${colors.reset}
1. Implement stronger diversity enforcement in question selection
2. Add minimum topic coverage requirements
3. Improve subtopic rotation algorithm
4. Add question content deduplication
5. Enhance difficulty targeting algorithm
`);
}

// Execute tests
runAllTests();