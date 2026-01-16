'use client';

import { useState, useEffect } from 'react';

interface SwipeHintProps {
  show: boolean;
  onDismiss: () => void;
}

export function SwipeHint({ show, onDismiss }: SwipeHintProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      // Delay showing hint
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onDismiss}
    >
      <div className="text-center p-8 max-w-xs">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-[var(--color-accent)] animate-swipe-hint"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Swipe Up</h3>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Swipe up to go to the next question after marking your answer
          </p>
        </div>

        <div className="space-y-3 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
            <span>Swipe up for next question</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[var(--color-bg-card)] flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
            <span>Tap to reveal solution</span>
          </div>
        </div>

        <button
          className="mt-8 px-8 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium tap-highlight"
          onClick={onDismiss}
        >
          Got it
        </button>
      </div>
    </div>
  );
}

// Hook to manage showing the hint only once
export function useSwipeHint() {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Check if user has seen the hint before
    const hasSeenHint = localStorage.getItem('mobile-feed-hint-seen');
    if (!hasSeenHint) {
      setShowHint(true);
    }
  }, []);

  const dismissHint = () => {
    setShowHint(false);
    localStorage.setItem('mobile-feed-hint-seen', 'true');
  };

  return { showHint, dismissHint };
}
