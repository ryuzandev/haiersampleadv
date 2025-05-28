import React from 'react';
import '../../componentsCss/EnquiryModal.css';

function EnquiryModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Enquiry Details</h2>
        <p className="modal-text">Toll-Free Number: <strong>1800-123-456</strong></p>
        <p className="modal-text">Email: <a href="mailto:rohithrapheal@gmail.com">rohithrapheal@gmail.com</a></p>
      </div>
    </div>
  );
}

export default EnquiryModal;
