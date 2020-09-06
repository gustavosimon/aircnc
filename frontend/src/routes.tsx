import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={New} path="/new" />
    </BrowserRouter>
  );
};

export default Routes;
