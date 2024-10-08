self.importScripts(
  "https://cdn.jsdelivr.net/gh/altbdoor/sucrase-build-iife@v3.34.0/sucrase.browser.js",
);

const searchParams = new URLSearchParams(self.location.search);
const isDebug = searchParams.has("debug");

const { transform } = sucrase;
const headers = new Headers({
  "Content-Type": "application/javascript",
  "Cache-Control": `max-age=${isDebug ? 0 : 300}`,
});

// this is needed to activate the worker immediately without reload
// https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // auto accomodate imports without jsx ending
  if (
    url.hostname === self.location.hostname &&
    url.pathname.includes("jsx") &&
    !url.pathname.endsWith(".tsx")
  ) {
    url.pathname += ".tsx";
  }

  if (!url.pathname.endsWith(".tsx")) {
    return;
  }

  if (isDebug) {
    console.log(`Handling ${url.toString()}`);
  }

  event.respondWith(
    fetch(url.toString(), { cache: isDebug ? "no-cache" : "default" })
      .then((res) => res.text())
      .then((body) => {
        const code = transform(body, {
          transforms: ["typescript", "jsx"],
          jsxRuntime: "automatic",
          production: true,
        }).code;

        if (isDebug) {
          console.groupCollapsed(`Processed ${url.toString()}`);
          console.log(code);
          console.groupEnd();
        }

        return new Response(code, { headers });
      }),
  );
});
