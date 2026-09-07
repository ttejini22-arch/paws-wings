create extension if not exists pgcrypto;

create table public.profiles(
 id uuid primary key references auth.users(id) on delete cascade,
 full_name text not null,
 email text unique not null,
 phone text,
 address text,
 role text not null default 'user' check(role in ('user','volunteer','ngo','admin')),
 status text not null default 'active' check(status in ('active','inactive')),
 created_at timestamptz default now(),
 updated_at timestamptz default now()
);

create table public.animal_reports(
 id uuid primary key default gen_random_uuid(),
 reporter_id uuid references public.profiles(id) on delete set null,
 reporter_name text not null,
 phone text not null,
 email text not null,
 animal_type text not null,
 category text not null check(category in ('Hungry','Injured','Sick','Abandoned','Accident Case','Other')),
 description text not null,
 image_url text,
 location text not null,
 status text not null default 'Pending',
 created_at timestamptz default now()
);

create table public.animals(
 id uuid primary key default gen_random_uuid(),
 name text not null,
 animal_type text not null,
 breed text,
 age text,
 gender text,
 location text,
 description text,
 health_status text,
 image_url text,
 adoption_status text not null default 'Available',
 created_at timestamptz default now()
);

create table public.rescue_cases(
 id uuid primary key default gen_random_uuid(),
 report_id uuid references public.animal_reports(id) on delete cascade,
 assigned_volunteer_id uuid,
 assigned_ngo_id uuid,
 location text,
 priority text default 'Medium',
 status text default 'Pending',
 created_at timestamptz default now()
);

create table public.volunteers(
 id uuid primary key default gen_random_uuid(),
 user_id uuid references public.profiles(id) on delete cascade,
 name text not null,
 email text not null,
 phone text not null,
 age integer,
 address text,
 skills text,
 availability text,
 preferred_activity text,
 emergency_contact text,
 approval_status text default 'Pending',
 created_at timestamptz default now()
);

create table public.ngos(
 id uuid primary key default gen_random_uuid(),
 user_id uuid references public.profiles(id) on delete set null,
 organization_name text not null,
 email text not null,
 phone text,
 address text,
 registration_number text unique,
 description text,
 approval_status text default 'Pending',
 created_at timestamptz default now()
);

create table public.donations(
 id uuid primary key default gen_random_uuid(),
 donor_id uuid references public.profiles(id) on delete set null,
 donor_name text not null,
 email text not null,
 phone text,
 donation_type text not null,
 amount numeric(12,2),
 food_type text,
 quantity text,
 location text,
 purpose text,
 payment_method text,
 status text default 'Recorded',
 created_at timestamptz default now()
);

create table public.adoption_applications(
 id uuid primary key default gen_random_uuid(),
 animal_id uuid references public.animals(id) on delete cascade,
 applicant_id uuid references public.profiles(id) on delete cascade,
 applicant_name text not null,
 age integer,
 phone text not null,
 email text not null,
 address text not null,
 occupation text,
 reason text not null,
 previous_pet_experience text,
 home_type text,
 status text default 'Pending',
 admin_notes text,
 created_at timestamptz default now()
);

create table public.notifications(
 id uuid primary key default gen_random_uuid(),
 user_id uuid references public.profiles(id) on delete cascade,
 title text not null,
 message text not null,
 type text default 'System',
 is_read boolean default false,
 created_at timestamptz default now()
);

create table public.contact_messages(
 id uuid primary key default gen_random_uuid(),
 name text not null,
 email text not null,
 phone text,
 subject text not null,
 message text not null,
 status text default 'Unread',
 created_at timestamptz default now()
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public
as $$
begin
 insert into public.profiles(id,full_name,email)
 values(new.id,coalesce(new.raw_user_meta_data->>'full_name','New User'),new.email)
 on conflict(id) do nothing;
 return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

insert into public.animals(name,animal_type,breed,age,gender,location,description,health_status)
values
('Milo','Dog','Indie','2 years','Male','Tiruchengode','Friendly rescued dog looking for a caring home.','Healthy'),
('Luna','Cat','Domestic Short Hair','1 year','Female','Namakkal','Calm rescued cat looking for a safe home.','Healthy'),
('Kiki','Bird','Parakeet','8 months','Female','Salem','Small rescued bird needing responsible care.','Recovering');
