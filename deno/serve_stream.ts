Deno.serve((req) => {
  let i = 0;
  return new Response(
    new ReadableStream({
      pull(controller) {
        controller.enqueue("Hello World");
        if (i++ < 100000) {
          controller.close();
        }
      },
    }).pipeThrough(new TextEncoderStream()),
  );
}, { port: 4544 });
