const message = new TextEncoder().encode("Hello World");
Deno.serve((req) => {
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
}, { port: 4544 });
