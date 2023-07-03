import React, { useRef } from 'react';
import './components/styles/HomePage.css';
import Cta from './components/Cta';
import Faq from './components/Faq';
import Testimonial from './components/Testimonial';
import WhyUs from './components/WhyUs';
import AboutServices from './components/AboutServices';
import Banner from './components/Banner';
import Navbar from '../../components/layouts/Navbar';

import {
  testimonialStatic,
  benefitStatic,
  faqStatic,
  bestCarStatic
} from '../../internal/const/static';
import Footer from '../../components/layouts/Footer';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  const linkOurService = useRef(null);
  const linkWhyUs = useRef(null);
  const linkTestimonial = useRef(null);
  const linkFaq = useRef(null);

  const props = {
    testimonialStatic,
    benefitStatic,
    faqStatic,
    bestCarStatic,
    linkOurService,
    linkWhyUs,
    linkTestimonial,
    linkFaq
  };

  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="This is binar rental car homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="main-container">
        <Navbar {...props} />
        <Banner />
        <AboutServices {...props} />
        <WhyUs {...props} />
        <Testimonial {...props} />
        <Cta {...props} />
        <Faq {...props} />
        <Footer {...props} />
      </div>
    </>
  );
}
