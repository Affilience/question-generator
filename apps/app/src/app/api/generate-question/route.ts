import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { getOpenAIClient } from '@/lib/openai';
import { GenerateQuestionRequestSchema, validateRequest } from '@/lib/validations/api-schemas';
import { parseQuestionResponse, ValidationContext } from '@/lib/prompts-common';
import { getEnhancedSystemPrompt, ENHANCED_SYSTEM_PROMPTS } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';
import {
  getAQACompactPrompt,
  getAQAMultipleChoicePrompt,
  getAQAShowThatPrompt,
  getAQAGraphPrompt,
  getAQAExtendedPrompt,
  getAQAComparePrompt,
} from '@/lib/prompts-aqa';
import {
  getEdexcelCompactPrompt,
  getEdexcelMultipleChoicePrompt,
  getEdexcelShowThatPrompt,
  getEdexcelGraphPrompt,
  getEdexcelExtendedPrompt,
  getEdexcelComparePrompt,
} from '@/lib/prompts-edexcel';
import {
  getOCRCompactPrompt,
  getOCRMultipleChoicePrompt,
  getOCRShowThatPrompt,
  getOCRGraphPrompt,
  getOCRExtendedPrompt,
  getOCRComparePrompt,
} from '@/lib/prompts-ocr';
import {
  getAQAALevelCompactPrompt,
  getAQAALevelMultipleChoicePrompt,
  getAQAALevelProofPrompt,
  getAQAALevelGraphPrompt,
  getAQAALevelExtendedPrompt,
} from '@/lib/prompts-aqa-alevel';
import { getEdexcelALevelCompactPrompt } from '@/lib/prompts-edexcel-alevel';
import { getOCRALevelCompactPrompt } from '@/lib/prompts-ocr-alevel';
import {
  getAQAPhysicsCompactPrompt,
  getAQAPhysicsExtendedPrompt,
  getAQAPhysicsMultipleChoicePrompt,
  getAQAPhysicsGraphPrompt,
  getAQAPhysicsCalculationPrompt,
  getAQAPhysicsExplainPrompt,
  getAQAPhysicsComparePrompt,
} from '@/lib/prompts-physics-aqa';
import {
  getEdexcelPhysicsCompactPrompt,
  getEdexcelPhysicsExtendedPrompt,
  getEdexcelPhysicsMultipleChoicePrompt,
  getEdexcelPhysicsGraphPrompt,
  getEdexcelPhysicsCalculationPrompt,
  getEdexcelPhysicsExplainPrompt,
  getEdexcelPhysicsComparePrompt,
} from '@/lib/prompts-physics-edexcel';
import {
  getOCRPhysicsCompactPrompt,
  getOCRPhysicsExtendedPrompt,
  getOCRPhysicsMultipleChoicePrompt,
  getOCRPhysicsGraphPrompt,
  getOCRPhysicsCalculationPrompt,
  getOCRPhysicsExplainPrompt,
  getOCRPhysicsComparePrompt,
} from '@/lib/prompts-physics-ocr';
import {
  getAQAALevelPhysicsCompactPrompt,
  getAQAALevelPhysicsExtendedPrompt,
  getAQAALevelPhysicsMultipleChoicePrompt,
  getAQAALevelPhysicsGraphPrompt,
  getAQAALevelPhysicsCalculationPrompt,
  getAQAALevelPhysicsExplainPrompt,
  getAQAALevelPhysicsComparePrompt,
} from '@/lib/prompts-physics-alevel-aqa';
import {
  getEdexcelALevelPhysicsCompactPrompt,
  getEdexcelALevelPhysicsExtendedPrompt,
  getEdexcelALevelPhysicsMultipleChoicePrompt,
  getEdexcelALevelPhysicsGraphPrompt,
  getEdexcelALevelPhysicsCalculationPrompt,
  getEdexcelALevelPhysicsExplainPrompt,
  getEdexcelALevelPhysicsComparePrompt,
} from '@/lib/prompts-physics-alevel-edexcel';
import {
  getOCRALevelPhysicsCompactPrompt,
  getOCRALevelPhysicsExtendedPrompt,
  getOCRALevelPhysicsMultipleChoicePrompt,
  getOCRALevelPhysicsGraphPrompt,
  getOCRALevelPhysicsCalculationPrompt,
  getOCRALevelPhysicsExplainPrompt,
  getOCRALevelPhysicsComparePrompt,
} from '@/lib/prompts-physics-alevel-ocr';
import {
  getAQAChemistryCompactPrompt,
  getAQAChemistryExtendedPrompt,
  getAQAChemistryMultipleChoicePrompt,
  getAQAChemistryGraphPrompt,
  getAQAChemistryCalculationPrompt,
  getAQAChemistryExplainPrompt,
  getAQAChemistryComparePrompt,
} from '@/lib/prompts-chemistry-gcse-aqa';
import {
  getEdexcelChemistryCompactPrompt,
  getEdexcelChemistryExtendedPrompt,
  getEdexcelChemistryMultipleChoicePrompt,
  getEdexcelChemistryGraphPrompt,
  getEdexcelChemistryCalculationPrompt,
  getEdexcelChemistryExplainPrompt,
  getEdexcelChemistryComparePrompt,
} from '@/lib/prompts-chemistry-gcse-edexcel';
import {
  getOCRChemistryCompactPrompt,
  getOCRChemistryExtendedPrompt,
  getOCRChemistryMultipleChoicePrompt,
  getOCRChemistryGraphPrompt,
  getOCRChemistryCalculationPrompt,
  getOCRChemistryExplainPrompt,
  getOCRChemistryComparePrompt,
} from '@/lib/prompts-chemistry-gcse-ocr';
import {
  getAQAALevelChemistryCompactPrompt,
  getAQAALevelChemistryExtendedPrompt,
  getAQAALevelChemistryCalculationPrompt,
  getAQAALevelChemistryExplainPrompt,
  getAQAALevelChemistryGraphPrompt,
  getAQAALevelChemistryComparePrompt,
  getAQAALevelChemistryMechanismPrompt,
  getAQAALevelChemistryPracticalPrompt,
} from '@/lib/prompts-chemistry-alevel-aqa';
import {
  getEdexcelALevelChemistryCompactPrompt,
  getEdexcelALevelChemistryExtendedPrompt,
  getEdexcelALevelChemistryCalculationPrompt,
  getEdexcelALevelChemistryExplainPrompt,
  getEdexcelALevelChemistryGraphPrompt,
  getEdexcelALevelChemistryComparePrompt,
  getEdexcelALevelChemistryMechanismPrompt,
  getEdexcelALevelChemistryPracticalPrompt,
} from '@/lib/prompts-chemistry-alevel-edexcel';
import {
  getOCRALevelChemistryCompactPrompt,
  getOCRALevelChemistryExtendedPrompt,
  getOCRALevelChemistryCalculationPrompt,
  getOCRALevelChemistryExplainPrompt,
  getOCRALevelChemistryGraphPrompt,
  getOCRALevelChemistryComparePrompt,
  getOCRALevelChemistryMechanismPrompt,
  getOCRALevelChemistryPracticalPrompt,
} from '@/lib/prompts-chemistry-alevel-ocr';
// GCSE Biology prompts
import {
  getAQABiologyCompactPrompt,
  getAQABiologyExtendedPrompt,
  getAQABiologyMultipleChoicePrompt,
  getAQABiologyCalculationPrompt,
  getAQABiologyExplainPrompt,
  getAQABiologyGraphPrompt,
  getAQABiologyComparePrompt,
} from '@/lib/prompts-biology-gcse-aqa';
import {
  getEdexcelBiologyCompactPrompt,
  getEdexcelBiologyExtendedPrompt,
  getEdexcelBiologyMultipleChoicePrompt,
  getEdexcelBiologyCalculationPrompt,
  getEdexcelBiologyExplainPrompt,
  getEdexcelBiologyGraphPrompt,
  getEdexcelBiologyComparePrompt,
} from '@/lib/prompts-biology-gcse-edexcel';
import {
  getOCRBiologyCompactPrompt,
  getOCRBiologyExtendedPrompt,
  getOCRBiologyMultipleChoicePrompt,
  getOCRBiologyCalculationPrompt,
  getOCRBiologyExplainPrompt,
  getOCRBiologyGraphPrompt,
  getOCRBiologyComparePrompt,
} from '@/lib/prompts-biology-gcse-ocr';
// A-Level Biology prompts
import {
  getAQAALevelBiologyCompactPrompt,
  getAQAALevelBiologyExtendedPrompt,
  getAQAALevelBiologyCalculationPrompt,
  getAQAALevelBiologyExplainPrompt,
  getAQAALevelBiologyGraphPrompt,
  getAQAALevelBiologyComparePrompt,
} from '@/lib/prompts-biology-alevel-aqa';
import {
  getEdexcelALevelBiologyCompactPrompt,
  getEdexcelALevelBiologyExtendedPrompt,
  getEdexcelALevelBiologyCalculationPrompt,
  getEdexcelALevelBiologyExplainPrompt,
  getEdexcelALevelBiologyGraphPrompt,
  getEdexcelALevelBiologyComparePrompt,
} from '@/lib/prompts-biology-alevel-edexcel';
import {
  getOCRALevelBiologyCompactPrompt,
  getOCRALevelBiologyExtendedPrompt,
  getOCRALevelBiologyCalculationPrompt,
  getOCRALevelBiologyExplainPrompt,
  getOCRALevelBiologyGraphPrompt,
  getOCRALevelBiologyComparePrompt,
} from '@/lib/prompts-biology-alevel-ocr';
// GCSE Computer Science prompts
import {
  getAQAGCSEComputerScienceSystemPrompt,
  getAQAGCSEComputerScienceQuestionPrompt,
} from '@/lib/prompts-computerscience-gcse-aqa';
import {
  getOCRGCSEComputerScienceSystemPrompt,
  getOCRGCSEComputerScienceQuestionPrompt,
} from '@/lib/prompts-computerscience-gcse-ocr';
import {
  getEdexcelGCSEComputerScienceSystemPrompt,
  getEdexcelGCSEComputerScienceQuestionPrompt,
} from '@/lib/prompts-computerscience-gcse-edexcel';
// A-Level Computer Science prompts (AQA and OCR only - Edexcel doesn't offer UK A-Level)
import {
  getAQAALevelComputerScienceSystemPrompt,
  getAQAALevelComputerScienceQuestionPrompt,
} from '@/lib/prompts-computerscience-alevel-aqa';
import {
  getOCRALevelComputerScienceSystemPrompt,
  getOCRALevelComputerScienceQuestionPrompt,
} from '@/lib/prompts-computerscience-alevel-ocr';
// GCSE Economics prompts (AQA and OCR only - Edexcel doesn't offer GCSE Economics)
import {
  getAQAEconomicsSystemPrompt,
  getAQAEconomicsQuestionPrompt,
} from '@/lib/prompts-economics-gcse-aqa';
import {
  getOCREconomicsSystemPrompt,
  getOCREconomicsQuestionPrompt,
} from '@/lib/prompts-economics-gcse-ocr';
// A-Level Economics prompts (all three boards)
import {
  getAQAALevelEconomicsSystemPrompt,
  getAQAALevelEconomicsQuestionPrompt,
} from '@/lib/prompts-economics-alevel-aqa';
import {
  getEdexcelALevelEconomicsSystemPrompt,
  getEdexcelALevelEconomicsQuestionPrompt,
} from '@/lib/prompts-economics-alevel-edexcel';
import {
  getOCRALevelEconomicsSystemPrompt,
  getOCRALevelEconomicsQuestionPrompt,
} from '@/lib/prompts-economics-alevel-ocr';
// GCSE Business prompts (all three boards)
import {
  getAQAGCSEBusinessSystemPrompt,
  getAQAGCSEBusinessQuestionPrompt,
} from '@/lib/prompts-business-gcse-aqa';
import {
  getEdexcelGCSEBusinessSystemPrompt,
  getEdexcelGCSEBusinessQuestionPrompt,
} from '@/lib/prompts-business-gcse-edexcel';
import {
  getOCRGCSEBusinessSystemPrompt,
  getOCRGCSEBusinessQuestionPrompt,
} from '@/lib/prompts-business-gcse-ocr';
// A-Level Business prompts (all three boards)
import {
  getAQAALevelBusinessSystemPrompt,
  getAQAALevelBusinessQuestionPrompt,
} from '@/lib/prompts-business-alevel-aqa';
import {
  getEdexcelALevelBusinessSystemPrompt,
  getEdexcelALevelBusinessQuestionPrompt,
} from '@/lib/prompts-business-alevel-edexcel';
import {
  getOCRALevelBusinessSystemPrompt,
  getOCRALevelBusinessQuestionPrompt,
} from '@/lib/prompts-business-alevel-ocr';
// GCSE Psychology prompts (all three boards)
import {
  getAQAGCSEPsychologySystemPrompt,
  getAQAGCSEPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-gcse-aqa';
import {
  getEdexcelGCSEPsychologySystemPrompt,
  getEdexcelGCSEPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-gcse-edexcel';
import {
  getOCRGCSEPsychologySystemPrompt,
  getOCRGCSEPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-gcse-ocr';
// A-Level Psychology prompts (all three boards)
import {
  getAQAALevelPsychologySystemPrompt,
  getAQAALevelPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-alevel-aqa';
import {
  getEdexcelALevelPsychologySystemPrompt,
  getEdexcelALevelPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-alevel-edexcel';
import {
  getOCRALevelPsychologySystemPrompt,
  getOCRALevelPsychologyQuestionPrompt,
} from '@/lib/prompts-psychology-alevel-ocr';
// GCSE Geography prompts (all three boards)
import {
  getAQAGCSEGeographySystemPrompt,
  getAQAGCSEGeographyQuestionPrompt,
} from '@/lib/prompts-geography-gcse-aqa';
import {
  getEdexcelGCSEGeographySystemPrompt,
  getEdexcelGCSEGeographyQuestionPrompt,
} from '@/lib/prompts-geography-gcse-edexcel';
import {
  getOCRGCSEGeographySystemPrompt,
  getOCRGCSEGeographyQuestionPrompt,
} from '@/lib/prompts-geography-gcse-ocr';
// A-Level Geography prompts (all three boards)
import {
  getAQAALevelGeographySystemPrompt,
  getAQAALevelGeographyQuestionPrompt,
} from '@/lib/prompts-geography-alevel-aqa';
import {
  getEdexcelALevelGeographySystemPrompt,
  getEdexcelALevelGeographyQuestionPrompt,
} from '@/lib/prompts-geography-alevel-edexcel';
import {
  getOCRALevelGeographySystemPrompt,
  getOCRALevelGeographyQuestionPrompt,
} from '@/lib/prompts-geography-alevel-ocr';
// GCSE History prompts (all three boards)
import {
  getAQAGCSEHistorySystemPrompt,
  getAQAGCSEHistoryQuestionPrompt,
} from '@/lib/prompts-history-gcse-aqa';
import {
  getEdexcelGCSEHistorySystemPrompt,
  getEdexcelGCSEHistoryQuestionPrompt,
} from '@/lib/prompts-history-gcse-edexcel';
import {
  getOCRGCSEHistorySystemPrompt,
  getOCRGCSEHistoryQuestionPrompt,
} from '@/lib/prompts-history-gcse-ocr';
// A-Level History prompts (all three boards)
import {
  getAQAALevelHistorySystemPrompt,
  getAQAALevelHistoryQuestionPrompt,
} from '@/lib/prompts-history-alevel-aqa';
import {
  getEdexcelALevelHistorySystemPrompt,
  getEdexcelALevelHistoryQuestionPrompt,
} from '@/lib/prompts-history-alevel-edexcel';
import {
  getOCRALevelHistorySystemPrompt,
  getOCRALevelHistoryQuestionPrompt,
} from '@/lib/prompts-history-alevel-ocr';
// GCSE English Literature prompts (all three boards)
import {
  getAQAGCSEEnglishLiteratureSystemPrompt,
  getAQAGCSEEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-gcse-aqa';
import {
  getEdexcelGCSEEnglishLiteratureSystemPrompt,
  getEdexcelGCSEEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-gcse-edexcel';
import {
  getOCRGCSEEnglishLiteratureSystemPrompt,
  getOCRGCSEEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-gcse-ocr';
// A-Level English Literature prompts (all three boards)
import {
  getAQAALevelEnglishLiteratureSystemPrompt,
  getAQAALevelEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-alevel-aqa';
import {
  getEdexcelALevelEnglishLiteratureSystemPrompt,
  getEdexcelALevelEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-alevel-edexcel';
import {
  getOCRALevelEnglishLiteratureSystemPrompt,
  getOCRALevelEnglishLiteratureQuestionPrompt,
} from '@/lib/prompts-english-literature-alevel-ocr';
// GCSE Further Maths prompts (AQA Level 2 Certificate and OCR FSMQ only - Edexcel doesn't offer GCSE-level)
import {
  getAQAGCSEFurtherMathsSystemPrompt,
  getAQAGCSEFurtherMathsQuestionPrompt,
} from '@/lib/prompts-further-maths-gcse-aqa';
import {
  getOCRGCSEFurtherMathsSystemPrompt,
  getOCRGCSEFurtherMathsQuestionPrompt,
} from '@/lib/prompts-further-maths-gcse-ocr';
// A-Level Further Maths prompts (all three boards)
import {
  getAQAALevelFurtherMathsSystemPrompt,
  getAQAALevelFurtherMathsQuestionPrompt,
} from '@/lib/prompts-further-maths-alevel-aqa';
import {
  getEdexcelALevelFurtherMathsSystemPrompt,
  getEdexcelALevelFurtherMathsQuestionPrompt,
} from '@/lib/prompts-further-maths-alevel-edexcel';
import {
  getOCRALevelFurtherMathsSystemPrompt,
  getOCRALevelFurtherMathsQuestionPrompt,
} from '@/lib/prompts-further-maths-alevel-ocr';
import { getTopicById, getTopicByIdSubjectBoardAndLevel } from '@/lib/topics';
import { getPracticalById } from '@/lib/practicals';
import { getAQAPhysicsRequiredPracticalPrompt } from '@/lib/prompts-physics-aqa';
import { getAQAChemistryRequiredPracticalPrompt } from '@/lib/prompts-chemistry-gcse-aqa';
import { getCachedQuestion, cacheQuestion } from '@/lib/questionCache';
import { findExistingQuestion, storeQuestion, recordQuestionServed, QuestionCriteria } from '@/lib/question-bank';
import { checkQuestionGenerationAllowed, incrementQuestionUsage } from '@/lib/api/subscription-check';
import { getClientIP } from '@/lib/rate-limit';
import { Difficulty, Question, ExamBoard, QualificationLevel, Subject, PracticalSubtopic } from '@/types';
import { DiagramSpec } from '@/types/diagram';

// Using Node.js runtime (default) - Edge runtime has 1MB limit which is exceeded by prompt imports

// Question types for all subjects
type QuestionType = 'auto' | 'multiple-choice' | 'calculation' | 'explain' | 'compare' | 'extended' | 'graph' | 'proof' | 'show-that';

// Weighted random selection for realistic exam paper mix
// Returns a question type based on typical exam paper distributions
function getRandomQuestionType(subject: Subject): QuestionType {
  const random = Math.random() * 100;

  if (subject === 'physics' || subject === 'chemistry' || subject === 'biology') {
    // Science exam papers typically have:
    // ~35% calculation questions (less for biology, but still present)
    // ~30% explain/describe questions
    // ~15% graph/data/table analysis questions
    // ~10% compare questions
    // ~10% extended response (6-mark)
    if (random < 35) return 'calculation';
    if (random < 65) return 'explain';
    if (random < 80) return 'graph';
    if (random < 90) return 'compare';
    return 'extended';
  } else {
    // Maths exam papers typically have:
    // ~50% standard calculation/problem-solving
    // ~20% show-that/proof questions
    // ~15% graph/interpretation questions
    // ~10% multi-step problems
    // ~5% compare/evaluate
    if (random < 50) return 'calculation';
    if (random < 70) return 'show-that';
    if (random < 85) return 'graph';
    if (random < 95) return 'extended';
    return 'compare';
  }
}

// System prompts now use enhanced versions from prompts/system-prompts.ts
// which include exam board-specific conventions, copyright prevention, and accuracy constraints
const SYSTEM_PROMPTS = ENHANCED_SYSTEM_PROMPTS;

// Legacy prompts for backwards compatibility
const LEGACY_SYSTEM_PROMPTS: Record<QualificationLevel, string> = {
  'gcse': ENHANCED_SYSTEM_PROMPTS['maths-gcse'],
  'a-level': ENHANCED_SYSTEM_PROMPTS['maths-a-level'],
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validation = validateRequest(GenerateQuestionRequestSchema, body);
    if (!validation.success) {
      // Log validation errors for debugging
      console.error('Question generation validation failed:', {
        body,
        error: validation.error,
        details: validation.details
      });
      
      return NextResponse.json(
        { 
          error: 'Invalid request', 
          message: validation.error,
          details: validation.details,
          receivedData: body 
        },
        { status: 400 }
      );
    }

    const {
      topicId,
      practicalId,
      isPractical = false,
      difficulty,
      subtopic,
      skipCache,
      examBoard = 'aqa',
      qualification = 'gcse',
      subject = 'maths',
      questionType = 'auto',
      excludeContent
    } = validation.data as {
      topicId?: string;
      practicalId?: string;
      isPractical?: boolean;
      difficulty: Difficulty;
      subtopic?: string;
      skipCache?: boolean;
      examBoard?: ExamBoard;
      qualification?: QualificationLevel;
      subject?: Subject;
      questionType?: QuestionType;
      excludeContent?: string | string[];
    };

    // Extract userId from request headers if available (for logged-in users)
    const userId = request.headers.get('x-user-id') || null;

    // Check for admin authorization (for scripts and internal tools)
    const adminKey = request.headers.get('x-admin-key');
    const isAdmin = adminKey === process.env.INTERNAL_API_KEY && !!process.env.INTERNAL_API_KEY;

    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check if user can generate a question based on their subscription tier
    const usageCheck = await checkQuestionGenerationAllowed(userId, clientIP, isAdmin);
    if (!usageCheck.allowed) {
      return NextResponse.json(
        {
          error: usageCheck.error,
          tier: usageCheck.tier,
          remaining: usageCheck.remaining,
          upgrade: true,
        },
        { status: 429 }
      );
    }

    // Handle practical questions
    if (isPractical && practicalId) {
      const practical = getPracticalById(practicalId);
      if (!practical) {
        return NextResponse.json(
          { error: 'Invalid practical ID' },
          { status: 400 }
        );
      }

      const effectiveSubtopic = (subtopic || practical.subtopics[0]) as PracticalSubtopic;
      const cacheKey = `practical:${practical.subject}:${qualification}:${practicalId}`;

      // Try to get from cache first (unless skipCache is true)
      if (!skipCache) {
        const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, difficulty, excludeContent);

        if (cached) {
          const question: Question = {
            id: crypto.randomUUID(),
            topicId: practicalId,
            difficulty,
            content: cached.content,
            solution: cached.solution,
            marks: cached.marks,
            markScheme: cached.markScheme,
            diagram: cached.diagram,
          };

          return NextResponse.json(question, {
            headers: { 'X-Cache': 'HIT' },
          });
        }
      }

      // Generate practical question using appropriate prompt
      let prompt: string;
      if (practical.subject === 'physics') {
        prompt = getAQAPhysicsRequiredPracticalPrompt(practical, effectiveSubtopic, difficulty);
      } else if (practical.subject === 'chemistry') {
        prompt = getAQAChemistryRequiredPracticalPrompt(practical, effectiveSubtopic, difficulty);
      } else {
        return NextResponse.json(
          { error: 'Practicals not supported for this subject' },
          { status: 400 }
        );
      }

      const openai = getOpenAIClient();
      // Use exam board-specific system prompt with enhanced constraints
      const systemPrompt = getEnhancedSystemPrompt(
        practical.subject as Subject,
        examBoard,
        qualification
      );
      // Get subject-specific accuracy constraints
      const subjectConstraints = getAllConstraints(practical.subject);

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `${subjectConstraints}\n\n${prompt}` },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.5,
        max_tokens: 3000, // Practicals need detailed method descriptions and mark schemes
      });

      const responseContent = completion.choices[0]?.message?.content;
      if (!responseContent) {
        throw new Error('No response from OpenAI');
      }

      // Validation context for practicals
      const practicalValidationContext: ValidationContext = {
        subject: practical.subject as Subject,
        examBoard,
        qualification,
        difficulty,
      };
      const questionData = parseQuestionResponse(responseContent, practicalValidationContext);

      // Cache the generated question (async, don't wait)
      cacheQuestion(cacheKey, effectiveSubtopic, difficulty, {
        content: questionData.content,
        solution: questionData.solution,
        marks: questionData.marks,
        markScheme: questionData.markScheme,
        diagram: questionData.diagram,
      }).catch(err => console.error('Failed to cache question:', err));

      const question: Question = {
        id: crypto.randomUUID(),
        topicId: practicalId,
        difficulty,
        ...questionData,
      };

      return NextResponse.json(question, {
        headers: { 'X-Cache': 'MISS' },
      });
    }

    // Standard topic question handling
    if (!topicId || !difficulty) {
      return NextResponse.json(
        { error: 'Missing required fields: topicId and difficulty' },
        { status: 400 }
      );
    }

    // Look up topic using subject/level-aware function if possible, fallback to generic
    const topic = getTopicByIdSubjectBoardAndLevel(topicId, subject, examBoard, qualification) || getTopicById(topicId);
    if (!topic) {
      return NextResponse.json(
        { error: 'Invalid topic ID' },
        { status: 400 }
      );
    }

    const effectiveSubtopic = subtopic || topic.subtopics[0];

    // Try to find existing question in bank first
    const questionCriteria: QuestionCriteria = {
      subject,
      examBoard,
      qualification,
      topicId,
      subtopic: effectiveSubtopic,
      difficulty,
      questionType: questionType === 'auto' ? undefined : questionType,
    };

    const existingQuestion = await findExistingQuestion(questionCriteria, userId);
    
    if (existingQuestion) {
      // Record that this question was served
      await recordQuestionServed(existingQuestion.id, userId, 'practice');
      
      const question: Question = {
        id: crypto.randomUUID(),
        topicId,
        difficulty,
        content: existingQuestion.content,
        solution: existingQuestion.solution,
        marks: existingQuestion.marks,
        markScheme: existingQuestion.mark_scheme,
        diagram: existingQuestion.diagram ? (existingQuestion.diagram as unknown as DiagramSpec) : undefined,
      };

      return NextResponse.json(question, {
        headers: { 'X-Cache': 'BANK-HIT' },
      });
    }

    // Include subject and qualification in cache key for separation
    const cacheKey = `${subject}:${qualification}:${topicId}`;

    // Try to get from cache first (unless skipCache is true)
    if (!skipCache) {
      const cached = await getCachedQuestion(cacheKey, effectiveSubtopic, difficulty, excludeContent);

      if (cached) {
        const question: Question = {
          id: crypto.randomUUID(),
          topicId,
          difficulty,
          content: cached.content,
          solution: cached.solution,
          marks: cached.marks,
          markScheme: cached.markScheme,
          diagram: cached.diagram,
        };

        // Add header to indicate cache hit
        return NextResponse.json(question, {
          headers: { 'X-Cache': 'HIT' },
        });
      }
    }

    // Cache miss or skipCache - generate new question with compact prompt for speed
    // Use appropriate prompt based on subject, qualification level, exam board, and question type
    const getPromptForSubjectBoardAndLevel = () => {
      // Handle Physics with question type support
      if (subject === 'physics') {
        // Determine effective question type - use random for 'auto'
        const effectiveType = questionType === 'auto' ? getRandomQuestionType('physics') : questionType;

        // Select prompt based on exam board and question type
        const getAQAPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getAQAPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getAQAPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQAPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQAPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQAPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getAQAPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getAQAPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getEdexcelPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getEdexcelPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getEdexcelPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getEdexcelPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getOCRPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getOCRPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getOCRPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getOCRPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getAQAALevelPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getAQAALevelPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getAQAALevelPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQAALevelPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQAALevelPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQAALevelPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getAQAALevelPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getAQAALevelPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelALevelPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getEdexcelALevelPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getEdexcelALevelPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelALevelPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelALevelPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelALevelPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getEdexcelALevelPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getEdexcelALevelPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRALevelPhysicsPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getOCRALevelPhysicsMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getOCRALevelPhysicsCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRALevelPhysicsExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRALevelPhysicsComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRALevelPhysicsExtendedPrompt(topic, subtopic);
            case 'graph':
              return getOCRALevelPhysicsGraphPrompt(topic, difficulty, subtopic);
            default:
              return getOCRALevelPhysicsCompactPrompt(topic, difficulty, subtopic);
          }
        };

        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAPhysicsPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelPhysicsPromptByType(effectiveType);
            case 'ocr':
              return getOCRPhysicsPromptByType(effectiveType);
            default:
              return getAQAPhysicsPromptByType(effectiveType);
          }
        }

        // A-Level Physics
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelPhysicsPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelALevelPhysicsPromptByType(effectiveType);
            case 'ocr':
              return getOCRALevelPhysicsPromptByType(effectiveType);
            default:
              return getAQAALevelPhysicsPromptByType(effectiveType);
          }
        }
        return getAQAPhysicsPromptByType(effectiveType);
      }

      // Handle Chemistry with question type support
      if (subject === 'chemistry') {
        // Determine effective question type - use random for 'auto'
        const effectiveType = questionType === 'auto' ? getRandomQuestionType('chemistry') : questionType;

        const getAQAChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getAQAChemistryMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getAQAChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQAChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQAChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQAChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getAQAChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getAQAChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getEdexcelChemistryMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getEdexcelChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getEdexcelChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getEdexcelChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getOCRChemistryMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getOCRChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getOCRChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getOCRChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        // A-Level Chemistry prompt functions
        const getAQAALevelChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getAQAALevelChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQAALevelChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQAALevelChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQAALevelChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getAQAALevelChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getAQAALevelChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelALevelChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getEdexcelALevelChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelALevelChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelALevelChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelALevelChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getEdexcelALevelChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getEdexcelALevelChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRALevelChemistryPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getOCRALevelChemistryCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRALevelChemistryExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRALevelChemistryComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRALevelChemistryExtendedPrompt(topic, subtopic);
            case 'graph':
              return getOCRALevelChemistryGraphPrompt(topic, difficulty, subtopic);
            default:
              return getOCRALevelChemistryCompactPrompt(topic, difficulty, subtopic);
          }
        };

        // GCSE Chemistry
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAChemistryPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelChemistryPromptByType(effectiveType);
            case 'ocr':
              return getOCRChemistryPromptByType(effectiveType);
            default:
              return getAQAChemistryPromptByType(effectiveType);
          }
        }

        // A-Level Chemistry
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelChemistryPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelALevelChemistryPromptByType(effectiveType);
            case 'ocr':
              return getOCRALevelChemistryPromptByType(effectiveType);
            default:
              return getAQAALevelChemistryPromptByType(effectiveType);
          }
        }
        return getAQAChemistryPromptByType(effectiveType);
      }

      // Handle Biology with question type support
      if (subject === 'biology') {
        // Determine effective question type - use random for 'auto'
        const effectiveType = questionType === 'auto' ? getRandomQuestionType('biology') : questionType;

        const getAQABiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getAQABiologyMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getAQABiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQABiologyExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQABiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQABiologyExtendedPrompt(topic, subtopic);
            case 'graph':
              return getAQABiologyGraphPrompt(topic, difficulty, subtopic);
            default:
              return getAQABiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelBiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getEdexcelBiologyMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getEdexcelBiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelBiologyExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelBiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelBiologyExtendedPrompt(topic, subtopic);
            case 'graph':
              return getEdexcelBiologyGraphPrompt(topic, difficulty, subtopic);
            default:
              return getEdexcelBiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRBiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'multiple-choice':
              return getOCRBiologyMultipleChoicePrompt(topic, difficulty, subtopic);
            case 'calculation':
              return getOCRBiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRBiologyExplainPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRBiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRBiologyExtendedPrompt(topic, subtopic);
            case 'graph':
              return getOCRBiologyGraphPrompt(topic, difficulty, subtopic);
            default:
              return getOCRBiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        // A-Level Biology prompt functions
        const getAQAALevelBiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getAQAALevelBiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getAQAALevelBiologyExplainPrompt(topic, difficulty, subtopic);
            case 'graph':
              return getAQAALevelBiologyGraphPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getAQAALevelBiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getAQAALevelBiologyExtendedPrompt(topic, subtopic);
            default:
              return getAQAALevelBiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getEdexcelALevelBiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getEdexcelALevelBiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getEdexcelALevelBiologyExplainPrompt(topic, difficulty, subtopic);
            case 'graph':
              return getEdexcelALevelBiologyGraphPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getEdexcelALevelBiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getEdexcelALevelBiologyExtendedPrompt(topic, subtopic);
            default:
              return getEdexcelALevelBiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        const getOCRALevelBiologyPromptByType = (type: QuestionType) => {
          switch (type) {
            case 'calculation':
              return getOCRALevelBiologyCalculationPrompt(topic, difficulty, subtopic);
            case 'explain':
              return getOCRALevelBiologyExplainPrompt(topic, difficulty, subtopic);
            case 'graph':
              return getOCRALevelBiologyGraphPrompt(topic, difficulty, subtopic);
            case 'compare':
              return getOCRALevelBiologyComparePrompt(topic, difficulty, subtopic);
            case 'extended':
              return getOCRALevelBiologyExtendedPrompt(topic, subtopic);
            default:
              return getOCRALevelBiologyCompactPrompt(topic, difficulty, subtopic);
          }
        };

        // GCSE Biology
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQABiologyPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelBiologyPromptByType(effectiveType);
            case 'ocr':
              return getOCRBiologyPromptByType(effectiveType);
            default:
              return getAQABiologyPromptByType(effectiveType);
          }
        }

        // A-Level Biology
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelBiologyPromptByType(effectiveType);
            case 'edexcel':
              return getEdexcelALevelBiologyPromptByType(effectiveType);
            case 'ocr':
              return getOCRALevelBiologyPromptByType(effectiveType);
            default:
              return getAQAALevelBiologyPromptByType(effectiveType);
          }
        }
        return getAQABiologyPromptByType(effectiveType);
      }

      // Handle Computer Science
      // Computer Science uses unified system+question prompt pattern
      if (subject === 'computer-science') {
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Computer Science (Edexcel doesn't offer UK A-Level)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              // Edexcel doesn't offer UK A-Level Computer Science - fallback to AQA
              return getAQAALevelComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEComputerScienceQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Economics
      // Economics uses unified system+question prompt pattern like Computer Science
      if (subject === 'economics') {
        // GCSE Economics (Note: Edexcel doesn't offer GCSE Economics)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCREconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              // Edexcel doesn't offer GCSE Economics - fallback to AQA
              return getAQAEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Economics (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAEconomicsQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Business
      // Business uses unified system+question prompt pattern like Economics
      if (subject === 'business') {
        // GCSE Business (all three boards offer it)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Business (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEBusinessQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Psychology
      // Psychology uses unified system+question prompt pattern like Business
      if (subject === 'psychology') {
        // GCSE Psychology (all three boards offer it)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Psychology (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEPsychologyQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Geography
      // Geography uses unified system+question prompt pattern like Psychology
      if (subject === 'geography') {
        // GCSE Geography (all three boards offer it)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Geography (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEGeographyQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle History
      // History uses unified system+question prompt pattern like Geography
      if (subject === 'history') {
        // GCSE History (all three boards offer it)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level History (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEHistoryQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle English Literature
      // English Literature uses unified system+question prompt pattern like History
      if (subject === 'english-literature') {
        // GCSE English Literature (all three boards offer it)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelGCSEEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level English Literature (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEEnglishLiteratureQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Further Maths
      // Further Maths uses unified system+question prompt pattern
      if (subject === 'further-maths') {
        // GCSE Further Maths (AQA Level 2 Certificate and OCR FSMQ - Edexcel doesn't offer GCSE-level)
        if (qualification === 'gcse') {
          switch (examBoard) {
            case 'aqa':
              return getAQAGCSEFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRGCSEFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              // Edexcel doesn't offer GCSE-level Further Maths - fallback to AQA
              return getAQAGCSEFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAGCSEFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        // A-Level Further Maths (all three boards offer it)
        if (qualification === 'a-level') {
          switch (examBoard) {
            case 'aqa':
              return getAQAALevelFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'edexcel':
              return getEdexcelALevelFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            case 'ocr':
              return getOCRALevelFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
            default:
              return getAQAALevelFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
          }
        }
        return getAQAGCSEFurtherMathsQuestionPrompt(topic, difficulty, effectiveSubtopic);
      }

      // Handle Maths with question type support
      // Determine effective question type - use random for 'auto'
      const effectiveType = questionType === 'auto' ? getRandomQuestionType('maths') : questionType;

      const getAQAMathsPromptByType = (type: QuestionType) => {
        switch (type) {
          case 'multiple-choice':
            return getAQAMultipleChoicePrompt(topic, difficulty, subtopic);
          case 'show-that':
          case 'proof':
            return getAQAShowThatPrompt(topic, difficulty, subtopic);
          case 'graph':
            return getAQAGraphPrompt(topic, difficulty, subtopic);
          case 'compare':
            return getAQAComparePrompt(topic, difficulty, subtopic);
          case 'extended':
            return getAQAExtendedPrompt(topic, subtopic);
          default:
            return getAQACompactPrompt(topic, difficulty, subtopic);
        }
      };

      const getEdexcelMathsPromptByType = (type: QuestionType) => {
        switch (type) {
          case 'multiple-choice':
            return getEdexcelMultipleChoicePrompt(topic, difficulty, subtopic);
          case 'show-that':
          case 'proof':
            return getEdexcelShowThatPrompt(topic, difficulty, subtopic);
          case 'graph':
            return getEdexcelGraphPrompt(topic, difficulty, subtopic);
          case 'compare':
            return getEdexcelComparePrompt(topic, difficulty, subtopic);
          case 'extended':
            return getEdexcelExtendedPrompt(topic, subtopic);
          default:
            return getEdexcelCompactPrompt(topic, difficulty, subtopic);
        }
      };

      const getOCRMathsPromptByType = (type: QuestionType) => {
        switch (type) {
          case 'multiple-choice':
            return getOCRMultipleChoicePrompt(topic, difficulty, subtopic);
          case 'show-that':
          case 'proof':
            return getOCRShowThatPrompt(topic, difficulty, subtopic);
          case 'graph':
            return getOCRGraphPrompt(topic, difficulty, subtopic);
          case 'compare':
            return getOCRComparePrompt(topic, difficulty, subtopic);
          case 'extended':
            return getOCRExtendedPrompt(topic, subtopic);
          default:
            return getOCRCompactPrompt(topic, difficulty, subtopic);
        }
      };

      const getAQAALevelMathsPromptByType = (type: QuestionType) => {
        switch (type) {
          case 'multiple-choice':
            return getAQAALevelMultipleChoicePrompt(topic, difficulty, subtopic);
          case 'show-that':
          case 'proof':
            return getAQAALevelProofPrompt(topic, difficulty, subtopic);
          case 'graph':
            return getAQAALevelGraphPrompt(topic, difficulty, subtopic);
          case 'extended':
            return getAQAALevelExtendedPrompt(topic, subtopic);
          default:
            return getAQAALevelCompactPrompt(topic, difficulty, subtopic);
        }
      };

      if (qualification === 'a-level') {
        switch (examBoard) {
          case 'aqa':
            return getAQAALevelMathsPromptByType(effectiveType);
          case 'edexcel':
            return getEdexcelALevelCompactPrompt(topic, difficulty, subtopic);
          case 'ocr':
            return getOCRALevelCompactPrompt(topic, difficulty, subtopic);
          default:
            return getAQAALevelMathsPromptByType(effectiveType);
        }
      }
      // GCSE Maths prompts with question type support
      switch (examBoard) {
        case 'edexcel':
          return getEdexcelMathsPromptByType(effectiveType);
        case 'ocr':
          return getOCRMathsPromptByType(effectiveType);
        case 'aqa':
        default:
          return getAQAMathsPromptByType(effectiveType);
      }
    };
    const prompt = getPromptForSubjectBoardAndLevel();

    const openai = getOpenAIClient();
    // Use exam board-specific system prompt with enhanced constraints
    const systemPrompt = getEnhancedSystemPrompt(subject, examBoard, qualification);
    // Get subject-specific accuracy constraints to prepend to user prompt
    const subjectConstraints = getAllConstraints(subject);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: `${subjectConstraints}\n\n${prompt}`,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.5,
      max_tokens: 6000,
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from OpenAI');
    }

    // Validation context for standard questions
    const validationContext: ValidationContext = {
      subject,
      examBoard,
      qualification,
      difficulty,
    };
    const questionData = parseQuestionResponse(responseContent, validationContext);

    // Cache the generated question (async, don't wait)
    cacheQuestion(cacheKey, effectiveSubtopic, difficulty, {
      content: questionData.content,
      solution: questionData.solution,
      marks: questionData.marks,
      markScheme: questionData.markScheme,
      diagram: questionData.diagram,
    }).catch(err => console.error('Failed to cache question:', err));

    // Store the generated question in the bank for future reuse (async, don't wait)
    const bankQuestionId = await storeQuestion(
      questionCriteria,
      questionData.content,
      questionData.solution,
      questionData.markScheme,
      questionData.marks,
      questionData.diagram ? (questionData.diagram as unknown as Record<string, unknown>) : undefined
    ).catch(err => {
      console.error('Failed to store question in bank:', err);
      return null;
    });

    const question: Question = {
      id: crypto.randomUUID(),
      topicId,
      difficulty,
      ...questionData,
    };

    // If stored successfully, record that it was served
    if (bankQuestionId) {
      recordQuestionServed(bankQuestionId, userId, 'practice').catch(err => 
        console.error('Failed to record question served:', err)
      );
    }

    return NextResponse.json(question, {
      headers: { 'X-Cache': 'MISS' },
    });
  } catch (error) {
    console.error('Error generating question:', error);

    if (error instanceof Error && error.message.includes('API key')) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate question' },
      { status: 500 }
    );
  }
}
