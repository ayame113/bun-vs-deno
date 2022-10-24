Deno.serve(
  async () => new Response((await Deno.open("./index.html")).readable),
  { port: 4544 },
);
