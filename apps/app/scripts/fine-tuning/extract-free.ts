/**
 * FREE extraction - no AI costs
 *
 * Reads PDFs and parses questions using regex patterns.
 * Only the final fine-tuning step costs money.
 *
 * Usage:
 *   npx tsx scripts/fine-tuning/extract-free.ts <papers-directory>
 */

import * as fs from 'fs';
import * as path from 'path';
import pdf from 'pdf-parse';

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

function parseQuestionsFromText(text: string, source: string): ExtractedQuestion[] {
  const questions: ExtractedQuestion[] = [];

  // Clean up text
  const cleaned = text
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');

  // Pattern to match questions like "1 " or "1." or "(a)" followed by content, then marks
  // AQA format: Question number, content, then [X marks] or (X marks) or (X)
  const questionPattern = /(?:^|\n)(\d+)\s*[\.\)]*\s*([\s\S]*?)(?:\[(\d+)\s*marks?\]|\((\d+)\s*marks?\)|\((\d+)\))/gi;

  // Also match sub-questions like (a), (b), (i), (ii)
  const subQuestionPattern = /(?:^|\n)\s*\(([a-z]|[iv]+)\)\s*([\s\S]*?)(?:\[(\d+)\s*marks?\]|\((\d+)\s*marks?\)|\((\d+)\))/gi;

  let match;

  // Extract main questions
  while ((match = questionPattern.exec(cleaned)) !== null) {
    const questionNum = match[1];
    const content = match[2].trim();
    const marks = parseInt(match[3] || match[4] || match[5] || '1');

    if (content.length > 10) { // Skip very short matches
      questions.push({
        questionNumber: questionNum,
        content: cleanContent(content),
        marks,
        topic: inferTopic(content),
        subtopic: inferSubtopic(content),
        source,
      });
    }
  }

  // Extract sub-questions
  while ((match = subQuestionPattern.exec(cleaned)) !== null) {
    const questionNum = `(${match[1]})`;
    const content = match[2].trim();
    const marks = parseInt(match[3] || match[4] || match[5] || '1');

    if (content.length > 10) {
      questions.push({
        questionNumber: questionNum,
        content: cleanContent(content),
        marks,
        topic: inferTopic(content),
        subtopic: inferSubtopic(content),
        source,
      });
    }
  }

  return questions;
}

function parseMarkSchemeFromText(text: string): Map<string, { solution: string; markScheme: string[] }> {
  const markSchemes = new Map<string, { solution: string; markScheme: string[] }>();

  // Clean up text
  const cleaned = text.replace(/\r\n/g, '\n');

  // Pattern to match mark scheme entries
  // Usually: Question number, then M1/A1/B1 marks with descriptions
  const msPattern = /(?:^|\n)(\d+)\s*[\.\)]*\s*([\s\S]*?)(?=\n\d+\s*[\.\)]|\n*$)/gi;

  let match;
  while ((match = msPattern.exec(cleaned)) !== null) {
    const questionNum = match[1];
    const msContent = match[2].trim();

    // Extract individual mark points (M1, A1, B1, etc.)
    const markPoints: string[] = [];
    const markPattern = /([MAB]\d+)\s*[:\-]?\s*([^\n]+)/gi;
    let markMatch;

    while ((markMatch = markPattern.exec(msContent)) !== null) {
      markPoints.push(`${markMatch[1]}: ${markMatch[2].trim()}`);
    }

    if (markPoints.length > 0 || msContent.length > 20) {
      markSchemes.set(questionNum, {
        solution: cleanContent(msContent),
        markScheme: markPoints,
      });
    }
  }

  return markSchemes;
}

function cleanContent(content: string): string {
  return content
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n')
    .trim();
}

function inferTopic(content: string): string {
  const lower = content.toLowerCase();

  if (lower.includes('solve') || lower.includes('equation') || lower.includes('x =') || lower.includes('factorise')) {
    return 'Algebra';
  }
  if (lower.includes('angle') || lower.includes('triangle') || lower.includes('circle') || lower.includes('area') || lower.includes('perimeter')) {
    return 'Geometry';
  }
  if (lower.includes('probability') || lower.includes('likely') || lower.includes('chance')) {
    return 'Probability';
  }
  if (lower.includes('mean') || lower.includes('median') || lower.includes('mode') || lower.includes('frequency') || lower.includes('graph')) {
    return 'Statistics';
  }
  if (lower.includes('ratio') || lower.includes('proportion') || lower.includes('percent') || lower.includes('%')) {
    return 'Ratio';
  }
  if (lower.includes('fraction') || lower.includes('decimal') || lower.includes('calculate') || /\d+\s*[\+\-\×\÷]\s*\d+/.test(content)) {
    return 'Number';
  }

  return 'General';
}

function inferSubtopic(content: string): string {
  const lower = content.toLowerCase();

  // Algebra subtopics
  if (lower.includes('quadratic')) return 'Quadratic equations';
  if (lower.includes('simultaneous')) return 'Simultaneous equations';
  if (lower.includes('factorise')) return 'Factorising';
  if (lower.includes('expand')) return 'Expanding brackets';
  if (lower.includes('linear')) return 'Linear equations';

  // Geometry subtopics
  if (lower.includes('pythagoras')) return 'Pythagoras theorem';
  if (lower.includes('trigonometry') || lower.includes('sin') || lower.includes('cos') || lower.includes('tan')) return 'Trigonometry';
  if (lower.includes('circle')) return 'Circles';
  if (lower.includes('volume')) return 'Volume';
  if (lower.includes('surface area')) return 'Surface area';

  // Number subtopics
  if (lower.includes('fraction')) return 'Fractions';
  if (lower.includes('percent')) return 'Percentages';
  if (lower.includes('ratio')) return 'Ratios';

  return 'Mixed';
}

function findPaperPairs(dir: string): Map<string, { qp?: string; ms?: string }> {
  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.pdf'));
  const pairs = new Map<string, { qp?: string; ms?: string }>();

  for (const file of files) {
    const lower = file.toLowerCase();
    let baseName: string;
    let type: 'qp' | 'ms';

    if (lower.includes('-qp') || lower.includes('_qp') || lower.includes('question')) {
      baseName = file.replace(/[-_]?qp/i, '').replace(/question[-_]?paper/i, '').replace(/\.pdf$/i, '');
      type = 'qp';
    } else if (lower.includes('-ms') || lower.includes('_ms') || lower.includes('mark')) {
      baseName = file.replace(/[-_]?ms/i, '').replace(/mark[-_]?scheme/i, '').replace(/\.pdf$/i, '');
      type = 'ms';
    } else {
      // Assume question paper if can't determine
      baseName = file.replace(/\.pdf$/i, '');
      type = 'qp';
    }

    // Normalize base name
    baseName = baseName.replace(/[-_]+/g, '-').toLowerCase();

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
    console.log('Usage: npx tsx scripts/fine-tuning/extract-free.ts <papers-directory>');
    console.log('\nThis script is FREE - no AI API calls!');
    console.log('\nExample:');
    console.log('  npx tsx scripts/fine-tuning/extract-free.ts data/papers/maths-gcse-aqa');
    process.exit(1);
  }

  const papersDir = args[0];

  if (!fs.existsSync(papersDir)) {
    console.error(`Directory not found: ${papersDir}`);
    process.exit(1);
  }

  console.log(`\n📄 FREE Extraction (no API costs)`);
  console.log(`Processing papers in: ${papersDir}\n`);

  const pairs = findPaperPairs(papersDir);
  console.log(`Found ${pairs.size} paper sets\n`);

  const allQuestions: ExtractedQuestion[] = [];

  for (const [baseName, { qp, ms }] of pairs) {
    if (!qp) {
      console.log(`Skipping ${baseName}: No question paper found`);
      continue;
    }

    console.log(`Processing: ${baseName}`);

    // Extract from question paper
    const qpPath = path.join(papersDir, qp);
    console.log(`  Reading: ${qp}`);
    const qpText = await extractTextFromPdf(qpPath);

    const questions = parseQuestionsFromText(qpText, qp);
    console.log(`  Found ${questions.length} questions`);

    // Extract from mark scheme if available
    if (ms) {
      const msPath = path.join(papersDir, ms);
      console.log(`  Reading: ${ms}`);
      const msText = await extractTextFromPdf(msPath);
      const markSchemes = parseMarkSchemeFromText(msText);

      // Match questions with mark schemes
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
  }

  // Save results
  const outputDir = path.join(__dirname, '../../data/extracted');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputName = `${path.basename(papersDir)}-extracted.json`;
  const outputPath = path.join(outputDir, outputName);

  fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2));

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✓ Extracted ${allQuestions.length} questions (FREE!)`);
  console.log(`✓ Saved to: ${outputPath}`);

  // Stats
  const withSolutions = allQuestions.filter(q => q.solution).length;
  const topics = new Map<string, number>();
  for (const q of allQuestions) {
    topics.set(q.topic, (topics.get(q.topic) || 0) + 1);
  }

  console.log(`\nStats:`);
  console.log(`  With solutions: ${withSolutions}/${allQuestions.length}`);
  console.log(`  Topics: ${[...topics.entries()].map(([t, c]) => `${t}(${c})`).join(', ')}`);

  console.log(`\nNext step:`);
  console.log(`  npx tsx scripts/fine-tuning/create-training-data.ts ${outputPath}`);
}

main().catch(console.error);
