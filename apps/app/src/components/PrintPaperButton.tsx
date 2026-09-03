'use client';

import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { GeneratedPaper } from '@/types';
import { PrintablePaper } from './PrintablePaper';
import Link from 'next/link';

interface PrintPaperButtonProps {
  paper: GeneratedPaper;
  examBoard: string;
  qualification: string;
  subject: string;
  showSolutions?: boolean;
}

export function PrintPaperButton({ 
  paper, 
  examBoard, 
  qualification, 
  subject, 
  showSolutions = false 
}: PrintPaperButtonProps) {
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [printWithSolutions, setPrintWithSolutions] = useState(false);
  const { tier, hasFeature } = useSubscription();
  const printRef = useRef<HTMLDivElement>(null);

  const canPrintPapers = hasFeature('print_papers');

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `${examBoard.toUpperCase()}-${qualification.toUpperCase()}-${subject}-${paper.paperName || 'Practice-Paper'}`,
    onAfterPrint: () => {
      console.log('Paper print completed');
      setShowPrintPreview(false);
    },
  });

  const onPrintClick = (withSolutions = false) => {
    setPrintWithSolutions(withSolutions);
    setShowPrintPreview(true);
    // Give time for content to render, especially important for math/diagrams
    setTimeout(() => {
      handlePrint();
    }, 500);
  };

  // Locked state for users without print_papers.
  //
  // This slot sits inside the take-paper page's sticky header button row, so a
  // full-width gradient panel with a heading and a paragraph broke the header
  // layout for every Student Plus user — the majority of people who can
  // generate a paper at all. Keep it the size of a button.
  if (!canPrintPapers) {
    return (
      <Link
        href="/pricing"
        title="Printing papers as exam-style PDFs is part of Exam Pro"
        aria-label="Upgrade to Exam Pro to print this paper"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors whitespace-nowrap"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Print · Exam Pro
      </Link>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPrintClick(false)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Paper
        </button>

        <button
          onClick={() => onPrintClick(true)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print with Solutions
        </button>
      </div>

      {/* Hidden printable component */}
      {showPrintPreview && (
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <PrintablePaper
            ref={printRef}
            paper={paper}
            examBoard={examBoard}
            qualification={qualification}
            subject={subject}
            showSolutions={printWithSolutions}
          />
        </div>
      )}
    </>
  );
}