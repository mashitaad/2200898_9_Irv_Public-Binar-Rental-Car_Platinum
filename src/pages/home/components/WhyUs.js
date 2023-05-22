import React from 'react'
import './styles/WhyUs.css'

const WhyUs = ({linkWhyUs, benefitStatic}) => {

  return (
    <div className='cust-container' id='whyUs'>
        <div className="why-us" >
            <h3 className='sect-title' ref={linkWhyUs}>Why Us</h3>
            <p style={{fontSize: '0.875rem', margin: '1rem 0'}}>
                Mengapa harus pilih Binar Car Rental?
            </p>
        </div>
        <div className='inner'>
            {benefitStatic.map((benefit) => {
                return (<div className='custom-card' key={benefit.id}>
                    <img src={benefit.img} alt={benefit.id}/>
                    <p className='sect-title' style={{margin:'1rem 0',fontSize:'1rem'}}>{benefit.title}</p>
                    <p style={{margin:'0',fontSize:'0.875rem'}}>{benefit.desc}</p>
                </div>)
            })}
        </div>
    </div>
  )
}

export default WhyUs