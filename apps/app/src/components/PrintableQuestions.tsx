'use client';

import { Question } from '@/types';
import { MathRenderer } from './MathRenderer';

interface PrintableQuestionsProps {
  questions: Question[];
  title: string;
  subtitle?: string;
  showSolutions?: boolean;
}

export function PrintableQuestions({ questions, title, subtitle, showSolutions = false }: PrintableQuestionsProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles */}
      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-content, .printable-content * {
            visibility: visible;
          }
          .printable-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-after: always;
          }
          .question-spacing {
            margin-bottom: 2rem;
            break-inside: avoid;
          }
          .solution-spacing {
            margin-top: 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid #ccc;
          }
        }
      `}</style>

      <div className="space-y-6">
        {/* Print Button */}
        <div className="flex items-center justify-between no-print">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
            {subtitle && (
              <p className="text-[var(--color-text-secondary)] mt-1">{subtitle}</p>
            )}
          </div>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Questions
          </button>
        </div>

        {/* Printable Content */}
        <div className="printable-content">
          {/* Print Header */}
          <div className="mb-8 text-center" style={{ display: 'none' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>{title}</h1>
            {subtitle && (
              <p style={{ fontSize: '16px', color: '#666', display: 'block' }}>{subtitle}</p>
            )}
            <hr style={{ margin: '20px 0', display: 'block' }} />
          </div>

          {/* Questions */}
          {questions.map((question, index) => (
            <div key={index} className="question-spacing" style={{ marginBottom: '2rem', breakInside: 'avoid' }}>
              {/* Question Header */}
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>
                  Question {index + 1}
                </h3>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  [{question.marks} mark{question.marks !== 1 ? 's' : ''}]
                </span>
              </div>

              {/* Question Content */}
              <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '2rem' }}>
                <MathRenderer content={question.content} />
              </div>

              {/* Answer Space */}
              <div style={{ 
                border: '1px solid #ddd', 
                minHeight: '100px', 
                padding: '10px',
                marginBottom: '1rem',
                backgroundColor: '#fafafa'
              }}>
                <p style={{ fontSize: '12px', color: '#888', margin: '0' }}>Write your answer here:</p>
              </div>

              {/* Solutions (if enabled) */}
              {showSolutions && (
                <div className="solution-spacing page-break" style={{ 
                  marginTop: '1.5rem', 
                  paddingTop: '1rem', 
                  borderTop: '1px solid #ccc' 
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Solution:
                  </h4>
                  <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    <MathRenderer content={question.solution} />
                  </div>
                  
                  {/* Mark Scheme */}
                  {question.markScheme && question.markScheme.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                      <h5 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Mark Scheme:
                      </h5>
                      <ul style={{ fontSize: '12px', paddingLeft: '20px', margin: '0' }}>
                        {question.markScheme.map((mark, markIndex) => (
                          <li key={markIndex} style={{ marginBottom: '0.25rem' }}>
                            {mark.criterion} ({mark.marks} mark{mark.marks !== 1 ? 's' : ''})
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Print Footer */}
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '1rem', 
            borderTop: '1px solid #ddd', 
            textAlign: 'center', 
            fontSize: '12px', 
            color: '#666' 
          }}>
            <p style={{ margin: '0' }}>
              Generated by Past Papers - www.past-papers.co.uk
            </p>
          </div>
        </div>
      </div>
    </>
  );
}