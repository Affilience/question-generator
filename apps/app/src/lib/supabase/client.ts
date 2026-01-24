import { createBrowserClient } from '@supabase/ssr';

// Singleton instance to avoid multiple GoTrueClient instances
let client: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (!client) {
    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          // Enable persistent sessions across browser closures and mobile app switches
          persistSession: true,
          // Set session to persist for 30 days
          detectSessionInUrl: true,
          // Storage options for better mobile compatibility
          storage: typeof window !== 'undefined' ? window.localStorage : undefined,
          // Automatically refresh sessions when the tab/app becomes active
          autoRefreshToken: true,
          // Debug auth state changes
          debug: process.env.NODE_ENV === 'development',
          // Flow type for OAuth (important for mobile browsers)
          flowType: 'pkce',
          // Storage key to avoid conflicts
          storageKey: 'sb-auth-token',
        },
        global: {
          headers: {
            'X-Client-Info': 'question-generator-web',
          },
        },
      }
    );
  }
  return client;
}
