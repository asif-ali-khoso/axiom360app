//home_page axiom_360//
import React, { useState } from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Pagination } from "swiper/modules";
function Homecontent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleSlideChangeTransitionEnd = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div>
      <div className="content">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-sm-12 justify-content-center p-0 m-0">
              <h2>WE ARE PIONEERS</h2>
              <h1>ANITHUB</h1>
              <h1 id="with">With Groundbreaking Technology Solutions</h1>
              <p id="paragraph">
                Invinci is a digital platform that translates your goals into
                reality to make your brand go from ordinary to extraordinary.
                Let’s take your business to the next level!
              </p>
              <div className="Expolre">
                <div className="d-flex">
                  <button className="learn-more justify-content-center align-content-center">
                    <span className="text">Explore Services</span>
                  </button>
                  <span id="line"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 text-center">
              <Swiper
                direction={"vertical"}
                slidesPerView={5}
                spaceBetween={0}
                mousewheel={true}
                loop={true}
                centeredSlides={true}
                onSlideChange={handleSlideChange}
                onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                modules={[Mousewheel, Pagination]}
                className="mySwiper_b"
              >
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2 style={{ fontWeight: "normal" }}>DIGITAL MARKETING</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2 style={{ fontWeight: "normal" }}>
                      WEBSITE DEVELOPMENT
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2 style={{ fontWeight: "normal" }}>GRAPHIC DESIGNING</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2 style={{ fontWeight: "normal" }}>CORPORATE BRANDING</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2
                      style={{
                        fontWeight: activeIndex === 2 ? "bold" : "normal",
                      }}
                    >
                      SOFTWARE DEVELOPMENT
                      <br />
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-content">
                    <h2
                      style={{
                        fontWeight: activeIndex === 2 ? "bold" : "normal",
                      }}
                    >
                      CREATIVE WRITING
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homecontent;
