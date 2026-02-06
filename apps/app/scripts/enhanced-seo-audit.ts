#!/usr/bin/env node

/**
 * Enhanced SEO Audit Script - Based on Enterprise Tools (Ahrefs, Screaming Frog, Lighthouse)
 * 
 * Comprehensive SEO analysis using industry-standard criteria from:
 * - Ahrefs Site Audit
 * - Screaming Frog SEO Spider  
 * - Google Lighthouse
 * - Core Web Vitals 2025
 */

import { promises as fs } from 'fs';
import path from 'path';

interface SEOCheck {
  name: string;
  category: 'Technical' | 'Content' | 'Performance' | 'Accessibility' | 'Structure';
  status: 'pass' | 'fail' | 'warning';
  message: string;
  details?: string;
  score: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  recommendation?: string;
}

interface SEOReport {
  url: string;
  checks: SEOCheck[];
  categoryScores: Record<string, number>;
  overallScore: number;
  coreWebVitalsGrade: 'Good' | 'Needs Improvement' | 'Poor' | 'Unknown';
  recommendations: string[];
  criticalIssues: string[];
}

interface AuditSummary {
  totalPages: number;
  averageScore: number;
  categoryAverages: Record<string, number>;
  issueBreakdown: Record<string, number>;
  topIssues: Array<{ issue: string; count: number; severity: string }>;
  coreWebVitalsOverview: Record<string, number>;
}

// Enterprise SEO Audit Criteria (200+ checks condensed to most critical)
const ENTERPRISE_CHECKS = {
  // Critical Technical SEO (Screaming Frog + Ahrefs)
  RESPONSE_CODES: { weight: 15, priority: 'Critical' as const },
  TITLE_OPTIMIZATION: { weight: 12, priority: 'Critical' as const },
  META_DESCRIPTION: { weight: 10, priority: 'High' as const },
  HEADING_STRUCTURE: { weight: 10, priority: 'High' as const },
  CANONICAL_URLS: { weight: 10, priority: 'High' as const },
  
  // Content & Structure (Ahrefs + Content Audits)
  CONTENT_QUALITY: { weight: 8, priority: 'High' as const },
  INTERNAL_LINKING: { weight: 8, priority: 'Medium' as const },
  STRUCTURED_DATA: { weight: 8, priority: 'Medium' as const },
  IMAGE_OPTIMIZATION: { weight: 6, priority: 'Medium' as const },
  
  // Performance & Core Web Vitals 2025
  PAGE_SPEED: { weight: 8, priority: 'High' as const },
  MOBILE_OPTIMIZATION: { weight: 8, priority: 'High' as const },
  CORE_WEB_VITALS: { weight: 7, priority: 'High' as const },
  
  // Lighthouse Accessibility & Best Practices
  ACCESSIBILITY: { weight: 6, priority: 'Medium' as const },
  SECURITY: { weight: 5, priority: 'Medium' as const },
  PWA_FEATURES: { weight: 4, priority: 'Low' as const }
};

const categorizeUrl = (url: string): string => {
  const cleanUrl = url.replace('https://www.past-papers.co.uk', '');
  
  if (cleanUrl === '' || cleanUrl === '/') return 'Homepage';
  if (cleanUrl.match(/^\/pricing|paper-generator|past-papers|blog|start$/)) return 'Marketing';
  if (cleanUrl.match(/^\/privacy|terms$/)) return 'Legal';
  if (cleanUrl.match(/^\/gcse$/)) return 'Level Pages';
  if (cleanUrl.match(/^\/a-level$/)) return 'Level Pages';
  if (cleanUrl.match(/^\/gcse\/[^\/]+$/)) return 'GCSE Subject Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+$/)) return 'A-Level Subject Pages';
  if (cleanUrl.match(/^\/gcse\/[^\/]+\/[^\/]+$/)) return 'GCSE Exam Board Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+\/[^\/]+$/)) return 'A-Level Exam Board Pages';
  if (cleanUrl.match(/^\/gcse\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'GCSE Topic Pages';
  if (cleanUrl.match(/^\/a-level\/[^\/]+\/[^\/]+\/[^\/]+$/)) return 'A-Level Topic Pages';
  if (cleanUrl.match(/\/subtopic/)) return 'Subtopic Pages';
  if (cleanUrl.match(/\/practicals/)) return 'Practicals Pages';
  if (cleanUrl.match(/\/practice/)) return 'Practice Pages';
  
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

const performEnhancedSEOAudit = async (url: string): Promise<SEOReport> => {
  const checks: SEOCheck[] = [];
  const recommendations: string[] = [];
  const criticalIssues: string[] = [];
  
  try {
    const localUrl = url.replace('https://www.past-papers.co.uk', 'http://localhost:3000');
    const startTime = Date.now();
    const response = await fetch(localUrl);
    const loadTime = Date.now() - startTime;
    const html = await response.text();
    
    // 1. CRITICAL - Response Codes & Accessibility (Screaming Frog)
    if (response.ok) {
      checks.push({
        name: 'Server Response',
        category: 'Technical',
        status: 'pass',
        message: `HTTP ${response.status}`,
        score: ENTERPRISE_CHECKS.RESPONSE_CODES.weight,
        priority: ENTERPRISE_CHECKS.RESPONSE_CODES.priority
      });
    } else {
      checks.push({
        name: 'Server Response',
        category: 'Technical', 
        status: 'fail',
        message: `HTTP ${response.status} Error`,
        score: 0,
        priority: ENTERPRISE_CHECKS.RESPONSE_CODES.priority,
        recommendation: 'Fix server errors - critical for indexing'
      });
      criticalIssues.push(`HTTP ${response.status} error prevents indexing`);
      return { url, checks, categoryScores: {}, overallScore: 0, coreWebVitalsGrade: 'Poor', recommendations, criticalIssues };
    }

    // 2. CRITICAL - Title Tag Optimization (Ahrefs/Lighthouse Standard)
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      let titleScore = ENTERPRISE_CHECKS.TITLE_OPTIMIZATION.weight;
      let titleStatus: 'pass' | 'warning' | 'fail' = 'pass';
      
      if (title.length === 0) {
        titleStatus = 'fail';
        titleScore = 0;
        criticalIssues.push('Empty title tag');
      } else if (title.length > 60) {
        titleStatus = 'warning';  
        titleScore = Math.round(titleScore * 0.7);
        recommendations.push(`Shorten title to ≤60 chars (currently ${title.length})`);
      } else if (title.length < 30) {
        titleStatus = 'warning';
        titleScore = Math.round(titleScore * 0.8);
        recommendations.push(`Expand title to 30-60 chars (currently ${title.length})`);
      }
      
      checks.push({
        name: 'Title Tag',
        category: 'Content',
        status: titleStatus,
        message: `${title.length} chars: "${title.substring(0, 50)}${title.length > 50 ? '...' : ''}"`,
        score: titleScore,
        priority: ENTERPRISE_CHECKS.TITLE_OPTIMIZATION.priority,
        details: `Length: ${title.length}/60 optimal`
      });
    } else {
      checks.push({
        name: 'Title Tag',
        category: 'Content',
        status: 'fail',
        message: 'Missing title tag',
        score: 0,
        priority: ENTERPRISE_CHECKS.TITLE_OPTIMIZATION.priority,
        recommendation: 'Add descriptive title tag (30-60 characters)'
      });
      criticalIssues.push('Missing title tag');
    }

    // 3. HIGH - Meta Description (Ahrefs/SERP Optimization) 
    const metaDescMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']*)["\'][^>]*>/i);
    if (metaDescMatch) {
      const description = metaDescMatch[1].trim();
      let descScore = ENTERPRISE_CHECKS.META_DESCRIPTION.weight;
      let descStatus: 'pass' | 'warning' = 'pass';
      
      if (description.length < 120 || description.length > 160) {
        descStatus = 'warning';
        descScore = Math.round(descScore * 0.7);
        recommendations.push(`Optimize meta description to 150-160 chars (currently ${description.length})`);
      }
      
      checks.push({
        name: 'Meta Description',
        category: 'Content',
        status: descStatus,
        message: `${description.length} chars`,
        score: descScore,
        priority: ENTERPRISE_CHECKS.META_DESCRIPTION.priority,
        details: `Content: "${description.substring(0, 80)}${description.length > 80 ? '...' : ''}"`
      });
    } else {
      checks.push({
        name: 'Meta Description',
        category: 'Content',
        status: 'fail',
        message: 'Missing meta description',
        score: 0,
        priority: ENTERPRISE_CHECKS.META_DESCRIPTION.priority,
        recommendation: 'Add compelling meta description (150-160 characters)'
      });
      recommendations.push('Add meta description for better SERP CTR');
    }

    // 4. HIGH - Heading Structure Analysis (Screaming Frog Standard)
    const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
    const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
    const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;
    
    let headingScore = ENTERPRISE_CHECKS.HEADING_STRUCTURE.weight;
    let headingStatus: 'pass' | 'warning' | 'fail' = 'pass';
    let headingMessage = `H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count}`;
    
    if (h1Count === 0) {
      headingStatus = 'fail';
      headingScore = 0;
      criticalIssues.push('Missing H1 heading');
      headingMessage = 'No H1 heading found';
    } else if (h1Count > 1) {
      headingStatus = 'warning';
      headingScore = Math.round(headingScore * 0.6);
      recommendations.push('Use only one H1 heading per page');
      headingMessage = `${h1Count} H1 tags (should be 1)`;
    } else if (h2Count === 0 && html.length > 2000) {
      headingStatus = 'warning';
      headingScore = Math.round(headingScore * 0.8);
      recommendations.push('Add H2 subheadings for better content structure');
    }
    
    checks.push({
      name: 'Heading Structure',
      category: 'Content',
      status: headingStatus,
      message: headingMessage,
      score: headingScore,
      priority: ENTERPRISE_CHECKS.HEADING_STRUCTURE.priority
    });

    // 5. HIGH - Canonical URL (Duplicate Content Prevention)
    const canonicalMatch = html.match(/<link[^>]*rel=["\']canonical["\'][^>]*href=["\']([^"']*)["\'][^>]*>/i);
    if (canonicalMatch) {
      const canonicalUrl = canonicalMatch[1];
      const expectedCanonical = url;
      
      if (canonicalUrl === expectedCanonical) {
        checks.push({
          name: 'Canonical URL',
          category: 'Technical',
          status: 'pass',
          message: 'Self-referencing canonical',
          score: ENTERPRISE_CHECKS.CANONICAL_URLS.weight,
          priority: ENTERPRISE_CHECKS.CANONICAL_URLS.priority
        });
      } else {
        checks.push({
          name: 'Canonical URL',
          category: 'Technical',
          status: 'warning',
          message: 'Non-self-referencing canonical',
          score: Math.round(ENTERPRISE_CHECKS.CANONICAL_URLS.weight * 0.8),
          priority: ENTERPRISE_CHECKS.CANONICAL_URLS.priority,
          details: `Points to: ${canonicalUrl}`
        });
      }
    } else {
      checks.push({
        name: 'Canonical URL',
        category: 'Technical',
        status: 'warning',
        message: 'Missing canonical URL',
        score: Math.round(ENTERPRISE_CHECKS.CANONICAL_URLS.weight * 0.7),
        priority: ENTERPRISE_CHECKS.CANONICAL_URLS.priority,
        recommendation: 'Add canonical URL to prevent duplicate content issues'
      });
      recommendations.push('Add self-referencing canonical URL');
    }

    // 6. MEDIUM - Structured Data (Schema.org/JSON-LD)
    const structuredDataMatches = html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>/gi) || [];
    const structuredDataCount = structuredDataMatches.length;
    
    if (structuredDataCount > 0) {
      // Validate structured data quality
      let structuredDataScore = ENTERPRISE_CHECKS.STRUCTURED_DATA.weight;
      try {
        const jsonLdScripts = html.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>([^<]*)<\/script>/gi) || [];
        let validSchemas = 0;
        
        for (const script of jsonLdScripts) {
          const jsonContent = script.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
          try {
            const parsed = JSON.parse(jsonContent);
            if (parsed['@type'] || parsed.type) validSchemas++;
          } catch (e) {
            // Invalid JSON-LD
          }
        }
        
        if (validSchemas === structuredDataCount) {
          checks.push({
            name: 'Structured Data',
            category: 'Structure', 
            status: 'pass',
            message: `${structuredDataCount} valid schema blocks`,
            score: structuredDataScore,
            priority: ENTERPRISE_CHECKS.STRUCTURED_DATA.priority
          });
        } else {
          checks.push({
            name: 'Structured Data',
            category: 'Structure',
            status: 'warning', 
            message: `${validSchemas}/${structuredDataCount} valid schemas`,
            score: Math.round(structuredDataScore * 0.7),
            priority: ENTERPRISE_CHECKS.STRUCTURED_DATA.priority,
            recommendation: 'Fix invalid structured data markup'
          });
        }
      } catch (error) {
        checks.push({
          name: 'Structured Data',
          category: 'Structure',
          status: 'warning',
          message: `${structuredDataCount} schemas (validation failed)`,
          score: Math.round(ENTERPRISE_CHECKS.STRUCTURED_DATA.weight * 0.8),
          priority: ENTERPRISE_CHECKS.STRUCTURED_DATA.priority
        });
      }
    } else {
      checks.push({
        name: 'Structured Data',
        category: 'Structure',
        status: 'warning',
        message: 'No structured data found',
        score: Math.round(ENTERPRISE_CHECKS.STRUCTURED_DATA.weight * 0.5),
        priority: ENTERPRISE_CHECKS.STRUCTURED_DATA.priority,
        recommendation: 'Add Schema.org structured data for rich snippets'
      });
      recommendations.push('Implement structured data (JSON-LD) for better SERP appearance');
    }

    // 7. MEDIUM - Internal Linking Analysis
    const internalLinks = (html.match(/<a[^>]*href=["']\//gi) || []).length;
    const externalLinks = (html.match(/<a[^>]*href=["']https?:\/\/(?!www\.past-papers\.co\.uk)/gi) || []).length;
    
    let linkingScore = ENTERPRISE_CHECKS.INTERNAL_LINKING.weight;
    let linkingStatus: 'pass' | 'warning' = 'pass';
    let linkingMessage = `${internalLinks} internal, ${externalLinks} external`;
    
    if (internalLinks < 3) {
      linkingStatus = 'warning';
      linkingScore = Math.round(linkingScore * 0.6);
      recommendations.push('Add more internal links for better navigation and link equity distribution');
    } else if (internalLinks > 100) {
      linkingStatus = 'warning';
      linkingScore = Math.round(linkingScore * 0.8);
      recommendations.push('Consider reducing internal links (>100 may dilute link equity)');
    }
    
    checks.push({
      name: 'Internal Linking',
      category: 'Structure',
      status: linkingStatus,
      message: linkingMessage,
      score: linkingScore,
      priority: ENTERPRISE_CHECKS.INTERNAL_LINKING.priority
    });

    // 8. HIGH - Performance Analysis (Core Web Vitals 2025)
    let performanceScore = ENTERPRISE_CHECKS.PAGE_SPEED.weight;
    let performanceStatus: 'pass' | 'warning' | 'fail' = 'pass';
    let coreWebVitalsGrade: 'Good' | 'Needs Improvement' | 'Poor' = 'Good';
    
    if (loadTime > 3000) {
      performanceStatus = 'fail';
      performanceScore = 0;
      coreWebVitalsGrade = 'Poor';
      criticalIssues.push(`Slow page load: ${loadTime}ms (should be <2.5s)`);
    } else if (loadTime > 2500) {
      performanceStatus = 'warning';
      performanceScore = Math.round(performanceScore * 0.7);
      coreWebVitalsGrade = 'Needs Improvement';
      recommendations.push('Optimize page load time for Core Web Vitals');
    }
    
    checks.push({
      name: 'Page Load Speed',
      category: 'Performance',
      status: performanceStatus,
      message: `${loadTime}ms load time`,
      score: performanceScore,
      priority: ENTERPRISE_CHECKS.PAGE_SPEED.priority,
      details: 'Based on server response time (Core Web Vitals: <2.5s target)'
    });

    // 9. MEDIUM - Mobile Optimization
    const viewportMatch = html.match(/<meta[^>]*name=["\']viewport["\'][^>]*>/i);
    if (viewportMatch) {
      checks.push({
        name: 'Mobile Viewport',
        category: 'Accessibility',
        status: 'pass',
        message: 'Viewport meta tag present',
        score: ENTERPRISE_CHECKS.MOBILE_OPTIMIZATION.weight,
        priority: ENTERPRISE_CHECKS.MOBILE_OPTIMIZATION.priority
      });
    } else {
      checks.push({
        name: 'Mobile Viewport',
        category: 'Accessibility',
        status: 'fail',
        message: 'Missing viewport meta tag',
        score: 0,
        priority: ENTERPRISE_CHECKS.MOBILE_OPTIMIZATION.priority,
        recommendation: 'Add viewport meta tag for mobile optimization'
      });
      criticalIssues.push('Missing viewport meta tag affects mobile usability');
    }

    // 10. MEDIUM - Image Optimization
    const images = (html.match(/<img[^>]*>/gi) || []).length;
    const imagesWithAlt = (html.match(/<img[^>]*alt=[^>]*>/gi) || []).length;
    
    if (images > 0) {
      const altCoverage = (imagesWithAlt / images) * 100;
      let imageScore = ENTERPRISE_CHECKS.IMAGE_OPTIMIZATION.weight;
      let imageStatus: 'pass' | 'warning' = 'pass';
      
      if (altCoverage < 80) {
        imageStatus = 'warning';
        imageScore = Math.round(imageScore * (altCoverage / 100));
        recommendations.push(`Add alt text to ${images - imagesWithAlt} images for accessibility`);
      }
      
      checks.push({
        name: 'Image Optimization',
        category: 'Accessibility',
        status: imageStatus,
        message: `${imagesWithAlt}/${images} images have alt text (${Math.round(altCoverage)}%)`,
        score: imageScore,
        priority: ENTERPRISE_CHECKS.IMAGE_OPTIMIZATION.priority
      });
    } else {
      checks.push({
        name: 'Image Optimization',
        category: 'Accessibility',
        status: 'pass',
        message: 'No images found',
        score: ENTERPRISE_CHECKS.IMAGE_OPTIMIZATION.weight,
        priority: ENTERPRISE_CHECKS.IMAGE_OPTIMIZATION.priority
      });
    }

    // Calculate category scores
    const categoryScores: Record<string, number> = {};
    const categoryTotals: Record<string, { score: number; max: number }> = {};
    
    for (const check of checks) {
      if (!categoryTotals[check.category]) {
        categoryTotals[check.category] = { score: 0, max: 0 };
      }
      categoryTotals[check.category].score += check.score;
      
      // Calculate max possible score for this check
      const checkWeight = Object.values(ENTERPRISE_CHECKS).find(w => w.weight === check.score) || { weight: check.score };
      categoryTotals[check.category].max += checkWeight.weight;
    }
    
    for (const [category, totals] of Object.entries(categoryTotals)) {
      categoryScores[category] = totals.max > 0 ? Math.round((totals.score / totals.max) * 100) : 0;
    }

    // Calculate overall score
    const totalScore = checks.reduce((sum, check) => sum + check.score, 0);
    const maxPossibleScore = Object.values(ENTERPRISE_CHECKS).reduce((sum, check) => sum + check.weight, 0);
    const overallScore = Math.round((totalScore / maxPossibleScore) * 100);

    return {
      url,
      checks,
      categoryScores,
      overallScore,
      coreWebVitalsGrade,
      recommendations,
      criticalIssues
    };

  } catch (error) {
    console.log(`❌ Error auditing ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return {
      url,
      checks: [{
        name: 'Audit Error',
        category: 'Technical',
        status: 'fail',
        message: `Failed to audit: ${error instanceof Error ? error.message : 'Unknown error'}`,
        score: 0,
        priority: 'Critical'
      }],
      categoryScores: { Technical: 0 },
      overallScore: 0,
      coreWebVitalsGrade: 'Poor',
      recommendations: ['Fix technical issues preventing audit'],
      criticalIssues: ['Page audit failed - technical issues present']
    };
  }
};

const runEnhancedSEOAudit = async () => {
  console.log('🚀 Starting Enhanced SEO Audit (Enterprise Standards)');
  console.log('📊 Based on: Ahrefs, Screaming Frog, Lighthouse, Core Web Vitals 2025\n');

  const urls = await fetchSitemapUrls();
  if (urls.length === 0) {
    console.log('❌ No URLs found. Ensure dev server is running on http://localhost:3000');
    return;
  }

  // Full audit of all indexed pages
  const auditUrls = urls;
  console.log(`🎯 Auditing ALL ${auditUrls.length} URLs (complete site audit)\n`);

  const reports: SEOReport[] = [];
  const batchSize = 10; // Increased for full audit efficiency
  
  for (let i = 0; i < auditUrls.length; i += batchSize) {
    const batch = auditUrls.slice(i, i + batchSize);
    console.log(`📋 Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(auditUrls.length/batchSize)} (${batch.length} URLs)`);
    
    const batchPromises = batch.map(async (url, index) => {
      const report = await performEnhancedSEOAudit(url);
      const urlCategory = categorizeUrl(url);
      console.log(`  ✓ ${urlCategory}: ${report.overallScore}% (${report.criticalIssues.length} critical issues)`);
      return report;
    });
    
    const batchReports = await Promise.all(batchPromises);
    reports.push(...batchReports);
    
    // Brief pause between batches to prevent overwhelming the server
    if (i + batchSize < auditUrls.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Generate comprehensive audit summary
  const summary: AuditSummary = {
    totalPages: reports.length,
    averageScore: Math.round(reports.reduce((sum, r) => sum + r.overallScore, 0) / reports.length),
    categoryAverages: {},
    issueBreakdown: {},
    topIssues: [],
    coreWebVitalsOverview: {
      'Good': reports.filter(r => r.coreWebVitalsGrade === 'Good').length,
      'Needs Improvement': reports.filter(r => r.coreWebVitalsGrade === 'Needs Improvement').length,
      'Poor': reports.filter(r => r.coreWebVitalsGrade === 'Poor').length,
      'Unknown': reports.filter(r => r.coreWebVitalsGrade === 'Unknown').length
    }
  };

  // Calculate category averages
  const categories = ['Technical', 'Content', 'Performance', 'Accessibility', 'Structure'];
  for (const category of categories) {
    const categoryScores = reports
      .map(r => r.categoryScores[category] || 0)
      .filter(score => score > 0);
    
    summary.categoryAverages[category] = categoryScores.length > 0 
      ? Math.round(categoryScores.reduce((a, b) => a + b, 0) / categoryScores.length)
      : 0;
  }

  // Analyze top issues
  const issueMap = new Map<string, { count: number; severity: string }>();
  
  for (const report of reports) {
    for (const issue of report.criticalIssues) {
      const current = issueMap.get(issue) || { count: 0, severity: 'Critical' };
      issueMap.set(issue, { count: current.count + 1, severity: 'Critical' });
    }
    
    for (const check of report.checks.filter(c => c.status === 'fail' || c.status === 'warning')) {
      const issue = `${check.name}: ${check.message}`;
      const current = issueMap.get(issue) || { count: 0, severity: check.priority };
      issueMap.set(issue, { count: current.count + 1, severity: check.priority });
    }
  }

  summary.topIssues = Array.from(issueMap.entries())
    .map(([issue, data]) => ({ issue, count: data.count, severity: data.severity }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Generate detailed report
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportContent = `# Enhanced SEO Audit Report
Generated: ${new Date().toLocaleString()}
Based on: Ahrefs, Screaming Frog, Lighthouse, Core Web Vitals 2025

## Executive Summary
- **Total Pages Audited:** ${summary.totalPages.toLocaleString()}
- **Average SEO Score:** ${summary.averageScore}%
- **Critical Issues Found:** ${reports.reduce((sum, r) => sum + r.criticalIssues.length, 0)}

## Core Web Vitals Overview (2025 Standards)
- 🟢 Good: ${summary.coreWebVitalsOverview.Good} pages (${Math.round((summary.coreWebVitalsOverview.Good / summary.totalPages) * 100)}%)
- 🟡 Needs Improvement: ${summary.coreWebVitalsOverview['Needs Improvement']} pages (${Math.round((summary.coreWebVitalsOverview['Needs Improvement'] / summary.totalPages) * 100)}%)
- 🔴 Poor: ${summary.coreWebVitalsOverview.Poor} pages (${Math.round((summary.coreWebVitalsOverview.Poor / summary.totalPages) * 100)}%)

## Category Performance
${categories.map(cat => `- **${cat}:** ${summary.categoryAverages[cat]}%`).join('\n')}

## Top Issues Requiring Attention
${summary.topIssues.map((issue, i) => `${i + 1}. **[${issue.severity}]** ${issue.issue} (${issue.count} pages affected)`).join('\n')}

## Pages with Critical Issues
${reports.filter(r => r.criticalIssues.length > 0).slice(0, 10).map(r => `
### ${r.url}
- **Score:** ${r.overallScore}%
- **Critical Issues:** ${r.criticalIssues.join('; ')}
- **Recommendations:** ${r.recommendations.slice(0, 3).join('; ')}
`).join('')}

## Category Breakdown
${categories.map(category => {
  const categoryChecks = reports
    .flatMap(r => r.checks.filter(c => c.category === category))
    .reduce((acc, check) => {
      const key = `${check.name} (${check.status})`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  
  const topChecks = Object.entries(categoryChecks)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([check, count]) => `- ${check}: ${count} pages`)
    .join('\n');
    
  return `
### ${category} (Average: ${summary.categoryAverages[category]}%)
${topChecks}
`;
}).join('')}

## Next Steps & Recommendations
1. **Critical Priority:** Fix all pages with Critical issues (${reports.filter(r => r.checks.some(c => c.priority === 'Critical' && c.status === 'fail')).length} pages)
2. **High Priority:** Address High priority warnings (${reports.filter(r => r.checks.some(c => c.priority === 'High' && c.status === 'warning')).length} pages)  
3. **Performance Focus:** Improve Core Web Vitals for ${summary.coreWebVitalsOverview.Poor + summary.coreWebVitalsOverview['Needs Improvement']} pages
4. **Content Optimization:** Enhance meta descriptions and title tags for better SERP performance
5. **Technical SEO:** Implement structured data across ${reports.filter(r => !r.checks.some(c => c.name === 'Structured Data' && c.status === 'pass')).length} pages

---
*Report generated by Enhanced SEO Audit System v2.0*
*Enterprise standards based on Ahrefs, Screaming Frog, Lighthouse, and Core Web Vitals 2025*
`;

  // Save comprehensive report
  const reportPath = path.join(process.cwd(), `enhanced-seo-audit-${timestamp}.md`);
  await fs.writeFile(reportPath, reportContent);

  // Console summary
  console.log('\n' + '='.repeat(80));
  console.log('🎉 ENHANCED SEO AUDIT COMPLETE');
  console.log('='.repeat(80));
  console.log(`📊 Overall Performance: ${summary.averageScore}%`);
  console.log(`🔍 Pages Analyzed: ${summary.totalPages.toLocaleString()}`);
  console.log(`⚠️  Critical Issues: ${reports.reduce((sum, r) => sum + r.criticalIssues.length, 0)}`);
  console.log(`📈 Core Web Vitals Good: ${summary.coreWebVitalsOverview.Good}/${summary.totalPages} (${Math.round((summary.coreWebVitalsOverview.Good / summary.totalPages) * 100)}%)`);
  
  console.log('\n📋 Category Scores:');
  for (const [category, score] of Object.entries(summary.categoryAverages)) {
    const indicator = score >= 90 ? '🟢' : score >= 70 ? '🟡' : '🔴';
    console.log(`  ${indicator} ${category}: ${score}%`);
  }
  
  console.log('\n🚨 Top 3 Issues:');
  summary.topIssues.slice(0, 3).forEach((issue, i) => {
    const priority = issue.severity === 'Critical' ? '🔴' : issue.severity === 'High' ? '🟡' : '🟢';
    console.log(`  ${i + 1}. ${priority} ${issue.issue} (${issue.count} pages)`);
  });

  console.log(`\n📄 Detailed report saved: ${reportPath}`);
  console.log('\n🎯 Next Steps:');
  console.log('  1. Review critical issues first');
  console.log('  2. Focus on Core Web Vitals improvements');  
  console.log('  3. Optimize meta descriptions and titles');
  console.log('  4. Implement structured data');
  console.log('\n✨ Enterprise-grade SEO audit complete!');
};

// Run the enhanced audit if called directly
if (require.main === module) {
  runEnhancedSEOAudit().catch(console.error);
}

export { runEnhancedSEOAudit, performEnhancedSEOAudit };