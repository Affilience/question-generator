import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { CookieConsent } from "@/components/CookieConsent";
import { AuthProvider } from "@/contexts/AuthContext";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import { SentryProvider } from "@/components/SentryProvider";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { NetworkStatus } from "@/components/NetworkStatus";
import { GlowOrbs } from "@/components/GlowOrbs";
import { LayoutStabilizer } from "@/components/LayoutStabilizer";
import { SpeedInsights } from '@vercel/speed-insights/next';

// Temporarily disabled due to Turbopack font loading issue
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: 'swap', // Prevent FOIT for better LCP
//   preload: true,
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: 'swap', // Prevent FOIT for better LCP
//   preload: false, // Only preload primary font
// });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.past-papers.co.uk'),
  title: {
    default: 'Past Papers - AI Practice Questions for GCSE & A-Level',
    template: '%s | Past Papers',
  },
  description: "AI-generated exam-style questions for GCSE and A-Level. Practice unlimited questions matching AQA, Edexcel, and OCR exam board styles with step-by-step solutions.",
  keywords: [
    'GCSE practice questions',
    'A-Level practice questions', 
    'AQA past papers',
    'Edexcel past papers',
    'OCR past papers',
    'AI generated questions',
    'exam preparation',
    'revision materials',
    'step-by-step solutions'
  ],
  authors: [{ name: 'Past Papers Team' }],
  creator: 'Past Papers',
  publisher: 'Past Papers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.past-papers.co.uk',
    siteName: 'Past Papers',
    title: 'Past Papers - AI Practice Questions for GCSE & A-Level',
    description: 'AI-generated exam-style questions for GCSE and A-Level. Practice unlimited questions matching AQA, Edexcel, and OCR exam board styles with step-by-step solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Past Papers - AI Practice Questions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pastpapers',
    creator: '@pastpapers',
    title: 'Past Papers - AI Practice Questions for GCSE & A-Level',
    description: 'AI-generated exam-style questions for GCSE and A-Level. Practice unlimited questions with step-by-step solutions.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  category: 'education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent theme flash - runs before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        
        {/* Force unregister all Service Workers to fix navigation caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                      registrations[i].unregister().then(function(success) {
                        if (success) console.log('[SW Cleanup] Service Worker unregistered successfully');
                      });
                    }
                  }).catch(function(error) {
                    console.log('[SW Cleanup] Service Worker unregistration failed:', error);
                  });
                }
              })();
            `,
          }}
        />
        {/* Viewport meta tag for responsive design and CLS prevention */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Preload critical resources for better LCP */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
        
        {/* Additional resource hints for Core Web Vitals */}
        <link rel="preconnect" href="https://fmnzyvdgewlrggnxvgec.supabase.co" />
        {process.env.NEXT_PUBLIC_SUPABASE_URL && (
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_SUPABASE_URL} />
        )}
        <link rel="dns-prefetch" href="https://api.anthropic.com" />
        <link rel="dns-prefetch" href="https://api.openai.com" />
        
        {/* Prefetch critical pages for faster navigation */}
        <link rel="prefetch" href="/gcse" />
        <link rel="prefetch" href="/a-level" />
        
        {/* Critical CSS for preventing layout shifts and mobile optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Base layout and CLS prevention */
            body { margin: 0; padding: 0; overflow-x: hidden; }
            .container { max-width: 100%; overflow-x: hidden; }
            [data-layout-stable] { min-height: 1px; }
            
            /* Mobile-first performance optimizations */
            * { 
              -webkit-tap-highlight-color: transparent;
              box-sizing: border-box;
            }
            
            /* Image and content optimization */
            img { 
              content-visibility: auto; 
              contain: layout style paint;
              max-width: 100%;
              height: auto;
              loading: lazy;
            }
            
            /* Math content optimization */
            .math-display { 
              contain: layout style;
              will-change: transform;
            }
            
            /* Enhanced mobile optimizations */
            @media (max-width: 768px) {
              body { 
                font-size: 16px; /* Prevent iOS zoom on form focus */
                -webkit-font-smoothing: antialiased;
              }
              .question-container { 
                transform: translateZ(0); /* Hardware acceleration */
                backface-visibility: hidden;
              }
              /* Improve mobile scrolling performance */
              .page-content {
                -webkit-overflow-scrolling: touch;
                overflow-anchor: none;
              }
            }
            
            /* Above-the-fold critical styles */
            .hero-section {
              min-height: 60vh;
              display: flex;
              align-items: center;
            }
            
            /* Button critical styles */
            .btn-primary {
              display: inline-block;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              transition: all 0.2s ease;
            }
          `
        }} />
        
        {/* KaTeX CSS for math rendering - load immediately to prevent flash of unstyled content */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              var katexLink = document.querySelector('link[href*="katex"][rel="preload"]');
              if (katexLink) {
                katexLink.onload = function() {
                  this.onload = null;
                  this.rel = 'stylesheet';
                };
              }
            });
          `
        }} />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
            crossOrigin="anonymous"
          />
        </noscript>
      </head>
      <body
        className={`font-sans antialiased bg-[var(--color-bg-deepest)] min-h-screen overflow-x-hidden`}
      >
        <LayoutStabilizer />
        <SentryProvider>
          <AuthProvider>
            <SubscriptionProvider>
              <ThemeProvider>
                <AnalyticsProvider>
                  {/* Background glow orbs - lazy loaded to improve LCP */}
                  <GlowOrbs />

                  <div className="relative z-10 min-h-screen">
                    {children}
                  </div>
                </AnalyticsProvider>
              <CommandPalette />
              <CookieConsent />
              <NetworkStatus />
              <SpeedInsights />
              </ThemeProvider>
            </SubscriptionProvider>
          </AuthProvider>
        </SentryProvider>
        <Analytics />
      </body>
    </html>
  );
}
