/**
 * LaTeX enhancement for KaTeX rendering.
 *
 * Applied to each math segment (content between $...$ / $$...$$ delimiters)
 * just before KaTeX parses it. Everything here is a deterministic repair or a
 * well-defined notation upgrade. The previous version of this module guessed
 * at intent — converting every slash to \frac, wrapping every s/m/g/t letter
 * as a unit, turning a_n into \vec{a}_n — which corrupted correct maths (all
 * sequence notation grew vector arrows). Those transforms are gone; the model
 * already writes correct LaTeX, and the real corruption (JSON escaping
 * damage) is fixed upstream in latexRepair.
 */

import { repairLatex } from '@/lib/latexRepair';

// Unicode that KaTeX renders poorly or inconsistently -> LaTeX commands.
// Multi-character sequences MUST come before their prefixes (°C before °) —
// the old map replaced ° first, producing the invalid command \degreeC which
// crashed KaTeX on every temperature.
const SYMBOL_REPLACEMENTS: [string, string][] = [
  ['°C', '\\degree\\text{C}'],
  ['°F', '\\degree\\text{F}'],
  ['°', '\\degree'],
  ['×', '\\times'],
  ['⋅', '\\cdot'],
  ['÷', '\\div'],
  ['≤', '\\leq'],
  ['≥', '\\geq'],
  ['≠', '\\neq'],
  ['≈', '\\approx'],
  ['∝', '\\propto'],
  ['±', '\\pm'],
  ['∓', '\\mp'],
  ['∞', '\\infty'],
  ['∂', '\\partial'],
  ['∇', '\\nabla'],
  ['∫', '\\int'],
  ['∑', '\\sum'],
  ['∏', '\\prod'],
  ['√', '\\sqrt'],
  ['→', '\\rightarrow'],
  ['←', '\\leftarrow'],
  ['↔', '\\leftrightarrow'],
  ['⇌', '\\rightleftarrows'],
  ['↑', '\\uparrow'],
  ['↓', '\\downarrow'],
  ['∈', '\\in'],
  ['∉', '\\notin'],
  ['⊂', '\\subset'],
  ['⊆', '\\subseteq'],
  ['∪', '\\cup'],
  ['∩', '\\cap'],
  ['∅', '\\emptyset'],
  ['∀', '\\forall'],
  ['∃', '\\exists'],
  ['α', '\\alpha'],
  ['β', '\\beta'],
  ['γ', '\\gamma'],
  ['δ', '\\delta'],
  ['Δ', '\\Delta'],
  ['ε', '\\epsilon'],
  ['θ', '\\theta'],
  ['λ', '\\lambda'],
  ['μ', '\\mu'],
  ['π', '\\pi'],
  ['ρ', '\\rho'],
  ['σ', '\\sigma'],
  ['Σ', '\\Sigma'],
  ['φ', '\\phi'],
  ['ω', '\\omega'],
  ['Ω', '\\Omega'],
  ['½', '\\frac{1}{2}'],
  ['¼', '\\frac{1}{4}'],
  ['¾', '\\frac{3}{4}'],
  ['⅓', '\\frac{1}{3}'],
  ['⅔', '\\frac{2}{3}'],
];

// LaTeX commands sometimes written with forward slashes by the model
const SLASH_FIXABLE_COMMANDS = [
  'frac', 'dfrac', 'tfrac', 'sqrt',
  'times', 'div', 'cdot', 'pm',
  'approx', 'leq', 'geq', 'neq', 'equiv', 'propto',
  'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'theta', 'lambda', 'mu',
  'pi', 'rho', 'sigma', 'tau', 'phi', 'omega',
  'Gamma', 'Delta', 'Theta', 'Lambda', 'Pi', 'Sigma', 'Omega',
  'sin', 'cos', 'tan', 'log', 'ln', 'lim',
  'sum', 'prod', 'int',
  'rightarrow', 'leftarrow', 'Rightarrow',
  'text', 'mathrm', 'mathbf', 'vec', 'hat', 'bar', 'overline',
  'degree', 'circ', 'angle', 'triangle', 'infty',
  'quad', 'qquad', 'left', 'right',
  'begin', 'end', 'binom', 'boxed',
];

// Single letters that are units when they follow a number ($5 \text{s}$),
// but variables when they don't ($\text{s}$ alone -> italic s)
const SINGLE_LETTER_UNITS = new Set(['s', 'm', 'g', 'N', 'A', 'V', 'W', 'J', 'K', 'T', 'C', 'F', 'H', 'L', 'h']);

// Common chemical formulas -> proper subscript notation (fixed list only; no
// generic letter+digit guessing, which used to rewrite point labels like A1)
const CHEMICAL_FORMULAS: [string, string][] = [
  ['H2O', '\\text{H}_2\\text{O}'],
  ['CO2', '\\text{CO}_2'],
  ['O2', '\\text{O}_2'],
  ['N2', '\\text{N}_2'],
  ['H2', '\\text{H}_2'],
  ['Cl2', '\\text{Cl}_2'],
  ['CH4', '\\text{CH}_4'],
  ['NH3', '\\text{NH}_3'],
  ['H2SO4', '\\text{H}_2\\text{SO}_4'],
  ['CaCO3', '\\text{CaCO}_3'],
  ['C6H12O6', '\\text{C}_6\\text{H}_{12}\\text{O}_6'],
  ['C2H5OH', '\\text{C}_2\\text{H}_5\\text{OH}'],
];

/**
 * Validate LaTeX syntax; used for dev-time logging only (never mutates).
 */
export function validateLatexSyntax(text: string): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Unmatched braces
  let braceLevel = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\\') {
      i++; // skip escaped char
      continue;
    }
    if (text[i] === '{') braceLevel++;
    if (text[i] === '}') braceLevel--;
    if (braceLevel < 0) {
      errors.push(`Unmatched closing brace at position ${i}`);
      braceLevel = 0;
    }
  }
  if (braceLevel > 0) {
    errors.push(`${braceLevel} unmatched opening brace(s)`);
  }

  if (text.includes('\\text{}')) {
    warnings.push('Empty \\text{} command found');
  }
  if (text.includes('_{_{') || text.includes('^{^{')) {
    errors.push('Doubled sub/superscript braces detected');
  }

  return { isValid: errors.length === 0, errors, warnings };
}

/**
 * Prepare one math segment for KaTeX.
 */
export function enhanceLatexForKatex(text: string): {
  enhanced: string;
  validation: ReturnType<typeof validateLatexSyntax>;
} {
  // 1. Deterministic corruption repair (idempotent; covers legacy stored content)
  let result = repairLatex(text);

  // 2. Forward slashes used instead of backslashes for commands. Only when
  //    the slash is NOT preceded by a letter/digit — "m/min" and "km/h" are
  //    divisions, "= /frac{1}{2}" is a typo'd command.
  const slashPattern = new RegExp(
    `(^|[^a-zA-Z0-9])/{1,2}(${SLASH_FIXABLE_COMMANDS.join('|')})(?![a-zA-Z])`,
    'g'
  );
  result = result.replace(slashPattern, '$1\\$2');

  // 3. Unicode -> LaTeX commands (ordered, longest first)
  for (const [symbol, latex] of SYMBOL_REPLACEMENTS) {
    result = result.split(symbol).join(latex);
  }

  // 4. Chemical formulas from the fixed list, both bare and \text-wrapped.
  //    Preceding digits are allowed (stoichiometric coefficients like 2H2O);
  //    preceding letters/braces are not (avoids touching identifiers).
  for (const [formula, latex] of CHEMICAL_FORMULAS) {
    result = result.split(`\\text{${formula}}`).join(latex);
    result = result.replace(new RegExp(`(^|[^_{a-zA-Z}])${formula}(?![\\w}])`, 'g'), `$1${latex}`);
  }

  // 5. \text{<single letter>}: keep as a unit after a number ($5 \text{s}$)
  //    or inside chemistry/degree constructs; a lone one is a variable that
  //    belongs in math mode
  result = result.replace(/\\text\{([a-zA-Z])\}/g, (match, letter, offset: number) => {
    const before = result.slice(Math.max(0, offset - 12), offset)
      .replace(/(\\,|[\s,])+$/g, '');
    const after = result.slice(offset + match.length);

    // Part of a formula chain: \text{H}_2\text{O}, \text{SO}_4^{2-}
    if (/[_^]\{?\d+\}?$/.test(before) || /^[_^]/.test(after)) {
      return match;
    }
    // Temperature/degree constructs: \degree\text{C}
    if (/\\degree$/.test(before)) {
      return match;
    }
    // Unit after a measurement: 5 \text{s}
    if (/\d$/.test(before) && SINGLE_LETTER_UNITS.has(letter)) {
      return match;
    }
    return letter;
  });

  // 6. Escape special characters inside \text{...} that KaTeX rejects.
  //    Normalise-then-escape keeps this idempotent without lookbehinds.
  result = result.replace(/\\text\{([^{}]*)\}/g, (match, content) => {
    const escaped = content
      .replace(/\\([_%#&])/g, '$1')
      .replace(/([_%#&])/g, '\\$1');
    return `\\text{${escaped}}`;
  });

  // 7. Thin space between a number and a unit for correct typesetting
  result = result.replace(/(\d)\s+\\text\{/g, '$1\\,\\text{');

  const validation = validateLatexSyntax(result);
  return { enhanced: result, validation };
}
