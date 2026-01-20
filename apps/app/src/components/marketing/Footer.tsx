import Link from 'next/link';

const FOOTER_LINKS = {
  product: [
    { href: '/gcse', label: 'GCSE' },
    { href: '/a-level', label: 'A-Level' },
    { href: '/pricing', label: 'Pricing' },
  ],
  subjects: [
    { href: '/gcse/maths', label: 'Maths' },
    { href: '/gcse/physics', label: 'Physics' },
    { href: '/gcse/chemistry', label: 'Chemistry' },
    { href: '/gcse/biology', label: 'Biology' },
  ],
  examBoards: [
    { href: '/gcse/maths/aqa', label: 'AQA' },
    { href: '/gcse/maths/edexcel', label: 'Edexcel' },
    { href: '/gcse/maths/ocr', label: 'OCR' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: 'mailto:taylor@avarismarketing.com', label: 'Contact' },
  ],
};

export function Footer() {
  return (
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
              {FOOTER_LINKS.product.map(link => (
                <Link key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <div className="font-medium text-white/60 text-sm uppercase tracking-wider mb-4">Subjects</div>
            <nav className="flex flex-col gap-2" aria-label="Subject links">
              {FOOTER_LINKS.subjects.map(link => (
                <Link key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <div className="font-medium text-white/60 text-sm uppercase tracking-wider mb-4">Exam Boards</div>
            <nav className="flex flex-col gap-2" aria-label="Exam board links">
              {FOOTER_LINKS.examBoards.map(link => (
                <Link key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          {FOOTER_LINKS.legal.map(link => (
            <Link key={link.href} href={link.href} className="text-white/40 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-sm text-white/30">
          <div>&copy; {new Date().getFullYear()} Past Papers. All rights reserved.</div>
          <div>Not affiliated with AQA, Edexcel, Pearson, or OCR.</div>
        </div>
      </div>
    </footer>
  );
}
