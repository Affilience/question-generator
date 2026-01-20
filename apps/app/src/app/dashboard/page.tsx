'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getUserStats, StatsFilter } from '@/lib/supabase';
import { StatCard } from '@/components/dashboard/StatCard';
import { StreakDisplay } from '@/components/dashboard/StreakDisplay';
import { RecentMistakesCard } from '@/components/dashboard/RecentMistakesCard';
import { SubscriptionStatus } from '@/components/dashboard/SubscriptionStatus';

interface DashboardStats {
  totalAttempted: number;
  totalCorrect: number;
  accuracy: number;
  currentStreak: number;
  recentWrong: Array<{
    id: string;
    topic_id: string;
    subtopic: string;
    difficulty: string;
    question_content: string;
    question_solution: string | null;
    attempted_at: string;
  }>;
  topicCoverage: Array<{
    topicId: string;
    attempted: number;
    correct: number;
    accuracy: number;
    subtopicsCovered: number;
  }>;
  weakAreas: Array<{
    topic_id: string;
    subtopic: string | null;
    attempted: number;
    correct: number;
  }>;
}

const SUBJECTS = [
  { id: '', label: 'All Subjects' },
  { id: 'maths', label: 'Maths' },
  { id: 'physics', label: 'Physics' },
  { id: 'chemistry', label: 'Chemistry' },
  { id: 'biology', label: 'Biology' },
  { id: 'computer-science', label: 'Computer Science' },
  { id: 'economics', label: 'Economics' },
  { id: 'business', label: 'Business' },
  { id: 'psychology', label: 'Psychology' },
];

const LEVELS = [
  { id: '', label: 'All Levels' },
  { id: 'gcse', label: 'GCSE' },
  { id: 'a-level', label: 'A-Level' },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading: authLoading, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };
  const [statsLoading, setStatsLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<StatsFilter>({});

  const loadStats = useCallback(async (uid: string, currentFilter: StatsFilter) => {
    try {
      setStatsLoading(true);
      const userStats = await getUserStats(uid, currentFilter);
      setStats(userStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setStatsLoading(false);
    }
  }, []);

  // Load stats when user is available
  useEffect(() => {
    if (user?.id) {
      loadStats(user.id, filter);
    }
  }, [user?.id, filter, loadStats]);

  const loading = authLoading || (user && statsLoading && !stats);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-[#2a2a2a] border-t-[#3b82f6] rounded-full animate-spin mb-4" />
          <p className="text-[#a1a1a1]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
          <p className="text-[#a1a1a1] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#60a5fa] transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen safe-area-inset-top">
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/start"
              className="back-link inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to topics
            </Link>

            {/* User info and logout */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#a1a1a1]">
                {user?.user_metadata?.display_name || user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="text-sm text-[#666666] hover:text-white transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Your Dashboard</h1>
              <p className="text-[#a1a1a1]">Track your progress and identify areas to improve</p>
            </div>
            <div className="sm:w-64">
              <SubscriptionStatus />
            </div>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-3">
            <select
              value={filter.subject || ''}
              onChange={(e) => setFilter({ ...filter, subject: e.target.value || undefined })}
              className="px-4 py-2.5 min-h-[44px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white text-sm focus:outline-none focus:border-[#3b82f6] transition-colors"
            >
              {SUBJECTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>

            <select
              value={filter.qualification || ''}
              onChange={(e) => setFilter({ ...filter, qualification: e.target.value || undefined })}
              className="px-4 py-2.5 min-h-[44px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white text-sm focus:outline-none focus:border-[#3b82f6] transition-colors"
            >
              {LEVELS.map((l) => (
                <option key={l.id} value={l.id}>{l.label}</option>
              ))}
            </select>

            {(filter.subject || filter.qualification) && (
              <button
                onClick={() => setFilter({})}
                className="px-4 py-2.5 min-h-[44px] text-sm text-[#a1a1a1] hover:text-white transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Questions Practiced"
            value={stats?.totalAttempted || 0}
            color="blue"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <StatCard
            label="Correct Answers"
            value={stats?.totalCorrect || 0}
            color="green"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          />
          <StatCard
            label="Accuracy"
            value={`${stats?.accuracy || 0}%`}
            color="purple"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <StatCard
            label="Current Streak"
            value={`${stats?.currentStreak || 0} days`}
            color="orange"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            }
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Streak */}
          <div>
            <StreakDisplay currentStreak={stats?.currentStreak || 0} />
          </div>

          {/* Right Column - Recent Mistakes */}
          <div>
            <RecentMistakesCard mistakes={stats?.recentWrong || []} />
          </div>
        </div>

        {/* Empty State CTA */}
        {stats?.totalAttempted === 0 && (
          <div className="mt-8 bg-[#1a2a3a] border border-[#3b82f6]/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-xl font-bold text-white mb-2">Start Practicing!</h2>
            <p className="text-[#a1a1a1] mb-6 max-w-md mx-auto">
              Your dashboard will fill up with insights as you practice. Complete questions to see your progress, streaks, and areas to improve.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#60a5fa] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Choose a topic to start
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
