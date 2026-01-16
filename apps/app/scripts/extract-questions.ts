import * as fs from 'fs';
import * as path from 'path';
import { pdf } from 'pdf-img-convert';
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
  difficulty: 'foundation' | 'higher';
  hasImage: boolean;
  source: {
    paper: string;
    year: number;
    session: string;
  };
}

interface ExtractedMarkScheme {
  questionNumber: string;
  solution: string;
  markScheme: string[];
  totalMarks: number;
}

async function convertPdfToImages(pdfPath: string): Promise<Buffer[]> {
  console.log(`  Converting PDF to images...`);
  const images = await pdf(pdfPath, {
    scale: 2.0, // Higher resolution for better OCR
  });
  return images as Buffer[];
}

async function extractQuestionsFromImages(
  images: Buffer[],
  paperInfo: { year: number; session: string; paper: string; tier: string }
): Promise<ExtractedQuestion[]> {
  const questions: ExtractedQuestion[] = [];

  // Process pages in batches (skip first page which is usually instructions)
  for (let i = 1; i < images.length; i++) {
    console.log(`  Processing page ${i + 1}/${images.length}...`);

    const base64Image = images[i].toString('base64');

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert at extracting exam questions from GCSE Mathematics papers.
Extract each question on this page as structured JSON.
For each question, identify:
- The question number (e.g., "1", "2a", "2b")
- The full question text (preserve mathematical notation using LaTeX: $...$ for inline, $$...$$ for display)
- The marks allocated
- The topic (Number, Algebra, Geometry, Statistics, Probability, Ratio)
- A specific subtopic
- Whether it contains a diagram/image that's essential to the question

Return a JSON array of questions. If the page has no questions (e.g., blank space, formula sheet), return an empty array.`,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${base64Image}`,
                  detail: 'high',
                },
              },
              {
                type: 'text',
                text: `Extract all questions from this ${paperInfo.tier} tier exam page. Return as JSON array:
[{
  "questionNumber": "1a",
  "content": "Question text with $LaTeX$ math",
  "marks": 3,
  "topic": "Algebra",
  "subtopic": "Solving equations",
  "hasImage": false
}]`,
              },
            ],
          },
        ],
        max_tokens: 4000,
        temperature: 0,
      });

      const content = response.choices[0]?.message?.content || '[]';

      // Extract JSON from response
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const pageQuestions = JSON.parse(jsonMatch[0]);
        for (const q of pageQuestions) {
          questions.push({
            ...q,
            difficulty: paperInfo.tier === 'H' ? 'higher' : 'foundation',
            source: {
              paper: paperInfo.paper,
              year: paperInfo.year,
              session: paperInfo.session,
            },
          });
        }
      }
    } catch (error) {
      console.error(`  Error processing page ${i + 1}:`, error);
    }

    // Rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return questions;
}

async function extractMarkSchemeFromImages(
  images: Buffer[],
  questionNumbers: string[]
): Promise<ExtractedMarkScheme[]> {
  const markSchemes: ExtractedMarkScheme[] = [];

  for (let i = 0; i < images.length; i++) {
    console.log(`  Processing mark scheme page ${i + 1}/${images.length}...`);

    const base64Image = images[i].toString('base64');

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert at extracting mark schemes from GCSE Mathematics papers.
Extract the marking criteria for each question on this page.
For each question, provide:
- The full worked solution (with LaTeX math notation)
- Individual mark scheme points (what earns each mark)
- Total marks

Use LaTeX notation for all mathematics: $...$ for inline, $$...$$ for display.`,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/png;base64,${base64Image}`,
                  detail: 'high',
                },
              },
              {
                type: 'text',
                text: `Extract mark schemes from this page. Return as JSON array:
[{
  "questionNumber": "1a",
  "solution": "Step-by-step solution with $LaTeX$",
  "markScheme": ["M1 for method", "A1 for correct answer"],
  "totalMarks": 2
}]`,
              },
            ],
          },
        ],
        max_tokens: 4000,
        temperature: 0,
      });

      const content = response.choices[0]?.message?.content || '[]';

      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        const pageMarkSchemes = JSON.parse(jsonMatch[0]);
        markSchemes.push(...pageMarkSchemes);
      }
    } catch (error) {
      console.error(`  Error processing mark scheme page ${i + 1}:`, error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return markSchemes;
}

function parsePaperFilename(filename: string): {
  year: number;
  session: string;
  paper: string;
  tier: string;
  type: 'QP' | 'MS';
} | null {
  // Format: 2023-june-83001H-QP.pdf
  const match = filename.match(/(\d{4})-(\w+)-8300(\d)([FH])-(\w+)\.pdf/);
  if (!match) return null;

  return {
    year: parseInt(match[1]),
    session: match[2],
    paper: `Paper ${match[3]}`,
    tier: match[4],
    type: match[5] as 'QP' | 'MS',
  };
}

async function processAllPapers() {
  const rawDir = path.join(__dirname, '..', 'data', 'raw');
  const processedDir = path.join(__dirname, '..', 'data', 'processed');

  if (!fs.existsSync(processedDir)) {
    fs.mkdirSync(processedDir, { recursive: true });
  }

  const files = fs.readdirSync(rawDir).filter((f) => f.endsWith('.pdf'));

  // Group question papers with their mark schemes
  const paperGroups = new Map<string, { qp?: string; ms?: string }>();

  for (const file of files) {
    const parsed = parsePaperFilename(file);
    if (!parsed) continue;

    const key = `${parsed.year}-${parsed.session}-${parsed.paper}-${parsed.tier}`;
    if (!paperGroups.has(key)) {
      paperGroups.set(key, {});
    }

    const group = paperGroups.get(key)!;
    if (parsed.type === 'QP') {
      group.qp = file;
    } else {
      group.ms = file;
    }
  }

  console.log(`Found ${paperGroups.size} paper sets to process\n`);

  const allQuestions: Array<ExtractedQuestion & { solution?: string; markScheme?: string[] }> = [];

  for (const [key, { qp, ms }] of paperGroups) {
    if (!qp) {
      console.log(`Skipping ${key}: No question paper`);
      continue;
    }

    console.log(`\nProcessing: ${key}`);

    const parsed = parsePaperFilename(qp)!;

    // Extract questions
    console.log(`  Question paper: ${qp}`);
    const qpImages = await convertPdfToImages(path.join(rawDir, qp));
    const questions = await extractQuestionsFromImages(qpImages, {
      year: parsed.year,
      session: parsed.session,
      paper: parsed.paper,
      tier: parsed.tier,
    });

    console.log(`  Found ${questions.length} questions`);

    // Extract mark schemes if available
    if (ms) {
      console.log(`  Mark scheme: ${ms}`);
      const msImages = await convertPdfToImages(path.join(rawDir, ms));
      const markSchemes = await extractMarkSchemeFromImages(
        msImages,
        questions.map((q) => q.questionNumber)
      );

      // Match questions with mark schemes
      for (const q of questions) {
        const matchingMs = markSchemes.find(
          (m) => m.questionNumber === q.questionNumber
        );
        if (matchingMs) {
          allQuestions.push({
            ...q,
            solution: matchingMs.solution,
            markScheme: matchingMs.markScheme,
          });
        } else {
          allQuestions.push(q);
        }
      }
    } else {
      allQuestions.push(...questions);
    }

    // Save progress after each paper
    fs.writeFileSync(
      path.join(processedDir, 'extracted-questions.json'),
      JSON.stringify(allQuestions, null, 2)
    );
  }

  console.log(`\n✓ Extraction complete: ${allQuestions.length} questions`);
  console.log(`Saved to: ${path.join(processedDir, 'extracted-questions.json')}`);
}

// Run if called directly
processAllPapers().catch(console.error);
