const commands = [
  ["deno", "run", "--unstable", "deno.ts"],
];

for (const command of commands) {
  const server = new AbortController();
  Deno.spawn(command[0], {
    args: command.slice(1),
    signal: server.signal,
  });
  const benchmark = Deno.spawn("./oha-linux-amd64", {
    args: ["-j", "--no-tui", "http://localhost:9000/"],
    stdout: "inherit",
    stderr: "inherit",
  });
  await benchmark.then((bench) => {
    console.log(bench.success);
    server.abort();
  });
}
