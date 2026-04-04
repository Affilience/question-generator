/**
 * Test script to verify diagram templates for all subjects
 */

import { getTemplatesForSubject } from '../src/lib/diagramTemplates';
import { Subject } from '../src/types';
import { shouldGenerateDiagram } from '../src/lib/diagramGeneration';

const allSubjects: Subject[] = [
  'maths',
  'physics',
  'chemistry',
  'biology',
  'geography',
  'computer-science',
  'history',
  'economics',
  'business',
  'psychology',
  'english-literature',
  'further-maths',
  'combined-science'
];

console.log('Testing Diagram Templates for All Subjects');
console.log('==========================================\n');

let totalTemplates = 0;
const results: { subject: Subject; count: number; hasTemplates: boolean }[] = [];

// Test each subject
for (const subject of allSubjects) {
  const templates = getTemplatesForSubject(subject);
  const hasTemplates = templates.length > 0;
  
  results.push({
    subject,
    count: templates.length,
    hasTemplates
  });
  
  totalTemplates += templates.length;
  
  console.log(`${subject.padEnd(20)} : ${templates.length.toString().padStart(3)} templates`);
  
  // Show first few template types for each subject
  if (templates.length > 0) {
    const types = [...new Set(templates.map(t => t.type))].slice(0, 5);
    console.log(`  Types: ${types.join(', ')}${templates.length > 5 ? '...' : ''}`);
  }
  console.log();
}

// Summary
console.log('\n==========================================');
console.log('Summary:');
console.log(`Total subjects tested: ${allSubjects.length}`);
console.log(`Subjects with templates: ${results.filter(r => r.hasTemplates).length}`);
console.log(`Subjects without templates: ${results.filter(r => !r.hasTemplates).length}`);
console.log(`Total templates across all subjects: ${totalTemplates}`);

// Test shouldGenerateDiagram for each subject
console.log('\n==========================================');
console.log('Testing shouldGenerateDiagram for each subject:');
console.log();

for (const subject of allSubjects) {
  // Test with typical parameters
  const requirements = shouldGenerateDiagram(
    subject,
    'explain',
    'medium',
    4,
    'General Topic'
  );
  
  console.log(`${subject.padEnd(20)} : Required=${requirements.required}, Probability=${requirements.probability.toFixed(2)}, Types=[${requirements.types.slice(0,3).join(', ')}]`);
}

// Report any subjects without templates
const subjectsWithoutTemplates = results.filter(r => !r.hasTemplates);
if (subjectsWithoutTemplates.length > 0) {
  console.log('\n⚠️  WARNING: The following subjects have no diagram templates:');
  subjectsWithoutTemplates.forEach(s => console.log(`  - ${s.subject}`));
} else {
  console.log('\n✅ All subjects have diagram templates!');
}

console.log('\nTest complete!');