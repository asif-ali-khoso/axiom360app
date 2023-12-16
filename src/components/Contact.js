import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({}); // Clear errors when the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="Contact_us">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-md-12">
            <h1>CONTACT US</h1>
          </div>
          <div className="col-lg-2 col-md-12 d-flex justify-content-center align-items-center">
            <img src="Ellipse 20.svg" alt="Help Icon" />
            <p>Need Help?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <form id="form" onSubmit={handleSubmit}>
              <h3>
                Questions?
                <br />
                Let's Get In Touch
              </h3>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className={`mb-2 custom-input w-100 ${
                  errors.name ? "is-invalid" : ""
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
              <input
                type="text"
                name="contact"
                placeholder="CONTACT US"
                className={`mb-2 custom-input w-100 ${
                  errors.contact ? "is-invalid" : ""
                }`}
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && (
                <div className="invalid-feedback">{errors.contact}</div>
              )}
              <input
                type="text"
                name="email"
                placeholder="EMAIL"
                className={`mb-2 custom-input w-100 ${
                  errors.email ? "is-invalid" : ""
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              <textarea
                name="message"
                placeholder="TYPE YOUR MESSAGE HERE"
                className={`custom-input w-100 ${
                  errors.message ? "is-invalid" : ""
                }`}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </form>
            <div className="row">
              <div className="col-lg-8">
                <div className="d-flex" id="button">
                  <button className="learn-more-abc" type="submit">
                    <span className="text">Submit Information</span>
                  </button>
                  <span id="line_wit"></span>
                </div>
              </div>
              <div className="col-lg-4" id="button_2">
                <span id="follow">Follow us</span>
                <br />
                <a href="#!">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#!"><i  className="fa fa-twitter"></i></a>
                <a href="#!"><i className="fa fa-instagram"></i></a>
                <a href="#!"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12" id="office_locat">
            <h3>Office Location</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
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
