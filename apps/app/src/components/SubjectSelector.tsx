'use client';

import { Subject } from '@/types';

interface SubjectSelectorProps {
  selected: Subject;
  onChange: (subject: Subject) => void;
  availableSubjects?: Subject[];
}

const subjectInfo: Partial<Record<Subject, { name: string; icon: string; color: string }>> = {
  maths: {
    name: 'Maths',
    icon: '📐',
    color: 'bg-blue-500',
  },
  physics: {
    name: 'Physics',
    icon: '⚛️',
    color: 'bg-purple-500',
  },
  chemistry: {
    name: 'Chemistry',
    icon: '🧪',
    color: 'bg-green-500',
  },
  biology: {
    name: 'Biology',
    icon: '🧬',
    color: 'bg-emerald-500',
  },
};

export function SubjectSelector({
  selected,
  onChange,
  availableSubjects = ['maths', 'physics', 'chemistry', 'biology'],
}: SubjectSelectorProps) {
  return (
    <div className="flex gap-2 mb-6">
      {availableSubjects.map((subject) => {
        const info = subjectInfo[subject];
        const isSelected = selected === subject;

        return (
          <button
            key={subject}
            onClick={() => onChange(subject)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              isSelected
                ? `${info?.color} text-white shadow-lg`
                : 'bg-[#1a1a1a] text-[#a1a1a1] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:text-white'
            }`}
          >
            <span className="text-lg">{info?.icon}</span>
            <span>{info?.name}</span>
          </button>
        );
      })}
    </div>
  );
}
