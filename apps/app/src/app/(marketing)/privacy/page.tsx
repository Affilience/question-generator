import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Past Papers - AI-generated exam practice questions.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 h-14 flex items-center">
          <Link
            href="/"
            className="font-semibold text-lg text-white hover:text-white/80 transition-colors"
          >
            Past Papers
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-neutral max-w-none">
          <p className="text-white/60 text-lg mb-8">
            Last updated: January 2026
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <div className="text-white/60 space-y-4">
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white/80">Account Information:</strong> Email address, display name when you create an account</li>
                <li><strong className="text-white/80">Usage Data:</strong> Questions generated, topics practiced, progress data</li>
                <li><strong className="text-white/80">Payment Information:</strong> Processed securely by Stripe - we do not store card details</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <div className="text-white/60 space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Track your learning progress and suggest areas for improvement</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important updates about your account or the service</li>
                <li>Respond to your comments, questions, and support requests</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">3. Data Storage and Security</h2>
            <div className="text-white/60 space-y-4">
              <p>
                Your data is stored securely using Supabase, which provides enterprise-grade security
                with encryption at rest and in transit. We implement appropriate technical and
                organisational measures to protect your personal data.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <div className="text-white/60 space-y-4">
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-white/80">Supabase:</strong> Database and authentication</li>
                <li><strong className="text-white/80">Stripe:</strong> Payment processing</li>
                <li><strong className="text-white/80">OpenAI:</strong> AI question generation (no personal data shared)</li>
                <li><strong className="text-white/80">Vercel:</strong> Hosting</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <div className="text-white/60 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:support@pastpapers.co" className="text-blue-400 hover:text-blue-300">
                  support@pastpapers.co
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">6. Cookies</h2>
            <div className="text-white/60 space-y-4">
              <p>
                We use essential cookies to maintain your session and remember your preferences.
                We do not use tracking cookies or share data with advertising networks.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">7. Children&apos;s Privacy</h2>
            <div className="text-white/60 space-y-4">
              <p>
                Our service is designed for students aged 14 and above. Users under 18 should have
                parental consent before creating an account. We do not knowingly collect personal
                information from children under 13.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
            <div className="text-white/60 space-y-4">
              <p>
                We may update this privacy policy from time to time. We will notify you of any
                changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">9. Contact Us</h2>
            <div className="text-white/60 space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:support@pastpapers.co" className="text-blue-400 hover:text-blue-300">
                  support@pastpapers.co
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
