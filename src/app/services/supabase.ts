import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zanjsybekkkadfqfbilc.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbmpzeWJla2trYWRmcWZiaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNzc1OTIsImV4cCI6MjA5Mjk1MzU5Mn0.jP2PlBhacXCirKmyu8nSLAuKjIRCRH7LKYoKK0BU4SA';
export const supabase = createClient(supabaseUrl, supabaseKey);
