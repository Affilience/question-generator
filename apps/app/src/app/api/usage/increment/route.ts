import { NextRequest, NextResponse } from 'next/server';
import { incrementQuestionUsage } from '@/lib/api/subscription-check';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const { userId, type } = await request.json();

    if (!userId || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get client IP for the increment function (though it's mainly used for anonymous users)
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Verify user exists and is authenticated
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user || user.id !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (type === 'question') {
      await incrementQuestionUsage(userId, clientIP, false);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Invalid usage type' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error incrementing usage:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}