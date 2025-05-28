import React, { useContext, useState } from "react";
import "../../componentsCss/TroubleshootModal.css";
import { AppContext } from "../../../App";
import axios from "axios";

function TroubleshootModal({ onClose }) {
  const { settrouble } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceCode: "",
    lastServiceman: "",
    service: "",
    issue: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    zipcode: "",
    country: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   //here we will sumbit form data
  //   settrouble((prevBook) => [...prevBook, formData]);

  //   setShowConfirmation(true);

  //   setTimeout(() => {
  //     setShowConfirmation(false);
  //     onClose(); // Close the Troubleshoot modal
  //   }, 5000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      // Replace this with your actual API endpoint
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("API Response:", response.data);

      // Update context state with the new entry
      settrouble((prevBook) => [...prevBook, formData]);

      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        onClose(); // Close the modal
      }, 5000);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <>
      <div className="troubleshoot-modal-overlay">
        <div className="troubleshoot-modal-content">
          <button className="troubleshoot-close-button" onClick={onClose}>
            ×
          </button>
          <h2 className="troubleshoot-h2">Troubleshoot Request</h2>
          <form onSubmit={handleSubmit} className="troubleshoot-form">
            <div className="troubleshoot-form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="troubleshoot-form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="troubleshoot-form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="troubleshoot-form-group">
              <label>Service Code:</label>
              <input
                type="text"
                name="serviceCode"
                value={formData.serviceCode}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="troubleshoot-form-group">
              <label>Last Serviceman (optional):</label>
              <input
                type="text"
                name="lastServiceman"
                value={formData.lastServiceman}
                onChange={handleInputChange}
              />
            </div>

            <div className="troubleshoot-form-row">
              <div className="troubleshoot-form-group">
                <label>Service:</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="troubleshoot-form-group">
                <label>Issue:</label>
                <input
                  type="text"
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="troubleshoot-form-row">
              <div className="troubleshoot-form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  className="troubleshoot-textarea"
                />
              </div>

              <div className="troubleshoot-form-group">
                <label>Preferred Date:</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="troubleshoot-form-row">
              <div className="troubleshoot-form-group">
                <label>Preferred Time:</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="troubleshoot-form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="troubleshoot-form-row">
              <div className="troubleshoot-form-group">
                <label>Zipcode:</label>
                <input
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="troubleshoot-form-group">
                <label>Country:</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="troubleshoot-button">
              Submit
            </button>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <div className="troubleshoot-confirmation-modal">
          <div className="troubleshoot-confirmation-content">
            <p>We will reach you back soon!</p>
            <div className="troubleshoot-loading-bar">
              <div className="troubleshoot-progress"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TroubleshootModal;
