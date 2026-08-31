import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';

// A processing job whose worker hasn't touched it for this long is dead
// (progress updates land every few seconds while generation runs)
const STALE_JOB_MS = 3 * 60 * 1000;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;

  if (!jobId) {
    return NextResponse.json({ error: 'Job ID required' }, { status: 400 });
  }

  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Fetch job status
  const { data: job, error } = await supabase
    .from('paper_jobs')
    .select('id, status, progress_current, progress_total, paper_id, error, created_at, updated_at, completed_at')
    .eq('id', jobId)
    .eq('user_id', user.id)
    .single();

  if (error || !job) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }

  // Detect dead workers so the UI doesn't poll forever: if a pending or
  // processing job has gone quiet, mark it failed and report that
  if (
    (job.status === 'pending' || job.status === 'processing') &&
    job.updated_at &&
    Date.now() - new Date(job.updated_at).getTime() > STALE_JOB_MS
  ) {
    const admin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    await admin
      .from('paper_jobs')
      .update({
        status: 'failed',
        error: 'Paper generation timed out. Please try again.',
        updated_at: new Date().toISOString(),
      })
      .eq('id', job.id)
      .in('status', ['pending', 'processing']);

    job.status = 'failed';
    job.error = 'Paper generation timed out. Please try again.';
  }

  // If completed, also fetch the paper data
  let paper = null;
  if (job.status === 'completed' && job.paper_id) {
    const { data: paperData } = await supabase
      .from('generated_papers')
      .select('*')
      .eq('id', job.paper_id)
      .single();

    if (paperData) {
      paper = {
        id: paperData.id,
        examBoard: paperData.exam_board,
        qualification: paperData.qualification,
        subject: paperData.subject,
        paperName: paperData.paper_name,
        sections: paperData.sections,
        totalMarks: paperData.total_marks,
        timeLimit: paperData.time_limit,
        settings: paperData.settings,
        createdAt: paperData.created_at,
      };
    }
  }

  return NextResponse.json({
    jobId: job.id,
    status: job.status,
    progress: {
      current: job.progress_current,
      total: job.progress_total,
    },
    paperId: job.paper_id,
    paper,
    error: job.error,
    createdAt: job.created_at,
    completedAt: job.completed_at,
  });
}
