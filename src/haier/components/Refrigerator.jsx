import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/Refridgerater.css";

// Import modals
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// Image sources
import rone from "../componentsSrcAssets/rone.jpg";
import rtwo from "../componentsSrcAssets/rtwo.jpg";
import rthree from "../componentsSrcAssets/rthree.jpg";
import rfour from "../componentsSrcAssets/rfour.jpg";
import rfive from "../componentsSrcAssets/rfive.jpg";
import rsix from "../componentsSrcAssets/rsix.jpg";

function Refrigerator() {
  // States to handle modal visibility
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  // Functions to show modals
  const handleBookNowClick = () => setShowBookNowModal(true);
  const handleTroubleshootClick = () => setShowTroubleshootModal(true);

  // Functions to hide modals
  const closeBookNowModal = () => setShowBookNowModal(false);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <>
      <div className="fridge-container">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rone}
                alt="Refrigerator Repair"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Refrigerator Repair</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rsix}
                alt="Refrigerator Installation"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Refrigerator Installation</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rthree}
                alt="Refrigerator Maintenance"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Refrigerator Maintenance</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Grid System */}
        <Container className="fridge-grid-container">
          <Row className="fridge-grid-row">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rfour}
                alt="Refrigerator Repair"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Refrigerator Repair</h4>
              <p>
                Our repair experts can fix any issue with your refrigerator,
                from cooling problems to electrical faults.
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="fridge-grid-row fridge-reverse">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rtwo}
                alt="Refrigerator Installation"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Refrigerator Installation</h4>
              <p>
                Get your new refrigerator installed professionally, ensuring
                safety and optimal performance.
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="fridge-grid-row">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rfive}
                alt="Refrigerator Maintenance"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Refrigerator Maintenance</h4>
              <p>
                Regular maintenance ensures your refrigerator continues to
                perform efficiently and safely.
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
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

export default Refrigerator;
