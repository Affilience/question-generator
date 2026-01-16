import * as fs from 'fs';
import * as path from 'path';

interface ExtractedQuestion {
  questionNumber: string;
  content: string;
  marks: number;
  topic: string;
  subtopic: string;
  difficulty: 'foundation' | 'higher';
  hasImage: boolean;
  solution?: string;
  markScheme?: string[];
  source: {
    paper: string;
    year: number;
    session: string;
  };
}

interface FineTuningExample {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
}

function createSystemPrompt(): string {
  return `You are an expert GCSE Mathematics question writer trained on real AQA exam papers. You create exam-style questions that match the exact format, difficulty, and style of actual GCSE papers.

When generating questions:
- Match the linguistic style and phrasing of real exam questions
- Use appropriate mark allocations (1-5 marks typically)
- Include proper mathematical notation using LaTeX ($...$ for inline, $$...$$ for display)
- Provide clear, step-by-step solutions
- Include mark scheme points showing what earns each mark (M1 for method, A1 for answer, B1 for correct value)

Always respond with valid JSON in this format:
{
  "content": "Question text",
  "marks": <number>,
  "solution": "Step-by-step solution",
  "markScheme": ["M1 point", "A1 point", ...]
}`;
}

function createUserPrompt(topic: string, subtopic: string, difficulty: string): string {
  const difficultyDesc = difficulty === 'higher'
    ? 'Higher tier (grades 4-9), more challenging multi-step problems'
    : 'Foundation tier (grades 1-5), accessible problems with clear steps';

  return `Generate a GCSE Mathematics exam question.

Topic: ${topic}
Subtopic: ${subtopic}
Difficulty: ${difficultyDesc}

Create a single exam-style question with full solution and mark scheme.`;
}

function createAssistantResponse(question: ExtractedQuestion): string {
  return JSON.stringify({
    content: question.content,
    marks: question.marks,
    solution: question.solution || 'Solution not available',
    markScheme: question.markScheme || [],
  }, null, 2);
}

function convertToFineTuningFormat(questions: ExtractedQuestion[]): FineTuningExample[] {
  const examples: FineTuningExample[] = [];

  for (const question of questions) {
    // Skip questions without solutions or with images (can't reproduce in text)
    if (!question.solution || question.hasImage) {
      continue;
    }

    // Skip if content is too short (likely parsing error)
    if (question.content.length < 20) {
      continue;
    }

    examples.push({
      messages: [
        {
          role: 'system',
          content: createSystemPrompt(),
        },
        {
          role: 'user',
          content: createUserPrompt(
            question.topic,
            question.subtopic,
            question.difficulty
          ),
        },
        {
          role: 'assistant',
          content: createAssistantResponse(question),
        },
      ],
    });
  }

  return examples;
}

function splitTrainingValidation(
  examples: FineTuningExample[],
  validationRatio: number = 0.1
): { training: FineTuningExample[]; validation: FineTuningExample[] } {
  // Shuffle
  const shuffled = [...examples].sort(() => Math.random() - 0.5);

  const validationCount = Math.floor(shuffled.length * validationRatio);

  return {
    validation: shuffled.slice(0, validationCount),
    training: shuffled.slice(validationCount),
  };
}

function writeJsonl(filepath: string, examples: FineTuningExample[]): void {
  const lines = examples.map((ex) => JSON.stringify(ex));
  fs.writeFileSync(filepath, lines.join('\n'));
}

async function main() {
  const processedDir = path.join(__dirname, '..', 'data', 'processed');
  const trainingDir = path.join(__dirname, '..', 'data', 'training');

  if (!fs.existsSync(trainingDir)) {
    fs.mkdirSync(trainingDir, { recursive: true });
  }

  const questionsPath = path.join(processedDir, 'extracted-questions.json');

  if (!fs.existsSync(questionsPath)) {
    console.error('No extracted questions found. Run extract-questions.ts first.');
    process.exit(1);
  }

  const questions: ExtractedQuestion[] = JSON.parse(
    fs.readFileSync(questionsPath, 'utf-8')
  );

  console.log(`Loaded ${questions.length} extracted questions`);

  // Convert to fine-tuning format
  const examples = convertToFineTuningFormat(questions);
  console.log(`Created ${examples.length} training examples (filtered out questions with images or missing solutions)`);

  // Split into training and validation
  const { training, validation } = splitTrainingValidation(examples);

  console.log(`Training examples: ${training.length}`);
  console.log(`Validation examples: ${validation.length}`);

  // Write JSONL files
  writeJsonl(path.join(trainingDir, 'training.jsonl'), training);
  writeJsonl(path.join(trainingDir, 'validation.jsonl'), validation);

  console.log(`\n✓ Training data saved to ${trainingDir}`);
  console.log('Files:');
  console.log('  - training.jsonl');
  console.log('  - validation.jsonl');

  // Stats
  const topicCounts = new Map<string, number>();
  for (const ex of examples) {
    const topic = questions.find(
      (q) => createAssistantResponse(q) === ex.messages[2].content
    )?.topic || 'Unknown';
    topicCounts.set(topic, (topicCounts.get(topic) || 0) + 1);
  }

  console.log('\nExamples by topic:');
  for (const [topic, count] of topicCounts) {
    console.log(`  ${topic}: ${count}`);
  }
}

main().catch(console.error);
