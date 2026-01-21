'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { migrateLocalProgressToSupabase } from '@/hooks/useSyncedProgress';
import type { User, Session, AuthChangeEvent } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  signInWithGithub: () => Promise<{ error: string | null }>;
  signInWithApple: () => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  // Memoize supabase client to ensure stable reference across renders
  const supabase = useMemo(() => createClient(), []);

  const refreshSession = useCallback(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setSession(session);
    setUser(session?.user ?? null);
  }, [supabase]);

  useEffect(() => {
    // Get initial session
    refreshSession().finally(() => setLoading(false));

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Only sync to database on sign in, not on sign out
        if (event === 'SIGNED_IN' && session?.user) {
          await syncUserToDatabase(session.user);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase, refreshSession]);

  // Sync auth user to our users table
  async function syncUserToDatabase(authUser: User) {
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('id', authUser.id)
      .single();

    if (!existingUser) {
      // Create user in our table
      await supabase.from('users').insert({
        id: authUser.id,
        display_name: authUser.user_metadata?.display_name || authUser.email?.split('@')[0] || 'User',
      });
    } else {
      // Update last active
      await supabase
        .from('users')
        .update({ last_active_at: new Date().toISOString() })
        .eq('id', authUser.id);
    }

    // Migrate any localStorage progress to Supabase
    try {
      await migrateLocalProgressToSupabase(authUser.id);
    } catch (err) {
      console.error('Failed to migrate progress:', err);
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName || email.split('@')[0],
        },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/welcome`,
      },
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const signInWithGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const signInWithApple = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const signOut = async () => {
    console.log('[AuthContext] signOut called');
    try {
      console.log('[AuthContext] Calling supabase.auth.signOut()...');
      // Use local scope to avoid network requests that might hang
      await supabase.auth.signOut({ scope: 'local' });
      console.log('[AuthContext] supabase.auth.signOut() completed');
    } catch (err) {
      console.error('[AuthContext] supabase.auth.signOut() error:', err);
      // Don't throw - still clear local state even if signOut fails
    }
    console.log('[AuthContext] Setting user/session to null');
    setUser(null);
    setSession(null);
    console.log('[AuthContext] signOut complete');
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  const updatePassword = async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return { error: error.message };
    }

    return { error: null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        signInWithApple,
        signOut,
        refreshSession,
        resetPassword,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
