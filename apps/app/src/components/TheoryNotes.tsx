'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MathRenderer } from './MathRenderer';
import type { TheoryNote } from '../lib/theory-notes';

interface TheoryNotesProps {
  subject: string;
  level: string;
  examBoard: string;
  topic?: string;
  subtopic?: string;
}

export function TheoryNotes({ subject, level, examBoard, topic, subtopic }: TheoryNotesProps) {
  const [notes, setNotes] = useState<TheoryNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<TheoryNote | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadTheoryNotes();
  }, [subject, level, examBoard, topic, subtopic]);

  async function loadTheoryNotes() {
    try {
      setLoading(true);
      // In a real implementation, this would fetch from your theory notes database
      const { getTheoryNotesBySubject } = await import('../lib/theory-notes');
      const allNotes = await getTheoryNotesBySubject(subject, level, examBoard);
      
      let filteredNotes = allNotes;
      if (topic) {
        filteredNotes = filteredNotes.filter(note => note.topic === topic);
      }
      if (subtopic) {
        filteredNotes = filteredNotes.filter(note => note.subtopic === subtopic);
      }
      
      setNotes(filteredNotes);
      if (filteredNotes.length === 1) {
        setSelectedNote(filteredNotes[0]);
      }
    } catch (error) {
      console.error('Failed to load theory notes:', error);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.subtopic?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.keyPoints.some(point => point.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading theory notes...</span>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="text-gray-500 mb-4">
          <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg font-medium">No theory notes available</p>
          <p className="text-sm">Theory notes for this topic haven't been generated yet.</p>
        </div>
        <button 
          onClick={() => window.location.href = '/generate-theory'}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Generate Theory Notes
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Theory Notes List */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Theory Notes
            </h2>
            
            {/* Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search theory notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Notes List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredNotes.map((note) => (
                <motion.button
                  key={note.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedNote(note)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedNote?.id === note.id
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-sm truncate">{note.title}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {note.topic} • {note.estimatedReadTime}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {note.keyPoints.length} key points • {note.formulas.length} formulas
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
              {filteredNotes.length} of {notes.length} notes
            </div>
          </div>
        </div>

        {/* Theory Note Content */}
        <div className="lg:w-2/3">
          {selectedNote ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              {/* Header */}
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedNote.title}
                </h1>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    {selectedNote.level.toUpperCase()} {selectedNote.subject}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                    {selectedNote.examBoard.toUpperCase()}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    {selectedNote.estimatedReadTime}
                  </span>
                  <span className="text-gray-500">
                    Updated: {new Date(selectedNote.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="prose max-w-none">
                <MathRenderer content={selectedNote.content} />
              </div>

              {/* Key Points */}
              {selectedNote.keyPoints.length > 0 && (
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">🔑 Key Points</h3>
                  <ul className="space-y-2">
                    {selectedNote.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-yellow-800">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Formulas */}
              {selectedNote.formulas.length > 0 && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">📐 Key Formulas</h3>
                  <div className="space-y-2">
                    {selectedNote.formulas.map((formula, index) => (
                      <div key={index} className="text-blue-800">
                        <MathRenderer content={formula} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistakes */}
              {selectedNote.commonMistakes.length > 0 && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">❌ Common Mistakes</h3>
                  <ul className="space-y-2">
                    {selectedNote.commonMistakes.map((mistake, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-red-800">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exam Tips */}
              {selectedNote.examTips.length > 0 && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 Exam Tips</h3>
                  <ul className="space-y-2">
                    {selectedNote.examTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-green-800">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Subtopics */}
              {selectedNote.relatedSubtopics.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🔗 Related Subtopics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedNote.relatedSubtopics.map((related, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          // Find and select related note
                          const relatedNote = notes.find(note => 
                            note.subtopic?.toLowerCase() === related.toLowerCase()
                          );
                          if (relatedNote) setSelectedNote(relatedNote);
                        }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      >
                        {related}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Theory Note</h3>
              <p className="text-gray-600">Choose a theory note from the list to view the complete content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}