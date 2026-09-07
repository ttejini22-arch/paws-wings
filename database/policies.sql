alter table public.profiles enable row level security;
alter table public.animal_reports enable row level security;
alter table public.animals enable row level security;
alter table public.rescue_cases enable row level security;
alter table public.volunteers enable row level security;
alter table public.ngos enable row level security;
alter table public.donations enable row level security;
alter table public.adoption_applications enable row level security;
alter table public.notifications enable row level security;
alter table public.contact_messages enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path=public
as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin' and status='active'); $$;

create policy "profiles own read" on public.profiles for select to authenticated using(id=auth.uid() or public.is_admin());
create policy "profiles own update" on public.profiles for update to authenticated using(id=auth.uid() or public.is_admin()) with check(id=auth.uid() or public.is_admin());

create policy "reports read" on public.animal_reports for select to authenticated using(true);
create policy "reports insert own" on public.animal_reports for insert to authenticated with check(reporter_id=auth.uid());
create policy "reports update own admin" on public.animal_reports for update to authenticated using(reporter_id=auth.uid() or public.is_admin()) with check(reporter_id=auth.uid() or public.is_admin());

create policy "animals read" on public.animals for select to anon,authenticated using(true);
create policy "animals admin" on public.animals for all to authenticated using(public.is_admin()) with check(public.is_admin());

create policy "rescue read" on public.rescue_cases for select to anon,authenticated using(true);
create policy "rescue admin" on public.rescue_cases for all to authenticated using(public.is_admin()) with check(public.is_admin());

create policy "volunteer own" on public.volunteers for all to authenticated using(user_id=auth.uid() or public.is_admin()) with check(user_id=auth.uid() or public.is_admin());
create policy "ngo own" on public.ngos for all to authenticated using(user_id=auth.uid() or public.is_admin()) with check(user_id=auth.uid() or public.is_admin());

create policy "donation own insert" on public.donations for insert to authenticated with check(donor_id=auth.uid());
create policy "donation own read" on public.donations for select to authenticated using(donor_id=auth.uid() or public.is_admin());

create policy "adoption own insert" on public.adoption_applications for insert to authenticated with check(applicant_id=auth.uid());
create policy "adoption own read" on public.adoption_applications for select to authenticated using(applicant_id=auth.uid() or public.is_admin());
create policy "adoption admin update" on public.adoption_applications for update to authenticated using(public.is_admin()) with check(public.is_admin());

create policy "notifications own" on public.notifications for select to authenticated using(user_id=auth.uid() or public.is_admin());
create policy "notifications own update" on public.notifications for update to authenticated using(user_id=auth.uid() or public.is_admin()) with check(user_id=auth.uid() or public.is_admin());

create policy "contact insert" on public.contact_messages for insert to anon,authenticated with check(true);
create policy "contact admin read" on public.contact_messages for select to authenticated using(public.is_admin());
