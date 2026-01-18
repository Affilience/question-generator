'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { EmbeddedCheckoutModal, useEmbeddedCheckout } from '@/components/stripe/EmbeddedCheckout';

const tiers = [
  {
    name: 'Free',
    price: '0',
    priceKey: null,
    description: 'Get started with limited practice',
    features: [
      '5 questions per day',
      'Random difficulty only',
      'Full solutions included',
      'All subjects available',
    ],
    cta: 'Continue Free',
    highlighted: false,
  },
  {
    name: 'Student+',
    price: '4.99',
    priceKey: 'student_plus_monthly',
    description: 'Unlimited practice for serious students',
    features: [
      'Unlimited questions',
      'Choose your difficulty',
      'Progress tracking',
      '3 practice papers/week',
      'Priority support',
    ],
    cta: 'Start 7-day Free Trial',
    highlighted: true,
  },
];

const levels = [
  {
    id: 'gcse',
    name: 'GCSE',
    description: 'Years 10-11 (ages 14-16)',
    href: '/gcse',
  },
  {
    id: 'a-level',
    name: 'A-Level',
    description: 'Years 12-13 (ages 16-18)',
    href: '/a-level',
  },
];

export default function WelcomePage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { tier, loading: subLoading } = useSubscription();
  const { checkoutState, openCheckout, closeCheckout } = useEmbeddedCheckout();
  const [step, setStep] = useState<'pricing' | 'level'>('pricing');

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/signup');
    }
  }, [user, authLoading, router]);

  // If user already has a paid subscription, skip to level selection
  useEffect(() => {
    if (!subLoading && tier !== 'free') {
      setStep('level');
    }
  }, [tier, subLoading]);

  if (authLoading || subLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  const displayName = user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'there';

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-2xl font-semibold text-white">
            Past Papers
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-3">
            Welcome, {displayName}!
          </h1>
          <p className="text-white/50 text-lg">
            {step === 'pricing'
              ? "Choose how you'd like to practice"
              : "Select your qualification level to get started"
            }
          </p>
        </div>

        {step === 'pricing' ? (
          <>
            {/* Pricing Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {tiers.map((tierOption) => (
                <div
                  key={tierOption.name}
                  className={`relative bg-[#111] rounded-2xl border p-6 sm:p-8 transition-all ${
                    tierOption.highlighted
                      ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                      : 'border-white/[0.06]'
                  }`}
                >
                  {tierOption.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-white mb-2">{tierOption.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-3xl font-bold text-white">£{tierOption.price}</span>
                    {tierOption.price !== '0' && (
                      <span className="text-white/40">/month</span>
                    )}
                  </div>
                  <p className="text-white/50 text-sm mb-6">{tierOption.description}</p>

                  <ul className="space-y-3 mb-8">
                    {tierOption.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                        <svg className="w-5 h-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {tierOption.priceKey ? (
                    <button
                      onClick={() => {
                        openCheckout({
                          priceKey: tierOption.priceKey!,
                          planName: tierOption.name,
                          price: `£${tierOption.price}`,
                          interval: 'month',
                        });
                      }}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      {tierOption.cta}
                    </button>
                  ) : (
                    <button
                      onClick={() => setStep('level')}
                      className="w-full bg-white/[0.06] hover:bg-white/[0.1] text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      {tierOption.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-white/30 text-sm">
              You can upgrade or change your plan anytime from your dashboard
            </p>
          </>
        ) : (
          <>
            {/* Level Selection */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {levels.map((level) => (
                <Link
                  key={level.id}
                  href={level.href}
                  className="group bg-[#111] rounded-2xl border border-white/[0.06] p-8 text-center transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-white/50 mb-6">{level.description}</p>
                  <div className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                    Browse subjects
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep('pricing')}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                ← Back to plan selection
              </button>
            </div>
          </>
        )}

        {/* Skip link */}
        <div className="text-center mt-8">
          <Link
            href="/dashboard"
            className="text-white/30 hover:text-white/50 text-sm transition-colors"
          >
            Skip and go to dashboard
          </Link>
        </div>
      </div>

      {/* Stripe Checkout Modal */}
      {checkoutState?.isOpen && (
        <EmbeddedCheckoutModal
          priceKey={checkoutState.priceKey}
          planName={checkoutState.planName}
          price={checkoutState.price}
          interval={checkoutState.interval}
          userId={user?.id}
          onClose={closeCheckout}
          onSuccess={() => {
            closeCheckout();
            window.location.href = '/subscription/success';
          }}
        />
      )}
    </div>
  );
}
