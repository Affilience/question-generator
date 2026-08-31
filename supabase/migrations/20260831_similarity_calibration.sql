-- Calibration pass on the uniqueness RPCs, based on measured trigram
-- similarity of real near-clone families in question_bank (they cluster at
-- 0.5-0.7, not 0.7+ as first assumed — differing numbers dilute the score):
--   * store gate default lowered 0.72 -> 0.55
--   * serve-side prefix filter becomes a parameter (default 0.5)
-- Signature changes, so drop + recreate.

drop function if exists public.get_unseen_question(uuid, text, text, text, text, text, text, text[], boolean);

create or replace function public.get_unseen_question(
  p_user_id uuid,
  p_subject text,
  p_exam_board text,
  p_qualification text,
  p_topic_id text,
  p_subtopic text,
  p_difficulty text,
  p_exclude_prefixes text[] default array[]::text[],
  p_record boolean default true,
  p_prefix_similarity real default 0.5
) returns setof public.question_bank
language plpgsql
security definer
set search_path = public
as $$
declare
  v_row public.question_bank%rowtype;
begin
  select qb.* into v_row
  from public.question_bank qb
  where qb.subject = p_subject
    and qb.exam_board = p_exam_board
    and qb.qualification = p_qualification
    and qb.topic_id = p_topic_id
    and qb.subtopic = p_subtopic
    and qb.difficulty = p_difficulty
    and (p_user_id is null or not exists (
      select 1 from public.user_question_history h
      where h.user_id = p_user_id and h.question_id = qb.id
    ))
    and (coalesce(array_length(p_exclude_prefixes, 1), 0) = 0 or not exists (
      select 1 from unnest(p_exclude_prefixes) e
      where similarity(left(qb.content, 150), left(e, 150)) > p_prefix_similarity
    ))
  order by qb.times_served asc nulls first, random()
  limit 1;

  if v_row.id is null then
    return;
  end if;

  update public.question_bank
  set times_served = coalesce(times_served, 0) + 1
  where id = v_row.id;

  if p_record and p_user_id is not null then
    insert into public.user_question_history (user_id, question_id, context, served_at)
    values (p_user_id, v_row.id, 'practice', now())
    on conflict (user_id, question_id) do update set served_at = now();
  end if;

  return next v_row;
end;
$$;

-- Same signature; only the p_similarity_threshold default changes.
create or replace function public.store_bank_question(
  p_subject text,
  p_exam_board text,
  p_qualification text,
  p_topic_id text,
  p_subtopic text,
  p_difficulty text,
  p_question_type text,
  p_content text,
  p_solution text,
  p_mark_scheme jsonb,
  p_marks integer,
  p_diagram jsonb default null,
  p_user_id uuid default null,
  p_similarity_threshold real default 0.55
) returns table (question_id uuid, was_duplicate boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
  v_dup boolean := false;
begin
  select qb.id into v_id
  from public.question_bank qb
  where qb.subject = p_subject
    and qb.exam_board = p_exam_board
    and qb.qualification = p_qualification
    and qb.topic_id = p_topic_id
    and qb.subtopic = p_subtopic
    and similarity(qb.content, p_content) > p_similarity_threshold
  limit 1;

  if v_id is not null then
    v_dup := true;
  else
    insert into public.question_bank
      (subject, exam_board, qualification, topic_id, subtopic, difficulty,
       question_type, content, solution, mark_scheme, marks, diagram)
    values
      (p_subject, p_exam_board, p_qualification, p_topic_id, p_subtopic, p_difficulty,
       p_question_type, p_content, p_solution, p_mark_scheme, p_marks, p_diagram)
    on conflict (subject, exam_board, qualification, topic_id, subtopic, content)
    do nothing
    returning id into v_id;

    if v_id is null then
      select qb.id into v_id
      from public.question_bank qb
      where qb.subject = p_subject
        and qb.exam_board = p_exam_board
        and qb.qualification = p_qualification
        and qb.topic_id = p_topic_id
        and qb.subtopic = p_subtopic
        and qb.content = p_content
      limit 1;
      v_dup := true;
    end if;
  end if;

  if p_user_id is not null and v_id is not null then
    insert into public.user_question_history (user_id, question_id, context, served_at)
    values (p_user_id, v_id, 'practice', now())
    on conflict (user_id, question_id) do update set served_at = now();
  end if;

  question_id := v_id;
  was_duplicate := v_dup;
  return next;
end;
$$;

revoke execute on function public.get_unseen_question(uuid, text, text, text, text, text, text, text[], boolean, real) from public, anon, authenticated;
revoke execute on function public.store_bank_question(text, text, text, text, text, text, text, text, text, jsonb, integer, jsonb, uuid, real) from public, anon, authenticated;
