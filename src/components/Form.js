import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./form.css";

function Example() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="FORM_Mob">
      <div className="d-flex justify-content-center" id="button_5">
        <button
          variant="primary"
          onClick={handleShow}
          className="learn-more-abcd"
          type="submit"
        >
          <span className="textd">Click to fill the form</span>
        </button>
        <span id="line_witd"></span>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{ backgroundColor: "#020830", color: "white" }}>
          <div className="form_logo">
            <center>
              <img src="logo-1 2.png" alt="Logo" />
            </center>
          </div>
          <button
            className="close"
            onClick={handleClose}
            style={{
              color: "white",
              border: "none",
              background: "transparent",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "30px" }}>
              &times;
            </span>
          </button>
        </Modal.Header>

        <Modal.Body id="FORM_MOBILE">
          <div className="container d-flex align-items-center">
            <div className="w-100">
              <h1 className="text-center">
                Questions?
                <br />
                Let's Get In <br /> Touch
              </h1>
              <input
                type="text"
                className="custom-input mb-2 mr-sm-2 placeholder-green"
                placeholder="NAME"
              />
              <br />
              <input
                type="text"
                className="custom-input mb-2 mr-sm-2 placeholder-green"
                placeholder="CONTACT US"
              />
              <br />
              <input
                type="text"
                className="custom-input mb-2 mr-sm-2 placeholder-green"
                placeholder="EMAIL"
              />
              <br />
              <textarea
                name="message"
                placeholder="TYPE YOUR MESSAGE HERE"
                className={`custom-input w-100 ${
                  errors.message ? "is-invalid" : ""
                }`}
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-center" id="button_4">
            <button className="learn-more-abcd" type="submit">
              <span className="textd">Submit Information</span>
            </button>
            <span id="line_witd"></span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Example;
