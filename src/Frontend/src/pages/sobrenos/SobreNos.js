import React from 'react';
import './SobreNos.css';

function SobreNos() {
  return (
    <div className="sobre-nos">

      <div className="banner">
        <img src="imagens/banner-sobre-nos2.jpg" alt="Banner do Pet Hero" />
      </div>

      <div className="welcome-section">
        <div className="header-image">
          <img src="imagens/mao-e-pata.png" alt="Mão e pata de cachorro se tocando" />
        </div>
        <div className="header-text">
          <h1>SEJA BEM VINDO!</h1>
          <p>Bem-vindo ao PET HERO! Somos uma plataforma dedicada a transformar vidas e criar conexões entre pessoas e animais que precisam de um lar amoroso. Nosso objetivo é facilitar o processo de adoção de pets, conectando interessados em adotar a ONGs e protetores de animais comprometidos com a causa da adoção responsável.</p>
        </div>
      </div>

      {/* Seções existentes */}
      <section className="historia">
        <div className="historia-content">
          <h2>A História do Pet Hero</h2>
          <p>O Pet Hero nasceu da paixão por animais e da vontade de transformar o futuro de tantos pets que aguardam por uma chance de serem adotados. A ideia surgiu a partir da necessidade de integrar um número crescente de ONGs e abrigos com pessoas dispostas a oferecer um lar para um animal. Fundado em 2024 por um grupo de amantes de animais, o Pet Hero conecta e auxilia a jornada da adoção com o apoio de diversas ONGs.</p>
          <p>Com um olhar atento sobre as necessidades desse setor, trabalhamos incansavelmente para tornar o processo de adoção mais simples, transparente e acessível a todos.</p>
        </div>
        <div className="historia-image">
          <img src="imagens/cao-e-gato.png" alt="Cachorro e gato juntos" />
        </div>
      </section>

      <section className="missao" style={{ marginBottom: '40px' }}>
        <div className="missao-image">
          <img src="imagens/cao-e-gato2.png" alt="Dois cachorros felizes" />
        </div>
        <div className="missao-content">
          <h2>Nossa Missão!</h2>
          <p>A missão do PET HERO é simples, mas poderosa: salvar vidas, promover a adoção consciente e proporcionar um futuro melhor para os animais. Trabalhamos de forma incansável para criar um espaço seguro e confiável onde ONGs, abrigos e protetores de animais possam expor os pets disponíveis para adoção, e entusiastas e pessoas interessadas possam encontrar o companheiro ideal para suas vidas.</p>
        </div>
      </section>
    </div>
  );
}

export default SobreNos;