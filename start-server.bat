@echo off
echo Starting North Rift Valley Field Server...
cd /d "%~dp0"
echo Current directory: %CD%
echo.
echo Testing server startup...
node test-server.js
echo.
if %ERRORLEVEL% EQU 0 (
    echo Server test passed! Starting actual server...
    node server.js
) else (
    echo Server test failed! Check the errors above.
    pause
)
