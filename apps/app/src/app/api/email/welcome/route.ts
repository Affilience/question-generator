import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail, type WelcomeEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body: WelcomeEmailData = await request.json();
    
    if (!body.email || !body.firstName) {
      return NextResponse.json(
        { error: 'Email and firstName are required' },
        { status: 400 }
      );
    }

    const result = await sendWelcomeEmail(body);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Welcome email sent successfully',
        data: result.data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending welcome email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send welcome email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Welcome email API endpoint - use POST to send emails' },
    { status: 200 }
  );
}