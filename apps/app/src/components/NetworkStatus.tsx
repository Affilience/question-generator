'use client';

import { useState, useEffect } from 'react';
import { useSupabaseHealth } from '@/lib/supabase/health-check';

export function NetworkStatus() {
  const { health, isHealthy, checkHealth } = useSupabaseHealth();
  const [dismissed, setDismissed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Auto-check every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      checkHealth();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [checkHealth]);

  // Don't show if healthy or dismissed
  if (isHealthy || dismissed) {
    return null;
  }

  const isISPBlocking = health?.error?.includes('ISP blocking') || 
                       health?.error?.includes('Network error') ||
                       health?.error?.includes('timeout');

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg shadow-lg z-50">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-100">
              {isISPBlocking ? '🌐 Network Restriction Detected' : '⚠️ Connection Issue'}
            </h3>
            <p className="text-xs text-amber-800 dark:text-amber-200 mt-1">
              {isISPBlocking 
                ? 'Your network may be blocking our database. The app will work in offline mode.'
                : 'Having trouble connecting to our servers. Some features may be limited.'}
            </p>
            
            {showDetails && (
              <div className="mt-2 p-2 bg-amber-100 dark:bg-amber-900/30 rounded text-xs text-amber-700 dark:text-amber-300">
                <strong>Technical details:</strong> {health?.error}
                <br />
                <strong>Last checked:</strong> {health?.lastChecked.toLocaleTimeString()}
              </div>
            )}
            
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => checkHealth(true)}
                className="text-xs text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 font-medium"
              >
                Retry Connection
              </button>
              <span className="text-amber-400">•</span>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100"
              >
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
              <span className="text-amber-400">•</span>
              <button
                onClick={() => setDismissed(true)}
                className="text-xs text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100"
              >
                Dismiss
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setDismissed(true)}
            className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {isISPBlocking && (
        <div className="px-4 pb-4">
          <div className="text-xs text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 p-3 rounded">
            <strong>🛡️ Offline Mode Active:</strong><br />
            • Questions will still generate normally<br />
            • Progress saved locally on your device<br />
            • Data will sync when connection restored<br />
            • All core features remain available
          </div>
        </div>
      )}
    </div>
  );
}