@echo off
rem Starts EDGEdeck's edgedeck-mcp for the plugin. stdout is the MCP channel, so nothing else may print.
rem edgedeck-mcp takes its folders only as arguments. The plugin passes them as variables instead,
rem which keeps a path with spaces whole, and an unset option (an empty variable) adds no argument.
rem The arguments go to npx as %ARGS%, expanded before npx.cmd runs: npx.cmd got "!ARGS!" as text.
setlocal EnableDelayedExpansion
set "ARGS="
if not "!EDGEDECK_LIBRARY!"=="" set ARGS=--library "!EDGEDECK_LIBRARY!"
if not "!EDGEDECK_GAME!"=="" set ARGS=!ARGS! --game "!EDGEDECK_GAME!"
endlocal & npx -y @edgemodders/edgedeck-mcp@0.28.0 -- %ARGS%
