import React from 'react'
import rating from '../assets/images/Rate.svg'

const CarouselItem = ({item}) => {
  return (
    <div className='custom-item'>
        <div></div>
        <img className='carousel-img' src={item.img} alt={item.name}/>
        <div className='carousel-detail'>
            <img src={rating} alt='5-stars' style={{margin:'0'}}/>
            <div className='carousel-desc'>{item.testi}</div>
            <div className='user'>{item.name}, {item.age}, {item.loc}</div>
        </div>
    </div>
  )
}

export default CarouselItem