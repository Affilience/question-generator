'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';
import { EmbeddedCheckoutModal, useEmbeddedCheckout } from '@/components/stripe/EmbeddedCheckout';

type BillingInterval = 'monthly' | 'annual';

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface Plan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: { monthly: number; annual: number };
  priceKey: { monthly: string | null; annual: string | null };
  features: PlanFeature[];
  cta: string;
  ctaLink?: string;
  popular: boolean;
  color: string;
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Try & Trust',
    description: 'Perfect for trying out the platform',
    price: { monthly: 0, annual: 0 },
    priceKey: { monthly: null, annual: null },
    features: [
      { text: '15 questions per day', included: true },
      { text: 'All subjects (GCSE & A-Level)', included: true },
      { text: 'Full worked solutions', included: true },
      { text: 'Mixed difficulty only', included: true },
      { text: 'Difficulty control', included: false },
      { text: 'Custom past papers', included: false },
      { text: 'Save question history', included: false },
    ],
    cta: 'Get Started',
    ctaLink: '/gcse',
    popular: false,
    color: 'gray',
  },
  {
    id: 'student_plus',
    name: 'Student Plus',
    tagline: 'More Practice',
    description: 'For dedicated revision',
    price: { monthly: 4.99, annual: 39.99 },
    priceKey: { monthly: 'student_plus_monthly', annual: 'student_plus_annual' },
    features: [
      { text: '50 questions per day', included: true, highlight: true },
      { text: 'Full difficulty control', included: true, highlight: true },
      { text: 'Save question history', included: true },
      { text: 'Bookmark questions', included: true },
      { text: 'Custom past papers', included: false },
    ],
    cta: 'Get Started',
    popular: false,
    color: 'blue',
  },
  {
    id: 'exam_pro',
    name: 'Exam Pro',
    tagline: 'Ultimate Revision',
    description: 'Everything you need for exam success',
    price: { monthly: 9.99, annual: 79.99 },
    priceKey: { monthly: 'exam_pro_monthly', annual: 'exam_pro_annual' },
    features: [
      { text: 'Unlimited questions', included: true, highlight: true },
      { text: '7 custom papers per week', included: true, highlight: true },
      { text: 'Full difficulty control', included: true },
      { text: 'Save question history', included: true },
      { text: 'Bookmark questions', included: true },
      { text: 'Timed exam mode', included: true },
      { text: 'PDF downloads', included: true },
    ],
    cta: 'Get Started',
    popular: true,
    color: 'purple',
  },
];

// Small component that uses useSearchParams - isolated in its own Suspense
function CanceledNotice() {
  const searchParams = useSearchParams();
  const canceled = searchParams.get('canceled');

  if (!canceled) return null;

  return (
    <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-center">
      Checkout was canceled. Feel free to try again when you&apos;re ready.
    </div>
  );
}

function PricingContent() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('annual');
  const { user } = useAuth();
  const { tier, subscription, openPortal } = useSubscription();
  const { checkoutState, openCheckout, closeCheckout } = useEmbeddedCheckout();

  const handleSelectPlan = (plan: Plan, priceKey: string | null) => {
    if (!priceKey) return;

    const price = billingInterval === 'annual' ? plan.price.annual : plan.price.monthly;
    openCheckout({
      priceKey,
      planName: plan.name,
      price: `£${price}`,
      interval: billingInterval === 'annual' ? 'year' : 'month',
    });
  };

  const getAnnualSavings = (monthly: number, annual: number) => {
    if (monthly === 0) return null;
    const monthlyCost = monthly * 12;
    const savings = Math.round(((monthlyCost - annual) / monthlyCost) * 100);
    return savings;
  };

  return (
    <>
      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-1 flex">
          <button
            onClick={() => setBillingInterval('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              billingInterval === 'monthly'
                ? 'bg-white text-[#0a0a0a]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval('annual')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              billingInterval === 'annual'
                ? 'bg-white text-[#0a0a0a]'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Annual
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
              Save up to 35%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const price = plan.price[billingInterval];
          const priceKey = plan.priceKey[billingInterval];
          const isCurrentPlan = tier === plan.id;
          const savings = getAnnualSavings(plan.price.monthly, plan.price.annual);

          return (
            <div
              key={plan.id}
              className={`relative bg-[#111] border rounded-2xl p-8 ${
                plan.popular
                  ? plan.color === 'purple'
                    ? 'border-purple-500/50 ring-1 ring-purple-500/20'
                    : 'border-blue-500/50 ring-1 ring-blue-500/20'
                  : 'border-white/[0.06]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`${plan.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'} text-white text-xs font-medium px-3 py-1 rounded-full`}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="text-sm text-white/40">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {price === 0 ? 'Free' : `£${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-white/40">
                      /{billingInterval === 'annual' ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                {billingInterval === 'annual' && savings && (
                  <p className="text-sm text-green-400 mt-1">
                    Save {savings}% vs monthly
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm mb-6">{plan.description}</p>

              {/* CTA */}
              {isCurrentPlan ? (
                <button
                  disabled
                  className="w-full py-3 rounded-lg font-medium bg-white/10 text-white/60 cursor-not-allowed"
                >
                  Current Plan
                </button>
              ) : plan.ctaLink ? (
                <Link
                  href={plan.ctaLink}
                  className="block w-full py-3 rounded-lg font-medium text-center bg-white/[0.06] text-white hover:bg-white/[0.1] transition-colors"
                >
                  {plan.cta}
                </Link>
              ) : (
                <button
                  onClick={() => handleSelectPlan(plan, priceKey)}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? plan.color === 'purple'
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-white text-[#0a0a0a] hover:bg-white/90'
                  }`}
                >
                  {plan.cta}
                </button>
              )}

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <svg
                        className={`w-5 h-5 ${
                          feature.highlight ? 'text-green-400' : 'text-white/40'
                        } flex-shrink-0 mt-0.5`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-white/20 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? feature.highlight
                            ? 'text-white font-medium'
                            : 'text-white/80'
                          : 'text-white/30'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Embedded Checkout Modal */}
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
    </>
  );
}

export default function PricingPageContent() {
  const { user } = useAuth();
  const { subscription, openPortal } = useSubscription();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header - always rendered */}
      <header className="border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-white">
              Past Papers
            </Link>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                  {subscription && (
                    <button
                      onClick={() => openPortal()}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Manage Subscription
                    </button>
                  )}
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-white text-[#0a0a0a] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Canceled notice - wrapped in its own Suspense */}
        <Suspense fallback={null}>
          <CanceledNotice />
        </Suspense>

        {/* Hero with H1 - always rendered, outside Suspense */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your revision needs. All plans include full access to every subject and exam board.
          </p>
        </div>

        {/* Dynamic pricing content */}
        <PricingContent />
      </main>

      {/* Footer - always rendered */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Past Papers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
