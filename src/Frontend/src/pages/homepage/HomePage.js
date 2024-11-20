import React from 'react';
import Header from '../../components/header/Header';
import BannerInicial from '../../components/bannerinicial/BannerInicial';
import FeaturedPets from '../../components/featuredpets/FeaturedPets';
import Footer from '../../components/footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <BannerInicial />
      <FeaturedPets />
      <Footer />
    </div>
  );
}

export default HomePage;