import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Hamburguesería</h1>
        <p>Regalaté una sabrosa hamburguesa</p>
      </div>
      <Link to="/menu">Explorar el menú</Link>
    </div>
  );
};

export default Home;
