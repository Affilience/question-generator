'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface HeroSectionProps {
  user: { id: string } | null;
}

export function HeroSection({ user }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const ctaHref = user ? '/start' : '/signup';

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, prefersReducedMotion ? 0 : -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-14"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)]"
        aria-hidden="true"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8"
        >
          <span className="text-blue-400 text-lg">&#8734;</span>
          <span className="text-white/70 text-sm">Unlimited AI-generated questions</span>
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI generates fresh GCSE and A-Level questions tailored to your exam board.
          Complete with step-by-step solutions and mark schemes.
        </motion.p>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
        >
          {['AQA, Edexcel, OCR', '12 subjects', 'Used by 170+ students'].map((text) => (
            <span key={text} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
