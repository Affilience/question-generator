'use client';

import { useState } from 'react';
import { MathRenderer } from './MathRenderer';
import { enhanceLatexForKatex, validateLatexSyntax } from '@/lib/latexEnhancements';

interface TestCase {
  name: string;
  input: string;
  description: string;
}

// Test cases covering common problematic scenarios
const testCases: TestCase[] = [
  {
    name: "Unicode Symbols",
    input: "Temperature is 25°C, acceleration is 9.8 m/s², force is 50N × 2 = 100N. Also π ≈ 3.14 and α = 30°.",
    description: "Tests Unicode symbol conversion (°, ×, ≈, π, α)"
  },
  {
    name: "Chemical Formulas", 
    input: "Water is H2O, carbon dioxide is CO2, and glucose is C6H12O6. The ion NH4+ reacts with OH-.",
    description: "Tests chemical formula formatting with subscripts and superscripts"
  },
  {
    name: "Scientific Units",
    input: "The wavelength is 500 nm, energy is 2.5 eV, and frequency is 6.0 × 10^14 Hz. Power is 100W.",
    description: "Tests scientific unit formatting and proper spacing"
  },
  {
    name: "Mathematical Expressions",
    input: "Solve x^2 + 5x - 6 = 0 using the quadratic formula: x = (-b ± sqrt(b^2 - 4ac)) / 2a",
    description: "Tests mathematical expression formatting"
  },
  {
    name: "Physics Equations",
    input: "F = ma, where F is force (N), m is mass (kg), and a is acceleration (m s^-2). Also E = mc^2.",
    description: "Tests physics notation with vectors and units"
  },
  {
    name: "Trigonometry",
    input: "sin(θ) = opposite/hypotenuse, cos(30°) = sqrt(3)/2, tan^-1(1) = 45°",
    description: "Tests trigonometric functions and angle notation"
  },
  {
    name: "Mixed Content",
    input: "Calculate: (a) Find x when 2x + 3 = 15 [2 marks] (b) If temperature increases from 20°C to 100°C, what is ΔT in K? [1 mark]",
    description: "Tests multi-part question formatting with mixed content"
  },
  {
    name: "Complex Chemistry",
    input: "The equilibrium: 2SO2(g) + O2(g) ⇌ 2SO3(g) has Kp = 2.5 × 10^5 at 298K. Calculate ΔG° using ΔG° = -RT ln(K).",
    description: "Tests complex chemistry notation with equilibrium arrows and thermodynamics"
  }
];

export function LatexDebugger() {
  const [selectedTest, setSelectedTest] = useState<number>(0);
  const [customInput, setCustomInput] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [showValidation, setShowValidation] = useState(true);

  const currentInput = useCustom ? customInput : testCases[selectedTest]?.input || '';
  const { enhanced, validation } = enhanceLatexForKatex(currentInput);
  const baseValidation = validateLatexSyntax(currentInput);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold mb-4">LaTeX Rendering Debugger</h2>
        <p className="text-gray-600 mb-6">
          Test and debug LaTeX/KaTeX rendering with common problematic scenarios.
        </p>

        {/* Test Selection */}
        <div className="flex items-center gap-4 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              checked={!useCustom}
              onChange={() => setUseCustom(false)}
              className="mr-2"
            />
            Use Test Cases
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              checked={useCustom}
              onChange={() => setUseCustom(true)}
              className="mr-2"
            />
            Custom Input
          </label>
          <label className="flex items-center ml-4">
            <input
              type="checkbox"
              checked={showValidation}
              onChange={(e) => setShowValidation(e.target.checked)}
              className="mr-2"
            />
            Show Validation Details
          </label>
        </div>

        {!useCustom && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Test Case:</label>
            <select
              value={selectedTest}
              onChange={(e) => setSelectedTest(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            >
              {testCases.map((testCase, index) => (
                <option key={index} value={index}>
                  {testCase.name}
                </option>
              ))}
            </select>
            {testCases[selectedTest] && (
              <p className="text-sm text-gray-600">{testCases[selectedTest].description}</p>
            )}
          </div>
        )}

        {useCustom && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Custom Input:</label>
            <textarea
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded h-32"
              placeholder="Enter text with mathematical notation, Unicode symbols, units, etc."
            />
          </div>
        )}

        {/* Input Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Original Input:</h3>
            <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm break-all">
              {currentInput || 'No input'}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Enhanced LaTeX:</h3>
            <div className="bg-green-50 rounded-lg p-3 font-mono text-sm break-all">
              {enhanced || 'No output'}
            </div>
          </div>
        </div>

        {/* Validation Results */}
        {showValidation && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Original Validation:</h3>
              <div className={`rounded-lg p-3 text-sm ${
                baseValidation.isValid 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    baseValidation.isValid ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium">
                    {baseValidation.isValid ? 'Valid' : 'Issues Found'}
                  </span>
                </div>
                
                {baseValidation.errors.length > 0 && (
                  <div className="mb-2">
                    <h4 className="font-medium text-red-700">Errors:</h4>
                    <ul className="list-disc list-inside text-red-600">
                      {baseValidation.errors.map((error, index) => (
                        <li key={index} className="text-xs">{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {baseValidation.warnings.length > 0 && (
                  <div>
                    <h4 className="font-medium text-amber-700">Warnings:</h4>
                    <ul className="list-disc list-inside text-amber-600">
                      {baseValidation.warnings.map((warning, index) => (
                        <li key={index} className="text-xs">{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Enhanced Validation:</h3>
              <div className={`rounded-lg p-3 text-sm ${
                validation.isValid 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${
                    validation.isValid ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium">
                    {validation.isValid ? 'Valid' : 'Issues Found'}
                  </span>
                </div>
                
                {validation.errors.length > 0 && (
                  <div className="mb-2">
                    <h4 className="font-medium text-red-700">Errors:</h4>
                    <ul className="list-disc list-inside text-red-600">
                      {validation.errors.map((error, index) => (
                        <li key={index} className="text-xs">{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {validation.warnings.length > 0 && (
                  <div>
                    <h4 className="font-medium text-amber-700">Warnings:</h4>
                    <ul className="list-disc list-inside text-amber-600">
                      {validation.warnings.map((warning, index) => (
                        <li key={index} className="text-xs">{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Rendered Output Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Original Rendering:</h3>
            <div className="bg-white border rounded-lg p-4 min-h-[100px]">
              {currentInput ? (
                <MathRenderer content={currentInput} />
              ) : (
                <div className="text-gray-400 italic">No input to render</div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Enhanced Rendering:</h3>
            <div className="bg-white border rounded-lg p-4 min-h-[100px]">
              {enhanced ? (
                <MathRenderer content={enhanced} />
              ) : (
                <div className="text-gray-400 italic">No output to render</div>
              )}
            </div>
          </div>
        </div>

        {/* Enhancement Summary */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Enhancement Summary:</h3>
          <div className="text-sm space-y-1">
            <div>
              <span className="font-medium">Changes Applied:</span>
              {currentInput !== enhanced ? (
                <span className="text-green-600 ml-1">
                  ✓ Enhancements applied ({enhanced.length - currentInput.length > 0 ? '+' : ''}{enhanced.length - currentInput.length} chars)
                </span>
              ) : (
                <span className="text-gray-600 ml-1">No changes needed</span>
              )}
            </div>
            <div>
              <span className="font-medium">Validation Status:</span>
              <span className={`ml-1 ${
                baseValidation.isValid !== validation.isValid 
                  ? (validation.isValid ? 'text-green-600' : 'text-amber-600')
                  : 'text-gray-600'
              }`}>
                {baseValidation.isValid === validation.isValid 
                  ? 'No change' 
                  : validation.isValid 
                    ? '✓ Fixed validation issues'
                    : '⚠ New validation issues'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}