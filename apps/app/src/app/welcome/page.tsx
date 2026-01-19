'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';

export default function WelcomePage() {
  const { user, loading } = useAuth();
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.user_metadata?.display_name || user.email?.split('@')[0] || 'there');
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Welcome Card */}
        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 text-center mb-6">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">
            Welcome, {displayName}!
          </h1>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
            Your account is all set up. You&apos;re ready to start practicing with unlimited exam-style questions.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/[0.06]">
            <div>
              <div className="text-2xl font-bold text-white">12+</div>
              <div className="text-white/40 text-sm">Subjects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/40 text-sm">Topics</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">AI</div>
              <div className="text-white/40 text-sm">Generated</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/start"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
            >
              Start Practicing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl font-medium hover:bg-white/[0.06] transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        {/* Upgrade Prompt */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white mb-1">
                Unlock Unlimited Practice
              </h2>
              <p className="text-white/60 text-sm mb-4">
                Free users get 5 questions per day. Upgrade to Student Plus for unlimited questions,
                difficulty control, and saved progress tracking.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm"
                >
                  View Plans
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className="text-white/40 text-sm">
                  From just £4.99/month
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-[#111] border border-white/[0.06] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-medium text-white mb-1">Topic Practice</h3>
            <p className="text-white/40 text-sm">Practice specific topics with targeted questions</p>
          </div>
          <div className="bg-[#111] border border-white/[0.06] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-medium text-white mb-1">Full Solutions</h3>
            <p className="text-white/40 text-sm">Step-by-step worked solutions for every question</p>
          </div>
          <div className="bg-[#111] border border-white/[0.06] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-medium text-white mb-1">Track Progress</h3>
            <p className="text-white/40 text-sm">Monitor your improvement over time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
