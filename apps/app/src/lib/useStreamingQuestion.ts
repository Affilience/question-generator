'use client';

import { useState, useCallback } from 'react';
import { Difficulty, Question } from '@/types';
import { parseQuestionResponse } from './prompts-common';

interface UseStreamingQuestionOptions {
  topicId: string;
  difficulty: Difficulty;
  subtopic?: string;
}

interface UseStreamingQuestionResult {
  question: Question | null;
  loading: boolean;
  error: string | null;
  streamingContent: string;
  generate: () => Promise<void>;
}

export function useStreamingQuestion({
  topicId,
  difficulty,
  subtopic,
}: UseStreamingQuestionOptions): UseStreamingQuestionResult {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamingContent, setStreamingContent] = useState('');

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);
    setStreamingContent('');
    setQuestion(null);

    try {
      const response = await fetch('/api/generate-question/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topicId, difficulty, subtopic }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate question');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;
        setStreamingContent(fullContent);
      }

      // Parse the complete JSON response
      const questionData = parseQuestionResponse(fullContent);
      const newQuestion: Question = {
        id: crypto.randomUUID(),
        topicId,
        difficulty,
        ...questionData,
      };
      setQuestion(newQuestion);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [topicId, difficulty, subtopic]);

  return {
    question,
    loading,
    error,
    streamingContent,
    generate,
  };
}
