'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Question } from '@/types';

interface PrintQuestionOptions {
  question: Question;
  questionNumber?: number;
  showSolution?: boolean;
  title?: string;
  subtitle?: string;
}

export function usePrintQuestion() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Practice Question',
    removeAfterPrint: true,
    onBeforeGetContent: () => {
      // Wait a moment for KaTeX to render properly
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 100);
      });
    },
    onPrintError: (errorLocation, error) => {
      console.error('Print error:', errorLocation, error);
    },
    pageStyle: `
      @media print {
        body {
          margin: 0;
          padding: 0;
          -webkit-print-color-adjust: exact;
          color-adjust: exact;
        }
      }
    `,
  });

  return {
    printRef,
    handlePrint,
  };
}