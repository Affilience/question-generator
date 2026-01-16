import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Past Papers - Infinite AI-Generated Exam Questions | GCSE & A-Level',
  description: 'Never run out of past paper questions. AI generates unlimited GCSE & A-Level exam questions for every subtopic, matching AQA, Edexcel & OCR specifications exactly.',
  keywords: ['past papers', 'GCSE past papers', 'A-Level past papers', 'exam questions', 'GCSE revision', 'A-Level revision', 'AQA', 'Edexcel', 'OCR', 'practice papers', 'exam practice'],
  openGraph: {
    title: 'Past Papers - Infinite AI-Generated Exam Questions',
    description: 'Never run out of past paper questions. AI generates unlimited GCSE & A-Level exam questions for every subtopic.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#ffffff',
          color: '#1d1d1f',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: 1.47059,
          fontWeight: 400,
          letterSpacing: '-0.022em',
          overflowX: 'hidden',
        }}
      >
        {children}
      </body>
    </html>
  );
}
