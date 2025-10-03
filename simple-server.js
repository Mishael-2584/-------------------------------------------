// Simple test server to verify Node.js is working
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'North Rift Valley Field Server is running!',
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'North Rift Valley Field API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Test endpoint working',
    data: {
      node_version: process.version,
      platform: process.platform,
      uptime: process.uptime()
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Simple test server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`🌐 Main page: http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});

// Handle errors
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
