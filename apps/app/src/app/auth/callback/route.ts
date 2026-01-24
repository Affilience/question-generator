import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next');

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      console.log('[Auth Callback] Successful OAuth login for:', data.user.email);
      
      // If explicit next param, use it
      if (next) {
        console.log('[Auth Callback] Redirecting to next:', next);
        return NextResponse.redirect(`${origin}${next}`);
      }

      // Check if user has any question attempts to determine if new
      const { count } = await supabase
        .from('question_attempts')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', data.user.id);

      // New users (no attempts) go to welcome, returning users go to start
      const redirectTo = count === 0 ? '/welcome' : '/start';
      console.log('[Auth Callback] Redirecting to:', redirectTo, 'User attempts:', count);
      
      // Create a more robust redirect with session refresh hint
      const response = NextResponse.redirect(`${origin}${redirectTo}`);
      
      // Add a header to help with session timing
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
      
      return response;
    } else {
      console.error('[Auth Callback] OAuth exchange failed:', error);
    }
  } else {
    console.warn('[Auth Callback] No code parameter received');
  }

  // Return the user to an error page with instructions
  console.error('[Auth Callback] Authentication failed, redirecting to login');
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate`);
}
