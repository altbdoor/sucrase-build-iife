import {
  Outlet,
  createRootRoute,
  createRoute,
  lazyRouteComponent,
} from "@tanstack/react-router";
import { BaseLayout } from "../layout";
import { HomeComponent } from "./home";

const rootRoute = createRootRoute({
  component: () => (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  ),
});

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeComponent,
});
export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("./about")),
  // component: lazyRouteComponent(() => import('./about'), 'AboutComponent')
  // component: AboutComponent
});
export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
