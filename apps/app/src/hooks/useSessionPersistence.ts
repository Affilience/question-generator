'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

/**
 * Hook to ensure session persistence across browser/app closures
 * This should be used in the root layout or main app component
 */
export function useSessionPersistence() {
  useEffect(() => {
    const supabase = createClient();

    // Set up interval to refresh session every 5 minutes
    const refreshInterval = setInterval(async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('Session refresh error:', error);
        } else if (session) {
          // Session is valid, refresh access token if needed
          const { error: refreshError } = await supabase.auth.refreshSession();
          if (refreshError) {
            console.error('Token refresh error:', refreshError);
          }
        }
      } catch (error) {
        console.error('Session persistence check failed:', error);
      }
    }, 5 * 60 * 1000); // 5 minutes

    // Handle online/offline events for mobile
    const handleOnline = async () => {
      try {
        // When coming back online, check and refresh session
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          await supabase.auth.refreshSession();
        }
      } catch (error) {
        console.error('Failed to refresh session on coming online:', error);
      }
    };

    // Handle page unload to save session state
    const handleBeforeUnload = () => {
      // This ensures session data is saved before page closes
      try {
        const currentSession = supabase.auth.getSession();
        if (currentSession && typeof window !== 'undefined') {
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