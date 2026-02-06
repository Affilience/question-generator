#!/usr/bin/env node

// Test single page audit to understand the 0% issue
async function testPageSEO(url) {
  console.log(`Testing: ${url}`);
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    console.log(`Fetching: ${localUrl}`);
    
    const response = await fetch(localUrl);
    console.log(`Status: ${response.status}`);
    
    if (!response.ok) {
      console.log('❌ Page failed to load');
      return;
    }
    
    const html = await response.text();
    console.log(`HTML length: ${html.length} chars`);
    
    // Check key elements
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*>/i);
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    
    console.log('SEO Elements:');
    console.log(`- Title: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
    console.log(`- H1 count: ${h1Count}`);
    console.log(`- Meta description: ${metaDescMatch ? `"${metaDescMatch[1]}" (${metaDescMatch[1].length} chars)` : 'MISSING'}`);
    console.log(`- Canonical: ${canonicalMatch ? 'Present' : 'MISSING'}`);
    console.log(`- Structured data: ${structuredDataCount} blocks`);
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

// Test both a working and failing page
async function main() {
  console.log('=== Testing Working Page ===');
  await testPageSEO('https://www.past-papers.co.uk/gcse/maths');
  
  console.log('\n=== Testing "Failing" Page ===');
  await testPageSEO('https://www.past-papers.co.uk/gcse/maths/aqa/statistics/interquartile-range');
  
  console.log('\n=== Testing Another "Failing" Page ===');
  await testPageSEO('https://www.past-papers.co.uk/gcse/maths/aqa/probability/tree-diagrams');
}

main().catch(console.error);