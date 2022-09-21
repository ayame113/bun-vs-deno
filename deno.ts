// Deno.serve(() => new Response("Hello world!"), { port: 8000 });
Deno.serve(
  async () => new Response((await Deno.open("./index.html")).readable),
  { port: 8000 },
);
