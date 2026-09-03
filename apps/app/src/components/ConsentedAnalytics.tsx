'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CONSENT_CHANGED_EVENT, hasAnalyticsConsent } from '@/lib/consent';

/**
 * Mounts the Vercel analytics scripts only once the visitor has accepted.
 *
 * They were previously mounted unconditionally in the root layout, so choosing
 * "Reject" in the cookie banner changed nothing — which made the banner
 * decorative and contradicted the privacy policy's claim that the site uses no
 * tracking cookies.
 */
export function ConsentedAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const sync = () => setConsented(hasAnalyticsConsent());
    sync();

    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    // Another tab may have made the choice.
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
