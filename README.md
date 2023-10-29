# sucrase build iife

The sucrase library, built with Rollup for IIFE usage.

- https://github.com/alangpierce/sucrase
- https://github.com/rollup/rollup

Concepts are mostly borrowed from [an existing, closed PR](https://github.com/alangpierce/sucrase/issues/507#issuecomment-983593429),
to build sucrase with Rollup.

To note, I mostly have zero idea how the build works, mostly cobbled together randomly.


## Usage

I'm primarily loading sucrase as a [Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API),
so as a short example:

```js
// sw.js
self.importScripts("https://cdn.jsdelivr.net/gh/altbdoor/sucrase-build-iife@v3.34.0/sucrase.browser.js");

const { transform } = sucrase;

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request.url, { cache: "no-store" })
      .then((res) => res.text())
      .then((body) => {
        const code = transform(body, {
          transforms: ["jsx"],
          production: true,
        }).code;

        return new Response(code, { headers });
      }),
  );
});
```
