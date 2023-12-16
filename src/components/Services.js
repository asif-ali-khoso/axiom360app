import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.css";
import {Pagination , Autoplay } from 'swiper/modules';
function Services() {
  return (
    <div>
      {/* <Particle_Servies/> */}
    <div className="Services_section">
      <div className="container">
        <h1>
          Services
          <br />
        </h1>
 <h2>That Best Defines Us</h2>
 <h3 className="text-white">What We Do</h3>
 <div className="row">
          <div className="col-lg-8">
          <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: '',
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[ Pagination, Autoplay]}
              autoplay={{ delay: 3000 }}
              className="mySwiper_c"
            >
              <SwiperSlide id="services-1">
                <h6 className="text-center">DESIGN</h6>

                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="image 10.png"
                        alt=""
                        className="img-fluid"
                        style={{ height: "250px", maxWidth: "230px" }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p>
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">MARKETING</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="services2.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "250px",
                          maxWidth: "230px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">WEB DEVELOPMENT</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="image 13.png"
                        alt=""
                        className="services2.png"
                        style={{
                          height: "250px",
                          maxWidth: "230px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">GRAPHIC DESIGNING</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="services2.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "250px",
                          maxWidth: "230px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">SOFTWARE DEVELOPMENT</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="image 12.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "250px",
                          maxWidth: "230px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">CONTENT WRITTING</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="services2.png"
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "250px",
                          maxWidth: "230px",
                          borderRadius: "30px",
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.<br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide id="services-1">
                <h6 className="text-center">DESIGN</h6>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="image 10.png"
                        alt=""
                        className="img-fluid"
                        style={{height: "250px", maxWidth: "230px",borderRadius: "30px",}}/>
                    </div>
                    <div className="flip-card-back">
                      <p className="text-center">
                        Classic graphics are one major factor that appeals to
                        users to pay a further visit to you. Enjoy a wide range
                        of designing services and convert most of your website
                        traffic into customers.<br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-center View_more1">
            <button className="View_more">
              <span className="text">View More</span>
            </button>
            <span id="line"></span>
          </div>
          </div>
        </div>
      </div>
    </div> </div>
  );
}

export default Services;
