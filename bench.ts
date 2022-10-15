import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
import { expandGlob } from "https://deno.land/std@0.157.0/fs/mod.ts";

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

const commands = [
  {
    glob: "./node/**",
    command: ["node", "--experimental-import-meta-resolve"],
  },
  { glob: "./deno/**", command: ["deno", "run", "--allow-all", "--unstable"] },
  { glob: "./bun/**", command: ["bun", "run"] },
  { glob: "./workerd/**.capnp", command: ["workerd", "serve", "--verbose"] },
];

for (const { glob, command } of commands) {
  for await (const file of expandGlob(glob)) {
    if (!file.isFile) {
      continue;
    }
    console.log("=".repeat(100));

    const server = run([...command, file.path]);

    await delay(10000);
    // await run(["curl", "-i", "-s", "http://127.0.0.1:4544/"]);
    console.log("");
    await run(bench);

    server.kill();
  }
}

function run(args: string[]) {
  console.log(">", args.join(" "));
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
      ac.abort();
    },
  };
}
