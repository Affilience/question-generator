'use client';

import { Subject } from '@/types';
import { subjectHasPracticals } from '@/lib/practicals';

export type TabType = 'topics' | 'practicals';

interface SubjectTabsProps {
  subject: Subject;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function SubjectTabs({ subject, activeTab, onTabChange }: SubjectTabsProps) {
  // Only show tabs for subjects with practicals (physics, chemistry)
  if (!subjectHasPracticals(subject)) {
    return null;
  }

  return (
    <div className="flex gap-2 mb-8">
      <button
        onClick={() => onTabChange('topics')}
        className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
          activeTab === 'topics'
            ? 'bg-[#3b82f6] text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
            : 'bg-[#1a1a1a] text-[#a1a1a1] border border-[#2a2a2a] hover:border-[#3b82f6]/50 hover:text-white'
        }`}
      >
        Topics
      </button>
      <button
        onClick={() => onTabChange('practicals')}
        className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
          activeTab === 'practicals'
            ? 'bg-[#10b981] text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
            : 'bg-[#1a1a1a] text-[#a1a1a1] border border-[#2a2a2a] hover:border-[#10b981]/50 hover:text-white'
        }`}
      >
        Required Practicals
      </button>
    </div>
  );
}
