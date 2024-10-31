// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Pet Hero Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Adote ou Doe</a></li>
                    <li><Link to="/sobre-nos">Sobre Nós</Link></li> {/* Link para Sobre Nós */}
                    
                    <li><a href="#">Ong's</a></li>
                </ul>
            </nav>
            <div className="login">
                
                <Link to="/login-cadastro">Entrar/Cadastrar-se</Link>
            </div>
        </header>
    );
}

export default Header;