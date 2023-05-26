import React from 'react'
import IndexPayment from './components/IndexPayment'
import SideBarAdmin from './components/SIdeBarPayment'
import NavBarPayment from './components/NavBarPayment'

export default function OrderStatusPage() {
  return (
    <>
    <NavBarPayment />
    <SideBarAdmin>

    <IndexPayment />
    </SideBarAdmin>
    </>
  )
}
