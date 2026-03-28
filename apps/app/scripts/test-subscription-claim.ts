#!/usr/bin/env npx tsx

/**
 * Test script to verify the purchase-before-signup flow
 * Run with: npx tsx scripts/test-subscription-claim.ts
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function testSubscriptionClaim() {
  console.log('🧪 Testing Purchase-Before-Signup Flow\n');
  console.log('=' .repeat(50));

  // Test email
  const testEmail = `test-${Date.now()}@example.com`;
  const testPassword = 'TestPassword123!';
  
  console.log(`\n1️⃣ Creating pending subscription for: ${testEmail}`);
  
  // Create a pending subscription
  const { data: pendingData, error: pendingError } = await supabase
    .from('pending_subscriptions')
    .insert({
      session_id: `test_session_${Date.now()}`,
      email: testEmail,
      stripe_customer_id: `test_customer_${Date.now()}`,
      stripe_subscription_id: `test_sub_${Date.now()}`,
      price_key: 'student_plus_monthly',
      metadata: {
        test: true,
        created_by: 'test-script'
      }
    })
    .select()
    .single();

  if (pendingError) {
    console.error('❌ Failed to create pending subscription:', pendingError);
    process.exit(1);
  }

  console.log('✅ Pending subscription created:', pendingData.id);

  console.log(`\n2️⃣ Creating user account with email: ${testEmail}`);
  
  // Create user account
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email: testEmail,
    password: testPassword,
    email_confirm: true,
    user_metadata: {
      display_name: 'Test User'
    }
  });

  if (authError) {
    console.error('❌ Failed to create user:', authError);
    process.exit(1);
  }

  console.log('✅ User created:', authData.user.id);

  // Create user profile in public.users table
  const { error: profileError } = await supabase
    .from('users')
    .insert({
      id: authData.user.id,
      display_name: 'Test User'
    });

  if (profileError) {
    console.error('❌ Failed to create user profile:', profileError);
    process.exit(1);
  }

  console.log('✅ User profile created');

  console.log('\n3️⃣ Simulating claim-pending API call...');
  
  // Simulate the claim-pending endpoint logic
  const userId = authData.user.id;
  
  // Check if pending subscription exists
  const { data: pendingCheck } = await supabase
    .from('pending_subscriptions')
    .select('*')
    .eq('email', testEmail)
    .is('claimed_by', null)
    .single();

  if (!pendingCheck) {
    console.error('❌ Pending subscription not found!');
    process.exit(1);
  }

  console.log('✅ Found pending subscription');

  // Create user subscription
  const { data: subData, error: subError } = await supabase
    .from('user_subscriptions')
    .insert({
      user_id: userId,
      stripe_customer_id: pendingCheck.stripe_customer_id,
      stripe_subscription_id: pendingCheck.stripe_subscription_id,
      status: 'active',
      price_id: 'price_student_plus_monthly',
      current_period_start: new Date().toISOString(),
      current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      metadata: {
        claimed_from_pending: true,
        test: true
      }
    })
    .select()
    .single();

  if (subError) {
    console.error('❌ Failed to create subscription:', subError);
    process.exit(1);
  }

  console.log('✅ User subscription created');

  // Mark pending as claimed
  const { error: claimError } = await supabase
    .from('pending_subscriptions')
    .update({
      claimed_by: userId,
      claimed_at: new Date().toISOString()
    })
    .eq('id', pendingData.id);

  if (claimError) {
    console.error('❌ Failed to mark as claimed:', claimError);
    process.exit(1);
  }

  console.log('✅ Pending subscription marked as claimed');

  console.log('\n4️⃣ Verifying final state...');
  
  // Verify the subscription exists
  const { data: finalCheck } = await supabase
    .from('user_subscriptions')
    .select('*, users!inner(*)')
    .eq('user_id', userId)
    .single();

  if (!finalCheck) {
    console.error('❌ Final verification failed - no subscription found');
    process.exit(1);
  }

  console.log('✅ Final verification passed!');
  console.log('\n📊 Final State:');
  console.log('  - User ID:', userId);
  console.log('  - Email:', testEmail);
  console.log('  - Subscription Status:', finalCheck.status);
  console.log('  - Price ID:', finalCheck.price_id);
  console.log('  - Period End:', finalCheck.current_period_end);

  console.log('\n5️⃣ Cleaning up test data...');
  
  // Clean up test data
  await supabase.from('user_subscriptions').delete().eq('user_id', userId);
  await supabase.from('pending_subscriptions').delete().eq('id', pendingData.id);
  await supabase.from('users').delete().eq('id', userId);
  await supabase.auth.admin.deleteUser(userId);

  console.log('✅ Test data cleaned up');
  console.log('\n' + '=' .repeat(50));
  console.log('🎉 All tests passed successfully!');
}

// Run the test
testSubscriptionClaim().catch(console.error);