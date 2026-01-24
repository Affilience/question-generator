import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, {
              ...options,
              // Enhanced cookie settings for better persistence
              httpOnly: options?.httpOnly ?? false,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax',
              // Set longer expiration for session cookies (30 days)
              maxAge: options?.maxAge ?? 60 * 60 * 24 * 30,
              path: '/',
            })
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: Use getUser() directly in middleware - it's guaranteed to revalidate the token
  // Never trust getSession() in server code like middleware
  let user = null;
  let error = null;

  // For potential OAuth timing issues, try to get user with a small retry
  try {
    const result = await supabase.auth.getUser();
    user = result.data.user;
    error = result.error;
    
    // If no user found but we suspect OAuth timing, check if this might be right after callback
    if (!user && !error && request.headers.get('referer')?.includes('/auth/callback')) {
      console.log('[Middleware] Potential OAuth timing issue, giving session time to settle...');
      // Small delay to let OAuth session settle
      await new Promise(resolve => setTimeout(resolve, 100));
      const retryResult = await supabase.auth.getUser();
      user = retryResult.data.user;
      error = retryResult.error;
    }
  } catch (e) {
    console.error('[Middleware] Auth check failed:', e);
    error = e as any;
  }

  if (error) {
    console.warn('[Middleware] Auth error:', error.message);
  } else if (user) {
    console.log('[Middleware] User authenticated:', user.email);
  } else {
    console.log('[Middleware] No authenticated user');
  }

  // Protected routes - require authentication
  const protectedPaths = ['/dashboard', '/bookmarks', '/app'];
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !user) {
    // Redirect to login with return URL
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from auth pages
  const authPaths = ['/login', '/signup'];
  const isAuthPath = authPaths.some(path =>
    request.nextUrl.pathname === path
  );

  if (isAuthPath && user) {
    const url = request.nextUrl.clone();
    url.pathname = '/start';
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users from homepage to start page
  if (request.nextUrl.pathname === '/' && user) {
    const url = request.nextUrl.clone();
    url.pathname = '/start';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
