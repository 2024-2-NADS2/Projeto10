// src/pages/homepage/HomePage.js

import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Categories from '../../components/categories/Categories';
import FeaturedPets from '../../components/featuredpets/FeaturedPets';
import Footer from '../../components/footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <FeaturedPets />
      <Footer />
    </div>
  );
}

export default HomePage;