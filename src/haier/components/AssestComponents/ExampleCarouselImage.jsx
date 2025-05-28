// ExampleCarouselImage.js
import React from 'react';
import "../../componentsCss/ExampleCarouselImage.css";

const ExampleCarouselImage = ({ text,imgSrc }) => {
  return (
    <div className="carousel-image-container">
      <img
        src={imgSrc}
        alt=""
        className="d-block w-100 h-"
      />
      <div className="carousel-image-text">
      
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
