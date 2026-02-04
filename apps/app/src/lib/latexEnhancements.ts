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
 * Apply comprehensive LaTeX enhancements
 */
export function enhanceLatexForKatex(text: string): {
  enhanced: string;
  validation: ReturnType<typeof validateLatexSyntax>;
} {
  let result = text;
  
  // Apply all enhancements in order
  result = enhanceSymbolRendering(result);
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