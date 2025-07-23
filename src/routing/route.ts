import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Shop from "@/pages/Shop";
import App from "@/App";
import Details from "@/pages/Details";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
    children: [
      {
        index: true,
        element: React.createElement(Home),
      },
      {
        path: "home",
        element: React.createElement(Home),
      },
      {
        path: "about",
        element: React.createElement(About),
      },
      {
        path: "shop",
        element: React.createElement(Shop),
      },
      {
        path: "contact",
        element: React.createElement(Contact),
      },
      {
        path: "details/:id",
        element: React.createElement(Details),
      },
    ],
  },
]);
