-- Table: sections (one row per section of a page)
create table if not exists sections (
  id uuid primary key default gen_random_uuid(),
  page text not null,                -- 'home' | 'about' | 'solutions' | 'contact'
  section_key text not null,         -- e.g. 'intro', 'beliefs'
  label text not null,               -- human name, e.g. 'Beliefs'
  position int not null default 0,   -- display order
  enabled boolean not null default true,  -- show/hide on public site
  data jsonb not null default '{}',  -- the editable content
  updated_at timestamptz default now(),
  unique(page, section_key)
);

-- Table: global settings (brand, navbar, footer, contact, admin password hash)
create table if not exists site_settings (
  key text primary key,
  value jsonb not null
);

-- Note: We are using Supabase Auth (admin email/password) for authentication.
-- RLS Policies for sections
alter table sections enable row level security;

create policy "Public sections are viewable by everyone."
  on sections for select
  using ( enabled = true );

create policy "Authenticated users can do all on sections."
  on sections for all
  to authenticated
  using ( true )
  with check ( true );

-- RLS Policies for site_settings
alter table site_settings enable row level security;

create policy "Settings are viewable by everyone."
  on site_settings for select
  using ( true );

create policy "Authenticated users can do all on site_settings."
  on site_settings for all
  to authenticated
  using ( true )
  with check ( true );

-- Table: enquiries
create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  company text,
  industry text,
  website text,
  project_type text,
  timeline text,
  budget text,
  status text not null default 'new'   -- 'new' | 'contacted' | 'closed'
);

create index if not exists enquiries_created_at_idx on enquiries (created_at desc);

alter table enquiries enable row level security;

-- Anyone on the public site can submit the form (including admins testing it)
create policy "Anyone can insert enquiries"
  on enquiries for insert
  with check ( true );

-- Only logged-in admins can view/update (stays private)
create policy "Authenticated can read enquiries"
  on enquiries for select to authenticated
  using ( true );

create policy "Authenticated can update enquiries"
  on enquiries for update to authenticated
  using ( true )
  with check ( true );
