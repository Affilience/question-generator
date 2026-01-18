'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const DEMO_QUESTION = {
  topic: 'Algebra — Quadratic Equations',
  content: 'Solve the quadratic equation by factorisation:',
  equation: 'x² + 5x + 6 = 0',
  instruction: 'Show your working clearly.',
  marks: 3,
  solution: [
    { text: 'Find two numbers that multiply to give +6 and add to give +5', mark: null },
    { text: 'The numbers are +2 and +3', mark: null },
    { text: 'Factorise: (x + 2)(x + 3) = 0', mark: 'M1' },
    { text: 'Set each bracket equal to zero:', mark: null },
    { text: 'x + 2 = 0  →  x = −2', mark: 'A1' },
    { text: 'x + 3 = 0  →  x = −3', mark: 'A1' },
  ],
  markScheme: [
    { code: 'M1', description: 'Correct factorisation into two brackets' },
    { code: 'A1', description: 'x = −2' },
    { code: 'A1', description: 'x = −3' },
  ],
};

export function TypingDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const [phase, setPhase] = useState<'idle' | 'question' | 'solution' | 'markscheme' | 'done'>('idle');
  const [displayedContent, setDisplayedContent] = useState('');
  const [displayedEquation, setDisplayedEquation] = useState('');
  const [solutionLines, setSolutionLines] = useState<typeof DEMO_QUESTION.solution>([]);
  const [showMarkScheme, setShowMarkScheme] = useState(false);
  const [showSolutionHeader, setShowSolutionHeader] = useState(false);

  // Start animation when in view
  useEffect(() => {
    if (isInView && phase === 'idle') {
      setPhase('question');
    }
  }, [isInView, phase]);

  // Type question content
  useEffect(() => {
    if (phase !== 'question') return;

    const fullContent = DEMO_QUESTION.content;
    let index = 0;

    const typeContent = setInterval(() => {
      if (index <= fullContent.length) {
        setDisplayedContent(fullContent.slice(0, index));
        index++;
      } else {
        clearInterval(typeContent);
        // Type equation
        let eqIndex = 0;
        const typeEquation = setInterval(() => {
          if (eqIndex <= DEMO_QUESTION.equation.length) {
            setDisplayedEquation(DEMO_QUESTION.equation.slice(0, eqIndex));
            eqIndex++;
          } else {
            clearInterval(typeEquation);
            setTimeout(() => setPhase('solution'), 800);
          }
        }, 40);
      }
    }, 30);

    return () => clearInterval(typeContent);
  }, [phase]);

  // Type solution lines
  useEffect(() => {
    if (phase !== 'solution') return;

    setShowSolutionHeader(true);

    const addLine = (index: number) => {
      if (index < DEMO_QUESTION.solution.length) {
        const currentLine = DEMO_QUESTION.solution[index];
        setSolutionLines(prev => [...prev, currentLine]);
        setTimeout(() => addLine(index + 1), 400);
      } else {
        setTimeout(() => setPhase('markscheme'), 600);
      }
    };

    setTimeout(() => addLine(0), 300);
  }, [phase]);

  // Show mark scheme
  useEffect(() => {
    if (phase !== 'markscheme') return;
    setShowMarkScheme(true);
    setTimeout(() => setPhase('done'), 500);
  }, [phase]);

  return (
    <div ref={containerRef} className="max-w-2xl mx-auto">
      {/* Question Card */}
      <div className="bg-[#111] rounded-2xl border border-white/[0.06] overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded">
              AQA
            </span>
            <span className="px-2.5 py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded">
              GCSE Maths
            </span>
          </div>
          <span className="text-white/40 text-sm">Medium difficulty</span>
        </div>

        {/* Question Content */}
        <div className="p-5 sm:p-6">
          <div className="text-white/40 text-sm mb-3">
            {DEMO_QUESTION.topic}
          </div>
          <div className="text-white text-lg leading-relaxed mb-5 min-h-[28px]">
            {displayedContent}
            {phase === 'question' && displayedContent.length < DEMO_QUESTION.content.length && (
              <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 animate-pulse" />
            )}
          </div>
          <div className="bg-white/[0.03] rounded-xl p-5 mb-5 text-center border border-white/[0.04] min-h-[76px] flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl font-mono">
              {displayedEquation}
              {phase === 'question' && displayedContent.length >= DEMO_QUESTION.content.length && displayedEquation.length < DEMO_QUESTION.equation.length && (
                <span className="inline-block w-0.5 h-6 bg-blue-400 ml-0.5 animate-pulse" />
              )}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/40">{DEMO_QUESTION.instruction}</span>
            <span className="text-blue-400 font-medium">[{DEMO_QUESTION.marks} marks]</span>
          </div>
        </div>

        {/* Solution Section */}
        {showSolutionHeader && (
          <div className="border-t border-white/[0.06]">
            <div className="px-5 sm:px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-medium">Solution</span>
              </div>

              <div className="space-y-3">
                {solutionLines.map((line, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-1 text-white/70">{line.text}</div>
                    {line.mark && (
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs font-mono rounded shrink-0">
                        {line.mark}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mark Scheme Section */}
        {showMarkScheme && (
          <div className="border-t border-white/[0.06] animate-fade-in">
            <div className="px-5 sm:px-6 py-4">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="text-white font-medium">Mark Scheme</span>
              </div>

              <div className="bg-white/[0.02] rounded-lg border border-white/[0.04] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left text-white/40 font-medium px-4 py-2 w-16">Mark</th>
                      <th className="text-left text-white/40 font-medium px-4 py-2">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEMO_QUESTION.markScheme.map((item, index) => (
                      <tr key={index} className="border-b border-white/[0.04] last:border-0">
                        <td className="px-4 py-2">
                          <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-mono rounded">
                            {item.code}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-white/60">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Features below demo */}
      <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { icon: '⚡', text: 'Instant generation' },
          { icon: '🎯', text: 'Exam-accurate' },
          { icon: '📝', text: 'Full solutions' },
        ].map(item => (
          <div key={item.text} className="text-center py-4 px-2 rounded-xl bg-white/[0.02]">
            <div className="text-xl mb-1.5">{item.icon}</div>
            <div className="text-white/60 text-xs sm:text-sm">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
