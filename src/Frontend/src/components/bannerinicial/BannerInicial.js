import React, { useState } from 'react';
import './BannerInicial.css';

const Banner = () => {
  const banners = [
    { id: 1, img: '/imagens/banner-pagina-inicial.jpg', alt: 'Banner 1' },
    { id: 2, img: '/imagens/banner-pagina-inicial2.jpg', alt: 'Banner 2' },
    { id: 3, img: '/imagens/banner-pagina-inicial3.jpg', alt: 'Banner 3' }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <button className="banner-arrow left" onClick={handlePrev}>
        &#8249;
      </button>
      <img
        src={banners[currentBanner].img}
        alt={banners[currentBanner].alt}
        className="banner-image"
      />
      <button className="banner-arrow right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Banner;