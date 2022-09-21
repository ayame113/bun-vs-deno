import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
const commands = [
  ["deno", "run", "-A", "--unstable", "deno.ts"],
  ["bun", "run", "bun.ts"],
];

for (const command of commands) {
  console.log(command);
  const server = new AbortController();
  Deno.spawn(command[0], {
    args: command.slice(1),
    signal: server.signal,
    stdout: "inherit",
    stderr: "inherit",
  });
  await delay(5000);
  await Deno.spawn("./oha-linux-amd64", {
    args: ["-j", "--no-tui", "http://127.0.0.1:9000/"],
    stdout: "inherit",
    stderr: "inherit",
  });
  server.abort();
}
