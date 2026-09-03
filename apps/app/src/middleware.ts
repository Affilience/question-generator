import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes (let them handle their own auth)
     * - auth/callback (OAuth callback handles its own session logic)
     */
    // Excludes: build assets, images, API routes (they authenticate
    // themselves), the Sentry tunnel at /monitoring (middleware runs BEFORE
    // rewrites, so every error envelope was paying an auth round trip), and
    // crawler/manifest files. Without these, supabase.auth.getUser() ran on all
    // ~1,295 prerendered public pages, on requests carrying no cookies at all.
    '/((?!_next/static|_next/image|favicon.ico|monitoring|sitemap.xml|robots.txt|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|webmanifest)$|api).*)',
  ],
};
