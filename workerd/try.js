console.log("hello from workerd");

console.log(globalThis);
addEventListener("fetch", (event) => {
  event.respondWith(handle(event.request));
});
throw new Error("haha");
