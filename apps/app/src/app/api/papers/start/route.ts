import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Client } from '@upstash/qstash';
import { PaperConfig, ExamBoard, QualificationLevel, Subject } from '@/types';
import { checkPaperGenerationAllowed } from '@/lib/api/subscription-check';
import { selectQuestionsForPaper } from '@/lib/questionSelector';

interface StartPaperRequest {
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: PaperConfig;
  userId?: string;
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

  const { examBoard, qualification, subject, paperName, config, userId } = body;

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
  if (!examBoard || !qualification || !subject || !config) {
    return NextResponse.json(
      { error: 'Missing required fields: examBoard, qualification, subject, config' },
      { status: 400 }
    );
  }

  if (!config.sections || config.sections.length === 0) {
    return NextResponse.json(
      { error: 'Paper must have at least one section' },
      { status: 400 }
    );
  }

  if (Object.keys(config.selectedSubtopics).length === 0) {
    return NextResponse.json(
      { error: 'Must select at least one subtopic' },
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

  // Queue to QStash
  const qstash = new Client({
    token: process.env.QSTASH_TOKEN!,
  });

  // Get the base URL for the callback
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ||
                  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
                  'http://localhost:3000';

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
