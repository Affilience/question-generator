#!/usr/bin/env node
/**
 * EXHAUSTIVE TEST SUITE FOR ULTRA VERSION
 * Tests every possible scenario to ensure Ultra outperforms all other versions
 */

import 'dotenv/config';
import { selectQuestionsForPaper } from '../src/lib/questionSelector';
import { selectQuestionsForPaperImproved } from '../src/lib/questionSelectorImproved';
import { selectQuestionsForPaperUltraImproved } from '../src/lib/questionSelectorUltraImproved';
import { PaperConfig, QuestionType, Difficulty, Subject } from '../src/types';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
};

interface TestResult {
  name: string;
  original: number;
  improved: number;
  ultra: number;
  ultraWins: boolean;
  improvement: string;
}

interface DiversityMetrics {
  shannonEntropy: number;
  giniCoefficient: number;
  simpsonDiversity: number;
  noRepeatScore: number;
  typeVariety: number;
  markDiversity: number;
  bloomCoverage: number;
  cognitiveLoadBalance: number;
  maxRepetition: number;
  uniqueSubtopics: number;
  averageGap: number; // Average gap between same subtopic appearances
  distributionScore: number;
  overallScore: number;
}

class ExhaustiveTestRunner {
  private testResults: TestResult[] = [];
  private failures: string[] = [];
  private performanceData: any[] = [];

  /**
   * Calculate comprehensive diversity metrics
   */
  private calculateDiversityMetrics(result: any): DiversityMetrics {
    const questions = result.sections.flatMap((s: any) => s.questions);
    
    if (questions.length === 0) {
      return {
        shannonEntropy: 0,
        giniCoefficient: 1,
        simpsonDiversity: 0,
        noRepeatScore: 0,
        typeVariety: 0,
        markDiversity: 0,
        bloomCoverage: 0,
        cognitiveLoadBalance: 0,
        maxRepetition: 0,
        uniqueSubtopics: 0,
        averageGap: 0,
        distributionScore: 0,
        overallScore: 0,
      };
    }
    
    // 1. Shannon Entropy
    const subtopicCounts: Record<string, number> = {};
    questions.forEach((q: any) => {
      subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
    });
    
    const total = questions.length;
    const shannonEntropy = -Object.values(subtopicCounts).reduce((sum, count) => {
      const p = count / total;
      return sum + (p > 0 ? p * Math.log2(p) : 0);
    }, 0);
    
    // 2. Gini Coefficient
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
    
    // 3. Simpson's Diversity
    const simpson = Object.values(subtopicCounts).reduce((sum, count) => {
      return sum + (count * (count - 1));
    }, 0) / (total * (total - 1));
    const simpsonDiversity = 1 - simpson;
    
    // 4. No-Repeat Score
    let consecutiveRepeats = 0;
    for (let i = 1; i < questions.length; i++) {
      if (questions[i].subtopic === questions[i-1].subtopic) {
        consecutiveRepeats++;
      }
    }
    const noRepeatScore = 1 - (consecutiveRepeats / Math.max(1, questions.length - 1));
    
    // 5. Type Variety
    const typeCounts: Record<string, number> = {};
    questions.forEach((q: any) => {
      typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
    });
    const typeVariety = Object.keys(typeCounts).length;
    
    // 6. Mark Diversity
    const markValues = new Set(questions.map((q: any) => q.marks));
    const markDiversity = markValues.size;
    
    // 7. Bloom's Coverage
    const bloomLevels = new Set(questions.map((q: any) => q.bloomLevel).filter(Boolean));
    const bloomCoverage = bloomLevels.size;
    
    // 8. Cognitive Load Balance
    const cognitiveLoads = questions.map((q: any) => q.cognitiveLoad || 0);
    const avgLoad = cognitiveLoads.reduce((a, b) => a + b, 0) / Math.max(1, cognitiveLoads.length);
    const loadVariance = cognitiveLoads.reduce((sum, load) => 
      sum + Math.pow(load - avgLoad, 2), 0) / Math.max(1, cognitiveLoads.length);
    const cognitiveLoadBalance = avgLoad > 0 ? 1 / (1 + Math.sqrt(loadVariance) / avgLoad) : 0;
    
    // 9. Max Repetition
    const maxRepetition = Math.max(...Object.values(subtopicCounts));
    
    // 10. Unique Subtopics
    const uniqueSubtopics = Object.keys(subtopicCounts).length;
    
    // 11. Average Gap between same subtopic
    const subtopicPositions: Record<string, number[]> = {};
    questions.forEach((q: any, i: number) => {
      if (!subtopicPositions[q.subtopic]) {
        subtopicPositions[q.subtopic] = [];
      }
      subtopicPositions[q.subtopic].push(i);
    });
    
    let totalGaps = 0;
    let gapCount = 0;
    Object.values(subtopicPositions).forEach(positions => {
      for (let i = 1; i < positions.length; i++) {
        totalGaps += positions[i] - positions[i-1];
        gapCount++;
      }
    });
    const averageGap = gapCount > 0 ? totalGaps / gapCount : questions.length;
    
    // 12. Distribution Score
    const idealCount = total / Math.max(1, uniqueSubtopics);
    const variance = Object.values(subtopicCounts).reduce((sum, count) => 
      sum + Math.pow(count - idealCount, 2), 0) / Math.max(1, uniqueSubtopics);
    const distributionScore = 1 / (1 + Math.sqrt(variance));
    
    // 13. Overall Score (weighted combination)
    const overallScore = 
      shannonEntropy * 20 +
      (1 - Math.abs(gini)) * 10 +
      simpsonDiversity * 15 +
      noRepeatScore * 25 +
      (typeVariety / 10) * 10 +
      (markDiversity / 10) * 5 +
      (bloomCoverage / 6) * 10 +
      cognitiveLoadBalance * 5 +
      (1 / (1 + maxRepetition)) * 10 +
      distributionScore * 10;
    
    return {
      shannonEntropy,
      giniCoefficient: gini,
      simpsonDiversity,
      noRepeatScore,
      typeVariety,
      markDiversity,
      bloomCoverage,
      cognitiveLoadBalance,
      maxRepetition,
      uniqueSubtopics,
      averageGap,
      distributionScore,
      overallScore,
    };
  }

  /**
   * Run a single test scenario
   */
  private runTest(name: string, config: PaperConfig, subject: string, qualification: string = 'a-level'): TestResult {
    console.log(`${colors.dim}Testing: ${name}...${colors.reset}`);
    
    const seed = Math.floor(Math.random() * 10000);
    
    try {
      // Run all three versions
      const originalStart = Date.now();
      const originalResult = selectQuestionsForPaper(config, subject, qualification, seed);
      const originalTime = Date.now() - originalStart;
      const originalMetrics = this.calculateDiversityMetrics(originalResult);
      
      const improvedStart = Date.now();
      const improvedResult = selectQuestionsForPaperImproved(config, subject, qualification, seed);
      const improvedTime = Date.now() - improvedStart;
      const improvedMetrics = this.calculateDiversityMetrics(improvedResult);
      
      const ultraStart = Date.now();
      const ultraResult = selectQuestionsForPaperUltraImproved(config, subject, qualification, seed);
      const ultraTime = Date.now() - ultraStart;
      const ultraMetrics = this.calculateDiversityMetrics(ultraResult);
      
      // Store performance data
      this.performanceData.push({
        test: name,
        originalTime,
        improvedTime,
        ultraTime,
      });
      
      // Check if Ultra wins
      const ultraWins = ultraMetrics.overallScore >= originalMetrics.overallScore && 
                       ultraMetrics.overallScore >= improvedMetrics.overallScore;
      
      const improvement = ((ultraMetrics.overallScore - originalMetrics.overallScore) / 
                          Math.max(0.01, originalMetrics.overallScore) * 100).toFixed(1);
      
      const result: TestResult = {
        name,
        original: originalMetrics.overallScore,
        improved: improvedMetrics.overallScore,
        ultra: ultraMetrics.overallScore,
        ultraWins,
        improvement: `+${improvement}%`,
      };
      
      this.testResults.push(result);
      
      // Log individual metrics if Ultra doesn't win
      if (!ultraWins) {
        console.log(`${colors.yellow}⚠️  Ultra didn't win in: ${name}${colors.reset}`);
        console.log(`   Original: ${originalMetrics.overallScore.toFixed(2)}`);
        console.log(`   Improved: ${improvedMetrics.overallScore.toFixed(2)}`);
        console.log(`   Ultra: ${ultraMetrics.overallScore.toFixed(2)}`);
        this.failures.push(`${name}: Ultra (${ultraMetrics.overallScore.toFixed(2)}) vs Best (${Math.max(originalMetrics.overallScore, improvedMetrics.overallScore).toFixed(2)})`);
      }
      
      return result;
      
    } catch (error) {
      console.error(`${colors.red}Error in test ${name}: ${error}${colors.reset}`);
      this.failures.push(`${name}: ${error}`);
      return {
        name,
        original: 0,
        improved: 0,
        ultra: 0,
        ultraWins: false,
        improvement: 'ERROR',
      };
    }
  }

  /**
   * Run all test scenarios
   */
  runAllTests() {
    console.log(`${colors.bold}${colors.magenta}EXHAUSTIVE ULTRA VERSION TESTING${colors.reset}\n`);
    
    // TEST CATEGORY 1: Basic Configurations
    console.log(`${colors.cyan}Category 1: Basic Configurations${colors.reset}`);
    
    this.runTest('Small Paper (20 marks)', {
      totalMarks: 20,
      timeLimit: 30,
      sections: [{ id: 's1', name: 'Section 1', targetMarks: 20, questionTypes: ['short-answer', 'calculation'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C'] },
      difficultyDistribution: { easy: 40, medium: 40, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'maths');
    
    this.runTest('Medium Paper (60 marks)', {
      totalMarks: 60,
      timeLimit: 90,
      sections: [{ id: 's1', name: 'Section 1', targetMarks: 60, questionTypes: ['short-answer', 'calculation', 'explain'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C'], 'topic2': ['D', 'E', 'F'] },
      difficultyDistribution: { easy: 30, medium: 50, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'physics');
    
    this.runTest('Large Paper (150 marks)', {
      totalMarks: 150,
      timeLimit: 180,
      sections: [
        { id: 's1', name: 'Section A', targetMarks: 75, questionTypes: ['short-answer', 'calculation'] as QuestionType[], order: 0, instructions: '' },
        { id: 's2', name: 'Section B', targetMarks: 75, questionTypes: ['extended', 'essay'] as QuestionType[], order: 1, instructions: '' }
      ],
      selectedSubtopics: { 
        'topic1': ['A', 'B', 'C', 'D'], 
        'topic2': ['E', 'F', 'G', 'H'],
        'topic3': ['I', 'J', 'K', 'L']
      },
      difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'chemistry');
    
    // TEST CATEGORY 2: Edge Cases
    console.log(`\n${colors.cyan}Category 2: Edge Cases${colors.reset}`);
    
    this.runTest('Single Topic Single Subtopic', {
      totalMarks: 40,
      timeLimit: 60,
      sections: [{ id: 's1', name: 'Main', targetMarks: 40, questionTypes: ['short-answer', 'explain'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['OnlySubtopic'] },
      difficultyDistribution: { easy: 30, medium: 40, hard: 30 },
      questionTypeDistribution: {},
      settings: {},
    }, 'biology');
    
    this.runTest('Many Topics Few Marks', {
      totalMarks: 30,
      timeLimit: 45,
      sections: [{ id: 's1', name: 'Main', targetMarks: 30, questionTypes: ['short-answer'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 
        't1': ['A'], 't2': ['B'], 't3': ['C'], 't4': ['D'], 
        't5': ['E'], 't6': ['F'], 't7': ['G'], 't8': ['H']
      },
      difficultyDistribution: { easy: 40, medium: 40, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'maths');
    
    this.runTest('Single Topic Many Subtopics', {
      totalMarks: 100,
      timeLimit: 120,
      sections: [{ id: 's1', name: 'Main', targetMarks: 100, questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 
        'topic1': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
      },
      difficultyDistribution: { easy: 30, medium: 45, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'economics');
    
    // TEST CATEGORY 3: Extreme Distributions
    console.log(`\n${colors.cyan}Category 3: Extreme Distributions${colors.reset}`);
    
    this.runTest('All Easy Questions', {
      totalMarks: 50,
      timeLimit: 60,
      sections: [{ id: 's1', name: 'Main', targetMarks: 50, questionTypes: ['short-answer', 'multiple-choice'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C'] },
      difficultyDistribution: { easy: 100, medium: 0, hard: 0 },
      questionTypeDistribution: {},
      settings: {},
    }, 'history');
    
    this.runTest('All Hard Questions', {
      totalMarks: 50,
      timeLimit: 90,
      sections: [{ id: 's1', name: 'Main', targetMarks: 50, questionTypes: ['extended', 'essay', 'proof'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C'] },
      difficultyDistribution: { easy: 0, medium: 0, hard: 100 },
      questionTypeDistribution: {},
      settings: {},
    }, 'further-maths');
    
    this.runTest('Extreme Mixed Distribution', {
      totalMarks: 80,
      timeLimit: 100,
      sections: [{ id: 's1', name: 'Main', targetMarks: 80, questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B'], 'topic2': ['C', 'D'] },
      difficultyDistribution: { easy: 5, medium: 90, hard: 5 },
      questionTypeDistribution: {},
      settings: {},
    }, 'physics');
    
    // TEST CATEGORY 4: Different Subjects
    console.log(`\n${colors.cyan}Category 4: Subject-Specific Tests${colors.reset}`);
    
    const subjects: Array<{name: string, subject: Subject}> = [
      { name: 'Mathematics', subject: 'maths' },
      { name: 'Physics', subject: 'physics' },
      { name: 'Chemistry', subject: 'chemistry' },
      { name: 'Biology', subject: 'biology' },
      { name: 'Economics', subject: 'economics' },
      { name: 'Business', subject: 'business' },
      { name: 'History', subject: 'history' },
      { name: 'English Literature', subject: 'english-literature' },
      { name: 'Psychology', subject: 'psychology' },
      { name: 'Geography', subject: 'geography' },
      { name: 'Computer Science', subject: 'computer-science' },
    ];
    
    subjects.forEach(({ name, subject }) => {
      this.runTest(`${name} Standard Paper`, {
        totalMarks: 70,
        timeLimit: 90,
        sections: [{ id: 's1', name: 'Main', targetMarks: 70, questionTypes: ['short-answer', 'explain', 'extended'] as QuestionType[], order: 0, instructions: '' }],
        selectedSubtopics: { 
          'topic1': ['Subtopic A', 'Subtopic B'],
          'topic2': ['Subtopic C', 'Subtopic D']
        },
        difficultyDistribution: { easy: 30, medium: 50, hard: 20 },
        questionTypeDistribution: {},
        settings: {},
      }, subject);
    });
    
    // TEST CATEGORY 5: Question Type Variety
    console.log(`\n${colors.cyan}Category 5: Question Type Variety${colors.reset}`);
    
    this.runTest('Single Question Type', {
      totalMarks: 40,
      timeLimit: 60,
      sections: [{ id: 's1', name: 'Main', targetMarks: 40, questionTypes: ['calculation'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C'] },
      difficultyDistribution: { easy: 30, medium: 50, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'maths');
    
    this.runTest('Maximum Type Variety', {
      totalMarks: 100,
      timeLimit: 120,
      sections: [{ id: 's1', name: 'Main', targetMarks: 100, questionTypes: [
        'multiple-choice', 'short-answer', 'calculation', 'explain', 
        'extended', 'essay', 'data-analysis', 'graph', 'compare', 
        'proof', 'show-that'
      ] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B', 'C', 'D', 'E'] },
      difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'physics');
    
    // TEST CATEGORY 6: Multi-Section Papers
    console.log(`\n${colors.cyan}Category 6: Multi-Section Papers${colors.reset}`);
    
    this.runTest('Three Section Paper', {
      totalMarks: 120,
      timeLimit: 150,
      sections: [
        { id: 's1', name: 'Section A', targetMarks: 40, questionTypes: ['short-answer', 'multiple-choice'] as QuestionType[], order: 0, instructions: '' },
        { id: 's2', name: 'Section B', targetMarks: 40, questionTypes: ['calculation', 'explain'] as QuestionType[], order: 1, instructions: '' },
        { id: 's3', name: 'Section C', targetMarks: 40, questionTypes: ['extended', 'essay'] as QuestionType[], order: 2, instructions: '' }
      ],
      selectedSubtopics: { 
        'topic1': ['A', 'B', 'C'],
        'topic2': ['D', 'E', 'F'],
        'topic3': ['G', 'H', 'I']
      },
      difficultyDistribution: { easy: 30, medium: 45, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'chemistry');
    
    // TEST CATEGORY 7: Stress Tests
    console.log(`\n${colors.cyan}Category 7: Stress Tests${colors.reset}`);
    
    this.runTest('Maximum Subtopics (20)', {
      totalMarks: 200,
      timeLimit: 240,
      sections: [{ id: 's1', name: 'Main', targetMarks: 200, questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 
        't1': ['A', 'B', 'C', 'D', 'E'],
        't2': ['F', 'G', 'H', 'I', 'J'],
        't3': ['K', 'L', 'M', 'N', 'O'],
        't4': ['P', 'Q', 'R', 'S', 'T']
      },
      difficultyDistribution: { easy: 30, medium: 50, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'economics');
    
    this.runTest('Minimum Marks (10)', {
      totalMarks: 10,
      timeLimit: 15,
      sections: [{ id: 's1', name: 'Main', targetMarks: 10, questionTypes: ['short-answer'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 'topic1': ['A', 'B'] },
      difficultyDistribution: { easy: 50, medium: 50, hard: 0 },
      questionTypeDistribution: {},
      settings: {},
    }, 'biology');
    
    this.runTest('Maximum Marks (300)', {
      totalMarks: 300,
      timeLimit: 360,
      sections: [{ id: 's1', name: 'Main', targetMarks: 300, questionTypes: ['short-answer', 'calculation', 'explain', 'extended', 'essay'] as QuestionType[], order: 0, instructions: '' }],
      selectedSubtopics: { 
        't1': ['A', 'B', 'C'],
        't2': ['D', 'E', 'F'],
        't3': ['G', 'H', 'I']
      },
      difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'physics');
    
    // TEST CATEGORY 8: Real-World Scenarios
    console.log(`\n${colors.cyan}Category 8: Real-World Scenarios${colors.reset}`);
    
    this.runTest('GCSE Maths Paper 1 Style', {
      totalMarks: 80,
      timeLimit: 90,
      sections: [
        { id: 'non-calc', name: 'Non-Calculator', targetMarks: 80, questionTypes: ['short-answer', 'calculation', 'explain', 'show-that'] as QuestionType[], order: 0, instructions: 'No calculator allowed' }
      ],
      selectedSubtopics: { 
        'number': ['Fractions', 'Percentages', 'Ratio'],
        'algebra': ['Linear equations', 'Quadratics', 'Graphs'],
        'geometry': ['Angles', 'Area', 'Volume'],
        'statistics': ['Averages', 'Probability']
      },
      difficultyDistribution: { easy: 40, medium: 40, hard: 20 },
      questionTypeDistribution: {},
      settings: {},
    }, 'maths', 'gcse');
    
    this.runTest('A-Level Physics Paper 2 Style', {
      totalMarks: 100,
      timeLimit: 120,
      sections: [
        { id: 'section-a', name: 'Section A', targetMarks: 70, questionTypes: ['short-answer', 'calculation', 'explain'] as QuestionType[], order: 0, instructions: '' },
        { id: 'section-b', name: 'Section B', targetMarks: 30, questionTypes: ['extended', 'data-analysis'] as QuestionType[], order: 1, instructions: '' }
      ],
      selectedSubtopics: { 
        'mechanics': ['Forces', 'Energy', 'Momentum'],
        'waves': ['Wave properties', 'Optics', 'Sound'],
        'electricity': ['Circuits', 'Fields', 'Magnetism']
      },
      difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
      questionTypeDistribution: {},
      settings: {},
    }, 'physics', 'a-level');
    
    this.runTest('Economics Essay Paper Style', {
      totalMarks: 90,
      timeLimit: 135,
      sections: [
        { id: 'section-a', name: 'Section A: Short Questions', targetMarks: 30, questionTypes: ['short-answer', 'explain'] as QuestionType[], order: 0, instructions: '' },
        { id: 'section-b', name: 'Section B: Data Response', targetMarks: 30, questionTypes: ['data-analysis', 'extract-analysis'] as QuestionType[], order: 1, instructions: '' },
        { id: 'section-c', name: 'Section C: Essays', targetMarks: 30, questionTypes: ['essay'] as QuestionType[], order: 2, instructions: 'Choose one question' }
      ],
      selectedSubtopics: { 
        'micro': ['Supply and demand', 'Market structures', 'Market failure'],
        'macro': ['GDP', 'Inflation', 'Unemployment', 'Fiscal policy']
      },
      difficultyDistribution: { easy: 20, medium: 50, hard: 30 },
      questionTypeDistribution: {},
      settings: {},
    }, 'economics', 'a-level');
  }

  /**
   * Generate performance report
   */
  generateReport() {
    console.log(`\n${colors.bold}${colors.blue}${'='.repeat(80)}${colors.reset}`);
    console.log(`${colors.bold}${colors.blue}COMPREHENSIVE TEST RESULTS${colors.reset}`);
    console.log(`${colors.bold}${colors.blue}${'='.repeat(80)}${colors.reset}\n`);
    
    // Summary statistics
    const totalTests = this.testResults.length;
    const ultraWins = this.testResults.filter(r => r.ultraWins).length;
    const winRate = (ultraWins / totalTests * 100).toFixed(1);
    
    // Average scores
    const avgOriginal = this.testResults.reduce((sum, r) => sum + r.original, 0) / totalTests;
    const avgImproved = this.testResults.reduce((sum, r) => sum + r.improved, 0) / totalTests;
    const avgUltra = this.testResults.reduce((sum, r) => sum + r.ultra, 0) / totalTests;
    
    // Average improvement
    const improvements = this.testResults.map(r => parseFloat(r.improvement.replace('+', '').replace('%', '')));
    const avgImprovement = improvements.reduce((sum, i) => sum + i, 0) / improvements.length;
    
    console.log(`${colors.cyan}SUMMARY STATISTICS:${colors.reset}`);
    console.log(`Total Tests Run: ${totalTests}`);
    console.log(`Ultra Win Rate: ${ultraWins}/${totalTests} (${winRate}%)`);
    console.log(`Average Scores:`);
    console.log(`  Original: ${avgOriginal.toFixed(2)}`);
    console.log(`  Improved: ${avgImproved.toFixed(2)}`);
    console.log(`  Ultra: ${colors.green}${avgUltra.toFixed(2)}${colors.reset}`);
    console.log(`Average Improvement: ${colors.green}+${avgImprovement.toFixed(1)}%${colors.reset}`);
    
    // Performance metrics
    console.log(`\n${colors.cyan}PERFORMANCE METRICS:${colors.reset}`);
    const avgOriginalTime = this.performanceData.reduce((sum, p) => sum + p.originalTime, 0) / this.performanceData.length;
    const avgImprovedTime = this.performanceData.reduce((sum, p) => sum + p.improvedTime, 0) / this.performanceData.length;
    const avgUltraTime = this.performanceData.reduce((sum, p) => sum + p.ultraTime, 0) / this.performanceData.length;
    
    console.log(`Average Generation Time:`);
    console.log(`  Original: ${avgOriginalTime.toFixed(0)}ms`);
    console.log(`  Improved: ${avgImprovedTime.toFixed(0)}ms (+${((avgImprovedTime/avgOriginalTime - 1) * 100).toFixed(0)}%)`);
    console.log(`  Ultra: ${avgUltraTime.toFixed(0)}ms (+${((avgUltraTime/avgOriginalTime - 1) * 100).toFixed(0)}%)`);
    
    // Detailed results table
    console.log(`\n${colors.cyan}DETAILED RESULTS:${colors.reset}`);
    console.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}`);
    console.log(`Test Name                                    Orig   Impv   Ultra  Gain   Win`);
    console.log(`${colors.dim}${'─'.repeat(80)}${colors.reset}`);
    
    this.testResults.forEach(result => {
      const name = result.name.padEnd(44, ' ').substring(0, 44);
      const orig = result.original.toFixed(1).padStart(6);
      const impv = result.improved.toFixed(1).padStart(6);
      const ultra = result.ultra.toFixed(1).padStart(6);
      const gain = result.improvement.padStart(7);
      const win = result.ultraWins ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`;
      
      const color = result.ultraWins ? colors.reset : colors.yellow;
      console.log(`${color}${name} ${orig} ${impv} ${ultra} ${gain}  ${win}${colors.reset}`);
    });
    
    // Failures
    if (this.failures.length > 0) {
      console.log(`\n${colors.red}FAILURES AND ISSUES:${colors.reset}`);
      this.failures.forEach(failure => {
        console.log(`  ${colors.red}✗${colors.reset} ${failure}`);
      });
    }
    
    // Final verdict
    console.log(`\n${colors.bold}${colors.magenta}${'='.repeat(80)}${colors.reset}`);
    console.log(`${colors.bold}${colors.magenta}FINAL VERDICT${colors.reset}`);
    console.log(`${colors.bold}${colors.magenta}${'='.repeat(80)}${colors.reset}\n`);
    
    if (winRate === '100.0') {
      console.log(`${colors.bold}${colors.green}✅ PERFECT! Ultra version wins in ALL ${totalTests} test scenarios!${colors.reset}`);
      console.log(`${colors.green}Average improvement: +${avgImprovement.toFixed(1)}% over original${colors.reset}`);
      console.log(`${colors.green}The Ultra version is ready for production deployment.${colors.reset}`);
    } else if (parseFloat(winRate) >= 95) {
      console.log(`${colors.bold}${colors.green}✅ EXCELLENT! Ultra version wins in ${winRate}% of scenarios.${colors.reset}`);
      console.log(`${colors.yellow}Minor issues in ${this.failures.length} edge cases need review.${colors.reset}`);
    } else if (parseFloat(winRate) >= 90) {
      console.log(`${colors.bold}${colors.yellow}⚠️  GOOD: Ultra version wins in ${winRate}% of scenarios.${colors.reset}`);
      console.log(`${colors.yellow}Some optimization needed for edge cases.${colors.reset}`);
    } else {
      console.log(`${colors.bold}${colors.red}❌ NEEDS WORK: Ultra version only wins in ${winRate}% of scenarios.${colors.reset}`);
      console.log(`${colors.red}Significant improvements required before deployment.${colors.reset}`);
    }
    
    // Recommendations
    console.log(`\n${colors.cyan}RECOMMENDATIONS:${colors.reset}`);
    if (parseFloat(winRate) === 100) {
      console.log(`1. ✅ Deploy Ultra version to production`);
      console.log(`2. ✅ Monitor diversity metrics in production`);
      console.log(`3. ✅ Collect user feedback on paper quality`);
    } else {
      console.log(`1. ⚠️  Review and fix failing test cases`);
      console.log(`2. ⚠️  Optimize performance bottlenecks`);
      console.log(`3. ⚠️  Re-test after improvements`);
    }
  }
}

// Run exhaustive tests
console.log(`${colors.bold}${colors.magenta}Starting exhaustive test suite...${colors.reset}\n`);
const runner = new ExhaustiveTestRunner();
runner.runAllTests();
runner.generateReport();