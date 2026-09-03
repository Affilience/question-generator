import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { JourneyEvent, JourneyEventData } from '@/lib/analytics';
import { getClientIP } from '@/lib/rate-limit';

/**
 * Records a journey event.
 *
 * This endpoint is intentionally open — the funnel it feeds is mostly about
 * logged-out visitors, so requiring a session would defeat its purpose. What
 * it must not be is an unbounded write: it previously used the browser (anon)
 * client against an INSERT policy of `with check (true)`, so any caller could
 * append arbitrary rows to what is already the largest table in the database.
 *
 * It now writes with the service-role client (so the permissive anon policy
 * can be dropped), accepts only known event names, and caps every field.
 */

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const ALLOWED_EVENTS: ReadonlySet<string> = new Set<JourneyEvent>([
  'landing_page_view',
  'start_button_click',
  'level_selection_view',
  'subject_grid_view',
  'subject_card_click',
  'exam_board_selection_view',
  'exam_board_click',
  'topic_selection_view',
  'topic_click',
  'subtopic_selection_view',
  'subtopic_click',
  'practice_page_load',
  'first_question_generate',
  'first_question_complete',
  'first_question_correct',
  'first_question_incorrect',
  'solution_view',
  'next_question_click',
  'second_question_start',
  'third_question_start',
  'fifth_question_start',
  'session_10min',
  'session_30min',
  'back_button_usage',
  'page_exit_intent',
  'session_timeout',
  'signup_modal_view',
  'signup_complete',
  'subscription_view',
  'subscription_complete',
]);

const MAX_PROPERTIES_BYTES = 2000;

function clip(value: unknown, max: number): string | null {
  if (typeof value !== 'string' || value.length === 0) return null;
  return value.slice(0, max);
}

function safeProperties(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  try {
    const serialized = JSON.stringify(value);
    if (serialized.length > MAX_PROPERTIES_BYTES) return { truncated: true };
    return value as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function POST(request: NextRequest) {
  try {
    const eventData: Partial<JourneyEventData> = await request.json();

    if (!eventData?.event || !ALLOWED_EVENTS.has(eventData.event)) {
      // Unknown event names are dropped rather than stored, and are not worth
      // an error response to the beacon that sent them.
      return NextResponse.json({ success: true, ignored: true });
    }

    const sessionId = clip(eventData.sessionId, 100);
    if (!sessionId) {
      return NextResponse.json({ success: true, ignored: true });
    }

    // Only trust a user id that matches a real uuid shape; the row is not an
    // authorisation boundary but it should not accept arbitrary text.
    const userId =
      typeof eventData.userId === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(eventData.userId)
        ? eventData.userId
        : null;

    const { error } = await supabase.from('journey_events').insert({
      event: eventData.event,
      user_id: userId,
      session_id: sessionId,
      timestamp: new Date().toISOString(), // server clock, not the caller's
      page: clip(eventData.page, 500) ?? '',
      referrer: clip(eventData.referrer, 500),
      properties: safeProperties(eventData.properties),
      user_agent: clip(eventData.userAgent, 300),
      ip_address: getClientIP(request),
    });

    if (error) {
      console.error('Failed to store journey event:', error);
      return NextResponse.json({ error: 'Failed to store event' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
