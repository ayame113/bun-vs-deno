export default {
  port: 8000,
  fetch() {
    return new Response("Hello world!");
    // return new Response(Bun.file("./index.html"));
  },
};
