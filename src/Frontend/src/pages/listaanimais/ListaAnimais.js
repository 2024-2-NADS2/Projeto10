import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api.js"; // configuração do Axios para a API
import "./ListaAnimais.css";

const ListaAnimais = () => {
    const [animais, setAnimais] = useState([]); // estado para armazenar os animais
    const [filtroIdade, setFiltroIdade] = useState("");
    const [filtroGenero, setFiltroGenero] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("");

    // busca os animais do backend ao carregar o componente
    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await api.get("/animais"); // ajuste para o endpoint correto
                setAnimais(response.data);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
                alert("Erro ao carregar a lista de animais. Tente novamente mais tarde.");
            }
        };

        fetchAnimais();
    }, []);

    // filtra os animais com base nos critérios
    const animaisFiltrados = animais.filter((animal) => {
        return (
            (filtroIdade === "" || animal.idade === parseInt(filtroIdade)) &&
            (filtroGenero === "" || animal.genero.toLowerCase() === filtroGenero.toLowerCase()) &&
            (filtroEstado === "" || animal.estado.toLowerCase() === filtroEstado.toLowerCase())
        );
    });

    return (
        <div className="lista-animais-container">
            {/* barra de filtros */}
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

            {/* lista de animais */}
            <div className="lista-animais">
                {animaisFiltrados.map((animal) => (
                    <div className="animal-card" key={animal.id}>
                        <img
                            src={animal.imagem || "/imagens/sem-imagem.jpg"} // Imagem padrão se nenhuma for fornecida
                            alt={animal.nome}
                            className="pet-image"
                        />
              
                        <h4>Nome: {animal.nome}</h4>
                        <p>Especie: {animal.especie} anos</p>
                        <p>Idade: {animal.idade}</p>
                        <p>Genero: {animal.sexo }</p>
                        <p>Vacinado: {animal.vacinado || "Não informado"}</p>
                        <p>Castrado: {animal.castrado || "Não informado" }</p>
                        <p>Descrição: {animal.descricao }</p>
                        <p></p>
                                                <div className="adopt-button-container">
                            <Link to="/formulario-adocao" className="adopt-button">
                                <img
                                    src="/imagens/pata.png"
                                    alt="Pata"
                                    className="paw-icon-button"
                                />
                                <span>Quero Adotar</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaAnimais;