import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CommandPalette } from "@/components/ui/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GCSE Maths Practice",
  description: "AI-generated exam-style questions to help you master every topic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg-deepest)] min-h-screen overflow-x-hidden`}
      >
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
        </ThemeProvider>
      </body>
    </html>
  );
}
