// src/components/Gallery/Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css'; // Corrigido: caminho do CSS

const Gallery = ({ images, width, height, radius, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="gallery" style={{ width, height }}>
      <div className="image-container" style={{ borderRadius: radius }}>
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
      </div>
      {currentIndex > 0 && (
        <button className="arrow left" onClick={handlePrev}>
          ←
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button className="arrow right" onClick={handleNext}>
          →
        </button>
      )}
      {showThumbs && (
        <div className="thumbnails">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;