import React, {useState} from 'react'
import CarouselItem from './CarouselItem'
import './styles/Carousel.css'
import Testi1 from '../assets/images/testi1.png'
import Testi2 from '../assets/images/testi2.png'
import Testi3 from '../assets/images/testi3.png'
import ArrowRight from '../assets/icons/chevron_right.svg'
import ArrowLeft from '../assets/icons/chevron_left.svg'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        {
            id: '1',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: Testi1
        },{
            id: '2',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: Testi2
        },{
            id: '3',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: Testi3
           },
        
     ]

     let root = document.documentElement

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        } 

        setCurrentIndex(newIndex)

        
     }

     root.style.setProperty('--index', currentIndex)
     


  return (
    <div className='cust-carousel'>
        <div 
        className='cust-carousel-inner'>
            {items.map((item) => {
                return <CarouselItem key={item.id} item={item}/>
            })}
        </div>
        <div className='carousel-buttons'>
            <button onClick={()=>{
                updateIndex(currentIndex - 1)
            }} className={currentIndex===0? 'button-arrow-inactive': 'button-arrow-active'}>
                <img src={ArrowLeft} alt='chevron-left'/>
            </button>
            <button onClick={()=>{
                updateIndex(currentIndex + 1)
            }}className={currentIndex===items.length-1? 'button-arrow-inactive' : 'button-arrow-active'}>
                <img src={ArrowRight} alt='chevron-right'/>
            </button>   
        </div>
    </div>
  )
}

export default Carousel