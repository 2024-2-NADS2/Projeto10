// src/pages/listaanimais/ListaAnimais.js
import React from 'react';
import './ListaAnimais.css';

const ListaAnimais = () => {
    const animais = [
        { id: 1, nome: 'Tob', idade: '3 anos', genero: 'Macho' },
        { id: 2, nome: 'Chiara', idade: '1 ano', genero: 'Fêmea' },
        { id: 3, nome: 'Bobby', idade: '2 anos', genero: 'Macho' },
        { id: 4, nome: 'Nina', idade: '4 anos', genero: 'Fêmea' },
        { id: 5, nome: 'Max', idade: '3 anos', genero: 'Macho' },
        { id: 6, nome: 'Luna', idade: '5 anos', genero: 'Fêmea' },
        { id: 7, nome: 'Rex', idade: '2 anos', genero: 'Macho' },
        { id: 8, nome: 'Bella', idade: '3 anos', genero: 'Fêmea' },
        { id: 9, nome: 'Mimi', idade: '1 ano', genero: 'Fêmea' },
    ];

    return (
        <div className="lista-animais">
            {animais.map(animal => (
                <div className="animal-card" key={animal.id}>
                    <img src={`/imagens/${animal.nome.toLowerCase()}.png`} alt={animal.nome} className="pet-image" />
                    <h4>Nome: {animal.nome}</h4>
                    <p>Idade: {animal.idade}</p>
                    <p>Gênero: {animal.genero}</p>
                </div>
            ))}
        </div>
    );
};

export default ListaAnimais;