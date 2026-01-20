'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  user: { id: string } | null;
  authLoading: boolean;
}

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#subjects', label: 'Subjects' },
  { href: '/paper-generator', label: 'Paper Generator', highlight: true },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
];

export function Navigation({ user, authLoading }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ctaHref = user ? '/start' : '/signup';

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
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={link.highlight
                ? 'text-sm text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium'
                : 'text-sm text-white/60 hover:text-white transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
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
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg transition-colors text-lg ${
                      link.highlight
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
  );
}
