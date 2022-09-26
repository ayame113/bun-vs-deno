console.log({ "import.meta.prototype": Object.getPrototypeOf(import.meta) });

console.log(import.meta.resolve("../index.html"));
console.log(await import.meta.resolve("../index.html"));
Deno.serve((req) => new Response("Hello world!"), {
  port: 4544,
});
// Deno.serve(
//   async () => new Response((await Deno.open("./index.html")).readable),
//   { port: 8000 },
// );
