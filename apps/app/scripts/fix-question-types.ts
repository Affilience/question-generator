#!/usr/bin/env node
/**
 * Fix missing question type mappings in questionSelector.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '../src/lib/questionSelector.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// All question types from the type definition
const allQuestionTypes = [
  'multiple-choice', 'short-answer', 'calculation', 'explain', 'extended', 'essay',
  'data-analysis', 'graph', 'compare', 'proof', 'show-that', 'source-analysis',
  'interpretation', 'extract-analysis',
  // Mathematics-specific
  'construction', 'loci', 'algebraic-manipulation', 'simultaneous-equations',
  'optimization', 'differential-equations', 'integration-by-parts',
  'statistical-hypothesis', 'sequence-series', 'transformation-geometry',
  // Physics-specific
  'practical-method', 'practical-analysis', 'circuit-design', 'wave-calculation',
  'nuclear-decay', 'energy-transfer',
  // Chemistry-specific
  'chemical-equation', 'structure-drawing', 'titration-calculation',
  'organic-mechanism', 'inorganic-analysis', 'bonding-structure',
  // Biology-specific
  'microscopy-drawing', 'lifecycle-diagram', 'food-web-analysis',
  'genetics-calculation', 'plant-adaptation', 'human-physiology',
  // Computer Science-specific
  'algorithm-design', 'code-analysis', 'data-structure', 'pseudocode-writing',
  'trace-table', 'system-design',
  // Economics-specific
  'data-response', 'diagram-analysis', 'economic-calculation', 'case-study-analysis',
  // Business-specific
  'business-calculation'
];

// Default mappings for missing types
const defaultBloomMapping = {
  easy: ['remember', 'understand'],
  medium: ['apply', 'analyze'],
  hard: ['evaluate', 'create']
};

const defaultMarkRanges = [1, 2, 3, 4, 5, 6, 8, 10, 12];

// Find and update the Bloom levels mapping
const bloomRegex = /const mapping: Record<QuestionType, Record<Difficulty, string\[\]>> = \{[\s\S]*?\n  \};/;
const bloomMatch = content.match(bloomRegex);

if (bloomMatch) {
  // Parse existing mappings
  const existingTypes = new Set<string>();
  const typeRegex = /    ['"]([^'"]+)['"]: \{/g;
  let match;
  while ((match = typeRegex.exec(bloomMatch[0])) !== null) {
    existingTypes.add(match[1]);
  }
  
  // Build complete mapping
  let newMapping = '  const mapping: Record<QuestionType, Record<Difficulty, string[]>> = {\n';
  
  for (const type of allQuestionTypes) {
    if (existingTypes.has(type)) {
      // Keep existing mapping
      const typePattern = new RegExp(`    ['"]${type}['"]:[\\s\\S]*?(?=    ['"]|  \\};)`, 'g');
      const existingMapping = bloomMatch[0].match(typePattern);
      if (existingMapping) {
        newMapping += existingMapping[0];
      }
    } else {
      // Add default mapping
      newMapping += `    '${type}': {\n`;
      newMapping += `      easy: ${JSON.stringify(defaultBloomMapping.easy)},\n`;
      newMapping += `      medium: ${JSON.stringify(defaultBloomMapping.medium)},\n`;
      newMapping += `      hard: ${JSON.stringify(defaultBloomMapping.hard)}\n`;
      newMapping += `    },\n`;
    }
  }
  
  newMapping = newMapping.replace(/,\n$/, '\n');
  newMapping += '  };';
  
  content = content.replace(bloomRegex, newMapping);
}

// Find and update the mark ranges mapping
const marksRegex = /QUESTION_TYPE_MARK_RANGES: Record<QuestionType, number\[\]> = \{[\s\S]*?\n  \};/;
const marksMatch = content.match(marksRegex);

if (marksMatch) {
  // Parse existing mappings
  const existingTypes = new Set<string>();
  const typeRegex = /    ['"]([^'"]+)['"]: \[/g;
  let match;
  while ((match = typeRegex.exec(marksMatch[0])) !== null) {
    existingTypes.add(match[1]);
  }
  
  // Build complete mapping
  let newMapping = '  QUESTION_TYPE_MARK_RANGES: Record<QuestionType, number[]> = {\n';
  
  for (const type of allQuestionTypes) {
    if (existingTypes.has(type)) {
      // Keep existing mapping
      const typePattern = new RegExp(`    ['"]${type}['"]:[\\s\\S]*?(?=    ['"]|  \\};)`, 'g');
      const existingMapping = marksMatch[0].match(typePattern);
      if (existingMapping) {
        newMapping += existingMapping[0];
      }
    } else {
      // Add default mapping based on type
      let markRange = defaultMarkRanges;
      if (type === 'essay' || type === 'extended' || type.includes('analysis')) {
        markRange = [6, 8, 10, 12, 15, 20];
      } else if (type === 'multiple-choice') {
        markRange = [1];
      } else if (type.includes('calculation') || type.includes('proof')) {
        markRange = [2, 3, 4, 5, 6, 8];
      }
      
      newMapping += `    '${type}': ${JSON.stringify(markRange)},\n`;
    }
  }
  
  newMapping = newMapping.replace(/,\n$/, '\n');
  newMapping += '  };';
  
  content = content.replace(marksRegex, newMapping);
}

// Write the updated content
fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ Fixed question type mappings in questionSelector.ts');
console.log(`Added mappings for ${allQuestionTypes.length} question types`);