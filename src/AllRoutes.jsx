import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Users from "./Users";
import Userdetail from "./Userdetail";
import Pagenotfound from "./Pagenotfound";
import Userlogin from "./Userlogin";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/users" element={
            <PrivateRoute>
                <Users />
            </PrivateRoute>
        } />
        <Route path="/users/:id" element={<Userdetail />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
