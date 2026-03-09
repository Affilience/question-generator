import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SignupForm } from './SignupForm';

export const metadata: Metadata = {
  title: 'Create Account | Past Papers',
  description: 'Create a free Past Papers account to track your GCSE and A-Level revision progress, bookmark questions, and build custom practice papers.',
  robots: {
    index: false, // Don't index signup pages
    follow: true,
  },
};

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-pulse text-white/60">Loading...</div>
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
