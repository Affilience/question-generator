'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '10 questions per day',
      'All subjects available',
      'Basic progress tracking',
      'Step-by-step solutions',
    ],
    cta: 'Get Started',
    href: '/gcse',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '4.99',
    period: 'month',
    description: 'Unlimited practice for serious students',
    features: [
      'Unlimited questions',
      'All subjects & exam boards',
      'Advanced progress analytics',
      'Step-by-step solutions',
      'Paper builder',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    href: '/gcse',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro Annual',
    price: '29.99',
    period: 'year',
    description: 'Best value - save 50%',
    features: [
      'Everything in Pro',
      '50% discount',
      'PDF export',
      'Offline access (coming soon)',
    ],
    cta: 'Start Free Trial',
    href: '/gcse',
    highlighted: false,
    badge: 'Best Value',
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: 'rgba(0,0,0,0.8)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 600, fontSize: 20, color: '#f5f5f7', textDecoration: 'none' }}>
            Past Papers
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link href="/#features" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>Features</Link>
            <Link href="/#subjects" style={{ fontSize: 12, color: 'rgba(245,245,247,0.8)', textDecoration: 'none' }}>Subjects</Link>
            <Link href="/pricing" style={{ fontSize: 12, color: '#f5f5f7', textDecoration: 'none', fontWeight: 500 }}>Pricing</Link>
          </div>
          <Link
            href="/gcse"
            style={{
              backgroundColor: '#f5f5f7',
              color: '#1d1d1f',
              padding: '8px 16px',
              borderRadius: 980,
              fontSize: 14,
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-block',
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 80 }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#86868b', marginBottom: 16 }}
            >
              Pricing
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 600,
                color: '#f5f5f7',
                marginBottom: 24,
                letterSpacing: '-0.03em'
              }}
            >
              Simple pricing.
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #0071e3, #5856d6, #af52de)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Unlimited practice.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#86868b', maxWidth: 560, margin: '0 auto' }}
            >
              Start free, upgrade when you need unlimited questions. No hidden fees.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ paddingBottom: 120 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'stretch' }}
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                style={{
                  backgroundColor: plan.highlighted ? '#1d1d1f' : 'transparent',
                  border: plan.highlighted ? '2px solid #0071e3' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 24,
                  padding: 40,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #0071e3, #5856d6)',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: 980,
                    fontSize: 12,
                    fontWeight: 600,
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 600, color: '#f5f5f7', marginBottom: 8 }}>{plan.name}</h3>
                  <p style={{ fontSize: 14, color: '#86868b' }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: 48, fontWeight: 600, color: '#f5f5f7' }}>
                    {plan.price === '0' ? 'Free' : `£${plan.price}`}
                  </span>
                  {plan.price !== '0' && (
                    <span style={{ fontSize: 16, color: '#86868b' }}>/{plan.period}</span>
                  )}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 32, flex: 1 }}>
                  {plan.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, color: '#f5f5f7', fontSize: 15 }}>
                      <svg style={{ width: 20, height: 20, color: '#22c55e', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px 24px',
                    borderRadius: 980,
                    fontSize: 17,
                    fontWeight: 500,
                    textDecoration: 'none',
                    background: plan.highlighted
                      ? 'linear-gradient(135deg, #0071e3, #5856d6)'
                      : 'transparent',
                    color: plan.highlighted ? 'white' : '#0071e3',
                    border: plan.highlighted ? 'none' : '1px solid #0071e3',
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#f5f5f7', marginBottom: 48, textAlign: 'center' }}
            >
              Frequently Asked Questions
            </motion.h2>

            {[
              {
                q: 'How does the free plan work?',
                a: 'The free plan gives you 10 question generations per day across all subjects and exam boards. Your progress is tracked and you get full step-by-step solutions.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit and debit cards, including Visa, Mastercard, and American Express.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! Pro plans come with a 7-day free trial. You can cancel anytime during the trial and won\'t be charged.',
              },
              {
                q: 'What subjects are available?',
                a: 'We support 12 subjects including Mathematics, Physics, Chemistry, Biology, Computer Science, Economics, Business, Psychology, Geography, History, English Literature, and Further Maths.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                style={{
                  marginBottom: 24,
                  paddingBottom: 24,
                  borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f5f5f7', marginBottom: 12 }}>{faq.q}</h3>
                <p style={{ fontSize: 15, color: '#86868b', lineHeight: 1.6 }}>{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#f5f5f7', marginBottom: 24 }}>
            Ready to start practicing?
          </h2>
          <p style={{ fontSize: 17, color: '#86868b', marginBottom: 32 }}>
            Join thousands of students using AI-powered practice to ace their exams.
          </p>
          <Link
            href="/gcse"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #0071e3, #5856d6)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: 980,
              fontSize: 17,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Start Practicing Free
            <svg style={{ width: 18, height: 18 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 0', backgroundColor: '#000000', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontSize: 13, color: '#86868b' }}>
          <div>&copy; 2025 Past Papers. All rights reserved.</div>
          <div>Not affiliated with AQA, Edexcel, Pearson, or OCR.</div>
        </div>
      </footer>
    </div>
  );
}
