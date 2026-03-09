-- Create pending_subscriptions table for anonymous purchases
CREATE TABLE IF NOT EXISTS public.pending_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    stripe_customer_id TEXT NOT NULL,
    stripe_subscription_id TEXT,
    price_key TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    claimed_at TIMESTAMP WITH TIME ZONE,
    claimed_by UUID REFERENCES auth.users(id),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Add indexes for quick lookups
CREATE INDEX idx_pending_subscriptions_email ON public.pending_subscriptions(email);
CREATE INDEX idx_pending_subscriptions_session_id ON public.pending_subscriptions(session_id);
CREATE INDEX idx_pending_subscriptions_claimed ON public.pending_subscriptions(claimed_by) WHERE claimed_by IS NOT NULL;

-- Add RLS policies
ALTER TABLE public.pending_subscriptions ENABLE ROW LEVEL SECURITY;

-- Only service role can insert (for webhooks)
CREATE POLICY "Service role can manage pending subscriptions" 
    ON public.pending_subscriptions 
    FOR ALL 
    USING (auth.role() = 'service_role');

-- Users can view their own pending subscriptions by email
CREATE POLICY "Users can view their pending subscriptions" 
    ON public.pending_subscriptions 
    FOR SELECT 
    USING (
        auth.jwt() ->> 'email' = email 
        AND claimed_by IS NULL
    );

COMMENT ON TABLE public.pending_subscriptions IS 'Stores subscription information for users who purchase before creating an account';
COMMENT ON COLUMN public.pending_subscriptions.session_id IS 'Stripe checkout session ID';
COMMENT ON COLUMN public.pending_subscriptions.email IS 'Customer email from Stripe checkout';
COMMENT ON COLUMN public.pending_subscriptions.claimed_at IS 'When the subscription was claimed by a user account';
COMMENT ON COLUMN public.pending_subscriptions.claimed_by IS 'User who claimed this subscription';