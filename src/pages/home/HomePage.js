import React from 'react'
import './HomePage.css'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'
import AboutServices from './components/AboutServices'
import Banner from './components/Banner'

export default function HomePage() {

  return (
    <div className='main-container'>
      <Banner/>
      <AboutServices/>
      <WhyUs/>
      <Testimonial/>
      <Cta/>
      <Faq/>
    </div>
  )
}
