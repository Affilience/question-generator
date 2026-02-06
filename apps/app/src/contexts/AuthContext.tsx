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
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.warn('[AuthContext] Session refresh error:', error);
        // Don't clear session on network errors - mobile Safari can be flaky
        if (error.message?.includes('network') || error.message?.includes('fetch')) {
          return;
        }
      }
      
      setSession(session);
      setUser(session?.user ?? null);
    } catch (error) {
      console.error('[AuthContext] Session refresh failed:', error);
      // Don't clear session on errors - mobile Safari may have temporary issues
    }
  }, [supabase]);

  useEffect(() => {
    // Get initial session
    refreshSession().finally(() => setLoading(false));

    // Listen for auth changes
    // IMPORTANT: Don't use async/await here - it causes internal locks that block signOut
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // Fire-and-forget database sync on sign in (don't await!)
        if (event === 'SIGNED_IN' && session?.user) {
          syncUserToDatabase(session.user).catch(err => {
            console.error('Failed to sync user to database:', err);
          });
        }
      }
    );

    // Handle session recovery on page visibility change (mobile app switching, browser tab switching)
    const handleVisibilityChange = () => {
      if (typeof window !== 'undefined' && !document.hidden) {
        // Detect mobile Safari for longer delays
        const isMobileSafari = typeof navigator !== 'undefined' && 
                               /iPhone|iPad|iPod/.test(navigator.userAgent) && 
                               /Safari/.test(navigator.userAgent) && 
                               !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
        
        // Mobile Safari needs longer stabilization time
        const delay = isMobileSafari ? 1000 : 500;
        setTimeout(() => {
          refreshSession().catch(err => {
            console.error('Failed to refresh session on visibility change:', err);
          });
        }, delay);
      }
    };

    // Handle session recovery on window focus (browser/app regaining focus)
    const handleWindowFocus = () => {
      // Detect mobile Safari for longer delays
      const isMobileSafari = typeof navigator !== 'undefined' && 
                             /iPhone|iPad|iPod/.test(navigator.userAgent) && 
                             /Safari/.test(navigator.userAgent) && 
                             !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
      
      // Mobile Safari needs longer delay
      const delay = isMobileSafari ? 800 : 300;
      setTimeout(() => {
        refreshSession().catch(err => {
          console.error('Failed to refresh session on window focus:', err);
        });
      }, delay);
    };

    // Add event listeners for better mobile/desktop session persistence
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('focus', handleWindowFocus);
      
      // Also handle page show event (back/forward navigation, PWA)
      window.addEventListener('pageshow', handleWindowFocus);
    }

    return () => {
      subscription.unsubscribe();
      if (typeof window !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('focus', handleWindowFocus);
        window.removeEventListener('pageshow', handleWindowFocus);
      }
    };
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
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error('[AuthContext] signOut error:', err);
    }
    setUser(null);
    setSession(null);
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