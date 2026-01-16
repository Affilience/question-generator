-- Add XP and level columns to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS total_xp INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level INTEGER DEFAULT 1;

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(10),
  xp_reward INTEGER DEFAULT 0,
  requirement_type VARCHAR(50),
  requirement_value INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_achievements table (many-to-many)
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- Create paper_attempts table for past paper generator
CREATE TABLE IF NOT EXISTS paper_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  exam_board VARCHAR(20) NOT NULL,
  qualification VARCHAR(20) NOT NULL,
  subject VARCHAR(50) NOT NULL,
  paper_name VARCHAR(100),
  total_marks INTEGER NOT NULL,
  score INTEGER,
  time_taken INTEGER,
  questions JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on new tables
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE paper_attempts ENABLE ROW LEVEL SECURITY;

-- RLS policies for achievements (readable by all)
CREATE POLICY "Achievements are viewable by everyone" ON achievements
  FOR SELECT USING (true);

-- RLS policies for user_achievements
CREATE POLICY "Users can view their own achievements" ON user_achievements
  FOR SELECT USING (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can insert their own achievements" ON user_achievements
  FOR INSERT WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

-- RLS policies for paper_attempts
CREATE POLICY "Users can view their own paper attempts" ON paper_attempts
  FOR SELECT USING (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can insert their own paper attempts" ON paper_attempts
  FOR INSERT WITH CHECK (user_id = auth.uid() OR user_id IS NULL);

CREATE POLICY "Users can update their own paper attempts" ON paper_attempts
  FOR UPDATE USING (user_id = auth.uid() OR user_id IS NULL);

-- Seed initial achievements
INSERT INTO achievements (code, name, description, icon, xp_reward, requirement_type, requirement_value) VALUES
  ('first_question', 'First Steps', 'Complete your first question', '🎯', 10, 'questions_total', 1),
  ('ten_questions', 'Getting Started', 'Complete 10 questions', '📚', 25, 'questions_total', 10),
  ('fifty_questions', 'Dedicated Learner', 'Complete 50 questions', '🌟', 50, 'questions_total', 50),
  ('century', 'Century', 'Complete 100 questions', '💯', 100, 'questions_total', 100),
  ('five_hundred', 'Question Master', 'Complete 500 questions', '🏅', 250, 'questions_total', 500),
  ('thousand', 'Legendary', 'Complete 1000 questions', '🏆', 500, 'questions_total', 1000),
  ('streak_3', 'On a Roll', 'Maintain a 3-day streak', '🔥', 25, 'streak', 3),
  ('streak_7', 'Week Warrior', 'Maintain a 7-day streak', '⚡', 75, 'streak', 7),
  ('streak_14', 'Two Week Champion', 'Maintain a 14-day streak', '💪', 150, 'streak', 14),
  ('streak_30', 'Monthly Master', 'Maintain a 30-day streak', '👑', 300, 'streak', 30),
  ('perfect_5', 'Sharp Mind', 'Get 5 questions correct in a row', '🎯', 30, 'streak_correct', 5),
  ('perfect_10', 'Perfect 10', 'Get 10 questions correct in a row', '✨', 75, 'streak_correct', 10),
  ('perfect_20', 'Unstoppable', 'Get 20 questions correct in a row', '🌠', 150, 'streak_correct', 20),
  ('topic_starter', 'Explorer', 'Practice questions from 5 different topics', '🗺️', 40, 'topics_practiced', 5),
  ('topic_explorer', 'Adventurer', 'Practice questions from 10 different topics', '🧭', 80, 'topics_practiced', 10),
  ('topic_master', 'Topic Master', 'Achieve 80%+ accuracy on a topic (20+ questions)', '🎓', 100, 'topic_mastery', 80),
  ('first_paper', 'Paper Pusher', 'Complete your first practice paper', '📝', 50, 'papers_completed', 1),
  ('five_papers', 'Exam Ready', 'Complete 5 practice papers', '📋', 150, 'papers_completed', 5),
  ('early_bird', 'Early Bird', 'Practice before 8am', '🌅', 20, 'special', 1),
  ('night_owl', 'Night Owl', 'Practice after 10pm', '🦉', 20, 'special', 1)
ON CONFLICT (code) DO NOTHING;

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_paper_attempts_user_id ON paper_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_code ON achievements(code);
