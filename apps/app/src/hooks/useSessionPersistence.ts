'use client';

import { useEffect, useState } from 'react';
import { getEnhancedSessionManager } from '@/lib/session/enhanced-session-manager';

/**
 * Enhanced hook to ensure session persistence across browser/app closures
 * Now uses the comprehensive mobile Safari session persistence system
 */
export function useSessionPersistence() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [sessionManager] = useState(() => getEnhancedSessionManager());

  useEffect(() => {
    let mounted = true;

    // Initialize the enhanced session management system
    async function initializeEnhancedSession() {
      try {
        console.log('[useSessionPersistence] Initializing enhanced session management...');
        
        await sessionManager.initialize({
          enableEnhancedStorage: true,
          enableServiceWorker: true,
          enableSessionRecovery: true,
          enableIOSWorkarounds: true,
          enableMonitoring: true,
          enableDiagnostics: true,
          debugMode: process.env.NODE_ENV === 'development'
        });

        if (mounted) {
          setIsInitialized(true);
          console.log('[useSessionPersistence] Enhanced session management initialized');
        }

      } catch (error) {
        console.error('[useSessionPersistence] Enhanced session initialization failed:', error);
        
        // Fallback to basic session persistence if enhanced fails
        if (mounted) {
          initializeBasicSessionPersistence();
          setIsInitialized(true);
        }
      }
    }

    // Fallback basic session persistence (original implementation)
    function initializeBasicSessionPersistence() {
      console.log('[useSessionPersistence] Falling back to basic session persistence');
      
      // Keep the original logic as fallback
      const { createClient } = require('@/lib/supabase/client');
      
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
    }

    // Start initialization
    initializeEnhancedSession();

    // Listen for enhanced session manager events
    const handleManagerReady = () => {
      console.log('[useSessionPersistence] Enhanced session manager is ready');
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('enhanced-session-manager-ready', handleManagerReady);
    }

    // Cleanup
    return () => {
      mounted = false;
      if (typeof window !== 'undefined') {
        window.removeEventListener('enhanced-session-manager-ready', handleManagerReady);
      }
    };
  }, [sessionManager]);

  // Expose session manager methods for debugging/testing
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      // Add debugging methods to window for development
      if (process.env.NODE_ENV === 'development') {
        (window as any).__sessionManager = {
          getDiagnostics: () => sessionManager.getDiagnostics(),
          getState: () => sessionManager.getState(),
          getCapabilities: () => sessionManager.getCapabilities(),
          healthCheck: () => sessionManager.healthCheck(),
          testPersistence: () => sessionManager.testSessionPersistence(),
          forceRecovery: () => sessionManager.forceRecovery(),
          exportDiagnostics: () => sessionManager.exportDiagnostics(),
          clearAllData: () => sessionManager.clearAllSessionData()
        };
      }
    }
  }, [isInitialized, sessionManager]);

  return {
    isInitialized,
    sessionManager: isInitialized ? sessionManager : null
  };
}