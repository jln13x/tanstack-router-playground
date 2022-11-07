import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import { AboutPage } from "./AboutPage";
import { z } from "zod";

const routeConfig = createRouteConfig({}).createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <div>Index</div>,
  }),
  createRoute({
    path: "about",
    element: <AboutPage />,
    onMatch: (ctx) => {},
    loader: async (ctx) => await fetchAbout(),
  }),
]);

const schema = z.object({
  id: z.number(),
  name: z.string(),
});

const fetchAbout = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = await response.json();

  return schema.parse(data);
};

export const router = createReactRouter({
  routeConfig,
});
