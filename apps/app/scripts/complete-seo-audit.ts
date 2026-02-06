#!/usr/bin/env node

/**
 * Complete SEO Audit Script - Tests ALL indexed pages
 * 
 * Fetches every URL from sitemap.xml and performs comprehensive SEO analysis
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
  checks: SEOCheck[];
  score: number;
  recommendations: string[];
}

interface CategoryStats {
  name: string;
  totalPages: number;
  averageScore: number;
  excellentCount: number; // 90%+
  goodCount: number; // 80-89%
  needsWorkCount: number; // <80%
  worstPages: { url: string; score: number }[];
  bestPages: { url: string; score: number }[];
}

// Categorize URLs by type
const categorizeUrl = (url: string): string => {
  const cleanUrl = url.replace('https://www.past-papers.co.uk', '');
  
  if (cleanUrl === '' || cleanUrl === '/') return 'Homepage';
  if (cleanUrl.match(/^\/pricing$/)) return 'Marketing';
  if (cleanUrl.match(/^\/paper-generator$/)) return 'Marketing'; 
  if (cleanUrl.match(/^\/past-papers$/)) return 'Marketing';
  if (cleanUrl.match(/^\/blog$/)) return 'Marketing';
  if (cleanUrl.match(/^\/start$/)) return 'Marketing';
  if (cleanUrl.match(/^\/privacy$/)) return 'Legal';
  if (cleanUrl.match(/^\/terms$/)) return 'Legal';
  
  if (cleanUrl.match(/^\/gcse$/)) return 'Level Pages';
  if (cleanUrl.match(/^\/a-level$/)) return 'Level Pages';
  
  if (cleanUrl.match(/^\/gcse\/[^\/]+$/)) return 'GCSE Subject Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+$/)) return 'A-Level Subject Pages';
  
  if (cleanUrl.match(/^\/gcse\/[^\/]+\/[^\/]+$/)) return 'GCSE Exam Board Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+\/[^\/]+$/)) return 'A-Level Exam Board Pages';
  
  if (cleanUrl.match(/^\/gcse\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'GCSE Topic Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'A-Level Topic Pages';
  
  if (cleanUrl.match(/^\/gcse\/[^\/]+\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'GCSE Subtopic Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'A-Level Subtopic Pages';
  
  if (cleanUrl.match(/\/practicals\//)) return 'Practicals Pages';
  if (cleanUrl.match(/\/practice\//)) return 'Practice Pages';
  if (cleanUrl.match(/\/paper\//)) return 'Paper Generator Pages';
  
  return 'Other';
};

const fetchSitemapUrls = async (): Promise<string[]> => {
  try {
    console.log('📥 Fetching sitemap...');
    const response = await fetch('http://localhost:3000/sitemap.xml');
    const xml = await response.text();
    
    const urls = xml.match(/https:\/\/www\.past-papers\.co\.uk[^<]*/g) || [];
    console.log(`📋 Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (error) {
    console.error('❌ Failed to fetch sitemap:', error);
    return [];
  }
};

const testPageSEO = async (url: string): Promise<SEOReport> => {
  const checks: SEOCheck[] = [];
  const recommendations: string[] = [];
  
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    const response = await fetch(localUrl);
    const html = await response.text();
    
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
      let status: 'pass' | 'warning' = 'pass';
      
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
    } else {
      checks.push({
        name: 'Title tag',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add a title tag');
    }
    
    // 3. Meta Description Analysis
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      let score = 10;
      let status: 'pass' | 'warning' = 'pass';
      
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
    } else {
      checks.push({
        name: 'Meta description',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add a meta description');
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
    } else if (h1Count === 0) {
      checks.push({
        name: 'H1 heading',
        status: 'fail',
        message: 'Missing',
        score: 0
      });
      recommendations.push('Add an H1 heading');
    } else {
      checks.push({
        name: 'H1 heading',
        status: 'warning',
        message: `${h1Count} found`,
        score: 5
      });
      recommendations.push('Use only one H1 heading per page');
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
    } else {
      checks.push({
        name: 'Canonical URL',
        status: 'warning',
        message: 'Missing',
        score: 5
      });
      recommendations.push('Add canonical URL');
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
    } else {
      checks.push({
        name: 'Structured data',
        status: 'warning',
        message: 'Missing',
        score: 6
      });
      recommendations.push('Add structured data markup');
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
    
    // Calculate total score
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    // Correct max score calculation: Page loads = 15, all others = 10
    const maxScore = 15 + (checks.length - 1) * 10; // 15 for page loads + 10 for each other check
    const score = Math.round((totalScore / maxScore) * 100);
    
    // Debug logging for problematic scores
    if (score === 0 && checks.length > 1) {
      console.log(`🔍 DEBUG: ${url} scored 0% unexpectedly`);
      console.log(`  Total score: ${totalScore}, Max score: ${maxScore}`);
      console.log(`  Checks: ${checks.map(c => `${c.name}: ${c.score}`).join(', ')}`);
    }
    
    return { url, checks, score, recommendations };
    
  } catch (error) {
    console.log(`❌ Error testing ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return {
      url,
      checks: [{
        name: 'Error',
        status: 'fail',
        message: `Failed to test: ${error instanceof Error ? error.message : 'Unknown error'}`,
        score: 0
      }],
      score: 0,
      recommendations: ['Fix technical issues with page']
    };
  }
};

const generateCategoryStats = (reports: SEOReport[]): CategoryStats[] => {
  const categories = new Map<string, SEOReport[]>();
  
  // Group reports by category
  for (const report of reports) {
    const category = categorizeUrl(report.url);
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push(report);
  }
  
  // Generate stats for each category
  const stats: CategoryStats[] = [];
  
  for (const [categoryName, categoryReports] of categories) {
    const totalPages = categoryReports.length;
    const averageScore = Math.round(
      categoryReports.reduce((sum, r) => sum + r.score, 0) / totalPages
    );
    const excellentCount = categoryReports.filter(r => r.score >= 90).length;
    const goodCount = categoryReports.filter(r => r.score >= 80 && r.score < 90).length;
    const needsWorkCount = categoryReports.filter(r => r.score < 80).length;
    
    const sortedReports = [...categoryReports].sort((a, b) => b.score - a.score);
    const bestPages = sortedReports.slice(0, 3).map(r => ({ 
      url: r.url.replace('https://www.past-papers.co.uk', ''), 
      score: r.score 
    }));
    const worstPages = sortedReports.slice(-3).map(r => ({ 
      url: r.url.replace('https://www.past-papers.co.uk', ''), 
      score: r.score 
    }));
    
    stats.push({
      name: categoryName,
      totalPages,
      averageScore,
      excellentCount,
      goodCount,
      needsWorkCount,
      bestPages,
      worstPages
    });
  }
  
  return stats.sort((a, b) => b.averageScore - a.averageScore);
};

const generateComprehensiveReport = async (reports: SEOReport[]): Promise<string> => {
  const categoryStats = generateCategoryStats(reports);
  const overallAverage = Math.round(reports.reduce((sum, r) => sum + r.score, 0) / reports.length);
  const totalExcellent = reports.filter(r => r.score >= 90).length;
  const totalGood = reports.filter(r => r.score >= 80 && r.score < 90).length;
  const totalNeedsWork = reports.filter(r => r.score < 80).length;
  
  let output = '# Complete SEO Audit Report - ALL INDEXED PAGES\n\n';
  output += `Generated: ${new Date().toISOString()}\n\n`;
  
  // Executive Summary
  output += `## 🎯 Executive Summary\n\n`;
  output += `- **Total Pages Audited**: ${reports.length.toLocaleString()}\n`;
  output += `- **Overall Average SEO Score**: ${overallAverage}%\n`;
  output += `- **🟢 Excellent (90%+)**: ${totalExcellent.toLocaleString()} pages (${Math.round(totalExcellent/reports.length*100)}%)\n`;
  output += `- **🟡 Good (80-89%)**: ${totalGood.toLocaleString()} pages (${Math.round(totalGood/reports.length*100)}%)\n`;
  output += `- **🔴 Needs Work (<80%)**: ${totalNeedsWork.toLocaleString()} pages (${Math.round(totalNeedsWork/reports.length*100)}%)\n\n`;
  
  // Category Performance
  output += `## 📊 Performance by Category\n\n`;
  for (const category of categoryStats) {
    output += `### ${category.name}: ${category.averageScore}% (${category.totalPages.toLocaleString()} pages)\n`;
    output += `- 🟢 Excellent: ${category.excellentCount.toLocaleString()} (${Math.round(category.excellentCount/category.totalPages*100)}%)\n`;
    output += `- 🟡 Good: ${category.goodCount.toLocaleString()} (${Math.round(category.goodCount/category.totalPages*100)}%)\n`;
    output += `- 🔴 Needs Work: ${category.needsWorkCount.toLocaleString()} (${Math.round(category.needsWorkCount/category.totalPages*100)}%)\n`;
    
    if (category.bestPages.length > 0) {
      output += `- **Best Pages**: ${category.bestPages.map(p => `${p.url} (${p.score}%)`).join(', ')}\n`;
    }
    if (category.worstPages.length > 0 && category.worstPages[0].score < 80) {
      output += `- **Needs Attention**: ${category.worstPages.map(p => `${p.url} (${p.score}%)`).join(', ')}\n`;
    }
    output += '\n';
  }
  
  // Top Issues Analysis
  const allRecommendations = reports.flatMap(r => r.recommendations);
  const recommendationCounts = allRecommendations.reduce((acc: {[key: string]: number}, rec) => {
    acc[rec] = (acc[rec] || 0) + 1;
    return acc;
  }, {});
  
  const topIssues = Object.entries(recommendationCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 15);
  
  if (topIssues.length > 0) {
    output += `## 🚨 Top Issues Across All Pages\n\n`;
    topIssues.forEach(([issue, count], index) => {
      output += `${index + 1}. **${issue}** - ${count.toLocaleString()} pages (${Math.round(count/reports.length*100)}%)\n`;
    });
    output += '\n';
  }
  
  // Pages Needing Immediate Attention
  const criticalPages = reports.filter(r => r.score < 70).sort((a, b) => a.score - b.score);
  if (criticalPages.length > 0) {
    output += `## ⚠️ Critical Pages Needing Immediate Attention\n\n`;
    for (const page of criticalPages.slice(0, 20)) {
      const shortUrl = page.url.replace('https://www.past-papers.co.uk', '');
      output += `### ${shortUrl} (${page.score}%)\n`;
      output += `**Issues**: ${page.recommendations.join(', ')}\n\n`;
    }
  }
  
  // Best Performing Pages
  const topPages = reports.filter(r => r.score >= 95).sort((a, b) => b.score - a.score);
  if (topPages.length > 0) {
    output += `## 🏆 Top Performing Pages (Examples to Follow)\n\n`;
    for (const page of topPages.slice(0, 10)) {
      const shortUrl = page.url.replace('https://www.past-papers.co.uk', '');
      output += `- **${shortUrl}**: ${page.score}%\n`;
    }
    output += '\n';
  }
  
  return output;
};

const main = async () => {
  console.log('🔍 Starting COMPLETE SEO audit of ALL indexed pages...\n');
  
  // Test if dev server is running
  try {
    await fetch('http://localhost:3000');
  } catch (error) {
    console.error('❌ Development server not running on http://localhost:3000');
    console.error('Please start the dev server with: npm run dev');
    process.exit(1);
  }
  
  // Fetch all URLs from sitemap
  const urls = await fetchSitemapUrls();
  if (urls.length === 0) {
    console.error('❌ No URLs found in sitemap');
    process.exit(1);
  }
  
  console.log(`🚀 Starting audit of ${urls.length.toLocaleString()} pages...\n`);
  
  const reports: SEOReport[] = [];
  const batchSize = 50; // Process in batches to avoid overwhelming the server
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(urls.length / batchSize);
    
    console.log(`📦 Processing batch ${batchNumber}/${totalBatches} (${batch.length} pages)...`);
    
    // Process batch with controlled concurrency
    const batchPromises = batch.map(async (url, index) => {
      // Add small delay to avoid overwhelming server
      await new Promise(resolve => setTimeout(resolve, index * 10));
      return testPageSEO(url);
    });
    
    const batchReports = await Promise.all(batchPromises);
    reports.push(...batchReports);
    
    // Show progress
    const completed = reports.length;
    const percentage = Math.round((completed / urls.length) * 100);
    console.log(`   ✅ Batch complete. Progress: ${completed.toLocaleString()}/${urls.length.toLocaleString()} (${percentage}%)`);
    
    // Brief pause between batches
    if (i + batchSize < urls.length) {
      console.log('   ⏸️  Brief pause before next batch...\n');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log('\n📋 Generating comprehensive report...');
  
  const reportContent = await generateComprehensiveReport(reports);
  const reportPath = path.join(process.cwd(), 'complete-seo-audit.md');
  
  await fs.writeFile(reportPath, reportContent);
  console.log(`✅ Complete audit report saved to: ${reportPath}`);
  
  // Final summary
  const overallAverage = Math.round(reports.reduce((sum, r) => sum + r.score, 0) / reports.length);
  const excellentCount = reports.filter(r => r.score >= 90).length;
  const goodCount = reports.filter(r => r.score >= 80 && r.score < 90).length;
  const needsWorkCount = reports.filter(r => r.score < 80).length;
  
  console.log(`\n🎯 COMPLETE SEO AUDIT RESULTS:`);
  console.log(`📊 Total Pages: ${reports.length.toLocaleString()}`);
  console.log(`📈 Overall Average: ${overallAverage}%`);
  console.log(`🟢 Excellent (90%+): ${excellentCount.toLocaleString()} (${Math.round(excellentCount/reports.length*100)}%)`);
  console.log(`🟡 Good (80-89%): ${goodCount.toLocaleString()} (${Math.round(goodCount/reports.length*100)}%)`);
  console.log(`🔴 Needs Work (<80%): ${needsWorkCount.toLocaleString()} (${Math.round(needsWorkCount/reports.length*100)}%)`);
  
  if (overallAverage >= 85) {
    console.log('\n🎉 Outstanding! Your site-wide SEO is excellent.');
  } else if (overallAverage >= 75) {
    console.log('\n👍 Good foundation with opportunities for optimization.');
  } else {
    console.log('\n⚡ Significant SEO improvements needed across the site.');
  }
};

if (require.main === module) {
  main().catch(console.error);
}