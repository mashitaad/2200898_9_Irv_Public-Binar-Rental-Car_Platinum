import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  customerGetOrderById,
  customerUpdateOrder,
  orderSelector
} from '../../features/orderSlice';
import ReminderPaymnet from './component/ReminderPayment';
import { PaymentConfirm } from './component/PaymentConfirm';
import HeaderPayment from './component/HeaderPayment';
import NavbarLayout from '../../components/layouts/Navbar';
import FooterLayout from '../../components/layouts/Footer';
import { Modal } from 'react-bootstrap';
import checklist from '../../assets/icons/success.svg';

export default function PaymentConfirmPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [namaBank, setNamaBank] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [count, setCount] = useState(6);

  useEffect(() => {
    if (show === true) {
      if (count > 0) {
        const timer = setTimeout(() => {
          setCount((prevCount) => prevCount - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        navigate(`/payment/invoice/${id}`);
      }
    }
  }, [count, navigate, id, show]);

  useEffect(() => {
    dispatch(customerGetOrderById(id));
  }, [dispatch, id]);

  const confirmPayment = async (payload) => {
    const formData = new FormData();
    formData.append('slip', payload);
    try {
      await dispatch(customerUpdateOrder({ id, formData })).unwrap();
      setShow(true);
    } catch (error) {
      console.log(error);
      setErrorMessage('masukan file terlibih dulu');
    }
  };

  const getOrderData = localStorage.getItem('order_detail');
  const getOrderDataJson = JSON.parse(getOrderData);
  const bankType = getOrderDataJson.bankType;

  useEffect(() => {
    if (bankType === 'BCA') {
      setNamaBank('BCA');
    } else if (bankType === 'BNI Transfer') {
      setNamaBank('BNI Transfer');
    } else {
      setNamaBank('Mandiri Transfer');
    }
  }, [bankType]);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <NavbarLayout />
      <HeaderPayment navigateBack={navigateBack} set={2} bankName={namaBank} padingBottom={false} />

      <PaymentConfirm data={order} handleClick={confirmPayment} errorMessage={errorMessage}>
        <ReminderPaymnet data={order} />
      </PaymentConfirm>
      <FooterLayout />
      <Modal show={show}>
        <Modal.Body className="modal-notif">
          <div className="image-modal">
            <img src={checklist} style={{ height: 150 }} alt="Checklist Icon" />
          </div>
          <div className="modal-title-notif">
            <p>Bukti Pembayaran Berhasil Dikirim!</p>
          </div>
          <div className="count-time-modal">
            {count === 0 ? (
              <p>Hitungan mundur selesai!</p>
            ) : (
              <p>anda akan diarahkan ke halaman selanjutnya: {count}</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
