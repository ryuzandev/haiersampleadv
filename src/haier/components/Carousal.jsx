import React, { useState } from "react";
// end
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/AssestComponents/ExampleCarouselImage";
import EnquiryModal from "./AssestComponents/EnquiryModal";
// import BookNowModal from './AssestComponents/BookNowModal';
import BookNowForm from "./AssestComponents/BookNowForm";
// import TroubleshootModal from './AssestComponents/TroubleshootModal';
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import "../componentsCss/Carousal.css";

// Image imports
import oneC from "../componentsSrcAssets/oneC.jpg";
import twoC from "../componentsSrcAssets/twoC.jpg";
import threeC from "../componentsSrcAssets/threeC.jpg";

function Carousal() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  const handleEnquiryClick = () => setShowEnquiryModal(true);
  const closeEnquiryModal = () => setShowEnquiryModal(false);

  const handleBookNowClick = () => setShowBookNowModal(true);
  const closeBookNowModal = () => setShowBookNowModal(false);

  const handleTroubleshootClick = () => setShowTroubleshootModal(true);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <>
      <Carousel>
        {/* Slide 1: Television */}
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" imgSrc={oneC} />
          <Carousel.Caption>
            <h3 className="labelC">TELEVISION</h3>
            <p className="labelP">
              Restoring your TV’s brilliance, one repair at a time. Bringing
              your TV back to life with expert care.
            </p>
            <div className="button-container">
              <button
                className="skew-button enquiry"
                onClick={handleEnquiryClick}
              >
                Enquiry
              </button>
              <button
                className="skew-button book-now"
                onClick={handleBookNowClick}
              >
                Complaint Form
              </button>
              {/* <button
                className="skew-button troubleshoot"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2: Washing Machine */}
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" imgSrc={twoC} />
          <Carousel.Caption>
            <h3 className="labelC">WASHING MACHINE</h3>
            <p className="labelP">
              Keep your laundry going with our expert washing machine repair.
              Get your washing machine running like new again.
            </p>
            <div className="button-container">
              <button
                className="skew-button enquiry"
                onClick={handleEnquiryClick}
              >
                Enquiry
              </button>
              <button
                className="skew-button book-now"
                onClick={handleBookNowClick}
              >
                Complaint Form
              </button>
              {/* <button
                className="skew-button troubleshoot"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3: Microwave Oven */}
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" imgSrc={threeC} />
          <Carousel.Caption>
            <h3 className="labelC">MICROWAVE OVEN</h3>
            <p className="labelP">
              Efficient microwave oven repair for a hassle-free cooking
              experience. Quick fixes for your microwave oven, so you can cook
              without interruption.
            </p>
            <div className="button-container">
              <button
                className="skew-button enquiry"
                onClick={handleEnquiryClick}
              >
                Enquiry
              </button>
              <button
                className="skew-button book-now"
                onClick={handleBookNowClick}
              >
                Complaint Form
              </button>
              {/* <button
                className="skew-button troubleshoot"
                onClick={handleTroubleshootClick}
              >
                Troubleshoot
              </button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Enquiry Modal */}
      {showEnquiryModal && <EnquiryModal onClose={closeEnquiryModal} />}

      {/* Book Now Modal */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}

      {/* Troubleshoot Modal */}
      {showTroubleshootModal && (
        <TroubleshootModal onClose={closeTroubleshootModal} />
      )}
    </>
  );
}

export default Carousal;
