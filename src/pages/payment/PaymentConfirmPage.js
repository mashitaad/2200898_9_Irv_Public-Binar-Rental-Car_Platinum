import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customerGetOrderById, customerUpdateOrder, orderSelector } from "../../features/orderSlice";
import ReminderPaymnet from "./component/ReminderPayment";
import { PaymentConfirm } from "./component/PaymentConfirm";
import HeaderPayment from "./component/HeaderPayment";
import NavbarLayout from "../../components/layouts/Navbar";
import FooterLayout from "../../components/layouts/Footer";

export default function PaymentConfirmPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  const navigate = useNavigate();
  
  const [namaBank, setNamaBank] = useState("");
  const [errorMessage, setErrorMessage] = useState('')
  
  useEffect(() => {
    dispatch(customerGetOrderById(id));
  }, [dispatch, id]);

  const confirmPayment = async (payload) => {
    console.log(payload)
    const formData = new FormData();
    formData.append("slip", payload);
    try {
      await dispatch(customerUpdateOrder({ id, formData })).unwrap()

    } catch (error) {
      console.log(error)
      setErrorMessage('masukan file terlibih dulu')

    }
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

      <PaymentConfirm data={order} handleClick={confirmPayment} errorMessage={errorMessage}>
        <ReminderPaymnet data={order} />
      </PaymentConfirm>
      <FooterLayout />
    </>
  );
}
