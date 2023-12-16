// Portfolio.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Make sure to import Swiper styles
import { Pagination } from 'swiper/modules';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1 className="Design">DESIGN</h1>
      <p className="Company">COMPANY PORTFOLIO</p>
    
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }} // Set the delay (in milliseconds) for automatic movement
        modules={[Pagination]}
        className="mySwiperCustom" // Changed class name
      >
        <SwiperSlide>
          <div className='port'>
            <img src="PORTFOLIO 1.png" alt="" className='img-fluid' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='port'>
            <img src="PORTFOLIO 1.png" alt="" className='img-fluid' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='port'>
            <img src="PORTFOLIO 1.png" alt="" className='img-fluid' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
