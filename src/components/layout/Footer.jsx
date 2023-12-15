import React from "react";

import { IoLogoGithub, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Hamburgueseria</h2>
        <p className="strong">Intentamos darte el mejor sabor posible.</p>
        <p>
          {" "}
          Prestamos atencion a tus comentarios. Todos los derechos reservados
          @hamburgueseria
        </p>
      </div>
      <aside>
        {" "}
        <h4>Siguenos</h4>
        <a href="https://youtube.com">
          <IoLogoYoutube />
        </a>
        <a href="https://instagram.com">
          <IoLogoInstagram />
        </a>
        <a href="https://github.com">
          <IoLogoGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
