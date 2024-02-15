import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { useAuth } from "../context/authContext";

const MainRoutes = () => {
  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn",isLoggedIn)
  const routes = isLoggedIn ? <AppRoutes /> : <AuthRoutes />;

  return <Router>{routes}</Router>;
};

export default MainRoutes;
