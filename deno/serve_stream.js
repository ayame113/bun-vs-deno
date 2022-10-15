const message = new TextEncoder().encode("Hello World");
Deno.serve((req) => {
  let i = 0;
  return new Response(
    new ReadableStream({
      pull(controller) {
        controller.enqueue(message);
        if (100000 < i++) {
          controller.close();
        }
      },
    }),
  );
}, { port: 4544 });
