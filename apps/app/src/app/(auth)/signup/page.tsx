import type { Metadata } from 'next';
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
  return <SignupForm />;
}
