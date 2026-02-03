import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';
import type { JourneyEventData } from '@/lib/analytics';

export async function POST(request: NextRequest) {
  try {
    const eventData: JourneyEventData = await request.json();
    
    // Add IP address from request headers
    const ipAddress = request.ip || 
                     request.headers.get('x-forwarded-for')?.split(',')[0] ||
                     request.headers.get('x-real-ip') ||
                     'unknown';
    
    const supabase = createClient();
    
    // Insert event into journey_events table
    const { error } = await supabase
      .from('journey_events')
      .insert({
        event: eventData.event,
        user_id: eventData.userId,
        session_id: eventData.sessionId,
        timestamp: eventData.timestamp,
        page: eventData.page,
        referrer: eventData.referrer,
        properties: eventData.properties || {},
        user_agent: eventData.userAgent,
        ip_address: ipAddress,
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