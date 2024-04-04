import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qwfcgqdenwfsjxrdvbxa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3ZmNncWRlbndmc2p4cmR2YnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMzkwOTYsImV4cCI6MjAyNzgxNTA5Nn0.4Godm4n5hyl7mnnDLjZ1CKJfFAy4ZdycvdrRWvHchzY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;