import React, { useState, useEffect } from "react";
import styles from "../componentsCss/ExoticAutoDeleteCards.module.css";
import { deleteData, getData } from "../firebaseDatabase/firestoreApi";

function ExoticAutoDeleteCards() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("haierelectronicsForward");
      // console.log(result);
      setData(result);
    };
    fetchData();
  }, [selectedItem]);

  const calculateTimeLeft = (timestamp) => {
    const formTimestamp = new Date(timestamp).getTime();
    const currentTimestamp = new Date().getTime();

    const timeLeftFor8Hours = formTimestamp + 8 * 60 * 60 * 1000;

    const difference = timeLeftFor8Hours - currentTimestamp;

    let timeLeft = {};
    let autoDelete = false;

    if (difference <= 0) {
      autoDelete = true; // Mark for deletion if time is up
    } else {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { timeLeft, autoDelete };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = {};
      data.forEach((item, index) => {
        // console.log(item);
        const { timeLeft, autoDelete } = calculateTimeLeft(item.timestamp);
        updatedTimeLeft[index] = timeLeft;
        // console.log(updatedTimeLeft);

        // If autoDelete is true, delete the item
        if (autoDelete) {
          deleteData("haierelectronicsForward", item.id);
        }
      });
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className={styles.cardContainer}>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div className={styles.card} key={index}>
            <h3>{item.name}</h3>
            <p>{item.service}</p>
            {/* <p>{item.timestamp}</p> */}
            <p>{item.city}</p>
            <p>{item.phone}</p>
            <div className={styles.cardActions}>
              <button
                className={styles.viewBtn}
                onClick={() => handleViewDetails(item)}
              >
                View Details
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => {
                  deleteData("haierelectronicsForward", item.id);
                  setData((prevData) =>
                    prevData.filter((i) => i.id !== item.id)
                  );
                }}
              >
                Delete
              </button>
            </div>
            <div className={styles.countdown}>
              {/* {console.log(timeLeft)} */}
              {/* {console.log(index)} */}
              {timeLeft[index]?.hours}h {timeLeft[index]?.minutes}m{" "}
              {timeLeft[index]?.seconds}s
            </div>
          </div>
        ))
      ) : (
        <p className={styles.loadingText}>Loading data...</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Details</h2>
            {selectedItem && (
              <div className={styles.modalDetails}>
                <p>
                  <strong>Name:</strong> {selectedItem.name}
                </p>
                <p>
                  <strong>Service:</strong> {selectedItem.service}
                </p>
                <p>
                  <strong>Timestamp:</strong> {selectedItem.timestamp}
                </p>
                <p>
                  <strong>City:</strong> {selectedItem.city}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedItem.phone}
                </p>
                <p>
                  <strong>Preferred Date:</strong> {selectedItem.preferredDate}
                </p>
                <p>
                  <strong>Preferred Time:</strong> {selectedItem.preferredTime}
                </p>
                <p>
                  <strong>Company:</strong> {selectedItem.companyMake}
                </p>
                <p>
                  <strong>AMC Status:</strong> {selectedItem.amcCondition}
                </p>
                <p>
                  <strong>Warranty Status:</strong> {selectedItem.warranty}
                </p>
                <p>
                  <strong>Comments:</strong> {selectedItem.comments}
                </p>
                <p>
                  <strong>Initial Charges:</strong>{" "}
                  {selectedItem.annualMaintenance ? "Agree" : "Disagree"}
                </p>
                {/* {console.log(selectedItem.annualMaintenance)} */}
                {/* <p>
                  <strong>Custom Make:</strong> {selectedItem.customMake}
                </p> */}
              </div>
            )}
            <div className={styles.modalActions}>
              <button className={styles.closeBtn} onClick={handleCloseModal}>
                Close
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => {
                  deleteData("haierelectronicsForward", selectedItem.id);
                  setData((prevData) =>
                    prevData.filter((i) => i.id !== selectedItem.id)
                  );
                  handleCloseModal();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExoticAutoDeleteCards;
