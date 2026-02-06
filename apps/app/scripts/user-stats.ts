#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { join } from 'path';

// Load environment variables
config({ path: join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in environment variables');
  process.exit(1);
}

// Create Supabase client with service role key for admin access
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function getUserStatistics() {
  console.log('🔍 Fetching user statistics...\n');

  try {
    // Total users from auth.users
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, created_at')
      .order('created_at', { ascending: false });

    if (usersError) {
      console.error('Error fetching users:', usersError);
      return;
    }

    // Active users from user_progress table
    const { data: progress, error: progressError } = await supabase
      .from('user_progress')
      .select('user_id, last_practiced_at')
      .order('last_practiced_at', { ascending: false });

    if (progressError) {
      console.error('Error fetching user progress:', progressError);
      return;
    }

    // Question attempts for activity metrics
    const { data: attempts, error: attemptsError } = await supabase
      .from('question_attempts')
      .select('user_id, attempted_at')
      .order('attempted_at', { ascending: false });

    if (attemptsError) {
      console.error('Error fetching question attempts:', attemptsError);
      return;
    }

    // Calculate statistics
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // User registration statistics
    const totalUsers = users?.length || 0;
    const usersLast24h = users?.filter(u => new Date(u.created_at) >= oneDayAgo).length || 0;
    const usersLast7d = users?.filter(u => new Date(u.created_at) >= oneWeekAgo).length || 0;
    const usersLast30d = users?.filter(u => new Date(u.created_at) >= oneMonthAgo).length || 0;

    // Active user statistics (users who have practiced)
    const uniqueActiveUsers = new Set(progress?.map(p => p.user_id) || []).size;
    const activeLast24h = new Set(
      progress?.filter(p => new Date(p.last_practiced_at) >= oneDayAgo).map(p => p.user_id) || []
    ).size;
    const activeLast7d = new Set(
      progress?.filter(p => new Date(p.last_practiced_at) >= oneWeekAgo).map(p => p.user_id) || []
    ).size;
    const activeLast30d = new Set(
      progress?.filter(p => new Date(p.last_practiced_at) >= oneMonthAgo).map(p => p.user_id) || []
    ).size;

    // Question attempt statistics
    const totalAttempts = attempts?.length || 0;
    const attemptsLast24h = attempts?.filter(a => new Date(a.attempted_at) >= oneDayAgo).length || 0;
    const attemptsLast7d = attempts?.filter(a => new Date(a.attempted_at) >= oneWeekAgo).length || 0;
    const attemptsLast30d = attempts?.filter(a => new Date(a.attempted_at) >= oneMonthAgo).length || 0;

    // Display results
    console.log('📊 USER STATISTICS');
    console.log('==================');
    console.log(`Total Registered Users: ${totalUsers}`);
    console.log(`New Users (24h): ${usersLast24h}`);
    console.log(`New Users (7d): ${usersLast7d}`);
    console.log(`New Users (30d): ${usersLast30d}`);
    console.log('');

    console.log('🎯 ACTIVE USER STATISTICS');
    console.log('=========================');
    console.log(`Total Active Users (ever): ${uniqueActiveUsers}`);
    console.log(`Active Users (24h): ${activeLast24h}`);
    console.log(`Active Users (7d): ${activeLast7d}`);
    console.log(`Active Users (30d): ${activeLast30d}`);
    console.log('');

    console.log('📝 QUESTION ATTEMPT STATISTICS');
    console.log('==============================');
    console.log(`Total Question Attempts: ${totalAttempts}`);
    console.log(`Attempts (24h): ${attemptsLast24h}`);
    console.log(`Attempts (7d): ${attemptsLast7d}`);
    console.log(`Attempts (30d): ${attemptsLast30d}`);
    console.log('');

    // Activity rates
    const activationRate = totalUsers > 0 ? ((uniqueActiveUsers / totalUsers) * 100).toFixed(1) : '0.0';
    const avgAttemptsPerActiveUser = uniqueActiveUsers > 0 ? (totalAttempts / uniqueActiveUsers).toFixed(1) : '0.0';

    console.log('📈 KEY METRICS');
    console.log('==============');
    console.log(`User Activation Rate: ${activationRate}% (users who have practiced)`);
    console.log(`Average Attempts per Active User: ${avgAttemptsPerActiveUser}`);
    console.log('');

    // Recent activity
    if (users && users.length > 0) {
      console.log('👥 RECENT USER REGISTRATIONS');
      console.log('============================');
      const recentUsers = users.slice(0, 5);
      recentUsers.forEach((user, index) => {
        const date = new Date(user.created_at).toLocaleDateString();
        const time = new Date(user.created_at).toLocaleTimeString();
        console.log(`${index + 1}. ${user.id.slice(0, 8)}... (${date} ${time})`);
      });
    }

  } catch (error) {
    console.error('Error fetching statistics:', error);
  }
}

// Run the script
getUserStatistics().then(() => {
  console.log('\n✅ Statistics fetched successfully');
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});