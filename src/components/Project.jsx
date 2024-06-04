import React from 'react'
import {Swiper ,SwiperSlide, useSwiper} from 'swiper/react'
import '../styles/project.css'
import 'swiper/css'
import data from '../utils/slider.json'
import { sliderSettings } from '../utils/common'


export default function Project() {
  return (
    <>
    {/* <img src="" alt="" /> */}
    <Swiper id='project' {...sliderSettings}>
            <SliderBtn/>
    {data.map((card,i) =>(
        <SwiperSlide key={i}> 
        <div id='project-container'>
        <div id='pro-img'> 
             <img id='project-img' src={card.image} alt="error" />
        </div>
       <div id='pro-des'>
       <h3>{card.name}</h3>

       <p >{card.description}</p>
       <a href={card.git}>Git link</a><br />
       <a href={card.url}>{card.url}</a>
       </div>
        </div>
           
        </SwiperSlide>
        
    ))}
       
    
    </Swiper>
    </>
  )
}


const SliderBtn = () => {
    const swiper = useSwiper()
    return(
        <div className='r-btn'>
           <button className='btn' onClick={() => swiper.slidePrev() }>
                 &lt;
           </button>
           <button className='btn'  onClick={() => swiper.slideNext() }>
               &gt;
           </button>
        </div>
    )
}