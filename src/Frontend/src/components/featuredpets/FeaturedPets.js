// src/components/FeaturedPets/FeaturedPets.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPets.css';

function FeaturedPets() {
    return (
        <section className="featured-pets">
            <div className="pet-card">
                <img src="/imagens/cachorro.jpg" alt="Cachorro" />
                <div className="pet-info">
                    <p><strong>Nome:</strong> Tob</p>
                    <p><strong>Idade:</strong> 3 anos</p>
                    <p><strong>Gênero:</strong> Macho</p>
                </div>
            </div>
            <div className="pet-card">
                <img src="/gato.jpg" alt="Gato" />
                <div className="pet-info">
                    <p><strong>Nome:</strong> Chiara</p>
                    <p><strong>Idade:</strong> 1 ano</p>
                    <p><strong>Gênero:</strong> Fêmea</p>
                </div>
            </div>
            <div className="more-pets">
                <img src="/pata.png" alt="Pata" className="paw-icon" /> {/* Ícone de patinha */}
                <p>Mais de 300 pets cadastrados</p>
                <Link to="/lista-animais">Conheça-os</Link>
            </div>
        </section>
    );
}

export default FeaturedPets;