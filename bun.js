export default {
  port: 8000,
  fetch() {
    return new Response("Hello world!" + Math.random(), {
      headers: { "Date": new Date().toUTCString() },
    });
    // return new Response(Bun.file("./index.html"));
  },
};
