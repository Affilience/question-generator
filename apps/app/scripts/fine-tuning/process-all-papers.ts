/**
 * Process all past papers in a directory
 *
 * Usage:
 *   npx tsx scripts/fine-tuning/process-all-papers.ts <papers-directory>
 *
 * Expected structure:
 *   papers/
 *     2023-june-paper1-qp.pdf
 *     2023-june-paper1-ms.pdf
 *     2023-june-paper2-qp.pdf
 *     2023-june-paper2-ms.pdf
 *     ...
 *
 * Files ending in -qp.pdf are question papers
 * Files ending in -ms.pdf are mark schemes
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
  source: string,
  subject: string
): Promise<ExtractedQuestion[]> {
  // Truncate if too long
  const truncatedText = text.length > 20000 ? text.substring(0, 20000) : text;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are an expert at parsing ${subject} exam papers.
Extract each question and return as JSON array.

For each question:
- questionNumber: e.g., "1", "2a", "2(b)(i)"
- content: Full question text with LaTeX math ($...$)
- marks: Number of marks
- topic: Main topic
- subtopic: Specific subtopic

Return ONLY valid JSON array, no markdown.`
      },
      {
        role: 'user',
        content: `Extract questions from this ${subject} exam paper:\n\n${truncatedText}`
      }
    ],
    temperature: 0,
    max_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content || '[]';

  try {
    let cleaned = content.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```$/g, '');
    }
    const questions = JSON.parse(cleaned);
    return questions.map((q: any) => ({ ...q, source }));
  } catch {
    console.error(`  Failed to parse questions from ${source}`);
    return [];
  }
}

async function parseMarkScheme(
  text: string,
  questions: ExtractedQuestion[]
): Promise<Map<string, { solution: string; markScheme: string[] }>> {
  const truncatedText = text.length > 20000 ? text.substring(0, 20000) : text;
  const qNums = questions.map(q => q.questionNumber).slice(0, 30).join(', ');

  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Extract mark schemes. Return JSON array with:
- questionNumber: Must match exactly
- solution: Worked solution
- markScheme: ["M1 for...", "A1 for..."]

Return ONLY valid JSON array.`
      },
      {
        role: 'user',
        content: `Questions: ${qNums}\n\nMark scheme:\n${truncatedText}`
      }
    ],
    temperature: 0,
    max_tokens: 4000,
  });

  const content = response.choices[0]?.message?.content || '[]';
  const result = new Map<string, { solution: string; markScheme: string[] }>();

  try {
    let cleaned = content.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/```json?\n?/g, '').replace(/```$/g, '');
    }
    const parsed = JSON.parse(cleaned);
    for (const ms of parsed) {
      result.set(ms.questionNumber, {
        solution: ms.solution || '',
        markScheme: ms.markScheme || [],
      });
    }
  } catch {
    console.error('  Failed to parse mark scheme');
  }

  return result;
}

function findPaperPairs(dir: string): Map<string, { qp?: string; ms?: string }> {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
  const pairs = new Map<string, { qp?: string; ms?: string }>();

  for (const file of files) {
    // Extract base name (remove -qp.pdf or -ms.pdf)
    let baseName: string;
    let type: 'qp' | 'ms';

    if (file.endsWith('-qp.pdf') || file.endsWith('_qp.pdf')) {
      baseName = file.replace(/[-_]qp\.pdf$/i, '');
      type = 'qp';
    } else if (file.endsWith('-ms.pdf') || file.endsWith('_ms.pdf')) {
      baseName = file.replace(/[-_]ms\.pdf$/i, '');
      type = 'ms';
    } else if (file.toLowerCase().includes('question')) {
      baseName = file.replace(/\.pdf$/i, '').replace(/question[-_]?paper/i, '');
      type = 'qp';
    } else if (file.toLowerCase().includes('mark')) {
      baseName = file.replace(/\.pdf$/i, '').replace(/mark[-_]?scheme/i, '');
      type = 'ms';
    } else {
      // Assume it's a question paper if can't determine
      baseName = file.replace(/\.pdf$/i, '');
      type = 'qp';
    }

    if (!pairs.has(baseName)) {
      pairs.set(baseName, {});
    }
    pairs.get(baseName)![type] = file;
  }

  return pairs;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: npx tsx scripts/fine-tuning/process-all-papers.ts <papers-directory> [--subject=maths]');
    console.log('\nExample:');
    console.log('  npx tsx scripts/fine-tuning/process-all-papers.ts data/papers/maths/gcse/aqa --subject=maths');
    process.exit(1);
  }

  const papersDir = args[0];
  const subjectArg = args.find(a => a.startsWith('--subject='));
  const subject = subjectArg ? subjectArg.split('=')[1] : 'maths';

  if (!fs.existsSync(papersDir)) {
    console.error(`Directory not found: ${papersDir}`);
    process.exit(1);
  }

  console.log(`\nProcessing papers in: ${papersDir}`);
  console.log(`Subject: ${subject}\n`);

  const pairs = findPaperPairs(papersDir);
  console.log(`Found ${pairs.size} paper sets\n`);

  const allQuestions: ExtractedQuestion[] = [];

  for (const [baseName, { qp, ms }] of pairs) {
    if (!qp) {
      console.log(`Skipping ${baseName}: No question paper found`);
      continue;
    }

    console.log(`Processing: ${baseName}`);

    // Extract question paper
    const qpPath = path.join(papersDir, qp);
    console.log(`  Reading: ${qp}`);
    const qpText = await extractTextFromPdf(qpPath);

    const questions = await parseQuestionsFromText(qpText, qp, subject);
    console.log(`  Found ${questions.length} questions`);

    // Extract mark scheme if available
    if (ms) {
      const msPath = path.join(papersDir, ms);
      console.log(`  Reading mark scheme: ${ms}`);
      const msText = await extractTextFromPdf(msPath);
      const markSchemes = await parseMarkScheme(msText, questions);

      for (const q of questions) {
        const msData = markSchemes.get(q.questionNumber);
        if (msData) {
          q.solution = msData.solution;
          q.markScheme = msData.markScheme;
        }
      }
      console.log(`  Matched ${markSchemes.size} mark schemes`);
    }

    allQuestions.push(...questions);

    // Small delay between papers
    await new Promise(r => setTimeout(r, 500));
  }

  // Save all questions
  const outputDir = path.join(__dirname, '../../data/extracted');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputName = `${subject}-${path.basename(papersDir)}.json`;
  const outputPath = path.join(outputDir, outputName);

  fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2));

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✓ Extracted ${allQuestions.length} questions total`);
  console.log(`✓ Saved to: ${outputPath}`);

  // Stats
  const withSolutions = allQuestions.filter(q => q.solution).length;
  const topics = new Set(allQuestions.map(q => q.topic));
  console.log(`\nStats:`);
  console.log(`  Questions with solutions: ${withSolutions}/${allQuestions.length}`);
  console.log(`  Topics found: ${[...topics].join(', ')}`);
}

main().catch(console.error);
