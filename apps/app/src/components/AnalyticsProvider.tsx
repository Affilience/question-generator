'use client';

import { useAnalytics } from '@/hooks/useAnalytics';

/**
 * Analytics provider that automatically tracks page views and user interactions
 * Add this to any page where you want automatic journey tracking
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useAnalytics();
  return <>{children}</>;
}