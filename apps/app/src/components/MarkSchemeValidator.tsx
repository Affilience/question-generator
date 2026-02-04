'use client';

import { useState } from 'react';
import { validateQuestionCompleteness, extractQuestionParts, extractMarkSchemeParts } from '@/lib/markValidation';

interface TestQuestion {
  content: string;
  markScheme: string[];
  marks: number;
}

// Sample test cases for multi-part questions
const testCases: TestQuestion[] = [
  // Complete multi-part question
  {
    content: "Solve the following equation:\n(a) Find the value of x when 2x + 5 = 11\n(b) Calculate the area when x = 3",
    markScheme: [
      "(a) M1: Sets up equation correctly", 
      "(a) A1: cao x = 3",
      "(b) M1: Uses correct formula for area",
      "(b) A1: cao Area = 9"
    ],
    marks: 4
  },
  // Incomplete multi-part question (missing part b)
  {
    content: "Calculate the following:\n(a) The mean of 2, 4, 6, 8\n(b) The standard deviation\n(c) The variance",
    markScheme: [
      "(a) M1: Adds all values",
      "(a) A1: cao mean = 5",
      "(c) M1: Uses variance formula",
      "(c) A1: cao variance = 5"
    ],
    marks: 4
  },
  // Single part question (should pass)
  {
    content: "Solve 3x + 7 = 19",
    markScheme: [
      "M1: Rearranges equation",
      "A1: cao x = 4"
    ],
    marks: 2
  }
];

export function MarkSchemeValidator() {
  const [selectedTest, setSelectedTest] = useState<number>(0);
  const [customQuestion, setCustomQuestion] = useState<TestQuestion>({
    content: '',
    markScheme: [''],
    marks: 1
  });
  const [useCustom, setUseCustom] = useState(false);

  const currentQuestion = useCustom ? customQuestion : testCases[selectedTest];
  const validation = validateQuestionCompleteness(currentQuestion);

  const addMarkSchemePoint = () => {
    setCustomQuestion(prev => ({
      ...prev,
      markScheme: [...prev.markScheme, '']
    }));
  };

  const updateMarkSchemePoint = (index: number, value: string) => {
    setCustomQuestion(prev => ({
      ...prev,
      markScheme: prev.markScheme.map((item, i) => i === index ? value : item)
    }));
  };

  const removeMarkSchemePoint = (index: number) => {
    setCustomQuestion(prev => ({
      ...prev,
      markScheme: prev.markScheme.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Mark Scheme Validator</h2>
        <p className="text-gray-600 mb-6">
          Test multi-part question validation to ensure all parts have corresponding mark scheme entries.
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
            Custom Question
          </label>
        </div>

        {!useCustom && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Select Test Case:</label>
            <select
              value={selectedTest}
              onChange={(e) => setSelectedTest(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value={0}>Complete Multi-part (Should Pass)</option>
              <option value={1}>Incomplete Multi-part (Missing part b)</option>
              <option value={2}>Single Part (Should Pass)</option>
            </select>
          </div>
        )}

        {useCustom && (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Question Content:</label>
              <textarea
                value={customQuestion.content}
                onChange={(e) => setCustomQuestion(prev => ({ ...prev, content: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded h-32"
                placeholder="Enter question content with parts like (a), (b), (c)..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Total Marks:</label>
              <input
                type="number"
                value={customQuestion.marks}
                onChange={(e) => setCustomQuestion(prev => ({ ...prev, marks: parseInt(e.target.value) || 1 }))}
                className="w-20 p-2 border border-gray-300 rounded"
                min="1"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium">Mark Scheme:</label>
                <button
                  onClick={addMarkSchemePoint}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  Add Point
                </button>
              </div>
              {customQuestion.markScheme.map((point, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    value={point}
                    onChange={(e) => updateMarkSchemePoint(index, e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded"
                    placeholder="e.g., (a) M1: Sets up equation correctly"
                  />
                  {customQuestion.markScheme.length > 1 && (
                    <button
                      onClick={() => removeMarkSchemePoint(index)}
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Question Display */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">Question Content:</h3>
          <pre className="whitespace-pre-wrap text-sm">{currentQuestion.content}</pre>
          
          <h3 className="font-semibold mt-4 mb-2">Mark Scheme ({currentQuestion.marks} marks):</h3>
          <ul className="space-y-1">
            {currentQuestion.markScheme.map((point, index) => (
              <li key={index} className="text-sm">• {point}</li>
            ))}
          </ul>
        </div>

        {/* Validation Results */}
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold mb-3">Validation Results:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-medium text-sm mb-2">Question Parts Detected:</h4>
              <div className="flex flex-wrap gap-1">
                {validation.multiPartValidation.questionParts.length > 0 ? (
                  validation.multiPartValidation.questionParts.map(part => (
                    <span key={part} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {part}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">No parts detected</span>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Mark Scheme Parts:</h4>
              <div className="flex flex-wrap gap-1">
                {validation.multiPartValidation.markSchemeParts.length > 0 ? (
                  validation.multiPartValidation.markSchemeParts.map(part => (
                    <span key={part} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                      {part}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">No parts in mark scheme</span>
                )}
              </div>
            </div>
          </div>

          <div className={`p-3 rounded-lg ${validation.overallValid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${validation.overallValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="font-medium">
                {validation.overallValid ? 'Valid Question' : 'Issues Found'}
              </span>
            </div>
            
            {validation.issues.length > 0 && (
              <ul className="space-y-1 text-sm text-red-700">
                {validation.issues.map((issue, index) => (
                  <li key={index}>• {issue}</li>
                ))}
              </ul>
            )}
            
            {validation.overallValid && (
              <p className="text-sm text-green-700">
                All question parts have corresponding mark scheme entries.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}