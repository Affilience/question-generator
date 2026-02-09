import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next');
  const error = searchParams.get('error');
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');

  // Handle explicit error parameters from auth provider
  if (error) {
    const params = new URLSearchParams();
    params.set('error', error);
    if (errorCode) params.set('error_code', errorCode);
    if (errorDescription) params.set('error_description', errorDescription);
    
    return NextResponse.redirect(`${origin}/login?${params.toString()}`);
  }

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // If explicit next param, use it
      if (next) {
        return NextResponse.redirect(`${origin}${next}`);
      }

      // Check if user has any question attempts to determine if new
      console.log('[Auth Callback] Checking question attempts for user:', data.user.id);
      const { count, error: countError } = await supabase
        .from('question_attempts')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', data.user.id);

      if (countError) {
        console.error('[Auth Callback] Error checking question attempts:', countError);
        // Default to treating as new user if query fails
      }

      console.log('[Auth Callback] Question attempts count:', count);

      // New users (no attempts) go to welcome, returning users go to start
      const isNewUser = count === 0 || countError; // Treat query errors as new users
      const redirectTo = isNewUser ? '/welcome' : '/start';
      
      console.log('[Auth Callback] User type:', isNewUser ? 'NEW' : 'RETURNING', '- Redirecting to:', redirectTo);
      
      // Send welcome email for new users
      if (isNewUser && data.user.email) {
        console.log('[Auth Callback] Attempting to send welcome email to:', data.user.email);
        try {
          const firstName = data.user.user_metadata?.display_name || 
                          data.user.user_metadata?.full_name || 
                          data.user.email.split('@')[0];
          
          console.log('[Auth Callback] Extracted firstName:', firstName);
          
          const emailResult = await sendWelcomeEmail({
            email: data.user.email,
            firstName: firstName
          });
          
          console.log('[Auth Callback] ✅ Welcome email sent successfully to:', data.user.email, 'Result:', emailResult);
        } catch (error) {
          console.error('[Auth Callback] ❌ Failed to send welcome email:', error);
          
          // Enhanced error logging
          if (error instanceof Error) {
            console.error('[Auth Callback] Error details:', {
              message: error.message,
              stack: error.stack
            });
          }
          
          // Don't block the signup flow if email fails
        }
      } else if (!data.user.email) {
        console.warn('[Auth Callback] No email address found for user - skipping welcome email');
      } else {
        console.log('[Auth Callback] Returning user - skipping welcome email');
      }
      
      return NextResponse.redirect(`${origin}${redirectTo}`);
    }

    // Handle specific auth errors
    if (error) {
      const params = new URLSearchParams();
      if (error.message.includes('expired')) {
        params.set('error', 'Authentication link expired');
        params.set('error_code', 'otp_expired');
        params.set('error_description', 'Your authentication link has expired. Please try signing in again.');
      } else {
        params.set('error', error.message || 'Authentication failed');
      }
      return NextResponse.redirect(`${origin}/login?${params.toString()}`);
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`);
}
