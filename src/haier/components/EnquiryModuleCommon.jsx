import React from 'react';
import '../componentsCss/EnquiryModuleCommon.css' // external CSS file for styling

const EnquiryModuleCommon = () => {
  return (
    <div className="enquiry-module-container">
      <h2 className="enquiry-title">Need Help? We’re Just a Call Away!</h2>
      <p className="enquiry-subtitle">We value your time. Let’s fix it faster, better, smarter!</p>

      <div className="enquiry-catchphrases">
        <p>✔️ Fast & Reliable Service</p>
        <p>✔️ Verified Experts at Your Doorstep</p>
        <p>✔️ Satisfaction Guaranteed!</p>
      </div>

      <div className="enquiry-tollfree-box">
        <p className="enquiry-tollfree-text">📞 Toll-Free: <strong>1800-123-4567</strong></p>
        <p className="enquiry-availability">Available 7 AM - 10 PM | 7 Days a Week</p>
      </div>
    </div>
  );
};

export default EnquiryModuleCommon;
