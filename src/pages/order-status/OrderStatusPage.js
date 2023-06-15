import React from 'react'
import IndexPayment from './components/IndexPayment'
import SideBarAdmin from './components/SIdeBarPayment'
import Navbar from '../../components/layouts/Navbar'
export default function OrderStatusPage() {
  return (
    <>
    
      {/* <SideBarAdmin> */}
      <Navbar />
        <IndexPayment />
      {/* </SideBarAdmin> */}
    </>
  )
}
