'use client';

import { useState, useEffect } from 'react';
import { addBookmark, removeBookmark, isBookmarked } from '@/lib/supabase';

interface BookmarkButtonProps {
  userId: string | null;
  question: {
    topicId: string;
    subtopic: string;
    difficulty: string;
    content: string;
    solution: string;
    marks: number;
    markScheme: string[];
  };
}

export function BookmarkButton({ userId, question }: BookmarkButtonProps) {
  const [bookmarkId, setBookmarkId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  useEffect(() => {
    if (userId && question.content) {
      isBookmarked(userId, question.content).then(setBookmarkId);
    }
  }, [userId, question.content]);

  const handleToggle = async () => {
    if (!userId || loading) return;

    setLoading(true);

    try {
      if (bookmarkId) {
        // Remove bookmark
        const success = await removeBookmark(userId, bookmarkId);
        if (success) {
          setBookmarkId(null);
          setShowToast('Bookmark removed');
        }
      } else {
        // Add bookmark
        const result = await addBookmark(userId, question);
        if (result.success) {
          const newId = await isBookmarked(userId, question.content);
          setBookmarkId(newId);
          setShowToast('Question bookmarked!');
        } else {
          setShowToast(result.error || 'Failed to bookmark');
        }
      }
    } finally {
      setLoading(false);
      setTimeout(() => setShowToast(null), 2000);
    }
  };

  if (!userId) return null;

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        disabled={loading}
        className={`p-2 rounded-lg transition-all duration-300 ${
          bookmarkId
            ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
            : 'bg-[#222222] text-[#666666] hover:bg-[#2a2a2a] hover:text-[#a1a1a1]'
        } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={bookmarkId ? 'Remove bookmark' : 'Bookmark this question'}
      >
        <svg
          className="w-5 h-5"
          fill={bookmarkId ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button>

      {/* Toast notification */}
      {showToast && (
        <div className="absolute right-0 top-12 z-10 px-3 py-2 bg-[#222222] border border-[#333333] rounded-lg text-sm text-white whitespace-nowrap animate-fade-in shadow-lg">
          {showToast}
        </div>
      )}
    </div>
  );
}
