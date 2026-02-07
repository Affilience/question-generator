'use client';

import { useMemo } from 'react';
import { MathRenderer } from './MathRenderer';

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

export function BlogContentRenderer({ content, className = '' }: BlogContentRendererProps) {
  const processedContent = useMemo(() => {
    if (!content) return '';
    
    let processed = content;
    
    // Convert markdown headers to HTML headers
    processed = processed.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    processed = processed.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    processed = processed.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Convert markdown bold to HTML
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert markdown italic to HTML
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert markdown links to HTML
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>');
    
    // Convert markdown line breaks and paragraphs
    processed = processed.replace(/\n\n/g, '</p><p>');
    processed = processed.replace(/\n/g, '<br/>');
    
    // Wrap in paragraph tags if not already wrapped
    if (!processed.trim().startsWith('<')) {
      processed = '<p>' + processed + '</p>';
    }
    
    // Convert markdown lists
    processed = processed.replace(/^- (.*$)/gm, '<li>$1</li>');
    
    // Wrap consecutive list items in ul tags
    if (processed.includes('<li>')) {
      processed = processed.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
      
      // Fix multiple consecutive lists
      processed = processed.replace(/<\/ul>\s*<ul>/g, '');
    }
    
    return processed;
  }, [content]);
  
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}