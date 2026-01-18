'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 12, suffix: '+', label: 'Subjects' },
  { value: 300, suffix: '+', label: 'Topics' },
  { value: 3, suffix: '', label: 'Exam Boards' },
  { value: 100, suffix: '%', label: 'Curriculum Coverage' },
];

export function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animate each stat using requestAnimationFrame for v4 compatibility
            stats.forEach((stat, index) => {
              const startTime = performance.now();
              const duration = 2000;
              const delay = index * 150;

              const animateValue = (currentTime: number) => {
                const elapsed = currentTime - startTime - delay;
                if (elapsed < 0) {
                  requestAnimationFrame(animateValue);
                  return;
                }

                const progress = Math.min(elapsed / duration, 1);
                // easeOutExpo
                const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentValue = Math.round(eased * stat.value);

                setValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = currentValue;
                  return newValues;
                });

                if (progress < 1) {
                  requestAnimationFrame(animateValue);
                }
              };

              requestAnimationFrame(animateValue);
            });
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            {values[index]}
            <span className="text-blue-400">{stat.suffix}</span>
          </div>
          <div className="text-white/50 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
