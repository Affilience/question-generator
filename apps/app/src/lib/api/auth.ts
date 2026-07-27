import { NextRequest } from 'next/server';
import { createClient as createAnonClient } from '@supabase/supabase-js';
import type { User } from '@supabase/supabase-js';
import { createClient as createServerClient } from '@/lib/supabase/server';

/**
 * Resolves the authenticated user for an API request.
 *
 * Accepts a Supabase access token in the Authorization header first (reliable
 * regardless of the browser storage adapter), then falls back to a
 * cookie-based session.
 */
export async function getAuthenticatedUser(request: NextRequest): Promise<User | null> {
  const authHeader = request.headers.get('authorization');
  if (authHeader?.toLowerCase().startsWith('bearer ')) {
    const token = authHeader.slice(7).trim();
    if (token) {
      const anon = createAnonClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { data, error } = await anon.auth.getUser(token);
      if (!error && data.user) return data.user;
    }
  }

  try {
    const supabase = await createServerClient();
    const { data } = await supabase.auth.getUser();
    return data.user ?? null;
  } catch {
    return null;
  }
}
