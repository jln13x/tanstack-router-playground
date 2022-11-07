import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <div>Index</div>,
  }),
  createRoute({
    path: "about",
    element: <div>About</div>,
  }),
]);

export const router = createReactRouter({
  routeConfig,
});
