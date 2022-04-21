import * as React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { AppRoutes } from "App";

const Breadcrumbs = () => {
  const options = {};
  const breadcrumbs = useBreadcrumbs(AppRoutes, options);

  return (
    <>
      <ul className="breadcrumb">
        {breadcrumbs.map(({ breadcrumb }, index) => {
          return (
            <li key={breadcrumb.key}>
              <RouterLink to={breadcrumb.key}>{breadcrumb}</RouterLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Navigation = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <>
      <h1>Test App</h1>
      <Navigation />
      <Breadcrumbs />
      <div className="App">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
