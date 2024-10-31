// components/Footer.js

import React from "react";
import { Link } from "react-router-dom";  // Importa o Link do react-router-dom
import "./Footer.css";

function Footer() {
  const footerSections = [
    {
      title: "Dúvidas sobre a adoção?",
      description: "Aqui você tem tudo o que precisa para saber como adotar seu pet!",
      linkText: "SAIBA MAIS",
      linkTo: "#",  // Placeholder
    },
    {
      title: "Não sabe como cuidar do seu pet?",
      description: "Aqui temos diversas dicas e instruções para cuidar do seu pet!",
      linkText: "SAIBA MAIS",
      linkTo: "#",  // Placeholder
    },
    {
      title: "Lista de verificação para novos adotantes",
      description: "Tem interesse em adotar um pet? Clique abaixo e preencha o formulário",
      linkText: "SAIBA MAIS",
      linkTo: "/formulario-adocao",  // Link para a nova página
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