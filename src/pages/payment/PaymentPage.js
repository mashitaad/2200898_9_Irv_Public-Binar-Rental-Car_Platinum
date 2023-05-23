import React from 'react'
import OrderDetail from './component/OrderDetail'

export const PaymentPage = () => {

    const orderDetailData = localStorage.getItem('order_detail')
    console.log(JSON.parse(orderDetailData))
  return (
    <>
    <OrderDetail data={JSON.parse(orderDetailData)} />
    </>
  )
}
