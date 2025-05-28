import React, { useState } from "react";
import { ProductData } from "../../ProductData";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap"; // Import Modal from React Bootstrap
import "../componentsCss/AllProducts.css";

const AllProducts = () => {
  const [visibleWashingMachines, setVisibleWashingMachines] = useState(5);
  const [visibleTelevisions, setVisibleTelevisions] = useState(5);
  const [visibleMicrowaveOvens, setVisibleMicrowaveOvens] = useState(5);
  const [visibleAirConditioners, setVisibleAirConditioners] = useState(5);

  // State for modal visibility and selected product
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadMore = (section) => {
    if (section === "washingMachines") {
      setVisibleWashingMachines(visibleWashingMachines + 5);
    } else if (section === "televisions") {
      setVisibleTelevisions(visibleTelevisions + 5);
    } else if (section === "microwaveOvens") {
      setVisibleMicrowaveOvens(visibleMicrowaveOvens + 5);
    } else if (section === "airConditioners") {
      setVisibleAirConditioners(visibleAirConditioners + 5);
    }
  };

  // Handle View button click - show modal with product details
  const handleView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <Container className="all-products-container">
      <h2 className="section-title text-center mb-4">All Products</h2>

      {/* Washing Machine Section */}
      <section className="product-section">
        <h3 className="text-center">Washing Machines</h3>
        <Row className="product-grid">
          {ProductData.washingMachines
            .slice(0, visibleWashingMachines)
            .map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="product-card">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  <Card.Body className="product-body">
                    <Card.Title className="product-name">{product.name}</Card.Title>
                    <Card.Text className="product-description">{product.description}</Card.Text>
                    <Card.Text className="product-price">{product.price}</Card.Text>
                    <div className="product-actions">
                      <Button variant="success" className="action-btn add-to-cart">
                        Add to Cart
                      </Button>
                      <Button variant="primary" className="action-btn buy-now">
                        Buy Now
                      </Button>
                      <Button
                        variant="secondary"
                        className="action-btn view-btn"
                        onClick={() => handleView(product)} // Show modal on View button click
                      >
                        View
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        {visibleWashingMachines < ProductData.washingMachines.length && (
          <div className="text-center">
            <Button onClick={() => loadMore("washingMachines")} className="load-more-btn">
              Load More
            </Button>
          </div>
        )}
      </section>

      {/* Modal for Product Details */}
      {selectedProduct && (
  <Modal show={showModal} onHide={handleClose} centered className="unique-modal">
    <Modal.Header closeButton className="unique-modal-header">
      <Modal.Title className="unique-modal-title">{selectedProduct.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="unique-modal-body">
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="unique-modal-image"
      />
      <p className="unique-modal-description">{selectedProduct.description}</p>
      <h5 className="unique-modal-price">{selectedProduct.price}</h5>
    </Modal.Body>
    <Modal.Footer className="unique-modal-footer">
      <Button variant="success" onClick={handleClose} className="unique-modal-btn add-to-cart">
        Add to Cart
      </Button>
      <Button variant="primary" onClick={handleClose} className="unique-modal-btn buy-now">
        Buy Now
      </Button>
    </Modal.Footer>
  </Modal>
)}
    </Container>
  );
};

export default AllProducts;
