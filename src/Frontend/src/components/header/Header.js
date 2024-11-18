// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            {/* Cabeçalho com logo e botões */}
            <div className="header-top">
                <div className="logo">
                    <Link to="/"> {/* Ao clicar na logo, volta para a página inicial */}
                        <img src="/logo.png" alt="Pet Hero Logo" />
                    </Link>
                </div>
                <div className="login-buttons">
                    {/* Botão Entrar/Cadastrar-se */}
                    <div className="login">
                        <Link to="/login-cadastro">
                            <span role="img" aria-label="paw">🐾</span> Entrar/Cadastrar-se
                        </Link>
                    </div>
                    {/* Botão Sou ONG */}
                    <div className="login sou-ong">
                        <Link to="/sou-ong">
                            <span role="img" aria-label="building">🏢</span> Sou ONG
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menu de navegação abaixo */}
            <nav className="header-nav">
                <ul>
                    <li><Link to="/duvidas-sobre-adocao">Dúvidas sobre adoção</Link></li>
                    <li><Link to="/sobre-nos">Sobre Nós</Link></li>
                    <li><a href="#">Ong's</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;