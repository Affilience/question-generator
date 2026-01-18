Sta# Question Generator Platform

## Vision

An AI-powered educational platform that solves the finite supply problem students face with practice questions and past papers. The platform generates unlimited high-quality questions that closely mimic real exam paper style, organized systematically for effective studying.

## Core Problem

Students are limited by:
- Finite past paper questions available
- Poor organization by topic and difficulty
- Lack of detailed explanations for self-study
- No way to track progress across topics

## Solution

### Question Generation Engine
- AI generates questions matching specific exam board styles and formats
- Questions mimic past paper question types, wording, and mark allocation
- Each question includes AI-generated step-by-step explained solutions
- Difficulty calibration based on exam board grade boundaries

### Hierarchical Organization
```
Subject (e.g., Mathematics, Physics, Chemistry)
  └── Exam Board (e.g., AQA, Edexcel, OCR, IB)
      └── Qualification Level (e.g., GCSE, A-Level, IB HL/SL)
          └── Topic (e.g., Quadratic Equations, Mechanics)
              └── Difficulty (Easy / Medium / Hard / Exam-Style)
```

### Student Dashboard
- Questions attempted and success rate
- Topics covered with mastery indicators
- Daily/weekly streaks for motivation
- Weak topic identification
- Progress over time visualization
- Suggested next topics based on gaps

## Technical Architecture

### Frontend (Next.js + React + Tailwind)
- Landing page with value proposition
- Authentication (sign up / login)
- Subject/topic browser
- Question practice interface
- Solution reveal with explanations
- Student dashboard with analytics

### Backend
- User authentication and profiles
- Question generation API (OpenAI/Anthropic integration)
- Question caching/storage (avoid regenerating identical questions)
- Progress tracking and analytics
- Spaced repetition algorithm for question selection

### Database Schema (Core Entities)
- Users (id, email, name, streak, created_at)
- Subjects (id, name, description)
- ExamBoards (id, name, country)
- Topics (id, subject_id, exam_board_id, name, level)
- Questions (id, topic_id, difficulty, content, solution, generated_at)
- UserProgress (user_id, question_id, correct, attempted_at)
- UserTopicMastery (user_id, topic_id, mastery_score)

## Development Phases

### Phase 1: Foundation (Current)
- [ ] Design and build landing page
- [ ] Set up authentication (NextAuth.js or Clerk)
- [ ] Create database schema and connect (Prisma + PostgreSQL/Supabase)
- [ ] Build basic subject/topic taxonomy UI

### Phase 2: Core Question Engine
- [ ] Integrate AI API for question generation
- [ ] Design question prompt templates per subject/exam board
- [ ] Build question display and interaction UI
- [ ] Implement solution reveal with explanations
- [ ] Add difficulty selection

### Phase 3: User Progress
- [ ] Track questions attempted and results
- [ ] Build student dashboard
- [ ] Implement streak system
- [ ] Topic mastery calculation
- [ ] Progress visualization charts

### Phase 4: Enhancement
- [ ] Spaced repetition for question selection
- [ ] Weak topic recommendations
- [ ] Question bookmarking/favorites
- [ ] Export questions as PDF
- [ ] Mobile responsiveness polish

### Phase 5: Scale
- [ ] Question caching to reduce AI costs
- [ ] Rate limiting and usage tiers
- [ ] Payment integration for premium features
- [ ] More subjects and exam boards

## Recommended First Steps

1. **Landing page** - Communicate the value proposition clearly
2. **Auth system** - Users need accounts to track progress
3. **Single subject prototype** - Pick one subject (e.g., GCSE Maths) and one exam board to prove the concept
4. **Question generation proof of concept** - Get AI generating quality questions before building everything else
5. **Basic dashboard** - Show users their progress to create engagement loop

## Key Success Metrics
- Question quality (how close to real past papers)
- User retention (daily/weekly active users)
- Learning outcomes (do users improve over time)
- Topic coverage (breadth of curriculum supported)
