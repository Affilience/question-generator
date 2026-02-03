/**
 * User Journey Analytics System
 * Tracks user behavior and drop-off points throughout onboarding flow
 */

import { createClient } from '@/lib/supabase';

// Define journey events that indicate user progression
export type JourneyEvent = 
  // Landing and Initial Interest
  | 'landing_page_view'
  | 'start_button_click'
  | 'level_selection_view'
  
  // Onboarding Flow
  | 'subject_grid_view'
  | 'subject_card_click'
  | 'exam_board_selection_view'
  | 'exam_board_click'
  | 'topic_selection_view'
  | 'topic_click'
  | 'subtopic_selection_view'
  | 'subtopic_click'
  
  // First Question Experience
  | 'practice_page_load'
  | 'first_question_generate'
  | 'first_question_complete'
  | 'first_question_correct'
  | 'first_question_incorrect'
  | 'solution_view'
  | 'next_question_click'
  
  // Engagement Milestones
  | 'second_question_start'
  | 'third_question_start'
  | 'fifth_question_start'
  | 'session_10min'
  | 'session_30min'
  
  // Drop-off Indicators
  | 'back_button_usage'
  | 'page_exit_intent'
  | 'session_timeout'
  
  // Conversion Events
  | 'signup_modal_view'
  | 'signup_complete'
  | 'subscription_view'
  | 'subscription_complete';

export interface JourneyEventData {
  event: JourneyEvent;
  userId?: string;
  sessionId: string;
  timestamp: Date;
  page: string;
  referrer?: string;
  properties?: Record<string, any>;
  userAgent?: string;
  ipAddress?: string;
}

// Generate consistent session ID for anonymous tracking
export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  let sessionId = sessionStorage.getItem('journey_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('journey_session_id', sessionId);
    
    // Set session start time for timeout tracking
    sessionStorage.setItem('journey_session_start', Date.now().toString());
  }
  return sessionId;
}

// Track journey events
export async function trackJourneyEvent(
  event: JourneyEvent, 
  properties: Record<string, any> = {},
  userId?: string
): Promise<void> {
  try {
    const sessionId = getSessionId();
    const timestamp = new Date();
    const page = typeof window !== 'undefined' ? window.location.pathname : '';
    const referrer = typeof window !== 'undefined' ? document.referrer : '';
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    
    const eventData: JourneyEventData = {
      event,
      userId,
      sessionId,
      timestamp,
      page,
      referrer,
      properties,
      userAgent,
    };

    // Send to our tracking API
    await fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Journey Event:', event, properties);
    }

  } catch (error) {
    console.warn('Failed to track journey event:', error);
  }
}

// Specialized tracking functions for common scenarios
export const analytics = {
  // Page view tracking
  pageView: (page: string, properties: Record<string, any> = {}) => {
    const eventName = page.includes('gcse') ? 'subject_grid_view' :
                     page.includes('practice') ? 'practice_page_load' :
                     'landing_page_view';
    
    return trackJourneyEvent(eventName, { page, ...properties });
  },

  // User interaction tracking
  click: (element: string, properties: Record<string, any> = {}) => {
    const eventMap: Record<string, JourneyEvent> = {
      'start_button': 'start_button_click',
      'subject_card': 'subject_card_click',
      'exam_board': 'exam_board_click',
      'topic_link': 'topic_click',
      'subtopic_link': 'subtopic_click',
      'next_question': 'next_question_click',
    };

    const event = eventMap[element] || 'start_button_click';
    return trackJourneyEvent(event, { element, ...properties });
  },

  // Question-specific tracking
  question: {
    generate: (properties: Record<string, any> = {}) => 
      trackJourneyEvent('first_question_generate', properties),
    
    complete: (correct: boolean, properties: Record<string, any> = {}) =>
      trackJourneyEvent(correct ? 'first_question_correct' : 'first_question_incorrect', properties),
    
    viewSolution: (properties: Record<string, any> = {}) =>
      trackJourneyEvent('solution_view', properties),
  },

  // Milestone tracking
  milestone: (questionCount: number, sessionTime: number) => {
    if (questionCount === 2) trackJourneyEvent('second_question_start');
    if (questionCount === 3) trackJourneyEvent('third_question_start');
    if (questionCount === 5) trackJourneyEvent('fifth_question_start');
    
    if (sessionTime > 10 * 60 * 1000) trackJourneyEvent('session_10min');
    if (sessionTime > 30 * 60 * 1000) trackJourneyEvent('session_30min');
  },

  // Drop-off detection
  exit: (reason: 'back_button' | 'page_exit' | 'timeout') => {
    const eventMap = {
      back_button: 'back_button_usage',
      page_exit: 'page_exit_intent',
      timeout: 'session_timeout',
    } as const;
    
    return trackJourneyEvent(eventMap[reason]);
  },
};

// Hook for automatic page view tracking
export function usePageTracking() {
  if (typeof window === 'undefined') return;
  
  // Track page view on mount
  analytics.pageView(window.location.pathname);
  
  // Track exit intent
  const handleBeforeUnload = () => analytics.exit('page_exit');
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Track back button usage
  const handlePopState = () => analytics.exit('back_button');
  window.addEventListener('popstate', handlePopState);
  
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('popstate', handlePopState);
  };
}

// Get journey analytics data for admin dashboard
export async function getJourneyAnalytics(timeframe: '24h' | '7d' | '30d' = '7d') {
  const supabase = createClient();
  
  const timeAgo = new Date();
  timeAgo.setDate(timeAgo.getDate() - (timeframe === '24h' ? 1 : timeframe === '7d' ? 7 : 30));
  
  const { data, error } = await supabase
    .from('journey_events')
    .select('*')
    .gte('timestamp', timeAgo.toISOString())
    .order('timestamp', { ascending: true });
    
  if (error) throw error;
  return data;
}

// Calculate funnel drop-off rates
export function calculateFunnelMetrics(events: any[]) {
  const funnelSteps = [
    'landing_page_view',
    'subject_grid_view', 
    'subject_card_click',
    'exam_board_click',
    'topic_click',
    'practice_page_load',
    'first_question_generate',
    'first_question_complete'
  ];
  
  const stepCounts = funnelSteps.reduce((acc, step) => {
    acc[step] = new Set(events.filter(e => e.event === step).map(e => e.session_id)).size;
    return acc;
  }, {} as Record<string, number>);
  
  const funnelData = funnelSteps.map((step, index) => {
    const count = stepCounts[step] || 0;
    const previousCount = index > 0 ? stepCounts[funnelSteps[index - 1]] || 0 : count;
    const dropOffRate = previousCount > 0 ? ((previousCount - count) / previousCount * 100) : 0;
    
    return {
      step,
      count,
      dropOffRate: Math.round(dropOffRate * 10) / 10,
      conversionRate: index === 0 ? 100 : Math.round((count / stepCounts[funnelSteps[0]]) * 100 * 10) / 10
    };
  });
  
  return funnelData;
}