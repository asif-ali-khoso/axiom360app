import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Web.css';
import Home from './Home';
import Navebar from './Navebar';
import About from './About';
import Services from './Services';
import Portfolio from './Porfolio';
import Contact from './Contact';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div>
   
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <Navebar/>
        <SwiperSlide className='pageslide1'>
    <Home/>
        </SwiperSlide>
        <SwiperSlide className='pageslide1'>
    <About/>
        </SwiperSlide>
        <SwiperSlide className='pageslide1'>
            <Services/>
          </SwiperSlide>
        <SwiperSlide className='pageslide1'>
            <Portfolio/>
        </SwiperSlide>
        <SwiperSlide className='pageslide1'>
            <Contact/>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}
