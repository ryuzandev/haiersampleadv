import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../componentsCss/ContactUsFloating.css";
// Create this file for styling
import "../../../haier/componentsCss/ContactUsFloating.css";

const ContactUsFloating = () => {
  const tollFreeNumber = "18001234567"; // Replace with your number

  return (
    <a
      href={`tel:${tollFreeNumber}`}
      className="contact-floating-btn"
      title="Call Toll-Free"
    >
      <i className="bi bi-telephone-fill contact-icon" />
      <span className="contact-text">Contact Us</span>
    </a>
  );
};

export default ContactUsFloating;
