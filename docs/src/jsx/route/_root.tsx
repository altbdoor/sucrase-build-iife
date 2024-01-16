import {
  Outlet,
  RootRoute,
  Route,
  lazyRouteComponent,
} from "@tanstack/react-router";
import { BaseLayout } from "../layout";
import { HomeComponent } from "./home";

const rootRoute = new RootRoute({
  component: () => (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  ),
});

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomeComponent,
});
export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("./about")),
  // component: lazyRouteComponent(() => import('./about'), 'AboutComponent')
  // component: AboutComponent
});
export const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);
