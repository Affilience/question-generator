'use client';

import { useMemo } from 'react';

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Minimal, ordered Markdown renderer for blog posts.
 *
 * The previous implementation collapsed newlines into <br/> BEFORE converting
 * list items, so the line-start anchor in the list rule could never match
 * again and every bullet in all 100 posts shipped as literal text
 * ("- **Two papers**: One non-calculator…"). Numbered lists were not handled at
 * all, and headings injected before the paragraph split ended up wrapped in
 * unbalanced <p> tags.
 *
 * Order matters here: block structure first (headings, lists, paragraphs),
 * inline formatting last.
 */

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Bold, italic and links, applied to already-escaped text. */
function renderInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>'
    );
}

function renderMarkdown(source: string): string {
  const lines = escapeHtml(source).split('\n');
  const out: string[] = [];

  let listType: 'ul' | 'ol' | null = null;
  let paragraph: string[] = [];

  const closeParagraph = () => {
    if (paragraph.length === 0) return;
    out.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) return;
    out.push(`</${listType}>`);
    listType = null;
  };

  const openList = (type: 'ul' | 'ol') => {
    if (listType === type) return;
    closeList();
    out.push(`<${type}>`);
    listType = type;
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.trim() === '') {
      closeParagraph();
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      out.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) {
      closeParagraph();
      openList('ul');
      out.push(`<li>${renderInline(bullet[1])}</li>`);
      continue;
    }

    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (numbered) {
      closeParagraph();
      openList('ol');
      out.push(`<li>${renderInline(numbered[1])}</li>`);
      continue;
    }

    const quote = line.match(/^\s*>\s?(.*)$/);
    if (quote) {
      closeParagraph();
      closeList();
      out.push(`<blockquote>${renderInline(quote[1])}</blockquote>`);
      continue;
    }

    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
      closeParagraph();
      closeList();
      out.push('<hr/>');
      continue;
    }

    closeList();
    paragraph.push(line.trim());
  }

  closeParagraph();
  closeList();

  return out.join('\n');
}

export function BlogContentRenderer({ content, className = '' }: BlogContentRendererProps) {
  // Content is escaped before any tags are introduced, so the only HTML in the
  // output is what this renderer produced.
  const processedContent = useMemo(() => (content ? renderMarkdown(content) : ''), [content]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}
