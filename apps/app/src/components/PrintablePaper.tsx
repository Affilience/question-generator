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
    orphans: 3;
    widows: 3;
    min-height: 150pt;
  }
  
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8pt;
    font-weight: bold;
    page-break-after: avoid;
  }
  
  /* Keep question parts together when possible */
  .question-content .flex.gap-3 {
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;
  }
  
  /* Ensure answer spaces don't split poorly */
  .answer-space {
    page-break-inside: avoid;
    min-height: 60pt;
    border: 1px solid #ccc !important;
    margin: 15pt 0 !important;
    padding: 10pt !important;
    background: #fafafa !important;
  }
  
  .answer-space.graph-space {
    background: #f8f8f8 !important;
    min-height: 200pt !important;
  }
  
  .answer-space.essay-space {
    background: white !important;
    padding: 5pt !important;
  }
  
  .answer-space.calculation-space {
    background: #feffef !important;
  }
  
  /* Smart page breaks for multi-part questions */
  .question[data-parts="multiple"] {
    page-break-inside: auto;
  }
  
  .question.long-question {
    page-break-before: auto;
    min-height: 250pt;
  }
  
  .question.high-marks {
    page-break-before: auto;
    min-height: 200pt;
  }
  
  .question.multi-part {
    page-break-inside: auto;
  }
  
  .question.single-part.short {
    page-break-inside: avoid;
    min-height: 120pt;
  }
  
  /* Force page break before new sections if needed */
  .section-header {
    page-break-before: auto;
    page-break-after: avoid;
    orphans: 3;
  }
  .question-content {
    font-size: 11pt !important;
    line-height: 1.5 !important;
    margin-bottom: 15pt !important;
  }
  /* Question part formatting for (a), (b), (c), etc. */
  .question-content .flex.gap-3 {
    display: block !important;
    margin-top: 12pt !important;
    margin-bottom: 8pt !important;
  }
  .question-content .flex.gap-3 > span.font-semibold {
    display: block !important;
    margin-bottom: 5pt !important;
    font-weight: bold !important;
    color: black !important;
  }
  .question-content .flex.gap-3 > .flex-1 {
    display: block !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
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
  .page-break-before {
    page-break-before: always !important;
  }
  .page-break-inside-avoid {
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
  /* KaTeX math rendering - ensure visibility and proper formatting */
  .katex {
    font-size: 1em !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  .katex-display {
    margin: 8pt 0 !important;
    page-break-inside: avoid !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  .math-content {
    visibility: visible !important;
    opacity: 1 !important;
  }
  .invisible {
    visibility: visible !important;
    opacity: 1 !important;
  }
  .print-footer {
    position: fixed;
    bottom: 1cm;
    width: 100%;
    text-align: center;
    font-size: 8pt;
    color: #666;
  }
  
  /* Subject-specific formatting */
  
  /* Physics-specific styles */
  .subject-physics .question-content {
    line-height: 1.6 !important; /* More space for vectors and equations */
  }
  
  .subject-physics .answer-space {
    min-height: 80pt !important; /* More space for calculations */
  }
  
  .subject-physics .calculation-space {
    background: #f8f9ff !important; /* Light blue tint */
    border-left: 3px solid #2563eb !important;
  }
  
  /* Chemistry-specific styles */
  .subject-chemistry .question-content {
    line-height: 1.7 !important; /* Space for chemical formulas */
  }
  
  .subject-chemistry .answer-space.calculation-space {
    background: #f0fdf4 !important; /* Light green tint */
    border-left: 3px solid #16a34a !important;
  }
  
  .subject-chemistry .equation-space {
    min-height: 100pt !important;
    background: #fefefe !important;
    border: 1px dashed #16a34a !important;
  }
  
  /* Mathematics-specific styles */
  .subject-maths .question-content, 
  .subject-mathematics .question-content {
    line-height: 1.5 !important;
  }
  
  .subject-maths .answer-space.calculation-space,
  .subject-mathematics .answer-space.calculation-space {
    background: #fffbeb !important; /* Light yellow tint */
    border-left: 3px solid #f59e0b !important;
  }
  
  .subject-maths .graph-space,
  .subject-mathematics .graph-space {
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGRkIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=') !important;
  }
  
  /* English/Literature-specific styles */
  .subject-english .answer-space.essay-space {
    line-height: 1.8 !important;
    padding: 15pt !important;
  }
  
  .subject-english .question-content {
    font-style: italic;
  }
  
  /* Biology-specific styles */
  .subject-biology .question-content {
    line-height: 1.6 !important;
  }
  
  .subject-biology .answer-space.essay-space {
    background: #f7fee7 !important; /* Light green */
    border-left: 3px solid #65a30d !important;
  }
  
  /* Computer Science-specific styles */
  .subject-computer-science .answer-space.calculation-space {
    background: #faf5ff !important; /* Light purple */
    border-left: 3px solid #9333ea !important;
    font-family: 'Courier New', monospace !important;
  }
  
  /* History-specific styles */
  .subject-history .answer-space.essay-space {
    background: #fef7ed !important; /* Light orange */
    border-left: 3px solid #ea580c !important;
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
      <div ref={ref} className={`print-paper subject-${subject.toLowerCase().replace(/\s+/g, '-')}`}>
        <style dangerouslySetInnerHTML={{ __html: printStyles }} />
        
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

                // Analyze question structure for intelligent page breaks and answer space
                const hasMultipleParts = /\([a-z]\)/gi.test(question.content);
                const isLongQuestion = question.content.length > 500;
                const hasHighMarks = (question.marks || 0) > 6;
                
                // Analyze question type for answer space sizing
                const questionContent = question.content.toLowerCase();
                const isCalculation = /calculate|find|solve|compute|work out|determine/i.test(questionContent);
                const isExplanation = /explain|describe|discuss|analyse|evaluate|justify|compare|assess/i.test(questionContent);
                const isGraph = /graph|plot|draw|sketch|chart|diagram/i.test(questionContent);
                const isEssay = /essay|write about|discuss in detail|analyse in detail/i.test(questionContent);
                const isProof = /prove|show that|demonstrate|derive/i.test(questionContent);
                const hasFormula = /\\frac|\\sqrt|\\sum|\\int|=|\+|-|\*|\/|\^/i.test(questionContent);
                const isChemicalEquation = /balance|equation|reaction|\\text\{[A-Z][a-z]?\}|H2O|CO2|NaCl/i.test(questionContent);
                const isPhysicsVector = /vector|force|velocity|acceleration|\\vec\{/i.test(questionContent);
                
                // Dynamic answer space calculation
                const baseSpace = Math.max(40, (question.marks || 1) * 15);
                let answerSpaceHeight = baseSpace;
                
                if (isEssay || isExplanation) {
                  answerSpaceHeight = Math.max(120, (question.marks || 1) * 25);
                } else if (isGraph) {
                  answerSpaceHeight = Math.max(200, (question.marks || 1) * 30);
                } else if (isChemicalEquation) {
                  answerSpaceHeight = Math.max(100, (question.marks || 1) * 25);
                } else if (isPhysicsVector) {
                  answerSpaceHeight = Math.max(90, (question.marks || 1) * 22);
                } else if (isCalculation || hasFormula) {
                  answerSpaceHeight = Math.max(80, (question.marks || 1) * 20);
                } else if (isProof) {
                  answerSpaceHeight = Math.max(100, (question.marks || 1) * 22);
                }
                
                // Adjust for multiple parts
                if (hasMultipleParts) {
                  const partCount = (questionContent.match(/\([a-z]\)/g) || []).length;
                  answerSpaceHeight = Math.max(answerSpaceHeight, partCount * 50);
                }
                
                const questionClasses = `question ${hasMultipleParts ? 'multi-part' : 'single-part'} ${isLongQuestion ? 'long-question' : ''} ${hasHighMarks ? 'high-marks' : ''}`;

                return (
                  <div 
                    key={`${sectionIndex}-${questionIndex}`} 
                    className={questionClasses}
                    data-parts={hasMultipleParts ? 'multiple' : 'single'}
                    data-marks={question.marks || 1}
                    data-question-type={
                      isEssay ? 'essay' : 
                      isGraph ? 'graph' : 
                      isChemicalEquation ? 'chemical-equation' :
                      isPhysicsVector ? 'physics-vector' :
                      isCalculation ? 'calculation' : 
                      'general'
                    }
                  >
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
                    <div 
                      className={`answer-space ${
                        isGraph ? 'graph-space' : 
                        isEssay ? 'essay-space' : 
                        isChemicalEquation ? 'equation-space' :
                        isCalculation ? 'calculation-space' : 
                        ''
                      }`}
                      data-question-type={
                        isEssay ? 'essay' : 
                        isGraph ? 'graph' : 
                        isChemicalEquation ? 'chemical-equation' :
                        isPhysicsVector ? 'physics-vector' :
                        isCalculation ? 'calculation' : 
                        'general'
                      }
                    >
                      {isGraph ? (
                        <div style={{ minHeight: `${answerSpaceHeight}pt`, border: '1px dotted #ccc', position: 'relative' }}>
                          <div style={{ position: 'absolute', top: '5pt', left: '5pt', fontSize: '8pt', color: '#666' }}>
                            Graph/Diagram space
                          </div>
                        </div>
                      ) : isChemicalEquation ? (
                        <div style={{ minHeight: `${answerSpaceHeight}pt`, position: 'relative' }}>
                          <div style={{ 
                            height: '30pt', 
                            borderBottom: '2px solid #16a34a', 
                            marginBottom: '20pt',
                            position: 'relative'
                          }}>
                            <div style={{ position: 'absolute', top: '-15pt', left: '0', fontSize: '8pt', color: '#666' }}>
                              Chemical equation:
                            </div>
                          </div>
                          <div style={{ minHeight: `${Math.max(50, answerSpaceHeight - 50)}pt` }}></div>
                        </div>
                      ) : isEssay || isExplanation ? (
                        <div style={{ minHeight: `${answerSpaceHeight}pt` }}>
                          {Array.from({length: Math.floor(answerSpaceHeight / 20)}, (_, i) => (
                            <div key={i} style={{ 
                              borderBottom: '1px solid #ddd', 
                              height: '20pt', 
                              marginBottom: '2pt' 
                            }}></div>
                          ))}
                        </div>
                      ) : (
                        <div style={{ minHeight: `${answerSpaceHeight}pt` }}></div>
                      )}
                    </div>

                    {/* Solution (if enabled) - without mark scheme */}
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
          
          {/* Mark Schemes Section - Separate Page */}
          {showSolutions && allQuestions.some(q => q.markScheme && q.markScheme.length > 0) && (
            <div style={{ pageBreakBefore: 'always', marginTop: '30pt' }}>
              <div className="paper-header" style={{ borderBottom: '2px solid #000', paddingBottom: '12pt', marginBottom: '20pt' }}>
                <h2 style={{ fontSize: '16pt', fontWeight: 'bold', margin: '0', textAlign: 'center' }}>
                  Mark Schemes
                </h2>
              </div>
              
              {allQuestions.map((question, qIndex) => {
                if (!question.markScheme || question.markScheme.length === 0) return null;
                
                return (
                  <div key={qIndex} style={{ marginBottom: '25pt', pageBreakInside: 'avoid' }}>
                    <div style={{ 
                      fontSize: '12pt', 
                      fontWeight: 'bold', 
                      marginBottom: '8pt',
                      borderBottom: '1px solid #333',
                      paddingBottom: '3pt'
                    }}>
                      Question {qIndex + 1} ({question.marks} {question.marks === 1 ? 'mark' : 'marks'})
                    </div>
                    <ul style={{ fontSize: '10pt', paddingLeft: '20pt', margin: '0', lineHeight: '1.4' }}>
                      {question.markScheme.map((mark, markIndex) => (
                        <li key={markIndex} style={{ marginBottom: '3pt' }}>
                          {mark}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}

          {/* Print Footer */}
          <div className="print-footer">
            Generated by Past Papers - www.past-papers.co.uk
          </div>
      </div>
    );
  }
);

PrintablePaper.displayName = 'PrintablePaper';