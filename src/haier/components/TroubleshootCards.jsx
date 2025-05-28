import React, { useContext, useState } from 'react';
import '../componentsCss/TroubleshootCards.css';
import { AppContext } from '../../App';

function TroubleshootCards() {
  const { trouble } = useContext(AppContext);
  // const [troubleT, setTroubleT] = useState(trouble);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="troubleshoot-cards-container">
      {/* Banner */}
      <div className="troubleshoot-banner">
        <h1>Troubleshoot Tickets</h1>
      </div>

      {trouble.length > 0 &&
        trouble.map((item, index) => (
          <div className="troubleshoot-card" key={index}>
            <h3>{item.issue}</h3>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <div className="troubleshoot-card-actions">
              {/* <button onClick={() => alert('Troubleshoot action for ' + item.issue)}>Troubleshoot</button> */}
              <button onClick={() => openModal(item)}>View Details</button>
            </div>
          </div>
        ))}

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            <h3>Troubleshoot Ticket Details</h3>
            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>Email:</strong> {selectedItem.email}</p>
            <p><strong>Phone:</strong> {selectedItem.phone}</p>
            <p><strong>Service:</strong> {selectedItem.service}</p>
            <p><strong>Issue:</strong> {selectedItem.issue}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
            <p><strong>Preferred Date:</strong> {selectedItem.preferredDate}</p>
            <p><strong>Preferred Time:</strong> {selectedItem.preferredTime}</p>
            <p><strong>Address:</strong> {selectedItem.address}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TroubleshootCards;
