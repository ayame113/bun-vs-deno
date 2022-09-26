console.log(import.meta);
console.log(import.meta.resolve("../index.html"));
console.log(await import.meta.resolve("../index.html"));

console.log({ "import.meta.prototype": Object.getPrototypeOf(import.meta) });
