import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Past Papers - AI-generated exam practice questions.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert prose-neutral max-w-none">
          <p className="text-white/60 text-lg mb-8">
            Last updated: January 2026
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <div className="text-white/60 space-y-4">
              <p>
                By accessing or using Past Papers, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our service.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <div className="text-white/60 space-y-4">
              <p>
                Past Papers provides AI-generated exam practice questions for GCSE and A-Level students.
                Our service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-generated practice questions across multiple subjects</li>
                <li>Step-by-step solutions and mark schemes</li>
                <li>Progress tracking and learning analytics</li>
                <li>Custom practice paper generation (subscription feature)</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <div className="text-white/60 space-y-4">
              <p>
                To access certain features, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorised use</li>
              </ul>
              <p className="mt-4">
                You must be at least 14 years old to create an account. Users under 18 should have
                parental consent.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">4. Subscriptions and Payments</h2>
            <div className="text-white/60 space-y-4">
              <p>
                <strong className="text-white/80">Free Tier:</strong> Limited to 15 questions per day with random difficulty.
              </p>
              <p>
                <strong className="text-white/80">Paid Subscriptions:</strong> Billed monthly or annually as indicated at checkout.
                Subscriptions auto-renew unless cancelled before the renewal date.
              </p>
              <p>
                <strong className="text-white/80">Refunds:</strong> We offer refunds within 7 days of purchase if you are not
                satisfied with the service. Contact us at taylor@avarismarketing.com.
              </p>
              <p>
                <strong className="text-white/80">Cancellation:</strong> You can cancel your subscription at any time from your
                dashboard. You will retain access until the end of your current billing period.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">5. Acceptable Use</h2>
            <div className="text-white/60 space-y-4">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Redistribute, sell, or commercially exploit our content without permission</li>
                <li>Use automated systems to scrape or extract questions</li>
                <li>Share your account credentials with others</li>
                <li>Use generated questions for commercial tutoring without a business licence</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <div className="text-white/60 space-y-4">
              <p>
                All content, including AI-generated questions, solutions, and mark schemes, is owned
                by Past Papers or its licensors. You may use generated content for personal educational
                purposes only.
              </p>
              <p>
                Exam board names (AQA, Edexcel, OCR) are trademarks of their respective owners.
                Past Papers is not affiliated with, endorsed by, or connected to any exam board.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer</h2>
            <div className="text-white/60 space-y-4">
              <p>
                <strong className="text-white/80">AI-Generated Content:</strong> Our questions are generated by AI and
                designed to match exam board styles. However, they are practice materials only and
                should not be considered official past papers.
              </p>
              <p>
                <strong className="text-white/80">No Guarantee of Results:</strong> While we aim to help you improve,
                we cannot guarantee specific exam results or grades.
              </p>
              <p>
                <strong className="text-white/80">Accuracy:</strong> We strive for accuracy but AI-generated content
                may occasionally contain errors. Please report any issues to help us improve.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <div className="text-white/60 space-y-4">
              <p>
                To the maximum extent permitted by law, Past Papers shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including loss
                of profits, data, or other intangible losses.
              </p>
              <p>
                Our total liability shall not exceed the amount you paid to us in the 12 months
                preceding the claim.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <div className="text-white/60 space-y-4">
              <p>
                We may modify these terms at any time. We will notify users of significant changes
                via email or through the service. Continued use after changes constitutes acceptance
                of the new terms.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">10. Governing Law</h2>
            <div className="text-white/60 space-y-4">
              <p>
                These terms are governed by the laws of England and Wales. Any disputes shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
            <div className="text-white/60 space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:taylor@avarismarketing.com" className="text-blue-400 hover:text-blue-300">
                  taylor@avarismarketing.com
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
