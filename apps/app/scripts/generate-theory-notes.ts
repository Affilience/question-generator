#!/usr/bin/env tsx

import OpenAI from 'openai';
import { promises as fs } from 'fs';
import path from 'path';
import { getAllSubtopicParams } from '../src/lib/seo/utils';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-api-key-here',
});

interface TheoryNote {
  id: string;
  title: string;
  subtopic: string;
  topic: string;
  subject: string;
  level: 'gcse' | 'a-level';
  examBoard: string;
  content: string;
  keyPoints: string[];
  formulas: string[];
  examples: string[];
  commonMistakes: string[];
  examTips: string[];
  relatedSubtopics: string[];
  difficulty: 'foundation' | 'higher' | 'advanced';
  estimatedReadTime: string;
  lastUpdated: string;
}

// Expert system prompt for theory notes
const THEORY_NOTES_SYSTEM_PROMPT = `You are an expert educational content writer specializing in UK GCSE and A-Level curriculum theory notes.

Your expertise includes:
- Deep knowledge of all UK exam boards (AQA, Edexcel, OCR, WJEC)
- Mastery of curriculum specifications and assessment objectives
- Proven track record of creating content that helps students achieve top grades
- Understanding of how students learn and common misconceptions

CONTENT REQUIREMENTS:
- Comprehensive coverage of ALL theoretical concepts for the given subtopic
- Clear, step-by-step explanations that build understanding progressively
- Real-world examples and applications to make concepts memorable
- Visual descriptions for diagrams, graphs, and mathematical relationships
- Curriculum-accurate information that aligns with current specifications

STRUCTURE REQUIREMENTS:
- Start with core definitions and fundamental concepts
- Build complexity gradually with clear explanations
- Include worked examples with detailed reasoning
- Highlight key formulas, equations, and relationships
- Address common misconceptions and mistakes
- Provide exam-specific guidance and mark scheme insights

QUALITY STANDARDS:
- Content must be 100% accurate to current curriculum specifications
- Use clear, accessible language appropriate for the target level
- Include specific examples students can relate to and remember
- Provide context for why concepts matter and how they connect
- Include memory aids, mnemonics, and learning strategies

Your notes should be the definitive resource a student needs to completely understand the topic.`;

function generateTheoryPrompt(subtopic: string, topic: string, subject: string, level: string, examBoard: string): string {
  return `Create comprehensive theory notes for the subtopic "${subtopic}" within the topic "${topic}" for ${level.toUpperCase()} ${subject.toUpperCase()}, following the ${examBoard.toUpperCase()} specification.

TARGET AUDIENCE: ${level.toUpperCase()} students studying ${subject.replace('-', ' ')}
EXAM BOARD: ${examBoard.toUpperCase()}
TOPIC: ${topic}
SUBTOPIC: ${subtopic}

CONTENT REQUIREMENTS:
1. Complete theoretical coverage of "${subtopic}"
2. All key concepts, definitions, and principles
3. Mathematical relationships and formulas (where applicable)
4. Step-by-step explanations with reasoning
5. Real-world examples and applications
6. Common misconceptions and how to avoid them
7. Exam board specific requirements and terminology
8. Connection to other related subtopics

STRUCTURE REQUIREMENTS:
- Clear section headings and subheadings
- Progressive difficulty from basic to advanced concepts
- Bullet points for key facts and formulas
- Worked examples with detailed explanations
- Summary of key points
- Next steps for further learning

Return as JSON with these exact fields:
{
  "title": "Engaging title that includes the subtopic name",
  "content": "Complete theory notes in markdown format (2000+ words)",
  "keyPoints": ["array of 8-12 essential points students must remember"],
  "formulas": ["array of key formulas/equations with explanations"],
  "examples": ["array of 3-5 worked examples with solutions"],
  "commonMistakes": ["array of 5-8 frequent student errors and corrections"],
  "examTips": ["array of exam-specific guidance and mark scheme insights"],
  "relatedSubtopics": ["array of connected subtopics for cross-referencing"]
}`;
}

async function generateTheoryNote(
  subtopic: string, 
  topic: string, 
  subject: string, 
  level: string, 
  examBoard: string
): Promise<TheoryNote> {
  
  console.log(`📖 Generating theory notes for: ${level.toUpperCase()} ${subject} - ${subtopic}`);
  
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: THEORY_NOTES_SYSTEM_PROMPT },
        { role: 'user', content: generateTheoryPrompt(subtopic, topic, subject, level, examBoard) }
      ],
      temperature: 0.7,
      max_tokens: 4000,
      response_format: { type: 'json_object' }
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content returned from OpenAI');
    }

    const parsed = JSON.parse(content);
    
    // Validate required fields
    const requiredFields = ['title', 'content', 'keyPoints', 'formulas', 'examples', 'commonMistakes', 'examTips'];
    const missingFields = requiredFields.filter(field => !parsed[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Create theory note object
    const theoryNote: TheoryNote = {
      id: `${level}-${subject}-${examBoard}-${topic}-${subtopic}`.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      title: parsed.title,
      subtopic,
      topic,
      subject,
      level: level as 'gcse' | 'a-level',
      examBoard,
      content: parsed.content,
      keyPoints: parsed.keyPoints || [],
      formulas: parsed.formulas || [],
      examples: parsed.examples || [],
      commonMistakes: parsed.commonMistakes || [],
      examTips: parsed.examTips || [],
      relatedSubtopics: parsed.relatedSubtopics || [],
      difficulty: level === 'gcse' ? 'foundation' : 'advanced',
      estimatedReadTime: estimateReadTime(parsed.content),
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    console.log(`✅ Generated theory notes: "${theoryNote.title}"`);
    return theoryNote;

  } catch (error) {
    console.error(`❌ Failed to generate theory notes for ${subtopic}:`, error.message);
    throw error;
  }
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Generate theory notes for specific subjects
async function generateTheoryNotesForSubject(
  subject: string, 
  level: 'gcse' | 'a-level', 
  examBoard: string,
  maxSubtopics: number = 50
): Promise<TheoryNote[]> {
  
  console.log(`📚 Generating theory notes for ${level.toUpperCase()} ${subject} (${examBoard.toUpperCase()})`);
  
  // Get all subtopics for this subject/level/board combination
  const allSubtopics = getAllSubtopicParams();
  const relevantSubtopics = allSubtopics
    .filter(params => 
      params.subject === subject && 
      params.level === level && 
      params.examBoard === examBoard
    )
    .slice(0, maxSubtopics); // Limit for testing

  console.log(`🎯 Found ${relevantSubtopics.length} subtopics to process`);
  
  const theoryNotes: TheoryNote[] = [];
  
  for (let i = 0; i < relevantSubtopics.length; i++) {
    const params = relevantSubtopics[i];
    
    try {
      const note = await generateTheoryNote(
        params.subtopic,
        params.topic,
        params.subject,
        params.level,
        params.examBoard
      );
      
      theoryNotes.push(note);
      
      console.log(`📈 Progress: ${i + 1}/${relevantSubtopics.length} theory notes completed`);
      
      // Rate limiting
      if (i < relevantSubtopics.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
    } catch (error) {
      console.warn(`⚠️ Skipping ${params.subtopic} due to error:`, error.message);
      continue;
    }
  }
  
  return theoryNotes;
}

// Export theory notes to various formats
async function exportTheoryNotes(notes: TheoryNote[], format: 'json' | 'typescript' | 'markdown' = 'typescript') {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  if (format === 'json') {
    const jsonPath = path.join(process.cwd(), `theory-notes-${timestamp}.json`);
    await fs.writeFile(jsonPath, JSON.stringify(notes, null, 2));
    console.log(`💾 Exported ${notes.length} theory notes to: ${jsonPath}`);
  }
  
  if (format === 'typescript') {
    const tsContent = generateTypeScriptFile(notes);
    const tsPath = path.join(process.cwd(), 'src/lib/theory-notes.ts');
    await fs.writeFile(tsPath, tsContent);
    console.log(`💾 Exported ${notes.length} theory notes to TypeScript: ${tsPath}`);
  }
  
  if (format === 'markdown') {
    for (const note of notes) {
      const mdContent = generateMarkdownFile(note);
      const mdPath = path.join(process.cwd(), `notes/${note.id}.md`);
      
      // Ensure directory exists
      await fs.mkdir(path.dirname(mdPath), { recursive: true });
      await fs.writeFile(mdPath, mdContent);
    }
    console.log(`💾 Exported ${notes.length} theory notes as individual markdown files`);
  }
}

function generateTypeScriptFile(notes: TheoryNote[]): string {
  return `// Auto-generated theory notes database
// Generated on: ${new Date().toISOString()}

export interface TheoryNote {
  id: string;
  title: string;
  subtopic: string;
  topic: string;
  subject: string;
  level: 'gcse' | 'a-level';
  examBoard: string;
  content: string;
  keyPoints: string[];
  formulas: string[];
  examples: string[];
  commonMistakes: string[];
  examTips: string[];
  relatedSubtopics: string[];
  difficulty: 'foundation' | 'higher' | 'advanced';
  estimatedReadTime: string;
  lastUpdated: string;
}

export const THEORY_NOTES: TheoryNote[] = ${JSON.stringify(notes, null, 2)};

export async function getTheoryNote(id: string): Promise<TheoryNote | null> {
  return THEORY_NOTES.find(note => note.id === id) || null;
}

export async function getTheoryNotesBySubtopic(subtopic: string): Promise<TheoryNote[]> {
  return THEORY_NOTES.filter(note => note.subtopic === subtopic);
}

export async function getTheoryNotesByTopic(topic: string): Promise<TheoryNote[]> {
  return THEORY_NOTES.filter(note => note.topic === topic);
}

export async function getTheoryNotesBySubject(subject: string, level?: string, examBoard?: string): Promise<TheoryNote[]> {
  return THEORY_NOTES.filter(note => {
    if (note.subject !== subject) return false;
    if (level && note.level !== level) return false;
    if (examBoard && note.examBoard !== examBoard) return false;
    return true;
  });
}

export async function searchTheoryNotes(query: string): Promise<TheoryNote[]> {
  const lowercaseQuery = query.toLowerCase();
  return THEORY_NOTES.filter(note => 
    note.title.toLowerCase().includes(lowercaseQuery) ||
    note.content.toLowerCase().includes(lowercaseQuery) ||
    note.keyPoints.some(point => point.toLowerCase().includes(lowercaseQuery))
  );
}`;
}

function generateMarkdownFile(note: TheoryNote): string {
  return `# ${note.title}

**Subject:** ${note.subject.toUpperCase()}  
**Level:** ${note.level.toUpperCase()}  
**Exam Board:** ${note.examBoard.toUpperCase()}  
**Topic:** ${note.topic}  
**Subtopic:** ${note.subtopic}  
**Read Time:** ${note.estimatedReadTime}  
**Last Updated:** ${note.lastUpdated}

---

${note.content}

## 🔑 Key Points

${note.keyPoints.map(point => `- ${point}`).join('\n')}

## 📐 Formulas & Equations

${note.formulas.length > 0 ? note.formulas.map(formula => `- ${formula}`).join('\n') : '_No formulas for this subtopic_'}

## 💡 Worked Examples

${note.examples.map((example, index) => `### Example ${index + 1}\n${example}\n`).join('\n')}

## ❌ Common Mistakes

${note.commonMistakes.map(mistake => `- ${mistake}`).join('\n')}

## 🎯 Exam Tips

${note.examTips.map(tip => `- ${tip}`).join('\n')}

## 🔗 Related Subtopics

${note.relatedSubtopics.length > 0 ? note.relatedSubtopics.map(subtopic => `- ${subtopic}`).join('\n') : '_No related subtopics listed_'}

---

*Generated using AI-powered educational content system*`;
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log(`
🎓 Theory Notes Generator
========================

Usage: tsx scripts/generate-theory-notes.ts <subject> <level> <examBoard> [maxSubtopics]

Examples:
  tsx scripts/generate-theory-notes.ts maths gcse aqa 20
  tsx scripts/generate-theory-notes.ts physics a-level edexcel 15
  tsx scripts/generate-theory-notes.ts chemistry gcse ocr 25

Available subjects: maths, physics, chemistry, biology, english-literature, history, geography
Available levels: gcse, a-level
Available exam boards: aqa, edexcel, ocr

This will generate comprehensive theory notes for each subtopic in the specified subject.
`);
    process.exit(1);
  }

  const subject = args[0];
  const level = args[1] as 'gcse' | 'a-level';
  const examBoard = args[2];
  const maxSubtopics = parseInt(args[3]) || 50;

  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY environment variable is required');
    console.log('💡 Set your API key: export OPENAI_API_KEY="your-key-here"');
    process.exit(1);
  }

  try {
    console.log(`🚀 Starting theory notes generation...`);
    console.log(`📚 Subject: ${subject.toUpperCase()}`);
    console.log(`🎓 Level: ${level.toUpperCase()}`);
    console.log(`📋 Exam Board: ${examBoard.toUpperCase()}`);
    console.log(`🎯 Max Subtopics: ${maxSubtopics}`);

    const theoryNotes = await generateTheoryNotesForSubject(subject, level, examBoard, maxSubtopics);
    
    console.log(`\n🎉 Theory Notes Generation Complete!`);
    console.log(`✅ Generated: ${theoryNotes.length} comprehensive theory notes`);
    console.log(`📊 Total words: ~${theoryNotes.reduce((sum, note) => sum + note.content.split(/\s+/).length, 0).toLocaleString()}`);
    console.log(`💰 Estimated cost: $${((theoryNotes.length * 3500) / 1000000 * 0.60).toFixed(3)}`);

    // Export in multiple formats
    await exportTheoryNotes(theoryNotes, 'typescript');
    await exportTheoryNotes(theoryNotes, 'json');
    await exportTheoryNotes(theoryNotes, 'markdown');

    console.log(`\n📈 Impact:`);
    console.log(`🎯 Created definitive theory resource for ${subject.toUpperCase()} ${level.toUpperCase()}`);
    console.log(`📚 Students now have complete theoretical coverage`);
    console.log(`🔗 Perfect complement to practice questions system`);
    console.log(`🌟 Ready to become the #1 educational resource!`);

  } catch (error) {
    console.error('❌ Theory notes generation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}