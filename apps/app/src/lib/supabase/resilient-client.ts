/**
 * Resilient Supabase client that handles ISP blocking gracefully
 * Provides offline-first functionality with automatic fallbacks
 */

import { createClient } from './client';
import { supabaseHealth } from './health-check';

interface LocalStorageAnalytics {
  events: Array<{
    event: string;
    timestamp: string;
    page: string;
    sessionId: string;
    properties?: Record<string, any>;
  }>;
}

interface LocalStorageProgress {
  questions: Array<{
    topicId: string;
    subtopic: string;
    difficulty: string;
    isCorrect: boolean;
    timestamp: string;
  }>;
}

class ResilientSupabaseClient {
  private client = createClient();
  private isOfflineMode = false;

  // Analytics fallback
  async trackEvent(eventData: any) {
    // Try Supabase first
    if (!this.isOfflineMode) {
      try {
        const result = await this.client
          .from('journey_events')
          .insert(eventData);
        
        if (!result.error) {
          // Success - also sync any offline events
          this.syncOfflineEvents();
          return { success: true };
        }
      } catch (error) {
        console.warn('[Resilient Client] Supabase analytics failed, switching to offline mode');
        this.isOfflineMode = true;
      }
    }

    // Fallback to localStorage
    this.storeEventOffline(eventData);
    return { success: true, offline: true };
  }

  // Progress tracking fallback
  async recordProgress(progressData: any) {
    if (!this.isOfflineMode) {
      try {
        const result = await this.client
          .from('question_attempts')
          .insert(progressData);
        
        if (!result.error) {
          this.syncOfflineProgress();
          return { success: true };
        }
      } catch (error) {
        console.warn('[Resilient Client] Supabase progress failed, switching to offline mode');
        this.isOfflineMode = true;
      }
    }

    // Fallback to localStorage
    this.storeProgressOffline(progressData);
    return { success: true, offline: true };
  }

  // User stats with offline fallback
  async getUserStats(userId: string) {
    if (!this.isOfflineMode) {
      try {
        // Try Supabase first
        const { data } = await this.client
          .from('user_topic_progress')
          .select('*')
          .eq('user_id', userId);
        
        if (data) {
          return this.processStats(data);
        }
      } catch (error) {
        console.warn('[Resilient Client] Supabase stats failed, using offline data');
        this.isOfflineMode = true;
      }
    }

    // Fallback to localStorage
    return this.getOfflineStats();
  }

  // Offline event storage
  private storeEventOffline(eventData: any) {
    try {
      const stored = localStorage.getItem('offline_analytics');
      const analytics: LocalStorageAnalytics = stored ? JSON.parse(stored) : { events: [] };
      
      analytics.events.push({
        event: eventData.event,
        timestamp: eventData.timestamp,
        page: eventData.page,
        sessionId: eventData.session_id,
        properties: eventData.properties,
      });

      // Keep only last 100 events to prevent localStorage bloat
      if (analytics.events.length > 100) {
        analytics.events = analytics.events.slice(-100);
      }

      localStorage.setItem('offline_analytics', JSON.stringify(analytics));
    } catch (error) {
      console.warn('[Resilient Client] Failed to store offline analytics:', error);
    }
  }

  // Offline progress storage
  private storeProgressOffline(progressData: any) {
    try {
      const stored = localStorage.getItem('offline_progress');
      const progress: LocalStorageProgress = stored ? JSON.parse(stored) : { questions: [] };
      
      progress.questions.push({
        topicId: progressData.topic_id,
        subtopic: progressData.subtopic,
        difficulty: progressData.difficulty,
        isCorrect: progressData.is_correct,
        timestamp: progressData.attempted_at || new Date().toISOString(),
      });

      // Keep only last 200 questions
      if (progress.questions.length > 200) {
        progress.questions = progress.questions.slice(-200);
      }

      localStorage.setItem('offline_progress', JSON.stringify(progress));
    } catch (error) {
      console.warn('[Resilient Client] Failed to store offline progress:', error);
    }
  }

  // Sync offline events when connection restored
  private async syncOfflineEvents() {
    try {
      const stored = localStorage.getItem('offline_analytics');
      if (!stored) return;

      const analytics: LocalStorageAnalytics = JSON.parse(stored);
      if (analytics.events.length === 0) return;

      // Convert to Supabase format and batch insert
      const supabaseEvents = analytics.events.map(event => ({
        event: event.event,
        session_id: event.sessionId,
        timestamp: event.timestamp,
        page: event.page,
        properties: event.properties || {},
      }));

      const { error } = await this.client
        .from('journey_events')
        .insert(supabaseEvents);

      if (!error) {
        // Clear synced events
        localStorage.removeItem('offline_analytics');
        console.log(`[Resilient Client] Synced ${analytics.events.length} offline events`);
      }
    } catch (error) {
      console.warn('[Resilient Client] Failed to sync offline events:', error);
    }
  }

  // Sync offline progress
  private async syncOfflineProgress() {
    try {
      const stored = localStorage.getItem('offline_progress');
      if (!stored) return;

      const progress: LocalStorageProgress = JSON.parse(stored);
      if (progress.questions.length === 0) return;

      // Convert to Supabase format
      const supabaseProgress = progress.questions.map(q => ({
        topic_id: q.topicId,
        subtopic: q.subtopic,
        difficulty: q.difficulty,
        is_correct: q.isCorrect,
        attempted_at: q.timestamp,
        // Add default values for required fields
        user_id: 'offline-user',
        question_content: 'Offline question',
      }));

      const { error } = await this.client
        .from('question_attempts')
        .insert(supabaseProgress);

      if (!error) {
        localStorage.removeItem('offline_progress');
        console.log(`[Resilient Client] Synced ${progress.questions.length} offline progress records`);
      }
    } catch (error) {
      console.warn('[Resilient Client] Failed to sync offline progress:', error);
    }
  }

  // Get offline stats
  private getOfflineStats() {
    try {
      const stored = localStorage.getItem('offline_progress');
      if (!stored) return { totalAttempted: 0, totalCorrect: 0, accuracy: 0 };

      const progress: LocalStorageProgress = JSON.parse(stored);
      const totalAttempted = progress.questions.length;
      const totalCorrect = progress.questions.filter(q => q.isCorrect).length;
      const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

      return {
        totalAttempted,
        totalCorrect,
        accuracy,
        offline: true,
      };
    } catch {
      return { totalAttempted: 0, totalCorrect: 0, accuracy: 0, offline: true };
    }
  }

  // Process stats from Supabase data
  private processStats(data: any[]) {
    const totalAttempted = data.reduce((sum, p) => sum + p.attempted, 0);
    const totalCorrect = data.reduce((sum, p) => sum + p.correct, 0);
    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

    return {
      totalAttempted,
      totalCorrect,
      accuracy,
      offline: false,
    };
  }

  // Check connection and switch modes
  async checkConnectionHealth() {
    const health = await supabaseHealth.checkConnection(true);
    this.isOfflineMode = !health.isReachable;
    
    if (!this.isOfflineMode) {
      // Connection restored - sync offline data
      this.syncOfflineEvents();
      this.syncOfflineProgress();
    }

    return health;
  }

  // Get connection status
  isOnline(): boolean {
    return !this.isOfflineMode;
  }

  // Access underlying client for auth operations (these still need Supabase)
  get auth() {
    return this.client.auth;
  }

  // Direct access for operations that must use Supabase
  get direct() {
    return this.client;
  }
}

export const resilientClient = new ResilientSupabaseClient();