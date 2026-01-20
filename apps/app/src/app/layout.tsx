import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { CookieConsent } from "@/components/CookieConsent";
import { AuthProvider } from "@/contexts/AuthContext";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.past-papers.co.uk'),
  title: {
    default: 'Past Papers - AI Practice Questions for GCSE & A-Level',
    template: '%s | Past Papers',
  },
  description: "AI-generated exam-style questions for GCSE and A-Level. Practice unlimited questions matching AQA, Edexcel, and OCR exam board styles with step-by-step solutions.",
  icons: {
    icon: '/favicon.ico',
  },
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg-deepest)] min-h-screen overflow-x-hidden`}
      >
        <AuthProvider>
          <SubscriptionProvider>
            <ThemeProvider>
              {/* Background glow orbs - contained to prevent scroll issues */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="glow-orb glow-orb-blue glow-orb-animated w-[500px] h-[500px] -top-32 -left-32" />
                <div className="glow-orb glow-orb-purple glow-orb-animated w-[400px] h-[400px] top-1/3 -right-32" style={{ animationDelay: '2s' }} />
                <div className="glow-orb glow-orb-cyan glow-orb-animated w-[350px] h-[350px] bottom-0 left-1/4" style={{ animationDelay: '4s' }} />
              </div>

              <div className="relative z-10 min-h-screen">
                {children}
              </div>
              <CommandPalette />
              <CookieConsent />
            </ThemeProvider>
          </SubscriptionProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
