self.importScripts(
  "https://cdn.jsdelivr.net/gh/altbdoor/sucrase-build-iife@v3.34.0/sucrase.browser.js"
);

const { transform } = sucrase;

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
    !url.pathname.endsWith(".jsx")
  ) {
    url.pathname += ".jsx";
  }

  if (!url.pathname.endsWith(".jsx")) {
    return;
  }

  console.log(`Handling ${url.toString()}`);
  const headers = new Headers({
    "Content-Type": "application/javascript",
  });

  event.respondWith(
    fetch(url.toString(), { cache: "no-store" })
      .then((res) => res.text())
      .then((body) => {
        let code = transform(body, {
          transforms: ["jsx"],
          production: true,
        }).code;

        // i'm a little lazy to include react :-P
        if (
          !code.includes(' from "react"') &&
          !code.includes(" from 'react'")
        ) {
          code = `import React from "react";\n${code}`;
        }

        console.groupCollapsed(`Processed ${url.toString()}`);
        console.log(code);
        console.groupEnd();

        return new Response(code, { headers });
      })
  );
});
