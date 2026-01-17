/**
 * Test actual question generation with extracts/sources
 */

const BASE_URL = 'http://localhost:3000';

interface TestCase {
  name: string;
  params: {
    topicId: string;
    difficulty: string;
    subtopic: string;
    subject: string;
    examBoard?: string;
    qualification?: string;
  };
}

const testCases: TestCase[] = [
  // English Literature - should use real extracts
  {
    name: 'English Lit: Macbeth - Guilt',
    params: {
      topicId: 'aqa-gcse-eng-lit-macbeth',
      difficulty: 'easy',
      subtopic: 'Guilt and conscience',
      subject: 'english-literature',
      examBoard: 'aqa',
      qualification: 'gcse'
    }
  },
  {
    name: 'English Lit: Christmas Carol - Poverty',
    params: {
      topicId: 'aqa-gcse-eng-lit-christmas-carol',
      difficulty: 'medium',
      subtopic: 'Social responsibility and poverty',
      subject: 'english-literature',
      examBoard: 'aqa',
      qualification: 'gcse'
    }
  },
  // History - should use real sources
  {
    name: 'History: Germany - Hyperinflation',
    params: {
      topicId: 'aqa-gcse-hist-germany-democracy-dictatorship',
      difficulty: 'medium',
      subtopic: 'Hyperinflation 1923',
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'gcse'
    }
  },
  {
    name: 'History: Medicine - Black Death',
    params: {
      topicId: 'aqa-gcse-hist-health-people',
      difficulty: 'medium',
      subtopic: 'The Black Death',
      subject: 'history',
      examBoard: 'aqa',
      qualification: 'gcse'
    }
  },
  // Economics - should use AI-generated data
  {
    name: 'Economics: Market Failure',
    params: {
      topicId: 'aqa-alevel-econ-microeconomics',
      difficulty: 'medium',
      subtopic: 'Market failure',
      subject: 'economics',
      examBoard: 'aqa',
      qualification: 'a-level'
    }
  }
];

async function testQuestionGeneration(testCase: TestCase) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${testCase.name}`);
  console.log('='.repeat(60));

  const url = `${BASE_URL}/api/generate-question-stream`;

  console.log(`URL: ${url}`);
  console.log(`Params: ${JSON.stringify(testCase.params)}\n`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testCase.params),
    });

    if (!response.ok) {
      console.log(`❌ HTTP Error: ${response.status}`);
      const text = await response.text();
      console.log(text.slice(0, 500));
      return;
    }

    // Read the stream
    const reader = response.body?.getReader();
    if (!reader) {
      console.log('❌ No response body');
      return;
    }

    const decoder = new TextDecoder();
    let fullResponse = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      fullResponse += decoder.decode(value, { stream: true });
    }

    // Parse the JSON from the response
    // The response might have multiple JSON objects, we want the last complete one
    const lines = fullResponse.split('\n').filter(line => line.trim());
    let questionData = null;

    for (const line of lines) {
      try {
        const parsed = JSON.parse(line);
        if (parsed.content || parsed.question) {
          questionData = parsed;
        }
      } catch {
        // Not a JSON line, skip
      }
    }

    if (questionData) {
      console.log('✅ Question generated successfully!\n');

      // Check if it contains an extract/source
      const content = questionData.content || questionData.question || '';

      if (testCase.name.includes('English Lit')) {
        const hasExtract = content.includes('extract') || content.includes('Read the following');
        const hasRealQuote = content.includes('Two households') || // Romeo and Juliet
                           content.includes('Is this a dagger') || // Macbeth
                           content.includes('tight-fisted hand') || // Christmas Carol
                           content.includes('trampled calmly'); // Jekyll

        console.log(`Has extract reference: ${hasExtract ? '✅' : '❌'}`);
        console.log(`Contains real text: ${hasRealQuote ? '✅' : '⚠️ (may be fallback)'}`);
      }

      if (testCase.name.includes('History')) {
        const hasSource = content.includes('Source A') || content.includes('source');
        console.log(`Has source reference: ${hasSource ? '✅' : '❌'}`);
      }

      if (testCase.name.includes('Economics')) {
        const hasData = content.includes('Figure') || content.includes('data') || content.includes('table') || content.includes('%');
        console.log(`Has data/figures: ${hasData ? '✅' : '❌'}`);
      }

      console.log('\nQuestion preview (first 500 chars):');
      console.log('-'.repeat(40));
      console.log(content.slice(0, 500));
      console.log('...');
    } else {
      console.log('❌ Could not parse question from response');
      console.log('Raw response (first 1000 chars):');
      console.log(fullResponse.slice(0, 1000));
    }

  } catch (error) {
    console.log(`❌ Error: ${error}`);
  }
}

async function main() {
  console.log('🧪 QUESTION GENERATION TEST');
  console.log('Make sure the dev server is running on localhost:3000\n');

  for (const testCase of testCases) {
    await testQuestionGeneration(testCase);
  }

  console.log('\n\n✅ All tests complete!');
}

main().catch(console.error);
