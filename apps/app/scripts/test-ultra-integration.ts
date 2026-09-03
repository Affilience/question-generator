#!/usr/bin/env node
/**
 * Test Ultra version integration end-to-end
 */

import 'dotenv/config';
import { selectQuestionsForPaper } from '../src/lib/questionSelector';
import { PaperConfig } from '../src/types';

console.log('🚀 Testing Ultra Version Integration\n');

const testConfig: PaperConfig = {
  totalMarks: 80,
  timeLimit: 90,
  sections: [{
    id: 'section-a',
    name: 'Section A',
    instructions: 'Answer all questions',
    targetMarks: 80,
    questionTypes: ['short-answer', 'calculation', 'explain', 'extended'] as any[],
    order: 0,
  }],
  selectedSubtopics: {
    'algebra': ['Quadratic Equations', 'Simultaneous Equations', 'Inequalities'],
    'calculus': ['Differentiation', 'Integration', 'Applications'],
    'statistics': ['Probability', 'Distributions', 'Hypothesis Testing'],
  },
  topicWeights: {
    'algebra': 1,
    'calculus': 1.5,
    'statistics': 1,
  },
  difficultyDistribution: { easy: 30, medium: 45, hard: 25 },
  questionTypeDistribution: { 'multiple-choice': 0, 'short-answer': 30, 'extended-response': 70 },
  settings: { allowRepeatQuestions: false, prioritizeWeakTopics: false }
};

console.log('Configuration:');
console.log('- Total marks:', testConfig.totalMarks);
console.log('- Topics:', Object.keys(testConfig.selectedSubtopics).length);
console.log('- Subtopics:', Object.values(testConfig.selectedSubtopics).flat().length);
console.log('- Difficulty: Easy 30%, Medium 45%, Hard 25%\n');

try {
  const result = selectQuestionsForPaper(testConfig, 'maths', 'a-level', 42);
  
  console.log('✅ SUCCESS! Ultra version generated paper:\n');
  console.log('Results:');
  console.log('- Total questions:', result.totalQuestions);
  console.log('- Total marks:', result.totalMarks);
  console.log('- Diversity score:', result.diversityScore || 'N/A');
  console.log('- Sections:', result.sections.length);
  
  // Analyze distribution
  const subtopicCounts: Record<string, number> = {};
  const typeCounts: Record<string, number> = {};
  const difficultyCounts: Record<string, number> = {};
  const bloomCounts: Record<string, number> = {};
  
  result.sections.forEach(section => {
    section.questions.forEach(q => {
      subtopicCounts[q.subtopic] = (subtopicCounts[q.subtopic] || 0) + 1;
      typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
      difficultyCounts[q.difficulty] = (difficultyCounts[q.difficulty] || 0) + 1;
      if (q.bloomLevel) {
        bloomCounts[q.bloomLevel] = (bloomCounts[q.bloomLevel] || 0) + 1;
      }
    });
  });
  
  console.log('\nSubtopic distribution:');
  Object.entries(subtopicCounts).forEach(([subtopic, count]) => {
    console.log(`  ${subtopic}: ${count} questions`);
  });
  
  console.log('\nQuestion type variety:');
  Object.entries(typeCounts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}`);
  });
  
  console.log('\nDifficulty distribution:');
  Object.entries(difficultyCounts).forEach(([difficulty, count]) => {
    console.log(`  ${difficulty}: ${count}`);
  });
  
  console.log('\nBloom\'s taxonomy coverage:');
  Object.entries(bloomCounts).forEach(([level, count]) => {
    console.log(`  ${level}: ${count}`);
  });
  
  // Check for issues
  const maxRepetition = Math.max(...Object.values(subtopicCounts));
  const minRepetition = Math.min(...Object.values(subtopicCounts));
  
  console.log('\n📊 Quality Metrics:');
  console.log(`- Max questions per subtopic: ${maxRepetition}`);
  console.log(`- Min questions per subtopic: ${minRepetition}`);
  console.log(`- Subtopic balance: ${maxRepetition - minRepetition <= 2 ? '✅ Excellent' : '⚠️ Could be improved'}`);
  console.log(`- Question type variety: ${Object.keys(typeCounts).length} types`);
  console.log(`- Bloom's levels covered: ${Object.keys(bloomCounts).length}`);
  
  // Show first 5 questions
  console.log('\nFirst 5 questions:');
  const firstFive = result.sections[0].questions.slice(0, 5);
  firstFive.forEach((q, i) => {
    console.log(`${i+1}. ${q.subtopic} - ${q.questionType} - ${q.marks}m - ${q.difficulty} - ${q.bloomLevel || 'N/A'}`);
    if (q.conceptFocus) console.log(`   Concept: ${q.conceptFocus}`);
  });
  
  console.log('\n🎉 Ultra version is successfully integrated!');
  
} catch (error) {
  console.error('❌ ERROR:', error);
  process.exit(1);
}