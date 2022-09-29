console.log("hello from workerd");

console.log(Object.getOwnPropertyNames(globalThis));
console.log(Object.getOwnPropertySymbols(globalThis));
// addEventListener("fetch", (event) => {
//   event.respondWith(handle(event.request));
// });
// throw new Error("haha");

// console.log(globalThis.Object);
// console.log(globalThis.Function);
// console.log(globalThis.Array);
// console.log(globalThis.Number);
// console.log(globalThis.parseFloat);
// console.log(globalThis.parseInt);
// console.log(globalThis.Infinity);
// console.log(globalThis.NaN);
console.log(globalThis.undefined);
// console.log(globalThis.Boolean);
// console.log(globalThis.String);
// console.log(globalThis.Symbol);
// console.log(globalThis.Date);
// console.log(globalThis.Promise);
// console.log(globalThis.RegExp);
// console.log(globalThis.Error);
// console.log(globalThis.AggregateError);
// console.log(globalThis.EvalError);
// console.log(globalThis.RangeError);
// console.log(globalThis.ReferenceError);
// console.log(globalThis.SyntaxError);
// console.log(globalThis.TypeError);
// console.log(globalThis.URIError);
// console.log(globalThis.globalThis);
// console.log(globalThis.JSON);
// console.log(globalThis.Math);
// console.log(globalThis.Intl);
// console.log(globalThis.ArrayBuffer);
// console.log(globalThis.Uint8Array);
// console.log(globalThis.Int8Array);
// console.log(globalThis.Uint16Array);
// console.log(globalThis.Int16Array);
// console.log(globalThis.Uint32Array);
// console.log(globalThis.Int32Array);
// console.log(globalThis.Float32Array);
// console.log(globalThis.Float64Array);
// console.log(globalThis.Uint8ClampedArray);
// console.log(globalThis.BigUint64Array);
// console.log(globalThis.BigInt64Array);
// console.log(globalThis.DataView);
// console.log(globalThis.Map);
// console.log(globalThis.BigInt);
// console.log(globalThis.Set);
// console.log(globalThis.WeakMap);
// console.log(globalThis.WeakSet);
// console.log(globalThis.Proxy);
// console.log(globalThis.Reflect);
// console.log(globalThis.decodeURI);
// console.log(globalThis.decodeURIComponent);
// console.log(globalThis.encodeURI);
// console.log(globalThis.encodeURIComponent);
// console.log(globalThis.escape);
// console.log(globalThis.unescape);
// console.log(globalThis.eval);
// console.log(globalThis.isFinite);
// console.log(globalThis.isNaN);
console.log(Object.getOwnPropertyNames(globalThis.console));
console.log(Object.getOwnPropertyNames(globalThis.navigator));
// console.log(globalThis.origin); // it will throw
console.log(Object.getOwnPropertyNames(globalThis.scheduler));
// console.log(globalThis.caches);
// console.log(globalThis.crypto);
// console.log(globalThis.self);
// console.log(globalThis.SharedArrayBuffer);
// console.log(globalThis.Atomics);
// console.log(globalThis.WebAssembly);
// console.log(globalThis.ServiceWorkerGlobalScope);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(globalThis)));

console.log(navigator.userAgent);

// console.log(globalThis.DOMException);
// console.log(globalThis.WorkerGlobalScope);
// console.log(globalThis.btoa);
// console.log(globalThis.atob);
// console.log(globalThis.setTimeout);
// console.log(globalThis.clearTimeout);
// console.log(globalThis.setInterval);
// console.log(globalThis.clearInterval);
// console.log(globalThis.queueMicrotask);
// console.log(globalThis.structuredClone);
// console.log(globalThis.fetch);
// console.log(globalThis.Event);
console.log(
  "ExtendableEvent",
  Object.getOwnPropertyNames(ExtendableEvent.prototype),
);
// console.log(globalThis.PromiseRejectionEvent);
// console.log(globalThis.FetchEvent);
console.log("TraceEvent", Object.getOwnPropertyNames(TraceEvent.prototype));
console.log(
  "ScheduledEvent",
  Object.getOwnPropertyNames(ScheduledEvent.prototype),
);
// console.log(globalThis.MessageEvent);
// console.log(globalThis.CloseEvent);
// console.log(globalThis.ReadableStreamDefaultReader);
// console.log(globalThis.ReadableStreamBYOBReader);
// console.log(globalThis.ReadableStream);
// console.log(globalThis.WritableStream);
// console.log(globalThis.WritableStreamDefaultWriter);
// console.log(globalThis.TransformStream);
// console.log(globalThis.ByteLengthQueuingStrategy);
// console.log(globalThis.CountQueuingStrategy);
// console.log(globalThis.CompressionStream);
// console.log(globalThis.DecompressionStream);
// console.log(globalThis.TextEncoderStream);
// console.log(globalThis.TextDecoderStream);
// console.log(globalThis.Headers);
// console.log(globalThis.Body);
// console.log(globalThis.Request);
// console.log(globalThis.Response);
// console.log(globalThis.WebSocket);
console.log(
  "WebSocketPair",
  Object.getOwnPropertyNames(WebSocketPair.prototype),
);
// console.log(globalThis.AbortController);
// console.log(globalThis.AbortSignal);
// console.log(globalThis.TextDecoder);
// console.log(globalThis.TextEncoder);
// console.log(globalThis.Navigator);
// console.log(globalThis.URL);
// console.log(globalThis.URLSearchParams);
// console.log(globalThis.URLPattern);
// console.log(globalThis.Blob);
// console.log(globalThis.File);
// console.log(globalThis.FormData);
// console.log(globalThis.Crypto);
// console.log(globalThis.SubtleCrypto);
// console.log(globalThis.CryptoKey);
// console.log(globalThis.CacheStorage);
// console.log(globalThis.Cache);
console.log(
  "FixedLengthStream",
  Object.getOwnPropertyNames(FixedLengthStream.prototype),
);
console.log(
  "IdentityTransformStream",
  Object.getOwnPropertyNames(IdentityTransformStream.prototype),
);
console.log("HTMLRewriter", Object.getOwnPropertyNames(HTMLRewriter.prototype));
// console.log(globalThis.constructor);
console.log(Object.getOwnPropertyNames(import.meta));

export default {
  fetch(req, env) {
    // console.log(req, env);
    return new Response("Hello world!");
  },
};
