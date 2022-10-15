const message = new TextEncoder().encode("Hello World");

export default {
  port: 4544,
  fetch(req) {
    let i = 0;
    return new Response(
      new ReadableStream({
        pull(controller) {
          controller.enqueue(message);
          if (i++ < 100000) {
            controller.close();
          }
        },
      }),
    );
  },
};
