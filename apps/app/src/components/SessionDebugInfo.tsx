'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Debug component to show session persistence status
 * Only shows in development mode
 */
export function SessionDebugInfo() {
  const { user, session } = useAuth();
  const [lastCheck, setLastCheck] = useState<Date | null>(null);
  const [sessionExpiry, setSessionExpiry] = useState<Date | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const supabase = createClient();
    
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setLastCheck(new Date());
      if (session?.expires_at) {
        setSessionExpiry(new Date(session.expires_at * 1000));
      }
    };

    // Initial check
    checkSession();

    // Check every minute in dev mode
    const interval = setInterval(checkSession, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs max-w-xs">
      <div className="font-bold mb-2">Session Debug</div>
      <div>User: {user ? '✅ Logged in' : '❌ Not logged in'}</div>
      <div>Session: {session ? '✅ Active' : '❌ None'}</div>
      <div>Last Check: {lastCheck?.toLocaleTimeString() || 'Never'}</div>
      <div>Expires: {sessionExpiry?.toLocaleString() || 'Unknown'}</div>
      <div className="text-yellow-400 mt-2">
        Try closing/reopening browser to test persistence
      </div>
    </div>
  );
}