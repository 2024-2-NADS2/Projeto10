import React, { useState } from "react";
import api from "../../services/api"; 
import "./CrieSuaConta.css";

const CrieSuaConta = () => {
  // states para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [repitaSenha, setRepitaSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== repitaSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      // envia os dados do formulário para o backend
      const response = await api.post("/usuarios", {
        nome,
        email,
        telefone,
        endereco,
        senha,
      });

      if (response.data.success) {
        // se o cadastro for bem-sucedido, redireciona o usuário ou exibe uma mensagem de sucesso
        alert("Cadastro realizado com sucesso!");
      } else {
        setErro(response.data.message || "Erro ao criar conta.");
      }
    } catch (error) {
      console.error("Erro no servidor", error);
      setErro("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="crie-sua-conta-container" style={{ marginBottom: '40px' }}>
      <h2>Crie uma conta para entrar com processo de adoção na PetHero!</h2>
      <div className="form-box" style={{ marginBottom: "40px" }}>
        <h3>Preencha os campos abaixo com seus dados:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefone para contato (com DDD)"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço de sua residência atual"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha de acesso"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repita a senha"
            value={repitaSenha}
            onChange={(e) => setRepitaSenha(e.target.value)}
          />
          <button type="submit" className="finalizar-button">
            Finalizar cadastro
          </button>
        </form>
        {erro && <p className="error-message">{erro}</p>}
      </div>
    </div>
  );
};

export default CrieSuaConta;
