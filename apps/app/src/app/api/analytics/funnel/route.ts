import { NextRequest, NextResponse } from 'next/server';
import { createClient as createServiceClient } from '@supabase/supabase-js';
import { calculateFunnelMetrics } from '@/lib/analytics';
import { getAuthenticatedUser } from '@/lib/api/auth';

function isOwnerEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const owners = (process.env.OWNER_EMAILS || '')
    .split(',')
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);
  return owners.length > 0 && owners.includes(email.toLowerCase());
}

/**
 * Funnel analytics for the site owner.
 *
 * This was previously unauthenticated and read with the browser (anon) client.
 * The journey_events read policy allows any row whose user_id is null, so the
 * anon key returns every logged-out visitor's session id, page path and event
 * properties — readable by anyone, here or directly against the REST API.
 */
export async function GET(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!isOwnerEmail(user?.email)) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const { searchParams } = new URL(request.url);
    const timeframe = searchParams.get('timeframe') as '24h' | '7d' | '30d' || '7d';
    
    // Calculate time window
    const timeAgo = new Date();
    const hours = timeframe === '24h' ? 24 : timeframe === '7d' ? 168 : 720;
    timeAgo.setHours(timeAgo.getHours() - hours);
    
    const supabase = createServiceClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Get journey events in timeframe. Bounded: PostgREST silently caps at
    // 1000 rows by default, and this table carries tens of thousands.
    const { data: events, error } = await supabase
      .from('journey_events')
      .select('event, session_id, user_id, timestamp, page, properties')
      .gte('timestamp', timeAgo.toISOString())
      .order('timestamp', { ascending: true })
      .limit(50000);
    
    if (error) {
      console.error('Failed to fetch journey events:', error);
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
    
    // Calculate funnel metrics
    const funnelData = calculateFunnelMetrics(events || []);
    
    // Calculate additional metrics
    const totalSessions = new Set(events?.map((e: any) => e.session_id)).size;
    const authenticatedSessions = new Set(
      events?.filter((e: any) => e.user_id).map((e: any) => e.session_id)
    ).size;
    
    // Find biggest drop-off points
    const dropOffPoints = funnelData
      .filter(step => step.dropOffRate > 0)
      .sort((a, b) => b.dropOffRate - a.dropOffRate)
      .slice(0, 3);
    
    // Calculate completion rates for key milestones
    const milestones = {
      reachedPractice: events?.filter((e: any) => e.event === 'practice_page_load').length || 0,
      generatedQuestion: events?.filter((e: any) => e.event === 'first_question_generate').length || 0,
      completedQuestion: events?.filter((e: any) => e.event.includes('question_complete')).length || 0,
      viewedSolution: events?.filter((e: any) => e.event === 'solution_view').length || 0,
      secondQuestion: events?.filter((e: any) => e.event === 'second_question_start').length || 0,
    };
    
    return NextResponse.json({
      timeframe,
      totalSessions,
      authenticatedSessions,
      authenticationRate: totalSessions > 0 ? (authenticatedSessions / totalSessions * 100).toFixed(1) : '0',
      funnel: funnelData,
      dropOffPoints,
      milestones,
      overallConversion: funnelData[funnelData.length - 1]?.conversionRate || 0
    });
    
  } catch (error) {
    console.error('Analytics funnel error:', error);
    return NextResponse.json({ error: 'Failed to calculate funnel' }, { status: 500 });
  }
}