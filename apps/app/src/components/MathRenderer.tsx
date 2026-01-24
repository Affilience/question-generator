'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { Component, ReactNode, useEffect, useState, useMemo } from 'react';

// Track KaTeX CSS loading state globally
let katexCssLoaded = false;
let katexCssReady = false;
let katexCssCallbacks: (() => void)[] = [];

// Check if KaTeX CSS is already loaded in the document (e.g., from layout.tsx)
function checkKatexCssAlreadyLoaded(): boolean {
  if (typeof document === 'undefined') return false;
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  for (const link of links) {
    if ((link as HTMLLinkElement).href.includes('katex')) {
      return true;
    }
  }
  return false;
}

function useKatexCss(): boolean {
  const [cssReady, setCssReady] = useState(() => {
    if (katexCssReady) return true;
    if (typeof document !== 'undefined' && checkKatexCssAlreadyLoaded()) {
      katexCssReady = true;
      katexCssLoaded = true;
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (katexCssReady || checkKatexCssAlreadyLoaded()) {
      katexCssReady = true;
      katexCssLoaded = true;
      setCssReady(true);
      return;
    }

    const callback = () => setCssReady(true);
    katexCssCallbacks.push(callback);

    if (!katexCssLoaded && typeof document !== 'undefined') {
      katexCssLoaded = true;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css';
      link.crossOrigin = 'anonymous';
      link.onload = () => {
        katexCssReady = true;
        katexCssCallbacks.forEach(cb => cb());
        katexCssCallbacks = [];
      };
      document.head.appendChild(link);
    }

    return () => {
      katexCssCallbacks = katexCssCallbacks.filter(cb => cb !== callback);
    };
  }, []);

  return cssReady;
}

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
  
  // Preprocess math to fix common LaTeX issues
  const processedMath = preprocessMathForKaTeX(math);
  
  return (
    <MathErrorBoundary fallback={processedMath} originalMath={math}>
      <InlineMath math={processedMath} />
    </MathErrorBoundary>
  );
}

// Safe wrapper for BlockMath
function SafeBlockMath({ math }: { math: string }) {
  if (!math || math.trim() === '') return null;
  
  // Preprocess math to fix common LaTeX issues
  const processedMath = preprocessMathForKaTeX(math);
  
  return (
    <MathErrorBoundary fallback={processedMath} originalMath={math}>
      <BlockMath math={processedMath} />
    </MathErrorBoundary>
  );
}

// =============================================================================
// ROBUST LATEX DELIMITER PARSING (based on KaTeX's splitAtDelimiters approach)
// =============================================================================

interface MathSegment {
  type: 'text' | 'math';
  content: string;
  display: boolean;
}

// Find the end of a math expression, tracking brace depth and escaped characters
function findEndOfMath(delimiter: string, text: string, startIndex: number): number {
  let index = startIndex;
  let braceLevel = 0;
  const delimLength = delimiter.length;

  while (index < text.length) {
    const char = text[index];

    // Check if we've found the closing delimiter (only at brace level 0)
    if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) {
      return index;
    }

    // Handle escaped characters - skip the next character
    if (char === '\\') {
      index += 2;
      continue;
    }

    // Track brace depth for nested content like \frac{a}{b}
    if (char === '{') {
      braceLevel++;
    } else if (char === '}') {
      braceLevel--;
    }

    index++;
  }

  return -1; // No closing delimiter found
}

// Split text at LaTeX delimiters, processing longer delimiters first
function splitAtDelimiters(text: string): MathSegment[] {
  // Define delimiters in order of priority (longer/more specific first)
  const delimiters = [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false },
    { left: '$', right: '$', display: false },
  ];

  const segments: MathSegment[] = [];
  let currentText = '';
  let index = 0;

  while (index < text.length) {
    // Check for escaped dollar sign
    if (text[index] === '\\' && text[index + 1] === '$') {
      currentText += '$';
      index += 2;
      continue;
    }

    // Try to match each delimiter type
    let foundDelimiter = false;

    for (const delim of delimiters) {
      if (text.slice(index, index + delim.left.length) === delim.left) {
        // Found opening delimiter - look for closing
        const contentStart = index + delim.left.length;
        const contentEnd = findEndOfMath(delim.right, text, contentStart);

        if (contentEnd !== -1) {
          // Extract math content
          const mathContent = text.slice(contentStart, contentEnd);

          // Validate the math content before accepting
          if (!isValidMathContent(mathContent, delim.left === '$')) {
            // Not valid math - treat opening delimiter as regular text
            currentText += text[index];
            index++;
            foundDelimiter = true;
            break;
          }

          // Found valid math expression
          // Save any text before this math
          if (currentText) {
            segments.push({ type: 'text', content: currentText, display: false });
            currentText = '';
          }

          segments.push({
            type: 'math',
            content: mathContent,
            display: delim.display,
          });

          index = contentEnd + delim.right.length;
          foundDelimiter = true;
          break;
        }
      }
    }

    // No delimiter found at this position - add character to current text
    if (!foundDelimiter) {
      currentText += text[index];
      index++;
    }
  }

  // Add any remaining text
  if (currentText) {
    segments.push({ type: 'text', content: currentText, display: false });
  }

  return segments;
}

// Validate if content between delimiters is actually math
function isValidMathContent(content: string, isInlineDelimiter: boolean): boolean {
  const trimmed = content.trim();

  // Empty content is not valid math
  if (!trimmed) {
    return false;
  }

  // For inline $ delimiters, apply stricter validation
  if (isInlineDelimiter) {
    // Currency pattern: digits with decimal places like "5.99"
    if (/^\d+[.,]\d{2}$/.test(trimmed)) {
      return false;
    }

    // Mark scheme notation: A1, M1, B1, E1, etc. (letter followed by number)
    if (/^[A-Z]\d+$/.test(trimmed)) {
      return false;
    }

    // Single letters (geometric points, variables): A, B, C, etc.
    if (/^[A-Z]$/.test(trimmed)) {
      return false;
    }

    // If content contains LaTeX commands, it's definitely math
    // Check for backslash followed by letters (LaTeX command)
    if (/\\[a-zA-Z]+/.test(trimmed)) {
      return true;
    }

    // Prose-like content: contains common English words (not math)
    // This catches cases like "$5 to $10" where "5 to " is captured
    const proseWords = /\b(to|and|or|the|a|an|is|are|was|were|be|been|for|of|in|on|at|by|with|from|as|into|that|this|it|its|if|but|not|no|so|than|too|very|just|only|also|even|still|yet|now|then|here|there|where|when|how|why|what|which|who|whom|whose|each|every|any|some|all|both|few|more|most|other|such|own|same|new|old|good|bad|big|small|great|little|long|short|high|low|much|many|first|last|next|after|before|over|under|again|further|once|twice)\b/i;
    if (proseWords.test(trimmed)) {
      return false;
    }

    // Content that's just a number followed by text (like "5 meters") is not math
    if (/^\d+\s+[a-zA-Z]/.test(trimmed)) {
      return false;
    }
  }

  return true;
}

// =============================================================================
// TEXT PREPROCESSING
// =============================================================================

// Process JSON escape sequences while protecting LaTeX commands
function processEscapeSequences(text: string, isStreaming: boolean = false): string {
  const endCheck = isStreaming ? '(?=.)' : '';

  let result = text
    // \n that's not a LaTeX command (nabla, neq, neg, nu, etc.)
    .replace(new RegExp(`\\\\n(?!(?:abla|eq|eg|u|ewline|warrow|earrow|exists|i|otin|ot|cong|less|geq|leq|gtr|mid|parallel|prec|succ|sim|subseteq|supseteq|vdash|vDash|Vdash|VDash)\\b)${endCheck}`, 'g'), '\n')
    // \t that's not a LaTeX command (theta, times, text, etc.)
    .replace(new RegExp(`\\\\t(?!(?:heta|imes|ext\\{|an|anh|op|au|herefore|riangle|o|extrm|extit|extbf|exttt|extsf|frac|ilde|iny)\\b)${endCheck}`, 'g'), '\t')
    // \r that's not a LaTeX command (rho, rightarrow, etc.)
    .replace(new RegExp(`\\\\r(?!(?:ho|ightarrow|Rightarrow|angle|ceil|floor|ight|vert|Vert|brace|brack|ule)\\b)${endCheck}`, 'g'), '\r')
    // Escaped quotes
    .replace(/\\"/g, '"');

  // Normalize multiple backslashes before LaTeX commands (\\frac -> \frac)
  result = result.replace(/\\{2,}([a-zA-Z])/g, '\\$1');
  
  // Fix common LaTeX \text command issues
  // First, handle double backslashes that might be over-escaped
  result = result.replace(/\\\\text\{/g, '\\text{');
  
  // Then ensure all \text commands are properly formatted
  // This handles cases where AI generates broken \text commands
  result = result.replace(/([^\\]|^)\\text\{([^}]*)\}/g, (match, prefix, content) => {
    // Clean the content - remove any stray backslashes and normalize whitespace
    const cleanContent = content.trim().replace(/\\\\/g, '');
    
    // For units and simple text, use \text{}
    // For chemical formulas, we might want \mathrm{} but \text{} works fine too
    return `${prefix}\\text{${cleanContent}}`;
  });

  // Fix common issues where "text" appears literally (from broken \text commands)
  // Only fix "text" patterns that are clearly LaTeX-related to avoid affecting normal prose
  
  // Fix broken patterns like "text{stuff}" (missing backslash) - but only if it looks like LaTeX
  result = result.replace(/\btext\{([^}]+)\}/g, '\\text{$1}');
  
  // Only fix "text" followed by units/chemical formulas if it's in a mathematical context
  // Use more restrictive patterns to avoid affecting regular English text
  result = result.replace(/(\$[^$]*)\btext\s+(cm|m|kg|g|mol|s|min|hr|°C|K|Pa|kPa|atm|J|kJ|N|V|A|Ω|Hz|Hz|rad|degree|degrees)\b([^$]*\$)/g, '$1\\text{$2}$3');
  
  // Fix cases where literal "text" appears in math mode (only between $ delimiters)
  result = result.replace(/(\$[^$]*)\btext\b([^$]*\$)/g, '$1\\text{}$2');
  
  // Fix common chemistry/physics units that appear without proper LaTeX formatting
  result = result.replace(/\b(cm|mm|km|g|kg|mol|dmol|kmol|°C|K|Pa|kPa|MPa|atm|bar|J|kJ|MJ|cal|kcal|eV|N|kN|W|kW|MW|V|mV|kV|A|mA|μA|Ω|kΩ|MΩ|Hz|kHz|MHz|GHz|rad|sr|C|F|H|Wb|T|lm|lx|Bq|Gy|Sv)\b(?=\s|$|[.,;:])/g, '\\text{$1}');

  return result;
}

// Fix forward slashes used instead of backslashes for LaTeX commands
function fixLatexEscaping(text: string): string {
  const latexCommands = [
    'frac', 'dfrac', 'tfrac', 'cfrac', 'sqrt', 'root',
    'times', 'div', 'cdot', 'pm', 'mp',
    'approx', 'sim', 'simeq', 'cong', 'equiv', 'propto',
    'leq', 'geq', 'neq', 'lt', 'gt', 'le', 'ge', 'ne',
    'll', 'gg', 'subset', 'supset', 'subseteq', 'supseteq',
    'in', 'notin', 'ni',
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'varepsilon',
    'zeta', 'eta', 'theta', 'vartheta', 'iota', 'kappa',
    'lambda', 'mu', 'nu', 'xi', 'pi', 'varpi',
    'rho', 'varrho', 'sigma', 'varsigma', 'tau', 'upsilon',
    'phi', 'varphi', 'chi', 'psi', 'omega',
    'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi',
    'Sigma', 'Upsilon', 'Phi', 'Psi', 'Omega',
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
    'arcsin', 'arccos', 'arctan',
    'sinh', 'cosh', 'tanh', 'coth',
    'log', 'ln', 'exp', 'lim', 'max', 'min',
    'sum', 'prod', 'int', 'iint', 'iiint', 'oint',
    'partial', 'nabla',
    'leftarrow', 'rightarrow', 'leftrightarrow',
    'Leftarrow', 'Rightarrow', 'Leftrightarrow',
    'uparrow', 'downarrow', 'mapsto', 'to',
    'forall', 'exists', 'neg',
    'land', 'lor', 'implies', 'iff',
    'cup', 'cap', 'setminus', 'emptyset',
    'left', 'right', 'middle',
    'langle', 'rangle', 'lfloor', 'rfloor', 'lceil', 'rceil',
    'ldots', 'cdots', 'vdots', 'ddots', 'dots',
    'quad', 'qquad', 'text', 'textrm', 'textit', 'textbf',
    'mathrm', 'mathit', 'mathbf', 'mathbb', 'mathcal',
    'hat', 'bar', 'vec', 'dot', 'ddot', 'tilde',
    'overline', 'underline', 'widehat', 'widetilde',
    'overbrace', 'underbrace', 'overset', 'underset',
    'degree', 'circ', 'angle', 'triangle', 'square',
    'parallel', 'perp', 'infty', 'prime',
    'begin', 'end', 'matrix', 'pmatrix', 'bmatrix', 'cases',
    'binom', 'boxed', 'cancel',
  ];

  let result = text;
  for (const cmd of latexCommands) {
    result = result.replace(new RegExp(`//${cmd}(?![a-zA-Z])`, 'g'), `\\${cmd}`);
    result = result.replace(new RegExp(`/(?!/)${cmd}(?![a-zA-Z])`, 'g'), `\\${cmd}`);
  }
  return result;
}

// Preprocess LaTeX specifically for KaTeX to handle common AI generation errors
function preprocessMathForKaTeX(math: string): string {
  let result = math;
  
  // Fix common \text command issues that cause KaTeX parsing errors
  // 1. Fix double backslashes in \text commands
  result = result.replace(/\\\\text\{/g, '\\text{');
  
  // 2. Fix missing backslash before text commands (only fix if it looks like a LaTeX command)
  result = result.replace(/\btext\{/g, '\\text{');
  
  // 3. Fix literal "text" appearing before chemical formulas or units (be more conservative)
  // Only apply this fix if "text" appears to be a broken LaTeX command, not regular prose
  result = result.replace(/\btext\s+(H2O|CO2|NaCl|CaCO3|HCl|H2SO4|NH3|CH4|C6H12O6|cm|mm|km|g|kg|mol|°C|K|Pa|kPa|atm|J|kJ|N|V|A|Ω|Hz|rad|s|min|hr)\b/g, '\\text{$1}');
  
  // 4. Only fix standalone "text" if it's clearly in a mathematical context (removed broad replacement)
  
  // 5. Fix underscores in \text commands (KaTeX parsing issue)
  result = result.replace(/\\text\{([^}]*_[^}]*)\}/g, (match, content) => {
    const escapedContent = content.replace(/_/g, '\\_');
    return `\\text{${escapedContent}}`;
  });
  
  // 6. Fix common chemistry notation issues
  result = result.replace(/\b(H2O|CO2|NaCl|CaCO3|HCl|H2SO4|NH3|CH4|C6H12O6)\b/g, '\\text{$1}');
  
  // 7. Fix units that appear without proper LaTeX formatting
  result = result.replace(/\b(cm|mm|km|g|kg|mol|°C|K|Pa|kPa|atm|J|kJ|N|V|A|Ω|Hz|rad|s|min|hr)\b(?=\s|$|[.,;:])/g, '\\text{$1}');
  
  return result;
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

export function MathRenderer({ content, className = '', isStreaming = false }: MathRendererProps) {
  const cssReady = useKatexCss();

  // Process content once and memoize
  const processedContent = useMemo(() => {
    const escaped = processEscapeSequences(content, isStreaming);
    return fixLatexEscaping(escaped);
  }, [content, isStreaming]);

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
  const hasMath = /\$|\\\[|\\\(/.test(processedContent);
  const mathVisibilityClass = hasMath && !cssReady ? 'invisible' : 'visible';

  return (
    <div className={`math-content ${className} ${mathVisibilityClass}`}>
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
