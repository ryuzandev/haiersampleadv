// export default Hombale;
import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Carousel,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../democomponents/Homebale.css";

// Import images
import one from "../democomponents/democomponentAssests/one.jpg";
import two from "../democomponents/democomponentAssests/two.avif";
import three from "../democomponents/democomponentAssests/three.jpg";

function Hombale() {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Navbar */}
      {/* <Navbar bg="dark" variant="dark" expand="lg" className="hombale-navbar">
        <Container>
          <Navbar.Brand href="#home" className="hombale-logo">
            IMMORTAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact" onClick={handleContactClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Carousel */}
      {/* <Carousel className="hombale-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to IMMORTAL</h3>
            <p>Your trusted partner in technology</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Second slide" />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Empowering the future</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="Third slide" />
          <Carousel.Caption>
            <h3>Join Our Journey</h3>
            <p>Explore limitless possibilities</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      {/* Grid Section */}
      <Container fluid className="hombale-grid-section w-100">
        <Row>
          <Col lg={12} md={6} sm={12}>
            <Card className="hombale-card">
              <Card.Body>
                <Card.Title>Disclaimer</Card.Title>
                <Card.Text>
                  {/* All information provided is for general purposes only and is
                  subject to change without notice. */}
                  The information provided on this platform is intended for
                  general informational purposes only and should not be
                  construed as professional advice. While we make every effort
                  to ensure the accuracy and timeliness of the data, we do not
                  guarantee its completeness or reliability. Information is
                  subject to change without prior notice, and we disclaim any
                  liability for any direct or indirect loss arising from its
                  use. Users are encouraged to consult appropriate professionals
                  for specific guidance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} md={6} sm={12}>
            <Card className="hombale-card">
              <Card.Body>
                <Card.Title>Copyright</Card.Title>
                <Card.Text>
                  © 2025 Immortal. All rights reserved. This platform and all
                  associated content, including text, images, software, and
                  designs, are the intellectual property of Hombale.
                  Unauthorized use, replication, distribution, or public display
                  without explicit permission is prohibited. All rights to
                  future updates, improvements, and new releases are reserved.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={12} md={6} sm={12}>
            <Card className="hombale-card">
              <Card.Body>
                <Card.Title>Privacy</Card.Title>
                <Card.Text>
                  We value your privacy and are committed to protecting your
                  personal data with the highest standards of security and
                  confidentiality. We believe in transparency and will always
                  inform you about how your data is collected, used, stored, and
                  shared. Our commitment to data protection extends to every
                  aspect of our services, ensuring your information remains
                  private and secure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Carousel */}
      <Carousel className="hombale-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to IMMORTAL</h3>
            <p>Your trusted partner in technology</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={two} alt="Second slide" />
          <Carousel.Caption>
            <h3>Innovative Solutions</h3>
            <p>Empowering the future</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={three} alt="Third slide" />
          <Carousel.Caption>
            <h3>Join Our Journey</h3>
            <p>Explore limitless possibilities</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Footer */}
      {/* <footer className="hombale-footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p>Follow us on social media</p>
              <div className="social-icons">
                <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaYoutube />
              </div>
              <p>© 2025 IMMORTAL. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer> */}

      {/* Contact Modal */}
      {showModal && (
        <div className="hombale-modal">
          <div className="hombale-modal-header">Contact Us</div>
          <div className="hombale-modal-body">
            <p>Email: contact@immortal.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <button
              className="hombale-modal-close-btn"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Hombale;
