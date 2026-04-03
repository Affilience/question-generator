#!/usr/bin/env node
/**
 * Comprehensive Mark Scheme Testing
 * Ensures mark schemes match allocated marks exactly and provide appropriate detail
 */

import 'dotenv/config';
import { Subject, Difficulty, QualificationLevel, ExamBoard } from '../src/types';
import { generateEnhancedMarkScheme, EnhancedMarkScheme } from '../src/lib/enhancedMarkScheme';
import { getSubjectSpecificProfile } from '../src/lib/subjectSpecificDifficulty';

interface MarkSchemeTest {
  subject: Subject;
  level: QualificationLevel;
  board: ExamBoard;
  difficulty: Difficulty;
  allocatedMarks: number;
  questionType: string;
  topic: string;
  expected: {
    totalMarks: number;
    schemeType: 'points' | 'levels' | 'banded' | 'mixed';
    hasAlternatives: boolean;
    hasLevelDescriptors: boolean;
    hasAOBreakdown: boolean;
  };
}

const TEST_CASES: MarkSchemeTest[] = [
  // MATHEMATICS - Various mark allocations
  {
    subject: 'maths',
    level: 'a-level',
    board: 'edexcel',
    difficulty: 'easy',
    allocatedMarks: 3,
    questionType: 'calculation',
    topic: 'Differentiation',
    expected: {
      totalMarks: 3,
      schemeType: 'points',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },
  {
    subject: 'maths',
    level: 'a-level',
    board: 'edexcel',
    difficulty: 'medium',
    allocatedMarks: 6,
    questionType: 'calculation',
    topic: 'Integration',
    expected: {
      totalMarks: 6,
      schemeType: 'mixed',
      hasAlternatives: true,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },
  {
    subject: 'maths',
    level: 'gcse',
    board: 'aqa',
    difficulty: 'hard',
    allocatedMarks: 8,
    questionType: 'proof',
    topic: 'Algebra',
    expected: {
      totalMarks: 8,
      schemeType: 'mixed',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },

  // ECONOMICS - Essay marking
  {
    subject: 'economics',
    level: 'a-level',
    board: 'aqa',
    difficulty: 'easy',
    allocatedMarks: 4,
    questionType: 'explain',
    topic: 'Supply and Demand',
    expected: {
      totalMarks: 4,
      schemeType: 'points',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },
  {
    subject: 'economics',
    level: 'a-level',
    board: 'aqa',
    difficulty: 'medium',
    allocatedMarks: 9,
    questionType: 'analysis',
    topic: 'Market Failure',
    expected: {
      totalMarks: 9,
      schemeType: 'levels',
      hasAlternatives: false,
      hasLevelDescriptors: true,
      hasAOBreakdown: true,
    },
  },
  {
    subject: 'economics',
    level: 'a-level',
    board: 'aqa',
    difficulty: 'hard',
    allocatedMarks: 25,
    questionType: 'essay',
    topic: 'Macroeconomic Policy',
    expected: {
      totalMarks: 25,
      schemeType: 'levels',
      hasAlternatives: false,
      hasLevelDescriptors: true,
      hasAOBreakdown: true,
    },
  },

  // PHYSICS - Mixed types
  {
    subject: 'physics',
    level: 'gcse',
    board: 'aqa',
    difficulty: 'easy',
    allocatedMarks: 2,
    questionType: 'calculation',
    topic: 'Forces',
    expected: {
      totalMarks: 2,
      schemeType: 'points',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },
  {
    subject: 'physics',
    level: 'a-level',
    board: 'ocr',
    difficulty: 'hard',
    allocatedMarks: 6,
    questionType: 'practical',
    topic: 'Experiments',
    expected: {
      totalMarks: 6,
      schemeType: 'points',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },

  // HISTORY - Source analysis and essays
  {
    subject: 'history',
    level: 'gcse',
    board: 'edexcel',
    difficulty: 'medium',
    allocatedMarks: 12,
    questionType: 'analysis',
    topic: 'Cold War',
    expected: {
      totalMarks: 12,
      schemeType: 'levels',
      hasAlternatives: false,
      hasLevelDescriptors: true,
      hasAOBreakdown: true,
    },
  },
  {
    subject: 'history',
    level: 'a-level',
    board: 'aqa',
    difficulty: 'hard',
    allocatedMarks: 20,
    questionType: 'essay',
    topic: 'Tudor England',
    expected: {
      totalMarks: 20,
      schemeType: 'levels',
      hasAlternatives: false,
      hasLevelDescriptors: true,
      hasAOBreakdown: true,
    },
  },

  // ENGLISH LITERATURE - Extract analysis
  {
    subject: 'english-literature',
    level: 'gcse',
    board: 'aqa',
    difficulty: 'hard',
    allocatedMarks: 30,
    questionType: 'essay',
    topic: 'Shakespeare',
    expected: {
      totalMarks: 30,
      schemeType: 'levels',
      hasAlternatives: false,
      hasLevelDescriptors: true,
      hasAOBreakdown: true,
    },
  },

  // COMPUTER SCIENCE - Algorithm questions
  {
    subject: 'computer-science',
    level: 'gcse',
    board: 'ocr',
    difficulty: 'medium',
    allocatedMarks: 6,
    questionType: 'analysis',
    topic: 'Algorithms',
    expected: {
      totalMarks: 6,
      schemeType: 'points',
      hasAlternatives: false,
      hasLevelDescriptors: false,
      hasAOBreakdown: false,
    },
  },
];

/**
 * Validate mark scheme matches allocated marks
 */
function validateMarkScheme(
  scheme: EnhancedMarkScheme,
  test: MarkSchemeTest
): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check total marks match
  if (scheme.totalMarks !== test.allocatedMarks) {
    errors.push(`Mark mismatch: scheme has ${scheme.totalMarks}, expected ${test.allocatedMarks}`);
  }

  // Check mark points add up correctly
  if (scheme.mainScheme && scheme.mainScheme.length > 0) {
    const markCount = scheme.mainScheme.length;
    
    // For method/accuracy marks, count M and A separately
    const methodMarks = scheme.mainScheme.filter(m => m.mark.startsWith('M')).length;
    const accuracyMarks = scheme.mainScheme.filter(m => m.mark.startsWith('A')).length;
    const basicMarks = scheme.mainScheme.filter(m => m.mark.startsWith('B')).length;
    
    const totalPoints = methodMarks + accuracyMarks + basicMarks;
    
    // Allow for multi-mark points (B2, M2, etc)
    const actualTotal = scheme.mainScheme.reduce((sum, point) => {
      const match = point.mark.match(/[MAB](\d+)?/);
      const value = match && match[1] ? parseInt(match[1]) : 1;
      return sum + value;
    }, 0);
    
    if (actualTotal !== test.allocatedMarks && scheme.mainScheme.length !== test.allocatedMarks) {
      warnings.push(`Mark points (${actualTotal}) may not match allocation (${test.allocatedMarks})`);
    }
  }

  // Check level descriptors for essays
  if (test.allocatedMarks >= 8 && ['essay', 'analysis', 'evaluation'].includes(test.questionType)) {
    if (!scheme.levelDescriptors || scheme.levelDescriptors.length === 0) {
      if (test.expected.hasLevelDescriptors) {
        errors.push('Missing level descriptors for essay/analysis question');
      }
    } else {
      // Check levels cover full mark range
      const maxLevel = Math.max(...scheme.levelDescriptors.map(l => l.marksRange[1]));
      const minLevel = Math.min(...scheme.levelDescriptors.map(l => l.marksRange[0]));
      
      if (maxLevel !== test.allocatedMarks) {
        errors.push(`Level descriptors max (${maxLevel}) doesn't match allocated marks (${test.allocatedMarks})`);
      }
      if (minLevel !== 1 && minLevel !== 0) {
        warnings.push(`Level descriptors should start from 0 or 1, not ${minLevel}`);
      }
    }
  }

  // Check AO breakdown for essay subjects
  if (scheme.assessmentObjectives && scheme.assessmentObjectives.length > 0) {
    const aoTotal = scheme.assessmentObjectives.reduce((sum, ao) => sum + ao.marks, 0);
    if (aoTotal !== test.allocatedMarks) {
      errors.push(`AO breakdown (${aoTotal}) doesn't match allocated marks (${test.allocatedMarks})`);
    }
  }

  // Check for appropriate detail
  if (test.allocatedMarks >= 4 && !scheme.examinerNotes && !scheme.indicativeContent) {
    warnings.push('No examiner notes or indicative content for 4+ mark question');
  }

  // Check for common misconceptions in calculation questions
  if (['calculation', 'proof'].includes(test.questionType) && test.difficulty !== 'easy') {
    if (!scheme.commonMisconceptions || scheme.commonMisconceptions.length === 0) {
      warnings.push('No common misconceptions listed for calculation/proof');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Test mark scheme detail level
 */
function assessDetailLevel(scheme: EnhancedMarkScheme, test: MarkSchemeTest): string {
  let detailScore = 0;
  let maxScore = 0;

  // Check for main marking points
  if (scheme.mainScheme && scheme.mainScheme.length > 0) {
    detailScore += 2;
    
    // Check for descriptions
    const hasDescriptions = scheme.mainScheme.every(m => m.description && m.description.length > 10);
    if (hasDescriptions) detailScore += 1;
    
    // Check for alternatives
    const hasAlternatives = scheme.mainScheme.some(m => m.alternatives && m.alternatives.length > 0);
    if (hasAlternatives) detailScore += 1;
    
    // Check for dependencies
    const hasDependencies = scheme.mainScheme.some(m => m.dependencies && m.dependencies.length > 0);
    if (hasDependencies) detailScore += 1;
  }
  maxScore += 5;

  // Check for level descriptors (if applicable)
  if (test.allocatedMarks >= 8) {
    if (scheme.levelDescriptors && scheme.levelDescriptors.length > 0) {
      detailScore += 2;
      
      // Check for detailed characteristics
      const hasDetailedChars = scheme.levelDescriptors.every(
        l => l.characteristics && l.characteristics.length >= 3
      );
      if (hasDetailedChars) detailScore += 1;
    }
    maxScore += 3;
  }

  // Check for additional guidance
  if (scheme.examinerNotes) detailScore += 1;
  if (scheme.indicativeContent && scheme.indicativeContent.length > 0) detailScore += 1;
  if (scheme.commonMisconceptions && scheme.commonMisconceptions.length > 0) detailScore += 1;
  if (scheme.alternativeApproaches && scheme.alternativeApproaches.length > 0) detailScore += 2;
  maxScore += 5;

  const percentage = Math.round((detailScore / maxScore) * 100);
  
  if (percentage >= 80) return `Excellent (${percentage}%)`;
  if (percentage >= 60) return `Good (${percentage}%)`;
  if (percentage >= 40) return `Adequate (${percentage}%)`;
  return `Poor (${percentage}%)`;
}

/**
 * Run comprehensive mark scheme tests
 */
function runMarkSchemeTests() {
  console.log('📋 COMPREHENSIVE MARK SCHEME TESTING\n');
  console.log('=' .repeat(80));
  
  let totalTests = 0;
  let passedTests = 0;
  const results: any[] = [];
  
  for (const test of TEST_CASES) {
    totalTests++;
    
    console.log(`\n📚 ${test.subject.toUpperCase()} - ${test.level} (${test.board})`);
    console.log(`   ${test.difficulty} difficulty, ${test.allocatedMarks} marks, ${test.questionType}`);
    console.log('-'.repeat(60));
    
    // Generate mark scheme
    const scheme = generateEnhancedMarkScheme(
      test.subject,
      test.level,
      test.board,
      test.difficulty,
      test.allocatedMarks,
      test.questionType as any,
      test.topic
    );
    
    // Validate mark scheme
    const validation = validateMarkScheme(scheme, test);
    const detailLevel = assessDetailLevel(scheme, test);
    
    // Display results
    console.log(`\n📊 Mark Scheme Analysis:`);
    console.log(`   Total Marks: ${scheme.totalMarks} ${scheme.totalMarks === test.allocatedMarks ? '✅' : '❌'}`);
    
    if (scheme.mainScheme && scheme.mainScheme.length > 0) {
      console.log(`   Main Points: ${scheme.mainScheme.length}`);
      const markTypes = [...new Set(scheme.mainScheme.map(m => m.mark.replace(/\d+/, '')))];
      console.log(`   Mark Types: ${markTypes.join(', ')}`);
      
      // Show sample points
      console.log(`   Sample Points:`);
      scheme.mainScheme.slice(0, 3).forEach(point => {
        console.log(`     ${point.mark}: ${point.description.substring(0, 50)}...`);
      });
    }
    
    if (scheme.levelDescriptors && scheme.levelDescriptors.length > 0) {
      console.log(`   Levels: ${scheme.levelDescriptors.length}`);
      scheme.levelDescriptors.forEach(level => {
        console.log(`     Level ${level.level}: ${level.marksRange[0]}-${level.marksRange[1]} marks`);
      });
    }
    
    if (scheme.assessmentObjectives && scheme.assessmentObjectives.length > 0) {
      const aoString = scheme.assessmentObjectives.map(ao => `${ao.objective}=${ao.marks}`).join(', ');
      console.log(`   AO Breakdown: ${aoString}`);
    }
    
    console.log(`\n   Detail Level: ${detailLevel}`);
    console.log(`   Validation: ${validation.valid ? '✅ PASSED' : '❌ FAILED'}`);
    
    if (validation.errors.length > 0) {
      console.log(`   Errors:`);
      validation.errors.forEach(err => console.log(`     ❌ ${err}`));
    }
    
    if (validation.warnings.length > 0) {
      console.log(`   Warnings:`);
      validation.warnings.forEach(warn => console.log(`     ⚠️ ${warn}`));
    }
    
    if (validation.valid) passedTests++;
    
    results.push({
      test,
      scheme,
      validation,
      detailLevel,
    });
  }
  
  // Summary statistics
  console.log('\n' + '='.repeat(80));
  console.log('📊 SUMMARY STATISTICS');
  console.log('='.repeat(80));
  
  // Group by subject
  const bySubject: Record<string, any[]> = {};
  results.forEach(r => {
    if (!bySubject[r.test.subject]) bySubject[r.test.subject] = [];
    bySubject[r.test.subject].push(r);
  });
  
  console.log('\n📚 BY SUBJECT:');
  Object.entries(bySubject).forEach(([subject, subjectResults]) => {
    const passed = subjectResults.filter(r => r.validation.valid).length;
    const total = subjectResults.length;
    const avgDetail = subjectResults.reduce((sum, r) => {
      const match = r.detailLevel.match(/\((\d+)%\)/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0) / total;
    
    console.log(`   ${subject}: ${passed}/${total} passed (${Math.round(passed/total * 100)}%), Avg detail: ${Math.round(avgDetail)}%`);
  });
  
  // Check specific requirements
  console.log('\n✅ SPECIFIC REQUIREMENTS CHECK:');
  
  // Check essay marking
  const essayTests = results.filter(r => 
    ['essay', 'analysis', 'evaluation'].includes(r.test.questionType) && 
    r.test.allocatedMarks >= 8
  );
  const essaysWithLevels = essayTests.filter(r => 
    r.scheme.levelDescriptors && r.scheme.levelDescriptors.length > 0
  );
  console.log(`   Essays with level descriptors: ${essaysWithLevels.length}/${essayTests.length} (${Math.round(essaysWithLevels.length/essayTests.length * 100)}%)`);
  
  // Check calculation marking
  const calcTests = results.filter(r => 
    ['calculation', 'proof'].includes(r.test.questionType)
  );
  const calcsWithMA = calcTests.filter(r => 
    r.scheme.mainScheme && 
    r.scheme.mainScheme.some(m => m.mark.startsWith('M')) &&
    r.scheme.mainScheme.some(m => m.mark.startsWith('A'))
  );
  console.log(`   Calculations with M/A marks: ${calcsWithMA.length}/${calcTests.length} (${Math.round(calcsWithMA.length/calcTests.length * 100)}%)`);
  
  // Check mark totals
  const exactMatches = results.filter(r => r.scheme.totalMarks === r.test.allocatedMarks);
  console.log(`   Exact mark matches: ${exactMatches.length}/${results.length} (${Math.round(exactMatches.length/results.length * 100)}%)`);
  
  // Overall success rate
  console.log('\n' + '='.repeat(80));
  console.log('🎯 OVERALL RESULTS');
  console.log('='.repeat(80));
  console.log(`   Tests Passed: ${passedTests}/${totalTests} (${Math.round(passedTests/totalTests * 100)}%)`);
  
  if (passedTests / totalTests >= 0.9) {
    console.log('\n✅ MARK SCHEME SYSTEM EXCELLENT - Ready for deployment');
    console.log('   - Correctly allocates marks');
    console.log('   - Provides appropriate detail level');
    console.log('   - Uses subject-specific marking styles');
  } else if (passedTests / totalTests >= 0.7) {
    console.log('\n⚠️ MARK SCHEME SYSTEM GOOD - Minor adjustments needed');
  } else {
    console.log('\n❌ MARK SCHEME SYSTEM NEEDS IMPROVEMENT');
  }
  
  // Test specific edge cases
  console.log('\n' + '='.repeat(80));
  console.log('🔍 EDGE CASE TESTING');
  console.log('='.repeat(80));
  
  // Test 1-mark question
  console.log('\n1️⃣ Testing 1-mark question (Physics):');
  const oneMark = generateEnhancedMarkScheme('physics', 'gcse', 'aqa', 'easy', 1, 'calculation');
  console.log(`   Points: ${oneMark.mainScheme?.length}, Total: ${oneMark.totalMarks}`);
  console.log(`   Valid: ${oneMark.totalMarks === 1 ? '✅' : '❌'}`);
  
  // Test 30-mark essay
  console.log('\n3️⃣0️⃣ Testing 30-mark essay (History):');
  const thirtyMark = generateEnhancedMarkScheme('history', 'a-level', 'aqa', 'hard', 30, 'essay');
  console.log(`   Levels: ${thirtyMark.levelDescriptors?.length}, Total: ${thirtyMark.totalMarks}`);
  console.log(`   Has AO breakdown: ${thirtyMark.assessmentObjectives ? '✅' : '❌'}`);
  console.log(`   Valid: ${thirtyMark.totalMarks === 30 ? '✅' : '❌'}`);
  
  // Test practical question
  console.log('\n🔬 Testing practical question (Biology):');
  const practical = generateEnhancedMarkScheme('biology', 'gcse', 'aqa', 'medium', 6, 'practical');
  console.log(`   Points: ${practical.mainScheme?.length}, Total: ${practical.totalMarks}`);
  console.log(`   Has safety notes: ${practical.examinerNotes?.includes('safety') ? '✅' : '❌'}`);
  
  console.log('\n' + '='.repeat(80));
  console.log('✅ MARK SCHEME TESTING COMPLETE');
  console.log('='.repeat(80));
}

// Run the tests
runMarkSchemeTests();