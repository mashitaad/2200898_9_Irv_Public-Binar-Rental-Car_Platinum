import React from 'react'
import './components/styles/HomePage.css'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'
import AboutServices from './components/AboutServices'
import Banner from './components/Banner'
import {testimonialStatic} from '../../internal/const/static'

export default function HomePage() {

  const props = {
    testimonialStatic,
     }

  return (
    // <div className='main-container'>
    <>
      <Banner/>
      <AboutServices/>
      <WhyUs/>
      <Testimonial {...props}/>
      <Cta/>
      <Faq/>
      </>
    // </div>
  )
}
