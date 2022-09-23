import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
const commands = [
  ["deno", "run", "-A", "--unstable", "deno.ts"],
  ["bun", "run", "bun.ts"],
];

// const bench = [
//   "./oha-linux-amd64",
//   "-j",
//   "-n",
//   "10000",
//   "--no-tui",
//   "http://127.0.0.1:8000/",
// ];
const bench = [
  "wrk",
  // "-t12",
  "-c",
  "400",
  "-d",
  "20s",
  "http://127.0.0.1:8000/",
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
  await delay(10000);
  await Deno.spawn(bench[0], {
    args: bench.slice(1),
    stdout: "inherit",
    stderr: "inherit",
  });
  server.abort();
  console.log("");
}
