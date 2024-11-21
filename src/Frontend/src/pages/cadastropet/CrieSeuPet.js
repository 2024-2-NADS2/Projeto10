import React, { useState } from "react";
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
  const handlePetSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do pet para o backend
    console.log("Dados do pet enviados:", petData);
    alert("Dados do pet enviados com sucesso!");
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
  };

  return (
    <div className="crie-seu-pet-container" style={{ marginBottom: '80px' }}>
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
            placeholder="Digite a especie do pet"
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
            required
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
            required
          ></textarea>
        </label>
        <button type="submit">Cadastrar Pet</button>
      </form>
    </div>
  );
}

export default CrieSeuPet;