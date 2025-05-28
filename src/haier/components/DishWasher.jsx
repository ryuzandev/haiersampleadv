import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/DishWasher.css";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// Fixed imports for modal functionality
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";

// Image sources
import done from "../componentsSrcAssets/done.jpg";
import dtwo from "../componentsSrcAssets/dtwo.jpg";
import dthree from "../componentsSrcAssets/dthree.jpg";
import dfour from "../componentsSrcAssets/dfour.jpg";
import dfive from "../componentsSrcAssets/dfive.jpg";
import dsix from "../componentsSrcAssets/dsix.jpg";

function DishWasher() {
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
      <div className="dw-component-container">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="dw-carousel-item-content">
              <img
                src={done}
                alt="Dishwasher Repair"
                className="dw-carousel-img"
              />
              <div className="dw-carousel-caption">
                <h3>Water Heater Repair</h3>
                <Button
                  variant="primary"
                  className="dw-carousel-btn primary"
                  onClick={handleBookNowClick}
                >
                  Complaint-Specimen
                </Button>
                {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="dw-carousel-item-content">
              <img
                src={dtwo}
                alt="Dishwasher Installation"
                className="dw-carousel-img"
              />
              <div className="dw-carousel-caption">
                <h3>Water Heater Installation</h3>
                <Button
                  variant="primary"
                  className="dw-carousel-btn primary"
                  onClick={handleBookNowClick}
                >
                  Complaint-Specimen
                </Button>
                {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="dw-carousel-item-content">
              <img
                src={dthree}
                alt="Dishwasher Maintenance"
                className="dw-carousel-img"
              />
              <div className="dw-carousel-caption">
                <h3>Water Heater Maintenance</h3>
                <Button
                  variant="primary"
                  className="dw-carousel-btn primary"
                  onClick={handleBookNowClick}
                >
                  Complaint-Specimen
                </Button>
                {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Grid System with Image and Description */}
        <Container className="dw-grid-container">
          <Row className="dw-grid-item">
            <Col md={5} className="dw-grid-img-container">
              <img
                src={dfive}
                alt="Dishwasher Repair"
                className="dw-grid-img"
              />
            </Col>
            <Col md={7} className="dw-grid-description">
              <h4>Water Heater Repair Services</h4>
              <p>
                🔥 No Hot Water? We’ve Got You Covered! Fast & Affordable Water
                Heater Repair Services.
              </p>
              <Button variant="outline-info" className="dw-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="dw-grid-item dw-reverse">
            <Col md={5} className="dw-grid-img-container">
              <img
                src={dfour}
                alt="Dishwasher Installation"
                className="dw-grid-img"
              />
            </Col>
            <Col md={7} className="dw-grid-description">
              <h4>Water Heater Installation Services</h4>
              <p>
                🔥 Upgrade Your Comfort! Professional Water Heater Installation
                Services Available Now.
              </p>
              <Button variant="outline-info" className="dw-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="dw-grid-item">
            <Col md={5} className="dw-grid-img-container">
              <img
                src={dsix}
                alt="Dishwasher Maintenance"
                className="dw-grid-img"
              />
            </Col>
            <Col md={7} className="dw-grid-description">
              <h4>Water Heater Maintenance</h4>
              <p>
                🔧 Protect Your Investment – Reliable Water Heater Maintenance
                You Can Trust.
              </p>
              <Button variant="outline-info" className="dw-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Modals for Book Now and Troubleshoot */}
        {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
        {showTroubleshootModal && (
          <TroubleshootModal onClose={closeTroubleshootModal} />
        )}
      </div>
      <EnquiryModuleCommon />
    </>
  );
}

export default DishWasher;
