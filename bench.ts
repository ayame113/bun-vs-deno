const commands = [
  ["deno", "run", "--unstable", "deno.ts"],
];

for (const command of commands) {
  const benchmark = Deno.spawn("oha", {
    args: ["-j", "--no-tui", "http://localhost:9000/"],
  });
  const server = new AbortController();
  Deno.spawn(command[0], {
    args: command.slice(1),
    signal: server.signal,
  });
  await benchmark.then((bench) => {
    console.log(bench.success);
    server.abort();
  });
}
