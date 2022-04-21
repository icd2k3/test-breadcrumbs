import './App.css';
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const createRoute = ({ element, ...route }, index) => {
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

export const Pages = [
  {
    index: true,
    path: "/",
    breadcrumb: "HomeIndex",
    element: React.lazy(() => import("pages/public/Home")),
  }, 
  { 
    path: "/about",
    breadcrumb: "About",
    element: React.lazy(() => import("pages/public/About")),
  }
]

export const InvalidPages = [
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

const LoadingFallback = () => {
  return <div>Loading...</div>;
};

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => createRoute(route, index))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
