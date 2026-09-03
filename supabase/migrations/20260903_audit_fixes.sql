-- Production audit remediation, 2026-09-03.
--
-- Groups:
--   1. Webhook idempotency ledger (required by api/stripe/webhook)
--   2. Atomic rate limiting (required by lib/rate-limit.ts)
--   3. Reliable user-profile creation
--   4. Remove the subscription-claiming triggers and lock down their functions
--   5. Progress uniqueness that includes subject / board / qualification
--   6. Retention for api_usage
--   7. Tighten journey_events write access

-- ---------------------------------------------------------------------------
-- 1. Webhook idempotency
--
-- Stripe delivers at least once and retries on any non-2xx. Nothing recorded
-- which events had been handled, so a redelivery re-ran the handler.
-- ---------------------------------------------------------------------------

create table if not exists public.processed_stripe_events (
  event_id text primary key,
  event_type text not null,
  processed_at timestamptz not null default now()
);

alter table public.processed_stripe_events enable row level security;

-- Service role only; no policy for anon/authenticated.
drop policy if exists "Service role manages processed events" on public.processed_stripe_events;
create policy "Service role manages processed events"
  on public.processed_stripe_events
  for all
  to service_role
  using (true)
  with check (true);

-- Keep 90 days; Stripe's own retry window is far shorter.
select cron.schedule(
  'prune-processed-stripe-events',
  '41 3 * * *',
  $$delete from public.processed_stripe_events where processed_at < now() - interval '90 days'$$
);

-- ---------------------------------------------------------------------------
-- 2. Atomic rate limiting
--
-- The old read-then-write in lib/rate-limit.ts could not work for anonymous
-- traffic: unique_user_endpoint_window covers (user_id, endpoint,
-- window_start) and Postgres treats NULLs as distinct, so anonymous rows never
-- conflicted and every request inserted a new one (114,742 of 117,475 rows).
-- Once a window held two rows, .single() errored into a branch that failed
-- open AND skipped the increment, silently disabling the limiter.
-- ---------------------------------------------------------------------------

-- Deduplicate existing anonymous rows before adding the constraint.
with ranked as (
  select id,
         row_number() over (
           partition by ip_address, endpoint, window_start
           order by request_count desc, created_at asc
         ) as rn,
         sum(request_count) over (partition by ip_address, endpoint, window_start) as total
  from public.api_usage
  where user_id is null
)
update public.api_usage a
set request_count = ranked.total
from ranked
where a.id = ranked.id and ranked.rn = 1;

delete from public.api_usage a
using (
  select id,
         row_number() over (
           partition by ip_address, endpoint, window_start
           order by request_count desc, created_at asc
         ) as rn
  from public.api_usage
  where user_id is null
) ranked
where a.id = ranked.id and ranked.rn > 1;

create unique index if not exists unique_ip_endpoint_window
  on public.api_usage (ip_address, endpoint, window_start)
  where user_id is null;

create or replace function public.check_rate_limit(
  p_user_id uuid,
  p_ip_address text,
  p_endpoint text,
  p_window_start timestamptz,
  p_max_requests integer
) returns table (allowed boolean, request_count integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  if p_user_id is not null then
    insert into public.api_usage (user_id, ip_address, endpoint, request_count, window_start)
    values (p_user_id, null, p_endpoint, 1, p_window_start)
    on conflict (user_id, endpoint, window_start)
    do update set request_count = public.api_usage.request_count + 1
    returning public.api_usage.request_count into v_count;
  else
    insert into public.api_usage (user_id, ip_address, endpoint, request_count, window_start)
    values (null, p_ip_address, p_endpoint, 1, p_window_start)
    on conflict (ip_address, endpoint, window_start) where user_id is null
    do update set request_count = public.api_usage.request_count + 1
    returning public.api_usage.request_count into v_count;
  end if;

  allowed := v_count <= p_max_requests;
  request_count := v_count;
  return next;
end;
$$;

revoke execute on function public.check_rate_limit(uuid, text, text, timestamptz, integer)
  from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- 3. Reliable user-profile creation
--
-- There was NO trigger on auth.users. A profile row existed only if one
-- client-side insert in AuthContext succeeded, and its error was discarded.
-- 59 of 3,503 accounts had no profile row — and because subscription claiming
-- keys off public.users, one of them had an unclaimable paid purchase.
-- ---------------------------------------------------------------------------

create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, display_name)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'display_name',
      new.raw_user_meta_data->>'full_name',
      split_part(coalesce(new.email, 'user'), '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists create_profile_on_signup on auth.users;
create trigger create_profile_on_signup
  after insert on auth.users
  for each row execute function public.handle_new_auth_user();

-- Backfill the accounts that never got one.
insert into public.users (id, display_name)
select a.id,
       coalesce(
         a.raw_user_meta_data->>'display_name',
         a.raw_user_meta_data->>'full_name',
         split_part(coalesce(a.email, 'user'), '@', 1)
       )
from auth.users a
where not exists (select 1 from public.users u where u.id = a.id)
on conflict (id) do nothing;

-- ---------------------------------------------------------------------------
-- 4. Remove the subscription-claiming triggers
--
-- claim_pending_subscription_for_user() looked up price_id by a metadata key
-- ('key') that no subscription_prices row carries, so price_id was ALWAYS
-- null — and getUserTier reads the tier out of price_id, so those customers
-- resolved to the free tier. It also hardcoded NOW() + 1 month for annual
-- buyers and matched emails case-sensitively. Because it fired on every
-- sign-in (AuthContext writes last_active_at), it claimed purchases before the
-- API route could, and that route then found nothing to do.
--
-- The API path (lib/subscription/claim.ts) handles annual terms, alt emails
-- and token-approved cross-email claims correctly. Let it own claiming.
-- ---------------------------------------------------------------------------

drop trigger if exists claim_subscription_on_signup on public.users;
drop trigger if exists claim_subscription_on_signin on public.users;

-- Both functions are SECURITY DEFINER with EXECUTE granted to PUBLIC, so they
-- were callable unauthenticated over /rest/v1/rpc/ with the publishable key.
-- sync_user_subscription takes an arbitrary user_id. Neither is referenced
-- anywhere in the application.
revoke execute on function public.sync_user_subscription(uuid) from public, anon, authenticated;
revoke execute on function public.claim_pending_subscription_for_user() from public, anon, authenticated;

drop function if exists public.sync_user_subscription(uuid);
drop function if exists public.claim_pending_subscription_for_user();

-- Two other SECURITY DEFINER functions are likewise callable by anyone and
-- unused by the application.
revoke execute on function public.increment_times_served(uuid) from public, anon, authenticated;

-- Give the remaining trigger function a fixed search_path (linter 0011).
create or replace function public.update_cache_access()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.accessed_at = now();
  new.access_count = new.access_count + 1;
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- 5. Progress uniqueness must include the subject
--
-- user_topic_progress was unique on (user_id, topic_id, subtopic) only, while
-- carrying subject / exam_board / qualification columns. topic_id
-- 'alevel-physics-mechanics' already appears under both maths and physics, so
-- a second subject's insert violated the constraint and failed silently, and
-- the UI aggregated the two subjects into one figure.
-- ---------------------------------------------------------------------------

-- Fill in the missing context before tightening (627 legacy rows).
update public.user_topic_progress
set subject = coalesce(subject, 'maths'),
    exam_board = coalesce(exam_board, 'aqa'),
    qualification = coalesce(qualification, 'gcse')
where subject is null or exam_board is null or qualification is null;

-- Collapse any duplicates that the looser constraint allowed (subtopic null).
with ranked as (
  select id,
         row_number() over (
           partition by user_id, topic_id, coalesce(subtopic, ''), subject, exam_board, qualification
           order by last_practiced_at desc nulls last, created_at asc
         ) as rn,
         sum(attempted) over (
           partition by user_id, topic_id, coalesce(subtopic, ''), subject, exam_board, qualification
         ) as total_attempted,
         sum(correct) over (
           partition by user_id, topic_id, coalesce(subtopic, ''), subject, exam_board, qualification
         ) as total_correct
  from public.user_topic_progress
)
update public.user_topic_progress p
set attempted = ranked.total_attempted,
    correct = ranked.total_correct
from ranked
where p.id = ranked.id and ranked.rn = 1;

delete from public.user_topic_progress p
using (
  select id,
         row_number() over (
           partition by user_id, topic_id, coalesce(subtopic, ''), subject, exam_board, qualification
           order by last_practiced_at desc nulls last, created_at asc
         ) as rn
  from public.user_topic_progress
) ranked
where p.id = ranked.id and ranked.rn > 1;

alter table public.user_topic_progress
  drop constraint if exists user_topic_progress_user_id_topic_id_subtopic_key;

create unique index if not exists user_topic_progress_scoped_key
  on public.user_topic_progress (
    user_id, topic_id, coalesce(subtopic, ''), subject, exam_board, qualification
  );

-- ---------------------------------------------------------------------------
-- 6. Retention for api_usage
--
-- 117,475 rows / 29 MB with no prune, growing 45,395 rows in August alone, on
-- a 500 MB budget. Windows older than a week have no purpose.
-- ---------------------------------------------------------------------------

delete from public.api_usage where window_start < now() - interval '7 days';

select cron.schedule(
  'prune-api-usage',
  '29 3 * * *',
  $$delete from public.api_usage where window_start < now() - interval '7 days'$$
);

-- ---------------------------------------------------------------------------
-- 7. journey_events write access
--
-- The INSERT policy was `with check (true)` and /api/analytics/track used the
-- anon key, so anyone could append unbounded rows to the largest table in the
-- database. The route now writes with the service role.
-- The SELECT policy also exposed every row with a null user_id (all logged-out
-- traffic) to anyone holding the publishable key.
-- ---------------------------------------------------------------------------

drop policy if exists "Users can insert journey events" on public.journey_events;

drop policy if exists "Service role manages journey events" on public.journey_events;
create policy "Service role manages journey events"
  on public.journey_events
  for all
  to service_role
  using (true)
  with check (true);

drop policy if exists "Users can read own journey events" on public.journey_events;
create policy "Users can read own journey events"
  on public.journey_events
  for select
  using ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- 8. Housekeeping: reap abandoned paper jobs
-- ---------------------------------------------------------------------------

update public.paper_jobs
set status = 'failed',
    error = 'Generation timed out. Please try again.',
    updated_at = now()
where status in ('pending', 'processing')
  and updated_at < now() - interval '1 hour';

select cron.schedule(
  'reap-stale-paper-jobs',
  '*/10 * * * *',
  $$update public.paper_jobs
      set status = 'failed',
          error = 'Generation timed out. Please try again.',
          updated_at = now()
    where status in ('pending','processing')
      and updated_at < now() - interval '15 minutes'$$
);
