/**
 * Deterministic LaTeX repair for AI-generated question content.
 *
 * Root cause of most historical maths-formatting bugs: the model sometimes
 * writes LaTeX commands single-escaped inside JSON ("\text" instead of
 * "\\text"), so JSON.parse converts the leading "\t" into a TAB character,
 * leaving `<TAB>ext{...}` in the content. The same happens for \f (formfeed,
 * from \frac), \b (backspace, from \beta/\begin), \r (carriage return, from
 * \rightarrow/\rho) and \n (newline, from \neq/\nabla). Production data
 * showed 109 bank questions with TAB corruption and 19 with formfeeds.
 *
 * These control characters are unambiguous repair signals: a real tab is
 * never followed by "ext{", a real formfeed never by "rac{". Repairs here
 * are strictly deterministic inversions of that damage — no intent-guessing.
 *
 * Used server-side at parse/store time and client-side at render time (as a
 * fallback for legacy stored content), so it must be idempotent.
 */

// [control char + orphaned suffix] -> restored command.
// Longest suffixes first so e.g. "extbf{" wins over "ext{".
const CONTROL_CHAR_REPAIRS: [RegExp, string][] = [
  // \t... commands (TAB)
  [/\textbf\{/g, '\\textbf{'],
  [/\textit\{/g, '\\textit{'],
  [/\textrm\{/g, '\\textrm{'],
  [/\texttt\{/g, '\\texttt{'],
  [/\textsf\{/g, '\\textsf{'],
  [/\text\{/g, '\\text{'],
  [/\therefore(?![a-zA-Z])/g, '\\therefore'],
  [/\triangle(?![a-zA-Z])/g, '\\triangle'],
  [/\times(?![a-zA-Z])/g, '\\times'],
  [/\theta(?![a-zA-Z])/g, '\\theta'],
  [/\tilde\{/g, '\\tilde{'],
  [/\tfrac\{/g, '\\tfrac{'],
  [/\tanh(?![a-zA-Z])/g, '\\tanh'],
  [/\tan(?![a-zA-Z])/g, '\\tan'],
  [/\tau(?![a-zA-Z])/g, '\\tau'],
  // \f... commands (formfeed)
  [/\frac\{/g, '\\frac{'],
  [/\forall(?![a-zA-Z])/g, '\\forall'],
  // \b... commands (backspace — \x08, since \b in a regex is a word boundary)
  [/\x08egin\{/g, '\\begin{'],
  [/\x08eta(?![a-zA-Z])/g, '\\beta'],
  [/\x08inom\{/g, '\\binom{'],
  [/\x08oxed\{/g, '\\boxed{'],
  [/\x08ar\{/g, '\\bar{'],
  [/\x08mod(?![a-zA-Z])/g, '\\bmod'],
  // \r... commands (carriage return)
  [/\rightarrow(?![a-zA-Z])/g, '\\rightarrow'],
  [/\rightleftarrows(?![a-zA-Z])/g, '\\rightleftarrows'],
  [/\right(?=[)\]}.|\\])/g, '\\right'],
  [/\rho(?![a-zA-Z])/g, '\\rho'],
  [/\rangle(?![a-zA-Z])/g, '\\rangle'],
  // \n... commands (newline). Only unambiguous ones — a real newline is
  // frequently followed by ordinary words, so each suffix here must be
  // something that never starts a line of prose.
  [/\neq(?![a-zA-Z])/g, '\\neq'],
  [/\nabla(?![a-zA-Z])/g, '\\nabla'],
  [/\notin(?![a-zA-Z])/g, '\\notin'],
  [/\newline(?![a-zA-Z])/g, '\\newline'],
];

/**
 * Repair AI-generated LaTeX content. Idempotent; safe on prose.
 */
export function repairLatex(text: string): string {
  if (!text) return text;

  let result = text;

  // 1. Restore commands destroyed by JSON escape processing
  for (const [pattern, replacement] of CONTROL_CHAR_REPAIRS) {
    result = result.replace(pattern, replacement);
  }

  // 2. Collapse over-escaped commands (\\frac or \\\\frac -> \frac).
  //    Stored content should hold exactly one backslash per command.
  result = result.replace(/\\{2,}([a-zA-Z])/g, '\\$1');

  // 3. Restore commands whose backslash was stripped entirely (legacy damage
  //    from earlier sanitisation passes). High-precision patterns only:
  //    "text{...}" / "rac{...}{...}" never occur in real prose.
  result = result.replace(/(^|[^\\a-zA-Z])text\{/g, '$1\\text{');
  result = result.replace(/(^|[^\\a-zA-Z])rac\{([^}]*)\}\{/g, '$1\\frac{$2}{');

  // 4. Remove empty text-mode commands (render as artifacts)
  result = result.replace(/\\text(?:bf|it|rm|tt|sf)?\{\s*\}/g, '');

  return result;
}

/**
 * Progressive JSON-string unescaper for streamed content.
 *
 * The streaming route extracts the *escaped* value of the JSON "content"
 * field and forwards it in chunks. This converts those chunks to real text
 * exactly as JSON.parse would, holding back trailing incomplete escape
 * sequences (a chunk can end mid-"\u00").
 *
 * Returns the unescaped text plus the tail to prepend to the next chunk.
 */
export function unescapeJsonChunk(chunk: string): { text: string; holdback: string } {
  let out = '';
  let i = 0;

  while (i < chunk.length) {
    const ch = chunk[i];
    if (ch !== '\\') {
      out += ch;
      i++;
      continue;
    }

    // Escape sequence begins; is its continuation present?
    if (i + 1 >= chunk.length) {
      return { text: out, holdback: chunk.slice(i) };
    }

    const next = chunk[i + 1];
    switch (next) {
      case 'n': out += '\n'; i += 2; break;
      case 't': out += '\t'; i += 2; break;
      case 'r': out += '\r'; i += 2; break;
      case 'b': out += '\b'; i += 2; break;
      case 'f': out += '\f'; i += 2; break;
      case '"': out += '"'; i += 2; break;
      case '/': out += '/'; i += 2; break;
      case '\\': out += '\\'; i += 2; break;
      case 'u': {
        if (i + 6 > chunk.length) {
          return { text: out, holdback: chunk.slice(i) };
        }
        const hex = chunk.slice(i + 2, i + 6);
        if (/^[0-9a-fA-F]{4}$/.test(hex)) {
          out += String.fromCharCode(parseInt(hex, 16));
        } else {
          out += chunk.slice(i, i + 6);
        }
        i += 6;
        break;
      }
      default:
        // Not a JSON escape (e.g. a lone backslash the model emitted before
        // a LaTeX letter that IS valid JSON when doubled upstream) — keep
        // both characters as-is.
        out += ch + next;
        i += 2;
    }
  }

  return { text: out, holdback: '' };
}
