
import React, { useState } from "react";
import OrderDetail from "./component/OrderDetail";
import Payment from "./component/Payment";
import jwtDecode from "jwt-decode";
import { Button } from "react-bootstrap";
import config from "../../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderPayment from "./component/HeaderPayment";
import NavbarLayout from "../../components/layouts/Navbar";
import { useCookies } from 'react-cookie';


export const PaymentPage = () => {
  const [disabledButton, setDisableButton] = useState(true);
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const navigate = useNavigate();
  const orderDetailData = localStorage.getItem("order_detail");
  const orderDetailDataJson = JSON.parse(orderDetailData);

  const navigateBack = () => {
    navigate(-1);
  };

  const [disabledButton, setDisableButton] = useState(true)
  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  const user = jwtDecode(token)
  const navigate = useNavigate()
  const orderDetailData = localStorage.getItem('order_detail')
  const orderDetailDataJson = JSON.parse(orderDetailData)  const bankType = (payload) => {
    let orderData = {
      user_email: user.email,
      bankType: payload.BankType,
      start_rent_at: orderDetailDataJson.start_date_at,
      finish_rent_at: orderDetailDataJson.finish_date_at,
      car_id: orderDetailDataJson.car_id,
      totalPrice: payload.totalPrice,
    };
    setDisableButton(payload.BankType ? false : true);
    localStorage.setItem("order_data", JSON.stringify(orderData));
  };

  const apiUrl = config.apiBaseUrl;
  const addOrder = async (params) => {
    try {
  const token =cookies.token

      const response = await axios.post(apiUrl + "/customer/order", params, {
        headers: {
          access_token: token,
          "Content-Type": "application/json",
        },
      });
      navigate(`/payment/confirm/order/${response.data?.id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const clickButtonPayment = () => {
    const formData = localStorage.getItem("order_data");
    const formDataJson = JSON.parse(formData);

    const payload = {
      start_rent_at: formDataJson.start_rent_at,
      finish_rent_at: formDataJson.finish_rent_at,
      car_id: formDataJson.car_id,
    };
    addOrder(payload);
  };

  return (
    <>
      <NavbarLayout />
      <HeaderPayment navigateBack={navigateBack} padingBottom={true} />
      <OrderDetail data={orderDetailDataJson} />
      <Payment data={orderDetailDataJson} handleClick={bankType}>
        <div className="d-grid gap-2">
          <Button
            variant="flat"
            onClick={clickButtonPayment}
            disabled={disabledButton}
          >
            Bayar
          </Button>
        </div>
      </Payment>
    </>
  );
};
