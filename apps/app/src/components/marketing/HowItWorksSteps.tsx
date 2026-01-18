'use client';

import { useEffect, useRef, useState } from 'react';
import { createTimeline, stagger } from 'animejs';

const steps = [
  { num: '1', title: 'Pick a topic', desc: 'Choose your subject, exam board, and specific subtopic.' },
  { num: '2', title: 'Generate questions', desc: 'Get instant, unique questions at your chosen difficulty.' },
  { num: '3', title: 'Learn from solutions', desc: 'Review step-by-step working and mark schemes.' },
];

export function HowItWorksSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial states
    const stepElements = container.querySelectorAll('.step-item');
    const numberElements = container.querySelectorAll('.step-number');
    const textElements = container.querySelectorAll('.step-text');

    stepElements.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Timeline for coordinated animations
            const tl = createTimeline({
              defaults: {
                ease: 'outExpo',
              },
            });

            // Fade in step containers with stagger
            tl.add(stepElements, {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              delay: stagger(200),
            });

            // Scale and pulse the numbers
            tl.add(numberElements, {
              scale: [0.5, 1.1, 1],
              duration: 600,
              delay: stagger(200),
            }, '-=600');

            // Animate text reveal
            tl.add(textElements, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 500,
              delay: stagger(200),
            }, '-=400');

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
    >
      {steps.map((step) => (
        <div key={step.num} className="step-item text-center">
          <div className="step-number w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white text-xl font-semibold flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/25">
            {step.num}
          </div>
          <div className="step-text">
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-white/50">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
