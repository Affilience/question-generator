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

  // Show upgrade prompt for users without print_papers feature
  if (!canPrintPapers) {
    return (
      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-[var(--color-text-primary)] mb-1 flex items-center gap-2">
              🔒 Professional Paper PDFs
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Print this paper as a professional exam-style PDF with proper formatting, marks boxes, and answer spaces
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Upgrade to Exam Pro
          </Link>
        </div>
      </div>
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