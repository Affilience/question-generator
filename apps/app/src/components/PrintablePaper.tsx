'use client';

import { forwardRef } from 'react';
import { GeneratedPaper, GeneratedQuestion } from '@/types';
import { MathRenderer } from './MathRenderer';

interface PrintablePaperProps {
  paper: GeneratedPaper;
  showSolutions?: boolean;
  examBoard: string;
  qualification: string;
  subject: string;
}

const printStyles = `
  @media print {
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    
    @page {
      size: A4;
      margin: 2.5cm 2cm;
    }
    
    body {
      font-family: 'Times New Roman', serif !important;
      font-size: 11pt !important;
      line-height: 1.4 !important;
      color: black !important;
      background: white !important;
    }
    
    .print-paper {
      max-width: none !important;
      margin: 0 !important;
      padding: 0 !important;
      background: white !important;
    }
    
    .paper-header {
      text-align: center;
      border-bottom: 2px solid #000;
      padding-bottom: 12pt;
      margin-bottom: 20pt;
    }
    
    .paper-title {
      font-size: 16pt !important;
      font-weight: bold !important;
      margin: 0 0 8pt 0 !important;
    }
    
    .paper-details {
      font-size: 12pt !important;
      margin: 0 !important;
    }
    
    .instructions {
      margin: 20pt 0;
      padding: 12pt;
      border: 1px solid #000;
      background: #f9f9f9;
    }
    
    .section-header {
      font-size: 14pt !important;
      font-weight: bold !important;
      margin: 20pt 0 10pt 0 !important;
      border-bottom: 1px solid #333;
      padding-bottom: 5pt;
    }
    
    .question {
      margin-bottom: 25pt;
      page-break-inside: avoid;
    }
    
    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8pt;
      font-weight: bold;
    }
    
    .question-content {
      font-size: 11pt !important;
      line-height: 1.5 !important;
      margin-bottom: 15pt !important;
    }
    
    .answer-space {
      border: 1px solid #ccc !important;
      min-height: 60pt !important;
      margin: 10pt 0 !important;
      padding: 8pt !important;
      background: #fafafa !important;
    }
    
    .solution-section {
      border-top: 1px solid #666 !important;
      padding-top: 12pt !important;
      margin-top: 15pt !important;
      page-break-inside: avoid !important;
    }
    
    .marks-box {
      border: 1px solid #000;
      width: 40pt;
      height: 20pt;
      text-align: center;
      font-size: 9pt;
      display: inline-block;
    }
    
    /* KaTeX optimizations for print */
    .katex {
      font-size: 1em !important;
    }
    
    .katex-display {
      margin: 8pt 0 !important;
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
`;

export const PrintablePaper = forwardRef<HTMLDivElement, PrintablePaperProps>(
  ({ paper, showSolutions = false, examBoard, qualification, subject }, ref) => {
    const allQuestions = paper.sections.flatMap((section, sectionIndex) => 
      section.questions.map((q, qIndex) => ({
        ...q,
        sectionIndex,
        questionNumber: qIndex + 1,
        sectionName: section.name
      }))
    );

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: printStyles }} />
        <div ref={ref} className="print-paper">
          {/* Paper Header */}
          <div className="paper-header">
            <h1 className="paper-title">
              {examBoard.toUpperCase()} {qualification.toUpperCase()} {subject.toUpperCase()}
            </h1>
            <div className="paper-details">
              <p><strong>{paper.paperName || 'Practice Paper'}</strong></p>
              <p>Total Marks: {paper.totalMarks}</p>
              {paper.timeLimit && <p>Time Allowed: {paper.timeLimit} minutes</p>}
            </div>
          </div>

          {/* Instructions */}
          <div className="instructions">
            <p><strong>Instructions</strong></p>
            <ul style={{ margin: '8pt 0', paddingLeft: '20pt' }}>
              <li>Answer all questions.</li>
              <li>Show all working where appropriate.</li>
              <li>Unless otherwise indicated, numerical answers need not be given to more than 3 significant figures.</li>
              {paper.timeLimit && <li>You have {paper.timeLimit} minutes to complete this paper.</li>}
            </ul>
          </div>

          {/* Sections and Questions */}
          {paper.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {paper.sections.length > 1 && (
                <h2 className="section-header">
                  Section {String.fromCharCode(65 + sectionIndex)}: {section.name}
                </h2>
              )}
              
              {section.questions.map((question, questionIndex) => {
                const questionNumber = questionIndex + 1;
                const globalQuestionNumber = allQuestions.findIndex(q => 
                  q.sectionIndex === sectionIndex && q.questionNumber === questionNumber
                ) + 1;

                return (
                  <div key={`${sectionIndex}-${questionIndex}`} className="question">
                    {/* Question Header */}
                    <div className="question-header">
                      <span>
                        {globalQuestionNumber}.
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10pt' }}>
                        <span>[{question.marks} marks]</span>
                        <div className="marks-box"></div>
                      </div>
                    </div>

                    {/* Question Content */}
                    <div className="question-content">
                      <MathRenderer content={question.content} />
                    </div>

                    {/* Answer Space */}
                    <div className="answer-space">
                      <div style={{ minHeight: `${Math.max(40, question.marks * 15)}pt` }}></div>
                    </div>

                    {/* Solution (if enabled) */}
                    {showSolutions && question.solution && (
                      <div className="solution-section">
                        <h4 style={{ fontSize: '11pt', fontWeight: 'bold', margin: '0 0 8pt 0' }}>
                          Solution:
                        </h4>
                        <div style={{ fontSize: '10pt', lineHeight: '1.4' }}>
                          <MathRenderer content={question.solution} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Print Footer */}
          <div className="print-footer">
            Generated by Past Papers - www.past-papers.co.uk
          </div>
        </div>
      </>
    );
  }
);

PrintablePaper.displayName = 'PrintablePaper';