/**
 * Create training data from extracted questions
 *
 * Usage:
 *   npx tsx scripts/fine-tuning/create-training-data.ts <extracted-json> [--output=<name>]
 *
 * Example:
 *   npx tsx scripts/fine-tuning/create-training-data.ts data/extracted/maths-aqa.json --output=maths-gcse-aqa
 */

import * as fs from 'fs';
import * as path from 'path';

interface ExtractedQuestion {
  questionNumber: string;
  content: string;
  marks: number;
  topic: string;
  subtopic: string;
  solution?: string;
  markScheme?: string[];
  source: string;
}

interface TrainingExample {
  messages: Array<{
    role: 'system' | 'user' | 'assistant';
    content: string;
  }>;
}

function getSystemPrompt(subject: string): string {
  const subjectPrompts: Record<string, string> = {
    maths: `You are an expert GCSE Mathematics examiner trained on real exam papers. Generate exam-style questions that match the exact format, difficulty, and style of actual papers.

When generating questions:
- Match the linguistic style of real exam questions
- Use appropriate mark allocations
- Use LaTeX for math: $...$ for inline
- Provide step-by-step solutions
- Include mark scheme (M1=method, A1=answer, B1=value)

Respond with JSON: {"content":"...","marks":N,"solution":"...","markScheme":["M1...","A1..."]}`,

    physics: `You are an expert GCSE Physics examiner trained on real exam papers. Generate exam-style questions matching actual paper format and style.

When generating questions:
- Use correct physics terminology
- Include units in all numerical answers
- Use appropriate command words (state, explain, calculate, describe)
- Provide worked solutions with equations
- Include mark scheme

Respond with JSON: {"content":"...","marks":N,"solution":"...","markScheme":["M1...","A1..."]}`,

    chemistry: `You are an expert GCSE Chemistry examiner trained on real exam papers. Generate exam-style questions matching actual paper format and style.

When generating questions:
- Use correct chemical terminology and formulae
- Include balanced equations where appropriate
- Use appropriate command words
- Provide worked solutions
- Include mark scheme

Respond with JSON: {"content":"...","marks":N,"solution":"...","markScheme":["M1...","A1..."]}`,
  };

  return subjectPrompts[subject] || subjectPrompts.maths;
}

function getUserPrompt(question: ExtractedQuestion): string {
  return `Generate a ${question.topic} question about ${question.subtopic}. Difficulty: ${question.marks} marks.`;
}

function getAssistantResponse(question: ExtractedQuestion): string {
  return JSON.stringify({
    content: question.content,
    marks: question.marks,
    solution: question.solution || 'Solution not available',
    markScheme: question.markScheme || [],
  });
}

function createTrainingExamples(
  questions: ExtractedQuestion[],
  subject: string
): TrainingExample[] {
  const examples: TrainingExample[] = [];
  const systemPrompt = getSystemPrompt(subject);

  for (const q of questions) {
    // Skip questions without solutions or with very short content
    if (!q.solution || q.content.length < 15) {
      continue;
    }

    // Skip if solution is placeholder
    if (q.solution === 'Solution not available') {
      continue;
    }

    examples.push({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: getUserPrompt(q) },
        { role: 'assistant', content: getAssistantResponse(q) },
      ],
    });
  }

  return examples;
}

function splitData(
  examples: TrainingExample[],
  validationRatio = 0.1
): { training: TrainingExample[]; validation: TrainingExample[] } {
  const shuffled = [...examples].sort(() => Math.random() - 0.5);
  const valCount = Math.max(1, Math.floor(shuffled.length * validationRatio));

  return {
    validation: shuffled.slice(0, valCount),
    training: shuffled.slice(valCount),
  };
}

function writeJsonl(filepath: string, data: TrainingExample[]): void {
  const lines = data.map(ex => JSON.stringify(ex));
  fs.writeFileSync(filepath, lines.join('\n'));
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: npx tsx scripts/fine-tuning/create-training-data.ts <extracted-json> [--output=<name>] [--subject=maths]');
    console.log('\nExample:');
    console.log('  npx tsx scripts/fine-tuning/create-training-data.ts data/extracted/maths-aqa.json --output=maths-gcse-aqa --subject=maths');
    process.exit(1);
  }

  const inputPath = args[0];
  const outputArg = args.find(a => a.startsWith('--output='));
  const subjectArg = args.find(a => a.startsWith('--subject='));

  const outputName = outputArg ? outputArg.split('=')[1] : path.basename(inputPath, '.json');
  const subject = subjectArg ? subjectArg.split('=')[1] : 'maths';

  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  console.log(`\nCreating training data from: ${inputPath}`);
  console.log(`Subject: ${subject}`);
  console.log(`Output name: ${outputName}\n`);

  // Load extracted questions
  const questions: ExtractedQuestion[] = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  console.log(`Loaded ${questions.length} questions`);

  // Create training examples
  const examples = createTrainingExamples(questions, subject);
  console.log(`Created ${examples.length} training examples`);
  console.log(`(Filtered out ${questions.length - examples.length} questions without solutions)`);

  if (examples.length < 10) {
    console.error('\n⚠️  Warning: OpenAI requires at least 10 training examples.');
    console.error('Add more past papers with mark schemes to get better results.');
  }

  // Split into training and validation
  const { training, validation } = splitData(examples);
  console.log(`\nTraining examples: ${training.length}`);
  console.log(`Validation examples: ${validation.length}`);

  // Save
  const outputDir = path.join(__dirname, '../../data/training');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const trainingPath = path.join(outputDir, `${outputName}-training.jsonl`);
  const validationPath = path.join(outputDir, `${outputName}-validation.jsonl`);

  writeJsonl(trainingPath, training);
  writeJsonl(validationPath, validation);

  console.log(`\n✓ Saved training data:`);
  console.log(`  ${trainingPath}`);
  console.log(`  ${validationPath}`);

  // Show stats
  const topics = new Map<string, number>();
  for (const q of questions.filter(q => q.solution)) {
    topics.set(q.topic, (topics.get(q.topic) || 0) + 1);
  }

  console.log('\nExamples by topic:');
  for (const [topic, count] of topics) {
    console.log(`  ${topic}: ${count}`);
  }

  console.log(`\nNext step: Run fine-tuning with:`);
  console.log(`  npx tsx scripts/fine-tuning/train.ts ${trainingPath} --validation=${validationPath}`);
}

main().catch(console.error);
