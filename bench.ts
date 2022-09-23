import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
const commands = [
  ["deno", "run", "--allow-all", "--unstable", "deno.js"],
  ["bun", "run", "bun.js"],
];

const bench = [
  "./oha-linux-amd64",
  "-j",
  "-n",
  "10000",
  "--no-tui",
  "http://127.0.0.1:4544/",
];
// const bench = [
//   "wrk",
//   // "-t12",
//   // "-c",
//   // "400",
//   "-d",
//   "20s",
//   "--latency",
//   "http://127.0.0.1:4544/",
// ];

for (const command of commands) {
  console.log("=".repeat(30));
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
  console.log(["curl", "-i", "-s", "http://127.0.0.1:4544/"]);
  await Deno.spawn("curl", {
    args: ["-i", "-s", "http://127.0.0.1:4544/"],
    stdout: "inherit",
    stderr: "inherit",
  });
  console.log("");
  server.abort();
}
