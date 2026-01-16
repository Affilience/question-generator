#!/usr/bin/env node

/**
 * Fast cache warming script using parallel requests
 * Run with: node scripts/warm-cache.mjs [aqa|edexcel]
 */

const API_URL = 'http://localhost:3000/api/generate-question';
const CONCURRENCY = 10; // Number of parallel requests
const QUESTIONS_PER_COMBO = 3; // Questions per topic/subtopic/difficulty combo

const AQA_TOPICS = {
  number: [
    'Ordering integers, decimals and fractions',
    'Operations with negative numbers',
    'Order of operations (BIDMAS)',
    'Highest common factor (HCF)',
    'Lowest common multiple (LCM)',
    'Prime factorisation',
    'Squares and square roots',
    'Laws of indices',
    'Estimation and approximation',
    'Adding and subtracting fractions',
    'Multiplying and dividing fractions',
    'Fractions of amounts',
    'Converting between fractions and decimals',
    'Percentage of an amount',
    'Percentage increase and decrease',
    'Reverse percentages',
    'Compound interest',
    'Rounding to decimal places',
    'Rounding to significant figures',
    'Standard form',
  ],
  algebra: [
    'Collecting like terms',
    'Substitution into expressions',
    'Expanding single brackets',
    'Expanding double brackets',
    'Factorising single brackets',
    'Factorising quadratics',
    'Plotting linear graphs',
    'Gradient of a line',
    'Equation of a straight line (y = mx + c)',
    'Quadratic graphs',
    'Nth term of linear sequences',
    'Solving one-step equations',
    'Solving two-step equations',
    'Solving equations with unknowns on both sides',
    'Solving quadratics by factorising',
    'Solving simultaneous equations algebraically',
    'Solving linear inequalities',
    'Changing the subject of a formula',
  ],
  geometry: [
    'Angles at a point',
    'Angles in triangles',
    'Interior angles of polygons',
    'Properties of triangles',
    'Properties of quadrilaterals',
    'Parts of a circle',
    'Arc length',
    'Sector area',
    'Angles in parallel lines',
    'Similar shapes',
    'Perimeter of shapes',
    'Area of triangles',
    'Area of compound shapes',
    'Circumference of a circle',
    'Area of a circle',
    'Volume of cuboids',
    'Volume of prisms',
    'Pythagoras theorem',
    'Trigonometric ratios (SOHCAHTOA)',
    'Three-figure bearings',
    'Translations',
    'Reflections',
    'Rotations',
    'Enlargements',
  ],
  statistics: [
    'Types of data',
    'Sampling methods',
    'Bar charts',
    'Pie charts',
    'Frequency tables',
    'Two-way tables',
    'Mean',
    'Median',
    'Mode',
    'Range',
    'Mean from frequency tables',
    'Scatter graphs',
    'Correlation',
    'Lines of best fit',
  ],
  probability: [
    'Probability of single events',
    'Calculating simple probability',
    'Mutually exclusive events',
    'Expected frequency',
    'Relative frequency',
    'Sample spaces',
    'Tree diagrams',
    'Independent events',
    'Combined probability',
    'Venn diagrams for probability',
  ],
  ratio: [
    'Converting metric units',
    'Scale drawings',
    'Writing ratios',
    'Simplifying ratios',
    'Dividing in a ratio',
    'Sharing in a ratio given total',
    'Percentage increase',
    'Percentage decrease',
    'Direct proportion',
    'Inverse proportion',
    'Speed',
    'Distance, speed, time calculations',
    'Density',
    'Best buy problems',
  ],
};

const EDEXCEL_TOPICS = {
  'edexcel-number': [
    'Place value and ordering',
    'Positive and negative integers',
    'Order of operations',
    'Factors and multiples',
    'Prime factorisation',
    'HCF and LCM',
    'Squares, cubes and roots',
    'Laws of indices',
    'Standard form',
    'Calculations in standard form',
    'Adding and subtracting fractions',
    'Multiplying fractions',
    'Dividing fractions',
    'Fractions of amounts',
    'Converting fractions to decimals',
    'Percentage of an amount',
    'Percentage increase and decrease',
    'Reverse percentages',
    'Compound interest',
    'Rounding to decimal places',
    'Rounding to significant figures',
    'Estimation',
    'Error intervals',
  ],
  'edexcel-algebra': [
    'Collecting like terms',
    'Expanding single brackets',
    'Expanding double brackets',
    'Factorising into single brackets',
    'Factorising quadratics',
    'Substitution into expressions',
    'Substitution into formulae',
    'Rearranging formulae',
    'Plotting straight line graphs',
    'Gradient of a line',
    'Equation y = mx + c',
    'Quadratic graphs',
    'nth term of arithmetic sequences',
    'Solving one-step equations',
    'Solving two-step equations',
    'Equations with unknowns on both sides',
    'Solving by factorising',
    'Simultaneous equations - elimination',
    'Solving linear inequalities',
    'Distance-time graphs',
  ],
  'edexcel-geometry': [
    'Angles at a point and on a line',
    'Angles in triangles',
    'Angles in polygons',
    'Angles in parallel lines',
    'Properties of triangles',
    'Properties of quadrilaterals',
    'Parts of a circle',
    'Congruent shapes',
    'Similar shapes',
    'Perimeter of 2D shapes',
    'Area of rectangles and parallelograms',
    'Area of triangles',
    'Area of trapeziums',
    'Circumference of circles',
    'Area of circles',
    'Arc length and sector area',
    'Volume of cuboids',
    'Volume of prisms',
    'Pythagoras theorem',
    'Trigonometry - finding sides',
    'Trigonometry - finding angles',
    'Translations',
    'Reflections',
    'Rotations',
    'Enlargements',
    'Three-figure bearings',
  ],
  'edexcel-statistics': [
    'Types of data',
    'Sampling methods',
    'Pictograms and bar charts',
    'Pie charts',
    'Frequency tables',
    'Two-way tables',
    'Scatter graphs',
    'Mean',
    'Median',
    'Mode and modal class',
    'Range',
    'Mean from frequency tables',
    'Types of correlation',
    'Lines of best fit',
  ],
  'edexcel-probability': [
    'Calculating probability',
    'Mutually exclusive events',
    'Relative frequency',
    'Expected frequency',
    'Sample space diagrams',
    'Tree diagrams',
    'Independent events',
    'Dependent events',
    'Venn diagrams',
  ],
  'edexcel-ratio': [
    'Writing ratios',
    'Simplifying ratios',
    'Dividing in a ratio',
    'Direct proportion',
    'Inverse proportion',
    'Metric units',
    'Scale drawings and maps',
    'Speed, distance, time',
    'Density, mass, volume',
    'Best buy problems',
    'Percentage change',
    'Compound interest',
  ],
};

const DIFFICULTIES = ['easy', 'medium', 'hard'];

async function generateQuestion(topicId, subtopic, difficulty, examBoard) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topicId, difficulty, subtopic, examBoard }),
    });

    if (!response.ok) {
      return { success: false, cached: false };
    }

    const cacheHeader = response.headers.get('X-Cache');
    return { success: true, cached: cacheHeader === 'HIT' };
  } catch (error) {
    return { success: false, cached: false, error: error.message };
  }
}

async function processBatch(tasks, examBoard) {
  return Promise.all(tasks.map(task => generateQuestion(task.topicId, task.subtopic, task.difficulty, examBoard)));
}

async function warmCache(examBoard) {
  const topics = examBoard === 'edexcel' ? EDEXCEL_TOPICS : AQA_TOPICS;
  const boardName = examBoard.toUpperCase();

  console.log(`🔥 Starting ${boardName} cache warming...\n`);

  // Build task queue
  const tasks = [];
  for (const [topicId, subtopics] of Object.entries(topics)) {
    for (const subtopic of subtopics) {
      for (const difficulty of DIFFICULTIES) {
        for (let i = 0; i < QUESTIONS_PER_COMBO; i++) {
          tasks.push({ topicId, subtopic, difficulty });
        }
      }
    }
  }

  console.log(`📊 Total tasks: ${tasks.length} questions to generate`);
  console.log(`⚡ Concurrency: ${CONCURRENCY} parallel requests\n`);

  let completed = 0;
  let cached = 0;
  let failed = 0;
  const startTime = Date.now();

  // Process in batches
  for (let i = 0; i < tasks.length; i += CONCURRENCY) {
    const batch = tasks.slice(i, i + CONCURRENCY);
    const results = await processBatch(batch, examBoard);

    for (const result of results) {
      completed++;
      if (result.cached) cached++;
      if (!result.success) failed++;
    }

    // Progress update every 10 batches
    if ((i / CONCURRENCY) % 10 === 0) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      const rate = (completed / elapsed).toFixed(1);
      const eta = (((tasks.length - completed) / rate) / 60).toFixed(1);
      console.log(`Progress: ${completed}/${tasks.length} (${cached} cached, ${failed} failed) - ${rate}/s - ETA: ${eta}m`);
    }
  }

  const totalTime = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

  console.log(`\n✅ ${boardName} cache warming complete!`);
  console.log(`📈 Results: ${completed} total, ${cached} already cached, ${failed} failed`);
  console.log(`⏱️  Time: ${totalTime} minutes`);
}

// Get exam board from command line, default to 'aqa'
const examBoard = process.argv[2] || 'aqa';
if (!['aqa', 'edexcel'].includes(examBoard)) {
  console.error('Usage: node scripts/warm-cache.mjs [aqa|edexcel]');
  process.exit(1);
}

warmCache(examBoard).catch(console.error);
