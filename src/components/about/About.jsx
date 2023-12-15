import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import FounderImg from "../../assets/skj.jpg";

const About = () => {
  return (
    <div className="about">
      <main>
        <h1>Quiénes Somos</h1>
        <article>
          <h4>Hamburguesería</h4>
          <p>
            Esto es la Hamburguesería. El lugar con las hamburguesas más
            saborosas del planeta.
          </p>
          <p>
            Explora nuestra oferta de comida y hamburguesas. Haz click a
            continuación para ver el menú
          </p>
          <Link to="/menu">
            <IoSearch />
          </Link>
        </article>
        <div>
          <h2>Fundador</h2>
          <article>
            <div>
              <img alt="foto fundador hamburgesería" src={FounderImg} />
              <h3>Nelson</h3>
            </div>
            <p>
              Soy Nelson, el fundador de la hamburguesería y afiliado a Good
              Taste...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;
