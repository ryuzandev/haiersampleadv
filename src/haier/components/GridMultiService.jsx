import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentsCss/GridMultiService.css"; // Import the custom CSS file
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

function GridMultiService() {
  const { brandName } = useContext(AppContext);
  const [isPlayingVideo1, setIsPlayingVideo1] = useState(false); // State to control video 1 play status
  const [isPlayingVideo2, setIsPlayingVideo2] = useState(false); // State to control video 2 play status
  const [isHoveredVideo1, setIsHoveredVideo1] = useState(false); // Hover state for video 1
  const [isHoveredVideo2, setIsHoveredVideo2] = useState(false); // Hover state for video 2

  // Handle mouse enter for Video 1
  const handleMouseEnterVideo1 = () => {
    setIsHoveredVideo1(true);
    setTimeout(() => {
      if (isHoveredVideo1) {
        setIsPlayingVideo1(true);
      }
    }, 5000); // Wait 5 seconds before playing the video
  };

  // Handle mouse leave for Video 1
  const handleMouseLeaveVideo1 = () => {
    setIsHoveredVideo1(false);
    setIsPlayingVideo1(false); // Stop playing video when mouse leaves
  };

  // Handle mouse enter for Video 2
  const handleMouseEnterVideo2 = () => {
    setIsHoveredVideo2(true);
    setTimeout(() => {
      if (isHoveredVideo2) {
        setIsPlayingVideo2(true);
      }
    }, 5000); // Wait 5 seconds before playing the video
  };

  // Handle mouse leave for Video 2
  const handleMouseLeaveVideo2 = () => {
    setIsHoveredVideo2(false);
    setIsPlayingVideo2(false); // Stop playing video when mouse leaves
  };

  return (
    <Container fluid className="component-background">
      {/* Banner for Services */}
      <Row className="banner-row">
        <Col>
          <div className="banner-text">
            <h2>Our Services</h2>
            <p>
              Explore our expert repair services with top-notch quality and
              quick turnaround.
            </p>
          </div>
        </Col>
      </Row>

      {/* Row for First YouTube Video and Data */}
      <Row className="align-items-center">
        {/* First YouTube Video (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo1 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo1}
            onMouseLeave={handleMouseLeaveVideo1}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/vjfoGZ-LWTI"
              title="Experience the Intelligence of Haier QLED Powered by Google TV"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo1 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>

        {/* Data (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src="https://c0.wallpaperflare.com/preview/800/984/997/grayscale-photo-of-washing-machine.jpg" // Placeholder image for Washing Machine
                alt="Washing Machine"
                className="service-image"
              />
              <h5>Washing Machine</h5>
              <p>
                We offer expert services for all types of washing machines,
                ensuring efficiency and durability.
              </p>
              <Link to={`/${brandName}/haier/washing`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
            <div className="service-card">
              <img
                src="https://c1.wallpaperflare.com/preview/258/187/760/wall-fan-air-conditioning-box.jpg" // Placeholder image for AC
                alt="Air Conditioner"
                className="service-image"
              />
              <h5>AC Repair</h5>
              <p>
                Our technicians are skilled in repairing air conditioners of all
                makes and models for better cooling performance.
              </p>
              <Link to={`/${brandName}/haier/aircondition`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* Row for Second YouTube Video and Data */}
      <Row className="align-items-center">
        {/* Data (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/636/997/126/lg-ultrawide-dream-canvas-smart-tv-hd-wallpaper-preview.jpg" // Placeholder image for TV
                alt="TV"
                className="service-image"
              />
              <h5>TV Repair</h5>
              <p>
                We offer professional repair services for your TV, restoring
                your viewing experience to its fullest.
              </p>
              <Link to={`/${brandName}/haier/tv`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
            <div className="service-card">
              <img
                src="https://imgs.search.brave.com/an9uExyqHIEqWxKoPWb5walA8KC3_pw5QY5RICtXLeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NDQ2NTE3OS9waG90/by93b21hbi1hdC1o/b21lLWhlYXRpbmct/Zm9vZC1hdC1taWNy/b3dhdmUtb3Zlbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bEdyZFFCWnlwTUlG/UW1TSW4xcVp1Zlpk/N01SazhRSjc1RVJv/VHJWRHU2Zz0" // Placeholder image for Microwave Oven
                alt="Microwave Oven"
                className="service-image"
              />
              <h5>Microwave Oven</h5>
              <p>
                Quick and reliable repair services for microwave ovens, ensuring
                optimal functionality.
              </p>
              <Link to={`/${brandName}/haier/microwave`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
          </div>
        </Col>

        {/* Second YouTube Video (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo2 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo2}
            onMouseLeave={handleMouseLeaveVideo2}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/kD8y0bBzBQs"
              title="Haier Front Load Fully Automatic Washing Machine- 30 Sec AD Simranjit Kaur"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo2 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>
      </Row>

      {/* hahd extendion  */}
      {/* Row for First YouTube Video and Data */}
      <Row className="align-items-center">
        {/* First YouTube Video (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo1 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo1}
            onMouseLeave={handleMouseLeaveVideo1}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/Us9cOgmAGnE"
              title="The future of Smart Living | Sparking Global wave of innovation | Haier India"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo1 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>

        {/* Data (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src="https://images.pexels.com/photos/5824493/pexels-photo-5824493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Placeholder image for Washing Machine
                alt="Washing Machine"
                className="service-image"
              />
              <h5>Water Heater</h5>
              <p>
                💧 Expert Water Heater Installation – Get Hot Water Flowing
                Today!
              </p>
              <Link to={`/${brandName}/haier/waterheater`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
            <div className="service-card">
              <img
                src="https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder image for AC
                alt="Air Conditioner"
                className="service-image"
              />
              <h5>Refrigerator</h5>
              <p>
                Our technicians are skilled in repairing air conditioners of all
                makes and models for better cooling performance.
              </p>
              <Link to={`/${brandName}/haier/Refrigerator`}>
                <button className="service-button">Find More</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* hahd extension two */}
    </Container>
  );
}

export default GridMultiService;
