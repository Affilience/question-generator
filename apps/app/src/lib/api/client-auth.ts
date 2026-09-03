'use client';

import { createClient } from '@/lib/supabase/client';

/**
 * Build headers for a call to one of our own authenticated API routes.
 *
 * Sends the Supabase access token explicitly as a bearer token rather than
 * relying on the session cookie. Routes called immediately after sign-up or
 * sign-in can otherwise race the cookie being written, and mobile in-app
 * browsers are unreliable about sending it at all — getAuthenticatedUser
 * checks the bearer token first for exactly this reason.
 */
export async function authHeaders(): Promise<Record<string, string>> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  try {
    const { data } = await createClient().auth.getSession();
    const token = data.session?.access_token;
    if (token) headers.Authorization = `Bearer ${token}`;
  } catch {
    // Fall back to cookie-based auth on the server side.
  }

  return headers;
}
