'use client';

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

/**
 * Contains a rendering failure to one subtree.
 *
 * Used around diagrams: a malformed spec should cost the reader the picture,
 * not the whole question. Previously this lived as a private class inside
 * QuestionCard, so every other surface that renders diagrams had no boundary.
 */
export class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Render error contained by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
