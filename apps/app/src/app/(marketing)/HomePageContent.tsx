'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Navigation } from '@/components/marketing/Navigation';
import { HeroSection } from '@/components/marketing/HeroSection';
import { Footer } from '@/components/marketing/Footer';
import { TypingDemo } from '@/components/marketing/TypingDemo';
import { AnimatedStats } from '@/components/marketing/AnimatedStats';
import { HowItWorksSteps } from '@/components/marketing/HowItWorksSteps';
import { AnimatedSubjectsGrid } from '@/components/marketing/AnimatedSubjectsGrid';
import { createAnimationVariants } from '@/components/marketing/animations';

export default function HomePageContent() {
  const prefersReducedMotion = useReducedMotion();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const { fadeInUp, staggerContainer, scaleIn } = createAnimationVariants(prefersReducedMotion);
  const ctaHref = user ? '/start' : '/signup';

  // Redirect logged-in users to /start (level selection)
  useEffect(() => {
    if (!authLoading && user) {
      router.replace('/start');
    }
  }, [user, authLoading, router]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Navigation user={user} authLoading={authLoading} />

      <main id="main-content">
        <HeroSection user={user} />

        {/* Demo Section */}
        <section id="demo" className="py-20 md:py-28 bg-[#050505]" aria-labelledby="demo-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 id="demo-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                See what you get
              </h2>
              <p className="text-white/50 text-lg">
                Every question comes with a full solution and mark scheme
              </p>
            </motion.div>
            <TypingDemo />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-[#0a0a0a] border-y border-white/[0.06]" aria-labelledby="stats-heading">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
            <AnimatedStats />
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="problem-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                The Problem
              </p>
              <h2 id="problem-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight">
                Past papers run out.
                <br />
                <span className="text-neutral-400">Your practice shouldn&apos;t.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { icon: '📚', title: 'Limited Papers', desc: 'Only a handful of past papers exist for each subject. They run out fast.' },
                { icon: '🔍', title: 'Topic Hunting', desc: 'Finding questions on specific subtopics means hours of searching.' },
                { icon: '❓', title: 'No Explanations', desc: 'Mark schemes give answers, not the working. Hard to learn from mistakes.' },
                { icon: '📊', title: 'No Tracking', desc: 'Without progress tracking, you don\'t know where to focus.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  className="bg-neutral-50 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-28 bg-[#0a0a0a]" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                The Solution
              </p>
              <h2 id="features-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
                Unlimited questions.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Every subtopic covered.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                {
                  title: 'Infinite Questions',
                  desc: 'Generate unlimited unique questions for any subtopic. Never do the same question twice.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                },
                {
                  title: 'Exam-Board Accurate',
                  desc: 'Questions match your exam board\'s style exactly. AQA, Edexcel, and OCR formats supported.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
                {
                  title: 'Full Solutions',
                  desc: 'Every question includes step-by-step working and proper M1/A1 mark scheme notation.',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  className="bg-[#111] border border-white/[0.06] rounded-2xl p-6 sm:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 flex items-center justify-center text-blue-400 mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Subjects Grid */}
        <section id="subjects" className="py-20 md:py-28 bg-white" aria-labelledby="subjects-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                Subjects
              </p>
              <h2 id="subjects-heading" className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
                GCSE & A-Level covered
              </h2>
              <p className="text-neutral-500 text-lg">
                12 subjects across 3 exam boards
              </p>
            </motion.div>
            <AnimatedSubjectsGrid />
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 md:py-28 bg-[#0a0a0a]" aria-labelledby="how-heading">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
                How It Works
              </p>
              <h2 id="how-heading" className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Three steps to better grades
              </h2>
            </motion.div>
            <HowItWorksSteps />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#111]" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.h2
                id="cta-heading"
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight"
              >
                Ready to start practicing?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/50 mb-10 max-w-xl mx-auto"
              >
                Free to use. No account required. Generate your first question now.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
                >
                  {user ? 'Start Practicing' : 'Start Practicing Free'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
