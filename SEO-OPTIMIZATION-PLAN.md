# SEO Optimization Plan for Past Papers Platform

## Executive Summary

Based on analysis of **23,832 unique keywords** with a combined search volume of **2,847,510 monthly searches**, this plan outlines a strategic approach to capture high-intent educational traffic.

### Key Opportunities Identified
- **AQA dominates**: 918,940 monthly searches (32% of total volume)
- **GCSE outperforms A-Level**: 992,150 vs 738,180 monthly searches
- **"Past papers" is the money term**: 1,726,280 combined monthly searches
- **223 low-competition gems**: Keywords with KD < 20 and volume ≥ 500

---

## Priority 1: High-Volume Target Keywords

### Tier 1 - Must Rank (Volume > 10,000)

| Keyword | Volume | KD | Target URL |
|---------|--------|-----|------------|
| aqa past papers | 27,100 | 45 | /a-level/aqa |
| edexcel maths past papers | 14,800 | 42 | /gcse/maths/edexcel |
| gcse maths past papers | 14,800 | 48 | /gcse/maths |
| aqa gcse maths past papers | 12,100 | 41 | /gcse/maths/aqa |
| edexcel past papers | 12,100 | 43 | /gcse/edexcel |
| aqa a level past papers | 9,900 | 39 | /a-level/aqa |
| aqa english language past papers | 9,900 | 38 | /gcse/english-language/aqa |
| gcse english language past papers | 9,900 | 40 | /gcse/english-language |
| aqa biology past papers | 8,100 | 36 | /a-level/biology/aqa |
| aqa chemistry past papers | 8,100 | 37 | /a-level/chemistry/aqa |

### Tier 2 - High Priority (Volume 5,000-10,000)

| Keyword | Volume | KD | Target URL |
|---------|--------|-----|------------|
| aqa physics past papers | 6,600 | 35 | /a-level/physics/aqa |
| aqa english literature past papers | 6,600 | 34 | /gcse/english-literature/aqa |
| edexcel gcse maths past papers | 6,600 | 40 | /gcse/maths/edexcel |
| gcse biology past papers | 6,600 | 38 | /gcse/biology |
| gcse chemistry past papers | 6,600 | 39 | /gcse/chemistry |
| gcse physics past papers | 5,400 | 37 | /gcse/physics |
| ocr past papers | 5,400 | 32 | /gcse/ocr |
| aqa psychology past papers | 5,400 | 33 | /a-level/psychology/aqa |

---

## Priority 2: Low-Competition Quick Wins

### Keywords with KD < 20 and Volume ≥ 500

These are the easiest wins - high enough volume to matter, low enough competition to rank quickly.

#### Top 20 Quick Win Keywords

| Keyword | Volume | KD | Recommended Page |
|---------|--------|-----|------------------|
| aqa gcse biology paper 1 topics | 1,900 | 15 | /gcse/biology/aqa/paper-1-topics |
| edexcel chemistry paper 1 topics | 1,600 | 14 | /gcse/chemistry/edexcel/paper-1-topics |
| aqa physics paper 1 topics | 1,300 | 16 | /gcse/physics/aqa/paper-1-topics |
| gcse maths topics by paper | 1,200 | 12 | /gcse/maths/topics-by-paper |
| aqa english language paper 1 questions | 1,100 | 18 | /gcse/english-language/aqa/paper-1 |
| edexcel biology paper 2 topics | 1,000 | 13 | /gcse/biology/edexcel/paper-2-topics |
| ocr chemistry topics | 900 | 11 | /gcse/chemistry/ocr/topics |
| aqa combined science topics | 880 | 15 | /gcse/combined-science/aqa/topics |
| gcse history questions by topic | 850 | 14 | /gcse/history/questions-by-topic |
| edexcel physics paper 1 topics | 820 | 16 | /gcse/physics/edexcel/paper-1-topics |

---

## Priority 3: Content Strategy by Subject

### Mathematics (602,990 total monthly volume)

**Primary Keywords:**
- gcse maths past papers (14,800)
- edexcel maths past papers (14,800)
- aqa gcse maths past papers (12,100)
- gcse maths questions by topic (4,400)

**Content Priorities:**
1. Create topic-specific question banks for each paper
2. Add worked solutions with step-by-step explanations
3. Create difficulty progression within each topic
4. Add calculator vs non-calculator question filters

**Recommended Pages:**
- `/gcse/maths` - Hub page targeting "gcse maths past papers"
- `/gcse/maths/aqa` - AQA-specific with paper breakdowns
- `/gcse/maths/edexcel` - Edexcel-specific
- `/gcse/maths/topics/algebra` - Topic hubs with all difficulty levels
- `/gcse/maths/paper-1` and `/gcse/maths/paper-2` - Paper-specific practice

### English (358,740 total monthly volume)

**Primary Keywords:**
- aqa english language past papers (9,900)
- gcse english language past papers (9,900)
- aqa english literature past papers (6,600)
- gcse english literature past papers (4,400)

**Content Priorities:**
1. Separate Language vs Literature clearly in navigation
2. Add model answers with examiner commentary
3. Include extract-based question practice
4. Add writing frame templates for creative writing

**Recommended Pages:**
- `/gcse/english-language` - Language hub
- `/gcse/english-literature` - Literature hub
- `/gcse/english-language/aqa/paper-1` - Paper-specific
- `/gcse/english-literature/poetry-anthology` - Text-specific practice

### Sciences (627,620 combined monthly volume)

**Biology (219,160):**
- aqa biology past papers (8,100)
- gcse biology past papers (6,600)
- aqa a level biology past papers (4,400)

**Chemistry (243,520):**
- aqa chemistry past papers (8,100)
- gcse chemistry past papers (6,600)
- edexcel chemistry past papers (4,400)

**Physics (164,940):**
- aqa physics past papers (6,600)
- gcse physics past papers (5,400)
- edexcel physics past papers (3,600)

**Content Priorities:**
1. Required practical questions bank
2. Mathematical skills questions (calculations)
3. Six-mark extended response practice
4. Triple vs Combined Science differentiation

---

## Priority 4: Site Architecture Recommendations

### Current URL Structure
```
/gcse/{subject}
/a-level/{subject}
```

### Recommended Enhanced Structure
```
/{level}/{subject}                          # Hub page
/{level}/{subject}/{exam-board}             # Exam board specific
/{level}/{subject}/{exam-board}/paper-{n}   # Paper specific
/{level}/{subject}/{exam-board}/topics      # Topic listing
/{level}/{subject}/topic/{topic-name}       # Individual topic
```

### Internal Linking Strategy

1. **Hub and Spoke Model**
   - Each subject has a main hub page
   - Hub links to all exam board variants
   - Exam board pages link to papers and topics
   - Topic pages link to related topics

2. **Breadcrumb Implementation**
   ```
   Home > GCSE > Maths > AQA > Paper 1 > Algebra
   ```

3. **Related Content Blocks**
   - "Other exam boards" links on each page
   - "Related topics" based on curriculum connections
   - "Next steps" based on difficulty progression

---

## Priority 5: On-Page SEO Templates

### Subject Hub Page Template

**URL:** `/gcse/maths`

**Title Tag:** `GCSE Maths Past Papers & Practice Questions | Past Papers`

**Meta Description:** `Practice unlimited GCSE Maths questions organised by topic. AQA, Edexcel, and OCR exam boards. Free past paper questions with worked solutions.`

**H1:** `GCSE Maths Past Papers`

**Content Structure:**
1. Exam board selection (AQA, Edexcel, OCR)
2. Topic grid with question counts
3. Difficulty filter
4. Recent questions attempted (personalized)
5. FAQ schema markup

### Exam Board Page Template

**URL:** `/gcse/maths/aqa`

**Title Tag:** `AQA GCSE Maths Past Papers | Questions by Topic | Past Papers`

**Meta Description:** `Practice AQA GCSE Maths questions organised by topic and paper. Paper 1 (non-calculator) and Paper 2/3 (calculator). With mark schemes.`

**H1:** `AQA GCSE Maths Past Papers`

**Content Structure:**
1. Paper breakdown (Paper 1, 2, 3)
2. Topic grid organized by specification
3. Grade boundary information
4. Exam tips specific to AQA

### Topic Page Template

**URL:** `/gcse/maths/aqa/algebra`

**Title Tag:** `AQA GCSE Maths Algebra Questions | Past Paper Practice`

**Meta Description:** `Practice AQA GCSE Maths algebra questions. Quadratics, simultaneous equations, inequalities. With worked solutions and mark schemes.`

**H1:** `AQA GCSE Maths: Algebra Questions`

---

## Priority 6: Technical SEO Checklist

### Immediate Actions

- [ ] Implement proper canonical URLs across all pages
- [ ] Add structured data (FAQ, Course, Quiz schemas)
- [ ] Create XML sitemap with subject/topic hierarchy
- [ ] Implement hreflang for UK targeting
- [ ] Add breadcrumb structured data
- [ ] Optimize Core Web Vitals (especially LCP on question pages)

### Page Speed Optimization

- [ ] Lazy load questions below the fold
- [ ] Preload critical fonts
- [ ] Optimize question card component rendering
- [ ] Implement proper image optimization for diagrams

### Indexation Strategy

- [ ] Ensure all subject/topic pages are indexable
- [ ] Block AI-generated individual question URLs (avoid thin content)
- [ ] Create proper pagination for large topic lists
- [ ] Add "noindex" to user-specific pages (dashboard, settings)

---

## Priority 7: Content Calendar

### Month 1: Foundation

**Week 1-2:**
- Optimize all existing GCSE hub pages with target keywords
- Add FAQ sections to top 10 traffic pages
- Implement breadcrumb navigation

**Week 3-4:**
- Create AQA-specific landing pages for all subjects
- Add topic breakdown pages for Maths and English
- Implement structured data

### Month 2: Expansion

**Week 1-2:**
- Create Edexcel-specific landing pages
- Add paper-specific pages (Paper 1, Paper 2, etc.)
- Create "topics by paper" content

**Week 3-4:**
- Create OCR-specific landing pages
- Add grade boundary information
- Create exam tips content

### Month 3: A-Level Focus

**Week 1-2:**
- Optimize A-Level hub pages
- Create A-Level subject-specific pages
- Add A-Level specific question types

**Week 3-4:**
- Create specification-aligned topic pages
- Add synoptic question practice
- Create A-Level revision guides

---

## Priority 8: Tracking & KPIs

### Primary Metrics

1. **Organic Traffic Growth**
   - Target: 50% increase in 6 months
   - Track: Weekly organic sessions

2. **Keyword Rankings**
   - Target: Top 10 for 50 Tier 1/2 keywords
   - Track: Weekly position tracking

3. **Page-Level Performance**
   - Target: Each subject hub > 1,000 monthly organic visits
   - Track: GSC data by page

### Secondary Metrics

1. **Click-Through Rate (CTR)**
   - Target: 5%+ average CTR
   - Optimize: Title tags and meta descriptions

2. **Engagement**
   - Target: 3+ pages per session from organic
   - Track: GA4 engagement metrics

3. **Conversions**
   - Target: 5% signup rate from organic
   - Track: Organic user funnel

---

## Quick Reference: Top 50 Keywords to Target

| Rank | Keyword | Volume | Priority |
|------|---------|--------|----------|
| 1 | aqa past papers | 27,100 | Critical |
| 2 | edexcel maths past papers | 14,800 | Critical |
| 3 | gcse maths past papers | 14,800 | Critical |
| 4 | aqa gcse maths past papers | 12,100 | Critical |
| 5 | edexcel past papers | 12,100 | Critical |
| 6 | aqa a level past papers | 9,900 | High |
| 7 | aqa english language past papers | 9,900 | High |
| 8 | gcse english language past papers | 9,900 | High |
| 9 | aqa biology past papers | 8,100 | High |
| 10 | aqa chemistry past papers | 8,100 | High |
| 11 | aqa physics past papers | 6,600 | High |
| 12 | aqa english literature past papers | 6,600 | High |
| 13 | edexcel gcse maths past papers | 6,600 | High |
| 14 | gcse biology past papers | 6,600 | High |
| 15 | gcse chemistry past papers | 6,600 | High |
| 16 | gcse physics past papers | 5,400 | Medium |
| 17 | ocr past papers | 5,400 | Medium |
| 18 | aqa psychology past papers | 5,400 | Medium |
| 19 | edexcel biology past papers | 4,400 | Medium |
| 20 | edexcel chemistry past papers | 4,400 | Medium |
| 21 | aqa a level biology past papers | 4,400 | Medium |
| 22 | aqa a level chemistry past papers | 4,400 | Medium |
| 23 | gcse maths questions by topic | 4,400 | Medium |
| 24 | aqa a level physics past papers | 3,600 | Medium |
| 25 | edexcel physics past papers | 3,600 | Medium |
| 26 | gcse english literature past papers | 4,400 | Medium |
| 27 | ocr a level biology past papers | 3,600 | Medium |
| 28 | ocr a level chemistry past papers | 2,900 | Medium |
| 29 | aqa gcse english language past papers | 2,900 | Medium |
| 30 | edexcel a level maths past papers | 2,900 | Medium |
| 31 | aqa a level psychology past papers | 2,900 | Medium |
| 32 | gcse history past papers | 2,900 | Medium |
| 33 | aqa history past papers | 2,400 | Medium |
| 34 | edexcel history past papers | 2,400 | Medium |
| 35 | ocr a level physics past papers | 2,400 | Medium |
| 36 | aqa gcse biology past papers | 2,400 | Medium |
| 37 | aqa gcse chemistry past papers | 2,400 | Medium |
| 38 | aqa gcse physics past papers | 2,400 | Medium |
| 39 | edexcel gcse biology past papers | 1,900 | Low |
| 40 | edexcel gcse chemistry past papers | 1,900 | Low |
| 41 | edexcel gcse physics past papers | 1,900 | Low |
| 42 | gcse geography past papers | 1,900 | Low |
| 43 | aqa geography past papers | 1,600 | Low |
| 44 | edexcel geography past papers | 1,600 | Low |
| 45 | ocr gcse maths past papers | 1,600 | Low |
| 46 | aqa economics past papers | 1,300 | Low |
| 47 | edexcel economics past papers | 1,300 | Low |
| 48 | aqa business past papers | 1,300 | Low |
| 49 | edexcel business past papers | 1,300 | Low |
| 50 | gcse computer science past papers | 1,300 | Low |

---

## Summary: Immediate Action Items

1. **This Week:**
   - Update title tags on all subject hub pages
   - Add FAQ schema to top 5 pages
   - Create `/gcse/maths/aqa` landing page

2. **Next 2 Weeks:**
   - Create all exam board landing pages for GCSE Maths
   - Optimize meta descriptions across site
   - Implement breadcrumb navigation

3. **This Month:**
   - Create topic breakdown pages for quick win keywords
   - Add structured data site-wide
   - Set up rank tracking for top 50 keywords

---

*Generated from analysis of 23,832 keywords across 10 SEMrush data files*
*Combined monthly search volume: 2,847,510*
*Last updated: January 2026*
