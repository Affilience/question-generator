'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

/**
 * Hook to ensure session persistence across browser/app closures
 * This should be used in the root layout or main app component
 */
export function useSessionPersistence() {
  useEffect(() => {

    // Set up interval to refresh session every 2 minutes (more aggressive)
    const refreshInterval = setInterval(async () => {
      try {
        const client = createClient();
        const { data: { session }, error } = await client.auth.getSession();
        if (error) {
          console.warn('[SessionPersistence] Session check error:', error.message);
        } else if (session) {
          // Check if token is expiring soon (within 10 minutes)
          const expiresAt = session.expires_at;
          const now = Math.floor(Date.now() / 1000);
          const timeUntilExpiry = expiresAt ? expiresAt - now : 0;
          
          if (timeUntilExpiry < 600) { // Less than 10 minutes
            const { error: refreshError } = await client.auth.refreshSession();
            if (refreshError) {
              console.error('[SessionPersistence] Token refresh error:', refreshError.message);
            } else {
              console.log('[SessionPersistence] Token refreshed successfully');
            }
          }
        }
      } catch (error) {
        console.error('[SessionPersistence] Session persistence check failed:', error);
      }
    }, 2 * 60 * 1000); // 2 minutes

    // Handle online/offline events for mobile
    const handleOnline = async () => {
      try {
        const client = createClient();
        // When coming back online, check and refresh session
        const { data: { session } } = await client.auth.getSession();
        if (session) {
          await client.auth.refreshSession();
        }
      } catch (error) {
        console.error('Failed to refresh session on coming online:', error);
      }
    };

    // Handle page unload to save session state
    const handleBeforeUnload = () => {
      // This ensures session data is saved before page closes
      try {
        if (typeof window !== 'undefined') {
          // Force session data to be written to localStorage
          localStorage.setItem('supabase.auth.session-check', Date.now().toString());
        }
      } catch (error) {
        console.error('Failed to save session state before unload:', error);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('online', handleOnline);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }

    return () => {
      clearInterval(refreshInterval);
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }
    };
  }, []);
}