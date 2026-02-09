import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    console.log('[Admin Test] Testing welcome email for:', email);
    
    const result = await sendWelcomeEmail({
      email,
      firstName: firstName || 'Test User'
    });
    
    console.log('[Admin Test] ✅ Welcome email sent successfully:', result);
    
    return NextResponse.json({
      success: true,
      message: 'Test welcome email sent successfully',
      data: result.data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[Admin Test] ❌ Failed to send test welcome email:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to send test welcome email',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Admin endpoint to test welcome email functionality',
    usage: 'POST with { "email": "test@example.com", "firstName": "Test" }',
    timestamp: new Date().toISOString()
  });
}