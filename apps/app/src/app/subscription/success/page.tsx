'use client';

import { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';

function SubscriptionSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { refreshSubscription, tier, subscription } = useSubscription();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSubscriptionSetup = async () => {
      try {
        // First refresh to check if webhook already processed
        await refreshSubscription();
        
        // Wait a moment for UI to update
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // If still no subscription after webhook processing, try fallback
        if (tier === 'free' && sessionId && user) {
          console.log('No subscription found after webhook processing, trying fallback...');
          
          const response = await fetch('/api/subscription/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              sessionId, 
              userId: user.id 
            })
          });

          if (response.ok) {
            const result = await response.json();
            console.log('Fallback API result:', result);
            
            // Refresh subscription data after fallback creation
            await refreshSubscription();
          } else {
            console.error('Fallback subscription creation failed');
          }
        }
      } catch (error) {
        console.error('Error setting up subscription:', error);
      } finally {
        setLoading(false);
      }
    };

    // Give Stripe webhook a moment to process first
    const timer = setTimeout(handleSubscriptionSetup, 2000);
    return () => clearTimeout(timer);
  }, [refreshSubscription, sessionId, user, tier]);

  const tierNames: Record<string, string> = {
    free: 'Free',
    student_plus: 'Student Plus',
    exam_pro: 'Exam Pro',
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 text-center">
          {loading ? (
            <>
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-400 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold text-white mb-4">
                Processing your subscription...
              </h1>
              <p className="text-white/60">
                Please wait while we confirm your payment.
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-400"
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
              </div>
              <h1 className="text-2xl font-semibold text-white mb-4">
                Welcome to {tierNames[tier] || 'your plan'}!
              </h1>
              <p className="text-white/60 mb-8">
                Your subscription is now active. You have full access to all the features included in your plan.
              </p>

              
              <div className="space-y-3">
                <Link
                  href="/gcse"
                  className="block w-full py-3 bg-white text-[#0a0a0a] rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Start Practicing
                </Link>
                <Link
                  href="/dashboard"
                  className="block w-full py-3 bg-white/[0.06] text-white rounded-lg font-medium hover:bg-white/[0.1] transition-colors"
                >
                  Go to Dashboard
                </Link>
              </div>
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

export default function SubscriptionSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-pulse text-white/60">Loading...</div>
      </div>
    }>
      <SubscriptionSuccessContent />
    </Suspense>
  );
}
