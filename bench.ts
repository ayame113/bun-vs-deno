import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
const commands = [
  ["deno", "run", "--allow-all", "--unstable", "deno.js"],
  ["bun", "run", "bun.js"],
];

// const bench = [
//   "./oha-linux-amd64",
//   // "-j",
//   "-n",
//   "100000",
//   "--no-tui",
//   "http://127.0.0.1:4544/",
// ];
const bench = [
  "wrk",
  // "-t12",
  // "-c",
  // "400",
  "-d",
  "20s",
  "--latency",
  "http://127.0.0.1:4544/",
];

for (const command of commands) {
  console.log("=".repeat(30));
  const server = run(command);
  await delay(10000);
  await run(["curl", "-i", "-s", "http://127.0.0.1:4544/"]);
  console.log("");
  await run(bench);
  server.kill();
}

function run(args: string[]) {
  console.log(args);
  const ac = new AbortController();
  const p = Deno.spawn(args[0], {
    args: args.slice(1),
    stdout: "inherit",
    stderr: "inherit",
    signal: ac.signal,
  });
  return {
    then: p.then.bind(p),
    kill() {
      console.log("server kill");
      ac.abort();
    },
  };
}
