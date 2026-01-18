'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { TopicProgress } from '@/types';

// Local storage key
const STORAGE_KEY = 'question-generator-progress';

/**
 * Get all progress from localStorage (fallback for non-logged-in users)
 */
function getLocalProgress(): Record<string, TopicProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Hook for synced progress that uses Supabase when logged in, localStorage otherwise
 */
export function useSyncedProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});
  const [loading, setLoading] = useState(true);

  // Load progress based on auth state
  useEffect(() => {
    async function loadProgress() {
      setLoading(true);

      if (user?.id) {
        // Load from Supabase
        const supabase = createClient();
        const { data } = await supabase
          .from('user_topic_progress')
          .select('topic_id, subtopic, attempted, correct, last_practiced_at')
          .eq('user_id', user.id);

        if (data) {
          // Convert to TopicProgress format, keyed by topic_id
          const progressMap: Record<string, TopicProgress> = {};
          for (const row of data) {
            const key = row.subtopic ? `${row.topic_id}:${row.subtopic}` : row.topic_id;
            if (!progressMap[key]) {
              progressMap[key] = {
                topicId: row.topic_id,
                attempted: row.attempted || 0,
                correct: row.correct || 0,
                lastPracticed: row.last_practiced_at || new Date().toISOString(),
              };
            } else {
              // Aggregate if same topic_id
              progressMap[key].attempted += row.attempted || 0;
              progressMap[key].correct += row.correct || 0;
            }
          }
          setProgress(progressMap);
        }
      } else {
        // Load from localStorage
        setProgress(getLocalProgress());
      }

      setLoading(false);
    }

    loadProgress();
  }, [user?.id]);

  /**
   * Get progress for a specific topic
   */
  const getTopicProgress = useCallback(
    (topicId: string): TopicProgress | null => {
      // Try direct match first
      if (progress[topicId]) {
        return progress[topicId];
      }

      // Aggregate all entries that match this topic_id
      const matchingEntries = Object.entries(progress).filter(
        ([key]) => key === topicId || key.startsWith(`${topicId}:`)
      );

      if (matchingEntries.length === 0) {
        return null;
      }

      // Aggregate stats
      const aggregated: TopicProgress = {
        topicId,
        attempted: 0,
        correct: 0,
        lastPracticed: '',
      };

      for (const [, entry] of matchingEntries) {
        aggregated.attempted += entry.attempted;
        aggregated.correct += entry.correct;
        if (!aggregated.lastPracticed || entry.lastPracticed > aggregated.lastPracticed) {
          aggregated.lastPracticed = entry.lastPracticed;
        }
      }

      return aggregated;
    },
    [progress]
  );

  /**
   * Get all progress
   */
  const getAllProgress = useCallback((): Record<string, TopicProgress> => {
    return progress;
  }, [progress]);

  /**
   * Get total stats across all topics
   */
  const getTotalStats = useCallback((): { attempted: number; correct: number } => {
    return Object.values(progress).reduce(
      (acc, p) => ({
        attempted: acc.attempted + p.attempted,
        correct: acc.correct + p.correct,
      }),
      { attempted: 0, correct: 0 }
    );
  }, [progress]);

  return {
    progress,
    loading,
    getTopicProgress,
    getAllProgress,
    getTotalStats,
    isAuthenticated: !!user,
  };
}

/**
 * Migrate localStorage progress to Supabase
 * Call this when user logs in
 */
export async function migrateLocalProgressToSupabase(userId: string): Promise<void> {
  const localProgress = getLocalProgress();

  if (Object.keys(localProgress).length === 0) {
    return; // Nothing to migrate
  }

  const supabase = createClient();

  // For each local progress entry, upsert to Supabase
  for (const [key, progress] of Object.entries(localProgress)) {
    // The key might be just topicId or topicId:subtopic
    const [topicId, subtopic] = key.includes(':') ? key.split(':') : [key, null];

    // Check if entry exists
    const { data: existing } = await supabase
      .from('user_topic_progress')
      .select('id, attempted, correct')
      .eq('user_id', userId)
      .eq('topic_id', topicId)
      .is('subtopic', subtopic)
      .single();

    if (existing) {
      // Merge: add local stats to existing
      await supabase
        .from('user_topic_progress')
        .update({
          attempted: existing.attempted + progress.attempted,
          correct: existing.correct + progress.correct,
          last_practiced_at: progress.lastPracticed,
        })
        .eq('id', existing.id);
    } else {
      // Insert new
      await supabase.from('user_topic_progress').insert({
        user_id: userId,
        topic_id: topicId,
        subtopic: subtopic,
        attempted: progress.attempted,
        correct: progress.correct,
        last_practiced_at: progress.lastPracticed,
      });
    }
  }

  // Clear localStorage after successful migration
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}
