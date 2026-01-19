# Complete SEMrush Guide for past-papers.co.uk

A step-by-step guide to maximizing SEMrush for your GCSE & A-Level exam practice platform.

---

## Table of Contents

1. [Initial Setup (Do This First)](#1-initial-setup-do-this-first)
2. [Site Audit - Fix Technical Issues](#2-site-audit---fix-technical-issues)
3. [Keyword Research](#3-keyword-research)
4. [Competitor Analysis](#4-competitor-analysis)
5. [Position Tracking](#5-position-tracking)
6. [On-Page SEO Optimization](#6-on-page-seo-optimization)
7. [Content Writing with SEO Assistant](#7-content-writing-with-seo-assistant)
8. [Link Building](#8-link-building)
9. [Ongoing Monthly Tasks](#9-ongoing-monthly-tasks)
10. [Quick Reference Checklist](#10-quick-reference-checklist)

---

## 1. Initial Setup (Do This First)

### Step 1: Create Your Project

1. Log into [SEMrush](https://www.semrush.com)
2. Click **"Projects"** in the left sidebar
3. Click **"Create Project"**
4. Enter `past-papers.co.uk` as your domain
5. Name the project "Past Papers"

### Step 2: Connect Google Tools

1. In your project, go to **Settings**
2. Click **"Connect Google Analytics"** → Authorize → Select your GA4 property
3. Click **"Connect Google Search Console"** → Authorize → Select your property

> **Why?** This gives SEMrush access to your real traffic and ranking data for better insights.

### Step 3: Set Your Target Location

1. Go to **Position Tracking** (we'll set this up fully later)
2. Set location to **United Kingdom**
3. Set device to **Desktop** and **Mobile**

---

## 2. Site Audit - Fix Technical Issues

### Step 1: Run Your First Audit

1. In your project, click **"Site Audit"**
2. Click **"Start Site Audit"**
3. Configure settings:
   - **Crawl scope**: Entire website
   - **Limit of checked pages**: 10,000 (or max for your plan)
   - **Crawl source**: Website
   - **User agent**: SiteAuditBot-Desktop
4. Click **"Start Site Audit"**

### Step 2: Understand the Results

After the crawl completes (usually 5-30 minutes), you'll see:

| Metric | What It Means | Target |
|--------|---------------|--------|
| **Site Health Score** | Overall technical health | 90%+ |
| **Errors** | Critical issues (fix first) | 0 |
| **Warnings** | Important issues | As few as possible |
| **Notices** | Minor improvements | Low priority |

### Step 3: Fix Issues in Priority Order

#### Priority 1: Errors (Fix Immediately)

Common errors and how to fix them:

| Error | How to Fix |
|-------|-----------|
| **Broken internal links (4xx)** | Update or remove the broken links |
| **Pages with duplicate title tags** | Make each page title unique |
| **Pages with duplicate meta descriptions** | Write unique descriptions |
| **Pages couldn't be crawled** | Check robots.txt isn't blocking |
| **Redirect chains** | Update redirects to go directly to final URL |

#### Priority 2: Warnings (Fix This Week)

| Warning | How to Fix |
|---------|-----------|
| **Missing meta descriptions** | Add descriptions to each page |
| **Low text-to-HTML ratio** | Add more content to thin pages |
| **Slow page load time** | Optimize images, enable caching |
| **Missing H1 tags** | Add one H1 per page |
| **Missing alt attributes** | Add alt text to images |

#### Priority 3: Notices (Fix When Possible)

- Orphan pages (pages with no internal links)
- Pages with only one internal link
- Temporary redirects

### Step 4: Schedule Regular Audits

1. Click **"Site Audit Settings"**
2. Set **"Audit schedule"** to **Weekly**
3. Enable email notifications for new errors

---

## 3. Keyword Research

### Step 1: Open Keyword Magic Tool

1. In SEMrush, go to **"Keyword Magic Tool"** (left sidebar under SEO)
2. Enter your first seed keyword
3. Set location to **United Kingdom**

### Step 2: Research These Seed Keywords

Enter these one at a time and export the results:

```
gcse past papers
a level past papers
gcse maths questions
gcse physics revision
a level chemistry questions
aqa past papers
edexcel past papers
ocr past papers
gcse practice questions
a level revision
```

### Step 3: Filter for Opportunities

For each seed keyword:

1. Click **"KD%"** column to sort by Keyword Difficulty
2. Filter: **KD < 40** (easier to rank for)
3. Filter: **Volume > 100** (worth targeting)
4. Click **"Questions"** tab to find question-based keywords

### Step 4: Identify Your Target Keywords

Create a spreadsheet with these columns:

| Keyword | Volume | KD | Intent | Target Page |
|---------|--------|----|---------|-----------|
| gcse maths past papers aqa | 2,400 | 35 | Transactional | /gcse/maths/aqa |
| quadratic equations gcse questions | 590 | 28 | Informational | /gcse/maths/aqa/algebra/quadratic-equations |

### Step 5: Export Your Keywords

1. Select all relevant keywords (checkbox)
2. Click **"Export"**
3. Choose **"Selected keywords"**
4. Save as CSV for reference

### Recommended Keyword Categories

| Category | Example Keywords |
|----------|-----------------|
| **Subject + Level** | "gcse maths", "a level biology" |
| **Subject + Exam Board** | "aqa physics gcse", "edexcel chemistry" |
| **Topic Specific** | "simultaneous equations questions", "photosynthesis a level" |
| **Question Type** | "gcse maths practice questions", "a level past paper questions" |
| **Difficulty** | "hard gcse maths questions", "challenging a level physics" |

---

## 4. Competitor Analysis

### Your Main Competitors

| Competitor | Monthly Visits | Strengths |
|------------|----------------|-----------|
| physicsandmathstutor.com | ~14.6M | Past papers, worksheets, solution banks |
| savemyexams.com | ~8.5M | Exam-style questions, revision notes |
| senecalearning.com | ~7.4M | Interactive learning, free resources |
| corbettmaths.com | ~2.2M | Maths videos and worksheets |
| revisionworld.com | ~1.2M | Study planners, past papers |

### Step 1: Analyze Competitor Domains

1. Go to **"Domain Overview"** (left sidebar)
2. Enter `physicsandmathstutor.com`
3. Note down:
   - Authority Score
   - Organic traffic
   - Top organic keywords
4. Repeat for each competitor

### Step 2: Find Keyword Gaps

1. Go to **"Keyword Gap"** (under Competitive Research)
2. Enter your domain: `past-papers.co.uk`
3. Enter competitors (up to 4):
   - `savemyexams.com`
   - `physicsandmathstutor.com`
   - `senecalearning.com`
   - `corbettmaths.com`
4. Click **"Compare"**

### Step 3: Identify Opportunities

Filter the results:

1. Click **"Missing"** tab → Keywords all competitors rank for but you don't
2. Click **"Weak"** tab → Keywords you rank lower than competitors
3. Filter by **KD < 50** and **Volume > 200**
4. Export these keywords

### Step 4: Find Backlink Gaps

1. Go to **"Backlink Gap"** (under Competitive Research)
2. Enter same domains as above
3. Click **"Find prospects"**
4. Sort by **Authority Score** (highest first)
5. These are sites that link to competitors but not you → outreach targets

---

## 5. Position Tracking

### Step 1: Set Up Tracking

1. Go to **"Position Tracking"** in your project
2. Click **"Set up tracking"**
3. Configure:
   - **Search Engine**: Google
   - **Device**: Desktop AND Mobile (track both)
   - **Location**: United Kingdom
   - **Language**: English

### Step 2: Add Your Keywords

1. Click **"Add keywords"**
2. You can:
   - **Paste keywords** from your research
   - **Import from file** (CSV)
   - **Import from campaign** (if you ran Keyword Magic Tool)

**Recommended keywords to track:**

```
gcse past papers
a level past papers
gcse maths practice questions
gcse physics questions
gcse chemistry questions
gcse biology questions
a level maths questions
a level physics questions
aqa gcse maths
edexcel gcse maths
ocr gcse maths
gcse revision questions
a level revision
practice exam questions gcse
```

### Step 3: Create Keyword Tags

Organize keywords with tags:

1. Select keywords
2. Click **"Add tag"**
3. Create tags like:
   - `gcse-maths`
   - `gcse-science`
   - `a-level`
   - `branded`
   - `high-priority`

### Step 4: Set Up Alerts

1. Click **"Settings"** (gear icon)
2. Enable **"Email reports"**
3. Set frequency to **Weekly**
4. Enable alerts for:
   - Keywords entering Top 10
   - Keywords leaving Top 10
   - Significant position changes

---

## 6. On-Page SEO Optimization

### Step 1: Set Up On-Page SEO Checker

1. Go to **"On-Page SEO Checker"** in your project
2. Click **"Set up"**
3. Import pages to optimize:
   - Top landing pages from Google Analytics
   - Pages targeting your priority keywords

### Step 2: Add Target Keywords

For each page, assign target keywords:

| Page | Target Keywords |
|------|-----------------|
| /gcse/maths/aqa | gcse maths aqa, aqa maths past papers |
| /gcse/physics/aqa | gcse physics aqa, aqa physics questions |
| /a-level/maths | a level maths questions, a level maths practice |

### Step 3: Review Recommendations

After analysis, you'll get ideas in these categories:

| Category | What to Look For |
|----------|------------------|
| **Strategy Ideas** | Overall SEO improvements |
| **SERP Features** | Featured snippet opportunities |
| **Content Ideas** | Word count, semantic keywords to add |
| **Backlink Ideas** | Pages that could link to you |
| **Technical SEO** | Page-specific technical issues |
| **User Experience** | Engagement improvements |

### Step 4: Implement Changes

For each page:

1. Click on the page to see all recommendations
2. Work through each recommendation
3. Mark as **"Done"** when implemented
4. After changes, click **"Update ideas"** to see new score

---

## 7. Content Writing with SEO Assistant

### Step 1: Access the Writing Assistant

Option A: **In SEMrush**
1. Go to **"SEO Writing Assistant"** (under Content Marketing)
2. Click **"Analyze new text"**

Option B: **Google Docs Add-on** (Recommended)
1. Install from Google Workspace Marketplace
2. Open in sidebar while writing

Option C: **WordPress Plugin**
1. Install "SEMrush SEO Writing Assistant" plugin
2. Use in Gutenberg editor

### Step 2: Create Optimized Content

1. Enter your target keyword(s)
2. Set target location to **United Kingdom**
3. Click **"Get recommendations"**

### Step 3: Follow the 4 Scoring Areas

| Area | Target Score | How to Improve |
|------|--------------|----------------|
| **Readability** | Green (matches competitors) | Shorter sentences, simpler words |
| **SEO** | Green | Include target keywords naturally, add semantic keywords |
| **Tone of Voice** | Consistent | Keep formal/casual consistent throughout |
| **Originality** | 100% | No copied content |

### Step 4: Use Recommended Keywords

The tool shows:
- **Target keywords**: Must include these
- **Recommended keywords**: Semantically related terms to add
- **Already used**: Keywords you've included

### Content Ideas for past-papers.co.uk

| Content Type | Example Topics |
|--------------|----------------|
| **Study Guides** | "Complete Guide to GCSE Maths Revision" |
| **Topic Explainers** | "Understanding Quadratic Equations: Step by Step" |
| **Exam Tips** | "How to Score Full Marks on 6-Mark Questions" |
| **Subject Comparisons** | "AQA vs Edexcel: Which Exam Board is Harder?" |
| **Data Studies** | "GCSE Grade Boundaries 2020-2026: Analysis" |

---

## 8. Link Building

### Step 1: Set Up Link Building Tool

1. Go to **"Link Building Tool"** (under Link Building)
2. Click **"Set up"**
3. Enter your domain
4. Add your target keywords
5. Add competitor domains for prospecting

### Step 2: Review Prospects

SEMrush finds sites that might link to you:

| Prospect Type | Description |
|---------------|-------------|
| **Mentions** | Sites mentioning your brand without linking |
| **Competitors** | Sites linking to competitors |
| **Lost links** | Sites that used to link to you |
| **New links** | Recent links to competitors |

### Step 3: Link Building Strategies for Educational Sites

#### Strategy 1: Resource Page Link Building

1. Search Google: `"gcse resources" + "useful links"`
2. Find pages listing revision resources
3. Email asking to be included

**Email template:**
```
Subject: Resource suggestion for your GCSE page

Hi [Name],

I found your [GCSE revision resources] page and thought it was
really helpful for students.

I run Past Papers (past-papers.co.uk), where we offer unlimited
AI-generated practice questions for GCSE and A-Level students
across all exam boards.

Would you consider adding us to your resources list? I think
your readers would find it useful.

Thanks,
[Your name]
```

#### Strategy 2: Guest Posting

Target sites:
- Teacher blogs
- Education news sites
- Tutoring company blogs
- University outreach blogs

#### Strategy 3: Broken Link Building

1. Use **"Backlink Analytics"** on competitor
2. Filter by **"Lost"** backlinks
3. Find 404 pages they used to have
4. Create similar content
5. Email sites linking to dead page

#### Strategy 4: HARO (Help A Reporter Out)

1. Sign up at [haro.com](https://www.helpareporter.com)
2. Select **Education** category
3. Respond to journalist queries about:
   - Exam tips
   - Revision strategies
   - Education technology

### Step 4: Track Your Outreach

In Link Building Tool:

1. Move prospects to **"In Progress"** when you email them
2. Move to **"Link Acquired"** when they link
3. Track response rates to improve templates

---

## 9. Ongoing Monthly Tasks

### Weekly Tasks (15-30 minutes)

- [ ] Check **Position Tracking** for ranking changes
- [ ] Review **Site Audit** for new errors
- [ ] Check Google Search Console for issues

### Monthly Tasks (2-3 hours)

- [ ] Run full **Site Audit** and fix errors
- [ ] Review **Keyword Gap** for new opportunities
- [ ] Create 2-4 pieces of optimized content
- [ ] Send 10-20 link building outreach emails
- [ ] Review **On-Page SEO Checker** recommendations

### Quarterly Tasks (Half day)

- [ ] Full **Competitor Analysis** review
- [ ] Update keyword tracking list
- [ ] Content audit - update old pages
- [ ] Review link profile health
- [ ] Adjust strategy based on results

---

## 10. Quick Reference Checklist

### First Week

- [ ] Create SEMrush project for past-papers.co.uk
- [ ] Connect Google Analytics and Search Console
- [ ] Run first Site Audit
- [ ] Fix all critical errors
- [ ] Set up Position Tracking with 50+ keywords

### First Month

- [ ] Complete keyword research for all subjects
- [ ] Analyze top 5 competitors
- [ ] Run Keyword Gap analysis
- [ ] Run Backlink Gap analysis
- [ ] Set up On-Page SEO Checker for top 20 pages
- [ ] Create content calendar based on keyword opportunities

### First 3 Months

- [ ] Fix all Site Audit warnings
- [ ] Publish 10-20 optimized content pieces
- [ ] Build 20-50 quality backlinks
- [ ] Achieve Site Health Score of 90%+
- [ ] Track progress on 100+ keywords

### Success Metrics to Track

| Metric | Tool | Target (6 months) |
|--------|------|-------------------|
| Site Health Score | Site Audit | 90%+ |
| Keywords in Top 10 | Position Tracking | 50+ |
| Keywords in Top 100 | Position Tracking | 200+ |
| Referring Domains | Backlink Analytics | 100+ |
| Organic Traffic | Google Analytics | 10,000+/month |

---

## Pro Tips

### 1. Focus on Long-Tail Keywords First

New sites should target specific keywords like:
- ❌ "gcse maths" (very competitive)
- ✅ "gcse maths simultaneous equations questions aqa" (less competitive)

### 2. Create Topic Clusters

Build authority by creating comprehensive coverage:

```
/gcse/maths/aqa/algebra/ (pillar page)
├── /simultaneous-equations (cluster)
├── /quadratic-equations (cluster)
├── /linear-equations (cluster)
└── /inequalities (cluster)
```

### 3. Update Content Regularly

Google favors fresh content. Use **Content Audit** to find pages that need updating:
- Pages with declining traffic
- Pages older than 12 months
- Pages with low engagement

### 4. Monitor Competitors Monthly

Set up **competitor alerts** to get notified when:
- Competitors publish new content
- Competitors gain significant backlinks
- Competitors rank for new keywords

### 5. Don't Ignore Technical SEO

Many educational sites neglect technical SEO. Fixing basics puts you ahead:
- Fast page load times (<3 seconds)
- Mobile-friendly design
- Proper schema markup
- Clean URL structure

---

## Useful Links

- [SEMrush Academy](https://www.semrush.com/academy/) - Free courses
- [SEMrush Blog](https://www.semrush.com/blog/) - Latest SEO tips
- [SEMrush YouTube](https://www.youtube.com/semrush) - Video tutorials

---

*Last updated: January 2026*
