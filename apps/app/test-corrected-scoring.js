#!/usr/bin/env node

// Test pages with corrected scoring logic

async function testPageWithCorrectScoring(url) {
  console.log(`\n🔍 Testing: ${url}`);
  
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    const response = await fetch(localUrl);
    const html = await response.text();
    
    console.log(`   Status: ${response.status}, HTML: ${html.length} chars`);
    
    const checks = [];
    
    // 1. Page Load Check (15 points)
    checks.push({ name: 'Page loads', score: 15 });
    console.log(`   ✅ Page loads: 15 points`);
    
    // 2. Title Tag (10 points)
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const titleScore = titleMatch ? 10 : 0;
    checks.push({ name: 'Title tag', score: titleScore });
    console.log(`   ✅ Title: ${titleScore} points`);
    
    // 3. Meta Description (10 points)
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    const metaScore = metaDescMatch ? 10 : 0;
    checks.push({ name: 'Meta description', score: metaScore });
    console.log(`   ✅ Meta desc: ${metaScore} points`);
    
    // 4. H1 Tag (10 points)
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    const h1Score = h1Count === 1 ? 10 : (h1Count === 0 ? 0 : 5);
    checks.push({ name: 'H1 heading', score: h1Score });
    console.log(`   ✅ H1: ${h1Score} points`);
    
    // 5. Canonical URL (10 points)
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*>/i);
    const canonicalScore = canonicalMatch ? 10 : 5;
    checks.push({ name: 'Canonical URL', score: canonicalScore });
    console.log(`   ✅ Canonical: ${canonicalScore} points`);
    
    // 6. Structured Data (10 points)
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    const structuredScore = structuredDataCount > 0 ? 10 : 6;
    checks.push({ name: 'Structured data', score: structuredScore });
    console.log(`   ✅ Structured data: ${structuredScore} points`);
    
    // 7. Internal Links (10 points)
    const internalLinks = (html.match(/<a[^>]*href=["']\/[^"']*["'][^>]*>/gi) || []).length;
    const linkScore = internalLinks >= 3 ? 10 : 6;
    checks.push({ name: 'Internal links', score: linkScore });
    console.log(`   ✅ Internal links: ${linkScore} points`);
    
    // CORRECTED SCORING CALCULATION
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    const maxScore = 15 + (checks.length - 1) * 10; // 15 for page loads + 10 for each other check
    const score = Math.round((totalScore / maxScore) * 100);
    
    console.log(`\n   📊 CORRECTED SCORE CALCULATION:`);
    console.log(`   Total score: ${totalScore}`);
    console.log(`   Max score: ${maxScore} (15 for page loads + ${checks.length - 1} × 10 for other checks)`);
    console.log(`   Final score: ${score}%`);
    
    return score;
    
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return 0;
  }
}

// Test the pages
async function main() {
  const testPages = [
    'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/interquartile-range',
    'https://www.past-papers.co.uk/gcse/maths/aqa/probability/tree-diagrams'
  ];
  
  console.log('🧪 Testing pages with CORRECTED scoring logic...');
  
  for (const url of testPages) {
    const score = await testPageWithCorrectScoring(url);
    console.log(`\n🎯 Final result: ${score}%`);
    console.log('==================================================');
  }
}

main().catch(console.error);