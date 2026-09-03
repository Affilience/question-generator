'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updatePassword, session, loading: authLoading } = useAuth();
  const router = useRouter();
  // Whether the reset link produced a usable session. The link is single-use
  // and device-bound (PKCE), so opening it in a different browser, or after it
  // has expired, establishes nothing. Previously the form was shown anyway and
  // the user only found out after typing a new password twice, at which point
  // they were shown the raw message "Auth session missing!" with no way back.
  const [linkState, setLinkState] = useState<'checking' | 'valid' | 'invalid'>('checking');

  useEffect(() => {
    if (authLoading) return;
    if (session) {
      setLinkState('valid');
      return;
    }
    // Supabase parses the URL fragment asynchronously on mount; give it a
    // moment before concluding the link is dead.
    const timer = setTimeout(() => {
      setLinkState((current) => (current === 'checking' ? 'invalid' : current));
    }, 2500);
    return () => clearTimeout(timer);
  }, [authLoading, session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    const { error } = await updatePassword(password);

    if (error) {
      setError(error);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-semibold text-white">
              Past Papers
            </Link>
          </div>

          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-white mb-4">Password updated!</h1>
            <p className="text-white/60 mb-6">
              Your password has been successfully reset. Redirecting you to sign in...
            </p>
            <Link
              href="/login"
              className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
            >
              Sign in now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (linkState === 'checking') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-white/60">Checking your reset link…</p>
        </div>
      </div>
    );
  }

  if (linkState === 'invalid') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="text-2xl font-semibold text-white">
              Past Papers
            </Link>
          </div>

          <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 text-center">
            <h1 className="text-2xl font-semibold text-white mb-3">This link has expired</h1>
            <p className="text-white/60 mb-6">
              Password reset links can only be used once, and only in the browser
              that requested them. Ask for a new one and open it on this device.
            </p>
            <Link
              href="/forgot-password"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg transition-colors"
            >
              Send a new link
            </Link>
            <p className="mt-6 text-sm text-white/40">
              <Link href="/login" className="hover:text-white/70 transition-colors">
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-semibold text-white">
            Past Papers
          </Link>
          <p className="text-white/50 mt-2">Create a new password</p>
        </div>

        <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Reset your password</h1>
          <p className="text-white/60 mb-6">
            Enter your new password below.
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm text-white/60 mb-2">
                New password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm text-white/60 mb-2">
                Confirm new password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="new-password"
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-[#0a0a0a] py-3 rounded-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating...' : 'Update password'}
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors">
              Back to sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
