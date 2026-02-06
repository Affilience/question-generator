#!/usr/bin/env node

/**
 * Manual SEO Testing Script
 * 
 * This script performs basic SEO checks on your local development server
 * without requiring a full Lighthouse setup.
 */

import { promises as fs } from 'fs';
import path from 'path';

interface SEOCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
}

interface SEOReport {
  url: string;
  checks: SEOCheck[];
  score: number;
}

const TEST_URLS = [
  'http://localhost:3000',
  'http://localhost:3000/gcse',
  'http://localhost:3000/a-level',
  'http://localhost:3000/gcse/maths',
  'http://localhost:3000/gcse/maths/aqa',
  'http://localhost:3000/pricing',
  'http://localhost:3000/past-papers'
];

async function testPageSEO(url: string): Promise<SEOReport> {
  const checks: SEOCheck[] = [];
  
  try {
    console.log(`Testing ${url}...`);
    const response = await fetch(url);
    const html = await response.text();
    
    // Check if page loads successfully
    if (response.ok) {
      checks.push({
        name: 'Page loads',
        status: 'pass',
        message: `Page loads successfully (${response.status})`
      });
    } else {
      checks.push({
        name: 'Page loads',
        status: 'fail',
        message: `Page failed to load (${response.status})`
      });
      return { url, checks, score: 0 };
    }
    
    // Title tag check
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      if (title && title !== '') {
        checks.push({
          name: 'Title tag',
          status: title.length <= 60 ? 'pass' : 'warning',
          message: `Title found: "${title}" (${title.length} chars)`,
          details: title.length > 60 ? 'Title is longer than recommended 60 characters' : undefined
        });
      } else {
        checks.push({
          name: 'Title tag',
          status: 'fail',
          message: 'Empty title tag found'
        });
      }
    } else {
      checks.push({
        name: 'Title tag',
        status: 'fail',
        message: 'No title tag found'
      });
    }
    
    // Meta description check
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      if (description && description !== '') {
        checks.push({
          name: 'Meta description',
          status: description.length >= 150 && description.length <= 160 ? 'pass' : 'warning',
          message: `Meta description found (${description.length} chars)`,
          details: description.length < 120 ? 'Description is shorter than recommended 150-160 characters' : 
                   description.length > 160 ? 'Description is longer than recommended 150-160 characters' : undefined
        });
      } else {
        checks.push({
          name: 'Meta description',
          status: 'fail',
          message: 'Empty meta description found'
        });
      }
    } else {
      checks.push({
        name: 'Meta description',
        status: 'fail',
        message: 'No meta description found'
      });
    }
    
    // Canonical URL check
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"']*)["\'][^>]*>/i);
    if (canonicalMatch) {
      checks.push({
        name: 'Canonical URL',
        status: 'pass',
        message: `Canonical URL found: ${canonicalMatch[1]}`
      });
    } else {
      checks.push({
        name: 'Canonical URL',
        status: 'warning',
        message: 'No canonical URL found'
      });
    }
    
    // Meta viewport check
    const viewportMatch = html.match(/<meta[^>]*name=["\']viewport["\'][^>]*>/i);
    if (viewportMatch) {
      checks.push({
        name: 'Meta viewport',
        status: 'pass',
        message: 'Viewport meta tag found'
      });
    } else {
      checks.push({
        name: 'Meta viewport',
        status: 'fail',
        message: 'No viewport meta tag found'
      });
    }
    
    // H1 tag check
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    
    if (h1Count === 0) {
      checks.push({
        name: 'H1 heading',
        status: 'fail',
        message: 'No H1 heading found'
      });
    } else if (h1Count === 1) {
      const h1Text = h1Match ? h1Match[1].trim() : '';
      checks.push({
        name: 'H1 heading',
        status: 'pass',
        message: `One H1 heading found: "${h1Text}"`
      });
    } else {
      checks.push({
        name: 'H1 heading',
        status: 'warning',
        message: `Multiple H1 headings found (${h1Count})`
      });
    }
    
    // Image alt text check
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    const imagesWithoutAlt = imgTags.filter(img => !img.includes('alt=') || img.includes('alt=""') || img.includes("alt=''")).length;
    const totalImages = imgTags.length;
    
    if (totalImages === 0) {
      checks.push({
        name: 'Image alt text',
        status: 'pass',
        message: 'No images found'
      });
    } else if (imagesWithoutAlt === 0) {
      checks.push({
        name: 'Image alt text',
        status: 'pass',
        message: `All ${totalImages} images have alt text`
      });
    } else {
      checks.push({
        name: 'Image alt text',
        status: 'warning',
        message: `${imagesWithoutAlt}/${totalImages} images missing alt text`
      });
    }
    
    // Robots meta tag check
    const robotsMatch = html.match(/<meta[^>]*name=["\']robots["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (robotsMatch) {
      const robotsContent = robotsMatch[1];
      if (robotsContent.includes('noindex')) {
        checks.push({
          name: 'Robots meta',
          status: 'warning',
          message: `Robots meta found with noindex: ${robotsContent}`
        });
      } else {
        checks.push({
          name: 'Robots meta',
          status: 'pass',
          message: `Robots meta found: ${robotsContent}`
        });
      }
    } else {
      checks.push({
        name: 'Robots meta',
        status: 'pass',
        message: 'No robots meta (allows indexing by default)'
      });
    }
    
    // Structured data check (basic)
    const structuredDataCount = (html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || []).length;
    if (structuredDataCount > 0) {
      checks.push({
        name: 'Structured data',
        status: 'pass',
        message: `${structuredDataCount} JSON-LD structured data block(s) found`
      });
    } else {
      checks.push({
        name: 'Structured data',
        status: 'warning',
        message: 'No JSON-LD structured data found'
      });
    }
    
  } catch (error) {
    console.error(`Error testing ${url}:`, error);
    checks.push({
      name: 'Connection',
      status: 'fail',
      message: `Failed to fetch page: ${error instanceof Error ? error.message : 'Unknown error'}`
    });
  }
  
  // Calculate score
  const passCount = checks.filter(c => c.status === 'pass').length;
  const totalChecks = checks.length;
  const score = Math.round((passCount / totalChecks) * 100);
  
  return { url, checks, score };
}

async function generateReport(reports: SEOReport[]) {
  let output = '# SEO Test Report\n\n';
  output += `Generated: ${new Date().toISOString()}\n\n`;
  
  // Summary
  const avgScore = Math.round(reports.reduce((sum, r) => sum + r.score, 0) / reports.length);
  output += `## Summary\n\n`;
  output += `- **Average Score**: ${avgScore}%\n`;
  output += `- **Pages tested**: ${reports.length}\n`;
  output += `- **Pages passing (80%+)**: ${reports.filter(r => r.score >= 80).length}\n\n`;
  
  // Detailed results
  for (const report of reports) {
    output += `## ${report.url}\n\n`;
    output += `**Score: ${report.score}%**\n\n`;
    
    for (const check of report.checks) {
      const emoji = check.status === 'pass' ? '✅' : check.status === 'warning' ? '⚠️' : '❌';
      output += `${emoji} **${check.name}**: ${check.message}`;
      if (check.details) {
        output += `\n   - ${check.details}`;
      }
      output += '\n\n';
    }
  }
  
  return output;
}

async function main() {
  console.log('🔍 Starting SEO testing...\n');
  
  // Test if dev server is running
  try {
    await fetch('http://localhost:3000');
  } catch (error) {
    console.error('❌ Development server not running on http://localhost:3000');
    console.error('Please start the dev server with: npm run dev');
    process.exit(1);
  }
  
  const reports: SEOReport[] = [];
  
  for (const url of TEST_URLS) {
    const report = await testPageSEO(url);
    reports.push(report);
    
    const statusEmoji = report.score >= 80 ? '✅' : report.score >= 60 ? '⚠️' : '❌';
    console.log(`${statusEmoji} ${url}: ${report.score}%`);
  }
  
  console.log('\n📊 Generating detailed report...');
  
  const reportContent = await generateReport(reports);
  const reportPath = path.join(process.cwd(), 'seo-test-report.md');
  
  await fs.writeFile(reportPath, reportContent);
  console.log(`✅ Report saved to: ${reportPath}`);
  
  const avgScore = Math.round(reports.reduce((sum, r) => sum + r.score, 0) / reports.length);
  console.log(`\n🎯 Average SEO Score: ${avgScore}%`);
  
  if (avgScore >= 80) {
    console.log('🎉 Great job! Your SEO is looking good.');
  } else if (avgScore >= 60) {
    console.log('👍 Good foundation, but there\'s room for improvement.');
  } else {
    console.log('⚡ Focus needed on SEO improvements.');
  }
}

if (require.main === module) {
  main().catch(console.error);
}