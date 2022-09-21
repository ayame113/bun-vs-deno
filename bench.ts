import { delay } from "https://deno.land/std@0.156.0/async/delay.ts";
const commands = [
  ["deno", "run", "--allow-net", "--unstable", "deno.ts"],
];

for (const command of commands) {
  const server = new AbortController();
  Deno.spawn(command[0], {
    args: command.slice(1),
    signal: server.signal,
    stdout: "inherit",
    stderr: "inherit",
  });
  await delay(1000);
  const benchmark = Deno.spawn("./oha-linux-amd64", {
    args: ["-j", "--no-tui", "http://127.0.0.1:9000/"],
    stdout: "inherit",
    stderr: "inherit",
  });
  await benchmark.then((bench) => {
    console.log(bench.success);
    server.abort();
  });
}
