import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginCadastro.css';

const LoginCadastro = () => {
  const navigate = useNavigate();

  return (
    <div className="login-cadastro-container">
      <h2>ACESSAR OU CRIAR CONTA</h2>
      <div className="login-cadastro-box">
        {/* sessão de login */}
        <div className="login-section">
          <h3>Acesse sua Conta</h3>
          <form>
            <label htmlFor="email">E-mail ou CPF/CNPJ</label>
            <input type="text" id="email" placeholder="Digite seu e-mail" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha de acesso" />
            <button type="button" className="login-button">Entrar</button>
          </form>
        </div>

        {/* sessão de "criar minha conta" */}
        <div className="register-section">
          <h3>Criar uma conta é rápido, fácil e gratuito!</h3>
          <p>
            Você está pronto para mudar a vida de um animal? No Pet Hero, você encontra cães e gatos adoráveis esperando por um lar cheio de amor!
          </p>
          <ul>
            <li>🐾 Descobrir pets que precisam de você</li>
            <li>🔎 Filtrar por tamanho, idade e raça</li>
            <li>🤝 Conectar-se com abrigos locais</li>
          </ul>
          <p>Junte-se a nós e ajude a transformar a vida de um bichinho! Cada adoção é uma nova chance.</p>
          <button
            className="register-button"
            onClick={() => navigate('/crie-sua-conta')}
          >
            Criar minha conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;