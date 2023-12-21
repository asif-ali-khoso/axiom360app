import React, { useState } from "react";
import "./Contact.css";
import Fonm from "./Form";
function Contact() {
  const sendMailData = (e) => {
    e.preventDefault();
    console.log("err")
  }
  return (
    <div className="Contact_us">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <h1>CONTACT US</h1>
          </div>
          <div className="col-lg-3 col-md-12 d-flex justify-content-center align-items-center">
            <img src="Ellipse 20.svg" alt="Help Icon" className="img-fluid" />
            <i class='fa fa-arrow-up' style={{border:'2px solid black', backgroundColor:'white',borderColor:'white', padding:'8px', margin:'0px', marginBottom:'45px'}}></i>
            <p>Need Help?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <h3>
              Questions?
              <br />
              Let's Get In Touch
            </h3>
            <form id="form" onSubmit={sendMailData}>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="mb-2 custom-input w-100"
                required
              />

              <input
                type="text"
                name="contact"
                placeholder="CONTACT US"
                className="mb-2 custom-input w-100"
                required
              />

              <input
                type="text"
                name="email"
                placeholder="EMAIL"
                className="mb-2 custom-input w-100"
                required
              />
              <textarea
                name="message"
                placeholder="TYPE YOUR MESSAGE HERE"
                className="custom-input w-100"
                required
              ></textarea>
             
            </form>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex" id="button">
                  <button className="learn-more-abc" type="submit">
                    <span className="text">Submit Information</span>
                  </button>
                  <span id="line_wit"></span>
                </div>
                <div>
                  <Fonm />
                </div>
              </div>
              <div className="col-lg-4" id="button_2">
                <span id="follow">Follow us</span>
                <br />
                <a href="#!">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#!">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#!">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12" id="office_locat">
            <div className="hide">
              <h3>Office Location</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </p>
            </div>
            <div className="links_name">
              <a href="#!">Legal</a>
              <a href="#!">Cookies</a>
              <a href="#!">Policy</a>
              <a href="#!">Privacy</a>
              <a href="#!">Policy</a>
              <a href="#!">Cookies</a>
              <a href="#!">Settings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
