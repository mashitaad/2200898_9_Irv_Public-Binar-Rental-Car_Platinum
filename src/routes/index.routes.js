import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CarlistPage from "../pages/car/carList/CarlistPage";
import CarDetail from "../pages/car/carDetail/CarDetail";

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/list" element={<CarlistPage />} />
        <Route path="/car/detail/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
