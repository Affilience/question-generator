import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Client } from '@upstash/qstash';
import { PaperConfig, ExamBoard, QualificationLevel, Subject } from '@/types';
import { checkPaperGenerationAllowed } from '@/lib/api/subscription-check';
import { selectQuestionsForPaper } from '@/lib/questionSelector';
import { getTopicsBySubjectBoardAndLevel } from '@/lib/topics';

// Simplified config from PaperBuilder component
interface SimplifiedConfig {
  selectedTopics: string[];
  totalMarks: number;
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  paperName: string;
}

interface StartPaperRequest {
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: SimplifiedConfig | PaperConfig;
  userId?: string;
}

// Check if config is simplified (from PaperBuilder)
function isSimplifiedConfig(config: SimplifiedConfig | PaperConfig): config is SimplifiedConfig {
  return !('sections' in config) || !config.sections;
}

// Transform simplified config to full PaperConfig
function transformConfig(
  simplified: SimplifiedConfig,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): PaperConfig {
  // Get all topics to build selectedSubtopics
  const allTopics = getTopicsBySubjectBoardAndLevel(subject, examBoard, qualification);

  // Build selectedSubtopics from selectedTopics
  // subtopics is string[] (subtopic names), not objects
  const selectedSubtopics: Record<string, string[]> = {};
  for (const topicId of simplified.selectedTopics) {
    const topic = allTopics.find(t => t.id === topicId);
    if (topic && topic.subtopics && topic.subtopics.length > 0) {
      selectedSubtopics[topicId] = topic.subtopics; // subtopics is already string[]
    }
  }

  return {
    totalMarks: simplified.totalMarks,
    timeLimit: Math.round(simplified.totalMarks * 1.2), // ~1.2 min per mark
    sections: [
      {
        id: 'section-a',
        name: 'Section A',
        targetMarks: simplified.totalMarks,
        instructions: 'Answer all questions in this section.',
        questionTypes: ['calculation', 'explain', 'extended'],
        order: 1,
      },
    ],
    selectedTopics: simplified.selectedTopics,
    selectedSubtopics,
    difficultyDistribution: {
      easy: simplified.difficulty.easy,
      medium: simplified.difficulty.medium,
      hard: simplified.difficulty.hard,
    },
    questionTypeDistribution: {
      calculation: 40,
      explain: 30,
      dataAnalysis: 10,
      extended: 15,
      multipleChoice: 5,
    },
    settings: {
      includeFormulaSheet: true,
      includeDataBooklet: false,
      showMarks: true,
      calculatorAllowed: true,
      examConditions: false,
    },
  };
}

// Get Supabase admin client
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  // Parse request
  let body: StartPaperRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { examBoard, qualification, subject, paperName, config: rawConfig, userId } = body;

  // Check subscription
  const usageCheck = await checkPaperGenerationAllowed(userId || null);
  if (!usageCheck.allowed) {
    return NextResponse.json(
      {
        error: usageCheck.error || 'Paper generation not available on your plan',
        tier: usageCheck.tier,
        remaining: usageCheck.remaining,
        upgrade: true,
      },
      { status: 403 }
    );
  }

  // Validate required fields
  if (!examBoard || !qualification || !subject || !rawConfig) {
    return NextResponse.json(
      { error: 'Missing required fields: examBoard, qualification, subject, config' },
      { status: 400 }
    );
  }

  // Transform config if it's the simplified version from PaperBuilder
  const config: PaperConfig = isSimplifiedConfig(rawConfig)
    ? transformConfig(rawConfig, subject, examBoard, qualification)
    : rawConfig;

  // Validate transformed config
  if (!config.sections || config.sections.length === 0) {
    return NextResponse.json(
      { error: 'Paper must have at least one section' },
      { status: 400 }
    );
  }

  if (Object.keys(config.selectedSubtopics).length === 0) {
    return NextResponse.json(
      { error: 'Must select at least one topic with subtopics' },
      { status: 400 }
    );
  }

  // Plan the questions to get total count
  const selectionResult = selectQuestionsForPaper(config);
  let totalQuestions = 0;
  selectionResult.sections.forEach((section) => {
    totalQuestions += section.questions.length;
  });

  if (totalQuestions === 0) {
    return NextResponse.json(
      { error: 'No questions could be planned for this configuration' },
      { status: 400 }
    );
  }

  // Create job in database
  const supabase = getSupabaseAdmin();
  const { data: job, error: jobError } = await supabase
    .from('paper_jobs')
    .insert({
      user_id: userId,
      status: 'pending',
      progress_current: 0,
      progress_total: totalQuestions,
      config: {
        examBoard,
        qualification,
        subject,
        paperName,
        config,
      },
    })
    .select('id')
    .single();

  if (jobError || !job) {
    console.error('Failed to create job:', jobError);
    return NextResponse.json(
      { error: 'Failed to create paper generation job' },
      { status: 500 }
    );
  }

  // Check QStash config
  if (!process.env.QSTASH_TOKEN) {
    console.error('QSTASH_TOKEN not configured');
    return NextResponse.json(
      { error: 'Paper generation service not configured. Please contact support.' },
      { status: 500 }
    );
  }

  // Queue to QStash
  const qstash = new Client({
    token: process.env.QSTASH_TOKEN,
  });

  // Get the base URL for the callback
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ||
                  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

  console.log('QStash callback URL:', `${baseUrl}/api/papers/process`);

  try {
    await qstash.publishJSON({
      url: `${baseUrl}/api/papers/process`,
      body: {
        jobId: job.id,
        examBoard,
        qualification,
        subject,
        paperName,
        config,
        userId,
      },
      retries: 2,
    });
  } catch (qstashError) {
    console.error('Failed to queue job:', qstashError);
    // Mark job as failed
    await supabase
      .from('paper_jobs')
      .update({ status: 'failed', error: 'Failed to queue job' })
      .eq('id', job.id);

    return NextResponse.json(
      { error: 'Failed to queue paper generation' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    jobId: job.id,
    totalQuestions,
    message: 'Paper generation started',
  });
}
