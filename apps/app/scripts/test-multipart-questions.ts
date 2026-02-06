#!/usr/bin/env tsx

/**
 * Test script to identify multi-part question mark scheme generation issues
 * This script generates sample questions and analyzes their mark scheme structure
 */

import { config } from 'dotenv';
import { join } from 'path';

// Load environment variables
config({ path: join(process.cwd(), '.env.local') });

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';

interface QuestionResponse {
  content: string;
  solution: string;
  marks: number;
  markScheme: string[];
  diagram?: any;
}

interface TestCase {
  subject: string;
  examBoard: string;
  qualification: string;
  topicId: string;
  subtopic: string;
  difficulty: string;
  description: string;
}

const TEST_CASES: TestCase[] = [
  {
    subject: 'maths',
    examBoard: 'aqa',
    qualification: 'gcse',
    topicId: 'quadratic-equations',
    subtopic: 'Solving Quadratics',
    difficulty: 'medium',
    description: 'Maths quadratic problem (likely to be multi-part)'
  },
  {
    subject: 'physics',
    examBoard: 'aqa', 
    qualification: 'gcse',
    topicId: 'forces-and-motion',
    subtopic: 'Forces and Acceleration',
    difficulty: 'medium',
    description: 'Physics forces problem (often multi-part)'
  },
  {
    subject: 'chemistry',
    examBoard: 'aqa',
    qualification: 'gcse',
    topicId: 'atomic-structure',
    subtopic: 'Electronic Structure',
    difficulty: 'medium',
    description: 'Chemistry electronic structure (may have multiple parts)'
  },
  {
    subject: 'biology',
    examBoard: 'aqa',
    qualification: 'gcse',
    topicId: 'cell-biology',
    subtopic: 'Cell Structure',
    difficulty: 'medium', 
    description: 'Biology cell structure (could be multi-part)'
  }
];

async function generateQuestion(testCase: TestCase): Promise<QuestionResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/generate-question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': process.env.INTERNAL_API_KEY || ''
      },
      body: JSON.stringify({
        topicId: testCase.topicId,
        difficulty: testCase.difficulty,
        subtopic: testCase.subtopic,
        subject: testCase.subject,
        examBoard: testCase.examBoard,
        qualification: testCase.qualification,
        skipCache: true
      })
    });

    if (!response.ok) {
      console.error(`Failed to generate question: ${response.status} ${response.statusText}`);
      return null;
    }

    const question: QuestionResponse = await response.json();
    return question;
  } catch (error) {
    console.error('Error generating question:', error);
    return null;
  }
}

function analyzeMultiPartStructure(question: QuestionResponse) {
  const { content, markScheme } = question;
  
  // Look for multi-part indicators in content
  const multiPartIndicators = [
    /\b[a-d]\)/gi,  // a), b), c), d)
    /\([a-d]\)/gi,  // (a), (b), (c), (d)
    /\b[a-d]\./gi,  // a., b., c., d.
    /Part\s+[a-d]/gi, // Part a, Part b, etc
    /Question\s+[a-d]/gi, // Question a, Question b, etc
  ];
  
  const foundParts: string[] = [];
  multiPartIndicators.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      foundParts.push(...matches.map(m => m.toLowerCase()));
    }
  });
  
  // Remove duplicates and sort
  const uniqueParts = [...new Set(foundParts)].sort();
  
  // Analyze mark scheme structure
  const markSchemeAnalysis = {
    totalItems: markScheme.length,
    hasPartLabels: false,
    partLabelsFound: [] as string[],
    missingParts: [] as string[]
  };
  
  // Check if mark scheme has part labels
  const markSchemeText = markScheme.join(' ');
  const partLabelsInMarkScheme = markSchemeText.match(/\b[a-d]\)/gi) || [];
  markSchemeAnalysis.hasPartLabels = partLabelsInMarkScheme.length > 0;
  markSchemeAnalysis.partLabelsFound = [...new Set(partLabelsInMarkScheme.map(p => p.toLowerCase()))].sort();
  
  // Check for missing parts
  if (uniqueParts.length > 0) {
    const expectedParts = uniqueParts.map(part => part.replace(/[^a-d]/g, '') + ')');
    const actualParts = markSchemeAnalysis.partLabelsFound.map(part => part.replace(/[^a-d]/g, '') + ')');
    markSchemeAnalysis.missingParts = expectedParts.filter(part => !actualParts.includes(part));
  }
  
  return {
    isMultiPart: uniqueParts.length > 1,
    partsInContent: uniqueParts,
    markScheme: markSchemeAnalysis
  };
}

async function runTests() {
  console.log('🔍 Testing Multi-Part Question Mark Scheme Generation');
  console.log('====================================================\n');
  
  const results = [];
  
  for (let i = 0; i < TEST_CASES.length; i++) {
    const testCase = TEST_CASES[i];
    console.log(`📝 Test ${i + 1}/${TEST_CASES.length}: ${testCase.description}`);
    console.log(`   Subject: ${testCase.subject}, Board: ${testCase.examBoard}, Level: ${testCase.qualification}`);
    console.log(`   Topic: ${testCase.topicId}, Subtopic: ${testCase.subtopic}\n`);
    
    // Generate multiple questions for this test case to increase chance of getting multi-part
    for (let attempt = 1; attempt <= 3; attempt++) {
      console.log(`   Attempt ${attempt}/3...`);
      
      const question = await generateQuestion(testCase);
      if (!question) {
        console.log(`   ❌ Failed to generate question\n`);
        continue;
      }
      
      const analysis = analyzeMultiPartStructure(question);
      
      if (analysis.isMultiPart) {
        console.log(`   ✅ Multi-part question generated!`);
        console.log(`   📊 Analysis:`);
        console.log(`      Parts found in content: ${analysis.partsInContent.join(', ')}`);
        console.log(`      Mark scheme items: ${analysis.markScheme.totalItems}`);
        console.log(`      Part labels in mark scheme: ${analysis.markScheme.hasPartLabels ? 'Yes' : 'No'}`);
        if (analysis.markScheme.hasPartLabels) {
          console.log(`      Labels found: ${analysis.markScheme.partLabelsFound.join(', ')}`);
        }
        if (analysis.markScheme.missingParts.length > 0) {
          console.log(`      ⚠️  Missing parts in mark scheme: ${analysis.markScheme.missingParts.join(', ')}`);
        }
        
        console.log(`\n   📄 Question Content:`);
        console.log(`      ${question.content.substring(0, 200)}${question.content.length > 200 ? '...' : ''}`);
        
        console.log(`\n   📋 Mark Scheme (${question.markScheme.length} items):`);
        question.markScheme.forEach((item, idx) => {
          console.log(`      ${idx + 1}. ${item}`);
        });
        
        results.push({
          testCase,
          analysis,
          question: {
            content: question.content,
            markScheme: question.markScheme,
            marks: question.marks
          },
          issues: analysis.markScheme.missingParts.length > 0 || !analysis.markScheme.hasPartLabels
        });
        
        console.log('\n   ✨ Multi-part question found, moving to next test case\n');
        break;
      } else {
        console.log(`   ➡️  Single-part question generated (attempt ${attempt})`);
      }
    }
    
    console.log('---\n');
  }
  
  // Summary
  console.log('\n🎯 SUMMARY OF FINDINGS');
  console.log('====================');
  
  const multiPartResults = results.filter(r => r.analysis.isMultiPart);
  const issueResults = results.filter(r => r.issues);
  
  console.log(`Total multi-part questions found: ${multiPartResults.length}`);
  console.log(`Questions with mark scheme issues: ${issueResults.length}`);
  
  if (issueResults.length > 0) {
    console.log('\n❌ ISSUES IDENTIFIED:');
    issueResults.forEach((result, idx) => {
      console.log(`\n${idx + 1}. ${result.testCase.description}`);
      if (result.analysis.markScheme.missingParts.length > 0) {
        console.log(`   - Missing parts in mark scheme: ${result.analysis.markScheme.missingParts.join(', ')}`);
      }
      if (!result.analysis.markScheme.hasPartLabels && result.analysis.partsInContent.length > 1) {
        console.log(`   - No part labels in mark scheme despite multi-part content`);
      }
    });
    
    console.log('\n💡 RECOMMENDATIONS:');
    console.log('1. Enhance prompts to explicitly request part-specific mark scheme entries');
    console.log('2. Add validation to ensure mark schemes match question part structure');
    console.log('3. Improve prompt templates with multi-part examples showing correct labeling');
  } else {
    console.log('\n✅ No issues found in the tested questions');
  }
}

// Run the tests
runTests().catch(console.error);