import * as React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppRoutes } from "App";

const Layout = () => {
  const Navigation = () => {
    let menu = [];

    const createMenuItem = (path, text) => {
      return (
        <li key={path}>
          <RouterLink to={path}>{text}</RouterLink>
        </li>
      );
    };

    AppRoutes.forEach((route) => {
      if (route.children) {
        route.children.forEach((childRoute) => {
          if (childRoute.path) {
            menu.push(createMenuItem(childRoute.path, childRoute.breadcrumb));
          }
        });
      } else {
        if (route.path) {
          menu.push(createMenuItem(route.path, route.breadcrumb));
        }
      }
    });

    return (
      <nav>
        <div>
          <ul>{menu}</ul>
        </div>
      </nav>
    );
  };

  return (
    <>
      <h1>Test App</h1>
      <Navigation />
      <div className="App">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
