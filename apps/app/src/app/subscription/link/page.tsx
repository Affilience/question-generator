'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ClaimInfo {
  planName: string;
  purchaseDate: string;
  accountEmail: string;
}

type PageState =
  | { status: 'loading' }
  | { status: 'confirm'; info: ClaimInfo }
  | { status: 'approving'; info: ClaimInfo }
  | { status: 'linked'; info: ClaimInfo }
  | { status: 'invalid'; reason: string };

const REASON_MESSAGES: Record<string, string> = {
  invalid: 'This link is not valid. It may have already been used, or the address was copied incompletely.',
  expired: 'This link has expired — approval links are valid for 24 hours. Ask the account holder to request a new one.',
  already_claimed: 'This purchase has already been linked to an account, so there is nothing left to do.',
};

function LinkPurchaseContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [state, setState] = useState<PageState>(() =>
    token ? { status: 'loading' } : { status: 'invalid', reason: 'invalid' }
  );

  useEffect(() => {
    if (!token) return;

    const fetchInfo = async () => {
      try {
        const response = await fetch(
          `/api/subscription/claim-info?token=${encodeURIComponent(token)}`
        );
        const result = await response.json();
        if (result.valid) {
          setState({
            status: 'confirm',
            info: {
              planName: result.planName,
              purchaseDate: result.purchaseDate,
              accountEmail: result.accountEmail,
            },
          });
        } else {
          setState({ status: 'invalid', reason: result.reason || 'invalid' });
        }
      } catch (error) {
        console.error('Failed to load claim info:', error);
        setState({ status: 'invalid', reason: 'invalid' });
      }
    };

    fetchInfo();
  }, [token]);

  const handleApprove = async () => {
    if (state.status !== 'confirm' || !token) return;
    const { info } = state;
    setState({ status: 'approving', info });

    try {
      const response = await fetch('/api/subscription/approve-claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const result = await response.json();

      if (result.linked) {
        setState({ status: 'linked', info });
      } else {
        setState({ status: 'invalid', reason: result.reason || 'invalid' });
      }
    } catch (error) {
      console.error('Failed to approve claim:', error);
      setState({ status: 'confirm', info });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 text-center">
          {state.status === 'loading' && (
            <>
              <div className="animate-pulse text-white/60 py-12">Checking your link...</div>
            </>
          )}

          {(state.status === 'confirm' || state.status === 'approving') && (
            <>
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-4">Link your purchase?</h1>
              <p className="text-white/60 mb-6">
                Your <span className="text-white">{state.info.planName}</span> subscription,
                purchased on{' '}
                {new Date(state.info.purchaseDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                , will be activated on the account{' '}
                <span className="text-white">{state.info.accountEmail}</span>.
              </p>
              <button
                onClick={handleApprove}
                disabled={state.status === 'approving'}
                className="block w-full py-3 bg-white text-[#0a0a0a] rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.status === 'approving' ? 'Linking...' : `Link to ${state.info.accountEmail}`}
              </button>
              <p className="text-white/40 text-sm mt-4">
                Don&apos;t recognise this account? Close this page and your purchase stays
                exactly where it is.
              </p>
            </>
          )}

          {state.status === 'linked' && (
            <>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-4">All done!</h1>
              <p className="text-white/60 mb-8">
                The {state.info.planName} subscription is now active on{' '}
                <span className="text-white">{state.info.accountEmail}</span>. They may need
                to refresh the page to see it.
              </p>
              <Link
                href="/"
                className="block w-full py-3 bg-white/[0.06] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-colors"
              >
                Back to Past Papers
              </Link>
            </>
          )}

          {state.status === 'invalid' && (
            <>
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-4">Link not available</h1>
              <p className="text-white/60 mb-8">
                {REASON_MESSAGES[state.reason] || REASON_MESSAGES.invalid}
              </p>
            </>
          )}
        </div>

        <p className="text-center text-white/30 text-sm mt-6">
          Need help?{' '}
          <a href="mailto:support@past-papers.co.uk" className="text-blue-400 hover:text-blue-300">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}

export default function LinkPurchaseApprovalPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <div className="animate-pulse text-white/60">Loading...</div>
        </div>
      }
    >
      <LinkPurchaseContent />
    </Suspense>
  );
}
