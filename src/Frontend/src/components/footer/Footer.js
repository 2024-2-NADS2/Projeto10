// components/Footer.js

import React from "react";
import { Link } from "react-router-dom";  // essa parte importa o link do react router dom
import "./Footer.css";

function Footer() {
  const footerSections = [
    {
      title: "Gostaria de entrar em contato?",
      description: "Siga-nos nas redes sociais!",
      linkText: "SAIBA MAIS",
      linkTo: "/",  // Atualizar o link para o caminho correto
    },
    {
      title: "Não sabe como cuidar do seu pet?",
      description: "Aqui temos diversas dicas e instruções para cuidar do seu pet!",
      linkText: "SAIBA MAIS",
      linkTo: "#",
    },
    {
      title: "Lista de verificação para novos adotantes",
      description: "Tem interesse em adotar um pet? Clique abaixo e preencha o formulário",
      linkText: "SAIBA MAIS",
      linkTo: "/formulario-adocao",
    },
  ];

  return (
    <footer className="footer">
      {footerSections.map((section, index) => (
        <div className="footer-section" key={index}>
          <h4>{section.title}</h4>
          <p>{section.description}</p>
          {section.linkTo === "#" ? (
            <a href={section.linkTo}>{section.linkText}</a>
          ) : (
            <Link to={section.linkTo}>{section.linkText}</Link>
          )}
        </div>
      ))}
    </footer>
  );
}

export default Footer;