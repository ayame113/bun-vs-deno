console.log(import.meta);
console.log(import.meta.resolve("./hey"));

console.log({ "import.meta.prototype": Object.getPrototypeOf(import.meta) });
