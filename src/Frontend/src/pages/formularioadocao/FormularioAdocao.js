import React, { useState } from "react";
import axios from "axios";
import "./FormularioAdocao.css";

const FormularioAdocao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    usuario_id: "",
    animal_id: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://fgc5kq-3001.csb.app/api/adocoes", {
        usuario_id: formData.usuario_id,
        animal_id: formData.animal_id,
        status: "pendente",
      });

      console.log("Adoção criada com sucesso:", response.data);
      setStatus("Adoção solicitada com sucesso!");
      setFormData({
        nome: "",
        email: "",
        mensagem: "",
        usuario_id: "",
        animal_id: "",
      });
    } catch (error) {
      console.error("Erro ao criar adoção:", error);
      setStatus("Erro ao solicitar adoção. Tente novamente.");
    }
  };

  return (
    <div className="form-container">
      <h2>Formulário de Interesse para Adoção</h2>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mensagem</label>
        <textarea
          name="mensagem"
          placeholder="Escreva sua mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        ></textarea>

        <label>ID do Usuário</label>
        <input
          type="text"
          name="usuario_id"
          placeholder="Digite seu ID de usuário"
          value={formData.usuario_id}
          onChange={handleChange}
          required
        />

        <label>ID do Animal</label>
        <input
          type="text"
          name="animal_id"
          placeholder="Digite o ID do animal"
          value={formData.animal_id}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioAdocao;
