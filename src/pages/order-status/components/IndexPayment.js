import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { customerGetAllOrder, orderSelector } from "../../../features/orderSlice";
import AllPaymentStatus from "./payment-status/AllPaymentStatus";
import NotPaidPaymentStatus from "./payment-status/NotPaidPaymentStatus";
import ProccesPaymentStatus from "./payment-status/ProccesPaymentStatus";
import CompletedPaymentStatus from "./payment-status/CompletedPaymentStatus";
import { carSelectors, getAllCars } from "../../../features/carSlice";
import { useCookies } from 'react-cookie';

export default function IndexPayment() {
const dispatch = useDispatch()
const [cookies] = useCookies(['token']);
const params = {}


useEffect(() => {
    dispatch(customerGetAllOrder(params))
    dispatch(getAllCars())
}, [])

const data = useSelector(orderSelector.selectCustomerAllOrders)
const cars = useSelector(carSelectors.selectAllCars)


  return (
    <>
      <div className="container">
        <div>
          <Tabs
            defaultActiveKey="payment-all"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="payment-all" title="Semua">
             <AllPaymentStatus data = {data} cars ={ cars} />
              </Tab>
            <Tab eventKey="payment-pending" title="Belum Bayar">
            <NotPaidPaymentStatus data = {data} cars ={ cars}/>
            </Tab>
            <Tab eventKey="payemnt-onprocces" title="Sedang Diproses">
            <ProccesPaymentStatus data = {data} cars ={ cars}/>
            </Tab>
            <Tab eventKey="payment-finish" title="Selesai">
            <CompletedPaymentStatus data = {data} cars ={ cars}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
