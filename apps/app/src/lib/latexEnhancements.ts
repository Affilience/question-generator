/**
 * Enhanced LaTeX Processing for KaTeX Rendering
 * Based on comprehensive research of KaTeX best practices and common issues
 */

// Common problematic symbols that need special handling
const PROBLEMATIC_SYMBOLS = {
  // Degree symbol issues
  '°': '\\degree',
  '°C': '\\degree\\text{C}',
  '°F': '\\degree\\text{F}',
  
  // Multiplication issues
  '×': '\\times',
  '⋅': '\\cdot',
  '*': '\\times', // Only in math context
  
  // Comparison operators
  '≤': '\\leq',
  '≥': '\\geq',
  '≠': '\\neq',
  '≈': '\\approx',
  '∝': '\\propto',
  
  // Greek letters that sometimes render poorly
  'α': '\\alpha',
  'β': '\\beta',
  'γ': '\\gamma',
  'δ': '\\delta',
  'ε': '\\epsilon',
  'θ': '\\theta',
  'λ': '\\lambda',
  'μ': '\\mu',
  'π': '\\pi',
  'σ': '\\sigma',
  'φ': '\\phi',
  'ω': '\\omega',
  
  // Mathematical operators
  '±': '\\pm',
  '∓': '\\mp',
  '∞': '\\infty',
  '∂': '\\partial',
  '∇': '\\nabla',
  '∫': '\\int',
  '∑': '\\sum',
  '∏': '\\prod',
  '√': '\\sqrt',
  
  // Arrows
  '→': '\\rightarrow',
  '←': '\\leftarrow',
  '↔': '\\leftrightarrow',
  '⇌': '\\rightleftarrows',
  '↑': '\\uparrow',
  '↓': '\\downarrow',
  
  // Set theory and logic
  '∈': '\\in',
  '∉': '\\notin',
  '⊂': '\\subset',
  '⊆': '\\subseteq',
  '∪': '\\cup',
  '∩': '\\cap',
  '∅': '\\emptyset',
  '∀': '\\forall',
  '∃': '\\exists',
  '∄': '\\nexists',
  
  // Fractions and divisions
  '½': '\\frac{1}{2}',
  '¼': '\\frac{1}{4}',
  '¾': '\\frac{3}{4}',
  '⅓': '\\frac{1}{3}',
  '⅔': '\\frac{2}{3}',
  '⅛': '\\frac{1}{8}',
  '⅜': '\\frac{3}{8}',
  '⅝': '\\frac{5}{8}',
  '⅞': '\\frac{7}{8}',
};

// Units that should always be in \text{} mode
const SCIENTIFIC_UNITS = [
  // Length
  'mm', 'cm', 'm', 'km', 'in', 'ft', 'mi', 'nm', 'μm', 'pm', 'fm',
  // Mass
  'g', 'kg', 'mg', 'μg', 'lb', 'oz', 't', 'u', 'Da',
  // Time
  's', 'ms', 'μs', 'ns', 'ps', 'min', 'h', 'hr', 'd', 'yr', 'Hz', 'kHz', 'MHz', 'GHz', 'THz',
  // Energy/Work
  'J', 'kJ', 'MJ', 'GJ', 'cal', 'kcal', 'eV', 'keV', 'MeV', 'GeV', 'Wh', 'kWh',
  // Power
  'W', 'kW', 'MW', 'GW', 'hp',
  // Force
  'N', 'kN', 'MN', 'dyn', 'lbf',
  // Pressure
  'Pa', 'kPa', 'MPa', 'GPa', 'bar', 'mbar', 'atm', 'mmHg', 'torr', 'psi',
  // Electric
  'A', 'mA', 'μA', 'V', 'mV', 'kV', 'MV', 'Ω', 'kΩ', 'MΩ', 'C', 'mC', 'μC', 'F', 'mF', 'μF', 'nF', 'pF',
  'H', 'mH', 'μH', 'Wb', 'T', 'G',
  // Temperature  
  'K', '°C', '°F', '°R',
  // Amount
  'mol', 'kmol', 'mmol', 'μmol', 'nmol', 'pmol',
  // Volume
  'L', 'mL', 'μL', 'dm³', 'cm³', 'mm³', 'm³', 'ft³', 'in³',
  // Concentration
  'M', 'mM', 'μM', 'nM', 'pM',
  // Light
  'lm', 'cd', 'lx',
  // Radioactivity
  'Bq', 'kBq', 'MBq', 'GBq', 'Ci', 'mCi', 'μCi', 'Gy', 'mGy', 'Sv', 'mSv', 'rem'
];

// Chemical formulas that need special handling
const CHEMICAL_FORMULAS = [
  'H2O', 'CO2', 'O2', 'N2', 'H2', 'Cl2', 'CH4', 'NH3', 'HCl', 'H2SO4', 'NaOH', 'CaCO3',
  'NaCl', 'KBr', 'AgNO3', 'CuSO4', 'FeCl3', 'Al2O3', 'SiO2', 'C6H12O6', 'C2H5OH', 'CH3COOH'
];

/**
 * Enhanced symbol replacement for better KaTeX compatibility
 */
export function enhanceSymbolRendering(text: string): string {
  let result = text;
  
  // Replace problematic Unicode symbols with proper LaTeX commands
  for (const [unicode, latex] of Object.entries(PROBLEMATIC_SYMBOLS)) {
    result = result.replace(new RegExp(unicode.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), latex);
  }
  
  return result;
}

/**
 * Enhanced unit formatting for scientific notation
 */
export function enhanceUnitFormatting(text: string): string {
  let result = text;
  
  // Create regex pattern for all units
  const unitsPattern = SCIENTIFIC_UNITS.map(unit => 
    unit.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  ).join('|');
  
  // Match numbers followed by units (with optional superscript)
  const numberUnitPattern = new RegExp(
    `(\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?)\\s*(${unitsPattern})((?:\\^?[-]?\\d+|\\^?\\{[-]?\\d+\\})?)\\b`,
    'gi'
  );
  
  result = result.replace(numberUnitPattern, (match, number, unit, superscript) => {
    if (superscript) {
      // Handle superscripts properly
      const cleanSuper = superscript.replace(/^\^?\{?/, '').replace(/\}?$/, '');
      return `${number}\\,\\text{${unit}}^{${cleanSuper}}`;
    } else {
      return `${number}\\,\\text{${unit}}`;
    }
  });
  
  // Handle standalone units (not preceded by numbers)
  const standaloneUnitPattern = new RegExp(`\\b(${unitsPattern})\\b(?!\\w)`, 'gi');
  result = result.replace(standaloneUnitPattern, (match, unit) => {
    // Don't replace if already in a \text{} command
    if (result.substring(0, result.indexOf(match)).match(/\\text\{[^}]*$/)) {
      return match;
    }
    return `\\text{${unit}}`;
  });
  
  return result;
}

/**
 * Enhanced chemical formula formatting
 */
export function enhanceChemicalFormulas(text: string): string {
  let result = text;
  
  // Handle common chemical formulas
  for (const formula of CHEMICAL_FORMULAS) {
    const pattern = new RegExp(`\\b${formula.replace(/\d+/g, '(\\d+)')}\\b`, 'g');
    result = result.replace(pattern, (match) => {
      // Convert to proper LaTeX with subscripts
      return `\\text{${match.replace(/(\d+)/g, '}_{$1}\\text{')}}`;
    });
  }
  
  // Handle generic chemical formulas (letter followed by number)
  result = result.replace(/\b([A-Z][a-z]?)(\d+)\b/g, (match, element, number) => {
    // Don't replace if already in \text{} or if it looks like a variable
    if (result.substring(0, result.indexOf(match)).match(/\\text\{[^}]*$/) ||
        result.substring(0, result.indexOf(match)).match(/\$[^$]*$/)) {
      return match;
    }
    return `\\text{${element}}_{${number}}`;
  });
  
  return result;
}

/**
 * Fix common spacing issues in mathematical expressions
 */
export function fixMathSpacing(text: string): string {
  let result = text;
  
  // Add proper spacing around operators
  result = result.replace(/(\w)([+\-=<>])(\w)/g, '$1 $2 $3');
  result = result.replace(/(\w)(\\times|\\div|\\cdot)(\w)/g, '$1 $2 $3');
  result = result.replace(/(\w)(\\leq|\\geq|\\neq|\\approx)(\w)/g, '$1 $2 $3');
  
  // Fix spacing in function calls
  result = result.replace(/(\\sin|\\cos|\\tan|\\log|\\ln|\\exp)\s*([a-zA-Z])/g, '$1 $2');
  
  // Add thin space before units
  result = result.replace(/(\d+(?:\.\d+)?)\s*(\\text\{[^}]+\})/g, '$1\\,$2');
  
  return result;
}

/**
 * Enhanced LaTeX validation and error detection
 */
export function validateLatexSyntax(text: string): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check for unmatched braces
  const braceStack: string[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '{' && (i === 0 || text[i-1] !== '\\')) {
      braceStack.push('{');
    } else if (text[i] === '}' && (i === 0 || text[i-1] !== '\\')) {
      if (braceStack.length === 0) {
        errors.push(`Unmatched closing brace at position ${i}`);
      } else {
        braceStack.pop();
      }
    }
  }
  if (braceStack.length > 0) {
    errors.push(`${braceStack.length} unmatched opening brace(s)`);
  }
  
  // Check for unmatched math delimiters
  const dollarMatches = (text.match(/(?<!\\)\$/g) || []).length;
  if (dollarMatches % 2 !== 0) {
    errors.push('Unmatched $ math delimiters');
  }
  
  // Check for potential issues
  if (text.includes('\\text{}')) {
    warnings.push('Empty \\text{} command found');
  }
  
  // Check for raw LaTeX commands that might not render properly
  if (text.match(/[a-zA-Z\s]+\\text\{[^}]*\}[a-zA-Z\s]*/)) {
    warnings.push('Text commands mixed with plain text - may cause rendering issues');
  }
  
  // Check for variables incorrectly wrapped in text commands
  if (text.match(/\\text\{[a-zA-Z]\}/)) {
    warnings.push('Single variables in \\text{} commands should generally be in math mode');
  }
  
  if (text.includes('_{_{')) {
    errors.push('Nested subscripts detected - this will cause rendering errors');
  }
  
  if (text.includes('^{^{')) {
    errors.push('Nested superscripts detected - this will cause rendering errors');
  }
  
  // Check for problematic Unicode characters that should be LaTeX
  const problematicUnicode = text.match(/[°×⋅≤≥≠≈∝αβγδεθλμπσφω±∓∞∂∇∫∑∏√→←↔⇌↑↓∈∉⊂⊆∪∩∅∀∃∄]/g);
  if (problematicUnicode) {
    warnings.push(`Unicode symbols found that should be LaTeX: ${[...new Set(problematicUnicode)].join(', ')}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Enhanced complex fraction detection and formatting
 */
export function enhanceComplexFractions(text: string): string {
  let result = text;
  
  // Handle nested fractions like a/b/c → \frac{a/b}{c}
  result = result.replace(/(\w+|\\frac\{[^}]+\}\{[^}]+\})\/(\w+|\\frac\{[^}]+\}\{[^}]+\})\/(\w+|\\frac\{[^}]+\}\{[^}]+\})/g, 
    '\\frac{\\frac{$1}{$2}}{$3}');
  
  // Handle simple fractions like a/b → \frac{a}{b} (but avoid URLs and dates)
  result = result.replace(/(?<!http:|https:|\/\/|\d{1,2}\/\d{1,2}\/)(\w+(?:\^\{[^}]+\}|\^[a-zA-Z0-9])?)\/(\w+(?:\^\{[^}]+\}|\^[a-zA-Z0-9])?)/g, 
    '\\frac{$1}{$2}');
  
  // Handle complex expressions in numerator/denominator
  result = result.replace(/\(([^)]+)\)\/\(([^)]+)\)/g, '\\frac{($1)}{($2)}');
  
  return result;
}

/**
 * Enhanced matrix and vector notation
 */
export function enhanceMatrixNotation(text: string): string {
  let result = text;
  
  // Detect matrix patterns like [1,2;3,4] → \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
  result = result.replace(/\[([0-9\s,;+-]+)\]/g, (match, content) => {
    if (content.includes(';')) {
      const rows = content.split(';').map((row: string) => 
        row.trim().split(',').map((cell: string) => cell.trim()).join(' & ')
      );
      return `\\begin{pmatrix} ${rows.join(' \\\\ ')} \\end{pmatrix}`;
    }
    return match;
  });
  
  // Vector notation improvements
  result = result.replace(/vector\s+([a-zA-Z])/g, '\\vec{$1}');
  result = result.replace(/\b([a-zA-Z])\s+vector/g, '\\vec{$1}');
  
  return result;
}

/**
 * Enhanced logarithm and exponential notation
 */
export function enhanceLogarithmNotation(text: string): string {
  let result = text;
  
  // Natural log variations
  result = result.replace(/\bln\s*\(([^)]+)\)/g, '\\ln($1)');
  result = result.replace(/\bln\s+(\w+)/g, '\\ln $1');
  
  // Log base notation
  result = result.replace(/\blog_(\w+)\s*\(([^)]+)\)/g, '\\log_{$1}($2)');
  result = result.replace(/\blog_(\w+)\s+(\w+)/g, '\\log_{$1} $2');
  
  // Exponential notation improvements
  result = result.replace(/\be\^(\w+|\([^)]+\))/g, 'e^{$1}');
  result = result.replace(/\bexp\s*\(([^)]+)\)/g, 'e^{($1)}');
  
  return result;
}

/**
 * Enhanced calculus notation (derivatives, integrals)
 */
export function enhanceCalculusNotation(text: string): string {
  let result = text;
  
  // Derivative notation
  result = result.replace(/d\/dx\s*\(([^)]+)\)/g, '\\frac{d}{dx}($1)');
  result = result.replace(/d\/dx\s+(\w+)/g, '\\frac{d}{dx} $1');
  result = result.replace(/d(\w+)\/d(\w+)/g, '\\frac{d$1}{d$2}');
  
  // Partial derivatives
  result = result.replace(/∂(\w+)\/∂(\w+)/g, '\\frac{\\partial $1}{\\partial $2}');
  result = result.replace(/partial\s+(\w+)\s*\/\s*partial\s+(\w+)/g, '\\frac{\\partial $1}{\\partial $2}');
  
  // Integral notation
  result = result.replace(/integral\s+from\s+(\w+|\d+)\s+to\s+(\w+|\d+)\s+of\s+([^\\n]+)/g, 
    '\\int_{$1}^{$2} $3 \\, dx');
  result = result.replace(/∫\s*([^\\]+)\s*d(\w+)/g, '\\int $1 \\, d$2');
  
  // Limit notation
  result = result.replace(/limit\s+as\s+(\w+)\s+approaches\s+(\w+|\d+)\s+of\s+([^\\n]+)/g, 
    '\\lim_{$1 \\to $2} $3');
  result = result.replace(/lim\s*\(\s*(\w+)\s*->\s*(\w+|\d+)\s*\)\s*([^\\n]+)/g, 
    '\\lim_{$1 \\to $2} $3');
  
  return result;
}

/**
 * Enhanced physics notation (vectors, forces, etc.)
 */
export function enhancePhysicsNotation(text: string): string {
  let result = text;
  
  // Force vectors
  result = result.replace(/\bF_([a-zA-Z0-9]+)/g, '\\vec{F}_{$1}');
  result = result.replace(/\bforce\s+([a-zA-Z])/g, '\\vec{F}_{$1}');
  
  // Velocity and acceleration vectors
  result = result.replace(/\bv_([a-zA-Z0-9]+)/g, '\\vec{v}_{$1}');
  result = result.replace(/\ba_([a-zA-Z0-9]+)/g, '\\vec{a}_{$1}');
  
  // Electric and magnetic field notation
  result = result.replace(/\bE_([a-zA-Z0-9]+)/g, '\\vec{E}_{$1}');
  result = result.replace(/\bB_([a-zA-Z0-9]+)/g, '\\vec{B}_{$1}');
  
  // Unit vectors
  result = result.replace(/\bhat\s*([ijk])/g, '\\hat{$1}');
  result = result.replace(/\b([ijk])\s*hat/g, '\\hat{$1}');
  
  return result;
}

/**
 * Enhanced statistical notation
 */
export function enhanceStatisticalNotation(text: string): string {
  let result = text;
  
  // Mean notation
  result = result.replace(/\bmean\s+of\s+([a-zA-Z])/g, '\\bar{$1}');
  result = result.replace(/\baverage\s+of\s+([a-zA-Z])/g, '\\bar{$1}');
  result = result.replace(/\b([a-zA-Z])\s+bar/g, '\\bar{$1}');
  
  // Standard deviation
  result = result.replace(/\bstd\s*\(([^)]+)\)/g, '\\sigma($1)');
  result = result.replace(/\bstandard\s+deviation/g, '\\sigma');
  
  // Probability notation
  result = result.replace(/\bP\s*\(([^)]+)\)/g, 'P($1)');
  result = result.replace(/\bprob\s*\(([^)]+)\)/g, 'P($1)');
  
  // Expected value
  result = result.replace(/\bE\s*\[\s*([^\]]+)\s*\]/g, 'E[$1]');
  result = result.replace(/\bexpected\s+value\s+of\s+([a-zA-Z])/g, 'E[$1]');
  
  return result;
}

/**
 * Enhanced text command normalization for KaTeX compatibility
 * Fixes issues where \text{} commands appear as raw text
 */
export function enhanceTextCommands(text: string): string {
  let result = text;
  
  // Handle malformed text commands that show as raw LaTeX
  // Pattern: \text{content} appearing as literal text instead of rendered
  result = result.replace(/\\text\{([^}]*)\}/g, (match, content) => {
    // If the content is empty or whitespace only, remove it
    if (!content || content.trim() === '') {
      return '';
    }
    
    // Fix: Single mathematical variables should not be in \text{} mode
    // Convert \text{f}, \text{n}, etc. to just the variable (math mode)
    if (content.match(/^[a-zA-Z]$/)) {
      return content;
    }
    
    // Fix: Chemical formulas should not be in \text{} mode
    // Convert \text{H2O}, \text{CO2}, \text{NaCl} etc. to regular text
    if (content.match(/^[A-Z][a-z]?\d*(?:[A-Z][a-z]?\d*)*$/)) {
      return content;
    }
    
    // For KaTeX compatibility, ensure proper text mode
    // Remove any nested LaTeX commands that don't work in text mode
    const cleanContent = content
      .replace(/\\[a-zA-Z]+\s*/g, '') // Remove LaTeX commands
      .replace(/[{}]/g, '') // Remove braces
      .trim();
    
    // If nothing left after cleaning, remove the command
    if (!cleanContent) {
      return '';
    }
    
    // If it's still a single variable after cleaning, don't use text mode
    if (cleanContent.match(/^[a-zA-Z]$/)) {
      return cleanContent;
    }
    
    // Return properly formatted text command
    return `\\text{${cleanContent}}`;
  });
  
  // Handle \mathrm{} commands which are similar to \text{} but for Roman text
  result = result.replace(/\\mathrm\{([^}]*)\}/g, (match, content) => {
    if (!content || content.trim() === '') {
      return '';
    }
    
    const cleanContent = content
      .replace(/\\[a-zA-Z]+\s*/g, '')
      .replace(/[{}]/g, '')
      .trim();
    
    if (!cleanContent) {
      return '';
    }
    
    return `\\mathrm{${cleanContent}}`;
  });
  
  // Handle raw backslash commands that appear as text (common KaTeX issue)
  // Look for patterns like "Why does the derivative of the function \text{f}(x)"
  // where the \text command isn't being processed
  result = result.replace(/([a-zA-Z\s]+)(\\text\{[^}]*\})([a-zA-Z\s]*)/g, (match, before, textCmd, after) => {
    // Split the text around the LaTeX command
    const beforeText = before.trim();
    const afterText = after.trim();
    
    // Clean up the text command
    const cleanTextCmd = textCmd.replace(/\\text\{([^}]*)\}/, (_m: string, content: string) => {
      const cleaned = content.replace(/\\[a-zA-Z]+\s*/g, '').replace(/[{}]/g, '').trim();
      return cleaned ? `\\text{${cleaned}}` : '';
    });
    
    // Rebuild the expression
    if (beforeText && afterText && cleanTextCmd) {
      return `${beforeText} ${cleanTextCmd} ${afterText}`;
    } else if (beforeText && cleanTextCmd) {
      return `${beforeText} ${cleanTextCmd}`;
    } else if (cleanTextCmd && afterText) {
      return `${cleanTextCmd} ${afterText}`;
    } else if (cleanTextCmd) {
      return cleanTextCmd;
    }
    
    // Fallback: return the original match
    return match;
  });
  
  // Handle common text-mode math expressions that should be in math mode
  // Example: "f(x) = x^n" where "f" should be in math mode
  result = result.replace(/\\text\{([a-zA-Z])\}\s*\(\s*([a-zA-Z])\s*\)/g, '$1($2)');
  
  // REMOVED: All aggressive patterns that replace "text" followed by letters
  // These were corrupting normal English words and causing "textual" -> "ual", etc.
  
  // Only keep very specific chemical formula patterns that are unlikely to match normal English
  // Be extremely conservative to avoid corrupting words like "textual", "context", etc.
  
  // Only fix very specific chemical formulas when preceded by "text " (with space)
  result = result.replace(/\btext\s+(H2O|CO2|NaCl|CaCO3|H2SO4|NH3|CH4|O2|N2|Cl2)\b/g, '$1');
  
  // REMOVED: All other aggressive text replacement patterns that were corrupting normal English words
  
  // Remove the aggressive pattern that replaces any "text" + letters
  // This was causing normal words to be corrupted
  
  // Additional fix for edge cases - MUCH more conservative
  // Only replace if clearly in mathematical context (completely remove aggressive patterns)
  // These were causing normal English words to be corrupted
  
  // Fix cases where variables are incorrectly wrapped in \text{}
  result = result.replace(/\\text\{([a-zA-Z])\}/g, (match, variable) => {
    // Single letters should generally be in math mode, not text mode
    if (variable.length === 1 && /[a-zA-Z]/.test(variable)) {
      return variable;
    }
    return match;
  });
  
  // Remove any remaining empty text commands
  result = result.replace(/\\text\{\s*\}/g, '');
  result = result.replace(/\\mathrm\{\s*\}/g, '');

  // Final cleanup: Remove literal "text" that appears before mathematical variables
  // This can happen when LaTeX commands are malformed and leave "text" as raw text
  // Use iterative approach to handle multiple "text" prefixes like "texttextt"
  let previousResult = '';
  let iterations = 0;
  const maxIterations = 10; // Safety valve to prevent infinite loops
  
  while (result !== previousResult && iterations < maxIterations) {
    previousResult = result;
    iterations++;
    
    // Be very conservative - only clean up clear cases of single mathematical variables
    result = result.replace(/\btext\s+([a-zA-Z])\b(?!\s*[\(\{])/g, '$1');
    result = result.replace(/\btext([a-zA-Z])\b(?![a-zA-Z])/g, '$1');
    
    // Additional pattern for sequences like "texttextt" - be more aggressive
    // Look for "text" followed by any combination that ends with a single letter
    result = result.replace(/\b(?:text)+([a-zA-Z])\b(?!\w)/g, '$1');
  }
  
  // Clean up any remaining malformed text patterns that could cause rendering issues
  // Remove "text" when it appears to be a broken LaTeX command prefix
  result = result.replace(/\btext\{([a-zA-Z])\}/g, '$1'); // \text{} around single variables
  
  return result;
}

/**
 * Apply comprehensive LaTeX enhancements including complex expressions
 */
export function enhanceLatexForKatex(text: string): {
  enhanced: string;
  validation: ReturnType<typeof validateLatexSyntax>;
} {
  let result = text;
  
  // Apply all enhancements in order
  // Text command normalization should be done early to fix raw LaTeX issues
  result = enhanceTextCommands(result);
  result = enhanceSymbolRendering(result);
  result = enhanceComplexFractions(result);
  result = enhanceMatrixNotation(result);
  result = enhanceLogarithmNotation(result);
  result = enhanceCalculusNotation(result);
  result = enhancePhysicsNotation(result);
  result = enhanceStatisticalNotation(result);
  result = enhanceUnitFormatting(result);
  result = enhanceChemicalFormulas(result);
  result = fixMathSpacing(result);
  
  // Validate the result
  const validation = validateLatexSyntax(result);
  
  return {
    enhanced: result,
    validation
  };
}