/**
 * Extract questions from past paper PDFs
 *
 * This reads PDFs as text and uses GPT-4o-mini (cheap) to structure them.
 *
 * Usage:
 *   npx tsx scripts/fine-tuning/extract-from-pdf.ts <pdf-path> [--mark-scheme=<ms-path>]
 *
 * Example:
 *   npx tsx scripts/fine-tuning/extract-from-pdf.ts data/papers/2023-paper1-qp.pdf --mark-scheme=data/papers/2023-paper1-ms.pdf
 */

import * as fs from 'fs';
import * as path from 'path';
import pdf from 'pdf-parse';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

async function extractTextFromPdf(pdfPath: string): Promise<string> {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  return data.text;
}

async function parseQuestionsFromText(
  text: string,
  source: string
): Promise<ExtractedQuestion[]> {
  console.log('Parsing questions from extracted text...');

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are an expert at parsing GCSE/A-Level exam papers.
Extract each question from the text and return as JSON array.

For each question identify:
- questionNumber: The question number (e.g., "1", "2a", "2b", "3(i)")
- content: The full question text. Convert any math to LaTeX ($...$). Keep it exact.
- marks: The marks for this question (look for [X marks] or (X) patterns)
- topic: The main topic (e.g., "Algebra", "Forces", "Atomic Structure")
- subtopic: More specific subtopic

Return ONLY a JSON array, no markdown code blocks.`
      },
      {
        role: 'user',
        content: `Extract all questions from this exam paper text:\n\n${text.substring(0, 15000)}`
      }
    ],
    temperature: 0,
    max_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content || '[]';

  try {
    // Clean up response - remove markdown if present
    let cleaned = content.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```$/g, '');
    }

    const questions = JSON.parse(cleaned);
    return questions.map((q: any) => ({
      ...q,
      source,
    }));
  } catch (e) {
    console.error('Failed to parse response:', content.substring(0, 500));
    return [];
  }
}

async function parseMarkSchemeFromText(
  text: string,
  questions: ExtractedQuestion[]
): Promise<Map<string, { solution: string; markScheme: string[] }>> {
  console.log('Parsing mark scheme...');

  const questionNumbers = questions.map(q => q.questionNumber).join(', ');

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are an expert at parsing exam mark schemes.
Extract the marking criteria for each question.

For each question provide:
- questionNumber: Must match exactly (e.g., "1", "2a", "2b")
- solution: The worked solution/answer
- markScheme: Array of mark points (e.g., ["M1 for setting up equation", "A1 for correct answer"])

Return ONLY a JSON array, no markdown.`
      },
      {
        role: 'user',
        content: `Extract mark schemes for questions: ${questionNumbers}\n\nMark scheme text:\n\n${text.substring(0, 15000)}`
      }
    ],
    temperature: 0,
    max_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content || '[]';
  const markSchemes = new Map<string, { solution: string; markScheme: string[] }>();

  try {
    let cleaned = content.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```$/g, '');
    }

    const parsed = JSON.parse(cleaned);
    for (const ms of parsed) {
      markSchemes.set(ms.questionNumber, {
        solution: ms.solution || '',
        markScheme: ms.markScheme || [],
      });
    }
  } catch (e) {
    console.error('Failed to parse mark scheme response');
  }

  return markSchemes;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: npx tsx scripts/fine-tuning/extract-from-pdf.ts <pdf-path> [--mark-scheme=<ms-path>]');
    console.log('\nExample:');
    console.log('  npx tsx scripts/fine-tuning/extract-from-pdf.ts data/papers/2023-paper1-qp.pdf --mark-scheme=data/papers/2023-paper1-ms.pdf');
    process.exit(1);
  }

  const qpPath = args[0];
  const msArg = args.find(a => a.startsWith('--mark-scheme='));
  const msPath = msArg ? msArg.split('=')[1] : null;

  if (!fs.existsSync(qpPath)) {
    console.error(`File not found: ${qpPath}`);
    process.exit(1);
  }

  console.log(`\nExtracting from: ${qpPath}`);

  // Extract text from question paper
  const qpText = await extractTextFromPdf(qpPath);
  console.log(`Extracted ${qpText.length} characters from question paper`);

  // Parse questions
  const questions = await parseQuestionsFromText(qpText, path.basename(qpPath));
  console.log(`Found ${questions.length} questions`);

  // Parse mark scheme if provided
  if (msPath && fs.existsSync(msPath)) {
    console.log(`\nExtracting mark scheme from: ${msPath}`);
    const msText = await extractTextFromPdf(msPath);
    const markSchemes = await parseMarkSchemeFromText(msText, questions);

    // Merge mark schemes with questions
    for (const q of questions) {
      const ms = markSchemes.get(q.questionNumber);
      if (ms) {
        q.solution = ms.solution;
        q.markScheme = ms.markScheme;
      }
    }

    console.log(`Matched ${markSchemes.size} mark schemes`);
  }

  // Save results
  const outputDir = path.join(__dirname, '../../data/extracted');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputName = path.basename(qpPath, '.pdf') + '-extracted.json';
  const outputPath = path.join(outputDir, outputName);

  fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2));

  console.log(`\n✓ Saved ${questions.length} questions to: ${outputPath}`);

  // Show sample
  if (questions.length > 0) {
    console.log('\nSample question:');
    console.log(JSON.stringify(questions[0], null, 2));
  }
}

main().catch(console.error);
