-- Make get_unseen_question safe under concurrency: parallel calls for the
-- same user+key could both read the same candidate before either recorded
-- history (paper generation now runs questions in parallel). FOR UPDATE
-- SKIP LOCKED makes each concurrent call claim a different row; once the
-- transaction commits, the history anti-join takes over.
-- Same signature as 20260831_rpc_marks_type_context — body-only change.

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
  p_prefix_similarity real default 0.5,
  p_question_type text default null,
  p_marks integer default null,
  p_context text default 'practice'
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
    and (p_question_type is null or qb.question_type = p_question_type)
    and (p_marks is null or qb.marks between p_marks - 1 and p_marks + 1)
    and (p_user_id is null or not exists (
      select 1 from public.user_question_history h
      where h.user_id = p_user_id and h.question_id = qb.id
    ))
    and (coalesce(array_length(p_exclude_prefixes, 1), 0) = 0 or not exists (
      select 1 from unnest(p_exclude_prefixes) e
      where similarity(left(qb.content, 150), left(e, 150)) > p_prefix_similarity
    ))
  order by qb.times_served asc nulls first, random()
  limit 1
  for update of qb skip locked;

  if v_row.id is null then
    return;
  end if;

  update public.question_bank
  set times_served = coalesce(times_served, 0) + 1
  where id = v_row.id;

  if p_record and p_user_id is not null then
    insert into public.user_question_history (user_id, question_id, context, served_at)
    values (p_user_id, v_row.id, p_context, now())
    on conflict (user_id, question_id) do update set served_at = now();
  end if;

  return next v_row;
end;
$$;

revoke execute on function public.get_unseen_question(uuid, text, text, text, text, text, text, text[], boolean, real, text, integer, text) from public, anon, authenticated;
