const { createClient } = require('@supabase/supabase-js');

// Test with the current environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kjonbgvzvsjrahhzznjf.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '3Z6dnNqcmFoaHp6bmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMTgzMjAsImV4cCI6MjA2NjY5NDMyMH0.W9uulPKbIxQKFGDXgiYWTRb9j0ft59MNs2tJauqtQIQ';

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key length:', supabaseAnonKey.length);
console.log('Key starts with:', supabaseAnonKey.substring(0, 20) + '...');

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('\nAttempting to fetch from kpis table...');
    const { data, error } = await supabase.from('kpis').select('*').limit(1);
    
    if (error) {
      console.error('Error:', error);
      console.log('\nTroubleshooting tips:');
      console.log('1. Check if the API key is complete (should be ~200+ characters)');
      console.log('2. Verify the table "kpis" exists in your Supabase database');
      console.log('3. Check if RLS (Row Level Security) is enabled and configured');
      console.log('4. Verify the API key has the correct permissions');
    } else {
      console.log('Success! Data:', data);
    }
  } catch (err) {
    console.error('Exception:', err);
  }
}

testConnection(); 