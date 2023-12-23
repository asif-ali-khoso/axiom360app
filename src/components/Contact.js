// Contact_page axiom_360//
import React from "react";
import "./Contact.css";
import Form from "./Form"; // Correct the import statement here

function Contact() {
  return (
    <div className="Contact_us">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <h1>CONTACT US</h1>
          </div>
          <div className="col-lg-3 col-md-12 d-flex justify-content-center align-items-center">
            <img src="Ellipse 20.svg" alt="Help Icon" className="img-fluid" />
            <i
              className="fa fa-arrow-up" // Correct the class attribute name
              style={{
                border: "2px solid black",
                backgroundColor: "white",
                borderColor: "white",
                padding: "8px",
                margin: "0px",
                marginBottom: "45px",
              }}
            ></i>
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
            <form
              id="form"
              target="_blank"
              action="https://formsubmit.co/info@kinggoldbanquet.com"
              method="POST"
            >
              {/* Correct the placeholder for the contact input */}
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="mb-2 custom-input w-100"
                required
              />

              {/* Correct the placeholder for the contact input */}
              <input
                type="number"
                name="contact"
                placeholder="CONTACT" // Correct the placeholder here
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
              <div className="d-flex" id="button">
                <button className="learn-more-abc" type="submit">
                  <span className="text">Submit Information</span>
                </button>
                <span id="line_wit"></span>
                <div className="offset-5">
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
            </form>
            <div className="row">
              <div className="col-lg-8">
                <div>
                  {/* Correct the component name here */}
                  <Form />
                </div>
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
