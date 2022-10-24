export default {
  port: 4544,
  fetch(req) {
    return new Response(Bun.file("./index.html"));
  },
};
