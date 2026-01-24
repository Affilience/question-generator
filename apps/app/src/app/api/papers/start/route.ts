import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Client } from '@upstash/qstash';
import { PaperConfig, ExamBoard, QualificationLevel, Subject, QuestionType } from '@/types';
import { checkPaperGenerationAllowed } from '@/lib/api/subscription-check';
import { selectQuestionsForPaper } from '@/lib/questionSelector';
import { getTopicsBySubjectBoardAndLevel } from '@/lib/topics';

// Simplified config from PaperBuilder component
interface SimplifiedConfig {
  selectedTopics: string[];
  totalMarks: number;
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  paperName: string;
}

interface StartPaperRequest {
  examBoard: ExamBoard;
  qualification: QualificationLevel;
  subject: Subject;
  paperName: string;
  config: SimplifiedConfig | PaperConfig;
  userId?: string;
}

// Check if config is simplified (from PaperBuilder)
function isSimplifiedConfig(config: SimplifiedConfig | PaperConfig): config is SimplifiedConfig {
  return !('sections' in config) || !config.sections;
}

// Transform simplified config to full PaperConfig
function transformConfig(
  simplified: SimplifiedConfig,
  subject: Subject,
  examBoard: ExamBoard,
  qualification: QualificationLevel
): PaperConfig {
  // Get all topics to build selectedSubtopics
  const allTopics = getTopicsBySubjectBoardAndLevel(subject as Subject, examBoard, qualification);

  // Build selectedSubtopics from selectedTopics
  // subtopics is string[] (subtopic names), not objects
  const selectedSubtopics: Record<string, string[]> = {};
  for (const topicId of simplified.selectedTopics) {
    const topic = allTopics.find(t => t.id === topicId);
    if (topic && topic.subtopics && topic.subtopics.length > 0) {
      selectedSubtopics[topicId] = topic.subtopics; // subtopics is already string[]
    }
  }

  // Subject-specific configuration with exam board differences
  const essaySubjects = ['english-literature', 'history', 'economics', 'business', 'psychology', 'geography', 'biology'];
  const isEssaySubject = essaySubjects.includes(subject);
  
  if (isEssaySubject) {
    // Economics configurations by exam board
    if (subject === 'economics') {
      const hardWeight = simplified.difficulty.hard;
      const easyWeight = simplified.difficulty.easy;
      
      if (examBoard === 'edexcel') {
        // Edexcel: 25 marks short answer + 50 marks data response + 25 marks essay (100 marks total)
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.2), // Edexcel allows less time per mark
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.25), // 25% short answers
              instructions: 'Answer all questions in this section.',
              questionTypes: ['multiple-choice', 'short-answer'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B', 
              targetMarks: Math.round(simplified.totalMarks * 0.50), // 50% data response
              instructions: 'Answer the data response question.',
              questionTypes: ['extract-analysis', 'data-analysis', 'short-answer'],
              order: 2,
            },
            {
              id: 'section-c',
              name: 'Section C',
              targetMarks: Math.round(simplified.totalMarks * 0.25), // 25% essay
              instructions: 'Answer ONE question from this section.',
              questionTypes: ['essay'],
              order: 3,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 25,
            extractAnalysis: 30,
            dataAnalysis: 20,
            shortAnswer: 20,
            multipleChoice: 5,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      } else if (examBoard === 'ocr') {
        // OCR: 25-mark essays common, uses KAA structure
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.3),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'extract-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer TWO questions from this section.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60,
            extractAnalysis: 25,
            shortAnswer: 15,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      } else {
        // AQA Economics: 50% context + 50% essays (original implementation)
        const shortAnswerWeight = Math.max(15, easyWeight * 0.8); // 15-32%
        const essayWeight = Math.max(35, 35 + hardWeight * 0.5); // 35-60%
        const extractWeight = 100 - shortAnswerWeight - essayWeight;
        
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.5),
              instructions: 'Answer all questions in this section based on the extract provided.',
              questionTypes: ['multiple-choice', 'short-answer', 'extract-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B', 
              targetMarks: Math.round(simplified.totalMarks * 0.5),
              instructions: 'Answer ONE question from this section.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: essayWeight,
            extractAnalysis: extractWeight, 
            shortAnswer: shortAnswerWeight,
            multipleChoice: Math.max(5, easyWeight * 0.3),
            extended: Math.max(5, hardWeight * 0.2),
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      }
    }
    
    // Geography configurations
    if (subject === 'geography') {
      return {
        totalMarks: simplified.totalMarks,
        timeLimit: Math.round(simplified.totalMarks * 1.5), // 2.5 hours for 120 marks typically
        sections: [
          {
            id: 'section-a',
            name: 'Section A',
            targetMarks: Math.round(simplified.totalMarks * 0.3), // ~30% for short answers
            instructions: 'Answer all questions in this section.',
            questionTypes: ['short-answer', 'data-analysis'],
            order: 1,
          },
          {
            id: 'section-b',
            name: 'Section B',
            targetMarks: Math.round(simplified.totalMarks * 0.7), // ~70% for essays
            instructions: 'Answer TWO questions from this section.',
            questionTypes: ['essay', 'compare'],
            order: 2,
          },
        ],
        selectedTopics: simplified.selectedTopics,
        selectedSubtopics,
        difficultyDistribution: simplified.difficulty,
        questionTypeDistribution: {
          essay: 60, // 20-mark questions
          dataAnalysis: 20, // 6-mark questions
          shortAnswer: 20, // 4-mark questions
        },
        settings: {
          includeFormulaSheet: false,
          includeDataBooklet: false,
          showMarks: true,
          calculatorAllowed: false,
          examConditions: true,
        },
      };
    }
    
    // Business Studies configurations
    if (subject === 'business') {
      return {
        totalMarks: simplified.totalMarks,
        timeLimit: Math.round(simplified.totalMarks * 1.5),
        sections: [
          {
            id: 'section-a',
            name: 'Section A',
            targetMarks: Math.round(simplified.totalMarks * 0.4),
            instructions: 'Answer all questions in this section.',
            questionTypes: ['short-answer', 'explain'],
            order: 1,
          },
          {
            id: 'section-b',
            name: 'Section B',
            targetMarks: Math.round(simplified.totalMarks * 0.6),
            instructions: 'Answer TWO questions from this section.',
            questionTypes: ['essay', 'compare'],
            order: 2,
          },
        ],
        selectedTopics: simplified.selectedTopics,
        selectedSubtopics,
        difficultyDistribution: simplified.difficulty,
        questionTypeDistribution: {
          essay: 60, // 20-25 mark evaluation questions
          explain: 25, // 9-mark analysis questions  
          shortAnswer: 15,
        },
        settings: {
          includeFormulaSheet: false,
          includeDataBooklet: false,
          showMarks: true,
          calculatorAllowed: true,
          examConditions: true,
        },
      };
    }
    
    // English Literature configurations by exam board
    if (subject === 'english-literature') {
      if (examBoard === 'aqa') {
        // AQA: Texts provided in exam, more forgiving grading
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.5),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer the extract-based question. Text is provided.',
              questionTypes: ['extract-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer TWO questions from this section.',
              questionTypes: ['essay', 'interpretation'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60,
            extractAnalysis: 40,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true, // AQA provides texts
            showMarks: true,
            calculatorAllowed: false,
            examConditions: false, // Texts provided
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel: Open book (all texts allowed)
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.3), // Less time needed with open book
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.5),
              instructions: 'Answer all questions. All texts may be consulted.',
              questionTypes: ['extract-analysis', 'compare'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.5),
              instructions: 'Answer ONE question from this section.',
              questionTypes: ['essay'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 50,
            extractAnalysis: 30,
            compare: 20,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false, // Open book
            showMarks: true,
            calculatorAllowed: false,
            examConditions: false, // Open book
          },
        };
      } else {
        // OCR: No texts in exam, much harder grading
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.8), // More time needed without texts
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Answer the close reading question. No texts provided.',
              questionTypes: ['interpretation'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.7),
              instructions: 'Answer TWO questions from this section.',
              questionTypes: ['essay', 'compare'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 70,
            interpretation: 30,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false, // No texts provided
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true, // Closed book
          },
        };
      }
    }
    
    // History configurations by exam board
    if (subject === 'history') {
      if (examBoard === 'aqa') {
        // AQA: 80 marks (30 sources + 2×25 essays), specific timing
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.6), // 1hr + 2×45min structure
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.375), // 30/80 = 37.5%
              instructions: 'Answer the compulsory source analysis question. Spend approximately 1 hour.',
              questionTypes: ['source-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.625), // 50/80 = 62.5%
              instructions: 'Answer TWO questions from this section. Spend approximately 45 minutes on each.',
              questionTypes: ['essay'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 62.5,
            sourceAnalysis: 37.5,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true, // Sources provided
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel: Coursework weighted differently (AO3 15% + AO1 5%)
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Answer the breadth study question.',
              questionTypes: ['source-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer the depth study question.',
              questionTypes: ['essay'],
              order: 2,
            },
            {
              id: 'section-c',
              name: 'Section C',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Historical investigation component.',
              questionTypes: ['extended'],
              order: 3,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 40,
            sourceAnalysis: 30,
            extended: 30, // Coursework component
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      } else {
        // OCR: 30+20 mark structure, different essay breakdowns
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.5),
          sections: [
            {
              id: 'section-a',
              name: 'Section A - Enquiry',
              targetMarks: Math.round(simplified.totalMarks * 0.6), // 30/50 = 60%
              instructions: 'Answer the enquiry element questions.',
              questionTypes: ['source-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B - Period Study',
              targetMarks: Math.round(simplified.totalMarks * 0.4), // 20/50 = 40%
              instructions: 'Answer the period study questions.',
              questionTypes: ['essay', 'short-answer'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            sourceAnalysis: 60,
            essay: 30,
            shortAnswer: 10,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      }
    }
    
    // Geography configurations by exam board
    if ((subject as Subject) === 'geography') {
      if (examBoard === 'aqa') {
        // AQA Geography: 120 marks across 3 papers, 20-mark essays common
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.25), // 2.5hrs for 120 marks typically
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.25), // Short answers & data analysis
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'data-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.75), // 20-mark essays
              instructions: 'Answer THREE questions from this section.',
              questionTypes: ['essay', 'compare'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 65, // 20-mark questions dominate
            dataAnalysis: 20, // 6-mark questions
            shortAnswer: 15, // 4-mark questions
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel Geography: More fieldwork focus
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.3),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Answer questions on fieldwork and data analysis.',
              questionTypes: ['data-analysis', 'short-answer'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.7),
              instructions: 'Answer essay questions on geographical themes.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60,
            extended: 10,
            dataAnalysis: 20,
            shortAnswer: 10,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true, // Data booklets for fieldwork
            showMarks: true,
            calculatorAllowed: true, // Statistics calculations
            examConditions: true,
          },
        };
      } else {
        // OCR Geography: Different paper structure
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.35),
              instructions: 'Answer structured questions on geographical processes.',
              questionTypes: ['explain', 'data-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.65),
              instructions: 'Answer essay questions with geographical analysis.',
              questionTypes: ['essay', 'compare'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 55,
            compare: 10,
            explain: 20,
            dataAnalysis: 15,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      }
    }
    
    // Business Studies configurations by exam board
    if ((subject as Subject) === 'business') {
      if (examBoard === 'aqa') {
        // AQA Business: 20-mark evaluation questions, 9-mark analysis
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.5),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'explain'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer TWO evaluation questions from this section.',
              questionTypes: ['essay', 'compare'], // 20-mark evaluation questions
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60, // 20-mark evaluation questions
            explain: 25, // 9-mark analysis questions
            shortAnswer: 15,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: true, // Financial calculations
            examConditions: true,
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel Business: Case study focus
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Answer questions based on the case study provided.',
              questionTypes: ['data-analysis', 'short-answer'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.7),
              instructions: 'Answer essay questions with reference to the case study.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60,
            extended: 10,
            dataAnalysis: 20,
            shortAnswer: 10,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true, // Case study booklet
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      } else {
        // OCR Business: Different assessment structure
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer structured business analysis questions.',
              questionTypes: ['explain', 'calculation'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer extended response questions.',
              questionTypes: ['essay', 'compare'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 50,
            explain: 25,
            compare: 15,
            calculation: 10,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      }
    }
    
    // Psychology configurations by exam board
    if ((subject as Subject) === 'psychology') {
      if (examBoard === 'aqa') {
        // AQA Psychology: 81% market share, 50% essay marks, 8-mark + 16-mark essays
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.5),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.35), // Short answer questions
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'explain'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.35), // 8-mark essays
              instructions: 'Answer the required questions from this section.',
              questionTypes: ['extended'], // 8-mark essays
              order: 2,
            },
            {
              id: 'section-c',
              name: 'Section C', 
              targetMarks: Math.round(simplified.totalMarks * 0.30), // 16-mark essays
              instructions: 'Answer the required questions from this section.',
              questionTypes: ['essay'], // 16-mark essays
              order: 3,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 30, // 16-mark essays
            extended: 35, // 8-mark essays
            explain: 20, // Explain questions
            shortAnswer: 15, // Short answers
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel Psychology: Clinical/criminological applications focus
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer questions on core psychological theories.',
              questionTypes: ['explain', 'compare'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer questions on clinical and criminological applications.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 50, // Applications focus
            extended: 10, 
            explain: 25,
            compare: 15,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      } else {
        // OCR Psychology: Detailed marking schemes, challenging papers
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.6), // More time for detailed responses
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.3),
              instructions: 'Answer structured questions on psychological research.',
              questionTypes: ['explain', 'data-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.7),
              instructions: 'Answer extended response questions requiring detailed knowledge.',
              questionTypes: ['essay', 'extended'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 60, // Emphasis on detailed knowledge
            extended: 10,
            explain: 20,
            dataAnalysis: 10, // Research focus
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: false,
            showMarks: true,
            calculatorAllowed: false,
            examConditions: true,
          },
        };
      }
    }
    
    // Biology A-Level configurations by exam board (has significant essay components)
    if ((subject as Subject) === 'biology' && qualification === 'a-level') {
      if (examBoard === 'aqa') {
        // AQA A-Level Biology: 15-25 mark synoptic essays + 6-mark extended responses
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.3), // More time for extended responses
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.5), // Calculations and short answers
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'calculation', 'explain'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.3), // 6-mark extended responses
              instructions: 'Answer the required questions from this section.',
              questionTypes: ['extended'], // 6-mark extended responses
              order: 2,
            },
            {
              id: 'section-c',
              name: 'Section C',
              targetMarks: Math.round(simplified.totalMarks * 0.2), // 15-25 mark essays
              instructions: 'Answer the required questions from this section.',
              questionTypes: ['essay'], // Synoptic essays
              order: 3,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 20, // 15-25 mark synoptic essays
            extended: 30, // 6-mark extended responses
            explain: 25, // 4-mark explanation questions
            shortAnswer: 15, // Knowledge recall
            calculation: 10, // Biological calculations
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true, // Biology data sheet
            showMarks: true,
            calculatorAllowed: true, // Needed for calculations
            examConditions: true,
          },
        };
      } else if (examBoard === 'edexcel') {
        // Edexcel A-Level Biology: More practical focus, different essay structure
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.25),
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.6), // Mixed questions
              instructions: 'Answer all questions in this section.',
              questionTypes: ['short-answer', 'calculation', 'data-analysis'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.4), // Extended responses
              instructions: 'Answer the required questions from this section.',
              questionTypes: ['extended', 'essay'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 25, // Evaluation essays
            extended: 25, // Extended responses
            dataAnalysis: 20, // Practical analysis
            explain: 15,
            shortAnswer: 10,
            calculation: 5,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      } else {
        // OCR A-Level Biology: Different assessment approach
        return {
          totalMarks: simplified.totalMarks,
          timeLimit: Math.round(simplified.totalMarks * 1.4), // More time for detailed responses
          sections: [
            {
              id: 'section-a',
              name: 'Section A',
              targetMarks: Math.round(simplified.totalMarks * 0.4),
              instructions: 'Answer structured questions on biological principles.',
              questionTypes: ['short-answer', 'explain'],
              order: 1,
            },
            {
              id: 'section-b',
              name: 'Section B',
              targetMarks: Math.round(simplified.totalMarks * 0.6),
              instructions: 'Answer extended response questions requiring detailed analysis.',
              questionTypes: ['extended', 'essay'],
              order: 2,
            },
          ],
          selectedTopics: simplified.selectedTopics,
          selectedSubtopics,
          difficultyDistribution: simplified.difficulty,
          questionTypeDistribution: {
            essay: 35, // Detailed essays
            extended: 25, // Extended explanations
            explain: 25, // Structured explanations
            shortAnswer: 15,
          },
          settings: {
            includeFormulaSheet: false,
            includeDataBooklet: true,
            showMarks: true,
            calculatorAllowed: true,
            examConditions: true,
          },
        };
      }
    }
    
    // Fallback for any remaining subjects  
    return {
      totalMarks: simplified.totalMarks,
      timeLimit: Math.round(simplified.totalMarks * 1.5),
      sections: [
        {
          id: 'section-a',
          name: 'Section A',
          targetMarks: Math.round(simplified.totalMarks * 0.4),
          instructions: 'Answer all questions in this section.',
          questionTypes: ['short-answer', 'explain'],
          order: 1,
        },
        {
          id: 'section-b',
          name: 'Section B',
          targetMarks: Math.round(simplified.totalMarks * 0.6),
          instructions: 'Answer TWO questions from this section.',
          questionTypes: ['essay', 'extended'],
          order: 2,
        },
      ],
      selectedTopics: simplified.selectedTopics,
      selectedSubtopics,
      difficultyDistribution: simplified.difficulty,
      questionTypeDistribution: {
        essay: 60,
        explain: 25,
        shortAnswer: 15,
      },
      settings: {
        includeFormulaSheet: false,
        includeDataBooklet: false,
        showMarks: true,
        calculatorAllowed: false,
        examConditions: true,
      },
    };
  }

  // STEM subjects keep original configuration
  return {
    totalMarks: simplified.totalMarks,
    timeLimit: Math.round(simplified.totalMarks * 1.2), // ~1.2 min per mark
    sections: [
      {
        id: 'section-a',
        name: 'Section A',
        targetMarks: simplified.totalMarks,
        instructions: 'Answer all questions in this section.',
        questionTypes: ['calculation', 'explain', 'extended'],
        order: 1,
      },
    ],
    selectedTopics: simplified.selectedTopics,
    selectedSubtopics,
    difficultyDistribution: {
      easy: simplified.difficulty.easy,
      medium: simplified.difficulty.medium,
      hard: simplified.difficulty.hard,
    },
    questionTypeDistribution: {
      calculation: 40,
      explain: 30,
      dataAnalysis: 10,
      extended: 15,
      multipleChoice: 5,
    },
    settings: {
      includeFormulaSheet: true,
      includeDataBooklet: false,
      showMarks: true,
      calculatorAllowed: true,
      examConditions: false,
    },
  };
}

// Get Supabase admin client
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  // Parse request
  let body: StartPaperRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { examBoard, qualification, subject, paperName, config: rawConfig, userId } = body;

  // Check subscription
  const usageCheck = await checkPaperGenerationAllowed(userId || null);
  if (!usageCheck.allowed) {
    return NextResponse.json(
      {
        error: usageCheck.error || 'Paper generation not available on your plan',
        tier: usageCheck.tier,
        remaining: usageCheck.remaining,
        upgrade: true,
      },
      { status: 403 }
    );
  }

  // Validate required fields
  if (!examBoard || !qualification || !subject || !rawConfig) {
    return NextResponse.json(
      { error: 'Missing required fields: examBoard, qualification, subject, config' },
      { status: 400 }
    );
  }

  // Transform config if it's the simplified version from PaperBuilder
  const config: PaperConfig = isSimplifiedConfig(rawConfig)
    ? transformConfig(rawConfig, subject, examBoard, qualification)
    : rawConfig;

  // Validate transformed config
  if (!config.sections || config.sections.length === 0) {
    return NextResponse.json(
      { error: 'Paper must have at least one section' },
      { status: 400 }
    );
  }

  if (Object.keys(config.selectedSubtopics).length === 0) {
    return NextResponse.json(
      { error: 'Must select at least one topic with subtopics' },
      { status: 400 }
    );
  }

  // Plan the questions to get total count
  const selectionResult = selectQuestionsForPaper(config);
  let totalQuestions = 0;
  selectionResult.sections.forEach((section) => {
    totalQuestions += section.questions.length;
  });

  if (totalQuestions === 0) {
    return NextResponse.json(
      { error: 'No questions could be planned for this configuration' },
      { status: 400 }
    );
  }

  // Create job in database
  const supabase = getSupabaseAdmin();
  const { data: job, error: jobError } = await supabase
    .from('paper_jobs')
    .insert({
      user_id: userId,
      status: 'pending',
      progress_current: 0,
      progress_total: totalQuestions,
      config: {
        examBoard,
        qualification,
        subject,
        paperName,
        config,
      },
    })
    .select('id')
    .single();

  if (jobError || !job) {
    console.error('Failed to create job:', jobError);
    return NextResponse.json(
      { error: 'Failed to create paper generation job' },
      { status: 500 }
    );
  }

  // Check QStash config
  if (!process.env.QSTASH_TOKEN) {
    console.error('QSTASH_TOKEN not configured');
    return NextResponse.json(
      { error: 'Paper generation service not configured. Please contact support.' },
      { status: 500 }
    );
  }

  // Queue to QStash
  const qstash = new Client({
    token: process.env.QSTASH_TOKEN,
  });

  // Get the base URL for the callback
  const requestOrigin = request.headers.get('origin') || request.headers.get('referer')?.split('/').slice(0, 3).join('/');
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ||
                  requestOrigin ||
                  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

  console.log('QStash callback URL:', `${baseUrl}/api/papers/process`);

  try {
    await qstash.publishJSON({
      url: `${baseUrl}/api/papers/process`,
      body: {
        jobId: job.id,
        examBoard,
        qualification,
        subject,
        paperName,
        config,
        userId,
      },
      retries: 2,
    });
  } catch (qstashError) {
    console.error('Failed to queue job:', qstashError);
    // Mark job as failed
    await supabase
      .from('paper_jobs')
      .update({ status: 'failed', error: 'Failed to queue job' })
      .eq('id', job.id);

    return NextResponse.json(
      { error: 'Failed to queue paper generation' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    jobId: job.id,
    totalQuestions,
    message: 'Paper generation started',
  });
}
