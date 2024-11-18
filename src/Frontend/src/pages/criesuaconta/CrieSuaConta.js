import React from 'react';
import './CrieSuaConta.css';

const CrieSuaConta = () => {
  return (
    <div className="crie-sua-conta-container">
      <h2>Crie uma conta para entrar com processo de adoção na PetHero!</h2>
      <div className="form-box" style={{ marginBottom: '40px' }}>
        <h3>Preencha os campos abaixo com seus dados:</h3>
        <form>
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefone para contato (com DDD)" />
          <input type="text" placeholder="Endereço de sua residência atual" />
          
          <input type="password" placeholder="Senha de acesso" />
          <input type="password" placeholder="Repita a senha" />
          <button type="submit" className="finalizar-button">Finalizar cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default CrieSuaConta;