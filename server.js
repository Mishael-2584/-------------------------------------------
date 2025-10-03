const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: './config.env' });

// Set environment variables if not loaded
if (!process.env.SUPABASE_URL) {
  process.env.SUPABASE_URL = 'https://yiloouwgjldnpbnnchnq.supabase.co';
  process.env.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MTAxMjcsImV4cCI6MjA3NDk4NjEyN30.x-RA4PlFZtZBxnh8xC4XnJshmRIxFA_aF0Kj8wGKU2k';
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpbG9vdXdnamxkbnBibm5jaG5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTQxMDEyNywiZXhwIjoyMDc0OTg2MTI3fQ.e_rzSSVphVDdy1ifF-4vUmTWY3psBOGlk85AkJTrZoI';
  process.env.JWT_SECRET = 'U0oI2H12wtDYPJiWXg9/fbwuaL0I//KCAoqpc+GKsg1uUqbE4FbIYDnIKpA5e6Kg5v46aCuVa1qagGxQshK15Q==';
}

console.log('Environment variables loaded:');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✓' : '✗');
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✓' : '✗');
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✓' : '✗');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✓' : '✗');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/churches', require('./routes/churches'));
app.use('/api/events', require('./routes/events'));
app.use('/api/sermons', require('./routes/sermons'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/leadership', require('./routes/leadership'));

// Serve static files from the React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/out')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/out/index.html'));
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'North Rift Valley Field API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});