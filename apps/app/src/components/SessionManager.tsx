'use client';

import { useSessionPersistence } from '@/hooks/useSessionPersistence';

/**
 * Client component that handles session persistence
 * Should be included at the root level to ensure session management is active
 */
export function SessionManager() {
  useSessionPersistence();
  return null; // This component doesn't render anything, just manages session
}