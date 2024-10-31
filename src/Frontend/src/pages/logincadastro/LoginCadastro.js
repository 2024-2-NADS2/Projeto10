import React from 'react';
import './LoginCadastro.css';

const LoginCadastro = () => {
  return (
    <div className="container">
      <h2>ACESSAR OU CRIAR CONTA</h2>
      <div className="box">
        <div className="login">
          <h3>Acesse sua Conta</h3>
          <label>Email ou CPF/CNPJ</label>
          <input type="text" placeholder="Digite seu e-mail" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha de acesso" />
          <button>Entrar</button>
        </div>
        <div className="register">
          <h3>Crie seu login</h3>
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="text" placeholder="Digite seu número de telefone" />
          <input type="password" placeholder="Crie uma senha de acesso" />
          <input type="password" placeholder="Repita a senha" />
          <button>Finalizar cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;