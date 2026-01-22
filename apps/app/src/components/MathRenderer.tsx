'use client';

import { InlineMath, BlockMath } from 'react-katex';
import { Component, ReactNode, useEffect, useState } from 'react';

// Track KaTeX CSS loading state globally
let katexCssLoaded = false;
let katexCssReady = false;
let katexCssCallbacks: (() => void)[] = [];

function useKatexCss(): boolean {
  const [cssReady, setCssReady] = useState(katexCssReady);

  useEffect(() => {
    // If CSS is already fully loaded, we're good
    if (katexCssReady) {
      setCssReady(true);
      return;
    }

    // Register callback to be notified when CSS loads
    const callback = () => setCssReady(true);
    katexCssCallbacks.push(callback);

    // Start loading CSS if not already started
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
      // Remove callback on unmount
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
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class MathErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Show the raw LaTeX as fallback
      return <code className="text-amber-500 bg-amber-500/10 px-1 rounded">{this.props.fallback}</code>;
    }
    return this.props.children;
  }
}

// Safe wrapper for InlineMath that catches errors
function SafeInlineMath({ math }: { math: string }) {
  if (!math || math.trim() === '') {
    return null;
  }
  return (
    <MathErrorBoundary fallback={`$${math}$`}>
      <InlineMath math={math} />
    </MathErrorBoundary>
  );
}

// Safe wrapper for BlockMath that catches errors
function SafeBlockMath({ math }: { math: string }) {
  if (!math || math.trim() === '') {
    return null;
  }
  return (
    <MathErrorBoundary fallback={`$$${math}$$`}>
      <BlockMath math={math} />
    </MathErrorBoundary>
  );
}

// Process JSON escape sequences that may still be in content
// Use specific negative lookaheads to protect LaTeX commands
function processEscapeSequences(text: string, isStreaming: boolean = false): string {
  // LaTeX commands starting with \n: nabla, neq, neg, nu, newline, nwarrow, nearrow, nexists, ni, notin, not, ncong, nless, etc.
  // LaTeX commands starting with \t: theta, times, text, tan, tanh, top, tau, therefore, triangle, to, textrm, textit, textbf, tfrac, tilde
  // LaTeX commands starting with \r: rho, rightarrow, Rightarrow, rangle, rceil, rfloor, right, rvert, rbrace, rbrack

  // For streaming, add (?=.) to avoid matching at end of string (might be incomplete commands)
  const endCheck = isStreaming ? '(?=.)' : '';

  let result = text
    .replace(new RegExp(`\\\\n(?!(?:abla|eq|eg|u|ewline|warrow|earrow|exists|i|otin|ot|cong|less|geq|leq|gtr|mid|parallel|prec|succ|sim|subseteq|supseteq|vdash|vDash|Vdash|VDash)\\b)${endCheck}`, 'g'), '\n')
    .replace(new RegExp(`\\\\t(?!(?:heta|imes|ext|an|anh|op|au|herefore|riangle|o|extrm|extit|extbf|exttt|extsf|frac|ilde|iny)\\b)${endCheck}`, 'g'), '\t')
    .replace(new RegExp(`\\\\r(?!(?:ho|ightarrow|Rightarrow|angle|ceil|floor|ight|vert|Vert|brace|brack|ule)\\b)${endCheck}`, 'g'), '\r')
    .replace(/\\"/g, '"');

  // Normalize multiple backslashes before LaTeX commands
  // This handles inconsistent escaping from AI (\\\\frac, \\frac, etc. all become \frac)
  result = result.replace(/\\{2,}([a-zA-Z])/g, '\\$1');

  return result;
}

// Fix common LaTeX escaping issues from AI responses
function fixLatexEscaping(text: string): string {
  // Comprehensive list of LaTeX commands that might be output with forward slashes
  const latexCommands = [
    // Basic math operations
    'frac', 'dfrac', 'tfrac', 'cfrac', 'sqrt', 'root',
    'times', 'div', 'cdot', 'ast', 'star',
    'pm', 'mp', 'plus', 'minus',

    // Comparison and relations
    'approx', 'sim', 'simeq', 'cong', 'equiv', 'propto',
    'leq', 'geq', 'neq', 'lt', 'gt', 'le', 'ge', 'ne',
    'll', 'gg', 'subset', 'supset', 'subseteq', 'supseteq',
    'in', 'notin', 'ni', 'owns',

    // Greek letters (lowercase)
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'varepsilon',
    'zeta', 'eta', 'theta', 'vartheta', 'iota', 'kappa',
    'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'varpi',
    'rho', 'varrho', 'sigma', 'varsigma', 'tau', 'upsilon',
    'phi', 'varphi', 'chi', 'psi', 'omega',

    // Greek letters (uppercase)
    'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi',
    'Sigma', 'Upsilon', 'Phi', 'Psi', 'Omega',

    // Trig and functions
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
    'arcsin', 'arccos', 'arctan', 'arccot',
    'sinh', 'cosh', 'tanh', 'coth',
    'log', 'ln', 'lg', 'exp',
    'lim', 'limsup', 'liminf', 'max', 'min', 'sup', 'inf',
    'det', 'dim', 'ker', 'hom', 'arg', 'deg', 'gcd',

    // Calculus and sums
    'sum', 'prod', 'coprod', 'int', 'iint', 'iiint', 'oint',
    'partial', 'nabla', 'grad',

    // Arrows
    'leftarrow', 'rightarrow', 'leftrightarrow',
    'Leftarrow', 'Rightarrow', 'Leftrightarrow',
    'longleftarrow', 'longrightarrow', 'longleftrightarrow',
    'uparrow', 'downarrow', 'updownarrow',
    'mapsto', 'longmapsto', 'hookrightarrow', 'hookleftarrow',
    'nearrow', 'searrow', 'swarrow', 'nwarrow',
    'to', 'gets', 'leadsto',

    // Logic and sets
    'forall', 'exists', 'nexists', 'neg', 'lnot',
    'land', 'lor', 'implies', 'iff',
    'cup', 'cap', 'setminus', 'emptyset', 'varnothing',
    'therefore', 'because',

    // Delimiters
    'left', 'right', 'middle',
    'lvert', 'rvert', 'lVert', 'rVert',
    'langle', 'rangle', 'lfloor', 'rfloor', 'lceil', 'rceil',
    'lbrace', 'rbrace', 'lbrack', 'rbrack',

    // Dots and spacing
    'ldots', 'cdots', 'vdots', 'ddots', 'dots',
    'quad', 'qquad', 'hspace', 'vspace', 'thinspace', 'negthinspace',
    'enspace', 'kern', 'mkern', 'hfill',

    // Text and fonts
    'text', 'textrm', 'textit', 'textbf', 'textsf', 'texttt',
    'mathrm', 'mathit', 'mathbf', 'mathsf', 'mathtt',
    'mathbb', 'mathcal', 'mathfrak', 'mathscr',
    'boldsymbol', 'bm',

    // Accents and decorations
    'hat', 'bar', 'vec', 'dot', 'ddot', 'tilde', 'widetilde',
    'overline', 'underline', 'widehat', 'overrightarrow', 'overleftarrow',
    'overbrace', 'underbrace', 'overset', 'underset',
    'stackrel', 'atop', 'choose',

    // Geometry and misc symbols
    'degree', 'circ', 'angle', 'measuredangle', 'sphericalangle',
    'triangle', 'square', 'diamond', 'star',
    'parallel', 'perp', 'cong', 'ncong',
    'infty', 'aleph', 'hbar', 'ell', 'wp', 'Re', 'Im',
    'prime', 'backprime',

    // Chemistry (common)
    'ce', 'pu', // mhchem package (may not work in KaTeX)

    // Environments
    'begin', 'end',

    // Matrices
    'matrix', 'pmatrix', 'bmatrix', 'vmatrix', 'Vmatrix', 'cases',

    // Binomials
    'binom', 'dbinom', 'tbinom',

    // Misc
    'not', 'cancel', 'bcancel', 'xcancel', 'sout',
    'phantom', 'hphantom', 'vphantom', 'smash',
    'color', 'textcolor', 'colorbox', 'fcolorbox',
    'boxed', 'fbox', 'framebox',
    'rule', 'strut', 'mathstrut',
  ];

  let result = text;

  // Fix forward slashes used instead of backslashes
  for (const cmd of latexCommands) {
    // Match /command or //command patterns and replace with \command
    result = result.replace(new RegExp(`//${cmd}(?![a-zA-Z])`, 'g'), `\\${cmd}`);
    result = result.replace(new RegExp(`/(?!/)${cmd}(?![a-zA-Z])`, 'g'), `\\${cmd}`);
  }

  return result;
}

// Parse markdown table and return structured data
function parseMarkdownTable(tableText: string): { headers: string[]; rows: string[][] } | null {
  const lines = tableText.trim().split('\n').filter(line => line.trim());
  if (lines.length < 2) return null;

  // Check if this looks like a markdown table
  if (!lines[0].includes('|')) return null;

  const parseRow = (line: string): string[] => {
    return line
      .split('|')
      .map(cell => cell.trim())
      .filter((cell, index, arr) => index > 0 && index < arr.length - 1 || (index === 0 && cell) || (index === arr.length - 1 && cell));
  };

  const headers = parseRow(lines[0]);

  // Check for separator line (---|---|---)
  const separatorIndex = lines.findIndex(line => /^[\s|:-]+$/.test(line));
  const dataStartIndex = separatorIndex >= 0 ? separatorIndex + 1 : 1;

  const rows: string[][] = [];
  for (let i = dataStartIndex; i < lines.length; i++) {
    if (lines[i].includes('|')) {
      rows.push(parseRow(lines[i]));
    }
  }

  return { headers, rows };
}

export function MathRenderer({ content, className = '', isStreaming = false }: MathRendererProps) {
  // Load KaTeX CSS and track when it's ready
  const cssReady = useKatexCss();

  // First process any remaining JSON escape sequences, then fix LaTeX escaping
  const processedContent = processEscapeSequences(content, isStreaming);
  const fixedContent = fixLatexEscaping(processedContent);

  // Process basic markdown formatting (bold **...** and italic *...*)
  const processMarkdown = (text: string): React.ReactNode[] => {
    // Match **bold** and *italic* patterns
    const markdownRegex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      const matched = match[0];
      if (matched.startsWith('**') && matched.endsWith('**')) {
        // Bold text
        parts.push(<strong key={match.index}>{matched.slice(2, -2)}</strong>);
      } else if (matched.startsWith('*') && matched.endsWith('*')) {
        // Italic text
        parts.push(<em key={match.index}>{matched.slice(1, -1)}</em>);
      }

      lastIndex = markdownRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  // Split content by LaTeX delimiters and render appropriately
  // Supports: $...$ for inline, $$...$$ for block, \(...\) for inline, \[...\] for block
  const renderMathContent = (text: string) => {
    // Comprehensive regex for all LaTeX delimiter styles:
    // 1. Block math: $$...$$ (non-greedy, can contain newlines)
    // 2. Block math: \[...\] (escaped brackets, non-greedy)
    // 3. Inline math: $...$ (non-greedy, must have content, no nested $)
    // 4. Inline math: \(...\) (escaped parentheses, non-greedy to allow nested parens)
    const mathRegex = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\$[^$]+\$|\\\([\s\S]+?\\\))/g;

    const parts: string[] = [];
    let lastIndex = 0;
    let match;

    while ((match = mathRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(match[0]);
      lastIndex = mathRegex.lastIndex;
    }
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    // If no matches, return the whole text
    if (parts.length === 0) {
      parts.push(text);
    }

    return parts.map((part, index) => {
      // Block math: $$...$$ or \[...\]
      if ((part.startsWith('$$') && part.endsWith('$$') && part.length > 4) ||
          (part.startsWith('\\[') && part.endsWith('\\]') && part.length > 4)) {
        // Extract math content based on delimiter type
        const math = part.startsWith('$$')
          ? part.slice(2, -2).trim()
          : part.slice(2, -2).trim();
        if (!math) return <span key={index}>{part}</span>;
        return (
          <div key={index} className="my-4">
            <SafeBlockMath math={math} />
          </div>
        );
      }
      // Inline math: $...$ or \(...\)
      else if ((part.startsWith('$') && part.endsWith('$') && part.length > 2) ||
               (part.startsWith('\\(') && part.endsWith('\\)') && part.length > 4)) {
        // Extract math content based on delimiter type
        const math = part.startsWith('$')
          ? part.slice(1, -1)
          : part.slice(2, -2);
        if (!math) return <span key={index}>{part}</span>;

        // Extra check: skip if it looks like currency (just a number)
        if (/^\d+([.,]\d{2})?$/.test(math.trim())) {
          return <span key={index}>{part}</span>;
        }

        return <SafeInlineMath key={index} math={math} />;
      } else {
        // Regular text - process markdown formatting
        return <span key={index}>{processMarkdown(part)}</span>;
      }
    });
  };

  // Format question parts like (a), (b), (c), (i), (ii), (iii) with proper styling
  const formatQuestionPart = (line: string) => {
    // Check if line starts with a question part label
    // Supports: (a), (b), (c), (i), (ii), (iii), (iv), (1), (2), (3)
    const partMatch = line.match(/^\(([a-z]|[ivxlcdm]+|\d+)\)\s*/i);

    if (partMatch) {
      const partLabel = partMatch[1];
      const restOfLine = line.slice(partMatch[0].length);

      // Check for mark allocation at end like [3 marks] or [1 mark]
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

    // Check for mark allocation at end of non-part lines
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

  // Render a markdown table as HTML
  const renderTable = (tableData: { headers: string[]; rows: string[][] }) => {
    return (
      <div className="overflow-x-auto my-4">
        <table className="min-w-full border-collapse border border-[var(--color-border)]">
          <thead>
            <tr className="bg-[var(--color-bg-secondary)]">
              {tableData.headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-[var(--color-border)] px-4 py-2 text-left font-semibold text-[var(--color-text-primary)]"
                >
                  {renderMathContent(header)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? '' : 'bg-[var(--color-bg-secondary)]/50'}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-[var(--color-border)] px-4 py-2 text-[var(--color-text-primary)]"
                  >
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

  // Render a code block with optional language label
  const renderCodeBlock = (code: string, language?: string) => {
    // Map common language identifiers to display names
    const languageLabels: Record<string, string> = {
      'python': 'Python',
      'pseudocode': 'Pseudocode',
      'sql': 'SQL',
      'javascript': 'JavaScript',
      'js': 'JavaScript',
      'java': 'Java',
      'csharp': 'C#',
      'cs': 'C#',
      'vb': 'VB.NET',
      'vbnet': 'VB.NET',
      'cpp': 'C++',
      'c': 'C',
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

  // Split content into blocks (code blocks, tables, and regular text)
  const splitIntoBlocks = (text: string): { type: 'code' | 'table' | 'text'; content: string; language?: string }[] => {
    const blocks: { type: 'code' | 'table' | 'text'; content: string; language?: string }[] = [];

    // First, extract code blocks (triple backticks)
    const codeBlockRegex = /```(\w*)\n?([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      // Add text before the code block
      if (match.index > lastIndex) {
        const textBefore = text.slice(lastIndex, match.index);
        if (textBefore.trim()) {
          blocks.push(...splitTextAndTables(textBefore));
        }
      }

      // Add the code block
      const language = match[1] || undefined;
      const code = match[2].trim();
      if (code) {
        blocks.push({ type: 'code', content: code, language });
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after the last code block
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      if (remainingText.trim()) {
        blocks.push(...splitTextAndTables(remainingText));
      }
    }

    // If no code blocks were found, process the entire text
    if (blocks.length === 0 && text.trim()) {
      blocks.push(...splitTextAndTables(text));
    }

    return blocks;
  };

  // Helper function to split text into tables and regular text
  const splitTextAndTables = (text: string): { type: 'table' | 'text'; content: string }[] => {
    const blocks: { type: 'table' | 'text'; content: string }[] = [];
    const lines = text.split('\n');
    let currentBlock: string[] = [];
    let inTable = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineHasPipes = line.includes('|');
      const isSeparator = /^[\s|:-]+$/.test(line) && line.includes('-');

      if (lineHasPipes || isSeparator) {
        if (!inTable && currentBlock.length > 0) {
          // Save previous text block
          blocks.push({ type: 'text', content: currentBlock.join('\n') });
          currentBlock = [];
        }
        inTable = true;
        currentBlock.push(line);
      } else if (line.trim() === '' && inTable) {
        // Empty line might end table
        if (currentBlock.length > 0) {
          blocks.push({ type: 'table', content: currentBlock.join('\n') });
          currentBlock = [];
        }
        inTable = false;
      } else {
        if (inTable && currentBlock.length > 0) {
          // End of table
          blocks.push({ type: 'table', content: currentBlock.join('\n') });
          currentBlock = [];
          inTable = false;
        }
        currentBlock.push(line);
      }
    }

    // Handle remaining content
    if (currentBlock.length > 0) {
      blocks.push({ type: inTable ? 'table' : 'text', content: currentBlock.join('\n') });
    }

    return blocks;
  };

  // Split content into blocks and render each appropriately
  const blocks = splitIntoBlocks(fixedContent);

  // Check if content contains any math (needs CSS to render properly)
  const hasMath = /\$[\s\S]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)/.test(fixedContent);

  // If content has math and CSS isn't ready, hide it to prevent FOUC
  // Use visibility:hidden to preserve layout while invisible
  const mathVisibilityClass = hasMath && !cssReady ? 'invisible' : 'visible';

  return (
    <div className={`math-content ${className} ${mathVisibilityClass}`}>
      {blocks.map((block, blockIndex) => {
        // Code block rendering (for CS questions, etc.)
        if (block.type === 'code') {
          return <div key={blockIndex}>{renderCodeBlock(block.content, block.language)}</div>;
        }

        // Table rendering
        if (block.type === 'table') {
          const tableData = parseMarkdownTable(block.content);
          if (tableData && tableData.headers.length > 0) {
            return <div key={blockIndex}>{renderTable(tableData)}</div>;
          }
        }

        // Regular text block - split by paragraphs
        const paragraphs = block.content.split(/\n\n+/);

        return (
          <div key={blockIndex}>
            {paragraphs.map((paragraph, pIndex) => {
              const lines = paragraph.split('\n');

              // Check if this paragraph contains question parts
              const hasQuestionParts = lines.some(line => /^\([a-z]\)/.test(line.trim()));

              if (hasQuestionParts) {
                // Render as structured question parts
                return (
                  <div key={pIndex} className={pIndex > 0 ? 'mt-4' : ''}>
                    {lines.map((line, lineIndex) => {
                      const trimmedLine = line.trim();
                      if (!trimmedLine) return null;
                      return (
                        <div key={lineIndex}>
                          {formatQuestionPart(trimmedLine)}
                        </div>
                      );
                    })}
                  </div>
                );
              }

              // Regular paragraph
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
