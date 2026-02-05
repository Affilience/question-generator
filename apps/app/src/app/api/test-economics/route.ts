import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient } from '@/lib/openai';
import { parseQuestionResponse } from '@/lib/prompts-common';
import { getTopicById } from '@/lib/topics';
import { getEnhancedSystemPrompt } from '@/lib/prompts/system-prompts';
import { getAllConstraints } from '@/lib/prompts/global-constraints';
import { getEdexcelALevelEconomicsQuestionPrompt } from '@/lib/prompts-economics-alevel-edexcel';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const count = parseInt(url.searchParams.get('count') || '3');

    console.log(`[ECONOMICS-TEST] Generating ${count} Economics questions to test topic diversity`);

    // Economics topics to test variety
    const testTopics = [
      { id: 'market-failure', subtopic: 'Externalities' },
      { id: 'market-structures', subtopic: 'Monopoly' },
      { id: 'macroeconomic-objectives', subtopic: 'Economic Growth' },
      { id: 'fiscal-policy', subtopic: 'Government Spending' },
      { id: 'monetary-policy', subtopic: 'Interest Rates' },
    ];

    const questions = [];
    const openai = getOpenAIClient();

    for (let i = 0; i < Math.min(count, testTopics.length); i++) {
      const testTopic = testTopics[i];
      const topic = getTopicById(testTopic.id);
      
      if (!topic) {
        console.log(`[ECONOMICS-TEST] Topic not found: ${testTopic.id}, skipping`);
        continue;
      }

      console.log(`[ECONOMICS-TEST] Question ${i + 1}: ${topic.name} (${testTopic.subtopic})`);

      // Use specialized Economics prompt
      const prompt = getEdexcelALevelEconomicsQuestionPrompt(topic, 'medium', testTopic.subtopic);
      
      console.log(`[ECONOMICS-TEST] Using specialized Edexcel A-Level Economics prompt`);

      const systemPrompt = `${getEnhancedSystemPrompt('economics', 'edexcel', 'a-level')}

${getAllConstraints()}

${prompt}`;

      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: `Generate a 12-mark medium difficulty question on "${topic.name}" (${testTopic.subtopic}) for Edexcel A-Level Economics.`,
          },
        ],
        temperature: 0.8,
        max_tokens: 2000,
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        console.log(`[ECONOMICS-TEST] Failed to generate question ${i + 1}`);
        continue;
      }

      try {
        const parsed = parseQuestionResponse(content);
        questions.push({
          questionNumber: i + 1,
          topic: topic.name,
          subtopic: testTopic.subtopic,
          question: parsed.question,
          markScheme: parsed.markScheme,
          // Extract key phrases to analyze topic focus
          keyPhrases: extractKeyPhrases(parsed.question),
        });
        
        console.log(`[ECONOMICS-TEST] Question ${i + 1} generated successfully`);
        console.log(`[ECONOMICS-TEST] Key phrases: ${extractKeyPhrases(parsed.question).slice(0, 3).join(', ')}`);
        
      } catch (parseError) {
        console.error(`[ECONOMICS-TEST] Failed to parse question ${i + 1}:`, parseError);
        questions.push({
          questionNumber: i + 1,
          topic: topic.name,
          subtopic: testTopic.subtopic,
          question: content,
          markScheme: ['Parse error'],
          keyPhrases: extractKeyPhrases(content),
        });
      }
    }

    // Analyze topic diversity
    const analysis = analyzeTopicDiversity(questions);

    const result = {
      timestamp: new Date().toISOString(),
      totalQuestions: questions.length,
      topicDiversityAnalysis: analysis,
      questions: questions.map(q => ({
        questionNumber: q.questionNumber,
        topic: q.topic,
        subtopic: q.subtopic,
        questionPreview: q.question.substring(0, 200) + '...',
        keyPhrases: q.keyPhrases.slice(0, 5),
      })),
      usingSpecializedPrompts: true,
      testPassed: analysis.diversityScore >= 0.7, // 70% threshold for diversity
    };

    console.log(`[ECONOMICS-TEST] Test completed. Diversity score: ${analysis.diversityScore}`);
    console.log(`[ECONOMICS-TEST] Test result: ${result.testPassed ? 'PASSED' : 'FAILED'}`);

    return NextResponse.json(result);

  } catch (error) {
    console.error('[ECONOMICS-TEST] Test error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Test failed',
        details: error 
      },
      { status: 500 }
    );
  }
}

function extractKeyPhrases(text: string): string[] {
  // Extract economic terms and concepts mentioned in the question
  const economicTerms = [
    'market failure', 'externalities', 'monopoly', 'oligopoly', 'perfect competition',
    'economic growth', 'inflation', 'unemployment', 'fiscal policy', 'monetary policy',
    'government spending', 'taxation', 'interest rates', 'money supply', 'aggregate demand',
    'aggregate supply', 'social sciences', 'injections', 'withdrawals', 'multiplier effect',
    'supply and demand', 'price elasticity', 'income elasticity', 'consumer surplus',
    'producer surplus', 'deadweight loss', 'public goods', 'merit goods', 'demerit goods'
  ];

  const foundTerms = economicTerms.filter(term => 
    text.toLowerCase().includes(term.toLowerCase())
  );

  return foundTerms;
}

function analyzeTopicDiversity(questions: any[]) {
  const topics = questions.map(q => q.topic);
  const subtopics = questions.map(q => q.subtopic);
  const allKeyPhrases = questions.flatMap(q => q.keyPhrases);

  const uniqueTopics = new Set(topics).size;
  const uniqueSubtopics = new Set(subtopics).size;
  const uniqueKeyPhrases = new Set(allKeyPhrases).size;

  // Calculate diversity scores
  const topicDiversity = uniqueTopics / topics.length;
  const subtopicDiversity = uniqueSubtopics / subtopics.length;
  const phraseDiversity = uniqueKeyPhrases / Math.max(allKeyPhrases.length, 1);

  // Overall diversity score (weighted)
  const diversityScore = (topicDiversity * 0.4) + (subtopicDiversity * 0.4) + (phraseDiversity * 0.2);

  return {
    totalQuestions: questions.length,
    uniqueTopics,
    uniqueSubtopics,
    uniqueKeyPhrases,
    topicDiversity: Math.round(topicDiversity * 100) / 100,
    subtopicDiversity: Math.round(subtopicDiversity * 100) / 100,
    phraseDiversity: Math.round(phraseDiversity * 100) / 100,
    diversityScore: Math.round(diversityScore * 100) / 100,
    repeatedTopics: topics.filter((topic, index) => topics.indexOf(topic) !== index),
    repeatedSubtopics: subtopics.filter((subtopic, index) => subtopics.indexOf(subtopic) !== index),
    mostCommonKeyPhrases: getMostCommon(allKeyPhrases, 3),
  };
}

function getMostCommon(arr: string[], limit: number) {
  const counts = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(counts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, limit)
    .map(([phrase, count]) => ({ phrase, count }));
}