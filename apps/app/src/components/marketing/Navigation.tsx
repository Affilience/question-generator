'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';

interface NavigationProps {
  user: { id: string; email?: string } | null;
  authLoading: boolean;
}

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#subjects', label: 'Subjects' },
  { href: '/paper-generator', label: 'Paper Generator' },
  { href: '/blog', label: 'Study Guides' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
];

export function Navigation({ user, authLoading }: NavigationProps) {
  const router = useRouter();
  const { signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const ctaHref = user ? '/start' : '/signup';

  const handleSignOut = async () => {
    setUserMenuOpen(false);
    try {
      await signOut();
    } catch (err) {
      console.error('Sign out error:', err);
    }
    window.location.href = '/login';
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
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <span className="text-xs text-blue-400 font-medium">
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="max-w-[120px] truncate">{user.email || 'Account'}</span>
                  <svg className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl z-20 py-2">
                      <div className="px-4 py-2 border-b border-white/10">
                        <p className="text-xs text-white/40">Signed in as</p>
                        <p className="text-sm text-white truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Dashboard
                      </Link>
                      <Link
                        href="/past-papers"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Practice Questions
                      </Link>
                      <div className="border-t border-white/10 my-1" />
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
          ) : (
            <Link
              href="/login"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Log in
            </Link>
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
                    className="py-3 px-4 rounded-lg transition-colors text-lg text-white/70 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-white/10 my-3" />
                {user ? (
                  <>
                    <div className="px-4 py-3 mb-2">
                      <p className="text-xs text-white/40">Signed in as</p>
                      <p className="text-sm text-white truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-colors text-lg"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/past-papers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-colors text-lg"
                    >
                      Practice Questions
                    </Link>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleSignOut();
                      }}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 py-3 px-4 rounded-lg transition-colors text-lg text-left w-full"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/70 hover:text-white hover:bg-white/5 py-3 px-4 rounded-lg transition-colors text-lg"
                  >
                    Log in
                  </Link>
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
