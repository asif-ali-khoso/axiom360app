import React, { useState } from 'react';
import { useSwiper } from 'swiper/react'; // Import useSwiper hook
import 'swiper/css';
import 'swiper/css/pagination';
import './Navebar.css';

const OverlayNav = () => {
  const [overlayWidth, setOverlayWidth] = useState(0);
  const swiper = useSwiper(); // Use useSwiper hook to get the Swiper instance

  const openNav = () => {
    setOverlayWidth('');
  };

  const closeNav = () => {
    setOverlayWidth('0%');
  };

  const navigateToSlide = (index) => {
    swiper.slideTo(index); // Use Swiper API to navigate to the specified slide index
    closeNav(); // Close the overlay after navigating
  };

  return (
    <div id='Side_navigation'>
      <div id="myNav" className="overlay" style={{ width: overlayWidth }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
          <a href="#!" onClick={() => navigateToSlide(0)}>Home</a>
          <a href="#!" onClick={() => navigateToSlide(1)}>ABOUT US</a>
          <a href="#!" onClick={() => navigateToSlide(2)}>SERVICES</a>
          <a href="#!" onClick={() => navigateToSlide(3)}>PORTFOLIO</a>
          <a href="#!" onClick={() => navigateToSlide(4)}>CONTACT US</a>
        </div>
      </div>
      <br></br>
      <span
        id="icons"
        style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "white",
          marginRight: "10px",
          padding: "5px"
        }}
        onClick={openNav}
      >
        &#9776;
        <img src="logo-1 2.png" alt="Logo" className='img-fluid'></img>
      </span>
    </div>
  );
};

export default OverlayNav;
