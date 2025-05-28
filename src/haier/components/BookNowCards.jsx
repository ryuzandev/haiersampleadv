// ------------------------->ifb tuned realtime api
import React, { useState, useEffect } from "react";
import "../componentsCss/BookNowCards.css";
// import { getData } from "../firestoreApi";
// Assuming this is your custom Firestore fetch function
import {
  deleteData,
  getData,
  forwardData,
  SendtoEmail,
} from "../firebaseDatabase/firestoreApi";

function BookNowCards() {
  const [bookData, setBookData] = useState([]); // To store fetched data
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch data from Firestore when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("haierelectronics"); // Replace 'bookings' with the name of your collection
      setBookData(data);
    };

    fetchData();
  }, [bookData]);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="booknow-cards-container">
      {/* Banner */}
      <div className="booknow-banner">
        <h1>Complaint-Specimen</h1>
      </div>
      {/* 
      {bookData.length > 0 ? (
        bookData.map((item, index) => (
          <div className="booknow-card" key={index}>
            <h3>{item.name}</h3>
            <p>
              <strong>Phone:</strong> {item.phone}
            </p>
            <p>
              <strong>Email:</strong> {item.email || "N/A"}
            </p>
            <p>
              <strong>City:</strong> {item.city}
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>Service:</strong> {item.service}
            </p>
            <p>
              <strong>Preferred Date:</strong> {item.preferredDate}
            </p>
            <p>
              <strong>Preferred Time:</strong> {item.preferredTime}
            </p>
            <p>
              <strong>Comments:</strong> {item.comments || "N/A"}
            </p>

            <div className="booknow-card-actions">
              <button onClick={() => openModal(item)}>View Details</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>  // Show loading message while data is being fetched
      )} */}

      {bookData.length > 0 ? (
        bookData.map((item, index) => (
          <div className="booknow-card" key={index}>
            {/* Show image if item.imageUrl exists */}
            {item.imageUrl && (
              <div className="booknow-card-image-container">
                <img
                  src={item.imageUrl}
                  alt="Uploaded"
                  className="booknow-card-image"
                />
              </div>
            )}

            <h3>{item.name}</h3>
            <p>
              <strong>Phone:</strong> {item.phone}
            </p>
            <p>
              <strong>Email:</strong> {item.email || "N/A"}
            </p>
            <p>
              <strong>City:</strong> {item.city}
            </p>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>Service:</strong> {item.service}
            </p>
            <p>
              <strong>Preferred Date:</strong> {item.preferredDate}
            </p>
            <p>
              <strong>Preferred Time:</strong> {item.preferredTime}
            </p>
            <p>
              <strong>Comments:</strong> {item.comments || "N/A"}
            </p>

            <div className="booknow-card-actions">
              <button className="view" onClick={() => openModal(item)}>
                View Details
              </button>
              <button
                className="delete"
                onClick={() => {
                  deleteData("haierelectronics", item.id);
                }}
              >
                Delete
              </button>
              <button
                className="delete"
                onClick={() => {
                  console.log(item);
                  SendtoEmail(item);
                }}
              >
                Mail
              </button>
              <button
                className="delete"
                onClick={() => {
                  forwardData(
                    "haierelectronics",
                    "haierelectronicsForward",
                    item.id,
                    "+919704818693"
                  );
                }}
              >
                Forward
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            <h3>{selectedItem.name} - Details</h3>
            {/* <p>
              <strong>TimeStamp:</strong> {selectedItem.timestamp}
            </p> */}
            <p>
              <strong>Phone:</strong> {selectedItem.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedItem.email}
            </p>
            <p>
              <strong>Service:</strong> {selectedItem.service}
            </p>
            <p>
              <strong>Amc:</strong> {selectedItem.amcCondition}
            </p>
            <p>
              <strong>Warranty:</strong> {selectedItem.warranty}
            </p>
            <p>
              <strong>Initial Charges:</strong>{" "}
              {selectedItem.annualMaintenance ? "Agree" : "Disagree"}
            </p>
            <p>
              <strong>Brand:</strong> {selectedItem.companyMake}
            </p>
            <p>
              <strong>Preferred Date:</strong> {selectedItem.preferredDate}
            </p>
            <p>
              <strong>Preferred Time:</strong> {selectedItem.preferredTime}
            </p>
            <p>
              <strong>Address:</strong> {selectedItem.address}
            </p>
            <p>
              <strong>City:</strong> {selectedItem.city}
            </p>
            <p>
              <strong>Comments:</strong> {selectedItem.comments}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookNowCards;
