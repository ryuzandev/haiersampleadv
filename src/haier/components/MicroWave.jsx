import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/MicroWave.css";

// Import modals
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// image sources
import mone from "../componentsSrcAssets/mone.jpg";
import mtwo from "../componentsSrcAssets/mtwo.jpg";
import mthree from "../componentsSrcAssets/mthree.jpg";
import mfour from "../componentsSrcAssets/mfour.jpg";
import mfive from "../componentsSrcAssets/mfive.jpg";
import msix from "../componentsSrcAssets/msix.jpg";

function MicroWave() {
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
      <div className="microwave-container">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="microwave-carousel-item-content">
              <img
                src={mthree}
                alt="Microwave Repair"
                className="microwave-carousel-img"
              />
              <div className="microwave-carousel-caption">
                <h3>Microwave Repair</h3>
                <div className="microwave-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="microwave-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="microwave-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="microwave-carousel-item-content">
              <img
                src={msix}
                alt="Microwave Installation"
                className="microwave-carousel-img"
              />
              <div className="microwave-carousel-caption">
                <h3>Microwave Installation</h3>
                <div className="microwave-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="microwave-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="microwave-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="microwave-carousel-item-content">
              <img
                src={mtwo}
                alt="Microwave Maintenance"
                className="microwave-carousel-img"
              />
              <div className="microwave-carousel-caption">
                <h3>Microwave Maintenance</h3>
                <div className="microwave-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="microwave-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="microwave-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Grid System */}
        <Container className="microwave-grid-container">
          <Row className="microwave-grid-row microwave-grid-item">
            <Col md={8} className="microwave-grid-img-container">
              <img
                src={mfour}
                alt="Microwave Repair"
                className="microwave-grid-img"
              />
            </Col>
            <Col md={4} className="microwave-grid-description">
              <h4>Microwave Repair</h4>
              <p>
                Our repair experts can fix any issue with your microwave, from
                heating problems to electrical faults.
              </p>
              <Button
                variant="outline-dark"
                className="microwave-learn-more-btn"
              >
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="microwave-grid-row microwave-grid-item microwave-reverse">
            <Col md={8} className="microwave-grid-img-container">
              <img
                src={mtwo}
                alt="Microwave Installation"
                className="microwave-grid-img"
              />
            </Col>
            <Col md={4} className="microwave-grid-description">
              <h4>Microwave Installation</h4>
              <p>
                Get your new microwave installed professionally, ensuring safety
                and optimal performance.
              </p>
              <Button
                variant="outline-dark"
                className="microwave-learn-more-btn"
              >
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="microwave-grid-row microwave-grid-item">
            <Col md={8} className="microwave-grid-img-container">
              <img
                src={mfive}
                alt="Microwave Maintenance"
                className="microwave-grid-img"
              />
            </Col>
            <Col md={4} className="microwave-grid-description">
              <h4>Microwave Maintenance</h4>
              <p>
                Regular maintenance ensures your microwave continues to perform
                efficiently and safely.
              </p>
              <Button
                variant="outline-dark"
                className="microwave-learn-more-btn"
              >
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

export default MicroWave;
