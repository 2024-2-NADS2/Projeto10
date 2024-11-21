import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // Configuração do Axios para interagir com o backend
import "./LoginCadastro.css";

const LoginCadastro = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { email, senha });
      
      // Verifique a resposta do backend
      if (response.data.success) {
        // Supondo que o token seja retornado
        const token = response.data.token;

        // Salvar o token no localStorage (ou outro local seguro)
        localStorage.setItem("authToken", token);

        // Redirecionar para outra página (ex.: lista de animais)
        navigate("/lista-animais");
      } else {
        setErro(response.data.message || "Erro ao fazer login.");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
      setErro("Erro no servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="login-cadastro-container">
      <h2>ACESSAR OU CRIAR CONTA</h2>
      <div className="login-cadastro-box">
        {/* sessão de login */}
        <div className="login-section">
          <h3>Acesse sua Conta</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha de acesso"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          {erro && <p className="error-message">{erro}</p>}
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
            onClick={() => navigate("/crie-sua-conta")}
          >
            Criar minha conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
