'use client';

import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

type ConsentStatus = 'accepted' | 'rejected' | null;

export function CookieConsent() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus | 'pending'>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      setConsentStatus(stored);
    } else {
      setConsentStatus(null);
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setConsentStatus('rejected');
    setIsVisible(false);
  };

  // Don't render if user has already made a choice or still loading
  if (consentStatus === 'pending' || consentStatus === 'accepted' || consentStatus === 'rejected') {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom duration-300"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
              We use cookies
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve your experience and analyze usage.{' '}
              <a
                href="/privacy"
                className="text-[var(--color-primary)] hover:underline"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg-hover)] transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
