import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CarListPage from "../pages/car/carList/CarListPage";
import SiginInPage from "../pages/auth/signin/SiginInPage";
import SignUpPage from "../pages/auth/signup/SignUpPage";
import CarDetailPage from "../pages/car/carDetail/CarDetailPage";
import PrivateRoutesCustomer from "../utils/PrivateRouteCustomer";
import { PaymentPage } from "../pages/payment/PaymentPage";
import PaymentConfirmationPage from "../pages/payment/PaymentConfirmPage";
import OrderStatusPage from "../pages/order-status/OrderStatusPage";
import PaymentReceiptPage from "../pages/payment/PaymentReceiptPage";
import UserPage from "../pages/user/userPage";
import "../components/layouts/styles/mobile.css";
import OrderDetailPage from "../pages/order-status/OrderDetailPage";

function IndexRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SiginInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/car/list" element={<CarListPage />} />
        <Route path="/car/list/:id" element={<CarDetailPage />} />

        <Route element={<PrivateRoutesCustomer />}>
          <Route path="/payment" element={<PaymentPage />} />
          <Route
            path="/payment/confirm/order/:id"
            element={<PaymentConfirmationPage />}
          />
          <Route path="/payment/invoice/:id" element={<PaymentReceiptPage />} />
          <Route path="/order/status" element={<OrderStatusPage />} />
          <Route path="/user/profile" element={<UserPage />} />
          <Route path="/order/detail/:id" element={<OrderDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default IndexRoutes;
