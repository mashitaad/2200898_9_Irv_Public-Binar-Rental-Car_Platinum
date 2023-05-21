import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CarListPage from "../pages/car/carList/CarListPage";
import  SiginInPage  from "../pages/auth/signin/SiginInPage";
import  SignUpPage  from "../pages/auth/signup/SignUpPage";
import CarDetailPage from "../pages/car/carDetail/CarDetailPage";

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/list" element={<CarListPage />} />
        <Route path="/car/list/:id" element={<CarDetailPage />} />
        <Route path="/signin" element={<SiginInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
