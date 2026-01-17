# Past Papers SEO Strategy: Selective Indexing Architecture

## A) Executive Summary

### What We Must Do

1. **Reduce indexable pages from ~29,000 to 1,500-2,500** - Only index pages where real search demand exists
2. **Aggregate micro-subtopics** - Combine granular variations into comprehensive topic pages
3. **Create content differentiation** - Each indexed page must have unique, substantial content
4. **Implement noindex for precision pages** - The 28,000+ granular subtopics serve the app experience, not SEO
5. **Build topical authority through hub pages** - Subject and topic pages should be comprehensive guides

### What We Must NOT Do

1. **Index every subtopic** - "HCF and LCM using Venn diagrams" doesn't need its own indexed page
2. **Use template content** - Current pages have identical boilerplate; Google will see this as thin/duplicate
3. **Create pages for difficulty/tier variations** - "(H)" and "(F)" subtopics are not distinct search intents
4. **Ignore search demand** - Many subtopics have zero monthly searches
5. **Treat internal taxonomy as URL structure** - Granular learning paths ≠ SEO page targets

---

## B) The 3-Layer Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LAYER A: MARKETING PAGES                          │
│                              (Fully Indexable)                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│  │    /    │  │/pricing │  │  /gcse  │  │/a-level │  │ /about  │          │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘          │
│                                                                             │
│  Total: 5-10 pages                                                          │
│  Rendering: SSG                                                             │
│  Priority: 1.0-0.9                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LAYER B: SEO TOPIC PAGES                              │
│                      (Indexable, Curated Selection)                         │
│                                                                             │
│  Subject Hubs (24 pages)         Topic Hubs (300-400 pages)                │
│  ┌───────────────────┐           ┌───────────────────┐                     │
│  │ /gcse/maths       │           │ /gcse/maths/aqa/  │                     │
│  │ /gcse/physics     │──────────▶│   algebra         │                     │
│  │ /a-level/biology  │           │ /gcse/maths/aqa/  │                     │
│  └───────────────────┘           │   trigonometry    │                     │
│                                  └───────────────────┘                     │
│                                          │                                  │
│                                          ▼                                  │
│                       Subtopic Pages (1,000-1,500 pages)                   │
│                       ┌─────────────────────────────────┐                  │
│                       │ ONLY pages with search demand:  │                  │
│                       │ - simultaneous-equations        │                  │
│                       │ - quadratic-formula             │                  │
│                       │ - pythagoras-theorem            │                  │
│                       │ - nuclear-fission-fusion        │                  │
│                       └─────────────────────────────────┘                  │
│                                                                             │
│  Total: 1,500-2,000 pages                                                   │
│  Rendering: SSG + ISR (24hr)                                                │
│  Priority: 0.8-0.5                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     LAYER C: APP PRECISION PAGES                            │
│                          (NOT Indexable)                                    │
│                                                                             │
│  Full Taxonomy: All 28,000+ subtopic combinations                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ /app/practice/gcse/maths/aqa/number/hcf-lcm-using-venn-diagrams     │   │
│  │ /app/practice/gcse/maths/aqa/number/hcf-lcm-using-prime-factors     │   │
│  │ /app/practice/gcse/maths/aqa/algebra/expanding-triple-brackets-h    │   │
│  │ /app/practice/gcse/maths/aqa/algebra/expanding-double-brackets      │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Implementation: robots.txt Disallow + noindex,nofollow meta                │
│  Rendering: CSR (client-side)                                               │
│  Auth: Auth-gate after paywall hit (best for crawl efficiency)              │
│  CTAs link ONLY to /app or /app/practice entry points, NOT deep URLs        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Correct Approach for Layer C (App Pages)

| Approach | Crawlable | Indexed | Crawl Budget | Recommended |
|----------|-----------|---------|--------------|-------------|
| `robots.txt Disallow` + `noindex,nofollow` | No | No | ✅ Preserved | ✅ **Yes** |
| `noindex,follow` only | Yes | No | ❌ Wasted | ❌ No |
| Behind login (auth-gated) | No | No | ✅ Preserved | ✅ For premium |

**Decision:** Use BOTH robots.txt Disallow AND noindex,nofollow:
- `robots.txt Disallow: /app/` prevents Google wasting crawl budget on 28,000+ URLs
- `<meta name="robots" content="noindex,nofollow">` as a safety net
- **Do NOT link to deep /app/* URLs from SEO pages** - only link to `/app` or `/app/practice`
- Auth-gate most /app/* pages once user hits paywall

**Why "crawlable for link discovery" is NOT a benefit:**
- You don't need link equity flowing inside /app/
- Equity should flow: Homepage → GCSE → Subject → Topic → SEO Subtopic
- CTAs should point to 1-2 app entry points, not 28,000 deep routes

---

## C) SEO Eligibility Rules + Scoring System

### The Core Principle (Plain English)

**Your internal learning taxonomy is NOT your SEO page structure.**

Think of it this way:
- A **learning taxonomy** breaks topics into the smallest teachable units (e.g., "Adding fractions with like denominators" vs "Adding fractions with unlike denominators")
- An **SEO page** should satisfy a search query that real people type into Google

**Example:**
- Students search: "GCSE maths adding fractions practice"
- Students do NOT search: "GCSE maths adding fractions with unlike denominators practice"

When you create a separate indexed page for every micro-variation, three bad things happen:

1. **Thin Content Penalty** - Google sees hundreds of pages with nearly identical boilerplate text
2. **Keyword Cannibalization** - Your own pages compete against each other for "fractions questions"
3. **Crawl Budget Waste** - Google spends time on 1000 low-value pages instead of deeply indexing 100 valuable ones

### Good vs Bad Subtopic Pages

| ✅ GOOD: Should Be Indexed | ❌ BAD: Should NOT Be Indexed |
|---------------------------|------------------------------|
| **"Simultaneous Equations"** - Distinct search term, exam-board keyword, can support 2000+ words of unique content | **"Simultaneous equations with integers"** - This is a difficulty variation, not a distinct topic |
| **"Pythagoras Theorem"** - 10K+ monthly searches, fundamental GCSE topic | **"Pythagoras in 3D (H)"** - Higher-tier variation of parent topic |
| **"Nuclear Fission and Fusion"** - Commonly searched physics topic | **"Nuclear fission vs fusion comparison"** - This is a question type, not a subtopic |
| **"Quadratic Formula"** - 5K+ searches, distinct solving method | **"Using the quadratic formula (H)"** - Same topic with tier marker |
| **"Balancing Equations"** (Chemistry) - Clear search intent | **"Balancing equations with coefficients"** - Method variation |

### SEO Eligibility Checklist (Pass/Fail)

A subtopic MUST pass ALL criteria to become an indexed SEO page:

| # | Criterion | Pass Condition | Fail Condition |
|---|-----------|----------------|----------------|
| 1 | **Distinct Search Intent** | People search for this exact topic (verify with keyword tools) | Only searched as part of broader topic |
| 2 | **Not a Variation** | Fundamentally different concept from other subtopics | Difficulty modifier (H/F), method variation, or edge case |
| 3 | **Sufficient Depth** | Can write 500+ words of unique, valuable content | Would require copying from parent topic |
| 4 | **Exam Board Relevance** | Named concept in specification | Internal teaching breakdown |
| 5 | **No Cannibalization** | Different target keyword than any existing page | Would compete with broader topic page |

### Subtopic Scoring System (0-10)

Score each candidate subtopic. Only index if score ≥ 7.

| Factor | Weight | 0 Points | 5 Points | 10 Points |
|--------|--------|----------|----------|-----------|
| **Monthly Search Volume** | 3x | 0-10 | 50-200 | 500+ |
| **Distinct from Parent** | 2x | Same content, different name | Some unique aspects | Completely different concept |
| **Content Depth Potential** | 2x | < 200 words unique | 200-500 words | 500+ words |
| **Exam Specification Name** | 2x | Not in spec | Related to spec term | Exact spec terminology |
| **No Cannibalization Risk** | 1x | Directly competes | Minor overlap | Zero overlap |

**Scoring Examples:**

| Subtopic | Search Vol (3x) | Distinct (2x) | Depth (2x) | Spec Name (2x) | Cannibal (1x) | **Total** | **Index?** |
|----------|-----------------|---------------|------------|----------------|---------------|-----------|------------|
| Simultaneous Equations | 30 (500+) | 20 | 20 | 20 | 10 | **100** | ✅ Yes |
| Pythagoras Theorem | 30 | 20 | 20 | 20 | 10 | **100** | ✅ Yes |
| Quadratic Formula | 30 | 20 | 20 | 20 | 10 | **100** | ✅ Yes |
| Factorising Quadratics | 21 (200+) | 20 | 20 | 20 | 10 | **91** | ✅ Yes |
| Nuclear Fission and Fusion | 21 | 20 | 20 | 20 | 10 | **91** | ✅ Yes |
| HCF and LCM | 21 | 15 | 15 | 20 | 10 | **81** | ✅ Yes |
| HCF using Venn Diagrams | 3 (10) | 5 | 5 | 5 | 0 | **18** | ❌ No |
| HCF using Prime Factors | 3 | 5 | 5 | 5 | 0 | **18** | ❌ No |
| Expanding Triple Brackets (H) | 6 (50) | 10 | 10 | 10 | 5 | **41** | ❌ No |
| Zero and Negative Indices (H) | 6 | 10 | 10 | 15 | 5 | **46** | ❌ No |

### 10 Subtopics That SHOULD Be Indexed

1. **Simultaneous Equations** - High search volume, distinct method, exam specification term
2. **Pythagoras Theorem** - 10K+ searches, fundamental topic, always tested
3. **Quadratic Formula** - Named formula, distinct from factorising
4. **Trigonometry (SOHCAHTOA)** - Searchable acronym, major topic
5. **Newton's Laws of Motion** - Named laws, clear search intent
6. **Nuclear Fission and Fusion** - Specification topic, distinct from atomic structure
7. **Ionic Bonding** - Clear chemistry concept, distinct from covalent
8. **DNA Replication** - Specification term, searchable topic
9. **Supply and Demand** - Named economic concept
10. **Standard Form** - Named mathematical notation, distinct topic

### 10 Subtopics That Should NOT Be Indexed

1. **HCF and LCM using Venn diagrams** - Method variation of "HCF and LCM" (aggregate into parent)
2. **HCF and LCM using prime factors** - Method variation (aggregate into parent)
3. **Expanding triple brackets (H)** - Difficulty/tier variation of "Expanding brackets"
4. **Zero and negative indices (H)** - Subset of "Index Laws" (aggregate into parent)
5. **Rationalising denominators (H)** - Part of "Surds" topic (aggregate into parent)
6. **Current the same throughout series circuit** - Fact, not topic (part of "Series Circuits")
7. **I-V graph for filament lamp** - Specific example within "I-V Characteristics"
8. **Calculating efficiency as decimal or percentage** - Format variation, not distinct topic
9. **Energy stores (kinetic, thermal, chemical...)** - List item, not searchable topic
10. **Adding and subtracting decimals** - Too basic, no search volume, aggregate into "Decimals"

---

## D) Aggregation Strategy

### When to Aggregate

Aggregate multiple micro-subtopics into ONE strong SEO page when:

| Rule | Example |
|------|---------|
| **Same core concept, different methods** | "HCF and LCM" page includes: using listing, using Venn diagrams, using prime factors |
| **Same topic, difficulty tiers** | "Indices" page includes: basic index laws, zero/negative indices (H), fractional indices (H) |
| **Same topic, question types** | "Simultaneous Equations" page includes: elimination method, substitution method, word problems |
| **Foundation and Higher content** | One "Quadratics" page covers both tiers with clear tier labels |

### Aggregation Examples

**Before (BAD - 7 thin pages):**
```
/gcse/maths/aqa/number/hcf-and-lcm
/gcse/maths/aqa/number/hcf-and-lcm-using-listing
/gcse/maths/aqa/number/hcf-and-lcm-using-prime-factors
/gcse/maths/aqa/number/hcf-and-lcm-using-venn-diagrams
/gcse/maths/aqa/number/hcf-problems
/gcse/maths/aqa/number/lcm-problems
/gcse/maths/aqa/number/hcf-lcm-word-problems
```

**After (GOOD - 1 comprehensive page):**
```
/gcse/maths/aqa/number/hcf-and-lcm

Page structure:
├── H1: AQA GCSE Maths: HCF and LCM Practice Questions
├── What is HCF and LCM? (300 words)
├── Method 1: Listing Factors (with 2 questions)
├── Method 2: Prime Factorisation (with 2 questions)
├── Method 3: Venn Diagrams (with 2 questions)
├── Word Problems (with 2 questions)
├── Common Mistakes to Avoid
├── [CTA: Generate More Questions]
└── Related Topics: Prime Numbers, Factors and Multiples
```

### Content Requirements Per SEO Page

| Component | Minimum | Ideal | Purpose |
|-----------|---------|-------|---------|
| **Introduction** | 200 words | 400 words | Explain the concept, why it matters |
| **Sample Questions** | 5 | 8-10 | Show question variety, satisfy search intent |
| **Solutions** | All questions | All questions | Collapsed/expandable, indexable |
| **Unique Content Sections** | 2 | 4+ | Methods, tips, common mistakes, worked examples |
| **Internal Links** | 5 | 10+ | Related topics, parent topic, sibling subtopics |
| **Total Word Count** | 800 | 1,500+ | Avoid thin content threshold |

### Keeping Pages Stable (Avoiding Regeneration Issues)

**Problem:** If sample questions regenerate on each build/visit, Google sees different content = duplicate/unstable pages.

**Solution Architecture:**

```typescript
// Database stores static sample questions per SEO subtopic
Table: seo_sample_questions
- id: UUID
- subtopic_slug: string (unique index)
- questions: JSONB (array of 8-10 pre-generated questions)
- solutions: JSONB
- created_at: timestamp
- last_verified: timestamp

// Questions are generated ONCE and stored
// Only regenerate if manually triggered or content update required
```

**Implementation:**
1. Pre-generate and store 8-10 questions per indexed subtopic in database
2. SEO pages fetch from database (not AI-generate on request)
3. App precision pages can generate dynamically (they're noindex)
4. Add `lastModified` to sitemap based on `last_verified` timestamp

---

## E) Technical Implementation Plan

### Rendering Strategy by Route Type

| Route Pattern | Rendering | Cache | Reason |
|--------------|-----------|-------|--------|
| `/` | SSG | Static | Marketing, rarely changes |
| `/pricing` | SSG | Static | Marketing |
| `/gcse`, `/a-level` | SSG | Static | Level hubs |
| `/[level]/[subject]` | SSG | ISR 24h | Subject hubs, topic list |
| `/[level]/[subject]/[examBoard]` | SSG | ISR 24h | Exam board topic list |
| `/[level]/[subject]/[examBoard]/[topic]` | SSG | ISR 24h | Topic hub (aggregated subtopics) |
| `/[level]/[subject]/[examBoard]/[topic]/[subtopic]` | SSG | ISR 24h | **Only for eligible subtopics** |
| `/app/practice/*` | CSR | None | Dynamic, user-specific |
| `/app/*` | CSR | None | Authenticated app |

### noindex Implementation

**For Layer C (App Precision Pages):**

```typescript
// apps/app/src/app/app/layout.tsx - applies to ALL /app/* routes

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false, // No link equity needed inside app
  },
};
```

**ALSO block via robots.txt (belt and suspenders):**
```
# robots.txt
Disallow: /app/   # Prevents crawl budget waste on 28,000+ URLs
```

**Why BOTH?**
- `robots.txt Disallow` = prevents Google wasting crawl budget
- `noindex,nofollow meta` = safety net if Google somehow reaches pages
- You do NOT need "crawlable for link discovery" inside /app/

**CTA Linking Rule:**
```tsx
// ✅ CORRECT - link to entry point only
<Link href="/app/practice">Start Practice</Link>

// ❌ WRONG - creates deep link Google might try to crawl
<Link href={`/app/practice/${level}/${subject}/${examBoard}/${topic}/${subtopic}`}>
  Start Practice
</Link>
```

### Canonical Tags Strategy

```typescript
// Every SEO page must have explicit canonical
export async function generateMetadata({ params }): Promise<Metadata> {
  const canonicalUrl = `https://past-papers.co.uk/${params.level}/${params.subject}/${params.examBoard}/${params.topic}`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// For aggregated pages, all micro-subtopics canonical to the parent:
// /gcse/maths/aqa/number/hcf-lcm-using-venn-diagrams
// → canonical: /gcse/maths/aqa/number/hcf-and-lcm
```

### Sitemap Strategy

**Key principle: Only include pages you WANT indexed**

```typescript
// apps/app/src/app/sitemap.ts

import { MetadataRoute } from 'next';

// Curated list of subtopics with verified search demand
const INDEXED_SUBTOPICS = [
  // Pre-vetted list of ~1000-1500 subtopics that pass eligibility
  { level: 'gcse', subject: 'maths', examBoard: 'aqa', topic: 'algebra', subtopic: 'simultaneous-equations' },
  { level: 'gcse', subject: 'maths', examBoard: 'aqa', topic: 'algebra', subtopic: 'quadratic-formula' },
  // ... curated list
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://past-papers.co.uk';

  return [
    // Marketing pages (priority 1.0)
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/pricing`, priority: 0.9, changeFrequency: 'monthly' },

    // Level pages (priority 0.9)
    { url: `${baseUrl}/gcse`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/a-level`, priority: 0.9, changeFrequency: 'weekly' },

    // Subject pages (priority 0.8)
    ...getSubjectPages(baseUrl),

    // NOTE: Exam board pages (/gcse/maths/aqa) are NOT included
    // Most users search "GCSE maths algebra" not "AQA GCSE maths algebra"
    // These pages exist for UX but are noindex

    // Topic pages - skip to topic level (priority 0.7)
    ...getTopicPages(baseUrl),

    // Subtopic pages - ONLY eligible subtopics (priority 0.6)
    ...INDEXED_SUBTOPICS.map(s => ({
      url: `${baseUrl}/${s.level}/${s.subject}/${s.examBoard}/${s.topic}/${s.subtopic}`,
      priority: 0.6,
      changeFrequency: 'weekly' as const,
    })),
  ];
}
```

**What NOT to include in sitemap:**
- `/app/*` routes (blocked + noindex)
- `/api/*` routes
- Query parameter variants
- Non-eligible subtopic pages
- **Exam board pages** (`/gcse/maths/aqa`) - noindex unless keyword research shows demand
- Practice/dynamic generation pages

### Exam Board Pages: noindex by Default

**Problem:** Many users search "GCSE maths quadratics" NOT "AQA GCSE maths quadratics"

**Solution:**
- Exam board pages exist for UX navigation
- Default to `noindex` unless keyword research shows board-specific demand
- Let subject and topic pages capture the broader traffic

```typescript
// apps/app/src/app/(seo)/[level]/[subject]/[examBoard]/page.tsx

export async function generateMetadata({ params }): Promise<Metadata> {
  // Check if this exam board has verified search demand
  const hasSearchDemand = INDEXED_EXAM_BOARDS.some(
    eb => eb.level === params.level &&
          eb.subject === params.subject &&
          eb.examBoard === params.examBoard
  );

  return {
    robots: {
      index: hasSearchDemand, // Only index if demand verified
      follow: true,
    },
  };
}
```

### robots.txt Final Configuration

```typescript
// apps/app/src/app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/app/',           // App pages - prevent crawl budget waste
          '/api/',           // API routes
          '/*?*',            // Query parameters
        ],
      },
    ],
    sitemap: 'https://past-papers.co.uk/sitemap.xml',
  };
}
```

---

## F) Internal Linking + Authority Flow

### Breadcrumb Implementation

Every page must have breadcrumbs that match URL hierarchy:

```
Home > GCSE > Maths > AQA > Algebra > Simultaneous Equations
```

**JSON-LD for breadcrumbs (already implemented, keep it):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@id": "/", "name": "Home" } },
    { "@type": "ListItem", "position": 2, "item": { "@id": "/gcse", "name": "GCSE" } },
    ...
  ]
}
```

### Internal Link Requirements by Page Type

| Page Type | Must Link To | Number of Links |
|-----------|--------------|-----------------|
| **Landing Page** | Level pages, featured subjects | 10-20 |
| **Level Page** (/gcse) | All subjects for that level | 12 |
| **Subject Page** | All exam boards, top 5 topics | 8-15 |
| **Topic Page** | All indexed subtopics, parent subject, sibling topics | 10-20 |
| **Subtopic Page** | Parent topic, 5-8 related subtopics, sibling subtopics, CTA to app | 10-15 |

### Authority Flow Diagram

```
                    Homepage (PR 100)
                         │
           ┌─────────────┼─────────────┐
           │             │             │
        /gcse         /a-level     /pricing
        (PR 35)       (PR 35)      (PR 10)
           │             │
    ┌──────┼──────┐     ...
    │      │      │
 /maths /physics /chemistry
 (PR 15) (PR 10)  (PR 10)
    │
    ├── /aqa ────┬── /algebra ────┬── /simultaneous-equations (PR 3)
    │            │                └── /quadratic-formula (PR 3)
    ├── /edexcel │
    └── /ocr     └── /number ─────┬── /hcf-and-lcm (PR 3)
                                  └── /fractions (PR 3)
```

### CTA Links to App (Without Crawl Traps)

**Problem:** Linking to dynamically-generated app pages can create crawl traps.

**Solution:**

1. **Use JavaScript-based navigation for practice CTAs:**
```tsx
// SEO Page CTA - uses client-side navigation
<button onClick={() => router.push('/app/practice/...')}>
  Start Practice
</button>
```

2. **Or use `rel="nofollow"` on app links:**
```tsx
<Link href="/app/practice/..." rel="nofollow">
  Start Practice
</Link>
```

3. **App pages have noindex anyway**, so crawlers won't waste budget even if they follow.

---

## G) SEO Page Count Targets (Mandatory Numbers)

### Year 1 Target: 1,800-2,200 Total Indexed Pages

| Page Type | Count | Calculation |
|-----------|-------|-------------|
| Marketing | 5 | /, /pricing, /about, /how-it-works, /contact |
| Level pages | 2 | /gcse, /a-level |
| Subject pages | 24 | 12 subjects × 2 levels |
| Exam board pages | 69 | ~24 subjects × ~3 boards (varies by subject) |
| Topic pages | 400-500 | ~7 topics per subject/board combo × 69 |
| **Subtopic pages** | **1,300-1,600** | Curated selection (see breakdown below) |
| **TOTAL YEAR 1** | **1,800-2,200** | |

### Year 2 Target: 2,500-3,000 Total Indexed Pages

After proving quality and building domain authority:

| Page Type | Count | Change from Y1 |
|-----------|-------|----------------|
| Marketing | 10 | Add blog posts, guides |
| Level pages | 2 | Same |
| Subject pages | 24 | Same |
| Exam board pages | 69 | Same |
| Topic pages | 500-600 | Add new topics as curriculum evolves |
| **Subtopic pages** | **1,900-2,300** | Expand high-performing subjects |
| **TOTAL YEAR 2** | **2,500-3,000** | |

### Per-Subject Breakdown (Year 1)

| Subject | Topic Pages | Subtopic Pages | Total | Justification |
|---------|-------------|----------------|-------|---------------|
| **Mathematics** | 18 | 200 | 218 | Highest search volume, most granular spec |
| **Physics** | 15 | 150 | 165 | High demand, clear topic distinctions |
| **Chemistry** | 15 | 140 | 155 | High demand |
| **Biology** | 15 | 130 | 145 | High demand |
| **Computer Science** | 12 | 100 | 112 | Growing demand |
| **Economics** | 10 | 80 | 90 | Good A-Level search volume |
| **Psychology** | 10 | 80 | 90 | Popular A-Level |
| **Business** | 10 | 70 | 80 | Moderate demand |
| **Geography** | 10 | 70 | 80 | Moderate demand |
| **History** | 10 | 60 | 70 | Essay-based, fewer distinct "topics" |
| **English Literature** | 8 | 50 | 58 | Text-specific, aggregation needed |
| **Further Maths** | 10 | 80 | 90 | Niche but dedicated audience |

**Subtopic Total: ~1,210 (within 1,300-1,600 target)**

### Hard Caps (Do Not Exceed)

| Metric | Hard Cap | Reason |
|--------|----------|--------|
| **Subtopic pages per subject** | 250 | Beyond this, cannibalization risk increases |
| **Total indexed pages sitewide** | 5,000 | Crawl budget concerns for new domain |
| **Subtopic pages per topic** | 15 | Should aggregate if more than 15 |
| **Pages with <500 words unique content** | 0 | Thin content threshold |

### How Many Internal Subtopics Should NEVER Be Indexed

**Of the ~1,000 internal subtopics per subject:**

| Subtopic Type | % of Total | Count per Subject | Action |
|---------------|------------|-------------------|--------|
| **Index-worthy** | 15-25% | 150-250 | Create indexed SEO page |
| **Aggregate into parent** | 50-60% | 500-600 | Content lives on parent topic page |
| **App-only (noindex)** | 25-35% | 250-350 | Precision pages for logged-in users |

**Why keeping 75-85% unindexed is strategically correct:**

1. **Thin content prevention** - Google's helpful content update penalizes sites with high % of low-value pages
2. **Crawl efficiency** - New domains get limited crawl budget; spend it on high-value pages
3. **Authority concentration** - Better to rank #1 for 100 terms than #50 for 1000 terms
4. **Quality signals** - Higher avg. time-on-page, lower bounce rate across fewer, better pages
5. **Maintenance burden** - 2,000 pages can be maintained; 30,000 cannot

---

## H) 30-Day Action Plan

### Week 1: Audit & Planning

| Day | Task | Deliverable |
|-----|------|-------------|
| 1-2 | Keyword research for all subjects | Spreadsheet: subtopic + monthly search volume |
| 3-4 | Score all subtopics using eligibility criteria | Spreadsheet: subtopic + score + index decision |
| 5 | Define aggregation mapping | Document: which subtopics merge into which pages |

### Week 2: Technical Foundation

| Day | Task | Deliverable |
|-----|------|-------------|
| 6-7 | Implement noindex for /app/* routes | Code: metadata changes |
| 8-9 | Create indexed subtopics allowlist | Code: INDEXED_SUBTOPICS constant |
| 10 | Update sitemap to use allowlist | Code: sitemap.ts changes |

### Week 3: Content Architecture

| Day | Task | Deliverable |
|-----|------|-------------|
| 11-13 | Create aggregated topic page template | Code: new topic page with expandable sections |
| 14-15 | Migrate first 3 subjects to new structure | Live: Maths, Physics, Chemistry with aggregated pages |

### Week 4: Launch & Monitor

| Day | Task | Deliverable |
|-----|------|-------------|
| 16-18 | Generate unique intro content for indexed subtopics | Database: 1000+ unique intros |
| 19-20 | Pre-generate and store sample questions | Database: 8-10 questions per indexed subtopic |
| 21 | Deploy new structure | Live site |
| 22-30 | Monitor Search Console, adjust | Report: indexed pages, crawl stats, rankings |

### Success Metrics (30 Days)

| Metric | Target |
|--------|--------|
| Indexed pages in GSC | 1,800-2,200 |
| Avg. crawl rate | Stable or increasing |
| Thin content warnings | 0 |
| Duplicate content issues | 0 |
| Soft 404 errors | 0 |

---

## Appendix: Current State Issues (From Codebase Audit)

### Issues Found

| Issue | Location | Severity | Fix |
|-------|----------|----------|-----|
| **28,688 subtopic pages generated** | Build output | Critical | Implement allowlist, noindex precision pages |
| **Template content on all pages** | `[subtopic]/page.tsx` lines 155-182 | High | Generate unique content per topic |
| **Sitemap includes 5000+ pages** | `sitemap.ts` line 72 | High | Reduce to 2000 curated pages |
| **No canonical tags** | All pages | Medium | Add explicit canonicals |
| **robots.txt blocks /app/** | `robots.ts` | Medium | Change to noindex meta (preserve link equity) |
| **Exam board pages all identical** | `[examBoard]/page.tsx` | Medium | Add unique exam board intro content |

### Current Route Structure (From Audit)

```
Indexable (Layer A + B):
├── / (marketing)
├── /pricing
├── /gcse
├── /a-level
├── /[level]/[subject] (24 pages)
├── /[level]/[subject]/[examBoard] (69 pages)
├── /[level]/[subject]/[examBoard]/[topic] (800+ pages)
└── /[level]/[subject]/[examBoard]/[topic]/[subtopic] (28,688 pages) ← PROBLEM

Not Indexable (Layer C):
├── /app/* (robots.txt blocked - should be noindex)
├── /dashboard
├── /bookmarks
└── /api/*
```

### Recommended New Structure

```
Indexable (Layer A + B) - 2,000 pages max:
├── / (marketing)
├── /pricing
├── /about
├── /gcse
├── /a-level
├── /[level]/[subject] (24 pages)
├── /[level]/[subject]/[examBoard] (69 pages)
├── /[level]/[subject]/[examBoard]/[topic] (500 pages - comprehensive hubs)
└── /[level]/[subject]/[examBoard]/[topic]/[subtopic] (1,300 pages - curated only)

Not Indexable (Layer C) - 27,000+ pages:
├── /app/practice/[...path] (noindex meta, full taxonomy)
├── /app/* (noindex meta)
├── /dashboard (noindex meta)
├── /bookmarks (noindex meta)
└── /api/* (robots.txt blocked)
```
