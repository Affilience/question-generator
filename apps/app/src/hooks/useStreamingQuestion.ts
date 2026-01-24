'use client';

import { useState, useCallback, useRef } from 'react';
import { Question, Difficulty, ExamBoard, QualificationLevel, Subject } from '@/types';
import { useSubscription } from '@/contexts/SubscriptionContext';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';

interface StreamingState {
  isStreaming: boolean;
  streamedContent: string;
  question: Question | null;
  error: string | null;
  upgradeNeeded: boolean;
}

// Throttle updates to align with browser refresh rate
class ContentBuffer {
  private pending = '';
  private rafId: number | null = null;
  private callback: (content: string) => void;

  constructor(callback: (content: string) => void) {
    this.callback = callback;
  }

  add(content: string) {
    this.pending += content;
    this.scheduleFlush();
  }

  private scheduleFlush() {
    if (this.rafId === null) {
      this.rafId = requestAnimationFrame(() => {
        this.flush();
      });
    }
  }

  flush() {
    if (this.pending) {
      this.callback(this.pending);
      this.pending = '';
    }
    this.rafId = null;
  }

  cancel() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.pending = '';
  }
}

interface GenerateOptions {
  topicId: string;
  difficulty: Difficulty;
  subtopic?: string;
  examBoard?: ExamBoard;
  qualification?: QualificationLevel;
  subject?: Subject;
  excludeContent?: string | string[];
  skipCache?: boolean;
}

export function useStreamingQuestion() {
  const [state, setState] = useState<StreamingState>({
    isStreaming: false,
    streamedContent: '',
    question: null,
    error: null,
    upgradeNeeded: false,
  });

  const { incrementQuestionUsage } = useSubscription();
  const { user } = useAuth();

  const abortControllerRef = useRef<AbortController | null>(null);
  const bufferRef = useRef<ContentBuffer | null>(null);
  const accumulatedContentRef = useRef('');

  const generate = useCallback(async (options: GenerateOptions) => {
    // Abort any existing request and clean up buffer
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    if (bufferRef.current) {
      bufferRef.current.cancel();
    }

    abortControllerRef.current = new AbortController();
    accumulatedContentRef.current = '';

    // Create new buffer that batches updates with RAF
    bufferRef.current = new ContentBuffer((content) => {
      accumulatedContentRef.current += content;
      setState(prev => ({
        ...prev,
        streamedContent: accumulatedContentRef.current,
      }));
    });

    setState({
      isStreaming: true,
      streamedContent: '',
      question: null,
      error: null,
      upgradeNeeded: false,
    });

    try {
      // Get auth session for proper user tracking
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/api/generate-question-stream', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...(session?.access_token && { 'Authorization': `Bearer ${session.access_token}` })
        },
        body: JSON.stringify({
          ...options,
          stream: true,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const data = await response.json();
        // Check if this is an upgrade-related error
        if (data.upgrade || response.status === 429) {
          setState(prev => ({
            ...prev,
            isStreaming: false,
            error: data.error || 'Daily limit reached',
            upgradeNeeded: true,
          }));
          return null;
        }
        throw new Error(data.error || 'Failed to generate question');
      }

      // Check if it's a cached response (non-streaming)
      const contentType = response.headers.get('Content-Type');
      if (contentType?.includes('application/json')) {
        const question = await response.json();
        setState({
          isStreaming: false,
          streamedContent: question.content,
          question,
          error: null,
          upgradeNeeded: false,
        });
        // Update client-side usage counter
        incrementQuestionUsage();
        return question;
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // Process complete events
        const lines = buffer.split('\n\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.error) {
                bufferRef.current?.flush();
                setState(prev => ({
                  ...prev,
                  isStreaming: false,
                  error: data.error,
                }));
                return null;
              }

              if (data.content) {
                // Add content to RAF buffer (escape sequences handled by MathRenderer)
                bufferRef.current?.add(data.content);
              } else if (data.chunk) {
                // Legacy format: raw JSON chunks (fallback)
                bufferRef.current?.add(data.chunk);
              }

              if (data.done && data.question) {
                // Flush any remaining buffered content
                bufferRef.current?.flush();
                setState({
                  isStreaming: false,
                  streamedContent: data.question.content,
                  question: data.question,
                  error: null,
                  upgradeNeeded: false,
                });
                // Update client-side usage counter
                incrementQuestionUsage();
                return data.question;
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }

      // Flush any remaining content
      bufferRef.current?.flush();
      return state.question;
    } catch (error) {
      bufferRef.current?.cancel();

      if ((error as Error).name === 'AbortError') {
        return null;
      }

      const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
      setState(prev => ({
        ...prev,
        isStreaming: false,
        error: errorMessage,
      }));
      return null;
    }
  }, [incrementQuestionUsage, user]);

  const abort = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (bufferRef.current) {
      bufferRef.current.cancel();
      bufferRef.current = null;
    }
    setState(prev => ({
      ...prev,
      isStreaming: false,
    }));
  }, []);

  return {
    ...state,
    generate,
    abort,
  };
}
