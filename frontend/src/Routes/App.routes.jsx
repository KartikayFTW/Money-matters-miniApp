import React from "react";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
