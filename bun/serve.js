console.log(import.meta.resolve("../index.html"));
console.log(await import.meta.resolve("../index.html"));
console.log(import.meta.resolveSync("../index.html"));

// console.log(__dirname);
// // mistypeVariable = 17;
// console.log({
//   require,
//   exports,
//   "module.exports": module.exports,
//   __filename,
//   __dirname,
// });
console.log({ "import.meta": import.meta });
console.log({ "import.meta.prototype": Object.getPrototypeOf(import.meta) });
export default {
  port: 4544,
  fetch(req) {
    return new Response("Hello world!", {
      headers: { "Date": new Date().toUTCString() },
    });
    // return new Response(Bun.file("./index.html"));
  },
};
