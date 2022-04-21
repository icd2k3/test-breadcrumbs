import React from "react";
import { Route } from "react-router-dom";

const Pages = [
  {
    index: true,
    breadcrumb: "Home",
    element: React.lazy(() => import("pages/public/Home")),
  }, 
  { 
    path: "/about",
    breadcrumb: "About",
    element: React.lazy(() => import("pages/public/About")),
  },
  {
    path: "/rates",
    breadcrumb: "Rates",
    element: React.lazy(() => import("pages/entities/Rates.List")),
  },
  {
    path: "/rates/:id/view",
    breadcrumb: "Rates details",
    element: React.lazy(() => import("pages/entities/Rates.Details")),
  }
]

const InvalidPages = [
  {
    path: "*",
    breadcrumb: "404 - Page not found",
    element: React.lazy(() => import("pages/public/NotFound")),
  },
];

export const AppRoutes = [
  {
    path: "/",
    roles: [],
    breadcrumb: "HomeLayout",
    element: React.lazy(() => import("layouts/Layout")),
    children: [...Pages, ...InvalidPages],
  },
];

export const createRoute = ({ element, ...route }, index) => {
  const Component = element;
  return (
    <Route key={index} {...route} element={<Component />}>
      {route.children &&
        route.children.map((childRoute, childIndex) =>
          createRoute(childRoute, childIndex)
        )}
    </Route>
  );
};