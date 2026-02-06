'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { migrateLocalProgressToSupabase } from '@/hooks/useSyncedProgress';
import { MobileSessionMonitor } from '@/lib/auth/mobile-session-monitor';
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
  // Mobile session monitor for iOS Safari
  const sessionMonitorRef = useRef<MobileSessionMonitor | null>(null);

  const refreshSession = useCallback(async (): Promise<void> => {
    // Prevent concurrent session refreshes
    if ((refreshSession as any)._pending) {
      return (refreshSession as any)._pending;
    }

    (refreshSession as any)._pending = (async (): Promise<void> => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.warn('[AuthContext] Session refresh error:', error);
          // Don't clear session on network errors - keep existing session
          if (error.message?.includes('network') || error.message?.includes('fetch')) {
            return;
          }
        }
        
        setSession(session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('[AuthContext] Session refresh failed:', error);
        // Don't clear session on errors - mobile Safari may have temporary issues
      } finally {
        (refreshSession as any)._pending = null;
      }
    })();

    return (refreshSession as any)._pending;
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

    // Mobile Safari specific session recovery
    const handleMobileSessionRecovery = useCallback(() => {
      if (typeof window === 'undefined') return;

      // Detect if we're on mobile Safari
      const isMobileSafari = /iPhone|iPad|iPod/.test(navigator.userAgent) && 
                             /Safari/.test(navigator.userAgent) && 
                             !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);

      if (isMobileSafari) {
        // Mobile Safari needs longer stabilization time
        setTimeout(() => {
          // Check if session appears invalid but tokens might exist in storage
          if (!session || !session.access_token) {
            console.log('[AuthContext] Mobile Safari session recovery triggered');
            refreshSession().catch(err => {
              console.warn('Mobile Safari session recovery failed:', err);
            });
          }
        }, 1000); // Longer delay for mobile Safari
      } else {
        // Standard recovery for other browsers
        setTimeout(() => {
          refreshSession().catch(err => {
            console.warn('Session recovery failed:', err);
          });
        }, 300);
      }
    }, [session, refreshSession]);

    // Handle session recovery on page visibility change
    const handleVisibilityChange = useCallback(() => {
      if (typeof window !== 'undefined' && !document.hidden) {
        handleMobileSessionRecovery();
      }
    }, [handleMobileSessionRecovery]);

    // Handle session recovery on window focus
    const handleWindowFocus = useCallback(() => {
      handleMobileSessionRecovery();
    }, [handleMobileSessionRecovery]);

    // Initialize mobile session monitor for enhanced iOS Safari support
    if (typeof window !== 'undefined') {
      sessionMonitorRef.current = new MobileSessionMonitor({
        onSessionLost: () => {
          console.log('[AuthContext] Mobile session monitor detected session loss');
          // Don't immediately clear session - let user try to continue
          // The session may recover on next interaction
        },
        onSessionRecovered: (recoveredSession) => {
          console.log('[AuthContext] Mobile session monitor recovered session');
          if (recoveredSession && recoveredSession.access_token) {
            setSession(recoveredSession);
            setUser(recoveredSession.user || null);
          }
        },
        debugMode: process.env.NODE_ENV === 'development',
      });
    }

    // Add event listeners for better mobile/desktop session persistence
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('focus', handleWindowFocus);
      
      // Also handle page show event (back/forward navigation, PWA)
      window.addEventListener('pageshow', handleWindowFocus);
    }

    return () => {
      subscription.unsubscribe();
      
      // Cleanup mobile session monitor
      if (sessionMonitorRef.current) {
        sessionMonitorRef.current.destroy();
        sessionMonitorRef.current = null;
      }
      
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
