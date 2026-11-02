---
type: llm
weight: 2
---

The user already has the EDGE plugin (EDGEchat) installed, which brings all four servers.
PASS if the answer sends the user to `/edge:setup` (or the plugin's settings) to check and finish the connection, and for REDnode says the game must be running with REDnode's **MCP server** switched on.
FAIL if it tells the user to add the servers by hand (`claude mcp add ...`, running REDnode's copied setup command, or EDGEdeck's or EDGEmat's "Connect Claude Code" commands), since those duplicate the plugin's servers.
Not a reason to FAIL: saying to remove servers added by hand earlier, or to keep a hand-added `rednode` on game 2.31 (where REDnode has no sign-in); both are the plugin's own advice. Going through `/edge:setup`'s checks itself in the answer, when the servers are not connected in the session, is fine as long as it ends with what the user should do.
