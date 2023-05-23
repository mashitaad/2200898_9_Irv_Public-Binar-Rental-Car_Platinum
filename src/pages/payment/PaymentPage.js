import React from 'react'
import OrderDetail from './component/OrderDetail'
import Payment from './component/Payment'

export const PaymentPage = () => {

    const orderDetailData = localStorage.getItem('order_detail')

    const bankType = (payload) => {
        console.log(payload)
    }
  return (
    <>
    <OrderDetail data={JSON.parse(orderDetailData)} />
    <Payment 
    data={JSON.parse(orderDetailData)}
    handleClick={bankType}
    >

        
    </Payment>
    </>
  )
}
