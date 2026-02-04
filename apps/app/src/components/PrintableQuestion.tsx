'use client';

import { forwardRef } from 'react';
import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';

interface PrintableQuestionProps {
  question: Question;
  questionNumber?: number;
  showSolution?: boolean;
  title?: string;
  subtitle?: string;
}

// Print-specific styles optimized for KaTeX math rendering
const printStyles = `
  @media print {
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    
    @page {
      size: A4;
      margin: 2cm;
    }
    
    body {
      font-family: 'Times New Roman', serif !important;
      font-size: 12pt !important;
      line-height: 1.5 !important;
      color: black !important;
      background: white !important;
    }
    
    .print-container {
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
    }
    
    .question-header {
      border-bottom: 2px solid #000 !important;
      padding-bottom: 10pt !important;
      margin-bottom: 15pt !important;
    }
    
    .question-content {
      font-size: 11pt !important;
      line-height: 1.6 !important;
      margin-bottom: 20pt !important;
    }
    
    .answer-space {
      border: 1px solid #ccc !important;
      min-height: 80pt !important;
      margin: 15pt 0 !important;
      padding: 10pt !important;
      background: #fafafa !important;
    }
    
    .solution-section {
      border-top: 1px solid #666 !important;
      padding-top: 15pt !important;
      margin-top: 20pt !important;
      page-break-inside: avoid !important;
    }
    
    .marks-indicator {
      font-weight: bold !important;
      font-size: 10pt !important;
    }
    
    /* KaTeX specific print styles */
    .katex {
      font-size: 1em !important;
    }
    
    .katex-display {
      margin: 1em 0 !important;
    }
    
    .katex .base {
      display: inline-block !important;
    }
    
    /* Ensure math doesn't break across pages */
    .katex-display {
      page-break-inside: avoid !important;
    }
    
    .print-footer {
      position: fixed;
      bottom: 1cm;
      width: 100%;
      text-align: center;
      font-size: 8pt;
      color: #666;
    }
  }
  
  @media screen {
    .print-container {
      background: white;
      padding: 2rem;
      max-width: 21cm;
      margin: 0 auto;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      min-height: 29.7cm;
    }
  }
`;

export const PrintableQuestion = forwardRef<HTMLDivElement, PrintableQuestionProps>(
  ({ question, questionNumber = 1, showSolution = false, title, subtitle }, ref) => {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: printStyles }} />
        <div ref={ref} className="print-container">
          {/* Header */}
          <div className="question-header">
            {title && (
              <h1 style={{ fontSize: '16pt', margin: '0 0 5pt 0', fontWeight: 'bold' }}>
                {title}
              </h1>
            )}
            {subtitle && (
              <h2 style={{ fontSize: '12pt', margin: '0', fontWeight: 'normal', color: '#666' }}>
                {subtitle}
              </h2>
            )}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: title || subtitle ? '10pt' : '0'
            }}>
              <h3 style={{ fontSize: '14pt', margin: '0', fontWeight: 'bold' }}>
                Question {questionNumber}
              </h3>
              <span className="marks-indicator">
                [{question.marks || 1} mark{(question.marks || 1) !== 1 ? 's' : ''}]
              </span>
            </div>
          </div>

          {/* Question Content */}
          <div className="question-content">
            <MathRenderer content={question.content} />
          </div>

          {/* Answer Space */}
          <div className="answer-space">
            <p style={{ 
              fontSize: '9pt', 
              color: '#888', 
              margin: '0 0 10pt 0',
              fontStyle: 'italic' 
            }}>
              Write your answer in the space below:
            </p>
            <div style={{ minHeight: '60pt' }}></div>
          </div>

          {/* Solution (if enabled) */}
          {showSolution && (
            <div className="solution-section">
              <h4 style={{ fontSize: '12pt', fontWeight: 'bold', margin: '0 0 10pt 0' }}>
                Solution:
              </h4>
              <div style={{ fontSize: '11pt', lineHeight: '1.5' }}>
                <MathRenderer content={question.solution} />
              </div>
              
              {/* Mark Scheme */}
              {question.markScheme && question.markScheme.length > 0 && (
                <div style={{ marginTop: '15pt' }}>
                  <h5 style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0 0 8pt 0' }}>
                    Mark Scheme:
                  </h5>
                  <ul style={{ fontSize: '10pt', paddingLeft: '20pt', margin: '0' }}>
                    {question.markScheme.map((mark, index) => (
                      <li key={index} style={{ marginBottom: '3pt' }}>
                        {mark.criterion} ({mark.marks} mark{mark.marks !== 1 ? 's' : ''})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Print Footer */}
          <div className="print-footer">
            Generated by Past Papers - www.past-papers.co.uk
          </div>
        </div>
      </>
    );
  }
);

PrintableQuestion.displayName = 'PrintableQuestion';