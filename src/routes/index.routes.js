import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CarListPage from "../pages/car/carList/CarListPage";
import CarDetail from "../pages/car/carDetail/CarDetail";
import SignIn from "../components/signin";
import Signup from "../components/signup";

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/list" element={<CarListPage />} />
        <Route path="/car/detail/:id" element={<CarDetail />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
