'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { TypingDemo } from '@/components/marketing/TypingDemo';
import { AnimatedStats } from '@/components/marketing/AnimatedStats';
import { HowItWorksSteps } from '@/components/marketing/HowItWorksSteps';
import { AnimatedSubjectsGrid } from '@/components/marketing/AnimatedSubjectsGrid';

export default function HomePageContent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // Redirect logged-in users to /start (level selection)
  useEffect(() => {
    if (!authLoading && user) {
      router.replace('/start');
    }
  }, [user, authLoading, router]);

  // CTA destination based on auth status
  const ctaHref = user ? '/start' : '/signup';

  // Parallax effect for hero (disabled if user prefers reduced motion)
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, prefersReducedMotion ? 0 : -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Animation variants - respect reduced motion preference
  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.08,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.08]' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-lg text-white hover:text-white/80 transition-colors"
            aria-label="Past Papers Home"
          >
            Past Papers
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#subjects" className="text-sm text-white/60 hover:text-white transition-colors">
              Subjects
            </Link>
            <Link href="/past-papers" className="text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
              Paper Generator
            </Link>
            <Link href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {!authLoading && (
              user ? (
                <Link
                  href="/dashboard"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Log in
                </Link>
              )
            )}
            <Link
              href={ctaHref}
              className="bg-white text-[#0a0a0a] px-5 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              {user ? 'Start Practicing' : 'Get Started'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 md:hidden bg-[#0a0a0a] border-t border-white/[0.08]"
              >
                <div className="px-5 py-6 flex flex-col gap-1">
                  {[
                    { href: '#features', label: 'Features' },
                    { href: '#subjects', label: 'Subjects' },
                    { href: '/past-papers', label: 'Paper Generator', highlight: true },
                    { href: '#how-it-works', label: 'How It Works' },
                    { href: '/pricing', label: 'Pricing' },
                  ].map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-4 rounded-lg transition-colors text-lg ${
                        'highlight' in link && link.highlight
                          ? 'text-[#6366f1] hover:text-[#818cf8] hover:bg-[#6366f1]/10 font-medium'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-white/10 my-3" />
                  {!authLoading && (
                    user ? (
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-colors text-lg"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-colors text-lg"
                      >
                        Log in
                      </Link>
                    )
                  )}
                  <Link
                    href={ctaHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-white text-[#0a0a0a] px-6 py-3.5 rounded-full text-center font-medium mt-4"
                  >
                    {user ? 'Start Practicing' : 'Get Started Free'}
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-14"
          aria-labelledby="hero-heading"
        >
          {/* Subtle gradient background */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)]"
            aria-hidden="true"
          />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8"
            >
              <span className="text-blue-400 text-lg">∞</span>
              <span className="text-white/70 text-sm">Unlimited AI-generated questions</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Never run out of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                practice questions
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              AI generates fresh GCSE and A-Level questions tailored to your exam board.
              Complete with step-by-step solutions and mark schemes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href={ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
              >
                {user ? 'Start Practicing' : 'Start Practicing Free'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#demo"
                className="text-white/60 hover:text-white text-base flex items-center gap-2 py-4 transition-colors"
              >
                See example question
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                AQA, Edexcel, OCR
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                12 subjects
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free to start
              </span>
            </motion.div>
          </motion.div>
        </section>

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

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/[0.06]" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="font-semibold text-white mb-4">Past Papers</div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                AI-generated exam questions for GCSE & A-Level students.
              </p>
            </div>
            <div>
              <div className="font-medium text-white/60 text-sm uppercase tracking-wider mb-4">Product</div>
              <nav className="flex flex-col gap-2" aria-label="Product links">
                <Link href="/gcse" className="text-white/40 hover:text-white text-sm transition-colors">GCSE</Link>
                <Link href="/a-level" className="text-white/40 hover:text-white text-sm transition-colors">A-Level</Link>
                <Link href="/pricing" className="text-white/40 hover:text-white text-sm transition-colors">Pricing</Link>
              </nav>
            </div>
            <div>
              <div className="font-medium text-white/60 text-sm uppercase tracking-wider mb-4">Subjects</div>
              <nav className="flex flex-col gap-2" aria-label="Subject links">
                <Link href="/gcse/maths" className="text-white/40 hover:text-white text-sm transition-colors">Maths</Link>
                <Link href="/gcse/physics" className="text-white/40 hover:text-white text-sm transition-colors">Physics</Link>
                <Link href="/gcse/chemistry" className="text-white/40 hover:text-white text-sm transition-colors">Chemistry</Link>
                <Link href="/gcse/biology" className="text-white/40 hover:text-white text-sm transition-colors">Biology</Link>
              </nav>
            </div>
            <div>
              <div className="font-medium text-white/60 text-sm uppercase tracking-wider mb-4">Exam Boards</div>
              <nav className="flex flex-col gap-2" aria-label="Exam board links">
                <Link href="/gcse/maths/aqa" className="text-white/40 hover:text-white text-sm transition-colors">AQA</Link>
                <Link href="/gcse/maths/edexcel" className="text-white/40 hover:text-white text-sm transition-colors">Edexcel</Link>
                <Link href="/gcse/maths/ocr" className="text-white/40 hover:text-white text-sm transition-colors">OCR</Link>
              </nav>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="mailto:support@pastpapers.co" className="text-white/40 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-sm text-white/30">
            <div>&copy; 2026 Past Papers. All rights reserved.</div>
            <div>Not affiliated with AQA, Edexcel, Pearson, or OCR.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
