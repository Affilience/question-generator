'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTopicById } from '@/lib/topics';
import { MathRenderer } from '@/components/MathRenderer';

interface QuestionAttempt {
  id: string;
  topic_id: string;
  subtopic: string;
  difficulty: string;
  question_content: string;
  question_solution: string | null;
  attempted_at: string;
}

interface RecentMistakesCardProps {
  mistakes: QuestionAttempt[];
}

export function RecentMistakesCard({ mistakes }: RecentMistakesCardProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const router = useRouter();

  const handleRetryTopic = (mistake: QuestionAttempt) => {
    const topic = getTopicById(mistake.topic_id);
    if (topic) {
      // Navigate to the practice page for this specific topic and difficulty
      router.push(`/practice?subject=${topic.subject}&level=${topic.qualification}&board=${topic.examBoard}&topicId=${mistake.topic_id}&difficulty=${mistake.difficulty}&subtopic=${encodeURIComponent(mistake.subtopic)}`);
    }
  };

  if (mistakes.length === 0) {
    return (
      <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
        <h3 className="font-semibold text-white mb-4">Recent Mistakes</h3>
        <div className="text-center py-8">
          <div className="text-4xl mb-3">✨</div>
          <p className="text-[#a1a1a1] text-sm">
            No recent mistakes — keep up the great work!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Recent Mistakes</h3>
        <span className="text-xs text-[#666666]">Review & retry</span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {mistakes.map((mistake) => {
          const topic = getTopicById(mistake.topic_id);
          const isExpanded = expandedId === mistake.id;
          const timeAgo = getTimeAgo(mistake.attempted_at);

          return (
            <div
              key={mistake.id}
              className="bg-[#222222] rounded-xl overflow-hidden border border-transparent transition-all duration-300 hover:border-[#333333]"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : mistake.id)}
                className="w-full p-4 text-left"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{topic?.icon || '📚'}</span>
                      <span className="text-xs text-[#666666] truncate">
                        {mistake.subtopic?.replace(' (H)', '')}
                      </span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        mistake.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                        mistake.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {mistake.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-[#a1a1a1] line-clamp-2">
                      {mistake.question_content.substring(0, 100)}...
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs text-[#666666]">{timeAgo}</span>
                    <svg
                      className={`w-4 h-4 text-[#666666] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 animate-fade-in">
                  <div className="border-t border-[#2a2a2a] pt-4">
                    <div className="text-xs font-medium text-[#666666] mb-2">QUESTION</div>
                    <div className="text-sm text-white mb-4">
                      <MathRenderer content={mistake.question_content} />
                    </div>

                    {mistake.question_solution && (
                      <>
                        <div className="text-xs font-medium text-[#666666] mb-2">SOLUTION</div>
                        <div className="text-sm text-[#a1a1a1] bg-[#1a1a1a] rounded-lg p-3 mb-4">
                          <MathRenderer content={mistake.question_solution} />
                        </div>
                      </>
                    )}

                    {/* Retry Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRetryTopic(mistake);
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Practice More {mistake.difficulty === 'easy' ? 'Easy' : mistake.difficulty === 'medium' ? 'Medium' : 'Hard'} Questions
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}
