import React, { useState } from "react";
import api from "../../services/api.js"; // Importa a configuração do Axios
import "./CrieSeuPet.css";

function CrieSeuPet() {
  // Estado para armazenar os dados do pet
  const [petData, setPetData] = useState({
    nome: "",
    especie: "",
    raca: "",
    idade: "",
    genero: "",
    vacinado: "",
    castrado: "",
    descricao: "",
  });

  // Função para lidar com mudanças nos campos do formulário
  const handlePetChange = (e) => {
    const { name, value } = e.target;
    setPetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para envio do formulário
  const handlePetSubmit = async (e) => {
    e.preventDefault();

    try {
      // Preparação dos dados para envio ao backend
      const response = await api.post(
        "/animais",
        {
          nome: petData.nome,
          especie: petData.especie,
          raca: petData.raca || null,
          idade: parseInt(petData.idade) || null, // Convertendo idade para número
          sexo: petData.genero || null,
          vacinado: petData.vacinado.toUpperCase() === "SIM",
          castrado: petData.castrado.toUpperCase() === "SIM",
          descricao: petData.descricao || null,
          ong_responsavel_id: 1, // Substitua pelo ID real da ONG
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Token de autenticação
          },
        }
      );

      // Mensagem de sucesso
      alert("Pet cadastrado com sucesso!");
      console.log("Pet cadastrado com sucesso:", response.data);

      // Limpa o formulário após o envio
      setPetData({
        nome: "",
        especie: "",
        raca: "",
        idade: "",
        genero: "",
        vacinado: "",
        castrado: "",
        descricao: "",
      });
    } catch (error) {
      // Mensagem de erro
      console.error("Erro ao cadastrar pet:", error.response?.data?.error || error.message);
      alert(`Erro ao realizar o cadastro do pet: ${error.response?.data?.error || "Tente novamente."}`);
    }
  };

  return (
    <div className="crie-seu-pet-container" style={{ marginBottom: "80px" }}>
      <h2>Cadastre um Pet para Adoção</h2>
      <form onSubmit={handlePetSubmit} className="crie-seu-pet-form">
        <label>
          Nome do Pet:
          <input
            type="text"
            name="nome"
            value={petData.nome}
            onChange={handlePetChange}
            placeholder="Digite o nome do pet"
            required
          />
        </label>

        <label>
          Espécie:
          <input
            type="text"
            name="especie"
            value={petData.especie}
            onChange={handlePetChange}
            placeholder="Digite a espécie do pet"
            required
          />
        </label>

        <label>
          Idade:
          <input
            type="number"
            name="idade"
            value={petData.idade}
            onChange={handlePetChange}
            placeholder="Digite a idade do pet"
            required
          />
        </label>

        <label>
          Raça:
          <input
            type="text"
            name="raca"
            value={petData.raca}
            onChange={handlePetChange}
            placeholder="Digite a raça do pet"
          />
        </label>

        <label>
          Gênero:
          <input
            type="text"
            name="genero"
            value={petData.genero}
            onChange={handlePetChange}
            placeholder="Digite o gênero do pet"
          />
        </label>

        <label>
          Vacinado:
          <input
            type="text"
            name="vacinado"
            value={petData.vacinado}
            onChange={handlePetChange}
            placeholder="Seu pet é vacinado? (SIM ou NÃO)"
          />
        </label>

        <label>
          Castrado:
          <input
            type="text"
            name="castrado"
            value={petData.castrado}
            onChange={handlePetChange}
            placeholder="Seu pet é castrado? (SIM ou NÃO)"
          />
        </label>

        <label>
          Descrição:
          <textarea
            name="descricao"
            value={petData.descricao}
            onChange={handlePetChange}
            placeholder="Digite uma descrição do pet"
          ></textarea>
        </label>

        <button type="submit">Cadastrar Pet</button>
      </form>
    </div>
  );
}

export default CrieSeuPet;
