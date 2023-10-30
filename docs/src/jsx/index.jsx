import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { BaseLayout } from "./layout";

const router = createHashRouter([
  { path: "/", lazy: () => import("./home") },
  { path: "/about", lazy: () => import("./about") },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BaseLayout>
      <RouterProvider router={router} />
    </BaseLayout>
  </React.StrictMode>
);
