'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { getBookmarks, removeBookmark, BookmarkedQuestion } from '@/lib/supabase';
import { getTopicById } from '@/lib/topics';
import { MathRenderer } from '@/components/MathRenderer';

export default function BookmarksPage() {
  const { user, loading: authLoading } = useAuth();
  const [bookmarks, setBookmarks] = useState<BookmarkedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    async function load() {
      if (user?.id) {
        const data = await getBookmarks(user.id);
        setBookmarks(data);
      }
      setLoading(false);
    }
    if (!authLoading) {
      load();
    }
  }, [user?.id, authLoading]);

  const handleRemove = async (bookmarkId: string) => {
    if (!user?.id) return;
    const success = await removeBookmark(user.id, bookmarkId);
    if (success) {
      setBookmarks(prev => prev.filter(b => b.id !== bookmarkId));
    }
  };

  const filteredBookmarks = filter === 'all'
    ? bookmarks
    : bookmarks.filter(b => b.topic_id === filter);

  const uniqueTopics = [...new Set(bookmarks.map(b => b.topic_id))];

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
          <p className="text-[#a1a1a1]">Loading bookmarks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen safe-area-inset-top">
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        <header className="mb-6 sm:mb-8">
          <Link
            href="/start"
            className="back-link inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to topics
          </Link>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Saved Questions</h1>
              <p className="text-[#a1a1a1]">
                {bookmarks.length} {bookmarks.length === 1 ? 'question' : 'questions'} bookmarked
              </p>
            </div>
            <div className="text-3xl sm:text-4xl">🔖</div>
          </div>
        </header>

        {/* Filters */}
        {bookmarks.length > 0 && uniqueTopics.length > 1 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#1a1a1a] text-[#a1a1a1] hover:bg-[#222222]'
              }`}
            >
              All
            </button>
            {uniqueTopics.map(topicId => {
              const topic = getTopicById(topicId);
              return (
                <button
                  key={topicId}
                  onClick={() => setFilter(topicId)}
                  className={`px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                    filter === topicId
                      ? 'bg-[#3b82f6] text-white'
                      : 'bg-[#1a1a1a] text-[#a1a1a1] hover:bg-[#222222]'
                  }`}
                >
                  <span>{topic?.icon}</span>
                  {topic?.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {bookmarks.length === 0 && (
          <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-12 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-xl font-bold text-white mb-2">No bookmarks yet</h2>
            <p className="text-[#a1a1a1] mb-6">
              Bookmark questions while practicing to save them for later review
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#60a5fa]"
            >
              Start practicing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Bookmarks List */}
        {filteredBookmarks.length > 0 && (
          <div className="space-y-4">
            {filteredBookmarks.map((bookmark) => {
              const topic = getTopicById(bookmark.topic_id);
              const isExpanded = expandedId === bookmark.id;

              return (
                <div
                  key={bookmark.id}
                  className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-4 flex items-start gap-4">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : bookmark.id)}
                      className="flex-1 text-left"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{topic?.icon || '📚'}</span>
                        <span className="text-sm text-[#a1a1a1]">
                          {bookmark.subtopic?.replace(' (H)', '')}
                        </span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          bookmark.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                          bookmark.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {bookmark.difficulty}
                        </span>
                        <span className="text-xs text-[#666666]">
                          {bookmark.question_marks} marks
                        </span>
                      </div>
                      <div className={`text-white ${isExpanded ? '' : 'line-clamp-2'}`}>
                        <MathRenderer content={bookmark.question_content} />
                      </div>
                    </button>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/practice/${bookmark.topic_id}/${encodeURIComponent(bookmark.subtopic)}`}
                        className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#222222] text-[#a1a1a1] hover:bg-[#3b82f6] hover:text-white transition-colors"
                        title="Practice this subtopic"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => handleRemove(bookmark.id)}
                        className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#222222] text-[#666666] hover:bg-red-500/20 hover:text-red-400 transition-colors"
                        title="Remove bookmark"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Expanded Solution */}
                  {isExpanded && bookmark.question_solution && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <div className="bg-[#222222] rounded-xl p-4">
                        <div className="text-xs font-medium text-[#666666] mb-2">SOLUTION</div>
                        <div className="text-[#a1a1a1]">
                          <MathRenderer content={bookmark.question_solution} />
                        </div>

                        {bookmark.mark_scheme && bookmark.mark_scheme.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-[#2a2a2a]">
                            <div className="text-xs font-medium text-[#666666] mb-2">MARK SCHEME</div>
                            <ul className="space-y-1">
                              {bookmark.mark_scheme.map((point, i) => (
                                <li key={i} className="text-sm text-[#a1a1a1]">
                                  <MathRenderer content={point} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
