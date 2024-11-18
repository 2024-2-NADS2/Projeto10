// src/pages/listaanimais/ListaAnimais.js
import React, { useState } from 'react';
import './ListaAnimais.css';

const ListaAnimais = () => {
    const animais = [
        { id: 1, nome: 'Tob', idade: 3, genero: 'Macho', estado: 'SP', imagem: '/imagens/dog1.png' },
        { id: 2, nome: 'Chiara', idade: 1, genero: 'Fêmea', estado: 'RJ', imagem: '/imagens/gato3.jpg' },
        { id: 3, nome: 'Bobby', idade: 2, genero: 'Macho', estado: 'SP', imagem: '/imagens/dog2.jpg' },
        { id: 4, nome: 'Nina', idade: 4, genero: 'Fêmea', estado: 'MG', imagem: '/imagens/gato2.jpg' },
        { id: 5, nome: 'Max', idade: 3, genero: 'Macho', estado: 'RJ', imagem: '/imagens/dog4.png' },
        { id: 6, nome: 'Luna', idade: 5, genero: 'Fêmea', estado: 'SP', imagem: '/imagens/dog5.png' },
        { id: 7, nome: 'Rex', idade: 2, genero: 'Macho', estado: 'MG', imagem: '/imagens/dog6.png' },
        { id: 8, nome: 'Bella', idade: 3, genero: 'Fêmea', estado: 'RJ', imagem: '/imagens/calopsita.png' },
        { id: 9, nome: 'Mimi', idade: 1, genero: 'Fêmea', estado: 'SP', imagem: '/imagens/dog3.jpg' },
    ];

    // Estados para os filtros
    const [filtroIdade, setFiltroIdade] = useState('');
    const [filtroGenero, setFiltroGenero] = useState('');
    const [filtroEstado, setFiltroEstado] = useState('');

    // Filtra os animais com base nos critérios
    const animaisFiltrados = animais.filter((animal) => {
        return (
            (filtroIdade === '' || animal.idade === parseInt(filtroIdade)) &&
            (filtroGenero === '' || animal.genero === filtroGenero) &&
            (filtroEstado === '' || animal.estado === filtroEstado)
        );
    });

    return (
        <div className="lista-animais-container">
            {/* Barra de Filtros */}
            <aside className="filtro">
                <h3>Filtrar por:</h3>
                <div>
                    <label htmlFor="idade">Idade:</label>
                    <select
                        id="idade"
                        value={filtroIdade}
                        onChange={(e) => setFiltroIdade(e.target.value)}
                    >
                        <option value="">Todas</option>
                        <option value="1">1 ano</option>
                        <option value="2">2 anos</option>
                        <option value="3">3 anos</option>
                        <option value="4">4 anos</option>
                        <option value="5">5 anos</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="genero">Gênero:</label>
                    <select
                        id="genero"
                        value={filtroGenero}
                        onChange={(e) => setFiltroGenero(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="Macho">Macho</option>
                        <option value="Fêmea">Fêmea</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="estado">Estado:</label>
                    <select
                        id="estado"
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                    </select>
                </div>
            </aside>

            {/* Lista de Animais */}
            <div className="lista-animais">
                {animaisFiltrados.map((animal) => (
                    <div className="animal-card" key={animal.id}>
                        <img src={animal.imagem} alt={animal.nome} className="pet-image"/>
                        <h4>Nome: {animal.nome}</h4>
                        <p>Idade: {animal.idade} anos</p>
                        <p>Gênero: {animal.genero}</p>
                        <p>Estado: {animal.estado}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaAnimais;
