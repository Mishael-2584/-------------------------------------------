@echo off
echo Starting North Rift Valley Field Server...
echo.

REM Change to the project directory
cd /d "E:\MISHAEL WORK\𝐍𝐨𝐫𝐭𝐡 𝐑𝐢𝐟𝐭 𝐕𝐚𝐥𝐥𝐞𝐲 𝐅𝐢𝐞𝐥𝐝"

REM Check if we're in the right directory
if not exist "server.js" (
    echo ERROR: server.js not found in current directory
    echo Current directory: %CD%
    echo.
    echo Please ensure you are in the correct project directory
    pause
    exit /b 1
)

echo Current directory: %CD%
echo Found server.js: ✓
echo.

REM Test if Node.js is available
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Start the server
echo Starting server on http://localhost:5000...
echo Press Ctrl+C to stop the server
echo.
node server.js
