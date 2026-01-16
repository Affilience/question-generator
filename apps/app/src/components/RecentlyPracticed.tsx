'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllProgress } from '@/lib/progress';
import { TopicProgress } from '@/types';

interface RecentTopic {
  topicId: string;
  displayName: string;
  icon: string;
  lastPracticed: string;
  attempted: number;
  correct: number;
  level: string;
  subject: string;
  examBoard: string;
}

// Storage key for recent topics
const RECENT_TOPICS_KEY = 'recently-practiced-topics';

// Topic metadata - maps topic IDs to display info
const TOPIC_INFO: Record<string, { name: string; icon: string; subject: string }> = {
  'quadratic-equations': { name: 'Quadratic Equations', icon: '📐', subject: 'maths' },
  'algebra': { name: 'Algebra', icon: '🔢', subject: 'maths' },
  'geometry': { name: 'Geometry', icon: '📏', subject: 'maths' },
  'trigonometry': { name: 'Trigonometry', icon: '📐', subject: 'maths' },
  'statistics': { name: 'Statistics', icon: '📊', subject: 'maths' },
  'probability': { name: 'Probability', icon: '🎲', subject: 'maths' },
  'number': { name: 'Number', icon: '🔢', subject: 'maths' },
  'ratio': { name: 'Ratio & Proportion', icon: '⚖️', subject: 'maths' },
  'forces': { name: 'Forces', icon: '⚡', subject: 'physics' },
  'energy': { name: 'Energy', icon: '💡', subject: 'physics' },
  'waves': { name: 'Waves', icon: '🌊', subject: 'physics' },
  'electricity': { name: 'Electricity', icon: '⚡', subject: 'physics' },
  'atomic-structure': { name: 'Atomic Structure', icon: '⚛️', subject: 'chemistry' },
  'bonding': { name: 'Bonding', icon: '🔗', subject: 'chemistry' },
  'reactions': { name: 'Chemical Reactions', icon: '🧪', subject: 'chemistry' },
  'cells': { name: 'Cells', icon: '🔬', subject: 'biology' },
  'genetics': { name: 'Genetics', icon: '🧬', subject: 'biology' },
};

/**
 * Save a topic to recent history
 */
export function addToRecentTopics(topic: {
  topicId: string;
  level: string;
  subject: string;
  examBoard: string;
}): void {
  if (typeof window === 'undefined') return;

  try {
    const stored = localStorage.getItem(RECENT_TOPICS_KEY);
    const recent: RecentTopic[] = stored ? JSON.parse(stored) : [];

    // Get topic info
    const info = TOPIC_INFO[topic.topicId] || {
      name: topic.topicId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      icon: '📚',
      subject: topic.subject,
    };

    // Get progress
    const allProgress = getAllProgress();
    const progress = allProgress[topic.topicId] || { attempted: 0, correct: 0 };

    // Create or update entry
    const entry: RecentTopic = {
      topicId: topic.topicId,
      displayName: info.name,
      icon: info.icon,
      lastPracticed: new Date().toISOString(),
      attempted: progress.attempted,
      correct: progress.correct,
      level: topic.level,
      subject: topic.subject,
      examBoard: topic.examBoard,
    };

    // Remove if already exists
    const filtered = recent.filter(r => r.topicId !== topic.topicId);

    // Add to front
    const updated = [entry, ...filtered].slice(0, 10); // Keep last 10

    localStorage.setItem(RECENT_TOPICS_KEY, JSON.stringify(updated));
  } catch {
    console.error('Failed to save recent topic');
  }
}

/**
 * Get recent topics
 */
export function getRecentTopics(): RecentTopic[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(RECENT_TOPICS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

interface RecentlyPracticedProps {
  maxItems?: number;
  showHeader?: boolean;
}

export function RecentlyPracticed({ maxItems = 5, showHeader = true }: RecentlyPracticedProps) {
  const [recentTopics, setRecentTopics] = useState<RecentTopic[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRecentTopics(getRecentTopics().slice(0, maxItems));
  }, [maxItems]);

  if (!mounted || recentTopics.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-4 sm:p-6">
      {showHeader && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <span>🕐</span>
            Recently Practiced
          </h3>
          <Link
            href="/dashboard"
            className="text-sm text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            View all
          </Link>
        </div>
      )}

      <div className="space-y-2">
        {recentTopics.map((topic, index) => {
          const accuracy = topic.attempted > 0
            ? Math.round((topic.correct / topic.attempted) * 100)
            : null;

          return (
            <motion.div
              key={topic.topicId}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`/${topic.level}/${topic.subject}/${topic.examBoard}/practice/${topic.topicId}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#222222] transition-colors group"
              >
                <span className="text-2xl">{topic.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium truncate group-hover:text-[#3b82f6] transition-colors">
                    {topic.displayName}
                  </div>
                  <div className="text-xs text-[#666666] flex items-center gap-2">
                    <span className="uppercase">{topic.level}</span>
                    <span>•</span>
                    <span>{topic.examBoard.toUpperCase()}</span>
                    {accuracy !== null && (
                      <>
                        <span>•</span>
                        <span className={accuracy >= 70 ? 'text-green-400' : accuracy >= 40 ? 'text-yellow-400' : 'text-red-400'}>
                          {accuracy}% accuracy
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-[#444444] group-hover:text-[#3b82f6] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {recentTopics.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
          <Link
            href={`/${recentTopics[0].level}/${recentTopics[0].subject}/${recentTopics[0].examBoard}/practice/${recentTopics[0].topicId}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-xl transition-colors"
          >
            <span>Continue practicing</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
