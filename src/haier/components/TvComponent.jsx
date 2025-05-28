import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/TvComponent.css";

// fixed imports for modal functionality
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// image sources
import tvone from "../componentsSrcAssets/tvone.jpg";
import tvtwo from "../componentsSrcAssets/tvtwo.jpg";
import tvthree from "../componentsSrcAssets/tvthree.jpg";
import tvfour from "../componentsSrcAssets/tvfour.jpg";
import tvfive from "../componentsSrcAssets/tvfive.jpg";
import tvsix from "../componentsSrcAssets/tvsix.jpg";

function TvComponent() {
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
    <div className="tv-component-wrapper">
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvone}
              alt="Television Repair"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 1 - Television Repair</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvfive}
              alt="TV Setup Service"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 2 - TV Setup Service</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="tv-carousel-item-content">
            <img
              src={tvthree}
              alt="TV Calibration"
              className="tv-carousel-image"
            />
            <div className="tv-carousel-caption">
              <h3>Slide 3 - TV Calibration</h3>
              <Button
                variant="primary"
                className="tv-carousel-btn"
                onClick={handleBookNowClick}
              >
                Complaint-Specimen
              </Button>
              {/* <Button
                variant="secondary"
                className="tv-carousel-btn"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </Button> */}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Grid System with Image and Description */}
      <Container className="tv-grid-container">
        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-img-container">
            <img src={tvfour} alt="TV Repair" className="tv-grid-img" />
          </Col>
          <Col md={6} className="tv-grid-description">
            <h4>TV Repair Service</h4>
            <p>
              Our expert technicians are ready to fix your television, whether
              it's screen issues, sound problems, or other technical failures.
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
        </Row>

        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-description">
            <h4>TV Setup Service</h4>
            <p>
              Our TV setup service ensures that your new TV is installed and
              configured correctly, including all your devices and settings.
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
          <Col md={6} className="tv-grid-img-container">
            <img src={tvtwo} alt="TV Setup" className="tv-grid-img" />
          </Col>
        </Row>

        <Row className="tv-grid-item">
          <Col md={6} className="tv-grid-img-container">
            <img src={tvsix} alt="TV Calibration" className="tv-grid-img" />
          </Col>
          <Col md={6} className="tv-grid-description">
            <h4>TV Calibration Service</h4>
            <p>
              Optimize your TV’s color, brightness, contrast, and more with our
              expert calibration service for the best viewing experience.
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for Book Now and Troubleshoot */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
      {showTroubleshootModal && (
        <TroubleshootModal onClose={closeTroubleshootModal} />
      )}
    </div>
    <EnquiryModuleCommon/>
    </>
  );
}

export default TvComponent;
