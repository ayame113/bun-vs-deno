console.log("hello from workerd");

console.log(globalThis);
addEventListener("fetch", (event) => {
  throw new Error("haha");
  event.respondWith(handle(event.request));
});
