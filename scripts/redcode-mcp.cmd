@echo off
rem Starts REDcode's redcode-mcp for the plugin. stdout is the MCP channel, so nothing else may print.
rem An unset plugin option arrives as an empty variable, and redcode-mcp (0.3.0 still) takes an empty
rem variable as set, which hides REDcode's VS Code settings. Clear the empty ones first.
if "%REDCODE_GAME_PATH%"=="" set "REDCODE_GAME_PATH="
if "%REDBRIDGE_EXE%"=="" set "REDBRIDGE_EXE="
npx -y @edgemodders/redcode-mcp@0.3.0 %*
