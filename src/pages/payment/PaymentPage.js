import React, { useState } from 'react'
import OrderDetail from './component/OrderDetail'
import Payment from './component/Payment'
import jwtDecode from 'jwt-decode'
import { Button } from 'react-bootstrap'

export const PaymentPage = () => {
    
    const [disabledButton, setDisableButton] = useState(true)
    const token = localStorage.getItem('token')
    const user = jwtDecode(token)
    console.log(user)
    const orderDetailData = localStorage.getItem('order_detail')
    const orderDetailDataJson = JSON.parse(orderDetailData)
    const bankType = (payload) => {
        let orderData = {
            user_email: user.email,
            bankType: payload.BankType,
            start_rent_at: orderDetailDataJson.start_date_at,
            finish_rent_at: orderDetailDataJson.finish_date_at,
            car_id: orderDetailDataJson.car_id,
            totalPrice: payload.totalPrice,
          }
          setDisableButton(payload.BankType ? false : true)

          localStorage.setItem('order_data', JSON.stringify(orderData))
        
    }
  return (
    <>
    <OrderDetail data={orderDetailDataJson} />
    <Payment 
    data={orderDetailDataJson}
    handleClick={bankType}
    >
 <div className="d-grid gap-2">
          <Button
            variant="flat"
            // onClick={clickButton}
            disabled={disabledButton}
          >
            Bayar
          </Button>
        </div>
        
    </Payment>
    </>
  )
}
