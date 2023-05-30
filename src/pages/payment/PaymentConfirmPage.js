import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customerGetOrderById, orderSelector } from "../../features/orderSlice";
import ReminderPaymnet from "./component/ReminderPayment";
import { PaymentConfirm } from "./component/PaymentConfirm";
import HeaderPayment from "./component/HeaderPayment";
import NavbarLayout from "../../components/layouts/Navbar";
import FooterLayout from "../../components/layouts/Footer";
export default function PaymentConfirmPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  const [namaBank, setNamaBank] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(customerGetOrderById(id));
  }, []);

  const confirmPayment = (payload) => {
    // TODO fecth api here
    console.log(payload);
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
