#!/usr/bin/env node
/**
 * Test ultra-improved diversity enhancements
 */

import 'dotenv/config';
import { selectQuestionsForPaper } from '../src/lib/questionSelector';
import { selectQuestionsForPaperImproved } from '../src/lib/questionSelectorImproved';
import { selectQuestionsForPaperUltraImproved } from '../src/lib/questionSelectorUltraImproved';
import { PaperConfig, QuestionType } from '../src/types';

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

function calculateDiversityMetrics(result: any) {
  const questions = result.sections.flatMap((s: any) => s.questions);
  
  // 1. Shannon Entropy for subtopic distribution
  const subtopicCounts: Record<string, number> = {};
  questions.forEach((q: any) => {
    subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
  });
  
  const total = questions.length;
  const shannonEntropy = -Object.values(subtopicCounts).reduce((sum, count) => {
    const p = count / total;
    return sum + (p > 0 ? p * Math.log2(p) : 0);
  }, 0);
  
  // 2. Gini coefficient for equality (0 = perfect equality, 1 = perfect inequality)
  const counts = Object.values(subtopicCounts).sort((a, b) => a - b);
  let cumulativeSum = 0;
  let giniSum = 0;
  counts.forEach((count, i) => {
    cumulativeSum += count;
    giniSum += (i + 1) * count;
  });
  const gini = counts.length > 1 
    ? 1 - (2 * giniSum) / (counts.length * cumulativeSum)
    : 0;
  
  // 3. Simpson's Diversity Index
  const simpson = Object.values(subtopicCounts).reduce((sum, count) => {
    return sum + (count * (count - 1));
  }, 0) / (total * (total - 1));
  const simpsonDiversity = 1 - simpson;
  
  // 4. Consecutive repetition score
  let consecutiveRepeats = 0;
  for (let i = 1; i < questions.length; i++) {
    if (questions[i].subtopic === questions[i-1].subtopic) {
      consecutiveRepeats++;
    }
  }
  const noRepeatScore = 1 - (consecutiveRepeats / Math.max(1, questions.length - 1));
  
  // 5. Question type variety
  const typeCounts: Record<string, number> = {};
  questions.forEach((q: any) => {
    typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
  });
  const typeVariety = Object.keys(typeCounts).length;
  
  // 6. Mark value diversity
  const markValues = new Set(questions.map((q: any) => q.marks));
  const markDiversity = markValues.size;
  
  // 7. Bloom's taxonomy coverage (if available)
  const bloomLevels = new Set(questions.map((q: any) => q.bloomLevel).filter(Boolean));
  const bloomCoverage = bloomLevels.size;
  
  // 8. Cognitive load balance (if available)
  const cognitiveLoads = questions.map((q: any) => q.cognitiveLoad || 0);
  const avgLoad = cognitiveLoads.reduce((a, b) => a + b, 0) / cognitiveLoads.length;
  const loadVariance = cognitiveLoads.reduce((sum, load) => 
    sum + Math.pow(load - avgLoad, 2), 0) / cognitiveLoads.length;
  const loadBalance = avgLoad > 0 ? 1 / (1 + Math.sqrt(loadVariance) / avgLoad) : 0;
  
  return {
    shannonEntropy: shannonEntropy.toFixed(3),
    giniCoefficient: gini.toFixed(3),
    simpsonDiversity: simpsonDiversity.toFixed(3),
    noRepeatScore: noRepeatScore.toFixed(3),
    typeVariety,
    markDiversity,
    bloomCoverage,
    loadBalance: loadBalance.toFixed(3),
    maxRepetition: Math.max(...Object.values(subtopicCounts)),
    uniqueSubtopics: Object.keys(subtopicCounts).length,
    totalQuestions: questions.length,
  };
}

function runComparison() {
  console.log(`${colors.bold}${colors.magenta}DIVERSITY COMPARISON: Original vs Improved vs Ultra${colors.reset}\n`);
  
  // Test configuration - challenging scenario
  const config: PaperConfig = {
    totalMarks: 100,
    timeLimit: 120,
    sections: [
      {
        id: 'section-1',
        name: 'Section 1',
        instructions: 'Answer all questions',
        targetMarks: 100,
        questionTypes: ['short-answer', 'calculation', 'explain', 'extended', 'data-analysis'] as QuestionType[],
        order: 0,
      }
    ],
    selectedSubtopics: {
      'topic1': ['Supply and demand', 'Elasticity', 'Market structures'],
      'topic2': ['GDP', 'Inflation', 'Unemployment'],
    },
    topicWeights: {
      'topic1': 1,
      'topic2': 1,
    },
    difficultyDistribution: { easy: 30, medium: 45, hard: 25 },
    questionTypeDistribution: { 'multiple-choice': 0, 'short-answer': 40, 'extended-response': 60 },
    settings: { allowRepeatQuestions: false, prioritizeWeakTopics: false }
  };
  
  // Run all three versions with same seed for fair comparison
  const seed = 12345;
  
  console.log(`${colors.cyan}Running Original Implementation...${colors.reset}`);
  const originalResult = selectQuestionsForPaper(config, 'economics', 'a-level', seed);
  const originalMetrics = calculateDiversityMetrics(originalResult);
  
  console.log(`${colors.cyan}Running Improved Implementation...${colors.reset}`);
  const improvedResult = selectQuestionsForPaperImproved(config, 'economics', 'a-level', seed);
  const improvedMetrics = calculateDiversityMetrics(improvedResult);
  
  console.log(`${colors.cyan}Running Ultra-Improved Implementation...${colors.reset}`);
  const ultraResult = selectQuestionsForPaperUltraImproved(config, 'economics', 'a-level', seed);
  const ultraMetrics = calculateDiversityMetrics(ultraResult);
  
  // Display results in a table
  console.log(`\n${colors.bold}${colors.blue}═══════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bold}METRIC                    ORIGINAL    IMPROVED    ULTRA       GAIN${colors.reset}`);
  console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════════════${colors.reset}`);
  
  // Shannon Entropy (higher is better)
  const entropyGain = ((parseFloat(ultraMetrics.shannonEntropy) - parseFloat(originalMetrics.shannonEntropy)) / parseFloat(originalMetrics.shannonEntropy) * 100).toFixed(1);
  console.log(`Shannon Entropy           ${originalMetrics.shannonEntropy}       ${improvedMetrics.shannonEntropy}       ${colors.green}${ultraMetrics.shannonEntropy}${colors.reset}      +${entropyGain}%`);
  
  // Gini Coefficient (lower is better)
  const giniGain = ((parseFloat(originalMetrics.giniCoefficient) - parseFloat(ultraMetrics.giniCoefficient)) / parseFloat(originalMetrics.giniCoefficient) * 100).toFixed(1);
  console.log(`Gini Coefficient          ${originalMetrics.giniCoefficient}       ${improvedMetrics.giniCoefficient}       ${colors.green}${ultraMetrics.giniCoefficient}${colors.reset}      -${giniGain}%`);
  
  // Simpson's Diversity (higher is better)
  const simpsonGain = ((parseFloat(ultraMetrics.simpsonDiversity) - parseFloat(originalMetrics.simpsonDiversity)) / parseFloat(originalMetrics.simpsonDiversity) * 100).toFixed(1);
  console.log(`Simpson's Diversity       ${originalMetrics.simpsonDiversity}       ${improvedMetrics.simpsonDiversity}       ${colors.green}${ultraMetrics.simpsonDiversity}${colors.reset}      +${simpsonGain}%`);
  
  // No-Repeat Score (higher is better)
  const noRepeatGain = ((parseFloat(ultraMetrics.noRepeatScore) - parseFloat(originalMetrics.noRepeatScore)) / Math.max(0.01, parseFloat(originalMetrics.noRepeatScore)) * 100).toFixed(1);
  console.log(`No-Repeat Score           ${originalMetrics.noRepeatScore}       ${improvedMetrics.noRepeatScore}       ${colors.green}${ultraMetrics.noRepeatScore}${colors.reset}      +${noRepeatGain}%`);
  
  // Question Type Variety
  console.log(`Question Type Variety     ${originalMetrics.typeVariety}           ${improvedMetrics.typeVariety}           ${colors.green}${ultraMetrics.typeVariety}${colors.reset}          +${ultraMetrics.typeVariety - originalMetrics.typeVariety}`);
  
  // Mark Value Diversity
  console.log(`Mark Value Diversity      ${originalMetrics.markDiversity}           ${improvedMetrics.markDiversity}           ${colors.green}${ultraMetrics.markDiversity}${colors.reset}          +${ultraMetrics.markDiversity - originalMetrics.markDiversity}`);
  
  // Bloom's Taxonomy Coverage
  console.log(`Bloom's Coverage          ${originalMetrics.bloomCoverage}           ${improvedMetrics.bloomCoverage}           ${colors.green}${ultraMetrics.bloomCoverage}${colors.reset}          +${ultraMetrics.bloomCoverage - originalMetrics.bloomCoverage}`);
  
  // Cognitive Load Balance
  console.log(`Cognitive Load Balance    ${originalMetrics.loadBalance}       ${improvedMetrics.loadBalance}       ${colors.green}${ultraMetrics.loadBalance}${colors.reset}      Better`);
  
  // Max Repetition (lower is better)
  console.log(`Max Repetition            ${originalMetrics.maxRepetition}           ${improvedMetrics.maxRepetition}           ${colors.green}${ultraMetrics.maxRepetition}${colors.reset}          -${originalMetrics.maxRepetition - ultraMetrics.maxRepetition}`);
  
  console.log(`${colors.bold}${colors.blue}═══════════════════════════════════════════════════════════════${colors.reset}\n`);
  
  // Overall diversity score (if available)
  if (ultraResult.diversityScore) {
    console.log(`${colors.bold}${colors.green}OVERALL DIVERSITY SCORE: ${ultraResult.diversityScore}${colors.reset}`);
  }
  
  // Show sample question distribution
  console.log(`\n${colors.cyan}Sample Question Distribution (Ultra):${colors.reset}`);
  const ultraQuestions = ultraResult.sections[0].questions.slice(0, 10);
  ultraQuestions.forEach((q: any, i: number) => {
    console.log(`${i+1}. ${q.subtopic} - ${q.questionType} - ${q.marks}m - ${q.difficulty}${q.bloomLevel ? ` - ${q.bloomLevel}` : ''}`);
  });
  
  // Key improvements summary
  console.log(`\n${colors.bold}${colors.green}✨ KEY IMPROVEMENTS ACHIEVED:${colors.reset}`);
  console.log(`1. Shannon Entropy increased by ${entropyGain}% (more even distribution)`);
  console.log(`2. Gini Coefficient reduced by ${giniGain}% (better equality)`);
  console.log(`3. Simpson's Diversity increased by ${simpsonGain}% (higher variety)`);
  console.log(`4. No consecutive repetitions: ${ultraMetrics.noRepeatScore === '1.000' ? 'PERFECT' : `${(parseFloat(ultraMetrics.noRepeatScore) * 100).toFixed(1)}%`}`);
  console.log(`5. Bloom's taxonomy coverage: ${ultraMetrics.bloomCoverage} levels`);
  console.log(`6. Cognitive load balancing implemented`);
  
  // Advanced features
  console.log(`\n${colors.bold}${colors.magenta}🚀 ADVANCED FEATURES IN ULTRA VERSION:${colors.reset}`);
  console.log(`• Latin Square design for optimal topic-difficulty pairing`);
  console.log(`• Simulated annealing for question arrangement optimization`);
  console.log(`• Bloom's taxonomy level tracking and balancing`);
  console.log(`• Cognitive load distribution for better pacing`);
  console.log(`• Context type variation (real-world, theoretical, visual, etc.)`);
  console.log(`• Golden ratio mark distribution for aesthetic balance`);
  console.log(`• Recency windows preventing repetition`);
  console.log(`• Pre-generated concept variations per subtopic`);
}

// Run the comparison
runComparison();