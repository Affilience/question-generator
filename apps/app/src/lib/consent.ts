/**
 * Analytics consent.
 *
 * The cookie banner used to write a value that nothing ever read: Vercel
 * Analytics, Speed Insights, Sentry replay and our own journey tracking all
 * fired identically after "Reject", while the privacy policy claimed "We do
 * not use tracking cookies". This module is the single place that decides.
 *
 * Default is DENIED until the visitor chooses, so nothing non-essential runs
 * before consent.
 */

export const COOKIE_CONSENT_KEY = 'cookie-consent';

export type ConsentStatus = 'accepted' | 'rejected' | null;

/** Broadcast on the window when the visitor makes or changes their choice. */
export const CONSENT_CHANGED_EVENT = 'pp-consent-changed';

export function readConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    return stored === 'accepted' || stored === 'rejected' ? stored : null;
  } catch {
    // Storage blocked - treat as "not yet consented".
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return readConsent() === 'accepted';
}

export function writeConsent(status: Exclude<ConsentStatus, null>): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
  } catch {
    // Storage blocked - the choice applies for this page view only.
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: status }));
  }
}
