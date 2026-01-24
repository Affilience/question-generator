import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Helper function to check if request has Supabase session cookies
function hasSessionCookies(request: NextRequest): boolean {
  const cookies = request.cookies.getAll();
  return cookies.some(cookie => 
    cookie.name.startsWith('sb-') && 
    (cookie.name.includes('auth-token') || cookie.name.includes('refresh-token'))
  );
}

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

  // For mobile OAuth flows, try to recover session from cookies first
  let user = null;
  let authAttempted = false;
  
  try {
    // First attempt - direct getUser call
    const result = await supabase.auth.getUser();
    user = result.data.user;
    authAttempted = true;
    
    // If no user but we have session cookies, force a session refresh
    if (!user && hasSessionCookies(request)) {
      console.log('[Middleware] No user but session cookies present, attempting refresh...');
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData.session) {
        // Try getUser again after session refresh
        const retryResult = await supabase.auth.getUser();
        user = retryResult.data.user;
      }
    }
  } catch (error) {
    console.error('[Middleware] Auth error:', error);
  }

  // Debug logging to understand what's happening
  console.log(`[Middleware] ${request.nextUrl.pathname} - User: ${user ? user.email : 'null'} - Cookies: ${hasSessionCookies(request)}`);

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
