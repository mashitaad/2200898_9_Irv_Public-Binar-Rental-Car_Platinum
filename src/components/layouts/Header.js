import React from 'react'
import './styles/header.css'
import imgCar from '../../assets/img/img_car.svg'
export const Header = () => {
  return (
    <div className='cust-container'
    style={{
        flexDirection: 'column',
        backgroundColor: '#F1F3FF',
        padding: '0 8.5rem'
    }}>
        <div className='hero-sect'>
            <div className="d-flex flex-column">
                <div className='banner-title'>
                    Sewa & Rental Mobil Terbaik di Tomioka
                </div>
                <div className='banner-subtitle'>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </div>
                <div>
                    <button className='custom'><a href='/search'>
                        Mulai Sewa Mobil    
                    </a></button>
                </div>
                
            </div>
            <div className='banner-image'>
                <img src={imgCar} alt="car" style={{width: 'clamp(344.22px, 120%, 704px)'}}/>
            </div>
        </div>
    </div>
  )
}
