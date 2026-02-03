/**
 * Error filtering utility to prevent benign errors from reaching Sentry
 */

export function shouldReportError(error: Error): boolean {
  const errorName = error.name;
  const errorMessage = error.message;

  // Filter out expected/benign errors that shouldn't be reported to Sentry
  const ignoredErrors = [
    // AbortErrors are expected when users navigate away or cancel requests
    'AbortError',
    
    // Network errors that are often transient
    'NetworkError',
    'Failed to fetch',
    
    // Browser security errors (often from extensions or user actions)
    'SecurityError',
    
    // Common browser quirks
    'ResizeObserver loop limit exceeded',
    'Script error.',
    'Non-Error exception captured',
    
    // Known third-party errors
    'ChunkLoadError',
  ];

  const ignoredMessages = [
    'signal is aborted without reason',
    'The operation is insecure',
    'The operation was aborted',
    'Load failed',
    'Network request failed',
    'Fetch aborted',
    'Failed to fetch',
  ];

  // Don't report if error name is in ignored list
  if (ignoredErrors.includes(errorName)) {
    return false;
  }

  // Don't report if error message matches ignored patterns
  if (ignoredMessages.some(ignored => errorMessage.includes(ignored))) {
    return false;
  }

  // Report all other errors
  return true;
}

export function filterErrorForSentry(event: any, hint?: any) {
  // Extract error from the event
  const error = hint?.originalException || hint?.syntheticException || new Error(event.exception?.values?.[0]?.value || 'Unknown error');
  
  // Filter out errors that shouldn't be reported
  if (error instanceof Error && !shouldReportError(error)) {
    return null;
  }

  return event;
}