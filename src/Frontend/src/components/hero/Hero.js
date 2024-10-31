// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar" />
            </div>
        </section>
    );
}

export default Hero;