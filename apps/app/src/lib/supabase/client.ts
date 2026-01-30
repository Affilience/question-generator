import { createBrowserClient } from '@supabase/ssr';
import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';

// Supabase-compatible storage adapter using our enhanced multi-tier storage
class SupabaseStorageAdapter {
  private storage = getEnhancedStorage();

  getItem(key: string): string | null {
    // For synchronous compatibility with Supabase, we try localStorage first
    // then fall back to cookies for immediate access
    try {
      const result = localStorage.getItem(key);
      if (result) return result;
    } catch {}

    // Fallback to cookies for immediate access
    try {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === key) {
          try {
            const data = JSON.parse(decodeURIComponent(value));
            return data.value || decodeURIComponent(value);
          } catch {
            return decodeURIComponent(value);
          }
        }
      }
    } catch {}

    // Async fallback - trigger background sync for next time
    this.storage.getItem(key).then((value) => {
      if (value && typeof window !== 'undefined') {
        try {
          localStorage.setItem(key, value);
        } catch {}
      }
    }).catch(() => {});

    return null;
  }

  setItem(key: string, value: string): void {
    // Set synchronously to localStorage for immediate Supabase compatibility
    try {
      localStorage.setItem(key, value);
    } catch {}

    // Set asynchronously to all storage tiers
    this.storage.setItem(key, value, 365 * 24 * 60 * 60 * 1000).catch((error) => {
      console.warn('[SupabaseStorageAdapter] Failed to set item across storage tiers:', error);
    });
  }

  removeItem(key: string): void {
    // Remove synchronously from localStorage
    try {
      localStorage.removeItem(key);
    } catch {}

    // Remove asynchronously from all storage tiers
    this.storage.removeItem(key).catch((error) => {
      console.warn('[SupabaseStorageAdapter] Failed to remove item from storage tiers:', error);
    });
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
          // Enhanced multi-tier storage for maximum mobile Safari compatibility
          storage: typeof window !== 'undefined' ? new SupabaseStorageAdapter() : undefined,
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
