import { createBrowserClient } from '@supabase/ssr';

// Enhanced storage that falls back to cookies if localStorage fails (mobile Safari)
class EnhancedStorage {
  getItem(key: string): string | null {
    try {
      // Try localStorage first
      return localStorage.getItem(key);
    } catch {
      // Fallback to cookies on mobile Safari private mode
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === key) {
          return decodeURIComponent(value);
        }
      }
      return null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      // Try localStorage first
      localStorage.setItem(key, value);
    } catch {
      // Fallback to cookies with 1 year expiry
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = `${key}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // Remove cookie by setting past expiry
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    }
  }
}

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
          // Detect sessions in URL for OAuth flows
          detectSessionInUrl: true,
          // Enhanced storage with cookie fallback for mobile compatibility
          storage: typeof window !== 'undefined' ? new EnhancedStorage() : undefined,
          // Automatically refresh sessions when the tab/app becomes active
          autoRefreshToken: true,
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
