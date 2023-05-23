import React, { useRef } from 'react'
import './components/styles/HomePage.css'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Testimonial from './components/Testimonial'
import WhyUs from './components/WhyUs'
import AboutServices from './components/AboutServices'
import Banner from './components/Banner'
import Navbar from '../../components/layouts/Navbar'
import {testimonialStatic} from '../../internal/const/static'
import Footer from '../../components/layouts/Footer'

export default function HomePage() {
  const linkOurService = useRef(null);
  const linkWhyUs = useRef(null);
  const linkTestimonial = useRef(null);
  const linkFaq = useRef(null);


  const props = {
    testimonialStatic,
    linkOurService,
    linkWhyUs,
    linkTestimonial,
    linkFaq
     }

  return (
    <div className='main-container'>
    <>
      <Navbar {...props} />
      <Banner/>
      <AboutServices {...props}/>
      <WhyUs {...props}/>
      <Testimonial {...props}/>
      <Cta {...props}/>
      <Faq {...props}/>
      <Footer {...props}/>
      </>
    </div>
  )
}