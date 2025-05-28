import React, { useState } from 'react';
import { Carousel, Button, Row, Col, Container } from 'react-bootstrap';
import "../componentsCss/AirConditioner.css";

// Fixed imports for modal functionality
import BookNowForm from './AssestComponents/BookNowForm';
import TroubleshootModal from './AssestComponents/TroubleshootModal';
import EnquiryModal from './AssestComponents/EnquiryModal';

// image sources
import aone from "../componentsSrcAssets/aone.jpg";
import atwo from "../componentsSrcAssets/atwo.jpg";
import athree from "../componentsSrcAssets/athree.jpg";
import afour from "../componentsSrcAssets/afour.jpg";
import afive from "../componentsSrcAssets/afive.jpg";
import asix from "../componentsSrcAssets/asix.jpg";
import EnquiryModuleCommon from './EnquiryModuleCommon';

function AirConditioner() {
  // States to handle modal visibility
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  // Functions to handle modal visibility
  const handleBookNowClick = () => setShowBookNowModal(true);
  const handleTroubleshootClick = () => setShowTroubleshootModal(true);
  const closeBookNowModal = () => setShowBookNowModal(false);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <>
    <div className="ac-component-container">
      {/* Carousel */}
      <Carousel>
  <Carousel.Item>
    <div className="ac-carousel-item-content">
      <img src={aone} alt="Air Conditioner Repair" className="ac-carousel-img" />
      <div className="ac-carousel-caption">
        <h3>Air Conditioner Repair</h3>
        <Button variant="primary" className="ac-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
        {/* <Button variant="secondary" className="ac-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="ac-carousel-item-content">
      <img src={atwo} alt="AC Installation" className="ac-carousel-img" />
      <div className="ac-carousel-caption">
        <h3>AC Installation</h3>
        <Button variant="primary" className="ac-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
        {/* <Button variant="secondary" className="ac-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
      </div>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="ac-carousel-item-content">
      <img src={athree} alt="AC Maintenance" className="ac-carousel-img" />
      <div className="ac-carousel-caption">
        <h3>AC Maintenance</h3>
        <Button variant="primary" className="ac-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
        {/* <Button variant="secondary" className="ac-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
      </div>
    </div>
  </Carousel.Item>
</Carousel>


      {/* Grid System with Image and Description */}
      <Container className="ac-grid-container">
        <Row className="ac-grid-item">
          <Col md={5} className="ac-grid-img-container">
            <img src={afive} alt="AC Repair" className="ac-grid-img" />
          </Col>
          <Col md={7} className="ac-grid-description">
            <h4>AC Repair Services</h4>
            <p>
              Get your air conditioner running like new with our expert repair services, handling everything from cooling issues to electrical faults.
            </p>
            <Button variant="outline-info" className="ac-learn-more-btn">Learn More</Button>
          </Col>
        </Row>

        <Row className="ac-grid-item ac-reverse">
        <Col md={5} className="ac-grid-img-container">
            <img src={afour} alt="AC Installation" className="ac-grid-img" />
          </Col>
          <Col md={7} className="ac-grid-description">
            <h4>AC Installation Services</h4>
            <p>
              Professional AC installation for homes and offices, ensuring proper setup for efficient and effective cooling.
            </p>
            <Button variant="outline-info" className="ac-learn-more-btn">Learn More</Button>
          </Col>
          
        </Row>

        <Row className="ac-grid-item">
          <Col md={5} className="ac-grid-img-container">
            <img src={asix} alt="AC Maintenance" className="ac-grid-img" />
          </Col>
          <Col md={7} className="ac-grid-description">
            <h4>AC Maintenance</h4>
            <p>
              Regular maintenance keeps your air conditioner working efficiently, reducing energy consumption and preventing breakdowns.
            </p>
            <Button variant="outline-info" className="ac-learn-more-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for Book Now and Troubleshoot */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
      {showTroubleshootModal && <TroubleshootModal onClose={closeTroubleshootModal} />}
    </div>
    <EnquiryModuleCommon/>
    </>
  );
}

export default AirConditioner;
