/**
 * Safe evaluator for AI-generated curve expressions like "x^2 - 3x + 1",
 * "sin(x)", "2*sqrt(x)".
 *
 * Replaces the eval() call that previously executed arbitrary strings from
 * stored diagram JSON in every viewer's browser. This is a tiny
 * recursive-descent parser over an explicit whitelist: numbers, x, pi, e,
 * + - * / ^, parentheses, and a fixed set of functions. Anything else fails
 * to compile and the curve simply isn't drawn.
 */

type Fn1 = (v: number) => number;

const FUNCTIONS: Record<string, Fn1> = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  sqrt: Math.sqrt,
  abs: Math.abs,
  ln: Math.log,
  log: Math.log10,
  exp: Math.exp,
};

const CONSTANTS: Record<string, number> = {
  pi: Math.PI,
  e: Math.E,
};

type Token =
  | { kind: 'num'; value: number }
  | { kind: 'ident'; name: string }
  | { kind: 'op'; op: string };

function tokenize(src: string): Token[] | null {
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/[0-9.]/.test(ch)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j++;
      const value = Number(src.slice(i, j));
      if (!Number.isFinite(value)) return null;
      tokens.push({ kind: 'num', value });
      i = j;
      continue;
    }
    if (/[a-zA-Z]/.test(ch)) {
      let j = i;
      while (j < src.length && /[a-zA-Z]/.test(src[j])) j++;
      tokens.push({ kind: 'ident', name: src.slice(i, j).toLowerCase() });
      i = j;
      continue;
    }
    if ('+-*/^()'.includes(ch)) {
      tokens.push({ kind: 'op', op: ch });
      i++;
      continue;
    }
    return null; // unknown character -> refuse to compile
  }
  return tokens;
}

/**
 * Compile an expression to a function of x. Returns null if the expression
 * uses anything outside the whitelist or is malformed.
 *
 * Grammar (standard precedence, ^ right-associative, implicit multiplication
 * supported for forms like "2x", "3sin(x)", "x(x+1)"):
 *   expr    := term (('+'|'-') term)*
 *   term    := factor (('*'|'/') factor)*  with implicit '*'
 *   factor  := unary ('^' factor)?
 *   unary   := '-' unary | atom
 *   atom    := number | 'x' | constant | fn '(' expr ')' | '(' expr ')'
 */
export function compileExpression(src: string): Fn1 | null {
  if (!src || typeof src !== 'string' || src.length > 200) return null;

  const tokens = tokenize(src);
  if (!tokens || tokens.length === 0) return null;

  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];

  type Node = (x: number) => number;

  function parseExpr(): Node | null {
    let left = parseTerm();
    if (!left) return null;
    while (peek()?.kind === 'op' && (peek() as { op: string }).op.match(/^[+-]$/)) {
      const op = (next() as { op: string }).op;
      const right = parseTerm();
      if (!right) return null;
      const l: Node = left;
      left = op === '+' ? (x) => l(x) + right(x) : (x) => l(x) - right(x);
    }
    return left;
  }

  function startsAtom(t: Token | undefined): boolean {
    if (!t) return false;
    if (t.kind === 'num' || t.kind === 'ident') return true;
    return t.kind === 'op' && t.op === '(';
  }

  function parseTerm(): Node | null {
    let left = parseFactor();
    if (!left) return null;
    for (;;) {
      const t = peek();
      if (t?.kind === 'op' && (t.op === '*' || t.op === '/')) {
        const op = (next() as { op: string }).op;
        const right = parseFactor();
        if (!right) return null;
        const l: Node = left;
        left = op === '*' ? (x) => l(x) * right(x) : (x) => l(x) / right(x);
      } else if (startsAtom(t)) {
        // Implicit multiplication: 2x, 3sin(x), x(x+1)
        const right = parseFactor();
        if (!right) return null;
        const l: Node = left;
        left = (x) => l(x) * right(x);
      } else {
        return left;
      }
    }
  }

  function parseFactor(): Node | null {
    // Unary minus binds LOOSER than ^ so that -x^2 means -(x^2), matching
    // mathematical convention
    if (peek()?.kind === 'op' && (peek() as { op: string }).op === '-') {
      next();
      const inner = parseFactor();
      if (!inner) return null;
      return (x) => -inner(x);
    }
    if (peek()?.kind === 'op' && (peek() as { op: string }).op === '+') {
      next();
      return parseFactor();
    }
    return parsePower();
  }

  function parsePower(): Node | null {
    const base = parseAtom();
    if (!base) return null;
    if (peek()?.kind === 'op' && (peek() as { op: string }).op === '^') {
      next();
      const exp = parseFactor(); // right-associative; allows 2^-3
      if (!exp) return null;
      return (x) => Math.pow(base(x), exp(x));
    }
    return base;
  }

  function parseAtom(): Node | null {
    const t = next();
    if (!t) return null;

    if (t.kind === 'num') {
      return () => t.value;
    }

    if (t.kind === 'ident') {
      if (t.name === 'x') {
        return (x) => x;
      }
      if (t.name in CONSTANTS) {
        const v = CONSTANTS[t.name];
        return () => v;
      }
      if (t.name in FUNCTIONS) {
        const fn = FUNCTIONS[t.name];
        const open = next();
        if (!open || open.kind !== 'op' || open.op !== '(') return null;
        const arg = parseExpr();
        if (!arg) return null;
        const close = next();
        if (!close || close.kind !== 'op' || close.op !== ')') return null;
        return (x) => fn(arg(x));
      }
      return null; // unknown identifier
    }

    if (t.kind === 'op' && t.op === '(') {
      const inner = parseExpr();
      if (!inner) return null;
      const close = next();
      if (!close || close.kind !== 'op' || close.op !== ')') return null;
      return inner;
    }

    return null;
  }

  const compiled = parseExpr();
  if (!compiled || pos !== tokens.length) return null;

  // Smoke-test the compiled function so malformed expressions fail here
  // rather than during render
  try {
    const probe = compiled(1);
    if (typeof probe !== 'number') return null;
  } catch {
    return null;
  }

  return compiled;
}
