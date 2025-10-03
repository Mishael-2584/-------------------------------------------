// Simple test to check if server can start without errors
console.log('Testing server startup...');

try {
  // Load environment variables first
  require('dotenv').config({ path: './config.env' });
  
  // Set fallback environment variables
  if (!process.env.SUPABASE_URL) {
    process.env.SUPABASE_URL = 'https://yiloouwgjldnpbnnchnq.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTAxMjcsImV4cCI6MjA3NDk4NjEyN30.x-RA4PlFZtZBxnh8xC4XnJshmRIxFA_aF0Kj8wGKU2k';
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';
    process.env.JWT_SECRET = 'U0oI2H12wtDYPJiWXg9/fbwuaL0I//KCAoqpc+GKsg1uUqbE4FbIYDnIKpA5e6Kg5v46aCuVa1qagGxQshK15Q==';
  }

  console.log('Environment variables loaded:');
  console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✓' : '✗');
  console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✓' : '✗');
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✓' : '✗');

  // Test route imports
  console.log('\nTesting route imports...');
  
  const authRoute = require('./routes/auth');
  console.log('✓ auth.js loaded');
  
  const churchesRoute = require('./routes/churches');
  console.log('✓ churches.js loaded');
  
  const eventsRoute = require('./routes/events');
  console.log('✓ events.js loaded');
  
  const contactRoute = require('./routes/contact');
  console.log('✓ contact.js loaded');
  
  const departmentsRoute = require('./routes/departments');
  console.log('✓ departments.js loaded');
  
  const leadershipRoute = require('./routes/leadership');
  console.log('✓ leadership.js loaded');
  
  const sermonsRoute = require('./routes/sermons');
  console.log('✓ sermons.js loaded');

  console.log('\n✅ All routes loaded successfully!');
  console.log('✅ Server should now start without the "supabaseUrl is required" error.');

} catch (error) {
  console.error('\n❌ Error during server test:');
  console.error(error.message);
  console.error('\nStack trace:');
  console.error(error.stack);
  process.exit(1);
}
