'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';

type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'sent'; purchaseEmail: string }
  | { status: 'already_subscribed' }
  | { status: 'error'; message: string };

export default function LinkPurchasePage() {
  const { user, loading: authLoading } = useAuth();
  const [purchaseEmail, setPurchaseEmail] = useState('');
  const [state, setState] = useState<FormState>({ status: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: 'submitting' });

    try {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      const response = await fetch('/api/subscription/request-claim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(session?.access_token && { Authorization: `Bearer ${session.access_token}` }),
        },
        body: JSON.stringify({ purchaseEmail }),
      });
      const result = await response.json();

      if (!response.ok) {
        setState({ status: 'error', message: result.error || 'Something went wrong. Please try again.' });
        return;
      }

      if (result.alreadySubscribed) {
        setState({ status: 'already_subscribed' });
      } else {
        setState({ status: 'sent', purchaseEmail });
      }
    } catch (error) {
      console.error('Failed to request claim:', error);
      setState({ status: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Link a purchase</h1>
          <p className="text-white/50 text-sm mb-6">
            Bought a subscription but this account doesn&apos;t show it? That usually means
            checkout used a different email — for example, a parent paid. Enter the email
            used at checkout and we&apos;ll send it a confirmation link.
          </p>

          {authLoading ? (
            <div className="animate-pulse text-white/60 py-8 text-center">Loading...</div>
          ) : !user ? (
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-3 rounded-lg text-sm">
                Sign in to the account that should receive the subscription first.
              </div>
              <Link
                href="/login?redirect=/subscription/link-purchase"
                className="block w-full py-3 bg-white text-[#0a0a0a] rounded-lg font-medium hover:bg-white/90 transition-colors text-center"
              >
                Sign in
              </Link>
              <p className="text-white/40 text-sm text-center">
                No account yet?{' '}
                <Link href="/signup" className="text-blue-400 hover:text-blue-300">
                  Sign up
                </Link>
              </p>
            </div>
          ) : state.status === 'sent' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">Check that inbox</h2>
              <p className="text-white/60 text-sm">
                If an unclaimed purchase exists for{' '}
                <span className="text-white">{state.purchaseEmail}</span>, we&apos;ve emailed it a
                confirmation link. Once the purchaser clicks it, the subscription activates
                on <span className="text-white">{user.email}</span>. The link is valid for 24
                hours — remind them to check spam.
              </p>
            </div>
          ) : state.status === 'already_subscribed' ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg text-sm">
              This account already has an active subscription — there&apos;s nothing to link.
              If something still looks wrong, contact{' '}
              <a href="mailto:support@past-papers.co.uk" className="underline">
                support@past-papers.co.uk
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white/60">
                Subscription will activate on: <span className="text-white">{user.email}</span>
              </div>

              <div>
                <label htmlFor="purchaseEmail" className="block text-sm text-white/60 mb-2">
                  Email used at checkout
                </label>
                <input
                  id="purchaseEmail"
                  type="email"
                  value={purchaseEmail}
                  onChange={(e) => setPurchaseEmail(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="parent@example.com"
                />
              </div>

              {state.status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
                  {state.message}
                </div>
              )}

              <button
                type="submit"
                disabled={state.status === 'submitting'}
                className="w-full bg-white text-[#0a0a0a] py-3 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.status === 'submitting' ? 'Sending...' : 'Send confirmation link'}
              </button>
            </form>
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
