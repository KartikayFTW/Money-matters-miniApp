import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";

const MainRoutes = () => {
  const isLoggedIn = true;
  const routes = isLoggedIn ? <AppRoutes /> : <AuthRoutes />;

  return <Router>{routes}</Router>;
};

export default MainRoutes;
