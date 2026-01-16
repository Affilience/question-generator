import { NextRequest } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { getTopicById, getTopicByIdSubjectBoardAndLevel } from '@/lib/topics';
import { getCachedQuestion, cacheQuestion, getCacheCount } from '@/lib/questionCache';
import { Difficulty, ExamBoard, QualificationLevel, Subject } from '@/types';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';

export const runtime = 'edge';

// Check for fine-tuned model for this subject/level/board combo
function getFineTunedModel(subject: Subject, level: QualificationLevel, board: ExamBoard): string | null {
  const envKey = `FINE_TUNED_MODEL_${subject.toUpperCase()}_${level.toUpperCase().replace('-', '')}_${board.toUpperCase()}`;
  return process.env[envKey] || null;
}

function getMarkRange(difficulty: Difficulty): { min: number; max: number } {
  switch (difficulty) {
    case 'easy': return { min: 1, max: 2 };
    case 'medium': return { min: 3, max: 4 };
    case 'hard': return { min: 5, max: 6 };
  }
}

function buildPrompt(
  subject: Subject,
  level: QualificationLevel,
  board: ExamBoard,
  topicName: string,
  subtopic: string,
  difficulty: Difficulty
): string {
  const markRange = getMarkRange(difficulty);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardUpper = board.toUpperCase();

  const difficultyDesc = difficulty === 'easy'
    ? 'Simple, 1-2 steps, grades 1-3'
    : difficulty === 'medium'
    ? 'Moderate, 2-3 steps, grades 4-5'
    : 'Challenging, multi-step, grades 6-9';

  return `Generate a ${boardUpper} ${levelDisplay} ${subject} exam question. Return ONLY valid JSON, no markdown.

Topic: ${topicName} - ${subtopic}
Difficulty: ${difficultyDesc}
Marks: ${markRange.min}-${markRange.max}

Requirements:
- Original question matching ${boardUpper} exam style
- Clear, unambiguous wording
- Worked solution with steps
- Mark scheme with M (method) and A (accuracy) marks

LaTeX/Math Formatting (CRITICAL):
- ALWAYS wrap ALL math expressions in $...$ delimiters
- Variables: $x$, $y$, $v$, $F$
- Subscripts: $F_{net}$, $F_{friction}$, $v_{initial}$, $x_1$, $x_2$
- Superscripts: $x^2$, $m^{-1}$, $s^{-2}$
- Fractions: $\\\\frac{1}{2}$, $\\\\frac{a}{b}$, $\\\\dfrac{dy}{dx}$
- Roots: $\\\\sqrt{3}$, $\\\\sqrt{x^2 + y^2}$
- Greek: $\\\\theta$, $\\\\alpha$, $\\\\lambda$, $\\\\mu$, $\\\\pi$, $\\\\omega$
- Symbols: $\\\\approx$, $\\\\times$, $\\\\div$, $\\\\pm$, $\\\\leq$, $\\\\geq$, $\\\\neq$
- Trig: $\\\\sin\\\\theta$, $\\\\cos 30°$, $\\\\tan^{-1}$
- Units with exponents: $\\\\text{m s}^{-1}$, $\\\\text{kg m}^{-2}$

Chemistry Notation (for science subjects):
- Chemical formulas: use subscripts like $\\\\text{H}_2\\\\text{O}$, $\\\\text{CO}_2$, $\\\\text{CaCO}_3$
- Ions: $\\\\text{Na}^+$, $\\\\text{OH}^-$, $\\\\text{SO}_4^{2-}$
- Reaction arrows: $\\\\rightarrow$ for reactions
- State symbols in text: (s), (l), (g), (aq)

Physics Notation:
- Vectors can use bold: $\\\\mathbf{F}$ or with arrows: $\\\\vec{v}$
- Dot product: $\\\\cdot$
- Standard form: $3.0 \\\\times 10^8$

Use DOUBLE backslashes for ALL LaTeX commands in JSON (e.g., $\\\\frac{1}{2}$)
Use \\n for line breaks in strings

Return exactly this JSON structure (no markdown code blocks):
{"content":"Question text here","marks":${Math.floor((markRange.min + markRange.max) / 2)},"solution":"Step by step solution","markScheme":["M1: Method mark","A1: Accuracy mark"]}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      topicId,
      difficulty,
      subtopic,
      skipCache,
      examBoard = 'aqa',
      qualification = 'gcse',
      subject = 'maths',
      excludeContent,
      stream = true,
    } = body as {
      topicId: string;
      difficulty: Difficulty;
      subtopic?: string;
      skipCache?: boolean;
      examBoard?: ExamBoard;
      qualification?: QualificationLevel;
      subject?: Subject;
      excludeContent?: string | string[];
      stream?: boolean;
    };

    if (!topicId || !difficulty) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const topic = getTopicByIdSubjectBoardAndLevel(topicId, subject, examBoard, qualification) || getTopicById(topicId);
    if (!topic) {
      return new Response(
        JSON.stringify({ error: 'Invalid topic ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const effectiveSubtopic = subtopic || topic.subtopics[0];
    const cacheKey = `${subject}:${qualification}:${topicId}`;

    // Try cache first (but stream it for consistent UX)
    // Only use cache if we have enough questions to avoid cycling
    const cacheCount = !skipCache ? await getCacheCount(cacheKey, effectiveSubtopic, difficulty) : 0;
    const shouldTryCache = !skipCache && cacheCount >= 3; // Need at least 3 questions to avoid obvious cycling

    if (shouldTryCache && stream) {
      const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, difficulty, excludeContent);
      if (cached) {
        // Stream cached question for consistent typing animation UX
        const encoder = new TextEncoder();
        const question = {
          id: crypto.randomUUID(),
          topicId,
          difficulty,
          content: cached.content,
          solution: cached.solution,
          marks: cached.marks,
          markScheme: cached.markScheme,
        };

        // Simulate streaming by sending content in chunks with realistic typing speed
        const readable = new ReadableStream({
          async start(controller) {
            const content = cached.content;
            const chunkSize = 2; // Smaller chunks for smoother typing
            const baseDelayMs = 35; // Base delay between chunks
            // Add some randomness to make it feel more natural
            const getDelay = () => baseDelayMs + Math.floor(Math.random() * 20);

            // Stream the content in chunks
            for (let i = 0; i < content.length; i += chunkSize) {
              const chunk = content.slice(i, i + chunkSize);
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
              await new Promise(resolve => setTimeout(resolve, getDelay()));
            }

            // Send the complete question
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, question })}\n\n`));
            controller.close();
          },
        });

        return new Response(readable, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'X-Cache': 'HIT',
          },
        });
      }
    } else if (shouldTryCache && !stream) {
      // Non-streaming cached response (for backwards compatibility)
      const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, difficulty, excludeContent);
      if (cached) {
        const question = {
          id: crypto.randomUUID(),
          topicId,
          difficulty,
          content: cached.content,
          solution: cached.solution,
          marks: cached.marks,
          markScheme: cached.markScheme,
        };
        return new Response(JSON.stringify(question), {
          headers: {
            'Content-Type': 'application/json',
            'X-Cache': 'HIT',
          },
        });
      }
    }

    // Generate question with OpenAI
    const basePrompt = buildPrompt(subject, qualification, examBoard, topic.name, effectiveSubtopic, difficulty);
    // Add global constraints (copyright, accuracy, safety) to the prompt
    const subjectConstraints = getAllConstraints(subject);
    const prompt = `${subjectConstraints}\n\n${basePrompt}`;
    // Use exam board-specific system prompt with enhanced constraints
    const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);

    // Use OpenAI with streaming for quality + fast perceived response
    const openai = getOpenAIClient();
    const fineTunedModel = getFineTunedModel(subject, qualification, examBoard);
    const modelToUse = fineTunedModel || 'gpt-4o-mini';

    if (stream) {
      // Stream OpenAI response for better UX
      const completion = await openai.chat.completions.create({
        model: modelToUse,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 800,
        response_format: { type: 'json_object' },
        stream: true,
      });

      const encoder = new TextEncoder();
      let fullJson = '';
      let extractedContent = '';
      let inContentField = false;
      let contentComplete = false;
      let pendingContent = '';
      let lastFlushTime = Date.now();
      const FLUSH_INTERVAL = 50; // Flush every 50ms for smooth typing
      const MIN_CHARS = 3; // Or when we have at least 3 chars

      // Helper to flush pending content
      const flushContent = (controller: ReadableStreamDefaultController) => {
        if (pendingContent.length > 0) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: pendingContent })}\n\n`));
          pendingContent = '';
          lastFlushTime = Date.now();
        }
      };

      // Helper to extract content from JSON being built
      const extractContentFromJson = (): string => {
        const contentStart = fullJson.indexOf('"content"');
        if (contentStart === -1) return '';

        const colonPos = fullJson.indexOf(':', contentStart);
        if (colonPos === -1) return '';

        const quotePos = fullJson.indexOf('"', colonPos + 1);
        if (quotePos === -1) return '';

        const afterQuote = fullJson.slice(quotePos + 1);
        let content = '';
        let i = 0;

        while (i < afterQuote.length) {
          if (afterQuote[i] === '\\' && i + 1 < afterQuote.length) {
            content += afterQuote[i] + afterQuote[i + 1];
            i += 2;
          } else if (afterQuote[i] === '"') {
            contentComplete = true;
            break;
          } else {
            content += afterQuote[i];
            i++;
          }
        }

        return content;
      };

      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of completion) {
              const chunkText = chunk.choices[0]?.delta?.content || '';
              if (chunkText) {
                fullJson += chunkText;

                // Extract content field incrementally for live typing
                if (!contentComplete) {
                  // Check if we've entered the content field
                  if (!inContentField && fullJson.includes('"content"')) {
                    inContentField = true;
                  }

                  if (inContentField) {
                    const content = extractContentFromJson();
                    if (content.length > extractedContent.length) {
                      const newContent = content.slice(extractedContent.length);
                      extractedContent = content;
                      pendingContent += newContent;

                      // Flush if enough time has passed or we have enough characters
                      const now = Date.now();
                      if (now - lastFlushTime >= FLUSH_INTERVAL || pendingContent.length >= MIN_CHARS) {
                        flushContent(controller);
                      }
                    }
                  }
                }
              }
            }

            // Flush any remaining content
            flushContent(controller);

            // Parse and send final question
            try {
              const parsed = JSON.parse(fullJson);
              const question = {
                id: crypto.randomUUID(),
                topicId,
                difficulty,
                content: parsed.content || '',
                solution: parsed.solution || '',
                marks: parsed.marks || 3,
                markScheme: parsed.markScheme || [],
              };

              // Cache it
              cacheQuestion(cacheKey, effectiveSubtopic, difficulty, {
                content: question.content,
                solution: question.solution,
                marks: question.marks,
                markScheme: question.markScheme,
              }).catch(console.error);

              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true, question })}\n\n`));
            } catch {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Failed to parse response' })}\n\n`));
            }
            controller.close();
          } catch (error) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Generation failed' })}\n\n`));
            controller.close();
          }
        },
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'X-Provider': fineTunedModel ? 'openai-finetuned' : 'openai',
        },
      });
    }

    // Non-streaming fallback
    const completion = await openai.chat.completions.create({
      model: modelToUse,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      temperature: 0.5,
      max_tokens: 800,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error('No response from OpenAI');

    const parsed = JSON.parse(content);
    const question = {
      id: crypto.randomUUID(),
      topicId,
      difficulty,
      content: parsed.content || '',
      solution: parsed.solution || '',
      marks: parsed.marks || 3,
      markScheme: parsed.markScheme || [],
    };

    // Cache it
    cacheQuestion(cacheKey, effectiveSubtopic, difficulty, {
      content: question.content,
      solution: question.solution,
      marks: question.marks,
      markScheme: question.markScheme,
    }).catch(console.error);

    return new Response(JSON.stringify(question), {
      headers: {
        'Content-Type': 'application/json',
        'X-Cache': 'MISS',
        'X-Provider': fineTunedModel ? 'openai-finetuned' : 'openai',
      },
    });
  } catch (error) {
    console.error('Error generating question:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate question' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
