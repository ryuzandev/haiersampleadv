import React, { useState } from 'react';
import { Carousel, Button, Row, Col, Container } from 'react-bootstrap';
import "../componentsCss/WashingMachine.css";

// fixed imports from carousel
import BookNowForm from './AssestComponents/BookNowForm';
import TroubleshootModal from './AssestComponents/TroubleshootModal';
import EnquiryModuleCommon from './EnquiryModuleCommon';

// image sources
import wone from "../componentsSrcAssets/wone.jpg";
import wtwo from "../componentsSrcAssets/wtwo.jpg";
import wthree from "../componentsSrcAssets/wthree.jpg";
import wfour from "../componentsSrcAssets/wfour.jpg";
import wfive from "../componentsSrcAssets/wfive.jpg";
import wsix from "../componentsSrcAssets/wsix.jpg";

function WashingMachine() {
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  const handleBookNowClick = () => {
    setShowBookNowModal(true);
  };

  const handleTroubleshootClick = () => {
    setShowTroubleshootModal(true);
  };

  const closeBookNowModal = () => {
    setShowBookNowModal(false);
  };

  const closeTroubleshootModal = () => {
    setShowTroubleshootModal(false);
  };

  return (
    <>
    <div className="wm-container">
      {/* Carousel */}
      <Carousel className="wm-carousel">
        <Carousel.Item>
          <img
            className="wm-carousel-img"
            src={wone}
            alt="Washing Machine Repair"
          />
          <div className="wm-carousel-item-content">
            <h3>Slide 1 - Washing Machine Repair</h3>
            <Button variant="primary" className="wm-carousel-btn" onClick={handleBookNowClick}>Complaint-Specimen</Button>
            {/* <Button variant="secondary" className="wm-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="wm-carousel-img"
            src={wfive}
            alt="Washing Machine Setup"
          />
          <div className="wm-carousel-item-content">
            <h3>Slide 2 - Washing Machine Setup</h3>
            <Button variant="primary" className="wm-carousel-btn" onClick={handleBookNowClick}>Complaint-Specimen</Button>
            {/* <Button variant="secondary" className="wm-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="wm-carousel-img"
            src={wthree}
            alt="Washing Machine Maintenance"
          />
          <div className="wm-carousel-item-content">
            <h3>Slide 3 - Washing Machine Maintenance</h3>
            <Button variant="primary" className="wm-carousel-btn" onClick={handleBookNowClick}>Complaint-Specimen</Button>
            {/* <Button variant="secondary" className="wm-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Grid System with Image and Description */}
      <Container className="wm-grid-container">
        <Row className="wm-grid-item">
        <Col md={5} className="wm-grid-description">
            <h4>Washing Machine Repair</h4>
            <p>
              Our professionals are trained to handle all types of washing machine repairs, from motor issues to drainage problems.
            </p>
            <Button variant="outline-primary" className="wm-learn-more-btn">Learn More</Button>
          </Col>
          <Col md={7} className="wm-grid-img-container">
            <img src={wtwo} alt="Washing Machine Repair" className="wm-grid-img" />
          </Col>
          
        </Row>

        <Row className="wm-grid-item wm-reverse">
          <Col md={5} className="wm-grid-description">
            <h4>Washing Machine Setup</h4>
            <p>
              Need a new washing machine installed? Our team ensures proper installation, including plumbing and electrical connections.
            </p>
            <Button variant="outline-primary" className="wm-learn-more-btn">Learn More</Button>
          </Col>
          <Col md={7} className="wm-grid-img-container">
            <img src={wfour} alt="Washing Machine Setup" className="wm-grid-img" />
          </Col>
        </Row>

        <Row className="wm-grid-item">
        <Col md={5} className="wm-grid-description">
            <h4>Washing Machine Maintenance</h4>
            <p>
              Keep your washing machine running smoothly with our maintenance service, which includes cleaning and part checks.
            </p>
            <Button variant="outline-primary" className="wm-learn-more-btn">Learn More</Button>
          </Col>
          <Col md={7} className="wm-grid-img-container">
            <img src={wsix} alt="Washing Machine Maintenance" className="wm-grid-img" />
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

export default WashingMachine;
