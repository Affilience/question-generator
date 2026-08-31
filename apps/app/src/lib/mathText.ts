/**
 * Pure text processing for mixed prose + LaTeX question content.
 *
 * Extracted from MathRenderer so the delimiter parsing and validity rules are
 * unit-testable. All functions are deterministic and idempotent-safe.
 */

import { repairLatex } from '@/lib/latexRepair';

export interface MathSegment {
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

    if (braceLevel <= 0 && text.slice(index, index + delimLength) === delimiter) {
      return index;
    }

    if (char === '\\') {
      index += 2;
      continue;
    }

    if (char === '{') {
      braceLevel++;
    } else if (char === '}') {
      braceLevel--;
    }

    index++;
  }

  return -1;
}

// Words that indicate captured prose rather than maths ("$5 to $10" captures
// "5 to "). Only consulted when the candidate contains whitespace.
const PROSE_WORDS =
  /\b(to|and|or|the|is|are|was|were|for|of|in|on|at|by|with|from|that|this|each|every|per|between|costs?|paid|price|worth)\b/i;

/**
 * Decide whether text between $ delimiters is really maths.
 *
 * The old rules rejected any single capital ("angle $A$") and any single
 * prose-ish letter ("solve for $a$"), which made extremely common maths
 * notation render as raw dollar signs. Rejection now needs positive evidence
 * of prose capture.
 */
export function isValidMathContent(content: string, isInlineDelimiter: boolean): boolean {
  const trimmed = content.trim();

  if (!trimmed) {
    return false;
  }

  if (isInlineDelimiter) {
    // A LaTeX command is definitive evidence of maths
    if (/\\[a-zA-Z]+/.test(trimmed)) {
      return true;
    }

    // Inline math spanning multiple lines is almost always an unpaired $
    // swallowing prose
    if (content.includes('\n')) {
      return false;
    }

    // Prose capture: only possible when there is whitespace between words
    if (/\s/.test(trimmed) && PROSE_WORDS.test(trimmed)) {
      return false;
    }

    // "5 metres" style: number then a real word (2+ letters)
    if (/^\d+(\.\d+)?\s+[a-zA-Z]{2,}/.test(trimmed) && !/[=^_{}]/.test(trimmed)) {
      return false;
    }
  }

  return true;
}

/**
 * Split text at LaTeX delimiters ($$, \[, \(, $), longest first.
 */
export function splitAtDelimiters(text: string): MathSegment[] {
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
    // Escaped dollar sign renders as a literal $
    if (text[index] === '\\' && text[index + 1] === '$') {
      currentText += '$';
      index += 2;
      continue;
    }

    let foundDelimiter = false;

    for (const delim of delimiters) {
      if (text.slice(index, index + delim.left.length) === delim.left) {
        const contentStart = index + delim.left.length;
        const contentEnd = findEndOfMath(delim.right, text, contentStart);

        if (contentEnd !== -1) {
          const mathContent = text.slice(contentStart, contentEnd);

          if (!isValidMathContent(mathContent, delim.left === '$')) {
            currentText += text[index];
            index++;
            foundDelimiter = true;
            break;
          }

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

    if (!foundDelimiter) {
      currentText += text[index];
      index++;
    }
  }

  if (currentText) {
    segments.push({ type: 'text', content: currentText, display: false });
  }

  return segments;
}

// Wrap bare LaTeX expressions in $ delimiters when the content has none at all
function wrapBareLatexExpressions(text: string): string {
  const hasDelimiters = /\$|\\\[|\\\(/.test(text);
  if (hasDelimiters) return text;

  const latexPatterns = [
    // Sequences of LaTeX commands and operators
    /(?:\\[a-zA-Z]+(?:\{[^}]*\})?[\s]*[≤≥<>=+\-*/][\s]*)+\\[a-zA-Z]+(?:\{[^}]*\})?/g,
    // Single LaTeX commands joined by relational operators
    /\\[a-zA-Z]+(?:\{[^}]*\})?\s*[≤≥<>=]\s*\\[a-zA-Z]+(?:\{[^}]*\})?/g,
  ];

  let result = text;
  for (const pattern of latexPatterns) {
    result = result.replace(pattern, (match) => `$${match}$`);
  }
  return result;
}

// Convert \text{...} that sits OUTSIDE math delimiters into plain prose.
// (Inside math it is handled by the KaTeX enhancement pass.)
function handleTextCommandsOutsideMath(text: string): string {
  const mathBlocks: string[] = [];
  let protectedText = text;

  // Protect display math first, then inline math
  protectedText = protectedText.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\])/g, (match) => {
    const placeholder = `__MB${mathBlocks.length}__`;
    mathBlocks.push(match);
    return placeholder;
  });
  protectedText = protectedText.replace(/(\\\([\s\S]*?\\\)|\$[^$\n]*?\$)/g, (match) => {
    const placeholder = `__MB${mathBlocks.length}__`;
    mathBlocks.push(match);
    return placeholder;
  });

  // Outside math, \text{...} of plain words is just prose. This also fixes
  // the old bug where multi-word wraps like \text{molar mass} were kept and
  // rendered literally, backslash and all.
  protectedText = protectedText.replace(/\\text\{([^{}]*)\}/g, (match, content) => {
    const trimmed = content.trim();
    if (/^[a-zA-Z][a-zA-Z\s\-']*$/.test(trimmed)) {
      return trimmed;
    }
    return match;
  });

  mathBlocks.forEach((block, index) => {
    protectedText = protectedText.replace(`__MB${index}__`, block);
  });

  return protectedText;
}

/**
 * Full pre-render pipeline for question/solution content: deterministic
 * corruption repair, bare-LaTeX wrapping, and out-of-math \text conversion.
 */
export function prepareContentForRender(content: string): string {
  let result = repairLatex(content);
  result = wrapBareLatexExpressions(result);
  result = handleTextCommandsOutsideMath(result);
  return result;
}
