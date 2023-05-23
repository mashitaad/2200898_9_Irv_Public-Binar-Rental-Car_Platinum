import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { customerGetOrderById, orderSelector } from '../../features/orderSlice'
import ReminderPaymnet from './component/ReminderPayment'
import { PaymentConfirm } from './component/PaymentConfirm'

export default function PaymentConfirmPage () {

  const {id} = useParams()
  const dispatch = useDispatch()
  const order = useSelector(orderSelector.selectCustomerOrdeyById)
 
  useEffect(()=> {
    dispatch(customerGetOrderById(id))
  }, [])

  const confirmPayment = (payload) => {
    console.log(payload)
  }


  return (
    <>
  <PaymentConfirm data = {order} handleClick ={confirmPayment} >
    <ReminderPaymnet data = {order}/>
   </PaymentConfirm >
  </>
  )
}
