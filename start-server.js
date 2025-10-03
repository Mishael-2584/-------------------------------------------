// Simple server starter that handles the directory issue
const path = require('path');
const { spawn } = require('child_process');

console.log('🚀 Starting North Rift Valley Field Server...');
console.log('📁 Current directory:', process.cwd());

// Try to find the project directory
const possiblePaths = [
  'E:\\MISHAEL WORK\\𝐍𝐨𝐫𝐭𝐡 𝐑𝐢𝐟𝐭 𝐕𝐚𝐥𝐥𝐞𝐲 𝐅𝐢𝐞𝐥𝐝',
  path.join(__dirname),
  process.cwd()
];

let projectPath = null;

for (const testPath of possiblePaths) {
  try {
    const fs = require('fs');
    if (fs.existsSync(path.join(testPath, 'server.js'))) {
      projectPath = testPath;
      console.log('✅ Found project directory:', projectPath);
      break;
    }
  } catch (error) {
    // Continue to next path
  }
}

if (!projectPath) {
  console.error('❌ Could not find project directory with server.js');
  console.log('Please ensure you are in the correct directory');
  process.exit(1);
}

// Change to project directory and start server
process.chdir(projectPath);
console.log('📁 Changed to directory:', process.cwd());

// Start the server
console.log('🔄 Starting server...');
const server = spawn('node', ['server.js'], {
  stdio: 'inherit',
  shell: true
});

server.on('error', (error) => {
  console.error('❌ Failed to start server:', error.message);
});

server.on('exit', (code) => {
  if (code === 0) {
    console.log('✅ Server stopped gracefully');
  } else {
    console.log(`❌ Server exited with code ${code}`);
  }
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping server...');
  server.kill('SIGINT');
});
