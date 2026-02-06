#!/usr/bin/env node

// Simulate batch processing like the main audit to find the issue

import { promises as fs } from 'fs';

const testPageSEO = async (url) => {
  const checks = [];
  const recommendations = [];
  
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    const response = await fetch(localUrl);
    
    // Early return if page doesn't load
    if (!response.ok) {
      return { url, checks: [{ name: 'Page loads', status: 'fail', score: 0 }], score: 0, recommendations: [] };
    }
    
    const html = await response.text();
    
    // Page load check
    checks.push({ name: 'Page loads', score: 15 });
    
    // Title check
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const titleScore = titleMatch ? 10 : 0;
    checks.push({ name: 'Title tag', score: titleScore });
    
    // Meta description check  
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    const metaScore = metaDescMatch ? 10 : 0;
    checks.push({ name: 'Meta description', score: metaScore });
    
    // H1 check
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    const h1Score = h1Count === 1 ? 10 : (h1Count === 0 ? 0 : 5);
    checks.push({ name: 'H1 heading', score: h1Score });
    
    // Canonical check
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*>/i);
    const canonicalScore = canonicalMatch ? 10 : 5;
    checks.push({ name: 'Canonical URL', score: canonicalScore });
    
    // Structured data check
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    const structuredScore = structuredDataCount > 0 ? 10 : 6;
    checks.push({ name: 'Structured data', score: structuredScore });
    
    // Internal links check
    const internalLinks = (html.match(/<a[^>]*href=["']\/[^"']*["'][^>]*>/gi) || []).length;
    const linkScore = internalLinks >= 3 ? 10 : 6;
    checks.push({ name: 'Internal links', score: linkScore });
    
    // Calculate score
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    const maxScore = checks.length * 10;
    const score = Math.round((totalScore / maxScore) * 100);
    
    return { url, checks, score, recommendations };
    
  } catch (error) {
    console.log(`❌ Error with ${url}: ${error.message}`);
    return {
      url,
      checks: [{ name: 'Error', score: 0 }],
      score: 0,
      recommendations: []
    };
  }
};

// Test problematic pages in batch simulation
const problematicUrls = [
  'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/interquartile-range',
  'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/mean-from-frequency-tables', 
  'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/estimated-mean-from-grouped-data',
  'https://www.past-papers.co.uk/gcse/maths/aqa/probability/tree-diagrams',
  'https://www.past-papers.co.uk/gcse/maths/aqa/probability/and-rule-multiplication',
  'https://www.past-papers.co.uk/gcse/maths/aqa/probability/independent-events'
];

async function simulateBatchProcessing() {
  console.log('🧪 Simulating batch processing like the comprehensive audit...\n');
  
  // Test 1: Sequential processing (like individual tests)
  console.log('1️⃣ Sequential processing:');
  for (const url of problematicUrls.slice(0, 3)) {
    const result = await testPageSEO(url);
    console.log(`   ${url.split('/').pop()}: ${result.score}%`);
  }
  
  console.log('\n2️⃣ Parallel processing (like batch):');
  // Test 2: Parallel processing with delays (like audit batches)
  const batchPromises = problematicUrls.slice(0, 6).map(async (url, index) => {
    // Add the same delay used in the audit script
    await new Promise(resolve => setTimeout(resolve, index * 10));
    return testPageSEO(url);
  });
  
  const results = await Promise.all(batchPromises);
  results.forEach(result => {
    console.log(`   ${result.url.split('/').pop()}: ${result.score}%`);
  });
  
  console.log('\n3️⃣ Higher concurrency (stress test):');
  // Test 3: High concurrency without delays
  const highConcurrencyPromises = problematicUrls.map(url => testPageSEO(url));
  const highConcurrencyResults = await Promise.all(highConcurrencyPromises);
  
  highConcurrencyResults.forEach(result => {
    console.log(`   ${result.url.split('/').pop()}: ${result.score}%`);
  });
}

simulateBatchProcessing().catch(console.error);