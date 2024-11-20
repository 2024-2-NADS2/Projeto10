import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedPets.css';

function FeaturedPets() {
    const pets = [
        {
            nome: 'Tob',
            idade: '3 anos',
            genero: 'Macho',
            imagem: '/imagens/cachorro.jpg',
        },
        {
            nome: 'Chiara',
            idade: '1 ano',
            genero: 'Fêmea',
            imagem: '/imagens/gato.jpg',
        },
    ];

    return (
        <section className="featured-pets">
            {pets.map((pet, index) => (
                <div key={index} className="pet-card">
                    <img src={pet.imagem} alt={pet.nome} className="pet-image" />
                    <div className="pet-info">
                        <p><strong>Nome:</strong> {pet.nome}</p>
                        <p><strong>Idade:</strong> {pet.idade}</p>
                        <p><strong>Gênero:</strong> {pet.genero}</p>
                    </div>
                    <div className="adopt-button-container">
                        <Link to="/formulario-adocao" className="adopt-button">
                            <img src="imagens/pata.png" alt="Pata" className="paw-icon-button" />
                            <span>Quero Adotar</span>
                        </Link>
                    </div>
                </div>
            ))}
            <div className="more-pets">
                <img src="imagens/pata.png" alt="Pata" className="paw-icon" />
                <p>Mais de 300 pets cadastrados</p>
                <Link to="/lista-animais">Conheça-os</Link>
            </div>
        </section>
    );
}

export default FeaturedPets;