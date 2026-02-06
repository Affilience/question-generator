#!/usr/bin/env node

/**
 * Comprehensive SEO Audit Script
 * 
 * Tests all key page types for SEO optimization
 */

import { promises as fs } from 'fs';
import path from 'path';

interface SEOCheck {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
  score: number;
}

interface SEOReport {
  url: string;
  pageType: string;
  checks: SEOCheck[];
  score: number;
  recommendations: string[];
}

// Comprehensive list of URLs to test by category
const TEST_URLS: { [category: string]: string[] } = {
  'Marketing Pages': [
    'http://localhost:3000',
    'http://localhost:3000/pricing', 
    'http://localhost:3000/paper-generator',
    'http://localhost:3000/past-papers',
    'http://localhost:3000/blog'
  ],
  'Level Pages': [
    'http://localhost:3000/gcse',
    'http://localhost:3000/a-level'
  ],
  'Subject Pages': [
    'http://localhost:3000/gcse/maths',
    'http://localhost:3000/gcse/physics', 
    'http://localhost:3000/gcse/chemistry',
    'http://localhost:3000/a-level/maths',
    'http://localhost:3000/a-level/physics'
  ],
  'Exam Board Pages': [
    'http://localhost:3000/gcse/maths/aqa',
    'http://localhost:3000/gcse/maths/edexcel',
    'http://localhost:3000/a-level/maths/aqa'
  ],
  'Topic Pages': [
    'http://localhost:3000/gcse/maths/aqa/number',
    'http://localhost:3000/gcse/maths/aqa/algebra',
    'http://localhost:3000/gcse/physics/aqa/forces'
  ],
  'Subtopic Pages': [
    'http://localhost:3000/gcse/maths/aqa/number/fractions',
    'http://localhost:3000/gcse/maths/aqa/algebra/quadratics'
  ]
};

async function testPageSEO(url: string, pageType: string): Promise<SEOReport> {
  const checks: SEOCheck[] = [];
  const recommendations: string[] = [];
  
  try {
    console.log(`Testing ${pageType}: ${url}...`);
    const response = await fetch(url);
    const html = await response.text();
    
    // 1. Page Load Check
    if (response.ok) {
      checks.push({
        name: 'Page loads',
        status: 'pass',
        message: `Page loads successfully (${response.status})`,
        score: 15
      });
    } else {
      checks.push({
        name: 'Page loads',
        status: 'fail',
        message: `Page failed to load (${response.status})`,
        score: 0
      });
      return { url, pageType, checks, score: 0, recommendations };
    }
    
    // 2. Title Tag Analysis
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      if (title && title !== '') {
        let score = 10;
        let status: 'pass' | 'warning' = 'pass';
        let details = '';
        
        if (title.length > 60) {
          status = 'warning';
          score = 7;
          details = `Title is ${title.length} chars (recommended: ≤60)`;
          recommendations.push(`Shorten title to ≤60 characters. Current: ${title.length}`);
        } else if (title.length < 30) {
          status = 'warning';
          score = 7;
          details = `Title is ${title.length} chars (recommended: 30-60)`;
          recommendations.push(`Expand title to 30-60 characters for better SEO. Current: ${title.length}`);
        }
        
        // Check for keyword stuffing
        const words = title.toLowerCase().split(/\s+/);
        const wordCounts = words.reduce((acc: {[key: string]: number}, word) => {
          acc[word] = (acc[word] || 0) + 1;
          return acc;
        }, {});
        
        const hasRepeatedWords = Object.values(wordCounts).some(count => count > 2);
        if (hasRepeatedWords) {
          status = 'warning';
          score = 6;
          details += '. Potential keyword stuffing detected';
          recommendations.push('Avoid repeating keywords more than twice in title');
        }
        
        checks.push({
          name: 'Title tag',
          status,
          message: `"${title}" (${title.length} chars)`,
          details,
          score
        });
      } else {
        checks.push({
          name: 'Title tag',
          status: 'fail',
          message: 'Empty title tag found',
          score: 0
        });
        recommendations.push('Add a descriptive title tag');
      }
    } else {
      checks.push({
        name: 'Title tag',
        status: 'fail',
        message: 'No title tag found',
        score: 0
      });
      recommendations.push('Add a title tag');
    }
    
    // 3. Meta Description Analysis
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      if (description && description !== '') {
        let score = 10;
        let status: 'pass' | 'warning' = 'pass';
        let details = '';
        
        if (description.length < 120) {
          status = 'warning';
          score = 6;
          details = `Too short (${description.length} chars, recommended: 150-160)`;
          recommendations.push(`Expand meta description to 150-160 characters. Current: ${description.length}`);
        } else if (description.length > 160) {
          status = 'warning';
          score = 7;
          details = `Too long (${description.length} chars, recommended: 150-160)`;
          recommendations.push(`Shorten meta description to 150-160 characters. Current: ${description.length}`);
        }
        
        checks.push({
          name: 'Meta description',
          status,
          message: `${description.length} chars`,
          details,
          score
        });
      } else {
        checks.push({
          name: 'Meta description',
          status: 'fail',
          message: 'Empty meta description found',
          score: 0
        });
        recommendations.push('Add a descriptive meta description');
      }
    } else {
      checks.push({
        name: 'Meta description',
        status: 'fail',
        message: 'No meta description found',
        score: 0
      });
      recommendations.push('Add a meta description');
    }
    
    // 4. H1 Tag Analysis
    const h1Matches = html.match(/<h1[^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/h1>/gi);
    const h1Count = h1Matches ? h1Matches.length : 0;
    
    if (h1Count === 0) {
      checks.push({
        name: 'H1 heading',
        status: 'fail',
        message: 'No H1 heading found',
        score: 0
      });
      recommendations.push('Add an H1 heading to describe the main page content');
    } else if (h1Count === 1) {
      const h1Text = h1Matches![0].replace(/<[^>]*>/g, '').trim();
      let score = 10;
      let status: 'pass' | 'warning' = 'pass';
      
      if (!h1Text || h1Text.length === 0) {
        status = 'warning';
        score = 5;
        recommendations.push('H1 tag is empty - add descriptive text');
      } else if (h1Text.length > 60) {
        status = 'warning';
        score = 8;
        recommendations.push('H1 is quite long - consider shortening for better UX');
      }
      
      checks.push({
        name: 'H1 heading',
        status,
        message: `"${h1Text}" (${h1Text.length} chars)`,
        score
      });
    } else {
      checks.push({
        name: 'H1 heading',
        status: 'warning',
        message: `Multiple H1 headings found (${h1Count})`,
        score: 5
      });
      recommendations.push('Use only one H1 heading per page');
    }
    
    // 5. Heading Structure Analysis
    const headings = html.match(/<h[1-6][^>]*>([^<]*(?:<[^>]*>[^<]*)*)<\/h[1-6]>/gi) || [];
    const headingLevels = headings.map(h => {
      const level = h.match(/<h([1-6])/i)?.[1];
      const text = h.replace(/<[^>]*>/g, '').trim();
      return { level: parseInt(level || '0'), text };
    });
    
    let structureScore = 10;
    let structureStatus: 'pass' | 'warning' = 'pass';
    const structureIssues: string[] = [];
    
    for (let i = 1; i < headingLevels.length; i++) {
      const current = headingLevels[i];
      const previous = headingLevels[i - 1];
      
      if (current.level > previous.level + 1) {
        structureIssues.push(`H${current.level} follows H${previous.level} (skips levels)`);
        structureScore -= 2;
      }
    }
    
    if (structureIssues.length > 0) {
      structureStatus = 'warning';
      recommendations.push('Fix heading hierarchy - don\'t skip heading levels');
    }
    
    checks.push({
      name: 'Heading structure',
      status: structureStatus,
      message: `${headings.length} headings found`,
      details: structureIssues.length > 0 ? structureIssues.join(', ') : undefined,
      score: Math.max(structureScore, 0)
    });
    
    // 6. Canonical URL Check
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"']*)["\'][^>]*>/i);
    if (canonicalMatch) {
      const canonicalUrl = canonicalMatch[1];
      checks.push({
        name: 'Canonical URL',
        status: 'pass',
        message: `Found: ${canonicalUrl}`,
        score: 10
      });
    } else {
      checks.push({
        name: 'Canonical URL',
        status: 'warning',
        message: 'No canonical URL found',
        score: 5
      });
      recommendations.push('Add canonical URL to prevent duplicate content issues');
    }
    
    // 7. Meta Viewport Check
    const viewportMatch = html.match(/<meta[^>]*name=["\']viewport["\'][^>]*>/i);
    if (viewportMatch) {
      checks.push({
        name: 'Meta viewport',
        status: 'pass',
        message: 'Viewport meta tag found',
        score: 10
      });
    } else {
      checks.push({
        name: 'Meta viewport',
        status: 'fail',
        message: 'No viewport meta tag found',
        score: 0
      });
      recommendations.push('Add viewport meta tag for mobile optimization');
    }
    
    // 8. Image Alt Text Analysis
    const imgTags = html.match(/<img[^>]*>/gi) || [];
    const imagesWithoutAlt = imgTags.filter(img => 
      !img.includes('alt=') || 
      img.includes('alt=""') || 
      img.includes("alt=''") ||
      img.match(/alt=["'][^"']*["']/)?.[0]?.replace(/alt=["'](.*)["']/, '$1')?.trim() === ''
    ).length;
    const totalImages = imgTags.length;
    
    if (totalImages === 0) {
      checks.push({
        name: 'Image alt text',
        status: 'pass',
        message: 'No images found',
        score: 10
      });
    } else if (imagesWithoutAlt === 0) {
      checks.push({
        name: 'Image alt text',
        status: 'pass',
        message: `All ${totalImages} images have alt text`,
        score: 10
      });
    } else {
      const percentage = Math.round((1 - imagesWithoutAlt / totalImages) * 100);
      checks.push({
        name: 'Image alt text',
        status: 'warning',
        message: `${imagesWithoutAlt}/${totalImages} images missing alt text (${percentage}% covered)`,
        score: Math.round((totalImages - imagesWithoutAlt) / totalImages * 10)
      });
      recommendations.push(`Add alt text to ${imagesWithoutAlt} images for accessibility`);
    }
    
    // 9. Internal Links Analysis
    const internalLinks = html.match(/<a[^>]*href=["']\/[^"']*["'][^>]*>/gi) || [];
    const totalLinks = html.match(/<a[^>]*href=["'][^"']*["'][^>]*>/gi) || [];
    
    let linkScore = 10;
    let linkStatus: 'pass' | 'warning' = 'pass';
    
    if (internalLinks.length === 0) {
      linkScore = 2;
      linkStatus = 'warning';
      recommendations.push('Add internal links to improve site navigation and SEO');
    } else if (internalLinks.length < 3) {
      linkScore = 6;
      linkStatus = 'warning';
      recommendations.push('Add more internal links to improve site navigation');
    }
    
    checks.push({
      name: 'Internal links',
      status: linkStatus,
      message: `${internalLinks.length} internal links found (${totalLinks.length} total)`,
      score: linkScore
    });
    
    // 10. Structured Data Check
    const structuredDataMatches = html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || [];
    if (structuredDataMatches.length > 0) {
      checks.push({
        name: 'Structured data',
        status: 'pass',
        message: `${structuredDataMatches.length} JSON-LD blocks found`,
        score: 10
      });
    } else {
      checks.push({
        name: 'Structured data',
        status: 'warning',
        message: 'No JSON-LD structured data found',
        score: 6
      });
      recommendations.push('Add structured data markup for better search results');
    }
    
    // 11. Page Speed Indicators
    const hasInlineCSS = html.includes('<style');
    const externalCSSCount = (html.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;
    const scriptCount = (html.match(/<script[^>]*src=[^>]*>/gi) || []).length;
    
    let speedScore = 10;
    let speedStatus: 'pass' | 'warning' = 'pass';
    const speedIssues: string[] = [];
    
    if (externalCSSCount > 3) {
      speedIssues.push(`${externalCSSCount} external CSS files`);
      speedScore -= 2;
      speedStatus = 'warning';
      recommendations.push('Consider combining CSS files to reduce HTTP requests');
    }
    
    if (scriptCount > 5) {
      speedIssues.push(`${scriptCount} external scripts`);
      speedScore -= 2;
      speedStatus = 'warning';
      recommendations.push('Consider combining/minifying JavaScript files');
    }
    
    checks.push({
      name: 'Performance indicators',
      status: speedStatus,
      message: speedIssues.length ? speedIssues.join(', ') : 'Good performance indicators',
      score: Math.max(speedScore, 0)
    });
    
  } catch (error) {
    console.error(`Error testing ${url}:`, error);
    checks.push({
      name: 'Connection',
      status: 'fail',
      message: `Failed to fetch page: ${error instanceof Error ? error.message : 'Unknown error'}`,
      score: 0
    });
  }
  
  // Calculate overall score
  const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
  const maxScore = checks.length * 10;
  const score = Math.round((totalScore / maxScore) * 100);
  
  return { url, pageType, checks, score, recommendations };
}

async function generateComprehensiveReport(allReports: SEOReport[]) {
  let output = '# Comprehensive SEO Audit Report\n\n';
  output += `Generated: ${new Date().toISOString()}\n\n`;
  
  // Executive Summary
  const avgScore = Math.round(allReports.reduce((sum, r) => sum + r.score, 0) / allReports.length);
  const excellentPages = allReports.filter(r => r.score >= 90).length;
  const goodPages = allReports.filter(r => r.score >= 80 && r.score < 90).length;
  const needsImprovementPages = allReports.filter(r => r.score < 80).length;
  
  output += `## Executive Summary\n\n`;
  output += `- **Average SEO Score**: ${avgScore}%\n`;
  output += `- **Total Pages Audited**: ${allReports.length}\n`;
  output += `- **Excellent (90%+)**: ${excellentPages} pages\n`;
  output += `- **Good (80-89%)**: ${goodPages} pages\n`;
  output += `- **Needs Improvement (<80%)**: ${needsImprovementPages} pages\n\n`;
  
  // Category Breakdown
  output += `## Performance by Category\n\n`;
  const categories = Object.keys(TEST_URLS);
  for (const category of categories) {
    const categoryReports = allReports.filter(r => TEST_URLS[category].includes(r.url));
    if (categoryReports.length > 0) {
      const categoryAvg = Math.round(categoryReports.reduce((sum, r) => sum + r.score, 0) / categoryReports.length);
      output += `### ${category}: ${categoryAvg}%\n`;
      categoryReports.forEach(r => {
        const emoji = r.score >= 90 ? '🟢' : r.score >= 80 ? '🟡' : '🔴';
        output += `- ${emoji} ${r.url.replace('http://localhost:3000', '')}: ${r.score}%\n`;
      });
      output += '\n';
    }
  }
  
  // Top Issues
  const allRecommendations = allReports.flatMap(r => r.recommendations);
  const recommendationCounts = allRecommendations.reduce((acc: {[key: string]: number}, rec) => {
    acc[rec] = (acc[rec] || 0) + 1;
    return acc;
  }, {});
  
  const topIssues = Object.entries(recommendationCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
  
  if (topIssues.length > 0) {
    output += `## Most Common Issues\n\n`;
    topIssues.forEach(([issue, count]) => {
      output += `${count}. **${issue}** (affects ${count} page${count > 1 ? 's' : ''})\n`;
    });
    output += '\n';
  }
  
  // Detailed Reports
  output += `## Detailed Page Reports\n\n`;
  
  for (const category of categories) {
    const categoryReports = allReports.filter(r => TEST_URLS[category].includes(r.url));
    if (categoryReports.length > 0) {
      output += `### ${category}\n\n`;
      
      for (const report of categoryReports.sort((a, b) => b.score - a.score)) {
        const emoji = report.score >= 90 ? '🟢' : report.score >= 80 ? '🟡' : '🔴';
        output += `#### ${emoji} ${report.url.replace('http://localhost:3000', '') || '/'}\n`;
        output += `**Score: ${report.score}%**\n\n`;
        
        for (const check of report.checks) {
          const checkEmoji = check.status === 'pass' ? '✅' : check.status === 'warning' ? '⚠️' : '❌';
          output += `${checkEmoji} **${check.name}**: ${check.message}`;
          if (check.details) {
            output += `\n   - ${check.details}`;
          }
          output += '\n\n';
        }
        
        if (report.recommendations.length > 0) {
          output += '**Recommendations:**\n';
          report.recommendations.forEach(rec => {
            output += `- ${rec}\n`;
          });
          output += '\n';
        }
        
        output += '---\n\n';
      }
    }
  }
  
  return output;
}

async function main() {
  console.log('🔍 Starting comprehensive SEO audit...\n');
  
  // Test if dev server is running
  try {
    await fetch('http://localhost:3000');
  } catch (error) {
    console.error('❌ Development server not running on http://localhost:3000');
    console.error('Please start the dev server with: npm run dev');
    process.exit(1);
  }
  
  const allReports: SEOReport[] = [];
  
  for (const [category, urls] of Object.entries(TEST_URLS)) {
    console.log(`\n📊 Testing ${category}...`);
    
    for (const url of urls) {
      try {
        const report = await testPageSEO(url, category);
        allReports.push(report);
        
        const statusEmoji = report.score >= 90 ? '🟢' : report.score >= 80 ? '🟡' : '🔴';
        console.log(`${statusEmoji} ${url.replace('http://localhost:3000', '') || '/'}: ${report.score}%`);
      } catch (error) {
        console.error(`❌ Failed to test ${url}:`, error);
      }
    }
  }
  
  console.log('\n📋 Generating comprehensive report...');
  
  const reportContent = await generateComprehensiveReport(allReports);
  const reportPath = path.join(process.cwd(), 'comprehensive-seo-audit.md');
  
  await fs.writeFile(reportPath, reportContent);
  console.log(`✅ Report saved to: ${reportPath}`);
  
  const avgScore = Math.round(allReports.reduce((sum, r) => sum + r.score, 0) / allReports.length);
  console.log(`\n🎯 Overall SEO Score: ${avgScore}%`);
  
  const excellentCount = allReports.filter(r => r.score >= 90).length;
  const goodCount = allReports.filter(r => r.score >= 80 && r.score < 90).length;
  const needsWorkCount = allReports.filter(r => r.score < 80).length;
  
  console.log(`📊 Page Performance:`);
  console.log(`   🟢 Excellent (90%+): ${excellentCount}`);
  console.log(`   🟡 Good (80-89%): ${goodCount}`);
  console.log(`   🔴 Needs Work (<80%): ${needsWorkCount}`);
  
  if (avgScore >= 90) {
    console.log('\n🎉 Outstanding! Your SEO is excellent across the board.');
  } else if (avgScore >= 80) {
    console.log('\n👍 Good SEO foundation, with some room for optimization.');
  } else if (avgScore >= 70) {
    console.log('\n⚡ Decent start, but significant SEO improvements needed.');
  } else {
    console.log('\n🚨 Critical SEO issues detected. Immediate optimization required.');
  }
}

if (require.main === module) {
  main().catch(console.error);
}