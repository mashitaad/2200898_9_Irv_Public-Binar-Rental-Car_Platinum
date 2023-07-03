import React, { useEffect } from 'react';
import HeaderPayment from './component/HeaderPayment';
import NavbarLayout from '../../components/layouts/Navbar';
import FooterLayout from '../../components/layouts/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customerGetOrderById, orderSelector } from '../../features/orderSlice';
import PendingInvoice from './component/PendingInvoice';
import Invoice from './component/Invoice';
import { Helmet } from 'react-helmet-async';

export default function PaymentReceiptPage() {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  useEffect(() => {
    dispatch(customerGetOrderById(id));
  }, []);

  return (
    <>
      <Helmet>
        <title>Invoice</title>
        <meta name="description" content="Details of purchase transactions that have been made." />
        <link rel="canonical" href="/payment/invoice/:id" />
      </Helmet>
      <NavbarLayout />
      <HeaderPayment navigateBack={navigateBack} set={3} padingBottom={false} />

      {order?.status === false ? <PendingInvoice /> : <Invoice />}
      <FooterLayout />
    </>
  );
}
