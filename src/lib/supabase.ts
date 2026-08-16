import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadSubmission {
  name: string;
  email?: string;
  phone?: string;
  city?: string;
  service_interest?: string;
  message?: string;
  source: string;
}

export async function submitLead(lead: LeadSubmission) {
  const { error } = await supabase.from('leads').insert([lead]);
  if (error) throw error;
}
