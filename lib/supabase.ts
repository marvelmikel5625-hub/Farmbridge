import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ajtybnpyfrclzdipgyeb.supabase.co';
const supabaseAnonKey = 'sb_publishable_3PGOCU2gR3tEpaTUR-a75g_GOJu_sfj';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
