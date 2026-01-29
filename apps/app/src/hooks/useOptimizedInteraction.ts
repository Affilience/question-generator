'use client';

import { useCallback, useRef } from 'react';

/**
 * Hook to optimize user interactions for better INP scores
 * Implements debouncing and requestIdleCallback for non-critical operations
 */
export function useOptimizedInteraction<T extends (...args: any[]) => void>(
  callback: T,
  options: {
    debounceMs?: number;
    useIdleCallback?: boolean;
    priority?: 'high' | 'low';
  } = {}
): T {
  const { debounceMs = 0, useIdleCallback = false, priority = 'high' } = options;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastCallRef = useRef<number>(0);

  const optimizedCallback = useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const executeCallback = () => {
      lastCallRef.current = now;
      
      if (priority === 'high' || !useIdleCallback) {
        // Execute immediately for high priority interactions
        callback(...args);
      } else {
        // Use requestIdleCallback for low priority operations
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(() => callback(...args), { timeout: 100 });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => callback(...args), 0);
        }
      }
    };

    if (debounceMs > 0) {
      // Debounce the execution
      timeoutRef.current = setTimeout(executeCallback, debounceMs);
    } else {
      // Execute immediately
      executeCallback();
    }
  }, [callback, debounceMs, useIdleCallback, priority]) as T;

  return optimizedCallback;
}

/**
 * Hook for optimizing form input handling with proper debouncing
 */
export function useOptimizedInput(
  onChange: (value: string) => void,
  debounceMs: number = 150
) {
  return useOptimizedInteraction(onChange, { 
    debounceMs, 
    priority: 'low',
    useIdleCallback: true 
  });
}

/**
 * Hook for optimizing search functionality
 */
export function useOptimizedSearch(
  onSearch: (query: string) => void,
  debounceMs: number = 300
) {
  return useOptimizedInteraction(onSearch, { 
    debounceMs, 
    priority: 'low',
    useIdleCallback: true 
  });
}

/**
 * Hook for optimizing click handlers
 */
export function useOptimizedClick<T extends (...args: any[]) => void>(
  onClick: T,
  priority: 'high' | 'low' = 'high'
) {
  return useOptimizedInteraction(onClick, { 
    priority,
    useIdleCallback: priority === 'low'
  });
}