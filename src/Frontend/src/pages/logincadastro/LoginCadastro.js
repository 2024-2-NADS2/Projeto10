import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // Configuração do Axios para interagir com o backend
import "./LoginCadastro.css";

const LoginCadastro = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Estado para o e-mail
  const [senha, setSenha] = useState(""); // Estado para a senha
  const [erro, setErro] = useState("");  // Estado para mensagem de erro

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o envio tradicional do formulário

    // Validação simples para verificar se os campos foram preenchidos
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Envia o e-mail e senha para o backend na rota /login
      const response = await api.post("usuarios/login", { email, senha });

      // Login bem-sucedido
      if (response.data.message === "Login realizado com sucesso!") {
        const token = response.data.token;
        localStorage.setItem("authToken", token);

        // Redirecionar para a lista de animais
        navigate("/lista-animais");
      }
    } catch (error) {
      // Captura e exibe mensagens de erro do backend
      if (error.response && error.response.data && error.response.data.message) {
        setErro(error.response.data.message);
      } else {
        // Exibe erro genérico para problemas de conexão ou servidor
        setErro("Erro no servidor. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <div className="login-cadastro-container">
      <h2>ACESSAR OU CRIAR CONTA</h2>
      <div className="login-cadastro-box">
        {/* Sessão de Login */}
        <div className="login-section">
          <h3>Acesse sua Conta</h3>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha de acesso"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
            />
            <button className="login-button" type="submit">
              Entrar
            </button>
          </form>
          {erro && <p className="error-message">{erro}</p>} {/* Exibe erro se ocorrer */}
        </div>

        {/* Sessão de "Criar Minha Conta" */}
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
            onClick={() => navigate("/crie-sua-conta")} // Redireciona para a tela de cadastro
          >
            Criar minha conta
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCadastro;
