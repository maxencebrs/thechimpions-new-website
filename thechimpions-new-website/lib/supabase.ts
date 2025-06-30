import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kjonbgvzvsjrahhzznjf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqb25iZ3Z6dnNqcmFoaHp6bmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTgzMjAsImV4cCI6MjA2NjY5NDMyMH0.W9uulPKbIxQKFGDXgiYWTRb9j0ft59MNs2tJauqtQIQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 