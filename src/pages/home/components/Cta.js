import React from 'react'
import './styles/Cta.css'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className="cust-container cta">
        <div className='cta-inner'>
            <h1 className='sect-title'> Sewa Mobil di Tomioka Sekarang</h1>
            <div className='cta-subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
            <div>
                <button className='custom'>
                     <Link to='/car/list'>Mulai Sewa Mobil</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cta