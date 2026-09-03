'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { migrateLocalProgressToSupabase } from '@/hooks/useSyncedProgress';
import type { User, Session, AuthChangeEvent } from '@supabase/supabase-js';
import { authHeaders } from '@/lib/api/client-auth';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<{ error: string | null; user: any; needsConfirmation?: boolean }>;
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
  // Which user we have already synced, so a recovered session does not re-run
  // the whole sign-in sync on every page load.
  const syncedUserRef = useRef<string | null>(null);

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

        // Fire-and-forget database sync on sign in (don't await!).
        //
        // supabase-js emits SIGNED_IN when it recovers a stored session, not
        // only on an actual login, so this ran on every page load: a profile
        // read, a last_active_at write, a local-progress migration and often a
        // claim-pending POST, every single navigation. Run it once per mounted
        // session instead.
        if (event === 'SIGNED_IN' && session?.user) {
          if (syncedUserRef.current !== session.user.id) {
            syncedUserRef.current = session.user.id;
            // Check if this is a new user (created within last minute)
            const userCreatedAt = new Date(session.user.created_at).getTime();
            const isNewUser = Date.now() - userCreatedAt < 60000; // 1 minute

            syncUserToDatabase(session.user, isNewUser).catch(err => {
              console.error('Failed to sync user to database:', err);
            });
          }
        }

        if (event === 'SIGNED_OUT') {
          syncedUserRef.current = null;
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
  async function syncUserToDatabase(authUser: User, isNewUser: boolean = false) {
    console.log('[AuthContext.syncUserToDatabase] Starting sync for user:', authUser.id, { isNewUser, email: authUser.email });
    
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('id', authUser.id)
      .single();

    if (!existingUser) {
      // Create user in our table
      console.log('[AuthContext.syncUserToDatabase] Creating new user profile');
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

    // Check for and claim any pending subscriptions from anonymous purchase.
    // The stored checkout session id (set on the subscription success page)
    // survives OAuth redirects and lets us link the purchase even when the
    // account email differs from the checkout email. If one is present, keep
    // retrying on each sign-in until the claim succeeds (covers webhook lag).
    let storedSessionId: string | null = null;
    try {
      storedSessionId = localStorage.getItem('pp_checkout_session_id');
    } catch {
      // Storage unavailable - fall back to email matching for new users only
    }

    if (authUser.email && (isNewUser || !existingUser || storedSessionId)) {
      console.log('[AuthContext.syncUserToDatabase] Checking for pending subscriptions');

      // Add a small delay to ensure webhook has processed
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        const response = await fetch('/api/subscription/claim-pending', {
          method: 'POST',
          headers: await authHeaders(),
          body: JSON.stringify({ sessionId: storedSessionId })
        });

        if (response.ok) {
          const result = await response.json();
          if (result.claimed) {
            console.log('[AuthContext.syncUserToDatabase] Successfully claimed pending subscription');
            try { localStorage.removeItem('pp_checkout_session_id'); } catch {}
            // Trigger a subscription refresh via event
            window.dispatchEvent(new CustomEvent('subscription-claimed'));
          } else {
            if (result.hasActiveSubscription) {
              try { localStorage.removeItem('pp_checkout_session_id'); } catch {}
            }
            console.log('[AuthContext.syncUserToDatabase] No pending subscription found');
          }
        } else {
          console.error('[AuthContext.syncUserToDatabase] Claim-pending failed:', response.status);
        }
      } catch (err) {
        console.error('[AuthContext.syncUserToDatabase] Failed to check for pending subscriptions:', err);
      }
    }

    // Migrate any localStorage progress to Supabase
    try {
      await migrateLocalProgressToSupabase(authUser.id);
    } catch (err) {
      console.error('Failed to migrate progress:', err);
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName || email.split('@')[0],
        },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/welcome`,
        // Skip email confirmation - users can practice immediately
        emailConfirmation: false,
      },
    });

    if (error) {
      // Don't confirm whether an address is already registered. With email
      // confirmation disabled Supabase returns "User already registered",
      // which turns /signup into an enumeration oracle - and this userbase is
      // school-age.
      const isExistingAccount = /already\s*registered|already\s*exists|user\s*already/i.test(
        error.message || ''
      );
      return {
        error: isExistingAccount
          ? 'If that email address is not already registered, your account has been created. Try signing in, or reset your password.'
          : error.message,
        user: null,
      };
    }

    // Send welcome email after successful signup (fire-and-forget)
    if (data.user) {
      const firstName = displayName || email.split('@')[0];
      // The route sends only to the caller's own verified address; the name is
      // a display hint, not an addressing field.
      authHeaders()
        .then(headers =>
          fetch('/api/email/welcome', {
            method: 'POST',
            headers,
            body: JSON.stringify({ firstName }),
          })
        )
        .catch(err => {
        console.error('Failed to send welcome email:', err);
        // Don't fail signup if email fails - just log it
      });
    }

    // needsConfirmation: signUp returns a user but NO session when email
    // confirmation is on. Without this the form always pushed to /welcome,
    // which bounces unauthenticated users straight back to /signup - a silent
    // dead end the moment confirmations are re-enabled.
    return { error: null, user: data.user, needsConfirmation: !data.session };
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