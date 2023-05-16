import React from 'react'
import './styles/Testimonial.css'
import Carousel from './Carousel'

const Testimonial = () => {
  return (
    <div className='cust-container' id='testimony'>
        <div className='testimony'>
            <h3><strong>Testimonial</strong></h3>
            <p style={{fontSize: '0.875rem'}}>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Carousel/>
    </div>
  )
}

export default Testimonial