'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { animate, stagger } from 'animejs';

const subjects = [
  { name: 'Mathematics', subtopics: '45+', icon: '∑', href: '/gcse/maths' },
  { name: 'Physics', subtopics: '38+', icon: '⚛', href: '/gcse/physics' },
  { name: 'Chemistry', subtopics: '42+', icon: '⚗', href: '/gcse/chemistry' },
  { name: 'Biology', subtopics: '40+', icon: '🧬', href: '/gcse/biology' },
  { name: 'Economics', subtopics: '28+', icon: '📈', href: '/a-level/economics' },
  { name: 'Psychology', subtopics: '32+', icon: '🧠', href: '/gcse/psychology' },
  { name: 'History', subtopics: '35+', icon: '📜', href: '/gcse/history' },
  { name: 'English Lit', subtopics: '24+', icon: '📚', href: '/gcse/english-literature' },
];

export function AnimatedSubjectsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial state
    const cards = container.querySelectorAll('.subject-card');
    cards.forEach((card) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(30px) scale(0.95)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animate(cards, {
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.95, 1],
              duration: 600,
              delay: stagger(80, { grid: [4, 2], from: 'first' }),
              ease: 'outQuart',
            });

            // Animate icons with a slight bounce
            animate(container.querySelectorAll('.subject-icon'), {
              scale: [0, 1.2, 1],
              duration: 500,
              delay: stagger(80, { grid: [4, 2], from: 'first', start: 200 }),
              ease: 'outBack',
            });

            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
    >
      {subjects.map((subject) => (
        <Link
          key={subject.name}
          href={subject.href}
          className="subject-card block bg-neutral-50 hover:bg-neutral-100 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
        >
          <div
            className="subject-icon text-3xl sm:text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            {subject.icon}
          </div>
          <h3 className="font-semibold text-neutral-900 text-sm sm:text-base mb-1">
            {subject.name}
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm">{subject.subtopics} subtopics</p>
        </Link>
      ))}
    </div>
  );
}
