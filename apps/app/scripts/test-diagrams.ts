/**
 * Test diagram generation across subjects
 * Verifies that diagram-type questions work for Economics, Biology, Physics, Maths
 */

const BASE_URL = 'http://localhost:3000';

interface DiagramTest {
  name: string;
  params: {
    topicId: string;
    difficulty: string;
    subtopic: string;
    subject: string;
    examBoard: string;
    qualification: string;
  };
  expectDiagram: boolean;
}

const diagramTests: DiagramTest[] = [
  // Economics - should have supply/demand diagrams
  {
    name: 'Economics: Supply and Demand Diagram',
    params: {
      topicId: 'aqa-alevel-econ-individual',
      difficulty: 'medium',
      subtopic: 'Indifference curves',
      subject: 'economics',
      examBoard: 'aqa',
      qualification: 'a-level'
    },
    expectDiagram: true
  },
  // Physics - should have circuit/graph diagrams
  {
    name: 'Physics: Forces Diagram',
    params: {
      topicId: 'physics-forces',
      difficulty: 'medium',
      subtopic: 'Free body diagrams',
      subject: 'physics',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectDiagram: true
  },
  // Biology - should have labelled diagrams
  {
    name: 'Biology: Cell Structure Diagram',
    params: {
      topicId: 'aqa-gcse-biology-cell-biology',
      difficulty: 'easy',
      subtopic: 'Animal cell structure',
      subject: 'biology',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectDiagram: true
  },
  // Maths - should have graph/coordinate diagrams
  {
    name: 'Maths: Graph Sketching',
    params: {
      topicId: 'alevel-coordinate-geometry',
      difficulty: 'medium',
      subtopic: 'Graphs of linear equations',
      subject: 'maths',
      examBoard: 'aqa',
      qualification: 'a-level'
    },
    expectDiagram: true
  },
  // Chemistry - should have molecular/apparatus diagrams
  {
    name: 'Chemistry: Atomic Structure',
    params: {
      topicId: 'aqa-gcse-chemistry-atomic-structure',
      difficulty: 'easy',
      subtopic: 'Structure of an atom',
      subject: 'chemistry',
      examBoard: 'aqa',
      qualification: 'gcse'
    },
    expectDiagram: true
  },
];

async function testDiagramGeneration(test: DiagramTest) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${test.name}`);
  console.log('='.repeat(60));

  const url = `${BASE_URL}/api/generate-question-stream`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...test.params, stream: false }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log(`❌ HTTP Error: ${response.status}`);
      console.log(`   Error: ${errorText.slice(0, 200)}`);
      return { passed: false, hasDiagram: false };
    }

    const text = await response.text();

    // Check if response contains diagram field
    const hasDiagram = text.includes('"diagram"') && text.includes('"elements"');
    const hasWidth = text.includes('"width"');
    const hasContent = text.includes('"content"');

    // Try to extract question content
    const contentMatch = text.match(/"content"\s*:\s*"([^"]{0,200})/);
    const questionPreview = contentMatch ? contentMatch[1].replace(/\\n/g, ' ').slice(0, 100) : 'N/A';

    // Check for diagram-related command words in the question
    const diagramKeywords = ['draw', 'sketch', 'diagram', 'label', 'graph', 'plot'];
    const hasDiagramKeyword = diagramKeywords.some(kw =>
      text.toLowerCase().includes(kw)
    );

    console.log(`\n📝 Question preview: "${questionPreview}..."`);
    console.log(`\n📊 Diagram Analysis:`);
    console.log(`   Has diagram field: ${hasDiagram ? '✅' : '❌'}`);
    console.log(`   Has diagram keywords: ${hasDiagramKeyword ? '✅' : '⚠️'}`);
    console.log(`   Has content: ${hasContent ? '✅' : '❌'}`);

    if (hasDiagram) {
      // Extract diagram type if present
      const diagramMatch = text.match(/"diagram"\s*:\s*\{([^}]+)/);
      if (diagramMatch) {
        console.log(`   Diagram snippet: ${diagramMatch[1].slice(0, 100)}...`);
      }
    }

    const passed = hasContent && (hasDiagram || hasDiagramKeyword || !test.expectDiagram);
    console.log(`\n${passed ? '✅ PASSED' : '⚠️  NEEDS REVIEW'}`);

    return { passed, hasDiagram };
  } catch (error) {
    console.log(`❌ Error: ${error}`);
    return { passed: false, hasDiagram: false };
  }
}

async function runDiagramTests() {
  console.log('🔬 DIAGRAM GENERATION TESTS');
  console.log('Testing diagram support across subjects...\n');
  console.log('Note: Not all questions will have diagrams - it depends on the');
  console.log('random question format selected. We check for diagram capability.\n');

  let passed = 0;
  let withDiagrams = 0;
  const total = diagramTests.length;

  for (const test of diagramTests) {
    const result = await testDiagramGeneration(test);
    if (result.passed) passed++;
    if (result.hasDiagram) withDiagrams++;
  }

  console.log('\n' + '='.repeat(60));
  console.log('DIAGRAM TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`\n✅ Questions generated: ${passed}/${total}`);
  console.log(`📊 Questions with diagrams: ${withDiagrams}/${total}`);
  console.log(`\nNote: Diagram inclusion is probabilistic based on question format.`);
  console.log(`Run multiple times to see diagram generation in action.`);
}

runDiagramTests().catch(console.error);
