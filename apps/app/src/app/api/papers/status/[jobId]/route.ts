import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

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
    .select('id, status, progress_current, progress_total, paper_id, error, created_at, completed_at')
    .eq('id', jobId)
    .eq('user_id', user.id)
    .single();

  if (error || !job) {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
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
