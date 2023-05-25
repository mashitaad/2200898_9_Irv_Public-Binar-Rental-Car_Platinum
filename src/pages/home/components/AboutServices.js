import React from 'react'
import './styles/AboutServices.css'
import imgWoman from '../../../assets/images/lesti-kejora.svg'


const AboutServices = ({linkOurService}) => {
  return (
    <div className="cust-container" id="aboutServices" >
        <img src={imgWoman} style={{width: 'clamp(252px, 70%, 459px)'}} alt=''/>
        <div className="about-services" >
            <h3 className='sect-title' ref={linkOurService} style={{margin: '0'} }>
                Best Car Rental for any kind of trip in Tomioka!
            </h3>
            <p style={{margin: '1rem 0'}}>
                Sewa mobil di Tomioka bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div style={{width: '100%'}}>
                <ul style={{position: 'static', margin: '-0.5rem 0 0 0', paddingLeft: '0', fontSize: '0.875rem'}}>
                    <li>Sewa Mobil Dengan Supir di Tokyo 12 Jam</li>
                    <li>Sewa Mobil Lepas Kunci di Tokyo 24 Jam</li>
                    <li>Sewa Mobil Jangka Panjang Bulanan</li>
                    <li>Gratis Antar - Jemput Mobil di Bandara</li>
                    <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
            </div>
        </div>
     </div>
  )
}

export default AboutServices