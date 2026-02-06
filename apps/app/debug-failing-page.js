#!/usr/bin/env node

// Debug a specific page showing 0% score to understand the issue

async function debugPageAudit(url) {
  console.log(`\n=== DEBUGGING: ${url} ===`);
  
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    console.log(`Fetching: ${localUrl}`);
    
    const response = await fetch(localUrl);
    console.log(`Response status: ${response.status}`);
    
    if (!response.ok) {
      console.log('❌ Page failed to load');
      return;
    }
    
    const html = await response.text();
    console.log(`HTML length: ${html.length} chars`);
    
    // Simulate the exact audit checks from the script
    const checks = [];
    const recommendations = [];
    
    // 1. Page Load Check
    checks.push({ name: 'Page loads', score: 15 });
    console.log('✅ Page loads: 15 points');
    
    // 2. Title Tag Analysis
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      let score = 10;
      if (title.length > 60) {
        score = 7;
      } else if (title.length < 30) {
        score = 7;
      }
      checks.push({ name: 'Title tag', score });
      console.log(`✅ Title tag (${title.length} chars): ${score} points - "${title}"`);
    } else {
      checks.push({ name: 'Title tag', score: 0 });
      console.log('❌ Title tag: 0 points - MISSING');
    }
    
    // 3. Meta Description Analysis
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      let score = 10;
      if (description.length < 120 || description.length > 160) {
        score = 6;
      }
      checks.push({ name: 'Meta description', score });
      console.log(`✅ Meta description (${description.length} chars): ${score} points - "${description}"`);
    } else {
      checks.push({ name: 'Meta description', score: 0 });
      console.log('❌ Meta description: 0 points - MISSING');
    }
    
    // 4. H1 Tag Check
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    let h1Score = 0;
    if (h1Count === 1) {
      h1Score = 10;
      console.log(`✅ H1 heading (${h1Count}): 10 points`);
    } else if (h1Count === 0) {
      h1Score = 0;
      console.log(`❌ H1 heading: 0 points - MISSING`);
    } else {
      h1Score = 5;
      console.log(`⚠️  H1 heading (${h1Count} found): 5 points`);
    }
    checks.push({ name: 'H1 heading', score: h1Score });
    
    // 5. Canonical URL Check
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*>/i);
    if (canonicalMatch) {
      checks.push({ name: 'Canonical URL', score: 10 });
      console.log('✅ Canonical URL: 10 points');
    } else {
      checks.push({ name: 'Canonical URL', score: 5 });
      console.log('⚠️  Canonical URL: 5 points - MISSING');
    }
    
    // 6. Structured Data Check
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    if (structuredDataCount > 0) {
      checks.push({ name: 'Structured data', score: 10 });
      console.log(`✅ Structured data (${structuredDataCount} blocks): 10 points`);
    } else {
      checks.push({ name: 'Structured data', score: 6 });
      console.log('⚠️  Structured data: 6 points - MISSING');
    }
    
    // 7. Internal Links Check
    const internalLinks = (html.match(/<a[^>]*href=["']\/[^"']*["'][^>]*>/gi) || []).length;
    let linkScore = 10;
    if (internalLinks < 3) {
      linkScore = 6;
    }
    checks.push({ name: 'Internal links', score: linkScore });
    console.log(`✅ Internal links (${internalLinks} found): ${linkScore} points`);
    
    // Calculate total score using the same logic as the audit script
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    const maxScore = checks.length * 10;
    const score = Math.round((totalScore / maxScore) * 100);
    
    console.log(`\n📊 SCORE CALCULATION:`);
    console.log(`Total score: ${totalScore}`);
    console.log(`Max score: ${maxScore} (${checks.length} checks × 10)`);
    console.log(`Final score: ${Math.round((totalScore / maxScore) * 100)}%`);
    
    console.log(`\n📋 ALL CHECKS:`);
    checks.forEach((check, i) => {
      console.log(`${i + 1}. ${check.name}: ${check.score}/10`);
    });
    
    return score;
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return 0;
  }
}

// Test a few pages that show 0% in the audit
async function main() {
  const testPages = [
    'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/interquartile-range',
    'https://www.past-papers.co.uk/gcse/maths/aqa/probability/tree-diagrams',
    'https://www.past-papers.co.uk/gcse/maths/aqa/probability/and-rule-multiplication'
  ];
  
  for (const page of testPages) {
    const score = await debugPageAudit(page);
    console.log(`\n🔍 Expected score for ${page}: ${score}%`);
    console.log('=======================================');
  }
}

main().catch(console.error);