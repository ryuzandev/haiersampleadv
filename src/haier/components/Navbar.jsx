import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import {
  Navbar as NavbarComponent,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../componentsCss/NavbarCss.css";
import lgLogo from "../componentsSrcAssets/haierLogo.png";
import { AppContext } from "../../App";

function Navbar() {
  const { brandName } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // const searchableRoutes = [ /* your full route list */ ];
  const searchableRoutes = [
    { name: "Television", path: `/${brandName}/haier/tv` },
    { name: "Television Service", path: `/${brandName}/haier/tv` },
    { name: "Washing Machine", path: `/${brandName}/haier/washing` },
    { name: "Washing Machine Service", path: `/${brandName}/haier/washing` },
    { name: "Microwave", path: `/${brandName}/haier/microwave` },
    { name: "Microwave Service", path: `/${brandName}/haier/microwave` },
    { name: "Air Conditioner", path: `/${brandName}/haier/aircondition` },
    {
      name: "Air Conditioner Service",
      path: `/${brandName}/haier/aircondition`,
    },
    { name: "Refrigerator", path: `/${brandName}/haier/refrigerator` },
    { name: "Refrigerator Service", path: `/${brandName}/haier/refrigerator` },
    { name: "Water Heater", path: `/${brandName}/haier/waterheater` },
    { name: "Water Heater Service", path: `/${brandName}/haier/DishWasher` },
  ];

  const fuse = new Fuse(searchableRoutes, {
    keys: ["name"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const results = fuse.search(searchTerm).slice(0, 5);
    setSuggestions(results.map((res) => res.item));
    console.log(results);
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      navigate(suggestions[0].path);
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <NavbarComponent expand="xxl" className="navbar-light-theme">
      <Container fluid>
        {/* <NavbarComponent.Brand as={Link} to="/" className="text-white">
          HYPERSONIC
        </NavbarComponent.Brand> */}
        <NavbarComponent.Brand
          as={Link}
          to={`/${brandName}/haier`}
          className="d-flex align-items-center"
        >
          <img
            src={lgLogo}
            alt="Hypersonic Logo"
            style={{ height: "40px", width: "auto" }} // adjust size if needed
          />
        </NavbarComponent.Brand>

        <NavbarComponent.Toggle aria-controls="navbarScroll" />
        <NavbarComponent.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-scroll" navbarScroll>
            {/* Nav links... */}
            {/* <Nav.Link as={Link} to="/hypersonic" className="text-white">
              Home
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/tv`}
              className="text-black"
            >
              Television
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/washing`}
              className="text-black"
            >
              Washing-Machine
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/microwave`}
              className="text-black"
            >
              Microwave
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/aircondition`}
              className="text-black"
            >
              Air-Conditioner
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/Refrigerator`}
              className="text-black"
            >
              Refrigerator
            </Nav.Link>
            {/* dishwasher turned to water heater */}
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/waterheater`}
              className="text-black"
            >
              Water-Heater
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/book-now`}
              className="text-black"
            >
              Specimen
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/troubleshoot" className="text-white">
              Trouble-Shoot
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to={`/${brandName}/haier/exoticdeletecards`}
              className="text-black"
            >
              Forward-Specimen
            </Nav.Link>
          </Nav>

          <Form
            className="d-flex position-relative"
            onSubmit={handleSearchSubmit}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="search-input"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <Button
              variant="outline-light"
              className="search-button"
              type="submit"
            >
              Search
            </Button>

            {suggestions.length > 0 && (
              <div className="search-suggestions position-absolute bg-white w-100 shadow">
                {suggestions.map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item px-3 py-2 text-dark"
                    onClick={() => {
                      navigate(item.path);
                      setSearchTerm("");
                      setSuggestions([]);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </Form>
        </NavbarComponent.Collapse>
      </Container>
    </NavbarComponent>
  );
}

export default Navbar;
