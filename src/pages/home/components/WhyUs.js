import React from 'react'
import './styles/WhyUs.css'
import icon_complete from '../../../assets/icons/icon_complete.svg';
import icon_price from '../../../assets/icons/icon_price.svg';
import icon_24hrs from '../../../assets/icons/icon_24hrs.svg';
import icon_professional from '../../../assets/icons/icon_professional.svg';

const WhyUs = () => {

    const benefits = [
        {
            title: 'Mobil Lengkap', 
            id: '1',
            img : icon_complete, 
            desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
        },{
            title: 'Harga Murah',
            id: '2', 
            img : icon_price, 
            desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
        },{
            title: 'Layanan 24 Jam', 
            id: '3',
            img : icon_24hrs, 
            desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
        },{
            title: 'Supir Profesional', 
            id: '4',
            img : icon_professional, 
            desc: 'Supir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
        }
    ]

  return (
    <div className='cust-container' id='whyUs'>
        <div className="why-us">
            <h1>Why Us</h1>
            <p style={{fontSize: '0.875rem', margin: '1rem 0'}}>
                Mengapa harus pilih Binar Car Rental?
            </p>
        </div>
        <div className='inner'>
            {benefits.map((benefit) => {
                return (<div className='custom-card' key={benefit.id}>
                    <img src={benefit.img} alt={benefit.id}/>
                    <p style={{margin:'1rem 0',fontSize:'1rem'}}>{benefit.title}</p>
                    <p style={{margin:'0',fontSize:'0.875rem'}}>{benefit.desc}</p>
                </div>)
            })}
        </div>
    </div>
  )
}

export default WhyUs