import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendWelcomeEmail } from '@/lib/email';
import { getAuthenticatedUser } from '@/lib/api/auth';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    // Claim the send. The conditional update is the lock: whichever of this
    // route and the OAuth callback gets there first sends, and a retry, a
    // double submit or a second device sends nothing.
    const { data: claimedRows } = await supabase
      .from('users')
      .update({ welcome_email_sent_at: new Date().toISOString() })
      .eq('id', user.id)
      .is('welcome_email_sent_at', null)
      .select('id');

    if ((claimedRows?.length ?? 0) === 0) {
      return NextResponse.json({ success: true, alreadySent: true }, { status: 200 });
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
