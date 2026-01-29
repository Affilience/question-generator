import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

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
      const { count } = await supabase
        .from('question_attempts')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', data.user.id);

      // New users (no attempts) go to welcome, returning users go to start
      const redirectTo = count === 0 ? '/welcome' : '/start';
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
