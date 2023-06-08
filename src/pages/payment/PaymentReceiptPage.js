import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { customerGetOrderById, orderSelector } from '../../features/orderSlice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import NavbarLayout from '../../components/layouts/Navbar';
import FooterLayout from '../../components/layouts/Footer'
import HeaderPayment from './component/HeaderPayment';
import logo from '../../assets/icons/logo.png'
import successLogo from '../../assets/icons/success.svg'
import { BsDownload } from "react-icons/bs";
import { MdOutlineDownloading } from "react-icons/md";
import moment from 'moment';
import 'moment/locale/id';
import './styles/paymentreceipt.css'
import "./styles/paymentticket.css"


export default function PaymentReceiptPage() {
  const { id } = useParams()
  const dispatch = useDispatch();
  const order = useSelector(orderSelector.selectCustomerOrdeyById);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };


  useEffect(() => {
    dispatch(customerGetOrderById(id))
  }, [])

  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }


  const finishDate = new Date(order?.finish_rent_at);
  const startDate = new Date(order?.start_rent_at);

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const timeDifference = finishDate.getTime() - startDate.getTime();
  const dayDifference = Math.round(timeDifference / millisecondsPerDay)

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <NavbarLayout />
      <HeaderPayment navigateBack={navigateBack} padingBottom={true} />
      <div className="container">
        <div className='description-title-ticket mb-5'>
          <img src={successLogo} alt='success'className='mb-3' />
          <h4>Pembayaran berhasil</h4>
          <p>Tunjukan Invoice ini Ke Petugas BCR di titik temu</p>
        </div>
        <div className="payment-ticket">

          <div className='invoice-download mb-1'>
            <p>Invoice</p>
            <button
              className="receipt-modal-download-button"
              onClick={downloadPDF}
              disabled={!(loader === false)}
            >
              {loader ? (
                <span><MdOutlineDownloading /> Mengunduh</span>
              ) : (
                <span><BsDownload /> Unduh </span>
              )}

            </button>
          </div>

          <div className="wrapper">
            <div className="receipt-box">
              <div className="actual-receipt">
                <div className="receipt-organization-logo">
                  <img alt="logo" src={logo} />
                </div>
                <h5>Binar Car Rental</h5>
                <h6>
                  Jalan Suroyo No. 161 Mayangan Kota robolonggo 672000
                </h6>
                <div className="phone-and-website">
                  <p>
                    <a href={`binarcarrental@gmail.com`}>
                      binarcarrental@gmail.com
                    </a>
                  </p>
                  <p> 081-233-334-808</p>
                </div>

                <div className="colored-row first">
                  <span>Customer Email</span>
                </div>

                <div className="data-row">
                  <span className="font-weight">Email</span>
                  <span>{order?.User?.email}</span>
                </div>
                <div className="colored-row first">
                  <span>Order Number</span>
                  <span>id</span>
                </div>

                <div className="data-row">
                  <span className="font-weight">number</span>
                  <span>{order?.id}</span>
                </div>


                <div className="colored-row">
                  <span>Transaction Details</span>
                  <span />
                </div>

                <div className="data-row border-bottom">
                  <span>
                    <span className="font-weight">
                      Car Type
                      :
                    </span>
                    {' '}
                    {order?.Car?.name}
                  </span>
                  <span>
                    <span className="font-weight">
                      Price
                      {' '}
                      :
                    </span>
                    {' '}
                    {formatter.format(order?.Car?.price)}
                  </span>
                </div>

                <div className="data-row border-bottom">
                  <span>
                    <span className="font-weight">
                      start rent :
                      {' '}

                    </span>
                    {' '}
                    {moment(order?.start_rent_at).format('DD MMMM YYYY')}
                  </span>
                  <span>
                    <span className="font-weight">
                      finish rent :
                    </span>
                    {' '}
                    {moment(order?.finish_rent_at).format('DD MMMM YYYY')}
                  </span>
                </div>
                <div className="data-row border-bottom">
                  <span>
                    <span className="font-weight">
                      total day
                      {' '}
                      :
                    </span>
                    {' '}
                    {dayDifference}
                  </span>

                </div>
                <div className="colored-row">
                  <span>total Price </span>
                  <span />
                </div>
                <div className="data-row border-bottom">

                  <span className="font-weight">

                    {formatter.format(order?.total_price)}
                  </span>
                  <span />
                </div>
                <div className="colored-row">
                  <span>Thank You For Your Order </span>
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLayout />
    </>
  )
}
