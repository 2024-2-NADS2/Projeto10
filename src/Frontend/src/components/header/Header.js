import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../services/UserContext'; // importa o contexto
import './Header.css';

function Header() {
  const { user } = useContext(UserContext); // obtém o usuário do contexto

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src="imagens/logo.png" alt="Pet Hero Logo" />
          </Link>
        </div>

        <div className="login-buttons">
          {user ? ( // se o usuário estiver logado
            <div className="welcome-message">
              <span role="img" aria-label="paw">🐾</span> Olá, {user.nome}! Seja bem-vindo
            </div>
          ) : (
            // caso contrário, exibe os botões normais
            <>
              <div className="login">
                <Link to="/login-cadastro">
                  <span role="img" aria-label="paw">🐾</span> Faça seu Login / Cadastro Usuario
                </Link>
              </div>
              <div className="login sou-ong">
                <Link to="/sou-ong">
                  <span role="img" aria-label="building">🏢</span> Cadastre sua Ong
                </Link>
              </div>
              <div className="login cadastreseupet">
                <Link to="/crie-seu-pet">
                  <span role="img" aria-label="gato">🐱</span> Cadastre seu Pet
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

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