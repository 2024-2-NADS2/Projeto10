// src/components/DuvidasSobreAdocao/DuvidasSobreAdocao.js
import React from 'react';
import './DuvidasSobreAdocao.css';

function DuvidasSobreAdocao() {
  const depoimentos = [
    {
      nome: 'Ana Silva',
      imagem: 'imagens/depoimento1.jpg',
      texto: 'Adotar meu cachorro mudou minha vida. Ele me trouxe muita alegria e companheirismo! O processo foi fácil e seguro, graças ao Pet Hero.'
    },
    {
      nome: 'Carla Souza',
      imagem: 'imagens/depoimento2.jpg',
      texto: 'Sempre quis ter um gato e adotar foi a melhor decisão. O Pet Hero tornou todo o processo acessível e rápido. Estou muito feliz com meu novo amigo!'
    },
    {
      nome: 'Maria Oliveira',
      imagem: 'imagens/depoimento3.jpg',
      texto: 'A adoção de um pet é um ato de amor e gratidão. Graças ao Pet Hero, encontrei meu companheiro perfeito e recomendo a todos que considerem essa opção.'
    }
  ];

  return (
    <div className="duvidas-sobre-adocao">
      <section className="intro-section">
        <h1>Dúvidas sobre Adoção</h1>
        <p>Aqui você encontrará as respostas para as perguntas mais frequentes sobre o processo de adoção de pets.</p>
      </section>

      <section className="faq-section">
        <div className="faq-card">
          <h2>Como funciona o processo de adoção?</h2>
          <p>O processo de adoção envolve entrar em contato com a ONG, escolher um pet e seguir as etapas necessárias para garantir a adoção responsável.</p>
        </div>
        <div className="faq-card">
          <h2>Quais documentos são necessários?</h2>
          <p>Documentos básicos como identidade, comprovante de residência e, em alguns casos, uma entrevista são necessários para concluir o processo.</p>
        </div>
        <div className="faq-card">
          <h2>Existem custos envolvidos?</h2>
          <p>Algumas ONGs podem solicitar uma taxa simbólica para ajudar nos cuidados dos outros animais resgatados.</p>
        </div>
        <div className="faq-card">
          <h2>Posso devolver o animal adotado?</h2>
          <p>A devolução é possível, mas deve ser discutida com a ONG para garantir o bem-estar do animal.</p>
        </div>
      </section>

      <section className="historias-adocao" style={{ marginBottom: '40px' }}>
        <h2>Histórias de Adoção</h2>
        <p>Nada nos faz mais felizes do que ver um pet encontrar um novo lar. Aqui estão algumas histórias emocionantes de adoção que aconteceram graças ao Pet Hero:</p>
        <div className="cards-container">
          {depoimentos.map((depoimento, index) => (
            <div className="card" key={index}>
              <img src={depoimento.imagem} alt={`Foto de ${depoimento.nome}`} className="card-image" />
              <div className="card-content">
                <h3>{depoimento.nome}</h3>
                <p>{depoimento.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DuvidasSobreAdocao;