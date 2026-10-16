// Speaks MCP over stdio to a server, with no Claude in between: initialize, call one tool, print the result.
//
//   node tools/test/mcp-probe.cjs [--empty NAME]... "<command line>" <tool> [<arguments as JSON>]
//
// The command line runs through `cmd /c`, as the plugin starts its servers. `--empty NAME` sets the
// variable NAME to an empty string, which is what an unset plugin option becomes. Exits 0 when the
// tool answers without an error, 1 otherwise.
const { spawn } = require("child_process");

const argv = process.argv.slice(2);
const env = { ...process.env };
while (argv[0] === "--empty") {
  env[argv[1]] = "";
  argv.splice(0, 2);
}
const [commandLine, tool, toolArgs = "{}"] = argv;
if (!commandLine || !tool) {
  console.error('usage: node mcp-probe.cjs [--empty NAME]... "<command line>" <tool> [<arguments as JSON>]');
  process.exit(2);
}

const server = spawn("cmd", ["/c", commandLine], { env });
let buffer = "";
let stderr = "";
server.stderr.on("data", (d) => (stderr += d));
const send = (message) => server.stdin.write(JSON.stringify({ jsonrpc: "2.0", ...message }) + "\n");
const finish = (code) => {
  console.log("--- server log (last lines) ---\n" + stderr.trim().split("\n").slice(-6).join("\n"));
  server.kill();
  process.exit(code);
};

server.stdout.on("data", (d) => {
  buffer += d;
  let i;
  while ((i = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, i).trim();
    buffer = buffer.slice(i + 1);
    if (!line) continue;
    let message;
    try {
      message = JSON.parse(line);
    } catch {
      console.log("Not JSON on stdout (it would break MCP): " + line);
      continue;
    }
    if (message.id === 1) {
      send({ method: "notifications/initialized" });
      send({ id: 2, method: "tools/call", params: { name: tool, arguments: JSON.parse(toolArgs) } });
    } else if (message.id === 2) {
      const result = message.result ?? message.error;
      for (const part of result?.content ?? []) console.log(part.text ?? part);
      if (!result?.content) console.log(JSON.stringify(result));
      finish(message.error || result?.isError ? 1 : 0);
    }
  }
});

send({ id: 1, method: "initialize", params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "mcp-probe", version: "1" } } });
setTimeout(() => {
  console.log("No answer in 150 s.");
  finish(1);
}, 150000);
