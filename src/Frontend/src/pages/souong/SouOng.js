import React, { useState } from "react";
import "./SouOng.css";

function SouOng() {
  const [showPetForm, setShowPetForm] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handlePetFormToggle = (response) => {
    if (response === "yes") {
      setShowPetForm(true);
      setShowSubmitButton(false); // essa parte culta o botão "finalizar cadastro"
    } else {
      setShowPetForm(false);
      setShowSubmitButton(true); // essa exibe o botão "finalizar cadastro"
    }
  };

  return (
    <div className="sou-ong-container">
      <h1 className="form-title">Crie sua conta</h1>
      <div className="form-card">
        <h2 className="section-title">Crie seu login</h2>
        <form>
          <input type="email" placeholder="Digite um e-mail" required />
          <input type="tel" placeholder="Digite o telefone" required />
          <input type="text" placeholder="Nome da instituição" required />
          <input type="text" placeholder="Digite o CNPJ" required />

          <h2 className="section-title">Senha</h2>
          <input type="password" placeholder="Faça sua senha de acesso" required />
          <input type="password" placeholder="Repita a senha" required />

          <div className="question">
            <label>Gostaria de cadastrar um pet agora?</label>
            <div className="buttons">
              <button
                type="button"
                onClick={() => handlePetFormToggle("yes")}
                className="yes-button"
              >
                Sim
              </button>
              <button
                type="button"
                onClick={() => handlePetFormToggle("no")}
                className="no-button"
              >
                Não
              </button>
            </div>
          </div>

          {showSubmitButton && (
            <button type="submit" className="submit-button">
              Finalizar cadastro
            </button>
          )}
        </form>
      </div>

      {showPetForm && (
        <div className="form-card">
          <h2 className="section-title">Cadastre seu pet</h2>
          <form>
            <input type="text" placeholder="Nome" required />
            <input type="text" placeholder="Idade" required />
            <input type="text" placeholder="Raça" required />
            <input type="text" placeholder="Gênero" required />
            <input type="text" placeholder="Espécie/Subespécie" required />
            <input type="text" placeholder="Castrado? (Sim ou Não)" required />
            <input type="text" placeholder="Vacinado? (Sim ou Não)" required />
            <textarea
              placeholder="Descrição do animal"
              rows="4"
              required
            ></textarea>

            <button type="submit" className="submit-button">
              Finalizar cadastro do pet
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SouOng;