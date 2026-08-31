'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { Component, ReactNode, useMemo } from 'react';
import { enhanceLatexForKatex } from '@/lib/latexEnhancements';
import { splitAtDelimiters, prepareContentForRender } from '@/lib/mathText';

// KaTeX CSS is bundled globally via layout.tsx (`import 'katex/dist/katex.min.css'`),
// so there is no CDN dependency and no visibility gating needed here.

interface MathRendererProps {
  content: string;
  className?: string;
  isStreaming?: boolean;
}

// Error boundary for KaTeX rendering failures
class MathErrorBoundary extends Component<{ children: ReactNode; fallback: string; originalMath: string }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: string; originalMath: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Try to render as plain text if it contains obvious text content
      const cleanText = this.props.originalMath
        .replace(/\\text\{([^}]+)\}/g, '$1') // Extract text from \text{} commands
        .replace(/\\mathrm\{([^}]+)\}/g, '$1') // Extract text from \mathrm{} commands
        .replace(/\\/g, '') // Remove remaining backslashes
        .trim();
      
      // If it looks like plain text, render it normally
      if (cleanText && !/[\\{}^_$]/.test(cleanText)) {
        return <span>{cleanText}</span>;
      }
      
      // Otherwise show as code with a warning
      return <code className="text-amber-500 bg-amber-500/10 px-1 rounded" title="LaTeX parsing error">{this.props.fallback}</code>;
    }
    return this.props.children;
  }
}

// Safe wrapper for InlineMath
function SafeInlineMath({ math }: { math: string }) {
  if (!math || math.trim() === '') return null;

  const { enhanced: processedMath, validation } = enhanceLatexForKatex(math);

  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development' && !validation.isValid) {
    console.warn('LaTeX validation issues:', validation.errors);
  }

  return (
    <MathErrorBoundary fallback={processedMath} originalMath={math}>
      <InlineMath math={processedMath} />
    </MathErrorBoundary>
  );
}

// Safe wrapper for BlockMath
function SafeBlockMath({ math }: { math: string }) {
  if (!math || math.trim() === '') return null;

  const { enhanced: processedMath, validation } = enhanceLatexForKatex(math);

  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development' && !validation.isValid) {
    console.warn('LaTeX validation issues in block math:', validation.errors);
  }

  return (
    <MathErrorBoundary fallback={processedMath} originalMath={math}>
      <BlockMath math={processedMath} />
    </MathErrorBoundary>
  );
}

// =============================================================================
// TABLE PARSING
// =============================================================================

function parseMarkdownTable(tableText: string): { headers: string[]; rows: string[][] } | null {
  const lines = tableText.trim().split('\n').filter(line => line.trim());
  if (lines.length < 2 || !lines[0].includes('|')) return null;

  const parseRow = (line: string): string[] => {
    return line.split('|').map(cell => cell.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
  };

  const headers = parseRow(lines[0]);
  const separatorIndex = lines.findIndex(line => /^[\s|:-]+$/.test(line) && line.includes('-'));
  const dataStartIndex = separatorIndex >= 0 ? separatorIndex + 1 : 1;

  const rows: string[][] = [];
  for (let i = dataStartIndex; i < lines.length; i++) {
    if (lines[i].includes('|')) {
      rows.push(parseRow(lines[i]));
    }
  }

  return { headers, rows };
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function MathRenderer({ content, className = '' }: MathRendererProps) {
  // Deterministic repair + bare-LaTeX wrapping + out-of-math \text handling.
  // Streamed content arrives properly unescaped from the server, so it takes
  // the same path as final content.
  const processedContent = useMemo(() => prepareContentForRender(content), [content]);

  // Process markdown bold/italic
  const processMarkdown = (text: string): React.ReactNode[] => {
    const markdownRegex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const matched = match[0];
      if (matched.startsWith('**') && matched.endsWith('**')) {
        parts.push(<strong key={match.index}>{matched.slice(2, -2)}</strong>);
      } else if (matched.startsWith('*') && matched.endsWith('*')) {
        parts.push(<em key={match.index}>{matched.slice(1, -1)}</em>);
      }
      lastIndex = markdownRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  // Render mixed text and math content
  const renderMathContent = (text: string) => {
    const segments = splitAtDelimiters(text);

    return segments.map((segment, index) => {
      if (segment.type === 'math') {
        if (segment.display) {
          return (
            <div key={index} className="my-4">
              <SafeBlockMath math={segment.content} />
            </div>
          );
        } else {
          return <SafeInlineMath key={index} math={segment.content} />;
        }
      } else {
        return <span key={index}>{processMarkdown(segment.content)}</span>;
      }
    });
  };

  // Format question parts (a), (b), (c), etc.
  const formatQuestionPart = (line: string) => {
    const partMatch = line.match(/^\(([a-z]|[ivxlcdm]+|\d+)\)\s*/i);

    if (partMatch) {
      const partLabel = partMatch[1];
      const restOfLine = line.slice(partMatch[0].length);
      const markMatch = restOfLine.match(/\[(\d+)\s*marks?\]\s*$/i);
      let questionText = restOfLine;
      let marks = null;

      if (markMatch) {
        marks = markMatch[1];
        questionText = restOfLine.slice(0, -markMatch[0].length).trim();
      }

      return (
        <div className="flex gap-3 mt-4">
          <span className="font-semibold text-[#a1a1a1] shrink-0">({partLabel})</span>
          <div className="flex-1">
            <span>{renderMathContent(questionText)}</span>
            {marks && (
              <span className="ml-2 text-sm text-[#666666] font-medium">
                [{marks} {marks === '1' ? 'mark' : 'marks'}]
              </span>
            )}
          </div>
        </div>
      );
    }

    const markMatch = line.match(/\[(\d+)\s*marks?\]\s*$/i);
    if (markMatch) {
      const marks = markMatch[1];
      const textWithoutMarks = line.slice(0, -markMatch[0].length).trim();
      return (
        <span>
          {renderMathContent(textWithoutMarks)}
          <span className="ml-2 text-sm text-[#666666] font-medium">
            [{marks} {marks === '1' ? 'mark' : 'marks'}]
          </span>
        </span>
      );
    }

    return <span>{renderMathContent(line)}</span>;
  };

  // Render table
  const renderTable = (tableData: { headers: string[]; rows: string[][] }) => {
    return (
      <div className="overflow-x-auto my-4 -mx-2 px-2">
        <table className="w-max min-w-full border-collapse border border-[var(--color-border)] text-sm">
          <thead>
            <tr className="bg-[var(--color-bg-secondary)]">
              {tableData.headers.map((header, i) => (
                <th key={i} className="border border-[var(--color-border)] px-3 py-2 text-left font-semibold text-[var(--color-text-primary)] whitespace-nowrap">
                  {renderMathContent(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? '' : 'bg-[var(--color-bg-secondary)]/50'}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-[var(--color-border)] px-3 py-2 text-[var(--color-text-primary)] whitespace-nowrap">
                    {renderMathContent(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Render code block
  const renderCodeBlock = (code: string, language?: string) => {
    const languageLabels: Record<string, string> = {
      'python': 'Python', 'pseudocode': 'Pseudocode', 'sql': 'SQL',
      'javascript': 'JavaScript', 'js': 'JavaScript', 'java': 'Java',
      'csharp': 'C#', 'cs': 'C#', 'vb': 'VB.NET', 'vbnet': 'VB.NET',
      'cpp': 'C++', 'c': 'C',
    };

    const displayLabel = language ? languageLabels[language.toLowerCase()] || language : null;

    return (
      <div className="my-4 rounded-lg overflow-hidden border border-[var(--color-border)] bg-[#1a1a2e]">
        {displayLabel && (
          <div className="px-4 py-1.5 text-xs font-medium text-[#888] bg-[#12121f] border-b border-[var(--color-border)]">
            {displayLabel}
          </div>
        )}
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-[#e0e0e0] whitespace-pre">{code}</code>
        </pre>
      </div>
    );
  };

  // Split into code blocks, tables, and text
  const splitIntoBlocks = (text: string) => {
    const blocks: { type: 'code' | 'table' | 'text'; content: string; language?: string }[] = [];
    const codeBlockRegex = /```(\w*)\n?([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const textBefore = text.slice(lastIndex, match.index);
        if (textBefore.trim()) blocks.push(...splitTextAndTables(textBefore));
      }
      const code = match[2].trim();
      if (code) blocks.push({ type: 'code', content: code, language: match[1] || undefined });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      const remaining = text.slice(lastIndex);
      if (remaining.trim()) blocks.push(...splitTextAndTables(remaining));
    }

    if (blocks.length === 0 && text.trim()) blocks.push(...splitTextAndTables(text));

    return blocks;
  };

  const splitTextAndTables = (text: string): { type: 'table' | 'text'; content: string }[] => {
    const blocks: { type: 'table' | 'text'; content: string }[] = [];
    const lines = text.split('\n');
    let currentBlock: string[] = [];
    let inTable = false;

    for (const line of lines) {
      const lineHasPipes = line.includes('|');
      const isSeparator = /^[\s|:-]+$/.test(line) && line.includes('-');

      if (lineHasPipes || isSeparator) {
        if (!inTable && currentBlock.length > 0) {
          blocks.push({ type: 'text', content: currentBlock.join('\n') });
          currentBlock = [];
        }
        inTable = true;
        currentBlock.push(line);
      } else if (line.trim() === '' && inTable) {
        if (currentBlock.length > 0) {
          blocks.push({ type: 'table', content: currentBlock.join('\n') });
          currentBlock = [];
        }
        inTable = false;
      } else {
        if (inTable && currentBlock.length > 0) {
          blocks.push({ type: 'table', content: currentBlock.join('\n') });
          currentBlock = [];
          inTable = false;
        }
        currentBlock.push(line);
      }
    }

    if (currentBlock.length > 0) {
      blocks.push({ type: inTable ? 'table' : 'text', content: currentBlock.join('\n') });
    }

    return blocks;
  };

  // Main render
  const blocks = splitIntoBlocks(processedContent);

  return (
    <div className={`math-content ${className}`}>
      {blocks.map((block, blockIndex) => {
        if (block.type === 'code') {
          return <div key={blockIndex}>{renderCodeBlock(block.content, block.language)}</div>;
        }

        if (block.type === 'table') {
          const tableData = parseMarkdownTable(block.content);
          if (tableData && tableData.headers.length > 0) {
            return <div key={blockIndex}>{renderTable(tableData)}</div>;
          }
        }

        const paragraphs = block.content.split(/\n\n+/);

        return (
          <div key={blockIndex}>
            {paragraphs.map((paragraph, pIndex) => {
              const lines = paragraph.split('\n');
              const hasQuestionParts = lines.some(line => /^\([a-z]\)/.test(line.trim()));

              if (hasQuestionParts) {
                return (
                  <div key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                    {lines.map((line, lineIndex) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;
                      return <div key={lineIndex}>{formatQuestionPart(trimmedLine)}</div>;
                    })}
                  </div>
                );
              }

              return (
                <p key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                  {lines.map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {formatQuestionPart(line)}
                      {lineIndex < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
