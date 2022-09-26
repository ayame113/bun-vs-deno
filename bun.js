console.log(__dirname);
mistypeVariable = 17;
console.log(require, exports, module.exports, __filename, __dirname);
export default {
  port: 4544,
  fetch(req) {
    return new Response("Hello world!", {
      headers: { "Date": new Date().toUTCString() },
    });
    // return new Response(Bun.file("./index.html"));
  },
};
