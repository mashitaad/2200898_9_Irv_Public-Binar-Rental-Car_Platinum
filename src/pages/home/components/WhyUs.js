import React from 'react'
import './styles/WhyUs.css'

const WhyUs = ({ linkWhyUs, benefitStatic}) => {

    return (
        <>
            <div className="container" >
                <div className='title-why-us' >
                    <h1 ref={linkWhyUs}>Why Us? </h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className="row why-us">
                    {benefitStatic.map((item) => {
                        return (
                            <div className="col-md-3" key={item.id}>
                                <div className="card-whyus">
                                    <img src={item.img} alt="icon_complete" />
                                    <div className="card-body">
                                        <h5 className="title-whyus">{item.title}</h5>
                                        <p className="text-whyus">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default WhyUs