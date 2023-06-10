import React from 'react'
import IndexPayment from './components/IndexPayment'
import SideBarAdmin from './components/SIdeBarPayment'

export default function OrderStatusPage() {
  return (
    <>
      <SideBarAdmin>
        <IndexPayment />
      </SideBarAdmin>
    </>
  )
}
