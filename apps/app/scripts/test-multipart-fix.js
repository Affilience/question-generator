#!/usr/bin/env node

/**
 * Quick test to verify multi-part question validation logic
 */

// Simulate the validation function (simplified version)
function validateMultiPartConsistency(content, markScheme, solution) {
  const issues = [];

  // Detect multi-part indicators in content
  const multiPartPatterns = [
    /\([a-d]\)/gi,  // (a), (b), (c), (d)
    /\b[a-d]\)/gi,  // a), b), c), d)
  ];

  const foundParts = new Set();
  multiPartPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach(match => foundParts.add(match.toLowerCase().replace(/[^a-d]/g, '')));
    }
  });

  const contentParts = Array.from(foundParts).sort();
  
  // If multi-part content is detected
  if (contentParts.length > 1) {
    // Check mark scheme has proper part labels
    const markSchemeText = markScheme.join(' ');
    const markSchemeParts = new Set();
    
    // Look for part labels in mark scheme
    const partLabelPatterns = [
      /\([a-d]\)/gi,  // (a), (b), (c), (d)
      /\b[a-d]\)/gi,  // a), b), c), d)
    ];
    
    partLabelPatterns.forEach(pattern => {
      const matches = markSchemeText.match(pattern);
      if (matches) {
        matches.forEach(match => markSchemeParts.add(match.toLowerCase().replace(/[^a-d]/g, '')));
      }
    });

    const schemeParts = Array.from(markSchemeParts).sort();

    // Check if all content parts have corresponding mark scheme entries
    const missingInScheme = contentParts.filter(part => !schemeParts.includes(part));
    if (missingInScheme.length > 0) {
      issues.push({
        code: 'MULTI_PART_MARK_SCHEME_MISSING',
        message: `Multi-part question parts (${missingInScheme.join(', ')}) found in content but missing proper labeling in mark scheme`,
        severity: 'error'
      });
    }

    // Check if mark scheme has at least some part labels
    if (schemeParts.length === 0 && contentParts.length > 1) {
      issues.push({
        code: 'MULTI_PART_NO_LABELS',
        message: `Multi-part question detected (parts: ${contentParts.join(', ')}) but mark scheme lacks part labels`,
        severity: 'error'
      });
    }

    return {
      isMultiPart: true,
      contentParts,
      schemeParts,
      issues
    };
  }

  return {
    isMultiPart: false,
    contentParts: [],
    schemeParts: [],
    issues: []
  };
}

// Test cases
const testCases = [
  {
    name: "Bad Multi-Part Question (Original Issue)",
    content: `A ball is thrown upward with initial velocity 20 m/s.
    
(a) Calculate the maximum height reached. [3 marks]
(b) Find the total time in the air. [2 marks]`,
    markScheme: [
      "M1: Uses v² = u² + 2as",
      "A1: Substitutes values correctly", 
      "A1: h = 20.4 m",
      "M1: Uses v = u + at",
      "A1: t = 4.08 s"
    ],
    solution: "Step 1: For max height v=0, u=20, a=-9.8\nStep 2: v² = u² + 2as\nAnswer: h = 20.4 m\nStep 3: Total time = 2 × time to max height\nAnswer: t = 4.08 s"
  },
  {
    name: "Good Multi-Part Question (With Fix)",
    content: `A ball is thrown upward with initial velocity 20 m/s.
    
(a) Calculate the maximum height reached. [3 marks]
(b) Find the total time in the air. [2 marks]`,
    markScheme: [
      "(a) M1: Uses v² = u² + 2as",
      "(a) A1: Substitutes values correctly", 
      "(a) A1: h = 20.4 m",
      "(b) M1: Uses v = u + at",
      "(b) A1: t = 4.08 s"
    ],
    solution: "(a) Step 1: For max height v=0, u=20, a=-9.8\n(a) Step 2: v² = u² + 2as\n(a) Answer: h = 20.4 m\n(b) Step 1: Total time = 2 × time to max height\n(b) Answer: t = 4.08 s"
  },
  {
    name: "Single Part Question (Should Pass)",
    content: "Calculate the speed of a car that travels 100m in 5s. [2 marks]",
    markScheme: [
      "M1: Uses speed = distance/time",
      "A1: speed = 20 m/s"
    ],
    solution: "Step 1: speed = distance/time\nStep 2: speed = 100/5 = 20 m/s"
  }
];

console.log('🧪 Testing Multi-Part Question Validation\n');
console.log('=========================================\n');

testCases.forEach((testCase, index) => {
  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log('-'.repeat(50));
  
  const result = validateMultiPartConsistency(testCase.content, testCase.markScheme, testCase.solution);
  
  console.log(`Multi-part detected: ${result.isMultiPart}`);
  if (result.isMultiPart) {
    console.log(`Content parts: [${result.contentParts.join(', ')}]`);
    console.log(`Scheme parts: [${result.schemeParts.join(', ')}]`);
  }
  
  if (result.issues.length > 0) {
    console.log('\n❌ Issues found:');
    result.issues.forEach(issue => {
      console.log(`   ${issue.severity.toUpperCase()}: ${issue.message}`);
    });
  } else {
    console.log('\n✅ No issues found');
  }
  
  console.log('\n');
});

console.log('📊 SUMMARY');
console.log('=========');
console.log('• Test 1 should show errors (demonstrates the original problem)');
console.log('• Test 2 should pass (demonstrates the fix)');
console.log('• Test 3 should pass (single-part questions unaffected)');
console.log('\nThe validation will now catch and flag multi-part questions');
console.log('with inconsistent mark scheme labeling.');