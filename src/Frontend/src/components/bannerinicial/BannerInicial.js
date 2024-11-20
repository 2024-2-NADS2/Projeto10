import React, { useState, useEffect } from 'react';
import './BannerInicial.css';

const Banner = () => {
  const banners = [
    { id: 1, img: '/imagens/banner-pagina-inicial.jpg', alt: 'Banner 1' },
    { id: 2, img: '/imagens/banner-pagina-inicial2.jpg', alt: 'Banner 2' },
    { id: 3, img: '/imagens/banner-pagina-inicial3.jpg', alt: 'Banner 3' }
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  // Função para ir para o próximo banner
  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  // Função para ir para o banner anterior
  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Movimento automático dos banners
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Troca automaticamente para o próximo banner
    }, 1700); // Altere o valor (5000) para o intervalo desejado em milissegundos (5 segundos)

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

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