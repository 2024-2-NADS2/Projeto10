import React from 'react';
import './CrieSeuPet.css';

const CrieSeuPet = () => {
  return (
    <div className="form-card">
    <h2 className="section-title">Informações sobre o PET</h2>
    <form onSubmit={handlePetSubmit}>
        <input
            type="text"
            name="nomePet"
            placeholder="Nome do pet"
            value={petData.nomePet}
            onChange={handlePetChange}
            required
        />
        <input
            type="text"
            name="especie"
            placeholder="Espécie (Cachorro, Gato, etc.)"
            value={petData.especie}
            onChange={handlePetChange}
            required
        />
        <input
            type="text"
            name="raca"
            placeholder="Raça (Golden, Lhasa, etc.)"
            value={petData.raca}
            onChange={handlePetChange}
        />
        <input
            type="text"
            name="idadePet"
            placeholder="Idade"
            value={petData.idadePet}
            onChange={handlePetChange}
        />
        <input
            type="text"
            name="generoPet"
            placeholder="Gênero"
            value={petData.generoPet}
            onChange={handlePetChange}
        />

        <input
            type="text"
            name="vacinado"
            placeholder="O pet é vacinado? (digite SIM ou NÃO)"
            value={petData.vacinado}
            onChange={handlePetChange}
        />

        <input
            type="text"
            name="castrado"
            placeholder="O pet é castrado? (digite SIM ou NÃO)"
            value={petData.castrado}
            onChange={handlePetChange}
        />

        <input
            type="text"
            name="descricaoPet"
            placeholder="Escreva uma breve descrição sobre o pet"
            value={petData.descricaoPet}
            onChange={handlePetChange}
        />
        <button type="submit" className="submit-button">
            Finalizar Cadastro
        </button>
    </form>
</div>
  );
};

export default CrieSeuPet;