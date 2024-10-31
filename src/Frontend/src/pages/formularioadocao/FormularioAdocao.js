import React from 'react';
import './FormularioAdocao.css';

const FormularioAdocao = () => {
  return (
    <div className="form-container">
      <h2>Formulário de Interesse para Adoção</h2>
      <form>
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" required />

        <label>Email</label>
        <input type="email" placeholder="Digite seu email" required />

        <label>Mensagem</label>
        <textarea placeholder="Escreva sua mensagem" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioAdocao;