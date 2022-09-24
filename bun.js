export default {
  port: 4544,
  fetch(req) {
    console.log("aaaa");
    return new Response("Hello world!", {
      headers: { "Date": new Date().toUTCString() },
    });
    // return new Response(Bun.file("./index.html"));
  },
};
