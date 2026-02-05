'use client';

import { useRef, useCallback } from 'react';
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
    onAfterPrint: () => {
      console.log('Print completed');
    },
  });

  return {
    printRef,
    handlePrint,
  };
}