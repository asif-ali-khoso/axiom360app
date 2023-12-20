// Portfolio.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className='container'>
        <h1 className="Design">DESIGN</h1>
        <p className="Company">COMPANY PORTFOLIO</p>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1} // Show only one slide at a time
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 3000 }}
              modules={[Pagination]}
              className="mySwiperCustom"
            >
              <SwiperSlide>
                <div className='port'>
                  <img src="PORTFOLIO 1.png" alt=""/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='port'>
                  <img src="PORTFOLIO 1.png" alt=""/>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='port'>
                  <img src="PORTFOLIO 1.png" alt=""/>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
