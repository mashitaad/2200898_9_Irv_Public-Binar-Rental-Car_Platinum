import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';
import { customerGetOrderById, orderSelector } from "../../features/orderSlice";
import ReminderPaymnet from "./component/ReminderPayment";
import { PaymentConfirm } from "./component/PaymentConfirm";
import HeaderPayment from "./component/HeaderPayment";
import NavbarLayout from "../../components/layouts/Navbar";
import FooterLayout from "../../components/layouts/Footer";
import config from "../../config";

export default function PaymentConfirmPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  const [namaBank, setNamaBank] = useState("");
  const navigate = useNavigate(); const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(customerGetOrderById(id));
  }, [dispatch, id]);

  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  const apiUrl = config.apiBaseUrl;
  const orderDetailData = localStorage.getItem("order_detail");
  const orderDetailDataJson = JSON.parse(orderDetailData);

  const confirmPayment = (payload) => {
    const orderData = {
      user_email: user.email,
      bankType: payload.BankType,
      start_rent_at: orderDetailDataJson.start_date_at,
      finish_rent_at: orderDetailDataJson.finish_date_at,
      car_id: orderDetailDataJson.car_id,
      totalPrice: payload.totalPrice,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    };

    fetch(apiUrl + `/customer/order/${id}/slip`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
      
  const getOrderData = localStorage.getItem("order_detail");
  const getOrderDataJson = JSON.parse(getOrderData);
  const bankType = getOrderDataJson.bankType;

  useEffect(() => {
    if (bankType === "BCA") {
      setNamaBank("BCA");
    } else if (bankType === "BNI Transfer") {
      setNamaBank("BNI Transfer");
    } else {
      setNamaBank("Mandiri Transfer");
    }
  }, [bankType]);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <NavbarLayout />
      <HeaderPayment
        navigateBack={navigateBack}
        set={2}
        bankName={namaBank}
        padingBottom={false}
      />

      <PaymentConfirm data={order} handleClick={confirmPayment}>
        <ReminderPaymnet data={order} />
      </PaymentConfirm>
      <FooterLayout />
    </>
  );
}