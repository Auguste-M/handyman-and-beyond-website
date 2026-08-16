/*
  # Create leads table for free estimate & contact form submissions

  1. Purpose
    - Stores homeowner inquiries submitted through the "Get a Free Estimate"
      forms and the Contact page form across the Handyman & Beyond website.
    - This is a single-tenant, no-login marketing site, so there are no
      per-user accounts. Every visitor submits through the shared public
      (anon) key.

  2. New Tables
    - `leads`
      - `id` (uuid, primary key) - unique identifier for the submission
      - `created_at` (timestamptz) - when the request came in
      - `name` (text, required) - homeowner's name
      - `email` (text) - homeowner's email address
      - `phone` (text) - homeowner's phone number
      - `city` (text) - homeowner's city / service area
      - `service_interest` (text) - what kind of help they need
      - `message` (text) - additional details from the homeowner
      - `source` (text, required) - which form/section on the site the
        request came from (e.g. "hero", "contact_page", "final_cta"),
        used only for internal tracking of what drives conversions

  3. Security
    - Row Level Security (RLS) is enabled on `leads`.
    - Only an INSERT policy is defined for the `anon` and `authenticated`
      roles, so visitors can submit a request. No SELECT, UPDATE, or DELETE
      policy is created, so submitted leads (which contain personal contact
      information) cannot be read back, altered, or deleted through the
      public API. The business owner can review submissions directly from
      the Supabase dashboard, which uses privileged access and bypasses RLS.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text,
  phone text,
  city text,
  service_interest text,
  message text,
  source text NOT NULL DEFAULT 'website'
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);
