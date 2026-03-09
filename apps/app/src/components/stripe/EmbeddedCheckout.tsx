'use client';

import { useState, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('[Stripe] Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable');
}

const stripePromise = stripePublishableKey 
  ? loadStripe(stripePublishableKey) 
  : null;

interface EmbeddedCheckoutModalProps {
  priceKey: string;
  planName: string;
  price: string;
  interval?: string;
  userId?: string | null;
  onClose: () => void;
  onSuccess?: () => void;
}

export function EmbeddedCheckoutModal({
  priceKey,
  planName,
  price,
  interval,
  userId,
  onClose,
  onSuccess,
}: EmbeddedCheckoutModalProps) {
  const [error, setError] = useState<string | null>(null);

  const fetchClientSecret = useCallback(async () => {
    try {
      console.log('[Checkout] Starting checkout session creation', { priceKey, userId });
      
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceKey,
          userId,
          returnUrl: window.location.origin,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error('[Checkout] Failed to create session:', data);
        throw new Error(data.error || `Failed to create checkout (${response.status})`);
      }

      const data = await response.json();
      console.log('[Checkout] Session created successfully', { 
        hasClientSecret: !!data.clientSecret,
        sessionId: data.sessionId 
      });
      
      if (!data.clientSecret) {
        throw new Error('No client secret returned from checkout session');
      }
      
      return data.clientSecret;
    } catch (err) {
      console.error('[Checkout] Error in fetchClientSecret:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong');
      throw err;
    }
  }, [priceKey, userId]);

  const options = {
    fetchClientSecret,
    onComplete: () => {
      onSuccess?.();
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-semibold text-white">{planName}</h2>
            <p className="text-sm text-white/60">
              {price}{interval && <span className="text-white/40">/{interval}</span>}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Checkout Form */}
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          {error ? (
            <div className="text-center py-8">
              <p className="text-red-400 mb-4">{error}</p>
              <button
                onClick={() => setError(null)}
                className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Try again
              </button>
            </div>
          ) : !stripePromise ? (
            <div className="text-center py-8">
              <p className="text-red-400 mb-4">
                Payment system is not configured. Please contact support.
              </p>
              <p className="text-xs text-white/40">
                Missing Stripe configuration
              </p>
            </div>
          ) : (
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
              <EmbeddedCheckout className="stripe-checkout" />
            </EmbeddedCheckoutProvider>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-center gap-4 text-xs text-white/40">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure checkout
            </div>
            <span>Powered by Stripe</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .stripe-checkout {
          --colorPrimary: #3b82f6;
          --colorBackground: #111111;
          --colorText: #ffffff;
          --colorDanger: #ef4444;
        }

        /* Custom scrollbar for checkout */
        .stripe-checkout::-webkit-scrollbar {
          width: 6px;
        }
        .stripe-checkout::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .stripe-checkout::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}

/**
 * Hook to manage embedded checkout state
 */
export function useEmbeddedCheckout() {
  const [checkoutState, setCheckoutState] = useState<{
    isOpen: boolean;
    priceKey: string;
    planName: string;
    price: string;
    interval?: string;
  } | null>(null);

  const openCheckout = useCallback((params: {
    priceKey: string;
    planName: string;
    price: string;
    interval?: string;
  }) => {
    setCheckoutState({ isOpen: true, ...params });
  }, []);

  const closeCheckout = useCallback(() => {
    setCheckoutState(null);
  }, []);

  return {
    checkoutState,
    openCheckout,
    closeCheckout,
    isOpen: checkoutState?.isOpen ?? false,
  };
}
