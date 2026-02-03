'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { analytics } from '@/lib/analytics';

/**
 * Hook to automatically track user journey events
 */
export function useAnalytics() {
  const pathname = usePathname();
  const { user } = useAuth();
  const hasTrackedPageView = useRef(false);
  const sessionStartTime = useRef<number>(Date.now());
  const questionCount = useRef(0);

  // Track page views and set up event listeners
  useEffect(() => {
    if (!hasTrackedPageView.current) {
      analytics.pageView(pathname, { userId: user?.id });
      hasTrackedPageView.current = true;
    }

    // Track exit intent
    const handleBeforeUnload = () => {
      analytics.exit('page_exit');
    };

    // Track back button usage  
    const handlePopState = () => {
      analytics.exit('back_button');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [pathname, user?.id]);

  // Reset page view tracking when pathname changes
  useEffect(() => {
    hasTrackedPageView.current = false;
  }, [pathname]);

  // Track session milestones
  useEffect(() => {
    const checkMilestones = () => {
      const sessionTime = Date.now() - sessionStartTime.current;
      analytics.milestone(questionCount.current, sessionTime);
    };

    const interval = setInterval(checkMilestones, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return {
    trackClick: (element: string, properties?: Record<string, any>) => {
      analytics.click(element, { ...properties, userId: user?.id });
    },
    
    trackQuestion: {
      generate: (properties?: Record<string, any>) => {
        analytics.question.generate({ ...properties, userId: user?.id });
      },
      complete: (correct: boolean, properties?: Record<string, any>) => {
        questionCount.current += 1;
        analytics.question.complete(correct, { 
          ...properties, 
          userId: user?.id,
          questionNumber: questionCount.current 
        });
      },
      viewSolution: (properties?: Record<string, any>) => {
        analytics.question.viewSolution({ ...properties, userId: user?.id });
      },
    },

    trackMilestone: (type: string, properties?: Record<string, any>) => {
      analytics.milestone(questionCount.current, Date.now() - sessionStartTime.current);
    }
  };
}