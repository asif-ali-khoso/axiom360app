import React, { useState } from 'react';
import './Navebar.css'; // Import your CSS styles if needed

const OverlayNav = () => {
  const [overlayWidth, setOverlayWidth] = useState(0);

  const openNav = () => {
    setOverlayWidth('');
  };

  const closeNav = () => {
    setOverlayWidth('0%');
  };

  return (
    <div id='Side_navigation'>
      <div id="myNav" className="overlay" style={{ width: overlayWidth }}>
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
        <a href="#!">Home</a>
          <a href="#!">ABOUT US</a>
          <a href="#!">SERVICES</a>
          <a href="#!">PORTFOLIO</a>
          <a href="#!">CONTACT US</a>
        </div>
      </div>

      <br></br>
      <span
        id="icons"
        style={{
          fontSize: "30px",
          cursor: "pointer",
          color: "white",
          marginRight: "10px", // Add margin to the right
          padding: "5px" // Add padding
        }}
        onClick={openNav}
      >
        &#9776;
        <img src="logo-1 2.png" alt="Logo"></img>
      </span>
    </div>
  );
};

export default OverlayNav;
