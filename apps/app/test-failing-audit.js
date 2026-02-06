#!/usr/bin/env node

// Test specific failing pages using the exact audit function

import { promises as fs } from 'fs';

const testPageSEO = async (url) => {
  const checks = [];
  const recommendations = [];
  
  try {
    console.log(`\n🔍 Testing: ${url}`);
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    const response = await fetch(localUrl);
    const html = await response.text();
    
    console.log(`   Status: ${response.status}, HTML: ${html.length} chars`);
    
    // 1. Page Load Check
    if (response.ok) {
      checks.push({
        name: 'Page loads',
        status: 'pass',
        message: `Success (${response.status})`,
        score: 15
      });
    } else {
      checks.push({
        name: 'Page loads',
        status: 'fail',
        message: `Failed (${response.status})`,
        score: 0
      });
      return { url, checks, score: 0, recommendations };
    }
    
    // 2. Title Tag Analysis
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      let score = 10;
      let status = 'pass';
      
      if (title.length > 60) {
        status = 'warning';
        score = 7;
        recommendations.push(`Shorten title to ≤60 characters. Current: ${title.length}`);
      } else if (title.length < 30) {
        status = 'warning';
        score = 7;
        recommendations.push(`Expand title to 30-60 characters. Current: ${title.length}`);
      }
      
      checks.push({
        name: 'Title tag',
        status,
        message: `${title.length} chars`,
        score
      });
      console.log(`   ✅ Title: "${title}" (${title.length} chars) = ${score} points`);
    } else {
      checks.push({
        name: 'Title tag',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add a title tag');
      console.log(`   ❌ Title: Missing = 0 points`);
    }
    
    // 3. Meta Description Analysis
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      let score = 10;
      let status = 'pass';
      
      if (description.length < 120 || description.length > 160) {
        status = 'warning';
        score = 6;
        recommendations.push(`Optimize meta description to 150-160 characters. Current: ${description.length}`);
      }
      
      checks.push({
        name: 'Meta description',
        status,
        message: `${description.length} chars`,
        score
      });
      console.log(`   ✅ Meta desc: "${description.substring(0, 50)}..." (${description.length} chars) = ${score} points`);
    } else {
      checks.push({
        name: 'Meta description',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add a meta description');
      console.log(`   ❌ Meta desc: Missing = 0 points`);
    }
    
    // 4. H1 Tag Check
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    if (h1Count === 1) {
      checks.push({
        name: 'H1 heading',
        status: 'pass',
        message: 'Present',
        score: 10
      });
      console.log(`   ✅ H1 count: ${h1Count} = 10 points`);
    } else if (h1Count === 0) {
      checks.push({
        name: 'H1 heading',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add an H1 heading');
      console.log(`   ❌ H1 count: ${h1Count} = 0 points`);
    } else {
      checks.push({
        name: 'H1 heading',
        status: 'warning',
        message: `${h1Count} found`,
        score: 5
      });
      recommendations.push('Use only one H1 heading per page');
      console.log(`   ⚠️  H1 count: ${h1Count} = 5 points`);
    }
    
    // 5. Canonical URL Check
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*>/i);
    if (canonicalMatch) {
      checks.push({
        name: 'Canonical URL',
        status: 'pass',
        message: 'Present',
        score: 10
      });
      console.log(`   ✅ Canonical: Present = 10 points`);
    } else {
      checks.push({
        name: 'Canonical URL',
        status: 'warning',
        message: 'Missing',
        score: 5
      });
      recommendations.push('Add canonical URL');
      console.log(`   ⚠️  Canonical: Missing = 5 points`);
    }
    
    // 6. Structured Data Check
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    if (structuredDataCount > 0) {
      checks.push({
        name: 'Structured data',
        status: 'pass',
        message: `${structuredDataCount} blocks`,
        score: 10
      });
      console.log(`   ✅ Structured data: ${structuredDataCount} blocks = 10 points`);
    } else {
      checks.push({
        name: 'Structured data',
        status: 'warning',
        message: 'Missing',
        score: 6
      });
      recommendations.push('Add structured data markup');
      console.log(`   ⚠️  Structured data: Missing = 6 points`);
    }
    
    // 7. Internal Links Check
    const internalLinks = (html.match(/<a[^>]*href=["']\/[^"']*["'][^>]*>/gi) || []).length;
    let linkScore = 10;
    if (internalLinks < 3) {
      linkScore = 6;
      recommendations.push('Add more internal links for better navigation');
    }
    
    checks.push({
      name: 'Internal links',
      status: internalLinks >= 3 ? 'pass' : 'warning',
      message: `${internalLinks} found`,
      score: linkScore
    });
    console.log(`   ✅ Internal links: ${internalLinks} = ${linkScore} points`);
    
    // Calculate total score
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    const maxScore = checks.length * 10;
    const score = Math.round((totalScore / maxScore) * 100);
    
    console.log(`   📊 FINAL SCORE: ${totalScore}/${maxScore} = ${score}%`);
    
    return { url, checks, score, recommendations };
    
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return {
      url,
      checks: [{
        name: 'Error',
        status: 'fail',
        message: `Failed to test: ${error.message}`,
        score: 0
      }],
      score: 0,
      recommendations: ['Fix technical issues with page']
    };
  }
};

// Test the specific pages that show 0% in the audit
const failingPages = [
  'https://www.past-papers.co.uk/gcse/maths/aqa/statistics/interquartile-range',
  'https://www.past-papers.co.uk/gcse/maths/aqa/probability/tree-diagrams',
  'https://www.past-papers.co.uk/gcse/maths/aqa/probability/and-rule-multiplication'
];

async function main() {
  console.log('Testing pages that show 0% in the comprehensive audit...\n');
  
  for (const url of failingPages) {
    try {
      const result = await testPageSEO(url);
      console.log(`Final result for ${url}: ${result.score}%`);
    } catch (error) {
      console.log(`Failed to test ${url}: ${error.message}`);
    }
  }
}

main().catch(console.error);