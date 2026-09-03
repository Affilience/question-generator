import { NextRequest, NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email';
import { getAuthenticatedUser } from '@/lib/api/auth';

/**
 * Sends the welcome email to the signed-in user.
 *
 * This route previously took { email, firstName } straight from the request
 * body with no authentication and no rate limit, which made it an open relay:
 * anyone could send unlimited mail from the verified sending domain, to any
 * address, with attacker-chosen content. Recipient is now always the caller's
 * own verified address and the body is ignored for addressing.
 */
export async function POST(request: NextRequest) {
  try {
    const user = await getAuthenticatedUser(request);
    if (!user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));

    const firstName =
      (typeof body?.firstName === 'string' && body.firstName.trim().slice(0, 60)) ||
      (user.user_metadata?.display_name as string | undefined)?.slice(0, 60) ||
      user.email.split('@')[0];

    const result = await sendWelcomeEmail({ email: user.email, firstName });

    return NextResponse.json(
      { success: true, message: 'Welcome email sent successfully', data: result.data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    );
  }
}
